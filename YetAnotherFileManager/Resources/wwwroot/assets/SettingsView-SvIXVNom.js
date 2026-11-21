const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AttributionDialog-ChQc85WJ.js","assets/rolldown-runtime-XKyaHtl9.js","assets/dist-Qlc4nr7c.js","assets/Icons-C2hg-nwk.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{_ as t,d as n,g as r,l as i,p as a,r as o,t as s,u as c,v as l}from"./dist-Qlc4nr7c.js";import{D as ee,T as te,_ as ne,a as re,d as ie,i as ae,k as u,m as d,n as oe,t as se,x as ce}from"./theme-CNvw-6kp.js";import{A as le,H as ue,L as de,S as fe,b as f,ct as pe,ft as me,i as he,pt as ge,rt as _e,s as ve}from"./selectionMenu-B_JCzuLZ.js";import{_ as ye,c as be,d as xe,f as Se,g as Ce,h as we,l as Te,m as Ee,n as De,o as Oe,s as ke,t as Ae,u as je}from"./concepts-DYI9OMpB.js";import{A as Me,C as Ne,D as Pe,E as Fe,M as Ie,N as Le,O as Re,S as ze,T as Be,_ as Ve,a as He,b as Ue,i as We,j as Ge,k as Ke,m as p,s as m,t as h,v as qe,w as Je,x as Ye,y as Xe}from"./main--1PtySui.js";import{H as Ze,S as Qe,T as $e,V as et,W as tt,Y as nt,Z as rt,a as it,at,b as ot,et as st,f as ct,it as lt,j as ut,nt as dt,o as ft,ot as pt,r as mt,s as ht,u as gt,w as _t,y as vt,z as yt}from"./FileList-CpBA0K1f.js";import{t as bt}from"./textSearch-fuN0SwEO.js";import{F as xt,G as St,K as Ct,M as wt,N as Tt,T as Et,U as Dt,V as Ot,W as kt,X as At,Y as jt,Z as g,at as _,bt as Mt,ct as Nt,d as v,f as Pt,ht as Ft,it as It,j as Lt,k as Rt,l as zt,mt as Bt,n as Vt,nt as y,p as Ht,st as b,tt as Ut,ut as Wt,vt as Gt,x as Kt,y as x}from"./Icons-C2hg-nwk.js";import{t as qt}from"./IconPicker-_Ca0xLiz.js";var S=e(l(),1),Jt=u();async function Yt(){return a.available?(await a.request(`app.tags`)).tags:[]}async function Xt(e){return!a.available||!e?!1:(await a.request(`app.tags.delete`,{name:e})).ok}async function Zt(e,t){return!a.available||!e?[]:(await a.request(`app.tags.create`,{name:e,color:t})).tags}async function Qt(e,t){return!a.available||!e?!1:(await a.request(`app.tags.color`,{name:e,color:t})).ok}async function $t(e,t){return!a.available||!e||!t?!1:(await a.request(`app.tags.rename`,{oldName:e,newName:t})).ok}var C=n();function en({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=c(),[s,l]=(0,S.useState)(null),[ee,te]=(0,S.useState)(``),ne=(0,S.useRef)(null),re=(0,S.useRef)(null),ie=(0,S.useMemo)(()=>{let e=ee.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,ee]);(0,S.useEffect)(()=>{if(!s)return;re.current?.focus();let e=()=>l(null),t=t=>{let n=t.target;n instanceof Node&&ne.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e)}},[s]);let ae=()=>{if(s){l(null);return}let e=ne.current?.getBoundingClientRect();if(!e)return;te(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;l({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},u=e=>{a(e),l(null)};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(tn,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:ae,ref:ne,type:`button`,children:[(0,C.jsx)(nn,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,C.jsx)(rn,{children:`▾`})]}),s&&(0,Jt.createPortal)((0,C.jsxs)(an,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,C.jsxs)(on,{children:[(0,C.jsx)(Nt,{size:12}),(0,C.jsx)(sn,{onChange:e=>te(e.target.value),placeholder:o(`filter_fonts`),ref:re,value:ee})]}),(0,C.jsxs)(cn,{children:[(0,C.jsxs)(ln,{$active:!e,"aria-selected":!e,onClick:()=>u(null),role:`option`,type:`button`,children:[(0,C.jsxs)(un,{children:[n,` `,(0,C.jsx)(fn,{children:o(`default_2`)})]}),!e&&(0,C.jsx)(v,{size:11})]}),ie.map(t=>(0,C.jsxs)(ln,{$active:e===t,"aria-selected":e===t,onClick:()=>u(t),role:`option`,type:`button`,children:[(0,C.jsxs)(w,{children:[(0,C.jsx)(un,{children:t}),(0,C.jsx)(dn,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,C.jsx)(v,{size:11})]},t)),ie.length===0&&(0,C.jsx)(pn,{children:o(`no_matching_font`)})]})]}),document.body)]})}var tn=t.button`
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
`,nn=t.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,rn=t.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,an=t.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${ve}
`,on=t.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,sn=t.input`
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
`,cn=t.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,ln=t.button`
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
`,w=t.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,un=t.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,dn=t.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,fn=t.span`
    color: var(--text-muted);
    font-size: 10px;
`,pn=t.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,mn=(0,S.lazy)(()=>h(()=>import(`./AttributionDialog-ChQc85WJ.js`).then(e=>({default:e.AttributionDialog})),__vite__mapDeps([0,1,2,3]))),hn=[{id:`goBack`,label:`back`,note:`goes_to_the_previous_folder_in_this_tab`},{id:`goForward`,label:`forward`,note:`goes_to_the_next_folder_in_this_tab`},{id:`goUp`,label:`up_one_level`,note:`opens_the_folder_that_contains_the_current_one`},{id:`home`,label:`home_folder`,note:`jumps_to_the_user_s_home_folder`},{id:`find`,label:`search`,note:`opens_the_floating_search_box_typing_a_letter_in_a_folder_opens_it_too`},{id:`location`,label:`edit_location`,note:`turns_the_breadcrumbs_into_an_editable_path`},{id:`closeTab`,label:`close_tab`,note:`closes_the_tab_that_is_open`},{id:`newTab`,label:`new_tab`,note:`opens_the_overview_in_a_new_tab`},{id:`reopenTab`,label:`reopen_closed_tab`,note:`brings_back_the_tab_you_closed_last_folder_and_all`},{id:`nextTab`,label:`next_tab`,note:`cycles_to_the_next_tab`},{id:`previousTab`,label:`previous_tab`,note:`cycles_to_the_previous_tab`},{id:`copy`,label:`copy`,note:`copies_the_selection_so_it_can_be_pasted_elsewhere`},{id:`duplicate`,label:`duplicate`,note:`makes_a_copy_of_the_selection_in_this_folder_with_a_new_name`},{id:`cut`,label:`cut`,note:`moves_the_selection_on_the_next_paste`},{id:`paste`,label:`paste`,note:`copies_or_moves_the_clipboard_s_files_into_the_current_folder`},{id:`undo`,label:`undo`,note:`undoes_the_last_file_operation_in_this_session`},{id:`redo`,label:`redo`,note:`repeats_the_operation_that_was_just_undone`},{id:`delete`,label:`move_to_the_recycle_bin`,note:`moves_the_selection_to_the_recycle_bin`},{id:`deletePermanently`,label:`delete_permanently`,note:`deletes_the_selection_without_the_recycle_bin`},{id:`rename`,label:`rename`,note:`renames_the_single_selected_entry`},{id:`selectAll`,label:`select_all`,note:`selects_every_entry_in_the_current_folder`},{id:`invertSelection`,label:`invert_selection`,note:`selects_everything_that_is_not_selected`},{id:`open`,label:`open`,note:`opens_the_selected_folder_or_file`},{id:`newFolder`,label:`new_folder`,note:`creates_a_folder_in_the_current_directory`},{id:`properties`,label:`properties`,note:`opens_the_shell_properties_sheet`},{id:`iconsView`,label:`icons_view`,note:`switches_the_folder_to_the_grid_view`},{id:`detailsView`,label:`details_view`,note:`switches_the_folder_to_the_list_view`},{id:`terminal`,label:`open_terminal`,note:`opens_a_terminal_in_the_current_folder`},{id:`hidden`,label:`show_hidden_files`,note:`toggles_ordinary_hidden_files_for_this_session`},{id:`splitView`,label:`split_view`,note:`shows_the_next_file_tab_beside_the_current_one`},{id:`openInNewTab`,label:`open_in_a_new_tab`,note:`hold_this_while_clicking_a_folder`}],gn=`globalHotkey`,_n=[...hn,{id:gn,label:`global_hotkey`,note:`brings_the_window_forward_from_anywhere_while_the_app_is_running_empty_means_no_global_shortcut`}],vn=`en`,yn=[{id:`system`,label:`follow_system`},{id:`light`,label:`light`},{id:`dark`,label:`dark`}],bn=[{id:`system`,label:`system`},{id:`24`,label:`k_24_hour`},{id:`12`,label:`k_12_hour`},{id:`custom`,label:`custom`}],xn=new Date(2026,10,5,16,8).getTime(),Sn=`system`,Cn={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},T=[{id:`application`,label:`application`},{id:`share-access`,label:`share_access`},{id:`startup`,label:`startup`},{id:`fonts`,label:`fonts`},{id:`time`,label:`time_format`},{id:`updates`,label:`updates`},{id:`colors`,label:`colors`},{id:`background`,label:`background`},{id:`safety`,label:`safety`},{id:`tags`,label:`tags`},{id:`files-view`,label:`files_view`},{id:`shortcuts`,label:`shortcuts`},{id:`memory`,label:`memory`},{id:`overview`,label:`overview`},{id:`gallery`,label:`gallery`},{id:`icons`,label:`icons`},{id:`extension-icons`,label:`icons_by_extension`},{id:`folder-icons`,label:`folder_icons`},{id:`folder-index`,label:`folder_index`},{id:`indexing`,label:`index_tasks`},{id:`files`,label:`files`}],wn={application:(0,C.jsx)(xt,{size:13}),share_access:(0,C.jsx)(Wt,{size:13}),startup:(0,C.jsx)(It,{size:13}),fonts:(0,C.jsx)(Tt,{size:13}),time_format:(0,C.jsx)(Ht,{size:13}),updates:(0,C.jsx)(b,{size:13}),colors:(0,C.jsx)(g,{size:13}),background:(0,C.jsx)(y,{size:13}),safety:(0,C.jsx)(Ct,{size:13}),tags:(0,C.jsx)(Ft,{size:13}),files_view:(0,C.jsx)(St,{size:13}),shortcuts:(0,C.jsx)(Dt,{size:13}),memory:(0,C.jsx)(Kt,{size:13}),overview:(0,C.jsx)(jt,{size:13}),gallery:(0,C.jsx)(zt,{size:13}),icons:(0,C.jsx)(Ot,{size:13}),icons_by_extension:(0,C.jsx)(Lt,{size:13}),folder_icons:(0,C.jsx)(wt,{size:13}),folder_index:(0,C.jsx)(At,{size:13}),index_tasks:(0,C.jsx)(Bt,{size:13}),files:(0,C.jsx)(Rt,{size:13})},Tn={application:[`language`,`pickerWindowWidth`,`pickerWindowHeight`,`sharePortMode`,`sharePort`,`linkPathMode`,`restoreTabs`,`systemPropertiesSheet`],"share-access":[`shareAccessEnabled`,`shareApprovalMinutes`,`shareDenialSeconds`,`shareHttps`],startup:[`startHidden`],fonts:[`fonts`],time:[`timeFormat`,`timeFormatPattern`,`relativeTime`,`relativeTimeWindowMinutes`],colors:[`accentColor`,`secondaryColor`,`themeMode`,`themePresets`],background:[`backgroundSource`,`backgroundCustom`,`backgroundBlur`,`backgroundSaturation`,`backgroundBrightness`,`backgroundLooks`],safety:[`protectedPaths`,`deleteDelaySeconds`],"files-view":[`defaultView`,`showCheckboxes`,`openOnSingleClick`,`confirmDelete`,`previewVideoAudio`,`previewVideoAutoplay`,`trayAutoShow`,`conflictNameStyle`],shortcuts:[`shortcuts`,`globalHotkey`],overview:[`recentLimit`],gallery:[`galleryRoots`],icons:[`systemIcons`,`customFolderIcons`],"extension-icons":[`extensionIcons`],"folder-index":[`writeDirectoryIndex`,`directoryIndexBlacklist`]},En=`yafm.colors.recent`;function Dn(){let e=f(En);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function On({appInfo:e,focusSection:t,onSettingsChanged:n,find:r,onSearchMatches:a}){let l=c(),[u,ue]=(0,S.useState)([]),[f,me]=(0,S.useState)(null),[ge,ve]=(0,S.useState)(!1),[p,h]=(0,S.useState)(null),Qe=o(re(p?.themeMode)),[tt,it]=(0,S.useState)(null),[ct,vt]=(0,S.useState)(``),[St,Ct]=(0,S.useState)(`file`),[Tt,Dt]=(0,S.useState)(!1),[Ot,jt]=(0,S.useState)(!1),[g,Nt]=(0,S.useState)(null),[Pt,Ft]=(0,S.useState)(Ve),[Lt,Rt]=(0,S.useState)(!1),[zt,Bt]=(0,S.useState)(null),[y,Ht]=(0,S.useState)(null),[Wt,Kt]=(0,S.useState)(null),[tn,nn]=(0,S.useState)(!1),[rn,an]=(0,S.useState)(null),[on,sn]=(0,S.useState)(!1),[cn,ln]=(0,S.useState)(null),[w,un]=(0,S.useState)(null),[dn,fn]=(0,S.useState)(``),[pn,hn]=(0,S.useState)(!1),[Cn,On]=(0,S.useState)([]),[Rn,Hn]=(0,S.useState)(null),[O,tr]=(0,S.useState)(!1),[nr,A]=(0,S.useState)(null),[Dr,Or]=(0,S.useState)(``),[kr,Ar]=(0,S.useState)(ut),[jr,Mr]=(0,S.useState)(null),[Nr,Pr]=(0,S.useState)(null),[Fr,Kr]=(0,S.useState)(``),[qr,Jr]=(0,S.useState)(``),[Yr,ii]=(0,S.useState)(null),[ai,Ai]=(0,S.useState)(Dn),[Pi,Fi]=(0,S.useState)({}),[W,Ii]=(0,S.useState)(null),[G,Li]=(0,S.useState)(null),[Ri,zi]=(0,S.useState)(!1),[Bi,Vi]=(0,S.useState)(null),[K,Hi]=(0,S.useState)(null),[Ui,q]=(0,S.useState)(null),Wi=(0,S.useRef)(!1),[Gi,Ki]=(0,S.useState)(null),[qi,Ji]=(0,S.useState)(T[0].id),[Yi,Xi]=(0,S.useState)([]),[Zi,Qi]=(0,S.useState)(null),[$i,ea]=(0,S.useState)(``),[ta,na]=(0,S.useState)(!1),[ra,ia]=(0,S.useState)(null),[aa,oa]=(0,S.useState)(null),[sa,ca]=(0,S.useState)(``),[la,ua]=(0,S.useState)(null),[da,fa]=(0,S.useState)(null),[pa,ma]=(0,S.useState)(null),[ha,ga]=(0,S.useState)(!1),[_a,va]=(0,S.useState)(``),ya=(0,S.useRef)(null),ba=(0,S.useRef)({}),J=p?.defaultView??le,xa=p?.themePresets??[],Y=e?.platform===`windows`,Sa=Y?y?y.registered&&y.pathMatches:!1:p?.archiveHandler??!1,Ca=y?.registered??p?.archiveHandler??!1,wa=Y?Wt?Wt.registered&&Wt.pathMatches:!1:p?.defaultFileManager??!1,Ta=Y?Pt.registered&&Pt.pathMatches:p?.linksEnabled??!1;bt(ya,r??null,`section`,a??(()=>void 0),[p]),(0,S.useEffect)(()=>{let e=ya.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){Ji(T[T.length-1].id);return}let n=t+110,r=T[0].id;for(let{id:e}of T){let t=ba.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}Ji(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let X=e=>t=>{ba.current[e]=t},Ea=(0,S.useRef)(null),Da=(0,S.useRef)(null),Oa=(0,S.useRef)(0),ka=()=>{if(Oa.current!==0)return;let e=()=>{let t=ya.current;if(!t||!Da.current){Oa.current=0;return}let n=Math.min(Da.current.top,t.scrollHeight-t.clientHeight),r=n-t.scrollTop;if(Math.abs(r)<.5){t.scrollTop=n,Da.current=null,Oa.current=0;return}let i=Math.min(Math.abs(r)*.2,140);t.scrollTop+=Math.sign(r)*i,Oa.current=requestAnimationFrame(e)};Oa.current=requestAnimationFrame(e)},Aa=e=>{let t=ya.current,n=ba.current[e];t&&n&&(Da.current={index:T.findIndex(t=>t.id===e),top:t.scrollTop+n.getBoundingClientRect().top-t.getBoundingClientRect().top},Ji(e),ka())};(0,S.useEffect)(()=>{let e=Ea.current,t=e?.querySelector(`[data-section="${qi}"]`);if(!e||!t)return;let n=e.getBoundingClientRect(),r=t.getBoundingClientRect();r.top<n.top?e.scrollTop+=r.top-n.top-6:r.bottom>n.bottom&&(e.scrollTop+=r.bottom-n.bottom+6)},[qi]),(0,S.useEffect)(()=>{let e=ya.current;if(!e)return;let t=()=>{Da.current=null};return e.addEventListener(`wheel`,t,{passive:!0}),e.addEventListener(`pointerdown`,t,{passive:!0}),()=>{e.removeEventListener(`wheel`,t),e.removeEventListener(`pointerdown`,t),cancelAnimationFrame(Oa.current)}},[]);let ja=(0,S.useRef)(0),Ma=e=>{let t=Math.sign(e.deltaY);if(t===0)return;let n=e.deltaMode!==0||Math.abs(e.deltaY)>=50,r=performance.now();if(!n&&r<ja.current)return;ja.current=r+220;let i=Da.current?.index??T.findIndex(e=>e.id===qi),a=Math.min(Math.max((i<0?0:i)+t,0),T.length-1);a!==(i<0?0:i)&&Aa(T[a].id)};(0,S.useEffect)(()=>{t&&Aa(t)},[t]),(0,S.useEffect)(()=>{i().then(e=>ue(e.available),()=>ue([]))},[]),(0,S.useEffect)(()=>{He().then(Xi,()=>Xi([]))},[]),(0,S.useEffect)(()=>{Ue().then(fa,()=>fa(null))},[]),(0,S.useEffect)(()=>{Fe().then(Li,()=>void 0)},[]),(0,S.useEffect)(()=>{de().then(me,()=>me(null)),xe().then(h,()=>h(null)),Xe().then(Ft,()=>Ft(Ve)),ke().then(Ht,()=>Ht(null)),be().then(Kt,()=>Kt(null)),Yt().then(On,()=>On([]))},[]),(0,S.useEffect)(()=>{let e=()=>void qe().then(Nt,()=>Nt(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let Z=async e=>{if(!p)return;let t={...p,...e};Object.keys(e).every(e=>t[e]===p[e])||(h(t),pe(),h(await Ee(t)),n())},Na=async e=>{if(!p)return;if(e===`startup`){await Ro(`none`),await Z({startHidden:!1});return}let t=Tn[e];if(!t?.length)return;let n=await je(),r=Object.fromEntries(t.map(e=>[e,n[e]]));await Z(r)},Pa=e=>e?p?.backgroundLooks[e]??null:null,Fa=e=>{let t=Pa(e);return{backgroundBlur:t?.blur??0,backgroundSaturation:t?.saturation??100,backgroundBrightness:t?.brightness??100}},Ia=e=>{let t={...e.backgroundLooks},n=e.backgroundSource;return n?e.backgroundBlur===0&&e.backgroundSaturation===100&&e.backgroundBrightness===100?(delete t[n],t):(t[n]={blur:e.backgroundBlur,saturation:e.backgroundSaturation,brightness:e.backgroundBrightness},t):t},La=e=>{p&&Z({backgroundSource:e,backgroundLooks:Ia(p),...Fa(e)})},Ra=e=>{p&&Z({...e,backgroundLooks:Ia({...p,...e})})},za=()=>{if(!p)return;let e={...p.backgroundLooks};p.backgroundSource&&delete e[p.backgroundSource],Z({backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,backgroundLooks:e})},Ba=async e=>{let t=await et(e);if(!t||!p)return;let n=p.backgroundCustom,r=`file:${t}`;await Z({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:r,backgroundLooks:Ia(p),...Fa(r)})},Va=async()=>{let e=_a.trim();if(!p||!ce(e))return;let t=p.backgroundCustom,n=`url:${e}`;va(``),await Z({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:n,backgroundLooks:Ia(p),...Fa(n)})},Ha=e=>{if(!p)return;let t=p.backgroundSource,n=t===`file:${e}`||t===`url:${e}`||t===e;Z({backgroundCustom:p.backgroundCustom.filter(t=>t!==e),...n?{backgroundSource:null,backgroundLooks:Ia(p),...Fa(null)}:{}})},Ua=async()=>{if(!p)return;let t=await Ze();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;p.protectedPaths.includes(r)||await Z({protectedPaths:[...p.protectedPaths,r]})},Wa=()=>{let e=Fr.trim();p&&e&&!p.protectedPaths.includes(e)&&(Kr(``),Z({protectedPaths:[...p.protectedPaths,e]}))},Ga=()=>{if(!p||!jr)return;let e=jr.value.trim(),t=jr.from;Mr(null),e.length!==0&&e!==t&&Z({protectedPaths:p.protectedPaths.map(n=>n===t?e:n)})},Ka=e=>{p&&Z({protectedPaths:p.protectedPaths.filter(t=>t!==e)})},qa=async()=>{let e=await Te();e.length>0&&await Z({protectedPaths:e})},Ja=()=>{if(!p||!Nr)return;let e=Nr.value.trim(),t=Nr.from;Pr(null),e&&e!==t&&Z({directoryIndexBlacklist:p.directoryIndexBlacklist.map(n=>n===t?e:n)})},Ya=()=>{let e=qr.trim();p&&e&&!p.directoryIndexBlacklist.includes(e)&&(Jr(``),Z({directoryIndexBlacklist:[...p.directoryIndexBlacklist,e]}))},Xa=async()=>{if(!p)return;let t=await Ze();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;p.directoryIndexBlacklist.includes(r)||await Z({directoryIndexBlacklist:[...p.directoryIndexBlacklist,r]})},Za=e=>{p&&Z({directoryIndexBlacklist:p.directoryIndexBlacklist.filter(t=>t!==e)})},Qa=()=>{Z({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},$a=()=>{if(!p||Yr===null)return;let e=Yr.trim()||`yyyy/MM/dd HH:mm`;ii(null),e!==p.timeFormatPattern&&Z({timeFormatPattern:e})},eo=(e,t)=>{Ai(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return fe(En,i),i})},Q=ae(p?.accentColor,se),$=ae(p?.secondaryColor,oe),to=(e,t)=>{p&&(eo(`accent`,Q),eo(`secondary`,$),Z({accentColor:e,secondaryColor:t}))},no=(e,t)=>{p&&(eo(e,e===`accent`?Q:$),Z(e===`accent`?{accentColor:t}:{secondaryColor:t}))},ro=async()=>{zi(!0),Vi(null);try{Li(await Be())}catch{Vi(l(`could_not_check_for_updates`))}finally{zi(!1)}},io=async()=>{Wi.current=!1,Vi(null),Hi({phase:`changelog`,changelog:``,downloaded:0,total:0,percent:0});try{let e=await Le();e.ok||ao(e.error??``)}catch(e){ao(e instanceof Error?e.message:String(e))}},ao=e=>Hi(t=>t&&{...t,phase:`error`,error:e}),oo=()=>{Hi(null),Je().catch(e=>Vi(e instanceof Error?e.message:String(e)))},so=async()=>{Hi(e=>e&&{...e,phase:`installing`});try{let e=await Pe();e.ok||ao(e.error??l(`the_update_failed`))}catch(e){ao(e instanceof Error?e.message:String(e))}};(0,S.useEffect)(()=>Ke(e=>Hi(t=>t&&{...t,phase:e.phase,downloaded:e.downloaded,total:e.total,percent:e.percent,error:e.error??t.error})),[]),(0,S.useEffect)(()=>Re(e=>Hi(t=>t&&{...t,changelog:e.text})),[]),(0,S.useEffect)(()=>{K?.phase!==`ready`||Wi.current||(Wi.current=!0,so())},[K?.phase]);let co=async()=>{if(!p||!W)return;let e=W.name.trim()||`${W.accent.toUpperCase()} / ${W.secondary.toUpperCase()}`,t=[...p.themePresets,{name:e,accent:W.accent,secondary:W.secondary}];Ii(null),await Z({themePresets:t})},lo=async e=>{p&&await Z({themePresets:p.themePresets.filter((t,n)=>n!==e)})},uo=e=>{let t=Gi;Ki(null),t&&t.role===e&&(e===`accent`?Q:$).toLowerCase()!==t.color.toLowerCase()&&eo(e,t.color)},fo=async()=>{let e=Dr.trim();if(e&&!O){tr(!0),A(null);try{On(await Zt(e,kr)),Or(``)}catch{A(l(`could_not_add_the_tag`))}finally{tr(!1)}}},po=async(e,t)=>{On(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Qt(e,t)||A(l(`could_not_change_the_tag_s_color`))},mo=async e=>{if(O)return;tr(!0),A(null);let t=await Xt(e);On(await Yt()),t||A(`"${e}" is still used by a folder whose index could not be updated.`),tr(!1)},ho=async()=>{let e=Rn;if(!e||O)return;let t=e.value.trim();t.length===0||t===e.name?Hn(null):(tr(!0),A(null),await $t(e.name,t)?(On(await Yt()),Hn(null)):A(`Could not rename "${e.name}".`),tr(!1))},go=async e=>{let t=new Set(J.columns??le.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=mt.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await Z({defaultView:{...J,columns:n}})},_o=async()=>{if(Lt)return;let e=!Ta;Rt(!0),Bt(null);try{let t=await Ye(e),r=t.registered&&t.pathMatches;Ft(t),h(e=>e&&{...e,linksEnabled:r}),n(),r!==e&&Bt(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{Bt(`The request to Windows failed. Try again.`)}finally{Rt(!1)}},vo=async e=>{if(!ge){ve(!0);try{me(await _e(e)),n()}finally{ve(!1)}}},yo=async()=>{if(on||!p)return;let e=!wa;sn(!0),ln(null);try{let t=await we(e);Kt(t);let r=Y?t.registered&&t.pathMatches:e;h(e=>e&&{...e,defaultFileManager:r}),n(),Y&&r!==e&&ln(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{ln(`The request to Windows failed. Try again.`)}finally{sn(!1)}},bo=async()=>{if(!tn){nn(!0),an(null);try{let e=await Se();Ht(e);let t=e.registered&&e.pathMatches;h(e=>e&&{...e,archiveHandler:t}),n(),t||an(`Windows did not accept the archive registration. Try again.`)}catch{an(`The request to Windows failed. Try again.`)}finally{nn(!1)}}},xo=async()=>{if(!tn){nn(!0),an(null);try{let e=await ye();Ht(e),h(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&an(`The registration is still there. Try turning it off again.`)}catch{an(`The request to Windows failed. Try again.`)}finally{nn(!1)}}},So=async(e,t)=>{if(!p)return;let n={...p.extensionIcons};t===null?delete n[e]:n[e]=t,await Z({extensionIcons:n})};(0,S.useEffect)(()=>{ft().then(ia,()=>void 0)},[]);let Co=dt(p?.shortcuts),wo=e=>e===gn?lt(p?.globalHotkey):Co[e],To=(0,S.useMemo)(()=>{let e=new Map;for(let{id:t}of _n)for(let n of t===gn?lt(p?.globalHotkey):Co[t]){let r=e.get(n)??[];r.push(t),e.set(n,r)}return e},[Co,p?.globalHotkey]),Eo=e=>{let t=new Set;for(let n of wo(e))for(let r of To.get(n)??[]){if(r===e)continue;let n=_n.find(e=>e.id===r);n&&t.add(l(n.label))}return[...t]},Do=(e,t)=>{Z(e===gn?{globalHotkey:t.length>0?at(t):null}:{shortcuts:{...p?.shortcuts,[e]:at(t)}})},Oo=(e,t)=>{let n=[...wo(e)];n.splice(t,1),Do(e,n)};(0,S.useEffect)(()=>{if(!w)return;let e=e=>[`control`,`alt`,`shift`,`meta`].includes(e.toLowerCase()),t=e=>{let t=[...wo(w.action)];w.index>=0?t[w.index]=e:t.includes(e)||t.push(e),un(null),fn(``),Do(w.action,t)},n=n=>{if(n.preventDefault(),n.stopPropagation(),n.key===`Escape`){un(null),fn(``);return}if(e(n.key)){w.action===`openInNewTab`?t(rt(n)):fn(rt(n));return}let r=rt(n);r&&t(r)},r=t=>{e(t.key)&&fn(``)};return window.addEventListener(`keydown`,n,!0),window.addEventListener(`keyup`,r,!0),()=>{window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`keyup`,r,!0)}},[w,p]);let ko=async e=>{await Z({recentLimit:Math.min(Math.max(e,0),50)})},Ao=(e,t)=>{let n=t??Pi[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};Fi(t=>({...t,[e]:void 0})),Z(i)},jo=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;Qi(null),await Z({sharePortMode:`custom`,sharePort:n}),await $e(n,`custom`)},Mo=async e=>{let t=e===`custom`,n=t?p?.sharePort??8080:null;await Z({sharePortMode:t?`custom`:`random`,sharePort:n}),await $e(n,t?`custom`:`random`)};(0,S.useEffect)(()=>{ht().then(na,()=>void 0)},[]);let No=async()=>{$i.length!==0&&(na(await _t($i)),ea(``))},Po=async()=>{na(await _t(null))},Fo=async()=>{let e=await et([`.pfx`,`.p12`]);e&&(oa(e),ca(``),ua(null))},Io=async()=>{if(aa)try{ia(await gt(aa,sa.length>0?sa:null)),oa(null),ca(``),ua(null)}catch(e){ua(e instanceof Error?e.message:String(e))}},Lo=async()=>{try{ia(await ot()),ua(null)}catch(e){ua(e instanceof Error?e.message:String(e))}},Ro=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;ga(!0),ma(null);try{let e=await ze(t);fa(e),ma(e.error),e.error||await Z({startupMode:t})}finally{ga(!1)}},zo=async e=>{await Z({galleryRoots:e.length>0?e:null})},Bo=async()=>{let e=await Ze(),t=p?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await zo([...t,e])},Vo=async()=>{let e=ct.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await So(e,St),vt(``))},Ho=async()=>{jt(!0);try{let e=await Ze();if(!e)return;let t=await et([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;let n=e.replace(/[\\/][^\\/]+$/,``),r=ie(e),i=`file:${t}`;await Ce(n,r,i)&&(pe(),it({folder:e,icon:t}))}finally{jt(!1)}},Uo=async(e,t)=>{let n={...p?.fonts};t?n[e]=t:delete n[e],await Z({fonts:n})};return(0,C.jsxs)(Bn,{children:[(0,C.jsxs)(Vn,{ref:ya,children:[(0,C.jsxs)(D,{ref:X(`application`),children:[(0,C.jsx)(E,{note:`the_build_its_yafm_links_and_what_reopens_at_launch`,title:`application`,onReset:()=>q({id:`application`,label:`application`})}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(j,{children:[(0,C.jsx)(P,{children:l(`version`)}),(0,C.jsx)(R,{children:e?`v${e.version}`:`—`})]}),(0,C.jsxs)(j,{children:[(0,C.jsx)(P,{children:l(`platform`)}),(0,C.jsx)(R,{children:e?.platform??`—`})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`language`)}),(0,C.jsx)(I,{children:l(`the_language_the_interface_uses_english_is_the_default_the_system_option_follows_the_operating_system`)})]}),(0,C.jsx)(N,{children:(0,C.jsx)(Ln,{disabled:!p,onChange:e=>void Z({language:e}),options:[Sn,...u.length>0?u:[vn]],value:p?.language??vn})})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`picker_window_size`)}),(0,C.jsx)(I,{children:l(`the_size_the_folder_and_file_picker_opens_at_width_and_height_are_in_pixels`)})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(Gr,{inputMode:`numeric`,onBlur:e=>Ao(`width`,e.currentTarget.value),onChange:e=>Fi(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Pi.width??String(p?.pickerWindowWidth??1200)}),(0,C.jsx)(R,{children:`×`}),(0,C.jsx)(Gr,{inputMode:`numeric`,onBlur:e=>Ao(`height`,e.currentTarget.value),onChange:e=>Fi(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Pi.height??String(p?.pickerWindowHeight??800)})]})]}),Y&&(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`windows_properties`)}),(0,C.jsx)(I,{children:l(`properties_opens_the_windows_page_with_its_security_and_details_tabs_instead_of_the_page_built_into_the_app`)})]}),(0,C.jsx)(N,{children:(0,C.jsx)(B,{$on:p?.systemPropertiesSheet??!1,disabled:!p,onClick:()=>void Z({systemPropertiesSheet:!p?.systemPropertiesSheet}),type:`button`,children:(0,C.jsx)(V,{})})})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`web_server_port`)}),(0,C.jsx)(I,{children:l(`random_asks_the_operating_system_for_one_free_port_when_the_first_web_share_starts_and_every_web_share_keeps_using_it_custom_always_tries_the_port_below`)})]}),(0,C.jsx)(N,{children:(0,C.jsx)(yt,{disabled:!p,onChange:e=>void Mo(e),options:[{value:`random`,label:l(`random`)},{value:`custom`,label:l(`custom_port`)}],value:p?.sharePortMode??`random`,width:160})})]}),p?.sharePortMode===`custom`&&(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`custom_port`)}),(0,C.jsx)(I,{children:l(`a_number_from_1_to_65535_if_it_is_already_in_use_the_app_asks_for_a_free_port_instead`)})]}),(0,C.jsx)(N,{children:(0,C.jsx)(Gr,{inputMode:`numeric`,onBlur:e=>void jo(e.currentTarget.value),onChange:e=>Qi(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:Zi??(p?.sharePort?String(p.sharePort):``)})})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`link_paths`)}),(0,C.jsx)(I,{children:l(`relative_links_keep_working_when_the_link_and_its_target_move_together_absolute_links_always_store_the_full_target_path`)})]}),(0,C.jsx)(N,{children:(0,C.jsx)(yt,{disabled:!p,onChange:e=>void Z({linkPathMode:e}),options:[{value:`relative`,label:l(`relative`)},{value:`absolute`,label:l(`absolute`)}],value:p?.linkPathMode??`relative`,width:160})})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`open_yafm_links`)}),(0,C.jsx)(I,{children:l(`registers_this_app_for_yafm_links_for_the_current_user_only_turning_it_on_writes_this_copy_s_path_starting_the_app_never_touches_the_registry`)}),Pt.registered&&!Pt.pathMatches&&(0,C.jsx)(L,{children:l(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:Pt.registeredPath??`?`})}),zt&&(0,C.jsx)(L,{children:zt})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(Wr,{$on:Ta,children:l(Ta?`active`:`off`)}),(0,C.jsx)(B,{$on:Ta,disabled:Lt,onClick:()=>void _o(),title:l(Ta?`stop_opening_yafm_links`:`open_yafm_links_with_this_app`),type:`button`,children:(0,C.jsx)(V,{})})]})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`use_as_the_default_file_manager`)}),(0,C.jsx)(I,{children:l(`registers_this_app_for_folder_opens_on_this_account_explorer_stays_available_from_the_context_menu_on_linux_this_sets_the_inode_directory_default`)}),Wt?.registered&&!Wt.pathMatches&&(0,C.jsx)(L,{children:l(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:Wt.registeredPath??`?`})}),cn&&(0,C.jsx)(L,{children:cn})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(Wr,{$on:wa,children:l(wa?`active`:`off`)}),(0,C.jsx)(B,{$on:wa,disabled:!p||on,onClick:()=>void yo(),title:l(wa?`stop_using_this_app_for_folders`:`use_this_app_for_folders`),type:`button`,children:(0,C.jsx)(V,{})})]})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`open_archives_with_this_app`)}),(0,C.jsx)(I,{children:l(`registers_this_app_for_zip_7z_rar_tar_and_the_other_archive_types_on_this_account_so_double_clicking_one_shows_it_as_a_folder_here_windows_may_still_ask_once_which_app_to_use`)}),(0,C.jsx)(I,{children:l(`when_this_is_off_opening_an_archive_uses_the_system_s_default_application_instead`)}),y?.registered&&!y.pathMatches&&(0,C.jsx)(L,{children:l(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:y.registeredPath??`?`})}),rn&&(0,C.jsx)(L,{children:rn})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(Wr,{$on:Sa,children:l(Sa?`active`:`off`)}),(0,C.jsxs)(U,{disabled:!p||tn||Sa,onClick:()=>void bo(),type:`button`,children:[(0,C.jsx)(Vt,{size:13}),l(`register`)]}),e?.platform===`windows`&&(0,C.jsxs)(U,{onClick:()=>void Ie(`ms-settings:defaultapps`),type:`button`,children:[(0,C.jsx)(xt,{size:13}),l(`default_apps`)]}),(0,C.jsxs)(Ur,{disabled:!p||tn||!Ca,onClick:()=>void xo(),type:`button`,children:[(0,C.jsx)(x,{size:13}),l(`unregister`)]})]})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`reopen_the_tabs_that_were_open`)}),(0,C.jsx)(I,{children:l(`keeps_the_tabs_and_the_folder_each_one_shows_so_they_come_back_after_a_restart_a_folder_passed_on_the_command_line_takes_over_instead`)})]}),(0,C.jsx)(B,{$on:p?.restoreTabs??!0,disabled:!p,onClick:()=>void Z({restoreTabs:!p?.restoreTabs}),type:`button`,children:(0,C.jsx)(V,{})})]})]})]}),(0,C.jsxs)(D,{ref:X(`share-access`),children:[(0,C.jsx)(E,{note:`share_access_note`,title:`share_access`,onReset:()=>q({id:`share-access`,label:`share_access`})}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(P,{children:l(`share_access_require_approval`)}),(0,C.jsx)(m,{})]}),(0,C.jsx)(I,{children:l(`share_access_note`)})]}),(0,C.jsx)(B,{$on:p?.shareAccessEnabled??!0,disabled:!p,onClick:()=>void Z({shareAccessEnabled:!(p?.shareAccessEnabled??!0)}),type:`button`,children:(0,C.jsx)(V,{})})]}),(0,C.jsxs)(j,{children:[(0,C.jsx)(M,{children:(0,C.jsx)(P,{children:l(`share_access_approval_minutes`)})}),(0,C.jsx)(N,{children:(0,C.jsx)(Ir,{max:1440,min:1,onChange:e=>void Z({shareApprovalMinutes:Math.min(1440,Math.max(1,Number(e.target.value)||60))}),type:`number`,value:p?.shareApprovalMinutes??60})})]}),(0,C.jsxs)(j,{children:[(0,C.jsx)(M,{children:(0,C.jsx)(P,{children:l(`share_access_denial_seconds`)})}),(0,C.jsx)(N,{children:(0,C.jsx)(Ir,{max:3600,min:1,onChange:e=>void Z({shareDenialSeconds:Math.min(3600,Math.max(1,Number(e.target.value)||10))}),type:`number`,value:p?.shareDenialSeconds??10})})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(F,{children:(0,C.jsx)(P,{children:l(`password`)})}),(0,C.jsx)(I,{children:l(`share_access_password_note`)}),ta&&(0,C.jsx)(I,{children:l(`share_access_password_is_set`)})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(Lr,{autoComplete:`new-password`,onChange:e=>ea(e.target.value),placeholder:l(`password`),type:`password`,value:$i}),(0,C.jsxs)(U,{disabled:$i.length===0,onClick:()=>void No(),type:`button`,children:[(0,C.jsx)(v,{size:13}),l(`save`)]}),ta&&(0,C.jsxs)(Ur,{onClick:()=>void Po(),type:`button`,children:[(0,C.jsx)(x,{size:13}),l(`clear`)]})]})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`share_access_https`)}),(0,C.jsx)(I,{children:l(`share_access_https_note`)})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(Wr,{$on:p?.shareHttps??!1,children:p?.shareHttps?l(`active`):l(`off`)}),(0,C.jsx)(B,{$on:p?.shareHttps??!1,disabled:!p,onClick:()=>void Z({shareHttps:!(p?.shareHttps??!1)}),title:p?.shareHttps?l(`share_access_https_off`):l(`share_access_https_on`),type:`button`,children:(0,C.jsx)(V,{})})]})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`share_access_certificate`)}),(0,C.jsx)(I,{children:ra?`${ra.subject} · ${l(`share_access_expires`)}: ${new Date(ra.expiresAt).toLocaleString()}`:l(`share_access_certificate_self_signed`)}),ra&&(0,C.jsx)(I,{children:ra.selfSigned?l(`share_access_certificate_self_signed`):l(`share_access_certificate_imported`)}),la&&(0,C.jsx)(L,{children:la})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(z,{onClick:()=>void Fo(),type:`button`,children:l(`share_access_import_certificate`)}),(0,C.jsx)(z,{onClick:()=>void Lo(),type:`button`,children:l(`share_access_reset_certificate`)})]})]}),aa&&(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`password`)}),(0,C.jsx)(I,{children:aa})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(Lr,{autoComplete:`off`,onChange:e=>ca(e.target.value),placeholder:l(`password`),type:`password`,value:sa}),(0,C.jsx)(z,{onClick:()=>void Io(),type:`button`,children:l(`ok`)}),(0,C.jsx)(z,{onClick:()=>oa(null),type:`button`,children:l(`cancel`)})]})]}),(0,C.jsx)(j,{children:(0,C.jsxs)(M,{children:[(0,C.jsx)(F,{children:(0,C.jsx)(P,{children:l(`devices`)})}),(0,C.jsx)(I,{children:l(`share_access_devices_note`)})]})}),(0,C.jsx)(kn,{approvalMinutes:p?.shareApprovalMinutes??60,denialSeconds:p?.shareDenialSeconds??10})]})]}),(0,C.jsxs)(D,{ref:X(`startup`),children:[(0,C.jsx)(E,{note:`how_the_app_joins_your_login_session_and_whether_it_opens_quietly_in_the_tray`,title:`startup`,onReset:()=>q({id:`startup`,label:`startup`})}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`start_with_the_computer`)}),(0,C.jsx)(I,{children:l(`a_shortcut_uses_the_startup_folder_or_xdg_autostart_a_task_uses_task_scheduler_or_a_systemd_user_service_which_starts_earlier_and_is_usually_faster`)}),pa&&(0,C.jsx)(L,{children:pa}),da&&!da.supported&&(0,C.jsx)(L,{children:l(`this_platform_cannot_create_a_per_user_startup_entry`)})]}),(0,C.jsx)(N,{children:(0,C.jsx)(yt,{disabled:!p||ha||da!==null&&!da.supported,onChange:e=>void Ro(e),options:[{value:`none`,label:l(`none`)},{value:`shortcut`,label:l(`shortcut`)},{value:`task`,label:l(`scheduled_task`)}],value:da?.mode??p?.startupMode??`none`,width:170})})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`start_hidden_in_the_tray`)}),(0,C.jsx)(I,{children:l(`launch_straight_to_the_tray_icon_instead_of_showing_the_window_the_tray_menu_opens_it_again`)})]}),(0,C.jsx)(N,{children:(0,C.jsx)(B,{$on:p?.startHidden??!1,disabled:!p,onClick:()=>void Z({startHidden:!p?.startHidden}),type:`button`,children:(0,C.jsx)(V,{})})})]})]})]}),(0,C.jsxs)(D,{ref:X(`fonts`),children:[(0,C.jsx)(E,{note:`choose_the_font_each_part_of_the_interface_uses_every_font_installed_on_this_system_is_listed_each_one_drawn_in_its_own_face`,title:`fonts`,onReset:()=>q({id:`fonts`,label:`fonts`})}),(0,C.jsxs)(k,{children:[We.map(e=>(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(e.label)}),(0,C.jsx)(I,{children:l(`falls_back_to_font_until_another_family_is_chosen`,{font:l(e.fallback)})})]}),(0,C.jsx)(N,{children:(0,C.jsx)(en,{defaultLabel:l(e.fallback),disabled:!p,fonts:Yi,onChange:t=>void Uo(e.id,t),sample:e.sample,value:p?.fonts?.[e.id]??null})})]},e.id)),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`reset`)}),(0,C.jsx)(I,{children:l(`back_to_the_app_s_built_in_font_for_every_role`)})]}),(0,C.jsx)(N,{children:(0,C.jsxs)(U,{onClick:()=>void Z({fonts:{}}),type:`button`,children:[(0,C.jsx)(b,{size:13}),l(`reset`)]})})]})]})]}),(0,C.jsxs)(D,{ref:X(`time`),children:[(0,C.jsx)(E,{note:`every_timestamp_in_the_interface_uses_this_format_follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`,title:`time_format`,onReset:()=>q({id:`time`,label:`time_format`})}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(Wn,{children:[(0,C.jsxs)(Gn,{children:[(0,C.jsx)(P,{children:l(`format`)}),(0,C.jsx)(I,{children:l(`follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`)})]}),(0,C.jsx)(gi,{children:bn.map(e=>(0,C.jsx)(_i,{$active:(p?.timeFormat??`24`)===e.id,onClick:()=>void Z({timeFormat:e.id}),type:`button`,children:l(e.label)},e.id))}),(p?.timeFormat??`24`)===`custom`&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(vi,{"aria-label":l(`pattern`),onBlur:$a,onChange:e=>ii(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),$a()):e.key===`Escape`&&ii(null)},spellCheck:!1,value:Yr??p?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,C.jsx)(I,{children:l(`tokens_yyyy_year_mm_month_dd_day_hh_24_hour_mm_minute_ss_second_hh_12_hour_and_a_am_pm_other_characters_are_copied`)})]}),(0,C.jsxs)(yi,{children:[(0,C.jsx)(`span`,{children:l(`preview`)}),(0,C.jsx)(`code`,{children:ne(xn,p?.timeFormat,Yr??p?.timeFormatPattern)})]})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`relative_times`)}),(0,C.jsx)(I,{children:l(`shows_recent_timestamps_as_seconds_and_minutes_ago_and_keeps_them_counting`)})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(Wr,{$on:p?.relativeTime??!0,children:p?.relativeTime??!0?l(`active`):l(`off`)}),(0,C.jsx)(B,{$on:p?.relativeTime??!0,disabled:!p,onClick:()=>void Z({relativeTime:!(p?.relativeTime??!0)}),title:l(`show_recent_timestamps_as_seconds_and_minutes_ago`),type:`button`,children:(0,C.jsx)(V,{})})]})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`switch_to_the_full_time_after`)}),(0,C.jsx)(I,{children:l(`older_timestamps_use_the_format_above_instead_of_a_relative_one`)})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(H,{disabled:!(p?.relativeTime??!0),max:1440,min:1,onChange:e=>void Z({relativeTimeWindowMinutes:Number(e.target.value)}),step:1,type:`range`,value:p?.relativeTimeWindowMinutes??60}),(0,C.jsxs)(R,{children:[p?.relativeTimeWindowMinutes??60,` min`]})]})]})]})]}),(0,C.jsxs)(D,{ref:X(`updates`),children:[(0,C.jsx)(E,{note:`the_running_build_and_the_newest_one_published`,title:`updates`}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(j,{children:[(0,C.jsx)(P,{children:l(`current_version`)}),(0,C.jsx)(R,{children:e?`v${e.version}`:`—`})]}),(0,C.jsxs)(j,{children:[(0,C.jsx)(P,{children:l(`latest_version`)}),(0,C.jsx)(R,{children:G?`v${G.latest}`:`—`})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:G?G.available?l(`version_version_is_available`,{version:G.latest}):l(`you_are_on_the_latest_version`):l(`not_checked_yet`)}),(0,C.jsx)(I,{children:G?.available?l(`the_installer_downloads_installs_itself_and_closes_the_app`):l(`reads_the_version_file_the_release_workflow_publishes`)})]}),(0,C.jsxs)(N,{children:[G?.available&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(U,{onClick:()=>void Ge(),type:`button`,children:[(0,C.jsx)(kt,{size:13}),l(`open_release_page`)]}),Y&&(0,C.jsxs)(U,{disabled:K!==null,onClick:()=>void io(),type:`button`,children:[(0,C.jsx)(Et,{size:13}),l(`download_and_install`)]})]}),(0,C.jsxs)(U,{disabled:Ri||K!==null,onClick:()=>void ro(),type:`button`,children:[(0,C.jsx)(b,{size:13}),l(Ri?`checking`:`check_for_updates`)]}),(0,C.jsxs)(U,{onClick:()=>void Me(),type:`button`,children:[(0,C.jsx)(wt,{size:13}),l(`open_log_folder`)]})]})]}),Bi&&(0,C.jsx)(j,{children:(0,C.jsx)(L,{children:Bi})})]})]}),(0,C.jsxs)(D,{ref:X(`colors`),children:[(0,C.jsx)(E,{note:`the_accent_and_highlight_colours_the_whole_window_uses`,title:`colors`,onReset:()=>q({id:`colors`,label:`colors`})}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(Wn,{children:[(0,C.jsxs)(Gn,{children:[(0,C.jsx)(P,{children:l(`theme`)}),(0,C.jsx)(I,{children:l(`follow_the_operating_system_or_always_use_the_light_or_dark_palette`)})]}),(0,C.jsx)(gi,{children:yn.map(e=>(0,C.jsx)(_i,{$active:(p?.themeMode??`system`)===e.id,onClick:()=>void Z({themeMode:e.id}),type:`button`,children:l(e.label)},e.id))})]}),(0,C.jsxs)(Wn,{children:[(0,C.jsxs)(Gn,{children:[(0,C.jsx)(P,{children:l(`presets`)}),(0,C.jsx)(I,{children:l(`one_click_changes_the_accent_and_the_highlight_together`)})]}),(0,C.jsxs)(Kn,{children:[Oe.map(e=>(0,C.jsxs)(qn,{$on:Q.toLowerCase()===e.accent&&$.toLowerCase()===e.secondary,onClick:()=>to(e.accent,e.secondary),title:`${l(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,C.jsxs)(er,{children:[(0,C.jsx)(`i`,{style:{background:e.accent}}),(0,C.jsx)(`i`,{style:{background:e.secondary}})]}),(0,C.jsx)(Jn,{children:l(e.name)})]},e.name)),xa.map((e,t)=>(0,C.jsxs)(Yn,{children:[(0,C.jsxs)(qn,{$on:Q.toLowerCase()===e.accent.toLowerCase()&&$.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>to(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,C.jsxs)(er,{children:[(0,C.jsx)(`i`,{style:{background:e.accent}}),(0,C.jsx)(`i`,{style:{background:e.secondary}})]}),(0,C.jsx)(Jn,{children:e.name})]}),(0,C.jsx)(Xn,{onClick:()=>void lo(t),title:l(`remove_preset`),type:`button`,children:(0,C.jsx)(x,{size:9})})]},`${e.name}-${t}`)),W?(0,C.jsxs)(Qn,{children:[(0,C.jsxs)(er,{children:[(0,C.jsx)(`i`,{style:{background:W.accent}}),(0,C.jsx)(`i`,{style:{background:W.secondary}})]}),(0,C.jsx)($n,{autoFocus:!0,maxLength:24,onChange:e=>Ii({...W,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),co()):e.key===`Escape`&&(e.preventDefault(),Ii(null))},placeholder:l(`preset_name`),spellCheck:!1,value:W.name}),(0,C.jsxs)(z,{onClick:()=>void co(),type:`button`,children:[(0,C.jsx)(v,{size:13}),l(`save`)]}),(0,C.jsxs)(z,{onClick:()=>Ii(null),type:`button`,children:[(0,C.jsx)(x,{size:13}),l(`cancel`)]})]}):(0,C.jsxs)(Zn,{disabled:!p,onClick:()=>Ii({name:``,accent:Q,secondary:$}),title:l(`save_the_current_colours_as_a_preset`),type:`button`,children:[(0,C.jsx)(_,{size:12}),l(`add_preset`)]})]})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`accent_color`)}),(0,C.jsx)(I,{children:l(`buttons_selections_focus_rings_and_active_navigation`)})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(zn,{colors:ai.accent,current:Q,onApply:e=>no(`accent`,e)}),(0,C.jsx)(Vr,{"aria-label":l(`accent_color`),disabled:!p,onBlur:()=>uo(`accent`),onChange:e=>void Z({accentColor:e.target.value}),onFocus:()=>Ki({role:`accent`,color:Q}),type:`color`,value:Q}),(0,C.jsx)(Hr,{children:Q.toUpperCase()})]})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`secondary_color`)}),(0,C.jsx)(I,{children:l(`gradients_highlights_and_the_second_end_of_the_accent_ramp`)})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(zn,{colors:ai.secondary,current:$,onApply:e=>no(`secondary`,e)}),(0,C.jsx)(Vr,{"aria-label":l(`secondary_color`),disabled:!p,onBlur:()=>uo(`secondary`),onChange:e=>void Z({secondaryColor:e.target.value}),onFocus:()=>Ki({role:`secondary`,color:$}),type:`color`,value:$}),(0,C.jsx)(Hr,{children:$.toUpperCase()})]})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`reset_colors`)}),(0,C.jsx)(I,{children:l(`returns_the_interface_to_the_default_blue_and_indigo_theme`)})]}),(0,C.jsx)(N,{children:(0,C.jsxs)(z,{disabled:!p,onClick:()=>{eo(`accent`,Q),eo(`secondary`,$),Z({accentColor:null,secondaryColor:null})},type:`button`,children:[(0,C.jsx)(b,{size:13}),l(`reset`)]})})]})]})]}),(0,C.jsxs)(D,{ref:X(`background`),children:[(0,C.jsx)(E,{note:`a_picture_or_video_behind_the_whole_window_from_the_title_bar_to_the_bottom`,title:`background`,onReset:()=>q({id:`background`,label:`background`})}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(Wn,{children:[(0,C.jsxs)(Gn,{children:[(0,C.jsx)(P,{children:l(`wallpaper`)}),(0,C.jsx)(I,{children:l(`none_keeps_the_normal_dark_surface_every_built_in_concept_comes_in_the_app_s_colour_presets_your_own_pictures_sv_gs_and_videos_are_kept_in_the_gallery`)})]}),(0,C.jsx)(ni,{children:(0,C.jsx)(ri,{$active:!p?.backgroundSource,onClick:()=>La(null),title:l(`none`),type:`button`,children:(0,C.jsx)(ci,{children:l(`none`)})})}),(0,C.jsxs)($r,{children:[Ae.map(e=>(0,C.jsxs)(ei,{children:[(0,C.jsx)(ti,{children:l(e.name)}),(0,C.jsx)(ni,{children:e.variants.map(t=>(0,C.jsx)(ri,{$active:p?.backgroundSource===t.id,onClick:()=>La(t.id),title:`${l(e.name)} · ${l(t.preset)}`,type:`button`,children:(0,C.jsx)(`img`,{alt:``,src:Qe===`light`?t.lightUrl:t.url})},t.id))})]},e.id)),(0,C.jsxs)(ei,{children:[(0,C.jsx)(ti,{children:l(`motion`)}),(0,C.jsx)(ni,{children:De.map(e=>(0,C.jsxs)(ri,{$active:p?.backgroundSource===e.id,onClick:()=>La(e.id),title:l(e.name),type:`button`,children:[(0,C.jsx)(`img`,{alt:``,src:e.poster}),(0,C.jsx)(oi,{children:(0,C.jsx)(Mt,{size:11})})]},e.id))})]}),(0,C.jsxs)(ei,{children:[(0,C.jsx)(ti,{children:l(`custom`)}),(0,C.jsxs)(ni,{children:[(p?.backgroundCustom??[]).map(e=>(0,C.jsx)(In,{active:p?.backgroundSource===`file:${e}`||p?.backgroundSource===`url:${e}`||p?.backgroundSource===e,onRemove:()=>Ha(e),onSelect:()=>La(ce(e)?`url:${e}`:`file:${e}`),path:e},e)),(0,C.jsxs)(si,{onClick:()=>void Ba([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,C.jsx)(_,{size:12}),l(`image_2`)]}),(0,C.jsxs)(si,{onClick:()=>void Ba([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,C.jsx)(_,{size:12}),l(`video`)]})]})]})]})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`image_or_video_url`)}),(0,C.jsx)(I,{children:l(`paste_a_direct_http_s_link_the_picture_or_video_is_loaded_from_the_network_each_time_the_window_starts`)})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(Gr,{onChange:e=>va(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Va()},placeholder:`https://…`,value:_a}),(0,C.jsxs)(z,{disabled:!ce(_a),onClick:()=>void Va(),type:`button`,children:[(0,C.jsx)(_,{size:13}),l(`add`)]})]})]}),(0,C.jsxs)(j,{children:[(0,C.jsx)(P,{children:l(`blur`)}),(0,C.jsxs)(N,{children:[(0,C.jsx)(H,{max:40,min:0,onChange:e=>Ra({backgroundBlur:Number(e.target.value)}),type:`range`,value:p?.backgroundBlur??0}),(0,C.jsxs)(R,{children:[p?.backgroundBlur??0,`px`]})]})]}),(0,C.jsxs)(j,{children:[(0,C.jsx)(P,{children:l(`saturation`)}),(0,C.jsxs)(N,{children:[(0,C.jsx)(H,{max:200,min:0,onChange:e=>Ra({backgroundSaturation:Number(e.target.value)}),type:`range`,value:p?.backgroundSaturation??100}),(0,C.jsxs)(R,{children:[p?.backgroundSaturation??100,`%`]})]})]}),(0,C.jsxs)(j,{children:[(0,C.jsx)(P,{children:l(`brightness`)}),(0,C.jsxs)(N,{children:[(0,C.jsx)(H,{max:150,min:40,onChange:e=>Ra({backgroundBrightness:Number(e.target.value)}),type:`range`,value:p?.backgroundBrightness??100}),(0,C.jsxs)(R,{children:[p?.backgroundBrightness??100,`%`]})]})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`reset_the_look`)}),(0,C.jsx)(I,{children:l(`returns_this_background_to_the_default_blur_saturation_and_brightness`)})]}),(0,C.jsx)(N,{children:(0,C.jsxs)(z,{disabled:!p||p.backgroundBlur===0&&p.backgroundSaturation===100&&p.backgroundBrightness===100&&!Pa(p.backgroundSource),onClick:za,type:`button`,children:[(0,C.jsx)(b,{size:13}),l(`reset`)]})})]})]})]}),(0,C.jsxs)(D,{ref:X(`safety`),children:[(0,C.jsx)(E,{note:`deleting_moving_renaming_or_writing_to_a_protected_folder_anything_inside_a_recursive_entry_or_a_folder_that_contains_one_always_waits_for_an_explicit_confirmation`,title:`safety`,onReset:()=>q({id:`safety`,label:`safety`})}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(Wn,{children:[(0,C.jsxs)(Gn,{children:[(0,C.jsx)(P,{children:l(`protected_folders`)}),(0,C.jsx)(I,{children:l(`rules_are_full_path_globs_stays_inside_one_name_crosses_folders_and_matches_one_character_a_rule_without_a_folder_part_such_as_log_applies_to_that_name_at_any_depth_vars_vars_and_are_expanded_first`)})]}),(0,C.jsx)(li,{children:(p?.protectedPaths??[]).map(e=>(0,C.jsxs)(ui,{children:[(0,C.jsx)(di,{"aria-label":l(`protected_path`),onBlur:Ga,onChange:t=>Mr({from:e,value:t.target.value}),onFocus:()=>Mr({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Ga()):e.key===`Escape`&&Mr(null)},spellCheck:!1,value:jr?.from===e?jr.value:e}),(0,C.jsx)(fi,{onClick:()=>Ka(e),title:l(`remove`),type:`button`,children:(0,C.jsx)(x,{size:10})})]},e))}),(0,C.jsxs)(mi,{children:[(0,C.jsx)(hi,{"aria-label":l(`new_protected_rule`),onChange:e=>Kr(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Wa())},placeholder:`*.log`,spellCheck:!1,value:Fr}),(0,C.jsxs)(z,{onClick:Wa,type:`button`,children:[(0,C.jsx)(_,{size:13}),l(`add_the_rule`)]})]}),(0,C.jsxs)(pi,{children:[(0,C.jsxs)(z,{onClick:()=>void qa(),type:`button`,children:[(0,C.jsx)(b,{size:13}),l(`restore_defaults`)]}),(0,C.jsxs)(z,{onClick:()=>void Ua(),type:`button`,children:[(0,C.jsx)(wt,{size:13}),l(`add_folder_2`)]})]})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`confirmation_delay`)}),(0,C.jsx)(I,{children:l(`the_delete_button_in_the_protected_folder_dialog_stays_disabled_for_this_many_seconds_at_least_2`)})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(H,{max:30,min:2,onChange:e=>void Z({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:p?.deleteDelaySeconds??5}),(0,C.jsxs)(R,{children:[p?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,C.jsxs)(D,{ref:X(`tags`),children:[(0,C.jsx)(E,{note:`every_tag_in_the_catalogue_add_rename_recolour_or_remove_them_here`,title:`tags`}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(zr,{"aria-label":l(`color_of_the_new_tag`),onChange:e=>Ar(e.target.value),type:`color`,value:kr}),(0,C.jsx)(Gr,{onChange:e=>Or(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),fo())},placeholder:l(`new_tag`),spellCheck:!1,value:Dr})]}),(0,C.jsx)(I,{children:l(`add_a_tag_here_it_is_available_in_every_folder`)})]}),(0,C.jsx)(N,{children:(0,C.jsxs)(z,{disabled:O||Dr.trim().length===0,onClick:()=>void fo(),type:`button`,children:[(0,C.jsx)(_,{size:13}),l(`add`)]})})]}),nr&&(0,C.jsx)(j,{children:(0,C.jsx)(L,{children:nr})}),Cn.length===0&&(0,C.jsx)(j,{children:(0,C.jsx)(I,{children:l(`no_tags_yet_add_one_below_it_is_available_in_every_folder`)})}),Cn.map(e=>(0,C.jsx)(j,{children:Rn?.name===e.name?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(M,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(zr,{"aria-label":l(`color_of_tag`,{tag:e.name}),onChange:t=>void po(e.name,t.target.value),title:l(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,C.jsx)(Br,{autoFocus:!0,disabled:O,onChange:t=>Hn({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),ho()):e.key===`Escape`&&(e.preventDefault(),Hn(null))},value:Rn.value})]}),(0,C.jsx)(I,{children:l(`press_enter_to_save_escape_to_cancel`)})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(z,{disabled:O,onClick:()=>void ho(),type:`button`,children:[(0,C.jsx)(v,{size:13}),l(`save`)]}),(0,C.jsxs)(z,{disabled:O,onClick:()=>Hn(null),type:`button`,children:[(0,C.jsx)(x,{size:13}),l(`cancel`)]})]})]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(M,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(zr,{"aria-label":l(`color_of_tag`,{tag:e.name}),onChange:t=>void po(e.name,t.target.value),title:l(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,C.jsx)(P,{children:e.name})]}),(0,C.jsx)(I,{children:te(l,e.folders,`used_in_1_folder_renaming_or_removing_it_updates_that_folder_s_index`,`used_in_count_folders_renaming_or_removing_it_updates_those_folders_indexes`)})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(z,{disabled:O,onClick:()=>Hn({name:e.name,value:e.name}),type:`button`,children:[(0,C.jsx)(Ut,{size:13}),l(`edit`)]}),(0,C.jsxs)(Ur,{disabled:O,onClick:()=>void mo(e.name),type:`button`,children:[(0,C.jsx)(Gt,{size:13}),l(`remove`)]})]})]})},e.name))]})]}),(0,C.jsxs)(D,{ref:X(`files-view`),children:[(0,C.jsx)(E,{note:`the_defaults_every_folder_starts_with_a_folder_can_still_override_them`,title:`files_view`,global:!0,onReset:()=>q({id:`files-view`,label:`files_view`})}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`default_view`)}),(0,C.jsx)(I,{children:l(`the_mode_every_folder_starts_with_a_folder_can_still_remember_its_own_list_or_grid_mode_from_the_title_bar`)})]}),(0,C.jsx)(N,{children:(0,C.jsxs)(Zr,{children:[(0,C.jsx)(Qr,{$on:J.mode===`list`,onClick:()=>void Z({defaultView:{...J,mode:`list`}}),type:`button`,children:l(`list`)}),(0,C.jsx)(Qr,{$on:J.mode===`grid`,onClick:()=>void Z({defaultView:{...J,mode:`grid`}}),type:`button`,children:l(`grid`)})]})})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`list_icon_size`)}),(0,C.jsx)(I,{children:l(`the_icon_in_the_list_rows`)})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(H,{max:48,min:16,onChange:e=>void Z({defaultView:{...J,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:J.iconSize}),(0,C.jsxs)(R,{children:[J.iconSize,`px`]})]})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`grid_size`)}),(0,C.jsx)(I,{children:l(`the_height_of_a_grid_tile_the_icon_inside_follows_it`)})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(H,{max:260,min:100,onChange:e=>void Z({defaultView:{...J,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:J.gridSize}),(0,C.jsxs)(R,{children:[J.gridSize,`px`]})]})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(P,{children:l(`selection_checkboxes`)}),(0,C.jsx)(m,{})]}),(0,C.jsx)(I,{children:l(`show_a_checkbox_before_every_name_the_way_explorer_does_checked_entries_can_be_copied_cut_or_deleted_together`)})]}),(0,C.jsx)(B,{$on:p?.showCheckboxes??!0,disabled:!p,onClick:()=>void Z({showCheckboxes:!(p?.showCheckboxes??!0)}),type:`button`,children:(0,C.jsx)(V,{})})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(P,{children:l(`open_with_a_single_click`)}),(0,C.jsx)(m,{})]}),(0,C.jsx)(I,{children:l(`off_means_double_click_like_explorer_s_default_the_checkbox_still_only_selects_so_a_click_on_it_never_opens_the_entry`)})]}),(0,C.jsx)(B,{$on:p?.openOnSingleClick??!1,disabled:!p,onClick:()=>void Z({openOnSingleClick:!(p?.openOnSingleClick??!1)}),type:`button`,children:(0,C.jsx)(V,{})})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(P,{children:l(`open_the_file_tray_while_dragging`)}),(0,C.jsx)(m,{})]}),(0,C.jsx)(I,{children:l(`the_tray_appears_when_a_drag_starts_and_closes_again_if_it_is_still_empty_off_leaves_it_to_the_title_bar_button`)})]}),(0,C.jsx)(B,{$on:p?.trayAutoShow??!0,disabled:!p,onClick:()=>void Z({trayAutoShow:!(p?.trayAutoShow??!0)}),type:`button`,children:(0,C.jsx)(V,{})})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(P,{children:l(`confirm_before_deleting`)}),(0,C.jsx)(m,{})]}),(0,C.jsx)(I,{children:l(`asks_before_moving_items_to_the_recycle_bin_shift_del_always_asks_because_that_deletes_permanently`)})]}),(0,C.jsx)(B,{$on:p?.confirmDelete??!1,disabled:!p,onClick:()=>void Z({confirmDelete:!(p?.confirmDelete??!1)}),type:`button`,children:(0,C.jsx)(V,{})})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(P,{children:l(`automatic_rename_suffix`)}),(0,C.jsx)(m,{})]}),(0,C.jsx)(I,{children:l(`the_suffix_added_when_a_copy_or_a_new_item_would_have_the_same_name`)})]}),(0,C.jsx)(N,{children:(0,C.jsx)(yt,{disabled:!p,onChange:e=>void Z({conflictNameStyle:e}),options:[{value:`space_parentheses`,label:`Test (1).txt`},{value:`underscore`,label:`Test_1.txt`},{value:`dot`,label:`Test.1.txt`}],value:p?.conflictNameStyle??`space_parentheses`,width:160})})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(P,{children:l(`play_audio_in_video_previews`)}),(0,C.jsx)(m,{})]}),(0,C.jsx)(I,{children:l(`video_previews_play_muted_by_default_turn_this_on_to_hear_their_audio_while_the_details_panel_is_open`)})]}),(0,C.jsx)(B,{$on:p?.previewVideoAudio??!1,disabled:!p,onClick:()=>void Z({previewVideoAudio:!(p?.previewVideoAudio??!1)}),type:`button`,children:(0,C.jsx)(V,{})})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(P,{children:l(`autoplay_video_previews`)}),(0,C.jsx)(m,{})]}),(0,C.jsx)(I,{children:l(`off_by_default_turn_this_on_to_start_a_video_as_soon_as_its_details_panel_opens_the_play_button_still_works_when_it_is_off`)})]}),(0,C.jsx)(B,{$on:p?.previewVideoAutoplay??!1,disabled:!p,onClick:()=>void Z({previewVideoAutoplay:!(p?.previewVideoAutoplay??!1)}),type:`button`,children:(0,C.jsx)(V,{})})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(P,{children:l(`preview_panel_under_the_list`)}),(0,C.jsx)(m,{})]}),(0,C.jsx)(I,{children:l(`shows_the_pictures_videos_and_documents_the_shell_can_preview_as_grid_tiles_below_the_list_the_tiles_follow_the_grid_size_and_the_panel_only_appears_in_list_mode`)})]}),(0,C.jsx)(B,{$on:J.showImages??!0,onClick:()=>void Z({defaultView:{...J,showImages:!(J.showImages??!0)}}),type:`button`,children:(0,C.jsx)(V,{})})]}),(0,C.jsx)(j,{children:(0,C.jsxs)(M,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(P,{children:l(`columns`)}),(0,C.jsx)(m,{})]}),(0,C.jsx)(I,{children:l(`shown_in_every_folder_changing_them_changes_all_folders_at_once`)})]})}),(0,C.jsx)(j,{children:(0,C.jsxs)(bi,{children:[mt.map(e=>(0,C.jsxs)(xi,{children:[(0,C.jsx)(`input`,{checked:(J.columns??[]).includes(e.id),onChange:()=>void go(e.id),type:`checkbox`}),(0,C.jsx)(`span`,{children:l(e.label)})]},e.id)),(0,C.jsxs)(xi,{children:[(0,C.jsx)(`input`,{checked:(J.columns??[]).includes(`linkTarget`),onChange:()=>void go(`linkTarget`),type:`checkbox`}),(0,C.jsx)(`span`,{children:l(`link_target_after_the_name`)})]})]})})]}),(0,C.jsxs)(Mi,{children:[l(`the_default_view_list_icon_size_and_grid_size_are_only_defaults_a_folder_can_still_remember_its_own_from_the_title_bar`),` `,(0,C.jsx)(m,{}),` `,l(`anything_marked_as_global_always_applies_to_every_folder`)]})]}),(0,C.jsxs)(D,{ref:X(`shortcuts`),children:[(0,C.jsx)(E,{note:`every_action_can_hold_several_combinations_click_one_to_record_it_again_add_one_with_the_plus_and_drop_one_with_the_cross`,title:`shortcuts`,onReset:()=>q({id:`shortcuts`,label:`shortcuts`})}),(0,C.jsxs)(k,{children:[_n.map(({id:e,label:t,note:n})=>{let r=wo(e),i=w?.action===e,a=Eo(e);return(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(t)}),(0,C.jsx)(I,{children:l(n)}),a.length>0&&(0,C.jsx)(Oi,{children:l(`also_in_use_by_actions_pressing_it_runs_each_of_them`,{actions:a.join(`, `)})})]}),(0,C.jsx)(N,{children:(0,C.jsxs)(Si,{children:[r.map((t,n)=>(0,C.jsxs)(Ci,{$conflict:(To.get(t)?.length??0)>1,$listening:i&&w.index===n,children:[(0,C.jsx)(wi,{onClick:()=>un({action:e,index:n}),title:l(`click_to_record_this_shortcut_again`),type:`button`,children:i&&w.index===n?dn.length>0?`${st(dn)} + …`:l(`press_a_key`):st(t)}),(0,C.jsx)(Ti,{onClick:()=>Oo(e,n),title:l(`remove`),type:`button`,children:(0,C.jsx)(x,{size:9})})]},t+`-`+n)),r.length===0&&(0,C.jsx)(Ei,{children:l(`none`)}),(0,C.jsx)(Di,{$listening:i&&w.index<0,onClick:()=>un({action:e,index:-1}),title:l(`add`),type:`button`,children:i&&w.index<0?dn.length>0?`${st(dn)} + …`:l(`press_a_key`):(0,C.jsx)(_,{size:11})})]})})]},e)}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`reset`)}),(0,C.jsx)(I,{children:l(`back_to_the_default_combination_for_every_action`)})]}),(0,C.jsx)(N,{children:(0,C.jsxs)(U,{onClick:()=>void Z({shortcuts:pt(nt),globalHotkey:null}),type:`button`,children:[(0,C.jsx)(b,{size:13}),l(`reset`)]})})]})]})]}),(0,C.jsxs)(D,{ref:X(`memory`),children:[(0,C.jsx)(E,{note:`what_the_process_holds_and_how_to_give_it_back`,title:`memory`}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(Cr,{children:[(0,C.jsxs)(wr,{children:[(0,C.jsx)(P,{children:l(`process_memory`)}),(0,C.jsx)(R,{children:g?`${d(g.private)} · ${lr(g.private,g.available)}`:`—`})]}),(0,C.jsx)(Tr,{children:(0,C.jsx)(Er,{$ratio:g?g.private/Math.max(g.available,1):0,$tone:ee(g?g.private/Math.max(g.available,1):0)})}),(0,C.jsx)(I,{children:g?l(`committed_of_available_the_runtime_can_use_resident_is_resident_the_webview_runs_in_its_own_process`,{available:d(g.available),resident:d(g.workingSet)}):l(`reading_the_current_usage`)})]}),(0,C.jsxs)(Cr,{children:[(0,C.jsxs)(wr,{children:[(0,C.jsx)(P,{children:l(`managed_heap`)}),(0,C.jsx)(R,{children:g?`${d(g.managed)} · ${lr(g.managed,g.private)}`:`—`})]}),(0,C.jsx)(Tr,{children:(0,C.jsx)(Er,{$ratio:g?g.managed/Math.max(g.private,1):0,$tone:`var(--accent-secondary)`})}),(0,C.jsx)(I,{children:l(`share_of_this_process_that_the_net_heap_holds_thumbnails_and_folder_size_walks_live_here_the_runtime_grows_it_on_demand_and_gives_it_back_after_a_collection`)})]}),(0,C.jsxs)(Cr,{children:[(0,C.jsxs)(wr,{children:[(0,C.jsx)(P,{children:l(`native_and_runtime`)}),(0,C.jsx)(R,{children:g?`${d(Math.max(0,g.private-g.managed))} · ${lr(Math.max(0,g.private-g.managed),g.private)}`:`—`})]}),(0,C.jsx)(Tr,{children:(0,C.jsx)(Er,{$ratio:g?Math.max(0,g.private-g.managed)/Math.max(g.private,1):0,$tone:`var(--accent-primary)`})}),(0,C.jsx)(I,{children:l(`the_runtime_loaded_libraries_and_the_rust_helper_share_this_part_rust_runs_inside_the_process_so_it_has_no_separate_figure`)})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`free_memory`)}),(0,C.jsx)(I,{children:l(`compacts_the_heap_and_returns_unused_pages_to_the_system_always_safe`)})]}),(0,C.jsx)(N,{children:(0,C.jsxs)(U,{onClick:()=>void Ne().then(Nt),type:`button`,children:[(0,C.jsx)(At,{size:13}),l(`trim_now`)]})})]})]})]}),(0,C.jsxs)(D,{ref:X(`overview`),children:[(0,C.jsx)(E,{note:`the_home_tab_s_history_and_how_much_of_it_it_shows`,title:`overview`,onReset:()=>q({id:`overview`,label:`overview`})}),(0,C.jsx)(k,{children:(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`recent_items`)}),(0,C.jsx)(I,{children:l(`how_many_recently_opened_folders_the_overview_lists_0_hides_the_section`)})]}),(0,C.jsx)(N,{children:(0,C.jsx)(Gr,{max:50,min:0,onChange:e=>void ko(Number(e.target.value)),type:`number`,value:p?.recentLimit??10})})]})})]}),(0,C.jsxs)(D,{ref:X(`gallery`),children:[(0,C.jsx)(E,{note:`the_folders_the_gallery_scans_for_pictures_and_videos`,title:`gallery`,onReset:()=>q({id:`gallery`,label:`gallery`})}),(0,C.jsxs)(k,{children:[(p?.galleryRoots??[]).map(e=>(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:ie(e)}),(0,C.jsx)(I,{children:e})]}),(0,C.jsx)(N,{children:(0,C.jsx)(ki,{onClick:()=>void zo((p?.galleryRoots??[]).filter(t=>t!==e)),title:l(`stop_scanning_this_folder`),type:`button`,children:(0,C.jsx)(x,{size:12})})})]},e)),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`scan_folders`)}),(0,C.jsx)(I,{children:(p?.galleryRoots??[]).length===0?l(`nothing_added_yet_so_the_gallery_reads_the_pictures_folder`):l(`only_these_folders_are_scanned_three_levels_deep`)})]}),(0,C.jsx)(N,{children:(0,C.jsxs)(U,{onClick:()=>void Bo(),type:`button`,children:[(0,C.jsx)(wt,{size:13}),l(`choose_folder`)]})})]})]})]}),(0,C.jsxs)(D,{ref:X(`icons`),children:[(0,C.jsx)(E,{note:`where_the_shell_s_own_icons_and_the_built_in_glyphs_come_from`,title:`icons`,onReset:()=>q({id:`icons`,label:`icons`})}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`use_system_file_icons`)}),(0,C.jsx)(I,{children:l(`ask_the_shell_for_the_icon_of_each_file_type_instead_of_the_built_in_glyphs`)})]}),(0,C.jsx)(B,{$on:p?.systemIcons??!1,disabled:!p,onClick:()=>void Z({systemIcons:!p?.systemIcons}),type:`button`,children:(0,C.jsx)(V,{})})]}),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`use_custom_folder_icons`)}),(0,C.jsx)(I,{children:l(`folders_that_define_an_icon_desktop_ini_keep_showing_it_even_when_system_icons_are_off`)})]}),(0,C.jsx)(B,{$on:p?.customFolderIcons??!1,disabled:!p,onClick:()=>void Z({customFolderIcons:!p?.customFolderIcons}),type:`button`,children:(0,C.jsx)(V,{})})]})]})]}),(0,C.jsxs)(D,{ref:X(`extension-icons`),children:[(0,C.jsx)(E,{note:`a_custom_glyph_for_one_file_extension`,title:`icons_by_extension`,onReset:()=>q({id:`extension-icons`,label:`icons_by_extension`})}),(0,C.jsxs)(k,{children:[Object.entries(p?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:e}),(0,C.jsx)(I,{children:Nn(l,t)})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(Pn,{source:t}),(0,C.jsx)(ki,{onClick:()=>void So(e,null),title:l(`remove_this_rule`),type:`button`,children:(0,C.jsx)(x,{size:12})})]})]},e)),(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`add_a_rule`)}),(0,C.jsx)(I,{children:l(`extension_and_the_icon_to_draw_for_it`)})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(Gr,{onChange:e=>vt(e.target.value),placeholder:`.psd`,spellCheck:!1,value:ct}),(0,C.jsxs)(Xr,{children:[(0,C.jsx)(ki,{onClick:()=>Dt(e=>!e),title:l(`choose_the_icon`),type:`button`,children:(0,C.jsx)(Pn,{source:St})}),Tt&&(0,C.jsx)(qt,{allowDefault:!1,onClose:()=>Dt(!1),onPick:e=>{Ct(e??`file`),Dt(!1)},value:St})]}),(0,C.jsx)(ki,{onClick:()=>void Vo(),title:l(`add_the_rule`),type:`button`,children:(0,C.jsx)(_,{size:13})})]})]})]})]}),(0,C.jsxs)(D,{ref:X(`folder-icons`),children:[(0,C.jsx)(E,{note:`a_single_folder_can_carry_an_icon_of_its_own`,title:`folder_icons`}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`give_a_folder_its_own_icon`)}),(0,C.jsx)(I,{children:l(`stored_in_the_folder_s_parent_index_so_it_stays_with_the_files`,{index:`.yafm-index.db`})})]}),(0,C.jsxs)(N,{children:[tt&&(0,C.jsx)(Fn,{src:tt.icon}),(0,C.jsxs)(U,{disabled:Ot,onClick:()=>void Ho(),type:`button`,children:[(0,C.jsx)(wt,{size:13}),l(Ot?`choosing`:`choose_folder_and_icon`)]})]})]}),tt&&(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:ie(tt.folder)}),(0,C.jsx)(I,{children:tt.folder})]}),(0,C.jsx)(N,{children:(0,C.jsxs)(ji,{children:[(0,C.jsx)(v,{size:11}),` `,l(`saved`)]})})]})]})]}),(0,C.jsxs)(D,{ref:X(`folder-index`),children:[(0,C.jsx)(E,{note:`the_hidden_cache_that_makes_a_folder_open_instantly_next_time`,title:`folder_index`,onReset:()=>q({id:`folder-index`,label:`folder_index`})}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`keep_a_index_in_every_folder`,{index:`.yafm-index.db`})}),(0,C.jsx)(I,{children:l(`holds_icons_cached_folder_sizes_and_the_folder_s_last_listing_so_it_opens_instantly_next_time_hidden_and_marked_as_a_system_file_on_windows_skipped_where_the_folder_is_read_only`)})]}),(0,C.jsx)(B,{$on:p?.writeDirectoryIndex??!0,disabled:!p,onClick:()=>void Z({writeDirectoryIndex:!p?.writeDirectoryIndex}),type:`button`,children:(0,C.jsx)(V,{})})]}),(0,C.jsxs)(Wn,{children:[(0,C.jsxs)(Gn,{children:[(0,C.jsx)(P,{children:l(`directory_index_blacklist`)}),(0,C.jsx)(I,{children:l(`rules_are_full_path_globs_matches_within_one_path_segment_and_crosses_folders_matching_folders_use_the_central_database_instead_of_creating_yafm_index_db_files`)})]}),(0,C.jsx)(li,{children:(p?.directoryIndexBlacklist??[]).map(e=>(0,C.jsxs)(ui,{children:[(0,C.jsx)(di,{"aria-label":l(`directory_index_blacklist_rule`),onBlur:Ja,onChange:t=>Pr({from:e,value:t.target.value}),onFocus:()=>Pr({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Ja()):e.key===`Escape`&&Pr(null)},spellCheck:!1,value:Nr?.from===e?Nr.value:e}),(0,C.jsx)(fi,{onClick:()=>Za(e),title:l(`remove`),type:`button`,children:(0,C.jsx)(x,{size:10})})]},e))}),(0,C.jsxs)(mi,{children:[(0,C.jsx)(hi,{"aria-label":l(`directory_index_blacklist_rule`),onChange:e=>Jr(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ya())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:qr}),(0,C.jsxs)(z,{onClick:Ya,type:`button`,children:[(0,C.jsx)(_,{size:13}),l(`add_the_rule`)]})]}),(0,C.jsxs)(pi,{children:[(0,C.jsxs)(z,{onClick:Qa,type:`button`,children:[(0,C.jsx)(b,{size:13}),l(`restore_defaults`)]}),(0,C.jsxs)(z,{onClick:()=>void Xa(),type:`button`,children:[(0,C.jsx)(wt,{size:13}),l(`add_folder_2`)]})]})]})]}),!(p?.writeDirectoryIndex??!0)&&(0,C.jsx)(Ni,{children:Mn(l,e?.platform)})]}),(0,C.jsxs)(D,{ref:X(`indexing`),children:[(0,C.jsx)(E,{note:`background_folder_size_and_item_count_walks`,title:`index_tasks`}),(0,C.jsx)(jn,{})]}),(0,C.jsxs)(D,{ref:X(`files`),children:[(0,C.jsx)(E,{note:`what_the_listings_include`,title:`files`}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(j,{children:[(0,C.jsxs)(M,{children:[(0,C.jsx)(P,{children:l(`show_hidden_files`)}),(0,C.jsxs)(I,{children:[l(`toggles_ordinary_hidden_files_for_this_session_alt_also_works_system_files_still_follow_explorer`),f?.overridden&&(0,C.jsx)(Rr,{disabled:ge,onClick:()=>void vo(null),type:`button`,children:l(`follow_system`)})]})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(Wr,{$on:f?.showHidden??!1,children:f?.overridden?An(l,f.showHidden):l(`follow_system`)}),(0,C.jsx)(B,{$on:f?.showHidden??!1,disabled:!f||ge,onClick:()=>void vo(!(f?.showHidden??!1)),title:l(`show_hidden_files`),type:`button`,children:(0,C.jsx)(V,{})})]})]}),(0,C.jsxs)(j,{children:[(0,C.jsx)(P,{children:l(`protected_operating_system_files`)}),(0,C.jsx)(R,{children:An(l,f?.showSystem)})]})]}),(0,C.jsx)(Mi,{children:l(`hidden_items_follow_this_app_s_switch_protected_operating_system_files_still_follow_windows`)})]}),(0,C.jsxs)(rr,{onClick:()=>hn(!0),type:`button`,children:[(0,C.jsx)(kt,{size:13}),l(`open_source_attribution`)]})]}),(0,C.jsxs)(ir,{"aria-label":l(`settings_sections`),onWheel:Ma,ref:Ea,children:[(0,C.jsx)(ar,{children:l(`sections`)}),(0,C.jsx)(or,{children:T.map(({id:e,label:t})=>(0,C.jsxs)(sr,{$active:qi===e,"data-section":e,onClick:()=>Aa(e),type:`button`,children:[(0,C.jsx)(Un,{children:wn[t]}),(0,C.jsx)(`span`,{children:l(t)})]},e))}),(0,C.jsx)(cr,{children:l(`changes_are_saved_as_you_make_them`)})]}),pn&&(0,C.jsx)(S.Suspense,{fallback:null,children:(0,C.jsx)(mn,{onClose:()=>hn(!1)})}),Ui&&(0,C.jsx)(he,{confirmLabel:l(`restore_defaults`),message:l(`restore_section_to_its_defaults`,{section:l(Ui.label)}),onCancel:()=>q(null),onConfirm:()=>{let e=Ui;q(null),Na(e.id)},open:!0,title:l(`restore_defaults`)}),K&&(0,Jt.createPortal)((0,C.jsx)(fr,{children:(0,C.jsxs)(pr,{"aria-modal":`true`,role:`dialog`,children:[(0,C.jsxs)(mr,{children:[(0,C.jsx)(`h2`,{children:l(`software_update`)}),(0,C.jsx)(`p`,{children:G?.latest?l(`version_version`,{version:G.latest}):l(`preparing_the_update`)})]}),(0,C.jsx)(hr,{children:l(`changelog`)}),K.changelog?(0,C.jsx)(gr,{onClick:vr,children:(0,C.jsx)(s,{source:K.changelog})}):(0,C.jsx)(_r,{children:K.phase===`changelog`?l(`loading_the_changelog`):l(`the_changelog_could_not_be_loaded`)}),(0,C.jsxs)(yr,{children:[(0,C.jsx)(`span`,{children:ur(K,l)}),(0,C.jsx)(`span`,{children:dr(K)})]}),(0,C.jsx)(br,{children:(0,C.jsx)(xr,{$percent:Math.max(0,Math.min(100,K.percent))})}),K.error&&(0,C.jsx)(L,{children:K.error}),(0,C.jsxs)(Sr,{children:[(K.phase===`changelog`||K.phase===`downloading`)&&(0,C.jsxs)(U,{onClick:()=>void oo(),type:`button`,children:[(0,C.jsx)(x,{size:13}),l(`cancel`)]}),K.phase===`ready`&&(0,C.jsxs)(U,{onClick:()=>void so(),type:`button`,children:[(0,C.jsx)(It,{size:13}),l(`install_update`)]}),K.phase===`installing`&&(0,C.jsxs)(U,{disabled:!0,type:`button`,children:[(0,C.jsx)(b,{size:13}),l(`installing`)]}),(K.phase===`ready`||K.phase===`error`||K.phase===`cancelled`||K.phase===`installing`)&&(0,C.jsxs)(U,{onClick:()=>Hi(null),type:`button`,children:[(0,C.jsx)(x,{size:13}),l(`close`)]})]})]})}),document.body)]})}function kn({approvalMinutes:e,denialSeconds:t}){let n=c(),[r,i]=(0,S.useState)([]),[o,s]=(0,S.useState)(!1),[l,ee]=(0,S.useState)(()=>Date.now());(0,S.useEffect)(()=>{let e=window.setInterval(()=>ee(Date.now()),1e3);return()=>window.clearInterval(e)},[]),(0,S.useEffect)(()=>{let e=()=>void ct().then(i,()=>i([]));if(e(),a.available)return a.on(t=>{t.type===`share.devices.changed`&&e()})},[]),(0,S.useEffect)(()=>{r.some(e=>e.expiresAt>0&&e.expiresAt<=l)&&ct().then(i,()=>void 0)},[l,r]);let te=e=>{let t=Math.max(0,Math.ceil((e-l)/1e3)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60,a=e=>String(e).padStart(2,`0`);return n>0?`${n}:${a(r)}:${a(i)}`:`${r}:${a(i)}`},ne=async(e,t,n)=>{s(!0);try{i(await Qe(e,t,n))}finally{s(!1)}},re=async()=>{if(window.confirm(n(`share_access_clear_devices_confirm`))){s(!0);try{i(await it())}finally{s(!1)}}},ie=async e=>{s(!0);try{i(await vt(e))}finally{s(!1)}},ae=e=>e.state===`allowed`?e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_allowed`)} · ${n(`share_access_expired`)}`:n(`share_access_allowed`):e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_denied`)} · ${n(`share_access_expired`)}`:n(`share_access_denied`),u=r.filter(e=>e.state===`allowed`||e.state===`denied`),d=e=>e.expiresAt===0?void 0:new Date(e.expiresAt).toLocaleString();return(0,C.jsxs)(Dr,{children:[u.length>0&&(0,C.jsxs)(kr,{children:[(0,C.jsxs)(Fr,{children:[n(`devices`),` · `,u.length]}),(0,C.jsx)(Mr,{disabled:o,onClick:()=>void re(),title:n(`share_access_clear_devices`),type:`button`,children:(0,C.jsx)(Gt,{size:13})})]}),u.length===0&&(0,C.jsx)(Or,{children:n(`share_access_no_devices`)}),u.map(r=>(0,C.jsxs)(Ar,{children:[(0,C.jsxs)(Nr,{children:[(0,C.jsx)(Pr,{children:r.name||r.address||r.id}),(0,C.jsxs)(Fr,{children:[r.address,r.address?` · `:``,n(`share_access_last_seen`),`: `,new Date(r.lastSeen).toLocaleString()]}),(0,C.jsxs)(Fr,{title:d(r),children:[ae(r),` · `,r.expiresAt===0?n(`share_access_forever`):n(`share_access_expires_in`,{time:te(r.expiresAt)})]})]}),(0,C.jsxs)(jr,{children:[(0,C.jsx)(yt,{disabled:o,onChange:e=>{let[t,n]=e.split(`:`);ne(r.id,t,n===`forever`)},options:[{value:`allowed:timed`,label:n(`share_access_allowed_for_minutes`,{minutes:e})},{value:`allowed:forever`,label:n(`share_access_allow_forever`)},{value:`denied:timed`,label:n(`share_access_denied_for_seconds`,{seconds:t})},{value:`denied:forever`,label:n(`share_access_block_forever`)}],value:r.state===`allowed`?r.expiresAt===0?`allowed:forever`:`allowed:timed`:r.expiresAt===0?`denied:forever`:`denied:timed`,width:190}),(0,C.jsx)(Mr,{disabled:o,onClick:()=>void ie(r.id),title:n(`remove`),type:`button`,children:(0,C.jsx)(Gt,{size:13})})]})]},r.id))]})}function An(e,t){return e(t===void 0?`reading`:t?`shown`:`hidden`)}function jn(){let e=c(),[t,n]=(0,S.useState)(null);return(0,S.useEffect)(()=>{let e=!0,t=()=>ue().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,C.jsx)(Ni,{children:e(`no_indexing_tasks_are_running`)}):(0,C.jsxs)(k,{children:[(0,C.jsx)(j,{children:(0,C.jsx)(P,{children:e(`count_indexing_tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,C.jsx)(j,{children:(0,C.jsx)(R,{title:e,children:e})},e))]}):(0,C.jsx)(Ni,{children:e(`index_task_information_is_unavailable`)})}function Mn(e,t){return e(`indexes_are_off_every_folder_s_icons_sizes_and_cached_listing_now_live_in_one_database_in_place_so_that_drive_grows_with_every_folder_you_open_that_is_the_cost_of_keeping_folders_free_of_extra_files`,{place:e(t===`windows`?`appdata_which_sits_on_the_system_drive_usually_c`:t===`linux`?`your_home_folder_which_often_shares_a_partition_with_the_system`:`the_app_s_settings_folder_which_usually_sits_on_the_system_drive`)})}function Nn(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built_in_source`,{source:t})}function Pn({source:e}){let t=me(e.startsWith(`file:`)?e.slice(5):null);return(0,C.jsx)(Ai,{children:t?(0,C.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,C.jsx)(tt,{name:e,size:16})})}function Fn({src:e}){let t=me(e);return(0,C.jsx)(Ai,{children:t&&(0,C.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function In({path:e,active:t,onSelect:n,onRemove:r}){let i=c(),a=ce(e),o=ge(a?null:e),s=a?e:o,l=p(e.split(/[?#]/)[0]);return(0,C.jsxs)(ii,{children:[(0,C.jsxs)(ri,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(l?(0,C.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,C.jsx)(`img`,{alt:``,src:s})),l&&(0,C.jsx)(oi,{children:(0,C.jsx)(Mt,{size:11})})]}),(0,C.jsx)(ai,{onClick:r,title:i(`remove`),type:`button`,children:(0,C.jsx)(x,{size:9})})]})}function Ln({value:e,options:t,onChange:n,disabled:r}){let i=c(),[a,o]=(0,S.useState)(null),s=(0,S.useRef)(null);return(0,S.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(Kr,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,C.jsx)(`span`,{children:Rn(i,e)}),(0,C.jsx)(qr,{children:(0,C.jsx)(Pt,{size:11})})]}),a&&(0,Jt.createPortal)((0,C.jsx)(Jr,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,C.jsxs)(Yr,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,C.jsx)(`span`,{children:Rn(i,t)}),t===e&&(0,C.jsx)(v,{size:11})]},t))}),document.body)]})}function Rn(e,t){return t===Sn?e(`system_default`):Cn[t]??t}function zn({colors:e,current:t,onApply:n}){let r=c();if(e.length===0)return null;let[i,...a]=e;return(0,C.jsxs)(tr,{children:[(0,C.jsxs)(A,{$color:i,onClick:()=>n(i),title:r(`previous_colour_colour`,{colour:i}),type:`button`,children:[(0,C.jsx)(`i`,{}),r(`previous`)]}),a.map(e=>(0,C.jsx)(nr,{$color:e,onClick:()=>n(e),title:r(`use_colour`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,C.jsx)(v,{size:9})},e))]})}function E({title:e,note:t,global:n=!1,onReset:r}){let i=c();return(0,C.jsxs)(Hn,{children:[(0,C.jsxs)(`h2`,{children:[(0,C.jsx)(Un,{children:wn[e]}),i(e),n&&(0,C.jsx)(m,{})]}),(0,C.jsx)(`p`,{children:i(t)}),r&&(0,C.jsxs)(O,{onClick:r,title:i(`restore_defaults`),type:`button`,children:[(0,C.jsx)(b,{size:11}),i(`restore_defaults`)]})]})}var Bn=t.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,Vn=t.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,D=t.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,Hn=t.header`
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
`,O=t.button`
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
`,Un=t.i`
    display: grid;
    place-items: center;
    width: 13px;
    height: 13px;
    flex-shrink: 0;
    color: var(--accent-primary);
    opacity: 0.85;
`,k=t.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,Wn=t.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Gn=t.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Kn=t.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,qn=t.button`
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
`,Jn=t.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Yn=t.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,Xn=t.button`
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
`,Zn=t.button`
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
`,Qn=t.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,$n=t.input`
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
`,er=t.span`
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
`,tr=t.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,nr=t.button`
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
`,A=t.button`
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
`,rr=t.button`
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
`,ir=t.nav`
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
`,ar=t.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,or=t.div`
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
`,sr=t.button`
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
`,cr=t.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function lr(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}function ur(e,t){switch(e.phase){case`changelog`:return t(`preparing_the_update`);case`downloading`:return t(`downloading_the_update`);case`ready`:return t(`download_complete`);case`cancelled`:return t(`update_cancelled`);case`error`:return t(`the_update_failed`);case`installing`:return t(`installing`);default:return``}}function dr(e){return e.total>0?`${d(e.downloaded)} / ${d(e.total)}`:e.downloaded>0?d(e.downloaded):``}var fr=t.div`
    position: fixed;
    inset: 0;
    z-index: 9500;
    display: grid;
    place-items: center;
    padding: 32px;
    background: rgba(2, 6, 23, 0.55);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
`,pr=t.div`
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
`,mr=t.div`
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
`,hr=t.span`
    margin-top: 4px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,gr=t.div`
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
`,_r=t.p`
    margin: 0;
    font-size: 11px;
    color: var(--text-muted);
`;function vr(e){let t=e.target?.closest(`a`);t&&(e.preventDefault(),Ie(t.href))}var yr=t.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    font-size: 11px;
    color: var(--text-muted);
`,br=t.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.22);
`,xr=t.div`
    width: ${({$percent:e})=>`${e}%`};
    height: 100%;
    border-radius: 3px;
    background: var(--accent-gradient);
    transition: width 160ms ease;
`,Sr=t.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,Cr=t.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,wr=t.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,Tr=t.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Er=t.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,Dr=t.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
`,Or=t.div`
    padding: 8px 2px;
    color: var(--text-muted);
    font-size: 11px;
`,kr=t.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2px;
`,Ar=t.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,jr=t.div`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,Mr=t.button`
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
`,Nr=t.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Pr=t.span`
    color: var(--text-primary);
    font-size: 12px;
`,Fr=t.span`
    color: var(--text-muted);
    font-size: 10.5px;
    overflow-wrap: anywhere;
`,Ir=t.input`
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
`,Lr=t.input`
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
`,j=t.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,M=t.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,N=t.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,P=t.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,F=t.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,I=t.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,L=t.span`
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
`,R=t.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,Rr=t.button`
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
`,zr=t.input`
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
`,Br=t.input`
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
`,z=t.button`
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
`,Vr=t.input`
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
`,Hr=t.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,Ur=t.button`
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
`,Wr=t.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,B=t.button`
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
`,V=t.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,Gr=t.input`
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
`,Kr=t.button`
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
`,qr=t.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Jr=t.div`
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
`,Yr=t.button`
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
`,Xr=t.span`
    position: relative;
    display: inline-flex;
`,Zr=t.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Qr=t.button`
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
`,H=t.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,$r=t.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,ei=t.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,ti=t.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ni=t.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,ri=t.button`
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
`,ii=t.div`
    position: relative;
    width: 102px;
    height: 58px;
`,ai=t.button`
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
`,oi=t.span`
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
`,si=t.button`
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
`,ci=t.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,li=t.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,ui=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,di=t.input`
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
`,fi=t.button`
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
`,pi=t.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,mi=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,hi=t.input`
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
`,gi=t.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,_i=t.button`
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
`,vi=t.input`
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
`,yi=t.div`
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
`,bi=t.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,xi=t.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,Si=t.span`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 5px;
`,Ci=t.span`
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    border: 1px solid ${({$conflict:e,$listening:t})=>t?`var(--border-color-focus)`:e?`rgba(251, 191, 36, 0.55)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$listening:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`var(--bg-input)`};
`,wi=t.button`
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
`,Ti=t.button`
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
`,Ei=t.span`
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Di=t.button`
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
`,Oi=t.span`
    font-size: 10px;
    color: #fbbf24;
`,U=t.button`
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
`,ki=t.button`
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
`,Ai=t.span`
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
`,ji=t.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,Mi=t.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,Ni=t.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`;export{On as SettingsView};