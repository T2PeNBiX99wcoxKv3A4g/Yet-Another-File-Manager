import{n as e}from"./rolldown-runtime-WkwZ5CU-.js";import{C as t,H as n,I as r,O as i,V as a,W as o,c as s,z as c}from"./format-DnY-EmeY.js";var l=e(o(),1),u=n(),d=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),f=(e,t)=>e>>>t|e<<32-t;function p(e){let t=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),n=e.length*8,r=e.length+9+63>>6<<6,i=new Uint8Array(r);i.set(e),i[e.length]=128;let a=new DataView(i.buffer);a.setUint32(r-8,Math.floor(n/4294967296)),a.setUint32(r-4,n>>>0);let o=new Uint32Array(64);for(let e=0;e<r;e+=64){for(let t=0;t<16;t++)o[t]=a.getUint32(e+t*4);for(let e=16;e<64;e++){let t=f(o[e-15],7)^f(o[e-15],18)^o[e-15]>>>3,n=f(o[e-2],17)^f(o[e-2],19)^o[e-2]>>>10;o[e]=o[e-16]+t+o[e-7]+n>>>0}let[n,r,i,s,c,l,u,p]=t;for(let e=0;e<64;e++){let t=f(c,6)^f(c,11)^f(c,25),a=c&l^~c&u,m=p+t+a+d[e]+o[e]>>>0,h=(f(n,2)^f(n,13)^f(n,22))+(n&r^n&i^r&i)>>>0;p=u,u=l,l=c,c=s+m>>>0,s=i,i=r,r=n,n=m+h>>>0}t[0]=t[0]+n>>>0,t[1]=t[1]+r>>>0,t[2]=t[2]+i>>>0,t[3]=t[3]+s>>>0,t[4]=t[4]+c>>>0,t[5]=t[5]+l>>>0,t[6]=t[6]+u>>>0,t[7]=t[7]+p>>>0}let s=new Uint8Array(32),c=new DataView(s.buffer);for(let e=0;e<8;e++)c.setUint32(e*4,t[e]);return s}function m(e,t){let n=new Uint8Array(64);n.set(e.length>64?p(e):e);let r=new Uint8Array(64+t.length);for(let e=0;e<64;e++)r[e]=n[e]^54;r.set(t,64);let i=new Uint8Array(96);for(let e=0;e<64;e++)i[e]=n[e]^92;return i.set(p(r),64),p(i)}function h(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}function g(e){let t=``;for(let n of e)t+=String.fromCharCode(n);return btoa(t)}function ee(e,t,n){let r=h(t),i=new TextEncoder().encode(e),a=new Uint8Array(r.length+i.length);return a.set(r),a.set(i,r.length),g(m(p(a),h(n)))}var te=[{id:`en`,label:`English`},{id:`ja`,label:`日本語`},{id:`zh-CN`,label:`简体中文`},{id:`zh-TW`,label:`繁體中文`}],_={sharedFolders:`Shared folders`,noShares:`No folders are shared over the web on this device.`,reading:`reading`,empty:`this_folder_is_empty`,upload:`Upload`,uploading:`Uploading…`,refresh:`refresh`,up:`Up one folder`,name:`name`,size:`size`,modified:`modified`,footnote:`Click a file to download it. Uploaded files are written into the folder you are viewing.`,showHidden:`show_hidden_files`,showSystem:`Show system files`,language:`language`,download:`Download`,error:`Something went wrong.`,checkingAccess:`Checking access…`,waitingForApproval:`Waiting for approval on the device that shares these folders.`,accessDenied:`This device is not allowed to open the share.`,retryIn:`Try again in {seconds} seconds.`,tryAgain:`Try again`,password:`Share password`,unlock:`Unlock`,wrongPassword:`That password did not match. Try again after the wait.`,accessTitle:`Web share access`,passwordNote:`Enter the share password to open these folders. This device is then remembered.`},v={en:_,ja:{sharedFolders:`共有フォルダー`,noShares:`この端末では Web で共有しているフォルダーがありません。`,reading:`読み込み中…`,empty:`このフォルダーは空です。`,upload:`アップロード`,uploading:`アップロード中…`,refresh:`更新`,up:`上の階層へ`,name:`名前`,size:`サイズ`,modified:`更新日時`,footnote:`ファイルをクリックするとダウンロードします。アップロードしたファイルは表示中のフォルダーに保存されます。`,showHidden:`隠しファイルを表示`,showSystem:`システムファイルを表示`,language:`言語`,download:`ダウンロード`,error:`問題が発生しました。`,checkingAccess:`アクセスを確認しています…`,waitingForApproval:`共有元のデバイスで承認を待っています。`,accessDenied:`このデバイスは共有を開くことを許可されていません。`,retryIn:`{seconds} 秒後にもう一度お試しください。`,tryAgain:`再試行`,password:`共有パスワード`,unlock:`ロック解除`,wrongPassword:`パスワードが一致しません。待ってからもう一度お試しください。`,accessTitle:`Web 共有アクセス`,passwordNote:`これらのフォルダーを開くには共有パスワードを入力してください。このデバイスは記憶されます。`},"zh-CN":{sharedFolders:`共享文件夹`,noShares:`此设备没有通过网页共享任何文件夹。`,reading:`读取中…`,empty:`此文件夹是空的。`,upload:`上传`,uploading:`上传中…`,refresh:`刷新`,up:`上一级`,name:`名称`,size:`大小`,modified:`修改时间`,footnote:`点击文件即可下载。上传的文件会写入当前浏览的文件夹。`,showHidden:`显示隐藏文件`,showSystem:`显示系统文件`,language:`语言`,download:`下载`,error:`发生错误。`,checkingAccess:`正在检查访问权限…`,waitingForApproval:`正在等待分享端设备批准。`,accessDenied:`此设备没有打开分享的权限。`,retryIn:`请在 {seconds} 秒后重试。`,tryAgain:`重试`,password:`分享密码`,unlock:`解锁`,wrongPassword:`密码不正确，请等待后再试。`,accessTitle:`Web 分享访问`,passwordNote:`输入分享密码即可打开这些文件夹，稍后会记住此设备。`},"zh-TW":{sharedFolders:`共享資料夾`,noShares:`此裝置沒有透過網頁分享任何資料夾。`,reading:`讀取中…`,empty:`此資料夾是空的。`,upload:`上傳`,uploading:`上傳中…`,refresh:`重新整理`,up:`上一層`,name:`名稱`,size:`大小`,modified:`修改時間`,footnote:`點擊檔案即可下載。上傳的檔案會寫入目前瀏覽的資料夾。`,showHidden:`顯示隱藏檔案`,showSystem:`顯示系統檔案`,language:`語言`,download:`下載`,error:`發生錯誤。`,checkingAccess:`正在檢查存取權限…`,waitingForApproval:`正在等待分享端裝置核准。`,accessDenied:`此裝置沒有開啟分享的權限。`,retryIn:`請在 {seconds} 秒後重試。`,tryAgain:`重試`,password:`分享密碼`,unlock:`解鎖`,wrongPassword:`密碼不正確，請等待後再試。`,accessTitle:`Web 分享存取`,passwordNote:`輸入分享密碼即可開啟這些資料夾，之後會記住此裝置。`}};function ne(){try{let e=localStorage.getItem(`yafm.share.language`);if(e&&e in v)return e}catch{}return re(navigator.language)}function re(e){let t=(e??``).toLowerCase();return t.startsWith(`ja`)?`ja`:t.startsWith(`zh`)?t.includes(`tw`)||t.includes(`hk`)||t.includes(`hant`)?`zh-TW`:`zh-CN`:`en`}function ie(){try{return localStorage.getItem(`yafm.share.language`)!==null}catch{return!1}}function ae(e){return v[e]??_}function oe(e){try{localStorage.setItem(`yafm.share.language`,e)}catch{}}var y=r(),b=c`
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
`;function se(e){try{return localStorage.getItem(e)===`1`}catch{return!1}}function x(e,t){try{localStorage.setItem(e,t?`1`:`0`)}catch{}}function S(){let[e,n]=(0,l.useState)(ne),r=ae(e),[a,o]=(0,l.useState)(null),c=i(`system`),[u,d]=(0,l.useState)([]),[f,p]=(0,l.useState)(null),[m,h]=(0,l.useState)(null),[g,_]=(0,l.useState)(!0),[v,S]=(0,l.useState)(!1),[L,R]=(0,l.useState)(null),[z,B]=(0,l.useState)(null),[V,We]=(0,l.useState)(``),[Ge,Ke]=(0,l.useState)(!1),[qe,H]=(0,l.useState)(!1),[Je,Ye]=(0,l.useState)(0),U=(0,l.useRef)(!1),[W,Xe]=(0,l.useState)(()=>se(`yafm.share.hidden`)),[G,Ze]=(0,l.useState)(()=>se(`yafm.share.system`)),[K,Qe]=(0,l.useState)(()=>{try{let e=JSON.parse(localStorage.getItem(`yafm.share.sort`)??`null`);if(e&&[`name`,`size`,`modified`].includes(e.column))return e}catch{}return{column:`name`,descending:!1}}),q=(0,l.useRef)(null);(0,l.useEffect)(()=>{document.documentElement.lang=e},[e]),(0,l.useEffect)(()=>{a&&t(a.accent,a.secondary,c)},[a,c]);let $e=async()=>{try{let e=await C(`/api/config`);o(e),document.title=`${e.device} · ${e.app}`,!ie()&&e.language&&n(re(e.language))}catch{}try{let e=await C(`/api/shares`);d(e.shares),p(t=>t??e.shares[0]?.id??null),e.shares.length===0&&_(!1)}catch(e){_(!1),R(T(e))}},J=async()=>{try{let e=await C(`/api/access/state`);return B(e),e}catch{return null}};(0,l.useEffect)(()=>{(async()=>{(await J())?.state===`allowed`?(U.current=!0,await $e()):_(!1)})()},[]),(0,l.useEffect)(()=>{if(z){if(z.state===`pending`){let e=window.setInterval(()=>void J(),2e3);return()=>window.clearInterval(e)}if(z.state===`denied`){Ye(z.retryAfter??0);let e=window.setInterval(()=>Ye(e=>Math.max(0,e-1)),1e3);return()=>window.clearInterval(e)}z.state===`password`&&H(!1),z.state===`allowed`&&!U.current&&(U.current=!0,$e())}},[z?.state,z?.retryAfter]);let et=async e=>{if(e.preventDefault(),z?.salt&&z.nonce&&!Ge&&V.length!==0){Ke(!0),H(!1);try{let e=new URLSearchParams({nonce:z.nonce,proof:ee(V,z.salt,z.nonce)}),t=await(await fetch(`/api/access/password`,{method:`POST`,headers:{"Content-Type":`application/x-www-form-urlencoded`},body:e})).json();We(``),B(t),t.state!==`allowed`&&H(!0)}catch{H(!0)}finally{Ke(!1)}}},Y=async(e,t,n=W,r=G)=>{_(!0),R(null);try{let i=await C(`/api/browse/${encodeURIComponent(e)}?path=${encodeURIComponent(t)}&hidden=${+!!n}&system=${+!!r}`);h(i)}catch(e){R(T(e)),h(null)}finally{_(!1)}};(0,l.useEffect)(()=>{f&&Y(f,``)},[f]);let tt=e=>{p(e),h(null)},nt=e=>{Xe(e),x(`yafm.share.hidden`,e),f&&Y(f,m?.path??``,e,G)},rt=e=>{Ze(e),x(`yafm.share.system`,e),f&&Y(f,m?.path??``,W,e)},X=e=>{let t=K.column===e?{column:e,descending:!K.descending}:{column:e,descending:!1};Qe(t);try{localStorage.setItem(`yafm.share.sort`,JSON.stringify(t))}catch{}},Z=(0,l.useMemo)(()=>{let e=[...m?.entries??[]],t=K.descending?-1:1;return e.sort((e,n)=>e.isDirectory===n.isDirectory?(K.column===`name`?e.name.localeCompare(n.name,void 0,{numeric:!0,sensitivity:`base`}):K.column===`size`?e.size-n.size:e.modified-n.modified)*t:e.isDirectory?-1:1)},[m,K]),it=async e=>{if(f&&e&&e.length!==0){S(!0),R(null);try{let t=new FormData;for(let n of e)t.append(`files`,n);let n=await fetch(`/api/upload/${encodeURIComponent(f)}?path=${encodeURIComponent(m?.path??``)}`,{method:`POST`,body:t});if(!n.ok)throw Error(await w(n));await Y(f,m?.path??``)}catch(e){R(T(e))}finally{S(!1),q.current&&(q.current.value=``)}}},Q=m?.path??``,$=Q.split(`/`).filter(Boolean);return z?.state===`allowed`?(0,y.jsxs)(O,{children:[(0,y.jsx)(b,{}),(0,y.jsxs)(Ce,{children:[(0,y.jsxs)(we,{children:[(0,y.jsxs)(De,{children:[(0,y.jsx)(k,{children:(0,y.jsx)(`img`,{alt:``,src:`/app-icon`})}),(0,y.jsxs)(Oe,{children:[(0,y.jsx)(`h1`,{children:a?.device??r.sharedFolders}),(0,y.jsxs)(`span`,{children:[a?.app??`Yet Another File Manager`,a?.version?` · v${a.version}`:``]})]})]}),(0,y.jsx)(Te,{children:(0,y.jsx)(Ee,{"aria-label":r.language,onChange:e=>{let t=e.target.value;n(t),oe(t)},title:r.language,value:e,children:te.map(e=>(0,y.jsx)(`option`,{value:e.id,children:e.label},e.id))})})]}),(0,y.jsx)(ke,{children:u.map(e=>(0,y.jsx)(Ae,{$active:e.id===f,onClick:()=>tt(e.id),type:`button`,children:e.name},e.id))})]}),(0,y.jsxs)(je,{children:[L&&(0,y.jsx)(Me,{children:L}),u.length===0?(0,y.jsx)(I,{children:r.noShares}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(Ne,{children:[(0,y.jsxs)(Pe,{children:[(0,y.jsx)(A,{onClick:()=>f&&void Y(f,``),type:`button`,children:m?.name??r.sharedFolders}),$.map((e,t)=>(0,y.jsxs)(Fe,{children:[(0,y.jsx)(Ie,{children:`/`}),(0,y.jsx)(A,{$last:t===$.length-1,onClick:()=>f&&void Y(f,$.slice(0,t+1).join(`/`)),type:`button`,children:e})]},`${e}-${t}`))]}),(0,y.jsxs)(Le,{children:[(0,y.jsxs)(j,{title:r.showHidden,children:[(0,y.jsx)(`input`,{checked:W,onChange:e=>nt(e.currentTarget.checked),type:`checkbox`}),r.showHidden]}),(0,y.jsxs)(j,{title:r.showSystem,children:[(0,y.jsx)(`input`,{checked:G,onChange:e=>rt(e.currentTarget.checked),type:`checkbox`}),r.showSystem]}),Q.length>0&&(0,y.jsx)(M,{onClick:()=>f&&void Y(f,$.slice(0,-1).join(`/`)),title:r.up,type:`button`,children:(0,y.jsx)(me,{size:15})}),(0,y.jsx)(M,{disabled:g,onClick:()=>f&&void Y(f,Q),title:r.refresh,type:`button`,children:(0,y.jsx)(fe,{size:15})}),(0,y.jsxs)(Re,{disabled:v||!m,onClick:()=>q.current?.click(),title:r.upload,type:`button`,children:[(0,y.jsx)(pe,{size:14}),v?r.uploading:r.upload]}),(0,y.jsx)(`input`,{hidden:!0,multiple:!0,onChange:e=>void it(e.currentTarget.files),ref:q,type:`file`})]})]}),(0,y.jsx)(ze,{children:g&&!m?(0,y.jsx)(I,{children:r.reading}):Z.length>0?(0,y.jsxs)(Be,{children:[(0,y.jsx)(`thead`,{children:(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`th`,{children:(0,y.jsxs)(N,{onClick:()=>X(`name`),type:`button`,children:[r.name,(0,y.jsx)(P,{children:K.column===`name`?K.descending?`▼`:`▲`:``})]})}),(0,y.jsx)(`th`,{children:(0,y.jsxs)(N,{onClick:()=>X(`size`),type:`button`,children:[r.size,(0,y.jsx)(P,{children:K.column===`size`?K.descending?`▼`:`▲`:``})]})}),(0,y.jsx)(`th`,{children:(0,y.jsxs)(N,{onClick:()=>X(`modified`),type:`button`,children:[r.modified,(0,y.jsx)(P,{children:K.column===`modified`?K.descending?`▼`:`▲`:``})]})})]})}),(0,y.jsx)(`tbody`,{children:Z.map(e=>(0,y.jsxs)(`tr`,{children:[(0,y.jsx)(`td`,{children:e.isDirectory?(0,y.jsxs)(Ve,{onClick:()=>f&&void Y(f,e.path),type:`button`,children:[(0,y.jsx)(ue,{size:16}),(0,y.jsx)(F,{children:e.name})]}):(0,y.jsxs)(He,{href:ce(f??``,e.path),title:`${r.download} ${e.name}`,children:[(0,y.jsx)(de,{size:16}),(0,y.jsx)(F,{children:e.name})]})}),(0,y.jsx)(`td`,{"data-label":r.size,children:e.isDirectory?`—`:s(e.size)}),(0,y.jsx)(`td`,{"data-label":r.modified,children:le(e.modified)})]},e.path))})]}):(0,y.jsx)(I,{children:g?r.reading:r.empty})}),(0,y.jsx)(Ue,{children:r.footnote})]})]})]}):(0,y.jsxs)(O,{children:[(0,y.jsx)(b,{}),(0,y.jsx)(he,{children:(0,y.jsxs)(ge,{children:[(0,y.jsx)(k,{children:(0,y.jsx)(`img`,{alt:``,src:`/app-icon`})}),(0,y.jsx)(_e,{children:r.accessTitle}),!z&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(E,{children:r.checkingAccess}),(0,y.jsx)(D,{onClick:()=>void J(),children:r.tryAgain})]}),z?.state===`pending`&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(E,{children:r.waitingForApproval}),(0,y.jsx)(ve,{children:z.device??``})]}),z?.state===`denied`&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(E,{children:qe?r.wrongPassword:r.accessDenied}),(0,y.jsx)(E,{children:r.retryIn.replace(`{seconds}`,String(Je))}),(0,y.jsx)(D,{disabled:Je>0,onClick:()=>void J(),children:r.tryAgain})]}),z?.state===`password`&&(0,y.jsxs)(ye,{onSubmit:e=>void et(e),children:[(0,y.jsx)(E,{children:r.passwordNote}),(0,y.jsx)(be,{htmlFor:`share-password`,children:r.password}),(0,y.jsx)(xe,{autoFocus:!0,id:`share-password`,onChange:e=>We(e.target.value),type:`password`,value:V}),(0,y.jsx)(D,{disabled:Ge||V.length===0,type:`submit`,children:r.unlock}),qe&&(0,y.jsx)(Se,{children:r.wrongPassword})]})]})})]})}async function C(e){let t=await fetch(e);if(!t.ok)throw Error(await w(t));return await t.json()}async function w(e){try{return(await e.json()).error??e.statusText}catch{return e.statusText}}function ce(e,t){return`/file/${encodeURIComponent(e)}/${t.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`)}`}function T(e){return e instanceof Error?e.message:String(e)}function le(e){return e?new Intl.DateTimeFormat(void 0,{dateStyle:`medium`,timeStyle:`short`}).format(new Date(e)):`—`}function ue({size:e}){return(0,y.jsx)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinejoin:`round`,strokeWidth:`1.5`,viewBox:`0 0 24 24`,width:e,children:(0,y.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17z`})})}function de({size:e}){return(0,y.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinejoin:`round`,strokeWidth:`1.5`,viewBox:`0 0 24 24`,width:e,children:[(0,y.jsx)(`path`,{d:`M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 20V5A1.5 1.5 0 0 1 6 3.5Z`}),(0,y.jsx)(`path`,{d:`M14 3.5V8h4`})]})}function fe({size:e}){return(0,y.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:`1.6`,viewBox:`0 0 24 24`,width:e,children:[(0,y.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 6.7`}),(0,y.jsx)(`path`,{d:`M20 4v7h-7`})]})}function pe({size:e}){return(0,y.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.6`,viewBox:`0 0 24 24`,width:e,children:[(0,y.jsx)(`path`,{d:`M12 16V4`}),(0,y.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,y.jsx)(`path`,{d:`M5 16v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3`})]})}function me({size:e}){return(0,y.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.6`,viewBox:`0 0 24 24`,width:e,children:[(0,y.jsx)(`path`,{d:`M12 19V5`}),(0,y.jsx)(`path`,{d:`m6 11 6-6 6 6`})]})}var he=a.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 24px;
`,ge=a.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(400px, 100%);
    padding: 26px;
    border: 1px solid var(--border-color);
    border-radius: 16px;
    background: rgba(var(--bg-rgb), 0.94);
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.35);
`,_e=a.h1`
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: var(--text-primary);
`,E=a.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 13px;
    line-height: 1.5;
`,ve=a.span`
    color: var(--text-secondary);
    font-size: 12px;
`,ye=a.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 4px;
`,be=a.label`
    color: var(--text-muted);
    font-size: 12px;
`,xe=a.input`
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
`,D=a.button`
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
`,Se=a.p`
    margin: 0;
    color: var(--danger);
    font-size: 12px;
`,O=a.div`
    min-height: 100vh;
    padding: 28px clamp(16px, 4vw, 48px) 48px;
    background: radial-gradient(1100px 620px at 8% -12%, rgba(var(--accent-secondary-rgb), 0.14), transparent 62%),
    radial-gradient(900px 520px at 108% 16%, rgba(var(--accent-rgb), 0.10), transparent 58%),
    linear-gradient(180deg, var(--bg-primary), var(--bg-media));
`,Ce=a.header`
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 1180px;
    margin: 0 auto 22px;
`,we=a.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
`,Te=a.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,Ee=a.select`
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
`,De=a.div`
    display: flex;
    align-items: center;
    gap: 14px;
`,k=a.span`
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
`,Oe=a.div`
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
`,ke=a.div`
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 2px;
    scrollbar-width: thin;
`,Ae=a.button`
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
`,je=a.main`
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 1180px;
    margin: 0 auto;
`,Me=a.div`
    padding: 12px 14px;
    border: 1px solid rgba(248, 113, 113, 0.35);
    border-radius: var(--radius-md);
    background: rgba(239, 68, 68, 0.12);
    color: #fecaca;
    font-size: 12.5px;
    overflow-wrap: anywhere;
`,Ne=a.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
`,Pe=a.div`
    display: flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
    flex-wrap: wrap;
`,Fe=a.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
`,Ie=a.span`
    color: var(--text-muted);
    font-size: 12px;
`,A=a.button`
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
`,Le=a.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-wrap: wrap;
`,j=a.label`
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
`,M=a.button`
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
`,Re=a.button`
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
`,ze=a.section`
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.55);
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(10px);
`,Be=a.table`
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
        th:nth-child(2),
        th:nth-child(3),
        td:nth-child(2),
        td:nth-child(3) {
            display: none;
        }
    }
`,N=a.button`
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
`,P=a.span`
    color: var(--accent-primary);
    font-size: 8px;
`,Ve=a.button`
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
`,He=a.a`
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
`,F=a.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,I=a.div`
    padding: 42px 20px;
    color: var(--text-muted);
    font-size: 13px;
    text-align: center;
`,Ue=a.p`
    margin: 2px 2px 0;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.55;
`,L=document.getElementById(`share-root`);L&&(0,u.createRoot)(L).render((0,y.jsx)(l.StrictMode,{children:(0,y.jsx)(S,{})}));