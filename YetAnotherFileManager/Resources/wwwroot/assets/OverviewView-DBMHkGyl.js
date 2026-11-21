import{n as e,r as t}from"./rolldown-runtime-XKyaHtl9.js";import{_ as n,d as r,f as i,g as a,u as o}from"./dist-Ch56hyhR.js";import{$ as s,A as c,G as l,J as u,M as d,R as f,V as p,ft as m,j as h,k as g,r as _,t as v}from"./selectionMenu-CnXj2Rwe.js";import{a as y,d as b,i as ee,m as te,n as ne,r as re}from"./concepts-DnCsHV86.js";import{t as ie}from"./textSearch-C0rt0dlm.js";import{A as x,E as ae,F as oe,H as se,J as ce,K as S,L as le,N as C,P as ue,U as de,V as fe,_ as pe,ct as me,h as he,ot as w,q as ge,t as _e}from"./FileList-C-_uN9eQ.js";import{E as ve,G as ye,I as be,L as xe,a as Se,at as T,bt as Ce,d as we,lt as Te,q as Ee,rt as De,st as Oe,tt as ke,y as E}from"./Icons-BcFx79zP.js";import{D as Ae,E as D,T as je,d as Me,f as Ne,m as Pe,p as Fe,x as Ie}from"./theme-EHoxgi4j.js";import{t as Le}from"./IconPicker-D__e9k5y.js";var Re=e({OverviewView:()=>R}),O=t(n(),1),k=r();function ze({source:e,poster:t,theme:n}){let r=Ie(e),i=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,a=e.startsWith(`builtin:`)||r?null:e,o=m(a,0,i?`.${i}`:``),s=t??ee(e,n)??(r?e:o),c=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(i);return s?c?(0,k.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:s}):(0,k.jsx)(`img`,{alt:``,src:s}):null}function Be({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let s=o(),c=(0,O.useRef)(null),l=(0,O.useRef)(null),u=(0,O.useRef)(!1),[d,f]=(0,O.useState)(null),[p,m]=(0,O.useState)(null),[h,g]=(0,O.useState)(0),_=()=>{let t=c.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?f({width:1920,height:1080}):n>0&&r>0&&f({width:n,height:r}),i.width>0&&i.height>0&&m({width:i.width,height:i.height})},v=p&&d?Math.min(p.height,n*(p.width/d.width)):0,y=Math.max(0,(p?.height??0)-v);(0,O.useEffect)(()=>{p&&d&&!u.current&&(u.current=!0,g(Math.min(y,Math.max(0,r*y))))},[p,d,y,r]),(0,O.useEffect)(()=>{let e=()=>_();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,O.useEffect)(()=>{let e=window.requestAnimationFrame(_);return()=>window.cancelAnimationFrame(e)},[e,t]);let b=e=>{l.current={y:e.clientY,top:h},e.currentTarget.setPointerCapture(e.pointerId)},ee=e=>{let t=l.current;t&&g(Math.min(y,Math.max(0,t.top+e.clientY-t.y)))},te=e=>{l.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,k.jsx)(ot,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,k.jsxs)(st,{children:[(0,k.jsxs)(ct,{children:[(0,k.jsx)(`span`,{children:s(`adjust_banner_framing`)}),(0,k.jsx)(ht,{onClick:i,title:s(`cancel`),type:`button`,children:(0,k.jsx)(E,{size:12})})]}),(0,k.jsx)(lt,{children:s(`drag_the_frame_to_choose_the_visible_part`)}),(0,k.jsxs)(ut,{children:[t?(0,k.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{_(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{c.current=e},src:e}):(0,k.jsx)(`img`,{alt:``,draggable:!1,onLoad:_,ref:e=>{c.current=e},src:e}),v>0&&(0,k.jsx)(dt,{onPointerCancel:te,onPointerDown:b,onPointerMove:ee,onPointerUp:te,style:{height:v,top:h},children:(0,k.jsx)(ft,{})})]}),(0,k.jsxs)(pt,{children:[(0,k.jsx)(mt,{onClick:i,type:`button`,children:s(`cancel`)}),(0,k.jsx)(mt,{$primary:!0,onClick:()=>a(y>0?h/y:r),type:`button`,children:s(`save`)})]})]})})}var Ve=150,He=120,A=200,Ue=a.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,We=a.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,Ge=a.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${A}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${A}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(A*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(A*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(A*.18)}px),
    transparent 100%);
    mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${A}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(A*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(A*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(A*.18)}px),
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
`,Ke=a.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${Ve}px);
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
`,qe=a.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,Je=a.section`
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
`,Ye=a.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,Xe=a.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,Ze=a.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,Qe=a.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,$e=a.input`
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
`,et=a.button`
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
`,tt=a.div`
    position: relative;
    width: 132px;
    height: 72px;
`,nt=a.button`
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
`,rt=a.button`
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
`,it=a.span`
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
`,at=a.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,ot=a.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,st=a.div`
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
`,ct=a.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,lt=a.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,ut=a.div`
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
`,dt=a.div`
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
`,ft=a.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,pt=a.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,mt=a.button`
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
`,ht=a.button`
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
`,gt=a.button`
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
`,_t=a.div`
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
`,vt=a.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,yt=a.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,j=a.button`
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
`,bt=a.div`
    position: relative;
    display: inline-flex;
`,xt=a.div`
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
`,St=a.button`
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
`,Ct=a.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,wt=a.section`
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
`,Tt=a.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Et=a.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,Dt=a.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Ot=a.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,kt=a.input`
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
`,M=a.button`
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
`,At=a.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,jt=a.div`
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
`,N=a.span`
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
`,P=a.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,F=a.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Mt=a.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,Nt=a.button`
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
`,I=a.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,Pt=a.button`
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
`,Ft=a.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,It=a.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,Lt=a.div`
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
`,Rt=a.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,zt=a.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,Bt=a.button`
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
`,Vt=a.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,Ht=a.button`
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
`,Ut=a.button`
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
`,Wt=a.button`
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
`,Gt=a.span`
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
`,Kt=a.button`
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
`,qt=a.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,L=a.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,Jt=a.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Yt=a.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Xt=a.input`
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
`,Zt=a.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,Qt=a.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,$t=a.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,en=a.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,tn=a.button`
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
`;function R({theme:e,places:t,drives:n,recent:r,recentLimit:a,homePath:c,historyVersion:f,onOpen:p,onPlacesChanged:g,onRecentCleared:_e,onLayoutChanged:Re,onHistoryChanged:Ve,onDrivesChanged:ot,visibilityVersion:st=0,find:ct,onSearchMatches:lt,readOnly:ut=!1,onPick:dt,selectCards:ft=!1,onSelectionChange:pt,onAddToTray:mt,onAddFavorite:ht,onRemoveFavorite:Lt,favoritePaths:zt,onExtractArchive:Bt,settingsVersion:Gt=0,platform:Kt}){let R=o(),z=ge(),[B,on]=(0,O.useState)(!1),[V,sn]=(0,O.useState)(null),H=V?.overviewBanner??null,U=H?.startsWith(`builtin:`)??!1,cn=H?.startsWith(`url:`)?H.slice(4):Ie(H)?H:null,ln=U||cn?``:H??``,un=U?``:cn?cn.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:ln.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,dn=U?y(H):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(un),fn=m(ln.length>0?ln:null,0,un?`.${un}`:``),pn=H?ee(H,e)??cn??fn:null,[mn,hn]=(0,O.useState)(``),[W,G]=(0,O.useState)(null),[gn,_n]=(0,O.useState)(!1),[vn,yn]=(0,O.useState)(null),[K,q]=(0,O.useState)(null),[bn,xn]=(0,O.useState)(null),[Sn,Cn]=(0,O.useState)([]),[wn,Tn]=(0,O.useState)(null),[En,Dn]=(0,O.useState)(``),[J,On]=(0,O.useState)(null),[kn,An]=(0,O.useState)(null),jn=_(`overview`),[Mn,Nn]=(0,O.useState)(null),[Pn,Fn]=(0,O.useState)(null),In=(0,O.useRef)(null),Ln=(0,O.useRef)(null),Rn=(0,O.useRef)(null),zn=(0,O.useRef)(null),Bn=(0,O.useRef)(null),Vn=Pn??V?.overviewBannerHeight??220,[Hn,Un]=(0,O.useState)(0),[Wn,Gn]=(0,O.useState)(null),Kn=Math.min(1,Math.max(0,V?.overviewBannerOffset??.3)),qn=Vn+A,Jn=Wn&&Hn>0?Wn.height*(Hn/Wn.width):qn,Yn=Jn>0&&Jn<qn+240?(qn+240)/Jn:1,Xn=Math.max(1,Math.round(Hn*Yn)),Zn=Math.max(0,Jn*Yn-qn),Qn=Math.min(He,Zn/2,Math.max(20,Vn*.42)),$n=Qn+Kn*Math.max(0,Zn-Qn*2),[er,tr]=(0,O.useState)(!1),Y=(e,t=!1)=>ft?(On(e),An({path:e,isDirectory:t}),pt?.([e]),!0):!1,X=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),On(t),An({path:t,isDirectory:n}),Nn({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,O.useEffect)(()=>(v(`overview`,kn?(e,t)=>Nn({x:e,y:t,target:kn}):null),()=>v(`overview`,null)),[kn]);let nr=(e,t)=>p(e,t);(0,O.useEffect)(()=>{b().then(sn,()=>sn(null))},[Gt]),(0,O.useEffect)(()=>{if(i.available)return pe().then(Cn,()=>void 0),i.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&Cn(t.data.peers)})},[]),(0,O.useEffect)(()=>{let e=Rn.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,O.useEffect)(()=>{if(U&&!dn){Gn({width:1920,height:1080});return}Gn(null);let e=Bn.current;e?.complete&&e.naturalWidth>0&&Gn({width:e.naturalWidth,height:e.naturalHeight})},[H,U,dn]),(0,O.useEffect)(()=>{let e=zn.current;if(!e)return;let t=()=>Un(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[V?.overviewBanner]),(0,O.useEffect)(()=>{if(!W)return;let e=()=>G(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||G(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[W]),(0,O.useEffect)(()=>{if(!gn)return;let e=()=>_n(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[gn]);let Z=le(V),Q=Z.map(e=>e.id),rr=(0,O.useRef)(null),ir=e=>W?.kind===`panel`&&W.id===e,ar=e=>W?.kind===`place`&&W.id===e;(0,O.useEffect)(()=>{if(!i.available)return;let e=Z.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??c).filter(e=>e.length>0);return i.send({type:`fs.watch`,payload:{paths:e,owner:`overview`}}),()=>i.send({type:`fs.watch`,payload:{paths:[],owner:`overview`}})},[Z.map(e=>e.path??e.id).join(`|`),c]),ie(rr,ct??null,`section`,lt??(()=>void 0),[r.length,t.length,n.length,st]);let or=async(e,t)=>{let n={...V?.placeIcons};t?n[e]=t:delete n[e],G(null),await $({placeIcons:n}),g(await l())},sr=async(e,t)=>{let n={...V?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],q(null),await $({placeNames:n}),g(await l())},cr=e=>{xn(null),yn({drive:e,label:e.label||`Local Disk`})},lr=async()=>{if(!vn)return;let{drive:e,label:t}=vn;yn(null);let n=await s(e.name,t.trim());n.ok?(xn(null),ot?.()):xn(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},ur=V?.overviewColumns??1,$=async e=>{if(!V)return;let t={...V,...e,overviewPanels:e.overviewPanels??Q,overviewHidden:[]};sn(await te(t)),Re?.()},dr=async()=>{await $({overviewPanels:[...ue],overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,panelPlaces:null,quickAccess:null,placeNames:null,placeIcons:null,favorites:[]}),g(await l()),on(!1)},fr=async()=>{let e=await se([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=V?.overviewBanners??[];await $({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},pr=async()=>{let e=mn.trim();if(!V||!Ie(e))return;let t=V.overviewBanners??[];hn(``),await $({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},mr=()=>void $({overviewBanner:null}),hr=e=>void $({overviewBanners:(V?.overviewBanners??[]).filter(t=>t!==e),...V?.overviewBanner===e||V?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),gr=e=>{In.current={y:e.clientY,height:Vn},e.currentTarget.setPointerCapture(e.pointerId)},_r=e=>{let t=In.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Ln.current=n,Fn(n)},vr=e=>{In.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Ln.current!==null&&($({overviewBannerHeight:Ln.current}),Ln.current=null)},yr=(e,t)=>{let n=Q.indexOf(e),r=n+t;if(n<0||r<0||r>=Q.length)return;let i=[...Q];[i[n],i[r]]=[i[r],i[n]],$({overviewPanels:i})},br=(e,t)=>{let n={...V?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],$({overviewTitles:n})},xr=(e,t)=>void $({overviewViews:{...V?.overviewViews,[e]:t}}),Sr=e=>{let t=V?.overviewPinned??Z.filter(e=>e.pinned).map(e=>e.id);$({overviewPinned:Z.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Cr=e=>{G(null);let t=t=>{let n={...t};return delete n[e],n},n=V?.overviewPinned??Z.filter(e=>e.pinned).map(e=>e.id);$({overviewPanels:Q.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(V?.overviewTitles),overviewViews:t(V?.overviewViews),overviewIcons:t(V?.overviewIcons),panelPlaces:t(V?.panelPlaces)})},wr=(e,t)=>{let n={...V?.overviewIcons};t?n[e]=t:delete n[e],G(null),$({overviewIcons:n})},Tr=async e=>{if(!V)return;if(e===`folder`){let e=await de();if(!e)return;let t=`folder:${e}`;Q.includes(t)||await $({overviewPanels:[...Q,t]});return}if(e===`quick`){let e=2;for(;Q.includes(`quick:${e}`);)e+=1;await $({overviewPanels:[...Q,`quick:${e}`]});return}let t=e;for(let n=2;Q.includes(t);n+=1)t=`${e}:${n}`;await $({overviewPanels:[...Q,t]})},Er=async e=>{let n=await de();if(!n)return;if(e.id===`quick`){await $({quickAccess:[...new Set([...t.map(e=>e.path),n])]}),g(await l());return}let r=e.places??[];r.some(e=>D(e,n))||await $({panelPlaces:{...V?.panelPlaces,[e.id]:[...r,n]}})},Dr=async(e,n)=>{G(null),e.id===`quick`?(await $({quickAccess:t.filter(e=>!D(e.path,n)).map(e=>e.path)}),g(await l())):await $({panelPlaces:{...V?.panelPlaces,[e.id]:(e.places??[]).filter(e=>!D(e,n))}})},Or=async(e,n,r)=>{if(D(n,r))return;let i=e.id===`quick`?t.map(e=>e.path):e.places??[],a=i.findIndex(e=>D(e,n)),o=i.findIndex(e=>D(e,r));if(a<0||o<0)return;let s=[...i],[c]=s.splice(a,1);s.splice(o,0,c),e.id===`quick`?(await $({quickAccess:s}),g(await l())):await $({panelPlaces:{...V?.panelPlaces,[e.id]:s}})},kr=(e,t)=>({draggable:B,onDragOver:e=>{B&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{B&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{B&&(n.preventDefault(),Or(e,n.dataTransfer.getData(`text/plain`),t))}}),Ar=e=>e.id===`quick`?t:(e.places??[]).map(e=>{let n=t.find(t=>D(t.path,e));return{name:V?.placeNames?.[e]??n?.name??(Me(e)||e),path:e,kind:`folder`,icon:n?.icon??V?.placeIcons?.[e]??null}}),jr=e=>{if(r.length===0)return(0,k.jsx)(L,{children:R(`files_and_folders_you_open_show_up_here`)});let t=r.slice(0,a);return e.view===`grid`?(0,k.jsx)(At,{children:t.map(e=>{let t=S(z,e.path);return(0,k.jsxs)(jt,{$plain:!1,$selected:J===e.path,onClick:t=>{Y(e.path,e.isDirectory)||(e.isDirectory?p(e.path,w(t)):u(e.path))},onDoubleClick:()=>p(e.path,!1),onContextMenu:t=>X(t,e.path,e.isDirectory),title:e.path,children:[(0,k.jsx)(N,{children:t&&z.useIcons?(0,k.jsx)(C,{place:t,size:18}):(0,k.jsx)(x,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,k.jsxs)(P,{children:[(0,k.jsx)(`strong`,{children:t?.name||e.name}),(0,k.jsx)(F,{children:e.path})]})]},e.path)})}):(0,k.jsx)(Mt,{children:t.map(e=>{let t=S(z,e.path);return(0,k.jsxs)(Nt,{$selected:J===e.path,onClick:t=>{Y(e.path,e.isDirectory)||(e.isDirectory?p(e.path,w(t)):u(e.path))},onDoubleClick:()=>p(e.path,!1),onContextMenu:t=>X(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&z.useIcons?(0,k.jsx)(C,{place:t,size:15}):(0,k.jsx)(x,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,k.jsxs)(I,{children:[(0,k.jsx)(`strong`,{children:t?.name||e.name}),(0,k.jsx)(F,{children:e.path})]})]},e.path)})})},Mr=e=>{let t=V?.favorites??[],n=async e=>{await $({favorites:t.filter(t=>t.path!==e)})},r=async(e,n)=>{e&&!t.some(t=>D(t.path,e))&&await $({favorites:[...t,{path:e,name:Me(e)||e,isDirectory:n}]})},i=(e,t,n)=>{B||Y(t,n)||(n?p(t,w(e)):u(t))},a=B?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(Pt,{$row:e.view===`list`,onClick:()=>void se().then(e=>r(e,!1)),title:R(`pin_any_file_here`),type:`button`,children:[e.view===`list`?(0,k.jsx)(T,{size:15}):(0,k.jsx)(N,{children:(0,k.jsx)(T,{size:15})}),e.view===`list`?(0,k.jsxs)(I,{children:[(0,k.jsx)(`strong`,{children:R(`add_file`)}),(0,k.jsx)(F,{children:R(`pin_any_file_here`)})]}):(0,k.jsxs)(P,{children:[(0,k.jsx)(`strong`,{children:R(`add_file`)}),(0,k.jsx)(F,{children:R(`pin_any_file_here`)})]})]}),(0,k.jsxs)(Pt,{$row:e.view===`list`,onClick:()=>void de().then(e=>r(e,!0)),title:R(`pin_any_folder_here`),type:`button`,children:[e.view===`list`?(0,k.jsx)(T,{size:15}):(0,k.jsx)(N,{children:(0,k.jsx)(T,{size:15})}),e.view===`list`?(0,k.jsxs)(I,{children:[(0,k.jsx)(`strong`,{children:R(`add_folder`)}),(0,k.jsx)(F,{children:R(`pin_any_folder_here`)})]}):(0,k.jsxs)(P,{children:[(0,k.jsx)(`strong`,{children:R(`add_folder`)}),(0,k.jsx)(F,{children:R(`pin_any_folder_here`)})]})]})]}):null;return t.length===0&&!B?(0,k.jsx)(L,{children:R(`no_favorites_yet_right_click_any_file_or_folder_and_add_it_here`)}):e.view===`grid`?(0,k.jsxs)(At,{children:[t.map(e=>{let t=S(z,e.path);return(0,k.jsxs)(jt,{$plain:B,$selected:J===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!B&&p(e.path,!1),onContextMenu:t=>!B&&X(t,e.path,e.isDirectory),title:e.path,children:[B&&(0,k.jsx)(Ut,{onClick:t=>{t.stopPropagation(),n(e.path)},title:R(`remove_from_favorites`),type:`button`,children:(0,k.jsx)(E,{size:11})}),(0,k.jsx)(N,{children:t&&z.useIcons?(0,k.jsx)(C,{place:t,size:18}):(0,k.jsx)(x,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,k.jsxs)(P,{children:[(0,k.jsx)(`strong`,{children:t?.name||e.name}),(0,k.jsx)(F,{children:e.path})]})]},e.path)}),a]}):(0,k.jsxs)(Mt,{children:[t.map(e=>{let t=S(z,e.path);return(0,k.jsxs)(Nt,{$selected:J===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!B&&p(e.path,!1),onContextMenu:t=>!B&&X(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&z.useIcons?(0,k.jsx)(C,{place:t,size:15}):(0,k.jsx)(x,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,k.jsxs)(I,{children:[(0,k.jsx)(`strong`,{children:t?.name||e.name}),(0,k.jsx)(F,{children:e.path})]}),B&&(0,k.jsx)(Ut,{$inline:!0,onClick:t=>{t.stopPropagation(),n(e.path)},title:R(`remove_from_favorites`),type:`button`,children:(0,k.jsx)(E,{size:11})})]},e.path)}),a]})},Nr=e=>{if(n.length===0)return(0,k.jsx)(L,{children:R(`no_drives_are_available`)});let t=n.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=vn?.drive.name===t.name,i=r?(0,k.jsx)(nn,{maxLength:32,onCancel:()=>yn(null),onChange:e=>yn({...vn,label:e}),onCommit:()=>void lr(),value:vn?.label??``}):(0,k.jsx)(k.Fragment,{children:Fe(t)}),a=!r&&B&&(0,k.jsx)(Wt,{onClick:e=>{e.stopPropagation(),cr(t)},title:R(`rename_volume`),type:`button`,children:(0,k.jsx)(ke,{size:11})}),o=(0,k.jsx)(F,{children:R(`free_free_of_total`,{free:Pe(t.freeSpace),total:Pe(t.totalSize)})});return e.view===`grid`?(0,k.jsxs)(jt,{$plain:!1,$selected:J===t.name,onClick:e=>{!r&&Y(t.name,!0)||r||p(t.name,w(e))},onDoubleClick:()=>!r&&p(t.name,!1),onContextMenu:e=>!r&&X(e,t.name,!0),title:t.name,children:[(0,k.jsx)(N,{children:(0,k.jsx)(ve,{size:18})}),(0,k.jsxs)(P,{children:[(0,k.jsxs)(`strong`,{children:[i,r&&Ne(t),a]}),o]})]},t.name):(0,k.jsxs)(Nt,{as:r?`div`:`button`,$selected:J===t.name,onClick:r?void 0:e=>{Y(t.name,!0)||p(t.name,w(e))},onDoubleClick:r?void 0:()=>p(t.name,!1),onContextMenu:r?void 0:e=>X(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,k.jsx)(ve,{size:18}),(0,k.jsxs)(I,{children:[(0,k.jsxs)(`strong`,{children:[i,r&&Ne(t),a]}),o]}),(0,k.jsx)(Ft,{children:(0,k.jsx)(It,{$used:n,$tone:Ae(n)})})]},t.name)});return e.view===`grid`?(0,k.jsx)(At,{children:t}):(0,k.jsx)(Mt,{children:t})},Pr=()=>{let e=async e=>{Tn(e.id);try{await he(e.host,e.port)}finally{Tn(null)}},t=async()=>{let e=En.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){Tn(`manual`);try{await he(n,r)}finally{Tn(null)}}};return(0,k.jsxs)(Jt,{children:[(0,k.jsxs)(Yt,{children:[(0,k.jsx)(Xt,{onChange:e=>Dn(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:R(`address_e_g_192_168_1_20_45701`),value:En}),(0,k.jsx)(tn,{disabled:wn!==null||!En.includes(`:`),onClick:()=>void t(),type:`button`,children:R(wn===`manual`?`pairing`:`pair_by_address`)})]}),Sn.length===0&&(0,k.jsx)(L,{children:R(`no_sharing_devices_on_this_network_yet_pair_one_by_address_or_share_a_folder_from_the_title_bar`)}),Sn.map(t=>(0,k.jsxs)(Zt,{children:[(0,k.jsxs)(Qt,{children:[(0,k.jsx)(Te,{size:14}),(0,k.jsx)($t,{title:t.host,children:t.name}),(0,k.jsx)(en,{$online:t.online,children:t.paired?t.online?R(`paired`):R(`offline`):R(`not_paired`)}),!t.paired&&t.online&&(0,k.jsx)(tn,{disabled:wn===t.id,onClick:()=>void e(t),type:`button`,children:wn===t.id?R(`pairing`):R(`pair`)})]}),t.paired&&t.shares.length===0&&(0,k.jsx)(F,{children:R(`no_folders_are_shared_with_the_app_on_this_device`)}),t.shares.map(e=>(0,k.jsxs)(Nt,{onClick:n=>p(ae(t.id,e.id),w(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,k.jsx)(Te,{size:14}),(0,k.jsxs)(I,{children:[(0,k.jsx)(`strong`,{children:e.name}),(0,k.jsx)(F,{children:t.name})]}),(0,k.jsx)(be,{size:12})]},e.id))]},t.id))]})},Fr=e=>{switch(e.kind){case`share`:return Pr();case`favorites`:return Mr(e);case`quick`:{let t=Ar(e);return!B&&t.length===0?(0,k.jsx)(L,{children:R(`no_folders_in_this_quick_access_panel_yet`)}):e.view===`grid`?(0,k.jsxs)(At,{children:[t.map(t=>(0,k.jsxs)(jt,{$plain:B,$selected:J===t.path,...kr(e,t.path),onClick:e=>{!B&&!Y(t.path,!0)&&p(t.path,w(e))},onDoubleClick:()=>!B&&p(t.path,!1),onContextMenu:e=>!B&&X(e,t.path,!0),title:t.path,children:[B&&(0,k.jsx)(Ut,{onClick:n=>{n.stopPropagation(),Dr(e,t.path)},title:R(`remove_from_quick_access`),type:`button`,children:(0,k.jsx)(E,{size:11})}),(0,k.jsxs)(Vt,{children:[B?(0,k.jsx)(Ht,{onClick:e=>{e.stopPropagation(),G(ar(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:R(`change_icon`),type:`button`,children:(0,k.jsx)(N,{children:(0,k.jsx)(C,{place:t})})}):(0,k.jsx)(N,{children:(0,k.jsx)(C,{place:t})}),ar(t.path)&&(0,k.jsx)(Le,{onPick:e=>void or(t.path,e),value:V?.placeIcons?.[t.path]??t.icon})]}),(0,k.jsxs)(P,{children:[K?.path===t.path?(0,k.jsx)(`strong`,{children:(0,k.jsx)(nn,{onCancel:()=>q(null),onChange:e=>q({path:t.path,name:e}),onCommit:()=>void sr(t.path,K?.name??``),value:K?.name??``})}):(0,k.jsxs)(`strong`,{children:[t.name,B&&(0,k.jsx)(Wt,{onClick:e=>{e.stopPropagation(),G(null),q({path:t.path,name:t.name})},title:R(`rename_folder`),type:`button`,children:(0,k.jsx)(ke,{size:11})})]}),(0,k.jsx)(F,{children:t.path})]})]},t.path)),B&&(0,k.jsxs)(Pt,{onClick:()=>void Er(e),title:R(`pin_a_folder_here`),type:`button`,children:[(0,k.jsx)(N,{children:(0,k.jsx)(T,{size:15})}),(0,k.jsxs)(P,{children:[(0,k.jsx)(`strong`,{children:R(`add_folder`)}),(0,k.jsx)(F,{children:R(`pin_a_directory_here`)})]})]})]}):(0,k.jsxs)(Mt,{children:[t.map(t=>(0,k.jsxs)(Nt,{$selected:J===t.path,...kr(e,t.path),onClick:e=>{!B&&!Y(t.path,!0)&&p(t.path,w(e))},onDoubleClick:()=>!B&&p(t.path,!1),onContextMenu:e=>!B&&X(e,t.path,!0),title:t.path,type:`button`,children:[(0,k.jsxs)(Vt,{children:[B?(0,k.jsx)(Ht,{onClick:e=>{e.stopPropagation(),G(ar(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:R(`change_icon`),type:`button`,children:(0,k.jsx)(C,{place:t,size:15})}):(0,k.jsx)(C,{place:t,size:15}),ar(t.path)&&(0,k.jsx)(Le,{onPick:e=>void or(t.path,e),value:V?.placeIcons?.[t.path]??t.icon})]}),(0,k.jsxs)(I,{children:[K?.path===t.path?(0,k.jsx)(`strong`,{children:(0,k.jsx)(nn,{onCancel:()=>q(null),onChange:e=>q({path:t.path,name:e}),onCommit:()=>void sr(t.path,K?.name??``),value:K?.name??``})}):(0,k.jsxs)(`strong`,{children:[t.name,B&&(0,k.jsx)(Wt,{onClick:e=>{e.stopPropagation(),G(null),q({path:t.path,name:t.name})},title:R(`rename_folder`),type:`button`,children:(0,k.jsx)(ke,{size:11})})]}),(0,k.jsx)(F,{children:t.path})]}),B&&(0,k.jsx)(Ut,{$inline:!0,onClick:n=>{n.stopPropagation(),Dr(e,t.path)},title:R(`remove_from_quick_access`),type:`button`,children:(0,k.jsx)(E,{size:11})})]},t.path)),B&&(0,k.jsxs)(Pt,{$row:!0,onClick:()=>void Er(e),title:R(`pin_a_folder_here`),type:`button`,children:[(0,k.jsx)(T,{size:15}),(0,k.jsxs)(I,{children:[(0,k.jsx)(`strong`,{children:R(`add_folder`)}),(0,k.jsx)(F,{children:R(`pin_a_directory_here`)})]})]})]})}case`frequent`:return(0,k.jsx)(rn,{mode:e.view,onContextMenu:X,onOpen:p,onSelectionChange:pt,selectCards:ft,version:f});case`recent`:return jr(e);case`drives`:return Nr(e);default:return(0,k.jsx)(an,{mode:e.view,onContextMenu:X,onOpen:p,onPick:dt,onSelectionChange:pt,selectCards:ft,openOnSingleClick:V?.openOnSingleClick??!1,path:e.path??c,platform:Kt,selectionMenuId:`overview:${e.id}`,showCheckboxes:V?.showCheckboxes??!0,visibilityVersion:st})}};return(0,k.jsxs)(Ue,{$flush:!!V?.overviewBanner,ref:Rn,children:[!ut&&(0,k.jsxs)(_t,{$overlay:!!V?.overviewBanner,children:[(0,k.jsx)(vt,{role:`group`,title:R(`columns`),children:[1,2,3,4,5].map(e=>(0,k.jsx)(yt,{$active:ur===e,onClick:()=>void $({overviewColumns:e}),title:je(R,e,`k_1_column`,`count_columns`),type:`button`,children:e},e))}),B&&(0,k.jsxs)(bt,{children:[(0,k.jsxs)(j,{onClick:()=>_n(e=>!e),onPointerDown:e=>e.stopPropagation(),title:R(`add_a_panel`),type:`button`,children:[(0,k.jsx)(T,{size:12}),R(`add_panel`)]}),gn&&(0,k.jsx)(xt,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,k.jsx)(St,{onClick:()=>{_n(!1),Tr(e)},type:`button`,children:R(e===`quick`?`quick_access`:e===`recent`?`recent`:e===`frequent`?`frequent`:e===`home`?`home`:e===`drives`?`this_pc`:e===`share`?`shared`:e===`favorites`?`favorites`:`folder_2`)},e))})]}),B&&(0,k.jsxs)(j,{onClick:()=>void dr(),title:R(`put_every_panel_back_the_way_the_app_ships_it`),type:`button`,children:[(0,k.jsx)(Oe,{size:12}),R(`restore_default_panels`)]}),jn.available&&(0,k.jsx)(M,{onClick:e=>jn.open(e.clientX,e.clientY),title:R(`selection_menu`),type:`button`,children:(0,k.jsx)(Ee,{size:14})}),(0,k.jsxs)(j,{onClick:()=>{on(e=>!e),_n(!1),G(null),q(null),yn(null)},title:R(B?`done`:`edit`),type:`button`,children:[B?(0,k.jsx)(we,{size:13}):(0,k.jsx)(ke,{size:13}),R(B?`done`:`edit`)]})]}),bn&&(0,k.jsx)(qt,{children:bn}),V?.overviewBanner&&(0,k.jsxs)(We,{ref:zn,style:{height:`${Vn}px`,"--banner-image-width":`${Xn}px`,"--banner-image-shift":`${$n}px`,"--banner-travel":`${Qn}px`,"--banner-overlap":`0px`},children:[(0,k.jsx)(Ge,{children:dn?(0,k.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Gn({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:pn??void 0}):(0,k.jsx)(`img`,{alt:``,onLoad:e=>{let t=U?1920:e.currentTarget.naturalWidth||1920,n=U?1080:e.currentTarget.naturalHeight||1080;Gn({width:t,height:n})},ref:Bn,src:pn??void 0})}),B&&(0,k.jsx)(Ke,{onDoubleClick:()=>{Ln.current=null,Fn(null),$({overviewBannerHeight:220})},onPointerCancel:vr,onPointerDown:gr,onPointerMove:_r,onPointerUp:vr,title:R(`drag_to_resize_double_click_to_reset`)})]}),(0,k.jsxs)(qe,{$offset:V?.overviewBanner?100:0,children:[B&&(0,k.jsxs)(Je,{children:[(0,k.jsxs)(Ye,{children:[(0,k.jsx)(Xe,{children:R(`banners`)}),V?.overviewBanner&&(0,k.jsxs)(j,{onClick:()=>tr(!0),title:R(`adjust_framing`),type:`button`,children:[(0,k.jsx)(ke,{size:12}),R(`adjust_framing`)]})]}),(0,k.jsxs)(Ze,{children:[(0,k.jsx)(tt,{children:(0,k.jsx)(nt,{$active:!V?.overviewBanner,onClick:mr,title:R(`no_banner`),type:`button`,children:(0,k.jsxs)(at,{children:[(0,k.jsx)(E,{size:16}),(0,k.jsx)(`span`,{children:R(`no_banner`)})]})})}),re.map(t=>(0,k.jsx)(tt,{children:(0,k.jsx)(nt,{$active:V?.overviewBanner===t.id,onClick:()=>void $({overviewBanner:t.id}),title:`${R(t.concept)} · ${R(t.preset)}`,type:`button`,children:(0,k.jsx)(ze,{source:t.id,theme:e})})},t.id)),ne.map(t=>(0,k.jsx)(tt,{children:(0,k.jsxs)(nt,{$active:V?.overviewBanner===t.id,onClick:()=>void $({overviewBanner:t.id}),title:R(t.name),type:`button`,children:[(0,k.jsx)(ze,{poster:t.poster,source:t.id,theme:e}),(0,k.jsx)(it,{children:(0,k.jsx)(Ce,{size:11})})]})},t.id)),(V?.overviewBanners??[]).map(t=>(0,k.jsxs)(tt,{children:[(0,k.jsx)(nt,{$active:V?.overviewBanner===t||V?.overviewBanner===`url:${t}`,onClick:()=>void $({overviewBanner:Ie(t)?`url:${t}`:t}),title:t,type:`button`,children:(0,k.jsx)(ze,{source:t,theme:e})}),(0,k.jsx)(rt,{onClick:()=>hr(t),title:R(`remove`),type:`button`,children:(0,k.jsx)(E,{size:10})})]},t)),(0,k.jsxs)(gt,{onClick:()=>void fr(),title:R(`add_banner`),type:`button`,children:[(0,k.jsx)(T,{size:18}),(0,k.jsx)(`span`,{children:R(`add_banner`)})]})]}),(0,k.jsxs)(Qe,{children:[(0,k.jsx)($e,{onChange:e=>hn(e.target.value),onKeyDown:e=>{e.key===`Enter`&&pr()},placeholder:`https://…`,value:mn}),(0,k.jsx)(et,{disabled:!Ie(mn),onClick:()=>void pr(),type:`button`,children:R(`add_url`)})]})]}),(0,k.jsx)(Ct,{ref:rr,$columns:ur,children:Z.map(e=>{let t=Q.indexOf(e.id);return(0,k.jsxs)(wt,{children:[(0,k.jsxs)(Tt,{children:[(0,k.jsxs)(Et,{children:[(0,k.jsxs)(Vt,{children:[B?(0,k.jsx)(Ht,{onClick:()=>G(ir(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:R(`change_icon`),type:`button`,children:(0,k.jsx)(oe,{panel:e,size:15})}):(0,k.jsx)(oe,{panel:e,size:15}),ir(e.id)&&(0,k.jsx)(Le,{onPick:t=>wr(e.id,t),value:e.icon})]}),B?(0,k.jsx)(kt,{defaultValue:e.title,onBlur:t=>br(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,k.jsx)(Ot,{children:R(e.title)})]}),(0,k.jsxs)(Dt,{children:[!B&&e.kind===`recent`&&(0,k.jsx)(j,{onClick:()=>void d().then(_e),title:R(`clear`),type:`button`,children:R(`clear`)}),!B&&e.kind===`frequent`&&(0,k.jsx)(j,{onClick:()=>void h().then(()=>Ve?.()),title:R(`clear_the_frequent_list`),type:`button`,children:R(`clear`)}),!B&&(e.kind===`home`||e.kind===`folder`)&&(0,k.jsx)(j,{onClick:()=>p(e.path??c),title:R(`open_folder`),type:`button`,children:R(`open`)}),B&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(M,{$active:e.pinned,onClick:()=>Sr(e.id),title:e.pinned?R(`unpin_from_the_sidebar`):R(`pin_to_the_sidebar`),type:`button`,children:(0,k.jsx)(De,{size:12})}),(0,k.jsx)(M,{$active:e.view===`list`,onClick:()=>xr(e.id,`list`),title:R(`list`),type:`button`,children:(0,k.jsx)(ye,{size:13})}),(0,k.jsx)(M,{$active:e.view===`grid`,onClick:()=>xr(e.id,`grid`),title:R(`grid`),type:`button`,children:(0,k.jsx)(xe,{size:13})}),(0,k.jsx)(M,{disabled:t===0,onClick:()=>yr(e.id,-1),title:R(`move_up`),type:`button`,children:(0,k.jsx)(Se,{size:12})}),(0,k.jsx)(M,{disabled:t===Q.length-1,onClick:()=>yr(e.id,1),title:R(`move_down`),type:`button`,children:(0,k.jsx)(Se,{size:12})}),(0,k.jsx)(M,{onClick:()=>Cr(e.id),title:R(`remove_panel`),type:`button`,children:(0,k.jsx)(E,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Fr(e):(0,k.jsx)(Rt,{children:Fr(e)})]},e.id)})})]}),er&&pn&&(0,k.jsx)(Be,{height:Vn,offset:Kn,onCancel:()=>tr(!1),onSave:e=>{$({overviewBannerOffset:e}),tr(!1)},source:pn,video:dn}),Mn&&(0,k.jsx)(fe,{directory:c,menu:{x:Mn.x,y:Mn.y,paths:[Mn.target.path]},onClose:()=>Nn(null),onCopy:(e,t)=>void me(e,t),onAddToTray:mt,onAddFavorite:ht,onRemoveFavorite:Lt,favoritePaths:zt,onExtractArchive:Bt,onOpen:nr,onOpenFile:e=>dt?dt(e):void u(e),shortcuts:ce,target:Mn.target})]})}function nn({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=o();return(0,k.jsxs)(Gt,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,k.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,k.jsx)(Kt,{onClick:r,title:a(`cancel`),type:`button`,children:(0,k.jsx)(E,{size:11})}),(0,k.jsx)(Kt,{$apply:!0,onClick:n,title:a(`rename_volume`),type:`button`,children:(0,k.jsx)(we,{size:12})})]})}function rn({mode:e,onOpen:t,onContextMenu:n,onSelectionChange:r,selectCards:i=!1,version:a}){let s=o(),[c,l]=(0,O.useState)(null),[u,d]=(0,O.useState)(null),f=ge(),m=e=>i?(d(e),r?.([e]),!0):!1;if((0,O.useEffect)(()=>{p().then(l,()=>l([]))},[a]),!c)return(0,k.jsx)(L,{children:s(`reading`)});if(c.length===0)return(0,k.jsx)(L,{children:s(`folders_you_open_often_show_up_here`)});let h=e=>je(s,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path});return e===`grid`?(0,k.jsx)(At,{children:c.map(e=>{let r=S(f,e.path);return(0,k.jsxs)(jt,{$plain:!1,$selected:u===e.path,onClick:n=>{m(e.path)||t(e.path,w(n))},onDoubleClick:()=>t(e.path,!1),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,k.jsx)(N,{children:r&&f.useIcons?(0,k.jsx)(C,{place:r,size:18}):(0,k.jsx)(x,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,k.jsxs)(P,{children:[(0,k.jsx)(`strong`,{children:r?.name||e.name}),(0,k.jsx)(F,{children:h(e)})]})]},e.path)})}):(0,k.jsx)(Mt,{children:c.map(e=>{let r=S(f,e.path);return(0,k.jsxs)(Nt,{$selected:u===e.path,onClick:n=>{m(e.path)||t(e.path,w(n))},onDoubleClick:()=>t(e.path,!1),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[r&&f.useIcons?(0,k.jsx)(C,{place:r,size:15}):(0,k.jsx)(x,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,k.jsxs)(I,{children:[(0,k.jsx)(`strong`,{children:r?.name||e.name}),(0,k.jsx)(F,{children:h(e)})]})]},e.path)})})}function an({path:e,mode:t,onOpen:n,onContextMenu:r,onPick:a,onSelectionChange:s,selectCards:l=!1,selectionMenuId:d,showCheckboxes:p,openOnSingleClick:m,visibilityVersion:h,platform:_}){let v=o(),[y,b]=(0,O.useState)(null),[ee,te]=(0,O.useState)(null),ne=ge();return(0,O.useEffect)(()=>{e&&(b(null),f(e).then(b,()=>b(null)))},[e,h]),(0,O.useEffect)(()=>{if(i.available)return i.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&D(n.data.path,e)&&f(e,!1).then(b,()=>void 0)})},[e]),y?t===`list`?(0,k.jsx)(Lt,{children:(0,k.jsx)(_e,{platform:_,error:null,listing:y,loading:!1,onOpen:n,onOpenFile:a??(e=>void u(e)),onRefresh:()=>void f(e,!1).then(b,()=>void 0),onRename:(e,t)=>b(n=>n&&{...n,entries:n.entries.map(n=>D(n.fullPath,e)?{...n,name:Me(t),fullPath:t}:n)}),onSelectionChange:s,selectionMenuId:d,onSort:()=>void 0,openOnSingleClick:m,enableShortcuts:!1,showCheckboxes:p,showDetails:!1,showImages:!1,view:{...g,columns:c.columns??[]}})}):(0,k.jsx)(Rt,{children:y.entries.length===0?(0,k.jsx)(L,{children:v(`this_folder_is_empty`)}):(0,k.jsx)(zt,{children:y.entries.map(e=>{let t=S(ne,e.fullPath);return(0,k.jsxs)(Bt,{$selected:ee===e.fullPath,onClick:t=>{l?(te(e.fullPath),s?.([e.fullPath])):e.isDirectory?n(e.fullPath,w(t)):u(e.fullPath)},onDoubleClick:()=>e.isDirectory?n(e.fullPath,!1):a?.(e.fullPath),onContextMenu:t=>r?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&ne.useIcons?(0,k.jsx)(C,{place:t,size:16}):(0,k.jsx)(x,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,k.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,k.jsx)(L,{children:v(`reading`)})}export{Re as n,R as t};