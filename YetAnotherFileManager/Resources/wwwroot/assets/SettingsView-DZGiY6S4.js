const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AttributionDialog-Bf9f3XFF.js","assets/dist-B10j17-y.js","assets/Icons-C2oT0N0q.js"])))=>i.map(i=>d[i]);
import{D as e,M as t,O as n,S as r,a as i,b as a,c as o,d as s,f as c,i as ee,k as te,l as ne,m as re,n as ie,o as ae,s as oe,t as se,u as ce,w as l,x as u}from"./dist-B10j17-y.js";import{E as le,O as ue,a as de,b as fe,g as pe,i as me,n as he,p as d,t as ge,u as _e,w as ve}from"./theme-IXfpjWRe.js";import{Dt as ye,Et as f,P as be,S as xe,St as Se,W as Ce,_t as we,at as Te,b as Ee,bt as De,dt as Oe,ft as ke,ht as Ae,i as je,lt as p,mt as Me,pt as Ne,s as Pe,ut as Fe,vt as Ie,z as Le}from"./selectionMenu-0dzdsEUF.js";import{$ as Re,A as m,B as ze,D as Be,E as h,F as Ve,G as He,I as Ue,J as We,L as Ge,N as Ke,O as qe,P as Je,Q as Ye,T as Xe,Y as Ze,_ as Qe,a as $e,dt as et,et as tt,f as nt,ft as rt,g as it,gt as at,h as ot,ht as st,i as ct,it as lt,k as ut,mt as dt,nt as ft,pt,q as mt,rt as ht,s as g,t as gt,tt as _t,ut as vt,x as yt}from"./main-D3tgJNFp.js";import{t as bt}from"./textSearch-E7faBe_Y.js";import{F as xt,G as St,K as Ct,M as wt,N as _,T as Tt,U as Et,V as Dt,W as Ot,X as kt,Y as At,Z as jt,at as v,bt as Mt,ct as Nt,d as Pt,f as Ft,ht as It,it as Lt,j as y,k as Rt,l as b,mt as zt,n as Bt,nt as Vt,p as Ht,st as x,tt as Ut,ut as Wt,vt as Gt,x as Kt,y as S}from"./Icons-C2oT0N0q.js";var C=t(te(),1),qt=ue();async function Jt(){return l.available?(await l.request(`app.tags`)).tags:[]}async function Yt(e){return!l.available||!e?!1:(await l.request(`app.tags.delete`,{name:e})).ok}async function Xt(e,t){return!l.available||!e?[]:(await l.request(`app.tags.create`,{name:e,color:t})).tags}async function Zt(e,t){return!l.available||!e?!1:(await l.request(`app.tags.color`,{name:e,color:t})).ok}async function Qt(e,t){return!l.available||!e||!t?!1:(await l.request(`app.tags.rename`,{oldName:e,newName:t})).ok}var w=r();function $t({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=u(),[s,c]=(0,C.useState)(null),[ee,te]=(0,C.useState)(``),ne=(0,C.useRef)(null),re=(0,C.useRef)(null),ie=(0,C.useMemo)(()=>{let e=ee.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,ee]);(0,C.useEffect)(()=>{if(!s)return;re.current?.focus();let e=()=>c(null),t=t=>{let n=t.target;n instanceof Node&&ne.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e)}},[s]);let ae=()=>{if(s){c(null);return}let e=ne.current?.getBoundingClientRect();if(!e)return;te(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;c({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},oe=e=>{a(e),c(null)};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(en,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:ae,ref:ne,type:`button`,children:[(0,w.jsx)(tn,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,w.jsx)(nn,{children:`▾`})]}),s&&(0,qt.createPortal)((0,w.jsxs)(rn,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,w.jsxs)(T,{children:[(0,w.jsx)(Nt,{size:12}),(0,w.jsx)(an,{onChange:e=>te(e.target.value),placeholder:o(`filter_fonts`),ref:re,value:ee})]}),(0,w.jsxs)(on,{children:[(0,w.jsxs)(sn,{$active:!e,"aria-selected":!e,onClick:()=>oe(null),role:`option`,type:`button`,children:[(0,w.jsxs)(ln,{children:[n,` `,(0,w.jsx)(dn,{children:o(`default_2`)})]}),!e&&(0,w.jsx)(Pt,{size:11})]}),ie.map(t=>(0,w.jsxs)(sn,{$active:e===t,"aria-selected":e===t,onClick:()=>oe(t),role:`option`,type:`button`,children:[(0,w.jsxs)(cn,{children:[(0,w.jsx)(ln,{children:t}),(0,w.jsx)(un,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,w.jsx)(Pt,{size:11})]},t)),ie.length===0&&(0,w.jsx)(fn,{children:o(`no_matching_font`)})]})]}),document.body)]})}var en=n.button`
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
    ${Pe}
`,T=n.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,an=n.input`
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
`,fn=n.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,pn=(0,C.lazy)(()=>gt(()=>import(`./AttributionDialog-Bf9f3XFF.js`).then(e=>({default:e.AttributionDialog})),__vite__mapDeps([0,1,2]))),mn=[{id:`goBack`,label:`back`,note:`goes_to_the_previous_folder_in_this_tab`},{id:`goForward`,label:`forward`,note:`goes_to_the_next_folder_in_this_tab`},{id:`goUp`,label:`up_one_level`,note:`opens_the_folder_that_contains_the_current_one`},{id:`home`,label:`home_folder`,note:`jumps_to_the_user_s_home_folder`},{id:`find`,label:`search`,note:`opens_the_floating_search_box_typing_a_letter_in_a_folder_opens_it_too`},{id:`location`,label:`edit_location`,note:`turns_the_breadcrumbs_into_an_editable_path`},{id:`closeTab`,label:`close_tab`,note:`closes_the_tab_that_is_open`},{id:`newTab`,label:`new_tab`,note:`opens_the_overview_in_a_new_tab`},{id:`reopenTab`,label:`reopen_closed_tab`,note:`brings_back_the_tab_you_closed_last_folder_and_all`},{id:`nextTab`,label:`next_tab`,note:`cycles_to_the_next_tab`},{id:`previousTab`,label:`previous_tab`,note:`cycles_to_the_previous_tab`},{id:`copy`,label:`copy`,note:`copies_the_selection_so_it_can_be_pasted_elsewhere`},{id:`duplicate`,label:`duplicate`,note:`makes_a_copy_of_the_selection_in_this_folder_with_a_new_name`},{id:`cut`,label:`cut`,note:`moves_the_selection_on_the_next_paste`},{id:`paste`,label:`paste`,note:`copies_or_moves_the_clipboard_s_files_into_the_current_folder`},{id:`undo`,label:`undo`,note:`undoes_the_last_file_operation_in_this_session`},{id:`redo`,label:`redo`,note:`repeats_the_operation_that_was_just_undone`},{id:`delete`,label:`move_to_the_recycle_bin`,note:`moves_the_selection_to_the_recycle_bin`},{id:`deletePermanently`,label:`delete_permanently`,note:`deletes_the_selection_without_the_recycle_bin`},{id:`rename`,label:`rename`,note:`renames_the_single_selected_entry`},{id:`selectAll`,label:`select_all`,note:`selects_every_entry_in_the_current_folder`},{id:`invertSelection`,label:`invert_selection`,note:`selects_everything_that_is_not_selected`},{id:`open`,label:`open`,note:`opens_the_selected_folder_or_file`},{id:`newFolder`,label:`new_folder`,note:`creates_a_folder_in_the_current_directory`},{id:`properties`,label:`properties`,note:`opens_the_shell_properties_sheet`},{id:`iconsView`,label:`icons_view`,note:`switches_the_folder_to_the_grid_view`},{id:`detailsView`,label:`details_view`,note:`switches_the_folder_to_the_list_view`},{id:`terminal`,label:`open_terminal`,note:`opens_a_terminal_in_the_current_folder`},{id:`hidden`,label:`show_hidden_files`,note:`toggles_ordinary_hidden_files_for_this_session`},{id:`splitView`,label:`split_view`,note:`shows_the_next_file_tab_beside_the_current_one`},{id:`openInNewTab`,label:`open_in_a_new_tab`,note:`hold_this_while_clicking_a_folder`}],hn=`globalHotkey`,gn=[...mn,{id:hn,label:`global_hotkey`,note:`brings_the_window_forward_from_anywhere_while_the_app_is_running_empty_means_no_global_shortcut`}],_n=`en`,vn=[{id:`system`,label:`follow_system`},{id:`light`,label:`light`},{id:`dark`,label:`dark`}],yn=[{id:`system`,label:`system`},{id:`24`,label:`k_24_hour`},{id:`12`,label:`k_12_hour`},{id:`custom`,label:`custom`}],bn=new Date(2026,10,5,16,8).getTime(),xn=`system`,E={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},D=[{id:`application`,label:`application`},{id:`share-access`,label:`share_access`},{id:`startup`,label:`startup`},{id:`fonts`,label:`fonts`},{id:`time`,label:`time_format`},{id:`updates`,label:`updates`},{id:`colors`,label:`colors`},{id:`background`,label:`background`},{id:`safety`,label:`safety`},{id:`tags`,label:`tags`},{id:`files-view`,label:`files_view`},{id:`shortcuts`,label:`shortcuts`},{id:`memory`,label:`memory`},{id:`overview`,label:`overview`},{id:`gallery`,label:`gallery`},{id:`icons`,label:`icons`},{id:`extension-icons`,label:`icons_by_extension`},{id:`folder-index`,label:`folder_index`},{id:`indexing`,label:`index_tasks`},{id:`files`,label:`files`}],Sn={application:(0,w.jsx)(xt,{size:13}),share_access:(0,w.jsx)(Wt,{size:13}),startup:(0,w.jsx)(Lt,{size:13}),fonts:(0,w.jsx)(_,{size:13}),time_format:(0,w.jsx)(Ht,{size:13}),updates:(0,w.jsx)(x,{size:13}),colors:(0,w.jsx)(jt,{size:13}),background:(0,w.jsx)(Vt,{size:13}),safety:(0,w.jsx)(Ct,{size:13}),tags:(0,w.jsx)(It,{size:13}),files_view:(0,w.jsx)(St,{size:13}),shortcuts:(0,w.jsx)(Et,{size:13}),memory:(0,w.jsx)(Kt,{size:13}),overview:(0,w.jsx)(At,{size:13}),gallery:(0,w.jsx)(b,{size:13}),icons:(0,w.jsx)(Dt,{size:13}),icons_by_extension:(0,w.jsx)(y,{size:13}),folder_index:(0,w.jsx)(kt,{size:13}),index_tasks:(0,w.jsx)(zt,{size:13}),files:(0,w.jsx)(Rt,{size:13})},Cn={application:[`language`,`pickerWindowWidth`,`pickerWindowHeight`,`sharePortMode`,`sharePort`,`linkPathMode`,`restoreTabs`,`systemPropertiesSheet`],"share-access":[`shareAccessEnabled`,`shareApprovalMinutes`,`shareDenialSeconds`,`shareHttps`],startup:[`startHidden`],fonts:[`fonts`],time:[`timeFormat`,`timeFormatPattern`,`relativeTime`,`relativeTimeWindowMinutes`],colors:[`accentColor`,`secondaryColor`,`themeMode`,`themePresets`],background:[`backgroundSource`,`backgroundCustom`,`backgroundBlur`,`backgroundSaturation`,`backgroundBrightness`,`backgroundLooks`],safety:[`protectedPaths`,`deleteDelaySeconds`],"files-view":[`defaultView`,`showCheckboxes`,`openOnSingleClick`,`confirmDelete`,`previewVideoAudio`,`previewVideoAutoplay`,`trayAutoShow`,`conflictNameStyle`],shortcuts:[`shortcuts`,`globalHotkey`],overview:[`recentLimit`],gallery:[`galleryRoots`],icons:[`systemIcons`,`customFolderIcons`],"extension-icons":[`extensionIcons`],"folder-index":[`writeDirectoryIndex`,`directoryIndexBlacklist`]},wn=`yafm.colors.recent`;function Tn(){let e=Ee(wn);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function O({appInfo:e,focusSection:t,onSettingsChanged:n,find:r,onSearchMatches:te}){let l=u(),[ue,ye]=(0,C.useState)([]),[f,Ce]=(0,C.useState)(null),[Ee,Pe]=(0,C.useState)(!1),[m,h]=(0,C.useState)(null),Ve=re(de(m?.themeMode)),[Ke,Ze]=(0,C.useState)(``),[ot,gt]=(0,C.useState)(`file`),[St,Ct]=(0,C.useState)(!1),[_,Et]=(0,C.useState)(null),[Dt,At]=(0,C.useState)(vt),[jt,Nt]=(0,C.useState)(!1),[Ft,It]=(0,C.useState)(null),[y,Rt]=(0,C.useState)(null),[b,zt]=(0,C.useState)(null),[Vt,Ht]=(0,C.useState)(!1),[Wt,Kt]=(0,C.useState)(null),[en,tn]=(0,C.useState)(!1),[nn,rn]=(0,C.useState)(null),[T,an]=(0,C.useState)(null),[on,sn]=(0,C.useState)(``),[cn,ln]=(0,C.useState)(!1),[un,dn]=(0,C.useState)([]),[fn,mn]=(0,C.useState)(null),[E,O]=(0,C.useState)(!1),[Pn,j]=(0,C.useState)(null),[Rn,Zn]=(0,C.useState)(``),[Qn,$n]=(0,C.useState)(ze),[wr,Tr]=(0,C.useState)(null),[Er,Dr]=(0,C.useState)(null),[Or,kr]=(0,C.useState)(``),[Ar,jr]=(0,C.useState)(``),[Mr,Ur]=(0,C.useState)(null),[Wr,Gr]=(0,C.useState)(Tn),[Kr,ni]=(0,C.useState)({}),[W,Di]=(0,C.useState)(null),[K,Ai]=(0,C.useState)(null),[ji,Mi]=(0,C.useState)(!1),[Ni,Pi]=(0,C.useState)(null),[q,Fi]=(0,C.useState)(null),[Ii,J]=(0,C.useState)(null),Li=(0,C.useRef)(!1),[Ri,zi]=(0,C.useState)(null),[Bi,Vi]=(0,C.useState)(D[0].id),[Hi,Ui]=(0,C.useState)([]),[Wi,Gi]=(0,C.useState)(null),[Ki,qi]=(0,C.useState)(``),[Ji,Yi]=(0,C.useState)(!1),[Xi,Zi]=(0,C.useState)(null),[Qi,$i]=(0,C.useState)(null),[ea,ta]=(0,C.useState)(``),[na,ra]=(0,C.useState)(null),[ia,aa]=(0,C.useState)(null),[oa,sa]=(0,C.useState)(null),[ca,la]=(0,C.useState)(!1),[ua,da]=(0,C.useState)(``),fa=(0,C.useRef)(null),pa=(0,C.useRef)({}),Y=m?.defaultView??be(),ma=m?.themePresets??[],ha=e?.platform===`windows`,ga=ha?y?y.registered&&y.pathMatches:!1:m?.archiveHandler??p().archiveHandler,_a=y?.registered??m?.archiveHandler??p().archiveHandler,va=ha?b?b.registered&&b.pathMatches:!1:m?.defaultFileManager??p().defaultFileManager,ya=ha?Dt.registered&&Dt.pathMatches:m?.linksEnabled??p().linksEnabled;bt(fa,r??null,`section`,te??(()=>void 0),[m]),(0,C.useEffect)(()=>{let e=fa.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){Vi(D[D.length-1].id);return}let n=t+110,r=D[0].id;for(let{id:e}of D){let t=pa.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}Vi(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let X=e=>t=>{pa.current[e]=t},ba=(0,C.useRef)(null),xa=(0,C.useRef)(null),Sa=(0,C.useRef)(0),Ca=()=>{if(Sa.current!==0)return;let e=()=>{let t=fa.current;if(!t||!xa.current){Sa.current=0;return}let n=Math.min(xa.current.top,t.scrollHeight-t.clientHeight),r=n-t.scrollTop;if(Math.abs(r)<.5){t.scrollTop=n,xa.current=null,Sa.current=0;return}let i=Math.min(Math.abs(r)*.2,140);t.scrollTop+=Math.sign(r)*i,Sa.current=requestAnimationFrame(e)};Sa.current=requestAnimationFrame(e)},wa=e=>{let t=fa.current,n=pa.current[e];t&&n&&(xa.current={index:D.findIndex(t=>t.id===e),top:t.scrollTop+n.getBoundingClientRect().top-t.getBoundingClientRect().top},Vi(e),Ca())};(0,C.useEffect)(()=>{let e=ba.current,t=e?.querySelector(`[data-section="${Bi}"]`);if(!e||!t)return;let n=e.getBoundingClientRect(),r=t.getBoundingClientRect();r.top<n.top?e.scrollTop+=r.top-n.top-6:r.bottom>n.bottom&&(e.scrollTop+=r.bottom-n.bottom+6)},[Bi]),(0,C.useEffect)(()=>{let e=fa.current;if(!e)return;let t=()=>{xa.current=null};return e.addEventListener(`wheel`,t,{passive:!0}),e.addEventListener(`pointerdown`,t,{passive:!0}),()=>{e.removeEventListener(`wheel`,t),e.removeEventListener(`pointerdown`,t),cancelAnimationFrame(Sa.current)}},[]);let Ta=(0,C.useRef)(0),Ea=e=>{let t=Math.sign(e.deltaY);if(t===0)return;let n=e.deltaMode!==0||Math.abs(e.deltaY)>=50,r=performance.now();if(!n&&r<Ta.current)return;Ta.current=r+220;let i=xa.current?.index??D.findIndex(e=>e.id===Bi),a=Math.min(Math.max((i<0?0:i)+t,0),D.length-1);a!==(i<0?0:i)&&wa(D[a].id)};(0,C.useEffect)(()=>{t&&wa(t)},[t]),(0,C.useEffect)(()=>{a().then(e=>ye(e.available),()=>ye([]))},[]),(0,C.useEffect)(()=>{$e().then(Ui,()=>Ui([]))},[]),(0,C.useEffect)(()=>{pt().then(aa,()=>aa(null))},[]),(0,C.useEffect)(()=>{ee().then(Ai,()=>void 0)},[]),(0,C.useEffect)(()=>{Le().then(Ce,()=>Ce(null)),Me().then(h,()=>h(null)),rt().then(At,()=>At(vt)),Fe().then(Rt,()=>Rt(null)),Oe().then(zt,()=>zt(null)),Jt().then(dn,()=>dn([]))},[]),(0,C.useEffect)(()=>{let e=()=>void et().then(Et,()=>Et(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let Z=async e=>{if(!m)return;let t={...m,...e};Object.keys(e).every(e=>t[e]===m[e])||(h(t),Se(),h(await we(t)),n())},Da=async e=>{if(!m)return;if(e===`startup`){await Mo(`none`),await Z({startHidden:!1});return}let t=Cn[e];if(!t?.length)return;let n=await Ne(),r=Object.fromEntries(t.map(e=>[e,n[e]]));await Z(r)},Oa=e=>e?m?.backgroundLooks[e]??null:null,ka=e=>{let t=Oa(e);return{backgroundBlur:t?.blur??0,backgroundSaturation:t?.saturation??100,backgroundBrightness:t?.brightness??100}},Aa=e=>{let t={...e.backgroundLooks},n=e.backgroundSource;return n?e.backgroundBlur===0&&e.backgroundSaturation===100&&e.backgroundBrightness===100?(delete t[n],t):(t[n]={blur:e.backgroundBlur,saturation:e.backgroundSaturation,brightness:e.backgroundBrightness},t):t},ja=e=>{m&&Z({backgroundSource:e,backgroundLooks:Aa(m),...ka(e)})},Ma=e=>{m&&Z({...e,backgroundLooks:Aa({...m,...e})})},Na=()=>{if(!m)return;let e={...m.backgroundLooks};m.backgroundSource&&delete e[m.backgroundSource],Z({backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,backgroundLooks:e})},Pa=async e=>{let t=await mt(e);if(!t||!m)return;let n=m.backgroundCustom,r=`file:${t}`;await Z({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:r,backgroundLooks:Aa(m),...ka(r)})},Fa=async()=>{let e=ua.trim();if(!m||!fe(e))return;let t=m.backgroundCustom,n=`url:${e}`;da(``),await Z({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:n,backgroundLooks:Aa(m),...ka(n)})},Ia=e=>{if(!m)return;let t=m.backgroundSource,n=t===`file:${e}`||t===`url:${e}`||t===e;Z({backgroundCustom:m.backgroundCustom.filter(t=>t!==e),...n?{backgroundSource:null,backgroundLooks:Aa(m),...ka(null)}:{}})},La=async()=>{if(!m)return;let t=await We();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;m.protectedPaths.includes(r)||await Z({protectedPaths:[...m.protectedPaths,r]})},Ra=()=>{let e=Or.trim();m&&e&&!m.protectedPaths.includes(e)&&(kr(``),Z({protectedPaths:[...m.protectedPaths,e]}))},za=()=>{if(!m||!wr)return;let e=wr.value.trim(),t=wr.from;Tr(null),e.length!==0&&e!==t&&Z({protectedPaths:m.protectedPaths.map(n=>n===t?e:n)})},Ba=e=>{m&&Z({protectedPaths:m.protectedPaths.filter(t=>t!==e)})},Va=async()=>{let e=await ke();e.length>0&&await Z({protectedPaths:e})},Ha=()=>{if(!m||!Er)return;let e=Er.value.trim(),t=Er.from;Dr(null),e&&e!==t&&Z({directoryIndexBlacklist:m.directoryIndexBlacklist.map(n=>n===t?e:n)})},Ua=()=>{let e=Ar.trim();m&&e&&!m.directoryIndexBlacklist.includes(e)&&(jr(``),Z({directoryIndexBlacklist:[...m.directoryIndexBlacklist,e]}))},Wa=async()=>{if(!m)return;let t=await We();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;m.directoryIndexBlacklist.includes(r)||await Z({directoryIndexBlacklist:[...m.directoryIndexBlacklist,r]})},Ga=e=>{m&&Z({directoryIndexBlacklist:m.directoryIndexBlacklist.filter(t=>t!==e)})},Ka=async()=>{let e=await Ne();Z({directoryIndexBlacklist:e.directoryIndexBlacklist})},qa=()=>{if(!m||Mr===null)return;let e=Mr.trim()||p().timeFormatPattern;Ur(null),e!==m.timeFormatPattern&&Z({timeFormatPattern:e})},Ja=(e,t)=>{Gr(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return xe(wn,i),i})},Q=me(m?.accentColor,ge),$=me(m?.secondaryColor,he),Ya=(e,t)=>{m&&(Ja(`accent`,Q),Ja(`secondary`,$),Z({accentColor:e,secondaryColor:t}))},Xa=(e,t)=>{m&&(Ja(e,e===`accent`?Q:$),Z(e===`accent`?{accentColor:t}:{secondaryColor:t}))},Za=async()=>{Mi(!0),Pi(null);try{Ai(await ie())}catch{Pi(l(`could_not_check_for_updates`))}finally{Mi(!1)}},Qa=async()=>{Li.current=!1,Pi(null),Fi({phase:`changelog`,changelog:``,downloaded:0,total:0,percent:0});try{let e=await s();e.ok||$a(e.error??``)}catch(e){$a(e instanceof Error?e.message:String(e))}},$a=e=>Fi(t=>t&&{...t,phase:`error`,error:e}),eo=()=>{Fi(null),se().catch(e=>Pi(e instanceof Error?e.message:String(e)))},to=async()=>{Fi(e=>e&&{...e,phase:`installing`});try{let e=await i();e.ok||$a(e.error??l(`the_update_failed`))}catch(e){$a(e instanceof Error?e.message:String(e))}};(0,C.useEffect)(()=>oe(e=>Fi(t=>t&&{...t,phase:e.phase,downloaded:e.downloaded,total:e.total,percent:e.percent,error:e.error??t.error})),[]),(0,C.useEffect)(()=>ae(e=>Fi(t=>t&&{...t,changelog:e.text})),[]),(0,C.useEffect)(()=>{q?.phase!==`ready`||Li.current||(Li.current=!0,to())},[q?.phase]);let no=async()=>{if(!m||!W)return;let e=W.name.trim()||`${W.accent.toUpperCase()} / ${W.secondary.toUpperCase()}`,t=[...m.themePresets,{name:e,accent:W.accent,secondary:W.secondary}];Di(null),await Z({themePresets:t})},ro=async e=>{m&&await Z({themePresets:m.themePresets.filter((t,n)=>n!==e)})},io=e=>{let t=Ri;zi(null),t&&t.role===e&&(e===`accent`?Q:$).toLowerCase()!==t.color.toLowerCase()&&Ja(e,t.color)},ao=async()=>{let e=Rn.trim();if(e&&!E){O(!0),j(null);try{dn(await Xt(e,Qn)),Zn(``)}catch{j(l(`could_not_add_the_tag`))}finally{O(!1)}}},oo=async(e,t)=>{dn(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Zt(e,t)||j(l(`could_not_change_the_tag_s_color`))},so=async e=>{if(E)return;O(!0),j(null);let t=await Yt(e);dn(await Jt()),t||j(`"${e}" is still used by a folder whose index could not be updated.`),O(!1)},co=async()=>{let e=fn;if(!e||E)return;let t=e.value.trim();t.length===0||t===e.name?mn(null):(O(!0),j(null),await Qt(e.name,t)?(dn(await Jt()),mn(null)):j(`Could not rename "${e.name}".`),O(!1))},lo=async e=>{let t=new Set(Y.columns??be().columns??[]);t.has(e)?t.delete(e):t.add(e);let n=Xe.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await Z({defaultView:{...Y,columns:n}})},uo=async()=>{if(jt)return;let e=!ya;Nt(!0),It(null);try{let t=await dt(e),r=t.registered&&t.pathMatches;At(t),h(e=>e&&{...e,linksEnabled:r}),n(),r!==e&&It(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{It(`The request to Windows failed. Try again.`)}finally{Nt(!1)}},fo=async e=>{if(!Ee){Pe(!0);try{Ce(await Te(e)),n()}finally{Pe(!1)}}},po=async()=>{if(en||!m)return;let e=!va;tn(!0),rn(null);try{let t=await Ie(e);zt(t);let r=ha?t.registered&&t.pathMatches:e;h(e=>e&&{...e,defaultFileManager:r}),n(),ha&&r!==e&&rn(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{rn(`The request to Windows failed. Try again.`)}finally{tn(!1)}},mo=async()=>{if(!Vt){Ht(!0),Kt(null);try{let e=await Ae();Rt(e);let t=e.registered&&e.pathMatches;h(e=>e&&{...e,archiveHandler:t}),n(),t||Kt(`Windows did not accept the archive registration. Try again.`)}catch{Kt(`The request to Windows failed. Try again.`)}finally{Ht(!1)}}},ho=async()=>{if(!Vt){Ht(!0),Kt(null);try{let e=await De();Rt(e),h(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&Kt(`The registration is still there. Try turning it off again.`)}catch{Kt(`The request to Windows failed. Try again.`)}finally{Ht(!1)}}},go=async(e,t)=>{if(!m)return;let n={...m.extensionIcons};t===null?delete n[e]:n[e]=t,await Z({extensionIcons:n})};(0,C.useEffect)(()=>{Be().then(Zi,()=>void 0)},[]);let _o=_t(m?.shortcuts),vo=e=>e===hn?ft(m?.globalHotkey):_o[e],yo=(0,C.useMemo)(()=>{let e=new Map;for(let{id:t}of gn)for(let n of t===hn?ft(m?.globalHotkey):_o[t]){let r=e.get(n)??[];r.push(t),e.set(n,r)}return e},[_o,m?.globalHotkey]),bo=e=>{let t=new Set;for(let n of vo(e))for(let r of yo.get(n)??[]){if(r===e)continue;let n=gn.find(e=>e.id===r);n&&t.add(l(n.label))}return[...t]},xo=(e,t)=>{Z(e===hn?{globalHotkey:t.length>0?ht(t):null}:{shortcuts:{...m?.shortcuts,[e]:ht(t)}})},So=(e,t)=>{let n=[...vo(e)];n.splice(t,1),xo(e,n)};(0,C.useEffect)(()=>{if(!T)return;let e=e=>[`control`,`alt`,`shift`,`meta`].includes(e.toLowerCase()),t=e=>{let t=[...vo(T.action)];T.index>=0?t[T.index]=e:t.includes(e)||t.push(e),an(null),sn(``),xo(T.action,t)},n=n=>{if(n.preventDefault(),n.stopPropagation(),n.key===`Escape`){an(null),sn(``);return}if(e(n.key)){T.action===`openInNewTab`?t(Ye(n)):sn(Ye(n));return}let r=Ye(n);r&&t(r)},r=t=>{e(t.key)&&sn(``)};return window.addEventListener(`keydown`,n,!0),window.addEventListener(`keyup`,r,!0),()=>{window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`keyup`,r,!0)}},[T,m]);let Co=async e=>{await Z({recentLimit:Math.min(Math.max(e,0),50)})},wo=(e,t)=>{let n=t??Kr[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};ni(t=>({...t,[e]:void 0})),Z(i)},To=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;Gi(null),await Z({sharePortMode:`custom`,sharePort:n}),await Ge(n,`custom`)},Eo=async e=>{let t=e===`custom`,n=t?m?.sharePort??p().sharePort:null;await Z({sharePortMode:t?`custom`:`random`,sharePort:n}),await Ge(n,t?`custom`:`random`)};(0,C.useEffect)(()=>{qe().then(Yi,()=>void 0)},[]);let Do=async()=>{Ki.length!==0&&(Yi(await Ue(Ki)),qi(``))},Oo=async()=>{Yi(await Ue(null))},ko=async()=>{let e=await mt([`.pfx`,`.p12`]);e&&($i(e),ta(``),ra(null))},Ao=async()=>{if(Qi)try{Zi(await ut(Qi,ea.length>0?ea:null)),$i(null),ta(``),ra(null)}catch(e){ra(e instanceof Error?e.message:String(e))}},jo=async()=>{try{Zi(await Je()),ra(null)}catch(e){ra(e instanceof Error?e.message:String(e))}},Mo=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;la(!0),sa(null);try{let e=await st(t);aa(e),sa(e.error),e.error||await Z({startupMode:t})}finally{la(!1)}},No=async e=>{await Z({galleryRoots:e.length>0?e:null})},Po=async()=>{let e=await We(),t=m?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await No([...t,e])},Fo=async()=>{let e=Ke.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await go(e,ot),Ze(``))},Io=async(e,t)=>{let n={...m?.fonts};t?n[e]=t:delete n[e],await Z({fonts:n})};return(0,w.jsxs)(In,{children:[(0,w.jsxs)(Ln,{ref:fa,children:[(0,w.jsxs)(A,{ref:X(`application`),children:[(0,w.jsx)(k,{note:`the_build_its_yafm_links_and_what_reopens_at_launch`,title:`application`,onReset:()=>J({id:`application`,label:`application`})}),(0,w.jsxs)(M,{children:[(0,w.jsxs)(N,{children:[(0,w.jsx)(I,{children:l(`version`)}),(0,w.jsx)(B,{children:e?`v${e.version}`:`—`})]}),(0,w.jsxs)(N,{children:[(0,w.jsx)(I,{children:l(`platform`)}),(0,w.jsx)(B,{children:e?.platform??`—`})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`language`)}),(0,w.jsx)(R,{children:l(`the_language_the_interface_uses_english_is_the_default_the_system_option_follows_the_operating_system`)})]}),(0,w.jsx)(F,{children:(0,w.jsx)(Nn,{disabled:!m,onChange:e=>void Z({language:e}),options:[xn,...ue.length>0?ue:[_n]],value:m?.language??_n})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`picker_window_size`)}),(0,w.jsx)(R,{children:l(`the_size_the_folder_and_file_picker_opens_at_width_and_height_are_in_pixels`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Hr,{inputMode:`numeric`,onBlur:e=>wo(`width`,e.currentTarget.value),onChange:e=>ni(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Kr.width??String(m?.pickerWindowWidth??p().pickerWindowWidth)}),(0,w.jsx)(B,{children:`×`}),(0,w.jsx)(Hr,{inputMode:`numeric`,onBlur:e=>wo(`height`,e.currentTarget.value),onChange:e=>ni(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Kr.height??String(m?.pickerWindowHeight??p().pickerWindowHeight)})]})]}),ha&&(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`windows_properties`)}),(0,w.jsx)(R,{children:l(`properties_opens_the_windows_page_with_its_security_and_details_tabs_instead_of_the_page_built_into_the_app`)})]}),(0,w.jsx)(F,{children:(0,w.jsx)(H,{$on:m?.systemPropertiesSheet??p().systemPropertiesSheet,disabled:!m,onClick:()=>void Z({systemPropertiesSheet:!m?.systemPropertiesSheet}),type:`button`,children:(0,w.jsx)(U,{})})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`web_server_port`)}),(0,w.jsx)(R,{children:l(`random_asks_the_operating_system_for_one_free_port_when_the_first_web_share_starts_and_every_web_share_keeps_using_it_custom_always_tries_the_port_below`)})]}),(0,w.jsx)(F,{children:(0,w.jsx)(He,{disabled:!m,onChange:e=>void Eo(e),options:[{value:`random`,label:l(`random`)},{value:`custom`,label:l(`custom_port`)}],value:m?.sharePortMode??p().sharePortMode,width:160})})]}),m?.sharePortMode===`custom`&&(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`custom_port`)}),(0,w.jsx)(R,{children:l(`a_number_from_1_to_65535_if_it_is_already_in_use_the_app_asks_for_a_free_port_instead`)})]}),(0,w.jsx)(F,{children:(0,w.jsx)(Hr,{inputMode:`numeric`,onBlur:e=>void To(e.currentTarget.value),onChange:e=>Gi(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:Wi??(m?.sharePort?String(m.sharePort):``)})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`link_paths`)}),(0,w.jsx)(R,{children:l(`relative_links_keep_working_when_the_link_and_its_target_move_together_absolute_links_always_store_the_full_target_path`)})]}),(0,w.jsx)(F,{children:(0,w.jsx)(He,{disabled:!m,onChange:e=>void Z({linkPathMode:e}),options:[{value:`relative`,label:l(`relative`)},{value:`absolute`,label:l(`absolute`)}],value:m?.linkPathMode??p().linkPathMode,width:160})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`open_yafm_links`)}),(0,w.jsx)(R,{children:l(`registers_this_app_for_yafm_links_for_the_current_user_only_turning_it_on_writes_this_copy_s_path_starting_the_app_never_touches_the_registry`)}),Dt.registered&&!Dt.pathMatches&&(0,w.jsx)(z,{children:l(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:Dt.registeredPath??`?`})}),Ft&&(0,w.jsx)(z,{children:Ft})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Vr,{$on:ya,children:l(ya?`active`:`off`)}),(0,w.jsx)(H,{$on:ya,disabled:jt,onClick:()=>void uo(),title:l(ya?`stop_opening_yafm_links`:`open_yafm_links_with_this_app`),type:`button`,children:(0,w.jsx)(U,{})})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`use_as_the_default_file_manager`)}),(0,w.jsx)(R,{children:l(`registers_this_app_for_folder_opens_on_this_account_explorer_stays_available_from_the_context_menu_on_linux_this_sets_the_inode_directory_default`)}),b?.registered&&!b.pathMatches&&(0,w.jsx)(z,{children:l(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:b.registeredPath??`?`})}),nn&&(0,w.jsx)(z,{children:nn})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Vr,{$on:va,children:l(va?`active`:`off`)}),(0,w.jsx)(H,{$on:va,disabled:!m||en,onClick:()=>void po(),title:l(va?`stop_using_this_app_for_folders`:`use_this_app_for_folders`),type:`button`,children:(0,w.jsx)(U,{})})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`open_archives_with_this_app`)}),(0,w.jsx)(R,{children:l(`registers_this_app_for_zip_7z_rar_tar_and_the_other_archive_types_on_this_account_so_double_clicking_one_shows_it_as_a_folder_here_windows_may_still_ask_once_which_app_to_use`)}),(0,w.jsx)(R,{children:l(`when_this_is_off_opening_an_archive_uses_the_system_s_default_application_instead`)}),y?.registered&&!y.pathMatches&&(0,w.jsx)(z,{children:l(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:y.registeredPath??`?`})}),Wt&&(0,w.jsx)(z,{children:Wt})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Vr,{$on:ga,children:l(ga?`active`:`off`)}),(0,w.jsxs)(G,{disabled:!m||Vt||ga,onClick:()=>void mo(),type:`button`,children:[(0,w.jsx)(Bt,{size:13}),l(`register`)]}),e?.platform===`windows`&&(0,w.jsxs)(G,{onClick:()=>void ce(`ms-settings:defaultapps`),type:`button`,children:[(0,w.jsx)(xt,{size:13}),l(`default_apps`)]}),(0,w.jsxs)(Br,{disabled:!m||Vt||!_a,onClick:()=>void ho(),type:`button`,children:[(0,w.jsx)(S,{size:13}),l(`unregister`)]})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`reopen_the_tabs_that_were_open`)}),(0,w.jsx)(R,{children:l(`keeps_the_tabs_and_the_folder_each_one_shows_so_they_come_back_after_a_restart_a_folder_passed_on_the_command_line_takes_over_instead`)})]}),(0,w.jsx)(H,{$on:m?.restoreTabs??p().restoreTabs,disabled:!m,onClick:()=>void Z({restoreTabs:!m?.restoreTabs}),type:`button`,children:(0,w.jsx)(U,{})})]})]})]}),(0,w.jsxs)(A,{ref:X(`share-access`),children:[(0,w.jsx)(k,{note:`share_access_note`,title:`share_access`,onReset:()=>J({id:`share-access`,label:`share_access`})}),(0,w.jsxs)(M,{children:[(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(I,{children:l(`share_access_require_approval`)}),(0,w.jsx)(g,{})]}),(0,w.jsx)(R,{children:l(`share_access_note`)})]}),(0,w.jsx)(H,{$on:m?.shareAccessEnabled??p().shareAccessEnabled,disabled:!m,onClick:()=>void Z({shareAccessEnabled:!(m?.shareAccessEnabled??p().shareAccessEnabled)}),type:`button`,children:(0,w.jsx)(U,{})})]}),(0,w.jsxs)(N,{children:[(0,w.jsx)(P,{children:(0,w.jsx)(I,{children:l(`share_access_approval_minutes`)})}),(0,w.jsx)(F,{children:(0,w.jsx)(Nr,{max:1440,min:1,onChange:e=>void Z({shareApprovalMinutes:Math.min(1440,Math.max(1,Number(e.target.value)||60))}),type:`number`,value:m?.shareApprovalMinutes??p().shareApprovalMinutes})})]}),(0,w.jsxs)(N,{children:[(0,w.jsx)(P,{children:(0,w.jsx)(I,{children:l(`share_access_denial_seconds`)})}),(0,w.jsx)(F,{children:(0,w.jsx)(Nr,{max:3600,min:1,onChange:e=>void Z({shareDenialSeconds:Math.min(3600,Math.max(1,Number(e.target.value)||10))}),type:`number`,value:m?.shareDenialSeconds??p().shareDenialSeconds})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(L,{children:(0,w.jsx)(I,{children:l(`password`)})}),(0,w.jsx)(R,{children:l(`share_access_password_note`)}),Ji&&(0,w.jsx)(R,{children:l(`share_access_password_is_set`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Pr,{autoComplete:`new-password`,onChange:e=>qi(e.target.value),placeholder:l(`password`),type:`password`,value:Ki}),(0,w.jsxs)(G,{disabled:Ki.length===0,onClick:()=>void Do(),type:`button`,children:[(0,w.jsx)(Pt,{size:13}),l(`save`)]}),Ji&&(0,w.jsxs)(Br,{onClick:()=>void Oo(),type:`button`,children:[(0,w.jsx)(S,{size:13}),l(`clear`)]})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`share_access_https`)}),(0,w.jsx)(R,{children:l(`share_access_https_note`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Vr,{$on:m?.shareHttps??p().shareHttps,children:m?.shareHttps?l(`active`):l(`off`)}),(0,w.jsx)(H,{$on:m?.shareHttps??p().shareHttps,disabled:!m,onClick:()=>void Z({shareHttps:!(m?.shareHttps??p().shareHttps)}),title:m?.shareHttps?l(`share_access_https_off`):l(`share_access_https_on`),type:`button`,children:(0,w.jsx)(U,{})})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`share_access_certificate`)}),(0,w.jsx)(R,{children:Xi?`${Xi.subject} · ${l(`share_access_expires`)}: ${new Date(Xi.expiresAt).toLocaleString()}`:l(`share_access_certificate_self_signed`)}),Xi&&(0,w.jsx)(R,{children:Xi.selfSigned?l(`share_access_certificate_self_signed`):l(`share_access_certificate_imported`)}),na&&(0,w.jsx)(z,{children:na})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(V,{onClick:()=>void ko(),type:`button`,children:l(`share_access_import_certificate`)}),(0,w.jsx)(V,{onClick:()=>void jo(),type:`button`,children:l(`share_access_reset_certificate`)})]})]}),Qi&&(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`password`)}),(0,w.jsx)(R,{children:Qi})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Pr,{autoComplete:`off`,onChange:e=>ta(e.target.value),placeholder:l(`password`),type:`password`,value:ea}),(0,w.jsx)(V,{onClick:()=>void Ao(),type:`button`,children:l(`ok`)}),(0,w.jsx)(V,{onClick:()=>$i(null),type:`button`,children:l(`cancel`)})]})]}),(0,w.jsx)(N,{children:(0,w.jsxs)(P,{children:[(0,w.jsx)(L,{children:(0,w.jsx)(I,{children:l(`devices`)})}),(0,w.jsx)(R,{children:l(`share_access_devices_note`)})]})}),(0,w.jsx)(En,{approvalMinutes:m?.shareApprovalMinutes??p().shareApprovalMinutes,denialSeconds:m?.shareDenialSeconds??p().shareDenialSeconds})]})]}),(0,w.jsxs)(A,{ref:X(`startup`),children:[(0,w.jsx)(k,{note:`how_the_app_joins_your_login_session_and_whether_it_opens_quietly_in_the_tray`,title:`startup`,onReset:()=>J({id:`startup`,label:`startup`})}),(0,w.jsxs)(M,{children:[(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`start_with_the_computer`)}),(0,w.jsx)(R,{children:l(`a_shortcut_uses_the_startup_folder_or_xdg_autostart_a_task_uses_task_scheduler_or_a_systemd_user_service_which_starts_earlier_and_is_usually_faster`)}),oa&&(0,w.jsx)(z,{children:oa}),ia&&!ia.supported&&(0,w.jsx)(z,{children:l(`this_platform_cannot_create_a_per_user_startup_entry`)})]}),(0,w.jsx)(F,{children:(0,w.jsx)(He,{disabled:!m||ca||ia!==null&&!ia.supported,onChange:e=>void Mo(e),options:[{value:`none`,label:l(`none`)},{value:`shortcut`,label:l(`shortcut`)},{value:`task`,label:l(`scheduled_task`)}],value:ia?.mode??m?.startupMode??p().startupMode,width:170})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`start_hidden_in_the_tray`)}),(0,w.jsx)(R,{children:l(`launch_straight_to_the_tray_icon_instead_of_showing_the_window_the_tray_menu_opens_it_again`)})]}),(0,w.jsx)(F,{children:(0,w.jsx)(H,{$on:m?.startHidden??p().startHidden,disabled:!m,onClick:()=>void Z({startHidden:!m?.startHidden}),type:`button`,children:(0,w.jsx)(U,{})})})]})]})]}),(0,w.jsxs)(A,{ref:X(`fonts`),children:[(0,w.jsx)(k,{note:`choose_the_font_each_part_of_the_interface_uses_every_font_installed_on_this_system_is_listed_each_one_drawn_in_its_own_face`,title:`fonts`,onReset:()=>J({id:`fonts`,label:`fonts`})}),(0,w.jsxs)(M,{children:[ct.map(e=>(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(e.label)}),(0,w.jsx)(R,{children:l(`falls_back_to_font_until_another_family_is_chosen`,{font:l(e.fallback)})})]}),(0,w.jsx)(F,{children:(0,w.jsx)($t,{defaultLabel:l(e.fallback),disabled:!m,fonts:Hi,onChange:t=>void Io(e.id,t),sample:e.sample,value:m?.fonts?.[e.id]??null})})]},e.id)),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`reset`)}),(0,w.jsx)(R,{children:l(`back_to_the_app_s_built_in_font_for_every_role`)})]}),(0,w.jsx)(F,{children:(0,w.jsxs)(G,{onClick:()=>void Z({fonts:{}}),type:`button`,children:[(0,w.jsx)(x,{size:13}),l(`reset`)]})})]})]})]}),(0,w.jsxs)(A,{ref:X(`time`),children:[(0,w.jsx)(k,{note:`every_timestamp_in_the_interface_uses_this_format_follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`,title:`time_format`,onReset:()=>J({id:`time`,label:`time_format`})}),(0,w.jsxs)(M,{children:[(0,w.jsxs)(Bn,{children:[(0,w.jsxs)(Vn,{children:[(0,w.jsx)(I,{children:l(`format`)}),(0,w.jsx)(R,{children:l(`follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`)})]}),(0,w.jsx)(pi,{children:yn.map(e=>(0,w.jsx)(mi,{$active:(m?.timeFormat??p().timeFormat)===e.id,onClick:()=>void Z({timeFormat:e.id}),type:`button`,children:l(e.label)},e.id))}),(m?.timeFormat??p().timeFormat)===`custom`&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(hi,{"aria-label":l(`pattern`),onBlur:qa,onChange:e=>Ur(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),qa()):e.key===`Escape`&&Ur(null)},spellCheck:!1,value:Mr??m?.timeFormatPattern??p().timeFormatPattern}),(0,w.jsx)(R,{children:l(`tokens_yyyy_year_mm_month_dd_day_hh_24_hour_mm_minute_ss_second_hh_12_hour_and_a_am_pm_other_characters_are_copied`)})]}),(0,w.jsxs)(gi,{children:[(0,w.jsx)(`span`,{children:l(`preview`)}),(0,w.jsx)(`code`,{children:pe(bn,m?.timeFormat,Mr??m?.timeFormatPattern)})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`relative_times`)}),(0,w.jsx)(R,{children:l(`shows_recent_timestamps_as_seconds_and_minutes_ago_and_keeps_them_counting`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Vr,{$on:m?.relativeTime??p().relativeTime,children:m?.relativeTime??p().relativeTime?l(`active`):l(`off`)}),(0,w.jsx)(H,{$on:m?.relativeTime??p().relativeTime,disabled:!m,onClick:()=>void Z({relativeTime:!(m?.relativeTime??p().relativeTime)}),title:l(`show_recent_timestamps_as_seconds_and_minutes_ago`),type:`button`,children:(0,w.jsx)(U,{})})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`switch_to_the_full_time_after`)}),(0,w.jsx)(R,{children:l(`older_timestamps_use_the_format_above_instead_of_a_relative_one`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Xr,{disabled:!(m?.relativeTime??p().relativeTime),max:1440,min:1,onChange:e=>void Z({relativeTimeWindowMinutes:Number(e.target.value)}),step:1,type:`range`,value:m?.relativeTimeWindowMinutes??p().relativeTimeWindowMinutes}),(0,w.jsxs)(B,{children:[m?.relativeTimeWindowMinutes??p().relativeTimeWindowMinutes,` min`]})]})]})]})]}),(0,w.jsxs)(A,{ref:X(`updates`),children:[(0,w.jsx)(k,{note:`the_running_build_and_the_newest_one_published`,title:`updates`}),(0,w.jsxs)(M,{children:[(0,w.jsxs)(N,{children:[(0,w.jsx)(I,{children:l(`current_version`)}),(0,w.jsx)(B,{children:e?`v${e.version}`:`—`})]}),(0,w.jsxs)(N,{children:[(0,w.jsx)(I,{children:l(`latest_version`)}),(0,w.jsx)(B,{children:K?`v${K.latest}`:`—`})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:K?K.available?l(`version_version_is_available`,{version:K.latest}):l(`you_are_on_the_latest_version`):l(`not_checked_yet`)}),(0,w.jsx)(R,{children:K?.available?l(`the_installer_downloads_installs_itself_and_closes_the_app`):l(`reads_the_version_file_the_release_workflow_publishes`)})]}),(0,w.jsxs)(F,{children:[K?.available&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(G,{onClick:()=>void ne(),type:`button`,children:[(0,w.jsx)(Ot,{size:13}),l(`open_release_page`)]}),ha&&(0,w.jsxs)(G,{disabled:q!==null,onClick:()=>void Qa(),type:`button`,children:[(0,w.jsx)(Tt,{size:13}),l(`download_and_install`)]})]}),(0,w.jsxs)(G,{disabled:ji||q!==null,onClick:()=>void Za(),type:`button`,children:[(0,w.jsx)(x,{size:13}),l(ji?`checking`:`check_for_updates`)]}),(0,w.jsxs)(G,{onClick:()=>void o(),type:`button`,children:[(0,w.jsx)(wt,{size:13}),l(`open_log_folder`)]})]})]}),Ni&&(0,w.jsx)(N,{children:(0,w.jsx)(z,{children:Ni})})]})]}),(0,w.jsxs)(A,{ref:X(`colors`),children:[(0,w.jsx)(k,{note:`the_accent_and_highlight_colours_the_whole_window_uses`,title:`colors`,onReset:()=>J({id:`colors`,label:`colors`})}),(0,w.jsxs)(M,{children:[(0,w.jsxs)(Bn,{children:[(0,w.jsxs)(Vn,{children:[(0,w.jsx)(I,{children:l(`theme`)}),(0,w.jsx)(R,{children:l(`follow_the_operating_system_or_always_use_the_light_or_dark_palette`)})]}),(0,w.jsx)(pi,{children:vn.map(e=>(0,w.jsx)(mi,{$active:(m?.themeMode??p().themeMode)===e.id,onClick:()=>void Z({themeMode:e.id}),type:`button`,children:l(e.label)},e.id))})]}),(0,w.jsxs)(Bn,{children:[(0,w.jsxs)(Vn,{children:[(0,w.jsx)(I,{children:l(`presets`)}),(0,w.jsx)(R,{children:l(`one_click_changes_the_accent_and_the_highlight_together`)})]}),(0,w.jsxs)(Hn,{children:[yt.map(e=>(0,w.jsxs)(Un,{$on:Q.toLowerCase()===e.accent&&$.toLowerCase()===e.secondary,onClick:()=>Ya(e.accent,e.secondary),title:`${l(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,w.jsxs)(Xn,{children:[(0,w.jsx)(`i`,{style:{background:e.accent}}),(0,w.jsx)(`i`,{style:{background:e.secondary}})]}),(0,w.jsx)(Wn,{children:l(e.name)})]},e.name)),ma.map((e,t)=>(0,w.jsxs)(Gn,{children:[(0,w.jsxs)(Un,{$on:Q.toLowerCase()===e.accent.toLowerCase()&&$.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>Ya(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,w.jsxs)(Xn,{children:[(0,w.jsx)(`i`,{style:{background:e.accent}}),(0,w.jsx)(`i`,{style:{background:e.secondary}})]}),(0,w.jsx)(Wn,{children:e.name})]}),(0,w.jsx)(Kn,{onClick:()=>void ro(t),title:l(`remove_preset`),type:`button`,children:(0,w.jsx)(S,{size:9})})]},`${e.name}-${t}`)),W?(0,w.jsxs)(Jn,{children:[(0,w.jsxs)(Xn,{children:[(0,w.jsx)(`i`,{style:{background:W.accent}}),(0,w.jsx)(`i`,{style:{background:W.secondary}})]}),(0,w.jsx)(Yn,{autoFocus:!0,maxLength:24,onChange:e=>Di({...W,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),no()):e.key===`Escape`&&(e.preventDefault(),Di(null))},placeholder:l(`preset_name`),spellCheck:!1,value:W.name}),(0,w.jsxs)(V,{onClick:()=>void no(),type:`button`,children:[(0,w.jsx)(Pt,{size:13}),l(`save`)]}),(0,w.jsxs)(V,{onClick:()=>Di(null),type:`button`,children:[(0,w.jsx)(S,{size:13}),l(`cancel`)]})]}):(0,w.jsxs)(qn,{disabled:!m,onClick:()=>Di({name:``,accent:Q,secondary:$}),title:l(`save_the_current_colours_as_a_preset`),type:`button`,children:[(0,w.jsx)(v,{size:12}),l(`add_preset`)]})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`accent_color`)}),(0,w.jsx)(R,{children:l(`buttons_selections_focus_rings_and_active_navigation`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Fn,{colors:Wr.accent,current:Q,onApply:e=>Xa(`accent`,e)}),(0,w.jsx)(Rr,{"aria-label":l(`accent_color`),disabled:!m,onBlur:()=>io(`accent`),onChange:e=>void Z({accentColor:e.target.value}),onFocus:()=>zi({role:`accent`,color:Q}),type:`color`,value:Q}),(0,w.jsx)(zr,{children:Q.toUpperCase()})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`secondary_color`)}),(0,w.jsx)(R,{children:l(`gradients_highlights_and_the_second_end_of_the_accent_ramp`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Fn,{colors:Wr.secondary,current:$,onApply:e=>Xa(`secondary`,e)}),(0,w.jsx)(Rr,{"aria-label":l(`secondary_color`),disabled:!m,onBlur:()=>io(`secondary`),onChange:e=>void Z({secondaryColor:e.target.value}),onFocus:()=>zi({role:`secondary`,color:$}),type:`color`,value:$}),(0,w.jsx)(zr,{children:$.toUpperCase()})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`reset_colors`)}),(0,w.jsx)(R,{children:l(`returns_the_interface_to_the_default_blue_and_indigo_theme`)})]}),(0,w.jsx)(F,{children:(0,w.jsxs)(V,{disabled:!m,onClick:()=>{Ja(`accent`,Q),Ja(`secondary`,$),Z({accentColor:null,secondaryColor:null})},type:`button`,children:[(0,w.jsx)(x,{size:13}),l(`reset`)]})})]})]})]}),(0,w.jsxs)(A,{ref:X(`background`),children:[(0,w.jsx)(k,{note:`a_picture_or_video_behind_the_whole_window_from_the_title_bar_to_the_bottom`,title:`background`,onReset:()=>J({id:`background`,label:`background`})}),(0,w.jsxs)(M,{children:[(0,w.jsxs)(Bn,{children:[(0,w.jsxs)(Vn,{children:[(0,w.jsx)(I,{children:l(`wallpaper`)}),(0,w.jsx)(R,{children:l(`none_keeps_the_normal_dark_surface_every_built_in_concept_comes_in_the_app_s_colour_presets_your_own_pictures_sv_gs_and_videos_are_kept_in_the_gallery`)})]}),(0,w.jsx)(ei,{children:(0,w.jsx)(ti,{$active:!m?.backgroundSource,onClick:()=>ja(null),title:l(`none`),type:`button`,children:(0,w.jsx)(ai,{children:l(`none`)})})}),(0,w.jsxs)(Zr,{children:[it.map(e=>(0,w.jsxs)(Qr,{children:[(0,w.jsx)($r,{children:l(e.name)}),(0,w.jsx)(ei,{children:e.variants.map(t=>(0,w.jsx)(ti,{$active:m?.backgroundSource===t.id,onClick:()=>ja(t.id),title:`${l(e.name)} · ${l(t.preset)}`,type:`button`,children:(0,w.jsx)(`img`,{alt:``,src:Ve===`light`?t.lightUrl:t.url})},t.id))})]},e.id)),(0,w.jsxs)(Qr,{children:[(0,w.jsx)($r,{children:l(`motion`)}),(0,w.jsx)(ei,{children:Qe.map(e=>(0,w.jsxs)(ti,{$active:m?.backgroundSource===e.id,onClick:()=>ja(e.id),title:l(e.name),type:`button`,children:[(0,w.jsx)(`img`,{alt:``,src:e.poster}),(0,w.jsx)(ri,{children:(0,w.jsx)(Mt,{size:11})})]},e.id))})]}),(0,w.jsxs)(Qr,{children:[(0,w.jsx)($r,{children:l(`custom`)}),(0,w.jsxs)(ei,{children:[(m?.backgroundCustom??[]).map(e=>(0,w.jsx)(Mn,{active:m?.backgroundSource===`file:${e}`||m?.backgroundSource===`url:${e}`||m?.backgroundSource===e,onRemove:()=>Ia(e),onSelect:()=>ja(fe(e)?`url:${e}`:`file:${e}`),path:e},e)),(0,w.jsxs)(ii,{onClick:()=>void Pa([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,w.jsx)(v,{size:12}),l(`image_2`)]}),(0,w.jsxs)(ii,{onClick:()=>void Pa([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,w.jsx)(v,{size:12}),l(`video`)]})]})]})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`image_or_video_url`)}),(0,w.jsx)(R,{children:l(`paste_a_direct_http_s_link_the_picture_or_video_is_loaded_from_the_network_each_time_the_window_starts`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Hr,{onChange:e=>da(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Fa()},placeholder:`https://…`,value:ua}),(0,w.jsxs)(V,{disabled:!fe(ua),onClick:()=>void Fa(),type:`button`,children:[(0,w.jsx)(v,{size:13}),l(`add`)]})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsx)(I,{children:l(`blur`)}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Xr,{max:40,min:0,onChange:e=>Ma({backgroundBlur:Number(e.target.value)}),type:`range`,value:m?.backgroundBlur??p().backgroundBlur}),(0,w.jsxs)(B,{children:[m?.backgroundBlur??p().backgroundBlur,`px`]})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsx)(I,{children:l(`saturation`)}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Xr,{max:200,min:0,onChange:e=>Ma({backgroundSaturation:Number(e.target.value)}),type:`range`,value:m?.backgroundSaturation??p().backgroundSaturation}),(0,w.jsxs)(B,{children:[m?.backgroundSaturation??p().backgroundSaturation,`%`]})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsx)(I,{children:l(`brightness`)}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Xr,{max:150,min:40,onChange:e=>Ma({backgroundBrightness:Number(e.target.value)}),type:`range`,value:m?.backgroundBrightness??p().backgroundBrightness}),(0,w.jsxs)(B,{children:[m?.backgroundBrightness??p().backgroundBrightness,`%`]})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`reset_the_look`)}),(0,w.jsx)(R,{children:l(`returns_this_background_to_the_default_blur_saturation_and_brightness`)})]}),(0,w.jsx)(F,{children:(0,w.jsxs)(V,{disabled:!m||m.backgroundBlur===0&&m.backgroundSaturation===100&&m.backgroundBrightness===100&&!Oa(m.backgroundSource),onClick:Na,type:`button`,children:[(0,w.jsx)(x,{size:13}),l(`reset`)]})})]})]})]}),(0,w.jsxs)(A,{ref:X(`safety`),children:[(0,w.jsx)(k,{note:`deleting_moving_renaming_or_writing_to_a_protected_folder_anything_inside_a_recursive_entry_or_a_folder_that_contains_one_always_waits_for_an_explicit_confirmation`,title:`safety`,onReset:()=>J({id:`safety`,label:`safety`})}),(0,w.jsxs)(M,{children:[(0,w.jsxs)(Bn,{children:[(0,w.jsxs)(Vn,{children:[(0,w.jsx)(I,{children:l(`protected_folders`)}),(0,w.jsx)(R,{children:l(`rules_are_full_path_globs_stays_inside_one_name_crosses_folders_and_matches_one_character_a_rule_without_a_folder_part_such_as_log_applies_to_that_name_at_any_depth_vars_vars_and_are_expanded_first`)})]}),(0,w.jsx)(oi,{children:(m?.protectedPaths??[]).map(e=>(0,w.jsxs)(si,{children:[(0,w.jsx)(ci,{"aria-label":l(`protected_path`),onBlur:za,onChange:t=>Tr({from:e,value:t.target.value}),onFocus:()=>Tr({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),za()):e.key===`Escape`&&Tr(null)},spellCheck:!1,value:wr?.from===e?wr.value:e}),(0,w.jsx)(li,{onClick:()=>Ba(e),title:l(`remove`),type:`button`,children:(0,w.jsx)(S,{size:10})})]},e))}),(0,w.jsxs)(di,{children:[(0,w.jsx)(fi,{"aria-label":l(`new_protected_rule`),onChange:e=>kr(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ra())},placeholder:`*.log`,spellCheck:!1,value:Or}),(0,w.jsxs)(V,{onClick:Ra,type:`button`,children:[(0,w.jsx)(v,{size:13}),l(`add_the_rule`)]})]}),(0,w.jsxs)(ui,{children:[(0,w.jsxs)(V,{onClick:()=>void Va(),type:`button`,children:[(0,w.jsx)(x,{size:13}),l(`restore_defaults`)]}),(0,w.jsxs)(V,{onClick:()=>void La(),type:`button`,children:[(0,w.jsx)(wt,{size:13}),l(`add_folder_2`)]})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`confirmation_delay`)}),(0,w.jsx)(R,{children:l(`the_delete_button_in_the_protected_folder_dialog_stays_disabled_for_this_many_seconds_at_least_2`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Xr,{max:30,min:2,onChange:e=>void Z({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:m?.deleteDelaySeconds??p().deleteDelaySeconds}),(0,w.jsxs)(B,{children:[m?.deleteDelaySeconds??p().deleteDelaySeconds,`s`]})]})]})]})]}),(0,w.jsxs)(A,{ref:X(`tags`),children:[(0,w.jsx)(k,{note:`every_tag_in_the_catalogue_add_rename_recolour_or_remove_them_here`,title:`tags`}),(0,w.jsxs)(M,{children:[(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(Ir,{"aria-label":l(`color_of_the_new_tag`),onChange:e=>$n(e.target.value),type:`color`,value:Qn}),(0,w.jsx)(Hr,{onChange:e=>Zn(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),ao())},placeholder:l(`new_tag`),spellCheck:!1,value:Rn})]}),(0,w.jsx)(R,{children:l(`add_a_tag_here_it_is_available_in_every_folder`)})]}),(0,w.jsx)(F,{children:(0,w.jsxs)(V,{disabled:E||Rn.trim().length===0,onClick:()=>void ao(),type:`button`,children:[(0,w.jsx)(v,{size:13}),l(`add`)]})})]}),Pn&&(0,w.jsx)(N,{children:(0,w.jsx)(z,{children:Pn})}),un.length===0&&(0,w.jsx)(N,{children:(0,w.jsx)(R,{children:l(`no_tags_yet_add_one_below_it_is_available_in_every_folder`)})}),un.map(e=>(0,w.jsx)(N,{children:fn?.name===e.name?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(Ir,{"aria-label":l(`color_of_tag`,{tag:e.name}),onChange:t=>void oo(e.name,t.target.value),title:l(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,w.jsx)(Lr,{autoFocus:!0,disabled:E,onChange:t=>mn({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),co()):e.key===`Escape`&&(e.preventDefault(),mn(null))},value:fn.value})]}),(0,w.jsx)(R,{children:l(`press_enter_to_save_escape_to_cancel`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsxs)(V,{disabled:E,onClick:()=>void co(),type:`button`,children:[(0,w.jsx)(Pt,{size:13}),l(`save`)]}),(0,w.jsxs)(V,{disabled:E,onClick:()=>mn(null),type:`button`,children:[(0,w.jsx)(S,{size:13}),l(`cancel`)]})]})]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(Ir,{"aria-label":l(`color_of_tag`,{tag:e.name}),onChange:t=>void oo(e.name,t.target.value),title:l(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,w.jsx)(I,{children:e.name})]}),(0,w.jsx)(R,{children:ve(l,e.folders,`used_in_1_folder_renaming_or_removing_it_updates_that_folder_s_index`,`used_in_count_folders_renaming_or_removing_it_updates_those_folders_indexes`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsxs)(V,{disabled:E,onClick:()=>mn({name:e.name,value:e.name}),type:`button`,children:[(0,w.jsx)(Ut,{size:13}),l(`edit`)]}),(0,w.jsxs)(Br,{disabled:E,onClick:()=>void so(e.name),type:`button`,children:[(0,w.jsx)(Gt,{size:13}),l(`remove`)]})]})]})},e.name))]})]}),(0,w.jsxs)(A,{ref:X(`files-view`),children:[(0,w.jsx)(k,{note:`the_defaults_every_folder_starts_with_a_folder_can_still_override_them`,title:`files_view`,global:!0,onReset:()=>J({id:`files-view`,label:`files_view`})}),(0,w.jsxs)(M,{children:[(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`default_view`)}),(0,w.jsx)(R,{children:l(`the_mode_every_folder_starts_with_a_folder_can_still_remember_its_own_list_or_grid_mode_from_the_title_bar`)})]}),(0,w.jsx)(F,{children:(0,w.jsxs)(Jr,{children:[(0,w.jsx)(Yr,{$on:Y.mode===`list`,onClick:()=>void Z({defaultView:{...Y,mode:`list`}}),type:`button`,children:l(`list`)}),(0,w.jsx)(Yr,{$on:Y.mode===`grid`,onClick:()=>void Z({defaultView:{...Y,mode:`grid`}}),type:`button`,children:l(`grid`)})]})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`list_icon_size`)}),(0,w.jsx)(R,{children:l(`the_icon_in_the_list_rows`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Xr,{max:48,min:16,onChange:e=>void Z({defaultView:{...Y,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Y.iconSize}),(0,w.jsxs)(B,{children:[Y.iconSize,`px`]})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`grid_size`)}),(0,w.jsx)(R,{children:l(`the_height_of_a_grid_tile_the_icon_inside_follows_it`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Xr,{max:260,min:100,onChange:e=>void Z({defaultView:{...Y,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Y.gridSize}),(0,w.jsxs)(B,{children:[Y.gridSize,`px`]})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(I,{children:l(`selection_checkboxes`)}),(0,w.jsx)(g,{})]}),(0,w.jsx)(R,{children:l(`show_a_checkbox_before_every_name_the_way_explorer_does_checked_entries_can_be_copied_cut_or_deleted_together`)})]}),(0,w.jsx)(H,{$on:m?.showCheckboxes??p().showCheckboxes,disabled:!m,onClick:()=>void Z({showCheckboxes:!(m?.showCheckboxes??p().showCheckboxes)}),type:`button`,children:(0,w.jsx)(U,{})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(I,{children:l(`open_with_a_single_click`)}),(0,w.jsx)(g,{})]}),(0,w.jsx)(R,{children:l(`off_means_double_click_like_explorer_s_default_the_checkbox_still_only_selects_so_a_click_on_it_never_opens_the_entry`)})]}),(0,w.jsx)(H,{$on:m?.openOnSingleClick??p().openOnSingleClick,disabled:!m,onClick:()=>void Z({openOnSingleClick:!(m?.openOnSingleClick??p().openOnSingleClick)}),type:`button`,children:(0,w.jsx)(U,{})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(I,{children:l(`open_the_file_tray_while_dragging`)}),(0,w.jsx)(g,{})]}),(0,w.jsx)(R,{children:l(`the_tray_appears_when_a_drag_starts_and_closes_again_if_it_is_still_empty_off_leaves_it_to_the_title_bar_button`)})]}),(0,w.jsx)(H,{$on:m?.trayAutoShow??p().trayAutoShow,disabled:!m,onClick:()=>void Z({trayAutoShow:!(m?.trayAutoShow??p().trayAutoShow)}),type:`button`,children:(0,w.jsx)(U,{})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(I,{children:l(`confirm_before_deleting`)}),(0,w.jsx)(g,{})]}),(0,w.jsx)(R,{children:l(`asks_before_moving_items_to_the_recycle_bin_shift_del_always_asks_because_that_deletes_permanently`)})]}),(0,w.jsx)(H,{$on:m?.confirmDelete??p().confirmDelete,disabled:!m,onClick:()=>void Z({confirmDelete:!(m?.confirmDelete??p().confirmDelete)}),type:`button`,children:(0,w.jsx)(U,{})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(I,{children:l(`automatic_rename_suffix`)}),(0,w.jsx)(g,{})]}),(0,w.jsx)(R,{children:l(`the_suffix_added_when_a_copy_or_a_new_item_would_have_the_same_name`)})]}),(0,w.jsx)(F,{children:(0,w.jsx)(He,{disabled:!m,onChange:e=>void Z({conflictNameStyle:e}),options:[{value:`space_parentheses`,label:`Test (1).txt`},{value:`underscore`,label:`Test_1.txt`},{value:`dot`,label:`Test.1.txt`}],value:m?.conflictNameStyle??p().conflictNameStyle,width:160})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(I,{children:l(`play_audio_in_video_previews`)}),(0,w.jsx)(g,{})]}),(0,w.jsx)(R,{children:l(`video_previews_play_muted_by_default_turn_this_on_to_hear_their_audio_while_the_details_panel_is_open`)})]}),(0,w.jsx)(H,{$on:m?.previewVideoAudio??p().previewVideoAudio,disabled:!m,onClick:()=>void Z({previewVideoAudio:!(m?.previewVideoAudio??p().previewVideoAudio)}),type:`button`,children:(0,w.jsx)(U,{})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(I,{children:l(`autoplay_video_previews`)}),(0,w.jsx)(g,{})]}),(0,w.jsx)(R,{children:l(`off_by_default_turn_this_on_to_start_a_video_as_soon_as_its_details_panel_opens_the_play_button_still_works_when_it_is_off`)})]}),(0,w.jsx)(H,{$on:m?.previewVideoAutoplay??p().previewVideoAutoplay,disabled:!m,onClick:()=>void Z({previewVideoAutoplay:!(m?.previewVideoAutoplay??p().previewVideoAutoplay)}),type:`button`,children:(0,w.jsx)(U,{})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(I,{children:l(`preview_panel_under_the_list`)}),(0,w.jsx)(g,{})]}),(0,w.jsx)(R,{children:l(`shows_the_pictures_videos_and_documents_the_shell_can_preview_as_grid_tiles_below_the_list_the_tiles_follow_the_grid_size_and_the_panel_only_appears_in_list_mode`)})]}),(0,w.jsx)(H,{$on:Y.showImages??!0,onClick:()=>void Z({defaultView:{...Y,showImages:!(Y.showImages??!0)}}),type:`button`,children:(0,w.jsx)(U,{})})]}),(0,w.jsx)(N,{children:(0,w.jsxs)(P,{children:[(0,w.jsxs)(L,{children:[(0,w.jsx)(I,{children:l(`columns`)}),(0,w.jsx)(g,{})]}),(0,w.jsx)(R,{children:l(`shown_in_every_folder_changing_them_changes_all_folders_at_once`)})]})}),(0,w.jsx)(N,{children:(0,w.jsxs)(_i,{children:[Xe.map(e=>(0,w.jsxs)(vi,{children:[(0,w.jsx)(`input`,{checked:(Y.columns??[]).includes(e.id),onChange:()=>void lo(e.id),type:`checkbox`}),(0,w.jsx)(`span`,{children:l(e.label)})]},e.id)),(0,w.jsxs)(vi,{children:[(0,w.jsx)(`input`,{checked:(Y.columns??[]).includes(`linkTarget`),onChange:()=>void lo(`linkTarget`),type:`checkbox`}),(0,w.jsx)(`span`,{children:l(`link_target_after_the_name`)})]})]})})]}),(0,w.jsxs)(Oi,{children:[l(`the_default_view_list_icon_size_and_grid_size_are_only_defaults_a_folder_can_still_remember_its_own_from_the_title_bar`),` `,(0,w.jsx)(g,{}),` `,l(`anything_marked_as_global_always_applies_to_every_folder`)]})]}),(0,w.jsxs)(A,{ref:X(`shortcuts`),children:[(0,w.jsx)(k,{note:`every_action_can_hold_several_combinations_click_one_to_record_it_again_add_one_with_the_plus_and_drop_one_with_the_cross`,title:`shortcuts`,onReset:()=>J({id:`shortcuts`,label:`shortcuts`})}),(0,w.jsxs)(M,{children:[gn.map(({id:e,label:t,note:n})=>{let r=vo(e),i=T?.action===e,a=bo(e);return(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(t)}),(0,w.jsx)(R,{children:l(n)}),a.length>0&&(0,w.jsx)(Ti,{children:l(`also_in_use_by_actions_pressing_it_runs_each_of_them`,{actions:a.join(`, `)})})]}),(0,w.jsx)(F,{children:(0,w.jsxs)(yi,{children:[r.map((t,n)=>(0,w.jsxs)(bi,{$conflict:(yo.get(t)?.length??0)>1,$listening:i&&T.index===n,children:[(0,w.jsx)(xi,{onClick:()=>an({action:e,index:n}),title:l(`click_to_record_this_shortcut_again`),type:`button`,children:i&&T.index===n?on.length>0?`${tt(on)} + …`:l(`press_a_key`):tt(t)}),(0,w.jsx)(Si,{onClick:()=>So(e,n),title:l(`remove`),type:`button`,children:(0,w.jsx)(S,{size:9})})]},t+`-`+n)),r.length===0&&(0,w.jsx)(Ci,{children:l(`none`)}),(0,w.jsx)(wi,{$listening:i&&T.index<0,onClick:()=>an({action:e,index:-1}),title:l(`add`),type:`button`,children:i&&T.index<0?on.length>0?`${tt(on)} + …`:l(`press_a_key`):(0,w.jsx)(v,{size:11})})]})})]},e)}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`reset`)}),(0,w.jsx)(R,{children:l(`back_to_the_default_combination_for_every_action`)})]}),(0,w.jsx)(F,{children:(0,w.jsxs)(G,{onClick:()=>void Z({shortcuts:lt(Re()),globalHotkey:null}),type:`button`,children:[(0,w.jsx)(x,{size:13}),l(`reset`)]})})]})]})]}),(0,w.jsxs)(A,{ref:X(`memory`),children:[(0,w.jsx)(k,{note:`what_the_process_holds_and_how_to_give_it_back`,title:`memory`}),(0,w.jsxs)(M,{children:[(0,w.jsxs)(br,{children:[(0,w.jsxs)(xr,{children:[(0,w.jsx)(I,{children:l(`process_memory`)}),(0,w.jsx)(B,{children:_?`${d(_.private)} · ${or(_.private,_.available)}`:`—`})]}),(0,w.jsx)(Sr,{children:(0,w.jsx)(Cr,{$ratio:_?_.private/Math.max(_.available,1):0,$tone:le(_?_.private/Math.max(_.available,1):0)})}),(0,w.jsx)(R,{children:_?l(`committed_of_available_the_runtime_can_use_resident_is_resident_the_webview_runs_in_its_own_process`,{available:d(_.available),resident:d(_.workingSet)}):l(`reading_the_current_usage`)})]}),(0,w.jsxs)(br,{children:[(0,w.jsxs)(xr,{children:[(0,w.jsx)(I,{children:l(`managed_heap`)}),(0,w.jsx)(B,{children:_?`${d(_.managed)} · ${or(_.managed,_.private)}`:`—`})]}),(0,w.jsx)(Sr,{children:(0,w.jsx)(Cr,{$ratio:_?_.managed/Math.max(_.private,1):0,$tone:`var(--accent-secondary)`})}),(0,w.jsx)(R,{children:l(`share_of_this_process_that_the_net_heap_holds_thumbnails_and_folder_size_walks_live_here_the_runtime_grows_it_on_demand_and_gives_it_back_after_a_collection`)})]}),(0,w.jsxs)(br,{children:[(0,w.jsxs)(xr,{children:[(0,w.jsx)(I,{children:l(`native_and_runtime`)}),(0,w.jsx)(B,{children:_?`${d(Math.max(0,_.private-_.managed))} · ${or(Math.max(0,_.private-_.managed),_.private)}`:`—`})]}),(0,w.jsx)(Sr,{children:(0,w.jsx)(Cr,{$ratio:_?Math.max(0,_.private-_.managed)/Math.max(_.private,1):0,$tone:`var(--accent-primary)`})}),(0,w.jsx)(R,{children:l(`the_runtime_loaded_libraries_and_the_rust_helper_share_this_part_rust_runs_inside_the_process_so_it_has_no_separate_figure`)})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`free_memory`)}),(0,w.jsx)(R,{children:l(`compacts_the_heap_and_returns_unused_pages_to_the_system_always_safe`)})]}),(0,w.jsx)(F,{children:(0,w.jsxs)(G,{onClick:()=>void at().then(Et),type:`button`,children:[(0,w.jsx)(kt,{size:13}),l(`trim_now`)]})})]})]})]}),(0,w.jsxs)(A,{ref:X(`overview`),children:[(0,w.jsx)(k,{note:`the_home_tab_s_history_and_how_much_of_it_it_shows`,title:`overview`,onReset:()=>J({id:`overview`,label:`overview`})}),(0,w.jsx)(M,{children:(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`recent_items`)}),(0,w.jsx)(R,{children:l(`how_many_recently_opened_folders_the_overview_lists_0_hides_the_section`)})]}),(0,w.jsx)(F,{children:(0,w.jsx)(Hr,{max:50,min:0,onChange:e=>void Co(Number(e.target.value)),type:`number`,value:m?.recentLimit??p().recentLimit})})]})})]}),(0,w.jsxs)(A,{ref:X(`gallery`),children:[(0,w.jsx)(k,{note:`the_folders_the_gallery_scans_for_pictures_and_videos`,title:`gallery`,onReset:()=>J({id:`gallery`,label:`gallery`})}),(0,w.jsxs)(M,{children:[(m?.galleryRoots??[]).map(e=>(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:_e(e)}),(0,w.jsx)(R,{children:e})]}),(0,w.jsx)(F,{children:(0,w.jsx)(Ei,{onClick:()=>void No((m?.galleryRoots??[]).filter(t=>t!==e)),title:l(`stop_scanning_this_folder`),type:`button`,children:(0,w.jsx)(S,{size:12})})})]},e)),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`scan_folders`)}),(0,w.jsx)(R,{children:(m?.galleryRoots??[]).length===0?l(`nothing_added_yet_so_the_gallery_reads_the_pictures_folder`):l(`only_these_folders_are_scanned_three_levels_deep`)})]}),(0,w.jsx)(F,{children:(0,w.jsxs)(G,{onClick:()=>void Po(),type:`button`,children:[(0,w.jsx)(wt,{size:13}),l(`choose_folder`)]})})]})]})]}),(0,w.jsxs)(A,{ref:X(`icons`),children:[(0,w.jsx)(k,{note:`where_the_shell_s_own_icons_and_the_built_in_glyphs_come_from`,title:`icons`,onReset:()=>J({id:`icons`,label:`icons`})}),(0,w.jsxs)(M,{children:[(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`use_system_file_icons`)}),(0,w.jsx)(R,{children:l(`ask_the_shell_for_the_icon_of_each_file_type_instead_of_the_built_in_glyphs`)})]}),(0,w.jsx)(H,{$on:m?.systemIcons??p().systemIcons,disabled:!m,onClick:()=>void Z({systemIcons:!m?.systemIcons}),type:`button`,children:(0,w.jsx)(U,{})})]}),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`use_custom_folder_icons`)}),(0,w.jsx)(R,{children:l(`folders_that_define_an_icon_desktop_ini_keep_showing_it_even_when_system_icons_are_off`)})]}),(0,w.jsx)(H,{$on:m?.customFolderIcons??p().customFolderIcons,disabled:!m,onClick:()=>void Z({customFolderIcons:!m?.customFolderIcons}),type:`button`,children:(0,w.jsx)(U,{})})]})]})]}),(0,w.jsxs)(A,{ref:X(`extension-icons`),children:[(0,w.jsx)(k,{note:`a_custom_glyph_for_one_file_extension`,title:`icons_by_extension`,onReset:()=>J({id:`extension-icons`,label:`icons_by_extension`})}),(0,w.jsxs)(M,{children:[Object.entries(m?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:e}),(0,w.jsx)(R,{children:An(l,t)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(jn,{source:t}),(0,w.jsx)(Ei,{onClick:()=>void go(e,null),title:l(`remove_this_rule`),type:`button`,children:(0,w.jsx)(S,{size:12})})]})]},e)),(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`add_a_rule`)}),(0,w.jsx)(R,{children:l(`extension_and_the_icon_to_draw_for_it`)})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Hr,{onChange:e=>Ze(e.target.value),placeholder:`.psd`,spellCheck:!1,value:Ke}),(0,w.jsxs)(qr,{children:[(0,w.jsx)(Ei,{onClick:()=>Ct(e=>!e),title:l(`choose_the_icon`),type:`button`,children:(0,w.jsx)(jn,{source:ot})}),St&&(0,w.jsx)(nt,{allowDefault:!1,onClose:()=>Ct(!1),onPick:e=>{gt(e??`file`),Ct(!1)},value:ot})]}),(0,w.jsx)(Ei,{onClick:()=>void Fo(),title:l(`add_the_rule`),type:`button`,children:(0,w.jsx)(v,{size:13})})]})]})]})]}),(0,w.jsxs)(A,{ref:X(`folder-index`),children:[(0,w.jsx)(k,{note:`the_hidden_cache_that_makes_a_folder_open_instantly_next_time`,title:`folder_index`,onReset:()=>J({id:`folder-index`,label:`folder_index`})}),(0,w.jsxs)(M,{children:[(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`keep_a_index_in_every_folder`,{index:`.yafm-index.db`})}),(0,w.jsx)(R,{children:l(`holds_icons_cached_folder_sizes_and_the_folder_s_last_listing_so_it_opens_instantly_next_time_hidden_and_marked_as_a_system_file_on_windows_skipped_where_the_folder_is_read_only`)})]}),(0,w.jsx)(H,{$on:m?.writeDirectoryIndex??p().writeDirectoryIndex,disabled:!m,onClick:()=>void Z({writeDirectoryIndex:!m?.writeDirectoryIndex}),type:`button`,children:(0,w.jsx)(U,{})})]}),(0,w.jsxs)(Bn,{children:[(0,w.jsxs)(Vn,{children:[(0,w.jsx)(I,{children:l(`directory_index_blacklist`)}),(0,w.jsx)(R,{children:l(`rules_are_full_path_globs_matches_within_one_path_segment_and_crosses_folders_matching_folders_use_the_central_database_instead_of_creating_yafm_index_db_files`)})]}),(0,w.jsx)(oi,{children:(m?.directoryIndexBlacklist??[]).map(e=>(0,w.jsxs)(si,{children:[(0,w.jsx)(ci,{"aria-label":l(`directory_index_blacklist_rule`),onBlur:Ha,onChange:t=>Dr({from:e,value:t.target.value}),onFocus:()=>Dr({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Ha()):e.key===`Escape`&&Dr(null)},spellCheck:!1,value:Er?.from===e?Er.value:e}),(0,w.jsx)(li,{onClick:()=>Ga(e),title:l(`remove`),type:`button`,children:(0,w.jsx)(S,{size:10})})]},e))}),(0,w.jsxs)(di,{children:[(0,w.jsx)(fi,{"aria-label":l(`directory_index_blacklist_rule`),onChange:e=>jr(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ua())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:Ar}),(0,w.jsxs)(V,{onClick:Ua,type:`button`,children:[(0,w.jsx)(v,{size:13}),l(`add_the_rule`)]})]}),(0,w.jsxs)(ui,{children:[(0,w.jsxs)(V,{onClick:Ka,type:`button`,children:[(0,w.jsx)(x,{size:13}),l(`restore_defaults`)]}),(0,w.jsxs)(V,{onClick:()=>void Wa(),type:`button`,children:[(0,w.jsx)(wt,{size:13}),l(`add_folder_2`)]})]})]})]}),!(m?.writeDirectoryIndex??p().writeDirectoryIndex)&&(0,w.jsx)(ki,{children:kn(l,e?.platform)})]}),(0,w.jsxs)(A,{ref:X(`indexing`),children:[(0,w.jsx)(k,{note:`background_folder_size_and_item_count_walks`,title:`index_tasks`}),(0,w.jsx)(On,{})]}),(0,w.jsxs)(A,{ref:X(`files`),children:[(0,w.jsx)(k,{note:`what_the_listings_include`,title:`files`}),(0,w.jsxs)(M,{children:[(0,w.jsxs)(N,{children:[(0,w.jsxs)(P,{children:[(0,w.jsx)(I,{children:l(`show_hidden_files`)}),(0,w.jsxs)(R,{children:[l(`toggles_ordinary_hidden_files_for_this_session_alt_also_works_system_files_still_follow_explorer`),f?.overridden&&(0,w.jsx)(Fr,{disabled:Ee,onClick:()=>void fo(null),type:`button`,children:l(`follow_system`)})]})]}),(0,w.jsxs)(F,{children:[(0,w.jsx)(Vr,{$on:f?.showHidden??!1,children:f?.overridden?Dn(l,f.showHidden):l(`follow_system`)}),(0,w.jsx)(H,{$on:f?.showHidden??!1,disabled:!f||Ee,onClick:()=>void fo(!(f?.showHidden??!1)),title:l(`show_hidden_files`),type:`button`,children:(0,w.jsx)(U,{})})]})]}),(0,w.jsxs)(N,{children:[(0,w.jsx)(I,{children:l(`protected_operating_system_files`)}),(0,w.jsx)(B,{children:Dn(l,f?.showSystem)})]})]}),(0,w.jsx)(Oi,{children:l(`hidden_items_follow_this_app_s_switch_protected_operating_system_files_still_follow_windows`)})]}),(0,w.jsxs)(er,{onClick:()=>ln(!0),type:`button`,children:[(0,w.jsx)(Ot,{size:13}),l(`open_source_attribution`)]})]}),(0,w.jsxs)(tr,{"aria-label":l(`settings_sections`),onWheel:Ea,ref:ba,children:[(0,w.jsx)(nr,{children:l(`sections`)}),(0,w.jsx)(rr,{children:D.map(({id:e,label:t})=>(0,w.jsxs)(ir,{$active:Bi===e,"data-section":e,onClick:()=>wa(e),type:`button`,children:[(0,w.jsx)(zn,{children:Sn[t]}),(0,w.jsx)(`span`,{children:l(t)})]},e))}),(0,w.jsx)(ar,{children:l(`changes_are_saved_as_you_make_them`)})]}),cn&&(0,w.jsx)(C.Suspense,{fallback:null,children:(0,w.jsx)(pn,{onClose:()=>ln(!1)})}),Ii&&(0,w.jsx)(je,{confirmLabel:l(`restore_defaults`),message:l(`restore_section_to_its_defaults`,{section:l(Ii.label)}),onCancel:()=>J(null),onConfirm:()=>{let e=Ii;J(null),Da(e.id)},open:!0,title:l(`restore_defaults`)}),q&&(0,qt.createPortal)((0,w.jsx)(lr,{children:(0,w.jsxs)(ur,{"aria-modal":`true`,role:`dialog`,children:[(0,w.jsxs)(dr,{children:[(0,w.jsx)(`h2`,{children:l(`software_update`)}),(0,w.jsx)(`p`,{children:K?.latest?l(`version_version`,{version:K.latest}):l(`preparing_the_update`)})]}),(0,w.jsx)(fr,{children:l(`changelog`)}),q.changelog?(0,w.jsx)(pr,{onClick:hr,children:(0,w.jsx)(c,{source:q.changelog})}):(0,w.jsx)(mr,{children:q.phase===`changelog`?l(`loading_the_changelog`):l(`the_changelog_could_not_be_loaded`)}),(0,w.jsxs)(gr,{children:[(0,w.jsx)(`span`,{children:sr(q,l)}),(0,w.jsx)(`span`,{children:cr(q)})]}),(0,w.jsx)(_r,{children:(0,w.jsx)(vr,{$percent:Math.max(0,Math.min(100,q.percent))})}),q.error&&(0,w.jsx)(z,{children:q.error}),(0,w.jsxs)(yr,{children:[(q.phase===`changelog`||q.phase===`downloading`)&&(0,w.jsxs)(G,{onClick:()=>void eo(),type:`button`,children:[(0,w.jsx)(S,{size:13}),l(`cancel`)]}),q.phase===`ready`&&(0,w.jsxs)(G,{onClick:()=>void to(),type:`button`,children:[(0,w.jsx)(Lt,{size:13}),l(`install_update`)]}),q.phase===`installing`&&(0,w.jsxs)(G,{disabled:!0,type:`button`,children:[(0,w.jsx)(x,{size:13}),l(`installing`)]}),(q.phase===`ready`||q.phase===`error`||q.phase===`cancelled`||q.phase===`installing`)&&(0,w.jsxs)(G,{onClick:()=>Fi(null),type:`button`,children:[(0,w.jsx)(S,{size:13}),l(`close`)]})]})]})}),document.body)]})}function En({approvalMinutes:e,denialSeconds:t}){let n=u(),[r,i]=(0,C.useState)([]),[a,o]=(0,C.useState)(!1),[s,c]=(0,C.useState)(()=>Date.now());(0,C.useEffect)(()=>{let e=window.setInterval(()=>c(Date.now()),1e3);return()=>window.clearInterval(e)},[]),(0,C.useEffect)(()=>{let e=()=>void m().then(i,()=>i([]));if(e(),l.available)return l.on(t=>{t.type===`share.devices.changed`&&e()})},[]),(0,C.useEffect)(()=>{r.some(e=>e.expiresAt>0&&e.expiresAt<=s)&&m().then(i,()=>void 0)},[s,r]);let ee=e=>{let t=Math.max(0,Math.ceil((e-s)/1e3)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60,a=e=>String(e).padStart(2,`0`);return n>0?`${n}:${a(r)}:${a(i)}`:`${r}:${a(i)}`},te=async(e,t,n)=>{o(!0);try{i(await Ve(e,t,n))}finally{o(!1)}},ne=async()=>{if(window.confirm(n(`share_access_clear_devices_confirm`))){o(!0);try{i(await h())}finally{o(!1)}}},re=async e=>{o(!0);try{i(await Ke(e))}finally{o(!1)}},ie=e=>e.state===`allowed`?e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_allowed`)} · ${n(`share_access_expired`)}`:n(`share_access_allowed`):e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_denied`)} · ${n(`share_access_expired`)}`:n(`share_access_denied`),ae=r.filter(e=>e.state===`allowed`||e.state===`denied`),oe=e=>e.expiresAt===0?void 0:new Date(e.expiresAt).toLocaleString();return(0,w.jsxs)(wr,{children:[ae.length>0&&(0,w.jsxs)(Er,{children:[(0,w.jsxs)(Mr,{children:[n(`devices`),` · `,ae.length]}),(0,w.jsx)(kr,{disabled:a,onClick:()=>void ne(),title:n(`share_access_clear_devices`),type:`button`,children:(0,w.jsx)(Gt,{size:13})})]}),ae.length===0&&(0,w.jsx)(Tr,{children:n(`share_access_no_devices`)}),ae.map(r=>(0,w.jsxs)(Dr,{children:[(0,w.jsxs)(Ar,{children:[(0,w.jsx)(jr,{children:r.name||r.address||r.id}),(0,w.jsxs)(Mr,{children:[r.address,r.address?` · `:``,n(`share_access_last_seen`),`: `,new Date(r.lastSeen).toLocaleString()]}),(0,w.jsxs)(Mr,{title:oe(r),children:[ie(r),` · `,r.expiresAt===0?n(`share_access_forever`):n(`share_access_expires_in`,{time:ee(r.expiresAt)})]})]}),(0,w.jsxs)(Or,{children:[(0,w.jsx)(He,{disabled:a,onChange:e=>{let[t,n]=e.split(`:`);te(r.id,t,n===`forever`)},options:[{value:`allowed:timed`,label:n(`share_access_allowed_for_minutes`,{minutes:e})},{value:`allowed:forever`,label:n(`share_access_allow_forever`)},{value:`denied:timed`,label:n(`share_access_denied_for_seconds`,{seconds:t})},{value:`denied:forever`,label:n(`share_access_block_forever`)}],value:r.state===`allowed`?r.expiresAt===0?`allowed:forever`:`allowed:timed`:r.expiresAt===0?`denied:forever`:`denied:timed`,width:190}),(0,w.jsx)(kr,{disabled:a,onClick:()=>void re(r.id),title:n(`remove`),type:`button`,children:(0,w.jsx)(Gt,{size:13})})]})]},r.id))]})}function Dn(e,t){return e(t===void 0?`reading`:t?`shown`:`hidden`)}function On(){let e=u(),[t,n]=(0,C.useState)(null);return(0,C.useEffect)(()=>{let e=!0,t=()=>Ce().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,w.jsx)(ki,{children:e(`no_indexing_tasks_are_running`)}):(0,w.jsxs)(M,{children:[(0,w.jsx)(N,{children:(0,w.jsx)(I,{children:e(`count_indexing_tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,w.jsx)(N,{children:(0,w.jsx)(B,{title:e,children:e})},e))]}):(0,w.jsx)(ki,{children:e(`index_task_information_is_unavailable`)})}function kn(e,t){return e(`indexes_are_off_every_folder_s_icons_sizes_and_cached_listing_now_live_in_one_database_in_place_so_that_drive_grows_with_every_folder_you_open_that_is_the_cost_of_keeping_folders_free_of_extra_files`,{place:e(t===`windows`?`appdata_which_sits_on_the_system_drive_usually_c`:t===`linux`?`your_home_folder_which_often_shares_a_partition_with_the_system`:`the_app_s_settings_folder_which_usually_sits_on_the_system_drive`)})}function An(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built_in_source`,{source:t})}function jn({source:e}){let t=f(e.startsWith(`file:`)?e.slice(5):null);return(0,w.jsx)(Di,{children:t?(0,w.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,w.jsx)(Ze,{name:e,size:16})})}function Mn({path:e,active:t,onSelect:n,onRemove:r}){let i=u(),a=fe(e),o=ye(a?null:e),s=a?e:o,c=ot(e.split(/[?#]/)[0]);return(0,w.jsxs)(ni,{children:[(0,w.jsxs)(ti,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(c?(0,w.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,w.jsx)(`img`,{alt:``,src:s})),c&&(0,w.jsx)(ri,{children:(0,w.jsx)(Mt,{size:11})})]}),(0,w.jsx)(W,{onClick:r,title:i(`remove`),type:`button`,children:(0,w.jsx)(S,{size:9})})]})}function Nn({value:e,options:t,onChange:n,disabled:r}){let i=u(),[a,o]=(0,C.useState)(null),s=(0,C.useRef)(null);return(0,C.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(Ur,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,w.jsx)(`span`,{children:Pn(i,e)}),(0,w.jsx)(Wr,{children:(0,w.jsx)(Ft,{size:11})})]}),a&&(0,qt.createPortal)((0,w.jsx)(Gr,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,w.jsxs)(Kr,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,w.jsx)(`span`,{children:Pn(i,t)}),t===e&&(0,w.jsx)(Pt,{size:11})]},t))}),document.body)]})}function Pn(e,t){return t===xn?e(`system_default`):E[t]??t}function Fn({colors:e,current:t,onApply:n}){let r=u();if(e.length===0)return null;let[i,...a]=e;return(0,w.jsxs)(Zn,{children:[(0,w.jsxs)($n,{$color:i,onClick:()=>n(i),title:r(`previous_colour_colour`,{colour:i}),type:`button`,children:[(0,w.jsx)(`i`,{}),r(`previous`)]}),a.map(e=>(0,w.jsx)(Qn,{$color:e,onClick:()=>n(e),title:r(`use_colour`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,w.jsx)(Pt,{size:9})},e))]})}function k({title:e,note:t,global:n=!1,onReset:r}){let i=u();return(0,w.jsxs)(j,{children:[(0,w.jsxs)(`h2`,{children:[(0,w.jsx)(zn,{children:Sn[e]}),i(e),n&&(0,w.jsx)(g,{})]}),(0,w.jsx)(`p`,{children:i(t)}),r&&(0,w.jsx)(Rn,{"aria-label":i(`restore_defaults`),onClick:r,title:i(`restore_defaults`),type:`button`,children:(0,w.jsx)(x,{size:12})})]})}var In=n.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,Ln=n.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,A=n.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,j=n.header`
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
`,Rn=n.button`
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
`,zn=n.i`
    display: grid;
    place-items: center;
    width: 13px;
    height: 13px;
    flex-shrink: 0;
    color: var(--accent-primary);
    opacity: 0.85;
`,M=n.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,Bn=n.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Vn=n.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Hn=n.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,Un=n.button`
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
`,Wn=n.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Gn=n.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,Kn=n.button`
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
`,qn=n.button`
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
`,Jn=n.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Yn=n.input`
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
`,Xn=n.span`
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
`,Zn=n.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,Qn=n.button`
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
`,$n=n.button`
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
`,er=n.button`
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
`,tr=n.nav`
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
`,nr=n.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,rr=n.div`
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
`,ir=n.button`
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
`,ar=n.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function or(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}function sr(e,t){switch(e.phase){case`changelog`:return t(`preparing_the_update`);case`downloading`:return t(`downloading_the_update`);case`ready`:return t(`download_complete`);case`cancelled`:return t(`update_cancelled`);case`error`:return t(`the_update_failed`);case`installing`:return t(`installing`);default:return``}}function cr(e){return e.total>0?`${d(e.downloaded)} / ${d(e.total)}`:e.downloaded>0?d(e.downloaded):``}var lr=n.div`
    position: fixed;
    inset: 0;
    z-index: 9500;
    display: grid;
    place-items: center;
    padding: 32px;
    background: rgba(2, 6, 23, 0.55);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
`,ur=n.div`
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
`,dr=n.div`
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
`,fr=n.span`
    margin-top: 4px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,pr=n.div`
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
`,mr=n.p`
    margin: 0;
    font-size: 11px;
    color: var(--text-muted);
`;function hr(e){let t=e.target?.closest(`a`);t&&(e.preventDefault(),ce(t.href))}var gr=n.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    font-size: 11px;
    color: var(--text-muted);
`,_r=n.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.22);
`,vr=n.div`
    width: ${({$percent:e})=>`${e}%`};
    height: 100%;
    border-radius: 3px;
    background: var(--accent-gradient);
    transition: width 160ms ease;
`,yr=n.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,br=n.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,xr=n.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,Sr=n.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Cr=n.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,wr=n.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
`,Tr=n.div`
    padding: 8px 2px;
    color: var(--text-muted);
    font-size: 11px;
`,Er=n.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 2px;
`,Dr=n.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,Or=n.div`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,kr=n.button`
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
`,Ar=n.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,jr=n.span`
    color: var(--text-primary);
    font-size: 12px;
`,Mr=n.span`
    color: var(--text-muted);
    font-size: 10.5px;
    overflow-wrap: anywhere;
`,Nr=n.input`
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
`,Pr=n.input`
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
`,N=n.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,P=n.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,F=n.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,I=n.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,L=n.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,R=n.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,z=n.span`
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
`,B=n.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,Fr=n.button`
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
`,Ir=n.input`
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
`,Lr=n.input`
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
`,V=n.button`
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
`,Rr=n.input`
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
`,zr=n.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,Br=n.button`
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
`,Vr=n.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,H=n.button`
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
`,U=n.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,Hr=n.input`
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
`,Ur=n.button`
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
`,Wr=n.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Gr=n.div`
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
`,Kr=n.button`
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
`,qr=n.span`
    position: relative;
    display: inline-flex;
`,Jr=n.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Yr=n.button`
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
`,Xr=n.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,Zr=n.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,Qr=n.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,$r=n.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ei=n.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,ti=n.button`
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
`,ni=n.div`
    position: relative;
    width: 102px;
    height: 58px;
`,W=n.button`
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
`,ri=n.span`
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
`,ii=n.button`
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
`,ai=n.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,oi=n.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,si=n.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,ci=n.input`
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
`,li=n.button`
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
`,ui=n.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,di=n.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,fi=n.input`
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
`,pi=n.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,mi=n.button`
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
`,hi=n.input`
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
`,gi=n.div`
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
`,_i=n.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,vi=n.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,yi=n.span`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 5px;
`,bi=n.span`
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    border: 1px solid ${({$conflict:e,$listening:t})=>t?`var(--border-color-focus)`:e?`rgba(251, 191, 36, 0.55)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$listening:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`var(--bg-input)`};
`,xi=n.button`
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
`,Si=n.button`
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
`,Ci=n.span`
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,wi=n.button`
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
`,Ti=n.span`
    font-size: 10px;
    color: #fbbf24;
`,G=n.button`
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
`,Ei=n.button`
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
`,Di=n.span`
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
`,Oi=n.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,ki=n.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`;export{O as SettingsView};