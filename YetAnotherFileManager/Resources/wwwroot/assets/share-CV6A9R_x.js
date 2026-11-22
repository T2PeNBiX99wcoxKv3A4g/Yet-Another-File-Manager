import{O as e,p as t,r as n}from"./theme-DIZkp4eN.js";import{E as r,M as i,O as a,S as o,k as s,m as c}from"./dist-B10j17-y.js";var l=i(s(),1),u=e(),ee=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),d=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),f=(e,t)=>e>>>t|e<<32-t;function p(e,t,n,r){for(let e=0;e<16;e++)r[e]=t.getUint32(n+e*4);for(let e=16;e<64;e++){let t=f(r[e-15],7)^f(r[e-15],18)^r[e-15]>>>3,n=f(r[e-2],17)^f(r[e-2],19)^r[e-2]>>>10;r[e]=r[e-16]+t+r[e-7]+n>>>0}let[i,a,o,s,c,l,u,d]=e;for(let e=0;e<64;e++){let t=f(c,6)^f(c,11)^f(c,25),n=c&l^~c&u,p=d+t+n+ee[e]+r[e]>>>0,m=(f(i,2)^f(i,13)^f(i,22))+(i&a^i&o^a&o)>>>0;d=u,u=l,l=c,c=s+p>>>0,s=o,o=a,a=i,i=p+m>>>0}e[0]=e[0]+i>>>0,e[1]=e[1]+a>>>0,e[2]=e[2]+o>>>0,e[3]=e[3]+s>>>0,e[4]=e[4]+c>>>0,e[5]=e[5]+l>>>0,e[6]=e[6]+u>>>0,e[7]=e[7]+d>>>0}function m(e){let t=e.length*8,n=e.length+9+63>>6<<6,r=new Uint8Array(n);r.set(e),r[e.length]=128;let i=new DataView(r.buffer);i.setUint32(n-8,Math.floor(t/4294967296)),i.setUint32(n-4,t>>>0);let a=new Uint32Array(d),o=new Uint32Array(64);for(let e=0;e<n;e+=64)p(a,i,e,o);let s=new Uint8Array(32),c=new DataView(s.buffer);for(let e=0;e<8;e++)c.setUint32(e*4,a[e]);return s}function h(e,t){let n=new Uint8Array(64);n.set(e.length>64?m(e):e);let r=new Uint8Array(64+t.length);for(let e=0;e<64;e++)r[e]=n[e]^54;r.set(t,64);let i=new Uint8Array(96);for(let e=0;e<64;e++)i[e]=n[e]^92;return i.set(m(r),64),m(i)}function g(e){let t=new Uint8Array(64);t.set(e.length>64?m(e):e);let n=new Uint8Array(64),r=new Uint8Array(64);for(let e=0;e<64;e++)n[e]=t[e]^54,r[e]=t[e]^92;return e=>{let t=new Uint8Array(64+e.length);t.set(n),t.set(e,64);let i=m(t),a=new Uint8Array(96);return a.set(r),a.set(i,64),m(a)}}function _(e,t,n){let r=g(new TextEncoder().encode(e)),i=new Uint8Array(t.length+4);i.set(t),i[t.length+3]=1;let a=r(i),o=new Uint8Array(a);for(let e=1;e<n;e++){a=r(a);for(let e=0;e<o.length;e++)o[e]^=a[e]}return o}function v(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}function y(e){let t=``;for(let n of e)t+=String.fromCharCode(n);return btoa(t)}function te(e,t,n,r){let i=v(t),a;if(r>0)a=_(e,i,r);else{let t=new TextEncoder().encode(e),n=new Uint8Array(i.length+t.length);n.set(i),n.set(t,i.length),a=m(n)}return y(h(a,v(n)))}var ne=[{id:`en`,label:`English`},{id:`ja`,label:`日本語`},{id:`zh-CN`,label:`简体中文`},{id:`zh-TW`,label:`繁體中文`}],b={sharedFolders:`Shared folders`,noShares:`No folders are shared over the web on this device.`,reading:`reading`,empty:`This folder is empty.`,upload:`Upload`,uploading:`Uploading…`,refresh:`Refresh`,up:`Up one folder`,name:`Name`,size:`Size`,modified:`Modified`,footnote:`Click a file to download it. Uploaded files are written into the folder you are viewing.`,showHidden:`Show hidden files`,showSystem:`Show system files`,language:`Language`,download:`Download`,error:`Something went wrong.`,checkingAccess:`Checking access…`,waitingForApproval:`Waiting for approval on the device that shares these folders.`,accessDenied:`This device is not allowed to open the share.`,retryIn:`Try again in {seconds} seconds.`,tryAgain:`Try again`,password:`Share password`,unlock:`Unlock`,wrongPassword:`That password did not match. Try again after the wait.`,accessTitle:`Web share access`,passwordNote:`Enter the share password to open these folders. This device is then remembered.`},x={en:b,ja:{sharedFolders:`共有フォルダー`,noShares:`この端末では Web で共有しているフォルダーがありません。`,reading:`読み込み中…`,empty:`このフォルダーは空です。`,upload:`アップロード`,uploading:`アップロード中…`,refresh:`更新`,up:`上の階層へ`,name:`名前`,size:`サイズ`,modified:`更新日時`,footnote:`ファイルをクリックするとダウンロードします。アップロードしたファイルは表示中のフォルダーに保存されます。`,showHidden:`隠しファイルを表示`,showSystem:`システムファイルを表示`,language:`言語`,download:`ダウンロード`,error:`問題が発生しました。`,checkingAccess:`アクセスを確認しています…`,waitingForApproval:`共有元のデバイスで承認を待っています。`,accessDenied:`このデバイスは共有を開くことを許可されていません。`,retryIn:`{seconds} 秒後にもう一度お試しください。`,tryAgain:`再試行`,password:`共有パスワード`,unlock:`ロック解除`,wrongPassword:`パスワードが一致しません。待ってからもう一度お試しください。`,accessTitle:`Web 共有アクセス`,passwordNote:`これらのフォルダーを開くには共有パスワードを入力してください。このデバイスは記憶されます。`},"zh-CN":{sharedFolders:`共享文件夹`,noShares:`此设备没有通过网页共享任何文件夹。`,reading:`读取中…`,empty:`此文件夹是空的。`,upload:`上传`,uploading:`上传中…`,refresh:`刷新`,up:`上一级`,name:`名称`,size:`大小`,modified:`修改时间`,footnote:`点击文件即可下载。上传的文件会写入当前浏览的文件夹。`,showHidden:`显示隐藏文件`,showSystem:`显示系统文件`,language:`语言`,download:`下载`,error:`发生错误。`,checkingAccess:`正在检查访问权限…`,waitingForApproval:`正在等待分享端设备批准。`,accessDenied:`此设备没有打开分享的权限。`,retryIn:`请在 {seconds} 秒后重试。`,tryAgain:`重试`,password:`分享密码`,unlock:`解锁`,wrongPassword:`密码不正确，请等待后再试。`,accessTitle:`Web 分享访问`,passwordNote:`输入分享密码即可打开这些文件夹，稍后会记住此设备。`},"zh-TW":{sharedFolders:`共享資料夾`,noShares:`此裝置沒有透過網頁分享任何資料夾。`,reading:`讀取中…`,empty:`此資料夾是空的。`,upload:`上傳`,uploading:`上傳中…`,refresh:`重新整理`,up:`上一層`,name:`名稱`,size:`大小`,modified:`修改時間`,footnote:`點擊檔案即可下載。上傳的檔案會寫入目前瀏覽的資料夾。`,showHidden:`顯示隱藏檔案`,showSystem:`顯示系統檔案`,language:`語言`,download:`下載`,error:`發生錯誤。`,checkingAccess:`正在檢查存取權限…`,waitingForApproval:`正在等待分享端裝置核准。`,accessDenied:`此裝置沒有開啟分享的權限。`,retryIn:`請在 {seconds} 秒後重試。`,tryAgain:`重試`,password:`分享密碼`,unlock:`解鎖`,wrongPassword:`密碼不正確，請等待後再試。`,accessTitle:`Web 分享存取`,passwordNote:`輸入分享密碼即可開啟這些資料夾，之後會記住此裝置。`}};function re(){try{let e=localStorage.getItem(`yafm.share.language`);if(e&&e in x)return e}catch{}return S(navigator.language)}function S(e){let t=(e??``).toLowerCase();return t.startsWith(`ja`)?`ja`:t.startsWith(`zh`)?t.includes(`tw`)||t.includes(`hk`)||t.includes(`hant`)?`zh-TW`:`zh-CN`:`en`}function ie(){try{return localStorage.getItem(`yafm.share.language`)!==null}catch{return!1}}function ae(e){return x[e]??b}function oe(e){try{localStorage.setItem(`yafm.share.language`,e)}catch{}}var C=o(),se=r`
    html.share-web,
    html.share-web body,
    html.share-web #share-root {
        height: auto;
        min-height: 100%;
        overflow: auto;
    }

    html.share-web body {
        background: var(--bg-primary);
    }

    html.share-web {
        --panel-alpha: 0.92;
    }
`;function ce(e){try{return localStorage.getItem(e)===`1`}catch{return!1}}function w(e,t){try{localStorage.setItem(e,t?`1`:`0`)}catch{}}function T(){let[e,r]=(0,l.useState)(re),i=ae(e),[a,o]=(0,l.useState)(null),s=c(`system`),[u,ee]=(0,l.useState)([]),[d,f]=(0,l.useState)(null),[p,m]=(0,l.useState)(null),[h,g]=(0,l.useState)(!0),[_,v]=(0,l.useState)(!1),[y,b]=(0,l.useState)(null),[x,T]=(0,l.useState)(null),[O,k]=(0,l.useState)(``),[A,j]=(0,l.useState)(!1),[M,N]=(0,l.useState)(!1),[P,U]=(0,l.useState)(0),W=(0,l.useRef)(!1),[G,nt]=(0,l.useState)(()=>ce(`yafm.share.hidden`)),[K,rt]=(0,l.useState)(()=>ce(`yafm.share.system`)),[q,it]=(0,l.useState)(()=>{try{let e=JSON.parse(localStorage.getItem(`yafm.share.sort`)??`null`);if(e&&[`name`,`size`,`modified`].includes(e.column))return e}catch{}return{column:`name`,descending:!1}}),J=(0,l.useRef)(null);(0,l.useEffect)(()=>{document.documentElement.lang=e},[e]),(0,l.useEffect)(()=>{a&&n(a.accent,a.secondary,s)},[a,s]);let at=async()=>{try{let e=await E(`/api/config`);o(e),document.title=`${e.device} · ${e.app}`,!ie()&&e.language&&r(S(e.language))}catch{}try{let e=await E(`/api/shares`);ee(e.shares),f(t=>t??e.shares[0]?.id??null),e.shares.length===0&&g(!1)}catch(e){g(!1),b(D(e))}},Y=async()=>{try{let e=await E(`/api/access/state`);return T(e),e}catch{return null}};(0,l.useEffect)(()=>{(async()=>{(await Y())?.state===`allowed`?(W.current=!0,await at()):g(!1)})()},[]),(0,l.useEffect)(()=>{if(x){if(x.state===`pending`){let e=window.setInterval(()=>void Y(),2e3);return()=>window.clearInterval(e)}if(x.state===`denied`){U(x.retryAfter??0);let e=window.setInterval(()=>U(e=>Math.max(0,e-1)),1e3);return()=>window.clearInterval(e)}x.state===`password`&&N(!1),x.state===`allowed`&&!W.current&&(W.current=!0,at())}},[x?.state,x?.retryAfter]);let ot=async e=>{if(e.preventDefault(),x?.salt&&x.nonce&&!A&&O.length!==0){j(!0),N(!1),await new Promise(e=>requestAnimationFrame(()=>e(null)));try{let e=new URLSearchParams({nonce:x.nonce,proof:te(O,x.salt,x.nonce,x.iterations??0)}),t=await(await fetch(`/api/access/password`,{method:`POST`,headers:{"Content-Type":`application/x-www-form-urlencoded`},body:e})).json();k(``),T(t),t.state!==`allowed`&&N(!0)}catch{N(!0)}finally{j(!1)}}},X=async(e,t,n=G,r=K)=>{g(!0),b(null);try{let i=await E(`/api/browse/${encodeURIComponent(e)}?path=${encodeURIComponent(t)}&hidden=${+!!n}&system=${+!!r}`);m(i)}catch(e){b(D(e)),m(null)}finally{g(!1)}};(0,l.useEffect)(()=>{d&&X(d,``)},[d]);let st=e=>{f(e),m(null)},ct=e=>{nt(e),w(`yafm.share.hidden`,e),d&&X(d,p?.path??``,e,K)},lt=e=>{rt(e),w(`yafm.share.system`,e),d&&X(d,p?.path??``,G,e)},Z=e=>{let t=q.column===e?{column:e,descending:!q.descending}:{column:e,descending:!1};it(t);try{localStorage.setItem(`yafm.share.sort`,JSON.stringify(t))}catch{}},ut=(0,l.useMemo)(()=>{let e=[...p?.entries??[]],t=q.descending?-1:1;return e.sort((e,n)=>e.isDirectory===n.isDirectory?(q.column===`name`?e.name.localeCompare(n.name,void 0,{numeric:!0,sensitivity:`base`}):q.column===`size`?e.size-n.size:e.modified-n.modified)*t:e.isDirectory?-1:1)},[p,q]),dt=async e=>{if(d&&e&&e.length!==0){v(!0),b(null);try{let t=new FormData;for(let n of e)t.append(`files`,n);let n=await fetch(`/api/upload/${encodeURIComponent(d)}?path=${encodeURIComponent(p?.path??``)}`,{method:`POST`,body:t});if(!n.ok)throw Error(await le(n));await X(d,p?.path??``)}catch(e){b(D(e))}finally{v(!1),J.current&&(J.current.value=``)}}},Q=p?.path??``,$=Q.split(`/`).filter(Boolean);return x?.state===`allowed`?(0,C.jsxs)(L,{children:[(0,C.jsx)(se,{}),(0,C.jsxs)(ke,{children:[(0,C.jsxs)(Ae,{children:[(0,C.jsxs)(Pe,{children:[(0,C.jsx)(R,{children:(0,C.jsx)(`img`,{alt:``,src:`/app-icon`})}),(0,C.jsxs)(Fe,{children:[(0,C.jsx)(`h1`,{children:a?.device??i.sharedFolders}),(0,C.jsxs)(`span`,{children:[a?.app??`Yet Another File Manager`,a?.version?` · v${a.version}`:``]})]})]}),(0,C.jsx)(je,{children:(0,C.jsxs)(Me,{title:i.language,children:[(0,C.jsx)(he,{size:14}),(0,C.jsx)(Ne,{"aria-label":i.language,onChange:e=>{let t=e.target.value;r(t),oe(t)},title:i.language,value:e,children:ne.map(e=>(0,C.jsx)(`option`,{value:e.id,children:e.label},e.id))})]})})]}),(0,C.jsx)(Ie,{children:u.map(e=>(0,C.jsxs)(Le,{$active:e.id===d,onClick:()=>st(e.id),type:`button`,children:[(0,C.jsx)(fe,{size:13}),e.name]},e.id))})]}),(0,C.jsxs)(Re,{children:[y&&(0,C.jsx)(ze,{children:y}),u.length===0?(0,C.jsx)(H,{children:i.noShares}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(Be,{children:[(0,C.jsxs)(Ve,{children:[(0,C.jsx)(z,{onClick:()=>d&&void X(d,``),type:`button`,children:p?.name??i.sharedFolders}),$.map((e,t)=>(0,C.jsxs)(He,{children:[(0,C.jsx)(Ue,{children:`/`}),(0,C.jsx)(z,{$last:t===$.length-1,onClick:()=>d&&void X(d,$.slice(0,t+1).join(`/`)),type:`button`,children:e})]},`${e}-${t}`))]}),(0,C.jsxs)(We,{children:[(0,C.jsxs)(Ge,{title:i.showHidden,children:[(0,C.jsx)(ge,{size:13}),(0,C.jsx)(`input`,{checked:G,onChange:e=>ct(e.currentTarget.checked),type:`checkbox`}),i.showHidden]}),(0,C.jsxs)(Ge,{title:i.showSystem,children:[(0,C.jsx)(_e,{size:13}),(0,C.jsx)(`input`,{checked:K,onChange:e=>lt(e.currentTarget.checked),type:`checkbox`}),i.showSystem]}),Q.length>0&&(0,C.jsx)(Ke,{onClick:()=>d&&void X(d,$.slice(0,-1).join(`/`)),title:i.up,type:`button`,children:(0,C.jsx)(be,{size:15})}),(0,C.jsx)(Ke,{disabled:h,onClick:()=>d&&void X(d,Q),title:i.refresh,type:`button`,children:(0,C.jsx)(ve,{size:15})}),(0,C.jsxs)(qe,{disabled:_||!p,onClick:()=>J.current?.click(),title:i.upload,type:`button`,children:[(0,C.jsx)(ye,{size:14}),_?i.uploading:i.upload]}),(0,C.jsx)(`input`,{hidden:!0,multiple:!0,onChange:e=>void dt(e.currentTarget.files),ref:J,type:`file`})]})]}),(0,C.jsxs)(Je,{children:[(0,C.jsx)(Xe,{children:[`name`,`size`,`modified`].map(e=>(0,C.jsxs)(Ze,{$active:q.column===e,onClick:()=>Z(e),type:`button`,children:[e===`name`?i.name:e===`size`?i.size:i.modified,(0,C.jsx)(V,{children:q.column===e?q.descending?`▼`:`▲`:``})]},e))}),h&&!p?(0,C.jsx)(H,{children:i.reading}):ut.length>0?(0,C.jsxs)(Ye,{children:[(0,C.jsx)(`thead`,{children:(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(`th`,{children:(0,C.jsxs)(B,{onClick:()=>Z(`name`),type:`button`,children:[i.name,(0,C.jsx)(V,{children:q.column===`name`?q.descending?`▼`:`▲`:``})]})}),(0,C.jsx)(`th`,{children:(0,C.jsxs)(B,{onClick:()=>Z(`size`),type:`button`,children:[i.size,(0,C.jsx)(V,{children:q.column===`size`?q.descending?`▼`:`▲`:``})]})}),(0,C.jsx)(`th`,{children:(0,C.jsxs)(B,{onClick:()=>Z(`modified`),type:`button`,children:[i.modified,(0,C.jsx)(V,{children:q.column===`modified`?q.descending?`▼`:`▲`:``})]})})]})}),(0,C.jsx)(`tbody`,{children:ut.map(n=>(0,C.jsxs)(`tr`,{children:[(0,C.jsx)(`td`,{children:n.isDirectory?(0,C.jsxs)(Qe,{onClick:()=>d&&void X(d,n.path),type:`button`,children:[(0,C.jsx)(fe,{size:16}),(0,C.jsx)(et,{children:n.name})]}):(0,C.jsxs)($e,{href:ue(d??``,n.path),title:`${i.download} ${n.name}`,children:[(0,C.jsx)(pe,{name:n.name,size:16}),(0,C.jsx)(et,{children:n.name})]})}),(0,C.jsx)(`td`,{"data-label":i.size,children:n.isDirectory?`—`:t(n.size)}),(0,C.jsx)(`td`,{"data-label":i.modified,children:de(n.modified,e)})]},n.path))})]}):(0,C.jsx)(H,{children:h?i.reading:i.empty})]}),(0,C.jsx)(tt,{children:i.footnote})]})]})]}):(0,C.jsxs)(L,{children:[(0,C.jsx)(se,{}),(0,C.jsx)(xe,{children:(0,C.jsxs)(Se,{children:[(0,C.jsx)(R,{children:(0,C.jsx)(`img`,{alt:``,src:`/app-icon`})}),(0,C.jsxs)(Ce,{children:[(0,C.jsx)(me,{size:15}),i.accessTitle]}),!x&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(F,{children:i.checkingAccess}),(0,C.jsx)(I,{onClick:()=>void Y(),children:i.tryAgain})]}),x?.state===`pending`&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(F,{children:i.waitingForApproval}),(0,C.jsx)(we,{children:x.device??``})]}),x?.state===`denied`&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(F,{children:M?i.wrongPassword:i.accessDenied}),(0,C.jsx)(F,{children:i.retryIn.replace(`{seconds}`,String(P))}),(0,C.jsx)(I,{disabled:P>0,onClick:()=>void Y(),children:i.tryAgain})]}),x?.state===`password`&&(0,C.jsxs)(Te,{onSubmit:e=>void ot(e),children:[(0,C.jsx)(F,{children:i.passwordNote}),(0,C.jsx)(Ee,{htmlFor:`share-password`,children:i.password}),(0,C.jsx)(De,{autoFocus:!0,id:`share-password`,onChange:e=>k(e.target.value),type:`password`,value:O}),(0,C.jsx)(I,{disabled:A||O.length===0,type:`submit`,children:A?i.checkingAccess:i.unlock}),M&&(0,C.jsx)(Oe,{children:i.wrongPassword})]})]})})]})}async function E(e){let t=await fetch(e);if(!t.ok)throw Error(await le(t));return await t.json()}async function le(e){try{return(await e.json()).error??e.statusText}catch{return e.statusText}}function ue(e,t){return`/file/${encodeURIComponent(e)}/${t.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`)}`}function D(e){return e instanceof Error?e.message:String(e)}function de(e,t){if(!e)return`—`;let n=t===`zh-CN`?`zh-CN`:t===`zh-TW`?`zh-TW`:t;return new Intl.DateTimeFormat(n,{dateStyle:`medium`,timeStyle:`short`}).format(new Date(e))}function fe({size:e}){return(0,C.jsx)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinejoin:`round`,strokeWidth:`1.5`,viewBox:`0 0 24 24`,width:e,children:(0,C.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17z`})})}var O={png:`image`,jpg:`image`,jpeg:`image`,gif:`image`,webp:`image`,avif:`image`,bmp:`image`,svg:`image`,tif:`image`,tiff:`image`,ico:`image`,heic:`image`,mp4:`video`,mkv:`video`,webm:`video`,mov:`video`,avi:`video`,wmv:`video`,mp3:`audio`,flac:`audio`,wav:`audio`,ogg:`audio`,m4a:`audio`,aac:`audio`,opus:`audio`,zip:`archive`,"7z":`archive`,rar:`archive`,tar:`archive`,gz:`archive`,xz:`archive`,zst:`archive`,bz2:`archive`,iso:`archive`,txt:`text`,md:`text`,json:`text`,xml:`text`,yml:`text`,yaml:`text`,toml:`text`,ini:`text`,cfg:`text`,csv:`text`,log:`text`,html:`text`,css:`text`,js:`text`,ts:`text`,tsx:`text`,cs:`text`,py:`text`,rs:`text`,go:`text`,java:`text`,kt:`text`};function pe({name:e,size:t}){let n=O[e.includes(`.`)?e.split(`.`).pop().toLowerCase():``];return n===`image`?(0,C.jsx)(k,{size:t}):n===`video`?(0,C.jsx)(A,{size:t}):n===`audio`?(0,C.jsx)(j,{size:t}):n===`archive`?(0,C.jsx)(M,{size:t}):n===`text`?(0,C.jsx)(N,{size:t}):(0,C.jsx)(P,{size:t})}function me({size:e}){return(0,C.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:`1.6`,viewBox:`0 0 24 24`,width:e,children:[(0,C.jsx)(`rect`,{height:`9`,rx:`2`,width:`14`,x:`5`,y:`11`}),(0,C.jsx)(`path`,{d:`M8 11V8a4 4 0 0 1 8 0v3`})]})}function he({size:e}){return(0,C.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeWidth:`1.5`,viewBox:`0 0 24 24`,width:e,children:[(0,C.jsx)(`circle`,{cx:`12`,cy:`12`,r:`8.5`}),(0,C.jsx)(`path`,{d:`M3.5 12h17M12 3.5c2.5 2.6 2.5 14.4 0 17M12 3.5c-2.5 2.6-2.5 14.4 0 17`})]})}function ge({size:e}){return(0,C.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeWidth:`1.5`,viewBox:`0 0 24 24`,width:e,children:[(0,C.jsx)(`path`,{d:`M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z`}),(0,C.jsx)(`circle`,{cx:`12`,cy:`12`,r:`2.6`})]})}function _e({size:e}){return(0,C.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinejoin:`round`,strokeWidth:`1.5`,viewBox:`0 0 24 24`,width:e,children:[(0,C.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`}),(0,C.jsx)(`path`,{d:`M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2 2 2 0 1 1-4 0 1.7 1.7 0 0 0-2.9-1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 3 15a2 2 0 1 1 0-4 1.7 1.7 0 0 0 1.2-2.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.7 1.7 0 0 0 10 4.6a2 2 0 1 1 4 0 1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.7 1.7 0 0 0 21 11a2 2 0 1 1 0 4Z`})]})}function k({size:e}){return(0,C.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinejoin:`round`,strokeWidth:`1.5`,viewBox:`0 0 24 24`,width:e,children:[(0,C.jsx)(`rect`,{height:`15`,rx:`2.5`,width:`18`,x:`3`,y:`4.5`}),(0,C.jsx)(`circle`,{cx:`8.5`,cy:`9.5`,r:`1.5`}),(0,C.jsx)(`path`,{d:`m4 17 4.5-4.5L12 16l3-3 5 4.5`})]})}function A({size:e}){return(0,C.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinejoin:`round`,strokeWidth:`1.5`,viewBox:`0 0 24 24`,width:e,children:[(0,C.jsx)(`rect`,{height:`14`,rx:`2.5`,width:`18`,x:`3`,y:`5`}),(0,C.jsx)(`path`,{d:`m10 9.5 5 2.5-5 2.5z`})]})}function j({size:e}){return(0,C.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:`1.5`,viewBox:`0 0 24 24`,width:e,children:[(0,C.jsx)(`path`,{d:`M9 18V6l10-2v12`}),(0,C.jsx)(`circle`,{cx:`6.5`,cy:`18`,r:`2.5`}),(0,C.jsx)(`circle`,{cx:`16.5`,cy:`16`,r:`2.5`})]})}function M({size:e}){return(0,C.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinejoin:`round`,strokeWidth:`1.5`,viewBox:`0 0 24 24`,width:e,children:[(0,C.jsx)(`rect`,{height:`15`,rx:`2.5`,width:`16`,x:`4`,y:`4.5`}),(0,C.jsx)(`path`,{d:`M10 4.5v3M14 7.5v3M10 10.5v3M14 13.5v3`}),(0,C.jsx)(`path`,{d:`M9 19.5h6`})]})}function N({size:e}){return(0,C.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:`1.5`,viewBox:`0 0 24 24`,width:e,children:[(0,C.jsx)(`path`,{d:`M6 4.5h12v15H6z`}),(0,C.jsx)(`path`,{d:`M9 9h6M9 12.5h6M9 16h4`})]})}function P({size:e}){return(0,C.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinejoin:`round`,strokeWidth:`1.5`,viewBox:`0 0 24 24`,width:e,children:[(0,C.jsx)(`path`,{d:`M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 20V5A1.5 1.5 0 0 1 6 3.5Z`}),(0,C.jsx)(`path`,{d:`M14 3.5V8h4`})]})}function ve({size:e}){return(0,C.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:`1.6`,viewBox:`0 0 24 24`,width:e,children:[(0,C.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 6.7`}),(0,C.jsx)(`path`,{d:`M20 4v7h-7`})]})}function ye({size:e}){return(0,C.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.6`,viewBox:`0 0 24 24`,width:e,children:[(0,C.jsx)(`path`,{d:`M12 16V4`}),(0,C.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,C.jsx)(`path`,{d:`M5 16v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3`})]})}function be({size:e}){return(0,C.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.6`,viewBox:`0 0 24 24`,width:e,children:[(0,C.jsx)(`path`,{d:`M12 19V5`}),(0,C.jsx)(`path`,{d:`m6 11 6-6 6 6`})]})}var xe=a.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 24px;
`,Se=a.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(400px, 100%);
    padding: 26px;
    border: 1px solid var(--border-color);
    border-radius: 16px;
    background: rgba(var(--bg-rgb), 0.94);
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.35);
`,Ce=a.h1`
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: var(--text-primary);
`,F=a.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 13px;
    line-height: 1.5;
`,we=a.span`
    color: var(--text-secondary);
    font-size: 12px;
`,Te=a.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 4px;
`,Ee=a.label`
    color: var(--text-muted);
    font-size: 12px;
`,De=a.input`
    width: 100%;
    height: 34px;
    padding: 0 10px;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 13px;

    &:focus {
        border-color: var(--border-color-focus);
        outline: 0;
    }
`,I=a.button`
    height: 34px;
    padding: 0 16px;
    border: 0;
    border-radius: 8px;
    background: var(--accent-gradient);
    color: #fff;
    font: inherit;
    font-size: 13px;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`,Oe=a.p`
    margin: 0;
    color: var(--danger);
    font-size: 12px;
`,L=a.div`
    min-height: 100vh;
    padding: 28px clamp(16px, 4vw, 48px) 48px;
    background: radial-gradient(1100px 620px at 8% -12%, rgba(var(--accent-secondary-rgb), 0.14), transparent 62%),
    radial-gradient(900px 520px at 108% 16%, rgba(var(--accent-rgb), 0.10), transparent 58%),
    linear-gradient(180deg, var(--bg-primary), var(--bg-media));
`,ke=a.header`
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 1180px;
    margin: 0 auto 22px;
`,Ae=a.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    flex-wrap: wrap;
`,je=a.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,Me=a.label`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 32px;
    padding-left: 9px;
    border: 1px solid var(--border-color);
    border-radius: 9px;
    background: rgba(var(--bg-rgb), 0.5);
    color: var(--text-muted);

    &:hover,
    &:focus-within {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    select {
        height: auto;
        padding: 0 9px 0 0;
        border: 0;
        border-radius: 0;
        background: transparent;
        color: inherit;
        font-size: 12px;
        cursor: pointer;

        &:focus {
            outline: none;
        }
    }
`,Ne=a.select`
    height: 32px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: 9px;
    background: rgba(var(--bg-rgb), 0.5);
    color: var(--text-secondary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover,
    &:focus {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
        outline: none;
    }
`,Pe=a.div`
    display: flex;
    align-items: center;
    gap: 14px;
`,R=a.span`
    display: grid;
    place-items: center;
    width: 46px;
    height: 46px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: 13px;
    background: rgba(var(--accent-rgb), 0.10);
    color: var(--accent-primary);
    box-shadow: 0 0 28px rgba(var(--accent-rgb), 0.14);

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`,Fe=a.div`
    display: flex;
    flex-direction: column;
    gap: 2px;

    h1 {
        margin: 0;
        color: var(--text-primary);
        font-size: clamp(18px, 2.4vw, 24px);
        font-weight: 650;
        letter-spacing: -0.01em;
    }

    span {
        color: var(--text-muted);
        font-size: 12px;
    }
`,Ie=a.div`
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 2px;
    scrollbar-width: thin;
`,Le=a.button`
    display: inline-flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 8px 16px;
    border: 1px solid ${({$active:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: 999px;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`rgba(var(--bg-rgb), 0.4)`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 12.5px;
    cursor: pointer;
    transition: border-color 140ms ease, background 140ms ease, color 140ms ease;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    svg {
        flex-shrink: 0;
        opacity: 0.8;
    }
`,Re=a.main`
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 1180px;
    margin: 0 auto;
`,ze=a.div`
    padding: 12px 14px;
    border: 1px solid rgba(248, 113, 113, 0.35);
    border-radius: var(--radius-md);
    background: rgba(239, 68, 68, 0.12);
    color: #fecaca;
    font-size: 12.5px;
    overflow-wrap: anywhere;
`,Be=a.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
`,Ve=a.div`
    display: flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
    flex-wrap: wrap;
`,He=a.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
`,Ue=a.span`
    color: var(--text-muted);
    font-size: 12px;
`,z=a.button`
    padding: 4px 7px;
    border: 0;
    border-radius: 6px;
    background: transparent;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 12.5px;
    font-weight: ${({$last:e})=>e?600:400};
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`,We=a.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-wrap: wrap;
`,Ge=a.label`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    height: 32px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: 9px;
    background: rgba(var(--bg-rgb), 0.42);
    color: var(--text-muted);
    font-size: 11px;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-secondary);
    }

    input {
        width: 13px;
        height: 13px;
        accent-color: var(--accent-primary);
        cursor: pointer;
    }
`,Ke=a.button`
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    border: 1px solid var(--border-color);
    border-radius: 9px;
    background: rgba(var(--bg-rgb), 0.45);
    color: var(--text-secondary);
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`,qe=a.button`
    display: inline-flex;
    align-items: center;
    gap: 7px;
    height: 34px;
    padding: 0 14px;
    border: 0;
    border-radius: 9px;
    background: var(--accent-primary);
    color: #fff;
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover:not(:disabled) {
        filter: brightness(1.08);
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`,Je=a.section`
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.55);
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(10px);
`,Ye=a.table`
    width: 100%;
    border-collapse: collapse;

    th {
        padding: 11px 16px;
        border-bottom: 1px solid var(--border-color);
        color: var(--text-muted);
        font-size: 10px;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-align: left;
        text-transform: uppercase;
    }

    td {
        padding: 10px 16px;
        border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.10);
        color: var(--text-secondary);
        font-size: 12.5px;
        vertical-align: middle;
    }

    tr:last-child td {
        border-bottom: 0;
    }

    tr:hover td {
        background: rgba(var(--accent-rgb), 0.05);
    }

    td:nth-child(2),
    td:nth-child(3) {
        width: 1%;
        color: var(--text-muted);
        font-family: var(--font-mono);
        font-size: 10px;
        white-space: nowrap;
    }

    @media (max-width: 680px) {
        thead {
            display: none;
        }

        table,
        tbody {
            display: block;
            width: 100%;
        }

        /* A row becomes a line: the name on its own, then what the table header used to say. */
        tr {
            display: flex;
            flex-wrap: wrap;
            align-items: baseline;
            gap: 3px 16px;
            width: auto;
            padding: 10px 14px;
            border-top: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.10);
        }

        tr:first-child {
            border-top: 0;
        }

        tr:hover td {
            background: transparent;
        }

        td {
            display: block;
            padding: 0;
            border: 0;
        }

        td:first-child {
            flex: 1 1 100%;
            min-width: 0;
        }

        td:nth-child(2),
        td:nth-child(3) {
            display: inline-block;
            flex: 0 0 auto;
            width: auto;
            white-space: nowrap;
        }

        td:nth-child(2)::before,
        td:nth-child(3)::before {
            content: attr(data-label) " ";
            color: var(--text-muted);
            font-family: var(--font-sans, inherit);
        }
    }
`,Xe=a.div`
    display: none;
    gap: 8px;
    padding: 10px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.10);

    @media (max-width: 680px) {
        display: flex;
        flex-wrap: wrap;
    }
`,Ze=a.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 6px 12px;
    border: 1px solid ${({$active:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: 999px;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 11.5px;
    cursor: pointer;
`,B=a.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 0;
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
    text-transform: inherit;
    cursor: pointer;

    &:hover {
        color: var(--text-primary);
    }
`,V=a.span`
    color: var(--accent-primary);
    font-size: 8px;
`,Qe=a.button`
    display: inline-flex;
    align-items: center;
    gap: 9px;
    max-width: 100%;
    padding: 0;
    border: 0;
    background: transparent;
    color: var(--text-primary);
    font: inherit;
    font-size: 12.5px;
    text-align: left;
    cursor: pointer;

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }

    &:hover span {
        text-decoration: underline;
    }
`,$e=a.a`
    display: inline-flex;
    align-items: center;
    gap: 9px;
    max-width: 100%;
    color: var(--text-primary);
    font-size: 12.5px;
    text-decoration: none;

    svg {
        flex-shrink: 0;
        color: var(--text-muted);
    }

    &:hover span {
        text-decoration: underline;
    }
`,et=a.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,H=a.div`
    padding: 42px 20px;
    color: var(--text-muted);
    font-size: 13px;
    text-align: center;
`,tt=a.p`
    margin: 2px 2px 0;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.55;
`,U=document.getElementById(`share-root`);U&&(0,u.createRoot)(U).render((0,C.jsx)(l.StrictMode,{children:(0,C.jsx)(T,{})}));