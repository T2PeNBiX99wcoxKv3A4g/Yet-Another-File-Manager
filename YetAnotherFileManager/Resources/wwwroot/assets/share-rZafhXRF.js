import{n as e}from"./rolldown-runtime-WkwZ5CU-.js";import{C as t,H as n,I as r,O as i,V as a,W as o,c as s,z as c}from"./format-DDANH-1L.js";var l=e(o(),1),u=n(),ee=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),d=(e,t)=>e>>>t|e<<32-t;function f(e){let t=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),n=e.length*8,r=e.length+9+63>>6<<6,i=new Uint8Array(r);i.set(e),i[e.length]=128;let a=new DataView(i.buffer);a.setUint32(r-8,Math.floor(n/4294967296)),a.setUint32(r-4,n>>>0);let o=new Uint32Array(64);for(let e=0;e<r;e+=64){for(let t=0;t<16;t++)o[t]=a.getUint32(e+t*4);for(let e=16;e<64;e++){let t=d(o[e-15],7)^d(o[e-15],18)^o[e-15]>>>3,n=d(o[e-2],17)^d(o[e-2],19)^o[e-2]>>>10;o[e]=o[e-16]+t+o[e-7]+n>>>0}let[n,r,i,s,c,l,u,f]=t;for(let e=0;e<64;e++){let t=d(c,6)^d(c,11)^d(c,25),a=c&l^~c&u,p=f+t+a+ee[e]+o[e]>>>0,m=(d(n,2)^d(n,13)^d(n,22))+(n&r^n&i^r&i)>>>0;f=u,u=l,l=c,c=s+p>>>0,s=i,i=r,r=n,n=p+m>>>0}t[0]=t[0]+n>>>0,t[1]=t[1]+r>>>0,t[2]=t[2]+i>>>0,t[3]=t[3]+s>>>0,t[4]=t[4]+c>>>0,t[5]=t[5]+l>>>0,t[6]=t[6]+u>>>0,t[7]=t[7]+f>>>0}let s=new Uint8Array(32),c=new DataView(s.buffer);for(let e=0;e<8;e++)c.setUint32(e*4,t[e]);return s}function p(e,t){let n=new Uint8Array(64);n.set(e.length>64?f(e):e);let r=new Uint8Array(64+t.length);for(let e=0;e<64;e++)r[e]=n[e]^54;r.set(t,64);let i=new Uint8Array(96);for(let e=0;e<64;e++)i[e]=n[e]^92;return i.set(f(r),64),f(i)}function m(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}function h(e){let t=``;for(let n of e)t+=String.fromCharCode(n);return btoa(t)}function te(e,t,n){let r=m(t),i=new TextEncoder().encode(e),a=new Uint8Array(r.length+i.length);return a.set(r),a.set(i,r.length),h(p(f(a),m(n)))}var ne=[{id:`en`,label:`English`},{id:`ja`,label:`日本語`},{id:`zh-CN`,label:`简体中文`},{id:`zh-TW`,label:`繁體中文`}],g={sharedFolders:`Shared folders`,noShares:`No folders are shared over the web on this device.`,reading:`reading`,empty:`this_folder_is_empty`,upload:`Upload`,uploading:`Uploading…`,refresh:`refresh`,up:`Up one folder`,name:`name`,size:`size`,modified:`modified`,footnote:`Click a file to download it. Uploaded files are written into the folder you are viewing.`,showHidden:`show_hidden_files`,showSystem:`Show system files`,language:`language`,download:`Download`,error:`Something went wrong.`,checkingAccess:`Checking access…`,waitingForApproval:`Waiting for approval on the device that shares these folders.`,accessDenied:`This device is not allowed to open the share.`,retryIn:`Try again in {seconds} seconds.`,tryAgain:`Try again`,password:`Share password`,unlock:`Unlock`,wrongPassword:`That password did not match. Try again after the wait.`},_={en:g,ja:{sharedFolders:`共有フォルダー`,noShares:`この端末では Web で共有しているフォルダーがありません。`,reading:`読み込み中…`,empty:`このフォルダーは空です。`,upload:`アップロード`,uploading:`アップロード中…`,refresh:`更新`,up:`上の階層へ`,name:`名前`,size:`サイズ`,modified:`更新日時`,footnote:`ファイルをクリックするとダウンロードします。アップロードしたファイルは表示中のフォルダーに保存されます。`,showHidden:`隠しファイルを表示`,showSystem:`システムファイルを表示`,language:`言語`,download:`ダウンロード`,error:`問題が発生しました。`,checkingAccess:`アクセスを確認しています…`,waitingForApproval:`共有元のデバイスで承認を待っています。`,accessDenied:`このデバイスは共有を開くことを許可されていません。`,retryIn:`{seconds} 秒後にもう一度お試しください。`,tryAgain:`再試行`,password:`共有パスワード`,unlock:`ロック解除`,wrongPassword:`パスワードが一致しません。待ってからもう一度お試しください。`},"zh-CN":{sharedFolders:`共享文件夹`,noShares:`此设备没有通过网页共享任何文件夹。`,reading:`读取中…`,empty:`此文件夹是空的。`,upload:`上传`,uploading:`上传中…`,refresh:`刷新`,up:`上一级`,name:`名称`,size:`大小`,modified:`修改时间`,footnote:`点击文件即可下载。上传的文件会写入当前浏览的文件夹。`,showHidden:`显示隐藏文件`,showSystem:`显示系统文件`,language:`语言`,download:`下载`,error:`发生错误。`,checkingAccess:`正在检查访问权限…`,waitingForApproval:`正在等待分享端设备批准。`,accessDenied:`此设备没有打开分享的权限。`,retryIn:`请在 {seconds} 秒后重试。`,tryAgain:`重试`,password:`分享密码`,unlock:`解锁`,wrongPassword:`密码不正确，请等待后再试。`},"zh-TW":{sharedFolders:`共享資料夾`,noShares:`此裝置沒有透過網頁分享任何資料夾。`,reading:`讀取中…`,empty:`此資料夾是空的。`,upload:`上傳`,uploading:`上傳中…`,refresh:`重新整理`,up:`上一層`,name:`名稱`,size:`大小`,modified:`修改時間`,footnote:`點擊檔案即可下載。上傳的檔案會寫入目前瀏覽的資料夾。`,showHidden:`顯示隱藏檔案`,showSystem:`顯示系統檔案`,language:`語言`,download:`下載`,error:`發生錯誤。`,checkingAccess:`正在檢查存取權限…`,waitingForApproval:`正在等待分享端裝置核准。`,accessDenied:`此裝置沒有開啟分享的權限。`,retryIn:`請在 {seconds} 秒後重試。`,tryAgain:`重試`,password:`分享密碼`,unlock:`解鎖`,wrongPassword:`密碼不正確，請等待後再試。`}};function re(){try{let e=localStorage.getItem(`yafm.share.language`);if(e&&e in _)return e}catch{}return ie(navigator.language)}function ie(e){let t=(e??``).toLowerCase();return t.startsWith(`ja`)?`ja`:t.startsWith(`zh`)?t.includes(`tw`)||t.includes(`hk`)||t.includes(`hant`)?`zh-TW`:`zh-CN`:`en`}function ae(){try{return localStorage.getItem(`yafm.share.language`)!==null}catch{return!1}}function oe(e){return _[e]??g}function se(e){try{localStorage.setItem(`yafm.share.language`,e)}catch{}}var v=r(),y=c`
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
`;function b(e){try{return localStorage.getItem(e)===`1`}catch{return!1}}function x(e,t){try{localStorage.setItem(e,t?`1`:`0`)}catch{}}function S(){let[e,n]=(0,l.useState)(re),r=oe(e),[a,o]=(0,l.useState)(null),c=i(`system`),[u,ee]=(0,l.useState)([]),[d,f]=(0,l.useState)(null),[p,m]=(0,l.useState)(null),[h,g]=(0,l.useState)(!0),[_,S]=(0,l.useState)(!1),[P,F]=(0,l.useState)(null),[I,L]=(0,l.useState)(null),[R,z]=(0,l.useState)(``),[B,V]=(0,l.useState)(!1),[Ke,H]=(0,l.useState)(!1),[U,qe]=(0,l.useState)(0),W=(0,l.useRef)(!1),[G,Je]=(0,l.useState)(()=>b(`yafm.share.hidden`)),[K,Ye]=(0,l.useState)(()=>b(`yafm.share.system`)),[q,Xe]=(0,l.useState)(()=>{try{let e=JSON.parse(localStorage.getItem(`yafm.share.sort`)??`null`);if(e&&[`name`,`size`,`modified`].includes(e.column))return e}catch{}return{column:`name`,descending:!1}}),J=(0,l.useRef)(null);(0,l.useEffect)(()=>{document.documentElement.lang=e},[e]),(0,l.useEffect)(()=>{a&&t(a.accent,a.secondary,c)},[a,c]);let Ze=async()=>{try{let e=await C(`/api/config`);o(e),document.title=`${e.device} · ${e.app}`,!ae()&&e.language&&n(ie(e.language))}catch{}try{let e=await C(`/api/shares`);ee(e.shares),f(t=>t??e.shares[0]?.id??null),e.shares.length===0&&g(!1)}catch(e){g(!1),F(w(e))}},Y=async()=>{try{let e=await C(`/api/access/state`);return L(e),e}catch{return null}};(0,l.useEffect)(()=>{(async()=>{(await Y())?.state===`allowed`?(W.current=!0,await Ze()):g(!1)})()},[]),(0,l.useEffect)(()=>{if(I){if(I.state===`pending`){let e=window.setInterval(()=>void Y(),2e3);return()=>window.clearInterval(e)}if(I.state===`denied`){qe(I.retryAfter??0);let e=window.setInterval(()=>qe(e=>Math.max(0,e-1)),1e3);return()=>window.clearInterval(e)}I.state===`allowed`&&!W.current&&(W.current=!0,Ze())}},[I?.state,I?.retryAfter]);let Qe=async e=>{if(e.preventDefault(),I?.salt&&I.nonce&&!B&&R.length!==0){V(!0),H(!1);try{let e=new URLSearchParams({nonce:I.nonce,proof:te(R,I.salt,I.nonce)}),t=await(await fetch(`/api/access/password`,{method:`POST`,headers:{"Content-Type":`application/x-www-form-urlencoded`},body:e})).json();z(``),L(t),t.state!==`allowed`&&H(!0)}catch{H(!0)}finally{V(!1)}}},X=async(e,t,n=G,r=K)=>{g(!0),F(null);try{let i=await C(`/api/browse/${encodeURIComponent(e)}?path=${encodeURIComponent(t)}&hidden=${+!!n}&system=${+!!r}`);m(i)}catch(e){F(w(e)),m(null)}finally{g(!1)}};(0,l.useEffect)(()=>{d&&X(d,``)},[d]);let $e=e=>{f(e),m(null)},et=e=>{Je(e),x(`yafm.share.hidden`,e),d&&X(d,p?.path??``,e,K)},tt=e=>{Ye(e),x(`yafm.share.system`,e),d&&X(d,p?.path??``,G,e)},Z=e=>{let t=q.column===e?{column:e,descending:!q.descending}:{column:e,descending:!1};Xe(t);try{localStorage.setItem(`yafm.share.sort`,JSON.stringify(t))}catch{}},nt=(0,l.useMemo)(()=>{let e=[...p?.entries??[]],t=q.descending?-1:1;return e.sort((e,n)=>e.isDirectory===n.isDirectory?(q.column===`name`?e.name.localeCompare(n.name,void 0,{numeric:!0,sensitivity:`base`}):q.column===`size`?e.size-n.size:e.modified-n.modified)*t:e.isDirectory?-1:1)},[p,q]),rt=async e=>{if(d&&e&&e.length!==0){S(!0),F(null);try{let t=new FormData;for(let n of e)t.append(`files`,n);let n=await fetch(`/api/upload/${encodeURIComponent(d)}?path=${encodeURIComponent(p?.path??``)}`,{method:`POST`,body:t});if(!n.ok)throw Error(await ce(n));await X(d,p?.path??``)}catch(e){F(w(e))}finally{S(!1),J.current&&(J.current.value=``)}}},Q=p?.path??``,$=Q.split(`/`).filter(Boolean);return I?.state===`allowed`?(0,v.jsxs)(Ce,{children:[(0,v.jsx)(y,{}),(0,v.jsxs)(we,{children:[(0,v.jsxs)(Te,{children:[(0,v.jsxs)(Oe,{children:[(0,v.jsx)(ke,{children:(0,v.jsx)(`img`,{alt:``,src:`/app-icon`})}),(0,v.jsxs)(Ae,{children:[(0,v.jsx)(`h1`,{children:a?.device??r.sharedFolders}),(0,v.jsxs)(`span`,{children:[a?.app??`Yet Another File Manager`,a?.version?` · v${a.version}`:``]})]})]}),(0,v.jsx)(Ee,{children:(0,v.jsx)(De,{"aria-label":r.language,onChange:e=>{let t=e.target.value;n(t),se(t)},title:r.language,value:e,children:ne.map(e=>(0,v.jsx)(`option`,{value:e.id,children:e.label},e.id))})})]}),(0,v.jsx)(je,{children:u.map(e=>(0,v.jsx)(Me,{$active:e.id===d,onClick:()=>$e(e.id),type:`button`,children:e.name},e.id))})]}),(0,v.jsxs)(Ne,{children:[P&&(0,v.jsx)(Pe,{children:P}),u.length===0?(0,v.jsx)(N,{children:r.noShares}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(Fe,{children:[(0,v.jsxs)(Ie,{children:[(0,v.jsx)(D,{onClick:()=>d&&void X(d,``),type:`button`,children:p?.name??r.sharedFolders}),$.map((e,t)=>(0,v.jsxs)(Le,{children:[(0,v.jsx)(Re,{children:`/`}),(0,v.jsx)(D,{$last:t===$.length-1,onClick:()=>d&&void X(d,$.slice(0,t+1).join(`/`)),type:`button`,children:e})]},`${e}-${t}`))]}),(0,v.jsxs)(ze,{children:[(0,v.jsxs)(O,{title:r.showHidden,children:[(0,v.jsx)(`input`,{checked:G,onChange:e=>et(e.currentTarget.checked),type:`checkbox`}),r.showHidden]}),(0,v.jsxs)(O,{title:r.showSystem,children:[(0,v.jsx)(`input`,{checked:K,onChange:e=>tt(e.currentTarget.checked),type:`checkbox`}),r.showSystem]}),Q.length>0&&(0,v.jsx)(k,{onClick:()=>d&&void X(d,$.slice(0,-1).join(`/`)),title:r.up,type:`button`,children:(0,v.jsx)(he,{size:15})}),(0,v.jsx)(k,{disabled:h,onClick:()=>d&&void X(d,Q),title:r.refresh,type:`button`,children:(0,v.jsx)(pe,{size:15})}),(0,v.jsxs)(Be,{disabled:_||!p,onClick:()=>J.current?.click(),title:r.upload,type:`button`,children:[(0,v.jsx)(me,{size:14}),_?r.uploading:r.upload]}),(0,v.jsx)(`input`,{hidden:!0,multiple:!0,onChange:e=>void rt(e.currentTarget.files),ref:J,type:`file`})]})]}),(0,v.jsx)(Ve,{children:h&&!p?(0,v.jsx)(N,{children:r.reading}):nt.length>0?(0,v.jsxs)(He,{children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`th`,{children:(0,v.jsxs)(A,{onClick:()=>Z(`name`),type:`button`,children:[r.name,(0,v.jsx)(j,{children:q.column===`name`?q.descending?`▼`:`▲`:``})]})}),(0,v.jsx)(`th`,{children:(0,v.jsxs)(A,{onClick:()=>Z(`size`),type:`button`,children:[r.size,(0,v.jsx)(j,{children:q.column===`size`?q.descending?`▼`:`▲`:``})]})}),(0,v.jsx)(`th`,{children:(0,v.jsxs)(A,{onClick:()=>Z(`modified`),type:`button`,children:[r.modified,(0,v.jsx)(j,{children:q.column===`modified`?q.descending?`▼`:`▲`:``})]})})]})}),(0,v.jsx)(`tbody`,{children:nt.map(e=>(0,v.jsxs)(`tr`,{children:[(0,v.jsx)(`td`,{children:e.isDirectory?(0,v.jsxs)(Ue,{onClick:()=>d&&void X(d,e.path),type:`button`,children:[(0,v.jsx)(de,{size:16}),(0,v.jsx)(M,{children:e.name})]}):(0,v.jsxs)(We,{href:le(d??``,e.path),title:`${r.download} ${e.name}`,children:[(0,v.jsx)(fe,{size:16}),(0,v.jsx)(M,{children:e.name})]})}),(0,v.jsx)(`td`,{"data-label":r.size,children:e.isDirectory?`—`:s(e.size)}),(0,v.jsx)(`td`,{"data-label":r.modified,children:ue(e.modified)})]},e.path))})]}):(0,v.jsx)(N,{children:h?r.reading:r.empty})}),(0,v.jsx)(Ge,{children:r.footnote})]})]})]}):(0,v.jsxs)(Ce,{children:[(0,v.jsx)(y,{}),(0,v.jsx)(ge,{children:(0,v.jsxs)(_e,{children:[(0,v.jsx)(ke,{children:(0,v.jsx)(`img`,{alt:``,src:`/app-icon`})}),(0,v.jsx)(ve,{children:r.sharedFolders}),!I&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(T,{children:r.checkingAccess}),(0,v.jsx)(E,{onClick:()=>void Y(),children:r.tryAgain})]}),I?.state===`pending`&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(T,{children:r.waitingForApproval}),(0,v.jsx)(ye,{children:I.device??``})]}),I?.state===`denied`&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(T,{children:r.accessDenied}),(0,v.jsx)(T,{children:r.retryIn.replace(`{seconds}`,String(U))}),(0,v.jsx)(E,{disabled:U>0,onClick:()=>void Y(),children:r.tryAgain})]}),I?.state===`password`&&(0,v.jsxs)(`form`,{onSubmit:e=>void Qe(e),children:[(0,v.jsx)(be,{children:r.password}),(0,v.jsx)(xe,{autoFocus:!0,onChange:e=>z(e.target.value),type:`password`,value:R}),(0,v.jsx)(E,{disabled:B||R.length===0,type:`submit`,children:r.unlock}),Ke&&(0,v.jsx)(Se,{children:r.wrongPassword})]})]})})]})}async function C(e){let t=await fetch(e);if(!t.ok)throw Error(await ce(t));return await t.json()}async function ce(e){try{return(await e.json()).error??e.statusText}catch{return e.statusText}}function le(e,t){return`/file/${encodeURIComponent(e)}/${t.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`)}`}function w(e){return e instanceof Error?e.message:String(e)}function ue(e){return e?new Intl.DateTimeFormat(void 0,{dateStyle:`medium`,timeStyle:`short`}).format(new Date(e)):`—`}function de({size:e}){return(0,v.jsx)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinejoin:`round`,strokeWidth:`1.5`,viewBox:`0 0 24 24`,width:e,children:(0,v.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17z`})})}function fe({size:e}){return(0,v.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinejoin:`round`,strokeWidth:`1.5`,viewBox:`0 0 24 24`,width:e,children:[(0,v.jsx)(`path`,{d:`M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 20V5A1.5 1.5 0 0 1 6 3.5Z`}),(0,v.jsx)(`path`,{d:`M14 3.5V8h4`})]})}function pe({size:e}){return(0,v.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:`1.6`,viewBox:`0 0 24 24`,width:e,children:[(0,v.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 6.7`}),(0,v.jsx)(`path`,{d:`M20 4v7h-7`})]})}function me({size:e}){return(0,v.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.6`,viewBox:`0 0 24 24`,width:e,children:[(0,v.jsx)(`path`,{d:`M12 16V4`}),(0,v.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,v.jsx)(`path`,{d:`M5 16v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3`})]})}function he({size:e}){return(0,v.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.6`,viewBox:`0 0 24 24`,width:e,children:[(0,v.jsx)(`path`,{d:`M12 19V5`}),(0,v.jsx)(`path`,{d:`m6 11 6-6 6 6`})]})}var ge=a.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 24px;
`,_e=a.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(400px, 100%);
    padding: 26px;
    border: 1px solid var(--border-color);
    border-radius: 16px;
    background: rgba(var(--bg-rgb), 0.94);
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.35);
`,ve=a.h1`
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: var(--text-primary);
`,T=a.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 13px;
    line-height: 1.5;
`,ye=a.span`
    color: var(--text-secondary);
    font-size: 12px;
`,be=a.label`
    margin-top: 4px;
    color: var(--text-muted);
    font-size: 12px;
`,xe=a.input`
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
`,E=a.button`
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
`,Ce=a.div`
    min-height: 100vh;
    padding: 28px clamp(16px, 4vw, 48px) 48px;
    background: radial-gradient(1100px 620px at 8% -12%, rgba(var(--accent-secondary-rgb), 0.14), transparent 62%),
    radial-gradient(900px 520px at 108% 16%, rgba(var(--accent-rgb), 0.10), transparent 58%),
    linear-gradient(180deg, var(--bg-primary), var(--bg-media));
`,we=a.header`
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 1180px;
    margin: 0 auto 22px;
`,Te=a.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
`,Ee=a.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,De=a.select`
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
`,Oe=a.div`
    display: flex;
    align-items: center;
    gap: 14px;
`,ke=a.span`
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
`,Ae=a.div`
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
`,je=a.div`
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 2px;
    scrollbar-width: thin;
`,Me=a.button`
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
`,Ne=a.main`
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 1180px;
    margin: 0 auto;
`,Pe=a.div`
    padding: 12px 14px;
    border: 1px solid rgba(248, 113, 113, 0.35);
    border-radius: var(--radius-md);
    background: rgba(239, 68, 68, 0.12);
    color: #fecaca;
    font-size: 12.5px;
    overflow-wrap: anywhere;
`,Fe=a.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
`,Ie=a.div`
    display: flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
    flex-wrap: wrap;
`,Le=a.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
`,Re=a.span`
    color: var(--text-muted);
    font-size: 12px;
`,D=a.button`
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
`,ze=a.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-wrap: wrap;
`,O=a.label`
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
`,k=a.button`
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
`,Be=a.button`
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
`,Ve=a.section`
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.55);
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(10px);
`,He=a.table`
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
`,A=a.button`
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
`,j=a.span`
    color: var(--accent-primary);
    font-size: 8px;
`,Ue=a.button`
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
`,We=a.a`
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
`,M=a.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,N=a.div`
    padding: 42px 20px;
    color: var(--text-muted);
    font-size: 13px;
    text-align: center;
`,Ge=a.p`
    margin: 2px 2px 0;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.55;
`,P=document.getElementById(`share-root`);P&&(0,u.createRoot)(P).render((0,v.jsx)(l.StrictMode,{children:(0,v.jsx)(S,{})}));