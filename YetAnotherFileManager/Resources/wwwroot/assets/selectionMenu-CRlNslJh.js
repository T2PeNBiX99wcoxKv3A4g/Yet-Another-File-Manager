import{A as e,C as t,E as n,N as r,O as i,S as a,T as o,h as s,k as c,w as l}from"./dist-CKllR0JH.js";import{S as u,_ as d,a as f,k as p,l as m,v as h}from"./theme-DU3X_EOM.js";import{d as ee,f as g}from"./Icons-5-2yk8Zn.js";var _=null;function te(e){_=e}function v(e){return _?_(e):Promise.resolve(!1)}var y=new Map;function b(e){return u(h(e)?m(e):e)}function x(e){return y.get(b(e))}function ne(e,t){y.set(b(e),t)}function S(e){y.delete(b(e))}function C(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var w=r(e(),1),T=new Map,E=new Map,D=new Set,re=4096,O=0;function k(e,t,n){for(e.set(t,n);e.size>re;){let t=e.keys().next().value;if(t===void 0)break;e.delete(t)}}function ie(){T.clear(),E.clear(),O+=1,D.forEach(e=>e())}function ae(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of T.keys())e.toLowerCase().includes(t)&&(T.delete(e),n=!0);n&&(O+=1,D.forEach(e=>e()))}function oe(){let[e,t]=(0,w.useState)(O);return(0,w.useEffect)(()=>{let e=()=>t(O);return D.add(e),()=>{D.delete(e)}},[]),e}var se=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function ce(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return se.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}var A=new Map;function le(e,t,n=!1){let r=oe(),i=e===null?``:ce(e,t,n),[a,s]=(0,w.useState)(()=>T.get(i)??null);return(0,w.useEffect)(()=>{if(e===null){s(null);return}if(!o.available)return;if(T.has(i)){s(T.get(i)??null);return}let r=!0,a=A.get(i);return a||(a=(async()=>{for(let r=0;r<3;r++){let a=await o.request(`fs.icon`,{path:e,directory:t,large:n}).catch(()=>null);if(a?.dataUrl)return k(T,i,a.dataUrl),a.dataUrl;T.delete(i),r<2&&await new Promise(e=>window.setTimeout(e,1200))}return null})().finally(()=>A.delete(i)),A.set(i,a)),a.then(e=>{r&&s(e)}),()=>{r=!1}},[i,e,t,n,r]),a}function ue(e){let[t,n]=(0,w.useState)(e);return(0,w.useEffect)(()=>{if(!e){n(null);return}if(!h(e)){n(e);return}let t=!0;return Xe(e,0,x(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function de(e){let t=oe(),[n,r]=(0,w.useState)(()=>e?E.get(e)??null:null);return(0,w.useEffect)(()=>{if(!e||!o.available){r(null);return}if(E.has(e)){r(E.get(e)??null);return}let t=!0;return o.request(`fs.iconFile`,{path:e}).then(n=>{k(E,e,n.dataUrl),t&&r(n.dataUrl)},()=>{k(E,e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var j=null,fe=null;function M(){return j===null?o.available?(fe??=o.request(`app.thumbnails`).then(e=>(j=e.base??``,j),()=>(j=``,``)),fe):Promise.resolve(``):Promise.resolve(j)}function pe(e,t=128,n=0){let[r,i]=(0,w.useState)(j);if((0,w.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return M().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=e.toLowerCase();if(a.endsWith(`.svg`)||a.endsWith(`.avif`)){let t=a.slice(a.lastIndexOf(`.`));return`${r}/media?path=${encodeURIComponent(e)}&v=${n}&ext=${encodeURIComponent(t)}`}return`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}-${me}`}var me=2;function he(e,t=0,n=``){let[r,i]=(0,w.useState)(j);if((0,w.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return M().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function ge(e,t=0){let[n,r]=(0,w.useState)(j);return(0,w.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return M().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var _e=1414745168,ve=1,ye=32,N=65535,be=1,xe=2,Se=4,Ce=8,we=16;async function Te(e,t={}){let n=await M();if(!n)throw Error(`The data server is not running.`);let r=new URLSearchParams({path:e,from:String(t.from??0),count:String(t.count??400)});t.sort&&r.set(`sort`,t.sort),t.descending&&r.set(`dir`,`desc`);let i=await fetch(`${n}/list?${r}`,{cache:`no-cache`,signal:t.signal});if(!i.ok)throw Error(`The listing failed (${i.status}).`);let a=Number(i.headers.get(`x-listing-total`)??0),o=Number.parseInt((i.headers.get(`etag`)??``).replaceAll(`"`,``),16)||0;return P(await i.arrayBuffer(),a,o)}function P(e,t,n){let r=new DataView(e);if(e.byteLength<ye||r.getUint32(0,!0)!==_e)throw Error(`Not a listing block.`);if(r.getUint16(4,!0)!==ve)throw Error(`This build cannot read that listing version.`);let i=r.getUint32(8,!0),a=r.getUint32(12,!0),o=r.getUint32(16,!0),s=r.getUint32(20,!0),c=r.getUint32(24,!0),l=!!(r.getUint16(6,!0)&1),u=ye,d=(t,n)=>{let r=new t(e,u,i);return u+=n*i,r},f=d(Float64Array,8),p=d(Float64Array,8),m=d(Float64Array,8),h=d(Uint32Array,4),ee=d(Uint16Array,2),g=d(Uint16Array,2),_=d(Uint16Array,2),te=d(Uint8Array,1),v=d(Uint8Array,1),y=[];for(let e=0;e<s;e++)y.push({offset:r.getUint32(u,!0),length:r.getUint16(u+4,!0)}),u+=6;let b=new Map;for(let e=0;e<c;e++)b.set(r.getUint32(u,!0),{offset:r.getUint32(u+4,!0),length:r.getUint16(u+8,!0)}),u+=10;let x=new Uint8Array(e,u,a),ne=new TextDecoder,S=(e,t)=>ne.decode(x.subarray(e,e+t)),C=S(0,o),w=C.includes(`\\`)?`\\`:`/`,T=y.map(e=>S(e.offset,e.length)),E=Array(i);for(let e=0;e<i;e++){let t=te[e],n=S(h[e],ee[e]),r=_[e]===N?void 0:b.get(e),i=l?n:C.endsWith(w)?C+n:C+w+n,a=l?n.slice(Math.max(n.lastIndexOf(`/`),n.lastIndexOf(`\\`))+1):n;E[e]={name:a,fullPath:i,isDirectory:(t&be)!==0,size:f[e],modified:p[e],isHidden:(t&xe)!==0,isSystem:(t&Se)!==0,iconSource:g[e]===N?null:T[g[e]]??null,created:m[e],linkTarget:r?S(r.offset,r.length):null,linkValid:_[e]===N?null:(t&we)!==0,linkCount:v[e],isEncrypted:(t&Ce)!==0||null}}return{path:C,signature:n,total:t,entries:E}}async function Ee(e,t,n=!1,r){let i=await M();if(!i)throw Error(`The data server is not running.`);let a=new URLSearchParams({offset:String(e),count:String(t)});n&&a.set(`refresh`,`1`);let o=await fetch(`${i}/gallery?${a}`,{cache:`no-cache`,signal:r});if(!o.ok)throw Error(`The gallery failed (${o.status}).`);let s=Number(o.headers.get(`x-listing-total`)??0);return{entries:P(await o.arrayBuffer(),s,0).entries.map(e=>({path:e.fullPath,name:e.name,modified:e.modified,size:e.size})),total:s}}var F=null;async function I(){if(!o.available)throw Error(`Settings need the host.`);return F??=await s(),F}function De(){if(!F)throw Error(`The settings defaults have not been loaded yet.`);return F}async function Oe(){let e=await I();return ke(await o.request(`settings.get`),e)}function ke(e,t){let n=Object.fromEntries(Object.entries(e??{}).filter(([,e])=>e!=null)),r={...t,...n};return r.defaultView=e?.defaultView?{...t.defaultView??{},...e.defaultView}:t.defaultView,r.themeMode=f(r.themeMode),r}async function Ae(){return o.available?(await I()).protectedPaths:[]}var L={registered:!1,pathMatches:!1,registeredPath:null},je={registered:!1,pathMatches:!1,registeredPath:null};async function Me(){return o.available?await o.request(`app.defaultManager.status`):je}async function Ne(e){return o.available?await o.request(`app.defaultManager.set`,{enabled:e}):je}async function Pe(){return o.available?await o.request(`app.archive.status`):L}async function Fe(){return o.available?await o.request(`app.archive.register`):L}async function Ie(){return o.available?await o.request(`app.archive.unregister`):L}async function Le(e){if(!o.available)return e;let t=await o.request(`settings.save`,e),n=Object.fromEntries(Object.entries(t??{}).filter(([,e])=>e!=null));return{...e,...n}}async function Re(e,t){o.available&&await o.request(`app.tabs.set`,{tabs:e,active:t})}async function ze(e,t,n){return o.available?(await o.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var Be=new l({baseMessage:`app.data`});function Ve(){return De().defaultView}function He(){let e=Ve();return{mode:e.mode,iconSize:e.iconSize,gridSize:e.gridSize,sort:e.sort,sortDescending:e.sortDescending}}async function Ue(e,t){return o.available?await o.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function We(e){return o.available?(await o.request(`fs.open`,{path:e})).ok:!1}async function Ge(e,t=!0,n=!1,r=0,i,a){return await o.request(`fs.list.meta`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i,id:a??null})}async function Ke(e,t=!0,n=!1,r=0,i,a){if(e&&h(e))return await o.request(`fs.list`,{path:e,sizes:t,includeLinks:n,codePage:r,password:i,id:a??null});let s=await Ge(e,t,n,r,i,a),c=await Te(s.path,{count:400,sort:s.view?.sort??`name`,descending:s.view?.sortDescending??!1});return{...s,entries:c.entries,ordered:!0}}async function qe(e,t,n,r,i){let a=await Te(e,{from:t,count:400,sort:n,descending:r,signal:i});return{entries:a.entries,total:a.total}}async function Je(e){return o.available?(await o.request(`fs.archive.force`,{path:e})).ok:!1}async function Ye(e,t,n=0,r,i=!1){let a=await o.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r,deleteAfter:i});for(let s=0;s<2&&a.required&&a.token&&a.protected?.length;s++){if(!await v({hits:a.protected,delaySeconds:a.delaySeconds??5,action:`write`}))return{ok:!1,error:null,cancelled:!0};a=await o.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r,deleteAfter:i,confirm:a.token})}return{ok:a.ok,error:a.error}}async function Xe(e,t=0,n){return await o.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function Ze(e){o.available&&e.length!==0&&await o.request(`fs.archive.release`,{paths:e})}async function Qe(e){return o.available?await o.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function $e(e,t){return o.available?(await o.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function et(e,t,n,r){return o.available?(await o.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function tt(e,t=!1){return o.available?await o.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function nt(){return(await o.request(`fs.places`)).places}async function rt(){return(await o.request(`fs.drives`)).drives}async function it(e=!1){try{return(await Be.readBlock(`/recycle?orphans=${+!!e}`)).rows.map(e=>({id:String(e.id),name:String(e.name),originalPath:String(e.originalPath),size:Number(e.size),deleted:Number(e.deleted),isDirectory:Number(e.isDirectory)!==0,isOrphan:Number(e.isOrphan)!==0,owner:typeof e.owner==`string`&&e.owner.length>0?e.owner:null,removable:Number(e.removable)!==0,contentPath:String(e.contentPath)}))}catch{return(await o.request(`fs.recycle`,{includeOrphans:e})).entries}}async function at(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await v({hits:r.protected,delaySeconds:r.delaySeconds??5,action:`delete`,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await o.request(e,{...t,confirm:r.token})}return r}async function ot(e=!1){let t=await o.request(`fs.recycle.empty`,{includeOrphans:e});return await at(`fs.recycle.empty`,{includeOrphans:e},t)}async function st(e){return!o.available||e.length===0?{ok:!1,done:0}:await o.request(`fs.recycle.restoreMany`,{ids:e})}async function ct(e){if(!o.available||e.length===0)return{ok:!1,done:0};let t=await o.request(`fs.recycle.deleteMany`,{ids:e}),n=await at(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function lt(e){o.available&&e&&await o.request(`fs.recycle.properties`,{id:e})}async function ut(){if(!o.available)return{entries:[],cancelled:!0,failed:!1};let e=await o.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function dt(){return o.available?(await o.request(`fs.recycle.admin.purge`)).ok:!1}async function ft(){return o.available?(await o.request(`fs.recent`)).entries:[]}async function pt(){return o.available?(await o.request(`fs.frequent`)).entries:[]}async function mt(e){o.available&&await o.request(`fs.frequent.record`,{path:e})}async function ht(){await o.request(`fs.recent.clear`)}async function gt(){await o.request(`fs.frequent.clear`)}async function _t(){return await o.request(`fs.visibility`)}async function vt(){return await o.request(`fs.hidden.toggle`)}async function yt(e){return await o.request(`fs.hidden.set`,{show:e})}async function bt(){return o.available?await o.request(`fs.index.tasks`):{count:0,directories:[]}}var xt={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},St={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function Ct(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=Tt(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=Et(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var wt=`\0`,R=``;function Tt(e){return e.query!==wt&&(wt=e.query,R=e.query.toLowerCase()),R}var z=`\0`,B=null;function Et(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===z)return B;z=t;try{B=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{B=null}return B}function Dt(e,t){return Ct(e,t)!==null}var Ot=Date.now(),V=new Set,H=null,kt=()=>{Ot=Date.now();for(let e of V)e()};function At(e){return V.add(e),H===null&&(H=window.setInterval(kt,1e3)),()=>{V.delete(e),V.size===0&&H!==null&&(window.clearInterval(H),H=null)}}function jt(){return Ot}var U=t();function Mt({value:e}){let t=(0,w.useSyncExternalStore)(At,jt);return(0,U.jsx)(U.Fragment,{children:d(e,t)})}var W=new Map,G=new Map,K=0;function Nt(){try{let e=new URLSearchParams(window.location.search).get(`state`);if(!e)return;let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=Uint8Array.from(atob(t),e=>e.charCodeAt(0)),r=JSON.parse(new TextDecoder().decode(n));for(let[e,t]of Object.entries(r))typeof t==`string`&&W.set(e,t)}catch{}}function Pt(e){return o.available?W.get(e)??null:localStorage.getItem(e)}function Ft(e,t){o.available?(W.set(e,t),G.set(e,t),window.clearTimeout(K),K=window.setTimeout(It,200)):localStorage.setItem(e,t)}function It(){if(K=0,G.size===0)return;let e=Object.fromEntries(G);G.clear(),o.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function Lt(){if(G.size===0)return;let e=Object.fromEntries(G);G.clear(),o.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function Rt(e,t){let n=Pt(e);if(n===null||n===``)return t;let r=Number(n);return Number.isFinite(r)?r:t}function zt(e,t){Ft(e,String(t))}function Bt(e){try{return JSON.parse(Pt(e)??`null`)}catch{return null}}function Vt(e,t){Ft(e,JSON.stringify(t))}var q=null,J=null;function Ht(e){q=e}function Ut(e){return q?q(e):Promise.resolve()}function Wt(e){J=e}function Gt(e,t=!1){return J?J(e,t):Promise.resolve(null)}var Kt=p(),qt=i`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,Jt=n`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Yt=n`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Xt=n`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Zt=n`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Qt=n`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,$t=n`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,en=n`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,tn=n`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,nn=i`animation: ${Jt} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,rn=i`animation: ${Yt} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,an=i`animation: ${Xt} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;i`animation: ${Zt} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var on=i`animation: ${Qt} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,sn=i`animation: ${$t} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,cn=i`animation: ${en} 140ms ease-out;`,ln=i`animation: ${tn} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function un({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,w.useState)([]),s=(0,w.useRef)(void 0);if((0,w.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,w.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,U.jsx)(X,{},`group-rule-${i}`)),n.push((0,U.jsx)(vn,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,U.jsx)(X,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,U.jsxs)(hn,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.tooltip??e.label,type:`button`,children:[(0,U.jsx)(gn,{children:e.loading?(0,U.jsx)(yn,{}):e.icon}),(0,U.jsx)(_n,{children:e.label}),a?(0,U.jsx)(g,{size:12}):e.checked&&(0,U.jsx)(ee,{size:12})]},`${e.label}-${i}`))}),n};return(0,Kt.createPortal)((0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(Y,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(dn,{children:r.map((e,t)=>(0,U.jsxs)(fn,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,U.jsx)(pn,{children:e.icon}),(0,U.jsx)(mn,{children:e.label})]},`${e.label}-${t}`))}),(0,U.jsx)(X,{})]}),m(n,0)]}),a.map((e,t)=>(0,U.jsx)(Y,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var Y=c.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${qt}
    ${rn}
    transform-origin: top left;
`,dn=c.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,fn=c.button`
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
`,pn=c.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,mn=c.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,hn=c.button`
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
`,gn=c.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,_n=c.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,vn=c.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,X=c.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,yn=c.span`
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
`;function bn({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:o,onCancel:s}){let c=a(),l=(0,w.useRef)(null);return(0,w.useEffect)(()=>{if(!e)return;l.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),s()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,s]),e?(0,Kt.createPortal)((0,U.jsx)(xn,{onPointerDown:e=>{e.target===e.currentTarget&&s()},children:(0,U.jsxs)(Sn,{role:`alertdialog`,"aria-modal":`true`,children:[(0,U.jsx)(Cn,{children:t}),(0,U.jsx)(wn,{children:n}),(0,U.jsxs)(Tn,{children:[(0,U.jsx)(En,{onClick:s,type:`button`,children:c(`cancel`)}),(0,U.jsx)(En,{$danger:i,onClick:o,ref:l,type:`button`,children:r})]})]})}),document.body):null}var xn=c.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${cn}
`,Sn=c.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${nn}
`,Cn=c.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,wn=c.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    /* Long paths have no spaces, so they have to be broken inside the card. */
    overflow-wrap: anywhere;
    word-break: break-word;
`,Tn=c.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,En=c.button`
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
`,Z=new Map,Q=new Set,Dn=0;function On(){Dn+=1;for(let e of Q)e()}function kn(e,t){t?Z.set(e,t):Z.delete(e),On()}function An(e){return Z.has(e)}function jn(e,t,n){Z.get(e)?.(t,n)}function Mn(e){return Q.add(e),()=>Q.delete(e)}function $(){return Dn}function Nn(e){return(0,w.useSyncExternalStore)(Mn,$,$),{available:An(e),open:(t,n)=>jn(e,t,n)}}function Pn(e){return[...Z.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function Fn(e){return(0,w.useSyncExternalStore)(Mn,$,$),{available:Pn(e).length>0,open:(t,n)=>{let r=Pn(e).at(-1);r&&jn(r,t,n)}}}export{dt as $,Ct as A,pe as At,_t as B,zt as C,ie as Ct,xt as D,de as Dt,At as E,le as Et,ct as F,v as Ft,bt as G,tt as H,ot as I,te as It,nt as J,ut as K,Ye as L,ht as M,x as Mt,He as N,C as Nt,St as O,he as Ot,Ve as P,ne as Pt,Qe as Q,Xe as R,Vt as S,Ee as St,jt as T,ue as Tt,rt as U,Ke as V,pt as W,it as X,ft as Y,We as Z,Ut as _,Re as _t,un as a,et as at,Bt as b,ze as bt,an as c,vt as ct,on as d,Pe as dt,mt as et,ln as f,Me as ft,Wt as g,Fe as gt,Ht as h,Oe as ht,bn as i,$e as it,gt as j,S as jt,Dt as k,ge as kt,sn as l,Be as lt,Gt as m,I as mt,Nn as n,Ue as nt,cn as o,yt as ot,qt as p,Ae as pt,qe as q,Fn as r,st as rt,rn as s,lt as st,kn as t,Ze as tt,nn as u,De as ut,Lt as v,Le as vt,Mt as w,ae as wt,Rt as x,Ie as xt,Nt as y,Ne as yt,Je as z};