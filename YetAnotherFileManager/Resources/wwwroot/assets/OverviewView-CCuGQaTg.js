import{M as e,O as t,S as n,j as r,k as i,w as a,x as o}from"./dist-B10j17-y.js";import{J as s,M as c,N as l,Ot as u,P as d,V as f,W as p,Z as m,ht as h,j as ee,nt as g,r as _,t as v,ut as y,vt as te}from"./selectionMenu-B6kwQ5yB.js";import{t as ne}from"./textSearch-D-I3Bx05.js";import{$ as b,B as x,G as re,K as ie,M as ae,N as oe,T as se,W as S,X as ce,Y as le,Z as ue,b as de,ct as C,et as fe,lt as pe,nt as me,p as he,q as ge,v as _e,x as ve,y as ye,z as be}from"./main-BjBJZtHG.js";import{E as xe,G as Se,I as Ce,L as we,a as Te,at as w,bt as Ee,d as De,lt as Oe,q as ke,rt as Ae,st as je,tt as Me,y as T}from"./Icons-C2oT0N0q.js";import{D as Ne,E,b as Pe,d as Fe,f as Ie,p as Le,u as Re,w as ze}from"./theme-DIZkp4eN.js";var Be=r({OverviewView:()=>rn}),D=e(i(),1),O=n();function Ve({source:e,poster:t,theme:n}){let r=Pe(e),i=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,a=e.startsWith(`builtin:`)||r?null:e,o=u(a,0,i?`.${i}`:``),s=t??de(e,n)??(r?e:o),c=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(i);return s?c?(0,O.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:s}):(0,O.jsx)(`img`,{alt:``,src:s}):null}function He({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let s=o(),c=(0,D.useRef)(null),l=(0,D.useRef)(null),u=(0,D.useRef)(!1),[d,f]=(0,D.useState)(null),[p,m]=(0,D.useState)(null),[h,ee]=(0,D.useState)(0),g=()=>{let t=c.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?f({width:1920,height:1080}):n>0&&r>0&&f({width:n,height:r}),i.width>0&&i.height>0&&m({width:i.width,height:i.height})},_=p&&d?Math.min(p.height,n*(p.width/d.width)):0,v=Math.max(0,(p?.height??0)-_);(0,D.useEffect)(()=>{p&&d&&!u.current&&(u.current=!0,ee(Math.min(v,Math.max(0,r*v))))},[p,d,v,r]),(0,D.useEffect)(()=>{let e=()=>g();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,D.useEffect)(()=>{let e=window.requestAnimationFrame(g);return()=>window.cancelAnimationFrame(e)},[e,t]);let y=e=>{l.current={y:e.clientY,top:h},e.currentTarget.setPointerCapture(e.pointerId)},te=e=>{let t=l.current;t&&ee(Math.min(v,Math.max(0,t.top+e.clientY-t.y)))},ne=e=>{l.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,O.jsx)(ct,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,O.jsxs)(lt,{children:[(0,O.jsxs)(ut,{children:[(0,O.jsx)(`span`,{children:s(`adjust_banner_framing`)}),(0,O.jsx)(_t,{onClick:i,title:s(`cancel`),type:`button`,children:(0,O.jsx)(T,{size:12})})]}),(0,O.jsx)(dt,{children:s(`drag_the_frame_to_choose_the_visible_part`)}),(0,O.jsxs)(ft,{children:[t?(0,O.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{g(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{c.current=e},src:e}):(0,O.jsx)(`img`,{alt:``,draggable:!1,onLoad:g,ref:e=>{c.current=e},src:e}),_>0&&(0,O.jsx)(pt,{onPointerCancel:ne,onPointerDown:y,onPointerMove:te,onPointerUp:ne,style:{height:_,top:h},children:(0,O.jsx)(mt,{})})]}),(0,O.jsxs)(ht,{children:[(0,O.jsx)(gt,{onClick:i,type:`button`,children:s(`cancel`)}),(0,O.jsx)(gt,{$primary:!0,onClick:()=>a(v>0?h/v:r),type:`button`,children:s(`save`)})]})]})})}var Ue=150,We=120,k=200,Ge=t.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,Ke=t.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,qe=t.div`
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
`,Je=t.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${Ue}px);
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
`,Ye=t.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,Xe=t.section`
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
`,Ze=t.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,Qe=t.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,$e=t.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,et=t.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,tt=t.input`
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
`,nt=t.button`
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
`,rt=t.div`
    position: relative;
    width: 132px;
    height: 72px;
`,it=t.button`
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
`,at=t.button`
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
`,ot=t.span`
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
`,st=t.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,ct=t.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,lt=t.div`
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
`,ut=t.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,dt=t.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,ft=t.div`
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
`,pt=t.div`
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
`,mt=t.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,ht=t.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,gt=t.button`
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
`,_t=t.button`
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
`,vt=t.button`
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
`,yt=t.div`
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
`,bt=t.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,xt=t.button`
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
`,St=t.div`
    position: relative;
    display: inline-flex;
`,Ct=t.div`
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
`,wt=t.button`
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
`,Tt=t.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,Et=t.section`
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
`,Dt=t.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Ot=t.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,kt=t.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,At=t.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,jt=t.input`
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
`,Mt=t.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,Nt=t.div`
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
`,Pt=t.div`
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
`,Ft=t.button`
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
`,It=t.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Lt=t.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,Rt=t.div`
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
`,zt=t.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,Bt=t.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,Vt=t.button`
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
`,Ht=t.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,Ut=t.button`
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
`,Wt=t.button`
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
`,Gt=t.button`
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
`,Kt=t.span`
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
`,qt=t.button`
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
`,Jt=t.p`
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
`,Yt=t.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Xt=t.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Zt=t.input`
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
`,Qt=t.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,$t=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,en=t.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,tn=t.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,nn=t.button`
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
`;function rn({theme:e,places:t,drives:n,recent:r,recentLimit:i,homePath:l,historyVersion:d,onOpen:f,onPlacesChanged:p,onRecentCleared:se,onLayoutChanged:Be,onHistoryChanged:Ue,onDrivesChanged:ct,visibilityVersion:lt=0,find:ut,onSearchMatches:dt,readOnly:ft=!1,onPick:pt,selectCards:mt=!1,onSelectionChange:ht,onAddToTray:gt,onAddFavorite:_t,onRemoveFavorite:Rt,favoritePaths:Bt,onExtractArchive:Vt,onOpenAsArchive:Kt,onAddToStartMenu:qt,settingsVersion:rn=0,platform:cn}){let R=o(),z=fe(),[B,ln]=(0,D.useState)(!1),[V,un]=(0,D.useState)(null),H=V?.overviewBanner??null,U=H?.startsWith(`builtin:`)??!1,dn=H?.startsWith(`url:`)?H.slice(4):Pe(H)?H:null,fn=U||dn?``:H??``,pn=U?``:dn?dn.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:fn.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,mn=U?ve(H):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(pn),hn=u(fn.length>0?fn:null,0,pn?`.${pn}`:``),gn=H?de(H,e)??dn??hn:null,[_n,vn]=(0,D.useState)(``),[W,G]=(0,D.useState)(null),[yn,bn]=(0,D.useState)(!1),[xn,Sn]=(0,D.useState)(null),[K,q]=(0,D.useState)(null),[Cn,wn]=(0,D.useState)(null),[Tn,En]=(0,D.useState)([]),[Dn,On]=(0,D.useState)(null),[kn,An]=(0,D.useState)(``),[J,jn]=(0,D.useState)(null),[Mn,Nn]=(0,D.useState)(null),Pn=_(`overview`),[Fn,In]=(0,D.useState)(null),[Ln,Rn]=(0,D.useState)(null),zn=(0,D.useRef)(null),Bn=(0,D.useRef)(null),Vn=(0,D.useRef)(null),Hn=(0,D.useRef)(null),Un=(0,D.useRef)(null),Wn=Ln??V?.overviewBannerHeight??y().overviewBannerHeight,[Gn,Kn]=(0,D.useState)(0),[qn,Jn]=(0,D.useState)(null),Yn=Math.min(1,Math.max(0,V?.overviewBannerOffset??y().overviewBannerOffset)),Xn=Wn+k,Zn=qn&&Gn>0?qn.height*(Gn/qn.width):Xn,Qn=Zn>0&&Zn<Xn+240?(Xn+240)/Zn:1,$n=Math.max(1,Math.round(Gn*Qn)),er=Math.max(0,Zn*Qn-Xn),tr=Math.min(We,er/2,Math.max(20,Wn*.42)),nr=tr+Yn*Math.max(0,er-tr*2),[rr,ir]=(0,D.useState)(!1),Y=(e,t=!1)=>mt?(jn(e),Nn({path:e,isDirectory:t}),ht?.([e]),!0):!1,X=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),jn(t),Nn({path:t,isDirectory:n}),In({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,D.useEffect)(()=>(v(`overview`,Mn?(e,t)=>In({x:e,y:t,target:Mn}):null),()=>v(`overview`,null)),[Mn]);let ar=(e,t)=>f(e,t);(0,D.useEffect)(()=>{h().then(un,()=>un(null))},[rn]),(0,D.useEffect)(()=>{if(a.available)return oe().then(En,()=>void 0),a.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&En(t.data.peers)})},[]),(0,D.useEffect)(()=>{let e=Vn.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,D.useEffect)(()=>{if(U&&!mn){Jn({width:1920,height:1080});return}Jn(null);let e=Un.current;e?.complete&&e.naturalWidth>0&&Jn({width:e.naturalWidth,height:e.naturalHeight})},[H,U,mn]),(0,D.useEffect)(()=>{let e=Hn.current;if(!e)return;let t=()=>Kn(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[V?.overviewBanner]),(0,D.useEffect)(()=>{if(!W)return;let e=()=>G(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||G(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[W]),(0,D.useEffect)(()=>{if(!yn)return;let e=()=>bn(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[yn]);let Z=ge(V),Q=Z.map(e=>e.id),or=(0,D.useRef)(null),sr=e=>W?.kind===`panel`&&W.id===e,cr=e=>W?.kind===`place`&&W.id===e;(0,D.useEffect)(()=>{if(!a.available)return;let e=Z.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??l).filter(e=>e.length>0);return a.send({type:`fs.watch`,payload:{paths:e,owner:`overview`}}),()=>a.send({type:`fs.watch`,payload:{paths:[],owner:`overview`}})},[Z.map(e=>e.path??e.id).join(`|`),l]),ne(or,ut??null,`section`,dt??(()=>void 0),[r.length,t.length,n.length,lt]);let lr=async(e,t)=>{let n={...V?.placeIcons};t?n[e]=t:delete n[e],G(null),await $({placeIcons:n}),p(await s())},ur=async(e,t)=>{let n={...V?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],q(null),await $({placeNames:n}),p(await s())},dr=e=>{wn(null),Sn({drive:e,label:e.label||`Local Disk`})},fr=async()=>{if(!xn)return;let{drive:e,label:t}=xn;Sn(null);let n=await g(e.name,t.trim());n.ok?(wn(null),ct?.()):wn(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},pr=cn===`windows`,mr=V?.overviewColumns??y().overviewColumns,$=async e=>{if(!V)return;let t={...V,...e,overviewPanels:e.overviewPanels??Q,overviewHidden:[]};un(await te(t)),Be?.()},hr=async()=>{await $({overviewPanels:[...re],overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,panelPlaces:null,quickAccess:null,placeNames:null,placeIcons:null,favorites:[]}),p(await s()),ln(!1)},gr=async()=>{let e=await ce([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=V?.overviewBanners??[];await $({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},_r=async()=>{let e=_n.trim();if(!V||!Pe(e))return;let t=V.overviewBanners??[];vn(``),await $({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},vr=()=>void $({overviewBanner:null}),yr=e=>void $({overviewBanners:(V?.overviewBanners??[]).filter(t=>t!==e),...V?.overviewBanner===e||V?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),br=e=>{zn.current={y:e.clientY,height:Wn},e.currentTarget.setPointerCapture(e.pointerId)},xr=e=>{let t=zn.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Bn.current=n,Rn(n)},Sr=e=>{zn.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Bn.current!==null&&($({overviewBannerHeight:Bn.current}),Bn.current=null)},Cr=(e,t)=>{let n=Q.indexOf(e),r=n+t;if(n<0||r<0||r>=Q.length)return;let i=[...Q];[i[n],i[r]]=[i[r],i[n]],$({overviewPanels:i})},wr=(e,t)=>{let n={...V?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],$({overviewTitles:n})},Tr=(e,t)=>void $({overviewViews:{...V?.overviewViews,[e]:t}}),Er=e=>{let t=V?.overviewPinned??Z.filter(e=>e.pinned).map(e=>e.id);$({overviewPinned:Z.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Dr=e=>{G(null);let t=t=>{let n={...t};return delete n[e],n},n=V?.overviewPinned??Z.filter(e=>e.pinned).map(e=>e.id);$({overviewPanels:Q.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(V?.overviewTitles),overviewViews:t(V?.overviewViews),overviewIcons:t(V?.overviewIcons),panelPlaces:t(V?.panelPlaces)})},Or=(e,t)=>{let n={...V?.overviewIcons};t?n[e]=t:delete n[e],G(null),$({overviewIcons:n})},kr=async e=>{if(!V)return;if(e===`folder`){let e=await ue();if(!e)return;let t=`folder:${e}`;Q.includes(t)||await $({overviewPanels:[...Q,t]});return}if(e===`quick`){let e=2;for(;Q.includes(`quick:${e}`);)e+=1;await $({overviewPanels:[...Q,`quick:${e}`]});return}let t=e;for(let n=2;Q.includes(t);n+=1)t=`${e}:${n}`;await $({overviewPanels:[...Q,t]})},Ar=async e=>{let n=await ue();if(!n)return;if(e.id===`quick`){await $({quickAccess:[...new Set([...t.map(e=>e.path),n])]}),p(await s());return}let r=e.places??[];r.some(e=>E(e,n))||await $({panelPlaces:{...V?.panelPlaces,[e.id]:[...r,n]}})},jr=async(e,n)=>{G(null),e.id===`quick`?(await $({quickAccess:t.filter(e=>!E(e.path,n)).map(e=>e.path)}),p(await s())):await $({panelPlaces:{...V?.panelPlaces,[e.id]:(e.places??[]).filter(e=>!E(e,n))}})},Mr=async(e,n,r)=>{if(E(n,r))return;let i=e.id===`quick`?t.map(e=>e.path):e.places??[],a=i.findIndex(e=>E(e,n)),o=i.findIndex(e=>E(e,r));if(a<0||o<0)return;let c=[...i],[l]=c.splice(a,1);c.splice(o,0,l),e.id===`quick`?(await $({quickAccess:c}),p(await s())):await $({panelPlaces:{...V?.panelPlaces,[e.id]:c}})},Nr=(e,t)=>({draggable:B,onDragOver:e=>{B&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{B&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{B&&(n.preventDefault(),Mr(e,n.dataTransfer.getData(`text/plain`),t))}}),Pr=e=>e.id===`quick`?t:(e.places??[]).map(e=>{let n=t.find(t=>E(t.path,e));return{name:V?.placeNames?.[e]??n?.name??(Re(e)||e),path:e,kind:`folder`,icon:n?.icon??V?.placeIcons?.[e]??null}}),Fr=e=>{if(r.length===0)return(0,O.jsx)(L,{children:R(`files_and_folders_you_open_show_up_here`)});let t=r.slice(0,i);return e.view===`grid`?(0,O.jsx)(Mt,{children:t.map(e=>{let t=b(z,e.path);return(0,O.jsxs)(Nt,{$plain:!1,$selected:J===e.path,onClick:t=>{Y(e.path,e.isDirectory)||(e.isDirectory?f(e.path,C(t)):m(e.path))},onDoubleClick:()=>f(e.path,!1),onContextMenu:t=>X(t,e.path,e.isDirectory),title:e.path,children:[(0,O.jsx)(M,{children:t&&z.useIcons?(0,O.jsx)(S,{place:t,size:18}):(0,O.jsx)(x,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,O.jsxs)(N,{children:[(0,O.jsx)(`strong`,{children:t?.name||e.name}),(0,O.jsx)(P,{children:e.path})]})]},e.path)})}):(0,O.jsx)(Pt,{children:t.map(e=>{let t=b(z,e.path);return(0,O.jsxs)(F,{$selected:J===e.path,onClick:t=>{Y(e.path,e.isDirectory)||(e.isDirectory?f(e.path,C(t)):m(e.path))},onDoubleClick:()=>f(e.path,!1),onContextMenu:t=>X(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&z.useIcons?(0,O.jsx)(S,{place:t,size:15}):(0,O.jsx)(x,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,O.jsxs)(I,{children:[(0,O.jsx)(`strong`,{children:t?.name||e.name}),(0,O.jsx)(P,{children:e.path})]})]},e.path)})})},Ir=e=>{let t=V?.favorites??[],n=async e=>{await $({favorites:t.filter(t=>t.path!==e)})},r=async(e,n)=>{e&&!t.some(t=>E(t.path,e))&&await $({favorites:[...t,{path:e,name:Re(e)||e,isDirectory:n}]})},i=(e,t,n)=>{B||Y(t,n)||(n?f(t,C(e)):m(t))},a=B?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(Ft,{$row:e.view===`list`,onClick:()=>void ce().then(e=>r(e,!1)),title:R(`pin_any_file_here`),type:`button`,children:[e.view===`list`?(0,O.jsx)(w,{size:15}):(0,O.jsx)(M,{children:(0,O.jsx)(w,{size:15})}),e.view===`list`?(0,O.jsxs)(I,{children:[(0,O.jsx)(`strong`,{children:R(`add_file`)}),(0,O.jsx)(P,{children:R(`pin_any_file_here`)})]}):(0,O.jsxs)(N,{children:[(0,O.jsx)(`strong`,{children:R(`add_file`)}),(0,O.jsx)(P,{children:R(`pin_any_file_here`)})]})]}),(0,O.jsxs)(Ft,{$row:e.view===`list`,onClick:()=>void ue().then(e=>r(e,!0)),title:R(`pin_any_folder_here`),type:`button`,children:[e.view===`list`?(0,O.jsx)(w,{size:15}):(0,O.jsx)(M,{children:(0,O.jsx)(w,{size:15})}),e.view===`list`?(0,O.jsxs)(I,{children:[(0,O.jsx)(`strong`,{children:R(`add_folder`)}),(0,O.jsx)(P,{children:R(`pin_any_folder_here`)})]}):(0,O.jsxs)(N,{children:[(0,O.jsx)(`strong`,{children:R(`add_folder`)}),(0,O.jsx)(P,{children:R(`pin_any_folder_here`)})]})]})]}):null;return t.length===0&&!B?(0,O.jsx)(L,{children:R(`no_favorites_yet_right_click_any_file_or_folder_and_add_it_here`)}):e.view===`grid`?(0,O.jsxs)(Mt,{children:[t.map(e=>{let t=b(z,e.path);return(0,O.jsxs)(Nt,{$plain:B,$selected:J===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!B&&f(e.path,!1),onContextMenu:t=>!B&&X(t,e.path,e.isDirectory),title:e.path,children:[B&&(0,O.jsx)(Wt,{onClick:t=>{t.stopPropagation(),n(e.path)},title:R(`remove_from_favorites`),type:`button`,children:(0,O.jsx)(T,{size:11})}),(0,O.jsx)(M,{children:t&&z.useIcons?(0,O.jsx)(S,{place:t,size:18}):(0,O.jsx)(x,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,O.jsxs)(N,{children:[(0,O.jsx)(`strong`,{children:t?.name||e.name}),(0,O.jsx)(P,{children:e.path})]})]},e.path)}),a]}):(0,O.jsxs)(Pt,{children:[t.map(e=>{let t=b(z,e.path);return(0,O.jsxs)(F,{$selected:J===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!B&&f(e.path,!1),onContextMenu:t=>!B&&X(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&z.useIcons?(0,O.jsx)(S,{place:t,size:15}):(0,O.jsx)(x,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,O.jsxs)(I,{children:[(0,O.jsx)(`strong`,{children:t?.name||e.name}),(0,O.jsx)(P,{children:e.path})]}),B&&(0,O.jsx)(Wt,{$inline:!0,onClick:t=>{t.stopPropagation(),n(e.path)},title:R(`remove_from_favorites`),type:`button`,children:(0,O.jsx)(T,{size:11})})]},e.path)}),a]})},Lr=e=>{if(n.length===0)return(0,O.jsx)(L,{children:R(`no_drives_are_available`)});let t=n.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=xn?.drive.name===t.name,i=r?(0,O.jsx)(an,{maxLength:32,onCancel:()=>Sn(null),onChange:e=>Sn({...xn,label:e}),onCommit:()=>void fr(),value:xn?.label??``}):(0,O.jsx)(O.Fragment,{children:Ie(t)}),a=!r&&B&&pr&&(0,O.jsx)(Gt,{onClick:e=>{e.stopPropagation(),dr(t)},title:R(`rename_volume`),type:`button`,children:(0,O.jsx)(Me,{size:11})}),o=(0,O.jsx)(P,{children:R(`free_free_of_total`,{free:Le(t.freeSpace),total:Le(t.totalSize)})});return e.view===`grid`?(0,O.jsxs)(Nt,{$plain:!1,$selected:J===t.name,onClick:e=>{!r&&Y(t.name,!0)||r||f(t.name,C(e))},onDoubleClick:()=>!r&&f(t.name,!1),onContextMenu:e=>!r&&X(e,t.name,!0),title:t.name,children:[(0,O.jsx)(M,{children:(0,O.jsx)(xe,{size:18})}),(0,O.jsxs)(N,{children:[(0,O.jsxs)(`strong`,{children:[i,r&&Fe(t),a]}),o]})]},t.name):(0,O.jsxs)(F,{as:r?`div`:`button`,$selected:J===t.name,onClick:r?void 0:e=>{Y(t.name,!0)||f(t.name,C(e))},onDoubleClick:r?void 0:()=>f(t.name,!1),onContextMenu:r?void 0:e=>X(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,O.jsx)(xe,{size:18}),(0,O.jsxs)(I,{children:[(0,O.jsxs)(`strong`,{children:[i,r&&Fe(t),a]}),o]}),(0,O.jsx)(It,{children:(0,O.jsx)(Lt,{$used:n,$tone:Ne(n)})})]},t.name)});return e.view===`grid`?(0,O.jsx)(Mt,{children:t}):(0,O.jsx)(Pt,{children:t})},Rr=()=>{let e=async e=>{On(e.id);try{await ae(e.host,e.port)}finally{On(null)}},t=async()=>{let e=kn.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){On(`manual`);try{await ae(n,r)}finally{On(null)}}};return(0,O.jsxs)(Yt,{children:[(0,O.jsxs)(Xt,{children:[(0,O.jsx)(Zt,{onChange:e=>An(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:R(`address_e_g_192_168_1_20_45701`),value:kn}),(0,O.jsx)(nn,{disabled:Dn!==null||!kn.includes(`:`),onClick:()=>void t(),type:`button`,children:R(Dn===`manual`?`pairing`:`pair_by_address`)})]}),Tn.length===0&&(0,O.jsx)(L,{children:R(`no_sharing_devices_on_this_network_yet_pair_one_by_address_or_share_a_folder_from_the_title_bar`)}),Tn.map(t=>(0,O.jsxs)(Qt,{children:[(0,O.jsxs)($t,{children:[(0,O.jsx)(Oe,{size:14}),(0,O.jsx)(en,{title:t.host,children:t.name}),(0,O.jsx)(tn,{$online:t.online,children:t.paired?t.online?R(`paired`):R(`offline`):R(`not_paired`)}),!t.paired&&t.online&&(0,O.jsx)(nn,{disabled:Dn===t.id,onClick:()=>void e(t),type:`button`,children:Dn===t.id?R(`pairing`):R(`pair`)})]}),t.paired&&t.shares.length===0&&(0,O.jsx)(P,{children:R(`no_folders_are_shared_with_the_app_on_this_device`)}),t.shares.map(e=>(0,O.jsxs)(F,{onClick:n=>f(be(t.id,e.id),C(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,O.jsx)(Oe,{size:14}),(0,O.jsxs)(I,{children:[(0,O.jsx)(`strong`,{children:e.name}),(0,O.jsx)(P,{children:t.name})]}),(0,O.jsx)(Ce,{size:12})]},e.id))]},t.id))]})},zr=e=>{switch(e.kind){case`share`:return Rr();case`favorites`:return Ir(e);case`quick`:{let t=Pr(e);return!B&&t.length===0?(0,O.jsx)(L,{children:R(`no_folders_in_this_quick_access_panel_yet`)}):e.view===`grid`?(0,O.jsxs)(Mt,{children:[t.map(t=>(0,O.jsxs)(Nt,{$plain:B,$selected:J===t.path,...Nr(e,t.path),onClick:e=>{!B&&!Y(t.path,!0)&&f(t.path,C(e))},onDoubleClick:()=>!B&&f(t.path,!1),onContextMenu:e=>!B&&X(e,t.path,!0),title:t.path,children:[B&&(0,O.jsx)(Wt,{onClick:n=>{n.stopPropagation(),jr(e,t.path)},title:R(`remove_from_quick_access`),type:`button`,children:(0,O.jsx)(T,{size:11})}),(0,O.jsxs)(Ht,{children:[B?(0,O.jsx)(Ut,{onClick:e=>{e.stopPropagation(),G(cr(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:R(`change_icon`),type:`button`,children:(0,O.jsx)(M,{children:(0,O.jsx)(S,{place:t})})}):(0,O.jsx)(M,{children:(0,O.jsx)(S,{place:t})}),cr(t.path)&&(0,O.jsx)(he,{onPick:e=>void lr(t.path,e),value:V?.placeIcons?.[t.path]??t.icon})]}),(0,O.jsxs)(N,{children:[K?.path===t.path?(0,O.jsx)(`strong`,{children:(0,O.jsx)(an,{onCancel:()=>q(null),onChange:e=>q({path:t.path,name:e}),onCommit:()=>void ur(t.path,K?.name??``),value:K?.name??``})}):(0,O.jsxs)(`strong`,{children:[t.name,B&&(0,O.jsx)(Gt,{onClick:e=>{e.stopPropagation(),G(null),q({path:t.path,name:t.name})},title:R(`rename_folder`),type:`button`,children:(0,O.jsx)(Me,{size:11})})]}),(0,O.jsx)(P,{children:t.path})]})]},t.path)),B&&(0,O.jsxs)(Ft,{onClick:()=>void Ar(e),title:R(`pin_a_folder_here`),type:`button`,children:[(0,O.jsx)(M,{children:(0,O.jsx)(w,{size:15})}),(0,O.jsxs)(N,{children:[(0,O.jsx)(`strong`,{children:R(`add_folder`)}),(0,O.jsx)(P,{children:R(`pin_a_directory_here`)})]})]})]}):(0,O.jsxs)(Pt,{children:[t.map(t=>(0,O.jsxs)(F,{$selected:J===t.path,...Nr(e,t.path),onClick:e=>{!B&&!Y(t.path,!0)&&f(t.path,C(e))},onDoubleClick:()=>!B&&f(t.path,!1),onContextMenu:e=>!B&&X(e,t.path,!0),title:t.path,type:`button`,children:[(0,O.jsxs)(Ht,{children:[B?(0,O.jsx)(Ut,{onClick:e=>{e.stopPropagation(),G(cr(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:R(`change_icon`),type:`button`,children:(0,O.jsx)(S,{place:t,size:15})}):(0,O.jsx)(S,{place:t,size:15}),cr(t.path)&&(0,O.jsx)(he,{onPick:e=>void lr(t.path,e),value:V?.placeIcons?.[t.path]??t.icon})]}),(0,O.jsxs)(I,{children:[K?.path===t.path?(0,O.jsx)(`strong`,{children:(0,O.jsx)(an,{onCancel:()=>q(null),onChange:e=>q({path:t.path,name:e}),onCommit:()=>void ur(t.path,K?.name??``),value:K?.name??``})}):(0,O.jsxs)(`strong`,{children:[t.name,B&&(0,O.jsx)(Gt,{onClick:e=>{e.stopPropagation(),G(null),q({path:t.path,name:t.name})},title:R(`rename_folder`),type:`button`,children:(0,O.jsx)(Me,{size:11})})]}),(0,O.jsx)(P,{children:t.path})]}),B&&(0,O.jsx)(Wt,{$inline:!0,onClick:n=>{n.stopPropagation(),jr(e,t.path)},title:R(`remove_from_quick_access`),type:`button`,children:(0,O.jsx)(T,{size:11})})]},t.path)),B&&(0,O.jsxs)(Ft,{$row:!0,onClick:()=>void Ar(e),title:R(`pin_a_folder_here`),type:`button`,children:[(0,O.jsx)(w,{size:15}),(0,O.jsxs)(I,{children:[(0,O.jsx)(`strong`,{children:R(`add_folder`)}),(0,O.jsx)(P,{children:R(`pin_a_directory_here`)})]})]})]})}case`frequent`:return(0,O.jsx)(on,{mode:e.view,onContextMenu:X,onOpen:f,onSelectionChange:ht,selectCards:mt,version:d});case`recent`:return Fr(e);case`drives`:return Lr(e);default:return(0,O.jsx)(sn,{mode:e.view,onContextMenu:X,onOpen:f,onPick:pt,onSelectionChange:ht,selectCards:mt,openOnSingleClick:V?.openOnSingleClick??y().openOnSingleClick,path:e.path??l,platform:cn,selectionMenuId:`overview:${e.id}`,showCheckboxes:V?.showCheckboxes??y().showCheckboxes,visibilityVersion:lt})}};return(0,O.jsxs)(Ge,{$flush:!!V?.overviewBanner,ref:Vn,children:[!ft&&(0,O.jsxs)(yt,{$overlay:!!V?.overviewBanner,children:[(0,O.jsx)(bt,{role:`group`,title:R(`columns`),children:[1,2,3,4,5].map(e=>(0,O.jsx)(xt,{$active:mr===e,onClick:()=>void $({overviewColumns:e}),title:ze(R,e,`k_1_column`,`count_columns`),type:`button`,children:e},e))}),B&&(0,O.jsxs)(St,{children:[(0,O.jsxs)(A,{onClick:()=>bn(e=>!e),onPointerDown:e=>e.stopPropagation(),title:R(`add_a_panel`),type:`button`,children:[(0,O.jsx)(w,{size:12}),R(`add_panel`)]}),yn&&(0,O.jsx)(Ct,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,O.jsx)(wt,{onClick:()=>{bn(!1),kr(e)},type:`button`,children:R(e===`quick`?`quick_access`:e===`recent`?`recent`:e===`frequent`?`frequent`:e===`home`?`home`:e===`drives`?`this_pc`:e===`share`?`shared`:e===`favorites`?`favorites`:`folder_2`)},e))})]}),B&&(0,O.jsxs)(A,{onClick:()=>void hr(),title:R(`put_every_panel_back_the_way_the_app_ships_it`),type:`button`,children:[(0,O.jsx)(je,{size:12}),R(`restore_default_panels`)]}),Pn.available&&(0,O.jsx)(j,{onClick:e=>Pn.open(e.clientX,e.clientY),title:R(`selection_menu`),type:`button`,children:(0,O.jsx)(ke,{size:14})}),(0,O.jsxs)(A,{onClick:()=>{ln(e=>!e),bn(!1),G(null),q(null),Sn(null)},title:R(B?`done`:`edit`),type:`button`,children:[B?(0,O.jsx)(De,{size:13}):(0,O.jsx)(Me,{size:13}),R(B?`done`:`edit`)]})]}),Cn&&(0,O.jsx)(Jt,{children:Cn}),V?.overviewBanner&&(0,O.jsxs)(Ke,{ref:Hn,style:{height:`${Wn}px`,"--banner-image-width":`${$n}px`,"--banner-image-shift":`${nr}px`,"--banner-travel":`${tr}px`,"--banner-overlap":`0px`},children:[(0,O.jsx)(qe,{children:mn?(0,O.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Jn({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:gn??void 0}):(0,O.jsx)(`img`,{alt:``,onLoad:e=>{let t=U?1920:e.currentTarget.naturalWidth||1920,n=U?1080:e.currentTarget.naturalHeight||1080;Jn({width:t,height:n})},ref:Un,src:gn??void 0})}),B&&(0,O.jsx)(Je,{onDoubleClick:()=>{Bn.current=null,Rn(null),$({overviewBannerHeight:220})},onPointerCancel:Sr,onPointerDown:br,onPointerMove:xr,onPointerUp:Sr,title:R(`drag_to_resize_double_click_to_reset`)})]}),(0,O.jsxs)(Ye,{$offset:V?.overviewBanner?100:0,children:[B&&(0,O.jsxs)(Xe,{children:[(0,O.jsxs)(Ze,{children:[(0,O.jsx)(Qe,{children:R(`banners`)}),V?.overviewBanner&&(0,O.jsxs)(A,{onClick:()=>ir(!0),title:R(`adjust_framing`),type:`button`,children:[(0,O.jsx)(Me,{size:12}),R(`adjust_framing`)]})]}),(0,O.jsxs)($e,{children:[(0,O.jsx)(rt,{children:(0,O.jsx)(it,{$active:!V?.overviewBanner,onClick:vr,title:R(`no_banner`),type:`button`,children:(0,O.jsxs)(st,{children:[(0,O.jsx)(T,{size:16}),(0,O.jsx)(`span`,{children:R(`no_banner`)})]})})}),ye.map(t=>(0,O.jsx)(rt,{children:(0,O.jsx)(it,{$active:V?.overviewBanner===t.id,onClick:()=>void $({overviewBanner:t.id}),title:`${R(t.concept)} · ${R(t.preset)}`,type:`button`,children:(0,O.jsx)(Ve,{source:t.id,theme:e})})},t.id)),_e.map(t=>(0,O.jsx)(rt,{children:(0,O.jsxs)(it,{$active:V?.overviewBanner===t.id,onClick:()=>void $({overviewBanner:t.id}),title:R(t.name),type:`button`,children:[(0,O.jsx)(Ve,{poster:t.poster,source:t.id,theme:e}),(0,O.jsx)(ot,{children:(0,O.jsx)(Ee,{size:11})})]})},t.id)),(V?.overviewBanners??[]).map(t=>(0,O.jsxs)(rt,{children:[(0,O.jsx)(it,{$active:V?.overviewBanner===t||V?.overviewBanner===`url:${t}`,onClick:()=>void $({overviewBanner:Pe(t)?`url:${t}`:t}),title:t,type:`button`,children:(0,O.jsx)(Ve,{source:t,theme:e})}),(0,O.jsx)(at,{onClick:()=>yr(t),title:R(`remove`),type:`button`,children:(0,O.jsx)(T,{size:10})})]},t)),(0,O.jsxs)(vt,{onClick:()=>void gr(),title:R(`add_banner`),type:`button`,children:[(0,O.jsx)(w,{size:18}),(0,O.jsx)(`span`,{children:R(`add_banner`)})]})]}),(0,O.jsxs)(et,{children:[(0,O.jsx)(tt,{onChange:e=>vn(e.target.value),onKeyDown:e=>{e.key===`Enter`&&_r()},placeholder:`https://…`,value:_n}),(0,O.jsx)(nt,{disabled:!Pe(_n),onClick:()=>void _r(),type:`button`,children:R(`add_url`)})]})]}),(0,O.jsx)(Tt,{ref:or,$columns:mr,children:Z.map(e=>{let t=Q.indexOf(e.id);return(0,O.jsxs)(Et,{children:[(0,O.jsxs)(Dt,{children:[(0,O.jsxs)(Ot,{children:[(0,O.jsxs)(Ht,{children:[B?(0,O.jsx)(Ut,{onClick:()=>G(sr(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:R(`change_icon`),type:`button`,children:(0,O.jsx)(ie,{panel:e,size:15})}):(0,O.jsx)(ie,{panel:e,size:15}),sr(e.id)&&(0,O.jsx)(he,{onPick:t=>Or(e.id,t),value:e.icon})]}),B?(0,O.jsx)(jt,{defaultValue:e.title,onBlur:t=>wr(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,O.jsx)(At,{children:R(e.title)})]}),(0,O.jsxs)(kt,{children:[!B&&e.kind===`recent`&&(0,O.jsx)(A,{onClick:()=>void c().then(se),title:R(`clear`),type:`button`,children:R(`clear`)}),!B&&e.kind===`frequent`&&(0,O.jsx)(A,{onClick:()=>void ee().then(()=>Ue?.()),title:R(`clear_the_frequent_list`),type:`button`,children:R(`clear`)}),!B&&(e.kind===`home`||e.kind===`folder`)&&(0,O.jsx)(A,{onClick:()=>f(e.path??l),title:R(`open_folder`),type:`button`,children:R(`open`)}),B&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(j,{$active:e.pinned,onClick:()=>Er(e.id),title:e.pinned?R(`unpin_from_the_sidebar`):R(`pin_to_the_sidebar`),type:`button`,children:(0,O.jsx)(Ae,{size:12})}),(0,O.jsx)(j,{$active:e.view===`list`,onClick:()=>Tr(e.id,`list`),title:R(`list`),type:`button`,children:(0,O.jsx)(Se,{size:13})}),(0,O.jsx)(j,{$active:e.view===`grid`,onClick:()=>Tr(e.id,`grid`),title:R(`grid`),type:`button`,children:(0,O.jsx)(we,{size:13})}),(0,O.jsx)(j,{disabled:t===0,onClick:()=>Cr(e.id,-1),title:R(`move_up`),type:`button`,children:(0,O.jsx)(Te,{size:12})}),(0,O.jsx)(j,{disabled:t===Q.length-1,onClick:()=>Cr(e.id,1),title:R(`move_down`),type:`button`,children:(0,O.jsx)(Te,{size:12})}),(0,O.jsx)(j,{onClick:()=>Dr(e.id),title:R(`remove_panel`),type:`button`,children:(0,O.jsx)(T,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?zr(e):(0,O.jsx)(zt,{children:zr(e)})]},e.id)})})]}),rr&&gn&&(0,O.jsx)(He,{height:Wn,offset:Yn,onCancel:()=>ir(!1),onSave:e=>{$({overviewBannerOffset:e}),ir(!1)},source:gn,video:mn}),Fn&&(0,O.jsx)(le,{directory:l,menu:{x:Fn.x,y:Fn.y,paths:[Fn.target.path]},onClose:()=>In(null),onCopy:(e,t)=>void pe(e,t),onAddToTray:gt,onAddFavorite:_t,onRemoveFavorite:Rt,favoritePaths:Bt,onExtractArchive:Vt,onOpenAsArchive:Kt,onAddToStartMenu:qt,onOpen:ar,onOpenFile:e=>pt?pt(e):void m(e),shortcuts:me(),target:Fn.target})]})}function an({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=o();return(0,O.jsxs)(Kt,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,O.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,O.jsx)(qt,{onClick:r,title:a(`cancel`),type:`button`,children:(0,O.jsx)(T,{size:11})}),(0,O.jsx)(qt,{$apply:!0,onClick:n,title:a(`rename_volume`),type:`button`,children:(0,O.jsx)(De,{size:12})})]})}function on({mode:e,onOpen:t,onContextMenu:n,onSelectionChange:r,selectCards:i=!1,version:a}){let s=o(),[c,l]=(0,D.useState)(null),[u,d]=(0,D.useState)(null),f=fe(),m=e=>i?(d(e),r?.([e]),!0):!1;if((0,D.useEffect)(()=>{p().then(l,()=>l([]))},[a]),!c)return(0,O.jsx)(L,{children:s(`reading`)});if(c.length===0)return(0,O.jsx)(L,{children:s(`folders_you_open_often_show_up_here`)});let h=e=>ze(s,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path});return e===`grid`?(0,O.jsx)(Mt,{children:c.map(e=>{let r=b(f,e.path);return(0,O.jsxs)(Nt,{$plain:!1,$selected:u===e.path,onClick:n=>{m(e.path)||t(e.path,C(n))},onDoubleClick:()=>t(e.path,!1),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,O.jsx)(M,{children:r&&f.useIcons?(0,O.jsx)(S,{place:r,size:18}):(0,O.jsx)(x,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,O.jsxs)(N,{children:[(0,O.jsx)(`strong`,{children:r?.name||e.name}),(0,O.jsx)(P,{children:h(e)})]})]},e.path)})}):(0,O.jsx)(Pt,{children:c.map(e=>{let r=b(f,e.path);return(0,O.jsxs)(F,{$selected:u===e.path,onClick:n=>{m(e.path)||t(e.path,C(n))},onDoubleClick:()=>t(e.path,!1),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[r&&f.useIcons?(0,O.jsx)(S,{place:r,size:15}):(0,O.jsx)(x,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,O.jsxs)(I,{children:[(0,O.jsx)(`strong`,{children:r?.name||e.name}),(0,O.jsx)(P,{children:h(e)})]})]},e.path)})})}function sn({path:e,mode:t,onOpen:n,onContextMenu:r,onPick:i,onSelectionChange:s,selectCards:c=!1,selectionMenuId:u,showCheckboxes:p,openOnSingleClick:h,visibilityVersion:ee,platform:g}){let _=o(),[v,y]=(0,D.useState)(null),[te,ne]=(0,D.useState)(null),re=fe();return(0,D.useEffect)(()=>{e&&(y(null),f(e).then(y,()=>y(null)))},[e,ee]),(0,D.useEffect)(()=>{if(a.available)return a.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&E(n.data.path,e)&&f(e,!1).then(y,()=>void 0)})},[e]),v?t===`list`?(0,O.jsx)(Rt,{children:(0,O.jsx)(se,{platform:g,error:null,listing:v,loading:!1,onOpen:n,onOpenFile:i??(e=>void m(e)),onRefresh:()=>void f(e,!1).then(y,()=>void 0),onRename:(e,t)=>y(n=>n&&{...n,entries:n.entries.map(n=>E(n.fullPath,e)?{...n,name:Re(t),fullPath:t}:n)}),onSelectionChange:s,selectionMenuId:u,onSort:()=>void 0,openOnSingleClick:h,enableShortcuts:!1,showCheckboxes:p,showDetails:!1,showImages:!1,view:{...l(),columns:d().columns??[]}})}):(0,O.jsx)(zt,{children:v.entries.length===0?(0,O.jsx)(L,{children:_(`this_folder_is_empty`)}):(0,O.jsx)(Bt,{children:v.entries.map(e=>{let t=b(re,e.fullPath);return(0,O.jsxs)(Vt,{$selected:te===e.fullPath,onClick:t=>{c?(ne(e.fullPath),s?.([e.fullPath])):e.isDirectory?n(e.fullPath,C(t)):m(e.fullPath)},onDoubleClick:()=>e.isDirectory?n(e.fullPath,!1):i?.(e.fullPath),onContextMenu:t=>r?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&re.useIcons?(0,O.jsx)(S,{place:t,size:16}):(0,O.jsx)(x,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,O.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,O.jsx)(L,{children:_(`reading`)})}export{Be as n,rn as t};