const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OverviewView-Cc872J0X.js","assets/rolldown-runtime-XKyaHtl9.js","assets/dist-sR-t6Emc.js","assets/selectionMenu-3N_AfRQo.js","assets/theme-Ocob2ChL.js","assets/theme-Cd7QcbnN.css","assets/Icons-NY0trHLk.js","assets/concepts-69Rb8xko.js","assets/textSearch-9s3m3Ks5.js","assets/FileList-wM4BPYTZ.js","assets/IconPicker-mUYOTJIS.js","assets/SettingsView-Dwj6PHig.js","assets/GalleryView-Dm5vf3ef.js","assets/RecycleView-DqPvJ83A.js","assets/PickerWindow-BCSxX7Fw.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{C as t,D as n,E as r,O as i,S as a,T as o,a as s,b as c,c as l,d as u,h as d,k as f,l as p,m,p as ee,r as h,u as g,x as _,y as v}from"./theme-Ocob2ChL.js";import{_ as y,a as b,c as te,d as ne,f as x,g as S,i as re,n as C,o as ie,r as ae,s as oe,u as w}from"./dist-sR-t6Emc.js";import{A as T,B as se,C as ce,D as le,F as ue,G as de,I as fe,J as pe,K as me,Q as he,R as ge,S as _e,T as ve,V as ye,W as be,Z as xe,_ as Se,_t as Ce,a as we,at as Te,b as Ee,bt as De,c as Oe,ct as ke,d as Ae,f as je,ft as Me,g as E,gt as Ne,h as Pe,ht as Fe,i as Ie,k as Le,l as Re,m as ze,nt as Be,o as Ve,p as He,st as Ue,tt as We,u as Ge,v as Ke,vt as qe,x as Je,y as Ye,z as Xe}from"./selectionMenu-3N_AfRQo.js";import{a as Ze,f as Qe,i as $e,p as et,u as tt}from"./concepts-69Rb8xko.js";import{A as nt,B as rt,C as it,D as at,E as ot,F as st,G as ct,J as lt,K as ut,L as dt,N as ft,O as pt,Q as mt,R as ht,U as gt,V as _t,W as vt,X as yt,Y as D,Z as bt,_t as xt,c as St,ct as Ct,d as wt,dt as Tt,et as O,ft as Et,g as k,gt as Dt,ht as Ot,i as kt,k as At,l as jt,lt as Mt,m as Nt,mt as Pt,nt as Ft,ot as A,p as It,pt as Lt,q as j,r as Rt,st as zt,t as Bt,tt as Vt,ut as Ht,v as Ut,vt as Wt,x as Gt,yt as Kt,z as qt}from"./FileList-wM4BPYTZ.js";import{D as Jt,F as Yt,G as Xt,I as Zt,J as Qt,K as $t,O as en,P as tn,T as M,V as nn,W as rn,Y as an,Z as on,_ as sn,_t as cn,a as ln,ct as un,d as dn,et as fn,f as pn,i as mn,it as hn,j as gn,k as _n,lt as vn,n as yn,p as bn,pt as xn,r as Sn,st as Cn,t as wn,ut as Tn,v as En,z as Dn}from"./Icons-NY0trHLk.js";async function On(){return x.available?await x.request(`app.info`):{version:`dev`,platform:`web`,logDirectory:``,rounded:!1,debug:!1}}async function N(e){x.available?await x.request(`system.openUrl`,{url:e}):window.open(e,`_blank`,`noreferrer`)}async function kn(){x.available&&await In(`update.openLogs`)}async function An(e){x.available?await In(`update.openRelease`):e&&window.open(e,`_blank`,`noreferrer`)}async function jn(){return x.available?await x.request(`update.status`)??null:null}async function Mn(){return x.available?await x.request(`update.check`):{current:`dev`,latest:`dev`,available:!1}}async function Nn(){return x.available?await x.request(`update.download`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}async function Pn(){await In(`update.cancel`)}async function P(){return x.available?await x.request(`update.install`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}function Fn(e){return x.on(t=>{t.type===`update.progress`&&e(t.data)})}function F(e){return x.on(t=>{t.type===`update.changelog`&&e(t.data)})}async function In(e,t,n=3e4){let r=await x.request(e,t,n);if(!r.ok)throw Error(r.error??`The action failed.`)}var I=e(y(),1),Ln=i(),Rn={managed:0,private:0,workingSet:0,available:0};async function zn(){return x.available?await x.request(`app.memory`):Rn}async function Bn(){return x.available?await x.request(`app.memory.trim`):Rn}var Vn={registered:!1,pathMatches:!1,registeredPath:null};async function Hn(){return x.available?await x.request(`app.scheme`):Vn}async function Un(e){return x.available?await x.request(`app.scheme.set`,{enabled:e}):Vn}var Wn={supported:!1,mode:`none`,active:!1,error:null};async function Gn(){return x.available?await x.request(`app.startup`):Wn}async function Kn(e){return x.available?await x.request(`app.startup.set`,{mode:e}):Wn}async function qn(){return x.available?(await x.request(`app.tasks`)).tasks:[]}async function Jn(){x.available&&await x.request(`app.tasks.clear`)}var L=ne(),Yn=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function Xn(e){return Yn.test(e)}function Zn({settings:e,theme:t}){let n=e?.backgroundSource??null,r=n?.startsWith(`url:`)?n.slice(4):_(n)?n:null,i=n?.startsWith(`file:`)?n.slice(5):null,a=Me(i),o=n?.startsWith(`builtin:`)?$e(n,t):r??a,s=r===null?i===null?n!==null&&Ze(n):Xn(i):Xn(r.split(/[?#]/)[0]);if(!n||!o)return null;let c=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,L.jsxs)(Qn,{"aria-hidden":!0,children:[s?(0,L.jsx)(er,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o,style:{filter:c}}):(0,L.jsx)($n,{src:o,style:{filter:c}}),(0,L.jsx)(tr,{})]})}var Qn=S.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,$n=S.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,er=S.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,tr=S.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);

    /* The light artwork is drawn pale already, so it only keeps a faint accent glow. */
    html[data-theme="light"] & {
        background: radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.06), transparent 60%);
    }
`,nr=f();function rr({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let o=w(),s=(0,I.useRef)(null),[c,l]=(0,I.useState)(()=>Math.max(1,Math.ceil(n))),u=e??`delete`;return(0,I.useEffect)(()=>{s.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));l(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,nr.createPortal)((0,L.jsx)(sr,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,L.jsxs)(cr,{role:`alertdialog`,"aria-modal":`true`,children:[(0,L.jsx)(lr,{children:o(`protected_folder`)}),(0,L.jsx)(ur,{children:o(`these_paths_are_protected_by_the_safety_settings`)}),(0,L.jsx)(dr,{children:t.map(e=>(0,L.jsxs)(fr,{children:[(0,L.jsx)(pr,{children:e.path}),(0,L.jsx)(mr,{children:o(`protected_by_pattern`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,L.jsx)(hr,{children:ir(o,u,r??!1)}),(0,L.jsx)(gr,{children:ar(o,u)}),(0,L.jsx)(_r,{children:o(`this_waits_seconds_s_before_the_button_works`,{seconds:n})}),(0,L.jsxs)(vr,{children:[(0,L.jsx)(yr,{onClick:i,ref:s,type:`button`,children:o(`cancel`)}),(0,L.jsx)(br,{disabled:c>0,onClick:a,type:`button`,children:c>0?or(o,u,c):or(o,u,0)})]})]})}),document.body)}function ir(e,t,n){switch(t){case`delete`:return e(n?`deletes_permanently`:`moves_to_the_recycle_bin`);case`move`:return e(`moves_the_entries`);case`rename`:return e(`renames_the_entry`);case`write`:return e(`writes_into_this_folder`)}}function ar(e,t){switch(t){case`delete`:return e(`nothing_has_been_deleted`);case`move`:return e(`nothing_has_been_moved`);case`rename`:return e(`nothing_has_been_renamed`);case`write`:return e(`nothing_has_been_written`)}}function or(e,t,n){let r=n>0?t===`delete`?`delete_anyway_seconds_s`:t===`move`?`move_anyway_seconds_s`:t===`rename`?`rename_anyway_seconds_s`:`write_anyway_seconds_s`:t===`delete`?`delete_anyway`:t===`move`?`move_anyway`:t===`rename`?`rename_anyway`:`write_anyway`;return n>0?e(r,{seconds:n}):e(r)}var sr=S.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Ve}
`,cr=S.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Ge}
`,lr=S.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,ur=S.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,dr=S.div`
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
`,fr=S.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,pr=S.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,mr=S.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,hr=S.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,gr=S.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,_r=S.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,vr=S.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,yr=S.button`
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
`,br=S.button`
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
`;function xr(){let e=w(),[t,n]=(0,I.useState)(null),r=(0,I.useRef)(null),i=(0,I.useRef)(null);(0,I.useEffect)(()=>(Pe(e=>new Promise(t=>{r.current=t,n(e)})),()=>Pe(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,I.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,nr.createPortal)((0,L.jsx)(Sr,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,L.jsxs)(R,{role:`alertdialog`,"aria-modal":`true`,children:[(0,L.jsx)(z,{children:e(`notice`)}),(0,L.jsx)(Cr,{children:t}),(0,L.jsx)(B,{children:(0,L.jsx)(wr,{onClick:a,ref:i,type:`button`,children:e(`ok`)})})]})}),document.body)}var Sr=S.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Ve}
`,R=S.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Ge}
`,z=S.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Cr=S.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,B=S.div`
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
`;function Tr(){let e=w(),[t,n]=(0,I.useState)(null);(0,I.useEffect)(()=>x.on(e=>{let t=e;t.type===`fs.elevation.ask`&&t.data&&n(t.data)}),[]);let r=e=>{let r=t;n(null),r&&x.request(`fs.elevation.answer`,{token:r.token,allow:e})},i=(t=>{switch(t){case`delete`:return e(`delete`);case`rename`:return e(`rename`);case`copy`:return e(`copy`);case`moveTo`:return e(`move`);case`extractArchive`:return e(`extract_archive`);case`newFolder`:case`newFolderAt`:return e(`new_folder`);case`newFile`:case`newFileAt`:return e(`new_file`);case`restoreRecycle`:return e(`restore`);case`writeFile`:return e(`save`);default:return``}})(t?.action??``);return(0,L.jsx)(Ie,{confirmLabel:e(`run_as_administrator`),message:e(`this_path_needs_administrator_rights_to_action_restart_the_app_as_administrator_and_try_again`,{path:t?.path??``,action:i.length>0?i.toLowerCase():e(`ok`).toLowerCase()}),onCancel:()=>r(!1),onConfirm:()=>r(!0),open:t!==null,title:e(`administrator_rights_required`)})}function Er(){let e=w(),[t,n]=(0,I.useState)(null),[r,i]=(0,I.useState)(``),a=(0,I.useRef)(null),o=(0,I.useRef)(null);(0,I.useEffect)(()=>(E((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>E(null)),[]),(0,I.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,nr.createPortal)((0,L.jsx)(V,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,L.jsxs)(Dr,{role:`dialog`,"aria-modal":`true`,children:[(0,L.jsx)(Or,{children:e(`archive_password`)}),(0,L.jsx)(kr,{children:t.wrong?e(`that_password_did_not_open_the_archive_try_again`):e(`this_archive_is_encrypted_enter_its_password`)}),(0,L.jsx)(H,{title:t.archive,children:t.archive}),(0,L.jsx)(Ar,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,L.jsxs)(jr,{children:[(0,L.jsx)(U,{onClick:()=>s(null),type:`button`,children:e(`cancel`)}),(0,L.jsx)(Mr,{disabled:r.length===0,onClick:c,type:`button`,children:e(`ok`)})]})]})}),document.body)}var V=S.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Ve}
`,Dr=S.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Ge}
`,Or=S.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,kr=S.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,H=S.div`
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
`,U=S.button`
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
`,Mr=S(U)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Nr({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:ee,onSelectMatches:h}){let g=w(),_=(0,I.useRef)(null),v=c??g(`search_this_folder`);(0,I.useEffect)(()=>{let e=_.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let y=e=>{e(),_.current?.focus()};return(0,L.jsxs)(Pr,{children:[(0,L.jsx)(Cn,{}),(0,L.jsx)(Fr,{"aria-label":v,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),ee())},placeholder:v,ref:_,spellCheck:!1,value:e}),!s&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Ir,{children:i===0?`0/0`:`${a+1}/${i}`}),h&&(0,L.jsx)(Lr,{disabled:i===0,onClick:h,title:g(`select_all_matches`),type:`button`,children:(0,L.jsx)(dn,{size:12})}),(0,L.jsx)(Lr,{$chevron:!0,onClick:()=>y(u),title:g(`previous_match_shift_enter`),type:`button`,children:(0,L.jsx)(pn,{size:12})}),(0,L.jsx)(Lr,{$chevron:!0,$down:!0,onClick:()=>y(d),title:g(`next_match_enter`),type:`button`,children:(0,L.jsx)(pn,{size:12})})]}),(0,L.jsx)(Rr,{$on:n,onClick:()=>y(f),title:g(`match_case`),type:`button`,children:`Aa`}),(0,L.jsx)(Rr,{$on:r,onClick:()=>y(p),title:g(`regular_expression`),type:`button`,children:`.*`}),!s&&(0,L.jsx)(zr,{$on:t===`hide`,onClick:()=>y(m),title:g(t===`hide`?`non_matching_entries_are_hidden`:`non_matching_entries_are_dimmed`),type:`button`,children:t===`hide`?(0,L.jsx)(_n,{size:12}):(0,L.jsx)(en,{size:12})}),(0,L.jsx)(Lr,{onClick:ee,title:g(`close_search_esc`),type:`button`,children:(0,L.jsx)(En,{size:12})})]})}var Pr=S.div`
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
    ${Ae}
`,Fr=S.input`
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
`,Ir=S.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Lr=S.button`
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
`,Rr=S.button`
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
`,zr=S(Rr)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`,Br=`yafm://`,Vr={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function W(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function Hr(e){return`${Br}${e===`home`?`overview`:e}`}function Ur(e){return W(e)?Vr[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Wr(e){let t=e.trim();if(t.length===0)return null;if(!W(t))return t;let n=Vr[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?Hr(n):null}function Gr({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=w(),s=j(),[c,l]=(0,I.useState)(!1),[u,d]=(0,I.useState)(``),[f,p]=(0,I.useState)([]),[m,ee]=(0,I.useState)(0),[h,g]=(0,I.useState)(null),[_,v]=(0,I.useState)(null),[y,b]=(0,I.useState)(null),te=(0,I.useRef)(null),ne=(0,I.useRef)(null),x=(0,I.useRef)(0);(0,I.useEffect)(()=>{if(!wt(e)){b(null);return}let t=k(e);if(!t){b(null);return}let n=!0;return St().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);b({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&b(null)),()=>{n=!1}},[e]),(0,I.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,I.useEffect)(()=>{r&&r!==x.current&&(x.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,I.useEffect)(()=>{c&&te.current?.select()},[c]),(0,I.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[c]);let S=()=>{d(e.replace(/\\/g,`/`)),l(!0)},re=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,I.useEffect)(()=>{if(!c){p([]);return}let e=Yr(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{ge(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),ee(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let C=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,I.useLayoutEffect)(()=>{if(!c){g(null);return}let e=()=>{let e=ne.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);g({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,L.jsxs)(ei,{onPointerDown:e=>e.stopPropagation(),ref:ne,children:[(0,L.jsxs)(ri,{children:[(0,L.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),ee(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),ee(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?C(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):re(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:te,spellCheck:!1,value:u}),(0,L.jsx)(ii,{onClick:()=>l(!1),title:o(`cancel`),type:`button`,children:(0,L.jsx)(En,{size:12})}),(0,L.jsx)(ii,{$apply:!0,onClick:re,onPointerDown:e=>e.stopPropagation(),title:o(`open_this_path`),type:`button`,children:(0,L.jsx)(dn,{size:14})})]}),f.length>0&&h&&(0,nr.createPortal)((0,L.jsx)(K,{onPointerDown:e=>e.stopPropagation(),style:{left:h.left,top:h.top,width:h.width},children:f.map((e,t)=>(0,L.jsxs)(ti,{$active:t===m,onClick:t=>C(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>ee(t),type:`button`,children:[(0,L.jsx)(nt,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,L.jsx)(ni,{children:e.name})]},e.path))}),document.body)]});let ie=t?[{label:t,path:e,icon:n}]:Kr(e,y)??Jr(e,s.places);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Xr,{onClick:S,title:o(`click_to_type_a_path`),children:ie.map((t,n)=>(0,L.jsxs)(Zr,{$last:n===ie.length-1,children:[n>0&&(0,L.jsx)(Qr,{children:(0,L.jsx)(pn,{size:9})}),(0,L.jsxs)($r,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):v({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,L.jsx)(G,{children:(0,L.jsx)(ft,{place:t.place,size:13})}):t.icon&&(0,L.jsx)(G,{children:t.icon}),t.label]})]},t.path))}),_&&(0,L.jsx)(we,{items:[{label:o(`open`),icon:(0,L.jsx)(mn,{size:14}),onSelect:()=>i(_.path)},{label:o(`open_in_new_tab`),icon:(0,L.jsx)(hn,{size:14}),onSelect:()=>i(_.path,!0)},{label:o(`copy_as_path`),icon:(0,L.jsx)(sn,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(_.path)},...W(_.path)?[{label:o(`open_with`),icon:(0,L.jsx)(Jt,{size:14}),onSelect:()=>void Pt(_.path)},{label:o(`properties`),icon:(0,L.jsx)(tn,{size:14}),onSelect:()=>void xt([_.path])}]:[]],onClose:()=>v(null),x:_.x,y:_.y})]})}function Kr(e,t){let n=k(e);if(!n)return null;let r=ot(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,L.jsx)(un,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function qr(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function Jr(e,t){let n=qr(e),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>r(t.path,e.path));t>i&&(i=t,a=e)}return a&&i>=0&&n.splice(0,i+1,{label:a.name,path:n[i].path,place:a}),n}function Yr(e){if(W(e)||wt(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var Xr=S.div`
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
`,K=S.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${He}
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
`,ti=S.button`
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
`;function ai({places:e,drives:t,recent:i,recentLimit:a,currentPath:o,activeKind:s,homePath:c=``,version:l=0,historyVersion:d=0,hiddenViews:f=[],onNavigate:p,onOpenView:h}){let[g,_]=(0,I.useState)([]),v=w(),[y,b]=(0,I.useState)(null),te=j();(0,I.useEffect)(()=>{tt().then(e=>{b(e),_(dt(e).filter(e=>e.pinned))},()=>{b(null),_([])})},[l]),(0,I.useEffect)(()=>{if(!x.available)return;let e=g.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||c).filter(e=>e.length>0);return x.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>x.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[g,c]);let ne=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>r(e.path,t));return{name:y?.placeNames?.[t]??n?.name??(u(t)||t),path:t,kind:`folder`,icon:n?.icon??y?.placeIcons?.[t]??null}}),S=s===`files`;return(0,L.jsxs)(ui,{children:[(0,L.jsxs)(di,{children:[!f.includes(`home`)&&(0,L.jsxs)(J,{$active:s===`home`,onClick:e=>h(`home`,A(e)),title:v(`overview`),type:`button`,children:[(0,L.jsx)(Qt,{}),(0,L.jsx)(Y,{children:v(`overview`)})]}),!f.includes(`recycle`)&&(0,L.jsxs)(J,{$active:s===`recycle`,onClick:e=>h(`recycle`,A(e)),title:v(`recycle_bin`),type:`button`,children:[(0,L.jsx)(cn,{}),(0,L.jsx)(Y,{children:v(`recycle_bin`)})]}),!f.includes(`gallery`)&&(0,L.jsxs)(J,{$active:s===`gallery`,onClick:e=>h(`gallery`,A(e)),title:v(`gallery`),type:`button`,children:[(0,L.jsx)(nn,{}),(0,L.jsx)(Y,{children:v(`gallery`)})]})]}),g.map(e=>(0,L.jsxs)(pi,{children:[(0,L.jsxs)(J,{as:`div`,$active:!1,children:[(0,L.jsx)(gi,{children:(0,L.jsx)(st,{panel:e,size:16})}),(0,L.jsx)(Y,{children:v(e.title)})]}),(0,L.jsx)(mi,{children:(0,L.jsxs)(hi,{children:[e.kind===`quick`&&ne(e).map(e=>(0,L.jsxs)(J,{$active:S&&r(o,e.path),onClick:t=>p(e.path,A(t)),title:e.path,type:`button`,children:[(0,L.jsx)(ft,{place:e}),(0,L.jsx)(Y,{children:e.name})]},e.path)),e.kind===`recent`&&i.slice(0,a).map(e=>{let t=ut(te,e.path);return(0,L.jsxs)(J,{$active:S&&r(o,e.path),onClick:t=>e.isDirectory?p(e.path,A(t)):void pe(e.path),title:e.path,type:`button`,children:[t&&te.useIcons?(0,L.jsx)(ft,{place:t}):(0,L.jsx)(nt,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,L.jsx)(Y,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,L.jsx)(si,{historyVersion:d,onNavigate:p}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,L.jsxs)(J,{$active:S&&r(o,e.name),onClick:t=>p(e.name,A(t)),title:e.name,type:`button`,children:[(0,L.jsx)(M,{}),(0,L.jsxs)(Y,{children:[ee(e),(0,L.jsxs)(X,{children:[m(e.freeSpace),` free`]}),(0,L.jsx)(_i,{children:(0,L.jsx)(vi,{$used:t,$tone:n(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,L.jsx)(ci,{onNavigate:p,path:e.path||c})]})})]},e.id)),!f.includes(`settings`)&&(0,L.jsx)(fi,{children:(0,L.jsxs)(J,{$active:s===`settings`,onClick:e=>h(`settings`,A(e)),title:v(`settings`),type:`button`,children:[(0,L.jsx)(tn,{}),(0,L.jsx)(Y,{children:v(`settings`)})]})})]})}var q=10,oi=40;function si({historyVersion:e=0,onNavigate:t}){let n=w(),[r,i]=(0,I.useState)(null),a=j();return(0,I.useEffect)(()=>{ye().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=ut(a,e.path);return(0,L.jsxs)(J,{$active:!1,onClick:n=>t(e.path,A(n)),title:o(n,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,L.jsx)(ft,{place:r}):(0,L.jsx)(nt,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,L.jsx)(Y,{children:r?.name||e.name})]},e.path)})}function ci({path:e,onNavigate:t}){let[n,i]=(0,I.useState)(null);(0,I.useEffect)(()=>{e&&(i(null),ge(e,!1).then(i,()=>i(null)))},[e]),(0,I.useEffect)(()=>{if(e&&x.available)return x.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&r(n.data.path,e)&&ge(e,!1).then(i,()=>void 0)})},[e]);let a=n?.entries??[],o=a.filter(e=>e.isDirectory).slice(0,q),s=a.filter(e=>!e.isDirectory).slice(0,oi);return(0,L.jsxs)(L.Fragment,{children:[o.map(e=>(0,L.jsx)(li,{entry:e,onNavigate:t},e.fullPath)),s.map(e=>(0,L.jsx)(li,{entry:e,onNavigate:t},e.fullPath))]})}function li({entry:e,onNavigate:t}){let n=j(),r=ut(n,e.fullPath);return(0,L.jsxs)(J,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,A(n)):void pe(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,L.jsx)(ft,{place:r}):(0,L.jsx)(nt,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,L.jsx)(Y,{children:r?.name||e.name})]})}var ui=S.aside`
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

    &:not(:hover) ${()=>X},
    &:not(:hover) ${()=>_i} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,di=S.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,fi=S(di)`
    margin-top: auto;
`,pi=S.div`
    display: flex;
    flex-direction: column;
`,mi=S.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${ui}:hover ${pi}:hover > & {
        grid-template-rows: 1fr;
    }
`,hi=S.div`
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
`,X=S.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,_i=S.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,vi=S.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,yi={home:`overview`,settings:`settings`,recycle:`recycle_bin`,gallery:`gallery`},bi=S.span`
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
`;function xi({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=w(),a=(0,I.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,I.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)},t=()=>r(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[n,r]),(0,L.jsxs)(Ci,{ref:a,children:[(0,L.jsxs)(wi,{$active:n,onClick:()=>r(!n),title:s>0?o(i,s,`k_1_operation_running`,`count_operations_running`):i(`status_center`),type:`button`,children:[(0,L.jsx)(xn,{size:13}),c>0&&(0,L.jsx)(bi,{children:c>9?`9+`:c})]}),n&&(0,L.jsxs)(Ti,{children:[(0,L.jsxs)(Ei,{children:[(0,L.jsxs)(Di,{children:[(0,L.jsx)(xn,{size:12}),i(`status_center`)]}),(0,L.jsxs)(Oi,{children:[(0,L.jsx)(ki,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`clear_finished`)}),(0,L.jsx)(Ai,{onClick:()=>r(!1),title:i(`close`),type:`button`,children:(0,L.jsx)(En,{size:10})})]})]}),e.length===0?(0,L.jsx)(Mi,{children:i(`no_operations_yet`)}):(0,L.jsx)(ji,{children:e.map(e=>(0,L.jsx)(Si,{task:e},e.id))})]})]})}function Si({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,L.jsxs)(Ni,{children:[(0,L.jsxs)(Pi,{children:[(0,L.jsx)(Fi,{$state:e.state,children:e.state===`done`?(0,L.jsx)(dn,{size:10}):e.state===`failed`?(0,L.jsx)(En,{size:10}):(0,L.jsx)(Ii,{})}),(0,L.jsx)(Li,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,L.jsxs)(Ri,{children:[m(e.bytesDone),` / `,m(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,L.jsxs)(Ri,{children:[e.done,` / `,e.total]})]}),i&&(0,L.jsx)(zi,{children:(0,L.jsx)(Bi,{$percent:r,$indeterminate:t===0})}),e.error&&(0,L.jsx)(Vi,{children:e.error})]})}var Ci=S.div`
    position: relative;
    display: flex;
`,wi=S.button`
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
`,Ti=S.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${He}
    ${Re}
`,Ei=S.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Di=S.span`
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
`,Oi=S.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,ki=S.button`
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
`,Ai=S.button`
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
`,ji=S.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,Mi=S.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Ni=S.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${Ve}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,Pi=S.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,Fi=S.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,Ii=S.span`
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
`,Li=S.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ri=S.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,zi=S.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,Bi=S.div`
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
`,Vi=S.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function Hi(){return x.available?(await x.request(`fs.history.list`)).entries:[]}async function Ui(e){return x.available?(await x.request(`fs.history.undoTo`,{id:e})).ok:!1}function Wi(){let e=w(),[t,n]=(0,I.useState)(!1),[r,i]=(0,I.useState)([]),[a,o]=(0,I.useState)(!1),s=(0,I.useRef)(null),c=()=>void Hi().then(i,()=>i([]));(0,I.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)},i=()=>n(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,i),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,i)}},[t]);let l=async e=>{o(!0);try{await Ui(e),c()}finally{o(!1)}};return(0,L.jsxs)(qi,{ref:s,children:[(0,L.jsx)(Ji,{$active:t,onClick:()=>n(e=>!e),title:e(`history`),type:`button`,children:(0,L.jsx)(bn,{size:14})}),t&&(0,L.jsxs)(Yi,{children:[(0,L.jsxs)(Xi,{children:[(0,L.jsxs)(Zi,{children:[(0,L.jsx)(bn,{size:12}),e(`history`)]}),(0,L.jsx)(Qi,{onClick:()=>n(!1),title:e(`close`),type:`button`,children:(0,L.jsx)(En,{size:10})})]}),r.length===0?(0,L.jsx)(sa,{children:e(`no_operations_yet`)}):(0,L.jsx)($i,{children:r.map(t=>(0,L.jsxs)(ea,{children:[(0,L.jsxs)(ta,{children:[(0,L.jsxs)(na,{children:[(0,L.jsx)(Ki,{label:t.label}),Gi(e,t.label)]}),(0,L.jsx)(ra,{children:d(t.at)})]}),t.paths.length>0&&(0,L.jsxs)(ia,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,L.jsx)(aa,{children:(0,L.jsx)(oa,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`undo`)})})]},t.id))})]})]})}function Gi(e,t){if(t===`new_folder`)return e(`new_folder`);if(t===`new_file`)return e(`new_file`);if(t===`paste_text`)return e(`paste_text`);if(t===`paste_image`)return e(`paste_image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`move`?`move_count_items`:t===`copy`?`copy_count_items`:`delete_count_items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`rename`)} ${i[1]}`:t}function Ki({label:e}){return e.startsWith(`delete`)?(0,L.jsx)(cn,{size:13}):e.startsWith(`move`)||e.startsWith(`copy`)?(0,L.jsx)(sn,{size:13}):e.startsWith(`rename`)?(0,L.jsx)(fn,{size:13}):e.startsWith(`compress`)?(0,L.jsx)(yn,{size:13}):e.startsWith(`new`)?(0,L.jsx)(hn,{size:13}):(0,L.jsx)(mn,{size:13})}var qi=S.div`
    position: relative;
    display: flex;
`,Ji=S.button`
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
`,Yi=S.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${He}
    ${Re}
`,Xi=S.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Zi=S.span`
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
`,Qi=S.button`
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
`,$i=S.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,ea=S.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,ta=S.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,na=S.span`
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
`,ra=S.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,ia=S.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,aa=S.div`
    display: flex;
    justify-content: flex-end;
`,oa=S.button`
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
`,sa=S.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,ca=(e=>(e[e.Border=-1]=`Border`,e[e.Data=0]=`Data`,e[e.Function=1]=`Function`,e[e.Position=2]=`Position`,e[e.Timing=3]=`Timing`,e[e.Alignment=4]=`Alignment`,e))(ca||{}),la=[0,1],ua=[1,0],da=[2,3],fa=[3,2],pa={L:la,M:ua,Q:da,H:fa},ma=/^\d*$/,ha=/^[A-Z0-9 $%*+./:-]*$/,ga=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`,_a=1,va=40,ya=3,ba=3,xa=40,Sa=10,Ca=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],wa=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],Ta=class{constructor(e,t,n,r){if(this.version=e,this.ecc=t,e<_a||e>va)throw RangeError(`Version value out of range`);if(r<-1||r>7)throw RangeError(`Mask value out of range`);this.size=e*4+17;let i=Array.from({length:this.size}).fill(!1);for(let e=0;e<this.size;e++)this.modules.push(i.slice()),this.types.push(i.map(()=>0));this.drawFunctionPatterns();let a=this.addEccAndInterleave(n);if(this.drawCodewords(a),r===-1){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let n=this.getPenaltyScore();n<e&&(r=t,e=n),this.applyMask(t)}}this.mask=r,this.applyMask(r),this.drawFormatBits(r)}size;mask;modules=[];types=[];getModule(e,t){return e>=0&&e<this.size&&t>=0&&t<this.size&&this.modules[t][e]}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0,ca.Timing),this.setFunctionModule(e,6,e%2==0,ca.Timing);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n===0&&r===0||n===0&&r===t-1||n===t-1&&r===0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.ecc[1]<<3|e,n=t;for(let e=0;e<10;e++)n=n<<1^(n>>>9)*1335;let r=(t<<10|n)^21522;for(let e=0;e<=5;e++)this.setFunctionModule(8,e,Da(r,e));this.setFunctionModule(8,7,Da(r,6)),this.setFunctionModule(8,8,Da(r,7)),this.setFunctionModule(7,8,Da(r,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,Da(r,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,Da(r,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,Da(r,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;for(let e=0;e<18;e++){let n=Da(t,e),r=this.size-11+e%3,i=Math.floor(e/3);this.setFunctionModule(r,i,n),this.setFunctionModule(i,r,n)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){let i=Math.max(Math.abs(r),Math.abs(n)),a=e+r,o=t+n;a>=0&&a<this.size&&o>=0&&o<this.size&&this.setFunctionModule(a,o,i!==2&&i!==4,ca.Position)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!==1,ca.Alignment)}setFunctionModule(e,t,n,r=ca.Function){this.modules[t][e]=n,this.types[t][e]=r}addEccAndInterleave(e){let t=this.version,n=this.ecc;if(e.length!==Ha(t,n))throw RangeError(`Invalid argument`);let r=wa[n[0]][t],i=Ca[n[0]][t],a=Math.floor(Va(t)/8),o=r-a%r,s=Math.floor(a/r),c=[],l=Ua(i);for(let t=0,n=0;t<r;t++){let r=e.slice(n,n+s-i+(t<o?0:1));n+=r.length;let a=Wa(r,l);t<o&&r.push(0),c.push(r.concat(a))}let u=[];for(let e=0;e<c[0].length;e++)c.forEach((t,n)=>{(e!==s-i||n>=o)&&u.push(t[e])});return u}drawCodewords(e){if(e.length!==Math.floor(Va(this.version)/8))throw RangeError(`Invalid argument`);let t=0;for(let n=this.size-1;n>=1;n-=2){n===6&&(n=5);for(let r=0;r<this.size;r++)for(let i=0;i<2;i++){let a=n-i,o=n+1&2?r:this.size-1-r;!this.types[o][a]&&t<e.length*8&&(this.modules[o][a]=Da(e[t>>>3],7-(t&7)),t++)}}}applyMask(e){if(e<0||e>7)throw RangeError(`Mask value out of range`);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw Error(`Unreachable`)}!this.types[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[t][a]===n?(r++,r===5?e+=ya:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*xa),n=this.modules[t][a],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*xa}for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[a][t]===n?(r++,r===5?e+=ya:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*xa),n=this.modules[a][t],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*xa}for(let t=0;t<this.size-1;t++)for(let n=0;n<this.size-1;n++){let r=this.modules[t][n];r===this.modules[t][n+1]&&r===this.modules[t+1][n]&&r===this.modules[t+1][n+1]&&(e+=ba)}let t=0;for(let e of this.modules)t=e.reduce((e,t)=>e+ +!!t,t);let n=this.size*this.size,r=Math.ceil(Math.abs(t*20-n*10)/n)-1;return e+=r*Sa,e}getAlignmentPatternPositions(){if(this.version===1)return[];{let e=Math.floor(this.version/7)+2,t=this.version===32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}finderPenaltyCountPatterns(e){let t=e[1],n=t>0&&e[2]===t&&e[3]===t*3&&e[4]===t&&e[5]===t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]===0&&(e+=this.size),t.pop(),t.unshift(e)}};function Ea(e,t,n){if(t<0||t>31||e>>>t)throw RangeError(`Value out of range`);for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function Da(e,t){return!!(e>>>t&1)}var Oa=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw RangeError(`Invalid argument`);this.bitData=n.slice()}getData(){return this.bitData.slice()}},ka=[1,10,12,14],Aa=[2,9,11,13],ja=[4,8,16,16];function Ma(e,t){return e[Math.floor((t+7)/17)+1]}function Na(e){let t=[];for(let n of e)Ea(n,8,t);return new Oa(ja,e.length,t)}function Pa(e){if(!La(e))throw RangeError(`String contains non-numeric characters`);let t=[];for(let n=0;n<e.length;){let r=Math.min(e.length-n,3);Ea(Number.parseInt(e.substring(n,n+r),10),r*3+1,t),n+=r}return new Oa(ka,e.length,t)}function Fa(e){if(!Ra(e))throw RangeError(`String contains unencodable characters in alphanumeric mode`);let t=[],n=0;for(;n+2<=e.length;n+=2){let r=ga.indexOf(e.charAt(n))*45;r+=ga.indexOf(e.charAt(n+1)),Ea(r,11,t)}return n<e.length&&Ea(ga.indexOf(e.charAt(n)),6,t),new Oa(Aa,e.length,t)}function Ia(e){return e===``?[]:La(e)?[Pa(e)]:Ra(e)?[Fa(e)]:[Na(Ba(e))]}function La(e){return ma.test(e)}function Ra(e){return ha.test(e)}function za(e,t){let n=0;for(let r of e){let e=Ma(r.mode,t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}function Ba(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)===`%`?(t.push(Number.parseInt(e.substring(n+1,n+3),16)),n+=2):t.push(e.charCodeAt(n));return t}function Va(e){if(e<_a||e>va)throw RangeError(`Version number out of range`);let t=(16*e+128)*e+64;if(e>=2){let n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return t}function Ha(e,t){return Math.floor(Va(e)/8)-Ca[t[0]][e]*wa[t[0]][e]}function Ua(e){if(e<1||e>255)throw RangeError(`Degree out of range`);let t=[];for(let n=0;n<e-1;n++)t.push(0);t.push(1);let n=1;for(let r=0;r<e;r++){for(let e=0;e<t.length;e++)t[e]=Ga(t[e],n),e+1<t.length&&(t[e]^=t[e+1]);n=Ga(n,2)}return t}function Wa(e,t){let n=t.map(e=>0);for(let r of e){let e=r^n.shift();n.push(0),t.forEach((t,r)=>n[r]^=Ga(t,e))}return n}function Ga(e,t){if(e>>>8||t>>>8)throw RangeError(`Byte out of range`);let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return n}function Ka(e,t,n=1,r=40,i=-1,a=!0){if(!(_a<=n&&n<=r&&r<=va)||i<-1||i>7)throw RangeError(`Invalid value`);let o,s;for(o=n;;o++){let n=Ha(o,t)*8,i=za(e,o);if(i<=n){s=i;break}if(o>=r)throw RangeError(`Data too long`)}for(let e of[ua,da,fa])a&&s<=Ha(o,e)*8&&(t=e);let c=[];for(let t of e){Ea(t.mode[0],4,c),Ea(t.numChars,Ma(t.mode,o),c);for(let e of t.getData())c.push(e)}let l=Ha(o,t)*8;Ea(0,Math.min(4,l-c.length),c),Ea(0,(8-c.length%8)%8,c);for(let e=236;c.length<l;e^=253)Ea(e,8,c);let u=Array.from({length:Math.ceil(c.length/8)},()=>0);return c.forEach((e,t)=>u[t>>>3]|=e<<7-(t&7)),new Ta(o,t,u,i)}function qa(e,t){let{ecc:n=`L`,boostEcc:r=!1,minVersion:i=1,maxVersion:a=40,maskPattern:o=-1,border:s=1}=t||{},c=typeof e==`string`?Ia(e):Array.isArray(e)?[Na(e)]:void 0;if(!c)throw Error(`uqr only supports encoding string and binary data, but got: ${typeof e}`);let l=Ka(c,pa[n],i,a,o,r),u=Ja({version:l.version,maskPattern:l.mask,size:l.size,data:l.modules,types:l.types},s);return t?.invert&&(u.data=u.data.map(e=>e.map(e=>!e))),t?.onEncoded?.(u),u}function Ja(e,t=1){if(!t)return e;let{size:n}=e,r=n+t*2;e.size=r,e.data.forEach(e=>{for(let n=0;n<t;n++)e.unshift(!1),e.push(!1)});for(let n=0;n<t;n++)e.data.unshift(Array.from({length:r},e=>!1)),e.data.push(Array.from({length:r},e=>!1));let i=ca.Border;e.types.forEach(e=>{for(let n=0;n<t;n++)e.unshift(i),e.push(i)});for(let n=0;n<t;n++)e.types.unshift(Array.from({length:r},e=>i)),e.types.push(Array.from({length:r},e=>i));return e}function Ya(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Xa(e,t={}){let n=qa(e,t),{pixelSize:r=10,whiteColor:i=`white`,blackColor:a=`black`}=t,o=n.size*r,s=n.size*r,c=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${o}">`,l=[];for(let e=0;e<n.size;e++)for(let t=0;t<n.size;t++){let i=t*r,a=e*r;n.data[e][t]&&l.push(`M${i},${a}h${r}v${r}h-${r}z`)}return c+=`<rect fill="${Ya(i)}" width="${s}" height="${o}"/>`,c+=`<path fill="${Ya(a)}" d="${l.join(``)}"/>`,c+=`</svg>`,c}function Za({currentFolder:e}){let t=w(),[n,i]=(0,I.useState)(!1),[a,o]=(0,I.useState)(null),[s,c]=(0,I.useState)(!1),l=(0,I.useRef)(null);(0,I.useEffect)(()=>{if(!n)return;let e=()=>void jt().then(o,()=>void 0);e();let t=window.setInterval(e,2500),r=e=>{l.current?.contains(e.target)||i(!1)},a=()=>i(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,a),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,a)}},[n]),(0,I.useEffect)(()=>{let e=()=>void jt().then(o,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{o(await e())}finally{c(!1)}},d=a?.shares.some(t=>r(t.path,e))??!1;return(0,L.jsxs)(Qa,{ref:l,children:[(0,L.jsxs)($a,{$active:n,onClick:()=>i(e=>!e),title:t(`share_folders`),type:`button`,children:[(0,L.jsx)(un,{size:15}),a&&a.shares.length>0&&(0,L.jsx)(bi,{children:a.shares.length>9?`9+`:a.shares.length})]}),n&&(0,L.jsxs)(eo,{children:[(0,L.jsxs)(to,{children:[(0,L.jsxs)(no,{children:[(0,L.jsx)(vn,{size:12}),t(`share`)]}),(0,L.jsx)(ro,{onClick:()=>i(!1),title:t(`close`),type:`button`,children:(0,L.jsx)(En,{size:10})})]}),(0,L.jsxs)(io,{children:[(0,L.jsxs)(ao,{children:[(0,L.jsx)(wn,{size:15}),(0,L.jsxs)(`span`,{children:[(0,L.jsx)(`strong`,{children:a?.deviceName||t(`this_device`)}),(0,L.jsx)(uo,{children:a?.fingerprint??``})]})]}),a?.shares.length===0&&(0,L.jsx)(fo,{children:t(`no_folders_are_shared_yet`)}),a?.shares.map(e=>(0,L.jsxs)(po,{children:[(0,L.jsxs)(mo,{children:[(0,L.jsx)(ho,{title:e.path,children:e.name}),(0,L.jsx)(_o,{disabled:s,onClick:()=>void u(()=>Ut(e.id)),title:t(`stop_sharing`),type:`button`,children:(0,L.jsx)(En,{size:10})})]}),(0,L.jsx)(go,{title:e.path,children:e.path}),(0,L.jsxs)(vo,{children:[(0,L.jsxs)(yo,{$active:e.mode===`client`,onClick:()=>void u(()=>it(e.id,`client`)),title:t(`only_paired_devices_can_open_this_folder_in_the_app`),type:`button`,children:[(0,L.jsx)(wn,{size:11}),t(`app`)]}),(0,L.jsxs)(yo,{$active:e.mode===`web`,onClick:()=>void u(()=>it(e.id,`web`)),title:t(`any_device_with_a_browser_can_open_this_folder`),type:`button`,children:[(0,L.jsx)(Yt,{size:11}),t(`web`)]})]})]},e.id)),(0,L.jsxs)(bo,{disabled:s||e.length===0||d,onClick:()=>void u(()=>kt(e,`client`)),title:d?t(`this_folder_is_already_shared`):e,type:`button`,children:[(0,L.jsx)(hn,{size:12}),t(`share_this_folder`)]}),a?.webRunning&&(0,L.jsxs)(xo,{children:[(0,L.jsxs)(So,{children:[(0,L.jsx)(Yt,{size:12}),t(`browser_access`)]}),(0,L.jsxs)(so,{children:[(0,L.jsx)(co,{children:a.urls.map(e=>(0,L.jsx)(Co,{onClick:()=>void N(e),type:`button`,children:e},e))}),a.preferredUrl&&(0,L.jsx)(oo,{value:a.preferredUrl})]}),(0,L.jsx)(uo,{children:t(`open_one_of_these_addresses_on_any_device_on_the_same_network`)})]})]})]})]})}var Qa=S.div`
    position: relative;
    display: flex;
`,$a=S.button`
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
`,eo=S.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${He}
    ${Re}
`,to=S.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,no=S.span`
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
`,ro=S.button`
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
`,io=S.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,ao=S.div`
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
`;function oo({value:e}){let t=w(),n=(0,I.useMemo)(()=>Xa(e,{ecc:`M`,border:2,pixelSize:4,blackColor:`#000000`,whiteColor:`#ffffff`}),[e]);return(0,L.jsx)(lo,{dangerouslySetInnerHTML:{__html:n},role:`img`,title:t(`scan_the_code_to_open_this_share_on_a_phone`)})}var so=S.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,co=S.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
`,lo=S.div`
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
`,uo=S.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,fo=S.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,po=S.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,mo=S.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,ho=S.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,go=S.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,_o=S.button`
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
`,vo=S.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,yo=S.button`
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
`,bo=S.button`
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
`,xo=S.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,So=S.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,Co=S.button`
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
`;function wo(){let e=w();return(0,L.jsx)(To,{title:e(`always_applies_to_every_folder`),children:e(`global`)})}var To=S.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`;function Eo({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=w(),[s,c]=(0,I.useState)(!1),l=(0,I.useRef)(null);(0,I.useEffect)(()=>{if(!s)return;let e=()=>c(!1),t=e=>{l.current?.contains(e.target)||c(!1)},n=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`keydown`,n)}},[s]),(0,I.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=Rt.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,L.jsxs)(Do,{ref:l,children:[(0,L.jsx)(Oo,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`view`),type:`button`,children:e.mode===`grid`?(0,L.jsx)(Zt,{size:14}):(0,L.jsx)(rn,{size:14})}),s&&(0,L.jsxs)(ko,{children:[(0,L.jsxs)(Ao,{children:[(0,L.jsx)(on,{size:11}),o(`view`)]}),(0,L.jsxs)(Mo,{children:[(0,L.jsxs)(No,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,L.jsx)(rn,{size:12}),` `,o(`list`)]}),(0,L.jsxs)(No,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,L.jsx)(Zt,{size:12}),` `,o(`grid`)]})]}),(0,L.jsxs)(Ao,{children:[(0,L.jsx)(rn,{size:11}),o(`list_icon_size`)]}),(0,L.jsxs)(Po,{children:[(0,L.jsx)(`input`,{"aria-label":o(`list_icon_size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,L.jsxs)(Fo,{children:[e.iconSize,`px`]})]}),(0,L.jsxs)(Ao,{children:[(0,L.jsx)(Zt,{size:11}),o(`grid_size`)]}),(0,L.jsxs)(Po,{children:[(0,L.jsx)(`input`,{"aria-label":o(`grid_size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,L.jsxs)(Fo,{children:[e.gridSize,`px`]})]}),(0,L.jsxs)(Ao,{children:[(0,L.jsx)(Tn,{size:11}),o(`columns`),(0,L.jsx)(wo,{}),(0,L.jsx)(jo,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:o(`reset_column_widths`),type:`button`,children:o(`reset_widths`)})]}),Rt.map(e=>(0,L.jsxs)(Io,{children:[(0,L.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,L.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,L.jsxs)(Io,{children:[(0,L.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,L.jsx)(`span`,{children:o(`link_target_after_the_name`)})]}),(0,L.jsxs)(Ao,{children:[(0,L.jsx)(en,{size:11}),o(`preview_panel`),(0,L.jsx)(wo,{})]}),(0,L.jsxs)(Io,{children:[(0,L.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,L.jsx)(`span`,{children:o(`preview_under_the_list`)})]})]})]})}var Do=S.div`
    position: relative;
    display: flex;
    height: 100%;
`,Oo=S.button`
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
`,ko=S.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${He}
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
`,Ao=S.div`
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
`,jo=S.button`
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
`,Mo=S.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,No=S.button`
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
`,Po=S.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,Fo=S.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,Io=S.label`
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
`,Lo=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),Ro=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),zo=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),Bo=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,L.jsx)(`path`,{d:`M2 5h6`})}),Vo=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,L.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Ho=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,L.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,L.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function Uo({tabs:e,activeId:t,closedTabs:n,onRestoreClosed:r,onSelect:i,onClose:a,onNewTab:o,onReorder:s,onTransferToTab:c,view:l,onViewChange:u,onColumns:d,showImages:f,onShowImages:p,tasks:m,onClearTasks:ee,activityOpen:h,onActivityOpenChange:g,trayCount:_,trayVisible:v,onToggleTray:y,split:te,canSplit:ne,onToggleSplit:x,details:S,canDetails:re,onToggleDetails:C,shortcuts:ie,currentFolder:ae}){let T=w(),se=b(),ce=oe(),[le,ue]=(0,I.useState)({left:!1,right:!1}),[de,fe]=(0,I.useState)(null),[pe,me]=(0,I.useState)(null),[he,ge]=(0,I.useState)(null),_e=(0,I.useRef)(null),ve=(0,I.useRef)(null),ye=(0,I.useRef)(null),be=(0,I.useCallback)(()=>{let e=ve.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;ue(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,I.useEffect)(()=>{be();let e=ve.current;if(!e)return;let t=new ResizeObserver(be);return t.observe(e),()=>t.disconnect()},[be,e.length]),(0,I.useEffect)(()=>()=>{_e.current&&window.clearTimeout(_e.current.timer)},[]),(0,I.useEffect)(()=>{ye.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let xe=e=>ve.current?.scrollBy({left:e,behavior:`smooth`}),Se=()=>{_e.current&&window.clearTimeout(_e.current.timer),_e.current=null,ge(null)};return(0,L.jsxs)(qo,{children:[(0,L.jsx)(Jo,{children:(0,L.jsx)(wn,{size:19})}),(0,L.jsx)(rs,{disabled:n.length===0,onClick:e=>{let t=e.currentTarget.getBoundingClientRect();me({x:t.left,y:t.bottom+4})},title:T(`recently_closed_tabs`),type:`button`,children:(0,L.jsx)(bn,{size:14})}),(0,L.jsxs)(Yo,{children:[le.left&&(0,L.jsx)(Zo,{onClick:()=>xe(-180),title:T(`scroll_tabs_left`),type:`button`,children:(0,L.jsx)(Lo,{})}),(0,L.jsx)(Xo,{onScroll:be,onWheel:e=>{let t=ve.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:ve,children:e.map(e=>(0,L.jsxs)(Qo,{$active:e.id===t,$dragging:de===e.id,$dropTarget:he===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!pt(t.dataTransfer)||!Wo(e)||(t.preventDefault(),_e.current?.id===e.id))return;Se(),ge(e.id);let n=window.setTimeout(()=>{i(e.id),_e.current=null},500);_e.current={id:e.id,timer:n}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(_e.current?.id===e.id||he===e.id)&&Se()},onDragEnd:()=>{fe(null),Se()},onDragOver:t=>{(de||pt(t.dataTransfer)&&Wo(e))&&(t.preventDefault(),pt(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>fe(e.id),onDrop:t=>{if(t.preventDefault(),de)s(de,e.id);else if(Wo(e)&&pt(t.dataTransfer)){let{paths:n,move:r}=At(t);n.length>0&&(i(e.id),c(n,e.path,!t.ctrlKey&&r))}fe(null),Se()},onClick:()=>i(e.id),ref:e.id===t?ye:void 0,title:e.path||e.title,type:`button`,children:[(0,L.jsx)(Go,{tab:e}),(0,L.jsx)($o,{children:e.title}),e.partner&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(es,{children:`|`}),(0,L.jsx)(Ko,{place:e.partner.place}),(0,L.jsx)($o,{children:e.partner.title})]}),(0,L.jsx)(ts,{"data-shortcut":O(ie.closeTab),onClick:t=>{t.stopPropagation(),a(e.id)},title:T(`close_tab`),children:(0,L.jsx)(zo,{})})]},e.id))}),le.right&&(0,L.jsx)(Zo,{onClick:()=>xe(180),title:T(`scroll_tabs_right`),type:`button`,children:(0,L.jsx)(Ro,{})}),(0,L.jsx)(ns,{"data-shortcut":O(ie.newTab),onClick:o,title:T(`new_tab`),type:`button`,children:(0,L.jsx)(hn,{size:13})})]}),(0,L.jsx)(is,{...ce}),(0,L.jsxs)(as,{children:[(0,L.jsx)(ss,{$active:te,"data-shortcut":O(ie.splitView),disabled:!ne,onClick:x,title:T(te?`close_split_view`:`split_view`),type:`button`,children:(0,L.jsx)(Tn,{size:15})}),(0,L.jsx)(ss,{$active:S,disabled:!re,onClick:C,title:T(S?`hide_details_panel`:`show_details_panel`),type:`button`,children:(0,L.jsx)(on,{size:15})}),(0,L.jsxs)(os,{$active:v,onClick:y,title:T(v?`hide_file_tray`:`show_file_tray`),type:`button`,children:[(0,L.jsx)(an,{size:14}),_>0&&(0,L.jsx)(bi,{children:_>9?`9+`:_})]}),(0,L.jsx)(Wi,{}),(0,L.jsx)(Za,{currentFolder:ae}),(0,L.jsx)(xi,{tasks:m,onClear:ee,open:h,onOpenChange:g}),(0,L.jsx)(Eo,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:u,onColumns:d,onShowImages:p,showImages:f,view:l}),(0,L.jsx)(cs,{onClick:se.minimize,title:T(`minimize`),type:`button`,children:(0,L.jsx)(Bo,{})}),(0,L.jsx)(cs,{onClick:se.toggleMaximize,title:se.maximized?T(`restore`):T(`maximize`),type:`button`,children:se.maximized?(0,L.jsx)(Ho,{}):(0,L.jsx)(Vo,{})}),(0,L.jsx)(ls,{onClick:se.close,title:T(`close`),type:`button`,children:(0,L.jsx)(zo,{})})]}),pe&&(0,L.jsx)(we,{items:[...n].reverse().map((e,t)=>{let i=Ur(e);return{label:i?T(yi[i]):e,onSelect:()=>{me(null),r(n.length-1-t)}}}),onClose:()=>me(null),x:pe.x,y:pe.y})]})}function Wo(e){return e.kind===`files`&&(!v(e.path)||a(e.path))}function Go({tab:e}){switch(e.kind){case`home`:return(0,L.jsx)(Dn,{size:13});case`settings`:return(0,L.jsx)(tn,{size:13});case`recycle`:return(0,L.jsx)(cn,{size:13});default:return e.archive?(0,L.jsx)(yn,{size:13}):(0,L.jsx)(Ko,{place:e.place})}}function Ko({place:e}){return e?(0,L.jsx)(ft,{place:e,size:13}):(0,L.jsx)(gn,{size:13})}var qo=S.header`
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
`,Jo=S.span`
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
`,Yo=S.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,Xo=S.div`
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
`,Zo=S.button`
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
`,Qo=S.button`
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
`,$o=S.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,es=S.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,ts=S.span`
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
`,ns=S.button`
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
`,rs=S.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    margin-left: 6px;
    margin-bottom: 2px;
    border: 1px solid transparent;
    border-radius: 8px;
    background: transparent;
    color: var(--text-muted);
    cursor: default;

    &:hover:not(:disabled) {
        background: rgba(var(--accent-rgb), 0.10);
        border-color: var(--border-color);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.35;
    }
`,is=S.div`
    flex: 1;
    min-width: 28px;
`,as=S.div`
    display: flex;
    flex-shrink: 0;
`,os=S.button`
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
`,ss=S.button`
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
`,cs=S.button`
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
`,ls=S(cs)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function us(){let[e,t]=(0,I.useState)(null),n=(0,I.useRef)(null),r=(0,I.useRef)(void 0);return(0,I.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`blur`,i),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`blur`,i),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,nr.createPortal)((0,L.jsx)(ds,{tooltip:e}),document.body):null}function ds({tooltip:e}){let t=(0,I.useRef)(null),[n,r]=(0,I.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,I.useState)(()=>e.bottom+6);return(0,I.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,L.jsxs)(fs,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,L.jsx)(ps,{children:e.text}),e.shortcut&&(0,L.jsx)(ms,{children:e.shortcut})]})}var fs=S.div`
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
    ${Ve}
`,ps=S.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,ms=S.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,hs=[{id:`ui`,label:`interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`interface`},{id:`names`,label:`file_names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`interface`},{id:`details`,label:`details_panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`interface`},{id:`path`,label:`address_bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`monospace`},{id:`mono`,label:`monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`text_preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`monospace`}];function gs(e){return`"${e.replaceAll(`"`,``)}"`}function _s(e){let t=document.documentElement.style;for(let n of hs){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${gs(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function vs(){return x.available?(await x.request(`app.fonts`)).fonts??[]:[]}function ys({deviceName:e,code:t,onAccept:n,onReject:r}){let i=w(),a=(0,I.useRef)(null);return(0,I.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,nr.createPortal)((0,L.jsx)(bs,{children:(0,L.jsxs)(xs,{role:`alertdialog`,"aria-modal":`true`,children:[(0,L.jsxs)(Ss,{children:[(0,L.jsx)(un,{size:15}),i(`pair_for_sharing`)]}),(0,L.jsx)(Cs,{children:i(`device_wants_to_pair_with_this_device_for_sharing_folders`,{device:e})}),(0,L.jsx)(ws,{children:t}),(0,L.jsx)(Ts,{children:i(`check_that_the_other_device_shows_the_same_code_before_accepting`)}),(0,L.jsxs)(Es,{children:[(0,L.jsx)(Ds,{onClick:r,type:`button`,children:i(`reject`)}),(0,L.jsx)(Os,{onClick:n,ref:a,type:`button`,children:i(`accept`)})]})]})}),document.body)}var bs=S.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${Ve}
`,xs=S.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${Ge}
`,Ss=S.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,Cs=S.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,ws=S.div`
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
`,Ts=S.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Es=S.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,Ds=S.button`
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
`,Os=S(Ds)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,ks=S.button`
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
`,As=S.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,js=`modulepreload`,Ms=function(e){return`/`+e},Ns={},Ps=function(e){return e.pathname.endsWith(`.css`)},Fs=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Is=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Ms(t,n);let r=s(t),i=Ps(r);return Fs(Ns,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:js,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Ls=(0,I.lazy)(()=>Is(()=>import(`./OverviewView-Cc872J0X.js`).then(e=>e.n).then(e=>({default:e.OverviewView})),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),Rs=(0,I.lazy)(()=>Is(()=>import(`./SettingsView-Dwj6PHig.js`).then(e=>({default:e.SettingsView})),__vite__mapDeps([11,1,2,4,5,3,6,7,9,8,10]))),zs=(0,I.lazy)(()=>Is(()=>import(`./GalleryView-Dm5vf3ef.js`).then(e=>e.n).then(e=>({default:e.GalleryView})),__vite__mapDeps([12,1,2,4,5,3,6,9]))),Bs=(0,I.lazy)(()=>Is(()=>import(`./RecycleView-DqPvJ83A.js`).then(e=>({default:e.RecycleView})),__vite__mapDeps([13,1,2,4,5,3,6,8]))),Vs=0,Hs=new Set;function Us(e){Hs.add(e),x.send({type:`app.navigate.done`,payload:{path:e}})}var Ws=20,Gs=[{value:`0`,label:`auto`},{value:`932`,label:`japanese_cp932`},{value:`936`,label:`simplified_chinese_cp936`},{value:`950`,label:`traditional_chinese_cp950`},{value:`949`,label:`korean_cp949`},{value:`1252`,label:`western_cp1252`},{value:`1250`,label:`central_european_cp1250`},{value:`1251`,label:`cyrillic_cp1251`},{value:`1254`,label:`turkish_cp1254`},{value:`1253`,label:`greek_cp1253`},{value:`1256`,label:`arabic_cp1256`},{value:`1255`,label:`hebrew_cp1255`},{value:`1257`,label:`baltic_cp1257`},{value:`874`,label:`thai_cp874`},{value:`65001`,label:`utf_8`}];function Ks(e){return e.history[e.index]??Hr(`home`)}function Z(e){return Ur(Ks(e))??`files`}function Q(e){let t=Ks(e);return Ur(t)?``:e.listing?.path||t}function qs(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||Z(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function Js(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function Ys(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||Le.iconSize,gridSize:e.view?.gridSize||t.gridSize||Le.gridSize,sort:e.view?.sort??Le.sort,sortDescending:e.view?.sortDescending??Le.sortDescending,columns:t.columns??T.columns??[]}}function Xs(e=Hr(`home`)){return Vs+=1,{id:`tab-${Vs}`,listing:null,loading:!Ur(e),error:null,history:[e],index:0,fresh:!0,view:null}}function Zs(e){return e instanceof Error?e.message:String(e)}function Qs(e){let t=k(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return ot(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function $s(e){let t=u(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function ec(e){return v(e)?Ne(e):void 0}function tc(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return o(e,t.entries.length,`k_1_item_size`,`count_items_size`,{size:m(n)})}function nc(){let e=w(),[n,i]=(0,I.useState)(()=>[Xs()]),[d,f]=(0,I.useState)(()=>n[0].id),[m,ee]=(0,I.useState)(null),[_,y]=(0,I.useState)(()=>{let e=Je(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[b,te]=(0,I.useState)([]),[ne,S]=(0,I.useState)([]),[C,oe]=(0,I.useState)(null),[ye,Oe]=(0,I.useState)(null),[Ae,je]=(0,I.useState)(null),Me=ie(),[E,Pe]=(0,I.useState)(ve),[Ie,Re]=(0,I.useState)(0),[Ve,He]=(0,I.useState)(0),[Ge,Ke]=(0,I.useState)(0),[Ye,Ze]=(0,I.useState)(ve),[$e,nt]=(0,I.useState)(0),[it,ot]=(0,I.useState)(0),[st,ft]=(0,I.useState)(0),[xt,St]=(0,I.useState)(0),k=(0,I.useRef)(xt);k.current=xt;let[kt,At]=(0,I.useState)([]),[jt,Pt]=(0,I.useState)(10),[j,Rt]=(0,I.useState)(null),Ut=ae(s(j?.themeMode)),Jt=(0,I.useMemo)(()=>(j?.favorites??[]).map(e=>t(e.path)),[j?.favorites]),[Zt,en]=(0,I.useState)(0),[M,rn]=(0,I.useState)(lt),[an,on]=(0,I.useState)(0),[sn,un]=(0,I.useState)(0),[dn,fn]=(0,I.useState)(0),[pn,gn]=(0,I.useState)(!0),[_n,vn]=(0,I.useState)(()=>{let e=Je(`yafm.preview.width`,320);return e>=220?e:320}),[bn,xn]=(0,I.useState)(null),[wn,Tn]=(0,I.useState)(null),[En,Dn]=(0,I.useState)({kind:null,info:null}),[N,kn]=(0,I.useState)(`primary`),[An,Mn]=(0,I.useState)(null),[Nn,Pn]=(0,I.useState)(null),[P,Fn]=(0,I.useState)(null),[F,In]=(0,I.useState)(null),[Ln,Rn]=(0,I.useState)(null),[zn,Bn]=(0,I.useState)({primary:0,secondary:0}),[Vn,Hn]=(0,I.useState)({primary:null,secondary:null}),[Un,Wn]=(0,I.useState)(null),[Gn,Kn]=(0,I.useState)([]),[Yn,Xn]=(0,I.useState)(!1),[Qn,$n]=(0,I.useState)(null),[er,tr]=(0,I.useState)(``),nr=(0,I.useRef)([]),ir=(0,I.useRef)([]),[ar,or]=(0,I.useState)([]),[sr,cr]=(0,I.useState)([]),[lr,ur]=(0,I.useState)(!1),dr=(0,I.useMemo)(()=>lr?new Set(sr.map(e=>e.path)):new Set,[sr,lr]),[fr,pr]=(0,I.useState)(!1),[mr,hr]=(0,I.useState)([]),[gr,_r]=(0,I.useState)(null),vr=(0,I.useRef)(0),[yr,br]=(0,I.useState)(()=>{let e=Ee(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?Js({x:e.x,y:e.y}):Js({x:Math.max(20,window.innerWidth-340),y:110})}),Sr=(0,I.useCallback)(()=>{br(e=>Js(e)),pr(!0)},[]),R=n.find(e=>e.id===d)??n[0],z=Z(R),Cr=Ks(R),B=Q(R),wr=z===`files`?R.listing?.parent??Qs(B):null,V=R.splitWith?n.find(e=>e.id===R.splitWith):void 0,Dr=z===`files`&&V!==void 0,Or=V?Q(V):``,kr=V?V.listing?.parent??Qs(Or):null,H=Dr&&V&&N===`secondary`?V:R,Ar=j?.defaultView??T,jr=Ys(H,Ar);(0,I.useEffect)(()=>{h(j?.accentColor,j?.secondaryColor,Ut)},[j?.accentColor,j?.secondaryColor,Ut]),(0,I.useEffect)(()=>{_s(j?.fonts)},[j?.fonts]),(0,I.useEffect)(()=>{p(j?.timeFormat,j?.timeFormatPattern),l(j?.relativeTime,j?.relativeTimeWindowMinutes)},[j?.timeFormat,j?.timeFormatPattern,j?.relativeTime,j?.relativeTimeWindowMinutes]),(0,I.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!j?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[j?.backgroundSource]),(0,I.useEffect)(()=>(De(e=>new Promise(t=>{_r({id:++vr.current,prompt:e,resolve:t})})),()=>De(null)),[]),(0,I.useEffect)(()=>{kn(`primary`)},[d]),(0,I.useEffect)(()=>{Ze(ve),ot(0),ft(0)},[z]),(0,I.useEffect)(()=>{ot(0)},[Ye.query,Ye.matchCase,Ye.regex]),(0,I.useEffect)(()=>{ot(e=>st===0?0:Math.min(e,st-1))},[st]);let U=jr.columns.includes(`linkCount`),Mr=(0,I.useMemo)(()=>{let e={},n=dt(j),r={};for(let[e,n]of Object.entries(j?.placeNames??{}))r[t(e)]=n;for(let n of b)e[t(n.path)]=n;for(let i of n)if(i.kind===`quick`&&i.id!==`quick`)for(let n of i.places??[]){let i=t(n),a=b.find(e=>t(e.path)===i);e[i]={name:r[i]??a?.name??(u(n)||n),path:n,kind:`folder`,icon:a?.icon??j?.placeIcons?.[n]??null}}return e},[b,j]),Pr=(0,I.useMemo)(()=>({places:Mr,useIcons:j?.systemIcons===!1}),[Mr,j?.systemIcons]),Fr=j?.defaultView?.showImages??!0,Ir=j?.defaultView?.imageStripHeight??T.imageStripHeight,Lr=z===`home`?(0,L.jsx)(Qt,{size:13}):z===`settings`?(0,L.jsx)(tn,{size:13}):z===`recycle`?(0,L.jsx)(cn,{size:13}):z===`gallery`?(0,L.jsx)(nn,{size:13}):void 0,Rr=E.open&&E.query.length>0,zr=(0,I.useDeferredValue)(E),Br=(0,I.useMemo)(()=>Rr&&H.listing?H.listing.entries.filter(e=>le(e.isDirectory?ct(Pr,e.fullPath,e.name):e.name,zr)).map(e=>e.fullPath):[],[Rr,zr,H.listing,Pr]);(0,I.useEffect)(()=>{Re(0)},[E.query,E.matchCase,E.regex,H.listing?.path]);let Vr=Br.length===0?-1:Math.min(Ie,Br.length-1),W=(0,I.useCallback)(()=>{Pe(e=>({...e,open:!1,query:``})),Re(0)},[]),Kr=(0,I.useCallback)(()=>{Pe(e=>({...e,open:!0})),He(e=>e+1)},[]),qr=(0,I.useCallback)(()=>{Ze(e=>({...e,open:!0})),nt(e=>e+1)},[]),Jr=(0,I.useCallback)(()=>{Ze(ve),ot(0),ft(0)},[]),Yr=(0,I.useCallback)(e=>{ot(t=>st===0?0:(Math.min(t,st-1)+e+st)%st)},[st]),Xr=(0,I.useCallback)(e=>{Pe(t=>({...t,open:!0,query:t.open?t.query+e:e})),He(e=>e+1)},[]),Zr=(0,I.useCallback)(e=>{Re(t=>Br.length===0?0:(Math.min(t,Br.length-1)+e+Br.length)%Br.length)},[Br.length]),G=(0,I.useRef)({tabs:n,activeId:d,activePane:N});G.current={tabs:n,activeId:d,activePane:N};let Qr=(0,I.useRef)(j);Qr.current=j;let $r=(0,I.useRef)(!1),ei=(0,I.useRef)([]),K=(0,I.useCallback)((e,t)=>{i(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),ti=(0,I.useRef)(new Map),ni=(0,I.useCallback)(e=>{let t=(ti.current.get(e)??0)+1;return ti.current.set(e,t),()=>ti.current.get(e)===t},[]),ri=(0,I.useCallback)((e,t)=>{x.available&&t&&e===qs(G.current)&&x.send({type:`fs.focus`,payload:{path:t}})},[]),ii=(0,I.useCallback)(async(e,t,n)=>{if(!(t&&wt(t)))try{let r=(await Xe(t,U)).listing;if(!n()||!r)return;K(e,e=>e.loading?{listing:{...r,total:r.entries.length,signature:0},view:r.view??null}:{})}catch{}},[U,K]),q=(0,I.useCallback)(async(e,t,n=!1)=>{let i=ni(e);W(),ri(e,t);let a=!n||!G.current.tabs.find(t=>t.id===e)?.listing,o=!n&&t!==void 0;K(e,e=>{if(!o)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let i=e.history[e.index],a=i!==void 0&&r(i,t);return{listing:null,loading:!0,error:null,fresh:!1,history:a?e.history:[...e.history.slice(0,e.index+1),t],index:a?e.index:e.index+1}});try{a&&ii(e,t,i);let r=t&&wt(t)?await It(t):await ge(t,!0,U,k.current,t?ec(t):void 0,e);if(!i())return;K(e,e=>({listing:r,view:r.view??null,loading:!1,fresh:!1,history:o?e.history.map((t,n)=>n===e.index?r.path:t):e.history,index:e.index})),!n&&!wt(r.path)&&xe(r.path).then(()=>en(e=>e+1))}catch(r){if(!i())return;let a=G.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?Q(a):``,s=Qs(o),c=Zs(r);if(o&&Ce(c)){let r=g(o),a=await ze(r,!!Ne(r));if(a){qe(r,a),i()&&q(e,t,n);return}}K(e,e=>({listing:{path:o,parent:s,total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[ni,U,K,ri,W,ii]),oi=(0,I.useRef)(new Set),si=(0,I.useCallback)(async e=>{let t=G.current.tabs.find(t=>t.id===e),n=t?.listing;if(!t||Z(t)!==`files`||!n)return;let i=n.entries.length;if(i<=0||i>=(n.total??0)||ci.current.has(e))return;let a=`${e}|${n.path}|${i}`;if(oi.current.add(a))try{let t=await be(n.path,i,n.view?.sort??`name`,n.view?.sortDescending??!1);K(e,e=>{let a=e.listing;return!a||!r(a.path,n.path)||a.entries.length!==i||a.view?.sort!==n.view?.sort?{}:{listing:{...a,entries:[...a.entries,...t.entries],total:t.total}}})}catch{}finally{oi.current.delete(a)}},[K]),ci=(0,I.useRef)(new Set),li=(0,I.useCallback)(async e=>{let t=G.current.tabs.find(t=>t.id===e),n=t?.listing;if(t&&Z(t)===`files`&&n&&!(n.entries.length>=(n.total??0))&&ci.current.add(e))try{let t=[],i=n.entries.length,a=n.total??0;for(;i<a;){let e=await be(n.path,i,n.view?.sort??`name`,n.view?.sortDescending??!1);if(e.entries.length===0)break;t.push(e.entries),i+=e.entries.length,a=e.total}if(t.length===0)return;K(e,e=>{let i=e.listing;return!i||!r(i.path,n.path)||i.entries.length!==n.entries.length?{}:{listing:{...i,entries:[...i.entries,...t.flat()],total:a}}})}catch{}finally{ci.current.delete(e)}},[K]),[ui,di]=(0,I.useState)(0),fi=(0,I.useCallback)(async e=>{let t=G.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0;await li(e),(G.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0)>t&&di(e=>e+1)},[li]),pi=H.id,mi=Z(H),hi=H.listing?.entries.length??0,J=H.listing?.total??0;(0,I.useEffect)(()=>{E.open&&E.query.length!==0&&(mi!==`files`||hi>=J||li(pi))},[E.open,E.query,pi,mi,hi,J,li]);let gi=(0,I.useCallback)((e,t)=>{let n=Wr(t);n&&(Ur(n)?(W(),ni(e),K(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):q(e,n))},[ni,q,K,W]),Y=(0,I.useCallback)(async(e,t,n)=>{if(W(),Ur(t)){ni(e),K(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=ni(e);ri(e,t),K(e,()=>({index:n,listing:null,loading:!0,error:null}));try{wt(t)||ii(e,t,r);let n=wt(t)?await It(t):await ge(t,!0,U,k.current,ec(t),e);if(!r())return;K(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;let a=Zs(i);if(Ce(a)){let i=g(t),a=await ze(i,!!Ne(i));if(a){qe(i,a),r()&&Y(e,t,n);return}}K(e,()=>({listing:{path:t,parent:Qs(t),total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:Zs(i)}))}},[ni,U,K,ri,W,ii]),X=(0,I.useCallback)((e,t=!0)=>{let n=Xs(e??Hr(`home`));return i(e=>[...e,n]),t&&f(n.id),e&&!Ur(e)&&q(n.id,e),n.id},[q]),_i=(0,I.useCallback)(e=>{for(let t of G.current.tabs)Z(t)===`files`&&r(Q(t),e)&&q(t.id,e,!0)},[q]),vi=(0,I.useCallback)((e,t)=>{let n=u(t);for(let i of G.current.tabs)i.listing?.entries.some(t=>r(t.fullPath,e))&&K(i.id,i=>{let a=i.listing;if(!a)return{};let o=a.entries.map(i=>r(i.fullPath,e)?{...i,name:n,fullPath:t}:i);return{listing:{...a,entries:o}}})},[K]),bi=(0,I.useRef)([]);(0,I.useEffect)(()=>{let e=new Set;for(let r of n){let n=r.listing?.path??r.history[r.index]??``;n&&v(n)&&e.add(t(g(n)))}let r=bi.current.filter(t=>!e.has(t));bi.current=[...e],r.length>0&&he(r)},[n]);let xi=(0,I.useCallback)((e,t=!1)=>{t?X(Hr(e)):gi(G.current.activeId,Hr(e))},[X,gi]),Si=(0,I.useCallback)(e=>{let{tabs:t,activeId:n}=G.current,r=t.find(t=>t.id===e),a=t.filter(t=>t.id!==e&&t.id!==r?.splitWith);if(r&&!r.hidden&&(ir.current.push(Ks(r)),ir.current.length>Ws&&ir.current.shift(),or([...ir.current])),a.length===0){let e=Xs();i([e]),f(e.id);return}let o=t.findIndex(t=>t.id===e);i(a),n===e&&f(a[Math.min(o,a.length-1)].id)},[]),Ci=(0,I.useCallback)(()=>{let e=ir.current.pop();if(!e)return;or([...ir.current]);let t={...Xs(e),fresh:!1};i(e=>[...e,t]),f(t.id),Z(t)===`files`&&q(t.id,Q(t))},[q]),wi=(0,I.useCallback)(e=>{let t=ir.current,n=t[e];if(!n)return;t.splice(e,1),or([...t]);let r={...Xs(n),fresh:!1};i(e=>[...e,r]),f(r.id),Z(r)===`files`&&q(r.id,Q(r))},[q]),Ti=(0,I.useCallback)((e,t=!1)=>{t?X(e):gi(qs(G.current),e??Hr(`home`))},[gi,X]),Ei=(0,I.useCallback)(e=>{let{tabs:t,activeId:n}=G.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;f(r[i].id)},[]),Di=(0,I.useCallback)(()=>{let{tabs:e,activeId:t}=G.current,n=e.find(e=>e.id===t);if(!n||Z(n)!==`files`)return;let r=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(r){i(e=>e.filter(e=>e.id!==r.id)),K(t,()=>({splitWith:void 0})),kn(`primary`);return}let a=Q(n),o={...Xs(a),hidden:!0};i(e=>[...e,o]),K(t,()=>({splitWith:o.id})),q(o.id,a),kn(`primary`)},[q,K]),Oi=(0,I.useCallback)(e=>{vn(e),ce(`yafm.preview.width`,e)},[]),ki=(0,I.useCallback)((e,t,n)=>Dn(r=>r.kind===e&&r.info?.path===t?.path&&r.info?.modified===t?.modified&&r.info?.name===t?.name&&r.note===n?r:{kind:e,info:t,note:n}),[]),Ai=(0,I.useCallback)((e,t)=>ki(`gallery`,e,t),[ki]),ji=(0,I.useCallback)((e,t)=>ki(`recycle`,e,t),[ki]),Mi=Dr?N===`secondary`?wn??bn:bn??wn:bn,Ni=Dr&&N===`secondary`?zn.secondary:zn.primary,Pi=z===`files`?Mi:En.kind===z?En.info:null,Fi=z===`files`?Ni>1?o(e,Ni,`k_1_item_selected`,`count_items_selected`):void 0:En.kind===z?En.note:void 0,Ii=(0,I.useMemo)(()=>z===`files`&&R.listing?tc(e,R.listing):er,[z,R.listing,e,er]),Li=(0,I.useRef)(null),Ri=e=>{e.preventDefault();let t=Li.current?.getBoundingClientRect();if(!t)return;let n=Math.max(t.width-7,1),r=e=>{let r=Math.min(Math.max((e.clientX-t.left)/n,.2),.8);y(r),ce(`yafm.split.ratio`,r)},i=()=>{window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,i)};window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,i)},zi=(e,t,n)=>{t&&Mn({x:e.clientX,y:e.clientY,directory:t,refresh:n})},Bi=(0,I.useCallback)((e,t)=>{Bn(n=>n[e]===t?n:{...n,[e]:t})},[]),Vi=(0,I.useCallback)(e=>Bi(`primary`,e),[Bi]),Hi=(0,I.useCallback)(e=>Bi(`secondary`,e),[Bi]),Ui=(e,t)=>{zn[e]!==0&&Hn(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},Wi=async(e,t=!1)=>{let n=An;if(Mn(null),!n)return;let r=e===null?await Lt(n.directory,t):await Et(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;W(),Wn(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},Gi=(0,I.useCallback)(()=>{let{tabs:e}=G.current,t=e.find(e=>e.id===qs(G.current));t&&t.index>0&&Y(t.id,t.history[t.index-1],t.index-1)},[Y]),Ki=(0,I.useCallback)(()=>{let{tabs:e}=G.current,t=e.find(e=>e.id===qs(G.current));t&&t.index<t.history.length-1&&Y(t.id,t.history[t.index+1],t.index+1)},[Y]),qi=(0,I.useCallback)(()=>{let{tabs:e}=G.current,t=e.find(e=>e.id===qs(G.current));t&&Z(t)===`files`&&t.listing?.parent&&Ti(t.listing.parent)},[Ti]),Ji=(0,I.useRef)(null),Yi=(0,I.useCallback)(()=>{for(let e of G.current.tabs)e.listing&&q(e.id,e.listing.path,!0)},[q]),Xi=(0,I.useCallback)(e=>{e.length!==0&&(hr(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),Sr())},[Sr]),Zi=(0,I.useCallback)(async e=>{let t=await Tt(e);t.length!==0&&Xi(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[Xi]),Qi=(0,I.useCallback)(e=>{let t=new Set(e);hr(e=>e.filter(e=>!t.has(e.path)))},[]),$i=(0,I.useCallback)(async e=>{let n=Qr.current;if(!n)return;let r=await Tt(e);if(r.length===0)return;let i=new Set((n.favorites??[]).map(e=>t(e.path))),a=r.filter(e=>!i.has(t(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(a.length===0)return;let o={...n,favorites:[...n.favorites??[],...a]};Rt(o),await et(o),on(e=>e+1)},[]),ea=(0,I.useCallback)(async e=>{let n=Qr.current;if(!n)return;let r=new Set(e.map(t)),i=(n.favorites??[]).filter(e=>!r.has(t(e.path)));if(i.length===(n.favorites??[]).length)return;let a={...n,favorites:i};Rt(a),await et(a),on(e=>e+1)},[]),ta=(0,I.useCallback)(()=>hr([]),[]),na=(0,I.useRef)(-1),ra=(0,I.useCallback)(e=>{cr(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),ur(e.move),e.entries.length>0&&Sr()},[Sr]),ia=(0,I.useCallback)(async()=>{if(x.available)try{let e=await Ht();na.current=e.sequence,ra(e)}catch{}},[ra]),aa=(0,I.useCallback)(async e=>{e.length!==0&&await Ct(e,!1)&&await ia()},[ia]),oa=(0,I.useRef)(mr);oa.current=mr;let sa=(0,I.useRef)(fr);sa.current=fr;let ca=(0,I.useRef)(!1);(0,I.useEffect)(()=>{let e=j?.trayAutoShow??!0,t=t=>{e&&pt(t)&&(sa.current||(ca.current=!0),Sr())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{ca.current&&window.setTimeout(()=>{ca.current&&oa.current.length===0&&pr(!1),ca.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[Sr,j?.trayAutoShow]),(0,I.useEffect)(()=>{let e=()=>br(e=>Js(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let la=(0,I.useCallback)(async()=>{let e=oa.current;if(e.length>0){let t=await Tt(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));hr(e=>e.filter(e=>n.has(e.path)))}await ia()},[ia]),ua=(0,I.useCallback)(()=>{la(),fn(e=>e+1),Yi()},[la,Yi]),da=(0,I.useCallback)(e=>{let t=Js(e);br(t),_e(`yafm.tray.position`,t)},[]),fa=(0,I.useCallback)(()=>{ca.current=!1,fr?pr(!1):Sr()},[Sr,fr]),pa=(0,I.useCallback)(async(t,n,r)=>{let i=await Wt(t,n,r);i.cancelled||(i.ok?(r&&Qi(t),fn(e=>e+1),Yi(),ia()):Se(i.error??e(`the_files_could_not_be_transferred`)))},[Yi,ia,Qi]);(0,I.useEffect)(()=>{if(x.available)return qn().then(e=>{nr.current=e,Kn(e)},()=>void 0),x.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=nr.current.find(t=>t.id===e.id);return!t||t.state!==e.state});nr.current=n,Kn(n),r&&Xn(!0)})},[]);let ma=(0,I.useCallback)(()=>{Jn().then(()=>qn().then(e=>{nr.current=e,Kn(e)},()=>void 0))},[]);(0,I.useEffect)(()=>{if(!x.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await Ht();if(!e||t.sequence===na.current)return;na.current=t.sequence,ra(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[ra]);let ha=(0,I.useCallback)(async e=>{let t=e?await Kt():await Dt();t.ok?(fn(e=>e+1),Yi()):t.error&&!t.error.startsWith(`Nothing to`)&&Se(t.error)},[Yi]),ga=(0,I.useRef)(U);(0,I.useEffect)(()=>{ga.current!==U&&(ga.current=U,Yi())},[U,Yi]);let _a=(0,I.useCallback)((e,t)=>{let{tabs:n}=G.current,r=n.find(t=>t.id===e);if(!r||Z(r)!==`files`)return;let i=Q(r),a=Qr.current?.defaultView??T,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||Le.iconSize,gridSize:r.view?.gridSize||a.gridSize||Le.gridSize,sort:r.view?.sort??Le.sort,sortDescending:r.view?.sortDescending??Le.sortDescending,...t};K(e,()=>({view:o})),Ji.current!==null&&window.clearTimeout(Ji.current),Ji.current=window.setTimeout(()=>{Ji.current=null,We(i,o)},250)},[K]),va=(0,I.useCallback)(e=>{_a(qs(G.current),e)},[_a]),ya=(0,I.useCallback)(e=>{let t=Qr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??T,columns:e}};Rt(n),et(n)},[]),ba=(0,I.useCallback)(e=>{let t=Qr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??T,showImages:e}};Rt(n),et(n)},[]),xa=(0,I.useCallback)(e=>{let t=Qr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??T,imageStripHeight:e}};Rt(n),et(n)},[]),Sa=(0,I.useCallback)((e,t,n,r)=>{let i=G.current.tabs.find(t=>t.id===e);if(!i||Z(i)!==`files`||!i.listing)return;let a=Q(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));K(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Be(a,t,n,r)},[K]),Ca=(0,I.useCallback)((e,t)=>{let n=G.current.tabs.find(t=>t.id===e);if(!n)return;let r=Ys(n,Qr.current?.defaultView??T);_a(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending}),q(e,Q(n),!0)},[_a,q]),wa=(0,I.useCallback)((e,t)=>{i(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),Ta=(0,I.useCallback)(()=>{de().then(te,()=>te([]))},[]),Ea=(0,I.useCallback)(e=>{let t=(e.openTabs??[]).map(Wr).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...Xs(e),fresh:!1})),r=Math.min(Math.max(e.activeTab??0,0),n.length-1);i(n),f(n[r].id);let a=n[r];return(Z(a)===`files`?q(a.id,Q(a),!0):Promise.resolve()).then(()=>{for(let e of n)e!==a&&Z(e)===`files`&&q(e.id,Q(e),!0)}),!0},[q]),Da=(0,I.useCallback)(e=>{let t=ei.current;if(ei.current=[],t.length===0)return;let n=t.filter(e=>!Hs.has(e));for(let e of t)n.includes(e)||Us(e);if(n.length===0)return;let{tabs:r}=G.current;if(!e&&r.length===1&&r[0].fresh){gi(r[0].id,n[0]),Us(n[0]);for(let e of n.slice(1))X(e),Us(e);return}let i=n.map(e=>{let t=X(e);return Us(e),t}).at(-1);i&&setTimeout(()=>f(i),0)},[X,gi]),Oa=(0,I.useCallback)(()=>{tt().then(e=>{Rt(e),Pt(e.recentLimit);let t=Vt(e.shortcuts);rn(t),Ft(bt(t,`openInNewTab`)),on(e=>e+1),$r.current||($r.current=!0,Da(e.restoreTabs&&Ea(e)))},()=>{Pt(10),$r.current=!0,Da(!1)})},[Da,Ea]),ka=(0,I.useCallback)(()=>{me().then(At,()=>At([]))},[]),Aa=(0,I.useCallback)(()=>{se().then(S,()=>S([]))},[]),ja=n.filter(e=>!e.hidden),Ma=ja.map(Ks),Na=Ma.join(`
`),Pa=Math.max(ja.findIndex(e=>e.id===d),0);(0,I.useEffect)(()=>{if(!j?.restoreTabs)return;let e=setTimeout(()=>void Qe(Ma,Pa),700);return()=>clearTimeout(e)},[Na,Pa,j?.restoreTabs]),(0,I.useEffect)(()=>{let{tabs:e,activeId:t}=G.current,n=e.find(e=>e.id===t);n&&n.fresh&&Z(n)===`files`&&q(n.id,Q(n),!0),Ta(),Oa(),Aa(),On().then(oe,()=>oe(null))},[q,Ta,Oa,Aa]),(0,I.useEffect)(()=>{if(jn().then(Oe,()=>Oe(null)),x.available)return x.on(e=>{let t=e;t.type===`update.checked`&&t.data&&Oe(t.data)})},[]),(0,I.useEffect)(()=>{if(x.available)return x.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&ee({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&Se(e(`pairing_code_code`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&Se(n.data.error??e(`pairing_failed`))}})},[e]),(0,I.useEffect)(()=>{let e=setInterval(Aa,3e4);return()=>clearInterval(e)},[Aa]),(0,I.useEffect)(()=>{z===`home`&&(ka(),Aa())},[z,R.id,ka,Aa]),(0,I.useEffect)(()=>{if(!x.available)return;let e=x.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=G.current,i=t.data.startup===!0;i&&Hs.has(n)?Us(n):i&&!$r.current?ei.current.includes(n)||ei.current.push(n):(i&&r.length===1&&r[0].fresh?gi(r[0].id,n):Ur(n)?gi(qs(G.current),n):X(n),i&&Us(n))});return x.send({type:`app.ready`}),e},[gi,X]),(0,I.useEffect)(()=>{if(x.available)return x.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:r}=t.data;i(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let i=e.slice(),a=e[t];return i[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...r}}},i})})},[]),(0,I.useEffect)(()=>{if(x.available)return x.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:r}=t.data;i(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let i=e.slice(),a=e[t];return i[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...r}}},i})})},[]),(0,I.useEffect)(()=>{let e=e=>{if(mt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),Gi();return}if(e.key===`BrowserForward`){e.preventDefault(),Ki();return}if(e.key===`Escape`&&E.open){e.preventDefault(),W();return}let t=yt(e);if(D(M,`closeTab`,t)&&(e.preventDefault(),Si(qs(G.current))),D(M,`newTab`,t)&&(e.preventDefault(),X()),D(M,`reopenTab`,t)&&(e.preventDefault(),Ci()),D(M,`goBack`,t)&&(e.preventDefault(),Gi()),D(M,`goForward`,t)&&(e.preventDefault(),Ki()),D(M,`goUp`,t)&&(e.preventDefault(),qi()),D(M,`find`,t)&&(e.preventDefault(),z===`files`?Kr():qr()),D(M,`location`,t)&&(e.preventDefault(),un(e=>e+1)),D(M,`home`,t)){e.preventDefault();let t=b.find(e=>e.kind===`home`)?.path;t&&Ti(t)}D(M,`iconsView`,t)&&(e.preventDefault(),z===`files`&&va({mode:`grid`})),D(M,`detailsView`,t)&&(e.preventDefault(),z===`files`&&va({mode:`list`})),D(M,`nextTab`,t)&&(e.preventDefault(),Ei(1)),D(M,`previousTab`,t)&&(e.preventDefault(),Ei(-1)),D(M,`hidden`,t)&&(e.preventDefault(),Te().then(()=>{fn(e=>e+1),Yi()})),D(M,`undo`,t)&&(e.preventDefault(),ha(!0)),D(M,`redo`,t)&&(e.preventDefault(),ha(!1)),D(M,`splitView`,t)?(e.preventDefault(),Di()):Object.keys(M).some(e=>e!==`openInNewTab`&&D(M,e,t))||z!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Xr(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[M,z,E.open,Si,Ci,X,Gi,Ki,qi,Kr,qr,W,Xr,va,Ei,Ti,b,Yi,ha,Di]),(0,I.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Gi()):(e.button===4||e.button===9)&&(e.preventDefault(),Ki())},t=e=>{(e.button===3||e.button===4||e.button===8||e.button===9)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[Gi,Ki]),(0,I.useEffect)(()=>{if(x.available)return x.on(e=>{let t=e;if(t.type===`app.navigation`)switch(t.data?.direction){case`back`:Gi();break;case`forward`:Ki()}})},[Gi,Ki]);let Fa=(0,I.useMemo)(()=>{let e=new Set;for(let t of n){if(Z(t)!==`files`)continue;let n=Q(t);if(n&&!wt(n)){if(v(n)){let t=Qs(g(n));t&&e.add(t)}else e.add(n)}}return[...e]},[n]),Ia=Fa.join(`\0`);(0,I.useEffect)(()=>{x.available&&x.send({type:`fs.watch`,payload:{paths:Fa,owner:`app`}})},[Ia,d]);let La=Z(H)===`files`?Q(H):``;(0,I.useEffect)(()=>{x.available&&x.send({type:`fs.focus`,payload:{path:La||null}})},[La]),(0,I.useEffect)(()=>{if(x.available)return x.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,i=G.current.tabs.filter(e=>Z(e)===`files`&&r(Q(e),n)),a=G.current.tabs.filter(e=>{let t=Q(e);return Z(e)===`files`&&t.length>0&&v(t)&&r(g(t),n)});if(i.length!==0||a.length!==0){ke(n);for(let e of a){let t=G.current.tabs.find(t=>t.id===e.id),i=t?Q(t):``;t&&Z(t)===`files`&&!t.loading&&v(i)&&r(g(i),n)&&q(e.id,i,!0)}i.length!==0&&ge(n,!1,U).then(e=>{for(let t of i){let n=G.current.tabs.find(e=>e.id===t.id);n&&Z(n)===`files`&&r(Q(n),e.path)&&(n.loading?window.setTimeout(()=>{let n=G.current.tabs.find(e=>e.id===t.id);n&&!n.loading&&Z(n)===`files`&&r(Q(n),e.path)&&K(t.id,()=>({listing:e}))},300):K(t.id,()=>({listing:e})))}},()=>void 0)}})},[U,q,K]);let Ra=R.index>0,za=R.index<R.history.length-1,Ba=(e,t)=>{let n=Ys(e,Ar),i=e.listing?.path??e.history[e.index]??``,o=v(i),s=o&&a(i);return(0,L.jsx)(Bt,{platform:C?.platform,confirmDelete:j?.confirmDelete??!1,cutPaths:dr,previewVideoAudio:j?.previewVideoAudio??!1,previewVideoAutoplay:j?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?xn:Tn,onActivate:()=>kn(t?`primary`:`secondary`),enableShortcuts:(!Dr||(t?N===`primary`:N===`secondary`))&&(!o||s),error:e.error,find:e.id===H.id?{...E,currentPath:Vr<0?null:Br[Vr]}:void 0,selectMatchesToken:e.id===H.id?Ge:0,imageStripHeight:Ir,listing:e.listing,loading:e.loading,onImageStripHeight:xa,readOnly:o&&!s||wt(e.listing?.path??``),onOpen:(t,n)=>{n?X(t):q(e.id,t)},onOpenFile:(t,n)=>{wt(t)?Nt(t).catch(e=>void Se(Zs(e))):c(t)?j?.archiveHandler??!1?n?X(t):q(e.id,t):pe(t):v(t)?(async()=>{let e=await fe(t,k.current,ec(t));if(!e.path&&Ce(e.error)){let n=g(t),r=Ne(n);r&&Fe(n);let i=await ze(n,!!r);i&&(qe(n,i),e=await fe(t,k.current,i))}e.path?pe(e.path):e.error&&Se(e.error)})():pe(t)},onRefresh:()=>{let t=e.listing?.path;t&&_i(t)},onLoadMore:()=>void si(e.id),onEnsureComplete:()=>void fi(e.id),selectAllToken:e.id===H.id?ui:0,onRename:vi,onSelectionCountChange:t?Vi:Hi,onSetTags:(t,n,r)=>Sa(e.id,t,n,r),selectionMenuRequest:t?Vn.primary:Vn.secondary,onSort:t=>Ca(e.id,t),onPaste:ua,onClipboardChanged:()=>void ia(),onTransfer:pa,onAddToTray:e=>void Zi(e),onAddFavorite:e=>void $i(e),onRemoveFavorite:e=>void ea(e),favoritePaths:Jt,onExtractArchive:(e,t)=>void Ka(e,t),openOnSingleClick:j?.openOnSingleClick??!1,pendingRename:Un&&t===(N===`primary`)&&r(Un.directory,e.listing?.path??``)?Un.path:null,pendingRenameToken:Un?.token??0,refreshToken:dn,shortcuts:M,showCheckboxes:j?.showCheckboxes??!0,showImages:Fr,view:n})},Va=E.open&&(0,L.jsx)(Nr,{current:Vr,focusToken:Ve,matchCase:E.matchCase,mode:E.mode,onClose:W,onMatchCase:()=>Pe(e=>({...e,matchCase:!e.matchCase})),onMode:()=>Pe(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Zr(1),onPrevious:()=>Zr(-1),onQuery:e=>Pe(t=>({...t,query:e})),onRegex:()=>Pe(e=>({...e,regex:!e.regex})),query:E.query,regex:E.regex,total:Br.length,onSelectMatches:Br.length>0?()=>Ke(e=>e+1):void 0}),Ha=z===`files`&&v(B),Ua=Ha&&a(B),Wa=Ha&&R.listing?.archiveEncrypted===!0,Ga=async(t,n)=>{let r=g(t),i=await ue(r,n,k.current,ec(r));if(!i.ok&&Ce(i.error)){let e=Ne(r);e&&Fe(r);let t=await ze(r,!!e);t&&(qe(r,t),i=await ue(r,n,k.current,t))}i.ok?(_i(n),Ue(),q(R.id,n,!0)):Se(`${e(`could_not_extract_the_archive`)}${i.error?`\n${i.error}`:``}`)},Ka=async(e,t)=>{let n=g(e),i=Qs(n);if(!i)return;if(t===`choose`){let e=await gt(i);e&&await Ga(n,e);return}let a=t===`named`;if(t===`auto`){let e=r(n,B)?R.listing?.entries??[]:(await ge(n,!1,!1,k.current,ec(n))).entries;a=!(e.length===1&&e[0].isDirectory)}let o=i.includes(`\\`)?`\\`:`/`,s=a?`${i.replace(/[\\/]+$/,``)}${o}${$s(n)}`:i;await Ga(n,s)},qa=async e=>{Ha&&await Ka(B,e)},Ja=async()=>{Ha&&await Ka(B,`choose`)},Ya=(0,L.jsxs)(sc,{children:[(0,L.jsx)($,{"data-shortcut":O(M.goBack),disabled:!Ra,onClick:e=>{R.index>0&&A(e)?X(R.history[R.index-1]):Gi()},onContextMenu:e=>{R.index<=0||(e.preventDefault(),Fn({x:e.clientX,y:e.clientY,tab:R,direction:`back`}))},title:e(`back`),type:`button`,children:(0,L.jsx)(Sn,{})}),(0,L.jsx)($,{"data-shortcut":O(M.goForward),disabled:!za,onClick:e=>{R.index<R.history.length-1&&A(e)?X(R.history[R.index+1]):Ki()},onContextMenu:e=>{R.index>=R.history.length-1||(e.preventDefault(),Fn({x:e.clientX,y:e.clientY,tab:R,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,L.jsx)(mn,{})}),(0,L.jsx)($,{"data-shortcut":O(M.goUp),disabled:z!==`files`||!wr,onClick:e=>{wr&&(A(e)?X(wr):Ti(wr))},title:e(`up_one_level`),type:`button`,children:(0,L.jsx)(ln,{})}),(0,L.jsx)(Gr,{focusToken:sn,icon:Lr,label:z===`files`?void 0:e(yi[z]),onContextMenu:z===`files`?(e,t,n)=>In({x:t,y:n,path:e}):void 0,onNavigate:Ti,path:z===`files`?B:Cr}),z===`files`&&(!Ha||Ua)&&(0,L.jsx)($,{onClick:e=>zi(e,B,()=>void q(R.id,B,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,L.jsx)(hn,{})}),(0,L.jsx)($,{"data-shortcut":O(M.find),onClick:()=>z===`files`?Kr():qr(),title:e(`search`),type:`button`,children:(0,L.jsx)(Cn,{})}),zn.primary>0&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(As,{}),(0,L.jsx)($,{onClick:e=>Ui(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,L.jsx)($t,{})})]}),(0,L.jsx)(`span`,{ref:$n,style:{display:`contents`}}),Ha&&(0,L.jsxs)(cc,{children:[(0,L.jsx)(As,{}),Wa&&(0,L.jsxs)(lc,{title:e(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,L.jsx)(Xt,{size:12}),e(`encrypted`)]}),(0,L.jsx)($,{onClick:()=>void Ja(),onContextMenu:e=>{e.preventDefault(),Pn({x:e.clientX,y:e.clientY})},title:e(`extract_archive`),type:`button`,children:(0,L.jsx)(yn,{})}),(0,L.jsx)(rt,{icon:(0,L.jsx)(Yt,{size:15}),onChange:e=>{let t=Number(e);St(t),k.current=t,Ha&&q(R.id,B,!0)},options:Gs.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`archive_encoding`)}: ${e(Gs.find(e=>e.value===String(xt))?.label??`auto`)}`,value:String(xt)})]})]}),Xa=Ye.open?{...Ye,index:it}:null;return(0,L.jsx)(vt,{value:Pr,children:(0,L.jsxs)(rc,{$rounded:Me,children:[(0,L.jsx)(Zn,{settings:j,theme:Ut}),(0,L.jsx)(Uo,{activeId:R.id,closedTabs:ar,onClose:Si,onNewTab:()=>X(),onRestoreClosed:wi,onReorder:wa,onTransferToTab:pa,onSelect:f,onViewChange:va,onColumns:ya,onShowImages:ba,showImages:Fr,tasks:Gn,onClearTasks:ma,activityOpen:Yn,onActivityOpenChange:Xn,trayCount:mr.length+sr.length,trayVisible:fr,onToggleTray:fa,split:Dr,canSplit:z===`files`,onToggleSplit:Di,details:pn,canDetails:z===`files`||z===`recycle`||z===`gallery`,onToggleDetails:()=>gn(e=>!e),currentFolder:z===`files`&&!wt(B)?B:``,shortcuts:M,view:jr,tabs:n.filter(e=>!e.hidden).map(t=>{let r=Z(t),i=Q(t),a=t.splitWith?n.find(e=>e.id===t.splitWith):void 0,o=a?Q(a):``;return{id:t.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?ut(Pr,i):void 0,archive:r===`files`&&v(i),split:!!a,title:r===`files`?ct(Pr,i,u(i)||e(`files`)):e(yi[r]),partner:a?{title:ct(Pr,o,u(o)||e(`files`)),place:ut(Pr,o)}:void 0}})}),(0,L.jsxs)(ic,{children:[(0,L.jsx)(ai,{activeKind:z,currentPath:z===`files`?Cr:``,drives:ne,historyVersion:Zt,onNavigate:Ti,onOpenView:xi,homePath:b.find(e=>e.kind===`home`)?.path??``,places:b,recent:kt,recentLimit:jt,version:an}),(0,L.jsxs)(ac,{children:[(0,L.jsxs)(hc,{children:[(0,L.jsxs)(gc,{children:[z!==`files`&&Ya,(0,L.jsx)(oc,{children:(0,L.jsxs)(I.Suspense,{fallback:null,children:[z!==`files`&&Ye.open&&(0,L.jsx)(Nr,{current:it,focusToken:$e,matchCase:Ye.matchCase,mode:Ye.mode,onClose:Jr,onMatchCase:()=>Ze(e=>({...e,matchCase:!e.matchCase})),onMode:()=>Ze(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Yr(1),onPrevious:()=>Yr(-1),onQuery:e=>Ze(t=>({...t,query:e})),onRegex:()=>Ze(e=>({...e,regex:!e.regex})),placeholder:e(`search`),query:Ye.query,regex:Ye.regex,total:st,onSelectMatches:z===`gallery`||z===`recycle`?()=>Ke(e=>e+1):void 0}),z===`files`?Dr&&V?(0,L.jsxs)(dc,{ref:Li,children:[(0,L.jsxs)(fc,{style:{flex:_},children:[(0,L.jsxs)(uc,{$active:N===`primary`,onPointerDown:()=>kn(`primary`),children:[(0,L.jsx)($,{"data-shortcut":O(M.goBack),disabled:!Ra,onClick:e=>{let t=R.index-1;t<0||(A(e)?X(R.history[t]):Y(R.id,R.history[t],t))},onContextMenu:e=>{R.index<=0||(e.preventDefault(),Fn({x:e.clientX,y:e.clientY,tab:R,direction:`back`}))},title:e(`back`),type:`button`,children:(0,L.jsx)(Sn,{})}),(0,L.jsx)($,{"data-shortcut":O(M.goForward),disabled:!za,onClick:e=>{let t=R.index+1;t>=R.history.length||(A(e)?X(R.history[t]):Y(R.id,R.history[t],t))},onContextMenu:e=>{R.index>=R.history.length-1||(e.preventDefault(),Fn({x:e.clientX,y:e.clientY,tab:R,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,L.jsx)(mn,{})}),(0,L.jsx)($,{"data-shortcut":O(M.goUp),disabled:!wr,onClick:e=>{wr&&(A(e)?X(wr):q(R.id,wr))},title:e(`up_one_level`),type:`button`,children:(0,L.jsx)(ln,{})}),(0,L.jsx)(Gr,{focusToken:N===`primary`?sn:void 0,onContextMenu:(e,t,n)=>In({x:t,y:n,path:e}),onNavigate:(e,t)=>t?X(e):void q(R.id,e),path:B}),(0,L.jsx)($,{onClick:e=>zi(e,B,()=>void q(R.id,B,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,L.jsx)(hn,{})}),(0,L.jsx)($,{"data-shortcut":O(M.find),onClick:Kr,title:e(`search`),type:`button`,children:(0,L.jsx)(Cn,{})}),zn.primary>0&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(As,{}),(0,L.jsx)($,{onClick:e=>Ui(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,L.jsx)($t,{})})]})]}),Ba(R,!0),N===`primary`&&Va]}),(0,L.jsx)(pc,{onDoubleClick:()=>y(.5),onPointerDown:Ri,title:e(`drag_to_resize_double_click_to_reset`)}),(0,L.jsxs)(fc,{$enter:!0,style:{flex:1-_},children:[(0,L.jsxs)(uc,{$active:N===`secondary`,onPointerDown:()=>kn(`secondary`),children:[(0,L.jsx)($,{"data-shortcut":O(M.goBack),disabled:V.index<=0,onClick:e=>{let t=V.index-1;t<0||(A(e)?X(V.history[t]):Y(V.id,V.history[t],t))},onContextMenu:e=>{V.index<=0||(e.preventDefault(),Fn({x:e.clientX,y:e.clientY,tab:V,direction:`back`}))},title:e(`back`),type:`button`,children:(0,L.jsx)(Sn,{})}),(0,L.jsx)($,{"data-shortcut":O(M.goForward),disabled:V.index>=V.history.length-1,onClick:e=>{let t=V.index+1;t>=V.history.length||(A(e)?X(V.history[t]):Y(V.id,V.history[t],t))},onContextMenu:e=>{V.index>=V.history.length-1||(e.preventDefault(),Fn({x:e.clientX,y:e.clientY,tab:V,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,L.jsx)(mn,{})}),(0,L.jsx)($,{"data-shortcut":O(M.goUp),disabled:!kr,onClick:e=>{kr&&(A(e)?X(kr):q(V.id,kr))},title:e(`up_one_level`),type:`button`,children:(0,L.jsx)(ln,{})}),(0,L.jsx)(Gr,{focusToken:N===`secondary`?sn:void 0,onContextMenu:(e,t,n)=>In({x:t,y:n,path:e}),onNavigate:(e,t)=>t?X(e):void q(V.id,e),path:Or}),(0,L.jsx)($,{onClick:e=>zi(e,Or,()=>void q(V.id,Or,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,L.jsx)(hn,{})}),(0,L.jsx)($,{"data-shortcut":O(M.find),onClick:Kr,title:e(`search`),type:`button`,children:(0,L.jsx)(Cn,{})}),zn.secondary>0&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(As,{}),(0,L.jsx)($,{onClick:e=>Ui(`secondary`,e),title:e(`selection_menu`),type:`button`,children:(0,L.jsx)($t,{})})]})]}),Ba(V,!1),N===`secondary`&&Va]})]}):(0,L.jsxs)(L.Fragment,{children:[Ya,(0,L.jsxs)(mc,{children:[Ba(R,!0),Va]})]}):z===`home`?(0,L.jsx)(Ls,{platform:C?.platform,drives:ne,find:Xa,historyVersion:Zt,onSearchMatches:ft,homePath:b.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:Aa,onHistoryChanged:()=>en(e=>e+1),onAddToTray:e=>void Zi(e),onAddFavorite:e=>void $i(e),onRemoveFavorite:e=>void ea(e),favoritePaths:Jt,onExtractArchive:(e,t)=>void Ka(e,t),settingsVersion:an,theme:Ut,onOpen:Ti,onLayoutChanged:Oa,onPlacesChanged:te,onRecentCleared:ka,places:b,recent:kt,recentLimit:jt,visibilityVersion:dn}):z===`settings`?(0,L.jsx)(Rs,{appInfo:C,find:Xa,focusSection:Ae,onSearchMatches:ft,onSettingsChanged:Oa}):z===`gallery`?(0,L.jsx)(zs,{platform:C?.platform,toolbarSlot:Qn,onStatusChange:tr,confirmDelete:j?.confirmDelete??!1,find:Xa,onSearchMatches:ft,openOnSingleClick:j?.openOnSingleClick??!1,onAddToTray:e=>void Zi(e),onAddFavorite:e=>void $i(e),onRemoveFavorite:e=>void ea(e),favoritePaths:Jt,onExtractArchive:(e,t)=>void Ka(e,t),shortcuts:M,showCheckboxes:j?.showCheckboxes??!0,selectMatchesToken:Ge,onPreviewChange:Ai,view:jr}):(0,L.jsx)(Bs,{find:Xa,toolbarSlot:Qn,onStatusChange:tr,onOpenLocation:Ti,onShowDetails:()=>gn(!0),platform:C?.platform,selectMatchesToken:Ge,onPreviewChange:ji})]})},z)]}),(z===`files`||z===`gallery`||z===`recycle`)&&(0,L.jsx)(ht,{emptyNote:e(`nothing_selected`),info:Pi,onWidth:Oi,open:pn,selectionNote:Fi,videoAudio:j?.previewVideoAudio??!1,videoAutoplay:j?.previewVideoAutoplay??!1,width:_n})]}),(0,L.jsxs)(xc,{children:[(0,L.jsx)(`span`,{children:Ii}),C?(0,L.jsxs)(_c,{children:[(0,L.jsxs)(`span`,{children:[`v`,C.version,` · `,C.platform]}),C.debug&&(0,L.jsx)(bc,{children:`debug`}),ye?.available&&(0,L.jsxs)(vc,{onClick:e=>{je(`updates`),xi(`settings`,A(e))},title:e(`version_version_is_available`,{version:ye.latest}),type:`button`,children:[(0,L.jsx)(yc,{}),e(`update_available`)]})]}):(0,L.jsx)(`span`,{children:e(`browser_preview`)})]})]})]}),(0,L.jsx)(at,{clipboardItems:sr,clipboardMove:lr,currentDirectory:z===`files`?Cr:``,items:mr,onAdd:e=>void Zi(e),onClear:ta,onClose:()=>pr(!1),onCopyToClipboard:e=>void aa(e),onPosition:da,onRemove:Qi,onTransfer:pa,position:yr,visible:fr}),An&&(0,L.jsx)(_t,{creationOnly:!0,directory:An.directory,menu:{x:An.x,y:An.y,paths:[],background:!0},onClose:()=>Mn(null),onCreateFile:e=>void Wi(e),onCreateFolder:e=>void Wi(null,e),shortcuts:M}),F&&(0,L.jsx)(_t,{allowCompression:!0,directory:Qs(F.path)??F.path,menu:{x:F.x,y:F.y,paths:[F.path]},onAddToTray:e=>void Zi(e),onAddFavorite:e=>void $i(e),onRemoveFavorite:e=>void ea(e),favoritePaths:Jt,onExtractArchive:(e,t)=>void Ka(e,t),onArchiveCreated:e=>{e&&_i(Qs(F.path)??F.path)},onClose:()=>In(null),onCompressTo:(e,t)=>Rn({paths:e,name:t}),onCopy:(e,t)=>void Ct(e,t),onDelete:e=>void Mt(e,!1).then(()=>_i(Qs(F.path)??F.path)),onOpen:(e,t)=>t?X(e):void q(R.id,e),onOpenFile:e=>void pe(e),onPaste:e=>void Ot(e).then(t=>{t.ok&&_i(e)}),onRefresh:()=>_i(F.path),shortcuts:M,target:{path:F.path,isDirectory:!0}}),Ln&&(0,L.jsx)(qt,{initialDirectory:Qs(F?.path??B)??B,initialName:Ln.name,onCancel:()=>Rn(null),onCompress:async e=>{let t=await zt(Ln.paths,e);return!t.ok&&t.error&&Se(t.error),t.ok}}),P&&(0,L.jsx)(we,{items:[{label:P.tab.history[P.tab.index]??``,disabled:!0,onSelect:()=>void 0},...P.tab.history.map((e,t)=>({path:e,index:t})).filter(({index:e})=>P.direction===`back`?e<P.tab.index:e>P.tab.index).sort((e,t)=>P.direction===`back`?t.index-e.index:e.index-t.index).slice(0,24).map(({path:e,index:t})=>({label:e,onSelect:()=>{let n=P.tab;Fn(null),Y(n.id,e,t)}}))],onClose:()=>Fn(null),x:P.x,y:P.y}),Nn&&(0,L.jsx)(we,{items:[{label:e(`extract_here`),onSelect:()=>void qa(`here`)},{label:e(`extract_to_a_folder_named_after_the_archive`),onSelect:()=>void qa(`named`)},{label:e(`auto_extract_to_the_current_folder`),onSelect:()=>void qa(`auto`)}],onClose:()=>Pn(null),x:Nn.x,y:Nn.y}),gr&&(0,L.jsx)(rr,{action:gr.prompt.action,delaySeconds:gr.prompt.delaySeconds,hits:gr.prompt.hits,onCancel:()=>{gr.resolve(!1),_r(null)},onConfirm:()=>{gr.resolve(!0),_r(null)},permanent:gr.prompt.permanent},gr.id),(0,L.jsx)(xr,{}),(0,L.jsx)(Er,{}),(0,L.jsx)(Tr,{}),m&&(0,L.jsx)(ys,{code:m.code,deviceName:m.deviceName,onAccept:()=>{Gt(m.requestId,!0),ee(null)},onReject:()=>{Gt(m.requestId,!1),ee(null)}}),(0,L.jsx)(us,{}),(0,L.jsx)(re,{})]})})}var rc=S.div`
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
`,ic=S.div`
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
`,ac=S.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,oc=S.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${Oe}
`,sc=S.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,$=ks,cc=S.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,lc=S.span`
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
`,uc=S.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,dc=S.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,fc=S.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?Ve:``}
`,pc=S.div`
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
        ${je}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,mc=S.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,hc=S.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,gc=S.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,_c=S.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,vc=S.button`
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
`,yc=S.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,bc=S.span`
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
`,xc=S.footer`
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
`;document.documentElement.dataset.theme=C()?`dark`:`light`;var Sc=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,Sc),window.addEventListener(`pagehide`,Ke);var Cc=document.getElementById(`root`),wc=new URLSearchParams(window.location.search),Tc=wc.get(`picker`),Ec=wc.get(`filter`)??``,Dc=Tc===`folder`||Tc===`file`||Tc===`save`?(0,I.lazy)(()=>Is(()=>import(`./PickerWindow-BCSxX7Fw.js`).then(e=>({default:e.PickerWindow})),__vite__mapDeps([14,1,2,7,4,5,3,6,9,12,0,8,10]))):null;Cc&&(Ye(),(0,Ln.createRoot)(Cc).render((0,L.jsx)(I.StrictMode,{children:(0,L.jsx)(te,{children:Dc===null?(0,L.jsx)(nc,{}):(0,L.jsx)(I.Suspense,{fallback:null,children:(0,L.jsx)(Dc,{defaultExtension:wc.get(`ext`)??``,extensions:Ec?Ec.split(`;`).filter(Boolean):[],types:wc.get(`types`)??``,typeIndex:Number(wc.get(`type`)??0)||0,initial:wc.get(`initial`)??``,initialName:wc.get(`name`)??``,mode:Tc===`folder`?`folder`:`file`,multiple:wc.get(`multiple`)===`1`,save:Tc===`save`})})})})));export{N as A,Mn as C,Fn as D,F as E,kn as O,Pn as S,P as T,Hn as _,vs as a,Kn as b,ai as c,Tr as d,xr as f,zn as g,Vn as h,hs as i,Nn as j,An as k,Gr as l,Xn as m,ks as n,Eo as o,rr as p,As as r,wo as s,Is as t,Nr as u,Gn as v,jn as w,Bn as x,Un as y};