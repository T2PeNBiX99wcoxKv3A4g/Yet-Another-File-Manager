const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OverviewView-D7dwUrN9.js","assets/rolldown-runtime-XKyaHtl9.js","assets/dist-sR-t6Emc.js","assets/selectionMenu-CQPdpP0k.js","assets/format-CWgBbA72.js","assets/format-Cd7QcbnN.css","assets/Icons-NY0trHLk.js","assets/concepts-D5cg96U9.js","assets/textSearch-DmAzgeJI.js","assets/FileList-CYl5phCw.js","assets/IconPicker-Dw9ZMd15.js","assets/SettingsView-C2n1Ooia.js","assets/GalleryView-Dgr3je05.js","assets/RecycleView-DJhxEsGX.js","assets/PickerWindow-CblpJWdp.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{C as t,D as n,E as r,T as i,a,b as o,c as s,f as c,g as l,h as u,i as d,l as f,m as p,p as ee,r as te,s as m,v as h,y as g}from"./format-CWgBbA72.js";import{_,a as v,c as ne,d as re,f as y,g as b,i as ie,n as x,o as ae,r as S,s as oe,u as C}from"./dist-sR-t6Emc.js";import{B as w,C as se,E as ce,I as le,K as ue,L as de,N as fe,O as pe,Q as T,R as me,S as he,V as E,X as ge,Y as _e,Z as ve,_ as ye,a as be,at as xe,b as Se,c as Ce,ct as we,d as Te,f as Ee,ft as De,g as D,gt as Oe,h as ke,k as Ae,l as je,lt as Me,m as Ne,nt as Pe,o as Fe,p as Ie,pt as Le,q as Re,rt as ze,u as Be,v as Ve,vt as He,w as Ue,x as We,y as Ge,z as Ke}from"./selectionMenu-CQPdpP0k.js";import{a as qe,f as Je,i as Ye,p as Xe,u as Ze}from"./concepts-D5cg96U9.js";import{A as Qe,B as $e,C as et,D as tt,E as nt,F as rt,G as it,J as at,K as ot,L as st,N as O,O as ct,Q as lt,R as ut,U as dt,V as ft,W as pt,X as mt,Y as k,Z as ht,_t as gt,c as _t,ct as vt,d as yt,dt as bt,et as A,ft as xt,g as St,gt as Ct,ht as wt,i as Tt,k as Et,l as Dt,lt as Ot,m as kt,mt as At,nt as jt,ot as j,p as Mt,pt as Nt,q as Pt,r as M,st as Ft,t as It,tt as Lt,ut as Rt,v as zt,vt as Bt,x as Vt,yt as Ht,z as Ut}from"./FileList-CYl5phCw.js";import{D as Wt,F as Gt,G as Kt,I as qt,J as Jt,K as Yt,O as Xt,P as Zt,T as Qt,V as $t,W as N,Y as en,Z as tn,_ as nn,_t as rn,a as an,ct as on,d as sn,et as cn,f as ln,i as un,it as dn,j as fn,k as pn,lt as mn,n as hn,p as gn,pt as _n,r as vn,st as yn,t as bn,ut as xn,v as Sn,z as Cn}from"./Icons-NY0trHLk.js";async function wn(){return y.available?await y.request(`app.info`):{version:`dev`,platform:`web`,logDirectory:``,rounded:!1,debug:!1}}async function Tn(e){y.available?await y.request(`system.openUrl`,{url:e}):window.open(e,`_blank`,`noreferrer`)}async function P(){y.available&&await Nn(`update.openLogs`)}async function En(e){y.available?await Nn(`update.openRelease`):e&&window.open(e,`_blank`,`noreferrer`)}async function Dn(){return y.available?await y.request(`update.status`)??null:null}async function On(){return y.available?await y.request(`update.check`):{current:`dev`,latest:`dev`,available:!1}}async function kn(){return y.available?await y.request(`update.download`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}async function An(){await Nn(`update.cancel`)}async function jn(){return y.available?await y.request(`update.install`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}function F(e){return y.on(t=>{t.type===`update.progress`&&e(t.data)})}function Mn(e){return y.on(t=>{t.type===`update.changelog`&&e(t.data)})}async function Nn(e,t,n=3e4){let r=await y.request(e,t,n);if(!r.ok)throw Error(r.error??`The action failed.`)}var I=e(_(),1),Pn=r(),Fn={managed:0,private:0,workingSet:0,available:0};async function In(){return y.available?await y.request(`app.memory`):Fn}async function Ln(){return y.available?await y.request(`app.memory.trim`):Fn}var Rn={registered:!1,pathMatches:!1,registeredPath:null};async function zn(){return y.available?await y.request(`app.scheme`):Rn}async function Bn(e){return y.available?await y.request(`app.scheme.set`,{enabled:e}):Rn}var Vn={supported:!1,mode:`none`,active:!1,error:null};async function Hn(){return y.available?await y.request(`app.startup`):Vn}async function Un(e){return y.available?await y.request(`app.startup.set`,{mode:e}):Vn}async function Wn(){return y.available?(await y.request(`app.tasks`)).tasks:[]}async function Gn(){y.available&&await y.request(`app.tasks.clear`)}var L=re(),Kn=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function qn(e){return Kn.test(e)}function Jn({settings:e,theme:t}){let n=e?.backgroundSource??null,r=n?.startsWith(`url:`)?n.slice(4):p(n)?n:null,i=n?.startsWith(`file:`)?n.slice(5):null,a=fe(i),o=n?.startsWith(`builtin:`)?Ye(n,t):r??a,s=r===null?i===null?n!==null&&qe(n):qn(i):qn(r.split(/[?#]/)[0]);if(!n||!o)return null;let c=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,L.jsxs)(Yn,{"aria-hidden":!0,children:[s?(0,L.jsx)(Zn,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o,style:{filter:c}}):(0,L.jsx)(Xn,{src:o,style:{filter:c}}),(0,L.jsx)(Qn,{})]})}var Yn=b.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,Xn=b.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,Zn=b.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,Qn=b.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);

    /* The light artwork is drawn pale already, so it only keeps a faint accent glow. */
    html[data-theme="light"] & {
        background: radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.06), transparent 60%);
    }
`,$n=n();function er({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let o=C(),s=(0,I.useRef)(null),[c,l]=(0,I.useState)(()=>Math.max(1,Math.ceil(n))),u=e??`delete`;return(0,I.useEffect)(()=>{s.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));l(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,$n.createPortal)((0,L.jsx)(ir,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,L.jsxs)(ar,{role:`alertdialog`,"aria-modal":`true`,children:[(0,L.jsx)(or,{children:o(`protected_folder`)}),(0,L.jsx)(sr,{children:o(`these_paths_are_protected_by_the_safety_settings`)}),(0,L.jsx)(cr,{children:t.map(e=>(0,L.jsxs)(lr,{children:[(0,L.jsx)(ur,{children:e.path}),(0,L.jsx)(dr,{children:o(`protected_by_pattern`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,L.jsx)(fr,{children:tr(o,u,r??!1)}),(0,L.jsx)(pr,{children:nr(o,u)}),(0,L.jsx)(mr,{children:o(`this_waits_seconds_s_before_the_button_works`,{seconds:n})}),(0,L.jsxs)(hr,{children:[(0,L.jsx)(R,{onClick:i,ref:s,type:`button`,children:o(`cancel`)}),(0,L.jsx)(z,{disabled:c>0,onClick:a,type:`button`,children:c>0?rr(o,u,c):rr(o,u,0)})]})]})}),document.body)}function tr(e,t,n){switch(t){case`delete`:return e(n?`deletes_permanently`:`moves_to_the_recycle_bin`);case`move`:return e(`moves_the_entries`);case`rename`:return e(`renames_the_entry`);case`write`:return e(`writes_into_this_folder`)}}function nr(e,t){switch(t){case`delete`:return e(`nothing_has_been_deleted`);case`move`:return e(`nothing_has_been_moved`);case`rename`:return e(`nothing_has_been_renamed`);case`write`:return e(`nothing_has_been_written`)}}function rr(e,t,n){let r=n>0?t===`delete`?`delete_anyway_seconds_s`:t===`move`?`move_anyway_seconds_s`:t===`rename`?`rename_anyway_seconds_s`:`write_anyway_seconds_s`:t===`delete`?`delete_anyway`:t===`move`?`move_anyway`:t===`rename`?`rename_anyway`:`write_anyway`;return n>0?e(r,{seconds:n}):e(r)}var ir=b.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Fe}
`,ar=b.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Be}
`,or=b.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,sr=b.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,cr=b.div`
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
`,lr=b.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,ur=b.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,dr=b.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,fr=b.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,pr=b.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,mr=b.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,hr=b.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,R=b.button`
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
`,z=b.button`
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
`;function gr(){let e=C(),[t,n]=(0,I.useState)(null),r=(0,I.useRef)(null),i=(0,I.useRef)(null);(0,I.useEffect)(()=>(ke(e=>new Promise(t=>{r.current=t,n(e)})),()=>ke(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,I.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,$n.createPortal)((0,L.jsx)(_r,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,L.jsxs)(B,{role:`alertdialog`,"aria-modal":`true`,children:[(0,L.jsx)(vr,{children:e(`notice`)}),(0,L.jsx)(V,{children:t}),(0,L.jsx)(yr,{children:(0,L.jsx)(br,{onClick:a,ref:i,type:`button`,children:e(`ok`)})})]})}),document.body)}var _r=b.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Fe}
`,B=b.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Be}
`,vr=b.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,V=b.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,yr=b.div`
    display: flex;
    justify-content: flex-end;
`,br=b.button`
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
`;function xr(){let e=C(),[t,n]=(0,I.useState)(null),[r,i]=(0,I.useState)(``),a=(0,I.useRef)(null),o=(0,I.useRef)(null);(0,I.useEffect)(()=>(D((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>D(null)),[]),(0,I.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,$n.createPortal)((0,L.jsx)(Sr,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,L.jsxs)(Cr,{role:`dialog`,"aria-modal":`true`,children:[(0,L.jsx)(wr,{children:e(`archive_password`)}),(0,L.jsx)(Tr,{children:t.wrong?e(`that_password_did_not_open_the_archive_try_again`):e(`this_archive_is_encrypted_enter_its_password`)}),(0,L.jsx)(H,{title:t.archive,children:t.archive}),(0,L.jsx)(Er,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,L.jsxs)(Dr,{children:[(0,L.jsx)(Or,{onClick:()=>s(null),type:`button`,children:e(`cancel`)}),(0,L.jsx)(kr,{disabled:r.length===0,onClick:c,type:`button`,children:e(`ok`)})]})]})}),document.body)}var Sr=b.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Fe}
`,Cr=b.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Be}
`,wr=b.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Tr=b.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,H=b.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Er=b.input`
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
`,Dr=b.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,Or=b.button`
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
`,kr=b(Or)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Ar({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:ee,onClose:te,onSelectMatches:m}){let h=C(),g=(0,I.useRef)(null),_=c??h(`search_this_folder`);(0,I.useEffect)(()=>{let e=g.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let v=e=>{e(),g.current?.focus()};return(0,L.jsxs)(jr,{children:[(0,L.jsx)(yn,{}),(0,L.jsx)(Mr,{"aria-label":_,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),te())},placeholder:_,ref:g,spellCheck:!1,value:e}),!s&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Nr,{children:i===0?`0/0`:`${a+1}/${i}`}),m&&(0,L.jsx)(U,{disabled:i===0,onClick:m,title:h(`select_all_matches`),type:`button`,children:(0,L.jsx)(sn,{size:12})}),(0,L.jsx)(U,{$chevron:!0,onClick:()=>v(u),title:h(`previous_match_shift_enter`),type:`button`,children:(0,L.jsx)(ln,{size:12})}),(0,L.jsx)(U,{$chevron:!0,$down:!0,onClick:()=>v(d),title:h(`next_match_enter`),type:`button`,children:(0,L.jsx)(ln,{size:12})})]}),(0,L.jsx)(Pr,{$on:n,onClick:()=>v(f),title:h(`match_case`),type:`button`,children:`Aa`}),(0,L.jsx)(Pr,{$on:r,onClick:()=>v(p),title:h(`regular_expression`),type:`button`,children:`.*`}),!s&&(0,L.jsx)(Fr,{$on:t===`hide`,onClick:()=>v(ee),title:h(t===`hide`?`non_matching_entries_are_hidden`:`non_matching_entries_are_dimmed`),type:`button`,children:t===`hide`?(0,L.jsx)(pn,{size:12}):(0,L.jsx)(Xt,{size:12})}),(0,L.jsx)(U,{onClick:te,title:h(`close_search_esc`),type:`button`,children:(0,L.jsx)(Sn,{size:12})})]})}var jr=b.div`
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
`,Mr=b.input`
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
`,Nr=b.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,U=b.button`
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
`,Pr=b.button`
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
`,Fr=b(Pr)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`,Ir=`yafm://`,Lr={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function Rr(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function zr(e){return`${Ir}${e===`home`?`overview`:e}`}function Br(e){return Rr(e)?Lr[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Vr(e){let t=e.trim();if(t.length===0)return null;if(!Rr(t))return t;let n=Lr[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?zr(n):null}function Hr({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=C(),s=Pt(),[c,l]=(0,I.useState)(!1),[u,d]=(0,I.useState)(``),[f,p]=(0,I.useState)([]),[ee,te]=(0,I.useState)(0),[m,h]=(0,I.useState)(null),[g,_]=(0,I.useState)(null),[v,ne]=(0,I.useState)(null),re=(0,I.useRef)(null),y=(0,I.useRef)(null),b=(0,I.useRef)(0);(0,I.useEffect)(()=>{if(!yt(e)){ne(null);return}let t=St(e);if(!t){ne(null);return}let n=!0;return _t().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);ne({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&ne(null)),()=>{n=!1}},[e]),(0,I.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,I.useEffect)(()=>{r&&r!==b.current&&(b.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,I.useEffect)(()=>{c&&re.current?.select()},[c]),(0,I.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[c]);let ie=()=>{d(e.replace(/\\/g,`/`)),l(!0)},x=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,I.useEffect)(()=>{if(!c){p([]);return}let e=W(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{_e(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),te(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let ae=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,I.useLayoutEffect)(()=>{if(!c){h(null);return}let e=()=>{let e=y.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);h({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,L.jsxs)(Xr,{onPointerDown:e=>e.stopPropagation(),ref:y,children:[(0,L.jsxs)($r,{children:[(0,L.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),te(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),te(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(ee,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?ae(f[Math.min(ee,f.length-1)],e.ctrlKey||e.metaKey):x(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:re,spellCheck:!1,value:u}),(0,L.jsx)(ei,{onClick:()=>l(!1),title:o(`cancel`),type:`button`,children:(0,L.jsx)(Sn,{size:12})}),(0,L.jsx)(ei,{$apply:!0,onClick:x,onPointerDown:e=>e.stopPropagation(),title:o(`open_this_path`),type:`button`,children:(0,L.jsx)(sn,{size:14})})]}),f.length>0&&m&&(0,$n.createPortal)((0,L.jsx)(Zr,{onPointerDown:e=>e.stopPropagation(),style:{left:m.left,top:m.top,width:m.width},children:f.map((e,t)=>(0,L.jsxs)(Qr,{$active:t===ee,onClick:t=>ae(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>te(t),type:`button`,children:[(0,L.jsx)(Qe,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,L.jsx)(K,{children:e.name})]},e.path))}),document.body)]});let S=t?[{label:t,path:e,icon:n}]:Ur(e,v)??Gr(e,s.places);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Kr,{onClick:ie,title:o(`click_to_type_a_path`),children:S.map((t,n)=>(0,L.jsxs)(qr,{$last:n===S.length-1,children:[n>0&&(0,L.jsx)(G,{children:(0,L.jsx)(ln,{size:9})}),(0,L.jsxs)(Yr,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):_({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,L.jsx)(Jr,{children:(0,L.jsx)(O,{place:t.place,size:13})}):t.icon&&(0,L.jsx)(Jr,{children:t.icon}),t.label]})]},t.path))}),g&&(0,L.jsx)(be,{items:[{label:o(`open`),icon:(0,L.jsx)(un,{size:14}),onSelect:()=>i(g.path)},{label:o(`open_in_new_tab`),icon:(0,L.jsx)(dn,{size:14}),onSelect:()=>i(g.path,!0)},{label:o(`copy_as_path`),icon:(0,L.jsx)(nn,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(g.path)},...Rr(g.path)?[{label:o(`open_with`),icon:(0,L.jsx)(Wt,{size:14}),onSelect:()=>void At(g.path)},{label:o(`properties`),icon:(0,L.jsx)(Zt,{size:14}),onSelect:()=>void gt([g.path])}]:[]],onClose:()=>_(null),x:g.x,y:g.y})]})}function Ur(e,t){let n=St(e);if(!n)return null;let r=nt(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,L.jsx)(on,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function Wr(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function Gr(e,t){let n=Wr(e),r=-1,i=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>g(t.path,e.path));t>r&&(r=t,i=e)}return i&&r>=0&&n.splice(0,r+1,{label:i.name,path:n[r].path,place:i}),n}function W(e){if(Rr(e)||yt(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var Kr=b.div`
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
`,qr=b.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Jr=b.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,G=b.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,Yr=b.button`
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
`,Xr=b.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,Zr=b.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${Ie}
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
`,Qr=b.button`
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
`,K=b.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$r=b.div`
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
`,ei=b.button`
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
`;function ti({places:e,drives:t,recent:n,recentLimit:r,currentPath:i,activeKind:c,homePath:l=``,version:u=0,historyVersion:d=0,hiddenViews:f=[],onNavigate:p,onOpenView:ee}){let[te,h]=(0,I.useState)([]),_=C(),[v,ne]=(0,I.useState)(null),re=Pt();(0,I.useEffect)(()=>{Ze().then(e=>{ne(e),h(st(e).filter(e=>e.pinned))},()=>{ne(null),h([])})},[u]),(0,I.useEffect)(()=>{if(!y.available)return;let e=te.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||l).filter(e=>e.length>0);return y.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>y.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[te,l]);let b=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>g(e.path,t));return{name:v?.placeNames?.[t]??n?.name??(a(t)||t),path:t,kind:`folder`,icon:n?.icon??v?.placeIcons?.[t]??null}}),ie=c===`files`;return(0,L.jsxs)(oi,{children:[(0,L.jsxs)(si,{children:[!f.includes(`home`)&&(0,L.jsxs)(J,{$active:c===`home`,onClick:e=>ee(`home`,j(e)),title:_(`overview`),type:`button`,children:[(0,L.jsx)(Jt,{}),(0,L.jsx)(pi,{children:_(`overview`)})]}),!f.includes(`recycle`)&&(0,L.jsxs)(J,{$active:c===`recycle`,onClick:e=>ee(`recycle`,j(e)),title:_(`recycle_bin`),type:`button`,children:[(0,L.jsx)(rn,{}),(0,L.jsx)(pi,{children:_(`recycle_bin`)})]}),!f.includes(`gallery`)&&(0,L.jsxs)(J,{$active:c===`gallery`,onClick:e=>ee(`gallery`,j(e)),title:_(`gallery`),type:`button`,children:[(0,L.jsx)($t,{}),(0,L.jsx)(pi,{children:_(`gallery`)})]})]}),te.map(e=>(0,L.jsxs)(li,{children:[(0,L.jsxs)(J,{as:`div`,$active:!1,children:[(0,L.jsx)(fi,{children:(0,L.jsx)(rt,{panel:e,size:16})}),(0,L.jsx)(pi,{children:_(e.title)})]}),(0,L.jsx)(ui,{children:(0,L.jsxs)(di,{children:[e.kind===`quick`&&b(e).map(e=>(0,L.jsxs)(J,{$active:ie&&g(i,e.path),onClick:t=>p(e.path,j(t)),title:e.path,type:`button`,children:[(0,L.jsx)(O,{place:e}),(0,L.jsx)(pi,{children:e.name})]},e.path)),e.kind===`recent`&&n.slice(0,r).map(e=>{let t=ot(re,e.path);return(0,L.jsxs)(J,{$active:ie&&g(i,e.path),onClick:t=>e.isDirectory?p(e.path,j(t)):void xe(e.path),title:e.path,type:`button`,children:[t&&re.useIcons?(0,L.jsx)(O,{place:t}):(0,L.jsx)(Qe,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,L.jsx)(pi,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,L.jsx)(ri,{historyVersion:d,onNavigate:p}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,L.jsxs)(J,{$active:ie&&g(i,e.name),onClick:t=>p(e.name,j(t)),title:e.name,type:`button`,children:[(0,L.jsx)(Qt,{}),(0,L.jsxs)(pi,{children:[m(e),(0,L.jsxs)(mi,{children:[s(e.freeSpace),` free`]}),(0,L.jsx)(hi,{children:(0,L.jsx)(gi,{$used:t,$tone:o(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,L.jsx)(ii,{onNavigate:p,path:e.path||l})]})})]},e.id)),!f.includes(`settings`)&&(0,L.jsx)(ci,{children:(0,L.jsxs)(J,{$active:c===`settings`,onClick:e=>ee(`settings`,j(e)),title:_(`settings`),type:`button`,children:[(0,L.jsx)(Zt,{}),(0,L.jsx)(pi,{children:_(`settings`)})]})})]})}var q=10,ni=40;function ri({historyVersion:e=0,onNavigate:t}){let n=C(),[r,i]=(0,I.useState)(null),a=Pt();return(0,I.useEffect)(()=>{T().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=ot(a,e.path);return(0,L.jsxs)(J,{$active:!1,onClick:n=>t(e.path,j(n)),title:h(n,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,L.jsx)(O,{place:r}):(0,L.jsx)(Qe,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,L.jsx)(pi,{children:r?.name||e.name})]},e.path)})}function ii({path:e,onNavigate:t}){let[n,r]=(0,I.useState)(null);(0,I.useEffect)(()=>{e&&(r(null),_e(e,!1).then(r,()=>r(null)))},[e]),(0,I.useEffect)(()=>{if(e&&y.available)return y.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&g(n.data.path,e)&&_e(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,q),o=i.filter(e=>!e.isDirectory).slice(0,ni);return(0,L.jsxs)(L.Fragment,{children:[a.map(e=>(0,L.jsx)(ai,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,L.jsx)(ai,{entry:e,onNavigate:t},e.fullPath))]})}function ai({entry:e,onNavigate:t}){let n=Pt(),r=ot(n,e.fullPath);return(0,L.jsxs)(J,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,j(n)):void xe(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,L.jsx)(O,{place:r}):(0,L.jsx)(Qe,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,L.jsx)(pi,{children:r?.name||e.name})]})}var oi=b.aside`
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

    &:not(:hover) ${()=>mi},
    &:not(:hover) ${()=>hi} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,si=b.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,ci=b(si)`
    margin-top: auto;
`,li=b.div`
    display: flex;
    flex-direction: column;
`,ui=b.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${oi}:hover ${li}:hover > & {
        grid-template-rows: 1fr;
    }
`,di=b.div`
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
`,J=b.button`
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
`,fi=b.span`
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
`,pi=b.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,mi=b.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,hi=b.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,gi=b.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,_i=b.span`
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
`;function vi({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=C(),a=(0,I.useRef)(null),o=e.filter(e=>e.state===`running`).length,s=e.length;return(0,I.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)},t=()=>r(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[n,r]),(0,L.jsxs)(bi,{ref:a,children:[(0,L.jsxs)(xi,{$active:n,onClick:()=>r(!n),title:o>0?h(i,o,`k_1_operation_running`,`count_operations_running`):i(`status_center`),type:`button`,children:[(0,L.jsx)(_n,{size:13}),s>0&&(0,L.jsx)(_i,{children:s>9?`9+`:s})]}),n&&(0,L.jsxs)(Si,{children:[(0,L.jsxs)(Ci,{children:[(0,L.jsxs)(wi,{children:[(0,L.jsx)(_n,{size:12}),i(`status_center`)]}),(0,L.jsxs)(Ti,{children:[(0,L.jsx)(Ei,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`clear_finished`)}),(0,L.jsx)(Di,{onClick:()=>r(!1),title:i(`close`),type:`button`,children:(0,L.jsx)(Sn,{size:10})})]})]}),e.length===0?(0,L.jsx)(ki,{children:i(`no_operations_yet`)}):(0,L.jsx)(Oi,{children:e.map(e=>(0,L.jsx)(yi,{task:e},e.id))})]})]})}function yi({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,L.jsxs)(Ai,{children:[(0,L.jsxs)(ji,{children:[(0,L.jsx)(Mi,{$state:e.state,children:e.state===`done`?(0,L.jsx)(sn,{size:10}):e.state===`failed`?(0,L.jsx)(Sn,{size:10}):(0,L.jsx)(Ni,{})}),(0,L.jsx)(Pi,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,L.jsxs)(Fi,{children:[s(e.bytesDone),` / `,s(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,L.jsxs)(Fi,{children:[e.done,` / `,e.total]})]}),i&&(0,L.jsx)(Ii,{children:(0,L.jsx)(Li,{$percent:r,$indeterminate:t===0})}),e.error&&(0,L.jsx)(Ri,{children:e.error})]})}var bi=b.div`
    position: relative;
    display: flex;
`,xi=b.button`
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
`,Si=b.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${Ie}
    ${je}
`,Ci=b.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,wi=b.span`
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
`,Ti=b.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Ei=b.button`
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
`,Di=b.button`
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
`,Oi=b.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,ki=b.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Ai=b.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${Fe}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,ji=b.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,Mi=b.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,Ni=b.span`
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
`,Pi=b.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Fi=b.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Ii=b.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,Li=b.div`
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
`,Ri=b.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function zi(){return y.available?(await y.request(`fs.history.list`)).entries:[]}async function Bi(e){return y.available?(await y.request(`fs.history.undoTo`,{id:e})).ok:!1}function Vi(){let e=C(),[t,n]=(0,I.useState)(!1),[r,i]=(0,I.useState)([]),[a,o]=(0,I.useState)(!1),s=(0,I.useRef)(null),c=()=>void zi().then(i,()=>i([]));(0,I.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)},i=()=>n(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,i),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,i)}},[t]);let l=async e=>{o(!0);try{await Bi(e),c()}finally{o(!1)}};return(0,L.jsxs)(Wi,{ref:s,children:[(0,L.jsx)(Gi,{$active:t,onClick:()=>n(e=>!e),title:e(`history`),type:`button`,children:(0,L.jsx)(gn,{size:14})}),t&&(0,L.jsxs)(Ki,{children:[(0,L.jsxs)(qi,{children:[(0,L.jsxs)(Ji,{children:[(0,L.jsx)(gn,{size:12}),e(`history`)]}),(0,L.jsx)(Yi,{onClick:()=>n(!1),title:e(`close`),type:`button`,children:(0,L.jsx)(Sn,{size:10})})]}),r.length===0?(0,L.jsx)(ia,{children:e(`no_operations_yet`)}):(0,L.jsx)(Xi,{children:r.map(t=>(0,L.jsxs)(Zi,{children:[(0,L.jsxs)(Qi,{children:[(0,L.jsxs)($i,{children:[(0,L.jsx)(Ui,{label:t.label}),Hi(e,t.label)]}),(0,L.jsx)(ea,{children:f(t.at)})]}),t.paths.length>0&&(0,L.jsxs)(ta,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,L.jsx)(na,{children:(0,L.jsx)(ra,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`undo`)})})]},t.id))})]})]})}function Hi(e,t){if(t===`new_folder`)return e(`new_folder`);if(t===`new_file`)return e(`new_file`);if(t===`paste_text`)return e(`paste_text`);if(t===`paste_image`)return e(`paste_image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`move`?`move_count_items`:t===`copy`?`copy_count_items`:`delete_count_items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`rename`)} ${i[1]}`:t}function Ui({label:e}){return e.startsWith(`delete`)?(0,L.jsx)(rn,{size:13}):e.startsWith(`move`)||e.startsWith(`copy`)?(0,L.jsx)(nn,{size:13}):e.startsWith(`rename`)?(0,L.jsx)(cn,{size:13}):e.startsWith(`compress`)?(0,L.jsx)(hn,{size:13}):e.startsWith(`new`)?(0,L.jsx)(dn,{size:13}):(0,L.jsx)(un,{size:13})}var Wi=b.div`
    position: relative;
    display: flex;
`,Gi=b.button`
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
`,Ki=b.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${Ie}
    ${je}
`,qi=b.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Ji=b.span`
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
`,Yi=b.button`
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
`,Xi=b.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,Zi=b.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,Qi=b.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,$i=b.span`
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
`,ea=b.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,ta=b.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,na=b.div`
    display: flex;
    justify-content: flex-end;
`,ra=b.button`
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
`,ia=b.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,aa=(e=>(e[e.Border=-1]=`Border`,e[e.Data=0]=`Data`,e[e.Function=1]=`Function`,e[e.Position=2]=`Position`,e[e.Timing=3]=`Timing`,e[e.Alignment=4]=`Alignment`,e))(aa||{}),oa=[0,1],sa=[1,0],ca=[2,3],la=[3,2],ua={L:oa,M:sa,Q:ca,H:la},da=/^\d*$/,fa=/^[A-Z0-9 $%*+./:-]*$/,pa=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`,ma=1,ha=40,ga=3,_a=3,va=40,ya=10,ba=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],xa=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],Sa=class{constructor(e,t,n,r){if(this.version=e,this.ecc=t,e<ma||e>ha)throw RangeError(`Version value out of range`);if(r<-1||r>7)throw RangeError(`Mask value out of range`);this.size=e*4+17;let i=Array.from({length:this.size}).fill(!1);for(let e=0;e<this.size;e++)this.modules.push(i.slice()),this.types.push(i.map(()=>0));this.drawFunctionPatterns();let a=this.addEccAndInterleave(n);if(this.drawCodewords(a),r===-1){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let n=this.getPenaltyScore();n<e&&(r=t,e=n),this.applyMask(t)}}this.mask=r,this.applyMask(r),this.drawFormatBits(r)}size;mask;modules=[];types=[];getModule(e,t){return e>=0&&e<this.size&&t>=0&&t<this.size&&this.modules[t][e]}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0,aa.Timing),this.setFunctionModule(e,6,e%2==0,aa.Timing);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n===0&&r===0||n===0&&r===t-1||n===t-1&&r===0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.ecc[1]<<3|e,n=t;for(let e=0;e<10;e++)n=n<<1^(n>>>9)*1335;let r=(t<<10|n)^21522;for(let e=0;e<=5;e++)this.setFunctionModule(8,e,X(r,e));this.setFunctionModule(8,7,X(r,6)),this.setFunctionModule(8,8,X(r,7)),this.setFunctionModule(7,8,X(r,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,X(r,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,X(r,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,X(r,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;for(let e=0;e<18;e++){let n=X(t,e),r=this.size-11+e%3,i=Math.floor(e/3);this.setFunctionModule(r,i,n),this.setFunctionModule(i,r,n)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){let i=Math.max(Math.abs(r),Math.abs(n)),a=e+r,o=t+n;a>=0&&a<this.size&&o>=0&&o<this.size&&this.setFunctionModule(a,o,i!==2&&i!==4,aa.Position)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!==1,aa.Alignment)}setFunctionModule(e,t,n,r=aa.Function){this.modules[t][e]=n,this.types[t][e]=r}addEccAndInterleave(e){let t=this.version,n=this.ecc;if(e.length!==La(t,n))throw RangeError(`Invalid argument`);let r=xa[n[0]][t],i=ba[n[0]][t],a=Math.floor(Ia(t)/8),o=r-a%r,s=Math.floor(a/r),c=[],l=Ra(i);for(let t=0,n=0;t<r;t++){let r=e.slice(n,n+s-i+(t<o?0:1));n+=r.length;let a=za(r,l);t<o&&r.push(0),c.push(r.concat(a))}let u=[];for(let e=0;e<c[0].length;e++)c.forEach((t,n)=>{(e!==s-i||n>=o)&&u.push(t[e])});return u}drawCodewords(e){if(e.length!==Math.floor(Ia(this.version)/8))throw RangeError(`Invalid argument`);let t=0;for(let n=this.size-1;n>=1;n-=2){n===6&&(n=5);for(let r=0;r<this.size;r++)for(let i=0;i<2;i++){let a=n-i,o=n+1&2?r:this.size-1-r;!this.types[o][a]&&t<e.length*8&&(this.modules[o][a]=X(e[t>>>3],7-(t&7)),t++)}}}applyMask(e){if(e<0||e>7)throw RangeError(`Mask value out of range`);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw Error(`Unreachable`)}!this.types[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[t][a]===n?(r++,r===5?e+=ga:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*va),n=this.modules[t][a],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*va}for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[a][t]===n?(r++,r===5?e+=ga:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*va),n=this.modules[a][t],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*va}for(let t=0;t<this.size-1;t++)for(let n=0;n<this.size-1;n++){let r=this.modules[t][n];r===this.modules[t][n+1]&&r===this.modules[t+1][n]&&r===this.modules[t+1][n+1]&&(e+=_a)}let t=0;for(let e of this.modules)t=e.reduce((e,t)=>e+ +!!t,t);let n=this.size*this.size,r=Math.ceil(Math.abs(t*20-n*10)/n)-1;return e+=r*ya,e}getAlignmentPatternPositions(){if(this.version===1)return[];{let e=Math.floor(this.version/7)+2,t=this.version===32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}finderPenaltyCountPatterns(e){let t=e[1],n=t>0&&e[2]===t&&e[3]===t*3&&e[4]===t&&e[5]===t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]===0&&(e+=this.size),t.pop(),t.unshift(e)}};function Y(e,t,n){if(t<0||t>31||e>>>t)throw RangeError(`Value out of range`);for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function X(e,t){return!!(e>>>t&1)}var Ca=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw RangeError(`Invalid argument`);this.bitData=n.slice()}getData(){return this.bitData.slice()}},wa=[1,10,12,14],Ta=[2,9,11,13],Ea=[4,8,16,16];function Da(e,t){return e[Math.floor((t+7)/17)+1]}function Oa(e){let t=[];for(let n of e)Y(n,8,t);return new Ca(Ea,e.length,t)}function ka(e){if(!Ma(e))throw RangeError(`String contains non-numeric characters`);let t=[];for(let n=0;n<e.length;){let r=Math.min(e.length-n,3);Y(Number.parseInt(e.substring(n,n+r),10),r*3+1,t),n+=r}return new Ca(wa,e.length,t)}function Aa(e){if(!Na(e))throw RangeError(`String contains unencodable characters in alphanumeric mode`);let t=[],n=0;for(;n+2<=e.length;n+=2){let r=pa.indexOf(e.charAt(n))*45;r+=pa.indexOf(e.charAt(n+1)),Y(r,11,t)}return n<e.length&&Y(pa.indexOf(e.charAt(n)),6,t),new Ca(Ta,e.length,t)}function ja(e){return e===``?[]:Ma(e)?[ka(e)]:Na(e)?[Aa(e)]:[Oa(Fa(e))]}function Ma(e){return da.test(e)}function Na(e){return fa.test(e)}function Pa(e,t){let n=0;for(let r of e){let e=Da(r.mode,t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}function Fa(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)===`%`?(t.push(Number.parseInt(e.substring(n+1,n+3),16)),n+=2):t.push(e.charCodeAt(n));return t}function Ia(e){if(e<ma||e>ha)throw RangeError(`Version number out of range`);let t=(16*e+128)*e+64;if(e>=2){let n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return t}function La(e,t){return Math.floor(Ia(e)/8)-ba[t[0]][e]*xa[t[0]][e]}function Ra(e){if(e<1||e>255)throw RangeError(`Degree out of range`);let t=[];for(let n=0;n<e-1;n++)t.push(0);t.push(1);let n=1;for(let r=0;r<e;r++){for(let e=0;e<t.length;e++)t[e]=Ba(t[e],n),e+1<t.length&&(t[e]^=t[e+1]);n=Ba(n,2)}return t}function za(e,t){let n=t.map(e=>0);for(let r of e){let e=r^n.shift();n.push(0),t.forEach((t,r)=>n[r]^=Ba(t,e))}return n}function Ba(e,t){if(e>>>8||t>>>8)throw RangeError(`Byte out of range`);let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return n}function Va(e,t,n=1,r=40,i=-1,a=!0){if(!(ma<=n&&n<=r&&r<=ha)||i<-1||i>7)throw RangeError(`Invalid value`);let o,s;for(o=n;;o++){let n=La(o,t)*8,i=Pa(e,o);if(i<=n){s=i;break}if(o>=r)throw RangeError(`Data too long`)}for(let e of[sa,ca,la])a&&s<=La(o,e)*8&&(t=e);let c=[];for(let t of e){Y(t.mode[0],4,c),Y(t.numChars,Da(t.mode,o),c);for(let e of t.getData())c.push(e)}let l=La(o,t)*8;Y(0,Math.min(4,l-c.length),c),Y(0,(8-c.length%8)%8,c);for(let e=236;c.length<l;e^=253)Y(e,8,c);let u=Array.from({length:Math.ceil(c.length/8)},()=>0);return c.forEach((e,t)=>u[t>>>3]|=e<<7-(t&7)),new Sa(o,t,u,i)}function Ha(e,t){let{ecc:n=`L`,boostEcc:r=!1,minVersion:i=1,maxVersion:a=40,maskPattern:o=-1,border:s=1}=t||{},c=typeof e==`string`?ja(e):Array.isArray(e)?[Oa(e)]:void 0;if(!c)throw Error(`uqr only supports encoding string and binary data, but got: ${typeof e}`);let l=Va(c,ua[n],i,a,o,r),u=Ua({version:l.version,maskPattern:l.mask,size:l.size,data:l.modules,types:l.types},s);return t?.invert&&(u.data=u.data.map(e=>e.map(e=>!e))),t?.onEncoded?.(u),u}function Ua(e,t=1){if(!t)return e;let{size:n}=e,r=n+t*2;e.size=r,e.data.forEach(e=>{for(let n=0;n<t;n++)e.unshift(!1),e.push(!1)});for(let n=0;n<t;n++)e.data.unshift(Array.from({length:r},e=>!1)),e.data.push(Array.from({length:r},e=>!1));let i=aa.Border;e.types.forEach(e=>{for(let n=0;n<t;n++)e.unshift(i),e.push(i)});for(let n=0;n<t;n++)e.types.unshift(Array.from({length:r},e=>i)),e.types.push(Array.from({length:r},e=>i));return e}function Wa(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Ga(e,t={}){let n=Ha(e,t),{pixelSize:r=10,whiteColor:i=`white`,blackColor:a=`black`}=t,o=n.size*r,s=n.size*r,c=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${o}">`,l=[];for(let e=0;e<n.size;e++)for(let t=0;t<n.size;t++){let i=t*r,a=e*r;n.data[e][t]&&l.push(`M${i},${a}h${r}v${r}h-${r}z`)}return c+=`<rect fill="${Wa(i)}" width="${s}" height="${o}"/>`,c+=`<path fill="${Wa(a)}" d="${l.join(``)}"/>`,c+=`</svg>`,c}function Ka({currentFolder:e}){let t=C(),[n,r]=(0,I.useState)(!1),[i,a]=(0,I.useState)(null),[o,s]=(0,I.useState)(!1),c=(0,I.useRef)(null);(0,I.useEffect)(()=>{if(!n)return;let e=()=>void Dt().then(a,()=>void 0);e();let t=window.setInterval(e,2500),i=e=>{c.current?.contains(e.target)||r(!1)},o=()=>r(!1);return window.addEventListener(`pointerdown`,i),window.addEventListener(`blur`,o),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,i),window.removeEventListener(`blur`,o)}},[n]),(0,I.useEffect)(()=>{let e=()=>void Dt().then(a,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let l=async e=>{s(!0);try{a(await e())}finally{s(!1)}},u=i?.shares.some(t=>g(t.path,e))??!1;return(0,L.jsxs)(qa,{ref:c,children:[(0,L.jsxs)(Ja,{$active:n,onClick:()=>r(e=>!e),title:t(`share_folders`),type:`button`,children:[(0,L.jsx)(on,{size:15}),i&&i.shares.length>0&&(0,L.jsx)(_i,{children:i.shares.length>9?`9+`:i.shares.length})]}),n&&(0,L.jsxs)(Ya,{children:[(0,L.jsxs)(Xa,{children:[(0,L.jsxs)(Za,{children:[(0,L.jsx)(mn,{size:12}),t(`share`)]}),(0,L.jsx)(Qa,{onClick:()=>r(!1),title:t(`close`),type:`button`,children:(0,L.jsx)(Sn,{size:10})})]}),(0,L.jsxs)($a,{children:[(0,L.jsxs)(eo,{children:[(0,L.jsx)(bn,{size:15}),(0,L.jsxs)(`span`,{children:[(0,L.jsx)(`strong`,{children:i?.deviceName||t(`this_device`)}),(0,L.jsx)(ao,{children:i?.fingerprint??``})]})]}),i?.shares.length===0&&(0,L.jsx)(oo,{children:t(`no_folders_are_shared_yet`)}),i?.shares.map(e=>(0,L.jsxs)(so,{children:[(0,L.jsxs)(co,{children:[(0,L.jsx)(lo,{title:e.path,children:e.name}),(0,L.jsx)(fo,{disabled:o,onClick:()=>void l(()=>zt(e.id)),title:t(`stop_sharing`),type:`button`,children:(0,L.jsx)(Sn,{size:10})})]}),(0,L.jsx)(uo,{title:e.path,children:e.path}),(0,L.jsxs)(po,{children:[(0,L.jsxs)(mo,{$active:e.mode===`client`,onClick:()=>void l(()=>et(e.id,`client`)),title:t(`only_paired_devices_can_open_this_folder_in_the_app`),type:`button`,children:[(0,L.jsx)(bn,{size:11}),t(`app`)]}),(0,L.jsxs)(mo,{$active:e.mode===`web`,onClick:()=>void l(()=>et(e.id,`web`)),title:t(`any_device_with_a_browser_can_open_this_folder`),type:`button`,children:[(0,L.jsx)(Gt,{size:11}),t(`web`)]})]})]},e.id)),(0,L.jsxs)(ho,{disabled:o||e.length===0||u,onClick:()=>void l(()=>Tt(e,`client`)),title:u?t(`this_folder_is_already_shared`):e,type:`button`,children:[(0,L.jsx)(dn,{size:12}),t(`share_this_folder`)]}),i?.webRunning&&(0,L.jsxs)(go,{children:[(0,L.jsxs)(_o,{children:[(0,L.jsx)(Gt,{size:12}),t(`browser_access`)]}),(0,L.jsxs)(no,{children:[(0,L.jsx)(ro,{children:i.urls.map(e=>(0,L.jsx)(vo,{onClick:()=>void Tn(e),type:`button`,children:e},e))}),i.preferredUrl&&(0,L.jsx)(to,{value:i.preferredUrl})]}),(0,L.jsx)(ao,{children:t(`open_one_of_these_addresses_on_any_device_on_the_same_network`)})]})]})]})]})}var qa=b.div`
    position: relative;
    display: flex;
`,Ja=b.button`
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
`,Ya=b.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${Ie}
    ${je}
`,Xa=b.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Za=b.span`
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
`,Qa=b.button`
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
`,$a=b.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,eo=b.div`
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
`;function to({value:e}){let t=C(),n=(0,I.useMemo)(()=>Ga(e,{ecc:`M`,border:2,pixelSize:4,blackColor:`#000000`,whiteColor:`#ffffff`}),[e]);return(0,L.jsx)(io,{dangerouslySetInnerHTML:{__html:n},role:`img`,title:t(`scan_the_code_to_open_this_share_on_a_phone`)})}var no=b.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,ro=b.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
`,io=b.div`
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
`,ao=b.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,oo=b.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,so=b.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,co=b.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,lo=b.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,uo=b.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,fo=b.button`
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
`,po=b.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,mo=b.button`
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
`,ho=b.button`
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
`,go=b.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,_o=b.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,vo=b.button`
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
`;function yo(){let e=C();return(0,L.jsx)(bo,{title:e(`always_applies_to_every_folder`),children:e(`global`)})}var bo=b.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`;function xo({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=C(),[s,c]=(0,I.useState)(!1),l=(0,I.useRef)(null);(0,I.useEffect)(()=>{if(!s)return;let e=()=>c(!1),t=e=>{l.current?.contains(e.target)||c(!1)},n=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`keydown`,n)}},[s]),(0,I.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=M.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,L.jsxs)(So,{ref:l,children:[(0,L.jsx)(Co,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`view`),type:`button`,children:e.mode===`grid`?(0,L.jsx)(qt,{size:14}):(0,L.jsx)(N,{size:14})}),s&&(0,L.jsxs)(wo,{children:[(0,L.jsxs)(To,{children:[(0,L.jsx)(tn,{size:11}),o(`view`)]}),(0,L.jsxs)(Do,{children:[(0,L.jsxs)(Oo,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,L.jsx)(N,{size:12}),` `,o(`list`)]}),(0,L.jsxs)(Oo,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,L.jsx)(qt,{size:12}),` `,o(`grid`)]})]}),(0,L.jsxs)(To,{children:[(0,L.jsx)(N,{size:11}),o(`list_icon_size`)]}),(0,L.jsxs)(ko,{children:[(0,L.jsx)(`input`,{"aria-label":o(`list_icon_size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,L.jsxs)(Ao,{children:[e.iconSize,`px`]})]}),(0,L.jsxs)(To,{children:[(0,L.jsx)(qt,{size:11}),o(`grid_size`)]}),(0,L.jsxs)(ko,{children:[(0,L.jsx)(`input`,{"aria-label":o(`grid_size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,L.jsxs)(Ao,{children:[e.gridSize,`px`]})]}),(0,L.jsxs)(To,{children:[(0,L.jsx)(xn,{size:11}),o(`columns`),(0,L.jsx)(yo,{}),(0,L.jsx)(Eo,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:o(`reset_column_widths`),type:`button`,children:o(`reset_widths`)})]}),M.map(e=>(0,L.jsxs)(jo,{children:[(0,L.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,L.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,L.jsxs)(jo,{children:[(0,L.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,L.jsx)(`span`,{children:o(`link_target_after_the_name`)})]}),(0,L.jsxs)(To,{children:[(0,L.jsx)(Xt,{size:11}),o(`preview_panel`),(0,L.jsx)(yo,{})]}),(0,L.jsxs)(jo,{children:[(0,L.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,L.jsx)(`span`,{children:o(`preview_under_the_list`)})]})]})]})}var So=b.div`
    position: relative;
    display: flex;
    height: 100%;
`,Co=b.button`
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
`,wo=b.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${Ie}
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
`,To=b.div`
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
`,Eo=b.button`
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
`,Do=b.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Oo=b.button`
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
`,ko=b.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,Ao=b.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,jo=b.label`
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
`,Mo=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),No=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),Po=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),Fo=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,L.jsx)(`path`,{d:`M2 5h6`})}),Io=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,L.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Lo=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,L.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,L.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function Ro({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:p,activityOpen:ee,onActivityOpenChange:te,trayCount:m,trayVisible:h,onToggleTray:g,split:_,canSplit:ne,onToggleSplit:re,details:y,canDetails:b,onToggleDetails:ie,shortcuts:x,currentFolder:ae}){let S=C(),w=v(),se=oe(),[ce,le]=(0,I.useState)({left:!1,right:!1}),[ue,de]=(0,I.useState)(null),[fe,pe]=(0,I.useState)(null),T=(0,I.useRef)(null),me=(0,I.useRef)(null),he=(0,I.useRef)(null),E=(0,I.useCallback)(()=>{let e=me.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;le(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,I.useEffect)(()=>{E();let e=me.current;if(!e)return;let t=new ResizeObserver(E);return t.observe(e),()=>t.disconnect()},[E,e.length]),(0,I.useEffect)(()=>()=>{T.current&&window.clearTimeout(T.current.timer)},[]),(0,I.useEffect)(()=>{he.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let ge=e=>me.current?.scrollBy({left:e,behavior:`smooth`}),_e=()=>{T.current&&window.clearTimeout(T.current.timer),T.current=null,pe(null)};return(0,L.jsxs)(Ho,{children:[(0,L.jsx)(Uo,{children:(0,L.jsx)(bn,{size:19})}),(0,L.jsxs)(Wo,{children:[ce.left&&(0,L.jsx)(Ko,{onClick:()=>ge(-180),title:S(`scroll_tabs_left`),type:`button`,children:(0,L.jsx)(Mo,{})}),(0,L.jsx)(Go,{onScroll:E,onWheel:e=>{let t=me.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:me,children:e.map(e=>(0,L.jsxs)(qo,{$active:e.id===t,$dragging:ue===e.id,$dropTarget:fe===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!ct(t.dataTransfer)||!zo(e)||(t.preventDefault(),T.current?.id===e.id))return;_e(),pe(e.id);let r=window.setTimeout(()=>{n(e.id),T.current=null},500);T.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(T.current?.id===e.id||fe===e.id)&&_e()},onDragEnd:()=>{de(null),_e()},onDragOver:t=>{(ue||ct(t.dataTransfer)&&zo(e))&&(t.preventDefault(),ct(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>de(e.id),onDrop:t=>{if(t.preventDefault(),ue)a(ue,e.id);else if(zo(e)&&ct(t.dataTransfer)){let{paths:r,move:i}=Et(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}de(null),_e()},onClick:()=>n(e.id),ref:e.id===t?he:void 0,title:e.path||e.title,type:`button`,children:[(0,L.jsx)(Bo,{tab:e}),(0,L.jsx)(Jo,{children:e.title}),e.partner&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Yo,{children:`|`}),(0,L.jsx)(Vo,{place:e.partner.place}),(0,L.jsx)(Jo,{children:e.partner.title})]}),(0,L.jsx)(Xo,{"data-shortcut":A(x.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:S(`close_tab`),children:(0,L.jsx)(Po,{})})]},e.id))}),ce.right&&(0,L.jsx)(Ko,{onClick:()=>ge(180),title:S(`scroll_tabs_right`),type:`button`,children:(0,L.jsx)(No,{})}),(0,L.jsx)(Zo,{"data-shortcut":A(x.newTab),onClick:i,title:S(`new_tab`),type:`button`,children:(0,L.jsx)(dn,{size:13})})]}),(0,L.jsx)(Qo,{...se}),(0,L.jsxs)($o,{children:[(0,L.jsx)(ts,{$active:_,"data-shortcut":A(x.splitView),disabled:!ne,onClick:re,title:S(_?`close_split_view`:`split_view`),type:`button`,children:(0,L.jsx)(xn,{size:15})}),(0,L.jsx)(ts,{$active:y,disabled:!b,onClick:ie,title:S(y?`hide_details_panel`:`show_details_panel`),type:`button`,children:(0,L.jsx)(tn,{size:15})}),(0,L.jsxs)(es,{$active:h,onClick:g,title:S(h?`hide_file_tray`:`show_file_tray`),type:`button`,children:[(0,L.jsx)(en,{size:14}),m>0&&(0,L.jsx)(_i,{children:m>9?`9+`:m})]}),(0,L.jsx)(Vi,{}),(0,L.jsx)(Ka,{currentFolder:ae}),(0,L.jsx)(vi,{tasks:f,onClear:p,open:ee,onOpenChange:te}),(0,L.jsx)(xo,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,L.jsx)(ns,{onClick:w.minimize,title:S(`minimize`),type:`button`,children:(0,L.jsx)(Fo,{})}),(0,L.jsx)(ns,{onClick:w.toggleMaximize,title:w.maximized?S(`restore`):S(`maximize`),type:`button`,children:w.maximized?(0,L.jsx)(Lo,{}):(0,L.jsx)(Io,{})}),(0,L.jsx)(rs,{onClick:w.close,title:S(`close`),type:`button`,children:(0,L.jsx)(Po,{})})]})]})}function zo(e){return e.kind===`files`&&(!c(e.path)||u(e.path))}function Bo({tab:e}){switch(e.kind){case`home`:return(0,L.jsx)(Cn,{size:13});case`settings`:return(0,L.jsx)(Zt,{size:13});case`recycle`:return(0,L.jsx)(rn,{size:13});default:return e.archive?(0,L.jsx)(hn,{size:13}):(0,L.jsx)(Vo,{place:e.place})}}function Vo({place:e}){return e?(0,L.jsx)(O,{place:e,size:13}):(0,L.jsx)(fn,{size:13})}var Ho=b.header`
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
`,Uo=b.span`
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
`,Wo=b.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,Go=b.div`
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
`,Ko=b.button`
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
`,qo=b.button`
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
`,Jo=b.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Yo=b.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,Xo=b.span`
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
`,Zo=b.button`
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
`,Qo=b.div`
    flex: 1;
    min-width: 28px;
`,$o=b.div`
    display: flex;
    flex-shrink: 0;
`,es=b.button`
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
`,ts=b.button`
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
`,ns=b.button`
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
`,rs=b(ns)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function is(){let[e,t]=(0,I.useState)(null),n=(0,I.useRef)(null),r=(0,I.useRef)(void 0);return(0,I.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`blur`,i),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`blur`,i),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,$n.createPortal)((0,L.jsx)(as,{tooltip:e}),document.body):null}function as({tooltip:e}){let t=(0,I.useRef)(null),[n,r]=(0,I.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,I.useState)(()=>e.bottom+6);return(0,I.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,L.jsxs)(os,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,L.jsx)(ss,{children:e.text}),e.shortcut&&(0,L.jsx)(cs,{children:e.shortcut})]})}var os=b.div`
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
    ${Fe}
`,ss=b.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,cs=b.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,ls={home:`overview`,settings:`settings`,recycle:`recycle_bin`,gallery:`gallery`},us=[{id:`ui`,label:`interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`interface`},{id:`names`,label:`file_names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`interface`},{id:`details`,label:`details_panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`interface`},{id:`path`,label:`address_bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`monospace`},{id:`mono`,label:`monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`text_preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`monospace`}];function ds(e){return`"${e.replaceAll(`"`,``)}"`}function fs(e){let t=document.documentElement.style;for(let n of us){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${ds(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function ps(){return y.available?(await y.request(`app.fonts`)).fonts??[]:[]}function ms({deviceName:e,code:t,onAccept:n,onReject:r}){let i=C(),a=(0,I.useRef)(null);return(0,I.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,$n.createPortal)((0,L.jsx)(hs,{children:(0,L.jsxs)(gs,{role:`alertdialog`,"aria-modal":`true`,children:[(0,L.jsxs)(_s,{children:[(0,L.jsx)(on,{size:15}),i(`pair_for_sharing`)]}),(0,L.jsx)(vs,{children:i(`device_wants_to_pair_with_this_device_for_sharing_folders`,{device:e})}),(0,L.jsx)(ys,{children:t}),(0,L.jsx)(bs,{children:i(`check_that_the_other_device_shows_the_same_code_before_accepting`)}),(0,L.jsxs)(xs,{children:[(0,L.jsx)(Ss,{onClick:r,type:`button`,children:i(`reject`)}),(0,L.jsx)(Cs,{onClick:n,ref:a,type:`button`,children:i(`accept`)})]})]})}),document.body)}var hs=b.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${Fe}
`,gs=b.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${Be}
`,_s=b.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,vs=b.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,ys=b.div`
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
`,bs=b.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,xs=b.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,Ss=b.button`
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
`,Cs=b(Ss)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,ws=b.button`
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
`,Ts=b.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,Es=`modulepreload`,Ds=function(e){return`/`+e},Os={},ks=function(e){return e.pathname.endsWith(`.css`)},As=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},js=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Ds(t,n);let r=s(t),i=ks(r);return As(Os,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Es,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Ms=(0,I.lazy)(()=>js(()=>import(`./OverviewView-D7dwUrN9.js`).then(e=>e.n).then(e=>({default:e.OverviewView})),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),Ns=(0,I.lazy)(()=>js(()=>import(`./SettingsView-C2n1Ooia.js`).then(e=>({default:e.SettingsView})),__vite__mapDeps([11,1,2,4,5,3,6,7,9,8,10]))),Ps=(0,I.lazy)(()=>js(()=>import(`./GalleryView-Dgr3je05.js`).then(e=>e.n).then(e=>({default:e.GalleryView})),__vite__mapDeps([12,1,2,4,5,3,6,9]))),Fs=(0,I.lazy)(()=>js(()=>import(`./RecycleView-DJhxEsGX.js`).then(e=>({default:e.RecycleView})),__vite__mapDeps([13,1,2,4,5,3,6,8]))),Is=0,Ls=new Set;function Rs(e){Ls.add(e),y.send({type:`app.navigate.done`,payload:{path:e}})}var zs=20,Bs=[{value:`0`,label:`auto`},{value:`932`,label:`japanese_cp932`},{value:`936`,label:`simplified_chinese_cp936`},{value:`950`,label:`traditional_chinese_cp950`},{value:`949`,label:`korean_cp949`},{value:`1252`,label:`western_cp1252`},{value:`1250`,label:`central_european_cp1250`},{value:`1251`,label:`cyrillic_cp1251`},{value:`1254`,label:`turkish_cp1254`},{value:`1253`,label:`greek_cp1253`},{value:`1256`,label:`arabic_cp1256`},{value:`1255`,label:`hebrew_cp1255`},{value:`1257`,label:`baltic_cp1257`},{value:`874`,label:`thai_cp874`},{value:`65001`,label:`utf_8`}];function Vs(e){return e.history[e.index]??zr(`home`)}function Z(e){return Br(Vs(e))??`files`}function Q(e){let t=Vs(e);return Br(t)?``:e.listing?.path||t}function Hs(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||Z(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function Us(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function Ws(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||w.iconSize,gridSize:e.view?.gridSize||t.gridSize||w.gridSize,sort:e.view?.sort??w.sort,sortDescending:e.view?.sortDescending??w.sortDescending,columns:t.columns??E.columns??[]}}function Gs(e=zr(`home`)){return Is+=1,{id:`tab-${Is}`,listing:null,loading:!Br(e),error:null,history:[e],index:0,fresh:!0,view:null}}function Ks(e){return e instanceof Error?e.message:String(e)}function qs(e){let t=St(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return nt(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function Js(e){let t=a(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function Ys(e){return c(e)?de(e):void 0}function Xs(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return h(e,t.entries.length,`k_1_item_size`,`count_items_size`,{size:s(n)})}function Zs(){let e=C(),[n,r]=(0,I.useState)(()=>[Gs()]),[o,s]=(0,I.useState)(()=>n[0].id),[f,p]=(0,I.useState)(null),[m,_]=(0,I.useState)(()=>{let e=We(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[v,ne]=(0,I.useState)([]),[re,b]=(0,I.useState)([]),[x,oe]=(0,I.useState)(null),[fe,T]=(0,I.useState)(null),[Ce,Te]=(0,I.useState)(null),Ee=ae(),[D,ke]=(0,I.useState)(Ue),[je,Fe]=(0,I.useState)(0),[Ie,Be]=(0,I.useState)(0),[Ve,Ge]=(0,I.useState)(0),[qe,Ye]=(0,I.useState)(Ue),[Qe,et]=(0,I.useState)(0),[nt,rt]=(0,I.useState)(0),[O,gt]=(0,I.useState)(0),[_t,St]=(0,I.useState)(0),Tt=(0,I.useRef)(_t);Tt.current=_t;let[Et,Dt]=(0,I.useState)([]),[At,Pt]=(0,I.useState)(10),[M,zt]=(0,I.useState)(null),Wt=S(i(M?.themeMode)),qt=(0,I.useMemo)(()=>(M?.favorites??[]).map(e=>l(e.path)),[M?.favorites]),[Xt,Qt]=(0,I.useState)(0),[N,en]=(0,I.useState)(at),[tn,nn]=(0,I.useState)(0),[on,sn]=(0,I.useState)(0),[cn,ln]=(0,I.useState)(0),[fn,pn]=(0,I.useState)(!0),[mn,gn]=(0,I.useState)(()=>{let e=We(`yafm.preview.width`,320);return e>=220?e:320}),[_n,bn]=(0,I.useState)(null),[xn,Sn]=(0,I.useState)(null),[Cn,Tn]=(0,I.useState)({kind:null,info:null}),[P,En]=(0,I.useState)(`primary`),[On,kn]=(0,I.useState)(null),[An,jn]=(0,I.useState)(null),[F,Mn]=(0,I.useState)(null),[Nn,Pn]=(0,I.useState)(null),[Fn,In]=(0,I.useState)({primary:0,secondary:0}),[Ln,Rn]=(0,I.useState)({primary:null,secondary:null}),[zn,Bn]=(0,I.useState)(null),[Vn,Hn]=(0,I.useState)([]),[Un,Kn]=(0,I.useState)(!1),[qn,Yn]=(0,I.useState)(null),[Xn,Zn]=(0,I.useState)(``),Qn=(0,I.useRef)([]),$n=(0,I.useRef)([]),[tr,nr]=(0,I.useState)([]),[rr,ir]=(0,I.useState)(!1),ar=(0,I.useMemo)(()=>rr?new Set(tr.map(e=>e.path)):new Set,[tr,rr]),[or,sr]=(0,I.useState)(!1),[cr,lr]=(0,I.useState)([]),[ur,dr]=(0,I.useState)(null),fr=(0,I.useRef)(0),[pr,mr]=(0,I.useState)(()=>{let e=Se(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?Us({x:e.x,y:e.y}):Us({x:Math.max(20,window.innerWidth-340),y:110})}),hr=(0,I.useCallback)(()=>{mr(e=>Us(e)),sr(!0)},[]),R=n.find(e=>e.id===o)??n[0],z=Z(R),_r=Vs(R),B=Q(R),vr=z===`files`?R.listing?.parent??qs(B):null,V=R.splitWith?n.find(e=>e.id===R.splitWith):void 0,yr=z===`files`&&V!==void 0,br=V?Q(V):``,Sr=V?V.listing?.parent??qs(br):null,Cr=yr&&V&&P===`secondary`?V:R,wr=M?.defaultView??E,Tr=Ws(Cr,wr);(0,I.useEffect)(()=>{t(M?.accentColor,M?.secondaryColor,Wt)},[M?.accentColor,M?.secondaryColor,Wt]),(0,I.useEffect)(()=>{fs(M?.fonts)},[M?.fonts]),(0,I.useEffect)(()=>{te(M?.timeFormat,M?.timeFormatPattern)},[M?.timeFormat,M?.timeFormatPattern]),(0,I.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!M?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[M?.backgroundSource]),(0,I.useEffect)(()=>(He(e=>new Promise(t=>{dr({id:++fr.current,prompt:e,resolve:t})})),()=>He(null)),[]),(0,I.useEffect)(()=>{En(`primary`)},[o]),(0,I.useEffect)(()=>{Ye(Ue),rt(0),gt(0)},[z]),(0,I.useEffect)(()=>{rt(0)},[qe.query,qe.matchCase,qe.regex]),(0,I.useEffect)(()=>{rt(e=>O===0?0:Math.min(e,O-1))},[O]);let H=Tr.columns.includes(`linkCount`),Er=(0,I.useMemo)(()=>{let e={},t=st(M),n={};for(let[e,t]of Object.entries(M?.placeNames??{}))n[l(e)]=t;for(let t of v)e[l(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=l(t),i=v.find(e=>l(e.path)===r);e[r]={name:n[r]??i?.name??(a(t)||t),path:t,kind:`folder`,icon:i?.icon??M?.placeIcons?.[t]??null}}return e},[v,M]),Dr=(0,I.useMemo)(()=>({places:Er,useIcons:M?.systemIcons===!1}),[Er,M?.systemIcons]),Or=M?.defaultView?.showImages??!0,kr=M?.defaultView?.imageStripHeight??E.imageStripHeight,jr=z===`home`?(0,L.jsx)(Jt,{size:13}):z===`settings`?(0,L.jsx)(Zt,{size:13}):z===`recycle`?(0,L.jsx)(rn,{size:13}):z===`gallery`?(0,L.jsx)($t,{size:13}):void 0,Mr=D.open&&D.query.length>0,Nr=(0,I.useDeferredValue)(D),U=(0,I.useMemo)(()=>Mr&&Cr.listing?Cr.listing.entries.filter(e=>ce(e.isDirectory?it(Dr,e.fullPath,e.name):e.name,Nr)).map(e=>e.fullPath):[],[Mr,Nr,Cr.listing,Dr]);(0,I.useEffect)(()=>{Fe(0)},[D.query,D.matchCase,D.regex,Cr.listing?.path]);let Pr=U.length===0?-1:Math.min(je,U.length-1),Fr=(0,I.useCallback)(()=>{ke(e=>({...e,open:!1,query:``})),Fe(0)},[]),Ir=(0,I.useCallback)(()=>{ke(e=>({...e,open:!0})),Be(e=>e+1)},[]),Lr=(0,I.useCallback)(()=>{Ye(e=>({...e,open:!0})),et(e=>e+1)},[]),Rr=(0,I.useCallback)(()=>{Ye(Ue),rt(0),gt(0)},[]),Ur=(0,I.useCallback)(e=>{rt(t=>O===0?0:(Math.min(t,O-1)+e+O)%O)},[O]),Wr=(0,I.useCallback)(e=>{ke(t=>({...t,open:!0,query:t.open?t.query+e:e})),Be(e=>e+1)},[]),Gr=(0,I.useCallback)(e=>{Fe(t=>U.length===0?0:(Math.min(t,U.length-1)+e+U.length)%U.length)},[U.length]),W=(0,I.useRef)({tabs:n,activeId:o,activePane:P});W.current={tabs:n,activeId:o,activePane:P};let Kr=(0,I.useRef)(M);Kr.current=M;let qr=(0,I.useRef)(!1),Jr=(0,I.useRef)([]),G=(0,I.useCallback)((e,t)=>{r(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Yr=(0,I.useRef)(new Map),Xr=(0,I.useCallback)(e=>{let t=(Yr.current.get(e)??0)+1;return Yr.current.set(e,t),()=>Yr.current.get(e)===t},[]),Zr=(0,I.useCallback)((e,t)=>{y.available&&t&&e===Hs(W.current)&&y.send({type:`fs.focus`,payload:{path:t}})},[]),Qr=(0,I.useCallback)(async(e,t,n)=>{if(!(t&&yt(t)))try{let r=await ge(t,H);if(!n()||!r.listing)return;G(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[H,G]),K=(0,I.useCallback)(async(e,t,n=!1)=>{let r=Xr(e);Fr(),Zr(e,t);let i=!n||!W.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;G(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&g(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&Qr(e,t,r);let o=t&&yt(t)?await Mt(t):await _e(t,!0,H,Tt.current,t?Ys(t):void 0,e);if(!r())return;G(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),!n&&!yt(o.path)&&we(o.path).then(()=>Qt(e=>e+1))}catch(i){if(!r())return;let a=W.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?Q(a):``,s=qs(o),c=Ks(i);if(o&&me(c)){let i=d(o),a=await Ne(i,!!de(i));if(a){Ke(i,a),r()&&K(e,t,n);return}}G(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[Xr,H,G,Zr,Fr,Qr]),$r=(0,I.useCallback)((e,t)=>{let n=Vr(t);n&&(Br(n)?(Fr(),Xr(e),G(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):K(e,n))},[Xr,K,G,Fr]),ei=(0,I.useCallback)(async(e,t,n)=>{if(Fr(),Br(t)){Xr(e),G(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Xr(e);Zr(e,t),G(e,()=>({index:n,listing:null,loading:!0,error:null}));try{yt(t)||Qr(e,t,r);let n=yt(t)?await Mt(t):await _e(t,!0,H,Tt.current,Ys(t),e);if(!r())return;G(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;let a=Ks(i);if(me(a)){let i=d(t),a=await Ne(i,!!de(i));if(a){Ke(i,a),r()&&ei(e,t,n);return}}G(e,()=>({listing:{path:t,parent:qs(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:Ks(i)}))}},[Xr,H,G,Zr,Fr,Qr]),q=(0,I.useCallback)((e,t=!0)=>{let n=Gs(e??zr(`home`));return r(e=>[...e,n]),t&&s(n.id),e&&!Br(e)&&K(n.id,e),n.id},[K]),ni=(0,I.useCallback)(e=>{for(let t of W.current.tabs)Z(t)===`files`&&g(Q(t),e)&&K(t.id,e,!0)},[K]),ri=(0,I.useCallback)((e,t)=>{let n=a(t);for(let r of W.current.tabs)r.listing?.entries.some(t=>g(t.fullPath,e))&&G(r.id,r=>{let i=r.listing;if(!i)return{};let a=i.entries.map(r=>g(r.fullPath,e)?{...r,name:n,fullPath:t}:r);return{listing:{...i,entries:a}}})},[G]),ii=(0,I.useRef)([]);(0,I.useEffect)(()=>{let e=new Set;for(let t of n){let n=t.listing?.path??t.history[t.index]??``;n&&c(n)&&e.add(l(d(n)))}let t=ii.current.filter(t=>!e.has(t));ii.current=[...e],t.length>0&&Me(t)},[n]);let ai=(0,I.useCallback)((e,t=!1)=>{t?q(zr(e)):$r(W.current.activeId,zr(e))},[q,$r]),oi=(0,I.useCallback)(e=>{let{tabs:t,activeId:n}=W.current,i=t.find(t=>t.id===e),a=t.filter(t=>t.id!==e&&t.id!==i?.splitWith);if(i&&!i.hidden&&($n.current.push(Vs(i)),$n.current.length>zs&&$n.current.shift()),a.length===0){let e=Gs();r([e]),s(e.id);return}let o=t.findIndex(t=>t.id===e);r(a),n===e&&s(a[Math.min(o,a.length-1)].id)},[]),si=(0,I.useCallback)(()=>{let e=$n.current.pop();if(!e)return;let t={...Gs(e),fresh:!1};r(e=>[...e,t]),s(t.id),Z(t)===`files`&&K(t.id,Q(t))},[K]),ci=(0,I.useCallback)((e,t=!1)=>{t?q(e):$r(Hs(W.current),e??zr(`home`))},[$r,q]),li=(0,I.useCallback)(e=>{let{tabs:t,activeId:n}=W.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;s(r[i].id)},[]),ui=(0,I.useCallback)(()=>{let{tabs:e,activeId:t}=W.current,n=e.find(e=>e.id===t);if(!n||Z(n)!==`files`)return;let i=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(i){r(e=>e.filter(e=>e.id!==i.id)),G(t,()=>({splitWith:void 0})),En(`primary`);return}let a=Q(n),o={...Gs(a),hidden:!0};r(e=>[...e,o]),G(t,()=>({splitWith:o.id})),K(o.id,a),En(`primary`)},[K,G]),di=(0,I.useCallback)(e=>{gn(e),se(`yafm.preview.width`,e)},[]),J=(0,I.useCallback)((e,t,n)=>Tn(r=>r.kind===e&&r.info?.path===t?.path&&r.info?.modified===t?.modified&&r.info?.name===t?.name&&r.note===n?r:{kind:e,info:t,note:n}),[]),fi=(0,I.useCallback)((e,t)=>J(`gallery`,e,t),[J]),pi=(0,I.useCallback)((e,t)=>J(`recycle`,e,t),[J]),mi=yr?P===`secondary`?xn??_n:_n??xn:_n,hi=yr&&P===`secondary`?Fn.secondary:Fn.primary,gi=z===`files`?mi:Cn.kind===z?Cn.info:null,_i=z===`files`?hi>1?h(e,hi,`k_1_item_selected`,`count_items_selected`):void 0:Cn.kind===z?Cn.note:void 0,vi=(0,I.useMemo)(()=>z===`files`&&R.listing?Xs(e,R.listing):Xn,[z,R.listing,e,Xn]),yi=(0,I.useRef)(null),bi=e=>{e.preventDefault();let t=yi.current?.getBoundingClientRect();if(!t)return;let n=Math.max(t.width-7,1),r=e=>{let r=Math.min(Math.max((e.clientX-t.left)/n,.2),.8);_(r),se(`yafm.split.ratio`,r)},i=()=>{window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,i)};window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,i)},xi=(e,t,n)=>{t&&kn({x:e.clientX,y:e.clientY,directory:t,refresh:n})},Si=(0,I.useCallback)((e,t)=>{In(n=>n[e]===t?n:{...n,[e]:t})},[]),Ci=(0,I.useCallback)(e=>Si(`primary`,e),[Si]),wi=(0,I.useCallback)(e=>Si(`secondary`,e),[Si]),Ti=(e,t)=>{Fn[e]!==0&&Rn(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},Ei=async(e,t=!1)=>{let n=On;if(kn(null),!n)return;let r=e===null?await Nt(n.directory,t):await xt(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;Fr(),Bn(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},Di=(0,I.useCallback)(()=>{let{tabs:e}=W.current,t=e.find(e=>e.id===Hs(W.current));t&&t.index>0&&ei(t.id,t.history[t.index-1],t.index-1)},[ei]),Oi=(0,I.useCallback)(()=>{let{tabs:e}=W.current,t=e.find(e=>e.id===Hs(W.current));t&&t.index<t.history.length-1&&ei(t.id,t.history[t.index+1],t.index+1)},[ei]),ki=(0,I.useCallback)(()=>{let{tabs:e}=W.current,t=e.find(e=>e.id===Hs(W.current));t&&Z(t)===`files`&&t.listing?.parent&&ci(t.listing.parent)},[ci]),Ai=(0,I.useRef)(null),ji=(0,I.useCallback)(()=>{for(let e of W.current.tabs)e.listing&&K(e.id,e.listing.path,!0)},[K]),Mi=(0,I.useCallback)(e=>{e.length!==0&&(lr(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),hr())},[hr]),Ni=(0,I.useCallback)(async e=>{let t=await bt(e);t.length!==0&&Mi(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[Mi]),Pi=(0,I.useCallback)(e=>{let t=new Set(e);lr(e=>e.filter(e=>!t.has(e.path)))},[]),Fi=(0,I.useCallback)(async e=>{let t=Kr.current;if(!t)return;let n=await bt(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>l(e.path))),i=n.filter(e=>!r.has(l(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};zt(a),await Xe(a),nn(e=>e+1)},[]),Ii=(0,I.useCallback)(async e=>{let t=Kr.current;if(!t)return;let n=new Set(e.map(l)),r=(t.favorites??[]).filter(e=>!n.has(l(e.path)));if(r.length===(t.favorites??[]).length)return;let i={...t,favorites:r};zt(i),await Xe(i),nn(e=>e+1)},[]),Li=(0,I.useCallback)(()=>lr([]),[]),Ri=(0,I.useRef)(-1),zi=(0,I.useCallback)(e=>{nr(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),ir(e.move),e.entries.length>0&&hr()},[hr]),Bi=(0,I.useCallback)(async()=>{if(y.available)try{let e=await Rt();Ri.current=e.sequence,zi(e)}catch{}},[zi]),Vi=(0,I.useCallback)(async e=>{e.length!==0&&await vt(e,!1)&&await Bi()},[Bi]),Hi=(0,I.useRef)(cr);Hi.current=cr;let Ui=(0,I.useRef)(or);Ui.current=or;let Wi=(0,I.useRef)(!1);(0,I.useEffect)(()=>{let e=M?.trayAutoShow??!0,t=t=>{e&&ct(t)&&(Ui.current||(Wi.current=!0),hr())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{Wi.current&&window.setTimeout(()=>{Wi.current&&Hi.current.length===0&&sr(!1),Wi.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[hr,M?.trayAutoShow]),(0,I.useEffect)(()=>{let e=()=>mr(e=>Us(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Gi=(0,I.useCallback)(async()=>{let e=Hi.current;if(e.length>0){let t=await bt(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));lr(e=>e.filter(e=>n.has(e.path)))}await Bi()},[Bi]),Ki=(0,I.useCallback)(()=>{Gi(),ln(e=>e+1),ji()},[Gi,ji]),qi=(0,I.useCallback)(e=>{let t=Us(e);mr(t),he(`yafm.tray.position`,t)},[]),Ji=(0,I.useCallback)(()=>{Wi.current=!1,or?sr(!1):hr()},[hr,or]),Yi=(0,I.useCallback)(async(t,n,r)=>{let i=await Bt(t,n,r);i.cancelled||(i.ok?(r&&Pi(t),ln(e=>e+1),ji(),Bi()):ye(i.error??e(`the_files_could_not_be_transferred`)))},[ji,Bi,Pi]);(0,I.useEffect)(()=>{if(y.available)return Wn().then(e=>{Qn.current=e,Hn(e)},()=>void 0),y.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=Qn.current.find(t=>t.id===e.id);return!t||t.state!==e.state});Qn.current=n,Hn(n),r&&Kn(!0)})},[]);let Xi=(0,I.useCallback)(()=>{Gn().then(()=>Wn().then(e=>{Qn.current=e,Hn(e)},()=>void 0))},[]);(0,I.useEffect)(()=>{if(!y.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await Rt();if(!e||t.sequence===Ri.current)return;Ri.current=t.sequence,zi(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[zi]);let Zi=(0,I.useCallback)(async e=>{let t=e?await Ht():await Ct();t.ok?(ln(e=>e+1),ji()):t.error&&!t.error.startsWith(`Nothing to`)&&ye(t.error)},[ji]),Qi=(0,I.useRef)(H);(0,I.useEffect)(()=>{Qi.current!==H&&(Qi.current=H,ji())},[H,ji]);let $i=(0,I.useCallback)((e,t)=>{let{tabs:n}=W.current,r=n.find(t=>t.id===e);if(!r||Z(r)!==`files`)return;let i=Q(r),a=Kr.current?.defaultView??E,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||w.iconSize,gridSize:r.view?.gridSize||a.gridSize||w.gridSize,sort:r.view?.sort??w.sort,sortDescending:r.view?.sortDescending??w.sortDescending,...t};G(e,()=>({view:o})),Ai.current!==null&&window.clearTimeout(Ai.current),Ai.current=window.setTimeout(()=>{Ai.current=null,De(i,o)},250)},[G]),ea=(0,I.useCallback)(e=>{$i(Hs(W.current),e)},[$i]),ta=(0,I.useCallback)(e=>{let t=Kr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??E,columns:e}};zt(n),Xe(n)},[]),na=(0,I.useCallback)(e=>{let t=Kr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??E,showImages:e}};zt(n),Xe(n)},[]),ra=(0,I.useCallback)(e=>{let t=Kr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??E,imageStripHeight:e}};zt(n),Xe(n)},[]),ia=(0,I.useCallback)((e,t,n,r)=>{let i=W.current.tabs.find(t=>t.id===e);if(!i||Z(i)!==`files`||!i.listing)return;let a=Q(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));G(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Le(a,t,n,r)},[G]),aa=(0,I.useCallback)((e,t)=>{let n=W.current.tabs.find(t=>t.id===e);if(!n)return;let r=Ws(n,Kr.current?.defaultView??E);$i(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[$i]),oa=(0,I.useCallback)((e,t)=>{r(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),sa=(0,I.useCallback)(()=>{Pe().then(ne,()=>ne([]))},[]),ca=(0,I.useCallback)(e=>{let t=(e.openTabs??[]).map(Vr).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...Gs(e),fresh:!1})),i=Math.min(Math.max(e.activeTab??0,0),n.length-1);r(n),s(n[i].id);let a=n[i];return(Z(a)===`files`?K(a.id,Q(a),!0):Promise.resolve()).then(()=>{for(let e of n)e!==a&&Z(e)===`files`&&K(e.id,Q(e),!0)}),!0},[K]),la=(0,I.useCallback)(e=>{let t=Jr.current;if(Jr.current=[],t.length===0)return;let n=t.filter(e=>!Ls.has(e));for(let e of t)n.includes(e)||Rs(e);if(n.length===0)return;let{tabs:r}=W.current;if(!e&&r.length===1&&r[0].fresh){$r(r[0].id,n[0]),Rs(n[0]);for(let e of n.slice(1))q(e),Rs(e);return}let i=n.map(e=>{let t=q(e);return Rs(e),t}).at(-1);i&&setTimeout(()=>s(i),0)},[q,$r]),ua=(0,I.useCallback)(()=>{Ze().then(e=>{zt(e),Pt(e.recentLimit);let t=Lt(e.shortcuts);en(t),jt(ht(t,`openInNewTab`)),nn(e=>e+1),qr.current||(qr.current=!0,la(e.restoreTabs&&ca(e)))},()=>{Pt(10),qr.current=!0,la(!1)})},[la,ca]),da=(0,I.useCallback)(()=>{ze().then(Dt,()=>Dt([]))},[]),fa=(0,I.useCallback)(()=>{ve().then(b,()=>b([]))},[]),pa=n.filter(e=>!e.hidden),ma=pa.map(Vs),ha=ma.join(`
`),ga=Math.max(pa.findIndex(e=>e.id===o),0);(0,I.useEffect)(()=>{if(!M?.restoreTabs)return;let e=setTimeout(()=>void Je(ma,ga),700);return()=>clearTimeout(e)},[ha,ga,M?.restoreTabs]),(0,I.useEffect)(()=>{let{tabs:e,activeId:t}=W.current,n=e.find(e=>e.id===t);n&&n.fresh&&Z(n)===`files`&&K(n.id,Q(n),!0),sa(),ua(),fa(),wn().then(oe,()=>oe(null))},[K,sa,ua,fa]),(0,I.useEffect)(()=>{if(Dn().then(T,()=>T(null)),y.available)return y.on(e=>{let t=e;t.type===`update.checked`&&t.data&&T(t.data)})},[]),(0,I.useEffect)(()=>{if(y.available)return y.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&p({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&ye(e(`pairing_code_code`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&ye(n.data.error??e(`pairing_failed`))}})},[e]),(0,I.useEffect)(()=>{let e=setInterval(fa,3e4);return()=>clearInterval(e)},[fa]),(0,I.useEffect)(()=>{z===`home`&&(da(),fa())},[z,R.id,da,fa]),(0,I.useEffect)(()=>{if(!y.available)return;let e=y.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=W.current,i=t.data.startup===!0;i&&Ls.has(n)?Rs(n):i&&!qr.current?Jr.current.includes(n)||Jr.current.push(n):(i&&r.length===1&&r[0].fresh?$r(r[0].id,n):Br(n)?$r(Hs(W.current),n):q(n),i&&Rs(n))});return y.send({type:`app.ready`}),e},[$r,q]),(0,I.useEffect)(()=>{if(y.available)return y.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:i}=t.data;r(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let r=e.slice(),a=e[t];return r[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},r})})},[]),(0,I.useEffect)(()=>{if(y.available)return y.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:i}=t.data;r(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let r=e.slice(),a=e[t];return r[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},r})})},[]),(0,I.useEffect)(()=>{let e=e=>{if(lt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),Di();return}if(e.key===`BrowserForward`){e.preventDefault(),Oi();return}if(e.key===`Escape`&&D.open){e.preventDefault(),Fr();return}let t=mt(e);if(k(N,`closeTab`,t)&&(e.preventDefault(),oi(Hs(W.current))),k(N,`newTab`,t)&&(e.preventDefault(),q()),k(N,`reopenTab`,t)&&(e.preventDefault(),si()),k(N,`goBack`,t)&&(e.preventDefault(),Di()),k(N,`goForward`,t)&&(e.preventDefault(),Oi()),k(N,`goUp`,t)&&(e.preventDefault(),ki()),k(N,`find`,t)&&(e.preventDefault(),z===`files`?Ir():Lr()),k(N,`location`,t)&&(e.preventDefault(),sn(e=>e+1)),k(N,`home`,t)){e.preventDefault();let t=v.find(e=>e.kind===`home`)?.path;t&&ci(t)}k(N,`iconsView`,t)&&(e.preventDefault(),z===`files`&&ea({mode:`grid`})),k(N,`detailsView`,t)&&(e.preventDefault(),z===`files`&&ea({mode:`list`})),k(N,`nextTab`,t)&&(e.preventDefault(),li(1)),k(N,`previousTab`,t)&&(e.preventDefault(),li(-1)),k(N,`hidden`,t)&&(e.preventDefault(),Oe().then(()=>{ln(e=>e+1),ji()})),k(N,`undo`,t)&&(e.preventDefault(),Zi(!0)),k(N,`redo`,t)&&(e.preventDefault(),Zi(!1)),k(N,`splitView`,t)?(e.preventDefault(),ui()):Object.keys(N).some(e=>e!==`openInNewTab`&&k(N,e,t))||z!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Wr(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[N,z,D.open,oi,si,q,Di,Oi,ki,Ir,Lr,Fr,Wr,ea,li,ci,v,ji,Zi,ui]),(0,I.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Di()):(e.button===4||e.button===9)&&(e.preventDefault(),Oi())},t=e=>{(e.button===3||e.button===4||e.button===8||e.button===9)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[Di,Oi]),(0,I.useEffect)(()=>{if(y.available)return y.on(e=>{let t=e;if(t.type===`app.navigation`)switch(t.data?.direction){case`back`:Di();break;case`forward`:Oi()}})},[Di,Oi]);let _a=(0,I.useMemo)(()=>{let e=new Set;for(let t of n){if(Z(t)!==`files`)continue;let n=Q(t);if(n&&!yt(n)){if(c(n)){let t=qs(d(n));t&&e.add(t)}else e.add(n)}}return[...e]},[n]),va=_a.join(`\0`);(0,I.useEffect)(()=>{y.available&&y.send({type:`fs.watch`,payload:{paths:_a,owner:`app`}})},[va,o]);let ya=Z(Cr)===`files`?Q(Cr):``;(0,I.useEffect)(()=>{y.available&&y.send({type:`fs.focus`,payload:{path:ya||null}})},[ya]),(0,I.useEffect)(()=>{if(y.available)return y.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,r=W.current.tabs.filter(e=>Z(e)===`files`&&g(Q(e),n)),i=W.current.tabs.filter(e=>{let t=Q(e);return Z(e)===`files`&&t.length>0&&c(t)&&g(d(t),n)});if(r.length!==0||i.length!==0){Ae(n);for(let e of i){let t=W.current.tabs.find(t=>t.id===e.id),r=t?Q(t):``;t&&Z(t)===`files`&&!t.loading&&c(r)&&g(d(r),n)&&K(e.id,r,!0)}r.length!==0&&_e(n,!1,H).then(e=>{for(let t of r){let n=W.current.tabs.find(e=>e.id===t.id);n&&Z(n)===`files`&&g(Q(n),e.path)&&(n.loading?window.setTimeout(()=>{let n=W.current.tabs.find(e=>e.id===t.id);n&&!n.loading&&Z(n)===`files`&&g(Q(n),e.path)&&G(t.id,()=>({listing:e}))},300):G(t.id,()=>({listing:e})))}},()=>void 0)}})},[H,K,G]);let ba=R.index>0,xa=R.index<R.history.length-1,Sa=(e,t)=>{let n=Ws(e,wr),r=e.listing?.path??e.history[e.index]??``,i=c(r),a=i&&u(r);return(0,L.jsx)(It,{platform:x?.platform,confirmDelete:M?.confirmDelete??!1,cutPaths:ar,previewVideoAudio:M?.previewVideoAudio??!1,previewVideoAutoplay:M?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?bn:Sn,onActivate:()=>En(t?`primary`:`secondary`),enableShortcuts:(!yr||(t?P===`primary`:P===`secondary`))&&(!i||a),error:e.error,find:e.id===Cr.id?{...D,currentPath:Pr<0?null:U[Pr]}:void 0,selectMatchesToken:e.id===Cr.id?Ve:0,imageStripHeight:kr,listing:e.listing,loading:e.loading,onImageStripHeight:ra,readOnly:i&&!a||yt(e.listing?.path??``),onOpen:(t,n)=>{n?q(t):K(e.id,t)},onOpenFile:(t,n)=>{yt(t)?kt(t).catch(e=>void ye(Ks(e))):ee(t)?M?.archiveHandler??!1?n?q(t):K(e.id,t):xe(t):c(t)?(async()=>{let e=await Re(t,Tt.current,Ys(t));if(!e.path&&me(e.error)){let n=d(t),r=de(n);r&&le(n);let i=await Ne(n,!!r);i&&(Ke(n,i),e=await Re(t,Tt.current,i))}e.path?xe(e.path):e.error&&ye(e.error)})():xe(t)},onRefresh:()=>{let t=e.listing?.path;t&&ni(t)},onRename:ri,onSelectionCountChange:t?Ci:wi,onSetTags:(t,n,r)=>ia(e.id,t,n,r),selectionMenuRequest:t?Ln.primary:Ln.secondary,onSort:t=>aa(e.id,t),onPaste:Ki,onClipboardChanged:()=>void Bi(),onTransfer:Yi,onAddToTray:e=>void Ni(e),onAddFavorite:e=>void Fi(e),onRemoveFavorite:e=>void Ii(e),favoritePaths:qt,onExtractArchive:(e,t)=>void Ea(e,t),openOnSingleClick:M?.openOnSingleClick??!1,pendingRename:zn&&t===(P===`primary`)&&g(zn.directory,e.listing?.path??``)?zn.path:null,pendingRenameToken:zn?.token??0,refreshToken:cn,shortcuts:N,showCheckboxes:M?.showCheckboxes??!0,showImages:Or,view:n})},Y=D.open&&(0,L.jsx)(Ar,{current:Pr,focusToken:Ie,matchCase:D.matchCase,mode:D.mode,onClose:Fr,onMatchCase:()=>ke(e=>({...e,matchCase:!e.matchCase})),onMode:()=>ke(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Gr(1),onPrevious:()=>Gr(-1),onQuery:e=>ke(t=>({...t,query:e})),onRegex:()=>ke(e=>({...e,regex:!e.regex})),query:D.query,regex:D.regex,total:U.length,onSelectMatches:U.length>0?()=>Ge(e=>e+1):void 0}),X=z===`files`&&c(B),Ca=X&&u(B),wa=X&&R.listing?.archiveEncrypted===!0,Ta=async(t,n)=>{let r=d(t),i=await ue(r,n,Tt.current,Ys(r));if(!i.ok&&me(i.error)){let e=de(r);e&&le(r);let t=await Ne(r,!!e);t&&(Ke(r,t),i=await ue(r,n,Tt.current,t))}i.ok?(ni(n),pe(),K(R.id,n,!0)):ye(`${e(`could_not_extract_the_archive`)}${i.error?`\n${i.error}`:``}`)},Ea=async(e,t)=>{let n=d(e),r=qs(n);if(!r)return;if(t===`choose`){let e=await dt(r);e&&await Ta(n,e);return}let i=t===`named`;if(t===`auto`){let e=g(n,B)?R.listing?.entries??[]:(await _e(n,!1,!1,Tt.current,Ys(n))).entries;i=!(e.length===1&&e[0].isDirectory)}let a=r.includes(`\\`)?`\\`:`/`,o=i?`${r.replace(/[\\/]+$/,``)}${a}${Js(n)}`:r;await Ta(n,o)},Da=async e=>{X&&await Ea(B,e)},Oa=async()=>{X&&await Ea(B,`choose`)},ka=(0,L.jsxs)(nc,{children:[(0,L.jsx)($,{"data-shortcut":A(N.goBack),disabled:!ba,onClick:e=>{R.index>0&&j(e)?q(R.history[R.index-1]):Di()},title:e(`back`),type:`button`,children:(0,L.jsx)(vn,{})}),(0,L.jsx)($,{"data-shortcut":A(N.goForward),disabled:!xa,onClick:e=>{R.index<R.history.length-1&&j(e)?q(R.history[R.index+1]):Oi()},title:e(`forward`),type:`button`,children:(0,L.jsx)(un,{})}),(0,L.jsx)($,{"data-shortcut":A(N.goUp),disabled:z!==`files`||!vr,onClick:e=>{vr&&(j(e)?q(vr):ci(vr))},title:e(`up_one_level`),type:`button`,children:(0,L.jsx)(an,{})}),(0,L.jsx)(Hr,{focusToken:on,icon:jr,label:z===`files`?void 0:e(ls[z]),onContextMenu:z===`files`?(e,t,n)=>Mn({x:t,y:n,path:e}):void 0,onNavigate:ci,path:z===`files`?B:_r}),z===`files`&&(!X||Ca)&&(0,L.jsx)($,{onClick:e=>xi(e,B,()=>void K(R.id,B,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,L.jsx)(dn,{})}),(0,L.jsx)($,{"data-shortcut":A(N.find),onClick:()=>z===`files`?Ir():Lr(),title:e(`search`),type:`button`,children:(0,L.jsx)(yn,{})}),Fn.primary>0&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Ts,{}),(0,L.jsx)($,{onClick:e=>Ti(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,L.jsx)(Yt,{})})]}),(0,L.jsx)(`span`,{ref:Yn,style:{display:`contents`}}),X&&(0,L.jsxs)(rc,{children:[(0,L.jsx)(Ts,{}),wa&&(0,L.jsxs)(ic,{title:e(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,L.jsx)(Kt,{size:12}),e(`encrypted`)]}),(0,L.jsx)($,{onClick:()=>void Oa(),onContextMenu:e=>{e.preventDefault(),jn({x:e.clientX,y:e.clientY})},title:e(`extract_archive`),type:`button`,children:(0,L.jsx)(hn,{})}),(0,L.jsx)($e,{icon:(0,L.jsx)(Gt,{size:15}),onChange:e=>{let t=Number(e);St(t),Tt.current=t,X&&K(R.id,B,!0)},options:Bs.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`archive_encoding`)}: ${e(Bs.find(e=>e.value===String(_t))?.label??`auto`)}`,value:String(_t)})]})]}),Aa=qe.open?{...qe,index:nt}:null;return(0,L.jsx)(pt,{value:Dr,children:(0,L.jsxs)(Qs,{$rounded:Ee,children:[(0,L.jsx)(Jn,{settings:M,theme:Wt}),(0,L.jsx)(Ro,{activeId:R.id,onClose:oi,onNewTab:()=>q(),onReorder:oa,onTransferToTab:Yi,onSelect:s,onViewChange:ea,onColumns:ta,onShowImages:na,showImages:Or,tasks:Vn,onClearTasks:Xi,activityOpen:Un,onActivityOpenChange:Kn,trayCount:cr.length+tr.length,trayVisible:or,onToggleTray:Ji,split:yr,canSplit:z===`files`,onToggleSplit:ui,details:fn,canDetails:z===`files`||z===`recycle`||z===`gallery`,onToggleDetails:()=>pn(e=>!e),currentFolder:z===`files`&&!yt(B)?B:``,shortcuts:N,view:Tr,tabs:n.filter(e=>!e.hidden).map(t=>{let r=Z(t),i=Q(t),o=t.splitWith?n.find(e=>e.id===t.splitWith):void 0,s=o?Q(o):``;return{id:t.id,kind:r,path:o?`${i}  |  ${s}`:i,place:r===`files`?ot(Dr,i):void 0,archive:r===`files`&&c(i),split:!!o,title:r===`files`?it(Dr,i,a(i)||e(`files`)):e(ls[r]),partner:o?{title:it(Dr,s,a(s)||e(`files`)),place:ot(Dr,s)}:void 0}})}),(0,L.jsxs)($s,{children:[(0,L.jsx)(ti,{activeKind:z,currentPath:z===`files`?_r:``,drives:re,historyVersion:Xt,onNavigate:ci,onOpenView:ai,homePath:v.find(e=>e.kind===`home`)?.path??``,places:v,recent:Et,recentLimit:At,version:tn}),(0,L.jsxs)(ec,{children:[(0,L.jsxs)(uc,{children:[(0,L.jsxs)(dc,{children:[z!==`files`&&ka,(0,L.jsx)(tc,{children:(0,L.jsxs)(I.Suspense,{fallback:null,children:[z!==`files`&&qe.open&&(0,L.jsx)(Ar,{current:nt,focusToken:Qe,matchCase:qe.matchCase,mode:qe.mode,onClose:Rr,onMatchCase:()=>Ye(e=>({...e,matchCase:!e.matchCase})),onMode:()=>Ye(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Ur(1),onPrevious:()=>Ur(-1),onQuery:e=>Ye(t=>({...t,query:e})),onRegex:()=>Ye(e=>({...e,regex:!e.regex})),placeholder:e(`search`),query:qe.query,regex:qe.regex,total:O,onSelectMatches:z===`gallery`||z===`recycle`?()=>Ge(e=>e+1):void 0}),z===`files`?yr&&V?(0,L.jsxs)(oc,{ref:yi,children:[(0,L.jsxs)(sc,{style:{flex:m},children:[(0,L.jsxs)(ac,{$active:P===`primary`,onPointerDown:()=>En(`primary`),children:[(0,L.jsx)($,{"data-shortcut":A(N.goBack),disabled:!ba,onClick:e=>{let t=R.index-1;t<0||(j(e)?q(R.history[t]):ei(R.id,R.history[t],t))},title:e(`back`),type:`button`,children:(0,L.jsx)(vn,{})}),(0,L.jsx)($,{"data-shortcut":A(N.goForward),disabled:!xa,onClick:e=>{let t=R.index+1;t>=R.history.length||(j(e)?q(R.history[t]):ei(R.id,R.history[t],t))},title:e(`forward`),type:`button`,children:(0,L.jsx)(un,{})}),(0,L.jsx)($,{"data-shortcut":A(N.goUp),disabled:!vr,onClick:e=>{vr&&(j(e)?q(vr):K(R.id,vr))},title:e(`up_one_level`),type:`button`,children:(0,L.jsx)(an,{})}),(0,L.jsx)(Hr,{focusToken:P===`primary`?on:void 0,onContextMenu:(e,t,n)=>Mn({x:t,y:n,path:e}),onNavigate:(e,t)=>t?q(e):void K(R.id,e),path:B}),(0,L.jsx)($,{onClick:e=>xi(e,B,()=>void K(R.id,B,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,L.jsx)(dn,{})}),(0,L.jsx)($,{"data-shortcut":A(N.find),onClick:Ir,title:e(`search`),type:`button`,children:(0,L.jsx)(yn,{})}),Fn.primary>0&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Ts,{}),(0,L.jsx)($,{onClick:e=>Ti(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,L.jsx)(Yt,{})})]})]}),Sa(R,!0),P===`primary`&&Y]}),(0,L.jsx)(cc,{onDoubleClick:()=>_(.5),onPointerDown:bi,title:e(`drag_to_resize_double_click_to_reset`)}),(0,L.jsxs)(sc,{$enter:!0,style:{flex:1-m},children:[(0,L.jsxs)(ac,{$active:P===`secondary`,onPointerDown:()=>En(`secondary`),children:[(0,L.jsx)($,{"data-shortcut":A(N.goBack),disabled:V.index<=0,onClick:e=>{let t=V.index-1;t<0||(j(e)?q(V.history[t]):ei(V.id,V.history[t],t))},title:e(`back`),type:`button`,children:(0,L.jsx)(vn,{})}),(0,L.jsx)($,{"data-shortcut":A(N.goForward),disabled:V.index>=V.history.length-1,onClick:e=>{let t=V.index+1;t>=V.history.length||(j(e)?q(V.history[t]):ei(V.id,V.history[t],t))},title:e(`forward`),type:`button`,children:(0,L.jsx)(un,{})}),(0,L.jsx)($,{"data-shortcut":A(N.goUp),disabled:!Sr,onClick:e=>{Sr&&(j(e)?q(Sr):K(V.id,Sr))},title:e(`up_one_level`),type:`button`,children:(0,L.jsx)(an,{})}),(0,L.jsx)(Hr,{focusToken:P===`secondary`?on:void 0,onContextMenu:(e,t,n)=>Mn({x:t,y:n,path:e}),onNavigate:(e,t)=>t?q(e):void K(V.id,e),path:br}),(0,L.jsx)($,{onClick:e=>xi(e,br,()=>void K(V.id,br,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,L.jsx)(dn,{})}),(0,L.jsx)($,{"data-shortcut":A(N.find),onClick:Ir,title:e(`search`),type:`button`,children:(0,L.jsx)(yn,{})}),Fn.secondary>0&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Ts,{}),(0,L.jsx)($,{onClick:e=>Ti(`secondary`,e),title:e(`selection_menu`),type:`button`,children:(0,L.jsx)(Yt,{})})]})]}),Sa(V,!1),P===`secondary`&&Y]})]}):(0,L.jsxs)(L.Fragment,{children:[ka,(0,L.jsxs)(lc,{children:[Sa(R,!0),Y]})]}):z===`home`?(0,L.jsx)(Ms,{platform:x?.platform,drives:re,find:Aa,historyVersion:Xt,onSearchMatches:gt,homePath:v.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:fa,onHistoryChanged:()=>Qt(e=>e+1),onAddToTray:e=>void Ni(e),onAddFavorite:e=>void Fi(e),onRemoveFavorite:e=>void Ii(e),favoritePaths:qt,onExtractArchive:(e,t)=>void Ea(e,t),settingsVersion:tn,theme:Wt,onOpen:ci,onLayoutChanged:ua,onPlacesChanged:ne,onRecentCleared:da,places:v,recent:Et,recentLimit:At,visibilityVersion:cn}):z===`settings`?(0,L.jsx)(Ns,{appInfo:x,find:Aa,focusSection:Ce,onSearchMatches:gt,onSettingsChanged:ua}):z===`gallery`?(0,L.jsx)(Ps,{platform:x?.platform,toolbarSlot:qn,onStatusChange:Zn,confirmDelete:M?.confirmDelete??!1,find:Aa,onSearchMatches:gt,openOnSingleClick:M?.openOnSingleClick??!1,onAddToTray:e=>void Ni(e),onAddFavorite:e=>void Fi(e),onRemoveFavorite:e=>void Ii(e),favoritePaths:qt,onExtractArchive:(e,t)=>void Ea(e,t),shortcuts:N,showCheckboxes:M?.showCheckboxes??!0,selectMatchesToken:Ve,onPreviewChange:fi,view:Tr}):(0,L.jsx)(Fs,{find:Aa,toolbarSlot:qn,onStatusChange:Zn,onOpenLocation:ci,onShowDetails:()=>pn(!0),platform:x?.platform,selectMatchesToken:Ve,onPreviewChange:pi})]})},z)]}),(z===`files`||z===`gallery`||z===`recycle`)&&(0,L.jsx)(ut,{emptyNote:e(`nothing_selected`),info:gi,onWidth:di,open:fn,selectionNote:_i,videoAudio:M?.previewVideoAudio??!1,videoAutoplay:M?.previewVideoAutoplay??!1,width:mn})]}),(0,L.jsxs)(gc,{children:[(0,L.jsx)(`span`,{children:vi}),x?(0,L.jsxs)(fc,{children:[(0,L.jsxs)(`span`,{children:[`v`,x.version,` · `,x.platform]}),x.debug&&(0,L.jsx)(hc,{children:`debug`}),fe?.available&&(0,L.jsxs)(pc,{onClick:e=>{Te(`updates`),ai(`settings`,j(e))},title:e(`version_version_is_available`,{version:fe.latest}),type:`button`,children:[(0,L.jsx)(mc,{}),e(`update_available`)]})]}):(0,L.jsx)(`span`,{children:e(`browser_preview`)})]})]})]}),(0,L.jsx)(tt,{clipboardItems:tr,clipboardMove:rr,currentDirectory:z===`files`?_r:``,items:cr,onAdd:e=>void Ni(e),onClear:Li,onClose:()=>sr(!1),onCopyToClipboard:e=>void Vi(e),onPosition:qi,onRemove:Pi,onTransfer:Yi,position:pr,visible:or}),On&&(0,L.jsx)(ft,{creationOnly:!0,directory:On.directory,menu:{x:On.x,y:On.y,paths:[],background:!0},onClose:()=>kn(null),onCreateFile:e=>void Ei(e),onCreateFolder:e=>void Ei(null,e),shortcuts:N}),F&&(0,L.jsx)(ft,{allowCompression:!0,directory:qs(F.path)??F.path,menu:{x:F.x,y:F.y,paths:[F.path]},onAddToTray:e=>void Ni(e),onAddFavorite:e=>void Fi(e),onRemoveFavorite:e=>void Ii(e),favoritePaths:qt,onExtractArchive:(e,t)=>void Ea(e,t),onArchiveCreated:e=>{e&&ni(qs(F.path)??F.path)},onClose:()=>Mn(null),onCompressTo:(e,t)=>Pn({paths:e,name:t}),onCopy:(e,t)=>void vt(e,t),onDelete:e=>void Ot(e,!1).then(()=>ni(qs(F.path)??F.path)),onOpen:(e,t)=>t?q(e):void K(R.id,e),onOpenFile:e=>void xe(e),onPaste:e=>void wt(e).then(t=>{t.ok&&ni(e)}),onRefresh:()=>ni(F.path),shortcuts:N,target:{path:F.path,isDirectory:!0}}),Nn&&(0,L.jsx)(Ut,{initialDirectory:qs(F?.path??B)??B,initialName:Nn.name,onCancel:()=>Pn(null),onCompress:async e=>{let t=await Ft(Nn.paths,e);return!t.ok&&t.error&&ye(t.error),t.ok}}),An&&(0,L.jsx)(be,{items:[{label:e(`extract_here`),onSelect:()=>void Da(`here`)},{label:e(`extract_to_a_folder_named_after_the_archive`),onSelect:()=>void Da(`named`)},{label:e(`auto_extract_to_the_current_folder`),onSelect:()=>void Da(`auto`)}],onClose:()=>jn(null),x:An.x,y:An.y}),ur&&(0,L.jsx)(er,{action:ur.prompt.action,delaySeconds:ur.prompt.delaySeconds,hits:ur.prompt.hits,onCancel:()=>{ur.resolve(!1),dr(null)},onConfirm:()=>{ur.resolve(!0),dr(null)},permanent:ur.prompt.permanent},ur.id),(0,L.jsx)(gr,{}),(0,L.jsx)(xr,{}),f&&(0,L.jsx)(ms,{code:f.code,deviceName:f.deviceName,onAccept:()=>{Vt(f.requestId,!0),p(null)},onReject:()=>{Vt(f.requestId,!1),p(null)}}),(0,L.jsx)(is,{}),(0,L.jsx)(ie,{})]})})}var Qs=b.div`
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
`,$s=b.div`
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
`,ec=b.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,tc=b.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${Ce}
`,nc=b.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,$=ws,rc=b.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,ic=b.span`
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
`,ac=b.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,oc=b.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,sc=b.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?Fe:``}
`,cc=b.div`
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
        ${Ee}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,lc=b.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,uc=b.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,dc=b.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,fc=b.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,pc=b.button`
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
`,mc=b.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,hc=b.span`
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
`,gc=b.footer`
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
`;document.documentElement.dataset.theme=x()?`dark`:`light`;var _c=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,_c),window.addEventListener(`pagehide`,Ve);var vc=document.getElementById(`root`),yc=new URLSearchParams(window.location.search),bc=yc.get(`picker`),xc=yc.get(`filter`)??``,Sc=bc===`folder`||bc===`file`||bc===`save`?(0,I.lazy)(()=>js(()=>import(`./PickerWindow-CblpJWdp.js`).then(e=>({default:e.PickerWindow})),__vite__mapDeps([14,1,2,7,4,5,3,6,9,12,0,8,10]))):null;vc&&(Ge(),(0,Pn.createRoot)(vc).render((0,L.jsx)(I.StrictMode,{children:(0,L.jsx)(ne,{children:Sc===null?(0,L.jsx)(Zs,{}):(0,L.jsx)(I.Suspense,{fallback:null,children:(0,L.jsx)(Sc,{defaultExtension:yc.get(`ext`)??``,extensions:xc?xc.split(`;`).filter(Boolean):[],initial:yc.get(`initial`)??``,initialName:yc.get(`name`)??``,mode:bc===`folder`?`folder`:`file`,multiple:yc.get(`multiple`)===`1`,save:bc===`save`})})})})));export{kn as A,Dn as C,P as D,F as E,En as O,On as S,Mn as T,Hn as _,ps as a,Ln as b,ti as c,gr as d,er as f,zn as g,In as h,us as i,Tn as k,Hr as l,Rn as m,ws as n,xo as o,qn as p,Ts as r,yo as s,js as t,Ar as u,Bn as v,jn as w,An as x,Un as y};