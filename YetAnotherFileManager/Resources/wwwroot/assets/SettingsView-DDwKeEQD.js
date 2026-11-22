const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AttributionDialog-Bf9f3XFF.js","assets/dist-B10j17-y.js","assets/Icons-C2oT0N0q.js"])))=>i.map(i=>d[i]);
import{D as e,M as t,O as n,S as r,a as i,b as a,c as o,d as s,f as c,i as ee,k as te,l as ne,m as re,n as ie,o as ae,s as oe,t as se,u as ce,w as l,x as u}from"./dist-B10j17-y.js";import{E as le,O as ue,a as de,b as fe,g as pe,i as me,n as he,p as d,t as ge,u as _e,w as ve}from"./theme-CJqhrlwN.js";import{Dt as ye,Et as f,P as be,St as xe,W as Se,_t as Ce,at as we,bt as Te,dt as Ee,ft as De,ht as Oe,i as ke,lt as p,mt as Ae,pt as je,s as Me,ut as Ne,vt as Pe,z as Fe}from"./selectionMenu-CYZeyRnK.js";import{A as Ie,B as Le,D as Re,E as m,F as h,H as ze,I as Be,L as Ve,N as He,O as Ue,P as We,T as Ge,V as Ke,X as qe,Y as Je,Z as Ye,_ as Xe,_t as Ze,a as Qe,at as $e,et,f as tt,ft as nt,g as rt,gt as it,h as at,ht as ot,i as st,it as ct,k as lt,mt as ut,nt as dt,ot as ft,pt,q as mt,rt as ht,s as g,t as gt,tt as _t,vt,x as yt}from"./main-CduEWnjz.js";import{t as bt}from"./textSearch-COlYUG7X.js";import{F as xt,G as St,K as Ct,M as wt,N as Tt,T as Et,U as _,V as Dt,W as Ot,X as kt,Y as At,Z as jt,at as v,bt as Mt,ct as Nt,d as Pt,f as Ft,ht as It,it as Lt,j as Rt,k as y,l as zt,mt as Bt,n as Vt,nt as Ht,p as Ut,st as b,tt as Wt,ut as Gt,vt as Kt,x as qt,y as x}from"./Icons-C2oT0N0q.js";var S=t(te(),1),Jt=ue();async function Yt(){return l.available?(await l.request(`app.tags`)).tags:[]}async function Xt(e){return!l.available||!e?!1:(await l.request(`app.tags.delete`,{name:e})).ok}async function Zt(e,t){return!l.available||!e?[]:(await l.request(`app.tags.create`,{name:e,color:t})).tags}async function Qt(e,t){return!l.available||!e?!1:(await l.request(`app.tags.color`,{name:e,color:t})).ok}async function $t(e,t){return!l.available||!e||!t?!1:(await l.request(`app.tags.rename`,{oldName:e,newName:t})).ok}var C=r();function en({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=u(),[s,c]=(0,S.useState)(null),[ee,te]=(0,S.useState)(``),ne=(0,S.useRef)(null),re=(0,S.useRef)(null),ie=(0,S.useMemo)(()=>{let e=ee.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,ee]);(0,S.useEffect)(()=>{if(!s)return;re.current?.focus();let e=()=>c(null),t=t=>{let n=t.target;n instanceof Node&&ne.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e)}},[s]);let ae=()=>{if(s){c(null);return}let e=ne.current?.getBoundingClientRect();if(!e)return;te(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;c({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},oe=e=>{a(e),c(null)};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(w,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:ae,ref:ne,type:`button`,children:[(0,C.jsx)(tn,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,C.jsx)(nn,{children:`▾`})]}),s&&(0,Jt.createPortal)((0,C.jsxs)(rn,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,C.jsxs)(an,{children:[(0,C.jsx)(Nt,{size:12}),(0,C.jsx)(T,{onChange:e=>te(e.target.value),placeholder:o(`filter_fonts`),ref:re,value:ee})]}),(0,C.jsxs)(on,{children:[(0,C.jsxs)(sn,{$active:!e,"aria-selected":!e,onClick:()=>oe(null),role:`option`,type:`button`,children:[(0,C.jsxs)(ln,{children:[n,` `,(0,C.jsx)(dn,{children:o(`default_2`)})]}),!e&&(0,C.jsx)(Pt,{size:11})]}),ie.map(t=>(0,C.jsxs)(sn,{$active:e===t,"aria-selected":e===t,onClick:()=>oe(t),role:`option`,type:`button`,children:[(0,C.jsxs)(cn,{children:[(0,C.jsx)(ln,{children:t}),(0,C.jsx)(un,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,C.jsx)(Pt,{size:11})]},t)),ie.length===0&&(0,C.jsx)(E,{children:o(`no_matching_font`)})]})]}),document.body)]})}var w=n.button`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    min-width: 180px;
    max-width: 320px;
    height: 32px;
    padding: 0 9px 0 10px;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;
    transition: border-color 130ms ease, background 130ms ease;

    &:hover {
        border-color: var(--border-color-hover);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }

    &:disabled {
        opacity: 0.55;
        cursor: default;
    }
`,tn=n.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,nn=n.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,rn=n.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${Me}
`,an=n.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,T=n.input`
    flex: 1;
    min-width: 0;
    border: 0;
    background: transparent;
    color: var(--text-primary);
    font: inherit;
    font-size: 11.5px;
    outline: none;

    &::placeholder {
        color: var(--text-muted);
    }
`,on=n.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,sn=n.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 7px 9px;
    border: 0;
    border-radius: var(--radius-sm);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    text-align: left;
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-rgb), 0.12);
        color: var(--text-primary);
    }
`,cn=n.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,ln=n.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,un=n.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,dn=n.span`
    color: var(--text-muted);
    font-size: 10px;
`,E=n.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,fn=(0,S.lazy)(()=>gt(()=>import(`./AttributionDialog-Bf9f3XFF.js`).then(e=>({default:e.AttributionDialog})),__vite__mapDeps([0,1,2]))),pn=[{id:`goBack`,label:`back`,note:`goes_to_the_previous_folder_in_this_tab`},{id:`goForward`,label:`forward`,note:`goes_to_the_next_folder_in_this_tab`},{id:`goUp`,label:`up_one_level`,note:`opens_the_folder_that_contains_the_current_one`},{id:`home`,label:`home_folder`,note:`jumps_to_the_user_s_home_folder`},{id:`find`,label:`search`,note:`opens_the_floating_search_box_typing_a_letter_in_a_folder_opens_it_too`},{id:`location`,label:`edit_location`,note:`turns_the_breadcrumbs_into_an_editable_path`},{id:`closeTab`,label:`close_tab`,note:`closes_the_tab_that_is_open`},{id:`newTab`,label:`new_tab`,note:`opens_the_overview_in_a_new_tab`},{id:`reopenTab`,label:`reopen_closed_tab`,note:`brings_back_the_tab_you_closed_last_folder_and_all`},{id:`nextTab`,label:`next_tab`,note:`cycles_to_the_next_tab`},{id:`previousTab`,label:`previous_tab`,note:`cycles_to_the_previous_tab`},{id:`copy`,label:`copy`,note:`copies_the_selection_so_it_can_be_pasted_elsewhere`},{id:`duplicate`,label:`duplicate`,note:`makes_a_copy_of_the_selection_in_this_folder_with_a_new_name`},{id:`cut`,label:`cut`,note:`moves_the_selection_on_the_next_paste`},{id:`paste`,label:`paste`,note:`copies_or_moves_the_clipboard_s_files_into_the_current_folder`},{id:`undo`,label:`undo`,note:`undoes_the_last_file_operation_in_this_session`},{id:`redo`,label:`redo`,note:`repeats_the_operation_that_was_just_undone`},{id:`delete`,label:`move_to_the_recycle_bin`,note:`moves_the_selection_to_the_recycle_bin`},{id:`deletePermanently`,label:`delete_permanently`,note:`deletes_the_selection_without_the_recycle_bin`},{id:`rename`,label:`rename`,note:`renames_the_single_selected_entry`},{id:`selectAll`,label:`select_all`,note:`selects_every_entry_in_the_current_folder`},{id:`invertSelection`,label:`invert_selection`,note:`selects_everything_that_is_not_selected`},{id:`open`,label:`open`,note:`opens_the_selected_folder_or_file`},{id:`newFolder`,label:`new_folder`,note:`creates_a_folder_in_the_current_directory`},{id:`properties`,label:`properties`,note:`opens_the_shell_properties_sheet`},{id:`iconsView`,label:`icons_view`,note:`switches_the_folder_to_the_grid_view`},{id:`detailsView`,label:`details_view`,note:`switches_the_folder_to_the_list_view`},{id:`terminal`,label:`open_terminal`,note:`opens_a_terminal_in_the_current_folder`},{id:`hidden`,label:`show_hidden_files`,note:`toggles_ordinary_hidden_files_for_this_session`},{id:`splitView`,label:`split_view`,note:`shows_the_next_file_tab_beside_the_current_one`},{id:`openInNewTab`,label:`open_in_a_new_tab`,note:`hold_this_while_clicking_a_folder`}],mn=`globalHotkey`,hn=[...pn,{id:mn,label:`global_hotkey`,note:`brings_the_window_forward_from_anywhere_while_the_app_is_running_empty_means_no_global_shortcut`}],gn=`en`,_n=[{id:`system`,label:`follow_system`},{id:`light`,label:`light`},{id:`dark`,label:`dark`}],vn=[{id:`system`,label:`system`},{id:`24`,label:`k_24_hour`},{id:`12`,label:`k_12_hour`},{id:`custom`,label:`custom`}],yn=new Date(2026,10,5,16,8).getTime(),bn=`system`,D={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},O=[{id:`application`,label:`application`},{id:`share-access`,label:`share_access`},{id:`startup`,label:`startup`},{id:`fonts`,label:`fonts`},{id:`time`,label:`time_format`},{id:`updates`,label:`updates`},{id:`colors`,label:`colors`},{id:`background`,label:`background`},{id:`safety`,label:`safety`},{id:`tags`,label:`tags`},{id:`files-view`,label:`files_view`},{id:`shortcuts`,label:`shortcuts`},{id:`memory`,label:`memory`},{id:`overview`,label:`overview`},{id:`gallery`,label:`gallery`},{id:`icons`,label:`icons`},{id:`extension-icons`,label:`icons_by_extension`},{id:`folder-index`,label:`folder_index`},{id:`indexing`,label:`index_tasks`},{id:`files`,label:`files`}],xn={application:(0,C.jsx)(xt,{size:13}),share_access:(0,C.jsx)(Gt,{size:13}),startup:(0,C.jsx)(Lt,{size:13}),fonts:(0,C.jsx)(Tt,{size:13}),time_format:(0,C.jsx)(Ut,{size:13}),updates:(0,C.jsx)(b,{size:13}),colors:(0,C.jsx)(jt,{size:13}),background:(0,C.jsx)(Ht,{size:13}),safety:(0,C.jsx)(Ct,{size:13}),tags:(0,C.jsx)(It,{size:13}),files_view:(0,C.jsx)(St,{size:13}),shortcuts:(0,C.jsx)(_,{size:13}),memory:(0,C.jsx)(qt,{size:13}),overview:(0,C.jsx)(At,{size:13}),gallery:(0,C.jsx)(zt,{size:13}),icons:(0,C.jsx)(Dt,{size:13}),icons_by_extension:(0,C.jsx)(Rt,{size:13}),folder_index:(0,C.jsx)(kt,{size:13}),index_tasks:(0,C.jsx)(Bt,{size:13}),files:(0,C.jsx)(y,{size:13})},Sn={application:[`language`,`pickerWindowWidth`,`pickerWindowHeight`,`sharePortMode`,`sharePort`,`linkPathMode`,`restoreTabs`,`systemPropertiesSheet`],"share-access":[`shareAccessEnabled`,`shareApprovalMinutes`,`shareDenialSeconds`,`shareHttps`],startup:[`startHidden`],fonts:[`fonts`],time:[`timeFormat`,`timeFormatPattern`,`relativeTime`,`relativeTimeWindowMinutes`],colors:[`accentColor`,`secondaryColor`,`themeMode`,`themePresets`],background:[`backgroundSource`,`backgroundCustom`,`backgroundBlur`,`backgroundSaturation`,`backgroundBrightness`,`backgroundLooks`],safety:[`protectedPaths`,`deleteDelaySeconds`],"files-view":[`defaultView`,`showCheckboxes`,`openOnSingleClick`,`confirmDelete`,`previewVideoAudio`,`previewVideoAutoplay`,`trayAutoShow`,`conflictNameStyle`],shortcuts:[`shortcuts`,`globalHotkey`],overview:[`recentLimit`],gallery:[`galleryRoots`],icons:[`systemIcons`,`customFolderIcons`],"extension-icons":[`extensionIcons`],"folder-index":[`writeDirectoryIndex`,`directoryIndexBlacklist`]};function k({appInfo:e,focusSection:t,onSettingsChanged:n,find:r,onSearchMatches:te}){let l=u(),[ue,ye]=(0,S.useState)([]),[f,Se]=(0,S.useState)(null),[Me,Ie]=(0,S.useState)(!1),[m,h]=(0,S.useState)(null),He=re(de(m?.themeMode)),[Ye,at]=(0,S.useState)(``),[gt,St]=(0,S.useState)(`file`),[Ct,Tt]=(0,S.useState)(!1),[_,Dt]=(0,S.useState)(null),[At,jt]=(0,S.useState)(nt),[Nt,Ft]=(0,S.useState)(!1),[It,Rt]=(0,S.useState)(null),[y,zt]=(0,S.useState)(null),[Bt,Ht]=(0,S.useState)(null),[Ut,Gt]=(0,S.useState)(!1),[qt,w]=(0,S.useState)(null),[tn,nn]=(0,S.useState)(!1),[rn,an]=(0,S.useState)(null),[T,on]=(0,S.useState)(null),[sn,cn]=(0,S.useState)(``),[ln,un]=(0,S.useState)(!1),[dn,E]=(0,S.useState)([]),[pn,D]=(0,S.useState)(null),[k,A]=(0,S.useState)(!1),[Nn,N]=(0,S.useState)(null),[gr,_r]=(0,S.useState)(``),[vr,yr]=(0,S.useState)(Le),[br,xr]=(0,S.useState)(null),[Sr,Cr]=(0,S.useState)(null),[wr,Nr]=(0,S.useState)(``),[Pr,Fr]=(0,S.useState)(``),[Ir,Kr]=(0,S.useState)(null),[qr,vi]=(0,S.useState)({}),[q,xi]=(0,S.useState)(null),[J,Si]=(0,S.useState)(null),[Ci,wi]=(0,S.useState)(!1),[Ti,Ei]=(0,S.useState)(null),[Y,Di]=(0,S.useState)(null),[Oi,X]=(0,S.useState)(null),ki=(0,S.useRef)(!1),[Ai,ji]=(0,S.useState)(O[0].id),[Mi,Ni]=(0,S.useState)([]),[Pi,Fi]=(0,S.useState)(null),[Ii,Li]=(0,S.useState)(``),[Ri,zi]=(0,S.useState)(!1),[Bi,Vi]=(0,S.useState)(null),[Hi,Ui]=(0,S.useState)(null),[Wi,Gi]=(0,S.useState)(``),[Ki,qi]=(0,S.useState)(null),[Ji,Yi]=(0,S.useState)(null),[Xi,Zi]=(0,S.useState)(null),[Qi,$i]=(0,S.useState)(!1),[ea,ta]=(0,S.useState)(``),na=(0,S.useRef)(null),ra=(0,S.useRef)({}),Z=m?.defaultView??be(),ia=m?.themePresets??[],aa=e?.platform===`windows`,oa=aa?y?y.registered&&y.pathMatches:!1:m?.archiveHandler??p().archiveHandler,sa=y?.registered??m?.archiveHandler??p().archiveHandler,ca=aa?Bt?Bt.registered&&Bt.pathMatches:!1:m?.defaultFileManager??p().defaultFileManager,la=aa?At.registered&&At.pathMatches:m?.linksEnabled??p().linksEnabled;bt(na,r??null,`section`,te??(()=>void 0),[m]),(0,S.useEffect)(()=>{let e=na.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){ji(O[O.length-1].id);return}let n=t+110,r=O[0].id;for(let{id:e}of O){let t=ra.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}ji(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let Q=e=>t=>{ra.current[e]=t},ua=(0,S.useRef)(null),da=(0,S.useRef)(null),fa=(0,S.useRef)(0),pa=()=>{if(fa.current!==0)return;let e=()=>{let t=na.current;if(!t||!da.current){fa.current=0;return}let n=Math.min(da.current.top,t.scrollHeight-t.clientHeight),r=n-t.scrollTop;if(Math.abs(r)<.5){t.scrollTop=n,da.current=null,fa.current=0;return}let i=Math.min(Math.abs(r)*.2,140);t.scrollTop+=Math.sign(r)*i,fa.current=requestAnimationFrame(e)};fa.current=requestAnimationFrame(e)},ma=e=>{let t=na.current,n=ra.current[e];t&&n&&(da.current={index:O.findIndex(t=>t.id===e),top:t.scrollTop+n.getBoundingClientRect().top-t.getBoundingClientRect().top},ji(e),pa())};(0,S.useEffect)(()=>{let e=ua.current,t=e?.querySelector(`[data-section="${Ai}"]`);if(!e||!t)return;let n=e.getBoundingClientRect(),r=t.getBoundingClientRect();r.top<n.top?e.scrollTop+=r.top-n.top-6:r.bottom>n.bottom&&(e.scrollTop+=r.bottom-n.bottom+6)},[Ai]),(0,S.useEffect)(()=>{let e=na.current;if(!e)return;let t=()=>{da.current=null};return e.addEventListener(`wheel`,t,{passive:!0}),e.addEventListener(`pointerdown`,t,{passive:!0}),()=>{e.removeEventListener(`wheel`,t),e.removeEventListener(`pointerdown`,t),cancelAnimationFrame(fa.current)}},[]);let ha=(0,S.useRef)(0),ga=e=>{let t=Math.sign(e.deltaY);if(t===0)return;let n=e.deltaMode!==0||Math.abs(e.deltaY)>=50,r=performance.now();if(!n&&r<ha.current)return;ha.current=r+220;let i=da.current?.index??O.findIndex(e=>e.id===Ai),a=Math.min(Math.max((i<0?0:i)+t,0),O.length-1);a!==(i<0?0:i)&&ma(O[a].id)};(0,S.useEffect)(()=>{t&&ma(t)},[t]),(0,S.useEffect)(()=>{a().then(e=>ye(e.available),()=>ye([]))},[]),(0,S.useEffect)(()=>{Qe().then(Ni,()=>Ni([]))},[]),(0,S.useEffect)(()=>{ot().then(Yi,()=>Yi(null))},[]),(0,S.useEffect)(()=>{ee().then(Si,()=>void 0)},[]),(0,S.useEffect)(()=>{Fe().then(Se,()=>Se(null)),Ae().then(h,()=>h(null)),ut().then(jt,()=>jt(nt)),Ne().then(zt,()=>zt(null)),Ee().then(Ht,()=>Ht(null)),Yt().then(E,()=>E([]))},[]),(0,S.useEffect)(()=>{let e=()=>void pt().then(Dt,()=>Dt(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let $=async e=>{if(!m)return;let t={...m,...e};Object.keys(e).every(e=>t[e]===m[e])||(h(t),xe(),h(await Ce(t)),n())},_a=async e=>{if(!m)return;if(e===`startup`){await xo(`none`),await $({startHidden:!1});return}let t=Sn[e];if(!t?.length)return;let n=await je(),r=Object.fromEntries(t.map(e=>[e,n[e]]));await $(r)},va=e=>e?m?.backgroundLooks[e]??null:null,ya=e=>{let t=va(e);return{backgroundBlur:t?.blur??0,backgroundSaturation:t?.saturation??100,backgroundBrightness:t?.brightness??100}},ba=e=>{let t={...e.backgroundLooks},n=e.backgroundSource;return n?e.backgroundBlur===0&&e.backgroundSaturation===100&&e.backgroundBrightness===100?(delete t[n],t):(t[n]={blur:e.backgroundBlur,saturation:e.backgroundSaturation,brightness:e.backgroundBrightness},t):t},xa=e=>{m&&$({backgroundSource:e,backgroundLooks:ba(m),...ya(e)})},Sa=e=>{m&&$({...e,backgroundLooks:ba({...m,...e})})},Ca=()=>{if(!m)return;let e={...m.backgroundLooks};m.backgroundSource&&delete e[m.backgroundSource],$({backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,backgroundLooks:e})},wa=async e=>{let t=await Je(e);if(!t||!m)return;let n=m.backgroundCustom,r=`file:${t}`;await $({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:r,backgroundLooks:ba(m),...ya(r)})},Ta=async()=>{let e=ea.trim();if(!m||!fe(e))return;let t=m.backgroundCustom,n=`url:${e}`;ta(``),await $({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:n,backgroundLooks:ba(m),...ya(n)})},Ea=e=>{if(!m)return;let t=m.backgroundSource,n=t===`file:${e}`||t===`url:${e}`||t===e;$({backgroundCustom:m.backgroundCustom.filter(t=>t!==e),...n?{backgroundSource:null,backgroundLooks:ba(m),...ya(null)}:{}})},Da=async()=>{if(!m)return;let t=await qe();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;m.protectedPaths.includes(r)||await $({protectedPaths:[...m.protectedPaths,r]})},Oa=()=>{let e=wr.trim();m&&e&&!m.protectedPaths.includes(e)&&(Nr(``),$({protectedPaths:[...m.protectedPaths,e]}))},ka=()=>{if(!m||!br)return;let e=br.value.trim(),t=br.from;xr(null),e.length!==0&&e!==t&&$({protectedPaths:m.protectedPaths.map(n=>n===t?e:n)})},Aa=e=>{m&&$({protectedPaths:m.protectedPaths.filter(t=>t!==e)})},ja=async()=>{let e=await De();e.length>0&&await $({protectedPaths:e})},Ma=()=>{if(!m||!Sr)return;let e=Sr.value.trim(),t=Sr.from;Cr(null),e&&e!==t&&$({directoryIndexBlacklist:m.directoryIndexBlacklist.map(n=>n===t?e:n)})},Na=()=>{let e=Pr.trim();m&&e&&!m.directoryIndexBlacklist.includes(e)&&(Fr(``),$({directoryIndexBlacklist:[...m.directoryIndexBlacklist,e]}))},Pa=async()=>{if(!m)return;let t=await qe();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;m.directoryIndexBlacklist.includes(r)||await $({directoryIndexBlacklist:[...m.directoryIndexBlacklist,r]})},Fa=e=>{m&&$({directoryIndexBlacklist:m.directoryIndexBlacklist.filter(t=>t!==e)})},Ia=async()=>{let e=await je();$({directoryIndexBlacklist:e.directoryIndexBlacklist})},La=()=>{if(!m||Ir===null)return;let e=Ir.trim()||p().timeFormatPattern;Kr(null),e!==m.timeFormatPattern&&$({timeFormatPattern:e})},Ra=me(m?.accentColor,ge),za=me(m?.secondaryColor,he),Ba=(e,t)=>{m&&(ze(e),ze(t),$({accentColor:e,secondaryColor:t}))},Va=async()=>{wi(!0),Ei(null);try{Si(await ie())}catch{Ei(l(`could_not_check_for_updates`))}finally{wi(!1)}},Ha=async()=>{ki.current=!1,Ei(null),Di({phase:`changelog`,changelog:``,downloaded:0,total:0,percent:0});try{let e=await s();e.ok||Ua(e.error??``)}catch(e){Ua(e instanceof Error?e.message:String(e))}},Ua=e=>Di(t=>t&&{...t,phase:`error`,error:e}),Wa=()=>{Di(null),se().catch(e=>Ei(e instanceof Error?e.message:String(e)))},Ga=async()=>{Di(e=>e&&{...e,phase:`installing`});try{let e=await i();e.ok||Ua(e.error??l(`the_update_failed`))}catch(e){Ua(e instanceof Error?e.message:String(e))}};(0,S.useEffect)(()=>oe(e=>Di(t=>t&&{...t,phase:e.phase,downloaded:e.downloaded,total:e.total,percent:e.percent,error:e.error??t.error})),[]),(0,S.useEffect)(()=>ae(e=>Di(t=>t&&{...t,changelog:e.text})),[]),(0,S.useEffect)(()=>{Y?.phase!==`ready`||ki.current||(ki.current=!0,Ga())},[Y?.phase]);let Ka=async()=>{if(!m||!q)return;let e=q.name.trim()||`${q.accent.toUpperCase()} / ${q.secondary.toUpperCase()}`,t=[...m.themePresets,{name:e,accent:q.accent,secondary:q.secondary}];xi(null),await $({themePresets:t})},qa=async e=>{m&&await $({themePresets:m.themePresets.filter((t,n)=>n!==e)})},Ja=async()=>{let e=gr.trim();if(e&&!k){A(!0),N(null);try{E(await Zt(e,vr)),_r(``)}catch{N(l(`could_not_add_the_tag`))}finally{A(!1)}}},Ya=async(e,t)=>{E(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Qt(e,t)||N(l(`could_not_change_the_tag_s_color`))},Xa=async e=>{if(k)return;A(!0),N(null);let t=await Xt(e);E(await Yt()),t||N(`"${e}" is still used by a folder whose index could not be updated.`),A(!1)},Za=async()=>{let e=pn;if(!e||k)return;let t=e.value.trim();t.length===0||t===e.name?D(null):(A(!0),N(null),await $t(e.name,t)?(E(await Yt()),D(null)):N(`Could not rename "${e.name}".`),A(!1))},Qa=async e=>{let t=new Set(Z.columns??be().columns??[]);t.has(e)?t.delete(e):t.add(e);let n=Ge.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await $({defaultView:{...Z,columns:n}})},$a=async()=>{if(Nt)return;let e=!la;Ft(!0),Rt(null);try{let t=await it(e),r=t.registered&&t.pathMatches;jt(t),h(e=>e&&{...e,linksEnabled:r}),n(),r!==e&&Rt(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{Rt(`The request to Windows failed. Try again.`)}finally{Ft(!1)}},eo=async e=>{if(!Me){Ie(!0);try{Se(await we(e)),n()}finally{Ie(!1)}}},to=async()=>{if(tn||!m)return;let e=!ca;nn(!0),an(null);try{let t=await Pe(e);Ht(t);let r=aa?t.registered&&t.pathMatches:e;h(e=>e&&{...e,defaultFileManager:r}),n(),aa&&r!==e&&an(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{an(`The request to Windows failed. Try again.`)}finally{nn(!1)}},no=async()=>{if(!Ut){Gt(!0),w(null);try{let e=await Oe();zt(e);let t=e.registered&&e.pathMatches;h(e=>e&&{...e,archiveHandler:t}),n(),t||w(`Windows did not accept the archive registration. Try again.`)}catch{w(`The request to Windows failed. Try again.`)}finally{Gt(!1)}}},ro=async()=>{if(!Ut){Gt(!0),w(null);try{let e=await Te();zt(e),h(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&w(`The registration is still there. Try turning it off again.`)}catch{w(`The request to Windows failed. Try again.`)}finally{Gt(!1)}}},io=async(e,t)=>{if(!m)return;let n={...m.extensionIcons};t===null?delete n[e]:n[e]=t,await $({extensionIcons:n})};(0,S.useEffect)(()=>{Re().then(Vi,()=>void 0)},[]);let ao=ht(m?.shortcuts),oo=e=>e===mn?ct(m?.globalHotkey):ao[e],so=(0,S.useMemo)(()=>{let e=new Map;for(let{id:t}of hn)for(let n of t===mn?ct(m?.globalHotkey):ao[t]){let r=e.get(n)??[];r.push(t),e.set(n,r)}return e},[ao,m?.globalHotkey]),co=e=>{let t=new Set;for(let n of oo(e))for(let r of so.get(n)??[]){if(r===e)continue;let n=hn.find(e=>e.id===r);n&&t.add(l(n.label))}return[...t]},lo=(e,t)=>{$(e===mn?{globalHotkey:t.length>0?$e(t):null}:{shortcuts:{...m?.shortcuts,[e]:$e(t)}})},uo=(e,t)=>{let n=[...oo(e)];n.splice(t,1),lo(e,n)};(0,S.useEffect)(()=>{if(!T)return;let e=e=>[`control`,`alt`,`shift`,`meta`].includes(e.toLowerCase()),t=e=>{let t=[...oo(T.action)];T.index>=0?t[T.index]=e:t.includes(e)||t.push(e),on(null),cn(``),lo(T.action,t)},n=n=>{if(n.preventDefault(),n.stopPropagation(),n.key===`Escape`){on(null),cn(``);return}if(e(n.key)){T.action===`openInNewTab`?t(et(n)):cn(et(n));return}let r=et(n);r&&t(r)},r=t=>{e(t.key)&&cn(``)};return window.addEventListener(`keydown`,n,!0),window.addEventListener(`keyup`,r,!0),()=>{window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`keyup`,r,!0)}},[T,m]);let fo=async e=>{await $({recentLimit:Math.min(Math.max(e,0),50)})},po=(e,t)=>{let n=t??qr[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};vi(t=>({...t,[e]:void 0})),$(i)},mo=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;Fi(null),await $({sharePortMode:`custom`,sharePort:n}),await Ve(n,`custom`)},ho=async e=>{let t=e===`custom`,n=t?m?.sharePort??p().sharePort:null;await $({sharePortMode:t?`custom`:`random`,sharePort:n}),await Ve(n,t?`custom`:`random`)};(0,S.useEffect)(()=>{Ue().then(zi,()=>void 0)},[]);let go=async()=>{Ii.length!==0&&(zi(await Be(Ii)),Li(``))},_o=async()=>{zi(await Be(null))},vo=async()=>{let e=await Je([`.pfx`,`.p12`]);e&&(Ui(e),Gi(``),qi(null))},yo=async()=>{if(Hi)try{Vi(await lt(Hi,Wi.length>0?Wi:null)),Ui(null),Gi(``),qi(null)}catch(e){qi(e instanceof Error?e.message:String(e))}},bo=async()=>{try{Vi(await We()),qi(null)}catch(e){qi(e instanceof Error?e.message:String(e))}},xo=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;$i(!0),Zi(null);try{let e=await Ze(t);Yi(e),Zi(e.error),e.error||await $({startupMode:t})}finally{$i(!1)}},So=async e=>{await $({galleryRoots:e.length>0?e:null})},Co=async()=>{let e=await qe(),t=m?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await So([...t,e])},wo=async()=>{let e=Ye.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await io(e,gt),at(``))},To=async(e,t)=>{let n={...m?.fonts};t?n[e]=t:delete n[e],await $({fonts:n})};return(0,C.jsxs)(jn,{children:[(0,C.jsxs)(Mn,{ref:na,children:[(0,C.jsxs)(M,{ref:Q(`application`),children:[(0,C.jsx)(j,{note:`the_build_its_yafm_links_and_what_reopens_at_launch`,title:`application`,onReset:()=>X({id:`application`,label:`application`})}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(R,{children:l(`version`)}),(0,C.jsx)(H,{children:e?`v${e.version}`:`—`})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(R,{children:l(`platform`)}),(0,C.jsx)(H,{children:e?.platform??`—`})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`language`)}),(0,C.jsx)(B,{children:l(`the_language_the_interface_uses_english_is_the_default_the_system_option_follows_the_operating_system`)})]}),(0,C.jsx)(L,{children:(0,C.jsx)(An,{disabled:!m,onChange:e=>void $({language:e}),options:[bn,...ue.length>0?ue:[gn]],value:m?.language??gn})})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`picker_window_size`)}),(0,C.jsx)(B,{children:l(`the_size_the_folder_and_file_picker_opens_at_width_and_height_are_in_pixels`)})]}),(0,C.jsxs)(L,{children:[(0,C.jsx)(Mr,{inputMode:`numeric`,onBlur:e=>po(`width`,e.currentTarget.value),onChange:e=>vi(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:qr.width??String(m?.pickerWindowWidth??p().pickerWindowWidth)}),(0,C.jsx)(H,{children:`×`}),(0,C.jsx)(Mr,{inputMode:`numeric`,onBlur:e=>po(`height`,e.currentTarget.value),onChange:e=>vi(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:qr.height??String(m?.pickerWindowHeight??p().pickerWindowHeight)})]})]}),aa&&(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`windows_properties`)}),(0,C.jsx)(B,{children:l(`properties_opens_the_windows_page_with_its_security_and_details_tabs_instead_of_the_page_built_into_the_app`)})]}),(0,C.jsx)(L,{children:(0,C.jsx)(W,{$on:m?.systemPropertiesSheet??p().systemPropertiesSheet,disabled:!m,onClick:()=>void $({systemPropertiesSheet:!m?.systemPropertiesSheet}),type:`button`,children:(0,C.jsx)(G,{})})})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`web_server_port`)}),(0,C.jsx)(B,{children:l(`random_asks_the_operating_system_for_one_free_port_when_the_first_web_share_starts_and_every_web_share_keeps_using_it_custom_always_tries_the_port_below`)})]}),(0,C.jsx)(L,{children:(0,C.jsx)(mt,{disabled:!m,onChange:e=>void ho(e),options:[{value:`random`,label:l(`random`)},{value:`custom`,label:l(`custom_port`)}],value:m?.sharePortMode??p().sharePortMode,width:160})})]}),m?.sharePortMode===`custom`&&(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`custom_port`)}),(0,C.jsx)(B,{children:l(`a_number_from_1_to_65535_if_it_is_already_in_use_the_app_asks_for_a_free_port_instead`)})]}),(0,C.jsx)(L,{children:(0,C.jsx)(Mr,{inputMode:`numeric`,onBlur:e=>void mo(e.currentTarget.value),onChange:e=>Fi(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:Pi??(m?.sharePort?String(m.sharePort):``)})})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`link_paths`)}),(0,C.jsx)(B,{children:l(`relative_links_keep_working_when_the_link_and_its_target_move_together_absolute_links_always_store_the_full_target_path`)})]}),(0,C.jsx)(L,{children:(0,C.jsx)(mt,{disabled:!m,onChange:e=>void $({linkPathMode:e}),options:[{value:`relative`,label:l(`relative`)},{value:`absolute`,label:l(`absolute`)}],value:m?.linkPathMode??p().linkPathMode,width:160})})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`open_yafm_links`)}),(0,C.jsx)(B,{children:l(`registers_this_app_for_yafm_links_for_the_current_user_only_turning_it_on_writes_this_copy_s_path_starting_the_app_never_touches_the_registry`)}),At.registered&&!At.pathMatches&&(0,C.jsx)(V,{children:l(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:At.registeredPath??`?`})}),It&&(0,C.jsx)(V,{children:It})]}),(0,C.jsxs)(L,{children:[(0,C.jsx)(jr,{$on:la,children:l(la?`active`:`off`)}),(0,C.jsx)(W,{$on:la,disabled:Nt,onClick:()=>void $a(),title:l(la?`stop_opening_yafm_links`:`open_yafm_links_with_this_app`),type:`button`,children:(0,C.jsx)(G,{})})]})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`use_as_the_default_file_manager`)}),(0,C.jsx)(B,{children:l(`registers_this_app_for_folder_opens_on_this_account_explorer_stays_available_from_the_context_menu_on_linux_this_sets_the_inode_directory_default`)}),Bt?.registered&&!Bt.pathMatches&&(0,C.jsx)(V,{children:l(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:Bt.registeredPath??`?`})}),rn&&(0,C.jsx)(V,{children:rn})]}),(0,C.jsxs)(L,{children:[(0,C.jsx)(jr,{$on:ca,children:l(ca?`active`:`off`)}),(0,C.jsx)(W,{$on:ca,disabled:!m||tn,onClick:()=>void to(),title:l(ca?`stop_using_this_app_for_folders`:`use_this_app_for_folders`),type:`button`,children:(0,C.jsx)(G,{})})]})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`open_archives_with_this_app`)}),(0,C.jsx)(B,{children:l(`registers_this_app_for_zip_7z_rar_tar_and_the_other_archive_types_on_this_account_so_double_clicking_one_shows_it_as_a_folder_here_windows_may_still_ask_once_which_app_to_use`)}),(0,C.jsx)(B,{children:l(`when_this_is_off_opening_an_archive_uses_the_system_s_default_application_instead`)}),y?.registered&&!y.pathMatches&&(0,C.jsx)(V,{children:l(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:y.registeredPath??`?`})}),qt&&(0,C.jsx)(V,{children:qt})]}),(0,C.jsxs)(L,{children:[(0,C.jsx)(jr,{$on:oa,children:l(oa?`active`:`off`)}),(0,C.jsxs)(K,{disabled:!m||Ut||oa,onClick:()=>void no(),type:`button`,children:[(0,C.jsx)(Vt,{size:13}),l(`register`)]}),e?.platform===`windows`&&(0,C.jsxs)(K,{onClick:()=>void ce(`ms-settings:defaultapps`),type:`button`,children:[(0,C.jsx)(xt,{size:13}),l(`default_apps`)]}),(0,C.jsxs)(Ar,{disabled:!m||Ut||!sa,onClick:()=>void ro(),type:`button`,children:[(0,C.jsx)(x,{size:13}),l(`unregister`)]})]})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`reopen_the_tabs_that_were_open`)}),(0,C.jsx)(B,{children:l(`keeps_the_tabs_and_the_folder_each_one_shows_so_they_come_back_after_a_restart_a_folder_passed_on_the_command_line_takes_over_instead`)})]}),(0,C.jsx)(W,{$on:m?.restoreTabs??p().restoreTabs,disabled:!m,onClick:()=>void $({restoreTabs:!m?.restoreTabs}),type:`button`,children:(0,C.jsx)(G,{})})]})]})]}),(0,C.jsxs)(M,{ref:Q(`share-access`),children:[(0,C.jsx)(j,{note:`share_access_note`,title:`share_access`,onReset:()=>X({id:`share-access`,label:`share_access`})}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsxs)(z,{children:[(0,C.jsx)(R,{children:l(`share_access_require_approval`)}),(0,C.jsx)(g,{})]}),(0,C.jsx)(B,{children:l(`share_access_note`)})]}),(0,C.jsx)(W,{$on:m?.shareAccessEnabled??p().shareAccessEnabled,disabled:!m,onClick:()=>void $({shareAccessEnabled:!(m?.shareAccessEnabled??p().shareAccessEnabled)}),type:`button`,children:(0,C.jsx)(G,{})})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(I,{children:(0,C.jsx)(R,{children:l(`share_access_approval_minutes`)})}),(0,C.jsx)(L,{children:(0,C.jsx)(Tr,{max:1440,min:1,onChange:e=>void $({shareApprovalMinutes:Math.min(1440,Math.max(1,Number(e.target.value)||60))}),type:`number`,value:m?.shareApprovalMinutes??p().shareApprovalMinutes})})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(I,{children:(0,C.jsx)(R,{children:l(`share_access_denial_seconds`)})}),(0,C.jsx)(L,{children:(0,C.jsx)(Tr,{max:3600,min:1,onChange:e=>void $({shareDenialSeconds:Math.min(3600,Math.max(1,Number(e.target.value)||10))}),type:`number`,value:m?.shareDenialSeconds??p().shareDenialSeconds})})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(z,{children:(0,C.jsx)(R,{children:l(`password`)})}),(0,C.jsx)(B,{children:l(`share_access_password_note`)}),Ri&&(0,C.jsx)(B,{children:l(`share_access_password_is_set`)})]}),(0,C.jsxs)(L,{children:[(0,C.jsx)(Er,{autoComplete:`new-password`,onChange:e=>Li(e.target.value),placeholder:l(`password`),type:`password`,value:Ii}),(0,C.jsxs)(K,{disabled:Ii.length===0,onClick:()=>void go(),type:`button`,children:[(0,C.jsx)(Pt,{size:13}),l(`save`)]}),Ri&&(0,C.jsxs)(Ar,{onClick:()=>void _o(),type:`button`,children:[(0,C.jsx)(x,{size:13}),l(`clear`)]})]})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`share_access_https`)}),(0,C.jsx)(B,{children:l(`share_access_https_note`)})]}),(0,C.jsxs)(L,{children:[(0,C.jsx)(jr,{$on:m?.shareHttps??p().shareHttps,children:m?.shareHttps?l(`active`):l(`off`)}),(0,C.jsx)(W,{$on:m?.shareHttps??p().shareHttps,disabled:!m,onClick:()=>void $({shareHttps:!(m?.shareHttps??p().shareHttps)}),title:m?.shareHttps?l(`share_access_https_off`):l(`share_access_https_on`),type:`button`,children:(0,C.jsx)(G,{})})]})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`share_access_certificate`)}),(0,C.jsx)(B,{children:Bi?`${Bi.subject} · ${l(`share_access_expires`)}: ${new Date(Bi.expiresAt).toLocaleString()}`:l(`share_access_certificate_self_signed`)}),Bi&&(0,C.jsx)(B,{children:Bi.selfSigned?l(`share_access_certificate_self_signed`):l(`share_access_certificate_imported`)}),Ki&&(0,C.jsx)(V,{children:Ki})]}),(0,C.jsxs)(L,{children:[(0,C.jsx)(U,{onClick:()=>void vo(),type:`button`,children:l(`share_access_import_certificate`)}),(0,C.jsx)(U,{onClick:()=>void bo(),type:`button`,children:l(`share_access_reset_certificate`)})]})]}),Hi&&(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`password`)}),(0,C.jsx)(B,{children:Hi})]}),(0,C.jsxs)(L,{children:[(0,C.jsx)(Er,{autoComplete:`off`,onChange:e=>Gi(e.target.value),placeholder:l(`password`),type:`password`,value:Wi}),(0,C.jsx)(U,{onClick:()=>void yo(),type:`button`,children:l(`ok`)}),(0,C.jsx)(U,{onClick:()=>Ui(null),type:`button`,children:l(`cancel`)})]})]}),(0,C.jsx)(F,{children:(0,C.jsxs)(I,{children:[(0,C.jsx)(z,{children:(0,C.jsx)(R,{children:l(`devices`)})}),(0,C.jsx)(B,{children:l(`share_access_devices_note`)})]})}),(0,C.jsx)(Cn,{approvalMinutes:m?.shareApprovalMinutes??p().shareApprovalMinutes,denialSeconds:m?.shareDenialSeconds??p().shareDenialSeconds})]})]}),(0,C.jsxs)(M,{ref:Q(`startup`),children:[(0,C.jsx)(j,{note:`how_the_app_joins_your_login_session_and_whether_it_opens_quietly_in_the_tray`,title:`startup`,onReset:()=>X({id:`startup`,label:`startup`})}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`start_with_the_computer`)}),(0,C.jsx)(B,{children:l(`a_shortcut_uses_the_startup_folder_or_xdg_autostart_a_task_uses_task_scheduler_or_a_systemd_user_service_which_starts_earlier_and_is_usually_faster`)}),Xi&&(0,C.jsx)(V,{children:Xi}),Ji&&!Ji.supported&&(0,C.jsx)(V,{children:l(`this_platform_cannot_create_a_per_user_startup_entry`)})]}),(0,C.jsx)(L,{children:(0,C.jsx)(mt,{disabled:!m||Qi||Ji!==null&&!Ji.supported,onChange:e=>void xo(e),options:[{value:`none`,label:l(`none`)},{value:`shortcut`,label:l(`shortcut`)},{value:`task`,label:l(`scheduled_task`)}],value:Ji?.mode??m?.startupMode??p().startupMode,width:170})})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`start_hidden_in_the_tray`)}),(0,C.jsx)(B,{children:l(`launch_straight_to_the_tray_icon_instead_of_showing_the_window_the_tray_menu_opens_it_again`)})]}),(0,C.jsx)(L,{children:(0,C.jsx)(W,{$on:m?.startHidden??p().startHidden,disabled:!m,onClick:()=>void $({startHidden:!m?.startHidden}),type:`button`,children:(0,C.jsx)(G,{})})})]})]})]}),(0,C.jsxs)(M,{ref:Q(`fonts`),children:[(0,C.jsx)(j,{note:`choose_the_font_each_part_of_the_interface_uses_every_font_installed_on_this_system_is_listed_each_one_drawn_in_its_own_face`,title:`fonts`,onReset:()=>X({id:`fonts`,label:`fonts`})}),(0,C.jsxs)(P,{children:[st.map(e=>(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(e.label)}),(0,C.jsx)(B,{children:l(`falls_back_to_font_until_another_family_is_chosen`,{font:l(e.fallback)})})]}),(0,C.jsx)(L,{children:(0,C.jsx)(en,{defaultLabel:l(e.fallback),disabled:!m,fonts:Mi,onChange:t=>void To(e.id,t),sample:e.sample,value:m?.fonts?.[e.id]??null})})]},e.id)),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`reset`)}),(0,C.jsx)(B,{children:l(`back_to_the_app_s_built_in_font_for_every_role`)})]}),(0,C.jsx)(L,{children:(0,C.jsxs)(K,{onClick:()=>void $({fonts:{}}),type:`button`,children:[(0,C.jsx)(b,{size:13}),l(`reset`)]})})]})]})]}),(0,C.jsxs)(M,{ref:Q(`time`),children:[(0,C.jsx)(j,{note:`every_timestamp_in_the_interface_uses_this_format_follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`,title:`time_format`,onReset:()=>X({id:`time`,label:`time_format`})}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(Fn,{children:[(0,C.jsxs)(In,{children:[(0,C.jsx)(R,{children:l(`format`)}),(0,C.jsx)(B,{children:l(`follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`)})]}),(0,C.jsx)(ii,{children:vn.map(e=>(0,C.jsx)(ai,{$active:(m?.timeFormat??p().timeFormat)===e.id,onClick:()=>void $({timeFormat:e.id}),type:`button`,children:l(e.label)},e.id))}),(m?.timeFormat??p().timeFormat)===`custom`&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(oi,{"aria-label":l(`pattern`),onBlur:La,onChange:e=>Kr(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),La()):e.key===`Escape`&&Kr(null)},spellCheck:!1,value:Ir??m?.timeFormatPattern??p().timeFormatPattern}),(0,C.jsx)(B,{children:l(`tokens_yyyy_year_mm_month_dd_day_hh_24_hour_mm_minute_ss_second_hh_12_hour_and_a_am_pm_other_characters_are_copied`)})]}),(0,C.jsxs)(si,{children:[(0,C.jsx)(`span`,{children:l(`preview`)}),(0,C.jsx)(`code`,{children:pe(yn,m?.timeFormat,Ir??m?.timeFormatPattern)})]})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`relative_times`)}),(0,C.jsx)(B,{children:l(`shows_recent_timestamps_as_seconds_and_minutes_ago_and_keeps_them_counting`)})]}),(0,C.jsxs)(L,{children:[(0,C.jsx)(jr,{$on:m?.relativeTime??p().relativeTime,children:m?.relativeTime??p().relativeTime?l(`active`):l(`off`)}),(0,C.jsx)(W,{$on:m?.relativeTime??p().relativeTime,disabled:!m,onClick:()=>void $({relativeTime:!(m?.relativeTime??p().relativeTime)}),title:l(`show_recent_timestamps_as_seconds_and_minutes_ago`),type:`button`,children:(0,C.jsx)(G,{})})]})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`switch_to_the_full_time_after`)}),(0,C.jsx)(B,{children:l(`older_timestamps_use_the_format_above_instead_of_a_relative_one`)})]}),(0,C.jsxs)(L,{children:[(0,C.jsx)(Br,{disabled:!(m?.relativeTime??p().relativeTime),max:1440,min:1,onChange:e=>void $({relativeTimeWindowMinutes:Number(e.target.value)}),step:1,type:`range`,value:m?.relativeTimeWindowMinutes??p().relativeTimeWindowMinutes}),(0,C.jsxs)(H,{children:[m?.relativeTimeWindowMinutes??p().relativeTimeWindowMinutes,` min`]})]})]})]})]}),(0,C.jsxs)(M,{ref:Q(`updates`),children:[(0,C.jsx)(j,{note:`the_running_build_and_the_newest_one_published`,title:`updates`}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(R,{children:l(`current_version`)}),(0,C.jsx)(H,{children:e?`v${e.version}`:`—`})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(R,{children:l(`latest_version`)}),(0,C.jsx)(H,{children:J?`v${J.latest}`:`—`})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:J?J.available?l(`version_version_is_available`,{version:J.latest}):l(`you_are_on_the_latest_version`):l(`not_checked_yet`)}),(0,C.jsx)(B,{children:J?.available?l(`the_installer_downloads_installs_itself_and_closes_the_app`):l(`reads_the_version_file_the_release_workflow_publishes`)})]}),(0,C.jsxs)(L,{children:[J?.available&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(K,{onClick:()=>void ne(),type:`button`,children:[(0,C.jsx)(Ot,{size:13}),l(`open_release_page`)]}),aa&&(0,C.jsxs)(K,{disabled:Y!==null,onClick:()=>void Ha(),type:`button`,children:[(0,C.jsx)(Et,{size:13}),l(`download_and_install`)]})]}),(0,C.jsxs)(K,{disabled:Ci||Y!==null,onClick:()=>void Va(),type:`button`,children:[(0,C.jsx)(b,{size:13}),l(Ci?`checking`:`check_for_updates`)]}),(0,C.jsxs)(K,{onClick:()=>void o(),type:`button`,children:[(0,C.jsx)(wt,{size:13}),l(`open_log_folder`)]})]})]}),Ti&&(0,C.jsx)(F,{children:(0,C.jsx)(V,{children:Ti})})]})]}),(0,C.jsxs)(M,{ref:Q(`colors`),children:[(0,C.jsx)(j,{note:`the_accent_and_highlight_colours_the_whole_window_uses`,title:`colors`,onReset:()=>X({id:`colors`,label:`colors`})}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(Fn,{children:[(0,C.jsxs)(In,{children:[(0,C.jsx)(R,{children:l(`theme`)}),(0,C.jsx)(B,{children:l(`follow_the_operating_system_or_always_use_the_light_or_dark_palette`)})]}),(0,C.jsx)(ii,{children:_n.map(e=>(0,C.jsx)(ai,{$active:(m?.themeMode??p().themeMode)===e.id,onClick:()=>void $({themeMode:e.id}),type:`button`,children:l(e.label)},e.id))})]}),(0,C.jsxs)(Fn,{children:[(0,C.jsxs)(In,{children:[(0,C.jsx)(R,{children:l(`presets`)}),(0,C.jsx)(B,{children:l(`one_click_changes_the_accent_and_the_highlight_together`)})]}),(0,C.jsxs)(Ln,{children:[yt.map(e=>(0,C.jsxs)(Rn,{$on:Ra.toLowerCase()===e.accent&&za.toLowerCase()===e.secondary,onClick:()=>Ba(e.accent,e.secondary),title:`${l(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,C.jsxs)(Gn,{children:[(0,C.jsx)(`i`,{style:{background:e.accent}}),(0,C.jsx)(`i`,{style:{background:e.secondary}})]}),(0,C.jsx)(zn,{children:l(e.name)})]},e.name)),ia.map((e,t)=>(0,C.jsxs)(Bn,{children:[(0,C.jsxs)(Rn,{$on:Ra.toLowerCase()===e.accent.toLowerCase()&&za.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>Ba(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,C.jsxs)(Gn,{children:[(0,C.jsx)(`i`,{style:{background:e.accent}}),(0,C.jsx)(`i`,{style:{background:e.secondary}})]}),(0,C.jsx)(zn,{children:e.name})]}),(0,C.jsx)(Vn,{onClick:()=>void qa(t),title:l(`remove_preset`),type:`button`,children:(0,C.jsx)(x,{size:9})})]},`${e.name}-${t}`)),q?(0,C.jsxs)(Un,{children:[(0,C.jsxs)(Gn,{children:[(0,C.jsx)(`i`,{style:{background:q.accent}}),(0,C.jsx)(`i`,{style:{background:q.secondary}})]}),(0,C.jsx)(Wn,{autoFocus:!0,maxLength:24,onChange:e=>xi({...q,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Ka()):e.key===`Escape`&&(e.preventDefault(),xi(null))},placeholder:l(`preset_name`),spellCheck:!1,value:q.name}),(0,C.jsxs)(U,{onClick:()=>void Ka(),type:`button`,children:[(0,C.jsx)(Pt,{size:13}),l(`save`)]}),(0,C.jsxs)(U,{onClick:()=>xi(null),type:`button`,children:[(0,C.jsx)(x,{size:13}),l(`cancel`)]})]}):(0,C.jsxs)(Hn,{disabled:!m,onClick:()=>xi({name:``,accent:Ra,secondary:za}),title:l(`save_the_current_colours_as_a_preset`),type:`button`,children:[(0,C.jsx)(v,{size:12}),l(`add_preset`)]})]})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`accent_color`)}),(0,C.jsx)(B,{children:l(`buttons_selections_focus_rings_and_active_navigation`)})]}),(0,C.jsxs)(L,{children:[(0,C.jsx)(Ke,{ariaLabel:l(`accent_color`),disabled:!m,variant:`well`,value:Ra,onChange:e=>void $({accentColor:e})}),(0,C.jsx)(kr,{children:Ra.toUpperCase()})]})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`secondary_color`)}),(0,C.jsx)(B,{children:l(`gradients_highlights_and_the_second_end_of_the_accent_ramp`)})]}),(0,C.jsxs)(L,{children:[(0,C.jsx)(Ke,{ariaLabel:l(`secondary_color`),disabled:!m,variant:`well`,value:za,onChange:e=>void $({secondaryColor:e})}),(0,C.jsx)(kr,{children:za.toUpperCase()})]})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`reset_colors`)}),(0,C.jsx)(B,{children:l(`returns_the_interface_to_the_default_blue_and_indigo_theme`)})]}),(0,C.jsx)(L,{children:(0,C.jsxs)(U,{disabled:!m,onClick:()=>{ze(Ra),ze(za),$({accentColor:null,secondaryColor:null})},type:`button`,children:[(0,C.jsx)(b,{size:13}),l(`reset`)]})})]})]})]}),(0,C.jsxs)(M,{ref:Q(`background`),children:[(0,C.jsx)(j,{note:`a_picture_or_video_behind_the_whole_window_from_the_title_bar_to_the_bottom`,title:`background`,onReset:()=>X({id:`background`,label:`background`})}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(Fn,{children:[(0,C.jsxs)(In,{children:[(0,C.jsx)(R,{children:l(`wallpaper`)}),(0,C.jsx)(B,{children:l(`none_keeps_the_normal_dark_surface_every_built_in_concept_comes_in_the_app_s_colour_presets_your_own_pictures_sv_gs_and_videos_are_kept_in_the_gallery`)})]}),(0,C.jsx)(Wr,{children:(0,C.jsx)(Gr,{$active:!m?.backgroundSource,onClick:()=>xa(null),title:l(`none`),type:`button`,children:(0,C.jsx)(Xr,{children:l(`none`)})})}),(0,C.jsxs)(Vr,{children:[rt.map(e=>(0,C.jsxs)(Hr,{children:[(0,C.jsx)(Ur,{children:l(e.name)}),(0,C.jsx)(Wr,{children:e.variants.map(t=>(0,C.jsx)(Gr,{$active:m?.backgroundSource===t.id,onClick:()=>xa(t.id),title:`${l(e.name)} · ${l(t.preset)}`,type:`button`,children:(0,C.jsx)(`img`,{alt:``,src:He===`light`?t.lightUrl:t.url})},t.id))})]},e.id)),(0,C.jsxs)(Hr,{children:[(0,C.jsx)(Ur,{children:l(`motion`)}),(0,C.jsx)(Wr,{children:Xe.map(e=>(0,C.jsxs)(Gr,{$active:m?.backgroundSource===e.id,onClick:()=>xa(e.id),title:l(e.name),type:`button`,children:[(0,C.jsx)(`img`,{alt:``,src:e.poster}),(0,C.jsx)(Jr,{children:(0,C.jsx)(Mt,{size:11})})]},e.id))})]}),(0,C.jsxs)(Hr,{children:[(0,C.jsx)(Ur,{children:l(`custom`)}),(0,C.jsxs)(Wr,{children:[(m?.backgroundCustom??[]).map(e=>(0,C.jsx)(kn,{active:m?.backgroundSource===`file:${e}`||m?.backgroundSource===`url:${e}`||m?.backgroundSource===e,onRemove:()=>Ea(e),onSelect:()=>xa(fe(e)?`url:${e}`:`file:${e}`),path:e},e)),(0,C.jsxs)(Yr,{onClick:()=>void wa([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,C.jsx)(v,{size:12}),l(`image_2`)]}),(0,C.jsxs)(Yr,{onClick:()=>void wa([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,C.jsx)(v,{size:12}),l(`video`)]})]})]})]})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`image_or_video_url`)}),(0,C.jsx)(B,{children:l(`paste_a_direct_http_s_link_the_picture_or_video_is_loaded_from_the_network_each_time_the_window_starts`)})]}),(0,C.jsxs)(L,{children:[(0,C.jsx)(Mr,{onChange:e=>ta(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Ta()},placeholder:`https://…`,value:ea}),(0,C.jsxs)(U,{disabled:!fe(ea),onClick:()=>void Ta(),type:`button`,children:[(0,C.jsx)(v,{size:13}),l(`add`)]})]})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(R,{children:l(`blur`)}),(0,C.jsxs)(L,{children:[(0,C.jsx)(Br,{max:40,min:0,onChange:e=>Sa({backgroundBlur:Number(e.target.value)}),type:`range`,value:m?.backgroundBlur??p().backgroundBlur}),(0,C.jsxs)(H,{children:[m?.backgroundBlur??p().backgroundBlur,`px`]})]})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(R,{children:l(`saturation`)}),(0,C.jsxs)(L,{children:[(0,C.jsx)(Br,{max:200,min:0,onChange:e=>Sa({backgroundSaturation:Number(e.target.value)}),type:`range`,value:m?.backgroundSaturation??p().backgroundSaturation}),(0,C.jsxs)(H,{children:[m?.backgroundSaturation??p().backgroundSaturation,`%`]})]})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(R,{children:l(`brightness`)}),(0,C.jsxs)(L,{children:[(0,C.jsx)(Br,{max:150,min:40,onChange:e=>Sa({backgroundBrightness:Number(e.target.value)}),type:`range`,value:m?.backgroundBrightness??p().backgroundBrightness}),(0,C.jsxs)(H,{children:[m?.backgroundBrightness??p().backgroundBrightness,`%`]})]})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`reset_the_look`)}),(0,C.jsx)(B,{children:l(`returns_this_background_to_the_default_blur_saturation_and_brightness`)})]}),(0,C.jsx)(L,{children:(0,C.jsxs)(U,{disabled:!m||m.backgroundBlur===0&&m.backgroundSaturation===100&&m.backgroundBrightness===100&&!va(m.backgroundSource),onClick:Ca,type:`button`,children:[(0,C.jsx)(b,{size:13}),l(`reset`)]})})]})]})]}),(0,C.jsxs)(M,{ref:Q(`safety`),children:[(0,C.jsx)(j,{note:`deleting_moving_renaming_or_writing_to_a_protected_folder_anything_inside_a_recursive_entry_or_a_folder_that_contains_one_always_waits_for_an_explicit_confirmation`,title:`safety`,onReset:()=>X({id:`safety`,label:`safety`})}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(Fn,{children:[(0,C.jsxs)(In,{children:[(0,C.jsx)(R,{children:l(`protected_folders`)}),(0,C.jsx)(B,{children:l(`rules_are_full_path_globs_stays_inside_one_name_crosses_folders_and_matches_one_character_a_rule_without_a_folder_part_such_as_log_applies_to_that_name_at_any_depth_vars_vars_and_are_expanded_first`)})]}),(0,C.jsx)(Zr,{children:(m?.protectedPaths??[]).map(e=>(0,C.jsxs)(Qr,{children:[(0,C.jsx)($r,{"aria-label":l(`protected_path`),onBlur:ka,onChange:t=>xr({from:e,value:t.target.value}),onFocus:()=>xr({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),ka()):e.key===`Escape`&&xr(null)},spellCheck:!1,value:br?.from===e?br.value:e}),(0,C.jsx)(ei,{onClick:()=>Aa(e),title:l(`remove`),type:`button`,children:(0,C.jsx)(x,{size:10})})]},e))}),(0,C.jsxs)(ni,{children:[(0,C.jsx)(ri,{"aria-label":l(`new_protected_rule`),onChange:e=>Nr(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Oa())},placeholder:`*.log`,spellCheck:!1,value:wr}),(0,C.jsxs)(U,{onClick:Oa,type:`button`,children:[(0,C.jsx)(v,{size:13}),l(`add_the_rule`)]})]}),(0,C.jsxs)(ti,{children:[(0,C.jsxs)(U,{onClick:()=>void ja(),type:`button`,children:[(0,C.jsx)(b,{size:13}),l(`restore_defaults`)]}),(0,C.jsxs)(U,{onClick:()=>void Da(),type:`button`,children:[(0,C.jsx)(wt,{size:13}),l(`add_folder_2`)]})]})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`confirmation_delay`)}),(0,C.jsx)(B,{children:l(`the_delete_button_in_the_protected_folder_dialog_stays_disabled_for_this_many_seconds_at_least_2`)})]}),(0,C.jsxs)(L,{children:[(0,C.jsx)(Br,{max:30,min:2,onChange:e=>void $({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:m?.deleteDelaySeconds??p().deleteDelaySeconds}),(0,C.jsxs)(H,{children:[m?.deleteDelaySeconds??p().deleteDelaySeconds,`s`]})]})]})]})]}),(0,C.jsxs)(M,{ref:Q(`tags`),children:[(0,C.jsx)(j,{note:`every_tag_in_the_catalogue_add_rename_recolour_or_remove_them_here`,title:`tags`}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsxs)(z,{children:[(0,C.jsx)(Ke,{ariaLabel:l(`color_of_the_new_tag`),value:vr,onChange:yr}),(0,C.jsx)(Mr,{onChange:e=>_r(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ja())},placeholder:l(`new_tag`),spellCheck:!1,value:gr})]}),(0,C.jsx)(B,{children:l(`add_a_tag_here_it_is_available_in_every_folder`)})]}),(0,C.jsx)(L,{children:(0,C.jsxs)(U,{disabled:k||gr.trim().length===0,onClick:()=>void Ja(),type:`button`,children:[(0,C.jsx)(v,{size:13}),l(`add`)]})})]}),Nn&&(0,C.jsx)(F,{children:(0,C.jsx)(V,{children:Nn})}),dn.length===0&&(0,C.jsx)(F,{children:(0,C.jsx)(B,{children:l(`no_tags_yet_add_one_below_it_is_available_in_every_folder`)})}),dn.map(e=>(0,C.jsx)(F,{children:pn?.name===e.name?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(I,{children:[(0,C.jsxs)(z,{children:[(0,C.jsx)(Ke,{ariaLabel:l(`color_of_tag`,{tag:e.name}),disabled:k,title:l(`change_this_tag_s_color`),value:e.color??`#64748b`,onChange:t=>void Ya(e.name,t)}),(0,C.jsx)(Or,{autoFocus:!0,disabled:k,onChange:t=>D({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Za()):e.key===`Escape`&&(e.preventDefault(),D(null))},value:pn.value})]}),(0,C.jsx)(B,{children:l(`press_enter_to_save_escape_to_cancel`)})]}),(0,C.jsxs)(L,{children:[(0,C.jsxs)(U,{disabled:k,onClick:()=>void Za(),type:`button`,children:[(0,C.jsx)(Pt,{size:13}),l(`save`)]}),(0,C.jsxs)(U,{disabled:k,onClick:()=>D(null),type:`button`,children:[(0,C.jsx)(x,{size:13}),l(`cancel`)]})]})]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(I,{children:[(0,C.jsxs)(z,{children:[(0,C.jsx)(Ke,{ariaLabel:l(`color_of_tag`,{tag:e.name}),disabled:k,title:l(`change_this_tag_s_color`),value:e.color??`#64748b`,onChange:t=>void Ya(e.name,t)}),(0,C.jsx)(R,{children:e.name})]}),(0,C.jsx)(B,{children:ve(l,e.folders,`used_in_1_folder_renaming_or_removing_it_updates_that_folder_s_index`,`used_in_count_folders_renaming_or_removing_it_updates_those_folders_indexes`)})]}),(0,C.jsxs)(L,{children:[(0,C.jsxs)(U,{disabled:k,onClick:()=>D({name:e.name,value:e.name}),type:`button`,children:[(0,C.jsx)(Wt,{size:13}),l(`edit`)]}),(0,C.jsxs)(Ar,{disabled:k,onClick:()=>void Xa(e.name),type:`button`,children:[(0,C.jsx)(Kt,{size:13}),l(`remove`)]})]})]})},e.name))]})]}),(0,C.jsxs)(M,{ref:Q(`files-view`),children:[(0,C.jsx)(j,{note:`the_defaults_every_folder_starts_with_a_folder_can_still_override_them`,title:`files_view`,global:!0,onReset:()=>X({id:`files-view`,label:`files_view`})}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`default_view`)}),(0,C.jsx)(B,{children:l(`the_mode_every_folder_starts_with_a_folder_can_still_remember_its_own_list_or_grid_mode_from_the_title_bar`)})]}),(0,C.jsx)(L,{children:(0,C.jsxs)(Rr,{children:[(0,C.jsx)(zr,{$on:Z.mode===`list`,onClick:()=>void $({defaultView:{...Z,mode:`list`}}),type:`button`,children:l(`list`)}),(0,C.jsx)(zr,{$on:Z.mode===`grid`,onClick:()=>void $({defaultView:{...Z,mode:`grid`}}),type:`button`,children:l(`grid`)})]})})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`list_icon_size`)}),(0,C.jsx)(B,{children:l(`the_icon_in_the_list_rows`)})]}),(0,C.jsxs)(L,{children:[(0,C.jsx)(Br,{max:48,min:16,onChange:e=>void $({defaultView:{...Z,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Z.iconSize}),(0,C.jsxs)(H,{children:[Z.iconSize,`px`]})]})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`grid_size`)}),(0,C.jsx)(B,{children:l(`the_height_of_a_grid_tile_the_icon_inside_follows_it`)})]}),(0,C.jsxs)(L,{children:[(0,C.jsx)(Br,{max:260,min:100,onChange:e=>void $({defaultView:{...Z,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Z.gridSize}),(0,C.jsxs)(H,{children:[Z.gridSize,`px`]})]})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsxs)(z,{children:[(0,C.jsx)(R,{children:l(`selection_checkboxes`)}),(0,C.jsx)(g,{})]}),(0,C.jsx)(B,{children:l(`show_a_checkbox_before_every_name_the_way_explorer_does_checked_entries_can_be_copied_cut_or_deleted_together`)})]}),(0,C.jsx)(W,{$on:m?.showCheckboxes??p().showCheckboxes,disabled:!m,onClick:()=>void $({showCheckboxes:!(m?.showCheckboxes??p().showCheckboxes)}),type:`button`,children:(0,C.jsx)(G,{})})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsxs)(z,{children:[(0,C.jsx)(R,{children:l(`open_with_a_single_click`)}),(0,C.jsx)(g,{})]}),(0,C.jsx)(B,{children:l(`off_means_double_click_like_explorer_s_default_the_checkbox_still_only_selects_so_a_click_on_it_never_opens_the_entry`)})]}),(0,C.jsx)(W,{$on:m?.openOnSingleClick??p().openOnSingleClick,disabled:!m,onClick:()=>void $({openOnSingleClick:!(m?.openOnSingleClick??p().openOnSingleClick)}),type:`button`,children:(0,C.jsx)(G,{})})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsxs)(z,{children:[(0,C.jsx)(R,{children:l(`open_the_file_tray_while_dragging`)}),(0,C.jsx)(g,{})]}),(0,C.jsx)(B,{children:l(`the_tray_appears_when_a_drag_starts_and_closes_again_if_it_is_still_empty_off_leaves_it_to_the_title_bar_button`)})]}),(0,C.jsx)(W,{$on:m?.trayAutoShow??p().trayAutoShow,disabled:!m,onClick:()=>void $({trayAutoShow:!(m?.trayAutoShow??p().trayAutoShow)}),type:`button`,children:(0,C.jsx)(G,{})})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsxs)(z,{children:[(0,C.jsx)(R,{children:l(`confirm_before_deleting`)}),(0,C.jsx)(g,{})]}),(0,C.jsx)(B,{children:l(`asks_before_moving_items_to_the_recycle_bin_shift_del_always_asks_because_that_deletes_permanently`)})]}),(0,C.jsx)(W,{$on:m?.confirmDelete??p().confirmDelete,disabled:!m,onClick:()=>void $({confirmDelete:!(m?.confirmDelete??p().confirmDelete)}),type:`button`,children:(0,C.jsx)(G,{})})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsxs)(z,{children:[(0,C.jsx)(R,{children:l(`automatic_rename_suffix`)}),(0,C.jsx)(g,{})]}),(0,C.jsx)(B,{children:l(`the_suffix_added_when_a_copy_or_a_new_item_would_have_the_same_name`)})]}),(0,C.jsx)(L,{children:(0,C.jsx)(mt,{disabled:!m,onChange:e=>void $({conflictNameStyle:e}),options:[{value:`space_parentheses`,label:`Test (1).txt`},{value:`underscore`,label:`Test_1.txt`},{value:`dot`,label:`Test.1.txt`}],value:m?.conflictNameStyle??p().conflictNameStyle,width:160})})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsxs)(z,{children:[(0,C.jsx)(R,{children:l(`play_audio_in_video_previews`)}),(0,C.jsx)(g,{})]}),(0,C.jsx)(B,{children:l(`video_previews_play_muted_by_default_turn_this_on_to_hear_their_audio_while_the_details_panel_is_open`)})]}),(0,C.jsx)(W,{$on:m?.previewVideoAudio??p().previewVideoAudio,disabled:!m,onClick:()=>void $({previewVideoAudio:!(m?.previewVideoAudio??p().previewVideoAudio)}),type:`button`,children:(0,C.jsx)(G,{})})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsxs)(z,{children:[(0,C.jsx)(R,{children:l(`autoplay_video_previews`)}),(0,C.jsx)(g,{})]}),(0,C.jsx)(B,{children:l(`off_by_default_turn_this_on_to_start_a_video_as_soon_as_its_details_panel_opens_the_play_button_still_works_when_it_is_off`)})]}),(0,C.jsx)(W,{$on:m?.previewVideoAutoplay??p().previewVideoAutoplay,disabled:!m,onClick:()=>void $({previewVideoAutoplay:!(m?.previewVideoAutoplay??p().previewVideoAutoplay)}),type:`button`,children:(0,C.jsx)(G,{})})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsxs)(z,{children:[(0,C.jsx)(R,{children:l(`preview_panel_under_the_list`)}),(0,C.jsx)(g,{})]}),(0,C.jsx)(B,{children:l(`shows_the_pictures_videos_and_documents_the_shell_can_preview_as_grid_tiles_below_the_list_the_tiles_follow_the_grid_size_and_the_panel_only_appears_in_list_mode`)})]}),(0,C.jsx)(W,{$on:Z.showImages??!0,onClick:()=>void $({defaultView:{...Z,showImages:!(Z.showImages??!0)}}),type:`button`,children:(0,C.jsx)(G,{})})]}),(0,C.jsx)(F,{children:(0,C.jsxs)(I,{children:[(0,C.jsxs)(z,{children:[(0,C.jsx)(R,{children:l(`columns`)}),(0,C.jsx)(g,{})]}),(0,C.jsx)(B,{children:l(`shown_in_every_folder_changing_them_changes_all_folders_at_once`)})]})}),(0,C.jsx)(F,{children:(0,C.jsxs)(ci,{children:[Ge.map(e=>(0,C.jsxs)(li,{children:[(0,C.jsx)(`input`,{checked:(Z.columns??[]).includes(e.id),onChange:()=>void Qa(e.id),type:`checkbox`}),(0,C.jsx)(`span`,{children:l(e.label)})]},e.id)),(0,C.jsxs)(li,{children:[(0,C.jsx)(`input`,{checked:(Z.columns??[]).includes(`linkTarget`),onChange:()=>void Qa(`linkTarget`),type:`checkbox`}),(0,C.jsx)(`span`,{children:l(`link_target_after_the_name`)})]})]})})]}),(0,C.jsxs)(yi,{children:[l(`the_default_view_list_icon_size_and_grid_size_are_only_defaults_a_folder_can_still_remember_its_own_from_the_title_bar`),` `,(0,C.jsx)(g,{}),` `,l(`anything_marked_as_global_always_applies_to_every_folder`)]})]}),(0,C.jsxs)(M,{ref:Q(`shortcuts`),children:[(0,C.jsx)(j,{note:`every_action_can_hold_several_combinations_click_one_to_record_it_again_add_one_with_the_plus_and_drop_one_with_the_cross`,title:`shortcuts`,onReset:()=>X({id:`shortcuts`,label:`shortcuts`})}),(0,C.jsxs)(P,{children:[hn.map(({id:e,label:t,note:n})=>{let r=oo(e),i=T?.action===e,a=co(e);return(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(t)}),(0,C.jsx)(B,{children:l(n)}),a.length>0&&(0,C.jsx)(gi,{children:l(`also_in_use_by_actions_pressing_it_runs_each_of_them`,{actions:a.join(`, `)})})]}),(0,C.jsx)(L,{children:(0,C.jsxs)(ui,{children:[r.map((t,n)=>(0,C.jsxs)(di,{$conflict:(so.get(t)?.length??0)>1,$listening:i&&T.index===n,children:[(0,C.jsx)(fi,{onClick:()=>on({action:e,index:n}),title:l(`click_to_record_this_shortcut_again`),type:`button`,children:i&&T.index===n?sn.length>0?`${dt(sn)} + …`:l(`press_a_key`):dt(t)}),(0,C.jsx)(pi,{onClick:()=>uo(e,n),title:l(`remove`),type:`button`,children:(0,C.jsx)(x,{size:9})})]},t+`-`+n)),r.length===0&&(0,C.jsx)(mi,{children:l(`none`)}),(0,C.jsx)(hi,{$listening:i&&T.index<0,onClick:()=>on({action:e,index:-1}),title:l(`add`),type:`button`,children:i&&T.index<0?sn.length>0?`${dt(sn)} + …`:l(`press_a_key`):(0,C.jsx)(v,{size:11})})]})})]},e)}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`reset`)}),(0,C.jsx)(B,{children:l(`back_to_the_default_combination_for_every_action`)})]}),(0,C.jsx)(L,{children:(0,C.jsxs)(K,{onClick:()=>void $({shortcuts:ft(_t()),globalHotkey:null}),type:`button`,children:[(0,C.jsx)(b,{size:13}),l(`reset`)]})})]})]})]}),(0,C.jsxs)(M,{ref:Q(`memory`),children:[(0,C.jsx)(j,{note:`what_the_process_holds_and_how_to_give_it_back`,title:`memory`}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(fr,{children:[(0,C.jsxs)(pr,{children:[(0,C.jsx)(R,{children:l(`process_memory`)}),(0,C.jsx)(H,{children:_?`${d(_.private)} · ${Qn(_.private,_.available)}`:`—`})]}),(0,C.jsx)(mr,{children:(0,C.jsx)(hr,{$ratio:_?_.private/Math.max(_.available,1):0,$tone:le(_?_.private/Math.max(_.available,1):0)})}),(0,C.jsx)(B,{children:_?l(`committed_of_available_the_runtime_can_use_resident_is_resident_the_webview_runs_in_its_own_process`,{available:d(_.available),resident:d(_.workingSet)}):l(`reading_the_current_usage`)})]}),(0,C.jsxs)(fr,{children:[(0,C.jsxs)(pr,{children:[(0,C.jsx)(R,{children:l(`managed_heap`)}),(0,C.jsx)(H,{children:_?`${d(_.managed)} · ${Qn(_.managed,_.private)}`:`—`})]}),(0,C.jsx)(mr,{children:(0,C.jsx)(hr,{$ratio:_?_.managed/Math.max(_.private,1):0,$tone:`var(--accent-secondary)`})}),(0,C.jsx)(B,{children:l(`share_of_this_process_that_the_net_heap_holds_thumbnails_and_folder_size_walks_live_here_the_runtime_grows_it_on_demand_and_gives_it_back_after_a_collection`)})]}),(0,C.jsxs)(fr,{children:[(0,C.jsxs)(pr,{children:[(0,C.jsx)(R,{children:l(`native_and_runtime`)}),(0,C.jsx)(H,{children:_?`${d(Math.max(0,_.private-_.managed))} · ${Qn(Math.max(0,_.private-_.managed),_.private)}`:`—`})]}),(0,C.jsx)(mr,{children:(0,C.jsx)(hr,{$ratio:_?Math.max(0,_.private-_.managed)/Math.max(_.private,1):0,$tone:`var(--accent-primary)`})}),(0,C.jsx)(B,{children:l(`the_runtime_loaded_libraries_and_the_rust_helper_share_this_part_rust_runs_inside_the_process_so_it_has_no_separate_figure`)})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`free_memory`)}),(0,C.jsx)(B,{children:l(`compacts_the_heap_and_returns_unused_pages_to_the_system_always_safe`)})]}),(0,C.jsx)(L,{children:(0,C.jsxs)(K,{onClick:()=>void vt().then(Dt),type:`button`,children:[(0,C.jsx)(kt,{size:13}),l(`trim_now`)]})})]})]})]}),(0,C.jsxs)(M,{ref:Q(`overview`),children:[(0,C.jsx)(j,{note:`the_home_tab_s_history_and_how_much_of_it_it_shows`,title:`overview`,onReset:()=>X({id:`overview`,label:`overview`})}),(0,C.jsx)(P,{children:(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`recent_items`)}),(0,C.jsx)(B,{children:l(`how_many_recently_opened_folders_the_overview_lists_0_hides_the_section`)})]}),(0,C.jsx)(L,{children:(0,C.jsx)(Mr,{max:50,min:0,onChange:e=>void fo(Number(e.target.value)),type:`number`,value:m?.recentLimit??p().recentLimit})})]})})]}),(0,C.jsxs)(M,{ref:Q(`gallery`),children:[(0,C.jsx)(j,{note:`the_folders_the_gallery_scans_for_pictures_and_videos`,title:`gallery`,onReset:()=>X({id:`gallery`,label:`gallery`})}),(0,C.jsxs)(P,{children:[(m?.galleryRoots??[]).map(e=>(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:_e(e)}),(0,C.jsx)(B,{children:e})]}),(0,C.jsx)(L,{children:(0,C.jsx)(_i,{onClick:()=>void So((m?.galleryRoots??[]).filter(t=>t!==e)),title:l(`stop_scanning_this_folder`),type:`button`,children:(0,C.jsx)(x,{size:12})})})]},e)),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`scan_folders`)}),(0,C.jsx)(B,{children:(m?.galleryRoots??[]).length===0?l(`nothing_added_yet_so_the_gallery_reads_the_pictures_folder`):l(`only_these_folders_are_scanned_three_levels_deep`)})]}),(0,C.jsx)(L,{children:(0,C.jsxs)(K,{onClick:()=>void Co(),type:`button`,children:[(0,C.jsx)(wt,{size:13}),l(`choose_folder`)]})})]})]})]}),(0,C.jsxs)(M,{ref:Q(`icons`),children:[(0,C.jsx)(j,{note:`where_the_shell_s_own_icons_and_the_built_in_glyphs_come_from`,title:`icons`,onReset:()=>X({id:`icons`,label:`icons`})}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`use_system_file_icons`)}),(0,C.jsx)(B,{children:l(`ask_the_shell_for_the_icon_of_each_file_type_instead_of_the_built_in_glyphs`)})]}),(0,C.jsx)(W,{$on:m?.systemIcons??p().systemIcons,disabled:!m,onClick:()=>void $({systemIcons:!m?.systemIcons}),type:`button`,children:(0,C.jsx)(G,{})})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`use_custom_folder_icons`)}),(0,C.jsx)(B,{children:l(`folders_that_define_an_icon_desktop_ini_keep_showing_it_even_when_system_icons_are_off`)})]}),(0,C.jsx)(W,{$on:m?.customFolderIcons??p().customFolderIcons,disabled:!m,onClick:()=>void $({customFolderIcons:!m?.customFolderIcons}),type:`button`,children:(0,C.jsx)(G,{})})]})]})]}),(0,C.jsxs)(M,{ref:Q(`extension-icons`),children:[(0,C.jsx)(j,{note:`a_custom_glyph_for_one_file_extension`,title:`icons_by_extension`,onReset:()=>X({id:`extension-icons`,label:`icons_by_extension`})}),(0,C.jsxs)(P,{children:[Object.entries(m?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:e}),(0,C.jsx)(B,{children:Dn(l,t)})]}),(0,C.jsxs)(L,{children:[(0,C.jsx)(On,{source:t}),(0,C.jsx)(_i,{onClick:()=>void io(e,null),title:l(`remove_this_rule`),type:`button`,children:(0,C.jsx)(x,{size:12})})]})]},e)),(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`add_a_rule`)}),(0,C.jsx)(B,{children:l(`extension_and_the_icon_to_draw_for_it`)})]}),(0,C.jsxs)(L,{children:[(0,C.jsx)(Mr,{onChange:e=>at(e.target.value),placeholder:`.psd`,spellCheck:!1,value:Ye}),(0,C.jsxs)(Lr,{children:[(0,C.jsx)(_i,{onClick:()=>Tt(e=>!e),title:l(`choose_the_icon`),type:`button`,children:(0,C.jsx)(On,{source:gt})}),Ct&&(0,C.jsx)(tt,{allowDefault:!1,onClose:()=>Tt(!1),onPick:e=>{St(e??`file`),Tt(!1)},value:gt})]}),(0,C.jsx)(_i,{onClick:()=>void wo(),title:l(`add_the_rule`),type:`button`,children:(0,C.jsx)(v,{size:13})})]})]})]})]}),(0,C.jsxs)(M,{ref:Q(`folder-index`),children:[(0,C.jsx)(j,{note:`the_hidden_cache_that_makes_a_folder_open_instantly_next_time`,title:`folder_index`,onReset:()=>X({id:`folder-index`,label:`folder_index`})}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`keep_a_index_in_every_folder`,{index:`.yafm-index.db`})}),(0,C.jsx)(B,{children:l(`holds_icons_cached_folder_sizes_and_the_folder_s_last_listing_so_it_opens_instantly_next_time_hidden_and_marked_as_a_system_file_on_windows_skipped_where_the_folder_is_read_only`)})]}),(0,C.jsx)(W,{$on:m?.writeDirectoryIndex??p().writeDirectoryIndex,disabled:!m,onClick:()=>void $({writeDirectoryIndex:!m?.writeDirectoryIndex}),type:`button`,children:(0,C.jsx)(G,{})})]}),(0,C.jsxs)(Fn,{children:[(0,C.jsxs)(In,{children:[(0,C.jsx)(R,{children:l(`directory_index_blacklist`)}),(0,C.jsx)(B,{children:l(`rules_are_full_path_globs_matches_within_one_path_segment_and_crosses_folders_matching_folders_use_the_central_database_instead_of_creating_yafm_index_db_files`)})]}),(0,C.jsx)(Zr,{children:(m?.directoryIndexBlacklist??[]).map(e=>(0,C.jsxs)(Qr,{children:[(0,C.jsx)($r,{"aria-label":l(`directory_index_blacklist_rule`),onBlur:Ma,onChange:t=>Cr({from:e,value:t.target.value}),onFocus:()=>Cr({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Ma()):e.key===`Escape`&&Cr(null)},spellCheck:!1,value:Sr?.from===e?Sr.value:e}),(0,C.jsx)(ei,{onClick:()=>Fa(e),title:l(`remove`),type:`button`,children:(0,C.jsx)(x,{size:10})})]},e))}),(0,C.jsxs)(ni,{children:[(0,C.jsx)(ri,{"aria-label":l(`directory_index_blacklist_rule`),onChange:e=>Fr(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Na())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:Pr}),(0,C.jsxs)(U,{onClick:Na,type:`button`,children:[(0,C.jsx)(v,{size:13}),l(`add_the_rule`)]})]}),(0,C.jsxs)(ti,{children:[(0,C.jsxs)(U,{onClick:Ia,type:`button`,children:[(0,C.jsx)(b,{size:13}),l(`restore_defaults`)]}),(0,C.jsxs)(U,{onClick:()=>void Pa(),type:`button`,children:[(0,C.jsx)(wt,{size:13}),l(`add_folder_2`)]})]})]})]}),!(m?.writeDirectoryIndex??p().writeDirectoryIndex)&&(0,C.jsx)(bi,{children:En(l,e?.platform)})]}),(0,C.jsxs)(M,{ref:Q(`indexing`),children:[(0,C.jsx)(j,{note:`background_folder_size_and_item_count_walks`,title:`index_tasks`}),(0,C.jsx)(Tn,{})]}),(0,C.jsxs)(M,{ref:Q(`files`),children:[(0,C.jsx)(j,{note:`what_the_listings_include`,title:`files`}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsxs)(I,{children:[(0,C.jsx)(R,{children:l(`show_hidden_files`)}),(0,C.jsxs)(B,{children:[l(`toggles_ordinary_hidden_files_for_this_session_alt_also_works_system_files_still_follow_explorer`),f?.overridden&&(0,C.jsx)(Dr,{disabled:Me,onClick:()=>void eo(null),type:`button`,children:l(`follow_system`)})]})]}),(0,C.jsxs)(L,{children:[(0,C.jsx)(jr,{$on:f?.showHidden??!1,children:f?.overridden?wn(l,f.showHidden):l(`follow_system`)}),(0,C.jsx)(W,{$on:f?.showHidden??!1,disabled:!f||Me,onClick:()=>void eo(!(f?.showHidden??!1)),title:l(`show_hidden_files`),type:`button`,children:(0,C.jsx)(G,{})})]})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(R,{children:l(`protected_operating_system_files`)}),(0,C.jsx)(H,{children:wn(l,f?.showSystem)})]})]}),(0,C.jsx)(yi,{children:l(`hidden_items_follow_this_app_s_switch_protected_operating_system_files_still_follow_windows`)})]}),(0,C.jsxs)(Kn,{onClick:()=>un(!0),type:`button`,children:[(0,C.jsx)(Ot,{size:13}),l(`open_source_attribution`)]})]}),(0,C.jsxs)(qn,{"aria-label":l(`settings_sections`),onWheel:ga,ref:ua,children:[(0,C.jsx)(Jn,{children:l(`sections`)}),(0,C.jsx)(Yn,{children:O.map(({id:e,label:t})=>(0,C.jsxs)(Xn,{$active:Ai===e,"data-section":e,onClick:()=>ma(e),type:`button`,children:[(0,C.jsx)(Pn,{children:xn[t]}),(0,C.jsx)(`span`,{children:l(t)})]},e))}),(0,C.jsx)(Zn,{children:l(`changes_are_saved_as_you_make_them`)})]}),ln&&(0,C.jsx)(S.Suspense,{fallback:null,children:(0,C.jsx)(fn,{onClose:()=>un(!1)})}),Oi&&(0,C.jsx)(ke,{confirmLabel:l(`restore_defaults`),message:l(`restore_section_to_its_defaults`,{section:l(Oi.label)}),onCancel:()=>X(null),onConfirm:()=>{let e=Oi;X(null),_a(e.id)},open:!0,title:l(`restore_defaults`)}),Y&&(0,Jt.createPortal)((0,C.jsx)(tr,{children:(0,C.jsxs)(nr,{"aria-modal":`true`,role:`dialog`,children:[(0,C.jsxs)(rr,{children:[(0,C.jsx)(`h2`,{children:l(`software_update`)}),(0,C.jsx)(`p`,{children:J?.latest?l(`version_version`,{version:J.latest}):l(`preparing_the_update`)})]}),(0,C.jsx)(ir,{children:l(`changelog`)}),Y.changelog?(0,C.jsx)(ar,{onClick:sr,children:(0,C.jsx)(c,{source:Y.changelog})}):(0,C.jsx)(or,{children:Y.phase===`changelog`?l(`loading_the_changelog`):l(`the_changelog_could_not_be_loaded`)}),(0,C.jsxs)(cr,{children:[(0,C.jsx)(`span`,{children:$n(Y,l)}),(0,C.jsx)(`span`,{children:er(Y)})]}),(0,C.jsx)(lr,{children:(0,C.jsx)(ur,{$percent:Math.max(0,Math.min(100,Y.percent))})}),Y.error&&(0,C.jsx)(V,{children:Y.error}),(0,C.jsxs)(dr,{children:[(Y.phase===`changelog`||Y.phase===`downloading`)&&(0,C.jsxs)(K,{onClick:()=>void Wa(),type:`button`,children:[(0,C.jsx)(x,{size:13}),l(`cancel`)]}),Y.phase===`ready`&&(0,C.jsxs)(K,{onClick:()=>void Ga(),type:`button`,children:[(0,C.jsx)(Lt,{size:13}),l(`install_update`)]}),Y.phase===`installing`&&(0,C.jsxs)(K,{disabled:!0,type:`button`,children:[(0,C.jsx)(b,{size:13}),l(`installing`)]}),(Y.phase===`ready`||Y.phase===`error`||Y.phase===`cancelled`||Y.phase===`installing`)&&(0,C.jsxs)(K,{onClick:()=>Di(null),type:`button`,children:[(0,C.jsx)(x,{size:13}),l(`close`)]})]})]})}),document.body)]})}function Cn({approvalMinutes:e,denialSeconds:t}){let n=u(),[r,i]=(0,S.useState)([]),[a,o]=(0,S.useState)(!1),[s,c]=(0,S.useState)(()=>Date.now());(0,S.useEffect)(()=>{let e=window.setInterval(()=>c(Date.now()),1e3);return()=>window.clearInterval(e)},[]),(0,S.useEffect)(()=>{let e=()=>void Ie().then(i,()=>i([]));if(e(),l.available)return l.on(t=>{t.type===`share.devices.changed`&&e()})},[]),(0,S.useEffect)(()=>{r.some(e=>e.expiresAt>0&&e.expiresAt<=s)&&Ie().then(i,()=>void 0)},[s,r]);let ee=e=>{let t=Math.max(0,Math.ceil((e-s)/1e3)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60,a=e=>String(e).padStart(2,`0`);return n>0?`${n}:${a(r)}:${a(i)}`:`${r}:${a(i)}`},te=async(e,t,n)=>{o(!0);try{i(await h(e,t,n))}finally{o(!1)}},ne=async()=>{if(window.confirm(n(`share_access_clear_devices_confirm`))){o(!0);try{i(await m())}finally{o(!1)}}},re=async e=>{o(!0);try{i(await He(e))}finally{o(!1)}},ie=e=>e.state===`allowed`?e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_allowed`)} · ${n(`share_access_expired`)}`:n(`share_access_allowed`):e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_denied`)} · ${n(`share_access_expired`)}`:n(`share_access_denied`),ae=r.filter(e=>e.state===`allowed`||e.state===`denied`),oe=e=>e.expiresAt===0?void 0:new Date(e.expiresAt).toLocaleString();return(0,C.jsxs)(gr,{children:[ae.length>0&&(0,C.jsxs)(vr,{children:[(0,C.jsxs)(wr,{children:[n(`devices`),` · `,ae.length]}),(0,C.jsx)(xr,{disabled:a,onClick:()=>void ne(),title:n(`share_access_clear_devices`),type:`button`,children:(0,C.jsx)(Kt,{size:13})})]}),ae.length===0&&(0,C.jsx)(_r,{children:n(`share_access_no_devices`)}),ae.map(r=>(0,C.jsxs)(yr,{children:[(0,C.jsxs)(Sr,{children:[(0,C.jsx)(Cr,{children:r.name||r.address||r.id}),(0,C.jsxs)(wr,{children:[r.address,r.address?` · `:``,n(`share_access_last_seen`),`: `,new Date(r.lastSeen).toLocaleString()]}),(0,C.jsxs)(wr,{title:oe(r),children:[ie(r),` · `,r.expiresAt===0?n(`share_access_forever`):n(`share_access_expires_in`,{time:ee(r.expiresAt)})]})]}),(0,C.jsxs)(br,{children:[(0,C.jsx)(mt,{disabled:a,onChange:e=>{let[t,n]=e.split(`:`);te(r.id,t,n===`forever`)},options:[{value:`allowed:timed`,label:n(`share_access_allowed_for_minutes`,{minutes:e})},{value:`allowed:forever`,label:n(`share_access_allow_forever`)},{value:`denied:timed`,label:n(`share_access_denied_for_seconds`,{seconds:t})},{value:`denied:forever`,label:n(`share_access_block_forever`)}],value:r.state===`allowed`?r.expiresAt===0?`allowed:forever`:`allowed:timed`:r.expiresAt===0?`denied:forever`:`denied:timed`,width:190}),(0,C.jsx)(xr,{disabled:a,onClick:()=>void re(r.id),title:n(`remove`),type:`button`,children:(0,C.jsx)(Kt,{size:13})})]})]},r.id))]})}function wn(e,t){return e(t===void 0?`reading`:t?`shown`:`hidden`)}function Tn(){let e=u(),[t,n]=(0,S.useState)(null);return(0,S.useEffect)(()=>{let e=!0,t=()=>Se().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,C.jsx)(bi,{children:e(`no_indexing_tasks_are_running`)}):(0,C.jsxs)(P,{children:[(0,C.jsx)(F,{children:(0,C.jsx)(R,{children:e(`count_indexing_tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,C.jsx)(F,{children:(0,C.jsx)(H,{title:e,children:e})},e))]}):(0,C.jsx)(bi,{children:e(`index_task_information_is_unavailable`)})}function En(e,t){return e(`indexes_are_off_every_folder_s_icons_sizes_and_cached_listing_now_live_in_one_database_in_place_so_that_drive_grows_with_every_folder_you_open_that_is_the_cost_of_keeping_folders_free_of_extra_files`,{place:e(t===`windows`?`appdata_which_sits_on_the_system_drive_usually_c`:t===`linux`?`your_home_folder_which_often_shares_a_partition_with_the_system`:`the_app_s_settings_folder_which_usually_sits_on_the_system_drive`)})}function Dn(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built_in_source`,{source:t})}function On({source:e}){let t=f(e.startsWith(`file:`)?e.slice(5):null);return(0,C.jsx)(vi,{children:t?(0,C.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,C.jsx)(Ye,{name:e,size:16})})}function kn({path:e,active:t,onSelect:n,onRemove:r}){let i=u(),a=fe(e),o=ye(a?null:e),s=a?e:o,c=at(e.split(/[?#]/)[0]);return(0,C.jsxs)(Kr,{children:[(0,C.jsxs)(Gr,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(c?(0,C.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,C.jsx)(`img`,{alt:``,src:s})),c&&(0,C.jsx)(Jr,{children:(0,C.jsx)(Mt,{size:11})})]}),(0,C.jsx)(qr,{onClick:r,title:i(`remove`),type:`button`,children:(0,C.jsx)(x,{size:9})})]})}function An({value:e,options:t,onChange:n,disabled:r}){let i=u(),[a,o]=(0,S.useState)(null),s=(0,S.useRef)(null);return(0,S.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(Nr,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,C.jsx)(`span`,{children:A(i,e)}),(0,C.jsx)(Pr,{children:(0,C.jsx)(Ft,{size:11})})]}),a&&(0,Jt.createPortal)((0,C.jsx)(Fr,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,C.jsxs)(Ir,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,C.jsx)(`span`,{children:A(i,t)}),t===e&&(0,C.jsx)(Pt,{size:11})]},t))}),document.body)]})}function A(e,t){return t===bn?e(`system_default`):D[t]??t}function j({title:e,note:t,global:n=!1,onReset:r}){let i=u();return(0,C.jsxs)(Nn,{children:[(0,C.jsxs)(`h2`,{children:[(0,C.jsx)(Pn,{children:xn[e]}),i(e),n&&(0,C.jsx)(g,{})]}),(0,C.jsx)(`p`,{children:i(t)}),r&&(0,C.jsx)(N,{"aria-label":i(`restore_defaults`),onClick:r,title:i(`restore_defaults`),type:`button`,children:(0,C.jsx)(b,{size:12})})]})}var jn=n.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,Mn=n.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,M=n.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,Nn=n.header`
    display: flex;
    flex-direction: column;
    gap: 2px;
    position: relative;
    padding-right: 36px;

    h2 {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        font-weight: 600;
        color: var(--text-primary);
    }

    h2::before {
        content: "";
        width: 3px;
        height: 13px;
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    p {
        padding-left: 32px;
        font-size: 10.5px;
        color: var(--text-muted);
    }
`,N=n.button`
    position: absolute;
    top: 0;
    right: 0;
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;
    opacity: 0.7;

    &:hover {
        background: rgba(var(--accent-rgb), 0.12);
        color: var(--text-primary);
        opacity: 1;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,Pn=n.i`
    display: grid;
    place-items: center;
    width: 13px;
    height: 13px;
    flex-shrink: 0;
    color: var(--accent-primary);
    opacity: 0.85;
`,P=n.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,Fn=n.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,In=n.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Ln=n.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,Rn=n.button`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 7px 10px;
    border: 1px solid ${({$on:e})=>e?`rgba(var(--accent-rgb), 0.55)`:`var(--border-color)`};
    border-radius: var(--radius-md);
    background: ${({$on:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 11px;
    text-align: left;
    cursor: pointer;
    transition: border-color 130ms ease, background 130ms ease, color 130ms ease, transform 130ms ease;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }
`,zn=n.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Bn=n.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,Vn=n.button`
    display: grid;
    place-items: center;
    width: 24px;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        border-color: rgba(248, 113, 113, 0.55);
        color: #fca5a5;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,Hn=n.button`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 7px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }

    &:disabled {
        opacity: 0.55;
        cursor: default;
    }
`,Un=n.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Wn=n.input`
    flex: 1;
    min-width: 0;
    padding: 4px 7px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-secondary);
    color: var(--text-primary);
    font: inherit;
    font-size: 11px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
    }
`,Gn=n.span`
    display: inline-flex;
    flex-shrink: 0;

    i {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35);
    }

    i + i {
        margin-left: -4px;
    }
`,Kn=n.button`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    align-self: flex-start;
    padding: 0;
    border: 0;
    background: none;
    color: var(--text-muted);
    font: inherit;
    font-size: 11px;
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 3px;

    &:hover {
        color: var(--text-secondary);
    }
`,qn=n.nav`
    display: flex;
    flex-direction: column;
    align-self: stretch;
    flex-shrink: 0;
    width: 172px;
    min-height: 0;
    max-height: 100%;
    overflow: hidden;
    padding: 6px 0 12px;
    scrollbar-width: none;
`,Jn=n.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Yn=n.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2px;

    &::before {
        content: "";
        position: absolute;
        top: 12px;
        bottom: 12px;
        left: 5px;
        width: 1px;
        background: var(--border-color);
    }
`,Xn=n.button`
    position: relative;
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 6px 6px 6px 17px;
    border: 0;
    border-radius: var(--radius-sm);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.10)`:`transparent`};
    color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 10.5px;
    text-align: left;
    white-space: nowrap;
    cursor: pointer;
    transition: color 120ms ease, background 120ms ease;

    &::before {
        content: "";
        position: absolute;
        left: 2px;
        top: 50%;
        width: 7px;
        height: 7px;
        border: 1px solid var(--border-color-hover);
        border-radius: 50%;
        background: var(--bg-secondary);
        transform: translateY(-50%);
        transition: background 120ms ease, border-color 120ms ease, box-shadow 120ms ease;
    }

    ${({$active:t})=>t&&e`
        &::before {
            border-color: var(--accent-primary);
            background: var(--accent-primary);
            box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.16);
        }
    `}
    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,Zn=n.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function Qn(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}function $n(e,t){switch(e.phase){case`changelog`:return t(`preparing_the_update`);case`downloading`:return t(`downloading_the_update`);case`ready`:return t(`download_complete`);case`cancelled`:return t(`update_cancelled`);case`error`:return t(`the_update_failed`);case`installing`:return t(`installing`);default:return``}}function er(e){return e.total>0?`${d(e.downloaded)} / ${d(e.total)}`:e.downloaded>0?d(e.downloaded):``}var tr=n.div`
    position: fixed;
    inset: 0;
    z-index: 9500;
    display: grid;
    place-items: center;
    padding: 32px;
    background: rgba(2, 6, 23, 0.55);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
`,nr=n.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(560px, 100%);
    max-height: min(620px, 100%);
    padding: 18px 20px 16px;
    overflow: auto;
    border: 1px solid var(--border-color);
    border-radius: 14px;
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
`,rr=n.div`
    display: flex;
    flex-direction: column;
    gap: 2px;

    h2 {
        margin: 0;
        font-size: 15px;
        font-weight: 600;
        color: var(--text-primary);
    }

    p {
        margin: 0;
        font-family: var(--font-mono);
        font-size: 11px;
        color: var(--text-muted);
    }
`,ir=n.span`
    margin-top: 4px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ar=n.div`
    max-height: 260px;
    overflow: auto;
    font-size: 12px;
    line-height: 1.55;
    color: var(--text-secondary);

    > :first-child {
        margin-top: 0;
    }

    h1,
    h2,
    h3 {
        margin: 10px 0 4px;
        font-family: var(--font-title), var(--font-cjk);
        font-size: 12px;
        color: var(--text-primary);
    }

    p {
        margin: 4px 0;
    }

    ul,
    ol {
        margin: 4px 0;
        padding-left: 18px;
    }

    li {
        margin: 2px 0;
    }

    a {
        color: var(--accent-primary);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    code {
        padding: 1px 4px;
        border-radius: 4px;
        background: rgba(var(--accent-rgb), 0.14);
        font-family: var(--font-mono);
        font-size: 11px;
    }

    pre {
        margin: 6px 0;
        padding: 8px 10px;
        border-radius: var(--radius-sm);
        background: var(--bg-input);
        overflow: auto;

        code {
            padding: 0;
            background: none;
        }
    }

    blockquote {
        margin: 6px 0;
        padding-left: 10px;
        border-left: 2px solid var(--border-color-hover);
        color: var(--text-muted);
    }

    hr {
        margin: 8px 0;
        border: 0;
        border-top: 1px solid var(--border-color);
    }
`,or=n.p`
    margin: 0;
    font-size: 11px;
    color: var(--text-muted);
`;function sr(e){let t=e.target?.closest(`a`);t&&(e.preventDefault(),ce(t.href))}var cr=n.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    font-size: 11px;
    color: var(--text-muted);
`,lr=n.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.22);
`,ur=n.div`
    width: ${({$percent:e})=>`${e}%`};
    height: 100%;
    border-radius: 3px;
    background: var(--accent-gradient);
    transition: width 160ms ease;
`,dr=n.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,fr=n.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,pr=n.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,mr=n.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,hr=n.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,gr=n.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
`,_r=n.div`
    padding: 8px 2px;
    color: var(--text-muted);
    font-size: 11px;
`,vr=n.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2px;
`,yr=n.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,br=n.div`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,xr=n.button`
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    border: 1px solid rgba(248, 113, 113, 0.35);
    border-radius: var(--radius-sm);
    background: transparent;
    color: #fca5a5;
    cursor: pointer;

    &:hover:not(:disabled) {
        background: rgba(248, 113, 113, 0.14);
        color: #fecaca;
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`,Sr=n.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Cr=n.span`
    color: var(--text-primary);
    font-size: 12px;
`,wr=n.span`
    color: var(--text-muted);
    font-size: 10.5px;
    overflow-wrap: anywhere;
`,Tr=n.input`
    width: 92px;
    height: 32px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 11px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
    }
`,Er=n.input`
    width: 190px;
    height: 32px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 11px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
    }
`,F=n.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,I=n.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,L=n.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,R=n.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,z=n.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,B=n.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,V=n.span`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 2px 0;
    font-size: 11px;
    color: var(--danger);

    &::before {
        content: "";
        width: 5px;
        height: 5px;
        flex-shrink: 0;
        border-radius: 50%;
        background: currentColor;
    }
`,H=n.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,Dr=n.button`
    margin-left: 6px;
    padding: 0;
    border: 0;
    background: none;
    color: var(--accent-primary);
    font: inherit;
    text-decoration: underline;
    text-underline-offset: 2px;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`,Or=n.input`
    min-width: 0;
    flex: 1;
    padding: 3px 8px;
    border: 1px solid var(--border-color-focus);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 13px;
    outline: none;
`,U=n.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }

    svg {
        width: 12px;
        height: 12px;
    }
`,kr=n.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,Ar=n.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 9px;
    border: 1px solid rgba(248, 113, 113, 0.35);
    border-radius: var(--radius-sm);
    background: transparent;
    color: #fca5a5;
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover:not(:disabled) {
        background: rgba(248, 113, 113, 0.14);
        color: #fecaca;
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`,jr=n.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,W=n.button`
    position: relative;
    width: 38px;
    height: 21px;
    flex-shrink: 0;
    border: 1px solid ${({$on:e})=>e?`transparent`:`var(--border-color)`};
    border-radius: 999px;
    background: ${({$on:e})=>e?`var(--accent-gradient)`:`rgba(148, 163, 184, 0.22)`};
    cursor: pointer;
    transition: background 140ms ease, border-color 140ms ease;

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 2px;
    }

    span {
        transform: translateX(${({$on:e})=>e?`17px`:`0`});
    }
`,G=n.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,Mr=n.input`
    width: 92px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
    }
`,Nr=n.button`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    min-width: 150px;
    padding: 6px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }

    &:disabled {
        opacity: 0.55;
        cursor: default;
    }
`,Pr=n.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Fr=n.div`
    position: fixed;
    z-index: 2600;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
`,Ir=n.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    padding: 6px 9px;
    border: 0;
    border-radius: var(--radius-sm);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 11px;
    text-align: left;
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-rgb), 0.12);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: -1px;
    }
`,Lr=n.span`
    position: relative;
    display: inline-flex;
`,Rr=n.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,zr=n.button`
    padding: 5px 14px;
    border: 1px solid ${({$on:e})=>e?`rgba(var(--accent-rgb), 0.55)`:`transparent`};
    border-radius: var(--radius-sm);
    background: ${({$on:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`transparent`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 11px;
    font-weight: ${({$on:e})=>e?600:500};
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`,Br=n.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,Vr=n.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,Hr=n.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Ur=n.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Wr=n.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,Gr=n.button`
    position: relative;
    width: 102px;
    height: 58px;
    padding: 0;
    overflow: hidden;
    border: 1px solid ${({$active:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: var(--bg-primary);
    box-shadow: ${({$active:e})=>e?`0 0 0 2px rgba(var(--accent-rgb), 0.28)`:`none`};
    cursor: pointer;

    img,
    video {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        border-color: var(--border-color-hover);
    }
`,Kr=n.div`
    position: relative;
    width: 102px;
    height: 58px;
`,qr=n.button`
    position: absolute;
    top: 3px;
    right: 3px;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 17px;
    height: 17px;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.24);
    border-radius: 50%;
    background: rgba(6, 8, 16, 0.78);
    color: #fff;
    cursor: pointer;

    &:hover {
        background: #e81123;
        border-color: #e81123;
    }
`,Jr=n.span`
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
`,Yr=n.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 102px;
    height: 58px;
    padding: 0;
    border: 1px dashed var(--border-color-hover);
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 10.5px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-focus);
        color: var(--text-primary);
    }
`,Xr=n.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,Zr=n.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Qr=n.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,$r=n.input`
    flex: 1;
    min-width: 0;
    padding: 4px 6px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
    outline: 0;

    &:hover {
        border-color: var(--border-color);
    }

    &:focus {
        border-color: var(--border-color-focus);
        background: var(--bg-input);
    }
`,ei=n.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    padding: 0;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: rgba(248, 113, 113, 0.14);
        color: #fca5a5;
    }
`,ti=n.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,ni=n.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,ri=n.input`
    flex: 1;
    min-width: 0;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
        box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);
    }
`,ii=n.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,ai=n.button`
    padding: 6px 12px;
    border: 1px solid ${({$active:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`,oi=n.input`
    width: 100%;
    height: 32px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
    }
`,si=n.div`
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    color: var(--text-muted);
    font-size: 11px;

    code {
        padding: 2px 7px;
        border-radius: var(--radius-sm);
        background: rgba(var(--bg-rgb), 0.45);
        color: var(--text-primary);
        font-family: var(--font-mono);
        font-size: 11px;
    }
`,ci=n.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,li=n.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,ui=n.span`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 5px;
`,di=n.span`
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    border: 1px solid ${({$conflict:e,$listening:t})=>t?`var(--border-color-focus)`:e?`rgba(251, 191, 36, 0.55)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$listening:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`var(--bg-input)`};
`,fi=n.button`
    min-width: 88px;
    padding: 4px 9px;
    border: 0;
    background: transparent;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 11px;
    cursor: pointer;

    &:hover {
        color: var(--text-primary);
    }
`,pi=n.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 24px;
    border: 0;
    border-left: 1px solid var(--border-color);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        color: #fca5a5;
        background: rgba(248, 113, 113, 0.12);
    }
`,mi=n.span`
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,hi=n.button`
    display: grid;
    place-items: center;
    min-width: 24px;
    height: 24px;
    padding: 0 6px;
    border: 1px dashed ${({$listening:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$listening:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`transparent`};
    color: var(--text-muted);
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:hover {
        color: var(--text-primary);
        border-color: var(--border-color-hover);
    }
`,gi=n.span`
    font-size: 10px;
    color: #fbbf24;
`,K=n.button`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`,_i=n.button`
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,vi=n.span`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;

    svg {
        color: var(--text-muted);
    }

    img {
        display: block;
    }
`,yi=n.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,bi=n.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`;export{k as SettingsView};