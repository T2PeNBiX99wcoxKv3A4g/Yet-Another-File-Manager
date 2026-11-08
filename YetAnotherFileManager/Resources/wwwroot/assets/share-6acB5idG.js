import{E as e,M as t,O as n,f as r,j as i,k as a,r as ee,w as o}from"./theme-GtEFL-tp.js";var s=t(i(),1),c=a(),l=[{id:`en`,label:`English`},{id:`ja`,label:`日本語`},{id:`zh-CN`,label:`简体中文`},{id:`zh-TW`,label:`繁體中文`}],u={sharedFolders:`Shared folders`,noShares:`No folders are shared over the web on this device.`,reading:`Reading…`,empty:`This folder is empty.`,upload:`Upload`,uploading:`Uploading…`,refresh:`Refresh`,up:`Up one folder`,name:`Name`,size:`Size`,modified:`Modified`,footnote:`Click a file to download it. Uploaded files are written into the folder you are viewing.`,showHidden:`Show hidden files`,showSystem:`Show system files`,language:`Language`,download:`Download`,error:`Something went wrong.`},d={en:u,ja:{sharedFolders:`共有フォルダー`,noShares:`この端末では Web で共有しているフォルダーがありません。`,reading:`読み込み中…`,empty:`このフォルダーは空です。`,upload:`アップロード`,uploading:`アップロード中…`,refresh:`更新`,up:`上の階層へ`,name:`名前`,size:`サイズ`,modified:`更新日時`,footnote:`ファイルをクリックするとダウンロードします。アップロードしたファイルは表示中のフォルダーに保存されます。`,showHidden:`隠しファイルを表示`,showSystem:`システムファイルを表示`,language:`言語`,download:`ダウンロード`,error:`問題が発生しました。`},"zh-CN":{sharedFolders:`共享文件夹`,noShares:`此设备没有通过网页共享任何文件夹。`,reading:`读取中…`,empty:`此文件夹是空的。`,upload:`上传`,uploading:`上传中…`,refresh:`刷新`,up:`上一级`,name:`名称`,size:`大小`,modified:`修改时间`,footnote:`点击文件即可下载。上传的文件会写入当前浏览的文件夹。`,showHidden:`显示隐藏文件`,showSystem:`显示系统文件`,language:`语言`,download:`下载`,error:`发生错误。`},"zh-TW":{sharedFolders:`共享資料夾`,noShares:`此裝置沒有透過網頁分享任何資料夾。`,reading:`讀取中…`,empty:`此資料夾是空的。`,upload:`上傳`,uploading:`上傳中…`,refresh:`重新整理`,up:`上一層`,name:`名稱`,size:`大小`,modified:`修改時間`,footnote:`點擊檔案即可下載。上傳的檔案會寫入目前瀏覽的資料夾。`,showHidden:`顯示隱藏檔案`,showSystem:`顯示系統檔案`,language:`語言`,download:`下載`,error:`發生錯誤。`}};function f(){try{let e=localStorage.getItem(`yafm.share.language`);if(e&&e in d)return e}catch{}return p(navigator.language)}function p(e){let t=(e??``).toLowerCase();return t.startsWith(`ja`)?`ja`:t.startsWith(`zh`)?t.includes(`tw`)||t.includes(`hk`)||t.includes(`hant`)?`zh-TW`:`zh-CN`:`en`}function m(){try{return localStorage.getItem(`yafm.share.language`)!==null}catch{return!1}}function h(e){return d[e]??u}function te(e){try{localStorage.setItem(`yafm.share.language`,e)}catch{}}var g=o(),ne=e`
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
`;function _(e){try{return localStorage.getItem(e)===`1`}catch{return!1}}function v(e,t){try{localStorage.setItem(e,t?`1`:`0`)}catch{}}function y(){let[e,t]=(0,s.useState)(f),n=h(e),[i,a]=(0,s.useState)(null),[o,c]=(0,s.useState)([]),[u,d]=(0,s.useState)(null),[y,R]=(0,s.useState)(null),[z,B]=(0,s.useState)(!0),[V,H]=(0,s.useState)(!1),[U,W]=(0,s.useState)(null),[G,Te]=(0,s.useState)(()=>_(`yafm.share.hidden`)),[K,Ee]=(0,s.useState)(()=>_(`yafm.share.system`)),[q,De]=(0,s.useState)(()=>{try{let e=JSON.parse(localStorage.getItem(`yafm.share.sort`)??`null`);if(e&&[`name`,`size`,`modified`].includes(e.column))return e}catch{}return{column:`name`,descending:!1}}),J=(0,s.useRef)(null);(0,s.useEffect)(()=>{document.documentElement.lang=e},[e]),(0,s.useEffect)(()=>{(async()=>{try{let e=await b(`/api/config`);a(e),ee(e.accent,e.secondary),document.title=`${e.device} · ${e.app}`,!m()&&e.language&&t(p(e.language))}catch{}try{let e=await b(`/api/shares`);c(e.shares),d(t=>t??e.shares[0]?.id??null),e.shares.length===0&&B(!1)}catch(e){B(!1),W(S(e))}})()},[]);let Y=async(e,t,n=G,r=K)=>{B(!0),W(null);try{let i=await b(`/api/browse/${encodeURIComponent(e)}?path=${encodeURIComponent(t)}&hidden=${+!!n}&system=${+!!r}`);R(i)}catch(e){W(S(e)),R(null)}finally{B(!1)}};(0,s.useEffect)(()=>{u&&Y(u,``)},[u]);let Oe=e=>{d(e),R(null)},ke=e=>{Te(e),v(`yafm.share.hidden`,e),u&&Y(u,y?.path??``,e,K)},Ae=e=>{Ee(e),v(`yafm.share.system`,e),u&&Y(u,y?.path??``,G,e)},X=e=>{let t=q.column===e?{column:e,descending:!q.descending}:{column:e,descending:!1};De(t);try{localStorage.setItem(`yafm.share.sort`,JSON.stringify(t))}catch{}},Z=(0,s.useMemo)(()=>{let e=[...y?.entries??[]],t=q.descending?-1:1;return e.sort((e,n)=>e.isDirectory===n.isDirectory?(q.column===`name`?e.name.localeCompare(n.name,void 0,{numeric:!0,sensitivity:`base`}):q.column===`size`?e.size-n.size:e.modified-n.modified)*t:e.isDirectory?-1:1)},[y,q]),je=async e=>{if(u&&e&&e.length!==0){H(!0),W(null);try{let t=new FormData;for(let n of e)t.append(`files`,n);let n=await fetch(`/api/upload/${encodeURIComponent(u)}?path=${encodeURIComponent(y?.path??``)}`,{method:`POST`,body:t});if(!n.ok)throw Error(await x(n));await Y(u,y?.path??``)}catch(e){W(S(e))}finally{H(!1),J.current&&(J.current.value=``)}}},Q=y?.path??``,$=Q.split(`/`).filter(Boolean);return(0,g.jsxs)(ue,{children:[(0,g.jsx)(ne,{}),(0,g.jsxs)(de,{children:[(0,g.jsxs)(fe,{children:[(0,g.jsxs)(he,{children:[(0,g.jsx)(ge,{children:(0,g.jsx)(`img`,{alt:``,src:`/app-icon`})}),(0,g.jsxs)(_e,{children:[(0,g.jsx)(`h1`,{children:i?.device??n.sharedFolders}),(0,g.jsxs)(`span`,{children:[i?.app??`Yet Another File Manager`,i?.version?` · v${i.version}`:``]})]})]}),(0,g.jsx)(pe,{children:(0,g.jsx)(me,{"aria-label":n.language,onChange:e=>{let n=e.target.value;t(n),te(n)},title:n.language,value:e,children:l.map(e=>(0,g.jsx)(`option`,{value:e.id,children:e.label},e.id))})})]}),(0,g.jsx)(ve,{children:o.map(e=>(0,g.jsx)(ye,{$active:e.id===u,onClick:()=>Oe(e.id),type:`button`,children:e.name},e.id))})]}),(0,g.jsxs)(be,{children:[U&&(0,g.jsx)(C,{children:U}),o.length===0?(0,g.jsx)(L,{children:n.noShares}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(w,{children:[(0,g.jsxs)(T,{children:[(0,g.jsx)(O,{onClick:()=>u&&void Y(u,``),type:`button`,children:y?.name??n.sharedFolders}),$.map((e,t)=>(0,g.jsxs)(E,{children:[(0,g.jsx)(D,{children:`/`}),(0,g.jsx)(O,{$last:t===$.length-1,onClick:()=>u&&void Y(u,$.slice(0,t+1).join(`/`)),type:`button`,children:e})]},`${e}-${t}`))]}),(0,g.jsxs)(k,{children:[(0,g.jsxs)(A,{title:n.showHidden,children:[(0,g.jsx)(`input`,{checked:G,onChange:e=>ke(e.currentTarget.checked),type:`checkbox`}),n.showHidden]}),(0,g.jsxs)(A,{title:n.showSystem,children:[(0,g.jsx)(`input`,{checked:K,onChange:e=>Ae(e.currentTarget.checked),type:`checkbox`}),n.showSystem]}),Q.length>0&&(0,g.jsx)(j,{onClick:()=>u&&void Y(u,$.slice(0,-1).join(`/`)),title:n.up,type:`button`,children:(0,g.jsx)(le,{size:15})}),(0,g.jsx)(j,{disabled:z,onClick:()=>u&&void Y(u,Q),title:n.refresh,type:`button`,children:(0,g.jsx)(se,{size:15})}),(0,g.jsxs)(M,{disabled:V||!y,onClick:()=>J.current?.click(),title:n.upload,type:`button`,children:[(0,g.jsx)(ce,{size:14}),V?n.uploading:n.upload]}),(0,g.jsx)(`input`,{hidden:!0,multiple:!0,onChange:e=>void je(e.currentTarget.files),ref:J,type:`file`})]})]}),(0,g.jsx)(N,{children:z&&!y?(0,g.jsx)(L,{children:n.reading}):Z.length>0?(0,g.jsxs)(xe,{children:[(0,g.jsx)(`thead`,{children:(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`th`,{children:(0,g.jsxs)(P,{onClick:()=>X(`name`),type:`button`,children:[n.name,(0,g.jsx)(F,{children:q.column===`name`?q.descending?`▼`:`▲`:``})]})}),(0,g.jsx)(`th`,{children:(0,g.jsxs)(P,{onClick:()=>X(`size`),type:`button`,children:[n.size,(0,g.jsx)(F,{children:q.column===`size`?q.descending?`▼`:`▲`:``})]})}),(0,g.jsx)(`th`,{children:(0,g.jsxs)(P,{onClick:()=>X(`modified`),type:`button`,children:[n.modified,(0,g.jsx)(F,{children:q.column===`modified`?q.descending?`▼`:`▲`:``})]})})]})}),(0,g.jsx)(`tbody`,{children:Z.map(e=>(0,g.jsxs)(`tr`,{children:[(0,g.jsx)(`td`,{children:e.isDirectory?(0,g.jsxs)(Se,{onClick:()=>u&&void Y(u,e.path),type:`button`,children:[(0,g.jsx)(ae,{size:16}),(0,g.jsx)(I,{children:e.name})]}):(0,g.jsxs)(Ce,{href:re(u??``,e.path),title:`${n.download} ${e.name}`,children:[(0,g.jsx)(oe,{size:16}),(0,g.jsx)(I,{children:e.name})]})}),(0,g.jsx)(`td`,{"data-label":n.size,children:e.isDirectory?`—`:r(e.size)}),(0,g.jsx)(`td`,{"data-label":n.modified,children:ie(e.modified)})]},e.path))})]}):(0,g.jsx)(L,{children:z?n.reading:n.empty})}),(0,g.jsx)(we,{children:n.footnote})]})]})]})}async function b(e){let t=await fetch(e);if(!t.ok)throw Error(await x(t));return await t.json()}async function x(e){try{return(await e.json()).error??e.statusText}catch{return e.statusText}}function re(e,t){return`/file/${encodeURIComponent(e)}/${t.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`)}`}function S(e){return e instanceof Error?e.message:String(e)}function ie(e){return e?new Intl.DateTimeFormat(void 0,{dateStyle:`medium`,timeStyle:`short`}).format(new Date(e)):`—`}function ae({size:e}){return(0,g.jsx)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinejoin:`round`,strokeWidth:`1.5`,viewBox:`0 0 24 24`,width:e,children:(0,g.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17z`})})}function oe({size:e}){return(0,g.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinejoin:`round`,strokeWidth:`1.5`,viewBox:`0 0 24 24`,width:e,children:[(0,g.jsx)(`path`,{d:`M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 20V5A1.5 1.5 0 0 1 6 3.5Z`}),(0,g.jsx)(`path`,{d:`M14 3.5V8h4`})]})}function se({size:e}){return(0,g.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:`1.6`,viewBox:`0 0 24 24`,width:e,children:[(0,g.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 6.7`}),(0,g.jsx)(`path`,{d:`M20 4v7h-7`})]})}function ce({size:e}){return(0,g.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.6`,viewBox:`0 0 24 24`,width:e,children:[(0,g.jsx)(`path`,{d:`M12 16V4`}),(0,g.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,g.jsx)(`path`,{d:`M5 16v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3`})]})}function le({size:e}){return(0,g.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.6`,viewBox:`0 0 24 24`,width:e,children:[(0,g.jsx)(`path`,{d:`M12 19V5`}),(0,g.jsx)(`path`,{d:`m6 11 6-6 6 6`})]})}var ue=n.div`
    min-height: 100vh;
    padding: 28px clamp(16px, 4vw, 48px) 48px;
    background:
        radial-gradient(1100px 620px at 8% -12%, rgba(var(--accent-secondary-rgb), 0.14), transparent 62%),
        radial-gradient(900px 520px at 108% 16%, rgba(var(--accent-rgb), 0.10), transparent 58%),
        linear-gradient(180deg, var(--bg-primary), var(--bg-media));
`,de=n.header`
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 1180px;
    margin: 0 auto 22px;
`,fe=n.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
`,pe=n.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,me=n.select`
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
`,he=n.div`
    display: flex;
    align-items: center;
    gap: 14px;
`,ge=n.span`
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
`,_e=n.div`
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
`,ve=n.div`
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 2px;
    scrollbar-width: thin;
`,ye=n.button`
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
`,be=n.main`
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 1180px;
    margin: 0 auto;
`,C=n.div`
    padding: 12px 14px;
    border: 1px solid rgba(248, 113, 113, 0.35);
    border-radius: var(--radius-md);
    background: rgba(239, 68, 68, 0.12);
    color: #fecaca;
    font-size: 12.5px;
    overflow-wrap: anywhere;
`,w=n.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
`,T=n.div`
    display: flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
    flex-wrap: wrap;
`,E=n.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
`,D=n.span`
    color: var(--text-muted);
    font-size: 12px;
`,O=n.button`
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
`,k=n.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-wrap: wrap;
`,A=n.label`
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
`,j=n.button`
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
`,M=n.button`
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
`,N=n.section`
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.55);
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(10px);
`,xe=n.table`
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
`,P=n.button`
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
`,F=n.span`
    color: var(--accent-primary);
    font-size: 8px;
`,Se=n.button`
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
`,Ce=n.a`
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
`,I=n.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,L=n.div`
    padding: 42px 20px;
    color: var(--text-muted);
    font-size: 13px;
    text-align: center;
`,we=n.p`
    margin: 2px 2px 0;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.55;
`,R=document.getElementById(`share-root`);R&&(0,c.createRoot)(R).render((0,g.jsx)(s.StrictMode,{children:(0,g.jsx)(y,{})}));