import{n as e,r as t}from"./rolldown-runtime-XKyaHtl9.js";import{_ as n,d as r,f as i,g as a,u as o}from"./dist-sR-t6Emc.js";import{B as s,H as c,N as l,Q as ee,U as u,V as d,Y as f,at as p,nt as m,r as te,t as h,ut as g}from"./selectionMenu-CQPdpP0k.js";import{a as _,i as v,n as ne,p as re,r as ie,u as ae}from"./concepts-D5cg96U9.js";import{t as oe}from"./textSearch-DmAzgeJI.js";import{A as y,E as se,F as ce,H as le,J as ue,K as b,L as de,N as x,P as fe,U as pe,V as me,_ as he,ct as ge,h as _e,ot as S,q as ve,t as ye}from"./FileList-CYl5phCw.js";import{F as be,I as xe,K as Se,T as Ce,W as we,a as Te,ct as Ee,d as De,et as Oe,it as C,nt as ke,ot as Ae,v as w,yt as je}from"./Icons-NY0trHLk.js";import{a as Me,b as Ne,c as Pe,m as Fe,o as Ie,s as Le,v as Re,y as T}from"./format-CWgBbA72.js";import{t as ze}from"./IconPicker-Dw9ZMd15.js";var Be=e({OverviewView:()=>R}),E=t(n(),1),D=r();function Ve({source:e,poster:t,theme:n}){let r=Fe(e),i=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,a=e.startsWith(`builtin:`)||r?null:e,o=l(a,0,i?`.${i}`:``),s=t??v(e,n)??(r?e:o),c=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(i);return s?c?(0,D.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:s}):(0,D.jsx)(`img`,{alt:``,src:s}):null}function He({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let s=o(),c=(0,E.useRef)(null),l=(0,E.useRef)(null),ee=(0,E.useRef)(!1),[u,d]=(0,E.useState)(null),[f,p]=(0,E.useState)(null),[m,te]=(0,E.useState)(0),h=()=>{let t=c.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?d({width:1920,height:1080}):n>0&&r>0&&d({width:n,height:r}),i.width>0&&i.height>0&&p({width:i.width,height:i.height})},g=f&&u?Math.min(f.height,n*(f.width/u.width)):0,_=Math.max(0,(f?.height??0)-g);(0,E.useEffect)(()=>{f&&u&&!ee.current&&(ee.current=!0,te(Math.min(_,Math.max(0,r*_))))},[f,u,_,r]),(0,E.useEffect)(()=>{let e=()=>h();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,E.useEffect)(()=>{let e=window.requestAnimationFrame(h);return()=>window.cancelAnimationFrame(e)},[e,t]);let v=e=>{l.current={y:e.clientY,top:m},e.currentTarget.setPointerCapture(e.pointerId)},ne=e=>{let t=l.current;t&&te(Math.min(_,Math.max(0,t.top+e.clientY-t.y)))},re=e=>{l.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,D.jsx)(ct,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,D.jsxs)(lt,{children:[(0,D.jsxs)(ut,{children:[(0,D.jsx)(`span`,{children:s(`adjust_banner_framing`)}),(0,D.jsx)(_t,{onClick:i,title:s(`cancel`),type:`button`,children:(0,D.jsx)(w,{size:12})})]}),(0,D.jsx)(dt,{children:s(`drag_the_frame_to_choose_the_visible_part`)}),(0,D.jsxs)(ft,{children:[t?(0,D.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{h(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{c.current=e},src:e}):(0,D.jsx)(`img`,{alt:``,draggable:!1,onLoad:h,ref:e=>{c.current=e},src:e}),g>0&&(0,D.jsx)(pt,{onPointerCancel:re,onPointerDown:v,onPointerMove:ne,onPointerUp:re,style:{height:g,top:m},children:(0,D.jsx)(mt,{})})]}),(0,D.jsxs)(ht,{children:[(0,D.jsx)(gt,{onClick:i,type:`button`,children:s(`cancel`)}),(0,D.jsx)(gt,{$primary:!0,onClick:()=>a(_>0?m/_:r),type:`button`,children:s(`save`)})]})]})})}var Ue=150,We=120,O=200,Ge=a.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,Ke=a.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,qe=a.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${O}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${O}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(O*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(O*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(O*.18)}px),
    transparent 100%);
    mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${O}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(O*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(O*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(O*.18)}px),
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
`,Je=a.div`
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
`,Ye=a.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,Xe=a.section`
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
`,Ze=a.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,Qe=a.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,$e=a.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,et=a.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,tt=a.input`
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
`,nt=a.button`
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
`,rt=a.div`
    position: relative;
    width: 132px;
    height: 72px;
`,it=a.button`
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
`,at=a.button`
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
`,ot=a.span`
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
`,st=a.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,ct=a.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,lt=a.div`
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
`,ut=a.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,dt=a.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,ft=a.div`
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
`,pt=a.div`
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
`,mt=a.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,ht=a.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,gt=a.button`
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
`,_t=a.button`
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
`,vt=a.button`
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
`,yt=a.div`
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
`,bt=a.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,xt=a.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,k=a.button`
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
`,St=a.div`
    position: relative;
    display: inline-flex;
`,Ct=a.div`
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
`,wt=a.button`
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
`,Tt=a.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,Et=a.section`
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
`,Dt=a.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Ot=a.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,kt=a.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,At=a.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,jt=a.input`
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
`,A=a.button`
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
`,j=a.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,Mt=a.div`
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
`,M=a.span`
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
`,N=a.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,P=a.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Nt=a.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,F=a.button`
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
`;function R({theme:e,places:t,drives:n,recent:r,recentLimit:a,homePath:s,historyVersion:ee,onOpen:d,onPlacesChanged:f,onRecentCleared:ye,onLayoutChanged:Be,onHistoryChanged:Ue,onDrivesChanged:ct,visibilityVersion:lt=0,find:ut,onSearchMatches:dt,readOnly:ft=!1,onPick:pt,selectCards:mt=!1,onSelectionChange:ht,onAddToTray:gt,onAddFavorite:_t,onRemoveFavorite:Lt,favoritePaths:zt,onExtractArchive:Bt,settingsVersion:Gt=0,platform:Kt}){let R=o(),z=ve(),[B,on]=(0,E.useState)(!1),[V,sn]=(0,E.useState)(null),H=V?.overviewBanner??null,U=H?.startsWith(`builtin:`)??!1,cn=H?.startsWith(`url:`)?H.slice(4):Fe(H)?H:null,ln=U||cn?``:H??``,un=U?``:cn?cn.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:ln.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,dn=U?_(H):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(un),fn=l(ln.length>0?ln:null,0,un?`.${un}`:``),pn=H?v(H,e)??cn??fn:null,[mn,hn]=(0,E.useState)(``),[W,G]=(0,E.useState)(null),[gn,_n]=(0,E.useState)(!1),[vn,yn]=(0,E.useState)(null),[K,q]=(0,E.useState)(null),[bn,xn]=(0,E.useState)(null),[Sn,Cn]=(0,E.useState)([]),[wn,Tn]=(0,E.useState)(null),[En,Dn]=(0,E.useState)(``),[J,On]=(0,E.useState)(null),[kn,An]=(0,E.useState)(null),jn=te(`overview`),[Mn,Nn]=(0,E.useState)(null),[Pn,Fn]=(0,E.useState)(null),In=(0,E.useRef)(null),Ln=(0,E.useRef)(null),Rn=(0,E.useRef)(null),zn=(0,E.useRef)(null),Bn=(0,E.useRef)(null),Vn=Pn??V?.overviewBannerHeight??220,[Hn,Un]=(0,E.useState)(0),[Wn,Gn]=(0,E.useState)(null),Kn=Math.min(1,Math.max(0,V?.overviewBannerOffset??.3)),qn=Vn+O,Jn=Wn&&Hn>0?Wn.height*(Hn/Wn.width):qn,Yn=Jn>0&&Jn<qn+240?(qn+240)/Jn:1,Xn=Math.max(1,Math.round(Hn*Yn)),Zn=Math.max(0,Jn*Yn-qn),Qn=Math.min(We,Zn/2,Math.max(20,Vn*.42)),$n=Qn+Kn*Math.max(0,Zn-Qn*2),[er,tr]=(0,E.useState)(!1),Y=(e,t=!1)=>mt?(On(e),An({path:e,isDirectory:t}),ht?.([e]),!0):!1,X=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),On(t),An({path:t,isDirectory:n}),Nn({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,E.useEffect)(()=>(h(`overview`,kn?(e,t)=>Nn({x:e,y:t,target:kn}):null),()=>h(`overview`,null)),[kn]);let nr=(e,t)=>d(e,t);(0,E.useEffect)(()=>{ae().then(sn,()=>sn(null))},[Gt]),(0,E.useEffect)(()=>{if(i.available)return he().then(Cn,()=>void 0),i.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&Cn(t.data.peers)})},[]),(0,E.useEffect)(()=>{let e=Rn.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,E.useEffect)(()=>{if(U&&!dn){Gn({width:1920,height:1080});return}Gn(null);let e=Bn.current;e?.complete&&e.naturalWidth>0&&Gn({width:e.naturalWidth,height:e.naturalHeight})},[H,U,dn]),(0,E.useEffect)(()=>{let e=zn.current;if(!e)return;let t=()=>Un(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[V?.overviewBanner]),(0,E.useEffect)(()=>{if(!W)return;let e=()=>G(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||G(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[W]),(0,E.useEffect)(()=>{if(!gn)return;let e=()=>_n(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[gn]);let Z=de(V),Q=Z.map(e=>e.id),rr=(0,E.useRef)(null),ir=e=>W?.kind===`panel`&&W.id===e,ar=e=>W?.kind===`place`&&W.id===e;(0,E.useEffect)(()=>{if(!i.available)return;let e=Z.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??s).filter(e=>e.length>0);return i.send({type:`fs.watch`,payload:{paths:e,owner:`overview`}}),()=>i.send({type:`fs.watch`,payload:{paths:[],owner:`overview`}})},[Z.map(e=>e.path??e.id).join(`|`),s]),oe(rr,ut??null,`section`,dt??(()=>void 0),[r.length,t.length,n.length,lt]);let or=async(e,t)=>{let n={...V?.placeIcons};t?n[e]=t:delete n[e],G(null),await $({placeIcons:n}),f(await m())},sr=async(e,t)=>{let n={...V?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],q(null),await $({placeNames:n}),f(await m())},cr=e=>{xn(null),yn({drive:e,label:e.label||`Local Disk`})},lr=async()=>{if(!vn)return;let{drive:e,label:t}=vn;yn(null);let n=await g(e.name,t.trim());n.ok?(xn(null),ct?.()):xn(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},ur=V?.overviewColumns??1,$=async e=>{if(!V)return;let t={...V,...e,overviewPanels:e.overviewPanels??Q,overviewHidden:[]};sn(await re(t)),Be?.()},dr=async()=>{await $({overviewPanels:[...fe],overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,panelPlaces:null,quickAccess:null,placeNames:null,placeIcons:null,favorites:[]}),f(await m()),on(!1)},fr=async()=>{let e=await le([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=V?.overviewBanners??[];await $({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},pr=async()=>{let e=mn.trim();if(!V||!Fe(e))return;let t=V.overviewBanners??[];hn(``),await $({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},mr=()=>void $({overviewBanner:null}),hr=e=>void $({overviewBanners:(V?.overviewBanners??[]).filter(t=>t!==e),...V?.overviewBanner===e||V?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),gr=e=>{In.current={y:e.clientY,height:Vn},e.currentTarget.setPointerCapture(e.pointerId)},_r=e=>{let t=In.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Ln.current=n,Fn(n)},vr=e=>{In.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Ln.current!==null&&($({overviewBannerHeight:Ln.current}),Ln.current=null)},yr=(e,t)=>{let n=Q.indexOf(e),r=n+t;if(n<0||r<0||r>=Q.length)return;let i=[...Q];[i[n],i[r]]=[i[r],i[n]],$({overviewPanels:i})},br=(e,t)=>{let n={...V?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],$({overviewTitles:n})},xr=(e,t)=>void $({overviewViews:{...V?.overviewViews,[e]:t}}),Sr=e=>{let t=V?.overviewPinned??Z.filter(e=>e.pinned).map(e=>e.id);$({overviewPinned:Z.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Cr=e=>{G(null);let t=t=>{let n={...t};return delete n[e],n},n=V?.overviewPinned??Z.filter(e=>e.pinned).map(e=>e.id);$({overviewPanels:Q.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(V?.overviewTitles),overviewViews:t(V?.overviewViews),overviewIcons:t(V?.overviewIcons),panelPlaces:t(V?.panelPlaces)})},wr=(e,t)=>{let n={...V?.overviewIcons};t?n[e]=t:delete n[e],G(null),$({overviewIcons:n})},Tr=async e=>{if(!V)return;if(e===`folder`){let e=await pe();if(!e)return;let t=`folder:${e}`;Q.includes(t)||await $({overviewPanels:[...Q,t]});return}if(e===`quick`){let e=2;for(;Q.includes(`quick:${e}`);)e+=1;await $({overviewPanels:[...Q,`quick:${e}`]});return}let t=e;for(let n=2;Q.includes(t);n+=1)t=`${e}:${n}`;await $({overviewPanels:[...Q,t]})},Er=async e=>{let n=await pe();if(!n)return;if(e.id===`quick`){await $({quickAccess:[...new Set([...t.map(e=>e.path),n])]}),f(await m());return}let r=e.places??[];r.some(e=>T(e,n))||await $({panelPlaces:{...V?.panelPlaces,[e.id]:[...r,n]}})},Dr=async(e,n)=>{G(null),e.id===`quick`?(await $({quickAccess:t.filter(e=>!T(e.path,n)).map(e=>e.path)}),f(await m())):await $({panelPlaces:{...V?.panelPlaces,[e.id]:(e.places??[]).filter(e=>!T(e,n))}})},Or=async(e,n,r)=>{if(T(n,r))return;let i=e.id===`quick`?t.map(e=>e.path):e.places??[],a=i.findIndex(e=>T(e,n)),o=i.findIndex(e=>T(e,r));if(a<0||o<0)return;let s=[...i],[c]=s.splice(a,1);s.splice(o,0,c),e.id===`quick`?(await $({quickAccess:s}),f(await m())):await $({panelPlaces:{...V?.panelPlaces,[e.id]:s}})},kr=(e,t)=>({draggable:B,onDragOver:e=>{B&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{B&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{B&&(n.preventDefault(),Or(e,n.dataTransfer.getData(`text/plain`),t))}}),Ar=e=>e.id===`quick`?t:(e.places??[]).map(e=>{let n=t.find(t=>T(t.path,e));return{name:V?.placeNames?.[e]??n?.name??(Me(e)||e),path:e,kind:`folder`,icon:n?.icon??V?.placeIcons?.[e]??null}}),jr=e=>{if(r.length===0)return(0,D.jsx)(L,{children:R(`files_and_folders_you_open_show_up_here`)});let t=r.slice(0,a);return e.view===`grid`?(0,D.jsx)(j,{children:t.map(e=>{let t=b(z,e.path);return(0,D.jsxs)(Mt,{$plain:!1,$selected:J===e.path,onClick:t=>{Y(e.path,e.isDirectory)||(e.isDirectory?d(e.path,S(t)):p(e.path))},onDoubleClick:()=>d(e.path,!1),onContextMenu:t=>X(t,e.path,e.isDirectory),title:e.path,children:[(0,D.jsx)(M,{children:t&&z.useIcons?(0,D.jsx)(x,{place:t,size:18}):(0,D.jsx)(y,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,D.jsxs)(N,{children:[(0,D.jsx)(`strong`,{children:t?.name||e.name}),(0,D.jsx)(P,{children:e.path})]})]},e.path)})}):(0,D.jsx)(Nt,{children:t.map(e=>{let t=b(z,e.path);return(0,D.jsxs)(F,{$selected:J===e.path,onClick:t=>{Y(e.path,e.isDirectory)||(e.isDirectory?d(e.path,S(t)):p(e.path))},onDoubleClick:()=>d(e.path,!1),onContextMenu:t=>X(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&z.useIcons?(0,D.jsx)(x,{place:t,size:15}):(0,D.jsx)(y,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,D.jsxs)(I,{children:[(0,D.jsx)(`strong`,{children:t?.name||e.name}),(0,D.jsx)(P,{children:e.path})]})]},e.path)})})},Mr=e=>{let t=V?.favorites??[],n=async e=>{await $({favorites:t.filter(t=>t.path!==e)})},r=async(e,n)=>{e&&!t.some(t=>T(t.path,e))&&await $({favorites:[...t,{path:e,name:Me(e)||e,isDirectory:n}]})},i=(e,t,n)=>{B||Y(t,n)||(n?d(t,S(e)):p(t))},a=B?(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(Pt,{$row:e.view===`list`,onClick:()=>void le().then(e=>r(e,!1)),title:R(`pin_any_file_here`),type:`button`,children:[e.view===`list`?(0,D.jsx)(C,{size:15}):(0,D.jsx)(M,{children:(0,D.jsx)(C,{size:15})}),e.view===`list`?(0,D.jsxs)(I,{children:[(0,D.jsx)(`strong`,{children:R(`add_file`)}),(0,D.jsx)(P,{children:R(`pin_any_file_here`)})]}):(0,D.jsxs)(N,{children:[(0,D.jsx)(`strong`,{children:R(`add_file`)}),(0,D.jsx)(P,{children:R(`pin_any_file_here`)})]})]}),(0,D.jsxs)(Pt,{$row:e.view===`list`,onClick:()=>void pe().then(e=>r(e,!0)),title:R(`pin_any_folder_here`),type:`button`,children:[e.view===`list`?(0,D.jsx)(C,{size:15}):(0,D.jsx)(M,{children:(0,D.jsx)(C,{size:15})}),e.view===`list`?(0,D.jsxs)(I,{children:[(0,D.jsx)(`strong`,{children:R(`add_folder`)}),(0,D.jsx)(P,{children:R(`pin_any_folder_here`)})]}):(0,D.jsxs)(N,{children:[(0,D.jsx)(`strong`,{children:R(`add_folder`)}),(0,D.jsx)(P,{children:R(`pin_any_folder_here`)})]})]})]}):null;return t.length===0&&!B?(0,D.jsx)(L,{children:R(`no_favorites_yet_right_click_any_file_or_folder_and_add_it_here`)}):e.view===`grid`?(0,D.jsxs)(j,{children:[t.map(e=>{let t=b(z,e.path);return(0,D.jsxs)(Mt,{$plain:B,$selected:J===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!B&&d(e.path,!1),onContextMenu:t=>!B&&X(t,e.path,e.isDirectory),title:e.path,children:[B&&(0,D.jsx)(Ut,{onClick:t=>{t.stopPropagation(),n(e.path)},title:R(`remove_from_favorites`),type:`button`,children:(0,D.jsx)(w,{size:11})}),(0,D.jsx)(M,{children:t&&z.useIcons?(0,D.jsx)(x,{place:t,size:18}):(0,D.jsx)(y,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,D.jsxs)(N,{children:[(0,D.jsx)(`strong`,{children:t?.name||e.name}),(0,D.jsx)(P,{children:e.path})]})]},e.path)}),a]}):(0,D.jsxs)(Nt,{children:[t.map(e=>{let t=b(z,e.path);return(0,D.jsxs)(F,{$selected:J===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!B&&d(e.path,!1),onContextMenu:t=>!B&&X(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&z.useIcons?(0,D.jsx)(x,{place:t,size:15}):(0,D.jsx)(y,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,D.jsxs)(I,{children:[(0,D.jsx)(`strong`,{children:t?.name||e.name}),(0,D.jsx)(P,{children:e.path})]}),B&&(0,D.jsx)(Ut,{$inline:!0,onClick:t=>{t.stopPropagation(),n(e.path)},title:R(`remove_from_favorites`),type:`button`,children:(0,D.jsx)(w,{size:11})})]},e.path)}),a]})},Nr=e=>{if(n.length===0)return(0,D.jsx)(L,{children:R(`no_drives_are_available`)});let t=n.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=vn?.drive.name===t.name,i=r?(0,D.jsx)(nn,{maxLength:32,onCancel:()=>yn(null),onChange:e=>yn({...vn,label:e}),onCommit:()=>void lr(),value:vn?.label??``}):(0,D.jsx)(D.Fragment,{children:Le(t)}),a=!r&&B&&(0,D.jsx)(Wt,{onClick:e=>{e.stopPropagation(),cr(t)},title:R(`rename_volume`),type:`button`,children:(0,D.jsx)(Oe,{size:11})}),o=(0,D.jsx)(P,{children:R(`free_free_of_total`,{free:Pe(t.freeSpace),total:Pe(t.totalSize)})});return e.view===`grid`?(0,D.jsxs)(Mt,{$plain:!1,$selected:J===t.name,onClick:e=>{!r&&Y(t.name,!0)||r||d(t.name,S(e))},onDoubleClick:()=>!r&&d(t.name,!1),onContextMenu:e=>!r&&X(e,t.name,!0),title:t.name,children:[(0,D.jsx)(M,{children:(0,D.jsx)(Ce,{size:18})}),(0,D.jsxs)(N,{children:[(0,D.jsxs)(`strong`,{children:[i,r&&Ie(t),a]}),o]})]},t.name):(0,D.jsxs)(F,{as:r?`div`:`button`,$selected:J===t.name,onClick:r?void 0:e=>{Y(t.name,!0)||d(t.name,S(e))},onDoubleClick:r?void 0:()=>d(t.name,!1),onContextMenu:r?void 0:e=>X(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,D.jsx)(Ce,{size:18}),(0,D.jsxs)(I,{children:[(0,D.jsxs)(`strong`,{children:[i,r&&Ie(t),a]}),o]}),(0,D.jsx)(Ft,{children:(0,D.jsx)(It,{$used:n,$tone:Ne(n)})})]},t.name)});return e.view===`grid`?(0,D.jsx)(j,{children:t}):(0,D.jsx)(Nt,{children:t})},Pr=()=>{let e=async e=>{Tn(e.id);try{await _e(e.host,e.port)}finally{Tn(null)}},t=async()=>{let e=En.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){Tn(`manual`);try{await _e(n,r)}finally{Tn(null)}}};return(0,D.jsxs)(Jt,{children:[(0,D.jsxs)(Yt,{children:[(0,D.jsx)(Xt,{onChange:e=>Dn(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:R(`address_e_g_192_168_1_20_45701`),value:En}),(0,D.jsx)(tn,{disabled:wn!==null||!En.includes(`:`),onClick:()=>void t(),type:`button`,children:R(wn===`manual`?`pairing`:`pair_by_address`)})]}),Sn.length===0&&(0,D.jsx)(L,{children:R(`no_sharing_devices_on_this_network_yet_pair_one_by_address_or_share_a_folder_from_the_title_bar`)}),Sn.map(t=>(0,D.jsxs)(Zt,{children:[(0,D.jsxs)(Qt,{children:[(0,D.jsx)(Ee,{size:14}),(0,D.jsx)($t,{title:t.host,children:t.name}),(0,D.jsx)(en,{$online:t.online,children:t.paired?t.online?R(`paired`):R(`offline`):R(`not_paired`)}),!t.paired&&t.online&&(0,D.jsx)(tn,{disabled:wn===t.id,onClick:()=>void e(t),type:`button`,children:wn===t.id?R(`pairing`):R(`pair`)})]}),t.paired&&t.shares.length===0&&(0,D.jsx)(P,{children:R(`no_folders_are_shared_with_the_app_on_this_device`)}),t.shares.map(e=>(0,D.jsxs)(F,{onClick:n=>d(se(t.id,e.id),S(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,D.jsx)(Ee,{size:14}),(0,D.jsxs)(I,{children:[(0,D.jsx)(`strong`,{children:e.name}),(0,D.jsx)(P,{children:t.name})]}),(0,D.jsx)(be,{size:12})]},e.id))]},t.id))]})},Fr=e=>{switch(e.kind){case`share`:return Pr();case`favorites`:return Mr(e);case`quick`:{let t=Ar(e);return!B&&t.length===0?(0,D.jsx)(L,{children:R(`no_folders_in_this_quick_access_panel_yet`)}):e.view===`grid`?(0,D.jsxs)(j,{children:[t.map(t=>(0,D.jsxs)(Mt,{$plain:B,$selected:J===t.path,...kr(e,t.path),onClick:e=>{!B&&!Y(t.path,!0)&&d(t.path,S(e))},onDoubleClick:()=>!B&&d(t.path,!1),onContextMenu:e=>!B&&X(e,t.path,!0),title:t.path,children:[B&&(0,D.jsx)(Ut,{onClick:n=>{n.stopPropagation(),Dr(e,t.path)},title:R(`remove_from_quick_access`),type:`button`,children:(0,D.jsx)(w,{size:11})}),(0,D.jsxs)(Vt,{children:[B?(0,D.jsx)(Ht,{onClick:e=>{e.stopPropagation(),G(ar(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:R(`change_icon`),type:`button`,children:(0,D.jsx)(M,{children:(0,D.jsx)(x,{place:t})})}):(0,D.jsx)(M,{children:(0,D.jsx)(x,{place:t})}),ar(t.path)&&(0,D.jsx)(ze,{onPick:e=>void or(t.path,e),value:V?.placeIcons?.[t.path]??t.icon})]}),(0,D.jsxs)(N,{children:[K?.path===t.path?(0,D.jsx)(`strong`,{children:(0,D.jsx)(nn,{onCancel:()=>q(null),onChange:e=>q({path:t.path,name:e}),onCommit:()=>void sr(t.path,K?.name??``),value:K?.name??``})}):(0,D.jsxs)(`strong`,{children:[t.name,B&&(0,D.jsx)(Wt,{onClick:e=>{e.stopPropagation(),G(null),q({path:t.path,name:t.name})},title:R(`rename_folder`),type:`button`,children:(0,D.jsx)(Oe,{size:11})})]}),(0,D.jsx)(P,{children:t.path})]})]},t.path)),B&&(0,D.jsxs)(Pt,{onClick:()=>void Er(e),title:R(`pin_a_folder_here`),type:`button`,children:[(0,D.jsx)(M,{children:(0,D.jsx)(C,{size:15})}),(0,D.jsxs)(N,{children:[(0,D.jsx)(`strong`,{children:R(`add_folder`)}),(0,D.jsx)(P,{children:R(`pin_a_directory_here`)})]})]})]}):(0,D.jsxs)(Nt,{children:[t.map(t=>(0,D.jsxs)(F,{$selected:J===t.path,...kr(e,t.path),onClick:e=>{!B&&!Y(t.path,!0)&&d(t.path,S(e))},onDoubleClick:()=>!B&&d(t.path,!1),onContextMenu:e=>!B&&X(e,t.path,!0),title:t.path,type:`button`,children:[(0,D.jsxs)(Vt,{children:[B?(0,D.jsx)(Ht,{onClick:e=>{e.stopPropagation(),G(ar(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:R(`change_icon`),type:`button`,children:(0,D.jsx)(x,{place:t,size:15})}):(0,D.jsx)(x,{place:t,size:15}),ar(t.path)&&(0,D.jsx)(ze,{onPick:e=>void or(t.path,e),value:V?.placeIcons?.[t.path]??t.icon})]}),(0,D.jsxs)(I,{children:[K?.path===t.path?(0,D.jsx)(`strong`,{children:(0,D.jsx)(nn,{onCancel:()=>q(null),onChange:e=>q({path:t.path,name:e}),onCommit:()=>void sr(t.path,K?.name??``),value:K?.name??``})}):(0,D.jsxs)(`strong`,{children:[t.name,B&&(0,D.jsx)(Wt,{onClick:e=>{e.stopPropagation(),G(null),q({path:t.path,name:t.name})},title:R(`rename_folder`),type:`button`,children:(0,D.jsx)(Oe,{size:11})})]}),(0,D.jsx)(P,{children:t.path})]}),B&&(0,D.jsx)(Ut,{$inline:!0,onClick:n=>{n.stopPropagation(),Dr(e,t.path)},title:R(`remove_from_quick_access`),type:`button`,children:(0,D.jsx)(w,{size:11})})]},t.path)),B&&(0,D.jsxs)(Pt,{$row:!0,onClick:()=>void Er(e),title:R(`pin_a_folder_here`),type:`button`,children:[(0,D.jsx)(C,{size:15}),(0,D.jsxs)(I,{children:[(0,D.jsx)(`strong`,{children:R(`add_folder`)}),(0,D.jsx)(P,{children:R(`pin_a_directory_here`)})]})]})]})}case`frequent`:return(0,D.jsx)(rn,{mode:e.view,onContextMenu:X,onOpen:d,onSelectionChange:ht,selectCards:mt,version:ee});case`recent`:return jr(e);case`drives`:return Nr(e);default:return(0,D.jsx)(an,{mode:e.view,onContextMenu:X,onOpen:d,onPick:pt,onSelectionChange:ht,selectCards:mt,openOnSingleClick:V?.openOnSingleClick??!1,path:e.path??s,platform:Kt,selectionMenuId:`overview:${e.id}`,showCheckboxes:V?.showCheckboxes??!0,visibilityVersion:lt})}};return(0,D.jsxs)(Ge,{$flush:!!V?.overviewBanner,ref:Rn,children:[!ft&&(0,D.jsxs)(yt,{$overlay:!!V?.overviewBanner,children:[(0,D.jsx)(bt,{role:`group`,title:R(`columns`),children:[1,2,3,4,5].map(e=>(0,D.jsx)(xt,{$active:ur===e,onClick:()=>void $({overviewColumns:e}),title:Re(R,e,`k_1_column`,`count_columns`),type:`button`,children:e},e))}),B&&(0,D.jsxs)(St,{children:[(0,D.jsxs)(k,{onClick:()=>_n(e=>!e),onPointerDown:e=>e.stopPropagation(),title:R(`add_a_panel`),type:`button`,children:[(0,D.jsx)(C,{size:12}),R(`add_panel`)]}),gn&&(0,D.jsx)(Ct,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,D.jsx)(wt,{onClick:()=>{_n(!1),Tr(e)},type:`button`,children:R(e===`quick`?`quick_access`:e===`recent`?`recent`:e===`frequent`?`frequent`:e===`home`?`home`:e===`drives`?`this_pc`:e===`share`?`shared`:e===`favorites`?`favorites`:`folder_2`)},e))})]}),B&&(0,D.jsxs)(k,{onClick:()=>void dr(),title:R(`put_every_panel_back_the_way_the_app_ships_it`),type:`button`,children:[(0,D.jsx)(Ae,{size:12}),R(`restore_default_panels`)]}),jn.available&&(0,D.jsx)(A,{onClick:e=>jn.open(e.clientX,e.clientY),title:R(`selection_menu`),type:`button`,children:(0,D.jsx)(Se,{size:14})}),(0,D.jsxs)(k,{onClick:()=>{on(e=>!e),_n(!1),G(null),q(null),yn(null)},title:R(B?`done`:`edit`),type:`button`,children:[B?(0,D.jsx)(De,{size:13}):(0,D.jsx)(Oe,{size:13}),R(B?`done`:`edit`)]})]}),bn&&(0,D.jsx)(qt,{children:bn}),V?.overviewBanner&&(0,D.jsxs)(Ke,{ref:zn,style:{height:`${Vn}px`,"--banner-image-width":`${Xn}px`,"--banner-image-shift":`${$n}px`,"--banner-travel":`${Qn}px`,"--banner-overlap":`0px`},children:[(0,D.jsx)(qe,{children:dn?(0,D.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Gn({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:pn??void 0}):(0,D.jsx)(`img`,{alt:``,onLoad:e=>{let t=U?1920:e.currentTarget.naturalWidth||1920,n=U?1080:e.currentTarget.naturalHeight||1080;Gn({width:t,height:n})},ref:Bn,src:pn??void 0})}),B&&(0,D.jsx)(Je,{onDoubleClick:()=>{Ln.current=null,Fn(null),$({overviewBannerHeight:220})},onPointerCancel:vr,onPointerDown:gr,onPointerMove:_r,onPointerUp:vr,title:R(`drag_to_resize_double_click_to_reset`)})]}),(0,D.jsxs)(Ye,{$offset:V?.overviewBanner?100:0,children:[B&&(0,D.jsxs)(Xe,{children:[(0,D.jsxs)(Ze,{children:[(0,D.jsx)(Qe,{children:R(`banners`)}),V?.overviewBanner&&(0,D.jsxs)(k,{onClick:()=>tr(!0),title:R(`adjust_framing`),type:`button`,children:[(0,D.jsx)(Oe,{size:12}),R(`adjust_framing`)]})]}),(0,D.jsxs)($e,{children:[(0,D.jsx)(rt,{children:(0,D.jsx)(it,{$active:!V?.overviewBanner,onClick:mr,title:R(`no_banner`),type:`button`,children:(0,D.jsxs)(st,{children:[(0,D.jsx)(w,{size:16}),(0,D.jsx)(`span`,{children:R(`no_banner`)})]})})}),ie.map(t=>(0,D.jsx)(rt,{children:(0,D.jsx)(it,{$active:V?.overviewBanner===t.id,onClick:()=>void $({overviewBanner:t.id}),title:`${R(t.concept)} · ${R(t.preset)}`,type:`button`,children:(0,D.jsx)(Ve,{source:t.id,theme:e})})},t.id)),ne.map(t=>(0,D.jsx)(rt,{children:(0,D.jsxs)(it,{$active:V?.overviewBanner===t.id,onClick:()=>void $({overviewBanner:t.id}),title:R(t.name),type:`button`,children:[(0,D.jsx)(Ve,{poster:t.poster,source:t.id,theme:e}),(0,D.jsx)(ot,{children:(0,D.jsx)(je,{size:11})})]})},t.id)),(V?.overviewBanners??[]).map(t=>(0,D.jsxs)(rt,{children:[(0,D.jsx)(it,{$active:V?.overviewBanner===t||V?.overviewBanner===`url:${t}`,onClick:()=>void $({overviewBanner:Fe(t)?`url:${t}`:t}),title:t,type:`button`,children:(0,D.jsx)(Ve,{source:t,theme:e})}),(0,D.jsx)(at,{onClick:()=>hr(t),title:R(`remove`),type:`button`,children:(0,D.jsx)(w,{size:10})})]},t)),(0,D.jsxs)(vt,{onClick:()=>void fr(),title:R(`add_banner`),type:`button`,children:[(0,D.jsx)(C,{size:18}),(0,D.jsx)(`span`,{children:R(`add_banner`)})]})]}),(0,D.jsxs)(et,{children:[(0,D.jsx)(tt,{onChange:e=>hn(e.target.value),onKeyDown:e=>{e.key===`Enter`&&pr()},placeholder:`https://…`,value:mn}),(0,D.jsx)(nt,{disabled:!Fe(mn),onClick:()=>void pr(),type:`button`,children:R(`add_url`)})]})]}),(0,D.jsx)(Tt,{ref:rr,$columns:ur,children:Z.map(e=>{let t=Q.indexOf(e.id);return(0,D.jsxs)(Et,{children:[(0,D.jsxs)(Dt,{children:[(0,D.jsxs)(Ot,{children:[(0,D.jsxs)(Vt,{children:[B?(0,D.jsx)(Ht,{onClick:()=>G(ir(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:R(`change_icon`),type:`button`,children:(0,D.jsx)(ce,{panel:e,size:15})}):(0,D.jsx)(ce,{panel:e,size:15}),ir(e.id)&&(0,D.jsx)(ze,{onPick:t=>wr(e.id,t),value:e.icon})]}),B?(0,D.jsx)(jt,{defaultValue:e.title,onBlur:t=>br(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,D.jsx)(At,{children:R(e.title)})]}),(0,D.jsxs)(kt,{children:[!B&&e.kind===`recent`&&(0,D.jsx)(k,{onClick:()=>void u().then(ye),title:R(`clear`),type:`button`,children:R(`clear`)}),!B&&e.kind===`frequent`&&(0,D.jsx)(k,{onClick:()=>void c().then(()=>Ue?.()),title:R(`clear_the_frequent_list`),type:`button`,children:R(`clear`)}),!B&&(e.kind===`home`||e.kind===`folder`)&&(0,D.jsx)(k,{onClick:()=>d(e.path??s),title:R(`open_folder`),type:`button`,children:R(`open`)}),B&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(A,{$active:e.pinned,onClick:()=>Sr(e.id),title:e.pinned?R(`unpin_from_the_sidebar`):R(`pin_to_the_sidebar`),type:`button`,children:(0,D.jsx)(ke,{size:12})}),(0,D.jsx)(A,{$active:e.view===`list`,onClick:()=>xr(e.id,`list`),title:R(`list`),type:`button`,children:(0,D.jsx)(we,{size:13})}),(0,D.jsx)(A,{$active:e.view===`grid`,onClick:()=>xr(e.id,`grid`),title:R(`grid`),type:`button`,children:(0,D.jsx)(xe,{size:13})}),(0,D.jsx)(A,{disabled:t===0,onClick:()=>yr(e.id,-1),title:R(`move_up`),type:`button`,children:(0,D.jsx)(Te,{size:12})}),(0,D.jsx)(A,{disabled:t===Q.length-1,onClick:()=>yr(e.id,1),title:R(`move_down`),type:`button`,children:(0,D.jsx)(Te,{size:12})}),(0,D.jsx)(A,{onClick:()=>Cr(e.id),title:R(`remove_panel`),type:`button`,children:(0,D.jsx)(w,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Fr(e):(0,D.jsx)(Rt,{children:Fr(e)})]},e.id)})})]}),er&&pn&&(0,D.jsx)(He,{height:Vn,offset:Kn,onCancel:()=>tr(!1),onSave:e=>{$({overviewBannerOffset:e}),tr(!1)},source:pn,video:dn}),Mn&&(0,D.jsx)(me,{directory:s,menu:{x:Mn.x,y:Mn.y,paths:[Mn.target.path]},onClose:()=>Nn(null),onCopy:(e,t)=>void ge(e,t),onAddToTray:gt,onAddFavorite:_t,onRemoveFavorite:Lt,favoritePaths:zt,onExtractArchive:Bt,onOpen:nr,onOpenFile:e=>pt?pt(e):void p(e),shortcuts:ue,target:Mn.target})]})}function nn({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=o();return(0,D.jsxs)(Gt,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,D.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,D.jsx)(Kt,{onClick:r,title:a(`cancel`),type:`button`,children:(0,D.jsx)(w,{size:11})}),(0,D.jsx)(Kt,{$apply:!0,onClick:n,title:a(`rename_volume`),type:`button`,children:(0,D.jsx)(De,{size:12})})]})}function rn({mode:e,onOpen:t,onContextMenu:n,onSelectionChange:r,selectCards:i=!1,version:a}){let s=o(),[c,l]=(0,E.useState)(null),[u,d]=(0,E.useState)(null),f=ve(),p=e=>i?(d(e),r?.([e]),!0):!1;if((0,E.useEffect)(()=>{ee().then(l,()=>l([]))},[a]),!c)return(0,D.jsx)(L,{children:s(`reading`)});if(c.length===0)return(0,D.jsx)(L,{children:s(`folders_you_open_often_show_up_here`)});let m=e=>Re(s,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path});return e===`grid`?(0,D.jsx)(j,{children:c.map(e=>{let r=b(f,e.path);return(0,D.jsxs)(Mt,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,S(n))},onDoubleClick:()=>t(e.path,!1),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,D.jsx)(M,{children:r&&f.useIcons?(0,D.jsx)(x,{place:r,size:18}):(0,D.jsx)(y,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,D.jsxs)(N,{children:[(0,D.jsx)(`strong`,{children:r?.name||e.name}),(0,D.jsx)(P,{children:m(e)})]})]},e.path)})}):(0,D.jsx)(Nt,{children:c.map(e=>{let r=b(f,e.path);return(0,D.jsxs)(F,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,S(n))},onDoubleClick:()=>t(e.path,!1),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[r&&f.useIcons?(0,D.jsx)(x,{place:r,size:15}):(0,D.jsx)(y,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,D.jsxs)(I,{children:[(0,D.jsx)(`strong`,{children:r?.name||e.name}),(0,D.jsx)(P,{children:m(e)})]})]},e.path)})})}function an({path:e,mode:t,onOpen:n,onContextMenu:r,onPick:a,onSelectionChange:c,selectCards:l=!1,selectionMenuId:ee,showCheckboxes:u,openOnSingleClick:m,visibilityVersion:te,platform:h}){let g=o(),[_,v]=(0,E.useState)(null),[ne,re]=(0,E.useState)(null),ie=ve();return(0,E.useEffect)(()=>{e&&(v(null),f(e).then(v,()=>v(null)))},[e,te]),(0,E.useEffect)(()=>{if(i.available)return i.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&T(n.data.path,e)&&f(e,!1).then(v,()=>void 0)})},[e]),_?t===`list`?(0,D.jsx)(Lt,{children:(0,D.jsx)(ye,{platform:h,error:null,listing:_,loading:!1,onOpen:n,onOpenFile:a??(e=>void p(e)),onRefresh:()=>void f(e,!1).then(v,()=>void 0),onRename:(e,t)=>v(n=>n&&{...n,entries:n.entries.map(n=>T(n.fullPath,e)?{...n,name:Me(t),fullPath:t}:n)}),onSelectionChange:c,selectionMenuId:ee,onSort:()=>void 0,openOnSingleClick:m,enableShortcuts:!1,showCheckboxes:u,showDetails:!1,showImages:!1,view:{...s,columns:d.columns??[]}})}):(0,D.jsx)(Rt,{children:_.entries.length===0?(0,D.jsx)(L,{children:g(`this_folder_is_empty`)}):(0,D.jsx)(zt,{children:_.entries.map(e=>{let t=b(ie,e.fullPath);return(0,D.jsxs)(Bt,{$selected:ne===e.fullPath,onClick:t=>{l?(re(e.fullPath),c?.([e.fullPath])):e.isDirectory?n(e.fullPath,S(t)):p(e.fullPath)},onDoubleClick:()=>e.isDirectory?n(e.fullPath,!1):a?.(e.fullPath),onContextMenu:t=>r?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&ie.useIcons?(0,D.jsx)(x,{place:t,size:16}):(0,D.jsx)(y,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,D.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,D.jsx)(L,{children:g(`reading`)})}export{Be as n,R as t};