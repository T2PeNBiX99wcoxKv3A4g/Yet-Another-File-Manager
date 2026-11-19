import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{_ as t,d as n,g as r,u as i}from"./dist-sR-t6Emc.js";import{v as a}from"./Icons-NY0trHLk.js";var o=e(t(),1),s=`/assets/attributions-BBiU9q0M.json`,c=n(),l=r.div`
    position: fixed;
    inset: 0;
    z-index: 80;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.55);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    animation: attributionFade 160ms ease;

    @keyframes attributionFade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`,u=r.div`
    display: flex;
    flex-direction: column;
    width: min(920px, 100%);
    max-height: min(680px, 100%);
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-dialog);
    animation: attributionIn 180ms cubic-bezier(0.22, 1, 0.36, 1);

    @keyframes attributionIn {
        from {
            opacity: 0;
            transform: translateY(8px);
        }
        to {
            opacity: 1;
            transform: none;
        }
    }
`,d=r.header`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    flex-shrink: 0;
    padding: 16px 18px 14px;
    border-bottom: 1px solid var(--border-color);
`,f=r.h2`
    margin: 0;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,p=r.p`
    margin: 4px 0 0;
    max-width: 620px;
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,m=r.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        border-color: rgba(248, 113, 113, 0.5);
        background: rgba(248, 113, 113, 0.12);
        color: #fca5a5;
    }
`,h=r.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,g=r.nav`
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 250px;
    flex-shrink: 0;
    padding: 8px;
    border-right: 1px solid var(--border-color);
    overflow-y: auto;
`,_=r.button`
    display: flex;
    flex-direction: column;
    gap: 1px;
    width: 100%;
    padding: 7px 9px;
    border: 0;
    border-radius: var(--radius-sm);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    text-align: left;
    cursor: pointer;

    &:hover {
        background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.18)`:`var(--bg-card-hover)`};
        color: var(--text-primary);
    }
`,v=r.span`
    font-size: 11px;
    font-weight: 600;
    word-break: break-word;
`,y=r.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,b=r.article`
    flex: 1;
    min-width: 0;
    padding: 16px 18px 20px;
    overflow-y: auto;
`,x=r.div`
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 2px 10px;
    margin-bottom: 10px;
`,S=r.h3`
    margin: 0;
    font-size: 12px;
    font-weight: 600;
    color: var(--text-primary);
`,C=r.pre`
    margin: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    line-height: 1.6;
    color: var(--text-secondary);
    white-space: pre-wrap;
    word-break: break-word;
`,w=e=>[e.version,e.license].filter(Boolean).join(` · `);function T({onClose:e}){let t=i(),[n,r]=(0,o.useState)(null),[T,E]=(0,o.useState)(0);(0,o.useEffect)(()=>{let e=!0;return fetch(s).then(e=>e.ok?e.json():[]).then(t=>{e&&r(t)},()=>{e&&r([])}),()=>{e=!1}},[]);let D=n??[],O=D[T]??D[0];return(0,o.useEffect)(()=>{let t=t=>{t.key===`Escape`&&e()};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[e]),(0,c.jsx)(l,{onClick:e,children:(0,c.jsxs)(u,{onClick:e=>e.stopPropagation(),role:`dialog`,children:[(0,c.jsxs)(d,{children:[(0,c.jsxs)(`div`,{children:[(0,c.jsx)(f,{children:t(`open_source_attribution`)}),(0,c.jsx)(p,{children:t(`this_app_ships_count_open_source_projects_pick_one_to_read_its_whole_licence`,{count:D.length})})]}),(0,c.jsx)(m,{onClick:e,title:t(`close`),type:`button`,children:(0,c.jsx)(a,{size:12})})]}),(0,c.jsxs)(h,{children:[(0,c.jsx)(g,{children:D.map((e,t)=>(0,c.jsxs)(_,{$active:t===T,onClick:()=>E(t),type:`button`,children:[(0,c.jsx)(v,{children:e.name}),(0,c.jsx)(y,{children:w(e)})]},e.name+`@`+e.version))}),O&&(0,c.jsxs)(b,{children:[(0,c.jsxs)(x,{children:[(0,c.jsx)(S,{children:O.name}),(0,c.jsx)(y,{children:w(O)})]}),(0,c.jsx)(C,{children:O.text})]})]})]})})}export{T as AttributionDialog};