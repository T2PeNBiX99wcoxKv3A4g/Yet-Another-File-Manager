const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OverviewView-Cc872J0X.js","assets/rolldown-runtime-XKyaHtl9.js","assets/dist-sR-t6Emc.js","assets/selectionMenu-3N_AfRQo.js","assets/theme-Ocob2ChL.js","assets/theme-Cd7QcbnN.css","assets/Icons-NY0trHLk.js","assets/concepts-69Rb8xko.js","assets/textSearch-9s3m3Ks5.js","assets/FileList-wM4BPYTZ.js","assets/IconPicker-mUYOTJIS.js","assets/SettingsView-B2h84lU9.js","assets/GalleryView-DOmBe0kF.js","assets/RecycleView-Zi-HtJ2I.js","assets/PickerWindow-Ct8hKEb8.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{C as t,D as n,E as r,O as i,S as a,T as o,a as s,b as c,c as l,d as u,h as d,k as f,l as p,m,p as ee,r as h,u as g,x as _,y as v}from"./theme-Ocob2ChL.js";import{_ as y,a as b,c as te,d as ne,f as x,g as S,i as re,n as C,o as w,r as ie,s as ae,u as T}from"./dist-sR-t6Emc.js";import{A as oe,B as se,C as ce,D as le,F as ue,G as de,I as fe,J as E,K as pe,Q as me,R as he,S as ge,T as _e,V as ve,W as ye,Z as be,_ as xe,_t as Se,a as Ce,at as we,b as Te,bt as Ee,c as De,ct as Oe,d as ke,f as Ae,ft as je,g as D,gt as Me,h as Ne,ht as Pe,k as Fe,l as Ie,m as Le,nt as Re,o as ze,p as Be,st as Ve,tt as He,u as Ue,v as We,vt as Ge,x as Ke,y as qe,z as Je}from"./selectionMenu-3N_AfRQo.js";import{a as O,f as Ye,i as Xe,p as Ze,u as Qe}from"./concepts-69Rb8xko.js";import{A as $e,B as et,C as tt,D as nt,E as rt,F as it,G as at,J as ot,K as st,L as ct,N as k,O as lt,Q as ut,R as dt,U as ft,V as pt,W as mt,X as ht,Y as A,Z as gt,_t,c as vt,ct as yt,d as bt,dt as xt,et as j,ft as St,g as Ct,gt as wt,ht as Tt,i as Et,k as Dt,l as Ot,lt as kt,m as At,mt as jt,nt as Mt,ot as M,p as Nt,pt as Pt,q as Ft,r as N,st as It,t as Lt,tt as Rt,ut as zt,v as Bt,vt as Vt,x as Ht,yt as Ut,z as Wt}from"./FileList-wM4BPYTZ.js";import{D as Gt,F as Kt,G as qt,I as Jt,J as Yt,K as Xt,O as Zt,P as Qt,T as $t,V as en,W as P,Y as tn,Z as nn,_ as rn,_t as an,a as on,ct as sn,d as cn,et as ln,f as un,i as dn,it as fn,j as pn,k as mn,lt as hn,n as gn,p as _n,pt as vn,r as yn,st as bn,t as xn,ut as Sn,v as Cn,z as wn}from"./Icons-NY0trHLk.js";async function Tn(){return x.available?await x.request(`app.info`):{version:`dev`,platform:`web`,logDirectory:``,rounded:!1,debug:!1}}async function En(e){x.available?await x.request(`system.openUrl`,{url:e}):window.open(e,`_blank`,`noreferrer`)}async function F(){x.available&&await Pn(`update.openLogs`)}async function Dn(e){x.available?await Pn(`update.openRelease`):e&&window.open(e,`_blank`,`noreferrer`)}async function On(){return x.available?await x.request(`update.status`)??null:null}async function kn(){return x.available?await x.request(`update.check`):{current:`dev`,latest:`dev`,available:!1}}async function An(){return x.available?await x.request(`update.download`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}async function jn(){await Pn(`update.cancel`)}async function Mn(){return x.available?await x.request(`update.install`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}function I(e){return x.on(t=>{t.type===`update.progress`&&e(t.data)})}function Nn(e){return x.on(t=>{t.type===`update.changelog`&&e(t.data)})}async function Pn(e,t,n=3e4){let r=await x.request(e,t,n);if(!r.ok)throw Error(r.error??`The action failed.`)}var L=e(y(),1),Fn=i(),In={managed:0,private:0,workingSet:0,available:0};async function Ln(){return x.available?await x.request(`app.memory`):In}async function Rn(){return x.available?await x.request(`app.memory.trim`):In}var zn={registered:!1,pathMatches:!1,registeredPath:null};async function Bn(){return x.available?await x.request(`app.scheme`):zn}async function Vn(e){return x.available?await x.request(`app.scheme.set`,{enabled:e}):zn}var Hn={supported:!1,mode:`none`,active:!1,error:null};async function Un(){return x.available?await x.request(`app.startup`):Hn}async function Wn(e){return x.available?await x.request(`app.startup.set`,{mode:e}):Hn}async function Gn(){return x.available?(await x.request(`app.tasks`)).tasks:[]}async function Kn(){x.available&&await x.request(`app.tasks.clear`)}var R=ne(),qn=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function Jn(e){return qn.test(e)}function Yn({settings:e,theme:t}){let n=e?.backgroundSource??null,r=n?.startsWith(`url:`)?n.slice(4):_(n)?n:null,i=n?.startsWith(`file:`)?n.slice(5):null,a=je(i),o=n?.startsWith(`builtin:`)?Xe(n,t):r??a,s=r===null?i===null?n!==null&&O(n):Jn(i):Jn(r.split(/[?#]/)[0]);if(!n||!o)return null;let c=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,R.jsxs)(Xn,{"aria-hidden":!0,children:[s?(0,R.jsx)(Qn,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o,style:{filter:c}}):(0,R.jsx)(Zn,{src:o,style:{filter:c}}),(0,R.jsx)($n,{})]})}var Xn=S.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,Zn=S.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,Qn=S.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,$n=S.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);

    /* The light artwork is drawn pale already, so it only keeps a faint accent glow. */
    html[data-theme="light"] & {
        background: radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.06), transparent 60%);
    }
`,er=f();function tr({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let o=T(),s=(0,L.useRef)(null),[c,l]=(0,L.useState)(()=>Math.max(1,Math.ceil(n))),u=e??`delete`;return(0,L.useEffect)(()=>{s.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));l(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,er.createPortal)((0,R.jsx)(ar,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,R.jsxs)(or,{role:`alertdialog`,"aria-modal":`true`,children:[(0,R.jsx)(sr,{children:o(`protected_folder`)}),(0,R.jsx)(cr,{children:o(`these_paths_are_protected_by_the_safety_settings`)}),(0,R.jsx)(lr,{children:t.map(e=>(0,R.jsxs)(ur,{children:[(0,R.jsx)(dr,{children:e.path}),(0,R.jsx)(fr,{children:o(`protected_by_pattern`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,R.jsx)(pr,{children:nr(o,u,r??!1)}),(0,R.jsx)(mr,{children:rr(o,u)}),(0,R.jsx)(hr,{children:o(`this_waits_seconds_s_before_the_button_works`,{seconds:n})}),(0,R.jsxs)(gr,{children:[(0,R.jsx)(z,{onClick:i,ref:s,type:`button`,children:o(`cancel`)}),(0,R.jsx)(B,{disabled:c>0,onClick:a,type:`button`,children:c>0?ir(o,u,c):ir(o,u,0)})]})]})}),document.body)}function nr(e,t,n){switch(t){case`delete`:return e(n?`deletes_permanently`:`moves_to_the_recycle_bin`);case`move`:return e(`moves_the_entries`);case`rename`:return e(`renames_the_entry`);case`write`:return e(`writes_into_this_folder`)}}function rr(e,t){switch(t){case`delete`:return e(`nothing_has_been_deleted`);case`move`:return e(`nothing_has_been_moved`);case`rename`:return e(`nothing_has_been_renamed`);case`write`:return e(`nothing_has_been_written`)}}function ir(e,t,n){let r=n>0?t===`delete`?`delete_anyway_seconds_s`:t===`move`?`move_anyway_seconds_s`:t===`rename`?`rename_anyway_seconds_s`:`write_anyway_seconds_s`:t===`delete`?`delete_anyway`:t===`move`?`move_anyway`:t===`rename`?`rename_anyway`:`write_anyway`;return n>0?e(r,{seconds:n}):e(r)}var ar=S.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${ze}
`,or=S.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Ue}
`,sr=S.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,cr=S.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,lr=S.div`
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
`,ur=S.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,dr=S.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,fr=S.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,pr=S.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,mr=S.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,hr=S.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,gr=S.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,z=S.button`
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
`,B=S.button`
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
`;function _r(){let e=T(),[t,n]=(0,L.useState)(null),r=(0,L.useRef)(null),i=(0,L.useRef)(null);(0,L.useEffect)(()=>(Ne(e=>new Promise(t=>{r.current=t,n(e)})),()=>Ne(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,L.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,er.createPortal)((0,R.jsx)(vr,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,R.jsxs)(V,{role:`alertdialog`,"aria-modal":`true`,children:[(0,R.jsx)(yr,{children:e(`notice`)}),(0,R.jsx)(H,{children:t}),(0,R.jsx)(br,{children:(0,R.jsx)(xr,{onClick:a,ref:i,type:`button`,children:e(`ok`)})})]})}),document.body)}var vr=S.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${ze}
`,V=S.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Ue}
`,yr=S.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,H=S.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,br=S.div`
    display: flex;
    justify-content: flex-end;
`,xr=S.button`
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
`;function Sr(){let e=T(),[t,n]=(0,L.useState)(null),[r,i]=(0,L.useState)(``),a=(0,L.useRef)(null),o=(0,L.useRef)(null);(0,L.useEffect)(()=>(D((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>D(null)),[]),(0,L.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,er.createPortal)((0,R.jsx)(Cr,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,R.jsxs)(U,{role:`dialog`,"aria-modal":`true`,children:[(0,R.jsx)(wr,{children:e(`archive_password`)}),(0,R.jsx)(Tr,{children:t.wrong?e(`that_password_did_not_open_the_archive_try_again`):e(`this_archive_is_encrypted_enter_its_password`)}),(0,R.jsx)(W,{title:t.archive,children:t.archive}),(0,R.jsx)(Er,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,R.jsxs)(Dr,{children:[(0,R.jsx)(Or,{onClick:()=>s(null),type:`button`,children:e(`cancel`)}),(0,R.jsx)(kr,{disabled:r.length===0,onClick:c,type:`button`,children:e(`ok`)})]})]})}),document.body)}var Cr=S.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${ze}
`,U=S.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Ue}
`,wr=S.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Tr=S.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,W=S.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Er=S.input`
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
`,Dr=S.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,Or=S.button`
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
`,kr=S(Or)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Ar({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:ee,onSelectMatches:h}){let g=T(),_=(0,L.useRef)(null),v=c??g(`search_this_folder`);(0,L.useEffect)(()=>{let e=_.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let y=e=>{e(),_.current?.focus()};return(0,R.jsxs)(jr,{children:[(0,R.jsx)(bn,{}),(0,R.jsx)(Mr,{"aria-label":v,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),ee())},placeholder:v,ref:_,spellCheck:!1,value:e}),!s&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(Nr,{children:i===0?`0/0`:`${a+1}/${i}`}),h&&(0,R.jsx)(G,{disabled:i===0,onClick:h,title:g(`select_all_matches`),type:`button`,children:(0,R.jsx)(cn,{size:12})}),(0,R.jsx)(G,{$chevron:!0,onClick:()=>y(u),title:g(`previous_match_shift_enter`),type:`button`,children:(0,R.jsx)(un,{size:12})}),(0,R.jsx)(G,{$chevron:!0,$down:!0,onClick:()=>y(d),title:g(`next_match_enter`),type:`button`,children:(0,R.jsx)(un,{size:12})})]}),(0,R.jsx)(Pr,{$on:n,onClick:()=>y(f),title:g(`match_case`),type:`button`,children:`Aa`}),(0,R.jsx)(Pr,{$on:r,onClick:()=>y(p),title:g(`regular_expression`),type:`button`,children:`.*`}),!s&&(0,R.jsx)(Fr,{$on:t===`hide`,onClick:()=>y(m),title:g(t===`hide`?`non_matching_entries_are_hidden`:`non_matching_entries_are_dimmed`),type:`button`,children:t===`hide`?(0,R.jsx)(mn,{size:12}):(0,R.jsx)(Zt,{size:12})}),(0,R.jsx)(G,{onClick:ee,title:g(`close_search_esc`),type:`button`,children:(0,R.jsx)(Cn,{size:12})})]})}var jr=S.div`
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
`,Mr=S.input`
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
`,Nr=S.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,G=S.button`
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
`,Pr=S.button`
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
`,Fr=S(Pr)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`,Ir=`yafm://`,Lr={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function Rr(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function zr(e){return`${Ir}${e===`home`?`overview`:e}`}function Br(e){return Rr(e)?Lr[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Vr(e){let t=e.trim();if(t.length===0)return null;if(!Rr(t))return t;let n=Lr[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?zr(n):null}function Hr({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=T(),s=Ft(),[c,l]=(0,L.useState)(!1),[u,d]=(0,L.useState)(``),[f,p]=(0,L.useState)([]),[m,ee]=(0,L.useState)(0),[h,g]=(0,L.useState)(null),[_,v]=(0,L.useState)(null),[y,b]=(0,L.useState)(null),te=(0,L.useRef)(null),ne=(0,L.useRef)(null),x=(0,L.useRef)(0);(0,L.useEffect)(()=>{if(!bt(e)){b(null);return}let t=Ct(e);if(!t){b(null);return}let n=!0;return vt().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);b({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&b(null)),()=>{n=!1}},[e]),(0,L.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,L.useEffect)(()=>{r&&r!==x.current&&(x.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,L.useEffect)(()=>{c&&te.current?.select()},[c]),(0,L.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[c]);let S=()=>{d(e.replace(/\\/g,`/`)),l(!0)},re=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,L.useEffect)(()=>{if(!c){p([]);return}let e=K(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{he(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),ee(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let C=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,L.useLayoutEffect)(()=>{if(!c){g(null);return}let e=()=>{let e=ne.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);g({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,R.jsxs)(Xr,{onPointerDown:e=>e.stopPropagation(),ref:ne,children:[(0,R.jsxs)($r,{children:[(0,R.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),ee(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),ee(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?C(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):re(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:te,spellCheck:!1,value:u}),(0,R.jsx)(ei,{onClick:()=>l(!1),title:o(`cancel`),type:`button`,children:(0,R.jsx)(Cn,{size:12})}),(0,R.jsx)(ei,{$apply:!0,onClick:re,onPointerDown:e=>e.stopPropagation(),title:o(`open_this_path`),type:`button`,children:(0,R.jsx)(cn,{size:14})})]}),f.length>0&&h&&(0,er.createPortal)((0,R.jsx)(Zr,{onPointerDown:e=>e.stopPropagation(),style:{left:h.left,top:h.top,width:h.width},children:f.map((e,t)=>(0,R.jsxs)(Qr,{$active:t===m,onClick:t=>C(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>ee(t),type:`button`,children:[(0,R.jsx)($e,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,R.jsx)(J,{children:e.name})]},e.path))}),document.body)]});let w=t?[{label:t,path:e,icon:n}]:Ur(e,y)??Gr(e,s.places);return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(Kr,{onClick:S,title:o(`click_to_type_a_path`),children:w.map((t,n)=>(0,R.jsxs)(qr,{$last:n===w.length-1,children:[n>0&&(0,R.jsx)(q,{children:(0,R.jsx)(un,{size:9})}),(0,R.jsxs)(Yr,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):v({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,R.jsx)(Jr,{children:(0,R.jsx)(k,{place:t.place,size:13})}):t.icon&&(0,R.jsx)(Jr,{children:t.icon}),t.label]})]},t.path))}),_&&(0,R.jsx)(Ce,{items:[{label:o(`open`),icon:(0,R.jsx)(dn,{size:14}),onSelect:()=>i(_.path)},{label:o(`open_in_new_tab`),icon:(0,R.jsx)(fn,{size:14}),onSelect:()=>i(_.path,!0)},{label:o(`copy_as_path`),icon:(0,R.jsx)(rn,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(_.path)},...Rr(_.path)?[{label:o(`open_with`),icon:(0,R.jsx)(Gt,{size:14}),onSelect:()=>void jt(_.path)},{label:o(`properties`),icon:(0,R.jsx)(Qt,{size:14}),onSelect:()=>void _t([_.path])}]:[]],onClose:()=>v(null),x:_.x,y:_.y})]})}function Ur(e,t){let n=Ct(e);if(!n)return null;let r=rt(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,R.jsx)(sn,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function Wr(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function Gr(e,t){let n=Wr(e),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>r(t.path,e.path));t>i&&(i=t,a=e)}return a&&i>=0&&n.splice(0,i+1,{label:a.name,path:n[i].path,place:a}),n}function K(e){if(Rr(e)||bt(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var Kr=S.div`
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
`,qr=S.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Jr=S.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,q=S.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,Yr=S.button`
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
`,Xr=S.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,Zr=S.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${Be}
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
`,Qr=S.button`
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
`,J=S.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$r=S.div`
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
`,ei=S.button`
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
`;function ti({places:e,drives:t,recent:i,recentLimit:a,currentPath:o,activeKind:s,homePath:c=``,version:l=0,historyVersion:d=0,hiddenViews:f=[],onNavigate:p,onOpenView:h}){let[g,_]=(0,L.useState)([]),v=T(),[y,b]=(0,L.useState)(null),te=Ft();(0,L.useEffect)(()=>{Qe().then(e=>{b(e),_(ct(e).filter(e=>e.pinned))},()=>{b(null),_([])})},[l]),(0,L.useEffect)(()=>{if(!x.available)return;let e=g.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||c).filter(e=>e.length>0);return x.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>x.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[g,c]);let ne=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>r(e.path,t));return{name:y?.placeNames?.[t]??n?.name??(u(t)||t),path:t,kind:`folder`,icon:n?.icon??y?.placeIcons?.[t]??null}}),S=s===`files`;return(0,R.jsxs)(si,{children:[(0,R.jsxs)(ci,{children:[!f.includes(`home`)&&(0,R.jsxs)(Y,{$active:s===`home`,onClick:e=>h(`home`,M(e)),title:v(`overview`),type:`button`,children:[(0,R.jsx)(Yt,{}),(0,R.jsx)(mi,{children:v(`overview`)})]}),!f.includes(`recycle`)&&(0,R.jsxs)(Y,{$active:s===`recycle`,onClick:e=>h(`recycle`,M(e)),title:v(`recycle_bin`),type:`button`,children:[(0,R.jsx)(an,{}),(0,R.jsx)(mi,{children:v(`recycle_bin`)})]}),!f.includes(`gallery`)&&(0,R.jsxs)(Y,{$active:s===`gallery`,onClick:e=>h(`gallery`,M(e)),title:v(`gallery`),type:`button`,children:[(0,R.jsx)(en,{}),(0,R.jsx)(mi,{children:v(`gallery`)})]})]}),g.map(e=>(0,R.jsxs)(ui,{children:[(0,R.jsxs)(Y,{as:`div`,$active:!1,children:[(0,R.jsx)(pi,{children:(0,R.jsx)(it,{panel:e,size:16})}),(0,R.jsx)(mi,{children:v(e.title)})]}),(0,R.jsx)(di,{children:(0,R.jsxs)(fi,{children:[e.kind===`quick`&&ne(e).map(e=>(0,R.jsxs)(Y,{$active:S&&r(o,e.path),onClick:t=>p(e.path,M(t)),title:e.path,type:`button`,children:[(0,R.jsx)(k,{place:e}),(0,R.jsx)(mi,{children:e.name})]},e.path)),e.kind===`recent`&&i.slice(0,a).map(e=>{let t=st(te,e.path);return(0,R.jsxs)(Y,{$active:S&&r(o,e.path),onClick:t=>e.isDirectory?p(e.path,M(t)):void E(e.path),title:e.path,type:`button`,children:[t&&te.useIcons?(0,R.jsx)(k,{place:t}):(0,R.jsx)($e,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,R.jsx)(mi,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,R.jsx)(ii,{historyVersion:d,onNavigate:p}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,R.jsxs)(Y,{$active:S&&r(o,e.name),onClick:t=>p(e.name,M(t)),title:e.name,type:`button`,children:[(0,R.jsx)($t,{}),(0,R.jsxs)(mi,{children:[ee(e),(0,R.jsxs)(hi,{children:[m(e.freeSpace),` free`]}),(0,R.jsx)(gi,{children:(0,R.jsx)(_i,{$used:t,$tone:n(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,R.jsx)(ai,{onNavigate:p,path:e.path||c})]})})]},e.id)),!f.includes(`settings`)&&(0,R.jsx)(li,{children:(0,R.jsxs)(Y,{$active:s===`settings`,onClick:e=>h(`settings`,M(e)),title:v(`settings`),type:`button`,children:[(0,R.jsx)(Qt,{}),(0,R.jsx)(mi,{children:v(`settings`)})]})})]})}var ni=10,ri=40;function ii({historyVersion:e=0,onNavigate:t}){let n=T(),[r,i]=(0,L.useState)(null),a=Ft();return(0,L.useEffect)(()=>{ve().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=st(a,e.path);return(0,R.jsxs)(Y,{$active:!1,onClick:n=>t(e.path,M(n)),title:o(n,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,R.jsx)(k,{place:r}):(0,R.jsx)($e,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,R.jsx)(mi,{children:r?.name||e.name})]},e.path)})}function ai({path:e,onNavigate:t}){let[n,i]=(0,L.useState)(null);(0,L.useEffect)(()=>{e&&(i(null),he(e,!1).then(i,()=>i(null)))},[e]),(0,L.useEffect)(()=>{if(e&&x.available)return x.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&r(n.data.path,e)&&he(e,!1).then(i,()=>void 0)})},[e]);let a=n?.entries??[],o=a.filter(e=>e.isDirectory).slice(0,ni),s=a.filter(e=>!e.isDirectory).slice(0,ri);return(0,R.jsxs)(R.Fragment,{children:[o.map(e=>(0,R.jsx)(oi,{entry:e,onNavigate:t},e.fullPath)),s.map(e=>(0,R.jsx)(oi,{entry:e,onNavigate:t},e.fullPath))]})}function oi({entry:e,onNavigate:t}){let n=Ft(),r=st(n,e.fullPath);return(0,R.jsxs)(Y,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,M(n)):void E(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,R.jsx)(k,{place:r}):(0,R.jsx)($e,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,R.jsx)(mi,{children:r?.name||e.name})]})}var si=S.aside`
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

    &:not(:hover) ${()=>hi},
    &:not(:hover) ${()=>gi} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,ci=S.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,li=S(ci)`
    margin-top: auto;
`,ui=S.div`
    display: flex;
    flex-direction: column;
`,di=S.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${si}:hover ${ui}:hover > & {
        grid-template-rows: 1fr;
    }
`,fi=S.div`
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
`,Y=S.button`
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
`,pi=S.span`
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
`,mi=S.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,hi=S.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,gi=S.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,_i=S.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,vi=S.span`
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
`;function yi({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=T(),a=(0,L.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,L.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)},t=()=>r(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[n,r]),(0,R.jsxs)(xi,{ref:a,children:[(0,R.jsxs)(Si,{$active:n,onClick:()=>r(!n),title:s>0?o(i,s,`k_1_operation_running`,`count_operations_running`):i(`status_center`),type:`button`,children:[(0,R.jsx)(vn,{size:13}),c>0&&(0,R.jsx)(vi,{children:c>9?`9+`:c})]}),n&&(0,R.jsxs)(Ci,{children:[(0,R.jsxs)(wi,{children:[(0,R.jsxs)(Ti,{children:[(0,R.jsx)(vn,{size:12}),i(`status_center`)]}),(0,R.jsxs)(Ei,{children:[(0,R.jsx)(Di,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`clear_finished`)}),(0,R.jsx)(Oi,{onClick:()=>r(!1),title:i(`close`),type:`button`,children:(0,R.jsx)(Cn,{size:10})})]})]}),e.length===0?(0,R.jsx)(Ai,{children:i(`no_operations_yet`)}):(0,R.jsx)(ki,{children:e.map(e=>(0,R.jsx)(bi,{task:e},e.id))})]})]})}function bi({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,R.jsxs)(ji,{children:[(0,R.jsxs)(Mi,{children:[(0,R.jsx)(Ni,{$state:e.state,children:e.state===`done`?(0,R.jsx)(cn,{size:10}):e.state===`failed`?(0,R.jsx)(Cn,{size:10}):(0,R.jsx)(Pi,{})}),(0,R.jsx)(Fi,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,R.jsxs)(Ii,{children:[m(e.bytesDone),` / `,m(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,R.jsxs)(Ii,{children:[e.done,` / `,e.total]})]}),i&&(0,R.jsx)(Li,{children:(0,R.jsx)(Ri,{$percent:r,$indeterminate:t===0})}),e.error&&(0,R.jsx)(zi,{children:e.error})]})}var xi=S.div`
    position: relative;
    display: flex;
`,Si=S.button`
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
`,Ci=S.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${Be}
    ${Ie}
`,wi=S.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Ti=S.span`
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
`,Ei=S.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Di=S.button`
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
`,Oi=S.button`
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
`,ki=S.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,Ai=S.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,ji=S.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${ze}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,Mi=S.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,Ni=S.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,Pi=S.span`
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
`,Fi=S.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ii=S.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Li=S.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,Ri=S.div`
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
`,zi=S.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function Bi(){return x.available?(await x.request(`fs.history.list`)).entries:[]}async function Vi(e){return x.available?(await x.request(`fs.history.undoTo`,{id:e})).ok:!1}function Hi(){let e=T(),[t,n]=(0,L.useState)(!1),[r,i]=(0,L.useState)([]),[a,o]=(0,L.useState)(!1),s=(0,L.useRef)(null),c=()=>void Bi().then(i,()=>i([]));(0,L.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)},i=()=>n(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,i),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,i)}},[t]);let l=async e=>{o(!0);try{await Vi(e),c()}finally{o(!1)}};return(0,R.jsxs)(Gi,{ref:s,children:[(0,R.jsx)(Ki,{$active:t,onClick:()=>n(e=>!e),title:e(`history`),type:`button`,children:(0,R.jsx)(_n,{size:14})}),t&&(0,R.jsxs)(qi,{children:[(0,R.jsxs)(Ji,{children:[(0,R.jsxs)(Yi,{children:[(0,R.jsx)(_n,{size:12}),e(`history`)]}),(0,R.jsx)(Xi,{onClick:()=>n(!1),title:e(`close`),type:`button`,children:(0,R.jsx)(Cn,{size:10})})]}),r.length===0?(0,R.jsx)(aa,{children:e(`no_operations_yet`)}):(0,R.jsx)(Zi,{children:r.map(t=>(0,R.jsxs)(Qi,{children:[(0,R.jsxs)($i,{children:[(0,R.jsxs)(ea,{children:[(0,R.jsx)(Wi,{label:t.label}),Ui(e,t.label)]}),(0,R.jsx)(ta,{children:d(t.at)})]}),t.paths.length>0&&(0,R.jsxs)(na,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,R.jsx)(ra,{children:(0,R.jsx)(ia,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`undo`)})})]},t.id))})]})]})}function Ui(e,t){if(t===`new_folder`)return e(`new_folder`);if(t===`new_file`)return e(`new_file`);if(t===`paste_text`)return e(`paste_text`);if(t===`paste_image`)return e(`paste_image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`move`?`move_count_items`:t===`copy`?`copy_count_items`:`delete_count_items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`rename`)} ${i[1]}`:t}function Wi({label:e}){return e.startsWith(`delete`)?(0,R.jsx)(an,{size:13}):e.startsWith(`move`)||e.startsWith(`copy`)?(0,R.jsx)(rn,{size:13}):e.startsWith(`rename`)?(0,R.jsx)(ln,{size:13}):e.startsWith(`compress`)?(0,R.jsx)(gn,{size:13}):e.startsWith(`new`)?(0,R.jsx)(fn,{size:13}):(0,R.jsx)(dn,{size:13})}var Gi=S.div`
    position: relative;
    display: flex;
`,Ki=S.button`
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
`,qi=S.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${Be}
    ${Ie}
`,Ji=S.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Yi=S.span`
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
`,Xi=S.button`
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
`,Zi=S.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,Qi=S.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,$i=S.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,ea=S.span`
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
`,ta=S.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,na=S.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ra=S.div`
    display: flex;
    justify-content: flex-end;
`,ia=S.button`
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
`,aa=S.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,oa=(e=>(e[e.Border=-1]=`Border`,e[e.Data=0]=`Data`,e[e.Function=1]=`Function`,e[e.Position=2]=`Position`,e[e.Timing=3]=`Timing`,e[e.Alignment=4]=`Alignment`,e))(oa||{}),sa=[0,1],ca=[1,0],la=[2,3],ua=[3,2],da={L:sa,M:ca,Q:la,H:ua},fa=/^\d*$/,pa=/^[A-Z0-9 $%*+./:-]*$/,ma=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`,ha=1,ga=40,_a=3,va=3,ya=40,ba=10,xa=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],Sa=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],Ca=class{constructor(e,t,n,r){if(this.version=e,this.ecc=t,e<ha||e>ga)throw RangeError(`Version value out of range`);if(r<-1||r>7)throw RangeError(`Mask value out of range`);this.size=e*4+17;let i=Array.from({length:this.size}).fill(!1);for(let e=0;e<this.size;e++)this.modules.push(i.slice()),this.types.push(i.map(()=>0));this.drawFunctionPatterns();let a=this.addEccAndInterleave(n);if(this.drawCodewords(a),r===-1){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let n=this.getPenaltyScore();n<e&&(r=t,e=n),this.applyMask(t)}}this.mask=r,this.applyMask(r),this.drawFormatBits(r)}size;mask;modules=[];types=[];getModule(e,t){return e>=0&&e<this.size&&t>=0&&t<this.size&&this.modules[t][e]}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0,oa.Timing),this.setFunctionModule(e,6,e%2==0,oa.Timing);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n===0&&r===0||n===0&&r===t-1||n===t-1&&r===0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.ecc[1]<<3|e,n=t;for(let e=0;e<10;e++)n=n<<1^(n>>>9)*1335;let r=(t<<10|n)^21522;for(let e=0;e<=5;e++)this.setFunctionModule(8,e,wa(r,e));this.setFunctionModule(8,7,wa(r,6)),this.setFunctionModule(8,8,wa(r,7)),this.setFunctionModule(7,8,wa(r,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,wa(r,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,wa(r,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,wa(r,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;for(let e=0;e<18;e++){let n=wa(t,e),r=this.size-11+e%3,i=Math.floor(e/3);this.setFunctionModule(r,i,n),this.setFunctionModule(i,r,n)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){let i=Math.max(Math.abs(r),Math.abs(n)),a=e+r,o=t+n;a>=0&&a<this.size&&o>=0&&o<this.size&&this.setFunctionModule(a,o,i!==2&&i!==4,oa.Position)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!==1,oa.Alignment)}setFunctionModule(e,t,n,r=oa.Function){this.modules[t][e]=n,this.types[t][e]=r}addEccAndInterleave(e){let t=this.version,n=this.ecc;if(e.length!==za(t,n))throw RangeError(`Invalid argument`);let r=Sa[n[0]][t],i=xa[n[0]][t],a=Math.floor(Ra(t)/8),o=r-a%r,s=Math.floor(a/r),c=[],l=Ba(i);for(let t=0,n=0;t<r;t++){let r=e.slice(n,n+s-i+(t<o?0:1));n+=r.length;let a=Va(r,l);t<o&&r.push(0),c.push(r.concat(a))}let u=[];for(let e=0;e<c[0].length;e++)c.forEach((t,n)=>{(e!==s-i||n>=o)&&u.push(t[e])});return u}drawCodewords(e){if(e.length!==Math.floor(Ra(this.version)/8))throw RangeError(`Invalid argument`);let t=0;for(let n=this.size-1;n>=1;n-=2){n===6&&(n=5);for(let r=0;r<this.size;r++)for(let i=0;i<2;i++){let a=n-i,o=n+1&2?r:this.size-1-r;!this.types[o][a]&&t<e.length*8&&(this.modules[o][a]=wa(e[t>>>3],7-(t&7)),t++)}}}applyMask(e){if(e<0||e>7)throw RangeError(`Mask value out of range`);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw Error(`Unreachable`)}!this.types[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[t][a]===n?(r++,r===5?e+=_a:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*ya),n=this.modules[t][a],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*ya}for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[a][t]===n?(r++,r===5?e+=_a:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*ya),n=this.modules[a][t],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*ya}for(let t=0;t<this.size-1;t++)for(let n=0;n<this.size-1;n++){let r=this.modules[t][n];r===this.modules[t][n+1]&&r===this.modules[t+1][n]&&r===this.modules[t+1][n+1]&&(e+=va)}let t=0;for(let e of this.modules)t=e.reduce((e,t)=>e+ +!!t,t);let n=this.size*this.size,r=Math.ceil(Math.abs(t*20-n*10)/n)-1;return e+=r*ba,e}getAlignmentPatternPositions(){if(this.version===1)return[];{let e=Math.floor(this.version/7)+2,t=this.version===32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}finderPenaltyCountPatterns(e){let t=e[1],n=t>0&&e[2]===t&&e[3]===t*3&&e[4]===t&&e[5]===t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]===0&&(e+=this.size),t.pop(),t.unshift(e)}};function X(e,t,n){if(t<0||t>31||e>>>t)throw RangeError(`Value out of range`);for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function wa(e,t){return!!(e>>>t&1)}var Ta=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw RangeError(`Invalid argument`);this.bitData=n.slice()}getData(){return this.bitData.slice()}},Ea=[1,10,12,14],Da=[2,9,11,13],Oa=[4,8,16,16];function ka(e,t){return e[Math.floor((t+7)/17)+1]}function Aa(e){let t=[];for(let n of e)X(n,8,t);return new Ta(Oa,e.length,t)}function ja(e){if(!Pa(e))throw RangeError(`String contains non-numeric characters`);let t=[];for(let n=0;n<e.length;){let r=Math.min(e.length-n,3);X(Number.parseInt(e.substring(n,n+r),10),r*3+1,t),n+=r}return new Ta(Ea,e.length,t)}function Ma(e){if(!Fa(e))throw RangeError(`String contains unencodable characters in alphanumeric mode`);let t=[],n=0;for(;n+2<=e.length;n+=2){let r=ma.indexOf(e.charAt(n))*45;r+=ma.indexOf(e.charAt(n+1)),X(r,11,t)}return n<e.length&&X(ma.indexOf(e.charAt(n)),6,t),new Ta(Da,e.length,t)}function Na(e){return e===``?[]:Pa(e)?[ja(e)]:Fa(e)?[Ma(e)]:[Aa(La(e))]}function Pa(e){return fa.test(e)}function Fa(e){return pa.test(e)}function Ia(e,t){let n=0;for(let r of e){let e=ka(r.mode,t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}function La(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)===`%`?(t.push(Number.parseInt(e.substring(n+1,n+3),16)),n+=2):t.push(e.charCodeAt(n));return t}function Ra(e){if(e<ha||e>ga)throw RangeError(`Version number out of range`);let t=(16*e+128)*e+64;if(e>=2){let n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return t}function za(e,t){return Math.floor(Ra(e)/8)-xa[t[0]][e]*Sa[t[0]][e]}function Ba(e){if(e<1||e>255)throw RangeError(`Degree out of range`);let t=[];for(let n=0;n<e-1;n++)t.push(0);t.push(1);let n=1;for(let r=0;r<e;r++){for(let e=0;e<t.length;e++)t[e]=Ha(t[e],n),e+1<t.length&&(t[e]^=t[e+1]);n=Ha(n,2)}return t}function Va(e,t){let n=t.map(e=>0);for(let r of e){let e=r^n.shift();n.push(0),t.forEach((t,r)=>n[r]^=Ha(t,e))}return n}function Ha(e,t){if(e>>>8||t>>>8)throw RangeError(`Byte out of range`);let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return n}function Ua(e,t,n=1,r=40,i=-1,a=!0){if(!(ha<=n&&n<=r&&r<=ga)||i<-1||i>7)throw RangeError(`Invalid value`);let o,s;for(o=n;;o++){let n=za(o,t)*8,i=Ia(e,o);if(i<=n){s=i;break}if(o>=r)throw RangeError(`Data too long`)}for(let e of[ca,la,ua])a&&s<=za(o,e)*8&&(t=e);let c=[];for(let t of e){X(t.mode[0],4,c),X(t.numChars,ka(t.mode,o),c);for(let e of t.getData())c.push(e)}let l=za(o,t)*8;X(0,Math.min(4,l-c.length),c),X(0,(8-c.length%8)%8,c);for(let e=236;c.length<l;e^=253)X(e,8,c);let u=Array.from({length:Math.ceil(c.length/8)},()=>0);return c.forEach((e,t)=>u[t>>>3]|=e<<7-(t&7)),new Ca(o,t,u,i)}function Wa(e,t){let{ecc:n=`L`,boostEcc:r=!1,minVersion:i=1,maxVersion:a=40,maskPattern:o=-1,border:s=1}=t||{},c=typeof e==`string`?Na(e):Array.isArray(e)?[Aa(e)]:void 0;if(!c)throw Error(`uqr only supports encoding string and binary data, but got: ${typeof e}`);let l=Ua(c,da[n],i,a,o,r),u=Ga({version:l.version,maskPattern:l.mask,size:l.size,data:l.modules,types:l.types},s);return t?.invert&&(u.data=u.data.map(e=>e.map(e=>!e))),t?.onEncoded?.(u),u}function Ga(e,t=1){if(!t)return e;let{size:n}=e,r=n+t*2;e.size=r,e.data.forEach(e=>{for(let n=0;n<t;n++)e.unshift(!1),e.push(!1)});for(let n=0;n<t;n++)e.data.unshift(Array.from({length:r},e=>!1)),e.data.push(Array.from({length:r},e=>!1));let i=oa.Border;e.types.forEach(e=>{for(let n=0;n<t;n++)e.unshift(i),e.push(i)});for(let n=0;n<t;n++)e.types.unshift(Array.from({length:r},e=>i)),e.types.push(Array.from({length:r},e=>i));return e}function Ka(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function qa(e,t={}){let n=Wa(e,t),{pixelSize:r=10,whiteColor:i=`white`,blackColor:a=`black`}=t,o=n.size*r,s=n.size*r,c=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${o}">`,l=[];for(let e=0;e<n.size;e++)for(let t=0;t<n.size;t++){let i=t*r,a=e*r;n.data[e][t]&&l.push(`M${i},${a}h${r}v${r}h-${r}z`)}return c+=`<rect fill="${Ka(i)}" width="${s}" height="${o}"/>`,c+=`<path fill="${Ka(a)}" d="${l.join(``)}"/>`,c+=`</svg>`,c}function Ja({currentFolder:e}){let t=T(),[n,i]=(0,L.useState)(!1),[a,o]=(0,L.useState)(null),[s,c]=(0,L.useState)(!1),l=(0,L.useRef)(null);(0,L.useEffect)(()=>{if(!n)return;let e=()=>void Ot().then(o,()=>void 0);e();let t=window.setInterval(e,2500),r=e=>{l.current?.contains(e.target)||i(!1)},a=()=>i(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,a),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,a)}},[n]),(0,L.useEffect)(()=>{let e=()=>void Ot().then(o,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{o(await e())}finally{c(!1)}},d=a?.shares.some(t=>r(t.path,e))??!1;return(0,R.jsxs)(Ya,{ref:l,children:[(0,R.jsxs)(Xa,{$active:n,onClick:()=>i(e=>!e),title:t(`share_folders`),type:`button`,children:[(0,R.jsx)(sn,{size:15}),a&&a.shares.length>0&&(0,R.jsx)(vi,{children:a.shares.length>9?`9+`:a.shares.length})]}),n&&(0,R.jsxs)(Za,{children:[(0,R.jsxs)(Qa,{children:[(0,R.jsxs)($a,{children:[(0,R.jsx)(hn,{size:12}),t(`share`)]}),(0,R.jsx)(eo,{onClick:()=>i(!1),title:t(`close`),type:`button`,children:(0,R.jsx)(Cn,{size:10})})]}),(0,R.jsxs)(to,{children:[(0,R.jsxs)(no,{children:[(0,R.jsx)(xn,{size:15}),(0,R.jsxs)(`span`,{children:[(0,R.jsx)(`strong`,{children:a?.deviceName||t(`this_device`)}),(0,R.jsx)(so,{children:a?.fingerprint??``})]})]}),a?.shares.length===0&&(0,R.jsx)(co,{children:t(`no_folders_are_shared_yet`)}),a?.shares.map(e=>(0,R.jsxs)(lo,{children:[(0,R.jsxs)(uo,{children:[(0,R.jsx)(fo,{title:e.path,children:e.name}),(0,R.jsx)(mo,{disabled:s,onClick:()=>void u(()=>Bt(e.id)),title:t(`stop_sharing`),type:`button`,children:(0,R.jsx)(Cn,{size:10})})]}),(0,R.jsx)(po,{title:e.path,children:e.path}),(0,R.jsxs)(ho,{children:[(0,R.jsxs)(go,{$active:e.mode===`client`,onClick:()=>void u(()=>tt(e.id,`client`)),title:t(`only_paired_devices_can_open_this_folder_in_the_app`),type:`button`,children:[(0,R.jsx)(xn,{size:11}),t(`app`)]}),(0,R.jsxs)(go,{$active:e.mode===`web`,onClick:()=>void u(()=>tt(e.id,`web`)),title:t(`any_device_with_a_browser_can_open_this_folder`),type:`button`,children:[(0,R.jsx)(Kt,{size:11}),t(`web`)]})]})]},e.id)),(0,R.jsxs)(_o,{disabled:s||e.length===0||d,onClick:()=>void u(()=>Et(e,`client`)),title:d?t(`this_folder_is_already_shared`):e,type:`button`,children:[(0,R.jsx)(fn,{size:12}),t(`share_this_folder`)]}),a?.webRunning&&(0,R.jsxs)(vo,{children:[(0,R.jsxs)(yo,{children:[(0,R.jsx)(Kt,{size:12}),t(`browser_access`)]}),(0,R.jsxs)(io,{children:[(0,R.jsx)(ao,{children:a.urls.map(e=>(0,R.jsx)(bo,{onClick:()=>void En(e),type:`button`,children:e},e))}),a.preferredUrl&&(0,R.jsx)(ro,{value:a.preferredUrl})]}),(0,R.jsx)(so,{children:t(`open_one_of_these_addresses_on_any_device_on_the_same_network`)})]})]})]})]})}var Ya=S.div`
    position: relative;
    display: flex;
`,Xa=S.button`
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
`,Za=S.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${Be}
    ${Ie}
`,Qa=S.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,$a=S.span`
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
`,eo=S.button`
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
`,to=S.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,no=S.div`
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
`;function ro({value:e}){let t=T(),n=(0,L.useMemo)(()=>qa(e,{ecc:`M`,border:2,pixelSize:4,blackColor:`#000000`,whiteColor:`#ffffff`}),[e]);return(0,R.jsx)(oo,{dangerouslySetInnerHTML:{__html:n},role:`img`,title:t(`scan_the_code_to_open_this_share_on_a_phone`)})}var io=S.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,ao=S.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
`,oo=S.div`
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
`,so=S.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,co=S.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,lo=S.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,uo=S.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,fo=S.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,po=S.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,mo=S.button`
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
`,ho=S.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,go=S.button`
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
`,_o=S.button`
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
`,vo=S.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,yo=S.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,bo=S.button`
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
`;function xo(){let e=T();return(0,R.jsx)(So,{title:e(`always_applies_to_every_folder`),children:e(`global`)})}var So=S.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`;function Co({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=T(),[s,c]=(0,L.useState)(!1),l=(0,L.useRef)(null);(0,L.useEffect)(()=>{if(!s)return;let e=()=>c(!1),t=e=>{l.current?.contains(e.target)||c(!1)},n=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`keydown`,n)}},[s]),(0,L.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=N.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,R.jsxs)(wo,{ref:l,children:[(0,R.jsx)(To,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`view`),type:`button`,children:e.mode===`grid`?(0,R.jsx)(Jt,{size:14}):(0,R.jsx)(P,{size:14})}),s&&(0,R.jsxs)(Eo,{children:[(0,R.jsxs)(Do,{children:[(0,R.jsx)(nn,{size:11}),o(`view`)]}),(0,R.jsxs)(ko,{children:[(0,R.jsxs)(Ao,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,R.jsx)(P,{size:12}),` `,o(`list`)]}),(0,R.jsxs)(Ao,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,R.jsx)(Jt,{size:12}),` `,o(`grid`)]})]}),(0,R.jsxs)(Do,{children:[(0,R.jsx)(P,{size:11}),o(`list_icon_size`)]}),(0,R.jsxs)(jo,{children:[(0,R.jsx)(`input`,{"aria-label":o(`list_icon_size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,R.jsxs)(Mo,{children:[e.iconSize,`px`]})]}),(0,R.jsxs)(Do,{children:[(0,R.jsx)(Jt,{size:11}),o(`grid_size`)]}),(0,R.jsxs)(jo,{children:[(0,R.jsx)(`input`,{"aria-label":o(`grid_size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,R.jsxs)(Mo,{children:[e.gridSize,`px`]})]}),(0,R.jsxs)(Do,{children:[(0,R.jsx)(Sn,{size:11}),o(`columns`),(0,R.jsx)(xo,{}),(0,R.jsx)(Oo,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:o(`reset_column_widths`),type:`button`,children:o(`reset_widths`)})]}),N.map(e=>(0,R.jsxs)(No,{children:[(0,R.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,R.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,R.jsxs)(No,{children:[(0,R.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,R.jsx)(`span`,{children:o(`link_target_after_the_name`)})]}),(0,R.jsxs)(Do,{children:[(0,R.jsx)(Zt,{size:11}),o(`preview_panel`),(0,R.jsx)(xo,{})]}),(0,R.jsxs)(No,{children:[(0,R.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,R.jsx)(`span`,{children:o(`preview_under_the_list`)})]})]})]})}var wo=S.div`
    position: relative;
    display: flex;
    height: 100%;
`,To=S.button`
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
`,Eo=S.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${Be}
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
`,Do=S.div`
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
`,Oo=S.button`
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
`,ko=S.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Ao=S.button`
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
`,jo=S.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,Mo=S.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,No=S.label`
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
`,Po=e=>(0,R.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,R.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),Fo=e=>(0,R.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,R.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),Io=e=>(0,R.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,R.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),Lo=e=>(0,R.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,R.jsx)(`path`,{d:`M2 5h6`})}),Ro=e=>(0,R.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,R.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),zo=e=>(0,R.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,R.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,R.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function Bo({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:p,activityOpen:m,onActivityOpenChange:ee,trayCount:h,trayVisible:g,onToggleTray:_,split:v,canSplit:y,onToggleSplit:te,details:ne,canDetails:x,onToggleDetails:S,shortcuts:re,currentFolder:C}){let w=T(),ie=b(),oe=ae(),[se,ce]=(0,L.useState)({left:!1,right:!1}),[le,ue]=(0,L.useState)(null),[de,fe]=(0,L.useState)(null),E=(0,L.useRef)(null),pe=(0,L.useRef)(null),me=(0,L.useRef)(null),he=(0,L.useCallback)(()=>{let e=pe.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;ce(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,L.useEffect)(()=>{he();let e=pe.current;if(!e)return;let t=new ResizeObserver(he);return t.observe(e),()=>t.disconnect()},[he,e.length]),(0,L.useEffect)(()=>()=>{E.current&&window.clearTimeout(E.current.timer)},[]),(0,L.useEffect)(()=>{me.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let ge=e=>pe.current?.scrollBy({left:e,behavior:`smooth`}),_e=()=>{E.current&&window.clearTimeout(E.current.timer),E.current=null,fe(null)};return(0,R.jsxs)(Wo,{children:[(0,R.jsx)(Go,{children:(0,R.jsx)(xn,{size:19})}),(0,R.jsxs)(Ko,{children:[se.left&&(0,R.jsx)(Jo,{onClick:()=>ge(-180),title:w(`scroll_tabs_left`),type:`button`,children:(0,R.jsx)(Po,{})}),(0,R.jsx)(qo,{onScroll:he,onWheel:e=>{let t=pe.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:pe,children:e.map(e=>(0,R.jsxs)(Yo,{$active:e.id===t,$dragging:le===e.id,$dropTarget:de===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!lt(t.dataTransfer)||!Vo(e)||(t.preventDefault(),E.current?.id===e.id))return;_e(),fe(e.id);let r=window.setTimeout(()=>{n(e.id),E.current=null},500);E.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(E.current?.id===e.id||de===e.id)&&_e()},onDragEnd:()=>{ue(null),_e()},onDragOver:t=>{(le||lt(t.dataTransfer)&&Vo(e))&&(t.preventDefault(),lt(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>ue(e.id),onDrop:t=>{if(t.preventDefault(),le)a(le,e.id);else if(Vo(e)&&lt(t.dataTransfer)){let{paths:r,move:i}=Dt(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}ue(null),_e()},onClick:()=>n(e.id),ref:e.id===t?me:void 0,title:e.path||e.title,type:`button`,children:[(0,R.jsx)(Ho,{tab:e}),(0,R.jsx)(Xo,{children:e.title}),e.partner&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(Zo,{children:`|`}),(0,R.jsx)(Uo,{place:e.partner.place}),(0,R.jsx)(Xo,{children:e.partner.title})]}),(0,R.jsx)(Qo,{"data-shortcut":j(re.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:w(`close_tab`),children:(0,R.jsx)(Io,{})})]},e.id))}),se.right&&(0,R.jsx)(Jo,{onClick:()=>ge(180),title:w(`scroll_tabs_right`),type:`button`,children:(0,R.jsx)(Fo,{})}),(0,R.jsx)($o,{"data-shortcut":j(re.newTab),onClick:i,title:w(`new_tab`),type:`button`,children:(0,R.jsx)(fn,{size:13})})]}),(0,R.jsx)(es,{...oe}),(0,R.jsxs)(ts,{children:[(0,R.jsx)(rs,{$active:v,"data-shortcut":j(re.splitView),disabled:!y,onClick:te,title:w(v?`close_split_view`:`split_view`),type:`button`,children:(0,R.jsx)(Sn,{size:15})}),(0,R.jsx)(rs,{$active:ne,disabled:!x,onClick:S,title:w(ne?`hide_details_panel`:`show_details_panel`),type:`button`,children:(0,R.jsx)(nn,{size:15})}),(0,R.jsxs)(ns,{$active:g,onClick:_,title:w(g?`hide_file_tray`:`show_file_tray`),type:`button`,children:[(0,R.jsx)(tn,{size:14}),h>0&&(0,R.jsx)(vi,{children:h>9?`9+`:h})]}),(0,R.jsx)(Hi,{}),(0,R.jsx)(Ja,{currentFolder:C}),(0,R.jsx)(yi,{tasks:f,onClear:p,open:m,onOpenChange:ee}),(0,R.jsx)(Co,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,R.jsx)(is,{onClick:ie.minimize,title:w(`minimize`),type:`button`,children:(0,R.jsx)(Lo,{})}),(0,R.jsx)(is,{onClick:ie.toggleMaximize,title:ie.maximized?w(`restore`):w(`maximize`),type:`button`,children:ie.maximized?(0,R.jsx)(zo,{}):(0,R.jsx)(Ro,{})}),(0,R.jsx)(as,{onClick:ie.close,title:w(`close`),type:`button`,children:(0,R.jsx)(Io,{})})]})]})}function Vo(e){return e.kind===`files`&&(!v(e.path)||a(e.path))}function Ho({tab:e}){switch(e.kind){case`home`:return(0,R.jsx)(wn,{size:13});case`settings`:return(0,R.jsx)(Qt,{size:13});case`recycle`:return(0,R.jsx)(an,{size:13});default:return e.archive?(0,R.jsx)(gn,{size:13}):(0,R.jsx)(Uo,{place:e.place})}}function Uo({place:e}){return e?(0,R.jsx)(k,{place:e,size:13}):(0,R.jsx)(pn,{size:13})}var Wo=S.header`
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
`,Go=S.span`
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
`,Ko=S.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,qo=S.div`
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
`,Jo=S.button`
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
`,Yo=S.button`
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
`,Xo=S.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Zo=S.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,Qo=S.span`
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
`,$o=S.button`
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
`,es=S.div`
    flex: 1;
    min-width: 28px;
`,ts=S.div`
    display: flex;
    flex-shrink: 0;
`,ns=S.button`
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
`,rs=S.button`
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
`,is=S.button`
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
`,as=S(is)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function os(){let[e,t]=(0,L.useState)(null),n=(0,L.useRef)(null),r=(0,L.useRef)(void 0);return(0,L.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`blur`,i),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`blur`,i),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,er.createPortal)((0,R.jsx)(ss,{tooltip:e}),document.body):null}function ss({tooltip:e}){let t=(0,L.useRef)(null),[n,r]=(0,L.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,L.useState)(()=>e.bottom+6);return(0,L.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,R.jsxs)(cs,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,R.jsx)(ls,{children:e.text}),e.shortcut&&(0,R.jsx)(us,{children:e.shortcut})]})}var cs=S.div`
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
    ${ze}
`,ls=S.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,us=S.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,ds={home:`overview`,settings:`settings`,recycle:`recycle_bin`,gallery:`gallery`},fs=[{id:`ui`,label:`interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`interface`},{id:`names`,label:`file_names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`interface`},{id:`details`,label:`details_panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`interface`},{id:`path`,label:`address_bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`monospace`},{id:`mono`,label:`monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`text_preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`monospace`}];function ps(e){return`"${e.replaceAll(`"`,``)}"`}function ms(e){let t=document.documentElement.style;for(let n of fs){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${ps(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function hs(){return x.available?(await x.request(`app.fonts`)).fonts??[]:[]}function gs({deviceName:e,code:t,onAccept:n,onReject:r}){let i=T(),a=(0,L.useRef)(null);return(0,L.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,er.createPortal)((0,R.jsx)(_s,{children:(0,R.jsxs)(vs,{role:`alertdialog`,"aria-modal":`true`,children:[(0,R.jsxs)(ys,{children:[(0,R.jsx)(sn,{size:15}),i(`pair_for_sharing`)]}),(0,R.jsx)(bs,{children:i(`device_wants_to_pair_with_this_device_for_sharing_folders`,{device:e})}),(0,R.jsx)(xs,{children:t}),(0,R.jsx)(Ss,{children:i(`check_that_the_other_device_shows_the_same_code_before_accepting`)}),(0,R.jsxs)(Cs,{children:[(0,R.jsx)(ws,{onClick:r,type:`button`,children:i(`reject`)}),(0,R.jsx)(Ts,{onClick:n,ref:a,type:`button`,children:i(`accept`)})]})]})}),document.body)}var _s=S.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${ze}
`,vs=S.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${Ue}
`,ys=S.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,bs=S.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,xs=S.div`
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
`,Ss=S.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Cs=S.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,ws=S.button`
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
`,Ts=S(ws)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,Es=S.button`
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
`,Ds=S.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,Os=`modulepreload`,ks=function(e){return`/`+e},As={},js=function(e){return e.pathname.endsWith(`.css`)},Ms=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Ns=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=ks(t,n);let r=s(t),i=js(r);return Ms(As,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Os,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Ps=(0,L.lazy)(()=>Ns(()=>import(`./OverviewView-Cc872J0X.js`).then(e=>e.n).then(e=>({default:e.OverviewView})),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),Fs=(0,L.lazy)(()=>Ns(()=>import(`./SettingsView-B2h84lU9.js`).then(e=>({default:e.SettingsView})),__vite__mapDeps([11,1,2,4,5,3,6,7,9,8,10]))),Is=(0,L.lazy)(()=>Ns(()=>import(`./GalleryView-DOmBe0kF.js`).then(e=>e.n).then(e=>({default:e.GalleryView})),__vite__mapDeps([12,1,2,4,5,3,6,9]))),Ls=(0,L.lazy)(()=>Ns(()=>import(`./RecycleView-Zi-HtJ2I.js`).then(e=>({default:e.RecycleView})),__vite__mapDeps([13,1,2,4,5,3,6,8]))),Rs=0,zs=new Set;function Bs(e){zs.add(e),x.send({type:`app.navigate.done`,payload:{path:e}})}var Vs=20,Hs=[{value:`0`,label:`auto`},{value:`932`,label:`japanese_cp932`},{value:`936`,label:`simplified_chinese_cp936`},{value:`950`,label:`traditional_chinese_cp950`},{value:`949`,label:`korean_cp949`},{value:`1252`,label:`western_cp1252`},{value:`1250`,label:`central_european_cp1250`},{value:`1251`,label:`cyrillic_cp1251`},{value:`1254`,label:`turkish_cp1254`},{value:`1253`,label:`greek_cp1253`},{value:`1256`,label:`arabic_cp1256`},{value:`1255`,label:`hebrew_cp1255`},{value:`1257`,label:`baltic_cp1257`},{value:`874`,label:`thai_cp874`},{value:`65001`,label:`utf_8`}];function Us(e){return e.history[e.index]??zr(`home`)}function Z(e){return Br(Us(e))??`files`}function Q(e){let t=Us(e);return Br(t)?``:e.listing?.path||t}function Ws(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||Z(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function Gs(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function Ks(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||Fe.iconSize,gridSize:e.view?.gridSize||t.gridSize||Fe.gridSize,sort:e.view?.sort??Fe.sort,sortDescending:e.view?.sortDescending??Fe.sortDescending,columns:t.columns??oe.columns??[]}}function qs(e=zr(`home`)){return Rs+=1,{id:`tab-${Rs}`,listing:null,loading:!Br(e),error:null,history:[e],index:0,fresh:!0,view:null}}function Js(e){return e instanceof Error?e.message:String(e)}function Ys(e){let t=Ct(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return rt(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function Xs(e){let t=u(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function Zs(e){return v(e)?Me(e):void 0}function Qs(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return o(e,t.entries.length,`k_1_item_size`,`count_items_size`,{size:m(n)})}function $s(){let e=T(),[n,i]=(0,L.useState)(()=>[qs()]),[d,f]=(0,L.useState)(()=>n[0].id),[m,ee]=(0,L.useState)(null),[_,y]=(0,L.useState)(()=>{let e=Ke(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[b,te]=(0,L.useState)([]),[ne,S]=(0,L.useState)([]),[C,ae]=(0,L.useState)(null),[ve,De]=(0,L.useState)(null),[ke,Ae]=(0,L.useState)(null),je=w(),[D,Ne]=(0,L.useState)(_e),[Ie,ze]=(0,L.useState)(0),[Be,Ue]=(0,L.useState)(0),[We,qe]=(0,L.useState)(0),[O,Xe]=(0,L.useState)(_e),[$e,tt]=(0,L.useState)(0),[rt,it]=(0,L.useState)(0),[k,_t]=(0,L.useState)(0),[vt,Ct]=(0,L.useState)(0),Et=(0,L.useRef)(vt);Et.current=vt;let[Dt,Ot]=(0,L.useState)([]),[jt,Ft]=(0,L.useState)(10),[N,Bt]=(0,L.useState)(null),Gt=ie(s(N?.themeMode)),Jt=(0,L.useMemo)(()=>(N?.favorites??[]).map(e=>t(e.path)),[N?.favorites]),[Zt,$t]=(0,L.useState)(0),[P,tn]=(0,L.useState)(ot),[nn,rn]=(0,L.useState)(0),[sn,cn]=(0,L.useState)(0),[ln,un]=(0,L.useState)(0),[pn,mn]=(0,L.useState)(!0),[hn,_n]=(0,L.useState)(()=>{let e=Ke(`yafm.preview.width`,320);return e>=220?e:320}),[vn,xn]=(0,L.useState)(null),[Sn,Cn]=(0,L.useState)(null),[wn,En]=(0,L.useState)({kind:null,info:null}),[F,Dn]=(0,L.useState)(`primary`),[kn,An]=(0,L.useState)(null),[jn,Mn]=(0,L.useState)(null),[I,Nn]=(0,L.useState)(null),[Pn,Fn]=(0,L.useState)(null),[In,Ln]=(0,L.useState)({primary:0,secondary:0}),[Rn,zn]=(0,L.useState)({primary:null,secondary:null}),[Bn,Vn]=(0,L.useState)(null),[Hn,Un]=(0,L.useState)([]),[Wn,qn]=(0,L.useState)(!1),[Jn,Xn]=(0,L.useState)(null),[Zn,Qn]=(0,L.useState)(``),$n=(0,L.useRef)([]),er=(0,L.useRef)([]),[nr,rr]=(0,L.useState)([]),[ir,ar]=(0,L.useState)(!1),or=(0,L.useMemo)(()=>ir?new Set(nr.map(e=>e.path)):new Set,[nr,ir]),[sr,cr]=(0,L.useState)(!1),[lr,ur]=(0,L.useState)([]),[dr,fr]=(0,L.useState)(null),pr=(0,L.useRef)(0),[mr,hr]=(0,L.useState)(()=>{let e=Te(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?Gs({x:e.x,y:e.y}):Gs({x:Math.max(20,window.innerWidth-340),y:110})}),gr=(0,L.useCallback)(()=>{hr(e=>Gs(e)),cr(!0)},[]),z=n.find(e=>e.id===d)??n[0],B=Z(z),vr=Us(z),V=Q(z),yr=B===`files`?z.listing?.parent??Ys(V):null,H=z.splitWith?n.find(e=>e.id===z.splitWith):void 0,br=B===`files`&&H!==void 0,xr=H?Q(H):``,Cr=H?H.listing?.parent??Ys(xr):null,U=br&&H&&F===`secondary`?H:z,wr=N?.defaultView??oe,Tr=Ks(U,wr);(0,L.useEffect)(()=>{h(N?.accentColor,N?.secondaryColor,Gt)},[N?.accentColor,N?.secondaryColor,Gt]),(0,L.useEffect)(()=>{ms(N?.fonts)},[N?.fonts]),(0,L.useEffect)(()=>{p(N?.timeFormat,N?.timeFormatPattern),l(N?.relativeTime,N?.relativeTimeWindowMinutes)},[N?.timeFormat,N?.timeFormatPattern,N?.relativeTime,N?.relativeTimeWindowMinutes]),(0,L.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!N?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[N?.backgroundSource]),(0,L.useEffect)(()=>(Ee(e=>new Promise(t=>{fr({id:++pr.current,prompt:e,resolve:t})})),()=>Ee(null)),[]),(0,L.useEffect)(()=>{Dn(`primary`)},[d]),(0,L.useEffect)(()=>{Xe(_e),it(0),_t(0)},[B]),(0,L.useEffect)(()=>{it(0)},[O.query,O.matchCase,O.regex]),(0,L.useEffect)(()=>{it(e=>k===0?0:Math.min(e,k-1))},[k]);let W=Tr.columns.includes(`linkCount`),Er=(0,L.useMemo)(()=>{let e={},n=ct(N),r={};for(let[e,n]of Object.entries(N?.placeNames??{}))r[t(e)]=n;for(let n of b)e[t(n.path)]=n;for(let i of n)if(i.kind===`quick`&&i.id!==`quick`)for(let n of i.places??[]){let i=t(n),a=b.find(e=>t(e.path)===i);e[i]={name:r[i]??a?.name??(u(n)||n),path:n,kind:`folder`,icon:a?.icon??N?.placeIcons?.[n]??null}}return e},[b,N]),Dr=(0,L.useMemo)(()=>({places:Er,useIcons:N?.systemIcons===!1}),[Er,N?.systemIcons]),Or=N?.defaultView?.showImages??!0,kr=N?.defaultView?.imageStripHeight??oe.imageStripHeight,jr=B===`home`?(0,R.jsx)(Yt,{size:13}):B===`settings`?(0,R.jsx)(Qt,{size:13}):B===`recycle`?(0,R.jsx)(an,{size:13}):B===`gallery`?(0,R.jsx)(en,{size:13}):void 0,Mr=D.open&&D.query.length>0,Nr=(0,L.useDeferredValue)(D),G=(0,L.useMemo)(()=>Mr&&U.listing?U.listing.entries.filter(e=>le(e.isDirectory?at(Dr,e.fullPath,e.name):e.name,Nr)).map(e=>e.fullPath):[],[Mr,Nr,U.listing,Dr]);(0,L.useEffect)(()=>{ze(0)},[D.query,D.matchCase,D.regex,U.listing?.path]);let Pr=G.length===0?-1:Math.min(Ie,G.length-1),Fr=(0,L.useCallback)(()=>{Ne(e=>({...e,open:!1,query:``})),ze(0)},[]),Ir=(0,L.useCallback)(()=>{Ne(e=>({...e,open:!0})),Ue(e=>e+1)},[]),Lr=(0,L.useCallback)(()=>{Xe(e=>({...e,open:!0})),tt(e=>e+1)},[]),Rr=(0,L.useCallback)(()=>{Xe(_e),it(0),_t(0)},[]),Ur=(0,L.useCallback)(e=>{it(t=>k===0?0:(Math.min(t,k-1)+e+k)%k)},[k]),Wr=(0,L.useCallback)(e=>{Ne(t=>({...t,open:!0,query:t.open?t.query+e:e})),Ue(e=>e+1)},[]),Gr=(0,L.useCallback)(e=>{ze(t=>G.length===0?0:(Math.min(t,G.length-1)+e+G.length)%G.length)},[G.length]),K=(0,L.useRef)({tabs:n,activeId:d,activePane:F});K.current={tabs:n,activeId:d,activePane:F};let Kr=(0,L.useRef)(N);Kr.current=N;let qr=(0,L.useRef)(!1),Jr=(0,L.useRef)([]),q=(0,L.useCallback)((e,t)=>{i(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Yr=(0,L.useRef)(new Map),Xr=(0,L.useCallback)(e=>{let t=(Yr.current.get(e)??0)+1;return Yr.current.set(e,t),()=>Yr.current.get(e)===t},[]),Zr=(0,L.useCallback)((e,t)=>{x.available&&t&&e===Ws(K.current)&&x.send({type:`fs.focus`,payload:{path:t}})},[]),Qr=(0,L.useCallback)(async(e,t,n)=>{if(!(t&&bt(t)))try{let r=(await Je(t,W)).listing;if(!n()||!r)return;q(e,e=>e.loading?{listing:{...r,total:r.entries.length,signature:0},view:r.view??null}:{})}catch{}},[W,q]),J=(0,L.useCallback)(async(e,t,n=!1)=>{let i=Xr(e);Fr(),Zr(e,t);let a=!n||!K.current.tabs.find(t=>t.id===e)?.listing,o=!n&&t!==void 0;q(e,e=>{if(!o)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let i=e.history[e.index],a=i!==void 0&&r(i,t);return{listing:null,loading:!0,error:null,fresh:!1,history:a?e.history:[...e.history.slice(0,e.index+1),t],index:a?e.index:e.index+1}});try{a&&Qr(e,t,i);let r=t&&bt(t)?await Nt(t):await he(t,!0,W,Et.current,t?Zs(t):void 0,e);if(!i())return;q(e,e=>({listing:r,view:r.view??null,loading:!1,fresh:!1,history:o?e.history.map((t,n)=>n===e.index?r.path:t):e.history,index:e.index})),!n&&!bt(r.path)&&be(r.path).then(()=>$t(e=>e+1))}catch(r){if(!i())return;let a=K.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?Q(a):``,s=Ys(o),c=Js(r);if(o&&Se(c)){let r=g(o),a=await Le(r,!!Me(r));if(a){Ge(r,a),i()&&J(e,t,n);return}}q(e,e=>({listing:{path:o,parent:s,total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[Xr,W,q,Zr,Fr,Qr]),$r=(0,L.useRef)(new Set),ei=(0,L.useCallback)(async e=>{let t=K.current.tabs.find(t=>t.id===e),n=t?.listing;if(!t||Z(t)!==`files`||!n)return;let i=n.entries.length;if(i<=0||i>=(n.total??0)||ni.current.has(e))return;let a=`${e}|${n.path}|${i}`;if($r.current.add(a))try{let t=await ye(n.path,i,n.view?.sort??`name`,n.view?.sortDescending??!1);q(e,e=>{let a=e.listing;return!a||!r(a.path,n.path)||a.entries.length!==i||a.view?.sort!==n.view?.sort?{}:{listing:{...a,entries:[...a.entries,...t.entries],total:t.total}}})}catch{}finally{$r.current.delete(a)}},[q]),ni=(0,L.useRef)(new Set),ri=(0,L.useCallback)(async e=>{let t=K.current.tabs.find(t=>t.id===e),n=t?.listing;if(t&&Z(t)===`files`&&n&&!(n.entries.length>=(n.total??0))&&ni.current.add(e))try{let t=[],i=n.entries.length,a=n.total??0;for(;i<a;){let e=await ye(n.path,i,n.view?.sort??`name`,n.view?.sortDescending??!1);if(e.entries.length===0)break;t.push(e.entries),i+=e.entries.length,a=e.total}if(t.length===0)return;q(e,e=>{let i=e.listing;return!i||!r(i.path,n.path)||i.entries.length!==n.entries.length?{}:{listing:{...i,entries:[...i.entries,...t.flat()],total:a}}})}catch{}finally{ni.current.delete(e)}},[q]),[ii,ai]=(0,L.useState)(0),oi=(0,L.useCallback)(async e=>{let t=K.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0;await ri(e),(K.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0)>t&&ai(e=>e+1)},[ri]),si=U.id,ci=Z(U),li=U.listing?.entries.length??0,ui=U.listing?.total??0;(0,L.useEffect)(()=>{D.open&&D.query.length!==0&&(ci!==`files`||li>=ui||ri(si))},[D.open,D.query,si,ci,li,ui,ri]);let di=(0,L.useCallback)((e,t)=>{let n=Vr(t);n&&(Br(n)?(Fr(),Xr(e),q(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):J(e,n))},[Xr,J,q,Fr]),fi=(0,L.useCallback)(async(e,t,n)=>{if(Fr(),Br(t)){Xr(e),q(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Xr(e);Zr(e,t),q(e,()=>({index:n,listing:null,loading:!0,error:null}));try{bt(t)||Qr(e,t,r);let n=bt(t)?await Nt(t):await he(t,!0,W,Et.current,Zs(t),e);if(!r())return;q(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;let a=Js(i);if(Se(a)){let i=g(t),a=await Le(i,!!Me(i));if(a){Ge(i,a),r()&&fi(e,t,n);return}}q(e,()=>({listing:{path:t,parent:Ys(t),total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:Js(i)}))}},[Xr,W,q,Zr,Fr,Qr]),Y=(0,L.useCallback)((e,t=!0)=>{let n=qs(e??zr(`home`));return i(e=>[...e,n]),t&&f(n.id),e&&!Br(e)&&J(n.id,e),n.id},[J]),pi=(0,L.useCallback)(e=>{for(let t of K.current.tabs)Z(t)===`files`&&r(Q(t),e)&&J(t.id,e,!0)},[J]),mi=(0,L.useCallback)((e,t)=>{let n=u(t);for(let i of K.current.tabs)i.listing?.entries.some(t=>r(t.fullPath,e))&&q(i.id,i=>{let a=i.listing;if(!a)return{};let o=a.entries.map(i=>r(i.fullPath,e)?{...i,name:n,fullPath:t}:i);return{listing:{...a,entries:o}}})},[q]),hi=(0,L.useRef)([]);(0,L.useEffect)(()=>{let e=new Set;for(let r of n){let n=r.listing?.path??r.history[r.index]??``;n&&v(n)&&e.add(t(g(n)))}let r=hi.current.filter(t=>!e.has(t));hi.current=[...e],r.length>0&&me(r)},[n]);let gi=(0,L.useCallback)((e,t=!1)=>{t?Y(zr(e)):di(K.current.activeId,zr(e))},[Y,di]),_i=(0,L.useCallback)(e=>{let{tabs:t,activeId:n}=K.current,r=t.find(t=>t.id===e),a=t.filter(t=>t.id!==e&&t.id!==r?.splitWith);if(r&&!r.hidden&&(er.current.push(Us(r)),er.current.length>Vs&&er.current.shift()),a.length===0){let e=qs();i([e]),f(e.id);return}let o=t.findIndex(t=>t.id===e);i(a),n===e&&f(a[Math.min(o,a.length-1)].id)},[]),vi=(0,L.useCallback)(()=>{let e=er.current.pop();if(!e)return;let t={...qs(e),fresh:!1};i(e=>[...e,t]),f(t.id),Z(t)===`files`&&J(t.id,Q(t))},[J]),yi=(0,L.useCallback)((e,t=!1)=>{t?Y(e):di(Ws(K.current),e??zr(`home`))},[di,Y]),bi=(0,L.useCallback)(e=>{let{tabs:t,activeId:n}=K.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;f(r[i].id)},[]),xi=(0,L.useCallback)(()=>{let{tabs:e,activeId:t}=K.current,n=e.find(e=>e.id===t);if(!n||Z(n)!==`files`)return;let r=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(r){i(e=>e.filter(e=>e.id!==r.id)),q(t,()=>({splitWith:void 0})),Dn(`primary`);return}let a=Q(n),o={...qs(a),hidden:!0};i(e=>[...e,o]),q(t,()=>({splitWith:o.id})),J(o.id,a),Dn(`primary`)},[J,q]),Si=(0,L.useCallback)(e=>{_n(e),ce(`yafm.preview.width`,e)},[]),Ci=(0,L.useCallback)((e,t,n)=>En(r=>r.kind===e&&r.info?.path===t?.path&&r.info?.modified===t?.modified&&r.info?.name===t?.name&&r.note===n?r:{kind:e,info:t,note:n}),[]),wi=(0,L.useCallback)((e,t)=>Ci(`gallery`,e,t),[Ci]),Ti=(0,L.useCallback)((e,t)=>Ci(`recycle`,e,t),[Ci]),Ei=br?F===`secondary`?Sn??vn:vn??Sn:vn,Di=br&&F===`secondary`?In.secondary:In.primary,Oi=B===`files`?Ei:wn.kind===B?wn.info:null,ki=B===`files`?Di>1?o(e,Di,`k_1_item_selected`,`count_items_selected`):void 0:wn.kind===B?wn.note:void 0,Ai=(0,L.useMemo)(()=>B===`files`&&z.listing?Qs(e,z.listing):Zn,[B,z.listing,e,Zn]),ji=(0,L.useRef)(null),Mi=e=>{e.preventDefault();let t=ji.current?.getBoundingClientRect();if(!t)return;let n=Math.max(t.width-7,1),r=e=>{let r=Math.min(Math.max((e.clientX-t.left)/n,.2),.8);y(r),ce(`yafm.split.ratio`,r)},i=()=>{window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,i)};window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,i)},Ni=(e,t,n)=>{t&&An({x:e.clientX,y:e.clientY,directory:t,refresh:n})},Pi=(0,L.useCallback)((e,t)=>{Ln(n=>n[e]===t?n:{...n,[e]:t})},[]),Fi=(0,L.useCallback)(e=>Pi(`primary`,e),[Pi]),Ii=(0,L.useCallback)(e=>Pi(`secondary`,e),[Pi]),Li=(e,t)=>{In[e]!==0&&zn(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},Ri=async(e,t=!1)=>{let n=kn;if(An(null),!n)return;let r=e===null?await Pt(n.directory,t):await St(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;Fr(),Vn(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},zi=(0,L.useCallback)(()=>{let{tabs:e}=K.current,t=e.find(e=>e.id===Ws(K.current));t&&t.index>0&&fi(t.id,t.history[t.index-1],t.index-1)},[fi]),Bi=(0,L.useCallback)(()=>{let{tabs:e}=K.current,t=e.find(e=>e.id===Ws(K.current));t&&t.index<t.history.length-1&&fi(t.id,t.history[t.index+1],t.index+1)},[fi]),Vi=(0,L.useCallback)(()=>{let{tabs:e}=K.current,t=e.find(e=>e.id===Ws(K.current));t&&Z(t)===`files`&&t.listing?.parent&&yi(t.listing.parent)},[yi]),Hi=(0,L.useRef)(null),Ui=(0,L.useCallback)(()=>{for(let e of K.current.tabs)e.listing&&J(e.id,e.listing.path,!0)},[J]),Wi=(0,L.useCallback)(e=>{e.length!==0&&(ur(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),gr())},[gr]),Gi=(0,L.useCallback)(async e=>{let t=await xt(e);t.length!==0&&Wi(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[Wi]),Ki=(0,L.useCallback)(e=>{let t=new Set(e);ur(e=>e.filter(e=>!t.has(e.path)))},[]),qi=(0,L.useCallback)(async e=>{let n=Kr.current;if(!n)return;let r=await xt(e);if(r.length===0)return;let i=new Set((n.favorites??[]).map(e=>t(e.path))),a=r.filter(e=>!i.has(t(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(a.length===0)return;let o={...n,favorites:[...n.favorites??[],...a]};Bt(o),await Ze(o),rn(e=>e+1)},[]),Ji=(0,L.useCallback)(async e=>{let n=Kr.current;if(!n)return;let r=new Set(e.map(t)),i=(n.favorites??[]).filter(e=>!r.has(t(e.path)));if(i.length===(n.favorites??[]).length)return;let a={...n,favorites:i};Bt(a),await Ze(a),rn(e=>e+1)},[]),Yi=(0,L.useCallback)(()=>ur([]),[]),Xi=(0,L.useRef)(-1),Zi=(0,L.useCallback)(e=>{rr(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),ar(e.move),e.entries.length>0&&gr()},[gr]),Qi=(0,L.useCallback)(async()=>{if(x.available)try{let e=await zt();Xi.current=e.sequence,Zi(e)}catch{}},[Zi]),$i=(0,L.useCallback)(async e=>{e.length!==0&&await yt(e,!1)&&await Qi()},[Qi]),ea=(0,L.useRef)(lr);ea.current=lr;let ta=(0,L.useRef)(sr);ta.current=sr;let na=(0,L.useRef)(!1);(0,L.useEffect)(()=>{let e=N?.trayAutoShow??!0,t=t=>{e&&lt(t)&&(ta.current||(na.current=!0),gr())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{na.current&&window.setTimeout(()=>{na.current&&ea.current.length===0&&cr(!1),na.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[gr,N?.trayAutoShow]),(0,L.useEffect)(()=>{let e=()=>hr(e=>Gs(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let ra=(0,L.useCallback)(async()=>{let e=ea.current;if(e.length>0){let t=await xt(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));ur(e=>e.filter(e=>n.has(e.path)))}await Qi()},[Qi]),ia=(0,L.useCallback)(()=>{ra(),un(e=>e+1),Ui()},[ra,Ui]),aa=(0,L.useCallback)(e=>{let t=Gs(e);hr(t),ge(`yafm.tray.position`,t)},[]),oa=(0,L.useCallback)(()=>{na.current=!1,sr?cr(!1):gr()},[gr,sr]),sa=(0,L.useCallback)(async(t,n,r)=>{let i=await Vt(t,n,r);i.cancelled||(i.ok?(r&&Ki(t),un(e=>e+1),Ui(),Qi()):xe(i.error??e(`the_files_could_not_be_transferred`)))},[Ui,Qi,Ki]);(0,L.useEffect)(()=>{if(x.available)return Gn().then(e=>{$n.current=e,Un(e)},()=>void 0),x.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=$n.current.find(t=>t.id===e.id);return!t||t.state!==e.state});$n.current=n,Un(n),r&&qn(!0)})},[]);let ca=(0,L.useCallback)(()=>{Kn().then(()=>Gn().then(e=>{$n.current=e,Un(e)},()=>void 0))},[]);(0,L.useEffect)(()=>{if(!x.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await zt();if(!e||t.sequence===Xi.current)return;Xi.current=t.sequence,Zi(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Zi]);let la=(0,L.useCallback)(async e=>{let t=e?await Ut():await wt();t.ok?(un(e=>e+1),Ui()):t.error&&!t.error.startsWith(`Nothing to`)&&xe(t.error)},[Ui]),ua=(0,L.useRef)(W);(0,L.useEffect)(()=>{ua.current!==W&&(ua.current=W,Ui())},[W,Ui]);let da=(0,L.useCallback)((e,t)=>{let{tabs:n}=K.current,r=n.find(t=>t.id===e);if(!r||Z(r)!==`files`)return;let i=Q(r),a=Kr.current?.defaultView??oe,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||Fe.iconSize,gridSize:r.view?.gridSize||a.gridSize||Fe.gridSize,sort:r.view?.sort??Fe.sort,sortDescending:r.view?.sortDescending??Fe.sortDescending,...t};q(e,()=>({view:o})),Hi.current!==null&&window.clearTimeout(Hi.current),Hi.current=window.setTimeout(()=>{Hi.current=null,He(i,o)},250)},[q]),fa=(0,L.useCallback)(e=>{da(Ws(K.current),e)},[da]),pa=(0,L.useCallback)(e=>{let t=Kr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??oe,columns:e}};Bt(n),Ze(n)},[]),ma=(0,L.useCallback)(e=>{let t=Kr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??oe,showImages:e}};Bt(n),Ze(n)},[]),ha=(0,L.useCallback)(e=>{let t=Kr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??oe,imageStripHeight:e}};Bt(n),Ze(n)},[]),ga=(0,L.useCallback)((e,t,n,r)=>{let i=K.current.tabs.find(t=>t.id===e);if(!i||Z(i)!==`files`||!i.listing)return;let a=Q(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));q(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Re(a,t,n,r)},[q]),_a=(0,L.useCallback)((e,t)=>{let n=K.current.tabs.find(t=>t.id===e);if(!n)return;let r=Ks(n,Kr.current?.defaultView??oe);da(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending}),J(e,Q(n),!0)},[da,J]),va=(0,L.useCallback)((e,t)=>{i(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),ya=(0,L.useCallback)(()=>{de().then(te,()=>te([]))},[]),ba=(0,L.useCallback)(e=>{let t=(e.openTabs??[]).map(Vr).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...qs(e),fresh:!1})),r=Math.min(Math.max(e.activeTab??0,0),n.length-1);i(n),f(n[r].id);let a=n[r];return(Z(a)===`files`?J(a.id,Q(a),!0):Promise.resolve()).then(()=>{for(let e of n)e!==a&&Z(e)===`files`&&J(e.id,Q(e),!0)}),!0},[J]),xa=(0,L.useCallback)(e=>{let t=Jr.current;if(Jr.current=[],t.length===0)return;let n=t.filter(e=>!zs.has(e));for(let e of t)n.includes(e)||Bs(e);if(n.length===0)return;let{tabs:r}=K.current;if(!e&&r.length===1&&r[0].fresh){di(r[0].id,n[0]),Bs(n[0]);for(let e of n.slice(1))Y(e),Bs(e);return}let i=n.map(e=>{let t=Y(e);return Bs(e),t}).at(-1);i&&setTimeout(()=>f(i),0)},[Y,di]),Sa=(0,L.useCallback)(()=>{Qe().then(e=>{Bt(e),Ft(e.recentLimit);let t=Rt(e.shortcuts);tn(t),Mt(gt(t,`openInNewTab`)),rn(e=>e+1),qr.current||(qr.current=!0,xa(e.restoreTabs&&ba(e)))},()=>{Ft(10),qr.current=!0,xa(!1)})},[xa,ba]),Ca=(0,L.useCallback)(()=>{pe().then(Ot,()=>Ot([]))},[]),X=(0,L.useCallback)(()=>{se().then(S,()=>S([]))},[]),wa=n.filter(e=>!e.hidden),Ta=wa.map(Us),Ea=Ta.join(`
`),Da=Math.max(wa.findIndex(e=>e.id===d),0);(0,L.useEffect)(()=>{if(!N?.restoreTabs)return;let e=setTimeout(()=>void Ye(Ta,Da),700);return()=>clearTimeout(e)},[Ea,Da,N?.restoreTabs]),(0,L.useEffect)(()=>{let{tabs:e,activeId:t}=K.current,n=e.find(e=>e.id===t);n&&n.fresh&&Z(n)===`files`&&J(n.id,Q(n),!0),ya(),Sa(),X(),Tn().then(ae,()=>ae(null))},[J,ya,Sa,X]),(0,L.useEffect)(()=>{if(On().then(De,()=>De(null)),x.available)return x.on(e=>{let t=e;t.type===`update.checked`&&t.data&&De(t.data)})},[]),(0,L.useEffect)(()=>{if(x.available)return x.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&ee({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&xe(e(`pairing_code_code`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&xe(n.data.error??e(`pairing_failed`))}})},[e]),(0,L.useEffect)(()=>{let e=setInterval(X,3e4);return()=>clearInterval(e)},[X]),(0,L.useEffect)(()=>{B===`home`&&(Ca(),X())},[B,z.id,Ca,X]),(0,L.useEffect)(()=>{if(!x.available)return;let e=x.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=K.current,i=t.data.startup===!0;i&&zs.has(n)?Bs(n):i&&!qr.current?Jr.current.includes(n)||Jr.current.push(n):(i&&r.length===1&&r[0].fresh?di(r[0].id,n):Br(n)?di(Ws(K.current),n):Y(n),i&&Bs(n))});return x.send({type:`app.ready`}),e},[di,Y]),(0,L.useEffect)(()=>{if(x.available)return x.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:r}=t.data;i(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let i=e.slice(),a=e[t];return i[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...r}}},i})})},[]),(0,L.useEffect)(()=>{if(x.available)return x.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:r}=t.data;i(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let i=e.slice(),a=e[t];return i[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...r}}},i})})},[]),(0,L.useEffect)(()=>{let e=e=>{if(ut(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),zi();return}if(e.key===`BrowserForward`){e.preventDefault(),Bi();return}if(e.key===`Escape`&&D.open){e.preventDefault(),Fr();return}let t=ht(e);if(A(P,`closeTab`,t)&&(e.preventDefault(),_i(Ws(K.current))),A(P,`newTab`,t)&&(e.preventDefault(),Y()),A(P,`reopenTab`,t)&&(e.preventDefault(),vi()),A(P,`goBack`,t)&&(e.preventDefault(),zi()),A(P,`goForward`,t)&&(e.preventDefault(),Bi()),A(P,`goUp`,t)&&(e.preventDefault(),Vi()),A(P,`find`,t)&&(e.preventDefault(),B===`files`?Ir():Lr()),A(P,`location`,t)&&(e.preventDefault(),cn(e=>e+1)),A(P,`home`,t)){e.preventDefault();let t=b.find(e=>e.kind===`home`)?.path;t&&yi(t)}A(P,`iconsView`,t)&&(e.preventDefault(),B===`files`&&fa({mode:`grid`})),A(P,`detailsView`,t)&&(e.preventDefault(),B===`files`&&fa({mode:`list`})),A(P,`nextTab`,t)&&(e.preventDefault(),bi(1)),A(P,`previousTab`,t)&&(e.preventDefault(),bi(-1)),A(P,`hidden`,t)&&(e.preventDefault(),we().then(()=>{un(e=>e+1),Ui()})),A(P,`undo`,t)&&(e.preventDefault(),la(!0)),A(P,`redo`,t)&&(e.preventDefault(),la(!1)),A(P,`splitView`,t)?(e.preventDefault(),xi()):Object.keys(P).some(e=>e!==`openInNewTab`&&A(P,e,t))||B!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Wr(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[P,B,D.open,_i,vi,Y,zi,Bi,Vi,Ir,Lr,Fr,Wr,fa,bi,yi,b,Ui,la,xi]),(0,L.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),zi()):(e.button===4||e.button===9)&&(e.preventDefault(),Bi())},t=e=>{(e.button===3||e.button===4||e.button===8||e.button===9)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[zi,Bi]),(0,L.useEffect)(()=>{if(x.available)return x.on(e=>{let t=e;if(t.type===`app.navigation`)switch(t.data?.direction){case`back`:zi();break;case`forward`:Bi()}})},[zi,Bi]);let Oa=(0,L.useMemo)(()=>{let e=new Set;for(let t of n){if(Z(t)!==`files`)continue;let n=Q(t);if(n&&!bt(n)){if(v(n)){let t=Ys(g(n));t&&e.add(t)}else e.add(n)}}return[...e]},[n]),ka=Oa.join(`\0`);(0,L.useEffect)(()=>{x.available&&x.send({type:`fs.watch`,payload:{paths:Oa,owner:`app`}})},[ka,d]);let Aa=Z(U)===`files`?Q(U):``;(0,L.useEffect)(()=>{x.available&&x.send({type:`fs.focus`,payload:{path:Aa||null}})},[Aa]),(0,L.useEffect)(()=>{if(x.available)return x.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,i=K.current.tabs.filter(e=>Z(e)===`files`&&r(Q(e),n)),a=K.current.tabs.filter(e=>{let t=Q(e);return Z(e)===`files`&&t.length>0&&v(t)&&r(g(t),n)});if(i.length!==0||a.length!==0){Oe(n);for(let e of a){let t=K.current.tabs.find(t=>t.id===e.id),i=t?Q(t):``;t&&Z(t)===`files`&&!t.loading&&v(i)&&r(g(i),n)&&J(e.id,i,!0)}i.length!==0&&he(n,!1,W).then(e=>{for(let t of i){let n=K.current.tabs.find(e=>e.id===t.id);n&&Z(n)===`files`&&r(Q(n),e.path)&&(n.loading?window.setTimeout(()=>{let n=K.current.tabs.find(e=>e.id===t.id);n&&!n.loading&&Z(n)===`files`&&r(Q(n),e.path)&&q(t.id,()=>({listing:e}))},300):q(t.id,()=>({listing:e})))}},()=>void 0)}})},[W,J,q]);let ja=z.index>0,Ma=z.index<z.history.length-1,Na=(e,t)=>{let n=Ks(e,wr),i=e.listing?.path??e.history[e.index]??``,o=v(i),s=o&&a(i);return(0,R.jsx)(Lt,{platform:C?.platform,confirmDelete:N?.confirmDelete??!1,cutPaths:or,previewVideoAudio:N?.previewVideoAudio??!1,previewVideoAutoplay:N?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?xn:Cn,onActivate:()=>Dn(t?`primary`:`secondary`),enableShortcuts:(!br||(t?F===`primary`:F===`secondary`))&&(!o||s),error:e.error,find:e.id===U.id?{...D,currentPath:Pr<0?null:G[Pr]}:void 0,selectMatchesToken:e.id===U.id?We:0,imageStripHeight:kr,listing:e.listing,loading:e.loading,onImageStripHeight:ha,readOnly:o&&!s||bt(e.listing?.path??``),onOpen:(t,n)=>{n?Y(t):J(e.id,t)},onOpenFile:(t,n)=>{bt(t)?At(t).catch(e=>void xe(Js(e))):c(t)?N?.archiveHandler??!1?n?Y(t):J(e.id,t):E(t):v(t)?(async()=>{let e=await fe(t,Et.current,Zs(t));if(!e.path&&Se(e.error)){let n=g(t),r=Me(n);r&&Pe(n);let i=await Le(n,!!r);i&&(Ge(n,i),e=await fe(t,Et.current,i))}e.path?E(e.path):e.error&&xe(e.error)})():E(t)},onRefresh:()=>{let t=e.listing?.path;t&&pi(t)},onLoadMore:()=>void ei(e.id),onEnsureComplete:()=>void oi(e.id),selectAllToken:e.id===U.id?ii:0,onRename:mi,onSelectionCountChange:t?Fi:Ii,onSetTags:(t,n,r)=>ga(e.id,t,n,r),selectionMenuRequest:t?Rn.primary:Rn.secondary,onSort:t=>_a(e.id,t),onPaste:ia,onClipboardChanged:()=>void Qi(),onTransfer:sa,onAddToTray:e=>void Gi(e),onAddFavorite:e=>void qi(e),onRemoveFavorite:e=>void Ji(e),favoritePaths:Jt,onExtractArchive:(e,t)=>void za(e,t),openOnSingleClick:N?.openOnSingleClick??!1,pendingRename:Bn&&t===(F===`primary`)&&r(Bn.directory,e.listing?.path??``)?Bn.path:null,pendingRenameToken:Bn?.token??0,refreshToken:ln,shortcuts:P,showCheckboxes:N?.showCheckboxes??!0,showImages:Or,view:n})},Pa=D.open&&(0,R.jsx)(Ar,{current:Pr,focusToken:Be,matchCase:D.matchCase,mode:D.mode,onClose:Fr,onMatchCase:()=>Ne(e=>({...e,matchCase:!e.matchCase})),onMode:()=>Ne(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Gr(1),onPrevious:()=>Gr(-1),onQuery:e=>Ne(t=>({...t,query:e})),onRegex:()=>Ne(e=>({...e,regex:!e.regex})),query:D.query,regex:D.regex,total:G.length,onSelectMatches:G.length>0?()=>qe(e=>e+1):void 0}),Fa=B===`files`&&v(V),Ia=Fa&&a(V),La=Fa&&z.listing?.archiveEncrypted===!0,Ra=async(t,n)=>{let r=g(t),i=await ue(r,n,Et.current,Zs(r));if(!i.ok&&Se(i.error)){let e=Me(r);e&&Pe(r);let t=await Le(r,!!e);t&&(Ge(r,t),i=await ue(r,n,Et.current,t))}i.ok?(pi(n),Ve(),J(z.id,n,!0)):xe(`${e(`could_not_extract_the_archive`)}${i.error?`\n${i.error}`:``}`)},za=async(e,t)=>{let n=g(e),i=Ys(n);if(!i)return;if(t===`choose`){let e=await ft(i);e&&await Ra(n,e);return}let a=t===`named`;if(t===`auto`){let e=r(n,V)?z.listing?.entries??[]:(await he(n,!1,!1,Et.current,Zs(n))).entries;a=!(e.length===1&&e[0].isDirectory)}let o=i.includes(`\\`)?`\\`:`/`,s=a?`${i.replace(/[\\/]+$/,``)}${o}${Xs(n)}`:i;await Ra(n,s)},Ba=async e=>{Fa&&await za(V,e)},Va=async()=>{Fa&&await za(V,`choose`)},Ha=(0,R.jsxs)(ic,{children:[(0,R.jsx)($,{"data-shortcut":j(P.goBack),disabled:!ja,onClick:e=>{z.index>0&&M(e)?Y(z.history[z.index-1]):zi()},title:e(`back`),type:`button`,children:(0,R.jsx)(yn,{})}),(0,R.jsx)($,{"data-shortcut":j(P.goForward),disabled:!Ma,onClick:e=>{z.index<z.history.length-1&&M(e)?Y(z.history[z.index+1]):Bi()},title:e(`forward`),type:`button`,children:(0,R.jsx)(dn,{})}),(0,R.jsx)($,{"data-shortcut":j(P.goUp),disabled:B!==`files`||!yr,onClick:e=>{yr&&(M(e)?Y(yr):yi(yr))},title:e(`up_one_level`),type:`button`,children:(0,R.jsx)(on,{})}),(0,R.jsx)(Hr,{focusToken:sn,icon:jr,label:B===`files`?void 0:e(ds[B]),onContextMenu:B===`files`?(e,t,n)=>Nn({x:t,y:n,path:e}):void 0,onNavigate:yi,path:B===`files`?V:vr}),B===`files`&&(!Fa||Ia)&&(0,R.jsx)($,{onClick:e=>Ni(e,V,()=>void J(z.id,V,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,R.jsx)(fn,{})}),(0,R.jsx)($,{"data-shortcut":j(P.find),onClick:()=>B===`files`?Ir():Lr(),title:e(`search`),type:`button`,children:(0,R.jsx)(bn,{})}),In.primary>0&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(Ds,{}),(0,R.jsx)($,{onClick:e=>Li(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,R.jsx)(Xt,{})})]}),(0,R.jsx)(`span`,{ref:Xn,style:{display:`contents`}}),Fa&&(0,R.jsxs)(ac,{children:[(0,R.jsx)(Ds,{}),La&&(0,R.jsxs)(oc,{title:e(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,R.jsx)(qt,{size:12}),e(`encrypted`)]}),(0,R.jsx)($,{onClick:()=>void Va(),onContextMenu:e=>{e.preventDefault(),Mn({x:e.clientX,y:e.clientY})},title:e(`extract_archive`),type:`button`,children:(0,R.jsx)(gn,{})}),(0,R.jsx)(et,{icon:(0,R.jsx)(Kt,{size:15}),onChange:e=>{let t=Number(e);Ct(t),Et.current=t,Fa&&J(z.id,V,!0)},options:Hs.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`archive_encoding`)}: ${e(Hs.find(e=>e.value===String(vt))?.label??`auto`)}`,value:String(vt)})]})]}),Ua=O.open?{...O,index:rt}:null;return(0,R.jsx)(mt,{value:Dr,children:(0,R.jsxs)(ec,{$rounded:je,children:[(0,R.jsx)(Yn,{settings:N,theme:Gt}),(0,R.jsx)(Bo,{activeId:z.id,onClose:_i,onNewTab:()=>Y(),onReorder:va,onTransferToTab:sa,onSelect:f,onViewChange:fa,onColumns:pa,onShowImages:ma,showImages:Or,tasks:Hn,onClearTasks:ca,activityOpen:Wn,onActivityOpenChange:qn,trayCount:lr.length+nr.length,trayVisible:sr,onToggleTray:oa,split:br,canSplit:B===`files`,onToggleSplit:xi,details:pn,canDetails:B===`files`||B===`recycle`||B===`gallery`,onToggleDetails:()=>mn(e=>!e),currentFolder:B===`files`&&!bt(V)?V:``,shortcuts:P,view:Tr,tabs:n.filter(e=>!e.hidden).map(t=>{let r=Z(t),i=Q(t),a=t.splitWith?n.find(e=>e.id===t.splitWith):void 0,o=a?Q(a):``;return{id:t.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?st(Dr,i):void 0,archive:r===`files`&&v(i),split:!!a,title:r===`files`?at(Dr,i,u(i)||e(`files`)):e(ds[r]),partner:a?{title:at(Dr,o,u(o)||e(`files`)),place:st(Dr,o)}:void 0}})}),(0,R.jsxs)(tc,{children:[(0,R.jsx)(ti,{activeKind:B,currentPath:B===`files`?vr:``,drives:ne,historyVersion:Zt,onNavigate:yi,onOpenView:gi,homePath:b.find(e=>e.kind===`home`)?.path??``,places:b,recent:Dt,recentLimit:jt,version:nn}),(0,R.jsxs)(nc,{children:[(0,R.jsxs)(fc,{children:[(0,R.jsxs)(pc,{children:[B!==`files`&&Ha,(0,R.jsx)(rc,{children:(0,R.jsxs)(L.Suspense,{fallback:null,children:[B!==`files`&&O.open&&(0,R.jsx)(Ar,{current:rt,focusToken:$e,matchCase:O.matchCase,mode:O.mode,onClose:Rr,onMatchCase:()=>Xe(e=>({...e,matchCase:!e.matchCase})),onMode:()=>Xe(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Ur(1),onPrevious:()=>Ur(-1),onQuery:e=>Xe(t=>({...t,query:e})),onRegex:()=>Xe(e=>({...e,regex:!e.regex})),placeholder:e(`search`),query:O.query,regex:O.regex,total:k,onSelectMatches:B===`gallery`||B===`recycle`?()=>qe(e=>e+1):void 0}),B===`files`?br&&H?(0,R.jsxs)(cc,{ref:ji,children:[(0,R.jsxs)(lc,{style:{flex:_},children:[(0,R.jsxs)(sc,{$active:F===`primary`,onPointerDown:()=>Dn(`primary`),children:[(0,R.jsx)($,{"data-shortcut":j(P.goBack),disabled:!ja,onClick:e=>{let t=z.index-1;t<0||(M(e)?Y(z.history[t]):fi(z.id,z.history[t],t))},title:e(`back`),type:`button`,children:(0,R.jsx)(yn,{})}),(0,R.jsx)($,{"data-shortcut":j(P.goForward),disabled:!Ma,onClick:e=>{let t=z.index+1;t>=z.history.length||(M(e)?Y(z.history[t]):fi(z.id,z.history[t],t))},title:e(`forward`),type:`button`,children:(0,R.jsx)(dn,{})}),(0,R.jsx)($,{"data-shortcut":j(P.goUp),disabled:!yr,onClick:e=>{yr&&(M(e)?Y(yr):J(z.id,yr))},title:e(`up_one_level`),type:`button`,children:(0,R.jsx)(on,{})}),(0,R.jsx)(Hr,{focusToken:F===`primary`?sn:void 0,onContextMenu:(e,t,n)=>Nn({x:t,y:n,path:e}),onNavigate:(e,t)=>t?Y(e):void J(z.id,e),path:V}),(0,R.jsx)($,{onClick:e=>Ni(e,V,()=>void J(z.id,V,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,R.jsx)(fn,{})}),(0,R.jsx)($,{"data-shortcut":j(P.find),onClick:Ir,title:e(`search`),type:`button`,children:(0,R.jsx)(bn,{})}),In.primary>0&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(Ds,{}),(0,R.jsx)($,{onClick:e=>Li(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,R.jsx)(Xt,{})})]})]}),Na(z,!0),F===`primary`&&Pa]}),(0,R.jsx)(uc,{onDoubleClick:()=>y(.5),onPointerDown:Mi,title:e(`drag_to_resize_double_click_to_reset`)}),(0,R.jsxs)(lc,{$enter:!0,style:{flex:1-_},children:[(0,R.jsxs)(sc,{$active:F===`secondary`,onPointerDown:()=>Dn(`secondary`),children:[(0,R.jsx)($,{"data-shortcut":j(P.goBack),disabled:H.index<=0,onClick:e=>{let t=H.index-1;t<0||(M(e)?Y(H.history[t]):fi(H.id,H.history[t],t))},title:e(`back`),type:`button`,children:(0,R.jsx)(yn,{})}),(0,R.jsx)($,{"data-shortcut":j(P.goForward),disabled:H.index>=H.history.length-1,onClick:e=>{let t=H.index+1;t>=H.history.length||(M(e)?Y(H.history[t]):fi(H.id,H.history[t],t))},title:e(`forward`),type:`button`,children:(0,R.jsx)(dn,{})}),(0,R.jsx)($,{"data-shortcut":j(P.goUp),disabled:!Cr,onClick:e=>{Cr&&(M(e)?Y(Cr):J(H.id,Cr))},title:e(`up_one_level`),type:`button`,children:(0,R.jsx)(on,{})}),(0,R.jsx)(Hr,{focusToken:F===`secondary`?sn:void 0,onContextMenu:(e,t,n)=>Nn({x:t,y:n,path:e}),onNavigate:(e,t)=>t?Y(e):void J(H.id,e),path:xr}),(0,R.jsx)($,{onClick:e=>Ni(e,xr,()=>void J(H.id,xr,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,R.jsx)(fn,{})}),(0,R.jsx)($,{"data-shortcut":j(P.find),onClick:Ir,title:e(`search`),type:`button`,children:(0,R.jsx)(bn,{})}),In.secondary>0&&(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(Ds,{}),(0,R.jsx)($,{onClick:e=>Li(`secondary`,e),title:e(`selection_menu`),type:`button`,children:(0,R.jsx)(Xt,{})})]})]}),Na(H,!1),F===`secondary`&&Pa]})]}):(0,R.jsxs)(R.Fragment,{children:[Ha,(0,R.jsxs)(dc,{children:[Na(z,!0),Pa]})]}):B===`home`?(0,R.jsx)(Ps,{platform:C?.platform,drives:ne,find:Ua,historyVersion:Zt,onSearchMatches:_t,homePath:b.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:X,onHistoryChanged:()=>$t(e=>e+1),onAddToTray:e=>void Gi(e),onAddFavorite:e=>void qi(e),onRemoveFavorite:e=>void Ji(e),favoritePaths:Jt,onExtractArchive:(e,t)=>void za(e,t),settingsVersion:nn,theme:Gt,onOpen:yi,onLayoutChanged:Sa,onPlacesChanged:te,onRecentCleared:Ca,places:b,recent:Dt,recentLimit:jt,visibilityVersion:ln}):B===`settings`?(0,R.jsx)(Fs,{appInfo:C,find:Ua,focusSection:ke,onSearchMatches:_t,onSettingsChanged:Sa}):B===`gallery`?(0,R.jsx)(Is,{platform:C?.platform,toolbarSlot:Jn,onStatusChange:Qn,confirmDelete:N?.confirmDelete??!1,find:Ua,onSearchMatches:_t,openOnSingleClick:N?.openOnSingleClick??!1,onAddToTray:e=>void Gi(e),onAddFavorite:e=>void qi(e),onRemoveFavorite:e=>void Ji(e),favoritePaths:Jt,onExtractArchive:(e,t)=>void za(e,t),shortcuts:P,showCheckboxes:N?.showCheckboxes??!0,selectMatchesToken:We,onPreviewChange:wi,view:Tr}):(0,R.jsx)(Ls,{find:Ua,toolbarSlot:Jn,onStatusChange:Qn,onOpenLocation:yi,onShowDetails:()=>mn(!0),platform:C?.platform,selectMatchesToken:We,onPreviewChange:Ti})]})},B)]}),(B===`files`||B===`gallery`||B===`recycle`)&&(0,R.jsx)(dt,{emptyNote:e(`nothing_selected`),info:Oi,onWidth:Si,open:pn,selectionNote:ki,videoAudio:N?.previewVideoAudio??!1,videoAutoplay:N?.previewVideoAutoplay??!1,width:hn})]}),(0,R.jsxs)(vc,{children:[(0,R.jsx)(`span`,{children:Ai}),C?(0,R.jsxs)(mc,{children:[(0,R.jsxs)(`span`,{children:[`v`,C.version,` · `,C.platform]}),C.debug&&(0,R.jsx)(_c,{children:`debug`}),ve?.available&&(0,R.jsxs)(hc,{onClick:e=>{Ae(`updates`),gi(`settings`,M(e))},title:e(`version_version_is_available`,{version:ve.latest}),type:`button`,children:[(0,R.jsx)(gc,{}),e(`update_available`)]})]}):(0,R.jsx)(`span`,{children:e(`browser_preview`)})]})]})]}),(0,R.jsx)(nt,{clipboardItems:nr,clipboardMove:ir,currentDirectory:B===`files`?vr:``,items:lr,onAdd:e=>void Gi(e),onClear:Yi,onClose:()=>cr(!1),onCopyToClipboard:e=>void $i(e),onPosition:aa,onRemove:Ki,onTransfer:sa,position:mr,visible:sr}),kn&&(0,R.jsx)(pt,{creationOnly:!0,directory:kn.directory,menu:{x:kn.x,y:kn.y,paths:[],background:!0},onClose:()=>An(null),onCreateFile:e=>void Ri(e),onCreateFolder:e=>void Ri(null,e),shortcuts:P}),I&&(0,R.jsx)(pt,{allowCompression:!0,directory:Ys(I.path)??I.path,menu:{x:I.x,y:I.y,paths:[I.path]},onAddToTray:e=>void Gi(e),onAddFavorite:e=>void qi(e),onRemoveFavorite:e=>void Ji(e),favoritePaths:Jt,onExtractArchive:(e,t)=>void za(e,t),onArchiveCreated:e=>{e&&pi(Ys(I.path)??I.path)},onClose:()=>Nn(null),onCompressTo:(e,t)=>Fn({paths:e,name:t}),onCopy:(e,t)=>void yt(e,t),onDelete:e=>void kt(e,!1).then(()=>pi(Ys(I.path)??I.path)),onOpen:(e,t)=>t?Y(e):void J(z.id,e),onOpenFile:e=>void E(e),onPaste:e=>void Tt(e).then(t=>{t.ok&&pi(e)}),onRefresh:()=>pi(I.path),shortcuts:P,target:{path:I.path,isDirectory:!0}}),Pn&&(0,R.jsx)(Wt,{initialDirectory:Ys(I?.path??V)??V,initialName:Pn.name,onCancel:()=>Fn(null),onCompress:async e=>{let t=await It(Pn.paths,e);return!t.ok&&t.error&&xe(t.error),t.ok}}),jn&&(0,R.jsx)(Ce,{items:[{label:e(`extract_here`),onSelect:()=>void Ba(`here`)},{label:e(`extract_to_a_folder_named_after_the_archive`),onSelect:()=>void Ba(`named`)},{label:e(`auto_extract_to_the_current_folder`),onSelect:()=>void Ba(`auto`)}],onClose:()=>Mn(null),x:jn.x,y:jn.y}),dr&&(0,R.jsx)(tr,{action:dr.prompt.action,delaySeconds:dr.prompt.delaySeconds,hits:dr.prompt.hits,onCancel:()=>{dr.resolve(!1),fr(null)},onConfirm:()=>{dr.resolve(!0),fr(null)},permanent:dr.prompt.permanent},dr.id),(0,R.jsx)(_r,{}),(0,R.jsx)(Sr,{}),m&&(0,R.jsx)(gs,{code:m.code,deviceName:m.deviceName,onAccept:()=>{Ht(m.requestId,!0),ee(null)},onReject:()=>{Ht(m.requestId,!1),ee(null)}}),(0,R.jsx)(os,{}),(0,R.jsx)(re,{})]})})}var ec=S.div`
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
`,tc=S.div`
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
`,nc=S.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,rc=S.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${De}
`,ic=S.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,$=Es,ac=S.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,oc=S.span`
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
`,sc=S.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,cc=S.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,lc=S.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?ze:``}
`,uc=S.div`
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
`,dc=S.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,fc=S.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,pc=S.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,mc=S.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,hc=S.button`
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
`,gc=S.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,_c=S.span`
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
`,vc=S.footer`
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
`;document.documentElement.dataset.theme=C()?`dark`:`light`;var yc=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,yc),window.addEventListener(`pagehide`,We);var bc=document.getElementById(`root`),xc=new URLSearchParams(window.location.search),Sc=xc.get(`picker`),Cc=xc.get(`filter`)??``,wc=Sc===`folder`||Sc===`file`||Sc===`save`?(0,L.lazy)(()=>Ns(()=>import(`./PickerWindow-Ct8hKEb8.js`).then(e=>({default:e.PickerWindow})),__vite__mapDeps([14,1,2,7,4,5,3,6,9,12,0,8,10]))):null;bc&&(qe(),(0,Fn.createRoot)(bc).render((0,R.jsx)(L.StrictMode,{children:(0,R.jsx)(te,{children:wc===null?(0,R.jsx)($s,{}):(0,R.jsx)(L.Suspense,{fallback:null,children:(0,R.jsx)(wc,{defaultExtension:xc.get(`ext`)??``,extensions:Cc?Cc.split(`;`).filter(Boolean):[],types:xc.get(`types`)??``,typeIndex:Number(xc.get(`type`)??0)||0,initial:xc.get(`initial`)??``,initialName:xc.get(`name`)??``,mode:Sc===`folder`?`folder`:`file`,multiple:xc.get(`multiple`)===`1`,save:Sc===`save`})})})})));export{An as A,On as C,F as D,I as E,Dn as O,kn as S,Nn as T,Un as _,hs as a,Rn as b,ti as c,_r as d,tr as f,Bn as g,Ln as h,fs as i,En as k,Hr as l,zn as m,Es as n,Co as o,Jn as p,Ds as r,xo as s,Ns as t,Ar as u,Vn as v,Mn as w,jn as x,Wn as y};