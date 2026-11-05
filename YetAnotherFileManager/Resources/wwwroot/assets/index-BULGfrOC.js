var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return D(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function re(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function k(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function A(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,A(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+re(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),A(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+re(a,u),c+=A(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+re(a,u++),c+=A(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return A(k(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function j(e,t,n){if(e==null)return e;var r=[],i=0;return A(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function M(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var N=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function ie(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,N)}catch(e){N(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function P(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else ie(P.bind(null,e))}var F={map:j,forEach:function(e,t,n){j(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return j(e,function(){t++}),t},toArray:function(e){return j(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=F,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=P,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:M}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=ie,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,ee());else{var t=n(l);t!==null&&ne(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ne(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ee():S=!1}}}var ee;if(typeof y==`function`)ee=function(){y(D)};else if(typeof MessageChannel<`u`){var O=new MessageChannel,te=O.port2;O.port1.onmessage=D,ee=function(){te.postMessage(null)}}else ee=function(){_(D,0)};function ne(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ne(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,ee()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function E(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var D=Object.assign,ee=Symbol.for(`react.element`),O=Symbol.for(`react.transitional.element`),te=Symbol.for(`react.portal`),ne=Symbol.for(`react.fragment`),re=Symbol.for(`react.strict_mode`),k=Symbol.for(`react.profiler`),A=Symbol.for(`react.consumer`),j=Symbol.for(`react.context`),M=Symbol.for(`react.forward_ref`),N=Symbol.for(`react.suspense`),ie=Symbol.for(`react.suspense_list`),P=Symbol.for(`react.memo`),F=Symbol.for(`react.lazy`),ae=Symbol.for(`react.activity`),oe=Symbol.for(`react.legacy_hidden`),se=Symbol.for(`react.memo_cache_sentinel`),ce=Symbol.for(`react.view_transition`),I=Symbol.for(`react.recoverable`),le=Symbol.iterator;function ue(e){return typeof e!=`object`||!e?null:(e=le&&e[le]||e[`@@iterator`],typeof e==`function`?e:null)}var de=Symbol.for(`react.client.reference`);function fe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===de?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case ne:return`Fragment`;case k:return`Profiler`;case re:return`StrictMode`;case N:return`Suspense`;case ie:return`SuspenseList`;case ae:return`Activity`;case ce:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case te:return`Portal`;case j:return e.displayName||`Context`;case A:return(e._context.displayName||`Context`)+`.Consumer`;case M:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case P:return t=e.displayName||null,t===null?fe(e.type)||`Memo`:t;case F:t=e._payload,e=e._init;try{return fe(e(t))}catch{}}return null}var pe=Array.isArray,L=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},he=[],z=-1;function B(e){return{current:e}}function ge(e){0>z||(e.current=he[z],he[z]=null,z--)}function V(e,t){z++,he[z]=e.current,e.current=t}var H=B(null),_e=B(null),ve=B(null),ye=B(null);function be(e,t){switch(V(ve,t),V(_e,e),V(H,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?fp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=fp(t),e=pp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ge(H),V(H,e)}function xe(){ge(H),ge(_e),ge(ve)}function Se(e){var t=e.memoizedState;t!==null&&($._currentValue=t.memoizedState,V(ye,e)),t=H.current;var n=pp(t,e.type);t!==n&&(V(_e,e),V(H,n))}function Ce(e){_e.current===e&&(ge(H),ge(_e)),ye.current===e&&(ge(ye),$._currentValue=me)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var De=!1;function Oe(e,t){if(!e||De)return``;De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return Ee(`Activity`);case 30:return Ee(`ViewTransition`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,U=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function Ke(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var qe=Math.clz32?Math.clz32:Xe,Je=Math.log,Ye=Math.LN2;function Xe(e){return e>>>=0,e===0?32:31-(Je(e)/Ye|0)|0}var Ze=256,Qe=262144,$e=4194304;function et(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function W(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=et(n))):i=et(o):i=et(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=et(n))):i=et(o)):i=et(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function tt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function nt(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-qe(n),i=1<<r;t|=e[r],n&=~i}return t}function rt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function it(){var e=$e;return $e<<=1,!($e&62914560)&&($e=4194304),e}function at(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ot(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function st(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ct(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ct(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function lt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ut(e,t){var n=t&-t;return n=n&42?1:dt(n),(n&(e.suspendedLanes|t))===0?n:0}function dt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ft(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function pt(){var e=R.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function mt(e,t){var n=R.p;try{return R.p=e,t()}finally{R.p=n}}var ht=Math.random().toString(36).slice(2),gt=`__reactFiber$`+ht,_t=`__reactProps$`+ht,vt=`__reactContainer$`+ht,yt=`__reactEvents$`+ht,bt=`__reactListeners$`+ht,xt=`__reactHandles$`+ht,St=`__reactResources$`+ht,Ct=`__reactMarker$`+ht,wt=`__reactLoad$`+ht;function Tt(e){delete e[gt],delete e[_t],delete e[bt],delete e[xt]}function Et(e){var t;if(t=e[gt])return t;for(var n=e.parentNode;n;){if(t=n[vt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mm(e);e!==null;){if(n=e[gt])return n;e=mm(e)}return t}e=n,n=e.parentNode}return null}function Dt(e){if(e=e[gt]||e[vt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ot(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function kt(e){var t=e[St];return t||=e[St]={hoistableStyles:new Map,hoistableScripts:new Map},t}function At(e){e[Ct]=!0}function jt(e){e[wt]=void 0}var Mt=new Set,Nt={};function Pt(e,t){Ft(e,t),Ft(e+`Capture`,t)}function Ft(e,t){for(Nt[e]=t,e=0;e<t.length;e++)Mt.add(t[e])}var It=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Lt={},Rt={};function zt(e){return je.call(Rt,e)?!0:je.call(Lt,e)?!1:It.test(e)?Rt[e]=!0:(Lt[e]=!0,!1)}var Bt=!1;function Vt(){var e=Bt;return Bt=!1,e}function Ht(e,t,n){if(zt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Ut(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Wt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Gt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Kt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function qt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Jt(e){if(!e._valueTracker){var t=Kt(e)?`checked`:`value`;e._valueTracker=qt(e,t,``+e[t])}}function Yt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Kt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var Xt=/[\n"\\]/g;function Zt(e){return e.replace(Xt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Qt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Gt(t)):e.value!==``+Gt(t)&&(e.value=``+Gt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):en(e,Gt(n)):o===`number`&&e.value==t?en(e,Gt(e.value)):en(e,Gt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Gt(s):e.removeAttribute(`name`)}function $t(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Jt(e);return}n=n==null?``:``+Gt(n),t=t==null?n:``+Gt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Jt(e)}function en(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function tn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Gt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function nn(e,t,n){t!=null&&(t=``+Gt(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+Gt(n)}function rn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(pe(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Gt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Jt(e)}function an(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var on=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function sn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||on.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function cn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,Bt=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(sn(e,a,r),Bt=!0)}else for(var o in t)t.hasOwnProperty(o)&&sn(e,o,t[o])}function ln(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var un=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),dn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fn(e){return dn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function pn(){}var mn=null;function hn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gn=null,_n=null;function vn(e){var t=Dt(e);if(t&&(e=t.stateNode)){var n=e[_t]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Qt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Zt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[_t]||null;if(!a)throw Error(i(90));Qt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Yt(r)}break a;case`textarea`:nn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&tn(e,!!n.multiple,t,!1)}}}var yn=!1;function bn(e,t,n){if(yn)return e(t,n);yn=!0;try{return e(t)}finally{if(yn=!1,(gn!==null||_n!==null)&&(Rd(),gn&&(t=gn,e=_n,_n=gn=null,vn(t),e)))for(t=0;t<e.length;t++)vn(e[t])}}function xn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[_t]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var Sn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Cn=!1;if(Sn)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){Cn=!0}}),window.addEventListener(`test`,wn,wn),window.removeEventListener(`test`,wn,wn)}catch{Cn=!1}var Tn=null,En=null,Dn=null;function On(){if(Dn)return Dn;var e,t=En,n=t.length,r,i=`value`in Tn?Tn.value:Tn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Dn=i.slice(e,1<r?1-r:void 0)}function kn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function An(){return!0}function G(){return!1}function jn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?An:G,this.isPropagationStopped=G,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=An)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=An)},persist:function(){},isPersistent:An}),t}var Mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nn=jn(Mn),Pn=D({},Mn,{view:0,detail:0}),Fn=jn(Pn),In,Ln,Rn,zn=D({},Pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Rn&&(Rn&&e.type===`mousemove`?(In=e.screenX-Rn.screenX,Ln=e.screenY-Rn.screenY):Ln=In=0,Rn=e),In)},movementY:function(e){return`movementY`in e?e.movementY:Ln}}),Bn=jn(zn),Vn=jn(D({},zn,{dataTransfer:0})),K=jn(D({},Pn,{relatedTarget:0})),Hn=jn(D({},Mn,{animationName:0,elapsedTime:0,pseudoElement:0})),q=jn(D({},Mn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Un=jn(D({},Mn,{data:0})),Wn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Gn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Kn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function qn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kn[e])?!!t[e]:!1}function Jn(){return qn}var Yn=jn(D({},Pn,{key:function(e){if(e.key){var t=Wn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=kn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Gn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jn,charCode:function(e){return e.type===`keypress`?kn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?kn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Xn=jn(D({},zn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Zn=jn(D({},Mn,{submitter:0})),Qn=jn(D({},Pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jn})),$n=jn(D({},Mn,{propertyName:0,elapsedTime:0,pseudoElement:0})),er=jn(D({},zn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),tr=jn(D({},Mn,{newState:0,oldState:0,source:0})),nr=[9,13,27,32],rr=Sn&&`CompositionEvent`in window,ir=null;Sn&&`documentMode`in document&&(ir=document.documentMode);var ar=Sn&&`TextEvent`in window&&!ir,or=Sn&&(!rr||ir&&8<ir&&11>=ir),sr=` `,cr=!1;function lr(e,t){switch(e){case`keyup`:return nr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ur(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var dr=!1;function fr(e,t){switch(e){case`compositionend`:return ur(t);case`keypress`:return t.which===32?(cr=!0,sr):null;case`textInput`:return e=t.data,e===sr&&cr?null:e;default:return null}}function pr(e,t){if(dr)return e===`compositionend`||!rr&&lr(e,t)?(e=On(),Dn=En=Tn=null,dr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return or&&t.locale!==`ko`?null:t.data;default:return null}}var mr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!mr[e.type]:t===`textarea`}function gr(e,t,n,r){gn?_n?_n.push(r):_n=[r]:gn=r,t=Yf(t,`onChange`),0<t.length&&(n=new Nn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var _r=null,vr=null;function yr(e){Vf(e,0)}function br(e){if(Yt(Ot(e)))return e}function xr(e,t){if(e===`change`)return t}var Sr=!1;if(Sn){var Cr;if(Sn){var wr=`oninput`in document;if(!wr){var Tr=document.createElement(`div`);Tr.setAttribute(`oninput`,`return;`),wr=typeof Tr.oninput==`function`}Cr=wr}else Cr=!1;Sr=Cr&&(!document.documentMode||9<document.documentMode)}function Er(){_r&&(_r.detachEvent(`onpropertychange`,Dr),vr=_r=null)}function Dr(e){if(e.propertyName===`value`&&br(vr)){var t=[];gr(t,vr,e,hn(e)),bn(yr,t)}}function Or(e,t,n){e===`focusin`?(Er(),_r=t,vr=n,_r.attachEvent(`onpropertychange`,Dr)):e===`focusout`&&Er()}function kr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return br(vr)}function Ar(e,t){if(e===`click`)return br(t)}function jr(e,t){if(e===`input`||e===`change`)return br(t)}function Mr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Nr=typeof Object.is==`function`?Object.is:Mr;function Pr(e,t){if(Nr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!Nr(e[i],t[i]))return!1}return!0}function Fr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Ir(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lr(e,t){var n=Ir(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ir(n)}}function Rr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Fr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fr(e.document)}return t}function Br(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Vr=Sn&&`documentMode`in document&&11>=document.documentMode,Hr=null,Ur=null,Wr=null,Gr=!1;function Kr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gr||Hr==null||Hr!==Fr(r)||(r=Hr,`selectionStart`in r&&Br(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&Pr(Wr,r)||(Wr=r,r=Yf(Ur,`onSelect`),0<r.length&&(t=new Nn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Hr)))}function qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Jr={animationend:qr(`Animation`,`AnimationEnd`),animationiteration:qr(`Animation`,`AnimationIteration`),animationstart:qr(`Animation`,`AnimationStart`),transitionrun:qr(`Transition`,`TransitionRun`),transitionstart:qr(`Transition`,`TransitionStart`),transitioncancel:qr(`Transition`,`TransitionCancel`),transitionend:qr(`Transition`,`TransitionEnd`)},Yr={},Xr={};Sn&&(Xr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),`TransitionEvent`in window||delete Jr.transitionend.transition);function Zr(e){if(Yr[e])return Yr[e];if(!Jr[e])return e;var t=Jr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Xr)return Yr[e]=t[n];return e}var Qr=Zr(`animationend`),$r=Zr(`animationiteration`),ei=Zr(`animationstart`),ti=Zr(`transitionrun`),ni=Zr(`transitionstart`),ri=Zr(`transitioncancel`),ii=Zr(`transitionend`),ai=new Map,oi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);oi.push(`scrollEnd`);function si(e,t){ai.set(e,t),Pt(t,[e])}var ci=0;function li(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=yd.identifierPrefix;var n=ci++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function ui(e){if(e==null||typeof e==`string`)return e;var t=null,n=Dd;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function di(e,t){return e=ui(e),t=ui(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var fi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},pi=[],mi=0,hi=0;function gi(){for(var e=mi,t=hi=mi=0;t<e;){var n=pi[t];pi[t++]=null;var r=pi[t];pi[t++]=null;var i=pi[t];pi[t++]=null;var a=pi[t];if(pi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&bi(n,i,a)}}function _i(e,t,n,r){pi[mi++]=e,pi[mi++]=t,pi[mi++]=n,pi[mi++]=r,hi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function vi(e,t,n,r){return _i(e,t,n,r),xi(e)}function yi(e,t){return _i(e,null,null,t),xi(e)}function bi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function xi(e){if(50<Od)throw Od=0,kd=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Si={};function Ci(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wi(e,t,n,r){return new Ci(e,t,n,r)}function Ti(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ei(e,t){var n=e.alternate;return n===null?(n=wi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Di(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Oi(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Ti(r)&&(s=1);else if(typeof r==`string`)s=Ym(e,n,H.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case ae:return e=wi(31,n,t,a),e.elementType=ae,e.lanes=o,e;case ne:return ki(n.children,a,o,t);case re:s=8,a|=24;break;case k:return e=wi(12,n,t,a|2),e.elementType=k,e.lanes=o,e;case N:return e=wi(13,n,t,a),e.elementType=N,e.lanes=o,e;case ie:return e=wi(19,n,t,a),e.elementType=ie,e.lanes=o,e;case oe:case ce:return e=a|32,e=wi(30,n,t,e),e.elementType=ce,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case j:s=10;break a;case A:s=9;break a;case M:s=11;break a;case P:s=14;break a;case F:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=wi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function ki(e,t,n,r){return e=wi(7,e,r,t),e.lanes=n,e}function Ai(e,t,n){return e=wi(6,e,null,t),e.lanes=n,e}function ji(e){var t=wi(18,null,null,0);return t.stateNode=e,t}function Mi(e,t,n){return t=wi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ni=new WeakMap;function Pi(e,t){if(typeof e==`object`&&e){var n=Ni.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},Ni.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var Fi=[],Ii=0,Li=null,Ri=0,zi=[],Bi=0,Vi=null,Hi=1,Ui=``;function Wi(e,t){Fi[Ii++]=Ri,Fi[Ii++]=Li,Li=e,Ri=t}function Gi(e,t,n){zi[Bi++]=Hi,zi[Bi++]=Ui,zi[Bi++]=Vi,Vi=e;var r=Hi;e=Ui;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var a=32-qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Hi=1<<32-qe(t)+i|n<<i|r,Ui=a+e}else Hi=1<<a|n<<i|r,Ui=e}function Ki(e){e.return!==null&&(Wi(e,1),Gi(e,1,0))}function qi(e){for(;e===Li;)Li=Fi[--Ii],Fi[Ii]=null,Ri=Fi[--Ii],Fi[Ii]=null;for(;e===Vi;)Vi=zi[--Bi],zi[Bi]=null,Ui=zi[--Bi],zi[Bi]=null,Hi=zi[--Bi],zi[Bi]=null}function Ji(e,t){zi[Bi++]=Hi,zi[Bi++]=Ui,zi[Bi++]=Vi,Hi=t.id,Ui=t.overflow,Vi=e}var Yi=null,J=null,Y=!1,Xi=null,Zi=!1,Qi=Error(i(519));function $i(e){throw aa(Pi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Qi}function ea(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[gt]=e,t[_t]=r,n){case`dialog`:Hf(`cancel`,t),Hf(`close`,t);break;case`iframe`:case`object`:case`embed`:Hf(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Hf(zf[n],t);break;case`source`:Hf(`error`,t);break;case`img`:case`image`:case`link`:Hf(`error`,t),Hf(`load`,t);break;case`details`:Hf(`toggle`,t);break;case`input`:Hf(`invalid`,t),$t(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Hf(`invalid`,t);break;case`textarea`:Hf(`invalid`,t),rn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||tp(t.textContent,n)?(r.popover!=null&&(Hf(`beforetoggle`,t),Hf(`toggle`,t)),r.onScroll!=null&&Hf(`scroll`,t),r.onScrollEnd!=null&&Hf(`scrollend`,t),r.onClick!=null&&(t.onclick=pn),t=!0):t=!1,t||$i(e,!0)}function ta(e){for(Yi=e.return;Yi;)switch(Yi.tag){case 5:case 31:case 13:Zi=!1;return;case 27:case 3:Zi=!0;return;default:Yi=Yi.return}}function na(e){if(e!==Yi)return!1;if(!Y)return ta(e),Y=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||hp(e.type,e.memoizedProps)),n=!n),n&&J&&$i(e),ta(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));J=pm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));J=pm(e)}else t===27?(t=J,wp(e.type)?(e=fm,fm=null,J=e):J=t):J=Yi?dm(e.stateNode.nextSibling):null;return!0}function ra(){J=Yi=null,Y=!1}function ia(){var e=Xi;return e!==null&&(dd===null?dd=e:dd.push.apply(dd,e),Xi=null),e}function aa(e){Xi===null?Xi=[e]:Xi.push(e)}var oa=B(null),sa=null,ca=null;function la(e,t,n){V(oa,t._currentValue),t._currentValue=n}function ua(e){e._currentValue=oa.current,ge(oa)}function da(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function fa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),da(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),da(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),da(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function pa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Nr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ye.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[$]:e.push($))}a=a.return}return e!==null&&fa(t,e,n,r),t.flags|=262144,e!==null}function ma(e){for(e=e.firstContext;e!==null;){if(!Nr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ha(e){sa=e,ca=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ga(e){return va(sa,e)}function _a(e,t){return sa===null&&ha(e),va(e,t)}function va(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ca===null){if(e===null)throw Error(i(308));ca=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ca=ca.next=t;return n}var ya=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ba=t.unstable_scheduleCallback,xa=t.unstable_NormalPriority,Sa={$$typeof:j,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ca(){return{controller:new ya,data:new Map,refCount:0}}function wa(e){e.refCount--,e.refCount===0&&ba(xa,function(){e.controller.abort()})}function Ta(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Ea=null;function Da(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Oa=null,ka=0,Aa=0,ja=null;function Ma(e,t){if(Oa===null){var n=Oa=[];ka=0,Aa=Pf(),ja={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ka++,t.then(Na,Na),t}function Na(){if(--ka===0&&(Ea=null,Oa!==null)){ja!==null&&(ja.status=`fulfilled`);var e=Oa;Oa=null,Aa=0,ja=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Pa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Fa=L.S;L.S=function(e,t){if(md=U(),typeof t==`object`&&t&&typeof t.then==`function`&&Ma(e,t),Ea!==null)for(var n=bf;n!==null;)Ta(n,Ea),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Ta(r,n),r=r.next;if(Aa!==0){r=Ea,r===null&&(r=Ea=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Fa!==null&&Fa(e,t)};var Ia=B(null);function La(){var e=Ia.current;return e===null?Yu.pooledCache:e}function Ra(e,t){t===null?V(Ia,Ia.current):V(Ia,t.pool)}function za(){var e=La();return e===null?null:{parent:Sa._currentValue,pool:e}}var Ba=Error(i(460)),Va=Error(i(474)),Ha=Error(i(542)),Ua={then:function(){}};function Wa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ga(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(pn,pn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ya(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(pn,pn);else{if(e=Yu,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ya(e),e}throw qa=t,Ba}}function Ka(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(qa=e,Ba):e}}var qa=null;function Ja(){if(qa===null)throw Error(i(459));var e=qa;return qa=null,e}function Ya(e){if(e===Ba||e===Ha)throw Error(i(483))}var Xa=null,Za=0;function Qa(e){var t=Za;return Za+=1,Xa===null&&(Xa=[]),Ga(Xa,e,t)}function $a(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function eo(e,t){throw t.$$typeof===ee?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function to(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Ei(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ai(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===ne?(e=d(e,t,n.props.children,r,n.key),$a(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===F&&Ka(i)===t.type)?(t=a(t,n.props),$a(t,n),t.return=e,t):(t=Oi(n.type,n.key,n.props,null,e.mode,r),$a(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Mi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=ki(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ai(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case O:return n=Oi(t.type,t.key,t.props,null,e.mode,n),$a(n,t),n.return=e,n;case te:return t=Mi(t,e.mode,n),t.return=e,t;case F:return t=Ka(t),f(e,t,n)}if(pe(t)||ue(t))return t=ki(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Qa(t),n);if(t.$$typeof===j)return f(e,_a(e,t),n);eo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case O:return n.key===i?l(e,t,n,r):null;case te:return n.key===i?u(e,t,n,r):null;case F:return n=Ka(n),p(e,t,n,r)}if(pe(n)||ue(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Qa(n),r);if(n.$$typeof===j)return p(e,t,_a(e,n),r);eo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case O:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case te:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case F:return r=Ka(r),m(e,t,n,r,i)}if(pe(r)||ue(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Qa(r),i);if(r.$$typeof===j)return m(e,t,n,_a(t,r),i);eo(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),Y&&Wi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return Y&&Wi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),Y&&Wi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),Y&&Wi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return Y&&Wi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),Y&&Wi(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===ne&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case O:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===ne){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),$a(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===F&&Ka(l)===r.type){n(e,r.sibling),c=a(r,o.props),$a(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===ne?(c=ki(o.props.children,e.mode,c,o.key),$a(c,o),c.return=e,e=c):(c=Oi(o.type,o.key,o.props,null,e.mode,c),$a(c,o),c.return=e,e=c)}return s(e);case te:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Mi(o,e.mode,c),c.return=e,e=c}return s(e);case F:return o=Ka(o),_(e,r,o,c)}if(pe(o))return h(e,r,o,c);if(ue(o)){if(l=ue(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,Qa(o),c);if(o.$$typeof===j)return _(e,r,_a(e,o),c);eo(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Ai(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Za=0;var i=_(e,t,n,r);return Xa=null,i}catch(t){if(t===Ba||t===Ha)throw t;var a=wi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var no=to(!0),ro=to(!1),io=!1;function ao(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function so(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function co(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ju&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=xi(e),bi(e,null,n),t}return _i(e,r,t,n),xi(e)}function lo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}function uo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var fo=!1;function po(){if(fo){var e=ja;if(e!==null)throw e}}function mo(e,t,n,r){fo=!1;var i=e.updateQueue;io=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Zu&f)===f:(r&f)===f){f!==0&&f===Aa&&(fo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=D({},d,f);break a;case 2:io=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),ad|=o,e.lanes=o,e.memoizedState=d}}function ho(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function go(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ho(n[e],t)}var _o=B(null),vo=B(0);function X(e,t){e=rd,V(vo,e),V(_o,t),rd=e|t.baseLanes}function yo(){V(vo,rd),V(_o,_o.current)}function bo(){rd=vo.current,ge(_o),ge(vo)}var xo=B(null),So=null;function Co(e){var t=e.alternate;V(Oo,Oo.current&1),V(xo,e),So===null&&(t===null||_o.current!==null||t.memoizedState!==null)&&(So=e)}function wo(e){V(Oo,Oo.current),V(xo,e),So===null&&(So=e)}function To(e){e.tag===22?(V(Oo,Oo.current),V(xo,e),So===null&&(So=e)):Eo()}function Eo(){V(Oo,Oo.current),V(xo,xo.current)}function Do(e){ge(xo),So===e&&(So=null),ge(Oo)}var Oo=B(0);function ko(e,t){V(xo,xo.current),V(Oo,t)}function Ao(e){ge(Oo),ge(xo),So===e&&(So=null)}function jo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||cm(n)||lm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mo=0,Z=null,No=null,Po=null,Fo=!1,Io=!1,Lo=!1,Ro=0,zo=0,Bo=null,Vo=0;function Ho(){throw Error(i(321))}function Uo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nr(e[n],t[n]))return!1;return!0}function Wo(e,t,n,r,i,a){return Mo=a,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?sc:cc,Lo=!1,a=n(r,i),Lo=!1,Io&&(a=Ko(t,n,r,i)),Go(e),a}function Go(e){L.H=oc;var t=No!==null&&No.next!==null;if(Mo=0,Po=No=Z=null,Fo=!1,zo=0,Bo=null,t)throw Error(i(300));e===null||Tc||(e=e.dependencies,e!==null&&ma(e)&&(Tc=!0))}function Ko(e,t,n,r){Z=e;var a=0;do{if(Io&&(Bo=null),zo=0,Io=!1,25<=a)throw Error(i(301));if(a+=1,Po=No=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}L.H=lc,o=t(n,r)}while(Io);return o}function qo(){var e=L.H,t=e.useState()[0];return t=typeof t.then==`function`?es(t):t,e=e.useState()[0],(No===null?null:No.memoizedState)!==e&&(Z.flags|=1024),t}function Jo(){var e=Ro!==0;return Ro=0,e}function Yo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Xo(e){if(Fo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Fo=!1}Mo=0,Po=No=Z=null,Io=!1,zo=Ro=0,Bo=null}function Zo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Po===null?Z.memoizedState=Po=e:Po=Po.next=e,Po}function Qo(){if(No===null){var e=Z.alternate;e=e===null?null:e.memoizedState}else e=No.next;var t=Po===null?Z.memoizedState:Po.next;if(t!==null)Po=t,No=e;else{if(e===null)throw Z.alternate===null?Error(i(467)):Error(i(310));No=e,e={memoizedState:No.memoizedState,baseState:No.baseState,baseQueue:No.baseQueue,queue:No.queue,next:null},Po===null?Z.memoizedState=Po=e:Po=Po.next=e}return Po}function $o(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function es(e){var t=zo;return zo+=1,Bo===null&&(Bo=[]),e=Ga(Bo,e,t),t=Z,(Po===null?t.memoizedState:Po.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?sc:cc),e}function ts(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return es(e);if(e.$$typeof===I)return;if(e.$$typeof===j)return ga(e)}throw Error(i(438,String(e)))}function ns(e){var t=null,n=Z.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=Z.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=$o(),Z.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=se;return t.index++,n}function rs(e,t){return typeof t==`function`?t(e):t}function is(e){return as(Qo(),No,e)}function as(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Mo&f)===f:(Zu&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Aa&&(d=!0);else if((Mo&p)===p){u=u.next,p===Aa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,Z.lanes|=p,ad|=p;f=u.action,Lo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,Z.lanes|=f,ad|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Nr(o,e.memoizedState)&&(Tc=!0,d&&(n=ja,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function os(e){var t=Qo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Nr(o,t.memoizedState)||(Tc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ss(e,t,n){var r=Z,a=Qo(),o=Y;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Nr((No||a).memoizedState,n);if(s&&(a.memoizedState=n,Tc=!0),a=a.queue,Ms(us.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Po!==null&&!!(Po.memoizedState.tag&1),Ds(e?9:8,{destroy:void 0},ls.bind(null,r,a,n,t),null),e){if(r.flags|=2048,Yu===null)throw Error(i(349));o||Mo&127||cs(r,t,n)}return n}function cs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Z.updateQueue,t===null?(t=$o(),Z.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ls(e,t,n,r){t.value=n,t.getSnapshot=r,ds(t)&&fs(e)}function us(e,t,n){return n(function(){ds(t)&&fs(e)})}function ds(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nr(e,n)}catch{return!0}}function fs(e){var t=yi(e,2);t!==null&&Nd(t,e,2)}function ps(e){var t=Zo();if(typeof e==`function`){var n=e;if(e=n(),Lo){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:e},t}function ms(e,t,n,r){return e.baseState=n,as(e,No,typeof r==`function`?r:rs)}function hs(e,t,n,r,a){if(rc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};L.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,gs(t,o)):(o.next=n.next,t.pending=n.next=o)}}function gs(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=L.T,o={};o.types=a===null?null:a.types,L.T=o;try{var s=n(i,r),c=L.S;c!==null&&c(o,s),_s(e,t,s)}catch(n){ys(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),L.T=a}}else try{a=n(i,r),_s(e,t,a)}catch(n){ys(e,t,n)}}function _s(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){vs(e,t,n)},function(n){return ys(e,t,n)}):vs(e,t,n)}function vs(e,t,n){t.status=`fulfilled`,t.value=n,bs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,gs(e,n)))}function ys(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,bs(t),t=t.next;while(t!==r)}e.action=null}function bs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function xs(e,t){return t}function Ss(e,t){if(Y){var n=Yu.formState;if(n!==null){a:{var r=Z;if(Y){if(J){b:{for(var i=J,a=Zi;i.nodeType!==8;)if(!a||(i=dm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){J=dm(i.nextSibling),r=i.data===`F!`;break a}}$i(r)}r=!1}r&&(t=n[0])}}return n=Zo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xs,lastRenderedState:t},n.queue=r,n=ec.bind(null,Z,r),r.dispatch=n,r=ps(!1),a=nc.bind(null,Z,!1,r.queue),r=Zo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=hs.bind(null,Z,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Cs(e){return ws(Qo(),No,e)}function ws(e,t,n){if(t=as(e,t,xs)[0],e=is(rs)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=es(t)}catch(e){throw e===Ba?Ha:e}else r=t;t=Qo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(Z.flags|=2048,Ds(9,{destroy:void 0},Ts.bind(null,i,n),null)),[r,a,e]}function Ts(e,t){e.action=t}function Es(e){var t=Qo(),n=No;if(n!==null)return ws(t,n,e);Qo(),t=t.memoizedState,n=Qo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Ds(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=Z.updateQueue,t===null&&(t=$o(),Z.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Os(){return Qo().memoizedState}function ks(e,t,n,r){var i=Zo();Z.flags|=e,i.memoizedState=Ds(1|t,{destroy:void 0},n,r===void 0?null:r)}function As(e,t,n,r){var i=Qo();r=r===void 0?null:r;var a=i.memoizedState.inst;No!==null&&r!==null&&Uo(r,No.memoizedState.deps)?i.memoizedState=Ds(t,a,n,r):(Z.flags|=e,i.memoizedState=Ds(1|t,a,n,r))}function js(e,t){ks(8390656,8,e,t)}function Ms(e,t){As(2048,8,e,t)}function Ns(e){Z.flags|=4;var t=Z.updateQueue;if(t===null)t=$o(),Z.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ps(e){var t=Qo().memoizedState;return Ns({ref:t,nextImpl:e}),function(){if(Ju&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Fs(e,t){return As(4,2,e,t)}function Is(e,t){return As(4,4,e,t)}function Ls(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rs(e,t,n){n=n==null?null:n.concat([e]),As(4,4,Ls.bind(null,t,e),n)}function zs(){}function Bs(e,t){var n=Qo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Uo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vs(e,t){var n=Qo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Uo(t,r[1]))return r[0];if(r=e(),Lo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function Hs(e,t,n){return n===void 0||Mo&1073741824&&!(Zu&261930)?e.memoizedState=t:(e.memoizedState=n,e=jd(),Z.lanes|=e,ad|=e,n)}function Us(e,t,n,r){return Nr(n,t)?n:_o.current===null?!(Mo&106)||Mo&1073741824&&!(Zu&261930)?(Tc=!0,e.memoizedState=n):(e=jd(),Z.lanes|=e,ad|=e,t):(e=Hs(e,n,r),Nr(e,t)||(Tc=!0),e)}function Ws(e,t,n,r,i){var a=R.p;R.p=a!==0&&8>a?a:8;var o=L.T,s={};s.types=o===null?null:o.types,L.T=s,nc(e,!1,t,n);try{var c=i(),l=L.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?tc(e,t,Pa(c,r),Ad(e)):tc(e,t,r,Ad(e))}catch(n){tc(e,t,{then:function(){},status:`rejected`,reason:n},Ad())}finally{R.p=a,o!==null&&s.types!==null&&(o.types=s.types),L.T=o}}function Gs(){}function Ks(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=qs(e).queue;Ws(e,a,t,me,n===null?Gs:function(){return Js(e),n(r)})}function qs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:me},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Js(e){var t=qs(e);t.next===null&&(t=e.alternate.memoizedState),tc(e,t.next.queue,{},Ad())}function Ys(){return ga($)}function Xs(){return Qo().memoizedState}function Zs(){return Qo().memoizedState}function Qs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ad();e=so(n);var r=co(t,e,n);r!==null&&(Nd(r,t,n),lo(r,t,n)),t={cache:Ca()},e.payload=t;return}t=t.return}}function $s(e,t,n){var r=Ad();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},rc(e)?ic(t,n):(n=vi(e,t,n,r),n!==null&&(Nd(n,e,r),ac(n,t,r)))}function ec(e,t,n){tc(e,t,n,Ad())}function tc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(rc(e))ic(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Nr(s,o))return _i(e,t,i,0),Yu===null&&gi(),!1}catch{}if(n=vi(e,t,i,r),n!==null)return Nd(n,e,r),ac(n,t,r),!0}return!1}function nc(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},rc(e)){if(t)throw Error(i(479))}else t=vi(e,n,r,2),t!==null&&Nd(t,e,2)}function rc(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function ic(e,t){Io=Fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ac(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,lt(e,n)}}var oc={readContext:ga,use:ts,useCallback:Ho,useContext:Ho,useEffect:Ho,useImperativeHandle:Ho,useLayoutEffect:Ho,useInsertionEffect:Ho,useMemo:Ho,useReducer:Ho,useRef:Ho,useState:Ho,useDebugValue:Ho,useDeferredValue:Ho,useTransition:Ho,useSyncExternalStore:Ho,useId:Ho,useHostTransitionStatus:Ho,useFormState:Ho,useActionState:Ho,useOptimistic:Ho,useMemoCache:Ho,useCacheRefresh:Ho,useEffectEvent:Ho},sc={readContext:ga,use:ts,useCallback:function(e,t){return Zo().memoizedState=[e,t===void 0?null:t],e},useContext:ga,useEffect:js,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ks(4194308,4,Ls.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ks(4194308,4,e,t)},useInsertionEffect:function(e,t){ks(4,2,e,t)},useMemo:function(e,t){var n=Zo();t=t===void 0?null:t;var r=e();if(Lo){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Zo();if(n!==void 0){var i=n(t);if(Lo){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=$s.bind(null,Z,e),[r.memoizedState,e]},useRef:function(e){var t=Zo();return e={current:e},t.memoizedState=e},useState:function(e){e=ps(e);var t=e.queue,n=ec.bind(null,Z,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:zs,useDeferredValue:function(e,t){return Hs(Zo(),e,t)},useTransition:function(){var e=ps(!1);return e=Ws.bind(null,Z,e.queue,!0,!1),Zo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Z,a=Zo();if(Y){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Yu===null)throw Error(i(349));Zu&127||cs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,js(us.bind(null,r,o,e),[e]),r.flags|=2048,Ds(9,{destroy:void 0},ls.bind(null,r,o,n,t),null),n},useId:function(){var e=Zo(),t=Yu.identifierPrefix;if(Y){var n=Ui,r=Hi;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Ro++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Vo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ys,useFormState:Ss,useActionState:Ss,useOptimistic:function(e){var t=Zo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=nc.bind(null,Z,!0,n),n.dispatch=t,[e,t]},useMemoCache:ns,useCacheRefresh:function(){return Zo().memoizedState=Qs.bind(null,Z)},useEffectEvent:function(e){var t=Zo(),n={impl:e};return t.memoizedState=n,function(){if(Ju&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},cc={readContext:ga,use:ts,useCallback:Bs,useContext:ga,useEffect:Ms,useImperativeHandle:Rs,useInsertionEffect:Fs,useLayoutEffect:Is,useMemo:Vs,useReducer:is,useRef:Os,useState:function(){return is(rs)},useDebugValue:zs,useDeferredValue:function(e,t){return Us(Qo(),No.memoizedState,e,t)},useTransition:function(){var e=is(rs)[0],t=Qo().memoizedState;return[typeof e==`boolean`?e:es(e),t]},useSyncExternalStore:ss,useId:Xs,useHostTransitionStatus:Ys,useFormState:Cs,useActionState:Cs,useOptimistic:function(e,t){return ms(Qo(),No,e,t)},useMemoCache:ns,useCacheRefresh:Zs,useEffectEvent:Ps},lc={readContext:ga,use:ts,useCallback:Bs,useContext:ga,useEffect:Ms,useImperativeHandle:Rs,useInsertionEffect:Fs,useLayoutEffect:Is,useMemo:Vs,useReducer:os,useRef:Os,useState:function(){return os(rs)},useDebugValue:zs,useDeferredValue:function(e,t){var n=Qo();return No===null?Hs(n,e,t):Us(n,No.memoizedState,e,t)},useTransition:function(){var e=os(rs)[0],t=Qo().memoizedState;return[typeof e==`boolean`?e:es(e),t]},useSyncExternalStore:ss,useId:Xs,useHostTransitionStatus:Ys,useFormState:Es,useActionState:Es,useOptimistic:function(e,t){var n=Qo();return No===null?(n.baseState=e,[e,n.queue.dispatch]):ms(n,No,e,t)},useMemoCache:ns,useCacheRefresh:Zs,useEffectEvent:Ps};function uc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ad(),i=so(r);i.payload=t,n!=null&&(i.callback=n),t=co(e,i,r),t!==null&&(Nd(t,e,r),lo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ad(),i=so(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=co(e,i,r),t!==null&&(Nd(t,e,r),lo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ad(),r=so(n);r.tag=2,t!=null&&(r.callback=t),t=co(e,r,n),t!==null&&(Nd(t,e,n),lo(t,e,n))}};function fc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Pr(n,r)||!Pr(i,a):!0}function pc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dc.enqueueReplaceState(t,t.state,null)}function mc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=D({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function hc(e){fi(e)}function gc(e){console.error(e)}function _c(e){fi(e)}function vc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function yc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function bc(e,t,n){return n=so(n),n.tag=3,n.payload={element:null},n.callback=function(){vc(e,t)},n}function xc(e){return e=so(e),e.tag=3,e}function Sc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){yc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){yc(t,n,r),typeof i!=`function`&&(_d===null?_d=new Set([this]):_d.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Cc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&pa(t,n,a,!0),n=xo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return So===null?Gd():n.alternate===null&&id===0&&(id=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ua?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,a)),!1;case 22:return n.flags|=65536,r===Ua?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,a)),!1}throw Error(i(435,n.tag))}return mf(e,r,a),Gd(),!1}if(Y)return t=xo.current,t===null?(r!==Qi&&(t=Error(i(423),{cause:r}),aa(Pi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Pi(r,n),a=bc(e.stateNode,r,a),uo(e,a),id!==4&&(id=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Qi&&(e=Error(i(422),{cause:r}),aa(Pi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Pi(o,n),ud===null?ud=[o]:ud.push(o),id!==4&&(id=2),t===null)return!0;r=Pi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=bc(n.stateNode,r,e),uo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(_d===null||!_d.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=xc(a),Sc(a,e,n,r),uo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var wc=Error(i(461)),Tc=!1;function Ec(e,t,n,r){t.child=e===null?ro(t,null,n,r):no(t,e.child,n,r)}function Dc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ha(t),r=Wo(e,t,n,o,a,i),s=Jo(),e!==null&&!Tc?(Yo(e,t,i),tl(e,t,i)):(Y&&s&&Ki(t),t.flags|=1,Ec(e,t,r,i),t.child)}function Oc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Ti(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,kc(e,t,a,r,i)):(e=Oi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!nl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Pr:n,n(o,r)&&e.ref===t.ref)return tl(e,t,i)}return t.flags|=1,e=Ei(a,r),e.ref=t.ref,e.return=t,t.child=e}function kc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Pr(a,r)&&e.ref===t.ref){if(Tc=!1,t.pendingProps=r=a,nl(e,i))e.flags&131072&&(Tc=!0);else return t.lanes=e.lanes,tl(e,t,i)}}return Lc(e,t,n,r,i)}function Ac(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ra(t,a===null?null:a.cachePool),a===null?yo():X(t,a),To(t);else return r=t.lanes=536870912,Mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ra(t,null),yo(),Eo()):(Ra(t,a.cachePool),X(t,a),Eo(),t.memoizedState=null);return Ec(e,t,i,n),t.child}function jc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Mc(e,t,n,r,i){var a=La();return a=a===null?null:{parent:Sa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ra(t,null),yo(),To(t),e!==null&&pa(e,t,r,!0),t.childLanes=i,null}function Nc(e,t){return t=Kc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Pc(e,t,n){return no(t,e.child,null,n),e=Nc(t,t.pendingProps),e.flags|=2,Do(t),t.memoizedState=null,e}function Fc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(Y){if(r.mode===`hidden`)return e=Nc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},jc(null,e);if(wo(t),(e=J)?(e=sm(e,Zi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Vi===null?null:{id:Hi,overflow:Ui},retryLane:536870912,hydrationErrors:null},n=ji(e),n.return=t,t.child=n,Yi=t,J=null)):e=null,e===null)throw $i(t);return t.lanes=536870912,null}return Nc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(wo(t),a){if(t.flags&256)t.flags&=-257,t=Pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Tc||pa(e,t,n,!1),a=(n&e.childLanes)!==0,Tc||a){if(_o.current===null){if(r=Yu,r!==null&&(s=ut(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,yi(e,s),Nd(r,e,s),wc;Gd()}t=Pc(e,t,n)}else e=o.treeContext,J=dm(s.nextSibling),Yi=t,Y=!0,Xi=null,Zi=!1,e!==null&&Ji(t,e),t=Nc(t,r),t.flags|=134221824;return t}return e=Ei(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ic(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Lc(e,t,n,r,i){return ha(t),n=Wo(e,t,n,r,void 0,i),r=Jo(),e!==null&&!Tc?(Yo(e,t,i),tl(e,t,i)):(Y&&r&&Ki(t),t.flags|=1,Ec(e,t,n,i),t.child)}function Rc(e,t,n,r,i,a){return ha(t),t.updateQueue=null,n=Ko(t,r,n,i),Go(e),r=Jo(),e!==null&&!Tc?(Yo(e,t,a),tl(e,t,a)):(Y&&r&&Ki(t),t.flags|=1,Ec(e,t,n,a),t.child)}function zc(e,t,n,r,i){if(ha(t),t.stateNode===null){var a=Si,o=n.contextType;typeof o==`object`&&o&&(a=ga(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=dc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},ao(t),o=n.contextType,a.context=typeof o==`object`&&o?ga(o):Si,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(uc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&dc.enqueueReplaceState(a,a.state,null),mo(t,r,a,i),po(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=mc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Si,typeof u==`object`&&u&&(o=ga(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&pc(t,a,r,o),io=!1;var f=t.memoizedState;a.state=f,mo(t,r,a,i),po(),l=t.memoizedState,s||f!==l||io?(typeof d==`function`&&(uc(t,n,d,r),l=t.memoizedState),(c=io||fc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,oo(e,t),o=t.memoizedProps,u=mc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Si,typeof l==`object`&&l&&(c=ga(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&pc(t,a,r,c),io=!1,f=t.memoizedState,a.state=f,mo(t,r,a,i),po();var p=t.memoizedState;o!==d||f!==p||io||e!==null&&e.dependencies!==null&&ma(e.dependencies)?(typeof s==`function`&&(uc(t,n,s,r),p=t.memoizedState),(u=io||fc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ma(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Ic(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=no(t,e.child,null,i),t.child=no(t,null,n,i)):Ec(e,t,n,i),t.memoizedState=a.state,e=t.child):e=tl(e,t,i),e}function Bc(e,t,n,r){return ra(),t.flags|=256,Ec(e,t,n,r),t.child}var Vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hc(e){return{baseLanes:e,cachePool:za()}}function Uc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=cd),e}function Wc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Oo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(Y){if(i?Co(t):Eo(),(e=J)?(e=sm(e,Zi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Vi===null?null:{id:Hi,overflow:Ui},retryLane:536870912,hydrationErrors:null},n=ji(e),n.return=t,t.child=n,Yi=t,J=null)):e=null,e===null)throw $i(t);return t.lanes=lm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Eo(),i=t.mode,a=Kc({mode:`hidden`,children:a},i),r=ki(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Hc(n),r.childLanes=Uc(e,o,n),t.memoizedState=Vc,jc(null,r)):(Co(t),Gc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return Jc(e,t,a,o,r,c,s,n)}return i?(Eo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Ei(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=ki(i,a,n,null),i.flags|=2):i=Ei(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,jc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Hc(n):(a=i.cachePool,a===null?a=za():(s=Sa._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Uc(e,o,n),t.memoizedState=Vc,jc(e.child,r)):(Co(t),n=e.child,e=n.sibling,n=Ei(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Gc(e,t){return t=Kc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Kc(e,t){return e=wi(22,e,null,t),e.lanes=0,e}function qc(e,t,n){return no(t,e.child,null,n),e=Gc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jc(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Co(t),t.flags&=-257,qc(e,t,c)):t.memoizedState===null?(Eo(),o=a.fallback,s=t.mode,a=Kc({mode:`visible`,children:a.children},s),o=ki(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,no(t,e.child,null,c),a=t.child,a.memoizedState=Hc(c),a.childLanes=Uc(e,r,c),t.memoizedState=Vc,jc(null,a)):(Eo(),t.child=e.child,t.flags|=128,null);if(Co(t),lm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,aa({value:a,source:null,stack:null})),qc(e,t,c)}if(Tc||pa(e,t,c,!1),r=(c&e.childLanes)!==0,Tc||r){if(_o.current!==null)return qc(e,t,c);if(r=Yu,r!==null&&(a=ut(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,yi(e,a),Nd(r,e,a),wc;return cm(o)||Gd(),qc(e,t,c)}return cm(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,J=dm(o.nextSibling),Yi=t,Y=!0,Xi=null,Zi=!1,e!==null&&Ji(t,e),t=Gc(t,a.children),t.flags|=134221824,t)}function Yc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),da(e.return,t,n)}function Xc(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&jo(n)===null&&(t=e),e=e.sibling}return t}function Zc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Qc(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function $c(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Oo.current;if(t.flags&128)return ko(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,ko(t,o),i===`backwards`&&e!==null?(Qc(e),Ec(e,t,r,n),Qc(e)):Ec(e,t,r,n),r=Y?Ri:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yc(e,n,t);else if(e.tag===19)Yc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=Xc(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,Qc(t)),Zc(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&jo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Zc(t,!0,n,null,a,r);break;case`together`:Zc(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=Xc(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Zc(t,!1,i,n,a,r)}return t.child}function el(e,t,n){var r=t.pendingProps;return la(t,t.type,r.value),Ec(e,t,r.children,n),t.child}function tl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ad|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(pa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Ei(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ei(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ma(e)))}function rl(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),la(t,Sa,e.memoizedState.cache),ra();break;case 27:case 5:Se(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:la(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,wo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Co(t),t.flags|=128,null;r=pa(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Wc(e,t,n):(Co(t),e=tl(e,t,n),e===null?null:e.sibling)}Co(t);break;case 19:if(t.flags&128)return $c(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(pa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return $c(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ko(t,Oo.current),r)break;return null;case 22:return t.lanes=0,Ac(e,t,n,t.pendingProps);case 24:la(t,Sa,e.memoizedState.cache)}return tl(e,t,n)}function il(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Tc=!0;else{if(!nl(e,n)&&!(t.flags&128))return Tc=!1,rl(e,t,n);Tc=!!(e.flags&131072)}}else Tc=!1,Y&&t.flags&1048576&&Gi(t,Ri,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ka(t.elementType),t.type=e,typeof e==`function`)Ti(e)?(r=mc(e,r),t.tag=1,t=zc(null,t,e,r,n)):(t.tag=0,t=Lc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===M){t.tag=11,t=Dc(null,t,e,r,n);break a}if(a===P){t.tag=14,t=Oc(null,t,e,r,n);break a}if(a===j){t.tag=10,t.type=e,t=el(null,t,n);break a}}throw t=fe(e)||e,Error(i(306,t,``))}}return t;case 0:return Lc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=mc(r,t.pendingProps),zc(e,t,r,a,n);case 3:a:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,oo(e,t),mo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,la(t,Sa,r),r!==o.cache&&fa(t,[Sa],n,!0),po(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Bc(e,t,r,n);break a}if(r!==a){a=Pi(Error(i(424)),t),aa(a),t=Bc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(J=dm(e.firstChild),Yi=t,Y=!0,Xi=null,Zi=!0,n=ro(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ra(),r===a){t=tl(e,t,n);break a}Ec(e,t,r,n)}t=t.child}return t;case 26:return Ic(e,t),e===null?(n=Fm(t.type,null,t.pendingProps,null))?t.memoizedState=n:Y||(t.stateNode=mp(t.type,t.pendingProps,ve.current,t)):t.memoizedState=Fm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&Y&&(r=t.stateNode=_m(t.type,t.pendingProps,ve.current),Yi=t,Zi=!0,a=J,wp(t.type)?(fm=a,J=dm(r.firstChild)):J=a),Ec(e,t,t.pendingProps.children,n),Ic(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Y&&((a=r=J)&&(r=am(r,t.type,t.pendingProps,Zi),r===null?a=!1:(t.stateNode=r,Yi=t,J=dm(r.firstChild),Zi=!1,a=!0)),a||$i(t)),Se(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,hp(a,o)?r=null:s!==null&&hp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Wo(e,t,qo,null,null,n),$._currentValue=a),Ic(e,t),Ec(e,t,r,n),t.child;case 6:return e===null&&Y&&((e=n=J)&&(n=om(n,t.pendingProps,Zi),n===null?e=!1:(t.stateNode=n,Yi=t,J=null,e=!0)),e||$i(t)),null;case 13:return Wc(e,t,n);case 4:return be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=no(t,null,r,n):Ec(e,t,r,n),t.child;case 11:return Dc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Ic(e,t),Ec(e,t,r,n),t.child;case 8:return Ec(e,t,t.pendingProps.children,n),t.child;case 12:return Ec(e,t,t.pendingProps.children,n),t.child;case 10:return el(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,ha(t),a=ga(a),r=r(a),t.flags|=1,Ec(e,t,r,n),t.child;case 14:return Oc(e,t,t.type,t.pendingProps,n);case 15:return kc(e,t,t.type,t.pendingProps,n);case 19:return $c(e,t,n);case 31:return Fc(e,t,n);case 22:return Ac(e,t,n,t.pendingProps);case 24:return ha(t),r=ga(Sa),e===null?(a=La(),a===null&&(a=Yu,o=Ca(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},ao(t),la(t,Sa,a)):((e.lanes&n)!==0&&(oo(e,t),mo(t,null,null,n),po()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,la(t,Sa,r),r!==a.cache&&fa(t,[Sa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),la(t,Sa,r))),Ec(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:Y&&Ki(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Ic(e,t),Ec(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function al(e){e.flags|=4}function ol(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Xm(t,r):Xm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Hd())e.flags|=8192;else throw qa=Ua,Va}}else e.flags&=-16777217}function sl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Zm(t)){if(Hd())e.flags|=8192;else throw qa=Ua,Va}}function cl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:it(),e.lanes|=t,ld|=t)}function ll(e,t){if(!Y)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function ul(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dl(e,t,n){var r=t.pendingProps;switch(qi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ul(t),null;case 1:return ul(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ua(Sa),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(na(t)?al(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ia())),ul(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(al(t),o===null?(ul(t),ol(t,a,null,r,n)):(ul(t),sl(t,o))):o?o===e.memoizedState?(ul(t),t.flags&=-16777217):(al(t),ul(t),sl(t,o)):(e=e.memoizedProps,e!==r&&al(t),ul(t),ol(t,a,e,r,n)),null;case 27:if(Ce(t),n=ve.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&al(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return ul(t),t.subtreeFlags&=-33554433,null}e=H.current,na(t)?ea(t,e):(e=_m(a,r,n),t.stateNode=e,al(t))}return ul(t),t.subtreeFlags&=-33554433,null;case 5:if(Ce(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&al(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return ul(t),t.subtreeFlags&=-33554433,null}if(o=H.current,na(t))ea(t,o);else{var s=dp(ve.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[gt]=t,o[_t]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(ip(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&al(t)}}return ul(t),t.subtreeFlags&=-33554433,ol(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&al(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ve.current,na(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Yi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[gt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||tp(e.nodeValue,n)),e||$i(t,!0)}else e=dp(e).createTextNode(r),e[gt]=t,t.stateNode=e}return ul(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=na(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[gt]=t}else ra(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ul(t),e=!1}else n=ia(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Do(t),t):(Do(t),null);if(t.flags&128)throw Error(i(558))}return ul(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=na(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[gt]=t}else ra(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ul(t),a=!1}else a=ia(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Do(t),t):(Do(t),null)}return Do(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),cl(t,t.updateQueue),ul(t),null);case 4:return xe(),e===null&&Gf(t.stateNode.containerInfo),t.flags|=67108864,ul(t),null;case 10:return ua(t.type),ul(t),null;case 19:if(Ao(t),r=t.memoizedState,r===null)return ul(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)ll(r,!1);else{if(id!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=jo(e),o!==null){for(t.flags|=128,ll(r,!1),e=o.updateQueue,t.updateQueue=e,cl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Di(n,e),n=n.sibling;return ko(t,Oo.current&1|2),Y&&Wi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&U()>hd&&(t.flags|=128,a=!0,ll(r,!1),t.lanes=4194304)}}else{if(!a){if(e=jo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,cl(t,e),ll(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!Y)return ul(t),null}else 2*U()-r.renderingStartTime>hd&&n!==536870912&&(t.flags|=128,a=!0,ll(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=U(),e.sibling=null,o=Oo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||Y?ko(t,o):(n=o,V(xo,t),V(Oo,n),So===null&&(So=t)),Y&&Wi(t,r.treeForkCount),e}return ul(t),null;case 22:case 23:return Do(t),bo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(ul(t),t.subtreeFlags&6&&(t.flags|=8192)):ul(t),n=t.updateQueue,n!==null&&cl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ge(Ia),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ua(Sa),ul(t),null;case 25:return null;case 30:return t.flags|=33554432,ul(t),null}throw Error(i(156,t.tag))}function fl(e,t){switch(qi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ua(Sa),xe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(Do(t),t.alternate===null)throw Error(i(340));ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Do(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ao(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return xe(),null;case 10:return ua(t.type),null;case 22:case 23:return Do(t),bo(),e!==null&&ge(Ia),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ua(Sa),null;case 25:return null;default:return null}}function pl(e,t){switch(qi(t),t.tag){case 3:ua(Sa),xe();break;case 26:case 27:case 5:Ce(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&Do(t);break;case 13:Do(t);break;case 19:Ao(t);break;case 10:ua(t.type);break;case 22:case 23:Do(t),bo(),e!==null&&ge(Ia);break;case 24:ua(Sa)}}function ml(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){pf(t,t.return,e)}}function hl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){pf(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){pf(t,t.return,e)}}function gl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{go(t,n)}catch(t){pf(e,e.return,t)}}}function _l(e,t,n){n.props=mc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){pf(e,t,n)}}function vl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=li(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Ip(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Lp(e);h(e.child,!1,em,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){pf(e,t,n)}}function yl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){pf(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){pf(e,t,n)}else n.current=null}}function bl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)nm(e.stateNode,t[n])}function xl(e){for(var t=e.return;t!==null&&(wl(t)&&nm(e.stateNode,t.stateNode),!Cl(t));)t=t.return}function Sl(e){for(var t=e.return;t!==null&&(wl(t)&&rm(e.stateNode,t.stateNode),!Cl(t));)t=t.return}function Cl(e){return e.tag===5||e.tag===3||e.tag===27}function wl(e){return e&&e.tag===7&&e.stateNode!==null}function Tl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){pf(e,e.return,t)}}function El(e,t,n){try{var r=e.stateNode;op(r,e.type,n,t),r[_t]=t}catch(t){pf(e,e.return,t)}}function Dl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wp(e.type)||e.tag===4}function Ol(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Dl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pn)),bl(e,r),Bt=!0;else if(i!==4&&(i===27&&(bl(e,r),r=null,wp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(kl(e,t,n,r),e=e.sibling;e!==null;)kl(e,t,n,r),e=e.sibling}function Al(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),bl(e,r),Bt=!0;else if(i!==4&&(i===27&&(bl(e,r),r=null,wp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Al(e,t,n,r),e=e.sibling;e!==null;)Al(e,t,n,r),e=e.sibling}function jl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ip(t,r,n),t[gt]=e,t[_t]=n}catch(t){pf(e,e.return,t)}}var Ml=!1,Nl=null;function Pl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Ml=!0)}var Fl=null;function Il(){var e=Fl;return Fl=null,e}var Ll=0;function Rl(e,t,n,r,i){return Ll=0,zl(e.child,t,n,r,i)}function zl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Ap(o);r.push(s),s.view&&(a=!0)}else a||Ap(o).view&&(a=!0);Ml=!0,Dp(o,Ll===0?t:t+`_`+Ll,n),Ll++}else e.tag===22&&e.memoizedState!==null||e.tag===30&&i||zl(e.child,t,n,r,i)&&(a=!0);e=e.sibling}return a}function Bl(e,t){for(;e!==null;)e.tag===5?Op(e.stateNode,e.memoizedProps):e.tag===22&&e.memoizedState!==null||e.tag===30&&t||Bl(e.child,t),e=e.sibling}function Vl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Vl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=di(t.default,t.share),t!==`none`&&(Rl(e,n,t,null,!1)||Bl(e.child,!1))}e=e.sibling}}function Hl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=li(r,n),a=di(r.default,n.paired?r.share:r.enter);a===`none`?Vl(e):Rl(e,i,a,null,!1)?(Vl(e),n.paired||t||Md(e,r.onEnter)):Bl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Hl(e,t),e=e.sibling;else Vl(e)}function Ul(e){if(Nl!==null&&Nl.size!==0){var t=Nl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=di(n.default,n.share);if(a!==`none`&&(Rl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Md(e,n.onShare)):Bl(e.child,!1)),t.delete(r),t.size===0)break}}}Ul(e)}e=e.sibling}}}function Wl(e){if(e.tag===30){var t=e.memoizedProps,n=li(t,e.stateNode),r=Nl===null?void 0:Nl.get(n),i=di(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Rl(e,n,i,null,!1)?r===void 0?Md(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Nl.delete(n),Md(e,t.onShare)):Bl(e.child,!1)),Nl!==null&&Ul(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Wl(e),e=e.sibling;else Nl!==null&&Ul(e)}function Gl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=li(t,e.stateNode);t=di(t.default,t.update),e.flags&=-5,t!==`none`&&Rl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Gl(e);e=e.sibling}}function Kl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Bl(e.child,!1))}Kl(e)}e=e.sibling}}function ql(e){if(e.tag===30)e.stateNode.paired=null,Bl(e.child,!1),Kl(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)ql(e),e=e.sibling;else Kl(e)}function Jl(e){for(e=e.child;e!==null;)e.tag===30?Bl(e.child,!1):e.subtreeFlags&33554432&&Jl(e),e=e.sibling}function Yl(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Ll<a.length){var l=a[Ll],u=Ap(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Dp(c,Ll===0?n:n+`_`+Ll,i),s&&e.flags&4||(Fl===null&&(Fl=[]),Fl.push(c,Ll===0?r:r+`_`+Ll,t.memoizedProps)),Ll++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:Yl(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function Xl(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=li(n,r),a=di(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(jp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Ll=0,i=Yl(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Md(e,n.onUpdate))}else e.subtreeFlags&33554432&&Xl(e,t);e=e.sibling}}var Zl=!1,Ql=!1,$l=!1,eu=!1,tu=typeof WeakSet==`function`?WeakSet:Set,nu=null,ru=!1,iu=!1,au=!1,ou=!1;function su(e,t,n){if(e=e.containerInfo,lp=gh,e=zr(e),Br(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(up={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,nu=t,t=n?9270:1024;nu!==null;){if(e=nu,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Wl(r[a]);if(e.alternate===null&&e.flags&2)n&&Pl(e),cu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Wl(r),cu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Pl(e),cu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,nu=r):(n&&Gl(e),cu(n))}}Nl=null}function cu(e){for(;nu!==null;){var t=nu,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=mc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){pf(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)im(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:im(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=li(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=di(a.default,a.update),a!==`none`&&Rl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,nu=r;break}nu=t.return}}function lu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:ku(e,n),r&4&&ml(5,n);break;case 1:if(ku(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){pf(n,n.return,e)}else{var i=mc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){pf(n,n.return,e)}}}r&64&&gl(n),r&512&&vl(n,n.return);break;case 3:if(ku(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{go(e,t)}catch(e){pf(n,n.return,e)}}break;case 27:t===null&&r&4&&jl(n);case 26:case 5:ku(e,n),t===null&&r&4&&Tl(n),r&512&&vl(n,n.return);break;case 12:ku(e,n);break;case 31:ku(e,n),r&4&&vu(e,n);break;case 13:ku(e,n),r&4&&yu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),um(e,n))));break;case 22:if(r=n.memoizedState!==null||Zl,!r){var a=t!==null&&t.memoizedState!==null||Ql;t=Zl,i=Ql,Zl=r,(Ql=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),ju(e,n,r)):ku(e,n),Zl=t,Ql=i}break;case 30:ku(e,n),r&512&&vl(n,n.return);break;case 7:r&512&&vl(n,n.return);default:ku(e,n)}}function uu(e,t){for(e=e.child;e!==null;)du(e,t),e=e.sibling}function du(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){pf(e,e.return,t)}fu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,Bt=!0}catch(t){pf(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?Ep(s,!0):Ep(e.stateNode,!1)}catch(t){pf(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&uu(e,t);break;default:uu(e,t)}}function fu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:du(n,r);break a;case 22:n.memoizedState===null&&fu(n,r);break a;default:fu(n,r)}}e=e.sibling}}function pu(e){var t=e.alternate;t!==null&&(e.alternate=null,pu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var mu=null,hu=!1;function gu(e,t,n){for(n=n.child;n!==null;)_u(e,t,n),n=n.sibling}function _u(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:Ql||yl(n,t),gu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Ql&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ql||yl(n,t),Sl(n);var r=mu,i=hu;wp(n.type)&&(mu=n.stateNode,hu=!1),gu(e,t,n),vm(n.stateNode,n.type,n.memoizedProps),mu=r,hu=i;break;case 5:Ql||yl(n,t),Sl(n);case 6:if(n.tag===6&&Sl(n),r=mu,i=hu,mu=null,gu(e,t,n),mu=r,hu=i,mu!==null){if(hu)try{(mu.nodeType===9?mu.body:mu.nodeName===`HTML`?mu.ownerDocument.body:mu).removeChild(n.stateNode),Bt=!0}catch(e){pf(n,t,e)}else try{mu.removeChild(n.stateNode),Bt=!0}catch(e){pf(n,t,e)}}break;case 18:mu!==null&&(hu?(e=mu,Tp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Tp(mu,n.stateNode));break;case 4:r=mu,i=hu,mu=n.stateNode.containerInfo,hu=!0,gu(e,t,n),mu=r,hu=i;break;case 0:case 11:case 14:case 15:hl(2,n,t),Ql||hl(4,n,t),gu(e,t,n);break;case 1:Ql||(yl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&_l(n,t,r)),gu(e,t,n);break;case 21:gu(e,t,n);break;case 22:Ql=(r=Ql)||n.memoizedState!==null,gu(e,t,n),Ql=r;break;case 30:yl(n,t),gu(e,t,n);break;case 7:Ql||yl(n,t),gu(e,t,n);break;default:gu(e,t,n)}}function vu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){pf(t,t.return,e)}}}function yu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){pf(t,t.return,e)}}function bu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new tu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new tu),t;default:throw Error(i(435,e.tag))}}function xu(e,t){var n=bu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Su(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(wp(l.type)){mu=l.stateNode,hu=!1;break a}break;case 5:mu=l.stateNode,hu=!1;break a;case 3:case 4:mu=l.stateNode.containerInfo,hu=!0;break a}l=l.return}if(mu===null)throw Error(i(160));_u(s,c,o),mu=null,hu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)wu(t,e,n),t=t.sibling}var Cu=null;function wu(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Su(t,e,n),Tu(e),a&4&&(hl(3,e,e.return),ml(3,e),hl(5,e,e.return));break;case 1:Su(t,e,n),Tu(e),a&512&&(Ql||r===null||yl(r,r.return)),a&64&&Zl&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Cu,Su(t,e,n),Tu(e),a&512&&(Ql||r===null||yl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(Zl)e.stateNode=mp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Ct]||r[gt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),ip(r,t,n),r[gt]=e,At(r),t=r;break a;case`link`:if(o=qm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),ip(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=qm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),ip(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[gt]=e,At(r),t=r}e.stateNode=t}}else Zl||Jm(o,e.type,e.stateNode)}else e.stateNode=Hm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&El(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||Ql||t.parentNode.removeChild(t)):a.count--,n===null?Zl||Jm(o,e.type,e.stateNode):Hm(o,n,e.memoizedProps))}break;case 27:Su(t,e,n),Tu(e),a&512&&(Ql||r===null||yl(r,r.return)),r!==null&&a&4&&El(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=$l,$l=!1,Su(t,e,n),$l=o,Tu(e),a&512&&(Ql||r===null||yl(r,r.return)),e.flags&32){t=e.stateNode;try{an(t,``),Bt=!0}catch(t){pf(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,El(e,t,r===null?t:r.memoizedProps)),a&1024&&(eu=!0);break;case 6:if(Su(t,e,n),Tu(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Bt=!0}catch(t){pf(e,e.return,t)}}break;case 3:if(Bt=!1,Km=null,o=Cu,Cu=Sm(t.containerInfo),Su(t,e,n),Cu=o,Tu(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){pf(e,e.return,t)}eu&&(eu=!1,Eu(e)),Bt=!1;break;case 4:a=$l,$l=Zl,r=Vt(),o=Cu,Cu=Sm(e.stateNode.containerInfo),Su(t,e,n),Tu(e),Cu=o,Bt&&iu&&(au=!0),Bt=r,$l=a;break;case 12:Su(t,e,n),Tu(e);break;case 31:Su(t,e,n),Tu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xu(e,t)));break;case 13:Su(t,e,n),Tu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(pd=U()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xu(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=Zl,l=Ql,u=$l;Zl=c||o,$l=u||o,Ql=l||s,Su(t,e,n),Ql=l,$l=u,Zl=c,Tu(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||Zl||Ql||(t=s||Ql,n=Zl,r=Ql,Zl=o||Zl,Ql=t,Au(e,2),Zl=n,Ql=r),!o&&$l||uu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,xu(e,n))));break;case 19:Su(t,e,n),Tu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xu(e,t)));break;case 30:a&512&&(Ql||r===null||yl(r,r.return)),a=Vt(),o=iu,s=(n&335544064)===n,c=e.memoizedProps,iu=s&&di(c.default,c.update)!==`none`,Su(t,e,n),Tu(e),s&&r!==null&&Bt&&(e.flags|=4),iu=o,Bt=a;break;case 21:break;case 7:a&512&&(Ql||r===null||yl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Su(t,e,n),Tu(e)}}function Tu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Dl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(wl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Cl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Al(e,Ol(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(an(l,``),n.flags&=-33),Al(e,Ol(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;kl(e,Ol(e),u,s);break;default:throw Error(i(161))}}catch(t){pf(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Eu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Eu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Du(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Ou(t,e),t=t.sibling;else Xl(t,!1)}function Ou(e,t){var n=e.alternate;if(n===null)Hl(e,!1);else switch(e.tag){case 3:if(ou=ru=!1,Il(),Du(t,e),!ru&&!au){if(e=Fl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Op(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),ou=!0}Fl=null;break;case 5:Du(t,e);break;case 4:r=ru,ru=!1,Du(t,e),ru&&(au=!0),ru=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Du(t,e):Hl(e,!1));break;case 30:r=ru,i=Il(),ru=!1,Du(t,e),ru&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=li(a,o),o=li(n.memoizedProps,o);var s=di(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Ll=0,t=Yl(e,n,t,o,s,a,!0),Ll!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Md(e,e.memoizedProps.onUpdate),Fl=i):i!==null&&(i.push.apply(i,Fl),Fl=i),ru=e.flags&32?!0:r;break;default:Du(t,e)}}function ku(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)lu(e,t.alternate,t),t=t.sibling}function Au(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:hl(4,n,n.return),Au(n,r);break;case 1:yl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&_l(n,n.return,i),Au(n,r);break;case 27:r&2&&vm(n.stateNode,n.type,n.memoizedProps);case 5:yl(n,n.return),n.tag!==5&&n.tag!==27||Sl(n),Au(n,r);break;case 6:Sl(n);break;case 26:yl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||Ql||i.parentNode.removeChild(i),Au(n,r);break;case 22:n.memoizedState===null&&Au(n,r);break;case 30:yl(n,n.return),Au(n,r);break;case 7:yl(n,n.return);default:Au(n,r)}e=e.sibling}}function ju(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:ju(i,a,n),ml(4,a);break;case 1:if(ju(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){pf(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)ho(l[i],c)}catch(e){pf(r,r.return,e)}}s&&o&64&&gl(a),vl(a,a.return);break;case 27:n&2&&jl(a);case 5:a.tag!==5&&a.tag!==27||xl(a),ju(i,a,n),s&&r===null&&o&4&&Tl(a),vl(a,a.return);break;case 6:xl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||Zl||Jm(Sm(c.ownerDocument),a.type,c),ju(i,a,n),s&&r===null&&o&4&&Tl(a),vl(a,a.return);break;case 12:ju(i,a,n);break;case 31:ju(i,a,n),s&&o&4&&vu(i,a);break;case 13:ju(i,a,n),s&&o&4&&yu(i,a);break;case 22:a.memoizedState===null&&ju(i,a,n),vl(a,a.return);break;case 30:ju(i,a,n),vl(a,a.return);break;case 7:vl(a,a.return);default:ju(i,a,n)}t=t.sibling}}function Mu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&wa(n))}function Nu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wa(e))}function Pu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Fu(e,t,n,r),t=t.sibling;else i&&Jl(t)}function Fu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ql(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Pu(e,t,n,r),a&2048&&ml(9,t);break;case 1:Pu(e,t,n,r);break;case 3:Pu(e,t,n,r),i&&ou&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&wa(a)));break;case 12:if(a&2048){Pu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){pf(t,t.return,e)}}else Pu(e,t,n,r);break;case 31:Pu(e,t,n,r);break;case 13:Pu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&ql(t),o._visibility&2?Pu(e,t,n,r):(o._visibility|=2,Iu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&ql(s),o._visibility&2?Pu(e,t,n,r):Lu(e,t)),a&2048&&Mu(s,t);break;case 24:Pu(e,t,n,r),a&2048&&Nu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Bl(a.child,!0),Bl(t.child,!0))),Pu(e,t,n,r);break;default:Pu(e,t,n,r)}}function Iu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Iu(a,o,s,c,i),ml(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Iu(a,o,s,c,i)):u._visibility&2?Iu(a,o,s,c,i):Lu(a,o),i&&l&2048&&Mu(o.alternate,o);break;case 24:Iu(a,o,s,c,i),i&&l&2048&&Nu(o.alternate,o);break;default:Iu(a,o,s,c,i)}t=t.sibling}}function Lu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Lu(n,r),i&2048&&Mu(r.alternate,r);break;case 24:Lu(n,r),i&2048&&Nu(r.alternate,r);break;default:Lu(n,r)}t=t.sibling}}var Ru=8192;function zu(e,t,n){if(e.subtreeFlags&Ru)for(e=e.child;e!==null;)Bu(e,t,n),e=e.sibling}function Bu(e,t,n){switch(e.tag){case 26:zu(e,t,n),e.flags&Ru&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&$m(n,e)):eh(n,Cu,e.memoizedState,e.memoizedProps));break;case 5:zu(e,t,n),e.flags&Ru&&(e=e.stateNode,(t&335544128)===t&&$m(n,e));break;case 3:case 4:var r=Cu;Cu=Sm(e.stateNode.containerInfo),zu(e,t,n),Cu=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ru,Ru=16777216,zu(e,t,n),Ru=r):zu(e,t,n));break;case 30:if((e.flags&Ru)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Nl===null&&(Nl=new Map),Nl.set(r,i)}zu(e,t,n);break;default:zu(e,t,n)}}function Vu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Hu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];nu=r,Gu(r,e)}Vu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Uu(e),e=e.sibling}function Uu(e){switch(e.tag){case 0:case 11:case 15:Hu(e),e.flags&2048&&hl(9,e,e.return);break;case 3:Hu(e);break;case 12:Hu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Wu(e)):Hu(e);break;default:Hu(e)}}function Wu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];nu=r,Gu(r,e)}Vu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:hl(8,t,t.return),Wu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Wu(t));break;default:Wu(t)}e=e.sibling}}function Gu(e,t){for(;nu!==null;){var n=nu;switch(n.tag){case 0:case 11:case 15:hl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:wa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,nu=r;else a:for(n=e;nu!==null;){r=nu;var i=r.sibling,a=r.return;if(pu(r),r===n){nu=null;break a}if(i!==null){i.return=a,nu=i;break a}nu=a}}}var Ku={getCacheForType:function(e){var t=ga(Sa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ga(Sa).controller.signal}},qu=typeof WeakMap==`function`?WeakMap:Map,Ju=0,Yu=null,Xu=null,Zu=0,Qu=0,$u=null,ed=!1,td=!1,nd=!1,rd=0,id=0,ad=0,od=0,sd=0,cd=0,ld=0,ud=null,dd=null,fd=!1,pd=0,md=0,hd=1/0,gd=null,_d=null,vd=0,yd=null,bd=null,xd=0,Sd=0,Cd=null,wd=null,Td=null,Ed=null,Dd=null,Od=0,kd=null;function Ad(){return Ju&2&&Zu!==0?Zu&-Zu:L.T===null?pt():Pf()}function jd(){if(cd===0){if(!(Zu&536870912)||Y){var e=Qe;Qe<<=1,!(Qe&3932160)&&(Qe=262144),cd=e}else cd=536870912}return e=xo.current,e!==null&&(e.flags|=32),cd}function Md(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Ip(li(e.memoizedProps,n))),Ed===null&&(Ed=[]),Ed.push(t.bind(null,r))}}function Nd(e,t,n){(e===Yu&&(Qu===2||Qu===9)||e.cancelPendingCommit!==null)&&(Bd(e,0),Ld(e,Zu,cd,!1)),ot(e,n),Ju&2&&e===Yu||(e===Yu&&(!(Ju&2)&&(od|=n),id===4&&Ld(e,Zu,cd,!1)),Ef(e))}function Pd(e,t,n){if(Ju&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||tt(e,t),a=r?Jd(e,t):Kd(e,t,!0),o=r;do{if(a===0){td&&!r&&Ld(e,t,0,!1);break}if(n=e.current.alternate,o&&!Id(n))a=Kd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=ud;var l=c.current.memoizedState.isDehydrated;if(l&&(Bd(c,s).flags|=256),s=Kd(c,s,!1),s!==2&&s!==6){if(nd&&!l){c.errorRecoveryDisabledLanes|=o,od|=o,a=4;break a}o=dd,dd=a,o!==null&&(dd===null?dd=o:dd.push.apply(dd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Bd(e,0),Ld(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Ld(r,t,cd,!ed);break a;case 2:dd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=pd+300-U(),10<a)){if(Ld(r,t,cd,!ed),W(r,0,!0)!==0)break a;xd=t,r.timeoutHandle=vp(Fd.bind(null,r,n,dd,gd,fd,t,cd,od,ld,ed,o,`Throttled`,-0,0),a);break a}Fd(r,n,dd,gd,fd,t,cd,od,ld,ed,o,null,-0,0)}break}}while(1);Ef(e)}function Fd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pn},Nl=null,Bu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=ih.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?pd-U():(a&4194048)===a?md-U():0,m=nh(d,m),m!==null)?(xd=a,e.cancelPendingCommit=m(tf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Ld(e,a,o,!l)):tf(e,t,a,n,r,i,o,s,c,l,u,d)}function Id(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Nr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ld(e,t,n,r){t=nt(e,t),t&=~sd,t&=~od,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ct(e,n,t)}function Rd(){return Ju&6?!0:(Df(0,!1),!1)}function zd(){if(Xu!==null){if(Qu===0)var e=Xu.return;else e=Xu,ca=sa=null,Xo(e),Xa=null,Za=0,e=Xu;for(;e!==null;)pl(e.alternate,e),e=e.return;Xu=null}}function Bd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,yp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),xd=0,zd(),Yu=e,Xu=n=Ei(e.current,null),Zu=t,Qu=0,$u=null,ed=!1,td=tt(e,t),nd=!1,ld=cd=sd=od=ad=id=0,dd=ud=null,fd=!1,rd=nt(e,t),gi(),n}function Vd(e,t){Z=null,L.H=oc,t===Ba||t===Ha?(t=Ja(),Qu=3):t===Va?(t=Ja(),Qu=4):Qu=t===wc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,$u=t,Xu===null&&(id=1,vc(e,Pi(t,e.current)))}function Hd(){var e=xo.current;return e===null?!0:(Zu&4194048)===Zu?So===null:(Zu&62914560)===Zu||Zu&536870912?e===So:!1}function Ud(){var e=L.H;return L.H=oc,e===null?oc:e}function Wd(){var e=L.A;return L.A=Ku,e}function Gd(){id=4,ed||(Zu&4194048)!==Zu&&xo.current!==null||(td=!0),!(ad&134217727)&&!(od&134217727)||Yu===null||Ld(Yu,Zu,cd,!1)}function Kd(e,t,n){var r=Ju;Ju|=2;var i=Ud(),a=Wd();(Yu!==e||Zu!==t)&&(gd=null,Bd(e,t)),t=!1;var o=id;a:do try{if(Qu!==0&&Xu!==null){var s=Xu,c=$u;switch(Qu){case 8:zd(),o=6;break a;case 3:case 2:case 9:case 6:xo.current===null&&(t=!0);var l=Qu;if(Qu=0,$u=null,Qd(e,s,c,l),n&&td){o=0;break a}break;default:l=Qu,Qu=0,$u=null,Qd(e,s,c,l)}}qd(),o=id;break}catch(t){Vd(e,t)}while(1);return t&&e.shellSuspendCounter++,ca=sa=null,Ju=r,L.H=i,L.A=a,Xu===null&&(Yu=null,Zu=0,gi()),o}function qd(){for(;Xu!==null;)Xd(Xu)}function Jd(e,t){var n=Ju;Ju|=2;var r=Ud(),a=Wd();Yu!==e||Zu!==t?(gd=null,hd=U()+500,Bd(e,t)):td=tt(e,t);a:do try{if(Qu!==0&&Xu!==null){t=Xu;var o=$u;b:switch(Qu){case 1:Qu=0,$u=null,Qd(e,t,o,1);break;case 2:case 9:if(Wa(o)){Qu=0,$u=null,Zd(t);break}t=function(){Qu!==2&&Qu!==9||Yu!==e||(Qu=7),Ef(e)},o.then(t,t);break a;case 3:Qu=7;break a;case 4:Qu=5;break a;case 7:Wa(o)?(Qu=0,$u=null,Zd(t)):(Qu=0,$u=null,Qd(e,t,o,7));break;case 5:var s=null;switch(Xu.tag){case 26:s=Xu.memoizedState;case 5:case 27:var c=Xu;if(s?Zm(s):c.stateNode.complete){Qu=0,$u=null;var l=c.sibling;if(l!==null)Xu=l;else{var u=c.return;u===null?Xu=null:(Xu=u,$d(u))}break b}}Qu=0,$u=null,Qd(e,t,o,5);break;case 6:Qu=0,$u=null,Qd(e,t,o,6);break;case 8:zd(),id=6;break a;default:throw Error(i(462))}}Yd();break}catch(t){Vd(e,t)}while(1);return ca=sa=null,L.H=r,L.A=a,Ju=n,Xu===null?(Yu=null,Zu=0,gi(),id):0}function Yd(){for(;Xu!==null&&!Pe();)Xd(Xu)}function Xd(e){var t=il(e.alternate,e,rd);e.memoizedProps=e.pendingProps,t===null?$d(e):Xu=t}function Zd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Rc(n,t,t.pendingProps,t.type,void 0,Zu);break;case 11:t=Rc(n,t,t.pendingProps,t.type.render,t.ref,Zu);break;case 5:Xo(t);var r=t;r===Yi&&(Y?(ta(r),r.tag===5&&r.stateNode!=null&&(J=r.stateNode)):(ta(r),Y=!0));default:pl(n,t),t=Xu=Di(t,rd),t=il(n,t,rd)}e.memoizedProps=e.pendingProps,t===null?$d(e):Xu=t}function Qd(e,t,n,r){ca=sa=null,Xo(t),Xa=null,Za=0;var i=t.return;try{if(Cc(e,i,t,n,Zu)){id=1,vc(e,Pi(n,e.current)),Xu=null;return}}catch(t){if(i!==null)throw Xu=i,t;id=1,vc(e,Pi(n,e.current)),Xu=null;return}t.flags&32768?(Y||r===1?e=!0:td||Zu&536870912?e=!1:(ed=e=!0,(r===2||r===9||r===3||r===6)&&(r=xo.current,r!==null&&r.tag===13&&(r.flags|=16384))),ef(t,e)):$d(t)}function $d(e){var t=e;do{if(t.flags&32768){ef(t,ed);return}e=t.return;var n=dl(t.alternate,t,rd);if(n!==null){Xu=n;return}if(t=t.sibling,t!==null){Xu=t;return}Xu=t=e}while(t!==null);id===0&&(id=5)}function ef(e,t){do{var n=fl(e.alternate,e);if(n!==null){n.flags&=32767,Xu=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Xu=e;return}Xu=e=n}while(e!==null);id=6,Xu=null}function tf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do uf();while(vd!==0);if(Ju&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===Yu&&(Xu=Yu=null,Zu=0),bd=t,yd=e,xd=n,Cd=a,wd=r,nf(e,t,n,s,c,l,f)}}function nf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Sd=s,s|=hi,st(e,n,s,r,i,a),Ed=null,(n&335544064)===n?(Dd=Da(e),r=10262):(Dd=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(ze,function(){return df(),null})):(e.callbackNode=null,e.callbackPriority=0),Ml=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=L.T,L.T=null,i=R.p,R.p=2,a=Ju,Ju|=4;try{su(e,t,n)}finally{Ju=a,R.p=i,L.T=r}}vd=1,Ml?Td=Pp(o,e.containerInfo,Dd,of,sf,af,cf,df,rf,null,null):(of(),sf(),cf())}function rf(e){if(vd!==0){var t=yd.onRecoverableError;t(e,{componentStack:null})}}function af(){vd===3&&(vd=0,Ou(bd,yd),vd=4)}function of(){if(vd===1){vd=0;var e=yd,t=bd,n=xd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=L.T,L.T=null;var i=R.p;R.p=2;var a=Ju;Ju|=4;try{iu=au=!1,wu(t,e,n),n=up;var o=zr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Rr(s.ownerDocument.documentElement,s)){if(c!==null&&Br(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Lr(s,h),v=Lr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!lp,up=lp=null}finally{Ju=a,R.p=i,L.T=r}}e.current=t,vd=2}}function sf(){if(vd===2){vd=0;var e=yd,t=bd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=L.T,L.T=null;var r=R.p;R.p=2;var i=Ju;Ju|=4;try{lu(e,t.alternate,t)}finally{Ju=i,R.p=r,L.T=n}}vd=3}}function cf(){if(vd===4||vd===3){vd=0;var e=Td;Td=null,Fe();var t=yd,n=bd,r=xd,i=wd,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?vd=5:(vd=0,bd=yd=null,lf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(_d=null),ft(r),n=n.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=L.T,a=R.p,R.p=2,L.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{L.T=n,R.p=a}}if(i=Ed,o=Dd,Dd=null,i!==null&&(Ed=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);xd&3&&uf(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===kd?Od++:(Od=0,kd=t):(Od=0,kd=null),Df(0,!1)}}function lf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,wa(t)))}function uf(){return Td!==null&&(Td.skipTransition(),Td=null),of(),sf(),cf(),df()}function df(){if(vd!==5)return!1;var e=yd,t=Sd;Sd=0;var n=ft(xd),r=L.T,a=R.p;try{R.p=32>n?32:n,L.T=null,n=Cd,Cd=null;var o=yd,s=xd;if(vd=0,bd=yd=null,xd=0,Ju&6)throw Error(i(331));var c=Ju;if(Ju|=4,Uu(o.current),Fu(o,o.current,s,n),Ju=c,Df(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,o)}catch{}return!0}finally{R.p=a,L.T=r,lf(e,t)}}function ff(e,t,n){t=Pi(n,t),t=bc(e.stateNode,t,2),e=co(e,t,2),e!==null&&(ot(e,2),Ef(e))}function pf(e,t,n){if(e.tag===3)ff(e,e,n);else for(;t!==null;){if(t.tag===3){ff(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(_d===null||!_d.has(r))){e=Pi(n,e),n=xc(2),r=co(t,n,2),r!==null&&(Sc(n,r,t,e),ot(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qu;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(nd=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Yu===e&&(Zu&n)===n&&(id===4||id===3&&(Zu&62914560)===Zu&&300>U()-pd?Ju&2?sd|=n:Bd(e,0):sd|=n,ld===Zu&&(ld=0)),Ef(e)}function gf(e,t){t===0&&(t=it()),e=yi(e,t),e!==null&&(ot(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Me(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=Zu,a=W(r,r===Yu?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||tt(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&_p()&&(e=Tf);for(var t=U(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}vd!==0&&vd!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=rt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Yu,n=Zu,n=W(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Qu===2||Qu===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||tt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),ft(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=jf.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(vd!==0&&vd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(uf()&&e.callbackNode!==n)return null;var r=Zu;return r=W(e,e===Yu?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Pd(e,r,t),Af(e,U()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(uf())return null;Pd(e,t,!0)}function Nf(){Sp(function(){Ju&6?Me(Le,Of):kf()})}function Pf(){if(Tf===0){var e=Aa;e===0&&(e=Ze,Ze<<=1,!(Ze&261888)&&(Ze=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:fn(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[_t]||null).action),o=r.submitter;o&&(t=(t=o[_t]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Nn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);Ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),Ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<oi.length;Lf++){var Rf=oi[Lf];si(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}si(Qr,`onAnimationEnd`),si($r,`onAnimationIteration`),si(ei,`onAnimationStart`),si(`dblclick`,`onDoubleClick`),si(`focusin`,`onFocus`),si(`focusout`,`onBlur`),si(ti,`onTransitionRun`),si(ni,`onTransitionStart`),si(ri,`onTransitionCancel`),si(ii,`onTransitionEnd`),Ft(`onMouseEnter`,[`mouseout`,`mouseover`]),Ft(`onMouseLeave`,[`mouseout`,`mouseover`]),Ft(`onPointerEnter`,[`pointerout`,`pointerover`]),Ft(`onPointerLeave`,[`pointerout`,`pointerover`]),Pt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Pt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Pt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Pt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Pt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Pt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){fi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){fi(e)}i.currentTarget=null,a=c}}}}function Hf(e,t){var n=t[yt];n===void 0&&(n=t[yt]=new Set);var r=e+`__bubble`;n.has(r)||(Kf(t,e,2,!1),n.add(r))}function Uf(e,t,n){var r=0;t&&(r|=4),Kf(n,e,r,t)}var Wf=`_reactListening`+Math.random().toString(36).slice(2);function Gf(e){if(!e[Wf]){e[Wf]=!0,Mt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Uf(t,!1,e),Uf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wf]||(t[Wf]=!0,Uf(`selectionchange`,!1,t))}}function Kf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!Cn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function qf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Et(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}bn(function(){var r=a,i=hn(n),s=[];a:{var c=ai.get(e);if(c!==void 0){var l=Nn,u=e;switch(e){case`keypress`:if(kn(n)===0)break a;case`keydown`:case`keyup`:l=Yn;break;case`focusin`:u=`focus`,l=K;break;case`focusout`:u=`blur`,l=K;break;case`beforeblur`:case`afterblur`:l=K;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Bn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Vn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Qn;break;case Qr:case $r:case ei:l=Hn;break;case ii:l=$n;break;case`scroll`:case`scrollend`:l=Fn;break;case`wheel`:l=er;break;case`copy`:case`cut`:case`paste`:l=q;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Xn;break;case`submit`:l=Zn;break;case`toggle`:case`beforetoggle`:l=tr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=xn(m,p),g!=null&&d.push(Jf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==mn&&(u=n.relatedTarget||n.fromElement)&&(Et(u)||u[vt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Et(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Bn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Xn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Ot(c),h=l==null?u:Ot(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Et(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?E(c,l,Xf):null,c!==null&&Zf(s,u,c,d,!1),l!==null&&f!==null&&Zf(s,f,l,d,!0)))}a:{if(c=r?Ot(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=xr;else if(hr(c)){if(Sr)_=jr;else{_=kr;var v=Or}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&ln(r.elementType)&&(_=xr):_=Ar;if(_&&=_(e,r)){gr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Ot(r):window,e){case`focusin`:(hr(v)||v.contentEditable===`true`)&&(Hr=v,Ur=r,Wr=null);break;case`focusout`:Wr=Ur=Hr=null;break;case`mousedown`:Gr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Gr=!1,Kr(s,n,i);break;case`selectionchange`:if(Vr)break;case`keydown`:case`keyup`:Kr(s,n,i)}var y;if(rr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else dr?lr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(or&&n.locale!==`ko`&&(dr||b!==`onCompositionStart`?b===`onCompositionEnd`&&dr&&(y=On()):(Tn=i,En=`value`in Tn?Tn.value:Tn.textContent,dr=!0)),v=Yf(r,b),0<v.length&&(b=new Un(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=ur(n),y!==null&&(b.data=y)))),(y=ar?fr(e,n):pr(e,n))&&(b=Yf(r,`onBeforeInput`),0<b.length&&(v=new Un(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),If(s,e,r,n,i)}Vf(s,t)})}function Jf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=xn(e,n),i!=null&&r.unshift(Jf(e,i,a)),i=xn(e,t),i!=null&&r.push(Jf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Xf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=xn(n,a),l!=null&&o.unshift(Jf(n,l,c))):i||(l=xn(n,a),l!=null&&o.push(Jf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Qf=/\r\n?/g,$f=/\u0000|\uFFFD/g;function ep(e){return(typeof e==`string`?e:``+e).replace(Qf,`
`).replace($f,``)}function tp(e,t){return t=ep(t),ep(e)===t}function np(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||an(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&an(e,``+r);else return;break;case`className`:Ut(e,`class`,r);break;case`tabIndex`:Ut(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ut(e,n,r);break;case`style`:cn(e,r,o);return;case`data`:if(t!==`object`){Ut(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=fn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&np(e,t,`name`,a.name,a,null),np(e,t,`formEncType`,a.formEncType,a,null),np(e,t,`formMethod`,a.formMethod,a,null),np(e,t,`formTarget`,a.formTarget,a,null)):(np(e,t,`encType`,a.encType,a,null),np(e,t,`method`,a.method,a,null),np(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=fn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=pn);return;case`onScroll`:r!=null&&Hf(`scroll`,e);return;case`onScrollEnd`:r!=null&&Hf(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=fn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Hf(`beforetoggle`,e),Hf(`toggle`,e),Ht(e,`popover`,r);break;case`xlinkActuate`:Wt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Wt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Wt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Wt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Wt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Wt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Wt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Wt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Wt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ht(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=un.get(n)||n,Ht(e,n,r);else return}Bt=!0}function rp(e,t,n,r,a,o){switch(n){case`style`:cn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)an(e,r);else if(typeof r==`number`||typeof r==`bigint`)an(e,``+r);else return;break;case`onScroll`:r!=null&&Hf(`scroll`,e);return;case`onScrollEnd`:r!=null&&Hf(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=pn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Nt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[_t]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}Bt=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ht(e,n,r)}return}Bt=!0}function ip(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Hf(`error`,e),Hf(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:np(e,t,o,s,n,null)}}a&&np(e,t,`srcSet`,n.srcSet,n,null),r&&np(e,t,`src`,n.src,n,null);return;case`input`:Hf(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:np(e,t,r,d,n,null)}}$t(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Hf(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:np(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&tn(e,!!r,n,!0):tn(e,!!r,t,!1);return;case`textarea`:for(s in Hf(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:np(e,t,s,c,n,null)}rn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:np(e,t,l,r,n,null)}return;case`dialog`:Hf(`beforetoggle`,e),Hf(`toggle`,e),Hf(`cancel`,e),Hf(`close`,e);break;case`iframe`:case`object`:Hf(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Hf(zf[r],e);break;case`image`:Hf(`error`,e),Hf(`load`,e);break;case`details`:Hf(`toggle`,e);break;case`embed`:case`source`:case`link`:Hf(`error`,e),Hf(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:np(e,t,u,r,n,null)}return;default:if(ln(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&rp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&np(e,t,c,r,n,null))}var ap={};function op(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||np(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(Bt=!0),o=m;break;case`name`:m!==f&&(Bt=!0),a=m;break;case`checked`:m!==f&&(Bt=!0),u=m;break;case`defaultChecked`:m!==f&&(Bt=!0),d=m;break;case`value`:m!==f&&(Bt=!0),s=m;break;case`defaultValue`:m!==f&&(Bt=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&np(e,t,p,m,r,f)}}Qt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||np(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(Bt=!0),p=o;break;case`defaultValue`:o!==l&&(Bt=!0),c=o;break;case`multiple`:o!==l&&(Bt=!0),s=o;default:o!==l&&np(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?tn(e,!!n,n?[]:``,!1):tn(e,!!n,t,!0)):tn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:np(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(Bt=!0),p=a;break;case`defaultValue`:a!==o&&(Bt=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&np(e,t,s,a,r,o)}nn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:np(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(Bt=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:np(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&np(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:np(e,t,u,p,r,m)}return;default:if(ln(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&rp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||rp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&np(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||np(e,t,f,p,r,m)}function sp(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function cp(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&sp(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&sp(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var lp=null,up=null;function dp(e){return e.nodeType===9?e:e.ownerDocument}function fp(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function pp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function mp(e,t,n,r){return n=dp(n).createElement(e),n[gt]=r,n[_t]=t,ip(n,e,t),At(n),n}function hp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gp=null;function _p(){var e=window.event;return e&&e.type===`popstate`?e!==gp&&(gp=e,!0):(gp=null,!1)}var vp=typeof setTimeout==`function`?setTimeout:void 0,yp=typeof clearTimeout==`function`?clearTimeout:void 0,bp=typeof Promise==`function`?Promise:void 0,xp=typeof requestAnimationFrame==`function`?requestAnimationFrame:vp,Sp=typeof queueMicrotask==`function`?queueMicrotask:bp===void 0?vp:function(e){return bp.resolve(null).then(e).catch(Cp)};function Cp(e){setTimeout(function(){throw e})}function wp(e){return e===`head`}function Tp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)ym(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,ym(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Ct]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&ym(e.ownerDocument.body)}n=i}while(n);Hh(t)}function Ep(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Dp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Op(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function kp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Ap(e){return kp(e.getBoundingClientRect(),getComputedStyle(e),e)}function jp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return kp(t,n,e)}function Mp(e){return e.documentElement.clientHeight}function Np(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Pp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Mp(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Qm(f),u>th){s.length=o;break}f=new Promise(Np.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Fp(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Fp.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:D({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Fp.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Fp.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Ip(e){return{name:e,group:new Fp(`group`,e),imagePair:new Fp(`image-pair`,e),old:new Fp(`old`,e),new:new Fp(`new`,e)}}function Lp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Lp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Hp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Bp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Rp,e,s,r)}this._eventListeners=a}};function Rp(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Lp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Hp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Bp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,zp,e,n,i),r.splice(t,1),a!==null&&a()}};function zp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Bp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Vp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Hp(e,t,n,r){if(e.length===0)return-1;r=Vp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&Vp(a.optionsOrUseCapture)===r)return i}return-1}Lp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Bp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Bp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Lp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Up,e,void 0,void 0)};function Up(e,t){return e.tag!==6&&(e=b(e),hm(e,t))}Lp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Wp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Up(t[n],e);n--);};function Wp(e,t){return t.push(e),!1}Lp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=dp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0))};function Gp(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Lp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Kp,e,void 0,void 0)};function Kp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Lp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,qp,e,void 0,void 0);for(var n=t=0;n<Jp.length;n++){var r=Jp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Jp[t++]=r}Jp.length=t}};function qp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Jp=[],Yp=!1;function Xp(e,t,n){Jp.push({fragmentInstance:e,observer:t,instance:n}),Yp||(Yp=!0,gm(function(){Yp=!1;var e=Jp;Jp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Lp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Zp,e,void 0,void 0),e};function Zp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Lp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Lp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Wp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Qp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Qp(e,t,n,r,i){var a=Et(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=E(n,a,T),t===null?t=!1:(h(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=E(r,a,T),t===null?t=!1:(h(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function $p(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Lp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Wp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),$p(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),$p(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function em(e,t){return e=b(e),tm(e,t),!1}function tm(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function nm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Bp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Jp.length;i++){var a=Jp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Jp[r++]=a)}Jp.length=r,n.observe(e)}),tm(e,t))}function rm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Bp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Xp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function im(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:im(n),Tt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function am(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Ct])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=dm(e.nextSibling),e===null)break}return null}function om(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=dm(e.nextSibling),e===null))return null;return e}function sm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=dm(e.nextSibling),e===null))return null;return e}function cm(e){return e.data===`$?`||e.data===`$~`}function lm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function um(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function dm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var fm=null;function pm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return dm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function mm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function hm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function gm(e){xp(function(){xp(function(t){return e(t)})})}function _m(e,t,n){switch(t=dp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function vm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&np(e,t,r,null,ap,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===pn&&(e.onclick=null),Tt(e)}function ym(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tt(e)}var bm=new Map,xm=new Set;function Sm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Cm=R.d;R.d={f:wm,r:Tm,D:Om,C:km,L:Am,m:jm,X:Nm,S:Mm,M:Pm};function wm(){var e=Cm.f(),t=Rd();return e||t}function Tm(e){var t=Dt(e);t!==null&&t.tag===5&&t.type===`form`?Js(t):Cm.r(e)}var Em=typeof document>`u`?null:document;function Dm(e,t,n){var r=Em;if(r&&typeof t==`string`&&t){var i=Zt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),xm.has(i)||(xm.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),ip(t,`link`,e),At(t),r.head.appendChild(t)))}}function Om(e){Cm.D(e),Dm(`dns-prefetch`,e,null)}function km(e,t){Cm.C(e,t),Dm(`preconnect`,e,t)}function Am(e,t,n){Cm.L(e,t,n);var r=Em;if(r&&e&&t){var i=`link[rel="preload"][as="`+Zt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Zt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Zt(n.imageSizes)+`"]`)):i+=`[href="`+Zt(e)+`"]`;var a=i;switch(t){case`style`:a=Im(e);break;case`script`:a=Bm(e)}if(!(bm.has(a)||(e=D({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),bm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Lm(a))||t===`script`&&r.querySelector(Vm(a))))){var o=r.createElement(`link`);ip(o,`link`,e),t===`style`&&(o[wt]=!0,o.onload=o.onerror=function(){jt(o)}),At(o),r.head.appendChild(o)}}}function jm(e,t){Cm.m(e,t);var n=Em;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Zt(r)+`"][href="`+Zt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Bm(e)}if(!bm.has(a)&&(e=D({rel:`modulepreload`,href:e},t),bm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Vm(a)))return}r=n.createElement(`link`),ip(r,`link`,e),At(r),n.head.appendChild(r)}}}function Mm(e,t,n){Cm.S(e,t,n);var r=Em;if(r&&e){var i=kt(r).hoistableStyles,a=Im(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Lm(a)))s.loading=5;else{e=D({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=bm.get(a))&&Wm(e,n);var c=o=r.createElement(`link`);At(c),ip(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Um(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Nm(e,t){Cm.X(e,t);var n=Em;if(n&&e){var r=kt(n).hoistableScripts,i=Bm(e),a=r.get(i);a||(a=n.querySelector(Vm(i)),a||(e=D({src:e,async:!0},t),(t=bm.get(i))&&Gm(e,t),a=n.createElement(`script`),At(a),ip(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Pm(e,t){Cm.M(e,t);var n=Em;if(n&&e){var r=kt(n).hoistableScripts,i=Bm(e),a=r.get(i);a||(a=n.querySelector(Vm(i)),a||(e=D({src:e,async:!0,type:`module`},t),(t=bm.get(i))&&Gm(e,t),a=n.createElement(`script`),At(a),ip(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Fm(e,t,n,r){var a=(a=ve.current)?Sm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Im(n.href),t=kt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Im(n.href);var o=kt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Lm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=bm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},bm.set(e,o)),zm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Bm(n),t=kt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Im(e){return`href="`+Zt(e)+`"`}function Lm(e){return`link[rel="stylesheet"][`+e+`]`}function Rm(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function zm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[wt]){r.loading=1;return}}else t=e.createElement(`link`),t[wt]=!0,t.onload=t.onerror=jt.bind(null,t),ip(t,`link`,n),At(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Bm(e){return`[src="`+Zt(e)+`"]`}function Vm(e){return`script[async]`+e}function Hm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Zt(n.href)+`"]`);if(r)return t.instance=r,At(r),r;var a=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),At(r),ip(r,`style`,a),Um(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Im(n.href);var o=e.querySelector(Lm(a));if(o)return t.state.loading|=4,t.instance=o,At(o),o;r=Rm(n),(a=bm.get(a))&&Wm(r,a),o=(e.ownerDocument||e).createElement(`link`),At(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),ip(o,`link`,r),t.state.loading|=4,Um(o,n.precedence,e),t.instance=o;case`script`:return o=Bm(n.src),(a=e.querySelector(Vm(o)))?(t.instance=a,At(a),a):(r=n,(a=bm.get(o))&&(r=D({},n),Gm(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),At(a),ip(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Um(r,n.precedence,e));return t.instance}function Um(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Wm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Gm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Km=null;function qm(e,t,n){if(Km===null){var r=new Map,i=Km=new Map;i.set(n,r)}else i=Km,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ct]||a[gt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Jm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Ym(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Xm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Zm(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Qm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function $m(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Qm(t),e.suspenseyImages.push(t)),e=ah.bind(e),t.decode().then(e,e))}function eh(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Im(r.href),a=t.querySelector(Lm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=ih.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,At(a);return}a=t.ownerDocument||t,r=Rm(r),(i=bm.get(i))&&Wm(r,i),a=a.createElement(`link`),At(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),ip(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=ih.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var th=0;function nh(e,t){return e.stylesheets&&e.count===0&&oh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&oh(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&th===0&&(th=62500*cp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&oh(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>th?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function rh(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)oh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function ih(){this.count--,rh(this)}function ah(){this.imgCount--,rh(this)}var Q=null;function oh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Q=new Map,t.forEach(sh,e),Q=null,ih.call(e))}function sh(e,t){if(!(t.state.loading&4)){var n=Q.get(e);if(n)var r=n.get(null);else{n=new Map,Q.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=ih.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var $={$$typeof:j,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=at(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=at(0),this.hiddenUpdates=at(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=wi(3,null,null,t),e.current=a,a.stateNode=e,t=Ca(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},ao(a),e}function uh(e){return e?(e=Si,e):Si}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=so(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=co(e,r,t),n!==null&&(Nd(n,e,t),lo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=yi(e,67108864);t!==null&&Nd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=Ad();t=dt(t);var n=yi(e,t);n!==null&&Nd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=L.T;L.T=null;var a=R.p;try{R.p=2,yh(e,t,n,r)}finally{R.p=a,L.T=i}}function vh(e,t,n,r){var i=L.T;L.T=null;var a=R.p;try{R.p=8,yh(e,t,n,r)}finally{R.p=a,L.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)qf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Dt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=et(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-qe(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(Ju&6)&&(hd=U()+500,Df(0,!1))}}break;case 31:case 13:s=yi(a,2),s!==null&&Nd(s,a,2),Rd(),ph(a,2)}if(a=bh(r),a===null&&qf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else qf(e,t,r,null,n)}}function bh(e){return e=hn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Et(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Dt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Et(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,mt(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,mt(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);mn=r,n.target.dispatchEvent(r),mn=null}else return t=Dt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Dt(n);a!==null&&(e.splice(t,3),t-=3,Ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[_t]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[_t]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,Ad(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),Rd(),t[vt]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=pt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.1`)throw Error(i(527,Kh,`19.3.1`));R.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:L,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{We=Jh.inject(qh),Ge=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=hc,s=gc,c=_c;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[vt]=t.current,Gf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u()),v=g(),y=`-ms-`,b=`-moz-`,x=`-webkit-`,S=`comm`,C=`rule`,w=`decl`,T=`@import`,E=`@namespace`,D=`@keyframes`,ee=`@layer`,O=Math.abs,te=String.fromCharCode,ne=Object.assign;function re(e,t){return N(e,0)^45?(((t<<2^N(e,0))<<2^N(e,1))<<2^N(e,2))<<2^N(e,3):0}function k(e){return e.trim()}function A(e,t){return(e=t.exec(e))?e[0]:e}function j(e,t,n){return e.replace(t,n)}function M(e,t,n){return e.indexOf(t,n)}function N(e,t){return e.charCodeAt(t)|0}function ie(e,t,n){return e.slice(t,n)}function P(e){return e.length}function F(e){return e.length}function ae(e,t){return t.push(e),e}function oe(e,t){return e.map(t).join(``)}function se(e,t){return e.filter(function(e){return!A(e,t)})}var ce=1,I=1,le=0,ue=0,de=0,fe=``;function pe(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ce,column:I,length:o,return:``,siblings:s}}function L(e,t){return ne(pe(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function R(e){for(;e.root;)e=L(e.root,{children:[e]});ae(e,e.siblings)}function me(){return de}function he(){return de=ue>0?N(fe,--ue):0,I--,de===10&&(I=1,ce--),de}function z(){return de=ue<le?N(fe,ue++):0,I++,de===10&&(I=1,ce++),de}function B(){return N(fe,ue)}function ge(){return ue}function V(e,t){return ie(fe,e,t)}function H(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _e(e){return ce=I=1,le=P(fe=e),ue=0,[]}function ve(e){return fe=``,e}function ye(e){return k(V(ue-1,Se(e===91?e+2:e===40?e+1:e)))}function be(e){for(;(de=B())&&de<33;)z();return H(e)>2||H(de)>3?``:` `}function xe(e,t){for(;--t&&z()&&!(de<48||de>102||de>57&&de<65||de>70&&de<97););return V(e,ge()+(t<6&&B()==32&&z()==32))}function Se(e){for(;z();)switch(de){case e:return ue;case 34:case 39:e!==34&&e!==39&&Se(de);break;case 40:e===41&&Se(e);break;case 92:z()}return ue}function Ce(e,t){for(;z()&&e+de!==57&&(e+de!==84||B()!==47););return`/*`+V(t,ue-1)+`*`+te(e===47?e:z())}function we(e){for(;!H(B());)z();return V(e,ue)}function Te(e){return ve(Ee(``,null,null,null,[``],e=_e(e),0,[0],e))}function Ee(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=z()){case 40:if(m!=108&&N(C,d-1)==58){M(C+=j(ye(v),`&`,`&\f`),`&\f`,O(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=ye(v);break;case 9:case 10:case 13:case 32:C+=be(m);break;case 92:C+=xe(ge()-1,7);continue;case 47:switch(B()){case 42:case 47:ae(Oe(Ce(z(),ge()),t,n,c),c),(H(m||1)==5||H(B()||1)==5)&&P(C)&&ie(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=P(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=j(C,/\f/g,``)),p>0&&(P(C)-d||h===0&&m===47)&&ae(p>32?ke(C+`;`,r,n,d-1,c):ke(j(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(ae(S=De(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123){if(u===0)Ee(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(N(C,3)===110)break;case 108:if(N(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Ee(e,S,S,r&&ae(De(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):Ee(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+P(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&he()==125)continue}switch(C+=te(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(P(C)-1)*_,_=1;break;case 64:B()===45&&(C+=ye(z())),f=B(),u=d=P(y=C+=we(ge())),v++;break;case 45:m===45&&P(C)==2&&(h=0)}}return a}function De(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=F(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=ie(e,f+1,f=O(g=o[h])),b=e;v<m;++v)(b=k(g>0?p[v]+` `+y:j(y,/&\f/g,p[v])))&&(c[_++]=b);return pe(e,t,n,i===0?C:s,c,l,u,d)}function Oe(e,t,n,r){return pe(e,t,n,S,te(me()),ie(e,2,-2),0,r)}function ke(e,t,n,r,i){return pe(e,t,n,w,ie(e,0,r),ie(e,r+1,-1),r,i)}function Ae(e,t,n){switch(re(e,t)){case 5103:return x+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return x+e+e;case 4855:return x+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return b+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return x+e+b+e+y+e+e;case 5936:switch(N(e,t+11)){case 114:return x+e+y+j(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return x+e+y+j(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return x+e+y+j(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return x+e+y+e+e;case 6165:return x+e+y+`flex-`+e+e;case 5187:return x+e+j(e,/(\w+).+(:[^]+)/,x+`box-$1$2`+y+`flex-$1$2`)+e;case 5443:return x+e+y+`flex-item-`+j(e,/flex-|-self/g,``)+(A(e,/flex-|baseline/)?``:y+`grid-row-`+j(e,/flex-|-self/g,``))+e;case 4675:return x+e+y+`flex-line-pack`+j(e,/align-content|flex-|-self/g,``)+e;case 5548:return x+e+y+j(e,`shrink`,`negative`)+e;case 5292:return x+e+y+j(e,`basis`,`preferred-size`)+e;case 6060:return x+`box-`+j(e,`-grow`,``)+x+e+y+j(e,`grow`,`positive`)+e;case 4554:return x+j(e,/([^-])(transform)/g,`$1`+x+`$2`)+e;case 6187:return j(j(j(e,/(zoom-|grab)/,x+`$1`),/(image-set)/,x+`$1`),e,``)+e;case 5495:case 3959:return j(e,/(image-set\([^]*)/,x+"$1$`$1");case 4968:return j(j(e,/(.+:)(flex-)?(.*)/,x+`box-pack:$3`+y+`flex-pack:$3`),/space-between/,`justify`)+x+e+e;case 4200:if(!A(e,/flex-|baseline/))return y+`grid-column-align`+ie(e,t)+e;break;case 2592:case 3360:return y+j(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,A(e.props,/grid-\w+-end/)})?~M(e+(n=n[t].value),`span`,0)?e:y+j(e,`-start`,``)+e+y+`grid-row-span:`+(~M(n,`span`,0)?A(n,/\d+/):+A(n,/\d+/)-A(e,/\d+/))+`;`:y+j(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return A(e.props,/grid-\w+-start/)})?e:y+j(j(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return j(e,/(.+)-inline(.+)/,x+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(P(e)-1-t>6)switch(N(e,t+1)){case 109:if(N(e,t+4)!==45)break;case 102:return j(e,/(.+:)(.+)-([^]+)/,`$1`+x+`$2-$3$1`+b+(N(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~M(e,`stretch`,0)?Ae(j(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return j(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return y+n+`:`+r+s+(i?y+n+`-span:`+(a?o:+o-r)+s:``)+e});case 4949:if(N(e,t+6)===121)return j(e,`:`,`:`+x)+e;break;case 6444:switch(N(e,N(e,14)===45?18:11)){case 120:return j(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+x+(N(e,14)===45?`inline-`:``)+`box$3$1`+x+`$2$3$1`+y+`$2box$3`)+e;case 100:return j(e,`:`,`:`+y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return j(e,`scroll-`,`scroll-snap-`)+e}return e}function je(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Me(e,t,n,r){switch(e.type){case ee:if(e.children.length)break;case T:case E:case w:return e.return=e.return||e.value;case S:return``;case D:return e.return=e.value+`{`+je(e.children,r)+`}`;case C:if(!P(e.value=e.props.join(`,`)))return``}return P(n=je(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Ne(e){var t=F(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Pe(e){return function(t){t.root||(t=t.return)&&e(t)}}function Fe(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case w:e.return=Ae(e.value,e.length,n);return;case D:return je([L(e,{value:j(e.value,`@`,`@`+x)})],r);case C:if(e.length)return oe(n=e.props,function(t){switch(A(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:R(L(e,{props:[j(t,/:(read-\w+)/,`:`+b+`$1`)]})),R(L(e,{props:[t]})),ne(e,{props:se(n,r)});break;case`::placeholder`:R(L(e,{props:[j(t,/:(plac\w+)/,`:`+x+`input-$1`)]})),R(L(e,{props:[j(t,/:(plac\w+)/,`:`+b+`$1`)]})),R(L(e,{props:[j(t,/:(plac\w+)/,y+`input-$1`)]})),R(L(e,{props:[t]})),ne(e,{props:se(n,r)})}return``})}}function U(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Ie=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Le=`active`,Re=`data-styled-version`,ze=`6.6.0`,Be=`/*!sc*/
`,Ve=typeof window<`u`&&typeof document<`u`;if(!_.createContext)throw U(19);function He(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var Ue=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:He(`REACT_APP_SC_DISABLE_SPEEDY`)??He(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),We=`sc-keyframes-`,Ge=new Map,Ke=new Map,qe=1,Je=e=>{if(Ge.has(e))return Ge.get(e);for(;Ke.has(qe);)qe++;let t=qe++;return Ge.set(e,t),Ke.set(t,e),t},Ye=e=>Ke.get(e),Xe=(e,t)=>{qe=t+1,Ge.set(e,t),Ke.set(t,e)},Ze=Object.freeze([]),Qe=Object.freeze({});function $e(e,t,n=Qe){return e.theme!==n.theme&&e.theme||t||n.theme}var et=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,W=/(^-|-$)/g;function tt(e){return e.replace(et,`-`).replace(W,``)}var nt=/(a)(d)/gi,rt=e=>String.fromCharCode(e+(e>25?39:97));function it(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=rt(t%52)+n;return(rt(t%52)+n).replace(nt,`$1-$2`)}var at=5381,ot=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},st=e=>ot(at,e);function ct(e){return it(st(e)>>>0)}function lt(e){return e.displayName||e.name||`Component`}function ut(e){return typeof e==`string`&&!0}function dt(e){return ut(e)?`styled.${e}`:`Styled(${lt(e)})`}var ft=Symbol.for(`react.memo`),pt=Symbol.for(`react.forward_ref`),mt={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},ht={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_t={[pt]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[ft]:gt};function vt(e){return(`type`in(t=e)&&t.type.$$typeof)===ft?gt:`$$typeof`in e?_t[e.$$typeof]:mt;var t}var yt=Object.defineProperty,bt=Object.getOwnPropertyNames,xt=Object.getOwnPropertySymbols,St=Object.getOwnPropertyDescriptor,Ct=Object.getPrototypeOf,wt=Object.prototype;function Tt(e,t,n){if(typeof t!=`string`){let r=Ct(t);r&&r!==wt&&Tt(e,r,n);let i=bt(t).concat(xt(t)),a=vt(e),o=vt(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in ht||n&&n[s]||o&&s in o||a&&s in a)){let n=St(t,s);try{yt(e,s,n)}catch{}}}}return e}function Et(e){return typeof e==`function`}var Dt=Symbol.for(`react.forward_ref`);function Ot(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===Dt&&`styledComponentId`in e}function kt(e,t){return e&&t?e+` `+t:e||t||``}function At(e,t){return e.join(t||``)}function jt(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Mt(e,t,n=!1){if(!n&&!jt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Mt(e[n],t[n]);else if(jt(t))for(let n in t)e[n]=Mt(e[n],t[n]);return e}function Nt(e,t){Object.defineProperty(e,"toString",{value:t})}var Pt=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw U(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+Be;return t}},Ft=`style[${Ie}][${Re}="${ze}"]`,It=RegExp(`^${Ie}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Lt=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,Rt=e=>{if(!e)return document;if(Lt(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(Lt(t))return t}return document},zt=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},Bt=(e,t)=>{let n=(t.textContent??``).split(Be),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(It);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(Xe(n,t),zt(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},Vt=e=>{let t=Rt(e.options.target).querySelectorAll(Ft);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(Ie)!==Le&&(Bt(e,r),r.parentNode&&r.parentNode.removeChild(r))}},Ht=!1;function Ut(){if(!1!==Ht)return Ht;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return Ht=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return Ht=t.getAttribute(`content`)||void 0}return Ht=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var Wt=(e,t)=>{if(typeof document>`u`)throw U(20);let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${Ie}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(Ie,Le),i.setAttribute(Re,ze);let s=t||Ut();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},Gt=class{constructor(e,t){this.element=Wt(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw U(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},Kt=class{constructor(e,t){this.element=Wt(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},qt=Ve,Jt={isServer:!Ve,useCSSOMInjection:!Ue},Yt=class e{static registerId(e){return Je(e)}constructor(e=Qe,t={},n){this.options=Object.assign(Object.assign({},Jt),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ve&&qt&&(qt=!1,Vt(this)),Nt(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=Ye(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=Ie+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&Ve&&Vt(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Ve&&t.target!==this.options.target&&Rt(this.options.target)!==Rt(t.target)&&Vt(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new Gt(t,n):new Kt(t,n))(this.options),new Pt(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){Je(e),e.startsWith(We)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(Je(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(Je(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},Xt=new WeakSet,Zt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Qt(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in Zt||e.startsWith(`--`)?String(t).trim():t+`px`}var $t=47;function en(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var tn=Symbol.for(`sc-keyframes`);function nn(e){return typeof e==`object`&&!!e&&tn in e}function rn(e){return Et(e)&&!(e.prototype&&e.prototype.isReactComponent)}var an=e=>e==null||!1===e||e===``,on=Symbol.for(`react.client.reference`);function sn(e){return e.$$typeof===on}function cn(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!an(r)&&(Array.isArray(r)&&Xt.has(r)||Et(r)?t.push(en(n)+`:`,r,`;`):jt(r)?(t.push(n+` {`),cn(r,t),t.push(`}`)):t.push(en(n)+`: `+Qt(n,r)+`;`))}}function ln(e,t,n,r,i=[]){if(an(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return sn(e)?i:rn(e)&&t?ln(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)ln(e[a],t,n,r,i);return i}return Ot(e)?(i.push(`.${e.styledComponentId}`),i):nn(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):sn(e)?i:jt(e)&&e.toString===Object.prototype.toString?(cn(e,i),i):(i.push(e.toString()),i)}var un=st(ze),dn=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=ot(un,t),this.baseStyle=n,Yt.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a){if(rn(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=At(ln(r,e,t,n)))}else i+=At(ln(a,e,t,n))}}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=it(ot(ot(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=kt(r,a)}}return r}},fn=/&/g;function pn(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function mn(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==$t||e.charCodeAt(c+1)!==42){if(o)l===42&&e.charCodeAt(c+1)===$t&&(o=!1,c++);else if(l!==34&&l!==39||pn(e,c)){if(a===0){if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}}else a===0?a=l:a===l&&(a=0)}else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function hn(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&hn(a.children,t)}return e}function gn({options:e=Qe,plugins:t=Ze}=Qe){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(fn,r).replace(i,a))}),e.prefix&&o.push(Fe),o.push(Me);let s=[],c=Ne(o.concat(Pe(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return mn(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||pn(e,o)){if(s===0){if(t===$t&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==$t);)o++;o+=2}else if(t!==40){if(t!==41){if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===$t)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===$t&&o+1<r&&e.charCodeAt(o+1)===$t){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++}else c>0&&c--,o++}else c++,o++}else o++}else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:mn(i)):l===0?e:mn(e)}(t),d=Te(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=hn(d,e.namespace)),s=[],je(d,c),s},u=e,d=at;for(let e=0;e<t.length;e++)t[e].name||U(15),d=ot(d,t[e].name);return u!=null&&u.namespace&&(d=ot(d,u.namespace)),u!=null&&u.prefix&&(d=ot(d,`p`)),l.hash=d===at?``:d.toString(),l}var _n=new Yt,vn=gn(),yn=_.createContext({shouldForwardProp:void 0,styleSheet:_n,stylis:vn,stylisPlugins:void 0});yn.Consumer;function bn(){return _.useContext(yn)}var xn=_.createContext(void 0);xn.Consumer;var Sn={};function Cn(e,t){let n=typeof e==`string`?tt(e):`sc`;Sn[n]=(Sn[n]||0)+1;let r=n+`-`+ct(ze+n+Sn[n]);return t?t+`-`+r:r}function wn(e,t,n){let r=Ot(e),i=e,a=!ut(e),{attrs:o=Ze,componentId:s=Cn(t.displayName,t.parentComponentId),displayName:c=dt(e)}=t,l=t.displayName&&t.componentId?tt(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new dn(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=_.useContext(xn),u=bn(),d=e.shouldForwardProp||u.shouldForwardProp,f=$e(t,l,a)||Qe,[p,m]=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=null,a=e.length>1;for(let t=0;t<e.length;t++){let n=e[t],o=Et(n)?n(a?Object.assign({},r):r):n;for(let e in o)e===`className`?r.className=kt(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):o[e]===void 0?e in r&&(r[e]!==void 0&&(i||=[]).push(e),r[e]=void 0):r[e]=o[e]}return`className`in t&&typeof t.className==`string`&&(r.className=kt(r.className,t.className)),[r,i]}(r,t,f),h=i.generateAndInjectStyles(p,u.styleSheet,u.stylis),g=p.as||c,v=ut(g),y=function(e,t,n,r,i,a){let o={};for(let s in e)s[0]===`$`||s===`as`||s===`theme`&&e.theme===n||(s===`forwardedAs`?e.forwardedAs!==void 0&&(o.as=e.forwardedAs):e[s]===void 0?s===`className`||i||a!==null&&a.indexOf(s)!==-1||r&&!r(s,t)||(o[s]=void 0):r&&!r(s,t)||(o[s]=e[s]));return o}(p,g,f,d,v,m),b=kt(o,s);return h&&(b+=` `+h),p.className&&(b+=` `+p.className),y[v&&g.includes(`-`)?`class`:`className`]=b,n&&(y.ref=n),(0,_.createElement)(g,y)}(m,e,t)}p.displayName=c;let m=_.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?kt(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Mt(e,n,!0);return e}({},i.defaultProps,e):e}}),Nt(m,()=>`.${m.styledComponentId}`),a&&Tt(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Tn=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function En(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Dn=e=>(Xt.add(e),e);function On(e,...t){if(Et(e)||jt(e))return Dn(ln(En(Ze,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?ln(n):Dn(ln(En(n,t)))}function kn(e,t,n=Qe){if(!t)throw U(1,t);let r=(r,...i)=>e(t,n,On(r,...i));return r.attrs=r=>kn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>kn(e,t,Object.assign(Object.assign({},n),r)),r}var An=e=>kn(wn,e),G=An;Tn.forEach(e=>{G[e]=An(e)});var jn,Mn=class{constructor(e,t){this[jn]=!0,this.inject=(e,t=vn)=>{let n=this.getName(t);if(!e.hasNameForId(this.id,n)){let r=t(this.rules,n,`@keyframes`);e.insertRules(this.id,n,r)}},this.name=e,this.id=We+e,this.rules=t,Je(this.id),Nt(this,()=>{throw U(12,String(this.name))})}getName(e=vn){return e.hash?this.name+it(e.hash>>>0):this.name}};function Nn(e,...t){let n=At(On(e,...t));return new Mn(ct(n),n)}jn=tn,`${Ie}`,`${Ie}`,`${Ie}`;var Pn=15e3,Fn=new Set,In=new Map,Ln=!1,Rn=0;function zn(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function Bn(){Ln||(Ln=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>Vn(e)))}function Vn(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?In.get(n):void 0;n&&r&&(In.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),Fn.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}var K={get available(){return zn()},send(e){zn()?(Bn(),window.external.sendMessage(JSON.stringify(e))):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=Pn){if(!zn())return Promise.reject(Error(`Native bridge is not available.`));Bn();let r=`req-${++Rn}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{In.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);In.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return Bn(),Fn.add(e),()=>Fn.delete(e)}},Hn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),q=o(((e,t)=>{t.exports=Hn()}))();function Un(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}async function Wn(e){return K.available?await K.request(`i18n.get`,e?{locale:e}:void 0):{locale:`en`,strings:{},available:[`en`]}}var Gn=(0,_.createContext)(Un({})),Kn=(0,_.createContext)(`en`);function qn(){return(0,_.useContext)(Gn)}var Jn=({children:e})=>{let[t,n]=(0,_.useState)(()=>Un({})),[r,i]=(0,_.useState)(`en`);return(0,_.useEffect)(()=>{let e=!1,t=async()=>{try{let t=await Wn();if(e)return;n(()=>Un(t.strings)),i(t.locale)}catch{}};t();let r=K.on(e=>{e.type===`settings.changed`&&t()});return()=>{e=!0,r()}},[]),(0,_.useEffect)(()=>{document.documentElement.lang=r},[r]),(0,q.jsx)(Gn.Provider,{value:t,children:(0,q.jsx)(Kn.Provider,{value:r,children:e})})},Yn=e=>K.send({type:e});function Xn(){let[e,t]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{if(K.available)return K.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>Yn(`window.minimize`),toggleMaximize:()=>Yn(`window.toggleMaximize`),close:()=>Yn(`window.close`)}}function Zn(){return{onMouseDown:()=>Yn(`window.drag`),onDoubleClick:()=>Yn(`window.toggleMaximize`)}}function Qn(){let[e,t]=(0,_.useState)(!1),{maximized:n}=Xn();return(0,_.useEffect)(()=>{if(!K.available)return;let e=!1;return K.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,_.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var $n=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function er(){return(0,q.jsx)(q.Fragment,{children:$n.map(([e,t])=>(0,q.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),K.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var tr={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},nr={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function rr(e,t){return K.available?await K.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function ir(e){return K.available?(await K.request(`fs.open`,{path:e})).ok:!1}async function ar(e,t=!0,n=!1){return await K.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n})}async function or(e){return K.available?await K.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function sr(e,t){return K.available?(await K.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function cr(e,t,n,r){return K.available?(await K.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function lr(e,t=!1){return K.available?await K.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function ur(){return(await K.request(`fs.places`)).places}async function dr(){return(await K.request(`fs.drives`)).drives}async function fr(e=!1){return(await K.request(`fs.recycle`,{includeOrphans:e})).entries}async function pr(e=!1){await K.request(`fs.recycle.empty`,{includeOrphans:e})}async function mr(e){return!K.available||e.length===0?{ok:!1,done:0}:await K.request(`fs.recycle.restoreMany`,{ids:e})}async function hr(e){return!K.available||e.length===0?{ok:!1,done:0}:await K.request(`fs.recycle.deleteMany`,{ids:e})}async function gr(e){K.available&&e&&await K.request(`fs.recycle.properties`,{id:e})}async function _r(){if(!K.available)return{entries:[],cancelled:!0,failed:!1};let e=await K.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function vr(){return K.available?(await K.request(`fs.recycle.admin.purge`)).ok:!1}async function yr(e=0,t=150,n=!1){return K.available?await K.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function br(){return K.available?(await K.request(`fs.recent`)).entries:[]}async function xr(){return K.available?(await K.request(`fs.frequent`)).entries:[]}async function Sr(e){K.available&&await K.request(`fs.frequent.record`,{path:e})}async function Cr(){await K.request(`fs.recent.clear`)}async function wr(){await K.request(`fs.frequent.clear`)}async function Tr(){return await K.request(`fs.visibility`)}async function Er(){return await K.request(`fs.hidden.toggle`)}var Dr={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,accentColor:null,secondaryColor:null,language:null,themePresets:[]};async function Or(){if(!K.available)return Dr;let e=await K.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,language:e?.language??null,themePresets:e?.themePresets??[]}}async function kr(e){if(!K.available)return e;let t=await K.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets}}async function Ar(e,t){K.available&&await K.request(`app.tabs.set`,{tabs:e,active:t})}async function jr(e,t,n){return K.available?(await K.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var Mr={managed:0,private:0,workingSet:0,available:0};async function Nr(){return K.available?await K.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1}}async function Pr(){return K.available?await K.request(`app.updateStatus`)??null:null}async function Fr(){return K.available?await K.request(`app.checkUpdate`):{current:`dev`,latest:`dev`,available:!1}}async function Ir(e){return!K.available||!e?!1:(await K.request(`app.openUrl`,{url:e})).ok}async function Lr(){return K.available?await K.request(`app.memory`):Mr}async function Rr(){return K.available?await K.request(`app.memory.trim`):Mr}async function zr(){return K.available?(await K.request(`app.scheme`)).registered:!1}async function Br(e){return K.available?(await K.request(`app.scheme.set`,{enabled:e})).registered:!1}async function Vr(e,t=!1){return!K.available||e.length===0?!1:(await K.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function Hr(){return K.available?(await K.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function Ur(){return K.available?await K.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function Wr(e,t,n){return!K.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await K.request(`fs.operation.transfer`,{paths:e,target:t,move:n})}async function Gr(e){return!K.available||e.length===0?[]:(await K.request(`fs.paths.info`,{paths:e})).entries}async function Kr(e){return K.available?(await K.request(`fs.clipboard.paste`,{directory:e})).ok:!1}async function qr(e,t=!1){return!K.available||e.length===0?{ok:!1,needsPermanent:!1,error:null}:await K.request(`fs.operation.delete`,{paths:e,permanent:t})}async function Jr(e,t){return K.available?await K.request(`fs.operation.rename`,{path:e,name:t}):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function Yr(e){return K.available?await K.request(`fs.operation.newFolder`,{directory:e}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function Xr(e){return K.available?await K.request(`fs.operation.newFile`,{directory:e}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function Zr(e){K.available&&e.length!==0&&await K.request(`fs.operation.properties`,{paths:e})}async function Qr(e){K.available&&await K.request(`fs.operation.openWith`,{path:e})}async function $r(e){K.available&&await K.request(`fs.operation.terminal`,{path:e})}async function ei(e){return K.available?await K.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function ti(e,t){return K.available?(await K.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function ni(){return K.available?await K.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function ri(){return K.available?await K.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function ii(e){K.available&&await K.request(`fs.operation.showInExplorer`,{path:e})}async function ai(e){return!K.available||e.length===0?{verbs:[],safe:!0}:await K.request(`shell.verbs`,{paths:e})}async function oi(e,t,n,r){K.available&&e.length!==0&&await K.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function si(e){return!K.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await K.request(`fs.operation.compress`,{paths:e})}async function ci(){return K.available?(await K.request(`app.tasks`)).tasks:[]}async function li(){K.available&&await K.request(`app.tasks.clear`)}var ui={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,refresh:`f5`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},di=ui.openInNewTab;function fi(e){di=e.trim()||ui.openInNewTab}function pi(e){let t=di.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function mi(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function hi(e){return e.split(`+`).filter(Boolean).map(e=>gi[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var gi={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function _i(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var vi=new Map,yi=new Map,bi=new Set,xi=0;function Si(){vi.clear(),yi.clear(),xi+=1,bi.forEach(e=>e())}function Ci(){let[e,t]=(0,_.useState)(xi);return(0,_.useEffect)(()=>{let e=()=>t(xi);return bi.add(e),()=>{bi.delete(e)}},[]),e}var wi=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function Ti(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return wi.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function Ei(e,t,n=!1){let r=Ci(),i=e===null?``:Ti(e,t,n),[a,o]=(0,_.useState)(()=>vi.get(i)??null);return(0,_.useEffect)(()=>{if(e===null){o(null);return}if(!K.available)return;if(vi.has(i)){o(vi.get(i)??null);return}let r=!0;return K.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{vi.set(i,e.dataUrl),r&&o(e.dataUrl)},()=>{vi.set(i,null),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function Di(e){let t=Ci(),[n,r]=(0,_.useState)(()=>e?yi.get(e)??null:null);return(0,_.useEffect)(()=>{if(!e||!K.available){r(null);return}if(yi.has(e)){r(yi.get(e)??null);return}let t=!0;return K.request(`fs.iconFile`,{path:e}).then(n=>{yi.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{yi.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var Oi=null,ki=null;function Ai(){return Oi===null?K.available?(ki??=K.request(`app.thumbnails`).then(e=>(Oi=e.base??``,Oi),()=>(Oi=``,``)),ki):Promise.resolve(``):Promise.resolve(Oi)}function ji(e,t=128,n=0){let[r,i]=(0,_.useState)(Oi);return(0,_.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return Ai().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}`}function Mi(e,t=0,n=``){let[r,i]=(0,_.useState)(Oi);if((0,_.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return Ai().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function Ni(e,t=0){let[n,r]=(0,_.useState)(Oi);return(0,_.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return Ai().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var Pi={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},Fi={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function Ii(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=zi(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=Hi(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var Li=`\0`,Ri=``;function zi(e){return e.query!==Li&&(Li=e.query,Ri=e.query.toLowerCase()),Ri}var Bi=`\0`,Vi=null;function Hi(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===Bi)return Vi;Bi=t;try{Vi=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{Vi=null}return Vi}function Ui(e,t){return Ii(e,t)!==null}var Wi=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],Gi={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Ki(e){let t=Ji(e);for(let{kind:e}of Wi)if(Gi[e].has(t))return e;return null}function qi(e){return Ki(e)!==null}function Ji(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}function Yi(e,t,n,r,i={}){return e(t===1?n:r,{count:t,...i})}function J(e){if(e<0)return`—`;if(e===0)return`0 B`;let t=[`B`,`KB`,`MB`,`GB`,`TB`],n=Math.min(Math.floor(Math.log(e)/Math.log(1024)),t.length-1);return`${(e/1024**n).toFixed(n===0?0:1)} ${t[n]}`}function Y(){let e=document.documentElement.lang.trim();return e.length>0?e:void 0}function Xi(e){return e<=0?`—`:new Date(e).toLocaleString(Y(),{year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`})}function Zi(e){return e>=.9?`#ef4444`:e>=.75?`#f59e0b`:`var(--accent-gradient)`}function Qi(e){return e.replace(/[\\/]+$/,``).split(/[\\/]/).at(-1)||e}function $i(e){let t=e.replace(/[\\/]+$/,``),n=Math.max(t.lastIndexOf(`\\`),t.lastIndexOf(`/`));return n>0?t.slice(0,n):t}function ea(e){let t=e.includes(`/`)||e.includes(`\\\\`)?e.replace(/[\\/]+/g,`\\`):e;return t.endsWith(`\\`)&&(t=t.slice(0,-1)),t.toLowerCase()}function ta(e){let t=e.name.replace(/[\\/]+$/,``);return/^[a-z]:$/i.test(t)?` (${t.toUpperCase()})`:``}function na(e){let t=ta(e);return t?`${e.label||`Local Disk`}${t}`:e.label||e.name}var ra=(0,_.createContext)({places:{},useIcons:!1}),ia=ra.Provider;function aa(){return(0,_.useContext)(ra)}function oa(e,t){return e.places[ea(t)]}function sa(e,t,n){return oa(e,t)?.name||n}function ca(e,t){try{let n=Number(localStorage.getItem(e));return Number.isFinite(n)?n:t}catch{return t}}function la(e,t){try{localStorage.setItem(e,String(t))}catch{}}function ua(e){try{return JSON.parse(localStorage.getItem(e)??`null`)}catch{return null}}function da(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}var fa=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,q.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,q.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),pa=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),ma=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M14 3v4h4`})]}),ha=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,q.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,q.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),ga=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,q.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),_a=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 19V5`}),(0,q.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),va=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,q.jsx)(`path`,{d:`M20 4v7h-7`})]}),ya=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 5v14`}),(0,q.jsx)(`path`,{d:`M5 12h14`})]}),ba=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M19 12H5`}),(0,q.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),xa=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M5 12h14`}),(0,q.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),Sa=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,q.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),Ca=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,q.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),wa=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,q.jsx)(`path`,{d:`M12 12v8`})]}),Ta=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,q.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),Ea=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,q.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,q.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,q.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),Da=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,q.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),Oa=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 7h16`}),(0,q.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,q.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,q.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),ka=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),Aa=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),ja=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,q.jsxs)(`defs`,{children:[(0,q.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,q.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,q.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,q.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,q.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,q.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,q.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,q.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,q.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,q.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),Ma=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M15 3v4h4`}),(0,q.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),Na=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,q.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,q.jsx)(`path`,{d:`m13 5-2 14`})]}),Pa=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,q.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,q.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Fa=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,q.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Ia=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,q.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,q.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),La=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),Ra=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M15 3v4h4`}),(0,q.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),za=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),Ba=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,q.jsx)(`path`,{d:`M8.5 14h7`})]}),Va=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,q.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,q.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),Ha=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),Ua=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),Wa=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),Ga=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M15 3v4h4`}),(0,q.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),Ka=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),qa=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,q.jsx)(`path`,{d:`m14 6 4 4`})]}),Ja=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,q.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Ya=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,q.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Xa=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 4v10`}),(0,q.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,q.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Za=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,q.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,q.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Qa=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,q.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,q.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),$a=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,q.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),eo=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),to=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,q.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),no=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,q.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,q.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),ro=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),io=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,q.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,q.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,q.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),ao=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,q.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),oo=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,q.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),so=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,q.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,q.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),co=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,q.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),lo=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,q.jsx)(`path`,{d:`M3.5 12h17`}),(0,q.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),uo=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),fo=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,q.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),po=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,q.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,q.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),mo=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,q.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),ho=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 16V4`}),(0,q.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,q.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),go=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),_o=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,q.jsx)(`path`,{d:`M12 4v16`})]}),vo=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,q.jsx)(`path`,{d:`M15 4v16`})]});function X(e,t){return({size:n=t,...r})=>(0,q.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var yo=X(fa,18),bo=X(pa,18),xo=X(ma,18),So=X(ha,18),Co=X(ga,16),wo=X(_a,16),To=X(va,16),Eo=X(ya,16),Do=X(ba,16),Oo=X(xa,16),ko=X(Sa,12),Ao=X(Ca,18),jo=X(wa,14),Mo=X(Ta,14),Z=X(Ea,14),No=X(Da,18),Po=X(Oa,18),Fo=X(ka,14),Io=X(Aa,14),Lo=X(ja,18),Ro=X(Ma,18),zo=X(Na,18),Bo=X(Pa,18),Vo=X(Fa,18),Ho=X(Ia,18),Uo=X(La,18),Wo=X(Ra,18),Go=X(za,18),Ko=X(Ba,18),qo=X(Va,18),Jo=X(Ha,18),Yo=X(Ua,18),Xo=X(Wa,18),Zo=X(Ga,18),Qo=X(Ka,18),$o=X(qa,16),es=X(Ja,18),ts=X(Ya,18),ns=X(Xa,18),rs=X(Za,18),is=X(Qa,18),as=X($a,18),os=X(eo,18),ss=X(to,18),cs=X(no,18),ls=X(ro,18),us=X(io,18),ds=X(ao,18),fs=X(oo,18),ps=X(so,18),ms=X(co,18),hs=X(lo,18),gs=X(uo,18),_s=X(fo,16),vs=X(po,16),ys=X(mo,16),bs=X(ho,16),xs=X(go,16),Ss=X(_o,16),Cs=X(vo,16),ws=m(),Ts=On`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,Es=Nn`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Ds=Nn`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Os=Nn`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,ks=Nn`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,As=Nn`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,js=Nn`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,Ms=On`animation: ${Es} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Ns=On`animation: ${Ds} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,Ps=On`animation: ${Os} 180ms cubic-bezier(0.22, 1, 0.36, 1);`,Fs=On`animation: ${ks} 190ms cubic-bezier(0.22, 1, 0.36, 1);`,Is=On`animation: ${As} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Ls=On`animation: ${js} 140ms ease-out;`;function Rs({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,_.useState)([]),s=(0,_.useRef)(void 0);if((0,_.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,_.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,q.jsx)(Js,{},`group-rule-${i}`)),n.push((0,q.jsx)(qs,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,q.jsx)(Js,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,q.jsxs)(Ws,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,q.jsx)(Gs,{children:e.loading?(0,q.jsx)(Ys,{}):e.icon}),(0,q.jsx)(Ks,{children:e.label}),a?(0,q.jsx)(ko,{size:12}):e.checked&&(0,q.jsx)(Fo,{size:12})]},`${e.label}-${i}`))}),n};return(0,ws.createPortal)((0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(zs,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Bs,{children:r.map((e,t)=>(0,q.jsxs)(Vs,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,q.jsx)(Hs,{children:e.icon}),(0,q.jsx)(Us,{children:e.label})]},`${e.label}-${t}`))}),(0,q.jsx)(Js,{})]}),m(n,0)]}),a.map((e,t)=>(0,q.jsx)(zs,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var zs=G.div`
    position: fixed;
    z-index: 2000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${Ts}
    ${Ns}
    transform-origin: top left;
`,Bs=G.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,Vs=G.button`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3px;
    min-width: 48px;
    padding: 5px 4px;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: ${({$danger:e})=>e?`#fca5a5`:`var(--text-secondary)`};
    cursor: pointer;
    transition: background 120ms ease, color 120ms ease;

    &:hover:not(:disabled) {
        background: var(--bg-card-hover);
        color: ${({$danger:e})=>e?`#fecaca`:`var(--text-primary)`};
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }
`,Hs=G.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,Us=G.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ws=G.button`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 7px 10px 7px ${({$depth:e=0})=>10+e*14}px;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: ${({$danger:e})=>e?`#fca5a5`:`var(--text-secondary)`};
    font: inherit;
    font-size: 13px;
    text-align: left;
    cursor: pointer;
    transition: background 120ms ease, color 120ms ease;

    &:hover:not(:disabled) {
        background: var(--bg-card-hover);
        color: ${({$danger:e})=>e?`#fecaca`:`var(--text-primary)`};
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`,Gs=G.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Ks=G.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,qs=G.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Js=G.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,Ys=G.span`
    width: 10px;
    height: 10px;
    border: 1px solid var(--border-color-hover);
    border-top-color: var(--accent-primary);
    border-radius: 50%;
    animation: yafm-menu-spin 700ms linear infinite;

    @keyframes yafm-menu-spin {
        to {
            transform: rotate(360deg);
        }
    }
`;function Xs({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=qn(),c=(0,_.useRef)(null);return(0,_.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,ws.createPortal)((0,q.jsx)(Zs,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,q.jsxs)(Qs,{role:`alertdialog`,"aria-modal":`true`,children:[(0,q.jsx)($s,{children:t}),(0,q.jsx)(ec,{children:n}),(0,q.jsxs)(tc,{children:[(0,q.jsx)(nc,{onClick:o,type:`button`,children:s(`Cancel`)}),(0,q.jsx)(nc,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var Zs=G.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Ls}
`,Qs=G.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ms}
`,$s=G.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,ec=G.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,tc=G.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,nc=G.button`
    min-width: 84px;
    padding: 7px 12px;
    border: 1px solid ${({$danger:e})=>e?`rgba(248, 113, 113, 0.5)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$danger:e})=>e?`rgba(248, 113, 113, 0.16)`:`var(--bg-input)`};
    color: ${({$danger:e})=>e?`#fca5a5`:`var(--text-secondary)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        border-color: ${({$danger:e})=>e?`rgba(248, 113, 113, 0.8)`:`var(--border-color-hover)`};
        color: ${({$danger:e})=>e?`#fecaca`:`var(--text-primary)`};
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,rc=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),ic=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),ac=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),oc=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function sc({info:e,width:t,onWidth:n,videoAudio:r,videoAutoplay:i,selectionNote:a,emptyNote:o}){let s=qn(),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(0),[g,v]=(0,_.useState)(0),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)(!1),[C,w]=(0,_.useState)(!1),T=(0,_.useRef)(null),E=(0,_.useRef)(null),D=e?.path??null,ee=e?cc(e.name):``,O=!!e&&!e.isDirectory&&rc.has(ee),te=!!e&&!e.isDirectory&&ic.has(ee),ne=!!e&&!e.isDirectory&&ac.has(ee),re=!!e&&!e.isDirectory&&oc.has(ee),k=!!e&&!e.isDirectory&&ee===`pdf`,A=ji(O?D:null,512,e?.modified??0),j=Mi(ne?D:null,e?.modified??0,ee),M=Mi(O||te?D:null,e?.modified??0,ee),N=Ni(k?D:null,e?.modified??0),ie=Ei(!O&&!te&&!ne&&!re&&!k?D:null,e?.isDirectory??!1);if((0,_.useEffect)(()=>{l(!1),d(!1),p(!1),h(0),v(0),w(!1)},[D]),(0,_.useEffect)(()=>{if(!D||!re){b(null),S(!1);return}let e=!0;return S(!0),b(null),or(D).then(t=>{e&&(b(t),S(!1))},()=>{e&&(b({text:null,truncated:!1,error:`Could not read this file.`}),S(!1))}),()=>{e=!1}},[D,re]),!e&&!o)return null;let P=e=>{E.current={x:e.clientX,width:t},e.currentTarget.setPointerCapture(e.pointerId)},F=e=>{let t=E.current;t&&n(Math.max(220,Math.min(560,t.width+t.x-e.clientX)))},ae=e=>{E.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,q.jsxs)(uc,{children:[(0,q.jsx)(dc,{onPointerDown:P,onPointerMove:F,onPointerUp:ae,onDoubleClick:()=>n(320),title:s(`Drag to resize; double-click to reset`)}),(0,q.jsx)(fc,{style:{width:t},children:(0,q.jsxs)(pc,{children:[(0,q.jsx)(bo,{size:56}),(0,q.jsx)(`span`,{children:o})]})})]});let oe=()=>{let e=T.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,q.jsxs)(uc,{children:[(0,q.jsx)(dc,{onPointerDown:P,onPointerMove:F,onPointerUp:ae,onDoubleClick:()=>n(320),title:s(`Drag to resize; double-click to reset`)}),(0,q.jsxs)(fc,{style:{width:t},children:[(0,q.jsx)(mc,{children:O&&M&&!c?(0,q.jsxs)(hc,{onPointerEnter:()=>p(!0),onPointerLeave:()=>p(!1),children:[(0,q.jsx)(`video`,{autoPlay:i,controls:!1,muted:!r,onClick:oe,onDurationChange:e=>h(e.currentTarget.duration||0),onError:()=>l(!0),onLoadedMetadata:e=>{h(e.currentTarget.duration||0),v(e.currentTarget.currentTime)},onPause:()=>d(!1),onPlay:()=>d(!0),onTimeUpdate:e=>v(e.currentTarget.currentTime),playsInline:!0,poster:A??void 0,preload:`metadata`,ref:T,src:M}),!u&&(0,q.jsx)(gc,{onClick:oe,title:s(`Play`),type:`button`,children:(0,q.jsx)(xs,{size:28})}),f&&(0,q.jsxs)(_c,{onClick:e=>e.stopPropagation(),children:[(0,q.jsxs)(vc,{children:[(0,q.jsx)(`span`,{children:lc(g)}),(0,q.jsx)(`span`,{children:lc(m)})]}),(0,q.jsx)(yc,{"aria-label":s(`Seek`),max:m||0,min:0,onChange:e=>{let t=T.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,v(n)},step:.1,type:`range`,value:Math.min(g,m||0)})]})]}):te&&M?(0,q.jsx)(`audio`,{controls:!0,src:M}):ne&&j?(0,q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:j}):k&&N&&!C?(0,q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>w(!0),src:N}):k?(0,q.jsx)(xo,{size:64}):re?(0,q.jsx)(bc,{children:x||!y?(0,q.jsx)(Sc,{children:s(`Loading…`)}):y.error?(0,q.jsx)(Sc,{children:y.error}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(xc,{children:y.text}),y.truncated&&(0,q.jsx)(Sc,{children:s(`Showing the first 256 KB.`)})]})}):O&&A?(0,q.jsx)(`img`,{alt:``,src:A}):ie?(0,q.jsx)(`img`,{alt:``,src:ie}):e.isDirectory?(0,q.jsx)(bo,{size:64}):(0,q.jsx)(xo,{size:64})}),(0,q.jsxs)(Cc,{children:[(0,q.jsx)(wc,{title:e.path,children:e.name}),a&&(0,q.jsx)(Tc,{children:a}),(0,q.jsx)(Ec,{children:e.fields.map(e=>(0,q.jsxs)(Dc,{children:[(0,q.jsx)(Oc,{children:e.label}),(0,q.jsx)(kc,{title:e.value,children:e.value})]},e.label))})]})]})]})}function cc(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function lc(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var uc=G.div`
    display: flex;
    flex-shrink: 0;
    align-self: stretch;
    min-height: 0;
`,dc=G.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,fc=G.aside`
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    background: var(--bg-secondary);
    ${Fs}
`,pc=G.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 24px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;

    svg {
        color: var(--text-muted);
        opacity: 0.45;
    }
`,mc=G.div`
    position: relative;
    display: grid;
    place-items: center;
    height: 210px;
    flex-shrink: 0;
    overflow: hidden;
    background: var(--bg-media);

    img,
    video {
        display: block;
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }

    audio {
        width: calc(100% - 20px);
    }

    svg {
        color: var(--text-muted);
    }
`,hc=G.div`
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    overflow: hidden;

    video {
        width: 100%;
        height: 100%;
        cursor: pointer;
    }
`,gc=G.button`
    position: absolute;
    display: grid;
    place-items: center;
    width: 52px;
    height: 52px;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 50%;
    background: rgba(var(--bg-rgb), 0.62);
    color: #fff;
    cursor: pointer;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);

    svg {
        margin-left: 3px;
        fill: currentColor;
        stroke: currentColor;
    }

    &:hover {
        border-color: var(--border-color-focus);
        background: rgba(var(--bg-rgb), 0.86);
    }
`,_c=G.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 24px 10px 8px;
    background: linear-gradient(to top, rgba(var(--bg-rgb), 0.92), rgba(var(--bg-rgb), 0));
`,vc=G.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,yc=G.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,bc=G.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: var(--bg-secondary);
`,xc=G.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,Sc=G.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,Cc=G.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,wc=G.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,Tc=G.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,Ec=G.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,Dc=G.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,Oc=G.span`
    color: var(--text-muted);
`,kc=G.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,Ac=[`quick`,`frequent`,`recent`,`home`,`drives`],jc=Ac,Mc={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`},Nc={folder:e=>(0,q.jsx)(bo,{size:e}),home:e=>(0,q.jsx)(yo,{size:e}),desktop:e=>(0,q.jsx)(es,{size:e}),documents:e=>(0,q.jsx)(ts,{size:e}),downloads:e=>(0,q.jsx)(ns,{size:e}),pictures:e=>(0,q.jsx)(rs,{size:e}),music:e=>(0,q.jsx)(is,{size:e}),videos:e=>(0,q.jsx)(as,{size:e}),drive:e=>(0,q.jsx)(So,{size:e}),image:e=>(0,q.jsx)(Bo,{size:e}),video:e=>(0,q.jsx)(Vo,{size:e}),audio:e=>(0,q.jsx)(Ho,{size:e}),text:e=>(0,q.jsx)(Ro,{size:e}),code:e=>(0,q.jsx)(zo,{size:e}),clock:e=>(0,q.jsx)(No,{size:e}),star:e=>(0,q.jsx)(os,{size:e}),file:e=>(0,q.jsx)(xo,{size:e}),archive:e=>(0,q.jsx)(Uo,{size:e}),pdf:e=>(0,q.jsx)(Wo,{size:e}),executable:e=>(0,q.jsx)(Go,{size:e}),font:e=>(0,q.jsx)(Ko,{size:e}),database:e=>(0,q.jsx)(qo,{size:e}),config:e=>(0,q.jsx)(Jo,{size:e}),spreadsheet:e=>(0,q.jsx)(Yo,{size:e}),presentation:e=>(0,q.jsx)(Xo,{size:e}),document:e=>(0,q.jsx)(Zo,{size:e}),app:e=>(0,q.jsx)(Lo,{size:e}),gear:e=>(0,q.jsx)(Ao,{size:e}),pin:e=>(0,q.jsx)(jo,{size:e}),trash:e=>(0,q.jsx)(Po,{size:e}),overview:e=>(0,q.jsx)(Qo,{size:e}),book:e=>(0,q.jsx)(ss,{size:e}),briefcase:e=>(0,q.jsx)(cs,{size:e}),cloud:e=>(0,q.jsx)(ls,{size:e}),gamepad:e=>(0,q.jsx)(us,{size:e}),camera:e=>(0,q.jsx)(ds,{size:e}),terminal:e=>(0,q.jsx)(fs,{size:e}),server:e=>(0,q.jsx)(ps,{size:e}),package:e=>(0,q.jsx)(ms,{size:e}),globe:e=>(0,q.jsx)(hs,{size:e}),heart:e=>(0,q.jsx)(gs,{size:e})};function Pc(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function Fc(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??Ac)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||jc.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=Pc(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${Mc[n]??n}${Ic(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Ic(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Lc({panel:e,size:t=16}){let n=Di(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,q.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?Nc[e.icon]:void 0;if(r)return(0,q.jsx)(q.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,q.jsx)(bo,{size:t});case`recent`:return(0,q.jsx)(No,{size:t});case`frequent`:return(0,q.jsx)(os,{size:t});case`drives`:return(0,q.jsx)(So,{size:t});case`home`:return(0,q.jsx)(yo,{size:t});default:return(0,q.jsx)(bo,{size:t})}}function Rc({place:e,size:t=18}){let n=Di(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,q.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&Nc[e.icon]?(0,q.jsx)(q.Fragment,{children:Nc[e.icon](t)}):(0,q.jsx)(bo,{size:t})}var zc=`#64748b`;function Bc(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Vc({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=qn(),[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)(`#2dd4bf`),f=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},v=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},y=Math.max(8,Math.min(e,window.innerWidth-272)),b=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,ws.createPortal)((0,q.jsxs)(Hc,{"data-tag-menu":`true`,ref:f,style:{left:y,top:b},children:[(0,q.jsxs)(Uc,{children:[(0,q.jsx)(`span`,{children:s(`Tags`)}),(0,q.jsx)(Wc,{onClick:o,title:s(`Close`),type:`button`,children:(0,q.jsx)(Io,{size:11})})]}),(0,q.jsxs)(Gc,{children:[p.length===0&&(0,q.jsx)(Yc,{children:s(`No tags yet.`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,q.jsxs)(Kc,{children:[(0,q.jsx)(qc,{"aria-label":s(`Color of {tag}`,{tag:e}),onChange:t=>g(e,t.target.value),title:s(`Change this tag's color`),type:`color`,value:t}),(0,q.jsxs)(Jc,{$color:t,$ink:Bc(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,q.jsx)(Fo,{size:11}),(0,q.jsx)(`span`,{children:e})]})]},e)})]}),(0,q.jsxs)(Xc,{children:[(0,q.jsx)(qc,{"aria-label":s(`Color of the new tag`),onChange:e=>d(e.target.value),title:s(`Color of the new tag`),type:`color`,value:u}),(0,q.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),v())},placeholder:s(`New tag`),spellCheck:!1,value:c}),(0,q.jsx)(Zc,{onClick:v,type:`button`,children:s(`Add`)})]})]}),document.body)}var Hc=G.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    ${Ms}
`,Uc=G.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,Wc=G.button`
    display: grid;
    place-items: center;
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,Gc=G.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,Kc=G.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,qc=G.input`
    width: 18px;
    height: 18px;
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
`,Jc=G.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    max-width: 100%;
    padding: 3px 9px;
    border: 1px solid ${({$on:e,$color:t})=>e?t:`var(--border-color)`};
    border-radius: 999px;
    background: ${({$on:e,$color:t})=>e?t:`transparent`};
    color: ${({$on:e,$ink:t})=>e?t:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    cursor: pointer;

    span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &:hover {
        border-color: ${({$color:e})=>e};
    }
`,Yc=G.span`
    font-size: 11px;
    color: var(--text-muted);
`,Xc=G.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 9px;

    input:not([type="color"]) {
        flex: 1;
        min-width: 0;
        padding: 4px 6px;
        border: 1px solid var(--border-color);
        border-radius: var(--radius-sm);
        background: var(--bg-input);
        color: var(--text-primary);
        font-size: 11px;
        outline: 0;

        &:focus {
            border-color: var(--border-color-focus);
        }
    }
`,Zc=G.button`
    padding: 4px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font-size: 11px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`,Qc={file:xo,folder:bo,text:Ro,code:zo,image:Bo,video:Vo,audio:Ho,archive:Uo,pdf:Wo,executable:Go,font:Ko,database:qo,config:Jo,spreadsheet:Yo,presentation:Xo,document:Zo},$c={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function el(e){let t=e.lastIndexOf(`.`);return t>0?$c[e.slice(t).toLowerCase()]??`file`:`file`}function tl({name:e,size:t}){let n=Qc[e??`file`]??xo;return(0,q.jsx)(n,{size:t})}function nl({path:e,name:t,isDirectory:n,size:r=18}){let i=Ei(e,n);return i?(0,q.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,q.jsx)(bo,{size:r}):(0,q.jsx)(tl,{name:el(t),size:r})}var rl=`application/x-yafm-paths`,il=[rl,`text/uri-list`];function al(e){return e?.types.some(e=>il.includes(e.toLowerCase()))??!1}function ol(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(rl);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(cl).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var sl=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function cl(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return sl?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function ll(e,t,n=!0){e.dataTransfer.setData(rl,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function ul({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let p=qn(),[m,h]=(0,_.useState)(()=>new Set),[g,v]=(0,_.useState)(!1),y=(0,_.useRef)(null),b=(0,_.useMemo)(()=>e.filter(e=>m.has(e.path)),[e,m]),x=(0,_.useMemo)(()=>t.filter(e=>m.has(e.path)),[t,m]),S=(0,_.useRef)(null);if((0,_.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=S.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&al(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=ol(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let C=new Set([...e,...t].map(e=>e.path)),w=C.size>0&&[...C].every(e=>m.has(e)),T=C.size,E=e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},D=()=>{h(w?new Set:C)},ee=e=>{y.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),v(!0)},O=e=>{let t=y.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},te=e=>{y.current&&(y.current=null,v(!1),e.currentTarget.releasePointerCapture(e.pointerId))},ne=()=>{let e=b.map(e=>e.path);e.length!==0&&(c(e),h(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},re=()=>{let e=b.map(e=>e.path);e.length!==0&&d(e)},k=()=>{let e=new Map;for(let t of b)e.set(t.path,!0);for(let t of x)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),h(new Set)},A=(e,t)=>{let n=m.has(e.path);return(0,q.jsxs)(Sl,{$checked:n,draggable:!0,onClick:()=>E(e.path),onDragStart:r=>{ll(r,n&&m.size>0?[...new Set([...b,...x].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,q.jsx)(Cl,{$checked:n,onClick:t=>{t.stopPropagation(),E(e.path)},type:`button`,children:n&&(0,q.jsx)(Fo,{size:8})}),(0,q.jsx)(nl,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,q.jsxs)(wl,{children:[(0,q.jsx)(Tl,{children:e.name}),(0,q.jsx)(El,{children:$i(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},j=e=>{al(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,q.jsxs)(dl,{$dragging:g,"data-tray":`true`,ref:S,style:{left:i.x,top:i.y},onDragEnter:j,onDragOver:j,onDrop:e=>{let{paths:t}=ol(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,q.jsxs)(fl,{onPointerDown:ee,onPointerMove:O,onPointerUp:te,children:[(0,q.jsxs)(pl,{children:[(0,q.jsx)(ms,{size:13}),p(`Tray`),(0,q.jsx)(ml,{children:T})]}),(0,q.jsxs)(hl,{onPointerDown:e=>e.stopPropagation(),children:[(0,q.jsx)(gl,{onClick:D,title:p(w?`Select none`:`Select all`),type:`button`,children:p(w?`None`:`All`)}),(0,q.jsx)(gl,{onClick:l,title:p(`Remove everything from the tray`),type:`button`,children:p(`Clear`)}),(0,q.jsx)(_l,{onClick:u,title:p(`Hide the tray`),type:`button`,children:(0,q.jsx)(Io,{size:10})})]})]}),(0,q.jsxs)(vl,{children:[(0,q.jsxs)(bl,{children:[p(`In this app`),(0,q.jsx)(ml,{children:e.length})]}),e.length===0&&(0,q.jsx)(yl,{children:p(`Drag files or folders here`)}),e.map(e=>A(e,!0)),t.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(bl,{$clipboard:!0,children:[p(`Clipboard`),(0,q.jsx)(ml,{children:t.length}),n&&(0,q.jsx)(xl,{children:p(`cut`)})]}),t.map(e=>A(e,n))]})]}),(0,q.jsxs)(Dl,{children:[(0,q.jsx)(Ol,{$plain:!0,disabled:b.length===0,onClick:re,title:p(`Write the selected tray entries to the system clipboard`),type:`button`,children:p(`To clipboard`)}),(0,q.jsx)(Ol,{disabled:m.size===0||!a,onClick:k,type:`button`,children:p(`Move here`)}),(0,q.jsx)(Ol,{$danger:!0,disabled:b.length===0,onClick:ne,type:`button`,children:p(`Remove`)})]})]})}var dl=G.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${Ts}
    ${Ms}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,fl=G.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 9px 10px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
    cursor: grab;

    &:active {
        cursor: grabbing;
    }
`,pl=G.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,ml=G.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,hl=G.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,gl=G.button`
    padding: 3px 7px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 9px;
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;

    &:hover {
        border-color: var(--border-color);
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`,_l=G.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;

    &:hover {
        border-color: var(--border-color);
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`,vl=G.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,yl=G.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,bl=G.div`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: ${({$clipboard:e})=>e?`8px 6px 3px`:`3px 6px`};
    margin-top: ${({$clipboard:e})=>e?`4px`:`0`};
    border-top: ${({$clipboard:e})=>e?`1px solid var(--border-color)`:`0`};
    color: var(--text-muted);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,xl=G.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,Sl=G.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 5px 6px;
    border: 1px solid ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.4)`:`transparent`};
    border-radius: var(--radius-sm);
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.1)`:`transparent`};
    cursor: grab;
    transition: background 120ms ease, border-color 120ms ease, transform 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.07);
        transform: translateX(1px);
    }

    &:active {
        cursor: grabbing;
    }
`,Cl=G.button`
    display: grid;
    place-items: center;
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
    cursor: pointer;
`,wl=G.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,Tl=G.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,El=G.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Dl=G.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,Ol=G.button`
    flex: 1 1 30%;
    min-width: 78px;
    padding: 5px 6px;
    border: 1px solid ${({$danger:e,$plain:t})=>e?`rgba(248, 113, 113, 0.35)`:t?`var(--border-color)`:`transparent`};
    border-radius: var(--radius-sm);
    background: ${({$danger:e,$plain:t})=>e||t?`transparent`:`var(--accent-gradient)`};
    color: ${({$danger:e,$plain:t})=>e?`#fca5a5`:t?`var(--text-secondary)`:`#fff`};
    font: inherit;
    font-size: 10px;
    cursor: pointer;
    transition: border-color 130ms ease, background 130ms ease, color 130ms ease, filter 130ms ease;

    &:hover:not(:disabled) {
        border-color: ${({$danger:e,$plain:t})=>e?`rgba(248, 113, 113, 0.6)`:t?`var(--border-color-hover)`:`transparent`};
        background: ${({$danger:e,$plain:t})=>e?`rgba(248, 113, 113, 0.14)`:t?`rgba(var(--accent-rgb), 0.10)`:`var(--accent-gradient)`};
        color: ${({$danger:e,$plain:t})=>e?`#fecaca`:t?`var(--text-primary)`:`#fff`};
        filter: ${({$danger:e,$plain:t})=>e||t?`none`:`brightness(1.08)`};
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`,kl=60,Al=300,jl=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],Ml=190,Nl=120;function Pl({listing:e,loading:t,error:n,find:r=Fi,view:i,showImages:a,imageStripHeight:o=Ml,onImageStripHeight:s,onSort:c,onSetTags:l,onOpen:u,onOpenFile:d,showCheckboxes:f=!0,openOnSingleClick:p=!1,shortcuts:m=ui,enableShortcuts:h=!0,refreshToken:g=0,onRefresh:v,onClipboardChanged:y,onTransfer:b,onAddToTray:x,onPaste:S,confirmDelete:C=!1,previewVideoAudio:w=!1,previewVideoAutoplay:T=!1,showDetails:E=!0,onPreviewInfo:D,onActivate:ee,groupOf:O,onGridScroll:te,gridFooter:ne,allowBackgroundMenu:re=!0,readOnly:k=!1,onSelectionChange:A,singleSelect:j=!1}){let M=qn(),N=aa(),ie=(0,_.useRef)(null),P=(0,_.useRef)(null),F=(0,_.useRef)(null),[ae,oe]=(0,_.useState)(Al),[se,ce]=(0,_.useState)({top:0,height:640}),I=(0,_.useRef)(null),le=(0,_.useRef)(null),[ue,de]=(0,_.useState)(null),[fe,pe]=(0,_.useState)(o),[L,R]=(0,_.useState)(()=>new Set),me=(0,_.useRef)(L),he=(0,_.useRef)([]);me.current=L,(0,_.useEffect)(()=>A?.([...L]),[L,A]);let[z,B]=(0,_.useState)(null),[ge,V]=(0,_.useState)(null),[H,_e]=(0,_.useState)(null),ve=(0,_.useRef)(H);ve.current=H;let ye=(0,_.useRef)(ee);ye.current=ee;let[be,xe]=(0,_.useState)(()=>{let e=ca(`yafm.preview.width`,320);return e>=220?e:320}),Se=(0,_.useCallback)(e=>{xe(e),la(`yafm.preview.width`,e)},[]),[Ce,we]=(0,_.useState)(!1),Te=(0,_.useRef)(0),Ee=(0,_.useRef)(0),[De,Oe]=(0,_.useState)({verbs:[],safe:!0,loading:!1}),[ke,Ae]=(0,_.useState)({recommended:[],other:[],loading:!1});(0,_.useEffect)(()=>{R(new Set),_e(null),B(null),Oe({verbs:[],safe:!0,loading:!1}),Ae({recommended:[],other:[],loading:!1}),Te.current+=1,Ee.current+=1,le.current=null},[e?.path]),(0,_.useEffect)(()=>{pe(o)},[o]),(0,_.useEffect)(()=>{R(new Set),_e(null),le.current=null},[g]);let je=e=>{I.current={y:e.clientY,height:fe},e.currentTarget.setPointerCapture(e.pointerId)},Me=e=>{let t=I.current;if(!t)return;let n=Math.max(Nl,Math.round(window.innerHeight*.7));pe(Math.min(n,Math.max(Nl,t.height+t.y-e.clientY)))},Ne=e=>{I.current&&(I.current=null,e.currentTarget.releasePointerCapture(e.pointerId),s?.(fe))},Pe=()=>{pe(Ml),s?.(Ml)},Fe=r.query.length>0,U=(0,_.useMemo)(()=>jl.filter(e=>i.columns?.includes(e.id)),[i.columns]),Ie=i.columns?.includes(`linkTarget`)??!1,Le=(0,_.useMemo)(()=>`minmax(160px, 1fr) ${U.map(e=>`${e.width}px`).join(` `)}`.trim(),[U]),Re=(0,_.useMemo)(()=>e?Rl(e.entries.map(t=>{let n=t.isDirectory?oa(N,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:Fe?Ii(i,r):null,tags:e.tags[t.name]??[]}}).filter(e=>!Fe||r.mode===`dim`||e.ranges!==null),i,e,M):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,Fe,r,N,i.sort,i.sortDescending,M]);he.current=Re;let ze=Math.max(40,i.iconSize+20),Be=Math.max(0,Math.floor(se.top/ze)-4),Ve=Math.min(Re.length,Be+Math.ceil(se.height/ze)+10),He=(0,_.useMemo)(()=>Re.slice(Be,Ve),[Re,Be,Ve]);(0,_.useEffect)(()=>{let e=F.current;if(!e||i.mode!==`list`)return;let t=()=>ce(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,_.useEffect)(()=>{ce(e=>({...e,top:0})),F.current&&(F.current.scrollTop=0)},[e?.path]),(0,_.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=Re.findIndex(e=>e.entry.fullPath===r.currentPath),t=F.current;if(e<0||!t)return;let n=e*ze;(n<t.scrollTop||n+ze>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else ie.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,Re,ze]);let Ue=(0,_.useMemo)(()=>Re.slice(0,ae),[Re,ae]);(0,_.useEffect)(()=>{oe(Al)},[e?.path]),(0,_.useEffect)(()=>{if(!r.currentPath)return;let e=Re.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&oe(t=>Math.max(t,e+Al))},[r.currentPath,Re]);let We=(0,_.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&oe(e=>Math.min(Re.length,e+Al))},[Re.length]),Ge=i.mode===`grid`,Ke=(0,_.useMemo)(()=>{if(!Ge)return[];if(!O)return Vl(Ue,Bl);let e=[],t=new Map;for(let n of Ue){let r=O(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[Ue,Ge,O]),qe=(0,_.useMemo)(()=>a?Re.filter(e=>!e.entry.isDirectory&&qi(e.entry.name)):[],[Re,a]),Je=qe.length,Ye=(0,_.useMemo)(()=>qe.slice(0,kl),[qe]),Xe=(0,_.useMemo)(()=>a?Vl(Ye,zl):[],[Ye,a]),Ze=(0,_.useMemo)(()=>Re.map(e=>e.entry.fullPath),[Re]),Qe=Re.length>0&&L.size>=Re.length,$e=L.size>0&&!Qe,et=()=>{j||(Qe?rt():R(new Set(Ze)))},W=e?.path??``,tt=(0,_.useCallback)((e,t)=>{if(j){le.current=t,R(new Set([t]));return}let n=e.ctrlKey||e.metaKey;R(r=>{if(e.shiftKey&&le.current!==null){let e=Ze.indexOf(le.current),i=Ze.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(Ze[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),le.current=t,e}return le.current=t,new Set([t])})},[Ze,j]),nt=(0,_.useCallback)(e=>{j?(le.current=e,R(new Set([e]))):(le.current=e,R(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[j]),rt=(0,_.useCallback)(()=>{le.current=null,R(new Set)},[]),it=(0,_.useCallback)(()=>{Te.current+=1,Ee.current+=1,B(null)},[]),at=(0,_.useCallback)((e,t)=>{e.isDirectory?u(e.fullPath,pi(t)):d?.(e.fullPath)},[u,d]),ot=(0,_.useCallback)((e,t,n)=>{de({entry:e,x:t,y:n})},[]),st=(0,_.useRef)(null),ct=(0,_.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;ll(e,L.has(n)?[...L]:[n])},[L]),lt=(0,_.useCallback)(e=>{if(!al(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);st.current=t?.dataset.directory===`true`?t.dataset.path??W:W,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[W]),ut=(0,_.useCallback)(e=>{if(k)return;let{paths:t,move:n}=ol(e),r=st.current??W;st.current=null,t.length!==0&&b&&(e.preventDefault(),b(t,r,!e.ctrlKey&&n))},[W,b,k]),dt=(0,_.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),k||!t&&!re)return;let n=me.current;t&&!n.has(t)&&R(new Set([t])),t&&(le.current=t);let r=t?n.has(t)?[...n]:[t]:[],i=t?r:W?[W]:[],a=++Te.current,o=t?he.current.find(e=>e.entry.fullPath===t):void 0,s=o&&!o.entry.isDirectory&&r.length===1?o.entry.fullPath:null,c=++Ee.current;B({x:e.clientX,y:e.clientY,paths:r,background:!t}),Oe({verbs:[],safe:!0,loading:i.length>0}),s?(Ae({recommended:[],other:[],loading:!0}),ei(s).then(e=>{Ee.current===c&&Ae({...e,loading:!1})},()=>{Ee.current===c&&Ae({recommended:[],other:[],loading:!1})})):Ae({recommended:[],other:[],loading:!1}),Hr().then(we,()=>we(!1)),i.length!==0&&ai(i).then(e=>{Te.current===a&&Oe({...e,loading:!1})},()=>{Te.current===a&&Oe({verbs:[],safe:!0,loading:!1})})},[re,W]),ft=(0,_.useCallback)(()=>v?.(),[v]),pt=async(e,t=!1)=>{await Vr(e,t)&&(we(!0),y?.())},mt=async e=>{e&&(await Kr(e)?(ft(),S?.()):window.alert(M(`Nothing on the clipboard could be pasted here.`)))},ht=async()=>{if(!W)return;let e=await Yr(W);e.ok?ft():window.alert(e.error??M(`Could not create the folder.`))},gt=e=>{R(new Set([e.fullPath])),le.current=e.fullPath,_e({path:e.fullPath,value:e.name})},_t=(0,_.useCallback)(e=>_e(t=>t&&{...t,value:e}),[]),vt=(0,_.useCallback)(()=>_e(null),[]),yt=(0,_.useCallback)(async()=>{let e=ve.current;if(_e(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=he.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await Jr(e.path,t);r.ok?(rt(),ft()):window.alert(r.error??M(`Could not rename the entry.`))},[rt,ft,M]),bt=async(e,t=!1)=>{if((t||C)&&!await xt(e,t))return;let n=await qr(e,t);if(!n.ok&&n.needsPermanent){if(!await xt(e,!0))return;n=await qr(e,!0)}n.ok?(rt(),ft()):window.alert(n.error??M(t?`Could not delete the selection.`:`Could not move the selection to the recycle bin.`))},xt=(0,_.useCallback)((e,t)=>new Promise(n=>V({paths:e,permanent:t,resolve:n})),[]),St=(0,_.useCallback)(e=>{V(t=>(t?.resolve(e),null))},[]),Ct=async e=>{let t=await si(e);t.ok?ft():window.alert(t.error??M(`Could not create the ZIP file.`))},wt=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}};(0,_.useEffect)(()=>{if(!h||z)return;let e=e=>{if(_i(e.target))return;ye.current?.();let t=mi(e),n=[...L],r=n.length===1?Re.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(Ze.length===0)return;e.preventDefault();let n=le.current&&Ze.includes(le.current)?le.current:L.size===1?[...L][0]:null,r=n?Ze.indexOf(n):-1,i=t===`home`?0:t===`end`?Ze.length-1:Math.max(0,Math.min(Ze.length-1,r+(t===`arrowdown`?1:-1))),a=Ze[i];R(new Set([a])),le.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===m.copy?i(()=>{n.length>0&&pt(n)}):t===m.cut?i(()=>{n.length>0&&pt(n,!0)}):t===m.paste?i(()=>void mt(W)):t===m.delete?i(()=>{n.length>0&&bt(n)}):t===m.deletePermanently?i(()=>{n.length>0&&bt(n,!0)}):t===m.selectAll?i(()=>{R(new Set(Ze)),le.current=Ze[0]??null}):t===m.invertSelection?i(()=>{R(new Set(Ze.filter(e=>!L.has(e)))),le.current=Ze[0]??null}):t===m.rename&&r?i(()=>void gt(r)):t===m.open&&r?i(()=>{r.isDirectory?u(r.fullPath):d?.(r.fullPath)}):t===m.newFolder||t===`f10`?i(()=>void ht()):t===m.terminal?i(()=>void $r(W)):t===m.properties?i(()=>void Zr(n.length>0?n:W?[W]:[])):t===m.refresh&&i(ft)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[Ze,pt,ht,W,h,z,u,d,mt,ft,bt,gt,Re,L,m]);let Tt=[],Et=[],Dt=z?.paths[0],Ot=Dt?Re.find(e=>e.entry.fullPath===Dt)?.entry:void 0,kt=z?.paths.length===1,At=z?.background?W?[W]:[]:z?.paths??[];if(z?.background)Tt.push({label:M(`Open in Terminal`),icon:(0,q.jsx)(fs,{size:14}),onSelect:()=>void $r(W)}),Tt.push({label:M(`Show in Explorer`),icon:(0,q.jsx)(bo,{size:14}),separatorBefore:!0,onSelect:()=>void ii(W)}),Et.push({label:M(`New folder`),icon:(0,q.jsx)(Eo,{size:16}),shortcut:hi(m.newFolder),onSelect:()=>void ht()},{label:M(`Paste`),icon:(0,q.jsx)(ys,{size:16}),disabled:!Ce,shortcut:hi(m.paste),onSelect:()=>void mt(W)},{label:M(`Refresh`),icon:(0,q.jsx)(To,{size:16}),shortcut:hi(m.refresh),onSelect:ft},{label:M(`Properties`),icon:(0,q.jsx)(Ao,{size:16}),shortcut:hi(m.properties),onSelect:()=>void Zr([W])});else if(z){if(Tt.push({label:M(`Open`),icon:(0,q.jsx)(Oo,{size:14}),onSelect:()=>{Ot&&(Ot.isDirectory?u(Ot.fullPath):d?.(Ot.fullPath))}}),Ot?.isDirectory&&(Tt.push({label:M(`Open in new tab`),icon:(0,q.jsx)(Eo,{size:14}),onSelect:()=>u(Ot.fullPath,!0)}),Tt.push({label:M(`Paste into folder`),icon:(0,q.jsx)(ys,{size:14}),disabled:!Ce,onSelect:()=>void mt(Ot.fullPath)}),Tt.push({label:M(`Open in Terminal`),icon:(0,q.jsx)(fs,{size:14}),onSelect:()=>void $r(Ot.fullPath)})),kt&&Ot&&!Ot.isDirectory){let e=[];ke.loading?e.push({label:M(`Loading apps…`),loading:!0,disabled:!0,onSelect:()=>void 0}):(ke.recommended.forEach(t=>{e.push({label:t.name,group:M(`Suggested apps`),icon:t.icon?(0,q.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,q.jsx)(Go,{size:14}),onSelect:()=>void ti(Ot.fullPath,t.path).then(e=>{e||Qr(Ot.fullPath)})})}),ke.other.forEach(t=>{e.push({label:t.name,group:M(`Other apps`),icon:t.icon?(0,q.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,q.jsx)(Go,{size:14}),onSelect:()=>void ti(Ot.fullPath,t.path).then(e=>{e||Qr(Ot.fullPath)})})})),e.push({label:M(`Choose another app…`),icon:(0,q.jsx)(Go,{size:14}),separatorBefore:!0,onSelect:()=>void Qr(Ot.fullPath)}),Tt.push({label:M(`Open with`),icon:(0,q.jsx)(Go,{size:14}),children:e,onSelect:()=>void Qr(Ot.fullPath)})}Tt.push({label:M(`Compress to ZIP`),icon:(0,q.jsx)(Uo,{size:14}),separatorBefore:!0,onSelect:()=>void Ct(z.paths)}),Tt.push({label:M(`Copy as path`),icon:(0,q.jsx)(_s,{size:14}),onSelect:()=>void wt(z.paths)}),x&&Tt.push({label:M(`Add to file tray`),icon:(0,q.jsx)(ms,{size:14}),onSelect:()=>x(z.paths)}),Tt.push({label:M(`Show in Explorer`),icon:(0,q.jsx)(bo,{size:14}),separatorBefore:!0,onSelect:()=>void ii(z.paths[0])}),Et.push({label:M(`Cut`),icon:(0,q.jsx)(vs,{size:16}),shortcut:hi(m.cut),onSelect:()=>void pt(z.paths,!0)},{label:M(`Copy`),icon:(0,q.jsx)(_s,{size:16}),shortcut:hi(m.copy),onSelect:()=>void pt(z.paths,!1)}),kt&&Ot&&Et.push({label:M(`Rename`),icon:(0,q.jsx)($o,{size:16}),shortcut:hi(m.rename),onSelect:()=>void gt(Ot)}),Et.push({label:M(`Delete`),icon:(0,q.jsx)(Po,{size:16}),danger:!0,shortcut:hi(m.delete),onSelect:()=>void bt(z.paths)},{label:M(`Properties`),icon:(0,q.jsx)(Ao,{size:16}),shortcut:hi(m.properties),onSelect:()=>void Zr(z.paths)})}if(z){if(De.loading)Tt.push({label:M(`More actions`),icon:(0,q.jsx)(Go,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(De.verbs.length>0){let e={items:[],children:new Map};for(let t of De.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,q.jsx)(Fl,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void oi(At,De.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];Tt.push({label:De.safe?`More actions`:`More actions (extensions)`,icon:(0,q.jsx)(Go,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}}let jt=ge&&(0,q.jsx)(Xs,{confirmLabel:ge.permanent?M(`Delete`):M(`Move`),danger:ge.permanent,message:ge.permanent?M(`Permanently delete {target}? This cannot be undone.`,{target:ge.paths.length===1?M(`this item`):M(`{count} items`,{count:ge.paths.length})}):M(`Move {target} to the recycle bin?`,{target:ge.paths.length===1?M(`this item`):M(`{count} items`,{count:ge.paths.length})}),onCancel:()=>St(!1),onConfirm:()=>St(!0),open:!0,title:ge.permanent?M(`Delete permanently`):M(`Move to the recycle bin`)}),Mt=(0,_.useMemo)(()=>{if(!e||L.size===0)return null;let t=Ze.find(e=>L.has(e));return t?Re.find(e=>e.entry.fullPath===t)?.entry??null:null},[Ze,e,Re,L]),Nt=(0,_.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:Qi(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:M(`Type`),value:M(`Folder`)},{label:M(`Location`),value:e.parent??`—`},{label:M(`Path`),value:e.path},{label:M(`Size`),value:J(t)},{label:M(`Items`),value:Yi(M,n,`1 item`,`{count} items`)},{label:M(`Modified`),value:`—`},{label:M(`Created`),value:`—`},{label:M(`Attributes`),value:`—`}]}},[e,M]),Pt=(0,_.useMemo)(()=>{if(!Mt||!e)return null;let t=Mt.isDirectory?e.folderSizes[Mt.name]:void 0,n=e.tags[Mt.name]??[],r=Mt.name.lastIndexOf(`.`),i=r>0&&r<Mt.name.length-1?Mt.name.slice(r+1).toUpperCase():`—`;return{name:Mt.name,path:Mt.fullPath,isDirectory:Mt.isDirectory,size:Mt.size,modified:Mt.modified,created:Mt.created,fields:[{label:M(`Type`),value:Wl(Mt,M)},{label:M(`Extension`),value:Mt.isDirectory?`—`:i},{label:M(`Location`),value:e.path},{label:M(`Full path`),value:Mt.fullPath},{label:M(`Size`),value:Mt.isDirectory?t===void 0?`—`:J(t):J(Mt.size)},...Mt.isDirectory?[{label:M(`Items`),value:`${e.counts[Mt.name]??`—`}`}]:[],{label:M(`Modified`),value:Xi(Mt.modified)},{label:M(`Created`),value:Xi(Mt.created)},{label:M(`Link status`),value:Mt.linkTarget==null?Mt.linkCount>1?M(`Hard link`):`—`:Mt.linkValid?`OK`:M(`Broken`)},...Mt.linkTarget?[{label:M(`Target`),value:Mt.linkTarget}]:[],...Mt.linkCount>1?[{label:M(`Links`),value:String(Mt.linkCount)}]:[],{label:M(`Attributes`),value:[Mt.isHidden?M(`Hidden`):``,Mt.isSystem?M(`System`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:M(`Tags`),value:n.join(`, `)}]:[]]}},[e,Mt,M])??Nt,Ft=(0,_.useRef)(D);Ft.current=D,(0,_.useEffect)(()=>{Ft.current?.(Pt)},[D,Pt]);let It=E&&Pt&&(0,q.jsx)(sc,{info:Pt,onWidth:Se,selectionNote:L.size>1?Yi(M,L.size,`1 item selected`,`{count} items selected`):void 0,videoAudio:w,videoAutoplay:T,width:be});return n&&!e?(0,q.jsx)(Wu,{children:(0,q.jsx)(Ku,{children:n})}):!e&&!t?(0,q.jsx)(Wu,{children:(0,q.jsx)(Gu,{children:M(`Nothing selected.`)})}):i.mode===`grid`?(0,q.jsxs)(cu,{onPointerDown:ee,children:[(0,q.jsxs)(lu,{children:[(0,q.jsxs)(_u,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||rt()},onContextMenu:e=>dt(e),onDragOver:lt,onDragStart:ct,onDrop:ut,onScroll:e=>{te?.(e.currentTarget),We(e.currentTarget)},children:[f&&Re.length>0&&(0,q.jsxs)(au,{children:[(0,q.jsx)(ru,{$checked:!j&&Qe,$partial:!j&&$e,"aria-label":M(Qe?`Select none`:`Select all`),disabled:j,onClick:et,title:M(Qe?`Select none`:`Select all`),type:`button`,children:Qe?(0,q.jsx)(Fo,{size:10}):$e?(0,q.jsx)(iu,{}):null}),(0,q.jsx)(`span`,{children:M(Qe?`Select none`:`Select all`)})]}),t&&!e?(0,q.jsx)(Su,{$size:i.gridSize,children:(0,q.jsx)(Xl,{size:i.gridSize})}):(0,q.jsx)(Ql,{counts:e?.counts,currentPath:Fe?r.currentPath:null,groups:Ke,gridSize:i.gridSize,innerRef:ie,onContextMenu:dt,onOpen:u,onOpenFile:d,onRenameCancel:vt,onRenameChange:_t,onRenameCommit:yt,onSelect:tt,onToggle:nt,openOnSingleClick:p,renaming:H,searching:Fe,selected:L,showCheckboxes:f,showTarget:Ie}),!t&&e&&Re.length===0&&(0,q.jsx)(Uu,{children:(0,q.jsx)(Gu,{children:n??(Fe&&r.mode===`hide`?M(`No entries match the search.`):M(`This folder is empty.`))})}),ne]}),z&&(0,q.jsx)(Rs,{items:Tt,onClose:it,quick:Et,x:z.x,y:z.y}),jt]}),It]}):(0,q.jsxs)(cu,{onPointerDown:ee,children:[(0,q.jsxs)(lu,{children:[(0,q.jsxs)(uu,{onScroll:e=>{F.current&&F.current.scrollLeft!==e.currentTarget.scrollLeft&&(F.current.scrollLeft=e.currentTarget.scrollLeft)},ref:P,style:{gridTemplateColumns:Le},children:[(0,q.jsxs)(nu,{children:[f&&(0,q.jsx)(ru,{$checked:!j&&Qe,$partial:!j&&$e,"aria-label":M(Qe?`Select none`:`Select all`),disabled:j,onClick:e=>{e.stopPropagation(),et()},title:M(Qe?`Select none`:`Select all`),type:`button`,children:Qe?(0,q.jsx)(Fo,{size:10}):$e?(0,q.jsx)(iu,{}):null}),(0,q.jsxs)(du,{onClick:()=>c(`name`),type:`button`,children:[M(`Name`),Il(i,`name`)]})]}),U.map(e=>(0,q.jsxs)(du,{onClick:()=>c(e.id),type:`button`,children:[M(e.label),Il(i,e.id)]},e.id))]}),(0,q.jsxs)(fu,{onClick:e=>{e.target===e.currentTarget&&rt()},onContextMenu:e=>dt(e),onDragOver:lt,onDragStart:ct,onDrop:ut,onScroll:e=>{P.current&&P.current.scrollLeft!==e.currentTarget.scrollLeft&&(P.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;ce(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:F,children:[t&&!e?(0,q.jsx)(Yl,{template:Le,columns:U.length}):(0,q.jsxs)(q.Fragment,{children:[Be>0&&(0,q.jsx)(`div`,{style:{height:Be*ze}}),He.map(t=>{let n=t.entry.fullPath;return(0,q.jsx)(eu,{current:Fe&&n===r.currentPath,dim:Fe&&t.ranges===null,height:ze,iconSize:i.iconSize,innerRef:ie,listing:e,onContextMenu:dt,onOpen:at,onRenameCancel:vt,onRenameChange:_t,onRenameCommit:yt,onSelect:tt,onTagEdit:ot,onToggle:nt,openOnSingleClick:p,renaming:H?.path===n?{value:H.value}:null,row:t,selected:L.has(n),showCheckboxes:f,showTarget:Ie,template:Le,visible:U},n)}),Ve<Re.length&&(0,q.jsx)(`div`,{style:{height:(Re.length-Ve)*ze}})]}),!t&&e&&Re.length===0&&(0,q.jsx)(Wu,{children:(0,q.jsx)(Gu,{children:n??(Fe&&r.mode===`hide`?M(`No entries match the search.`):M(`This folder is empty.`))})})]}),a&&qe.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(pu,{onDoubleClick:Pe,onPointerDown:je,onPointerMove:Me,onPointerUp:Ne,title:M(`Drag to resize; double-click to reset`)}),(0,q.jsxs)(mu,{style:{height:fe},children:[(0,q.jsxs)(hu,{children:[M(`Preview`),(0,q.jsx)(gu,{children:Je>kl?`${Ye.length} / ${Je}`:Je})]}),(0,q.jsx)(_u,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||rt()},onContextMenu:e=>dt(e),children:(0,q.jsx)(Ql,{counts:e?.counts,currentPath:Fe?r.currentPath:null,groups:Xe,gridSize:i.gridSize,onContextMenu:dt,onOpen:u,onOpenFile:d,onSelect:tt,onToggle:nt,openOnSingleClick:p,searching:Fe,selected:L,showCheckboxes:f,showTarget:Ie})})]})]}),ue&&e&&(0,q.jsx)(Vc,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>l?.(ue.entry.name,e,t),onClose:()=>de(null),tags:e.tags[ue.entry.name]??[],x:ue.x,y:ue.y}),z&&(0,q.jsx)(Rs,{items:Tt,onClose:it,quick:Et,x:z.x,y:z.y}),jt]}),It]})}function Fl({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,q.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,q.jsx)(Oo,{size:14});case`document`:return(0,q.jsx)(Zo,{size:14});case`cut`:return(0,q.jsx)(vs,{size:14});case`copy`:return(0,q.jsx)(_s,{size:14});case`paste`:return(0,q.jsx)(ys,{size:14});case`trash`:return(0,q.jsx)(Po,{size:14});case`pencil`:return(0,q.jsx)($o,{size:14});case`gear`:return(0,q.jsx)(Ao,{size:14});case`star`:return(0,q.jsx)(os,{size:14});case`pin`:return(0,q.jsx)(jo,{size:14});case`executable`:return(0,q.jsx)(Go,{size:14});case`share`:return(0,q.jsx)(bs,{size:14});case`arrow`:return(0,q.jsx)(Oo,{size:14});default:return(0,q.jsx)(Lo,{size:14})}}function Il(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var Ll=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function Rl(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Wl(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:Ll.compare(String(r),String(i));return t.sortDescending?-o:o})}var zl=Wi.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Ki(t.entry.name)===e})),Bl=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...zl.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function Vl(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function Hl(e){return Math.max(24,Math.min(e-56,160))}var Ul={file:`file`,folder:`folder`,text:`text file`,code:`source file`,image:`image`,video:`video`,audio:`audio`,archive:`archive`,pdf:`PDF`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Wl(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`Shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`Internet shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`Folder link`):t(`Symbolic link`);if(e.isDirectory)return t(`Folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(Ul[el(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`File`)}function Gl(e,t,n,r){switch(e){case`type`:return Wl(t,r);case`size`:return ql(t,n.folderSizes);case`modified`:return Xi(t.modified);case`created`:return Xi(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:r(`Broken`);default:return``}}function Kl({name:e,ranges:t}){if(!t||t.length===0)return(0,q.jsx)(q.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,q.jsx)(Hu,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,q.jsx)(q.Fragment,{children:n})}function ql(e,t){if(!e.isDirectory)return J(e.size);let n=t[e.name];return n===void 0?`—`:J(n)}function Jl({entry:e,size:t=18}){let n=(0,_.useRef)(null),[r,i]=(0,_.useState)(!1);(0,_.useEffect)(()=>{if(r)return;let e=n.current;if(!e)return;if(!(`IntersectionObserver`in window)){i(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(i(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[r]);let a=Ei(r?e.fullPath:null,e.isDirectory,t>32),o=Di(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,q.jsx)(tu,{$size:t,ref:n,children:e.iconSource?.startsWith(`icon:`)?(0,q.jsx)(tl,{name:e.iconSource.slice(5),size:t}):o?(0,q.jsx)(`img`,{alt:``,height:t,src:o,width:t}):a?(0,q.jsx)(`img`,{alt:``,height:t,src:a,width:t}):e.isDirectory?(0,q.jsx)(bo,{size:t}):(0,q.jsx)(tl,{name:el(e.name),size:t})})}function Yl({template:e,columns:t}){return(0,q.jsx)(q.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,q.jsxs)(Cu,{style:{gridTemplateColumns:e},children:[(0,q.jsxs)(Eu,{children:[(0,q.jsx)(wu,{style:{flexShrink:0,height:18,width:18}}),(0,q.jsx)(wu,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,q.jsx)(wu,{style:{width:t%2==0?44:92}},t))]},r))})}function Xl({size:e}){return(0,q.jsx)(q.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,q.jsxs)(Fu,{$dim:!1,$current:!1,$selected:!1,children:[(0,q.jsx)(Iu,{children:(0,q.jsx)(wu,{style:{height:e,width:e}})}),(0,q.jsx)(Ru,{children:(0,q.jsx)(wu,{style:{height:9,width:`${t}%`}})})]},n))})}var Zl=(0,_.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:d,onRenameCommit:f,onRenameCancel:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:v,onOpenFile:y}){let b=qn(),x=aa(),S=!e.entry.isDirectory&&qi(e.entry.name),C=(0,_.useRef)(null),[w,T]=(0,_.useState)(!1);(0,_.useEffect)(()=>{if(!S||w)return;let e=C.current;if(!e)return;if(!(`IntersectionObserver`in window)){T(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(T(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,w]);let E=ji(S&&w?e.entry.fullPath:null,192,e.entry.modified),[D,ee]=(0,_.useState)(!1),O=e.entry.fullPath,te=t=>{e.entry.isDirectory?v(O,pi(t)):y?.(O)};return(0,q.jsxs)(Fu,{$current:t,$dim:n,$selected:s,onClick:e=>{m(e,O),l&&te(e)},onContextMenu:e=>g(e,O),onDoubleClick:e=>{l||te(e)},ref:e=>{C.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":O,draggable:!u,children:[c&&(0,q.jsx)(su,{$checked:s,onClick:e=>{e.stopPropagation(),h(O)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`Deselect`:`Select`),type:`button`,children:s&&(0,q.jsx)(Fo,{size:10})}),(0,q.jsx)(Iu,{children:S&&E&&!D?(0,q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>ee(!0),src:E}):(0,q.jsx)(Lu,{children:e.place&&x.useIcons?(0,q.jsx)(Rc,{place:e.place,size:r}):(0,q.jsx)(Jl,{entry:e.entry,size:r})})}),(0,q.jsxs)(Ru,{children:[u?(0,q.jsx)($l,{onCancel:()=>p?.(),onChange:e=>d?.(e),onCommit:()=>f?.(),value:u.value}):(0,q.jsx)(zu,{$broken:e.entry.linkValid===!1,children:(0,q.jsx)(Kl,{name:e.label,ranges:e.ranges})}),(0,q.jsx)(Bu,{children:e.entry.isDirectory?i===void 0?Wl(e.entry,b):b(`{type} · {count} items`,{type:Wl(e.entry,b),count:i}):b(`{type} · {size}`,{type:Wl(e.entry,b),size:J(e.entry.size)})}),a&&e.entry.linkTarget&&(0,q.jsxs)(Vu,{title:e.entry.linkTarget,children:[`→ `,e.entry.linkTarget]})]})]})});function Ql({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:p,onOpen:m,onOpenFile:h,onRenameChange:g,onRenameCommit:_,onRenameCancel:v}){let y=qn();return(0,q.jsx)(q.Fragment,{children:e.map(e=>(0,q.jsxs)(vu,{children:[(0,q.jsxs)(yu,{children:[y(e.label),(0,q.jsx)(bu,{children:e.rows.length}),(0,q.jsx)(xu,{})]}),(0,q.jsx)(Su,{$size:t,children:e.rows.map(e=>(0,q.jsx)(Zl,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:Hl(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:p,onOpen:m,onOpenFile:h,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:v,onRenameChange:g,onRenameCommit:_,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function $l({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,_.useRef)(null);return(0,_.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,q.jsx)(Ou,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var eu=(0,_.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:_,onTagEdit:v,onRenameChange:y,onRenameCommit:b,onRenameCancel:x}){let S=qn(),C=aa(),w=e.entry.fullPath;return(0,q.jsxs)(Tu,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{m(t,w),o&&_(e.entry,t)},onContextMenu:e=>g(e,w),onDoubleClick:t=>{o||_(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":w,draggable:!p,children:[(0,q.jsxs)(Eu,{children:[i&&(0,q.jsx)(ou,{$checked:r,onClick:e=>{e.stopPropagation(),h(w)},onDoubleClick:e=>e.stopPropagation(),title:S(r?`Deselect`:`Select`),type:`button`,children:r&&(0,q.jsx)(Fo,{size:10})}),e.place&&C.useIcons?(0,q.jsx)(tu,{children:(0,q.jsx)(Rc,{place:e.place,size:s})}):(0,q.jsx)(Jl,{entry:e.entry,size:s}),p?(0,q.jsx)($l,{onCancel:x,onChange:y,onCommit:b,value:p.value}):(0,q.jsx)(Du,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,q.jsx)(Kl,{name:e.label,ranges:e.ranges})}),a&&e.entry.linkTarget&&(0,q.jsxs)(ku,{title:e.entry.linkTarget,children:[`→ `,e.entry.linkTarget]})]}),u.map(t=>(0,q.jsx)(Au,{children:t.id===`tags`?(0,q.jsx)(ju,{onClick:t=>{t.stopPropagation(),v(e.entry,t.clientX,t.clientY)},title:S(`Edit tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,q.jsx)(Mu,{$color:t,$ink:Bc(t),children:e},e)}):(0,q.jsx)(Nu,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,q.jsx)(Pu,{children:S(`Broken`)}):Gl(t.id,e.entry,d,S)},t.id))]})}),tu=G.span`
    display: grid;
    place-items: center;
    width: ${({$size:e=18})=>e}px;
    height: ${({$size:e=18})=>e}px;
    flex-shrink: 0;

    svg {
        color: var(--text-muted);
    }

    img {
        display: block;
    }
`,nu=G.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,ru=G.button`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid ${({$checked:e,$partial:t})=>e||t?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e,$partial:t})=>e||t?`rgba(var(--accent-rgb), 0.8)`:`transparent`};
    color: #fff;
    cursor: pointer;
    transition: background 100ms ease, border-color 100ms ease;

    &:hover {
        border-color: var(--border-color-focus);
        background: ${({$checked:e,$partial:t})=>e||t?`rgba(var(--accent-rgb), 0.9)`:`rgba(148, 163, 184, 0.16)`};
    }

    &:disabled {
        opacity: 0.32;
        cursor: default;

        &:hover {
            border-color: var(--border-color-hover);
            background: transparent;
        }
    }
`,iu=G.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,au=G.div`
    position: sticky;
    top: -12px;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 8px;
    margin: -12px -14px 10px;
    padding: 9px 14px;
    background: var(--bg-primary);
    color: var(--text-muted);
    font-size: 11px;
`,ou=G.button`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.8)`:`transparent`};
    color: #fff;
    cursor: pointer;
    transition: background 100ms ease, border-color 100ms ease;

    &:hover {
        border-color: var(--border-color-focus);
        background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(148, 163, 184, 0.16)`};
    }
`,su=G(ou)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,cu=G.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,lu=G.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
`,uu=G.div`
    display: grid;
    gap: 16px;
    padding: 10px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 11px;
    min-width: 0;
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        height: 0;
    }
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,du=G.button`
    display: flex;
    align-items: center;
    min-width: 0;
    padding: 0;
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
    text-transform: inherit;
    cursor: pointer;

    &:hover {
        color: var(--text-primary);
    }
`,fu=G.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,pu=G.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,mu=G.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: var(--bg-secondary);
`,hu=G.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 6px 12px 0;
    margin-bottom: 5px;
    flex-shrink: 0;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,gu=G.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,_u=G.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,vu=G.section`
    & + & {
        margin-top: 22px;
    }
`,yu=G.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,bu=G.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,xu=G.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,Su=G.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,Cu=G.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,wu=G.span`
    display: block;
    height: 9px;
    border-radius: 4px;
    background: var(--border-color);
    animation: yafm-bone 1.25s ease-in-out infinite;

    @keyframes yafm-bone {
        0%, 100% {
            opacity: 0.3;
        }
        50% {
            opacity: 0.7;
        }
    }
`,Tu=G.div`
    display: grid;
    gap: 16px;
    align-items: center;
    height: ${({$height:e})=>e}px;
    padding: 9px 12px;
    border: 1px solid ${({$selected:e})=>e?`rgba(var(--accent-rgb), 0.35)`:`transparent`};
    border-radius: var(--radius-md);
    background: ${({$current:e,$selected:t})=>e?`rgba(var(--accent-rgb), 0.14)`:t?`rgba(var(--accent-rgb), 0.09)`:`transparent`};
    box-shadow: ${({$current:e})=>e?`inset 3px 0 0 var(--accent-primary)`:`none`};
    font-size: 13px;
    color: var(--text-secondary);
    opacity: ${({$hidden:e,$dim:t})=>t?.3:e?.55:1};
    cursor: default;
    user-select: none;
    overflow: hidden;
    transition: background 110ms ease, border-color 110ms ease, opacity 110ms ease;

    &:hover {
        background: var(--bg-card-hover);
        border-color: var(--border-color);
        color: var(--text-primary);
    }
`,Eu=G.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,Du=G.span`
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ou=G.input`
    flex: 1;
    min-width: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-focus);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 13px;
    outline: none;
`,ku=G.span`
    overflow: hidden;
    min-width: 0;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent-primary);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Au=G.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,ju=G.button`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 3px;
    width: 100%;
    max-height: 100%;
    overflow: hidden;
    padding: 2px 4px;
    border: 1px dashed transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    text-align: left;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
    }
`,Mu=G.span`
    max-width: 100%;
    padding: 2px 8px;
    overflow: hidden;
    border-radius: 999px;
    background: ${({$color:e})=>e};
    color: ${({$ink:e})=>e};
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.5;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Nu=G.span`
    color: var(--text-muted);
    font-size: 11px;
`,Pu=G.span`
    color: #fca5a5;
`,Fu=G.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    overflow: hidden;
    border: 1px solid ${({$current:e,$selected:t})=>e?`rgba(var(--accent-rgb), 0.5)`:t?`rgba(var(--accent-rgb), 0.4)`:`var(--border-color)`};
    border-radius: var(--radius-lg);
    background: ${({$current:e,$selected:t})=>e?`rgba(var(--accent-rgb), 0.14)`:t?`rgba(var(--accent-rgb), 0.1)`:`var(--bg-primary)`};
    opacity: ${({$dim:e})=>e?.3:1};
    cursor: default;
    user-select: none;
    content-visibility: auto;
    transition: background 120ms ease, border-color 120ms ease, opacity 120ms ease,
        transform 140ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 140ms ease;

    &:hover {
        background: var(--bg-card-hover);
        border-color: var(--border-color-hover);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
        transform: translateY(-1px);
    }
`,Iu=G.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
    overflow: hidden;

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`,Lu=G.span`
    display: grid;
    place-items: start;
    width: 100%;
    height: 100%;
    padding: 6px;
    overflow: hidden;

    svg {
        color: var(--text-muted);
    }

    img {
        display: block;
        object-fit: contain;
    }
`,Ru=G.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding: 18px 8px 6px;
    background: linear-gradient(to top, rgba(var(--bg-rgb), 0.92), rgba(var(--bg-rgb), 0));
    overflow: hidden;
`,zu=G.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Bu=G.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Vu=G.span`
    width: 100%;
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--accent-primary);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Hu=G.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,Uu=G.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Wu=G.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,Gu=G.p`
    font-size: 13px;
    color: var(--text-muted);
`,Ku=G.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`;function qu({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,onQuery:s,onPrevious:c,onNext:l,onMatchCase:u,onRegex:d,onMode:f,onClose:p}){let m=qn(),h=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=h.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let g=e=>{e(),h.current?.focus()};return(0,q.jsxs)(Ju,{children:[(0,q.jsx)(Co,{}),(0,q.jsx)(Yu,{"aria-label":m(`Search this folder`),onChange:e=>s(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?c():l()),e.key===`Escape`&&(e.preventDefault(),p())},placeholder:m(`Search this folder`),ref:h,spellCheck:!1,value:e}),(0,q.jsx)(Xu,{children:i===0?`0/0`:`${a+1}/${i}`}),(0,q.jsx)(Zu,{onClick:()=>g(c),title:m(`Previous match (Shift+Enter)`),type:`button`,children:(0,q.jsx)(ko,{size:12})}),(0,q.jsx)(Zu,{$down:!0,onClick:()=>g(l),title:m(`Next match (Enter)`),type:`button`,children:(0,q.jsx)(ko,{size:12})}),(0,q.jsx)(Qu,{$on:n,onClick:()=>g(u),title:m(`Match case`),type:`button`,children:`Aa`}),(0,q.jsx)(Qu,{$on:r,onClick:()=>g(d),title:m(`Regular expression`),type:`button`,children:`.*`}),(0,q.jsx)($u,{$on:t===`hide`,onClick:()=>g(f),title:m(t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`),type:`button`,children:m(t===`hide`?`Hide`:`Dim`)}),(0,q.jsx)(Zu,{onClick:p,title:m(`Close search (Esc)`),type:`button`,children:(0,q.jsx)(Io,{size:12})})]})}var Ju=G.div`
    position: absolute;
    top: 10px;
    right: 16px;
    z-index: 20;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 5px 6px 5px 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: var(--text-muted);
    ${Is}
`,Yu=G.input`
    width: 180px;
    padding: 4px 2px;
    border: 0;
    background: transparent;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 12px;
    outline: none;

    &::placeholder {
        color: var(--text-muted);
    }
`,Xu=G.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Zu=G.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;

    svg {
        transform: rotate(${({$down:e})=>e?`90deg`:`-90deg`});
    }

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,Qu=G.button`
    min-width: 24px;
    height: 22px;
    padding: 0 4px;
    border: 1px solid ${({$on:e})=>e?`var(--border-color-focus)`:`transparent`};
    border-radius: var(--radius-sm);
    background: ${({$on:e})=>e?`rgba(var(--accent-rgb), 0.18)`:`transparent`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font-family: var(--font-mono);
    font-size: 10px;
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
    }
`,$u=G(Qu)`
    min-width: 34px;
    font-family: var(--font-sans);
    font-size: 10px;
`,ed=150,td=2500,nd=3,rd=600;function id({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,onPick:a,onSelectionChange:o}){let s=qn(),[c,l]=(0,_.useState)([]),[u,d]=(0,_.useState)(0),[f,p]=(0,_.useState)(!0),[m,h]=(0,_.useState)(null),[g,v]=(0,_.useState)(!1),y=(0,_.useRef)([]),b=(0,_.useRef)(0),x=(0,_.useRef)(!1),S=(0,_.useRef)(!0),C=(0,_.useRef)(0),w=(0,_.useRef)(null),T=(0,_.useRef)(0),E=(0,_.useCallback)(async e=>{let t=++C.current;p(!0),S.current=!0,h(null);try{let n=await yr(0,ed,e);if(t!==C.current)return;y.current=n.entries,b.current=n.total,l(n.entries),d(n.total)}catch(e){t===C.current&&h(e instanceof Error?e.message:String(e))}finally{t===C.current&&(S.current=!1,p(!1))}},[]);(0,_.useEffect)(()=>{E(!1)},[E]);let D=(0,_.useCallback)(async()=>{if(S.current||x.current||y.current.length>=b.current)return;let e=C.current;x.current=!0;try{let t=y.current,n=b.current;for(let r=0;r<nd&&t.length<n;r++){let r=await yr(t.length,ed,!1);if(e!==C.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<ed)break}if(e!==C.current)return;y.current=t,b.current=n,(0,_.startTransition)(()=>{l(t),d(n)})}catch{}finally{x.current=!1}},[]),ee=(0,_.useCallback)(e=>{T.current||=window.requestAnimationFrame(()=>{T.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<td&&D()})},[D]);(0,_.useEffect)(()=>{let e=w.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&D()},{root:e.parentElement,rootMargin:`${td}px 0px`});return t.observe(e),()=>t.disconnect()},[D]),(0,_.useEffect)(()=>{if(c.length>=u)return;let e=window.setTimeout(()=>{let e=w.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<td&&D()},200);return()=>window.clearTimeout(e)},[c.length,u,D]);let O=(0,_.useMemo)(()=>({path:``,parent:null,entries:c.map(ad),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[c]),te=(0,_.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),ne=(0,_.useCallback)(e=>{a?a(e):ir(e)},[a]),re=(0,_.useCallback)(e=>{let t=od(e.modified);return{id:t,label:t}},[]),k=()=>{v(!0),E(!0).finally(()=>v(!1))},A=c.length<u;return(0,q.jsxs)(sd,{children:[(0,q.jsxs)(cd,{children:[(0,q.jsxs)(ld,{children:[(0,q.jsx)(`span`,{children:s(`Gallery`)}),(0,q.jsx)(ud,{children:f?s(`scanning…`):s(`{shown} of {total} pictures`,{shown:c.length,total:u})})]}),(0,q.jsx)(dd,{onClick:k,title:s(`Scan the folders again`),type:`button`,children:(0,q.jsx)(fd,{$spinning:g,children:(0,q.jsx)(To,{size:14})})})]}),m&&(0,q.jsx)(md,{children:m}),!m&&!f&&u===0&&(0,q.jsx)(md,{children:s(`No pictures found.`)}),!m&&(f||u>0)&&(0,q.jsx)(Pl,{confirmDelete:n,listing:f&&c.length===0?null:O,loading:f,error:null,view:te,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,enableShortcuts:!a,readOnly:!!a,onSelectionChange:o,onSort:()=>void 0,onOpen:ne,onOpenFile:ne,onRefresh:k,groupOf:re,onGridScroll:ee,gridFooter:(0,q.jsx)(pd,{$space:A?rd:1,ref:w}),allowBackgroundMenu:!1})]})}function ad(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function od(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(Y(),{weekday:`long`}):t.toLocaleDateString(Y(),{year:`numeric`,month:`long`,day:`numeric`})}var sd=G.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,cd=G.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,ld=G.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,ud=G.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,dd=G.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,fd=G.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,pd=G.div`
    height: ${({$space:e})=>e}px;
`,md=G.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`,hd=null,gd=null;function _d(e){hd=e}function vd(e){gd=e}function yd(e){return hd?hd(e):Promise.resolve(null)}function bd(e){return gd?gd(e):Promise.resolve(null)}function xd({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=qn(),a=(0,_.useRef)(null),o=(0,_.useRef)(null),[s,c]=(0,_.useState)(null);return(0,_.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,_.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,_.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,ws.createPortal)((0,q.jsxs)(Sd,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(Nc).map(n=>(0,q.jsx)(Cd,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:Nc[n](16)},n)),(0,q.jsx)(Cd,{onClick:async()=>{let e=await bd([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`Choose an image`),type:`button`,children:(0,q.jsx)(Eo,{size:13})}),r&&(0,q.jsx)(Cd,{$active:!e,onClick:()=>t(null),title:i(`Default`),type:`button`,children:(0,q.jsx)(Io,{size:12})})]}),document.body)]})}var Sd=G.div`
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
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
    ${Ns}
    transform-origin: top left;
`,Cd=G.button`
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
`,wd=G.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 14px 26px 34px;
`,Td=G.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    flex-wrap: wrap;
    padding-bottom: 14px;
`,Ed=G.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,Dd=G.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,Od=G.button`
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
`,kd=G.div`
    position: relative;
    display: inline-flex;
`,Ad=G.div`
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
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
`,jd=G.button`
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
`,Md=G.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,Nd=G.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
`,Pd=G.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Fd=G.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,Id=G.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Ld=G.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,Rd=G.input`
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
`,zd=G.button`
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
`,Bd=G.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,Vd=G.div`
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
`,Hd=G.span`
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
`,Ud=G.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,Wd=G.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Gd=G.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,Kd=G.button`
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
`,qd=G.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,Jd=G.button`
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
`,Yd=G.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Xd=G.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,Zd=G.div`
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
`,Qd=G.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,$d=G.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,ef=G.button`
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
`,tf=G.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,nf=G.button`
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
`,rf=G.button`
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
`,af=G.button`
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
`,of=G.span`
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
`,sf=G.button`
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
`,cf=G.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,lf=G.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`;function uf({places:e,drives:t,recent:n,recentLimit:r,homePath:i,historyVersion:a,onOpen:o,onPlacesChanged:s,onRecentCleared:c,onLayoutChanged:l,onHistoryChanged:u,onDrivesChanged:d,visibilityVersion:f=0,readOnly:p=!1,onPick:m,onSelectionChange:h}){let g=qn(),v=aa(),[y,b]=(0,_.useState)(!1),[x,S]=(0,_.useState)(null),[C,w]=(0,_.useState)(null),[T,E]=(0,_.useState)(!1),[D,ee]=(0,_.useState)(null),[O,te]=(0,_.useState)(null),[ne,re]=(0,_.useState)(null),[k,A]=(0,_.useState)(null),j=e=>m?(A(e),h?.([e]),!0):!1;(0,_.useEffect)(()=>{Or().then(S,()=>S(null))},[]),(0,_.useEffect)(()=>{if(!C)return;let e=()=>w(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||w(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[C]),(0,_.useEffect)(()=>{if(!T)return;let e=()=>E(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[T]);let M=Fc(x),N=M.map(e=>e.id),ie=e=>C?.kind===`panel`&&C.id===e,P=e=>C?.kind===`place`&&C.id===e;(0,_.useEffect)(()=>{if(!K.available)return;let e=M.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??i).filter(e=>e.length>0);K.send({type:`fs.watch`,payload:{paths:e}})},[M.map(e=>e.path??e.id).join(`|`),i]);let F=async(e,t)=>{let n={...x?.placeIcons};t?n[e]=t:delete n[e],w(null),await I({placeIcons:n}),s(await ur())},ae=async(e,t)=>{let n={...x?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],te(null),await I({placeNames:n}),s(await ur())},oe=e=>{re(null),ee({drive:e,label:e.label||`Local Disk`})},se=async()=>{if(!D)return;let{drive:e,label:t}=D;ee(null);let n=await rr(e.name,t.trim());n.ok?(re(null),d?.()):re(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},ce=x?.overviewColumns??1,I=async e=>{if(!x)return;let t={...x,...e,overviewPanels:e.overviewPanels??N,overviewHidden:[]};S(await kr(t)),l?.()},le=(e,t)=>{let n=N.indexOf(e),r=n+t;if(n<0||r<0||r>=N.length)return;let i=[...N];[i[n],i[r]]=[i[r],i[n]],I({overviewPanels:i})},ue=(e,t)=>{let n={...x?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],I({overviewTitles:n})},de=(e,t)=>void I({overviewViews:{...x?.overviewViews,[e]:t}}),fe=e=>{let t=x?.overviewPinned??M.filter(e=>e.pinned).map(e=>e.id);I({overviewPinned:M.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},pe=e=>{w(null);let t=t=>{let n={...t};return delete n[e],n},n=x?.overviewPinned??M.filter(e=>e.pinned).map(e=>e.id);I({overviewPanels:N.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(x?.overviewTitles),overviewViews:t(x?.overviewViews),overviewIcons:t(x?.overviewIcons),panelPlaces:t(x?.panelPlaces)})},L=(e,t)=>{let n={...x?.overviewIcons};t?n[e]=t:delete n[e],w(null),I({overviewIcons:n})},R=async e=>{if(!x)return;if(e===`folder`){let e=await yd();if(!e)return;let t=`folder:${e}`;N.includes(t)||await I({overviewPanels:[...N,t]});return}if(e===`quick`){let e=2;for(;N.includes(`quick:${e}`);)e+=1;await I({overviewPanels:[...N,`quick:${e}`]});return}let t=e;for(let n=2;N.includes(t);n+=1)t=`${e}:${n}`;await I({overviewPanels:[...N,t]})},me=async t=>{let n=await yd();if(!n)return;if(t.id===`quick`){await I({quickAccess:[...new Set([...e.map(e=>e.path),n])]}),s(await ur());return}let r=t.places??[];r.some(e=>ff(e,n))||await I({panelPlaces:{...x?.panelPlaces,[t.id]:[...r,n]}})},he=async(t,n)=>{w(null),t.id===`quick`?(await I({quickAccess:e.filter(e=>!ff(e.path,n)).map(e=>e.path)}),s(await ur())):await I({panelPlaces:{...x?.panelPlaces,[t.id]:(t.places??[]).filter(e=>!ff(e,n))}})},z=async(t,n,r)=>{if(ff(n,r))return;let i=t.id===`quick`?e.map(e=>e.path):t.places??[],a=i.findIndex(e=>ff(e,n)),o=i.findIndex(e=>ff(e,r));if(a<0||o<0)return;let c=[...i],[l]=c.splice(a,1);c.splice(o,0,l),t.id===`quick`?(await I({quickAccess:c}),s(await ur())):await I({panelPlaces:{...x?.panelPlaces,[t.id]:c}})},B=(e,t)=>({draggable:y,onDragOver:e=>{y&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{y&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{y&&(n.preventDefault(),z(e,n.dataTransfer.getData(`text/plain`),t))}}),ge=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>ff(e.path,t));return{name:x?.placeNames?.[t]??n?.name??(Qi(t)||t),path:t,kind:`folder`,icon:n?.icon??x?.placeIcons?.[t]??null}}),V=e=>{if(n.length===0)return(0,q.jsx)(lf,{children:g(`Files and folders you open show up here.`)});let t=n.slice(0,r);return e.view===`grid`?(0,q.jsx)(Bd,{children:t.map(e=>{let t=oa(v,e.path);return(0,q.jsxs)(Vd,{$plain:!1,$selected:k===e.path,onClick:t=>{j(e.path)||(e.isDirectory?o(e.path,pi(t)):ir(e.path))},onDoubleClick:()=>m?.(e.path),title:e.path,children:[(0,q.jsx)(Hd,{children:t&&v.useIcons?(0,q.jsx)(Rc,{place:t,size:18}):(0,q.jsx)(nl,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,q.jsxs)(Ud,{children:[(0,q.jsx)(`strong`,{children:t?.name||e.name}),(0,q.jsx)(Wd,{children:e.path})]})]},e.path)})}):(0,q.jsx)(Gd,{children:t.map(e=>{let t=oa(v,e.path);return(0,q.jsxs)(Kd,{$selected:k===e.path,onClick:t=>{j(e.path)||(e.isDirectory?o(e.path,pi(t)):ir(e.path))},onDoubleClick:()=>m?.(e.path),title:e.path,type:`button`,children:[t&&v.useIcons?(0,q.jsx)(Rc,{place:t,size:15}):(0,q.jsx)(nl,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,q.jsxs)(qd,{children:[(0,q.jsx)(`strong`,{children:t?.name||e.name}),(0,q.jsx)(Wd,{children:e.path})]})]},e.path)})})},H=e=>{if(t.length===0)return(0,q.jsx)(lf,{children:g(`No drives are available.`)});let n=t.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=D?.drive.name===t.name,i=r?(0,q.jsx)(df,{maxLength:32,onCancel:()=>ee(null),onChange:e=>ee({...D,label:e}),onCommit:()=>void se(),value:D?.label??``}):(0,q.jsx)(q.Fragment,{children:na(t)}),a=!r&&y&&(0,q.jsx)(af,{onClick:e=>{e.stopPropagation(),oe(t)},title:g(`Rename volume`),type:`button`,children:(0,q.jsx)($o,{size:11})}),s=(0,q.jsx)(Wd,{children:g(`{free} free of {total}`,{free:J(t.freeSpace),total:J(t.totalSize)})});return e.view===`grid`?(0,q.jsxs)(Vd,{$plain:!1,$selected:k===t.name,onClick:e=>{!r&&j(t.name)||r||o(t.name,pi(e))},onDoubleClick:()=>!r&&m?.(t.name),title:t.name,children:[(0,q.jsx)(Hd,{children:(0,q.jsx)(So,{size:18})}),(0,q.jsxs)(Ud,{children:[(0,q.jsxs)(`strong`,{children:[i,r&&ta(t),a]}),s]})]},t.name):(0,q.jsxs)(Kd,{as:r?`div`:`button`,$selected:k===t.name,onClick:r?void 0:e=>{j(t.name)||o(t.name,pi(e))},onDoubleClick:r?void 0:()=>m?.(t.name),title:t.name,type:r?void 0:`button`,children:[(0,q.jsx)(So,{size:18}),(0,q.jsxs)(qd,{children:[(0,q.jsxs)(`strong`,{children:[i,r&&ta(t),a]}),s]}),(0,q.jsx)(Yd,{children:(0,q.jsx)(Xd,{$used:n,$tone:Zi(n)})})]},t.name)});return e.view===`grid`?(0,q.jsx)(Bd,{children:n}):(0,q.jsx)(Gd,{children:n})},_e=e=>{switch(e.kind){case`quick`:{let t=ge(e);return!y&&t.length===0?(0,q.jsx)(lf,{children:g(`No folders in this Quick access panel yet.`)}):e.view===`grid`?(0,q.jsxs)(Bd,{children:[t.map(t=>(0,q.jsxs)(Vd,{$plain:y,$selected:k===t.path,...B(e,t.path),onClick:e=>{!y&&!j(t.path)&&o(t.path,pi(e))},onDoubleClick:()=>!y&&m?.(t.path),title:t.path,children:[y&&(0,q.jsx)(rf,{onClick:n=>{n.stopPropagation(),he(e,t.path)},title:g(`Remove from Quick access`),type:`button`,children:(0,q.jsx)(Io,{size:11})}),(0,q.jsxs)(tf,{children:[y?(0,q.jsx)(nf,{onClick:e=>{e.stopPropagation(),w(P(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:g(`Change icon`),type:`button`,children:(0,q.jsx)(Hd,{children:(0,q.jsx)(Rc,{place:t})})}):(0,q.jsx)(Hd,{children:(0,q.jsx)(Rc,{place:t})}),P(t.path)&&(0,q.jsx)(xd,{onPick:e=>void F(t.path,e),value:x?.placeIcons?.[t.path]??t.icon})]}),(0,q.jsxs)(Ud,{children:[O?.path===t.path?(0,q.jsx)(`strong`,{children:(0,q.jsx)(df,{onCancel:()=>te(null),onChange:e=>te({path:t.path,name:e}),onCommit:()=>void ae(t.path,O?.name??``),value:O?.name??``})}):(0,q.jsxs)(`strong`,{children:[t.name,y&&(0,q.jsx)(af,{onClick:e=>{e.stopPropagation(),w(null),te({path:t.path,name:t.name})},title:g(`Rename folder`),type:`button`,children:(0,q.jsx)($o,{size:11})})]}),(0,q.jsx)(Wd,{children:t.path})]})]},t.path)),y&&(0,q.jsxs)(Jd,{onClick:()=>void me(e),title:g(`Pin a folder here`),type:`button`,children:[(0,q.jsx)(Hd,{children:(0,q.jsx)(Eo,{size:15})}),(0,q.jsxs)(Ud,{children:[(0,q.jsx)(`strong`,{children:g(`Add folder`)}),(0,q.jsx)(Wd,{children:g(`Pin a directory here`)})]})]})]}):(0,q.jsxs)(Gd,{children:[t.map(t=>(0,q.jsxs)(Kd,{$selected:k===t.path,...B(e,t.path),onClick:e=>{!y&&!j(t.path)&&o(t.path,pi(e))},onDoubleClick:()=>!y&&m?.(t.path),title:t.path,type:`button`,children:[(0,q.jsxs)(tf,{children:[y?(0,q.jsx)(nf,{onClick:e=>{e.stopPropagation(),w(P(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:g(`Change icon`),type:`button`,children:(0,q.jsx)(Rc,{place:t,size:15})}):(0,q.jsx)(Rc,{place:t,size:15}),P(t.path)&&(0,q.jsx)(xd,{onPick:e=>void F(t.path,e),value:x?.placeIcons?.[t.path]??t.icon})]}),(0,q.jsxs)(qd,{children:[O?.path===t.path?(0,q.jsx)(`strong`,{children:(0,q.jsx)(df,{onCancel:()=>te(null),onChange:e=>te({path:t.path,name:e}),onCommit:()=>void ae(t.path,O?.name??``),value:O?.name??``})}):(0,q.jsxs)(`strong`,{children:[t.name,y&&(0,q.jsx)(af,{onClick:e=>{e.stopPropagation(),w(null),te({path:t.path,name:t.name})},title:g(`Rename folder`),type:`button`,children:(0,q.jsx)($o,{size:11})})]}),(0,q.jsx)(Wd,{children:t.path})]}),y&&(0,q.jsx)(rf,{$inline:!0,onClick:n=>{n.stopPropagation(),he(e,t.path)},title:g(`Remove from Quick access`),type:`button`,children:(0,q.jsx)(Io,{size:11})})]},t.path)),y&&(0,q.jsxs)(Jd,{$row:!0,onClick:()=>void me(e),title:g(`Pin a folder here`),type:`button`,children:[(0,q.jsx)(Eo,{size:15}),(0,q.jsxs)(qd,{children:[(0,q.jsx)(`strong`,{children:g(`Add folder`)}),(0,q.jsx)(Wd,{children:g(`Pin a directory here`)})]})]})]})}case`frequent`:return(0,q.jsx)(pf,{mode:e.view,onOpen:o,onPick:m,onSelectionChange:h,version:a});case`recent`:return V(e);case`drives`:return H(e);default:return(0,q.jsx)(mf,{mode:e.view,onOpen:o,onPick:m,onSelectionChange:h,openOnSingleClick:x?.openOnSingleClick??!1,path:e.path??i,showCheckboxes:x?.showCheckboxes??!0,visibilityVersion:f})}};return(0,q.jsxs)(wd,{children:[!p&&(0,q.jsxs)(Td,{children:[(0,q.jsx)(Ed,{role:`group`,title:g(`Columns`),children:[1,2,3,4,5].map(e=>(0,q.jsx)(Dd,{$active:ce===e,onClick:()=>void I({overviewColumns:e}),title:Yi(g,e,`1 column`,`{count} columns`),type:`button`,children:e},e))}),y&&(0,q.jsxs)(kd,{children:[(0,q.jsxs)(Od,{onClick:()=>E(e=>!e),onPointerDown:e=>e.stopPropagation(),title:g(`Add a panel`),type:`button`,children:[(0,q.jsx)(Eo,{size:12}),g(`Add panel ▾`)]}),T&&(0,q.jsx)(Ad,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`folder`].map(e=>(0,q.jsx)(jd,{onClick:()=>{E(!1),R(e)},type:`button`,children:g(e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:`Folder…`)},e))})]}),(0,q.jsxs)(Od,{onClick:()=>{b(e=>!e),E(!1),w(null),te(null),ee(null)},title:g(y?`Done`:`Edit`),type:`button`,children:[y?(0,q.jsx)(Fo,{size:13}):(0,q.jsx)($o,{size:13}),g(y?`Done`:`Edit`)]})]}),ne&&(0,q.jsx)(cf,{children:ne}),(0,q.jsx)(Md,{$columns:ce,children:M.map(e=>{let t=N.indexOf(e.id);return(0,q.jsxs)(Nd,{children:[(0,q.jsxs)(Pd,{children:[(0,q.jsxs)(Fd,{children:[(0,q.jsxs)(tf,{children:[y?(0,q.jsx)(nf,{onClick:()=>w(ie(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:g(`Change icon`),type:`button`,children:(0,q.jsx)(Lc,{panel:e,size:15})}):(0,q.jsx)(Lc,{panel:e,size:15}),ie(e.id)&&(0,q.jsx)(xd,{onPick:t=>L(e.id,t),value:e.icon})]}),y?(0,q.jsx)(Rd,{defaultValue:e.title,onBlur:t=>ue(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,q.jsx)(Ld,{children:g(e.title)})]}),(0,q.jsxs)(Id,{children:[!y&&e.kind===`recent`&&(0,q.jsx)(Od,{onClick:()=>void Cr().then(c),title:g(`Clear`),type:`button`,children:g(`Clear`)}),!y&&e.kind===`frequent`&&(0,q.jsx)(Od,{onClick:()=>void wr().then(()=>u?.()),title:g(`Clear the frequent list`),type:`button`,children:g(`Clear`)}),!y&&(e.kind===`home`||e.kind===`folder`)&&(0,q.jsx)(Od,{onClick:()=>o(e.path??i),title:g(`Open folder`),type:`button`,children:g(`Open`)}),y&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(zd,{$active:e.pinned,onClick:()=>fe(e.id),title:e.pinned?g(`Unpin from the sidebar`):g(`Pin to the sidebar`),type:`button`,children:(0,q.jsx)(jo,{size:12})}),(0,q.jsx)(zd,{$active:e.view===`list`,onClick:()=>de(e.id,`list`),title:g(`List`),type:`button`,children:(0,q.jsx)(Mo,{size:13})}),(0,q.jsx)(zd,{$active:e.view===`grid`,onClick:()=>de(e.id,`grid`),title:g(`Grid`),type:`button`,children:(0,q.jsx)(Z,{size:13})}),(0,q.jsx)(zd,{disabled:t===0,onClick:()=>le(e.id,-1),title:g(`Move up`),type:`button`,children:(0,q.jsx)(wo,{size:12})}),(0,q.jsx)(zd,{disabled:t===N.length-1,onClick:()=>le(e.id,1),title:g(`Move down`),type:`button`,children:(0,q.jsx)(wo,{size:12})}),(0,q.jsx)(zd,{onClick:()=>pe(e.id),title:g(`Remove panel`),type:`button`,children:(0,q.jsx)(Io,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?_e(e):(0,q.jsx)(Qd,{children:_e(e)})]},e.id)})})]})}function df({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=qn();return(0,q.jsxs)(of,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,q.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,q.jsx)(sf,{onClick:r,title:a(`Cancel`),type:`button`,children:(0,q.jsx)(Io,{size:11})}),(0,q.jsx)(sf,{$apply:!0,onClick:n,title:a(`Rename volume`),type:`button`,children:(0,q.jsx)(Fo,{size:12})})]})}function ff(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}function pf({mode:e,onOpen:t,onPick:n,onSelectionChange:r,version:i}){let a=qn(),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(null),u=aa(),d=e=>n?(l(e),r?.([e]),!0):!1;if((0,_.useEffect)(()=>{xr().then(s,()=>s([]))},[i]),!o)return(0,q.jsx)(lf,{children:a(`Reading…`)});if(o.length===0)return(0,q.jsx)(lf,{children:a(`Folders you open often show up here.`)});let f=e=>Yi(a,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path});return e===`grid`?(0,q.jsx)(Bd,{children:o.map(e=>{let r=oa(u,e.path);return(0,q.jsxs)(Vd,{$plain:!1,$selected:c===e.path,onClick:n=>{d(e.path)||t(e.path,pi(n))},onDoubleClick:()=>n?.(e.path),title:e.path,children:[(0,q.jsx)(Hd,{children:r&&u.useIcons?(0,q.jsx)(Rc,{place:r,size:18}):(0,q.jsx)(nl,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,q.jsxs)(Ud,{children:[(0,q.jsx)(`strong`,{children:r?.name||e.name}),(0,q.jsx)(Wd,{children:f(e)})]})]},e.path)})}):(0,q.jsx)(Gd,{children:o.map(e=>{let r=oa(u,e.path);return(0,q.jsxs)(Kd,{$selected:c===e.path,onClick:n=>{d(e.path)||t(e.path,pi(n))},onDoubleClick:()=>n?.(e.path),title:e.path,type:`button`,children:[r&&u.useIcons?(0,q.jsx)(Rc,{place:r,size:15}):(0,q.jsx)(nl,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,q.jsxs)(qd,{children:[(0,q.jsx)(`strong`,{children:r?.name||e.name}),(0,q.jsx)(Wd,{children:f(e)})]})]},e.path)})})}function mf({path:e,mode:t,onOpen:n,onPick:r,onSelectionChange:i,showCheckboxes:a,openOnSingleClick:o,visibilityVersion:s}){let c=qn(),[l,u]=(0,_.useState)(null),[d,f]=(0,_.useState)(null),p=aa();return(0,_.useEffect)(()=>{e&&(u(null),ar(e).then(u,()=>u(null)))},[e,s]),(0,_.useEffect)(()=>{if(K.available)return K.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&n.data.path.replace(/[\\\\/]+$/,``).toLowerCase()===e.replace(/[\\\\/]+$/,``).toLowerCase()&&ar(e,!1).then(u,()=>void 0)})},[e]),l?t===`list`?(0,q.jsx)(Zd,{children:(0,q.jsx)(Pl,{error:null,listing:l,loading:!1,onOpen:r??n,onOpenFile:r??(e=>void ir(e)),onSelectionChange:i,onSort:()=>void 0,openOnSingleClick:o,enableShortcuts:!1,showCheckboxes:a,showDetails:!1,showImages:!1,view:{...tr,columns:nr.columns??[]}})}):(0,q.jsx)(Qd,{children:l.entries.length===0?(0,q.jsx)(lf,{children:c(`This folder is empty.`)}):(0,q.jsx)($d,{children:l.entries.map(e=>{let t=oa(p,e.fullPath);return(0,q.jsxs)(ef,{$selected:d===e.fullPath,onClick:t=>{r?(f(e.fullPath),i?.([e.fullPath])):e.isDirectory?n(e.fullPath,pi(t)):ir(e.fullPath)},onDoubleClick:()=>r?.(e.fullPath),title:e.name,type:`button`,children:[t&&p.useIcons?(0,q.jsx)(Rc,{place:t,size:16}):(0,q.jsx)(nl,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,q.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,q.jsx)(lf,{children:c(`Reading…`)})}function hf({path:e,label:t,icon:n,focusToken:r,onNavigate:i}){let a=qn(),o=aa(),[s,c]=(0,_.useState)(!1),[l,u]=(0,_.useState)(``),[d,f]=(0,_.useState)([]),[p,m]=(0,_.useState)(0),[h,g]=(0,_.useState)(null),v=(0,_.useRef)(null),y=(0,_.useRef)(null),b=(0,_.useRef)(0);(0,_.useEffect)(()=>{s||u(e.replace(/\\/g,`/`))},[e,s]),(0,_.useEffect)(()=>{r&&r!==b.current&&(b.current=r,u(e.replace(/\\/g,`/`)),c(!0))},[r,e]),(0,_.useEffect)(()=>{s&&v.current?.select()},[s]),(0,_.useEffect)(()=>{if(!s)return;let e=()=>c(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[s]);let x=()=>{u(e.replace(/\\/g,`/`)),c(!0)},S=()=>{let t=l.trim();c(!1),t.length>0&&t!==e&&i(t)};(0,_.useEffect)(()=>{if(!s){f([]);return}let e=vf(l);if(!e){f([]);return}let t=!1,n=window.setTimeout(()=>{ar(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));f(i),m(0)},()=>{t||f([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[l,s]);let C=e=>{c(!1),i(e.path)};if((0,_.useLayoutEffect)(()=>{if(!s){g(null);return}let e=()=>{let e=y.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);g({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[s]),s)return(0,q.jsxs)(wf,{onPointerDown:e=>e.stopPropagation(),ref:y,children:[(0,q.jsxs)(Of,{children:[(0,q.jsx)(`input`,{onChange:e=>u(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&d.length>0)e.preventDefault(),m(e=>(e+1)%d.length);else if(e.key===`ArrowUp`&&d.length>0)e.preventDefault(),m(e=>(e-1+d.length)%d.length);else if(e.key===`Tab`&&d.length>0){e.preventDefault();let t=d[Math.min(p,d.length-1)];u(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?d.length>0?C(d[Math.min(p,d.length-1)]):S():e.key===`Escape`&&(d.length>0?f([]):c(!1))},ref:v,spellCheck:!1,value:l}),(0,q.jsx)(kf,{onClick:()=>c(!1),title:a(`Cancel`),type:`button`,children:(0,q.jsx)(Io,{size:12})}),(0,q.jsx)(kf,{$apply:!0,onClick:S,onPointerDown:e=>e.stopPropagation(),title:a(`Open this path`),type:`button`,children:(0,q.jsx)(Fo,{size:14})})]}),d.length>0&&h&&(0,ws.createPortal)((0,q.jsx)(Tf,{onPointerDown:e=>e.stopPropagation(),style:{left:h.left,top:h.top,width:h.width},children:d.map((e,t)=>(0,q.jsxs)(Ef,{$active:t===p,onClick:()=>C(e),onMouseEnter:()=>m(t),type:`button`,children:[(0,q.jsx)(nl,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,q.jsx)(Df,{children:e.name})]},e.path))}),document.body)]});let w=t?[{label:t,path:e,icon:n}]:_f(e,o.places);return(0,q.jsx)(yf,{onClick:x,title:a(`Click to type a path`),children:w.map((t,n)=>(0,q.jsxs)(bf,{$last:n===w.length-1,children:[n>0&&(0,q.jsx)(Sf,{children:(0,q.jsx)(ko,{size:9})}),(0,q.jsxs)(Cf,{onClick:n=>{n.stopPropagation(),t.path!==e&&i(t.path)},type:`button`,children:[t.place?(0,q.jsx)(xf,{children:(0,q.jsx)(Rc,{place:t.place,size:13})}):t.icon&&(0,q.jsx)(xf,{children:t.icon}),t.label]})]},t.path))})}function gf(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function _f(e,t){let n=gf(e),r=e=>e.replace(/[\\/]+$/,``).toLowerCase(),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>r(t.path)===r(e.path));t>i&&(i=t,a=e)}return a&&i>=0&&n.splice(0,i+1,{label:a.name,path:n[i].path,place:a}),n}function vf(e){if(e.toLowerCase().startsWith(`yafm://`))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var yf=G.div`
    display: flex;
    align-items: center;
    min-width: 0;
    flex: 1;
    height: 32px;
    padding: 0 10px;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    overflow: hidden;
    cursor: text;
    transition: border-color 130ms ease, background 130ms ease, box-shadow 130ms ease;

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-input);
        box-shadow: inset 0 0 0 1px rgba(var(--accent-secondary-rgb), 0.08);
    }
`,bf=G.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,xf=G.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Sf=G.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,Cf=G.button`
    display: inline-flex;
    align-items: center;
    padding: 4px 6px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: inherit;
    font: inherit;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: -1px;
    }
`,wf=G.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,Tf=G.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${Ts}
    animation: yafm-path-in 130ms cubic-bezier(0.22, 1, 0.36, 1);
    transform-origin: top left;

    @keyframes yafm-path-in {
        from {
            opacity: 0;
            transform: translateY(-4px) scale(0.99);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
`,Ef=G.button`
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 6px 8px;
    border: 0;
    border-radius: var(--radius-sm);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`transparent`};
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;
    text-align: left;
    cursor: pointer;
    transition: background 100ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.14);
    }
`,Df=G.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Of=G.div`
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1;
    min-width: 0;
    height: 32px;
    padding: 0 4px 0 10px;
    border: 1px solid var(--border-color-focus);
    border-radius: var(--radius-md);
    background: var(--bg-input);
    box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);

    input {
        flex: 1;
        min-width: 0;
        border: 0;
        outline: 0;
        background: transparent;
        color: var(--text-primary);
        font-family: var(--font-mono);
        font-size: 12px;
    }
`,kf=G.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
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
`;function Af({places:e,drives:t,recent:n,recentLimit:r,currentPath:i,activeKind:a,homePath:o=``,version:s=0,historyVersion:c=0,hiddenViews:l=[],onNavigate:u,onOpenView:d}){let[f,p]=(0,_.useState)([]),m=qn(),[h,g]=(0,_.useState)(null),v=aa();(0,_.useEffect)(()=>{Or().then(e=>{g(e),p(Fc(e).filter(e=>e.pinned))},()=>{g(null),p([])})},[s]);let y=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>If(e.path,t));return{name:h?.placeNames?.[t]??n?.name??(Qi(t)||t),path:t,kind:`folder`,icon:n?.icon??h?.placeIcons?.[t]??null}}),b=a===`files`;return(0,q.jsxs)(Lf,{children:[(0,q.jsxs)(Rf,{children:[!l.includes(`home`)&&(0,q.jsxs)(Uf,{$active:a===`home`,onClick:()=>d(`home`),title:m(`Overview`),type:`button`,children:[(0,q.jsx)(Qo,{}),(0,q.jsx)(Gf,{children:m(`Overview`)})]}),!l.includes(`recycle`)&&(0,q.jsxs)(Uf,{$active:a===`recycle`,onClick:()=>d(`recycle`),title:m(`Recycle Bin`),type:`button`,children:[(0,q.jsx)(Po,{}),(0,q.jsx)(Gf,{children:m(`Recycle Bin`)})]}),!l.includes(`gallery`)&&(0,q.jsxs)(Uf,{$active:a===`gallery`,onClick:()=>d(`gallery`),title:m(`Gallery`),type:`button`,children:[(0,q.jsx)(Bo,{}),(0,q.jsx)(Gf,{children:m(`Gallery`)})]})]}),f.map(e=>(0,q.jsxs)(Bf,{children:[(0,q.jsxs)(Uf,{as:`div`,$active:!1,children:[(0,q.jsx)(Wf,{children:(0,q.jsx)(Lc,{panel:e,size:16})}),(0,q.jsx)(Gf,{children:m(e.title)})]}),(0,q.jsx)(Vf,{children:(0,q.jsxs)(Hf,{children:[e.kind===`quick`&&y(e).map(e=>(0,q.jsxs)(Uf,{$active:b&&If(i,e.path),onClick:t=>u(e.path,pi(t)),title:e.path,type:`button`,children:[(0,q.jsx)(Rc,{place:e}),(0,q.jsx)(Gf,{children:e.name})]},e.path)),e.kind===`recent`&&n.slice(0,r).map(e=>{let t=oa(v,e.path);return(0,q.jsxs)(Uf,{$active:b&&If(i,e.path),onClick:t=>e.isDirectory?u(e.path,pi(t)):void ir(e.path),title:e.path,type:`button`,children:[t&&v.useIcons?(0,q.jsx)(Rc,{place:t}):(0,q.jsx)(nl,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,q.jsx)(Gf,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,q.jsx)(Nf,{historyVersion:c,onNavigate:u}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,q.jsxs)(Uf,{$active:b&&If(i,e.name),onClick:t=>u(e.name,pi(t)),title:e.name,type:`button`,children:[(0,q.jsx)(So,{}),(0,q.jsxs)(Gf,{children:[na(e),(0,q.jsxs)(Kf,{children:[J(e.freeSpace),` free`]}),(0,q.jsx)(qf,{children:(0,q.jsx)(Jf,{$used:t,$tone:Zi(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,q.jsx)(Pf,{onNavigate:u,path:e.path||o})]})})]},e.id)),!l.includes(`settings`)&&(0,q.jsx)(zf,{children:(0,q.jsxs)(Uf,{$active:a===`settings`,onClick:()=>d(`settings`),title:m(`Settings`),type:`button`,children:[(0,q.jsx)(Ao,{}),(0,q.jsx)(Gf,{children:m(`Settings`)})]})})]})}var jf=10,Mf=40;function Nf({historyVersion:e=0,onNavigate:t}){let n=qn(),[r,i]=(0,_.useState)(null),a=aa();return(0,_.useEffect)(()=>{xr().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=oa(a,e.path);return(0,q.jsxs)(Uf,{$active:!1,onClick:n=>t(e.path,pi(n)),title:Yi(n,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,q.jsx)(Rc,{place:r}):(0,q.jsx)(nl,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,q.jsx)(Gf,{children:r?.name||e.name})]},e.path)})}function Pf({path:e,onNavigate:t}){let[n,r]=(0,_.useState)(null);(0,_.useEffect)(()=>{e&&(r(null),ar(e,!1).then(r,()=>r(null)))},[e]),(0,_.useEffect)(()=>{if(e&&K.available)return K.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&If(n.data.path,e)&&ar(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,jf),o=i.filter(e=>!e.isDirectory).slice(0,Mf);return(0,q.jsxs)(q.Fragment,{children:[a.map(e=>(0,q.jsx)(Ff,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,q.jsx)(Ff,{entry:e,onNavigate:t},e.fullPath))]})}function Ff({entry:e,onNavigate:t}){let n=aa(),r=oa(n,e.fullPath);return(0,q.jsxs)(Uf,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,pi(n)):void ir(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,q.jsx)(Rc,{place:r}):(0,q.jsx)(nl,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,q.jsx)(Gf,{children:r?.name||e.name})]})}function If(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}var Lf=G.aside`
    position: absolute;
    z-index: 20;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 52px;
    padding: 10px 9px;
    overflow: hidden;
    background: rgba(var(--bg-rgb), 0.78);
    border-right: 1px solid var(--border-color);
    backdrop-filter: blur(16px) saturate(115%);
    -webkit-backdrop-filter: blur(16px) saturate(115%);
    transition: width 150ms ease, padding 150ms ease, box-shadow 150ms ease, background 150ms ease;

    &::-webkit-scrollbar {
        display: none;
    }

    &:hover {
        width: 224px;
        padding: 10px 10px;
        background: rgba(var(--bg-rgb), 0.90);
        box-shadow: 14px 0 36px rgba(0, 0, 0, 0.45), 0 0 28px rgba(var(--accent-secondary-rgb), 0.06);
        overflow-y: auto;
        scrollbar-width: none;
    }

    &:not(:hover) ${()=>Kf},
    &:not(:hover) ${()=>qf} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,Rf=G.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,zf=G(Rf)`
    margin-top: auto;
`,Bf=G.div`
    display: flex;
    flex-direction: column;
`,Vf=G.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${Lf}:hover ${Bf}:hover > & {
        grid-template-rows: 1fr;
    }
`,Hf=G.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-height: 0;
    max-height: 40vh;
    padding-left: 10px;
    overflow-y: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        width: 0;
    }
`,Uf=G.button`
    position: relative;
    display: flex;
    align-items: center;
    gap: 9px;
    width: 100%;
    padding: 7px 8px;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 12.5px;
    text-align: left;
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease, transform 130ms ease;

    &::before {
        content: "";
        position: absolute;
        left: -1px;
        top: 50%;
        width: 2px;
        height: 0;
        border-radius: 2px;
        background: var(--accent-primary);
        transform: translateY(-50%);
        transition: height 160ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    ${({$active:e})=>e&&`&::before { height: 56%; }`}

    svg {
        flex-shrink: 0;
        color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
        transition: color 130ms ease, transform 160ms cubic-bezier(0.22, 1, 0.36, 1);
        transform: scale(${({$active:e})=>e?1.08:1});
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.08);
        border-color: var(--border-color);
        color: var(--text-primary);

        svg {
            transform: scale(1.08);
        }
    }

    &:active {
        transform: scale(0.99);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,Wf=G.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;

    img {
        width: 16px;
        height: 16px;
        object-fit: contain;
    }
`,Gf=G.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Kf=G.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,qf=G.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Jf=G.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`;function Yf({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,onCancel:o,onSelect:s}){let c=qn(),l=t===`file`,u=r??[],[d,f]=(0,_.useState)(e),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)(!0),[v,y]=(0,_.useState)(null),[b,x]=(0,_.useState)(()=>new Set),[S,C]=(0,_.useState)(a??[]),[w,T]=(0,_.useState)([]),[E,D]=(0,_.useState)([]),[ee,O]=(0,_.useState)([]),[te,ne]=(0,_.useState)([]),[re,k]=(0,_.useState)(``),[A,j]=(0,_.useState)(u.length===0),[M,N]=(0,_.useState)(`files`),[ie,P]=(0,_.useState)(0),[F,ae]=(0,_.useState)(Pi),[oe,se]=(0,_.useState)(0),[ce,I]=(0,_.useState)(0),[le,ue]=(0,_.useState)(null);(0,_.useEffect)(()=>{a?C(a):ur().then(C,()=>C([]))},[a]),(0,_.useEffect)(()=>{dr().then(T,()=>T([])),br().then(D,()=>D([]))},[]),(0,_.useEffect)(()=>{let e=!0;return g(!0),y(null),x(new Set),k(l?``:Qi(d)),ar(d||void 0,!1).then(t=>{e&&(m(t),f(t.path),k(l?``:Qi(t.path)),g(!1))},t=>{e&&(y(t instanceof Error?t.message:String(t)),g(!1))}),()=>{e=!1}},[d,ie,l]),(0,_.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),ae(e=>({...e,open:!0})),se(e=>e+1);return}if(e.key===`Escape`){F.open?(ae(e=>({...e,open:!1,query:``})),I(0)):o();return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||ve()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)});let de=e=>{let t=e.trim();t.length!==0&&ea(t)!==ea(d)&&(O(e=>[...e,d]),ne([]),N(`files`),f(t))},fe=()=>{let e=ee.at(-1);e!==void 0&&(O(e=>e.slice(0,-1)),ne(e=>[d,...e]),f(e))},pe=()=>{let e=te[0];e!==void 0&&(ne(e=>e.slice(1)),O(e=>[...e,d]),f(e))},L=p?.path??d,R=p?.parent??(d?$i(d):null);(0,_.useEffect)(()=>{K.available&&L&&K.send({type:`fs.watch`,payload:{paths:[L]}})},[L]),(0,_.useEffect)(()=>{if(K.available&&L)return K.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&ea(t.data.path)===ea(L)&&ar(L,!1).then(e=>{m(e);let t=new Set(e.entries.map(e=>e.fullPath));x(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[L]);let me=(p?.entries??[]).filter(e=>e.isDirectory||l&&(A||u.length===0||u.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),he=p?{...p,entries:me}:null,z=F.open&&F.query.length>0,B=(0,_.useMemo)(()=>z?me.filter(e=>Ui(e.name,F)).map(e=>e.fullPath):[],[z,me,F]);(0,_.useEffect)(()=>{I(0)},[F.query,F.matchCase,F.regex,p?.path]);let ge=B.length===0?-1:Math.min(ce,B.length-1),V=(0,_.useMemo)(()=>({...F,currentPath:ge>=0?B[ge]:null}),[F,ge,B]),H=re.trim(),_e=H.length>0?Zf(H)?H:Xf(L,H):null,ve=()=>{if(h||v)return;let e=n?[...b]:[...b].slice(0,1);e.length>0?s(e):_e!==null&&H!==Qi(L)?s([_e]):!l&&L&&s([L])},ye=(0,_.useCallback)(e=>{x(new Set(e)),k(e.length===1?Qi(e[0]):e.length===0&&!l?Qi(L):``)},[L,l]),be=e=>{p?.entries.find(t=>t.fullPath===e)?.isDirectory?de(e):l&&s([e])},xe=e=>k(e),Se=async e=>{let t=le;ue(null),t&&L&&(e?await Xr(L):await Yr(L)).ok&&P(e=>e+1)},Ce=le?[{label:c(`New folder`),icon:(0,q.jsx)(bo,{size:14}),onSelect:()=>void Se(!1)},{label:c(`New file`),icon:(0,q.jsx)(xo,{size:14}),onSelect:()=>void Se(!0)}]:[],we=()=>{ae(e=>({...e,open:!0})),se(e=>e+1)},Te=e=>{I(t=>B.length===0?0:(t+e+B.length)%B.length)},Ee=e=>(0,q.jsxs)(sp,{children:[(0,q.jsxs)(cp,{children:[(0,q.jsx)(lp,{children:c(l?`File name:`:`Folder:`)}),(0,q.jsx)(up,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),ve())},spellCheck:!1,value:re}),l&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(lp,{children:c(`Files of type:`)}),(0,q.jsxs)(dp,{onChange:e=>j(e.target.value===`all`),value:A?`all`:`supported`,children:[u.length>0&&(0,q.jsxs)(`option`,{value:`supported`,children:[c(`Supported files`),` (`,u.map(e=>`*${e}`).join(`;`),`)`]}),(0,q.jsxs)(`option`,{value:`all`,children:[c(`All files`),` (*.*)`]})]})]})]}),(0,q.jsxs)(fp,{children:[(0,q.jsx)(pp,{onClick:o,type:`button`,children:c(`Cancel`)}),(0,q.jsxs)(pp,{$primary:!0,disabled:h||v!==null||l&&b.size===0&&H.length===0,onClick:ve,type:`button`,children:[(0,q.jsx)(Fo,{size:12}),c(l?`Select this file`:`Select this folder`)]})]})]}),De=(0,q.jsxs)($f,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,q.jsxs)(ep,{children:[(0,q.jsxs)(tp,{children:[(0,q.jsx)(bo,{size:16}),c(l?`Choose a file`:`Choose a folder`)]}),(0,q.jsx)(np,{onClick:o,title:c(`Cancel`),type:`button`,children:(0,q.jsx)(Io,{size:12})})]}),(0,q.jsxs)(rp,{children:[(0,q.jsx)(Af,{activeKind:M===`overview`?`home`:M===`gallery`?`gallery`:`files`,currentPath:L,drives:w,hiddenViews:l?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:S.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>de(e),onOpenView:e=>{e===`home`?(x(new Set),k(l?``:Qi(L)),N(`overview`)):e===`gallery`&&l&&(x(new Set),k(``),N(`gallery`))},places:S,recent:E,recentLimit:10}),(0,q.jsx)(ip,{children:M===`overview`?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(uf,{drives:w,historyVersion:0,homePath:S.find(e=>e.kind===`home`)?.path??``,onOpen:e=>de(e),onPick:e=>s([e]),onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:ye,places:S,readOnly:!0,recent:E,recentLimit:10,visibilityVersion:0}),Ee(k)]}):M===`gallery`?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(id,{onPick:e=>s([e]),onSelectionChange:ye,view:{...tr,columns:[]}}),Ee(k)]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(ap,{children:[(0,q.jsx)(op,{disabled:ee.length===0,onClick:fe,title:c(`Back`),type:`button`,children:(0,q.jsx)(Do,{})}),(0,q.jsx)(op,{disabled:te.length===0,onClick:pe,title:c(`Forward`),type:`button`,children:(0,q.jsx)(Oo,{})}),(0,q.jsx)(op,{disabled:!R,onClick:()=>R&&de(R),title:c(`Up one level`),type:`button`,children:(0,q.jsx)(wo,{})}),(0,q.jsx)(hf,{onNavigate:de,path:L}),(0,q.jsx)(op,{onClick:e=>ue({x:e.clientX,y:e.clientY}),title:c(`New folder or file`),type:`button`,children:(0,q.jsx)(Eo,{})}),(0,q.jsx)(op,{onClick:we,title:c(`Search`),type:`button`,children:(0,q.jsx)(Co,{})})]}),F.open&&(0,q.jsx)(qu,{current:ge,focusToken:oe,matchCase:F.matchCase,mode:F.mode,onClose:()=>{ae(e=>({...e,open:!1,query:``})),I(0)},onMatchCase:()=>ae(e=>({...e,matchCase:!e.matchCase})),onMode:()=>ae(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Te(1),onPrevious:()=>Te(-1),onQuery:e=>ae(t=>({...t,query:e})),onRegex:()=>ae(e=>({...e,regex:!e.regex})),query:F.query,regex:F.regex,total:B.length}),(0,q.jsx)(Pl,{allowBackgroundMenu:!0,enableShortcuts:!1,error:v,find:V,loading:h,listing:he,onOpen:be,onOpenFile:be,onRefresh:()=>P(e=>e+1),onSelectionChange:ye,onSort:()=>void 0,refreshToken:ie,showCheckboxes:!0,showDetails:!1,showImages:!1,singleSelect:!n,view:{...tr,columns:[`type`,`size`,`modified`]}}),Ee(xe)]})})]}),le&&(0,q.jsx)(Rs,{items:Ce,onClose:()=>ue(null),x:le.x,y:le.y})]});return i?De:(0,ws.createPortal)((0,q.jsx)(Qf,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:De}),document.body)}function Xf(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Zf(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Qf=G.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${Ls}
`,$f=G.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:Ts}
    ${({$inline:e})=>e?``:Ms}
`,ep=G.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,tp=G.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,np=G.button`
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
`,rp=G.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,ip=G.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,ap=G.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,op=G.button`
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition: color 130ms ease, border-color 130ms ease, background 130ms ease, transform 130ms ease;

    &:hover:not(:disabled) {
        color: var(--text-primary);
        border-color: var(--border-color-hover);
        background: rgba(var(--accent-rgb), 0.10);
        transform: translateY(-1px);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.32;
        cursor: default;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,sp=G.footer`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,cp=G.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,lp=G.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,up=G.input`
    flex: 1;
    min-width: 0;
    height: 32px;
    padding: 0 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
        box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);
    }
`,dp=G.select`
    width: 220px;
    height: 32px;
    padding: 0 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
        box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);
    }
`,fp=G.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,pp=G.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 7px 12px;
    border: 1px solid ${({$primary:e})=>e?`transparent`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$primary:e})=>e?`var(--accent-gradient)`:`transparent`};
    color: ${({$primary:e})=>e?`#fff`:`var(--text-secondary)`};
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: ${({$primary:e})=>e?`transparent`:`var(--border-color-hover)`};
        color: ${({$primary:e})=>e?`#fff`:`var(--text-primary)`};
        filter: ${({$primary:e})=>e?`brightness(1.08)`:`none`};
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`,mp=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,q.jsx)(`path`,{d:`M4 4v6h6`})]});function hp({onOpenLocation:e,showDetails:t=!0,onShowDetails:n,videoAudio:r=!1,videoAutoplay:i=!1,platform:a}){let o=qn(),s=a===`windows`,[c,l]=(0,_.useState)([]),[u,d]=(0,_.useState)([]),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(null),[g,v]=(0,_.useState)(!0),[y,b]=(0,_.useState)(!1),[x,S]=(0,_.useState)(null),[C,w]=(0,_.useState)(!1),[T,E]=(0,_.useState)(()=>new Set),[D,ee]=(0,_.useState)(null),[O,te]=(0,_.useState)(()=>{let e=ua(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[ne,re]=(0,_.useState)(null),[k,A]=(0,_.useState)(null),[j,M]=(0,_.useState)(()=>{let e=ca(`yafm.recycle.preview.width`,320);return e>=220?e:320}),N=(0,_.useRef)(null),ie=e=>{M(e),la(`yafm.recycle.preview.width`,e)},P=(0,_.useCallback)(async()=>{v(!0),S(null);try{l(await fr(C))}catch(e){S(e instanceof Error?e.message:String(e))}finally{v(!1)}},[C]);(0,_.useEffect)(()=>{P()},[P]),(0,_.useEffect)(()=>{C||(d([]),p(!1),h(null))},[C]),(0,_.useEffect)(()=>{E(e=>{let t=new Set(c.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[c]);let F=(0,_.useMemo)(()=>{let e=new Set(c.map(e=>e.id));return[...c,...u.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=gp(e,t,O.column);return O.descending?-n:n})},[c,u,O]),ae=(0,_.useMemo)(()=>F.filter(e=>T.has(e.id)),[F,T]),oe=ae.filter(e=>e.removable&&!e.isOrphan),se=ae.filter(e=>e.removable),ce=(e,t)=>{let n=t.ctrlKey||t.metaKey;E(r=>{if(t.shiftKey&&D){let t=F.findIndex(e=>e.id===D),i=F.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(F[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),ee(e.id)},I=(0,_.useCallback)(()=>E(new Set(F.map(e=>e.id))),[F]),le=F.length>0&&F.every(e=>T.has(e.id)),ue=(0,_.useCallback)(async()=>{let e=oe.map(e=>e.id);if(e.length!==0){b(!0);try{let t=await mr(e);t.ok||window.alert(Yi(o,e.length,`Restored {done} of 1 item.`,`Restored {done} of {total} items.`,{done:t.done,total:e.length})),E(new Set),await P()}finally{b(!1)}}},[P,oe,o]),de=(0,_.useCallback)(async()=>{let e=se.map(e=>e.id);if(A(null),e.length!==0){b(!0);try{let t=await hr(e);t.ok||window.alert(Yi(o,e.length,`Deleted {done} of 1 item.`,`Deleted {done} of {total} items.`,{done:t.done,total:e.length})),E(new Set),await P()}finally{b(!1)}}},[se,P,o]),fe=async()=>{A(null),b(!0);try{await pr(C),E(new Set),await P()}finally{b(!1)}},pe=async()=>{b(!0),h(null);try{let e=await _r();if(e.cancelled){h(`Elevation was declined — nothing was read.`);return}if(e.failed){h(`The elevated helper could not produce a report. Try again.`);return}d(e.entries),p(!0)}finally{b(!1)}},L=async()=>{b(!0),A(null);try{await vr(),d([]),p(!1),h(null),await P()}finally{b(!1)}},R=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},me=e=>{navigator.clipboard.writeText(e.originalPath)},he=(e,t)=>{e.preventDefault(),t&&!T.has(t.id)&&E(new Set([t.id])),re({x:e.clientX,y:e.clientY})};(0,_.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),I()):e.key===`Delete`?(e.preventDefault(),se.length>0&&A(`delete`)):e.key===`Enter`&&oe.length>0?(e.preventDefault(),ue()):e.key===`Escape`&&(E(new Set),re(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[se.length,oe.length,ue,I]);let z=[{label:o(`Restore`),icon:(0,q.jsx)(mp,{width:14,height:14}),disabled:oe.length===0,onSelect:()=>void ue()},{label:o(`Delete permanently`),icon:(0,q.jsx)(Po,{size:14}),danger:!0,disabled:se.length===0,onSelect:()=>A(`delete`)},{label:o(`Properties`),icon:(0,q.jsx)(Ao,{size:14}),disabled:ae.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=ae;e&&gr(e.id)}},{label:o(`Open original location`),icon:(0,q.jsx)(bo,{size:14}),disabled:ae.length!==1,onSelect:()=>{let[e]=ae;e&&R(e)}},{label:o(`Copy original path`),icon:(0,q.jsx)(_s,{size:14}),disabled:ae.length!==1,onSelect:()=>{let[e]=ae;e&&me(e)}},{label:o(`Select all`),separatorBefore:!0,onSelect:I},{label:o(`Refresh`),icon:(0,q.jsx)(To,{size:14}),onSelect:()=>void P()}],B=ae.length>0?ae[0]:null,ge=B?{name:B.name,path:B.contentPath||B.originalPath,isDirectory:B.isDirectory,size:B.size,modified:B.deleted,fields:[{label:o(`Type`),value:o(vp(B))},{label:o(`Original location`),value:B.originalPath},{label:o(`Date deleted`),value:Xi(B.deleted)},{label:o(`Size`),value:B.isDirectory?`—`:J(B.size)},...B.owner?[{label:o(`Owner`),value:B.owner}]:[],{label:o(`Status`),value:B.isOrphan?o(`Metadata only`):B.removable?o(`Restorable`):o(`Other profile`)}]}:null;return(0,q.jsxs)(bp,{ref:N,onContextMenu:e=>he(e),children:[(0,q.jsxs)(xp,{children:[(0,q.jsxs)(Sp,{children:[(0,q.jsx)(Po,{size:16}),(0,q.jsx)(`span`,{children:o(`Recycle Bin`)}),(0,q.jsxs)(Cp,{children:[g?`…`:Yi(o,F.length,`1 item`,`{count} items`),T.size>0&&` · ${o(`{count} selected`,{count:T.size})}`]})]}),(0,q.jsxs)(wp,{children:[(0,q.jsx)(Ep,{$on:C,onClick:()=>w(e=>!e),title:o(`Show metadata records whose content is already gone`),type:`button`,children:o(`Orphans`)}),C&&s&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Tp,{disabled:y||f,onClick:()=>void pe(),title:o(f?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`),type:`button`,children:o(y?`Working…`:f?`Admin view loaded`:`Show all (admin)…`)}),f&&u.length>0&&(0,q.jsx)(Tp,{disabled:y,onClick:()=>A(`purge`),type:`button`,children:o(`Delete every orphan`)})]}),(0,q.jsx)(Tp,{disabled:y||oe.length===0,onClick:()=>void ue(),type:`button`,children:o(`Restore`)}),(0,q.jsx)(Tp,{$danger:!0,disabled:y||se.length===0,onClick:()=>A(`delete`),type:`button`,children:o(`Delete`)}),(0,q.jsx)(Tp,{disabled:y||F.length===0,onClick:()=>A(`empty`),type:`button`,children:o(`Empty`)}),(0,q.jsx)(Dp,{onClick:()=>void P(),title:o(`Refresh`),type:`button`,children:(0,q.jsx)(To,{size:14})})]})]}),m&&(0,q.jsx)(Jp,{children:m}),x&&(0,q.jsx)(Yp,{children:x}),!x&&!g&&F.length===0&&(0,q.jsx)(Yp,{children:o(`The recycle bin is empty.`)}),F.length>0&&(0,q.jsxs)(qp,{children:[(0,q.jsxs)(Op,{children:[(0,q.jsxs)(Ap,{children:[(0,q.jsx)(Ip,{$checked:le,$partial:!le&&T.size>0,onClick:()=>le?E(new Set):I(),title:o(le?`Select none`:`Select all`),type:`button`,children:le?(0,q.jsx)(Fo,{size:9}):T.size>0&&(0,q.jsx)(Lp,{})}),(0,q.jsxs)(jp,{onClick:()=>V(`name`),type:`button`,children:[o(`Name`),_p(O,`name`)]}),(0,q.jsxs)(jp,{onClick:()=>V(`original`),type:`button`,children:[o(`Original location`),_p(O,`original`)]}),(0,q.jsxs)(jp,{onClick:()=>V(`deleted`),type:`button`,children:[o(`Date deleted`),_p(O,`deleted`)]}),(0,q.jsxs)(jp,{onClick:()=>V(`size`),type:`button`,children:[o(`Size`),_p(O,`size`)]}),(0,q.jsxs)(jp,{onClick:()=>V(`type`),type:`button`,children:[o(`Type`),_p(O,`type`)]}),(0,q.jsx)(`span`,{})]}),(0,q.jsx)(Mp,{onClick:e=>{e.target===e.currentTarget&&E(new Set)},children:F.map(e=>(0,q.jsxs)(Np,{$checked:T.has(e.id),$orphan:e.isOrphan,onClick:t=>ce(e,t),onContextMenu:t=>he(t,e),onDoubleClick:()=>{E(new Set([e.id])),ee(e.id),n?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,q.jsx)(Fp,{$checked:T.has(e.id),children:T.has(e.id)&&(0,q.jsx)(Fo,{size:9})}),(0,q.jsxs)(Rp,{children:[(0,q.jsx)(yp,{entry:e}),(0,q.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,q.jsx)(Kp,{children:o(`metadata only`)}),e.owner&&(0,q.jsx)(Kp,{$other:!0,children:o(`other profile`)})]}),(0,q.jsx)(Bp,{children:e.originalPath}),(0,q.jsx)(Vp,{children:Xi(e.deleted)}),(0,q.jsx)(Hp,{children:e.isDirectory?`—`:J(e.size)}),(0,q.jsx)(Up,{children:o(vp(e))}),(0,q.jsxs)(Wp,{children:[e.removable&&!e.isOrphan&&(0,q.jsx)(Gp,{onClick:t=>{t.stopPropagation(),mr([e.id]).then(P)},title:o(`Restore to its original folder`),type:`button`,children:(0,q.jsx)(mp,{})}),e.removable&&(0,q.jsx)(Gp,{$danger:!0,onClick:t=>{t.stopPropagation(),E(new Set([e.id])),A(`delete`)},title:e.isOrphan?o(`Remove the leftover record`):o(`Delete permanently`),type:`button`,children:(0,q.jsx)(Po,{size:13})})]})]},e.id))})]}),t&&(0,q.jsx)(sc,{emptyNote:o(`Nothing selected.`),info:ge,onWidth:ie,selectionNote:ae.length>1?Yi(o,ae.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:r,videoAutoplay:i,width:j})]}),ne&&(0,q.jsx)(Rs,{items:z,onClose:()=>re(null),x:ne.x,y:ne.y}),(0,q.jsx)(Xs,{confirmLabel:o(k===`empty`?`Empty the bin`:k===`purge`?`Delete every orphan`:`Delete`),danger:!0,message:k===`empty`?Yi(o,F.length,`Permanently delete 1 item? This cannot be undone.`,`Permanently delete {count} items? This cannot be undone.`):k===`purge`?o(`Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.`):Yi(o,se.length,`Permanently delete 1 selected item? This cannot be undone.`,`Permanently delete {count} selected items? This cannot be undone.`),onCancel:()=>A(null),onConfirm:()=>{k===`empty`?fe():k===`purge`?L():de()},open:k!==null,title:o(k===`empty`?`Empty the recycle bin`:k===`purge`?`Delete every orphan`:`Delete permanently`)})]});function V(e){te(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return da(`yafm.recycle.sort`,n),n})}}function gp(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return vp(e).localeCompare(vp(t),void 0,{sensitivity:`base`})}}function _p(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function vp(e){if(e.isDirectory)return`Folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`File`}function yp({entry:e}){let t=Ei(e.originalPath,e.isDirectory);return(0,q.jsx)(zp,{children:t?(0,q.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,q.jsx)(bo,{}):(0,q.jsx)(xo,{})})}var bp=G.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,xp=G.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,Sp=G.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,Cp=G.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,wp=G.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Tp=G.button`
    padding: 5px 10px;
    border: 1px solid ${({$danger:e})=>e?`rgba(248, 113, 113, 0.35)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: ${({$danger:e})=>e?`#fca5a5`:`var(--text-secondary)`};
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: ${({$danger:e})=>e?`rgba(248, 113, 113, 0.6)`:`var(--border-color-hover)`};
        background: var(--bg-card-hover);
        color: ${({$danger:e})=>e?`#fecaca`:`var(--text-primary)`};
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`,Ep=G(Tp)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Dp=G.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,Op=G.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,kp=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,Ap=G.div`
    display: grid;
    grid-template-columns: ${kp};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,jp=G.button`
    padding: 0;
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
    text-transform: inherit;
    text-align: left;
    cursor: pointer;

    &:hover {
        color: var(--text-primary);
    }
`,Mp=G.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,Np=G.div`
    display: grid;
    grid-template-columns: ${kp};
    gap: 14px;
    align-items: center;
    padding: 8px 12px;
    border: 1px solid ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.38)`:`transparent`};
    border-radius: var(--radius-sm);
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.1)`:`transparent`};
    font-size: 13px;
    color: var(--text-secondary);
    opacity: ${({$orphan:e})=>e?.72:1};
    cursor: default;
    user-select: none;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
        opacity: 1;
    }

    &:hover button {
        opacity: 1;
    }
`,Pp=G.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Fp=G.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,Ip=G.button`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    padding: 0;
    border: 1px solid ${({$checked:e,$partial:t})=>e||t?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e,$partial:t})=>e||t?`var(--accent-primary)`:`transparent`};
    color: #fff;
    cursor: pointer;
    transition: border-color 120ms ease, background 120ms ease;

    &:hover {
        border-color: var(--border-color-focus);
    }
`,Lp=G.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,Rp=G(Pp)`
    display: flex;
    align-items: center;
    gap: 9px;
`,zp=G.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;

    svg {
        color: var(--text-muted);
    }

    img {
        display: block;
    }
`,Bp=G(Pp)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Vp=G(Pp)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Hp=G(Pp)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Up=G(Pp)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Wp=G.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,Gp=G.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;
    opacity: 0;
    transition: opacity 120ms ease, background 120ms ease;

    svg {
        width: 13px;
        height: 13px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.7;
    }

    &:hover {
        background: ${({$danger:e})=>e?`rgba(248, 113, 113, 0.2)`:`rgba(148, 163, 184, 0.2)`};
        color: ${({$danger:e})=>e?`#fca5a5`:`var(--text-primary)`};
    }
`,Kp=G.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,qp=G.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Jp=G.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,Yp=G.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function Xp(){return K.available?(await K.request(`app.tags`)).tags:[]}async function Zp(e){return!K.available||!e?!1:(await K.request(`app.tags.delete`,{name:e})).ok}async function Qp(e,t){return!K.available||!e?[]:(await K.request(`app.tags.create`,{name:e,color:t})).tags}async function $p(e,t){return!K.available||!e?!1:(await K.request(`app.tags.color`,{name:e,color:t})).ok}async function em(e,t){return!K.available||!e||!t?!1:(await K.request(`app.tags.rename`,{oldName:e,newName:t})).ok}var tm=`#3b82f6`,nm=`#6366f1`,rm=/^#?([0-9a-f]{6})$/i;function im(e,t){if(!e)return t;let n=rm.exec(e.trim());return n?`#${n[1].toLowerCase()}`:t}function am(e){let t=rm.exec(e);if(!t)return[59,130,246];let n=Number.parseInt(t[1],16);return[n>>16&255,n>>8&255,n&255]}function om(e){let[t,n,r]=am(e).map(e=>e/255),i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2,s=i-a;if(s===0)return{hue:0,saturation:0};let c=s/(1-Math.abs(2*o-1));return{hue:((i===t?(n-r)/s%6:i===n?(r-t)/s+2:(t-n)/s+4)*60+360)%360,saturation:c*100}}function sm(e,t,n,r=1){return r===1?`hsl(${e.toFixed(1)} ${t}% ${n}%)`:`hsl(${e.toFixed(1)} ${t}% ${n}% / ${r})`}function cm(e,t,n){let r=t/100,i=n/100,a=(1-Math.abs(2*i-1))*r,o=a*(1-Math.abs(e/60%2-1)),s=i-a/2,[c,l,u]=e<60?[a,o,0]:e<120?[o,a,0]:e<180?[0,a,o]:e<240?[0,o,a]:e<300?[o,0,a]:[a,0,o];return[c,l,u].map(e=>Math.round((e+s)*255)).join(`, `)}function lm(e,t){let n=im(e,tm),r=im(t,nm),[i,a,o]=am(n),[s,c,l]=am(r),{hue:u,saturation:d}=om(n),f=Math.round(Math.min(Math.max(d*.35,6),30)),p=document.documentElement.style;p.setProperty(`--accent-primary`,n),p.setProperty(`--accent-rgb`,`${i}, ${a}, ${o}`),p.setProperty(`--accent-secondary`,r),p.setProperty(`--accent-secondary-rgb`,`${s}, ${c}, ${l}`),p.setProperty(`--border-color`,`rgba(${i}, ${a}, ${o}, 0.13)`),p.setProperty(`--border-color-hover`,`rgba(${i}, ${a}, ${o}, 0.40)`),p.setProperty(`--border-color-focus`,n),p.setProperty(`--accent-gradient`,`linear-gradient(135deg, ${n} 0%, ${r} 100%)`),p.setProperty(`--accent-glow`,`0 0 28px rgba(${i}, ${a}, ${o}, 0.28)`),p.setProperty(`--selection-bg`,`rgba(${i}, ${a}, ${o}, 0.11)`),p.setProperty(`--selection-border`,`rgba(${i}, ${a}, ${o}, 0.36)`),p.setProperty(`--bg-primary`,sm(u,f,7)),p.setProperty(`--bg-secondary`,sm(u,f,11)),p.setProperty(`--bg-card`,sm(u,f,14,.75)),p.setProperty(`--bg-card-hover`,sm(u,f,20,.85)),p.setProperty(`--bg-input`,sm(u,f,9,.75)),p.setProperty(`--bg-elevated`,sm(u,f,8,.96)),p.setProperty(`--bg-media`,sm(u,f,4)),p.setProperty(`--bg-rgb`,cm(u,f,7))}function um(){let e=qn();return(0,q.jsx)(dm,{title:e(`Always applies to every folder`),children:e(`Global`)})}var dm=G.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,fm=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`reopenTab`,label:`Reopen closed tab`,note:`Brings back the tab you closed last, folder and all.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`refresh`,label:`Refresh`,note:`Reads the current folder again.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}],pm=[{name:`Blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`Indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`Violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`Teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`Green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`Amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`Rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`Slate`,accent:`#64748b`,secondary:`#94a3b8`}],mm=`https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest`,hm=`en`,gm=`system`,_m={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},vm=[{id:`application`,label:`Application`},{id:`updates`,label:`Updates`},{id:`colors`,label:`Colors`},{id:`tags`,label:`Tags`},{id:`files-view`,label:`Files view`},{id:`shortcuts`,label:`Shortcuts`},{id:`memory`,label:`Memory`},{id:`overview`,label:`Overview`},{id:`gallery`,label:`Gallery`},{id:`icons`,label:`Icons`},{id:`extension-icons`,label:`Icons by extension`},{id:`folder-icons`,label:`Folder icons`},{id:`folder-index`,label:`Folder index`},{id:`files`,label:`Files`}],ym=`yafm.colors.recent`;function bm(){let e=ua(ym);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function xm({appInfo:e,focusSection:t,onSettingsChanged:n}){let r=qn(),[i,a]=(0,_.useState)([]),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(``),[m,h]=(0,_.useState)(`file`),[g,v]=(0,_.useState)(!1),[y,b]=(0,_.useState)(!1),[x,S]=(0,_.useState)(null),[C,w]=(0,_.useState)(!1),[T,E]=(0,_.useState)(!1),[D,ee]=(0,_.useState)(null),[O,te]=(0,_.useState)(null),[ne,re]=(0,_.useState)([]),[k,A]=(0,_.useState)(null),[j,M]=(0,_.useState)(!1),[N,ie]=(0,_.useState)(null),[P,F]=(0,_.useState)(``),[ae,oe]=(0,_.useState)(zc),[se,ce]=(0,_.useState)(bm),[I,le]=(0,_.useState)(null),[ue,de]=(0,_.useState)(null),[fe,pe]=(0,_.useState)(!1),[L,R]=(0,_.useState)(!1),[me,he]=(0,_.useState)(null),[z,B]=(0,_.useState)(vm[0].id),ge=(0,_.useRef)(null),V=(0,_.useRef)({}),H=c?.defaultView??nr,_e=c?.themePresets??[];(0,_.useEffect)(()=>{let e=ge.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){B(vm[vm.length-1].id);return}let n=t+110,r=vm[0].id;for(let{id:e}of vm){let t=V.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}B(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let ve=e=>t=>{V.current[e]=t},ye=e=>{V.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),B(e)};(0,_.useEffect)(()=>{t&&ye(t)},[t]),(0,_.useEffect)(()=>{Wn().then(e=>a(e.available),()=>a([]))},[]),(0,_.useEffect)(()=>{Pr().then(de,()=>void 0)},[]),(0,_.useEffect)(()=>{Tr().then(s,()=>s(null)),Or().then(l,()=>l(null)),zr().then(w,()=>w(!1)),Xp().then(re,()=>re([]))},[]),(0,_.useEffect)(()=>{let e=()=>void Lr().then(S,()=>S(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let be=async e=>{if(!c)return;let t={...c,...e};Object.keys(e).every(e=>t[e]===c[e])||(l(t),Si(),l(await kr(t)),n())},xe=(e,t)=>{ce(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return da(ym,i),i})},Se=im(c?.accentColor,tm),Ce=im(c?.secondaryColor,nm),we=(e,t)=>{c&&(xe(`accent`,Se),xe(`secondary`,Ce),be({accentColor:e,secondaryColor:t}))},Te=(e,t)=>{c&&(xe(e,e===`accent`?Se:Ce),be(e===`accent`?{accentColor:t}:{secondaryColor:t}))},Ee=async()=>{pe(!0),R(!1);try{de(await Fr())}catch{R(!0)}finally{pe(!1)}},De=async()=>{if(!c||!I)return;let e=I.name.trim()||`${I.accent.toUpperCase()} / ${I.secondary.toUpperCase()}`,t=[...c.themePresets,{name:e,accent:I.accent,secondary:I.secondary}];le(null),await be({themePresets:t})},Oe=async e=>{c&&await be({themePresets:c.themePresets.filter((t,n)=>n!==e)})},ke=e=>{let t=me;he(null),t&&t.role===e&&(e===`accent`?Se:Ce).toLowerCase()!==t.color.toLowerCase()&&xe(e,t.color)},Ae=async()=>{let e=P.trim();if(e&&!j){M(!0),ie(null);try{re(await Qp(e,ae)),F(``)}catch{ie(r(`Could not add the tag.`))}finally{M(!1)}}},je=async(e,t)=>{re(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await $p(e,t)||ie(r(`Could not change the tag's color.`))},Me=async e=>{if(j)return;M(!0),ie(null);let t=await Zp(e);re(await Xp()),t||ie(`"${e}" is still used by a folder whose index could not be updated.`),M(!1)},Ne=async()=>{let e=k;if(!e||j)return;let t=e.value.trim();t.length===0||t===e.name?A(null):(M(!0),ie(null),await em(e.name,t)?(re(await Xp()),A(null)):ie(`Could not rename "${e.name}".`),M(!1))},Pe=async e=>{let t=new Set(H.columns??nr.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=jl.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await be({defaultView:{...H,columns:n}})},Fe=async()=>{if(T)return;let e=!C;E(!0),ee(null);try{let t=await Br(e);w(t),l(e=>e&&{...e,linksEnabled:t}),n(),t!==e&&ee(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{ee(`The request to Windows failed. Try again.`)}finally{E(!1)}},U=async(e,t)=>{if(!c)return;let n={...c.extensionIcons};t===null?delete n[e]:n[e]=t,await be({extensionIcons:n})},Ie={...ui,...c?.shortcuts};(0,_.useEffect)(()=>{if(!O)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){te(null);return}let t=mi(e);t&&(te(null),be({shortcuts:{...Ie,[O]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[O,c]);let Le=async e=>{await be({recentLimit:Math.min(Math.max(e,0),50)})},Re=async e=>{await be({galleryRoots:e.length>0?e:null})},ze=async()=>{let e=await yd(),t=c?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await Re([...t,e])},Be=async()=>{let e=f.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await U(e,m),p(``))},Ve=async()=>{b(!0);try{let e=await yd();if(!e)return;let t=await bd([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await jr(e.replace(/[\\/][^\\/]+$/,``),Qi(e),`file:${t}`)&&(Si(),d({folder:e,icon:t}))}finally{b(!1)}};return(0,q.jsxs)(jm,{children:[(0,q.jsxs)(Mm,{ref:ge,children:[(0,q.jsxs)(Nm,{ref:ve(`application`),children:[(0,q.jsx)(Am,{note:`The build, its yafm:// links, and what reopens at launch.`,title:`Application`}),(0,q.jsxs)(Fm,{children:[(0,q.jsxs)(Q,{children:[(0,q.jsx)($,{children:r(`Version`)}),(0,q.jsx)(dh,{children:e?`v${e.version}`:`—`})]}),(0,q.jsxs)(Q,{children:[(0,q.jsx)($,{children:r(`Platform`)}),(0,q.jsx)(dh,{children:e?.platform??`—`})]}),(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:r(`Language`)}),(0,q.jsx)(lh,{children:r(`The language the interface uses. English is the default; the system option follows the operating system.`)})]}),(0,q.jsx)(sh,{children:(0,q.jsx)(Dm,{disabled:!c,onChange:e=>void be({language:e}),options:[gm,...i.length>0?i:[hm]],value:c?.language??hm})})]}),(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:r(`Open yafm:// links`)}),(0,q.jsx)(lh,{children:r(`Registers this app for yafm:// links, for the current user only. While this is on, the app repairs the entry at every launch.`)}),D&&(0,q.jsx)(uh,{children:D})]}),(0,q.jsxs)(sh,{children:[(0,q.jsx)(vh,{$on:C,children:r(C?`Active`:`Off`)}),(0,q.jsx)(yh,{$on:C,disabled:T,onClick:()=>void Fe(),title:r(C?`Stop opening yafm:// links`:`Open yafm:// links with this app`),type:`button`,children:(0,q.jsx)(bh,{})})]})]}),(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:r(`Use as the default file manager`)}),(0,q.jsx)(lh,{children:r(`Registers this app for folder opens on this account. Explorer stays available from the context menu; on Linux this sets the inode/directory default.`)})]}),(0,q.jsxs)(sh,{children:[(0,q.jsx)(vh,{$on:c?.defaultFileManager??!1,children:c?.defaultFileManager?r(`Active`):r(`Off`)}),(0,q.jsx)(yh,{$on:c?.defaultFileManager??!1,disabled:!c,onClick:()=>void be({defaultFileManager:!c?.defaultFileManager}),title:c?.defaultFileManager?r(`Stop using this app for folders`):r(`Use this app for folders`),type:`button`,children:(0,q.jsx)(bh,{})})]})]}),(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:r(`Reopen the tabs that were open`)}),(0,q.jsx)(lh,{children:r(`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`)})]}),(0,q.jsx)(yh,{$on:c?.restoreTabs??!0,disabled:!c,onClick:()=>void be({restoreTabs:!c?.restoreTabs}),type:`button`,children:(0,q.jsx)(bh,{})})]})]})]}),(0,q.jsxs)(Nm,{ref:ve(`updates`),children:[(0,q.jsx)(Am,{note:`The running build and the newest one published.`,title:`Updates`}),(0,q.jsxs)(Fm,{children:[(0,q.jsxs)(Q,{children:[(0,q.jsx)($,{children:r(`Current version`)}),(0,q.jsx)(dh,{children:e?`v${e.version}`:`—`})]}),(0,q.jsxs)(Q,{children:[(0,q.jsx)($,{children:r(`Latest version`)}),(0,q.jsx)(dh,{children:ue?`v${ue.latest}`:`—`})]}),(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:r(`Check for updates`)}),(0,q.jsx)(lh,{children:ue&&!ue.available?r(`You are on the latest version.`):r(`Reads the version file the release workflow publishes.`)})]}),(0,q.jsx)(sh,{children:(0,q.jsx)(Nh,{disabled:fe,onClick:()=>void Ee(),type:`button`,children:r(fe?`Checking…`:`Check now`)})})]}),ue?.available&&(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:r(`Version {version} is available.`,{version:ue.latest})}),(0,q.jsx)(lh,{children:r(`Download the new build from the releases page.`)})]}),(0,q.jsx)(sh,{children:(0,q.jsx)(Nh,{onClick:()=>void Ir(mm),type:`button`,children:r(`Open release page`)})})]}),L&&(0,q.jsx)(Q,{children:(0,q.jsx)(uh,{children:r(`Could not check for updates.`)})})]})]}),(0,q.jsxs)(Nm,{ref:ve(`colors`),children:[(0,q.jsx)(Am,{note:`The accent and highlight colours the whole window uses.`,title:`Colors`}),(0,q.jsxs)(Fm,{children:[(0,q.jsxs)(Im,{children:[(0,q.jsxs)(Lm,{children:[(0,q.jsx)($,{children:r(`Presets`)}),(0,q.jsx)(lh,{children:r(`One click changes the accent and the highlight together.`)})]}),(0,q.jsxs)(Rm,{children:[pm.map(e=>(0,q.jsxs)(zm,{$on:Se.toLowerCase()===e.accent&&Ce.toLowerCase()===e.secondary,onClick:()=>we(e.accent,e.secondary),title:`${r(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,q.jsxs)(Km,{children:[(0,q.jsx)(`i`,{style:{background:e.accent}}),(0,q.jsx)(`i`,{style:{background:e.secondary}})]}),(0,q.jsx)(Bm,{children:r(e.name)})]},e.name)),_e.map((e,t)=>(0,q.jsxs)(Vm,{children:[(0,q.jsxs)(zm,{$on:Se.toLowerCase()===e.accent.toLowerCase()&&Ce.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>we(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,q.jsxs)(Km,{children:[(0,q.jsx)(`i`,{style:{background:e.accent}}),(0,q.jsx)(`i`,{style:{background:e.secondary}})]}),(0,q.jsx)(Bm,{children:e.name})]}),(0,q.jsx)(Hm,{onClick:()=>void Oe(t),title:r(`Remove preset`),type:`button`,children:(0,q.jsx)(Io,{size:9})})]},`${e.name}-${t}`)),I?(0,q.jsxs)(Wm,{children:[(0,q.jsxs)(Km,{children:[(0,q.jsx)(`i`,{style:{background:I.accent}}),(0,q.jsx)(`i`,{style:{background:I.secondary}})]}),(0,q.jsx)(Gm,{autoFocus:!0,maxLength:24,onChange:e=>le({...I,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),De()):e.key===`Escape`&&(e.preventDefault(),le(null))},placeholder:r(`Preset name`),spellCheck:!1,value:I.name}),(0,q.jsx)(mh,{onClick:()=>void De(),type:`button`,children:r(`Save`)}),(0,q.jsx)(mh,{onClick:()=>le(null),type:`button`,children:r(`Cancel`)})]}):(0,q.jsxs)(Um,{disabled:!c,onClick:()=>le({name:``,accent:Se,secondary:Ce}),title:r(`Save the current colours as a preset`),type:`button`,children:[(0,q.jsx)(Eo,{size:12}),r(`Add preset`)]})]})]}),(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:r(`Accent color`)}),(0,q.jsx)(lh,{children:r(`Buttons, selections, focus rings, and active navigation.`)})]}),(0,q.jsxs)(sh,{children:[(0,q.jsx)(km,{colors:se.accent,current:Se,onApply:e=>Te(`accent`,e)}),(0,q.jsx)(hh,{"aria-label":r(`Accent color`),disabled:!c,onBlur:()=>ke(`accent`),onChange:e=>void be({accentColor:e.target.value}),onFocus:()=>he({role:`accent`,color:Se}),type:`color`,value:Se}),(0,q.jsx)(gh,{children:Se.toUpperCase()})]})]}),(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:r(`Secondary color`)}),(0,q.jsx)(lh,{children:r(`Gradients, highlights, and the second end of the accent ramp.`)})]}),(0,q.jsxs)(sh,{children:[(0,q.jsx)(km,{colors:se.secondary,current:Ce,onApply:e=>Te(`secondary`,e)}),(0,q.jsx)(hh,{"aria-label":r(`Secondary color`),disabled:!c,onBlur:()=>ke(`secondary`),onChange:e=>void be({secondaryColor:e.target.value}),onFocus:()=>he({role:`secondary`,color:Ce}),type:`color`,value:Ce}),(0,q.jsx)(gh,{children:Ce.toUpperCase()})]})]}),(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:r(`Reset colors`)}),(0,q.jsx)(lh,{children:r(`Returns the interface to the default blue and indigo theme.`)})]}),(0,q.jsx)(sh,{children:(0,q.jsx)(mh,{disabled:!c,onClick:()=>{xe(`accent`,Se),xe(`secondary`,Ce),be({accentColor:null,secondaryColor:null})},type:`button`,children:r(`Reset`)})})]})]})]}),(0,q.jsxs)(Nm,{ref:ve(`tags`),children:[(0,q.jsx)(Am,{note:`Every tag in the catalogue; add, rename, recolour or remove them here.`,title:`Tags`}),(0,q.jsxs)(Fm,{children:[(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsxs)(ch,{children:[(0,q.jsx)(fh,{"aria-label":r(`Color of the new tag`),onChange:e=>oe(e.target.value),type:`color`,value:ae}),(0,q.jsx)(xh,{onChange:e=>F(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ae())},placeholder:r(`New tag`),spellCheck:!1,value:P})]}),(0,q.jsx)(lh,{children:r(`Add a tag here; it is available in every folder.`)})]}),(0,q.jsx)(sh,{children:(0,q.jsx)(mh,{disabled:j||P.trim().length===0,onClick:()=>void Ae(),type:`button`,children:r(`Add`)})})]}),N&&(0,q.jsx)(Q,{children:(0,q.jsx)(uh,{children:N})}),ne.length===0&&(0,q.jsx)(Q,{children:(0,q.jsx)(lh,{children:r(`No tags yet. Add one below; it is available in every folder.`)})}),ne.map(e=>(0,q.jsx)(Q,{children:k?.name===e.name?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsxs)(ch,{children:[(0,q.jsx)(fh,{"aria-label":r(`Color of {tag}`,{tag:e.name}),onChange:t=>void je(e.name,t.target.value),title:r(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,q.jsx)(ph,{autoFocus:!0,disabled:j,onChange:t=>A({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Ne()):e.key===`Escape`&&(e.preventDefault(),A(null))},value:k.value})]}),(0,q.jsx)(lh,{children:r(`Press Enter to save, Escape to cancel.`)})]}),(0,q.jsxs)(sh,{children:[(0,q.jsx)(mh,{disabled:j,onClick:()=>void Ne(),type:`button`,children:r(`Save`)}),(0,q.jsx)(mh,{disabled:j,onClick:()=>A(null),type:`button`,children:r(`Cancel`)})]})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsxs)(ch,{children:[(0,q.jsx)(fh,{"aria-label":r(`Color of {tag}`,{tag:e.name}),onChange:t=>void je(e.name,t.target.value),title:r(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,q.jsx)($,{children:e.name})]}),(0,q.jsx)(lh,{children:Yi(r,e.folders,`Used in 1 folder. Renaming or removing it updates that folder's index.`,`Used in {count} folders. Renaming or removing it updates those folders' indexes.`)})]}),(0,q.jsxs)(sh,{children:[(0,q.jsx)(mh,{disabled:j,onClick:()=>A({name:e.name,value:e.name}),type:`button`,children:r(`Edit`)}),(0,q.jsxs)(_h,{disabled:j,onClick:()=>void Me(e.name),type:`button`,children:[(0,q.jsx)(Po,{size:13}),r(`Remove`)]})]})]})},e.name))]})]}),(0,q.jsxs)(Nm,{ref:ve(`files-view`),children:[(0,q.jsx)(Am,{note:`The defaults every folder starts with; a folder can still override them.`,title:`Files view (global)`}),(0,q.jsxs)(Fm,{children:[(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:r(`Default view`)}),(0,q.jsx)(lh,{children:r(`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`)})]}),(0,q.jsx)(sh,{children:(0,q.jsxs)(Dh,{children:[(0,q.jsx)(Oh,{$on:H.mode===`list`,onClick:()=>void be({defaultView:{...H,mode:`list`}}),type:`button`,children:r(`List`)}),(0,q.jsx)(Oh,{$on:H.mode===`grid`,onClick:()=>void be({defaultView:{...H,mode:`grid`}}),type:`button`,children:r(`Grid`)})]})})]}),(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:r(`List icon size`)}),(0,q.jsx)(lh,{children:r(`The icon in the list rows.`)})]}),(0,q.jsxs)(sh,{children:[(0,q.jsx)(kh,{max:48,min:16,onChange:e=>void be({defaultView:{...H,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:H.iconSize}),(0,q.jsxs)(dh,{children:[H.iconSize,`px`]})]})]}),(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:r(`Grid size`)}),(0,q.jsx)(lh,{children:r(`The height of a grid tile; the icon inside follows it.`)})]}),(0,q.jsxs)(sh,{children:[(0,q.jsx)(kh,{max:260,min:100,onChange:e=>void be({defaultView:{...H,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:H.gridSize}),(0,q.jsxs)(dh,{children:[H.gridSize,`px`]})]})]}),(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsxs)(ch,{children:[(0,q.jsx)($,{children:r(`Selection checkboxes`)}),(0,q.jsx)(um,{})]}),(0,q.jsx)(lh,{children:r(`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`)})]}),(0,q.jsx)(yh,{$on:c?.showCheckboxes??!0,disabled:!c,onClick:()=>void be({showCheckboxes:!(c?.showCheckboxes??!0)}),type:`button`,children:(0,q.jsx)(bh,{})})]}),(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsxs)(ch,{children:[(0,q.jsx)($,{children:r(`Open with a single click`)}),(0,q.jsx)(um,{})]}),(0,q.jsx)(lh,{children:r(`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`)})]}),(0,q.jsx)(yh,{$on:c?.openOnSingleClick??!1,disabled:!c,onClick:()=>void be({openOnSingleClick:!(c?.openOnSingleClick??!1)}),type:`button`,children:(0,q.jsx)(bh,{})})]}),(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsxs)(ch,{children:[(0,q.jsx)($,{children:r(`Confirm before deleting`)}),(0,q.jsx)(um,{})]}),(0,q.jsx)(lh,{children:r(`Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.`)})]}),(0,q.jsx)(yh,{$on:c?.confirmDelete??!1,disabled:!c,onClick:()=>void be({confirmDelete:!(c?.confirmDelete??!1)}),type:`button`,children:(0,q.jsx)(bh,{})})]}),(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsxs)(ch,{children:[(0,q.jsx)($,{children:r(`Play audio in video previews`)}),(0,q.jsx)(um,{})]}),(0,q.jsx)(lh,{children:r(`Video previews play muted by default. Turn this on to hear their audio while the details panel is open.`)})]}),(0,q.jsx)(yh,{$on:c?.previewVideoAudio??!1,disabled:!c,onClick:()=>void be({previewVideoAudio:!(c?.previewVideoAudio??!1)}),type:`button`,children:(0,q.jsx)(bh,{})})]}),(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsxs)(ch,{children:[(0,q.jsx)($,{children:r(`Autoplay video previews`)}),(0,q.jsx)(um,{})]}),(0,q.jsx)(lh,{children:r(`Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.`)})]}),(0,q.jsx)(yh,{$on:c?.previewVideoAutoplay??!1,disabled:!c,onClick:()=>void be({previewVideoAutoplay:!(c?.previewVideoAutoplay??!1)}),type:`button`,children:(0,q.jsx)(bh,{})})]}),(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsxs)(ch,{children:[(0,q.jsx)($,{children:r(`Preview panel under the list`)}),(0,q.jsx)(um,{})]}),(0,q.jsx)(lh,{children:r(`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`)})]}),(0,q.jsx)(yh,{$on:H.showImages??!0,onClick:()=>void be({defaultView:{...H,showImages:!(H.showImages??!0)}}),type:`button`,children:(0,q.jsx)(bh,{})})]}),(0,q.jsx)(Q,{children:(0,q.jsxs)(oh,{children:[(0,q.jsxs)(ch,{children:[(0,q.jsx)($,{children:r(`Columns`)}),(0,q.jsx)(um,{})]}),(0,q.jsx)(lh,{children:r(`Shown in every folder; changing them changes all folders at once.`)})]})}),(0,q.jsx)(Q,{children:(0,q.jsxs)(Ah,{children:[jl.map(e=>(0,q.jsxs)(jh,{children:[(0,q.jsx)(`input`,{checked:(H.columns??[]).includes(e.id),onChange:()=>void Pe(e.id),type:`checkbox`}),(0,q.jsx)(`span`,{children:r(e.label)})]},e.id)),(0,q.jsxs)(jh,{children:[(0,q.jsx)(`input`,{checked:(H.columns??[]).includes(`linkTarget`),onChange:()=>void Pe(`linkTarget`),type:`checkbox`}),(0,q.jsx)(`span`,{children:r(`Link target after the name`)})]})]})})]}),(0,q.jsxs)(Lh,{children:[r(`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.`),` `,(0,q.jsx)(um,{}),` `,r(`Anything marked as global always applies to every folder.`)]})]}),(0,q.jsxs)(Nm,{ref:ve(`shortcuts`),children:[(0,q.jsx)(Am,{note:`The keys this window listens for. Click a combination to record a new one.`,title:`Shortcuts`}),(0,q.jsxs)(Fm,{children:[fm.map(({id:e,label:t,note:n})=>(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:r(t)}),(0,q.jsx)(lh,{children:r(n)})]}),(0,q.jsx)(sh,{children:(0,q.jsx)(Mh,{$listening:O===e,onClick:()=>te(e),type:`button`,children:O===e?r(`Press a key…`):hi(Ie[e])})})]},e)),(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:r(`Reset`)}),(0,q.jsx)(lh,{children:r(`Back to the default combination for every action.`)})]}),(0,q.jsx)(sh,{children:(0,q.jsx)(Nh,{onClick:()=>void be({shortcuts:{...ui}}),type:`button`,children:r(`Reset`)})})]})]})]}),(0,q.jsxs)(Nm,{ref:ve(`memory`),children:[(0,q.jsx)(Am,{note:`What the process holds and how to give it back.`,title:`Memory`}),(0,q.jsxs)(Fm,{children:[(0,q.jsxs)(nh,{children:[(0,q.jsxs)(rh,{children:[(0,q.jsx)($,{children:r(`Process memory`)}),(0,q.jsx)(dh,{children:x?`${J(x.private)} · ${th(x.private,x.available)}`:`—`})]}),(0,q.jsx)(ih,{children:(0,q.jsx)(ah,{$ratio:x?x.private/Math.max(x.available,1):0,$tone:Zi(x?x.private/Math.max(x.available,1):0)})}),(0,q.jsx)(lh,{children:x?r(`Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.`,{available:J(x.available),resident:J(x.workingSet)}):r(`Reading the current usage…`)})]}),(0,q.jsxs)(nh,{children:[(0,q.jsxs)(rh,{children:[(0,q.jsx)($,{children:r(`Managed heap`)}),(0,q.jsx)(dh,{children:x?`${J(x.managed)} · ${th(x.managed,x.private)}`:`—`})]}),(0,q.jsx)(ih,{children:(0,q.jsx)(ah,{$ratio:x?x.managed/Math.max(x.private,1):0,$tone:`var(--accent-secondary)`})}),(0,q.jsx)(lh,{children:r(`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`)})]}),(0,q.jsxs)(nh,{children:[(0,q.jsxs)(rh,{children:[(0,q.jsx)($,{children:r(`Native and runtime`)}),(0,q.jsx)(dh,{children:x?`${J(Math.max(0,x.private-x.managed))} · ${th(Math.max(0,x.private-x.managed),x.private)}`:`—`})]}),(0,q.jsx)(ih,{children:(0,q.jsx)(ah,{$ratio:x?Math.max(0,x.private-x.managed)/Math.max(x.private,1):0,$tone:`var(--accent-primary)`})}),(0,q.jsx)(lh,{children:r(`The runtime, loaded libraries and the Rust helper share this part. Rust runs inside the process, so it has no separate figure.`)})]}),(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:r(`Free memory`)}),(0,q.jsx)(lh,{children:r(`Compacts the heap and returns unused pages to the system. Always safe.`)})]}),(0,q.jsx)(sh,{children:(0,q.jsx)(Nh,{onClick:()=>void Rr().then(S),type:`button`,children:r(`Trim now`)})})]})]})]}),(0,q.jsxs)(Nm,{ref:ve(`overview`),children:[(0,q.jsx)(Am,{note:`The home tab's history and how much of it it shows.`,title:`Overview`}),(0,q.jsx)(Fm,{children:(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:r(`Recent items`)}),(0,q.jsx)(lh,{children:r(`How many recently opened folders the overview lists. 0 hides the section.`)})]}),(0,q.jsx)(sh,{children:(0,q.jsx)(xh,{max:50,min:0,onChange:e=>void Le(Number(e.target.value)),type:`number`,value:c?.recentLimit??10})})]})})]}),(0,q.jsxs)(Nm,{ref:ve(`gallery`),children:[(0,q.jsx)(Am,{note:`The folders the gallery scans for pictures and videos.`,title:`Gallery`}),(0,q.jsxs)(Fm,{children:[(c?.galleryRoots??[]).map(e=>(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:Qi(e)}),(0,q.jsx)(lh,{children:e})]}),(0,q.jsx)(sh,{children:(0,q.jsx)(Ph,{onClick:()=>void Re((c?.galleryRoots??[]).filter(t=>t!==e)),title:r(`Stop scanning this folder`),type:`button`,children:(0,q.jsx)(Io,{size:12})})})]},e)),(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:r(`Scan folders`)}),(0,q.jsx)(lh,{children:(c?.galleryRoots??[]).length===0?r(`Nothing added yet, so the gallery reads the Pictures folder.`):r(`Only these folders are scanned, three levels deep.`)})]}),(0,q.jsx)(sh,{children:(0,q.jsx)(Nh,{onClick:()=>void ze(),type:`button`,children:r(`Choose folder…`)})})]})]})]}),(0,q.jsxs)(Nm,{ref:ve(`icons`),children:[(0,q.jsx)(Am,{note:`Where the shell's own icons and the built-in glyphs come from.`,title:`Icons`}),(0,q.jsxs)(Fm,{children:[(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:r(`Use system file icons`)}),(0,q.jsx)(lh,{children:r(`Ask the shell for the icon of each file type instead of the built-in glyphs.`)})]}),(0,q.jsx)(yh,{$on:c?.systemIcons??!1,disabled:!c,onClick:()=>void be({systemIcons:!c?.systemIcons}),type:`button`,children:(0,q.jsx)(bh,{})})]}),(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:r(`Use custom folder icons`)}),(0,q.jsx)(lh,{children:r(`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`)})]}),(0,q.jsx)(yh,{$on:c?.customFolderIcons??!1,disabled:!c,onClick:()=>void be({customFolderIcons:!c?.customFolderIcons}),type:`button`,children:(0,q.jsx)(bh,{})})]})]})]}),(0,q.jsxs)(Nm,{ref:ve(`extension-icons`),children:[(0,q.jsx)(Am,{note:`A custom glyph for one file extension.`,title:`Icons by extension`}),(0,q.jsxs)(Fm,{children:[Object.entries(c?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:e}),(0,q.jsx)(lh,{children:wm(r,t)})]}),(0,q.jsxs)(sh,{children:[(0,q.jsx)(Tm,{source:t}),(0,q.jsx)(Ph,{onClick:()=>void U(e,null),title:r(`Remove this rule`),type:`button`,children:(0,q.jsx)(Io,{size:12})})]})]},e)),(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:r(`Add a rule`)}),(0,q.jsx)(lh,{children:r(`Extension and the icon to draw for it.`)})]}),(0,q.jsxs)(sh,{children:[(0,q.jsx)(xh,{onChange:e=>p(e.target.value),placeholder:`.psd`,spellCheck:!1,value:f}),(0,q.jsxs)(Eh,{children:[(0,q.jsx)(Ph,{onClick:()=>v(e=>!e),title:r(`Choose the icon`),type:`button`,children:(0,q.jsx)(Tm,{source:m})}),g&&(0,q.jsx)(xd,{allowDefault:!1,onClose:()=>v(!1),onPick:e=>{h(e??`file`),v(!1)},value:m})]}),(0,q.jsx)(Ph,{onClick:()=>void Be(),title:r(`Add the rule`),type:`button`,children:(0,q.jsx)(Eo,{size:13})})]})]})]})]}),(0,q.jsxs)(Nm,{ref:ve(`folder-icons`),children:[(0,q.jsx)(Am,{note:`A single folder can carry an icon of its own.`,title:`Folder icons`}),(0,q.jsxs)(Fm,{children:[(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:r(`Give a folder its own icon`)}),(0,q.jsx)(lh,{children:r(`Stored in the folder's parent {index}, so it stays with the files.`,{index:`.yafm-index.db`})})]}),(0,q.jsxs)(sh,{children:[u&&(0,q.jsx)(Em,{src:u.icon}),(0,q.jsx)(Nh,{disabled:y,onClick:()=>void Ve(),type:`button`,children:r(y?`Choosing…`:`Choose folder and icon…`)})]})]}),u&&(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:Qi(u.folder)}),(0,q.jsx)(lh,{children:u.folder})]}),(0,q.jsx)(sh,{children:(0,q.jsxs)(Ih,{children:[(0,q.jsx)(Fo,{size:11}),` `,r(`Saved`)]})})]})]})]}),(0,q.jsxs)(Nm,{ref:ve(`folder-index`),children:[(0,q.jsx)(Am,{note:`The hidden cache that makes a folder open instantly next time.`,title:`Folder index`}),(0,q.jsx)(Fm,{children:(0,q.jsxs)(Q,{children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)($,{children:r(`Keep a {index} in every folder`,{index:`.yafm-index.db`})}),(0,q.jsx)(lh,{children:r(`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`)})]}),(0,q.jsx)(yh,{$on:c?.writeDirectoryIndex??!0,disabled:!c,onClick:()=>void be({writeDirectoryIndex:!c?.writeDirectoryIndex}),type:`button`,children:(0,q.jsx)(bh,{})})]})}),!(c?.writeDirectoryIndex??!0)&&(0,q.jsx)(Rh,{children:Cm(r,e?.platform)})]}),(0,q.jsxs)(Nm,{ref:ve(`files`),children:[(0,q.jsx)(Am,{note:`What the listings include.`,title:`Files`}),(0,q.jsxs)(Fm,{children:[(0,q.jsxs)(Q,{children:[(0,q.jsx)($,{children:r(`Hidden items`)}),(0,q.jsx)(dh,{children:Sm(r,o?.showHidden)})]}),(0,q.jsxs)(Q,{children:[(0,q.jsx)($,{children:r(`Protected operating system files`)}),(0,q.jsx)(dh,{children:Sm(r,o?.showSystem)})]})]}),(0,q.jsx)(Lh,{children:r(`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`)})]})]}),(0,q.jsxs)(Xm,{"aria-label":r(`Settings sections`),children:[(0,q.jsx)(Zm,{children:r(`Sections`)}),(0,q.jsx)(Qm,{children:vm.map(({id:e,label:t})=>(0,q.jsx)($m,{$active:z===e,onClick:()=>ye(e),type:`button`,children:(0,q.jsx)(`span`,{children:r(t)})},e))}),(0,q.jsx)(eh,{children:r(`Changes are saved as you make them.`)})]})]})}function Sm(e,t){return e(t===void 0?`Reading…`:t?`Shown`:`Hidden`)}function Cm(e,t){return e(`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`,{place:e(t===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:t===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`)})}function wm(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built-in: {source}`,{source:t})}function Tm({source:e}){let t=Di(e.startsWith(`file:`)?e.slice(5):null);return(0,q.jsx)(Fh,{children:t?(0,q.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,q.jsx)(tl,{name:e,size:16})})}function Em({src:e}){let t=Di(e);return(0,q.jsx)(Fh,{children:t&&(0,q.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function Dm({value:e,options:t,onChange:n,disabled:r}){let i=qn(),[a,o]=(0,_.useState)(null),s=(0,_.useRef)(null);return(0,_.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(Sh,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,q.jsx)(`span`,{children:Om(i,e)}),(0,q.jsx)(Ch,{children:(0,q.jsx)(ko,{size:11})})]}),a&&(0,ws.createPortal)((0,q.jsx)(wh,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,q.jsxs)(Th,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,q.jsx)(`span`,{children:Om(i,t)}),t===e&&(0,q.jsx)(Fo,{size:11})]},t))}),document.body)]})}function Om(e,t){return t===gm?e(`System default`):_m[t]??t}function km({colors:e,current:t,onApply:n}){let r=qn();if(e.length===0)return null;let[i,...a]=e;return(0,q.jsxs)(qm,{children:[(0,q.jsxs)(Ym,{$color:i,onClick:()=>n(i),title:r(`Previous colour · {colour}`,{colour:i}),type:`button`,children:[(0,q.jsx)(`i`,{}),r(`Previous`)]}),a.map(e=>(0,q.jsx)(Jm,{$color:e,onClick:()=>n(e),title:r(`Use {colour}`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,q.jsx)(Fo,{size:9})},e))]})}function Am({title:e,note:t}){let n=qn();return(0,q.jsxs)(Pm,{children:[(0,q.jsx)(`h2`,{children:n(e)}),(0,q.jsx)(`p`,{children:n(t)})]})}var jm=G.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,Mm=G.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,Nm=G.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 900px;
    scroll-margin-top: 10px;
`,Pm=G.header`
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
        padding-left: 11px;
        font-size: 10.5px;
        color: var(--text-muted);
    }
`,Fm=G.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,Im=G.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Lm=G.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Rm=G.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,zm=G.button`
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
`,Bm=G.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Vm=G.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,Hm=G.button`
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
`,Um=G.button`
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
`,Wm=G.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Gm=G.input`
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
`,Km=G.span`
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
`,qm=G.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,Jm=G.button`
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
`,Ym=G.button`
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
`,Xm=G.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,Zm=G.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Qm=G.div`
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
`,$m=G.button`
    position: relative;
    display: flex;
    align-items: center;
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

    ${({$active:e})=>e&&On`
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
`,eh=G.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function th(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}var nh=G.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,rh=G.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,ih=G.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,ah=G.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,Q=G.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,oh=G.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,sh=G.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,$=G.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,ch=G.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,lh=G.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,uh=G.span`
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
`,dh=G.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,fh=G.input`
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
`,ph=G.input`
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
`,mh=G.button`
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
`,hh=G.input`
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
`,gh=G.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,_h=G.button`
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
`,vh=G.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,yh=G.button`
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
`,bh=G.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,xh=G.input`
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
`,Sh=G.button`
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
`,Ch=G.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,wh=G.div`
    position: fixed;
    z-index: 2600;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 44px rgba(2, 6, 23, 0.55);
`,Th=G.button`
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
`,Eh=G.span`
    position: relative;
    display: inline-flex;
`,Dh=G.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Oh=G.button`
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
`,kh=G.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,Ah=G.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,jh=G.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,Mh=G.button`
    min-width: 92px;
    padding: 4px 10px;
    border: 1px solid ${({$listening:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$listening:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$listening:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font-family: var(--font-mono);
    font-size: 11px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`,Nh=G.button`
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
`,Ph=G.button`
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
`,Fh=G.span`
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
`,Ih=G.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,Lh=G.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,Rh=G.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`;function zh({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=qn(),a=(0,_.useRef)(null),o=e.filter(e=>e.state===`running`).length;return(0,_.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[n,r]),(0,q.jsxs)(Vh,{ref:a,children:[(0,q.jsxs)(Hh,{$active:n,onClick:()=>r(!n),title:o>0?Yi(i,o,`1 operation running`,`{count} operations running`):i(`Activity`),type:`button`,children:[(0,q.jsx)(No,{size:13}),o>0&&(0,q.jsx)(Uh,{children:o>9?`9+`:o})]}),n&&(0,q.jsxs)(Wh,{children:[(0,q.jsxs)(Gh,{children:[(0,q.jsx)(Kh,{children:i(`Activity`)}),(0,q.jsxs)(qh,{children:[(0,q.jsx)(Jh,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`Clear finished`)}),(0,q.jsx)(Yh,{onClick:()=>r(!1),title:i(`Close`),type:`button`,children:(0,q.jsx)(Io,{size:10})})]})]}),e.length===0?(0,q.jsx)(Zh,{children:i(`No operations yet.`)}):(0,q.jsx)(Xh,{children:e.map(e=>(0,q.jsx)(Bh,{task:e},e.id))})]})]})}function Bh({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,q.jsxs)(Qh,{children:[(0,q.jsxs)($h,{children:[(0,q.jsx)(eg,{$state:e.state,children:e.state===`done`?(0,q.jsx)(Fo,{size:10}):e.state===`failed`?(0,q.jsx)(Io,{size:10}):(0,q.jsx)(tg,{})}),(0,q.jsx)(ng,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,q.jsxs)(rg,{children:[J(e.bytesDone),` / `,J(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,q.jsxs)(rg,{children:[e.done,` / `,e.total]})]}),i&&(0,q.jsx)(ig,{children:(0,q.jsx)(ag,{$percent:r,$indeterminate:t===0})}),e.error&&(0,q.jsx)(og,{children:e.error})]})}var Vh=G.div`
    position: relative;
    display: flex;
`,Hh=G.button`
    position: relative;
    display: grid;
    place-items: center;
    width: 38px;
    height: 100%;
    border: 0;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-secondary)`};
    cursor: pointer;
    transition: background 130ms ease, color 130ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`,Uh=G.span`
    position: absolute;
    top: 6px;
    right: 5px;
    min-width: 13px;
    height: 13px;
    padding: 0 3px;
    border-radius: 999px;
    background: var(--accent-gradient);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.5);
    color: #fff;
    font-family: var(--font-mono);
    font-size: 8px;
    line-height: 13px;
    text-align: center;
`,Wh=G.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${Ts}
    animation: yafm-activity-in 150ms cubic-bezier(0.22, 1, 0.36, 1);

    @keyframes yafm-activity-in {
        from {
            opacity: 0;
            transform: translateY(-6px) scale(0.985);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
`,Gh=G.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Kh=G.span`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 10px;
    font-weight: 600;
    color: var(--text-secondary);
    letter-spacing: 0.1em;
    text-transform: uppercase;

    &::before {
        content: "";
        width: 2px;
        height: 10px;
        border-radius: 2px;
        background: var(--accent-gradient);
    }
`,qh=G.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Jh=G.button`
    padding: 4px 7px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 10px;
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;

    &:hover:not(:disabled) {
        border-color: var(--border-color);
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`,Yh=G.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;

    &:hover {
        border-color: var(--border-color);
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`,Xh=G.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,Zh=G.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Qh=G.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;
    ${Ls}

    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,$h=G.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,eg=G.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,tg=G.span`
    width: 9px;
    height: 9px;
    border: 2px solid rgba(var(--accent-rgb), 0.25);
    border-top-color: var(--accent-primary);
    border-radius: 50%;
    animation: yafm-task-spin 800ms linear infinite;

    @keyframes yafm-task-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,ng=G.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,rg=G.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,ig=G.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,ag=G.div`
    width: ${({$percent:e,$indeterminate:t})=>t?`35%`:`${e}%`};
    height: 100%;
    border-radius: inherit;
    background: var(--accent-gradient);
    transition: width 120ms linear;
    animation: ${({$indeterminate:e})=>e?`yafm-task-slide 1.1s ease-in-out infinite`:`none`};

    @keyframes yafm-task-slide {
        0% {
            transform: translateX(-120%);
        }
        100% {
            transform: translateX(320%);
        }
    }
`,og=G.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;function sg({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=qn(),[s,c]=(0,_.useState)(!1),l=(0,_.useRef)(null);(0,_.useEffect)(()=>{if(!s)return;let e=e=>{l.current?.contains(e.target)||c(!1)},t=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[s]),(0,_.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=jl.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,q.jsxs)(cg,{ref:l,children:[(0,q.jsx)(lg,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`View`),type:`button`,children:e.mode===`grid`?(0,q.jsx)(Z,{size:14}):(0,q.jsx)(Mo,{size:14})}),s&&(0,q.jsxs)(ug,{children:[(0,q.jsx)(dg,{children:o(`View`)}),(0,q.jsxs)(fg,{children:[(0,q.jsxs)(pg,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,q.jsx)(Mo,{size:12}),` `,o(`List`)]}),(0,q.jsxs)(pg,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,q.jsx)(Z,{size:12}),` `,o(`Grid`)]})]}),(0,q.jsx)(dg,{children:o(`List icon size`)}),(0,q.jsxs)(mg,{children:[(0,q.jsx)(`input`,{"aria-label":o(`List icon size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,q.jsxs)(hg,{children:[e.iconSize,`px`]})]}),(0,q.jsx)(dg,{children:o(`Grid size`)}),(0,q.jsxs)(mg,{children:[(0,q.jsx)(`input`,{"aria-label":o(`Grid size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,q.jsxs)(hg,{children:[e.gridSize,`px`]})]}),(0,q.jsxs)(dg,{children:[o(`Columns`),(0,q.jsx)(um,{})]}),jl.map(e=>(0,q.jsxs)(gg,{children:[(0,q.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,q.jsx)(`span`,{children:e.label})]},e.id)),(0,q.jsxs)(gg,{children:[(0,q.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,q.jsx)(`span`,{children:o(`Link target after the name`)})]}),(0,q.jsxs)(dg,{children:[o(`Preview panel`),(0,q.jsx)(um,{})]}),(0,q.jsxs)(gg,{children:[(0,q.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,q.jsx)(`span`,{children:o(`Preview under the list`)})]})]})]})}var cg=G.div`
    position: relative;
    display: flex;
    height: 100%;
`,lg=G.button`
    display: grid;
    place-items: center;
    width: 42px;
    height: 100%;
    border: 0;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-secondary)`};
    cursor: pointer;
    transition: background 130ms ease, color 130ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }

    &:disabled {
        background: transparent;
        opacity: 0.4;
        cursor: default;
    }
`,ug=G.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${Ts}
    animation: yafm-view-in 150ms cubic-bezier(0.22, 1, 0.36, 1);

    @keyframes yafm-view-in {
        from {
            opacity: 0;
            transform: translateY(-6px) scale(0.985);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
`,dg=G.div`
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 12px 0 6px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);

    &::before {
        content: "";
        width: 2px;
        height: 9px;
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    &:first-child {
        margin-top: 2px;
    }
`,fg=G.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,pg=G.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    flex: 1;
    padding: 5px 6px;
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
`,mg=G.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,hg=G.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,gg=G.label`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 4px 6px;
    margin: 0 -6px;
    border-radius: var(--radius-sm);
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;
    transition: background 130ms ease, color 130ms ease;

    input {
        margin: 0;
        accent-color: var(--accent-primary);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.08);
        color: var(--text-primary);
    }
`,_g=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),vg=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),yg=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),bg=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,q.jsx)(`path`,{d:`M2 5h6`})}),xg=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,q.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Sg=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,q.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,q.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function Cg({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,view:o,onViewChange:s,onColumns:c,showImages:l,onShowImages:u,tasks:d,onClearTasks:f,activityOpen:p,onActivityOpenChange:m,trayCount:h,trayVisible:g,onToggleTray:v,split:y,canSplit:b,onToggleSplit:x,details:S,canDetails:C,onToggleDetails:w,shortcuts:T}){let E=qn(),D=Xn(),ee=Zn(),[O,te]=(0,_.useState)({left:!1,right:!1}),[ne,re]=(0,_.useState)(null),k=(0,_.useRef)(null),A=(0,_.useRef)(null),j=(0,_.useCallback)(()=>{let e=k.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;te(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,_.useEffect)(()=>{j();let e=k.current;if(!e)return;let t=new ResizeObserver(j);return t.observe(e),()=>t.disconnect()},[j,e.length]),(0,_.useEffect)(()=>{A.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let M=e=>k.current?.scrollBy({left:e,behavior:`smooth`});return(0,q.jsxs)(Eg,{children:[(0,q.jsx)(Dg,{children:(0,q.jsx)(Lo,{size:19})}),(0,q.jsxs)(Og,{children:[O.left&&(0,q.jsx)(Ag,{onClick:()=>M(-180),title:E(`Scroll tabs left`),type:`button`,children:(0,q.jsx)(_g,{})}),(0,q.jsx)(kg,{onScroll:j,onWheel:e=>{let t=k.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:k,children:e.map(e=>(0,q.jsxs)(jg,{$active:e.id===t,$dragging:ne===e.id,$split:!!e.split,draggable:!0,onDragEnd:()=>re(null),onDragOver:e=>{ne&&e.preventDefault()},onDragStart:()=>re(e.id),onDrop:t=>{t.preventDefault(),ne&&a(ne,e.id),re(null)},onClick:()=>n(e.id),ref:e.id===t?A:void 0,title:e.path||e.title,type:`button`,children:[(0,q.jsx)(wg,{tab:e}),(0,q.jsx)(Mg,{children:e.title}),e.partner&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Ng,{children:`|`}),(0,q.jsx)(Tg,{place:e.partner.place}),(0,q.jsx)(Mg,{children:e.partner.title})]}),(0,q.jsx)(Pg,{"data-shortcut":hi(T.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:E(`Close tab`),children:(0,q.jsx)(yg,{})})]},e.id))}),O.right&&(0,q.jsx)(Ag,{onClick:()=>M(180),title:E(`Scroll tabs right`),type:`button`,children:(0,q.jsx)(vg,{})}),(0,q.jsx)(Fg,{"data-shortcut":hi(T.newTab),onClick:i,title:E(`New tab`),type:`button`,children:(0,q.jsx)(Eo,{size:13})})]}),(0,q.jsx)(Ig,{...ee}),(0,q.jsxs)(Lg,{children:[(0,q.jsx)(zg,{$active:y,"data-shortcut":hi(T.splitView),disabled:!b,onClick:x,title:E(y?`Close split view`:`Split view`),type:`button`,children:(0,q.jsx)(Ss,{size:15})}),(0,q.jsx)(zg,{$active:S,disabled:!C,onClick:w,title:E(S?`Hide details panel`:`Show details panel`),type:`button`,children:(0,q.jsx)(Cs,{size:15})}),(0,q.jsxs)(Rg,{$active:g,onClick:v,title:E(g?`Hide file tray`:`Show file tray`),type:`button`,children:[(0,q.jsx)(ms,{size:14}),h>0&&(0,q.jsx)(Bg,{children:h>9?`9+`:h})]}),(0,q.jsx)(zh,{tasks:d,onClear:f,open:p,onOpenChange:m}),(0,q.jsx)(sg,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:s,onColumns:c,onShowImages:u,showImages:l,view:o}),(0,q.jsx)(Vg,{onClick:D.minimize,title:E(`Minimize`),type:`button`,children:(0,q.jsx)(bg,{})}),(0,q.jsx)(Vg,{onClick:D.toggleMaximize,title:D.maximized?E(`Restore`):E(`Maximize`),type:`button`,children:D.maximized?(0,q.jsx)(Sg,{}):(0,q.jsx)(xg,{})}),(0,q.jsx)(Hg,{onClick:D.close,title:E(`Close`),type:`button`,children:(0,q.jsx)(yg,{})})]})]})}function wg({tab:e}){switch(e.kind){case`home`:return(0,q.jsx)(yo,{size:13});case`settings`:return(0,q.jsx)(Ao,{size:13});case`recycle`:return(0,q.jsx)(Po,{size:13});default:return(0,q.jsx)(Tg,{place:e.place})}}function Tg({place:e}){return e?(0,q.jsx)(Rc,{place:e,size:13}):(0,q.jsx)(bo,{size:13})}var Eg=G.header`
    display: flex;
    align-items: stretch;
    height: 44px;
    flex-shrink: 0;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,Dg=G.span`
    display: grid;
    place-items: center;
    align-self: center;
    width: 26px;
    height: 26px;
    margin-left: 12px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,Og=G.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,kg=G.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`,Ag=G.button`
    display: grid;
    place-items: center;
    width: 20px;
    height: 26px;
    flex-shrink: 0;
    margin-bottom: 2px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    svg {
        width: 10px;
        height: 10px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.4;
    }

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,jg=G.button`
    display: flex;
    align-items: center;
    gap: 7px;
    width: ${({$split:e})=>e?`300px`:`176px`};
    height: 32px;
    flex: 0 0 auto;
    padding: 0 6px 0 10px;
    border: 1px solid ${({$active:e})=>e?`var(--border-color)`:`transparent`};
    border-bottom: 0;
    border-radius: 9px 9px 0 0;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.10)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
    opacity: ${({$dragging:e})=>e?.45:1};
    box-shadow: ${({$active:e})=>e?`inset 0 -2px 0 var(--accent-primary)`:`none`};
    transition: background 120ms ease, color 120ms ease, opacity 120ms ease, box-shadow 120ms ease;

    svg {
        flex-shrink: 0;
        color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.08);
        color: var(--text-primary);
    }

    &:hover > span:last-child {
        opacity: 1;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: -2px;
    }
`,Mg=G.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ng=G.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,Pg=G.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 4px;
    opacity: 0;

    svg {
        width: 8px;
        height: 8px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.3;
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.14);
        color: var(--text-primary);
    }
`,Fg=G.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    margin-bottom: 2px;
    border: 1px solid transparent;
    border-radius: 8px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-rgb), 0.10);
        border-color: var(--border-color);
        color: var(--text-primary);
    }
`,Ig=G.div`
    flex: 1;
    min-width: 28px;
`,Lg=G.div`
    display: flex;
    flex-shrink: 0;
`,Rg=G.button`
    position: relative;
    display: grid;
    place-items: center;
    width: 34px;
    height: 100%;
    border: 0;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: var(--text-secondary);
    cursor: pointer;

    &:hover:not(:disabled) {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }
`,zg=G.button`
    display: grid;
    place-items: center;
    width: 34px;
    height: 100%;
    border: 0;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-secondary)`};
    cursor: pointer;

    &:hover:not(:disabled) {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }
`,Bg=G.span`
    position: absolute;
    top: 6px;
    right: 2px;
    min-width: 13px;
    height: 13px;
    padding: 0 3px;
    border-radius: 999px;
    background: var(--accent-primary);
    color: #fff;
    font-family: var(--font-mono);
    font-size: 8px;
    line-height: 13px;
    text-align: center;
`,Vg=G.button`
    display: grid;
    place-items: center;
    width: 46px;
    height: 100%;
    border: 0;
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition: background 100ms ease, color 100ms ease;

    svg {
        width: 10px;
        height: 10px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.2;
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.14);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: -2px;
    }
`,Hg=G(Vg)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function Ug(){let[e,t]=(0,_.useState)(null),n=(0,_.useRef)(null),r=(0,_.useRef)(void 0);return(0,_.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,ws.createPortal)((0,q.jsx)(Wg,{tooltip:e}),document.body):null}function Wg({tooltip:e}){let t=(0,_.useRef)(null),[n,r]=(0,_.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,_.useState)(()=>e.bottom+6);return(0,_.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,q.jsxs)(Gg,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,q.jsx)(Kg,{children:e.text}),e.shortcut&&(0,q.jsx)(qg,{children:e.shortcut})]})}var Gg=G.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: min(360px, calc(100vw - 16px));
    padding: 6px 9px;
    border: 1px solid var(--border-color-hover);
    border-radius: var(--radius-sm);
    background: rgba(7, 11, 18, 0.96);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.55);
    pointer-events: none;
    ${Ls}
`,Kg=G.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,qg=G.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,Jg={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`},Yg=`yafm://`,Xg={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`},Zg=0,Qg=20;function $g(e){return`${Yg}${e===`home`?`overview`:e}`}function e_(e){return e.toLowerCase().startsWith(Yg)?Xg[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function t_(e){let t=e.trim();if(t.length===0)return null;if(!t.toLowerCase().startsWith(Yg))return t;let n=Xg[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?$g(n):null}function n_(e){return e.history[e.index]??$g(`home`)}function r_(e){return e_(n_(e))??`files`}function i_(e){let t=n_(e);return e_(t)?``:e.listing?.path||t}function a_(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||r_(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function o_(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function s_(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||tr.iconSize,gridSize:e.view?.gridSize||t.gridSize||tr.gridSize,sort:e.view?.sort??tr.sort,sortDescending:e.view?.sortDescending??tr.sortDescending,columns:t.columns??nr.columns??[]}}function c_(e=$g(`home`)){return Zg+=1,{id:`tab-${Zg}`,listing:null,loading:!e_(e),error:null,history:[e],index:0,fresh:!0,view:null}}function l_(e){return e instanceof Error?e.message:String(e)}function u_(e,t){let n=e=>e.replace(/[\\/]+/g,`\\`).replace(/\\$/,``).toLowerCase();return n(e)===n(t)}function d_(e){let t=e.replace(/[\\/]+$/,``);if(t.length===0)return null;let n=Math.max(t.lastIndexOf(`\\`),t.lastIndexOf(`/`));return n<0?null:n===2&&t[1]===`:`?`${t.slice(0,2)}\\`:t.slice(0,n)}function f_(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return Yi(e,t.entries.length,`1 item · {size}`,`{count} items · {size}`,{size:J(n)})}function p_(){let e=qn(),[t,n]=(0,_.useState)(()=>[c_()]),[r,i]=(0,_.useState)(()=>t[0].id),[a,o]=(0,_.useState)(()=>{let e=ca(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[s,c]=(0,_.useState)([]),[l,u]=(0,_.useState)([]),[d,f]=(0,_.useState)(null),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)(null),v=Qn(),[y,b]=(0,_.useState)(Pi),[x,S]=(0,_.useState)(0),[C,w]=(0,_.useState)(0),[T,E]=(0,_.useState)([]),[D,ee]=(0,_.useState)(10),[O,te]=(0,_.useState)(null),[ne,re]=(0,_.useState)(0),[k,A]=(0,_.useState)(ui),[j,M]=(0,_.useState)(0),[N,ie]=(0,_.useState)(0),[P,F]=(0,_.useState)(0),[ae,oe]=(0,_.useState)(!0),[se,ce]=(0,_.useState)(()=>{let e=ca(`yafm.preview.width`,320);return e>=220?e:320}),[I,le]=(0,_.useState)(null),[ue,de]=(0,_.useState)(null),[fe,pe]=(0,_.useState)(`primary`),[L,R]=(0,_.useState)(null),[me,he]=(0,_.useState)([]),[z,B]=(0,_.useState)(!1),ge=(0,_.useRef)([]),V=(0,_.useRef)([]),[H,_e]=(0,_.useState)([]),[ve,ye]=(0,_.useState)([]),[be,xe]=(0,_.useState)(!1),[Se,Ce]=(0,_.useState)(!1),[we,Te]=(0,_.useState)(null),[Ee,De]=(0,_.useState)(null),[Oe,ke]=(0,_.useState)(()=>{let e=ua(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?o_({x:e.x,y:e.y}):o_({x:Math.max(20,window.innerWidth-340),y:110})}),Ae=(0,_.useCallback)(()=>{ke(e=>o_(e)),Ce(!0)},[]),je=t.find(e=>e.id===r)??t[0],Me=r_(je),Ne=n_(je),Pe=i_(je),Fe=Me===`files`?je.listing?.parent??d_(Pe):null,U=je.splitWith?t.find(e=>e.id===je.splitWith):void 0,Ie=Me===`files`&&U!==void 0,Le=U?i_(U):``,Re=U?U.listing?.parent??d_(Le):null,ze=Ie&&U&&fe===`secondary`?U:je,Be=O?.defaultView??nr,Ve=s_(ze,Be);(0,_.useEffect)(()=>{lm(O?.accentColor,O?.secondaryColor)},[O?.accentColor,O?.secondaryColor]),(0,_.useEffect)(()=>{pe(`primary`)},[r]);let He=Ve.columns.includes(`linkCount`),Ue=(0,_.useMemo)(()=>{let e={},t=Fc(O),n={};for(let[e,t]of Object.entries(O?.placeNames??{}))n[ea(e)]=t;for(let t of s)e[ea(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=ea(t),i=s.find(e=>ea(e.path)===r);e[r]={name:n[r]??i?.name??(Qi(t)||t),path:t,kind:`folder`,icon:i?.icon??O?.placeIcons?.[t]??null}}return e},[s,O]),We=(0,_.useMemo)(()=>({places:Ue,useIcons:O?.systemIcons===!1}),[Ue,O?.systemIcons]),Ge=O?.defaultView?.showImages??!0,Ke=O?.defaultView?.imageStripHeight??nr.imageStripHeight,qe=Me===`home`?(0,q.jsx)(Qo,{size:13}):Me===`settings`?(0,q.jsx)(Ao,{size:13}):Me===`recycle`?(0,q.jsx)(Po,{size:13}):Me===`gallery`?(0,q.jsx)(Bo,{size:13}):void 0,Je=y.open&&y.query.length>0,Ye=(0,_.useMemo)(()=>Je&&ze.listing?ze.listing.entries.filter(e=>Ui(e.isDirectory?sa(We,e.fullPath,e.name):e.name,y)).map(e=>e.fullPath):[],[Je,y,ze.listing,We]);(0,_.useEffect)(()=>{S(0)},[y.query,y.matchCase,y.regex,ze.listing?.path]);let Xe=Ye.length===0?-1:Math.min(x,Ye.length-1),Ze=(0,_.useCallback)(()=>{b(e=>({...e,open:!1,query:``})),S(0)},[]),Qe=(0,_.useCallback)(()=>{b(e=>({...e,open:!0})),w(e=>e+1)},[]),$e=(0,_.useCallback)(e=>{b(t=>({...t,open:!0,query:t.open?t.query+e:e})),w(e=>e+1)},[]),et=(0,_.useCallback)(e=>{S(t=>Ye.length===0?0:(Math.min(t,Ye.length-1)+e+Ye.length)%Ye.length)},[Ye.length]),W=(0,_.useRef)({tabs:t,activeId:r,activePane:fe});W.current={tabs:t,activeId:r,activePane:fe};let tt=(0,_.useRef)(O);tt.current=O;let nt=(0,_.useRef)(!1),rt=(0,_.useRef)([]),it=(0,_.useCallback)((e,t)=>{n(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),at=(0,_.useRef)(new Map),ot=(0,_.useCallback)(e=>{let t=(at.current.get(e)??0)+1;return at.current.set(e,t),()=>at.current.get(e)===t},[]),st=(0,_.useCallback)(async(e,t,n)=>{try{let r=await lr(t,He);if(!n()||!r.listing)return;it(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[He,it]),ct=(0,_.useCallback)(async(e,t,n=!1)=>{let r=ot(e);Ze();let i=!n||!W.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;it(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&u_(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&st(e,t,r);let o=await ar(t,!0,He);if(!r())return;it(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),n||Sr(o.path).then(()=>re(e=>e+1))}catch(i){if(!r())return;let a=W.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?i_(a):``,s=o.replace(/[\\/]+$/,``),c=Math.max(s.lastIndexOf(`\\`),s.lastIndexOf(`/`)),l=c>0?s.slice(0,c):null,u=l_(i);it(e,e=>({listing:{path:o,parent:l,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:u,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[ot,He,it,Ze,st]),lt=(0,_.useCallback)((e,t)=>{let n=t_(t);n&&(e_(n)?(Ze(),ot(e),it(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):ct(e,n))},[ot,ct,it,Ze]),ut=(0,_.useCallback)(async(e,t,n)=>{if(Ze(),e_(t)){ot(e),it(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=ot(e);it(e,()=>({index:n,listing:null,loading:!0,error:null}));try{if(await st(e,t,r),!r())return;let n=await ar(t,!0,He);if(!r())return;it(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(n){if(!r())return;let i=t.replace(/[\\/]+$/,``),a=Math.max(i.lastIndexOf(`\\`),i.lastIndexOf(`/`));it(e,()=>({listing:{path:t,parent:a>0?i.slice(0,a):null,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:l_(n)}))}},[ot,He,it,Ze,st]),dt=(0,_.useCallback)((e,t=!0)=>{let r=c_(e??$g(`home`));n(e=>[...e,r]),t&&i(r.id),e&&!e_(e)&&ct(r.id,e)},[ct]),ft=(0,_.useCallback)(e=>{lt(W.current.activeId,$g(e))},[lt]),pt=(0,_.useCallback)(e=>{let{tabs:t,activeId:r}=W.current,a=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==a?.splitWith);if(a&&!a.hidden&&(V.current.push(n_(a)),V.current.length>Qg&&V.current.shift()),o.length===0){let e=c_();n([e]),i(e.id);return}let s=t.findIndex(t=>t.id===e);n(o),r===e&&i(o[Math.min(s,o.length-1)].id)},[]),mt=(0,_.useCallback)(()=>{let e=V.current.pop();if(!e)return;let t={...c_(e),fresh:!1};n(e=>[...e,t]),i(t.id),r_(t)===`files`&&ct(t.id,i_(t))},[ct]),ht=(0,_.useCallback)((e,t=!1)=>{t?dt(e):lt(a_(W.current),e??$g(`home`))},[lt,dt]),gt=(0,_.useCallback)(e=>{let{tabs:t,activeId:n}=W.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let a=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;i(r[a].id)},[]),_t=(0,_.useCallback)(()=>{let{tabs:e,activeId:t}=W.current,r=e.find(e=>e.id===t);if(!r||r_(r)!==`files`)return;let i=r.splitWith?e.find(e=>e.id===r.splitWith):void 0;if(i){n(e=>e.filter(e=>e.id!==i.id)),it(t,()=>({splitWith:void 0})),pe(`primary`);return}let a=i_(r),o={...c_(a),hidden:!0};n(e=>[...e,o]),it(t,()=>({splitWith:o.id})),ct(o.id,a),pe(`primary`)},[ct,it]),vt=(0,_.useCallback)(e=>{ce(e),la(`yafm.preview.width`,e)},[]),yt=Ie?fe===`secondary`?ue??I:I??ue:I,bt=(0,_.useRef)(null),xt=e=>{e.preventDefault();let t=bt.current?.getBoundingClientRect();if(!t)return;let n=ae?se:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);o(n),la(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},St=(e,t,n)=>{t&&R({x:e.clientX,y:e.clientY,directory:t,refresh:n})},Ct=async e=>{let t=L;R(null),t&&(e?await Xr(t.directory):await Yr(t.directory)).ok&&t.refresh()},wt=L?[{label:e(`New folder`),icon:(0,q.jsx)(bo,{size:14}),shortcut:hi(k.newFolder),onSelect:()=>void Ct(!1)},{label:e(`New file`),icon:(0,q.jsx)(xo,{size:14}),onSelect:()=>void Ct(!0)}]:[],Tt=(0,_.useCallback)(()=>{let{tabs:e}=W.current,t=e.find(e=>e.id===a_(W.current));t&&t.index>0&&ut(t.id,t.history[t.index-1],t.index-1)},[ut]),Et=(0,_.useCallback)(()=>{let{tabs:e}=W.current,t=e.find(e=>e.id===a_(W.current));t&&t.index<t.history.length-1&&ut(t.id,t.history[t.index+1],t.index+1)},[ut]),Dt=(0,_.useCallback)(()=>{let{tabs:e}=W.current,t=e.find(e=>e.id===a_(W.current));t&&r_(t)===`files`&&t.listing?.parent&&ht(t.listing.parent)},[ht]),Ot=(0,_.useRef)(null),kt=(0,_.useCallback)(()=>{for(let e of W.current.tabs)e.listing&&ct(e.id,e.listing.path,!0)},[ct]),At=(0,_.useCallback)(e=>{e.length!==0&&(_e(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),Ae())},[Ae]),jt=(0,_.useCallback)(async e=>{let t=await Gr(e);t.length!==0&&At(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[At]),Mt=(0,_.useCallback)(e=>{let t=new Set(e);_e(e=>e.filter(e=>!t.has(e.path)))},[]),Nt=(0,_.useCallback)(()=>_e([]),[]),Pt=(0,_.useRef)(-1),Ft=(0,_.useCallback)(e=>{ye(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),xe(e.move),e.entries.length>0&&Ae()},[Ae]),It=(0,_.useCallback)(async()=>{if(K.available)try{let e=await Ur();Pt.current=e.sequence,Ft(e)}catch{}},[Ft]),Lt=(0,_.useCallback)(async e=>{e.length!==0&&await Vr(e,!1)&&await It()},[It]),Rt=(0,_.useRef)(H);Rt.current=H,(0,_.useEffect)(()=>(_d(e=>new Promise(t=>Te({initial:e??``,resolve:t}))),vd(e=>new Promise(t=>De({extensions:e??[],resolve:t}))),()=>{_d(null),vd(null)}),[]),(0,_.useEffect)(()=>{let e=e=>{al(e.dataTransfer)&&Ae()},t=e=>{al(e.dataTransfer)&&Ae()};return window.addEventListener(`dragstart`,e),window.addEventListener(`dragenter`,t),()=>{window.removeEventListener(`dragstart`,e),window.removeEventListener(`dragenter`,t)}},[Ae]),(0,_.useEffect)(()=>{let e=()=>ke(e=>o_(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let zt=(0,_.useCallback)(async()=>{let e=Rt.current;if(e.length>0){let t=await Gr(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));_e(e=>e.filter(e=>n.has(e.path)))}await It()},[It]),Bt=(0,_.useCallback)(e=>{let t=o_(e);ke(t),da(`yafm.tray.position`,t)},[]),Vt=(0,_.useCallback)(()=>{Se?Ce(!1):Ae()},[Ae,Se]),Ht=(0,_.useCallback)(async(t,n,r)=>{let i=await Wr(t,n,r);i.ok?(r&&Mt(t),F(e=>e+1),kt(),It()):window.alert(i.error??e(`The files could not be transferred.`))},[kt,It,Mt]);(0,_.useEffect)(()=>{if(K.available)return ci().then(e=>{ge.current=e,he(e)},()=>void 0),K.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>e.kind===`delete`&&!ge.current.some(t=>t.id===e.id));ge.current=n,he(n),r&&B(!0)})},[]);let Ut=(0,_.useCallback)(()=>{li().then(()=>ci().then(e=>{ge.current=e,he(e)},()=>void 0))},[]);(0,_.useEffect)(()=>{if(!K.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await Ur();if(!e||t.sequence===Pt.current)return;Pt.current=t.sequence,Ft(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Ft]);let Wt=(0,_.useCallback)(async e=>{let t=e?await ni():await ri();t.ok?(F(e=>e+1),kt()):t.error&&!t.error.startsWith(`Nothing to`)&&window.alert(t.error)},[kt]),Gt=(0,_.useRef)(He);(0,_.useEffect)(()=>{Gt.current!==He&&(Gt.current=He,kt())},[He,kt]);let Kt=(0,_.useCallback)((e,t)=>{let{tabs:n}=W.current,r=n.find(t=>t.id===e);if(!r||r_(r)!==`files`)return;let i=i_(r),a=tt.current?.defaultView??nr,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||tr.iconSize,gridSize:r.view?.gridSize||a.gridSize||tr.gridSize,sort:r.view?.sort??tr.sort,sortDescending:r.view?.sortDescending??tr.sortDescending,...t};it(e,()=>({view:o})),Ot.current!==null&&window.clearTimeout(Ot.current),Ot.current=window.setTimeout(()=>{Ot.current=null,sr(i,o)},250)},[it]),qt=(0,_.useCallback)(e=>{Kt(a_(W.current),e)},[Kt]),Jt=(0,_.useCallback)(e=>{let t=tt.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??nr,columns:e}};te(n),kr(n)},[]),Yt=(0,_.useCallback)(e=>{let t=tt.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??nr,showImages:e}};te(n),kr(n)},[]),Xt=(0,_.useCallback)(e=>{let t=tt.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??nr,imageStripHeight:e}};te(n),kr(n)},[]),Zt=(0,_.useCallback)((e,t,n,r)=>{let i=W.current.tabs.find(t=>t.id===e);if(!i||r_(i)!==`files`||!i.listing)return;let a=i_(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));it(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),cr(a,t,n,r)},[it]),Qt=(0,_.useCallback)((e,t)=>{let n=W.current.tabs.find(t=>t.id===e);if(!n)return;let r=s_(n,tt.current?.defaultView??nr);Kt(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[Kt]),$t=(0,_.useCallback)((e,t)=>{n(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),en=(0,_.useCallback)(()=>{ur().then(c,()=>c([]))},[]),tn=(0,_.useCallback)(e=>{let t=(e.openTabs??[]).map(t_).filter(e=>e!==null);if(t.length===0)return!1;let r=t.map(e=>({...c_(e),fresh:!1})),a=Math.min(Math.max(e.activeTab??0,0),r.length-1);n(r),i(r[a].id);for(let e of r)r_(e)===`files`&&ct(e.id,i_(e),!0);return!0},[ct]),nn=(0,_.useCallback)(e=>{let t=rt.current;if(rt.current=[],t.length===0)return;let{tabs:n}=W.current;if(!e&&n.length===1&&n[0].fresh){lt(n[0].id,t[0]);for(let e of t.slice(1))dt(e)}else for(let e of t)dt(e)},[dt,lt]),rn=(0,_.useCallback)(()=>{Or().then(e=>{te(e),ee(e.recentLimit);let t={...ui,...e.shortcuts};A(t),fi(t.openInNewTab),M(e=>e+1),nt.current||(nt.current=!0,nn(e.restoreTabs&&tn(e)))},()=>{ee(10),nt.current=!0,nn(!1)})},[nn,tn]),an=(0,_.useCallback)(()=>{br().then(E,()=>E([]))},[]),on=(0,_.useCallback)(()=>{dr().then(u,()=>u([]))},[]),sn=t.filter(e=>!e.hidden),cn=sn.map(n_),ln=cn.join(`
`),un=Math.max(sn.findIndex(e=>e.id===r),0);(0,_.useEffect)(()=>{if(!O?.restoreTabs)return;let e=setTimeout(()=>void Ar(cn,un),700);return()=>clearTimeout(e)},[ln,un,O?.restoreTabs]),(0,_.useEffect)(()=>{let{tabs:e,activeId:t}=W.current,n=e.find(e=>e.id===t);n&&r_(n)===`files`&&ct(n.id,void 0,!0),en(),rn(),on(),Nr().then(f,()=>f(null))},[ct,en,rn,on]),(0,_.useEffect)(()=>{if(Pr().then(m,()=>m(null)),K.available)return K.on(e=>{let t=e;t.type===`app.update`&&t.data&&m(t.data)})},[]),(0,_.useEffect)(()=>{let e=setInterval(on,3e4);return()=>clearInterval(e)},[on]),(0,_.useEffect)(()=>{Me===`home`&&(an(),on())},[Me,je.id,an,on]),(0,_.useEffect)(()=>{if(!K.available)return;let e=K.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=W.current,i=t.data.startup===!0;i&&!nt.current?rt.current.push(n):i&&r.length===1&&r[0].fresh?lt(r[0].id,n):e_(n)?lt(a_(W.current),n):dt(n)});return K.send({type:`app.ready`}),e},[lt,dt]),(0,_.useEffect)(()=>{if(K.available)return K.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:r,sizes:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},n})})},[]),(0,_.useEffect)(()=>{if(K.available)return K.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:r,counts:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},n})})},[]),(0,_.useEffect)(()=>{let e=e=>{if(_i(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),Tt();return}if(e.key===`BrowserForward`){e.preventDefault(),Et();return}if(e.key===`Escape`&&y.open){e.preventDefault(),Ze();return}let t=mi(e);if(t===k.closeTab)e.preventDefault(),pt(a_(W.current));else if(t===k.newTab)e.preventDefault(),dt();else if(t===k.reopenTab)e.preventDefault(),mt();else if(t===k.goBack)e.preventDefault(),Tt();else if(t===k.goForward)e.preventDefault(),Et();else if(t===k.goUp)e.preventDefault(),Dt();else if(t===k.find)e.preventDefault(),Qe();else if(t===k.location)e.preventDefault(),ie(e=>e+1);else if(t===k.home){e.preventDefault();let t=s.find(e=>e.kind===`home`)?.path;t&&ht(t)}else t===k.iconsView?(e.preventDefault(),Me===`files`&&qt({mode:`grid`})):t===k.detailsView?(e.preventDefault(),Me===`files`&&qt({mode:`list`})):t===k.nextTab?(e.preventDefault(),gt(1)):t===k.previousTab?(e.preventDefault(),gt(-1)):t===k.hidden||t===`alt+.`?(e.preventDefault(),Er().then(()=>{F(e=>e+1),kt()})):t===k.undo?(e.preventDefault(),Wt(!0)):t===k.redo?(e.preventDefault(),Wt(!1)):t===k.splitView?(e.preventDefault(),_t()):Me!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),$e(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[k,Me,y.open,pt,mt,dt,Tt,Et,Dt,Qe,Ze,$e,qt,gt,ht,s,kt,Wt,_t]),(0,_.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),Tt()):e.button===4&&(e.preventDefault(),Et())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[Tt,Et]),(0,_.useEffect)(()=>{K.available&&Me===`files`&&K.send({type:`fs.watch`,payload:{paths:[Ne]}})},[Me,Ne]),(0,_.useEffect)(()=>{if(K.available)return K.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let{tabs:n,activeId:r}=W.current,i=n.find(e=>e.id===r);i&&r_(i)===`files`&&u_(i_(i),t.data.path)&&ar(t.data.path,!1,He).then(e=>{let t=W.current.tabs.find(e=>e.id===i.id);t&&r_(t)===`files`&&!t.loading&&u_(i_(t),e.path)&&it(i.id,()=>({listing:e}))},()=>void 0)})},[He,it]);let dn=je.index>0,fn=je.index<je.history.length-1,pn=(e,t)=>{let n=s_(e,Be);return(0,q.jsx)(Pl,{confirmDelete:O?.confirmDelete??!1,previewVideoAudio:O?.previewVideoAudio??!1,previewVideoAutoplay:O?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?le:de,onActivate:()=>pe(t?`primary`:`secondary`),enableShortcuts:!Ie||(t?fe===`primary`:fe===`secondary`),error:e.error,find:e.id===ze.id?{...y,currentPath:Xe<0?null:Ye[Xe]}:void 0,imageStripHeight:Ke,listing:e.listing,loading:e.loading,onImageStripHeight:Xt,onOpen:(t,n)=>{n?dt(t):ct(e.id,t)},onOpenFile:e=>void ir(e),onRefresh:()=>{e.listing&&ct(e.id,e.listing.path,!0)},onSetTags:(t,n,r)=>Zt(e.id,t,n,r),onSort:t=>Qt(e.id,t),onPaste:zt,onClipboardChanged:()=>void It(),onTransfer:Ht,onAddToTray:e=>void jt(e),openOnSingleClick:O?.openOnSingleClick??!1,refreshToken:P,shortcuts:k,showCheckboxes:O?.showCheckboxes??!0,showImages:Ge,view:n})},mn=y.open&&(0,q.jsx)(qu,{current:Xe,focusToken:C,matchCase:y.matchCase,mode:y.mode,onClose:Ze,onMatchCase:()=>b(e=>({...e,matchCase:!e.matchCase})),onMode:()=>b(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>et(1),onPrevious:()=>et(-1),onQuery:e=>b(t=>({...t,query:e})),onRegex:()=>b(e=>({...e,regex:!e.regex})),query:y.query,regex:y.regex,total:Ye.length}),hn=(0,q.jsxs)(v_,{children:[(0,q.jsx)(y_,{"data-shortcut":hi(k.goBack),disabled:!dn,onClick:Tt,title:e(`Back`),type:`button`,children:(0,q.jsx)(Do,{})}),(0,q.jsx)(y_,{"data-shortcut":hi(k.goForward),disabled:!fn,onClick:Et,title:e(`Forward`),type:`button`,children:(0,q.jsx)(Oo,{})}),(0,q.jsx)(y_,{"data-shortcut":hi(k.goUp),disabled:Me!==`files`||!Fe,onClick:()=>Fe&&ht(Fe),title:e(`Up one level`),type:`button`,children:(0,q.jsx)(wo,{})}),(0,q.jsx)(hf,{focusToken:N,icon:qe,label:Me===`files`?void 0:e(Jg[Me]),onNavigate:ht,path:Me===`files`?Pe:Ne}),Me===`files`&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(y_,{onClick:e=>St(e,Pe,()=>void ct(je.id,Pe,!0)),title:e(`New folder or file`),type:`button`,children:(0,q.jsx)(Eo,{})}),(0,q.jsx)(y_,{"data-shortcut":hi(k.find),onClick:Qe,title:e(`Search`),type:`button`,children:(0,q.jsx)(Co,{})})]})]});return(0,q.jsx)(ia,{value:We,children:(0,q.jsxs)(m_,{$rounded:v,children:[(0,q.jsx)(Cg,{activeId:je.id,onClose:pt,onNewTab:()=>dt(),onReorder:$t,onSelect:i,onViewChange:qt,onColumns:Jt,onShowImages:Yt,showImages:Ge,tasks:me,onClearTasks:Ut,activityOpen:z,onActivityOpenChange:B,trayCount:H.length+ve.length,trayVisible:Se,onToggleTray:Vt,split:Ie,canSplit:Me===`files`,onToggleSplit:_t,details:ae,canDetails:Me===`files`||Me===`recycle`,onToggleDetails:()=>oe(e=>!e),shortcuts:k,view:Ve,tabs:t.filter(e=>!e.hidden).map(n=>{let r=r_(n),i=i_(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?i_(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?oa(We,i):void 0,split:!!a,title:r===`files`?sa(We,i,Qi(i)||e(`Files`)):e(Jg[r]),partner:a?{title:sa(We,o,Qi(o)||e(`Files`)),place:oa(We,o)}:void 0}})}),(0,q.jsxs)(h_,{children:[(0,q.jsx)(Af,{activeKind:Me,currentPath:Me===`files`?Ne:``,drives:l,historyVersion:ne,onNavigate:e=>ht(e),onOpenView:ft,homePath:s.find(e=>e.kind===`home`)?.path??``,places:s,recent:T,recentLimit:D,version:j}),(0,q.jsxs)(g_,{children:[Me!==`files`&&hn,(0,q.jsx)(__,{children:Me===`files`?Ie&&U?(0,q.jsxs)(x_,{ref:bt,children:[(0,q.jsxs)(S_,{style:{flex:a},children:[(0,q.jsxs)(b_,{$active:fe===`primary`,onPointerDown:()=>pe(`primary`),children:[(0,q.jsx)(y_,{"data-shortcut":hi(k.goBack),disabled:!dn,onClick:()=>{let e=je.index-1;e>=0&&ut(je.id,je.history[e],e)},title:e(`Back`),type:`button`,children:(0,q.jsx)(Do,{})}),(0,q.jsx)(y_,{"data-shortcut":hi(k.goForward),disabled:!fn,onClick:()=>{let e=je.index+1;e<je.history.length&&ut(je.id,je.history[e],e)},title:e(`Forward`),type:`button`,children:(0,q.jsx)(Oo,{})}),(0,q.jsx)(y_,{"data-shortcut":hi(k.goUp),disabled:!Fe,onClick:()=>Fe&&void ct(je.id,Fe),title:e(`Up one level`),type:`button`,children:(0,q.jsx)(wo,{})}),(0,q.jsx)(hf,{focusToken:fe===`primary`?N:void 0,onNavigate:e=>void ct(je.id,e),path:Pe}),(0,q.jsx)(y_,{onClick:e=>St(e,Pe,()=>void ct(je.id,Pe,!0)),title:e(`New folder or file`),type:`button`,children:(0,q.jsx)(Eo,{})}),(0,q.jsx)(y_,{"data-shortcut":hi(k.find),onClick:Qe,title:e(`Search`),type:`button`,children:(0,q.jsx)(Co,{})})]}),pn(je,!0),fe===`primary`&&mn]}),(0,q.jsx)(C_,{onDoubleClick:()=>o(.5),onPointerDown:xt,title:e(`Drag to resize; double-click to reset`)}),(0,q.jsxs)(S_,{style:{flex:1-a},children:[(0,q.jsxs)(b_,{$active:fe===`secondary`,onPointerDown:()=>pe(`secondary`),children:[(0,q.jsx)(y_,{"data-shortcut":hi(k.goBack),disabled:U.index<=0,onClick:()=>{let e=U.index-1;e>=0&&ut(U.id,U.history[e],e)},title:e(`Back`),type:`button`,children:(0,q.jsx)(Do,{})}),(0,q.jsx)(y_,{"data-shortcut":hi(k.goForward),disabled:U.index>=U.history.length-1,onClick:()=>{let e=U.index+1;e<U.history.length&&ut(U.id,U.history[e],e)},title:e(`Forward`),type:`button`,children:(0,q.jsx)(Oo,{})}),(0,q.jsx)(y_,{"data-shortcut":hi(k.goUp),disabled:!Re,onClick:()=>{Re&&ct(U.id,Re)},title:e(`Up one level`),type:`button`,children:(0,q.jsx)(wo,{})}),(0,q.jsx)(hf,{focusToken:fe===`secondary`?N:void 0,onNavigate:e=>void ct(U.id,e),path:Le}),(0,q.jsx)(y_,{onClick:e=>St(e,Le,()=>void ct(U.id,Le,!0)),title:e(`New folder or file`),type:`button`,children:(0,q.jsx)(Eo,{})}),(0,q.jsx)(y_,{"data-shortcut":hi(k.find),onClick:Qe,title:e(`Search`),type:`button`,children:(0,q.jsx)(Co,{})})]}),pn(U,!1),fe===`secondary`&&mn]}),ae&&(0,q.jsx)(sc,{info:yt,onWidth:vt,videoAudio:O?.previewVideoAudio??!1,videoAutoplay:O?.previewVideoAutoplay??!1,width:se})]}):(0,q.jsxs)(T_,{children:[(0,q.jsxs)(E_,{children:[hn,(0,q.jsxs)(w_,{children:[pn(je,!0),mn]})]}),ae&&(0,q.jsx)(sc,{info:I,onWidth:vt,videoAudio:O?.previewVideoAudio??!1,videoAutoplay:O?.previewVideoAutoplay??!1,width:se})]}):Me===`home`?(0,q.jsx)(uf,{drives:l,historyVersion:ne,homePath:s.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:on,onHistoryChanged:()=>re(e=>e+1),onOpen:ht,onLayoutChanged:rn,onPlacesChanged:c,onRecentCleared:an,places:s,recent:T,recentLimit:D,visibilityVersion:P}):Me===`settings`?(0,q.jsx)(xm,{appInfo:d,focusSection:h,onSettingsChanged:rn}):Me===`gallery`?(0,q.jsx)(id,{confirmDelete:O?.confirmDelete??!1,openOnSingleClick:O?.openOnSingleClick??!1,shortcuts:k,showCheckboxes:O?.showCheckboxes??!0,view:Ve}):(0,q.jsx)(hp,{onOpenLocation:ht,onShowDetails:()=>oe(!0),platform:d?.platform,showDetails:ae,videoAudio:O?.previewVideoAudio??!1,videoAutoplay:O?.previewVideoAutoplay??!1})},Me),(0,q.jsxs)(A_,{children:[(0,q.jsx)(`span`,{children:Me===`files`&&je.listing?f_(e,je.listing):``}),d?(0,q.jsxs)(D_,{children:[(0,q.jsxs)(`span`,{children:[`v`,d.version,` · `,d.platform]}),p?.available&&(0,q.jsxs)(O_,{onClick:()=>{g(`updates`),ft(`settings`)},title:e(`Version {version} is available.`,{version:p.latest}),type:`button`,children:[(0,q.jsx)(k_,{}),e(`Update available`)]})]}):(0,q.jsx)(`span`,{children:`browser preview`})]})]})]}),(0,q.jsx)(ul,{clipboardItems:ve,clipboardMove:be,currentDirectory:Me===`files`?Ne:``,items:H,onAdd:e=>void jt(e),onClear:Nt,onClose:()=>Ce(!1),onCopyToClipboard:e=>void Lt(e),onPosition:Bt,onRemove:Mt,onTransfer:Ht,position:Oe,visible:Se}),L&&(0,q.jsx)(Rs,{items:wt,onClose:()=>R(null),x:L.x,y:L.y}),we&&(0,q.jsx)(Yf,{initial:we.initial,onCancel:()=>{we.resolve(null),Te(null)},onSelect:e=>{we.resolve(e[0]??null),Te(null)}}),Ee&&(0,q.jsx)(Yf,{extensions:Ee.extensions,mode:`file`,onCancel:()=>{Ee.resolve(null),De(null)},onSelect:e=>{Ee.resolve(e[0]??null),De(null)}}),(0,q.jsx)(Ug,{}),(0,q.jsx)(er,{})]})})}var m_=G.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    background: var(--bg-primary);

    /* An undecorated window gets no frame from the compositor, so the corners are drawn here. */
    border-radius: ${({$rounded:e})=>e?`12px`:`0`};
    box-shadow: ${({$rounded:e})=>e?`inset 0 0 0 1px var(--border-color), 0 24px 70px rgba(0, 0, 0, 0.38)`:`none`};
`,h_=G.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
    background:
        radial-gradient(1200px 650px at 12% -10%, rgba(var(--accent-secondary-rgb), 0.12), transparent 60%),
        radial-gradient(900px 520px at 110% 18%, rgba(var(--accent-rgb), 0.09), transparent 55%),
        linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-media) 100%);
`,g_=G.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,__=G.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${Ps}
`,v_=G.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,y_=G.button`
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    flex-shrink: 0;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition: color 130ms ease, border-color 130ms ease, background 130ms ease, transform 130ms ease;

    &:hover:not(:disabled) {
        color: var(--text-primary);
        border-color: var(--border-color-hover);
        background: rgba(var(--accent-rgb), 0.10);
        transform: translateY(-1px);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.32;
        cursor: default;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,b_=G.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,x_=G.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,S_=G.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,C_=G.div`
    position: relative;
    width: 7px;
    flex-shrink: 0;
    cursor: col-resize;
    background: transparent;
    touch-action: none;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 3px;
        width: 1px;
        background: var(--border-color);
        transition: background 120ms ease, box-shadow 120ms ease;
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,w_=G.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,T_=G.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,E_=G.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,D_=G.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,O_=G.button`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 2px 9px;
    border: 1px solid rgba(var(--accent-rgb), 0.55);
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
    font: inherit;
    font-size: 10px;
    font-weight: 600;
    cursor: pointer;
    animation: updatePulse 2.4s ease-in-out infinite;

    &:hover {
        border-color: var(--accent-primary);
        background: rgba(var(--accent-rgb), 0.32);
    }

    &:focus-visible {
        outline: 1px solid var(--border-color-focus);
        outline-offset: 2px;
    }

    @keyframes updatePulse {
        0%, 100% {
            box-shadow: 0 0 0 0 rgba(var(--accent-rgb), 0);
        }
        50% {
            box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.16);
        }
    }
`,k_=G.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,A_=G.footer`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 7px 20px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
    font-variant-numeric: tabular-nums;
`;function j_({mode:e,multiple:t,extensions:n,initial:r}){let i=qn(),a=Zn();return(0,q.jsxs)(M_,{children:[(0,q.jsxs)(N_,{...a,children:[(0,q.jsx)(P_,{children:(0,q.jsx)(Lo,{size:17})}),(0,q.jsx)(F_,{children:i(e===`file`?`Choose a file`:`Choose a folder`)}),(0,q.jsx)(I_,{children:(0,q.jsx)(L_,{onClick:()=>K.send({type:`pick.cancel`}),title:i(`Cancel`),type:`button`,children:(0,q.jsx)(Io,{size:12})})})]}),(0,q.jsx)(R_,{children:(0,q.jsx)(Yf,{extensions:n,initial:r,inline:!0,mode:e,multiple:t,onCancel:()=>K.send({type:`pick.cancel`}),onSelect:e=>K.send({type:`pick.submit`,payload:{paths:e}})})}),(0,q.jsx)(er,{})]})}var M_=G.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,N_=G.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,P_=G.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,F_=G.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,I_=G.div`
    display: flex;
    flex-shrink: 0;
`,L_=G.button`
    display: grid;
    place-items: center;
    width: 46px;
    height: 44px;
    border: 0;
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    transition: background 100ms ease, color 100ms ease;

    &:hover {
        background: #e81123;
        color: #fff;
    }
`,R_=G.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,z_=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,z_);var B_=document.getElementById(`root`),V_=new URLSearchParams(window.location.search),H_=V_.get(`picker`),U_=V_.get(`filter`)??``;B_&&(0,v.createRoot)(B_).render((0,q.jsx)(_.StrictMode,{children:(0,q.jsx)(Jn,{children:H_===`folder`||H_===`file`?(0,q.jsx)(j_,{extensions:U_?U_.split(`;`).filter(Boolean):[],initial:V_.get(`initial`)??``,mode:H_,multiple:V_.get(`multiple`)===`1`}):(0,q.jsx)(p_,{})})}));