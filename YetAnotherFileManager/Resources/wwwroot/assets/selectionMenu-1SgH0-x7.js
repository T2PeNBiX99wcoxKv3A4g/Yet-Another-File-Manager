import{C as e,D as t,M as n,O as r,S as i,T as a,k as o,w as s,x as c}from"./dist-B10j17-y.js";import{C as l,k as u,u as d,v as f,y as p}from"./theme-IW5S96qd.js";import{d as ee,f as m}from"./Icons-C2oT0N0q.js";var h=null;function g(e){h=e}function _(e){return h?h(e):Promise.resolve(!1)}var v=new Map;function y(e){return l(p(e)?d(e):e)}function b(e){return v.get(y(e))}function x(e,t){v.set(y(e),t)}function S(e){v.delete(y(e))}function te(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var C=n(o(),1),w=new Map,T=new Map,E=new Set,D=4096,O=0;function k(e,t,n){for(e.set(t,n);e.size>D;){let t=e.keys().next().value;if(t===void 0)break;e.delete(t)}}function ne(){w.clear(),T.clear(),O+=1,E.forEach(e=>e())}function re(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of w.keys())e.toLowerCase().includes(t)&&(w.delete(e),n=!0);n&&(O+=1,E.forEach(e=>e()))}function ie(){let[e,t]=(0,C.useState)(O);return(0,C.useEffect)(()=>{let e=()=>t(O);return E.add(e),()=>{E.delete(e)}},[]),e}var ae=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function oe(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return ae.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function se(e,t,n=!1){let r=ie(),i=e===null?``:oe(e,t,n),[a,o]=(0,C.useState)(()=>w.get(i)??null);return(0,C.useEffect)(()=>{if(e===null){o(null);return}if(!s.available)return;if(w.has(i)){o(w.get(i)??null);return}let r=!0;return s.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?k(w,i,e.dataUrl):w.delete(i),r&&o(e.dataUrl)},()=>{w.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function ce(e){let[t,n]=(0,C.useState)(e);return(0,C.useEffect)(()=>{if(!e){n(null);return}if(!p(e)){n(e);return}let t=!0;return L(e,0,b(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function le(e){let t=ie(),[n,r]=(0,C.useState)(()=>e?T.get(e)??null:null);return(0,C.useEffect)(()=>{if(!e||!s.available){r(null);return}if(T.has(e)){r(T.get(e)??null);return}let t=!0;return s.request(`fs.iconFile`,{path:e}).then(n=>{k(T,e,n.dataUrl),t&&r(n.dataUrl)},()=>{k(T,e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var A=null,ue=null;function j(){return A===null?s.available?(ue??=s.request(`app.thumbnails`).then(e=>(A=e.base??``,A),()=>(A=``,``)),ue):Promise.resolve(``):Promise.resolve(A)}function de(e,t=128,n=0){let[r,i]=(0,C.useState)(A);if((0,C.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return j().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=e.toLowerCase();if(a.endsWith(`.svg`)||a.endsWith(`.avif`)){let t=a.slice(a.lastIndexOf(`.`));return`${r}/media?path=${encodeURIComponent(e)}&v=${n}&ext=${encodeURIComponent(t)}`}return`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}-${fe}`}var fe=2;function pe(e,t=0,n=``){let[r,i]=(0,C.useState)(A);if((0,C.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return j().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function me(e,t=0){let[n,r]=(0,C.useState)(A);return(0,C.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return j().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var he=1414745168,ge=1,M=32,N=65535,_e=1,ve=2,ye=4,be=8,xe=16;async function P(e,t={}){let n=await j();if(!n)throw Error(`The data server is not running.`);let r=new URLSearchParams({path:e,from:String(t.from??0),count:String(t.count??400)});t.sort&&r.set(`sort`,t.sort),t.descending&&r.set(`dir`,`desc`);let i=await fetch(`${n}/list?${r}`,{cache:`no-cache`,signal:t.signal});if(!i.ok)throw Error(`The listing failed (${i.status}).`);let a=Number(i.headers.get(`x-listing-total`)??0),o=Number.parseInt((i.headers.get(`etag`)??``).replaceAll(`"`,``),16)||0;return F(await i.arrayBuffer(),a,o)}function F(e,t,n){let r=new DataView(e);if(e.byteLength<M||r.getUint32(0,!0)!==he)throw Error(`Not a listing block.`);if(r.getUint16(4,!0)!==ge)throw Error(`This build cannot read that listing version.`);let i=r.getUint32(8,!0),a=r.getUint32(12,!0),o=r.getUint32(16,!0),s=r.getUint32(20,!0),c=r.getUint32(24,!0),l=!!(r.getUint16(6,!0)&1),u=M,d=(t,n)=>{let r=new t(e,u,i);return u+=n*i,r},f=d(Float64Array,8),p=d(Float64Array,8),ee=d(Float64Array,8),m=d(Uint32Array,4),h=d(Uint16Array,2),g=d(Uint16Array,2),_=d(Uint16Array,2),v=d(Uint8Array,1),y=d(Uint8Array,1),b=[];for(let e=0;e<s;e++)b.push({offset:r.getUint32(u,!0),length:r.getUint16(u+4,!0)}),u+=6;let x=new Map;for(let e=0;e<c;e++)x.set(r.getUint32(u,!0),{offset:r.getUint32(u+4,!0),length:r.getUint16(u+8,!0)}),u+=10;let S=new Uint8Array(e,u,a),te=new TextDecoder,C=(e,t)=>te.decode(S.subarray(e,e+t)),w=C(0,o),T=w.includes(`\\`)?`\\`:`/`,E=b.map(e=>C(e.offset,e.length)),D=Array(i);for(let e=0;e<i;e++){let t=v[e],n=C(m[e],h[e]),r=_[e]===N?void 0:x.get(e),i=l?n:w.endsWith(T)?w+n:w+T+n,a=l?n.slice(Math.max(n.lastIndexOf(`/`),n.lastIndexOf(`\\`))+1):n;D[e]={name:a,fullPath:i,isDirectory:(t&_e)!==0,size:f[e],modified:p[e],isHidden:(t&ve)!==0,isSystem:(t&ye)!==0,iconSource:g[e]===N?null:E[g[e]]??null,created:ee[e],linkTarget:r?C(r.offset,r.length):null,linkValid:_[e]===N?null:(t&xe)!==0,linkCount:y[e],isEncrypted:(t&be)!==0||null}}return{path:w,signature:n,total:t,entries:D}}async function Se(e,t,n=!1,r){let i=await j();if(!i)throw Error(`The data server is not running.`);let a=new URLSearchParams({offset:String(e),count:String(t)});n&&a.set(`refresh`,`1`);let o=await fetch(`${i}/gallery?${a}`,{cache:`no-cache`,signal:r});if(!o.ok)throw Error(`The gallery failed (${o.status}).`);let s=Number(o.headers.get(`x-listing-total`)??0);return{entries:F(await o.arrayBuffer(),s,0).entries.map(e=>({path:e.fullPath,name:e.name,modified:e.modified,size:e.size})),total:s}}var I=new e({baseMessage:`app.data`}),Ce={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},we={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function Te(e,t){return s.available?await s.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function Ee(e){return s.available?(await s.request(`fs.open`,{path:e})).ok:!1}async function De(e,t=!0,n=!1,r=0,i,a){return await s.request(`fs.list.meta`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i,id:a??null})}async function Oe(e,t=!0,n=!1,r=0,i,a){if(e&&p(e))return await s.request(`fs.list`,{path:e,sizes:t,includeLinks:n,codePage:r,password:i,id:a??null});let o=await De(e,t,n,r,i,a),c=await P(o.path,{count:400,sort:o.view?.sort??`name`,descending:o.view?.sortDescending??!1});return{...o,entries:c.entries}}async function ke(e,t,n,r,i){let a=await P(e,{from:t,count:400,sort:n,descending:r,signal:i});return{entries:a.entries,total:a.total}}async function Ae(e,t,n=0,r){let i=await s.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r});for(let a=0;a<2&&i.required&&i.token&&i.protected?.length;a++){if(!await _({hits:i.protected,delaySeconds:i.delaySeconds??5,action:`write`}))return{ok:!1,error:null,cancelled:!0};i=await s.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r,confirm:i.token})}return{ok:i.ok,error:i.error}}async function L(e,t=0,n){return await s.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function je(e){s.available&&e.length!==0&&await s.request(`fs.archive.release`,{paths:e})}async function Me(e){return s.available?await s.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function Ne(e,t){return s.available?(await s.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function Pe(e,t,n,r){return s.available?(await s.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function Fe(e,t=!1){return s.available?await s.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function Ie(){return(await s.request(`fs.places`)).places}async function Le(){return(await s.request(`fs.drives`)).drives}async function Re(e=!1){try{return(await I.readBlock(`/recycle?orphans=${+!!e}`)).rows.map(e=>({id:String(e.id),name:String(e.name),originalPath:String(e.originalPath),size:Number(e.size),deleted:Number(e.deleted),isDirectory:Number(e.isDirectory)!==0,isOrphan:Number(e.isOrphan)!==0,owner:typeof e.owner==`string`&&e.owner.length>0?e.owner:null,removable:Number(e.removable)!==0,contentPath:String(e.contentPath)}))}catch{return(await s.request(`fs.recycle`,{includeOrphans:e})).entries}}async function ze(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await _({hits:r.protected,delaySeconds:r.delaySeconds??5,action:`delete`,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await s.request(e,{...t,confirm:r.token})}return r}async function Be(e=!1){let t=await s.request(`fs.recycle.empty`,{includeOrphans:e});return await ze(`fs.recycle.empty`,{includeOrphans:e},t)}async function Ve(e){return!s.available||e.length===0?{ok:!1,done:0}:await s.request(`fs.recycle.restoreMany`,{ids:e})}async function He(e){if(!s.available||e.length===0)return{ok:!1,done:0};let t=await s.request(`fs.recycle.deleteMany`,{ids:e}),n=await ze(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Ue(e){s.available&&e&&await s.request(`fs.recycle.properties`,{id:e})}async function We(){if(!s.available)return{entries:[],cancelled:!0,failed:!1};let e=await s.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function Ge(){return s.available?(await s.request(`fs.recycle.admin.purge`)).ok:!1}async function Ke(){return s.available?(await s.request(`fs.recent`)).entries:[]}async function qe(){return s.available?(await s.request(`fs.frequent`)).entries:[]}async function Je(e){s.available&&await s.request(`fs.frequent.record`,{path:e})}async function Ye(){await s.request(`fs.recent.clear`)}async function Xe(){await s.request(`fs.frequent.clear`)}async function Ze(){return await s.request(`fs.visibility`)}async function Qe(){return await s.request(`fs.hidden.toggle`)}async function $e(e){return await s.request(`fs.hidden.set`,{show:e})}async function et(){return s.available?await s.request(`fs.index.tasks`):{count:0,directories:[]}}var tt={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},nt={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function rt(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=ot(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=ct(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var it=`\0`,at=``;function ot(e){return e.query!==it&&(it=e.query,at=e.query.toLowerCase()),at}var st=`\0`,R=null;function ct(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===st)return R;st=t;try{R=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{R=null}return R}function lt(e,t){return rt(e,t)!==null}var z=Date.now(),B=new Set,V=null,ut=()=>{z=Date.now();for(let e of B)e()};function H(e){return B.add(e),V===null&&(V=window.setInterval(ut,1e3)),()=>{B.delete(e),B.size===0&&V!==null&&(window.clearInterval(V),V=null)}}function U(){return z}var W=i();function dt({value:e}){let t=(0,C.useSyncExternalStore)(H,U);return(0,W.jsx)(W.Fragment,{children:f(e,t)})}var G=new Map,K=new Map,q=0;function ft(){try{let e=new URLSearchParams(window.location.search).get(`state`);if(!e)return;let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=Uint8Array.from(atob(t),e=>e.charCodeAt(0)),r=JSON.parse(new TextDecoder().decode(n));for(let[e,t]of Object.entries(r))typeof t==`string`&&G.set(e,t)}catch{}}function pt(e){return s.available?G.get(e)??null:localStorage.getItem(e)}function mt(e,t){s.available?(G.set(e,t),K.set(e,t),window.clearTimeout(q),q=window.setTimeout(ht,200)):localStorage.setItem(e,t)}function ht(){if(q=0,K.size===0)return;let e=Object.fromEntries(K);K.clear(),s.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function gt(){if(K.size===0)return;let e=Object.fromEntries(K);K.clear(),s.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function _t(e,t){let n=pt(e);if(n===null||n===``)return t;let r=Number(n);return Number.isFinite(r)?r:t}function vt(e,t){mt(e,String(t))}function yt(e){try{return JSON.parse(pt(e)??`null`)}catch{return null}}function bt(e,t){mt(e,JSON.stringify(t))}var J=null,Y=null;function xt(e){J=e}function St(e){return J?J(e):Promise.resolve()}function Ct(e){Y=e}function wt(e,t=!1){return Y?Y(e,t):Promise.resolve(null)}var Tt=u(),Et=t`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,Dt=a`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Ot=a`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,kt=a`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,At=a`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,jt=a`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Mt=a`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Nt=a`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,Pt=a`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,Ft=t`animation: ${Dt} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,It=t`animation: ${Ot} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,Lt=t`animation: ${kt} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;t`animation: ${At} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var Rt=t`animation: ${jt} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,zt=t`animation: ${Mt} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Bt=t`animation: ${Nt} 140ms ease-out;`,Vt=t`animation: ${Pt} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function Ht({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,C.useState)([]),s=(0,C.useRef)(void 0);if((0,C.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,C.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},h=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,W.jsx)(X,{},`group-rule-${i}`)),n.push((0,W.jsx)(Zt,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,W.jsx)(X,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,W.jsxs)(Jt,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.tooltip??e.label,type:`button`,children:[(0,W.jsx)(Yt,{children:e.loading?(0,W.jsx)(Qt,{}):e.icon}),(0,W.jsx)(Xt,{children:e.label}),a?(0,W.jsx)(m,{size:12}):e.checked&&(0,W.jsx)(ee,{size:12})]},`${e.label}-${i}`))}),n};return(0,Tt.createPortal)((0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(Ut,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(Wt,{children:r.map((e,t)=>(0,W.jsxs)(Gt,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,W.jsx)(Kt,{children:e.icon}),(0,W.jsx)(qt,{children:e.label})]},`${e.label}-${t}`))}),(0,W.jsx)(X,{})]}),h(n,0)]}),a.map((e,t)=>(0,W.jsx)(Ut,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:h(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var Ut=r.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${Et}
    ${It}
    transform-origin: top left;
`,Wt=r.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,Gt=r.button`
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
`,Kt=r.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,qt=r.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Jt=r.button`
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
`,Yt=r.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Xt=r.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Zt=r.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,X=r.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,Qt=r.span`
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
`;function $t({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=c(),l=(0,C.useRef)(null);return(0,C.useEffect)(()=>{if(!e)return;l.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,Tt.createPortal)((0,W.jsx)(en,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,W.jsxs)(tn,{role:`alertdialog`,"aria-modal":`true`,children:[(0,W.jsx)(nn,{children:t}),(0,W.jsx)(rn,{children:n}),(0,W.jsxs)(an,{children:[(0,W.jsx)(on,{onClick:o,type:`button`,children:s(`cancel`)}),(0,W.jsx)(on,{$danger:i,onClick:a,ref:l,type:`button`,children:r})]})]})}),document.body):null}var en=r.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Bt}
`,tn=r.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Ft}
`,nn=r.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,rn=r.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,an=r.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,on=r.button`
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
`,Z=new Map,Q=new Set,sn=0;function cn(){sn+=1;for(let e of Q)e()}function ln(e,t){t?Z.set(e,t):Z.delete(e),cn()}function un(e){return Z.has(e)}function dn(e,t,n){Z.get(e)?.(t,n)}function fn(e){return Q.add(e),()=>Q.delete(e)}function $(){return sn}function pn(e){return(0,C.useSyncExternalStore)(fn,$,$),{available:un(e),open:(t,n)=>dn(e,t,n)}}function mn(e){return[...Z.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function hn(e){return(0,C.useSyncExternalStore)(fn,$,$),{available:mn(e).length>0,open:(t,n)=>{let r=mn(e).at(-1);r&&dn(r,t,n)}}}export{Je as $,rt as A,Oe as B,vt as C,g as Ct,tt as D,H as E,He as F,We as G,Le as H,Be as I,Ke as J,ke as K,Ae as L,we as M,Xe as N,nt as O,Ye as P,Ge as Q,L as R,bt as S,_ as St,U as T,qe as U,Fe as V,et as W,Ee as X,Re as Y,Me as Z,St as _,de as _t,Ht as a,$e as at,yt as b,te as bt,Lt as c,I as ct,Rt as d,re as dt,je as et,Vt as f,ce as ft,Ct as g,me as gt,xt as h,pe as ht,$t as i,Pe as it,Ce as j,lt as k,zt as l,Se as lt,wt as m,le as mt,pn as n,Ve as nt,Bt as o,Ue as ot,Et as p,se as pt,Ie as q,hn as r,Ne as rt,It as s,Qe as st,ln as t,Te as tt,Ft as u,ne as ut,gt as v,S as vt,dt as w,_t as x,x as xt,ft as y,b as yt,Ze as z};