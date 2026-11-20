const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OverviewView-Cc872J0X.js","assets/rolldown-runtime-XKyaHtl9.js","assets/dist-sR-t6Emc.js","assets/selectionMenu-3N_AfRQo.js","assets/theme-Ocob2ChL.js","assets/theme-Cd7QcbnN.css","assets/Icons-NY0trHLk.js","assets/concepts-69Rb8xko.js","assets/textSearch-9s3m3Ks5.js","assets/FileList-wM4BPYTZ.js","assets/IconPicker-mUYOTJIS.js","assets/SettingsView-DLL-yMKk.js","assets/GalleryView-DkQl7HJJ.js","assets/RecycleView-D0OK5yNA.js","assets/PickerWindow-DBQ1R1PY.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{C as t,D as n,E as r,O as i,S as a,T as o,a as s,b as c,c as l,d as u,h as d,k as f,l as p,m,p as ee,r as h,u as g,x as _,y as v}from"./theme-Ocob2ChL.js";import{_ as y,a as b,c as te,d as ne,f as x,g as S,i as re,n as C,o as w,r as ie,s as ae,u as T}from"./dist-sR-t6Emc.js";import{A as oe,B as se,C as ce,D as le,F as ue,G as de,I as fe,J as E,K as pe,Q as me,R as he,S as ge,T as _e,V as ve,W as ye,Z as be,_ as xe,_t as Se,a as Ce,at as we,b as Te,bt as Ee,c as De,ct as Oe,d as ke,f as Ae,ft as je,g as D,gt as Me,h as Ne,ht as Pe,i as Fe,k as Ie,l as Le,m as Re,nt as ze,o as Be,p as Ve,st as He,tt as Ue,u as We,v as Ge,vt as Ke,x as qe,y as Je,z as Ye}from"./selectionMenu-3N_AfRQo.js";import{a as Xe,f as Ze,i as Qe,p as $e,u as et}from"./concepts-69Rb8xko.js";import{A as tt,B as nt,C as rt,D as it,E as at,F as ot,G as st,J as ct,K as lt,L as ut,N as dt,O as ft,Q as pt,R as mt,U as ht,V as gt,W as _t,X as vt,Y as O,Z as yt,_t as bt,c as xt,ct as St,d as Ct,dt as wt,et as k,ft as Tt,g as Et,gt as Dt,ht as Ot,i as kt,k as At,l as jt,lt as Mt,m as Nt,mt as Pt,nt as Ft,ot as A,p as It,pt as Lt,q as j,r as Rt,st as zt,t as Bt,tt as Vt,ut as Ht,v as Ut,vt as Wt,x as Gt,yt as Kt,z as qt}from"./FileList-wM4BPYTZ.js";import{D as Jt,F as Yt,G as Xt,I as Zt,J as Qt,K as $t,O as en,P as tn,T as M,V as nn,W as rn,Y as an,Z as on,_ as sn,_t as cn,a as ln,ct as un,d as dn,et as fn,f as pn,i as mn,it as hn,j as gn,k as _n,lt as vn,n as yn,p as bn,pt as xn,r as Sn,st as Cn,t as wn,ut as Tn,v as En,z as Dn}from"./Icons-NY0trHLk.js";async function On(){return x.available?await x.request(`app.info`):{version:`dev`,platform:`web`,logDirectory:``,rounded:!1,debug:!1}}async function N(e){x.available?await x.request(`system.openUrl`,{url:e}):window.open(e,`_blank`,`noreferrer`)}async function kn(){x.available&&await Ln(`update.openLogs`)}async function An(e){x.available?await Ln(`update.openRelease`):e&&window.open(e,`_blank`,`noreferrer`)}async function jn(){return x.available?await x.request(`update.status`)??null:null}async function Mn(){return x.available?await x.request(`update.check`):{current:`dev`,latest:`dev`,available:!1}}async function Nn(){return x.available?await x.request(`update.download`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}async function Pn(){await Ln(`update.cancel`)}async function P(){return x.available?await x.request(`update.install`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}function Fn(e){return x.on(t=>{t.type===`update.progress`&&e(t.data)})}function In(e){return x.on(t=>{t.type===`update.changelog`&&e(t.data)})}async function Ln(e,t,n=3e4){let r=await x.request(e,t,n);if(!r.ok)throw Error(r.error??`The action failed.`)}var F=e(y(),1),Rn=i(),zn={managed:0,private:0,workingSet:0,available:0};async function Bn(){return x.available?await x.request(`app.memory`):zn}async function Vn(){return x.available?await x.request(`app.memory.trim`):zn}var Hn={registered:!1,pathMatches:!1,registeredPath:null};async function Un(){return x.available?await x.request(`app.scheme`):Hn}async function Wn(e){return x.available?await x.request(`app.scheme.set`,{enabled:e}):Hn}var Gn={supported:!1,mode:`none`,active:!1,error:null};async function Kn(){return x.available?await x.request(`app.startup`):Gn}async function qn(e){return x.available?await x.request(`app.startup.set`,{mode:e}):Gn}async function Jn(){return x.available?(await x.request(`app.tasks`)).tasks:[]}async function Yn(){x.available&&await x.request(`app.tasks.clear`)}var I=ne(),Xn=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function Zn(e){return Xn.test(e)}function Qn({settings:e,theme:t}){let n=e?.backgroundSource??null,r=n?.startsWith(`url:`)?n.slice(4):_(n)?n:null,i=n?.startsWith(`file:`)?n.slice(5):null,a=je(i),o=n?.startsWith(`builtin:`)?Qe(n,t):r??a,s=r===null?i===null?n!==null&&Xe(n):Zn(i):Zn(r.split(/[?#]/)[0]);if(!n||!o)return null;let c=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,I.jsxs)($n,{"aria-hidden":!0,children:[s?(0,I.jsx)(tr,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o,style:{filter:c}}):(0,I.jsx)(er,{src:o,style:{filter:c}}),(0,I.jsx)(nr,{})]})}var $n=S.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,er=S.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,tr=S.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,nr=S.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);

    /* The light artwork is drawn pale already, so it only keeps a faint accent glow. */
    html[data-theme="light"] & {
        background: radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.06), transparent 60%);
    }
`,rr=f();function ir({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let o=T(),s=(0,F.useRef)(null),[c,l]=(0,F.useState)(()=>Math.max(1,Math.ceil(n))),u=e??`delete`;return(0,F.useEffect)(()=>{s.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));l(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,rr.createPortal)((0,I.jsx)(cr,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,I.jsxs)(lr,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsx)(ur,{children:o(`protected_folder`)}),(0,I.jsx)(dr,{children:o(`these_paths_are_protected_by_the_safety_settings`)}),(0,I.jsx)(fr,{children:t.map(e=>(0,I.jsxs)(pr,{children:[(0,I.jsx)(mr,{children:e.path}),(0,I.jsx)(hr,{children:o(`protected_by_pattern`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,I.jsx)(gr,{children:ar(o,u,r??!1)}),(0,I.jsx)(_r,{children:or(o,u)}),(0,I.jsx)(vr,{children:o(`this_waits_seconds_s_before_the_button_works`,{seconds:n})}),(0,I.jsxs)(L,{children:[(0,I.jsx)(R,{onClick:i,ref:s,type:`button`,children:o(`cancel`)}),(0,I.jsx)(yr,{disabled:c>0,onClick:a,type:`button`,children:c>0?sr(o,u,c):sr(o,u,0)})]})]})}),document.body)}function ar(e,t,n){switch(t){case`delete`:return e(n?`deletes_permanently`:`moves_to_the_recycle_bin`);case`move`:return e(`moves_the_entries`);case`rename`:return e(`renames_the_entry`);case`write`:return e(`writes_into_this_folder`)}}function or(e,t){switch(t){case`delete`:return e(`nothing_has_been_deleted`);case`move`:return e(`nothing_has_been_moved`);case`rename`:return e(`nothing_has_been_renamed`);case`write`:return e(`nothing_has_been_written`)}}function sr(e,t,n){let r=n>0?t===`delete`?`delete_anyway_seconds_s`:t===`move`?`move_anyway_seconds_s`:t===`rename`?`rename_anyway_seconds_s`:`write_anyway_seconds_s`:t===`delete`?`delete_anyway`:t===`move`?`move_anyway`:t===`rename`?`rename_anyway`:`write_anyway`;return n>0?e(r,{seconds:n}):e(r)}var cr=S.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Be}
`,lr=S.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${We}
`,ur=S.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,dr=S.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,fr=S.div`
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
`,pr=S.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,mr=S.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,hr=S.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,gr=S.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,_r=S.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,vr=S.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,L=S.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,R=S.button`
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
`,yr=S.button`
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
`;function br(){let e=T(),[t,n]=(0,F.useState)(null),r=(0,F.useRef)(null),i=(0,F.useRef)(null);(0,F.useEffect)(()=>(Ne(e=>new Promise(t=>{r.current=t,n(e)})),()=>Ne(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,F.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,rr.createPortal)((0,I.jsx)(z,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,I.jsxs)(xr,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsx)(B,{children:e(`notice`)}),(0,I.jsx)(Sr,{children:t}),(0,I.jsx)(Cr,{children:(0,I.jsx)(wr,{onClick:a,ref:i,type:`button`,children:e(`ok`)})})]})}),document.body)}var z=S.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Be}
`,xr=S.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${We}
`,B=S.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Sr=S.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Cr=S.div`
    display: flex;
    justify-content: flex-end;
`,wr=S.button`
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
`;function Tr(){let e=T(),[t,n]=(0,F.useState)(null);(0,F.useEffect)(()=>x.on(e=>{let t=e;t.type===`fs.elevation.ask`&&t.data&&n(t.data)}),[]);let r=e=>{let r=t;n(null),r&&x.request(`fs.elevation.answer`,{token:r.token,allow:e})},i=(t=>{switch(t){case`delete`:return e(`delete`);case`rename`:return e(`rename`);case`copy`:return e(`copy`);case`moveTo`:return e(`move`);case`extractArchive`:return e(`extract_archive`);case`newFolder`:case`newFolderAt`:return e(`new_folder`);case`newFile`:case`newFileAt`:return e(`new_file`);case`restoreRecycle`:return e(`restore`);case`writeFile`:return e(`save`);default:return``}})(t?.action??``);return(0,I.jsx)(Fe,{confirmLabel:e(`run_as_administrator`),message:e(`this_path_needs_administrator_rights_to_action_restart_the_app_as_administrator_and_try_again`,{path:t?.path??``,action:i.length>0?i.toLowerCase():e(`ok`).toLowerCase()}),onCancel:()=>r(!1),onConfirm:()=>r(!0),open:t!==null,title:e(`administrator_rights_required`)})}function Er(){let e=T(),[t,n]=(0,F.useState)(null),[r,i]=(0,F.useState)(``),a=(0,F.useRef)(null),o=(0,F.useRef)(null);(0,F.useEffect)(()=>(D((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>D(null)),[]),(0,F.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,rr.createPortal)((0,I.jsx)(V,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,I.jsxs)(Dr,{role:`dialog`,"aria-modal":`true`,children:[(0,I.jsx)(Or,{children:e(`archive_password`)}),(0,I.jsx)(H,{children:t.wrong?e(`that_password_did_not_open_the_archive_try_again`):e(`this_archive_is_encrypted_enter_its_password`)}),(0,I.jsx)(kr,{title:t.archive,children:t.archive}),(0,I.jsx)(Ar,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,I.jsxs)(jr,{children:[(0,I.jsx)(Mr,{onClick:()=>s(null),type:`button`,children:e(`cancel`)}),(0,I.jsx)(Nr,{disabled:r.length===0,onClick:c,type:`button`,children:e(`ok`)})]})]})}),document.body)}var V=S.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Be}
`,Dr=S.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${We}
`,Or=S.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,H=S.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,kr=S.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ar=S.input`
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
`,jr=S.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,Mr=S.button`
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
`,Nr=S(Mr)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Pr({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:ee,onSelectMatches:h}){let g=T(),_=(0,F.useRef)(null),v=c??g(`search_this_folder`);(0,F.useEffect)(()=>{let e=_.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let y=e=>{e(),_.current?.focus()};return(0,I.jsxs)(Fr,{children:[(0,I.jsx)(Cn,{}),(0,I.jsx)(Ir,{"aria-label":v,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),ee())},placeholder:v,ref:_,spellCheck:!1,value:e}),!s&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Lr,{children:i===0?`0/0`:`${a+1}/${i}`}),h&&(0,I.jsx)(Rr,{disabled:i===0,onClick:h,title:g(`select_all_matches`),type:`button`,children:(0,I.jsx)(dn,{size:12})}),(0,I.jsx)(Rr,{$chevron:!0,onClick:()=>y(u),title:g(`previous_match_shift_enter`),type:`button`,children:(0,I.jsx)(pn,{size:12})}),(0,I.jsx)(Rr,{$chevron:!0,$down:!0,onClick:()=>y(d),title:g(`next_match_enter`),type:`button`,children:(0,I.jsx)(pn,{size:12})})]}),(0,I.jsx)(U,{$on:n,onClick:()=>y(f),title:g(`match_case`),type:`button`,children:`Aa`}),(0,I.jsx)(U,{$on:r,onClick:()=>y(p),title:g(`regular_expression`),type:`button`,children:`.*`}),!s&&(0,I.jsx)(zr,{$on:t===`hide`,onClick:()=>y(m),title:g(t===`hide`?`non_matching_entries_are_hidden`:`non_matching_entries_are_dimmed`),type:`button`,children:t===`hide`?(0,I.jsx)(_n,{size:12}):(0,I.jsx)(en,{size:12})}),(0,I.jsx)(Rr,{onClick:ee,title:g(`close_search_esc`),type:`button`,children:(0,I.jsx)(En,{size:12})})]})}var Fr=S.div`
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
    ${ke}
`,Ir=S.input`
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
`,Lr=S.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Rr=S.button`
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
`,U=S.button`
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
`,zr=S(U)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`,Br=`yafm://`,Vr={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function Hr(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function Ur(e){return`${Br}${e===`home`?`overview`:e}`}function Wr(e){return Hr(e)?Vr[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Gr(e){let t=e.trim();if(t.length===0)return null;if(!Hr(t))return t;let n=Vr[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?Ur(n):null}function Kr({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=T(),s=j(),[c,l]=(0,F.useState)(!1),[u,d]=(0,F.useState)(``),[f,p]=(0,F.useState)([]),[m,ee]=(0,F.useState)(0),[h,g]=(0,F.useState)(null),[_,v]=(0,F.useState)(null),[y,b]=(0,F.useState)(null),te=(0,F.useRef)(null),ne=(0,F.useRef)(null),x=(0,F.useRef)(0);(0,F.useEffect)(()=>{if(!Ct(e)){b(null);return}let t=Et(e);if(!t){b(null);return}let n=!0;return xt().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);b({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&b(null)),()=>{n=!1}},[e]),(0,F.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,F.useEffect)(()=>{r&&r!==x.current&&(x.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,F.useEffect)(()=>{c&&te.current?.select()},[c]),(0,F.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[c]);let S=()=>{d(e.replace(/\\/g,`/`)),l(!0)},re=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,F.useEffect)(()=>{if(!c){p([]);return}let e=Yr(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{he(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),ee(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let C=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,F.useLayoutEffect)(()=>{if(!c){g(null);return}let e=()=>{let e=ne.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);g({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,I.jsxs)(ei,{onPointerDown:e=>e.stopPropagation(),ref:ne,children:[(0,I.jsxs)(ri,{children:[(0,I.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),ee(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),ee(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?C(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):re(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:te,spellCheck:!1,value:u}),(0,I.jsx)(ii,{onClick:()=>l(!1),title:o(`cancel`),type:`button`,children:(0,I.jsx)(En,{size:12})}),(0,I.jsx)(ii,{$apply:!0,onClick:re,onPointerDown:e=>e.stopPropagation(),title:o(`open_this_path`),type:`button`,children:(0,I.jsx)(dn,{size:14})})]}),f.length>0&&h&&(0,rr.createPortal)((0,I.jsx)(ti,{onPointerDown:e=>e.stopPropagation(),style:{left:h.left,top:h.top,width:h.width},children:f.map((e,t)=>(0,I.jsxs)(K,{$active:t===m,onClick:t=>C(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>ee(t),type:`button`,children:[(0,I.jsx)(tt,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,I.jsx)(ni,{children:e.name})]},e.path))}),document.body)]});let w=t?[{label:t,path:e,icon:n}]:qr(e,y)??W(e,s.places);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Xr,{onClick:S,title:o(`click_to_type_a_path`),children:w.map((t,n)=>(0,I.jsxs)(Zr,{$last:n===w.length-1,children:[n>0&&(0,I.jsx)(Qr,{children:(0,I.jsx)(pn,{size:9})}),(0,I.jsxs)($r,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):v({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,I.jsx)(G,{children:(0,I.jsx)(dt,{place:t.place,size:13})}):t.icon&&(0,I.jsx)(G,{children:t.icon}),t.label]})]},t.path))}),_&&(0,I.jsx)(Ce,{items:[{label:o(`open`),icon:(0,I.jsx)(mn,{size:14}),onSelect:()=>i(_.path)},{label:o(`open_in_new_tab`),icon:(0,I.jsx)(hn,{size:14}),onSelect:()=>i(_.path,!0)},{label:o(`copy_as_path`),icon:(0,I.jsx)(sn,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(_.path)},...Hr(_.path)?[{label:o(`open_with`),icon:(0,I.jsx)(Jt,{size:14}),onSelect:()=>void Pt(_.path)},{label:o(`properties`),icon:(0,I.jsx)(tn,{size:14}),onSelect:()=>void bt([_.path])}]:[]],onClose:()=>v(null),x:_.x,y:_.y})]})}function qr(e,t){let n=Et(e);if(!n)return null;let r=at(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,I.jsx)(un,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function Jr(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function W(e,t){let n=Jr(e),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>r(t.path,e.path));t>i&&(i=t,a=e)}return a&&i>=0&&n.splice(0,i+1,{label:a.name,path:n[i].path,place:a}),n}function Yr(e){if(Hr(e)||Ct(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var Xr=S.div`
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
`,Zr=S.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,G=S.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Qr=S.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,$r=S.button`
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
`,ei=S.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,ti=S.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${Ve}
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
`,K=S.button`
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
`,ni=S.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ri=S.div`
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
`,ii=S.button`
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
`;function ai({places:e,drives:t,recent:i,recentLimit:a,currentPath:o,activeKind:s,homePath:c=``,version:l=0,historyVersion:d=0,hiddenViews:f=[],onNavigate:p,onOpenView:h}){let[g,_]=(0,F.useState)([]),v=T(),[y,b]=(0,F.useState)(null),te=j();(0,F.useEffect)(()=>{et().then(e=>{b(e),_(ut(e).filter(e=>e.pinned))},()=>{b(null),_([])})},[l]),(0,F.useEffect)(()=>{if(!x.available)return;let e=g.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||c).filter(e=>e.length>0);return x.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>x.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[g,c]);let ne=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>r(e.path,t));return{name:y?.placeNames?.[t]??n?.name??(u(t)||t),path:t,kind:`folder`,icon:n?.icon??y?.placeIcons?.[t]??null}}),S=s===`files`;return(0,I.jsxs)(di,{children:[(0,I.jsxs)(fi,{children:[!f.includes(`home`)&&(0,I.jsxs)(J,{$active:s===`home`,onClick:e=>h(`home`,A(e)),title:v(`overview`),type:`button`,children:[(0,I.jsx)(Qt,{}),(0,I.jsx)(Y,{children:v(`overview`)})]}),!f.includes(`recycle`)&&(0,I.jsxs)(J,{$active:s===`recycle`,onClick:e=>h(`recycle`,A(e)),title:v(`recycle_bin`),type:`button`,children:[(0,I.jsx)(cn,{}),(0,I.jsx)(Y,{children:v(`recycle_bin`)})]}),!f.includes(`gallery`)&&(0,I.jsxs)(J,{$active:s===`gallery`,onClick:e=>h(`gallery`,A(e)),title:v(`gallery`),type:`button`,children:[(0,I.jsx)(nn,{}),(0,I.jsx)(Y,{children:v(`gallery`)})]})]}),g.map(e=>(0,I.jsxs)(mi,{children:[(0,I.jsxs)(J,{as:`div`,$active:!1,children:[(0,I.jsx)(gi,{children:(0,I.jsx)(ot,{panel:e,size:16})}),(0,I.jsx)(Y,{children:v(e.title)})]}),(0,I.jsx)(hi,{children:(0,I.jsxs)(q,{children:[e.kind===`quick`&&ne(e).map(e=>(0,I.jsxs)(J,{$active:S&&r(o,e.path),onClick:t=>p(e.path,A(t)),title:e.path,type:`button`,children:[(0,I.jsx)(dt,{place:e}),(0,I.jsx)(Y,{children:e.name})]},e.path)),e.kind===`recent`&&i.slice(0,a).map(e=>{let t=lt(te,e.path);return(0,I.jsxs)(J,{$active:S&&r(o,e.path),onClick:t=>e.isDirectory?p(e.path,A(t)):void E(e.path),title:e.path,type:`button`,children:[t&&te.useIcons?(0,I.jsx)(dt,{place:t}):(0,I.jsx)(tt,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,I.jsx)(Y,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,I.jsx)(ci,{historyVersion:d,onNavigate:p}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,I.jsxs)(J,{$active:S&&r(o,e.name),onClick:t=>p(e.name,A(t)),title:e.name,type:`button`,children:[(0,I.jsx)(M,{}),(0,I.jsxs)(Y,{children:[ee(e),(0,I.jsxs)(_i,{children:[m(e.freeSpace),` free`]}),(0,I.jsx)(vi,{children:(0,I.jsx)(yi,{$used:t,$tone:n(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,I.jsx)(li,{onNavigate:p,path:e.path||c})]})})]},e.id)),!f.includes(`settings`)&&(0,I.jsx)(pi,{children:(0,I.jsxs)(J,{$active:s===`settings`,onClick:e=>h(`settings`,A(e)),title:v(`settings`),type:`button`,children:[(0,I.jsx)(tn,{}),(0,I.jsx)(Y,{children:v(`settings`)})]})})]})}var oi=10,si=40;function ci({historyVersion:e=0,onNavigate:t}){let n=T(),[r,i]=(0,F.useState)(null),a=j();return(0,F.useEffect)(()=>{ve().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=lt(a,e.path);return(0,I.jsxs)(J,{$active:!1,onClick:n=>t(e.path,A(n)),title:o(n,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,I.jsx)(dt,{place:r}):(0,I.jsx)(tt,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,I.jsx)(Y,{children:r?.name||e.name})]},e.path)})}function li({path:e,onNavigate:t}){let[n,i]=(0,F.useState)(null);(0,F.useEffect)(()=>{e&&(i(null),he(e,!1).then(i,()=>i(null)))},[e]),(0,F.useEffect)(()=>{if(e&&x.available)return x.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&r(n.data.path,e)&&he(e,!1).then(i,()=>void 0)})},[e]);let a=n?.entries??[],o=a.filter(e=>e.isDirectory).slice(0,oi),s=a.filter(e=>!e.isDirectory).slice(0,si);return(0,I.jsxs)(I.Fragment,{children:[o.map(e=>(0,I.jsx)(ui,{entry:e,onNavigate:t},e.fullPath)),s.map(e=>(0,I.jsx)(ui,{entry:e,onNavigate:t},e.fullPath))]})}function ui({entry:e,onNavigate:t}){let n=j(),r=lt(n,e.fullPath);return(0,I.jsxs)(J,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,A(n)):void E(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,I.jsx)(dt,{place:r}):(0,I.jsx)(tt,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,I.jsx)(Y,{children:r?.name||e.name})]})}var di=S.aside`
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

    &:not(:hover) ${()=>_i},
    &:not(:hover) ${()=>vi} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,fi=S.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,pi=S(fi)`
    margin-top: auto;
`,mi=S.div`
    display: flex;
    flex-direction: column;
`,hi=S.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${di}:hover ${mi}:hover > & {
        grid-template-rows: 1fr;
    }
`,q=S.div`
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
`,J=S.button`
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
`,gi=S.span`
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
`,Y=S.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,_i=S.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,vi=S.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,yi=S.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,X=S.span`
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
`;function bi({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=T(),a=(0,F.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,F.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)},t=()=>r(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[n,r]),(0,I.jsxs)(Si,{ref:a,children:[(0,I.jsxs)(Ci,{$active:n,onClick:()=>r(!n),title:s>0?o(i,s,`k_1_operation_running`,`count_operations_running`):i(`status_center`),type:`button`,children:[(0,I.jsx)(xn,{size:13}),c>0&&(0,I.jsx)(X,{children:c>9?`9+`:c})]}),n&&(0,I.jsxs)(wi,{children:[(0,I.jsxs)(Ti,{children:[(0,I.jsxs)(Ei,{children:[(0,I.jsx)(xn,{size:12}),i(`status_center`)]}),(0,I.jsxs)(Di,{children:[(0,I.jsx)(Oi,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`clear_finished`)}),(0,I.jsx)(ki,{onClick:()=>r(!1),title:i(`close`),type:`button`,children:(0,I.jsx)(En,{size:10})})]})]}),e.length===0?(0,I.jsx)(ji,{children:i(`no_operations_yet`)}):(0,I.jsx)(Ai,{children:e.map(e=>(0,I.jsx)(xi,{task:e},e.id))})]})]})}function xi({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,I.jsxs)(Mi,{children:[(0,I.jsxs)(Ni,{children:[(0,I.jsx)(Pi,{$state:e.state,children:e.state===`done`?(0,I.jsx)(dn,{size:10}):e.state===`failed`?(0,I.jsx)(En,{size:10}):(0,I.jsx)(Fi,{})}),(0,I.jsx)(Ii,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,I.jsxs)(Li,{children:[m(e.bytesDone),` / `,m(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,I.jsxs)(Li,{children:[e.done,` / `,e.total]})]}),i&&(0,I.jsx)(Ri,{children:(0,I.jsx)(zi,{$percent:r,$indeterminate:t===0})}),e.error&&(0,I.jsx)(Bi,{children:e.error})]})}var Si=S.div`
    position: relative;
    display: flex;
`,Ci=S.button`
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
`,wi=S.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${Ve}
    ${Le}
`,Ti=S.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Ei=S.span`
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
`,Di=S.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Oi=S.button`
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
`,ki=S.button`
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
`,Ai=S.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,ji=S.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Mi=S.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${Be}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,Ni=S.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,Pi=S.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,Fi=S.span`
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
`,Ii=S.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Li=S.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Ri=S.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,zi=S.div`
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
`,Bi=S.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function Vi(){return x.available?(await x.request(`fs.history.list`)).entries:[]}async function Hi(e){return x.available?(await x.request(`fs.history.undoTo`,{id:e})).ok:!1}function Ui(){let e=T(),[t,n]=(0,F.useState)(!1),[r,i]=(0,F.useState)([]),[a,o]=(0,F.useState)(!1),s=(0,F.useRef)(null),c=()=>void Vi().then(i,()=>i([]));(0,F.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)},i=()=>n(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,i),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,i)}},[t]);let l=async e=>{o(!0);try{await Hi(e),c()}finally{o(!1)}};return(0,I.jsxs)(Ki,{ref:s,children:[(0,I.jsx)(qi,{$active:t,onClick:()=>n(e=>!e),title:e(`history`),type:`button`,children:(0,I.jsx)(bn,{size:14})}),t&&(0,I.jsxs)(Ji,{children:[(0,I.jsxs)(Yi,{children:[(0,I.jsxs)(Xi,{children:[(0,I.jsx)(bn,{size:12}),e(`history`)]}),(0,I.jsx)(Zi,{onClick:()=>n(!1),title:e(`close`),type:`button`,children:(0,I.jsx)(En,{size:10})})]}),r.length===0?(0,I.jsx)(oa,{children:e(`no_operations_yet`)}):(0,I.jsx)(Qi,{children:r.map(t=>(0,I.jsxs)($i,{children:[(0,I.jsxs)(ea,{children:[(0,I.jsxs)(ta,{children:[(0,I.jsx)(Gi,{label:t.label}),Wi(e,t.label)]}),(0,I.jsx)(na,{children:d(t.at)})]}),t.paths.length>0&&(0,I.jsxs)(ra,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,I.jsx)(ia,{children:(0,I.jsx)(aa,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`undo`)})})]},t.id))})]})]})}function Wi(e,t){if(t===`new_folder`)return e(`new_folder`);if(t===`new_file`)return e(`new_file`);if(t===`paste_text`)return e(`paste_text`);if(t===`paste_image`)return e(`paste_image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`move`?`move_count_items`:t===`copy`?`copy_count_items`:`delete_count_items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`rename`)} ${i[1]}`:t}function Gi({label:e}){return e.startsWith(`delete`)?(0,I.jsx)(cn,{size:13}):e.startsWith(`move`)||e.startsWith(`copy`)?(0,I.jsx)(sn,{size:13}):e.startsWith(`rename`)?(0,I.jsx)(fn,{size:13}):e.startsWith(`compress`)?(0,I.jsx)(yn,{size:13}):e.startsWith(`new`)?(0,I.jsx)(hn,{size:13}):(0,I.jsx)(mn,{size:13})}var Ki=S.div`
    position: relative;
    display: flex;
`,qi=S.button`
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
`,Ji=S.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${Ve}
    ${Le}
`,Yi=S.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Xi=S.span`
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
`,Zi=S.button`
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
`,Qi=S.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,$i=S.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,ea=S.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,ta=S.span`
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
`,na=S.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,ra=S.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ia=S.div`
    display: flex;
    justify-content: flex-end;
`,aa=S.button`
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
`,oa=S.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,sa=(e=>(e[e.Border=-1]=`Border`,e[e.Data=0]=`Data`,e[e.Function=1]=`Function`,e[e.Position=2]=`Position`,e[e.Timing=3]=`Timing`,e[e.Alignment=4]=`Alignment`,e))(sa||{}),ca=[0,1],la=[1,0],ua=[2,3],da=[3,2],fa={L:ca,M:la,Q:ua,H:da},pa=/^\d*$/,ma=/^[A-Z0-9 $%*+./:-]*$/,ha=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`,ga=1,_a=40,va=3,ya=3,ba=40,xa=10,Sa=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],Ca=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],wa=class{constructor(e,t,n,r){if(this.version=e,this.ecc=t,e<ga||e>_a)throw RangeError(`Version value out of range`);if(r<-1||r>7)throw RangeError(`Mask value out of range`);this.size=e*4+17;let i=Array.from({length:this.size}).fill(!1);for(let e=0;e<this.size;e++)this.modules.push(i.slice()),this.types.push(i.map(()=>0));this.drawFunctionPatterns();let a=this.addEccAndInterleave(n);if(this.drawCodewords(a),r===-1){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let n=this.getPenaltyScore();n<e&&(r=t,e=n),this.applyMask(t)}}this.mask=r,this.applyMask(r),this.drawFormatBits(r)}size;mask;modules=[];types=[];getModule(e,t){return e>=0&&e<this.size&&t>=0&&t<this.size&&this.modules[t][e]}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0,sa.Timing),this.setFunctionModule(e,6,e%2==0,sa.Timing);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n===0&&r===0||n===0&&r===t-1||n===t-1&&r===0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.ecc[1]<<3|e,n=t;for(let e=0;e<10;e++)n=n<<1^(n>>>9)*1335;let r=(t<<10|n)^21522;for(let e=0;e<=5;e++)this.setFunctionModule(8,e,Ea(r,e));this.setFunctionModule(8,7,Ea(r,6)),this.setFunctionModule(8,8,Ea(r,7)),this.setFunctionModule(7,8,Ea(r,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,Ea(r,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,Ea(r,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,Ea(r,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;for(let e=0;e<18;e++){let n=Ea(t,e),r=this.size-11+e%3,i=Math.floor(e/3);this.setFunctionModule(r,i,n),this.setFunctionModule(i,r,n)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){let i=Math.max(Math.abs(r),Math.abs(n)),a=e+r,o=t+n;a>=0&&a<this.size&&o>=0&&o<this.size&&this.setFunctionModule(a,o,i!==2&&i!==4,sa.Position)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!==1,sa.Alignment)}setFunctionModule(e,t,n,r=sa.Function){this.modules[t][e]=n,this.types[t][e]=r}addEccAndInterleave(e){let t=this.version,n=this.ecc;if(e.length!==Va(t,n))throw RangeError(`Invalid argument`);let r=Ca[n[0]][t],i=Sa[n[0]][t],a=Math.floor(Ba(t)/8),o=r-a%r,s=Math.floor(a/r),c=[],l=Ha(i);for(let t=0,n=0;t<r;t++){let r=e.slice(n,n+s-i+(t<o?0:1));n+=r.length;let a=Ua(r,l);t<o&&r.push(0),c.push(r.concat(a))}let u=[];for(let e=0;e<c[0].length;e++)c.forEach((t,n)=>{(e!==s-i||n>=o)&&u.push(t[e])});return u}drawCodewords(e){if(e.length!==Math.floor(Ba(this.version)/8))throw RangeError(`Invalid argument`);let t=0;for(let n=this.size-1;n>=1;n-=2){n===6&&(n=5);for(let r=0;r<this.size;r++)for(let i=0;i<2;i++){let a=n-i,o=n+1&2?r:this.size-1-r;!this.types[o][a]&&t<e.length*8&&(this.modules[o][a]=Ea(e[t>>>3],7-(t&7)),t++)}}}applyMask(e){if(e<0||e>7)throw RangeError(`Mask value out of range`);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw Error(`Unreachable`)}!this.types[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[t][a]===n?(r++,r===5?e+=va:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*ba),n=this.modules[t][a],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*ba}for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[a][t]===n?(r++,r===5?e+=va:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*ba),n=this.modules[a][t],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*ba}for(let t=0;t<this.size-1;t++)for(let n=0;n<this.size-1;n++){let r=this.modules[t][n];r===this.modules[t][n+1]&&r===this.modules[t+1][n]&&r===this.modules[t+1][n+1]&&(e+=ya)}let t=0;for(let e of this.modules)t=e.reduce((e,t)=>e+ +!!t,t);let n=this.size*this.size,r=Math.ceil(Math.abs(t*20-n*10)/n)-1;return e+=r*xa,e}getAlignmentPatternPositions(){if(this.version===1)return[];{let e=Math.floor(this.version/7)+2,t=this.version===32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}finderPenaltyCountPatterns(e){let t=e[1],n=t>0&&e[2]===t&&e[3]===t*3&&e[4]===t&&e[5]===t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]===0&&(e+=this.size),t.pop(),t.unshift(e)}};function Ta(e,t,n){if(t<0||t>31||e>>>t)throw RangeError(`Value out of range`);for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function Ea(e,t){return!!(e>>>t&1)}var Da=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw RangeError(`Invalid argument`);this.bitData=n.slice()}getData(){return this.bitData.slice()}},Oa=[1,10,12,14],ka=[2,9,11,13],Aa=[4,8,16,16];function ja(e,t){return e[Math.floor((t+7)/17)+1]}function Ma(e){let t=[];for(let n of e)Ta(n,8,t);return new Da(Aa,e.length,t)}function Na(e){if(!Ia(e))throw RangeError(`String contains non-numeric characters`);let t=[];for(let n=0;n<e.length;){let r=Math.min(e.length-n,3);Ta(Number.parseInt(e.substring(n,n+r),10),r*3+1,t),n+=r}return new Da(Oa,e.length,t)}function Pa(e){if(!La(e))throw RangeError(`String contains unencodable characters in alphanumeric mode`);let t=[],n=0;for(;n+2<=e.length;n+=2){let r=ha.indexOf(e.charAt(n))*45;r+=ha.indexOf(e.charAt(n+1)),Ta(r,11,t)}return n<e.length&&Ta(ha.indexOf(e.charAt(n)),6,t),new Da(ka,e.length,t)}function Fa(e){return e===``?[]:Ia(e)?[Na(e)]:La(e)?[Pa(e)]:[Ma(za(e))]}function Ia(e){return pa.test(e)}function La(e){return ma.test(e)}function Ra(e,t){let n=0;for(let r of e){let e=ja(r.mode,t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}function za(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)===`%`?(t.push(Number.parseInt(e.substring(n+1,n+3),16)),n+=2):t.push(e.charCodeAt(n));return t}function Ba(e){if(e<ga||e>_a)throw RangeError(`Version number out of range`);let t=(16*e+128)*e+64;if(e>=2){let n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return t}function Va(e,t){return Math.floor(Ba(e)/8)-Sa[t[0]][e]*Ca[t[0]][e]}function Ha(e){if(e<1||e>255)throw RangeError(`Degree out of range`);let t=[];for(let n=0;n<e-1;n++)t.push(0);t.push(1);let n=1;for(let r=0;r<e;r++){for(let e=0;e<t.length;e++)t[e]=Wa(t[e],n),e+1<t.length&&(t[e]^=t[e+1]);n=Wa(n,2)}return t}function Ua(e,t){let n=t.map(e=>0);for(let r of e){let e=r^n.shift();n.push(0),t.forEach((t,r)=>n[r]^=Wa(t,e))}return n}function Wa(e,t){if(e>>>8||t>>>8)throw RangeError(`Byte out of range`);let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return n}function Ga(e,t,n=1,r=40,i=-1,a=!0){if(!(ga<=n&&n<=r&&r<=_a)||i<-1||i>7)throw RangeError(`Invalid value`);let o,s;for(o=n;;o++){let n=Va(o,t)*8,i=Ra(e,o);if(i<=n){s=i;break}if(o>=r)throw RangeError(`Data too long`)}for(let e of[la,ua,da])a&&s<=Va(o,e)*8&&(t=e);let c=[];for(let t of e){Ta(t.mode[0],4,c),Ta(t.numChars,ja(t.mode,o),c);for(let e of t.getData())c.push(e)}let l=Va(o,t)*8;Ta(0,Math.min(4,l-c.length),c),Ta(0,(8-c.length%8)%8,c);for(let e=236;c.length<l;e^=253)Ta(e,8,c);let u=Array.from({length:Math.ceil(c.length/8)},()=>0);return c.forEach((e,t)=>u[t>>>3]|=e<<7-(t&7)),new wa(o,t,u,i)}function Ka(e,t){let{ecc:n=`L`,boostEcc:r=!1,minVersion:i=1,maxVersion:a=40,maskPattern:o=-1,border:s=1}=t||{},c=typeof e==`string`?Fa(e):Array.isArray(e)?[Ma(e)]:void 0;if(!c)throw Error(`uqr only supports encoding string and binary data, but got: ${typeof e}`);let l=Ga(c,fa[n],i,a,o,r),u=qa({version:l.version,maskPattern:l.mask,size:l.size,data:l.modules,types:l.types},s);return t?.invert&&(u.data=u.data.map(e=>e.map(e=>!e))),t?.onEncoded?.(u),u}function qa(e,t=1){if(!t)return e;let{size:n}=e,r=n+t*2;e.size=r,e.data.forEach(e=>{for(let n=0;n<t;n++)e.unshift(!1),e.push(!1)});for(let n=0;n<t;n++)e.data.unshift(Array.from({length:r},e=>!1)),e.data.push(Array.from({length:r},e=>!1));let i=sa.Border;e.types.forEach(e=>{for(let n=0;n<t;n++)e.unshift(i),e.push(i)});for(let n=0;n<t;n++)e.types.unshift(Array.from({length:r},e=>i)),e.types.push(Array.from({length:r},e=>i));return e}function Ja(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Ya(e,t={}){let n=Ka(e,t),{pixelSize:r=10,whiteColor:i=`white`,blackColor:a=`black`}=t,o=n.size*r,s=n.size*r,c=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${o}">`,l=[];for(let e=0;e<n.size;e++)for(let t=0;t<n.size;t++){let i=t*r,a=e*r;n.data[e][t]&&l.push(`M${i},${a}h${r}v${r}h-${r}z`)}return c+=`<rect fill="${Ja(i)}" width="${s}" height="${o}"/>`,c+=`<path fill="${Ja(a)}" d="${l.join(``)}"/>`,c+=`</svg>`,c}function Xa({currentFolder:e}){let t=T(),[n,i]=(0,F.useState)(!1),[a,o]=(0,F.useState)(null),[s,c]=(0,F.useState)(!1),l=(0,F.useRef)(null);(0,F.useEffect)(()=>{if(!n)return;let e=()=>void jt().then(o,()=>void 0);e();let t=window.setInterval(e,2500),r=e=>{l.current?.contains(e.target)||i(!1)},a=()=>i(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,a),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,a)}},[n]),(0,F.useEffect)(()=>{let e=()=>void jt().then(o,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{o(await e())}finally{c(!1)}},d=a?.shares.some(t=>r(t.path,e))??!1;return(0,I.jsxs)(Za,{ref:l,children:[(0,I.jsxs)(Qa,{$active:n,onClick:()=>i(e=>!e),title:t(`share_folders`),type:`button`,children:[(0,I.jsx)(un,{size:15}),a&&a.shares.length>0&&(0,I.jsx)(X,{children:a.shares.length>9?`9+`:a.shares.length})]}),n&&(0,I.jsxs)($a,{children:[(0,I.jsxs)(eo,{children:[(0,I.jsxs)(to,{children:[(0,I.jsx)(vn,{size:12}),t(`share`)]}),(0,I.jsx)(no,{onClick:()=>i(!1),title:t(`close`),type:`button`,children:(0,I.jsx)(En,{size:10})})]}),(0,I.jsxs)(ro,{children:[(0,I.jsxs)(io,{children:[(0,I.jsx)(wn,{size:15}),(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`strong`,{children:a?.deviceName||t(`this_device`)}),(0,I.jsx)(lo,{children:a?.fingerprint??``})]})]}),a?.shares.length===0&&(0,I.jsx)(uo,{children:t(`no_folders_are_shared_yet`)}),a?.shares.map(e=>(0,I.jsxs)(fo,{children:[(0,I.jsxs)(po,{children:[(0,I.jsx)(mo,{title:e.path,children:e.name}),(0,I.jsx)(go,{disabled:s,onClick:()=>void u(()=>Ut(e.id)),title:t(`stop_sharing`),type:`button`,children:(0,I.jsx)(En,{size:10})})]}),(0,I.jsx)(ho,{title:e.path,children:e.path}),(0,I.jsxs)(_o,{children:[(0,I.jsxs)(vo,{$active:e.mode===`client`,onClick:()=>void u(()=>rt(e.id,`client`)),title:t(`only_paired_devices_can_open_this_folder_in_the_app`),type:`button`,children:[(0,I.jsx)(wn,{size:11}),t(`app`)]}),(0,I.jsxs)(vo,{$active:e.mode===`web`,onClick:()=>void u(()=>rt(e.id,`web`)),title:t(`any_device_with_a_browser_can_open_this_folder`),type:`button`,children:[(0,I.jsx)(Yt,{size:11}),t(`web`)]})]})]},e.id)),(0,I.jsxs)(yo,{disabled:s||e.length===0||d,onClick:()=>void u(()=>kt(e,`client`)),title:d?t(`this_folder_is_already_shared`):e,type:`button`,children:[(0,I.jsx)(hn,{size:12}),t(`share_this_folder`)]}),a?.webRunning&&(0,I.jsxs)(bo,{children:[(0,I.jsxs)(xo,{children:[(0,I.jsx)(Yt,{size:12}),t(`browser_access`)]}),(0,I.jsxs)(oo,{children:[(0,I.jsx)(so,{children:a.urls.map(e=>(0,I.jsx)(So,{onClick:()=>void N(e),type:`button`,children:e},e))}),a.preferredUrl&&(0,I.jsx)(ao,{value:a.preferredUrl})]}),(0,I.jsx)(lo,{children:t(`open_one_of_these_addresses_on_any_device_on_the_same_network`)})]})]})]})]})}var Za=S.div`
    position: relative;
    display: flex;
`,Qa=S.button`
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
`,$a=S.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${Ve}
    ${Le}
`,eo=S.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,to=S.span`
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
`,no=S.button`
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
`,ro=S.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,io=S.div`
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
`;function ao({value:e}){let t=T(),n=(0,F.useMemo)(()=>Ya(e,{ecc:`M`,border:2,pixelSize:4,blackColor:`#000000`,whiteColor:`#ffffff`}),[e]);return(0,I.jsx)(co,{dangerouslySetInnerHTML:{__html:n},role:`img`,title:t(`scan_the_code_to_open_this_share_on_a_phone`)})}var oo=S.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,so=S.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
`,co=S.div`
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
`,lo=S.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,uo=S.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,fo=S.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,po=S.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,mo=S.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ho=S.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,go=S.button`
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
`,_o=S.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,vo=S.button`
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
`,yo=S.button`
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
`,bo=S.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,xo=S.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,So=S.button`
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
`;function Co(){let e=T();return(0,I.jsx)(wo,{title:e(`always_applies_to_every_folder`),children:e(`global`)})}var wo=S.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`;function To({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=T(),[s,c]=(0,F.useState)(!1),l=(0,F.useRef)(null);(0,F.useEffect)(()=>{if(!s)return;let e=()=>c(!1),t=e=>{l.current?.contains(e.target)||c(!1)},n=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`keydown`,n)}},[s]),(0,F.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=Rt.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,I.jsxs)(Eo,{ref:l,children:[(0,I.jsx)(Do,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`view`),type:`button`,children:e.mode===`grid`?(0,I.jsx)(Zt,{size:14}):(0,I.jsx)(rn,{size:14})}),s&&(0,I.jsxs)(Oo,{children:[(0,I.jsxs)(ko,{children:[(0,I.jsx)(on,{size:11}),o(`view`)]}),(0,I.jsxs)(jo,{children:[(0,I.jsxs)(Mo,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,I.jsx)(rn,{size:12}),` `,o(`list`)]}),(0,I.jsxs)(Mo,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,I.jsx)(Zt,{size:12}),` `,o(`grid`)]})]}),(0,I.jsxs)(ko,{children:[(0,I.jsx)(rn,{size:11}),o(`list_icon_size`)]}),(0,I.jsxs)(No,{children:[(0,I.jsx)(`input`,{"aria-label":o(`list_icon_size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,I.jsxs)(Po,{children:[e.iconSize,`px`]})]}),(0,I.jsxs)(ko,{children:[(0,I.jsx)(Zt,{size:11}),o(`grid_size`)]}),(0,I.jsxs)(No,{children:[(0,I.jsx)(`input`,{"aria-label":o(`grid_size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,I.jsxs)(Po,{children:[e.gridSize,`px`]})]}),(0,I.jsxs)(ko,{children:[(0,I.jsx)(Tn,{size:11}),o(`columns`),(0,I.jsx)(Co,{}),(0,I.jsx)(Ao,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:o(`reset_column_widths`),type:`button`,children:o(`reset_widths`)})]}),Rt.map(e=>(0,I.jsxs)(Fo,{children:[(0,I.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,I.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,I.jsxs)(Fo,{children:[(0,I.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,I.jsx)(`span`,{children:o(`link_target_after_the_name`)})]}),(0,I.jsxs)(ko,{children:[(0,I.jsx)(en,{size:11}),o(`preview_panel`),(0,I.jsx)(Co,{})]}),(0,I.jsxs)(Fo,{children:[(0,I.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,I.jsx)(`span`,{children:o(`preview_under_the_list`)})]})]})]})}var Eo=S.div`
    position: relative;
    display: flex;
    height: 100%;
`,Do=S.button`
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
`,Oo=S.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${Ve}
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
`,ko=S.div`
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
`,Ao=S.button`
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
`,jo=S.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Mo=S.button`
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
`,No=S.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,Po=S.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,Fo=S.label`
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
`,Io=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),Lo=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),Ro=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),zo=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,I.jsx)(`path`,{d:`M2 5h6`})}),Bo=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,I.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Vo=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,I.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,I.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function Ho({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:p,activityOpen:m,onActivityOpenChange:ee,trayCount:h,trayVisible:g,onToggleTray:_,split:v,canSplit:y,onToggleSplit:te,details:ne,canDetails:x,onToggleDetails:S,shortcuts:re,currentFolder:C}){let w=T(),ie=b(),oe=ae(),[se,ce]=(0,F.useState)({left:!1,right:!1}),[le,ue]=(0,F.useState)(null),[de,fe]=(0,F.useState)(null),E=(0,F.useRef)(null),pe=(0,F.useRef)(null),me=(0,F.useRef)(null),he=(0,F.useCallback)(()=>{let e=pe.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;ce(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,F.useEffect)(()=>{he();let e=pe.current;if(!e)return;let t=new ResizeObserver(he);return t.observe(e),()=>t.disconnect()},[he,e.length]),(0,F.useEffect)(()=>()=>{E.current&&window.clearTimeout(E.current.timer)},[]),(0,F.useEffect)(()=>{me.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let ge=e=>pe.current?.scrollBy({left:e,behavior:`smooth`}),_e=()=>{E.current&&window.clearTimeout(E.current.timer),E.current=null,fe(null)};return(0,I.jsxs)(Ko,{children:[(0,I.jsx)(qo,{children:(0,I.jsx)(wn,{size:19})}),(0,I.jsxs)(Jo,{children:[se.left&&(0,I.jsx)(Xo,{onClick:()=>ge(-180),title:w(`scroll_tabs_left`),type:`button`,children:(0,I.jsx)(Io,{})}),(0,I.jsx)(Yo,{onScroll:he,onWheel:e=>{let t=pe.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:pe,children:e.map(e=>(0,I.jsxs)(Zo,{$active:e.id===t,$dragging:le===e.id,$dropTarget:de===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!ft(t.dataTransfer)||!Uo(e)||(t.preventDefault(),E.current?.id===e.id))return;_e(),fe(e.id);let r=window.setTimeout(()=>{n(e.id),E.current=null},500);E.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(E.current?.id===e.id||de===e.id)&&_e()},onDragEnd:()=>{ue(null),_e()},onDragOver:t=>{(le||ft(t.dataTransfer)&&Uo(e))&&(t.preventDefault(),ft(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>ue(e.id),onDrop:t=>{if(t.preventDefault(),le)a(le,e.id);else if(Uo(e)&&ft(t.dataTransfer)){let{paths:r,move:i}=At(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}ue(null),_e()},onClick:()=>n(e.id),ref:e.id===t?me:void 0,title:e.path||e.title,type:`button`,children:[(0,I.jsx)(Wo,{tab:e}),(0,I.jsx)(Qo,{children:e.title}),e.partner&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)($o,{children:`|`}),(0,I.jsx)(Go,{place:e.partner.place}),(0,I.jsx)(Qo,{children:e.partner.title})]}),(0,I.jsx)(es,{"data-shortcut":k(re.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:w(`close_tab`),children:(0,I.jsx)(Ro,{})})]},e.id))}),se.right&&(0,I.jsx)(Xo,{onClick:()=>ge(180),title:w(`scroll_tabs_right`),type:`button`,children:(0,I.jsx)(Lo,{})}),(0,I.jsx)(ts,{"data-shortcut":k(re.newTab),onClick:i,title:w(`new_tab`),type:`button`,children:(0,I.jsx)(hn,{size:13})})]}),(0,I.jsx)(ns,{...oe}),(0,I.jsxs)(rs,{children:[(0,I.jsx)(as,{$active:v,"data-shortcut":k(re.splitView),disabled:!y,onClick:te,title:w(v?`close_split_view`:`split_view`),type:`button`,children:(0,I.jsx)(Tn,{size:15})}),(0,I.jsx)(as,{$active:ne,disabled:!x,onClick:S,title:w(ne?`hide_details_panel`:`show_details_panel`),type:`button`,children:(0,I.jsx)(on,{size:15})}),(0,I.jsxs)(is,{$active:g,onClick:_,title:w(g?`hide_file_tray`:`show_file_tray`),type:`button`,children:[(0,I.jsx)(an,{size:14}),h>0&&(0,I.jsx)(X,{children:h>9?`9+`:h})]}),(0,I.jsx)(Ui,{}),(0,I.jsx)(Xa,{currentFolder:C}),(0,I.jsx)(bi,{tasks:f,onClear:p,open:m,onOpenChange:ee}),(0,I.jsx)(To,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,I.jsx)(os,{onClick:ie.minimize,title:w(`minimize`),type:`button`,children:(0,I.jsx)(zo,{})}),(0,I.jsx)(os,{onClick:ie.toggleMaximize,title:ie.maximized?w(`restore`):w(`maximize`),type:`button`,children:ie.maximized?(0,I.jsx)(Vo,{}):(0,I.jsx)(Bo,{})}),(0,I.jsx)(ss,{onClick:ie.close,title:w(`close`),type:`button`,children:(0,I.jsx)(Ro,{})})]})]})}function Uo(e){return e.kind===`files`&&(!v(e.path)||a(e.path))}function Wo({tab:e}){switch(e.kind){case`home`:return(0,I.jsx)(Dn,{size:13});case`settings`:return(0,I.jsx)(tn,{size:13});case`recycle`:return(0,I.jsx)(cn,{size:13});default:return e.archive?(0,I.jsx)(yn,{size:13}):(0,I.jsx)(Go,{place:e.place})}}function Go({place:e}){return e?(0,I.jsx)(dt,{place:e,size:13}):(0,I.jsx)(gn,{size:13})}var Ko=S.header`
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
`,qo=S.span`
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
`,Jo=S.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,Yo=S.div`
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
`,Xo=S.button`
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
`,Zo=S.button`
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
`,Qo=S.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$o=S.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,es=S.span`
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
`,ts=S.button`
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
`,ns=S.div`
    flex: 1;
    min-width: 28px;
`,rs=S.div`
    display: flex;
    flex-shrink: 0;
`,is=S.button`
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
`,as=S.button`
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
`,os=S.button`
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
`,ss=S(os)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function cs(){let[e,t]=(0,F.useState)(null),n=(0,F.useRef)(null),r=(0,F.useRef)(void 0);return(0,F.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`blur`,i),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`blur`,i),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,rr.createPortal)((0,I.jsx)(ls,{tooltip:e}),document.body):null}function ls({tooltip:e}){let t=(0,F.useRef)(null),[n,r]=(0,F.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,F.useState)(()=>e.bottom+6);return(0,F.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,I.jsxs)(us,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,I.jsx)(ds,{children:e.text}),e.shortcut&&(0,I.jsx)(fs,{children:e.shortcut})]})}var us=S.div`
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
    ${Be}
`,ds=S.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,fs=S.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,ps={home:`overview`,settings:`settings`,recycle:`recycle_bin`,gallery:`gallery`},ms=[{id:`ui`,label:`interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`interface`},{id:`names`,label:`file_names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`interface`},{id:`details`,label:`details_panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`interface`},{id:`path`,label:`address_bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`monospace`},{id:`mono`,label:`monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`text_preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`monospace`}];function hs(e){return`"${e.replaceAll(`"`,``)}"`}function gs(e){let t=document.documentElement.style;for(let n of ms){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${hs(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function _s(){return x.available?(await x.request(`app.fonts`)).fonts??[]:[]}function vs({deviceName:e,code:t,onAccept:n,onReject:r}){let i=T(),a=(0,F.useRef)(null);return(0,F.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,rr.createPortal)((0,I.jsx)(ys,{children:(0,I.jsxs)(bs,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsxs)(xs,{children:[(0,I.jsx)(un,{size:15}),i(`pair_for_sharing`)]}),(0,I.jsx)(Ss,{children:i(`device_wants_to_pair_with_this_device_for_sharing_folders`,{device:e})}),(0,I.jsx)(Cs,{children:t}),(0,I.jsx)(ws,{children:i(`check_that_the_other_device_shows_the_same_code_before_accepting`)}),(0,I.jsxs)(Ts,{children:[(0,I.jsx)(Es,{onClick:r,type:`button`,children:i(`reject`)}),(0,I.jsx)(Ds,{onClick:n,ref:a,type:`button`,children:i(`accept`)})]})]})}),document.body)}var ys=S.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${Be}
`,bs=S.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${We}
`,xs=S.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,Ss=S.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,Cs=S.div`
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
`,ws=S.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Ts=S.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,Es=S.button`
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
`,Ds=S(Es)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,Os=S.button`
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
`,ks=S.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,As=`modulepreload`,js=function(e){return`/`+e},Ms={},Ns=function(e){return e.pathname.endsWith(`.css`)},Ps=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Fs=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=js(t,n);let r=s(t),i=Ns(r);return Ps(Ms,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:As,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Is=(0,F.lazy)(()=>Fs(()=>import(`./OverviewView-Cc872J0X.js`).then(e=>e.n).then(e=>({default:e.OverviewView})),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),Ls=(0,F.lazy)(()=>Fs(()=>import(`./SettingsView-DLL-yMKk.js`).then(e=>({default:e.SettingsView})),__vite__mapDeps([11,1,2,4,5,3,6,7,9,8,10]))),Rs=(0,F.lazy)(()=>Fs(()=>import(`./GalleryView-DkQl7HJJ.js`).then(e=>e.n).then(e=>({default:e.GalleryView})),__vite__mapDeps([12,1,2,4,5,3,6,9]))),zs=(0,F.lazy)(()=>Fs(()=>import(`./RecycleView-D0OK5yNA.js`).then(e=>({default:e.RecycleView})),__vite__mapDeps([13,1,2,4,5,3,6,8]))),Bs=0,Vs=new Set;function Hs(e){Vs.add(e),x.send({type:`app.navigate.done`,payload:{path:e}})}var Us=20,Ws=[{value:`0`,label:`auto`},{value:`932`,label:`japanese_cp932`},{value:`936`,label:`simplified_chinese_cp936`},{value:`950`,label:`traditional_chinese_cp950`},{value:`949`,label:`korean_cp949`},{value:`1252`,label:`western_cp1252`},{value:`1250`,label:`central_european_cp1250`},{value:`1251`,label:`cyrillic_cp1251`},{value:`1254`,label:`turkish_cp1254`},{value:`1253`,label:`greek_cp1253`},{value:`1256`,label:`arabic_cp1256`},{value:`1255`,label:`hebrew_cp1255`},{value:`1257`,label:`baltic_cp1257`},{value:`874`,label:`thai_cp874`},{value:`65001`,label:`utf_8`}];function Gs(e){return e.history[e.index]??Ur(`home`)}function Z(e){return Wr(Gs(e))??`files`}function Q(e){let t=Gs(e);return Wr(t)?``:e.listing?.path||t}function Ks(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||Z(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function qs(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function Js(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||Ie.iconSize,gridSize:e.view?.gridSize||t.gridSize||Ie.gridSize,sort:e.view?.sort??Ie.sort,sortDescending:e.view?.sortDescending??Ie.sortDescending,columns:t.columns??oe.columns??[]}}function Ys(e=Ur(`home`)){return Bs+=1,{id:`tab-${Bs}`,listing:null,loading:!Wr(e),error:null,history:[e],index:0,fresh:!0,view:null}}function Xs(e){return e instanceof Error?e.message:String(e)}function Zs(e){let t=Et(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return at(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function Qs(e){let t=u(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function $s(e){return v(e)?Me(e):void 0}function ec(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return o(e,t.entries.length,`k_1_item_size`,`count_items_size`,{size:m(n)})}function tc(){let e=T(),[n,i]=(0,F.useState)(()=>[Ys()]),[d,f]=(0,F.useState)(()=>n[0].id),[m,ee]=(0,F.useState)(null),[_,y]=(0,F.useState)(()=>{let e=qe(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[b,te]=(0,F.useState)([]),[ne,S]=(0,F.useState)([]),[C,ae]=(0,F.useState)(null),[ve,De]=(0,F.useState)(null),[ke,Ae]=(0,F.useState)(null),je=w(),[D,Ne]=(0,F.useState)(_e),[Fe,Le]=(0,F.useState)(0),[Be,Ve]=(0,F.useState)(0),[We,Ge]=(0,F.useState)(0),[Je,Xe]=(0,F.useState)(_e),[Qe,tt]=(0,F.useState)(0),[rt,at]=(0,F.useState)(0),[ot,dt]=(0,F.useState)(0),[bt,xt]=(0,F.useState)(0),Et=(0,F.useRef)(bt);Et.current=bt;let[kt,At]=(0,F.useState)([]),[jt,Pt]=(0,F.useState)(10),[j,Rt]=(0,F.useState)(null),Ut=ie(s(j?.themeMode)),Jt=(0,F.useMemo)(()=>(j?.favorites??[]).map(e=>t(e.path)),[j?.favorites]),[Zt,en]=(0,F.useState)(0),[M,rn]=(0,F.useState)(ct),[an,on]=(0,F.useState)(0),[sn,un]=(0,F.useState)(0),[dn,fn]=(0,F.useState)(0),[pn,gn]=(0,F.useState)(!0),[_n,vn]=(0,F.useState)(()=>{let e=qe(`yafm.preview.width`,320);return e>=220?e:320}),[bn,xn]=(0,F.useState)(null),[wn,Tn]=(0,F.useState)(null),[En,Dn]=(0,F.useState)({kind:null,info:null}),[N,kn]=(0,F.useState)(`primary`),[An,Mn]=(0,F.useState)(null),[Nn,Pn]=(0,F.useState)(null),[P,Fn]=(0,F.useState)(null),[In,Ln]=(0,F.useState)(null),[Rn,zn]=(0,F.useState)({primary:0,secondary:0}),[Bn,Vn]=(0,F.useState)({primary:null,secondary:null}),[Hn,Un]=(0,F.useState)(null),[Wn,Gn]=(0,F.useState)([]),[Kn,qn]=(0,F.useState)(!1),[Xn,Zn]=(0,F.useState)(null),[$n,er]=(0,F.useState)(``),tr=(0,F.useRef)([]),nr=(0,F.useRef)([]),[rr,ar]=(0,F.useState)([]),[or,sr]=(0,F.useState)(!1),cr=(0,F.useMemo)(()=>or?new Set(rr.map(e=>e.path)):new Set,[rr,or]),[lr,ur]=(0,F.useState)(!1),[dr,fr]=(0,F.useState)([]),[pr,mr]=(0,F.useState)(null),hr=(0,F.useRef)(0),[gr,_r]=(0,F.useState)(()=>{let e=Te(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?qs({x:e.x,y:e.y}):qs({x:Math.max(20,window.innerWidth-340),y:110})}),vr=(0,F.useCallback)(()=>{_r(e=>qs(e)),ur(!0)},[]),L=n.find(e=>e.id===d)??n[0],R=Z(L),yr=Gs(L),z=Q(L),xr=R===`files`?L.listing?.parent??Zs(z):null,B=L.splitWith?n.find(e=>e.id===L.splitWith):void 0,Sr=R===`files`&&B!==void 0,Cr=B?Q(B):``,wr=B?B.listing?.parent??Zs(Cr):null,V=Sr&&B&&N===`secondary`?B:L,Dr=j?.defaultView??oe,Or=Js(V,Dr);(0,F.useEffect)(()=>{h(j?.accentColor,j?.secondaryColor,Ut)},[j?.accentColor,j?.secondaryColor,Ut]),(0,F.useEffect)(()=>{gs(j?.fonts)},[j?.fonts]),(0,F.useEffect)(()=>{p(j?.timeFormat,j?.timeFormatPattern),l(j?.relativeTime,j?.relativeTimeWindowMinutes)},[j?.timeFormat,j?.timeFormatPattern,j?.relativeTime,j?.relativeTimeWindowMinutes]),(0,F.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!j?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[j?.backgroundSource]),(0,F.useEffect)(()=>(Ee(e=>new Promise(t=>{mr({id:++hr.current,prompt:e,resolve:t})})),()=>Ee(null)),[]),(0,F.useEffect)(()=>{kn(`primary`)},[d]),(0,F.useEffect)(()=>{Xe(_e),at(0),dt(0)},[R]),(0,F.useEffect)(()=>{at(0)},[Je.query,Je.matchCase,Je.regex]),(0,F.useEffect)(()=>{at(e=>ot===0?0:Math.min(e,ot-1))},[ot]);let H=Or.columns.includes(`linkCount`),kr=(0,F.useMemo)(()=>{let e={},n=ut(j),r={};for(let[e,n]of Object.entries(j?.placeNames??{}))r[t(e)]=n;for(let n of b)e[t(n.path)]=n;for(let i of n)if(i.kind===`quick`&&i.id!==`quick`)for(let n of i.places??[]){let i=t(n),a=b.find(e=>t(e.path)===i);e[i]={name:r[i]??a?.name??(u(n)||n),path:n,kind:`folder`,icon:a?.icon??j?.placeIcons?.[n]??null}}return e},[b,j]),Ar=(0,F.useMemo)(()=>({places:kr,useIcons:j?.systemIcons===!1}),[kr,j?.systemIcons]),jr=j?.defaultView?.showImages??!0,Mr=j?.defaultView?.imageStripHeight??oe.imageStripHeight,Nr=R===`home`?(0,I.jsx)(Qt,{size:13}):R===`settings`?(0,I.jsx)(tn,{size:13}):R===`recycle`?(0,I.jsx)(cn,{size:13}):R===`gallery`?(0,I.jsx)(nn,{size:13}):void 0,Fr=D.open&&D.query.length>0,Ir=(0,F.useDeferredValue)(D),Lr=(0,F.useMemo)(()=>Fr&&V.listing?V.listing.entries.filter(e=>le(e.isDirectory?st(Ar,e.fullPath,e.name):e.name,Ir)).map(e=>e.fullPath):[],[Fr,Ir,V.listing,Ar]);(0,F.useEffect)(()=>{Le(0)},[D.query,D.matchCase,D.regex,V.listing?.path]);let Rr=Lr.length===0?-1:Math.min(Fe,Lr.length-1),U=(0,F.useCallback)(()=>{Ne(e=>({...e,open:!1,query:``})),Le(0)},[]),zr=(0,F.useCallback)(()=>{Ne(e=>({...e,open:!0})),Ve(e=>e+1)},[]),Br=(0,F.useCallback)(()=>{Xe(e=>({...e,open:!0})),tt(e=>e+1)},[]),Vr=(0,F.useCallback)(()=>{Xe(_e),at(0),dt(0)},[]),Hr=(0,F.useCallback)(e=>{at(t=>ot===0?0:(Math.min(t,ot-1)+e+ot)%ot)},[ot]),qr=(0,F.useCallback)(e=>{Ne(t=>({...t,open:!0,query:t.open?t.query+e:e})),Ve(e=>e+1)},[]),Jr=(0,F.useCallback)(e=>{Le(t=>Lr.length===0?0:(Math.min(t,Lr.length-1)+e+Lr.length)%Lr.length)},[Lr.length]),W=(0,F.useRef)({tabs:n,activeId:d,activePane:N});W.current={tabs:n,activeId:d,activePane:N};let Yr=(0,F.useRef)(j);Yr.current=j;let Xr=(0,F.useRef)(!1),Zr=(0,F.useRef)([]),G=(0,F.useCallback)((e,t)=>{i(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Qr=(0,F.useRef)(new Map),$r=(0,F.useCallback)(e=>{let t=(Qr.current.get(e)??0)+1;return Qr.current.set(e,t),()=>Qr.current.get(e)===t},[]),ei=(0,F.useCallback)((e,t)=>{x.available&&t&&e===Ks(W.current)&&x.send({type:`fs.focus`,payload:{path:t}})},[]),ti=(0,F.useCallback)(async(e,t,n)=>{if(!(t&&Ct(t)))try{let r=(await Ye(t,H)).listing;if(!n()||!r)return;G(e,e=>e.loading?{listing:{...r,total:r.entries.length,signature:0},view:r.view??null}:{})}catch{}},[H,G]),K=(0,F.useCallback)(async(e,t,n=!1)=>{let i=$r(e);U(),ei(e,t);let a=!n||!W.current.tabs.find(t=>t.id===e)?.listing,o=!n&&t!==void 0;G(e,e=>{if(!o)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let i=e.history[e.index],a=i!==void 0&&r(i,t);return{listing:null,loading:!0,error:null,fresh:!1,history:a?e.history:[...e.history.slice(0,e.index+1),t],index:a?e.index:e.index+1}});try{a&&ti(e,t,i);let r=t&&Ct(t)?await It(t):await he(t,!0,H,Et.current,t?$s(t):void 0,e);if(!i())return;G(e,e=>({listing:r,view:r.view??null,loading:!1,fresh:!1,history:o?e.history.map((t,n)=>n===e.index?r.path:t):e.history,index:e.index})),!n&&!Ct(r.path)&&be(r.path).then(()=>en(e=>e+1))}catch(r){if(!i())return;let a=W.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?Q(a):``,s=Zs(o),c=Xs(r);if(o&&Se(c)){let r=g(o),a=await Re(r,!!Me(r));if(a){Ke(r,a),i()&&K(e,t,n);return}}G(e,e=>({listing:{path:o,parent:s,total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[$r,H,G,ei,U,ti]),ni=(0,F.useRef)(new Set),ri=(0,F.useCallback)(async e=>{let t=W.current.tabs.find(t=>t.id===e),n=t?.listing;if(!t||Z(t)!==`files`||!n)return;let i=n.entries.length;if(i<=0||i>=(n.total??0)||ii.current.has(e))return;let a=`${e}|${n.path}|${i}`;if(ni.current.add(a))try{let t=await ye(n.path,i,n.view?.sort??`name`,n.view?.sortDescending??!1);G(e,e=>{let a=e.listing;return!a||!r(a.path,n.path)||a.entries.length!==i||a.view?.sort!==n.view?.sort?{}:{listing:{...a,entries:[...a.entries,...t.entries],total:t.total}}})}catch{}finally{ni.current.delete(a)}},[G]),ii=(0,F.useRef)(new Set),oi=(0,F.useCallback)(async e=>{let t=W.current.tabs.find(t=>t.id===e),n=t?.listing;if(t&&Z(t)===`files`&&n&&!(n.entries.length>=(n.total??0))&&ii.current.add(e))try{let t=[],i=n.entries.length,a=n.total??0;for(;i<a;){let e=await ye(n.path,i,n.view?.sort??`name`,n.view?.sortDescending??!1);if(e.entries.length===0)break;t.push(e.entries),i+=e.entries.length,a=e.total}if(t.length===0)return;G(e,e=>{let i=e.listing;return!i||!r(i.path,n.path)||i.entries.length!==n.entries.length?{}:{listing:{...i,entries:[...i.entries,...t.flat()],total:a}}})}catch{}finally{ii.current.delete(e)}},[G]),[si,ci]=(0,F.useState)(0),li=(0,F.useCallback)(async e=>{let t=W.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0;await oi(e),(W.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0)>t&&ci(e=>e+1)},[oi]),ui=V.id,di=Z(V),fi=V.listing?.entries.length??0,pi=V.listing?.total??0;(0,F.useEffect)(()=>{D.open&&D.query.length!==0&&(di!==`files`||fi>=pi||oi(ui))},[D.open,D.query,ui,di,fi,pi,oi]);let mi=(0,F.useCallback)((e,t)=>{let n=Gr(t);n&&(Wr(n)?(U(),$r(e),G(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):K(e,n))},[$r,K,G,U]),hi=(0,F.useCallback)(async(e,t,n)=>{if(U(),Wr(t)){$r(e),G(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=$r(e);ei(e,t),G(e,()=>({index:n,listing:null,loading:!0,error:null}));try{Ct(t)||ti(e,t,r);let n=Ct(t)?await It(t):await he(t,!0,H,Et.current,$s(t),e);if(!r())return;G(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;let a=Xs(i);if(Se(a)){let i=g(t),a=await Re(i,!!Me(i));if(a){Ke(i,a),r()&&hi(e,t,n);return}}G(e,()=>({listing:{path:t,parent:Zs(t),total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:Xs(i)}))}},[$r,H,G,ei,U,ti]),q=(0,F.useCallback)((e,t=!0)=>{let n=Ys(e??Ur(`home`));return i(e=>[...e,n]),t&&f(n.id),e&&!Wr(e)&&K(n.id,e),n.id},[K]),J=(0,F.useCallback)(e=>{for(let t of W.current.tabs)Z(t)===`files`&&r(Q(t),e)&&K(t.id,e,!0)},[K]),gi=(0,F.useCallback)((e,t)=>{let n=u(t);for(let i of W.current.tabs)i.listing?.entries.some(t=>r(t.fullPath,e))&&G(i.id,i=>{let a=i.listing;if(!a)return{};let o=a.entries.map(i=>r(i.fullPath,e)?{...i,name:n,fullPath:t}:i);return{listing:{...a,entries:o}}})},[G]),Y=(0,F.useRef)([]);(0,F.useEffect)(()=>{let e=new Set;for(let r of n){let n=r.listing?.path??r.history[r.index]??``;n&&v(n)&&e.add(t(g(n)))}let r=Y.current.filter(t=>!e.has(t));Y.current=[...e],r.length>0&&me(r)},[n]);let _i=(0,F.useCallback)((e,t=!1)=>{t?q(Ur(e)):mi(W.current.activeId,Ur(e))},[q,mi]),vi=(0,F.useCallback)(e=>{let{tabs:t,activeId:n}=W.current,r=t.find(t=>t.id===e),a=t.filter(t=>t.id!==e&&t.id!==r?.splitWith);if(r&&!r.hidden&&(nr.current.push(Gs(r)),nr.current.length>Us&&nr.current.shift()),a.length===0){let e=Ys();i([e]),f(e.id);return}let o=t.findIndex(t=>t.id===e);i(a),n===e&&f(a[Math.min(o,a.length-1)].id)},[]),yi=(0,F.useCallback)(()=>{let e=nr.current.pop();if(!e)return;let t={...Ys(e),fresh:!1};i(e=>[...e,t]),f(t.id),Z(t)===`files`&&K(t.id,Q(t))},[K]),X=(0,F.useCallback)((e,t=!1)=>{t?q(e):mi(Ks(W.current),e??Ur(`home`))},[mi,q]),bi=(0,F.useCallback)(e=>{let{tabs:t,activeId:n}=W.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;f(r[i].id)},[]),xi=(0,F.useCallback)(()=>{let{tabs:e,activeId:t}=W.current,n=e.find(e=>e.id===t);if(!n||Z(n)!==`files`)return;let r=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(r){i(e=>e.filter(e=>e.id!==r.id)),G(t,()=>({splitWith:void 0})),kn(`primary`);return}let a=Q(n),o={...Ys(a),hidden:!0};i(e=>[...e,o]),G(t,()=>({splitWith:o.id})),K(o.id,a),kn(`primary`)},[K,G]),Si=(0,F.useCallback)(e=>{vn(e),ce(`yafm.preview.width`,e)},[]),Ci=(0,F.useCallback)((e,t,n)=>Dn(r=>r.kind===e&&r.info?.path===t?.path&&r.info?.modified===t?.modified&&r.info?.name===t?.name&&r.note===n?r:{kind:e,info:t,note:n}),[]),wi=(0,F.useCallback)((e,t)=>Ci(`gallery`,e,t),[Ci]),Ti=(0,F.useCallback)((e,t)=>Ci(`recycle`,e,t),[Ci]),Ei=Sr?N===`secondary`?wn??bn:bn??wn:bn,Di=Sr&&N===`secondary`?Rn.secondary:Rn.primary,Oi=R===`files`?Ei:En.kind===R?En.info:null,ki=R===`files`?Di>1?o(e,Di,`k_1_item_selected`,`count_items_selected`):void 0:En.kind===R?En.note:void 0,Ai=(0,F.useMemo)(()=>R===`files`&&L.listing?ec(e,L.listing):$n,[R,L.listing,e,$n]),ji=(0,F.useRef)(null),Mi=e=>{e.preventDefault();let t=ji.current?.getBoundingClientRect();if(!t)return;let n=Math.max(t.width-7,1),r=e=>{let r=Math.min(Math.max((e.clientX-t.left)/n,.2),.8);y(r),ce(`yafm.split.ratio`,r)},i=()=>{window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,i)};window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,i)},Ni=(e,t,n)=>{t&&Mn({x:e.clientX,y:e.clientY,directory:t,refresh:n})},Pi=(0,F.useCallback)((e,t)=>{zn(n=>n[e]===t?n:{...n,[e]:t})},[]),Fi=(0,F.useCallback)(e=>Pi(`primary`,e),[Pi]),Ii=(0,F.useCallback)(e=>Pi(`secondary`,e),[Pi]),Li=(e,t)=>{Rn[e]!==0&&Vn(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},Ri=async(e,t=!1)=>{let n=An;if(Mn(null),!n)return;let r=e===null?await Lt(n.directory,t):await Tt(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;U(),Un(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},zi=(0,F.useCallback)(()=>{let{tabs:e}=W.current,t=e.find(e=>e.id===Ks(W.current));t&&t.index>0&&hi(t.id,t.history[t.index-1],t.index-1)},[hi]),Bi=(0,F.useCallback)(()=>{let{tabs:e}=W.current,t=e.find(e=>e.id===Ks(W.current));t&&t.index<t.history.length-1&&hi(t.id,t.history[t.index+1],t.index+1)},[hi]),Vi=(0,F.useCallback)(()=>{let{tabs:e}=W.current,t=e.find(e=>e.id===Ks(W.current));t&&Z(t)===`files`&&t.listing?.parent&&X(t.listing.parent)},[X]),Hi=(0,F.useRef)(null),Ui=(0,F.useCallback)(()=>{for(let e of W.current.tabs)e.listing&&K(e.id,e.listing.path,!0)},[K]),Wi=(0,F.useCallback)(e=>{e.length!==0&&(fr(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),vr())},[vr]),Gi=(0,F.useCallback)(async e=>{let t=await wt(e);t.length!==0&&Wi(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[Wi]),Ki=(0,F.useCallback)(e=>{let t=new Set(e);fr(e=>e.filter(e=>!t.has(e.path)))},[]),qi=(0,F.useCallback)(async e=>{let n=Yr.current;if(!n)return;let r=await wt(e);if(r.length===0)return;let i=new Set((n.favorites??[]).map(e=>t(e.path))),a=r.filter(e=>!i.has(t(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(a.length===0)return;let o={...n,favorites:[...n.favorites??[],...a]};Rt(o),await $e(o),on(e=>e+1)},[]),Ji=(0,F.useCallback)(async e=>{let n=Yr.current;if(!n)return;let r=new Set(e.map(t)),i=(n.favorites??[]).filter(e=>!r.has(t(e.path)));if(i.length===(n.favorites??[]).length)return;let a={...n,favorites:i};Rt(a),await $e(a),on(e=>e+1)},[]),Yi=(0,F.useCallback)(()=>fr([]),[]),Xi=(0,F.useRef)(-1),Zi=(0,F.useCallback)(e=>{ar(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),sr(e.move),e.entries.length>0&&vr()},[vr]),Qi=(0,F.useCallback)(async()=>{if(x.available)try{let e=await Ht();Xi.current=e.sequence,Zi(e)}catch{}},[Zi]),$i=(0,F.useCallback)(async e=>{e.length!==0&&await St(e,!1)&&await Qi()},[Qi]),ea=(0,F.useRef)(dr);ea.current=dr;let ta=(0,F.useRef)(lr);ta.current=lr;let na=(0,F.useRef)(!1);(0,F.useEffect)(()=>{let e=j?.trayAutoShow??!0,t=t=>{e&&ft(t)&&(ta.current||(na.current=!0),vr())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{na.current&&window.setTimeout(()=>{na.current&&ea.current.length===0&&ur(!1),na.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[vr,j?.trayAutoShow]),(0,F.useEffect)(()=>{let e=()=>_r(e=>qs(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let ra=(0,F.useCallback)(async()=>{let e=ea.current;if(e.length>0){let t=await wt(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));fr(e=>e.filter(e=>n.has(e.path)))}await Qi()},[Qi]),ia=(0,F.useCallback)(()=>{ra(),fn(e=>e+1),Ui()},[ra,Ui]),aa=(0,F.useCallback)(e=>{let t=qs(e);_r(t),ge(`yafm.tray.position`,t)},[]),oa=(0,F.useCallback)(()=>{na.current=!1,lr?ur(!1):vr()},[vr,lr]),sa=(0,F.useCallback)(async(t,n,r)=>{let i=await Wt(t,n,r);i.cancelled||(i.ok?(r&&Ki(t),fn(e=>e+1),Ui(),Qi()):xe(i.error??e(`the_files_could_not_be_transferred`)))},[Ui,Qi,Ki]);(0,F.useEffect)(()=>{if(x.available)return Jn().then(e=>{tr.current=e,Gn(e)},()=>void 0),x.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=tr.current.find(t=>t.id===e.id);return!t||t.state!==e.state});tr.current=n,Gn(n),r&&qn(!0)})},[]);let ca=(0,F.useCallback)(()=>{Yn().then(()=>Jn().then(e=>{tr.current=e,Gn(e)},()=>void 0))},[]);(0,F.useEffect)(()=>{if(!x.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await Ht();if(!e||t.sequence===Xi.current)return;Xi.current=t.sequence,Zi(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Zi]);let la=(0,F.useCallback)(async e=>{let t=e?await Kt():await Dt();t.ok?(fn(e=>e+1),Ui()):t.error&&!t.error.startsWith(`Nothing to`)&&xe(t.error)},[Ui]),ua=(0,F.useRef)(H);(0,F.useEffect)(()=>{ua.current!==H&&(ua.current=H,Ui())},[H,Ui]);let da=(0,F.useCallback)((e,t)=>{let{tabs:n}=W.current,r=n.find(t=>t.id===e);if(!r||Z(r)!==`files`)return;let i=Q(r),a=Yr.current?.defaultView??oe,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||Ie.iconSize,gridSize:r.view?.gridSize||a.gridSize||Ie.gridSize,sort:r.view?.sort??Ie.sort,sortDescending:r.view?.sortDescending??Ie.sortDescending,...t};G(e,()=>({view:o})),Hi.current!==null&&window.clearTimeout(Hi.current),Hi.current=window.setTimeout(()=>{Hi.current=null,Ue(i,o)},250)},[G]),fa=(0,F.useCallback)(e=>{da(Ks(W.current),e)},[da]),pa=(0,F.useCallback)(e=>{let t=Yr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??oe,columns:e}};Rt(n),$e(n)},[]),ma=(0,F.useCallback)(e=>{let t=Yr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??oe,showImages:e}};Rt(n),$e(n)},[]),ha=(0,F.useCallback)(e=>{let t=Yr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??oe,imageStripHeight:e}};Rt(n),$e(n)},[]),ga=(0,F.useCallback)((e,t,n,r)=>{let i=W.current.tabs.find(t=>t.id===e);if(!i||Z(i)!==`files`||!i.listing)return;let a=Q(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));G(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),ze(a,t,n,r)},[G]),_a=(0,F.useCallback)((e,t)=>{let n=W.current.tabs.find(t=>t.id===e);if(!n)return;let r=Js(n,Yr.current?.defaultView??oe);da(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending}),K(e,Q(n),!0)},[da,K]),va=(0,F.useCallback)((e,t)=>{i(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),ya=(0,F.useCallback)(()=>{de().then(te,()=>te([]))},[]),ba=(0,F.useCallback)(e=>{let t=(e.openTabs??[]).map(Gr).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...Ys(e),fresh:!1})),r=Math.min(Math.max(e.activeTab??0,0),n.length-1);i(n),f(n[r].id);let a=n[r];return(Z(a)===`files`?K(a.id,Q(a),!0):Promise.resolve()).then(()=>{for(let e of n)e!==a&&Z(e)===`files`&&K(e.id,Q(e),!0)}),!0},[K]),xa=(0,F.useCallback)(e=>{let t=Zr.current;if(Zr.current=[],t.length===0)return;let n=t.filter(e=>!Vs.has(e));for(let e of t)n.includes(e)||Hs(e);if(n.length===0)return;let{tabs:r}=W.current;if(!e&&r.length===1&&r[0].fresh){mi(r[0].id,n[0]),Hs(n[0]);for(let e of n.slice(1))q(e),Hs(e);return}let i=n.map(e=>{let t=q(e);return Hs(e),t}).at(-1);i&&setTimeout(()=>f(i),0)},[q,mi]),Sa=(0,F.useCallback)(()=>{et().then(e=>{Rt(e),Pt(e.recentLimit);let t=Vt(e.shortcuts);rn(t),Ft(yt(t,`openInNewTab`)),on(e=>e+1),Xr.current||(Xr.current=!0,xa(e.restoreTabs&&ba(e)))},()=>{Pt(10),Xr.current=!0,xa(!1)})},[xa,ba]),Ca=(0,F.useCallback)(()=>{pe().then(At,()=>At([]))},[]),wa=(0,F.useCallback)(()=>{se().then(S,()=>S([]))},[]),Ta=n.filter(e=>!e.hidden),Ea=Ta.map(Gs),Da=Ea.join(`
`),Oa=Math.max(Ta.findIndex(e=>e.id===d),0);(0,F.useEffect)(()=>{if(!j?.restoreTabs)return;let e=setTimeout(()=>void Ze(Ea,Oa),700);return()=>clearTimeout(e)},[Da,Oa,j?.restoreTabs]),(0,F.useEffect)(()=>{let{tabs:e,activeId:t}=W.current,n=e.find(e=>e.id===t);n&&n.fresh&&Z(n)===`files`&&K(n.id,Q(n),!0),ya(),Sa(),wa(),On().then(ae,()=>ae(null))},[K,ya,Sa,wa]),(0,F.useEffect)(()=>{if(jn().then(De,()=>De(null)),x.available)return x.on(e=>{let t=e;t.type===`update.checked`&&t.data&&De(t.data)})},[]),(0,F.useEffect)(()=>{if(x.available)return x.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&ee({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&xe(e(`pairing_code_code`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&xe(n.data.error??e(`pairing_failed`))}})},[e]),(0,F.useEffect)(()=>{let e=setInterval(wa,3e4);return()=>clearInterval(e)},[wa]),(0,F.useEffect)(()=>{R===`home`&&(Ca(),wa())},[R,L.id,Ca,wa]),(0,F.useEffect)(()=>{if(!x.available)return;let e=x.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=W.current,i=t.data.startup===!0;i&&Vs.has(n)?Hs(n):i&&!Xr.current?Zr.current.includes(n)||Zr.current.push(n):(i&&r.length===1&&r[0].fresh?mi(r[0].id,n):Wr(n)?mi(Ks(W.current),n):q(n),i&&Hs(n))});return x.send({type:`app.ready`}),e},[mi,q]),(0,F.useEffect)(()=>{if(x.available)return x.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:r}=t.data;i(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let i=e.slice(),a=e[t];return i[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...r}}},i})})},[]),(0,F.useEffect)(()=>{if(x.available)return x.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:r}=t.data;i(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let i=e.slice(),a=e[t];return i[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...r}}},i})})},[]),(0,F.useEffect)(()=>{let e=e=>{if(pt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),zi();return}if(e.key===`BrowserForward`){e.preventDefault(),Bi();return}if(e.key===`Escape`&&D.open){e.preventDefault(),U();return}let t=vt(e);if(O(M,`closeTab`,t)&&(e.preventDefault(),vi(Ks(W.current))),O(M,`newTab`,t)&&(e.preventDefault(),q()),O(M,`reopenTab`,t)&&(e.preventDefault(),yi()),O(M,`goBack`,t)&&(e.preventDefault(),zi()),O(M,`goForward`,t)&&(e.preventDefault(),Bi()),O(M,`goUp`,t)&&(e.preventDefault(),Vi()),O(M,`find`,t)&&(e.preventDefault(),R===`files`?zr():Br()),O(M,`location`,t)&&(e.preventDefault(),un(e=>e+1)),O(M,`home`,t)){e.preventDefault();let t=b.find(e=>e.kind===`home`)?.path;t&&X(t)}O(M,`iconsView`,t)&&(e.preventDefault(),R===`files`&&fa({mode:`grid`})),O(M,`detailsView`,t)&&(e.preventDefault(),R===`files`&&fa({mode:`list`})),O(M,`nextTab`,t)&&(e.preventDefault(),bi(1)),O(M,`previousTab`,t)&&(e.preventDefault(),bi(-1)),O(M,`hidden`,t)&&(e.preventDefault(),we().then(()=>{fn(e=>e+1),Ui()})),O(M,`undo`,t)&&(e.preventDefault(),la(!0)),O(M,`redo`,t)&&(e.preventDefault(),la(!1)),O(M,`splitView`,t)?(e.preventDefault(),xi()):Object.keys(M).some(e=>e!==`openInNewTab`&&O(M,e,t))||R!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),qr(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[M,R,D.open,vi,yi,q,zi,Bi,Vi,zr,Br,U,qr,fa,bi,X,b,Ui,la,xi]),(0,F.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),zi()):(e.button===4||e.button===9)&&(e.preventDefault(),Bi())},t=e=>{(e.button===3||e.button===4||e.button===8||e.button===9)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[zi,Bi]),(0,F.useEffect)(()=>{if(x.available)return x.on(e=>{let t=e;if(t.type===`app.navigation`)switch(t.data?.direction){case`back`:zi();break;case`forward`:Bi()}})},[zi,Bi]);let ka=(0,F.useMemo)(()=>{let e=new Set;for(let t of n){if(Z(t)!==`files`)continue;let n=Q(t);if(n&&!Ct(n)){if(v(n)){let t=Zs(g(n));t&&e.add(t)}else e.add(n)}}return[...e]},[n]),Aa=ka.join(`\0`);(0,F.useEffect)(()=>{x.available&&x.send({type:`fs.watch`,payload:{paths:ka,owner:`app`}})},[Aa,d]);let ja=Z(V)===`files`?Q(V):``;(0,F.useEffect)(()=>{x.available&&x.send({type:`fs.focus`,payload:{path:ja||null}})},[ja]),(0,F.useEffect)(()=>{if(x.available)return x.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,i=W.current.tabs.filter(e=>Z(e)===`files`&&r(Q(e),n)),a=W.current.tabs.filter(e=>{let t=Q(e);return Z(e)===`files`&&t.length>0&&v(t)&&r(g(t),n)});if(i.length!==0||a.length!==0){Oe(n);for(let e of a){let t=W.current.tabs.find(t=>t.id===e.id),i=t?Q(t):``;t&&Z(t)===`files`&&!t.loading&&v(i)&&r(g(i),n)&&K(e.id,i,!0)}i.length!==0&&he(n,!1,H).then(e=>{for(let t of i){let n=W.current.tabs.find(e=>e.id===t.id);n&&Z(n)===`files`&&r(Q(n),e.path)&&(n.loading?window.setTimeout(()=>{let n=W.current.tabs.find(e=>e.id===t.id);n&&!n.loading&&Z(n)===`files`&&r(Q(n),e.path)&&G(t.id,()=>({listing:e}))},300):G(t.id,()=>({listing:e})))}},()=>void 0)}})},[H,K,G]);let Ma=L.index>0,Na=L.index<L.history.length-1,Pa=(e,t)=>{let n=Js(e,Dr),i=e.listing?.path??e.history[e.index]??``,o=v(i),s=o&&a(i);return(0,I.jsx)(Bt,{platform:C?.platform,confirmDelete:j?.confirmDelete??!1,cutPaths:cr,previewVideoAudio:j?.previewVideoAudio??!1,previewVideoAutoplay:j?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?xn:Tn,onActivate:()=>kn(t?`primary`:`secondary`),enableShortcuts:(!Sr||(t?N===`primary`:N===`secondary`))&&(!o||s),error:e.error,find:e.id===V.id?{...D,currentPath:Rr<0?null:Lr[Rr]}:void 0,selectMatchesToken:e.id===V.id?We:0,imageStripHeight:Mr,listing:e.listing,loading:e.loading,onImageStripHeight:ha,readOnly:o&&!s||Ct(e.listing?.path??``),onOpen:(t,n)=>{n?q(t):K(e.id,t)},onOpenFile:(t,n)=>{Ct(t)?Nt(t).catch(e=>void xe(Xs(e))):c(t)?j?.archiveHandler??!1?n?q(t):K(e.id,t):E(t):v(t)?(async()=>{let e=await fe(t,Et.current,$s(t));if(!e.path&&Se(e.error)){let n=g(t),r=Me(n);r&&Pe(n);let i=await Re(n,!!r);i&&(Ke(n,i),e=await fe(t,Et.current,i))}e.path?E(e.path):e.error&&xe(e.error)})():E(t)},onRefresh:()=>{let t=e.listing?.path;t&&J(t)},onLoadMore:()=>void ri(e.id),onEnsureComplete:()=>void li(e.id),selectAllToken:e.id===V.id?si:0,onRename:gi,onSelectionCountChange:t?Fi:Ii,onSetTags:(t,n,r)=>ga(e.id,t,n,r),selectionMenuRequest:t?Bn.primary:Bn.secondary,onSort:t=>_a(e.id,t),onPaste:ia,onClipboardChanged:()=>void Qi(),onTransfer:sa,onAddToTray:e=>void Gi(e),onAddFavorite:e=>void qi(e),onRemoveFavorite:e=>void Ji(e),favoritePaths:Jt,onExtractArchive:(e,t)=>void Ba(e,t),openOnSingleClick:j?.openOnSingleClick??!1,pendingRename:Hn&&t===(N===`primary`)&&r(Hn.directory,e.listing?.path??``)?Hn.path:null,pendingRenameToken:Hn?.token??0,refreshToken:dn,shortcuts:M,showCheckboxes:j?.showCheckboxes??!0,showImages:jr,view:n})},Fa=D.open&&(0,I.jsx)(Pr,{current:Rr,focusToken:Be,matchCase:D.matchCase,mode:D.mode,onClose:U,onMatchCase:()=>Ne(e=>({...e,matchCase:!e.matchCase})),onMode:()=>Ne(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Jr(1),onPrevious:()=>Jr(-1),onQuery:e=>Ne(t=>({...t,query:e})),onRegex:()=>Ne(e=>({...e,regex:!e.regex})),query:D.query,regex:D.regex,total:Lr.length,onSelectMatches:Lr.length>0?()=>Ge(e=>e+1):void 0}),Ia=R===`files`&&v(z),La=Ia&&a(z),Ra=Ia&&L.listing?.archiveEncrypted===!0,za=async(t,n)=>{let r=g(t),i=await ue(r,n,Et.current,$s(r));if(!i.ok&&Se(i.error)){let e=Me(r);e&&Pe(r);let t=await Re(r,!!e);t&&(Ke(r,t),i=await ue(r,n,Et.current,t))}i.ok?(J(n),He(),K(L.id,n,!0)):xe(`${e(`could_not_extract_the_archive`)}${i.error?`\n${i.error}`:``}`)},Ba=async(e,t)=>{let n=g(e),i=Zs(n);if(!i)return;if(t===`choose`){let e=await ht(i);e&&await za(n,e);return}let a=t===`named`;if(t===`auto`){let e=r(n,z)?L.listing?.entries??[]:(await he(n,!1,!1,Et.current,$s(n))).entries;a=!(e.length===1&&e[0].isDirectory)}let o=i.includes(`\\`)?`\\`:`/`,s=a?`${i.replace(/[\\/]+$/,``)}${o}${Qs(n)}`:i;await za(n,s)},Va=async e=>{Ia&&await Ba(z,e)},Ha=async()=>{Ia&&await Ba(z,`choose`)},Ua=(0,I.jsxs)(oc,{children:[(0,I.jsx)($,{"data-shortcut":k(M.goBack),disabled:!Ma,onClick:e=>{L.index>0&&A(e)?q(L.history[L.index-1]):zi()},title:e(`back`),type:`button`,children:(0,I.jsx)(Sn,{})}),(0,I.jsx)($,{"data-shortcut":k(M.goForward),disabled:!Na,onClick:e=>{L.index<L.history.length-1&&A(e)?q(L.history[L.index+1]):Bi()},title:e(`forward`),type:`button`,children:(0,I.jsx)(mn,{})}),(0,I.jsx)($,{"data-shortcut":k(M.goUp),disabled:R!==`files`||!xr,onClick:e=>{xr&&(A(e)?q(xr):X(xr))},title:e(`up_one_level`),type:`button`,children:(0,I.jsx)(ln,{})}),(0,I.jsx)(Kr,{focusToken:sn,icon:Nr,label:R===`files`?void 0:e(ps[R]),onContextMenu:R===`files`?(e,t,n)=>Fn({x:t,y:n,path:e}):void 0,onNavigate:X,path:R===`files`?z:yr}),R===`files`&&(!Ia||La)&&(0,I.jsx)($,{onClick:e=>Ni(e,z,()=>void K(L.id,z,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,I.jsx)(hn,{})}),(0,I.jsx)($,{"data-shortcut":k(M.find),onClick:()=>R===`files`?zr():Br(),title:e(`search`),type:`button`,children:(0,I.jsx)(Cn,{})}),Rn.primary>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(ks,{}),(0,I.jsx)($,{onClick:e=>Li(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,I.jsx)($t,{})})]}),(0,I.jsx)(`span`,{ref:Zn,style:{display:`contents`}}),Ia&&(0,I.jsxs)(sc,{children:[(0,I.jsx)(ks,{}),Ra&&(0,I.jsxs)(cc,{title:e(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,I.jsx)(Xt,{size:12}),e(`encrypted`)]}),(0,I.jsx)($,{onClick:()=>void Ha(),onContextMenu:e=>{e.preventDefault(),Pn({x:e.clientX,y:e.clientY})},title:e(`extract_archive`),type:`button`,children:(0,I.jsx)(yn,{})}),(0,I.jsx)(nt,{icon:(0,I.jsx)(Yt,{size:15}),onChange:e=>{let t=Number(e);xt(t),Et.current=t,Ia&&K(L.id,z,!0)},options:Ws.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`archive_encoding`)}: ${e(Ws.find(e=>e.value===String(bt))?.label??`auto`)}`,value:String(bt)})]})]}),Wa=Je.open?{...Je,index:rt}:null;return(0,I.jsx)(_t,{value:Ar,children:(0,I.jsxs)(nc,{$rounded:je,children:[(0,I.jsx)(Qn,{settings:j,theme:Ut}),(0,I.jsx)(Ho,{activeId:L.id,onClose:vi,onNewTab:()=>q(),onReorder:va,onTransferToTab:sa,onSelect:f,onViewChange:fa,onColumns:pa,onShowImages:ma,showImages:jr,tasks:Wn,onClearTasks:ca,activityOpen:Kn,onActivityOpenChange:qn,trayCount:dr.length+rr.length,trayVisible:lr,onToggleTray:oa,split:Sr,canSplit:R===`files`,onToggleSplit:xi,details:pn,canDetails:R===`files`||R===`recycle`||R===`gallery`,onToggleDetails:()=>gn(e=>!e),currentFolder:R===`files`&&!Ct(z)?z:``,shortcuts:M,view:Or,tabs:n.filter(e=>!e.hidden).map(t=>{let r=Z(t),i=Q(t),a=t.splitWith?n.find(e=>e.id===t.splitWith):void 0,o=a?Q(a):``;return{id:t.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?lt(Ar,i):void 0,archive:r===`files`&&v(i),split:!!a,title:r===`files`?st(Ar,i,u(i)||e(`files`)):e(ps[r]),partner:a?{title:st(Ar,o,u(o)||e(`files`)),place:lt(Ar,o)}:void 0}})}),(0,I.jsxs)(rc,{children:[(0,I.jsx)(ai,{activeKind:R,currentPath:R===`files`?yr:``,drives:ne,historyVersion:Zt,onNavigate:X,onOpenView:_i,homePath:b.find(e=>e.kind===`home`)?.path??``,places:b,recent:kt,recentLimit:jt,version:an}),(0,I.jsxs)(ic,{children:[(0,I.jsxs)(mc,{children:[(0,I.jsxs)(hc,{children:[R!==`files`&&Ua,(0,I.jsx)(ac,{children:(0,I.jsxs)(F.Suspense,{fallback:null,children:[R!==`files`&&Je.open&&(0,I.jsx)(Pr,{current:rt,focusToken:Qe,matchCase:Je.matchCase,mode:Je.mode,onClose:Vr,onMatchCase:()=>Xe(e=>({...e,matchCase:!e.matchCase})),onMode:()=>Xe(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Hr(1),onPrevious:()=>Hr(-1),onQuery:e=>Xe(t=>({...t,query:e})),onRegex:()=>Xe(e=>({...e,regex:!e.regex})),placeholder:e(`search`),query:Je.query,regex:Je.regex,total:ot,onSelectMatches:R===`gallery`||R===`recycle`?()=>Ge(e=>e+1):void 0}),R===`files`?Sr&&B?(0,I.jsxs)(uc,{ref:ji,children:[(0,I.jsxs)(dc,{style:{flex:_},children:[(0,I.jsxs)(lc,{$active:N===`primary`,onPointerDown:()=>kn(`primary`),children:[(0,I.jsx)($,{"data-shortcut":k(M.goBack),disabled:!Ma,onClick:e=>{let t=L.index-1;t<0||(A(e)?q(L.history[t]):hi(L.id,L.history[t],t))},title:e(`back`),type:`button`,children:(0,I.jsx)(Sn,{})}),(0,I.jsx)($,{"data-shortcut":k(M.goForward),disabled:!Na,onClick:e=>{let t=L.index+1;t>=L.history.length||(A(e)?q(L.history[t]):hi(L.id,L.history[t],t))},title:e(`forward`),type:`button`,children:(0,I.jsx)(mn,{})}),(0,I.jsx)($,{"data-shortcut":k(M.goUp),disabled:!xr,onClick:e=>{xr&&(A(e)?q(xr):K(L.id,xr))},title:e(`up_one_level`),type:`button`,children:(0,I.jsx)(ln,{})}),(0,I.jsx)(Kr,{focusToken:N===`primary`?sn:void 0,onContextMenu:(e,t,n)=>Fn({x:t,y:n,path:e}),onNavigate:(e,t)=>t?q(e):void K(L.id,e),path:z}),(0,I.jsx)($,{onClick:e=>Ni(e,z,()=>void K(L.id,z,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,I.jsx)(hn,{})}),(0,I.jsx)($,{"data-shortcut":k(M.find),onClick:zr,title:e(`search`),type:`button`,children:(0,I.jsx)(Cn,{})}),Rn.primary>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(ks,{}),(0,I.jsx)($,{onClick:e=>Li(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,I.jsx)($t,{})})]})]}),Pa(L,!0),N===`primary`&&Fa]}),(0,I.jsx)(fc,{onDoubleClick:()=>y(.5),onPointerDown:Mi,title:e(`drag_to_resize_double_click_to_reset`)}),(0,I.jsxs)(dc,{$enter:!0,style:{flex:1-_},children:[(0,I.jsxs)(lc,{$active:N===`secondary`,onPointerDown:()=>kn(`secondary`),children:[(0,I.jsx)($,{"data-shortcut":k(M.goBack),disabled:B.index<=0,onClick:e=>{let t=B.index-1;t<0||(A(e)?q(B.history[t]):hi(B.id,B.history[t],t))},title:e(`back`),type:`button`,children:(0,I.jsx)(Sn,{})}),(0,I.jsx)($,{"data-shortcut":k(M.goForward),disabled:B.index>=B.history.length-1,onClick:e=>{let t=B.index+1;t>=B.history.length||(A(e)?q(B.history[t]):hi(B.id,B.history[t],t))},title:e(`forward`),type:`button`,children:(0,I.jsx)(mn,{})}),(0,I.jsx)($,{"data-shortcut":k(M.goUp),disabled:!wr,onClick:e=>{wr&&(A(e)?q(wr):K(B.id,wr))},title:e(`up_one_level`),type:`button`,children:(0,I.jsx)(ln,{})}),(0,I.jsx)(Kr,{focusToken:N===`secondary`?sn:void 0,onContextMenu:(e,t,n)=>Fn({x:t,y:n,path:e}),onNavigate:(e,t)=>t?q(e):void K(B.id,e),path:Cr}),(0,I.jsx)($,{onClick:e=>Ni(e,Cr,()=>void K(B.id,Cr,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,I.jsx)(hn,{})}),(0,I.jsx)($,{"data-shortcut":k(M.find),onClick:zr,title:e(`search`),type:`button`,children:(0,I.jsx)(Cn,{})}),Rn.secondary>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(ks,{}),(0,I.jsx)($,{onClick:e=>Li(`secondary`,e),title:e(`selection_menu`),type:`button`,children:(0,I.jsx)($t,{})})]})]}),Pa(B,!1),N===`secondary`&&Fa]})]}):(0,I.jsxs)(I.Fragment,{children:[Ua,(0,I.jsxs)(pc,{children:[Pa(L,!0),Fa]})]}):R===`home`?(0,I.jsx)(Is,{platform:C?.platform,drives:ne,find:Wa,historyVersion:Zt,onSearchMatches:dt,homePath:b.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:wa,onHistoryChanged:()=>en(e=>e+1),onAddToTray:e=>void Gi(e),onAddFavorite:e=>void qi(e),onRemoveFavorite:e=>void Ji(e),favoritePaths:Jt,onExtractArchive:(e,t)=>void Ba(e,t),settingsVersion:an,theme:Ut,onOpen:X,onLayoutChanged:Sa,onPlacesChanged:te,onRecentCleared:Ca,places:b,recent:kt,recentLimit:jt,visibilityVersion:dn}):R===`settings`?(0,I.jsx)(Ls,{appInfo:C,find:Wa,focusSection:ke,onSearchMatches:dt,onSettingsChanged:Sa}):R===`gallery`?(0,I.jsx)(Rs,{platform:C?.platform,toolbarSlot:Xn,onStatusChange:er,confirmDelete:j?.confirmDelete??!1,find:Wa,onSearchMatches:dt,openOnSingleClick:j?.openOnSingleClick??!1,onAddToTray:e=>void Gi(e),onAddFavorite:e=>void qi(e),onRemoveFavorite:e=>void Ji(e),favoritePaths:Jt,onExtractArchive:(e,t)=>void Ba(e,t),shortcuts:M,showCheckboxes:j?.showCheckboxes??!0,selectMatchesToken:We,onPreviewChange:wi,view:Or}):(0,I.jsx)(zs,{find:Wa,toolbarSlot:Xn,onStatusChange:er,onOpenLocation:X,onShowDetails:()=>gn(!0),platform:C?.platform,selectMatchesToken:We,onPreviewChange:Ti})]})},R)]}),(R===`files`||R===`gallery`||R===`recycle`)&&(0,I.jsx)(mt,{emptyNote:e(`nothing_selected`),info:Oi,onWidth:Si,open:pn,selectionNote:ki,videoAudio:j?.previewVideoAudio??!1,videoAutoplay:j?.previewVideoAutoplay??!1,width:_n})]}),(0,I.jsxs)(bc,{children:[(0,I.jsx)(`span`,{children:Ai}),C?(0,I.jsxs)(gc,{children:[(0,I.jsxs)(`span`,{children:[`v`,C.version,` · `,C.platform]}),C.debug&&(0,I.jsx)(yc,{children:`debug`}),ve?.available&&(0,I.jsxs)(_c,{onClick:e=>{Ae(`updates`),_i(`settings`,A(e))},title:e(`version_version_is_available`,{version:ve.latest}),type:`button`,children:[(0,I.jsx)(vc,{}),e(`update_available`)]})]}):(0,I.jsx)(`span`,{children:e(`browser_preview`)})]})]})]}),(0,I.jsx)(it,{clipboardItems:rr,clipboardMove:or,currentDirectory:R===`files`?yr:``,items:dr,onAdd:e=>void Gi(e),onClear:Yi,onClose:()=>ur(!1),onCopyToClipboard:e=>void $i(e),onPosition:aa,onRemove:Ki,onTransfer:sa,position:gr,visible:lr}),An&&(0,I.jsx)(gt,{creationOnly:!0,directory:An.directory,menu:{x:An.x,y:An.y,paths:[],background:!0},onClose:()=>Mn(null),onCreateFile:e=>void Ri(e),onCreateFolder:e=>void Ri(null,e),shortcuts:M}),P&&(0,I.jsx)(gt,{allowCompression:!0,directory:Zs(P.path)??P.path,menu:{x:P.x,y:P.y,paths:[P.path]},onAddToTray:e=>void Gi(e),onAddFavorite:e=>void qi(e),onRemoveFavorite:e=>void Ji(e),favoritePaths:Jt,onExtractArchive:(e,t)=>void Ba(e,t),onArchiveCreated:e=>{e&&J(Zs(P.path)??P.path)},onClose:()=>Fn(null),onCompressTo:(e,t)=>Ln({paths:e,name:t}),onCopy:(e,t)=>void St(e,t),onDelete:e=>void Mt(e,!1).then(()=>J(Zs(P.path)??P.path)),onOpen:(e,t)=>t?q(e):void K(L.id,e),onOpenFile:e=>void E(e),onPaste:e=>void Ot(e).then(t=>{t.ok&&J(e)}),onRefresh:()=>J(P.path),shortcuts:M,target:{path:P.path,isDirectory:!0}}),In&&(0,I.jsx)(qt,{initialDirectory:Zs(P?.path??z)??z,initialName:In.name,onCancel:()=>Ln(null),onCompress:async e=>{let t=await zt(In.paths,e);return!t.ok&&t.error&&xe(t.error),t.ok}}),Nn&&(0,I.jsx)(Ce,{items:[{label:e(`extract_here`),onSelect:()=>void Va(`here`)},{label:e(`extract_to_a_folder_named_after_the_archive`),onSelect:()=>void Va(`named`)},{label:e(`auto_extract_to_the_current_folder`),onSelect:()=>void Va(`auto`)}],onClose:()=>Pn(null),x:Nn.x,y:Nn.y}),pr&&(0,I.jsx)(ir,{action:pr.prompt.action,delaySeconds:pr.prompt.delaySeconds,hits:pr.prompt.hits,onCancel:()=>{pr.resolve(!1),mr(null)},onConfirm:()=>{pr.resolve(!0),mr(null)},permanent:pr.prompt.permanent},pr.id),(0,I.jsx)(br,{}),(0,I.jsx)(Er,{}),(0,I.jsx)(Tr,{}),m&&(0,I.jsx)(vs,{code:m.code,deviceName:m.deviceName,onAccept:()=>{Gt(m.requestId,!0),ee(null)},onReject:()=>{Gt(m.requestId,!1),ee(null)}}),(0,I.jsx)(cs,{}),(0,I.jsx)(re,{})]})})}var nc=S.div`
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
`,rc=S.div`
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
`,ic=S.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,ac=S.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${De}
`,oc=S.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,$=Os,sc=S.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,cc=S.span`
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
`,lc=S.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,uc=S.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,dc=S.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?Be:``}
`,fc=S.div`
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
        ${Ae}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,pc=S.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,mc=S.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,hc=S.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,gc=S.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,_c=S.button`
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
`,vc=S.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,yc=S.span`
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
`,bc=S.footer`
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
`;document.documentElement.dataset.theme=C()?`dark`:`light`;var xc=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,xc),window.addEventListener(`pagehide`,Ge);var Sc=document.getElementById(`root`),Cc=new URLSearchParams(window.location.search),wc=Cc.get(`picker`),Tc=Cc.get(`filter`)??``,Ec=wc===`folder`||wc===`file`||wc===`save`?(0,F.lazy)(()=>Fs(()=>import(`./PickerWindow-DBQ1R1PY.js`).then(e=>({default:e.PickerWindow})),__vite__mapDeps([14,1,2,7,4,5,3,6,9,12,0,8,10]))):null;Sc&&(Je(),(0,Rn.createRoot)(Sc).render((0,I.jsx)(F.StrictMode,{children:(0,I.jsx)(te,{children:Ec===null?(0,I.jsx)(tc,{}):(0,I.jsx)(F.Suspense,{fallback:null,children:(0,I.jsx)(Ec,{defaultExtension:Cc.get(`ext`)??``,extensions:Tc?Tc.split(`;`).filter(Boolean):[],types:Cc.get(`types`)??``,typeIndex:Number(Cc.get(`type`)??0)||0,initial:Cc.get(`initial`)??``,initialName:Cc.get(`name`)??``,mode:wc===`folder`?`folder`:`file`,multiple:Cc.get(`multiple`)===`1`,save:wc===`save`})})})})));export{N as A,Mn as C,Fn as D,In as E,kn as O,Pn as S,P as T,Un as _,_s as a,qn as b,ai as c,Tr as d,br as f,Bn as g,Hn as h,ms as i,Nn as j,An as k,Kr as l,Zn as m,Os as n,To as o,ir as p,ks as r,Co as s,Fs as t,Pr as u,Kn as v,jn as w,Vn as x,Wn as y};