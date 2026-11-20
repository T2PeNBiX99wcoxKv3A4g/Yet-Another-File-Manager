const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OverviewView-BJIPHm4h.js","assets/rolldown-runtime-XKyaHtl9.js","assets/dist-sR-t6Emc.js","assets/selectionMenu-Byl-Vaw4.js","assets/theme-Ocob2ChL.js","assets/theme-Cd7QcbnN.css","assets/Icons-BCGG7XUW.js","assets/concepts-69Rb8xko.js","assets/textSearch-NAcbF1oI.js","assets/FileList-BNMKJI9p.js","assets/IconPicker-hmIDdRzM.js","assets/SettingsView-DsvcvIch.js","assets/GalleryView-C7zwMR98.js","assets/RecycleView-B5IpsZ4z.js","assets/PickerWindow-B1LSswIE.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{C as t,D as n,E as r,O as i,S as a,T as o,a as s,b as c,c as l,d as u,h as d,k as f,l as p,m,p as ee,r as h,u as g,x as _,y as v}from"./theme-Ocob2ChL.js";import{_ as te,a as y,c as ne,d as re,f as b,g as x,i as ie,n as S,o as ae,r as oe,s as se,u as C}from"./dist-sR-t6Emc.js";import{A as w,B as ce,C as le,D as ue,F as de,G as fe,I as pe,J as me,K as he,Q as ge,R as _e,S as ve,T as ye,V as be,W as xe,Z as Se,_ as Ce,_t as we,a as Te,at as Ee,b as De,bt as Oe,c as ke,ct as Ae,d as je,f as Me,ft as Ne,g as T,gt as Pe,h as Fe,ht as Ie,i as Le,k as Re,l as ze,m as Be,nt as Ve,o as He,p as Ue,st as We,tt as Ge,u as Ke,v as qe,vt as Je,x as Ye,y as Xe,z as Ze}from"./selectionMenu-Byl-Vaw4.js";import{a as Qe,f as $e,i as et,p as tt,u as nt}from"./concepts-69Rb8xko.js";import{A as rt,B as it,C as at,D as ot,E as st,F as ct,G as lt,J as ut,K as dt,L as ft,N as pt,O as mt,Q as ht,R as gt,U as _t,V as vt,W as yt,X as bt,Y as E,Z as xt,_t as St,c as Ct,ct as wt,d as Tt,dt as Et,et as D,ft as Dt,g as O,gt as Ot,ht as kt,i as At,k as jt,l as Mt,lt as Nt,m as Pt,mt as Ft,nt as It,ot as k,p as Lt,pt as Rt,q as A,r as zt,st as Bt,t as Vt,tt as Ht,ut as Ut,v as Wt,vt as Gt,x as Kt,yt as qt,z as Jt}from"./FileList-BNMKJI9p.js";import{A as Yt,B as Xt,E as Zt,F as Qt,G as j,H as $t,I as en,K as tn,L as nn,M as rn,O as an,Q as on,X as sn,Y as cn,a as ln,at as un,ct as dn,d as fn,dt as pn,f as mn,i as hn,k as gn,lt as _n,m as vn,mt as yn,n as bn,p as xn,q as Sn,r as Cn,t as wn,tt as Tn,ut as En,v as Dn,vt as On,y as M}from"./Icons-BCGG7XUW.js";async function kn(){return b.available?await b.request(`app.info`):{version:`dev`,platform:`web`,logDirectory:``,rounded:!1,debug:!1}}async function An(e){b.available?await b.request(`system.openUrl`,{url:e}):window.open(e,`_blank`,`noreferrer`)}async function jn(){b.available&&await Rn(`update.openLogs`)}async function Mn(e){b.available?await Rn(`update.openRelease`):e&&window.open(e,`_blank`,`noreferrer`)}async function Nn(){return b.available?await b.request(`update.status`)??null:null}async function Pn(){return b.available?await b.request(`update.check`):{current:`dev`,latest:`dev`,available:!1}}async function Fn(){return b.available?await b.request(`update.download`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}async function N(){await Rn(`update.cancel`)}async function In(){return b.available?await b.request(`update.install`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}function P(e){return b.on(t=>{t.type===`update.progress`&&e(t.data)})}function Ln(e){return b.on(t=>{t.type===`update.changelog`&&e(t.data)})}async function Rn(e,t,n=3e4){let r=await b.request(e,t,n);if(!r.ok)throw Error(r.error??`The action failed.`)}var F=e(te(),1),zn=i(),Bn={managed:0,private:0,workingSet:0,available:0};async function Vn(){return b.available?await b.request(`app.memory`):Bn}async function Hn(){return b.available?await b.request(`app.memory.trim`):Bn}var Un={registered:!1,pathMatches:!1,registeredPath:null};async function Wn(){return b.available?await b.request(`app.scheme`):Un}async function Gn(e){return b.available?await b.request(`app.scheme.set`,{enabled:e}):Un}var Kn={supported:!1,mode:`none`,active:!1,error:null};async function qn(){return b.available?await b.request(`app.startup`):Kn}async function Jn(e){return b.available?await b.request(`app.startup.set`,{mode:e}):Kn}async function Yn(){return b.available?(await b.request(`app.tasks`)).tasks:[]}async function Xn(){b.available&&await b.request(`app.tasks.clear`)}var I=re(),Zn=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function Qn(e){return Zn.test(e)}function $n({settings:e,theme:t}){let n=e?.backgroundSource??null,r=n?.startsWith(`url:`)?n.slice(4):_(n)?n:null,i=n?.startsWith(`file:`)?n.slice(5):null,a=Ne(i),o=n?.startsWith(`builtin:`)?et(n,t):r??a,s=r===null?i===null?n!==null&&Qe(n):Qn(i):Qn(r.split(/[?#]/)[0]);if(!n||!o)return null;let c=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,I.jsxs)(er,{"aria-hidden":!0,children:[s?(0,I.jsx)(nr,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o,style:{filter:c}}):(0,I.jsx)(tr,{src:o,style:{filter:c}}),(0,I.jsx)(rr,{})]})}var er=x.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,tr=x.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,nr=x.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,rr=x.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);

    /* The light artwork is drawn pale already, so it only keeps a faint accent glow. */
    html[data-theme="light"] & {
        background: radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.06), transparent 60%);
    }
`,L=f();function ir({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let o=C(),s=(0,F.useRef)(null),[c,l]=(0,F.useState)(()=>Math.max(1,Math.ceil(n))),u=e??`delete`;return(0,F.useEffect)(()=>{s.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));l(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,L.createPortal)((0,I.jsx)(cr,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,I.jsxs)(lr,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsx)(ur,{children:o(`protected_folder`)}),(0,I.jsx)(dr,{children:o(`these_paths_are_protected_by_the_safety_settings`)}),(0,I.jsx)(fr,{children:t.map(e=>(0,I.jsxs)(pr,{children:[(0,I.jsx)(mr,{children:e.path}),(0,I.jsx)(hr,{children:o(`protected_by_pattern`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,I.jsx)(gr,{children:ar(o,u,r??!1)}),(0,I.jsx)(_r,{children:or(o,u)}),(0,I.jsx)(vr,{children:o(`this_waits_seconds_s_before_the_button_works`,{seconds:n})}),(0,I.jsxs)(yr,{children:[(0,I.jsx)(br,{onClick:i,ref:s,type:`button`,children:o(`cancel`)}),(0,I.jsx)(xr,{disabled:c>0,onClick:a,type:`button`,children:c>0?sr(o,u,c):sr(o,u,0)})]})]})}),document.body)}function ar(e,t,n){switch(t){case`delete`:return e(n?`deletes_permanently`:`moves_to_the_recycle_bin`);case`move`:return e(`moves_the_entries`);case`rename`:return e(`renames_the_entry`);case`write`:return e(`writes_into_this_folder`)}}function or(e,t){switch(t){case`delete`:return e(`nothing_has_been_deleted`);case`move`:return e(`nothing_has_been_moved`);case`rename`:return e(`nothing_has_been_renamed`);case`write`:return e(`nothing_has_been_written`)}}function sr(e,t,n){let r=n>0?t===`delete`?`delete_anyway_seconds_s`:t===`move`?`move_anyway_seconds_s`:t===`rename`?`rename_anyway_seconds_s`:`write_anyway_seconds_s`:t===`delete`?`delete_anyway`:t===`move`?`move_anyway`:t===`rename`?`rename_anyway`:`write_anyway`;return n>0?e(r,{seconds:n}):e(r)}var cr=x.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${He}
`,lr=x.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Ke}
`,ur=x.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,dr=x.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,fr=x.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-height: 220px;
    margin-bottom: 12px;
    overflow-y: auto;
    padding: 8px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.55);
`,pr=x.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,mr=x.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,hr=x.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,gr=x.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,_r=x.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,vr=x.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,yr=x.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,br=x.button`
    min-width: 84px;
    padding: 7px 12px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,xr=x.button`
    min-width: 110px;
    padding: 7px 12px;
    border: 1px solid rgba(248, 113, 113, 0.5);
    border-radius: var(--radius-sm);
    background: rgba(248, 113, 113, 0.16);
    color: #fca5a5;
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: rgba(248, 113, 113, 0.8);
        color: #fecaca;
    }

    &:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }
`;function Sr(){let e=C(),[t,n]=(0,F.useState)(null),r=(0,F.useRef)(null),i=(0,F.useRef)(null);(0,F.useEffect)(()=>(Fe(e=>new Promise(t=>{r.current=t,n(e)})),()=>Fe(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,F.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,L.createPortal)((0,I.jsx)(R,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,I.jsxs)(z,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsx)(Cr,{children:e(`notice`)}),(0,I.jsx)(B,{children:t}),(0,I.jsx)(wr,{children:(0,I.jsx)(V,{onClick:a,ref:i,type:`button`,children:e(`ok`)})})]})}),document.body)}var R=x.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${He}
`,z=x.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Ke}
`,Cr=x.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,B=x.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,wr=x.div`
    display: flex;
    justify-content: flex-end;
`,V=x.button`
    min-width: 84px;
    padding: 7px 12px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`;function Tr(){let e=C(),[t,n]=(0,F.useState)(null);(0,F.useEffect)(()=>b.on(e=>{let t=e;t.type===`fs.elevation.ask`&&t.data&&n(t.data)}),[]);let r=e=>{let r=t;n(null),r&&b.request(`fs.elevation.answer`,{token:r.token,allow:e})},i=(t=>{switch(t){case`delete`:return e(`delete`);case`rename`:return e(`rename`);case`copy`:return e(`copy`);case`moveTo`:return e(`move`);case`extractArchive`:return e(`extract_archive`);case`newFolder`:case`newFolderAt`:return e(`new_folder`);case`newFile`:case`newFileAt`:return e(`new_file`);case`restoreRecycle`:return e(`restore`);case`writeFile`:return e(`save`);default:return``}})(t?.action??``);return(0,I.jsx)(Le,{confirmLabel:e(`run_as_administrator`),message:e(`this_path_needs_administrator_rights_to_action_restart_the_app_as_administrator_and_try_again`,{path:t?.path??``,action:i.length>0?i.toLowerCase():e(`ok`).toLowerCase()}),onCancel:()=>r(!1),onConfirm:()=>r(!0),open:t!==null,title:e(`administrator_rights_required`)})}function Er(){let e=C(),[t,n]=(0,F.useState)(null),[r,i]=(0,F.useState)(``),a=(0,F.useRef)(null),o=(0,F.useRef)(null);(0,F.useEffect)(()=>(T((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>T(null)),[]),(0,F.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,L.createPortal)((0,I.jsx)(Dr,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,I.jsxs)(Or,{role:`dialog`,"aria-modal":`true`,children:[(0,I.jsx)(kr,{children:e(`archive_password`)}),(0,I.jsx)(H,{children:t.wrong?e(`that_password_did_not_open_the_archive_try_again`):e(`this_archive_is_encrypted_enter_its_password`)}),(0,I.jsx)(Ar,{title:t.archive,children:t.archive}),(0,I.jsx)(jr,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,I.jsxs)(U,{children:[(0,I.jsx)(Mr,{onClick:()=>s(null),type:`button`,children:e(`cancel`)}),(0,I.jsx)(Nr,{disabled:r.length===0,onClick:c,type:`button`,children:e(`ok`)})]})]})}),document.body)}var Dr=x.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${He}
`,Or=x.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Ke}
`,kr=x.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,H=x.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Ar=x.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,jr=x.input`
    width: 100%;
    height: 32px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    outline: 0;
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;

    &:focus {
        border-color: var(--border-color-focus);
        box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);
    }
`,U=x.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,Mr=x.button`
    min-width: 84px;
    padding: 7px 12px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`,Nr=x(Mr)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Pr({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:ee,onSelectMatches:h}){let g=C(),_=(0,F.useRef)(null),v=c??g(`search_this_folder`);(0,F.useEffect)(()=>{let e=_.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let te=e=>{e(),_.current?.focus()};return(0,I.jsxs)(Fr,{children:[(0,I.jsx)(dn,{}),(0,I.jsx)(Ir,{"aria-label":v,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),ee())},placeholder:v,ref:_,spellCheck:!1,value:e}),!s&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Lr,{children:i===0?`0/0`:`${a+1}/${i}`}),h&&(0,I.jsx)(Rr,{disabled:i===0,onClick:h,title:g(`select_all_matches`),type:`button`,children:(0,I.jsx)(fn,{size:12})}),(0,I.jsx)(Rr,{$chevron:!0,onClick:()=>te(u),title:g(`previous_match_shift_enter`),type:`button`,children:(0,I.jsx)(mn,{size:12})}),(0,I.jsx)(Rr,{$chevron:!0,$down:!0,onClick:()=>te(d),title:g(`next_match_enter`),type:`button`,children:(0,I.jsx)(mn,{size:12})})]}),(0,I.jsx)(zr,{$on:n,onClick:()=>te(f),title:g(`match_case`),type:`button`,children:`Aa`}),(0,I.jsx)(zr,{$on:r,onClick:()=>te(p),title:g(`regular_expression`),type:`button`,children:`.*`}),!s&&(0,I.jsx)(Br,{$on:t===`hide`,onClick:()=>te(m),title:g(t===`hide`?`non_matching_entries_are_hidden`:`non_matching_entries_are_dimmed`),type:`button`,children:t===`hide`?(0,I.jsx)(Yt,{size:12}):(0,I.jsx)(gn,{size:12})}),(0,I.jsx)(Rr,{onClick:ee,title:g(`close_search_esc`),type:`button`,children:(0,I.jsx)(M,{size:12})})]})}var Fr=x.div`
    position: absolute;
    top: 10px;
    right: 16px;
    z-index: 20;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 5px 6px 5px 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: var(--shadow-float);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: var(--text-muted);
    ${je}
`,Ir=x.input`
    width: 180px;
    padding: 4px 2px;
    border: 0;
    background: transparent;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 12px;
    outline: none;

    &::placeholder {
        color: var(--text-muted);
    }
`,Lr=x.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Rr=x.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;

    svg {
        transform: ${({$chevron:e,$down:t})=>e?`rotate(${t?`90deg`:`-90deg`})`:`none`};
    }

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:disabled {
        background: transparent;
        color: var(--text-secondary);
        opacity: 0.35;
        cursor: default;
    }
`,zr=x.button`
    min-width: 24px;
    height: 22px;
    padding: 0 4px;
    border: 1px solid ${({$on:e})=>e?`var(--border-color-focus)`:`transparent`};
    border-radius: var(--radius-sm);
    background: ${({$on:e})=>e?`rgba(var(--accent-rgb), 0.18)`:`transparent`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font-family: var(--font-mono);
    font-size: 10px;
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
    }
`,Br=x(zr)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`,Vr=`yafm://`,W={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function Hr(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function Ur(e){return`${Vr}${e===`home`?`overview`:e}`}function Wr(e){return Hr(e)?W[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Gr(e){let t=e.trim();if(t.length===0)return null;if(!Hr(t))return t;let n=W[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?Ur(n):null}function Kr({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=C(),s=A(),[c,l]=(0,F.useState)(!1),[u,d]=(0,F.useState)(``),[f,p]=(0,F.useState)([]),[m,ee]=(0,F.useState)(0),[h,g]=(0,F.useState)(null),[_,v]=(0,F.useState)(null),[te,y]=(0,F.useState)(null),ne=(0,F.useRef)(null),re=(0,F.useRef)(null),b=(0,F.useRef)(0);(0,F.useEffect)(()=>{if(!Tt(e)){y(null);return}let t=O(e);if(!t){y(null);return}let n=!0;return Ct().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);y({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&y(null)),()=>{n=!1}},[e]),(0,F.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,F.useEffect)(()=>{r&&r!==b.current&&(b.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,F.useEffect)(()=>{c&&ne.current?.select()},[c]),(0,F.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[c]);let x=()=>{d(e.replace(/\\/g,`/`)),l(!0)},ie=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,F.useEffect)(()=>{if(!c){p([]);return}let e=Xr(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{_e(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),ee(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let S=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,F.useLayoutEffect)(()=>{if(!c){g(null);return}let e=()=>{let e=re.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);g({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,I.jsxs)(K,{onPointerDown:e=>e.stopPropagation(),ref:re,children:[(0,I.jsxs)(ii,{children:[(0,I.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),ee(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),ee(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?S(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):ie(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:ne,spellCheck:!1,value:u}),(0,I.jsx)(q,{onClick:()=>l(!1),title:o(`cancel`),type:`button`,children:(0,I.jsx)(M,{size:12})}),(0,I.jsx)(q,{$apply:!0,onClick:ie,onPointerDown:e=>e.stopPropagation(),title:o(`open_this_path`),type:`button`,children:(0,I.jsx)(fn,{size:14})})]}),f.length>0&&h&&(0,L.createPortal)((0,I.jsx)(ti,{onPointerDown:e=>e.stopPropagation(),style:{left:h.left,top:h.top,width:h.width},children:f.map((e,t)=>(0,I.jsxs)(ni,{$active:t===m,onClick:t=>S(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>ee(t),type:`button`,children:[(0,I.jsx)(rt,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,I.jsx)(ri,{children:e.name})]},e.path))}),document.body)]});let ae=t?[{label:t,path:e,icon:n}]:qr(e,te)??Yr(e,s.places);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Zr,{onClick:x,title:o(`click_to_type_a_path`),children:ae.map((t,n)=>(0,I.jsxs)(G,{$last:n===ae.length-1,children:[n>0&&(0,I.jsx)($r,{children:(0,I.jsx)(mn,{size:9})}),(0,I.jsxs)(ei,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):v({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,I.jsx)(Qr,{children:(0,I.jsx)(pt,{place:t.place,size:13})}):t.icon&&(0,I.jsx)(Qr,{children:t.icon}),t.label]})]},t.path))}),_&&(0,I.jsx)(Te,{items:[{label:o(`open`),icon:(0,I.jsx)(hn,{size:14}),onSelect:()=>i(_.path)},{label:o(`open_in_new_tab`),icon:(0,I.jsx)(un,{size:14}),onSelect:()=>i(_.path,!0)},{label:o(`copy_as_path`),icon:(0,I.jsx)(Dn,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(_.path)},...Hr(_.path)?[{label:o(`open_with`),icon:(0,I.jsx)(an,{size:14}),onSelect:()=>void Ft(_.path)},{label:o(`properties`),icon:(0,I.jsx)(Qt,{size:14}),onSelect:()=>void St([_.path])}]:[]],onClose:()=>v(null),x:_.x,y:_.y})]})}function qr(e,t){let n=O(e);if(!n)return null;let r=st(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,I.jsx)(_n,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function Jr(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function Yr(e,t){let n=Jr(e),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>r(t.path,e.path));t>i&&(i=t,a=e)}return a&&i>=0&&n.splice(0,i+1,{label:a.name,path:n[i].path,place:a}),n}function Xr(e){if(Hr(e)||Tt(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var Zr=x.div`
    display: flex;
    align-items: center;
    min-width: 0;
    flex: 1;
    height: 32px;
    padding: 0 10px;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    overflow: hidden;
    cursor: text;
    font-family: var(--font-path), var(--font-cjk);
    transition: border-color 130ms ease, background 130ms ease, box-shadow 130ms ease;

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-input);
        box-shadow: inset 0 0 0 1px rgba(var(--accent-secondary-rgb), 0.08);
    }
`,G=x.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Qr=x.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,$r=x.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,ei=x.button`
    display: inline-flex;
    align-items: center;
    padding: 4px 6px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: inherit;
    font: inherit;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: -1px;
    }
`,K=x.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,ti=x.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${Ue}
    animation: yafm-path-in 130ms cubic-bezier(0.22, 1, 0.36, 1);
    transform-origin: top left;

    @keyframes yafm-path-in {
        from {
            opacity: 0;
            transform: translateY(-4px) scale(0.99);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
`,ni=x.button`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 6px 8px;
    border: 0;
    border-radius: var(--radius-sm);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`transparent`};
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;
    text-align: left;
    cursor: pointer;
    transition: background 100ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.14);
    }
`,ri=x.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ii=x.div`
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1;
    min-width: 0;
    height: 32px;
    padding: 0 4px 0 10px;
    border: 1px solid var(--border-color-focus);
    border-radius: var(--radius-md);
    background: var(--bg-input);
    box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);

    input {
        flex: 1;
        min-width: 0;
        border: 0;
        outline: 0;
        background: transparent;
        color: var(--text-primary);
        font-family: var(--font-mono);
        font-size: 12px;
    }
`,q=x.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: ${({$apply:e})=>e?`rgba(34, 197, 94, 0.22)`:`rgba(148, 163, 184, 0.2)`};
        color: ${({$apply:e})=>e?`#4ade80`:`var(--text-primary)`};
    }
`;function ai({places:e,drives:t,recent:i,recentLimit:a,currentPath:o,activeKind:s,homePath:c=``,version:l=0,historyVersion:d=0,hiddenViews:f=[],onNavigate:p,onOpenView:h}){let[g,_]=(0,F.useState)([]),v=C(),[te,y]=(0,F.useState)(null),ne=A();(0,F.useEffect)(()=>{nt().then(e=>{y(e),_(ft(e).filter(e=>e.pinned))},()=>{y(null),_([])})},[l]),(0,F.useEffect)(()=>{if(!b.available)return;let e=g.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||c).filter(e=>e.length>0);return b.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>b.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[g,c]);let re=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>r(e.path,t));return{name:te?.placeNames?.[t]??n?.name??(u(t)||t),path:t,kind:`folder`,icon:n?.icon??te?.placeIcons?.[t]??null}}),x=s===`files`;return(0,I.jsxs)(di,{children:[(0,I.jsxs)(fi,{children:[!f.includes(`home`)&&(0,I.jsxs)(J,{$active:s===`home`,onClick:e=>h(`home`,k(e)),title:v(`overview`),type:`button`,children:[(0,I.jsx)(cn,{}),(0,I.jsx)(Y,{children:v(`overview`)})]}),!f.includes(`recycle`)&&(0,I.jsxs)(J,{$active:s===`recycle`,onClick:e=>h(`recycle`,k(e)),title:v(`recycle_bin`),type:`button`,children:[(0,I.jsx)(On,{}),(0,I.jsx)(Y,{children:v(`recycle_bin`)})]}),!f.includes(`gallery`)&&(0,I.jsxs)(J,{$active:s===`gallery`,onClick:e=>h(`gallery`,k(e)),title:v(`gallery`),type:`button`,children:[(0,I.jsx)($t,{}),(0,I.jsx)(Y,{children:v(`gallery`)})]})]}),g.map(e=>(0,I.jsxs)(mi,{children:[(0,I.jsxs)(J,{as:`div`,$active:!1,children:[(0,I.jsx)(_i,{children:(0,I.jsx)(ct,{panel:e,size:16})}),(0,I.jsx)(Y,{children:v(e.title)})]}),(0,I.jsx)(hi,{children:(0,I.jsxs)(gi,{children:[e.kind===`quick`&&re(e).map(e=>(0,I.jsxs)(J,{$active:x&&r(o,e.path),onClick:t=>p(e.path,k(t)),title:e.path,type:`button`,children:[(0,I.jsx)(pt,{place:e}),(0,I.jsx)(Y,{children:e.name})]},e.path)),e.kind===`recent`&&i.slice(0,a).map(e=>{let t=dt(ne,e.path);return(0,I.jsxs)(J,{$active:x&&r(o,e.path),onClick:t=>e.isDirectory?p(e.path,k(t)):void me(e.path),title:e.path,type:`button`,children:[t&&ne.useIcons?(0,I.jsx)(pt,{place:t}):(0,I.jsx)(rt,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,I.jsx)(Y,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,I.jsx)(ci,{historyVersion:d,onNavigate:p}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,I.jsxs)(J,{$active:x&&r(o,e.name),onClick:t=>p(e.name,k(t)),title:e.name,type:`button`,children:[(0,I.jsx)(Zt,{}),(0,I.jsxs)(Y,{children:[ee(e),(0,I.jsxs)(vi,{children:[m(e.freeSpace),` free`]}),(0,I.jsx)(yi,{children:(0,I.jsx)(bi,{$used:t,$tone:n(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,I.jsx)(li,{onNavigate:p,path:e.path||c})]})})]},e.id)),!f.includes(`settings`)&&(0,I.jsx)(pi,{children:(0,I.jsxs)(J,{$active:s===`settings`,onClick:e=>h(`settings`,k(e)),title:v(`settings`),type:`button`,children:[(0,I.jsx)(Qt,{}),(0,I.jsx)(Y,{children:v(`settings`)})]})})]})}var oi=10,si=40;function ci({historyVersion:e=0,onNavigate:t}){let n=C(),[r,i]=(0,F.useState)(null),a=A();return(0,F.useEffect)(()=>{be().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=dt(a,e.path);return(0,I.jsxs)(J,{$active:!1,onClick:n=>t(e.path,k(n)),title:o(n,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,I.jsx)(pt,{place:r}):(0,I.jsx)(rt,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,I.jsx)(Y,{children:r?.name||e.name})]},e.path)})}function li({path:e,onNavigate:t}){let[n,i]=(0,F.useState)(null);(0,F.useEffect)(()=>{e&&(i(null),_e(e,!1).then(i,()=>i(null)))},[e]),(0,F.useEffect)(()=>{if(e&&b.available)return b.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&r(n.data.path,e)&&_e(e,!1).then(i,()=>void 0)})},[e]);let a=n?.entries??[],o=a.filter(e=>e.isDirectory).slice(0,oi),s=a.filter(e=>!e.isDirectory).slice(0,si);return(0,I.jsxs)(I.Fragment,{children:[o.map(e=>(0,I.jsx)(ui,{entry:e,onNavigate:t},e.fullPath)),s.map(e=>(0,I.jsx)(ui,{entry:e,onNavigate:t},e.fullPath))]})}function ui({entry:e,onNavigate:t}){let n=A(),r=dt(n,e.fullPath);return(0,I.jsxs)(J,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,k(n)):void me(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,I.jsx)(pt,{place:r}):(0,I.jsx)(rt,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,I.jsx)(Y,{children:r?.name||e.name})]})}var di=x.aside`
    position: absolute;
    z-index: 20;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 52px;
    padding: 10px 9px;
    overflow: hidden;
    background: rgba(var(--bg-rgb), 0.78);
    border-right: 1px solid var(--border-color);
    backdrop-filter: blur(16px) saturate(115%);
    -webkit-backdrop-filter: blur(16px) saturate(115%);
    transition: width 150ms ease, padding 150ms ease, box-shadow 150ms ease, background 150ms ease;

    html.has-wallpaper & {
        background: rgba(var(--bg-rgb), 0.52);
    }

    &::-webkit-scrollbar {
        display: none;
    }

    &:hover {
        width: 224px;
        padding: 10px 10px;
        background: rgba(var(--bg-rgb), 0.90);
        box-shadow: 14px 0 36px var(--shadow-menu), 0 0 28px rgba(var(--accent-secondary-rgb), 0.06);
        overflow-y: auto;
        scrollbar-width: none;
    }

    &:not(:hover) ${()=>vi},
    &:not(:hover) ${()=>yi} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,fi=x.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,pi=x(fi)`
    margin-top: auto;
`,mi=x.div`
    display: flex;
    flex-direction: column;
`,hi=x.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${di}:hover ${mi}:hover > & {
        grid-template-rows: 1fr;
    }
`,gi=x.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-height: 0;
    max-height: 40vh;
    padding-left: 10px;
    overflow-y: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        width: 0;
    }
`,J=x.button`
    position: relative;
    display: flex;
    align-items: center;
    gap: 9px;
    width: 100%;
    padding: 7px 8px;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 12.5px;
    text-align: left;
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease, transform 130ms ease;

    &::before {
        content: "";
        position: absolute;
        left: -1px;
        top: 50%;
        width: 2px;
        height: 0;
        border-radius: 2px;
        background: var(--accent-primary);
        transform: translateY(-50%);
        transition: height 160ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    ${({$active:e})=>e&&`&::before { height: 56%; }`}
    svg {
        flex-shrink: 0;
        color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
        transition: color 130ms ease, transform 160ms cubic-bezier(0.22, 1, 0.36, 1);
        transform: scale(${({$active:e})=>e?1.08:1});
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.08);
        border-color: var(--border-color);
        color: var(--text-primary);

        svg {
            transform: scale(1.08);
        }
    }

    &:active {
        transform: scale(0.99);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,_i=x.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;

    img {
        width: 16px;
        height: 16px;
        object-fit: contain;
    }
`,Y=x.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,vi=x.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,yi=x.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,bi=x.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,xi={home:`overview`,settings:`settings`,recycle:`recycle_bin`,gallery:`gallery`};function Si({tabs:e,onRestore:t}){let n=C(),[r,i]=(0,F.useState)(!1),a=(0,F.useRef)(null);return(0,F.useEffect)(()=>{if(!r)return;let e=e=>{a.current?.contains(e.target)||i(!1)},t=()=>i(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[r]),(0,I.jsxs)(Ti,{ref:a,children:[(0,I.jsx)(Ei,{$active:r,onClick:()=>i(e=>!e),title:n(`recently_closed_tabs`),type:`button`,children:(0,I.jsx)(vn,{size:15})}),r&&(0,I.jsxs)(Di,{children:[(0,I.jsxs)(Oi,{children:[(0,I.jsxs)(ki,{children:[(0,I.jsx)(vn,{size:12}),n(`recently_closed_tabs`)]}),(0,I.jsx)(Ai,{onClick:()=>i(!1),title:n(`close`),type:`button`,children:(0,I.jsx)(M,{size:10})})]}),e.length===0?(0,I.jsx)(Ii,{children:n(`no_recently_closed_tabs`)}):(0,I.jsx)(ji,{children:[...e].reverse().map((r,a)=>{let o=e.length-1-a,s=Wr(r);return(0,I.jsxs)(Mi,{onClick:()=>{i(!1),t(o)},title:r,type:`button`,children:[(0,I.jsx)(Ci,{location:r}),(0,I.jsxs)(Ni,{children:[(0,I.jsx)(Pi,{children:s?n(xi[s]):wi(r)}),(0,I.jsx)(Fi,{children:s?n(xi[s]):r})]})]},`${o}-${r}`)})})]})]})}function Ci({location:e}){switch(Wr(e)){case`home`:return(0,I.jsx)(Xt,{size:13});case`settings`:return(0,I.jsx)(Qt,{size:13});case`recycle`:return(0,I.jsx)(On,{size:13});case`gallery`:return(0,I.jsx)(rn,{size:13});default:return v(e)?(0,I.jsx)(bn,{size:13}):(0,I.jsx)(rn,{size:13})}}function wi(e){let t=e.replace(/[\\/]+$/,``),n=Math.max(t.lastIndexOf(`\\`),t.lastIndexOf(`/`));return n>=0?t.slice(n+1):t}var Ti=x.div`
    position: relative;
    display: flex;
`,Ei=x.button`
    display: grid;
    place-items: center;
    width: 38px;
    height: 100%;
    border: 0;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-secondary)`};
    cursor: pointer;
    transition: background 130ms ease, color 130ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`,Di=x.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${Ue}
    ${ze}
`,Oi=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,ki=x.span`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 10px;
    font-weight: 600;
    color: var(--text-secondary);
    letter-spacing: 0.1em;
    text-transform: uppercase;

    &::before {
        content: "";
        width: 2px;
        height: 10px;
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,Ai=x.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,ji=x.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,Mi=x.button`
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px 12px;
    border: 0;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;

    &:last-child {
        border-bottom: 0;
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.08);
    }

    svg {
        flex-shrink: 0;
        color: var(--text-muted);
    }
`,Ni=x.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Pi=x.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Fi=x.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ii=x.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Li=x.span`
    position: absolute;
    top: 6px;
    right: 2px;
    min-width: 13px;
    height: 13px;
    padding: 0 3px;
    border-radius: 999px;
    background: var(--accent-primary);
    color: #fff;
    font-family: var(--font-mono);
    font-size: 8px;
    line-height: 13px;
    text-align: center;
`;function Ri({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=C(),a=(0,F.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,F.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)},t=()=>r(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[n,r]),(0,I.jsxs)(Bi,{ref:a,children:[(0,I.jsxs)(Vi,{$active:n,onClick:()=>r(!n),title:s>0?o(i,s,`k_1_operation_running`,`count_operations_running`):i(`status_center`),type:`button`,children:[(0,I.jsx)(yn,{size:13}),c>0&&(0,I.jsx)(Li,{children:c>9?`9+`:c})]}),n&&(0,I.jsxs)(Hi,{children:[(0,I.jsxs)(Ui,{children:[(0,I.jsxs)(Wi,{children:[(0,I.jsx)(yn,{size:12}),i(`status_center`)]}),(0,I.jsxs)(Gi,{children:[(0,I.jsx)(Ki,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`clear_finished`)}),(0,I.jsx)(qi,{onClick:()=>r(!1),title:i(`close`),type:`button`,children:(0,I.jsx)(M,{size:10})})]})]}),e.length===0?(0,I.jsx)(Yi,{children:i(`no_operations_yet`)}):(0,I.jsx)(Ji,{children:e.map(e=>(0,I.jsx)(zi,{task:e},e.id))})]})]})}function zi({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,I.jsxs)(Xi,{children:[(0,I.jsxs)(Zi,{children:[(0,I.jsx)(Qi,{$state:e.state,children:e.state===`done`?(0,I.jsx)(fn,{size:10}):e.state===`failed`?(0,I.jsx)(M,{size:10}):(0,I.jsx)($i,{})}),(0,I.jsx)(ea,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,I.jsxs)(ta,{children:[m(e.bytesDone),` / `,m(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,I.jsxs)(ta,{children:[e.done,` / `,e.total]})]}),i&&(0,I.jsx)(na,{children:(0,I.jsx)(ra,{$percent:r,$indeterminate:t===0})}),e.error&&(0,I.jsx)(ia,{children:e.error})]})}var Bi=x.div`
    position: relative;
    display: flex;
`,Vi=x.button`
    position: relative;
    display: grid;
    place-items: center;
    width: 38px;
    height: 100%;
    border: 0;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-secondary)`};
    cursor: pointer;
    transition: background 130ms ease, color 130ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`,Hi=x.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${Ue}
    ${ze}
`,Ui=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Wi=x.span`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 10px;
    font-weight: 600;
    color: var(--text-secondary);
    letter-spacing: 0.1em;
    text-transform: uppercase;

    &::before {
        content: "";
        width: 2px;
        height: 10px;
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,Gi=x.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Ki=x.button`
    padding: 4px 7px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 10px;
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;

    &:hover:not(:disabled) {
        border-color: var(--border-color);
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`,qi=x.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;

    &:hover {
        border-color: var(--border-color);
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`,Ji=x.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,Yi=x.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Xi=x.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${He}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,Zi=x.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,Qi=x.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,$i=x.span`
    width: 9px;
    height: 9px;
    border: 2px solid rgba(var(--accent-rgb), 0.25);
    border-top-color: var(--accent-primary);
    border-radius: 50%;
    animation: yafm-task-spin 800ms linear infinite;

    @keyframes yafm-task-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,ea=x.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ta=x.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,na=x.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,ra=x.div`
    width: ${({$percent:e,$indeterminate:t})=>t?`35%`:`${e}%`};
    height: 100%;
    border-radius: inherit;
    background: var(--accent-gradient);
    transition: width 120ms linear;
    animation: ${({$indeterminate:e})=>e?`yafm-task-slide 1.1s ease-in-out infinite`:`none`};

    @keyframes yafm-task-slide {
        0% {
            transform: translateX(-120%);
        }
        100% {
            transform: translateX(320%);
        }
    }
`,ia=x.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function aa(){return b.available?(await b.request(`fs.history.list`)).entries:[]}async function oa(e){return b.available?(await b.request(`fs.history.undoTo`,{id:e})).ok:!1}function sa(){let e=C(),[t,n]=(0,F.useState)(!1),[r,i]=(0,F.useState)([]),[a,o]=(0,F.useState)(!1),s=(0,F.useRef)(null),c=()=>void aa().then(i,()=>i([]));(0,F.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)},i=()=>n(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,i),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,i)}},[t]);let l=async e=>{o(!0);try{await oa(e),c()}finally{o(!1)}};return(0,I.jsxs)(ua,{ref:s,children:[(0,I.jsx)(da,{$active:t,onClick:()=>n(e=>!e),title:e(`history`),type:`button`,children:(0,I.jsx)(xn,{size:14})}),t&&(0,I.jsxs)(fa,{children:[(0,I.jsxs)(pa,{children:[(0,I.jsxs)(ma,{children:[(0,I.jsx)(xn,{size:12}),e(`history`)]}),(0,I.jsx)(ha,{onClick:()=>n(!1),title:e(`close`),type:`button`,children:(0,I.jsx)(M,{size:10})})]}),r.length===0?(0,I.jsx)(wa,{children:e(`no_operations_yet`)}):(0,I.jsx)(ga,{children:r.map(t=>(0,I.jsxs)(_a,{children:[(0,I.jsxs)(va,{children:[(0,I.jsxs)(ya,{children:[(0,I.jsx)(la,{label:t.label}),ca(e,t.label)]}),(0,I.jsx)(ba,{children:d(t.at)})]}),t.paths.length>0&&(0,I.jsxs)(xa,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,I.jsx)(Sa,{children:(0,I.jsx)(Ca,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`undo`)})})]},t.id))})]})]})}function ca(e,t){if(t===`new_folder`)return e(`new_folder`);if(t===`new_file`)return e(`new_file`);if(t===`paste_text`)return e(`paste_text`);if(t===`paste_image`)return e(`paste_image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`move`?`move_count_items`:t===`copy`?`copy_count_items`:`delete_count_items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`rename`)} ${i[1]}`:t}function la({label:e}){return e.startsWith(`delete`)?(0,I.jsx)(On,{size:13}):e.startsWith(`move`)||e.startsWith(`copy`)?(0,I.jsx)(Dn,{size:13}):e.startsWith(`rename`)?(0,I.jsx)(Tn,{size:13}):e.startsWith(`compress`)?(0,I.jsx)(bn,{size:13}):e.startsWith(`new`)?(0,I.jsx)(un,{size:13}):(0,I.jsx)(hn,{size:13})}var ua=x.div`
    position: relative;
    display: flex;
`,da=x.button`
    display: grid;
    place-items: center;
    width: 38px;
    height: 100%;
    border: 0;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-secondary)`};
    cursor: pointer;
    transition: background 130ms ease, color 130ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`,fa=x.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${Ue}
    ${ze}
`,pa=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,ma=x.span`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 10px;
    font-weight: 600;
    color: var(--text-secondary);
    letter-spacing: 0.1em;
    text-transform: uppercase;

    &::before {
        content: "";
        width: 2px;
        height: 10px;
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,ha=x.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,ga=x.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,_a=x.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,va=x.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,ya=x.span`
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;

    svg {
        flex-shrink: 0;
        color: var(--text-muted);
    }
`,ba=x.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,xa=x.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Sa=x.div`
    display: flex;
    justify-content: flex-end;
`,Ca=x.button`
    padding: 2px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }
`,wa=x.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Ta=(e=>(e[e.Border=-1]=`Border`,e[e.Data=0]=`Data`,e[e.Function=1]=`Function`,e[e.Position=2]=`Position`,e[e.Timing=3]=`Timing`,e[e.Alignment=4]=`Alignment`,e))(Ta||{}),Ea=[0,1],Da=[1,0],Oa=[2,3],ka=[3,2],Aa={L:Ea,M:Da,Q:Oa,H:ka},ja=/^\d*$/,Ma=/^[A-Z0-9 $%*+./:-]*$/,Na=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`,Pa=1,Fa=40,Ia=3,La=3,Ra=40,za=10,Ba=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],Va=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],Ha=class{constructor(e,t,n,r){if(this.version=e,this.ecc=t,e<Pa||e>Fa)throw RangeError(`Version value out of range`);if(r<-1||r>7)throw RangeError(`Mask value out of range`);this.size=e*4+17;let i=Array.from({length:this.size}).fill(!1);for(let e=0;e<this.size;e++)this.modules.push(i.slice()),this.types.push(i.map(()=>0));this.drawFunctionPatterns();let a=this.addEccAndInterleave(n);if(this.drawCodewords(a),r===-1){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let n=this.getPenaltyScore();n<e&&(r=t,e=n),this.applyMask(t)}}this.mask=r,this.applyMask(r),this.drawFormatBits(r)}size;mask;modules=[];types=[];getModule(e,t){return e>=0&&e<this.size&&t>=0&&t<this.size&&this.modules[t][e]}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0,Ta.Timing),this.setFunctionModule(e,6,e%2==0,Ta.Timing);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n===0&&r===0||n===0&&r===t-1||n===t-1&&r===0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.ecc[1]<<3|e,n=t;for(let e=0;e<10;e++)n=n<<1^(n>>>9)*1335;let r=(t<<10|n)^21522;for(let e=0;e<=5;e++)this.setFunctionModule(8,e,Ua(r,e));this.setFunctionModule(8,7,Ua(r,6)),this.setFunctionModule(8,8,Ua(r,7)),this.setFunctionModule(7,8,Ua(r,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,Ua(r,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,Ua(r,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,Ua(r,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;for(let e=0;e<18;e++){let n=Ua(t,e),r=this.size-11+e%3,i=Math.floor(e/3);this.setFunctionModule(r,i,n),this.setFunctionModule(i,r,n)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){let i=Math.max(Math.abs(r),Math.abs(n)),a=e+r,o=t+n;a>=0&&a<this.size&&o>=0&&o<this.size&&this.setFunctionModule(a,o,i!==2&&i!==4,Ta.Position)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!==1,Ta.Alignment)}setFunctionModule(e,t,n,r=Ta.Function){this.modules[t][e]=n,this.types[t][e]=r}addEccAndInterleave(e){let t=this.version,n=this.ecc;if(e.length!==io(t,n))throw RangeError(`Invalid argument`);let r=Va[n[0]][t],i=Ba[n[0]][t],a=Math.floor(ro(t)/8),o=r-a%r,s=Math.floor(a/r),c=[],l=ao(i);for(let t=0,n=0;t<r;t++){let r=e.slice(n,n+s-i+(t<o?0:1));n+=r.length;let a=oo(r,l);t<o&&r.push(0),c.push(r.concat(a))}let u=[];for(let e=0;e<c[0].length;e++)c.forEach((t,n)=>{(e!==s-i||n>=o)&&u.push(t[e])});return u}drawCodewords(e){if(e.length!==Math.floor(ro(this.version)/8))throw RangeError(`Invalid argument`);let t=0;for(let n=this.size-1;n>=1;n-=2){n===6&&(n=5);for(let r=0;r<this.size;r++)for(let i=0;i<2;i++){let a=n-i,o=n+1&2?r:this.size-1-r;!this.types[o][a]&&t<e.length*8&&(this.modules[o][a]=Ua(e[t>>>3],7-(t&7)),t++)}}}applyMask(e){if(e<0||e>7)throw RangeError(`Mask value out of range`);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw Error(`Unreachable`)}!this.types[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[t][a]===n?(r++,r===5?e+=Ia:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*Ra),n=this.modules[t][a],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*Ra}for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[a][t]===n?(r++,r===5?e+=Ia:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*Ra),n=this.modules[a][t],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*Ra}for(let t=0;t<this.size-1;t++)for(let n=0;n<this.size-1;n++){let r=this.modules[t][n];r===this.modules[t][n+1]&&r===this.modules[t+1][n]&&r===this.modules[t+1][n+1]&&(e+=La)}let t=0;for(let e of this.modules)t=e.reduce((e,t)=>e+ +!!t,t);let n=this.size*this.size,r=Math.ceil(Math.abs(t*20-n*10)/n)-1;return e+=r*za,e}getAlignmentPatternPositions(){if(this.version===1)return[];{let e=Math.floor(this.version/7)+2,t=this.version===32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}finderPenaltyCountPatterns(e){let t=e[1],n=t>0&&e[2]===t&&e[3]===t*3&&e[4]===t&&e[5]===t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]===0&&(e+=this.size),t.pop(),t.unshift(e)}};function X(e,t,n){if(t<0||t>31||e>>>t)throw RangeError(`Value out of range`);for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function Ua(e,t){return!!(e>>>t&1)}var Wa=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw RangeError(`Invalid argument`);this.bitData=n.slice()}getData(){return this.bitData.slice()}},Ga=[1,10,12,14],Ka=[2,9,11,13],qa=[4,8,16,16];function Ja(e,t){return e[Math.floor((t+7)/17)+1]}function Ya(e){let t=[];for(let n of e)X(n,8,t);return new Wa(qa,e.length,t)}function Xa(e){if(!$a(e))throw RangeError(`String contains non-numeric characters`);let t=[];for(let n=0;n<e.length;){let r=Math.min(e.length-n,3);X(Number.parseInt(e.substring(n,n+r),10),r*3+1,t),n+=r}return new Wa(Ga,e.length,t)}function Za(e){if(!eo(e))throw RangeError(`String contains unencodable characters in alphanumeric mode`);let t=[],n=0;for(;n+2<=e.length;n+=2){let r=Na.indexOf(e.charAt(n))*45;r+=Na.indexOf(e.charAt(n+1)),X(r,11,t)}return n<e.length&&X(Na.indexOf(e.charAt(n)),6,t),new Wa(Ka,e.length,t)}function Qa(e){return e===``?[]:$a(e)?[Xa(e)]:eo(e)?[Za(e)]:[Ya(no(e))]}function $a(e){return ja.test(e)}function eo(e){return Ma.test(e)}function to(e,t){let n=0;for(let r of e){let e=Ja(r.mode,t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}function no(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)===`%`?(t.push(Number.parseInt(e.substring(n+1,n+3),16)),n+=2):t.push(e.charCodeAt(n));return t}function ro(e){if(e<Pa||e>Fa)throw RangeError(`Version number out of range`);let t=(16*e+128)*e+64;if(e>=2){let n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return t}function io(e,t){return Math.floor(ro(e)/8)-Ba[t[0]][e]*Va[t[0]][e]}function ao(e){if(e<1||e>255)throw RangeError(`Degree out of range`);let t=[];for(let n=0;n<e-1;n++)t.push(0);t.push(1);let n=1;for(let r=0;r<e;r++){for(let e=0;e<t.length;e++)t[e]=so(t[e],n),e+1<t.length&&(t[e]^=t[e+1]);n=so(n,2)}return t}function oo(e,t){let n=t.map(e=>0);for(let r of e){let e=r^n.shift();n.push(0),t.forEach((t,r)=>n[r]^=so(t,e))}return n}function so(e,t){if(e>>>8||t>>>8)throw RangeError(`Byte out of range`);let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return n}function co(e,t,n=1,r=40,i=-1,a=!0){if(!(Pa<=n&&n<=r&&r<=Fa)||i<-1||i>7)throw RangeError(`Invalid value`);let o,s;for(o=n;;o++){let n=io(o,t)*8,i=to(e,o);if(i<=n){s=i;break}if(o>=r)throw RangeError(`Data too long`)}for(let e of[Da,Oa,ka])a&&s<=io(o,e)*8&&(t=e);let c=[];for(let t of e){X(t.mode[0],4,c),X(t.numChars,Ja(t.mode,o),c);for(let e of t.getData())c.push(e)}let l=io(o,t)*8;X(0,Math.min(4,l-c.length),c),X(0,(8-c.length%8)%8,c);for(let e=236;c.length<l;e^=253)X(e,8,c);let u=Array.from({length:Math.ceil(c.length/8)},()=>0);return c.forEach((e,t)=>u[t>>>3]|=e<<7-(t&7)),new Ha(o,t,u,i)}function lo(e,t){let{ecc:n=`L`,boostEcc:r=!1,minVersion:i=1,maxVersion:a=40,maskPattern:o=-1,border:s=1}=t||{},c=typeof e==`string`?Qa(e):Array.isArray(e)?[Ya(e)]:void 0;if(!c)throw Error(`uqr only supports encoding string and binary data, but got: ${typeof e}`);let l=co(c,Aa[n],i,a,o,r),u=uo({version:l.version,maskPattern:l.mask,size:l.size,data:l.modules,types:l.types},s);return t?.invert&&(u.data=u.data.map(e=>e.map(e=>!e))),t?.onEncoded?.(u),u}function uo(e,t=1){if(!t)return e;let{size:n}=e,r=n+t*2;e.size=r,e.data.forEach(e=>{for(let n=0;n<t;n++)e.unshift(!1),e.push(!1)});for(let n=0;n<t;n++)e.data.unshift(Array.from({length:r},e=>!1)),e.data.push(Array.from({length:r},e=>!1));let i=Ta.Border;e.types.forEach(e=>{for(let n=0;n<t;n++)e.unshift(i),e.push(i)});for(let n=0;n<t;n++)e.types.unshift(Array.from({length:r},e=>i)),e.types.push(Array.from({length:r},e=>i));return e}function fo(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function po(e,t={}){let n=lo(e,t),{pixelSize:r=10,whiteColor:i=`white`,blackColor:a=`black`}=t,o=n.size*r,s=n.size*r,c=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${o}">`,l=[];for(let e=0;e<n.size;e++)for(let t=0;t<n.size;t++){let i=t*r,a=e*r;n.data[e][t]&&l.push(`M${i},${a}h${r}v${r}h-${r}z`)}return c+=`<rect fill="${fo(i)}" width="${s}" height="${o}"/>`,c+=`<path fill="${fo(a)}" d="${l.join(``)}"/>`,c+=`</svg>`,c}function mo({currentFolder:e}){let t=C(),[n,i]=(0,F.useState)(!1),[a,o]=(0,F.useState)(null),[s,c]=(0,F.useState)(!1),l=(0,F.useRef)(null);(0,F.useEffect)(()=>{if(!n)return;let e=()=>void Mt().then(o,()=>void 0);e();let t=window.setInterval(e,2500),r=e=>{l.current?.contains(e.target)||i(!1)},a=()=>i(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,a),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,a)}},[n]),(0,F.useEffect)(()=>{let e=()=>void Mt().then(o,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{o(await e())}finally{c(!1)}},d=a?.shares.some(t=>r(t.path,e))??!1;return(0,I.jsxs)(ho,{ref:l,children:[(0,I.jsxs)(go,{$active:n,onClick:()=>i(e=>!e),title:t(`share_folders`),type:`button`,children:[(0,I.jsx)(_n,{size:15}),a&&a.shares.length>0&&(0,I.jsx)(Li,{children:a.shares.length>9?`9+`:a.shares.length})]}),n&&(0,I.jsxs)(_o,{children:[(0,I.jsxs)(vo,{children:[(0,I.jsxs)(yo,{children:[(0,I.jsx)(En,{size:12}),t(`share`)]}),(0,I.jsx)(bo,{onClick:()=>i(!1),title:t(`close`),type:`button`,children:(0,I.jsx)(M,{size:10})})]}),(0,I.jsxs)(xo,{children:[(0,I.jsxs)(So,{children:[(0,I.jsx)(wn,{size:15}),(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`strong`,{children:a?.deviceName||t(`this_device`)}),(0,I.jsx)(Do,{children:a?.fingerprint??``})]})]}),a?.shares.length===0&&(0,I.jsx)(Oo,{children:t(`no_folders_are_shared_yet`)}),a?.shares.map(e=>(0,I.jsxs)(ko,{children:[(0,I.jsxs)(Ao,{children:[(0,I.jsx)(jo,{title:e.path,children:e.name}),(0,I.jsx)(No,{disabled:s,onClick:()=>void u(()=>Wt(e.id)),title:t(`stop_sharing`),type:`button`,children:(0,I.jsx)(M,{size:10})})]}),(0,I.jsx)(Mo,{title:e.path,children:e.path}),(0,I.jsxs)(Po,{children:[(0,I.jsxs)(Fo,{$active:e.mode===`client`,onClick:()=>void u(()=>at(e.id,`client`)),title:t(`only_paired_devices_can_open_this_folder_in_the_app`),type:`button`,children:[(0,I.jsx)(wn,{size:11}),t(`app`)]}),(0,I.jsxs)(Fo,{$active:e.mode===`web`,onClick:()=>void u(()=>at(e.id,`web`)),title:t(`any_device_with_a_browser_can_open_this_folder`),type:`button`,children:[(0,I.jsx)(en,{size:11}),t(`web`)]})]})]},e.id)),(0,I.jsxs)(Io,{disabled:s||e.length===0||d,onClick:()=>void u(()=>At(e,`client`)),title:d?t(`this_folder_is_already_shared`):e,type:`button`,children:[(0,I.jsx)(un,{size:12}),t(`share_this_folder`)]}),a?.webRunning&&(0,I.jsxs)(Lo,{children:[(0,I.jsxs)(Ro,{children:[(0,I.jsx)(en,{size:12}),t(`browser_access`)]}),(0,I.jsxs)(wo,{children:[(0,I.jsx)(To,{children:a.urls.map(e=>(0,I.jsx)(zo,{onClick:()=>void An(e),type:`button`,children:e},e))}),a.preferredUrl&&(0,I.jsx)(Co,{value:a.preferredUrl})]}),(0,I.jsx)(Do,{children:t(`open_one_of_these_addresses_on_any_device_on_the_same_network`)})]})]})]})]})}var ho=x.div`
    position: relative;
    display: flex;
`,go=x.button`
    position: relative;
    display: grid;
    place-items: center;
    width: 38px;
    height: 100%;
    border: 0;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-secondary)`};
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`,_o=x.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${Ue}
    ${ze}
`,vo=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,yo=x.span`
    display: flex;
    align-items: center;
    gap: 7px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    &::before {
        content: "";
        width: 2px;
        height: 10px;
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,bo=x.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,xo=x.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,So=x.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.4);

    span {
        display: flex;
        flex-direction: column;
        min-width: 0;
    }

    strong {
        color: var(--text-primary);
        font-size: 12px;
        font-weight: 600;
    }
`;function Co({value:e}){let t=C(),n=(0,F.useMemo)(()=>po(e,{ecc:`M`,border:2,pixelSize:4,blackColor:`#000000`,whiteColor:`#ffffff`}),[e]);return(0,I.jsx)(Eo,{dangerouslySetInnerHTML:{__html:n},role:`img`,title:t(`scan_the_code_to_open_this_share_on_a_phone`)})}var wo=x.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,To=x.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
`,Eo=x.div`
    flex-shrink: 0;
    width: 84px;
    height: 84px;
    padding: 6px;
    border-radius: var(--radius-sm);
    background: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.28);

    svg {
        display: block;
        width: 100%;
        height: 100%;
    }
`,Do=x.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,Oo=x.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,ko=x.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,Ao=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,jo=x.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Mo=x.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,No=x.button`
    display: grid;
    flex-shrink: 0;
    place-items: center;
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: rgba(232, 17, 35, 0.18);
        color: #ff8a95;
    }
`,Po=x.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,Fo=x.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 8px;
    border: 1px solid ${({$active:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: 999px;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`,Io=x.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-top: 2px;
    padding: 8px;
    border: 1px dashed var(--border-color-hover);
    border-radius: var(--radius-md);
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 11.5px;
    cursor: pointer;

    &:hover:not(:disabled) {
        background: rgba(var(--accent-rgb), 0.08);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`,Lo=x.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,Ro=x.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,zo=x.button`
    padding: 0;
    border: 0;
    background: transparent;
    color: var(--accent-primary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-align: left;
    cursor: pointer;
    overflow-wrap: anywhere;

    &:hover {
        text-decoration: underline;
    }
`;function Bo(){let e=C();return(0,I.jsx)(Vo,{title:e(`always_applies_to_every_folder`),children:e(`global`)})}var Vo=x.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`;function Ho({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=C(),[s,c]=(0,F.useState)(!1),l=(0,F.useRef)(null);(0,F.useEffect)(()=>{if(!s)return;let e=()=>c(!1),t=e=>{l.current?.contains(e.target)||c(!1)},n=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`keydown`,n)}},[s]),(0,F.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=zt.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,I.jsxs)(Uo,{ref:l,children:[(0,I.jsx)(Wo,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`view`),type:`button`,children:e.mode===`grid`?(0,I.jsx)(nn,{size:14}):(0,I.jsx)(j,{size:14})}),s&&(0,I.jsxs)(Go,{children:[(0,I.jsxs)(Ko,{children:[(0,I.jsx)(on,{size:11}),o(`view`)]}),(0,I.jsxs)(Jo,{children:[(0,I.jsxs)(Yo,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,I.jsx)(j,{size:12}),` `,o(`list`)]}),(0,I.jsxs)(Yo,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,I.jsx)(nn,{size:12}),` `,o(`grid`)]})]}),(0,I.jsxs)(Ko,{children:[(0,I.jsx)(j,{size:11}),o(`list_icon_size`)]}),(0,I.jsxs)(Xo,{children:[(0,I.jsx)(`input`,{"aria-label":o(`list_icon_size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,I.jsxs)(Zo,{children:[e.iconSize,`px`]})]}),(0,I.jsxs)(Ko,{children:[(0,I.jsx)(nn,{size:11}),o(`grid_size`)]}),(0,I.jsxs)(Xo,{children:[(0,I.jsx)(`input`,{"aria-label":o(`grid_size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,I.jsxs)(Zo,{children:[e.gridSize,`px`]})]}),(0,I.jsxs)(Ko,{children:[(0,I.jsx)(pn,{size:11}),o(`columns`),(0,I.jsx)(Bo,{}),(0,I.jsx)(qo,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:o(`reset_column_widths`),type:`button`,children:o(`reset_widths`)})]}),zt.map(e=>(0,I.jsxs)(Qo,{children:[(0,I.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,I.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,I.jsxs)(Qo,{children:[(0,I.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,I.jsx)(`span`,{children:o(`link_target_after_the_name`)})]}),(0,I.jsxs)(Ko,{children:[(0,I.jsx)(gn,{size:11}),o(`preview_panel`),(0,I.jsx)(Bo,{})]}),(0,I.jsxs)(Qo,{children:[(0,I.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,I.jsx)(`span`,{children:o(`preview_under_the_list`)})]})]})]})}var Uo=x.div`
    position: relative;
    display: flex;
    height: 100%;
`,Wo=x.button`
    display: grid;
    place-items: center;
    width: 42px;
    height: 100%;
    border: 0;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-secondary)`};
    cursor: pointer;
    transition: background 130ms ease, color 130ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }

    &:disabled {
        background: transparent;
        opacity: 0.4;
        cursor: default;
    }
`,Go=x.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${Ue}
    animation: yafm-view-in 150ms cubic-bezier(0.22, 1, 0.36, 1);

    @keyframes yafm-view-in {
        from {
            opacity: 0;
            transform: translateY(-6px) scale(0.985);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
`,Ko=x.div`
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 12px 0 6px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);

    &::before {
        content: "";
        width: 2px;
        height: 9px;
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }

    &:first-child {
        margin-top: 2px;
    }
`,qo=x.button`
    margin-left: auto;
    padding: 2px 7px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 10px;
    letter-spacing: 0;
    text-transform: none;
    cursor: pointer;
    transition: border-color 130ms ease, background 130ms ease, color 130ms ease;

    &:hover {
        border-color: var(--border-color-hover);
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`,Jo=x.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Yo=x.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    flex: 1;
    padding: 5px 6px;
    border: 1px solid ${({$on:e})=>e?`rgba(var(--accent-rgb), 0.55)`:`transparent`};
    border-radius: var(--radius-sm);
    background: ${({$on:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`transparent`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 11px;
    font-weight: ${({$on:e})=>e?600:500};
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`,Xo=x.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,Zo=x.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,Qo=x.label`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 4px 6px;
    margin: 0 -6px;
    border-radius: var(--radius-sm);
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;
    transition: background 130ms ease, color 130ms ease;

    input {
        margin: 0;
        accent-color: var(--accent-primary);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.08);
        color: var(--text-primary);
    }
`,$o=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),es=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),ts=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),ns=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,I.jsx)(`path`,{d:`M2 5h6`})}),rs=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,I.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),is=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,I.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,I.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function as({tabs:e,activeId:t,closedTabs:n,onRestoreClosed:r,onSelect:i,onClose:a,onNewTab:o,onReorder:s,onTransferToTab:c,view:l,onViewChange:u,onColumns:d,showImages:f,onShowImages:p,tasks:m,onClearTasks:ee,activityOpen:h,onActivityOpenChange:g,trayCount:_,trayVisible:v,onToggleTray:te,split:ne,canSplit:re,onToggleSplit:b,details:x,canDetails:ie,onToggleDetails:S,shortcuts:ae,currentFolder:oe}){let w=C(),ce=y(),le=se(),[ue,de]=(0,F.useState)({left:!1,right:!1}),[fe,pe]=(0,F.useState)(null),[me,he]=(0,F.useState)(null),ge=(0,F.useRef)(null),_e=(0,F.useRef)(null),ve=(0,F.useRef)(null),ye=(0,F.useCallback)(()=>{let e=_e.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;de(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,F.useEffect)(()=>{ye();let e=_e.current;if(!e)return;let t=new ResizeObserver(ye);return t.observe(e),()=>t.disconnect()},[ye,e.length]),(0,F.useEffect)(()=>()=>{ge.current&&window.clearTimeout(ge.current.timer)},[]),(0,F.useEffect)(()=>{ve.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let be=e=>_e.current?.scrollBy({left:e,behavior:`smooth`}),xe=()=>{ge.current&&window.clearTimeout(ge.current.timer),ge.current=null,he(null)};return(0,I.jsxs)(ls,{children:[(0,I.jsx)(us,{children:(0,I.jsx)(wn,{size:19})}),(0,I.jsxs)(ds,{children:[ue.left&&(0,I.jsx)(ps,{onClick:()=>be(-180),title:w(`scroll_tabs_left`),type:`button`,children:(0,I.jsx)($o,{})}),(0,I.jsx)(fs,{onScroll:ye,onWheel:e=>{let t=_e.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:_e,children:e.map(e=>(0,I.jsxs)(ms,{$active:e.id===t,$dragging:fe===e.id,$dropTarget:me===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!mt(t.dataTransfer)||!os(e)||(t.preventDefault(),ge.current?.id===e.id))return;xe(),he(e.id);let n=window.setTimeout(()=>{i(e.id),ge.current=null},500);ge.current={id:e.id,timer:n}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(ge.current?.id===e.id||me===e.id)&&xe()},onDragEnd:()=>{pe(null),xe()},onDragOver:t=>{(fe||mt(t.dataTransfer)&&os(e))&&(t.preventDefault(),mt(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>pe(e.id),onDrop:t=>{if(t.preventDefault(),fe)s(fe,e.id);else if(os(e)&&mt(t.dataTransfer)){let{paths:n,move:r}=jt(t);n.length>0&&(i(e.id),c(n,e.path,!t.ctrlKey&&r))}pe(null),xe()},onClick:()=>i(e.id),ref:e.id===t?ve:void 0,title:e.path||e.title,type:`button`,children:[(0,I.jsx)(ss,{tab:e}),(0,I.jsx)(hs,{children:e.title}),e.partner&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(gs,{children:`|`}),(0,I.jsx)(cs,{place:e.partner.place}),(0,I.jsx)(hs,{children:e.partner.title})]}),(0,I.jsx)(_s,{"data-shortcut":D(ae.closeTab),onClick:t=>{t.stopPropagation(),a(e.id)},title:w(`close_tab`),children:(0,I.jsx)(ts,{})})]},e.id))}),ue.right&&(0,I.jsx)(ps,{onClick:()=>be(180),title:w(`scroll_tabs_right`),type:`button`,children:(0,I.jsx)(es,{})}),(0,I.jsx)(vs,{"data-shortcut":D(ae.newTab),onClick:o,title:w(`new_tab`),type:`button`,children:(0,I.jsx)(un,{size:13})})]}),(0,I.jsx)(ys,{...le}),(0,I.jsxs)(bs,{children:[(0,I.jsx)(Ss,{$active:ne,"data-shortcut":D(ae.splitView),disabled:!re,onClick:b,title:w(ne?`close_split_view`:`split_view`),type:`button`,children:(0,I.jsx)(pn,{size:15})}),(0,I.jsx)(Ss,{$active:x,disabled:!ie,onClick:S,title:w(x?`hide_details_panel`:`show_details_panel`),type:`button`,children:(0,I.jsx)(on,{size:15})}),(0,I.jsxs)(xs,{$active:v,onClick:te,title:w(v?`hide_file_tray`:`show_file_tray`),type:`button`,children:[(0,I.jsx)(sn,{size:14}),_>0&&(0,I.jsx)(Li,{children:_>9?`9+`:_})]}),(0,I.jsx)(Si,{onRestore:r,tabs:n}),(0,I.jsx)(sa,{}),(0,I.jsx)(mo,{currentFolder:oe}),(0,I.jsx)(Ri,{tasks:m,onClear:ee,open:h,onOpenChange:g}),(0,I.jsx)(Ho,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:u,onColumns:d,onShowImages:p,showImages:f,view:l}),(0,I.jsx)(Cs,{onClick:ce.minimize,title:w(`minimize`),type:`button`,children:(0,I.jsx)(ns,{})}),(0,I.jsx)(Cs,{onClick:ce.toggleMaximize,title:ce.maximized?w(`restore`):w(`maximize`),type:`button`,children:ce.maximized?(0,I.jsx)(is,{}):(0,I.jsx)(rs,{})}),(0,I.jsx)(ws,{onClick:ce.close,title:w(`close`),type:`button`,children:(0,I.jsx)(ts,{})})]})]})}function os(e){return e.kind===`files`&&(!v(e.path)||a(e.path))}function ss({tab:e}){switch(e.kind){case`home`:return(0,I.jsx)(Xt,{size:13});case`settings`:return(0,I.jsx)(Qt,{size:13});case`recycle`:return(0,I.jsx)(On,{size:13});default:return e.archive?(0,I.jsx)(bn,{size:13}):(0,I.jsx)(cs,{place:e.place})}}function cs({place:e}){return e?(0,I.jsx)(pt,{place:e,size:13}):(0,I.jsx)(rn,{size:13})}var ls=x.header`
    position: relative;
    z-index: 2;
    display: flex;
    align-items: stretch;
    height: 44px;
    flex-shrink: 0;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    font-family: var(--font-title), var(--font-cjk);
    user-select: none;
    -webkit-user-select: none;

    html.has-wallpaper & {
        // The blur lives on a pseudo-element, not on the bar itself: an element with backdrop-filter
        // becomes a backdrop root, and every floating panel opened from this bar (share, status
        // centre, view, history) would then blur nothing but the bar's own paint.
        background: transparent;
        isolation: isolate;

        &::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: -1;
            background: rgba(var(--bg-rgb), 0.5);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            pointer-events: none;
        }
    }
`,us=x.span`
    display: grid;
    place-items: center;
    align-self: center;
    width: 26px;
    height: 26px;
    margin-left: 12px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,ds=x.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,fs=x.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`,ps=x.button`
    display: grid;
    place-items: center;
    width: 20px;
    height: 26px;
    flex-shrink: 0;
    margin-bottom: 2px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    svg {
        width: 10px;
        height: 10px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.4;
    }

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,ms=x.button`
    display: flex;
    align-items: center;
    gap: 7px;
    width: ${({$split:e})=>e?`300px`:`176px`};
    height: 32px;
    flex: 0 0 auto;
    padding: 0 6px 0 10px;
    border: 1px solid ${({$dropTarget:e,$active:t})=>e?`var(--accent-primary)`:t?`var(--border-color)`:`transparent`};
    border-bottom: 0;
    border-radius: 9px 9px 0 0;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.10)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
    opacity: ${({$dragging:e})=>e?.45:1};
    box-shadow: ${({$dropTarget:e,$active:t})=>e?`inset 0 -2px 0 var(--accent-primary), 0 0 12px rgba(var(--accent-rgb), 0.22)`:t?`inset 0 -2px 0 var(--accent-primary)`:`none`};
    transition: background 120ms ease, color 120ms ease, opacity 120ms ease, box-shadow 120ms ease;

    svg {
        flex-shrink: 0;
        color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.08);
        color: var(--text-primary);
    }

    &:hover > span:last-child {
        opacity: 1;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: -2px;
    }
`,hs=x.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,gs=x.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,_s=x.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 4px;
    opacity: 0;

    svg {
        width: 8px;
        height: 8px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.3;
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.14);
        color: var(--text-primary);
    }
`,vs=x.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    margin-bottom: 2px;
    border: 1px solid transparent;
    border-radius: 8px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-rgb), 0.10);
        border-color: var(--border-color);
        color: var(--text-primary);
    }
`,ys=x.div`
    flex: 1;
    min-width: 28px;
`,bs=x.div`
    display: flex;
    flex-shrink: 0;
`,xs=x.button`
    position: relative;
    display: grid;
    place-items: center;
    width: 34px;
    height: 100%;
    border: 0;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: var(--text-secondary);
    cursor: pointer;

    &:hover:not(:disabled) {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }
`,Ss=x.button`
    display: grid;
    place-items: center;
    width: 34px;
    height: 100%;
    border: 0;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-secondary)`};
    cursor: pointer;

    &:hover:not(:disabled) {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }
`,Cs=x.button`
    display: grid;
    place-items: center;
    width: 46px;
    height: 100%;
    border: 0;
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition: background 100ms ease, color 100ms ease;

    svg {
        width: 10px;
        height: 10px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.2;
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.14);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: -2px;
    }
`,ws=x(Cs)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function Ts(){let[e,t]=(0,F.useState)(null),n=(0,F.useRef)(null),r=(0,F.useRef)(void 0);return(0,F.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`blur`,i),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`blur`,i),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,L.createPortal)((0,I.jsx)(Es,{tooltip:e}),document.body):null}function Es({tooltip:e}){let t=(0,F.useRef)(null),[n,r]=(0,F.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,F.useState)(()=>e.bottom+6);return(0,F.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,I.jsxs)(Ds,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,I.jsx)(Os,{children:e.text}),e.shortcut&&(0,I.jsx)(ks,{children:e.shortcut})]})}var Ds=x.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: min(360px, calc(100vw - 16px));
    padding: 6px 9px;
    border: 1px solid var(--border-color-hover);
    border-radius: var(--radius-sm);
    // The window's own surface colour, so a light or a custom palette keeps its tooltip light, and
    // translucent enough to see the window behind it; the blur keeps the text there unreadable.
    background: rgba(var(--bg-rgb), var(--tooltip-alpha));
    backdrop-filter: var(--tooltip-blur);
    -webkit-backdrop-filter: var(--tooltip-blur);
    box-shadow: var(--shadow-float);
    pointer-events: none;
    ${He}
`,Os=x.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,ks=x.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,As=[{id:`ui`,label:`interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`interface`},{id:`names`,label:`file_names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`interface`},{id:`details`,label:`details_panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`interface`},{id:`path`,label:`address_bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`monospace`},{id:`mono`,label:`monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`text_preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`monospace`}];function js(e){return`"${e.replaceAll(`"`,``)}"`}function Ms(e){let t=document.documentElement.style;for(let n of As){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${js(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function Ns(){return b.available?(await b.request(`app.fonts`)).fonts??[]:[]}function Ps({deviceName:e,code:t,onAccept:n,onReject:r}){let i=C(),a=(0,F.useRef)(null);return(0,F.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,L.createPortal)((0,I.jsx)(Fs,{children:(0,I.jsxs)(Is,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsxs)(Ls,{children:[(0,I.jsx)(_n,{size:15}),i(`pair_for_sharing`)]}),(0,I.jsx)(Rs,{children:i(`device_wants_to_pair_with_this_device_for_sharing_folders`,{device:e})}),(0,I.jsx)(zs,{children:t}),(0,I.jsx)(Bs,{children:i(`check_that_the_other_device_shows_the_same_code_before_accepting`)}),(0,I.jsxs)(Vs,{children:[(0,I.jsx)(Hs,{onClick:r,type:`button`,children:i(`reject`)}),(0,I.jsx)(Us,{onClick:n,ref:a,type:`button`,children:i(`accept`)})]})]})}),document.body)}var Fs=x.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${He}
`,Is=x.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${Ke}
`,Ls=x.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,Rs=x.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,zs=x.div`
    padding: 10px;
    border: 1px solid rgba(var(--accent-rgb), 0.28);
    border-radius: var(--radius-sm);
    background: rgba(var(--accent-rgb), 0.10);
    color: var(--accent-primary);
    font-family: var(--font-mono);
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-align: center;
`,Bs=x.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Vs=x.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,Hs=x.button`
    padding: 7px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`,Us=x(Hs)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,Ws=x.button`
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
`,Gs=x.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,Ks=`modulepreload`,qs=function(e){return`/`+e},Js={},Ys=function(e){return e.pathname.endsWith(`.css`)},Xs=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Zs=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=qs(t,n);let r=s(t),i=Ys(r);return Xs(Js,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Ks,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Qs=(0,F.lazy)(()=>Zs(()=>import(`./OverviewView-BJIPHm4h.js`).then(e=>e.n).then(e=>({default:e.OverviewView})),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),$s=(0,F.lazy)(()=>Zs(()=>import(`./SettingsView-DsvcvIch.js`).then(e=>({default:e.SettingsView})),__vite__mapDeps([11,1,2,4,5,3,6,7,9,8,10]))),ec=(0,F.lazy)(()=>Zs(()=>import(`./GalleryView-C7zwMR98.js`).then(e=>e.n).then(e=>({default:e.GalleryView})),__vite__mapDeps([12,1,2,4,5,3,6,9]))),tc=(0,F.lazy)(()=>Zs(()=>import(`./RecycleView-B5IpsZ4z.js`).then(e=>({default:e.RecycleView})),__vite__mapDeps([13,1,2,4,5,3,6,8]))),nc=0,rc=new Set;function ic(e){rc.add(e),b.send({type:`app.navigate.done`,payload:{path:e}})}var ac=20,oc=[{value:`0`,label:`auto`},{value:`932`,label:`japanese_cp932`},{value:`936`,label:`simplified_chinese_cp936`},{value:`950`,label:`traditional_chinese_cp950`},{value:`949`,label:`korean_cp949`},{value:`1252`,label:`western_cp1252`},{value:`1250`,label:`central_european_cp1250`},{value:`1251`,label:`cyrillic_cp1251`},{value:`1254`,label:`turkish_cp1254`},{value:`1253`,label:`greek_cp1253`},{value:`1256`,label:`arabic_cp1256`},{value:`1255`,label:`hebrew_cp1255`},{value:`1257`,label:`baltic_cp1257`},{value:`874`,label:`thai_cp874`},{value:`65001`,label:`utf_8`}];function sc(e){return e.history[e.index]??Ur(`home`)}function Z(e){return Wr(sc(e))??`files`}function Q(e){let t=sc(e);return Wr(t)?``:e.listing?.path||t}function cc(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||Z(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function lc(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function uc(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||Re.iconSize,gridSize:e.view?.gridSize||t.gridSize||Re.gridSize,sort:e.view?.sort??Re.sort,sortDescending:e.view?.sortDescending??Re.sortDescending,columns:t.columns??w.columns??[]}}function dc(e=Ur(`home`)){return nc+=1,{id:`tab-${nc}`,listing:null,loading:!Wr(e),error:null,history:[e],index:0,fresh:!0,view:null}}function fc(e){return e instanceof Error?e.message:String(e)}function pc(e){let t=O(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return st(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function mc(e){let t=u(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function hc(e){return v(e)?Pe(e):void 0}function gc(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return o(e,t.entries.length,`k_1_item_size`,`count_items_size`,{size:m(n)})}function _c(){let e=C(),[n,i]=(0,F.useState)(()=>[dc()]),[d,f]=(0,F.useState)(()=>n[0].id),[m,ee]=(0,F.useState)(null),[_,te]=(0,F.useState)(()=>{let e=Ye(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[y,ne]=(0,F.useState)([]),[re,x]=(0,F.useState)([]),[S,se]=(0,F.useState)(null),[be,ke]=(0,F.useState)(null),[je,Me]=(0,F.useState)(null),Ne=ae(),[T,Fe]=(0,F.useState)(ye),[Le,ze]=(0,F.useState)(0),[He,Ue]=(0,F.useState)(0),[Ke,qe]=(0,F.useState)(0),[Xe,Qe]=(0,F.useState)(ye),[et,rt]=(0,F.useState)(0),[at,st]=(0,F.useState)(0),[ct,pt]=(0,F.useState)(0),[St,Ct]=(0,F.useState)(0),O=(0,F.useRef)(St);O.current=St;let[At,jt]=(0,F.useState)([]),[Mt,Ft]=(0,F.useState)(10),[A,zt]=(0,F.useState)(null),Wt=oe(s(A?.themeMode)),Yt=(0,F.useMemo)(()=>(A?.favorites??[]).map(e=>t(e.path)),[A?.favorites]),[Xt,Zt]=(0,F.useState)(0),[j,nn]=(0,F.useState)(ut),[rn,an]=(0,F.useState)(0),[on,sn]=(0,F.useState)(0),[fn,pn]=(0,F.useState)(0),[mn,gn]=(0,F.useState)(!0),[_n,vn]=(0,F.useState)(()=>{let e=Ye(`yafm.preview.width`,320);return e>=220?e:320}),[yn,xn]=(0,F.useState)(null),[wn,Tn]=(0,F.useState)(null),[En,Dn]=(0,F.useState)({kind:null,info:null}),[M,An]=(0,F.useState)(`primary`),[jn,Mn]=(0,F.useState)(null),[Pn,Fn]=(0,F.useState)(null),[N,In]=(0,F.useState)(null),[P,Ln]=(0,F.useState)(null),[Rn,zn]=(0,F.useState)(null),[Bn,Vn]=(0,F.useState)({primary:0,secondary:0}),[Hn,Un]=(0,F.useState)({primary:null,secondary:null}),[Wn,Gn]=(0,F.useState)(null),[Kn,qn]=(0,F.useState)([]),[Jn,Zn]=(0,F.useState)(!1),[Qn,er]=(0,F.useState)(null),[tr,nr]=(0,F.useState)(``),rr=(0,F.useRef)([]),L=(0,F.useRef)([]),[ar,or]=(0,F.useState)([]),[sr,cr]=(0,F.useState)([]),[lr,ur]=(0,F.useState)(!1),dr=(0,F.useMemo)(()=>lr?new Set(sr.map(e=>e.path)):new Set,[sr,lr]),[fr,pr]=(0,F.useState)(!1),[mr,hr]=(0,F.useState)([]),[gr,_r]=(0,F.useState)(null),vr=(0,F.useRef)(0),[yr,br]=(0,F.useState)(()=>{let e=De(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?lc({x:e.x,y:e.y}):lc({x:Math.max(20,window.innerWidth-340),y:110})}),xr=(0,F.useCallback)(()=>{br(e=>lc(e)),pr(!0)},[]),R=n.find(e=>e.id===d)??n[0],z=Z(R),Cr=sc(R),B=Q(R),wr=z===`files`?R.listing?.parent??pc(B):null,V=R.splitWith?n.find(e=>e.id===R.splitWith):void 0,Dr=z===`files`&&V!==void 0,Or=V?Q(V):``,kr=V?V.listing?.parent??pc(Or):null,H=Dr&&V&&M===`secondary`?V:R,Ar=A?.defaultView??w,jr=uc(H,Ar);(0,F.useEffect)(()=>{h(A?.accentColor,A?.secondaryColor,Wt)},[A?.accentColor,A?.secondaryColor,Wt]),(0,F.useEffect)(()=>{Ms(A?.fonts)},[A?.fonts]),(0,F.useEffect)(()=>{p(A?.timeFormat,A?.timeFormatPattern),l(A?.relativeTime,A?.relativeTimeWindowMinutes)},[A?.timeFormat,A?.timeFormatPattern,A?.relativeTime,A?.relativeTimeWindowMinutes]),(0,F.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!A?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[A?.backgroundSource]),(0,F.useEffect)(()=>(Oe(e=>new Promise(t=>{_r({id:++vr.current,prompt:e,resolve:t})})),()=>Oe(null)),[]),(0,F.useEffect)(()=>{An(`primary`)},[d]),(0,F.useEffect)(()=>{Qe(ye),st(0),pt(0)},[z]),(0,F.useEffect)(()=>{st(0)},[Xe.query,Xe.matchCase,Xe.regex]),(0,F.useEffect)(()=>{st(e=>ct===0?0:Math.min(e,ct-1))},[ct]);let U=jr.columns.includes(`linkCount`),Mr=(0,F.useMemo)(()=>{let e={},n=ft(A),r={};for(let[e,n]of Object.entries(A?.placeNames??{}))r[t(e)]=n;for(let n of y)e[t(n.path)]=n;for(let i of n)if(i.kind===`quick`&&i.id!==`quick`)for(let n of i.places??[]){let i=t(n),a=y.find(e=>t(e.path)===i);e[i]={name:r[i]??a?.name??(u(n)||n),path:n,kind:`folder`,icon:a?.icon??A?.placeIcons?.[n]??null}}return e},[y,A]),Nr=(0,F.useMemo)(()=>({places:Mr,useIcons:A?.systemIcons===!1}),[Mr,A?.systemIcons]),Fr=A?.defaultView?.showImages??!0,Ir=A?.defaultView?.imageStripHeight??w.imageStripHeight,Lr=z===`home`?(0,I.jsx)(cn,{size:13}):z===`settings`?(0,I.jsx)(Qt,{size:13}):z===`recycle`?(0,I.jsx)(On,{size:13}):z===`gallery`?(0,I.jsx)($t,{size:13}):void 0,Rr=T.open&&T.query.length>0,zr=(0,F.useDeferredValue)(T),Br=(0,F.useMemo)(()=>Rr&&H.listing?H.listing.entries.filter(e=>ue(e.isDirectory?lt(Nr,e.fullPath,e.name):e.name,zr)).map(e=>e.fullPath):[],[Rr,zr,H.listing,Nr]);(0,F.useEffect)(()=>{ze(0)},[T.query,T.matchCase,T.regex,H.listing?.path]);let Vr=Br.length===0?-1:Math.min(Le,Br.length-1),W=(0,F.useCallback)(()=>{Fe(e=>({...e,open:!1,query:``})),ze(0)},[]),Hr=(0,F.useCallback)(()=>{Fe(e=>({...e,open:!0})),Ue(e=>e+1)},[]),qr=(0,F.useCallback)(()=>{Qe(e=>({...e,open:!0})),rt(e=>e+1)},[]),Jr=(0,F.useCallback)(()=>{Qe(ye),st(0),pt(0)},[]),Yr=(0,F.useCallback)(e=>{st(t=>ct===0?0:(Math.min(t,ct-1)+e+ct)%ct)},[ct]),Xr=(0,F.useCallback)(e=>{Fe(t=>({...t,open:!0,query:t.open?t.query+e:e})),Ue(e=>e+1)},[]),Zr=(0,F.useCallback)(e=>{ze(t=>Br.length===0?0:(Math.min(t,Br.length-1)+e+Br.length)%Br.length)},[Br.length]),G=(0,F.useRef)({tabs:n,activeId:d,activePane:M});G.current={tabs:n,activeId:d,activePane:M};let Qr=(0,F.useRef)(A);Qr.current=A;let $r=(0,F.useRef)(!1),ei=(0,F.useRef)([]),K=(0,F.useCallback)((e,t)=>{i(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),ti=(0,F.useRef)(new Map),ni=(0,F.useCallback)(e=>{let t=(ti.current.get(e)??0)+1;return ti.current.set(e,t),()=>ti.current.get(e)===t},[]),ri=(0,F.useCallback)((e,t)=>{b.available&&t&&e===cc(G.current)&&b.send({type:`fs.focus`,payload:{path:t}})},[]),ii=(0,F.useCallback)(async(e,t,n)=>{if(!(t&&Tt(t)))try{let r=(await Ze(t,U)).listing;if(!n()||!r)return;K(e,e=>e.loading?{listing:{...r,total:r.entries.length,signature:0},view:r.view??null}:{})}catch{}},[U,K]),q=(0,F.useCallback)(async(e,t,n=!1)=>{let i=ni(e);W(),ri(e,t);let a=!n||!G.current.tabs.find(t=>t.id===e)?.listing,o=!n&&t!==void 0;K(e,e=>{if(!o)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let i=e.history[e.index],a=i!==void 0&&r(i,t);return{listing:null,loading:!0,error:null,fresh:!1,history:a?e.history:[...e.history.slice(0,e.index+1),t],index:a?e.index:e.index+1}});try{a&&ii(e,t,i);let r=t&&Tt(t)?await Lt(t):await _e(t,!0,U,O.current,t?hc(t):void 0,e);if(!i())return;K(e,e=>({listing:r,view:r.view??null,loading:!1,fresh:!1,history:o?e.history.map((t,n)=>n===e.index?r.path:t):e.history,index:e.index})),!n&&!Tt(r.path)&&Se(r.path).then(()=>Zt(e=>e+1))}catch(r){if(!i())return;let a=G.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?Q(a):``,s=pc(o),c=fc(r);if(o&&we(c)){let r=g(o),a=await Be(r,!!Pe(r));if(a){Je(r,a),i()&&q(e,t,n);return}}K(e,e=>({listing:{path:o,parent:s,total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[ni,U,K,ri,W,ii]),oi=(0,F.useRef)(new Set),si=(0,F.useCallback)(async e=>{let t=G.current.tabs.find(t=>t.id===e),n=t?.listing;if(!t||Z(t)!==`files`||!n)return;let i=n.entries.length;if(i<=0||i>=(n.total??0)||ci.current.has(e))return;let a=`${e}|${n.path}|${i}`;if(oi.current.add(a))try{let t=await xe(n.path,i,n.view?.sort??`name`,n.view?.sortDescending??!1);K(e,e=>{let a=e.listing;return!a||!r(a.path,n.path)||a.entries.length!==i||a.view?.sort!==n.view?.sort?{}:{listing:{...a,entries:[...a.entries,...t.entries],total:t.total}}})}catch{}finally{oi.current.delete(a)}},[K]),ci=(0,F.useRef)(new Set),li=(0,F.useCallback)(async e=>{let t=G.current.tabs.find(t=>t.id===e),n=t?.listing;if(t&&Z(t)===`files`&&n&&!(n.entries.length>=(n.total??0))&&ci.current.add(e))try{let t=[],i=n.entries.length,a=n.total??0;for(;i<a;){let e=await xe(n.path,i,n.view?.sort??`name`,n.view?.sortDescending??!1);if(e.entries.length===0)break;t.push(e.entries),i+=e.entries.length,a=e.total}if(t.length===0)return;K(e,e=>{let i=e.listing;return!i||!r(i.path,n.path)||i.entries.length!==n.entries.length?{}:{listing:{...i,entries:[...i.entries,...t.flat()],total:a}}})}catch{}finally{ci.current.delete(e)}},[K]),[ui,di]=(0,F.useState)(0),fi=(0,F.useCallback)(async e=>{let t=G.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0;await li(e),(G.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0)>t&&di(e=>e+1)},[li]),pi=H.id,mi=Z(H),hi=H.listing?.entries.length??0,gi=H.listing?.total??0;(0,F.useEffect)(()=>{T.open&&T.query.length!==0&&(mi!==`files`||hi>=gi||li(pi))},[T.open,T.query,pi,mi,hi,gi,li]);let J=(0,F.useCallback)((e,t)=>{let n=Gr(t);n&&(Wr(n)?(W(),ni(e),K(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):q(e,n))},[ni,q,K,W]),_i=(0,F.useCallback)(async(e,t,n)=>{if(W(),Wr(t)){ni(e),K(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=ni(e);ri(e,t),K(e,()=>({index:n,listing:null,loading:!0,error:null}));try{Tt(t)||ii(e,t,r);let n=Tt(t)?await Lt(t):await _e(t,!0,U,O.current,hc(t),e);if(!r())return;K(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;let a=fc(i);if(we(a)){let i=g(t),a=await Be(i,!!Pe(i));if(a){Je(i,a),r()&&_i(e,t,n);return}}K(e,()=>({listing:{path:t,parent:pc(t),total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:fc(i)}))}},[ni,U,K,ri,W,ii]),Y=(0,F.useCallback)((e,t=!0)=>{let n=dc(e??Ur(`home`));return i(e=>[...e,n]),t&&f(n.id),e&&!Wr(e)&&q(n.id,e),n.id},[q]),vi=(0,F.useCallback)(e=>{for(let t of G.current.tabs)Z(t)===`files`&&r(Q(t),e)&&q(t.id,e,!0)},[q]),yi=(0,F.useCallback)((e,t)=>{let n=u(t);for(let i of G.current.tabs)i.listing?.entries.some(t=>r(t.fullPath,e))&&K(i.id,i=>{let a=i.listing;if(!a)return{};let o=a.entries.map(i=>r(i.fullPath,e)?{...i,name:n,fullPath:t}:i);return{listing:{...a,entries:o}}})},[K]),bi=(0,F.useRef)([]);(0,F.useEffect)(()=>{let e=new Set;for(let r of n){let n=r.listing?.path??r.history[r.index]??``;n&&v(n)&&e.add(t(g(n)))}let r=bi.current.filter(t=>!e.has(t));bi.current=[...e],r.length>0&&ge(r)},[n]);let Si=(0,F.useCallback)((e,t=!1)=>{t?Y(Ur(e)):J(G.current.activeId,Ur(e))},[Y,J]),Ci=(0,F.useCallback)(e=>{let{tabs:t,activeId:n}=G.current,r=t.find(t=>t.id===e),a=t.filter(t=>t.id!==e&&t.id!==r?.splitWith);if(r&&!r.hidden&&(L.current.push(sc(r)),L.current.length>ac&&L.current.shift(),or([...L.current])),a.length===0){let e=dc();i([e]),f(e.id);return}let o=t.findIndex(t=>t.id===e);i(a),n===e&&f(a[Math.min(o,a.length-1)].id)},[]),wi=(0,F.useCallback)(()=>{let e=L.current.pop();if(!e)return;or([...L.current]);let t={...dc(e),fresh:!1};i(e=>[...e,t]),f(t.id),Z(t)===`files`&&q(t.id,Q(t))},[q]),Ti=(0,F.useCallback)(e=>{let t=L.current,n=t[e];if(!n)return;t.splice(e,1),or([...t]);let r={...dc(n),fresh:!1};i(e=>[...e,r]),f(r.id),Z(r)===`files`&&q(r.id,Q(r))},[q]),Ei=(0,F.useCallback)((e,t=!1)=>{t?Y(e):J(cc(G.current),e??Ur(`home`))},[J,Y]),Di=(0,F.useCallback)(e=>{let{tabs:t,activeId:n}=G.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;f(r[i].id)},[]),Oi=(0,F.useCallback)(()=>{let{tabs:e,activeId:t}=G.current,n=e.find(e=>e.id===t);if(!n||Z(n)!==`files`)return;let r=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(r){i(e=>e.filter(e=>e.id!==r.id)),K(t,()=>({splitWith:void 0})),An(`primary`);return}let a=Q(n),o={...dc(a),hidden:!0};i(e=>[...e,o]),K(t,()=>({splitWith:o.id})),q(o.id,a),An(`primary`)},[q,K]),ki=(0,F.useCallback)(e=>{vn(e),le(`yafm.preview.width`,e)},[]),Ai=(0,F.useCallback)((e,t,n)=>Dn(r=>r.kind===e&&r.info?.path===t?.path&&r.info?.modified===t?.modified&&r.info?.name===t?.name&&r.note===n?r:{kind:e,info:t,note:n}),[]),ji=(0,F.useCallback)((e,t)=>Ai(`gallery`,e,t),[Ai]),Mi=(0,F.useCallback)((e,t)=>Ai(`recycle`,e,t),[Ai]),Ni=Dr?M===`secondary`?wn??yn:yn??wn:yn,Pi=Dr&&M===`secondary`?Bn.secondary:Bn.primary,Fi=z===`files`?Ni:En.kind===z?En.info:null,Ii=z===`files`?Pi>1?o(e,Pi,`k_1_item_selected`,`count_items_selected`):void 0:En.kind===z?En.note:void 0,Li=(0,F.useMemo)(()=>z===`files`&&R.listing?gc(e,R.listing):tr,[z,R.listing,e,tr]),Ri=(0,F.useRef)(null),zi=e=>{e.preventDefault();let t=Ri.current?.getBoundingClientRect();if(!t)return;let n=Math.max(t.width-7,1),r=e=>{let r=Math.min(Math.max((e.clientX-t.left)/n,.2),.8);te(r),le(`yafm.split.ratio`,r)},i=()=>{window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,i)};window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,i)},Bi=(e,t,n)=>{t&&Mn({x:e.clientX,y:e.clientY,directory:t,refresh:n})},Vi=(0,F.useCallback)((e,t)=>{Vn(n=>n[e]===t?n:{...n,[e]:t})},[]),Hi=(0,F.useCallback)(e=>Vi(`primary`,e),[Vi]),Ui=(0,F.useCallback)(e=>Vi(`secondary`,e),[Vi]),Wi=(e,t)=>{Bn[e]!==0&&Un(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},Gi=async(e,t=!1)=>{let n=jn;if(Mn(null),!n)return;let r=e===null?await Rt(n.directory,t):await Dt(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;W(),Gn(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},Ki=(0,F.useCallback)(()=>{let{tabs:e}=G.current,t=e.find(e=>e.id===cc(G.current));t&&t.index>0&&_i(t.id,t.history[t.index-1],t.index-1)},[_i]),qi=(0,F.useCallback)(()=>{let{tabs:e}=G.current,t=e.find(e=>e.id===cc(G.current));t&&t.index<t.history.length-1&&_i(t.id,t.history[t.index+1],t.index+1)},[_i]),Ji=(0,F.useCallback)(()=>{let{tabs:e}=G.current,t=e.find(e=>e.id===cc(G.current));t&&Z(t)===`files`&&t.listing?.parent&&Ei(t.listing.parent)},[Ei]),Yi=(0,F.useRef)(null),Xi=(0,F.useCallback)(()=>{for(let e of G.current.tabs)e.listing&&q(e.id,e.listing.path,!0)},[q]),Zi=(0,F.useCallback)(e=>{e.length!==0&&(hr(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),xr())},[xr]),Qi=(0,F.useCallback)(async e=>{let t=await Et(e);t.length!==0&&Zi(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[Zi]),$i=(0,F.useCallback)(e=>{let t=new Set(e);hr(e=>e.filter(e=>!t.has(e.path)))},[]),ea=(0,F.useCallback)(async e=>{let n=Qr.current;if(!n)return;let r=await Et(e);if(r.length===0)return;let i=new Set((n.favorites??[]).map(e=>t(e.path))),a=r.filter(e=>!i.has(t(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(a.length===0)return;let o={...n,favorites:[...n.favorites??[],...a]};zt(o),await tt(o),an(e=>e+1)},[]),ta=(0,F.useCallback)(async e=>{let n=Qr.current;if(!n)return;let r=new Set(e.map(t)),i=(n.favorites??[]).filter(e=>!r.has(t(e.path)));if(i.length===(n.favorites??[]).length)return;let a={...n,favorites:i};zt(a),await tt(a),an(e=>e+1)},[]),na=(0,F.useCallback)(()=>hr([]),[]),ra=(0,F.useRef)(-1),ia=(0,F.useCallback)(e=>{cr(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),ur(e.move),e.entries.length>0&&xr()},[xr]),aa=(0,F.useCallback)(async()=>{if(b.available)try{let e=await Ut();ra.current=e.sequence,ia(e)}catch{}},[ia]),oa=(0,F.useCallback)(async e=>{e.length!==0&&await wt(e,!1)&&await aa()},[aa]),sa=(0,F.useRef)(mr);sa.current=mr;let ca=(0,F.useRef)(fr);ca.current=fr;let la=(0,F.useRef)(!1);(0,F.useEffect)(()=>{let e=A?.trayAutoShow??!0,t=t=>{e&&mt(t)&&(ca.current||(la.current=!0),xr())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{la.current&&window.setTimeout(()=>{la.current&&sa.current.length===0&&pr(!1),la.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[xr,A?.trayAutoShow]),(0,F.useEffect)(()=>{let e=()=>br(e=>lc(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let ua=(0,F.useCallback)(async()=>{let e=sa.current;if(e.length>0){let t=await Et(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));hr(e=>e.filter(e=>n.has(e.path)))}await aa()},[aa]),da=(0,F.useCallback)(()=>{ua(),pn(e=>e+1),Xi()},[ua,Xi]),fa=(0,F.useCallback)(e=>{let t=lc(e);br(t),ve(`yafm.tray.position`,t)},[]),pa=(0,F.useCallback)(()=>{la.current=!1,fr?pr(!1):xr()},[xr,fr]),ma=(0,F.useCallback)(async(t,n,r)=>{let i=await Gt(t,n,r);i.cancelled||(i.ok?(r&&$i(t),pn(e=>e+1),Xi(),aa()):Ce(i.error??e(`the_files_could_not_be_transferred`)))},[Xi,aa,$i]);(0,F.useEffect)(()=>{if(b.available)return Yn().then(e=>{rr.current=e,qn(e)},()=>void 0),b.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=rr.current.find(t=>t.id===e.id);return!t||t.state!==e.state});rr.current=n,qn(n),r&&Zn(!0)})},[]);let ha=(0,F.useCallback)(()=>{Xn().then(()=>Yn().then(e=>{rr.current=e,qn(e)},()=>void 0))},[]);(0,F.useEffect)(()=>{if(!b.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await Ut();if(!e||t.sequence===ra.current)return;ra.current=t.sequence,ia(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[ia]);let ga=(0,F.useCallback)(async e=>{let t=e?await qt():await Ot();t.ok?(pn(e=>e+1),Xi()):t.error&&!t.error.startsWith(`Nothing to`)&&Ce(t.error)},[Xi]),_a=(0,F.useRef)(U);(0,F.useEffect)(()=>{_a.current!==U&&(_a.current=U,Xi())},[U,Xi]);let va=(0,F.useCallback)((e,t)=>{let{tabs:n}=G.current,r=n.find(t=>t.id===e);if(!r||Z(r)!==`files`)return;let i=Q(r),a=Qr.current?.defaultView??w,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||Re.iconSize,gridSize:r.view?.gridSize||a.gridSize||Re.gridSize,sort:r.view?.sort??Re.sort,sortDescending:r.view?.sortDescending??Re.sortDescending,...t};K(e,()=>({view:o})),Yi.current!==null&&window.clearTimeout(Yi.current),Yi.current=window.setTimeout(()=>{Yi.current=null,Ge(i,o)},250)},[K]),ya=(0,F.useCallback)(e=>{va(cc(G.current),e)},[va]),ba=(0,F.useCallback)(e=>{let t=Qr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??w,columns:e}};zt(n),tt(n)},[]),xa=(0,F.useCallback)(e=>{let t=Qr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??w,showImages:e}};zt(n),tt(n)},[]),Sa=(0,F.useCallback)(e=>{let t=Qr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??w,imageStripHeight:e}};zt(n),tt(n)},[]),Ca=(0,F.useCallback)((e,t,n,r)=>{let i=G.current.tabs.find(t=>t.id===e);if(!i||Z(i)!==`files`||!i.listing)return;let a=Q(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));K(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Ve(a,t,n,r)},[K]),wa=(0,F.useCallback)((e,t)=>{let n=G.current.tabs.find(t=>t.id===e);if(!n)return;let r=uc(n,Qr.current?.defaultView??w);va(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending}),q(e,Q(n),!0)},[va,q]),Ta=(0,F.useCallback)((e,t)=>{i(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),Ea=(0,F.useCallback)(()=>{fe().then(ne,()=>ne([]))},[]),Da=(0,F.useCallback)(e=>{let t=(e.openTabs??[]).map(Gr).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...dc(e),fresh:!1})),r=Math.min(Math.max(e.activeTab??0,0),n.length-1);i(n),f(n[r].id);let a=n[r];return(Z(a)===`files`?q(a.id,Q(a),!0):Promise.resolve()).then(()=>{for(let e of n)e!==a&&Z(e)===`files`&&q(e.id,Q(e),!0)}),!0},[q]),Oa=(0,F.useCallback)(e=>{let t=ei.current;if(ei.current=[],t.length===0)return;let n=t.filter(e=>!rc.has(e));for(let e of t)n.includes(e)||ic(e);if(n.length===0)return;let{tabs:r}=G.current;if(!e&&r.length===1&&r[0].fresh){J(r[0].id,n[0]),ic(n[0]);for(let e of n.slice(1))Y(e),ic(e);return}let i=n.map(e=>{let t=Y(e);return ic(e),t}).at(-1);i&&setTimeout(()=>f(i),0)},[Y,J]),ka=(0,F.useCallback)(()=>{nt().then(e=>{zt(e),Ft(e.recentLimit);let t=Ht(e.shortcuts);nn(t),It(xt(t,`openInNewTab`)),an(e=>e+1),$r.current||($r.current=!0,Oa(e.restoreTabs&&Da(e)))},()=>{Ft(10),$r.current=!0,Oa(!1)})},[Oa,Da]),Aa=(0,F.useCallback)(()=>{he().then(jt,()=>jt([]))},[]),ja=(0,F.useCallback)(()=>{ce().then(x,()=>x([]))},[]),Ma=n.filter(e=>!e.hidden),Na=Ma.map(sc),Pa=Na.join(`
`),Fa=Math.max(Ma.findIndex(e=>e.id===d),0);(0,F.useEffect)(()=>{if(!A?.restoreTabs)return;let e=setTimeout(()=>void $e(Na,Fa),700);return()=>clearTimeout(e)},[Pa,Fa,A?.restoreTabs]),(0,F.useEffect)(()=>{let{tabs:e,activeId:t}=G.current,n=e.find(e=>e.id===t);n&&n.fresh&&Z(n)===`files`&&q(n.id,Q(n),!0),Ea(),ka(),ja(),kn().then(se,()=>se(null))},[q,Ea,ka,ja]),(0,F.useEffect)(()=>{if(Nn().then(ke,()=>ke(null)),b.available)return b.on(e=>{let t=e;t.type===`update.checked`&&t.data&&ke(t.data)})},[]),(0,F.useEffect)(()=>{if(b.available)return b.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&ee({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&Ce(e(`pairing_code_code`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&Ce(n.data.error??e(`pairing_failed`))}})},[e]),(0,F.useEffect)(()=>{let e=setInterval(ja,3e4);return()=>clearInterval(e)},[ja]),(0,F.useEffect)(()=>{z===`home`&&(Aa(),ja())},[z,R.id,Aa,ja]),(0,F.useEffect)(()=>{if(!b.available)return;let e=b.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=G.current,i=t.data.startup===!0;i&&rc.has(n)?ic(n):i&&!$r.current?ei.current.includes(n)||ei.current.push(n):(i&&r.length===1&&r[0].fresh?J(r[0].id,n):Wr(n)?J(cc(G.current),n):Y(n),i&&ic(n))});return b.send({type:`app.ready`}),e},[J,Y]),(0,F.useEffect)(()=>{if(b.available)return b.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:r}=t.data;i(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let i=e.slice(),a=e[t];return i[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...r}}},i})})},[]),(0,F.useEffect)(()=>{if(b.available)return b.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:r}=t.data;i(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let i=e.slice(),a=e[t];return i[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...r}}},i})})},[]),(0,F.useEffect)(()=>{let e=e=>{if(ht(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),Ki();return}if(e.key===`BrowserForward`){e.preventDefault(),qi();return}if(e.key===`Escape`&&T.open){e.preventDefault(),W();return}let t=bt(e);if(E(j,`closeTab`,t)&&(e.preventDefault(),Ci(cc(G.current))),E(j,`newTab`,t)&&(e.preventDefault(),Y()),E(j,`reopenTab`,t)&&(e.preventDefault(),wi()),E(j,`goBack`,t)&&(e.preventDefault(),Ki()),E(j,`goForward`,t)&&(e.preventDefault(),qi()),E(j,`goUp`,t)&&(e.preventDefault(),Ji()),E(j,`find`,t)&&(e.preventDefault(),z===`files`?Hr():qr()),E(j,`location`,t)&&(e.preventDefault(),sn(e=>e+1)),E(j,`home`,t)){e.preventDefault();let t=y.find(e=>e.kind===`home`)?.path;t&&Ei(t)}E(j,`iconsView`,t)&&(e.preventDefault(),z===`files`&&ya({mode:`grid`})),E(j,`detailsView`,t)&&(e.preventDefault(),z===`files`&&ya({mode:`list`})),E(j,`nextTab`,t)&&(e.preventDefault(),Di(1)),E(j,`previousTab`,t)&&(e.preventDefault(),Di(-1)),E(j,`hidden`,t)&&(e.preventDefault(),Ee().then(()=>{pn(e=>e+1),Xi()})),E(j,`undo`,t)&&(e.preventDefault(),ga(!0)),E(j,`redo`,t)&&(e.preventDefault(),ga(!1)),E(j,`splitView`,t)?(e.preventDefault(),Oi()):Object.keys(j).some(e=>e!==`openInNewTab`&&E(j,e,t))||z!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Xr(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[j,z,T.open,Ci,wi,Y,Ki,qi,Ji,Hr,qr,W,Xr,ya,Di,Ei,y,Xi,ga,Oi]),(0,F.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Ki()):(e.button===4||e.button===9)&&(e.preventDefault(),qi())},t=e=>{(e.button===3||e.button===4||e.button===8||e.button===9)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[Ki,qi]),(0,F.useEffect)(()=>{if(b.available)return b.on(e=>{let t=e;if(t.type===`app.navigation`)switch(t.data?.direction){case`back`:Ki();break;case`forward`:qi()}})},[Ki,qi]);let Ia=(0,F.useMemo)(()=>{let e=new Set;for(let t of n){if(Z(t)!==`files`)continue;let n=Q(t);if(n&&!Tt(n)){if(v(n)){let t=pc(g(n));t&&e.add(t)}else e.add(n)}}return[...e]},[n]),La=Ia.join(`\0`);(0,F.useEffect)(()=>{b.available&&b.send({type:`fs.watch`,payload:{paths:Ia,owner:`app`}})},[La,d]);let Ra=Z(H)===`files`?Q(H):``;(0,F.useEffect)(()=>{b.available&&b.send({type:`fs.focus`,payload:{path:Ra||null}})},[Ra]),(0,F.useEffect)(()=>{if(b.available)return b.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,i=G.current.tabs.filter(e=>Z(e)===`files`&&r(Q(e),n)),a=G.current.tabs.filter(e=>{let t=Q(e);return Z(e)===`files`&&t.length>0&&v(t)&&r(g(t),n)});if(i.length!==0||a.length!==0){Ae(n);for(let e of a){let t=G.current.tabs.find(t=>t.id===e.id),i=t?Q(t):``;t&&Z(t)===`files`&&!t.loading&&v(i)&&r(g(i),n)&&q(e.id,i,!0)}i.length!==0&&_e(n,!1,U).then(e=>{for(let t of i){let n=G.current.tabs.find(e=>e.id===t.id);n&&Z(n)===`files`&&r(Q(n),e.path)&&(n.loading?window.setTimeout(()=>{let n=G.current.tabs.find(e=>e.id===t.id);n&&!n.loading&&Z(n)===`files`&&r(Q(n),e.path)&&K(t.id,()=>({listing:e}))},300):K(t.id,()=>({listing:e})))}},()=>void 0)}})},[U,q,K]);let za=R.index>0,Ba=R.index<R.history.length-1,Va=(e,t)=>{let n=uc(e,Ar),i=e.listing?.path??e.history[e.index]??``,o=v(i),s=o&&a(i);return(0,I.jsx)(Vt,{platform:S?.platform,confirmDelete:A?.confirmDelete??!1,cutPaths:dr,previewVideoAudio:A?.previewVideoAudio??!1,previewVideoAutoplay:A?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?xn:Tn,onActivate:()=>An(t?`primary`:`secondary`),enableShortcuts:(!Dr||(t?M===`primary`:M===`secondary`))&&(!o||s),error:e.error,find:e.id===H.id?{...T,currentPath:Vr<0?null:Br[Vr]}:void 0,selectMatchesToken:e.id===H.id?Ke:0,imageStripHeight:Ir,listing:e.listing,loading:e.loading,onImageStripHeight:Sa,readOnly:o&&!s||Tt(e.listing?.path??``),onOpen:(t,n)=>{n?Y(t):q(e.id,t)},onOpenFile:(t,n)=>{Tt(t)?Pt(t).catch(e=>void Ce(fc(e))):c(t)?A?.archiveHandler??!1?n?Y(t):q(e.id,t):me(t):v(t)?(async()=>{let e=await pe(t,O.current,hc(t));if(!e.path&&we(e.error)){let n=g(t),r=Pe(n);r&&Ie(n);let i=await Be(n,!!r);i&&(Je(n,i),e=await pe(t,O.current,i))}e.path?me(e.path):e.error&&Ce(e.error)})():me(t)},onRefresh:()=>{let t=e.listing?.path;t&&vi(t)},onLoadMore:()=>void si(e.id),onEnsureComplete:()=>void fi(e.id),selectAllToken:e.id===H.id?ui:0,onRename:yi,onSelectionCountChange:t?Hi:Ui,onSetTags:(t,n,r)=>Ca(e.id,t,n,r),selectionMenuRequest:t?Hn.primary:Hn.secondary,onSort:t=>wa(e.id,t),onPaste:da,onClipboardChanged:()=>void aa(),onTransfer:ma,onAddToTray:e=>void Qi(e),onAddFavorite:e=>void ea(e),onRemoveFavorite:e=>void ta(e),favoritePaths:Yt,onExtractArchive:(e,t)=>void Ka(e,t),openOnSingleClick:A?.openOnSingleClick??!1,pendingRename:Wn&&t===(M===`primary`)&&r(Wn.directory,e.listing?.path??``)?Wn.path:null,pendingRenameToken:Wn?.token??0,refreshToken:fn,shortcuts:j,showCheckboxes:A?.showCheckboxes??!0,showImages:Fr,view:n})},Ha=T.open&&(0,I.jsx)(Pr,{current:Vr,focusToken:He,matchCase:T.matchCase,mode:T.mode,onClose:W,onMatchCase:()=>Fe(e=>({...e,matchCase:!e.matchCase})),onMode:()=>Fe(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Zr(1),onPrevious:()=>Zr(-1),onQuery:e=>Fe(t=>({...t,query:e})),onRegex:()=>Fe(e=>({...e,regex:!e.regex})),query:T.query,regex:T.regex,total:Br.length,onSelectMatches:Br.length>0?()=>qe(e=>e+1):void 0}),X=z===`files`&&v(B),Ua=X&&a(B),Wa=X&&R.listing?.archiveEncrypted===!0,Ga=async(t,n)=>{let r=g(t),i=await de(r,n,O.current,hc(r));if(!i.ok&&we(i.error)){let e=Pe(r);e&&Ie(r);let t=await Be(r,!!e);t&&(Je(r,t),i=await de(r,n,O.current,t))}i.ok?(vi(n),We(),q(R.id,n,!0)):Ce(`${e(`could_not_extract_the_archive`)}${i.error?`\n${i.error}`:``}`)},Ka=async(e,t)=>{let n=g(e),i=pc(n);if(!i)return;if(t===`choose`){let e=await _t(i);e&&await Ga(n,e);return}let a=t===`named`;if(t===`auto`){let e=r(n,B)?R.listing?.entries??[]:(await _e(n,!1,!1,O.current,hc(n))).entries;a=!(e.length===1&&e[0].isDirectory)}let o=i.includes(`\\`)?`\\`:`/`,s=a?`${i.replace(/[\\/]+$/,``)}${o}${mc(n)}`:i;await Ga(n,s)},qa=async e=>{X&&await Ka(B,e)},Ja=async()=>{X&&await Ka(B,`choose`)},Ya=(0,I.jsxs)(Sc,{children:[(0,I.jsx)($,{"data-shortcut":D(j.goBack),disabled:!za,onClick:e=>{R.index>0&&k(e)?Y(R.history[R.index-1]):Ki()},onContextMenu:e=>{R.index<=0||(e.preventDefault(),In({x:e.clientX,y:e.clientY,tab:R,direction:`back`}))},title:e(`back`),type:`button`,children:(0,I.jsx)(Cn,{})}),(0,I.jsx)($,{"data-shortcut":D(j.goForward),disabled:!Ba,onClick:e=>{R.index<R.history.length-1&&k(e)?Y(R.history[R.index+1]):qi()},onContextMenu:e=>{R.index>=R.history.length-1||(e.preventDefault(),In({x:e.clientX,y:e.clientY,tab:R,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,I.jsx)(hn,{})}),(0,I.jsx)($,{"data-shortcut":D(j.goUp),disabled:z!==`files`||!wr,onClick:e=>{wr&&(k(e)?Y(wr):Ei(wr))},title:e(`up_one_level`),type:`button`,children:(0,I.jsx)(ln,{})}),(0,I.jsx)(Kr,{focusToken:on,icon:Lr,label:z===`files`?void 0:e(xi[z]),onContextMenu:z===`files`?(e,t,n)=>Ln({x:t,y:n,path:e}):void 0,onNavigate:Ei,path:z===`files`?B:Cr}),z===`files`&&(!X||Ua)&&(0,I.jsx)($,{onClick:e=>Bi(e,B,()=>void q(R.id,B,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,I.jsx)(un,{})}),(0,I.jsx)($,{"data-shortcut":D(j.find),onClick:()=>z===`files`?Hr():qr(),title:e(`search`),type:`button`,children:(0,I.jsx)(dn,{})}),Bn.primary>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Gs,{}),(0,I.jsx)($,{onClick:e=>Wi(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,I.jsx)(Sn,{})})]}),(0,I.jsx)(`span`,{ref:er,style:{display:`contents`}}),X&&(0,I.jsxs)(Cc,{children:[(0,I.jsx)(Gs,{}),Wa&&(0,I.jsxs)(wc,{title:e(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,I.jsx)(tn,{size:12}),e(`encrypted`)]}),(0,I.jsx)($,{onClick:()=>void Ja(),onContextMenu:e=>{e.preventDefault(),Fn({x:e.clientX,y:e.clientY})},title:e(`extract_archive`),type:`button`,children:(0,I.jsx)(bn,{})}),(0,I.jsx)(it,{icon:(0,I.jsx)(en,{size:15}),onChange:e=>{let t=Number(e);Ct(t),O.current=t,X&&q(R.id,B,!0)},options:oc.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`archive_encoding`)}: ${e(oc.find(e=>e.value===String(St))?.label??`auto`)}`,value:String(St)})]})]}),Xa=Xe.open?{...Xe,index:at}:null;return(0,I.jsx)(yt,{value:Nr,children:(0,I.jsxs)(vc,{$rounded:Ne,children:[(0,I.jsx)($n,{settings:A,theme:Wt}),(0,I.jsx)(as,{activeId:R.id,closedTabs:ar,onClose:Ci,onNewTab:()=>Y(),onRestoreClosed:Ti,onReorder:Ta,onTransferToTab:ma,onSelect:f,onViewChange:ya,onColumns:ba,onShowImages:xa,showImages:Fr,tasks:Kn,onClearTasks:ha,activityOpen:Jn,onActivityOpenChange:Zn,trayCount:mr.length+sr.length,trayVisible:fr,onToggleTray:pa,split:Dr,canSplit:z===`files`,onToggleSplit:Oi,details:mn,canDetails:z===`files`||z===`recycle`||z===`gallery`,onToggleDetails:()=>gn(e=>!e),currentFolder:z===`files`&&!Tt(B)?B:``,shortcuts:j,view:jr,tabs:n.filter(e=>!e.hidden).map(t=>{let r=Z(t),i=Q(t),a=t.splitWith?n.find(e=>e.id===t.splitWith):void 0,o=a?Q(a):``;return{id:t.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?dt(Nr,i):void 0,archive:r===`files`&&v(i),split:!!a,title:r===`files`?lt(Nr,i,u(i)||e(`files`)):e(xi[r]),partner:a?{title:lt(Nr,o,u(o)||e(`files`)),place:dt(Nr,o)}:void 0}})}),(0,I.jsxs)(yc,{children:[(0,I.jsx)(ai,{activeKind:z,currentPath:z===`files`?Cr:``,drives:re,historyVersion:Xt,onNavigate:Ei,onOpenView:Si,homePath:y.find(e=>e.kind===`home`)?.path??``,places:y,recent:At,recentLimit:Mt,version:rn}),(0,I.jsxs)(bc,{children:[(0,I.jsxs)(Ac,{children:[(0,I.jsxs)(jc,{children:[z!==`files`&&Ya,(0,I.jsx)(xc,{children:(0,I.jsxs)(F.Suspense,{fallback:null,children:[z!==`files`&&Xe.open&&(0,I.jsx)(Pr,{current:at,focusToken:et,matchCase:Xe.matchCase,mode:Xe.mode,onClose:Jr,onMatchCase:()=>Qe(e=>({...e,matchCase:!e.matchCase})),onMode:()=>Qe(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Yr(1),onPrevious:()=>Yr(-1),onQuery:e=>Qe(t=>({...t,query:e})),onRegex:()=>Qe(e=>({...e,regex:!e.regex})),placeholder:e(`search`),query:Xe.query,regex:Xe.regex,total:ct,onSelectMatches:z===`gallery`||z===`recycle`?()=>qe(e=>e+1):void 0}),z===`files`?Dr&&V?(0,I.jsxs)(Ec,{ref:Ri,children:[(0,I.jsxs)(Dc,{style:{flex:_},children:[(0,I.jsxs)(Tc,{$active:M===`primary`,onPointerDown:()=>An(`primary`),children:[(0,I.jsx)($,{"data-shortcut":D(j.goBack),disabled:!za,onClick:e=>{let t=R.index-1;t<0||(k(e)?Y(R.history[t]):_i(R.id,R.history[t],t))},onContextMenu:e=>{R.index<=0||(e.preventDefault(),In({x:e.clientX,y:e.clientY,tab:R,direction:`back`}))},title:e(`back`),type:`button`,children:(0,I.jsx)(Cn,{})}),(0,I.jsx)($,{"data-shortcut":D(j.goForward),disabled:!Ba,onClick:e=>{let t=R.index+1;t>=R.history.length||(k(e)?Y(R.history[t]):_i(R.id,R.history[t],t))},onContextMenu:e=>{R.index>=R.history.length-1||(e.preventDefault(),In({x:e.clientX,y:e.clientY,tab:R,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,I.jsx)(hn,{})}),(0,I.jsx)($,{"data-shortcut":D(j.goUp),disabled:!wr,onClick:e=>{wr&&(k(e)?Y(wr):q(R.id,wr))},title:e(`up_one_level`),type:`button`,children:(0,I.jsx)(ln,{})}),(0,I.jsx)(Kr,{focusToken:M===`primary`?on:void 0,onContextMenu:(e,t,n)=>Ln({x:t,y:n,path:e}),onNavigate:(e,t)=>t?Y(e):void q(R.id,e),path:B}),(0,I.jsx)($,{onClick:e=>Bi(e,B,()=>void q(R.id,B,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,I.jsx)(un,{})}),(0,I.jsx)($,{"data-shortcut":D(j.find),onClick:Hr,title:e(`search`),type:`button`,children:(0,I.jsx)(dn,{})}),Bn.primary>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Gs,{}),(0,I.jsx)($,{onClick:e=>Wi(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,I.jsx)(Sn,{})})]})]}),Va(R,!0),M===`primary`&&Ha]}),(0,I.jsx)(Oc,{onDoubleClick:()=>te(.5),onPointerDown:zi,title:e(`drag_to_resize_double_click_to_reset`)}),(0,I.jsxs)(Dc,{$enter:!0,style:{flex:1-_},children:[(0,I.jsxs)(Tc,{$active:M===`secondary`,onPointerDown:()=>An(`secondary`),children:[(0,I.jsx)($,{"data-shortcut":D(j.goBack),disabled:V.index<=0,onClick:e=>{let t=V.index-1;t<0||(k(e)?Y(V.history[t]):_i(V.id,V.history[t],t))},onContextMenu:e=>{V.index<=0||(e.preventDefault(),In({x:e.clientX,y:e.clientY,tab:V,direction:`back`}))},title:e(`back`),type:`button`,children:(0,I.jsx)(Cn,{})}),(0,I.jsx)($,{"data-shortcut":D(j.goForward),disabled:V.index>=V.history.length-1,onClick:e=>{let t=V.index+1;t>=V.history.length||(k(e)?Y(V.history[t]):_i(V.id,V.history[t],t))},onContextMenu:e=>{V.index>=V.history.length-1||(e.preventDefault(),In({x:e.clientX,y:e.clientY,tab:V,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,I.jsx)(hn,{})}),(0,I.jsx)($,{"data-shortcut":D(j.goUp),disabled:!kr,onClick:e=>{kr&&(k(e)?Y(kr):q(V.id,kr))},title:e(`up_one_level`),type:`button`,children:(0,I.jsx)(ln,{})}),(0,I.jsx)(Kr,{focusToken:M===`secondary`?on:void 0,onContextMenu:(e,t,n)=>Ln({x:t,y:n,path:e}),onNavigate:(e,t)=>t?Y(e):void q(V.id,e),path:Or}),(0,I.jsx)($,{onClick:e=>Bi(e,Or,()=>void q(V.id,Or,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,I.jsx)(un,{})}),(0,I.jsx)($,{"data-shortcut":D(j.find),onClick:Hr,title:e(`search`),type:`button`,children:(0,I.jsx)(dn,{})}),Bn.secondary>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Gs,{}),(0,I.jsx)($,{onClick:e=>Wi(`secondary`,e),title:e(`selection_menu`),type:`button`,children:(0,I.jsx)(Sn,{})})]})]}),Va(V,!1),M===`secondary`&&Ha]})]}):(0,I.jsxs)(I.Fragment,{children:[Ya,(0,I.jsxs)(kc,{children:[Va(R,!0),Ha]})]}):z===`home`?(0,I.jsx)(Qs,{platform:S?.platform,drives:re,find:Xa,historyVersion:Xt,onSearchMatches:pt,homePath:y.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:ja,onHistoryChanged:()=>Zt(e=>e+1),onAddToTray:e=>void Qi(e),onAddFavorite:e=>void ea(e),onRemoveFavorite:e=>void ta(e),favoritePaths:Yt,onExtractArchive:(e,t)=>void Ka(e,t),settingsVersion:rn,theme:Wt,onOpen:Ei,onLayoutChanged:ka,onPlacesChanged:ne,onRecentCleared:Aa,places:y,recent:At,recentLimit:Mt,visibilityVersion:fn}):z===`settings`?(0,I.jsx)($s,{appInfo:S,find:Xa,focusSection:je,onSearchMatches:pt,onSettingsChanged:ka}):z===`gallery`?(0,I.jsx)(ec,{platform:S?.platform,toolbarSlot:Qn,onStatusChange:nr,confirmDelete:A?.confirmDelete??!1,find:Xa,onSearchMatches:pt,openOnSingleClick:A?.openOnSingleClick??!1,onAddToTray:e=>void Qi(e),onAddFavorite:e=>void ea(e),onRemoveFavorite:e=>void ta(e),favoritePaths:Yt,onExtractArchive:(e,t)=>void Ka(e,t),shortcuts:j,showCheckboxes:A?.showCheckboxes??!0,selectMatchesToken:Ke,onPreviewChange:ji,view:jr}):(0,I.jsx)(tc,{find:Xa,toolbarSlot:Qn,onStatusChange:nr,onOpenLocation:Ei,onShowDetails:()=>gn(!0),platform:S?.platform,selectMatchesToken:Ke,onPreviewChange:Mi})]})},z)]}),(z===`files`||z===`gallery`||z===`recycle`)&&(0,I.jsx)(gt,{emptyNote:e(`nothing_selected`),info:Fi,onWidth:ki,open:mn,selectionNote:Ii,videoAudio:A?.previewVideoAudio??!1,videoAutoplay:A?.previewVideoAutoplay??!1,width:_n})]}),(0,I.jsxs)(Ic,{children:[(0,I.jsx)(`span`,{children:Li}),S?(0,I.jsxs)(Mc,{children:[(0,I.jsxs)(`span`,{children:[`v`,S.version,` · `,S.platform]}),S.debug&&(0,I.jsx)(Fc,{children:`debug`}),be?.available&&(0,I.jsxs)(Nc,{onClick:e=>{Me(`updates`),Si(`settings`,k(e))},title:e(`version_version_is_available`,{version:be.latest}),type:`button`,children:[(0,I.jsx)(Pc,{}),e(`update_available`)]})]}):(0,I.jsx)(`span`,{children:e(`browser_preview`)})]})]})]}),(0,I.jsx)(ot,{clipboardItems:sr,clipboardMove:lr,currentDirectory:z===`files`?Cr:``,items:mr,onAdd:e=>void Qi(e),onClear:na,onClose:()=>pr(!1),onCopyToClipboard:e=>void oa(e),onPosition:fa,onRemove:$i,onTransfer:ma,position:yr,visible:fr}),jn&&(0,I.jsx)(vt,{creationOnly:!0,directory:jn.directory,menu:{x:jn.x,y:jn.y,paths:[],background:!0},onClose:()=>Mn(null),onCreateFile:e=>void Gi(e),onCreateFolder:e=>void Gi(null,e),shortcuts:j}),P&&(0,I.jsx)(vt,{allowCompression:!0,directory:pc(P.path)??P.path,menu:{x:P.x,y:P.y,paths:[P.path]},onAddToTray:e=>void Qi(e),onAddFavorite:e=>void ea(e),onRemoveFavorite:e=>void ta(e),favoritePaths:Yt,onExtractArchive:(e,t)=>void Ka(e,t),onArchiveCreated:e=>{e&&vi(pc(P.path)??P.path)},onClose:()=>Ln(null),onCompressTo:(e,t)=>zn({paths:e,name:t}),onCopy:(e,t)=>void wt(e,t),onDelete:e=>void Nt(e,!1).then(()=>vi(pc(P.path)??P.path)),onOpen:(e,t)=>t?Y(e):void q(R.id,e),onOpenFile:e=>void me(e),onPaste:e=>void kt(e).then(t=>{t.ok&&vi(e)}),onRefresh:()=>vi(P.path),shortcuts:j,target:{path:P.path,isDirectory:!0}}),Rn&&(0,I.jsx)(Jt,{initialDirectory:pc(P?.path??B)??B,initialName:Rn.name,onCancel:()=>zn(null),onCompress:async e=>{let t=await Bt(Rn.paths,e);return!t.ok&&t.error&&Ce(t.error),t.ok}}),N&&(0,I.jsx)(Te,{items:[{label:N.tab.history[N.tab.index]??``,disabled:!0,onSelect:()=>void 0},...N.tab.history.map((e,t)=>({path:e,index:t})).filter(({index:e})=>N.direction===`back`?e<N.tab.index:e>N.tab.index).sort((e,t)=>N.direction===`back`?t.index-e.index:e.index-t.index).slice(0,24).map(({path:e,index:t})=>({label:e,onSelect:()=>{let n=N.tab;In(null),_i(n.id,e,t)}}))],onClose:()=>In(null),x:N.x,y:N.y}),Pn&&(0,I.jsx)(Te,{items:[{label:e(`extract_here`),onSelect:()=>void qa(`here`)},{label:e(`extract_to_a_folder_named_after_the_archive`),onSelect:()=>void qa(`named`)},{label:e(`auto_extract_to_the_current_folder`),onSelect:()=>void qa(`auto`)}],onClose:()=>Fn(null),x:Pn.x,y:Pn.y}),gr&&(0,I.jsx)(ir,{action:gr.prompt.action,delaySeconds:gr.prompt.delaySeconds,hits:gr.prompt.hits,onCancel:()=>{gr.resolve(!1),_r(null)},onConfirm:()=>{gr.resolve(!0),_r(null)},permanent:gr.prompt.permanent},gr.id),(0,I.jsx)(Sr,{}),(0,I.jsx)(Er,{}),(0,I.jsx)(Tr,{}),m&&(0,I.jsx)(Ps,{code:m.code,deviceName:m.deviceName,onAccept:()=>{Kt(m.requestId,!0),ee(null)},onReject:()=>{Kt(m.requestId,!1),ee(null)}}),(0,I.jsx)(Ts,{}),(0,I.jsx)(ie,{})]})})}var vc=x.div`
    position: relative;
    isolation: isolate;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    background: var(--bg-primary);

    html.has-wallpaper & {
        background: transparent;
    }

    /* An undecorated window gets no frame from the compositor, so the corners are drawn here. */
    border-radius: ${({$rounded:e})=>e?`12px`:`0`};
    box-shadow: ${({$rounded:e})=>e?`inset 0 0 0 1px var(--border-color), 0 24px 70px rgba(0, 0, 0, 0.38)`:`none`};
`,yc=x.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex: 1;
    min-height: 0;
    background: radial-gradient(1200px 650px at 12% -10%, rgba(var(--accent-secondary-rgb), 0.12), transparent 60%),
    radial-gradient(900px 520px at 110% 18%, rgba(var(--accent-rgb), 0.09), transparent 55%),
    linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-media) 100%);

    html.has-wallpaper & {
        background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.12), rgba(var(--bg-rgb), 0.3));

        /* The light artwork needs no veil: its own colours are pale enough for dark text. */
        html[data-theme="light"] & {
            background: transparent;
        }
    }
`,bc=x.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,xc=x.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${ke}
`,Sc=x.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,$=Ws,Cc=x.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,wc=x.span`
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    gap: 5px;
    padding: 3px 9px;
    border: 1px solid rgba(251, 191, 36, 0.45);
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.12);
    color: #fbbf24;
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.03em;
    white-space: nowrap;
`,Tc=x.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,Ec=x.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Dc=x.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?He:``}
`,Oc=x.div`
    position: relative;
    width: 7px;
    flex-shrink: 0;
    cursor: col-resize;
    background: transparent;
    touch-action: none;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 3px;
        width: 1px;
        background: var(--border-color);
        transform-origin: center;
        transition: background 120ms ease, box-shadow 120ms ease;
        ${Me}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,kc=x.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Ac=x.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,jc=x.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Mc=x.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,Nc=x.button`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 2px 9px;
    border: 1px solid rgba(var(--accent-rgb), 0.55);
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
    font: inherit;
    font-size: 10px;
    font-weight: 600;
    cursor: pointer;
    animation: updatePulse 2.4s ease-in-out infinite;

    &:hover {
        border-color: var(--accent-primary);
        background: rgba(var(--accent-rgb), 0.32);
    }

    &:focus-visible {
        outline: 1px solid var(--border-color-focus);
        outline-offset: 2px;
    }

    @keyframes updatePulse {
        0%, 100% {
            box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0);
        }
        50% {
            box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.16);
        }
    }
`,Pc=x.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,Fc=x.span`
    padding: 1px 6px;
    border: 1px solid rgba(251, 191, 36, 0.5);
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.14);
    color: #fbbf24;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,Ic=x.footer`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 7px 20px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
    font-variant-numeric: tabular-nums;
`;document.documentElement.dataset.theme=S()?`dark`:`light`;var Lc=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,Lc),window.addEventListener(`pagehide`,qe);var Rc=document.getElementById(`root`),zc=new URLSearchParams(window.location.search),Bc=zc.get(`picker`),Vc=zc.get(`filter`)??``,Hc=Bc===`folder`||Bc===`file`||Bc===`save`?(0,F.lazy)(()=>Zs(()=>import(`./PickerWindow-B1LSswIE.js`).then(e=>({default:e.PickerWindow})),__vite__mapDeps([14,1,2,7,4,5,3,6,9,12,0,8,10]))):null;Rc&&(Xe(),(0,zn.createRoot)(Rc).render((0,I.jsx)(F.StrictMode,{children:(0,I.jsx)(ne,{children:Hc===null?(0,I.jsx)(_c,{}):(0,I.jsx)(F.Suspense,{fallback:null,children:(0,I.jsx)(Hc,{defaultExtension:zc.get(`ext`)??``,extensions:Vc?Vc.split(`;`).filter(Boolean):[],types:zc.get(`types`)??``,typeIndex:Number(zc.get(`type`)??0)||0,initial:zc.get(`initial`)??``,initialName:zc.get(`name`)??``,mode:Bc===`folder`?`folder`:`file`,multiple:zc.get(`multiple`)===`1`,save:Bc===`save`})})})})));export{An as A,Pn as C,P as D,Ln as E,jn as O,N as S,In as T,Wn as _,Ns as a,Jn as b,ai as c,Tr as d,Sr as f,Vn as g,Un as h,As as i,Fn as j,Mn as k,Kr as l,Qn as m,Ws as n,Ho as o,ir as p,Gs as r,Bo as s,Zs as t,Pr as u,qn as v,Nn as w,Hn as x,Gn as y};