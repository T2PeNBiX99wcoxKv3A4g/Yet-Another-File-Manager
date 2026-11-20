const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AttributionDialog-DTlliqlj.js","assets/rolldown-runtime-XKyaHtl9.js","assets/dist-sR-t6Emc.js","assets/Icons-NY0trHLk.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{_ as t,d as n,f as r,g as i,h as a,l as o,r as s,t as c,u as l}from"./dist-sR-t6Emc.js";import{D as ee,T as te,_ as ne,a as re,d as ie,i as ae,k as u,m as d,n as oe,t as se,x as ce}from"./theme-Ocob2ChL.js";import{A as le,H as ue,L as de,S as fe,b as f,dt as pe,ft as me,rt as he,s as ge,st as _e}from"./selectionMenu-3N_AfRQo.js";import{c as ve,d as ye,g as be,h as xe,l as Se,m as Ce,n as we,o as Te,p as Ee,s as De,t as Oe,u as ke}from"./concepts-69Rb8xko.js";import{A as Ae,C as je,D as Me,E as Ne,O as Pe,S as Fe,T as Ie,_ as Le,a as Re,b as ze,g as Be,h as Ve,i as He,j as Ue,k as We,m as p,s as m,t as h,v as Ge,w as Ke,x as qe,y as Je}from"./main-C7gAenhN.js";import{$ as Ye,B as Xe,H as Ze,J as Qe,M as $e,S as et,T as tt,U as nt,X as rt,a as it,at,b as ot,f as st,it as ct,j as lt,o as ut,r as dt,rt as ft,s as pt,tt as mt,u as ht,w as gt,y as _t}from"./FileList-wM4BPYTZ.js";import{t as vt}from"./textSearch-9s3m3Ks5.js";import{A as yt,B as bt,G as xt,H as St,J as Ct,M as wt,O as g,P as Tt,U as Et,W as Dt,X as Ot,Y as kt,_t as At,b as jt,d as _,et as Mt,f as Nt,it as v,j as Pt,l as Ft,lt as It,mt as Lt,n as Rt,ot as y,p as b,pt as zt,rt as Bt,st as Vt,tt as Ht,v as x,w as Ut,yt as Wt}from"./Icons-NY0trHLk.js";import{t as Gt}from"./IconPicker-mUYOTJIS.js";var S=e(t(),1),Kt=u();async function qt(){return r.available?(await r.request(`app.tags`)).tags:[]}async function Jt(e){return!r.available||!e?!1:(await r.request(`app.tags.delete`,{name:e})).ok}async function Yt(e,t){return!r.available||!e?[]:(await r.request(`app.tags.create`,{name:e,color:t})).tags}async function Xt(e,t){return!r.available||!e?!1:(await r.request(`app.tags.color`,{name:e,color:t})).ok}async function Zt(e,t){return!r.available||!e||!t?!1:(await r.request(`app.tags.rename`,{oldName:e,newName:t})).ok}var C=n();function Qt({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=l(),[s,c]=(0,S.useState)(null),[ee,te]=(0,S.useState)(``),ne=(0,S.useRef)(null),re=(0,S.useRef)(null),ie=(0,S.useMemo)(()=>{let e=ee.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,ee]);(0,S.useEffect)(()=>{if(!s)return;re.current?.focus();let e=()=>c(null),t=t=>{let n=t.target;n instanceof Node&&ne.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e)}},[s]);let ae=()=>{if(s){c(null);return}let e=ne.current?.getBoundingClientRect();if(!e)return;te(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;c({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},u=e=>{a(e),c(null)};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)($t,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:ae,ref:ne,type:`button`,children:[(0,C.jsx)(en,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,C.jsx)(tn,{children:`▾`})]}),s&&(0,Kt.createPortal)((0,C.jsxs)(nn,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,C.jsxs)(rn,{children:[(0,C.jsx)(Vt,{size:12}),(0,C.jsx)(an,{onChange:e=>te(e.target.value),placeholder:o(`filter_fonts`),ref:re,value:ee})]}),(0,C.jsxs)(on,{children:[(0,C.jsxs)(sn,{$active:!e,"aria-selected":!e,onClick:()=>u(null),role:`option`,type:`button`,children:[(0,C.jsxs)(cn,{children:[n,` `,(0,C.jsx)(un,{children:o(`default_2`)})]}),!e&&(0,C.jsx)(_,{size:11})]}),ie.map(t=>(0,C.jsxs)(sn,{$active:e===t,"aria-selected":e===t,onClick:()=>u(t),role:`option`,type:`button`,children:[(0,C.jsxs)(w,{children:[(0,C.jsx)(cn,{children:t}),(0,C.jsx)(ln,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,C.jsx)(_,{size:11})]},t)),ie.length===0&&(0,C.jsx)(dn,{children:o(`no_matching_font`)})]})]}),document.body)]})}var $t=i.button`
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
    ${ge}
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
`,fn=(0,S.lazy)(()=>h(()=>import(`./AttributionDialog-DTlliqlj.js`).then(e=>({default:e.AttributionDialog})),__vite__mapDeps([0,1,2,3]))),pn=[{id:`goBack`,label:`back`,note:`goes_to_the_previous_folder_in_this_tab`},{id:`goForward`,label:`forward`,note:`goes_to_the_next_folder_in_this_tab`},{id:`goUp`,label:`up_one_level`,note:`opens_the_folder_that_contains_the_current_one`},{id:`home`,label:`home_folder`,note:`jumps_to_the_user_s_home_folder`},{id:`find`,label:`search`,note:`opens_the_floating_search_box_typing_a_letter_in_a_folder_opens_it_too`},{id:`location`,label:`edit_location`,note:`turns_the_breadcrumbs_into_an_editable_path`},{id:`closeTab`,label:`close_tab`,note:`closes_the_tab_that_is_open`},{id:`newTab`,label:`new_tab`,note:`opens_the_overview_in_a_new_tab`},{id:`reopenTab`,label:`reopen_closed_tab`,note:`brings_back_the_tab_you_closed_last_folder_and_all`},{id:`nextTab`,label:`next_tab`,note:`cycles_to_the_next_tab`},{id:`previousTab`,label:`previous_tab`,note:`cycles_to_the_previous_tab`},{id:`copy`,label:`copy`,note:`copies_the_selection_so_it_can_be_pasted_elsewhere`},{id:`duplicate`,label:`duplicate`,note:`makes_a_copy_of_the_selection_in_this_folder_with_a_new_name`},{id:`cut`,label:`cut`,note:`moves_the_selection_on_the_next_paste`},{id:`paste`,label:`paste`,note:`copies_or_moves_the_clipboard_s_files_into_the_current_folder`},{id:`undo`,label:`undo`,note:`undoes_the_last_file_operation_in_this_session`},{id:`redo`,label:`redo`,note:`repeats_the_operation_that_was_just_undone`},{id:`delete`,label:`move_to_the_recycle_bin`,note:`moves_the_selection_to_the_recycle_bin`},{id:`deletePermanently`,label:`delete_permanently`,note:`deletes_the_selection_without_the_recycle_bin`},{id:`rename`,label:`rename`,note:`renames_the_single_selected_entry`},{id:`selectAll`,label:`select_all`,note:`selects_every_entry_in_the_current_folder`},{id:`invertSelection`,label:`invert_selection`,note:`selects_everything_that_is_not_selected`},{id:`open`,label:`open`,note:`opens_the_selected_folder_or_file`},{id:`newFolder`,label:`new_folder`,note:`creates_a_folder_in_the_current_directory`},{id:`properties`,label:`properties`,note:`opens_the_shell_properties_sheet`},{id:`iconsView`,label:`icons_view`,note:`switches_the_folder_to_the_grid_view`},{id:`detailsView`,label:`details_view`,note:`switches_the_folder_to_the_list_view`},{id:`terminal`,label:`open_terminal`,note:`opens_a_terminal_in_the_current_folder`},{id:`hidden`,label:`show_hidden_files`,note:`toggles_ordinary_hidden_files_for_this_session`},{id:`splitView`,label:`split_view`,note:`shows_the_next_file_tab_beside_the_current_one`},{id:`openInNewTab`,label:`open_in_a_new_tab`,note:`hold_this_while_clicking_a_folder`}],mn=`globalHotkey`,hn=[...pn,{id:mn,label:`global_hotkey`,note:`brings_the_window_forward_from_anywhere_while_the_app_is_running_empty_means_no_global_shortcut`}],gn=`en`,_n=[{id:`system`,label:`follow_system`},{id:`light`,label:`light`},{id:`dark`,label:`dark`}],vn=[{id:`system`,label:`system`},{id:`24`,label:`k_24_hour`},{id:`12`,label:`k_12_hour`},{id:`custom`,label:`custom`}],yn=new Date(2026,10,5,16,8).getTime(),bn=`system`,xn={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},T=[{id:`application`,label:`application`},{id:`share-access`,label:`share_access`},{id:`startup`,label:`startup`},{id:`fonts`,label:`fonts`},{id:`time`,label:`time_format`},{id:`updates`,label:`updates`},{id:`colors`,label:`colors`},{id:`background`,label:`background`},{id:`safety`,label:`safety`},{id:`tags`,label:`tags`},{id:`files-view`,label:`files_view`},{id:`shortcuts`,label:`shortcuts`},{id:`memory`,label:`memory`},{id:`overview`,label:`overview`},{id:`gallery`,label:`gallery`},{id:`icons`,label:`icons`},{id:`extension-icons`,label:`icons_by_extension`},{id:`folder-icons`,label:`folder_icons`},{id:`folder-index`,label:`folder_index`},{id:`indexing`,label:`index_tasks`},{id:`files`,label:`files`}],Sn={application:(0,C.jsx)(Tt,{size:13}),share_access:(0,C.jsx)(It,{size:13}),startup:(0,C.jsx)(Bt,{size:13}),fonts:(0,C.jsx)(wt,{size:13}),time_format:(0,C.jsx)(b,{size:13}),updates:(0,C.jsx)(y,{size:13}),colors:(0,C.jsx)(Ot,{size:13}),background:(0,C.jsx)(Ht,{size:13}),safety:(0,C.jsx)(xt,{size:13}),tags:(0,C.jsx)(Lt,{size:13}),files_view:(0,C.jsx)(Dt,{size:13}),shortcuts:(0,C.jsx)(St,{size:13}),memory:(0,C.jsx)(jt,{size:13}),overview:(0,C.jsx)(Ct,{size:13}),gallery:(0,C.jsx)(Ft,{size:13}),icons:(0,C.jsx)(bt,{size:13}),icons_by_extension:(0,C.jsx)(yt,{size:13}),folder_icons:(0,C.jsx)(Pt,{size:13}),folder_index:(0,C.jsx)(kt,{size:13}),index_tasks:(0,C.jsx)(zt,{size:13}),files:(0,C.jsx)(g,{size:13})},Cn=`yafm.colors.recent`;function wn(){let e=f(Cn);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function Tn({appInfo:e,focusSection:t,onSettingsChanged:n,find:r,onSearchMatches:i}){let a=l(),[u,ue]=(0,S.useState)([]),[f,pe]=(0,S.useState)(null),[me,ge]=(0,S.useState)(!1),[p,h]=(0,S.useState)(null),et=s(re(p?.themeMode)),[it,st]=(0,S.useState)(null),[lt,_t]=(0,S.useState)(``),[yt,bt]=(0,S.useState)(`file`),[xt,St]=(0,S.useState)(!1),[Ct,wt]=(0,S.useState)(!1),[g,Dt]=(0,S.useState)(null),[Ot,jt]=(0,S.useState)(Ve),[Nt,Ft]=(0,S.useState)(!1),[It,Lt]=(0,S.useState)(null),[b,zt]=(0,S.useState)(null),[Vt,Ht]=(0,S.useState)(null),[$t,en]=(0,S.useState)(!1),[tn,nn]=(0,S.useState)(null),[rn,an]=(0,S.useState)(!1),[on,sn]=(0,S.useState)(null),[w,cn]=(0,S.useState)(null),[ln,un]=(0,S.useState)(``),[dn,pn]=(0,S.useState)(!1),[xn,Tn]=(0,S.useState)([]),[Fn,O]=(0,S.useState)(null),[A,j]=(0,S.useState)(!1),[Zn,M]=(0,S.useState)(null),[Sr,Cr]=(0,S.useState)(``),[wr,Tr]=(0,S.useState)($e),[N,Er]=(0,S.useState)(null),[Dr,Or]=(0,S.useState)(null),[zr,Br]=(0,S.useState)(``),[Vr,Hr]=(0,S.useState)(``),[Qr,$r]=(0,S.useState)(null),[wi,Oi]=(0,S.useState)(wn),[ki,Ai]=(0,S.useState)({}),[K,ji]=(0,S.useState)(null),[q,Mi]=(0,S.useState)(null),[Ni,Pi]=(0,S.useState)(!1),[Fi,Ii]=(0,S.useState)(null),[J,Li]=(0,S.useState)(null),Ri=(0,S.useRef)(!1),[zi,Bi]=(0,S.useState)(null),[Vi,Hi]=(0,S.useState)(T[0].id),[Ui,Wi]=(0,S.useState)([]),[Gi,Ki]=(0,S.useState)(null),[qi,Ji]=(0,S.useState)(``),[Yi,Xi]=(0,S.useState)(!1),[Zi,Qi]=(0,S.useState)(null),[$i,ea]=(0,S.useState)(null),[ta,na]=(0,S.useState)(``),[ra,ia]=(0,S.useState)(null),[aa,oa]=(0,S.useState)(null),[sa,ca]=(0,S.useState)(null),[la,ua]=(0,S.useState)(!1),[da,fa]=(0,S.useState)(``),pa=(0,S.useRef)(null),ma=(0,S.useRef)({}),Y=p?.defaultView??le,ha=p?.themePresets??[],ga=e?.platform===`windows`,_a=ga?b?b.registered&&b.pathMatches:!1:p?.archiveHandler??!1,va=b?.registered??p?.archiveHandler??!1,ya=ga?Vt?Vt.registered&&Vt.pathMatches:!1:p?.defaultFileManager??!1,ba=ga?Ot.registered&&Ot.pathMatches:p?.linksEnabled??!1;vt(pa,r??null,`section`,i??(()=>void 0),[p]),(0,S.useEffect)(()=>{let e=pa.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){Hi(T[T.length-1].id);return}let n=t+110,r=T[0].id;for(let{id:e}of T){let t=ma.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}Hi(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let X=e=>t=>{ma.current[e]=t},xa=(0,S.useRef)(null),Sa=(0,S.useRef)(null),Ca=(0,S.useRef)(0),wa=()=>{if(Ca.current!==0)return;let e=()=>{let t=pa.current;if(!t||!Sa.current){Ca.current=0;return}let n=Math.min(Sa.current.top,t.scrollHeight-t.clientHeight),r=n-t.scrollTop;if(Math.abs(r)<.5){t.scrollTop=n,Sa.current=null,Ca.current=0;return}let i=Math.min(Math.abs(r)*.2,140);t.scrollTop+=Math.sign(r)*i,Ca.current=requestAnimationFrame(e)};Ca.current=requestAnimationFrame(e)},Ta=e=>{let t=pa.current,n=ma.current[e];t&&n&&(Sa.current={index:T.findIndex(t=>t.id===e),top:t.scrollTop+n.getBoundingClientRect().top-t.getBoundingClientRect().top},Hi(e),wa())};(0,S.useEffect)(()=>{let e=xa.current,t=e?.querySelector(`[data-section="${Vi}"]`);if(!e||!t)return;let n=e.getBoundingClientRect(),r=t.getBoundingClientRect();r.top<n.top?e.scrollTop+=r.top-n.top-6:r.bottom>n.bottom&&(e.scrollTop+=r.bottom-n.bottom+6)},[Vi]),(0,S.useEffect)(()=>{let e=pa.current;if(!e)return;let t=()=>{Sa.current=null};return e.addEventListener(`wheel`,t,{passive:!0}),e.addEventListener(`pointerdown`,t,{passive:!0}),()=>{e.removeEventListener(`wheel`,t),e.removeEventListener(`pointerdown`,t),cancelAnimationFrame(Ca.current)}},[]);let Ea=(0,S.useRef)(0),Da=e=>{let t=Math.sign(e.deltaY);if(t===0)return;let n=e.deltaMode!==0||Math.abs(e.deltaY)>=50,r=performance.now();if(!n&&r<Ea.current)return;Ea.current=r+220;let i=Sa.current?.index??T.findIndex(e=>e.id===Vi),a=Math.min(Math.max((i<0?0:i)+t,0),T.length-1);a!==(i<0?0:i)&&Ta(T[a].id)};(0,S.useEffect)(()=>{t&&Ta(t)},[t]),(0,S.useEffect)(()=>{o().then(e=>ue(e.available),()=>ue([]))},[]),(0,S.useEffect)(()=>{Re().then(Wi,()=>Wi([]))},[]),(0,S.useEffect)(()=>{Ge().then(oa,()=>oa(null))},[]),(0,S.useEffect)(()=>{Ke().then(Mi,()=>void 0)},[]),(0,S.useEffect)(()=>{de().then(pe,()=>pe(null)),ke().then(h,()=>h(null)),Le().then(jt,()=>jt(Ve)),De().then(zt,()=>zt(null)),ve().then(Ht,()=>Ht(null)),qt().then(Tn,()=>Tn([]))},[]),(0,S.useEffect)(()=>{let e=()=>void Be().then(Dt,()=>Dt(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let Z=async e=>{if(!p)return;let t={...p,...e};Object.keys(e).every(e=>t[e]===p[e])||(h(t),_e(),h(await Ee(t)),n())},Oa=e=>e?p?.backgroundLooks[e]??null:null,ka=e=>{let t=Oa(e);return{backgroundBlur:t?.blur??0,backgroundSaturation:t?.saturation??100,backgroundBrightness:t?.brightness??100}},Aa=e=>{let t={...e.backgroundLooks},n=e.backgroundSource;return n?e.backgroundBlur===0&&e.backgroundSaturation===100&&e.backgroundBrightness===100?(delete t[n],t):(t[n]={blur:e.backgroundBlur,saturation:e.backgroundSaturation,brightness:e.backgroundBrightness},t):t},ja=e=>{p&&Z({backgroundSource:e,backgroundLooks:Aa(p),...ka(e)})},Ma=e=>{p&&Z({...e,backgroundLooks:Aa({...p,...e})})},Na=()=>{if(!p)return;let e={...p.backgroundLooks};p.backgroundSource&&delete e[p.backgroundSource],Z({backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,backgroundLooks:e})},Pa=async e=>{let t=await Ze(e);if(!t||!p)return;let n=p.backgroundCustom,r=`file:${t}`;await Z({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:r,backgroundLooks:Aa(p),...ka(r)})},Fa=async()=>{let e=da.trim();if(!p||!ce(e))return;let t=p.backgroundCustom,n=`url:${e}`;fa(``),await Z({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:n,backgroundLooks:Aa(p),...ka(n)})},Ia=e=>{if(!p)return;let t=p.backgroundSource,n=t===`file:${e}`||t===`url:${e}`||t===e;Z({backgroundCustom:p.backgroundCustom.filter(t=>t!==e),...n?{backgroundSource:null,backgroundLooks:Aa(p),...ka(null)}:{}})},La=async()=>{if(!p)return;let t=await nt();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;p.protectedPaths.includes(r)||await Z({protectedPaths:[...p.protectedPaths,r]})},Ra=()=>{let e=zr.trim();p&&e&&!p.protectedPaths.includes(e)&&(Br(``),Z({protectedPaths:[...p.protectedPaths,e]}))},za=()=>{if(!p||!N)return;let e=N.value.trim(),t=N.from;Er(null),e.length!==0&&e!==t&&Z({protectedPaths:p.protectedPaths.map(n=>n===t?e:n)})},Ba=e=>{p&&Z({protectedPaths:p.protectedPaths.filter(t=>t!==e)})},Va=async()=>{let e=await Se();e.length>0&&await Z({protectedPaths:e})},Ha=()=>{if(!p||!Dr)return;let e=Dr.value.trim(),t=Dr.from;Or(null),e&&e!==t&&Z({directoryIndexBlacklist:p.directoryIndexBlacklist.map(n=>n===t?e:n)})},Ua=()=>{let e=Vr.trim();p&&e&&!p.directoryIndexBlacklist.includes(e)&&(Hr(``),Z({directoryIndexBlacklist:[...p.directoryIndexBlacklist,e]}))},Wa=async()=>{if(!p)return;let t=await nt();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;p.directoryIndexBlacklist.includes(r)||await Z({directoryIndexBlacklist:[...p.directoryIndexBlacklist,r]})},Ga=e=>{p&&Z({directoryIndexBlacklist:p.directoryIndexBlacklist.filter(t=>t!==e)})},Ka=()=>{Z({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},qa=()=>{if(!p||Qr===null)return;let e=Qr.trim()||`yyyy/MM/dd HH:mm`;$r(null),e!==p.timeFormatPattern&&Z({timeFormatPattern:e})},Ja=(e,t)=>{Oi(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return fe(Cn,i),i})},Q=ae(p?.accentColor,se),$=ae(p?.secondaryColor,oe),Ya=(e,t)=>{p&&(Ja(`accent`,Q),Ja(`secondary`,$),Z({accentColor:e,secondaryColor:t}))},Xa=(e,t)=>{p&&(Ja(e,e===`accent`?Q:$),Z(e===`accent`?{accentColor:t}:{secondaryColor:t}))},Za=async()=>{Pi(!0),Ii(null);try{Mi(await je())}catch{Ii(a(`could_not_check_for_updates`))}finally{Pi(!1)}},Qa=async()=>{Ri.current=!1,Ii(null),Li({phase:`changelog`,changelog:``,downloaded:0,total:0,percent:0});try{let e=await Ue();e.ok||$a(e.error??``)}catch(e){$a(e instanceof Error?e.message:String(e))}},$a=e=>Li(t=>t&&{...t,phase:`error`,error:e}),eo=()=>{Li(null),Fe().catch(e=>Ii(e instanceof Error?e.message:String(e)))},to=async()=>{Li(e=>e&&{...e,phase:`installing`});try{let e=await Ie();e.ok||$a(e.error??a(`the_update_failed`))}catch(e){$a(e instanceof Error?e.message:String(e))}};(0,S.useEffect)(()=>Me(e=>Li(t=>t&&{...t,phase:e.phase,downloaded:e.downloaded,total:e.total,percent:e.percent,error:e.error??t.error})),[]),(0,S.useEffect)(()=>Ne(e=>Li(t=>t&&{...t,changelog:e.text})),[]),(0,S.useEffect)(()=>{J?.phase!==`ready`||Ri.current||(Ri.current=!0,to())},[J?.phase]);let no=async()=>{if(!p||!K)return;let e=K.name.trim()||`${K.accent.toUpperCase()} / ${K.secondary.toUpperCase()}`,t=[...p.themePresets,{name:e,accent:K.accent,secondary:K.secondary}];ji(null),await Z({themePresets:t})},ro=async e=>{p&&await Z({themePresets:p.themePresets.filter((t,n)=>n!==e)})},io=e=>{let t=zi;Bi(null),t&&t.role===e&&(e===`accent`?Q:$).toLowerCase()!==t.color.toLowerCase()&&Ja(e,t.color)},ao=async()=>{let e=Sr.trim();if(e&&!A){j(!0),M(null);try{Tn(await Yt(e,wr)),Cr(``)}catch{M(a(`could_not_add_the_tag`))}finally{j(!1)}}},oo=async(e,t)=>{Tn(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Xt(e,t)||M(a(`could_not_change_the_tag_s_color`))},so=async e=>{if(A)return;j(!0),M(null);let t=await Jt(e);Tn(await qt()),t||M(`"${e}" is still used by a folder whose index could not be updated.`),j(!1)},co=async()=>{let e=Fn;if(!e||A)return;let t=e.value.trim();t.length===0||t===e.name?O(null):(j(!0),M(null),await Zt(e.name,t)?(Tn(await qt()),O(null)):M(`Could not rename "${e.name}".`),j(!1))},lo=async e=>{let t=new Set(Y.columns??le.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=dt.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await Z({defaultView:{...Y,columns:n}})},uo=async()=>{if(Nt)return;let e=!ba;Ft(!0),Lt(null);try{let t=await Je(e),r=t.registered&&t.pathMatches;jt(t),h(e=>e&&{...e,linksEnabled:r}),n(),r!==e&&Lt(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{Lt(`The request to Windows failed. Try again.`)}finally{Ft(!1)}},fo=async e=>{if(!me){ge(!0);try{pe(await he(e)),n()}finally{ge(!1)}}},po=async()=>{if(rn||!p)return;let e=!ya;an(!0),sn(null);try{let t=await Ce(e);Ht(t);let r=ga?t.registered&&t.pathMatches:e;h(e=>e&&{...e,defaultFileManager:r}),n(),ga&&r!==e&&sn(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{sn(`The request to Windows failed. Try again.`)}finally{an(!1)}},mo=async()=>{if(!$t){en(!0),nn(null);try{let e=await ye();zt(e);let t=e.registered&&e.pathMatches;h(e=>e&&{...e,archiveHandler:t}),n(),t||nn(`Windows did not accept the archive registration. Try again.`)}catch{nn(`The request to Windows failed. Try again.`)}finally{en(!1)}}},ho=async()=>{if(!$t){en(!0),nn(null);try{let e=await be();zt(e),h(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&nn(`The registration is still there. Try turning it off again.`)}catch{nn(`The request to Windows failed. Try again.`)}finally{en(!1)}}},go=async(e,t)=>{if(!p)return;let n={...p.extensionIcons};t===null?delete n[e]:n[e]=t,await Z({extensionIcons:n})};(0,S.useEffect)(()=>{ut().then(Qi,()=>void 0)},[]);let _o=mt(p?.shortcuts),vo=e=>e===mn?ft(p?.globalHotkey):_o[e],yo=(0,S.useMemo)(()=>{let e=new Map;for(let{id:t}of hn)for(let n of t===mn?ft(p?.globalHotkey):_o[t]){let r=e.get(n)??[];r.push(t),e.set(n,r)}return e},[_o,p?.globalHotkey]),bo=e=>{let t=new Set;for(let n of vo(e))for(let r of yo.get(n)??[]){if(r===e)continue;let n=hn.find(e=>e.id===r);n&&t.add(a(n.label))}return[...t]},xo=(e,t)=>{Z(e===mn?{globalHotkey:t.length>0?ct(t):null}:{shortcuts:{...p?.shortcuts,[e]:ct(t)}})},So=(e,t)=>{let n=[...vo(e)];n.splice(t,1),xo(e,n)};(0,S.useEffect)(()=>{if(!w)return;let e=e=>[`control`,`alt`,`shift`,`meta`].includes(e.toLowerCase()),t=e=>{let t=[...vo(w.action)];w.index>=0?t[w.index]=e:t.includes(e)||t.push(e),cn(null),un(``),xo(w.action,t)},n=n=>{if(n.preventDefault(),n.stopPropagation(),n.key===`Escape`){cn(null),un(``);return}if(e(n.key)){w.action===`openInNewTab`?t(rt(n)):un(rt(n));return}let r=rt(n);r&&t(r)},r=t=>{e(t.key)&&un(``)};return window.addEventListener(`keydown`,n,!0),window.addEventListener(`keyup`,r,!0),()=>{window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`keyup`,r,!0)}},[w,p]);let Co=async e=>{await Z({recentLimit:Math.min(Math.max(e,0),50)})},wo=(e,t)=>{let n=t??ki[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};Ai(t=>({...t,[e]:void 0})),Z(i)},To=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;Ki(null),await Z({sharePortMode:`custom`,sharePort:n}),await tt(n,`custom`)},Eo=async e=>{let t=e===`custom`,n=t?p?.sharePort??8080:null;await Z({sharePortMode:t?`custom`:`random`,sharePort:n}),await tt(n,t?`custom`:`random`)};(0,S.useEffect)(()=>{pt().then(Xi,()=>void 0)},[]);let Do=async()=>{qi.length!==0&&(Xi(await gt(qi)),Ji(``))},Oo=async()=>{Xi(await gt(null))},ko=async()=>{let e=await Ze([`.pfx`,`.p12`]);e&&(ea(e),na(``),ia(null))},Ao=async()=>{if($i)try{Qi(await ht($i,ta.length>0?ta:null)),ea(null),na(``),ia(null)}catch(e){ia(e instanceof Error?e.message:String(e))}},jo=async()=>{try{Qi(await ot()),ia(null)}catch(e){ia(e instanceof Error?e.message:String(e))}},Mo=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;ua(!0),ca(null);try{let e=await ze(t);oa(e),ca(e.error),e.error||await Z({startupMode:t})}finally{ua(!1)}},No=async e=>{await Z({galleryRoots:e.length>0?e:null})},Po=async()=>{let e=await nt(),t=p?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await No([...t,e])},Fo=async()=>{let e=lt.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await go(e,yt),_t(``))},Io=async()=>{wt(!0);try{let e=await nt();if(!e)return;let t=await Ze([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;let n=e.replace(/[\\/][^\\/]+$/,``),r=ie(e),i=`file:${t}`;await xe(n,r,i)&&(_e(),st({folder:e,icon:t}))}finally{wt(!1)}},Lo=async(e,t)=>{let n={...p?.fonts};t?n[e]=t:delete n[e],await Z({fonts:n})};return(0,C.jsxs)(Ln,{children:[(0,C.jsxs)(Rn,{ref:pa,children:[(0,C.jsxs)(D,{ref:X(`application`),children:[(0,C.jsx)(E,{note:`the_build_its_yafm_links_and_what_reopens_at_launch`,title:`application`}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(L,{children:a(`version`)}),(0,C.jsx)(V,{children:e?`v${e.version}`:`—`})]}),(0,C.jsxs)(P,{children:[(0,C.jsx)(L,{children:a(`platform`)}),(0,C.jsx)(V,{children:e?.platform??`—`})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`language`)}),(0,C.jsx)(z,{children:a(`the_language_the_interface_uses_english_is_the_default_the_system_option_follows_the_operating_system`)})]}),(0,C.jsx)(I,{children:(0,C.jsx)(Pn,{disabled:!p,onChange:e=>void Z({language:e}),options:[bn,...u.length>0?u:[gn]],value:p?.language??gn})})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`picker_window_size`)}),(0,C.jsx)(z,{children:a(`the_size_the_folder_and_file_picker_opens_at_width_and_height_are_in_pixels`)})]}),(0,C.jsxs)(I,{children:[(0,C.jsx)(Rr,{inputMode:`numeric`,onBlur:e=>wo(`width`,e.currentTarget.value),onChange:e=>Ai(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:ki.width??String(p?.pickerWindowWidth??1200)}),(0,C.jsx)(V,{children:`×`}),(0,C.jsx)(Rr,{inputMode:`numeric`,onBlur:e=>wo(`height`,e.currentTarget.value),onChange:e=>Ai(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:ki.height??String(p?.pickerWindowHeight??800)})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`web_server_port`)}),(0,C.jsx)(z,{children:a(`random_asks_the_operating_system_for_one_free_port_when_the_first_web_share_starts_and_every_web_share_keeps_using_it_custom_always_tries_the_port_below`)})]}),(0,C.jsx)(I,{children:(0,C.jsx)(Xe,{disabled:!p,onChange:e=>void Eo(e),options:[{value:`random`,label:a(`random`)},{value:`custom`,label:a(`custom_port`)}],value:p?.sharePortMode??`random`,width:160})})]}),p?.sharePortMode===`custom`&&(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`custom_port`)}),(0,C.jsx)(z,{children:a(`a_number_from_1_to_65535_if_it_is_already_in_use_the_app_asks_for_a_free_port_instead`)})]}),(0,C.jsx)(I,{children:(0,C.jsx)(Rr,{inputMode:`numeric`,onBlur:e=>void To(e.currentTarget.value),onChange:e=>Ki(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:Gi??(p?.sharePort?String(p.sharePort):``)})})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`link_paths`)}),(0,C.jsx)(z,{children:a(`relative_links_keep_working_when_the_link_and_its_target_move_together_absolute_links_always_store_the_full_target_path`)})]}),(0,C.jsx)(I,{children:(0,C.jsx)(Xe,{disabled:!p,onChange:e=>void Z({linkPathMode:e}),options:[{value:`relative`,label:a(`relative`)},{value:`absolute`,label:a(`absolute`)}],value:p?.linkPathMode??`relative`,width:160})})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`open_yafm_links`)}),(0,C.jsx)(z,{children:a(`registers_this_app_for_yafm_links_for_the_current_user_only_turning_it_on_writes_this_copy_s_path_starting_the_app_never_touches_the_registry`)}),Ot.registered&&!Ot.pathMatches&&(0,C.jsx)(B,{children:a(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:Ot.registeredPath??`?`})}),It&&(0,C.jsx)(B,{children:It})]}),(0,C.jsxs)(I,{children:[(0,C.jsx)(Lr,{$on:ba,children:a(ba?`active`:`off`)}),(0,C.jsx)(U,{$on:ba,disabled:Nt,onClick:()=>void uo(),title:a(ba?`stop_opening_yafm_links`:`open_yafm_links_with_this_app`),type:`button`,children:(0,C.jsx)(W,{})})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`use_as_the_default_file_manager`)}),(0,C.jsx)(z,{children:a(`registers_this_app_for_folder_opens_on_this_account_explorer_stays_available_from_the_context_menu_on_linux_this_sets_the_inode_directory_default`)}),Vt?.registered&&!Vt.pathMatches&&(0,C.jsx)(B,{children:a(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:Vt.registeredPath??`?`})}),on&&(0,C.jsx)(B,{children:on})]}),(0,C.jsxs)(I,{children:[(0,C.jsx)(Lr,{$on:ya,children:a(ya?`active`:`off`)}),(0,C.jsx)(U,{$on:ya,disabled:!p||rn,onClick:()=>void po(),title:a(ya?`stop_using_this_app_for_folders`:`use_this_app_for_folders`),type:`button`,children:(0,C.jsx)(W,{})})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`open_archives_with_this_app`)}),(0,C.jsx)(z,{children:a(`registers_this_app_for_zip_7z_rar_tar_and_the_other_archive_types_on_this_account_so_double_clicking_one_shows_it_as_a_folder_here_windows_may_still_ask_once_which_app_to_use`)}),(0,C.jsx)(z,{children:a(`when_this_is_off_opening_an_archive_uses_the_system_s_default_application_instead`)}),b?.registered&&!b.pathMatches&&(0,C.jsx)(B,{children:a(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:b.registeredPath??`?`})}),tn&&(0,C.jsx)(B,{children:tn})]}),(0,C.jsxs)(I,{children:[(0,C.jsx)(Lr,{$on:_a,children:a(_a?`active`:`off`)}),(0,C.jsxs)(G,{disabled:!p||$t||_a,onClick:()=>void mo(),type:`button`,children:[(0,C.jsx)(Rt,{size:13}),a(`register`)]}),e?.platform===`windows`&&(0,C.jsxs)(G,{onClick:()=>void Ae(`ms-settings:defaultapps`),type:`button`,children:[(0,C.jsx)(Tt,{size:13}),a(`default_apps`)]}),(0,C.jsxs)(Ir,{disabled:!p||$t||!va,onClick:()=>void ho(),type:`button`,children:[(0,C.jsx)(x,{size:13}),a(`unregister`)]})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`reopen_the_tabs_that_were_open`)}),(0,C.jsx)(z,{children:a(`keeps_the_tabs_and_the_folder_each_one_shows_so_they_come_back_after_a_restart_a_folder_passed_on_the_command_line_takes_over_instead`)})]}),(0,C.jsx)(U,{$on:p?.restoreTabs??!0,disabled:!p,onClick:()=>void Z({restoreTabs:!p?.restoreTabs}),type:`button`,children:(0,C.jsx)(W,{})})]})]})]}),(0,C.jsxs)(D,{ref:X(`share-access`),children:[(0,C.jsx)(E,{note:`share_access_note`,title:`share_access`}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsxs)(R,{children:[(0,C.jsx)(L,{children:a(`share_access_require_approval`)}),(0,C.jsx)(m,{})]}),(0,C.jsx)(z,{children:a(`share_access_note`)})]}),(0,C.jsx)(U,{$on:p?.shareAccessEnabled??!0,disabled:!p,onClick:()=>void Z({shareAccessEnabled:!(p?.shareAccessEnabled??!0)}),type:`button`,children:(0,C.jsx)(W,{})})]}),(0,C.jsxs)(P,{children:[(0,C.jsx)(F,{children:(0,C.jsx)(L,{children:a(`share_access_approval_minutes`)})}),(0,C.jsx)(I,{children:(0,C.jsx)(kr,{max:1440,min:1,onChange:e=>void Z({shareApprovalMinutes:Math.min(1440,Math.max(1,Number(e.target.value)||60))}),type:`number`,value:p?.shareApprovalMinutes??60})})]}),(0,C.jsxs)(P,{children:[(0,C.jsx)(F,{children:(0,C.jsx)(L,{children:a(`share_access_denial_seconds`)})}),(0,C.jsx)(I,{children:(0,C.jsx)(kr,{max:3600,min:1,onChange:e=>void Z({shareDenialSeconds:Math.min(3600,Math.max(1,Number(e.target.value)||10))}),type:`number`,value:p?.shareDenialSeconds??10})})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(R,{children:(0,C.jsx)(L,{children:a(`password`)})}),(0,C.jsx)(z,{children:a(`share_access_password_note`)}),Yi&&(0,C.jsx)(z,{children:a(`share_access_password_is_set`)})]}),(0,C.jsxs)(I,{children:[(0,C.jsx)(Ar,{autoComplete:`new-password`,onChange:e=>Ji(e.target.value),placeholder:a(`password`),type:`password`,value:qi}),(0,C.jsxs)(G,{disabled:qi.length===0,onClick:()=>void Do(),type:`button`,children:[(0,C.jsx)(_,{size:13}),a(`save`)]}),Yi&&(0,C.jsxs)(Ir,{onClick:()=>void Oo(),type:`button`,children:[(0,C.jsx)(x,{size:13}),a(`clear`)]})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`share_access_https`)}),(0,C.jsx)(z,{children:a(`share_access_https_note`)})]}),(0,C.jsxs)(I,{children:[(0,C.jsx)(Lr,{$on:p?.shareHttps??!1,children:p?.shareHttps?a(`active`):a(`off`)}),(0,C.jsx)(U,{$on:p?.shareHttps??!1,disabled:!p,onClick:()=>void Z({shareHttps:!(p?.shareHttps??!1)}),title:p?.shareHttps?a(`share_access_https_off`):a(`share_access_https_on`),type:`button`,children:(0,C.jsx)(W,{})})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`share_access_certificate`)}),(0,C.jsx)(z,{children:Zi?`${Zi.subject} · ${a(`share_access_expires`)}: ${new Date(Zi.expiresAt).toLocaleString()}`:a(`share_access_certificate_self_signed`)}),Zi&&(0,C.jsx)(z,{children:Zi.selfSigned?a(`share_access_certificate_self_signed`):a(`share_access_certificate_imported`)}),ra&&(0,C.jsx)(B,{children:ra})]}),(0,C.jsxs)(I,{children:[(0,C.jsx)(H,{onClick:()=>void ko(),type:`button`,children:a(`share_access_import_certificate`)}),(0,C.jsx)(H,{onClick:()=>void jo(),type:`button`,children:a(`share_access_reset_certificate`)})]})]}),$i&&(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`password`)}),(0,C.jsx)(z,{children:$i})]}),(0,C.jsxs)(I,{children:[(0,C.jsx)(Ar,{autoComplete:`off`,onChange:e=>na(e.target.value),placeholder:a(`password`),type:`password`,value:ta}),(0,C.jsx)(H,{onClick:()=>void Ao(),type:`button`,children:a(`ok`)}),(0,C.jsx)(H,{onClick:()=>ea(null),type:`button`,children:a(`cancel`)})]})]}),(0,C.jsx)(P,{children:(0,C.jsxs)(F,{children:[(0,C.jsx)(R,{children:(0,C.jsx)(L,{children:a(`devices`)})}),(0,C.jsx)(z,{children:a(`share_access_devices_note`)})]})}),(0,C.jsx)(En,{approvalMinutes:p?.shareApprovalMinutes??60,denialSeconds:p?.shareDenialSeconds??10})]})]}),(0,C.jsxs)(D,{ref:X(`startup`),children:[(0,C.jsx)(E,{note:`how_the_app_joins_your_login_session_and_whether_it_opens_quietly_in_the_tray`,title:`startup`}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`start_with_the_computer`)}),(0,C.jsx)(z,{children:a(`a_shortcut_uses_the_startup_folder_or_xdg_autostart_a_task_uses_task_scheduler_or_a_systemd_user_service_which_starts_earlier_and_is_usually_faster`)}),sa&&(0,C.jsx)(B,{children:sa}),aa&&!aa.supported&&(0,C.jsx)(B,{children:a(`this_platform_cannot_create_a_per_user_startup_entry`)})]}),(0,C.jsx)(I,{children:(0,C.jsx)(Xe,{disabled:!p||la||aa!==null&&!aa.supported,onChange:e=>void Mo(e),options:[{value:`none`,label:a(`none`)},{value:`shortcut`,label:a(`shortcut`)},{value:`task`,label:a(`scheduled_task`)}],value:aa?.mode??p?.startupMode??`none`,width:170})})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`start_hidden_in_the_tray`)}),(0,C.jsx)(z,{children:a(`launch_straight_to_the_tray_icon_instead_of_showing_the_window_the_tray_menu_opens_it_again`)})]}),(0,C.jsx)(I,{children:(0,C.jsx)(U,{$on:p?.startHidden??!1,disabled:!p,onClick:()=>void Z({startHidden:!p?.startHidden}),type:`button`,children:(0,C.jsx)(W,{})})})]})]})]}),(0,C.jsxs)(D,{ref:X(`fonts`),children:[(0,C.jsx)(E,{note:`choose_the_font_each_part_of_the_interface_uses_every_font_installed_on_this_system_is_listed_each_one_drawn_in_its_own_face`,title:`fonts`}),(0,C.jsxs)(k,{children:[He.map(e=>(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(e.label)}),(0,C.jsx)(z,{children:a(`falls_back_to_font_until_another_family_is_chosen`,{font:a(e.fallback)})})]}),(0,C.jsx)(I,{children:(0,C.jsx)(Qt,{defaultLabel:a(e.fallback),disabled:!p,fonts:Ui,onChange:t=>void Lo(e.id,t),sample:e.sample,value:p?.fonts?.[e.id]??null})})]},e.id)),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`reset`)}),(0,C.jsx)(z,{children:a(`back_to_the_app_s_built_in_font_for_every_role`)})]}),(0,C.jsx)(I,{children:(0,C.jsxs)(G,{onClick:()=>void Z({fonts:{}}),type:`button`,children:[(0,C.jsx)(y,{size:13}),a(`reset`)]})})]})]})]}),(0,C.jsxs)(D,{ref:X(`time`),children:[(0,C.jsx)(E,{note:`every_timestamp_in_the_interface_uses_this_format_follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`,title:`time_format`}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(Bn,{children:[(0,C.jsxs)(Vn,{children:[(0,C.jsx)(L,{children:a(`format`)}),(0,C.jsx)(z,{children:a(`follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`)})]}),(0,C.jsx)(ui,{children:vn.map(e=>(0,C.jsx)(di,{$active:(p?.timeFormat??`24`)===e.id,onClick:()=>void Z({timeFormat:e.id}),type:`button`,children:a(e.label)},e.id))}),(p?.timeFormat??`24`)===`custom`&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(fi,{"aria-label":a(`pattern`),onBlur:qa,onChange:e=>$r(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),qa()):e.key===`Escape`&&$r(null)},spellCheck:!1,value:Qr??p?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,C.jsx)(z,{children:a(`tokens_yyyy_year_mm_month_dd_day_hh_24_hour_mm_minute_ss_second_hh_12_hour_and_a_am_pm_other_characters_are_copied`)})]}),(0,C.jsxs)(pi,{children:[(0,C.jsx)(`span`,{children:a(`preview`)}),(0,C.jsx)(`code`,{children:ne(yn,p?.timeFormat,Qr??p?.timeFormatPattern)})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`relative_times`)}),(0,C.jsx)(z,{children:a(`shows_recent_timestamps_as_seconds_and_minutes_ago_and_keeps_them_counting`)})]}),(0,C.jsxs)(I,{children:[(0,C.jsx)(Lr,{$on:p?.relativeTime??!0,children:p?.relativeTime??!0?a(`active`):a(`off`)}),(0,C.jsx)(U,{$on:p?.relativeTime??!0,disabled:!p,onClick:()=>void Z({relativeTime:!(p?.relativeTime??!0)}),title:a(`show_recent_timestamps_as_seconds_and_minutes_ago`),type:`button`,children:(0,C.jsx)(W,{})})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`switch_to_the_full_time_after`)}),(0,C.jsx)(z,{children:a(`older_timestamps_use_the_format_above_instead_of_a_relative_one`)})]}),(0,C.jsxs)(I,{children:[(0,C.jsx)(Kr,{disabled:!(p?.relativeTime??!0),max:1440,min:1,onChange:e=>void Z({relativeTimeWindowMinutes:Number(e.target.value)}),step:1,type:`range`,value:p?.relativeTimeWindowMinutes??60}),(0,C.jsxs)(V,{children:[p?.relativeTimeWindowMinutes??60,` min`]})]})]})]})]}),(0,C.jsxs)(D,{ref:X(`updates`),children:[(0,C.jsx)(E,{note:`the_running_build_and_the_newest_one_published`,title:`updates`}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(P,{children:[(0,C.jsx)(L,{children:a(`current_version`)}),(0,C.jsx)(V,{children:e?`v${e.version}`:`—`})]}),(0,C.jsxs)(P,{children:[(0,C.jsx)(L,{children:a(`latest_version`)}),(0,C.jsx)(V,{children:q?`v${q.latest}`:`—`})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:q?q.available?a(`version_version_is_available`,{version:q.latest}):a(`you_are_on_the_latest_version`):a(`not_checked_yet`)}),(0,C.jsx)(z,{children:q?.available?a(`the_installer_downloads_installs_itself_and_closes_the_app`):a(`reads_the_version_file_the_release_workflow_publishes`)})]}),(0,C.jsxs)(I,{children:[q?.available&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(G,{onClick:()=>void We(),type:`button`,children:[(0,C.jsx)(Et,{size:13}),a(`open_release_page`)]}),ga&&(0,C.jsxs)(G,{disabled:J!==null,onClick:()=>void Qa(),type:`button`,children:[(0,C.jsx)(Ut,{size:13}),a(`download_and_install`)]})]}),(0,C.jsxs)(G,{disabled:Ni||J!==null,onClick:()=>void Za(),type:`button`,children:[(0,C.jsx)(y,{size:13}),a(Ni?`checking`:`check_for_updates`)]}),(0,C.jsxs)(G,{onClick:()=>void Pe(),type:`button`,children:[(0,C.jsx)(Pt,{size:13}),a(`open_log_folder`)]})]})]}),Fi&&(0,C.jsx)(P,{children:(0,C.jsx)(B,{children:Fi})})]})]}),(0,C.jsxs)(D,{ref:X(`colors`),children:[(0,C.jsx)(E,{note:`the_accent_and_highlight_colours_the_whole_window_uses`,title:`colors`}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(Bn,{children:[(0,C.jsxs)(Vn,{children:[(0,C.jsx)(L,{children:a(`theme`)}),(0,C.jsx)(z,{children:a(`follow_the_operating_system_or_always_use_the_light_or_dark_palette`)})]}),(0,C.jsx)(ui,{children:_n.map(e=>(0,C.jsx)(di,{$active:(p?.themeMode??`system`)===e.id,onClick:()=>void Z({themeMode:e.id}),type:`button`,children:a(e.label)},e.id))})]}),(0,C.jsxs)(Bn,{children:[(0,C.jsxs)(Vn,{children:[(0,C.jsx)(L,{children:a(`presets`)}),(0,C.jsx)(z,{children:a(`one_click_changes_the_accent_and_the_highlight_together`)})]}),(0,C.jsxs)(Hn,{children:[Te.map(e=>(0,C.jsxs)(Un,{$on:Q.toLowerCase()===e.accent&&$.toLowerCase()===e.secondary,onClick:()=>Ya(e.accent,e.secondary),title:`${a(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,C.jsxs)(Xn,{children:[(0,C.jsx)(`i`,{style:{background:e.accent}}),(0,C.jsx)(`i`,{style:{background:e.secondary}})]}),(0,C.jsx)(Wn,{children:a(e.name)})]},e.name)),ha.map((e,t)=>(0,C.jsxs)(Gn,{children:[(0,C.jsxs)(Un,{$on:Q.toLowerCase()===e.accent.toLowerCase()&&$.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>Ya(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,C.jsxs)(Xn,{children:[(0,C.jsx)(`i`,{style:{background:e.accent}}),(0,C.jsx)(`i`,{style:{background:e.secondary}})]}),(0,C.jsx)(Wn,{children:e.name})]}),(0,C.jsx)(Kn,{onClick:()=>void ro(t),title:a(`remove_preset`),type:`button`,children:(0,C.jsx)(x,{size:9})})]},`${e.name}-${t}`)),K?(0,C.jsxs)(Jn,{children:[(0,C.jsxs)(Xn,{children:[(0,C.jsx)(`i`,{style:{background:K.accent}}),(0,C.jsx)(`i`,{style:{background:K.secondary}})]}),(0,C.jsx)(Yn,{autoFocus:!0,maxLength:24,onChange:e=>ji({...K,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),no()):e.key===`Escape`&&(e.preventDefault(),ji(null))},placeholder:a(`preset_name`),spellCheck:!1,value:K.name}),(0,C.jsxs)(H,{onClick:()=>void no(),type:`button`,children:[(0,C.jsx)(_,{size:13}),a(`save`)]}),(0,C.jsxs)(H,{onClick:()=>ji(null),type:`button`,children:[(0,C.jsx)(x,{size:13}),a(`cancel`)]})]}):(0,C.jsxs)(qn,{disabled:!p,onClick:()=>ji({name:``,accent:Q,secondary:$}),title:a(`save_the_current_colours_as_a_preset`),type:`button`,children:[(0,C.jsx)(v,{size:12}),a(`add_preset`)]})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`accent_color`)}),(0,C.jsx)(z,{children:a(`buttons_selections_focus_rings_and_active_navigation`)})]}),(0,C.jsxs)(I,{children:[(0,C.jsx)(In,{colors:wi.accent,current:Q,onApply:e=>Xa(`accent`,e)}),(0,C.jsx)(Pr,{"aria-label":a(`accent_color`),disabled:!p,onBlur:()=>io(`accent`),onChange:e=>void Z({accentColor:e.target.value}),onFocus:()=>Bi({role:`accent`,color:Q}),type:`color`,value:Q}),(0,C.jsx)(Fr,{children:Q.toUpperCase()})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`secondary_color`)}),(0,C.jsx)(z,{children:a(`gradients_highlights_and_the_second_end_of_the_accent_ramp`)})]}),(0,C.jsxs)(I,{children:[(0,C.jsx)(In,{colors:wi.secondary,current:$,onApply:e=>Xa(`secondary`,e)}),(0,C.jsx)(Pr,{"aria-label":a(`secondary_color`),disabled:!p,onBlur:()=>io(`secondary`),onChange:e=>void Z({secondaryColor:e.target.value}),onFocus:()=>Bi({role:`secondary`,color:$}),type:`color`,value:$}),(0,C.jsx)(Fr,{children:$.toUpperCase()})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`reset_colors`)}),(0,C.jsx)(z,{children:a(`returns_the_interface_to_the_default_blue_and_indigo_theme`)})]}),(0,C.jsx)(I,{children:(0,C.jsxs)(H,{disabled:!p,onClick:()=>{Ja(`accent`,Q),Ja(`secondary`,$),Z({accentColor:null,secondaryColor:null})},type:`button`,children:[(0,C.jsx)(y,{size:13}),a(`reset`)]})})]})]})]}),(0,C.jsxs)(D,{ref:X(`background`),children:[(0,C.jsx)(E,{note:`a_picture_or_video_behind_the_whole_window_from_the_title_bar_to_the_bottom`,title:`background`}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(Bn,{children:[(0,C.jsxs)(Vn,{children:[(0,C.jsx)(L,{children:a(`wallpaper`)}),(0,C.jsx)(z,{children:a(`none_keeps_the_normal_dark_surface_every_built_in_concept_comes_in_the_app_s_colour_presets_your_own_pictures_sv_gs_and_videos_are_kept_in_the_gallery`)})]}),(0,C.jsx)(Xr,{children:(0,C.jsx)(Zr,{$active:!p?.backgroundSource,onClick:()=>ja(null),title:a(`none`),type:`button`,children:(0,C.jsx)(ni,{children:a(`none`)})})}),(0,C.jsxs)(qr,{children:[Oe.map(e=>(0,C.jsxs)(Jr,{children:[(0,C.jsx)(Yr,{children:a(e.name)}),(0,C.jsx)(Xr,{children:e.variants.map(t=>(0,C.jsx)(Zr,{$active:p?.backgroundSource===t.id,onClick:()=>ja(t.id),title:`${a(e.name)} · ${a(t.preset)}`,type:`button`,children:(0,C.jsx)(`img`,{alt:``,src:et===`light`?t.lightUrl:t.url})},t.id))})]},e.id)),(0,C.jsxs)(Jr,{children:[(0,C.jsx)(Yr,{children:a(`motion`)}),(0,C.jsx)(Xr,{children:we.map(e=>(0,C.jsxs)(Zr,{$active:p?.backgroundSource===e.id,onClick:()=>ja(e.id),title:a(e.name),type:`button`,children:[(0,C.jsx)(`img`,{alt:``,src:e.poster}),(0,C.jsx)(ei,{children:(0,C.jsx)(Wt,{size:11})})]},e.id))})]}),(0,C.jsxs)(Jr,{children:[(0,C.jsx)(Yr,{children:a(`custom`)}),(0,C.jsxs)(Xr,{children:[(p?.backgroundCustom??[]).map(e=>(0,C.jsx)(Nn,{active:p?.backgroundSource===`file:${e}`||p?.backgroundSource===`url:${e}`||p?.backgroundSource===e,onRemove:()=>Ia(e),onSelect:()=>ja(ce(e)?`url:${e}`:`file:${e}`),path:e},e)),(0,C.jsxs)(ti,{onClick:()=>void Pa([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,C.jsx)(v,{size:12}),a(`image_2`)]}),(0,C.jsxs)(ti,{onClick:()=>void Pa([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,C.jsx)(v,{size:12}),a(`video`)]})]})]})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`image_or_video_url`)}),(0,C.jsx)(z,{children:a(`paste_a_direct_http_s_link_the_picture_or_video_is_loaded_from_the_network_each_time_the_window_starts`)})]}),(0,C.jsxs)(I,{children:[(0,C.jsx)(Rr,{onChange:e=>fa(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Fa()},placeholder:`https://…`,value:da}),(0,C.jsxs)(H,{disabled:!ce(da),onClick:()=>void Fa(),type:`button`,children:[(0,C.jsx)(v,{size:13}),a(`add`)]})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsx)(L,{children:a(`blur`)}),(0,C.jsxs)(I,{children:[(0,C.jsx)(Kr,{max:40,min:0,onChange:e=>Ma({backgroundBlur:Number(e.target.value)}),type:`range`,value:p?.backgroundBlur??0}),(0,C.jsxs)(V,{children:[p?.backgroundBlur??0,`px`]})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsx)(L,{children:a(`saturation`)}),(0,C.jsxs)(I,{children:[(0,C.jsx)(Kr,{max:200,min:0,onChange:e=>Ma({backgroundSaturation:Number(e.target.value)}),type:`range`,value:p?.backgroundSaturation??100}),(0,C.jsxs)(V,{children:[p?.backgroundSaturation??100,`%`]})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsx)(L,{children:a(`brightness`)}),(0,C.jsxs)(I,{children:[(0,C.jsx)(Kr,{max:150,min:40,onChange:e=>Ma({backgroundBrightness:Number(e.target.value)}),type:`range`,value:p?.backgroundBrightness??100}),(0,C.jsxs)(V,{children:[p?.backgroundBrightness??100,`%`]})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`reset_the_look`)}),(0,C.jsx)(z,{children:a(`returns_this_background_to_the_default_blur_saturation_and_brightness`)})]}),(0,C.jsx)(I,{children:(0,C.jsxs)(H,{disabled:!p||p.backgroundBlur===0&&p.backgroundSaturation===100&&p.backgroundBrightness===100&&!Oa(p.backgroundSource),onClick:Na,type:`button`,children:[(0,C.jsx)(y,{size:13}),a(`reset`)]})})]})]})]}),(0,C.jsxs)(D,{ref:X(`safety`),children:[(0,C.jsx)(E,{note:`deleting_moving_renaming_or_writing_to_a_protected_folder_anything_inside_a_recursive_entry_or_a_folder_that_contains_one_always_waits_for_an_explicit_confirmation`,title:`safety`}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(Bn,{children:[(0,C.jsxs)(Vn,{children:[(0,C.jsx)(L,{children:a(`protected_folders`)}),(0,C.jsx)(z,{children:a(`rules_are_full_path_globs_stays_inside_one_name_crosses_folders_and_matches_one_character_a_rule_without_a_folder_part_such_as_log_applies_to_that_name_at_any_depth_vars_vars_and_are_expanded_first`)})]}),(0,C.jsx)(ri,{children:(p?.protectedPaths??[]).map(e=>(0,C.jsxs)(ii,{children:[(0,C.jsx)(ai,{"aria-label":a(`protected_path`),onBlur:za,onChange:t=>Er({from:e,value:t.target.value}),onFocus:()=>Er({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),za()):e.key===`Escape`&&Er(null)},spellCheck:!1,value:N?.from===e?N.value:e}),(0,C.jsx)(oi,{onClick:()=>Ba(e),title:a(`remove`),type:`button`,children:(0,C.jsx)(x,{size:10})})]},e))}),(0,C.jsxs)(ci,{children:[(0,C.jsx)(li,{"aria-label":a(`new_protected_rule`),onChange:e=>Br(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ra())},placeholder:`*.log`,spellCheck:!1,value:zr}),(0,C.jsxs)(H,{onClick:Ra,type:`button`,children:[(0,C.jsx)(v,{size:13}),a(`add_the_rule`)]})]}),(0,C.jsxs)(si,{children:[(0,C.jsxs)(H,{onClick:()=>void Va(),type:`button`,children:[(0,C.jsx)(y,{size:13}),a(`restore_defaults`)]}),(0,C.jsxs)(H,{onClick:()=>void La(),type:`button`,children:[(0,C.jsx)(Pt,{size:13}),a(`add_folder_2`)]})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`confirmation_delay`)}),(0,C.jsx)(z,{children:a(`the_delete_button_in_the_protected_folder_dialog_stays_disabled_for_this_many_seconds_at_least_2`)})]}),(0,C.jsxs)(I,{children:[(0,C.jsx)(Kr,{max:30,min:2,onChange:e=>void Z({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:p?.deleteDelaySeconds??5}),(0,C.jsxs)(V,{children:[p?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,C.jsxs)(D,{ref:X(`tags`),children:[(0,C.jsx)(E,{note:`every_tag_in_the_catalogue_add_rename_recolour_or_remove_them_here`,title:`tags`}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsxs)(R,{children:[(0,C.jsx)(Mr,{"aria-label":a(`color_of_the_new_tag`),onChange:e=>Tr(e.target.value),type:`color`,value:wr}),(0,C.jsx)(Rr,{onChange:e=>Cr(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),ao())},placeholder:a(`new_tag`),spellCheck:!1,value:Sr})]}),(0,C.jsx)(z,{children:a(`add_a_tag_here_it_is_available_in_every_folder`)})]}),(0,C.jsx)(I,{children:(0,C.jsxs)(H,{disabled:A||Sr.trim().length===0,onClick:()=>void ao(),type:`button`,children:[(0,C.jsx)(v,{size:13}),a(`add`)]})})]}),Zn&&(0,C.jsx)(P,{children:(0,C.jsx)(B,{children:Zn})}),xn.length===0&&(0,C.jsx)(P,{children:(0,C.jsx)(z,{children:a(`no_tags_yet_add_one_below_it_is_available_in_every_folder`)})}),xn.map(e=>(0,C.jsx)(P,{children:Fn?.name===e.name?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(F,{children:[(0,C.jsxs)(R,{children:[(0,C.jsx)(Mr,{"aria-label":a(`color_of_tag`,{tag:e.name}),onChange:t=>void oo(e.name,t.target.value),title:a(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,C.jsx)(Nr,{autoFocus:!0,disabled:A,onChange:t=>O({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),co()):e.key===`Escape`&&(e.preventDefault(),O(null))},value:Fn.value})]}),(0,C.jsx)(z,{children:a(`press_enter_to_save_escape_to_cancel`)})]}),(0,C.jsxs)(I,{children:[(0,C.jsxs)(H,{disabled:A,onClick:()=>void co(),type:`button`,children:[(0,C.jsx)(_,{size:13}),a(`save`)]}),(0,C.jsxs)(H,{disabled:A,onClick:()=>O(null),type:`button`,children:[(0,C.jsx)(x,{size:13}),a(`cancel`)]})]})]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(F,{children:[(0,C.jsxs)(R,{children:[(0,C.jsx)(Mr,{"aria-label":a(`color_of_tag`,{tag:e.name}),onChange:t=>void oo(e.name,t.target.value),title:a(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,C.jsx)(L,{children:e.name})]}),(0,C.jsx)(z,{children:te(a,e.folders,`used_in_1_folder_renaming_or_removing_it_updates_that_folder_s_index`,`used_in_count_folders_renaming_or_removing_it_updates_those_folders_indexes`)})]}),(0,C.jsxs)(I,{children:[(0,C.jsxs)(H,{disabled:A,onClick:()=>O({name:e.name,value:e.name}),type:`button`,children:[(0,C.jsx)(Mt,{size:13}),a(`edit`)]}),(0,C.jsxs)(Ir,{disabled:A,onClick:()=>void so(e.name),type:`button`,children:[(0,C.jsx)(At,{size:13}),a(`remove`)]})]})]})},e.name))]})]}),(0,C.jsxs)(D,{ref:X(`files-view`),children:[(0,C.jsx)(E,{note:`the_defaults_every_folder_starts_with_a_folder_can_still_override_them`,title:`files_view`,global:!0}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`default_view`)}),(0,C.jsx)(z,{children:a(`the_mode_every_folder_starts_with_a_folder_can_still_remember_its_own_list_or_grid_mode_from_the_title_bar`)})]}),(0,C.jsx)(I,{children:(0,C.jsxs)(Wr,{children:[(0,C.jsx)(Gr,{$on:Y.mode===`list`,onClick:()=>void Z({defaultView:{...Y,mode:`list`}}),type:`button`,children:a(`list`)}),(0,C.jsx)(Gr,{$on:Y.mode===`grid`,onClick:()=>void Z({defaultView:{...Y,mode:`grid`}}),type:`button`,children:a(`grid`)})]})})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`list_icon_size`)}),(0,C.jsx)(z,{children:a(`the_icon_in_the_list_rows`)})]}),(0,C.jsxs)(I,{children:[(0,C.jsx)(Kr,{max:48,min:16,onChange:e=>void Z({defaultView:{...Y,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Y.iconSize}),(0,C.jsxs)(V,{children:[Y.iconSize,`px`]})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`grid_size`)}),(0,C.jsx)(z,{children:a(`the_height_of_a_grid_tile_the_icon_inside_follows_it`)})]}),(0,C.jsxs)(I,{children:[(0,C.jsx)(Kr,{max:260,min:100,onChange:e=>void Z({defaultView:{...Y,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Y.gridSize}),(0,C.jsxs)(V,{children:[Y.gridSize,`px`]})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsxs)(R,{children:[(0,C.jsx)(L,{children:a(`selection_checkboxes`)}),(0,C.jsx)(m,{})]}),(0,C.jsx)(z,{children:a(`show_a_checkbox_before_every_name_the_way_explorer_does_checked_entries_can_be_copied_cut_or_deleted_together`)})]}),(0,C.jsx)(U,{$on:p?.showCheckboxes??!0,disabled:!p,onClick:()=>void Z({showCheckboxes:!(p?.showCheckboxes??!0)}),type:`button`,children:(0,C.jsx)(W,{})})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsxs)(R,{children:[(0,C.jsx)(L,{children:a(`open_with_a_single_click`)}),(0,C.jsx)(m,{})]}),(0,C.jsx)(z,{children:a(`off_means_double_click_like_explorer_s_default_the_checkbox_still_only_selects_so_a_click_on_it_never_opens_the_entry`)})]}),(0,C.jsx)(U,{$on:p?.openOnSingleClick??!1,disabled:!p,onClick:()=>void Z({openOnSingleClick:!(p?.openOnSingleClick??!1)}),type:`button`,children:(0,C.jsx)(W,{})})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsxs)(R,{children:[(0,C.jsx)(L,{children:a(`open_the_file_tray_while_dragging`)}),(0,C.jsx)(m,{})]}),(0,C.jsx)(z,{children:a(`the_tray_appears_when_a_drag_starts_and_closes_again_if_it_is_still_empty_off_leaves_it_to_the_title_bar_button`)})]}),(0,C.jsx)(U,{$on:p?.trayAutoShow??!0,disabled:!p,onClick:()=>void Z({trayAutoShow:!(p?.trayAutoShow??!0)}),type:`button`,children:(0,C.jsx)(W,{})})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsxs)(R,{children:[(0,C.jsx)(L,{children:a(`confirm_before_deleting`)}),(0,C.jsx)(m,{})]}),(0,C.jsx)(z,{children:a(`asks_before_moving_items_to_the_recycle_bin_shift_del_always_asks_because_that_deletes_permanently`)})]}),(0,C.jsx)(U,{$on:p?.confirmDelete??!1,disabled:!p,onClick:()=>void Z({confirmDelete:!(p?.confirmDelete??!1)}),type:`button`,children:(0,C.jsx)(W,{})})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsxs)(R,{children:[(0,C.jsx)(L,{children:a(`automatic_rename_suffix`)}),(0,C.jsx)(m,{})]}),(0,C.jsx)(z,{children:a(`the_suffix_added_when_a_copy_or_a_new_item_would_have_the_same_name`)})]}),(0,C.jsx)(I,{children:(0,C.jsx)(Xe,{disabled:!p,onChange:e=>void Z({conflictNameStyle:e}),options:[{value:`space_parentheses`,label:`Test (1).txt`},{value:`underscore`,label:`Test_1.txt`},{value:`dot`,label:`Test.1.txt`}],value:p?.conflictNameStyle??`space_parentheses`,width:160})})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsxs)(R,{children:[(0,C.jsx)(L,{children:a(`play_audio_in_video_previews`)}),(0,C.jsx)(m,{})]}),(0,C.jsx)(z,{children:a(`video_previews_play_muted_by_default_turn_this_on_to_hear_their_audio_while_the_details_panel_is_open`)})]}),(0,C.jsx)(U,{$on:p?.previewVideoAudio??!1,disabled:!p,onClick:()=>void Z({previewVideoAudio:!(p?.previewVideoAudio??!1)}),type:`button`,children:(0,C.jsx)(W,{})})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsxs)(R,{children:[(0,C.jsx)(L,{children:a(`autoplay_video_previews`)}),(0,C.jsx)(m,{})]}),(0,C.jsx)(z,{children:a(`off_by_default_turn_this_on_to_start_a_video_as_soon_as_its_details_panel_opens_the_play_button_still_works_when_it_is_off`)})]}),(0,C.jsx)(U,{$on:p?.previewVideoAutoplay??!1,disabled:!p,onClick:()=>void Z({previewVideoAutoplay:!(p?.previewVideoAutoplay??!1)}),type:`button`,children:(0,C.jsx)(W,{})})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsxs)(R,{children:[(0,C.jsx)(L,{children:a(`preview_panel_under_the_list`)}),(0,C.jsx)(m,{})]}),(0,C.jsx)(z,{children:a(`shows_the_pictures_videos_and_documents_the_shell_can_preview_as_grid_tiles_below_the_list_the_tiles_follow_the_grid_size_and_the_panel_only_appears_in_list_mode`)})]}),(0,C.jsx)(U,{$on:Y.showImages??!0,onClick:()=>void Z({defaultView:{...Y,showImages:!(Y.showImages??!0)}}),type:`button`,children:(0,C.jsx)(W,{})})]}),(0,C.jsx)(P,{children:(0,C.jsxs)(F,{children:[(0,C.jsxs)(R,{children:[(0,C.jsx)(L,{children:a(`columns`)}),(0,C.jsx)(m,{})]}),(0,C.jsx)(z,{children:a(`shown_in_every_folder_changing_them_changes_all_folders_at_once`)})]})}),(0,C.jsx)(P,{children:(0,C.jsxs)(mi,{children:[dt.map(e=>(0,C.jsxs)(hi,{children:[(0,C.jsx)(`input`,{checked:(Y.columns??[]).includes(e.id),onChange:()=>void lo(e.id),type:`checkbox`}),(0,C.jsx)(`span`,{children:a(e.label)})]},e.id)),(0,C.jsxs)(hi,{children:[(0,C.jsx)(`input`,{checked:(Y.columns??[]).includes(`linkTarget`),onChange:()=>void lo(`linkTarget`),type:`checkbox`}),(0,C.jsx)(`span`,{children:a(`link_target_after_the_name`)})]})]})})]}),(0,C.jsxs)(Ei,{children:[a(`the_default_view_list_icon_size_and_grid_size_are_only_defaults_a_folder_can_still_remember_its_own_from_the_title_bar`),` `,(0,C.jsx)(m,{}),` `,a(`anything_marked_as_global_always_applies_to_every_folder`)]})]}),(0,C.jsxs)(D,{ref:X(`shortcuts`),children:[(0,C.jsx)(E,{note:`every_action_can_hold_several_combinations_click_one_to_record_it_again_add_one_with_the_plus_and_drop_one_with_the_cross`,title:`shortcuts`}),(0,C.jsxs)(k,{children:[hn.map(({id:e,label:t,note:n})=>{let r=vo(e),i=w?.action===e,o=bo(e);return(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(t)}),(0,C.jsx)(z,{children:a(n)}),o.length>0&&(0,C.jsx)(Si,{children:a(`also_in_use_by_actions_pressing_it_runs_each_of_them`,{actions:o.join(`, `)})})]}),(0,C.jsx)(I,{children:(0,C.jsxs)(gi,{children:[r.map((t,n)=>(0,C.jsxs)(_i,{$conflict:(yo.get(t)?.length??0)>1,$listening:i&&w.index===n,children:[(0,C.jsx)(vi,{onClick:()=>cn({action:e,index:n}),title:a(`click_to_record_this_shortcut_again`),type:`button`,children:i&&w.index===n?ln.length>0?`${Ye(ln)} + …`:a(`press_a_key`):Ye(t)}),(0,C.jsx)(yi,{onClick:()=>So(e,n),title:a(`remove`),type:`button`,children:(0,C.jsx)(x,{size:9})})]},t+`-`+n)),r.length===0&&(0,C.jsx)(bi,{children:a(`none`)}),(0,C.jsx)(xi,{$listening:i&&w.index<0,onClick:()=>cn({action:e,index:-1}),title:a(`add`),type:`button`,children:i&&w.index<0?ln.length>0?`${Ye(ln)} + …`:a(`press_a_key`):(0,C.jsx)(v,{size:11})})]})})]},e)}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`reset`)}),(0,C.jsx)(z,{children:a(`back_to_the_default_combination_for_every_action`)})]}),(0,C.jsx)(I,{children:(0,C.jsxs)(G,{onClick:()=>void Z({shortcuts:at(Qe),globalHotkey:null}),type:`button`,children:[(0,C.jsx)(y,{size:13}),a(`reset`)]})})]})]})]}),(0,C.jsxs)(D,{ref:X(`memory`),children:[(0,C.jsx)(E,{note:`what_the_process_holds_and_how_to_give_it_back`,title:`memory`}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(vr,{children:[(0,C.jsxs)(yr,{children:[(0,C.jsx)(L,{children:a(`process_memory`)}),(0,C.jsx)(V,{children:g?`${d(g.private)} · ${ir(g.private,g.available)}`:`—`})]}),(0,C.jsx)(br,{children:(0,C.jsx)(xr,{$ratio:g?g.private/Math.max(g.available,1):0,$tone:ee(g?g.private/Math.max(g.available,1):0)})}),(0,C.jsx)(z,{children:g?a(`committed_of_available_the_runtime_can_use_resident_is_resident_the_webview_runs_in_its_own_process`,{available:d(g.available),resident:d(g.workingSet)}):a(`reading_the_current_usage`)})]}),(0,C.jsxs)(vr,{children:[(0,C.jsxs)(yr,{children:[(0,C.jsx)(L,{children:a(`managed_heap`)}),(0,C.jsx)(V,{children:g?`${d(g.managed)} · ${ir(g.managed,g.private)}`:`—`})]}),(0,C.jsx)(br,{children:(0,C.jsx)(xr,{$ratio:g?g.managed/Math.max(g.private,1):0,$tone:`var(--accent-secondary)`})}),(0,C.jsx)(z,{children:a(`share_of_this_process_that_the_net_heap_holds_thumbnails_and_folder_size_walks_live_here_the_runtime_grows_it_on_demand_and_gives_it_back_after_a_collection`)})]}),(0,C.jsxs)(vr,{children:[(0,C.jsxs)(yr,{children:[(0,C.jsx)(L,{children:a(`native_and_runtime`)}),(0,C.jsx)(V,{children:g?`${d(Math.max(0,g.private-g.managed))} · ${ir(Math.max(0,g.private-g.managed),g.private)}`:`—`})]}),(0,C.jsx)(br,{children:(0,C.jsx)(xr,{$ratio:g?Math.max(0,g.private-g.managed)/Math.max(g.private,1):0,$tone:`var(--accent-primary)`})}),(0,C.jsx)(z,{children:a(`the_runtime_loaded_libraries_and_the_rust_helper_share_this_part_rust_runs_inside_the_process_so_it_has_no_separate_figure`)})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`free_memory`)}),(0,C.jsx)(z,{children:a(`compacts_the_heap_and_returns_unused_pages_to_the_system_always_safe`)})]}),(0,C.jsx)(I,{children:(0,C.jsxs)(G,{onClick:()=>void qe().then(Dt),type:`button`,children:[(0,C.jsx)(kt,{size:13}),a(`trim_now`)]})})]})]})]}),(0,C.jsxs)(D,{ref:X(`overview`),children:[(0,C.jsx)(E,{note:`the_home_tab_s_history_and_how_much_of_it_it_shows`,title:`overview`}),(0,C.jsx)(k,{children:(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`recent_items`)}),(0,C.jsx)(z,{children:a(`how_many_recently_opened_folders_the_overview_lists_0_hides_the_section`)})]}),(0,C.jsx)(I,{children:(0,C.jsx)(Rr,{max:50,min:0,onChange:e=>void Co(Number(e.target.value)),type:`number`,value:p?.recentLimit??10})})]})})]}),(0,C.jsxs)(D,{ref:X(`gallery`),children:[(0,C.jsx)(E,{note:`the_folders_the_gallery_scans_for_pictures_and_videos`,title:`gallery`}),(0,C.jsxs)(k,{children:[(p?.galleryRoots??[]).map(e=>(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:ie(e)}),(0,C.jsx)(z,{children:e})]}),(0,C.jsx)(I,{children:(0,C.jsx)(Ci,{onClick:()=>void No((p?.galleryRoots??[]).filter(t=>t!==e)),title:a(`stop_scanning_this_folder`),type:`button`,children:(0,C.jsx)(x,{size:12})})})]},e)),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`scan_folders`)}),(0,C.jsx)(z,{children:(p?.galleryRoots??[]).length===0?a(`nothing_added_yet_so_the_gallery_reads_the_pictures_folder`):a(`only_these_folders_are_scanned_three_levels_deep`)})]}),(0,C.jsx)(I,{children:(0,C.jsxs)(G,{onClick:()=>void Po(),type:`button`,children:[(0,C.jsx)(Pt,{size:13}),a(`choose_folder`)]})})]})]})]}),(0,C.jsxs)(D,{ref:X(`icons`),children:[(0,C.jsx)(E,{note:`where_the_shell_s_own_icons_and_the_built_in_glyphs_come_from`,title:`icons`}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`use_system_file_icons`)}),(0,C.jsx)(z,{children:a(`ask_the_shell_for_the_icon_of_each_file_type_instead_of_the_built_in_glyphs`)})]}),(0,C.jsx)(U,{$on:p?.systemIcons??!1,disabled:!p,onClick:()=>void Z({systemIcons:!p?.systemIcons}),type:`button`,children:(0,C.jsx)(W,{})})]}),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`use_custom_folder_icons`)}),(0,C.jsx)(z,{children:a(`folders_that_define_an_icon_desktop_ini_keep_showing_it_even_when_system_icons_are_off`)})]}),(0,C.jsx)(U,{$on:p?.customFolderIcons??!1,disabled:!p,onClick:()=>void Z({customFolderIcons:!p?.customFolderIcons}),type:`button`,children:(0,C.jsx)(W,{})})]})]})]}),(0,C.jsxs)(D,{ref:X(`extension-icons`),children:[(0,C.jsx)(E,{note:`a_custom_glyph_for_one_file_extension`,title:`icons_by_extension`}),(0,C.jsxs)(k,{children:[Object.entries(p?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:e}),(0,C.jsx)(z,{children:An(a,t)})]}),(0,C.jsxs)(I,{children:[(0,C.jsx)(jn,{source:t}),(0,C.jsx)(Ci,{onClick:()=>void go(e,null),title:a(`remove_this_rule`),type:`button`,children:(0,C.jsx)(x,{size:12})})]})]},e)),(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`add_a_rule`)}),(0,C.jsx)(z,{children:a(`extension_and_the_icon_to_draw_for_it`)})]}),(0,C.jsxs)(I,{children:[(0,C.jsx)(Rr,{onChange:e=>_t(e.target.value),placeholder:`.psd`,spellCheck:!1,value:lt}),(0,C.jsxs)(Ur,{children:[(0,C.jsx)(Ci,{onClick:()=>St(e=>!e),title:a(`choose_the_icon`),type:`button`,children:(0,C.jsx)(jn,{source:yt})}),xt&&(0,C.jsx)(Gt,{allowDefault:!1,onClose:()=>St(!1),onPick:e=>{bt(e??`file`),St(!1)},value:yt})]}),(0,C.jsx)(Ci,{onClick:()=>void Fo(),title:a(`add_the_rule`),type:`button`,children:(0,C.jsx)(v,{size:13})})]})]})]})]}),(0,C.jsxs)(D,{ref:X(`folder-icons`),children:[(0,C.jsx)(E,{note:`a_single_folder_can_carry_an_icon_of_its_own`,title:`folder_icons`}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`give_a_folder_its_own_icon`)}),(0,C.jsx)(z,{children:a(`stored_in_the_folder_s_parent_index_so_it_stays_with_the_files`,{index:`.yafm-index.db`})})]}),(0,C.jsxs)(I,{children:[it&&(0,C.jsx)(Mn,{src:it.icon}),(0,C.jsxs)(G,{disabled:Ct,onClick:()=>void Io(),type:`button`,children:[(0,C.jsx)(Pt,{size:13}),a(Ct?`choosing`:`choose_folder_and_icon`)]})]})]}),it&&(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:ie(it.folder)}),(0,C.jsx)(z,{children:it.folder})]}),(0,C.jsx)(I,{children:(0,C.jsxs)(Ti,{children:[(0,C.jsx)(_,{size:11}),` `,a(`saved`)]})})]})]})]}),(0,C.jsxs)(D,{ref:X(`folder-index`),children:[(0,C.jsx)(E,{note:`the_hidden_cache_that_makes_a_folder_open_instantly_next_time`,title:`folder_index`}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`keep_a_index_in_every_folder`,{index:`.yafm-index.db`})}),(0,C.jsx)(z,{children:a(`holds_icons_cached_folder_sizes_and_the_folder_s_last_listing_so_it_opens_instantly_next_time_hidden_and_marked_as_a_system_file_on_windows_skipped_where_the_folder_is_read_only`)})]}),(0,C.jsx)(U,{$on:p?.writeDirectoryIndex??!0,disabled:!p,onClick:()=>void Z({writeDirectoryIndex:!p?.writeDirectoryIndex}),type:`button`,children:(0,C.jsx)(W,{})})]}),(0,C.jsxs)(Bn,{children:[(0,C.jsxs)(Vn,{children:[(0,C.jsx)(L,{children:a(`directory_index_blacklist`)}),(0,C.jsx)(z,{children:a(`rules_are_full_path_globs_matches_within_one_path_segment_and_crosses_folders_matching_folders_use_the_central_database_instead_of_creating_yafm_index_db_files`)})]}),(0,C.jsx)(ri,{children:(p?.directoryIndexBlacklist??[]).map(e=>(0,C.jsxs)(ii,{children:[(0,C.jsx)(ai,{"aria-label":a(`directory_index_blacklist_rule`),onBlur:Ha,onChange:t=>Or({from:e,value:t.target.value}),onFocus:()=>Or({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Ha()):e.key===`Escape`&&Or(null)},spellCheck:!1,value:Dr?.from===e?Dr.value:e}),(0,C.jsx)(oi,{onClick:()=>Ga(e),title:a(`remove`),type:`button`,children:(0,C.jsx)(x,{size:10})})]},e))}),(0,C.jsxs)(ci,{children:[(0,C.jsx)(li,{"aria-label":a(`directory_index_blacklist_rule`),onChange:e=>Hr(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ua())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:Vr}),(0,C.jsxs)(H,{onClick:Ua,type:`button`,children:[(0,C.jsx)(v,{size:13}),a(`add_the_rule`)]})]}),(0,C.jsxs)(si,{children:[(0,C.jsxs)(H,{onClick:Ka,type:`button`,children:[(0,C.jsx)(y,{size:13}),a(`restore_defaults`)]}),(0,C.jsxs)(H,{onClick:()=>void Wa(),type:`button`,children:[(0,C.jsx)(Pt,{size:13}),a(`add_folder_2`)]})]})]})]}),!(p?.writeDirectoryIndex??!0)&&(0,C.jsx)(Di,{children:kn(a,e?.platform)})]}),(0,C.jsxs)(D,{ref:X(`indexing`),children:[(0,C.jsx)(E,{note:`background_folder_size_and_item_count_walks`,title:`index_tasks`}),(0,C.jsx)(On,{})]}),(0,C.jsxs)(D,{ref:X(`files`),children:[(0,C.jsx)(E,{note:`what_the_listings_include`,title:`files`}),(0,C.jsxs)(k,{children:[(0,C.jsxs)(P,{children:[(0,C.jsxs)(F,{children:[(0,C.jsx)(L,{children:a(`show_hidden_files`)}),(0,C.jsxs)(z,{children:[a(`toggles_ordinary_hidden_files_for_this_session_alt_also_works_system_files_still_follow_explorer`),f?.overridden&&(0,C.jsx)(jr,{disabled:me,onClick:()=>void fo(null),type:`button`,children:a(`follow_system`)})]})]}),(0,C.jsxs)(I,{children:[(0,C.jsx)(Lr,{$on:f?.showHidden??!1,children:f?.overridden?Dn(a,f.showHidden):a(`follow_system`)}),(0,C.jsx)(U,{$on:f?.showHidden??!1,disabled:!f||me,onClick:()=>void fo(!(f?.showHidden??!1)),title:a(`show_hidden_files`),type:`button`,children:(0,C.jsx)(W,{})})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsx)(L,{children:a(`protected_operating_system_files`)}),(0,C.jsx)(V,{children:Dn(a,f?.showSystem)})]})]}),(0,C.jsx)(Ei,{children:a(`hidden_items_follow_this_app_s_switch_protected_operating_system_files_still_follow_windows`)})]}),(0,C.jsxs)(Qn,{onClick:()=>pn(!0),type:`button`,children:[(0,C.jsx)(Et,{size:13}),a(`open_source_attribution`)]})]}),(0,C.jsxs)($n,{"aria-label":a(`settings_sections`),onWheel:Da,ref:xa,children:[(0,C.jsx)(er,{children:a(`sections`)}),(0,C.jsx)(tr,{children:T.map(({id:e,label:t})=>(0,C.jsxs)(nr,{$active:Vi===e,"data-section":e,onClick:()=>Ta(e),type:`button`,children:[(0,C.jsx)(zn,{children:Sn[t]}),(0,C.jsx)(`span`,{children:a(t)})]},e))}),(0,C.jsx)(rr,{children:a(`changes_are_saved_as_you_make_them`)})]}),dn&&(0,C.jsx)(S.Suspense,{fallback:null,children:(0,C.jsx)(fn,{onClose:()=>pn(!1)})}),J&&(0,Kt.createPortal)((0,C.jsx)(sr,{children:(0,C.jsxs)(cr,{"aria-modal":`true`,role:`dialog`,children:[(0,C.jsxs)(lr,{children:[(0,C.jsx)(`h2`,{children:a(`software_update`)}),(0,C.jsx)(`p`,{children:q?.latest?a(`version_version`,{version:q.latest}):a(`preparing_the_update`)})]}),(0,C.jsx)(ur,{children:a(`changelog`)}),J.changelog?(0,C.jsx)(dr,{onClick:pr,children:(0,C.jsx)(c,{source:J.changelog})}):(0,C.jsx)(fr,{children:J.phase===`changelog`?a(`loading_the_changelog`):a(`the_changelog_could_not_be_loaded`)}),(0,C.jsxs)(mr,{children:[(0,C.jsx)(`span`,{children:ar(J,a)}),(0,C.jsx)(`span`,{children:or(J)})]}),(0,C.jsx)(hr,{children:(0,C.jsx)(gr,{$percent:Math.max(0,Math.min(100,J.percent))})}),J.error&&(0,C.jsx)(B,{children:J.error}),(0,C.jsxs)(_r,{children:[(J.phase===`changelog`||J.phase===`downloading`)&&(0,C.jsxs)(G,{onClick:()=>void eo(),type:`button`,children:[(0,C.jsx)(x,{size:13}),a(`cancel`)]}),J.phase===`ready`&&(0,C.jsxs)(G,{onClick:()=>void to(),type:`button`,children:[(0,C.jsx)(Bt,{size:13}),a(`install_update`)]}),J.phase===`installing`&&(0,C.jsxs)(G,{disabled:!0,type:`button`,children:[(0,C.jsx)(y,{size:13}),a(`installing`)]}),(J.phase===`ready`||J.phase===`error`||J.phase===`cancelled`||J.phase===`installing`)&&(0,C.jsxs)(G,{onClick:()=>Li(null),type:`button`,children:[(0,C.jsx)(x,{size:13}),a(`close`)]})]})]})}),document.body)]})}function En({approvalMinutes:e,denialSeconds:t}){let n=l(),[i,a]=(0,S.useState)([]),[o,s]=(0,S.useState)(!1),[c,ee]=(0,S.useState)(()=>Date.now());(0,S.useEffect)(()=>{let e=window.setInterval(()=>ee(Date.now()),1e3);return()=>window.clearInterval(e)},[]),(0,S.useEffect)(()=>{let e=()=>void st().then(a,()=>a([]));if(e(),r.available)return r.on(t=>{t.type===`share.devices.changed`&&e()})},[]),(0,S.useEffect)(()=>{i.some(e=>e.expiresAt>0&&e.expiresAt<=c)&&st().then(a,()=>void 0)},[c,i]);let te=e=>{let t=Math.max(0,Math.ceil((e-c)/1e3)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60,a=e=>String(e).padStart(2,`0`);return n>0?`${n}:${a(r)}:${a(i)}`:`${r}:${a(i)}`},ne=async(e,t,n)=>{s(!0);try{a(await et(e,t,n))}finally{s(!1)}},re=async()=>{if(window.confirm(n(`share_access_clear_devices_confirm`))){s(!0);try{a(await it())}finally{s(!1)}}},ie=async e=>{s(!0);try{a(await _t(e))}finally{s(!1)}},ae=e=>e.state===`allowed`?e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_allowed`)} · ${n(`share_access_expired`)}`:n(`share_access_allowed`):e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_denied`)} · ${n(`share_access_expired`)}`:n(`share_access_denied`),u=i.filter(e=>e.state===`allowed`||e.state===`denied`),d=e=>e.expiresAt===0?void 0:new Date(e.expiresAt).toLocaleString();return(0,C.jsxs)(M,{children:[u.length>0&&(0,C.jsxs)(Cr,{children:[(0,C.jsxs)(Or,{children:[n(`devices`),` · `,u.length]}),(0,C.jsx)(N,{disabled:o,onClick:()=>void re(),title:n(`share_access_clear_devices`),type:`button`,children:(0,C.jsx)(At,{size:13})})]}),u.length===0&&(0,C.jsx)(Sr,{children:n(`share_access_no_devices`)}),u.map(r=>(0,C.jsxs)(wr,{children:[(0,C.jsxs)(Er,{children:[(0,C.jsx)(Dr,{children:r.name||r.address||r.id}),(0,C.jsxs)(Or,{children:[r.address,r.address?` · `:``,n(`share_access_last_seen`),`: `,new Date(r.lastSeen).toLocaleString()]}),(0,C.jsxs)(Or,{title:d(r),children:[ae(r),` · `,r.expiresAt===0?n(`share_access_forever`):n(`share_access_expires_in`,{time:te(r.expiresAt)})]})]}),(0,C.jsxs)(Tr,{children:[(0,C.jsx)(Xe,{disabled:o,onChange:e=>{let[t,n]=e.split(`:`);ne(r.id,t,n===`forever`)},options:[{value:`allowed:timed`,label:n(`share_access_allowed_for_minutes`,{minutes:e})},{value:`allowed:forever`,label:n(`share_access_allow_forever`)},{value:`denied:timed`,label:n(`share_access_denied_for_seconds`,{seconds:t})},{value:`denied:forever`,label:n(`share_access_block_forever`)}],value:r.state===`allowed`?r.expiresAt===0?`allowed:forever`:`allowed:timed`:r.expiresAt===0?`denied:forever`:`denied:timed`,width:190}),(0,C.jsx)(N,{disabled:o,onClick:()=>void ie(r.id),title:n(`remove`),type:`button`,children:(0,C.jsx)(At,{size:13})})]})]},r.id))]})}function Dn(e,t){return e(t===void 0?`reading`:t?`shown`:`hidden`)}function On(){let e=l(),[t,n]=(0,S.useState)(null);return(0,S.useEffect)(()=>{let e=!0,t=()=>ue().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,C.jsx)(Di,{children:e(`no_indexing_tasks_are_running`)}):(0,C.jsxs)(k,{children:[(0,C.jsx)(P,{children:(0,C.jsx)(L,{children:e(`count_indexing_tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,C.jsx)(P,{children:(0,C.jsx)(V,{title:e,children:e})},e))]}):(0,C.jsx)(Di,{children:e(`index_task_information_is_unavailable`)})}function kn(e,t){return e(`indexes_are_off_every_folder_s_icons_sizes_and_cached_listing_now_live_in_one_database_in_place_so_that_drive_grows_with_every_folder_you_open_that_is_the_cost_of_keeping_folders_free_of_extra_files`,{place:e(t===`windows`?`appdata_which_sits_on_the_system_drive_usually_c`:t===`linux`?`your_home_folder_which_often_shares_a_partition_with_the_system`:`the_app_s_settings_folder_which_usually_sits_on_the_system_drive`)})}function An(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built_in_source`,{source:t})}function jn({source:e}){let t=pe(e.startsWith(`file:`)?e.slice(5):null);return(0,C.jsx)(wi,{children:t?(0,C.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,C.jsx)(lt,{name:e,size:16})})}function Mn({src:e}){let t=pe(e);return(0,C.jsx)(wi,{children:t&&(0,C.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function Nn({path:e,active:t,onSelect:n,onRemove:r}){let i=l(),a=ce(e),o=me(a?null:e),s=a?e:o,c=p(e.split(/[?#]/)[0]);return(0,C.jsxs)(Qr,{children:[(0,C.jsxs)(Zr,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(c?(0,C.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,C.jsx)(`img`,{alt:``,src:s})),c&&(0,C.jsx)(ei,{children:(0,C.jsx)(Wt,{size:11})})]}),(0,C.jsx)($r,{onClick:r,title:i(`remove`),type:`button`,children:(0,C.jsx)(x,{size:9})})]})}function Pn({value:e,options:t,onChange:n,disabled:r}){let i=l(),[a,o]=(0,S.useState)(null),s=(0,S.useRef)(null);return(0,S.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(zr,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,C.jsx)(`span`,{children:Fn(i,e)}),(0,C.jsx)(Br,{children:(0,C.jsx)(Nt,{size:11})})]}),a&&(0,Kt.createPortal)((0,C.jsx)(Vr,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,C.jsxs)(Hr,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,C.jsx)(`span`,{children:Fn(i,t)}),t===e&&(0,C.jsx)(_,{size:11})]},t))}),document.body)]})}function Fn(e,t){return t===bn?e(`system_default`):xn[t]??t}function In({colors:e,current:t,onApply:n}){let r=l();if(e.length===0)return null;let[i,...a]=e;return(0,C.jsxs)(A,{children:[(0,C.jsxs)(Zn,{$color:i,onClick:()=>n(i),title:r(`previous_colour_colour`,{colour:i}),type:`button`,children:[(0,C.jsx)(`i`,{}),r(`previous`)]}),a.map(e=>(0,C.jsx)(j,{$color:e,onClick:()=>n(e),title:r(`use_colour`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,C.jsx)(_,{size:9})},e))]})}function E({title:e,note:t,global:n=!1}){let r=l();return(0,C.jsxs)(O,{children:[(0,C.jsxs)(`h2`,{children:[(0,C.jsx)(zn,{children:Sn[e]}),r(e),n&&(0,C.jsx)(m,{})]}),(0,C.jsx)(`p`,{children:r(t)})]})}var Ln=i.div`
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
`,O=i.header`
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
`,zn=i.i`
    display: grid;
    place-items: center;
    width: 13px;
    height: 13px;
    flex-shrink: 0;
    color: var(--accent-primary);
    opacity: 0.85;
`,k=i.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,Bn=i.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Vn=i.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Hn=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,Un=i.button`
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
`,Wn=i.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Gn=i.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,Kn=i.button`
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
`,qn=i.button`
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
`,Jn=i.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Yn=i.input`
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
`,Xn=i.span`
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
`,A=i.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,j=i.button`
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
`,Zn=i.button`
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
`,Qn=i.button`
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
`,$n=i.nav`
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
`,er=i.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,tr=i.div`
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
`,nr=i.button`
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
`,rr=i.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function ir(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}function ar(e,t){switch(e.phase){case`changelog`:return t(`preparing_the_update`);case`downloading`:return t(`downloading_the_update`);case`ready`:return t(`download_complete`);case`cancelled`:return t(`update_cancelled`);case`error`:return t(`the_update_failed`);case`installing`:return t(`installing`);default:return``}}function or(e){return e.total>0?`${d(e.downloaded)} / ${d(e.total)}`:e.downloaded>0?d(e.downloaded):``}var sr=i.div`
    position: fixed;
    inset: 0;
    z-index: 9500;
    display: grid;
    place-items: center;
    padding: 32px;
    background: rgba(2, 6, 23, 0.55);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
`,cr=i.div`
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
`,lr=i.div`
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
`,ur=i.span`
    margin-top: 4px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,dr=i.div`
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
`,fr=i.p`
    margin: 0;
    font-size: 11px;
    color: var(--text-muted);
`;function pr(e){let t=e.target?.closest(`a`);t&&(e.preventDefault(),Ae(t.href))}var mr=i.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    font-size: 11px;
    color: var(--text-muted);
`,hr=i.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.22);
`,gr=i.div`
    width: ${({$percent:e})=>`${e}%`};
    height: 100%;
    border-radius: 3px;
    background: var(--accent-gradient);
    transition: width 160ms ease;
`,_r=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,vr=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,yr=i.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,br=i.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,xr=i.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,M=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
`,Sr=i.div`
    padding: 8px 2px;
    color: var(--text-muted);
    font-size: 11px;
`,Cr=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2px;
`,wr=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,Tr=i.div`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,N=i.button`
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
`,Er=i.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Dr=i.span`
    color: var(--text-primary);
    font-size: 12px;
`,Or=i.span`
    color: var(--text-muted);
    font-size: 10.5px;
    overflow-wrap: anywhere;
`,kr=i.input`
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
`,Ar=i.input`
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
`,P=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,F=i.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,I=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,L=i.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,R=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,z=i.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,B=i.span`
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
`,V=i.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,jr=i.button`
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
`,Mr=i.input`
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
`,Nr=i.input`
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
`,H=i.button`
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
`,Pr=i.input`
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
`,Fr=i.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,Ir=i.button`
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
`,Lr=i.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,U=i.button`
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
`,W=i.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,Rr=i.input`
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
`,zr=i.button`
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
`,Br=i.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Vr=i.div`
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
`,Hr=i.button`
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
`,Ur=i.span`
    position: relative;
    display: inline-flex;
`,Wr=i.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Gr=i.button`
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
`,Kr=i.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,qr=i.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,Jr=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Yr=i.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Xr=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,Zr=i.button`
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
`,Qr=i.div`
    position: relative;
    width: 102px;
    height: 58px;
`,$r=i.button`
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
`,ei=i.span`
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
`,ti=i.button`
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
`,ni=i.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,ri=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,ii=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,ai=i.input`
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
`,oi=i.button`
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
`,si=i.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,ci=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,li=i.input`
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
`,ui=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,di=i.button`
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
`,fi=i.input`
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
`,pi=i.div`
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
`,mi=i.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,hi=i.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,gi=i.span`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 5px;
`,_i=i.span`
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    border: 1px solid ${({$conflict:e,$listening:t})=>t?`var(--border-color-focus)`:e?`rgba(251, 191, 36, 0.55)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$listening:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`var(--bg-input)`};
`,vi=i.button`
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
`,yi=i.button`
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
`,bi=i.span`
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,xi=i.button`
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
`,Si=i.span`
    font-size: 10px;
    color: #fbbf24;
`,G=i.button`
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
`,Ci=i.button`
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
`,wi=i.span`
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
`,Ti=i.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,Ei=i.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,Di=i.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`;export{Tn as SettingsView};