import{E as e,M as t,O as n,f as r,j as i,k as a,r as o,w as s}from"./theme-GtEFL-tp.js";var c=a(),l=t(i(),1),u=s(),d=e`
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
`;function f(){let[e,t]=(0,l.useState)(null),[n,i]=(0,l.useState)([]),[a,s]=(0,l.useState)(null),[c,f]=(0,l.useState)(null),[W,G]=(0,l.useState)(!0),[K,q]=(0,l.useState)(!1),[J,Y]=(0,l.useState)(null),X=(0,l.useRef)(null);(0,l.useEffect)(()=>{(async()=>{try{let e=await p(`/api/config`);t(e),o(e.accent,e.secondary),document.title=`${e.device} · ${e.app}`}catch{}try{let e=await p(`/api/shares`);i(e.shares),s(t=>t??e.shares[0]?.id??null),e.shares.length===0&&G(!1)}catch(e){G(!1),Y(g(e))}})()},[]);let Z=async(e,t)=>{G(!0),Y(null);try{let n=await p(`/api/browse/${encodeURIComponent(e)}?path=${encodeURIComponent(t)}`);f(n)}catch(e){Y(g(e)),f(null)}finally{G(!1)}};(0,l.useEffect)(()=>{a&&Z(a,``)},[a]);let re=e=>{s(e),f(null)},ie=async e=>{if(a&&e&&e.length!==0){q(!0),Y(null);try{let t=new FormData;for(let n of e)t.append(`files`,n);let n=await fetch(`/api/upload/${encodeURIComponent(a)}?path=${encodeURIComponent(c?.path??``)}`,{method:`POST`,body:t});if(!n.ok)throw Error(await m(n));await Z(a,c?.path??``)}catch(e){Y(g(e))}finally{q(!1),X.current&&(X.current.value=``)}}},Q=c?.path??``,$=Q.split(`/`).filter(Boolean);return(0,u.jsxs)(x,{children:[(0,u.jsx)(d,{}),(0,u.jsxs)(S,{children:[(0,u.jsxs)(C,{children:[(0,u.jsx)(w,{children:(0,u.jsx)(_,{size:22})}),(0,u.jsxs)(T,{children:[(0,u.jsx)(`h1`,{children:e?.device??`Shared folders`}),(0,u.jsxs)(`span`,{children:[e?.app??`Yet Another File Manager`,e?.version?` · v${e.version}`:``]})]})]}),(0,u.jsx)(E,{children:n.map(e=>(0,u.jsx)(ne,{$active:e.id===a,onClick:()=>re(e.id),type:`button`,children:e.name},e.id))})]}),(0,u.jsxs)(D,{children:[J&&(0,u.jsx)(O,{children:J}),n.length===0?(0,u.jsx)(H,{children:`No folders are shared over the web on this device.`}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(k,{children:[(0,u.jsxs)(A,{children:[(0,u.jsx)(N,{onClick:()=>a&&void Z(a,``),type:`button`,children:c?.name??`Shared folders`}),$.map((e,t)=>(0,u.jsxs)(j,{children:[(0,u.jsx)(M,{children:`/`}),(0,u.jsx)(N,{$last:t===$.length-1,onClick:()=>a&&void Z(a,$.slice(0,t+1).join(`/`)),type:`button`,children:e})]},`${e}-${t}`))]}),(0,u.jsxs)(P,{children:[Q.length>0&&(0,u.jsx)(F,{onClick:()=>a&&void Z(a,$.slice(0,-1).join(`/`)),title:`Up one folder`,type:`button`,children:(0,u.jsx)(b,{size:15})}),(0,u.jsx)(F,{disabled:W,onClick:()=>a&&void Z(a,Q),title:`Refresh`,type:`button`,children:(0,u.jsx)(v,{size:15})}),(0,u.jsxs)(I,{disabled:K||!c,onClick:()=>X.current?.click(),type:`button`,children:[(0,u.jsx)(y,{size:14}),K?`Uploading…`:`Upload`]}),(0,u.jsx)(`input`,{hidden:!0,multiple:!0,onChange:e=>void ie(e.currentTarget.files),ref:X,type:`file`})]})]}),(0,u.jsx)(L,{children:W&&!c?(0,u.jsx)(H,{children:`Reading…`}):c&&c.entries.length>0?(0,u.jsxs)(R,{children:[(0,u.jsx)(`thead`,{children:(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`th`,{children:`Name`}),(0,u.jsx)(`th`,{children:`Size`}),(0,u.jsx)(`th`,{children:`Modified`})]})}),(0,u.jsx)(`tbody`,{children:c.entries.map(e=>(0,u.jsxs)(`tr`,{children:[(0,u.jsx)(`td`,{children:e.isDirectory?(0,u.jsxs)(z,{onClick:()=>a&&void Z(a,e.path),type:`button`,children:[(0,u.jsx)(_,{size:16}),(0,u.jsx)(V,{children:e.name})]}):(0,u.jsxs)(B,{href:h(a??``,e.path),title:`Download ${e.name}`,children:[(0,u.jsx)(te,{size:16}),(0,u.jsx)(V,{children:e.name})]})}),(0,u.jsx)(`td`,{"data-label":`Size`,children:e.isDirectory?`—`:r(e.size)}),(0,u.jsx)(`td`,{"data-label":`Modified`,children:ee(e.modified)})]},e.path))})]}):(0,u.jsx)(H,{children:W?`Reading…`:`This folder is empty.`})}),(0,u.jsx)(U,{children:`Click a file to download it. Uploaded files are written into the folder you are viewing.`})]})]})]})}async function p(e){let t=await fetch(e);if(!t.ok)throw Error(await m(t));return await t.json()}async function m(e){try{return(await e.json()).error??e.statusText}catch{return e.statusText}}function h(e,t){return`/file/${encodeURIComponent(e)}/${t.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`)}`}function g(e){return e instanceof Error?e.message:String(e)}function ee(e){return e?new Intl.DateTimeFormat(void 0,{dateStyle:`medium`,timeStyle:`short`}).format(new Date(e)):`—`}function _({size:e}){return(0,u.jsx)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinejoin:`round`,strokeWidth:`1.5`,viewBox:`0 0 24 24`,width:e,children:(0,u.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17z`})})}function te({size:e}){return(0,u.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinejoin:`round`,strokeWidth:`1.5`,viewBox:`0 0 24 24`,width:e,children:[(0,u.jsx)(`path`,{d:`M6 3.5h8l4 4V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 20V5A1.5 1.5 0 0 1 6 3.5Z`}),(0,u.jsx)(`path`,{d:`M14 3.5V8h4`})]})}function v({size:e}){return(0,u.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeWidth:`1.6`,viewBox:`0 0 24 24`,width:e,children:[(0,u.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 6.7`}),(0,u.jsx)(`path`,{d:`M20 4v7h-7`})]})}function y({size:e}){return(0,u.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.6`,viewBox:`0 0 24 24`,width:e,children:[(0,u.jsx)(`path`,{d:`M12 16V4`}),(0,u.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,u.jsx)(`path`,{d:`M5 16v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3`})]})}function b({size:e}){return(0,u.jsxs)(`svg`,{fill:`none`,height:e,stroke:`currentColor`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`1.6`,viewBox:`0 0 24 24`,width:e,children:[(0,u.jsx)(`path`,{d:`M12 19V5`}),(0,u.jsx)(`path`,{d:`m6 11 6-6 6 6`})]})}var x=n.div`
    min-height: 100vh;
    padding: 28px clamp(16px, 4vw, 48px) 48px;
    background:
        radial-gradient(1100px 620px at 8% -12%, rgba(var(--accent-secondary-rgb), 0.14), transparent 62%),
        radial-gradient(900px 520px at 108% 16%, rgba(var(--accent-rgb), 0.10), transparent 58%),
        linear-gradient(180deg, var(--bg-primary), var(--bg-media));
`,S=n.header`
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 1180px;
    margin: 0 auto 22px;
`,C=n.div`
    display: flex;
    align-items: center;
    gap: 14px;
`,w=n.span`
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    border: 1px solid var(--border-color);
    border-radius: 12px;
    background: rgba(var(--accent-rgb), 0.10);
    color: var(--accent-primary);
    box-shadow: 0 0 28px rgba(var(--accent-rgb), 0.14);
`,T=n.div`
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
`,E=n.div`
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 2px;
    scrollbar-width: thin;
`,ne=n.button`
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
`,D=n.main`
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 1180px;
    margin: 0 auto;
`,O=n.div`
    padding: 12px 14px;
    border: 1px solid rgba(248, 113, 113, 0.35);
    border-radius: var(--radius-md);
    background: rgba(239, 68, 68, 0.12);
    color: #fecaca;
    font-size: 12.5px;
    overflow-wrap: anywhere;
`,k=n.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
`,A=n.div`
    display: flex;
    align-items: center;
    gap: 4px;
    min-width: 0;
    flex-wrap: wrap;
`,j=n.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
`,M=n.span`
    color: var(--text-muted);
    font-size: 12px;
`,N=n.button`
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
`,P=n.div`
    display: flex;
    align-items: center;
    gap: 7px;
`,F=n.button`
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
`,I=n.button`
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
`,L=n.section`
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.55);
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.22);
    backdrop-filter: blur(10px);
`,R=n.table`
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
`,z=n.button`
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
`,B=n.a`
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
`,V=n.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,H=n.div`
    padding: 42px 20px;
    color: var(--text-muted);
    font-size: 13px;
    text-align: center;
`,U=n.p`
    margin: 2px 2px 0;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.55;
`,W=document.getElementById(`share-root`);W&&(0,c.createRoot)(W).render((0,u.jsx)(l.StrictMode,{children:(0,u.jsx)(f,{})}));