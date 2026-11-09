import{A as e,D as t,M as n,N as r,T as i,f as ee,k as a,r as te}from"./theme-BMX5jShW.js";var o=r(n(),1),s=e(),c=[{id:`en`,label:`English`},{id:`ja`,label:`日本語`},{id:`zh-CN`,label:`简体中文`},{id:`zh-TW`,label:`繁體中文`}],l={sharedFolders:`Shared folders`,noShares:`No folders are shared over the web on this device.`,reading:`Reading…`,empty:`This folder is empty.`,upload:`Upload`,uploading:`Uploading…`,refresh:`Refresh`,up:`Up one folder`,name:`Name`,size:`Size`,modified:`Modified`,footnote:`Click a file to download it. Uploaded files are written into the folder you are viewing.`,showHidden:`Show hidden files`,showSystem:`Show system files`,language:`Language`,download:`Download`,error:`Something went wrong.`},u={en:l,ja:{sharedFolders:`共有フォルダー`,noShares:`この端末では Web で共有しているフォルダーがありません。`,reading:`読み込み中…`,empty:`このフォルダーは空です。`,upload:`アップロード`,uploading:`アップロード中…`,refresh:`更新`,up:`上の階層へ`,name:`名前`,size:`サイズ`,modified:`更新日時`,footnote:`ファイルをクリックするとダウンロードします。アップロードしたファイルは表示中のフォルダーに保存されます。`,showHidden:`隠しファイルを表示`,showSystem:`システムファイルを表示`,language:`言語`,download:`ダウンロード`,error:`問題が発生しました。`},"zh-CN":{sharedFolders:`共享文件夹`,noShares:`此设备没有通过网页共享任何文件夹。`,reading:`读取中…`,empty:`此文件夹是空的。`,upload:`上传`,uploading:`上传中…`,refresh:`刷新`,up:`上一级`,name:`名称`,size:`大小`,modified:`修改时间`,footnote:`点击文件即可下载。上传的文件会写入当前浏览的文件夹。`,showHidden:`显示隐藏文件`,showSystem:`显示系统文件`,language:`语言`,download:`下载`,error:`发生错误。`},"zh-TW":{sharedFolders:`共享資料夾`,noShares:`此裝置沒有透過網頁分享任何資料夾。`,reading:`讀取中…`,empty:`此資料夾是空的。`,upload:`上傳`,uploading:`上傳中…`,refresh:`重新整理`,up:`上一層`,name:`名稱`,size:`大小`,modified:`修改時間`,footnote:`點擊檔案即可下載。上傳的檔案會寫入目前瀏覽的資料夾。`,showHidden:`顯示隱藏檔案`,showSystem:`顯示系統檔案`,language:`語言`,download:`下載`,error:`發生錯誤。`}};function ne(){try{let e=localStorage.getItem(`yafm.share.language`);if(e&&e in u)return e}catch{}return d(navigator.language)}function d(e){let t=(e??``).toLowerCase();return t.startsWith(`ja`)?`ja`:t.startsWith(`zh`)?t.includes(`tw`)||t.includes(`hk`)||t.includes(`hant`)?`zh-TW`:`zh-CN`:`en`}function re(){try{return localStorage.getItem(`yafm.share.language`)!==null}catch{return!1}}function ie(e){return u[e]??l}function ae(e){try{localStorage.setItem(`yafm.share.language`,e)}catch{}}var f=i(),oe=t`
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
`;function p(e){try{return localStorage.getItem(e)===`1`}catch{return!1}}function m(e,t){try{localStorage.setItem(e,t?`1`:`0`)}catch{}}function h(){let[e,t]=(0,o.useState)(ne),n=ie(e),[r,i]=(0,o.useState)(null),[a,s]=(0,o.useState)([]),[l,u]=(0,o.useState)(null),[h,R]=(0,o.useState)(null),[z,B]=(0,o.useState)(!0),[V,H]=(0,o.useState)(!1),[U,W]=(0,o.useState)(null),[G,Te]=(0,o.useState)(()=>p(`yafm.share.hidden`)),[K,Ee]=(0,o.useState)(()=>p(`yafm.share.system`)),[q,De]=(0,o.useState)(()=>{try{let e=JSON.parse(localStorage.getItem(`yafm.share.sort`)??`null`);if(e&&[`name`,`size`,`modified`].includes(e.column))return e}catch{}return{column:`name`,descending:!1}}),J=(0,o.useRef)(null);(0,o.useEffect)(()=>{document.documentElement.lang=e},[e]),(0,o.useEffect)(()=>{(async()=>{try{let e=await g(`/api/config`);i(e),te(e.accent,e.secondary),document.title=`${e.device} · ${e.app}`,!re()&&e.language&&t(d(e.language))}catch{}try{let e=await g(`/api/shares`);s(e.shares),u(t=>t??e.shares[0]?.id??null),e.shares.length===0&&B(!1)}catch(e){B(!1),W(y(e))}})()},[]);let Y=async(e,t,n=G,r=K)=>{B(!0),W(null);try{let i=await g(`/api/browse/${encodeURIComponent(e)}?path=${encodeURIComponent(t)}&hidden=${+!!n}&system=${+!!r}`);R(i)}catch(e){W(y(e)),R(null)}finally{B(!1)}};(0,o.useEffect)(()=>{l&&Y(l,``)},[l]);let Oe=e=>{u(e),R(null)},ke=e=>{Te(e),m(`yafm.share.hidden`,e),l&&Y(l,h?.path??``,e,K)},Ae=e=>{Ee(e),m(`yafm.share.system`,e),l&&Y(l,h?.path??``,G,e)},X=e=>{let t=q.column===e?{column:e,descending:!q.descending}:{column:e,descending:!1};De(t);try{localStorage.setItem(`yafm.share.sort`,JSON.stringify(t))}catch{}},Z=(0,o.useMemo)(()=>{let e=[...h?.entries??[]],t=q.descending?-1:1;return e.sort((e,n)=>e.isDirectory===n.isDirectory?(q.column===`name`?e.name.localeCompare(n.name,void 0,{numeric:!0,sensitivity:`base`}):q.column===`size`?e.size-n.size:e.modified-n.modified)*t:e.isDirectory?-1:1)},[h,q]),je=async e=>{if(l&&e&&e.length!==0){H(!0),W(null);try{let t=new FormData;for(let n of e)t.append(`files`,n);let n=await fetch(`/api/upload/${encodeURIComponent(l)}?path=${encodeURIComponent(h?.path??``)}`,{method:`POST`,body:t});if(!n.ok)throw Error(await _(n));await Y(l,h?.path??``)}catch(e){W(y(e))}finally{H(!1),J.current&&(J.current.value=``)}}},Q=h?.path??``,$=Q.split(`/`).filter(Boolean);return(0,f.jsxs)(de,{children:[(0,f.jsx)(oe,{}),(0,f.jsxs)(fe,{children:[(0,f.jsxs)(pe,{children:[(0,f.jsxs)(ge,{children:[(0,f.jsx)(_e,{children:(0,f.jsx)(`img`,{alt:``,src:`/app-icon`})}),(0,f.jsxs)(ve,{children:[(0,f.jsx)(`h1`,{children:r?.device??n.sharedFolders}),(0,f.jsxs)(`span`,{children:[r?.app??`Yet Another File Manager`,r?.version?` · v${r.version}`:``]})]})]}),(0,f.jsx)(me,{children:(0,f.jsx)(he,{"aria-label":n.language,onChange:e=>{let n=e.target.value;t(n),ae(n)},title:n.language,value:e,children:c.map(e=>(0,f.jsx)(`option`,{value:e.id,children:e.label},e.id))})})]}),(0,f.jsx)(ye,{children:a.map(e=>(0,f.jsx)(be,{$active:e.id===l,onClick:()=>Oe(e.id),type:`button`,children:e.name},e.id))})]}),(0,f.jsxs)(S,{children:[U&&(0,f.jsx)(C,{children:U}),a.length===0?(0,f.jsx)(L,{children:n.noShares}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(w,{children:[(0,f.jsxs)(T,{children:[(0,f.jsx)(O,{onClick:()=>l&&void Y(l,``),type:`button`,children:h?.name??n.sharedFolders}),$.map((e,t)=>(0,f.jsxs)(E,{children:[(0,f.jsx)(D,{children:`/`}),(0,f.jsx)(O,{$last:t===$.length-1,onClick:()=>l&&void Y(l,$.slice(0,t+1).join(`/`)),type:`button`,children:e})]},`${e}-${t}`))]}),(0,f.jsxs)(k,{children:[(0,f.jsxs)(A,{title:n.showHidden,children:[(0,f.jsx)(`input`,{checked:G,onChange:e=>ke(e.currentTarget.checked),type:`checkbox`}),n.showHidden]}),(0,f.jsxs)(A,{title:n.showSystem,children:[(0,f.jsx)(`input`,{checked:K,onChange:e=>Ae(e.currentTarget.checked),type:`checkbox`}),n.showSystem]}),Q.length>0&&(0,f.jsx)(j,{onClick:()=>l&&void Y(l,$.slice(0,-1).join(`/`)),title:n.up,type:`button`,children:(0,f.jsx)(ue,{size:15})}),(0,f.jsx)(j,{disabled:z,onClick:()=>l&&void Y(l,Q),title:n.refresh,type:`button`,children:(0,f.jsx)(ce,{size:15})}),(0,f.jsxs)(M,{disabled:V||!h,onClick:()=>J.current?.click(),title:n.upload,type:`button`,children:[(0,f.jsx)(le,{size:14}),V?n.uploading:n.upload]}),(0,f.jsx)(`input`,{hidden:!0,multiple:!0,onChange:e=>void je(e.currentTarget.files),ref:J,type:`file`})]})]}),(0,f.jsx)(N,{children:z&&!h?(0,f.jsx)(L,{children:n.reading}):Z.length>0?(0,f.jsxs)(xe,{children:[(0,f.jsx)(`thead`,{children:(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`th`,{children:(0,f.jsxs)(P,{onClick:()=>X(`name`),type:`button`,children:[n.name,(0,f.jsx)(F,{children:q.column===`name`?q.descending?`▼`:`▲`:``})]})}),(0,f.jsx)(`th`,{children:(0,f.jsxs)(P,{onClick:()=>X(`size`),type:`button`,children:[n.size,(0,f.jsx)(F,{children:q.column===`size`?q.descending?`▼`:`▲`:``})]})}),(0,f.jsx)(`th`,{children:(0,f.jsxs)(P,{onClick:()=>X(`modified`),type:`button`,children:[n.modified,(0,f.jsx)(F,{children:q.column===`modified`?q.descending?`▼`:`▲`:``})]})})]})}),(0,f.jsx)(`tbody`,{children:Z.map(e=>(0,f.jsxs)(`tr`,{children:[(0,f.jsx)(`td`,{children:e.isDirectory?(0,f.jsxs)(Se,{onClick:()=>l&&void Y(l,e.path),type:`button`,children:[(0,f.jsx)(x,{size:16}),(0,f.jsx)(I,{children:e.name})]}):(0,f.jsxs)(Ce,{href:v(l??``,e.path),title:`${n.download} ${e.name}`,children:[(0,f.jsx)(se,{size:16}),(0,f.jsx)(I,{children:e.name})]})}),(0,f.jsx)(`td`,{"data-label":n.size,children:e.isDirectory?`—`:ee(e.size)}),(0,f.jsx)(`td`,{"data-label":n.modified,children:b(e.modified)})]},e.path))})]}):(0,f.jsx)(L,{children:z?n.reading:n.empty})}),(0,f.jsx)(we,{children:n.footnote})]})]})]})}async function g(e){let t=await fetch(e);if(!t.ok)throw Error(await _(t));return await t.json()}async function _(e){try{return(await e.json()).error??e.statusText}catch{return e.statusText}}function v(e,t){return`/file/${encodeURIComponent(e)}/${t.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`)}`}function y(e){return e instanceof Error?e.message:String(e)}function b(e){return e?new Intl.DateTimeFormat(void 0,{dateStyle:`medium`,timeStyle:`short`}).format(new Date(e)):`—`}function x({size:e}){return(0,f.jsx)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinejoin:`round`,strokeWidth:`1.5`,viewBox:`0 0 24 24`,width:e,children:(0,f.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17z`})})}function se({size:e}){return(0,f.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinejoin:`round`,strokeWidth:`1.5`,viewBox:`0 0 24 24`,width:e,children:[(0,f.jsx)(`path`,{d:`M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 20V5A1.5 1.5 0 0 1 6 3.5Z`}),(0,f.jsx)(`path`,{d:`M14 3.5V8h4`})]})}function ce({size:e}){return(0,f.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:`1.6`,viewBox:`0 0 24 24`,width:e,children:[(0,f.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 6.7`}),(0,f.jsx)(`path`,{d:`M20 4v7h-7`})]})}function le({size:e}){return(0,f.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.6`,viewBox:`0 0 24 24`,width:e,children:[(0,f.jsx)(`path`,{d:`M12 16V4`}),(0,f.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,f.jsx)(`path`,{d:`M5 16v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3`})]})}function ue({size:e}){return(0,f.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.6`,viewBox:`0 0 24 24`,width:e,children:[(0,f.jsx)(`path`,{d:`M12 19V5`}),(0,f.jsx)(`path`,{d:`m6 11 6-6 6 6`})]})}var de=a.div`
    min-height: 100vh;
    padding: 28px clamp(16px, 4vw, 48px) 48px;
    background: radial-gradient(1100px 620px at 8% -12%, rgba(var(--accent-secondary-rgb), 0.14), transparent 62%),
    radial-gradient(900px 520px at 108% 16%, rgba(var(--accent-rgb), 0.10), transparent 58%),
    linear-gradient(180deg, var(--bg-primary), var(--bg-media));
`,fe=a.header`
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 1180px;
    margin: 0 auto 22px;
`,pe=a.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
`,me=a.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,he=a.select`
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
`,ge=a.div`
    display: flex;
    align-items: center;
    gap: 14px;
`,_e=a.span`
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
`,ve=a.div`
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
`,ye=a.div`
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 2px;
    scrollbar-width: thin;
`,be=a.button`
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
`,S=a.main`
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 1180px;
    margin: 0 auto;
`,C=a.div`
    padding: 12px 14px;
    border: 1px solid rgba(248, 113, 113, 0.35);
    border-radius: var(--radius-md);
    background: rgba(239, 68, 68, 0.12);
    color: #fecaca;
    font-size: 12.5px;
    overflow-wrap: anywhere;
`,w=a.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
`,T=a.div`
    display: flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
    flex-wrap: wrap;
`,E=a.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
`,D=a.span`
    color: var(--text-muted);
    font-size: 12px;
`,O=a.button`
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
`,k=a.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-wrap: wrap;
`,A=a.label`
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
`,j=a.button`
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
`,M=a.button`
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
`,N=a.section`
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.55);
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(10px);
`,xe=a.table`
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
`,P=a.button`
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
`,F=a.span`
    color: var(--accent-primary);
    font-size: 8px;
`,Se=a.button`
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
`,Ce=a.a`
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
`,I=a.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,L=a.div`
    padding: 42px 20px;
    color: var(--text-muted);
    font-size: 13px;
    text-align: center;
`,we=a.p`
    margin: 2px 2px 0;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.55;
`,R=document.getElementById(`share-root`);R&&(0,s.createRoot)(R).render((0,f.jsx)(o.StrictMode,{children:(0,f.jsx)(h,{})}));