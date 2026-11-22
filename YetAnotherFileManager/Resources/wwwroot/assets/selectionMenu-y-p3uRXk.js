import{C as e,D as t,M as n,O as r,S as i,T as a,k as o,w as s,x as c}from"./dist-B10j17-y.js";import{C as l,k as u,u as d,v as f,y as p}from"./theme-IW5S96qd.js";import{d as m,f as h}from"./Icons-C2oT0N0q.js";var g=null;function _(e){g=e}function v(e){return g?g(e):Promise.resolve(!1)}var y=new Map;function b(e){return l(p(e)?d(e):e)}function x(e){return y.get(b(e))}function S(e,t){y.set(b(e),t)}function C(e){y.delete(b(e))}function w(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var T=n(o(),1),E=new Map,D=new Map,O=new Set,k=4096,A=0;function j(e,t,n){for(e.set(t,n);e.size>k;){let t=e.keys().next().value;if(t===void 0)break;e.delete(t)}}function ee(){E.clear(),D.clear(),A+=1,O.forEach(e=>e())}function te(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of E.keys())e.toLowerCase().includes(t)&&(E.delete(e),n=!0);n&&(A+=1,O.forEach(e=>e()))}function M(){let[e,t]=(0,T.useState)(A);return(0,T.useEffect)(()=>{let e=()=>t(A);return O.add(e),()=>{O.delete(e)}},[]),e}var ne=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function re(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return ne.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function ie(e,t,n=!1){let r=M(),i=e===null?``:re(e,t,n),[a,o]=(0,T.useState)(()=>E.get(i)??null);return(0,T.useEffect)(()=>{if(e===null){o(null);return}if(!s.available)return;if(E.has(i)){o(E.get(i)??null);return}let r=!0;return s.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?j(E,i,e.dataUrl):E.delete(i),r&&o(e.dataUrl)},()=>{E.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function ae(e){let[t,n]=(0,T.useState)(e);return(0,T.useEffect)(()=>{if(!e){n(null);return}if(!p(e)){n(e);return}let t=!0;return Ae(e,0,x(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function oe(e){let t=M(),[n,r]=(0,T.useState)(()=>e?D.get(e)??null:null);return(0,T.useEffect)(()=>{if(!e||!s.available){r(null);return}if(D.has(e)){r(D.get(e)??null);return}let t=!0;return s.request(`fs.iconFile`,{path:e}).then(n=>{j(D,e,n.dataUrl),t&&r(n.dataUrl)},()=>{j(D,e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var N=null,P=null;function F(){return N===null?s.available?(P??=s.request(`app.thumbnails`).then(e=>(N=e.base??``,N),()=>(N=``,``)),P):Promise.resolve(``):Promise.resolve(N)}function se(e,t=128,n=0){let[r,i]=(0,T.useState)(N);if((0,T.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return F().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=e.toLowerCase();if(a.endsWith(`.svg`)||a.endsWith(`.avif`)){let t=a.slice(a.lastIndexOf(`.`));return`${r}/media?path=${encodeURIComponent(e)}&v=${n}&ext=${encodeURIComponent(t)}`}return`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}-${ce}`}var ce=2;function le(e,t=0,n=``){let[r,i]=(0,T.useState)(N);if((0,T.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return F().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function ue(e,t=0){let[n,r]=(0,T.useState)(N);return(0,T.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return F().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var de=1414745168,fe=1,I=32,L=65535,pe=1,me=2,he=4,ge=8,_e=16;async function ve(e,t={}){let n=await F();if(!n)throw Error(`The data server is not running.`);let r=new URLSearchParams({path:e,from:String(t.from??0),count:String(t.count??400)});t.sort&&r.set(`sort`,t.sort),t.descending&&r.set(`dir`,`desc`);let i=await fetch(`${n}/list?${r}`,{cache:`no-cache`,signal:t.signal});if(!i.ok)throw Error(`The listing failed (${i.status}).`);let a=Number(i.headers.get(`x-listing-total`)??0),o=Number.parseInt((i.headers.get(`etag`)??``).replaceAll(`"`,``),16)||0;return ye(await i.arrayBuffer(),a,o)}function ye(e,t,n){let r=new DataView(e);if(e.byteLength<I||r.getUint32(0,!0)!==de)throw Error(`Not a listing block.`);if(r.getUint16(4,!0)!==fe)throw Error(`This build cannot read that listing version.`);let i=r.getUint32(8,!0),a=r.getUint32(12,!0),o=r.getUint32(16,!0),s=r.getUint32(20,!0),c=r.getUint32(24,!0),l=!!(r.getUint16(6,!0)&1),u=I,d=(t,n)=>{let r=new t(e,u,i);return u+=n*i,r},f=d(Float64Array,8),p=d(Float64Array,8),m=d(Float64Array,8),h=d(Uint32Array,4),g=d(Uint16Array,2),_=d(Uint16Array,2),v=d(Uint16Array,2),y=d(Uint8Array,1),b=d(Uint8Array,1),x=[];for(let e=0;e<s;e++)x.push({offset:r.getUint32(u,!0),length:r.getUint16(u+4,!0)}),u+=6;let S=new Map;for(let e=0;e<c;e++)S.set(r.getUint32(u,!0),{offset:r.getUint32(u+4,!0),length:r.getUint16(u+8,!0)}),u+=10;let C=new Uint8Array(e,u,a),w=new TextDecoder,T=(e,t)=>w.decode(C.subarray(e,e+t)),E=T(0,o),D=E.includes(`\\`)?`\\`:`/`,O=x.map(e=>T(e.offset,e.length)),k=Array(i);for(let e=0;e<i;e++){let t=y[e],n=T(h[e],g[e]),r=v[e]===L?void 0:S.get(e),i=l?n:E.endsWith(D)?E+n:E+D+n,a=l?n.slice(Math.max(n.lastIndexOf(`/`),n.lastIndexOf(`\\`))+1):n;k[e]={name:a,fullPath:i,isDirectory:(t&pe)!==0,size:f[e],modified:p[e],isHidden:(t&me)!==0,isSystem:(t&he)!==0,iconSource:_[e]===L?null:O[_[e]]??null,created:m[e],linkTarget:r?T(r.offset,r.length):null,linkValid:v[e]===L?null:(t&_e)!==0,linkCount:b[e],isEncrypted:(t&ge)!==0||null}}return{path:E,signature:n,total:t,entries:k}}async function be(e,t,n=!1,r){let i=await F();if(!i)throw Error(`The data server is not running.`);let a=new URLSearchParams({offset:String(e),count:String(t)});n&&a.set(`refresh`,`1`);let o=await fetch(`${i}/gallery?${a}`,{cache:`no-cache`,signal:r});if(!o.ok)throw Error(`The gallery failed (${o.status}).`);let s=Number(o.headers.get(`x-listing-total`)??0);return{entries:ye(await o.arrayBuffer(),s,0).entries.map(e=>({path:e.fullPath,name:e.name,modified:e.modified,size:e.size})),total:s}}var xe=new e({baseMessage:`app.data`}),Se={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},Ce={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function we(e,t){return s.available?await s.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function Te(e){return s.available?(await s.request(`fs.open`,{path:e})).ok:!1}async function Ee(e,t=!0,n=!1,r=0,i,a){return await s.request(`fs.list.meta`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i,id:a??null})}async function De(e,t=!0,n=!1,r=0,i,a){if(e&&p(e))return await s.request(`fs.list`,{path:e,sizes:t,includeLinks:n,codePage:r,password:i,id:a??null});let o=await Ee(e,t,n,r,i,a),c=await ve(o.path,{count:400,sort:o.view?.sort??`name`,descending:o.view?.sortDescending??!1});return{...o,entries:c.entries}}async function Oe(e,t,n,r,i){let a=await ve(e,{from:t,count:400,sort:n,descending:r,signal:i});return{entries:a.entries,total:a.total}}async function ke(e,t,n=0,r){let i=await s.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r});for(let a=0;a<2&&i.required&&i.token&&i.protected?.length;a++){if(!await v({hits:i.protected,delaySeconds:i.delaySeconds??5,action:`write`}))return{ok:!1,error:null,cancelled:!0};i=await s.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r,confirm:i.token})}return{ok:i.ok,error:i.error}}async function Ae(e,t=0,n){return await s.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function je(e){s.available&&e.length!==0&&await s.request(`fs.archive.release`,{paths:e})}async function Me(e){return s.available?await s.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function Ne(e,t){return s.available?(await s.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function Pe(e,t,n,r){return s.available?(await s.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function Fe(e,t=!1){return s.available?await s.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function Ie(){return(await s.request(`fs.places`)).places}async function Le(){return(await s.request(`fs.drives`)).drives}async function Re(e=!1){try{return(await xe.readBlock(`/recycle?orphans=${+!!e}`)).rows.map(e=>({id:String(e.id),name:String(e.name),originalPath:String(e.originalPath),size:Number(e.size),deleted:Number(e.deleted),isDirectory:Number(e.isDirectory)!==0,isOrphan:Number(e.isOrphan)!==0,owner:typeof e.owner==`string`&&e.owner.length>0?e.owner:null,removable:Number(e.removable)!==0,contentPath:String(e.contentPath)}))}catch{return(await s.request(`fs.recycle`,{includeOrphans:e})).entries}}async function ze(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await v({hits:r.protected,delaySeconds:r.delaySeconds??5,action:`delete`,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await s.request(e,{...t,confirm:r.token})}return r}async function Be(e=!1){let t=await s.request(`fs.recycle.empty`,{includeOrphans:e});return await ze(`fs.recycle.empty`,{includeOrphans:e},t)}async function Ve(e){return!s.available||e.length===0?{ok:!1,done:0}:await s.request(`fs.recycle.restoreMany`,{ids:e})}async function He(e){if(!s.available||e.length===0)return{ok:!1,done:0};let t=await s.request(`fs.recycle.deleteMany`,{ids:e}),n=await ze(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Ue(e){s.available&&e&&await s.request(`fs.recycle.properties`,{id:e})}async function We(){if(!s.available)return{entries:[],cancelled:!0,failed:!1};let e=await s.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function Ge(){return s.available?(await s.request(`fs.recycle.admin.purge`)).ok:!1}async function Ke(){return s.available?(await s.request(`fs.recent`)).entries:[]}async function qe(){return s.available?(await s.request(`fs.frequent`)).entries:[]}async function Je(e){s.available&&await s.request(`fs.frequent.record`,{path:e})}async function Ye(){await s.request(`fs.recent.clear`)}async function Xe(){await s.request(`fs.frequent.clear`)}async function Ze(){return await s.request(`fs.visibility`)}async function Qe(){return await s.request(`fs.hidden.toggle`)}async function $e(e){return await s.request(`fs.hidden.set`,{show:e})}async function et(){return s.available?await s.request(`fs.index.tasks`):{count:0,directories:[]}}var tt={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},nt={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function rt(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=ot(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=st(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var it=`\0`,at=``;function ot(e){return e.query!==it&&(it=e.query,at=e.query.toLowerCase()),at}var R=`\0`,z=null;function st(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===R)return z;R=t;try{z=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{z=null}return z}function ct(e,t){return rt(e,t)!==null}var B=Date.now(),V=new Set,H=null,lt=()=>{B=Date.now();for(let e of V)e()};function ut(e){return V.add(e),H===null&&(H=window.setInterval(lt,1e3)),()=>{V.delete(e),V.size===0&&H!==null&&(window.clearInterval(H),H=null)}}function dt(){return B}var U=i();function ft({value:e}){let t=(0,T.useSyncExternalStore)(ut,dt);return(0,U.jsx)(U.Fragment,{children:f(e,t)})}var W=new Map,G=new Map,K=0;function pt(){try{let e=new URLSearchParams(window.location.search).get(`state`);if(!e)return;let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=Uint8Array.from(atob(t),e=>e.charCodeAt(0)),r=JSON.parse(new TextDecoder().decode(n));for(let[e,t]of Object.entries(r))typeof t==`string`&&W.set(e,t)}catch{}}function mt(e){return s.available?W.get(e)??null:localStorage.getItem(e)}function ht(e,t){s.available?(W.set(e,t),G.set(e,t),window.clearTimeout(K),K=window.setTimeout(gt,200)):localStorage.setItem(e,t)}function gt(){if(K=0,G.size===0)return;let e=Object.fromEntries(G);G.clear(),s.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function _t(){if(G.size===0)return;let e=Object.fromEntries(G);G.clear(),s.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function vt(e,t){let n=mt(e);if(n===null||n===``)return t;let r=Number(n);return Number.isFinite(r)?r:t}function yt(e,t){ht(e,String(t))}function bt(e){try{return JSON.parse(mt(e)??`null`)}catch{return null}}function xt(e,t){ht(e,JSON.stringify(t))}var q=null,J=null;function St(e){q=e}function Ct(e){return q?q(e):Promise.resolve()}function wt(e){J=e}function Tt(e,t=!1){return J?J(e,t):Promise.resolve(null)}var Et=u(),Dt=t`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,Ot=a`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,kt=a`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,At=a`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,jt=a`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Mt=a`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Nt=a`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Pt=a`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,Ft=a`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,It=t`animation: ${Ot} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Lt=t`animation: ${kt} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,Rt=t`animation: ${At} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;t`animation: ${jt} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var zt=t`animation: ${Mt} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Bt=t`animation: ${Nt} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Vt=t`animation: ${Pt} 140ms ease-out;`,Ht=t`animation: ${Ft} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function Ut({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,T.useState)([]),s=(0,T.useRef)(void 0);if((0,T.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,T.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},g=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,U.jsx)(Y,{},`group-rule-${i}`)),n.push((0,U.jsx)(Qt,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,U.jsx)(Y,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,U.jsxs)(Yt,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.tooltip??e.label,type:`button`,children:[(0,U.jsx)(Xt,{children:e.loading?(0,U.jsx)($t,{}):e.icon}),(0,U.jsx)(Zt,{children:e.label}),a?(0,U.jsx)(h,{size:12}):e.checked&&(0,U.jsx)(m,{size:12})]},`${e.label}-${i}`))}),n};return(0,Et.createPortal)((0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(Wt,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(Gt,{children:r.map((e,t)=>(0,U.jsxs)(Kt,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,U.jsx)(qt,{children:e.icon}),(0,U.jsx)(Jt,{children:e.label})]},`${e.label}-${t}`))}),(0,U.jsx)(Y,{})]}),g(n,0)]}),a.map((e,t)=>(0,U.jsx)(Wt,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:g(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var Wt=r.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${Dt}
    ${Lt}
    transform-origin: top left;
`,Gt=r.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,Kt=r.button`
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
`,qt=r.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,Jt=r.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Yt=r.button`
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
`,Xt=r.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Zt=r.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Qt=r.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Y=r.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,$t=r.span`
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
`;function en({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=c(),l=(0,T.useRef)(null);return(0,T.useEffect)(()=>{if(!e)return;l.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,Et.createPortal)((0,U.jsx)(tn,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,U.jsxs)(nn,{role:`alertdialog`,"aria-modal":`true`,children:[(0,U.jsx)(rn,{children:t}),(0,U.jsx)(an,{children:n}),(0,U.jsxs)(on,{children:[(0,U.jsx)(sn,{onClick:o,type:`button`,children:s(`cancel`)}),(0,U.jsx)(sn,{$danger:i,onClick:a,ref:l,type:`button`,children:r})]})]})}),document.body):null}var tn=r.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Vt}
`,nn=r.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${It}
`,rn=r.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,an=r.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,on=r.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,sn=r.button`
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
`,X=new Map,Z=new Set,cn=0;function ln(){cn+=1;for(let e of Z)e()}function un(e,t){t?X.set(e,t):X.delete(e),ln()}function dn(e){return X.has(e)}function Q(e,t,n){X.get(e)?.(t,n)}function fn(e){return Z.add(e),()=>Z.delete(e)}function $(){return cn}function pn(e){return(0,T.useSyncExternalStore)(fn,$,$),{available:dn(e),open:(t,n)=>Q(e,t,n)}}function mn(e){return[...X.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function hn(e){return(0,T.useSyncExternalStore)(fn,$,$),{available:mn(e).length>0,open:(t,n)=>{let r=mn(e).at(-1);r&&Q(r,t,n)}}}export{we as $,Ce as A,Le as B,yt as C,ct as D,nt as E,ke as F,Ie as G,et as H,Ae as I,Te as J,Ke as K,Ze as L,Ye as M,He as N,rt as O,Be as P,je as Q,De as R,xt as S,tt as T,We as U,qe as V,Oe as W,Ge as X,Me as Y,Je as Z,Ct as _,x as _t,Ut as a,Qe as at,bt as b,v as bt,Rt as c,ee as ct,zt as d,ie as dt,Ve as et,Ht as f,oe as ft,wt as g,C as gt,St as h,se as ht,en as i,Ue as it,Xe as j,Se as k,Bt as l,te as lt,Tt as m,ue as mt,pn as n,Pe as nt,Vt as o,xe as ot,Dt as p,le as pt,Re as q,hn as r,$e as rt,Lt as s,be as st,un as t,Ne as tt,It as u,ae as ut,_t as v,w as vt,ft as w,vt as x,_ as xt,pt as y,S as yt,Fe as z};