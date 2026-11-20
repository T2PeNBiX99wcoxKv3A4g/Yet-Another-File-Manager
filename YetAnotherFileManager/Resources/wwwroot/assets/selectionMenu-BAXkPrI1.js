import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{D as t,_ as n,l as r,x as i}from"./theme-bw14b3xc.js";import{_ as a,d as o,f as s,g as c,h as l,p as u,u as d}from"./dist-sR-t6Emc.js";import{d as f,f as p}from"./Icons-NY0trHLk.js";var m=null;function h(e){m=e}function g(e){return m?m(e):Promise.resolve(!1)}var _=new Map;function v(e){return i(n(e)?r(e):e)}function y(e){return _.get(v(e))}function b(e,t){_.set(v(e),t)}function x(e){_.delete(v(e))}function S(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var C=e(a(),1),w=new Map,T=new Map,E=new Set,D=4096,O=0;function k(e,t,n){for(e.set(t,n);e.size>D;){let t=e.keys().next().value;if(t===void 0)break;e.delete(t)}}function ee(){w.clear(),T.clear(),O+=1,E.forEach(e=>e())}function te(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of w.keys())e.toLowerCase().includes(t)&&(w.delete(e),n=!0);n&&(O+=1,E.forEach(e=>e()))}function A(){let[e,t]=(0,C.useState)(O);return(0,C.useEffect)(()=>{let e=()=>t(O);return E.add(e),()=>{E.delete(e)}},[]),e}var ne=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function re(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return ne.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function ie(e,t,n=!1){let r=A(),i=e===null?``:re(e,t,n),[a,o]=(0,C.useState)(()=>w.get(i)??null);return(0,C.useEffect)(()=>{if(e===null){o(null);return}if(!s.available)return;if(w.has(i)){o(w.get(i)??null);return}let r=!0;return s.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?k(w,i,e.dataUrl):w.delete(i),r&&o(e.dataUrl)},()=>{w.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function ae(e){let[t,r]=(0,C.useState)(e);return(0,C.useEffect)(()=>{if(!e){r(null);return}if(!n(e)){r(e);return}let t=!0;return ke(e,0,y(e)).then(e=>{t&&r(e.path??null)},()=>{t&&r(null)}),()=>{t=!1}},[e]),t}function oe(e){let t=A(),[n,r]=(0,C.useState)(()=>e?T.get(e)??null:null);return(0,C.useEffect)(()=>{if(!e||!s.available){r(null);return}if(T.has(e)){r(T.get(e)??null);return}let t=!0;return s.request(`fs.iconFile`,{path:e}).then(n=>{k(T,e,n.dataUrl),t&&r(n.dataUrl)},()=>{k(T,e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var j=null,M=null;function N(){return j===null?s.available?(M??=s.request(`app.thumbnails`).then(e=>(j=e.base??``,j),()=>(j=``,``)),M):Promise.resolve(``):Promise.resolve(j)}function se(e,t=128,n=0){let[r,i]=(0,C.useState)(j);if((0,C.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return N().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=e.toLowerCase();if(a.endsWith(`.svg`)||a.endsWith(`.avif`)){let t=a.slice(a.lastIndexOf(`.`));return`${r}/media?path=${encodeURIComponent(e)}&v=${n}&ext=${encodeURIComponent(t)}`}return`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}-${ce}`}var ce=2;function le(e,t=0,n=``){let[r,i]=(0,C.useState)(j);if((0,C.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return N().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function ue(e,t=0){let[n,r]=(0,C.useState)(j);return(0,C.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return N().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var de=1414745177,fe=1,P=32,F=65535,pe=1,me=2,he=4,ge=8,_e=16;async function ve(e,t={}){let n=await N();if(!n)throw Error(`The data server is not running.`);let r=new URLSearchParams({path:e,from:String(t.from??0),count:String(t.count??400)});t.sort&&r.set(`sort`,t.sort),t.descending&&r.set(`dir`,`desc`);let i=await fetch(`${n}/list?${r}`,{cache:`no-cache`,signal:t.signal});if(!i.ok)throw Error(`The listing failed (${i.status}).`);let a=Number(i.headers.get(`x-yafm-total`)??0),o=Number.parseInt((i.headers.get(`etag`)??``).replaceAll(`"`,``),16)||0;return ye(await i.arrayBuffer(),a,o)}function ye(e,t,n){let r=new DataView(e);if(e.byteLength<P||r.getUint32(0,!0)!==de)throw Error(`Not a listing block.`);if(r.getUint16(4,!0)!==fe)throw Error(`This build cannot read that listing version.`);let i=r.getUint32(8,!0),a=r.getUint32(12,!0),o=r.getUint32(16,!0),s=r.getUint32(20,!0),c=r.getUint32(24,!0),l=!!(r.getUint16(6,!0)&1),u=P,d=(t,n)=>{let r=new t(e,u,i);return u+=n*i,r},f=d(Float64Array,8),p=d(Float64Array,8),m=d(Float64Array,8),h=d(Uint32Array,4),g=d(Uint16Array,2),_=d(Uint16Array,2),v=d(Uint16Array,2),y=d(Uint8Array,1),b=d(Uint8Array,1),x=[];for(let e=0;e<s;e++)x.push({offset:r.getUint32(u,!0),length:r.getUint16(u+4,!0)}),u+=6;let S=new Map;for(let e=0;e<c;e++)S.set(r.getUint32(u,!0),{offset:r.getUint32(u+4,!0),length:r.getUint16(u+8,!0)}),u+=10;let C=new Uint8Array(e,u,a),w=new TextDecoder,T=(e,t)=>w.decode(C.subarray(e,e+t)),E=T(0,o),D=E.includes(`\\`)?`\\`:`/`,O=x.map(e=>T(e.offset,e.length)),k=Array(i);for(let e=0;e<i;e++){let t=y[e],n=T(h[e],g[e]),r=v[e]===F?void 0:S.get(e),i=l?n:E.endsWith(D)?E+n:E+D+n,a=l?n.slice(Math.max(n.lastIndexOf(`/`),n.lastIndexOf(`\\`))+1):n;k[e]={name:a,fullPath:i,isDirectory:(t&pe)!==0,size:f[e],modified:p[e],isHidden:(t&me)!==0,isSystem:(t&he)!==0,iconSource:_[e]===F?null:O[_[e]]??null,created:m[e],linkTarget:r?T(r.offset,r.length):null,linkValid:v[e]===F?null:(t&_e)!==0,linkCount:b[e],isEncrypted:(t&ge)!==0||null}}return{path:E,signature:n,total:t,entries:k}}async function be(e,t,n=!1,r){let i=await N();if(!i)throw Error(`The data server is not running.`);let a=new URLSearchParams({offset:String(e),count:String(t)});n&&a.set(`refresh`,`1`);let o=await fetch(`${i}/gallery?${a}`,{cache:`no-cache`,signal:r});if(!o.ok)throw Error(`The gallery failed (${o.status}).`);let s=Number(o.headers.get(`x-yafm-total`)??0);return{entries:ye(await o.arrayBuffer(),s,0).entries.map(e=>({path:e.fullPath,name:e.name,modified:e.modified,size:e.size})),total:s}}var xe={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},Se={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function Ce(e,t){return s.available?await s.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function we(e){return s.available?(await s.request(`fs.open`,{path:e})).ok:!1}async function Te(e,t=!0,n=!1,r=0,i,a){return await s.request(`fs.list.meta`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i,id:a??null})}async function Ee(e,t=!0,r=!1,i=0,a,o){if(e&&n(e))return await s.request(`fs.list`,{path:e,sizes:t,includeLinks:r,codePage:i,password:a,id:o??null});let c=await Te(e,t,r,i,a,o),l=await ve(c.path,{count:400,sort:c.view?.sort??`name`,descending:c.view?.sortDescending??!1});return{...c,entries:l.entries}}async function De(e,t,n,r,i){let a=await ve(e,{from:t,count:400,sort:n,descending:r,signal:i});return{entries:a.entries,total:a.total}}async function Oe(e,t,n=0,r){let i=await s.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r});for(let a=0;a<2&&i.required&&i.token&&i.protected?.length;a++){if(!await g({hits:i.protected,delaySeconds:i.delaySeconds??5,action:`write`}))return{ok:!1,error:null,cancelled:!0};i=await s.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r,confirm:i.token})}return{ok:i.ok,error:i.error}}async function ke(e,t=0,n){return await s.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function Ae(e){s.available&&e.length!==0&&await s.request(`fs.archive.release`,{paths:e})}async function je(e){return s.available?await s.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function Me(e,t){return s.available?(await s.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function Ne(e,t,n,r){return s.available?(await s.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function Pe(e,t=!1){return s.available?await s.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function Fe(){return(await s.request(`fs.places`)).places}async function Ie(){return(await s.request(`fs.drives`)).drives}async function Le(e=!1){return(await s.request(`fs.recycle`,{includeOrphans:e})).entries}async function Re(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await g({hits:r.protected,delaySeconds:r.delaySeconds??5,action:`delete`,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await s.request(e,{...t,confirm:r.token})}return r}async function ze(e=!1){let t=await s.request(`fs.recycle.empty`,{includeOrphans:e});return await Re(`fs.recycle.empty`,{includeOrphans:e},t)}async function Be(e){return!s.available||e.length===0?{ok:!1,done:0}:await s.request(`fs.recycle.restoreMany`,{ids:e})}async function Ve(e){if(!s.available||e.length===0)return{ok:!1,done:0};let t=await s.request(`fs.recycle.deleteMany`,{ids:e}),n=await Re(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function He(e){s.available&&e&&await s.request(`fs.recycle.properties`,{id:e})}async function Ue(){if(!s.available)return{entries:[],cancelled:!0,failed:!1};let e=await s.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function We(){return s.available?(await s.request(`fs.recycle.admin.purge`)).ok:!1}async function Ge(){return s.available?(await s.request(`fs.recent`)).entries:[]}async function Ke(){return s.available?(await s.request(`fs.frequent`)).entries:[]}async function qe(e){s.available&&await s.request(`fs.frequent.record`,{path:e})}async function Je(){await s.request(`fs.recent.clear`)}async function Ye(){await s.request(`fs.frequent.clear`)}async function Xe(){return await s.request(`fs.visibility`)}async function Ze(){return await s.request(`fs.hidden.toggle`)}async function Qe(e){return await s.request(`fs.hidden.set`,{show:e})}async function $e(){return s.available?await s.request(`fs.index.tasks`):{count:0,directories:[]}}var et={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},tt={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function nt(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=at(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=ot(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var rt=`\0`,it=``;function at(e){return e.query!==rt&&(rt=e.query,it=e.query.toLowerCase()),it}var I=`\0`,L=null;function ot(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===I)return L;I=t;try{L=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{L=null}return L}function st(e,t){return nt(e,t)!==null}var R=new Map,z=new Map,B=0;function ct(){try{let e=new URLSearchParams(window.location.search).get(`state`);if(!e)return;let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=Uint8Array.from(atob(t),e=>e.charCodeAt(0)),r=JSON.parse(new TextDecoder().decode(n));for(let[e,t]of Object.entries(r))typeof t==`string`&&R.set(e,t)}catch{}}function V(e){return s.available?R.get(e)??null:localStorage.getItem(e)}function H(e,t){s.available?(R.set(e,t),z.set(e,t),window.clearTimeout(B),B=window.setTimeout(lt,200)):localStorage.setItem(e,t)}function lt(){if(B=0,z.size===0)return;let e=Object.fromEntries(z);z.clear(),s.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function ut(){if(z.size===0)return;let e=Object.fromEntries(z);z.clear(),s.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function dt(e,t){let n=V(e);if(n===null||n===``)return t;let r=Number(n);return Number.isFinite(r)?r:t}function ft(e,t){H(e,String(t))}function pt(e){try{return JSON.parse(V(e)??`null`)}catch{return null}}function mt(e,t){H(e,JSON.stringify(t))}var U=null,W=null;function ht(e){U=e}function gt(e){return U?U(e):Promise.resolve()}function _t(e){W=e}function vt(e,t=!1){return W?W(e,t):Promise.resolve(null)}var G=t(),K=l`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,yt=u`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,bt=u`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,xt=u`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,St=u`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Ct=u`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,wt=u`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Tt=u`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,Et=u`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,q=l`animation: ${yt} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Dt=l`animation: ${bt} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,Ot=l`animation: ${xt} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;l`animation: ${St} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var kt=l`animation: ${Ct} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,At=l`animation: ${wt} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,jt=l`animation: ${Tt} 140ms ease-out;`,Mt=l`animation: ${Et} 260ms cubic-bezier(0.22, 1, 0.36, 1);`,J=o();function Nt({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,C.useState)([]),s=(0,C.useRef)(void 0);if((0,C.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,C.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},m=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},h=e=>{i(),e.onSelect()},g=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,J.jsx)(Y,{},`group-rule-${i}`)),n.push((0,J.jsx)(Ht,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,J.jsx)(Y,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,J.jsxs)(zt,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?m(n,e.children,t):h(e)},onPointerEnter:a?n=>m(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,J.jsx)(Bt,{children:e.loading?(0,J.jsx)(Ut,{}):e.icon}),(0,J.jsx)(Vt,{children:e.label}),a?(0,J.jsx)(p,{size:12}):e.checked&&(0,J.jsx)(f,{size:12})]},`${e.label}-${i}`))}),n};return(0,G.createPortal)((0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Pt,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Ft,{children:r.map((e,t)=>(0,J.jsxs)(It,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>h(e),title:e.label,type:`button`,children:[(0,J.jsx)(Lt,{children:e.icon}),(0,J.jsx)(Rt,{children:e.label})]},`${e.label}-${t}`))}),(0,J.jsx)(Y,{})]}),g(n,0)]}),a.map((e,t)=>(0,J.jsx)(Pt,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:g(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var Pt=c.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${K}
    ${Dt}
    transform-origin: top left;
`,Ft=c.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,It=c.button`
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
`,Lt=c.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,Rt=c.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,zt=c.button`
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
`,Bt=c.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Vt=c.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ht=c.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Y=c.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,Ut=c.span`
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
`;function Wt({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=d(),c=(0,C.useRef)(null);return(0,C.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,G.createPortal)((0,J.jsx)(Gt,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,J.jsxs)(Kt,{role:`alertdialog`,"aria-modal":`true`,children:[(0,J.jsx)(qt,{children:t}),(0,J.jsx)(Jt,{children:n}),(0,J.jsxs)(Yt,{children:[(0,J.jsx)(Xt,{onClick:o,type:`button`,children:s(`cancel`)}),(0,J.jsx)(Xt,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var Gt=c.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${jt}
`,Kt=c.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${q}
`,qt=c.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Jt=c.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Yt=c.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Xt=c.button`
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
`,X=new Map,Z=new Set,Q=0;function Zt(){Q+=1;for(let e of Z)e()}function Qt(e,t){t?X.set(e,t):X.delete(e),Zt()}function $t(e){return X.has(e)}function en(e,t,n){X.get(e)?.(t,n)}function tn(e){return Z.add(e),()=>Z.delete(e)}function $(){return Q}function nn(e){return(0,C.useSyncExternalStore)(tn,$,$),{available:$t(e),open:(t,n)=>en(e,t,n)}}function rn(e){return[...X.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function an(e){return(0,C.useSyncExternalStore)(tn,$,$),{available:rn(e).length>0,open:(t,n)=>{let r=rn(e).at(-1);r&&en(r,t,n)}}}export{Be as $,Ye as A,Ke as B,ft as C,nt as D,st as E,ke as F,Ge as G,Ue as H,Xe as I,je as J,Le as K,Ee as L,Ve as M,ze as N,xe as O,Oe as P,Ce as Q,Pe as R,mt as S,tt as T,De as U,$e as V,Fe as W,qe as X,We as Y,Ae as Z,gt as _,b as _t,Nt as a,be as at,pt as b,Ot as c,ae as ct,kt as d,le as dt,Me as et,Mt as f,ue as ft,_t as g,S as gt,ht as h,y as ht,Wt as i,Ze as it,Je as j,Se as k,At as l,ie as lt,vt as m,x as mt,nn as n,Qe as nt,jt as o,ee as ot,K as p,se as pt,we as q,an as r,He as rt,Dt as s,te as st,Qt as t,Ne as tt,q as u,oe as ut,ut as v,g as vt,et as w,dt as x,ct as y,h as yt,Ie as z};