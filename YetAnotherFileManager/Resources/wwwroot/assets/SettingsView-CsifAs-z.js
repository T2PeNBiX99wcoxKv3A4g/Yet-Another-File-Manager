const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AttributionDialog-4nUOblgh.js","assets/dist-CKllR0JH.js","assets/Icons-5-2yk8Zn.js"])))=>i.map(i=>d[i]);
import{A as e,C as t,N as n,O as r,S as i,T as a,a as o,c as s,d as c,f as l,i as ee,k as u,l as te,m as ne,n as re,o as ie,s as d,t as ae,u as oe,x as se}from"./dist-CKllR0JH.js";import{D as ce,a as le,b as ue,g as de,i as fe,k as pe,n as me,p as f,t as he,u as ge,w as _e}from"./theme-DU3X_EOM.js";import{B as ve,Ct as ye,Dt as be,G as p,Ot as xe,P as Se,dt as Ce,ft as we,gt as Te,ht as Ee,i as De,mt as Oe,ot as ke,pt as Ae,s as je,ut as m,vt as Me,xt as Ne,yt as Pe}from"./selectionMenu-CRlNslJh.js";import{A as Fe,D as Ie,E as Le,F as Re,H as ze,I as h,J as Be,L as Ve,O as He,P as g,Q as Ue,R as We,S as Ge,U as Ke,V as qe,X as Je,Z as Ye,_ as Xe,_t as Ze,a as Qe,at as $e,g as et,gt as tt,ht as nt,i as rt,it,j as at,k as ot,mt as st,nt as ct,ot as lt,p as ut,pt as dt,rt as ft,s as _,st as pt,t as mt,tt as ht,v as gt,vt as _t,yt as vt}from"./main-BqpzyD7h.js";import{t as yt}from"./textSearch-VOTyBg9G.js";import{F as bt,G as xt,H as St,K as Ct,M as wt,N as Tt,Q as v,T as Et,W as Dt,X as Ot,Z as kt,at as At,ct as y,d as jt,dt as Mt,f as Nt,gt as Pt,ht as Ft,j as It,k as b,l as Lt,lt as Rt,n as zt,nt as Bt,ot as x,p as Vt,q as Ht,rt as Ut,x as Wt,xt as Gt,y as S,yt as Kt}from"./Icons-5-2yk8Zn.js";var C=n(e(),1),qt=pe();async function Jt(){return a.available?(await a.request(`app.tags`)).tags:[]}async function Yt(e){return!a.available||!e?!1:(await a.request(`app.tags.delete`,{name:e})).ok}async function Xt(e,t){return!a.available||!e?[]:(await a.request(`app.tags.create`,{name:e,color:t})).tags}async function Zt(e,t){return!a.available||!e?!1:(await a.request(`app.tags.color`,{name:e,color:t})).ok}async function Qt(e,t){return!a.available||!e||!t?!1:(await a.request(`app.tags.rename`,{oldName:e,newName:t})).ok}var w=t();function $t({value:e,fonts:t,defaultLabel:n,sample:r,disabled:a,onChange:o}){let s=i(),[c,l]=(0,C.useState)(null),[ee,u]=(0,C.useState)(``),te=(0,C.useRef)(null),ne=(0,C.useRef)(null),re=(0,C.useMemo)(()=>{let e=ee.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,ee]);(0,C.useEffect)(()=>{if(!c)return;ne.current?.focus();let e=()=>l(null),t=t=>{let n=t.target;n instanceof Node&&te.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e)}},[c]);let ie=()=>{if(c){l(null);return}let e=te.current?.getBoundingClientRect();if(!e)return;u(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;l({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},d=e=>{o(e),l(null)};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(en,{"aria-expanded":c!==null,"aria-haspopup":`listbox`,disabled:a,onClick:ie,ref:te,type:`button`,children:[(0,w.jsx)(tn,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,w.jsx)(nn,{children:`▾`})]}),c&&(0,qt.createPortal)((0,w.jsxs)(rn,{"data-font-menu":`true`,role:`listbox`,style:{left:c.left,maxHeight:c.maxHeight,top:c.top,width:c.width},children:[(0,w.jsxs)(an,{children:[(0,w.jsx)(Rt,{size:12}),(0,w.jsx)(T,{onChange:e=>u(e.target.value),placeholder:s(`filter_fonts`),ref:ne,value:ee})]}),(0,w.jsxs)(on,{children:[(0,w.jsxs)(sn,{$active:!e,"aria-selected":!e,onClick:()=>d(null),role:`option`,type:`button`,children:[(0,w.jsxs)(ln,{children:[n,` `,(0,w.jsx)(dn,{children:s(`default_2`)})]}),!e&&(0,w.jsx)(jt,{size:11})]}),re.map(t=>(0,w.jsxs)(sn,{$active:e===t,"aria-selected":e===t,onClick:()=>d(t),role:`option`,type:`button`,children:[(0,w.jsxs)(cn,{children:[(0,w.jsx)(ln,{children:t}),(0,w.jsx)(un,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,w.jsx)(jt,{size:11})]},t)),re.length===0&&(0,w.jsx)(E,{children:s(`no_matching_font`)})]})]}),document.body)]})}var en=u.button`
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
`,tn=u.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,nn=u.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,rn=u.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${je}
`,an=u.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,T=u.input`
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
`,on=u.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,sn=u.button`
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
`,cn=u.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,ln=u.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,un=u.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,dn=u.span`
    color: var(--text-muted);
    font-size: 10px;
`,E=u.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,fn=(0,C.lazy)(()=>mt(()=>import(`./AttributionDialog-4nUOblgh.js`).then(e=>({default:e.AttributionDialog})),__vite__mapDeps([0,1,2]))),pn=[{id:`goBack`,label:`back`,note:`goes_to_the_previous_folder_in_this_tab`},{id:`goForward`,label:`forward`,note:`goes_to_the_next_folder_in_this_tab`},{id:`goUp`,label:`up_one_level`,note:`opens_the_folder_that_contains_the_current_one`},{id:`home`,label:`home_folder`,note:`jumps_to_the_user_s_home_folder`},{id:`find`,label:`search`,note:`opens_the_floating_search_box_typing_a_letter_in_a_folder_opens_it_too`},{id:`location`,label:`edit_location`,note:`turns_the_breadcrumbs_into_an_editable_path`},{id:`closeTab`,label:`close_tab`,note:`closes_the_tab_that_is_open`},{id:`newTab`,label:`new_tab`,note:`opens_the_overview_in_a_new_tab`},{id:`reopenTab`,label:`reopen_closed_tab`,note:`brings_back_the_tab_you_closed_last_folder_and_all`},{id:`nextTab`,label:`next_tab`,note:`cycles_to_the_next_tab`},{id:`previousTab`,label:`previous_tab`,note:`cycles_to_the_previous_tab`},{id:`copy`,label:`copy`,note:`copies_the_selection_so_it_can_be_pasted_elsewhere`},{id:`duplicate`,label:`duplicate`,note:`makes_a_copy_of_the_selection_in_this_folder_with_a_new_name`},{id:`cut`,label:`cut`,note:`moves_the_selection_on_the_next_paste`},{id:`paste`,label:`paste`,note:`copies_or_moves_the_clipboard_s_files_into_the_current_folder`},{id:`undo`,label:`undo`,note:`undoes_the_last_file_operation_in_this_session`},{id:`redo`,label:`redo`,note:`repeats_the_operation_that_was_just_undone`},{id:`delete`,label:`move_to_the_recycle_bin`,note:`moves_the_selection_to_the_recycle_bin`},{id:`deletePermanently`,label:`delete_permanently`,note:`deletes_the_selection_without_the_recycle_bin`},{id:`rename`,label:`rename`,note:`renames_the_single_selected_entry`},{id:`selectAll`,label:`select_all`,note:`selects_every_entry_in_the_current_folder`},{id:`invertSelection`,label:`invert_selection`,note:`selects_everything_that_is_not_selected`},{id:`open`,label:`open`,note:`opens_the_selected_folder_or_file`},{id:`newFolder`,label:`new_folder`,note:`creates_a_folder_in_the_current_directory`},{id:`properties`,label:`properties`,note:`opens_the_shell_properties_sheet`},{id:`iconsView`,label:`icons_view`,note:`switches_the_folder_to_the_grid_view`},{id:`detailsView`,label:`details_view`,note:`switches_the_folder_to_the_list_view`},{id:`terminal`,label:`open_terminal`,note:`opens_a_terminal_in_the_current_folder`},{id:`hidden`,label:`show_hidden_files`,note:`toggles_ordinary_hidden_files_for_this_session`},{id:`splitView`,label:`split_view`,note:`shows_the_next_file_tab_beside_the_current_one`},{id:`overview`,label:`overview`,note:`opens_the_overview_page`},{id:`recycleBin`,label:`recycle_bin`,note:`opens_the_recycle_bin_page`},{id:`gallery`,label:`gallery`,note:`opens_the_gallery_page`},{id:`settings`,label:`settings`,note:`opens_the_settings_page`},{id:`sidebar`,label:`focus_sidebar`,note:`hands_the_keyboard_to_the_sidebar_the_arrow_keys_then_walk_its_entries`},{id:`statusCenter`,label:`status_center`,note:`opens_the_panel_of_running_and_finished_operations`},{id:`historyPanel`,label:`history`,note:`opens_the_undo_history_of_this_session`},{id:`sharePanel`,label:`share`,note:`opens_the_folders_this_device_shares`},{id:`closedTabsPanel`,label:`recently_closed_tabs`,note:`opens_the_list_of_recently_closed_tabs`},{id:`viewMenu`,label:`view`,note:`opens_the_view_menu_of_the_current_folder`},{id:`fileTray`,label:`file_tray`,note:`shows_or_hides_the_file_tray`},{id:`detailsPanel`,label:`details_panel`,note:`shows_or_hides_the_details_panel`},{id:`openInNewTab`,label:`open_in_a_new_tab`,note:`hold_this_while_clicking_a_folder`}],mn=`globalHotkey`,hn=[...pn,{id:mn,label:`global_hotkey`,note:`brings_the_window_forward_from_anywhere_while_the_app_is_running_empty_means_no_global_shortcut`}],gn=`en`,_n=[{id:`system`,label:`follow_system`},{id:`light`,label:`light`},{id:`dark`,label:`dark`}],vn=[{id:`system`,label:`system`},{id:`24`,label:`k_24_hour`},{id:`12`,label:`k_12_hour`},{id:`custom`,label:`custom`}],yn=new Date(2026,10,5,16,8).getTime(),bn=`system`,xn={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},D=[{id:`application`,label:`application`},{id:`share-access`,label:`share_access`},{id:`startup`,label:`startup`},{id:`fonts`,label:`fonts`},{id:`time`,label:`time_format`},{id:`updates`,label:`updates`},{id:`colors`,label:`colors`},{id:`background`,label:`background`},{id:`safety`,label:`safety`},{id:`tags`,label:`tags`},{id:`files-view`,label:`files_view`},{id:`shortcuts`,label:`shortcuts`},{id:`memory`,label:`memory`},{id:`overview`,label:`overview`},{id:`gallery`,label:`gallery`},{id:`icons`,label:`icons`},{id:`extension-icons`,label:`icons_by_extension`},{id:`folder-index`,label:`folder_index`},{id:`indexing`,label:`index_tasks`},{id:`files`,label:`files`}],Sn={application:(0,w.jsx)(bt,{size:13}),share_access:(0,w.jsx)(Mt,{size:13}),startup:(0,w.jsx)(At,{size:13}),fonts:(0,w.jsx)(Tt,{size:13}),time_format:(0,w.jsx)(Vt,{size:13}),updates:(0,w.jsx)(y,{size:13}),colors:(0,w.jsx)(v,{size:13}),background:(0,w.jsx)(Ut,{size:13}),safety:(0,w.jsx)(Ht,{size:13}),tags:(0,w.jsx)(Pt,{size:13}),files_view:(0,w.jsx)(Ct,{size:13}),shortcuts:(0,w.jsx)(Dt,{size:13}),memory:(0,w.jsx)(Wt,{size:13}),overview:(0,w.jsx)(Ot,{size:13}),gallery:(0,w.jsx)(Lt,{size:13}),icons:(0,w.jsx)(St,{size:13}),icons_by_extension:(0,w.jsx)(It,{size:13}),folder_index:(0,w.jsx)(kt,{size:13}),index_tasks:(0,w.jsx)(Ft,{size:13}),files:(0,w.jsx)(b,{size:13})},Cn={application:[`language`,`pickerWindowWidth`,`pickerWindowHeight`,`sharePortMode`,`sharePort`,`linkPathMode`,`restoreTabs`,`systemPropertiesSheet`],"share-access":[`shareAccessEnabled`,`shareApprovalMinutes`,`shareDenialSeconds`,`shareHttps`],startup:[`startHidden`],fonts:[`fonts`],time:[`timeFormat`,`timeFormatPattern`,`relativeTime`,`relativeTimeWindowMinutes`],colors:[`accentColor`,`secondaryColor`,`themeMode`,`themePresets`],background:[`backgroundSource`,`backgroundCustom`,`backgroundBlur`,`backgroundSaturation`,`backgroundBrightness`,`backgroundLooks`],safety:[`protectedPaths`,`deleteDelaySeconds`],"files-view":[`defaultView`,`showCheckboxes`,`openOnSingleClick`,`confirmDelete`,`previewVideoAudio`,`previewVideoAutoplay`,`trayAutoShow`,`conflictNameStyle`,`conflictDefaultAction`,`conflictRememberChoice`],shortcuts:[`shortcuts`,`globalHotkey`],overview:[`recentLimit`],memory:[`memoryAutoTrim`,`memoryTrimThresholdMb`,`memoryTrimIntervalSeconds`,`memoryTrimOnTray`],gallery:[`galleryRoots`],icons:[`systemIcons`,`customFolderIcons`],"extension-icons":[`extensionIcons`],"folder-index":[`writeDirectoryIndex`,`directoryIndexBlacklist`]};function O({appInfo:e,focusSection:t,onSettingsChanged:n,find:r,onSearchMatches:a}){let u=i(),[pe,be]=(0,C.useState)([]),[p,xe]=(0,C.useState)(null),[je,Ie]=(0,C.useState)(!1),[h,g]=(0,C.useState)(null),Ue=ne(le(h?.themeMode)),[et,at]=(0,C.useState)(``),[mt,St]=(0,C.useState)(`file`),[Ct,Tt]=(0,C.useState)(!1),[v,Dt]=(0,C.useState)(null),[Ot,Mt]=(0,C.useState)(dt),[Nt,Pt]=(0,C.useState)(!1),[Ft,It]=(0,C.useState)(null),[b,Lt]=(0,C.useState)(null),[Rt,Vt]=(0,C.useState)(null),[Ht,Ut]=(0,C.useState)(!1),[Wt,en]=(0,C.useState)(null),[tn,nn]=(0,C.useState)(!1),[rn,an]=(0,C.useState)(null),[T,on]=(0,C.useState)(null),[sn,cn]=(0,C.useState)(``),[ln,un]=(0,C.useState)(!1),[dn,E]=(0,C.useState)([]),[pn,xn]=(0,C.useState)(null),[O,k]=(0,C.useState)(!1),[Pn,M]=(0,C.useState)(null),[_r,vr]=(0,C.useState)(``),[yr,br]=(0,C.useState)(qe),[xr,Sr]=(0,C.useState)(null),[Cr,wr]=(0,C.useState)(null),[Tr,Pr]=(0,C.useState)(``),[Fr,Ir]=(0,C.useState)(``),[Lr,Kr]=(0,C.useState)(null),[qr,vi]=(0,C.useState)({}),[q,xi]=(0,C.useState)(null),[J,Si]=(0,C.useState)(null),[Ci,wi]=(0,C.useState)(!1),[Ti,Ei]=(0,C.useState)(null),[Y,Di]=(0,C.useState)(null),[Oi,X]=(0,C.useState)(null),ki=(0,C.useRef)(!1),[Ai,ji]=(0,C.useState)(D[0].id),[Mi,Ni]=(0,C.useState)([]),[Pi,Fi]=(0,C.useState)(null),[Ii,Li]=(0,C.useState)(``),[Ri,zi]=(0,C.useState)(!1),[Bi,Vi]=(0,C.useState)(null),[Hi,Ui]=(0,C.useState)(null),[Wi,Gi]=(0,C.useState)(``),[Ki,qi]=(0,C.useState)(null),[Ji,Yi]=(0,C.useState)(null),[Xi,Zi]=(0,C.useState)(null),[Qi,$i]=(0,C.useState)(!1),[ea,ta]=(0,C.useState)(``),na=(0,C.useRef)(null),ra=(0,C.useRef)({}),Z=h?.defaultView??Se(),ia=h?.themePresets??[],aa=e?.platform===`windows`,oa=aa?b?b.registered&&b.pathMatches:!1:h?.archiveHandler??m().archiveHandler,sa=b?.registered??h?.archiveHandler??m().archiveHandler,ca=aa?Rt?Rt.registered&&Rt.pathMatches:!1:h?.defaultFileManager??m().defaultFileManager,la=aa?Ot.registered&&Ot.pathMatches:h?.linksEnabled??m().linksEnabled;yt(na,r??null,`section`,a??(()=>void 0),[h]),(0,C.useEffect)(()=>{let e=na.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){ji(D[D.length-1].id);return}let n=t+110,r=D[0].id;for(let{id:e}of D){let t=ra.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}ji(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let Q=e=>t=>{ra.current[e]=t},ua=(0,C.useRef)(null),da=(0,C.useRef)(null),fa=(0,C.useRef)(0),pa=()=>{if(fa.current!==0)return;let e=()=>{let t=na.current;if(!t||!da.current){fa.current=0;return}let n=Math.min(da.current.top,t.scrollHeight-t.clientHeight),r=n-t.scrollTop;if(Math.abs(r)<.5){t.scrollTop=n,da.current=null,fa.current=0;return}let i=Math.min(Math.abs(r)*.2,140);t.scrollTop+=Math.sign(r)*i,fa.current=requestAnimationFrame(e)};fa.current=requestAnimationFrame(e)},ma=e=>{let t=na.current,n=ra.current[e];t&&n&&(da.current={index:D.findIndex(t=>t.id===e),top:t.scrollTop+n.getBoundingClientRect().top-t.getBoundingClientRect().top},ji(e),pa())};(0,C.useEffect)(()=>{let e=ua.current,t=e?.querySelector(`[data-section="${Ai}"]`);if(!e||!t)return;let n=e.getBoundingClientRect(),r=t.getBoundingClientRect();r.top<n.top?e.scrollTop+=r.top-n.top-6:r.bottom>n.bottom&&(e.scrollTop+=r.bottom-n.bottom+6)},[Ai]),(0,C.useEffect)(()=>{let e=na.current;if(!e)return;let t=()=>{da.current=null};return e.addEventListener(`wheel`,t,{passive:!0}),e.addEventListener(`pointerdown`,t,{passive:!0}),()=>{e.removeEventListener(`wheel`,t),e.removeEventListener(`pointerdown`,t),cancelAnimationFrame(fa.current)}},[]);let ha=(0,C.useRef)(0),ga=e=>{let t=Math.sign(e.deltaY);if(t===0)return;let n=e.deltaMode!==0||Math.abs(e.deltaY)>=50,r=performance.now();if(!n&&r<ha.current)return;ha.current=r+220;let i=da.current?.index??D.findIndex(e=>e.id===Ai),a=Math.min(Math.max((i<0?0:i)+t,0),D.length-1);a!==(i<0?0:i)&&ma(D[a].id)};(0,C.useEffect)(()=>{t&&ma(t)},[t]),(0,C.useEffect)(()=>{se().then(e=>be(e.available),()=>be([]))},[]),(0,C.useEffect)(()=>{Qe().then(Ni,()=>Ni([]))},[]),(0,C.useEffect)(()=>{tt().then(Yi,()=>Yi(null))},[]),(0,C.useEffect)(()=>{ee().then(Si,()=>void 0)},[]),(0,C.useEffect)(()=>{ve().then(xe,()=>xe(null)),Ee().then(g,()=>g(null)),nt().then(Mt,()=>Mt(dt)),Ce().then(Lt,()=>Lt(null)),we().then(Vt,()=>Vt(null)),Jt().then(E,()=>E([]))},[]),(0,C.useEffect)(()=>{let e=()=>void st().then(Dt,()=>Dt(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let $=async e=>{if(!h)return;let t={...h,...e};Object.keys(e).every(e=>t[e]===h[e])||(g(t),ye(),g(await Me(t)),n())},_a=async e=>{if(!h)return;if(e===`startup`){await xo(`none`),await $({startHidden:!1});return}let t=Cn[e];if(!t?.length)return;let n=await Oe(),r=Object.fromEntries(t.map(e=>[e,n[e]]));await $(r)},va=e=>e?h?.backgroundLooks[e]??null:null,ya=e=>{let t=va(e);return{backgroundBlur:t?.blur??0,backgroundSaturation:t?.saturation??100,backgroundBrightness:t?.brightness??100}},ba=e=>{let t={...e.backgroundLooks},n=e.backgroundSource;return n?e.backgroundBlur===0&&e.backgroundSaturation===100&&e.backgroundBrightness===100?(delete t[n],t):(t[n]={blur:e.backgroundBlur,saturation:e.backgroundSaturation,brightness:e.backgroundBrightness},t):t},xa=e=>{h&&$({backgroundSource:e,backgroundLooks:ba(h),...ya(e)})},Sa=e=>{h&&$({...e,backgroundLooks:ba({...h,...e})})},Ca=()=>{if(!h)return;let e={...h.backgroundLooks};h.backgroundSource&&delete e[h.backgroundSource],$({backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,backgroundLooks:e})},wa=async e=>{let t=await Je(e);if(!t||!h)return;let n=h.backgroundCustom,r=`file:${t}`;await $({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:r,backgroundLooks:ba(h),...ya(r)})},Ta=async()=>{let e=ea.trim();if(!h||!ue(e))return;let t=h.backgroundCustom,n=`url:${e}`;ta(``),await $({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:n,backgroundLooks:ba(h),...ya(n)})},Ea=e=>{if(!h)return;let t=h.backgroundSource,n=t===`file:${e}`||t===`url:${e}`||t===e;$({backgroundCustom:h.backgroundCustom.filter(t=>t!==e),...n?{backgroundSource:null,backgroundLooks:ba(h),...ya(null)}:{}})},Da=async()=>{if(!h)return;let t=await Ye();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;h.protectedPaths.includes(r)||await $({protectedPaths:[...h.protectedPaths,r]})},Oa=()=>{let e=Tr.trim();h&&e&&!h.protectedPaths.includes(e)&&(Pr(``),$({protectedPaths:[...h.protectedPaths,e]}))},ka=()=>{if(!h||!xr)return;let e=xr.value.trim(),t=xr.from;Sr(null),e.length!==0&&e!==t&&$({protectedPaths:h.protectedPaths.map(n=>n===t?e:n)})},Aa=e=>{h&&$({protectedPaths:h.protectedPaths.filter(t=>t!==e)})},ja=async()=>{let e=await Ae();e.length>0&&await $({protectedPaths:e})},Ma=()=>{if(!h||!Cr)return;let e=Cr.value.trim(),t=Cr.from;wr(null),e&&e!==t&&$({directoryIndexBlacklist:h.directoryIndexBlacklist.map(n=>n===t?e:n)})},Na=()=>{let e=Fr.trim();h&&e&&!h.directoryIndexBlacklist.includes(e)&&(Ir(``),$({directoryIndexBlacklist:[...h.directoryIndexBlacklist,e]}))},Pa=async()=>{if(!h)return;let t=await Ye();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;h.directoryIndexBlacklist.includes(r)||await $({directoryIndexBlacklist:[...h.directoryIndexBlacklist,r]})},Fa=e=>{h&&$({directoryIndexBlacklist:h.directoryIndexBlacklist.filter(t=>t!==e)})},Ia=async()=>{let e=await Oe();$({directoryIndexBlacklist:e.directoryIndexBlacklist})},La=()=>{if(!h||Lr===null)return;let e=Lr.trim()||m().timeFormatPattern;Kr(null),e!==h.timeFormatPattern&&$({timeFormatPattern:e})},Ra=fe(h?.accentColor,he),za=fe(h?.secondaryColor,me),Ba=(e,t)=>{h&&(Ke(e),Ke(t),$({accentColor:e,secondaryColor:t}))},Va=async()=>{wi(!0),Ei(null);try{Si(await re())}catch{Ei(u(`could_not_check_for_updates`))}finally{wi(!1)}},Ha=async()=>{ki.current=!1,Ei(null),Di({phase:`changelog`,changelog:``,downloaded:0,total:0,percent:0});try{let e=await c();e.ok||Ua(e.error??``)}catch(e){Ua(e instanceof Error?e.message:String(e))}},Ua=e=>Di(t=>t&&{...t,phase:`error`,error:e}),Wa=()=>{Di(null),ae().catch(e=>Ei(e instanceof Error?e.message:String(e)))},Ga=async()=>{Di(e=>e&&{...e,phase:`installing`});try{let e=await o();e.ok||Ua(e.error??u(`the_update_failed`))}catch(e){Ua(e instanceof Error?e.message:String(e))}};(0,C.useEffect)(()=>d(e=>Di(t=>t&&{...t,phase:e.phase,downloaded:e.downloaded,total:e.total,percent:e.percent,error:e.error??t.error})),[]),(0,C.useEffect)(()=>ie(e=>Di(t=>t&&{...t,changelog:e.text})),[]),(0,C.useEffect)(()=>{Y?.phase!==`ready`||ki.current||(ki.current=!0,Ga())},[Y?.phase]);let Ka=async()=>{if(!h||!q)return;let e=q.name.trim()||`${q.accent.toUpperCase()} / ${q.secondary.toUpperCase()}`,t=[...h.themePresets,{name:e,accent:q.accent,secondary:q.secondary}];xi(null),await $({themePresets:t})},qa=async e=>{h&&await $({themePresets:h.themePresets.filter((t,n)=>n!==e)})},Ja=async()=>{let e=_r.trim();if(e&&!O){k(!0),M(null);try{E(await Xt(e,yr)),vr(``)}catch{M(u(`could_not_add_the_tag`))}finally{k(!1)}}},Ya=async(e,t)=>{E(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Zt(e,t)||M(u(`could_not_change_the_tag_s_color`))},Xa=async e=>{if(O)return;k(!0),M(null);let t=await Yt(e);E(await Jt()),t||M(`"${e}" is still used by a folder whose index could not be updated.`),k(!1)},Za=async()=>{let e=pn;if(!e||O)return;let t=e.value.trim();t.length===0||t===e.name?xn(null):(k(!0),M(null),await Qt(e.name,t)?(E(await Jt()),xn(null)):M(`Could not rename "${e.name}".`),k(!1))},Qa=async e=>{let t=new Set(Z.columns??Se().columns??[]);t.has(e)?t.delete(e):t.add(e);let n=Le.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await $({defaultView:{...Z,columns:n}})},$a=async()=>{if(Nt)return;let e=!la;Pt(!0),It(null);try{let t=await Ze(e),r=t.registered&&t.pathMatches;Mt(t),g(e=>e&&{...e,linksEnabled:r}),n(),r!==e&&It(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{It(`The request to Windows failed. Try again.`)}finally{Pt(!1)}},eo=async e=>{if(!je){Ie(!0);try{xe(await ke(e)),n()}finally{Ie(!1)}}},to=async()=>{if(tn||!h)return;let e=!ca;nn(!0),an(null);try{let t=await Pe(e);Vt(t);let r=aa?t.registered&&t.pathMatches:e;g(e=>e&&{...e,defaultFileManager:r}),n(),aa&&r!==e&&an(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{an(`The request to Windows failed. Try again.`)}finally{nn(!1)}},no=async()=>{if(!Ht){Ut(!0),en(null);try{let e=await Te();Lt(e);let t=e.registered&&e.pathMatches;g(e=>e&&{...e,archiveHandler:t}),n(),t||en(`Windows did not accept the archive registration. Try again.`)}catch{en(`The request to Windows failed. Try again.`)}finally{Ut(!1)}}},ro=async()=>{if(!Ht){Ut(!0),en(null);try{let e=await Ne();Lt(e),g(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&en(`The registration is still there. Try turning it off again.`)}catch{en(`The request to Windows failed. Try again.`)}finally{Ut(!1)}}},io=async(e,t)=>{if(!h)return;let n={...h.extensionIcons};t===null?delete n[e]:n[e]=t,await $({extensionIcons:n})};(0,C.useEffect)(()=>{He().then(Vi,()=>void 0)},[]);let ao=it(h?.shortcuts),oo=e=>e===mn?$e(h?.globalHotkey):ao[e],so=(0,C.useMemo)(()=>{let e=new Map;for(let{id:t}of hn)for(let n of t===mn?$e(h?.globalHotkey):ao[t]){let r=e.get(n)??[];r.push(t),e.set(n,r)}return e},[ao,h?.globalHotkey]),co=e=>{let t=new Set;for(let n of oo(e))for(let r of so.get(n)??[]){if(r===e)continue;let n=hn.find(e=>e.id===r);n&&t.add(u(n.label))}return[...t]},lo=(e,t)=>{$(e===mn?{globalHotkey:t.length>0?lt(t):null}:{shortcuts:{...h?.shortcuts,[e]:lt(t)}})},uo=(e,t)=>{let n=[...oo(e)];n.splice(t,1),lo(e,n)};(0,C.useEffect)(()=>{if(!T)return;let e=e=>[`control`,`alt`,`shift`,`meta`].includes(e.toLowerCase()),t=e=>{let t=[...oo(T.action)];T.index>=0?t[T.index]=e:t.includes(e)||t.push(e),on(null),cn(``),lo(T.action,t)},n=n=>{if(n.preventDefault(),n.stopPropagation(),n.key===`Escape`){on(null),cn(``);return}if(e(n.key)){T.action===`openInNewTab`?t(ht(n)):cn(ht(n));return}let r=ht(n);r&&t(r)},r=t=>{e(t.key)&&cn(``)};return window.addEventListener(`keydown`,n,!0),window.addEventListener(`keyup`,r,!0),()=>{window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`keyup`,r,!0)}},[T,h]);let fo=async e=>{await $({recentLimit:Math.min(Math.max(e,0),50)})},po=(e,t)=>{let n=t??qr[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};vi(t=>({...t,[e]:void 0})),$(i)},mo=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;Fi(null),await $({sharePortMode:`custom`,sharePort:n}),await We(n,`custom`)},ho=async e=>{let t=e===`custom`,n=t?h?.sharePort??m().sharePort:null;await $({sharePortMode:t?`custom`:`random`,sharePort:n}),await We(n,t?`custom`:`random`)};(0,C.useEffect)(()=>{ot().then(zi,()=>void 0)},[]);let go=async()=>{Ii.length!==0&&(zi(await Ve(Ii)),Li(``))},_o=async()=>{zi(await Ve(null))},vo=async()=>{let e=await Je([`.pfx`,`.p12`]);e&&(Ui(e),Gi(``),qi(null))},yo=async()=>{if(Hi)try{Vi(await Fe(Hi,Wi.length>0?Wi:null)),Ui(null),Gi(``),qi(null)}catch(e){qi(e instanceof Error?e.message:String(e))}},bo=async()=>{try{Vi(await Re()),qi(null)}catch(e){qi(e instanceof Error?e.message:String(e))}},xo=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;$i(!0),Zi(null);try{let e=await _t(t);Yi(e),Zi(e.error),e.error||await $({startupMode:t})}finally{$i(!1)}},So=async e=>{await $({galleryRoots:e.length>0?e:null})},Co=async()=>{let e=await Ye(),t=h?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await So([...t,e])},wo=async()=>{let e=et.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await io(e,mt),at(``))},To=async(e,t)=>{let n={...h?.fonts};t?n[e]=t:delete n[e],await $({fonts:n})};return(0,w.jsxs)(Mn,{children:[(0,w.jsxs)(Nn,{ref:na,children:[(0,w.jsxs)(j,{ref:Q(`application`),children:[(0,w.jsx)(A,{note:`the_build_its_yafm_links_and_what_reopens_at_launch`,title:`application`,onReset:()=>X({id:`application`,label:`application`})}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(L,{children:u(`version`)}),(0,w.jsx)(V,{children:e?`v${e.version}`:`—`})]}),(0,w.jsxs)(P,{children:[(0,w.jsx)(L,{children:u(`platform`)}),(0,w.jsx)(V,{children:e?.platform??`—`})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`language`)}),(0,w.jsx)(z,{children:u(`the_language_the_interface_uses_english_is_the_default_the_system_option_follows_the_operating_system`)})]}),(0,w.jsx)(I,{children:(0,w.jsx)(jn,{disabled:!h,onChange:e=>void $({language:e}),options:[bn,...pe.length>0?pe:[gn]],value:h?.language??gn})})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`picker_window_size`)}),(0,w.jsx)(z,{children:u(`the_size_the_folder_and_file_picker_opens_at_width_and_height_are_in_pixels`)})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(Nr,{inputMode:`numeric`,onBlur:e=>po(`width`,e.currentTarget.value),onChange:e=>vi(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:qr.width??String(h?.pickerWindowWidth??m().pickerWindowWidth)}),(0,w.jsx)(V,{children:`×`}),(0,w.jsx)(Nr,{inputMode:`numeric`,onBlur:e=>po(`height`,e.currentTarget.value),onChange:e=>vi(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:qr.height??String(h?.pickerWindowHeight??m().pickerWindowHeight)})]})]}),aa&&(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`windows_properties`)}),(0,w.jsx)(z,{children:u(`properties_opens_the_windows_page_with_its_security_and_details_tabs_instead_of_the_page_built_into_the_app`)})]}),(0,w.jsx)(I,{children:(0,w.jsx)(U,{$on:h?.systemPropertiesSheet??m().systemPropertiesSheet,disabled:!h,onClick:()=>void $({systemPropertiesSheet:!h?.systemPropertiesSheet}),type:`button`,children:(0,w.jsx)(W,{})})})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`web_server_port`)}),(0,w.jsx)(z,{children:u(`random_asks_the_operating_system_for_one_free_port_when_the_first_web_share_starts_and_every_web_share_keeps_using_it_custom_always_tries_the_port_below`)})]}),(0,w.jsx)(I,{children:(0,w.jsx)(Be,{disabled:!h,onChange:e=>void ho(e),options:[{value:`random`,label:u(`random`)},{value:`custom`,label:u(`custom_port`)}],value:h?.sharePortMode??m().sharePortMode,width:160})})]}),h?.sharePortMode===`custom`&&(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`custom_port`)}),(0,w.jsx)(z,{children:u(`a_number_from_1_to_65535_if_it_is_already_in_use_the_app_asks_for_a_free_port_instead`)})]}),(0,w.jsx)(I,{children:(0,w.jsx)(Nr,{inputMode:`numeric`,onBlur:e=>void mo(e.currentTarget.value),onChange:e=>Fi(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:Pi??(h?.sharePort?String(h.sharePort):``)})})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`link_paths`)}),(0,w.jsx)(z,{children:u(`relative_links_keep_working_when_the_link_and_its_target_move_together_absolute_links_always_store_the_full_target_path`)})]}),(0,w.jsx)(I,{children:(0,w.jsx)(Be,{disabled:!h,onChange:e=>void $({linkPathMode:e}),options:[{value:`relative`,label:u(`relative`)},{value:`absolute`,label:u(`absolute`)}],value:h?.linkPathMode??m().linkPathMode,width:160})})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`open_yafm_links`)}),(0,w.jsx)(z,{children:u(`registers_this_app_for_yafm_links_for_the_current_user_only_turning_it_on_writes_this_copy_s_path_starting_the_app_never_touches_the_registry`)}),Ot.registered&&!Ot.pathMatches&&(0,w.jsx)(B,{children:u(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:Ot.registeredPath??`?`})}),Ft&&(0,w.jsx)(B,{children:Ft})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(Mr,{$on:la,children:u(la?`active`:`off`)}),(0,w.jsx)(U,{$on:la,disabled:Nt,onClick:()=>void $a(),title:u(la?`stop_opening_yafm_links`:`open_yafm_links_with_this_app`),type:`button`,children:(0,w.jsx)(W,{})})]})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`use_as_the_default_file_manager`)}),(0,w.jsx)(z,{children:u(`registers_this_app_for_folder_opens_on_this_account_explorer_stays_available_from_the_context_menu_on_linux_this_sets_the_inode_directory_default`)}),Rt?.registered&&!Rt.pathMatches&&(0,w.jsx)(B,{children:u(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:Rt.registeredPath??`?`})}),rn&&(0,w.jsx)(B,{children:rn})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(Mr,{$on:ca,children:u(ca?`active`:`off`)}),(0,w.jsx)(U,{$on:ca,disabled:!h||tn,onClick:()=>void to(),title:u(ca?`stop_using_this_app_for_folders`:`use_this_app_for_folders`),type:`button`,children:(0,w.jsx)(W,{})})]})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`open_archives_with_this_app`)}),(0,w.jsx)(z,{children:u(`registers_this_app_for_zip_7z_rar_tar_and_the_other_archive_types_on_this_account_so_double_clicking_one_shows_it_as_a_folder_here_windows_may_still_ask_once_which_app_to_use`)}),(0,w.jsx)(z,{children:u(`when_this_is_off_opening_an_archive_uses_the_system_s_default_application_instead`)}),b?.registered&&!b.pathMatches&&(0,w.jsx)(B,{children:u(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:b.registeredPath??`?`})}),Wt&&(0,w.jsx)(B,{children:Wt})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(Mr,{$on:oa,children:u(oa?`active`:`off`)}),(0,w.jsxs)(K,{disabled:!h||Ht||oa,onClick:()=>void no(),type:`button`,children:[(0,w.jsx)(zt,{size:13}),u(`register`)]}),e?.platform===`windows`&&(0,w.jsxs)(K,{onClick:()=>void oe(`ms-settings:defaultapps`),type:`button`,children:[(0,w.jsx)(bt,{size:13}),u(`default_apps`)]}),(0,w.jsxs)(jr,{disabled:!h||Ht||!sa,onClick:()=>void ro(),type:`button`,children:[(0,w.jsx)(S,{size:13}),u(`unregister`)]})]})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`reopen_the_tabs_that_were_open`)}),(0,w.jsx)(z,{children:u(`keeps_the_tabs_and_the_folder_each_one_shows_so_they_come_back_after_a_restart_a_folder_passed_on_the_command_line_takes_over_instead`)})]}),(0,w.jsx)(U,{$on:h?.restoreTabs??m().restoreTabs,disabled:!h,onClick:()=>void $({restoreTabs:!h?.restoreTabs}),type:`button`,children:(0,w.jsx)(W,{})})]})]})]}),(0,w.jsxs)(j,{ref:Q(`share-access`),children:[(0,w.jsx)(A,{note:`share_access_note`,title:`share_access`,onReset:()=>X({id:`share-access`,label:`share_access`})}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsxs)(R,{children:[(0,w.jsx)(L,{children:u(`share_access_require_approval`)}),(0,w.jsx)(_,{})]}),(0,w.jsx)(z,{children:u(`share_access_note`)})]}),(0,w.jsx)(U,{$on:h?.shareAccessEnabled??m().shareAccessEnabled,disabled:!h,onClick:()=>void $({shareAccessEnabled:!(h?.shareAccessEnabled??m().shareAccessEnabled)}),type:`button`,children:(0,w.jsx)(W,{})})]}),(0,w.jsxs)(P,{children:[(0,w.jsx)(F,{children:(0,w.jsx)(L,{children:u(`share_access_approval_minutes`)})}),(0,w.jsx)(I,{children:(0,w.jsx)(Er,{max:1440,min:1,onChange:e=>void $({shareApprovalMinutes:Math.min(1440,Math.max(1,Number(e.target.value)||60))}),type:`number`,value:h?.shareApprovalMinutes??m().shareApprovalMinutes})})]}),(0,w.jsxs)(P,{children:[(0,w.jsx)(F,{children:(0,w.jsx)(L,{children:u(`share_access_denial_seconds`)})}),(0,w.jsx)(I,{children:(0,w.jsx)(Er,{max:3600,min:1,onChange:e=>void $({shareDenialSeconds:Math.min(3600,Math.max(1,Number(e.target.value)||10))}),type:`number`,value:h?.shareDenialSeconds??m().shareDenialSeconds})})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(R,{children:(0,w.jsx)(L,{children:u(`password`)})}),(0,w.jsx)(z,{children:u(`share_access_password_note`)}),Ri&&(0,w.jsx)(z,{children:u(`share_access_password_is_set`)})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(Dr,{autoComplete:`new-password`,onChange:e=>Li(e.target.value),placeholder:u(`password`),type:`password`,value:Ii}),(0,w.jsxs)(K,{disabled:Ii.length===0,onClick:()=>void go(),type:`button`,children:[(0,w.jsx)(jt,{size:13}),u(`save`)]}),Ri&&(0,w.jsxs)(jr,{onClick:()=>void _o(),type:`button`,children:[(0,w.jsx)(S,{size:13}),u(`clear`)]})]})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`share_access_https`)}),(0,w.jsx)(z,{children:u(`share_access_https_note`)})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(Mr,{$on:h?.shareHttps??m().shareHttps,children:h?.shareHttps?u(`active`):u(`off`)}),(0,w.jsx)(U,{$on:h?.shareHttps??m().shareHttps,disabled:!h,onClick:()=>void $({shareHttps:!(h?.shareHttps??m().shareHttps)}),title:h?.shareHttps?u(`share_access_https_off`):u(`share_access_https_on`),type:`button`,children:(0,w.jsx)(W,{})})]})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`share_access_certificate`)}),(0,w.jsx)(z,{children:Bi?`${Bi.subject} · ${u(`share_access_expires`)}: ${new Date(Bi.expiresAt).toLocaleString()}`:u(`share_access_certificate_self_signed`)}),Bi&&(0,w.jsx)(z,{children:Bi.selfSigned?u(`share_access_certificate_self_signed`):u(`share_access_certificate_imported`)}),Ki&&(0,w.jsx)(B,{children:Ki})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(H,{onClick:()=>void vo(),type:`button`,children:u(`share_access_import_certificate`)}),(0,w.jsx)(H,{onClick:()=>void bo(),type:`button`,children:u(`share_access_reset_certificate`)})]})]}),Hi&&(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`password`)}),(0,w.jsx)(z,{children:Hi})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(Dr,{autoComplete:`off`,onChange:e=>Gi(e.target.value),placeholder:u(`password`),type:`password`,value:Wi}),(0,w.jsx)(H,{onClick:()=>void yo(),type:`button`,children:u(`ok`)}),(0,w.jsx)(H,{onClick:()=>Ui(null),type:`button`,children:u(`cancel`)})]})]}),(0,w.jsx)(P,{children:(0,w.jsxs)(F,{children:[(0,w.jsx)(R,{children:(0,w.jsx)(L,{children:u(`devices`)})}),(0,w.jsx)(z,{children:u(`share_access_devices_note`)})]})}),(0,w.jsx)(wn,{approvalMinutes:h?.shareApprovalMinutes??m().shareApprovalMinutes,denialSeconds:h?.shareDenialSeconds??m().shareDenialSeconds})]})]}),(0,w.jsxs)(j,{ref:Q(`startup`),children:[(0,w.jsx)(A,{note:`how_the_app_joins_your_login_session_and_whether_it_opens_quietly_in_the_tray`,title:`startup`,onReset:()=>X({id:`startup`,label:`startup`})}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`start_with_the_computer`)}),(0,w.jsx)(z,{children:u(`a_shortcut_uses_the_startup_folder_or_xdg_autostart_a_task_uses_task_scheduler_or_a_systemd_user_service_which_starts_earlier_and_is_usually_faster`)}),Xi&&(0,w.jsx)(B,{children:Xi}),Ji&&!Ji.supported&&(0,w.jsx)(B,{children:u(`this_platform_cannot_create_a_per_user_startup_entry`)})]}),(0,w.jsx)(I,{children:(0,w.jsx)(Be,{disabled:!h||Qi||Ji!==null&&!Ji.supported,onChange:e=>void xo(e),options:[{value:`none`,label:u(`none`)},{value:`shortcut`,label:u(`shortcut`)},{value:`task`,label:u(`scheduled_task`)}],value:Ji?.mode??h?.startupMode??m().startupMode,width:170})})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`start_hidden_in_the_tray`)}),(0,w.jsx)(z,{children:u(`launch_straight_to_the_tray_icon_instead_of_showing_the_window_the_tray_menu_opens_it_again`)})]}),(0,w.jsx)(I,{children:(0,w.jsx)(U,{$on:h?.startHidden??m().startHidden,disabled:!h,onClick:()=>void $({startHidden:!h?.startHidden}),type:`button`,children:(0,w.jsx)(W,{})})})]})]})]}),(0,w.jsxs)(j,{ref:Q(`fonts`),children:[(0,w.jsx)(A,{note:`choose_the_font_each_part_of_the_interface_uses_every_font_installed_on_this_system_is_listed_each_one_drawn_in_its_own_face`,title:`fonts`,onReset:()=>X({id:`fonts`,label:`fonts`})}),(0,w.jsxs)(N,{children:[rt.map(e=>(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(e.label)}),(0,w.jsx)(z,{children:u(`falls_back_to_font_until_another_family_is_chosen`,{font:u(e.fallback)})})]}),(0,w.jsx)(I,{children:(0,w.jsx)($t,{defaultLabel:u(e.fallback),disabled:!h,fonts:Mi,onChange:t=>void To(e.id,t),sample:e.sample,value:h?.fonts?.[e.id]??null})})]},e.id)),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`reset`)}),(0,w.jsx)(z,{children:u(`back_to_the_app_s_built_in_font_for_every_role`)})]}),(0,w.jsx)(I,{children:(0,w.jsxs)(K,{onClick:()=>void $({fonts:{}}),type:`button`,children:[(0,w.jsx)(y,{size:13}),u(`reset`)]})})]})]})]}),(0,w.jsxs)(j,{ref:Q(`time`),children:[(0,w.jsx)(A,{note:`every_timestamp_in_the_interface_uses_this_format_follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`,title:`time_format`,onReset:()=>X({id:`time`,label:`time_format`})}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(In,{children:[(0,w.jsxs)(Ln,{children:[(0,w.jsx)(L,{children:u(`format`)}),(0,w.jsx)(z,{children:u(`follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`)})]}),(0,w.jsx)(ii,{children:vn.map(e=>(0,w.jsx)(ai,{$active:(h?.timeFormat??m().timeFormat)===e.id,onClick:()=>void $({timeFormat:e.id}),type:`button`,children:u(e.label)},e.id))}),(h?.timeFormat??m().timeFormat)===`custom`&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(oi,{"aria-label":u(`pattern`),onBlur:La,onChange:e=>Kr(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),La()):e.key===`Escape`&&Kr(null)},spellCheck:!1,value:Lr??h?.timeFormatPattern??m().timeFormatPattern}),(0,w.jsx)(z,{children:u(`tokens_yyyy_year_mm_month_dd_day_hh_24_hour_mm_minute_ss_second_hh_12_hour_and_a_am_pm_other_characters_are_copied`)})]}),(0,w.jsxs)(si,{children:[(0,w.jsx)(`span`,{children:u(`preview`)}),(0,w.jsx)(`code`,{children:de(yn,h?.timeFormat,Lr??h?.timeFormatPattern)})]})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`relative_times`)}),(0,w.jsx)(z,{children:u(`shows_recent_timestamps_as_seconds_and_minutes_ago_and_keeps_them_counting`)})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(Mr,{$on:h?.relativeTime??m().relativeTime,children:h?.relativeTime??m().relativeTime?u(`active`):u(`off`)}),(0,w.jsx)(U,{$on:h?.relativeTime??m().relativeTime,disabled:!h,onClick:()=>void $({relativeTime:!(h?.relativeTime??m().relativeTime)}),title:u(`show_recent_timestamps_as_seconds_and_minutes_ago`),type:`button`,children:(0,w.jsx)(W,{})})]})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`switch_to_the_full_time_after`)}),(0,w.jsx)(z,{children:u(`older_timestamps_use_the_format_above_instead_of_a_relative_one`)})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(G,{disabled:!(h?.relativeTime??m().relativeTime),max:1440,min:1,onChange:e=>void $({relativeTimeWindowMinutes:Number(e.target.value)}),step:1,type:`range`,value:h?.relativeTimeWindowMinutes??m().relativeTimeWindowMinutes}),(0,w.jsxs)(V,{children:[h?.relativeTimeWindowMinutes??m().relativeTimeWindowMinutes,` min`]})]})]})]})]}),(0,w.jsxs)(j,{ref:Q(`updates`),children:[(0,w.jsx)(A,{note:`the_running_build_and_the_newest_one_published`,title:`updates`}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(L,{children:u(`current_version`)}),(0,w.jsx)(V,{children:e?`v${e.version}`:`—`})]}),(0,w.jsxs)(P,{children:[(0,w.jsx)(L,{children:u(`latest_version`)}),(0,w.jsx)(V,{children:J?`v${J.latest}`:`—`})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:J?J.available?u(`version_version_is_available`,{version:J.latest}):u(`you_are_on_the_latest_version`):u(`not_checked_yet`)}),(0,w.jsx)(z,{children:J?.available?u(`the_installer_downloads_installs_itself_and_closes_the_app`):u(`reads_the_version_file_the_release_workflow_publishes`)})]}),(0,w.jsxs)(I,{children:[J?.available&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(K,{onClick:()=>void te(),type:`button`,children:[(0,w.jsx)(xt,{size:13}),u(`open_release_page`)]}),aa&&(0,w.jsxs)(K,{disabled:Y!==null,onClick:()=>void Ha(),type:`button`,children:[(0,w.jsx)(Et,{size:13}),u(`download_and_install`)]})]}),(0,w.jsxs)(K,{disabled:Ci||Y!==null,onClick:()=>void Va(),type:`button`,children:[(0,w.jsx)(y,{size:13}),u(Ci?`checking`:`check_for_updates`)]}),(0,w.jsxs)(K,{onClick:()=>void s(),type:`button`,children:[(0,w.jsx)(wt,{size:13}),u(`open_log_folder`)]})]})]}),Ti&&(0,w.jsx)(P,{children:(0,w.jsx)(B,{children:Ti})})]})]}),(0,w.jsxs)(j,{ref:Q(`colors`),children:[(0,w.jsx)(A,{note:`the_accent_and_highlight_colours_the_whole_window_uses`,title:`colors`,onReset:()=>X({id:`colors`,label:`colors`})}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(In,{children:[(0,w.jsxs)(Ln,{children:[(0,w.jsx)(L,{children:u(`theme`)}),(0,w.jsx)(z,{children:u(`follow_the_operating_system_or_always_use_the_light_or_dark_palette`)})]}),(0,w.jsx)(ii,{children:_n.map(e=>(0,w.jsx)(ai,{$active:(h?.themeMode??m().themeMode)===e.id,onClick:()=>void $({themeMode:e.id}),type:`button`,children:u(e.label)},e.id))})]}),(0,w.jsxs)(In,{children:[(0,w.jsxs)(Ln,{children:[(0,w.jsx)(L,{children:u(`presets`)}),(0,w.jsx)(z,{children:u(`one_click_changes_the_accent_and_the_highlight_together`)})]}),(0,w.jsxs)(Rn,{children:[Ge.map(e=>(0,w.jsxs)(zn,{$on:Ra.toLowerCase()===e.accent&&za.toLowerCase()===e.secondary,onClick:()=>Ba(e.accent,e.secondary),title:`${u(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,w.jsxs)(Kn,{children:[(0,w.jsx)(`i`,{style:{background:e.accent}}),(0,w.jsx)(`i`,{style:{background:e.secondary}})]}),(0,w.jsx)(Bn,{children:u(e.name)})]},e.name)),ia.map((e,t)=>(0,w.jsxs)(Vn,{children:[(0,w.jsxs)(zn,{$on:Ra.toLowerCase()===e.accent.toLowerCase()&&za.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>Ba(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,w.jsxs)(Kn,{children:[(0,w.jsx)(`i`,{style:{background:e.accent}}),(0,w.jsx)(`i`,{style:{background:e.secondary}})]}),(0,w.jsx)(Bn,{children:e.name})]}),(0,w.jsx)(Hn,{onClick:()=>void qa(t),title:u(`remove_preset`),type:`button`,children:(0,w.jsx)(S,{size:9})})]},`${e.name}-${t}`)),q?(0,w.jsxs)(Wn,{children:[(0,w.jsxs)(Kn,{children:[(0,w.jsx)(`i`,{style:{background:q.accent}}),(0,w.jsx)(`i`,{style:{background:q.secondary}})]}),(0,w.jsx)(Gn,{autoFocus:!0,maxLength:24,onChange:e=>xi({...q,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Ka()):e.key===`Escape`&&(e.preventDefault(),xi(null))},placeholder:u(`preset_name`),spellCheck:!1,value:q.name}),(0,w.jsxs)(H,{onClick:()=>void Ka(),type:`button`,children:[(0,w.jsx)(jt,{size:13}),u(`save`)]}),(0,w.jsxs)(H,{onClick:()=>xi(null),type:`button`,children:[(0,w.jsx)(S,{size:13}),u(`cancel`)]})]}):(0,w.jsxs)(Un,{disabled:!h,onClick:()=>xi({name:``,accent:Ra,secondary:za}),title:u(`save_the_current_colours_as_a_preset`),type:`button`,children:[(0,w.jsx)(x,{size:12}),u(`add_preset`)]})]})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`accent_color`)}),(0,w.jsx)(z,{children:u(`buttons_selections_focus_rings_and_active_navigation`)})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(ze,{ariaLabel:u(`accent_color`),disabled:!h,variant:`well`,value:Ra,onChange:e=>void $({accentColor:e})}),(0,w.jsx)(Ar,{children:Ra.toUpperCase()})]})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`secondary_color`)}),(0,w.jsx)(z,{children:u(`gradients_highlights_and_the_second_end_of_the_accent_ramp`)})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(ze,{ariaLabel:u(`secondary_color`),disabled:!h,variant:`well`,value:za,onChange:e=>void $({secondaryColor:e})}),(0,w.jsx)(Ar,{children:za.toUpperCase()})]})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`reset_colors`)}),(0,w.jsx)(z,{children:u(`returns_the_interface_to_the_default_blue_and_indigo_theme`)})]}),(0,w.jsx)(I,{children:(0,w.jsxs)(H,{disabled:!h,onClick:()=>{Ke(Ra),Ke(za),$({accentColor:null,secondaryColor:null})},type:`button`,children:[(0,w.jsx)(y,{size:13}),u(`reset`)]})})]})]})]}),(0,w.jsxs)(j,{ref:Q(`background`),children:[(0,w.jsx)(A,{note:`a_picture_or_video_behind_the_whole_window_from_the_title_bar_to_the_bottom`,title:`background`,onReset:()=>X({id:`background`,label:`background`})}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(In,{children:[(0,w.jsxs)(Ln,{children:[(0,w.jsx)(L,{children:u(`wallpaper`)}),(0,w.jsx)(z,{children:u(`none_keeps_the_normal_dark_surface_every_built_in_concept_comes_in_the_app_s_colour_presets_your_own_pictures_sv_gs_and_videos_are_kept_in_the_gallery`)})]}),(0,w.jsx)(Wr,{children:(0,w.jsx)(Gr,{$active:!h?.backgroundSource,onClick:()=>xa(null),title:u(`none`),type:`button`,children:(0,w.jsx)(Xr,{children:u(`none`)})})}),(0,w.jsxs)(Vr,{children:[Xe.map(e=>(0,w.jsxs)(Hr,{children:[(0,w.jsx)(Ur,{children:u(e.name)}),(0,w.jsx)(Wr,{children:e.variants.map(t=>(0,w.jsx)(Gr,{$active:h?.backgroundSource===t.id,onClick:()=>xa(t.id),title:`${u(e.name)} · ${u(t.preset)}`,type:`button`,children:(0,w.jsx)(`img`,{alt:``,src:Ue===`light`?t.lightUrl:t.url})},t.id))})]},e.id)),(0,w.jsxs)(Hr,{children:[(0,w.jsx)(Ur,{children:u(`motion`)}),(0,w.jsx)(Wr,{children:gt.map(e=>(0,w.jsxs)(Gr,{$active:h?.backgroundSource===e.id,onClick:()=>xa(e.id),title:u(e.name),type:`button`,children:[(0,w.jsx)(`img`,{alt:``,src:e.poster}),(0,w.jsx)(Jr,{children:(0,w.jsx)(Gt,{size:11})})]},e.id))})]}),(0,w.jsxs)(Hr,{children:[(0,w.jsx)(Ur,{children:u(`custom`)}),(0,w.jsxs)(Wr,{children:[(h?.backgroundCustom??[]).map(e=>(0,w.jsx)(An,{active:h?.backgroundSource===`file:${e}`||h?.backgroundSource===`url:${e}`||h?.backgroundSource===e,onRemove:()=>Ea(e),onSelect:()=>xa(ue(e)?`url:${e}`:`file:${e}`),path:e},e)),(0,w.jsxs)(Yr,{onClick:()=>void wa([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,w.jsx)(x,{size:12}),u(`image_2`)]}),(0,w.jsxs)(Yr,{onClick:()=>void wa([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,w.jsx)(x,{size:12}),u(`video`)]})]})]})]})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`image_or_video_url`)}),(0,w.jsx)(z,{children:u(`paste_a_direct_http_s_link_the_picture_or_video_is_loaded_from_the_network_each_time_the_window_starts`)})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(Nr,{onChange:e=>ta(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Ta()},placeholder:`https://…`,value:ea}),(0,w.jsxs)(H,{disabled:!ue(ea),onClick:()=>void Ta(),type:`button`,children:[(0,w.jsx)(x,{size:13}),u(`add`)]})]})]}),(0,w.jsxs)(P,{children:[(0,w.jsx)(L,{children:u(`blur`)}),(0,w.jsxs)(I,{children:[(0,w.jsx)(G,{max:40,min:0,onChange:e=>Sa({backgroundBlur:Number(e.target.value)}),type:`range`,value:h?.backgroundBlur??m().backgroundBlur}),(0,w.jsxs)(V,{children:[h?.backgroundBlur??m().backgroundBlur,`px`]})]})]}),(0,w.jsxs)(P,{children:[(0,w.jsx)(L,{children:u(`saturation`)}),(0,w.jsxs)(I,{children:[(0,w.jsx)(G,{max:200,min:0,onChange:e=>Sa({backgroundSaturation:Number(e.target.value)}),type:`range`,value:h?.backgroundSaturation??m().backgroundSaturation}),(0,w.jsxs)(V,{children:[h?.backgroundSaturation??m().backgroundSaturation,`%`]})]})]}),(0,w.jsxs)(P,{children:[(0,w.jsx)(L,{children:u(`brightness`)}),(0,w.jsxs)(I,{children:[(0,w.jsx)(G,{max:150,min:40,onChange:e=>Sa({backgroundBrightness:Number(e.target.value)}),type:`range`,value:h?.backgroundBrightness??m().backgroundBrightness}),(0,w.jsxs)(V,{children:[h?.backgroundBrightness??m().backgroundBrightness,`%`]})]})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`reset_the_look`)}),(0,w.jsx)(z,{children:u(`returns_this_background_to_the_default_blur_saturation_and_brightness`)})]}),(0,w.jsx)(I,{children:(0,w.jsxs)(H,{disabled:!h||h.backgroundBlur===0&&h.backgroundSaturation===100&&h.backgroundBrightness===100&&!va(h.backgroundSource),onClick:Ca,type:`button`,children:[(0,w.jsx)(y,{size:13}),u(`reset`)]})})]})]})]}),(0,w.jsxs)(j,{ref:Q(`safety`),children:[(0,w.jsx)(A,{note:`deleting_moving_renaming_or_writing_to_a_protected_folder_anything_inside_a_recursive_entry_or_a_folder_that_contains_one_always_waits_for_an_explicit_confirmation`,title:`safety`,onReset:()=>X({id:`safety`,label:`safety`})}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(In,{children:[(0,w.jsxs)(Ln,{children:[(0,w.jsx)(L,{children:u(`protected_folders`)}),(0,w.jsx)(z,{children:u(`rules_are_full_path_globs_stays_inside_one_name_crosses_folders_and_matches_one_character_a_rule_without_a_folder_part_such_as_log_applies_to_that_name_at_any_depth_vars_vars_and_are_expanded_first`)})]}),(0,w.jsx)(Zr,{children:(h?.protectedPaths??[]).map(e=>(0,w.jsxs)(Qr,{children:[(0,w.jsx)($r,{"aria-label":u(`protected_path`),onBlur:ka,onChange:t=>Sr({from:e,value:t.target.value}),onFocus:()=>Sr({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),ka()):e.key===`Escape`&&Sr(null)},spellCheck:!1,value:xr?.from===e?xr.value:e}),(0,w.jsx)(ei,{onClick:()=>Aa(e),title:u(`remove`),type:`button`,children:(0,w.jsx)(S,{size:10})})]},e))}),(0,w.jsxs)(ni,{children:[(0,w.jsx)(ri,{"aria-label":u(`new_protected_rule`),onChange:e=>Pr(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Oa())},placeholder:`*.log`,spellCheck:!1,value:Tr}),(0,w.jsxs)(H,{onClick:Oa,type:`button`,children:[(0,w.jsx)(x,{size:13}),u(`add_the_rule`)]})]}),(0,w.jsxs)(ti,{children:[(0,w.jsxs)(H,{onClick:()=>void ja(),type:`button`,children:[(0,w.jsx)(y,{size:13}),u(`restore_defaults`)]}),(0,w.jsxs)(H,{onClick:()=>void Da(),type:`button`,children:[(0,w.jsx)(wt,{size:13}),u(`add_folder_2`)]})]})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`confirmation_delay`)}),(0,w.jsx)(z,{children:u(`the_delete_button_in_the_protected_folder_dialog_stays_disabled_for_this_many_seconds_at_least_2`)})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(G,{max:30,min:2,onChange:e=>void $({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:h?.deleteDelaySeconds??m().deleteDelaySeconds}),(0,w.jsxs)(V,{children:[h?.deleteDelaySeconds??m().deleteDelaySeconds,`s`]})]})]})]})]}),(0,w.jsxs)(j,{ref:Q(`tags`),children:[(0,w.jsx)(A,{note:`every_tag_in_the_catalogue_add_rename_recolour_or_remove_them_here`,title:`tags`}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsxs)(R,{children:[(0,w.jsx)(ze,{ariaLabel:u(`color_of_the_new_tag`),value:yr,onChange:br}),(0,w.jsx)(Nr,{onChange:e=>vr(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ja())},placeholder:u(`new_tag`),spellCheck:!1,value:_r})]}),(0,w.jsx)(z,{children:u(`add_a_tag_here_it_is_available_in_every_folder`)})]}),(0,w.jsx)(I,{children:(0,w.jsxs)(H,{disabled:O||_r.trim().length===0,onClick:()=>void Ja(),type:`button`,children:[(0,w.jsx)(x,{size:13}),u(`add`)]})})]}),Pn&&(0,w.jsx)(P,{children:(0,w.jsx)(B,{children:Pn})}),dn.length===0&&(0,w.jsx)(P,{children:(0,w.jsx)(z,{children:u(`no_tags_yet_add_one_below_it_is_available_in_every_folder`)})}),dn.map(e=>(0,w.jsx)(P,{children:pn?.name===e.name?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(F,{children:[(0,w.jsxs)(R,{children:[(0,w.jsx)(ze,{ariaLabel:u(`color_of_tag`,{tag:e.name}),disabled:O,title:u(`change_this_tag_s_color`),value:e.color??`#64748b`,onChange:t=>void Ya(e.name,t)}),(0,w.jsx)(kr,{autoFocus:!0,disabled:O,onChange:t=>xn({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Za()):e.key===`Escape`&&(e.preventDefault(),xn(null))},value:pn.value})]}),(0,w.jsx)(z,{children:u(`press_enter_to_save_escape_to_cancel`)})]}),(0,w.jsxs)(I,{children:[(0,w.jsxs)(H,{disabled:O,onClick:()=>void Za(),type:`button`,children:[(0,w.jsx)(jt,{size:13}),u(`save`)]}),(0,w.jsxs)(H,{disabled:O,onClick:()=>xn(null),type:`button`,children:[(0,w.jsx)(S,{size:13}),u(`cancel`)]})]})]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(F,{children:[(0,w.jsxs)(R,{children:[(0,w.jsx)(ze,{ariaLabel:u(`color_of_tag`,{tag:e.name}),disabled:O,title:u(`change_this_tag_s_color`),value:e.color??`#64748b`,onChange:t=>void Ya(e.name,t)}),(0,w.jsx)(L,{children:e.name})]}),(0,w.jsx)(z,{children:_e(u,e.folders,`used_in_1_folder_renaming_or_removing_it_updates_that_folder_s_index`,`used_in_count_folders_renaming_or_removing_it_updates_those_folders_indexes`)})]}),(0,w.jsxs)(I,{children:[(0,w.jsxs)(H,{disabled:O,onClick:()=>xn({name:e.name,value:e.name}),type:`button`,children:[(0,w.jsx)(Bt,{size:13}),u(`edit`)]}),(0,w.jsxs)(jr,{disabled:O,onClick:()=>void Xa(e.name),type:`button`,children:[(0,w.jsx)(Kt,{size:13}),u(`remove`)]})]})]})},e.name))]})]}),(0,w.jsxs)(j,{ref:Q(`files-view`),children:[(0,w.jsx)(A,{note:`the_defaults_every_folder_starts_with_a_folder_can_still_override_them`,title:`files_view`,global:!0,onReset:()=>X({id:`files-view`,label:`files_view`})}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`default_view`)}),(0,w.jsx)(z,{children:u(`the_mode_every_folder_starts_with_a_folder_can_still_remember_its_own_list_or_grid_mode_from_the_title_bar`)})]}),(0,w.jsx)(I,{children:(0,w.jsxs)(zr,{children:[(0,w.jsx)(Br,{$on:Z.mode===`list`,onClick:()=>void $({defaultView:{...Z,mode:`list`}}),type:`button`,children:u(`list`)}),(0,w.jsx)(Br,{$on:Z.mode===`grid`,onClick:()=>void $({defaultView:{...Z,mode:`grid`}}),type:`button`,children:u(`grid`)})]})})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`list_icon_size`)}),(0,w.jsx)(z,{children:u(`the_icon_in_the_list_rows`)})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(G,{max:48,min:16,onChange:e=>void $({defaultView:{...Z,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Z.iconSize}),(0,w.jsxs)(V,{children:[Z.iconSize,`px`]})]})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`grid_size`)}),(0,w.jsx)(z,{children:u(`the_height_of_a_grid_tile_the_icon_inside_follows_it`)})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(G,{max:260,min:100,onChange:e=>void $({defaultView:{...Z,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Z.gridSize}),(0,w.jsxs)(V,{children:[Z.gridSize,`px`]})]})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsxs)(R,{children:[(0,w.jsx)(L,{children:u(`selection_checkboxes`)}),(0,w.jsx)(_,{})]}),(0,w.jsx)(z,{children:u(`show_a_checkbox_before_every_name_the_way_explorer_does_checked_entries_can_be_copied_cut_or_deleted_together`)})]}),(0,w.jsx)(U,{$on:h?.showCheckboxes??m().showCheckboxes,disabled:!h,onClick:()=>void $({showCheckboxes:!(h?.showCheckboxes??m().showCheckboxes)}),type:`button`,children:(0,w.jsx)(W,{})})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsxs)(R,{children:[(0,w.jsx)(L,{children:u(`open_with_a_single_click`)}),(0,w.jsx)(_,{})]}),(0,w.jsx)(z,{children:u(`off_means_double_click_like_explorer_s_default_the_checkbox_still_only_selects_so_a_click_on_it_never_opens_the_entry`)})]}),(0,w.jsx)(U,{$on:h?.openOnSingleClick??m().openOnSingleClick,disabled:!h,onClick:()=>void $({openOnSingleClick:!(h?.openOnSingleClick??m().openOnSingleClick)}),type:`button`,children:(0,w.jsx)(W,{})})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsxs)(R,{children:[(0,w.jsx)(L,{children:u(`open_the_file_tray_while_dragging`)}),(0,w.jsx)(_,{})]}),(0,w.jsx)(z,{children:u(`the_tray_appears_when_a_drag_starts_and_closes_again_if_it_is_still_empty_off_leaves_it_to_the_title_bar_button`)})]}),(0,w.jsx)(U,{$on:h?.trayAutoShow??m().trayAutoShow,disabled:!h,onClick:()=>void $({trayAutoShow:!(h?.trayAutoShow??m().trayAutoShow)}),type:`button`,children:(0,w.jsx)(W,{})})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsxs)(R,{children:[(0,w.jsx)(L,{children:u(`confirm_before_deleting`)}),(0,w.jsx)(_,{})]}),(0,w.jsx)(z,{children:u(`asks_before_moving_items_to_the_recycle_bin_shift_del_always_asks_because_that_deletes_permanently`)})]}),(0,w.jsx)(U,{$on:h?.confirmDelete??m().confirmDelete,disabled:!h,onClick:()=>void $({confirmDelete:!(h?.confirmDelete??m().confirmDelete)}),type:`button`,children:(0,w.jsx)(W,{})})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsxs)(R,{children:[(0,w.jsx)(L,{children:u(`automatic_rename_suffix`)}),(0,w.jsx)(_,{})]}),(0,w.jsx)(z,{children:u(`the_suffix_added_when_a_copy_or_a_new_item_would_have_the_same_name`)})]}),(0,w.jsx)(I,{children:(0,w.jsx)(Be,{disabled:!h,onChange:e=>void $({conflictNameStyle:e}),options:[{value:`space_parentheses`,label:`Test (1).txt`},{value:`underscore`,label:`Test_1.txt`},{value:`dot`,label:`Test.1.txt`}],value:h?.conflictNameStyle??m().conflictNameStyle,width:160})})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsxs)(R,{children:[(0,w.jsx)(L,{children:u(`default_conflict_handling`)}),(0,w.jsx)(_,{})]}),(0,w.jsx)(z,{children:u(`what_the_conflict_dialog_starts_with_choose_nothing_to_force_a_decision`)})]}),(0,w.jsx)(I,{children:(0,w.jsx)(Be,{disabled:!h,onChange:e=>void $({conflictDefaultAction:e}),options:[{value:`none`,label:u(`no_action_selected`)},{value:`overwrite`,label:u(`overwrite`)},{value:`rename`,label:u(`rename`)},{value:`skip`,label:u(`skip`)}],value:h?.conflictDefaultAction??m().conflictDefaultAction,width:160})})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsxs)(R,{children:[(0,w.jsx)(L,{children:u(`remember_the_last_conflict_choice`)}),(0,w.jsx)(_,{})]}),(0,w.jsx)(z,{children:u(`the_next_conflict_dialog_starts_with_the_answer_you_used_last_time`)})]}),(0,w.jsx)(I,{children:(0,w.jsx)(U,{$on:h?.conflictRememberChoice??m().conflictRememberChoice,disabled:!h,onClick:()=>void $({conflictRememberChoice:!(h?.conflictRememberChoice??m().conflictRememberChoice)}),type:`button`,children:(0,w.jsx)(W,{})})})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsxs)(R,{children:[(0,w.jsx)(L,{children:u(`play_audio_in_video_previews`)}),(0,w.jsx)(_,{})]}),(0,w.jsx)(z,{children:u(`video_previews_play_muted_by_default_turn_this_on_to_hear_their_audio_while_the_details_panel_is_open`)})]}),(0,w.jsx)(U,{$on:h?.previewVideoAudio??m().previewVideoAudio,disabled:!h,onClick:()=>void $({previewVideoAudio:!(h?.previewVideoAudio??m().previewVideoAudio)}),type:`button`,children:(0,w.jsx)(W,{})})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsxs)(R,{children:[(0,w.jsx)(L,{children:u(`autoplay_video_previews`)}),(0,w.jsx)(_,{})]}),(0,w.jsx)(z,{children:u(`off_by_default_turn_this_on_to_start_a_video_as_soon_as_its_details_panel_opens_the_play_button_still_works_when_it_is_off`)})]}),(0,w.jsx)(U,{$on:h?.previewVideoAutoplay??m().previewVideoAutoplay,disabled:!h,onClick:()=>void $({previewVideoAutoplay:!(h?.previewVideoAutoplay??m().previewVideoAutoplay)}),type:`button`,children:(0,w.jsx)(W,{})})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsxs)(R,{children:[(0,w.jsx)(L,{children:u(`preview_panel_under_the_list`)}),(0,w.jsx)(_,{})]}),(0,w.jsx)(z,{children:u(`shows_the_pictures_videos_and_documents_the_shell_can_preview_as_grid_tiles_below_the_list_the_tiles_follow_the_grid_size_and_the_panel_only_appears_in_list_mode`)})]}),(0,w.jsx)(U,{$on:Z.showImages??!0,onClick:()=>void $({defaultView:{...Z,showImages:!(Z.showImages??!0)}}),type:`button`,children:(0,w.jsx)(W,{})})]}),(0,w.jsx)(P,{children:(0,w.jsxs)(F,{children:[(0,w.jsxs)(R,{children:[(0,w.jsx)(L,{children:u(`columns`)}),(0,w.jsx)(_,{})]}),(0,w.jsx)(z,{children:u(`shown_in_every_folder_changing_them_changes_all_folders_at_once`)})]})}),(0,w.jsx)(P,{children:(0,w.jsxs)(ci,{children:[Le.map(e=>(0,w.jsxs)(li,{children:[(0,w.jsx)(`input`,{checked:(Z.columns??[]).includes(e.id),onChange:()=>void Qa(e.id),type:`checkbox`}),(0,w.jsx)(`span`,{children:u(e.label)})]},e.id)),(0,w.jsxs)(li,{children:[(0,w.jsx)(`input`,{checked:(Z.columns??[]).includes(`linkTarget`),onChange:()=>void Qa(`linkTarget`),type:`checkbox`}),(0,w.jsx)(`span`,{children:u(`link_target_after_the_name`)})]})]})})]}),(0,w.jsxs)(yi,{children:[u(`the_default_view_list_icon_size_and_grid_size_are_only_defaults_a_folder_can_still_remember_its_own_from_the_title_bar`),` `,(0,w.jsx)(_,{}),` `,u(`anything_marked_as_global_always_applies_to_every_folder`)]})]}),(0,w.jsxs)(j,{ref:Q(`shortcuts`),children:[(0,w.jsx)(A,{note:`every_action_can_hold_several_combinations_click_one_to_record_it_again_add_one_with_the_plus_and_drop_one_with_the_cross`,title:`shortcuts`,onReset:()=>X({id:`shortcuts`,label:`shortcuts`})}),(0,w.jsxs)(N,{children:[hn.map(({id:e,label:t,note:n})=>{let r=oo(e),i=T?.action===e,a=co(e);return(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(t)}),(0,w.jsx)(z,{children:u(n)}),a.length>0&&(0,w.jsx)(gi,{children:u(`also_in_use_by_actions_pressing_it_runs_each_of_them`,{actions:a.join(`, `)})})]}),(0,w.jsx)(I,{children:(0,w.jsxs)(ui,{children:[r.map((t,n)=>(0,w.jsxs)(di,{$conflict:(so.get(t)?.length??0)>1,$listening:i&&T.index===n,children:[(0,w.jsx)(fi,{onClick:()=>on({action:e,index:n}),title:u(`click_to_record_this_shortcut_again`),type:`button`,children:i&&T.index===n?sn.length>0?`${ft(sn)} + …`:u(`press_a_key`):ft(t)}),(0,w.jsx)(pi,{onClick:()=>uo(e,n),title:u(`remove`),type:`button`,children:(0,w.jsx)(S,{size:9})})]},t+`-`+n)),r.length===0&&(0,w.jsx)(mi,{children:u(`none`)}),(0,w.jsx)(hi,{$listening:i&&T.index<0,onClick:()=>on({action:e,index:-1}),title:u(`add`),type:`button`,children:i&&T.index<0?sn.length>0?`${ft(sn)} + …`:u(`press_a_key`):(0,w.jsx)(x,{size:11})})]})})]},e)}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`reset`)}),(0,w.jsx)(z,{children:u(`back_to_the_default_combination_for_every_action`)})]}),(0,w.jsx)(I,{children:(0,w.jsxs)(K,{onClick:()=>void $({shortcuts:pt(ct()),globalHotkey:null}),type:`button`,children:[(0,w.jsx)(y,{size:13}),u(`reset`)]})})]})]})]}),(0,w.jsxs)(j,{ref:Q(`memory`),children:[(0,w.jsx)(A,{note:`what_the_process_holds_and_how_to_give_it_back`,title:`memory`}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(pr,{children:[(0,w.jsxs)(mr,{children:[(0,w.jsx)(L,{children:u(`process_memory`)}),(0,w.jsx)(V,{children:v?`${f(v.private)} · ${$n(v.private,v.available)}`:`—`})]}),(0,w.jsx)(hr,{children:(0,w.jsx)(gr,{$ratio:v?v.private/Math.max(v.available,1):0,$tone:ce(v?v.private/Math.max(v.available,1):0)})}),(0,w.jsx)(z,{children:v?u(`committed_of_available_the_runtime_can_use_resident_is_resident_the_webview_runs_in_its_own_process`,{available:f(v.available),resident:f(v.workingSet)}):u(`reading_the_current_usage`)})]}),(0,w.jsxs)(pr,{children:[(0,w.jsxs)(mr,{children:[(0,w.jsx)(L,{children:u(`managed_heap`)}),(0,w.jsx)(V,{children:v?`${f(v.managed)} · ${$n(v.managed,v.private)}`:`—`})]}),(0,w.jsx)(hr,{children:(0,w.jsx)(gr,{$ratio:v?v.managed/Math.max(v.private,1):0,$tone:`var(--accent-secondary)`})}),(0,w.jsx)(z,{children:u(`share_of_this_process_that_the_net_heap_holds_thumbnails_and_folder_size_walks_live_here_the_runtime_grows_it_on_demand_and_gives_it_back_after_a_collection`)})]}),(0,w.jsxs)(pr,{children:[(0,w.jsxs)(mr,{children:[(0,w.jsx)(L,{children:u(`native_and_runtime`)}),(0,w.jsx)(V,{children:v?`${f(Math.max(0,v.private-v.managed))} · ${$n(Math.max(0,v.private-v.managed),v.private)}`:`—`})]}),(0,w.jsx)(hr,{children:(0,w.jsx)(gr,{$ratio:v?Math.max(0,v.private-v.managed)/Math.max(v.private,1):0,$tone:`var(--accent-primary)`})}),(0,w.jsx)(z,{children:u(`the_runtime_loaded_libraries_and_the_rust_helper_share_this_part_rust_runs_inside_the_process_so_it_has_no_separate_figure`)})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`free_memory`)}),(0,w.jsx)(z,{children:u(`compacts_the_heap_and_returns_unused_pages_to_the_system_always_safe`)})]}),(0,w.jsx)(I,{children:(0,w.jsxs)(K,{onClick:()=>void vt().then(Dt),type:`button`,children:[(0,w.jsx)(kt,{size:13}),u(`trim_now`)]})})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`automatic_trim`)}),(0,w.jsx)(z,{children:u(`gives_the_heap_back_in_the_background_when_it_stays_above_the_threshold`)})]}),(0,w.jsx)(I,{children:(0,w.jsx)(U,{$on:h?.memoryAutoTrim??m().memoryAutoTrim,disabled:!h,onClick:()=>void $({memoryAutoTrim:!(h?.memoryAutoTrim??m().memoryAutoTrim)}),type:`button`,children:(0,w.jsx)(W,{})})})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`heap_threshold_mb`)}),(0,w.jsx)(z,{children:u(`megabytes_the_managed_heap_must_hold_before_a_background_collection_runs`)})]}),(0,w.jsx)(I,{children:(0,w.jsx)(Er,{max:8192,min:16,onChange:e=>void $({memoryTrimThresholdMb:Math.min(8192,Math.max(16,Number(e.target.value)||256))}),type:`number`,value:h?.memoryTrimThresholdMb??m().memoryTrimThresholdMb})})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`check_every_seconds`)}),(0,w.jsx)(z,{children:u(`seconds_between_background_memory_checks`)})]}),(0,w.jsx)(I,{children:(0,w.jsx)(Er,{max:3600,min:5,onChange:e=>void $({memoryTrimIntervalSeconds:Math.min(3600,Math.max(5,Number(e.target.value)||15))}),type:`number`,value:h?.memoryTrimIntervalSeconds??m().memoryTrimIntervalSeconds})})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`trim_when_hidden_to_the_tray`)}),(0,w.jsx)(z,{children:u(`collects_the_heap_once_the_window_is_hidden_to_the_tray`)})]}),(0,w.jsx)(I,{children:(0,w.jsx)(U,{$on:h?.memoryTrimOnTray??m().memoryTrimOnTray,disabled:!h,onClick:()=>void $({memoryTrimOnTray:!(h?.memoryTrimOnTray??m().memoryTrimOnTray)}),type:`button`,children:(0,w.jsx)(W,{})})})]})]})]}),(0,w.jsxs)(j,{ref:Q(`overview`),children:[(0,w.jsx)(A,{note:`the_home_tab_s_history_and_how_much_of_it_it_shows`,title:`overview`,onReset:()=>X({id:`overview`,label:`overview`})}),(0,w.jsx)(N,{children:(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`recent_items`)}),(0,w.jsx)(z,{children:u(`how_many_recently_opened_folders_the_overview_lists_0_hides_the_section`)})]}),(0,w.jsx)(I,{children:(0,w.jsx)(Nr,{max:50,min:0,onChange:e=>void fo(Number(e.target.value)),type:`number`,value:h?.recentLimit??m().recentLimit})})]})})]}),(0,w.jsxs)(j,{ref:Q(`gallery`),children:[(0,w.jsx)(A,{note:`the_folders_the_gallery_scans_for_pictures_and_videos`,title:`gallery`,onReset:()=>X({id:`gallery`,label:`gallery`})}),(0,w.jsxs)(N,{children:[(h?.galleryRoots??[]).map(e=>(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:ge(e)}),(0,w.jsx)(z,{children:e})]}),(0,w.jsx)(I,{children:(0,w.jsx)(_i,{onClick:()=>void So((h?.galleryRoots??[]).filter(t=>t!==e)),title:u(`stop_scanning_this_folder`),type:`button`,children:(0,w.jsx)(S,{size:12})})})]},e)),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`scan_folders`)}),(0,w.jsx)(z,{children:(h?.galleryRoots??[]).length===0?u(`nothing_added_yet_so_the_gallery_reads_the_pictures_folder`):u(`only_these_folders_are_scanned_three_levels_deep`)})]}),(0,w.jsx)(I,{children:(0,w.jsxs)(K,{onClick:()=>void Co(),type:`button`,children:[(0,w.jsx)(wt,{size:13}),u(`choose_folder`)]})})]})]})]}),(0,w.jsxs)(j,{ref:Q(`icons`),children:[(0,w.jsx)(A,{note:`where_the_shell_s_own_icons_and_the_built_in_glyphs_come_from`,title:`icons`,onReset:()=>X({id:`icons`,label:`icons`})}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`use_system_file_icons`)}),(0,w.jsx)(z,{children:u(`ask_the_shell_for_the_icon_of_each_file_type_instead_of_the_built_in_glyphs`)})]}),(0,w.jsx)(U,{$on:h?.systemIcons??m().systemIcons,disabled:!h,onClick:()=>void $({systemIcons:!h?.systemIcons}),type:`button`,children:(0,w.jsx)(W,{})})]}),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`use_custom_folder_icons`)}),(0,w.jsx)(z,{children:u(`folders_that_define_an_icon_desktop_ini_keep_showing_it_even_when_system_icons_are_off`)})]}),(0,w.jsx)(U,{$on:h?.customFolderIcons??m().customFolderIcons,disabled:!h,onClick:()=>void $({customFolderIcons:!h?.customFolderIcons}),type:`button`,children:(0,w.jsx)(W,{})})]})]})]}),(0,w.jsxs)(j,{ref:Q(`extension-icons`),children:[(0,w.jsx)(A,{note:`a_custom_glyph_for_one_file_extension`,title:`icons_by_extension`,onReset:()=>X({id:`extension-icons`,label:`icons_by_extension`})}),(0,w.jsxs)(N,{children:[Object.entries(h?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:e}),(0,w.jsx)(z,{children:On(u,t)})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(kn,{source:t}),(0,w.jsx)(_i,{onClick:()=>void io(e,null),title:u(`remove_this_rule`),type:`button`,children:(0,w.jsx)(S,{size:12})})]})]},e)),(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`add_a_rule`)}),(0,w.jsx)(z,{children:u(`extension_and_the_icon_to_draw_for_it`)})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(Nr,{onChange:e=>at(e.target.value),placeholder:`.psd`,spellCheck:!1,value:et}),(0,w.jsxs)(Rr,{children:[(0,w.jsx)(_i,{onClick:()=>Tt(e=>!e),title:u(`choose_the_icon`),type:`button`,children:(0,w.jsx)(kn,{source:mt})}),Ct&&(0,w.jsx)(ut,{allowDefault:!1,onClose:()=>Tt(!1),onPick:e=>{St(e??`file`),Tt(!1)},value:mt})]}),(0,w.jsx)(_i,{onClick:()=>void wo(),title:u(`add_the_rule`),type:`button`,children:(0,w.jsx)(x,{size:13})})]})]})]})]}),(0,w.jsxs)(j,{ref:Q(`folder-index`),children:[(0,w.jsx)(A,{note:`the_hidden_cache_that_makes_a_folder_open_instantly_next_time`,title:`folder_index`,onReset:()=>X({id:`folder-index`,label:`folder_index`})}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`keep_a_index_in_every_folder`,{index:`.yafm-index.db`})}),(0,w.jsx)(z,{children:u(`holds_icons_cached_folder_sizes_and_the_folder_s_last_listing_so_it_opens_instantly_next_time_hidden_and_marked_as_a_system_file_on_windows_skipped_where_the_folder_is_read_only`)})]}),(0,w.jsx)(U,{$on:h?.writeDirectoryIndex??m().writeDirectoryIndex,disabled:!h,onClick:()=>void $({writeDirectoryIndex:!h?.writeDirectoryIndex}),type:`button`,children:(0,w.jsx)(W,{})})]}),(0,w.jsxs)(In,{children:[(0,w.jsxs)(Ln,{children:[(0,w.jsx)(L,{children:u(`directory_index_blacklist`)}),(0,w.jsx)(z,{children:u(`rules_are_full_path_globs_matches_within_one_path_segment_and_crosses_folders_matching_folders_use_the_central_database_instead_of_creating_yafm_index_db_files`)})]}),(0,w.jsx)(Zr,{children:(h?.directoryIndexBlacklist??[]).map(e=>(0,w.jsxs)(Qr,{children:[(0,w.jsx)($r,{"aria-label":u(`directory_index_blacklist_rule`),onBlur:Ma,onChange:t=>wr({from:e,value:t.target.value}),onFocus:()=>wr({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Ma()):e.key===`Escape`&&wr(null)},spellCheck:!1,value:Cr?.from===e?Cr.value:e}),(0,w.jsx)(ei,{onClick:()=>Fa(e),title:u(`remove`),type:`button`,children:(0,w.jsx)(S,{size:10})})]},e))}),(0,w.jsxs)(ni,{children:[(0,w.jsx)(ri,{"aria-label":u(`directory_index_blacklist_rule`),onChange:e=>Ir(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Na())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:Fr}),(0,w.jsxs)(H,{onClick:Na,type:`button`,children:[(0,w.jsx)(x,{size:13}),u(`add_the_rule`)]})]}),(0,w.jsxs)(ti,{children:[(0,w.jsxs)(H,{onClick:Ia,type:`button`,children:[(0,w.jsx)(y,{size:13}),u(`restore_defaults`)]}),(0,w.jsxs)(H,{onClick:()=>void Pa(),type:`button`,children:[(0,w.jsx)(wt,{size:13}),u(`add_folder_2`)]})]})]})]}),!(h?.writeDirectoryIndex??m().writeDirectoryIndex)&&(0,w.jsx)(bi,{children:Dn(u,e?.platform)})]}),(0,w.jsxs)(j,{ref:Q(`indexing`),children:[(0,w.jsx)(A,{note:`background_folder_size_and_item_count_walks`,title:`index_tasks`}),(0,w.jsx)(En,{})]}),(0,w.jsxs)(j,{ref:Q(`files`),children:[(0,w.jsx)(A,{note:`what_the_listings_include`,title:`files`}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(F,{children:[(0,w.jsx)(L,{children:u(`show_hidden_files`)}),(0,w.jsxs)(z,{children:[u(`toggles_ordinary_hidden_files_for_this_session_alt_also_works_system_files_still_follow_explorer`),p?.overridden&&(0,w.jsx)(Or,{disabled:je,onClick:()=>void eo(null),type:`button`,children:u(`follow_system`)})]})]}),(0,w.jsxs)(I,{children:[(0,w.jsx)(Mr,{$on:p?.showHidden??!1,children:p?.overridden?Tn(u,p.showHidden):u(`follow_system`)}),(0,w.jsx)(U,{$on:p?.showHidden??!1,disabled:!p||je,onClick:()=>void eo(!(p?.showHidden??!1)),title:u(`show_hidden_files`),type:`button`,children:(0,w.jsx)(W,{})})]})]}),(0,w.jsxs)(P,{children:[(0,w.jsx)(L,{children:u(`protected_operating_system_files`)}),(0,w.jsx)(V,{children:Tn(u,p?.showSystem)})]})]}),(0,w.jsx)(yi,{children:u(`hidden_items_follow_this_app_s_switch_protected_operating_system_files_still_follow_windows`)})]}),(0,w.jsxs)(qn,{onClick:()=>un(!0),type:`button`,children:[(0,w.jsx)(xt,{size:13}),u(`open_source_attribution`)]})]}),(0,w.jsxs)(Jn,{"aria-label":u(`settings_sections`),onWheel:ga,ref:ua,children:[(0,w.jsx)(Yn,{children:u(`sections`)}),(0,w.jsx)(Xn,{children:D.map(({id:e,label:t})=>(0,w.jsxs)(Zn,{$active:Ai===e,"data-section":e,onClick:()=>ma(e),type:`button`,children:[(0,w.jsx)(Fn,{children:Sn[t]}),(0,w.jsx)(`span`,{children:u(t)})]},e))}),(0,w.jsx)(Qn,{children:u(`changes_are_saved_as_you_make_them`)})]}),ln&&(0,w.jsx)(C.Suspense,{fallback:null,children:(0,w.jsx)(fn,{onClose:()=>un(!1)})}),Oi&&(0,w.jsx)(De,{confirmLabel:u(`restore_defaults`),message:u(`restore_section_to_its_defaults`,{section:u(Oi.label)}),onCancel:()=>X(null),onConfirm:()=>{let e=Oi;X(null),_a(e.id)},open:!0,title:u(`restore_defaults`)}),Y&&(0,qt.createPortal)((0,w.jsx)(nr,{children:(0,w.jsxs)(rr,{"aria-modal":`true`,role:`dialog`,children:[(0,w.jsxs)(ir,{children:[(0,w.jsx)(`h2`,{children:u(`software_update`)}),(0,w.jsx)(`p`,{children:J?.latest?u(`version_version`,{version:J.latest}):u(`preparing_the_update`)})]}),(0,w.jsx)(ar,{children:u(`changelog`)}),Y.changelog?(0,w.jsx)(or,{onClick:cr,children:(0,w.jsx)(l,{source:Y.changelog})}):(0,w.jsx)(sr,{children:Y.phase===`changelog`?u(`loading_the_changelog`):u(`the_changelog_could_not_be_loaded`)}),(0,w.jsxs)(lr,{children:[(0,w.jsx)(`span`,{children:er(Y,u)}),(0,w.jsx)(`span`,{children:tr(Y)})]}),(0,w.jsx)(ur,{children:(0,w.jsx)(dr,{$percent:Math.max(0,Math.min(100,Y.percent))})}),Y.error&&(0,w.jsx)(B,{children:Y.error}),(0,w.jsxs)(fr,{children:[(Y.phase===`changelog`||Y.phase===`downloading`)&&(0,w.jsxs)(K,{onClick:()=>void Wa(),type:`button`,children:[(0,w.jsx)(S,{size:13}),u(`cancel`)]}),Y.phase===`ready`&&(0,w.jsxs)(K,{onClick:()=>void Ga(),type:`button`,children:[(0,w.jsx)(At,{size:13}),u(`install_update`)]}),Y.phase===`installing`&&(0,w.jsxs)(K,{disabled:!0,type:`button`,children:[(0,w.jsx)(y,{size:13}),u(`installing`)]}),(Y.phase===`ready`||Y.phase===`error`||Y.phase===`cancelled`||Y.phase===`installing`)&&(0,w.jsxs)(K,{onClick:()=>Di(null),type:`button`,children:[(0,w.jsx)(S,{size:13}),u(`close`)]})]})]})}),document.body)]})}function wn({approvalMinutes:e,denialSeconds:t}){let n=i(),[r,o]=(0,C.useState)([]),[s,c]=(0,C.useState)(!1),[l,ee]=(0,C.useState)(()=>Date.now());(0,C.useEffect)(()=>{let e=window.setInterval(()=>ee(Date.now()),1e3);return()=>window.clearInterval(e)},[]),(0,C.useEffect)(()=>{let e=()=>void at().then(o,()=>o([]));if(e(),a.available)return a.on(t=>{t.type===`share.devices.changed`&&e()})},[]),(0,C.useEffect)(()=>{r.some(e=>e.expiresAt>0&&e.expiresAt<=l)&&at().then(o,()=>void 0)},[l,r]);let u=e=>{let t=Math.max(0,Math.ceil((e-l)/1e3)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60,a=e=>String(e).padStart(2,`0`);return n>0?`${n}:${a(r)}:${a(i)}`:`${r}:${a(i)}`},te=async(e,t,n)=>{c(!0);try{o(await h(e,t,n))}finally{c(!1)}},ne=async()=>{if(window.confirm(n(`share_access_clear_devices_confirm`))){c(!0);try{o(await Ie())}finally{c(!1)}}},re=async e=>{c(!0);try{o(await g(e))}finally{c(!1)}},ie=e=>e.state===`allowed`?e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_allowed`)} · ${n(`share_access_expired`)}`:n(`share_access_allowed`):e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_denied`)} · ${n(`share_access_expired`)}`:n(`share_access_denied`),d=r.filter(e=>e.state===`allowed`||e.state===`denied`),ae=e=>e.expiresAt===0?void 0:new Date(e.expiresAt).toLocaleString();return(0,w.jsxs)(_r,{children:[d.length>0&&(0,w.jsxs)(yr,{children:[(0,w.jsxs)(Tr,{children:[n(`devices`),` · `,d.length]}),(0,w.jsx)(Sr,{disabled:s,onClick:()=>void ne(),title:n(`share_access_clear_devices`),type:`button`,children:(0,w.jsx)(Kt,{size:13})})]}),d.length===0&&(0,w.jsx)(vr,{children:n(`share_access_no_devices`)}),d.map(r=>(0,w.jsxs)(br,{children:[(0,w.jsxs)(Cr,{children:[(0,w.jsx)(wr,{children:r.name||r.address||r.id}),(0,w.jsxs)(Tr,{children:[r.address,r.address?` · `:``,n(`share_access_last_seen`),`: `,new Date(r.lastSeen).toLocaleString()]}),(0,w.jsxs)(Tr,{title:ae(r),children:[ie(r),` · `,r.expiresAt===0?n(`share_access_forever`):n(`share_access_expires_in`,{time:u(r.expiresAt)})]})]}),(0,w.jsxs)(xr,{children:[(0,w.jsx)(Be,{disabled:s,onChange:e=>{let[t,n]=e.split(`:`);te(r.id,t,n===`forever`)},options:[{value:`allowed:timed`,label:n(`share_access_allowed_for_minutes`,{minutes:e})},{value:`allowed:forever`,label:n(`share_access_allow_forever`)},{value:`denied:timed`,label:n(`share_access_denied_for_seconds`,{seconds:t})},{value:`denied:forever`,label:n(`share_access_block_forever`)}],value:r.state===`allowed`?r.expiresAt===0?`allowed:forever`:`allowed:timed`:r.expiresAt===0?`denied:forever`:`denied:timed`,width:190}),(0,w.jsx)(Sr,{disabled:s,onClick:()=>void re(r.id),title:n(`remove`),type:`button`,children:(0,w.jsx)(Kt,{size:13})})]})]},r.id))]})}function Tn(e,t){return e(t===void 0?`reading`:t?`shown`:`hidden`)}function En(){let e=i(),[t,n]=(0,C.useState)(null);return(0,C.useEffect)(()=>{let e=!0,t=()=>p().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,w.jsx)(bi,{children:e(`no_indexing_tasks_are_running`)}):(0,w.jsxs)(N,{children:[(0,w.jsx)(P,{children:(0,w.jsx)(L,{children:e(`count_indexing_tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,w.jsx)(P,{children:(0,w.jsx)(V,{title:e,children:e})},e))]}):(0,w.jsx)(bi,{children:e(`index_task_information_is_unavailable`)})}function Dn(e,t){return e(`indexes_are_off_every_folder_s_icons_sizes_and_cached_listing_now_live_in_one_database_in_place_so_that_drive_grows_with_every_folder_you_open_that_is_the_cost_of_keeping_folders_free_of_extra_files`,{place:e(t===`windows`?`appdata_which_sits_on_the_system_drive_usually_c`:t===`linux`?`your_home_folder_which_often_shares_a_partition_with_the_system`:`the_app_s_settings_folder_which_usually_sits_on_the_system_drive`)})}function On(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built_in_source`,{source:t})}function kn({source:e}){let t=be(e.startsWith(`file:`)?e.slice(5):null);return(0,w.jsx)(vi,{children:t?(0,w.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,w.jsx)(Ue,{name:e,size:16})})}function An({path:e,active:t,onSelect:n,onRemove:r}){let a=i(),o=ue(e),s=xe(o?null:e),c=o?e:s,l=et(e.split(/[?#]/)[0]);return(0,w.jsxs)(Kr,{children:[(0,w.jsxs)(Gr,{$active:t,onClick:n,title:e,type:`button`,children:[c&&(l?(0,w.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${c}#t=0.5`}):(0,w.jsx)(`img`,{alt:``,src:c})),l&&(0,w.jsx)(Jr,{children:(0,w.jsx)(Gt,{size:11})})]}),(0,w.jsx)(qr,{onClick:r,title:a(`remove`),type:`button`,children:(0,w.jsx)(S,{size:9})})]})}function jn({value:e,options:t,onChange:n,disabled:r}){let a=i(),[o,s]=(0,C.useState)(null),c=(0,C.useRef)(null);return(0,C.useEffect)(()=>{if(!o)return;let e=()=>s(null),t=t=>{let n=t.target;n instanceof Node&&c.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[o]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(Pr,{"aria-expanded":o!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(o){s(null);return}let e=c.current?.getBoundingClientRect();e&&s({left:e.left,top:e.bottom+4,width:e.width})},ref:c,type:`button`,children:[(0,w.jsx)(`span`,{children:k(a,e)}),(0,w.jsx)(Fr,{children:(0,w.jsx)(Nt,{size:11})})]}),o&&(0,qt.createPortal)((0,w.jsx)(Ir,{"data-language-menu":`true`,role:`listbox`,style:{left:o.left,minWidth:o.width,top:o.top},children:t.map(t=>(0,w.jsxs)(Lr,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),s(null)},role:`option`,type:`button`,children:[(0,w.jsx)(`span`,{children:k(a,t)}),t===e&&(0,w.jsx)(jt,{size:11})]},t))}),document.body)]})}function k(e,t){return t===bn?e(`system_default`):xn[t]??t}function A({title:e,note:t,global:n=!1,onReset:r}){let a=i();return(0,w.jsxs)(Pn,{children:[(0,w.jsxs)(`h2`,{children:[(0,w.jsx)(Fn,{children:Sn[e]}),a(e),n&&(0,w.jsx)(_,{})]}),(0,w.jsx)(`p`,{children:a(t)}),r&&(0,w.jsx)(M,{"aria-label":a(`restore_defaults`),onClick:r,title:a(`restore_defaults`),type:`button`,children:(0,w.jsx)(y,{size:12})})]})}var Mn=u.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,Nn=u.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,j=u.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,Pn=u.header`
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
`,M=u.button`
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
`,Fn=u.i`
    display: grid;
    place-items: center;
    width: 13px;
    height: 13px;
    flex-shrink: 0;
    color: var(--accent-primary);
    opacity: 0.85;
`,N=u.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,In=u.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Ln=u.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Rn=u.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,zn=u.button`
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
`,Bn=u.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Vn=u.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,Hn=u.button`
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
`,Un=u.button`
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
`,Wn=u.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Gn=u.input`
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
`,Kn=u.span`
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
`,qn=u.button`
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
`,Jn=u.nav`
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
`,Yn=u.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Xn=u.div`
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
`,Zn=u.button`
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

    ${({$active:e})=>e&&r`
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
`,Qn=u.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function $n(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}function er(e,t){switch(e.phase){case`changelog`:return t(`preparing_the_update`);case`downloading`:return t(`downloading_the_update`);case`ready`:return t(`download_complete`);case`cancelled`:return t(`update_cancelled`);case`error`:return t(`the_update_failed`);case`installing`:return t(`installing`);default:return``}}function tr(e){return e.total>0?`${f(e.downloaded)} / ${f(e.total)}`:e.downloaded>0?f(e.downloaded):``}var nr=u.div`
    position: fixed;
    inset: 0;
    z-index: 9500;
    display: grid;
    place-items: center;
    padding: 32px;
    background: rgba(2, 6, 23, 0.55);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
`,rr=u.div`
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
`,ir=u.div`
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
`,ar=u.span`
    margin-top: 4px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,or=u.div`
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
`,sr=u.p`
    margin: 0;
    font-size: 11px;
    color: var(--text-muted);
`;function cr(e){let t=e.target?.closest(`a`);t&&(e.preventDefault(),oe(t.href))}var lr=u.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    font-size: 11px;
    color: var(--text-muted);
`,ur=u.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.22);
`,dr=u.div`
    width: ${({$percent:e})=>`${e}%`};
    height: 100%;
    border-radius: 3px;
    background: var(--accent-gradient);
    transition: width 160ms ease;
`,fr=u.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,pr=u.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,mr=u.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,hr=u.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,gr=u.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,_r=u.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
`,vr=u.div`
    padding: 8px 2px;
    color: var(--text-muted);
    font-size: 11px;
`,yr=u.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2px;
`,br=u.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,xr=u.div`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,Sr=u.button`
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
`,Cr=u.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,wr=u.span`
    color: var(--text-primary);
    font-size: 12px;
`,Tr=u.span`
    color: var(--text-muted);
    font-size: 10.5px;
    overflow-wrap: anywhere;
`,Er=u.input`
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
`,Dr=u.input`
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
`,P=u.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,F=u.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,I=u.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,L=u.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,R=u.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,z=u.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,B=u.span`
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
`,V=u.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,Or=u.button`
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
`,kr=u.input`
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
`,H=u.button`
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
`,Ar=u.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,jr=u.button`
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
`,Mr=u.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,U=u.button`
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
`,W=u.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,Nr=u.input`
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
`,Pr=u.button`
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
`,Fr=u.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Ir=u.div`
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
`,Lr=u.button`
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
`,Rr=u.span`
    position: relative;
    display: inline-flex;
`,zr=u.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Br=u.button`
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
`,G=u.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,Vr=u.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,Hr=u.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Ur=u.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Wr=u.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,Gr=u.button`
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
`,Kr=u.div`
    position: relative;
    width: 102px;
    height: 58px;
`,qr=u.button`
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
`,Jr=u.span`
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
`,Yr=u.button`
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
`,Xr=u.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,Zr=u.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Qr=u.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,$r=u.input`
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
`,ei=u.button`
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
`,ti=u.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,ni=u.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,ri=u.input`
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
`,ii=u.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,ai=u.button`
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
`,oi=u.input`
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
`,si=u.div`
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
`,ci=u.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,li=u.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,ui=u.span`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 5px;
`,di=u.span`
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    border: 1px solid ${({$conflict:e,$listening:t})=>t?`var(--border-color-focus)`:e?`rgba(251, 191, 36, 0.55)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$listening:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`var(--bg-input)`};
`,fi=u.button`
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
`,pi=u.button`
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
`,mi=u.span`
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,hi=u.button`
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
`,gi=u.span`
    font-size: 10px;
    color: #fbbf24;
`,K=u.button`
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
`,_i=u.button`
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
`,vi=u.span`
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
`,yi=u.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,bi=u.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`;export{O as SettingsView};