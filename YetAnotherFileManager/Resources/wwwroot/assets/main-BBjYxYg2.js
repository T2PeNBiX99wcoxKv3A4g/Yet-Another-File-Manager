const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OverviewView-Dp5pWrPq.js","assets/rolldown-runtime-XKyaHtl9.js","assets/dist-sR-t6Emc.js","assets/selectionMenu--w-X4gsr.js","assets/theme-Ocob2ChL.js","assets/theme-Cd7QcbnN.css","assets/Icons-BCGG7XUW.js","assets/concepts-Drx0QqWX.js","assets/textSearch-CaqN30nV.js","assets/FileList-CYKTXG7c.js","assets/IconPicker-CD1zY_9z.js","assets/SettingsView-Ct9Fvq6t.js","assets/GalleryView-BzeyGUln.js","assets/RecycleView-g25_1Ozz.js","assets/PickerWindow-BxU423LB.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{C as t,D as n,E as r,O as i,S as a,T as o,a as s,b as c,c as l,d as u,h as d,k as f,l as p,m,p as ee,r as h,u as g,x as _,y as v}from"./theme-Ocob2ChL.js";import{_ as te,a as y,c as ne,d as re,f as b,g as x,i as ie,n as S,o as ae,r as oe,s as se,u as C}from"./dist-sR-t6Emc.js";import{A as w,B as ce,C as le,D as ue,F as de,G as fe,I as pe,J as me,K as he,Q as ge,R as _e,S as ve,T as ye,V as be,W as xe,Z as Se,_ as Ce,_t as we,a as Te,at as Ee,b as De,bt as Oe,c as ke,ct as Ae,d as je,f as Me,ft as Ne,g as T,gt as Pe,h as Fe,ht as Ie,i as Le,k as Re,l as ze,m as Be,nt as Ve,o as He,p as Ue,st as We,tt as Ge,u as Ke,v as qe,vt as Je,x as Ye,y as Xe,z as Ze}from"./selectionMenu--w-X4gsr.js";import{a as Qe,d as $e,i as et,m as tt,p as nt}from"./concepts-Drx0QqWX.js";import{A as rt,B as it,C as at,D as ot,E as st,F as ct,G as lt,J as ut,K as dt,L as ft,N as pt,O as mt,Q as ht,R as gt,U as _t,V as vt,W as yt,X as bt,Y as E,Z as xt,_t as St,c as Ct,ct as wt,d as Tt,dt as Et,et as D,ft as Dt,g as O,gt as Ot,ht as kt,i as At,k as jt,l as Mt,lt as Nt,m as Pt,mt as Ft,nt as It,ot as k,p as Lt,pt as Rt,q as A,r as zt,st as Bt,t as Vt,tt as Ht,ut as Ut,v as Wt,vt as Gt,x as Kt,yt as qt,z as Jt}from"./FileList-CYKTXG7c.js";import{A as Yt,B as Xt,E as Zt,F as Qt,G as j,H as $t,I as en,K as tn,L as nn,M as rn,O as an,Q as on,X as sn,Y as cn,a as ln,at as un,ct as dn,d as fn,dt as pn,f as mn,i as hn,k as gn,lt as _n,m as vn,mt as yn,n as bn,p as xn,q as Sn,r as Cn,t as wn,tt as Tn,ut as En,v as Dn,vt as On,y as M}from"./Icons-BCGG7XUW.js";async function kn(){return b.available?await b.request(`app.info`):{version:`dev`,platform:`web`,logDirectory:``,rounded:!1,debug:!1}}async function An(e){b.available?await b.request(`system.openUrl`,{url:e}):window.open(e,`_blank`,`noreferrer`)}async function jn(){b.available&&await Rn(`update.openLogs`)}async function Mn(e){b.available?await Rn(`update.openRelease`):e&&window.open(e,`_blank`,`noreferrer`)}async function Nn(){return b.available?await b.request(`update.status`)??null:null}async function Pn(){return b.available?await b.request(`update.check`):{current:`dev`,latest:`dev`,available:!1}}async function Fn(){return b.available?await b.request(`update.download`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}async function N(){await Rn(`update.cancel`)}async function In(){return b.available?await b.request(`update.install`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}function P(e){return b.on(t=>{t.type===`update.progress`&&e(t.data)})}function Ln(e){return b.on(t=>{t.type===`update.changelog`&&e(t.data)})}async function Rn(e,t,n=3e4){let r=await b.request(e,t,n);if(!r.ok)throw Error(r.error??`The action failed.`)}var F=e(te(),1),zn=i(),Bn={managed:0,private:0,workingSet:0,available:0};async function Vn(){return b.available?await b.request(`app.memory`):Bn}async function Hn(){return b.available?await b.request(`app.memory.trim`):Bn}var Un={registered:!1,pathMatches:!1,registeredPath:null};async function Wn(){return b.available?await b.request(`app.scheme`):Un}async function Gn(e){return b.available?await b.request(`app.scheme.set`,{enabled:e}):Un}var Kn={supported:!1,mode:`none`,active:!1,error:null};async function qn(){return b.available?await b.request(`app.startup`):Kn}async function Jn(e){return b.available?await b.request(`app.startup.set`,{mode:e}):Kn}async function Yn(){return b.available?(await b.request(`app.tasks`)).tasks:[]}async function Xn(){b.available&&await b.request(`app.tasks.clear`)}var Zn={home:`overview`,settings:`settings`,recycle:`recycle_bin`,gallery:`gallery`},Qn=`yafm://`,$n={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function er(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function tr(e){return`${Qn}${e===`home`?`overview`:e}`}function nr(e){return er(e)?$n[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function rr(e){let t=e.trim();if(t.length===0)return null;if(!er(t))return t;let n=$n[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?tr(n):null}var I=re();function ir({location:e,size:t=13}){switch(nr(e)){case`home`:return(0,I.jsx)(Xt,{size:t});case`settings`:return(0,I.jsx)(Qt,{size:t});case`recycle`:return(0,I.jsx)(On,{size:t});case`gallery`:return(0,I.jsx)(rn,{size:t});default:return v(e)?(0,I.jsx)(bn,{size:t}):(0,I.jsx)(rn,{size:t})}}function ar(e){let t=e.replace(/[\\/]+$/,``),n=Math.max(t.lastIndexOf(`\\`),t.lastIndexOf(`/`));return n>=0?t.slice(n+1):t}function or(){let e=C();return t=>{let n=nr(t);return n?e(Zn[n]):ar(t)}}var sr=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function cr(e){return sr.test(e)}function lr({settings:e,theme:t}){let n=e?.backgroundSource??null,r=n?.startsWith(`url:`)?n.slice(4):_(n)?n:null,i=n?.startsWith(`file:`)?n.slice(5):null,a=Ne(i),o=n?.startsWith(`builtin:`)?et(n,t):r??a,s=r===null?i===null?n!==null&&Qe(n):cr(i):cr(r.split(/[?#]/)[0]);if(!n||!o)return null;let c=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,I.jsxs)(ur,{"aria-hidden":!0,children:[s?(0,I.jsx)(fr,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o,style:{filter:c}}):(0,I.jsx)(dr,{src:o,style:{filter:c}}),(0,I.jsx)(pr,{})]})}var ur=x.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,dr=x.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,fr=x.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,pr=x.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);

    /* The light artwork is drawn pale already, so it only keeps a faint accent glow. */
    html[data-theme="light"] & {
        background: radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.06), transparent 60%);
    }
`,mr=f();function hr({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let o=C(),s=(0,F.useRef)(null),[c,l]=(0,F.useState)(()=>Math.max(1,Math.ceil(n))),u=e??`delete`;return(0,F.useEffect)(()=>{s.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));l(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,mr.createPortal)((0,I.jsx)(yr,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,I.jsxs)(br,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsx)(xr,{children:o(`protected_folder`)}),(0,I.jsx)(Sr,{children:o(`these_paths_are_protected_by_the_safety_settings`)}),(0,I.jsx)(Cr,{children:t.map(e=>(0,I.jsxs)(wr,{children:[(0,I.jsx)(Tr,{children:e.path}),(0,I.jsx)(Er,{children:o(`protected_by_pattern`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,I.jsx)(Dr,{children:gr(o,u,r??!1)}),(0,I.jsx)(Or,{children:_r(o,u)}),(0,I.jsx)(L,{children:o(`this_waits_seconds_s_before_the_button_works`,{seconds:n})}),(0,I.jsxs)(R,{children:[(0,I.jsx)(kr,{onClick:i,ref:s,type:`button`,children:o(`cancel`)}),(0,I.jsx)(z,{disabled:c>0,onClick:a,type:`button`,children:c>0?vr(o,u,c):vr(o,u,0)})]})]})}),document.body)}function gr(e,t,n){switch(t){case`delete`:return e(n?`deletes_permanently`:`moves_to_the_recycle_bin`);case`move`:return e(`moves_the_entries`);case`rename`:return e(`renames_the_entry`);case`write`:return e(`writes_into_this_folder`)}}function _r(e,t){switch(t){case`delete`:return e(`nothing_has_been_deleted`);case`move`:return e(`nothing_has_been_moved`);case`rename`:return e(`nothing_has_been_renamed`);case`write`:return e(`nothing_has_been_written`)}}function vr(e,t,n){let r=n>0?t===`delete`?`delete_anyway_seconds_s`:t===`move`?`move_anyway_seconds_s`:t===`rename`?`rename_anyway_seconds_s`:`write_anyway_seconds_s`:t===`delete`?`delete_anyway`:t===`move`?`move_anyway`:t===`rename`?`rename_anyway`:`write_anyway`;return n>0?e(r,{seconds:n}):e(r)}var yr=x.div`
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
`,br=x.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Ke}
`,xr=x.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Sr=x.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Cr=x.div`
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
`,wr=x.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Tr=x.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,Er=x.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,Dr=x.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,Or=x.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,L=x.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,R=x.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,kr=x.button`
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
`,z=x.button`
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
`;function Ar(){let e=C(),[t,n]=(0,F.useState)(null),r=(0,F.useRef)(null),i=(0,F.useRef)(null);(0,F.useEffect)(()=>(Fe(e=>new Promise(t=>{r.current=t,n(e)})),()=>Fe(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,F.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,mr.createPortal)((0,I.jsx)(jr,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,I.jsxs)(B,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsx)(Mr,{children:e(`notice`)}),(0,I.jsx)(Nr,{children:t}),(0,I.jsx)(Pr,{children:(0,I.jsx)(V,{onClick:a,ref:i,type:`button`,children:e(`ok`)})})]})}),document.body)}var jr=x.div`
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
`,B=x.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Ke}
`,Mr=x.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Nr=x.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Pr=x.div`
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
`;function Fr(){let e=C(),[t,n]=(0,F.useState)(null);(0,F.useEffect)(()=>b.on(e=>{let t=e;t.type===`fs.elevation.ask`&&t.data&&n(t.data)}),[]);let r=e=>{let r=t;n(null),r&&b.request(`fs.elevation.answer`,{token:r.token,allow:e})},i=(t=>{switch(t){case`delete`:return e(`delete`);case`rename`:return e(`rename`);case`copy`:return e(`copy`);case`moveTo`:return e(`move`);case`extractArchive`:return e(`extract_archive`);case`newFolder`:case`newFolderAt`:return e(`new_folder`);case`newFile`:case`newFileAt`:return e(`new_file`);case`restoreRecycle`:return e(`restore`);case`writeFile`:return e(`save`);default:return``}})(t?.action??``);return(0,I.jsx)(Le,{confirmLabel:e(`run_as_administrator`),message:e(`this_path_needs_administrator_rights_to_action_restart_the_app_as_administrator_and_try_again`,{path:t?.path??``,action:i.length>0?i.toLowerCase():e(`ok`).toLowerCase()}),onCancel:()=>r(!1),onConfirm:()=>r(!0),open:t!==null,title:e(`administrator_rights_required`)})}function Ir(){let e=C(),[t,n]=(0,F.useState)(null),[r,i]=(0,F.useState)(``),a=(0,F.useRef)(null),o=(0,F.useRef)(null);(0,F.useEffect)(()=>(T((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>T(null)),[]),(0,F.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,mr.createPortal)((0,I.jsx)(Lr,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,I.jsxs)(Rr,{role:`dialog`,"aria-modal":`true`,children:[(0,I.jsx)(H,{children:e(`archive_password`)}),(0,I.jsx)(zr,{children:t.wrong?e(`that_password_did_not_open_the_archive_try_again`):e(`this_archive_is_encrypted_enter_its_password`)}),(0,I.jsx)(Br,{title:t.archive,children:t.archive}),(0,I.jsx)(Vr,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,I.jsxs)(Hr,{children:[(0,I.jsx)(Ur,{onClick:()=>s(null),type:`button`,children:e(`cancel`)}),(0,I.jsx)(Wr,{disabled:r.length===0,onClick:c,type:`button`,children:e(`ok`)})]})]})}),document.body)}var Lr=x.div`
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
`,Rr=x.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Ke}
`,H=x.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,zr=x.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Br=x.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Vr=x.input`
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
`,Hr=x.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,Ur=x.button`
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
`,Wr=x(Ur)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Gr({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:ee,onSelectMatches:h}){let g=C(),_=(0,F.useRef)(null),v=c??g(`search_this_folder`);(0,F.useEffect)(()=>{let e=_.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let te=e=>{e(),_.current?.focus()};return(0,I.jsxs)(Kr,{children:[(0,I.jsx)(dn,{}),(0,I.jsx)(qr,{"aria-label":v,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),ee())},placeholder:v,ref:_,spellCheck:!1,value:e}),!s&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Jr,{children:i===0?`0/0`:`${a+1}/${i}`}),h&&(0,I.jsx)(U,{disabled:i===0,onClick:h,title:g(`select_all_matches`),type:`button`,children:(0,I.jsx)(fn,{size:12})}),(0,I.jsx)(U,{$chevron:!0,onClick:()=>te(u),title:g(`previous_match_shift_enter`),type:`button`,children:(0,I.jsx)(mn,{size:12})}),(0,I.jsx)(U,{$chevron:!0,$down:!0,onClick:()=>te(d),title:g(`next_match_enter`),type:`button`,children:(0,I.jsx)(mn,{size:12})})]}),(0,I.jsx)(Yr,{$on:n,onClick:()=>te(f),title:g(`match_case`),type:`button`,children:`Aa`}),(0,I.jsx)(Yr,{$on:r,onClick:()=>te(p),title:g(`regular_expression`),type:`button`,children:`.*`}),!s&&(0,I.jsx)(Xr,{$on:t===`hide`,onClick:()=>te(m),title:g(t===`hide`?`non_matching_entries_are_hidden`:`non_matching_entries_are_dimmed`),type:`button`,children:t===`hide`?(0,I.jsx)(Yt,{size:12}):(0,I.jsx)(gn,{size:12})}),(0,I.jsx)(U,{onClick:ee,title:g(`close_search_esc`),type:`button`,children:(0,I.jsx)(M,{size:12})})]})}var Kr=x.div`
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
`,qr=x.input`
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
`,Jr=x.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,U=x.button`
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
`,Yr=x.button`
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
`,Xr=x(Yr)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`;function Zr({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=C(),s=A(),[c,l]=(0,F.useState)(!1),[u,d]=(0,F.useState)(``),[f,p]=(0,F.useState)([]),[m,ee]=(0,F.useState)(0),[h,g]=(0,F.useState)(null),[_,v]=(0,F.useState)(null),[te,y]=(0,F.useState)(null),ne=(0,F.useRef)(null),re=(0,F.useRef)(null),b=(0,F.useRef)(0);(0,F.useEffect)(()=>{if(!Tt(e)){y(null);return}let t=O(e);if(!t){y(null);return}let n=!0;return Ct().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);y({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&y(null)),()=>{n=!1}},[e]),(0,F.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,F.useEffect)(()=>{r&&r!==b.current&&(b.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,F.useEffect)(()=>{c&&ne.current?.select()},[c]),(0,F.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[c]);let x=()=>{d(e.replace(/\\/g,`/`)),l(!0)},ie=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,F.useEffect)(()=>{if(!c){p([]);return}let e=ti(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{_e(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),ee(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let S=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,F.useLayoutEffect)(()=>{if(!c){g(null);return}let e=()=>{let e=re.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);g({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,I.jsxs)(ai,{onPointerDown:e=>e.stopPropagation(),ref:re,children:[(0,I.jsxs)(K,{children:[(0,I.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),ee(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),ee(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?S(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):ie(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:ne,spellCheck:!1,value:u}),(0,I.jsx)(li,{onClick:()=>l(!1),title:o(`cancel`),type:`button`,children:(0,I.jsx)(M,{size:12})}),(0,I.jsx)(li,{$apply:!0,onClick:ie,onPointerDown:e=>e.stopPropagation(),title:o(`open_this_path`),type:`button`,children:(0,I.jsx)(fn,{size:14})})]}),f.length>0&&h&&(0,mr.createPortal)((0,I.jsx)(oi,{onPointerDown:e=>e.stopPropagation(),style:{left:h.left,top:h.top,width:h.width},children:f.map((e,t)=>(0,I.jsxs)(si,{$active:t===m,onClick:t=>S(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>ee(t),type:`button`,children:[(0,I.jsx)(rt,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,I.jsx)(ci,{children:e.name})]},e.path))}),document.body)]});let ae=t?[{label:t,path:e,icon:n}]:Qr(e,te)??ei(e,s.places);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(W,{onClick:x,title:o(`click_to_type_a_path`),children:ae.map((t,n)=>(0,I.jsxs)(ni,{$last:n===ae.length-1,children:[n>0&&(0,I.jsx)(ii,{children:(0,I.jsx)(mn,{size:9})}),(0,I.jsxs)(G,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):v({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,I.jsx)(ri,{children:(0,I.jsx)(pt,{place:t.place,size:13})}):t.icon&&(0,I.jsx)(ri,{children:t.icon}),t.label]})]},t.path))}),_&&(0,I.jsx)(Te,{items:[{label:o(`open`),icon:(0,I.jsx)(hn,{size:14}),onSelect:()=>i(_.path)},{label:o(`open_in_new_tab`),icon:(0,I.jsx)(un,{size:14}),onSelect:()=>i(_.path,!0)},{label:o(`copy_as_path`),icon:(0,I.jsx)(Dn,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(_.path)},...er(_.path)?[{label:o(`open_with`),icon:(0,I.jsx)(an,{size:14}),onSelect:()=>void Ft(_.path)},{label:o(`properties`),icon:(0,I.jsx)(Qt,{size:14}),onSelect:()=>void St([_.path])}]:[]],onClose:()=>v(null),x:_.x,y:_.y})]})}function Qr(e,t){let n=O(e);if(!n)return null;let r=st(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,I.jsx)(_n,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function $r(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function ei(e,t){let n=$r(e),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>r(t.path,e.path));t>i&&(i=t,a=e)}return a&&i>=0&&n.splice(0,i+1,{label:a.name,path:n[i].path,place:a}),n}function ti(e){if(er(e)||Tt(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var W=x.div`
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
`,ni=x.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,ri=x.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,ii=x.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,G=x.button`
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
`,ai=x.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,oi=x.div`
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
`,si=x.button`
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
`,ci=x.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,K=x.div`
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
`,li=x.button`
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
`;function ui({places:e,drives:t,recent:i,recentLimit:a,currentPath:o,activeKind:s,homePath:c=``,version:l=0,historyVersion:d=0,hiddenViews:f=[],onNavigate:p,onOpenView:h}){let[g,_]=(0,F.useState)([]),v=C(),[te,y]=(0,F.useState)(null),ne=A();(0,F.useEffect)(()=>{$e().then(e=>{y(e),_(ft(e).filter(e=>e.pinned))},()=>{y(null),_([])})},[l]),(0,F.useEffect)(()=>{if(!b.available)return;let e=g.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||c).filter(e=>e.length>0);return b.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>b.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[g,c]);let re=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>r(e.path,t));return{name:te?.placeNames?.[t]??n?.name??(u(t)||t),path:t,kind:`folder`,icon:n?.icon??te?.placeIcons?.[t]??null}}),x=s===`files`;return(0,I.jsxs)(gi,{children:[(0,I.jsxs)(_i,{children:[!f.includes(`home`)&&(0,I.jsxs)(q,{$active:s===`home`,onClick:e=>h(`home`,k(e)),title:v(`overview`),type:`button`,children:[(0,I.jsx)(cn,{}),(0,I.jsx)(Y,{children:v(`overview`)})]}),!f.includes(`recycle`)&&(0,I.jsxs)(q,{$active:s===`recycle`,onClick:e=>h(`recycle`,k(e)),title:v(`recycle_bin`),type:`button`,children:[(0,I.jsx)(On,{}),(0,I.jsx)(Y,{children:v(`recycle_bin`)})]}),!f.includes(`gallery`)&&(0,I.jsxs)(q,{$active:s===`gallery`,onClick:e=>h(`gallery`,k(e)),title:v(`gallery`),type:`button`,children:[(0,I.jsx)($t,{}),(0,I.jsx)(Y,{children:v(`gallery`)})]})]}),g.map(e=>(0,I.jsxs)(yi,{children:[(0,I.jsxs)(q,{as:`div`,$active:!1,children:[(0,I.jsx)(J,{children:(0,I.jsx)(ct,{panel:e,size:16})}),(0,I.jsx)(Y,{children:v(e.title)})]}),(0,I.jsx)(bi,{children:(0,I.jsxs)(xi,{children:[e.kind===`quick`&&re(e).map(e=>(0,I.jsxs)(q,{$active:x&&r(o,e.path),onClick:t=>p(e.path,k(t)),title:e.path,type:`button`,children:[(0,I.jsx)(pt,{place:e}),(0,I.jsx)(Y,{children:e.name})]},e.path)),e.kind===`recent`&&i.slice(0,a).map(e=>{let t=dt(ne,e.path);return(0,I.jsxs)(q,{$active:x&&r(o,e.path),onClick:t=>e.isDirectory?p(e.path,k(t)):void me(e.path),title:e.path,type:`button`,children:[t&&ne.useIcons?(0,I.jsx)(pt,{place:t}):(0,I.jsx)(rt,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,I.jsx)(Y,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,I.jsx)(pi,{historyVersion:d,onNavigate:p}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,I.jsxs)(q,{$active:x&&r(o,e.name),onClick:t=>p(e.name,k(t)),title:e.name,type:`button`,children:[(0,I.jsx)(Zt,{}),(0,I.jsxs)(Y,{children:[ee(e),(0,I.jsxs)(Si,{children:[m(e.freeSpace),` free`]}),(0,I.jsx)(Ci,{children:(0,I.jsx)(wi,{$used:t,$tone:n(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,I.jsx)(mi,{onNavigate:p,path:e.path||c})]})})]},e.id)),!f.includes(`settings`)&&(0,I.jsx)(vi,{children:(0,I.jsxs)(q,{$active:s===`settings`,onClick:e=>h(`settings`,k(e)),title:v(`settings`),type:`button`,children:[(0,I.jsx)(Qt,{}),(0,I.jsx)(Y,{children:v(`settings`)})]})})]})}var di=10,fi=40;function pi({historyVersion:e=0,onNavigate:t}){let n=C(),[r,i]=(0,F.useState)(null),a=A();return(0,F.useEffect)(()=>{be().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=dt(a,e.path);return(0,I.jsxs)(q,{$active:!1,onClick:n=>t(e.path,k(n)),title:o(n,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,I.jsx)(pt,{place:r}):(0,I.jsx)(rt,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,I.jsx)(Y,{children:r?.name||e.name})]},e.path)})}function mi({path:e,onNavigate:t}){let[n,i]=(0,F.useState)(null);(0,F.useEffect)(()=>{e&&(i(null),_e(e,!1).then(i,()=>i(null)))},[e]),(0,F.useEffect)(()=>{if(e&&b.available)return b.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&r(n.data.path,e)&&_e(e,!1).then(i,()=>void 0)})},[e]);let a=n?.entries??[],o=a.filter(e=>e.isDirectory).slice(0,di),s=a.filter(e=>!e.isDirectory).slice(0,fi);return(0,I.jsxs)(I.Fragment,{children:[o.map(e=>(0,I.jsx)(hi,{entry:e,onNavigate:t},e.fullPath)),s.map(e=>(0,I.jsx)(hi,{entry:e,onNavigate:t},e.fullPath))]})}function hi({entry:e,onNavigate:t}){let n=A(),r=dt(n,e.fullPath);return(0,I.jsxs)(q,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,k(n)):void me(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,I.jsx)(pt,{place:r}):(0,I.jsx)(rt,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,I.jsx)(Y,{children:r?.name||e.name})]})}var gi=x.aside`
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

    &:not(:hover) ${()=>Si},
    &:not(:hover) ${()=>Ci} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,_i=x.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,vi=x(_i)`
    margin-top: auto;
`,yi=x.div`
    display: flex;
    flex-direction: column;
`,bi=x.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${gi}:hover ${yi}:hover > & {
        grid-template-rows: 1fr;
    }
`,xi=x.div`
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
`,q=x.button`
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
`,J=x.span`
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
`,Si=x.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Ci=x.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,wi=x.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`;function Ti({tabs:e,onRestore:t}){let n=C(),r=or(),[i,a]=(0,F.useState)(!1),o=(0,F.useRef)(null);return(0,F.useEffect)(()=>{if(!i)return;let e=e=>{o.current?.contains(e.target)||a(!1)},t=()=>a(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[i]),(0,I.jsxs)(Ei,{ref:o,children:[(0,I.jsx)(Di,{$active:i,onClick:()=>a(e=>!e),title:n(`recently_closed_tabs`),type:`button`,children:(0,I.jsx)(vn,{size:15})}),i&&(0,I.jsxs)(Oi,{children:[(0,I.jsxs)(ki,{children:[(0,I.jsxs)(Ai,{children:[(0,I.jsx)(vn,{size:12}),n(`recently_closed_tabs`)]}),(0,I.jsx)(ji,{onClick:()=>a(!1),title:n(`close`),type:`button`,children:(0,I.jsx)(M,{size:10})})]}),e.length===0?(0,I.jsx)(Li,{children:n(`no_recently_closed_tabs`)}):(0,I.jsx)(Mi,{children:[...e].reverse().map((n,i)=>{let o=e.length-1-i,s=nr(n);return(0,I.jsxs)(Ni,{onClick:()=>{a(!1),t(o)},title:n,type:`button`,children:[(0,I.jsx)(ir,{location:n}),(0,I.jsxs)(Pi,{children:[(0,I.jsx)(Fi,{children:r(n)}),(0,I.jsx)(Ii,{children:s?r(n):n})]})]},`${o}-${n}`)})})]})]})}var Ei=x.div`
    position: relative;
    display: flex;
`,Di=x.button`
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
`,Oi=x.div`
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
`,ki=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Ai=x.span`
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
`,ji=x.button`
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
`,Mi=x.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,Ni=x.button`
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
`,Pi=x.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Fi=x.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ii=x.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Li=x.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Ri=x.span`
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
`;function zi({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=C(),a=(0,F.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,F.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)},t=()=>r(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[n,r]),(0,I.jsxs)(Vi,{ref:a,children:[(0,I.jsxs)(Hi,{$active:n,onClick:()=>r(!n),title:s>0?o(i,s,`k_1_operation_running`,`count_operations_running`):i(`status_center`),type:`button`,children:[(0,I.jsx)(yn,{size:13}),c>0&&(0,I.jsx)(Ri,{children:c>9?`9+`:c})]}),n&&(0,I.jsxs)(Ui,{children:[(0,I.jsxs)(Wi,{children:[(0,I.jsxs)(Gi,{children:[(0,I.jsx)(yn,{size:12}),i(`status_center`)]}),(0,I.jsxs)(Ki,{children:[(0,I.jsx)(qi,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`clear_finished`)}),(0,I.jsx)(Ji,{onClick:()=>r(!1),title:i(`close`),type:`button`,children:(0,I.jsx)(M,{size:10})})]})]}),e.length===0?(0,I.jsx)(Xi,{children:i(`no_operations_yet`)}):(0,I.jsx)(Yi,{children:e.map(e=>(0,I.jsx)(Bi,{task:e},e.id))})]})]})}function Bi({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,I.jsxs)(Zi,{children:[(0,I.jsxs)(Qi,{children:[(0,I.jsx)($i,{$state:e.state,children:e.state===`done`?(0,I.jsx)(fn,{size:10}):e.state===`failed`?(0,I.jsx)(M,{size:10}):(0,I.jsx)(ea,{})}),(0,I.jsx)(ta,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,I.jsxs)(na,{children:[m(e.bytesDone),` / `,m(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,I.jsxs)(na,{children:[e.done,` / `,e.total]})]}),i&&(0,I.jsx)(ra,{children:(0,I.jsx)(ia,{$percent:r,$indeterminate:t===0})}),e.error&&(0,I.jsx)(aa,{children:e.error})]})}var Vi=x.div`
    position: relative;
    display: flex;
`,Hi=x.button`
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
`,Ui=x.div`
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
`,Wi=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Gi=x.span`
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
`,Ki=x.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,qi=x.button`
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
`,Ji=x.button`
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
`,Yi=x.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,Xi=x.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Zi=x.div`
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
`,Qi=x.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,$i=x.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,ea=x.span`
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
`,ta=x.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,na=x.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,ra=x.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,ia=x.div`
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
`,aa=x.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function oa(){return b.available?(await b.request(`fs.history.list`)).entries:[]}async function sa(e){return b.available?(await b.request(`fs.history.undoTo`,{id:e})).ok:!1}function ca(){let e=C(),[t,n]=(0,F.useState)(!1),[r,i]=(0,F.useState)([]),[a,o]=(0,F.useState)(!1),s=(0,F.useRef)(null),c=()=>void oa().then(i,()=>i([]));(0,F.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)},i=()=>n(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,i),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,i)}},[t]);let l=async e=>{o(!0);try{await sa(e),c()}finally{o(!1)}};return(0,I.jsxs)(da,{ref:s,children:[(0,I.jsx)(fa,{$active:t,onClick:()=>n(e=>!e),title:e(`history`),type:`button`,children:(0,I.jsx)(xn,{size:14})}),t&&(0,I.jsxs)(pa,{children:[(0,I.jsxs)(ma,{children:[(0,I.jsxs)(ha,{children:[(0,I.jsx)(xn,{size:12}),e(`history`)]}),(0,I.jsx)(ga,{onClick:()=>n(!1),title:e(`close`),type:`button`,children:(0,I.jsx)(M,{size:10})})]}),r.length===0?(0,I.jsx)(Ta,{children:e(`no_operations_yet`)}):(0,I.jsx)(_a,{children:r.map(t=>(0,I.jsxs)(va,{children:[(0,I.jsxs)(ya,{children:[(0,I.jsxs)(ba,{children:[(0,I.jsx)(ua,{label:t.label}),la(e,t.label)]}),(0,I.jsx)(xa,{children:d(t.at)})]}),t.paths.length>0&&(0,I.jsxs)(Sa,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,I.jsx)(Ca,{children:(0,I.jsx)(wa,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`undo`)})})]},t.id))})]})]})}function la(e,t){if(t===`new_folder`)return e(`new_folder`);if(t===`new_file`)return e(`new_file`);if(t===`paste_text`)return e(`paste_text`);if(t===`paste_image`)return e(`paste_image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`move`?`move_count_items`:t===`copy`?`copy_count_items`:`delete_count_items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`rename`)} ${i[1]}`:t}function ua({label:e}){return e.startsWith(`delete`)?(0,I.jsx)(On,{size:13}):e.startsWith(`move`)||e.startsWith(`copy`)?(0,I.jsx)(Dn,{size:13}):e.startsWith(`rename`)?(0,I.jsx)(Tn,{size:13}):e.startsWith(`compress`)?(0,I.jsx)(bn,{size:13}):e.startsWith(`new`)?(0,I.jsx)(un,{size:13}):(0,I.jsx)(hn,{size:13})}var da=x.div`
    position: relative;
    display: flex;
`,fa=x.button`
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
`,pa=x.div`
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
`,ma=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,ha=x.span`
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
`,ga=x.button`
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
`,_a=x.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,va=x.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,ya=x.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,ba=x.span`
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
`,xa=x.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Sa=x.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ca=x.div`
    display: flex;
    justify-content: flex-end;
`,wa=x.button`
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
`,Ta=x.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Ea=(e=>(e[e.Border=-1]=`Border`,e[e.Data=0]=`Data`,e[e.Function=1]=`Function`,e[e.Position=2]=`Position`,e[e.Timing=3]=`Timing`,e[e.Alignment=4]=`Alignment`,e))(Ea||{}),Da=[0,1],Oa=[1,0],ka=[2,3],Aa=[3,2],ja={L:Da,M:Oa,Q:ka,H:Aa},Ma=/^\d*$/,Na=/^[A-Z0-9 $%*+./:-]*$/,Pa=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`,Fa=1,Ia=40,La=3,Ra=3,za=40,Ba=10,Va=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],Ha=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],Ua=class{constructor(e,t,n,r){if(this.version=e,this.ecc=t,e<Fa||e>Ia)throw RangeError(`Version value out of range`);if(r<-1||r>7)throw RangeError(`Mask value out of range`);this.size=e*4+17;let i=Array.from({length:this.size}).fill(!1);for(let e=0;e<this.size;e++)this.modules.push(i.slice()),this.types.push(i.map(()=>0));this.drawFunctionPatterns();let a=this.addEccAndInterleave(n);if(this.drawCodewords(a),r===-1){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let n=this.getPenaltyScore();n<e&&(r=t,e=n),this.applyMask(t)}}this.mask=r,this.applyMask(r),this.drawFormatBits(r)}size;mask;modules=[];types=[];getModule(e,t){return e>=0&&e<this.size&&t>=0&&t<this.size&&this.modules[t][e]}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0,Ea.Timing),this.setFunctionModule(e,6,e%2==0,Ea.Timing);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n===0&&r===0||n===0&&r===t-1||n===t-1&&r===0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.ecc[1]<<3|e,n=t;for(let e=0;e<10;e++)n=n<<1^(n>>>9)*1335;let r=(t<<10|n)^21522;for(let e=0;e<=5;e++)this.setFunctionModule(8,e,X(r,e));this.setFunctionModule(8,7,X(r,6)),this.setFunctionModule(8,8,X(r,7)),this.setFunctionModule(7,8,X(r,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,X(r,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,X(r,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,X(r,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;for(let e=0;e<18;e++){let n=X(t,e),r=this.size-11+e%3,i=Math.floor(e/3);this.setFunctionModule(r,i,n),this.setFunctionModule(i,r,n)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){let i=Math.max(Math.abs(r),Math.abs(n)),a=e+r,o=t+n;a>=0&&a<this.size&&o>=0&&o<this.size&&this.setFunctionModule(a,o,i!==2&&i!==4,Ea.Position)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!==1,Ea.Alignment)}setFunctionModule(e,t,n,r=Ea.Function){this.modules[t][e]=n,this.types[t][e]=r}addEccAndInterleave(e){let t=this.version,n=this.ecc;if(e.length!==ao(t,n))throw RangeError(`Invalid argument`);let r=Ha[n[0]][t],i=Va[n[0]][t],a=Math.floor(io(t)/8),o=r-a%r,s=Math.floor(a/r),c=[],l=oo(i);for(let t=0,n=0;t<r;t++){let r=e.slice(n,n+s-i+(t<o?0:1));n+=r.length;let a=so(r,l);t<o&&r.push(0),c.push(r.concat(a))}let u=[];for(let e=0;e<c[0].length;e++)c.forEach((t,n)=>{(e!==s-i||n>=o)&&u.push(t[e])});return u}drawCodewords(e){if(e.length!==Math.floor(io(this.version)/8))throw RangeError(`Invalid argument`);let t=0;for(let n=this.size-1;n>=1;n-=2){n===6&&(n=5);for(let r=0;r<this.size;r++)for(let i=0;i<2;i++){let a=n-i,o=n+1&2?r:this.size-1-r;!this.types[o][a]&&t<e.length*8&&(this.modules[o][a]=X(e[t>>>3],7-(t&7)),t++)}}}applyMask(e){if(e<0||e>7)throw RangeError(`Mask value out of range`);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw Error(`Unreachable`)}!this.types[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[t][a]===n?(r++,r===5?e+=La:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*za),n=this.modules[t][a],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*za}for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[a][t]===n?(r++,r===5?e+=La:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*za),n=this.modules[a][t],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*za}for(let t=0;t<this.size-1;t++)for(let n=0;n<this.size-1;n++){let r=this.modules[t][n];r===this.modules[t][n+1]&&r===this.modules[t+1][n]&&r===this.modules[t+1][n+1]&&(e+=Ra)}let t=0;for(let e of this.modules)t=e.reduce((e,t)=>e+ +!!t,t);let n=this.size*this.size,r=Math.ceil(Math.abs(t*20-n*10)/n)-1;return e+=r*Ba,e}getAlignmentPatternPositions(){if(this.version===1)return[];{let e=Math.floor(this.version/7)+2,t=this.version===32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}finderPenaltyCountPatterns(e){let t=e[1],n=t>0&&e[2]===t&&e[3]===t*3&&e[4]===t&&e[5]===t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]===0&&(e+=this.size),t.pop(),t.unshift(e)}};function Wa(e,t,n){if(t<0||t>31||e>>>t)throw RangeError(`Value out of range`);for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function X(e,t){return!!(e>>>t&1)}var Ga=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw RangeError(`Invalid argument`);this.bitData=n.slice()}getData(){return this.bitData.slice()}},Ka=[1,10,12,14],qa=[2,9,11,13],Ja=[4,8,16,16];function Ya(e,t){return e[Math.floor((t+7)/17)+1]}function Xa(e){let t=[];for(let n of e)Wa(n,8,t);return new Ga(Ja,e.length,t)}function Za(e){if(!eo(e))throw RangeError(`String contains non-numeric characters`);let t=[];for(let n=0;n<e.length;){let r=Math.min(e.length-n,3);Wa(Number.parseInt(e.substring(n,n+r),10),r*3+1,t),n+=r}return new Ga(Ka,e.length,t)}function Qa(e){if(!to(e))throw RangeError(`String contains unencodable characters in alphanumeric mode`);let t=[],n=0;for(;n+2<=e.length;n+=2){let r=Pa.indexOf(e.charAt(n))*45;r+=Pa.indexOf(e.charAt(n+1)),Wa(r,11,t)}return n<e.length&&Wa(Pa.indexOf(e.charAt(n)),6,t),new Ga(qa,e.length,t)}function $a(e){return e===``?[]:eo(e)?[Za(e)]:to(e)?[Qa(e)]:[Xa(ro(e))]}function eo(e){return Ma.test(e)}function to(e){return Na.test(e)}function no(e,t){let n=0;for(let r of e){let e=Ya(r.mode,t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}function ro(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)===`%`?(t.push(Number.parseInt(e.substring(n+1,n+3),16)),n+=2):t.push(e.charCodeAt(n));return t}function io(e){if(e<Fa||e>Ia)throw RangeError(`Version number out of range`);let t=(16*e+128)*e+64;if(e>=2){let n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return t}function ao(e,t){return Math.floor(io(e)/8)-Va[t[0]][e]*Ha[t[0]][e]}function oo(e){if(e<1||e>255)throw RangeError(`Degree out of range`);let t=[];for(let n=0;n<e-1;n++)t.push(0);t.push(1);let n=1;for(let r=0;r<e;r++){for(let e=0;e<t.length;e++)t[e]=co(t[e],n),e+1<t.length&&(t[e]^=t[e+1]);n=co(n,2)}return t}function so(e,t){let n=t.map(e=>0);for(let r of e){let e=r^n.shift();n.push(0),t.forEach((t,r)=>n[r]^=co(t,e))}return n}function co(e,t){if(e>>>8||t>>>8)throw RangeError(`Byte out of range`);let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return n}function lo(e,t,n=1,r=40,i=-1,a=!0){if(!(Fa<=n&&n<=r&&r<=Ia)||i<-1||i>7)throw RangeError(`Invalid value`);let o,s;for(o=n;;o++){let n=ao(o,t)*8,i=no(e,o);if(i<=n){s=i;break}if(o>=r)throw RangeError(`Data too long`)}for(let e of[Oa,ka,Aa])a&&s<=ao(o,e)*8&&(t=e);let c=[];for(let t of e){Wa(t.mode[0],4,c),Wa(t.numChars,Ya(t.mode,o),c);for(let e of t.getData())c.push(e)}let l=ao(o,t)*8;Wa(0,Math.min(4,l-c.length),c),Wa(0,(8-c.length%8)%8,c);for(let e=236;c.length<l;e^=253)Wa(e,8,c);let u=Array.from({length:Math.ceil(c.length/8)},()=>0);return c.forEach((e,t)=>u[t>>>3]|=e<<7-(t&7)),new Ua(o,t,u,i)}function uo(e,t){let{ecc:n=`L`,boostEcc:r=!1,minVersion:i=1,maxVersion:a=40,maskPattern:o=-1,border:s=1}=t||{},c=typeof e==`string`?$a(e):Array.isArray(e)?[Xa(e)]:void 0;if(!c)throw Error(`uqr only supports encoding string and binary data, but got: ${typeof e}`);let l=lo(c,ja[n],i,a,o,r),u=fo({version:l.version,maskPattern:l.mask,size:l.size,data:l.modules,types:l.types},s);return t?.invert&&(u.data=u.data.map(e=>e.map(e=>!e))),t?.onEncoded?.(u),u}function fo(e,t=1){if(!t)return e;let{size:n}=e,r=n+t*2;e.size=r,e.data.forEach(e=>{for(let n=0;n<t;n++)e.unshift(!1),e.push(!1)});for(let n=0;n<t;n++)e.data.unshift(Array.from({length:r},e=>!1)),e.data.push(Array.from({length:r},e=>!1));let i=Ea.Border;e.types.forEach(e=>{for(let n=0;n<t;n++)e.unshift(i),e.push(i)});for(let n=0;n<t;n++)e.types.unshift(Array.from({length:r},e=>i)),e.types.push(Array.from({length:r},e=>i));return e}function po(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function mo(e,t={}){let n=uo(e,t),{pixelSize:r=10,whiteColor:i=`white`,blackColor:a=`black`}=t,o=n.size*r,s=n.size*r,c=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${o}">`,l=[];for(let e=0;e<n.size;e++)for(let t=0;t<n.size;t++){let i=t*r,a=e*r;n.data[e][t]&&l.push(`M${i},${a}h${r}v${r}h-${r}z`)}return c+=`<rect fill="${po(i)}" width="${s}" height="${o}"/>`,c+=`<path fill="${po(a)}" d="${l.join(``)}"/>`,c+=`</svg>`,c}function ho({currentFolder:e}){let t=C(),[n,i]=(0,F.useState)(!1),[a,o]=(0,F.useState)(null),[s,c]=(0,F.useState)(!1),l=(0,F.useRef)(null);(0,F.useEffect)(()=>{if(!n)return;let e=()=>void Mt().then(o,()=>void 0);e();let t=window.setInterval(e,2500),r=e=>{l.current?.contains(e.target)||i(!1)},a=()=>i(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,a),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,a)}},[n]),(0,F.useEffect)(()=>{let e=()=>void Mt().then(o,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{o(await e())}finally{c(!1)}},d=a?.shares.some(t=>r(t.path,e))??!1;return(0,I.jsxs)(go,{ref:l,children:[(0,I.jsxs)(_o,{$active:n,onClick:()=>i(e=>!e),title:t(`share_folders`),type:`button`,children:[(0,I.jsx)(_n,{size:15}),a&&a.shares.length>0&&(0,I.jsx)(Ri,{children:a.shares.length>9?`9+`:a.shares.length})]}),n&&(0,I.jsxs)(vo,{children:[(0,I.jsxs)(yo,{children:[(0,I.jsxs)(bo,{children:[(0,I.jsx)(En,{size:12}),t(`share`)]}),(0,I.jsx)(xo,{onClick:()=>i(!1),title:t(`close`),type:`button`,children:(0,I.jsx)(M,{size:10})})]}),(0,I.jsxs)(So,{children:[(0,I.jsxs)(Co,{children:[(0,I.jsx)(wn,{size:15}),(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`strong`,{children:a?.deviceName||t(`this_device`)}),(0,I.jsx)(Oo,{children:a?.fingerprint??``})]})]}),a?.shares.length===0&&(0,I.jsx)(ko,{children:t(`no_folders_are_shared_yet`)}),a?.shares.map(e=>(0,I.jsxs)(Ao,{children:[(0,I.jsxs)(jo,{children:[(0,I.jsx)(Mo,{title:e.path,children:e.name}),(0,I.jsx)(Po,{disabled:s,onClick:()=>void u(()=>Wt(e.id)),title:t(`stop_sharing`),type:`button`,children:(0,I.jsx)(M,{size:10})})]}),(0,I.jsx)(No,{title:e.path,children:e.path}),(0,I.jsxs)(Fo,{children:[(0,I.jsxs)(Io,{$active:e.mode===`client`,onClick:()=>void u(()=>at(e.id,`client`)),title:t(`only_paired_devices_can_open_this_folder_in_the_app`),type:`button`,children:[(0,I.jsx)(wn,{size:11}),t(`app`)]}),(0,I.jsxs)(Io,{$active:e.mode===`web`,onClick:()=>void u(()=>at(e.id,`web`)),title:t(`any_device_with_a_browser_can_open_this_folder`),type:`button`,children:[(0,I.jsx)(en,{size:11}),t(`web`)]})]})]},e.id)),(0,I.jsxs)(Lo,{disabled:s||e.length===0||d,onClick:()=>void u(()=>At(e,`client`)),title:d?t(`this_folder_is_already_shared`):e,type:`button`,children:[(0,I.jsx)(un,{size:12}),t(`share_this_folder`)]}),a?.webRunning&&(0,I.jsxs)(Ro,{children:[(0,I.jsxs)(zo,{children:[(0,I.jsx)(en,{size:12}),t(`browser_access`)]}),(0,I.jsxs)(To,{children:[(0,I.jsx)(Eo,{children:a.urls.map(e=>(0,I.jsx)(Bo,{onClick:()=>void An(e),type:`button`,children:e},e))}),a.preferredUrl&&(0,I.jsx)(wo,{value:a.preferredUrl})]}),(0,I.jsx)(Oo,{children:t(`open_one_of_these_addresses_on_any_device_on_the_same_network`)})]})]})]})]})}var go=x.div`
    position: relative;
    display: flex;
`,_o=x.button`
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
`,vo=x.div`
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
`,yo=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,bo=x.span`
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
`,xo=x.button`
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
`,So=x.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,Co=x.div`
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
`;function wo({value:e}){let t=C(),n=(0,F.useMemo)(()=>mo(e,{ecc:`M`,border:2,pixelSize:4,blackColor:`#000000`,whiteColor:`#ffffff`}),[e]);return(0,I.jsx)(Do,{dangerouslySetInnerHTML:{__html:n},role:`img`,title:t(`scan_the_code_to_open_this_share_on_a_phone`)})}var To=x.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,Eo=x.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
`,Do=x.div`
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
`,Oo=x.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,ko=x.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,Ao=x.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,jo=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Mo=x.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,No=x.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Po=x.button`
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
`,Fo=x.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,Io=x.button`
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
`,Lo=x.button`
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
`,Ro=x.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,zo=x.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,Bo=x.button`
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
`;function Vo(){let e=C();return(0,I.jsx)(Ho,{title:e(`always_applies_to_every_folder`),children:e(`global`)})}var Ho=x.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`;function Uo({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=C(),[s,c]=(0,F.useState)(!1),l=(0,F.useRef)(null);(0,F.useEffect)(()=>{if(!s)return;let e=()=>c(!1),t=e=>{l.current?.contains(e.target)||c(!1)},n=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`keydown`,n)}},[s]),(0,F.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=zt.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,I.jsxs)(Wo,{ref:l,children:[(0,I.jsx)(Go,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`view`),type:`button`,children:e.mode===`grid`?(0,I.jsx)(nn,{size:14}):(0,I.jsx)(j,{size:14})}),s&&(0,I.jsxs)(Ko,{children:[(0,I.jsxs)(qo,{children:[(0,I.jsx)(on,{size:11}),o(`view`)]}),(0,I.jsxs)(Yo,{children:[(0,I.jsxs)(Xo,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,I.jsx)(j,{size:12}),` `,o(`list`)]}),(0,I.jsxs)(Xo,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,I.jsx)(nn,{size:12}),` `,o(`grid`)]})]}),(0,I.jsxs)(qo,{children:[(0,I.jsx)(j,{size:11}),o(`list_icon_size`)]}),(0,I.jsxs)(Zo,{children:[(0,I.jsx)(`input`,{"aria-label":o(`list_icon_size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,I.jsxs)(Qo,{children:[e.iconSize,`px`]})]}),(0,I.jsxs)(qo,{children:[(0,I.jsx)(nn,{size:11}),o(`grid_size`)]}),(0,I.jsxs)(Zo,{children:[(0,I.jsx)(`input`,{"aria-label":o(`grid_size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,I.jsxs)(Qo,{children:[e.gridSize,`px`]})]}),(0,I.jsxs)(qo,{children:[(0,I.jsx)(pn,{size:11}),o(`columns`),(0,I.jsx)(Vo,{}),(0,I.jsx)(Jo,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:o(`reset_column_widths`),type:`button`,children:o(`reset_widths`)})]}),zt.map(e=>(0,I.jsxs)($o,{children:[(0,I.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,I.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,I.jsxs)($o,{children:[(0,I.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,I.jsx)(`span`,{children:o(`link_target_after_the_name`)})]}),(0,I.jsxs)(qo,{children:[(0,I.jsx)(gn,{size:11}),o(`preview_panel`),(0,I.jsx)(Vo,{})]}),(0,I.jsxs)($o,{children:[(0,I.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,I.jsx)(`span`,{children:o(`preview_under_the_list`)})]})]})]})}var Wo=x.div`
    position: relative;
    display: flex;
    height: 100%;
`,Go=x.button`
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
`,Ko=x.div`
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
`,qo=x.div`
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
`,Jo=x.button`
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
`,Yo=x.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Xo=x.button`
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
`,Zo=x.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,Qo=x.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,$o=x.label`
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
`,es=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),ts=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),ns=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),rs=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,I.jsx)(`path`,{d:`M2 5h6`})}),is=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,I.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),as=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,I.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,I.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function os({tabs:e,activeId:t,closedTabs:n,onRestoreClosed:r,onSelect:i,onClose:a,onNewTab:o,onReorder:s,onTransferToTab:c,view:l,onViewChange:u,onColumns:d,showImages:f,onShowImages:p,tasks:m,onClearTasks:ee,activityOpen:h,onActivityOpenChange:g,trayCount:_,trayVisible:v,onToggleTray:te,split:ne,canSplit:re,onToggleSplit:b,details:x,canDetails:ie,onToggleDetails:S,shortcuts:ae,currentFolder:oe}){let w=C(),ce=y(),le=se(),[ue,de]=(0,F.useState)({left:!1,right:!1}),[fe,pe]=(0,F.useState)(null),[me,he]=(0,F.useState)(null),ge=(0,F.useRef)(null),_e=(0,F.useRef)(null),ve=(0,F.useRef)(null),ye=(0,F.useCallback)(()=>{let e=_e.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;de(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,F.useEffect)(()=>{ye();let e=_e.current;if(!e)return;let t=new ResizeObserver(ye);return t.observe(e),()=>t.disconnect()},[ye,e.length]),(0,F.useEffect)(()=>()=>{ge.current&&window.clearTimeout(ge.current.timer)},[]),(0,F.useEffect)(()=>{ve.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let be=e=>_e.current?.scrollBy({left:e,behavior:`smooth`}),xe=()=>{ge.current&&window.clearTimeout(ge.current.timer),ge.current=null,he(null)};return(0,I.jsxs)(us,{children:[(0,I.jsx)(ds,{children:(0,I.jsx)(wn,{size:19})}),(0,I.jsxs)(fs,{children:[ue.left&&(0,I.jsx)(ms,{onClick:()=>be(-180),title:w(`scroll_tabs_left`),type:`button`,children:(0,I.jsx)(es,{})}),(0,I.jsx)(ps,{onScroll:ye,onWheel:e=>{let t=_e.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:_e,children:e.map(e=>(0,I.jsxs)(hs,{$active:e.id===t,$dragging:fe===e.id,$dropTarget:me===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!mt(t.dataTransfer)||!ss(e)||(t.preventDefault(),ge.current?.id===e.id))return;xe(),he(e.id);let n=window.setTimeout(()=>{i(e.id),ge.current=null},500);ge.current={id:e.id,timer:n}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(ge.current?.id===e.id||me===e.id)&&xe()},onDragEnd:()=>{pe(null),xe()},onDragOver:t=>{(fe||mt(t.dataTransfer)&&ss(e))&&(t.preventDefault(),mt(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>pe(e.id),onDrop:t=>{if(t.preventDefault(),fe)s(fe,e.id);else if(ss(e)&&mt(t.dataTransfer)){let{paths:n,move:r}=jt(t);n.length>0&&(i(e.id),c(n,e.path,!t.ctrlKey&&r))}pe(null),xe()},onClick:()=>i(e.id),ref:e.id===t?ve:void 0,title:e.path||e.title,type:`button`,children:[(0,I.jsx)(cs,{tab:e}),(0,I.jsx)(gs,{children:e.title}),e.partner&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(_s,{children:`|`}),(0,I.jsx)(ls,{place:e.partner.place}),(0,I.jsx)(gs,{children:e.partner.title})]}),(0,I.jsx)(vs,{"data-shortcut":D(ae.closeTab),onClick:t=>{t.stopPropagation(),a(e.id)},title:w(`close_tab`),children:(0,I.jsx)(ns,{})})]},e.id))}),ue.right&&(0,I.jsx)(ms,{onClick:()=>be(180),title:w(`scroll_tabs_right`),type:`button`,children:(0,I.jsx)(ts,{})}),(0,I.jsx)(ys,{"data-shortcut":D(ae.newTab),onClick:o,title:w(`new_tab`),type:`button`,children:(0,I.jsx)(un,{size:13})})]}),(0,I.jsx)(bs,{...le}),(0,I.jsxs)(xs,{children:[(0,I.jsx)(Cs,{$active:ne,"data-shortcut":D(ae.splitView),disabled:!re,onClick:b,title:w(ne?`close_split_view`:`split_view`),type:`button`,children:(0,I.jsx)(pn,{size:15})}),(0,I.jsx)(Cs,{$active:x,disabled:!ie,onClick:S,title:w(x?`hide_details_panel`:`show_details_panel`),type:`button`,children:(0,I.jsx)(on,{size:15})}),(0,I.jsxs)(Ss,{$active:v,onClick:te,title:w(v?`hide_file_tray`:`show_file_tray`),type:`button`,children:[(0,I.jsx)(sn,{size:14}),_>0&&(0,I.jsx)(Ri,{children:_>9?`9+`:_})]}),(0,I.jsx)(Ti,{onRestore:r,tabs:n}),(0,I.jsx)(ca,{}),(0,I.jsx)(ho,{currentFolder:oe}),(0,I.jsx)(zi,{tasks:m,onClear:ee,open:h,onOpenChange:g}),(0,I.jsx)(Uo,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:u,onColumns:d,onShowImages:p,showImages:f,view:l}),(0,I.jsx)(ws,{onClick:ce.minimize,title:w(`minimize`),type:`button`,children:(0,I.jsx)(rs,{})}),(0,I.jsx)(ws,{onClick:ce.toggleMaximize,title:ce.maximized?w(`restore`):w(`maximize`),type:`button`,children:ce.maximized?(0,I.jsx)(as,{}):(0,I.jsx)(is,{})}),(0,I.jsx)(Ts,{onClick:ce.close,title:w(`close`),type:`button`,children:(0,I.jsx)(ns,{})})]})]})}function ss(e){return e.kind===`files`&&(!v(e.path)||a(e.path))}function cs({tab:e}){switch(e.kind){case`home`:return(0,I.jsx)(Xt,{size:13});case`settings`:return(0,I.jsx)(Qt,{size:13});case`recycle`:return(0,I.jsx)(On,{size:13});default:return e.archive?(0,I.jsx)(bn,{size:13}):(0,I.jsx)(ls,{place:e.place})}}function ls({place:e}){return e?(0,I.jsx)(pt,{place:e,size:13}):(0,I.jsx)(rn,{size:13})}var us=x.header`
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
`,ds=x.span`
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
`,fs=x.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,ps=x.div`
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
`,ms=x.button`
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
`,hs=x.button`
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
`,gs=x.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,_s=x.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,vs=x.span`
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
`,ys=x.button`
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
`,bs=x.div`
    flex: 1;
    min-width: 28px;
`,xs=x.div`
    display: flex;
    flex-shrink: 0;
`,Ss=x.button`
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
`,Cs=x.button`
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
`,ws=x.button`
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
`,Ts=x(ws)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function Es(){let[e,t]=(0,F.useState)(null),n=(0,F.useRef)(null),r=(0,F.useRef)(void 0);return(0,F.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`blur`,i),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`blur`,i),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,mr.createPortal)((0,I.jsx)(Ds,{tooltip:e}),document.body):null}function Ds({tooltip:e}){let t=(0,F.useRef)(null),[n,r]=(0,F.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,F.useState)(()=>e.bottom+6);return(0,F.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,I.jsxs)(Os,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,I.jsx)(ks,{children:e.text}),e.shortcut&&(0,I.jsx)(As,{children:e.shortcut})]})}var Os=x.div`
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
`,ks=x.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,As=x.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,js=[{id:`ui`,label:`interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`interface`},{id:`names`,label:`file_names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`interface`},{id:`details`,label:`details_panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`interface`},{id:`path`,label:`address_bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`monospace`},{id:`mono`,label:`monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`text_preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`monospace`}];function Ms(e){return`"${e.replaceAll(`"`,``)}"`}function Ns(e){let t=document.documentElement.style;for(let n of js){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${Ms(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function Ps(){return b.available?(await b.request(`app.fonts`)).fonts??[]:[]}function Fs({deviceName:e,code:t,onAccept:n,onReject:r}){let i=C(),a=(0,F.useRef)(null);return(0,F.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,mr.createPortal)((0,I.jsx)(Is,{children:(0,I.jsxs)(Ls,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsxs)(Rs,{children:[(0,I.jsx)(_n,{size:15}),i(`pair_for_sharing`)]}),(0,I.jsx)(zs,{children:i(`device_wants_to_pair_with_this_device_for_sharing_folders`,{device:e})}),(0,I.jsx)(Bs,{children:t}),(0,I.jsx)(Vs,{children:i(`check_that_the_other_device_shows_the_same_code_before_accepting`)}),(0,I.jsxs)(Hs,{children:[(0,I.jsx)(Us,{onClick:r,type:`button`,children:i(`reject`)}),(0,I.jsx)(Ws,{onClick:n,ref:a,type:`button`,children:i(`accept`)})]})]})}),document.body)}var Is=x.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${He}
`,Ls=x.div`
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
`,Rs=x.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,zs=x.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,Bs=x.div`
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
`,Vs=x.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Hs=x.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,Us=x.button`
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
`,Ws=x(Us)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,Gs=x.button`
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
`,Ks=x.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,qs=`modulepreload`,Js=function(e){return`/`+e},Ys={},Xs=function(e){return e.pathname.endsWith(`.css`)},Zs=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Qs=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Js(t,n);let r=s(t),i=Xs(r);return Zs(Ys,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:qs,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},$s=(0,F.lazy)(()=>Qs(()=>import(`./OverviewView-Dp5pWrPq.js`).then(e=>e.n).then(e=>({default:e.OverviewView})),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),ec=(0,F.lazy)(()=>Qs(()=>import(`./SettingsView-Ct9Fvq6t.js`).then(e=>({default:e.SettingsView})),__vite__mapDeps([11,1,2,4,5,3,6,7,9,8,10]))),tc=(0,F.lazy)(()=>Qs(()=>import(`./GalleryView-BzeyGUln.js`).then(e=>e.n).then(e=>({default:e.GalleryView})),__vite__mapDeps([12,1,2,4,5,3,6,9]))),nc=(0,F.lazy)(()=>Qs(()=>import(`./RecycleView-g25_1Ozz.js`).then(e=>({default:e.RecycleView})),__vite__mapDeps([13,1,2,4,5,3,6,8]))),rc=0,ic=new Set;function ac(e){ic.add(e),b.send({type:`app.navigate.done`,payload:{path:e}})}var oc=20,sc=[{value:`0`,label:`auto`},{value:`932`,label:`japanese_cp932`},{value:`936`,label:`simplified_chinese_cp936`},{value:`950`,label:`traditional_chinese_cp950`},{value:`949`,label:`korean_cp949`},{value:`1252`,label:`western_cp1252`},{value:`1250`,label:`central_european_cp1250`},{value:`1251`,label:`cyrillic_cp1251`},{value:`1254`,label:`turkish_cp1254`},{value:`1253`,label:`greek_cp1253`},{value:`1256`,label:`arabic_cp1256`},{value:`1255`,label:`hebrew_cp1255`},{value:`1257`,label:`baltic_cp1257`},{value:`874`,label:`thai_cp874`},{value:`65001`,label:`utf_8`}];function cc(e){return e.history[e.index]??tr(`home`)}function Z(e){return nr(cc(e))??`files`}function Q(e){let t=cc(e);return nr(t)?``:e.listing?.path||t}function lc(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||Z(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function uc(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function dc(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||Re.iconSize,gridSize:e.view?.gridSize||t.gridSize||Re.gridSize,sort:e.view?.sort??Re.sort,sortDescending:e.view?.sortDescending??Re.sortDescending,columns:t.columns??w.columns??[]}}function fc(e=tr(`home`)){return rc+=1,{id:`tab-${rc}`,listing:null,loading:!nr(e),error:null,history:[e],index:0,fresh:!0,view:null}}function pc(e){return e instanceof Error?e.message:String(e)}function mc(e){let t=O(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return st(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function hc(e){let t=u(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function gc(e){return v(e)?Pe(e):void 0}function _c(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return o(e,t.entries.length,`k_1_item_size`,`count_items_size`,{size:m(n)})}function vc(){let e=C(),[n,i]=(0,F.useState)(()=>[fc()]),[d,f]=(0,F.useState)(()=>n[0].id),[m,ee]=(0,F.useState)(null),[_,te]=(0,F.useState)(()=>{let e=Ye(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[y,ne]=(0,F.useState)([]),[re,x]=(0,F.useState)([]),[S,se]=(0,F.useState)(null),[be,ke]=(0,F.useState)(null),[je,Me]=(0,F.useState)(null),Ne=ae(),[T,Fe]=(0,F.useState)(ye),[Le,ze]=(0,F.useState)(0),[He,Ue]=(0,F.useState)(0),[Ke,qe]=(0,F.useState)(0),[Xe,Qe]=(0,F.useState)(ye),[et,rt]=(0,F.useState)(0),[at,st]=(0,F.useState)(0),[ct,pt]=(0,F.useState)(0),[St,Ct]=(0,F.useState)(0),O=(0,F.useRef)(St);O.current=St;let[At,jt]=(0,F.useState)([]),[Mt,Ft]=(0,F.useState)(10),[A,zt]=(0,F.useState)(null),Wt=oe(s(A?.themeMode)),Yt=(0,F.useMemo)(()=>(A?.favorites??[]).map(e=>t(e.path)),[A?.favorites]),[Xt,Zt]=(0,F.useState)(0),[j,nn]=(0,F.useState)(ut),[rn,an]=(0,F.useState)(0),[on,sn]=(0,F.useState)(0),[fn,pn]=(0,F.useState)(0),[mn,gn]=(0,F.useState)(!0),[_n,vn]=(0,F.useState)(()=>{let e=Ye(`yafm.preview.width`,320);return e>=220?e:320}),[yn,xn]=(0,F.useState)(null),[wn,Tn]=(0,F.useState)(null),[En,Dn]=(0,F.useState)({kind:null,info:null}),[M,An]=(0,F.useState)(`primary`),[jn,Mn]=(0,F.useState)(null),[Pn,Fn]=(0,F.useState)(null),[N,In]=(0,F.useState)(null),[P,Ln]=(0,F.useState)(null),[Rn,zn]=(0,F.useState)(null),[Bn,Vn]=(0,F.useState)({primary:0,secondary:0}),[Hn,Un]=(0,F.useState)({primary:null,secondary:null}),[Wn,Gn]=(0,F.useState)(null),[Kn,qn]=(0,F.useState)([]),[Jn,Qn]=(0,F.useState)(!1),[$n,er]=(0,F.useState)(null),[or,sr]=(0,F.useState)(``),cr=(0,F.useRef)([]),ur=(0,F.useRef)([]),[dr,fr]=(0,F.useState)([]),[pr,mr]=(0,F.useState)([]),[gr,_r]=(0,F.useState)(!1),vr=(0,F.useMemo)(()=>gr?new Set(pr.map(e=>e.path)):new Set,[pr,gr]),[yr,br]=(0,F.useState)(!1),[xr,Sr]=(0,F.useState)([]),[Cr,wr]=(0,F.useState)(null),Tr=(0,F.useRef)(0),[Er,Dr]=(0,F.useState)(()=>{let e=De(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?uc({x:e.x,y:e.y}):uc({x:Math.max(20,window.innerWidth-340),y:110})}),Or=(0,F.useCallback)(()=>{Dr(e=>uc(e)),br(!0)},[]),L=n.find(e=>e.id===d)??n[0],R=Z(L),kr=cc(L),z=Q(L),jr=R===`files`?L.listing?.parent??mc(z):null,B=L.splitWith?n.find(e=>e.id===L.splitWith):void 0,Mr=R===`files`&&B!==void 0,Nr=B?Q(B):``,Pr=B?B.listing?.parent??mc(Nr):null,V=Mr&&B&&M===`secondary`?B:L,Lr=A?.defaultView??w,Rr=dc(V,Lr);(0,F.useEffect)(()=>{h(A?.accentColor,A?.secondaryColor,Wt)},[A?.accentColor,A?.secondaryColor,Wt]),(0,F.useEffect)(()=>{Ns(A?.fonts)},[A?.fonts]),(0,F.useEffect)(()=>{p(A?.timeFormat,A?.timeFormatPattern),l(A?.relativeTime,A?.relativeTimeWindowMinutes)},[A?.timeFormat,A?.timeFormatPattern,A?.relativeTime,A?.relativeTimeWindowMinutes]),(0,F.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!A?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[A?.backgroundSource]),(0,F.useEffect)(()=>(Oe(e=>new Promise(t=>{wr({id:++Tr.current,prompt:e,resolve:t})})),()=>Oe(null)),[]),(0,F.useEffect)(()=>{An(`primary`)},[d]),(0,F.useEffect)(()=>{Qe(ye),st(0),pt(0)},[R]),(0,F.useEffect)(()=>{st(0)},[Xe.query,Xe.matchCase,Xe.regex]),(0,F.useEffect)(()=>{st(e=>ct===0?0:Math.min(e,ct-1))},[ct]);let H=Rr.columns.includes(`linkCount`),zr=(0,F.useMemo)(()=>{let e={},n=ft(A),r={};for(let[e,n]of Object.entries(A?.placeNames??{}))r[t(e)]=n;for(let n of y)e[t(n.path)]=n;for(let i of n)if(i.kind===`quick`&&i.id!==`quick`)for(let n of i.places??[]){let i=t(n),a=y.find(e=>t(e.path)===i);e[i]={name:r[i]??a?.name??(u(n)||n),path:n,kind:`folder`,icon:a?.icon??A?.placeIcons?.[n]??null}}return e},[y,A]),Br=(0,F.useMemo)(()=>({places:zr,useIcons:A?.systemIcons===!1}),[zr,A?.systemIcons]),Vr=A?.defaultView?.showImages??!0,Hr=A?.defaultView?.imageStripHeight??w.imageStripHeight,Ur=R===`home`?(0,I.jsx)(cn,{size:13}):R===`settings`?(0,I.jsx)(Qt,{size:13}):R===`recycle`?(0,I.jsx)(On,{size:13}):R===`gallery`?(0,I.jsx)($t,{size:13}):void 0,Wr=T.open&&T.query.length>0,Kr=(0,F.useDeferredValue)(T),qr=(0,F.useMemo)(()=>Wr&&V.listing?V.listing.entries.filter(e=>ue(e.isDirectory?lt(Br,e.fullPath,e.name):e.name,Kr)).map(e=>e.fullPath):[],[Wr,Kr,V.listing,Br]);(0,F.useEffect)(()=>{ze(0)},[T.query,T.matchCase,T.regex,V.listing?.path]);let Jr=qr.length===0?-1:Math.min(Le,qr.length-1),U=(0,F.useCallback)(()=>{Fe(e=>({...e,open:!1,query:``})),ze(0)},[]),Yr=(0,F.useCallback)(()=>{Fe(e=>({...e,open:!0})),Ue(e=>e+1)},[]),Xr=(0,F.useCallback)(()=>{Qe(e=>({...e,open:!0})),rt(e=>e+1)},[]),Qr=(0,F.useCallback)(()=>{Qe(ye),st(0),pt(0)},[]),$r=(0,F.useCallback)(e=>{st(t=>ct===0?0:(Math.min(t,ct-1)+e+ct)%ct)},[ct]),ei=(0,F.useCallback)(e=>{Fe(t=>({...t,open:!0,query:t.open?t.query+e:e})),Ue(e=>e+1)},[]),ti=(0,F.useCallback)(e=>{ze(t=>qr.length===0?0:(Math.min(t,qr.length-1)+e+qr.length)%qr.length)},[qr.length]),W=(0,F.useRef)({tabs:n,activeId:d,activePane:M});W.current={tabs:n,activeId:d,activePane:M};let ni=(0,F.useRef)(A);ni.current=A;let ri=(0,F.useRef)(!1),ii=(0,F.useRef)([]),G=(0,F.useCallback)((e,t)=>{i(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),ai=(0,F.useRef)(new Map),oi=(0,F.useCallback)(e=>{let t=(ai.current.get(e)??0)+1;return ai.current.set(e,t),()=>ai.current.get(e)===t},[]),si=(0,F.useCallback)((e,t)=>{b.available&&t&&e===lc(W.current)&&b.send({type:`fs.focus`,payload:{path:t}})},[]),ci=(0,F.useCallback)(async(e,t,n)=>{if(!(t&&Tt(t)))try{let r=(await Ze(t,H)).listing;if(!n()||!r)return;G(e,e=>e.loading?{listing:{...r,total:r.entries.length,signature:0},view:r.view??null}:{})}catch{}},[H,G]),K=(0,F.useCallback)(async(e,t,n=!1)=>{let i=oi(e);U(),si(e,t);let a=!n||!W.current.tabs.find(t=>t.id===e)?.listing,o=!n&&t!==void 0;G(e,e=>{if(!o)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let i=e.history[e.index],a=i!==void 0&&r(i,t);return{listing:null,loading:!0,error:null,fresh:!1,history:a?e.history:[...e.history.slice(0,e.index+1),t],index:a?e.index:e.index+1}});try{a&&ci(e,t,i);let r=t&&Tt(t)?await Lt(t):await _e(t,!0,H,O.current,t?gc(t):void 0,e);if(!i())return;G(e,e=>({listing:r,view:r.view??null,loading:!1,fresh:!1,history:o?e.history.map((t,n)=>n===e.index?r.path:t):e.history,index:e.index})),!n&&!Tt(r.path)&&Se(r.path).then(()=>Zt(e=>e+1))}catch(r){if(!i())return;let a=W.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?Q(a):``,s=mc(o),c=pc(r);if(o&&we(c)){let r=g(o),a=await Be(r,!!Pe(r));if(a){Je(r,a),i()&&K(e,t,n);return}}G(e,e=>({listing:{path:o,parent:s,total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[oi,H,G,si,U,ci]),li=(0,F.useRef)(new Set),di=(0,F.useCallback)(async e=>{let t=W.current.tabs.find(t=>t.id===e),n=t?.listing;if(!t||Z(t)!==`files`||!n)return;let i=n.entries.length;if(i<=0||i>=(n.total??0)||fi.current.has(e))return;let a=`${e}|${n.path}|${i}`;if(li.current.add(a))try{let t=await xe(n.path,i,n.view?.sort??`name`,n.view?.sortDescending??!1);G(e,e=>{let a=e.listing;return!a||!r(a.path,n.path)||a.entries.length!==i||a.view?.sort!==n.view?.sort?{}:{listing:{...a,entries:[...a.entries,...t.entries],total:t.total}}})}catch{}finally{li.current.delete(a)}},[G]),fi=(0,F.useRef)(new Set),pi=(0,F.useCallback)(async e=>{let t=W.current.tabs.find(t=>t.id===e),n=t?.listing;if(t&&Z(t)===`files`&&n&&!(n.entries.length>=(n.total??0))&&fi.current.add(e))try{let t=[],i=n.entries.length,a=n.total??0;for(;i<a;){let e=await xe(n.path,i,n.view?.sort??`name`,n.view?.sortDescending??!1);if(e.entries.length===0)break;t.push(e.entries),i+=e.entries.length,a=e.total}if(t.length===0)return;G(e,e=>{let i=e.listing;return!i||!r(i.path,n.path)||i.entries.length!==n.entries.length?{}:{listing:{...i,entries:[...i.entries,...t.flat()],total:a}}})}catch{}finally{fi.current.delete(e)}},[G]),[mi,hi]=(0,F.useState)(0),gi=(0,F.useCallback)(async e=>{let t=W.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0;await pi(e),(W.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0)>t&&hi(e=>e+1)},[pi]),_i=V.id,vi=Z(V),yi=V.listing?.entries.length??0,bi=V.listing?.total??0;(0,F.useEffect)(()=>{T.open&&T.query.length!==0&&(vi!==`files`||yi>=bi||pi(_i))},[T.open,T.query,_i,vi,yi,bi,pi]);let xi=(0,F.useCallback)((e,t)=>{let n=rr(t);n&&(nr(n)?(U(),oi(e),G(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):K(e,n))},[oi,K,G,U]),q=(0,F.useCallback)(async(e,t,n)=>{if(U(),nr(t)){oi(e),G(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=oi(e);si(e,t),G(e,()=>({index:n,listing:null,loading:!0,error:null}));try{Tt(t)||ci(e,t,r);let n=Tt(t)?await Lt(t):await _e(t,!0,H,O.current,gc(t),e);if(!r())return;G(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;let a=pc(i);if(we(a)){let i=g(t),a=await Be(i,!!Pe(i));if(a){Je(i,a),r()&&q(e,t,n);return}}G(e,()=>({listing:{path:t,parent:mc(t),total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:pc(i)}))}},[oi,H,G,si,U,ci]),J=(0,F.useCallback)((e,t=!0)=>{let n=fc(e??tr(`home`));return i(e=>[...e,n]),t&&f(n.id),e&&!nr(e)&&K(n.id,e),n.id},[K]),Y=(0,F.useCallback)(e=>{for(let t of W.current.tabs)Z(t)===`files`&&r(Q(t),e)&&K(t.id,e,!0)},[K]),Si=(0,F.useCallback)((e,t)=>{let n=u(t);for(let i of W.current.tabs)i.listing?.entries.some(t=>r(t.fullPath,e))&&G(i.id,i=>{let a=i.listing;if(!a)return{};let o=a.entries.map(i=>r(i.fullPath,e)?{...i,name:n,fullPath:t}:i);return{listing:{...a,entries:o}}})},[G]),Ci=(0,F.useRef)([]);(0,F.useEffect)(()=>{let e=new Set;for(let r of n){let n=r.listing?.path??r.history[r.index]??``;n&&v(n)&&e.add(t(g(n)))}let r=Ci.current.filter(t=>!e.has(t));Ci.current=[...e],r.length>0&&ge(r)},[n]);let wi=(0,F.useCallback)((e,t=!1)=>{t?J(tr(e)):xi(W.current.activeId,tr(e))},[J,xi]),Ti=(0,F.useCallback)(e=>{let{tabs:t,activeId:n}=W.current,r=t.find(t=>t.id===e),a=t.filter(t=>t.id!==e&&t.id!==r?.splitWith);if(r&&!r.hidden&&(ur.current.push(cc(r)),ur.current.length>oc&&ur.current.shift(),fr([...ur.current])),a.length===0){let e=fc();i([e]),f(e.id);return}let o=t.findIndex(t=>t.id===e);i(a),n===e&&f(a[Math.min(o,a.length-1)].id)},[]),Ei=(0,F.useCallback)(()=>{let e=ur.current.pop();if(!e)return;fr([...ur.current]);let t={...fc(e),fresh:!1};i(e=>[...e,t]),f(t.id),Z(t)===`files`&&K(t.id,Q(t))},[K]),Di=(0,F.useCallback)(e=>{let t=ur.current,n=t[e];if(!n)return;t.splice(e,1),fr([...t]);let r={...fc(n),fresh:!1};i(e=>[...e,r]),f(r.id),Z(r)===`files`&&K(r.id,Q(r))},[K]),Oi=(0,F.useCallback)((e,t=!1)=>{t?J(e):xi(lc(W.current),e??tr(`home`))},[xi,J]),ki=(0,F.useCallback)(e=>{let{tabs:t,activeId:n}=W.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;f(r[i].id)},[]),Ai=(0,F.useCallback)(()=>{let{tabs:e,activeId:t}=W.current,n=e.find(e=>e.id===t);if(!n||Z(n)!==`files`)return;let r=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(r){i(e=>e.filter(e=>e.id!==r.id)),G(t,()=>({splitWith:void 0})),An(`primary`);return}let a=Q(n),o={...fc(a),hidden:!0};i(e=>[...e,o]),G(t,()=>({splitWith:o.id})),K(o.id,a),An(`primary`)},[K,G]),ji=(0,F.useCallback)(e=>{vn(e),le(`yafm.preview.width`,e)},[]),Mi=(0,F.useCallback)((e,t,n)=>Dn(r=>r.kind===e&&r.info?.path===t?.path&&r.info?.modified===t?.modified&&r.info?.name===t?.name&&r.note===n?r:{kind:e,info:t,note:n}),[]),Ni=(0,F.useCallback)((e,t)=>Mi(`gallery`,e,t),[Mi]),Pi=(0,F.useCallback)((e,t)=>Mi(`recycle`,e,t),[Mi]),Fi=Mr?M===`secondary`?wn??yn:yn??wn:yn,Ii=Mr&&M===`secondary`?Bn.secondary:Bn.primary,Li=R===`files`?Fi:En.kind===R?En.info:null,Ri=R===`files`?Ii>1?o(e,Ii,`k_1_item_selected`,`count_items_selected`):void 0:En.kind===R?En.note:void 0,zi=(0,F.useMemo)(()=>R===`files`&&L.listing?_c(e,L.listing):or,[R,L.listing,e,or]),Bi=(0,F.useRef)(null),Vi=e=>{e.preventDefault();let t=Bi.current?.getBoundingClientRect();if(!t)return;let n=Math.max(t.width-7,1),r=e=>{let r=Math.min(Math.max((e.clientX-t.left)/n,.2),.8);te(r),le(`yafm.split.ratio`,r)},i=()=>{window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,i)};window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,i)},Hi=(e,t,n)=>{t&&Mn({x:e.clientX,y:e.clientY,directory:t,refresh:n})},Ui=(0,F.useCallback)((e,t)=>{Vn(n=>n[e]===t?n:{...n,[e]:t})},[]),Wi=(0,F.useCallback)(e=>Ui(`primary`,e),[Ui]),Gi=(0,F.useCallback)(e=>Ui(`secondary`,e),[Ui]),Ki=(e,t)=>{Bn[e]!==0&&Un(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},qi=async(e,t=!1)=>{let n=jn;if(Mn(null),!n)return;let r=e===null?await Rt(n.directory,t):await Dt(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;U(),Gn(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},Ji=(0,F.useCallback)(()=>{let{tabs:e}=W.current,t=e.find(e=>e.id===lc(W.current));t&&t.index>0&&q(t.id,t.history[t.index-1],t.index-1)},[q]),Yi=(0,F.useCallback)(()=>{let{tabs:e}=W.current,t=e.find(e=>e.id===lc(W.current));t&&t.index<t.history.length-1&&q(t.id,t.history[t.index+1],t.index+1)},[q]),Xi=(0,F.useCallback)(()=>{let{tabs:e}=W.current,t=e.find(e=>e.id===lc(W.current));t&&Z(t)===`files`&&t.listing?.parent&&Oi(t.listing.parent)},[Oi]),Zi=(0,F.useRef)(null),Qi=(0,F.useCallback)(()=>{for(let e of W.current.tabs)e.listing&&K(e.id,e.listing.path,!0)},[K]),$i=(0,F.useCallback)(e=>{e.length!==0&&(Sr(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),Or())},[Or]),ea=(0,F.useCallback)(async e=>{let t=await Et(e);t.length!==0&&$i(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[$i]),ta=(0,F.useCallback)(e=>{let t=new Set(e);Sr(e=>e.filter(e=>!t.has(e.path)))},[]),na=(0,F.useCallback)(async e=>{let n=ni.current;if(!n)return;let r=await Et(e);if(r.length===0)return;let i=new Set((n.favorites??[]).map(e=>t(e.path))),a=r.filter(e=>!i.has(t(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(a.length===0)return;let o={...n,favorites:[...n.favorites??[],...a]};zt(o),await tt(o),an(e=>e+1)},[]),ra=(0,F.useCallback)(async e=>{let n=ni.current;if(!n)return;let r=new Set(e.map(t)),i=(n.favorites??[]).filter(e=>!r.has(t(e.path)));if(i.length===(n.favorites??[]).length)return;let a={...n,favorites:i};zt(a),await tt(a),an(e=>e+1)},[]),ia=(0,F.useCallback)(()=>Sr([]),[]),aa=(0,F.useRef)(-1),oa=(0,F.useCallback)(e=>{mr(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),_r(e.move),e.entries.length>0&&Or()},[Or]),sa=(0,F.useCallback)(async()=>{if(b.available)try{let e=await Ut();aa.current=e.sequence,oa(e)}catch{}},[oa]),ca=(0,F.useCallback)(async e=>{e.length!==0&&await wt(e,!1)&&await sa()},[sa]),la=(0,F.useRef)(xr);la.current=xr;let ua=(0,F.useRef)(yr);ua.current=yr;let da=(0,F.useRef)(!1);(0,F.useEffect)(()=>{let e=A?.trayAutoShow??!0,t=t=>{e&&mt(t)&&(ua.current||(da.current=!0),Or())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{da.current&&window.setTimeout(()=>{da.current&&la.current.length===0&&br(!1),da.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[Or,A?.trayAutoShow]),(0,F.useEffect)(()=>{let e=()=>Dr(e=>uc(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let fa=(0,F.useCallback)(async()=>{let e=la.current;if(e.length>0){let t=await Et(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));Sr(e=>e.filter(e=>n.has(e.path)))}await sa()},[sa]),pa=(0,F.useCallback)(()=>{fa(),pn(e=>e+1),Qi()},[fa,Qi]),ma=(0,F.useCallback)(e=>{let t=uc(e);Dr(t),ve(`yafm.tray.position`,t)},[]),ha=(0,F.useCallback)(()=>{da.current=!1,yr?br(!1):Or()},[Or,yr]),ga=(0,F.useCallback)(async(t,n,r)=>{let i=await Gt(t,n,r);i.cancelled||(i.ok?(r&&ta(t),pn(e=>e+1),Qi(),sa()):Ce(i.error??e(`the_files_could_not_be_transferred`)))},[Qi,sa,ta]);(0,F.useEffect)(()=>{if(b.available)return Yn().then(e=>{cr.current=e,qn(e)},()=>void 0),b.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=cr.current.find(t=>t.id===e.id);return!t||t.state!==e.state});cr.current=n,qn(n),r&&Qn(!0)})},[]);let _a=(0,F.useCallback)(()=>{Xn().then(()=>Yn().then(e=>{cr.current=e,qn(e)},()=>void 0))},[]);(0,F.useEffect)(()=>{if(!b.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await Ut();if(!e||t.sequence===aa.current)return;aa.current=t.sequence,oa(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[oa]);let va=(0,F.useCallback)(async e=>{let t=e?await qt():await Ot();t.ok?(pn(e=>e+1),Qi()):t.error&&!t.error.startsWith(`Nothing to`)&&Ce(t.error)},[Qi]),ya=(0,F.useRef)(H);(0,F.useEffect)(()=>{ya.current!==H&&(ya.current=H,Qi())},[H,Qi]);let ba=(0,F.useCallback)((e,t)=>{let{tabs:n}=W.current,r=n.find(t=>t.id===e);if(!r||Z(r)!==`files`)return;let i=Q(r),a=ni.current?.defaultView??w,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||Re.iconSize,gridSize:r.view?.gridSize||a.gridSize||Re.gridSize,sort:r.view?.sort??Re.sort,sortDescending:r.view?.sortDescending??Re.sortDescending,...t};G(e,()=>({view:o})),Zi.current!==null&&window.clearTimeout(Zi.current),Zi.current=window.setTimeout(()=>{Zi.current=null,Ge(i,o)},250)},[G]),xa=(0,F.useCallback)(e=>{ba(lc(W.current),e)},[ba]),Sa=(0,F.useCallback)(e=>{let t=ni.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??w,columns:e}};zt(n),tt(n)},[]),Ca=(0,F.useCallback)(e=>{let t=ni.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??w,showImages:e}};zt(n),tt(n)},[]),wa=(0,F.useCallback)(e=>{let t=ni.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??w,imageStripHeight:e}};zt(n),tt(n)},[]),Ta=(0,F.useCallback)((e,t,n,r)=>{let i=W.current.tabs.find(t=>t.id===e);if(!i||Z(i)!==`files`||!i.listing)return;let a=Q(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));G(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Ve(a,t,n,r)},[G]),Ea=(0,F.useCallback)((e,t)=>{let n=W.current.tabs.find(t=>t.id===e);if(!n)return;let r=dc(n,ni.current?.defaultView??w);ba(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending}),K(e,Q(n),!0)},[ba,K]),Da=(0,F.useCallback)((e,t)=>{i(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),Oa=(0,F.useCallback)(()=>{fe().then(ne,()=>ne([]))},[]),ka=(0,F.useCallback)(e=>{let t=(e.openTabs??[]).map(rr).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...fc(e),fresh:!1})),r=Math.min(Math.max(e.activeTab??0,0),n.length-1);i(n),f(n[r].id);let a=n[r];return(Z(a)===`files`?K(a.id,Q(a),!0):Promise.resolve()).then(()=>{for(let e of n)e!==a&&Z(e)===`files`&&K(e.id,Q(e),!0)}),!0},[K]),Aa=(0,F.useCallback)(e=>{let t=ii.current;if(ii.current=[],t.length===0)return;let n=t.filter(e=>!ic.has(e));for(let e of t)n.includes(e)||ac(e);if(n.length===0)return;let{tabs:r}=W.current;if(!e&&r.length===1&&r[0].fresh){xi(r[0].id,n[0]),ac(n[0]);for(let e of n.slice(1))J(e),ac(e);return}let i=n.map(e=>{let t=J(e);return ac(e),t}).at(-1);i&&setTimeout(()=>f(i),0)},[J,xi]),ja=(0,F.useCallback)(()=>{$e().then(e=>{zt(e),Ft(e.recentLimit);let t=Ht(e.shortcuts);nn(t),It(xt(t,`openInNewTab`)),an(e=>e+1),ri.current||(ri.current=!0,Aa(e.restoreTabs&&ka(e)))},()=>{Ft(10),ri.current=!0,Aa(!1)})},[Aa,ka]),Ma=(0,F.useCallback)(()=>{he().then(jt,()=>jt([]))},[]),Na=(0,F.useCallback)(()=>{ce().then(x,()=>x([]))},[]),Pa=n.filter(e=>!e.hidden),Fa=Pa.map(cc),Ia=Fa.join(`
`),La=Math.max(Pa.findIndex(e=>e.id===d),0);(0,F.useEffect)(()=>{if(!A?.restoreTabs)return;let e=setTimeout(()=>void nt(Fa,La),700);return()=>clearTimeout(e)},[Ia,La,A?.restoreTabs]),(0,F.useEffect)(()=>{let{tabs:e,activeId:t}=W.current,n=e.find(e=>e.id===t);n&&n.fresh&&Z(n)===`files`&&K(n.id,Q(n),!0),Oa(),ja(),Na(),kn().then(se,()=>se(null))},[K,Oa,ja,Na]),(0,F.useEffect)(()=>{if(Nn().then(ke,()=>ke(null)),b.available)return b.on(e=>{let t=e;t.type===`update.checked`&&t.data&&ke(t.data)})},[]),(0,F.useEffect)(()=>{if(b.available)return b.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&ee({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&Ce(e(`pairing_code_code`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&Ce(n.data.error??e(`pairing_failed`))}})},[e]),(0,F.useEffect)(()=>{let e=setInterval(Na,3e4);return()=>clearInterval(e)},[Na]),(0,F.useEffect)(()=>{R===`home`&&(Ma(),Na())},[R,L.id,Ma,Na]),(0,F.useEffect)(()=>{if(!b.available)return;let e=b.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=W.current,i=t.data.startup===!0;i&&ic.has(n)?ac(n):i&&!ri.current?ii.current.includes(n)||ii.current.push(n):(i&&r.length===1&&r[0].fresh?xi(r[0].id,n):nr(n)?xi(lc(W.current),n):J(n),i&&ac(n))});return b.send({type:`app.ready`}),e},[xi,J]),(0,F.useEffect)(()=>{if(b.available)return b.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:r}=t.data;i(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let i=e.slice(),a=e[t];return i[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...r}}},i})})},[]),(0,F.useEffect)(()=>{if(b.available)return b.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:r}=t.data;i(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let i=e.slice(),a=e[t];return i[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...r}}},i})})},[]),(0,F.useEffect)(()=>{let e=e=>{if(ht(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),Ji();return}if(e.key===`BrowserForward`){e.preventDefault(),Yi();return}if(e.key===`Escape`&&T.open){e.preventDefault(),U();return}let t=bt(e);if(E(j,`closeTab`,t)&&(e.preventDefault(),Ti(lc(W.current))),E(j,`newTab`,t)&&(e.preventDefault(),J()),E(j,`reopenTab`,t)&&(e.preventDefault(),Ei()),E(j,`goBack`,t)&&(e.preventDefault(),Ji()),E(j,`goForward`,t)&&(e.preventDefault(),Yi()),E(j,`goUp`,t)&&(e.preventDefault(),Xi()),E(j,`find`,t)&&(e.preventDefault(),R===`files`?Yr():Xr()),E(j,`location`,t)&&(e.preventDefault(),sn(e=>e+1)),E(j,`home`,t)){e.preventDefault();let t=y.find(e=>e.kind===`home`)?.path;t&&Oi(t)}E(j,`iconsView`,t)&&(e.preventDefault(),R===`files`&&xa({mode:`grid`})),E(j,`detailsView`,t)&&(e.preventDefault(),R===`files`&&xa({mode:`list`})),E(j,`nextTab`,t)&&(e.preventDefault(),ki(1)),E(j,`previousTab`,t)&&(e.preventDefault(),ki(-1)),E(j,`hidden`,t)&&(e.preventDefault(),Ee().then(()=>{pn(e=>e+1),Qi()})),E(j,`undo`,t)&&(e.preventDefault(),va(!0)),E(j,`redo`,t)&&(e.preventDefault(),va(!1)),E(j,`splitView`,t)?(e.preventDefault(),Ai()):Object.keys(j).some(e=>e!==`openInNewTab`&&E(j,e,t))||R!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),ei(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[j,R,T.open,Ti,Ei,J,Ji,Yi,Xi,Yr,Xr,U,ei,xa,ki,Oi,y,Qi,va,Ai]),(0,F.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Ji()):(e.button===4||e.button===9)&&(e.preventDefault(),Yi())},t=e=>{(e.button===3||e.button===4||e.button===8||e.button===9)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[Ji,Yi]),(0,F.useEffect)(()=>{if(b.available)return b.on(e=>{let t=e;if(t.type===`app.navigation`)switch(t.data?.direction){case`back`:Ji();break;case`forward`:Yi()}})},[Ji,Yi]);let Ra=(0,F.useMemo)(()=>{let e=new Set;for(let t of n){if(Z(t)!==`files`)continue;let n=Q(t);if(n&&!Tt(n)){if(v(n)){let t=mc(g(n));t&&e.add(t)}else e.add(n)}}return[...e]},[n]),za=Ra.join(`\0`);(0,F.useEffect)(()=>{b.available&&b.send({type:`fs.watch`,payload:{paths:Ra,owner:`app`}})},[za,d]);let Ba=Z(V)===`files`?Q(V):``;(0,F.useEffect)(()=>{b.available&&b.send({type:`fs.focus`,payload:{path:Ba||null}})},[Ba]),(0,F.useEffect)(()=>{if(b.available)return b.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,i=W.current.tabs.filter(e=>Z(e)===`files`&&r(Q(e),n)),a=W.current.tabs.filter(e=>{let t=Q(e);return Z(e)===`files`&&t.length>0&&v(t)&&r(g(t),n)});if(i.length!==0||a.length!==0){Ae(n);for(let e of a){let t=W.current.tabs.find(t=>t.id===e.id),i=t?Q(t):``;t&&Z(t)===`files`&&!t.loading&&v(i)&&r(g(i),n)&&K(e.id,i,!0)}i.length!==0&&_e(n,!1,H).then(e=>{for(let t of i){let n=W.current.tabs.find(e=>e.id===t.id);n&&Z(n)===`files`&&r(Q(n),e.path)&&(n.loading?window.setTimeout(()=>{let n=W.current.tabs.find(e=>e.id===t.id);n&&!n.loading&&Z(n)===`files`&&r(Q(n),e.path)&&G(t.id,()=>({listing:e}))},300):G(t.id,()=>({listing:e})))}},()=>void 0)}})},[H,K,G]);let Va=L.index>0,Ha=L.index<L.history.length-1,Ua=(e,t)=>{let n=dc(e,Lr),i=e.listing?.path??e.history[e.index]??``,o=v(i),s=o&&a(i);return(0,I.jsx)(Vt,{platform:S?.platform,confirmDelete:A?.confirmDelete??!1,cutPaths:vr,previewVideoAudio:A?.previewVideoAudio??!1,previewVideoAutoplay:A?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?xn:Tn,onActivate:()=>An(t?`primary`:`secondary`),enableShortcuts:(!Mr||(t?M===`primary`:M===`secondary`))&&(!o||s),error:e.error,find:e.id===V.id?{...T,currentPath:Jr<0?null:qr[Jr]}:void 0,selectMatchesToken:e.id===V.id?Ke:0,imageStripHeight:Hr,listing:e.listing,loading:e.loading,onImageStripHeight:wa,readOnly:o&&!s||Tt(e.listing?.path??``),onOpen:(t,n)=>{n?J(t):K(e.id,t)},onOpenFile:(t,n)=>{Tt(t)?Pt(t).catch(e=>void Ce(pc(e))):c(t)?A?.archiveHandler??!1?n?J(t):K(e.id,t):me(t):v(t)?(async()=>{let e=await pe(t,O.current,gc(t));if(!e.path&&we(e.error)){let n=g(t),r=Pe(n);r&&Ie(n);let i=await Be(n,!!r);i&&(Je(n,i),e=await pe(t,O.current,i))}e.path?me(e.path):e.error&&Ce(e.error)})():me(t)},onRefresh:()=>{let t=e.listing?.path;t&&Y(t)},onLoadMore:()=>void di(e.id),onEnsureComplete:()=>void gi(e.id),selectAllToken:e.id===V.id?mi:0,onRename:Si,onSelectionCountChange:t?Wi:Gi,onSetTags:(t,n,r)=>Ta(e.id,t,n,r),selectionMenuRequest:t?Hn.primary:Hn.secondary,onSort:t=>Ea(e.id,t),onPaste:pa,onClipboardChanged:()=>void sa(),onTransfer:ga,onAddToTray:e=>void ea(e),onAddFavorite:e=>void na(e),onRemoveFavorite:e=>void ra(e),favoritePaths:Yt,onExtractArchive:(e,t)=>void Ja(e,t),openOnSingleClick:A?.openOnSingleClick??!1,pendingRename:Wn&&t===(M===`primary`)&&r(Wn.directory,e.listing?.path??``)?Wn.path:null,pendingRenameToken:Wn?.token??0,refreshToken:fn,shortcuts:j,showCheckboxes:A?.showCheckboxes??!0,showImages:Vr,view:n})},Wa=T.open&&(0,I.jsx)(Gr,{current:Jr,focusToken:He,matchCase:T.matchCase,mode:T.mode,onClose:U,onMatchCase:()=>Fe(e=>({...e,matchCase:!e.matchCase})),onMode:()=>Fe(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>ti(1),onPrevious:()=>ti(-1),onQuery:e=>Fe(t=>({...t,query:e})),onRegex:()=>Fe(e=>({...e,regex:!e.regex})),query:T.query,regex:T.regex,total:qr.length,onSelectMatches:qr.length>0?()=>qe(e=>e+1):void 0}),X=R===`files`&&v(z),Ga=X&&a(z),Ka=X&&L.listing?.archiveEncrypted===!0,qa=async(t,n)=>{let r=g(t),i=await de(r,n,O.current,gc(r));if(!i.ok&&we(i.error)){let e=Pe(r);e&&Ie(r);let t=await Be(r,!!e);t&&(Je(r,t),i=await de(r,n,O.current,t))}i.ok?(Y(n),We(),K(L.id,n,!0)):Ce(`${e(`could_not_extract_the_archive`)}${i.error?`\n${i.error}`:``}`)},Ja=async(e,t)=>{let n=g(e),i=mc(n);if(!i)return;if(t===`choose`){let e=await _t(i);e&&await qa(n,e);return}let a=t===`named`;if(t===`auto`){let e=r(n,z)?L.listing?.entries??[]:(await _e(n,!1,!1,O.current,gc(n))).entries;a=!(e.length===1&&e[0].isDirectory)}let o=i.includes(`\\`)?`\\`:`/`,s=a?`${i.replace(/[\\/]+$/,``)}${o}${hc(n)}`:i;await qa(n,s)},Ya=async e=>{X&&await Ja(z,e)},Xa=async()=>{X&&await Ja(z,`choose`)},Za=(0,I.jsxs)(Cc,{children:[(0,I.jsx)($,{"data-shortcut":D(j.goBack),disabled:!Va,onClick:e=>{L.index>0&&k(e)?J(L.history[L.index-1]):Ji()},onContextMenu:e=>{L.index<=0||(e.preventDefault(),In({x:e.clientX,y:e.clientY,tab:L,direction:`back`}))},title:e(`back`),type:`button`,children:(0,I.jsx)(Cn,{})}),(0,I.jsx)($,{"data-shortcut":D(j.goForward),disabled:!Ha,onClick:e=>{L.index<L.history.length-1&&k(e)?J(L.history[L.index+1]):Yi()},onContextMenu:e=>{L.index>=L.history.length-1||(e.preventDefault(),In({x:e.clientX,y:e.clientY,tab:L,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,I.jsx)(hn,{})}),(0,I.jsx)($,{"data-shortcut":D(j.goUp),disabled:R!==`files`||!jr,onClick:e=>{jr&&(k(e)?J(jr):Oi(jr))},title:e(`up_one_level`),type:`button`,children:(0,I.jsx)(ln,{})}),(0,I.jsx)(Zr,{focusToken:on,icon:Ur,label:R===`files`?void 0:e(Zn[R]),onContextMenu:R===`files`?(e,t,n)=>Ln({x:t,y:n,path:e}):void 0,onNavigate:Oi,path:R===`files`?z:kr}),R===`files`&&(!X||Ga)&&(0,I.jsx)($,{onClick:e=>Hi(e,z,()=>void K(L.id,z,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,I.jsx)(un,{})}),(0,I.jsx)($,{"data-shortcut":D(j.find),onClick:()=>R===`files`?Yr():Xr(),title:e(`search`),type:`button`,children:(0,I.jsx)(dn,{})}),Bn.primary>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Ks,{}),(0,I.jsx)($,{onClick:e=>Ki(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,I.jsx)(Sn,{})})]}),(0,I.jsx)(`span`,{ref:er,style:{display:`contents`}}),X&&(0,I.jsxs)(wc,{children:[(0,I.jsx)(Ks,{}),Ka&&(0,I.jsxs)(Tc,{title:e(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,I.jsx)(tn,{size:12}),e(`encrypted`)]}),(0,I.jsx)($,{onClick:()=>void Xa(),onContextMenu:e=>{e.preventDefault(),Fn({x:e.clientX,y:e.clientY})},title:e(`extract_archive`),type:`button`,children:(0,I.jsx)(bn,{})}),(0,I.jsx)(it,{icon:(0,I.jsx)(en,{size:15}),onChange:e=>{let t=Number(e);Ct(t),O.current=t,X&&K(L.id,z,!0)},options:sc.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`archive_encoding`)}: ${e(sc.find(e=>e.value===String(St))?.label??`auto`)}`,value:String(St)})]})]}),Qa=Xe.open?{...Xe,index:at}:null,$a=t=>{let n=nr(t);return n?e(Zn[n]):lt(Br,t,ar(t)||e(`files`))};return(0,I.jsx)(yt,{value:Br,children:(0,I.jsxs)(yc,{$rounded:Ne,children:[(0,I.jsx)(lr,{settings:A,theme:Wt}),(0,I.jsx)(os,{activeId:L.id,closedTabs:dr,onClose:Ti,onNewTab:()=>J(),onRestoreClosed:Di,onReorder:Da,onTransferToTab:ga,onSelect:f,onViewChange:xa,onColumns:Sa,onShowImages:Ca,showImages:Vr,tasks:Kn,onClearTasks:_a,activityOpen:Jn,onActivityOpenChange:Qn,trayCount:xr.length+pr.length,trayVisible:yr,onToggleTray:ha,split:Mr,canSplit:R===`files`,onToggleSplit:Ai,details:mn,canDetails:R===`files`||R===`recycle`||R===`gallery`,onToggleDetails:()=>gn(e=>!e),currentFolder:R===`files`&&!Tt(z)?z:``,shortcuts:j,view:Rr,tabs:n.filter(e=>!e.hidden).map(t=>{let r=Z(t),i=Q(t),a=t.splitWith?n.find(e=>e.id===t.splitWith):void 0,o=a?Q(a):``;return{id:t.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?dt(Br,i):void 0,archive:r===`files`&&v(i),split:!!a,title:r===`files`?lt(Br,i,u(i)||e(`files`)):e(Zn[r]),partner:a?{title:lt(Br,o,u(o)||e(`files`)),place:dt(Br,o)}:void 0}})}),(0,I.jsxs)(bc,{children:[(0,I.jsx)(ui,{activeKind:R,currentPath:R===`files`?kr:``,drives:re,historyVersion:Xt,onNavigate:Oi,onOpenView:wi,homePath:y.find(e=>e.kind===`home`)?.path??``,places:y,recent:At,recentLimit:Mt,version:rn}),(0,I.jsxs)(xc,{children:[(0,I.jsxs)(jc,{children:[(0,I.jsxs)(Mc,{children:[R!==`files`&&Za,(0,I.jsx)(Sc,{children:(0,I.jsxs)(F.Suspense,{fallback:null,children:[R!==`files`&&Xe.open&&(0,I.jsx)(Gr,{current:at,focusToken:et,matchCase:Xe.matchCase,mode:Xe.mode,onClose:Qr,onMatchCase:()=>Qe(e=>({...e,matchCase:!e.matchCase})),onMode:()=>Qe(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>$r(1),onPrevious:()=>$r(-1),onQuery:e=>Qe(t=>({...t,query:e})),onRegex:()=>Qe(e=>({...e,regex:!e.regex})),placeholder:e(`search`),query:Xe.query,regex:Xe.regex,total:ct,onSelectMatches:R===`gallery`||R===`recycle`?()=>qe(e=>e+1):void 0}),R===`files`?Mr&&B?(0,I.jsxs)(Dc,{ref:Bi,children:[(0,I.jsxs)(Oc,{style:{flex:_},children:[(0,I.jsxs)(Ec,{$active:M===`primary`,onPointerDown:()=>An(`primary`),children:[(0,I.jsx)($,{"data-shortcut":D(j.goBack),disabled:!Va,onClick:e=>{let t=L.index-1;t<0||(k(e)?J(L.history[t]):q(L.id,L.history[t],t))},onContextMenu:e=>{L.index<=0||(e.preventDefault(),In({x:e.clientX,y:e.clientY,tab:L,direction:`back`}))},title:e(`back`),type:`button`,children:(0,I.jsx)(Cn,{})}),(0,I.jsx)($,{"data-shortcut":D(j.goForward),disabled:!Ha,onClick:e=>{let t=L.index+1;t>=L.history.length||(k(e)?J(L.history[t]):q(L.id,L.history[t],t))},onContextMenu:e=>{L.index>=L.history.length-1||(e.preventDefault(),In({x:e.clientX,y:e.clientY,tab:L,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,I.jsx)(hn,{})}),(0,I.jsx)($,{"data-shortcut":D(j.goUp),disabled:!jr,onClick:e=>{jr&&(k(e)?J(jr):K(L.id,jr))},title:e(`up_one_level`),type:`button`,children:(0,I.jsx)(ln,{})}),(0,I.jsx)(Zr,{focusToken:M===`primary`?on:void 0,onContextMenu:(e,t,n)=>Ln({x:t,y:n,path:e}),onNavigate:(e,t)=>t?J(e):void K(L.id,e),path:z}),(0,I.jsx)($,{onClick:e=>Hi(e,z,()=>void K(L.id,z,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,I.jsx)(un,{})}),(0,I.jsx)($,{"data-shortcut":D(j.find),onClick:Yr,title:e(`search`),type:`button`,children:(0,I.jsx)(dn,{})}),Bn.primary>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Ks,{}),(0,I.jsx)($,{onClick:e=>Ki(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,I.jsx)(Sn,{})})]})]}),Ua(L,!0),M===`primary`&&Wa]}),(0,I.jsx)(kc,{onDoubleClick:()=>te(.5),onPointerDown:Vi,title:e(`drag_to_resize_double_click_to_reset`)}),(0,I.jsxs)(Oc,{$enter:!0,style:{flex:1-_},children:[(0,I.jsxs)(Ec,{$active:M===`secondary`,onPointerDown:()=>An(`secondary`),children:[(0,I.jsx)($,{"data-shortcut":D(j.goBack),disabled:B.index<=0,onClick:e=>{let t=B.index-1;t<0||(k(e)?J(B.history[t]):q(B.id,B.history[t],t))},onContextMenu:e=>{B.index<=0||(e.preventDefault(),In({x:e.clientX,y:e.clientY,tab:B,direction:`back`}))},title:e(`back`),type:`button`,children:(0,I.jsx)(Cn,{})}),(0,I.jsx)($,{"data-shortcut":D(j.goForward),disabled:B.index>=B.history.length-1,onClick:e=>{let t=B.index+1;t>=B.history.length||(k(e)?J(B.history[t]):q(B.id,B.history[t],t))},onContextMenu:e=>{B.index>=B.history.length-1||(e.preventDefault(),In({x:e.clientX,y:e.clientY,tab:B,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,I.jsx)(hn,{})}),(0,I.jsx)($,{"data-shortcut":D(j.goUp),disabled:!Pr,onClick:e=>{Pr&&(k(e)?J(Pr):K(B.id,Pr))},title:e(`up_one_level`),type:`button`,children:(0,I.jsx)(ln,{})}),(0,I.jsx)(Zr,{focusToken:M===`secondary`?on:void 0,onContextMenu:(e,t,n)=>Ln({x:t,y:n,path:e}),onNavigate:(e,t)=>t?J(e):void K(B.id,e),path:Nr}),(0,I.jsx)($,{onClick:e=>Hi(e,Nr,()=>void K(B.id,Nr,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,I.jsx)(un,{})}),(0,I.jsx)($,{"data-shortcut":D(j.find),onClick:Yr,title:e(`search`),type:`button`,children:(0,I.jsx)(dn,{})}),Bn.secondary>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Ks,{}),(0,I.jsx)($,{onClick:e=>Ki(`secondary`,e),title:e(`selection_menu`),type:`button`,children:(0,I.jsx)(Sn,{})})]})]}),Ua(B,!1),M===`secondary`&&Wa]})]}):(0,I.jsxs)(I.Fragment,{children:[Za,(0,I.jsxs)(Ac,{children:[Ua(L,!0),Wa]})]}):R===`home`?(0,I.jsx)($s,{platform:S?.platform,drives:re,find:Qa,historyVersion:Xt,onSearchMatches:pt,homePath:y.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:Na,onHistoryChanged:()=>Zt(e=>e+1),onAddToTray:e=>void ea(e),onAddFavorite:e=>void na(e),onRemoveFavorite:e=>void ra(e),favoritePaths:Yt,onExtractArchive:(e,t)=>void Ja(e,t),settingsVersion:rn,theme:Wt,onOpen:Oi,onLayoutChanged:ja,onPlacesChanged:ne,onRecentCleared:Ma,places:y,recent:At,recentLimit:Mt,visibilityVersion:fn}):R===`settings`?(0,I.jsx)(ec,{appInfo:S,find:Qa,focusSection:je,onSearchMatches:pt,onSettingsChanged:ja}):R===`gallery`?(0,I.jsx)(tc,{platform:S?.platform,toolbarSlot:$n,onStatusChange:sr,confirmDelete:A?.confirmDelete??!1,find:Qa,onSearchMatches:pt,openOnSingleClick:A?.openOnSingleClick??!1,onAddToTray:e=>void ea(e),onAddFavorite:e=>void na(e),onRemoveFavorite:e=>void ra(e),favoritePaths:Yt,onExtractArchive:(e,t)=>void Ja(e,t),shortcuts:j,showCheckboxes:A?.showCheckboxes??!0,selectMatchesToken:Ke,onPreviewChange:Ni,view:Rr}):(0,I.jsx)(nc,{find:Qa,toolbarSlot:$n,onStatusChange:sr,onOpenLocation:Oi,onShowDetails:()=>gn(!0),platform:S?.platform,selectMatchesToken:Ke,onPreviewChange:Pi})]})},R)]}),(R===`files`||R===`gallery`||R===`recycle`)&&(0,I.jsx)(gt,{emptyNote:e(`nothing_selected`),info:Li,onWidth:ji,open:mn,selectionNote:Ri,videoAudio:A?.previewVideoAudio??!1,videoAutoplay:A?.previewVideoAutoplay??!1,width:_n})]}),(0,I.jsxs)(Lc,{children:[(0,I.jsx)(`span`,{children:zi}),S?(0,I.jsxs)(Nc,{children:[(0,I.jsxs)(`span`,{children:[`v`,S.version,` · `,S.platform]}),S.debug&&(0,I.jsx)(Ic,{children:`debug`}),be?.available&&(0,I.jsxs)(Pc,{onClick:e=>{Me(`updates`),wi(`settings`,k(e))},title:e(`version_version_is_available`,{version:be.latest}),type:`button`,children:[(0,I.jsx)(Fc,{}),e(`update_available`)]})]}):(0,I.jsx)(`span`,{children:e(`browser_preview`)})]})]})]}),(0,I.jsx)(ot,{clipboardItems:pr,clipboardMove:gr,currentDirectory:R===`files`?kr:``,items:xr,onAdd:e=>void ea(e),onClear:ia,onClose:()=>br(!1),onCopyToClipboard:e=>void ca(e),onPosition:ma,onRemove:ta,onTransfer:ga,position:Er,visible:yr}),jn&&(0,I.jsx)(vt,{creationOnly:!0,directory:jn.directory,menu:{x:jn.x,y:jn.y,paths:[],background:!0},onClose:()=>Mn(null),onCreateFile:e=>void qi(e),onCreateFolder:e=>void qi(null,e),shortcuts:j}),P&&(0,I.jsx)(vt,{allowCompression:!0,directory:mc(P.path)??P.path,menu:{x:P.x,y:P.y,paths:[P.path]},onAddToTray:e=>void ea(e),onAddFavorite:e=>void na(e),onRemoveFavorite:e=>void ra(e),favoritePaths:Yt,onExtractArchive:(e,t)=>void Ja(e,t),onArchiveCreated:e=>{e&&Y(mc(P.path)??P.path)},onClose:()=>Ln(null),onCompressTo:(e,t)=>zn({paths:e,name:t}),onCopy:(e,t)=>void wt(e,t),onDelete:e=>void Nt(e,!1).then(()=>Y(mc(P.path)??P.path)),onOpen:(e,t)=>t?J(e):void K(L.id,e),onOpenFile:e=>void me(e),onPaste:e=>void kt(e).then(t=>{t.ok&&Y(e)}),onRefresh:()=>Y(P.path),shortcuts:j,target:{path:P.path,isDirectory:!0}}),Rn&&(0,I.jsx)(Jt,{initialDirectory:mc(P?.path??z)??z,initialName:Rn.name,onCancel:()=>zn(null),onCompress:async e=>{let t=await Bt(Rn.paths,e);return!t.ok&&t.error&&Ce(t.error),t.ok}}),N&&(0,I.jsx)(Te,{items:[{label:$a(N.tab.history[N.tab.index]??``),icon:(0,I.jsx)(ir,{location:N.tab.history[N.tab.index]??``}),tooltip:N.tab.history[N.tab.index]??``,disabled:!0,onSelect:()=>void 0},...N.tab.history.map((e,t)=>({path:e,index:t})).filter(({index:e})=>N.direction===`back`?e<N.tab.index:e>N.tab.index).sort((e,t)=>N.direction===`back`?t.index-e.index:e.index-t.index).slice(0,24).map(({path:e,index:t})=>({label:$a(e),icon:(0,I.jsx)(ir,{location:e}),tooltip:e,onSelect:()=>{let n=N.tab;In(null),q(n.id,e,t)}}))],onClose:()=>In(null),x:N.x,y:N.y}),Pn&&(0,I.jsx)(Te,{items:[{label:e(`extract_here`),onSelect:()=>void Ya(`here`)},{label:e(`extract_to_a_folder_named_after_the_archive`),onSelect:()=>void Ya(`named`)},{label:e(`auto_extract_to_the_current_folder`),onSelect:()=>void Ya(`auto`)}],onClose:()=>Fn(null),x:Pn.x,y:Pn.y}),Cr&&(0,I.jsx)(hr,{action:Cr.prompt.action,delaySeconds:Cr.prompt.delaySeconds,hits:Cr.prompt.hits,onCancel:()=>{Cr.resolve(!1),wr(null)},onConfirm:()=>{Cr.resolve(!0),wr(null)},permanent:Cr.prompt.permanent},Cr.id),(0,I.jsx)(Ar,{}),(0,I.jsx)(Ir,{}),(0,I.jsx)(Fr,{}),m&&(0,I.jsx)(Fs,{code:m.code,deviceName:m.deviceName,onAccept:()=>{Kt(m.requestId,!0),ee(null)},onReject:()=>{Kt(m.requestId,!1),ee(null)}}),(0,I.jsx)(Es,{}),(0,I.jsx)(ie,{})]})})}var yc=x.div`
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
`,bc=x.div`
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
`,xc=x.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,Sc=x.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${ke}
`,Cc=x.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,$=Gs,wc=x.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,Tc=x.span`
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
`,Ec=x.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,Dc=x.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Oc=x.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?He:``}
`,kc=x.div`
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
`,Ac=x.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,jc=x.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Mc=x.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Nc=x.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,Pc=x.button`
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
`,Fc=x.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,Ic=x.span`
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
`,Lc=x.footer`
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
`;document.documentElement.dataset.theme=S()?`dark`:`light`;var Rc=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,Rc),window.addEventListener(`pagehide`,qe);var zc=document.getElementById(`root`),Bc=new URLSearchParams(window.location.search),Vc=Bc.get(`picker`),Hc=Bc.get(`filter`)??``,Uc=Vc===`folder`||Vc===`file`||Vc===`save`?(0,F.lazy)(()=>Qs(()=>import(`./PickerWindow-BxU423LB.js`).then(e=>({default:e.PickerWindow})),__vite__mapDeps([14,1,2,7,4,5,3,6,9,12,0,8,10]))):null;zc&&(Xe(),(0,zn.createRoot)(zc).render((0,I.jsx)(F.StrictMode,{children:(0,I.jsx)(ne,{children:Uc===null?(0,I.jsx)(vc,{}):(0,I.jsx)(F.Suspense,{fallback:null,children:(0,I.jsx)(Uc,{defaultExtension:Bc.get(`ext`)??``,extensions:Hc?Hc.split(`;`).filter(Boolean):[],types:Bc.get(`types`)??``,typeIndex:Number(Bc.get(`type`)??0)||0,initial:Bc.get(`initial`)??``,initialName:Bc.get(`name`)??``,mode:Vc===`folder`?`folder`:`file`,multiple:Bc.get(`multiple`)===`1`,save:Vc===`save`})})})})));export{jn as A,Hn as C,In as D,Nn as E,An as M,Fn as N,Ln as O,Jn as S,Pn as T,Un as _,Ps as a,qn as b,ui as c,Fr as d,Ar as f,or as g,ir as h,js as i,Mn as j,P as k,Zr as l,cr as m,Gs as n,Uo as o,hr as p,Ks as r,Vo as s,Qs as t,Gr as u,Vn as v,N as w,Gn as x,Wn as y};