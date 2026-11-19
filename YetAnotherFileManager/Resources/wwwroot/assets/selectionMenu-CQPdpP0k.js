import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{D as t,f as n,g as r,i}from"./format-CWgBbA72.js";import{_ as a,d as o,f as s,g as c,h as l,p as u,u as d}from"./dist-sR-t6Emc.js";import{d as ee,f as te}from"./Icons-NY0trHLk.js";var f=e(a(),1),p=null;function m(e){p=e}function h(e){return p?p(e):Promise.resolve(!1)}var ne={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},re={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function ie(e,t){return s.available?await s.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function ae(e){return s.available?(await s.request(`fs.open`,{path:e})).ok:!1}async function oe(e,t=!0,n=!1,r=0,i,a){return await s.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i,id:a??null})}async function se(e,t,n=0,r){let i=await s.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r});for(let a=0;a<2&&i.required&&i.token&&i.protected?.length;a++){if(!await h({hits:i.protected,delaySeconds:i.delaySeconds??5,action:`write`}))return{ok:!1,error:null,cancelled:!0};i=await s.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r,confirm:i.token})}return{ok:i.ok,error:i.error}}async function g(e,t=0,n){return await s.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function ce(e){s.available&&e.length!==0&&await s.request(`fs.archive.release`,{paths:e})}async function le(e){return s.available?await s.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function ue(e,t){return s.available?(await s.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function de(e,t,n,r){return s.available?(await s.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function fe(e,t=!1){return s.available?await s.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function pe(){return(await s.request(`fs.places`)).places}async function me(){return(await s.request(`fs.drives`)).drives}async function he(e=!1){return(await s.request(`fs.recycle`,{includeOrphans:e})).entries}async function ge(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await h({hits:r.protected,delaySeconds:r.delaySeconds??5,action:`delete`,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await s.request(e,{...t,confirm:r.token})}return r}async function _e(e=!1){let t=await s.request(`fs.recycle.empty`,{includeOrphans:e});return await ge(`fs.recycle.empty`,{includeOrphans:e},t)}async function ve(e){return!s.available||e.length===0?{ok:!1,done:0}:await s.request(`fs.recycle.restoreMany`,{ids:e})}async function ye(e){if(!s.available||e.length===0)return{ok:!1,done:0};let t=await s.request(`fs.recycle.deleteMany`,{ids:e}),n=await ge(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function be(e){s.available&&e&&await s.request(`fs.recycle.properties`,{id:e})}async function xe(){if(!s.available)return{entries:[],cancelled:!0,failed:!1};let e=await s.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function Se(){return s.available?(await s.request(`fs.recycle.admin.purge`)).ok:!1}async function Ce(e=0,t=150,n=!1){return s.available?await s.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function we(){return s.available?(await s.request(`fs.recent`)).entries:[]}async function Te(){return s.available?(await s.request(`fs.frequent`)).entries:[]}async function Ee(e){s.available&&await s.request(`fs.frequent.record`,{path:e})}async function De(){await s.request(`fs.recent.clear`)}async function Oe(){await s.request(`fs.frequent.clear`)}async function ke(){return await s.request(`fs.visibility`)}async function Ae(){return await s.request(`fs.hidden.toggle`)}async function je(e){return await s.request(`fs.hidden.set`,{show:e})}async function Me(){return s.available?await s.request(`fs.index.tasks`):{count:0,directories:[]}}var _=new Map;function v(e){return r(n(e)?i(e):e)}function y(e){return _.get(v(e))}function Ne(e,t){_.set(v(e),t)}function Pe(e){_.delete(v(e))}function Fe(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var b=new Map,x=new Map,S=new Set,Ie=4096,C=0;function w(e,t,n){for(e.set(t,n);e.size>Ie;){let t=e.keys().next().value;if(t===void 0)break;e.delete(t)}}function Le(){b.clear(),x.clear(),C+=1,S.forEach(e=>e())}function Re(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of b.keys())e.toLowerCase().includes(t)&&(b.delete(e),n=!0);n&&(C+=1,S.forEach(e=>e()))}function T(){let[e,t]=(0,f.useState)(C);return(0,f.useEffect)(()=>{let e=()=>t(C);return S.add(e),()=>{S.delete(e)}},[]),e}var ze=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function Be(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return ze.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function Ve(e,t,n=!1){let r=T(),i=e===null?``:Be(e,t,n),[a,o]=(0,f.useState)(()=>b.get(i)??null);return(0,f.useEffect)(()=>{if(e===null){o(null);return}if(!s.available)return;if(b.has(i)){o(b.get(i)??null);return}let r=!0;return s.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?w(b,i,e.dataUrl):b.delete(i),r&&o(e.dataUrl)},()=>{b.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function He(e){let[t,r]=(0,f.useState)(e);return(0,f.useEffect)(()=>{if(!e){r(null);return}if(!n(e)){r(e);return}let t=!0;return g(e,0,y(e)).then(e=>{t&&r(e.path??null)},()=>{t&&r(null)}),()=>{t=!1}},[e]),t}function Ue(e){let t=T(),[n,r]=(0,f.useState)(()=>e?x.get(e)??null:null);return(0,f.useEffect)(()=>{if(!e||!s.available){r(null);return}if(x.has(e)){r(x.get(e)??null);return}let t=!0;return s.request(`fs.iconFile`,{path:e}).then(n=>{w(x,e,n.dataUrl),t&&r(n.dataUrl)},()=>{w(x,e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var E=null,D=null;function O(){return E===null?s.available?(D??=s.request(`app.thumbnails`).then(e=>(E=e.base??``,E),()=>(E=``,``)),D):Promise.resolve(``):Promise.resolve(E)}function We(e,t=128,n=0){let[r,i]=(0,f.useState)(E);if((0,f.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return O().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=e.toLowerCase();if(a.endsWith(`.svg`)||a.endsWith(`.avif`)){let t=a.slice(a.lastIndexOf(`.`));return`${r}/media?path=${encodeURIComponent(e)}&v=${n}&ext=${encodeURIComponent(t)}`}return`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}-${Ge}`}var Ge=2;function Ke(e,t=0,n=``){let[r,i]=(0,f.useState)(E);if((0,f.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return O().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function qe(e,t=0){let[n,r]=(0,f.useState)(E);return(0,f.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return O().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var Je={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},Ye={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function k(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=Xe(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=Ze(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var A=`\0`,j=``;function Xe(e){return e.query!==A&&(A=e.query,j=e.query.toLowerCase()),j}var M=`\0`,N=null;function Ze(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===M)return N;M=t;try{N=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{N=null}return N}function Qe(e,t){return k(e,t)!==null}var P=new Map,F=new Map,I=0;function $e(){try{let e=new URLSearchParams(window.location.search).get(`state`);if(!e)return;let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=Uint8Array.from(atob(t),e=>e.charCodeAt(0)),r=JSON.parse(new TextDecoder().decode(n));for(let[e,t]of Object.entries(r))typeof t==`string`&&P.set(e,t)}catch{}}function L(e){return s.available?P.get(e)??null:localStorage.getItem(e)}function R(e,t){s.available?(P.set(e,t),F.set(e,t),window.clearTimeout(I),I=window.setTimeout(et,200)):localStorage.setItem(e,t)}function et(){if(I=0,F.size===0)return;let e=Object.fromEntries(F);F.clear(),s.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function tt(){if(F.size===0)return;let e=Object.fromEntries(F);F.clear(),s.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function nt(e,t){let n=L(e);if(n===null||n===``)return t;let r=Number(n);return Number.isFinite(r)?r:t}function rt(e,t){R(e,String(t))}function it(e){try{return JSON.parse(L(e)??`null`)}catch{return null}}function at(e,t){R(e,JSON.stringify(t))}var z=null,B=null;function ot(e){z=e}function st(e){return z?z(e):Promise.resolve()}function ct(e){B=e}function lt(e,t=!1){return B?B(e,t):Promise.resolve(null)}var V=t(),H=l`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,ut=u`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,dt=u`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,ft=u`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,pt=u`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,mt=u`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,ht=u`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,gt=u`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,_t=u`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,U=l`animation: ${ut} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,W=l`animation: ${dt} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,vt=l`animation: ${ft} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;l`animation: ${pt} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var yt=l`animation: ${mt} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,bt=l`animation: ${ht} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,G=l`animation: ${gt} 140ms ease-out;`,xt=l`animation: ${_t} 260ms cubic-bezier(0.22, 1, 0.36, 1);`,K=o();function St({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,f.useState)([]),s=(0,f.useRef)(void 0);if((0,f.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,f.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},p=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},m=e=>{i(),e.onSelect()},h=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,K.jsx)(J,{},`group-rule-${i}`)),n.push((0,K.jsx)(At,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,K.jsx)(J,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,K.jsxs)(Dt,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?p(n,e.children,t):m(e)},onPointerEnter:a?n=>p(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,K.jsx)(Ot,{children:e.loading?(0,K.jsx)(jt,{}):e.icon}),(0,K.jsx)(kt,{children:e.label}),a?(0,K.jsx)(te,{size:12}):e.checked&&(0,K.jsx)(ee,{size:12})]},`${e.label}-${i}`))}),n};return(0,V.createPortal)((0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(q,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Ct,{children:r.map((e,t)=>(0,K.jsxs)(wt,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>m(e),title:e.label,type:`button`,children:[(0,K.jsx)(Tt,{children:e.icon}),(0,K.jsx)(Et,{children:e.label})]},`${e.label}-${t}`))}),(0,K.jsx)(J,{})]}),h(n,0)]}),a.map((e,t)=>(0,K.jsx)(q,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:h(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var q=c.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${H}
    ${W}
    transform-origin: top left;
`,Ct=c.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,wt=c.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    min-width: 48px;
    padding: 5px 4px;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: ${({$danger:e})=>e?`#fca5a5`:`var(--text-secondary)`};
    cursor: pointer;
    transition: background 120ms ease, color 120ms ease;

    &:hover:not(:disabled) {
        background: var(--bg-card-hover);
        color: ${({$danger:e})=>e?`#fecaca`:`var(--text-primary)`};
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }
`,Tt=c.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,Et=c.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Dt=c.button`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 7px 10px 7px ${({$depth:e=0})=>10+e*14}px;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: ${({$danger:e})=>e?`#fca5a5`:`var(--text-secondary)`};
    font: inherit;
    font-size: 13px;
    text-align: left;
    cursor: pointer;
    transition: background 120ms ease, color 120ms ease;

    &:hover:not(:disabled) {
        background: var(--bg-card-hover);
        color: ${({$danger:e})=>e?`#fecaca`:`var(--text-primary)`};
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`,Ot=c.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,kt=c.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,At=c.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,J=c.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,jt=c.span`
    width: 10px;
    height: 10px;
    border: 1px solid var(--border-color-hover);
    border-top-color: var(--accent-primary);
    border-radius: 50%;
    animation: yafm-menu-spin 700ms linear infinite;

    @keyframes yafm-menu-spin {
        to {
            transform: rotate(360deg);
        }
    }
`;function Mt({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=d(),c=(0,f.useRef)(null);return(0,f.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,V.createPortal)((0,K.jsx)(Nt,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,K.jsxs)(Pt,{role:`alertdialog`,"aria-modal":`true`,children:[(0,K.jsx)(Ft,{children:t}),(0,K.jsx)(It,{children:n}),(0,K.jsxs)(Lt,{children:[(0,K.jsx)(Y,{onClick:o,type:`button`,children:s(`cancel`)}),(0,K.jsx)(Y,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var Nt=c.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${G}
`,Pt=c.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${U}
`,Ft=c.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,It=c.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Lt=c.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Y=c.button`
    min-width: 84px;
    padding: 7px 12px;
    border: 1px solid ${({$danger:e})=>e?`rgba(248, 113, 113, 0.5)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$danger:e})=>e?`rgba(248, 113, 113, 0.16)`:`var(--bg-input)`};
    color: ${({$danger:e})=>e?`#fca5a5`:`var(--text-secondary)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        border-color: ${({$danger:e})=>e?`rgba(248, 113, 113, 0.8)`:`var(--border-color-hover)`};
        color: ${({$danger:e})=>e?`#fecaca`:`var(--text-primary)`};
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,X=new Map,Z=new Set,Rt=0;function zt(){Rt+=1;for(let e of Z)e()}function Bt(e,t){t?X.set(e,t):X.delete(e),zt()}function Vt(e){return X.has(e)}function Ht(e,t,n){X.get(e)?.(t,n)}function Ut(e){return Z.add(e),()=>Z.delete(e)}function Q(){return Rt}function Wt(e){return(0,f.useSyncExternalStore)(Ut,Q,Q),{available:Vt(e),open:(t,n)=>Ht(e,t,n)}}function $(e){return[...X.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function Gt(e){return(0,f.useSyncExternalStore)(Ut,Q,Q),{available:$(e).length>0,open:(t,n)=>{let r=$(e).at(-1);r&&Ht(r,t,n)}}}export{Ce as $,He as A,ne as B,rt as C,k as D,Qe as E,We as F,_e as G,Oe as H,Pe as I,ke as J,se as K,y as L,Ue as M,Ke as N,Le as O,qe as P,Te as Q,Fe as R,at as S,Ye as T,De as U,re as V,ye as W,fe as X,oe as Y,me as Z,st as _,h as _t,St as a,ae as at,it as b,vt as c,Ee as ct,yt as d,ve as dt,Me as et,xt as f,ue as ft,ct as g,Ae as gt,ot as h,be as ht,Mt as i,he as it,Ve as j,Re as k,bt as l,ce as lt,lt as m,je as mt,Wt as n,pe as nt,G as o,le as ot,H as p,de as pt,g as q,Gt as r,we as rt,W as s,Se as st,Bt as t,xe as tt,U as u,ie as ut,tt as v,m as vt,Je as w,nt as x,$e as y,Ne as z};