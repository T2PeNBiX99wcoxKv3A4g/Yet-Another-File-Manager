import{M as e,O as t,S as n,j as r,k as i,w as a,x as o}from"./dist-B10j17-y.js";import{B as s,M as c,N as l,P as u,U as d,X as f,ht as p,j as m,q as h,r as ee,t as g,tt as _}from"./selectionMenu-1SgH0-x7.js";import{$ as v,C as y,Et as te,F as ne,G as b,H as re,I as ie,K as ae,O as oe,Ot as se,Q as ce,S as le,U as x,Y as ue,Z as de,dt as fe,nt as pe,q as me,rt as he,tt as S,ut as C,w as ge,x as _e}from"./main-BVO2SK-f.js";import{t as ve}from"./textSearch-DM4DrFiS.js";import{E as ye,G as be,I as xe,L as Se,a as Ce,at as w,bt as we,d as Te,lt as Ee,q as De,rt as Oe,st as ke,tt as Ae,y as T}from"./Icons-C2oT0N0q.js";import{D as je,E,T as Me,d as Ne,f as Pe,m as Fe,p as Ie,x as Le}from"./theme-IW5S96qd.js";import{t as Re}from"./IconPicker-bbym5Zmv.js";var ze=r({OverviewView:()=>R}),D=e(i(),1),O=n();function Be({source:e,poster:t,theme:n}){let r=Le(e),i=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,a=e.startsWith(`builtin:`)||r?null:e,o=p(a,0,i?`.${i}`:``),s=t??y(e,n)??(r?e:o),c=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(i);return s?c?(0,O.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:s}):(0,O.jsx)(`img`,{alt:``,src:s}):null}function Ve({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let s=o(),c=(0,D.useRef)(null),l=(0,D.useRef)(null),u=(0,D.useRef)(!1),[d,f]=(0,D.useState)(null),[p,m]=(0,D.useState)(null),[h,ee]=(0,D.useState)(0),g=()=>{let t=c.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?f({width:1920,height:1080}):n>0&&r>0&&f({width:n,height:r}),i.width>0&&i.height>0&&m({width:i.width,height:i.height})},_=p&&d?Math.min(p.height,n*(p.width/d.width)):0,v=Math.max(0,(p?.height??0)-_);(0,D.useEffect)(()=>{p&&d&&!u.current&&(u.current=!0,ee(Math.min(v,Math.max(0,r*v))))},[p,d,v,r]),(0,D.useEffect)(()=>{let e=()=>g();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,D.useEffect)(()=>{let e=window.requestAnimationFrame(g);return()=>window.cancelAnimationFrame(e)},[e,t]);let y=e=>{l.current={y:e.clientY,top:h},e.currentTarget.setPointerCapture(e.pointerId)},te=e=>{let t=l.current;t&&ee(Math.min(v,Math.max(0,t.top+e.clientY-t.y)))},ne=e=>{l.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,O.jsx)(st,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,O.jsxs)(ct,{children:[(0,O.jsxs)(lt,{children:[(0,O.jsx)(`span`,{children:s(`adjust_banner_framing`)}),(0,O.jsx)(gt,{onClick:i,title:s(`cancel`),type:`button`,children:(0,O.jsx)(T,{size:12})})]}),(0,O.jsx)(ut,{children:s(`drag_the_frame_to_choose_the_visible_part`)}),(0,O.jsxs)(dt,{children:[t?(0,O.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{g(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{c.current=e},src:e}):(0,O.jsx)(`img`,{alt:``,draggable:!1,onLoad:g,ref:e=>{c.current=e},src:e}),_>0&&(0,O.jsx)(ft,{onPointerCancel:ne,onPointerDown:y,onPointerMove:te,onPointerUp:ne,style:{height:_,top:h},children:(0,O.jsx)(pt,{})})]}),(0,O.jsxs)(mt,{children:[(0,O.jsx)(ht,{onClick:i,type:`button`,children:s(`cancel`)}),(0,O.jsx)(ht,{$primary:!0,onClick:()=>a(v>0?h/v:r),type:`button`,children:s(`save`)})]})]})})}var He=150,Ue=120,k=200,We=t.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,Ge=t.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,Ke=t.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${k}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${k}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(k*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(k*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(k*.18)}px),
    transparent 100%);
    mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${k}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(k*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(k*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(k*.18)}px),
    transparent 100%);

    img,
    video {
        position: absolute;
        top: 0;
        left: 50%;
        width: var(--banner-image-width, 100%);
        max-width: none;
        height: auto;
        display: block;
        transform-origin: center top;
        /* A slow upward drift plus a slight zoom keeps the picture moving even when the crop has
           no spare room; the zoom guarantees the edges are never exposed. */
        transform: translate(-50%, calc(-1 * (var(--banner-image-shift, 0px) + var(--banner-progress, 0) * var(--banner-travel, 0px)))) scale(calc(1 + var(--banner-progress, 0) * 0.05));
        will-change: transform;
    }
`,qe=t.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${He}px);
    left: 0;
    z-index: 5;
    display: grid;
    place-items: center;
    height: 14px;
    cursor: row-resize;
    background: transparent;

    /* A small centred grip; a full-width bar reads as a separator line. */

    &::before {
        content: "";
        width: 88px;
        height: 3px;
        border-radius: 999px;
        background: rgba(var(--accent-rgb), 0.35);
        transition: background 120ms ease;
    }

    &:hover::before {
        background: rgba(var(--accent-rgb), 0.7);
    }
`,Je=t.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,Ye=t.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
    padding: 10px 12px 14px;
    /* A soft glass band: a bordered card here would draw a full-width line across the fading art. */
    background: linear-gradient(to bottom,
    rgba(var(--bg-rgb), 0) 0%,
    rgba(var(--bg-rgb), 0.38) 18%,
    rgba(var(--bg-rgb), 0.38) 82%,
    rgba(var(--bg-rgb), 0) 100%);
    backdrop-filter: blur(8px);
`,Xe=t.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,Ze=t.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,Qe=t.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,$e=t.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,et=t.input`
    flex: 1;
    min-width: 0;
    height: 28px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 11px;
    outline: none;

    &:focus {
        border-color: var(--border-color-focus);
    }

    &::placeholder {
        color: var(--text-muted);
    }
`,tt=t.button`
    height: 28px;
    padding: 0 12px;
    border: 1px solid var(--border-color-focus);
    border-radius: var(--radius-sm);
    background: rgba(var(--accent-rgb), 0.12);
    color: var(--text-primary);
    font: inherit;
    font-size: 10.5px;
    cursor: pointer;

    &:hover:not(:disabled) {
        background: rgba(var(--accent-rgb), 0.22);
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`,nt=t.div`
    position: relative;
    width: 132px;
    height: 72px;
`,rt=t.button`
    width: 100%;
    height: 100%;
    padding: 0;
    overflow: hidden;
    border: 1px solid ${({$active:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: var(--bg-secondary);
    box-shadow: ${({$active:e})=>e?`0 0 0 2px rgba(var(--accent-rgb), 0.25)`:`none`};
    cursor: pointer;

    img,
    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
`,it=t.button`
    position: absolute;
    top: 4px;
    right: 4px;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.24);
    border-radius: 50%;
    background: rgba(6, 8, 16, 0.78);
    color: #fff;
    cursor: pointer;

    &:hover {
        border-color: #e81123;
        background: #e81123;
    }
`,at=t.span`
    position: absolute;
    right: 5px;
    bottom: 4px;
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: rgba(6, 8, 16, 0.66);
    color: #fff;
`,ot=t.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,st=t.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,ct=t.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(960px, 94vw);
    max-height: 92vh;
    overflow-y: auto;
    padding: 16px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: var(--accent-glow);
`,lt=t.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,ut=t.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,dt=t.div`
    position: relative;
    align-self: center;
    width: 100%;
    overflow: hidden;
    border-radius: var(--radius-sm);
    background: var(--bg-media);

    img,
    video {
        display: block;
        width: 100%;
        height: auto;
        user-select: none;
        pointer-events: none;
    }
`,ft=t.div`
    position: absolute;
    right: 0;
    left: 0;
    border-top: 2px solid var(--accent-primary);
    border-bottom: 2px solid var(--accent-primary);
    box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.55);
    cursor: grab;
    touch-action: none;

    &:active {
        cursor: grabbing;
    }
`,pt=t.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,mt=t.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,ht=t.button`
    padding: 6px 12px;
    border: 1px solid ${({$primary:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$primary:e})=>e?`rgba(var(--accent-rgb), 0.18)`:`transparent`};
    color: ${({$primary:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-focus);
        color: var(--text-primary);
    }
`,gt=t.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    padding: 0;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,_t=t.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 132px;
    height: 72px;
    border: 1px dashed var(--border-color-hover);
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-focus);
        color: var(--text-primary);
    }
`,vt=t.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    flex-wrap: wrap;

    ${({$overlay:e})=>e?`
            position: absolute;
            z-index: 10;
            top: 10px;
            right: 18px;
            padding: 4px;
            border: 1px solid rgba(var(--accent-rgb), 0.14);
            border-radius: var(--radius-md);
            background: rgba(var(--bg-rgb), 0.42);
            backdrop-filter: blur(14px) saturate(1.2);
            -webkit-backdrop-filter: blur(14px) saturate(1.2);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
        `:`padding-bottom: 14px;`}
`,yt=t.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,bt=t.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,A=t.button`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 3px 8px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,xt=t.div`
    position: relative;
    display: inline-flex;
`,St=t.div`
    position: absolute;
    z-index: 40;
    top: calc(100% + 6px);
    right: 0;
    display: flex;
    flex-direction: column;
    min-width: 150px;
    padding: 5px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-float);
`,Ct=t.button`
    padding: 6px 10px;
    border: 0;
    border-radius: 7px;
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 12px;
    text-align: left;
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,wt=t.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,Tt=t.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
    animation: yafm-overview-in 460ms cubic-bezier(0.22, 1, 0.36, 1) both;

    @keyframes yafm-overview-in {
        from {
            opacity: 0;
            transform: translateY(7px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`,Et=t.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Dt=t.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,Ot=t.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,kt=t.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,At=t.input`
    width: 100%;
    max-width: 190px;
    padding: 3px 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    outline: 0;
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 13px;
    font-weight: 600;

    &:focus {
        border-color: var(--border-color-focus);
    }
`,j=t.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    padding: 0;
    border: 1px solid ${({$active:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: 5px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.24)`:`var(--bg-input)`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }

    img {
        width: 14px;
        height: 14px;
        object-fit: contain;
    }
`,jt=t.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,Mt=t.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 11px 13px;
    border: 1px solid ${({$selected:e})=>e?`rgba(var(--accent-rgb), 0.55)`:`var(--border-color)`};
    border-radius: var(--radius-md);
    background: ${({$selected:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`var(--bg-card)`};
    color: var(--text-primary);
    font: inherit;
    text-align: left;
    cursor: ${({$plain:e})=>e?`default`:`pointer`};
    transition: background 130ms ease, border-color 130ms ease, transform 140ms cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 140ms ease;

    ${({$selected:e})=>e?`box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.16);`:``}
    &:hover {
        border-color: ${({$plain:e})=>e?`var(--border-color)`:`var(--border-color-hover)`};
        background: ${({$plain:e})=>e?`var(--bg-card)`:`var(--bg-card-hover)`};
        box-shadow: ${({$plain:e})=>e?`none`:`0 8px 20px rgba(0, 0, 0, 0.22)`};
        transform: ${({$plain:e})=>e?`none`:`translateY(-1px)`};
    }
`,M=t.span`
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 8px;
    background: rgba(var(--accent-secondary-rgb), 0.16);
    color: var(--accent-primary);

    img {
        width: 18px;
        height: 18px;
        object-fit: contain;
    }
`,N=t.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,P=t.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Nt=t.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,F=t.button`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 7px 10px;
    border: 1px solid ${({$selected:e})=>e?`rgba(var(--accent-rgb), 0.55)`:`transparent`};
    border-radius: var(--radius-sm);
    background: ${({$selected:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: ${({$selected:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    text-align: left;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    svg {
        flex-shrink: 0;
        color: var(--text-muted);
    }
`,I=t.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,Pt=t.button`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: ${({$row:e})=>e?`7px 10px`:`11px 13px`};
    border: 1px dashed var(--border-color-hover);
    border-radius: ${({$row:e})=>e?`var(--radius-sm)`:`var(--radius-md)`};
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    text-align: left;
    cursor: pointer;

    strong {
        font-size: ${({$row:e})=>e?`12.5px`:`13px`};
        font-weight: ${({$row:e})=>e?500:600};
    }

    &:hover {
        border-color: var(--border-color-focus);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,Ft=t.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,It=t.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,Lt=t.div`
    display: flex;
    flex-direction: column;
    height: 320px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow: hidden;

    & > div {
        min-height: 0;
    }
`,Rt=t.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,zt=t.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,Bt=t.button`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 7px 9px;
    border: 1px solid ${({$selected:e})=>e?`rgba(var(--accent-rgb), 0.55)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$selected:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`var(--bg-card)`};
    color: ${({$selected:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 12px;
    text-align: left;
    cursor: pointer;
    content-visibility: auto;
    contain-intrinsic-size: auto 35px;

    span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    img {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
        object-fit: contain;
    }

    svg {
        flex-shrink: 0;
        color: var(--text-muted);
    }

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,Vt=t.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,Ht=t.button`
    display: inline-grid;
    place-items: center;
    padding: 0;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: inherit;
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-secondary-rgb), 0.22);
    }
`,Ut=t.button`
    position: ${({$inline:e})=>e?`static`:`absolute`};
    top: 5px;
    right: 5px;
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    padding: 0;
    border: 0;
    border-radius: 5px;
    background: rgba(148, 163, 184, 0.18);
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        background: rgba(239, 68, 68, 0.25);
        color: #fca5a5;
    }
`,Wt=t.button`
    display: inline-grid;
    place-items: center;
    width: 16px;
    height: 16px;
    margin-left: 4px;
    padding: 0;
    border: 0;
    border-radius: 4px;
    background: transparent;
    color: var(--text-muted);
    opacity: 0.55;
    vertical-align: -3px;
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-secondary-rgb), 0.28);
        color: #c7d2fe;
        opacity: 1;
    }
`,Gt=t.span`
    display: inline-flex;
    align-items: center;
    gap: 2px;
    max-width: 100%;
    padding: 1px 2px 1px 6px;
    border: 1px solid var(--border-color-focus);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);

    input {
        min-width: 4ch;
        border: 0;
        outline: 0;
        background: transparent;
        color: var(--text-primary);
        font: inherit;
        font-size: 12.5px;
    }
`,Kt=t.button`
    display: grid;
    place-items: center;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: ${({$apply:e})=>e?`rgba(34, 197, 94, 0.22)`:`rgba(148, 163, 184, 0.2)`};
        color: ${({$apply:e})=>e?`#4ade80`:`var(--text-primary)`};
    }
`,qt=t.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,L=t.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,Jt=t.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Yt=t.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Xt=t.input`
    flex: 1;
    min-width: 0;
    height: 28px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 11px;
    outline: none;

    &:focus {
        border-color: var(--border-color-focus);
    }

    &::placeholder {
        color: var(--text-muted);
    }
`,Zt=t.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,Qt=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,$t=t.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,en=t.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,tn=t.button`
    padding: 3px 10px;
    border: 1px solid var(--border-color-focus);
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.12);
    color: var(--text-primary);
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:hover:not(:disabled) {
        background: rgba(var(--accent-rgb), 0.22);
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`;function R({theme:e,places:t,drives:n,recent:r,recentLimit:i,homePath:s,historyVersion:c,onOpen:d,onPlacesChanged:m,onRecentCleared:oe,onLayoutChanged:ze,onHistoryChanged:He,onDrivesChanged:st,visibilityVersion:ct=0,find:lt,onSearchMatches:ut,readOnly:dt=!1,onPick:ft,selectCards:pt=!1,onSelectionChange:mt,onAddToTray:ht,onAddFavorite:gt,onRemoveFavorite:Lt,favoritePaths:zt,onExtractArchive:Bt,settingsVersion:Gt=0,platform:Kt}){let R=o(),z=pe(),[B,on]=(0,D.useState)(!1),[V,sn]=(0,D.useState)(null),H=V?.overviewBanner??null,U=H?.startsWith(`builtin:`)??!1,cn=H?.startsWith(`url:`)?H.slice(4):Le(H)?H:null,ln=U||cn?``:H??``,un=U?``:cn?cn.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:ln.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,dn=U?ge(H):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(un),fn=p(ln.length>0?ln:null,0,un?`.${un}`:``),pn=H?y(H,e)??cn??fn:null,[mn,hn]=(0,D.useState)(``),[W,G]=(0,D.useState)(null),[gn,_n]=(0,D.useState)(!1),[vn,yn]=(0,D.useState)(null),[K,q]=(0,D.useState)(null),[bn,xn]=(0,D.useState)(null),[Sn,Cn]=(0,D.useState)([]),[wn,Tn]=(0,D.useState)(null),[En,Dn]=(0,D.useState)(``),[J,On]=(0,D.useState)(null),[kn,An]=(0,D.useState)(null),jn=ee(`overview`),[Mn,Nn]=(0,D.useState)(null),[Pn,Fn]=(0,D.useState)(null),In=(0,D.useRef)(null),Ln=(0,D.useRef)(null),Rn=(0,D.useRef)(null),zn=(0,D.useRef)(null),Bn=(0,D.useRef)(null),Vn=Pn??V?.overviewBannerHeight??220,[Hn,Un]=(0,D.useState)(0),[Wn,Gn]=(0,D.useState)(null),Kn=Math.min(1,Math.max(0,V?.overviewBannerOffset??.3)),qn=Vn+k,Jn=Wn&&Hn>0?Wn.height*(Hn/Wn.width):qn,Yn=Jn>0&&Jn<qn+240?(qn+240)/Jn:1,Xn=Math.max(1,Math.round(Hn*Yn)),Zn=Math.max(0,Jn*Yn-qn),Qn=Math.min(Ue,Zn/2,Math.max(20,Vn*.42)),$n=Qn+Kn*Math.max(0,Zn-Qn*2),[er,tr]=(0,D.useState)(!1),Y=(e,t=!1)=>pt?(On(e),An({path:e,isDirectory:t}),mt?.([e]),!0):!1,X=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),On(t),An({path:t,isDirectory:n}),Nn({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,D.useEffect)(()=>(g(`overview`,kn?(e,t)=>Nn({x:e,y:t,target:kn}):null),()=>g(`overview`,null)),[kn]);let nr=(e,t)=>d(e,t);(0,D.useEffect)(()=>{te().then(sn,()=>sn(null))},[Gt]),(0,D.useEffect)(()=>{if(a.available)return ie().then(Cn,()=>void 0),a.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&Cn(t.data.peers)})},[]),(0,D.useEffect)(()=>{let e=Rn.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,D.useEffect)(()=>{if(U&&!dn){Gn({width:1920,height:1080});return}Gn(null);let e=Bn.current;e?.complete&&e.naturalWidth>0&&Gn({width:e.naturalWidth,height:e.naturalHeight})},[H,U,dn]),(0,D.useEffect)(()=>{let e=zn.current;if(!e)return;let t=()=>Un(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[V?.overviewBanner]),(0,D.useEffect)(()=>{if(!W)return;let e=()=>G(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||G(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[W]),(0,D.useEffect)(()=>{if(!gn)return;let e=()=>_n(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[gn]);let Z=ue(V),Q=Z.map(e=>e.id),rr=(0,D.useRef)(null),ir=e=>W?.kind===`panel`&&W.id===e,ar=e=>W?.kind===`place`&&W.id===e;(0,D.useEffect)(()=>{if(!a.available)return;let e=Z.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??s).filter(e=>e.length>0);return a.send({type:`fs.watch`,payload:{paths:e,owner:`overview`}}),()=>a.send({type:`fs.watch`,payload:{paths:[],owner:`overview`}})},[Z.map(e=>e.path??e.id).join(`|`),s]),ve(rr,lt??null,`section`,ut??(()=>void 0),[r.length,t.length,n.length,ct]);let or=async(e,t)=>{let n={...V?.placeIcons};t?n[e]=t:delete n[e],G(null),await $({placeIcons:n}),m(await h())},sr=async(e,t)=>{let n={...V?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],q(null),await $({placeNames:n}),m(await h())},cr=e=>{xn(null),yn({drive:e,label:e.label||`Local Disk`})},lr=async()=>{if(!vn)return;let{drive:e,label:t}=vn;yn(null);let n=await _(e.name,t.trim());n.ok?(xn(null),st?.()):xn(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},ur=Kt===`windows`,dr=V?.overviewColumns??1,$=async e=>{if(!V)return;let t={...V,...e,overviewPanels:e.overviewPanels??Q,overviewHidden:[]};sn(await se(t)),ze?.()},fr=async()=>{await $({overviewPanels:[...ae],overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,panelPlaces:null,quickAccess:null,placeNames:null,placeIcons:null,favorites:[]}),m(await h()),on(!1)},pr=async()=>{let e=await ce([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=V?.overviewBanners??[];await $({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},mr=async()=>{let e=mn.trim();if(!V||!Le(e))return;let t=V.overviewBanners??[];hn(``),await $({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},hr=()=>void $({overviewBanner:null}),gr=e=>void $({overviewBanners:(V?.overviewBanners??[]).filter(t=>t!==e),...V?.overviewBanner===e||V?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),_r=e=>{In.current={y:e.clientY,height:Vn},e.currentTarget.setPointerCapture(e.pointerId)},vr=e=>{let t=In.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Ln.current=n,Fn(n)},yr=e=>{In.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Ln.current!==null&&($({overviewBannerHeight:Ln.current}),Ln.current=null)},br=(e,t)=>{let n=Q.indexOf(e),r=n+t;if(n<0||r<0||r>=Q.length)return;let i=[...Q];[i[n],i[r]]=[i[r],i[n]],$({overviewPanels:i})},xr=(e,t)=>{let n={...V?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],$({overviewTitles:n})},Sr=(e,t)=>void $({overviewViews:{...V?.overviewViews,[e]:t}}),Cr=e=>{let t=V?.overviewPinned??Z.filter(e=>e.pinned).map(e=>e.id);$({overviewPinned:Z.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},wr=e=>{G(null);let t=t=>{let n={...t};return delete n[e],n},n=V?.overviewPinned??Z.filter(e=>e.pinned).map(e=>e.id);$({overviewPanels:Q.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(V?.overviewTitles),overviewViews:t(V?.overviewViews),overviewIcons:t(V?.overviewIcons),panelPlaces:t(V?.panelPlaces)})},Tr=(e,t)=>{let n={...V?.overviewIcons};t?n[e]=t:delete n[e],G(null),$({overviewIcons:n})},Er=async e=>{if(!V)return;if(e===`folder`){let e=await v();if(!e)return;let t=`folder:${e}`;Q.includes(t)||await $({overviewPanels:[...Q,t]});return}if(e===`quick`){let e=2;for(;Q.includes(`quick:${e}`);)e+=1;await $({overviewPanels:[...Q,`quick:${e}`]});return}let t=e;for(let n=2;Q.includes(t);n+=1)t=`${e}:${n}`;await $({overviewPanels:[...Q,t]})},Dr=async e=>{let n=await v();if(!n)return;if(e.id===`quick`){await $({quickAccess:[...new Set([...t.map(e=>e.path),n])]}),m(await h());return}let r=e.places??[];r.some(e=>E(e,n))||await $({panelPlaces:{...V?.panelPlaces,[e.id]:[...r,n]}})},Or=async(e,n)=>{G(null),e.id===`quick`?(await $({quickAccess:t.filter(e=>!E(e.path,n)).map(e=>e.path)}),m(await h())):await $({panelPlaces:{...V?.panelPlaces,[e.id]:(e.places??[]).filter(e=>!E(e,n))}})},kr=async(e,n,r)=>{if(E(n,r))return;let i=e.id===`quick`?t.map(e=>e.path):e.places??[],a=i.findIndex(e=>E(e,n)),o=i.findIndex(e=>E(e,r));if(a<0||o<0)return;let s=[...i],[c]=s.splice(a,1);s.splice(o,0,c),e.id===`quick`?(await $({quickAccess:s}),m(await h())):await $({panelPlaces:{...V?.panelPlaces,[e.id]:s}})},Ar=(e,t)=>({draggable:B,onDragOver:e=>{B&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{B&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{B&&(n.preventDefault(),kr(e,n.dataTransfer.getData(`text/plain`),t))}}),jr=e=>e.id===`quick`?t:(e.places??[]).map(e=>{let n=t.find(t=>E(t.path,e));return{name:V?.placeNames?.[e]??n?.name??(Ne(e)||e),path:e,kind:`folder`,icon:n?.icon??V?.placeIcons?.[e]??null}}),Mr=e=>{if(r.length===0)return(0,O.jsx)(L,{children:R(`files_and_folders_you_open_show_up_here`)});let t=r.slice(0,i);return e.view===`grid`?(0,O.jsx)(jt,{children:t.map(e=>{let t=S(z,e.path);return(0,O.jsxs)(Mt,{$plain:!1,$selected:J===e.path,onClick:t=>{Y(e.path,e.isDirectory)||(e.isDirectory?d(e.path,C(t)):f(e.path))},onDoubleClick:()=>d(e.path,!1),onContextMenu:t=>X(t,e.path,e.isDirectory),title:e.path,children:[(0,O.jsx)(M,{children:t&&z.useIcons?(0,O.jsx)(b,{place:t,size:18}):(0,O.jsx)(x,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,O.jsxs)(N,{children:[(0,O.jsx)(`strong`,{children:t?.name||e.name}),(0,O.jsx)(P,{children:e.path})]})]},e.path)})}):(0,O.jsx)(Nt,{children:t.map(e=>{let t=S(z,e.path);return(0,O.jsxs)(F,{$selected:J===e.path,onClick:t=>{Y(e.path,e.isDirectory)||(e.isDirectory?d(e.path,C(t)):f(e.path))},onDoubleClick:()=>d(e.path,!1),onContextMenu:t=>X(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&z.useIcons?(0,O.jsx)(b,{place:t,size:15}):(0,O.jsx)(x,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,O.jsxs)(I,{children:[(0,O.jsx)(`strong`,{children:t?.name||e.name}),(0,O.jsx)(P,{children:e.path})]})]},e.path)})})},Nr=e=>{let t=V?.favorites??[],n=async e=>{await $({favorites:t.filter(t=>t.path!==e)})},r=async(e,n)=>{e&&!t.some(t=>E(t.path,e))&&await $({favorites:[...t,{path:e,name:Ne(e)||e,isDirectory:n}]})},i=(e,t,n)=>{B||Y(t,n)||(n?d(t,C(e)):f(t))},a=B?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(Pt,{$row:e.view===`list`,onClick:()=>void ce().then(e=>r(e,!1)),title:R(`pin_any_file_here`),type:`button`,children:[e.view===`list`?(0,O.jsx)(w,{size:15}):(0,O.jsx)(M,{children:(0,O.jsx)(w,{size:15})}),e.view===`list`?(0,O.jsxs)(I,{children:[(0,O.jsx)(`strong`,{children:R(`add_file`)}),(0,O.jsx)(P,{children:R(`pin_any_file_here`)})]}):(0,O.jsxs)(N,{children:[(0,O.jsx)(`strong`,{children:R(`add_file`)}),(0,O.jsx)(P,{children:R(`pin_any_file_here`)})]})]}),(0,O.jsxs)(Pt,{$row:e.view===`list`,onClick:()=>void v().then(e=>r(e,!0)),title:R(`pin_any_folder_here`),type:`button`,children:[e.view===`list`?(0,O.jsx)(w,{size:15}):(0,O.jsx)(M,{children:(0,O.jsx)(w,{size:15})}),e.view===`list`?(0,O.jsxs)(I,{children:[(0,O.jsx)(`strong`,{children:R(`add_folder`)}),(0,O.jsx)(P,{children:R(`pin_any_folder_here`)})]}):(0,O.jsxs)(N,{children:[(0,O.jsx)(`strong`,{children:R(`add_folder`)}),(0,O.jsx)(P,{children:R(`pin_any_folder_here`)})]})]})]}):null;return t.length===0&&!B?(0,O.jsx)(L,{children:R(`no_favorites_yet_right_click_any_file_or_folder_and_add_it_here`)}):e.view===`grid`?(0,O.jsxs)(jt,{children:[t.map(e=>{let t=S(z,e.path);return(0,O.jsxs)(Mt,{$plain:B,$selected:J===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!B&&d(e.path,!1),onContextMenu:t=>!B&&X(t,e.path,e.isDirectory),title:e.path,children:[B&&(0,O.jsx)(Ut,{onClick:t=>{t.stopPropagation(),n(e.path)},title:R(`remove_from_favorites`),type:`button`,children:(0,O.jsx)(T,{size:11})}),(0,O.jsx)(M,{children:t&&z.useIcons?(0,O.jsx)(b,{place:t,size:18}):(0,O.jsx)(x,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,O.jsxs)(N,{children:[(0,O.jsx)(`strong`,{children:t?.name||e.name}),(0,O.jsx)(P,{children:e.path})]})]},e.path)}),a]}):(0,O.jsxs)(Nt,{children:[t.map(e=>{let t=S(z,e.path);return(0,O.jsxs)(F,{$selected:J===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!B&&d(e.path,!1),onContextMenu:t=>!B&&X(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&z.useIcons?(0,O.jsx)(b,{place:t,size:15}):(0,O.jsx)(x,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,O.jsxs)(I,{children:[(0,O.jsx)(`strong`,{children:t?.name||e.name}),(0,O.jsx)(P,{children:e.path})]}),B&&(0,O.jsx)(Ut,{$inline:!0,onClick:t=>{t.stopPropagation(),n(e.path)},title:R(`remove_from_favorites`),type:`button`,children:(0,O.jsx)(T,{size:11})})]},e.path)}),a]})},Pr=e=>{if(n.length===0)return(0,O.jsx)(L,{children:R(`no_drives_are_available`)});let t=n.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=vn?.drive.name===t.name,i=r?(0,O.jsx)(nn,{maxLength:32,onCancel:()=>yn(null),onChange:e=>yn({...vn,label:e}),onCommit:()=>void lr(),value:vn?.label??``}):(0,O.jsx)(O.Fragment,{children:Ie(t)}),a=!r&&B&&ur&&(0,O.jsx)(Wt,{onClick:e=>{e.stopPropagation(),cr(t)},title:R(`rename_volume`),type:`button`,children:(0,O.jsx)(Ae,{size:11})}),o=(0,O.jsx)(P,{children:R(`free_free_of_total`,{free:Fe(t.freeSpace),total:Fe(t.totalSize)})});return e.view===`grid`?(0,O.jsxs)(Mt,{$plain:!1,$selected:J===t.name,onClick:e=>{!r&&Y(t.name,!0)||r||d(t.name,C(e))},onDoubleClick:()=>!r&&d(t.name,!1),onContextMenu:e=>!r&&X(e,t.name,!0),title:t.name,children:[(0,O.jsx)(M,{children:(0,O.jsx)(ye,{size:18})}),(0,O.jsxs)(N,{children:[(0,O.jsxs)(`strong`,{children:[i,r&&Pe(t),a]}),o]})]},t.name):(0,O.jsxs)(F,{as:r?`div`:`button`,$selected:J===t.name,onClick:r?void 0:e=>{Y(t.name,!0)||d(t.name,C(e))},onDoubleClick:r?void 0:()=>d(t.name,!1),onContextMenu:r?void 0:e=>X(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,O.jsx)(ye,{size:18}),(0,O.jsxs)(I,{children:[(0,O.jsxs)(`strong`,{children:[i,r&&Pe(t),a]}),o]}),(0,O.jsx)(Ft,{children:(0,O.jsx)(It,{$used:n,$tone:je(n)})})]},t.name)});return e.view===`grid`?(0,O.jsx)(jt,{children:t}):(0,O.jsx)(Nt,{children:t})},Fr=()=>{let e=async e=>{Tn(e.id);try{await ne(e.host,e.port)}finally{Tn(null)}},t=async()=>{let e=En.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){Tn(`manual`);try{await ne(n,r)}finally{Tn(null)}}};return(0,O.jsxs)(Jt,{children:[(0,O.jsxs)(Yt,{children:[(0,O.jsx)(Xt,{onChange:e=>Dn(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:R(`address_e_g_192_168_1_20_45701`),value:En}),(0,O.jsx)(tn,{disabled:wn!==null||!En.includes(`:`),onClick:()=>void t(),type:`button`,children:R(wn===`manual`?`pairing`:`pair_by_address`)})]}),Sn.length===0&&(0,O.jsx)(L,{children:R(`no_sharing_devices_on_this_network_yet_pair_one_by_address_or_share_a_folder_from_the_title_bar`)}),Sn.map(t=>(0,O.jsxs)(Zt,{children:[(0,O.jsxs)(Qt,{children:[(0,O.jsx)(Ee,{size:14}),(0,O.jsx)($t,{title:t.host,children:t.name}),(0,O.jsx)(en,{$online:t.online,children:t.paired?t.online?R(`paired`):R(`offline`):R(`not_paired`)}),!t.paired&&t.online&&(0,O.jsx)(tn,{disabled:wn===t.id,onClick:()=>void e(t),type:`button`,children:wn===t.id?R(`pairing`):R(`pair`)})]}),t.paired&&t.shares.length===0&&(0,O.jsx)(P,{children:R(`no_folders_are_shared_with_the_app_on_this_device`)}),t.shares.map(e=>(0,O.jsxs)(F,{onClick:n=>d(re(t.id,e.id),C(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,O.jsx)(Ee,{size:14}),(0,O.jsxs)(I,{children:[(0,O.jsx)(`strong`,{children:e.name}),(0,O.jsx)(P,{children:t.name})]}),(0,O.jsx)(xe,{size:12})]},e.id))]},t.id))]})},Ir=e=>{switch(e.kind){case`share`:return Fr();case`favorites`:return Nr(e);case`quick`:{let t=jr(e);return!B&&t.length===0?(0,O.jsx)(L,{children:R(`no_folders_in_this_quick_access_panel_yet`)}):e.view===`grid`?(0,O.jsxs)(jt,{children:[t.map(t=>(0,O.jsxs)(Mt,{$plain:B,$selected:J===t.path,...Ar(e,t.path),onClick:e=>{!B&&!Y(t.path,!0)&&d(t.path,C(e))},onDoubleClick:()=>!B&&d(t.path,!1),onContextMenu:e=>!B&&X(e,t.path,!0),title:t.path,children:[B&&(0,O.jsx)(Ut,{onClick:n=>{n.stopPropagation(),Or(e,t.path)},title:R(`remove_from_quick_access`),type:`button`,children:(0,O.jsx)(T,{size:11})}),(0,O.jsxs)(Vt,{children:[B?(0,O.jsx)(Ht,{onClick:e=>{e.stopPropagation(),G(ar(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:R(`change_icon`),type:`button`,children:(0,O.jsx)(M,{children:(0,O.jsx)(b,{place:t})})}):(0,O.jsx)(M,{children:(0,O.jsx)(b,{place:t})}),ar(t.path)&&(0,O.jsx)(Re,{onPick:e=>void or(t.path,e),value:V?.placeIcons?.[t.path]??t.icon})]}),(0,O.jsxs)(N,{children:[K?.path===t.path?(0,O.jsx)(`strong`,{children:(0,O.jsx)(nn,{onCancel:()=>q(null),onChange:e=>q({path:t.path,name:e}),onCommit:()=>void sr(t.path,K?.name??``),value:K?.name??``})}):(0,O.jsxs)(`strong`,{children:[t.name,B&&(0,O.jsx)(Wt,{onClick:e=>{e.stopPropagation(),G(null),q({path:t.path,name:t.name})},title:R(`rename_folder`),type:`button`,children:(0,O.jsx)(Ae,{size:11})})]}),(0,O.jsx)(P,{children:t.path})]})]},t.path)),B&&(0,O.jsxs)(Pt,{onClick:()=>void Dr(e),title:R(`pin_a_folder_here`),type:`button`,children:[(0,O.jsx)(M,{children:(0,O.jsx)(w,{size:15})}),(0,O.jsxs)(N,{children:[(0,O.jsx)(`strong`,{children:R(`add_folder`)}),(0,O.jsx)(P,{children:R(`pin_a_directory_here`)})]})]})]}):(0,O.jsxs)(Nt,{children:[t.map(t=>(0,O.jsxs)(F,{$selected:J===t.path,...Ar(e,t.path),onClick:e=>{!B&&!Y(t.path,!0)&&d(t.path,C(e))},onDoubleClick:()=>!B&&d(t.path,!1),onContextMenu:e=>!B&&X(e,t.path,!0),title:t.path,type:`button`,children:[(0,O.jsxs)(Vt,{children:[B?(0,O.jsx)(Ht,{onClick:e=>{e.stopPropagation(),G(ar(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:R(`change_icon`),type:`button`,children:(0,O.jsx)(b,{place:t,size:15})}):(0,O.jsx)(b,{place:t,size:15}),ar(t.path)&&(0,O.jsx)(Re,{onPick:e=>void or(t.path,e),value:V?.placeIcons?.[t.path]??t.icon})]}),(0,O.jsxs)(I,{children:[K?.path===t.path?(0,O.jsx)(`strong`,{children:(0,O.jsx)(nn,{onCancel:()=>q(null),onChange:e=>q({path:t.path,name:e}),onCommit:()=>void sr(t.path,K?.name??``),value:K?.name??``})}):(0,O.jsxs)(`strong`,{children:[t.name,B&&(0,O.jsx)(Wt,{onClick:e=>{e.stopPropagation(),G(null),q({path:t.path,name:t.name})},title:R(`rename_folder`),type:`button`,children:(0,O.jsx)(Ae,{size:11})})]}),(0,O.jsx)(P,{children:t.path})]}),B&&(0,O.jsx)(Ut,{$inline:!0,onClick:n=>{n.stopPropagation(),Or(e,t.path)},title:R(`remove_from_quick_access`),type:`button`,children:(0,O.jsx)(T,{size:11})})]},t.path)),B&&(0,O.jsxs)(Pt,{$row:!0,onClick:()=>void Dr(e),title:R(`pin_a_folder_here`),type:`button`,children:[(0,O.jsx)(w,{size:15}),(0,O.jsxs)(I,{children:[(0,O.jsx)(`strong`,{children:R(`add_folder`)}),(0,O.jsx)(P,{children:R(`pin_a_directory_here`)})]})]})]})}case`frequent`:return(0,O.jsx)(rn,{mode:e.view,onContextMenu:X,onOpen:d,onSelectionChange:mt,selectCards:pt,version:c});case`recent`:return Mr(e);case`drives`:return Pr(e);default:return(0,O.jsx)(an,{mode:e.view,onContextMenu:X,onOpen:d,onPick:ft,onSelectionChange:mt,selectCards:pt,openOnSingleClick:V?.openOnSingleClick??!1,path:e.path??s,platform:Kt,selectionMenuId:`overview:${e.id}`,showCheckboxes:V?.showCheckboxes??!0,visibilityVersion:ct})}};return(0,O.jsxs)(We,{$flush:!!V?.overviewBanner,ref:Rn,children:[!dt&&(0,O.jsxs)(vt,{$overlay:!!V?.overviewBanner,children:[(0,O.jsx)(yt,{role:`group`,title:R(`columns`),children:[1,2,3,4,5].map(e=>(0,O.jsx)(bt,{$active:dr===e,onClick:()=>void $({overviewColumns:e}),title:Me(R,e,`k_1_column`,`count_columns`),type:`button`,children:e},e))}),B&&(0,O.jsxs)(xt,{children:[(0,O.jsxs)(A,{onClick:()=>_n(e=>!e),onPointerDown:e=>e.stopPropagation(),title:R(`add_a_panel`),type:`button`,children:[(0,O.jsx)(w,{size:12}),R(`add_panel`)]}),gn&&(0,O.jsx)(St,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,O.jsx)(Ct,{onClick:()=>{_n(!1),Er(e)},type:`button`,children:R(e===`quick`?`quick_access`:e===`recent`?`recent`:e===`frequent`?`frequent`:e===`home`?`home`:e===`drives`?`this_pc`:e===`share`?`shared`:e===`favorites`?`favorites`:`folder_2`)},e))})]}),B&&(0,O.jsxs)(A,{onClick:()=>void fr(),title:R(`put_every_panel_back_the_way_the_app_ships_it`),type:`button`,children:[(0,O.jsx)(ke,{size:12}),R(`restore_default_panels`)]}),jn.available&&(0,O.jsx)(j,{onClick:e=>jn.open(e.clientX,e.clientY),title:R(`selection_menu`),type:`button`,children:(0,O.jsx)(De,{size:14})}),(0,O.jsxs)(A,{onClick:()=>{on(e=>!e),_n(!1),G(null),q(null),yn(null)},title:R(B?`done`:`edit`),type:`button`,children:[B?(0,O.jsx)(Te,{size:13}):(0,O.jsx)(Ae,{size:13}),R(B?`done`:`edit`)]})]}),bn&&(0,O.jsx)(qt,{children:bn}),V?.overviewBanner&&(0,O.jsxs)(Ge,{ref:zn,style:{height:`${Vn}px`,"--banner-image-width":`${Xn}px`,"--banner-image-shift":`${$n}px`,"--banner-travel":`${Qn}px`,"--banner-overlap":`0px`},children:[(0,O.jsx)(Ke,{children:dn?(0,O.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Gn({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:pn??void 0}):(0,O.jsx)(`img`,{alt:``,onLoad:e=>{let t=U?1920:e.currentTarget.naturalWidth||1920,n=U?1080:e.currentTarget.naturalHeight||1080;Gn({width:t,height:n})},ref:Bn,src:pn??void 0})}),B&&(0,O.jsx)(qe,{onDoubleClick:()=>{Ln.current=null,Fn(null),$({overviewBannerHeight:220})},onPointerCancel:yr,onPointerDown:_r,onPointerMove:vr,onPointerUp:yr,title:R(`drag_to_resize_double_click_to_reset`)})]}),(0,O.jsxs)(Je,{$offset:V?.overviewBanner?100:0,children:[B&&(0,O.jsxs)(Ye,{children:[(0,O.jsxs)(Xe,{children:[(0,O.jsx)(Ze,{children:R(`banners`)}),V?.overviewBanner&&(0,O.jsxs)(A,{onClick:()=>tr(!0),title:R(`adjust_framing`),type:`button`,children:[(0,O.jsx)(Ae,{size:12}),R(`adjust_framing`)]})]}),(0,O.jsxs)(Qe,{children:[(0,O.jsx)(nt,{children:(0,O.jsx)(rt,{$active:!V?.overviewBanner,onClick:hr,title:R(`no_banner`),type:`button`,children:(0,O.jsxs)(ot,{children:[(0,O.jsx)(T,{size:16}),(0,O.jsx)(`span`,{children:R(`no_banner`)})]})})}),le.map(t=>(0,O.jsx)(nt,{children:(0,O.jsx)(rt,{$active:V?.overviewBanner===t.id,onClick:()=>void $({overviewBanner:t.id}),title:`${R(t.concept)} · ${R(t.preset)}`,type:`button`,children:(0,O.jsx)(Be,{source:t.id,theme:e})})},t.id)),_e.map(t=>(0,O.jsx)(nt,{children:(0,O.jsxs)(rt,{$active:V?.overviewBanner===t.id,onClick:()=>void $({overviewBanner:t.id}),title:R(t.name),type:`button`,children:[(0,O.jsx)(Be,{poster:t.poster,source:t.id,theme:e}),(0,O.jsx)(at,{children:(0,O.jsx)(we,{size:11})})]})},t.id)),(V?.overviewBanners??[]).map(t=>(0,O.jsxs)(nt,{children:[(0,O.jsx)(rt,{$active:V?.overviewBanner===t||V?.overviewBanner===`url:${t}`,onClick:()=>void $({overviewBanner:Le(t)?`url:${t}`:t}),title:t,type:`button`,children:(0,O.jsx)(Be,{source:t,theme:e})}),(0,O.jsx)(it,{onClick:()=>gr(t),title:R(`remove`),type:`button`,children:(0,O.jsx)(T,{size:10})})]},t)),(0,O.jsxs)(_t,{onClick:()=>void pr(),title:R(`add_banner`),type:`button`,children:[(0,O.jsx)(w,{size:18}),(0,O.jsx)(`span`,{children:R(`add_banner`)})]})]}),(0,O.jsxs)($e,{children:[(0,O.jsx)(et,{onChange:e=>hn(e.target.value),onKeyDown:e=>{e.key===`Enter`&&mr()},placeholder:`https://…`,value:mn}),(0,O.jsx)(tt,{disabled:!Le(mn),onClick:()=>void mr(),type:`button`,children:R(`add_url`)})]})]}),(0,O.jsx)(wt,{ref:rr,$columns:dr,children:Z.map(e=>{let t=Q.indexOf(e.id);return(0,O.jsxs)(Tt,{children:[(0,O.jsxs)(Et,{children:[(0,O.jsxs)(Dt,{children:[(0,O.jsxs)(Vt,{children:[B?(0,O.jsx)(Ht,{onClick:()=>G(ir(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:R(`change_icon`),type:`button`,children:(0,O.jsx)(me,{panel:e,size:15})}):(0,O.jsx)(me,{panel:e,size:15}),ir(e.id)&&(0,O.jsx)(Re,{onPick:t=>Tr(e.id,t),value:e.icon})]}),B?(0,O.jsx)(At,{defaultValue:e.title,onBlur:t=>xr(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,O.jsx)(kt,{children:R(e.title)})]}),(0,O.jsxs)(Ot,{children:[!B&&e.kind===`recent`&&(0,O.jsx)(A,{onClick:()=>void u().then(oe),title:R(`clear`),type:`button`,children:R(`clear`)}),!B&&e.kind===`frequent`&&(0,O.jsx)(A,{onClick:()=>void l().then(()=>He?.()),title:R(`clear_the_frequent_list`),type:`button`,children:R(`clear`)}),!B&&(e.kind===`home`||e.kind===`folder`)&&(0,O.jsx)(A,{onClick:()=>d(e.path??s),title:R(`open_folder`),type:`button`,children:R(`open`)}),B&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(j,{$active:e.pinned,onClick:()=>Cr(e.id),title:e.pinned?R(`unpin_from_the_sidebar`):R(`pin_to_the_sidebar`),type:`button`,children:(0,O.jsx)(Oe,{size:12})}),(0,O.jsx)(j,{$active:e.view===`list`,onClick:()=>Sr(e.id,`list`),title:R(`list`),type:`button`,children:(0,O.jsx)(be,{size:13})}),(0,O.jsx)(j,{$active:e.view===`grid`,onClick:()=>Sr(e.id,`grid`),title:R(`grid`),type:`button`,children:(0,O.jsx)(Se,{size:13})}),(0,O.jsx)(j,{disabled:t===0,onClick:()=>br(e.id,-1),title:R(`move_up`),type:`button`,children:(0,O.jsx)(Ce,{size:12})}),(0,O.jsx)(j,{disabled:t===Q.length-1,onClick:()=>br(e.id,1),title:R(`move_down`),type:`button`,children:(0,O.jsx)(Ce,{size:12})}),(0,O.jsx)(j,{onClick:()=>wr(e.id),title:R(`remove_panel`),type:`button`,children:(0,O.jsx)(T,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Ir(e):(0,O.jsx)(Rt,{children:Ir(e)})]},e.id)})})]}),er&&pn&&(0,O.jsx)(Ve,{height:Vn,offset:Kn,onCancel:()=>tr(!1),onSave:e=>{$({overviewBannerOffset:e}),tr(!1)},source:pn,video:dn}),Mn&&(0,O.jsx)(de,{directory:s,menu:{x:Mn.x,y:Mn.y,paths:[Mn.target.path]},onClose:()=>Nn(null),onCopy:(e,t)=>void fe(e,t),onAddToTray:ht,onAddFavorite:gt,onRemoveFavorite:Lt,favoritePaths:zt,onExtractArchive:Bt,onOpen:nr,onOpenFile:e=>ft?ft(e):void f(e),shortcuts:he,target:Mn.target})]})}function nn({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=o();return(0,O.jsxs)(Gt,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,O.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,O.jsx)(Kt,{onClick:r,title:a(`cancel`),type:`button`,children:(0,O.jsx)(T,{size:11})}),(0,O.jsx)(Kt,{$apply:!0,onClick:n,title:a(`rename_volume`),type:`button`,children:(0,O.jsx)(Te,{size:12})})]})}function rn({mode:e,onOpen:t,onContextMenu:n,onSelectionChange:r,selectCards:i=!1,version:a}){let s=o(),[c,l]=(0,D.useState)(null),[u,f]=(0,D.useState)(null),p=pe(),m=e=>i?(f(e),r?.([e]),!0):!1;if((0,D.useEffect)(()=>{d().then(l,()=>l([]))},[a]),!c)return(0,O.jsx)(L,{children:s(`reading`)});if(c.length===0)return(0,O.jsx)(L,{children:s(`folders_you_open_often_show_up_here`)});let h=e=>Me(s,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path});return e===`grid`?(0,O.jsx)(jt,{children:c.map(e=>{let r=S(p,e.path);return(0,O.jsxs)(Mt,{$plain:!1,$selected:u===e.path,onClick:n=>{m(e.path)||t(e.path,C(n))},onDoubleClick:()=>t(e.path,!1),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,O.jsx)(M,{children:r&&p.useIcons?(0,O.jsx)(b,{place:r,size:18}):(0,O.jsx)(x,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,O.jsxs)(N,{children:[(0,O.jsx)(`strong`,{children:r?.name||e.name}),(0,O.jsx)(P,{children:h(e)})]})]},e.path)})}):(0,O.jsx)(Nt,{children:c.map(e=>{let r=S(p,e.path);return(0,O.jsxs)(F,{$selected:u===e.path,onClick:n=>{m(e.path)||t(e.path,C(n))},onDoubleClick:()=>t(e.path,!1),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[r&&p.useIcons?(0,O.jsx)(b,{place:r,size:15}):(0,O.jsx)(x,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,O.jsxs)(I,{children:[(0,O.jsx)(`strong`,{children:r?.name||e.name}),(0,O.jsx)(P,{children:h(e)})]})]},e.path)})})}function an({path:e,mode:t,onOpen:n,onContextMenu:r,onPick:i,onSelectionChange:l,selectCards:u=!1,selectionMenuId:d,showCheckboxes:p,openOnSingleClick:h,visibilityVersion:ee,platform:g}){let _=o(),[v,y]=(0,D.useState)(null),[te,ne]=(0,D.useState)(null),re=pe();return(0,D.useEffect)(()=>{e&&(y(null),s(e).then(y,()=>y(null)))},[e,ee]),(0,D.useEffect)(()=>{if(a.available)return a.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&E(n.data.path,e)&&s(e,!1).then(y,()=>void 0)})},[e]),v?t===`list`?(0,O.jsx)(Lt,{children:(0,O.jsx)(oe,{platform:g,error:null,listing:v,loading:!1,onOpen:n,onOpenFile:i??(e=>void f(e)),onRefresh:()=>void s(e,!1).then(y,()=>void 0),onRename:(e,t)=>y(n=>n&&{...n,entries:n.entries.map(n=>E(n.fullPath,e)?{...n,name:Ne(t),fullPath:t}:n)}),onSelectionChange:l,selectionMenuId:d,onSort:()=>void 0,openOnSingleClick:h,enableShortcuts:!1,showCheckboxes:p,showDetails:!1,showImages:!1,view:{...m,columns:c.columns??[]}})}):(0,O.jsx)(Rt,{children:v.entries.length===0?(0,O.jsx)(L,{children:_(`this_folder_is_empty`)}):(0,O.jsx)(zt,{children:v.entries.map(e=>{let t=S(re,e.fullPath);return(0,O.jsxs)(Bt,{$selected:te===e.fullPath,onClick:t=>{u?(ne(e.fullPath),l?.([e.fullPath])):e.isDirectory?n(e.fullPath,C(t)):f(e.fullPath)},onDoubleClick:()=>e.isDirectory?n(e.fullPath,!1):i?.(e.fullPath),onContextMenu:t=>r?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&re.useIcons?(0,O.jsx)(b,{place:t,size:16}):(0,O.jsx)(x,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,O.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,O.jsx)(L,{children:_(`reading`)})}export{ze as n,R as t};