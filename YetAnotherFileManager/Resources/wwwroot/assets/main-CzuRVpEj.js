const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OverviewView-DU00m3L9.js","assets/rolldown-runtime-XKyaHtl9.js","assets/dist-Qlc4nr7c.js","assets/selectionMenu-B_JCzuLZ.js","assets/theme-CNvw-6kp.js","assets/theme-Cd7QcbnN.css","assets/Icons-C2hg-nwk.js","assets/concepts-DYI9OMpB.js","assets/textSearch-fuN0SwEO.js","assets/FileList-CpBA0K1f.js","assets/IconPicker-_Ca0xLiz.js","assets/SettingsView-Cllwkxnr.js","assets/GalleryView-D3Z83d1T.js","assets/RecycleView-DY92T3MR.js","assets/PickerWindow-f56mmgqA.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{C as t,D as n,E as r,O as i,S as a,T as o,a as s,b as c,c as l,d as u,h as d,k as f,l as p,m,p as ee,r as h,u as g,x as _,y as v}from"./theme-CNvw-6kp.js";import{_ as y,a as b,c as te,d as ne,i as re,n as ie,o as ae,p as x,r as oe,s as se,u as S,v as ce}from"./dist-Qlc4nr7c.js";import{A as C,B as le,C as ue,D as de,F as fe,G as pe,I as me,J as he,K as ge,Q as _e,R as w,S as ve,T as ye,V as be,W as xe,Z as Se,_ as Ce,_t as we,a as Te,at as Ee,b as De,c as Oe,ct as ke,d as Ae,dt as je,f as Me,g as Ne,gt as Pe,h as T,i as Fe,k as Ie,l as Le,lt as Re,m as ze,nt as Be,o as Ve,ot as He,p as Ue,pt as We,tt as Ge,u as Ke,v as qe,vt as Je,w as Ye,x as Xe,xt as Ze,y as Qe,yt as $e,z as et}from"./selectionMenu-B_JCzuLZ.js";import{a as tt,d as nt,i as rt,m as it,p as at}from"./concepts-DYI9OMpB.js";import{$ as ot,A as st,B as ct,C as E,Ct as lt,D as ut,E as dt,G as ft,H as pt,I as mt,J as ht,K as gt,L as _t,M as vt,O as yt,P as bt,Q as xt,R as St,St as Ct,U as wt,X as D,Y as Tt,Z as Et,_t as Dt,bt as Ot,c as kt,ct as At,d as jt,dt as Mt,ft as Nt,g as Pt,gt as Ft,ht as O,i as It,k as Lt,l as Rt,lt as zt,m as Bt,mt as Vt,nt as Ht,p as Ut,pt as Wt,q as Gt,r as Kt,rt as qt,st as k,t as Jt,tt as A,ut as Yt,v as Xt,vt as j,x as Zt,xt as Qt,yt as $t,z as en}from"./FileList-CpBA0K1f.js";import{A as tn,B as nn,E as rn,F as an,G as on,H as sn,I as cn,K as ln,L as un,M as dn,O as fn,Q as pn,X as mn,Y as hn,a as gn,at as _n,ct as vn,d as yn,dt as bn,f as xn,i as Sn,j as Cn,k as wn,lt as Tn,m as En,mt as M,n as Dn,p as On,q as kn,r as An,t as jn,tt as Mn,ut as Nn,v as Pn,vt as Fn,y as N}from"./Icons-C2hg-nwk.js";async function In(){return x.available?await x.request(`app.info`):{version:`dev`,platform:`web`,logDirectory:``,rounded:!1,debug:!1}}async function Ln(e){x.available?await x.request(`system.openUrl`,{url:e}):window.open(e,`_blank`,`noreferrer`)}async function P(){x.available&&await Kn(`update.openLogs`)}async function Rn(e){x.available?await Kn(`update.openRelease`):e&&window.open(e,`_blank`,`noreferrer`)}async function zn(){return x.available?await x.request(`update.status`)??null:null}async function Bn(){return x.available?await x.request(`update.check`):{current:`dev`,latest:`dev`,available:!1}}async function Vn(){return x.available?await x.request(`update.download`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}async function Hn(){await Kn(`update.cancel`)}async function Un(){return x.available?await x.request(`update.install`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}function Wn(e){return x.on(t=>{t.type===`update.progress`&&e(t.data)})}function Gn(e){return x.on(t=>{t.type===`update.changelog`&&e(t.data)})}async function Kn(e,t,n=3e4){let r=await x.request(e,t,n);if(!r.ok)throw Error(r.error??`The action failed.`)}var F=e(ce(),1),qn=i(),Jn={managed:0,private:0,workingSet:0,available:0};async function Yn(){return x.available?await x.request(`app.memory`):Jn}async function Xn(){return x.available?await x.request(`app.memory.trim`):Jn}var Zn={registered:!1,pathMatches:!1,registeredPath:null};async function Qn(){return x.available?await x.request(`app.scheme`):Zn}async function $n(e){return x.available?await x.request(`app.scheme.set`,{enabled:e}):Zn}var er={supported:!1,mode:`none`,active:!1,error:null};async function tr(){return x.available?await x.request(`app.startup`):er}async function nr(e){return x.available?await x.request(`app.startup.set`,{mode:e}):er}async function rr(){return x.available?(await x.request(`app.tasks`)).tasks:[]}async function ir(){x.available&&await x.request(`app.tasks.clear`)}var ar={home:`overview`,settings:`settings`,recycle:`recycle_bin`,gallery:`gallery`},or=`yafm://`,sr={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function cr(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function lr(e){return`${or}${e===`home`?`overview`:e}`}function ur(e){return cr(e)?sr[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function dr(e){let t=e.trim();if(t.length===0)return null;if(!cr(t))return t;let n=sr[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?lr(n):null}var I=ne();function fr({location:e,size:t=13}){switch(ur(e)){case`home`:return(0,I.jsx)(nn,{size:t});case`settings`:return(0,I.jsx)(an,{size:t});case`recycle`:return(0,I.jsx)(Fn,{size:t});case`gallery`:return(0,I.jsx)(dn,{size:t});default:return v(e)?(0,I.jsx)(Dn,{size:t}):(0,I.jsx)(dn,{size:t})}}function pr(e){let t=e.replace(/[\\/]+$/,``),n=Math.max(t.lastIndexOf(`\\`),t.lastIndexOf(`/`));return n>=0?t.slice(n+1):t}function mr(){let e=S();return t=>{let n=ur(t);return n?e(ar[n]):pr(t)}}var hr=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function gr(e){return hr.test(e)}function _r({settings:e,theme:t}){let n=e?.backgroundSource??null,r=n?.startsWith(`url:`)?n.slice(4):_(n)?n:null,i=n?.startsWith(`file:`)?n.slice(5):null,a=We(i),o=n?.startsWith(`builtin:`)?rt(n,t):r??a,s=r===null?i===null?n!==null&&tt(n):gr(i):gr(r.split(/[?#]/)[0]);if(!n||!o)return null;let c=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,I.jsxs)(vr,{"aria-hidden":!0,children:[s?(0,I.jsx)(br,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o,style:{filter:c}}):(0,I.jsx)(yr,{src:o,style:{filter:c}}),(0,I.jsx)(xr,{})]})}var vr=y.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,yr=y.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,br=y.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,xr=y.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);

    /* The light artwork is drawn pale already, so it only keeps a faint accent glow. */
    html[data-theme="light"] & {
        background: radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.06), transparent 60%);
    }
`,L=f();function Sr({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let o=S(),s=(0,F.useRef)(null),[c,l]=(0,F.useState)(()=>Math.max(1,Math.ceil(n))),u=e??`delete`;return(0,F.useEffect)(()=>{s.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));l(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,L.createPortal)((0,I.jsx)(Er,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,I.jsxs)(Dr,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsx)(Or,{children:o(`protected_folder`)}),(0,I.jsx)(kr,{children:o(`these_paths_are_protected_by_the_safety_settings`)}),(0,I.jsx)(R,{children:t.map(e=>(0,I.jsxs)(z,{children:[(0,I.jsx)(Ar,{children:e.path}),(0,I.jsx)(B,{children:o(`protected_by_pattern`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,I.jsx)(jr,{children:Cr(o,u,r??!1)}),(0,I.jsx)(V,{children:wr(o,u)}),(0,I.jsx)(Mr,{children:o(`this_waits_seconds_s_before_the_button_works`,{seconds:n})}),(0,I.jsxs)(Nr,{children:[(0,I.jsx)(Pr,{onClick:i,ref:s,type:`button`,children:o(`cancel`)}),(0,I.jsx)(H,{disabled:c>0,onClick:a,type:`button`,children:c>0?Tr(o,u,c):Tr(o,u,0)})]})]})}),document.body)}function Cr(e,t,n){switch(t){case`delete`:return e(n?`deletes_permanently`:`moves_to_the_recycle_bin`);case`move`:return e(`moves_the_entries`);case`rename`:return e(`renames_the_entry`);case`write`:return e(`writes_into_this_folder`)}}function wr(e,t){switch(t){case`delete`:return e(`nothing_has_been_deleted`);case`move`:return e(`nothing_has_been_moved`);case`rename`:return e(`nothing_has_been_renamed`);case`write`:return e(`nothing_has_been_written`)}}function Tr(e,t,n){let r=n>0?t===`delete`?`delete_anyway_seconds_s`:t===`move`?`move_anyway_seconds_s`:t===`rename`?`rename_anyway_seconds_s`:`write_anyway_seconds_s`:t===`delete`?`delete_anyway`:t===`move`?`move_anyway`:t===`rename`?`rename_anyway`:`write_anyway`;return n>0?e(r,{seconds:n}):e(r)}var Er=y.div`
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
`,Dr=y.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Ke}
`,Or=y.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,kr=y.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,R=y.div`
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
`,z=y.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Ar=y.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,B=y.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,jr=y.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,V=y.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,Mr=y.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Nr=y.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Pr=y.button`
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
`,H=y.button`
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
`;function Fr(){let e=S(),[t,n]=(0,F.useState)(null),r=(0,F.useRef)(null),i=(0,F.useRef)(null);(0,F.useEffect)(()=>(T(e=>new Promise(t=>{r.current=t,n(e)})),()=>T(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,F.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,L.createPortal)((0,I.jsx)(Ir,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,I.jsxs)(Lr,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsx)(U,{children:e(`notice`)}),(0,I.jsx)(Rr,{children:t}),(0,I.jsx)(zr,{children:(0,I.jsx)(Br,{onClick:a,ref:i,type:`button`,children:e(`ok`)})})]})}),document.body)}var Ir=y.div`
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
`,Lr=y.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Ke}
`,U=y.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Rr=y.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,zr=y.div`
    display: flex;
    justify-content: flex-end;
`,Br=y.button`
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
`;function Vr({request:e}){let t=S(),n=(0,F.useRef)(null),r=e.items.length>1;return(0,F.useEffect)(()=>{n.current?.focus();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),Ct()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[]),(0,L.createPortal)((0,I.jsx)(Kr,{onPointerDown:e=>{e.target===e.currentTarget&&Ct()},children:(0,I.jsxs)(qr,{role:`dialog`,"aria-modal":`true`,"aria-label":t(`properties`),children:[r?(0,I.jsxs)(W,{children:[(0,I.jsx)(Jr,{children:(0,I.jsx)(dn,{size:30})}),(0,I.jsxs)(Xr,{children:[(0,I.jsx)(Zr,{children:t(`count_items`,{count:e.items.length})}),(0,I.jsx)(Qr,{children:t(`selection`)})]})]}):(0,I.jsx)(Hr,{info:e.items[0]}),(0,I.jsx)($r,{}),r?(0,I.jsx)(ni,{children:e.items.map(e=>(0,I.jsxs)(K,{children:[(0,I.jsx)(ri,{title:e.path,children:e.name}),(0,I.jsx)(ii,{children:e.error?e.error:e.directory?t(`folder`):m(e.size)})]},e.path))}):(0,I.jsx)(Ur,{info:e.items[0]}),(0,I.jsx)($r,{}),(0,I.jsxs)(oi,{children:[e.canUseSystemSheet&&(0,I.jsx)(si,{onClick:()=>void $t(e.items.map(e=>e.path)),type:`button`,children:t(`windows_properties`)}),(0,I.jsx)(q,{}),(0,I.jsx)(ci,{onClick:Ct,ref:n,type:`button`,children:t(`ok`)})]})]})}),document.body)}function Hr({info:e}){let t=S(),n=je(e.path,e.directory,!0),r=wt(e.name,e.directory,e.linkTarget,t);return(0,I.jsxs)(W,{children:[(0,I.jsx)(Jr,{children:n?(0,I.jsx)(Yr,{alt:``,src:n}):e.directory?(0,I.jsx)(dn,{size:30}):(0,I.jsx)(Cn,{size:30})}),(0,I.jsxs)(Xr,{children:[(0,I.jsx)(Zr,{title:e.path,children:e.name}),(0,I.jsx)(Qr,{children:r})]})]})}function Ur({info:e}){let t=S();if(e.error)return(0,I.jsx)(ai,{children:e.error});let n=wt(e.name,e.directory,e.linkTarget,t),r=e.path.slice(0,Math.max(0,e.path.length-e.name.length-1));return(0,I.jsxs)(G,{children:[(0,I.jsx)(Wr,{label:t(`type`),value:n}),(0,I.jsx)(Wr,{label:t(`location`),value:r,wrap:!0}),(0,I.jsx)(Wr,{label:e.directory?t(`items`):t(`size`),value:e.directory?String(e.entries??0):m(e.size)}),(0,I.jsx)(Wr,{label:t(`created`),value:(0,I.jsx)(Ye,{value:e.created})}),(0,I.jsx)(Wr,{label:t(`modified`),value:(0,I.jsx)(Ye,{value:e.modified})}),(0,I.jsx)(Wr,{label:t(`accessed`),value:(0,I.jsx)(Ye,{value:e.accessed})}),e.attributes.length>0&&(0,I.jsx)(Wr,{label:t(`attributes`),value:e.attributes.map(e=>Gr(t,e)).join(`, `)}),e.unixMode&&(0,I.jsx)(Wr,{label:t(`permissions`),value:e.unixMode}),e.linkTarget&&(0,I.jsx)(Wr,{label:t(`link_target`),value:e.linkTarget,wrap:!0})]})}function Wr({label:e,value:t,wrap:n=!1}){return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(ei,{children:e}),(0,I.jsx)(ti,{$wrap:n,title:typeof t==`string`?t:void 0,children:t})]})}function Gr(e,t){switch(t.toLowerCase()){case`readonly`:return e(`read_only`);case`hidden`:return e(`hidden`);case`system`:return e(`system`);case`directory`:return e(`folder`);case`archive`:return e(`archive`);case`compressed`:return e(`compressed`);case`encrypted`:return e(`encrypted`);case`reparsepoint`:return e(`link`);case`temporary`:return e(`temporary`);default:return t}}var Kr=y.div`
    position: fixed;
    inset: 0;
    z-index: 3400;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.64);
    ${Ve}
`,qr=y.div`
    display: flex;
    flex-direction: column;
    width: min(460px, 100%);
    max-height: min(720px, 86vh);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Ke}
`,W=y.div`
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    padding: 16px 18px 14px;
`,Jr=y.div`
    display: grid;
    flex: 0 0 auto;
    place-items: center;
    width: 38px;
    height: 38px;
    color: var(--accent-primary);
`,Yr=y.img`
    width: 34px;
    height: 34px;
    object-fit: contain;
`,Xr=y.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Zr=y.div`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13.5px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Qr=y.div`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$r=y.hr`
    height: 0;
    margin: 0;
    border: 0;
    border-top: 1px solid var(--border-color);
`,G=y.div`
    display: grid;
    grid-template-columns: 96px minmax(0, 1fr);
    gap: 7px 12px;
    overflow-y: auto;
    padding: 14px 18px;
`,ei=y.div`
    color: var(--text-muted);
    font-size: 11px;
    line-height: 1.5;
`,ti=y.div`
    overflow: ${({$wrap:e})=>e?`visible`:`hidden`};
    color: var(--text-primary);
    font-size: 11.5px;
    line-height: 1.5;
    text-overflow: ellipsis;
    ${({$wrap:e})=>e?`overflow-wrap: anywhere;`:`white-space: nowrap;`}
`,ni=y.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-height: 320px;
    overflow-y: auto;
    padding: 10px 18px;
`,K=y.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    padding: 2px 0;
`,ri=y.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ii=y.span`
    flex: 0 0 auto;
    color: var(--text-muted);
    font-size: 10.5px;
`,ai=y.p`
    margin: 0;
    padding: 14px 18px;
    color: #fca5a5;
    font-size: 12px;
`,oi=y.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
`,q=y.div`
    flex: 1;
`,si=y.button`
    padding: 4px 2px;
    border: 0;
    background: none;
    color: var(--accent-primary);
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`,ci=y.button`
    min-width: 84px;
    padding: 6px 14px;
    border: 1px solid var(--border-color-hover);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`;function li(){let e=S(),[t,n]=(0,F.useState)(null);(0,F.useEffect)(()=>x.on(e=>{let t=e;t.type===`fs.elevation.ask`&&t.data&&n(t.data)}),[]);let r=e=>{let r=t;n(null),r&&x.request(`fs.elevation.answer`,{token:r.token,allow:e})},i=(t=>{switch(t){case`delete`:return e(`delete`);case`rename`:return e(`rename`);case`copy`:return e(`copy`);case`moveTo`:return e(`move`);case`extractArchive`:return e(`extract_archive`);case`newFolder`:case`newFolderAt`:return e(`new_folder`);case`newFile`:case`newFileAt`:return e(`new_file`);case`restoreRecycle`:return e(`restore`);case`writeFile`:return e(`save`);default:return``}})(t?.action??``);return(0,I.jsx)(Fe,{confirmLabel:e(`run_as_administrator`),message:e(`this_path_needs_administrator_rights_to_action_restart_the_app_as_administrator_and_try_again`,{path:t?.path??``,action:i.length>0?i.toLowerCase():e(`ok`).toLowerCase()}),onCancel:()=>r(!1),onConfirm:()=>r(!0),open:t!==null,title:e(`administrator_rights_required`)})}function ui(){let e=S(),[t,n]=(0,F.useState)(null),[r,i]=(0,F.useState)(``),a=(0,F.useRef)(null),o=(0,F.useRef)(null);(0,F.useEffect)(()=>(Ne((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>Ne(null)),[]),(0,F.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,L.createPortal)((0,I.jsx)(di,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,I.jsxs)(fi,{role:`dialog`,"aria-modal":`true`,children:[(0,I.jsx)(pi,{children:e(`archive_password`)}),(0,I.jsx)(mi,{children:t.wrong?e(`that_password_did_not_open_the_archive_try_again`):e(`this_archive_is_encrypted_enter_its_password`)}),(0,I.jsx)(hi,{title:t.archive,children:t.archive}),(0,I.jsx)(gi,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,I.jsxs)(_i,{children:[(0,I.jsx)(vi,{onClick:()=>s(null),type:`button`,children:e(`cancel`)}),(0,I.jsx)(yi,{disabled:r.length===0,onClick:c,type:`button`,children:e(`ok`)})]})]})}),document.body)}var di=y.div`
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
`,fi=y.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Ke}
`,pi=y.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,mi=y.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,hi=y.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,gi=y.input`
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
`,_i=y.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,vi=y.button`
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
`,yi=y(vi)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function bi({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:ee,onSelectMatches:h}){let g=S(),_=(0,F.useRef)(null),v=c??g(`search_this_folder`);(0,F.useEffect)(()=>{let e=_.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let y=e=>{e(),_.current?.focus()};return(0,I.jsxs)(xi,{children:[(0,I.jsx)(vn,{}),(0,I.jsx)(Si,{"aria-label":v,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),ee())},placeholder:v,ref:_,spellCheck:!1,value:e}),!s&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(J,{children:i===0?`0/0`:`${a+1}/${i}`}),h&&(0,I.jsx)(Ci,{disabled:i===0,onClick:h,title:g(`select_all_matches`),type:`button`,children:(0,I.jsx)(yn,{size:12})}),(0,I.jsx)(Ci,{$chevron:!0,onClick:()=>y(u),title:g(`previous_match_shift_enter`),type:`button`,children:(0,I.jsx)(xn,{size:12})}),(0,I.jsx)(Ci,{$chevron:!0,$down:!0,onClick:()=>y(d),title:g(`next_match_enter`),type:`button`,children:(0,I.jsx)(xn,{size:12})})]}),(0,I.jsx)(wi,{$on:n,onClick:()=>y(f),title:g(`match_case`),type:`button`,children:`Aa`}),(0,I.jsx)(wi,{$on:r,onClick:()=>y(p),title:g(`regular_expression`),type:`button`,children:`.*`}),!s&&(0,I.jsx)(Ti,{$on:t===`hide`,onClick:()=>y(m),title:g(t===`hide`?`non_matching_entries_are_hidden`:`non_matching_entries_are_dimmed`),type:`button`,children:t===`hide`?(0,I.jsx)(tn,{size:12}):(0,I.jsx)(wn,{size:12})}),(0,I.jsx)(Ci,{onClick:ee,title:g(`close_search_esc`),type:`button`,children:(0,I.jsx)(N,{size:12})})]})}var xi=y.div`
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
`,Si=y.input`
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
`,J=y.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Ci=y.button`
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
`,wi=y.button`
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
`,Ti=y(wi)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`;function Ei({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=S(),s=ht(),[c,l]=(0,F.useState)(!1),[u,d]=(0,F.useState)(``),[f,p]=(0,F.useState)([]),[m,ee]=(0,F.useState)(0),[h,g]=(0,F.useState)(null),[_,v]=(0,F.useState)(null),[y,b]=(0,F.useState)(null),te=(0,F.useRef)(null),ne=(0,F.useRef)(null),re=(0,F.useRef)(0);(0,F.useEffect)(()=>{if(!jt(e)){b(null);return}let t=Pt(e);if(!t){b(null);return}let n=!0;return kt().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);b({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&b(null)),()=>{n=!1}},[e]),(0,F.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,F.useEffect)(()=>{r&&r!==re.current&&(re.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,F.useEffect)(()=>{c&&te.current?.select()},[c]),(0,F.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[c]);let ie=()=>{d(e.replace(/\\/g,`/`)),l(!0)},ae=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,F.useEffect)(()=>{if(!c){p([]);return}let e=Ai(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{w(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),ee(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let x=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,F.useLayoutEffect)(()=>{if(!c){g(null);return}let e=()=>{let e=ne.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);g({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,I.jsxs)(Ii,{onPointerDown:e=>e.stopPropagation(),ref:ne,children:[(0,I.jsxs)(Bi,{children:[(0,I.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),ee(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),ee(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?x(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):ae(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:te,spellCheck:!1,value:u}),(0,I.jsx)(Vi,{onClick:()=>l(!1),title:o(`cancel`),type:`button`,children:(0,I.jsx)(N,{size:12})}),(0,I.jsx)(Vi,{$apply:!0,onClick:ae,onPointerDown:e=>e.stopPropagation(),title:o(`open_this_path`),type:`button`,children:(0,I.jsx)(yn,{size:14})})]}),f.length>0&&h&&(0,L.createPortal)((0,I.jsx)(Li,{onPointerDown:e=>e.stopPropagation(),style:{left:h.left,top:h.top,width:h.width},children:f.map((e,t)=>(0,I.jsxs)(Ri,{$active:t===m,onClick:t=>x(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>ee(t),type:`button`,children:[(0,I.jsx)(st,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,I.jsx)(zi,{children:e.name})]},e.path))}),document.body)]});let oe=t?[{label:t,path:e,icon:n}]:Di(e,y)??ki(e,s.places);return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(ji,{onClick:ie,title:o(`click_to_type_a_path`),children:oe.map((t,n)=>(0,I.jsxs)(Mi,{$last:n===oe.length-1,children:[n>0&&(0,I.jsx)(Pi,{children:(0,I.jsx)(xn,{size:9})}),(0,I.jsxs)(Fi,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):v({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,I.jsx)(Ni,{children:(0,I.jsx)(vt,{place:t.place,size:13})}):t.icon&&(0,I.jsx)(Ni,{children:t.icon}),t.label]})]},t.path))}),_&&(0,I.jsx)(Te,{items:[{label:o(`open`),icon:(0,I.jsx)(Sn,{size:14}),onSelect:()=>i(_.path)},{label:o(`open_in_new_tab`),icon:(0,I.jsx)(_n,{size:14}),onSelect:()=>i(_.path,!0)},{label:o(`copy_as_path`),icon:(0,I.jsx)(Pn,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(_.path)},...cr(_.path)?[{label:o(`open_with`),icon:(0,I.jsx)(fn,{size:14}),onSelect:()=>void O(_.path)},{label:o(`properties`),icon:(0,I.jsx)(an,{size:14}),onSelect:()=>void j([_.path])}]:[]],onClose:()=>v(null),x:_.x,y:_.y})]})}function Di(e,t){let n=Pt(e);if(!n)return null;let r=dt(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,I.jsx)(Tn,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function Oi(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function ki(e,t){let n=Oi(e),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>r(t.path,e.path));t>i&&(i=t,a=e)}return a&&i>=0&&n.splice(0,i+1,{label:a.name,path:n[i].path,place:a}),n}function Ai(e){if(cr(e)||jt(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var ji=y.div`
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
`,Mi=y.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Ni=y.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Pi=y.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,Fi=y.button`
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
`,Ii=y.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,Li=y.div`
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
`,Ri=y.button`
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
`,zi=y.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Bi=y.div`
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
`,Vi=y.button`
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
`;function Hi({places:e,drives:t,recent:i,recentLimit:a,currentPath:o,activeKind:s,homePath:c=``,version:l=0,historyVersion:d=0,hiddenViews:f=[],onNavigate:p,onOpenView:h}){let[g,_]=(0,F.useState)([]),v=S(),[y,b]=(0,F.useState)(null),te=ht();(0,F.useEffect)(()=>{nt().then(e=>{b(e),_(mt(e).filter(e=>e.pinned))},()=>{b(null),_([])})},[l]),(0,F.useEffect)(()=>{if(!x.available)return;let e=g.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||c).filter(e=>e.length>0);return x.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>x.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[g,c]);let ne=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>r(e.path,t));return{name:y?.placeNames?.[t]??n?.name??(u(t)||t),path:t,kind:`folder`,icon:n?.icon??y?.placeIcons?.[t]??null}}),re=s===`files`;return(0,I.jsxs)(Ji,{children:[(0,I.jsxs)(Yi,{children:[!f.includes(`home`)&&(0,I.jsxs)(Y,{$active:s===`home`,onClick:e=>h(`home`,k(e)),title:v(`overview`),type:`button`,children:[(0,I.jsx)(hn,{}),(0,I.jsx)(X,{children:v(`overview`)})]}),!f.includes(`recycle`)&&(0,I.jsxs)(Y,{$active:s===`recycle`,onClick:e=>h(`recycle`,k(e)),title:v(`recycle_bin`),type:`button`,children:[(0,I.jsx)(Fn,{}),(0,I.jsx)(X,{children:v(`recycle_bin`)})]}),!f.includes(`gallery`)&&(0,I.jsxs)(Y,{$active:s===`gallery`,onClick:e=>h(`gallery`,k(e)),title:v(`gallery`),type:`button`,children:[(0,I.jsx)(sn,{}),(0,I.jsx)(X,{children:v(`gallery`)})]})]}),g.map(e=>(0,I.jsxs)(Zi,{children:[(0,I.jsxs)(Y,{as:`div`,$active:!1,children:[(0,I.jsx)(ea,{children:(0,I.jsx)(bt,{panel:e,size:16})}),(0,I.jsx)(X,{children:v(e.title)})]}),(0,I.jsx)(Qi,{children:(0,I.jsxs)($i,{children:[e.kind===`quick`&&ne(e).map(e=>(0,I.jsxs)(Y,{$active:re&&r(o,e.path),onClick:t=>p(e.path,k(t)),title:e.path,type:`button`,children:[(0,I.jsx)(vt,{place:e}),(0,I.jsx)(X,{children:e.name})]},e.path)),e.kind===`recent`&&i.slice(0,a).map(e=>{let t=Gt(te,e.path);return(0,I.jsxs)(Y,{$active:re&&r(o,e.path),onClick:t=>e.isDirectory?p(e.path,k(t)):void he(e.path),title:e.path,type:`button`,children:[t&&te.useIcons?(0,I.jsx)(vt,{place:t}):(0,I.jsx)(st,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,I.jsx)(X,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,I.jsx)(Gi,{historyVersion:d,onNavigate:p}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,I.jsxs)(Y,{$active:re&&r(o,e.name),onClick:t=>p(e.name,k(t)),title:e.name,type:`button`,children:[(0,I.jsx)(rn,{}),(0,I.jsxs)(X,{children:[ee(e),(0,I.jsxs)(ta,{children:[m(e.freeSpace),` free`]}),(0,I.jsx)(na,{children:(0,I.jsx)(ra,{$used:t,$tone:n(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,I.jsx)(Ki,{onNavigate:p,path:e.path||c})]})})]},e.id)),!f.includes(`settings`)&&(0,I.jsx)(Xi,{children:(0,I.jsxs)(Y,{$active:s===`settings`,onClick:e=>h(`settings`,k(e)),title:v(`settings`),type:`button`,children:[(0,I.jsx)(an,{}),(0,I.jsx)(X,{children:v(`settings`)})]})})]})}var Ui=10,Wi=40;function Gi({historyVersion:e=0,onNavigate:t}){let n=S(),[r,i]=(0,F.useState)(null),a=ht();return(0,F.useEffect)(()=>{be().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=Gt(a,e.path);return(0,I.jsxs)(Y,{$active:!1,onClick:n=>t(e.path,k(n)),title:o(n,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,I.jsx)(vt,{place:r}):(0,I.jsx)(st,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,I.jsx)(X,{children:r?.name||e.name})]},e.path)})}function Ki({path:e,onNavigate:t}){let[n,i]=(0,F.useState)(null);(0,F.useEffect)(()=>{e&&(i(null),w(e,!1).then(i,()=>i(null)))},[e]),(0,F.useEffect)(()=>{if(e&&x.available)return x.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&r(n.data.path,e)&&w(e,!1).then(i,()=>void 0)})},[e]);let a=n?.entries??[],o=a.filter(e=>e.isDirectory).slice(0,Ui),s=a.filter(e=>!e.isDirectory).slice(0,Wi);return(0,I.jsxs)(I.Fragment,{children:[o.map(e=>(0,I.jsx)(qi,{entry:e,onNavigate:t},e.fullPath)),s.map(e=>(0,I.jsx)(qi,{entry:e,onNavigate:t},e.fullPath))]})}function qi({entry:e,onNavigate:t}){let n=ht(),r=Gt(n,e.fullPath);return(0,I.jsxs)(Y,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,k(n)):void he(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,I.jsx)(vt,{place:r}):(0,I.jsx)(st,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,I.jsx)(X,{children:r?.name||e.name})]})}var Ji=y.aside`
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

    &:not(:hover) ${()=>ta},
    &:not(:hover) ${()=>na} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,Yi=y.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,Xi=y(Yi)`
    margin-top: auto;
`,Zi=y.div`
    display: flex;
    flex-direction: column;
`,Qi=y.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${Ji}:hover ${Zi}:hover > & {
        grid-template-rows: 1fr;
    }
`,$i=y.div`
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
`,Y=y.button`
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
`,ea=y.span`
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
`,X=y.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ta=y.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,na=y.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,ra=y.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`;function ia({tabs:e,onRestore:t}){let n=S(),r=mr(),[i,a]=(0,F.useState)(!1),o=(0,F.useRef)(null);return(0,F.useEffect)(()=>{if(!i)return;let e=e=>{o.current?.contains(e.target)||a(!1)},t=()=>a(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[i]),(0,I.jsxs)(aa,{ref:o,children:[(0,I.jsx)(oa,{$active:i,onClick:()=>a(e=>!e),title:n(`recently_closed_tabs`),type:`button`,children:(0,I.jsx)(En,{size:15})}),i&&(0,I.jsxs)(sa,{children:[(0,I.jsxs)(ca,{children:[(0,I.jsxs)(la,{children:[(0,I.jsx)(En,{size:12}),n(`recently_closed_tabs`)]}),(0,I.jsx)(ua,{onClick:()=>a(!1),title:n(`close`),type:`button`,children:(0,I.jsx)(N,{size:10})})]}),e.length===0?(0,I.jsx)(ga,{children:n(`no_recently_closed_tabs`)}):(0,I.jsx)(da,{children:[...e].reverse().map((n,i)=>{let o=e.length-1-i,s=ur(n);return(0,I.jsxs)(fa,{onClick:()=>{a(!1),t(o)},title:n,type:`button`,children:[(0,I.jsx)(fr,{location:n}),(0,I.jsxs)(pa,{children:[(0,I.jsx)(ma,{children:r(n)}),(0,I.jsx)(ha,{children:s?r(n):n})]})]},`${o}-${n}`)})})]})]})}var aa=y.div`
    position: relative;
    display: flex;
`,oa=y.button`
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
`,sa=y.div`
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
    ${Le}
`,ca=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,la=y.span`
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
`,ua=y.button`
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
`,da=y.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,fa=y.button`
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
`,pa=y.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,ma=y.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ha=y.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ga=y.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,_a=y.span`
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
`;function va({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=S(),a=(0,F.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,F.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)},t=()=>r(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[n,r]),(0,I.jsxs)(ba,{ref:a,children:[(0,I.jsxs)(xa,{$active:n,onClick:()=>r(!n),title:s>0?o(i,s,`k_1_operation_running`,`count_operations_running`):i(`status_center`),type:`button`,children:[(0,I.jsx)(M,{size:13}),c>0&&(0,I.jsx)(_a,{children:c>9?`9+`:c})]}),n&&(0,I.jsxs)(Sa,{children:[(0,I.jsxs)(Ca,{children:[(0,I.jsxs)(wa,{children:[(0,I.jsx)(M,{size:12}),i(`status_center`)]}),(0,I.jsxs)(Ta,{children:[(0,I.jsx)(Ea,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`clear_finished`)}),(0,I.jsx)(Da,{onClick:()=>r(!1),title:i(`close`),type:`button`,children:(0,I.jsx)(N,{size:10})})]})]}),e.length===0?(0,I.jsx)(ka,{children:i(`no_operations_yet`)}):(0,I.jsx)(Oa,{children:e.map(e=>(0,I.jsx)(ya,{task:e},e.id))})]})]})}function ya({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,I.jsxs)(Aa,{children:[(0,I.jsxs)(ja,{children:[(0,I.jsx)(Ma,{$state:e.state,children:e.state===`done`?(0,I.jsx)(yn,{size:10}):e.state===`failed`?(0,I.jsx)(N,{size:10}):(0,I.jsx)(Na,{})}),(0,I.jsx)(Pa,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,I.jsxs)(Fa,{children:[m(e.bytesDone),` / `,m(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,I.jsxs)(Fa,{children:[e.done,` / `,e.total]})]}),i&&(0,I.jsx)(Ia,{children:(0,I.jsx)(La,{$percent:r,$indeterminate:t===0})}),e.error&&(0,I.jsx)(Ra,{children:e.error})]})}var ba=y.div`
    position: relative;
    display: flex;
`,xa=y.button`
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
`,Sa=y.div`
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
    ${Le}
`,Ca=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,wa=y.span`
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
`,Ta=y.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Ea=y.button`
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
`,Da=y.button`
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
`,Oa=y.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,ka=y.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Aa=y.div`
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
`,ja=y.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,Ma=y.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,Na=y.span`
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
`,Pa=y.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Fa=y.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Ia=y.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,La=y.div`
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
`,Ra=y.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function za(){if(!x.available)return[];try{return(await He.readBlock(`/history`)).rows.map(e=>{let t=Va(e.paths);return{id:Number(e.id),label:String(e.label),paths:t.length>0?t.split(``):[],at:Number(e.at),applied:Number(e.applied)!==0,restorable:Number(e.restorable)!==0}})}catch{return(await x.request(`fs.history.list`)).entries}}async function Ba(e){return x.available?(await x.request(`fs.history.undoTo`,{id:e})).ok:!1}function Va(e){return typeof e==`string`?e:``}function Ha(){let e=S(),[t,n]=(0,F.useState)(!1),[r,i]=(0,F.useState)([]),[a,o]=(0,F.useState)(!1),s=(0,F.useRef)(null),c=()=>void za().then(i,()=>i([]));(0,F.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)},i=()=>n(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,i),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,i)}},[t]);let l=async e=>{o(!0);try{await Ba(e),c()}finally{o(!1)}};return(0,I.jsxs)(Ga,{ref:s,children:[(0,I.jsx)(Ka,{$active:t,onClick:()=>n(e=>!e),title:e(`history`),type:`button`,children:(0,I.jsx)(On,{size:14})}),t&&(0,I.jsxs)(qa,{children:[(0,I.jsxs)(Ja,{children:[(0,I.jsxs)(Ya,{children:[(0,I.jsx)(On,{size:12}),e(`history`)]}),(0,I.jsx)(Xa,{onClick:()=>n(!1),title:e(`close`),type:`button`,children:(0,I.jsx)(N,{size:10})})]}),r.length===0?(0,I.jsx)(ao,{children:e(`no_operations_yet`)}):(0,I.jsx)(Za,{children:r.map(t=>(0,I.jsxs)(Qa,{children:[(0,I.jsxs)($a,{children:[(0,I.jsxs)(eo,{children:[(0,I.jsx)(Wa,{label:t.label}),Ua(e,t.label)]}),(0,I.jsx)(to,{children:d(t.at)})]}),t.paths.length>0&&(0,I.jsxs)(no,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,I.jsx)(ro,{children:(0,I.jsx)(io,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`undo`)})})]},t.id))})]})]})}function Ua(e,t){if(t===`new_folder`)return e(`new_folder`);if(t===`new_file`)return e(`new_file`);if(t===`paste_text`)return e(`paste_text`);if(t===`paste_image`)return e(`paste_image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`move`?`move_count_items`:t===`copy`?`copy_count_items`:`delete_count_items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`rename`)} ${i[1]}`:t}function Wa({label:e}){return e.startsWith(`delete`)?(0,I.jsx)(Fn,{size:13}):e.startsWith(`move`)||e.startsWith(`copy`)?(0,I.jsx)(Pn,{size:13}):e.startsWith(`rename`)?(0,I.jsx)(Mn,{size:13}):e.startsWith(`compress`)?(0,I.jsx)(Dn,{size:13}):e.startsWith(`new`)?(0,I.jsx)(_n,{size:13}):(0,I.jsx)(Sn,{size:13})}var Ga=y.div`
    position: relative;
    display: flex;
`,Ka=y.button`
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
`,qa=y.div`
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
    ${Le}
`,Ja=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Ya=y.span`
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
`,Xa=y.button`
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
`,Za=y.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,Qa=y.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,$a=y.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,eo=y.span`
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
`,to=y.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,no=y.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ro=y.div`
    display: flex;
    justify-content: flex-end;
`,io=y.button`
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
`,ao=y.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,oo=(e=>(e[e.Border=-1]=`Border`,e[e.Data=0]=`Data`,e[e.Function=1]=`Function`,e[e.Position=2]=`Position`,e[e.Timing=3]=`Timing`,e[e.Alignment=4]=`Alignment`,e))(oo||{}),so=[0,1],co=[1,0],lo=[2,3],uo=[3,2],fo={L:so,M:co,Q:lo,H:uo},po=/^\d*$/,mo=/^[A-Z0-9 $%*+./:-]*$/,ho=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`,go=1,_o=40,vo=3,yo=3,bo=40,xo=10,So=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],Co=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],wo=class{constructor(e,t,n,r){if(this.version=e,this.ecc=t,e<go||e>_o)throw RangeError(`Version value out of range`);if(r<-1||r>7)throw RangeError(`Mask value out of range`);this.size=e*4+17;let i=Array.from({length:this.size}).fill(!1);for(let e=0;e<this.size;e++)this.modules.push(i.slice()),this.types.push(i.map(()=>0));this.drawFunctionPatterns();let a=this.addEccAndInterleave(n);if(this.drawCodewords(a),r===-1){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let n=this.getPenaltyScore();n<e&&(r=t,e=n),this.applyMask(t)}}this.mask=r,this.applyMask(r),this.drawFormatBits(r)}size;mask;modules=[];types=[];getModule(e,t){return e>=0&&e<this.size&&t>=0&&t<this.size&&this.modules[t][e]}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0,oo.Timing),this.setFunctionModule(e,6,e%2==0,oo.Timing);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n===0&&r===0||n===0&&r===t-1||n===t-1&&r===0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.ecc[1]<<3|e,n=t;for(let e=0;e<10;e++)n=n<<1^(n>>>9)*1335;let r=(t<<10|n)^21522;for(let e=0;e<=5;e++)this.setFunctionModule(8,e,Eo(r,e));this.setFunctionModule(8,7,Eo(r,6)),this.setFunctionModule(8,8,Eo(r,7)),this.setFunctionModule(7,8,Eo(r,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,Eo(r,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,Eo(r,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,Eo(r,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;for(let e=0;e<18;e++){let n=Eo(t,e),r=this.size-11+e%3,i=Math.floor(e/3);this.setFunctionModule(r,i,n),this.setFunctionModule(i,r,n)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){let i=Math.max(Math.abs(r),Math.abs(n)),a=e+r,o=t+n;a>=0&&a<this.size&&o>=0&&o<this.size&&this.setFunctionModule(a,o,i!==2&&i!==4,oo.Position)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!==1,oo.Alignment)}setFunctionModule(e,t,n,r=oo.Function){this.modules[t][e]=n,this.types[t][e]=r}addEccAndInterleave(e){let t=this.version,n=this.ecc;if(e.length!==Vo(t,n))throw RangeError(`Invalid argument`);let r=Co[n[0]][t],i=So[n[0]][t],a=Math.floor(Bo(t)/8),o=r-a%r,s=Math.floor(a/r),c=[],l=Ho(i);for(let t=0,n=0;t<r;t++){let r=e.slice(n,n+s-i+(t<o?0:1));n+=r.length;let a=Uo(r,l);t<o&&r.push(0),c.push(r.concat(a))}let u=[];for(let e=0;e<c[0].length;e++)c.forEach((t,n)=>{(e!==s-i||n>=o)&&u.push(t[e])});return u}drawCodewords(e){if(e.length!==Math.floor(Bo(this.version)/8))throw RangeError(`Invalid argument`);let t=0;for(let n=this.size-1;n>=1;n-=2){n===6&&(n=5);for(let r=0;r<this.size;r++)for(let i=0;i<2;i++){let a=n-i,o=n+1&2?r:this.size-1-r;!this.types[o][a]&&t<e.length*8&&(this.modules[o][a]=Eo(e[t>>>3],7-(t&7)),t++)}}}applyMask(e){if(e<0||e>7)throw RangeError(`Mask value out of range`);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw Error(`Unreachable`)}!this.types[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[t][a]===n?(r++,r===5?e+=vo:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*bo),n=this.modules[t][a],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*bo}for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[a][t]===n?(r++,r===5?e+=vo:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*bo),n=this.modules[a][t],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*bo}for(let t=0;t<this.size-1;t++)for(let n=0;n<this.size-1;n++){let r=this.modules[t][n];r===this.modules[t][n+1]&&r===this.modules[t+1][n]&&r===this.modules[t+1][n+1]&&(e+=yo)}let t=0;for(let e of this.modules)t=e.reduce((e,t)=>e+ +!!t,t);let n=this.size*this.size,r=Math.ceil(Math.abs(t*20-n*10)/n)-1;return e+=r*xo,e}getAlignmentPatternPositions(){if(this.version===1)return[];{let e=Math.floor(this.version/7)+2,t=this.version===32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}finderPenaltyCountPatterns(e){let t=e[1],n=t>0&&e[2]===t&&e[3]===t*3&&e[4]===t&&e[5]===t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]===0&&(e+=this.size),t.pop(),t.unshift(e)}};function To(e,t,n){if(t<0||t>31||e>>>t)throw RangeError(`Value out of range`);for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function Eo(e,t){return!!(e>>>t&1)}var Do=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw RangeError(`Invalid argument`);this.bitData=n.slice()}getData(){return this.bitData.slice()}},Oo=[1,10,12,14],ko=[2,9,11,13],Ao=[4,8,16,16];function jo(e,t){return e[Math.floor((t+7)/17)+1]}function Mo(e){let t=[];for(let n of e)To(n,8,t);return new Do(Ao,e.length,t)}function No(e){if(!Io(e))throw RangeError(`String contains non-numeric characters`);let t=[];for(let n=0;n<e.length;){let r=Math.min(e.length-n,3);To(Number.parseInt(e.substring(n,n+r),10),r*3+1,t),n+=r}return new Do(Oo,e.length,t)}function Po(e){if(!Lo(e))throw RangeError(`String contains unencodable characters in alphanumeric mode`);let t=[],n=0;for(;n+2<=e.length;n+=2){let r=ho.indexOf(e.charAt(n))*45;r+=ho.indexOf(e.charAt(n+1)),To(r,11,t)}return n<e.length&&To(ho.indexOf(e.charAt(n)),6,t),new Do(ko,e.length,t)}function Fo(e){return e===``?[]:Io(e)?[No(e)]:Lo(e)?[Po(e)]:[Mo(zo(e))]}function Io(e){return po.test(e)}function Lo(e){return mo.test(e)}function Ro(e,t){let n=0;for(let r of e){let e=jo(r.mode,t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}function zo(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)===`%`?(t.push(Number.parseInt(e.substring(n+1,n+3),16)),n+=2):t.push(e.charCodeAt(n));return t}function Bo(e){if(e<go||e>_o)throw RangeError(`Version number out of range`);let t=(16*e+128)*e+64;if(e>=2){let n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return t}function Vo(e,t){return Math.floor(Bo(e)/8)-So[t[0]][e]*Co[t[0]][e]}function Ho(e){if(e<1||e>255)throw RangeError(`Degree out of range`);let t=[];for(let n=0;n<e-1;n++)t.push(0);t.push(1);let n=1;for(let r=0;r<e;r++){for(let e=0;e<t.length;e++)t[e]=Wo(t[e],n),e+1<t.length&&(t[e]^=t[e+1]);n=Wo(n,2)}return t}function Uo(e,t){let n=t.map(e=>0);for(let r of e){let e=r^n.shift();n.push(0),t.forEach((t,r)=>n[r]^=Wo(t,e))}return n}function Wo(e,t){if(e>>>8||t>>>8)throw RangeError(`Byte out of range`);let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return n}function Go(e,t,n=1,r=40,i=-1,a=!0){if(!(go<=n&&n<=r&&r<=_o)||i<-1||i>7)throw RangeError(`Invalid value`);let o,s;for(o=n;;o++){let n=Vo(o,t)*8,i=Ro(e,o);if(i<=n){s=i;break}if(o>=r)throw RangeError(`Data too long`)}for(let e of[co,lo,uo])a&&s<=Vo(o,e)*8&&(t=e);let c=[];for(let t of e){To(t.mode[0],4,c),To(t.numChars,jo(t.mode,o),c);for(let e of t.getData())c.push(e)}let l=Vo(o,t)*8;To(0,Math.min(4,l-c.length),c),To(0,(8-c.length%8)%8,c);for(let e=236;c.length<l;e^=253)To(e,8,c);let u=Array.from({length:Math.ceil(c.length/8)},()=>0);return c.forEach((e,t)=>u[t>>>3]|=e<<7-(t&7)),new wo(o,t,u,i)}function Ko(e,t){let{ecc:n=`L`,boostEcc:r=!1,minVersion:i=1,maxVersion:a=40,maskPattern:o=-1,border:s=1}=t||{},c=typeof e==`string`?Fo(e):Array.isArray(e)?[Mo(e)]:void 0;if(!c)throw Error(`uqr only supports encoding string and binary data, but got: ${typeof e}`);let l=Go(c,fo[n],i,a,o,r),u=qo({version:l.version,maskPattern:l.mask,size:l.size,data:l.modules,types:l.types},s);return t?.invert&&(u.data=u.data.map(e=>e.map(e=>!e))),t?.onEncoded?.(u),u}function qo(e,t=1){if(!t)return e;let{size:n}=e,r=n+t*2;e.size=r,e.data.forEach(e=>{for(let n=0;n<t;n++)e.unshift(!1),e.push(!1)});for(let n=0;n<t;n++)e.data.unshift(Array.from({length:r},e=>!1)),e.data.push(Array.from({length:r},e=>!1));let i=oo.Border;e.types.forEach(e=>{for(let n=0;n<t;n++)e.unshift(i),e.push(i)});for(let n=0;n<t;n++)e.types.unshift(Array.from({length:r},e=>i)),e.types.push(Array.from({length:r},e=>i));return e}function Jo(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Yo(e,t={}){let n=Ko(e,t),{pixelSize:r=10,whiteColor:i=`white`,blackColor:a=`black`}=t,o=n.size*r,s=n.size*r,c=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${o}">`,l=[];for(let e=0;e<n.size;e++)for(let t=0;t<n.size;t++){let i=t*r,a=e*r;n.data[e][t]&&l.push(`M${i},${a}h${r}v${r}h-${r}z`)}return c+=`<rect fill="${Jo(i)}" width="${s}" height="${o}"/>`,c+=`<path fill="${Jo(a)}" d="${l.join(``)}"/>`,c+=`</svg>`,c}function Xo({currentFolder:e}){let t=S(),[n,i]=(0,F.useState)(!1),[a,o]=(0,F.useState)(null),[s,c]=(0,F.useState)(!1),l=(0,F.useRef)(null);(0,F.useEffect)(()=>{if(!n)return;let e=()=>void Rt().then(o,()=>void 0);e();let t=window.setInterval(e,2500),r=e=>{l.current?.contains(e.target)||i(!1)},a=()=>i(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,a),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,a)}},[n]),(0,F.useEffect)(()=>{let e=()=>void Rt().then(o,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{o(await e())}finally{c(!1)}},d=a?.shares.some(t=>r(t.path,e))??!1;return(0,I.jsxs)(Zo,{ref:l,children:[(0,I.jsxs)(Qo,{$active:n,onClick:()=>i(e=>!e),title:t(`share_folders`),type:`button`,children:[(0,I.jsx)(Tn,{size:15}),a&&a.shares.length>0&&(0,I.jsx)(_a,{children:a.shares.length>9?`9+`:a.shares.length})]}),n&&(0,I.jsxs)($o,{children:[(0,I.jsxs)(es,{children:[(0,I.jsxs)(ts,{children:[(0,I.jsx)(Nn,{size:12}),t(`share`)]}),(0,I.jsx)(ns,{onClick:()=>i(!1),title:t(`close`),type:`button`,children:(0,I.jsx)(N,{size:10})})]}),(0,I.jsxs)(rs,{children:[(0,I.jsxs)(is,{children:[(0,I.jsx)(jn,{size:15}),(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`strong`,{children:a?.deviceName||t(`this_device`)}),(0,I.jsx)(ls,{children:a?.fingerprint??``})]})]}),a?.shares.length===0&&(0,I.jsx)(us,{children:t(`no_folders_are_shared_yet`)}),a?.shares.map(e=>(0,I.jsxs)(ds,{children:[(0,I.jsxs)(fs,{children:[(0,I.jsx)(ps,{title:e.path,children:e.name}),(0,I.jsx)(hs,{disabled:s,onClick:()=>void u(()=>Xt(e.id)),title:t(`stop_sharing`),type:`button`,children:(0,I.jsx)(N,{size:10})})]}),(0,I.jsx)(ms,{title:e.path,children:e.path}),(0,I.jsxs)(gs,{children:[(0,I.jsxs)(_s,{$active:e.mode===`client`,onClick:()=>void u(()=>E(e.id,`client`)),title:t(`only_paired_devices_can_open_this_folder_in_the_app`),type:`button`,children:[(0,I.jsx)(jn,{size:11}),t(`app`)]}),(0,I.jsxs)(_s,{$active:e.mode===`web`,onClick:()=>void u(()=>E(e.id,`web`)),title:t(`any_device_with_a_browser_can_open_this_folder`),type:`button`,children:[(0,I.jsx)(cn,{size:11}),t(`web`)]})]})]},e.id)),(0,I.jsxs)(vs,{disabled:s||e.length===0||d,onClick:()=>void u(()=>It(e,`client`)),title:d?t(`this_folder_is_already_shared`):e,type:`button`,children:[(0,I.jsx)(_n,{size:12}),t(`share_this_folder`)]}),a?.webRunning&&(0,I.jsxs)(ys,{children:[(0,I.jsxs)(bs,{children:[(0,I.jsx)(cn,{size:12}),t(`browser_access`)]}),(0,I.jsxs)(os,{children:[(0,I.jsx)(ss,{children:a.urls.map(e=>(0,I.jsx)(xs,{onClick:()=>void Ln(e),type:`button`,children:e},e))}),a.preferredUrl&&(0,I.jsx)(as,{value:a.preferredUrl})]}),(0,I.jsx)(ls,{children:t(`open_one_of_these_addresses_on_any_device_on_the_same_network`)})]})]})]})]})}var Zo=y.div`
    position: relative;
    display: flex;
`,Qo=y.button`
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
`,$o=y.div`
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
    ${Le}
`,es=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,ts=y.span`
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
`,ns=y.button`
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
`,rs=y.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,is=y.div`
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
`;function as({value:e}){let t=S(),n=(0,F.useMemo)(()=>Yo(e,{ecc:`M`,border:2,pixelSize:4,blackColor:`#000000`,whiteColor:`#ffffff`}),[e]);return(0,I.jsx)(cs,{dangerouslySetInnerHTML:{__html:n},role:`img`,title:t(`scan_the_code_to_open_this_share_on_a_phone`)})}var os=y.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,ss=y.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
`,cs=y.div`
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
`,ls=y.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,us=y.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,ds=y.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,fs=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,ps=y.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ms=y.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,hs=y.button`
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
`,gs=y.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,_s=y.button`
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
`,vs=y.button`
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
`,ys=y.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,bs=y.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,xs=y.button`
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
`;function Ss(){let e=S();return(0,I.jsx)(Cs,{title:e(`always_applies_to_every_folder`),children:e(`global`)})}var Cs=y.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`;function ws({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=S(),[s,c]=(0,F.useState)(!1),l=(0,F.useRef)(null);(0,F.useEffect)(()=>{if(!s)return;let e=()=>c(!1),t=e=>{l.current?.contains(e.target)||c(!1)},n=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`keydown`,n)}},[s]),(0,F.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=Kt.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,I.jsxs)(Ts,{ref:l,children:[(0,I.jsx)(Es,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`view`),type:`button`,children:e.mode===`grid`?(0,I.jsx)(un,{size:14}):(0,I.jsx)(on,{size:14})}),s&&(0,I.jsxs)(Ds,{children:[(0,I.jsxs)(Os,{children:[(0,I.jsx)(pn,{size:11}),o(`view`)]}),(0,I.jsxs)(As,{children:[(0,I.jsxs)(js,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,I.jsx)(on,{size:12}),` `,o(`list`)]}),(0,I.jsxs)(js,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,I.jsx)(un,{size:12}),` `,o(`grid`)]})]}),(0,I.jsxs)(Os,{children:[(0,I.jsx)(on,{size:11}),o(`list_icon_size`)]}),(0,I.jsxs)(Ms,{children:[(0,I.jsx)(`input`,{"aria-label":o(`list_icon_size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,I.jsxs)(Ns,{children:[e.iconSize,`px`]})]}),(0,I.jsxs)(Os,{children:[(0,I.jsx)(un,{size:11}),o(`grid_size`)]}),(0,I.jsxs)(Ms,{children:[(0,I.jsx)(`input`,{"aria-label":o(`grid_size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,I.jsxs)(Ns,{children:[e.gridSize,`px`]})]}),(0,I.jsxs)(Os,{children:[(0,I.jsx)(bn,{size:11}),o(`columns`),(0,I.jsx)(Ss,{}),(0,I.jsx)(ks,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:o(`reset_column_widths`),type:`button`,children:o(`reset_widths`)})]}),Kt.map(e=>(0,I.jsxs)(Ps,{children:[(0,I.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,I.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,I.jsxs)(Ps,{children:[(0,I.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,I.jsx)(`span`,{children:o(`link_target_after_the_name`)})]}),(0,I.jsxs)(Os,{children:[(0,I.jsx)(wn,{size:11}),o(`preview_panel`),(0,I.jsx)(Ss,{})]}),(0,I.jsxs)(Ps,{children:[(0,I.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,I.jsx)(`span`,{children:o(`preview_under_the_list`)})]})]})]})}var Ts=y.div`
    position: relative;
    display: flex;
    height: 100%;
`,Es=y.button`
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
`,Ds=y.div`
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
`,Os=y.div`
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
`,ks=y.button`
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
`,As=y.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,js=y.button`
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
`,Ms=y.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,Ns=y.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,Ps=y.label`
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
`,Fs=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),Is=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),Ls=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,I.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),Rs=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,I.jsx)(`path`,{d:`M2 5h6`})}),zs=e=>(0,I.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,I.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Bs=e=>(0,I.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,I.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,I.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function Vs({tabs:e,activeId:t,closedTabs:n,onRestoreClosed:r,onSelect:i,onClose:a,onNewTab:o,onReorder:s,onTransferToTab:c,view:l,onViewChange:u,onColumns:d,showImages:f,onShowImages:p,tasks:m,onClearTasks:ee,activityOpen:h,onActivityOpenChange:g,trayCount:_,trayVisible:v,onToggleTray:y,split:te,canSplit:ne,onToggleSplit:re,details:ie,canDetails:ae,onToggleDetails:x,shortcuts:oe,currentFolder:ce}){let C=S(),le=b(),ue=se(),[de,fe]=(0,F.useState)({left:!1,right:!1}),[pe,me]=(0,F.useState)(null),[he,ge]=(0,F.useState)(null),_e=(0,F.useRef)(null),w=(0,F.useRef)(null),ve=(0,F.useRef)(null),ye=(0,F.useCallback)(()=>{let e=w.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;fe(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,F.useEffect)(()=>{ye();let e=w.current;if(!e)return;let t=new ResizeObserver(ye);return t.observe(e),()=>t.disconnect()},[ye,e.length]),(0,F.useEffect)(()=>()=>{_e.current&&window.clearTimeout(_e.current.timer)},[]),(0,F.useEffect)(()=>{ve.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let be=e=>w.current?.scrollBy({left:e,behavior:`smooth`}),xe=()=>{_e.current&&window.clearTimeout(_e.current.timer),_e.current=null,ge(null)};return(0,I.jsxs)(Gs,{children:[(0,I.jsx)(Ks,{children:(0,I.jsx)(jn,{size:19})}),(0,I.jsxs)(qs,{children:[de.left&&(0,I.jsx)(Ys,{onClick:()=>be(-180),title:C(`scroll_tabs_left`),type:`button`,children:(0,I.jsx)(Fs,{})}),(0,I.jsx)(Js,{onScroll:ye,onWheel:e=>{let t=w.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:w,children:e.map(e=>(0,I.jsxs)(Xs,{$active:e.id===t,$dragging:pe===e.id,$dropTarget:he===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!yt(t.dataTransfer)||!Hs(e)||(t.preventDefault(),_e.current?.id===e.id))return;xe(),ge(e.id);let n=window.setTimeout(()=>{i(e.id),_e.current=null},500);_e.current={id:e.id,timer:n}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(_e.current?.id===e.id||he===e.id)&&xe()},onDragEnd:()=>{me(null),xe()},onDragOver:t=>{(pe||yt(t.dataTransfer)&&Hs(e))&&(t.preventDefault(),yt(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>me(e.id),onDrop:t=>{if(t.preventDefault(),pe)s(pe,e.id);else if(Hs(e)&&yt(t.dataTransfer)){let{paths:n,move:r}=Lt(t);n.length>0&&(i(e.id),c(n,e.path,!t.ctrlKey&&r))}me(null),xe()},onClick:()=>i(e.id),ref:e.id===t?ve:void 0,title:e.path||e.title,type:`button`,children:[(0,I.jsx)(Us,{tab:e}),(0,I.jsx)(Zs,{children:e.title}),e.partner&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Qs,{children:`|`}),(0,I.jsx)(Ws,{place:e.partner.place}),(0,I.jsx)(Zs,{children:e.partner.title})]}),(0,I.jsx)($s,{"data-shortcut":A(oe.closeTab),onClick:t=>{t.stopPropagation(),a(e.id)},title:C(`close_tab`),children:(0,I.jsx)(Ls,{})})]},e.id))}),de.right&&(0,I.jsx)(Ys,{onClick:()=>be(180),title:C(`scroll_tabs_right`),type:`button`,children:(0,I.jsx)(Is,{})}),(0,I.jsx)(ec,{"data-shortcut":A(oe.newTab),onClick:o,title:C(`new_tab`),type:`button`,children:(0,I.jsx)(_n,{size:13})})]}),(0,I.jsx)(tc,{...ue}),(0,I.jsxs)(nc,{children:[(0,I.jsx)(ic,{$active:te,"data-shortcut":A(oe.splitView),disabled:!ne,onClick:re,title:C(te?`close_split_view`:`split_view`),type:`button`,children:(0,I.jsx)(bn,{size:15})}),(0,I.jsx)(ic,{$active:ie,disabled:!ae,onClick:x,title:C(ie?`hide_details_panel`:`show_details_panel`),type:`button`,children:(0,I.jsx)(pn,{size:15})}),(0,I.jsxs)(rc,{$active:v,onClick:y,title:C(v?`hide_file_tray`:`show_file_tray`),type:`button`,children:[(0,I.jsx)(mn,{size:14}),_>0&&(0,I.jsx)(_a,{children:_>9?`9+`:_})]}),(0,I.jsx)(ia,{onRestore:r,tabs:n}),(0,I.jsx)(Ha,{}),(0,I.jsx)(Xo,{currentFolder:ce}),(0,I.jsx)(va,{tasks:m,onClear:ee,open:h,onOpenChange:g}),(0,I.jsx)(ws,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:u,onColumns:d,onShowImages:p,showImages:f,view:l}),(0,I.jsx)(ac,{onClick:le.minimize,title:C(`minimize`),type:`button`,children:(0,I.jsx)(Rs,{})}),(0,I.jsx)(ac,{onClick:le.toggleMaximize,title:le.maximized?C(`restore`):C(`maximize`),type:`button`,children:le.maximized?(0,I.jsx)(Bs,{}):(0,I.jsx)(zs,{})}),(0,I.jsx)(oc,{onClick:le.close,title:C(`close`),type:`button`,children:(0,I.jsx)(Ls,{})})]})]})}function Hs(e){return e.kind===`files`&&(!v(e.path)||a(e.path))}function Us({tab:e}){switch(e.kind){case`home`:return(0,I.jsx)(nn,{size:13});case`settings`:return(0,I.jsx)(an,{size:13});case`recycle`:return(0,I.jsx)(Fn,{size:13});default:return e.archive?(0,I.jsx)(Dn,{size:13}):(0,I.jsx)(Ws,{place:e.place})}}function Ws({place:e}){return e?(0,I.jsx)(vt,{place:e,size:13}):(0,I.jsx)(dn,{size:13})}var Gs=y.header`
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
`,Ks=y.span`
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
`,qs=y.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,Js=y.div`
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
`,Ys=y.button`
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
`,Xs=y.button`
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
`,Zs=y.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Qs=y.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,$s=y.span`
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
`,ec=y.button`
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
`,tc=y.div`
    flex: 1;
    min-width: 28px;
`,nc=y.div`
    display: flex;
    flex-shrink: 0;
`,rc=y.button`
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
`,ic=y.button`
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
`,ac=y.button`
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
`,oc=y(ac)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function sc(){let[e,t]=(0,F.useState)(null),n=(0,F.useRef)(null),r=(0,F.useRef)(void 0);return(0,F.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`blur`,i),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`blur`,i),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,L.createPortal)((0,I.jsx)(cc,{tooltip:e}),document.body):null}function cc({tooltip:e}){let t=(0,F.useRef)(null),[n,r]=(0,F.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,F.useState)(()=>e.bottom+6);return(0,F.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,I.jsxs)(lc,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,I.jsx)(uc,{children:e.text}),e.shortcut&&(0,I.jsx)(dc,{children:e.shortcut})]})}var lc=y.div`
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
`,uc=y.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,dc=y.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,fc=[{id:`ui`,label:`interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`interface`},{id:`names`,label:`file_names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`interface`},{id:`details`,label:`details_panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`interface`},{id:`path`,label:`address_bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`monospace`},{id:`mono`,label:`monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`text_preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`monospace`}];function pc(e){return`"${e.replaceAll(`"`,``)}"`}function mc(e){let t=document.documentElement.style;for(let n of fc){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${pc(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function hc(){return x.available?(await x.request(`app.fonts`)).fonts??[]:[]}function gc({deviceName:e,code:t,onAccept:n,onReject:r}){let i=S(),a=(0,F.useRef)(null);return(0,F.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,L.createPortal)((0,I.jsx)(_c,{children:(0,I.jsxs)(vc,{role:`alertdialog`,"aria-modal":`true`,children:[(0,I.jsxs)(yc,{children:[(0,I.jsx)(Tn,{size:15}),i(`pair_for_sharing`)]}),(0,I.jsx)(bc,{children:i(`device_wants_to_pair_with_this_device_for_sharing_folders`,{device:e})}),(0,I.jsx)(xc,{children:t}),(0,I.jsx)(Sc,{children:i(`check_that_the_other_device_shows_the_same_code_before_accepting`)}),(0,I.jsxs)(Cc,{children:[(0,I.jsx)(wc,{onClick:r,type:`button`,children:i(`reject`)}),(0,I.jsx)(Tc,{onClick:n,ref:a,type:`button`,children:i(`accept`)})]})]})}),document.body)}var _c=y.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${Ve}
`,vc=y.div`
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
`,yc=y.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,bc=y.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,xc=y.div`
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
`,Sc=y.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Cc=y.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,wc=y.button`
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
`,Tc=y(wc)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,Ec=y.button`
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
`,Dc=y.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,Oc=`modulepreload`,kc=function(e){return`/`+e},Ac={},jc=function(e){return e.pathname.endsWith(`.css`)},Mc=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},Nc=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=kc(t,n);let r=s(t),i=jc(r);return Mc(Ac,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Oc,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Pc=(0,F.lazy)(()=>Nc(()=>import(`./OverviewView-DU00m3L9.js`).then(e=>e.n).then(e=>({default:e.OverviewView})),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),Fc=(0,F.lazy)(()=>Nc(()=>import(`./SettingsView-Cllwkxnr.js`).then(e=>({default:e.SettingsView})),__vite__mapDeps([11,1,2,4,5,3,6,7,9,8,10]))),Ic=(0,F.lazy)(()=>Nc(()=>import(`./GalleryView-D3Z83d1T.js`).then(e=>e.n).then(e=>({default:e.GalleryView})),__vite__mapDeps([12,1,2,4,5,3,6,9]))),Lc=(0,F.lazy)(()=>Nc(()=>import(`./RecycleView-DY92T3MR.js`).then(e=>({default:e.RecycleView})),__vite__mapDeps([13,1,2,4,5,3,6,8]))),Rc=0,zc=new Set;function Bc(e){zc.add(e),x.send({type:`app.navigate.done`,payload:{path:e}})}var Vc=20,Hc=[{value:`0`,label:`auto`},{value:`932`,label:`japanese_cp932`},{value:`936`,label:`simplified_chinese_cp936`},{value:`950`,label:`traditional_chinese_cp950`},{value:`949`,label:`korean_cp949`},{value:`1252`,label:`western_cp1252`},{value:`1250`,label:`central_european_cp1250`},{value:`1251`,label:`cyrillic_cp1251`},{value:`1254`,label:`turkish_cp1254`},{value:`1253`,label:`greek_cp1253`},{value:`1256`,label:`arabic_cp1256`},{value:`1255`,label:`hebrew_cp1255`},{value:`1257`,label:`baltic_cp1257`},{value:`874`,label:`thai_cp874`},{value:`65001`,label:`utf_8`}];function Uc(e){return e.history[e.index]??lr(`home`)}function Z(e){return ur(Uc(e))??`files`}function Q(e){let t=Uc(e);return ur(t)?``:e.listing?.path||t}function Wc(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||Z(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function Gc(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function Kc(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||Ie.iconSize,gridSize:e.view?.gridSize||t.gridSize||Ie.gridSize,sort:e.view?.sort??Ie.sort,sortDescending:e.view?.sortDescending??Ie.sortDescending,columns:t.columns??C.columns??[]}}function qc(e=lr(`home`)){return Rc+=1,{id:`tab-${Rc}`,listing:null,loading:!ur(e),error:null,history:[e],index:0,fresh:!0,view:null}}function Jc(e){return e instanceof Error?e.message:String(e)}function Yc(e){let t=Pt(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return dt(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function Xc(e){let t=u(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function Zc(e){return v(e)?we(e):void 0}function Qc(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return o(e,t.entries.length,`k_1_item_size`,`count_items_size`,{size:m(n)})}function $c(){let e=S(),[n,i]=(0,F.useState)(()=>[qc()]),[d,f]=(0,F.useState)(()=>n[0].id),[m,ee]=(0,F.useState)(null),[_,y]=(0,F.useState)(()=>{let e=Xe(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[b,te]=(0,F.useState)([]),[ne,ie]=(0,F.useState)([]),[se,ce]=(0,F.useState)(null),[be,Oe]=(0,F.useState)(null),[Ae,je]=(0,F.useState)(null),Me=ae(),Ne=lt(),[T,Fe]=(0,F.useState)(ye),[Le,Ve]=(0,F.useState)(0),[He,Ue]=(0,F.useState)(0),[We,Ke]=(0,F.useState)(0),[qe,Ye]=(0,F.useState)(ye),[Qe,tt]=(0,F.useState)(0),[rt,st]=(0,F.useState)(0),[E,dt]=(0,F.useState)(0),[ht,vt]=(0,F.useState)(0),bt=(0,F.useRef)(ht);bt.current=ht;let[Ct,wt]=(0,F.useState)([]),[kt,Pt]=(0,F.useState)(10),[O,It]=(0,F.useState)(null),Lt=oe(s(O?.themeMode)),Rt=(0,F.useMemo)(()=>(O?.favorites??[]).map(e=>t(e.path)),[O?.favorites]),[Kt,Xt]=(0,F.useState)(0),[j,$t]=(0,F.useState)(Tt),[tn,nn]=(0,F.useState)(0),[rn,on]=(0,F.useState)(0),[un,dn]=(0,F.useState)(0),[fn,pn]=(0,F.useState)(!0),[mn,yn]=(0,F.useState)(()=>{let e=Xe(`yafm.preview.width`,320);return e>=220?e:320}),[bn,xn]=(0,F.useState)(null),[Cn,wn]=(0,F.useState)(null),[Tn,En]=(0,F.useState)({kind:null,info:null}),[M,On]=(0,F.useState)(`primary`),[jn,Mn]=(0,F.useState)(null),[Nn,Pn]=(0,F.useState)(null),[N,Ln]=(0,F.useState)(null),[P,Rn]=(0,F.useState)(null),[Bn,Vn]=(0,F.useState)(null),[Hn,Un]=(0,F.useState)({primary:0,secondary:0}),[Wn,Gn]=(0,F.useState)({primary:null,secondary:null}),[Kn,qn]=(0,F.useState)(null),[Jn,Yn]=(0,F.useState)([]),[Xn,Zn]=(0,F.useState)(!1),[Qn,$n]=(0,F.useState)(null),[er,tr]=(0,F.useState)(``),nr=(0,F.useRef)([]),or=(0,F.useRef)([]),[sr,cr]=(0,F.useState)([]),[mr,hr]=(0,F.useState)([]),[gr,vr]=(0,F.useState)(!1),yr=(0,F.useMemo)(()=>gr?new Set(mr.map(e=>e.path)):new Set,[mr,gr]),[br,xr]=(0,F.useState)(!1),[L,Cr]=(0,F.useState)([]),[wr,Tr]=(0,F.useState)(null),Er=(0,F.useRef)(0),[Dr,Or]=(0,F.useState)(()=>{let e=De(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?Gc({x:e.x,y:e.y}):Gc({x:Math.max(20,window.innerWidth-340),y:110})}),kr=(0,F.useCallback)(()=>{Or(e=>Gc(e)),xr(!0)},[]),R=n.find(e=>e.id===d)??n[0],z=Z(R),Ar=Uc(R),B=Q(R),jr=z===`files`?R.listing?.parent??Yc(B):null,V=R.splitWith?n.find(e=>e.id===R.splitWith):void 0,Mr=z===`files`&&V!==void 0,Nr=V?Q(V):``,Pr=V?V.listing?.parent??Yc(Nr):null,H=Mr&&V&&M===`secondary`?V:R,Ir=O?.defaultView??C,Lr=Kc(H,Ir);(0,F.useEffect)(()=>{h(O?.accentColor,O?.secondaryColor,Lt)},[O?.accentColor,O?.secondaryColor,Lt]),(0,F.useEffect)(()=>{mc(O?.fonts)},[O?.fonts]),(0,F.useEffect)(()=>{p(O?.timeFormat,O?.timeFormatPattern),l(O?.relativeTime,O?.relativeTimeWindowMinutes)},[O?.timeFormat,O?.timeFormatPattern,O?.relativeTime,O?.relativeTimeWindowMinutes]),(0,F.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!O?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[O?.backgroundSource]),(0,F.useEffect)(()=>(Ze(e=>new Promise(t=>{Tr({id:++Er.current,prompt:e,resolve:t})})),()=>Ze(null)),[]),(0,F.useEffect)(()=>{On(`primary`)},[d]),(0,F.useEffect)(()=>{Ye(ye),st(0),dt(0)},[z]),(0,F.useEffect)(()=>{st(0)},[qe.query,qe.matchCase,qe.regex]),(0,F.useEffect)(()=>{st(e=>E===0?0:Math.min(e,E-1))},[E]);let U=Lr.columns.includes(`linkCount`),Rr=(0,F.useMemo)(()=>{let e={},n=mt(O),r={};for(let[e,n]of Object.entries(O?.placeNames??{}))r[t(e)]=n;for(let n of b)e[t(n.path)]=n;for(let i of n)if(i.kind===`quick`&&i.id!==`quick`)for(let n of i.places??[]){let i=t(n),a=b.find(e=>t(e.path)===i);e[i]={name:r[i]??a?.name??(u(n)||n),path:n,kind:`folder`,icon:a?.icon??O?.placeIcons?.[n]??null}}return e},[b,O]),zr=(0,F.useMemo)(()=>({places:Rr,useIcons:O?.systemIcons===!1}),[Rr,O?.systemIcons]),Br=O?.defaultView?.showImages??!0,Hr=O?.defaultView?.imageStripHeight??C.imageStripHeight,Ur=z===`home`?(0,I.jsx)(hn,{size:13}):z===`settings`?(0,I.jsx)(an,{size:13}):z===`recycle`?(0,I.jsx)(Fn,{size:13}):z===`gallery`?(0,I.jsx)(sn,{size:13}):void 0,Wr=T.open&&T.query.length>0,Gr=(0,F.useDeferredValue)(T),Kr=(0,F.useMemo)(()=>Wr&&H.listing?H.listing.entries.filter(e=>de(e.isDirectory?gt(zr,e.fullPath,e.name):e.name,Gr)).map(e=>e.fullPath):[],[Wr,Gr,H.listing,zr]);(0,F.useEffect)(()=>{Ve(0)},[T.query,T.matchCase,T.regex,H.listing?.path]);let qr=Kr.length===0?-1:Math.min(Le,Kr.length-1),W=(0,F.useCallback)(()=>{Fe(e=>({...e,open:!1,query:``})),Ve(0)},[]),Jr=(0,F.useCallback)(()=>{Fe(e=>({...e,open:!0})),Ue(e=>e+1)},[]),Yr=(0,F.useCallback)(()=>{Ye(e=>({...e,open:!0})),tt(e=>e+1)},[]),Xr=(0,F.useCallback)(()=>{Ye(ye),st(0),dt(0)},[]),Zr=(0,F.useCallback)(e=>{st(t=>E===0?0:(Math.min(t,E-1)+e+E)%E)},[E]),Qr=(0,F.useCallback)(e=>{Fe(t=>({...t,open:!0,query:t.open?t.query+e:e})),Ue(e=>e+1)},[]),$r=(0,F.useCallback)(e=>{Ve(t=>Kr.length===0?0:(Math.min(t,Kr.length-1)+e+Kr.length)%Kr.length)},[Kr.length]),G=(0,F.useRef)({tabs:n,activeId:d,activePane:M});G.current={tabs:n,activeId:d,activePane:M};let ei=(0,F.useRef)(O);ei.current=O;let ti=(0,F.useRef)(!1),ni=(0,F.useRef)([]),K=(0,F.useCallback)((e,t)=>{i(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),ri=(0,F.useRef)(new Map),ii=(0,F.useCallback)(e=>{let t=(ri.current.get(e)??0)+1;return ri.current.set(e,t),()=>ri.current.get(e)===t},[]),ai=(0,F.useCallback)((e,t)=>{x.available&&t&&e===Wc(G.current)&&x.send({type:`fs.focus`,payload:{path:t}})},[]),oi=(0,F.useCallback)(async(e,t,n)=>{if(!(t&&jt(t)))try{let r=(await et(t,U)).listing;if(!n()||!r)return;K(e,e=>e.loading?{listing:{...r,total:r.entries.length,signature:0},view:r.view??null}:{})}catch{}},[U,K]),q=(0,F.useCallback)(async(e,t,n=!1)=>{let i=ii(e);W(),ai(e,t);let a=!n||!G.current.tabs.find(t=>t.id===e)?.listing,o=!n&&t!==void 0;K(e,e=>{if(!o)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let i=e.history[e.index],a=i!==void 0&&r(i,t);return{listing:null,loading:!0,error:null,fresh:!1,history:a?e.history:[...e.history.slice(0,e.index+1),t],index:a?e.index:e.index+1}});try{a&&oi(e,t,i);let r=t&&jt(t)?await Ut(t):await w(t,!0,U,bt.current,t?Zc(t):void 0,e);if(!i())return;K(e,e=>({listing:r,view:r.view??null,loading:!1,fresh:!1,history:o?e.history.map((t,n)=>n===e.index?r.path:t):e.history,index:e.index})),!n&&!jt(r.path)&&Se(r.path).then(()=>Xt(e=>e+1))}catch(r){if(!i())return;let a=G.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?Q(a):``,s=Yc(o),c=Jc(r);if(o&&Je(c)){let r=g(o),a=await ze(r,!!we(r));if(a){$e(r,a),i()&&q(e,t,n);return}}K(e,e=>({listing:{path:o,parent:s,total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[ii,U,K,ai,W,oi]),si=(0,F.useRef)(new Set),ci=(0,F.useCallback)(async e=>{let t=G.current.tabs.find(t=>t.id===e),n=t?.listing;if(!t||Z(t)!==`files`||!n)return;let i=n.entries.length;if(i<=0||i>=(n.total??0)||di.current.has(e))return;let a=`${e}|${n.path}|${i}`;if(si.current.add(a))try{let t=await xe(n.path,i,n.view?.sort??`name`,n.view?.sortDescending??!1);K(e,e=>{let a=e.listing;return!a||!r(a.path,n.path)||a.entries.length!==i||a.view?.sort!==n.view?.sort?{}:{listing:{...a,entries:[...a.entries,...t.entries],total:t.total}}})}catch{}finally{si.current.delete(a)}},[K]),di=(0,F.useRef)(new Set),fi=(0,F.useCallback)(async e=>{let t=G.current.tabs.find(t=>t.id===e),n=t?.listing;if(t&&Z(t)===`files`&&n&&!(n.entries.length>=(n.total??0))&&di.current.add(e))try{let t=[],i=n.entries.length,a=n.total??0;for(;i<a;){let e=await xe(n.path,i,n.view?.sort??`name`,n.view?.sortDescending??!1);if(e.entries.length===0)break;t.push(e.entries),i+=e.entries.length,a=e.total}if(t.length===0)return;K(e,e=>{let i=e.listing;return!i||!r(i.path,n.path)||i.entries.length!==n.entries.length?{}:{listing:{...i,entries:[...i.entries,...t.flat()],total:a}}})}catch{}finally{di.current.delete(e)}},[K]),[pi,mi]=(0,F.useState)(0),hi=(0,F.useCallback)(async e=>{let t=G.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0;await fi(e),(G.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0)>t&&mi(e=>e+1)},[fi]),gi=H.id,_i=Z(H),vi=H.listing?.entries.length??0,yi=H.listing?.total??0;(0,F.useEffect)(()=>{T.open&&T.query.length!==0&&(_i!==`files`||vi>=yi||fi(gi))},[T.open,T.query,gi,_i,vi,yi,fi]);let xi=(0,F.useCallback)((e,t)=>{let n=dr(t);n&&(ur(n)?(W(),ii(e),K(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):q(e,n))},[ii,q,K,W]),Si=(0,F.useCallback)(async(e,t,n)=>{if(W(),ur(t)){ii(e),K(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=ii(e);ai(e,t),K(e,()=>({index:n,listing:null,loading:!0,error:null}));try{jt(t)||oi(e,t,r);let n=jt(t)?await Ut(t):await w(t,!0,U,bt.current,Zc(t),e);if(!r())return;K(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;let a=Jc(i);if(Je(a)){let i=g(t),a=await ze(i,!!we(i));if(a){$e(i,a),r()&&Si(e,t,n);return}}K(e,()=>({listing:{path:t,parent:Yc(t),total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:Jc(i)}))}},[ii,U,K,ai,W,oi]),J=(0,F.useCallback)((e,t=!0)=>{let n=qc(e??lr(`home`));return i(e=>[...e,n]),t&&f(n.id),e&&!ur(e)&&q(n.id,e),n.id},[q]),Ci=(0,F.useCallback)(e=>{for(let t of G.current.tabs)Z(t)===`files`&&r(Q(t),e)&&q(t.id,e,!0)},[q]),wi=(0,F.useCallback)((e,t)=>{let n=u(t);for(let i of G.current.tabs)i.listing?.entries.some(t=>r(t.fullPath,e))&&K(i.id,i=>{let a=i.listing;if(!a)return{};let o=a.entries.map(i=>r(i.fullPath,e)?{...i,name:n,fullPath:t}:i);return{listing:{...a,entries:o}}})},[K]),Ti=(0,F.useRef)([]);(0,F.useEffect)(()=>{let e=new Set;for(let r of n){let n=r.listing?.path??r.history[r.index]??``;n&&v(n)&&e.add(t(g(n)))}let r=Ti.current.filter(t=>!e.has(t));Ti.current=[...e],r.length>0&&_e(r)},[n]);let Di=(0,F.useCallback)((e,t=!1)=>{t?J(lr(e)):xi(G.current.activeId,lr(e))},[J,xi]),Oi=(0,F.useCallback)(e=>{let{tabs:t,activeId:n}=G.current,r=t.find(t=>t.id===e),a=t.filter(t=>t.id!==e&&t.id!==r?.splitWith);if(r&&!r.hidden&&(or.current.push(Uc(r)),or.current.length>Vc&&or.current.shift(),cr([...or.current])),a.length===0){let e=qc();i([e]),f(e.id);return}let o=t.findIndex(t=>t.id===e);i(a),n===e&&f(a[Math.min(o,a.length-1)].id)},[]),ki=(0,F.useCallback)(()=>{let e=or.current.pop();if(!e)return;cr([...or.current]);let t={...qc(e),fresh:!1};i(e=>[...e,t]),f(t.id),Z(t)===`files`&&q(t.id,Q(t))},[q]),Ai=(0,F.useCallback)(e=>{let t=or.current,n=t[e];if(!n)return;t.splice(e,1),cr([...t]);let r={...qc(n),fresh:!1};i(e=>[...e,r]),f(r.id),Z(r)===`files`&&q(r.id,Q(r))},[q]),ji=(0,F.useCallback)((e,t=!1)=>{t?J(e):xi(Wc(G.current),e??lr(`home`))},[xi,J]),Mi=(0,F.useCallback)(e=>{let{tabs:t,activeId:n}=G.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;f(r[i].id)},[]),Ni=(0,F.useCallback)(()=>{let{tabs:e,activeId:t}=G.current,n=e.find(e=>e.id===t);if(!n||Z(n)!==`files`)return;let r=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(r){i(e=>e.filter(e=>e.id!==r.id)),K(t,()=>({splitWith:void 0})),On(`primary`);return}let a=Q(n),o={...qc(a),hidden:!0};i(e=>[...e,o]),K(t,()=>({splitWith:o.id})),q(o.id,a),On(`primary`)},[q,K]),Pi=(0,F.useCallback)(e=>{yn(e),ue(`yafm.preview.width`,e)},[]),Fi=(0,F.useCallback)((e,t,n)=>En(r=>r.kind===e&&r.info?.path===t?.path&&r.info?.modified===t?.modified&&r.info?.name===t?.name&&r.note===n?r:{kind:e,info:t,note:n}),[]),Ii=(0,F.useCallback)((e,t)=>Fi(`gallery`,e,t),[Fi]),Li=(0,F.useCallback)((e,t)=>Fi(`recycle`,e,t),[Fi]),Ri=Mr?M===`secondary`?Cn??bn:bn??Cn:bn,zi=Mr&&M===`secondary`?Hn.secondary:Hn.primary,Bi=z===`files`?Ri:Tn.kind===z?Tn.info:null,Vi=z===`files`?zi>1?o(e,zi,`k_1_item_selected`,`count_items_selected`):void 0:Tn.kind===z?Tn.note:void 0,Ui=(0,F.useMemo)(()=>z===`files`&&R.listing?Qc(e,R.listing):er,[z,R.listing,e,er]),Wi=(0,F.useRef)(null),Gi=e=>{e.preventDefault();let t=Wi.current?.getBoundingClientRect();if(!t)return;let n=Math.max(t.width-7,1),r=e=>{let r=Math.min(Math.max((e.clientX-t.left)/n,.2),.8);y(r),ue(`yafm.split.ratio`,r)},i=()=>{window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,i)};window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,i)},Ki=(e,t,n)=>{t&&Mn({x:e.clientX,y:e.clientY,directory:t,refresh:n})},qi=(0,F.useCallback)((e,t)=>{Un(n=>n[e]===t?n:{...n,[e]:t})},[]),Ji=(0,F.useCallback)(e=>qi(`primary`,e),[qi]),Yi=(0,F.useCallback)(e=>qi(`secondary`,e),[qi]),Xi=(e,t)=>{Hn[e]!==0&&Gn(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},Zi=async(e,t=!1)=>{let n=jn;if(Mn(null),!n)return;let r=e===null?await Vt(n.directory,t):await Wt(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;W(),qn(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},Qi=(0,F.useCallback)(()=>{let{tabs:e}=G.current,t=e.find(e=>e.id===Wc(G.current));t&&t.index>0&&Si(t.id,t.history[t.index-1],t.index-1)},[Si]),$i=(0,F.useCallback)(()=>{let{tabs:e}=G.current,t=e.find(e=>e.id===Wc(G.current));t&&t.index<t.history.length-1&&Si(t.id,t.history[t.index+1],t.index+1)},[Si]),Y=(0,F.useCallback)(()=>{let{tabs:e}=G.current,t=e.find(e=>e.id===Wc(G.current));t&&Z(t)===`files`&&t.listing?.parent&&ji(t.listing.parent)},[ji]),ea=(0,F.useRef)(null),X=(0,F.useCallback)(()=>{for(let e of G.current.tabs)e.listing&&q(e.id,e.listing.path,!0)},[q]),ta=(0,F.useCallback)(e=>{e.length!==0&&(Cr(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),kr())},[kr]),na=(0,F.useCallback)(async e=>{let t=await Nt(e);t.length!==0&&ta(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[ta]),ra=(0,F.useCallback)(e=>{let t=new Set(e);Cr(e=>e.filter(e=>!t.has(e.path)))},[]),ia=(0,F.useCallback)(async e=>{let n=ei.current;if(!n)return;let r=await Nt(e);if(r.length===0)return;let i=new Set((n.favorites??[]).map(e=>t(e.path))),a=r.filter(e=>!i.has(t(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(a.length===0)return;let o={...n,favorites:[...n.favorites??[],...a]};It(o),await it(o),nn(e=>e+1)},[]),aa=(0,F.useCallback)(async e=>{let n=ei.current;if(!n)return;let r=new Set(e.map(t)),i=(n.favorites??[]).filter(e=>!r.has(t(e.path)));if(i.length===(n.favorites??[]).length)return;let a={...n,favorites:i};It(a),await it(a),nn(e=>e+1)},[]),oa=(0,F.useCallback)(()=>Cr([]),[]),sa=(0,F.useRef)(-1),ca=(0,F.useCallback)(e=>{hr(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),vr(e.move),e.entries.length>0&&kr()},[kr]),la=(0,F.useCallback)(async()=>{if(x.available)try{let e=await Mt();sa.current=e.sequence,ca(e)}catch{}},[ca]),ua=(0,F.useCallback)(async e=>{e.length!==0&&await zt(e,!1)&&await la()},[la]),da=(0,F.useRef)(L);da.current=L;let fa=(0,F.useRef)(br);fa.current=br;let pa=(0,F.useRef)(!1);(0,F.useEffect)(()=>{let e=O?.trayAutoShow??!0,t=t=>{e&&yt(t)&&(fa.current||(pa.current=!0),kr())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{pa.current&&window.setTimeout(()=>{pa.current&&da.current.length===0&&xr(!1),pa.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[kr,O?.trayAutoShow]),(0,F.useEffect)(()=>{let e=()=>Or(e=>Gc(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let ma=(0,F.useCallback)(async()=>{let e=da.current;if(e.length>0){let t=await Nt(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));Cr(e=>e.filter(e=>n.has(e.path)))}await la()},[la]),ha=(0,F.useCallback)(()=>{ma(),dn(e=>e+1),X()},[ma,X]),ga=(0,F.useCallback)(e=>{let t=Gc(e);Or(t),ve(`yafm.tray.position`,t)},[]),_a=(0,F.useCallback)(()=>{pa.current=!1,br?xr(!1):kr()},[kr,br]),va=(0,F.useCallback)(async(t,n,r)=>{let i=await Ot(t,n,r);i.cancelled||(i.ok?(r&&ra(t),dn(e=>e+1),X(),la()):Ce(i.error??e(`the_files_could_not_be_transferred`)))},[X,la,ra]);(0,F.useEffect)(()=>{if(x.available)return rr().then(e=>{nr.current=e,Yn(e)},()=>void 0),x.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=nr.current.find(t=>t.id===e.id);return!t||t.state!==e.state});nr.current=n,Yn(n),r&&Zn(!0)})},[]);let ya=(0,F.useCallback)(()=>{ir().then(()=>rr().then(e=>{nr.current=e,Yn(e)},()=>void 0))},[]);(0,F.useEffect)(()=>{if(!x.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await Mt();if(!e||t.sequence===sa.current)return;sa.current=t.sequence,ca(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[ca]);let ba=(0,F.useCallback)(async e=>{let t=e?await Qt():await Dt();t.ok?(dn(e=>e+1),X()):t.error&&!t.error.startsWith(`Nothing to`)&&Ce(t.error)},[X]),xa=(0,F.useRef)(U);(0,F.useEffect)(()=>{xa.current!==U&&(xa.current=U,X())},[U,X]);let Sa=(0,F.useCallback)((e,t)=>{let{tabs:n}=G.current,r=n.find(t=>t.id===e);if(!r||Z(r)!==`files`)return;let i=Q(r),a=ei.current?.defaultView??C,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||Ie.iconSize,gridSize:r.view?.gridSize||a.gridSize||Ie.gridSize,sort:r.view?.sort??Ie.sort,sortDescending:r.view?.sortDescending??Ie.sortDescending,...t};K(e,()=>({view:o})),ea.current!==null&&window.clearTimeout(ea.current),ea.current=window.setTimeout(()=>{ea.current=null,Ge(i,o)},250)},[K]),Ca=(0,F.useCallback)(e=>{Sa(Wc(G.current),e)},[Sa]),wa=(0,F.useCallback)(e=>{let t=ei.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??C,columns:e}};It(n),it(n)},[]),Ta=(0,F.useCallback)(e=>{let t=ei.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??C,showImages:e}};It(n),it(n)},[]),Ea=(0,F.useCallback)(e=>{let t=ei.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??C,imageStripHeight:e}};It(n),it(n)},[]),Da=(0,F.useCallback)((e,t,n,r)=>{let i=G.current.tabs.find(t=>t.id===e);if(!i||Z(i)!==`files`||!i.listing)return;let a=Q(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));K(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Be(a,t,n,r)},[K]),Oa=(0,F.useCallback)((e,t)=>{let n=G.current.tabs.find(t=>t.id===e);if(!n)return;let r=Kc(n,ei.current?.defaultView??C);Sa(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending}),q(e,Q(n),!0)},[Sa,q]),ka=(0,F.useCallback)((e,t)=>{i(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),Aa=(0,F.useCallback)(()=>{pe().then(te,()=>te([]))},[]),ja=(0,F.useCallback)(e=>{let t=(e.openTabs??[]).map(dr).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...qc(e),fresh:!1})),r=Math.min(Math.max(e.activeTab??0,0),n.length-1);i(n),f(n[r].id);let a=n[r];return(Z(a)===`files`?q(a.id,Q(a),!0):Promise.resolve()).then(()=>{for(let e of n)e!==a&&Z(e)===`files`&&q(e.id,Q(e),!0)}),!0},[q]),Ma=(0,F.useCallback)(e=>{let t=ni.current;if(ni.current=[],t.length===0)return;let n=t.filter(e=>!zc.has(e));for(let e of t)n.includes(e)||Bc(e);if(n.length===0)return;let{tabs:r}=G.current;if(!e&&r.length===1&&r[0].fresh){xi(r[0].id,n[0]),Bc(n[0]);for(let e of n.slice(1))J(e),Bc(e);return}let i=n.map(e=>{let t=J(e);return Bc(e),t}).at(-1);i&&setTimeout(()=>f(i),0)},[J,xi]),Na=(0,F.useCallback)(()=>{nt().then(e=>{It(e),Pt(e.recentLimit);let t=Ht(e.shortcuts);$t(t),qt(xt(t,`openInNewTab`)),nn(e=>e+1),ti.current||(ti.current=!0,Ma(e.restoreTabs&&ja(e)))},()=>{Pt(10),ti.current=!0,Ma(!1)})},[Ma,ja]),Pa=(0,F.useCallback)(()=>{ge().then(wt,()=>wt([]))},[]),Fa=(0,F.useCallback)(()=>{le().then(ie,()=>ie([]))},[]),Ia=n.filter(e=>!e.hidden),La=Ia.map(Uc),Ra=La.join(`
`),za=Math.max(Ia.findIndex(e=>e.id===d),0);(0,F.useEffect)(()=>{if(!O?.restoreTabs)return;let e=setTimeout(()=>void at(La,za),700);return()=>clearTimeout(e)},[Ra,za,O?.restoreTabs]),(0,F.useEffect)(()=>{let{tabs:e,activeId:t}=G.current,n=e.find(e=>e.id===t);n&&n.fresh&&Z(n)===`files`&&q(n.id,Q(n),!0),Aa(),Na(),Fa(),In().then(ce,()=>ce(null))},[q,Aa,Na,Fa]),(0,F.useEffect)(()=>{if(zn().then(Oe,()=>Oe(null)),x.available)return x.on(e=>{let t=e;t.type===`update.checked`&&t.data&&Oe(t.data)})},[]),(0,F.useEffect)(()=>{if(x.available)return x.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&ee({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&Ce(e(`pairing_code_code`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&Ce(n.data.error??e(`pairing_failed`))}})},[e]),(0,F.useEffect)(()=>{let e=setInterval(Fa,3e4);return()=>clearInterval(e)},[Fa]),(0,F.useEffect)(()=>{z===`home`&&(Pa(),Fa())},[z,R.id,Pa,Fa]),(0,F.useEffect)(()=>{if(!x.available)return;let e=x.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=G.current,i=t.data.startup===!0;i&&zc.has(n)?Bc(n):i&&!ti.current?ni.current.includes(n)||ni.current.push(n):(i&&r.length===1&&r[0].fresh?xi(r[0].id,n):ur(n)?xi(Wc(G.current),n):J(n),i&&Bc(n))});return x.send({type:`app.ready`}),e},[xi,J]),(0,F.useEffect)(()=>{if(x.available)return x.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:r}=t.data;i(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let i=e.slice(),a=e[t];return i[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...r}}},i})})},[]),(0,F.useEffect)(()=>{if(x.available)return x.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:r}=t.data;i(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let i=e.slice(),a=e[t];return i[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...r}}},i})})},[]),(0,F.useEffect)(()=>{let e=e=>{if(ot(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),Qi();return}if(e.key===`BrowserForward`){e.preventDefault(),$i();return}if(e.key===`Escape`&&T.open){e.preventDefault(),W();return}let t=Et(e);if(D(j,`closeTab`,t)&&(e.preventDefault(),Oi(Wc(G.current))),D(j,`newTab`,t)&&(e.preventDefault(),J()),D(j,`reopenTab`,t)&&(e.preventDefault(),ki()),D(j,`goBack`,t)&&(e.preventDefault(),Qi()),D(j,`goForward`,t)&&(e.preventDefault(),$i()),D(j,`goUp`,t)&&(e.preventDefault(),Y()),D(j,`find`,t)&&(e.preventDefault(),z===`files`?Jr():Yr()),D(j,`location`,t)&&(e.preventDefault(),on(e=>e+1)),D(j,`home`,t)){e.preventDefault();let t=b.find(e=>e.kind===`home`)?.path;t&&ji(t)}D(j,`iconsView`,t)&&(e.preventDefault(),z===`files`&&Ca({mode:`grid`})),D(j,`detailsView`,t)&&(e.preventDefault(),z===`files`&&Ca({mode:`list`})),D(j,`nextTab`,t)&&(e.preventDefault(),Mi(1)),D(j,`previousTab`,t)&&(e.preventDefault(),Mi(-1)),D(j,`hidden`,t)&&(e.preventDefault(),Ee().then(()=>{dn(e=>e+1),X()})),D(j,`undo`,t)&&(e.preventDefault(),ba(!0)),D(j,`redo`,t)&&(e.preventDefault(),ba(!1)),D(j,`splitView`,t)?(e.preventDefault(),Ni()):Object.keys(j).some(e=>e!==`openInNewTab`&&D(j,e,t))||z!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Qr(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[j,z,T.open,Oi,ki,J,Qi,$i,Y,Jr,Yr,W,Qr,Ca,Mi,ji,b,X,ba,Ni]),(0,F.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Qi()):(e.button===4||e.button===9)&&(e.preventDefault(),$i())},t=e=>{(e.button===3||e.button===4||e.button===8||e.button===9)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[Qi,$i]),(0,F.useEffect)(()=>{if(x.available)return x.on(e=>{let t=e;if(t.type===`app.navigation`)switch(t.data?.direction){case`back`:Qi();break;case`forward`:$i()}})},[Qi,$i]);let Ba=(0,F.useMemo)(()=>{let e=new Set;for(let t of n){if(Z(t)!==`files`)continue;let n=Q(t);if(n&&!jt(n)){if(v(n)){let t=Yc(g(n));t&&e.add(t)}else e.add(n)}}return[...e]},[n]),Va=Ba.join(`\0`);(0,F.useEffect)(()=>{x.available&&x.send({type:`fs.watch`,payload:{paths:Ba,owner:`app`}})},[Va,d]);let Ha=Z(H)===`files`?Q(H):``;(0,F.useEffect)(()=>{x.available&&x.send({type:`fs.focus`,payload:{path:Ha||null}})},[Ha]),(0,F.useEffect)(()=>{if(x.available)return x.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,i=G.current.tabs.filter(e=>Z(e)===`files`&&r(Q(e),n)),a=G.current.tabs.filter(e=>{let t=Q(e);return Z(e)===`files`&&t.length>0&&v(t)&&r(g(t),n)});if(i.length!==0||a.length!==0){Re(n);for(let e of a){let t=G.current.tabs.find(t=>t.id===e.id),i=t?Q(t):``;t&&Z(t)===`files`&&!t.loading&&v(i)&&r(g(i),n)&&q(e.id,i,!0)}i.length!==0&&w(n,!1,U).then(e=>{for(let t of i){let n=G.current.tabs.find(e=>e.id===t.id);n&&Z(n)===`files`&&r(Q(n),e.path)&&(n.loading?window.setTimeout(()=>{let n=G.current.tabs.find(e=>e.id===t.id);n&&!n.loading&&Z(n)===`files`&&r(Q(n),e.path)&&K(t.id,()=>({listing:e}))},300):K(t.id,()=>({listing:e})))}},()=>void 0)}})},[U,q,K]);let Ua=R.index>0,Wa=R.index<R.history.length-1,Ga=(e,t)=>{let n=Kc(e,Ir),i=e.listing?.path??e.history[e.index]??``,o=v(i),s=o&&a(i);return(0,I.jsx)(Jt,{platform:se?.platform,confirmDelete:O?.confirmDelete??!1,cutPaths:yr,previewVideoAudio:O?.previewVideoAudio??!1,previewVideoAutoplay:O?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?xn:wn,onActivate:()=>On(t?`primary`:`secondary`),enableShortcuts:(!Mr||(t?M===`primary`:M===`secondary`))&&(!o||s),error:e.error,find:e.id===H.id?{...T,currentPath:qr<0?null:Kr[qr]}:void 0,selectMatchesToken:e.id===H.id?We:0,imageStripHeight:Hr,listing:e.listing,loading:e.loading,onImageStripHeight:Ea,readOnly:o&&!s||jt(e.listing?.path??``),onOpen:(t,n)=>{n?J(t):q(e.id,t)},onOpenFile:(t,n)=>{jt(t)?Bt(t).catch(e=>void Ce(Jc(e))):c(t)?O?.archiveHandler??!1?n?J(t):q(e.id,t):he(t):v(t)?(async()=>{let e=await me(t,bt.current,Zc(t));if(!e.path&&Je(e.error)){let n=g(t),r=we(n);r&&Pe(n);let i=await ze(n,!!r);i&&($e(n,i),e=await me(t,bt.current,i))}e.path?he(e.path):e.error&&Ce(e.error)})():he(t)},onRefresh:()=>{let t=e.listing?.path;t&&Ci(t)},onLoadMore:()=>void ci(e.id),onEnsureComplete:()=>void hi(e.id),selectAllToken:e.id===H.id?pi:0,onRename:wi,onSelectionCountChange:t?Ji:Yi,onSetTags:(t,n,r)=>Da(e.id,t,n,r),selectionMenuRequest:t?Wn.primary:Wn.secondary,onSort:t=>Oa(e.id,t),onPaste:ha,onClipboardChanged:()=>void la(),onTransfer:va,onAddToTray:e=>void na(e),onAddFavorite:e=>void ia(e),onRemoveFavorite:e=>void aa(e),favoritePaths:Rt,onExtractArchive:(e,t)=>void Za(e,t),openOnSingleClick:O?.openOnSingleClick??!1,pendingRename:Kn&&t===(M===`primary`)&&r(Kn.directory,e.listing?.path??``)?Kn.path:null,pendingRenameToken:Kn?.token??0,refreshToken:un,shortcuts:j,showCheckboxes:O?.showCheckboxes??!0,showImages:Br,view:n})},Ka=T.open&&(0,I.jsx)(bi,{current:qr,focusToken:He,matchCase:T.matchCase,mode:T.mode,onClose:W,onMatchCase:()=>Fe(e=>({...e,matchCase:!e.matchCase})),onMode:()=>Fe(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>$r(1),onPrevious:()=>$r(-1),onQuery:e=>Fe(t=>({...t,query:e})),onRegex:()=>Fe(e=>({...e,regex:!e.regex})),query:T.query,regex:T.regex,total:Kr.length,onSelectMatches:Kr.length>0?()=>Ke(e=>e+1):void 0}),qa=z===`files`&&v(B),Ja=qa&&a(B),Ya=qa&&R.listing?.archiveEncrypted===!0,Xa=async(t,n)=>{let r=g(t),i=await fe(r,n,bt.current,Zc(r));if(!i.ok&&Je(i.error)){let e=we(r);e&&Pe(r);let t=await ze(r,!!e);t&&($e(r,t),i=await fe(r,n,bt.current,t))}i.ok?(Ci(n),ke(),q(R.id,n,!0)):Ce(`${e(`could_not_extract_the_archive`)}${i.error?`\n${i.error}`:``}`)},Za=async(e,t)=>{let n=g(e),i=Yc(n);if(!i)return;if(t===`choose`){let e=await pt(i);e&&await Xa(n,e);return}let a=t===`named`;if(t===`auto`){let e=r(n,B)?R.listing?.entries??[]:(await w(n,!1,!1,bt.current,Zc(n))).entries;a=!(e.length===1&&e[0].isDirectory)}let o=i.includes(`\\`)?`\\`:`/`,s=a?`${i.replace(/[\\/]+$/,``)}${o}${Xc(n)}`:i;await Xa(n,s)},Qa=async e=>{qa&&await Za(B,e)},$a=async()=>{qa&&await Za(B,`choose`)},eo=(0,I.jsxs)(il,{children:[(0,I.jsx)($,{"data-shortcut":A(j.goBack),disabled:!Ua,onClick:e=>{R.index>0&&k(e)?J(R.history[R.index-1]):Qi()},onContextMenu:e=>{R.index<=0||(e.preventDefault(),Ln({x:e.clientX,y:e.clientY,tab:R,direction:`back`}))},title:e(`back`),type:`button`,children:(0,I.jsx)(An,{})}),(0,I.jsx)($,{"data-shortcut":A(j.goForward),disabled:!Wa,onClick:e=>{R.index<R.history.length-1&&k(e)?J(R.history[R.index+1]):$i()},onContextMenu:e=>{R.index>=R.history.length-1||(e.preventDefault(),Ln({x:e.clientX,y:e.clientY,tab:R,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,I.jsx)(Sn,{})}),(0,I.jsx)($,{"data-shortcut":A(j.goUp),disabled:z!==`files`||!jr,onClick:e=>{jr&&(k(e)?J(jr):ji(jr))},title:e(`up_one_level`),type:`button`,children:(0,I.jsx)(gn,{})}),(0,I.jsx)(Ei,{focusToken:rn,icon:Ur,label:z===`files`?void 0:e(ar[z]),onContextMenu:z===`files`?(e,t,n)=>Rn({x:t,y:n,path:e}):void 0,onNavigate:ji,path:z===`files`?B:Ar}),z===`files`&&(!qa||Ja)&&(0,I.jsx)($,{onClick:e=>Ki(e,B,()=>void q(R.id,B,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,I.jsx)(_n,{})}),(0,I.jsx)($,{"data-shortcut":A(j.find),onClick:()=>z===`files`?Jr():Yr(),title:e(`search`),type:`button`,children:(0,I.jsx)(vn,{})}),Hn.primary>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Dc,{}),(0,I.jsx)($,{onClick:e=>Xi(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,I.jsx)(kn,{})})]}),(0,I.jsx)(`span`,{ref:$n,style:{display:`contents`}}),qa&&(0,I.jsxs)(al,{children:[(0,I.jsx)(Dc,{}),Ya&&(0,I.jsxs)(ol,{title:e(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,I.jsx)(ln,{size:12}),e(`encrypted`)]}),(0,I.jsx)($,{onClick:()=>void $a(),onContextMenu:e=>{e.preventDefault(),Pn({x:e.clientX,y:e.clientY})},title:e(`extract_archive`),type:`button`,children:(0,I.jsx)(Dn,{})}),(0,I.jsx)(en,{icon:(0,I.jsx)(cn,{size:15}),onChange:e=>{let t=Number(e);vt(t),bt.current=t,qa&&q(R.id,B,!0)},options:Hc.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`archive_encoding`)}: ${e(Hc.find(e=>e.value===String(ht))?.label??`auto`)}`,value:String(ht)})]})]}),to=qe.open?{...qe,index:rt}:null,no=t=>{let n=ur(t);return n?e(ar[n]):gt(zr,t,pr(t)||e(`files`))};return(0,I.jsx)(ft,{value:zr,children:(0,I.jsxs)(el,{$rounded:Me,children:[(0,I.jsx)(_r,{settings:O,theme:Lt}),(0,I.jsx)(Vs,{activeId:R.id,closedTabs:sr,onClose:Oi,onNewTab:()=>J(),onRestoreClosed:Ai,onReorder:ka,onTransferToTab:va,onSelect:f,onViewChange:Ca,onColumns:wa,onShowImages:Ta,showImages:Br,tasks:Jn,onClearTasks:ya,activityOpen:Xn,onActivityOpenChange:Zn,trayCount:L.length+mr.length,trayVisible:br,onToggleTray:_a,split:Mr,canSplit:z===`files`,onToggleSplit:Ni,details:fn,canDetails:z===`files`||z===`recycle`||z===`gallery`,onToggleDetails:()=>pn(e=>!e),currentFolder:z===`files`&&!jt(B)?B:``,shortcuts:j,view:Lr,tabs:n.filter(e=>!e.hidden).map(t=>{let r=Z(t),i=Q(t),a=t.splitWith?n.find(e=>e.id===t.splitWith):void 0,o=a?Q(a):``;return{id:t.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?Gt(zr,i):void 0,archive:r===`files`&&v(i),split:!!a,title:r===`files`?gt(zr,i,u(i)||e(`files`)):e(ar[r]),partner:a?{title:gt(zr,o,u(o)||e(`files`)),place:Gt(zr,o)}:void 0}})}),(0,I.jsxs)(tl,{children:[(0,I.jsx)(Hi,{activeKind:z,currentPath:z===`files`?Ar:``,drives:ne,historyVersion:Kt,onNavigate:ji,onOpenView:Di,homePath:b.find(e=>e.kind===`home`)?.path??``,places:b,recent:Ct,recentLimit:kt,version:tn}),(0,I.jsxs)(nl,{children:[(0,I.jsxs)(fl,{children:[(0,I.jsxs)(pl,{children:[z!==`files`&&eo,(0,I.jsx)(rl,{children:(0,I.jsxs)(F.Suspense,{fallback:null,children:[z!==`files`&&qe.open&&(0,I.jsx)(bi,{current:rt,focusToken:Qe,matchCase:qe.matchCase,mode:qe.mode,onClose:Xr,onMatchCase:()=>Ye(e=>({...e,matchCase:!e.matchCase})),onMode:()=>Ye(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Zr(1),onPrevious:()=>Zr(-1),onQuery:e=>Ye(t=>({...t,query:e})),onRegex:()=>Ye(e=>({...e,regex:!e.regex})),placeholder:e(`search`),query:qe.query,regex:qe.regex,total:E,onSelectMatches:z===`gallery`||z===`recycle`?()=>Ke(e=>e+1):void 0}),z===`files`?Mr&&V?(0,I.jsxs)(cl,{ref:Wi,children:[(0,I.jsxs)(ll,{style:{flex:_},children:[(0,I.jsxs)(sl,{$active:M===`primary`,onPointerDown:()=>On(`primary`),children:[(0,I.jsx)($,{"data-shortcut":A(j.goBack),disabled:!Ua,onClick:e=>{let t=R.index-1;t<0||(k(e)?J(R.history[t]):Si(R.id,R.history[t],t))},onContextMenu:e=>{R.index<=0||(e.preventDefault(),Ln({x:e.clientX,y:e.clientY,tab:R,direction:`back`}))},title:e(`back`),type:`button`,children:(0,I.jsx)(An,{})}),(0,I.jsx)($,{"data-shortcut":A(j.goForward),disabled:!Wa,onClick:e=>{let t=R.index+1;t>=R.history.length||(k(e)?J(R.history[t]):Si(R.id,R.history[t],t))},onContextMenu:e=>{R.index>=R.history.length-1||(e.preventDefault(),Ln({x:e.clientX,y:e.clientY,tab:R,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,I.jsx)(Sn,{})}),(0,I.jsx)($,{"data-shortcut":A(j.goUp),disabled:!jr,onClick:e=>{jr&&(k(e)?J(jr):q(R.id,jr))},title:e(`up_one_level`),type:`button`,children:(0,I.jsx)(gn,{})}),(0,I.jsx)(Ei,{focusToken:M===`primary`?rn:void 0,onContextMenu:(e,t,n)=>Rn({x:t,y:n,path:e}),onNavigate:(e,t)=>t?J(e):void q(R.id,e),path:B}),(0,I.jsx)($,{onClick:e=>Ki(e,B,()=>void q(R.id,B,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,I.jsx)(_n,{})}),(0,I.jsx)($,{"data-shortcut":A(j.find),onClick:Jr,title:e(`search`),type:`button`,children:(0,I.jsx)(vn,{})}),Hn.primary>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Dc,{}),(0,I.jsx)($,{onClick:e=>Xi(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,I.jsx)(kn,{})})]})]}),Ga(R,!0),M===`primary`&&Ka]}),(0,I.jsx)(ul,{onDoubleClick:()=>y(.5),onPointerDown:Gi,title:e(`drag_to_resize_double_click_to_reset`)}),(0,I.jsxs)(ll,{$enter:!0,style:{flex:1-_},children:[(0,I.jsxs)(sl,{$active:M===`secondary`,onPointerDown:()=>On(`secondary`),children:[(0,I.jsx)($,{"data-shortcut":A(j.goBack),disabled:V.index<=0,onClick:e=>{let t=V.index-1;t<0||(k(e)?J(V.history[t]):Si(V.id,V.history[t],t))},onContextMenu:e=>{V.index<=0||(e.preventDefault(),Ln({x:e.clientX,y:e.clientY,tab:V,direction:`back`}))},title:e(`back`),type:`button`,children:(0,I.jsx)(An,{})}),(0,I.jsx)($,{"data-shortcut":A(j.goForward),disabled:V.index>=V.history.length-1,onClick:e=>{let t=V.index+1;t>=V.history.length||(k(e)?J(V.history[t]):Si(V.id,V.history[t],t))},onContextMenu:e=>{V.index>=V.history.length-1||(e.preventDefault(),Ln({x:e.clientX,y:e.clientY,tab:V,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,I.jsx)(Sn,{})}),(0,I.jsx)($,{"data-shortcut":A(j.goUp),disabled:!Pr,onClick:e=>{Pr&&(k(e)?J(Pr):q(V.id,Pr))},title:e(`up_one_level`),type:`button`,children:(0,I.jsx)(gn,{})}),(0,I.jsx)(Ei,{focusToken:M===`secondary`?rn:void 0,onContextMenu:(e,t,n)=>Rn({x:t,y:n,path:e}),onNavigate:(e,t)=>t?J(e):void q(V.id,e),path:Nr}),(0,I.jsx)($,{onClick:e=>Ki(e,Nr,()=>void q(V.id,Nr,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,I.jsx)(_n,{})}),(0,I.jsx)($,{"data-shortcut":A(j.find),onClick:Jr,title:e(`search`),type:`button`,children:(0,I.jsx)(vn,{})}),Hn.secondary>0&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(Dc,{}),(0,I.jsx)($,{onClick:e=>Xi(`secondary`,e),title:e(`selection_menu`),type:`button`,children:(0,I.jsx)(kn,{})})]})]}),Ga(V,!1),M===`secondary`&&Ka]})]}):(0,I.jsxs)(I.Fragment,{children:[eo,(0,I.jsxs)(dl,{children:[Ga(R,!0),Ka]})]}):z===`home`?(0,I.jsx)(Pc,{platform:se?.platform,drives:ne,find:to,historyVersion:Kt,onSearchMatches:dt,homePath:b.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:Fa,onHistoryChanged:()=>Xt(e=>e+1),onAddToTray:e=>void na(e),onAddFavorite:e=>void ia(e),onRemoveFavorite:e=>void aa(e),favoritePaths:Rt,onExtractArchive:(e,t)=>void Za(e,t),settingsVersion:tn,theme:Lt,onOpen:ji,onLayoutChanged:Na,onPlacesChanged:te,onRecentCleared:Pa,places:b,recent:Ct,recentLimit:kt,visibilityVersion:un}):z===`settings`?(0,I.jsx)(Fc,{appInfo:se,find:to,focusSection:Ae,onSearchMatches:dt,onSettingsChanged:Na}):z===`gallery`?(0,I.jsx)(Ic,{platform:se?.platform,toolbarSlot:Qn,onStatusChange:tr,confirmDelete:O?.confirmDelete??!1,find:to,onSearchMatches:dt,openOnSingleClick:O?.openOnSingleClick??!1,onAddToTray:e=>void na(e),onAddFavorite:e=>void ia(e),onRemoveFavorite:e=>void aa(e),favoritePaths:Rt,onExtractArchive:(e,t)=>void Za(e,t),shortcuts:j,showCheckboxes:O?.showCheckboxes??!0,selectMatchesToken:We,onPreviewChange:Ii,view:Lr}):(0,I.jsx)(Lc,{find:to,toolbarSlot:Qn,onStatusChange:tr,onOpenLocation:ji,onShowDetails:()=>pn(!0),platform:se?.platform,selectMatchesToken:We,onPreviewChange:Li})]})},z)]}),(z===`files`||z===`gallery`||z===`recycle`)&&(0,I.jsx)(_t,{emptyNote:e(`nothing_selected`),info:Bi,onWidth:Pi,open:fn,selectionNote:Vi,videoAudio:O?.previewVideoAudio??!1,videoAutoplay:O?.previewVideoAutoplay??!1,width:mn})]}),(0,I.jsxs)(vl,{children:[(0,I.jsx)(`span`,{children:Ui}),se?(0,I.jsxs)(ml,{children:[(0,I.jsxs)(`span`,{children:[`v`,se.version,` · `,se.platform]}),se.debug&&(0,I.jsx)(_l,{children:`debug`}),be?.available&&(0,I.jsxs)(hl,{onClick:e=>{je(`updates`),Di(`settings`,k(e))},title:e(`version_version_is_available`,{version:be.latest}),type:`button`,children:[(0,I.jsx)(gl,{}),e(`update_available`)]})]}):(0,I.jsx)(`span`,{children:e(`browser_preview`)})]})]})]}),(0,I.jsx)(ut,{clipboardItems:mr,clipboardMove:gr,currentDirectory:z===`files`?Ar:``,items:L,onAdd:e=>void na(e),onClear:oa,onClose:()=>xr(!1),onCopyToClipboard:e=>void ua(e),onPosition:ga,onRemove:ra,onTransfer:va,position:Dr,visible:br}),jn&&(0,I.jsx)(ct,{creationOnly:!0,directory:jn.directory,menu:{x:jn.x,y:jn.y,paths:[],background:!0},onClose:()=>Mn(null),onCreateFile:e=>void Zi(e),onCreateFolder:e=>void Zi(null,e),shortcuts:j}),P&&(0,I.jsx)(ct,{allowCompression:!0,directory:Yc(P.path)??P.path,menu:{x:P.x,y:P.y,paths:[P.path]},onAddToTray:e=>void na(e),onAddFavorite:e=>void ia(e),onRemoveFavorite:e=>void aa(e),favoritePaths:Rt,onExtractArchive:(e,t)=>void Za(e,t),onArchiveCreated:e=>{e&&Ci(Yc(P.path)??P.path)},onClose:()=>Rn(null),onCompressTo:(e,t)=>Vn({paths:e,name:t}),onCopy:(e,t)=>void zt(e,t),onDelete:e=>void Yt(e,!1).then(()=>Ci(Yc(P.path)??P.path)),onOpen:(e,t)=>t?J(e):void q(R.id,e),onOpenFile:e=>void he(e),onPaste:e=>void Ft(e).then(t=>{t.ok&&Ci(e)}),onRefresh:()=>Ci(P.path),shortcuts:j,target:{path:P.path,isDirectory:!0}}),Bn&&(0,I.jsx)(St,{initialDirectory:Yc(P?.path??B)??B,initialName:Bn.name,onCancel:()=>Vn(null),onCompress:async e=>{let t=await At(Bn.paths,e);return!t.ok&&t.error&&Ce(t.error),t.ok}}),N&&(0,I.jsx)(Te,{items:[{label:no(N.tab.history[N.tab.index]??``),icon:(0,I.jsx)(fr,{location:N.tab.history[N.tab.index]??``}),tooltip:N.tab.history[N.tab.index]??``,disabled:!0,onSelect:()=>void 0},...N.tab.history.map((e,t)=>({path:e,index:t})).filter(({index:e})=>N.direction===`back`?e<N.tab.index:e>N.tab.index).sort((e,t)=>N.direction===`back`?t.index-e.index:e.index-t.index).slice(0,24).map(({path:e,index:t})=>({label:no(e),icon:(0,I.jsx)(fr,{location:e}),tooltip:e,onSelect:()=>{let n=N.tab;Ln(null),Si(n.id,e,t)}}))],onClose:()=>Ln(null),x:N.x,y:N.y}),Nn&&(0,I.jsx)(Te,{items:[{label:e(`extract_here`),onSelect:()=>void Qa(`here`)},{label:e(`extract_to_a_folder_named_after_the_archive`),onSelect:()=>void Qa(`named`)},{label:e(`auto_extract_to_the_current_folder`),onSelect:()=>void Qa(`auto`)}],onClose:()=>Pn(null),x:Nn.x,y:Nn.y}),wr&&(0,I.jsx)(Sr,{action:wr.prompt.action,delaySeconds:wr.prompt.delaySeconds,hits:wr.prompt.hits,onCancel:()=>{wr.resolve(!1),Tr(null)},onConfirm:()=>{wr.resolve(!0),Tr(null)},permanent:wr.prompt.permanent},wr.id),(0,I.jsx)(Fr,{}),(0,I.jsx)(ui,{}),(0,I.jsx)(li,{}),Ne&&(0,I.jsx)(Vr,{request:Ne}),m&&(0,I.jsx)(gc,{code:m.code,deviceName:m.deviceName,onAccept:()=>{Zt(m.requestId,!0),ee(null)},onReject:()=>{Zt(m.requestId,!1),ee(null)}}),(0,I.jsx)(sc,{}),(0,I.jsx)(re,{})]})})}var el=y.div`
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
`,tl=y.div`
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
`,nl=y.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,rl=y.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${Oe}
`,il=y.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,$=Ec,al=y.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,ol=y.span`
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
`,sl=y.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,cl=y.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,ll=y.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?Ve:``}
`,ul=y.div`
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
`,dl=y.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,fl=y.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,pl=y.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,ml=y.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,hl=y.button`
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
`,gl=y.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,_l=y.span`
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
`,vl=y.footer`
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
`;document.documentElement.dataset.theme=ie()?`dark`:`light`;var yl=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,yl),window.addEventListener(`pagehide`,qe);var bl=document.getElementById(`root`),xl=new URLSearchParams(window.location.search),Sl=xl.get(`picker`),Cl=xl.get(`filter`)??``,wl=Sl===`folder`||Sl===`file`||Sl===`save`?(0,F.lazy)(()=>Nc(()=>import(`./PickerWindow-f56mmgqA.js`).then(e=>({default:e.PickerWindow})),__vite__mapDeps([14,1,2,7,4,5,3,6,9,12,0,8,10]))):null;bl&&(Qe(),(0,qn.createRoot)(bl).render((0,I.jsx)(F.StrictMode,{children:(0,I.jsx)(te,{children:wl===null?(0,I.jsx)($c,{}):(0,I.jsx)(F.Suspense,{fallback:null,children:(0,I.jsx)(wl,{defaultExtension:xl.get(`ext`)??``,extensions:Cl?Cl.split(`;`).filter(Boolean):[],types:xl.get(`types`)??``,typeIndex:Number(xl.get(`type`)??0)||0,initial:xl.get(`initial`)??``,initialName:xl.get(`name`)??``,mode:Sl===`folder`?`folder`:`file`,multiple:xl.get(`multiple`)===`1`,save:Sl===`save`})})})})));export{P as A,Xn as C,Un as D,zn as E,Ln as M,Vn as N,Gn as O,nr as S,Bn as T,Zn as _,hc as a,tr as b,Hi as c,li as d,Fr as f,mr as g,fr as h,fc as i,Rn as j,Wn as k,Ei as l,gr as m,Ec as n,ws as o,Sr as p,Dc as r,Ss as s,Nc as t,bi as u,Yn as v,Hn as w,$n as x,Qn as y};