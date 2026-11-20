const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OverviewView-CiX43j0i.js","assets/rolldown-runtime-XKyaHtl9.js","assets/dist-sR-t6Emc.js","assets/selectionMenu-BAXkPrI1.js","assets/theme-bw14b3xc.js","assets/theme-Cd7QcbnN.css","assets/Icons-NY0trHLk.js","assets/concepts-dHnjk6-J.js","assets/textSearch-C8KGjMMY.js","assets/FileList-B1LK90IW.js","assets/IconPicker-Cztkj0R-.js","assets/SettingsView-CeZO_DDQ.js","assets/GalleryView-DA2CONu_.js","assets/RecycleView-CbllQ0NN.js","assets/PickerWindow-B7CFq5_A.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{C as t,D as n,E as r,T as i,_ as a,a as o,b as s,c,f as l,l as u,m as d,p as f,r as p,u as ee,v as m,w as h,x as g,y as _}from"./theme-bw14b3xc.js";import{_ as v,a as y,c as te,d as ne,f as b,g as x,i as re,n as S,o as ie,r as C,s as ae,u as w}from"./dist-sR-t6Emc.js";import{B as oe,C as se,E as ce,F as le,G as ue,L as de,O as fe,P as pe,R as me,S as he,U as ge,W as _e,X as ve,Z as ye,_ as be,_t as xe,a as Se,b as Ce,c as we,d as Te,dt as Ee,et as De,f as Oe,g as T,gt as ke,h as Ae,ht as je,it as Me,k as Ne,l as Pe,m as Fe,mt as Ie,o as Le,ot as Re,p as ze,q as Be,st as Ve,tt as He,u as Ue,v as We,w as Ge,x as Ke,y as qe,yt as Je,z as Ye}from"./selectionMenu-BAXkPrI1.js";import{a as E,f as Xe,i as Ze,p as Qe,u as $e}from"./concepts-dHnjk6-J.js";import{A as et,B as tt,C as nt,D as rt,E as it,F as at,G as ot,J as st,K as ct,L as lt,N as D,O as ut,Q as dt,R as ft,U as pt,V as mt,W as ht,X as gt,Y as O,Z as _t,_t as vt,c as yt,ct as bt,d as xt,dt as St,et as k,ft as Ct,g as wt,gt as Tt,ht as Et,i as Dt,k as Ot,l as kt,lt as At,m as jt,mt as Mt,nt as Nt,ot as A,p as Pt,pt as Ft,q as It,r as j,st as Lt,t as Rt,tt as zt,ut as Bt,v as Vt,vt as Ht,x as Ut,yt as Wt,z as Gt}from"./FileList-B1LK90IW.js";import{D as Kt,F as qt,G as Jt,I as Yt,J as Xt,K as Zt,O as Qt,P as $t,T as en,V as tn,W as M,Y as nn,Z as rn,_ as an,_t as on,a as sn,ct as cn,d as ln,et as un,f as dn,i as fn,it as pn,j as mn,k as hn,lt as gn,n as _n,p as vn,pt as yn,r as bn,st as xn,t as Sn,ut as Cn,v as wn,z as Tn}from"./Icons-NY0trHLk.js";async function En(){return b.available?await b.request(`app.info`):{version:`dev`,platform:`web`,logDirectory:``,rounded:!1,debug:!1}}async function Dn(e){b.available?await b.request(`system.openUrl`,{url:e}):window.open(e,`_blank`,`noreferrer`)}async function N(){b.available&&await Fn(`update.openLogs`)}async function On(e){b.available?await Fn(`update.openRelease`):e&&window.open(e,`_blank`,`noreferrer`)}async function kn(){return b.available?await b.request(`update.status`)??null:null}async function An(){return b.available?await b.request(`update.check`):{current:`dev`,latest:`dev`,available:!1}}async function jn(){return b.available?await b.request(`update.download`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}async function Mn(){await Fn(`update.cancel`)}async function Nn(){return b.available?await b.request(`update.install`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}function P(e){return b.on(t=>{t.type===`update.progress`&&e(t.data)})}function Pn(e){return b.on(t=>{t.type===`update.changelog`&&e(t.data)})}async function Fn(e,t,n=3e4){let r=await b.request(e,t,n);if(!r.ok)throw Error(r.error??`The action failed.`)}var F=e(v(),1),In=r(),Ln={managed:0,private:0,workingSet:0,available:0};async function Rn(){return b.available?await b.request(`app.memory`):Ln}async function zn(){return b.available?await b.request(`app.memory.trim`):Ln}var Bn={registered:!1,pathMatches:!1,registeredPath:null};async function Vn(){return b.available?await b.request(`app.scheme`):Bn}async function Hn(e){return b.available?await b.request(`app.scheme.set`,{enabled:e}):Bn}var Un={supported:!1,mode:`none`,active:!1,error:null};async function Wn(){return b.available?await b.request(`app.startup`):Un}async function Gn(e){return b.available?await b.request(`app.startup.set`,{mode:e}):Un}async function Kn(){return b.available?(await b.request(`app.tasks`)).tasks:[]}async function qn(){b.available&&await b.request(`app.tasks.clear`)}var I=ne(),Jn=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function Yn(e){return Jn.test(e)}function Xn({settings:e,theme:t}){let n=e?.backgroundSource??null,r=n?.startsWith(`url:`)?n.slice(4):_(n)?n:null,i=n?.startsWith(`file:`)?n.slice(5):null,a=Ee(i),o=n?.startsWith(`builtin:`)?Ze(n,t):r??a,s=r===null?i===null?n!==null&&E(n):Yn(i):Yn(r.split(/[?#]/)[0]);if(!n||!o)return null;let c=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,I.jsxs)(Zn,{"aria-hidden":!0,children:[s?(0,I.jsx)($n,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o,style:{filter:c}}):(0,I.jsx)(Qn,{src:o,style:{filter:c}}),(0,I.jsx)(er,{})]})}var Zn=x.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,Qn=x.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,$n=x.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,er=x.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);

    /* The light artwork is drawn pale already, so it only keeps a faint accent glow. */
    html[data-theme="light"] & {
        background: radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.06), transparent 60%);
    }
`,tr=n();function nr({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let o=w(),s=(0,F.useRef)(null),[c,l]=(0,F.useState)(()=>Math.max(1,Math.ceil(n))),u=e??`delete`;return(0,F.useEffect)(()=>{s.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));l(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,tr.createPortal)((0,I.jsx)(or,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,I.jsxs)(sr,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsx)(cr,{children:o(`protected_folder`)}),(0,I.jsx)(lr,{children:o(`these_paths_are_protected_by_the_safety_settings`)}),(0,I.jsx)(ur,{children:t.map(e=>(0,I.jsxs)(dr,{children:[(0,I.jsx)(fr,{children:e.path}),(0,I.jsx)(pr,{children:o(`protected_by_pattern`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,I.jsx)(mr,{children:rr(o,u,r??!1)}),(0,I.jsx)(hr,{children:ir(o,u)}),(0,I.jsx)(gr,{children:o(`this_waits_seconds_s_before_the_button_works`,{seconds:n})}),(0,I.jsxs)(_r,{children:[(0,I.jsx)(L,{onClick:i,ref:s,type:`button`,children:o(`cancel`)}),(0,I.jsx)(R,{disabled:c>0,onClick:a,type:`button`,children:c>0?ar(o,u,c):ar(o,u,0)})]})]})}),document.body)}function rr(e,t,n){switch(t){case`delete`:return e(n?`deletes_permanently`:`moves_to_the_recycle_bin`);case`move`:return e(`moves_the_entries`);case`rename`:return e(`renames_the_entry`);case`write`:return e(`writes_into_this_folder`)}}function ir(e,t){switch(t){case`delete`:return e(`nothing_has_been_deleted`);case`move`:return e(`nothing_has_been_moved`);case`rename`:return e(`nothing_has_been_renamed`);case`write`:return e(`nothing_has_been_written`)}}function ar(e,t,n){let r=n>0?t===`delete`?`delete_anyway_seconds_s`:t===`move`?`move_anyway_seconds_s`:t===`rename`?`rename_anyway_seconds_s`:`write_anyway_seconds_s`:t===`delete`?`delete_anyway`:t===`move`?`move_anyway`:t===`rename`?`rename_anyway`:`write_anyway`;return n>0?e(r,{seconds:n}):e(r)}var or=x.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Le}
`,sr=x.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Ue}
`,cr=x.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,lr=x.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,ur=x.div`
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
`,dr=x.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,fr=x.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,pr=x.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,mr=x.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,hr=x.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,gr=x.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,_r=x.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,L=x.button`
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
`,R=x.button`
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
`;function vr(){let e=w(),[t,n]=(0,F.useState)(null),r=(0,F.useRef)(null),i=(0,F.useRef)(null);(0,F.useEffect)(()=>(Ae(e=>new Promise(t=>{r.current=t,n(e)})),()=>Ae(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,F.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,tr.createPortal)((0,I.jsx)(yr,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,I.jsxs)(z,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsx)(br,{children:e(`notice`)}),(0,I.jsx)(B,{children:t}),(0,I.jsx)(xr,{children:(0,I.jsx)(Sr,{onClick:a,ref:i,type:`button`,children:e(`ok`)})})]})}),document.body)}var yr=x.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Le}
`,z=x.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Ue}
`,br=x.h2`
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
`,xr=x.div`
    display: flex;
    justify-content: flex-end;
`,Sr=x.button`
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
`;function Cr(){let e=w(),[t,n]=(0,F.useState)(null),[r,i]=(0,F.useState)(``),a=(0,F.useRef)(null),o=(0,F.useRef)(null);(0,F.useEffect)(()=>(T((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>T(null)),[]),(0,F.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,tr.createPortal)((0,I.jsx)(wr,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,I.jsxs)(V,{role:`dialog`,"aria-modal":`true`,children:[(0,I.jsx)(Tr,{children:e(`archive_password`)}),(0,I.jsx)(Er,{children:t.wrong?e(`that_password_did_not_open_the_archive_try_again`):e(`this_archive_is_encrypted_enter_its_password`)}),(0,I.jsx)(H,{title:t.archive,children:t.archive}),(0,I.jsx)(Dr,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,I.jsxs)(Or,{children:[(0,I.jsx)(kr,{onClick:()=>s(null),type:`button`,children:e(`cancel`)}),(0,I.jsx)(Ar,{disabled:r.length===0,onClick:c,type:`button`,children:e(`ok`)})]})]})}),document.body)}var wr=x.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Le}
`,V=x.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Ue}
`,Tr=x.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Er=x.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,H=x.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Dr=x.input`
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
`,Or=x.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
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

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`,Ar=x(kr)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function jr({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:ee,onClose:m,onSelectMatches:h}){let g=w(),_=(0,F.useRef)(null),v=c??g(`search_this_folder`);(0,F.useEffect)(()=>{let e=_.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let y=e=>{e(),_.current?.focus()};return(0,I.jsxs)(Mr,{children:[(0,I.jsx)(xn,{}),(0,I.jsx)(Nr,{"aria-label":v,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),m())},placeholder:v,ref:_,spellCheck:!1,value:e}),!s&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Pr,{children:i===0?`0/0`:`${a+1}/${i}`}),h&&(0,I.jsx)(U,{disabled:i===0,onClick:h,title:g(`select_all_matches`),type:`button`,children:(0,I.jsx)(ln,{size:12})}),(0,I.jsx)(U,{$chevron:!0,onClick:()=>y(u),title:g(`previous_match_shift_enter`),type:`button`,children:(0,I.jsx)(dn,{size:12})}),(0,I.jsx)(U,{$chevron:!0,$down:!0,onClick:()=>y(d),title:g(`next_match_enter`),type:`button`,children:(0,I.jsx)(dn,{size:12})})]}),(0,I.jsx)(Fr,{$on:n,onClick:()=>y(f),title:g(`match_case`),type:`button`,children:`Aa`}),(0,I.jsx)(Fr,{$on:r,onClick:()=>y(p),title:g(`regular_expression`),type:`button`,children:`.*`}),!s&&(0,I.jsx)(W,{$on:t===`hide`,onClick:()=>y(ee),title:g(t===`hide`?`non_matching_entries_are_hidden`:`non_matching_entries_are_dimmed`),type:`button`,children:t===`hide`?(0,I.jsx)(hn,{size:12}):(0,I.jsx)(Qt,{size:12})}),(0,I.jsx)(U,{onClick:m,title:g(`close_search_esc`),type:`button`,children:(0,I.jsx)(wn,{size:12})})]})}var Mr=x.div`
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
    ${Te}
`,Nr=x.input`
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
`,Pr=x.span`
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
`,Fr=x.button`
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
`,W=x(Fr)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`,Ir=`yafm://`,Lr={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function Rr(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function zr(e){return`${Ir}${e===`home`?`overview`:e}`}function Br(e){return Rr(e)?Lr[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Vr(e){let t=e.trim();if(t.length===0)return null;if(!Rr(t))return t;let n=Lr[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?zr(n):null}function Hr({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=w(),s=It(),[c,l]=(0,F.useState)(!1),[u,d]=(0,F.useState)(``),[f,p]=(0,F.useState)([]),[ee,m]=(0,F.useState)(0),[h,g]=(0,F.useState)(null),[_,v]=(0,F.useState)(null),[y,te]=(0,F.useState)(null),ne=(0,F.useRef)(null),b=(0,F.useRef)(null),x=(0,F.useRef)(0);(0,F.useEffect)(()=>{if(!xt(e)){te(null);return}let t=wt(e);if(!t){te(null);return}let n=!0;return yt().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);te({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&te(null)),()=>{n=!1}},[e]),(0,F.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,F.useEffect)(()=>{r&&r!==x.current&&(x.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,F.useEffect)(()=>{c&&ne.current?.select()},[c]),(0,F.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[c]);let re=()=>{d(e.replace(/\\/g,`/`)),l(!0)},S=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,F.useEffect)(()=>{if(!c){p([]);return}let e=G(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{de(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),m(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let ie=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,F.useLayoutEffect)(()=>{if(!c){g(null);return}let e=()=>{let e=b.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);g({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,I.jsxs)(Xr,{onPointerDown:e=>e.stopPropagation(),ref:b,children:[(0,I.jsxs)($r,{children:[(0,I.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),m(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),m(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(ee,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?ie(f[Math.min(ee,f.length-1)],e.ctrlKey||e.metaKey):S(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:ne,spellCheck:!1,value:u}),(0,I.jsx)(ei,{onClick:()=>l(!1),title:o(`cancel`),type:`button`,children:(0,I.jsx)(wn,{size:12})}),(0,I.jsx)(ei,{$apply:!0,onClick:S,onPointerDown:e=>e.stopPropagation(),title:o(`open_this_path`),type:`button`,children:(0,I.jsx)(ln,{size:14})})]}),f.length>0&&h&&(0,tr.createPortal)((0,I.jsx)(Zr,{onPointerDown:e=>e.stopPropagation(),style:{left:h.left,top:h.top,width:h.width},children:f.map((e,t)=>(0,I.jsxs)(Qr,{$active:t===ee,onClick:t=>ie(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>m(t),type:`button`,children:[(0,I.jsx)(et,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,I.jsx)(q,{children:e.name})]},e.path))}),document.body)]});let C=t?[{label:t,path:e,icon:n}]:Ur(e,y)??Gr(e,s.places);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Kr,{onClick:re,title:o(`click_to_type_a_path`),children:C.map((t,n)=>(0,I.jsxs)(qr,{$last:n===C.length-1,children:[n>0&&(0,I.jsx)(K,{children:(0,I.jsx)(dn,{size:9})}),(0,I.jsxs)(Yr,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):v({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,I.jsx)(Jr,{children:(0,I.jsx)(D,{place:t.place,size:13})}):t.icon&&(0,I.jsx)(Jr,{children:t.icon}),t.label]})]},t.path))}),_&&(0,I.jsx)(Se,{items:[{label:o(`open`),icon:(0,I.jsx)(fn,{size:14}),onSelect:()=>i(_.path)},{label:o(`open_in_new_tab`),icon:(0,I.jsx)(pn,{size:14}),onSelect:()=>i(_.path,!0)},{label:o(`copy_as_path`),icon:(0,I.jsx)(an,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(_.path)},...Rr(_.path)?[{label:o(`open_with`),icon:(0,I.jsx)(Kt,{size:14}),onSelect:()=>void Mt(_.path)},{label:o(`properties`),icon:(0,I.jsx)($t,{size:14}),onSelect:()=>void vt([_.path])}]:[]],onClose:()=>v(null),x:_.x,y:_.y})]})}function Ur(e,t){let n=wt(e);if(!n)return null;let r=it(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,I.jsx)(cn,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function Wr(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function Gr(e,t){let n=Wr(e),r=-1,i=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>h(t.path,e.path));t>r&&(r=t,i=e)}return i&&r>=0&&n.splice(0,r+1,{label:i.name,path:n[r].path,place:i}),n}function G(e){if(Rr(e)||xt(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var Kr=x.div`
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
`,qr=x.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Jr=x.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,K=x.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,Yr=x.button`
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
`,Xr=x.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,Zr=x.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${ze}
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
`,Qr=x.button`
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
`,q=x.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$r=x.div`
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
`,ei=x.button`
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
`;function ti({places:e,drives:t,recent:n,recentLimit:r,currentPath:a,activeKind:o,homePath:s=``,version:c=0,historyVersion:u=0,hiddenViews:d=[],onNavigate:p,onOpenView:m}){let[g,_]=(0,F.useState)([]),v=w(),[y,te]=(0,F.useState)(null),ne=It();(0,F.useEffect)(()=>{$e().then(e=>{te(e),_(lt(e).filter(e=>e.pinned))},()=>{te(null),_([])})},[c]),(0,F.useEffect)(()=>{if(!b.available)return;let e=g.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||s).filter(e=>e.length>0);return b.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>b.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[g,s]);let x=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>h(e.path,t));return{name:y?.placeNames?.[t]??n?.name??(ee(t)||t),path:t,kind:`folder`,icon:n?.icon??y?.placeIcons?.[t]??null}}),re=o===`files`;return(0,I.jsxs)(si,{children:[(0,I.jsxs)(ci,{children:[!d.includes(`home`)&&(0,I.jsxs)(J,{$active:o===`home`,onClick:e=>m(`home`,A(e)),title:v(`overview`),type:`button`,children:[(0,I.jsx)(Xt,{}),(0,I.jsx)(mi,{children:v(`overview`)})]}),!d.includes(`recycle`)&&(0,I.jsxs)(J,{$active:o===`recycle`,onClick:e=>m(`recycle`,A(e)),title:v(`recycle_bin`),type:`button`,children:[(0,I.jsx)(on,{}),(0,I.jsx)(mi,{children:v(`recycle_bin`)})]}),!d.includes(`gallery`)&&(0,I.jsxs)(J,{$active:o===`gallery`,onClick:e=>m(`gallery`,A(e)),title:v(`gallery`),type:`button`,children:[(0,I.jsx)(tn,{}),(0,I.jsx)(mi,{children:v(`gallery`)})]})]}),g.map(e=>(0,I.jsxs)(ui,{children:[(0,I.jsxs)(J,{as:`div`,$active:!1,children:[(0,I.jsx)(pi,{children:(0,I.jsx)(at,{panel:e,size:16})}),(0,I.jsx)(mi,{children:v(e.title)})]}),(0,I.jsx)(di,{children:(0,I.jsxs)(fi,{children:[e.kind===`quick`&&x(e).map(e=>(0,I.jsxs)(J,{$active:re&&h(a,e.path),onClick:t=>p(e.path,A(t)),title:e.path,type:`button`,children:[(0,I.jsx)(D,{place:e}),(0,I.jsx)(mi,{children:e.name})]},e.path)),e.kind===`recent`&&n.slice(0,r).map(e=>{let t=ct(ne,e.path);return(0,I.jsxs)(J,{$active:re&&h(a,e.path),onClick:t=>e.isDirectory?p(e.path,A(t)):void Be(e.path),title:e.path,type:`button`,children:[t&&ne.useIcons?(0,I.jsx)(D,{place:t}):(0,I.jsx)(et,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,I.jsx)(mi,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,I.jsx)(ii,{historyVersion:u,onNavigate:p}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,I.jsxs)(J,{$active:re&&h(a,e.name),onClick:t=>p(e.name,A(t)),title:e.name,type:`button`,children:[(0,I.jsx)(en,{}),(0,I.jsxs)(mi,{children:[l(e),(0,I.jsxs)(hi,{children:[f(e.freeSpace),` free`]}),(0,I.jsx)(gi,{children:(0,I.jsx)(_i,{$used:t,$tone:i(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,I.jsx)(ai,{onNavigate:p,path:e.path||s})]})})]},e.id)),!d.includes(`settings`)&&(0,I.jsx)(li,{children:(0,I.jsxs)(J,{$active:o===`settings`,onClick:e=>m(`settings`,A(e)),title:v(`settings`),type:`button`,children:[(0,I.jsx)($t,{}),(0,I.jsx)(mi,{children:v(`settings`)})]})})]})}var ni=10,ri=40;function ii({historyVersion:e=0,onNavigate:n}){let r=w(),[i,a]=(0,F.useState)(null),o=It();return(0,F.useEffect)(()=>{oe().then(a,()=>a([]))},[e]),(i??[]).slice(0,15).map(e=>{let i=ct(o,e.path);return(0,I.jsxs)(J,{$active:!1,onClick:t=>n(e.path,A(t)),title:t(r,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path}),type:`button`,children:[i&&o.useIcons?(0,I.jsx)(D,{place:i}):(0,I.jsx)(et,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,I.jsx)(mi,{children:i?.name||e.name})]},e.path)})}function ai({path:e,onNavigate:t}){let[n,r]=(0,F.useState)(null);(0,F.useEffect)(()=>{e&&(r(null),de(e,!1).then(r,()=>r(null)))},[e]),(0,F.useEffect)(()=>{if(e&&b.available)return b.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&h(n.data.path,e)&&de(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,ni),o=i.filter(e=>!e.isDirectory).slice(0,ri);return(0,I.jsxs)(I.Fragment,{children:[a.map(e=>(0,I.jsx)(oi,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,I.jsx)(oi,{entry:e,onNavigate:t},e.fullPath))]})}function oi({entry:e,onNavigate:t}){let n=It(),r=ct(n,e.fullPath);return(0,I.jsxs)(J,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,A(n)):void Be(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,I.jsx)(D,{place:r}):(0,I.jsx)(et,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,I.jsx)(mi,{children:r?.name||e.name})]})}var si=x.aside`
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
`,ci=x.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,li=x(ci)`
    margin-top: auto;
`,ui=x.div`
    display: flex;
    flex-direction: column;
`,di=x.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${si}:hover ${ui}:hover > & {
        grid-template-rows: 1fr;
    }
`,fi=x.div`
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
`,pi=x.span`
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
`,mi=x.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,hi=x.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,gi=x.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,_i=x.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,vi=x.span`
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
`;function yi({tasks:e,onClear:n,open:r,onOpenChange:i}){let a=w(),o=(0,F.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,F.useEffect)(()=>{if(!r)return;let e=e=>{o.current?.contains(e.target)||i(!1)},t=()=>i(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[r,i]),(0,I.jsxs)(xi,{ref:o,children:[(0,I.jsxs)(Si,{$active:r,onClick:()=>i(!r),title:s>0?t(a,s,`k_1_operation_running`,`count_operations_running`):a(`status_center`),type:`button`,children:[(0,I.jsx)(yn,{size:13}),c>0&&(0,I.jsx)(vi,{children:c>9?`9+`:c})]}),r&&(0,I.jsxs)(Ci,{children:[(0,I.jsxs)(wi,{children:[(0,I.jsxs)(Ti,{children:[(0,I.jsx)(yn,{size:12}),a(`status_center`)]}),(0,I.jsxs)(Ei,{children:[(0,I.jsx)(Di,{disabled:e.every(e=>e.state===`running`),onClick:n,type:`button`,children:a(`clear_finished`)}),(0,I.jsx)(Oi,{onClick:()=>i(!1),title:a(`close`),type:`button`,children:(0,I.jsx)(wn,{size:10})})]})]}),e.length===0?(0,I.jsx)(Ai,{children:a(`no_operations_yet`)}):(0,I.jsx)(ki,{children:e.map(e=>(0,I.jsx)(bi,{task:e},e.id))})]})]})}function bi({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,I.jsxs)(ji,{children:[(0,I.jsxs)(Mi,{children:[(0,I.jsx)(Ni,{$state:e.state,children:e.state===`done`?(0,I.jsx)(ln,{size:10}):e.state===`failed`?(0,I.jsx)(wn,{size:10}):(0,I.jsx)(Pi,{})}),(0,I.jsx)(Fi,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,I.jsxs)(Ii,{children:[f(e.bytesDone),` / `,f(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,I.jsxs)(Ii,{children:[e.done,` / `,e.total]})]}),i&&(0,I.jsx)(Li,{children:(0,I.jsx)(Ri,{$percent:r,$indeterminate:t===0})}),e.error&&(0,I.jsx)(zi,{children:e.error})]})}var xi=x.div`
    position: relative;
    display: flex;
`,Si=x.button`
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
`,Ci=x.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${ze}
    ${Pe}
`,wi=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Ti=x.span`
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
`,Ei=x.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Di=x.button`
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
`,Oi=x.button`
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
`,ki=x.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,Ai=x.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,ji=x.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${Le}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,Mi=x.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,Ni=x.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,Pi=x.span`
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
`,Fi=x.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ii=x.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Li=x.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,Ri=x.div`
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
`,zi=x.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function Bi(){return b.available?(await b.request(`fs.history.list`)).entries:[]}async function Vi(e){return b.available?(await b.request(`fs.history.undoTo`,{id:e})).ok:!1}function Hi(){let e=w(),[t,n]=(0,F.useState)(!1),[r,i]=(0,F.useState)([]),[a,o]=(0,F.useState)(!1),s=(0,F.useRef)(null),c=()=>void Bi().then(i,()=>i([]));(0,F.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)},i=()=>n(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,i),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,i)}},[t]);let l=async e=>{o(!0);try{await Vi(e),c()}finally{o(!1)}};return(0,I.jsxs)(Gi,{ref:s,children:[(0,I.jsx)(Ki,{$active:t,onClick:()=>n(e=>!e),title:e(`history`),type:`button`,children:(0,I.jsx)(vn,{size:14})}),t&&(0,I.jsxs)(qi,{children:[(0,I.jsxs)(Ji,{children:[(0,I.jsxs)(Yi,{children:[(0,I.jsx)(vn,{size:12}),e(`history`)]}),(0,I.jsx)(Xi,{onClick:()=>n(!1),title:e(`close`),type:`button`,children:(0,I.jsx)(wn,{size:10})})]}),r.length===0?(0,I.jsx)(aa,{children:e(`no_operations_yet`)}):(0,I.jsx)(Zi,{children:r.map(t=>(0,I.jsxs)(Qi,{children:[(0,I.jsxs)($i,{children:[(0,I.jsxs)(ea,{children:[(0,I.jsx)(Wi,{label:t.label}),Ui(e,t.label)]}),(0,I.jsx)(ta,{children:d(t.at)})]}),t.paths.length>0&&(0,I.jsxs)(na,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,I.jsx)(ra,{children:(0,I.jsx)(ia,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`undo`)})})]},t.id))})]})]})}function Ui(e,t){if(t===`new_folder`)return e(`new_folder`);if(t===`new_file`)return e(`new_file`);if(t===`paste_text`)return e(`paste_text`);if(t===`paste_image`)return e(`paste_image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`move`?`move_count_items`:t===`copy`?`copy_count_items`:`delete_count_items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`rename`)} ${i[1]}`:t}function Wi({label:e}){return e.startsWith(`delete`)?(0,I.jsx)(on,{size:13}):e.startsWith(`move`)||e.startsWith(`copy`)?(0,I.jsx)(an,{size:13}):e.startsWith(`rename`)?(0,I.jsx)(un,{size:13}):e.startsWith(`compress`)?(0,I.jsx)(_n,{size:13}):e.startsWith(`new`)?(0,I.jsx)(pn,{size:13}):(0,I.jsx)(fn,{size:13})}var Gi=x.div`
    position: relative;
    display: flex;
`,Ki=x.button`
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
`,qi=x.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${ze}
    ${Pe}
`,Ji=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Yi=x.span`
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
`,Xi=x.button`
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
`,Zi=x.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,Qi=x.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,$i=x.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,ea=x.span`
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
`,ta=x.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,na=x.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ra=x.div`
    display: flex;
    justify-content: flex-end;
`,ia=x.button`
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
`,aa=x.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,oa=(e=>(e[e.Border=-1]=`Border`,e[e.Data=0]=`Data`,e[e.Function=1]=`Function`,e[e.Position=2]=`Position`,e[e.Timing=3]=`Timing`,e[e.Alignment=4]=`Alignment`,e))(oa||{}),sa=[0,1],ca=[1,0],la=[2,3],ua=[3,2],da={L:sa,M:ca,Q:la,H:ua},fa=/^\d*$/,pa=/^[A-Z0-9 $%*+./:-]*$/,ma=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`,ha=1,ga=40,_a=3,va=3,ya=40,ba=10,xa=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],Sa=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],Ca=class{constructor(e,t,n,r){if(this.version=e,this.ecc=t,e<ha||e>ga)throw RangeError(`Version value out of range`);if(r<-1||r>7)throw RangeError(`Mask value out of range`);this.size=e*4+17;let i=Array.from({length:this.size}).fill(!1);for(let e=0;e<this.size;e++)this.modules.push(i.slice()),this.types.push(i.map(()=>0));this.drawFunctionPatterns();let a=this.addEccAndInterleave(n);if(this.drawCodewords(a),r===-1){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let n=this.getPenaltyScore();n<e&&(r=t,e=n),this.applyMask(t)}}this.mask=r,this.applyMask(r),this.drawFormatBits(r)}size;mask;modules=[];types=[];getModule(e,t){return e>=0&&e<this.size&&t>=0&&t<this.size&&this.modules[t][e]}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0,oa.Timing),this.setFunctionModule(e,6,e%2==0,oa.Timing);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n===0&&r===0||n===0&&r===t-1||n===t-1&&r===0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.ecc[1]<<3|e,n=t;for(let e=0;e<10;e++)n=n<<1^(n>>>9)*1335;let r=(t<<10|n)^21522;for(let e=0;e<=5;e++)this.setFunctionModule(8,e,X(r,e));this.setFunctionModule(8,7,X(r,6)),this.setFunctionModule(8,8,X(r,7)),this.setFunctionModule(7,8,X(r,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,X(r,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,X(r,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,X(r,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;for(let e=0;e<18;e++){let n=X(t,e),r=this.size-11+e%3,i=Math.floor(e/3);this.setFunctionModule(r,i,n),this.setFunctionModule(i,r,n)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){let i=Math.max(Math.abs(r),Math.abs(n)),a=e+r,o=t+n;a>=0&&a<this.size&&o>=0&&o<this.size&&this.setFunctionModule(a,o,i!==2&&i!==4,oa.Position)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!==1,oa.Alignment)}setFunctionModule(e,t,n,r=oa.Function){this.modules[t][e]=n,this.types[t][e]=r}addEccAndInterleave(e){let t=this.version,n=this.ecc;if(e.length!==Ra(t,n))throw RangeError(`Invalid argument`);let r=Sa[n[0]][t],i=xa[n[0]][t],a=Math.floor(La(t)/8),o=r-a%r,s=Math.floor(a/r),c=[],l=za(i);for(let t=0,n=0;t<r;t++){let r=e.slice(n,n+s-i+(t<o?0:1));n+=r.length;let a=Ba(r,l);t<o&&r.push(0),c.push(r.concat(a))}let u=[];for(let e=0;e<c[0].length;e++)c.forEach((t,n)=>{(e!==s-i||n>=o)&&u.push(t[e])});return u}drawCodewords(e){if(e.length!==Math.floor(La(this.version)/8))throw RangeError(`Invalid argument`);let t=0;for(let n=this.size-1;n>=1;n-=2){n===6&&(n=5);for(let r=0;r<this.size;r++)for(let i=0;i<2;i++){let a=n-i,o=n+1&2?r:this.size-1-r;!this.types[o][a]&&t<e.length*8&&(this.modules[o][a]=X(e[t>>>3],7-(t&7)),t++)}}}applyMask(e){if(e<0||e>7)throw RangeError(`Mask value out of range`);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw Error(`Unreachable`)}!this.types[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[t][a]===n?(r++,r===5?e+=_a:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*ya),n=this.modules[t][a],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*ya}for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[a][t]===n?(r++,r===5?e+=_a:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*ya),n=this.modules[a][t],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*ya}for(let t=0;t<this.size-1;t++)for(let n=0;n<this.size-1;n++){let r=this.modules[t][n];r===this.modules[t][n+1]&&r===this.modules[t+1][n]&&r===this.modules[t+1][n+1]&&(e+=va)}let t=0;for(let e of this.modules)t=e.reduce((e,t)=>e+ +!!t,t);let n=this.size*this.size,r=Math.ceil(Math.abs(t*20-n*10)/n)-1;return e+=r*ba,e}getAlignmentPatternPositions(){if(this.version===1)return[];{let e=Math.floor(this.version/7)+2,t=this.version===32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}finderPenaltyCountPatterns(e){let t=e[1],n=t>0&&e[2]===t&&e[3]===t*3&&e[4]===t&&e[5]===t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]===0&&(e+=this.size),t.pop(),t.unshift(e)}};function Y(e,t,n){if(t<0||t>31||e>>>t)throw RangeError(`Value out of range`);for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function X(e,t){return!!(e>>>t&1)}var wa=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw RangeError(`Invalid argument`);this.bitData=n.slice()}getData(){return this.bitData.slice()}},Ta=[1,10,12,14],Ea=[2,9,11,13],Da=[4,8,16,16];function Oa(e,t){return e[Math.floor((t+7)/17)+1]}function ka(e){let t=[];for(let n of e)Y(n,8,t);return new wa(Da,e.length,t)}function Aa(e){if(!Na(e))throw RangeError(`String contains non-numeric characters`);let t=[];for(let n=0;n<e.length;){let r=Math.min(e.length-n,3);Y(Number.parseInt(e.substring(n,n+r),10),r*3+1,t),n+=r}return new wa(Ta,e.length,t)}function ja(e){if(!Pa(e))throw RangeError(`String contains unencodable characters in alphanumeric mode`);let t=[],n=0;for(;n+2<=e.length;n+=2){let r=ma.indexOf(e.charAt(n))*45;r+=ma.indexOf(e.charAt(n+1)),Y(r,11,t)}return n<e.length&&Y(ma.indexOf(e.charAt(n)),6,t),new wa(Ea,e.length,t)}function Ma(e){return e===``?[]:Na(e)?[Aa(e)]:Pa(e)?[ja(e)]:[ka(Ia(e))]}function Na(e){return fa.test(e)}function Pa(e){return pa.test(e)}function Fa(e,t){let n=0;for(let r of e){let e=Oa(r.mode,t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}function Ia(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)===`%`?(t.push(Number.parseInt(e.substring(n+1,n+3),16)),n+=2):t.push(e.charCodeAt(n));return t}function La(e){if(e<ha||e>ga)throw RangeError(`Version number out of range`);let t=(16*e+128)*e+64;if(e>=2){let n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return t}function Ra(e,t){return Math.floor(La(e)/8)-xa[t[0]][e]*Sa[t[0]][e]}function za(e){if(e<1||e>255)throw RangeError(`Degree out of range`);let t=[];for(let n=0;n<e-1;n++)t.push(0);t.push(1);let n=1;for(let r=0;r<e;r++){for(let e=0;e<t.length;e++)t[e]=Va(t[e],n),e+1<t.length&&(t[e]^=t[e+1]);n=Va(n,2)}return t}function Ba(e,t){let n=t.map(e=>0);for(let r of e){let e=r^n.shift();n.push(0),t.forEach((t,r)=>n[r]^=Va(t,e))}return n}function Va(e,t){if(e>>>8||t>>>8)throw RangeError(`Byte out of range`);let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return n}function Ha(e,t,n=1,r=40,i=-1,a=!0){if(!(ha<=n&&n<=r&&r<=ga)||i<-1||i>7)throw RangeError(`Invalid value`);let o,s;for(o=n;;o++){let n=Ra(o,t)*8,i=Fa(e,o);if(i<=n){s=i;break}if(o>=r)throw RangeError(`Data too long`)}for(let e of[ca,la,ua])a&&s<=Ra(o,e)*8&&(t=e);let c=[];for(let t of e){Y(t.mode[0],4,c),Y(t.numChars,Oa(t.mode,o),c);for(let e of t.getData())c.push(e)}let l=Ra(o,t)*8;Y(0,Math.min(4,l-c.length),c),Y(0,(8-c.length%8)%8,c);for(let e=236;c.length<l;e^=253)Y(e,8,c);let u=Array.from({length:Math.ceil(c.length/8)},()=>0);return c.forEach((e,t)=>u[t>>>3]|=e<<7-(t&7)),new Ca(o,t,u,i)}function Ua(e,t){let{ecc:n=`L`,boostEcc:r=!1,minVersion:i=1,maxVersion:a=40,maskPattern:o=-1,border:s=1}=t||{},c=typeof e==`string`?Ma(e):Array.isArray(e)?[ka(e)]:void 0;if(!c)throw Error(`uqr only supports encoding string and binary data, but got: ${typeof e}`);let l=Ha(c,da[n],i,a,o,r),u=Wa({version:l.version,maskPattern:l.mask,size:l.size,data:l.modules,types:l.types},s);return t?.invert&&(u.data=u.data.map(e=>e.map(e=>!e))),t?.onEncoded?.(u),u}function Wa(e,t=1){if(!t)return e;let{size:n}=e,r=n+t*2;e.size=r,e.data.forEach(e=>{for(let n=0;n<t;n++)e.unshift(!1),e.push(!1)});for(let n=0;n<t;n++)e.data.unshift(Array.from({length:r},e=>!1)),e.data.push(Array.from({length:r},e=>!1));let i=oa.Border;e.types.forEach(e=>{for(let n=0;n<t;n++)e.unshift(i),e.push(i)});for(let n=0;n<t;n++)e.types.unshift(Array.from({length:r},e=>i)),e.types.push(Array.from({length:r},e=>i));return e}function Ga(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Ka(e,t={}){let n=Ua(e,t),{pixelSize:r=10,whiteColor:i=`white`,blackColor:a=`black`}=t,o=n.size*r,s=n.size*r,c=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${o}">`,l=[];for(let e=0;e<n.size;e++)for(let t=0;t<n.size;t++){let i=t*r,a=e*r;n.data[e][t]&&l.push(`M${i},${a}h${r}v${r}h-${r}z`)}return c+=`<rect fill="${Ga(i)}" width="${s}" height="${o}"/>`,c+=`<path fill="${Ga(a)}" d="${l.join(``)}"/>`,c+=`</svg>`,c}function qa({currentFolder:e}){let t=w(),[n,r]=(0,F.useState)(!1),[i,a]=(0,F.useState)(null),[o,s]=(0,F.useState)(!1),c=(0,F.useRef)(null);(0,F.useEffect)(()=>{if(!n)return;let e=()=>void kt().then(a,()=>void 0);e();let t=window.setInterval(e,2500),i=e=>{c.current?.contains(e.target)||r(!1)},o=()=>r(!1);return window.addEventListener(`pointerdown`,i),window.addEventListener(`blur`,o),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,i),window.removeEventListener(`blur`,o)}},[n]),(0,F.useEffect)(()=>{let e=()=>void kt().then(a,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let l=async e=>{s(!0);try{a(await e())}finally{s(!1)}},u=i?.shares.some(t=>h(t.path,e))??!1;return(0,I.jsxs)(Ja,{ref:c,children:[(0,I.jsxs)(Ya,{$active:n,onClick:()=>r(e=>!e),title:t(`share_folders`),type:`button`,children:[(0,I.jsx)(cn,{size:15}),i&&i.shares.length>0&&(0,I.jsx)(vi,{children:i.shares.length>9?`9+`:i.shares.length})]}),n&&(0,I.jsxs)(Xa,{children:[(0,I.jsxs)(Za,{children:[(0,I.jsxs)(Qa,{children:[(0,I.jsx)(gn,{size:12}),t(`share`)]}),(0,I.jsx)($a,{onClick:()=>r(!1),title:t(`close`),type:`button`,children:(0,I.jsx)(wn,{size:10})})]}),(0,I.jsxs)(eo,{children:[(0,I.jsxs)(to,{children:[(0,I.jsx)(Sn,{size:15}),(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`strong`,{children:i?.deviceName||t(`this_device`)}),(0,I.jsx)(oo,{children:i?.fingerprint??``})]})]}),i?.shares.length===0&&(0,I.jsx)(so,{children:t(`no_folders_are_shared_yet`)}),i?.shares.map(e=>(0,I.jsxs)(co,{children:[(0,I.jsxs)(lo,{children:[(0,I.jsx)(uo,{title:e.path,children:e.name}),(0,I.jsx)(po,{disabled:o,onClick:()=>void l(()=>Vt(e.id)),title:t(`stop_sharing`),type:`button`,children:(0,I.jsx)(wn,{size:10})})]}),(0,I.jsx)(fo,{title:e.path,children:e.path}),(0,I.jsxs)(mo,{children:[(0,I.jsxs)(ho,{$active:e.mode===`client`,onClick:()=>void l(()=>nt(e.id,`client`)),title:t(`only_paired_devices_can_open_this_folder_in_the_app`),type:`button`,children:[(0,I.jsx)(Sn,{size:11}),t(`app`)]}),(0,I.jsxs)(ho,{$active:e.mode===`web`,onClick:()=>void l(()=>nt(e.id,`web`)),title:t(`any_device_with_a_browser_can_open_this_folder`),type:`button`,children:[(0,I.jsx)(qt,{size:11}),t(`web`)]})]})]},e.id)),(0,I.jsxs)(go,{disabled:o||e.length===0||u,onClick:()=>void l(()=>Dt(e,`client`)),title:u?t(`this_folder_is_already_shared`):e,type:`button`,children:[(0,I.jsx)(pn,{size:12}),t(`share_this_folder`)]}),i?.webRunning&&(0,I.jsxs)(_o,{children:[(0,I.jsxs)(vo,{children:[(0,I.jsx)(qt,{size:12}),t(`browser_access`)]}),(0,I.jsxs)(ro,{children:[(0,I.jsx)(io,{children:i.urls.map(e=>(0,I.jsx)(yo,{onClick:()=>void Dn(e),type:`button`,children:e},e))}),i.preferredUrl&&(0,I.jsx)(no,{value:i.preferredUrl})]}),(0,I.jsx)(oo,{children:t(`open_one_of_these_addresses_on_any_device_on_the_same_network`)})]})]})]})]})}var Ja=x.div`
    position: relative;
    display: flex;
`,Ya=x.button`
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
`,Xa=x.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${ze}
    ${Pe}
`,Za=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Qa=x.span`
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
`,$a=x.button`
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
`,eo=x.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,to=x.div`
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
`;function no({value:e}){let t=w(),n=(0,F.useMemo)(()=>Ka(e,{ecc:`M`,border:2,pixelSize:4,blackColor:`#000000`,whiteColor:`#ffffff`}),[e]);return(0,I.jsx)(ao,{dangerouslySetInnerHTML:{__html:n},role:`img`,title:t(`scan_the_code_to_open_this_share_on_a_phone`)})}var ro=x.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,io=x.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
`,ao=x.div`
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
`,oo=x.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,so=x.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,co=x.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,lo=x.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,uo=x.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,fo=x.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,po=x.button`
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
`,mo=x.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,ho=x.button`
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
`,go=x.button`
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
`,_o=x.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,vo=x.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,yo=x.button`
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
`;function bo(){let e=w();return(0,I.jsx)(xo,{title:e(`always_applies_to_every_folder`),children:e(`global`)})}var xo=x.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`;function So({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=w(),[s,c]=(0,F.useState)(!1),l=(0,F.useRef)(null);(0,F.useEffect)(()=>{if(!s)return;let e=()=>c(!1),t=e=>{l.current?.contains(e.target)||c(!1)},n=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`keydown`,n)}},[s]),(0,F.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=j.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,I.jsxs)(Co,{ref:l,children:[(0,I.jsx)(wo,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`view`),type:`button`,children:e.mode===`grid`?(0,I.jsx)(Yt,{size:14}):(0,I.jsx)(M,{size:14})}),s&&(0,I.jsxs)(To,{children:[(0,I.jsxs)(Eo,{children:[(0,I.jsx)(rn,{size:11}),o(`view`)]}),(0,I.jsxs)(Oo,{children:[(0,I.jsxs)(ko,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,I.jsx)(M,{size:12}),` `,o(`list`)]}),(0,I.jsxs)(ko,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,I.jsx)(Yt,{size:12}),` `,o(`grid`)]})]}),(0,I.jsxs)(Eo,{children:[(0,I.jsx)(M,{size:11}),o(`list_icon_size`)]}),(0,I.jsxs)(Ao,{children:[(0,I.jsx)(`input`,{"aria-label":o(`list_icon_size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,I.jsxs)(jo,{children:[e.iconSize,`px`]})]}),(0,I.jsxs)(Eo,{children:[(0,I.jsx)(Yt,{size:11}),o(`grid_size`)]}),(0,I.jsxs)(Ao,{children:[(0,I.jsx)(`input`,{"aria-label":o(`grid_size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,I.jsxs)(jo,{children:[e.gridSize,`px`]})]}),(0,I.jsxs)(Eo,{children:[(0,I.jsx)(Cn,{size:11}),o(`columns`),(0,I.jsx)(bo,{}),(0,I.jsx)(Do,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:o(`reset_column_widths`),type:`button`,children:o(`reset_widths`)})]}),j.map(e=>(0,I.jsxs)(Mo,{children:[(0,I.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,I.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,I.jsxs)(Mo,{children:[(0,I.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,I.jsx)(`span`,{children:o(`link_target_after_the_name`)})]}),(0,I.jsxs)(Eo,{children:[(0,I.jsx)(Qt,{size:11}),o(`preview_panel`),(0,I.jsx)(bo,{})]}),(0,I.jsxs)(Mo,{children:[(0,I.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,I.jsx)(`span`,{children:o(`preview_under_the_list`)})]})]})]})}var Co=x.div`
    position: relative;
    display: flex;
    height: 100%;
`,wo=x.button`
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
`,To=x.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${ze}
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
`,Eo=x.div`
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
`,Do=x.button`
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
`,Oo=x.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,ko=x.button`
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
`,Ao=x.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,jo=x.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,Mo=x.label`
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
`,No=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),Po=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),Fo=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),Io=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,I.jsx)(`path`,{d:`M2 5h6`})}),Lo=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,I.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Ro=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,I.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,I.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function zo({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:p,activityOpen:ee,onActivityOpenChange:m,trayCount:h,trayVisible:g,onToggleTray:_,split:v,canSplit:te,onToggleSplit:ne,details:b,canDetails:x,onToggleDetails:re,shortcuts:S,currentFolder:ie}){let C=w(),oe=y(),se=ae(),[ce,le]=(0,F.useState)({left:!1,right:!1}),[ue,de]=(0,F.useState)(null),[fe,pe]=(0,F.useState)(null),me=(0,F.useRef)(null),he=(0,F.useRef)(null),ge=(0,F.useRef)(null),_e=(0,F.useCallback)(()=>{let e=he.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;le(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,F.useEffect)(()=>{_e();let e=he.current;if(!e)return;let t=new ResizeObserver(_e);return t.observe(e),()=>t.disconnect()},[_e,e.length]),(0,F.useEffect)(()=>()=>{me.current&&window.clearTimeout(me.current.timer)},[]),(0,F.useEffect)(()=>{ge.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let ve=e=>he.current?.scrollBy({left:e,behavior:`smooth`}),ye=()=>{me.current&&window.clearTimeout(me.current.timer),me.current=null,pe(null)};return(0,I.jsxs)(Uo,{children:[(0,I.jsx)(Wo,{children:(0,I.jsx)(Sn,{size:19})}),(0,I.jsxs)(Go,{children:[ce.left&&(0,I.jsx)(qo,{onClick:()=>ve(-180),title:C(`scroll_tabs_left`),type:`button`,children:(0,I.jsx)(No,{})}),(0,I.jsx)(Ko,{onScroll:_e,onWheel:e=>{let t=he.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:he,children:e.map(e=>(0,I.jsxs)(Jo,{$active:e.id===t,$dragging:ue===e.id,$dropTarget:fe===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!ut(t.dataTransfer)||!Bo(e)||(t.preventDefault(),me.current?.id===e.id))return;ye(),pe(e.id);let r=window.setTimeout(()=>{n(e.id),me.current=null},500);me.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(me.current?.id===e.id||fe===e.id)&&ye()},onDragEnd:()=>{de(null),ye()},onDragOver:t=>{(ue||ut(t.dataTransfer)&&Bo(e))&&(t.preventDefault(),ut(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>de(e.id),onDrop:t=>{if(t.preventDefault(),ue)a(ue,e.id);else if(Bo(e)&&ut(t.dataTransfer)){let{paths:r,move:i}=Ot(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}de(null),ye()},onClick:()=>n(e.id),ref:e.id===t?ge:void 0,title:e.path||e.title,type:`button`,children:[(0,I.jsx)(Vo,{tab:e}),(0,I.jsx)(Yo,{children:e.title}),e.partner&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Xo,{children:`|`}),(0,I.jsx)(Ho,{place:e.partner.place}),(0,I.jsx)(Yo,{children:e.partner.title})]}),(0,I.jsx)(Zo,{"data-shortcut":k(S.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:C(`close_tab`),children:(0,I.jsx)(Fo,{})})]},e.id))}),ce.right&&(0,I.jsx)(qo,{onClick:()=>ve(180),title:C(`scroll_tabs_right`),type:`button`,children:(0,I.jsx)(Po,{})}),(0,I.jsx)(Qo,{"data-shortcut":k(S.newTab),onClick:i,title:C(`new_tab`),type:`button`,children:(0,I.jsx)(pn,{size:13})})]}),(0,I.jsx)($o,{...se}),(0,I.jsxs)(es,{children:[(0,I.jsx)(ns,{$active:v,"data-shortcut":k(S.splitView),disabled:!te,onClick:ne,title:C(v?`close_split_view`:`split_view`),type:`button`,children:(0,I.jsx)(Cn,{size:15})}),(0,I.jsx)(ns,{$active:b,disabled:!x,onClick:re,title:C(b?`hide_details_panel`:`show_details_panel`),type:`button`,children:(0,I.jsx)(rn,{size:15})}),(0,I.jsxs)(ts,{$active:g,onClick:_,title:C(g?`hide_file_tray`:`show_file_tray`),type:`button`,children:[(0,I.jsx)(nn,{size:14}),h>0&&(0,I.jsx)(vi,{children:h>9?`9+`:h})]}),(0,I.jsx)(Hi,{}),(0,I.jsx)(qa,{currentFolder:ie}),(0,I.jsx)(yi,{tasks:f,onClear:p,open:ee,onOpenChange:m}),(0,I.jsx)(So,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,I.jsx)(rs,{onClick:oe.minimize,title:C(`minimize`),type:`button`,children:(0,I.jsx)(Io,{})}),(0,I.jsx)(rs,{onClick:oe.toggleMaximize,title:oe.maximized?C(`restore`):C(`maximize`),type:`button`,children:oe.maximized?(0,I.jsx)(Ro,{}):(0,I.jsx)(Lo,{})}),(0,I.jsx)(is,{onClick:oe.close,title:C(`close`),type:`button`,children:(0,I.jsx)(Fo,{})})]})]})}function Bo(e){return e.kind===`files`&&(!a(e.path)||s(e.path))}function Vo({tab:e}){switch(e.kind){case`home`:return(0,I.jsx)(Tn,{size:13});case`settings`:return(0,I.jsx)($t,{size:13});case`recycle`:return(0,I.jsx)(on,{size:13});default:return e.archive?(0,I.jsx)(_n,{size:13}):(0,I.jsx)(Ho,{place:e.place})}}function Ho({place:e}){return e?(0,I.jsx)(D,{place:e,size:13}):(0,I.jsx)(mn,{size:13})}var Uo=x.header`
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
`,Wo=x.span`
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
`,Go=x.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,Ko=x.div`
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
`,qo=x.button`
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
`,Jo=x.button`
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
`,Yo=x.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Xo=x.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,Zo=x.span`
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
`,Qo=x.button`
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
`,$o=x.div`
    flex: 1;
    min-width: 28px;
`,es=x.div`
    display: flex;
    flex-shrink: 0;
`,ts=x.button`
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
`,ns=x.button`
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
`,rs=x.button`
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
`,is=x(rs)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function as(){let[e,t]=(0,F.useState)(null),n=(0,F.useRef)(null),r=(0,F.useRef)(void 0);return(0,F.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`blur`,i),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`blur`,i),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,tr.createPortal)((0,I.jsx)(os,{tooltip:e}),document.body):null}function os({tooltip:e}){let t=(0,F.useRef)(null),[n,r]=(0,F.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,F.useState)(()=>e.bottom+6);return(0,F.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,I.jsxs)(ss,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,I.jsx)(cs,{children:e.text}),e.shortcut&&(0,I.jsx)(ls,{children:e.shortcut})]})}var ss=x.div`
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
    ${Le}
`,cs=x.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,ls=x.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,us={home:`overview`,settings:`settings`,recycle:`recycle_bin`,gallery:`gallery`},ds=[{id:`ui`,label:`interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`interface`},{id:`names`,label:`file_names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`interface`},{id:`details`,label:`details_panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`interface`},{id:`path`,label:`address_bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`monospace`},{id:`mono`,label:`monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`text_preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`monospace`}];function fs(e){return`"${e.replaceAll(`"`,``)}"`}function ps(e){let t=document.documentElement.style;for(let n of ds){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${fs(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function ms(){return b.available?(await b.request(`app.fonts`)).fonts??[]:[]}function hs({deviceName:e,code:t,onAccept:n,onReject:r}){let i=w(),a=(0,F.useRef)(null);return(0,F.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,tr.createPortal)((0,I.jsx)(gs,{children:(0,I.jsxs)(_s,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsxs)(vs,{children:[(0,I.jsx)(cn,{size:15}),i(`pair_for_sharing`)]}),(0,I.jsx)(ys,{children:i(`device_wants_to_pair_with_this_device_for_sharing_folders`,{device:e})}),(0,I.jsx)(bs,{children:t}),(0,I.jsx)(xs,{children:i(`check_that_the_other_device_shows_the_same_code_before_accepting`)}),(0,I.jsxs)(Ss,{children:[(0,I.jsx)(Cs,{onClick:r,type:`button`,children:i(`reject`)}),(0,I.jsx)(ws,{onClick:n,ref:a,type:`button`,children:i(`accept`)})]})]})}),document.body)}var gs=x.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${Le}
`,_s=x.div`
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
`,vs=x.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,ys=x.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,bs=x.div`
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
`,xs=x.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Ss=x.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,Cs=x.button`
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
`,ws=x(Cs)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,Ts=x.button`
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
`,Es=x.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,Ds=`modulepreload`,Os=function(e){return`/`+e},ks={},As=function(e){return e.pathname.endsWith(`.css`)},js=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Ms=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Os(t,n);let r=s(t),i=As(r);return js(ks,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Ds,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Ns=(0,F.lazy)(()=>Ms(()=>import(`./OverviewView-CiX43j0i.js`).then(e=>e.n).then(e=>({default:e.OverviewView})),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),Ps=(0,F.lazy)(()=>Ms(()=>import(`./SettingsView-CeZO_DDQ.js`).then(e=>({default:e.SettingsView})),__vite__mapDeps([11,1,2,4,5,3,6,7,9,8,10]))),Fs=(0,F.lazy)(()=>Ms(()=>import(`./GalleryView-DA2CONu_.js`).then(e=>e.n).then(e=>({default:e.GalleryView})),__vite__mapDeps([12,1,2,4,5,3,6,9]))),Is=(0,F.lazy)(()=>Ms(()=>import(`./RecycleView-CbllQ0NN.js`).then(e=>({default:e.RecycleView})),__vite__mapDeps([13,1,2,4,5,3,6,8]))),Ls=0,Rs=new Set;function zs(e){Rs.add(e),b.send({type:`app.navigate.done`,payload:{path:e}})}var Bs=20,Vs=[{value:`0`,label:`auto`},{value:`932`,label:`japanese_cp932`},{value:`936`,label:`simplified_chinese_cp936`},{value:`950`,label:`traditional_chinese_cp950`},{value:`949`,label:`korean_cp949`},{value:`1252`,label:`western_cp1252`},{value:`1250`,label:`central_european_cp1250`},{value:`1251`,label:`cyrillic_cp1251`},{value:`1254`,label:`turkish_cp1254`},{value:`1253`,label:`greek_cp1253`},{value:`1256`,label:`arabic_cp1256`},{value:`1255`,label:`hebrew_cp1255`},{value:`1257`,label:`baltic_cp1257`},{value:`874`,label:`thai_cp874`},{value:`65001`,label:`utf_8`}];function Hs(e){return e.history[e.index]??zr(`home`)}function Z(e){return Br(Hs(e))??`files`}function Q(e){let t=Hs(e);return Br(t)?``:e.listing?.path||t}function Us(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||Z(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function Ws(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function Gs(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||fe.iconSize,gridSize:e.view?.gridSize||t.gridSize||fe.gridSize,sort:e.view?.sort??fe.sort,sortDescending:e.view?.sortDescending??fe.sortDescending,columns:t.columns??Ne.columns??[]}}function Ks(e=zr(`home`)){return Ls+=1,{id:`tab-${Ls}`,listing:null,loading:!Br(e),error:null,history:[e],index:0,fresh:!0,view:null}}function qs(e){return e instanceof Error?e.message:String(e)}function Js(e){let t=wt(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return it(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function Ys(e){let t=ee(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function Xs(e){return a(e)?je(e):void 0}function Zs(e,n){let r=n.entries.reduce((e,t)=>e+(t.isDirectory?n.folderSizes[t.name]??0:Math.max(t.size,0)),0);return t(e,n.entries.length,`k_1_item_size`,`count_items_size`,{size:f(r)})}function Qs(){let e=w(),[n,r]=(0,F.useState)(()=>[Ks()]),[i,l]=(0,F.useState)(()=>n[0].id),[d,f]=(0,F.useState)(null),[_,v]=(0,F.useState)(()=>{let e=Ke(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[y,te]=(0,F.useState)([]),[ne,x]=(0,F.useState)([]),[S,ae]=(0,F.useState)(null),[oe,we]=(0,F.useState)(null),[Te,Ee]=(0,F.useState)(null),Oe=ie(),[T,Ae]=(0,F.useState)(Ge),[Pe,Le]=(0,F.useState)(0),[ze,Ue]=(0,F.useState)(0),[We,qe]=(0,F.useState)(0),[E,Ze]=(0,F.useState)(Ge),[et,nt]=(0,F.useState)(0),[it,at]=(0,F.useState)(0),[D,vt]=(0,F.useState)(0),[yt,wt]=(0,F.useState)(0),Dt=(0,F.useRef)(yt);Dt.current=yt;let[Ot,kt]=(0,F.useState)([]),[Mt,It]=(0,F.useState)(10),[j,Vt]=(0,F.useState)(null),Kt=C(o(j?.themeMode)),Yt=(0,F.useMemo)(()=>(j?.favorites??[]).map(e=>g(e.path)),[j?.favorites]),[Qt,en]=(0,F.useState)(0),[M,nn]=(0,F.useState)(st),[rn,an]=(0,F.useState)(0),[cn,ln]=(0,F.useState)(0),[un,dn]=(0,F.useState)(0),[mn,hn]=(0,F.useState)(!0),[gn,vn]=(0,F.useState)(()=>{let e=Ke(`yafm.preview.width`,320);return e>=220?e:320}),[yn,Sn]=(0,F.useState)(null),[Cn,wn]=(0,F.useState)(null),[Tn,Dn]=(0,F.useState)({kind:null,info:null}),[N,On]=(0,F.useState)(`primary`),[An,jn]=(0,F.useState)(null),[Mn,Nn]=(0,F.useState)(null),[P,Pn]=(0,F.useState)(null),[Fn,In]=(0,F.useState)(null),[Ln,Rn]=(0,F.useState)({primary:0,secondary:0}),[zn,Bn]=(0,F.useState)({primary:null,secondary:null}),[Vn,Hn]=(0,F.useState)(null),[Un,Wn]=(0,F.useState)([]),[Gn,Jn]=(0,F.useState)(!1),[Yn,Zn]=(0,F.useState)(null),[Qn,$n]=(0,F.useState)(``),er=(0,F.useRef)([]),tr=(0,F.useRef)([]),[rr,ir]=(0,F.useState)([]),[ar,or]=(0,F.useState)(!1),sr=(0,F.useMemo)(()=>ar?new Set(rr.map(e=>e.path)):new Set,[rr,ar]),[cr,lr]=(0,F.useState)(!1),[ur,dr]=(0,F.useState)([]),[fr,pr]=(0,F.useState)(null),mr=(0,F.useRef)(0),[hr,gr]=(0,F.useState)(()=>{let e=Ce(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?Ws({x:e.x,y:e.y}):Ws({x:Math.max(20,window.innerWidth-340),y:110})}),_r=(0,F.useCallback)(()=>{gr(e=>Ws(e)),lr(!0)},[]),L=n.find(e=>e.id===i)??n[0],R=Z(L),yr=Hs(L),z=Q(L),br=R===`files`?L.listing?.parent??Js(z):null,B=L.splitWith?n.find(e=>e.id===L.splitWith):void 0,xr=R===`files`&&B!==void 0,Sr=B?Q(B):``,wr=B?B.listing?.parent??Js(Sr):null,V=xr&&B&&N===`secondary`?B:L,Tr=j?.defaultView??Ne,Er=Gs(V,Tr);(0,F.useEffect)(()=>{p(j?.accentColor,j?.secondaryColor,Kt)},[j?.accentColor,j?.secondaryColor,Kt]),(0,F.useEffect)(()=>{ps(j?.fonts)},[j?.fonts]),(0,F.useEffect)(()=>{c(j?.timeFormat,j?.timeFormatPattern)},[j?.timeFormat,j?.timeFormatPattern]),(0,F.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!j?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[j?.backgroundSource]),(0,F.useEffect)(()=>(Je(e=>new Promise(t=>{pr({id:++mr.current,prompt:e,resolve:t})})),()=>Je(null)),[]),(0,F.useEffect)(()=>{On(`primary`)},[i]),(0,F.useEffect)(()=>{Ze(Ge),at(0),vt(0)},[R]),(0,F.useEffect)(()=>{at(0)},[E.query,E.matchCase,E.regex]),(0,F.useEffect)(()=>{at(e=>D===0?0:Math.min(e,D-1))},[D]);let H=Er.columns.includes(`linkCount`),Dr=(0,F.useMemo)(()=>{let e={},t=lt(j),n={};for(let[e,t]of Object.entries(j?.placeNames??{}))n[g(e)]=t;for(let t of y)e[g(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=g(t),i=y.find(e=>g(e.path)===r);e[r]={name:n[r]??i?.name??(ee(t)||t),path:t,kind:`folder`,icon:i?.icon??j?.placeIcons?.[t]??null}}return e},[y,j]),Or=(0,F.useMemo)(()=>({places:Dr,useIcons:j?.systemIcons===!1}),[Dr,j?.systemIcons]),kr=j?.defaultView?.showImages??!0,Ar=j?.defaultView?.imageStripHeight??Ne.imageStripHeight,Mr=R===`home`?(0,I.jsx)(Xt,{size:13}):R===`settings`?(0,I.jsx)($t,{size:13}):R===`recycle`?(0,I.jsx)(on,{size:13}):R===`gallery`?(0,I.jsx)(tn,{size:13}):void 0,Nr=T.open&&T.query.length>0,Pr=(0,F.useDeferredValue)(T),U=(0,F.useMemo)(()=>Nr&&V.listing?V.listing.entries.filter(e=>ce(e.isDirectory?ot(Or,e.fullPath,e.name):e.name,Pr)).map(e=>e.fullPath):[],[Nr,Pr,V.listing,Or]);(0,F.useEffect)(()=>{Le(0)},[T.query,T.matchCase,T.regex,V.listing?.path]);let Fr=U.length===0?-1:Math.min(Pe,U.length-1),W=(0,F.useCallback)(()=>{Ae(e=>({...e,open:!1,query:``})),Le(0)},[]),Ir=(0,F.useCallback)(()=>{Ae(e=>({...e,open:!0})),Ue(e=>e+1)},[]),Lr=(0,F.useCallback)(()=>{Ze(e=>({...e,open:!0})),nt(e=>e+1)},[]),Rr=(0,F.useCallback)(()=>{Ze(Ge),at(0),vt(0)},[]),Ur=(0,F.useCallback)(e=>{at(t=>D===0?0:(Math.min(t,D-1)+e+D)%D)},[D]),Wr=(0,F.useCallback)(e=>{Ae(t=>({...t,open:!0,query:t.open?t.query+e:e})),Ue(e=>e+1)},[]),Gr=(0,F.useCallback)(e=>{Le(t=>U.length===0?0:(Math.min(t,U.length-1)+e+U.length)%U.length)},[U.length]),G=(0,F.useRef)({tabs:n,activeId:i,activePane:N});G.current={tabs:n,activeId:i,activePane:N};let Kr=(0,F.useRef)(j);Kr.current=j;let qr=(0,F.useRef)(!1),Jr=(0,F.useRef)([]),K=(0,F.useCallback)((e,t)=>{r(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Yr=(0,F.useRef)(new Map),Xr=(0,F.useCallback)(e=>{let t=(Yr.current.get(e)??0)+1;return Yr.current.set(e,t),()=>Yr.current.get(e)===t},[]),Zr=(0,F.useCallback)((e,t)=>{b.available&&t&&e===Us(G.current)&&b.send({type:`fs.focus`,payload:{path:t}})},[]),Qr=(0,F.useCallback)(async(e,t,n)=>{if(!(t&&xt(t)))try{let r=(await me(t,H)).listing;if(!n()||!r)return;K(e,e=>e.loading?{listing:{...r,total:r.entries.length,signature:0},view:r.view??null}:{})}catch{}},[H,K]),q=(0,F.useCallback)(async(e,t,n=!1)=>{let r=Xr(e);W(),Zr(e,t);let i=!n||!G.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;K(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&h(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&Qr(e,t,r);let o=t&&xt(t)?await Pt(t):await de(t,!0,H,Dt.current,t?Xs(t):void 0,e);if(!r())return;K(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),!n&&!xt(o.path)&&ve(o.path).then(()=>en(e=>e+1))}catch(i){if(!r())return;let a=G.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?Q(a):``,s=Js(o),c=qs(i);if(o&&ke(c)){let i=u(o),a=await Fe(i,!!je(i));if(a){xe(i,a),r()&&q(e,t,n);return}}K(e,e=>({listing:{path:o,parent:s,total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[Xr,H,K,Zr,W,Qr]),$r=(0,F.useRef)(new Set),ei=(0,F.useCallback)(async e=>{let t=G.current.tabs.find(t=>t.id===e),n=t?.listing;if(!t||Z(t)!==`files`||!n)return;let r=n.entries.length;if(r<=0||r>=(n.total??0)||ni.current.has(e))return;let i=`${e}|${n.path}|${r}`;if($r.current.add(i))try{let t=await ge(n.path,r,n.view?.sort??`name`,n.view?.sortDescending??!1);K(e,e=>{let i=e.listing;return!i||!h(i.path,n.path)||i.entries.length!==r||i.view?.sort!==n.view?.sort?{}:{listing:{...i,entries:[...i.entries,...t.entries],total:t.total}}})}catch{}finally{$r.current.delete(i)}},[K]),ni=(0,F.useRef)(new Set),ri=(0,F.useCallback)(async e=>{let t=G.current.tabs.find(t=>t.id===e),n=t?.listing;if(t&&Z(t)===`files`&&n&&!(n.entries.length>=(n.total??0))&&ni.current.add(e))try{let t=[],r=n.entries.length,i=n.total??0;for(;r<i;){let e=await ge(n.path,r,n.view?.sort??`name`,n.view?.sortDescending??!1);if(e.entries.length===0)break;t.push(e.entries),r+=e.entries.length,i=e.total}if(t.length===0)return;K(e,e=>{let r=e.listing;return!r||!h(r.path,n.path)||r.entries.length!==n.entries.length?{}:{listing:{...r,entries:[...r.entries,...t.flat()],total:i}}})}catch{}finally{ni.current.delete(e)}},[K]),[ii,ai]=(0,F.useState)(0),oi=(0,F.useCallback)(async e=>{let t=G.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0;await ri(e),(G.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0)>t&&ai(e=>e+1)},[ri]),si=V.id,ci=Z(V),li=V.listing?.entries.length??0,ui=V.listing?.total??0;(0,F.useEffect)(()=>{T.open&&T.query.length!==0&&(ci!==`files`||li>=ui||ri(si))},[T.open,T.query,si,ci,li,ui,ri]);let di=(0,F.useCallback)((e,t)=>{let n=Vr(t);n&&(Br(n)?(W(),Xr(e),K(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):q(e,n))},[Xr,q,K,W]),fi=(0,F.useCallback)(async(e,t,n)=>{if(W(),Br(t)){Xr(e),K(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Xr(e);Zr(e,t),K(e,()=>({index:n,listing:null,loading:!0,error:null}));try{xt(t)||Qr(e,t,r);let n=xt(t)?await Pt(t):await de(t,!0,H,Dt.current,Xs(t),e);if(!r())return;K(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;let a=qs(i);if(ke(a)){let i=u(t),a=await Fe(i,!!je(i));if(a){xe(i,a),r()&&fi(e,t,n);return}}K(e,()=>({listing:{path:t,parent:Js(t),total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:qs(i)}))}},[Xr,H,K,Zr,W,Qr]),J=(0,F.useCallback)((e,t=!0)=>{let n=Ks(e??zr(`home`));return r(e=>[...e,n]),t&&l(n.id),e&&!Br(e)&&q(n.id,e),n.id},[q]),pi=(0,F.useCallback)(e=>{for(let t of G.current.tabs)Z(t)===`files`&&h(Q(t),e)&&q(t.id,e,!0)},[q]),mi=(0,F.useCallback)((e,t)=>{let n=ee(t);for(let r of G.current.tabs)r.listing?.entries.some(t=>h(t.fullPath,e))&&K(r.id,r=>{let i=r.listing;if(!i)return{};let a=i.entries.map(r=>h(r.fullPath,e)?{...r,name:n,fullPath:t}:r);return{listing:{...i,entries:a}}})},[K]),hi=(0,F.useRef)([]);(0,F.useEffect)(()=>{let e=new Set;for(let t of n){let n=t.listing?.path??t.history[t.index]??``;n&&a(n)&&e.add(g(u(n)))}let t=hi.current.filter(t=>!e.has(t));hi.current=[...e],t.length>0&&ye(t)},[n]);let gi=(0,F.useCallback)((e,t=!1)=>{t?J(zr(e)):di(G.current.activeId,zr(e))},[J,di]),_i=(0,F.useCallback)(e=>{let{tabs:t,activeId:n}=G.current,i=t.find(t=>t.id===e),a=t.filter(t=>t.id!==e&&t.id!==i?.splitWith);if(i&&!i.hidden&&(tr.current.push(Hs(i)),tr.current.length>Bs&&tr.current.shift()),a.length===0){let e=Ks();r([e]),l(e.id);return}let o=t.findIndex(t=>t.id===e);r(a),n===e&&l(a[Math.min(o,a.length-1)].id)},[]),vi=(0,F.useCallback)(()=>{let e=tr.current.pop();if(!e)return;let t={...Ks(e),fresh:!1};r(e=>[...e,t]),l(t.id),Z(t)===`files`&&q(t.id,Q(t))},[q]),yi=(0,F.useCallback)((e,t=!1)=>{t?J(e):di(Us(G.current),e??zr(`home`))},[di,J]),bi=(0,F.useCallback)(e=>{let{tabs:t,activeId:n}=G.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;l(r[i].id)},[]),xi=(0,F.useCallback)(()=>{let{tabs:e,activeId:t}=G.current,n=e.find(e=>e.id===t);if(!n||Z(n)!==`files`)return;let i=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(i){r(e=>e.filter(e=>e.id!==i.id)),K(t,()=>({splitWith:void 0})),On(`primary`);return}let a=Q(n),o={...Ks(a),hidden:!0};r(e=>[...e,o]),K(t,()=>({splitWith:o.id})),q(o.id,a),On(`primary`)},[q,K]),Si=(0,F.useCallback)(e=>{vn(e),se(`yafm.preview.width`,e)},[]),Ci=(0,F.useCallback)((e,t,n)=>Dn(r=>r.kind===e&&r.info?.path===t?.path&&r.info?.modified===t?.modified&&r.info?.name===t?.name&&r.note===n?r:{kind:e,info:t,note:n}),[]),wi=(0,F.useCallback)((e,t)=>Ci(`gallery`,e,t),[Ci]),Ti=(0,F.useCallback)((e,t)=>Ci(`recycle`,e,t),[Ci]),Ei=xr?N===`secondary`?Cn??yn:yn??Cn:yn,Di=xr&&N===`secondary`?Ln.secondary:Ln.primary,Oi=R===`files`?Ei:Tn.kind===R?Tn.info:null,ki=R===`files`?Di>1?t(e,Di,`k_1_item_selected`,`count_items_selected`):void 0:Tn.kind===R?Tn.note:void 0,Ai=(0,F.useMemo)(()=>R===`files`&&L.listing?Zs(e,L.listing):Qn,[R,L.listing,e,Qn]),ji=(0,F.useRef)(null),Mi=e=>{e.preventDefault();let t=ji.current?.getBoundingClientRect();if(!t)return;let n=Math.max(t.width-7,1),r=e=>{let r=Math.min(Math.max((e.clientX-t.left)/n,.2),.8);v(r),se(`yafm.split.ratio`,r)},i=()=>{window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,i)};window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,i)},Ni=(e,t,n)=>{t&&jn({x:e.clientX,y:e.clientY,directory:t,refresh:n})},Pi=(0,F.useCallback)((e,t)=>{Rn(n=>n[e]===t?n:{...n,[e]:t})},[]),Fi=(0,F.useCallback)(e=>Pi(`primary`,e),[Pi]),Ii=(0,F.useCallback)(e=>Pi(`secondary`,e),[Pi]),Li=(e,t)=>{Ln[e]!==0&&Bn(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},Ri=async(e,t=!1)=>{let n=An;if(jn(null),!n)return;let r=e===null?await Ft(n.directory,t):await Ct(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;W(),Hn(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},zi=(0,F.useCallback)(()=>{let{tabs:e}=G.current,t=e.find(e=>e.id===Us(G.current));t&&t.index>0&&fi(t.id,t.history[t.index-1],t.index-1)},[fi]),Bi=(0,F.useCallback)(()=>{let{tabs:e}=G.current,t=e.find(e=>e.id===Us(G.current));t&&t.index<t.history.length-1&&fi(t.id,t.history[t.index+1],t.index+1)},[fi]),Vi=(0,F.useCallback)(()=>{let{tabs:e}=G.current,t=e.find(e=>e.id===Us(G.current));t&&Z(t)===`files`&&t.listing?.parent&&yi(t.listing.parent)},[yi]),Hi=(0,F.useRef)(null),Ui=(0,F.useCallback)(()=>{for(let e of G.current.tabs)e.listing&&q(e.id,e.listing.path,!0)},[q]),Wi=(0,F.useCallback)(e=>{e.length!==0&&(dr(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),_r())},[_r]),Gi=(0,F.useCallback)(async e=>{let t=await St(e);t.length!==0&&Wi(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[Wi]),Ki=(0,F.useCallback)(e=>{let t=new Set(e);dr(e=>e.filter(e=>!t.has(e.path)))},[]),qi=(0,F.useCallback)(async e=>{let t=Kr.current;if(!t)return;let n=await St(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>g(e.path))),i=n.filter(e=>!r.has(g(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};Vt(a),await Qe(a),an(e=>e+1)},[]),Ji=(0,F.useCallback)(async e=>{let t=Kr.current;if(!t)return;let n=new Set(e.map(g)),r=(t.favorites??[]).filter(e=>!n.has(g(e.path)));if(r.length===(t.favorites??[]).length)return;let i={...t,favorites:r};Vt(i),await Qe(i),an(e=>e+1)},[]),Yi=(0,F.useCallback)(()=>dr([]),[]),Xi=(0,F.useRef)(-1),Zi=(0,F.useCallback)(e=>{ir(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),or(e.move),e.entries.length>0&&_r()},[_r]),Qi=(0,F.useCallback)(async()=>{if(b.available)try{let e=await Bt();Xi.current=e.sequence,Zi(e)}catch{}},[Zi]),$i=(0,F.useCallback)(async e=>{e.length!==0&&await bt(e,!1)&&await Qi()},[Qi]),ea=(0,F.useRef)(ur);ea.current=ur;let ta=(0,F.useRef)(cr);ta.current=cr;let na=(0,F.useRef)(!1);(0,F.useEffect)(()=>{let e=j?.trayAutoShow??!0,t=t=>{e&&ut(t)&&(ta.current||(na.current=!0),_r())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{na.current&&window.setTimeout(()=>{na.current&&ea.current.length===0&&lr(!1),na.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[_r,j?.trayAutoShow]),(0,F.useEffect)(()=>{let e=()=>gr(e=>Ws(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let ra=(0,F.useCallback)(async()=>{let e=ea.current;if(e.length>0){let t=await St(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));dr(e=>e.filter(e=>n.has(e.path)))}await Qi()},[Qi]),ia=(0,F.useCallback)(()=>{ra(),dn(e=>e+1),Ui()},[ra,Ui]),aa=(0,F.useCallback)(e=>{let t=Ws(e);gr(t),he(`yafm.tray.position`,t)},[]),oa=(0,F.useCallback)(()=>{na.current=!1,cr?lr(!1):_r()},[_r,cr]),sa=(0,F.useCallback)(async(t,n,r)=>{let i=await Ht(t,n,r);i.cancelled||(i.ok?(r&&Ki(t),dn(e=>e+1),Ui(),Qi()):be(i.error??e(`the_files_could_not_be_transferred`)))},[Ui,Qi,Ki]);(0,F.useEffect)(()=>{if(b.available)return Kn().then(e=>{er.current=e,Wn(e)},()=>void 0),b.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=er.current.find(t=>t.id===e.id);return!t||t.state!==e.state});er.current=n,Wn(n),r&&Jn(!0)})},[]);let ca=(0,F.useCallback)(()=>{qn().then(()=>Kn().then(e=>{er.current=e,Wn(e)},()=>void 0))},[]);(0,F.useEffect)(()=>{if(!b.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await Bt();if(!e||t.sequence===Xi.current)return;Xi.current=t.sequence,Zi(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Zi]);let la=(0,F.useCallback)(async e=>{let t=e?await Wt():await Tt();t.ok?(dn(e=>e+1),Ui()):t.error&&!t.error.startsWith(`Nothing to`)&&be(t.error)},[Ui]),ua=(0,F.useRef)(H);(0,F.useEffect)(()=>{ua.current!==H&&(ua.current=H,Ui())},[H,Ui]);let da=(0,F.useCallback)((e,t)=>{let{tabs:n}=G.current,r=n.find(t=>t.id===e);if(!r||Z(r)!==`files`)return;let i=Q(r),a=Kr.current?.defaultView??Ne,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||fe.iconSize,gridSize:r.view?.gridSize||a.gridSize||fe.gridSize,sort:r.view?.sort??fe.sort,sortDescending:r.view?.sortDescending??fe.sortDescending,...t};K(e,()=>({view:o})),Hi.current!==null&&window.clearTimeout(Hi.current),Hi.current=window.setTimeout(()=>{Hi.current=null,De(i,o)},250)},[K]),fa=(0,F.useCallback)(e=>{da(Us(G.current),e)},[da]),pa=(0,F.useCallback)(e=>{let t=Kr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??Ne,columns:e}};Vt(n),Qe(n)},[]),ma=(0,F.useCallback)(e=>{let t=Kr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??Ne,showImages:e}};Vt(n),Qe(n)},[]),ha=(0,F.useCallback)(e=>{let t=Kr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??Ne,imageStripHeight:e}};Vt(n),Qe(n)},[]),ga=(0,F.useCallback)((e,t,n,r)=>{let i=G.current.tabs.find(t=>t.id===e);if(!i||Z(i)!==`files`||!i.listing)return;let a=Q(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));K(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),He(a,t,n,r)},[K]),_a=(0,F.useCallback)((e,t)=>{let n=G.current.tabs.find(t=>t.id===e);if(!n)return;let r=Gs(n,Kr.current?.defaultView??Ne);da(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending}),q(e,Q(n),!0)},[da,q]),va=(0,F.useCallback)((e,t)=>{r(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),ya=(0,F.useCallback)(()=>{_e().then(te,()=>te([]))},[]),ba=(0,F.useCallback)(e=>{let t=(e.openTabs??[]).map(Vr).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...Ks(e),fresh:!1})),i=Math.min(Math.max(e.activeTab??0,0),n.length-1);r(n),l(n[i].id);let a=n[i];return(Z(a)===`files`?q(a.id,Q(a),!0):Promise.resolve()).then(()=>{for(let e of n)e!==a&&Z(e)===`files`&&q(e.id,Q(e),!0)}),!0},[q]),xa=(0,F.useCallback)(e=>{let t=Jr.current;if(Jr.current=[],t.length===0)return;let n=t.filter(e=>!Rs.has(e));for(let e of t)n.includes(e)||zs(e);if(n.length===0)return;let{tabs:r}=G.current;if(!e&&r.length===1&&r[0].fresh){di(r[0].id,n[0]),zs(n[0]);for(let e of n.slice(1))J(e),zs(e);return}let i=n.map(e=>{let t=J(e);return zs(e),t}).at(-1);i&&setTimeout(()=>l(i),0)},[J,di]),Sa=(0,F.useCallback)(()=>{$e().then(e=>{Vt(e),It(e.recentLimit);let t=zt(e.shortcuts);nn(t),Nt(_t(t,`openInNewTab`)),an(e=>e+1),qr.current||(qr.current=!0,xa(e.restoreTabs&&ba(e)))},()=>{It(10),qr.current=!0,xa(!1)})},[xa,ba]),Ca=(0,F.useCallback)(()=>{ue().then(kt,()=>kt([]))},[]),Y=(0,F.useCallback)(()=>{Ye().then(x,()=>x([]))},[]),X=n.filter(e=>!e.hidden),wa=X.map(Hs),Ta=wa.join(`
`),Ea=Math.max(X.findIndex(e=>e.id===i),0);(0,F.useEffect)(()=>{if(!j?.restoreTabs)return;let e=setTimeout(()=>void Xe(wa,Ea),700);return()=>clearTimeout(e)},[Ta,Ea,j?.restoreTabs]),(0,F.useEffect)(()=>{let{tabs:e,activeId:t}=G.current,n=e.find(e=>e.id===t);n&&n.fresh&&Z(n)===`files`&&q(n.id,Q(n),!0),ya(),Sa(),Y(),En().then(ae,()=>ae(null))},[q,ya,Sa,Y]),(0,F.useEffect)(()=>{if(kn().then(we,()=>we(null)),b.available)return b.on(e=>{let t=e;t.type===`update.checked`&&t.data&&we(t.data)})},[]),(0,F.useEffect)(()=>{if(b.available)return b.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&f({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&be(e(`pairing_code_code`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&be(n.data.error??e(`pairing_failed`))}})},[e]),(0,F.useEffect)(()=>{let e=setInterval(Y,3e4);return()=>clearInterval(e)},[Y]),(0,F.useEffect)(()=>{R===`home`&&(Ca(),Y())},[R,L.id,Ca,Y]),(0,F.useEffect)(()=>{if(!b.available)return;let e=b.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=G.current,i=t.data.startup===!0;i&&Rs.has(n)?zs(n):i&&!qr.current?Jr.current.includes(n)||Jr.current.push(n):(i&&r.length===1&&r[0].fresh?di(r[0].id,n):Br(n)?di(Us(G.current),n):J(n),i&&zs(n))});return b.send({type:`app.ready`}),e},[di,J]),(0,F.useEffect)(()=>{if(b.available)return b.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:i}=t.data;r(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let r=e.slice(),a=e[t];return r[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},r})})},[]),(0,F.useEffect)(()=>{if(b.available)return b.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:i}=t.data;r(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let r=e.slice(),a=e[t];return r[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},r})})},[]),(0,F.useEffect)(()=>{let e=e=>{if(dt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),zi();return}if(e.key===`BrowserForward`){e.preventDefault(),Bi();return}if(e.key===`Escape`&&T.open){e.preventDefault(),W();return}let t=gt(e);if(O(M,`closeTab`,t)&&(e.preventDefault(),_i(Us(G.current))),O(M,`newTab`,t)&&(e.preventDefault(),J()),O(M,`reopenTab`,t)&&(e.preventDefault(),vi()),O(M,`goBack`,t)&&(e.preventDefault(),zi()),O(M,`goForward`,t)&&(e.preventDefault(),Bi()),O(M,`goUp`,t)&&(e.preventDefault(),Vi()),O(M,`find`,t)&&(e.preventDefault(),R===`files`?Ir():Lr()),O(M,`location`,t)&&(e.preventDefault(),ln(e=>e+1)),O(M,`home`,t)){e.preventDefault();let t=y.find(e=>e.kind===`home`)?.path;t&&yi(t)}O(M,`iconsView`,t)&&(e.preventDefault(),R===`files`&&fa({mode:`grid`})),O(M,`detailsView`,t)&&(e.preventDefault(),R===`files`&&fa({mode:`list`})),O(M,`nextTab`,t)&&(e.preventDefault(),bi(1)),O(M,`previousTab`,t)&&(e.preventDefault(),bi(-1)),O(M,`hidden`,t)&&(e.preventDefault(),Me().then(()=>{dn(e=>e+1),Ui()})),O(M,`undo`,t)&&(e.preventDefault(),la(!0)),O(M,`redo`,t)&&(e.preventDefault(),la(!1)),O(M,`splitView`,t)?(e.preventDefault(),xi()):Object.keys(M).some(e=>e!==`openInNewTab`&&O(M,e,t))||R!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Wr(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[M,R,T.open,_i,vi,J,zi,Bi,Vi,Ir,Lr,W,Wr,fa,bi,yi,y,Ui,la,xi]),(0,F.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),zi()):(e.button===4||e.button===9)&&(e.preventDefault(),Bi())},t=e=>{(e.button===3||e.button===4||e.button===8||e.button===9)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[zi,Bi]),(0,F.useEffect)(()=>{if(b.available)return b.on(e=>{let t=e;if(t.type===`app.navigation`)switch(t.data?.direction){case`back`:zi();break;case`forward`:Bi()}})},[zi,Bi]);let Da=(0,F.useMemo)(()=>{let e=new Set;for(let t of n){if(Z(t)!==`files`)continue;let n=Q(t);if(n&&!xt(n)){if(a(n)){let t=Js(u(n));t&&e.add(t)}else e.add(n)}}return[...e]},[n]),Oa=Da.join(`\0`);(0,F.useEffect)(()=>{b.available&&b.send({type:`fs.watch`,payload:{paths:Da,owner:`app`}})},[Oa,i]);let ka=Z(V)===`files`?Q(V):``;(0,F.useEffect)(()=>{b.available&&b.send({type:`fs.focus`,payload:{path:ka||null}})},[ka]),(0,F.useEffect)(()=>{if(b.available)return b.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,r=G.current.tabs.filter(e=>Z(e)===`files`&&h(Q(e),n)),i=G.current.tabs.filter(e=>{let t=Q(e);return Z(e)===`files`&&t.length>0&&a(t)&&h(u(t),n)});if(r.length!==0||i.length!==0){Ve(n);for(let e of i){let t=G.current.tabs.find(t=>t.id===e.id),r=t?Q(t):``;t&&Z(t)===`files`&&!t.loading&&a(r)&&h(u(r),n)&&q(e.id,r,!0)}r.length!==0&&de(n,!1,H).then(e=>{for(let t of r){let n=G.current.tabs.find(e=>e.id===t.id);n&&Z(n)===`files`&&h(Q(n),e.path)&&(n.loading?window.setTimeout(()=>{let n=G.current.tabs.find(e=>e.id===t.id);n&&!n.loading&&Z(n)===`files`&&h(Q(n),e.path)&&K(t.id,()=>({listing:e}))},300):K(t.id,()=>({listing:e})))}},()=>void 0)}})},[H,q,K]);let Aa=L.index>0,ja=L.index<L.history.length-1,Ma=(e,t)=>{let n=Gs(e,Tr),r=e.listing?.path??e.history[e.index]??``,i=a(r),o=i&&s(r);return(0,I.jsx)(Rt,{platform:S?.platform,confirmDelete:j?.confirmDelete??!1,cutPaths:sr,previewVideoAudio:j?.previewVideoAudio??!1,previewVideoAutoplay:j?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?Sn:wn,onActivate:()=>On(t?`primary`:`secondary`),enableShortcuts:(!xr||(t?N===`primary`:N===`secondary`))&&(!i||o),error:e.error,find:e.id===V.id?{...T,currentPath:Fr<0?null:U[Fr]}:void 0,selectMatchesToken:e.id===V.id?We:0,imageStripHeight:Ar,listing:e.listing,loading:e.loading,onImageStripHeight:ha,readOnly:i&&!o||xt(e.listing?.path??``),onOpen:(t,n)=>{n?J(t):q(e.id,t)},onOpenFile:(t,n)=>{xt(t)?jt(t).catch(e=>void be(qs(e))):m(t)?j?.archiveHandler??!1?n?J(t):q(e.id,t):Be(t):a(t)?(async()=>{let e=await le(t,Dt.current,Xs(t));if(!e.path&&ke(e.error)){let n=u(t),r=je(n);r&&Ie(n);let i=await Fe(n,!!r);i&&(xe(n,i),e=await le(t,Dt.current,i))}e.path?Be(e.path):e.error&&be(e.error)})():Be(t)},onRefresh:()=>{let t=e.listing?.path;t&&pi(t)},onLoadMore:()=>void ei(e.id),onEnsureComplete:()=>void oi(e.id),selectAllToken:e.id===V.id?ii:0,onRename:mi,onSelectionCountChange:t?Fi:Ii,onSetTags:(t,n,r)=>ga(e.id,t,n,r),selectionMenuRequest:t?zn.primary:zn.secondary,onSort:t=>_a(e.id,t),onPaste:ia,onClipboardChanged:()=>void Qi(),onTransfer:sa,onAddToTray:e=>void Gi(e),onAddFavorite:e=>void qi(e),onRemoveFavorite:e=>void Ji(e),favoritePaths:Yt,onExtractArchive:(e,t)=>void Ra(e,t),openOnSingleClick:j?.openOnSingleClick??!1,pendingRename:Vn&&t===(N===`primary`)&&h(Vn.directory,e.listing?.path??``)?Vn.path:null,pendingRenameToken:Vn?.token??0,refreshToken:un,shortcuts:M,showCheckboxes:j?.showCheckboxes??!0,showImages:kr,view:n})},Na=T.open&&(0,I.jsx)(jr,{current:Fr,focusToken:ze,matchCase:T.matchCase,mode:T.mode,onClose:W,onMatchCase:()=>Ae(e=>({...e,matchCase:!e.matchCase})),onMode:()=>Ae(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Gr(1),onPrevious:()=>Gr(-1),onQuery:e=>Ae(t=>({...t,query:e})),onRegex:()=>Ae(e=>({...e,regex:!e.regex})),query:T.query,regex:T.regex,total:U.length,onSelectMatches:U.length>0?()=>qe(e=>e+1):void 0}),Pa=R===`files`&&a(z),Fa=Pa&&s(z),Ia=Pa&&L.listing?.archiveEncrypted===!0,La=async(t,n)=>{let r=u(t),i=await pe(r,n,Dt.current,Xs(r));if(!i.ok&&ke(i.error)){let e=je(r);e&&Ie(r);let t=await Fe(r,!!e);t&&(xe(r,t),i=await pe(r,n,Dt.current,t))}i.ok?(pi(n),Re(),q(L.id,n,!0)):be(`${e(`could_not_extract_the_archive`)}${i.error?`\n${i.error}`:``}`)},Ra=async(e,t)=>{let n=u(e),r=Js(n);if(!r)return;if(t===`choose`){let e=await pt(r);e&&await La(n,e);return}let i=t===`named`;if(t===`auto`){let e=h(n,z)?L.listing?.entries??[]:(await de(n,!1,!1,Dt.current,Xs(n))).entries;i=!(e.length===1&&e[0].isDirectory)}let a=r.includes(`\\`)?`\\`:`/`,o=i?`${r.replace(/[\\/]+$/,``)}${a}${Ys(n)}`:r;await La(n,o)},za=async e=>{Pa&&await Ra(z,e)},Ba=async()=>{Pa&&await Ra(z,`choose`)},Va=(0,I.jsxs)(rc,{children:[(0,I.jsx)($,{"data-shortcut":k(M.goBack),disabled:!Aa,onClick:e=>{L.index>0&&A(e)?J(L.history[L.index-1]):zi()},title:e(`back`),type:`button`,children:(0,I.jsx)(bn,{})}),(0,I.jsx)($,{"data-shortcut":k(M.goForward),disabled:!ja,onClick:e=>{L.index<L.history.length-1&&A(e)?J(L.history[L.index+1]):Bi()},title:e(`forward`),type:`button`,children:(0,I.jsx)(fn,{})}),(0,I.jsx)($,{"data-shortcut":k(M.goUp),disabled:R!==`files`||!br,onClick:e=>{br&&(A(e)?J(br):yi(br))},title:e(`up_one_level`),type:`button`,children:(0,I.jsx)(sn,{})}),(0,I.jsx)(Hr,{focusToken:cn,icon:Mr,label:R===`files`?void 0:e(us[R]),onContextMenu:R===`files`?(e,t,n)=>Pn({x:t,y:n,path:e}):void 0,onNavigate:yi,path:R===`files`?z:yr}),R===`files`&&(!Pa||Fa)&&(0,I.jsx)($,{onClick:e=>Ni(e,z,()=>void q(L.id,z,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,I.jsx)(pn,{})}),(0,I.jsx)($,{"data-shortcut":k(M.find),onClick:()=>R===`files`?Ir():Lr(),title:e(`search`),type:`button`,children:(0,I.jsx)(xn,{})}),Ln.primary>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Es,{}),(0,I.jsx)($,{onClick:e=>Li(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,I.jsx)(Zt,{})})]}),(0,I.jsx)(`span`,{ref:Zn,style:{display:`contents`}}),Pa&&(0,I.jsxs)(ic,{children:[(0,I.jsx)(Es,{}),Ia&&(0,I.jsxs)(ac,{title:e(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,I.jsx)(Jt,{size:12}),e(`encrypted`)]}),(0,I.jsx)($,{onClick:()=>void Ba(),onContextMenu:e=>{e.preventDefault(),Nn({x:e.clientX,y:e.clientY})},title:e(`extract_archive`),type:`button`,children:(0,I.jsx)(_n,{})}),(0,I.jsx)(tt,{icon:(0,I.jsx)(qt,{size:15}),onChange:e=>{let t=Number(e);wt(t),Dt.current=t,Pa&&q(L.id,z,!0)},options:Vs.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`archive_encoding`)}: ${e(Vs.find(e=>e.value===String(yt))?.label??`auto`)}`,value:String(yt)})]})]}),Ha=E.open?{...E,index:it}:null;return(0,I.jsx)(ht,{value:Or,children:(0,I.jsxs)($s,{$rounded:Oe,children:[(0,I.jsx)(Xn,{settings:j,theme:Kt}),(0,I.jsx)(zo,{activeId:L.id,onClose:_i,onNewTab:()=>J(),onReorder:va,onTransferToTab:sa,onSelect:l,onViewChange:fa,onColumns:pa,onShowImages:ma,showImages:kr,tasks:Un,onClearTasks:ca,activityOpen:Gn,onActivityOpenChange:Jn,trayCount:ur.length+rr.length,trayVisible:cr,onToggleTray:oa,split:xr,canSplit:R===`files`,onToggleSplit:xi,details:mn,canDetails:R===`files`||R===`recycle`||R===`gallery`,onToggleDetails:()=>hn(e=>!e),currentFolder:R===`files`&&!xt(z)?z:``,shortcuts:M,view:Er,tabs:n.filter(e=>!e.hidden).map(t=>{let r=Z(t),i=Q(t),o=t.splitWith?n.find(e=>e.id===t.splitWith):void 0,s=o?Q(o):``;return{id:t.id,kind:r,path:o?`${i}  |  ${s}`:i,place:r===`files`?ct(Or,i):void 0,archive:r===`files`&&a(i),split:!!o,title:r===`files`?ot(Or,i,ee(i)||e(`files`)):e(us[r]),partner:o?{title:ot(Or,s,ee(s)||e(`files`)),place:ct(Or,s)}:void 0}})}),(0,I.jsxs)(ec,{children:[(0,I.jsx)(ti,{activeKind:R,currentPath:R===`files`?yr:``,drives:ne,historyVersion:Qt,onNavigate:yi,onOpenView:gi,homePath:y.find(e=>e.kind===`home`)?.path??``,places:y,recent:Ot,recentLimit:Mt,version:rn}),(0,I.jsxs)(tc,{children:[(0,I.jsxs)(dc,{children:[(0,I.jsxs)(fc,{children:[R!==`files`&&Va,(0,I.jsx)(nc,{children:(0,I.jsxs)(F.Suspense,{fallback:null,children:[R!==`files`&&E.open&&(0,I.jsx)(jr,{current:it,focusToken:et,matchCase:E.matchCase,mode:E.mode,onClose:Rr,onMatchCase:()=>Ze(e=>({...e,matchCase:!e.matchCase})),onMode:()=>Ze(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Ur(1),onPrevious:()=>Ur(-1),onQuery:e=>Ze(t=>({...t,query:e})),onRegex:()=>Ze(e=>({...e,regex:!e.regex})),placeholder:e(`search`),query:E.query,regex:E.regex,total:D,onSelectMatches:R===`gallery`||R===`recycle`?()=>qe(e=>e+1):void 0}),R===`files`?xr&&B?(0,I.jsxs)(sc,{ref:ji,children:[(0,I.jsxs)(cc,{style:{flex:_},children:[(0,I.jsxs)(oc,{$active:N===`primary`,onPointerDown:()=>On(`primary`),children:[(0,I.jsx)($,{"data-shortcut":k(M.goBack),disabled:!Aa,onClick:e=>{let t=L.index-1;t<0||(A(e)?J(L.history[t]):fi(L.id,L.history[t],t))},title:e(`back`),type:`button`,children:(0,I.jsx)(bn,{})}),(0,I.jsx)($,{"data-shortcut":k(M.goForward),disabled:!ja,onClick:e=>{let t=L.index+1;t>=L.history.length||(A(e)?J(L.history[t]):fi(L.id,L.history[t],t))},title:e(`forward`),type:`button`,children:(0,I.jsx)(fn,{})}),(0,I.jsx)($,{"data-shortcut":k(M.goUp),disabled:!br,onClick:e=>{br&&(A(e)?J(br):q(L.id,br))},title:e(`up_one_level`),type:`button`,children:(0,I.jsx)(sn,{})}),(0,I.jsx)(Hr,{focusToken:N===`primary`?cn:void 0,onContextMenu:(e,t,n)=>Pn({x:t,y:n,path:e}),onNavigate:(e,t)=>t?J(e):void q(L.id,e),path:z}),(0,I.jsx)($,{onClick:e=>Ni(e,z,()=>void q(L.id,z,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,I.jsx)(pn,{})}),(0,I.jsx)($,{"data-shortcut":k(M.find),onClick:Ir,title:e(`search`),type:`button`,children:(0,I.jsx)(xn,{})}),Ln.primary>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Es,{}),(0,I.jsx)($,{onClick:e=>Li(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,I.jsx)(Zt,{})})]})]}),Ma(L,!0),N===`primary`&&Na]}),(0,I.jsx)(lc,{onDoubleClick:()=>v(.5),onPointerDown:Mi,title:e(`drag_to_resize_double_click_to_reset`)}),(0,I.jsxs)(cc,{$enter:!0,style:{flex:1-_},children:[(0,I.jsxs)(oc,{$active:N===`secondary`,onPointerDown:()=>On(`secondary`),children:[(0,I.jsx)($,{"data-shortcut":k(M.goBack),disabled:B.index<=0,onClick:e=>{let t=B.index-1;t<0||(A(e)?J(B.history[t]):fi(B.id,B.history[t],t))},title:e(`back`),type:`button`,children:(0,I.jsx)(bn,{})}),(0,I.jsx)($,{"data-shortcut":k(M.goForward),disabled:B.index>=B.history.length-1,onClick:e=>{let t=B.index+1;t>=B.history.length||(A(e)?J(B.history[t]):fi(B.id,B.history[t],t))},title:e(`forward`),type:`button`,children:(0,I.jsx)(fn,{})}),(0,I.jsx)($,{"data-shortcut":k(M.goUp),disabled:!wr,onClick:e=>{wr&&(A(e)?J(wr):q(B.id,wr))},title:e(`up_one_level`),type:`button`,children:(0,I.jsx)(sn,{})}),(0,I.jsx)(Hr,{focusToken:N===`secondary`?cn:void 0,onContextMenu:(e,t,n)=>Pn({x:t,y:n,path:e}),onNavigate:(e,t)=>t?J(e):void q(B.id,e),path:Sr}),(0,I.jsx)($,{onClick:e=>Ni(e,Sr,()=>void q(B.id,Sr,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,I.jsx)(pn,{})}),(0,I.jsx)($,{"data-shortcut":k(M.find),onClick:Ir,title:e(`search`),type:`button`,children:(0,I.jsx)(xn,{})}),Ln.secondary>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Es,{}),(0,I.jsx)($,{onClick:e=>Li(`secondary`,e),title:e(`selection_menu`),type:`button`,children:(0,I.jsx)(Zt,{})})]})]}),Ma(B,!1),N===`secondary`&&Na]})]}):(0,I.jsxs)(I.Fragment,{children:[Va,(0,I.jsxs)(uc,{children:[Ma(L,!0),Na]})]}):R===`home`?(0,I.jsx)(Ns,{platform:S?.platform,drives:ne,find:Ha,historyVersion:Qt,onSearchMatches:vt,homePath:y.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:Y,onHistoryChanged:()=>en(e=>e+1),onAddToTray:e=>void Gi(e),onAddFavorite:e=>void qi(e),onRemoveFavorite:e=>void Ji(e),favoritePaths:Yt,onExtractArchive:(e,t)=>void Ra(e,t),settingsVersion:rn,theme:Kt,onOpen:yi,onLayoutChanged:Sa,onPlacesChanged:te,onRecentCleared:Ca,places:y,recent:Ot,recentLimit:Mt,visibilityVersion:un}):R===`settings`?(0,I.jsx)(Ps,{appInfo:S,find:Ha,focusSection:Te,onSearchMatches:vt,onSettingsChanged:Sa}):R===`gallery`?(0,I.jsx)(Fs,{platform:S?.platform,toolbarSlot:Yn,onStatusChange:$n,confirmDelete:j?.confirmDelete??!1,find:Ha,onSearchMatches:vt,openOnSingleClick:j?.openOnSingleClick??!1,onAddToTray:e=>void Gi(e),onAddFavorite:e=>void qi(e),onRemoveFavorite:e=>void Ji(e),favoritePaths:Yt,onExtractArchive:(e,t)=>void Ra(e,t),shortcuts:M,showCheckboxes:j?.showCheckboxes??!0,selectMatchesToken:We,onPreviewChange:wi,view:Er}):(0,I.jsx)(Is,{find:Ha,toolbarSlot:Yn,onStatusChange:$n,onOpenLocation:yi,onShowDetails:()=>hn(!0),platform:S?.platform,selectMatchesToken:We,onPreviewChange:Ti})]})},R)]}),(R===`files`||R===`gallery`||R===`recycle`)&&(0,I.jsx)(ft,{emptyNote:e(`nothing_selected`),info:Oi,onWidth:Si,open:mn,selectionNote:ki,videoAudio:j?.previewVideoAudio??!1,videoAutoplay:j?.previewVideoAutoplay??!1,width:gn})]}),(0,I.jsxs)(_c,{children:[(0,I.jsx)(`span`,{children:Ai}),S?(0,I.jsxs)(pc,{children:[(0,I.jsxs)(`span`,{children:[`v`,S.version,` · `,S.platform]}),S.debug&&(0,I.jsx)(gc,{children:`debug`}),oe?.available&&(0,I.jsxs)(mc,{onClick:e=>{Ee(`updates`),gi(`settings`,A(e))},title:e(`version_version_is_available`,{version:oe.latest}),type:`button`,children:[(0,I.jsx)(hc,{}),e(`update_available`)]})]}):(0,I.jsx)(`span`,{children:e(`browser_preview`)})]})]})]}),(0,I.jsx)(rt,{clipboardItems:rr,clipboardMove:ar,currentDirectory:R===`files`?yr:``,items:ur,onAdd:e=>void Gi(e),onClear:Yi,onClose:()=>lr(!1),onCopyToClipboard:e=>void $i(e),onPosition:aa,onRemove:Ki,onTransfer:sa,position:hr,visible:cr}),An&&(0,I.jsx)(mt,{creationOnly:!0,directory:An.directory,menu:{x:An.x,y:An.y,paths:[],background:!0},onClose:()=>jn(null),onCreateFile:e=>void Ri(e),onCreateFolder:e=>void Ri(null,e),shortcuts:M}),P&&(0,I.jsx)(mt,{allowCompression:!0,directory:Js(P.path)??P.path,menu:{x:P.x,y:P.y,paths:[P.path]},onAddToTray:e=>void Gi(e),onAddFavorite:e=>void qi(e),onRemoveFavorite:e=>void Ji(e),favoritePaths:Yt,onExtractArchive:(e,t)=>void Ra(e,t),onArchiveCreated:e=>{e&&pi(Js(P.path)??P.path)},onClose:()=>Pn(null),onCompressTo:(e,t)=>In({paths:e,name:t}),onCopy:(e,t)=>void bt(e,t),onDelete:e=>void At(e,!1).then(()=>pi(Js(P.path)??P.path)),onOpen:(e,t)=>t?J(e):void q(L.id,e),onOpenFile:e=>void Be(e),onPaste:e=>void Et(e).then(t=>{t.ok&&pi(e)}),onRefresh:()=>pi(P.path),shortcuts:M,target:{path:P.path,isDirectory:!0}}),Fn&&(0,I.jsx)(Gt,{initialDirectory:Js(P?.path??z)??z,initialName:Fn.name,onCancel:()=>In(null),onCompress:async e=>{let t=await Lt(Fn.paths,e);return!t.ok&&t.error&&be(t.error),t.ok}}),Mn&&(0,I.jsx)(Se,{items:[{label:e(`extract_here`),onSelect:()=>void za(`here`)},{label:e(`extract_to_a_folder_named_after_the_archive`),onSelect:()=>void za(`named`)},{label:e(`auto_extract_to_the_current_folder`),onSelect:()=>void za(`auto`)}],onClose:()=>Nn(null),x:Mn.x,y:Mn.y}),fr&&(0,I.jsx)(nr,{action:fr.prompt.action,delaySeconds:fr.prompt.delaySeconds,hits:fr.prompt.hits,onCancel:()=>{fr.resolve(!1),pr(null)},onConfirm:()=>{fr.resolve(!0),pr(null)},permanent:fr.prompt.permanent},fr.id),(0,I.jsx)(vr,{}),(0,I.jsx)(Cr,{}),d&&(0,I.jsx)(hs,{code:d.code,deviceName:d.deviceName,onAccept:()=>{Ut(d.requestId,!0),f(null)},onReject:()=>{Ut(d.requestId,!1),f(null)}}),(0,I.jsx)(as,{}),(0,I.jsx)(re,{})]})})}var $s=x.div`
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
`,ec=x.div`
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
`,tc=x.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,nc=x.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${we}
`,rc=x.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,$=Ts,ic=x.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,ac=x.span`
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
`,oc=x.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,sc=x.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,cc=x.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?Le:``}
`,lc=x.div`
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
        ${Oe}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,uc=x.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,dc=x.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,fc=x.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,pc=x.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,mc=x.button`
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
`,hc=x.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,gc=x.span`
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
`,_c=x.footer`
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
`;document.documentElement.dataset.theme=S()?`dark`:`light`;var vc=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,vc),window.addEventListener(`pagehide`,We);var yc=document.getElementById(`root`),bc=new URLSearchParams(window.location.search),xc=bc.get(`picker`),Sc=bc.get(`filter`)??``,Cc=xc===`folder`||xc===`file`||xc===`save`?(0,F.lazy)(()=>Ms(()=>import(`./PickerWindow-B7CFq5_A.js`).then(e=>({default:e.PickerWindow})),__vite__mapDeps([14,1,2,7,4,5,3,6,9,12,0,8,10]))):null;yc&&(qe(),(0,In.createRoot)(yc).render((0,I.jsx)(F.StrictMode,{children:(0,I.jsx)(te,{children:Cc===null?(0,I.jsx)(Qs,{}):(0,I.jsx)(F.Suspense,{fallback:null,children:(0,I.jsx)(Cc,{defaultExtension:bc.get(`ext`)??``,extensions:Sc?Sc.split(`;`).filter(Boolean):[],types:bc.get(`types`)??``,typeIndex:Number(bc.get(`type`)??0)||0,initial:bc.get(`initial`)??``,initialName:bc.get(`name`)??``,mode:xc===`folder`?`folder`:`file`,multiple:bc.get(`multiple`)===`1`,save:xc===`save`})})})})));export{jn as A,kn as C,N as D,P as E,On as O,An as S,Pn as T,Wn as _,ms as a,zn as b,ti as c,vr as d,nr as f,Vn as g,Rn as h,ds as i,Dn as k,Hr as l,Bn as m,Ts as n,So as o,Yn as p,Es as r,bo as s,Ms as t,jr as u,Hn as v,Nn as w,Mn as x,Gn as y};