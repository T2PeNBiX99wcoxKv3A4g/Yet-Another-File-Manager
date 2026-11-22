import{M as e,O as t,S as n,k as r,x as i}from"./dist-B10j17-y.js";import{k as a}from"./theme-IW5S96qd.js";import{U as o,q as s}from"./main-C6nwMx5p.js";import{s as c}from"./selectionMenu-DGYtVjYb.js";import{at as l,y as u}from"./Icons-C2oT0N0q.js";var d=e(r(),1),f=a(),p=n();function m({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let a=i(),c=(0,d.useRef)(null),m=(0,d.useRef)(null),[_,v]=(0,d.useState)(null);return(0,d.useLayoutEffect)(()=>{let e=c.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();v({top:t.bottom+6,left:t.left})},[]),(0,d.useLayoutEffect)(()=>{if(!_||!m.current)return;let e=m.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,_.top-e.height-12):_.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):_.left;(t!==_.top||n!==_.left)&&v({top:t,left:n})},[_]),(0,d.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,n),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,n),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{ref:c,style:{display:`none`}}),_&&(0,f.createPortal)((0,p.jsxs)(h,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:m,style:{position:`fixed`,top:_.top,left:_.left},children:[Object.keys(o).map(n=>(0,p.jsx)(g,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:o[n](16)},n)),(0,p.jsx)(g,{onClick:async()=>{let e=await s([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:a(`choose_an_image`),type:`button`,children:(0,p.jsx)(l,{size:13})}),r&&(0,p.jsx)(g,{$active:!e,onClick:()=>t(null),title:a(`default`),type:`button`,children:(0,p.jsx)(u,{size:12})})]}),document.body)]})}var h=t.div`
    position: absolute;
    z-index: 40;
    top: calc(100% + 6px);
    left: 0;
    display: grid;
    grid-template-columns: repeat(6, 24px);
    gap: 4px;
    width: max-content;
    max-height: 236px;
    overflow-y: auto;
    padding: 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-float);
    ${c}
    transform-origin: top left;
`,g=t.button`
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: 1px solid ${({$active:e})=>e?`var(--border-color-focus)`:`transparent`};
    border-radius: 5px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.24)`:`transparent`};
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`;export{m as t};