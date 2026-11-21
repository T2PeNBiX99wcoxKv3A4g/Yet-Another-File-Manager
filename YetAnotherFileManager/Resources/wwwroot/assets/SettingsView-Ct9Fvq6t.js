const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AttributionDialog-C7Q3AkJq.js","assets/rolldown-runtime-XKyaHtl9.js","assets/dist-sR-t6Emc.js","assets/Icons-BCGG7XUW.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{_ as t,d as n,f as r,g as i,h as a,l as o,r as s,t as c,u as l}from"./dist-sR-t6Emc.js";import{D as ee,T as te,_ as ne,a as re,d as ie,i as ae,k as u,m as d,n as oe,t as se,x as ce}from"./theme-Ocob2ChL.js";import{A as le,H as ue,L as de,S as fe,b as f,dt as pe,ft as me,i as he,rt as ge,s as _e,st as ve}from"./selectionMenu--w-X4gsr.js";import{_ as ye,c as be,d as xe,f as Se,g as Ce,h as we,l as Te,m as Ee,n as De,o as Oe,s as ke,t as Ae,u as je}from"./concepts-Drx0QqWX.js";import{A as Me,C as Ne,D as Pe,E as Fe,M as Ie,N as Le,O as Re,S as ze,T as Be,_ as Ve,a as He,b as Ue,i as We,j as Ge,k as Ke,m as p,s as m,t as h,v as qe,w as Je,x as Ye,y as Xe}from"./main-BBjYxYg2.js";import{$ as Ze,B as Qe,H as $e,J as et,M as tt,S as nt,T as rt,U as it,X as at,a as ot,at as st,b as ct,f as lt,it as ut,j as dt,o as ft,r as pt,rt as mt,s as ht,tt as gt,u as _t,w as vt,y as yt}from"./FileList-CYKTXG7c.js";import{t as bt}from"./textSearch-CaqN30nV.js";import{F as xt,G as St,K as Ct,M as wt,N as Tt,T as Et,U as Dt,V as Ot,W as kt,X as At,Y as jt,Z as g,at as _,bt as Mt,ct as Nt,d as v,f as Pt,ht as Ft,it as It,j as Lt,k as Rt,l as zt,mt as Bt,n as Vt,nt as y,p as Ht,st as b,tt as Ut,ut as x,vt as Wt,x as Gt,y as S}from"./Icons-BCGG7XUW.js";import{t as Kt}from"./IconPicker-CD1zY_9z.js";var C=e(t(),1),qt=u();async function Jt(){return r.available?(await r.request(`app.tags`)).tags:[]}async function Yt(e){return!r.available||!e?!1:(await r.request(`app.tags.delete`,{name:e})).ok}async function Xt(e,t){return!r.available||!e?[]:(await r.request(`app.tags.create`,{name:e,color:t})).tags}async function Zt(e,t){return!r.available||!e?!1:(await r.request(`app.tags.color`,{name:e,color:t})).ok}async function Qt(e,t){return!r.available||!e||!t?!1:(await r.request(`app.tags.rename`,{oldName:e,newName:t})).ok}var w=n();function $t({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=l(),[s,c]=(0,C.useState)(null),[ee,te]=(0,C.useState)(``),ne=(0,C.useRef)(null),re=(0,C.useRef)(null),ie=(0,C.useMemo)(()=>{let e=ee.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,ee]);(0,C.useEffect)(()=>{if(!s)return;re.current?.focus();let e=()=>c(null),t=t=>{let n=t.target;n instanceof Node&&ne.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e)}},[s]);let ae=()=>{if(s){c(null);return}let e=ne.current?.getBoundingClientRect();if(!e)return;te(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;c({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},u=e=>{a(e),c(null)};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(en,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:ae,ref:ne,type:`button`,children:[(0,w.jsx)(tn,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,w.jsx)(nn,{children:`▾`})]}),s&&(0,qt.createPortal)((0,w.jsxs)(rn,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,w.jsxs)(an,{children:[(0,w.jsx)(Nt,{size:12}),(0,w.jsx)(on,{onChange:e=>te(e.target.value),placeholder:o(`filter_fonts`),ref:re,value:ee})]}),(0,w.jsxs)(sn,{children:[(0,w.jsxs)(cn,{$active:!e,"aria-selected":!e,onClick:()=>u(null),role:`option`,type:`button`,children:[(0,w.jsxs)(ln,{children:[n,` `,(0,w.jsx)(dn,{children:o(`default_2`)})]}),!e&&(0,w.jsx)(v,{size:11})]}),ie.map(t=>(0,w.jsxs)(cn,{$active:e===t,"aria-selected":e===t,onClick:()=>u(t),role:`option`,type:`button`,children:[(0,w.jsxs)(T,{children:[(0,w.jsx)(ln,{children:t}),(0,w.jsx)(un,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,w.jsx)(v,{size:11})]},t)),ie.length===0&&(0,w.jsx)(fn,{children:o(`no_matching_font`)})]})]}),document.body)]})}var en=i.button`
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
`,tn=i.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,nn=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,rn=i.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${_e}
`,an=i.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,on=i.input`
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
`,sn=i.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,cn=i.button`
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
`,T=i.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,ln=i.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,un=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,dn=i.span`
    color: var(--text-muted);
    font-size: 10px;
`,fn=i.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,pn=(0,C.lazy)(()=>h(()=>import(`./AttributionDialog-C7Q3AkJq.js`).then(e=>({default:e.AttributionDialog})),__vite__mapDeps([0,1,2,3]))),mn=[{id:`goBack`,label:`back`,note:`goes_to_the_previous_folder_in_this_tab`},{id:`goForward`,label:`forward`,note:`goes_to_the_next_folder_in_this_tab`},{id:`goUp`,label:`up_one_level`,note:`opens_the_folder_that_contains_the_current_one`},{id:`home`,label:`home_folder`,note:`jumps_to_the_user_s_home_folder`},{id:`find`,label:`search`,note:`opens_the_floating_search_box_typing_a_letter_in_a_folder_opens_it_too`},{id:`location`,label:`edit_location`,note:`turns_the_breadcrumbs_into_an_editable_path`},{id:`closeTab`,label:`close_tab`,note:`closes_the_tab_that_is_open`},{id:`newTab`,label:`new_tab`,note:`opens_the_overview_in_a_new_tab`},{id:`reopenTab`,label:`reopen_closed_tab`,note:`brings_back_the_tab_you_closed_last_folder_and_all`},{id:`nextTab`,label:`next_tab`,note:`cycles_to_the_next_tab`},{id:`previousTab`,label:`previous_tab`,note:`cycles_to_the_previous_tab`},{id:`copy`,label:`copy`,note:`copies_the_selection_so_it_can_be_pasted_elsewhere`},{id:`duplicate`,label:`duplicate`,note:`makes_a_copy_of_the_selection_in_this_folder_with_a_new_name`},{id:`cut`,label:`cut`,note:`moves_the_selection_on_the_next_paste`},{id:`paste`,label:`paste`,note:`copies_or_moves_the_clipboard_s_files_into_the_current_folder`},{id:`undo`,label:`undo`,note:`undoes_the_last_file_operation_in_this_session`},{id:`redo`,label:`redo`,note:`repeats_the_operation_that_was_just_undone`},{id:`delete`,label:`move_to_the_recycle_bin`,note:`moves_the_selection_to_the_recycle_bin`},{id:`deletePermanently`,label:`delete_permanently`,note:`deletes_the_selection_without_the_recycle_bin`},{id:`rename`,label:`rename`,note:`renames_the_single_selected_entry`},{id:`selectAll`,label:`select_all`,note:`selects_every_entry_in_the_current_folder`},{id:`invertSelection`,label:`invert_selection`,note:`selects_everything_that_is_not_selected`},{id:`open`,label:`open`,note:`opens_the_selected_folder_or_file`},{id:`newFolder`,label:`new_folder`,note:`creates_a_folder_in_the_current_directory`},{id:`properties`,label:`properties`,note:`opens_the_shell_properties_sheet`},{id:`iconsView`,label:`icons_view`,note:`switches_the_folder_to_the_grid_view`},{id:`detailsView`,label:`details_view`,note:`switches_the_folder_to_the_list_view`},{id:`terminal`,label:`open_terminal`,note:`opens_a_terminal_in_the_current_folder`},{id:`hidden`,label:`show_hidden_files`,note:`toggles_ordinary_hidden_files_for_this_session`},{id:`splitView`,label:`split_view`,note:`shows_the_next_file_tab_beside_the_current_one`},{id:`openInNewTab`,label:`open_in_a_new_tab`,note:`hold_this_while_clicking_a_folder`}],hn=`globalHotkey`,gn=[...mn,{id:hn,label:`global_hotkey`,note:`brings_the_window_forward_from_anywhere_while_the_app_is_running_empty_means_no_global_shortcut`}],_n=`en`,vn=[{id:`system`,label:`follow_system`},{id:`light`,label:`light`},{id:`dark`,label:`dark`}],yn=[{id:`system`,label:`system`},{id:`24`,label:`k_24_hour`},{id:`12`,label:`k_12_hour`},{id:`custom`,label:`custom`}],bn=new Date(2026,10,5,16,8).getTime(),xn=`system`,Sn={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},E=[{id:`application`,label:`application`},{id:`share-access`,label:`share_access`},{id:`startup`,label:`startup`},{id:`fonts`,label:`fonts`},{id:`time`,label:`time_format`},{id:`updates`,label:`updates`},{id:`colors`,label:`colors`},{id:`background`,label:`background`},{id:`safety`,label:`safety`},{id:`tags`,label:`tags`},{id:`files-view`,label:`files_view`},{id:`shortcuts`,label:`shortcuts`},{id:`memory`,label:`memory`},{id:`overview`,label:`overview`},{id:`gallery`,label:`gallery`},{id:`icons`,label:`icons`},{id:`extension-icons`,label:`icons_by_extension`},{id:`folder-icons`,label:`folder_icons`},{id:`folder-index`,label:`folder_index`},{id:`indexing`,label:`index_tasks`},{id:`files`,label:`files`}],Cn={application:(0,w.jsx)(xt,{size:13}),share_access:(0,w.jsx)(x,{size:13}),startup:(0,w.jsx)(It,{size:13}),fonts:(0,w.jsx)(Tt,{size:13}),time_format:(0,w.jsx)(Ht,{size:13}),updates:(0,w.jsx)(b,{size:13}),colors:(0,w.jsx)(g,{size:13}),background:(0,w.jsx)(y,{size:13}),safety:(0,w.jsx)(Ct,{size:13}),tags:(0,w.jsx)(Ft,{size:13}),files_view:(0,w.jsx)(St,{size:13}),shortcuts:(0,w.jsx)(Dt,{size:13}),memory:(0,w.jsx)(Gt,{size:13}),overview:(0,w.jsx)(jt,{size:13}),gallery:(0,w.jsx)(zt,{size:13}),icons:(0,w.jsx)(Ot,{size:13}),icons_by_extension:(0,w.jsx)(Lt,{size:13}),folder_icons:(0,w.jsx)(wt,{size:13}),folder_index:(0,w.jsx)(At,{size:13}),index_tasks:(0,w.jsx)(Bt,{size:13}),files:(0,w.jsx)(Rt,{size:13})},wn={application:[`language`,`pickerWindowWidth`,`pickerWindowHeight`,`sharePortMode`,`sharePort`,`linkPathMode`,`restoreTabs`],"share-access":[`shareAccessEnabled`,`shareApprovalMinutes`,`shareDenialSeconds`,`shareHttps`],startup:[`startHidden`],fonts:[`fonts`],time:[`timeFormat`,`timeFormatPattern`,`relativeTime`,`relativeTimeWindowMinutes`],colors:[`accentColor`,`secondaryColor`,`themeMode`,`themePresets`],background:[`backgroundSource`,`backgroundCustom`,`backgroundBlur`,`backgroundSaturation`,`backgroundBrightness`,`backgroundLooks`],safety:[`protectedPaths`,`deleteDelaySeconds`],"files-view":[`defaultView`,`showCheckboxes`,`openOnSingleClick`,`confirmDelete`,`previewVideoAudio`,`previewVideoAutoplay`,`trayAutoShow`,`conflictNameStyle`],shortcuts:[`shortcuts`,`globalHotkey`],overview:[`recentLimit`],gallery:[`galleryRoots`],icons:[`systemIcons`,`customFolderIcons`],"extension-icons":[`extensionIcons`],"folder-index":[`writeDirectoryIndex`,`directoryIndexBlacklist`]},Tn=`yafm.colors.recent`;function En(){let e=f(Tn);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function Dn({appInfo:e,focusSection:t,onSettingsChanged:n,find:r,onSearchMatches:i}){let a=l(),[u,ue]=(0,C.useState)([]),[f,pe]=(0,C.useState)(null),[me,_e]=(0,C.useState)(!1),[p,h]=(0,C.useState)(null),nt=s(re(p?.themeMode)),[ot,lt]=(0,C.useState)(null),[dt,yt]=(0,C.useState)(``),[St,Ct]=(0,C.useState)(`file`),[Tt,Dt]=(0,C.useState)(!1),[Ot,jt]=(0,C.useState)(!1),[g,Nt]=(0,C.useState)(null),[Pt,Ft]=(0,C.useState)(Ve),[Lt,Rt]=(0,C.useState)(!1),[zt,Bt]=(0,C.useState)(null),[y,Ht]=(0,C.useState)(null),[x,Gt]=(0,C.useState)(null),[en,tn]=(0,C.useState)(!1),[nn,rn]=(0,C.useState)(null),[an,on]=(0,C.useState)(!1),[sn,cn]=(0,C.useState)(null),[T,ln]=(0,C.useState)(null),[un,dn]=(0,C.useState)(``),[fn,mn]=(0,C.useState)(!1),[Sn,Dn]=(0,C.useState)([]),[Ln,Vn]=(0,C.useState)(null),[k,j]=(0,C.useState)(!1),[er,M]=(0,C.useState)(null),[Tr,Er]=(0,C.useState)(``),[Dr,Or]=(0,C.useState)(tt),[kr,Ar]=(0,C.useState)(null),[jr,Mr]=(0,C.useState)(null),[Nr,Wr]=(0,C.useState)(``),[Gr,Kr]=(0,C.useState)(``),[qr,ri]=(0,C.useState)(null),[ii,ki]=(0,C.useState)(En),[Ni,Pi]=(0,C.useState)({}),[G,Fi]=(0,C.useState)(null),[K,Ii]=(0,C.useState)(null),[Li,Ri]=(0,C.useState)(!1),[zi,Bi]=(0,C.useState)(null),[q,Vi]=(0,C.useState)(null),[Hi,J]=(0,C.useState)(null),Ui=(0,C.useRef)(!1),[Wi,Gi]=(0,C.useState)(null),[Ki,qi]=(0,C.useState)(E[0].id),[Ji,Yi]=(0,C.useState)([]),[Xi,Zi]=(0,C.useState)(null),[Qi,$i]=(0,C.useState)(``),[ea,ta]=(0,C.useState)(!1),[na,ra]=(0,C.useState)(null),[ia,aa]=(0,C.useState)(null),[oa,sa]=(0,C.useState)(``),[ca,la]=(0,C.useState)(null),[ua,da]=(0,C.useState)(null),[fa,pa]=(0,C.useState)(null),[ma,ha]=(0,C.useState)(!1),[ga,_a]=(0,C.useState)(``),va=(0,C.useRef)(null),ya=(0,C.useRef)({}),Y=p?.defaultView??le,ba=p?.themePresets??[],xa=e?.platform===`windows`,Sa=xa?y?y.registered&&y.pathMatches:!1:p?.archiveHandler??!1,Ca=y?.registered??p?.archiveHandler??!1,wa=xa?x?x.registered&&x.pathMatches:!1:p?.defaultFileManager??!1,Ta=xa?Pt.registered&&Pt.pathMatches:p?.linksEnabled??!1;bt(va,r??null,`section`,i??(()=>void 0),[p]),(0,C.useEffect)(()=>{let e=va.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){qi(E[E.length-1].id);return}let n=t+110,r=E[0].id;for(let{id:e}of E){let t=ya.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}qi(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let X=e=>t=>{ya.current[e]=t},Ea=(0,C.useRef)(null),Da=(0,C.useRef)(null),Oa=(0,C.useRef)(0),ka=()=>{if(Oa.current!==0)return;let e=()=>{let t=va.current;if(!t||!Da.current){Oa.current=0;return}let n=Math.min(Da.current.top,t.scrollHeight-t.clientHeight),r=n-t.scrollTop;if(Math.abs(r)<.5){t.scrollTop=n,Da.current=null,Oa.current=0;return}let i=Math.min(Math.abs(r)*.2,140);t.scrollTop+=Math.sign(r)*i,Oa.current=requestAnimationFrame(e)};Oa.current=requestAnimationFrame(e)},Aa=e=>{let t=va.current,n=ya.current[e];t&&n&&(Da.current={index:E.findIndex(t=>t.id===e),top:t.scrollTop+n.getBoundingClientRect().top-t.getBoundingClientRect().top},qi(e),ka())};(0,C.useEffect)(()=>{let e=Ea.current,t=e?.querySelector(`[data-section="${Ki}"]`);if(!e||!t)return;let n=e.getBoundingClientRect(),r=t.getBoundingClientRect();r.top<n.top?e.scrollTop+=r.top-n.top-6:r.bottom>n.bottom&&(e.scrollTop+=r.bottom-n.bottom+6)},[Ki]),(0,C.useEffect)(()=>{let e=va.current;if(!e)return;let t=()=>{Da.current=null};return e.addEventListener(`wheel`,t,{passive:!0}),e.addEventListener(`pointerdown`,t,{passive:!0}),()=>{e.removeEventListener(`wheel`,t),e.removeEventListener(`pointerdown`,t),cancelAnimationFrame(Oa.current)}},[]);let ja=(0,C.useRef)(0),Ma=e=>{let t=Math.sign(e.deltaY);if(t===0)return;let n=e.deltaMode!==0||Math.abs(e.deltaY)>=50,r=performance.now();if(!n&&r<ja.current)return;ja.current=r+220;let i=Da.current?.index??E.findIndex(e=>e.id===Ki),a=Math.min(Math.max((i<0?0:i)+t,0),E.length-1);a!==(i<0?0:i)&&Aa(E[a].id)};(0,C.useEffect)(()=>{t&&Aa(t)},[t]),(0,C.useEffect)(()=>{o().then(e=>ue(e.available),()=>ue([]))},[]),(0,C.useEffect)(()=>{He().then(Yi,()=>Yi([]))},[]),(0,C.useEffect)(()=>{Ue().then(da,()=>da(null))},[]),(0,C.useEffect)(()=>{Fe().then(Ii,()=>void 0)},[]),(0,C.useEffect)(()=>{de().then(pe,()=>pe(null)),xe().then(h,()=>h(null)),Xe().then(Ft,()=>Ft(Ve)),ke().then(Ht,()=>Ht(null)),be().then(Gt,()=>Gt(null)),Jt().then(Dn,()=>Dn([]))},[]),(0,C.useEffect)(()=>{let e=()=>void qe().then(Nt,()=>Nt(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let Z=async e=>{if(!p)return;let t={...p,...e};Object.keys(e).every(e=>t[e]===p[e])||(h(t),ve(),h(await Ee(t)),n())},Na=async e=>{if(!p)return;if(e===`startup`){await Ro(`none`),await Z({startHidden:!1});return}let t=wn[e];if(!t?.length)return;let n=await je(),r=Object.fromEntries(t.map(e=>[e,n[e]]));await Z(r)},Pa=e=>e?p?.backgroundLooks[e]??null:null,Fa=e=>{let t=Pa(e);return{backgroundBlur:t?.blur??0,backgroundSaturation:t?.saturation??100,backgroundBrightness:t?.brightness??100}},Ia=e=>{let t={...e.backgroundLooks},n=e.backgroundSource;return n?e.backgroundBlur===0&&e.backgroundSaturation===100&&e.backgroundBrightness===100?(delete t[n],t):(t[n]={blur:e.backgroundBlur,saturation:e.backgroundSaturation,brightness:e.backgroundBrightness},t):t},La=e=>{p&&Z({backgroundSource:e,backgroundLooks:Ia(p),...Fa(e)})},Ra=e=>{p&&Z({...e,backgroundLooks:Ia({...p,...e})})},za=()=>{if(!p)return;let e={...p.backgroundLooks};p.backgroundSource&&delete e[p.backgroundSource],Z({backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,backgroundLooks:e})},Ba=async e=>{let t=await $e(e);if(!t||!p)return;let n=p.backgroundCustom,r=`file:${t}`;await Z({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:r,backgroundLooks:Ia(p),...Fa(r)})},Va=async()=>{let e=ga.trim();if(!p||!ce(e))return;let t=p.backgroundCustom,n=`url:${e}`;_a(``),await Z({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:n,backgroundLooks:Ia(p),...Fa(n)})},Ha=e=>{if(!p)return;let t=p.backgroundSource,n=t===`file:${e}`||t===`url:${e}`||t===e;Z({backgroundCustom:p.backgroundCustom.filter(t=>t!==e),...n?{backgroundSource:null,backgroundLooks:Ia(p),...Fa(null)}:{}})},Ua=async()=>{if(!p)return;let t=await it();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;p.protectedPaths.includes(r)||await Z({protectedPaths:[...p.protectedPaths,r]})},Wa=()=>{let e=Nr.trim();p&&e&&!p.protectedPaths.includes(e)&&(Wr(``),Z({protectedPaths:[...p.protectedPaths,e]}))},Ga=()=>{if(!p||!kr)return;let e=kr.value.trim(),t=kr.from;Ar(null),e.length!==0&&e!==t&&Z({protectedPaths:p.protectedPaths.map(n=>n===t?e:n)})},Ka=e=>{p&&Z({protectedPaths:p.protectedPaths.filter(t=>t!==e)})},qa=async()=>{let e=await Te();e.length>0&&await Z({protectedPaths:e})},Ja=()=>{if(!p||!jr)return;let e=jr.value.trim(),t=jr.from;Mr(null),e&&e!==t&&Z({directoryIndexBlacklist:p.directoryIndexBlacklist.map(n=>n===t?e:n)})},Ya=()=>{let e=Gr.trim();p&&e&&!p.directoryIndexBlacklist.includes(e)&&(Kr(``),Z({directoryIndexBlacklist:[...p.directoryIndexBlacklist,e]}))},Xa=async()=>{if(!p)return;let t=await it();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;p.directoryIndexBlacklist.includes(r)||await Z({directoryIndexBlacklist:[...p.directoryIndexBlacklist,r]})},Za=e=>{p&&Z({directoryIndexBlacklist:p.directoryIndexBlacklist.filter(t=>t!==e)})},Qa=()=>{Z({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},$a=()=>{if(!p||qr===null)return;let e=qr.trim()||`yyyy/MM/dd HH:mm`;ri(null),e!==p.timeFormatPattern&&Z({timeFormatPattern:e})},eo=(e,t)=>{ki(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return fe(Tn,i),i})},Q=ae(p?.accentColor,se),$=ae(p?.secondaryColor,oe),to=(e,t)=>{p&&(eo(`accent`,Q),eo(`secondary`,$),Z({accentColor:e,secondaryColor:t}))},no=(e,t)=>{p&&(eo(e,e===`accent`?Q:$),Z(e===`accent`?{accentColor:t}:{secondaryColor:t}))},ro=async()=>{Ri(!0),Bi(null);try{Ii(await Be())}catch{Bi(a(`could_not_check_for_updates`))}finally{Ri(!1)}},io=async()=>{Ui.current=!1,Bi(null),Vi({phase:`changelog`,changelog:``,downloaded:0,total:0,percent:0});try{let e=await Le();e.ok||ao(e.error??``)}catch(e){ao(e instanceof Error?e.message:String(e))}},ao=e=>Vi(t=>t&&{...t,phase:`error`,error:e}),oo=()=>{Vi(null),Je().catch(e=>Bi(e instanceof Error?e.message:String(e)))},so=async()=>{Vi(e=>e&&{...e,phase:`installing`});try{let e=await Pe();e.ok||ao(e.error??a(`the_update_failed`))}catch(e){ao(e instanceof Error?e.message:String(e))}};(0,C.useEffect)(()=>Ke(e=>Vi(t=>t&&{...t,phase:e.phase,downloaded:e.downloaded,total:e.total,percent:e.percent,error:e.error??t.error})),[]),(0,C.useEffect)(()=>Re(e=>Vi(t=>t&&{...t,changelog:e.text})),[]),(0,C.useEffect)(()=>{q?.phase!==`ready`||Ui.current||(Ui.current=!0,so())},[q?.phase]);let co=async()=>{if(!p||!G)return;let e=G.name.trim()||`${G.accent.toUpperCase()} / ${G.secondary.toUpperCase()}`,t=[...p.themePresets,{name:e,accent:G.accent,secondary:G.secondary}];Fi(null),await Z({themePresets:t})},lo=async e=>{p&&await Z({themePresets:p.themePresets.filter((t,n)=>n!==e)})},uo=e=>{let t=Wi;Gi(null),t&&t.role===e&&(e===`accent`?Q:$).toLowerCase()!==t.color.toLowerCase()&&eo(e,t.color)},fo=async()=>{let e=Tr.trim();if(e&&!k){j(!0),M(null);try{Dn(await Xt(e,Dr)),Er(``)}catch{M(a(`could_not_add_the_tag`))}finally{j(!1)}}},po=async(e,t)=>{Dn(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Zt(e,t)||M(a(`could_not_change_the_tag_s_color`))},mo=async e=>{if(k)return;j(!0),M(null);let t=await Yt(e);Dn(await Jt()),t||M(`"${e}" is still used by a folder whose index could not be updated.`),j(!1)},ho=async()=>{let e=Ln;if(!e||k)return;let t=e.value.trim();t.length===0||t===e.name?Vn(null):(j(!0),M(null),await Qt(e.name,t)?(Dn(await Jt()),Vn(null)):M(`Could not rename "${e.name}".`),j(!1))},go=async e=>{let t=new Set(Y.columns??le.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=pt.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await Z({defaultView:{...Y,columns:n}})},_o=async()=>{if(Lt)return;let e=!Ta;Rt(!0),Bt(null);try{let t=await Ye(e),r=t.registered&&t.pathMatches;Ft(t),h(e=>e&&{...e,linksEnabled:r}),n(),r!==e&&Bt(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{Bt(`The request to Windows failed. Try again.`)}finally{Rt(!1)}},vo=async e=>{if(!me){_e(!0);try{pe(await ge(e)),n()}finally{_e(!1)}}},yo=async()=>{if(an||!p)return;let e=!wa;on(!0),cn(null);try{let t=await we(e);Gt(t);let r=xa?t.registered&&t.pathMatches:e;h(e=>e&&{...e,defaultFileManager:r}),n(),xa&&r!==e&&cn(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{cn(`The request to Windows failed. Try again.`)}finally{on(!1)}},bo=async()=>{if(!en){tn(!0),rn(null);try{let e=await Se();Ht(e);let t=e.registered&&e.pathMatches;h(e=>e&&{...e,archiveHandler:t}),n(),t||rn(`Windows did not accept the archive registration. Try again.`)}catch{rn(`The request to Windows failed. Try again.`)}finally{tn(!1)}}},xo=async()=>{if(!en){tn(!0),rn(null);try{let e=await ye();Ht(e),h(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&rn(`The registration is still there. Try turning it off again.`)}catch{rn(`The request to Windows failed. Try again.`)}finally{tn(!1)}}},So=async(e,t)=>{if(!p)return;let n={...p.extensionIcons};t===null?delete n[e]:n[e]=t,await Z({extensionIcons:n})};(0,C.useEffect)(()=>{ft().then(ra,()=>void 0)},[]);let Co=gt(p?.shortcuts),wo=e=>e===hn?mt(p?.globalHotkey):Co[e],To=(0,C.useMemo)(()=>{let e=new Map;for(let{id:t}of gn)for(let n of t===hn?mt(p?.globalHotkey):Co[t]){let r=e.get(n)??[];r.push(t),e.set(n,r)}return e},[Co,p?.globalHotkey]),Eo=e=>{let t=new Set;for(let n of wo(e))for(let r of To.get(n)??[]){if(r===e)continue;let n=gn.find(e=>e.id===r);n&&t.add(a(n.label))}return[...t]},Do=(e,t)=>{Z(e===hn?{globalHotkey:t.length>0?ut(t):null}:{shortcuts:{...p?.shortcuts,[e]:ut(t)}})},Oo=(e,t)=>{let n=[...wo(e)];n.splice(t,1),Do(e,n)};(0,C.useEffect)(()=>{if(!T)return;let e=e=>[`control`,`alt`,`shift`,`meta`].includes(e.toLowerCase()),t=e=>{let t=[...wo(T.action)];T.index>=0?t[T.index]=e:t.includes(e)||t.push(e),ln(null),dn(``),Do(T.action,t)},n=n=>{if(n.preventDefault(),n.stopPropagation(),n.key===`Escape`){ln(null),dn(``);return}if(e(n.key)){T.action===`openInNewTab`?t(at(n)):dn(at(n));return}let r=at(n);r&&t(r)},r=t=>{e(t.key)&&dn(``)};return window.addEventListener(`keydown`,n,!0),window.addEventListener(`keyup`,r,!0),()=>{window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`keyup`,r,!0)}},[T,p]);let ko=async e=>{await Z({recentLimit:Math.min(Math.max(e,0),50)})},Ao=(e,t)=>{let n=t??Ni[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};Pi(t=>({...t,[e]:void 0})),Z(i)},jo=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;Zi(null),await Z({sharePortMode:`custom`,sharePort:n}),await rt(n,`custom`)},Mo=async e=>{let t=e===`custom`,n=t?p?.sharePort??8080:null;await Z({sharePortMode:t?`custom`:`random`,sharePort:n}),await rt(n,t?`custom`:`random`)};(0,C.useEffect)(()=>{ht().then(ta,()=>void 0)},[]);let No=async()=>{Qi.length!==0&&(ta(await vt(Qi)),$i(``))},Po=async()=>{ta(await vt(null))},Fo=async()=>{let e=await $e([`.pfx`,`.p12`]);e&&(aa(e),sa(``),la(null))},Io=async()=>{if(ia)try{ra(await _t(ia,oa.length>0?oa:null)),aa(null),sa(``),la(null)}catch(e){la(e instanceof Error?e.message:String(e))}},Lo=async()=>{try{ra(await ct()),la(null)}catch(e){la(e instanceof Error?e.message:String(e))}},Ro=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;ha(!0),pa(null);try{let e=await ze(t);da(e),pa(e.error),e.error||await Z({startupMode:t})}finally{ha(!1)}},zo=async e=>{await Z({galleryRoots:e.length>0?e:null})},Bo=async()=>{let e=await it(),t=p?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await zo([...t,e])},Vo=async()=>{let e=dt.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await So(e,St),yt(``))},Ho=async()=>{jt(!0);try{let e=await it();if(!e)return;let t=await $e([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;let n=e.replace(/[\\/][^\\/]+$/,``),r=ie(e),i=`file:${t}`;await Ce(n,r,i)&&(ve(),lt({folder:e,icon:t}))}finally{jt(!1)}},Uo=async(e,t)=>{let n={...p?.fonts};t?n[e]=t:delete n[e],await Z({fonts:n})};return(0,w.jsxs)(zn,{children:[(0,w.jsxs)(Bn,{ref:va,children:[(0,w.jsxs)(O,{ref:X(`application`),children:[(0,w.jsx)(D,{note:`the_build_its_yafm_links_and_what_reopens_at_launch`,title:`application`,onReset:()=>J({id:`application`,label:`application`})}),(0,w.jsxs)(A,{children:[(0,w.jsxs)(N,{children:[(0,w.jsx)(I,{children:a(`version`)}),(0,w.jsx)(B,{children:e?`v${e.version}`:`—`})]}),(0,w.jsxs)(N,{children:[(0,w.jsx)(I,{children:a(`platform`)}),(0,w.jsx)(B,{children:e?.platform??`—`})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`language`)}),(0,w.jsx)(R,{children:a(`the_language_the_interface_uses_english_is_the_default_the_system_option_follows_the_operating_system`)})]}),(0,w.jsx)(F,{children:(0,w.jsx)(In,{disabled:!p,onChange:e=>void Z({language:e}),options:[xn,...u.length>0?u:[_n]],value:p?.language??_n})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`picker_window_size`)}),(0,w.jsx)(R,{children:a(`the_size_the_folder_and_file_picker_opens_at_width_and_height_are_in_pixels`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Ur,{inputMode:`numeric`,onBlur:e=>Ao(`width`,e.currentTarget.value),onChange:e=>Pi(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Ni.width??String(p?.pickerWindowWidth??1200)}),(0,w.jsx)(B,{children:`×`}),(0,w.jsx)(Ur,{inputMode:`numeric`,onBlur:e=>Ao(`height`,e.currentTarget.value),onChange:e=>Pi(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Ni.height??String(p?.pickerWindowHeight??800)})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`web_server_port`)}),(0,w.jsx)(R,{children:a(`random_asks_the_operating_system_for_one_free_port_when_the_first_web_share_starts_and_every_web_share_keeps_using_it_custom_always_tries_the_port_below`)})]}),(0,w.jsx)(F,{children:(0,w.jsx)(Qe,{disabled:!p,onChange:e=>void Mo(e),options:[{value:`random`,label:a(`random`)},{value:`custom`,label:a(`custom_port`)}],value:p?.sharePortMode??`random`,width:160})})]}),p?.sharePortMode===`custom`&&(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`custom_port`)}),(0,w.jsx)(R,{children:a(`a_number_from_1_to_65535_if_it_is_already_in_use_the_app_asks_for_a_free_port_instead`)})]}),(0,w.jsx)(F,{children:(0,w.jsx)(Ur,{inputMode:`numeric`,onBlur:e=>void jo(e.currentTarget.value),onChange:e=>Zi(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:Xi??(p?.sharePort?String(p.sharePort):``)})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`link_paths`)}),(0,w.jsx)(R,{children:a(`relative_links_keep_working_when_the_link_and_its_target_move_together_absolute_links_always_store_the_full_target_path`)})]}),(0,w.jsx)(F,{children:(0,w.jsx)(Qe,{disabled:!p,onChange:e=>void Z({linkPathMode:e}),options:[{value:`relative`,label:a(`relative`)},{value:`absolute`,label:a(`absolute`)}],value:p?.linkPathMode??`relative`,width:160})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`open_yafm_links`)}),(0,w.jsx)(R,{children:a(`registers_this_app_for_yafm_links_for_the_current_user_only_turning_it_on_writes_this_copy_s_path_starting_the_app_never_touches_the_registry`)}),Pt.registered&&!Pt.pathMatches&&(0,w.jsx)(z,{children:a(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:Pt.registeredPath??`?`})}),zt&&(0,w.jsx)(z,{children:zt})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Hr,{$on:Ta,children:a(Ta?`active`:`off`)}),(0,w.jsx)(H,{$on:Ta,disabled:Lt,onClick:()=>void _o(),title:a(Ta?`stop_opening_yafm_links`:`open_yafm_links_with_this_app`),type:`button`,children:(0,w.jsx)(U,{})})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`use_as_the_default_file_manager`)}),(0,w.jsx)(R,{children:a(`registers_this_app_for_folder_opens_on_this_account_explorer_stays_available_from_the_context_menu_on_linux_this_sets_the_inode_directory_default`)}),x?.registered&&!x.pathMatches&&(0,w.jsx)(z,{children:a(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:x.registeredPath??`?`})}),sn&&(0,w.jsx)(z,{children:sn})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Hr,{$on:wa,children:a(wa?`active`:`off`)}),(0,w.jsx)(H,{$on:wa,disabled:!p||an,onClick:()=>void yo(),title:a(wa?`stop_using_this_app_for_folders`:`use_this_app_for_folders`),type:`button`,children:(0,w.jsx)(U,{})})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`open_archives_with_this_app`)}),(0,w.jsx)(R,{children:a(`registers_this_app_for_zip_7z_rar_tar_and_the_other_archive_types_on_this_account_so_double_clicking_one_shows_it_as_a_folder_here_windows_may_still_ask_once_which_app_to_use`)}),(0,w.jsx)(R,{children:a(`when_this_is_off_opening_an_archive_uses_the_system_s_default_application_instead`)}),y?.registered&&!y.pathMatches&&(0,w.jsx)(z,{children:a(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:y.registeredPath??`?`})}),nn&&(0,w.jsx)(z,{children:nn})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Hr,{$on:Sa,children:a(Sa?`active`:`off`)}),(0,w.jsxs)(W,{disabled:!p||en||Sa,onClick:()=>void bo(),type:`button`,children:[(0,w.jsx)(Vt,{size:13}),a(`register`)]}),e?.platform===`windows`&&(0,w.jsxs)(W,{onClick:()=>void Ie(`ms-settings:defaultapps`),type:`button`,children:[(0,w.jsx)(xt,{size:13}),a(`default_apps`)]}),(0,w.jsxs)(Vr,{disabled:!p||en||!Ca,onClick:()=>void xo(),type:`button`,children:[(0,w.jsx)(S,{size:13}),a(`unregister`)]})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`reopen_the_tabs_that_were_open`)}),(0,w.jsx)(R,{children:a(`keeps_the_tabs_and_the_folder_each_one_shows_so_they_come_back_after_a_restart_a_folder_passed_on_the_command_line_takes_over_instead`)})]}),(0,w.jsx)(H,{$on:p?.restoreTabs??!0,disabled:!p,onClick:()=>void Z({restoreTabs:!p?.restoreTabs}),type:`button`,children:(0,w.jsx)(U,{})})]})]})]}),(0,w.jsxs)(O,{ref:X(`share-access`),children:[(0,w.jsx)(D,{note:`share_access_note`,title:`share_access`,onReset:()=>J({id:`share-access`,label:`share_access`})}),(0,w.jsxs)(A,{children:[(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(I,{children:a(`share_access_require_approval`)}),(0,w.jsx)(m,{})]}),(0,w.jsx)(R,{children:a(`share_access_note`)})]}),(0,w.jsx)(H,{$on:p?.shareAccessEnabled??!0,disabled:!p,onClick:()=>void Z({shareAccessEnabled:!(p?.shareAccessEnabled??!0)}),type:`button`,children:(0,w.jsx)(U,{})})]}),(0,w.jsxs)(N,{children:[(0,w.jsx)(P,{children:(0,w.jsx)(I,{children:a(`share_access_approval_minutes`)})}),(0,w.jsx)(F,{children:(0,w.jsx)(Pr,{max:1440,min:1,onChange:e=>void Z({shareApprovalMinutes:Math.min(1440,Math.max(1,Number(e.target.value)||60))}),type:`number`,value:p?.shareApprovalMinutes??60})})]}),(0,w.jsxs)(N,{children:[(0,w.jsx)(P,{children:(0,w.jsx)(I,{children:a(`share_access_denial_seconds`)})}),(0,w.jsx)(F,{children:(0,w.jsx)(Pr,{max:3600,min:1,onChange:e=>void Z({shareDenialSeconds:Math.min(3600,Math.max(1,Number(e.target.value)||10))}),type:`number`,value:p?.shareDenialSeconds??10})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(L,{children:(0,w.jsx)(I,{children:a(`password`)})}),(0,w.jsx)(R,{children:a(`share_access_password_note`)}),ea&&(0,w.jsx)(R,{children:a(`share_access_password_is_set`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Fr,{autoComplete:`new-password`,onChange:e=>$i(e.target.value),placeholder:a(`password`),type:`password`,value:Qi}),(0,w.jsxs)(W,{disabled:Qi.length===0,onClick:()=>void No(),type:`button`,children:[(0,w.jsx)(v,{size:13}),a(`save`)]}),ea&&(0,w.jsxs)(Vr,{onClick:()=>void Po(),type:`button`,children:[(0,w.jsx)(S,{size:13}),a(`clear`)]})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`share_access_https`)}),(0,w.jsx)(R,{children:a(`share_access_https_note`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Hr,{$on:p?.shareHttps??!1,children:p?.shareHttps?a(`active`):a(`off`)}),(0,w.jsx)(H,{$on:p?.shareHttps??!1,disabled:!p,onClick:()=>void Z({shareHttps:!(p?.shareHttps??!1)}),title:p?.shareHttps?a(`share_access_https_off`):a(`share_access_https_on`),type:`button`,children:(0,w.jsx)(U,{})})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`share_access_certificate`)}),(0,w.jsx)(R,{children:na?`${na.subject} · ${a(`share_access_expires`)}: ${new Date(na.expiresAt).toLocaleString()}`:a(`share_access_certificate_self_signed`)}),na&&(0,w.jsx)(R,{children:na.selfSigned?a(`share_access_certificate_self_signed`):a(`share_access_certificate_imported`)}),ca&&(0,w.jsx)(z,{children:ca})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(V,{onClick:()=>void Fo(),type:`button`,children:a(`share_access_import_certificate`)}),(0,w.jsx)(V,{onClick:()=>void Lo(),type:`button`,children:a(`share_access_reset_certificate`)})]})]}),ia&&(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`password`)}),(0,w.jsx)(R,{children:ia})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Fr,{autoComplete:`off`,onChange:e=>sa(e.target.value),placeholder:a(`password`),type:`password`,value:oa}),(0,w.jsx)(V,{onClick:()=>void Io(),type:`button`,children:a(`ok`)}),(0,w.jsx)(V,{onClick:()=>aa(null),type:`button`,children:a(`cancel`)})]})]}),(0,w.jsx)(N,{children:(0,w.jsxs)(P,{children:[(0,w.jsx)(L,{children:(0,w.jsx)(I,{children:a(`devices`)})}),(0,w.jsx)(R,{children:a(`share_access_devices_note`)})]})}),(0,w.jsx)(On,{approvalMinutes:p?.shareApprovalMinutes??60,denialSeconds:p?.shareDenialSeconds??10})]})]}),(0,w.jsxs)(O,{ref:X(`startup`),children:[(0,w.jsx)(D,{note:`how_the_app_joins_your_login_session_and_whether_it_opens_quietly_in_the_tray`,title:`startup`,onReset:()=>J({id:`startup`,label:`startup`})}),(0,w.jsxs)(A,{children:[(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`start_with_the_computer`)}),(0,w.jsx)(R,{children:a(`a_shortcut_uses_the_startup_folder_or_xdg_autostart_a_task_uses_task_scheduler_or_a_systemd_user_service_which_starts_earlier_and_is_usually_faster`)}),fa&&(0,w.jsx)(z,{children:fa}),ua&&!ua.supported&&(0,w.jsx)(z,{children:a(`this_platform_cannot_create_a_per_user_startup_entry`)})]}),(0,w.jsx)(F,{children:(0,w.jsx)(Qe,{disabled:!p||ma||ua!==null&&!ua.supported,onChange:e=>void Ro(e),options:[{value:`none`,label:a(`none`)},{value:`shortcut`,label:a(`shortcut`)},{value:`task`,label:a(`scheduled_task`)}],value:ua?.mode??p?.startupMode??`none`,width:170})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`start_hidden_in_the_tray`)}),(0,w.jsx)(R,{children:a(`launch_straight_to_the_tray_icon_instead_of_showing_the_window_the_tray_menu_opens_it_again`)})]}),(0,w.jsx)(F,{children:(0,w.jsx)(H,{$on:p?.startHidden??!1,disabled:!p,onClick:()=>void Z({startHidden:!p?.startHidden}),type:`button`,children:(0,w.jsx)(U,{})})})]})]})]}),(0,w.jsxs)(O,{ref:X(`fonts`),children:[(0,w.jsx)(D,{note:`choose_the_font_each_part_of_the_interface_uses_every_font_installed_on_this_system_is_listed_each_one_drawn_in_its_own_face`,title:`fonts`,onReset:()=>J({id:`fonts`,label:`fonts`})}),(0,w.jsxs)(A,{children:[We.map(e=>(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(e.label)}),(0,w.jsx)(R,{children:a(`falls_back_to_font_until_another_family_is_chosen`,{font:a(e.fallback)})})]}),(0,w.jsx)(F,{children:(0,w.jsx)($t,{defaultLabel:a(e.fallback),disabled:!p,fonts:Ji,onChange:t=>void Uo(e.id,t),sample:e.sample,value:p?.fonts?.[e.id]??null})})]},e.id)),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`reset`)}),(0,w.jsx)(R,{children:a(`back_to_the_app_s_built_in_font_for_every_role`)})]}),(0,w.jsx)(F,{children:(0,w.jsxs)(W,{onClick:()=>void Z({fonts:{}}),type:`button`,children:[(0,w.jsx)(b,{size:13}),a(`reset`)]})})]})]})]}),(0,w.jsxs)(O,{ref:X(`time`),children:[(0,w.jsx)(D,{note:`every_timestamp_in_the_interface_uses_this_format_follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`,title:`time_format`,onReset:()=>J({id:`time`,label:`time_format`})}),(0,w.jsxs)(A,{children:[(0,w.jsxs)(Un,{children:[(0,w.jsxs)(Wn,{children:[(0,w.jsx)(I,{children:a(`format`)}),(0,w.jsx)(R,{children:a(`follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`)})]}),(0,w.jsx)(hi,{children:yn.map(e=>(0,w.jsx)(gi,{$active:(p?.timeFormat??`24`)===e.id,onClick:()=>void Z({timeFormat:e.id}),type:`button`,children:a(e.label)},e.id))}),(p?.timeFormat??`24`)===`custom`&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(_i,{"aria-label":a(`pattern`),onBlur:$a,onChange:e=>ri(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),$a()):e.key===`Escape`&&ri(null)},spellCheck:!1,value:qr??p?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,w.jsx)(R,{children:a(`tokens_yyyy_year_mm_month_dd_day_hh_24_hour_mm_minute_ss_second_hh_12_hour_and_a_am_pm_other_characters_are_copied`)})]}),(0,w.jsxs)(vi,{children:[(0,w.jsx)(`span`,{children:a(`preview`)}),(0,w.jsx)(`code`,{children:ne(bn,p?.timeFormat,qr??p?.timeFormatPattern)})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`relative_times`)}),(0,w.jsx)(R,{children:a(`shows_recent_timestamps_as_seconds_and_minutes_ago_and_keeps_them_counting`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Hr,{$on:p?.relativeTime??!0,children:p?.relativeTime??!0?a(`active`):a(`off`)}),(0,w.jsx)(H,{$on:p?.relativeTime??!0,disabled:!p,onClick:()=>void Z({relativeTime:!(p?.relativeTime??!0)}),title:a(`show_recent_timestamps_as_seconds_and_minutes_ago`),type:`button`,children:(0,w.jsx)(U,{})})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`switch_to_the_full_time_after`)}),(0,w.jsx)(R,{children:a(`older_timestamps_use_the_format_above_instead_of_a_relative_one`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Zr,{disabled:!(p?.relativeTime??!0),max:1440,min:1,onChange:e=>void Z({relativeTimeWindowMinutes:Number(e.target.value)}),step:1,type:`range`,value:p?.relativeTimeWindowMinutes??60}),(0,w.jsxs)(B,{children:[p?.relativeTimeWindowMinutes??60,` min`]})]})]})]})]}),(0,w.jsxs)(O,{ref:X(`updates`),children:[(0,w.jsx)(D,{note:`the_running_build_and_the_newest_one_published`,title:`updates`}),(0,w.jsxs)(A,{children:[(0,w.jsxs)(N,{children:[(0,w.jsx)(I,{children:a(`current_version`)}),(0,w.jsx)(B,{children:e?`v${e.version}`:`—`})]}),(0,w.jsxs)(N,{children:[(0,w.jsx)(I,{children:a(`latest_version`)}),(0,w.jsx)(B,{children:K?`v${K.latest}`:`—`})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:K?K.available?a(`version_version_is_available`,{version:K.latest}):a(`you_are_on_the_latest_version`):a(`not_checked_yet`)}),(0,w.jsx)(R,{children:K?.available?a(`the_installer_downloads_installs_itself_and_closes_the_app`):a(`reads_the_version_file_the_release_workflow_publishes`)})]}),(0,w.jsxs)(F,{children:[K?.available&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(W,{onClick:()=>void Ge(),type:`button`,children:[(0,w.jsx)(kt,{size:13}),a(`open_release_page`)]}),xa&&(0,w.jsxs)(W,{disabled:q!==null,onClick:()=>void io(),type:`button`,children:[(0,w.jsx)(Et,{size:13}),a(`download_and_install`)]})]}),(0,w.jsxs)(W,{disabled:Li||q!==null,onClick:()=>void ro(),type:`button`,children:[(0,w.jsx)(b,{size:13}),a(Li?`checking`:`check_for_updates`)]}),(0,w.jsxs)(W,{onClick:()=>void Me(),type:`button`,children:[(0,w.jsx)(wt,{size:13}),a(`open_log_folder`)]})]})]}),zi&&(0,w.jsx)(N,{children:(0,w.jsx)(z,{children:zi})})]})]}),(0,w.jsxs)(O,{ref:X(`colors`),children:[(0,w.jsx)(D,{note:`the_accent_and_highlight_colours_the_whole_window_uses`,title:`colors`,onReset:()=>J({id:`colors`,label:`colors`})}),(0,w.jsxs)(A,{children:[(0,w.jsxs)(Un,{children:[(0,w.jsxs)(Wn,{children:[(0,w.jsx)(I,{children:a(`theme`)}),(0,w.jsx)(R,{children:a(`follow_the_operating_system_or_always_use_the_light_or_dark_palette`)})]}),(0,w.jsx)(hi,{children:vn.map(e=>(0,w.jsx)(gi,{$active:(p?.themeMode??`system`)===e.id,onClick:()=>void Z({themeMode:e.id}),type:`button`,children:a(e.label)},e.id))})]}),(0,w.jsxs)(Un,{children:[(0,w.jsxs)(Wn,{children:[(0,w.jsx)(I,{children:a(`presets`)}),(0,w.jsx)(R,{children:a(`one_click_changes_the_accent_and_the_highlight_together`)})]}),(0,w.jsxs)(Gn,{children:[Oe.map(e=>(0,w.jsxs)(Kn,{$on:Q.toLowerCase()===e.accent&&$.toLowerCase()===e.secondary,onClick:()=>to(e.accent,e.secondary),title:`${a(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,w.jsxs)($n,{children:[(0,w.jsx)(`i`,{style:{background:e.accent}}),(0,w.jsx)(`i`,{style:{background:e.secondary}})]}),(0,w.jsx)(qn,{children:a(e.name)})]},e.name)),ba.map((e,t)=>(0,w.jsxs)(Jn,{children:[(0,w.jsxs)(Kn,{$on:Q.toLowerCase()===e.accent.toLowerCase()&&$.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>to(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,w.jsxs)($n,{children:[(0,w.jsx)(`i`,{style:{background:e.accent}}),(0,w.jsx)(`i`,{style:{background:e.secondary}})]}),(0,w.jsx)(qn,{children:e.name})]}),(0,w.jsx)(Yn,{onClick:()=>void lo(t),title:a(`remove_preset`),type:`button`,children:(0,w.jsx)(S,{size:9})})]},`${e.name}-${t}`)),G?(0,w.jsxs)(Zn,{children:[(0,w.jsxs)($n,{children:[(0,w.jsx)(`i`,{style:{background:G.accent}}),(0,w.jsx)(`i`,{style:{background:G.secondary}})]}),(0,w.jsx)(Qn,{autoFocus:!0,maxLength:24,onChange:e=>Fi({...G,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),co()):e.key===`Escape`&&(e.preventDefault(),Fi(null))},placeholder:a(`preset_name`),spellCheck:!1,value:G.name}),(0,w.jsxs)(V,{onClick:()=>void co(),type:`button`,children:[(0,w.jsx)(v,{size:13}),a(`save`)]}),(0,w.jsxs)(V,{onClick:()=>Fi(null),type:`button`,children:[(0,w.jsx)(S,{size:13}),a(`cancel`)]})]}):(0,w.jsxs)(Xn,{disabled:!p,onClick:()=>Fi({name:``,accent:Q,secondary:$}),title:a(`save_the_current_colours_as_a_preset`),type:`button`,children:[(0,w.jsx)(_,{size:12}),a(`add_preset`)]})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`accent_color`)}),(0,w.jsx)(R,{children:a(`buttons_selections_focus_rings_and_active_navigation`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Rn,{colors:ii.accent,current:Q,onApply:e=>no(`accent`,e)}),(0,w.jsx)(zr,{"aria-label":a(`accent_color`),disabled:!p,onBlur:()=>uo(`accent`),onChange:e=>void Z({accentColor:e.target.value}),onFocus:()=>Gi({role:`accent`,color:Q}),type:`color`,value:Q}),(0,w.jsx)(Br,{children:Q.toUpperCase()})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`secondary_color`)}),(0,w.jsx)(R,{children:a(`gradients_highlights_and_the_second_end_of_the_accent_ramp`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Rn,{colors:ii.secondary,current:$,onApply:e=>no(`secondary`,e)}),(0,w.jsx)(zr,{"aria-label":a(`secondary_color`),disabled:!p,onBlur:()=>uo(`secondary`),onChange:e=>void Z({secondaryColor:e.target.value}),onFocus:()=>Gi({role:`secondary`,color:$}),type:`color`,value:$}),(0,w.jsx)(Br,{children:$.toUpperCase()})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`reset_colors`)}),(0,w.jsx)(R,{children:a(`returns_the_interface_to_the_default_blue_and_indigo_theme`)})]}),(0,w.jsx)(F,{children:(0,w.jsxs)(V,{disabled:!p,onClick:()=>{eo(`accent`,Q),eo(`secondary`,$),Z({accentColor:null,secondaryColor:null})},type:`button`,children:[(0,w.jsx)(b,{size:13}),a(`reset`)]})})]})]})]}),(0,w.jsxs)(O,{ref:X(`background`),children:[(0,w.jsx)(D,{note:`a_picture_or_video_behind_the_whole_window_from_the_title_bar_to_the_bottom`,title:`background`,onReset:()=>J({id:`background`,label:`background`})}),(0,w.jsxs)(A,{children:[(0,w.jsxs)(Un,{children:[(0,w.jsxs)(Wn,{children:[(0,w.jsx)(I,{children:a(`wallpaper`)}),(0,w.jsx)(R,{children:a(`none_keeps_the_normal_dark_surface_every_built_in_concept_comes_in_the_app_s_colour_presets_your_own_pictures_sv_gs_and_videos_are_kept_in_the_gallery`)})]}),(0,w.jsx)(ti,{children:(0,w.jsx)(ni,{$active:!p?.backgroundSource,onClick:()=>La(null),title:a(`none`),type:`button`,children:(0,w.jsx)(si,{children:a(`none`)})})}),(0,w.jsxs)(Qr,{children:[Ae.map(e=>(0,w.jsxs)($r,{children:[(0,w.jsx)(ei,{children:a(e.name)}),(0,w.jsx)(ti,{children:e.variants.map(t=>(0,w.jsx)(ni,{$active:p?.backgroundSource===t.id,onClick:()=>La(t.id),title:`${a(e.name)} · ${a(t.preset)}`,type:`button`,children:(0,w.jsx)(`img`,{alt:``,src:nt===`light`?t.lightUrl:t.url})},t.id))})]},e.id)),(0,w.jsxs)($r,{children:[(0,w.jsx)(ei,{children:a(`motion`)}),(0,w.jsx)(ti,{children:De.map(e=>(0,w.jsxs)(ni,{$active:p?.backgroundSource===e.id,onClick:()=>La(e.id),title:a(e.name),type:`button`,children:[(0,w.jsx)(`img`,{alt:``,src:e.poster}),(0,w.jsx)(ai,{children:(0,w.jsx)(Mt,{size:11})})]},e.id))})]}),(0,w.jsxs)($r,{children:[(0,w.jsx)(ei,{children:a(`custom`)}),(0,w.jsxs)(ti,{children:[(p?.backgroundCustom??[]).map(e=>(0,w.jsx)(Fn,{active:p?.backgroundSource===`file:${e}`||p?.backgroundSource===`url:${e}`||p?.backgroundSource===e,onRemove:()=>Ha(e),onSelect:()=>La(ce(e)?`url:${e}`:`file:${e}`),path:e},e)),(0,w.jsxs)(oi,{onClick:()=>void Ba([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,w.jsx)(_,{size:12}),a(`image_2`)]}),(0,w.jsxs)(oi,{onClick:()=>void Ba([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,w.jsx)(_,{size:12}),a(`video`)]})]})]})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`image_or_video_url`)}),(0,w.jsx)(R,{children:a(`paste_a_direct_http_s_link_the_picture_or_video_is_loaded_from_the_network_each_time_the_window_starts`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Ur,{onChange:e=>_a(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Va()},placeholder:`https://…`,value:ga}),(0,w.jsxs)(V,{disabled:!ce(ga),onClick:()=>void Va(),type:`button`,children:[(0,w.jsx)(_,{size:13}),a(`add`)]})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsx)(I,{children:a(`blur`)}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Zr,{max:40,min:0,onChange:e=>Ra({backgroundBlur:Number(e.target.value)}),type:`range`,value:p?.backgroundBlur??0}),(0,w.jsxs)(B,{children:[p?.backgroundBlur??0,`px`]})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsx)(I,{children:a(`saturation`)}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Zr,{max:200,min:0,onChange:e=>Ra({backgroundSaturation:Number(e.target.value)}),type:`range`,value:p?.backgroundSaturation??100}),(0,w.jsxs)(B,{children:[p?.backgroundSaturation??100,`%`]})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsx)(I,{children:a(`brightness`)}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Zr,{max:150,min:40,onChange:e=>Ra({backgroundBrightness:Number(e.target.value)}),type:`range`,value:p?.backgroundBrightness??100}),(0,w.jsxs)(B,{children:[p?.backgroundBrightness??100,`%`]})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`reset_the_look`)}),(0,w.jsx)(R,{children:a(`returns_this_background_to_the_default_blur_saturation_and_brightness`)})]}),(0,w.jsx)(F,{children:(0,w.jsxs)(V,{disabled:!p||p.backgroundBlur===0&&p.backgroundSaturation===100&&p.backgroundBrightness===100&&!Pa(p.backgroundSource),onClick:za,type:`button`,children:[(0,w.jsx)(b,{size:13}),a(`reset`)]})})]})]})]}),(0,w.jsxs)(O,{ref:X(`safety`),children:[(0,w.jsx)(D,{note:`deleting_moving_renaming_or_writing_to_a_protected_folder_anything_inside_a_recursive_entry_or_a_folder_that_contains_one_always_waits_for_an_explicit_confirmation`,title:`safety`,onReset:()=>J({id:`safety`,label:`safety`})}),(0,w.jsxs)(A,{children:[(0,w.jsxs)(Un,{children:[(0,w.jsxs)(Wn,{children:[(0,w.jsx)(I,{children:a(`protected_folders`)}),(0,w.jsx)(R,{children:a(`rules_are_full_path_globs_stays_inside_one_name_crosses_folders_and_matches_one_character_a_rule_without_a_folder_part_such_as_log_applies_to_that_name_at_any_depth_vars_vars_and_are_expanded_first`)})]}),(0,w.jsx)(ci,{children:(p?.protectedPaths??[]).map(e=>(0,w.jsxs)(li,{children:[(0,w.jsx)(ui,{"aria-label":a(`protected_path`),onBlur:Ga,onChange:t=>Ar({from:e,value:t.target.value}),onFocus:()=>Ar({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Ga()):e.key===`Escape`&&Ar(null)},spellCheck:!1,value:kr?.from===e?kr.value:e}),(0,w.jsx)(di,{onClick:()=>Ka(e),title:a(`remove`),type:`button`,children:(0,w.jsx)(S,{size:10})})]},e))}),(0,w.jsxs)(pi,{children:[(0,w.jsx)(mi,{"aria-label":a(`new_protected_rule`),onChange:e=>Wr(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Wa())},placeholder:`*.log`,spellCheck:!1,value:Nr}),(0,w.jsxs)(V,{onClick:Wa,type:`button`,children:[(0,w.jsx)(_,{size:13}),a(`add_the_rule`)]})]}),(0,w.jsxs)(fi,{children:[(0,w.jsxs)(V,{onClick:()=>void qa(),type:`button`,children:[(0,w.jsx)(b,{size:13}),a(`restore_defaults`)]}),(0,w.jsxs)(V,{onClick:()=>void Ua(),type:`button`,children:[(0,w.jsx)(wt,{size:13}),a(`add_folder_2`)]})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`confirmation_delay`)}),(0,w.jsx)(R,{children:a(`the_delete_button_in_the_protected_folder_dialog_stays_disabled_for_this_many_seconds_at_least_2`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Zr,{max:30,min:2,onChange:e=>void Z({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:p?.deleteDelaySeconds??5}),(0,w.jsxs)(B,{children:[p?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,w.jsxs)(O,{ref:X(`tags`),children:[(0,w.jsx)(D,{note:`every_tag_in_the_catalogue_add_rename_recolour_or_remove_them_here`,title:`tags`}),(0,w.jsxs)(A,{children:[(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(Lr,{"aria-label":a(`color_of_the_new_tag`),onChange:e=>Or(e.target.value),type:`color`,value:Dr}),(0,w.jsx)(Ur,{onChange:e=>Er(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),fo())},placeholder:a(`new_tag`),spellCheck:!1,value:Tr})]}),(0,w.jsx)(R,{children:a(`add_a_tag_here_it_is_available_in_every_folder`)})]}),(0,w.jsx)(F,{children:(0,w.jsxs)(V,{disabled:k||Tr.trim().length===0,onClick:()=>void fo(),type:`button`,children:[(0,w.jsx)(_,{size:13}),a(`add`)]})})]}),er&&(0,w.jsx)(N,{children:(0,w.jsx)(z,{children:er})}),Sn.length===0&&(0,w.jsx)(N,{children:(0,w.jsx)(R,{children:a(`no_tags_yet_add_one_below_it_is_available_in_every_folder`)})}),Sn.map(e=>(0,w.jsx)(N,{children:Ln?.name===e.name?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(Lr,{"aria-label":a(`color_of_tag`,{tag:e.name}),onChange:t=>void po(e.name,t.target.value),title:a(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,w.jsx)(Rr,{autoFocus:!0,disabled:k,onChange:t=>Vn({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),ho()):e.key===`Escape`&&(e.preventDefault(),Vn(null))},value:Ln.value})]}),(0,w.jsx)(R,{children:a(`press_enter_to_save_escape_to_cancel`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsxs)(V,{disabled:k,onClick:()=>void ho(),type:`button`,children:[(0,w.jsx)(v,{size:13}),a(`save`)]}),(0,w.jsxs)(V,{disabled:k,onClick:()=>Vn(null),type:`button`,children:[(0,w.jsx)(S,{size:13}),a(`cancel`)]})]})]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(Lr,{"aria-label":a(`color_of_tag`,{tag:e.name}),onChange:t=>void po(e.name,t.target.value),title:a(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,w.jsx)(I,{children:e.name})]}),(0,w.jsx)(R,{children:te(a,e.folders,`used_in_1_folder_renaming_or_removing_it_updates_that_folder_s_index`,`used_in_count_folders_renaming_or_removing_it_updates_those_folders_indexes`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsxs)(V,{disabled:k,onClick:()=>Vn({name:e.name,value:e.name}),type:`button`,children:[(0,w.jsx)(Ut,{size:13}),a(`edit`)]}),(0,w.jsxs)(Vr,{disabled:k,onClick:()=>void mo(e.name),type:`button`,children:[(0,w.jsx)(Wt,{size:13}),a(`remove`)]})]})]})},e.name))]})]}),(0,w.jsxs)(O,{ref:X(`files-view`),children:[(0,w.jsx)(D,{note:`the_defaults_every_folder_starts_with_a_folder_can_still_override_them`,title:`files_view`,global:!0,onReset:()=>J({id:`files-view`,label:`files_view`})}),(0,w.jsxs)(A,{children:[(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`default_view`)}),(0,w.jsx)(R,{children:a(`the_mode_every_folder_starts_with_a_folder_can_still_remember_its_own_list_or_grid_mode_from_the_title_bar`)})]}),(0,w.jsx)(F,{children:(0,w.jsxs)(Yr,{children:[(0,w.jsx)(Xr,{$on:Y.mode===`list`,onClick:()=>void Z({defaultView:{...Y,mode:`list`}}),type:`button`,children:a(`list`)}),(0,w.jsx)(Xr,{$on:Y.mode===`grid`,onClick:()=>void Z({defaultView:{...Y,mode:`grid`}}),type:`button`,children:a(`grid`)})]})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`list_icon_size`)}),(0,w.jsx)(R,{children:a(`the_icon_in_the_list_rows`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Zr,{max:48,min:16,onChange:e=>void Z({defaultView:{...Y,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Y.iconSize}),(0,w.jsxs)(B,{children:[Y.iconSize,`px`]})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`grid_size`)}),(0,w.jsx)(R,{children:a(`the_height_of_a_grid_tile_the_icon_inside_follows_it`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Zr,{max:260,min:100,onChange:e=>void Z({defaultView:{...Y,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Y.gridSize}),(0,w.jsxs)(B,{children:[Y.gridSize,`px`]})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(I,{children:a(`selection_checkboxes`)}),(0,w.jsx)(m,{})]}),(0,w.jsx)(R,{children:a(`show_a_checkbox_before_every_name_the_way_explorer_does_checked_entries_can_be_copied_cut_or_deleted_together`)})]}),(0,w.jsx)(H,{$on:p?.showCheckboxes??!0,disabled:!p,onClick:()=>void Z({showCheckboxes:!(p?.showCheckboxes??!0)}),type:`button`,children:(0,w.jsx)(U,{})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(I,{children:a(`open_with_a_single_click`)}),(0,w.jsx)(m,{})]}),(0,w.jsx)(R,{children:a(`off_means_double_click_like_explorer_s_default_the_checkbox_still_only_selects_so_a_click_on_it_never_opens_the_entry`)})]}),(0,w.jsx)(H,{$on:p?.openOnSingleClick??!1,disabled:!p,onClick:()=>void Z({openOnSingleClick:!(p?.openOnSingleClick??!1)}),type:`button`,children:(0,w.jsx)(U,{})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(I,{children:a(`open_the_file_tray_while_dragging`)}),(0,w.jsx)(m,{})]}),(0,w.jsx)(R,{children:a(`the_tray_appears_when_a_drag_starts_and_closes_again_if_it_is_still_empty_off_leaves_it_to_the_title_bar_button`)})]}),(0,w.jsx)(H,{$on:p?.trayAutoShow??!0,disabled:!p,onClick:()=>void Z({trayAutoShow:!(p?.trayAutoShow??!0)}),type:`button`,children:(0,w.jsx)(U,{})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(I,{children:a(`confirm_before_deleting`)}),(0,w.jsx)(m,{})]}),(0,w.jsx)(R,{children:a(`asks_before_moving_items_to_the_recycle_bin_shift_del_always_asks_because_that_deletes_permanently`)})]}),(0,w.jsx)(H,{$on:p?.confirmDelete??!1,disabled:!p,onClick:()=>void Z({confirmDelete:!(p?.confirmDelete??!1)}),type:`button`,children:(0,w.jsx)(U,{})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(I,{children:a(`automatic_rename_suffix`)}),(0,w.jsx)(m,{})]}),(0,w.jsx)(R,{children:a(`the_suffix_added_when_a_copy_or_a_new_item_would_have_the_same_name`)})]}),(0,w.jsx)(F,{children:(0,w.jsx)(Qe,{disabled:!p,onChange:e=>void Z({conflictNameStyle:e}),options:[{value:`space_parentheses`,label:`Test (1).txt`},{value:`underscore`,label:`Test_1.txt`},{value:`dot`,label:`Test.1.txt`}],value:p?.conflictNameStyle??`space_parentheses`,width:160})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(I,{children:a(`play_audio_in_video_previews`)}),(0,w.jsx)(m,{})]}),(0,w.jsx)(R,{children:a(`video_previews_play_muted_by_default_turn_this_on_to_hear_their_audio_while_the_details_panel_is_open`)})]}),(0,w.jsx)(H,{$on:p?.previewVideoAudio??!1,disabled:!p,onClick:()=>void Z({previewVideoAudio:!(p?.previewVideoAudio??!1)}),type:`button`,children:(0,w.jsx)(U,{})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(I,{children:a(`autoplay_video_previews`)}),(0,w.jsx)(m,{})]}),(0,w.jsx)(R,{children:a(`off_by_default_turn_this_on_to_start_a_video_as_soon_as_its_details_panel_opens_the_play_button_still_works_when_it_is_off`)})]}),(0,w.jsx)(H,{$on:p?.previewVideoAutoplay??!1,disabled:!p,onClick:()=>void Z({previewVideoAutoplay:!(p?.previewVideoAutoplay??!1)}),type:`button`,children:(0,w.jsx)(U,{})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(I,{children:a(`preview_panel_under_the_list`)}),(0,w.jsx)(m,{})]}),(0,w.jsx)(R,{children:a(`shows_the_pictures_videos_and_documents_the_shell_can_preview_as_grid_tiles_below_the_list_the_tiles_follow_the_grid_size_and_the_panel_only_appears_in_list_mode`)})]}),(0,w.jsx)(H,{$on:Y.showImages??!0,onClick:()=>void Z({defaultView:{...Y,showImages:!(Y.showImages??!0)}}),type:`button`,children:(0,w.jsx)(U,{})})]}),(0,w.jsx)(N,{children:(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(I,{children:a(`columns`)}),(0,w.jsx)(m,{})]}),(0,w.jsx)(R,{children:a(`shown_in_every_folder_changing_them_changes_all_folders_at_once`)})]})}),(0,w.jsx)(N,{children:(0,w.jsxs)(yi,{children:[pt.map(e=>(0,w.jsxs)(bi,{children:[(0,w.jsx)(`input`,{checked:(Y.columns??[]).includes(e.id),onChange:()=>void go(e.id),type:`checkbox`}),(0,w.jsx)(`span`,{children:a(e.label)})]},e.id)),(0,w.jsxs)(bi,{children:[(0,w.jsx)(`input`,{checked:(Y.columns??[]).includes(`linkTarget`),onChange:()=>void go(`linkTarget`),type:`checkbox`}),(0,w.jsx)(`span`,{children:a(`link_target_after_the_name`)})]})]})})]}),(0,w.jsxs)(ji,{children:[a(`the_default_view_list_icon_size_and_grid_size_are_only_defaults_a_folder_can_still_remember_its_own_from_the_title_bar`),` `,(0,w.jsx)(m,{}),` `,a(`anything_marked_as_global_always_applies_to_every_folder`)]})]}),(0,w.jsxs)(O,{ref:X(`shortcuts`),children:[(0,w.jsx)(D,{note:`every_action_can_hold_several_combinations_click_one_to_record_it_again_add_one_with_the_plus_and_drop_one_with_the_cross`,title:`shortcuts`,onReset:()=>J({id:`shortcuts`,label:`shortcuts`})}),(0,w.jsxs)(A,{children:[gn.map(({id:e,label:t,note:n})=>{let r=wo(e),i=T?.action===e,o=Eo(e);return(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(t)}),(0,w.jsx)(R,{children:a(n)}),o.length>0&&(0,w.jsx)(Di,{children:a(`also_in_use_by_actions_pressing_it_runs_each_of_them`,{actions:o.join(`, `)})})]}),(0,w.jsx)(F,{children:(0,w.jsxs)(xi,{children:[r.map((t,n)=>(0,w.jsxs)(Si,{$conflict:(To.get(t)?.length??0)>1,$listening:i&&T.index===n,children:[(0,w.jsx)(Ci,{onClick:()=>ln({action:e,index:n}),title:a(`click_to_record_this_shortcut_again`),type:`button`,children:i&&T.index===n?un.length>0?`${Ze(un)} + …`:a(`press_a_key`):Ze(t)}),(0,w.jsx)(wi,{onClick:()=>Oo(e,n),title:a(`remove`),type:`button`,children:(0,w.jsx)(S,{size:9})})]},t+`-`+n)),r.length===0&&(0,w.jsx)(Ti,{children:a(`none`)}),(0,w.jsx)(Ei,{$listening:i&&T.index<0,onClick:()=>ln({action:e,index:-1}),title:a(`add`),type:`button`,children:i&&T.index<0?un.length>0?`${Ze(un)} + …`:a(`press_a_key`):(0,w.jsx)(_,{size:11})})]})})]},e)}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`reset`)}),(0,w.jsx)(R,{children:a(`back_to_the_default_combination_for_every_action`)})]}),(0,w.jsx)(F,{children:(0,w.jsxs)(W,{onClick:()=>void Z({shortcuts:st(et),globalHotkey:null}),type:`button`,children:[(0,w.jsx)(b,{size:13}),a(`reset`)]})})]})]})]}),(0,w.jsxs)(O,{ref:X(`memory`),children:[(0,w.jsx)(D,{note:`what_the_process_holds_and_how_to_give_it_back`,title:`memory`}),(0,w.jsxs)(A,{children:[(0,w.jsxs)(xr,{children:[(0,w.jsxs)(Sr,{children:[(0,w.jsx)(I,{children:a(`process_memory`)}),(0,w.jsx)(B,{children:g?`${d(g.private)} · ${sr(g.private,g.available)}`:`—`})]}),(0,w.jsx)(Cr,{children:(0,w.jsx)(wr,{$ratio:g?g.private/Math.max(g.available,1):0,$tone:ee(g?g.private/Math.max(g.available,1):0)})}),(0,w.jsx)(R,{children:g?a(`committed_of_available_the_runtime_can_use_resident_is_resident_the_webview_runs_in_its_own_process`,{available:d(g.available),resident:d(g.workingSet)}):a(`reading_the_current_usage`)})]}),(0,w.jsxs)(xr,{children:[(0,w.jsxs)(Sr,{children:[(0,w.jsx)(I,{children:a(`managed_heap`)}),(0,w.jsx)(B,{children:g?`${d(g.managed)} · ${sr(g.managed,g.private)}`:`—`})]}),(0,w.jsx)(Cr,{children:(0,w.jsx)(wr,{$ratio:g?g.managed/Math.max(g.private,1):0,$tone:`var(--accent-secondary)`})}),(0,w.jsx)(R,{children:a(`share_of_this_process_that_the_net_heap_holds_thumbnails_and_folder_size_walks_live_here_the_runtime_grows_it_on_demand_and_gives_it_back_after_a_collection`)})]}),(0,w.jsxs)(xr,{children:[(0,w.jsxs)(Sr,{children:[(0,w.jsx)(I,{children:a(`native_and_runtime`)}),(0,w.jsx)(B,{children:g?`${d(Math.max(0,g.private-g.managed))} · ${sr(Math.max(0,g.private-g.managed),g.private)}`:`—`})]}),(0,w.jsx)(Cr,{children:(0,w.jsx)(wr,{$ratio:g?Math.max(0,g.private-g.managed)/Math.max(g.private,1):0,$tone:`var(--accent-primary)`})}),(0,w.jsx)(R,{children:a(`the_runtime_loaded_libraries_and_the_rust_helper_share_this_part_rust_runs_inside_the_process_so_it_has_no_separate_figure`)})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`free_memory`)}),(0,w.jsx)(R,{children:a(`compacts_the_heap_and_returns_unused_pages_to_the_system_always_safe`)})]}),(0,w.jsx)(F,{children:(0,w.jsxs)(W,{onClick:()=>void Ne().then(Nt),type:`button`,children:[(0,w.jsx)(At,{size:13}),a(`trim_now`)]})})]})]})]}),(0,w.jsxs)(O,{ref:X(`overview`),children:[(0,w.jsx)(D,{note:`the_home_tab_s_history_and_how_much_of_it_it_shows`,title:`overview`,onReset:()=>J({id:`overview`,label:`overview`})}),(0,w.jsx)(A,{children:(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`recent_items`)}),(0,w.jsx)(R,{children:a(`how_many_recently_opened_folders_the_overview_lists_0_hides_the_section`)})]}),(0,w.jsx)(F,{children:(0,w.jsx)(Ur,{max:50,min:0,onChange:e=>void ko(Number(e.target.value)),type:`number`,value:p?.recentLimit??10})})]})})]}),(0,w.jsxs)(O,{ref:X(`gallery`),children:[(0,w.jsx)(D,{note:`the_folders_the_gallery_scans_for_pictures_and_videos`,title:`gallery`,onReset:()=>J({id:`gallery`,label:`gallery`})}),(0,w.jsxs)(A,{children:[(p?.galleryRoots??[]).map(e=>(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:ie(e)}),(0,w.jsx)(R,{children:e})]}),(0,w.jsx)(F,{children:(0,w.jsx)(Oi,{onClick:()=>void zo((p?.galleryRoots??[]).filter(t=>t!==e)),title:a(`stop_scanning_this_folder`),type:`button`,children:(0,w.jsx)(S,{size:12})})})]},e)),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`scan_folders`)}),(0,w.jsx)(R,{children:(p?.galleryRoots??[]).length===0?a(`nothing_added_yet_so_the_gallery_reads_the_pictures_folder`):a(`only_these_folders_are_scanned_three_levels_deep`)})]}),(0,w.jsx)(F,{children:(0,w.jsxs)(W,{onClick:()=>void Bo(),type:`button`,children:[(0,w.jsx)(wt,{size:13}),a(`choose_folder`)]})})]})]})]}),(0,w.jsxs)(O,{ref:X(`icons`),children:[(0,w.jsx)(D,{note:`where_the_shell_s_own_icons_and_the_built_in_glyphs_come_from`,title:`icons`,onReset:()=>J({id:`icons`,label:`icons`})}),(0,w.jsxs)(A,{children:[(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`use_system_file_icons`)}),(0,w.jsx)(R,{children:a(`ask_the_shell_for_the_icon_of_each_file_type_instead_of_the_built_in_glyphs`)})]}),(0,w.jsx)(H,{$on:p?.systemIcons??!1,disabled:!p,onClick:()=>void Z({systemIcons:!p?.systemIcons}),type:`button`,children:(0,w.jsx)(U,{})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`use_custom_folder_icons`)}),(0,w.jsx)(R,{children:a(`folders_that_define_an_icon_desktop_ini_keep_showing_it_even_when_system_icons_are_off`)})]}),(0,w.jsx)(H,{$on:p?.customFolderIcons??!1,disabled:!p,onClick:()=>void Z({customFolderIcons:!p?.customFolderIcons}),type:`button`,children:(0,w.jsx)(U,{})})]})]})]}),(0,w.jsxs)(O,{ref:X(`extension-icons`),children:[(0,w.jsx)(D,{note:`a_custom_glyph_for_one_file_extension`,title:`icons_by_extension`,onReset:()=>J({id:`extension-icons`,label:`icons_by_extension`})}),(0,w.jsxs)(A,{children:[Object.entries(p?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:e}),(0,w.jsx)(R,{children:Mn(a,t)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Nn,{source:t}),(0,w.jsx)(Oi,{onClick:()=>void So(e,null),title:a(`remove_this_rule`),type:`button`,children:(0,w.jsx)(S,{size:12})})]})]},e)),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`add_a_rule`)}),(0,w.jsx)(R,{children:a(`extension_and_the_icon_to_draw_for_it`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Ur,{onChange:e=>yt(e.target.value),placeholder:`.psd`,spellCheck:!1,value:dt}),(0,w.jsxs)(Jr,{children:[(0,w.jsx)(Oi,{onClick:()=>Dt(e=>!e),title:a(`choose_the_icon`),type:`button`,children:(0,w.jsx)(Nn,{source:St})}),Tt&&(0,w.jsx)(Kt,{allowDefault:!1,onClose:()=>Dt(!1),onPick:e=>{Ct(e??`file`),Dt(!1)},value:St})]}),(0,w.jsx)(Oi,{onClick:()=>void Vo(),title:a(`add_the_rule`),type:`button`,children:(0,w.jsx)(_,{size:13})})]})]})]})]}),(0,w.jsxs)(O,{ref:X(`folder-icons`),children:[(0,w.jsx)(D,{note:`a_single_folder_can_carry_an_icon_of_its_own`,title:`folder_icons`}),(0,w.jsxs)(A,{children:[(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`give_a_folder_its_own_icon`)}),(0,w.jsx)(R,{children:a(`stored_in_the_folder_s_parent_index_so_it_stays_with_the_files`,{index:`.yafm-index.db`})})]}),(0,w.jsxs)(F,{children:[ot&&(0,w.jsx)(Pn,{src:ot.icon}),(0,w.jsxs)(W,{disabled:Ot,onClick:()=>void Ho(),type:`button`,children:[(0,w.jsx)(wt,{size:13}),a(Ot?`choosing`:`choose_folder_and_icon`)]})]})]}),ot&&(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:ie(ot.folder)}),(0,w.jsx)(R,{children:ot.folder})]}),(0,w.jsx)(F,{children:(0,w.jsxs)(Ai,{children:[(0,w.jsx)(v,{size:11}),` `,a(`saved`)]})})]})]})]}),(0,w.jsxs)(O,{ref:X(`folder-index`),children:[(0,w.jsx)(D,{note:`the_hidden_cache_that_makes_a_folder_open_instantly_next_time`,title:`folder_index`,onReset:()=>J({id:`folder-index`,label:`folder_index`})}),(0,w.jsxs)(A,{children:[(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`keep_a_index_in_every_folder`,{index:`.yafm-index.db`})}),(0,w.jsx)(R,{children:a(`holds_icons_cached_folder_sizes_and_the_folder_s_last_listing_so_it_opens_instantly_next_time_hidden_and_marked_as_a_system_file_on_windows_skipped_where_the_folder_is_read_only`)})]}),(0,w.jsx)(H,{$on:p?.writeDirectoryIndex??!0,disabled:!p,onClick:()=>void Z({writeDirectoryIndex:!p?.writeDirectoryIndex}),type:`button`,children:(0,w.jsx)(U,{})})]}),(0,w.jsxs)(Un,{children:[(0,w.jsxs)(Wn,{children:[(0,w.jsx)(I,{children:a(`directory_index_blacklist`)}),(0,w.jsx)(R,{children:a(`rules_are_full_path_globs_matches_within_one_path_segment_and_crosses_folders_matching_folders_use_the_central_database_instead_of_creating_yafm_index_db_files`)})]}),(0,w.jsx)(ci,{children:(p?.directoryIndexBlacklist??[]).map(e=>(0,w.jsxs)(li,{children:[(0,w.jsx)(ui,{"aria-label":a(`directory_index_blacklist_rule`),onBlur:Ja,onChange:t=>Mr({from:e,value:t.target.value}),onFocus:()=>Mr({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Ja()):e.key===`Escape`&&Mr(null)},spellCheck:!1,value:jr?.from===e?jr.value:e}),(0,w.jsx)(di,{onClick:()=>Za(e),title:a(`remove`),type:`button`,children:(0,w.jsx)(S,{size:10})})]},e))}),(0,w.jsxs)(pi,{children:[(0,w.jsx)(mi,{"aria-label":a(`directory_index_blacklist_rule`),onChange:e=>Kr(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ya())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:Gr}),(0,w.jsxs)(V,{onClick:Ya,type:`button`,children:[(0,w.jsx)(_,{size:13}),a(`add_the_rule`)]})]}),(0,w.jsxs)(fi,{children:[(0,w.jsxs)(V,{onClick:Qa,type:`button`,children:[(0,w.jsx)(b,{size:13}),a(`restore_defaults`)]}),(0,w.jsxs)(V,{onClick:()=>void Xa(),type:`button`,children:[(0,w.jsx)(wt,{size:13}),a(`add_folder_2`)]})]})]})]}),!(p?.writeDirectoryIndex??!0)&&(0,w.jsx)(Mi,{children:jn(a,e?.platform)})]}),(0,w.jsxs)(O,{ref:X(`indexing`),children:[(0,w.jsx)(D,{note:`background_folder_size_and_item_count_walks`,title:`index_tasks`}),(0,w.jsx)(An,{})]}),(0,w.jsxs)(O,{ref:X(`files`),children:[(0,w.jsx)(D,{note:`what_the_listings_include`,title:`files`}),(0,w.jsxs)(A,{children:[(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:a(`show_hidden_files`)}),(0,w.jsxs)(R,{children:[a(`toggles_ordinary_hidden_files_for_this_session_alt_also_works_system_files_still_follow_explorer`),f?.overridden&&(0,w.jsx)(Ir,{disabled:me,onClick:()=>void vo(null),type:`button`,children:a(`follow_system`)})]})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Hr,{$on:f?.showHidden??!1,children:f?.overridden?kn(a,f.showHidden):a(`follow_system`)}),(0,w.jsx)(H,{$on:f?.showHidden??!1,disabled:!f||me,onClick:()=>void vo(!(f?.showHidden??!1)),title:a(`show_hidden_files`),type:`button`,children:(0,w.jsx)(U,{})})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsx)(I,{children:a(`protected_operating_system_files`)}),(0,w.jsx)(B,{children:kn(a,f?.showSystem)})]})]}),(0,w.jsx)(ji,{children:a(`hidden_items_follow_this_app_s_switch_protected_operating_system_files_still_follow_windows`)})]}),(0,w.jsxs)(tr,{onClick:()=>mn(!0),type:`button`,children:[(0,w.jsx)(kt,{size:13}),a(`open_source_attribution`)]})]}),(0,w.jsxs)(nr,{"aria-label":a(`settings_sections`),onWheel:Ma,ref:Ea,children:[(0,w.jsx)(rr,{children:a(`sections`)}),(0,w.jsx)(ir,{children:E.map(({id:e,label:t})=>(0,w.jsxs)(ar,{$active:Ki===e,"data-section":e,onClick:()=>Aa(e),type:`button`,children:[(0,w.jsx)(Hn,{children:Cn[t]}),(0,w.jsx)(`span`,{children:a(t)})]},e))}),(0,w.jsx)(or,{children:a(`changes_are_saved_as_you_make_them`)})]}),fn&&(0,w.jsx)(C.Suspense,{fallback:null,children:(0,w.jsx)(pn,{onClose:()=>mn(!1)})}),Hi&&(0,w.jsx)(he,{confirmLabel:a(`restore_defaults`),message:a(`restore_section_to_its_defaults`,{section:a(Hi.label)}),onCancel:()=>J(null),onConfirm:()=>{let e=Hi;J(null),Na(e.id)},open:!0,title:a(`restore_defaults`)}),q&&(0,qt.createPortal)((0,w.jsx)(ur,{children:(0,w.jsxs)(dr,{"aria-modal":`true`,role:`dialog`,children:[(0,w.jsxs)(fr,{children:[(0,w.jsx)(`h2`,{children:a(`software_update`)}),(0,w.jsx)(`p`,{children:K?.latest?a(`version_version`,{version:K.latest}):a(`preparing_the_update`)})]}),(0,w.jsx)(pr,{children:a(`changelog`)}),q.changelog?(0,w.jsx)(mr,{onClick:gr,children:(0,w.jsx)(c,{source:q.changelog})}):(0,w.jsx)(hr,{children:q.phase===`changelog`?a(`loading_the_changelog`):a(`the_changelog_could_not_be_loaded`)}),(0,w.jsxs)(_r,{children:[(0,w.jsx)(`span`,{children:cr(q,a)}),(0,w.jsx)(`span`,{children:lr(q)})]}),(0,w.jsx)(vr,{children:(0,w.jsx)(yr,{$percent:Math.max(0,Math.min(100,q.percent))})}),q.error&&(0,w.jsx)(z,{children:q.error}),(0,w.jsxs)(br,{children:[(q.phase===`changelog`||q.phase===`downloading`)&&(0,w.jsxs)(W,{onClick:()=>void oo(),type:`button`,children:[(0,w.jsx)(S,{size:13}),a(`cancel`)]}),q.phase===`ready`&&(0,w.jsxs)(W,{onClick:()=>void so(),type:`button`,children:[(0,w.jsx)(It,{size:13}),a(`install_update`)]}),q.phase===`installing`&&(0,w.jsxs)(W,{disabled:!0,type:`button`,children:[(0,w.jsx)(b,{size:13}),a(`installing`)]}),(q.phase===`ready`||q.phase===`error`||q.phase===`cancelled`||q.phase===`installing`)&&(0,w.jsxs)(W,{onClick:()=>Vi(null),type:`button`,children:[(0,w.jsx)(S,{size:13}),a(`close`)]})]})]})}),document.body)]})}function On({approvalMinutes:e,denialSeconds:t}){let n=l(),[i,a]=(0,C.useState)([]),[o,s]=(0,C.useState)(!1),[c,ee]=(0,C.useState)(()=>Date.now());(0,C.useEffect)(()=>{let e=window.setInterval(()=>ee(Date.now()),1e3);return()=>window.clearInterval(e)},[]),(0,C.useEffect)(()=>{let e=()=>void lt().then(a,()=>a([]));if(e(),r.available)return r.on(t=>{t.type===`share.devices.changed`&&e()})},[]),(0,C.useEffect)(()=>{i.some(e=>e.expiresAt>0&&e.expiresAt<=c)&&lt().then(a,()=>void 0)},[c,i]);let te=e=>{let t=Math.max(0,Math.ceil((e-c)/1e3)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60,a=e=>String(e).padStart(2,`0`);return n>0?`${n}:${a(r)}:${a(i)}`:`${r}:${a(i)}`},ne=async(e,t,n)=>{s(!0);try{a(await nt(e,t,n))}finally{s(!1)}},re=async()=>{if(window.confirm(n(`share_access_clear_devices_confirm`))){s(!0);try{a(await ot())}finally{s(!1)}}},ie=async e=>{s(!0);try{a(await yt(e))}finally{s(!1)}},ae=e=>e.state===`allowed`?e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_allowed`)} · ${n(`share_access_expired`)}`:n(`share_access_allowed`):e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_denied`)} · ${n(`share_access_expired`)}`:n(`share_access_denied`),u=i.filter(e=>e.state===`allowed`||e.state===`denied`),d=e=>e.expiresAt===0?void 0:new Date(e.expiresAt).toLocaleString();return(0,w.jsxs)(Tr,{children:[u.length>0&&(0,w.jsxs)(Dr,{children:[(0,w.jsxs)(Nr,{children:[n(`devices`),` · `,u.length]}),(0,w.jsx)(Ar,{disabled:o,onClick:()=>void re(),title:n(`share_access_clear_devices`),type:`button`,children:(0,w.jsx)(Wt,{size:13})})]}),u.length===0&&(0,w.jsx)(Er,{children:n(`share_access_no_devices`)}),u.map(r=>(0,w.jsxs)(Or,{children:[(0,w.jsxs)(jr,{children:[(0,w.jsx)(Mr,{children:r.name||r.address||r.id}),(0,w.jsxs)(Nr,{children:[r.address,r.address?` · `:``,n(`share_access_last_seen`),`: `,new Date(r.lastSeen).toLocaleString()]}),(0,w.jsxs)(Nr,{title:d(r),children:[ae(r),` · `,r.expiresAt===0?n(`share_access_forever`):n(`share_access_expires_in`,{time:te(r.expiresAt)})]})]}),(0,w.jsxs)(kr,{children:[(0,w.jsx)(Qe,{disabled:o,onChange:e=>{let[t,n]=e.split(`:`);ne(r.id,t,n===`forever`)},options:[{value:`allowed:timed`,label:n(`share_access_allowed_for_minutes`,{minutes:e})},{value:`allowed:forever`,label:n(`share_access_allow_forever`)},{value:`denied:timed`,label:n(`share_access_denied_for_seconds`,{seconds:t})},{value:`denied:forever`,label:n(`share_access_block_forever`)}],value:r.state===`allowed`?r.expiresAt===0?`allowed:forever`:`allowed:timed`:r.expiresAt===0?`denied:forever`:`denied:timed`,width:190}),(0,w.jsx)(Ar,{disabled:o,onClick:()=>void ie(r.id),title:n(`remove`),type:`button`,children:(0,w.jsx)(Wt,{size:13})})]})]},r.id))]})}function kn(e,t){return e(t===void 0?`reading`:t?`shown`:`hidden`)}function An(){let e=l(),[t,n]=(0,C.useState)(null);return(0,C.useEffect)(()=>{let e=!0,t=()=>ue().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,w.jsx)(Mi,{children:e(`no_indexing_tasks_are_running`)}):(0,w.jsxs)(A,{children:[(0,w.jsx)(N,{children:(0,w.jsx)(I,{children:e(`count_indexing_tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,w.jsx)(N,{children:(0,w.jsx)(B,{title:e,children:e})},e))]}):(0,w.jsx)(Mi,{children:e(`index_task_information_is_unavailable`)})}function jn(e,t){return e(`indexes_are_off_every_folder_s_icons_sizes_and_cached_listing_now_live_in_one_database_in_place_so_that_drive_grows_with_every_folder_you_open_that_is_the_cost_of_keeping_folders_free_of_extra_files`,{place:e(t===`windows`?`appdata_which_sits_on_the_system_drive_usually_c`:t===`linux`?`your_home_folder_which_often_shares_a_partition_with_the_system`:`the_app_s_settings_folder_which_usually_sits_on_the_system_drive`)})}function Mn(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built_in_source`,{source:t})}function Nn({source:e}){let t=pe(e.startsWith(`file:`)?e.slice(5):null);return(0,w.jsx)(ki,{children:t?(0,w.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,w.jsx)(dt,{name:e,size:16})})}function Pn({src:e}){let t=pe(e);return(0,w.jsx)(ki,{children:t&&(0,w.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function Fn({path:e,active:t,onSelect:n,onRemove:r}){let i=l(),a=ce(e),o=me(a?null:e),s=a?e:o,c=p(e.split(/[?#]/)[0]);return(0,w.jsxs)(ri,{children:[(0,w.jsxs)(ni,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(c?(0,w.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,w.jsx)(`img`,{alt:``,src:s})),c&&(0,w.jsx)(ai,{children:(0,w.jsx)(Mt,{size:11})})]}),(0,w.jsx)(ii,{onClick:r,title:i(`remove`),type:`button`,children:(0,w.jsx)(S,{size:9})})]})}function In({value:e,options:t,onChange:n,disabled:r}){let i=l(),[a,o]=(0,C.useState)(null),s=(0,C.useRef)(null);return(0,C.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(Wr,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,w.jsx)(`span`,{children:Ln(i,e)}),(0,w.jsx)(Gr,{children:(0,w.jsx)(Pt,{size:11})})]}),a&&(0,qt.createPortal)((0,w.jsx)(Kr,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,w.jsxs)(qr,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,w.jsx)(`span`,{children:Ln(i,t)}),t===e&&(0,w.jsx)(v,{size:11})]},t))}),document.body)]})}function Ln(e,t){return t===xn?e(`system_default`):Sn[t]??t}function Rn({colors:e,current:t,onApply:n}){let r=l();if(e.length===0)return null;let[i,...a]=e;return(0,w.jsxs)(j,{children:[(0,w.jsxs)(M,{$color:i,onClick:()=>n(i),title:r(`previous_colour_colour`,{colour:i}),type:`button`,children:[(0,w.jsx)(`i`,{}),r(`previous`)]}),a.map(e=>(0,w.jsx)(er,{$color:e,onClick:()=>n(e),title:r(`use_colour`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,w.jsx)(v,{size:9})},e))]})}function D({title:e,note:t,global:n=!1,onReset:r}){let i=l();return(0,w.jsxs)(Vn,{children:[(0,w.jsxs)(`h2`,{children:[(0,w.jsx)(Hn,{children:Cn[e]}),i(e),n&&(0,w.jsx)(m,{})]}),(0,w.jsx)(`p`,{children:i(t)}),r&&(0,w.jsxs)(k,{onClick:r,title:i(`restore_defaults`),type:`button`,children:[(0,w.jsx)(b,{size:11}),i(`restore_defaults`)]})]})}var zn=i.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,Bn=i.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,O=i.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,Vn=i.header`
    display: flex;
    flex-direction: column;
    gap: 2px;
    position: relative;
    padding-right: 120px;

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
`,k=i.button`
    position: absolute;
    top: 0;
    right: 0;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 4px 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-muted);
    font: inherit;
    font-size: 10.5px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,Hn=i.i`
    display: grid;
    place-items: center;
    width: 13px;
    height: 13px;
    flex-shrink: 0;
    color: var(--accent-primary);
    opacity: 0.85;
`,A=i.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,Un=i.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Wn=i.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Gn=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,Kn=i.button`
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
`,qn=i.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Jn=i.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,Yn=i.button`
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
`,Xn=i.button`
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
`,Zn=i.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Qn=i.input`
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
`,$n=i.span`
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
`,j=i.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,er=i.button`
    display: grid;
    place-items: center;
    width: 17px;
    height: 17px;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 50%;
    background: ${({$color:e})=>e};
    color: #fff;
    cursor: pointer;
    transition: transform 120ms ease, box-shadow 120ms ease;

    &:hover {
        transform: scale(1.15);
        box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.3);
    }
`,M=i.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 3px 8px 3px 4px;
    border: 1px solid var(--border-color);
    border-radius: 999px;
    background: var(--bg-input);
    color: var(--text-muted);
    font: inherit;
    font-size: 9.5px;
    cursor: pointer;
    transition: border-color 130ms ease, color 130ms ease;

    i {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: ${({$color:e})=>e};
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.16);
    }

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`,tr=i.button`
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
`,nr=i.nav`
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
`,rr=i.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ir=i.div`
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
`,ar=i.button`
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

    ${({$active:e})=>e&&a`
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
`,or=i.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function sr(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}function cr(e,t){switch(e.phase){case`changelog`:return t(`preparing_the_update`);case`downloading`:return t(`downloading_the_update`);case`ready`:return t(`download_complete`);case`cancelled`:return t(`update_cancelled`);case`error`:return t(`the_update_failed`);case`installing`:return t(`installing`);default:return``}}function lr(e){return e.total>0?`${d(e.downloaded)} / ${d(e.total)}`:e.downloaded>0?d(e.downloaded):``}var ur=i.div`
    position: fixed;
    inset: 0;
    z-index: 9500;
    display: grid;
    place-items: center;
    padding: 32px;
    background: rgba(2, 6, 23, 0.55);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
`,dr=i.div`
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
`,fr=i.div`
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
`,pr=i.span`
    margin-top: 4px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,mr=i.div`
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
`,hr=i.p`
    margin: 0;
    font-size: 11px;
    color: var(--text-muted);
`;function gr(e){let t=e.target?.closest(`a`);t&&(e.preventDefault(),Ie(t.href))}var _r=i.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    font-size: 11px;
    color: var(--text-muted);
`,vr=i.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.22);
`,yr=i.div`
    width: ${({$percent:e})=>`${e}%`};
    height: 100%;
    border-radius: 3px;
    background: var(--accent-gradient);
    transition: width 160ms ease;
`,br=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,xr=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,Sr=i.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,Cr=i.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,wr=i.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,Tr=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
`,Er=i.div`
    padding: 8px 2px;
    color: var(--text-muted);
    font-size: 11px;
`,Dr=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2px;
`,Or=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,kr=i.div`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,Ar=i.button`
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
`,jr=i.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Mr=i.span`
    color: var(--text-primary);
    font-size: 12px;
`,Nr=i.span`
    color: var(--text-muted);
    font-size: 10.5px;
    overflow-wrap: anywhere;
`,Pr=i.input`
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
`,Fr=i.input`
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
`,N=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,P=i.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,F=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,I=i.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,L=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,R=i.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,z=i.span`
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
`,B=i.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,Ir=i.button`
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
`,Lr=i.input`
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    background: transparent;
    cursor: pointer;

    &::-webkit-color-swatch-wrapper {
        padding: 1px;
    }

    &::-webkit-color-swatch {
        border: 0;
        border-radius: 3px;
    }
`,Rr=i.input`
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
`,V=i.button`
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
`,zr=i.input`
    width: 42px;
    height: 30px;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    cursor: pointer;

    &::-webkit-color-swatch-wrapper {
        padding: 0;
    }

    &::-webkit-color-swatch {
        border: 0;
        border-radius: 4px;
    }
`,Br=i.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,Vr=i.button`
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
`,Hr=i.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,H=i.button`
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
`,U=i.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,Ur=i.input`
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
`,Wr=i.button`
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
`,Gr=i.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Kr=i.div`
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
`,qr=i.button`
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
`,Jr=i.span`
    position: relative;
    display: inline-flex;
`,Yr=i.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Xr=i.button`
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
`,Zr=i.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,Qr=i.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,$r=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,ei=i.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ti=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,ni=i.button`
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
`,ri=i.div`
    position: relative;
    width: 102px;
    height: 58px;
`,ii=i.button`
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
`,ai=i.span`
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
`,oi=i.button`
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
`,si=i.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,ci=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,li=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,ui=i.input`
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
`,di=i.button`
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
`,fi=i.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,pi=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,mi=i.input`
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
`,hi=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,gi=i.button`
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
`,_i=i.input`
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
`,vi=i.div`
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
`,yi=i.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,bi=i.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,xi=i.span`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 5px;
`,Si=i.span`
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    border: 1px solid ${({$conflict:e,$listening:t})=>t?`var(--border-color-focus)`:e?`rgba(251, 191, 36, 0.55)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$listening:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`var(--bg-input)`};
`,Ci=i.button`
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
`,wi=i.button`
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
`,Ti=i.span`
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Ei=i.button`
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
`,Di=i.span`
    font-size: 10px;
    color: #fbbf24;
`,W=i.button`
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
`,Oi=i.button`
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
`,ki=i.span`
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
`,Ai=i.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,ji=i.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,Mi=i.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`;export{Dn as SettingsView};