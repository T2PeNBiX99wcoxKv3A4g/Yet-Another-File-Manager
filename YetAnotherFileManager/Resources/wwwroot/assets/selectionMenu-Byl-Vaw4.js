import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{C as t,k as n,u as r,v as i,y as a}from"./theme-Ocob2ChL.js";import{_ as o,d as s,f as c,g as l,h as u,p as d,u as f}from"./dist-sR-t6Emc.js";import{d as ee,f as te}from"./Icons-BCGG7XUW.js";var p=null;function m(e){p=e}function h(e){return p?p(e):Promise.resolve(!1)}var g=new Map;function _(e){return t(a(e)?r(e):e)}function v(e){return g.get(_(e))}function y(e,t){g.set(_(e),t)}function b(e){g.delete(_(e))}function x(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var S=e(o(),1),C=new Map,w=new Map,T=new Set,E=4096,D=0;function O(e,t,n){for(e.set(t,n);e.size>E;){let t=e.keys().next().value;if(t===void 0)break;e.delete(t)}}function ne(){C.clear(),w.clear(),D+=1,T.forEach(e=>e())}function re(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of C.keys())e.toLowerCase().includes(t)&&(C.delete(e),n=!0);n&&(D+=1,T.forEach(e=>e()))}function k(){let[e,t]=(0,S.useState)(D);return(0,S.useEffect)(()=>{let e=()=>t(D);return T.add(e),()=>{T.delete(e)}},[]),e}var ie=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function ae(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return ie.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function oe(e,t,n=!1){let r=k(),i=e===null?``:ae(e,t,n),[a,o]=(0,S.useState)(()=>C.get(i)??null);return(0,S.useEffect)(()=>{if(e===null){o(null);return}if(!c.available)return;if(C.has(i)){o(C.get(i)??null);return}let r=!0;return c.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?O(C,i,e.dataUrl):C.delete(i),r&&o(e.dataUrl)},()=>{C.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function se(e){let[t,n]=(0,S.useState)(e);return(0,S.useEffect)(()=>{if(!e){n(null);return}if(!a(e)){n(e);return}let t=!0;return I(e,0,v(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function ce(e){let t=k(),[n,r]=(0,S.useState)(()=>e?w.get(e)??null:null);return(0,S.useEffect)(()=>{if(!e||!c.available){r(null);return}if(w.has(e)){r(w.get(e)??null);return}let t=!0;return c.request(`fs.iconFile`,{path:e}).then(n=>{O(w,e,n.dataUrl),t&&r(n.dataUrl)},()=>{O(w,e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var A=null,le=null;function j(){return A===null?c.available?(le??=c.request(`app.thumbnails`).then(e=>(A=e.base??``,A),()=>(A=``,``)),le):Promise.resolve(``):Promise.resolve(A)}function ue(e,t=128,n=0){let[r,i]=(0,S.useState)(A);if((0,S.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return j().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=e.toLowerCase();if(a.endsWith(`.svg`)||a.endsWith(`.avif`)){let t=a.slice(a.lastIndexOf(`.`));return`${r}/media?path=${encodeURIComponent(e)}&v=${n}&ext=${encodeURIComponent(t)}`}return`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}-${de}`}var de=2;function fe(e,t=0,n=``){let[r,i]=(0,S.useState)(A);if((0,S.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return j().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function pe(e,t=0){let[n,r]=(0,S.useState)(A);return(0,S.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return j().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var me=1414745177,he=1,M=32,N=65535,ge=1,_e=2,ve=4,ye=8,be=16;async function P(e,t={}){let n=await j();if(!n)throw Error(`The data server is not running.`);let r=new URLSearchParams({path:e,from:String(t.from??0),count:String(t.count??400)});t.sort&&r.set(`sort`,t.sort),t.descending&&r.set(`dir`,`desc`);let i=await fetch(`${n}/list?${r}`,{cache:`no-cache`,signal:t.signal});if(!i.ok)throw Error(`The listing failed (${i.status}).`);let a=Number(i.headers.get(`x-yafm-total`)??0),o=Number.parseInt((i.headers.get(`etag`)??``).replaceAll(`"`,``),16)||0;return F(await i.arrayBuffer(),a,o)}function F(e,t,n){let r=new DataView(e);if(e.byteLength<M||r.getUint32(0,!0)!==me)throw Error(`Not a listing block.`);if(r.getUint16(4,!0)!==he)throw Error(`This build cannot read that listing version.`);let i=r.getUint32(8,!0),a=r.getUint32(12,!0),o=r.getUint32(16,!0),s=r.getUint32(20,!0),c=r.getUint32(24,!0),l=!!(r.getUint16(6,!0)&1),u=M,d=(t,n)=>{let r=new t(e,u,i);return u+=n*i,r},f=d(Float64Array,8),ee=d(Float64Array,8),te=d(Float64Array,8),p=d(Uint32Array,4),m=d(Uint16Array,2),h=d(Uint16Array,2),g=d(Uint16Array,2),_=d(Uint8Array,1),v=d(Uint8Array,1),y=[];for(let e=0;e<s;e++)y.push({offset:r.getUint32(u,!0),length:r.getUint16(u+4,!0)}),u+=6;let b=new Map;for(let e=0;e<c;e++)b.set(r.getUint32(u,!0),{offset:r.getUint32(u+4,!0),length:r.getUint16(u+8,!0)}),u+=10;let x=new Uint8Array(e,u,a),S=new TextDecoder,C=(e,t)=>S.decode(x.subarray(e,e+t)),w=C(0,o),T=w.includes(`\\`)?`\\`:`/`,E=y.map(e=>C(e.offset,e.length)),D=Array(i);for(let e=0;e<i;e++){let t=_[e],n=C(p[e],m[e]),r=g[e]===N?void 0:b.get(e),i=l?n:w.endsWith(T)?w+n:w+T+n,a=l?n.slice(Math.max(n.lastIndexOf(`/`),n.lastIndexOf(`\\`))+1):n;D[e]={name:a,fullPath:i,isDirectory:(t&ge)!==0,size:f[e],modified:ee[e],isHidden:(t&_e)!==0,isSystem:(t&ve)!==0,iconSource:h[e]===N?null:E[h[e]]??null,created:te[e],linkTarget:r?C(r.offset,r.length):null,linkValid:g[e]===N?null:(t&be)!==0,linkCount:v[e],isEncrypted:(t&ye)!==0||null}}return{path:w,signature:n,total:t,entries:D}}async function xe(e,t,n=!1,r){let i=await j();if(!i)throw Error(`The data server is not running.`);let a=new URLSearchParams({offset:String(e),count:String(t)});n&&a.set(`refresh`,`1`);let o=await fetch(`${i}/gallery?${a}`,{cache:`no-cache`,signal:r});if(!o.ok)throw Error(`The gallery failed (${o.status}).`);let s=Number(o.headers.get(`x-yafm-total`)??0);return{entries:F(await o.arrayBuffer(),s,0).entries.map(e=>({path:e.fullPath,name:e.name,modified:e.modified,size:e.size})),total:s}}var Se={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},Ce={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function we(e,t){return c.available?await c.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function Te(e){return c.available?(await c.request(`fs.open`,{path:e})).ok:!1}async function Ee(e,t=!0,n=!1,r=0,i,a){return await c.request(`fs.list.meta`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i,id:a??null})}async function De(e,t=!0,n=!1,r=0,i,o){if(e&&a(e))return await c.request(`fs.list`,{path:e,sizes:t,includeLinks:n,codePage:r,password:i,id:o??null});let s=await Ee(e,t,n,r,i,o),l=await P(s.path,{count:400,sort:s.view?.sort??`name`,descending:s.view?.sortDescending??!1});return{...s,entries:l.entries}}async function Oe(e,t,n,r,i){let a=await P(e,{from:t,count:400,sort:n,descending:r,signal:i});return{entries:a.entries,total:a.total}}async function ke(e,t,n=0,r){let i=await c.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r});for(let a=0;a<2&&i.required&&i.token&&i.protected?.length;a++){if(!await h({hits:i.protected,delaySeconds:i.delaySeconds??5,action:`write`}))return{ok:!1,error:null,cancelled:!0};i=await c.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r,confirm:i.token})}return{ok:i.ok,error:i.error}}async function I(e,t=0,n){return await c.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function Ae(e){c.available&&e.length!==0&&await c.request(`fs.archive.release`,{paths:e})}async function je(e){return c.available?await c.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function Me(e,t){return c.available?(await c.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function Ne(e,t,n,r){return c.available?(await c.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function Pe(e,t=!1){return c.available?await c.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function Fe(){return(await c.request(`fs.places`)).places}async function Ie(){return(await c.request(`fs.drives`)).drives}async function Le(e=!1){return(await c.request(`fs.recycle`,{includeOrphans:e})).entries}async function L(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await h({hits:r.protected,delaySeconds:r.delaySeconds??5,action:`delete`,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await c.request(e,{...t,confirm:r.token})}return r}async function Re(e=!1){let t=await c.request(`fs.recycle.empty`,{includeOrphans:e});return await L(`fs.recycle.empty`,{includeOrphans:e},t)}async function ze(e){return!c.available||e.length===0?{ok:!1,done:0}:await c.request(`fs.recycle.restoreMany`,{ids:e})}async function Be(e){if(!c.available||e.length===0)return{ok:!1,done:0};let t=await c.request(`fs.recycle.deleteMany`,{ids:e}),n=await L(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Ve(e){c.available&&e&&await c.request(`fs.recycle.properties`,{id:e})}async function He(){if(!c.available)return{entries:[],cancelled:!0,failed:!1};let e=await c.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function Ue(){return c.available?(await c.request(`fs.recycle.admin.purge`)).ok:!1}async function We(){return c.available?(await c.request(`fs.recent`)).entries:[]}async function Ge(){return c.available?(await c.request(`fs.frequent`)).entries:[]}async function Ke(e){c.available&&await c.request(`fs.frequent.record`,{path:e})}async function qe(){await c.request(`fs.recent.clear`)}async function Je(){await c.request(`fs.frequent.clear`)}async function Ye(){return await c.request(`fs.visibility`)}async function Xe(){return await c.request(`fs.hidden.toggle`)}async function Ze(e){return await c.request(`fs.hidden.set`,{show:e})}async function Qe(){return c.available?await c.request(`fs.index.tasks`):{count:0,directories:[]}}var $e={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},et={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function tt(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=it(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=ot(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var nt=`\0`,rt=``;function it(e){return e.query!==nt&&(nt=e.query,rt=e.query.toLowerCase()),rt}var at=`\0`,R=null;function ot(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===at)return R;at=t;try{R=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{R=null}return R}function st(e,t){return tt(e,t)!==null}var z=Date.now(),B=new Set,V=null,ct=()=>{z=Date.now();for(let e of B)e()};function lt(e){return B.add(e),V===null&&(V=window.setInterval(ct,5e3)),()=>{B.delete(e),B.size===0&&V!==null&&(window.clearInterval(V),V=null)}}function ut(){return z}var H=s();function dt({value:e}){let t=(0,S.useSyncExternalStore)(lt,ut);return(0,H.jsx)(H.Fragment,{children:i(e,t)})}var U=new Map,W=new Map,G=0;function ft(){try{let e=new URLSearchParams(window.location.search).get(`state`);if(!e)return;let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=Uint8Array.from(atob(t),e=>e.charCodeAt(0)),r=JSON.parse(new TextDecoder().decode(n));for(let[e,t]of Object.entries(r))typeof t==`string`&&U.set(e,t)}catch{}}function K(e){return c.available?U.get(e)??null:localStorage.getItem(e)}function q(e,t){c.available?(U.set(e,t),W.set(e,t),window.clearTimeout(G),G=window.setTimeout(pt,200)):localStorage.setItem(e,t)}function pt(){if(G=0,W.size===0)return;let e=Object.fromEntries(W);W.clear(),c.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function mt(){if(W.size===0)return;let e=Object.fromEntries(W);W.clear(),c.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function ht(e,t){let n=K(e);if(n===null||n===``)return t;let r=Number(n);return Number.isFinite(r)?r:t}function gt(e,t){q(e,String(t))}function _t(e){try{return JSON.parse(K(e)??`null`)}catch{return null}}function vt(e,t){q(e,JSON.stringify(t))}var J=null,Y=null;function yt(e){J=e}function bt(e){return J?J(e):Promise.resolve()}function xt(e){Y=e}function St(e,t=!1){return Y?Y(e,t):Promise.resolve(null)}var Ct=n(),wt=u`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,Tt=d`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Et=d`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Dt=d`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Ot=d`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,kt=d`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,At=d`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,jt=d`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,Mt=d`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,Nt=u`animation: ${Tt} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Pt=u`animation: ${Et} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,Ft=u`animation: ${Dt} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;u`animation: ${Ot} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var It=u`animation: ${kt} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Lt=u`animation: ${At} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Rt=u`animation: ${jt} 140ms ease-out;`,zt=u`animation: ${Mt} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function Bt({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,S.useState)([]),s=(0,S.useRef)(void 0);if((0,S.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,S.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,H.jsx)(X,{},`group-rule-${i}`)),n.push((0,H.jsx)(Yt,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,H.jsx)(X,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,H.jsxs)(Kt,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,H.jsx)(qt,{children:e.loading?(0,H.jsx)(Xt,{}):e.icon}),(0,H.jsx)(Jt,{children:e.label}),a?(0,H.jsx)(te,{size:12}):e.checked&&(0,H.jsx)(ee,{size:12})]},`${e.label}-${i}`))}),n};return(0,Ct.createPortal)((0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(Vt,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(Ht,{children:r.map((e,t)=>(0,H.jsxs)(Ut,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,H.jsx)(Wt,{children:e.icon}),(0,H.jsx)(Gt,{children:e.label})]},`${e.label}-${t}`))}),(0,H.jsx)(X,{})]}),m(n,0)]}),a.map((e,t)=>(0,H.jsx)(Vt,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var Vt=l.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${wt}
    ${Pt}
    transform-origin: top left;
`,Ht=l.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,Ut=l.button`
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
`,Wt=l.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,Gt=l.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Kt=l.button`
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
`,qt=l.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Jt=l.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Yt=l.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,X=l.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,Xt=l.span`
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
`;function Zt({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=f(),c=(0,S.useRef)(null);return(0,S.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,Ct.createPortal)((0,H.jsx)(Qt,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,H.jsxs)($t,{role:`alertdialog`,"aria-modal":`true`,children:[(0,H.jsx)(en,{children:t}),(0,H.jsx)(tn,{children:n}),(0,H.jsxs)(nn,{children:[(0,H.jsx)(rn,{onClick:o,type:`button`,children:s(`cancel`)}),(0,H.jsx)(rn,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var Qt=l.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Rt}
`,$t=l.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Nt}
`,en=l.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,tn=l.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,nn=l.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,rn=l.button`
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
`,Z=new Map,Q=new Set,an=0;function on(){an+=1;for(let e of Q)e()}function sn(e,t){t?Z.set(e,t):Z.delete(e),on()}function cn(e){return Z.has(e)}function ln(e,t,n){Z.get(e)?.(t,n)}function un(e){return Q.add(e),()=>Q.delete(e)}function $(){return an}function dn(e){return(0,S.useSyncExternalStore)(un,$,$),{available:cn(e),open:(t,n)=>ln(e,t,n)}}function fn(e){return[...Z.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function pn(e){return(0,S.useSyncExternalStore)(un,$,$),{available:fn(e).length>0,open:(t,n)=>{let r=fn(e).at(-1);r&&ln(r,t,n)}}}export{we as $,Ce as A,Ie as B,gt as C,st as D,et as E,ke as F,Fe as G,Qe as H,I,Te as J,We as K,Ye as L,qe as M,Be as N,tt as O,Re as P,Ae as Q,De as R,vt as S,$e as T,He as U,Ge as V,Oe as W,Ue as X,je as Y,Ke as Z,bt as _,x as _t,Bt as a,Xe as at,_t as b,m as bt,Ft as c,re as ct,It as d,ce as dt,ze as et,zt as f,fe as ft,xt as g,v as gt,yt as h,b as ht,Zt as i,Ve as it,Je as j,Se as k,Lt as l,se as lt,St as m,ue as mt,dn as n,Ne as nt,Rt as o,xe as ot,wt as p,pe as pt,Le as q,pn as r,Ze as rt,Pt as s,ne as st,sn as t,Me as tt,Nt as u,oe as ut,mt as v,y as vt,dt as w,ht as x,ft as y,h as yt,Pe as z};