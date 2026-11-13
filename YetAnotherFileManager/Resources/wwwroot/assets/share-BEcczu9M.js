import{n as e}from"./rolldown-runtime-WkwZ5CU-.js";import{B as t,C as n,D as r,F as i,R as a,U as o,V as s,c}from"./format-DzQJIS45.js";var l=e(o(),1),u=s(),ee=[{id:`en`,label:`English`},{id:`ja`,label:`日本語`},{id:`zh-CN`,label:`简体中文`},{id:`zh-TW`,label:`繁體中文`}],d={sharedFolders:`Shared folders`,noShares:`No folders are shared over the web on this device.`,reading:`Reading…`,empty:`This folder is empty.`,upload:`Upload`,uploading:`Uploading…`,refresh:`Refresh`,up:`Up one folder`,name:`Name`,size:`Size`,modified:`Modified`,footnote:`Click a file to download it. Uploaded files are written into the folder you are viewing.`,showHidden:`Show hidden files`,showSystem:`Show system files`,language:`Language`,download:`Download`,error:`Something went wrong.`},f={en:d,ja:{sharedFolders:`共有フォルダー`,noShares:`この端末では Web で共有しているフォルダーがありません。`,reading:`読み込み中…`,empty:`このフォルダーは空です。`,upload:`アップロード`,uploading:`アップロード中…`,refresh:`更新`,up:`上の階層へ`,name:`名前`,size:`サイズ`,modified:`更新日時`,footnote:`ファイルをクリックするとダウンロードします。アップロードしたファイルは表示中のフォルダーに保存されます。`,showHidden:`隠しファイルを表示`,showSystem:`システムファイルを表示`,language:`言語`,download:`ダウンロード`,error:`問題が発生しました。`},"zh-CN":{sharedFolders:`共享文件夹`,noShares:`此设备没有通过网页共享任何文件夹。`,reading:`读取中…`,empty:`此文件夹是空的。`,upload:`上传`,uploading:`上传中…`,refresh:`刷新`,up:`上一级`,name:`名称`,size:`大小`,modified:`修改时间`,footnote:`点击文件即可下载。上传的文件会写入当前浏览的文件夹。`,showHidden:`显示隐藏文件`,showSystem:`显示系统文件`,language:`语言`,download:`下载`,error:`发生错误。`},"zh-TW":{sharedFolders:`共享資料夾`,noShares:`此裝置沒有透過網頁分享任何資料夾。`,reading:`讀取中…`,empty:`此資料夾是空的。`,upload:`上傳`,uploading:`上傳中…`,refresh:`重新整理`,up:`上一層`,name:`名稱`,size:`大小`,modified:`修改時間`,footnote:`點擊檔案即可下載。上傳的檔案會寫入目前瀏覽的資料夾。`,showHidden:`顯示隱藏檔案`,showSystem:`顯示系統檔案`,language:`語言`,download:`下載`,error:`發生錯誤。`}};function p(){try{let e=localStorage.getItem(`yafm.share.language`);if(e&&e in f)return e}catch{}return m(navigator.language)}function m(e){let t=(e??``).toLowerCase();return t.startsWith(`ja`)?`ja`:t.startsWith(`zh`)?t.includes(`tw`)||t.includes(`hk`)||t.includes(`hant`)?`zh-TW`:`zh-CN`:`en`}function te(){try{return localStorage.getItem(`yafm.share.language`)!==null}catch{return!1}}function ne(e){return f[e]??d}function re(e){try{localStorage.setItem(`yafm.share.language`,e)}catch{}}var h=i(),g=a`
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
`;function _(e){try{return localStorage.getItem(e)===`1`}catch{return!1}}function v(e,t){try{localStorage.setItem(e,t?`1`:`0`)}catch{}}function y(){let[e,t]=(0,l.useState)(p),i=ne(e),[a,o]=(0,l.useState)(null),s=r(`system`),[u,d]=(0,l.useState)([]),[f,y]=(0,l.useState)(null),[I,L]=(0,l.useState)(null),[R,z]=(0,l.useState)(!0),[B,V]=(0,l.useState)(!1),[H,U]=(0,l.useState)(null),[W,Oe]=(0,l.useState)(()=>_(`yafm.share.hidden`)),[G,ke]=(0,l.useState)(()=>_(`yafm.share.system`)),[K,Ae]=(0,l.useState)(()=>{try{let e=JSON.parse(localStorage.getItem(`yafm.share.sort`)??`null`);if(e&&[`name`,`size`,`modified`].includes(e.column))return e}catch{}return{column:`name`,descending:!1}}),q=(0,l.useRef)(null);(0,l.useEffect)(()=>{document.documentElement.lang=e},[e]),(0,l.useEffect)(()=>{a&&n(a.accent,a.secondary,s)},[a,s]),(0,l.useEffect)(()=>{(async()=>{try{let e=await b(`/api/config`);o(e),document.title=`${e.device} · ${e.app}`,!te()&&e.language&&t(m(e.language))}catch{}try{let e=await b(`/api/shares`);d(e.shares),y(t=>t??e.shares[0]?.id??null),e.shares.length===0&&z(!1)}catch(e){z(!1),U(S(e))}})()},[]);let J=async(e,t,n=W,r=G)=>{z(!0),U(null);try{let i=await b(`/api/browse/${encodeURIComponent(e)}?path=${encodeURIComponent(t)}&hidden=${+!!n}&system=${+!!r}`);L(i)}catch(e){U(S(e)),L(null)}finally{z(!1)}};(0,l.useEffect)(()=>{f&&J(f,``)},[f]);let je=e=>{y(e),L(null)},Y=e=>{Oe(e),v(`yafm.share.hidden`,e),f&&J(f,I?.path??``,e,G)},Me=e=>{ke(e),v(`yafm.share.system`,e),f&&J(f,I?.path??``,W,e)},X=e=>{let t=K.column===e?{column:e,descending:!K.descending}:{column:e,descending:!1};Ae(t);try{localStorage.setItem(`yafm.share.sort`,JSON.stringify(t))}catch{}},Z=(0,l.useMemo)(()=>{let e=[...I?.entries??[]],t=K.descending?-1:1;return e.sort((e,n)=>e.isDirectory===n.isDirectory?(K.column===`name`?e.name.localeCompare(n.name,void 0,{numeric:!0,sensitivity:`base`}):K.column===`size`?e.size-n.size:e.modified-n.modified)*t:e.isDirectory?-1:1)},[I,K]),Ne=async e=>{if(f&&e&&e.length!==0){V(!0),U(null);try{let t=new FormData;for(let n of e)t.append(`files`,n);let n=await fetch(`/api/upload/${encodeURIComponent(f)}?path=${encodeURIComponent(I?.path??``)}`,{method:`POST`,body:t});if(!n.ok)throw Error(await x(n));await J(f,I?.path??``)}catch(e){U(S(e))}finally{V(!1),q.current&&(q.current.value=``)}}},Q=I?.path??``,$=Q.split(`/`).filter(Boolean);return(0,h.jsxs)(de,{children:[(0,h.jsx)(g,{}),(0,h.jsxs)(fe,{children:[(0,h.jsxs)(pe,{children:[(0,h.jsxs)(ge,{children:[(0,h.jsx)(_e,{children:(0,h.jsx)(`img`,{alt:``,src:`/app-icon`})}),(0,h.jsxs)(ve,{children:[(0,h.jsx)(`h1`,{children:a?.device??i.sharedFolders}),(0,h.jsxs)(`span`,{children:[a?.app??`Yet Another File Manager`,a?.version?` · v${a.version}`:``]})]})]}),(0,h.jsx)(me,{children:(0,h.jsx)(he,{"aria-label":i.language,onChange:e=>{let n=e.target.value;t(n),re(n)},title:i.language,value:e,children:ee.map(e=>(0,h.jsx)(`option`,{value:e.id,children:e.label},e.id))})})]}),(0,h.jsx)(ye,{children:u.map(e=>(0,h.jsx)(be,{$active:e.id===f,onClick:()=>je(e.id),type:`button`,children:e.name},e.id))})]}),(0,h.jsxs)(xe,{children:[H&&(0,h.jsx)(Se,{children:H}),u.length===0?(0,h.jsx)(F,{children:i.noShares}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(C,{children:[(0,h.jsxs)(w,{children:[(0,h.jsx)(D,{onClick:()=>f&&void J(f,``),type:`button`,children:I?.name??i.sharedFolders}),$.map((e,t)=>(0,h.jsxs)(T,{children:[(0,h.jsx)(E,{children:`/`}),(0,h.jsx)(D,{$last:t===$.length-1,onClick:()=>f&&void J(f,$.slice(0,t+1).join(`/`)),type:`button`,children:e})]},`${e}-${t}`))]}),(0,h.jsxs)(O,{children:[(0,h.jsxs)(k,{title:i.showHidden,children:[(0,h.jsx)(`input`,{checked:W,onChange:e=>Y(e.currentTarget.checked),type:`checkbox`}),i.showHidden]}),(0,h.jsxs)(k,{title:i.showSystem,children:[(0,h.jsx)(`input`,{checked:G,onChange:e=>Me(e.currentTarget.checked),type:`checkbox`}),i.showSystem]}),Q.length>0&&(0,h.jsx)(A,{onClick:()=>f&&void J(f,$.slice(0,-1).join(`/`)),title:i.up,type:`button`,children:(0,h.jsx)(ue,{size:15})}),(0,h.jsx)(A,{disabled:R,onClick:()=>f&&void J(f,Q),title:i.refresh,type:`button`,children:(0,h.jsx)(ce,{size:15})}),(0,h.jsxs)(j,{disabled:B||!I,onClick:()=>q.current?.click(),title:i.upload,type:`button`,children:[(0,h.jsx)(le,{size:14}),B?i.uploading:i.upload]}),(0,h.jsx)(`input`,{hidden:!0,multiple:!0,onChange:e=>void Ne(e.currentTarget.files),ref:q,type:`file`})]})]}),(0,h.jsx)(Ce,{children:R&&!I?(0,h.jsx)(F,{children:i.reading}):Z.length>0?(0,h.jsxs)(we,{children:[(0,h.jsx)(`thead`,{children:(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`th`,{children:(0,h.jsxs)(M,{onClick:()=>X(`name`),type:`button`,children:[i.name,(0,h.jsx)(N,{children:K.column===`name`?K.descending?`▼`:`▲`:``})]})}),(0,h.jsx)(`th`,{children:(0,h.jsxs)(M,{onClick:()=>X(`size`),type:`button`,children:[i.size,(0,h.jsx)(N,{children:K.column===`size`?K.descending?`▼`:`▲`:``})]})}),(0,h.jsx)(`th`,{children:(0,h.jsxs)(M,{onClick:()=>X(`modified`),type:`button`,children:[i.modified,(0,h.jsx)(N,{children:K.column===`modified`?K.descending?`▼`:`▲`:``})]})})]})}),(0,h.jsx)(`tbody`,{children:Z.map(e=>(0,h.jsxs)(`tr`,{children:[(0,h.jsx)(`td`,{children:e.isDirectory?(0,h.jsxs)(Te,{onClick:()=>f&&void J(f,e.path),type:`button`,children:[(0,h.jsx)(oe,{size:16}),(0,h.jsx)(P,{children:e.name})]}):(0,h.jsxs)(Ee,{href:ie(f??``,e.path),title:`${i.download} ${e.name}`,children:[(0,h.jsx)(se,{size:16}),(0,h.jsx)(P,{children:e.name})]})}),(0,h.jsx)(`td`,{"data-label":i.size,children:e.isDirectory?`—`:c(e.size)}),(0,h.jsx)(`td`,{"data-label":i.modified,children:ae(e.modified)})]},e.path))})]}):(0,h.jsx)(F,{children:R?i.reading:i.empty})}),(0,h.jsx)(De,{children:i.footnote})]})]})]})}async function b(e){let t=await fetch(e);if(!t.ok)throw Error(await x(t));return await t.json()}async function x(e){try{return(await e.json()).error??e.statusText}catch{return e.statusText}}function ie(e,t){return`/file/${encodeURIComponent(e)}/${t.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`)}`}function S(e){return e instanceof Error?e.message:String(e)}function ae(e){return e?new Intl.DateTimeFormat(void 0,{dateStyle:`medium`,timeStyle:`short`}).format(new Date(e)):`—`}function oe({size:e}){return(0,h.jsx)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinejoin:`round`,strokeWidth:`1.5`,viewBox:`0 0 24 24`,width:e,children:(0,h.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17z`})})}function se({size:e}){return(0,h.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinejoin:`round`,strokeWidth:`1.5`,viewBox:`0 0 24 24`,width:e,children:[(0,h.jsx)(`path`,{d:`M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 20V5A1.5 1.5 0 0 1 6 3.5Z`}),(0,h.jsx)(`path`,{d:`M14 3.5V8h4`})]})}function ce({size:e}){return(0,h.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:`1.6`,viewBox:`0 0 24 24`,width:e,children:[(0,h.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 6.7`}),(0,h.jsx)(`path`,{d:`M20 4v7h-7`})]})}function le({size:e}){return(0,h.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.6`,viewBox:`0 0 24 24`,width:e,children:[(0,h.jsx)(`path`,{d:`M12 16V4`}),(0,h.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,h.jsx)(`path`,{d:`M5 16v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3`})]})}function ue({size:e}){return(0,h.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.6`,viewBox:`0 0 24 24`,width:e,children:[(0,h.jsx)(`path`,{d:`M12 19V5`}),(0,h.jsx)(`path`,{d:`m6 11 6-6 6 6`})]})}var de=t.div`
    min-height: 100vh;
    padding: 28px clamp(16px, 4vw, 48px) 48px;
    background: radial-gradient(1100px 620px at 8% -12%, rgba(var(--accent-secondary-rgb), 0.14), transparent 62%),
    radial-gradient(900px 520px at 108% 16%, rgba(var(--accent-rgb), 0.10), transparent 58%),
    linear-gradient(180deg, var(--bg-primary), var(--bg-media));
`,fe=t.header`
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 1180px;
    margin: 0 auto 22px;
`,pe=t.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
`,me=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
`,he=t.select`
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
`,ge=t.div`
    display: flex;
    align-items: center;
    gap: 14px;
`,_e=t.span`
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
`,ve=t.div`
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
`,ye=t.div`
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 2px;
    scrollbar-width: thin;
`,be=t.button`
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
`,xe=t.main`
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 1180px;
    margin: 0 auto;
`,Se=t.div`
    padding: 12px 14px;
    border: 1px solid rgba(248, 113, 113, 0.35);
    border-radius: var(--radius-md);
    background: rgba(239, 68, 68, 0.12);
    color: #fecaca;
    font-size: 12.5px;
    overflow-wrap: anywhere;
`,C=t.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
`,w=t.div`
    display: flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
    flex-wrap: wrap;
`,T=t.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
`,E=t.span`
    color: var(--text-muted);
    font-size: 12px;
`,D=t.button`
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
`,O=t.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-wrap: wrap;
`,k=t.label`
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
`,A=t.button`
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
`,j=t.button`
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
`,Ce=t.section`
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.55);
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(10px);
`,we=t.table`
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
`,M=t.button`
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
`,N=t.span`
    color: var(--accent-primary);
    font-size: 8px;
`,Te=t.button`
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
`,Ee=t.a`
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
`,P=t.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,F=t.div`
    padding: 42px 20px;
    color: var(--text-muted);
    font-size: 13px;
    text-align: center;
`,De=t.p`
    margin: 2px 2px 0;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.55;
`,I=document.getElementById(`share-root`);I&&(0,u.createRoot)(I).render((0,h.jsx)(l.StrictMode,{children:(0,h.jsx)(y,{})}));