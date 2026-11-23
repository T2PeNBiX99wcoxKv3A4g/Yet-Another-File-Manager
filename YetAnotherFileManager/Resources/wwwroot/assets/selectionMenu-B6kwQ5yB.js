import{C as e,D as t,M as n,O as r,S as i,T as a,k as o,w as s,x as c}from"./dist-B10j17-y.js";import{S as l,_ as u,a as d,k as f,l as p,v as m}from"./theme-DIZkp4eN.js";import{d as ee,f as te}from"./Icons-C2oT0N0q.js";var h=null;function g(e){h=e}function _(e){return h?h(e):Promise.resolve(!1)}var v=new Map;function y(e){return l(m(e)?p(e):e)}function b(e){return v.get(y(e))}function ne(e,t){v.set(y(e),t)}function x(e){v.delete(y(e))}function S(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var C=n(o(),1),w=new Map,T=new Map,E=new Set,re=4096,D=0;function O(e,t,n){for(e.set(t,n);e.size>re;){let t=e.keys().next().value;if(t===void 0)break;e.delete(t)}}function ie(){w.clear(),T.clear(),D+=1,E.forEach(e=>e())}function ae(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of w.keys())e.toLowerCase().includes(t)&&(w.delete(e),n=!0);n&&(D+=1,E.forEach(e=>e()))}function oe(){let[e,t]=(0,C.useState)(D);return(0,C.useEffect)(()=>{let e=()=>t(D);return E.add(e),()=>{E.delete(e)}},[]),e}var se=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function ce(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return se.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function le(e,t,n=!1){let r=oe(),i=e===null?``:ce(e,t,n),[a,o]=(0,C.useState)(()=>w.get(i)??null);return(0,C.useEffect)(()=>{if(e===null){o(null);return}if(!s.available)return;if(w.has(i)){o(w.get(i)??null);return}let r=!0;return(async()=>{for(var a=0;a<3;a++){let c=await s.request(`fs.icon`,{path:e,directory:t,large:n}).catch(()=>null);if(!r)return;if(c?.dataUrl){O(w,i,c.dataUrl),o(c.dataUrl);return}w.delete(i),a<2&&await new Promise(e=>window.setTimeout(e,1200))}r&&o(null)})(),()=>{r=!1}},[i,e,t,n,r]),a}function ue(e){let[t,n]=(0,C.useState)(e);return(0,C.useEffect)(()=>{if(!e){n(null);return}if(!m(e)){n(e);return}let t=!0;return $e(e,0,b(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function de(e){let t=oe(),[n,r]=(0,C.useState)(()=>e?T.get(e)??null:null);return(0,C.useEffect)(()=>{if(!e||!s.available){r(null);return}if(T.has(e)){r(T.get(e)??null);return}let t=!0;return s.request(`fs.iconFile`,{path:e}).then(n=>{O(T,e,n.dataUrl),t&&r(n.dataUrl)},()=>{O(T,e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var k=null,fe=null;function A(){return k===null?s.available?(fe??=s.request(`app.thumbnails`).then(e=>(k=e.base??``,k),()=>(k=``,``)),fe):Promise.resolve(``):Promise.resolve(k)}function pe(e,t=128,n=0){let[r,i]=(0,C.useState)(k);if((0,C.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return A().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=e.toLowerCase();if(a.endsWith(`.svg`)||a.endsWith(`.avif`)){let t=a.slice(a.lastIndexOf(`.`));return`${r}/media?path=${encodeURIComponent(e)}&v=${n}&ext=${encodeURIComponent(t)}`}return`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}-${me}`}var me=2;function he(e,t=0,n=``){let[r,i]=(0,C.useState)(k);if((0,C.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return A().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function ge(e,t=0){let[n,r]=(0,C.useState)(k);return(0,C.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return A().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var _e=1414745168,ve=1,ye=32,j=65535,be=1,xe=2,Se=4,Ce=8,we=16;async function Te(e,t={}){let n=await A();if(!n)throw Error(`The data server is not running.`);let r=new URLSearchParams({path:e,from:String(t.from??0),count:String(t.count??400)});t.sort&&r.set(`sort`,t.sort),t.descending&&r.set(`dir`,`desc`);let i=await fetch(`${n}/list?${r}`,{cache:`no-cache`,signal:t.signal});if(!i.ok)throw Error(`The listing failed (${i.status}).`);let a=Number(i.headers.get(`x-listing-total`)??0),o=Number.parseInt((i.headers.get(`etag`)??``).replaceAll(`"`,``),16)||0;return Ee(await i.arrayBuffer(),a,o)}function Ee(e,t,n){let r=new DataView(e);if(e.byteLength<ye||r.getUint32(0,!0)!==_e)throw Error(`Not a listing block.`);if(r.getUint16(4,!0)!==ve)throw Error(`This build cannot read that listing version.`);let i=r.getUint32(8,!0),a=r.getUint32(12,!0),o=r.getUint32(16,!0),s=r.getUint32(20,!0),c=r.getUint32(24,!0),l=!!(r.getUint16(6,!0)&1),u=ye,d=(t,n)=>{let r=new t(e,u,i);return u+=n*i,r},f=d(Float64Array,8),p=d(Float64Array,8),m=d(Float64Array,8),ee=d(Uint32Array,4),te=d(Uint16Array,2),h=d(Uint16Array,2),g=d(Uint16Array,2),_=d(Uint8Array,1),v=d(Uint8Array,1),y=[];for(let e=0;e<s;e++)y.push({offset:r.getUint32(u,!0),length:r.getUint16(u+4,!0)}),u+=6;let b=new Map;for(let e=0;e<c;e++)b.set(r.getUint32(u,!0),{offset:r.getUint32(u+4,!0),length:r.getUint16(u+8,!0)}),u+=10;let ne=new Uint8Array(e,u,a),x=new TextDecoder,S=(e,t)=>x.decode(ne.subarray(e,e+t)),C=S(0,o),w=C.includes(`\\`)?`\\`:`/`,T=y.map(e=>S(e.offset,e.length)),E=Array(i);for(let e=0;e<i;e++){let t=_[e],n=S(ee[e],te[e]),r=g[e]===j?void 0:b.get(e),i=l?n:C.endsWith(w)?C+n:C+w+n,a=l?n.slice(Math.max(n.lastIndexOf(`/`),n.lastIndexOf(`\\`))+1):n;E[e]={name:a,fullPath:i,isDirectory:(t&be)!==0,size:f[e],modified:p[e],isHidden:(t&xe)!==0,isSystem:(t&Se)!==0,iconSource:h[e]===j?null:T[h[e]]??null,created:m[e],linkTarget:r?S(r.offset,r.length):null,linkValid:g[e]===j?null:(t&we)!==0,linkCount:v[e],isEncrypted:(t&Ce)!==0||null}}return{path:C,signature:n,total:t,entries:E}}async function De(e,t,n=!1,r){let i=await A();if(!i)throw Error(`The data server is not running.`);let a=new URLSearchParams({offset:String(e),count:String(t)});n&&a.set(`refresh`,`1`);let o=await fetch(`${i}/gallery?${a}`,{cache:`no-cache`,signal:r});if(!o.ok)throw Error(`The gallery failed (${o.status}).`);let s=Number(o.headers.get(`x-listing-total`)??0);return{entries:Ee(await o.arrayBuffer(),s,0).entries.map(e=>({path:e.fullPath,name:e.name,modified:e.modified,size:e.size})),total:s}}var M=null,Oe=null;function ke(){return M?Promise.resolve(M):s.available?(Oe??=s.request(`settings.defaults`).then(e=>(M=e,e)),Oe):Promise.reject(Error(`Settings need the host.`))}function Ae(){if(!M)throw Error(`The settings defaults have not been loaded yet.`);return M}async function je(){let e=await ke();return Me(await s.request(`settings.get`),e)}function Me(e,t){let n=Object.fromEntries(Object.entries(e??{}).filter(([,e])=>e!=null)),r={...t,...n};return r.defaultView=e?.defaultView?{...t.defaultView??{},...e.defaultView}:t.defaultView,r.themeMode=d(r.themeMode),r}async function Ne(){return s.available?(await s.request(`app.protection.defaults`)).paths??[]:[]}var N={registered:!1,pathMatches:!1,registeredPath:null},Pe={registered:!1,pathMatches:!1,registeredPath:null};async function Fe(){return s.available?await s.request(`app.defaultManager.status`):Pe}async function Ie(e){return s.available?await s.request(`app.defaultManager.set`,{enabled:e}):Pe}async function Le(){return s.available?await s.request(`app.archive.status`):N}async function Re(){return s.available?await s.request(`app.archive.register`):N}async function ze(){return s.available?await s.request(`app.archive.unregister`):N}async function Be(e){if(!s.available)return e;let t=await s.request(`settings.save`,e),n=Object.fromEntries(Object.entries(t??{}).filter(([,e])=>e!=null));return{...e,...n}}async function Ve(e,t){s.available&&await s.request(`app.tabs.set`,{tabs:e,active:t})}async function He(e,t,n){return s.available?(await s.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var Ue=new e({baseMessage:`app.data`});function We(){return Ae().defaultView}function Ge(){let e=We();return{mode:e.mode,iconSize:e.iconSize,gridSize:e.gridSize,sort:e.sort,sortDescending:e.sortDescending}}async function Ke(e,t){return s.available?await s.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function qe(e){return s.available?(await s.request(`fs.open`,{path:e})).ok:!1}async function Je(e,t=!0,n=!1,r=0,i,a){return await s.request(`fs.list.meta`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i,id:a??null})}async function Ye(e,t=!0,n=!1,r=0,i,a){if(e&&m(e))return await s.request(`fs.list`,{path:e,sizes:t,includeLinks:n,codePage:r,password:i,id:a??null});let o=await Je(e,t,n,r,i,a),c=await Te(o.path,{count:400,sort:o.view?.sort??`name`,descending:o.view?.sortDescending??!1});return{...o,entries:c.entries}}async function Xe(e,t,n,r,i){let a=await Te(e,{from:t,count:400,sort:n,descending:r,signal:i});return{entries:a.entries,total:a.total}}async function Ze(e){return s.available?(await s.request(`fs.archive.force`,{path:e})).ok:!1}async function Qe(e,t,n=0,r,i=!1){let a=await s.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r,deleteAfter:i});for(let o=0;o<2&&a.required&&a.token&&a.protected?.length;o++){if(!await _({hits:a.protected,delaySeconds:a.delaySeconds??5,action:`write`}))return{ok:!1,error:null,cancelled:!0};a=await s.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r,deleteAfter:i,confirm:a.token})}return{ok:a.ok,error:a.error}}async function $e(e,t=0,n){return await s.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function et(e){s.available&&e.length!==0&&await s.request(`fs.archive.release`,{paths:e})}async function tt(e){return s.available?await s.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function nt(e,t){return s.available?(await s.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function rt(e,t,n,r){return s.available?(await s.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function it(e,t=!1){return s.available?await s.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function at(){return(await s.request(`fs.places`)).places}async function ot(){return(await s.request(`fs.drives`)).drives}async function st(e=!1){try{return(await Ue.readBlock(`/recycle?orphans=${+!!e}`)).rows.map(e=>({id:String(e.id),name:String(e.name),originalPath:String(e.originalPath),size:Number(e.size),deleted:Number(e.deleted),isDirectory:Number(e.isDirectory)!==0,isOrphan:Number(e.isOrphan)!==0,owner:typeof e.owner==`string`&&e.owner.length>0?e.owner:null,removable:Number(e.removable)!==0,contentPath:String(e.contentPath)}))}catch{return(await s.request(`fs.recycle`,{includeOrphans:e})).entries}}async function P(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await _({hits:r.protected,delaySeconds:r.delaySeconds??5,action:`delete`,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await s.request(e,{...t,confirm:r.token})}return r}async function ct(e=!1){let t=await s.request(`fs.recycle.empty`,{includeOrphans:e});return await P(`fs.recycle.empty`,{includeOrphans:e},t)}async function lt(e){return!s.available||e.length===0?{ok:!1,done:0}:await s.request(`fs.recycle.restoreMany`,{ids:e})}async function ut(e){if(!s.available||e.length===0)return{ok:!1,done:0};let t=await s.request(`fs.recycle.deleteMany`,{ids:e}),n=await P(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function dt(e){s.available&&e&&await s.request(`fs.recycle.properties`,{id:e})}async function ft(){if(!s.available)return{entries:[],cancelled:!0,failed:!1};let e=await s.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function pt(){return s.available?(await s.request(`fs.recycle.admin.purge`)).ok:!1}async function mt(){return s.available?(await s.request(`fs.recent`)).entries:[]}async function ht(){return s.available?(await s.request(`fs.frequent`)).entries:[]}async function gt(e){s.available&&await s.request(`fs.frequent.record`,{path:e})}async function _t(){await s.request(`fs.recent.clear`)}async function vt(){await s.request(`fs.frequent.clear`)}async function yt(){return await s.request(`fs.visibility`)}async function bt(){return await s.request(`fs.hidden.toggle`)}async function xt(e){return await s.request(`fs.hidden.set`,{show:e})}async function St(){return s.available?await s.request(`fs.index.tasks`):{count:0,directories:[]}}var Ct={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},wt={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function F(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=Tt(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=Et(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var I=`\0`,L=``;function Tt(e){return e.query!==I&&(I=e.query,L=e.query.toLowerCase()),L}var R=`\0`,z=null;function Et(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===R)return z;R=t;try{z=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{z=null}return z}function Dt(e,t){return F(e,t)!==null}var B=Date.now(),V=new Set,H=null,Ot=()=>{B=Date.now();for(let e of V)e()};function U(e){return V.add(e),H===null&&(H=window.setInterval(Ot,1e3)),()=>{V.delete(e),V.size===0&&H!==null&&(window.clearInterval(H),H=null)}}function kt(){return B}var W=i();function At({value:e}){let t=(0,C.useSyncExternalStore)(U,kt);return(0,W.jsx)(W.Fragment,{children:u(e,t)})}var G=new Map,K=new Map,q=0;function jt(){try{let e=new URLSearchParams(window.location.search).get(`state`);if(!e)return;let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=Uint8Array.from(atob(t),e=>e.charCodeAt(0)),r=JSON.parse(new TextDecoder().decode(n));for(let[e,t]of Object.entries(r))typeof t==`string`&&G.set(e,t)}catch{}}function Mt(e){return s.available?G.get(e)??null:localStorage.getItem(e)}function Nt(e,t){s.available?(G.set(e,t),K.set(e,t),window.clearTimeout(q),q=window.setTimeout(Pt,200)):localStorage.setItem(e,t)}function Pt(){if(q=0,K.size===0)return;let e=Object.fromEntries(K);K.clear(),s.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function Ft(){if(K.size===0)return;let e=Object.fromEntries(K);K.clear(),s.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function It(e,t){let n=Mt(e);if(n===null||n===``)return t;let r=Number(n);return Number.isFinite(r)?r:t}function Lt(e,t){Nt(e,String(t))}function Rt(e){try{return JSON.parse(Mt(e)??`null`)}catch{return null}}function zt(e,t){Nt(e,JSON.stringify(t))}var J=null,Y=null;function Bt(e){J=e}function Vt(e){return J?J(e):Promise.resolve()}function Ht(e){Y=e}function Ut(e,t=!1){return Y?Y(e,t):Promise.resolve(null)}var Wt=f(),Gt=t`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,Kt=a`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,qt=a`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Jt=a`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Yt=a`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Xt=a`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Zt=a`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Qt=a`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,$t=a`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,en=t`animation: ${Kt} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,tn=t`animation: ${qt} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,nn=t`animation: ${Jt} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;t`animation: ${Yt} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var rn=t`animation: ${Xt} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,an=t`animation: ${Zt} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,on=t`animation: ${Qt} 140ms ease-out;`,sn=t`animation: ${$t} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function cn({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,C.useState)([]),s=(0,C.useRef)(void 0);if((0,C.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,C.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,W.jsx)(X,{},`group-rule-${i}`)),n.push((0,W.jsx)(_n,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,W.jsx)(X,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,W.jsxs)(mn,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.tooltip??e.label,type:`button`,children:[(0,W.jsx)(hn,{children:e.loading?(0,W.jsx)(vn,{}):e.icon}),(0,W.jsx)(gn,{children:e.label}),a?(0,W.jsx)(te,{size:12}):e.checked&&(0,W.jsx)(ee,{size:12})]},`${e.label}-${i}`))}),n};return(0,Wt.createPortal)((0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(ln,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(un,{children:r.map((e,t)=>(0,W.jsxs)(dn,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,W.jsx)(fn,{children:e.icon}),(0,W.jsx)(pn,{children:e.label})]},`${e.label}-${t}`))}),(0,W.jsx)(X,{})]}),m(n,0)]}),a.map((e,t)=>(0,W.jsx)(ln,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var ln=r.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${Gt}
    ${tn}
    transform-origin: top left;
`,un=r.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,dn=r.button`
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
`,fn=r.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,pn=r.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,mn=r.button`
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
`,hn=r.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,gn=r.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,_n=r.div`
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
`,vn=r.span`
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
`;function yn({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=c(),l=(0,C.useRef)(null);return(0,C.useEffect)(()=>{if(!e)return;l.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,Wt.createPortal)((0,W.jsx)(bn,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,W.jsxs)(xn,{role:`alertdialog`,"aria-modal":`true`,children:[(0,W.jsx)(Sn,{children:t}),(0,W.jsx)(Cn,{children:n}),(0,W.jsxs)(wn,{children:[(0,W.jsx)(Tn,{onClick:o,type:`button`,children:s(`cancel`)}),(0,W.jsx)(Tn,{$danger:i,onClick:a,ref:l,type:`button`,children:r})]})]})}),document.body):null}var bn=r.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${on}
`,xn=r.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${en}
`,Sn=r.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Cn=r.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    /* Long paths have no spaces, so they have to be broken inside the card. */
    overflow-wrap: anywhere;
    word-break: break-word;
`,wn=r.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Tn=r.button`
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
`,Z=new Map,Q=new Set,En=0;function Dn(){En+=1;for(let e of Q)e()}function On(e,t){t?Z.set(e,t):Z.delete(e),Dn()}function kn(e){return Z.has(e)}function An(e,t,n){Z.get(e)?.(t,n)}function jn(e){return Q.add(e),()=>Q.delete(e)}function $(){return En}function Mn(e){return(0,C.useSyncExternalStore)(jn,$,$),{available:kn(e),open:(t,n)=>An(e,t,n)}}function Nn(e){return[...Z.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function Pn(e){return(0,C.useSyncExternalStore)(jn,$,$),{available:Nn(e).length>0,open:(t,n)=>{let r=Nn(e).at(-1);r&&An(r,t,n)}}}export{pt as $,F as A,pe as At,yt as B,Lt as C,ie as Ct,Ct as D,de as Dt,U as E,le as Et,ut as F,_ as Ft,St as G,it as H,ct as I,g as It,at as J,ft as K,Qe as L,_t as M,b as Mt,Ge as N,S as Nt,wt as O,he as Ot,We as P,ne as Pt,tt as Q,$e as R,zt as S,De as St,kt as T,ue as Tt,ot as U,Ye as V,ht as W,st as X,mt as Y,qe as Z,Vt as _,Ve as _t,cn as a,rt as at,Rt as b,He as bt,nn as c,bt as ct,rn as d,Le as dt,gt as et,sn as f,Fe as ft,Ht as g,Re as gt,Bt as h,je as ht,yn as i,nt as it,vt as j,x as jt,Dt as k,ge as kt,an as l,Ue as lt,Ut as m,ke as mt,Mn as n,Ke as nt,on as o,xt as ot,Gt as p,Ne as pt,Xe as q,Pn as r,lt as rt,tn as s,dt as st,On as t,et as tt,en as u,Ae as ut,Ft as v,Be as vt,At as w,ae as wt,It as x,ze as xt,jt as y,Ie as yt,Ze as z};