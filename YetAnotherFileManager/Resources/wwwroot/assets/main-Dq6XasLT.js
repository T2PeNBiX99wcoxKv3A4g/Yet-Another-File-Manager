const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OverviewView-DptroEww.js","assets/rolldown-runtime-XKyaHtl9.js","assets/dist-B8OtbfKB.js","assets/selectionMenu-EGHyfMwp.js","assets/theme-DR5uRrlC.js","assets/theme-Cd7QcbnN.css","assets/Icons-Dm4j8PiH.js","assets/concepts-BGmzEq44.js","assets/textSearch-CQ-QjWXi.js","assets/FileList-DzLMJgxw.js","assets/IconPicker-9QxysTmG.js","assets/SettingsView--qkTnHF3.js","assets/GalleryView-C-FE38c0.js","assets/RecycleView-CPNMuBHc.js","assets/PickerWindow-CYOBICs4.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{C as t,D as n,E as r,O as i,S as a,T as o,a as s,b as c,c as l,d as u,h as d,k as f,l as p,m,p as h,r as g,u as _,x as v,y}from"./theme-DR5uRrlC.js";import{_ as b,a as x,c as ee,d as te,i as ne,n as re,o as ie,p as S,r as ae,s as oe,u as C,v as se}from"./dist-B8OtbfKB.js";import{A as w,B as ce,C as le,D as ue,F as de,G as fe,I as pe,J as me,K as he,Q as ge,R as T,S as _e,T as ve,V as ye,W as be,Z as xe,_ as Se,_t as Ce,a as we,at as Te,b as Ee,c as De,ct as Oe,d as ke,f as Ae,g as je,gt as Me,h as E,i as Ne,k as Pe,l as Fe,lt as Ie,m as Le,nt as Re,o as ze,ot as Be,p as Ve,pt as He,tt as Ue,u as We,v as D,vt as Ge,x as Ke,xt as qe,y as Je,yt as Ye,z as Xe}from"./selectionMenu-EGHyfMwp.js";import{a as Ze,d as Qe,i as $e,m as et,p as tt}from"./concepts-BGmzEq44.js";import{A as nt,B as rt,C as it,D as at,E as O,F as ot,G as st,J as ct,K as lt,L as ut,N as dt,O as ft,Q as pt,R as mt,U as ht,V as gt,W as _t,X as vt,Y as k,Z as yt,_t as bt,c as xt,ct as St,d as Ct,dt as wt,et as A,ft as Tt,g as Et,gt as Dt,ht as Ot,i as kt,k as At,l as jt,lt as Mt,m as Nt,mt as j,nt as Pt,ot as M,p as Ft,pt as It,q as Lt,r as Rt,st as zt,t as Bt,tt as Vt,ut as Ht,v as Ut,vt as Wt,x as Gt,yt as Kt,z as qt}from"./FileList-DzLMJgxw.js";import{A as Jt,B as Yt,E as N,F as Xt,G as Zt,H as Qt,I as $t,K as en,L as tn,M as nn,O as rn,Q as an,X as on,Y as sn,a as cn,at as ln,ct as un,d as dn,dt as fn,f as pn,i as mn,k as hn,lt as gn,m as _n,mt as vn,n as yn,p as bn,q as xn,r as Sn,t as Cn,tt as wn,ut as Tn,v as P,vt as En,y as F}from"./Icons-Dm4j8PiH.js";async function Dn(){return S.available?await S.request(`app.info`):{version:`dev`,platform:`web`,logDirectory:``,rounded:!1,debug:!1}}async function On(e){S.available?await S.request(`system.openUrl`,{url:e}):window.open(e,`_blank`,`noreferrer`)}async function kn(){S.available&&await In(`update.openLogs`)}async function An(e){S.available?await In(`update.openRelease`):e&&window.open(e,`_blank`,`noreferrer`)}async function jn(){return S.available?await S.request(`update.status`)??null:null}async function Mn(){return S.available?await S.request(`update.check`):{current:`dev`,latest:`dev`,available:!1}}async function I(){return S.available?await S.request(`update.download`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}async function Nn(){await In(`update.cancel`)}async function L(){return S.available?await S.request(`update.install`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}function Pn(e){return S.on(t=>{t.type===`update.progress`&&e(t.data)})}function Fn(e){return S.on(t=>{t.type===`update.changelog`&&e(t.data)})}async function In(e,t,n=3e4){let r=await S.request(e,t,n);if(!r.ok)throw Error(r.error??`The action failed.`)}var R=e(se(),1),Ln=i(),Rn={managed:0,private:0,workingSet:0,available:0};async function zn(){return S.available?await S.request(`app.memory`):Rn}async function Bn(){return S.available?await S.request(`app.memory.trim`):Rn}var Vn={registered:!1,pathMatches:!1,registeredPath:null};async function Hn(){return S.available?await S.request(`app.scheme`):Vn}async function Un(e){return S.available?await S.request(`app.scheme.set`,{enabled:e}):Vn}var Wn={supported:!1,mode:`none`,active:!1,error:null};async function Gn(){return S.available?await S.request(`app.startup`):Wn}async function Kn(e){return S.available?await S.request(`app.startup.set`,{mode:e}):Wn}async function qn(){return S.available?(await S.request(`app.tasks`)).tasks:[]}async function Jn(){S.available&&await S.request(`app.tasks.clear`)}var Yn={home:`overview`,settings:`settings`,recycle:`recycle_bin`,gallery:`gallery`},Xn=`yafm://`,Zn={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function Qn(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function $n(e){return`${Xn}${e===`home`?`overview`:e}`}function z(e){return Qn(e)?Zn[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function er(e){let t=e.trim();if(t.length===0)return null;if(!Qn(t))return t;let n=Zn[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?$n(n):null}var B=te();function tr({location:e,size:t=13}){switch(z(e)){case`home`:return(0,B.jsx)(Yt,{size:t});case`settings`:return(0,B.jsx)(Xt,{size:t});case`recycle`:return(0,B.jsx)(En,{size:t});case`gallery`:return(0,B.jsx)(nn,{size:t});default:return y(e)?(0,B.jsx)(yn,{size:t}):(0,B.jsx)(nn,{size:t})}}function nr(e){let t=e.replace(/[\\/]+$/,``),n=Math.max(t.lastIndexOf(`\\`),t.lastIndexOf(`/`));return n>=0?t.slice(n+1):t}function rr(){let e=C();return t=>{let n=z(t);return n?e(Yn[n]):nr(t)}}var ir=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function ar(e){return ir.test(e)}function or({settings:e,theme:t}){let n=e?.backgroundSource??null,r=n?.startsWith(`url:`)?n.slice(4):v(n)?n:null,i=n?.startsWith(`file:`)?n.slice(5):null,a=He(i),o=n?.startsWith(`builtin:`)?$e(n,t):r??a,s=r===null?i===null?n!==null&&Ze(n):ar(i):ar(r.split(/[?#]/)[0]);if(!n||!o)return null;let c=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,B.jsxs)(sr,{"aria-hidden":!0,children:[s?(0,B.jsx)(lr,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o,style:{filter:c}}):(0,B.jsx)(cr,{src:o,style:{filter:c}}),(0,B.jsx)(ur,{})]})}var sr=b.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,cr=b.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,lr=b.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,ur=b.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);

    /* The light artwork is drawn pale already, so it only keeps a faint accent glow. */
    html[data-theme="light"] & {
        background: radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.06), transparent 60%);
    }
`,dr=f();function fr({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let o=C(),s=(0,R.useRef)(null),[c,l]=(0,R.useState)(()=>Math.max(1,Math.ceil(n))),u=e??`delete`;return(0,R.useEffect)(()=>{s.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));l(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,dr.createPortal)((0,B.jsx)(gr,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,B.jsxs)(_r,{role:`alertdialog`,"aria-modal":`true`,children:[(0,B.jsx)(vr,{children:o(`protected_folder`)}),(0,B.jsx)(yr,{children:o(`these_paths_are_protected_by_the_safety_settings`)}),(0,B.jsx)(br,{children:t.map(e=>(0,B.jsxs)(xr,{children:[(0,B.jsx)(Sr,{children:e.path}),(0,B.jsx)(Cr,{children:o(`protected_by_pattern`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,B.jsx)(wr,{children:pr(o,u,r??!1)}),(0,B.jsx)(V,{children:mr(o,u)}),(0,B.jsx)(H,{children:o(`this_waits_seconds_s_before_the_button_works`,{seconds:n})}),(0,B.jsxs)(Tr,{children:[(0,B.jsx)(U,{onClick:i,ref:s,type:`button`,children:o(`cancel`)}),(0,B.jsx)(Er,{disabled:c>0,onClick:a,type:`button`,children:c>0?hr(o,u,c):hr(o,u,0)})]})]})}),document.body)}function pr(e,t,n){switch(t){case`delete`:return e(n?`deletes_permanently`:`moves_to_the_recycle_bin`);case`move`:return e(`moves_the_entries`);case`rename`:return e(`renames_the_entry`);case`write`:return e(`writes_into_this_folder`)}}function mr(e,t){switch(t){case`delete`:return e(`nothing_has_been_deleted`);case`move`:return e(`nothing_has_been_moved`);case`rename`:return e(`nothing_has_been_renamed`);case`write`:return e(`nothing_has_been_written`)}}function hr(e,t,n){let r=n>0?t===`delete`?`delete_anyway_seconds_s`:t===`move`?`move_anyway_seconds_s`:t===`rename`?`rename_anyway_seconds_s`:`write_anyway_seconds_s`:t===`delete`?`delete_anyway`:t===`move`?`move_anyway`:t===`rename`?`rename_anyway`:`write_anyway`;return n>0?e(r,{seconds:n}):e(r)}var gr=b.div`
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
`,_r=b.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${We}
`,vr=b.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,yr=b.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,br=b.div`
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
`,xr=b.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Sr=b.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,Cr=b.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,wr=b.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,V=b.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,H=b.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Tr=b.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,U=b.button`
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
`,Er=b.button`
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
`;function Dr(){let e=C(),[t,n]=(0,R.useState)(null),r=(0,R.useRef)(null),i=(0,R.useRef)(null);(0,R.useEffect)(()=>(E(e=>new Promise(t=>{r.current=t,n(e)})),()=>E(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,R.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,dr.createPortal)((0,B.jsx)(W,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,B.jsxs)(Or,{role:`alertdialog`,"aria-modal":`true`,children:[(0,B.jsx)(kr,{children:e(`notice`)}),(0,B.jsx)(Ar,{children:t}),(0,B.jsx)(G,{children:(0,B.jsx)(jr,{onClick:a,ref:i,type:`button`,children:e(`ok`)})})]})}),document.body)}var W=b.div`
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
`,Or=b.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${We}
`,kr=b.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Ar=b.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,G=b.div`
    display: flex;
    justify-content: flex-end;
`,jr=b.button`
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
`;function Mr(){let e=C(),[t,n]=(0,R.useState)(null);(0,R.useEffect)(()=>S.on(e=>{let t=e;t.type===`fs.elevation.ask`&&t.data&&n(t.data)}),[]);let r=e=>{let r=t;n(null),r&&S.request(`fs.elevation.answer`,{token:r.token,allow:e})},i=(t=>{switch(t){case`delete`:return e(`delete`);case`rename`:return e(`rename`);case`copy`:return e(`copy`);case`moveTo`:return e(`move`);case`extractArchive`:return e(`extract_archive`);case`newFolder`:case`newFolderAt`:return e(`new_folder`);case`newFile`:case`newFileAt`:return e(`new_file`);case`restoreRecycle`:return e(`restore`);case`writeFile`:return e(`save`);default:return``}})(t?.action??``);return(0,B.jsx)(Ne,{confirmLabel:e(`run_as_administrator`),message:e(`this_path_needs_administrator_rights_to_action_restart_the_app_as_administrator_and_try_again`,{path:t?.path??``,action:i.length>0?i.toLowerCase():e(`ok`).toLowerCase()}),onCancel:()=>r(!1),onConfirm:()=>r(!0),open:t!==null,title:e(`administrator_rights_required`)})}function Nr(){let e=C(),[t,n]=(0,R.useState)(null),[r,i]=(0,R.useState)(``),a=(0,R.useRef)(null),o=(0,R.useRef)(null);(0,R.useEffect)(()=>(je((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>je(null)),[]),(0,R.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,dr.createPortal)((0,B.jsx)(Pr,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,B.jsxs)(K,{role:`dialog`,"aria-modal":`true`,children:[(0,B.jsx)(Fr,{children:e(`archive_password`)}),(0,B.jsx)(Ir,{children:t.wrong?e(`that_password_did_not_open_the_archive_try_again`):e(`this_archive_is_encrypted_enter_its_password`)}),(0,B.jsx)(Lr,{title:t.archive,children:t.archive}),(0,B.jsx)(Rr,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,B.jsxs)(zr,{children:[(0,B.jsx)(Br,{onClick:()=>s(null),type:`button`,children:e(`cancel`)}),(0,B.jsx)(Vr,{disabled:r.length===0,onClick:c,type:`button`,children:e(`ok`)})]})]})}),document.body)}var Pr=b.div`
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
`,K=b.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${We}
`,Fr=b.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Ir=b.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Lr=b.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Rr=b.input`
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
`,zr=b.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,Br=b.button`
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
`,Vr=b(Br)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Hr({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h,onSelectMatches:g}){let _=C(),v=(0,R.useRef)(null),y=c??_(`search_this_folder`);(0,R.useEffect)(()=>{let e=v.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let b=e=>{e(),v.current?.focus()};return(0,B.jsxs)(Ur,{children:[(0,B.jsx)(un,{}),(0,B.jsx)(Wr,{"aria-label":y,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:y,ref:v,spellCheck:!1,value:e}),!s&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(Gr,{children:i===0?`0/0`:`${a+1}/${i}`}),g&&(0,B.jsx)(Kr,{disabled:i===0,onClick:g,title:_(`select_all_matches`),type:`button`,children:(0,B.jsx)(dn,{size:12})}),(0,B.jsx)(Kr,{$chevron:!0,onClick:()=>b(u),title:_(`previous_match_shift_enter`),type:`button`,children:(0,B.jsx)(pn,{size:12})}),(0,B.jsx)(Kr,{$chevron:!0,$down:!0,onClick:()=>b(d),title:_(`next_match_enter`),type:`button`,children:(0,B.jsx)(pn,{size:12})})]}),(0,B.jsx)(qr,{$on:n,onClick:()=>b(f),title:_(`match_case`),type:`button`,children:`Aa`}),(0,B.jsx)(qr,{$on:r,onClick:()=>b(p),title:_(`regular_expression`),type:`button`,children:`.*`}),!s&&(0,B.jsx)(Jr,{$on:t===`hide`,onClick:()=>b(m),title:_(t===`hide`?`non_matching_entries_are_hidden`:`non_matching_entries_are_dimmed`),type:`button`,children:t===`hide`?(0,B.jsx)(Jt,{size:12}):(0,B.jsx)(hn,{size:12})}),(0,B.jsx)(Kr,{onClick:h,title:_(`close_search_esc`),type:`button`,children:(0,B.jsx)(F,{size:12})})]})}var Ur=b.div`
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
`,Wr=b.input`
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
`,Gr=b.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Kr=b.button`
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
`,qr=b.button`
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
`,Jr=b(qr)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`;function Yr({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=C(),s=Lt(),[c,l]=(0,R.useState)(!1),[u,d]=(0,R.useState)(``),[f,p]=(0,R.useState)([]),[m,h]=(0,R.useState)(0),[g,_]=(0,R.useState)(null),[v,y]=(0,R.useState)(null),[b,x]=(0,R.useState)(null),ee=(0,R.useRef)(null),te=(0,R.useRef)(null),ne=(0,R.useRef)(0);(0,R.useEffect)(()=>{if(!Ct(e)){x(null);return}let t=Et(e);if(!t){x(null);return}let n=!0;return xt().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);x({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&x(null)),()=>{n=!1}},[e]),(0,R.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,R.useEffect)(()=>{r&&r!==ne.current&&(ne.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,R.useEffect)(()=>{c&&ee.current?.select()},[c]),(0,R.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[c]);let re=()=>{d(e.replace(/\\/g,`/`)),l(!0)},ie=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,R.useEffect)(()=>{if(!c){p([]);return}let e=q(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{T(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),h(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let S=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,R.useLayoutEffect)(()=>{if(!c){_(null);return}let e=()=>{let e=te.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);_({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,B.jsxs)(ri,{onPointerDown:e=>e.stopPropagation(),ref:te,children:[(0,B.jsxs)(oi,{children:[(0,B.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),h(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),h(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?S(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):ie(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:ee,spellCheck:!1,value:u}),(0,B.jsx)(si,{onClick:()=>l(!1),title:o(`cancel`),type:`button`,children:(0,B.jsx)(F,{size:12})}),(0,B.jsx)(si,{$apply:!0,onClick:ie,onPointerDown:e=>e.stopPropagation(),title:o(`open_this_path`),type:`button`,children:(0,B.jsx)(dn,{size:14})})]}),f.length>0&&g&&(0,dr.createPortal)((0,B.jsx)(ii,{onPointerDown:e=>e.stopPropagation(),style:{left:g.left,top:g.top,width:g.width},children:f.map((e,t)=>(0,B.jsxs)(ai,{$active:t===m,onClick:t=>S(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>h(t),type:`button`,children:[(0,B.jsx)(nt,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,B.jsx)(Y,{children:e.name})]},e.path))}),document.body)]});let ae=t?[{label:t,path:e,icon:n}]:Xr(e,b)??Qr(e,s.places);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)($r,{onClick:re,title:o(`click_to_type_a_path`),children:ae.map((t,n)=>(0,B.jsxs)(ei,{$last:n===ae.length-1,children:[n>0&&(0,B.jsx)(J,{children:(0,B.jsx)(pn,{size:9})}),(0,B.jsxs)(ni,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):y({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,B.jsx)(ti,{children:(0,B.jsx)(dt,{place:t.place,size:13})}):t.icon&&(0,B.jsx)(ti,{children:t.icon}),t.label]})]},t.path))}),v&&(0,B.jsx)(we,{items:[{label:o(`open`),icon:(0,B.jsx)(mn,{size:14}),onSelect:()=>i(v.path)},{label:o(`open_in_new_tab`),icon:(0,B.jsx)(ln,{size:14}),onSelect:()=>i(v.path,!0)},{label:o(`copy_as_path`),icon:(0,B.jsx)(P,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(v.path)},...Qn(v.path)?[{label:o(`open_with`),icon:(0,B.jsx)(rn,{size:14}),onSelect:()=>void j(v.path)},{label:o(`properties`),icon:(0,B.jsx)(Xt,{size:14}),onSelect:()=>void bt([v.path])}]:[]],onClose:()=>y(null),x:v.x,y:v.y})]})}function Xr(e,t){let n=Et(e);if(!n)return null;let r=O(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,B.jsx)(gn,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function Zr(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function Qr(e,t){let n=Zr(e),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>r(t.path,e.path));t>i&&(i=t,a=e)}return a&&i>=0&&n.splice(0,i+1,{label:a.name,path:n[i].path,place:a}),n}function q(e){if(Qn(e)||Ct(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var $r=b.div`
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
`,ei=b.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,ti=b.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,J=b.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,ni=b.button`
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
`,ri=b.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,ii=b.div`
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
`,ai=b.button`
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
`,Y=b.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,oi=b.div`
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
`,si=b.button`
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
`;function ci({places:e,drives:t,recent:i,recentLimit:a,currentPath:o,activeKind:s,homePath:c=``,version:l=0,historyVersion:d=0,hiddenViews:f=[],onNavigate:p,onOpenView:g}){let[_,v]=(0,R.useState)([]),y=C(),[b,x]=(0,R.useState)(null),ee=Lt();(0,R.useEffect)(()=>{Qe().then(e=>{x(e),v(ut(e).filter(e=>e.pinned))},()=>{x(null),v([])})},[l]),(0,R.useEffect)(()=>{if(!S.available)return;let e=_.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||c).filter(e=>e.length>0);return S.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>S.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[_,c]);let te=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>r(e.path,t));return{name:b?.placeNames?.[t]??n?.name??(u(t)||t),path:t,kind:`folder`,icon:n?.icon??b?.placeIcons?.[t]??null}}),ne=s===`files`;return(0,B.jsxs)(mi,{children:[(0,B.jsxs)(hi,{children:[!f.includes(`home`)&&(0,B.jsxs)(X,{$active:s===`home`,onClick:e=>g(`home`,M(e)),title:y(`overview`),type:`button`,children:[(0,B.jsx)(sn,{}),(0,B.jsx)(xi,{children:y(`overview`)})]}),!f.includes(`recycle`)&&(0,B.jsxs)(X,{$active:s===`recycle`,onClick:e=>g(`recycle`,M(e)),title:y(`recycle_bin`),type:`button`,children:[(0,B.jsx)(En,{}),(0,B.jsx)(xi,{children:y(`recycle_bin`)})]}),!f.includes(`gallery`)&&(0,B.jsxs)(X,{$active:s===`gallery`,onClick:e=>g(`gallery`,M(e)),title:y(`gallery`),type:`button`,children:[(0,B.jsx)(Qt,{}),(0,B.jsx)(xi,{children:y(`gallery`)})]})]}),_.map(e=>(0,B.jsxs)(_i,{children:[(0,B.jsxs)(X,{as:`div`,$active:!1,children:[(0,B.jsx)(bi,{children:(0,B.jsx)(ot,{panel:e,size:16})}),(0,B.jsx)(xi,{children:y(e.title)})]}),(0,B.jsx)(vi,{children:(0,B.jsxs)(yi,{children:[e.kind===`quick`&&te(e).map(e=>(0,B.jsxs)(X,{$active:ne&&r(o,e.path),onClick:t=>p(e.path,M(t)),title:e.path,type:`button`,children:[(0,B.jsx)(dt,{place:e}),(0,B.jsx)(xi,{children:e.name})]},e.path)),e.kind===`recent`&&i.slice(0,a).map(e=>{let t=lt(ee,e.path);return(0,B.jsxs)(X,{$active:ne&&r(o,e.path),onClick:t=>e.isDirectory?p(e.path,M(t)):void me(e.path),title:e.path,type:`button`,children:[t&&ee.useIcons?(0,B.jsx)(dt,{place:t}):(0,B.jsx)(nt,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,B.jsx)(xi,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,B.jsx)(di,{historyVersion:d,onNavigate:p}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,B.jsxs)(X,{$active:ne&&r(o,e.name),onClick:t=>p(e.name,M(t)),title:e.name,type:`button`,children:[(0,B.jsx)(N,{}),(0,B.jsxs)(xi,{children:[h(e),(0,B.jsxs)(Si,{children:[m(e.freeSpace),` free`]}),(0,B.jsx)(Ci,{children:(0,B.jsx)(wi,{$used:t,$tone:n(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,B.jsx)(fi,{onNavigate:p,path:e.path||c})]})})]},e.id)),!f.includes(`settings`)&&(0,B.jsx)(gi,{children:(0,B.jsxs)(X,{$active:s===`settings`,onClick:e=>g(`settings`,M(e)),title:y(`settings`),type:`button`,children:[(0,B.jsx)(Xt,{}),(0,B.jsx)(xi,{children:y(`settings`)})]})})]})}var li=10,ui=40;function di({historyVersion:e=0,onNavigate:t}){let n=C(),[r,i]=(0,R.useState)(null),a=Lt();return(0,R.useEffect)(()=>{ye().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=lt(a,e.path);return(0,B.jsxs)(X,{$active:!1,onClick:n=>t(e.path,M(n)),title:o(n,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,B.jsx)(dt,{place:r}):(0,B.jsx)(nt,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,B.jsx)(xi,{children:r?.name||e.name})]},e.path)})}function fi({path:e,onNavigate:t}){let[n,i]=(0,R.useState)(null);(0,R.useEffect)(()=>{e&&(i(null),T(e,!1).then(i,()=>i(null)))},[e]),(0,R.useEffect)(()=>{if(e&&S.available)return S.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&r(n.data.path,e)&&T(e,!1).then(i,()=>void 0)})},[e]);let a=n?.entries??[],o=a.filter(e=>e.isDirectory).slice(0,li),s=a.filter(e=>!e.isDirectory).slice(0,ui);return(0,B.jsxs)(B.Fragment,{children:[o.map(e=>(0,B.jsx)(pi,{entry:e,onNavigate:t},e.fullPath)),s.map(e=>(0,B.jsx)(pi,{entry:e,onNavigate:t},e.fullPath))]})}function pi({entry:e,onNavigate:t}){let n=Lt(),r=lt(n,e.fullPath);return(0,B.jsxs)(X,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,M(n)):void me(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,B.jsx)(dt,{place:r}):(0,B.jsx)(nt,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,B.jsx)(xi,{children:r?.name||e.name})]})}var mi=b.aside`
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
`,hi=b.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,gi=b(hi)`
    margin-top: auto;
`,_i=b.div`
    display: flex;
    flex-direction: column;
`,vi=b.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${mi}:hover ${_i}:hover > & {
        grid-template-rows: 1fr;
    }
`,yi=b.div`
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
`,X=b.button`
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
`,bi=b.span`
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
`,xi=b.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Si=b.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Ci=b.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,wi=b.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`;function Ti({tabs:e,onRestore:t}){let n=C(),r=rr(),[i,a]=(0,R.useState)(!1),o=(0,R.useRef)(null);return(0,R.useEffect)(()=>{if(!i)return;let e=e=>{o.current?.contains(e.target)||a(!1)},t=()=>a(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[i]),(0,B.jsxs)(Ei,{ref:o,children:[(0,B.jsx)(Di,{$active:i,onClick:()=>a(e=>!e),title:n(`recently_closed_tabs`),type:`button`,children:(0,B.jsx)(_n,{size:15})}),i&&(0,B.jsxs)(Oi,{children:[(0,B.jsxs)(ki,{children:[(0,B.jsxs)(Ai,{children:[(0,B.jsx)(_n,{size:12}),n(`recently_closed_tabs`)]}),(0,B.jsx)(ji,{onClick:()=>a(!1),title:n(`close`),type:`button`,children:(0,B.jsx)(F,{size:10})})]}),e.length===0?(0,B.jsx)(Li,{children:n(`no_recently_closed_tabs`)}):(0,B.jsx)(Mi,{children:[...e].reverse().map((n,i)=>{let o=e.length-1-i,s=z(n);return(0,B.jsxs)(Ni,{onClick:()=>{a(!1),t(o)},title:n,type:`button`,children:[(0,B.jsx)(tr,{location:n}),(0,B.jsxs)(Pi,{children:[(0,B.jsx)(Fi,{children:r(n)}),(0,B.jsx)(Ii,{children:s?r(n):n})]})]},`${o}-${n}`)})})]})]})}var Ei=b.div`
    position: relative;
    display: flex;
`,Di=b.button`
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
`,Oi=b.div`
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
    ${Fe}
`,ki=b.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Ai=b.span`
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
`,ji=b.button`
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
`,Mi=b.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,Ni=b.button`
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
`,Pi=b.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Fi=b.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ii=b.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Li=b.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Ri=b.span`
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
`;function zi({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=C(),a=(0,R.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,R.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)},t=()=>r(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[n,r]),(0,B.jsxs)(Vi,{ref:a,children:[(0,B.jsxs)(Hi,{$active:n,onClick:()=>r(!n),title:s>0?o(i,s,`k_1_operation_running`,`count_operations_running`):i(`status_center`),type:`button`,children:[(0,B.jsx)(vn,{size:13}),c>0&&(0,B.jsx)(Ri,{children:c>9?`9+`:c})]}),n&&(0,B.jsxs)(Ui,{children:[(0,B.jsxs)(Wi,{children:[(0,B.jsxs)(Gi,{children:[(0,B.jsx)(vn,{size:12}),i(`status_center`)]}),(0,B.jsxs)(Ki,{children:[(0,B.jsx)(qi,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`clear_finished`)}),(0,B.jsx)(Ji,{onClick:()=>r(!1),title:i(`close`),type:`button`,children:(0,B.jsx)(F,{size:10})})]})]}),e.length===0?(0,B.jsx)(Xi,{children:i(`no_operations_yet`)}):(0,B.jsx)(Yi,{children:e.map(e=>(0,B.jsx)(Bi,{task:e},e.id))})]})]})}function Bi({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,B.jsxs)(Zi,{children:[(0,B.jsxs)(Qi,{children:[(0,B.jsx)($i,{$state:e.state,children:e.state===`done`?(0,B.jsx)(dn,{size:10}):e.state===`failed`?(0,B.jsx)(F,{size:10}):(0,B.jsx)(ea,{})}),(0,B.jsx)(ta,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,B.jsxs)(na,{children:[m(e.bytesDone),` / `,m(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,B.jsxs)(na,{children:[e.done,` / `,e.total]})]}),i&&(0,B.jsx)(ra,{children:(0,B.jsx)(ia,{$percent:r,$indeterminate:t===0})}),e.error&&(0,B.jsx)(aa,{children:e.error})]})}var Vi=b.div`
    position: relative;
    display: flex;
`,Hi=b.button`
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
`,Ui=b.div`
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
    ${Fe}
`,Wi=b.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Gi=b.span`
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
`,Ki=b.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,qi=b.button`
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
`,Ji=b.button`
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
`,Yi=b.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,Xi=b.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Zi=b.div`
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
`,Qi=b.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,$i=b.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,ea=b.span`
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
`,ta=b.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,na=b.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,ra=b.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,ia=b.div`
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
`,aa=b.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function oa(){if(!S.available)return[];try{return(await Be.readBlock(`/history`)).rows.map(e=>{let t=ca(e.paths);return{id:Number(e.id),label:String(e.label),paths:t.length>0?t.split(``):[],at:Number(e.at),applied:Number(e.applied)!==0,restorable:Number(e.restorable)!==0}})}catch{return(await S.request(`fs.history.list`)).entries}}async function sa(e){return S.available?(await S.request(`fs.history.undoTo`,{id:e})).ok:!1}function ca(e){return typeof e==`string`?e:``}function la(){let e=C(),[t,n]=(0,R.useState)(!1),[r,i]=(0,R.useState)([]),[a,o]=(0,R.useState)(!1),s=(0,R.useRef)(null),c=()=>void oa().then(i,()=>i([]));(0,R.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)},i=()=>n(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,i),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,i)}},[t]);let l=async e=>{o(!0);try{await sa(e),c()}finally{o(!1)}};return(0,B.jsxs)(fa,{ref:s,children:[(0,B.jsx)(pa,{$active:t,onClick:()=>n(e=>!e),title:e(`history`),type:`button`,children:(0,B.jsx)(bn,{size:14})}),t&&(0,B.jsxs)(ma,{children:[(0,B.jsxs)(ha,{children:[(0,B.jsxs)(ga,{children:[(0,B.jsx)(bn,{size:12}),e(`history`)]}),(0,B.jsx)(_a,{onClick:()=>n(!1),title:e(`close`),type:`button`,children:(0,B.jsx)(F,{size:10})})]}),r.length===0?(0,B.jsx)(Ea,{children:e(`no_operations_yet`)}):(0,B.jsx)(va,{children:r.map(t=>(0,B.jsxs)(ya,{children:[(0,B.jsxs)(ba,{children:[(0,B.jsxs)(xa,{children:[(0,B.jsx)(da,{label:t.label}),ua(e,t.label)]}),(0,B.jsx)(Sa,{children:d(t.at)})]}),t.paths.length>0&&(0,B.jsxs)(Ca,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,B.jsx)(wa,{children:(0,B.jsx)(Ta,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`undo`)})})]},t.id))})]})]})}function ua(e,t){if(t===`new_folder`)return e(`new_folder`);if(t===`new_file`)return e(`new_file`);if(t===`paste_text`)return e(`paste_text`);if(t===`paste_image`)return e(`paste_image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`move`?`move_count_items`:t===`copy`?`copy_count_items`:`delete_count_items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`rename`)} ${i[1]}`:t}function da({label:e}){return e.startsWith(`delete`)?(0,B.jsx)(En,{size:13}):e.startsWith(`move`)||e.startsWith(`copy`)?(0,B.jsx)(P,{size:13}):e.startsWith(`rename`)?(0,B.jsx)(wn,{size:13}):e.startsWith(`compress`)?(0,B.jsx)(yn,{size:13}):e.startsWith(`new`)?(0,B.jsx)(ln,{size:13}):(0,B.jsx)(mn,{size:13})}var fa=b.div`
    position: relative;
    display: flex;
`,pa=b.button`
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
`,ma=b.div`
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
    ${Fe}
`,ha=b.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,ga=b.span`
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
`,_a=b.button`
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
`,va=b.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,ya=b.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,ba=b.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,xa=b.span`
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
`,Sa=b.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Ca=b.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,wa=b.div`
    display: flex;
    justify-content: flex-end;
`,Ta=b.button`
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
`,Ea=b.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Da=(e=>(e[e.Border=-1]=`Border`,e[e.Data=0]=`Data`,e[e.Function=1]=`Function`,e[e.Position=2]=`Position`,e[e.Timing=3]=`Timing`,e[e.Alignment=4]=`Alignment`,e))(Da||{}),Oa=[0,1],ka=[1,0],Aa=[2,3],ja=[3,2],Ma={L:Oa,M:ka,Q:Aa,H:ja},Na=/^\d*$/,Pa=/^[A-Z0-9 $%*+./:-]*$/,Fa=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`,Ia=1,La=40,Ra=3,za=3,Ba=40,Va=10,Ha=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],Ua=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],Wa=class{constructor(e,t,n,r){if(this.version=e,this.ecc=t,e<Ia||e>La)throw RangeError(`Version value out of range`);if(r<-1||r>7)throw RangeError(`Mask value out of range`);this.size=e*4+17;let i=Array.from({length:this.size}).fill(!1);for(let e=0;e<this.size;e++)this.modules.push(i.slice()),this.types.push(i.map(()=>0));this.drawFunctionPatterns();let a=this.addEccAndInterleave(n);if(this.drawCodewords(a),r===-1){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let n=this.getPenaltyScore();n<e&&(r=t,e=n),this.applyMask(t)}}this.mask=r,this.applyMask(r),this.drawFormatBits(r)}size;mask;modules=[];types=[];getModule(e,t){return e>=0&&e<this.size&&t>=0&&t<this.size&&this.modules[t][e]}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0,Da.Timing),this.setFunctionModule(e,6,e%2==0,Da.Timing);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n===0&&r===0||n===0&&r===t-1||n===t-1&&r===0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.ecc[1]<<3|e,n=t;for(let e=0;e<10;e++)n=n<<1^(n>>>9)*1335;let r=(t<<10|n)^21522;for(let e=0;e<=5;e++)this.setFunctionModule(8,e,Ka(r,e));this.setFunctionModule(8,7,Ka(r,6)),this.setFunctionModule(8,8,Ka(r,7)),this.setFunctionModule(7,8,Ka(r,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,Ka(r,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,Ka(r,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,Ka(r,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;for(let e=0;e<18;e++){let n=Ka(t,e),r=this.size-11+e%3,i=Math.floor(e/3);this.setFunctionModule(r,i,n),this.setFunctionModule(i,r,n)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){let i=Math.max(Math.abs(r),Math.abs(n)),a=e+r,o=t+n;a>=0&&a<this.size&&o>=0&&o<this.size&&this.setFunctionModule(a,o,i!==2&&i!==4,Da.Position)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!==1,Da.Alignment)}setFunctionModule(e,t,n,r=Da.Function){this.modules[t][e]=n,this.types[t][e]=r}addEccAndInterleave(e){let t=this.version,n=this.ecc;if(e.length!==so(t,n))throw RangeError(`Invalid argument`);let r=Ua[n[0]][t],i=Ha[n[0]][t],a=Math.floor(oo(t)/8),o=r-a%r,s=Math.floor(a/r),c=[],l=co(i);for(let t=0,n=0;t<r;t++){let r=e.slice(n,n+s-i+(t<o?0:1));n+=r.length;let a=lo(r,l);t<o&&r.push(0),c.push(r.concat(a))}let u=[];for(let e=0;e<c[0].length;e++)c.forEach((t,n)=>{(e!==s-i||n>=o)&&u.push(t[e])});return u}drawCodewords(e){if(e.length!==Math.floor(oo(this.version)/8))throw RangeError(`Invalid argument`);let t=0;for(let n=this.size-1;n>=1;n-=2){n===6&&(n=5);for(let r=0;r<this.size;r++)for(let i=0;i<2;i++){let a=n-i,o=n+1&2?r:this.size-1-r;!this.types[o][a]&&t<e.length*8&&(this.modules[o][a]=Ka(e[t>>>3],7-(t&7)),t++)}}}applyMask(e){if(e<0||e>7)throw RangeError(`Mask value out of range`);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw Error(`Unreachable`)}!this.types[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[t][a]===n?(r++,r===5?e+=Ra:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*Ba),n=this.modules[t][a],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*Ba}for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[a][t]===n?(r++,r===5?e+=Ra:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*Ba),n=this.modules[a][t],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*Ba}for(let t=0;t<this.size-1;t++)for(let n=0;n<this.size-1;n++){let r=this.modules[t][n];r===this.modules[t][n+1]&&r===this.modules[t+1][n]&&r===this.modules[t+1][n+1]&&(e+=za)}let t=0;for(let e of this.modules)t=e.reduce((e,t)=>e+ +!!t,t);let n=this.size*this.size,r=Math.ceil(Math.abs(t*20-n*10)/n)-1;return e+=r*Va,e}getAlignmentPatternPositions(){if(this.version===1)return[];{let e=Math.floor(this.version/7)+2,t=this.version===32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}finderPenaltyCountPatterns(e){let t=e[1],n=t>0&&e[2]===t&&e[3]===t*3&&e[4]===t&&e[5]===t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]===0&&(e+=this.size),t.pop(),t.unshift(e)}};function Ga(e,t,n){if(t<0||t>31||e>>>t)throw RangeError(`Value out of range`);for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function Ka(e,t){return!!(e>>>t&1)}var qa=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw RangeError(`Invalid argument`);this.bitData=n.slice()}getData(){return this.bitData.slice()}},Ja=[1,10,12,14],Ya=[2,9,11,13],Xa=[4,8,16,16];function Za(e,t){return e[Math.floor((t+7)/17)+1]}function Qa(e){let t=[];for(let n of e)Ga(n,8,t);return new qa(Xa,e.length,t)}function $a(e){if(!no(e))throw RangeError(`String contains non-numeric characters`);let t=[];for(let n=0;n<e.length;){let r=Math.min(e.length-n,3);Ga(Number.parseInt(e.substring(n,n+r),10),r*3+1,t),n+=r}return new qa(Ja,e.length,t)}function eo(e){if(!ro(e))throw RangeError(`String contains unencodable characters in alphanumeric mode`);let t=[],n=0;for(;n+2<=e.length;n+=2){let r=Fa.indexOf(e.charAt(n))*45;r+=Fa.indexOf(e.charAt(n+1)),Ga(r,11,t)}return n<e.length&&Ga(Fa.indexOf(e.charAt(n)),6,t),new qa(Ya,e.length,t)}function to(e){return e===``?[]:no(e)?[$a(e)]:ro(e)?[eo(e)]:[Qa(ao(e))]}function no(e){return Na.test(e)}function ro(e){return Pa.test(e)}function io(e,t){let n=0;for(let r of e){let e=Za(r.mode,t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}function ao(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)===`%`?(t.push(Number.parseInt(e.substring(n+1,n+3),16)),n+=2):t.push(e.charCodeAt(n));return t}function oo(e){if(e<Ia||e>La)throw RangeError(`Version number out of range`);let t=(16*e+128)*e+64;if(e>=2){let n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return t}function so(e,t){return Math.floor(oo(e)/8)-Ha[t[0]][e]*Ua[t[0]][e]}function co(e){if(e<1||e>255)throw RangeError(`Degree out of range`);let t=[];for(let n=0;n<e-1;n++)t.push(0);t.push(1);let n=1;for(let r=0;r<e;r++){for(let e=0;e<t.length;e++)t[e]=uo(t[e],n),e+1<t.length&&(t[e]^=t[e+1]);n=uo(n,2)}return t}function lo(e,t){let n=t.map(e=>0);for(let r of e){let e=r^n.shift();n.push(0),t.forEach((t,r)=>n[r]^=uo(t,e))}return n}function uo(e,t){if(e>>>8||t>>>8)throw RangeError(`Byte out of range`);let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return n}function fo(e,t,n=1,r=40,i=-1,a=!0){if(!(Ia<=n&&n<=r&&r<=La)||i<-1||i>7)throw RangeError(`Invalid value`);let o,s;for(o=n;;o++){let n=so(o,t)*8,i=io(e,o);if(i<=n){s=i;break}if(o>=r)throw RangeError(`Data too long`)}for(let e of[ka,Aa,ja])a&&s<=so(o,e)*8&&(t=e);let c=[];for(let t of e){Ga(t.mode[0],4,c),Ga(t.numChars,Za(t.mode,o),c);for(let e of t.getData())c.push(e)}let l=so(o,t)*8;Ga(0,Math.min(4,l-c.length),c),Ga(0,(8-c.length%8)%8,c);for(let e=236;c.length<l;e^=253)Ga(e,8,c);let u=Array.from({length:Math.ceil(c.length/8)},()=>0);return c.forEach((e,t)=>u[t>>>3]|=e<<7-(t&7)),new Wa(o,t,u,i)}function po(e,t){let{ecc:n=`L`,boostEcc:r=!1,minVersion:i=1,maxVersion:a=40,maskPattern:o=-1,border:s=1}=t||{},c=typeof e==`string`?to(e):Array.isArray(e)?[Qa(e)]:void 0;if(!c)throw Error(`uqr only supports encoding string and binary data, but got: ${typeof e}`);let l=fo(c,Ma[n],i,a,o,r),u=mo({version:l.version,maskPattern:l.mask,size:l.size,data:l.modules,types:l.types},s);return t?.invert&&(u.data=u.data.map(e=>e.map(e=>!e))),t?.onEncoded?.(u),u}function mo(e,t=1){if(!t)return e;let{size:n}=e,r=n+t*2;e.size=r,e.data.forEach(e=>{for(let n=0;n<t;n++)e.unshift(!1),e.push(!1)});for(let n=0;n<t;n++)e.data.unshift(Array.from({length:r},e=>!1)),e.data.push(Array.from({length:r},e=>!1));let i=Da.Border;e.types.forEach(e=>{for(let n=0;n<t;n++)e.unshift(i),e.push(i)});for(let n=0;n<t;n++)e.types.unshift(Array.from({length:r},e=>i)),e.types.push(Array.from({length:r},e=>i));return e}function ho(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function go(e,t={}){let n=po(e,t),{pixelSize:r=10,whiteColor:i=`white`,blackColor:a=`black`}=t,o=n.size*r,s=n.size*r,c=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${o}">`,l=[];for(let e=0;e<n.size;e++)for(let t=0;t<n.size;t++){let i=t*r,a=e*r;n.data[e][t]&&l.push(`M${i},${a}h${r}v${r}h-${r}z`)}return c+=`<rect fill="${ho(i)}" width="${s}" height="${o}"/>`,c+=`<path fill="${ho(a)}" d="${l.join(``)}"/>`,c+=`</svg>`,c}function _o({currentFolder:e}){let t=C(),[n,i]=(0,R.useState)(!1),[a,o]=(0,R.useState)(null),[s,c]=(0,R.useState)(!1),l=(0,R.useRef)(null);(0,R.useEffect)(()=>{if(!n)return;let e=()=>void jt().then(o,()=>void 0);e();let t=window.setInterval(e,2500),r=e=>{l.current?.contains(e.target)||i(!1)},a=()=>i(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,a),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,a)}},[n]),(0,R.useEffect)(()=>{let e=()=>void jt().then(o,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{o(await e())}finally{c(!1)}},d=a?.shares.some(t=>r(t.path,e))??!1;return(0,B.jsxs)(vo,{ref:l,children:[(0,B.jsxs)(yo,{$active:n,onClick:()=>i(e=>!e),title:t(`share_folders`),type:`button`,children:[(0,B.jsx)(gn,{size:15}),a&&a.shares.length>0&&(0,B.jsx)(Ri,{children:a.shares.length>9?`9+`:a.shares.length})]}),n&&(0,B.jsxs)(bo,{children:[(0,B.jsxs)(xo,{children:[(0,B.jsxs)(So,{children:[(0,B.jsx)(Tn,{size:12}),t(`share`)]}),(0,B.jsx)(Co,{onClick:()=>i(!1),title:t(`close`),type:`button`,children:(0,B.jsx)(F,{size:10})})]}),(0,B.jsxs)(wo,{children:[(0,B.jsxs)(To,{children:[(0,B.jsx)(Cn,{size:15}),(0,B.jsxs)(`span`,{children:[(0,B.jsx)(`strong`,{children:a?.deviceName||t(`this_device`)}),(0,B.jsx)(Ao,{children:a?.fingerprint??``})]})]}),a?.shares.length===0&&(0,B.jsx)(jo,{children:t(`no_folders_are_shared_yet`)}),a?.shares.map(e=>(0,B.jsxs)(Mo,{children:[(0,B.jsxs)(No,{children:[(0,B.jsx)(Po,{title:e.path,children:e.name}),(0,B.jsx)(Io,{disabled:s,onClick:()=>void u(()=>Ut(e.id)),title:t(`stop_sharing`),type:`button`,children:(0,B.jsx)(F,{size:10})})]}),(0,B.jsx)(Fo,{title:e.path,children:e.path}),(0,B.jsxs)(Lo,{children:[(0,B.jsxs)(Ro,{$active:e.mode===`client`,onClick:()=>void u(()=>it(e.id,`client`)),title:t(`only_paired_devices_can_open_this_folder_in_the_app`),type:`button`,children:[(0,B.jsx)(Cn,{size:11}),t(`app`)]}),(0,B.jsxs)(Ro,{$active:e.mode===`web`,onClick:()=>void u(()=>it(e.id,`web`)),title:t(`any_device_with_a_browser_can_open_this_folder`),type:`button`,children:[(0,B.jsx)($t,{size:11}),t(`web`)]})]})]},e.id)),(0,B.jsxs)(zo,{disabled:s||e.length===0||d,onClick:()=>void u(()=>kt(e,`client`)),title:d?t(`this_folder_is_already_shared`):e,type:`button`,children:[(0,B.jsx)(ln,{size:12}),t(`share_this_folder`)]}),a?.webRunning&&(0,B.jsxs)(Bo,{children:[(0,B.jsxs)(Vo,{children:[(0,B.jsx)($t,{size:12}),t(`browser_access`)]}),(0,B.jsxs)(Do,{children:[(0,B.jsx)(Oo,{children:a.urls.map(e=>(0,B.jsx)(Ho,{onClick:()=>void On(e),type:`button`,children:e},e))}),a.preferredUrl&&(0,B.jsx)(Eo,{value:a.preferredUrl})]}),(0,B.jsx)(Ao,{children:t(`open_one_of_these_addresses_on_any_device_on_the_same_network`)})]})]})]})]})}var vo=b.div`
    position: relative;
    display: flex;
`,yo=b.button`
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
`,bo=b.div`
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
    ${Fe}
`,xo=b.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,So=b.span`
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
`,Co=b.button`
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
`,wo=b.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,To=b.div`
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
`;function Eo({value:e}){let t=C(),n=(0,R.useMemo)(()=>go(e,{ecc:`M`,border:2,pixelSize:4,blackColor:`#000000`,whiteColor:`#ffffff`}),[e]);return(0,B.jsx)(ko,{dangerouslySetInnerHTML:{__html:n},role:`img`,title:t(`scan_the_code_to_open_this_share_on_a_phone`)})}var Do=b.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,Oo=b.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
`,ko=b.div`
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
`,Ao=b.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,jo=b.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,Mo=b.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,No=b.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Po=b.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Fo=b.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Io=b.button`
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
`,Lo=b.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,Ro=b.button`
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
`,zo=b.button`
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
`,Bo=b.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,Vo=b.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,Ho=b.button`
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
`;function Uo(){let e=C();return(0,B.jsx)(Wo,{title:e(`always_applies_to_every_folder`),children:e(`global`)})}var Wo=b.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`;function Go({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=C(),[s,c]=(0,R.useState)(!1),l=(0,R.useRef)(null);(0,R.useEffect)(()=>{if(!s)return;let e=()=>c(!1),t=e=>{l.current?.contains(e.target)||c(!1)},n=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`keydown`,n)}},[s]),(0,R.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=Rt.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,B.jsxs)(Ko,{ref:l,children:[(0,B.jsx)(qo,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`view`),type:`button`,children:e.mode===`grid`?(0,B.jsx)(tn,{size:14}):(0,B.jsx)(Zt,{size:14})}),s&&(0,B.jsxs)(Jo,{children:[(0,B.jsxs)(Yo,{children:[(0,B.jsx)(an,{size:11}),o(`view`)]}),(0,B.jsxs)(Zo,{children:[(0,B.jsxs)(Qo,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,B.jsx)(Zt,{size:12}),` `,o(`list`)]}),(0,B.jsxs)(Qo,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,B.jsx)(tn,{size:12}),` `,o(`grid`)]})]}),(0,B.jsxs)(Yo,{children:[(0,B.jsx)(Zt,{size:11}),o(`list_icon_size`)]}),(0,B.jsxs)($o,{children:[(0,B.jsx)(`input`,{"aria-label":o(`list_icon_size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,B.jsxs)(es,{children:[e.iconSize,`px`]})]}),(0,B.jsxs)(Yo,{children:[(0,B.jsx)(tn,{size:11}),o(`grid_size`)]}),(0,B.jsxs)($o,{children:[(0,B.jsx)(`input`,{"aria-label":o(`grid_size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,B.jsxs)(es,{children:[e.gridSize,`px`]})]}),(0,B.jsxs)(Yo,{children:[(0,B.jsx)(fn,{size:11}),o(`columns`),(0,B.jsx)(Uo,{}),(0,B.jsx)(Xo,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:o(`reset_column_widths`),type:`button`,children:o(`reset_widths`)})]}),Rt.map(e=>(0,B.jsxs)(ts,{children:[(0,B.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,B.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,B.jsxs)(ts,{children:[(0,B.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,B.jsx)(`span`,{children:o(`link_target_after_the_name`)})]}),(0,B.jsxs)(Yo,{children:[(0,B.jsx)(hn,{size:11}),o(`preview_panel`),(0,B.jsx)(Uo,{})]}),(0,B.jsxs)(ts,{children:[(0,B.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,B.jsx)(`span`,{children:o(`preview_under_the_list`)})]})]})]})}var Ko=b.div`
    position: relative;
    display: flex;
    height: 100%;
`,qo=b.button`
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
`,Jo=b.div`
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
`,Yo=b.div`
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
`,Xo=b.button`
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
`,Zo=b.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Qo=b.button`
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
`,$o=b.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,es=b.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,ts=b.label`
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
`,ns=e=>(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,B.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),rs=e=>(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,B.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),is=e=>(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,B.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),as=e=>(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,B.jsx)(`path`,{d:`M2 5h6`})}),os=e=>(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,B.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),ss=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,B.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,B.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function cs({tabs:e,activeId:t,closedTabs:n,onRestoreClosed:r,onSelect:i,onClose:a,onNewTab:o,onReorder:s,onTransferToTab:c,view:l,onViewChange:u,onColumns:d,showImages:f,onShowImages:p,tasks:m,onClearTasks:h,activityOpen:g,onActivityOpenChange:_,trayCount:v,trayVisible:y,onToggleTray:b,split:ee,canSplit:te,onToggleSplit:ne,details:re,canDetails:ie,onToggleDetails:S,shortcuts:ae,currentFolder:se}){let w=C(),ce=x(),le=oe(),[ue,de]=(0,R.useState)({left:!1,right:!1}),[fe,pe]=(0,R.useState)(null),[me,he]=(0,R.useState)(null),ge=(0,R.useRef)(null),T=(0,R.useRef)(null),_e=(0,R.useRef)(null),ve=(0,R.useCallback)(()=>{let e=T.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;de(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,R.useEffect)(()=>{ve();let e=T.current;if(!e)return;let t=new ResizeObserver(ve);return t.observe(e),()=>t.disconnect()},[ve,e.length]),(0,R.useEffect)(()=>()=>{ge.current&&window.clearTimeout(ge.current.timer)},[]),(0,R.useEffect)(()=>{_e.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let ye=e=>T.current?.scrollBy({left:e,behavior:`smooth`}),be=()=>{ge.current&&window.clearTimeout(ge.current.timer),ge.current=null,he(null)};return(0,B.jsxs)(fs,{children:[(0,B.jsx)(ps,{children:(0,B.jsx)(Cn,{size:19})}),(0,B.jsxs)(ms,{children:[ue.left&&(0,B.jsx)(gs,{onClick:()=>ye(-180),title:w(`scroll_tabs_left`),type:`button`,children:(0,B.jsx)(ns,{})}),(0,B.jsx)(hs,{onScroll:ve,onWheel:e=>{let t=T.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:T,children:e.map(e=>(0,B.jsxs)(_s,{$active:e.id===t,$dragging:fe===e.id,$dropTarget:me===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!ft(t.dataTransfer)||!ls(e)||(t.preventDefault(),ge.current?.id===e.id))return;be(),he(e.id);let n=window.setTimeout(()=>{i(e.id),ge.current=null},500);ge.current={id:e.id,timer:n}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(ge.current?.id===e.id||me===e.id)&&be()},onDragEnd:()=>{pe(null),be()},onDragOver:t=>{(fe||ft(t.dataTransfer)&&ls(e))&&(t.preventDefault(),ft(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>pe(e.id),onDrop:t=>{if(t.preventDefault(),fe)s(fe,e.id);else if(ls(e)&&ft(t.dataTransfer)){let{paths:n,move:r}=At(t);n.length>0&&(i(e.id),c(n,e.path,!t.ctrlKey&&r))}pe(null),be()},onClick:()=>i(e.id),ref:e.id===t?_e:void 0,title:e.path||e.title,type:`button`,children:[(0,B.jsx)(us,{tab:e}),(0,B.jsx)(vs,{children:e.title}),e.partner&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(ys,{children:`|`}),(0,B.jsx)(ds,{place:e.partner.place}),(0,B.jsx)(vs,{children:e.partner.title})]}),(0,B.jsx)(bs,{"data-shortcut":A(ae.closeTab),onClick:t=>{t.stopPropagation(),a(e.id)},title:w(`close_tab`),children:(0,B.jsx)(is,{})})]},e.id))}),ue.right&&(0,B.jsx)(gs,{onClick:()=>ye(180),title:w(`scroll_tabs_right`),type:`button`,children:(0,B.jsx)(rs,{})}),(0,B.jsx)(xs,{"data-shortcut":A(ae.newTab),onClick:o,title:w(`new_tab`),type:`button`,children:(0,B.jsx)(ln,{size:13})})]}),(0,B.jsx)(Ss,{...le}),(0,B.jsxs)(Cs,{children:[(0,B.jsx)(Ts,{$active:ee,"data-shortcut":A(ae.splitView),disabled:!te,onClick:ne,title:w(ee?`close_split_view`:`split_view`),type:`button`,children:(0,B.jsx)(fn,{size:15})}),(0,B.jsx)(Ts,{$active:re,disabled:!ie,onClick:S,title:w(re?`hide_details_panel`:`show_details_panel`),type:`button`,children:(0,B.jsx)(an,{size:15})}),(0,B.jsxs)(ws,{$active:y,onClick:b,title:w(y?`hide_file_tray`:`show_file_tray`),type:`button`,children:[(0,B.jsx)(on,{size:14}),v>0&&(0,B.jsx)(Ri,{children:v>9?`9+`:v})]}),(0,B.jsx)(Ti,{onRestore:r,tabs:n}),(0,B.jsx)(la,{}),(0,B.jsx)(_o,{currentFolder:se}),(0,B.jsx)(zi,{tasks:m,onClear:h,open:g,onOpenChange:_}),(0,B.jsx)(Go,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:u,onColumns:d,onShowImages:p,showImages:f,view:l}),(0,B.jsx)(Es,{onClick:ce.minimize,title:w(`minimize`),type:`button`,children:(0,B.jsx)(as,{})}),(0,B.jsx)(Es,{onClick:ce.toggleMaximize,title:ce.maximized?w(`restore`):w(`maximize`),type:`button`,children:ce.maximized?(0,B.jsx)(ss,{}):(0,B.jsx)(os,{})}),(0,B.jsx)(Ds,{onClick:ce.close,title:w(`close`),type:`button`,children:(0,B.jsx)(is,{})})]})]})}function ls(e){return e.kind===`files`&&(!y(e.path)||a(e.path))}function us({tab:e}){switch(e.kind){case`home`:return(0,B.jsx)(Yt,{size:13});case`settings`:return(0,B.jsx)(Xt,{size:13});case`recycle`:return(0,B.jsx)(En,{size:13});default:return e.archive?(0,B.jsx)(yn,{size:13}):(0,B.jsx)(ds,{place:e.place})}}function ds({place:e}){return e?(0,B.jsx)(dt,{place:e,size:13}):(0,B.jsx)(nn,{size:13})}var fs=b.header`
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
`,ps=b.span`
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
`,ms=b.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,hs=b.div`
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
`,gs=b.button`
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
`,_s=b.button`
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
`,vs=b.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ys=b.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,bs=b.span`
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
`,xs=b.button`
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
`,Ss=b.div`
    flex: 1;
    min-width: 28px;
`,Cs=b.div`
    display: flex;
    flex-shrink: 0;
`,ws=b.button`
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
`,Ts=b.button`
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
`,Es=b.button`
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
`,Ds=b(Es)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function Os(){let[e,t]=(0,R.useState)(null),n=(0,R.useRef)(null),r=(0,R.useRef)(void 0);return(0,R.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`blur`,i),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`blur`,i),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,dr.createPortal)((0,B.jsx)(ks,{tooltip:e}),document.body):null}function ks({tooltip:e}){let t=(0,R.useRef)(null),[n,r]=(0,R.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,R.useState)(()=>e.bottom+6);return(0,R.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,B.jsxs)(As,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,B.jsx)(js,{children:e.text}),e.shortcut&&(0,B.jsx)(Ms,{children:e.shortcut})]})}var As=b.div`
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
`,js=b.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,Ms=b.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,Ns=[{id:`ui`,label:`interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`interface`},{id:`names`,label:`file_names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`interface`},{id:`details`,label:`details_panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`interface`},{id:`path`,label:`address_bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`monospace`},{id:`mono`,label:`monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`text_preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`monospace`}];function Ps(e){return`"${e.replaceAll(`"`,``)}"`}function Fs(e){let t=document.documentElement.style;for(let n of Ns){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${Ps(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function Is(){return S.available?(await S.request(`app.fonts`)).fonts??[]:[]}function Ls({deviceName:e,code:t,onAccept:n,onReject:r}){let i=C(),a=(0,R.useRef)(null);return(0,R.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,dr.createPortal)((0,B.jsx)(Rs,{children:(0,B.jsxs)(zs,{role:`alertdialog`,"aria-modal":`true`,children:[(0,B.jsxs)(Bs,{children:[(0,B.jsx)(gn,{size:15}),i(`pair_for_sharing`)]}),(0,B.jsx)(Vs,{children:i(`device_wants_to_pair_with_this_device_for_sharing_folders`,{device:e})}),(0,B.jsx)(Hs,{children:t}),(0,B.jsx)(Us,{children:i(`check_that_the_other_device_shows_the_same_code_before_accepting`)}),(0,B.jsxs)(Ws,{children:[(0,B.jsx)(Gs,{onClick:r,type:`button`,children:i(`reject`)}),(0,B.jsx)(Ks,{onClick:n,ref:a,type:`button`,children:i(`accept`)})]})]})}),document.body)}var Rs=b.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${ze}
`,zs=b.div`
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
`,Bs=b.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,Vs=b.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,Hs=b.div`
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
`,Us=b.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Ws=b.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,Gs=b.button`
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
`,Ks=b(Gs)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,qs=b.button`
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
`,Js=b.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,Ys=`modulepreload`,Xs=function(e){return`/`+e},Zs={},Qs=function(e){return e.pathname.endsWith(`.css`)},$s=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},ec=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Xs(t,n);let r=s(t),i=Qs(r);return $s(Zs,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Ys,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},tc=(0,R.lazy)(()=>ec(()=>import(`./OverviewView-DptroEww.js`).then(e=>e.n).then(e=>({default:e.OverviewView})),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),nc=(0,R.lazy)(()=>ec(()=>import(`./SettingsView--qkTnHF3.js`).then(e=>({default:e.SettingsView})),__vite__mapDeps([11,1,2,4,5,3,6,7,9,8,10]))),rc=(0,R.lazy)(()=>ec(()=>import(`./GalleryView-C-FE38c0.js`).then(e=>e.n).then(e=>({default:e.GalleryView})),__vite__mapDeps([12,1,2,4,5,3,6,9]))),ic=(0,R.lazy)(()=>ec(()=>import(`./RecycleView-CPNMuBHc.js`).then(e=>({default:e.RecycleView})),__vite__mapDeps([13,1,2,4,5,3,6,8]))),ac=0,oc=new Set;function sc(e){oc.add(e),S.send({type:`app.navigate.done`,payload:{path:e}})}var cc=20,lc=[{value:`0`,label:`auto`},{value:`932`,label:`japanese_cp932`},{value:`936`,label:`simplified_chinese_cp936`},{value:`950`,label:`traditional_chinese_cp950`},{value:`949`,label:`korean_cp949`},{value:`1252`,label:`western_cp1252`},{value:`1250`,label:`central_european_cp1250`},{value:`1251`,label:`cyrillic_cp1251`},{value:`1254`,label:`turkish_cp1254`},{value:`1253`,label:`greek_cp1253`},{value:`1256`,label:`arabic_cp1256`},{value:`1255`,label:`hebrew_cp1255`},{value:`1257`,label:`baltic_cp1257`},{value:`874`,label:`thai_cp874`},{value:`65001`,label:`utf_8`}];function uc(e){return e.history[e.index]??$n(`home`)}function Z(e){return z(uc(e))??`files`}function Q(e){let t=uc(e);return z(t)?``:e.listing?.path||t}function dc(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||Z(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function fc(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function pc(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||Pe.iconSize,gridSize:e.view?.gridSize||t.gridSize||Pe.gridSize,sort:e.view?.sort??Pe.sort,sortDescending:e.view?.sortDescending??Pe.sortDescending,columns:t.columns??w.columns??[]}}function mc(e=$n(`home`)){return ac+=1,{id:`tab-${ac}`,listing:null,loading:!z(e),error:null,history:[e],index:0,fresh:!0,view:null}}function hc(e){return e instanceof Error?e.message:String(e)}function gc(e){let t=Et(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return O(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function _c(e){let t=u(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function vc(e){return y(e)?Ce(e):void 0}function yc(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return o(e,t.entries.length,`k_1_item_size`,`count_items_size`,{size:m(n)})}function bc(){let e=C(),[n,i]=(0,R.useState)(()=>[mc()]),[d,f]=(0,R.useState)(()=>n[0].id),[m,h]=(0,R.useState)(null),[v,b]=(0,R.useState)(()=>{let e=Ke(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[x,ee]=(0,R.useState)([]),[te,re]=(0,R.useState)([]),[oe,se]=(0,R.useState)(null),[ye,De]=(0,R.useState)(null),[ke,Ae]=(0,R.useState)(null),je=ie(),[E,Ne]=(0,R.useState)(ve),[Fe,ze]=(0,R.useState)(0),[Be,Ve]=(0,R.useState)(0),[He,We]=(0,R.useState)(0),[D,Je]=(0,R.useState)(ve),[Ze,$e]=(0,R.useState)(0),[nt,it]=(0,R.useState)(0),[O,ot]=(0,R.useState)(0),[dt,bt]=(0,R.useState)(0),xt=(0,R.useRef)(dt);xt.current=dt;let[Et,kt]=(0,R.useState)([]),[At,jt]=(0,R.useState)(10),[j,Lt]=(0,R.useState)(null),Rt=ae(s(j?.themeMode)),Ut=(0,R.useMemo)(()=>(j?.favorites??[]).map(e=>t(e.path)),[j?.favorites]),[Jt,Yt]=(0,R.useState)(0),[N,Zt]=(0,R.useState)(ct),[tn,nn]=(0,R.useState)(0),[rn,an]=(0,R.useState)(0),[on,dn]=(0,R.useState)(0),[fn,pn]=(0,R.useState)(!0),[hn,gn]=(0,R.useState)(()=>{let e=Ke(`yafm.preview.width`,320);return e>=220?e:320}),[_n,vn]=(0,R.useState)(null),[bn,Cn]=(0,R.useState)(null),[wn,Tn]=(0,R.useState)({kind:null,info:null}),[P,F]=(0,R.useState)(`primary`),[On,kn]=(0,R.useState)(null),[An,Mn]=(0,R.useState)(null),[I,Nn]=(0,R.useState)(null),[L,Pn]=(0,R.useState)(null),[Fn,In]=(0,R.useState)(null),[Ln,Rn]=(0,R.useState)({primary:0,secondary:0}),[zn,Bn]=(0,R.useState)({primary:null,secondary:null}),[Vn,Hn]=(0,R.useState)(null),[Un,Wn]=(0,R.useState)([]),[Gn,Kn]=(0,R.useState)(!1),[Xn,Zn]=(0,R.useState)(null),[Qn,rr]=(0,R.useState)(``),ir=(0,R.useRef)([]),ar=(0,R.useRef)([]),[sr,cr]=(0,R.useState)([]),[lr,ur]=(0,R.useState)([]),[dr,pr]=(0,R.useState)(!1),mr=(0,R.useMemo)(()=>dr?new Set(lr.map(e=>e.path)):new Set,[lr,dr]),[hr,gr]=(0,R.useState)(!1),[_r,vr]=(0,R.useState)([]),[yr,br]=(0,R.useState)(null),xr=(0,R.useRef)(0),[Sr,Cr]=(0,R.useState)(()=>{let e=Ee(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?fc({x:e.x,y:e.y}):fc({x:Math.max(20,window.innerWidth-340),y:110})}),wr=(0,R.useCallback)(()=>{Cr(e=>fc(e)),gr(!0)},[]),V=n.find(e=>e.id===d)??n[0],H=Z(V),Tr=uc(V),U=Q(V),Er=H===`files`?V.listing?.parent??gc(U):null,W=V.splitWith?n.find(e=>e.id===V.splitWith):void 0,Or=H===`files`&&W!==void 0,kr=W?Q(W):``,Ar=W?W.listing?.parent??gc(kr):null,G=Or&&W&&P===`secondary`?W:V,jr=j?.defaultView??w,Pr=pc(G,jr);(0,R.useEffect)(()=>{g(j?.accentColor,j?.secondaryColor,Rt)},[j?.accentColor,j?.secondaryColor,Rt]),(0,R.useEffect)(()=>{Fs(j?.fonts)},[j?.fonts]),(0,R.useEffect)(()=>{p(j?.timeFormat,j?.timeFormatPattern),l(j?.relativeTime,j?.relativeTimeWindowMinutes)},[j?.timeFormat,j?.timeFormatPattern,j?.relativeTime,j?.relativeTimeWindowMinutes]),(0,R.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!j?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[j?.backgroundSource]),(0,R.useEffect)(()=>(qe(e=>new Promise(t=>{br({id:++xr.current,prompt:e,resolve:t})})),()=>qe(null)),[]),(0,R.useEffect)(()=>{F(`primary`)},[d]),(0,R.useEffect)(()=>{Je(ve),it(0),ot(0)},[H]),(0,R.useEffect)(()=>{it(0)},[D.query,D.matchCase,D.regex]),(0,R.useEffect)(()=>{it(e=>O===0?0:Math.min(e,O-1))},[O]);let K=Pr.columns.includes(`linkCount`),Fr=(0,R.useMemo)(()=>{let e={},n=ut(j),r={};for(let[e,n]of Object.entries(j?.placeNames??{}))r[t(e)]=n;for(let n of x)e[t(n.path)]=n;for(let i of n)if(i.kind===`quick`&&i.id!==`quick`)for(let n of i.places??[]){let i=t(n),a=x.find(e=>t(e.path)===i);e[i]={name:r[i]??a?.name??(u(n)||n),path:n,kind:`folder`,icon:a?.icon??j?.placeIcons?.[n]??null}}return e},[x,j]),Ir=(0,R.useMemo)(()=>({places:Fr,useIcons:j?.systemIcons===!1}),[Fr,j?.systemIcons]),Lr=j?.defaultView?.showImages??!0,Rr=j?.defaultView?.imageStripHeight??w.imageStripHeight,zr=H===`home`?(0,B.jsx)(sn,{size:13}):H===`settings`?(0,B.jsx)(Xt,{size:13}):H===`recycle`?(0,B.jsx)(En,{size:13}):H===`gallery`?(0,B.jsx)(Qt,{size:13}):void 0,Br=E.open&&E.query.length>0,Vr=(0,R.useDeferredValue)(E),Ur=(0,R.useMemo)(()=>Br&&G.listing?G.listing.entries.filter(e=>ue(e.isDirectory?st(Ir,e.fullPath,e.name):e.name,Vr)).map(e=>e.fullPath):[],[Br,Vr,G.listing,Ir]);(0,R.useEffect)(()=>{ze(0)},[E.query,E.matchCase,E.regex,G.listing?.path]);let Wr=Ur.length===0?-1:Math.min(Fe,Ur.length-1),Gr=(0,R.useCallback)(()=>{Ne(e=>({...e,open:!1,query:``})),ze(0)},[]),Kr=(0,R.useCallback)(()=>{Ne(e=>({...e,open:!0})),Ve(e=>e+1)},[]),qr=(0,R.useCallback)(()=>{Je(e=>({...e,open:!0})),$e(e=>e+1)},[]),Jr=(0,R.useCallback)(()=>{Je(ve),it(0),ot(0)},[]),Xr=(0,R.useCallback)(e=>{it(t=>O===0?0:(Math.min(t,O-1)+e+O)%O)},[O]),Zr=(0,R.useCallback)(e=>{Ne(t=>({...t,open:!0,query:t.open?t.query+e:e})),Ve(e=>e+1)},[]),Qr=(0,R.useCallback)(e=>{ze(t=>Ur.length===0?0:(Math.min(t,Ur.length-1)+e+Ur.length)%Ur.length)},[Ur.length]),q=(0,R.useRef)({tabs:n,activeId:d,activePane:P});q.current={tabs:n,activeId:d,activePane:P};let $r=(0,R.useRef)(j);$r.current=j;let ei=(0,R.useRef)(!1),ti=(0,R.useRef)([]),J=(0,R.useCallback)((e,t)=>{i(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),ni=(0,R.useRef)(new Map),ri=(0,R.useCallback)(e=>{let t=(ni.current.get(e)??0)+1;return ni.current.set(e,t),()=>ni.current.get(e)===t},[]),ii=(0,R.useCallback)((e,t)=>{S.available&&t&&e===dc(q.current)&&S.send({type:`fs.focus`,payload:{path:t}})},[]),ai=(0,R.useCallback)(async(e,t,n)=>{if(!(t&&Ct(t)))try{let r=(await Xe(t,K)).listing;if(!n()||!r)return;J(e,e=>e.loading?{listing:{...r,total:r.entries.length,signature:0},view:r.view??null}:{})}catch{}},[K,J]),Y=(0,R.useCallback)(async(e,t,n=!1)=>{let i=ri(e);Gr(),ii(e,t);let a=!n||!q.current.tabs.find(t=>t.id===e)?.listing,o=!n&&t!==void 0;J(e,e=>{if(!o)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let i=e.history[e.index],a=i!==void 0&&r(i,t);return{listing:null,loading:!0,error:null,fresh:!1,history:a?e.history:[...e.history.slice(0,e.index+1),t],index:a?e.index:e.index+1}});try{a&&ai(e,t,i);let r=t&&Ct(t)?await Ft(t):await T(t,!0,K,xt.current,t?vc(t):void 0,e);if(!i())return;J(e,e=>({listing:r,view:r.view??null,loading:!1,fresh:!1,history:o?e.history.map((t,n)=>n===e.index?r.path:t):e.history,index:e.index})),!n&&!Ct(r.path)&&xe(r.path).then(()=>Yt(e=>e+1))}catch(r){if(!i())return;let a=q.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?Q(a):``,s=gc(o),c=hc(r);if(o&&Ge(c)){let r=_(o),a=await Le(r,!!Ce(r));if(a){Ye(r,a),i()&&Y(e,t,n);return}}J(e,e=>({listing:{path:o,parent:s,total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[ri,K,J,ii,Gr,ai]),oi=(0,R.useRef)(new Set),si=(0,R.useCallback)(async e=>{let t=q.current.tabs.find(t=>t.id===e),n=t?.listing;if(!t||Z(t)!==`files`||!n)return;let i=n.entries.length;if(i<=0||i>=(n.total??0)||li.current.has(e))return;let a=`${e}|${n.path}|${i}`;if(oi.current.add(a))try{let t=await be(n.path,i,n.view?.sort??`name`,n.view?.sortDescending??!1);J(e,e=>{let a=e.listing;return!a||!r(a.path,n.path)||a.entries.length!==i||a.view?.sort!==n.view?.sort?{}:{listing:{...a,entries:[...a.entries,...t.entries],total:t.total}}})}catch{}finally{oi.current.delete(a)}},[J]),li=(0,R.useRef)(new Set),ui=(0,R.useCallback)(async e=>{let t=q.current.tabs.find(t=>t.id===e),n=t?.listing;if(t&&Z(t)===`files`&&n&&!(n.entries.length>=(n.total??0))&&li.current.add(e))try{let t=[],i=n.entries.length,a=n.total??0;for(;i<a;){let e=await be(n.path,i,n.view?.sort??`name`,n.view?.sortDescending??!1);if(e.entries.length===0)break;t.push(e.entries),i+=e.entries.length,a=e.total}if(t.length===0)return;J(e,e=>{let i=e.listing;return!i||!r(i.path,n.path)||i.entries.length!==n.entries.length?{}:{listing:{...i,entries:[...i.entries,...t.flat()],total:a}}})}catch{}finally{li.current.delete(e)}},[J]),[di,fi]=(0,R.useState)(0),pi=(0,R.useCallback)(async e=>{let t=q.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0;await ui(e),(q.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0)>t&&fi(e=>e+1)},[ui]),mi=G.id,hi=Z(G),gi=G.listing?.entries.length??0,_i=G.listing?.total??0;(0,R.useEffect)(()=>{E.open&&E.query.length!==0&&(hi!==`files`||gi>=_i||ui(mi))},[E.open,E.query,mi,hi,gi,_i,ui]);let vi=(0,R.useCallback)((e,t)=>{let n=er(t);n&&(z(n)?(Gr(),ri(e),J(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):Y(e,n))},[ri,Y,J,Gr]),yi=(0,R.useCallback)(async(e,t,n)=>{if(Gr(),z(t)){ri(e),J(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=ri(e);ii(e,t),J(e,()=>({index:n,listing:null,loading:!0,error:null}));try{Ct(t)||ai(e,t,r);let n=Ct(t)?await Ft(t):await T(t,!0,K,xt.current,vc(t),e);if(!r())return;J(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;let a=hc(i);if(Ge(a)){let i=_(t),a=await Le(i,!!Ce(i));if(a){Ye(i,a),r()&&yi(e,t,n);return}}J(e,()=>({listing:{path:t,parent:gc(t),total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:hc(i)}))}},[ri,K,J,ii,Gr,ai]),X=(0,R.useCallback)((e,t=!0)=>{let n=mc(e??$n(`home`));return i(e=>[...e,n]),t&&f(n.id),e&&!z(e)&&Y(n.id,e),n.id},[Y]),bi=(0,R.useCallback)(e=>{for(let t of q.current.tabs)Z(t)===`files`&&r(Q(t),e)&&Y(t.id,e,!0)},[Y]),xi=(0,R.useCallback)((e,t)=>{let n=u(t);for(let i of q.current.tabs)i.listing?.entries.some(t=>r(t.fullPath,e))&&J(i.id,i=>{let a=i.listing;if(!a)return{};let o=a.entries.map(i=>r(i.fullPath,e)?{...i,name:n,fullPath:t}:i);return{listing:{...a,entries:o}}})},[J]),Si=(0,R.useRef)([]);(0,R.useEffect)(()=>{let e=new Set;for(let r of n){let n=r.listing?.path??r.history[r.index]??``;n&&y(n)&&e.add(t(_(n)))}let r=Si.current.filter(t=>!e.has(t));Si.current=[...e],r.length>0&&ge(r)},[n]);let Ci=(0,R.useCallback)((e,t=!1)=>{t?X($n(e)):vi(q.current.activeId,$n(e))},[X,vi]),wi=(0,R.useCallback)(e=>{let{tabs:t,activeId:n}=q.current,r=t.find(t=>t.id===e),a=t.filter(t=>t.id!==e&&t.id!==r?.splitWith);if(r&&!r.hidden&&(ar.current.push(uc(r)),ar.current.length>cc&&ar.current.shift(),cr([...ar.current])),a.length===0){let e=mc();i([e]),f(e.id);return}let o=t.findIndex(t=>t.id===e);i(a),n===e&&f(a[Math.min(o,a.length-1)].id)},[]),Ti=(0,R.useCallback)(()=>{let e=ar.current.pop();if(!e)return;cr([...ar.current]);let t={...mc(e),fresh:!1};i(e=>[...e,t]),f(t.id),Z(t)===`files`&&Y(t.id,Q(t))},[Y]),Ei=(0,R.useCallback)(e=>{let t=ar.current,n=t[e];if(!n)return;t.splice(e,1),cr([...t]);let r={...mc(n),fresh:!1};i(e=>[...e,r]),f(r.id),Z(r)===`files`&&Y(r.id,Q(r))},[Y]),Di=(0,R.useCallback)((e,t=!1)=>{t?X(e):vi(dc(q.current),e??$n(`home`))},[vi,X]),Oi=(0,R.useCallback)(e=>{let{tabs:t,activeId:n}=q.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;f(r[i].id)},[]),ki=(0,R.useCallback)(()=>{let{tabs:e,activeId:t}=q.current,n=e.find(e=>e.id===t);if(!n||Z(n)!==`files`)return;let r=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(r){i(e=>e.filter(e=>e.id!==r.id)),J(t,()=>({splitWith:void 0})),F(`primary`);return}let a=Q(n),o={...mc(a),hidden:!0};i(e=>[...e,o]),J(t,()=>({splitWith:o.id})),Y(o.id,a),F(`primary`)},[Y,J]),Ai=(0,R.useCallback)(e=>{gn(e),le(`yafm.preview.width`,e)},[]),ji=(0,R.useCallback)((e,t,n)=>Tn(r=>r.kind===e&&r.info?.path===t?.path&&r.info?.modified===t?.modified&&r.info?.name===t?.name&&r.note===n?r:{kind:e,info:t,note:n}),[]),Mi=(0,R.useCallback)((e,t)=>ji(`gallery`,e,t),[ji]),Ni=(0,R.useCallback)((e,t)=>ji(`recycle`,e,t),[ji]),Pi=Or?P===`secondary`?bn??_n:_n??bn:_n,Fi=Or&&P===`secondary`?Ln.secondary:Ln.primary,Ii=H===`files`?Pi:wn.kind===H?wn.info:null,Li=H===`files`?Fi>1?o(e,Fi,`k_1_item_selected`,`count_items_selected`):void 0:wn.kind===H?wn.note:void 0,Ri=(0,R.useMemo)(()=>H===`files`&&V.listing?yc(e,V.listing):Qn,[H,V.listing,e,Qn]),zi=(0,R.useRef)(null),Bi=e=>{e.preventDefault();let t=zi.current?.getBoundingClientRect();if(!t)return;let n=Math.max(t.width-7,1),r=e=>{let r=Math.min(Math.max((e.clientX-t.left)/n,.2),.8);b(r),le(`yafm.split.ratio`,r)},i=()=>{window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,i)};window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,i)},Vi=(e,t,n)=>{t&&kn({x:e.clientX,y:e.clientY,directory:t,refresh:n})},Hi=(0,R.useCallback)((e,t)=>{Rn(n=>n[e]===t?n:{...n,[e]:t})},[]),Ui=(0,R.useCallback)(e=>Hi(`primary`,e),[Hi]),Wi=(0,R.useCallback)(e=>Hi(`secondary`,e),[Hi]),Gi=(e,t)=>{Ln[e]!==0&&Bn(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},Ki=async(e,t=!1)=>{let n=On;if(kn(null),!n)return;let r=e===null?await It(n.directory,t):await Tt(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;Gr(),Hn(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},qi=(0,R.useCallback)(()=>{let{tabs:e}=q.current,t=e.find(e=>e.id===dc(q.current));t&&t.index>0&&yi(t.id,t.history[t.index-1],t.index-1)},[yi]),Ji=(0,R.useCallback)(()=>{let{tabs:e}=q.current,t=e.find(e=>e.id===dc(q.current));t&&t.index<t.history.length-1&&yi(t.id,t.history[t.index+1],t.index+1)},[yi]),Yi=(0,R.useCallback)(()=>{let{tabs:e}=q.current,t=e.find(e=>e.id===dc(q.current));t&&Z(t)===`files`&&t.listing?.parent&&Di(t.listing.parent)},[Di]),Xi=(0,R.useRef)(null),Zi=(0,R.useCallback)(()=>{for(let e of q.current.tabs)e.listing&&Y(e.id,e.listing.path,!0)},[Y]),Qi=(0,R.useCallback)(e=>{e.length!==0&&(vr(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),wr())},[wr]),$i=(0,R.useCallback)(async e=>{let t=await wt(e);t.length!==0&&Qi(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[Qi]),ea=(0,R.useCallback)(e=>{let t=new Set(e);vr(e=>e.filter(e=>!t.has(e.path)))},[]),ta=(0,R.useCallback)(async e=>{let n=$r.current;if(!n)return;let r=await wt(e);if(r.length===0)return;let i=new Set((n.favorites??[]).map(e=>t(e.path))),a=r.filter(e=>!i.has(t(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(a.length===0)return;let o={...n,favorites:[...n.favorites??[],...a]};Lt(o),await et(o),nn(e=>e+1)},[]),na=(0,R.useCallback)(async e=>{let n=$r.current;if(!n)return;let r=new Set(e.map(t)),i=(n.favorites??[]).filter(e=>!r.has(t(e.path)));if(i.length===(n.favorites??[]).length)return;let a={...n,favorites:i};Lt(a),await et(a),nn(e=>e+1)},[]),ra=(0,R.useCallback)(()=>vr([]),[]),ia=(0,R.useRef)(-1),aa=(0,R.useCallback)(e=>{ur(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),pr(e.move),e.entries.length>0&&wr()},[wr]),oa=(0,R.useCallback)(async()=>{if(S.available)try{let e=await Ht();ia.current=e.sequence,aa(e)}catch{}},[aa]),sa=(0,R.useCallback)(async e=>{e.length!==0&&await St(e,!1)&&await oa()},[oa]),ca=(0,R.useRef)(_r);ca.current=_r;let la=(0,R.useRef)(hr);la.current=hr;let ua=(0,R.useRef)(!1);(0,R.useEffect)(()=>{let e=j?.trayAutoShow??!0,t=t=>{e&&ft(t)&&(la.current||(ua.current=!0),wr())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{ua.current&&window.setTimeout(()=>{ua.current&&ca.current.length===0&&gr(!1),ua.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[wr,j?.trayAutoShow]),(0,R.useEffect)(()=>{let e=()=>Cr(e=>fc(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let da=(0,R.useCallback)(async()=>{let e=ca.current;if(e.length>0){let t=await wt(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));vr(e=>e.filter(e=>n.has(e.path)))}await oa()},[oa]),fa=(0,R.useCallback)(()=>{da(),dn(e=>e+1),Zi()},[da,Zi]),pa=(0,R.useCallback)(e=>{let t=fc(e);Cr(t),_e(`yafm.tray.position`,t)},[]),ma=(0,R.useCallback)(()=>{ua.current=!1,hr?gr(!1):wr()},[wr,hr]),ha=(0,R.useCallback)(async(t,n,r)=>{let i=await Wt(t,n,r);i.cancelled||(i.ok?(r&&ea(t),dn(e=>e+1),Zi(),oa()):Se(i.error??e(`the_files_could_not_be_transferred`)))},[Zi,oa,ea]);(0,R.useEffect)(()=>{if(S.available)return qn().then(e=>{ir.current=e,Wn(e)},()=>void 0),S.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=ir.current.find(t=>t.id===e.id);return!t||t.state!==e.state});ir.current=n,Wn(n),r&&Kn(!0)})},[]);let ga=(0,R.useCallback)(()=>{Jn().then(()=>qn().then(e=>{ir.current=e,Wn(e)},()=>void 0))},[]);(0,R.useEffect)(()=>{if(!S.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await Ht();if(!e||t.sequence===ia.current)return;ia.current=t.sequence,aa(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[aa]);let _a=(0,R.useCallback)(async e=>{let t=e?await Kt():await Dt();t.ok?(dn(e=>e+1),Zi()):t.error&&!t.error.startsWith(`Nothing to`)&&Se(t.error)},[Zi]),va=(0,R.useRef)(K);(0,R.useEffect)(()=>{va.current!==K&&(va.current=K,Zi())},[K,Zi]);let ya=(0,R.useCallback)((e,t)=>{let{tabs:n}=q.current,r=n.find(t=>t.id===e);if(!r||Z(r)!==`files`)return;let i=Q(r),a=$r.current?.defaultView??w,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||Pe.iconSize,gridSize:r.view?.gridSize||a.gridSize||Pe.gridSize,sort:r.view?.sort??Pe.sort,sortDescending:r.view?.sortDescending??Pe.sortDescending,...t};J(e,()=>({view:o})),Xi.current!==null&&window.clearTimeout(Xi.current),Xi.current=window.setTimeout(()=>{Xi.current=null,Ue(i,o)},250)},[J]),ba=(0,R.useCallback)(e=>{ya(dc(q.current),e)},[ya]),xa=(0,R.useCallback)(e=>{let t=$r.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??w,columns:e}};Lt(n),et(n)},[]),Sa=(0,R.useCallback)(e=>{let t=$r.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??w,showImages:e}};Lt(n),et(n)},[]),Ca=(0,R.useCallback)(e=>{let t=$r.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??w,imageStripHeight:e}};Lt(n),et(n)},[]),wa=(0,R.useCallback)((e,t,n,r)=>{let i=q.current.tabs.find(t=>t.id===e);if(!i||Z(i)!==`files`||!i.listing)return;let a=Q(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));J(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Re(a,t,n,r)},[J]),Ta=(0,R.useCallback)((e,t)=>{let n=q.current.tabs.find(t=>t.id===e);if(!n)return;let r=pc(n,$r.current?.defaultView??w);ya(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending}),Y(e,Q(n),!0)},[ya,Y]),Ea=(0,R.useCallback)((e,t)=>{i(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),Da=(0,R.useCallback)(()=>{fe().then(ee,()=>ee([]))},[]),Oa=(0,R.useCallback)(e=>{let t=(e.openTabs??[]).map(er).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...mc(e),fresh:!1})),r=Math.min(Math.max(e.activeTab??0,0),n.length-1);i(n),f(n[r].id);let a=n[r];return(Z(a)===`files`?Y(a.id,Q(a),!0):Promise.resolve()).then(()=>{for(let e of n)e!==a&&Z(e)===`files`&&Y(e.id,Q(e),!0)}),!0},[Y]),ka=(0,R.useCallback)(e=>{let t=ti.current;if(ti.current=[],t.length===0)return;let n=t.filter(e=>!oc.has(e));for(let e of t)n.includes(e)||sc(e);if(n.length===0)return;let{tabs:r}=q.current;if(!e&&r.length===1&&r[0].fresh){vi(r[0].id,n[0]),sc(n[0]);for(let e of n.slice(1))X(e),sc(e);return}let i=n.map(e=>{let t=X(e);return sc(e),t}).at(-1);i&&setTimeout(()=>f(i),0)},[X,vi]),Aa=(0,R.useCallback)(()=>{Qe().then(e=>{Lt(e),jt(e.recentLimit);let t=Vt(e.shortcuts);Zt(t),Pt(yt(t,`openInNewTab`)),nn(e=>e+1),ei.current||(ei.current=!0,ka(e.restoreTabs&&Oa(e)))},()=>{jt(10),ei.current=!0,ka(!1)})},[ka,Oa]),ja=(0,R.useCallback)(()=>{he().then(kt,()=>kt([]))},[]),Ma=(0,R.useCallback)(()=>{ce().then(re,()=>re([]))},[]),Na=n.filter(e=>!e.hidden),Pa=Na.map(uc),Fa=Pa.join(`
`),Ia=Math.max(Na.findIndex(e=>e.id===d),0);(0,R.useEffect)(()=>{if(!j?.restoreTabs)return;let e=setTimeout(()=>void tt(Pa,Ia),700);return()=>clearTimeout(e)},[Fa,Ia,j?.restoreTabs]),(0,R.useEffect)(()=>{let{tabs:e,activeId:t}=q.current,n=e.find(e=>e.id===t);n&&n.fresh&&Z(n)===`files`&&Y(n.id,Q(n),!0),Da(),Aa(),Ma(),Dn().then(se,()=>se(null))},[Y,Da,Aa,Ma]),(0,R.useEffect)(()=>{if(jn().then(De,()=>De(null)),S.available)return S.on(e=>{let t=e;t.type===`update.checked`&&t.data&&De(t.data)})},[]),(0,R.useEffect)(()=>{if(S.available)return S.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&h({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&Se(e(`pairing_code_code`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&Se(n.data.error??e(`pairing_failed`))}})},[e]),(0,R.useEffect)(()=>{let e=setInterval(Ma,3e4);return()=>clearInterval(e)},[Ma]),(0,R.useEffect)(()=>{H===`home`&&(ja(),Ma())},[H,V.id,ja,Ma]),(0,R.useEffect)(()=>{if(!S.available)return;let e=S.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=q.current,i=t.data.startup===!0;i&&oc.has(n)?sc(n):i&&!ei.current?ti.current.includes(n)||ti.current.push(n):(i&&r.length===1&&r[0].fresh?vi(r[0].id,n):z(n)?vi(dc(q.current),n):X(n),i&&sc(n))});return S.send({type:`app.ready`}),e},[vi,X]),(0,R.useEffect)(()=>{if(S.available)return S.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:r}=t.data;i(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let i=e.slice(),a=e[t];return i[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...r}}},i})})},[]),(0,R.useEffect)(()=>{if(S.available)return S.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:r}=t.data;i(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let i=e.slice(),a=e[t];return i[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...r}}},i})})},[]),(0,R.useEffect)(()=>{let e=e=>{if(pt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),qi();return}if(e.key===`BrowserForward`){e.preventDefault(),Ji();return}if(e.key===`Escape`&&E.open){e.preventDefault(),Gr();return}let t=vt(e);if(k(N,`closeTab`,t)&&(e.preventDefault(),wi(dc(q.current))),k(N,`newTab`,t)&&(e.preventDefault(),X()),k(N,`reopenTab`,t)&&(e.preventDefault(),Ti()),k(N,`goBack`,t)&&(e.preventDefault(),qi()),k(N,`goForward`,t)&&(e.preventDefault(),Ji()),k(N,`goUp`,t)&&(e.preventDefault(),Yi()),k(N,`find`,t)&&(e.preventDefault(),H===`files`?Kr():qr()),k(N,`location`,t)&&(e.preventDefault(),an(e=>e+1)),k(N,`home`,t)){e.preventDefault();let t=x.find(e=>e.kind===`home`)?.path;t&&Di(t)}k(N,`iconsView`,t)&&(e.preventDefault(),H===`files`&&ba({mode:`grid`})),k(N,`detailsView`,t)&&(e.preventDefault(),H===`files`&&ba({mode:`list`})),k(N,`nextTab`,t)&&(e.preventDefault(),Oi(1)),k(N,`previousTab`,t)&&(e.preventDefault(),Oi(-1)),k(N,`hidden`,t)&&(e.preventDefault(),Te().then(()=>{dn(e=>e+1),Zi()})),k(N,`undo`,t)&&(e.preventDefault(),_a(!0)),k(N,`redo`,t)&&(e.preventDefault(),_a(!1)),k(N,`splitView`,t)?(e.preventDefault(),ki()):Object.keys(N).some(e=>e!==`openInNewTab`&&k(N,e,t))||H!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Zr(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[N,H,E.open,wi,Ti,X,qi,Ji,Yi,Kr,qr,Gr,Zr,ba,Oi,Di,x,Zi,_a,ki]),(0,R.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),qi()):(e.button===4||e.button===9)&&(e.preventDefault(),Ji())},t=e=>{(e.button===3||e.button===4||e.button===8||e.button===9)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[qi,Ji]),(0,R.useEffect)(()=>{if(S.available)return S.on(e=>{let t=e;if(t.type===`app.navigation`)switch(t.data?.direction){case`back`:qi();break;case`forward`:Ji()}})},[qi,Ji]);let La=(0,R.useMemo)(()=>{let e=new Set;for(let t of n){if(Z(t)!==`files`)continue;let n=Q(t);if(n&&!Ct(n)){if(y(n)){let t=gc(_(n));t&&e.add(t)}else e.add(n)}}return[...e]},[n]),Ra=La.join(`\0`);(0,R.useEffect)(()=>{S.available&&S.send({type:`fs.watch`,payload:{paths:La,owner:`app`}})},[Ra,d]);let za=Z(G)===`files`?Q(G):``;(0,R.useEffect)(()=>{S.available&&S.send({type:`fs.focus`,payload:{path:za||null}})},[za]),(0,R.useEffect)(()=>{if(S.available)return S.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,i=q.current.tabs.filter(e=>Z(e)===`files`&&r(Q(e),n)),a=q.current.tabs.filter(e=>{let t=Q(e);return Z(e)===`files`&&t.length>0&&y(t)&&r(_(t),n)});if(i.length!==0||a.length!==0){Ie(n);for(let e of a){let t=q.current.tabs.find(t=>t.id===e.id),i=t?Q(t):``;t&&Z(t)===`files`&&!t.loading&&y(i)&&r(_(i),n)&&Y(e.id,i,!0)}i.length!==0&&T(n,!1,K).then(e=>{for(let t of i){let n=q.current.tabs.find(e=>e.id===t.id);n&&Z(n)===`files`&&r(Q(n),e.path)&&(n.loading?window.setTimeout(()=>{let n=q.current.tabs.find(e=>e.id===t.id);n&&!n.loading&&Z(n)===`files`&&r(Q(n),e.path)&&J(t.id,()=>({listing:e}))},300):J(t.id,()=>({listing:e})))}},()=>void 0)}})},[K,Y,J]);let Ba=V.index>0,Va=V.index<V.history.length-1,Ha=(e,t)=>{let n=pc(e,jr),i=e.listing?.path??e.history[e.index]??``,o=y(i),s=o&&a(i);return(0,B.jsx)(Bt,{platform:oe?.platform,confirmDelete:j?.confirmDelete??!1,cutPaths:mr,previewVideoAudio:j?.previewVideoAudio??!1,previewVideoAutoplay:j?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?vn:Cn,onActivate:()=>F(t?`primary`:`secondary`),enableShortcuts:(!Or||(t?P===`primary`:P===`secondary`))&&(!o||s),error:e.error,find:e.id===G.id?{...E,currentPath:Wr<0?null:Ur[Wr]}:void 0,selectMatchesToken:e.id===G.id?He:0,imageStripHeight:Rr,listing:e.listing,loading:e.loading,onImageStripHeight:Ca,readOnly:o&&!s||Ct(e.listing?.path??``),onOpen:(t,n)=>{n?X(t):Y(e.id,t)},onOpenFile:(t,n)=>{Ct(t)?Nt(t).catch(e=>void Se(hc(e))):c(t)?j?.archiveHandler??!1?n?X(t):Y(e.id,t):me(t):y(t)?(async()=>{let e=await pe(t,xt.current,vc(t));if(!e.path&&Ge(e.error)){let n=_(t),r=Ce(n);r&&Me(n);let i=await Le(n,!!r);i&&(Ye(n,i),e=await pe(t,xt.current,i))}e.path?me(e.path):e.error&&Se(e.error)})():me(t)},onRefresh:()=>{let t=e.listing?.path;t&&bi(t)},onLoadMore:()=>void si(e.id),onEnsureComplete:()=>void pi(e.id),selectAllToken:e.id===G.id?di:0,onRename:xi,onSelectionCountChange:t?Ui:Wi,onSetTags:(t,n,r)=>wa(e.id,t,n,r),selectionMenuRequest:t?zn.primary:zn.secondary,onSort:t=>Ta(e.id,t),onPaste:fa,onClipboardChanged:()=>void oa(),onTransfer:ha,onAddToTray:e=>void $i(e),onAddFavorite:e=>void ta(e),onRemoveFavorite:e=>void na(e),favoritePaths:Ut,onExtractArchive:(e,t)=>void Ja(e,t),openOnSingleClick:j?.openOnSingleClick??!1,pendingRename:Vn&&t===(P===`primary`)&&r(Vn.directory,e.listing?.path??``)?Vn.path:null,pendingRenameToken:Vn?.token??0,refreshToken:on,shortcuts:N,showCheckboxes:j?.showCheckboxes??!0,showImages:Lr,view:n})},Ua=E.open&&(0,B.jsx)(Hr,{current:Wr,focusToken:Be,matchCase:E.matchCase,mode:E.mode,onClose:Gr,onMatchCase:()=>Ne(e=>({...e,matchCase:!e.matchCase})),onMode:()=>Ne(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Qr(1),onPrevious:()=>Qr(-1),onQuery:e=>Ne(t=>({...t,query:e})),onRegex:()=>Ne(e=>({...e,regex:!e.regex})),query:E.query,regex:E.regex,total:Ur.length,onSelectMatches:Ur.length>0?()=>We(e=>e+1):void 0}),Wa=H===`files`&&y(U),Ga=Wa&&a(U),Ka=Wa&&V.listing?.archiveEncrypted===!0,qa=async(t,n)=>{let r=_(t),i=await de(r,n,xt.current,vc(r));if(!i.ok&&Ge(i.error)){let e=Ce(r);e&&Me(r);let t=await Le(r,!!e);t&&(Ye(r,t),i=await de(r,n,xt.current,t))}i.ok?(bi(n),Oe(),Y(V.id,n,!0)):Se(`${e(`could_not_extract_the_archive`)}${i.error?`\n${i.error}`:``}`)},Ja=async(e,t)=>{let n=_(e),i=gc(n);if(!i)return;if(t===`choose`){let e=await ht(i);e&&await qa(n,e);return}let a=t===`named`;if(t===`auto`){let e=r(n,U)?V.listing?.entries??[]:(await T(n,!1,!1,xt.current,vc(n))).entries;a=!(e.length===1&&e[0].isDirectory)}let o=i.includes(`\\`)?`\\`:`/`,s=a?`${i.replace(/[\\/]+$/,``)}${o}${_c(n)}`:i;await qa(n,s)},Ya=async e=>{Wa&&await Ja(U,e)},Xa=async()=>{Wa&&await Ja(U,`choose`)},Za=(0,B.jsxs)(Tc,{children:[(0,B.jsx)($,{"data-shortcut":A(N.goBack),disabled:!Ba,onClick:e=>{V.index>0&&M(e)?X(V.history[V.index-1]):qi()},onContextMenu:e=>{V.index<=0||(e.preventDefault(),Nn({x:e.clientX,y:e.clientY,tab:V,direction:`back`}))},title:e(`back`),type:`button`,children:(0,B.jsx)(Sn,{})}),(0,B.jsx)($,{"data-shortcut":A(N.goForward),disabled:!Va,onClick:e=>{V.index<V.history.length-1&&M(e)?X(V.history[V.index+1]):Ji()},onContextMenu:e=>{V.index>=V.history.length-1||(e.preventDefault(),Nn({x:e.clientX,y:e.clientY,tab:V,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,B.jsx)(mn,{})}),(0,B.jsx)($,{"data-shortcut":A(N.goUp),disabled:H!==`files`||!Er,onClick:e=>{Er&&(M(e)?X(Er):Di(Er))},title:e(`up_one_level`),type:`button`,children:(0,B.jsx)(cn,{})}),(0,B.jsx)(Yr,{focusToken:rn,icon:zr,label:H===`files`?void 0:e(Yn[H]),onContextMenu:H===`files`?(e,t,n)=>Pn({x:t,y:n,path:e}):void 0,onNavigate:Di,path:H===`files`?U:Tr}),H===`files`&&(!Wa||Ga)&&(0,B.jsx)($,{onClick:e=>Vi(e,U,()=>void Y(V.id,U,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,B.jsx)(ln,{})}),(0,B.jsx)($,{"data-shortcut":A(N.find),onClick:()=>H===`files`?Kr():qr(),title:e(`search`),type:`button`,children:(0,B.jsx)(un,{})}),Ln.primary>0&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(Js,{}),(0,B.jsx)($,{onClick:e=>Gi(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,B.jsx)(xn,{})})]}),(0,B.jsx)(`span`,{ref:Zn,style:{display:`contents`}}),Wa&&(0,B.jsxs)(Ec,{children:[(0,B.jsx)(Js,{}),Ka&&(0,B.jsxs)(Dc,{title:e(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,B.jsx)(en,{size:12}),e(`encrypted`)]}),(0,B.jsx)($,{onClick:()=>void Xa(),onContextMenu:e=>{e.preventDefault(),Mn({x:e.clientX,y:e.clientY})},title:e(`extract_archive`),type:`button`,children:(0,B.jsx)(yn,{})}),(0,B.jsx)(rt,{icon:(0,B.jsx)($t,{size:15}),onChange:e=>{let t=Number(e);bt(t),xt.current=t,Wa&&Y(V.id,U,!0)},options:lc.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`archive_encoding`)}: ${e(lc.find(e=>e.value===String(dt))?.label??`auto`)}`,value:String(dt)})]})]}),Qa=D.open?{...D,index:nt}:null,$a=t=>{let n=z(t);return n?e(Yn[n]):st(Ir,t,nr(t)||e(`files`))};return(0,B.jsx)(_t,{value:Ir,children:(0,B.jsxs)(xc,{$rounded:je,children:[(0,B.jsx)(or,{settings:j,theme:Rt}),(0,B.jsx)(cs,{activeId:V.id,closedTabs:sr,onClose:wi,onNewTab:()=>X(),onRestoreClosed:Ei,onReorder:Ea,onTransferToTab:ha,onSelect:f,onViewChange:ba,onColumns:xa,onShowImages:Sa,showImages:Lr,tasks:Un,onClearTasks:ga,activityOpen:Gn,onActivityOpenChange:Kn,trayCount:_r.length+lr.length,trayVisible:hr,onToggleTray:ma,split:Or,canSplit:H===`files`,onToggleSplit:ki,details:fn,canDetails:H===`files`||H===`recycle`||H===`gallery`,onToggleDetails:()=>pn(e=>!e),currentFolder:H===`files`&&!Ct(U)?U:``,shortcuts:N,view:Pr,tabs:n.filter(e=>!e.hidden).map(t=>{let r=Z(t),i=Q(t),a=t.splitWith?n.find(e=>e.id===t.splitWith):void 0,o=a?Q(a):``;return{id:t.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?lt(Ir,i):void 0,archive:r===`files`&&y(i),split:!!a,title:r===`files`?st(Ir,i,u(i)||e(`files`)):e(Yn[r]),partner:a?{title:st(Ir,o,u(o)||e(`files`)),place:lt(Ir,o)}:void 0}})}),(0,B.jsxs)(Sc,{children:[(0,B.jsx)(ci,{activeKind:H,currentPath:H===`files`?Tr:``,drives:te,historyVersion:Jt,onNavigate:Di,onOpenView:Ci,homePath:x.find(e=>e.kind===`home`)?.path??``,places:x,recent:Et,recentLimit:At,version:tn}),(0,B.jsxs)(Cc,{children:[(0,B.jsxs)(Nc,{children:[(0,B.jsxs)(Pc,{children:[H!==`files`&&Za,(0,B.jsx)(wc,{children:(0,B.jsxs)(R.Suspense,{fallback:null,children:[H!==`files`&&D.open&&(0,B.jsx)(Hr,{current:nt,focusToken:Ze,matchCase:D.matchCase,mode:D.mode,onClose:Jr,onMatchCase:()=>Je(e=>({...e,matchCase:!e.matchCase})),onMode:()=>Je(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Xr(1),onPrevious:()=>Xr(-1),onQuery:e=>Je(t=>({...t,query:e})),onRegex:()=>Je(e=>({...e,regex:!e.regex})),placeholder:e(`search`),query:D.query,regex:D.regex,total:O,onSelectMatches:H===`gallery`||H===`recycle`?()=>We(e=>e+1):void 0}),H===`files`?Or&&W?(0,B.jsxs)(kc,{ref:zi,children:[(0,B.jsxs)(Ac,{style:{flex:v},children:[(0,B.jsxs)(Oc,{$active:P===`primary`,onPointerDown:()=>F(`primary`),children:[(0,B.jsx)($,{"data-shortcut":A(N.goBack),disabled:!Ba,onClick:e=>{let t=V.index-1;t<0||(M(e)?X(V.history[t]):yi(V.id,V.history[t],t))},onContextMenu:e=>{V.index<=0||(e.preventDefault(),Nn({x:e.clientX,y:e.clientY,tab:V,direction:`back`}))},title:e(`back`),type:`button`,children:(0,B.jsx)(Sn,{})}),(0,B.jsx)($,{"data-shortcut":A(N.goForward),disabled:!Va,onClick:e=>{let t=V.index+1;t>=V.history.length||(M(e)?X(V.history[t]):yi(V.id,V.history[t],t))},onContextMenu:e=>{V.index>=V.history.length-1||(e.preventDefault(),Nn({x:e.clientX,y:e.clientY,tab:V,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,B.jsx)(mn,{})}),(0,B.jsx)($,{"data-shortcut":A(N.goUp),disabled:!Er,onClick:e=>{Er&&(M(e)?X(Er):Y(V.id,Er))},title:e(`up_one_level`),type:`button`,children:(0,B.jsx)(cn,{})}),(0,B.jsx)(Yr,{focusToken:P===`primary`?rn:void 0,onContextMenu:(e,t,n)=>Pn({x:t,y:n,path:e}),onNavigate:(e,t)=>t?X(e):void Y(V.id,e),path:U}),(0,B.jsx)($,{onClick:e=>Vi(e,U,()=>void Y(V.id,U,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,B.jsx)(ln,{})}),(0,B.jsx)($,{"data-shortcut":A(N.find),onClick:Kr,title:e(`search`),type:`button`,children:(0,B.jsx)(un,{})}),Ln.primary>0&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(Js,{}),(0,B.jsx)($,{onClick:e=>Gi(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,B.jsx)(xn,{})})]})]}),Ha(V,!0),P===`primary`&&Ua]}),(0,B.jsx)(jc,{onDoubleClick:()=>b(.5),onPointerDown:Bi,title:e(`drag_to_resize_double_click_to_reset`)}),(0,B.jsxs)(Ac,{$enter:!0,style:{flex:1-v},children:[(0,B.jsxs)(Oc,{$active:P===`secondary`,onPointerDown:()=>F(`secondary`),children:[(0,B.jsx)($,{"data-shortcut":A(N.goBack),disabled:W.index<=0,onClick:e=>{let t=W.index-1;t<0||(M(e)?X(W.history[t]):yi(W.id,W.history[t],t))},onContextMenu:e=>{W.index<=0||(e.preventDefault(),Nn({x:e.clientX,y:e.clientY,tab:W,direction:`back`}))},title:e(`back`),type:`button`,children:(0,B.jsx)(Sn,{})}),(0,B.jsx)($,{"data-shortcut":A(N.goForward),disabled:W.index>=W.history.length-1,onClick:e=>{let t=W.index+1;t>=W.history.length||(M(e)?X(W.history[t]):yi(W.id,W.history[t],t))},onContextMenu:e=>{W.index>=W.history.length-1||(e.preventDefault(),Nn({x:e.clientX,y:e.clientY,tab:W,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,B.jsx)(mn,{})}),(0,B.jsx)($,{"data-shortcut":A(N.goUp),disabled:!Ar,onClick:e=>{Ar&&(M(e)?X(Ar):Y(W.id,Ar))},title:e(`up_one_level`),type:`button`,children:(0,B.jsx)(cn,{})}),(0,B.jsx)(Yr,{focusToken:P===`secondary`?rn:void 0,onContextMenu:(e,t,n)=>Pn({x:t,y:n,path:e}),onNavigate:(e,t)=>t?X(e):void Y(W.id,e),path:kr}),(0,B.jsx)($,{onClick:e=>Vi(e,kr,()=>void Y(W.id,kr,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,B.jsx)(ln,{})}),(0,B.jsx)($,{"data-shortcut":A(N.find),onClick:Kr,title:e(`search`),type:`button`,children:(0,B.jsx)(un,{})}),Ln.secondary>0&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(Js,{}),(0,B.jsx)($,{onClick:e=>Gi(`secondary`,e),title:e(`selection_menu`),type:`button`,children:(0,B.jsx)(xn,{})})]})]}),Ha(W,!1),P===`secondary`&&Ua]})]}):(0,B.jsxs)(B.Fragment,{children:[Za,(0,B.jsxs)(Mc,{children:[Ha(V,!0),Ua]})]}):H===`home`?(0,B.jsx)(tc,{platform:oe?.platform,drives:te,find:Qa,historyVersion:Jt,onSearchMatches:ot,homePath:x.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:Ma,onHistoryChanged:()=>Yt(e=>e+1),onAddToTray:e=>void $i(e),onAddFavorite:e=>void ta(e),onRemoveFavorite:e=>void na(e),favoritePaths:Ut,onExtractArchive:(e,t)=>void Ja(e,t),settingsVersion:tn,theme:Rt,onOpen:Di,onLayoutChanged:Aa,onPlacesChanged:ee,onRecentCleared:ja,places:x,recent:Et,recentLimit:At,visibilityVersion:on}):H===`settings`?(0,B.jsx)(nc,{appInfo:oe,find:Qa,focusSection:ke,onSearchMatches:ot,onSettingsChanged:Aa}):H===`gallery`?(0,B.jsx)(rc,{platform:oe?.platform,toolbarSlot:Xn,onStatusChange:rr,confirmDelete:j?.confirmDelete??!1,find:Qa,onSearchMatches:ot,openOnSingleClick:j?.openOnSingleClick??!1,onAddToTray:e=>void $i(e),onAddFavorite:e=>void ta(e),onRemoveFavorite:e=>void na(e),favoritePaths:Ut,onExtractArchive:(e,t)=>void Ja(e,t),shortcuts:N,showCheckboxes:j?.showCheckboxes??!0,selectMatchesToken:He,onPreviewChange:Mi,view:Pr}):(0,B.jsx)(ic,{find:Qa,toolbarSlot:Xn,onStatusChange:rr,onOpenLocation:Di,onShowDetails:()=>pn(!0),platform:oe?.platform,selectMatchesToken:He,onPreviewChange:Ni})]})},H)]}),(H===`files`||H===`gallery`||H===`recycle`)&&(0,B.jsx)(mt,{emptyNote:e(`nothing_selected`),info:Ii,onWidth:Ai,open:fn,selectionNote:Li,videoAudio:j?.previewVideoAudio??!1,videoAutoplay:j?.previewVideoAutoplay??!1,width:hn})]}),(0,B.jsxs)(zc,{children:[(0,B.jsx)(`span`,{children:Ri}),oe?(0,B.jsxs)(Fc,{children:[(0,B.jsxs)(`span`,{children:[`v`,oe.version,` · `,oe.platform]}),oe.debug&&(0,B.jsx)(Rc,{children:`debug`}),ye?.available&&(0,B.jsxs)(Ic,{onClick:e=>{Ae(`updates`),Ci(`settings`,M(e))},title:e(`version_version_is_available`,{version:ye.latest}),type:`button`,children:[(0,B.jsx)(Lc,{}),e(`update_available`)]})]}):(0,B.jsx)(`span`,{children:e(`browser_preview`)})]})]})]}),(0,B.jsx)(at,{clipboardItems:lr,clipboardMove:dr,currentDirectory:H===`files`?Tr:``,items:_r,onAdd:e=>void $i(e),onClear:ra,onClose:()=>gr(!1),onCopyToClipboard:e=>void sa(e),onPosition:pa,onRemove:ea,onTransfer:ha,position:Sr,visible:hr}),On&&(0,B.jsx)(gt,{creationOnly:!0,directory:On.directory,menu:{x:On.x,y:On.y,paths:[],background:!0},onClose:()=>kn(null),onCreateFile:e=>void Ki(e),onCreateFolder:e=>void Ki(null,e),shortcuts:N}),L&&(0,B.jsx)(gt,{allowCompression:!0,directory:gc(L.path)??L.path,menu:{x:L.x,y:L.y,paths:[L.path]},onAddToTray:e=>void $i(e),onAddFavorite:e=>void ta(e),onRemoveFavorite:e=>void na(e),favoritePaths:Ut,onExtractArchive:(e,t)=>void Ja(e,t),onArchiveCreated:e=>{e&&bi(gc(L.path)??L.path)},onClose:()=>Pn(null),onCompressTo:(e,t)=>In({paths:e,name:t}),onCopy:(e,t)=>void St(e,t),onDelete:e=>void Mt(e,!1).then(()=>bi(gc(L.path)??L.path)),onOpen:(e,t)=>t?X(e):void Y(V.id,e),onOpenFile:e=>void me(e),onPaste:e=>void Ot(e).then(t=>{t.ok&&bi(e)}),onRefresh:()=>bi(L.path),shortcuts:N,target:{path:L.path,isDirectory:!0}}),Fn&&(0,B.jsx)(qt,{initialDirectory:gc(L?.path??U)??U,initialName:Fn.name,onCancel:()=>In(null),onCompress:async e=>{let t=await zt(Fn.paths,e);return!t.ok&&t.error&&Se(t.error),t.ok}}),I&&(0,B.jsx)(we,{items:[{label:$a(I.tab.history[I.tab.index]??``),icon:(0,B.jsx)(tr,{location:I.tab.history[I.tab.index]??``}),tooltip:I.tab.history[I.tab.index]??``,disabled:!0,onSelect:()=>void 0},...I.tab.history.map((e,t)=>({path:e,index:t})).filter(({index:e})=>I.direction===`back`?e<I.tab.index:e>I.tab.index).sort((e,t)=>I.direction===`back`?t.index-e.index:e.index-t.index).slice(0,24).map(({path:e,index:t})=>({label:$a(e),icon:(0,B.jsx)(tr,{location:e}),tooltip:e,onSelect:()=>{let n=I.tab;Nn(null),yi(n.id,e,t)}}))],onClose:()=>Nn(null),x:I.x,y:I.y}),An&&(0,B.jsx)(we,{items:[{label:e(`extract_here`),onSelect:()=>void Ya(`here`)},{label:e(`extract_to_a_folder_named_after_the_archive`),onSelect:()=>void Ya(`named`)},{label:e(`auto_extract_to_the_current_folder`),onSelect:()=>void Ya(`auto`)}],onClose:()=>Mn(null),x:An.x,y:An.y}),yr&&(0,B.jsx)(fr,{action:yr.prompt.action,delaySeconds:yr.prompt.delaySeconds,hits:yr.prompt.hits,onCancel:()=>{yr.resolve(!1),br(null)},onConfirm:()=>{yr.resolve(!0),br(null)},permanent:yr.prompt.permanent},yr.id),(0,B.jsx)(Dr,{}),(0,B.jsx)(Nr,{}),(0,B.jsx)(Mr,{}),m&&(0,B.jsx)(Ls,{code:m.code,deviceName:m.deviceName,onAccept:()=>{Gt(m.requestId,!0),h(null)},onReject:()=>{Gt(m.requestId,!1),h(null)}}),(0,B.jsx)(Os,{}),(0,B.jsx)(ne,{})]})})}var xc=b.div`
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
`,Sc=b.div`
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
`,Cc=b.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,wc=b.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${De}
`,Tc=b.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,$=qs,Ec=b.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,Dc=b.span`
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
`,Oc=b.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,kc=b.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Ac=b.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?ze:``}
`,jc=b.div`
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
`,Mc=b.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Nc=b.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Pc=b.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Fc=b.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,Ic=b.button`
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
`,Lc=b.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,Rc=b.span`
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
`,zc=b.footer`
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
`;document.documentElement.dataset.theme=re()?`dark`:`light`;var Bc=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,Bc),window.addEventListener(`pagehide`,D);var Vc=document.getElementById(`root`),Hc=new URLSearchParams(window.location.search),Uc=Hc.get(`picker`),Wc=Hc.get(`filter`)??``,Gc=Uc===`folder`||Uc===`file`||Uc===`save`?(0,R.lazy)(()=>ec(()=>import(`./PickerWindow-CYOBICs4.js`).then(e=>({default:e.PickerWindow})),__vite__mapDeps([14,1,2,7,4,5,3,6,9,12,0,8,10]))):null;Vc&&(Je(),(0,Ln.createRoot)(Vc).render((0,B.jsx)(R.StrictMode,{children:(0,B.jsx)(ee,{children:Gc===null?(0,B.jsx)(bc,{}):(0,B.jsx)(R.Suspense,{fallback:null,children:(0,B.jsx)(Gc,{defaultExtension:Hc.get(`ext`)??``,extensions:Wc?Wc.split(`;`).filter(Boolean):[],types:Hc.get(`types`)??``,typeIndex:Number(Hc.get(`type`)??0)||0,initial:Hc.get(`initial`)??``,initialName:Hc.get(`name`)??``,mode:Uc===`folder`?`folder`:`file`,multiple:Hc.get(`multiple`)===`1`,save:Uc===`save`})})})})));export{kn as A,Bn as C,L as D,jn as E,On as M,I as N,Fn as O,Kn as S,Mn as T,Vn as _,Is as a,Gn as b,ci as c,Mr as d,Dr as f,rr as g,tr as h,Ns as i,An as j,Pn as k,Yr as l,ar as m,qs as n,Go as o,fr as p,Js as r,Uo as s,ec as t,Hr as u,zn as v,Nn as w,Un as x,Hn as y};