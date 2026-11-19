const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AttributionDialog-C-WCSG0M.js","assets/rolldown-runtime-XKyaHtl9.js","assets/dist-sR-t6Emc.js","assets/Icons-NY0trHLk.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{_ as t,d as n,f as r,g as i,h as a,l as o,r as s,t as c,u as l}from"./dist-sR-t6Emc.js";import{D as ee,S as te,T as ne,a as re,b as ie,c as u,d as ae,m as oe,v as se,w as ce,x as le}from"./format-CWgBbA72.js";import{J as ue,M as de,N as d,O as fe,S as pe,V as me,b as he,et as ge,mt as _e,s as ve}from"./selectionMenu-CQPdpP0k.js";import{c as ye,d as be,g as xe,h as Se,l as Ce,m as we,n as Te,o as Ee,p as De,s as Oe,t as ke,u as Ae}from"./concepts-D5cg96U9.js";import{A as je,C as Me,D as Ne,E as Pe,O as Fe,S as Ie,T as Le,_ as Re,a as ze,b as Be,g as Ve,h as He,i as Ue,k as We,m as Ge,p as f,s as p,t as m,v as Ke,w as qe,x as Je,y as Ye}from"./main-Dkmb4fud.js";import{$ as Xe,B as Ze,H as Qe,J as $e,M as et,S as tt,T as nt,U as rt,X as it,a as at,at as ot,b as st,f as ct,it as lt,j as ut,o as dt,r as ft,rt as pt,s as mt,tt as ht,u as gt,w as _t,y as vt}from"./FileList-CYl5phCw.js";import{t as yt}from"./textSearch-DmAzgeJI.js";import{A as bt,B as xt,G as St,H as Ct,J as wt,M as Tt,O as h,P as Et,U as Dt,W as Ot,X as kt,Y as At,_t as jt,b as Mt,d as g,et as Nt,f as Pt,it as _,j as Ft,l as It,lt as Lt,mt as Rt,n as zt,ot as v,p as y,pt as Bt,rt as Vt,st as b,tt as Ht,v as x,w as Ut,yt as Wt}from"./Icons-NY0trHLk.js";import{t as Gt}from"./IconPicker-Dw9ZMd15.js";var S=e(t(),1),Kt=ee();async function qt(){return r.available?(await r.request(`app.tags`)).tags:[]}async function Jt(e){return!r.available||!e?!1:(await r.request(`app.tags.delete`,{name:e})).ok}async function Yt(e,t){return!r.available||!e?[]:(await r.request(`app.tags.create`,{name:e,color:t})).tags}async function Xt(e,t){return!r.available||!e?!1:(await r.request(`app.tags.color`,{name:e,color:t})).ok}async function Zt(e,t){return!r.available||!e||!t?!1:(await r.request(`app.tags.rename`,{oldName:e,newName:t})).ok}var C=n();function Qt({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=l(),[s,c]=(0,S.useState)(null),[ee,te]=(0,S.useState)(``),ne=(0,S.useRef)(null),re=(0,S.useRef)(null),ie=(0,S.useMemo)(()=>{let e=ee.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,ee]);(0,S.useEffect)(()=>{if(!s)return;re.current?.focus();let e=()=>c(null),t=t=>{let n=t.target;n instanceof Node&&ne.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e)}},[s]);let u=()=>{if(s){c(null);return}let e=ne.current?.getBoundingClientRect();if(!e)return;te(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;c({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},ae=e=>{a(e),c(null)};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)($t,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:u,ref:ne,type:`button`,children:[(0,C.jsx)(en,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,C.jsx)(tn,{children:`▾`})]}),s&&(0,Kt.createPortal)((0,C.jsxs)(nn,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,C.jsxs)(rn,{children:[(0,C.jsx)(b,{size:12}),(0,C.jsx)(an,{onChange:e=>te(e.target.value),placeholder:o(`filter_fonts`),ref:re,value:ee})]}),(0,C.jsxs)(on,{children:[(0,C.jsxs)(sn,{$active:!e,"aria-selected":!e,onClick:()=>ae(null),role:`option`,type:`button`,children:[(0,C.jsxs)(cn,{children:[n,` `,(0,C.jsx)(un,{children:o(`default_2`)})]}),!e&&(0,C.jsx)(g,{size:11})]}),ie.map(t=>(0,C.jsxs)(sn,{$active:e===t,"aria-selected":e===t,onClick:()=>ae(t),role:`option`,type:`button`,children:[(0,C.jsxs)(w,{children:[(0,C.jsx)(cn,{children:t}),(0,C.jsx)(ln,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,C.jsx)(g,{size:11})]},t)),ie.length===0&&(0,C.jsx)(dn,{children:o(`no_matching_font`)})]})]}),document.body)]})}var $t=i.button`
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
`,en=i.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,tn=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,nn=i.div`
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
`,rn=i.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,an=i.input`
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
`,on=i.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,sn=i.button`
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
`,w=i.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,cn=i.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ln=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,un=i.span`
    color: var(--text-muted);
    font-size: 10px;
`,dn=i.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,fn=(0,S.lazy)(()=>m(()=>import(`./AttributionDialog-C-WCSG0M.js`).then(e=>({default:e.AttributionDialog})),__vite__mapDeps([0,1,2,3]))),pn=[{id:`goBack`,label:`back`,note:`goes_to_the_previous_folder_in_this_tab`},{id:`goForward`,label:`forward`,note:`goes_to_the_next_folder_in_this_tab`},{id:`goUp`,label:`up_one_level`,note:`opens_the_folder_that_contains_the_current_one`},{id:`home`,label:`home_folder`,note:`jumps_to_the_user_s_home_folder`},{id:`find`,label:`search`,note:`opens_the_floating_search_box_typing_a_letter_in_a_folder_opens_it_too`},{id:`location`,label:`edit_location`,note:`turns_the_breadcrumbs_into_an_editable_path`},{id:`closeTab`,label:`close_tab`,note:`closes_the_tab_that_is_open`},{id:`newTab`,label:`new_tab`,note:`opens_the_overview_in_a_new_tab`},{id:`reopenTab`,label:`reopen_closed_tab`,note:`brings_back_the_tab_you_closed_last_folder_and_all`},{id:`nextTab`,label:`next_tab`,note:`cycles_to_the_next_tab`},{id:`previousTab`,label:`previous_tab`,note:`cycles_to_the_previous_tab`},{id:`copy`,label:`copy`,note:`copies_the_selection_so_it_can_be_pasted_elsewhere`},{id:`duplicate`,label:`duplicate`,note:`makes_a_copy_of_the_selection_in_this_folder_with_a_new_name`},{id:`cut`,label:`cut`,note:`moves_the_selection_on_the_next_paste`},{id:`paste`,label:`paste`,note:`copies_or_moves_the_clipboard_s_files_into_the_current_folder`},{id:`undo`,label:`undo`,note:`undoes_the_last_file_operation_in_this_session`},{id:`redo`,label:`redo`,note:`repeats_the_operation_that_was_just_undone`},{id:`delete`,label:`move_to_the_recycle_bin`,note:`moves_the_selection_to_the_recycle_bin`},{id:`deletePermanently`,label:`delete_permanently`,note:`deletes_the_selection_without_the_recycle_bin`},{id:`rename`,label:`rename`,note:`renames_the_single_selected_entry`},{id:`selectAll`,label:`select_all`,note:`selects_every_entry_in_the_current_folder`},{id:`invertSelection`,label:`invert_selection`,note:`selects_everything_that_is_not_selected`},{id:`open`,label:`open`,note:`opens_the_selected_folder_or_file`},{id:`newFolder`,label:`new_folder`,note:`creates_a_folder_in_the_current_directory`},{id:`properties`,label:`properties`,note:`opens_the_shell_properties_sheet`},{id:`iconsView`,label:`icons_view`,note:`switches_the_folder_to_the_grid_view`},{id:`detailsView`,label:`details_view`,note:`switches_the_folder_to_the_list_view`},{id:`terminal`,label:`open_terminal`,note:`opens_a_terminal_in_the_current_folder`},{id:`hidden`,label:`show_hidden_files`,note:`toggles_ordinary_hidden_files_for_this_session`},{id:`splitView`,label:`split_view`,note:`shows_the_next_file_tab_beside_the_current_one`},{id:`openInNewTab`,label:`open_in_a_new_tab`,note:`hold_this_while_clicking_a_folder`}],mn=`globalHotkey`,hn=[...pn,{id:mn,label:`global_hotkey`,note:`brings_the_window_forward_from_anywhere_while_the_app_is_running_empty_means_no_global_shortcut`}],gn=`en`,_n=[{id:`system`,label:`follow_system`},{id:`light`,label:`light`},{id:`dark`,label:`dark`}],vn=[{id:`system`,label:`system`},{id:`24`,label:`k_24_hour`},{id:`12`,label:`k_12_hour`},{id:`custom`,label:`custom`}],yn=new Date(2026,10,5,16,8).getTime(),bn=`system`,xn={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},T=[{id:`application`,label:`application`},{id:`share-access`,label:`share_access`},{id:`startup`,label:`startup`},{id:`fonts`,label:`fonts`},{id:`time`,label:`time_format`},{id:`updates`,label:`updates`},{id:`colors`,label:`colors`},{id:`background`,label:`background`},{id:`safety`,label:`safety`},{id:`tags`,label:`tags`},{id:`files-view`,label:`files_view`},{id:`shortcuts`,label:`shortcuts`},{id:`memory`,label:`memory`},{id:`overview`,label:`overview`},{id:`gallery`,label:`gallery`},{id:`icons`,label:`icons`},{id:`extension-icons`,label:`icons_by_extension`},{id:`folder-icons`,label:`folder_icons`},{id:`folder-index`,label:`folder_index`},{id:`indexing`,label:`index_tasks`},{id:`files`,label:`files`}],Sn={application:(0,C.jsx)(Et,{size:13}),share_access:(0,C.jsx)(Lt,{size:13}),startup:(0,C.jsx)(Vt,{size:13}),fonts:(0,C.jsx)(Tt,{size:13}),time_format:(0,C.jsx)(y,{size:13}),updates:(0,C.jsx)(v,{size:13}),colors:(0,C.jsx)(kt,{size:13}),background:(0,C.jsx)(Ht,{size:13}),safety:(0,C.jsx)(St,{size:13}),tags:(0,C.jsx)(Rt,{size:13}),files_view:(0,C.jsx)(Ot,{size:13}),shortcuts:(0,C.jsx)(Ct,{size:13}),memory:(0,C.jsx)(Mt,{size:13}),overview:(0,C.jsx)(wt,{size:13}),gallery:(0,C.jsx)(It,{size:13}),icons:(0,C.jsx)(xt,{size:13}),icons_by_extension:(0,C.jsx)(bt,{size:13}),folder_icons:(0,C.jsx)(Ft,{size:13}),folder_index:(0,C.jsx)(At,{size:13}),index_tasks:(0,C.jsx)(Bt,{size:13}),files:(0,C.jsx)(h,{size:13})},Cn=`yafm.colors.recent`;function wn(){let e=he(Cn);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function Tn({appInfo:e,focusSection:t,onSettingsChanged:n,find:r,onSearchMatches:i}){let a=l(),[ee,de]=(0,S.useState)([]),[d,he]=(0,S.useState)(null),[ge,ve]=(0,S.useState)(!1),[f,m]=(0,S.useState)(null),tt=s(ne(f?.themeMode)),[at,ct]=(0,S.useState)(null),[ut,vt]=(0,S.useState)(``),[bt,xt]=(0,S.useState)(`file`),[St,Ct]=(0,S.useState)(!1),[wt,Tt]=(0,S.useState)(!1),[h,Ot]=(0,S.useState)(null),[kt,Mt]=(0,S.useState)(Ge),[Pt,It]=(0,S.useState)(!1),[Lt,Rt]=(0,S.useState)(null),[y,Bt]=(0,S.useState)(null),[b,Ht]=(0,S.useState)(null),[$t,en]=(0,S.useState)(!1),[tn,nn]=(0,S.useState)(null),[rn,an]=(0,S.useState)(!1),[on,sn]=(0,S.useState)(null),[w,cn]=(0,S.useState)(null),[ln,un]=(0,S.useState)(``),[dn,pn]=(0,S.useState)(!1),[xn,Tn]=(0,S.useState)([]),[Fn,zn]=(0,S.useState)(null),[k,A]=(0,S.useState)(!1),[Qn,j]=(0,S.useState)(null),[Cr,wr]=(0,S.useState)(``),[Tr,Er]=(0,S.useState)(et),[M,Dr]=(0,S.useState)(null),[Or,kr]=(0,S.useState)(null),[Br,Vr]=(0,S.useState)(``),[Hr,Ur]=(0,S.useState)(``),[$r,ei]=(0,S.useState)(null),[Ti,ki]=(0,S.useState)(wn),[Ai,ji]=(0,S.useState)({}),[G,Mi]=(0,S.useState)(null),[K,Ni]=(0,S.useState)(null),[Pi,Fi]=(0,S.useState)(!1),[Ii,Li]=(0,S.useState)(null),[q,J]=(0,S.useState)(null),Ri=(0,S.useRef)(!1),[zi,Bi]=(0,S.useState)(null),[Vi,Hi]=(0,S.useState)(T[0].id),[Ui,Wi]=(0,S.useState)([]),[Gi,Ki]=(0,S.useState)(null),[qi,Ji]=(0,S.useState)(``),[Yi,Xi]=(0,S.useState)(!1),[Zi,Qi]=(0,S.useState)(null),[$i,ea]=(0,S.useState)(null),[ta,na]=(0,S.useState)(``),[ra,ia]=(0,S.useState)(null),[aa,oa]=(0,S.useState)(null),[sa,ca]=(0,S.useState)(null),[la,ua]=(0,S.useState)(!1),[da,fa]=(0,S.useState)(``),pa=(0,S.useRef)(null),ma=(0,S.useRef)({}),Y=f?.defaultView??me,ha=f?.themePresets??[],ga=e?.platform===`windows`,_a=ga?y?y.registered&&y.pathMatches:!1:f?.archiveHandler??!1,va=y?.registered??f?.archiveHandler??!1,ya=ga?b?b.registered&&b.pathMatches:!1:f?.defaultFileManager??!1,ba=ga?kt.registered&&kt.pathMatches:f?.linksEnabled??!1;yt(pa,r??null,`section`,i??(()=>void 0),[f]),(0,S.useEffect)(()=>{let e=pa.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){Hi(T[T.length-1].id);return}let n=t+110,r=T[0].id;for(let{id:e}of T){let t=ma.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}Hi(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let X=e=>t=>{ma.current[e]=t},xa=(0,S.useRef)(null),Sa=(0,S.useRef)(null),Ca=(0,S.useRef)(0),wa=()=>{if(Ca.current!==0)return;let e=()=>{let t=pa.current;if(!t||!Sa.current){Ca.current=0;return}let n=Math.min(Sa.current.top,t.scrollHeight-t.clientHeight),r=n-t.scrollTop;if(Math.abs(r)<.5){t.scrollTop=n,Sa.current=null,Ca.current=0;return}let i=Math.min(Math.abs(r)*.2,140);t.scrollTop+=Math.sign(r)*i,Ca.current=requestAnimationFrame(e)};Ca.current=requestAnimationFrame(e)},Ta=e=>{let t=pa.current,n=ma.current[e];t&&n&&(Sa.current={index:T.findIndex(t=>t.id===e),top:t.scrollTop+n.getBoundingClientRect().top-t.getBoundingClientRect().top},Hi(e),wa())};(0,S.useEffect)(()=>{let e=xa.current,t=e?.querySelector(`[data-section="${Vi}"]`);if(!e||!t)return;let n=e.getBoundingClientRect(),r=t.getBoundingClientRect();r.top<n.top?e.scrollTop+=r.top-n.top-6:r.bottom>n.bottom&&(e.scrollTop+=r.bottom-n.bottom+6)},[Vi]),(0,S.useEffect)(()=>{let e=pa.current;if(!e)return;let t=()=>{Sa.current=null};return e.addEventListener(`wheel`,t,{passive:!0}),e.addEventListener(`pointerdown`,t,{passive:!0}),()=>{e.removeEventListener(`wheel`,t),e.removeEventListener(`pointerdown`,t),cancelAnimationFrame(Ca.current)}},[]);let Ea=(0,S.useRef)(0),Da=e=>{let t=Math.sign(e.deltaY);if(t===0)return;let n=e.deltaMode!==0||Math.abs(e.deltaY)>=50,r=performance.now();if(!n&&r<Ea.current)return;Ea.current=r+220;let i=Sa.current?.index??T.findIndex(e=>e.id===Vi),a=Math.min(Math.max((i<0?0:i)+t,0),T.length-1);a!==(i<0?0:i)&&Ta(T[a].id)};(0,S.useEffect)(()=>{t&&Ta(t)},[t]),(0,S.useEffect)(()=>{o().then(e=>de(e.available),()=>de([]))},[]),(0,S.useEffect)(()=>{ze().then(Wi,()=>Wi([]))},[]),(0,S.useEffect)(()=>{Re().then(oa,()=>oa(null))},[]),(0,S.useEffect)(()=>{Me().then(Ni,()=>void 0)},[]),(0,S.useEffect)(()=>{ue().then(he,()=>he(null)),Ae().then(m,()=>m(null)),Ve().then(Mt,()=>Mt(Ge)),Oe().then(Bt,()=>Bt(null)),ye().then(Ht,()=>Ht(null)),qt().then(Tn,()=>Tn([]))},[]),(0,S.useEffect)(()=>{let e=()=>void He().then(Ot,()=>Ot(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let Z=async e=>{if(!f)return;let t={...f,...e};Object.keys(e).every(e=>t[e]===f[e])||(m(t),fe(),m(await De(t)),n())},Oa=async e=>{let t=await Qe(e);if(!t)return;let n=f?.backgroundCustom??[];await Z({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},ka=async()=>{let e=da.trim();if(!f||!oe(e))return;let t=f.backgroundCustom??[];fa(``),await Z({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},Aa=e=>{if(!f)return;let t=f.backgroundSource;Z({backgroundCustom:f.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},ja=async()=>{if(!f)return;let t=await rt();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;f.protectedPaths.includes(r)||await Z({protectedPaths:[...f.protectedPaths,r]})},Ma=()=>{let e=Br.trim();f&&e&&!f.protectedPaths.includes(e)&&(Vr(``),Z({protectedPaths:[...f.protectedPaths,e]}))},Na=()=>{if(!f||!M)return;let e=M.value.trim(),t=M.from;Dr(null),e.length!==0&&e!==t&&Z({protectedPaths:f.protectedPaths.map(n=>n===t?e:n)})},Pa=e=>{f&&Z({protectedPaths:f.protectedPaths.filter(t=>t!==e)})},Fa=async()=>{let e=await Ce();e.length>0&&await Z({protectedPaths:e})},Ia=()=>{if(!f||!Or)return;let e=Or.value.trim(),t=Or.from;kr(null),e&&e!==t&&Z({directoryIndexBlacklist:f.directoryIndexBlacklist.map(n=>n===t?e:n)})},La=()=>{let e=Hr.trim();f&&e&&!f.directoryIndexBlacklist.includes(e)&&(Ur(``),Z({directoryIndexBlacklist:[...f.directoryIndexBlacklist,e]}))},Ra=async()=>{if(!f)return;let t=await rt();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;f.directoryIndexBlacklist.includes(r)||await Z({directoryIndexBlacklist:[...f.directoryIndexBlacklist,r]})},za=e=>{f&&Z({directoryIndexBlacklist:f.directoryIndexBlacklist.filter(t=>t!==e)})},Ba=()=>{Z({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},Va=()=>{if(!f||$r===null)return;let e=$r.trim()||`yyyy/MM/dd HH:mm`;ei(null),e!==f.timeFormatPattern&&Z({timeFormatPattern:e})},Ha=(e,t)=>{ki(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return pe(Cn,i),i})},Q=ce(f?.accentColor,le),$=ce(f?.secondaryColor,te),Ua=(e,t)=>{f&&(Ha(`accent`,Q),Ha(`secondary`,$),Z({accentColor:e,secondaryColor:t}))},Wa=(e,t)=>{f&&(Ha(e,e===`accent`?Q:$),Z(e===`accent`?{accentColor:t}:{secondaryColor:t}))},Ga=async()=>{Fi(!0),Li(null);try{Ni(await Ie())}catch{Li(a(`could_not_check_for_updates`))}finally{Fi(!1)}},Ka=async()=>{Ri.current=!1,Li(null),J({phase:`changelog`,changelog:``,downloaded:0,total:0,percent:0});try{let e=await je();e.ok||qa(e.error??``)}catch(e){qa(e instanceof Error?e.message:String(e))}},qa=e=>J(t=>t&&{...t,phase:`error`,error:e}),Ja=()=>{J(null),Je().catch(e=>Li(e instanceof Error?e.message:String(e)))},Ya=async()=>{J(e=>e&&{...e,phase:`installing`});try{let e=await qe();e.ok||qa(e.error??a(`the_update_failed`))}catch(e){qa(e instanceof Error?e.message:String(e))}};(0,S.useEffect)(()=>Pe(e=>J(t=>t&&{...t,phase:e.phase,downloaded:e.downloaded,total:e.total,percent:e.percent,error:e.error??t.error})),[]),(0,S.useEffect)(()=>Le(e=>J(t=>t&&{...t,changelog:e.text})),[]),(0,S.useEffect)(()=>{q?.phase!==`ready`||Ri.current||(Ri.current=!0,Ya())},[q?.phase]);let Xa=async()=>{if(!f||!G)return;let e=G.name.trim()||`${G.accent.toUpperCase()} / ${G.secondary.toUpperCase()}`,t=[...f.themePresets,{name:e,accent:G.accent,secondary:G.secondary}];Mi(null),await Z({themePresets:t})},Za=async e=>{f&&await Z({themePresets:f.themePresets.filter((t,n)=>n!==e)})},Qa=e=>{let t=zi;Bi(null),t&&t.role===e&&(e===`accent`?Q:$).toLowerCase()!==t.color.toLowerCase()&&Ha(e,t.color)},$a=async()=>{let e=Cr.trim();if(e&&!k){A(!0),j(null);try{Tn(await Yt(e,Tr)),wr(``)}catch{j(a(`could_not_add_the_tag`))}finally{A(!1)}}},eo=async(e,t)=>{Tn(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Xt(e,t)||j(a(`could_not_change_the_tag_s_color`))},to=async e=>{if(k)return;A(!0),j(null);let t=await Jt(e);Tn(await qt()),t||j(`"${e}" is still used by a folder whose index could not be updated.`),A(!1)},no=async()=>{let e=Fn;if(!e||k)return;let t=e.value.trim();t.length===0||t===e.name?zn(null):(A(!0),j(null),await Zt(e.name,t)?(Tn(await qt()),zn(null)):j(`Could not rename "${e.name}".`),A(!1))},ro=async e=>{let t=new Set(Y.columns??me.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=ft.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await Z({defaultView:{...Y,columns:n}})},io=async()=>{if(Pt)return;let e=!ba;It(!0),Rt(null);try{let t=await Ke(e),r=t.registered&&t.pathMatches;Mt(t),m(e=>e&&{...e,linksEnabled:r}),n(),r!==e&&Rt(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{Rt(`The request to Windows failed. Try again.`)}finally{It(!1)}},ao=async e=>{if(!ge){ve(!0);try{he(await _e(e)),n()}finally{ve(!1)}}},oo=async()=>{if(rn||!f)return;let e=!ya;an(!0),sn(null);try{let t=await we(e);Ht(t);let r=ga?t.registered&&t.pathMatches:e;m(e=>e&&{...e,defaultFileManager:r}),n(),ga&&r!==e&&sn(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{sn(`The request to Windows failed. Try again.`)}finally{an(!1)}},so=async()=>{if(!$t){en(!0),nn(null);try{let e=await be();Bt(e);let t=e.registered&&e.pathMatches;m(e=>e&&{...e,archiveHandler:t}),n(),t||nn(`Windows did not accept the archive registration. Try again.`)}catch{nn(`The request to Windows failed. Try again.`)}finally{en(!1)}}},co=async()=>{if(!$t){en(!0),nn(null);try{let e=await xe();Bt(e),m(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&nn(`The registration is still there. Try turning it off again.`)}catch{nn(`The request to Windows failed. Try again.`)}finally{en(!1)}}},lo=async(e,t)=>{if(!f)return;let n={...f.extensionIcons};t===null?delete n[e]:n[e]=t,await Z({extensionIcons:n})};(0,S.useEffect)(()=>{dt().then(Qi,()=>void 0)},[]);let uo=ht(f?.shortcuts),fo=e=>e===mn?pt(f?.globalHotkey):uo[e],po=(0,S.useMemo)(()=>{let e=new Map;for(let{id:t}of hn)for(let n of t===mn?pt(f?.globalHotkey):uo[t]){let r=e.get(n)??[];r.push(t),e.set(n,r)}return e},[uo,f?.globalHotkey]),mo=e=>{let t=new Set;for(let n of fo(e))for(let r of po.get(n)??[]){if(r===e)continue;let n=hn.find(e=>e.id===r);n&&t.add(a(n.label))}return[...t]},ho=(e,t)=>{Z(e===mn?{globalHotkey:t.length>0?lt(t):null}:{shortcuts:{...f?.shortcuts,[e]:lt(t)}})},go=(e,t)=>{let n=[...fo(e)];n.splice(t,1),ho(e,n)};(0,S.useEffect)(()=>{if(!w)return;let e=e=>[`control`,`alt`,`shift`,`meta`].includes(e.toLowerCase()),t=e=>{let t=[...fo(w.action)];w.index>=0?t[w.index]=e:t.includes(e)||t.push(e),cn(null),un(``),ho(w.action,t)},n=n=>{if(n.preventDefault(),n.stopPropagation(),n.key===`Escape`){cn(null),un(``);return}if(e(n.key)){w.action===`openInNewTab`?t(it(n)):un(it(n));return}let r=it(n);r&&t(r)},r=t=>{e(t.key)&&un(``)};return window.addEventListener(`keydown`,n,!0),window.addEventListener(`keyup`,r,!0),()=>{window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`keyup`,r,!0)}},[w,f]);let _o=async e=>{await Z({recentLimit:Math.min(Math.max(e,0),50)})},vo=(e,t)=>{let n=t??Ai[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};ji(t=>({...t,[e]:void 0})),Z(i)},yo=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;Ki(null),await Z({sharePortMode:`custom`,sharePort:n}),await nt(n,`custom`)},bo=async e=>{let t=e===`custom`,n=t?f?.sharePort??8080:null;await Z({sharePortMode:t?`custom`:`random`,sharePort:n}),await nt(n,t?`custom`:`random`)};(0,S.useEffect)(()=>{mt().then(Xi,()=>void 0)},[]);let xo=async()=>{qi.length!==0&&(Xi(await _t(qi)),Ji(``))},So=async()=>{Xi(await _t(null))},Co=async()=>{let e=await Qe([`.pfx`,`.p12`]);e&&(ea(e),na(``),ia(null))},wo=async()=>{if($i)try{Qi(await gt($i,ta.length>0?ta:null)),ea(null),na(``),ia(null)}catch(e){ia(e instanceof Error?e.message:String(e))}},To=async()=>{try{Qi(await st()),ia(null)}catch(e){ia(e instanceof Error?e.message:String(e))}},Eo=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;ua(!0),ca(null);try{let e=await Ye(t);oa(e),ca(e.error),e.error||await Z({startupMode:t})}finally{ua(!1)}},Do=async e=>{await Z({galleryRoots:e.length>0?e:null})},Oo=async()=>{let e=await rt(),t=f?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await Do([...t,e])},ko=async()=>{let e=ut.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await lo(e,bt),vt(``))},Ao=async()=>{Tt(!0);try{let e=await rt();if(!e)return;let t=await Qe([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;let n=e.replace(/[\\/][^\\/]+$/,``),r=re(e),i=`file:${t}`;await Se(n,r,i)&&(fe(),ct({folder:e,icon:t}))}finally{Tt(!1)}},jo=async(e,t)=>{let n={...f?.fonts};t?n[e]=t:delete n[e],await Z({fonts:n})};return(0,C.jsxs)(Ln,{children:[(0,C.jsxs)(Rn,{ref:pa,children:[(0,C.jsxs)(D,{ref:X(`application`),children:[(0,C.jsx)(E,{note:`the_build_its_yafm_links_and_what_reopens_at_launch`,title:`application`}),(0,C.jsxs)(O,{children:[(0,C.jsxs)(N,{children:[(0,C.jsx)(I,{children:a(`version`)}),(0,C.jsx)(B,{children:e?`v${e.version}`:`—`})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(I,{children:a(`platform`)}),(0,C.jsx)(B,{children:e?.platform??`—`})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`language`)}),(0,C.jsx)(R,{children:a(`the_language_the_interface_uses_english_is_the_default_the_system_option_follows_the_operating_system`)})]}),(0,C.jsx)(F,{children:(0,C.jsx)(Pn,{disabled:!f,onChange:e=>void Z({language:e}),options:[bn,...ee.length>0?ee:[gn]],value:f?.language??gn})})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`picker_window_size`)}),(0,C.jsx)(R,{children:a(`the_size_the_folder_and_file_picker_opens_at_width_and_height_are_in_pixels`)})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(zr,{inputMode:`numeric`,onBlur:e=>vo(`width`,e.currentTarget.value),onChange:e=>ji(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Ai.width??String(f?.pickerWindowWidth??1200)}),(0,C.jsx)(B,{children:`×`}),(0,C.jsx)(zr,{inputMode:`numeric`,onBlur:e=>vo(`height`,e.currentTarget.value),onChange:e=>ji(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Ai.height??String(f?.pickerWindowHeight??800)})]})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`web_server_port`)}),(0,C.jsx)(R,{children:a(`random_asks_the_operating_system_for_one_free_port_when_the_first_web_share_starts_and_every_web_share_keeps_using_it_custom_always_tries_the_port_below`)})]}),(0,C.jsx)(F,{children:(0,C.jsx)(Ze,{disabled:!f,onChange:e=>void bo(e),options:[{value:`random`,label:a(`random`)},{value:`custom`,label:a(`custom_port`)}],value:f?.sharePortMode??`random`,width:160})})]}),f?.sharePortMode===`custom`&&(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`custom_port`)}),(0,C.jsx)(R,{children:a(`a_number_from_1_to_65535_if_it_is_already_in_use_the_app_asks_for_a_free_port_instead`)})]}),(0,C.jsx)(F,{children:(0,C.jsx)(zr,{inputMode:`numeric`,onBlur:e=>void yo(e.currentTarget.value),onChange:e=>Ki(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:Gi??(f?.sharePort?String(f.sharePort):``)})})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`link_paths`)}),(0,C.jsx)(R,{children:a(`relative_links_keep_working_when_the_link_and_its_target_move_together_absolute_links_always_store_the_full_target_path`)})]}),(0,C.jsx)(F,{children:(0,C.jsx)(Ze,{disabled:!f,onChange:e=>void Z({linkPathMode:e}),options:[{value:`relative`,label:a(`relative`)},{value:`absolute`,label:a(`absolute`)}],value:f?.linkPathMode??`relative`,width:160})})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`open_yafm_links`)}),(0,C.jsx)(R,{children:a(`registers_this_app_for_yafm_links_for_the_current_user_only_turning_it_on_writes_this_copy_s_path_starting_the_app_never_touches_the_registry`)}),kt.registered&&!kt.pathMatches&&(0,C.jsx)(z,{children:a(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:kt.registeredPath??`?`})}),Lt&&(0,C.jsx)(z,{children:Lt})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(Rr,{$on:ba,children:a(ba?`active`:`off`)}),(0,C.jsx)(H,{$on:ba,disabled:Pt,onClick:()=>void io(),title:a(ba?`stop_opening_yafm_links`:`open_yafm_links_with_this_app`),type:`button`,children:(0,C.jsx)(U,{})})]})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`use_as_the_default_file_manager`)}),(0,C.jsx)(R,{children:a(`registers_this_app_for_folder_opens_on_this_account_explorer_stays_available_from_the_context_menu_on_linux_this_sets_the_inode_directory_default`)}),b?.registered&&!b.pathMatches&&(0,C.jsx)(z,{children:a(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:b.registeredPath??`?`})}),on&&(0,C.jsx)(z,{children:on})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(Rr,{$on:ya,children:a(ya?`active`:`off`)}),(0,C.jsx)(H,{$on:ya,disabled:!f||rn,onClick:()=>void oo(),title:a(ya?`stop_using_this_app_for_folders`:`use_this_app_for_folders`),type:`button`,children:(0,C.jsx)(U,{})})]})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`open_archives_with_this_app`)}),(0,C.jsx)(R,{children:a(`registers_this_app_for_zip_7z_rar_tar_and_the_other_archive_types_on_this_account_so_double_clicking_one_shows_it_as_a_folder_here_windows_may_still_ask_once_which_app_to_use`)}),(0,C.jsx)(R,{children:a(`when_this_is_off_opening_an_archive_uses_the_system_s_default_application_instead`)}),y?.registered&&!y.pathMatches&&(0,C.jsx)(z,{children:a(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:y.registeredPath??`?`})}),tn&&(0,C.jsx)(z,{children:tn})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(Rr,{$on:_a,children:a(_a?`active`:`off`)}),(0,C.jsxs)(W,{disabled:!f||$t||_a,onClick:()=>void so(),type:`button`,children:[(0,C.jsx)(zt,{size:13}),a(`register`)]}),e?.platform===`windows`&&(0,C.jsxs)(W,{onClick:()=>void We(`ms-settings:defaultapps`),type:`button`,children:[(0,C.jsx)(Et,{size:13}),a(`default_apps`)]}),(0,C.jsxs)(Lr,{disabled:!f||$t||!va,onClick:()=>void co(),type:`button`,children:[(0,C.jsx)(x,{size:13}),a(`unregister`)]})]})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`reopen_the_tabs_that_were_open`)}),(0,C.jsx)(R,{children:a(`keeps_the_tabs_and_the_folder_each_one_shows_so_they_come_back_after_a_restart_a_folder_passed_on_the_command_line_takes_over_instead`)})]}),(0,C.jsx)(H,{$on:f?.restoreTabs??!0,disabled:!f,onClick:()=>void Z({restoreTabs:!f?.restoreTabs}),type:`button`,children:(0,C.jsx)(U,{})})]})]})]}),(0,C.jsxs)(D,{ref:X(`share-access`),children:[(0,C.jsx)(E,{note:`share_access_note`,title:`share_access`}),(0,C.jsxs)(O,{children:[(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsxs)(L,{children:[(0,C.jsx)(I,{children:a(`share_access_require_approval`)}),(0,C.jsx)(p,{})]}),(0,C.jsx)(R,{children:a(`share_access_note`)})]}),(0,C.jsx)(H,{$on:f?.shareAccessEnabled??!0,disabled:!f,onClick:()=>void Z({shareAccessEnabled:!(f?.shareAccessEnabled??!0)}),type:`button`,children:(0,C.jsx)(U,{})})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(P,{children:(0,C.jsx)(I,{children:a(`share_access_approval_minutes`)})}),(0,C.jsx)(F,{children:(0,C.jsx)(Ar,{max:1440,min:1,onChange:e=>void Z({shareApprovalMinutes:Math.min(1440,Math.max(1,Number(e.target.value)||60))}),type:`number`,value:f?.shareApprovalMinutes??60})})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(P,{children:(0,C.jsx)(I,{children:a(`share_access_denial_seconds`)})}),(0,C.jsx)(F,{children:(0,C.jsx)(Ar,{max:3600,min:1,onChange:e=>void Z({shareDenialSeconds:Math.min(3600,Math.max(1,Number(e.target.value)||10))}),type:`number`,value:f?.shareDenialSeconds??10})})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(L,{children:(0,C.jsx)(I,{children:a(`password`)})}),(0,C.jsx)(R,{children:a(`share_access_password_note`)}),Yi&&(0,C.jsx)(R,{children:a(`share_access_password_is_set`)})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(jr,{autoComplete:`new-password`,onChange:e=>Ji(e.target.value),placeholder:a(`password`),type:`password`,value:qi}),(0,C.jsxs)(W,{disabled:qi.length===0,onClick:()=>void xo(),type:`button`,children:[(0,C.jsx)(g,{size:13}),a(`save`)]}),Yi&&(0,C.jsxs)(Lr,{onClick:()=>void So(),type:`button`,children:[(0,C.jsx)(x,{size:13}),a(`clear`)]})]})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`share_access_https`)}),(0,C.jsx)(R,{children:a(`share_access_https_note`)})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(Rr,{$on:f?.shareHttps??!1,children:f?.shareHttps?a(`active`):a(`off`)}),(0,C.jsx)(H,{$on:f?.shareHttps??!1,disabled:!f,onClick:()=>void Z({shareHttps:!(f?.shareHttps??!1)}),title:f?.shareHttps?a(`share_access_https_off`):a(`share_access_https_on`),type:`button`,children:(0,C.jsx)(U,{})})]})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`share_access_certificate`)}),(0,C.jsx)(R,{children:Zi?`${Zi.subject} · ${a(`share_access_expires`)}: ${new Date(Zi.expiresAt).toLocaleString()}`:a(`share_access_certificate_self_signed`)}),Zi&&(0,C.jsx)(R,{children:Zi.selfSigned?a(`share_access_certificate_self_signed`):a(`share_access_certificate_imported`)}),ra&&(0,C.jsx)(z,{children:ra})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(V,{onClick:()=>void Co(),type:`button`,children:a(`share_access_import_certificate`)}),(0,C.jsx)(V,{onClick:()=>void To(),type:`button`,children:a(`share_access_reset_certificate`)})]})]}),$i&&(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`password`)}),(0,C.jsx)(R,{children:$i})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(jr,{autoComplete:`off`,onChange:e=>na(e.target.value),placeholder:a(`password`),type:`password`,value:ta}),(0,C.jsx)(V,{onClick:()=>void wo(),type:`button`,children:a(`ok`)}),(0,C.jsx)(V,{onClick:()=>ea(null),type:`button`,children:a(`cancel`)})]})]}),(0,C.jsx)(N,{children:(0,C.jsxs)(P,{children:[(0,C.jsx)(L,{children:(0,C.jsx)(I,{children:a(`devices`)})}),(0,C.jsx)(R,{children:a(`share_access_devices_note`)})]})}),(0,C.jsx)(En,{approvalMinutes:f?.shareApprovalMinutes??60,denialSeconds:f?.shareDenialSeconds??10})]})]}),(0,C.jsxs)(D,{ref:X(`startup`),children:[(0,C.jsx)(E,{note:`how_the_app_joins_your_login_session_and_whether_it_opens_quietly_in_the_tray`,title:`startup`}),(0,C.jsxs)(O,{children:[(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`start_with_the_computer`)}),(0,C.jsx)(R,{children:a(`a_shortcut_uses_the_startup_folder_or_xdg_autostart_a_task_uses_task_scheduler_or_a_systemd_user_service_which_starts_earlier_and_is_usually_faster`)}),sa&&(0,C.jsx)(z,{children:sa}),aa&&!aa.supported&&(0,C.jsx)(z,{children:a(`this_platform_cannot_create_a_per_user_startup_entry`)})]}),(0,C.jsx)(F,{children:(0,C.jsx)(Ze,{disabled:!f||la||aa!==null&&!aa.supported,onChange:e=>void Eo(e),options:[{value:`none`,label:a(`none`)},{value:`shortcut`,label:a(`shortcut`)},{value:`task`,label:a(`scheduled_task`)}],value:aa?.mode??f?.startupMode??`none`,width:170})})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`start_hidden_in_the_tray`)}),(0,C.jsx)(R,{children:a(`launch_straight_to_the_tray_icon_instead_of_showing_the_window_the_tray_menu_opens_it_again`)})]}),(0,C.jsx)(F,{children:(0,C.jsx)(H,{$on:f?.startHidden??!1,disabled:!f,onClick:()=>void Z({startHidden:!f?.startHidden}),type:`button`,children:(0,C.jsx)(U,{})})})]})]})]}),(0,C.jsxs)(D,{ref:X(`fonts`),children:[(0,C.jsx)(E,{note:`choose_the_font_each_part_of_the_interface_uses_every_font_installed_on_this_system_is_listed_each_one_drawn_in_its_own_face`,title:`fonts`}),(0,C.jsxs)(O,{children:[Ue.map(e=>(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(e.label)}),(0,C.jsx)(R,{children:a(`falls_back_to_font_until_another_family_is_chosen`,{font:a(e.fallback)})})]}),(0,C.jsx)(F,{children:(0,C.jsx)(Qt,{defaultLabel:a(e.fallback),disabled:!f,fonts:Ui,onChange:t=>void jo(e.id,t),sample:e.sample,value:f?.fonts?.[e.id]??null})})]},e.id)),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`reset`)}),(0,C.jsx)(R,{children:a(`back_to_the_app_s_built_in_font_for_every_role`)})]}),(0,C.jsx)(F,{children:(0,C.jsxs)(W,{onClick:()=>void Z({fonts:{}}),type:`button`,children:[(0,C.jsx)(v,{size:13}),a(`reset`)]})})]})]})]}),(0,C.jsxs)(D,{ref:X(`time`),children:[(0,C.jsx)(E,{note:`every_timestamp_in_the_interface_uses_this_format_follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`,title:`time_format`}),(0,C.jsx)(O,{children:(0,C.jsxs)(Vn,{children:[(0,C.jsxs)(Hn,{children:[(0,C.jsx)(I,{children:a(`format`)}),(0,C.jsx)(R,{children:a(`follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`)})]}),(0,C.jsx)(di,{children:vn.map(e=>(0,C.jsx)(fi,{$active:(f?.timeFormat??`24`)===e.id,onClick:()=>void Z({timeFormat:e.id}),type:`button`,children:a(e.label)},e.id))}),(f?.timeFormat??`24`)===`custom`&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(pi,{"aria-label":a(`pattern`),onBlur:Va,onChange:e=>ei(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Va()):e.key===`Escape`&&ei(null)},spellCheck:!1,value:$r??f?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,C.jsx)(R,{children:a(`tokens_yyyy_year_mm_month_dd_day_hh_24_hour_mm_minute_ss_second_hh_12_hour_and_a_am_pm_other_characters_are_copied`)})]}),(0,C.jsxs)(mi,{children:[(0,C.jsx)(`span`,{children:a(`preview`)}),(0,C.jsx)(`code`,{children:ae(yn,f?.timeFormat,$r??f?.timeFormatPattern)})]})]})})]}),(0,C.jsxs)(D,{ref:X(`updates`),children:[(0,C.jsx)(E,{note:`the_running_build_and_the_newest_one_published`,title:`updates`}),(0,C.jsxs)(O,{children:[(0,C.jsxs)(N,{children:[(0,C.jsx)(I,{children:a(`current_version`)}),(0,C.jsx)(B,{children:e?`v${e.version}`:`—`})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(I,{children:a(`latest_version`)}),(0,C.jsx)(B,{children:K?`v${K.latest}`:`—`})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:K?K.available?a(`version_version_is_available`,{version:K.latest}):a(`you_are_on_the_latest_version`):a(`not_checked_yet`)}),(0,C.jsx)(R,{children:K?.available?a(`the_installer_downloads_installs_itself_and_closes_the_app`):a(`reads_the_version_file_the_release_workflow_publishes`)})]}),(0,C.jsxs)(F,{children:[K?.available&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(W,{onClick:()=>void Fe(),type:`button`,children:[(0,C.jsx)(Dt,{size:13}),a(`open_release_page`)]}),ga&&(0,C.jsxs)(W,{disabled:q!==null,onClick:()=>void Ka(),type:`button`,children:[(0,C.jsx)(Ut,{size:13}),a(`download_and_install`)]})]}),(0,C.jsxs)(W,{disabled:Pi||q!==null,onClick:()=>void Ga(),type:`button`,children:[(0,C.jsx)(v,{size:13}),a(Pi?`checking`:`check_for_updates`)]}),(0,C.jsxs)(W,{onClick:()=>void Ne(),type:`button`,children:[(0,C.jsx)(Ft,{size:13}),a(`open_log_folder`)]})]})]}),Ii&&(0,C.jsx)(N,{children:(0,C.jsx)(z,{children:Ii})})]})]}),(0,C.jsxs)(D,{ref:X(`colors`),children:[(0,C.jsx)(E,{note:`the_accent_and_highlight_colours_the_whole_window_uses`,title:`colors`}),(0,C.jsxs)(O,{children:[(0,C.jsxs)(Vn,{children:[(0,C.jsxs)(Hn,{children:[(0,C.jsx)(I,{children:a(`theme`)}),(0,C.jsx)(R,{children:a(`follow_the_operating_system_or_always_use_the_light_or_dark_palette`)})]}),(0,C.jsx)(di,{children:_n.map(e=>(0,C.jsx)(fi,{$active:(f?.themeMode??`system`)===e.id,onClick:()=>void Z({themeMode:e.id}),type:`button`,children:a(e.label)},e.id))})]}),(0,C.jsxs)(Vn,{children:[(0,C.jsxs)(Hn,{children:[(0,C.jsx)(I,{children:a(`presets`)}),(0,C.jsx)(R,{children:a(`one_click_changes_the_accent_and_the_highlight_together`)})]}),(0,C.jsxs)(Un,{children:[Ee.map(e=>(0,C.jsxs)(Wn,{$on:Q.toLowerCase()===e.accent&&$.toLowerCase()===e.secondary,onClick:()=>Ua(e.accent,e.secondary),title:`${a(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,C.jsxs)(Zn,{children:[(0,C.jsx)(`i`,{style:{background:e.accent}}),(0,C.jsx)(`i`,{style:{background:e.secondary}})]}),(0,C.jsx)(Gn,{children:a(e.name)})]},e.name)),ha.map((e,t)=>(0,C.jsxs)(Kn,{children:[(0,C.jsxs)(Wn,{$on:Q.toLowerCase()===e.accent.toLowerCase()&&$.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>Ua(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,C.jsxs)(Zn,{children:[(0,C.jsx)(`i`,{style:{background:e.accent}}),(0,C.jsx)(`i`,{style:{background:e.secondary}})]}),(0,C.jsx)(Gn,{children:e.name})]}),(0,C.jsx)(qn,{onClick:()=>void Za(t),title:a(`remove_preset`),type:`button`,children:(0,C.jsx)(x,{size:9})})]},`${e.name}-${t}`)),G?(0,C.jsxs)(Yn,{children:[(0,C.jsxs)(Zn,{children:[(0,C.jsx)(`i`,{style:{background:G.accent}}),(0,C.jsx)(`i`,{style:{background:G.secondary}})]}),(0,C.jsx)(Xn,{autoFocus:!0,maxLength:24,onChange:e=>Mi({...G,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Xa()):e.key===`Escape`&&(e.preventDefault(),Mi(null))},placeholder:a(`preset_name`),spellCheck:!1,value:G.name}),(0,C.jsxs)(V,{onClick:()=>void Xa(),type:`button`,children:[(0,C.jsx)(g,{size:13}),a(`save`)]}),(0,C.jsxs)(V,{onClick:()=>Mi(null),type:`button`,children:[(0,C.jsx)(x,{size:13}),a(`cancel`)]})]}):(0,C.jsxs)(Jn,{disabled:!f,onClick:()=>Mi({name:``,accent:Q,secondary:$}),title:a(`save_the_current_colours_as_a_preset`),type:`button`,children:[(0,C.jsx)(_,{size:12}),a(`add_preset`)]})]})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`accent_color`)}),(0,C.jsx)(R,{children:a(`buttons_selections_focus_rings_and_active_navigation`)})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(In,{colors:Ti.accent,current:Q,onApply:e=>Wa(`accent`,e)}),(0,C.jsx)(Fr,{"aria-label":a(`accent_color`),disabled:!f,onBlur:()=>Qa(`accent`),onChange:e=>void Z({accentColor:e.target.value}),onFocus:()=>Bi({role:`accent`,color:Q}),type:`color`,value:Q}),(0,C.jsx)(Ir,{children:Q.toUpperCase()})]})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`secondary_color`)}),(0,C.jsx)(R,{children:a(`gradients_highlights_and_the_second_end_of_the_accent_ramp`)})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(In,{colors:Ti.secondary,current:$,onApply:e=>Wa(`secondary`,e)}),(0,C.jsx)(Fr,{"aria-label":a(`secondary_color`),disabled:!f,onBlur:()=>Qa(`secondary`),onChange:e=>void Z({secondaryColor:e.target.value}),onFocus:()=>Bi({role:`secondary`,color:$}),type:`color`,value:$}),(0,C.jsx)(Ir,{children:$.toUpperCase()})]})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`reset_colors`)}),(0,C.jsx)(R,{children:a(`returns_the_interface_to_the_default_blue_and_indigo_theme`)})]}),(0,C.jsx)(F,{children:(0,C.jsxs)(V,{disabled:!f,onClick:()=>{Ha(`accent`,Q),Ha(`secondary`,$),Z({accentColor:null,secondaryColor:null})},type:`button`,children:[(0,C.jsx)(v,{size:13}),a(`reset`)]})})]})]})]}),(0,C.jsxs)(D,{ref:X(`background`),children:[(0,C.jsx)(E,{note:`a_picture_or_video_behind_the_whole_window_from_the_title_bar_to_the_bottom`,title:`background`}),(0,C.jsxs)(O,{children:[(0,C.jsxs)(Vn,{children:[(0,C.jsxs)(Hn,{children:[(0,C.jsx)(I,{children:a(`wallpaper`)}),(0,C.jsx)(R,{children:a(`none_keeps_the_normal_dark_surface_every_built_in_concept_comes_in_the_app_s_colour_presets_your_own_pictures_sv_gs_and_videos_are_kept_in_the_gallery`)})]}),(0,C.jsx)(Zr,{children:(0,C.jsx)(Qr,{$active:!f?.backgroundSource,onClick:()=>void Z({backgroundSource:null}),title:a(`none`),type:`button`,children:(0,C.jsx)(ri,{children:a(`none`)})})}),(0,C.jsxs)(Jr,{children:[ke.map(e=>(0,C.jsxs)(Yr,{children:[(0,C.jsx)(Xr,{children:a(e.name)}),(0,C.jsx)(Zr,{children:e.variants.map(t=>(0,C.jsx)(Qr,{$active:f?.backgroundSource===t.id,onClick:()=>void Z({backgroundSource:t.id}),title:`${a(e.name)} · ${a(t.preset)}`,type:`button`,children:(0,C.jsx)(`img`,{alt:``,src:tt===`light`?t.lightUrl:t.url})},t.id))})]},e.id)),(0,C.jsxs)(Yr,{children:[(0,C.jsx)(Xr,{children:a(`motion`)}),(0,C.jsx)(Zr,{children:Te.map(e=>(0,C.jsxs)(Qr,{$active:f?.backgroundSource===e.id,onClick:()=>void Z({backgroundSource:e.id}),title:a(e.name),type:`button`,children:[(0,C.jsx)(`img`,{alt:``,src:e.poster}),(0,C.jsx)(ti,{children:(0,C.jsx)(Wt,{size:11})})]},e.id))})]}),(0,C.jsxs)(Yr,{children:[(0,C.jsx)(Xr,{children:a(`custom`)}),(0,C.jsxs)(Zr,{children:[(f?.backgroundCustom??[]).map(e=>(0,C.jsx)(Nn,{active:f?.backgroundSource===`file:${e}`||f?.backgroundSource===`url:${e}`||f?.backgroundSource===e,onRemove:()=>Aa(e),onSelect:()=>void Z({backgroundSource:oe(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,C.jsxs)(ni,{onClick:()=>void Oa([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,C.jsx)(_,{size:12}),a(`image_2`)]}),(0,C.jsxs)(ni,{onClick:()=>void Oa([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,C.jsx)(_,{size:12}),a(`video`)]})]})]})]})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`image_or_video_url`)}),(0,C.jsx)(R,{children:a(`paste_a_direct_http_s_link_the_picture_or_video_is_loaded_from_the_network_each_time_the_window_starts`)})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(zr,{onChange:e=>fa(e.target.value),onKeyDown:e=>{e.key===`Enter`&&ka()},placeholder:`https://…`,value:da}),(0,C.jsxs)(V,{disabled:!oe(da),onClick:()=>void ka(),type:`button`,children:[(0,C.jsx)(_,{size:13}),a(`add`)]})]})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(I,{children:a(`blur`)}),(0,C.jsxs)(F,{children:[(0,C.jsx)(qr,{max:40,min:0,onChange:e=>void Z({backgroundBlur:Number(e.target.value)}),type:`range`,value:f?.backgroundBlur??0}),(0,C.jsxs)(B,{children:[f?.backgroundBlur??0,`px`]})]})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(I,{children:a(`saturation`)}),(0,C.jsxs)(F,{children:[(0,C.jsx)(qr,{max:200,min:0,onChange:e=>void Z({backgroundSaturation:Number(e.target.value)}),type:`range`,value:f?.backgroundSaturation??100}),(0,C.jsxs)(B,{children:[f?.backgroundSaturation??100,`%`]})]})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(I,{children:a(`brightness`)}),(0,C.jsxs)(F,{children:[(0,C.jsx)(qr,{max:150,min:40,onChange:e=>void Z({backgroundBrightness:Number(e.target.value)}),type:`range`,value:f?.backgroundBrightness??100}),(0,C.jsxs)(B,{children:[f?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,C.jsxs)(D,{ref:X(`safety`),children:[(0,C.jsx)(E,{note:`deleting_moving_renaming_or_writing_to_a_protected_folder_anything_inside_a_recursive_entry_or_a_folder_that_contains_one_always_waits_for_an_explicit_confirmation`,title:`safety`}),(0,C.jsxs)(O,{children:[(0,C.jsxs)(Vn,{children:[(0,C.jsxs)(Hn,{children:[(0,C.jsx)(I,{children:a(`protected_folders`)}),(0,C.jsx)(R,{children:a(`rules_are_full_path_globs_stays_inside_one_name_crosses_folders_and_matches_one_character_a_rule_without_a_folder_part_such_as_log_applies_to_that_name_at_any_depth_vars_vars_and_are_expanded_first`)})]}),(0,C.jsx)(ii,{children:(f?.protectedPaths??[]).map(e=>(0,C.jsxs)(ai,{children:[(0,C.jsx)(oi,{"aria-label":a(`protected_path`),onBlur:Na,onChange:t=>Dr({from:e,value:t.target.value}),onFocus:()=>Dr({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Na()):e.key===`Escape`&&Dr(null)},spellCheck:!1,value:M?.from===e?M.value:e}),(0,C.jsx)(si,{onClick:()=>Pa(e),title:a(`remove`),type:`button`,children:(0,C.jsx)(x,{size:10})})]},e))}),(0,C.jsxs)(li,{children:[(0,C.jsx)(ui,{"aria-label":a(`new_protected_rule`),onChange:e=>Vr(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ma())},placeholder:`*.log`,spellCheck:!1,value:Br}),(0,C.jsxs)(V,{onClick:Ma,type:`button`,children:[(0,C.jsx)(_,{size:13}),a(`add_the_rule`)]})]}),(0,C.jsxs)(ci,{children:[(0,C.jsxs)(V,{onClick:()=>void Fa(),type:`button`,children:[(0,C.jsx)(v,{size:13}),a(`restore_defaults`)]}),(0,C.jsxs)(V,{onClick:()=>void ja(),type:`button`,children:[(0,C.jsx)(Ft,{size:13}),a(`add_folder_2`)]})]})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`confirmation_delay`)}),(0,C.jsx)(R,{children:a(`the_delete_button_in_the_protected_folder_dialog_stays_disabled_for_this_many_seconds_at_least_2`)})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(qr,{max:30,min:2,onChange:e=>void Z({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:f?.deleteDelaySeconds??5}),(0,C.jsxs)(B,{children:[f?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,C.jsxs)(D,{ref:X(`tags`),children:[(0,C.jsx)(E,{note:`every_tag_in_the_catalogue_add_rename_recolour_or_remove_them_here`,title:`tags`}),(0,C.jsxs)(O,{children:[(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsxs)(L,{children:[(0,C.jsx)(Nr,{"aria-label":a(`color_of_the_new_tag`),onChange:e=>Er(e.target.value),type:`color`,value:Tr}),(0,C.jsx)(zr,{onChange:e=>wr(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),$a())},placeholder:a(`new_tag`),spellCheck:!1,value:Cr})]}),(0,C.jsx)(R,{children:a(`add_a_tag_here_it_is_available_in_every_folder`)})]}),(0,C.jsx)(F,{children:(0,C.jsxs)(V,{disabled:k||Cr.trim().length===0,onClick:()=>void $a(),type:`button`,children:[(0,C.jsx)(_,{size:13}),a(`add`)]})})]}),Qn&&(0,C.jsx)(N,{children:(0,C.jsx)(z,{children:Qn})}),xn.length===0&&(0,C.jsx)(N,{children:(0,C.jsx)(R,{children:a(`no_tags_yet_add_one_below_it_is_available_in_every_folder`)})}),xn.map(e=>(0,C.jsx)(N,{children:Fn?.name===e.name?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(P,{children:[(0,C.jsxs)(L,{children:[(0,C.jsx)(Nr,{"aria-label":a(`color_of_tag`,{tag:e.name}),onChange:t=>void eo(e.name,t.target.value),title:a(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,C.jsx)(Pr,{autoFocus:!0,disabled:k,onChange:t=>zn({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),no()):e.key===`Escape`&&(e.preventDefault(),zn(null))},value:Fn.value})]}),(0,C.jsx)(R,{children:a(`press_enter_to_save_escape_to_cancel`)})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(V,{disabled:k,onClick:()=>void no(),type:`button`,children:[(0,C.jsx)(g,{size:13}),a(`save`)]}),(0,C.jsxs)(V,{disabled:k,onClick:()=>zn(null),type:`button`,children:[(0,C.jsx)(x,{size:13}),a(`cancel`)]})]})]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(P,{children:[(0,C.jsxs)(L,{children:[(0,C.jsx)(Nr,{"aria-label":a(`color_of_tag`,{tag:e.name}),onChange:t=>void eo(e.name,t.target.value),title:a(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,C.jsx)(I,{children:e.name})]}),(0,C.jsx)(R,{children:se(a,e.folders,`used_in_1_folder_renaming_or_removing_it_updates_that_folder_s_index`,`used_in_count_folders_renaming_or_removing_it_updates_those_folders_indexes`)})]}),(0,C.jsxs)(F,{children:[(0,C.jsxs)(V,{disabled:k,onClick:()=>zn({name:e.name,value:e.name}),type:`button`,children:[(0,C.jsx)(Nt,{size:13}),a(`edit`)]}),(0,C.jsxs)(Lr,{disabled:k,onClick:()=>void to(e.name),type:`button`,children:[(0,C.jsx)(jt,{size:13}),a(`remove`)]})]})]})},e.name))]})]}),(0,C.jsxs)(D,{ref:X(`files-view`),children:[(0,C.jsx)(E,{note:`the_defaults_every_folder_starts_with_a_folder_can_still_override_them`,title:`files_view`,global:!0}),(0,C.jsxs)(O,{children:[(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`default_view`)}),(0,C.jsx)(R,{children:a(`the_mode_every_folder_starts_with_a_folder_can_still_remember_its_own_list_or_grid_mode_from_the_title_bar`)})]}),(0,C.jsx)(F,{children:(0,C.jsxs)(Gr,{children:[(0,C.jsx)(Kr,{$on:Y.mode===`list`,onClick:()=>void Z({defaultView:{...Y,mode:`list`}}),type:`button`,children:a(`list`)}),(0,C.jsx)(Kr,{$on:Y.mode===`grid`,onClick:()=>void Z({defaultView:{...Y,mode:`grid`}}),type:`button`,children:a(`grid`)})]})})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`list_icon_size`)}),(0,C.jsx)(R,{children:a(`the_icon_in_the_list_rows`)})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(qr,{max:48,min:16,onChange:e=>void Z({defaultView:{...Y,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Y.iconSize}),(0,C.jsxs)(B,{children:[Y.iconSize,`px`]})]})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`grid_size`)}),(0,C.jsx)(R,{children:a(`the_height_of_a_grid_tile_the_icon_inside_follows_it`)})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(qr,{max:260,min:100,onChange:e=>void Z({defaultView:{...Y,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Y.gridSize}),(0,C.jsxs)(B,{children:[Y.gridSize,`px`]})]})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsxs)(L,{children:[(0,C.jsx)(I,{children:a(`selection_checkboxes`)}),(0,C.jsx)(p,{})]}),(0,C.jsx)(R,{children:a(`show_a_checkbox_before_every_name_the_way_explorer_does_checked_entries_can_be_copied_cut_or_deleted_together`)})]}),(0,C.jsx)(H,{$on:f?.showCheckboxes??!0,disabled:!f,onClick:()=>void Z({showCheckboxes:!(f?.showCheckboxes??!0)}),type:`button`,children:(0,C.jsx)(U,{})})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsxs)(L,{children:[(0,C.jsx)(I,{children:a(`open_with_a_single_click`)}),(0,C.jsx)(p,{})]}),(0,C.jsx)(R,{children:a(`off_means_double_click_like_explorer_s_default_the_checkbox_still_only_selects_so_a_click_on_it_never_opens_the_entry`)})]}),(0,C.jsx)(H,{$on:f?.openOnSingleClick??!1,disabled:!f,onClick:()=>void Z({openOnSingleClick:!(f?.openOnSingleClick??!1)}),type:`button`,children:(0,C.jsx)(U,{})})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsxs)(L,{children:[(0,C.jsx)(I,{children:a(`open_the_file_tray_while_dragging`)}),(0,C.jsx)(p,{})]}),(0,C.jsx)(R,{children:a(`the_tray_appears_when_a_drag_starts_and_closes_again_if_it_is_still_empty_off_leaves_it_to_the_title_bar_button`)})]}),(0,C.jsx)(H,{$on:f?.trayAutoShow??!0,disabled:!f,onClick:()=>void Z({trayAutoShow:!(f?.trayAutoShow??!0)}),type:`button`,children:(0,C.jsx)(U,{})})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsxs)(L,{children:[(0,C.jsx)(I,{children:a(`confirm_before_deleting`)}),(0,C.jsx)(p,{})]}),(0,C.jsx)(R,{children:a(`asks_before_moving_items_to_the_recycle_bin_shift_del_always_asks_because_that_deletes_permanently`)})]}),(0,C.jsx)(H,{$on:f?.confirmDelete??!1,disabled:!f,onClick:()=>void Z({confirmDelete:!(f?.confirmDelete??!1)}),type:`button`,children:(0,C.jsx)(U,{})})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsxs)(L,{children:[(0,C.jsx)(I,{children:a(`automatic_rename_suffix`)}),(0,C.jsx)(p,{})]}),(0,C.jsx)(R,{children:a(`the_suffix_added_when_a_copy_or_a_new_item_would_have_the_same_name`)})]}),(0,C.jsx)(F,{children:(0,C.jsx)(Ze,{disabled:!f,onChange:e=>void Z({conflictNameStyle:e}),options:[{value:`space_parentheses`,label:`Test (1).txt`},{value:`underscore`,label:`Test_1.txt`},{value:`dot`,label:`Test.1.txt`}],value:f?.conflictNameStyle??`space_parentheses`,width:160})})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsxs)(L,{children:[(0,C.jsx)(I,{children:a(`play_audio_in_video_previews`)}),(0,C.jsx)(p,{})]}),(0,C.jsx)(R,{children:a(`video_previews_play_muted_by_default_turn_this_on_to_hear_their_audio_while_the_details_panel_is_open`)})]}),(0,C.jsx)(H,{$on:f?.previewVideoAudio??!1,disabled:!f,onClick:()=>void Z({previewVideoAudio:!(f?.previewVideoAudio??!1)}),type:`button`,children:(0,C.jsx)(U,{})})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsxs)(L,{children:[(0,C.jsx)(I,{children:a(`autoplay_video_previews`)}),(0,C.jsx)(p,{})]}),(0,C.jsx)(R,{children:a(`off_by_default_turn_this_on_to_start_a_video_as_soon_as_its_details_panel_opens_the_play_button_still_works_when_it_is_off`)})]}),(0,C.jsx)(H,{$on:f?.previewVideoAutoplay??!1,disabled:!f,onClick:()=>void Z({previewVideoAutoplay:!(f?.previewVideoAutoplay??!1)}),type:`button`,children:(0,C.jsx)(U,{})})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsxs)(L,{children:[(0,C.jsx)(I,{children:a(`preview_panel_under_the_list`)}),(0,C.jsx)(p,{})]}),(0,C.jsx)(R,{children:a(`shows_the_pictures_videos_and_documents_the_shell_can_preview_as_grid_tiles_below_the_list_the_tiles_follow_the_grid_size_and_the_panel_only_appears_in_list_mode`)})]}),(0,C.jsx)(H,{$on:Y.showImages??!0,onClick:()=>void Z({defaultView:{...Y,showImages:!(Y.showImages??!0)}}),type:`button`,children:(0,C.jsx)(U,{})})]}),(0,C.jsx)(N,{children:(0,C.jsxs)(P,{children:[(0,C.jsxs)(L,{children:[(0,C.jsx)(I,{children:a(`columns`)}),(0,C.jsx)(p,{})]}),(0,C.jsx)(R,{children:a(`shown_in_every_folder_changing_them_changes_all_folders_at_once`)})]})}),(0,C.jsx)(N,{children:(0,C.jsxs)(hi,{children:[ft.map(e=>(0,C.jsxs)(gi,{children:[(0,C.jsx)(`input`,{checked:(Y.columns??[]).includes(e.id),onChange:()=>void ro(e.id),type:`checkbox`}),(0,C.jsx)(`span`,{children:a(e.label)})]},e.id)),(0,C.jsxs)(gi,{children:[(0,C.jsx)(`input`,{checked:(Y.columns??[]).includes(`linkTarget`),onChange:()=>void ro(`linkTarget`),type:`checkbox`}),(0,C.jsx)(`span`,{children:a(`link_target_after_the_name`)})]})]})})]}),(0,C.jsxs)(Di,{children:[a(`the_default_view_list_icon_size_and_grid_size_are_only_defaults_a_folder_can_still_remember_its_own_from_the_title_bar`),` `,(0,C.jsx)(p,{}),` `,a(`anything_marked_as_global_always_applies_to_every_folder`)]})]}),(0,C.jsxs)(D,{ref:X(`shortcuts`),children:[(0,C.jsx)(E,{note:`every_action_can_hold_several_combinations_click_one_to_record_it_again_add_one_with_the_plus_and_drop_one_with_the_cross`,title:`shortcuts`}),(0,C.jsxs)(O,{children:[hn.map(({id:e,label:t,note:n})=>{let r=fo(e),i=w?.action===e,o=mo(e);return(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(t)}),(0,C.jsx)(R,{children:a(n)}),o.length>0&&(0,C.jsx)(Ci,{children:a(`also_in_use_by_actions_pressing_it_runs_each_of_them`,{actions:o.join(`, `)})})]}),(0,C.jsx)(F,{children:(0,C.jsxs)(_i,{children:[r.map((t,n)=>(0,C.jsxs)(vi,{$conflict:(po.get(t)?.length??0)>1,$listening:i&&w.index===n,children:[(0,C.jsx)(yi,{onClick:()=>cn({action:e,index:n}),title:a(`click_to_record_this_shortcut_again`),type:`button`,children:i&&w.index===n?ln.length>0?`${Xe(ln)} + …`:a(`press_a_key`):Xe(t)}),(0,C.jsx)(bi,{onClick:()=>go(e,n),title:a(`remove`),type:`button`,children:(0,C.jsx)(x,{size:9})})]},t+`-`+n)),r.length===0&&(0,C.jsx)(xi,{children:a(`none`)}),(0,C.jsx)(Si,{$listening:i&&w.index<0,onClick:()=>cn({action:e,index:-1}),title:a(`add`),type:`button`,children:i&&w.index<0?ln.length>0?`${Xe(ln)} + …`:a(`press_a_key`):(0,C.jsx)(_,{size:11})})]})})]},e)}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`reset`)}),(0,C.jsx)(R,{children:a(`back_to_the_default_combination_for_every_action`)})]}),(0,C.jsx)(F,{children:(0,C.jsxs)(W,{onClick:()=>void Z({shortcuts:ot($e),globalHotkey:null}),type:`button`,children:[(0,C.jsx)(v,{size:13}),a(`reset`)]})})]})]})]}),(0,C.jsxs)(D,{ref:X(`memory`),children:[(0,C.jsx)(E,{note:`what_the_process_holds_and_how_to_give_it_back`,title:`memory`}),(0,C.jsxs)(O,{children:[(0,C.jsxs)(yr,{children:[(0,C.jsxs)(br,{children:[(0,C.jsx)(I,{children:a(`process_memory`)}),(0,C.jsx)(B,{children:h?`${u(h.private)} · ${ar(h.private,h.available)}`:`—`})]}),(0,C.jsx)(xr,{children:(0,C.jsx)(Sr,{$ratio:h?h.private/Math.max(h.available,1):0,$tone:ie(h?h.private/Math.max(h.available,1):0)})}),(0,C.jsx)(R,{children:h?a(`committed_of_available_the_runtime_can_use_resident_is_resident_the_webview_runs_in_its_own_process`,{available:u(h.available),resident:u(h.workingSet)}):a(`reading_the_current_usage`)})]}),(0,C.jsxs)(yr,{children:[(0,C.jsxs)(br,{children:[(0,C.jsx)(I,{children:a(`managed_heap`)}),(0,C.jsx)(B,{children:h?`${u(h.managed)} · ${ar(h.managed,h.private)}`:`—`})]}),(0,C.jsx)(xr,{children:(0,C.jsx)(Sr,{$ratio:h?h.managed/Math.max(h.private,1):0,$tone:`var(--accent-secondary)`})}),(0,C.jsx)(R,{children:a(`share_of_this_process_that_the_net_heap_holds_thumbnails_and_folder_size_walks_live_here_the_runtime_grows_it_on_demand_and_gives_it_back_after_a_collection`)})]}),(0,C.jsxs)(yr,{children:[(0,C.jsxs)(br,{children:[(0,C.jsx)(I,{children:a(`native_and_runtime`)}),(0,C.jsx)(B,{children:h?`${u(Math.max(0,h.private-h.managed))} · ${ar(Math.max(0,h.private-h.managed),h.private)}`:`—`})]}),(0,C.jsx)(xr,{children:(0,C.jsx)(Sr,{$ratio:h?Math.max(0,h.private-h.managed)/Math.max(h.private,1):0,$tone:`var(--accent-primary)`})}),(0,C.jsx)(R,{children:a(`the_runtime_loaded_libraries_and_the_rust_helper_share_this_part_rust_runs_inside_the_process_so_it_has_no_separate_figure`)})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`free_memory`)}),(0,C.jsx)(R,{children:a(`compacts_the_heap_and_returns_unused_pages_to_the_system_always_safe`)})]}),(0,C.jsx)(F,{children:(0,C.jsxs)(W,{onClick:()=>void Be().then(Ot),type:`button`,children:[(0,C.jsx)(At,{size:13}),a(`trim_now`)]})})]})]})]}),(0,C.jsxs)(D,{ref:X(`overview`),children:[(0,C.jsx)(E,{note:`the_home_tab_s_history_and_how_much_of_it_it_shows`,title:`overview`}),(0,C.jsx)(O,{children:(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`recent_items`)}),(0,C.jsx)(R,{children:a(`how_many_recently_opened_folders_the_overview_lists_0_hides_the_section`)})]}),(0,C.jsx)(F,{children:(0,C.jsx)(zr,{max:50,min:0,onChange:e=>void _o(Number(e.target.value)),type:`number`,value:f?.recentLimit??10})})]})})]}),(0,C.jsxs)(D,{ref:X(`gallery`),children:[(0,C.jsx)(E,{note:`the_folders_the_gallery_scans_for_pictures_and_videos`,title:`gallery`}),(0,C.jsxs)(O,{children:[(f?.galleryRoots??[]).map(e=>(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:re(e)}),(0,C.jsx)(R,{children:e})]}),(0,C.jsx)(F,{children:(0,C.jsx)(wi,{onClick:()=>void Do((f?.galleryRoots??[]).filter(t=>t!==e)),title:a(`stop_scanning_this_folder`),type:`button`,children:(0,C.jsx)(x,{size:12})})})]},e)),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`scan_folders`)}),(0,C.jsx)(R,{children:(f?.galleryRoots??[]).length===0?a(`nothing_added_yet_so_the_gallery_reads_the_pictures_folder`):a(`only_these_folders_are_scanned_three_levels_deep`)})]}),(0,C.jsx)(F,{children:(0,C.jsxs)(W,{onClick:()=>void Oo(),type:`button`,children:[(0,C.jsx)(Ft,{size:13}),a(`choose_folder`)]})})]})]})]}),(0,C.jsxs)(D,{ref:X(`icons`),children:[(0,C.jsx)(E,{note:`where_the_shell_s_own_icons_and_the_built_in_glyphs_come_from`,title:`icons`}),(0,C.jsxs)(O,{children:[(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`use_system_file_icons`)}),(0,C.jsx)(R,{children:a(`ask_the_shell_for_the_icon_of_each_file_type_instead_of_the_built_in_glyphs`)})]}),(0,C.jsx)(H,{$on:f?.systemIcons??!1,disabled:!f,onClick:()=>void Z({systemIcons:!f?.systemIcons}),type:`button`,children:(0,C.jsx)(U,{})})]}),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`use_custom_folder_icons`)}),(0,C.jsx)(R,{children:a(`folders_that_define_an_icon_desktop_ini_keep_showing_it_even_when_system_icons_are_off`)})]}),(0,C.jsx)(H,{$on:f?.customFolderIcons??!1,disabled:!f,onClick:()=>void Z({customFolderIcons:!f?.customFolderIcons}),type:`button`,children:(0,C.jsx)(U,{})})]})]})]}),(0,C.jsxs)(D,{ref:X(`extension-icons`),children:[(0,C.jsx)(E,{note:`a_custom_glyph_for_one_file_extension`,title:`icons_by_extension`}),(0,C.jsxs)(O,{children:[Object.entries(f?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:e}),(0,C.jsx)(R,{children:An(a,t)})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(jn,{source:t}),(0,C.jsx)(wi,{onClick:()=>void lo(e,null),title:a(`remove_this_rule`),type:`button`,children:(0,C.jsx)(x,{size:12})})]})]},e)),(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`add_a_rule`)}),(0,C.jsx)(R,{children:a(`extension_and_the_icon_to_draw_for_it`)})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(zr,{onChange:e=>vt(e.target.value),placeholder:`.psd`,spellCheck:!1,value:ut}),(0,C.jsxs)(Wr,{children:[(0,C.jsx)(wi,{onClick:()=>Ct(e=>!e),title:a(`choose_the_icon`),type:`button`,children:(0,C.jsx)(jn,{source:bt})}),St&&(0,C.jsx)(Gt,{allowDefault:!1,onClose:()=>Ct(!1),onPick:e=>{xt(e??`file`),Ct(!1)},value:bt})]}),(0,C.jsx)(wi,{onClick:()=>void ko(),title:a(`add_the_rule`),type:`button`,children:(0,C.jsx)(_,{size:13})})]})]})]})]}),(0,C.jsxs)(D,{ref:X(`folder-icons`),children:[(0,C.jsx)(E,{note:`a_single_folder_can_carry_an_icon_of_its_own`,title:`folder_icons`}),(0,C.jsxs)(O,{children:[(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`give_a_folder_its_own_icon`)}),(0,C.jsx)(R,{children:a(`stored_in_the_folder_s_parent_index_so_it_stays_with_the_files`,{index:`.yafm-index.db`})})]}),(0,C.jsxs)(F,{children:[at&&(0,C.jsx)(Mn,{src:at.icon}),(0,C.jsxs)(W,{disabled:wt,onClick:()=>void Ao(),type:`button`,children:[(0,C.jsx)(Ft,{size:13}),a(wt?`choosing`:`choose_folder_and_icon`)]})]})]}),at&&(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:re(at.folder)}),(0,C.jsx)(R,{children:at.folder})]}),(0,C.jsx)(F,{children:(0,C.jsxs)(Ei,{children:[(0,C.jsx)(g,{size:11}),` `,a(`saved`)]})})]})]})]}),(0,C.jsxs)(D,{ref:X(`folder-index`),children:[(0,C.jsx)(E,{note:`the_hidden_cache_that_makes_a_folder_open_instantly_next_time`,title:`folder_index`}),(0,C.jsxs)(O,{children:[(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`keep_a_index_in_every_folder`,{index:`.yafm-index.db`})}),(0,C.jsx)(R,{children:a(`holds_icons_cached_folder_sizes_and_the_folder_s_last_listing_so_it_opens_instantly_next_time_hidden_and_marked_as_a_system_file_on_windows_skipped_where_the_folder_is_read_only`)})]}),(0,C.jsx)(H,{$on:f?.writeDirectoryIndex??!0,disabled:!f,onClick:()=>void Z({writeDirectoryIndex:!f?.writeDirectoryIndex}),type:`button`,children:(0,C.jsx)(U,{})})]}),(0,C.jsxs)(Vn,{children:[(0,C.jsxs)(Hn,{children:[(0,C.jsx)(I,{children:a(`directory_index_blacklist`)}),(0,C.jsx)(R,{children:a(`rules_are_full_path_globs_matches_within_one_path_segment_and_crosses_folders_matching_folders_use_the_central_database_instead_of_creating_yafm_index_db_files`)})]}),(0,C.jsx)(ii,{children:(f?.directoryIndexBlacklist??[]).map(e=>(0,C.jsxs)(ai,{children:[(0,C.jsx)(oi,{"aria-label":a(`directory_index_blacklist_rule`),onBlur:Ia,onChange:t=>kr({from:e,value:t.target.value}),onFocus:()=>kr({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Ia()):e.key===`Escape`&&kr(null)},spellCheck:!1,value:Or?.from===e?Or.value:e}),(0,C.jsx)(si,{onClick:()=>za(e),title:a(`remove`),type:`button`,children:(0,C.jsx)(x,{size:10})})]},e))}),(0,C.jsxs)(li,{children:[(0,C.jsx)(ui,{"aria-label":a(`directory_index_blacklist_rule`),onChange:e=>Ur(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),La())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:Hr}),(0,C.jsxs)(V,{onClick:La,type:`button`,children:[(0,C.jsx)(_,{size:13}),a(`add_the_rule`)]})]}),(0,C.jsxs)(ci,{children:[(0,C.jsxs)(V,{onClick:Ba,type:`button`,children:[(0,C.jsx)(v,{size:13}),a(`restore_defaults`)]}),(0,C.jsxs)(V,{onClick:()=>void Ra(),type:`button`,children:[(0,C.jsx)(Ft,{size:13}),a(`add_folder_2`)]})]})]})]}),!(f?.writeDirectoryIndex??!0)&&(0,C.jsx)(Oi,{children:kn(a,e?.platform)})]}),(0,C.jsxs)(D,{ref:X(`indexing`),children:[(0,C.jsx)(E,{note:`background_folder_size_and_item_count_walks`,title:`index_tasks`}),(0,C.jsx)(On,{})]}),(0,C.jsxs)(D,{ref:X(`files`),children:[(0,C.jsx)(E,{note:`what_the_listings_include`,title:`files`}),(0,C.jsxs)(O,{children:[(0,C.jsxs)(N,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(I,{children:a(`show_hidden_files`)}),(0,C.jsxs)(R,{children:[a(`toggles_ordinary_hidden_files_for_this_session_alt_also_works_system_files_still_follow_explorer`),d?.overridden&&(0,C.jsx)(Mr,{disabled:ge,onClick:()=>void ao(null),type:`button`,children:a(`follow_system`)})]})]}),(0,C.jsxs)(F,{children:[(0,C.jsx)(Rr,{$on:d?.showHidden??!1,children:d?.overridden?Dn(a,d.showHidden):a(`follow_system`)}),(0,C.jsx)(H,{$on:d?.showHidden??!1,disabled:!d||ge,onClick:()=>void ao(!(d?.showHidden??!1)),title:a(`show_hidden_files`),type:`button`,children:(0,C.jsx)(U,{})})]})]}),(0,C.jsxs)(N,{children:[(0,C.jsx)(I,{children:a(`protected_operating_system_files`)}),(0,C.jsx)(B,{children:Dn(a,d?.showSystem)})]})]}),(0,C.jsx)(Di,{children:a(`hidden_items_follow_this_app_s_switch_protected_operating_system_files_still_follow_windows`)})]}),(0,C.jsxs)($n,{onClick:()=>pn(!0),type:`button`,children:[(0,C.jsx)(Dt,{size:13}),a(`open_source_attribution`)]})]}),(0,C.jsxs)(er,{"aria-label":a(`settings_sections`),onWheel:Da,ref:xa,children:[(0,C.jsx)(tr,{children:a(`sections`)}),(0,C.jsx)(nr,{children:T.map(({id:e,label:t})=>(0,C.jsxs)(rr,{$active:Vi===e,"data-section":e,onClick:()=>Ta(e),type:`button`,children:[(0,C.jsx)(Bn,{children:Sn[t]}),(0,C.jsx)(`span`,{children:a(t)})]},e))}),(0,C.jsx)(ir,{children:a(`changes_are_saved_as_you_make_them`)})]}),dn&&(0,C.jsx)(S.Suspense,{fallback:null,children:(0,C.jsx)(fn,{onClose:()=>pn(!1)})}),q&&(0,Kt.createPortal)((0,C.jsx)(cr,{children:(0,C.jsxs)(lr,{"aria-modal":`true`,role:`dialog`,children:[(0,C.jsxs)(ur,{children:[(0,C.jsx)(`h2`,{children:a(`software_update`)}),(0,C.jsx)(`p`,{children:K?.latest?a(`version_version`,{version:K.latest}):a(`preparing_the_update`)})]}),(0,C.jsx)(dr,{children:a(`changelog`)}),q.changelog?(0,C.jsx)(fr,{onClick:mr,children:(0,C.jsx)(c,{source:q.changelog})}):(0,C.jsx)(pr,{children:q.phase===`changelog`?a(`loading_the_changelog`):a(`the_changelog_could_not_be_loaded`)}),(0,C.jsxs)(hr,{children:[(0,C.jsx)(`span`,{children:or(q,a)}),(0,C.jsx)(`span`,{children:sr(q)})]}),(0,C.jsx)(gr,{children:(0,C.jsx)(_r,{$percent:Math.max(0,Math.min(100,q.percent))})}),q.error&&(0,C.jsx)(z,{children:q.error}),(0,C.jsxs)(vr,{children:[(q.phase===`changelog`||q.phase===`downloading`)&&(0,C.jsxs)(W,{onClick:()=>void Ja(),type:`button`,children:[(0,C.jsx)(x,{size:13}),a(`cancel`)]}),q.phase===`ready`&&(0,C.jsxs)(W,{onClick:()=>void Ya(),type:`button`,children:[(0,C.jsx)(Vt,{size:13}),a(`install_update`)]}),q.phase===`installing`&&(0,C.jsxs)(W,{disabled:!0,type:`button`,children:[(0,C.jsx)(v,{size:13}),a(`installing`)]}),(q.phase===`ready`||q.phase===`error`||q.phase===`cancelled`||q.phase===`installing`)&&(0,C.jsxs)(W,{onClick:()=>J(null),type:`button`,children:[(0,C.jsx)(x,{size:13}),a(`close`)]})]})]})}),document.body)]})}function En({approvalMinutes:e,denialSeconds:t}){let n=l(),[i,a]=(0,S.useState)([]),[o,s]=(0,S.useState)(!1),[c,ee]=(0,S.useState)(()=>Date.now());(0,S.useEffect)(()=>{let e=window.setInterval(()=>ee(Date.now()),1e3);return()=>window.clearInterval(e)},[]),(0,S.useEffect)(()=>{let e=()=>void ct().then(a,()=>a([]));if(e(),r.available)return r.on(t=>{t.type===`share.devices.changed`&&e()})},[]),(0,S.useEffect)(()=>{i.some(e=>e.expiresAt>0&&e.expiresAt<=c)&&ct().then(a,()=>void 0)},[c,i]);let te=e=>{let t=Math.max(0,Math.ceil((e-c)/1e3)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60,a=e=>String(e).padStart(2,`0`);return n>0?`${n}:${a(r)}:${a(i)}`:`${r}:${a(i)}`},ne=async(e,t,n)=>{s(!0);try{a(await tt(e,t,n))}finally{s(!1)}},re=async()=>{if(window.confirm(n(`share_access_clear_devices_confirm`))){s(!0);try{a(await at())}finally{s(!1)}}},ie=async e=>{s(!0);try{a(await vt(e))}finally{s(!1)}},u=e=>e.state===`allowed`?e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_allowed`)} · ${n(`share_access_expired`)}`:n(`share_access_allowed`):e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_denied`)} · ${n(`share_access_expired`)}`:n(`share_access_denied`),ae=i.filter(e=>e.state===`allowed`||e.state===`denied`),oe=e=>e.expiresAt===0?void 0:new Date(e.expiresAt).toLocaleString();return(0,C.jsxs)(j,{children:[ae.length>0&&(0,C.jsxs)(wr,{children:[(0,C.jsxs)(kr,{children:[n(`devices`),` · `,ae.length]}),(0,C.jsx)(M,{disabled:o,onClick:()=>void re(),title:n(`share_access_clear_devices`),type:`button`,children:(0,C.jsx)(jt,{size:13})})]}),ae.length===0&&(0,C.jsx)(Cr,{children:n(`share_access_no_devices`)}),ae.map(r=>(0,C.jsxs)(Tr,{children:[(0,C.jsxs)(Dr,{children:[(0,C.jsx)(Or,{children:r.name||r.address||r.id}),(0,C.jsxs)(kr,{children:[r.address,r.address?` · `:``,n(`share_access_last_seen`),`: `,new Date(r.lastSeen).toLocaleString()]}),(0,C.jsxs)(kr,{title:oe(r),children:[u(r),` · `,r.expiresAt===0?n(`share_access_forever`):n(`share_access_expires_in`,{time:te(r.expiresAt)})]})]}),(0,C.jsxs)(Er,{children:[(0,C.jsx)(Ze,{disabled:o,onChange:e=>{let[t,n]=e.split(`:`);ne(r.id,t,n===`forever`)},options:[{value:`allowed:timed`,label:n(`share_access_allowed_for_minutes`,{minutes:e})},{value:`allowed:forever`,label:n(`share_access_allow_forever`)},{value:`denied:timed`,label:n(`share_access_denied_for_seconds`,{seconds:t})},{value:`denied:forever`,label:n(`share_access_block_forever`)}],value:r.state===`allowed`?r.expiresAt===0?`allowed:forever`:`allowed:timed`:r.expiresAt===0?`denied:forever`:`denied:timed`,width:190}),(0,C.jsx)(M,{disabled:o,onClick:()=>void ie(r.id),title:n(`remove`),type:`button`,children:(0,C.jsx)(jt,{size:13})})]})]},r.id))]})}function Dn(e,t){return e(t===void 0?`reading`:t?`shown`:`hidden`)}function On(){let e=l(),[t,n]=(0,S.useState)(null);return(0,S.useEffect)(()=>{let e=!0,t=()=>ge().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,C.jsx)(Oi,{children:e(`no_indexing_tasks_are_running`)}):(0,C.jsxs)(O,{children:[(0,C.jsx)(N,{children:(0,C.jsx)(I,{children:e(`count_indexing_tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,C.jsx)(N,{children:(0,C.jsx)(B,{title:e,children:e})},e))]}):(0,C.jsx)(Oi,{children:e(`index_task_information_is_unavailable`)})}function kn(e,t){return e(`indexes_are_off_every_folder_s_icons_sizes_and_cached_listing_now_live_in_one_database_in_place_so_that_drive_grows_with_every_folder_you_open_that_is_the_cost_of_keeping_folders_free_of_extra_files`,{place:e(t===`windows`?`appdata_which_sits_on_the_system_drive_usually_c`:t===`linux`?`your_home_folder_which_often_shares_a_partition_with_the_system`:`the_app_s_settings_folder_which_usually_sits_on_the_system_drive`)})}function An(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built_in_source`,{source:t})}function jn({source:e}){let t=de(e.startsWith(`file:`)?e.slice(5):null);return(0,C.jsx)(Ti,{children:t?(0,C.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,C.jsx)(ut,{name:e,size:16})})}function Mn({src:e}){let t=de(e);return(0,C.jsx)(Ti,{children:t&&(0,C.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function Nn({path:e,active:t,onSelect:n,onRemove:r}){let i=l(),a=oe(e),o=d(a?null:e),s=a?e:o,c=f(e.split(/[?#]/)[0]);return(0,C.jsxs)($r,{children:[(0,C.jsxs)(Qr,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(c?(0,C.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,C.jsx)(`img`,{alt:``,src:s})),c&&(0,C.jsx)(ti,{children:(0,C.jsx)(Wt,{size:11})})]}),(0,C.jsx)(ei,{onClick:r,title:i(`remove`),type:`button`,children:(0,C.jsx)(x,{size:9})})]})}function Pn({value:e,options:t,onChange:n,disabled:r}){let i=l(),[a,o]=(0,S.useState)(null),s=(0,S.useRef)(null);return(0,S.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(Br,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,C.jsx)(`span`,{children:Fn(i,e)}),(0,C.jsx)(Vr,{children:(0,C.jsx)(Pt,{size:11})})]}),a&&(0,Kt.createPortal)((0,C.jsx)(Hr,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,C.jsxs)(Ur,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,C.jsx)(`span`,{children:Fn(i,t)}),t===e&&(0,C.jsx)(g,{size:11})]},t))}),document.body)]})}function Fn(e,t){return t===bn?e(`system_default`):xn[t]??t}function In({colors:e,current:t,onApply:n}){let r=l();if(e.length===0)return null;let[i,...a]=e;return(0,C.jsxs)(k,{children:[(0,C.jsxs)(Qn,{$color:i,onClick:()=>n(i),title:r(`previous_colour_colour`,{colour:i}),type:`button`,children:[(0,C.jsx)(`i`,{}),r(`previous`)]}),a.map(e=>(0,C.jsx)(A,{$color:e,onClick:()=>n(e),title:r(`use_colour`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,C.jsx)(g,{size:9})},e))]})}function E({title:e,note:t,global:n=!1}){let r=l();return(0,C.jsxs)(zn,{children:[(0,C.jsxs)(`h2`,{children:[(0,C.jsx)(Bn,{children:Sn[e]}),r(e),n&&(0,C.jsx)(p,{})]}),(0,C.jsx)(`p`,{children:r(t)})]})}var Ln=i.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,Rn=i.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,D=i.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,zn=i.header`
    display: flex;
    flex-direction: column;
    gap: 2px;

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
`,Bn=i.i`
    display: grid;
    place-items: center;
    width: 13px;
    height: 13px;
    flex-shrink: 0;
    color: var(--accent-primary);
    opacity: 0.85;
`,O=i.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,Vn=i.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Hn=i.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Un=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,Wn=i.button`
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
`,Gn=i.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Kn=i.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,qn=i.button`
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
`,Jn=i.button`
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
`,Yn=i.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Xn=i.input`
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
`,Zn=i.span`
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
`,k=i.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,A=i.button`
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
`,Qn=i.button`
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
`,$n=i.button`
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
`,er=i.nav`
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
`,tr=i.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,nr=i.div`
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
`,rr=i.button`
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
`,ir=i.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function ar(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}function or(e,t){switch(e.phase){case`changelog`:return t(`preparing_the_update`);case`downloading`:return t(`downloading_the_update`);case`ready`:return t(`download_complete`);case`cancelled`:return t(`update_cancelled`);case`error`:return t(`the_update_failed`);case`installing`:return t(`installing`);default:return``}}function sr(e){return e.total>0?`${u(e.downloaded)} / ${u(e.total)}`:e.downloaded>0?u(e.downloaded):``}var cr=i.div`
    position: fixed;
    inset: 0;
    z-index: 9500;
    display: grid;
    place-items: center;
    padding: 32px;
    background: rgba(2, 6, 23, 0.55);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
`,lr=i.div`
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
`,ur=i.div`
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
`,dr=i.span`
    margin-top: 4px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,fr=i.div`
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
`,pr=i.p`
    margin: 0;
    font-size: 11px;
    color: var(--text-muted);
`;function mr(e){let t=e.target?.closest(`a`);t&&(e.preventDefault(),We(t.href))}var hr=i.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    font-size: 11px;
    color: var(--text-muted);
`,gr=i.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.22);
`,_r=i.div`
    width: ${({$percent:e})=>`${e}%`};
    height: 100%;
    border-radius: 3px;
    background: var(--accent-gradient);
    transition: width 160ms ease;
`,vr=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,yr=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,br=i.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,xr=i.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Sr=i.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,j=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
`,Cr=i.div`
    padding: 8px 2px;
    color: var(--text-muted);
    font-size: 11px;
`,wr=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2px;
`,Tr=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,Er=i.div`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,M=i.button`
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
`,Dr=i.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Or=i.span`
    color: var(--text-primary);
    font-size: 12px;
`,kr=i.span`
    color: var(--text-muted);
    font-size: 10.5px;
    overflow-wrap: anywhere;
`,Ar=i.input`
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
`,jr=i.input`
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
`,Mr=i.button`
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
`,Nr=i.input`
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
`,Pr=i.input`
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
`,Fr=i.input`
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
`,Ir=i.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,Lr=i.button`
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
`,Rr=i.span`
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
`,zr=i.input`
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
`,Br=i.button`
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
`,Vr=i.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Hr=i.div`
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
`,Ur=i.button`
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
`,Wr=i.span`
    position: relative;
    display: inline-flex;
`,Gr=i.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Kr=i.button`
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
`,qr=i.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,Jr=i.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,Yr=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Xr=i.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Zr=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,Qr=i.button`
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
`,$r=i.div`
    position: relative;
    width: 102px;
    height: 58px;
`,ei=i.button`
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
`,ti=i.span`
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
`,ni=i.button`
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
`,ri=i.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,ii=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,ai=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,oi=i.input`
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
`,si=i.button`
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
`,ci=i.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,li=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,ui=i.input`
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
`,di=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,fi=i.button`
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
`,pi=i.input`
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
`,mi=i.div`
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
`,hi=i.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,gi=i.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,_i=i.span`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 5px;
`,vi=i.span`
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    border: 1px solid ${({$conflict:e,$listening:t})=>t?`var(--border-color-focus)`:e?`rgba(251, 191, 36, 0.55)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$listening:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`var(--bg-input)`};
`,yi=i.button`
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
`,bi=i.button`
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
`,xi=i.span`
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Si=i.button`
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
`,Ci=i.span`
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
`,wi=i.button`
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
`,Ti=i.span`
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
`,Ei=i.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,Di=i.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,Oi=i.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`;export{Tn as SettingsView};