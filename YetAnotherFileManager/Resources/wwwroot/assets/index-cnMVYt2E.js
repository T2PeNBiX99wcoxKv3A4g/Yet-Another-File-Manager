var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return D(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var k=/\/+/g;function A(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function ne(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function re(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,re(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+A(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(k,`$&/`)+`/`),re(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(k,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+A(a,u),c+=re(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+A(a,u++),c+=re(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return re(ne(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function j(e,t,n){if(e==null)return e;var r=[],i=0;return re(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ie(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var M=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function ae(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,M)}catch(e){M(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function N(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else ae(N.bind(null,e))}var oe={map:j,forEach:function(e,t,n){j(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return j(e,function(){t++}),t},toArray:function(e){return j(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=oe,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=N,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ie}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=ae,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,ee());else{var t=n(l);t!==null&&k(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&k(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ee():S=!1}}}var ee;if(typeof y==`function`)ee=function(){y(D)};else if(typeof MessageChannel<`u`){var O=new MessageChannel,te=O.port2;O.port1.onmessage=D,ee=function(){te.postMessage(null)}}else ee=function(){_(D,0)};function k(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,k(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,ee()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function E(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var D=Object.assign,ee=Symbol.for(`react.element`),O=Symbol.for(`react.transitional.element`),te=Symbol.for(`react.portal`),k=Symbol.for(`react.fragment`),A=Symbol.for(`react.strict_mode`),ne=Symbol.for(`react.profiler`),re=Symbol.for(`react.consumer`),j=Symbol.for(`react.context`),ie=Symbol.for(`react.forward_ref`),M=Symbol.for(`react.suspense`),ae=Symbol.for(`react.suspense_list`),N=Symbol.for(`react.memo`),oe=Symbol.for(`react.lazy`),se=Symbol.for(`react.activity`),ce=Symbol.for(`react.legacy_hidden`),le=Symbol.for(`react.memo_cache_sentinel`),ue=Symbol.for(`react.view_transition`),de=Symbol.for(`react.recoverable`),fe=Symbol.iterator;function P(e){return typeof e!=`object`||!e?null:(e=fe&&e[fe]||e[`@@iterator`],typeof e==`function`?e:null)}var F=Symbol.for(`react.client.reference`);function pe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===F?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case k:return`Fragment`;case ne:return`Profiler`;case A:return`StrictMode`;case M:return`Suspense`;case ae:return`SuspenseList`;case se:return`Activity`;case ue:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case te:return`Portal`;case j:return e.displayName||`Context`;case re:return(e._context.displayName||`Context`)+`.Consumer`;case ie:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case N:return t=e.displayName||null,t===null?pe(e.type)||`Memo`:t;case oe:t=e._payload,e=e._init;try{return pe(e(t))}catch{}}return null}var me=Array.isArray,I=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R={pending:!1,data:null,method:null,action:null},he=[],z=-1;function ge(e){return{current:e}}function _e(e){0>z||(e.current=he[z],he[z]=null,z--)}function ve(e,t){z++,he[z]=e.current,e.current=t}var ye=ge(null),be=ge(null),xe=ge(null),Se=ge(null);function B(e,t){switch(ve(xe,t),ve(be,e),ve(ye,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?fp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=fp(t),e=pp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}_e(ye),ve(ye,e)}function Ce(){_e(ye),_e(be),_e(xe)}function we(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,ve(Se,e)),t=ye.current;var n=pp(t,e.type);t!==n&&(ve(be,e),ve(ye,n))}function Te(e){be.current===e&&(_e(ye),_e(be)),Se.current===e&&(_e(Se),sh._currentValue=R)}var Ee,De;function Oe(e){if(Ee===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ee=t&&t[1]||``,De=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ee+e+De}var ke=!1;function Ae(e,t){if(!e||ke)return``;ke=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ke=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Oe(n):``}function je(e,t){switch(e.tag){case 26:case 27:case 5:return Oe(e.type);case 16:return Oe(`Lazy`);case 13:return e.child!==t&&t!==null?Oe(`Suspense Fallback`):Oe(`Suspense`);case 19:return Oe(`SuspenseList`);case 0:case 15:return Ae(e.type,!1);case 11:return Ae(e.type.render,!1);case 1:return Ae(e.type,!0);case 31:return Oe(`Activity`);case 30:return Oe(`ViewTransition`);default:return``}}function Me(e){try{var t=``,n=null;do t+=je(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ne=Object.prototype.hasOwnProperty,Pe=t.unstable_scheduleCallback,Fe=t.unstable_cancelCallback,Ie=t.unstable_shouldYield,Le=t.unstable_requestPaint,Re=t.unstable_now,ze=t.unstable_getCurrentPriorityLevel,Be=t.unstable_ImmediatePriority,Ve=t.unstable_UserBlockingPriority,He=t.unstable_NormalPriority,Ue=t.unstable_LowPriority,We=t.unstable_IdlePriority,Ge=t.log,Ke=t.unstable_setDisableYieldValue,qe=null,Je=null;function Ye(e){if(typeof Ge==`function`&&Ke(e),Je&&typeof Je.setStrictMode==`function`)try{Je.setStrictMode(qe,e)}catch{}}var V=Math.clz32?Math.clz32:Qe,Xe=Math.log,Ze=Math.LN2;function Qe(e){return e>>>=0,e===0?32:31-(Xe(e)/Ze|0)|0}var $e=256,et=262144,tt=4194304;function nt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function rt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=nt(n))):i=nt(o):i=nt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=nt(n))):i=nt(o)):i=nt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function it(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function at(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-V(n),i=1<<r;t|=e[r],n&=~i}return t}function ot(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function st(){var e=tt;return tt<<=1,!(tt&62914560)&&(tt=4194304),e}function ct(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ut(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-V(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&dt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function dt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-V(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ft(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-V(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function pt(e,t){var n=t&-t;return n=n&42?1:mt(n),(n&(e.suspendedLanes|t))===0?n:0}function mt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ht(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function gt(){var e=L.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function _t(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}var vt=Math.random().toString(36).slice(2),yt=`__reactFiber$`+vt,bt=`__reactProps$`+vt,xt=`__reactContainer$`+vt,St=`__reactEvents$`+vt,Ct=`__reactListeners$`+vt,wt=`__reactHandles$`+vt,Tt=`__reactResources$`+vt,Et=`__reactMarker$`+vt,Dt=`__reactLoad$`+vt;function H(e){delete e[yt],delete e[bt],delete e[Ct],delete e[wt]}function Ot(e){var t;if(t=e[yt])return t;for(var n=e.parentNode;n;){if(t=n[xt]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[yt])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function kt(e){if(e=e[yt]||e[xt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function At(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function jt(e){var t=e[Tt];return t||=e[Tt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Mt(e){e[Et]=!0}function Nt(e){e[Dt]=void 0}var Pt=new Set,Ft={};function It(e,t){Lt(e,t),Lt(e+`Capture`,t)}function Lt(e,t){for(Ft[e]=t,e=0;e<t.length;e++)Pt.add(t[e])}var Rt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),zt={},Bt={};function Vt(e){return Ne.call(Bt,e)?!0:Ne.call(zt,e)?!1:Rt.test(e)?Bt[e]=!0:(zt[e]=!0,!1)}var Ht=!1;function Ut(){var e=Ht;return Ht=!1,e}function Wt(e,t,n){if(Vt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Gt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Kt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function qt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Jt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Yt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xt(e){if(!e._valueTracker){var t=Jt(e)?`checked`:`value`;e._valueTracker=Yt(e,t,``+e[t])}}function Zt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Jt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var Qt=/[\n"\\]/g;function $t(e){return e.replace(Qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function en(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+qt(t)):e.value!==``+qt(t)&&(e.value=``+qt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):nn(e,qt(n)):o===`number`&&e.value==t?nn(e,qt(e.value)):nn(e,qt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+qt(s):e.removeAttribute(`name`)}function tn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Xt(e);return}n=n==null?``:``+qt(n),t=t==null?n:``+qt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Xt(e)}function nn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function rn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+qt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function an(e,t,n){t!=null&&(t=``+qt(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+qt(n)}function on(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(me(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=qt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Xt(e)}function sn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var cn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function ln(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||cn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function un(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,Ht=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(ln(e,a,r),Ht=!0)}else for(var o in t)t.hasOwnProperty(o)&&ln(e,o,t[o])}function dn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var fn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),pn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mn(e){return pn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function hn(){}var gn=null;function _n(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vn=null,yn=null;function bn(e){var t=kt(e);if(t&&(e=t.stateNode)){var n=e[bt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(en(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+$t(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[bt]||null;if(!a)throw Error(i(90));en(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Zt(r)}break a;case`textarea`:an(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&rn(e,!!n.multiple,t,!1)}}}var xn=!1;function Sn(e,t,n){if(xn)return e(t,n);xn=!0;try{return e(t)}finally{if(xn=!1,(vn!==null||yn!==null)&&(zd(),vn&&(t=vn,e=yn,yn=vn=null,bn(t),e)))for(t=0;t<e.length;t++)bn(e[t])}}function Cn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[bt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var wn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Tn=!1;if(wn)try{var En={};Object.defineProperty(En,"passive",{get:function(){Tn=!0}}),window.addEventListener(`test`,En,En),window.removeEventListener(`test`,En,En)}catch{Tn=!1}var Dn=null,On=null,kn=null;function An(){if(kn)return kn;var e,t=On,n=t.length,r,i=`value`in Dn?Dn.value:Dn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return kn=i.slice(e,1<r?1-r:void 0)}function jn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mn(){return!0}function U(){return!1}function Nn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Mn:U,this.isPropagationStopped=U,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Mn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Mn)},persist:function(){},isPersistent:Mn}),t}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fn=Nn(Pn),In=D({},Pn,{view:0,detail:0}),Ln=Nn(In),Rn,zn,Bn,W=D({},In,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Bn&&(Bn&&e.type===`mousemove`?(Rn=e.screenX-Bn.screenX,zn=e.screenY-Bn.screenY):zn=Rn=0,Bn=e),Rn)},movementY:function(e){return`movementY`in e?e.movementY:zn}}),Vn=Nn(W),G=Nn(D({},W,{dataTransfer:0})),Hn=Nn(D({},In,{relatedTarget:0})),Un=Nn(D({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0})),Wn=Nn(D({},Pn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Gn=Nn(D({},Pn,{data:0})),Kn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},qn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Jn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Yn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jn[e])?!!t[e]:!1}function Xn(){return Yn}var Zn=Nn(D({},In,{key:function(e){if(e.key){var t=Kn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=jn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?qn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xn,charCode:function(e){return e.type===`keypress`?jn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?jn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Qn=Nn(D({},W,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),$n=Nn(D({},Pn,{submitter:0})),er=Nn(D({},In,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xn})),tr=Nn(D({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0})),nr=Nn(D({},W,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),rr=Nn(D({},Pn,{newState:0,oldState:0,source:0})),ir=[9,13,27,32],ar=wn&&`CompositionEvent`in window,or=null;wn&&`documentMode`in document&&(or=document.documentMode);var sr=wn&&`TextEvent`in window&&!or,cr=wn&&(!ar||or&&8<or&&11>=or),lr=` `,ur=!1;function dr(e,t){switch(e){case`keyup`:return ir.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function fr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var pr=!1;function mr(e,t){switch(e){case`compositionend`:return fr(t);case`keypress`:return t.which===32?(ur=!0,lr):null;case`textInput`:return e=t.data,e===lr&&ur?null:e;default:return null}}function hr(e,t){if(pr)return e===`compositionend`||!ar&&dr(e,t)?(e=An(),kn=On=Dn=null,pr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return cr&&t.locale!==`ko`?null:t.data;default:return null}}var gr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _r(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!gr[e.type]:t===`textarea`}function vr(e,t,n,r){vn?yn?yn.push(r):yn=[r]:vn=r,t=Yf(t,`onChange`),0<t.length&&(n=new Fn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var yr=null,br=null;function xr(e){Hf(e,0)}function Sr(e){if(Zt(At(e)))return e}function Cr(e,t){if(e===`change`)return t}var wr=!1;if(wn){var Tr;if(wn){var Er=`oninput`in document;if(!Er){var Dr=document.createElement(`div`);Dr.setAttribute(`oninput`,`return;`),Er=typeof Dr.oninput==`function`}Tr=Er}else Tr=!1;wr=Tr&&(!document.documentMode||9<document.documentMode)}function Or(){yr&&(yr.detachEvent(`onpropertychange`,kr),br=yr=null)}function kr(e){if(e.propertyName===`value`&&Sr(br)){var t=[];vr(t,br,e,_n(e)),Sn(xr,t)}}function Ar(e,t,n){e===`focusin`?(Or(),yr=t,br=n,yr.attachEvent(`onpropertychange`,kr)):e===`focusout`&&Or()}function jr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Sr(br)}function Mr(e,t){if(e===`click`)return Sr(t)}function Nr(e,t){if(e===`input`||e===`change`)return Sr(t)}function Pr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Fr=typeof Object.is==`function`?Object.is:Pr;function Ir(e,t){if(Fr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ne.call(t,i)||!Fr(e[i],t[i]))return!1}return!0}function Lr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Rr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zr(e,t){var n=Rr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Rr(n)}}function Br(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Br(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Lr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lr(e.document)}return t}function Hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ur=wn&&`documentMode`in document&&11>=document.documentMode,Wr=null,Gr=null,Kr=null,qr=!1;function Jr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qr||Wr==null||Wr!==Lr(r)||(r=Wr,`selectionStart`in r&&Hr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Kr&&Ir(Kr,r)||(Kr=r,r=Yf(Gr,`onSelect`),0<r.length&&(t=new Fn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Wr)))}function Yr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Xr={animationend:Yr(`Animation`,`AnimationEnd`),animationiteration:Yr(`Animation`,`AnimationIteration`),animationstart:Yr(`Animation`,`AnimationStart`),transitionrun:Yr(`Transition`,`TransitionRun`),transitionstart:Yr(`Transition`,`TransitionStart`),transitioncancel:Yr(`Transition`,`TransitionCancel`),transitionend:Yr(`Transition`,`TransitionEnd`)},Zr={},Qr={};wn&&(Qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),`TransitionEvent`in window||delete Xr.transitionend.transition);function $r(e){if(Zr[e])return Zr[e];if(!Xr[e])return e;var t=Xr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qr)return Zr[e]=t[n];return e}var ei=$r(`animationend`),ti=$r(`animationiteration`),ni=$r(`animationstart`),ri=$r(`transitionrun`),ii=$r(`transitionstart`),ai=$r(`transitioncancel`),oi=$r(`transitionend`),si=new Map,ci=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ci.push(`scrollEnd`);function li(e,t){si.set(e,t),It(t,[e])}var ui=0;function di(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=ui++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function fi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function pi(e,t){return e=fi(e),t=fi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var mi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},hi=[],gi=0,_i=0;function vi(){for(var e=gi,t=_i=gi=0;t<e;){var n=hi[t];hi[t++]=null;var r=hi[t];hi[t++]=null;var i=hi[t];hi[t++]=null;var a=hi[t];if(hi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Si(n,i,a)}}function yi(e,t,n,r){hi[gi++]=e,hi[gi++]=t,hi[gi++]=n,hi[gi++]=r,_i|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function bi(e,t,n,r){return yi(e,t,n,r),Ci(e)}function xi(e,t){return yi(e,null,null,t),Ci(e)}function Si(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-V(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Ci(e){if(50<kd)throw kd=0,Ad=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var wi={};function Ti(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(e,t,n,r){return new Ti(e,t,n,r)}function Di(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Oi(e,t){var n=e.alternate;return n===null?(n=Ei(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ki(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ai(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Di(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,ye.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case se:return e=Ei(31,n,t,a),e.elementType=se,e.lanes=o,e;case k:return ji(n.children,a,o,t);case A:s=8,a|=24;break;case ne:return e=Ei(12,n,t,a|2),e.elementType=ne,e.lanes=o,e;case M:return e=Ei(13,n,t,a),e.elementType=M,e.lanes=o,e;case ae:return e=Ei(19,n,t,a),e.elementType=ae,e.lanes=o,e;case ce:case ue:return e=a|32,e=Ei(30,n,t,e),e.elementType=ue,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case j:s=10;break a;case re:s=9;break a;case ie:s=11;break a;case N:s=14;break a;case oe:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Ei(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function ji(e,t,n,r){return e=Ei(7,e,r,t),e.lanes=n,e}function Mi(e,t,n){return e=Ei(6,e,null,t),e.lanes=n,e}function Ni(e){var t=Ei(18,null,null,0);return t.stateNode=e,t}function Pi(e,t,n){return t=Ei(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Fi=new WeakMap;function Ii(e,t){if(typeof e==`object`&&e){var n=Fi.get(e);return n===void 0?(t={value:e,source:t,stack:Me(t)},Fi.set(e,t),t):n}return{value:e,source:t,stack:Me(t)}}var Li=[],Ri=0,zi=null,Bi=0,Vi=[],Hi=0,Ui=null,Wi=1,Gi=``;function Ki(e,t){Li[Ri++]=Bi,Li[Ri++]=zi,zi=e,Bi=t}function qi(e,t,n){Vi[Hi++]=Wi,Vi[Hi++]=Gi,Vi[Hi++]=Ui,Ui=e;var r=Wi;e=Gi;var i=32-V(r)-1;r&=~(1<<i),n+=1;var a=32-V(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wi=1<<32-V(t)+i|n<<i|r,Gi=a+e}else Wi=1<<a|n<<i|r,Gi=e}function Ji(e){e.return!==null&&(Ki(e,1),qi(e,1,0))}function Yi(e){for(;e===zi;)zi=Li[--Ri],Li[Ri]=null,Bi=Li[--Ri],Li[Ri]=null;for(;e===Ui;)Ui=Vi[--Hi],Vi[Hi]=null,Gi=Vi[--Hi],Vi[Hi]=null,Wi=Vi[--Hi],Vi[Hi]=null}function Xi(e,t){Vi[Hi++]=Wi,Vi[Hi++]=Gi,Vi[Hi++]=Ui,Wi=t.id,Gi=t.overflow,Ui=e}var Zi=null,Qi=null,K=!1,$i=null,ea=!1,ta=Error(i(519));function na(e){throw ca(Ii(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),ta}function ra(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[yt]=e,t[bt]=r,n){case`dialog`:Z(`cancel`,t),Z(`close`,t);break;case`iframe`:case`object`:case`embed`:Z(`load`,t);break;case`video`:case`audio`:for(n=0;n<Bf.length;n++)Z(Bf[n],t);break;case`source`:Z(`error`,t);break;case`img`:case`image`:case`link`:Z(`error`,t),Z(`load`,t);break;case`details`:Z(`toggle`,t);break;case`input`:Z(`invalid`,t),tn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Z(`invalid`,t);break;case`textarea`:Z(`invalid`,t),on(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||tp(t.textContent,n)?(r.popover!=null&&(Z(`beforetoggle`,t),Z(`toggle`,t)),r.onScroll!=null&&Z(`scroll`,t),r.onScrollEnd!=null&&Z(`scrollend`,t),r.onClick!=null&&(t.onclick=hn),t=!0):t=!1,t||na(e,!0)}function ia(e){for(Zi=e.return;Zi;)switch(Zi.tag){case 5:case 31:case 13:ea=!1;return;case 27:case 3:ea=!0;return;default:Zi=Zi.return}}function aa(e){if(e!==Zi)return!1;if(!K)return ia(e),K=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||hp(e.type,e.memoizedProps)),n=!n),n&&Qi&&na(e),ia(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Qi=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Qi=dm(e)}else t===27?(t=Qi,$(e.type)?(e=um,um=null,Qi=e):Qi=t):Qi=Zi?lm(e.stateNode.nextSibling):null;return!0}function oa(){Qi=Zi=null,K=!1}function sa(){var e=$i;return e!==null&&(fd===null?fd=e:fd.push.apply(fd,e),$i=null),e}function ca(e){$i===null?$i=[e]:$i.push(e)}var la=ge(null),ua=null,da=null;function fa(e,t,n){ve(la,t._currentValue),t._currentValue=n}function pa(e){e._currentValue=la.current,_e(la)}function ma(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ha(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ma(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ma(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ma(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ga(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Fr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Se.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&ha(t,e,n,r),t.flags|=262144,e!==null}function _a(e){for(e=e.firstContext;e!==null;){if(!Fr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function va(e){ua=e,da=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ya(e){return xa(ua,e)}function ba(e,t){return ua===null&&va(e),xa(e,t)}function xa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},da===null){if(e===null)throw Error(i(308));da=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else da=da.next=t;return n}var Sa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Ca=t.unstable_scheduleCallback,wa=t.unstable_NormalPriority,Ta={$$typeof:j,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ea(){return{controller:new Sa,data:new Map,refCount:0}}function Da(e){e.refCount--,e.refCount===0&&Ca(wa,function(){e.controller.abort()})}function Oa(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var ka=null;function Aa(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var ja=null,Ma=0,Na=0,Pa=null;function Fa(e,t){if(ja===null){var n=ja=[];Ma=0,Na=Ff(),Pa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ma++,t.then(Ia,Ia),t}function Ia(){if(--Ma===0&&(ka=null,ja!==null)){Pa!==null&&(Pa.status=`fulfilled`);var e=ja;ja=null,Na=0,Pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function La(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ra=I.S;I.S=function(e,t){if(hd=Re(),typeof t==`object`&&t&&typeof t.then==`function`&&Fa(e,t),ka!==null)for(var n=xf;n!==null;)Oa(n,ka),n=n.next;if(n=e.types,n!==null){for(var r=xf;r!==null;)Oa(r,n),r=r.next;if(Na!==0){r=ka,r===null&&(r=ka=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Ra!==null&&Ra(e,t)};var za=ge(null);function Ba(){var e=za.current;return e===null?Qu.pooledCache:e}function Va(e,t){t===null?ve(za,za.current):ve(za,t.pool)}function Ha(){var e=Ba();return e===null?null:{parent:Ta._currentValue,pool:e}}var Ua=Error(i(460)),Wa=Error(i(474)),Ga=Error(i(542)),Ka={then:function(){}};function qa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ja(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(hn,hn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Qa(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(hn,hn);else{if(e=Qu,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Qa(e),e}throw Xa=t,Ua}}function Ya(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Xa=e,Ua):e}}var Xa=null;function Za(){if(Xa===null)throw Error(i(459));var e=Xa;return Xa=null,e}function Qa(e){if(e===Ua||e===Ga)throw Error(i(483))}var $a=null,eo=0;function to(e){var t=eo;return eo+=1,$a===null&&($a=[]),Ja($a,e,t)}function no(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function ro(e,t){throw t.$$typeof===ee?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function io(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Oi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Mi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===k?(e=d(e,t,n.props.children,r,n.key),no(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===oe&&Ya(i)===t.type)?(t=a(t,n.props),no(t,n),t.return=e,t):(t=Ai(n.type,n.key,n.props,null,e.mode,r),no(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Pi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=ji(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Mi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case O:return n=Ai(t.type,t.key,t.props,null,e.mode,n),no(n,t),n.return=e,n;case te:return t=Pi(t,e.mode,n),t.return=e,t;case oe:return t=Ya(t),f(e,t,n)}if(me(t)||P(t))return t=ji(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,to(t),n);if(t.$$typeof===j)return f(e,ba(e,t),n);ro(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case O:return n.key===i?l(e,t,n,r):null;case te:return n.key===i?u(e,t,n,r):null;case oe:return n=Ya(n),p(e,t,n,r)}if(me(n)||P(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,to(n),r);if(n.$$typeof===j)return p(e,t,ba(e,n),r);ro(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case O:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case te:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case oe:return r=Ya(r),m(e,t,n,r,i)}if(me(r)||P(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,to(r),i);if(r.$$typeof===j)return m(e,t,n,ba(t,r),i);ro(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),K&&Ki(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return K&&Ki(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),K&&Ki(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),K&&Ki(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return K&&Ki(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),K&&Ki(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===k&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case O:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===k){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),no(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===oe&&Ya(l)===r.type){n(e,r.sibling),c=a(r,o.props),no(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===k?(c=ji(o.props.children,e.mode,c,o.key),no(c,o),c.return=e,e=c):(c=Ai(o.type,o.key,o.props,null,e.mode,c),no(c,o),c.return=e,e=c)}return s(e);case te:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Pi(o,e.mode,c),c.return=e,e=c}return s(e);case oe:return o=Ya(o),_(e,r,o,c)}if(me(o))return h(e,r,o,c);if(P(o)){if(l=P(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,to(o),c);if(o.$$typeof===j)return _(e,r,ba(e,o),c);ro(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Mi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{eo=0;var i=_(e,t,n,r);return $a=null,i}catch(t){if(t===Ua||t===Ga)throw t;var a=Ei(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var ao=io(!0),oo=io(!1),so=!1;function co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function uo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Zu&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Ci(e),Si(e,null,n),t}return yi(e,r,t,n),Ci(e)}function po(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ft(e,n)}}function mo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ho=!1;function go(){if(ho){var e=Pa;if(e!==null)throw e}}function _o(e,t,n,r){ho=!1;var i=e.updateQueue;so=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(X&f)===f:(r&f)===f){f!==0&&f===Na&&(ho=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=D({},d,f);break a;case 2:so=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),od|=o,e.lanes=o,e.memoizedState=d}}function q(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function vo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)q(n[e],t)}var yo=ge(null),bo=ge(0);function xo(e,t){e=id,ve(bo,e),ve(yo,t),id=e|t.baseLanes}function So(){ve(bo,id),ve(yo,yo.current)}function Co(){id=bo.current,_e(yo),_e(bo)}var wo=ge(null),To=null;function Eo(e){var t=e.alternate;ve(jo,jo.current&1),ve(wo,e),To===null&&(t===null||yo.current!==null||t.memoizedState!==null)&&(To=e)}function Do(e){ve(jo,jo.current),ve(wo,e),To===null&&(To=e)}function Oo(e){e.tag===22?(ve(jo,jo.current),ve(wo,e),To===null&&(To=e)):ko()}function ko(){ve(jo,jo.current),ve(wo,wo.current)}function Ao(e){_e(wo),To===e&&(To=null),_e(jo)}var jo=ge(0);function Mo(e,t){ve(wo,wo.current),ve(jo,t)}function No(e){_e(jo),_e(wo),To===e&&(To=null)}function Po(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fo=0,J=null,Io=null,Lo=null,Ro=!1,zo=!1,Bo=!1,Vo=0,Ho=0,Uo=null,Wo=0;function Go(){throw Error(i(321))}function Ko(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fr(e[n],t[n]))return!1;return!0}function qo(e,t,n,r,i,a){return Fo=a,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,I.H=e===null||e.memoizedState===null?uc:dc,Bo=!1,a=n(r,i),Bo=!1,zo&&(a=Yo(t,n,r,i)),Jo(e),a}function Jo(e){I.H=lc;var t=Io!==null&&Io.next!==null;if(Fo=0,Lo=Io=J=null,Ro=!1,Ho=0,Uo=null,t)throw Error(i(300));e===null||Oc||(e=e.dependencies,e!==null&&_a(e)&&(Oc=!0))}function Yo(e,t,n,r){J=e;var a=0;do{if(zo&&(Uo=null),Ho=0,zo=!1,25<=a)throw Error(i(301));if(a+=1,Lo=Io=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}I.H=fc,o=t(n,r)}while(zo);return o}function Xo(){var e=I.H,t=e.useState()[0];return t=typeof t.then==`function`?rs(t):t,e=e.useState()[0],(Io===null?null:Io.memoizedState)!==e&&(J.flags|=1024),t}function Zo(){var e=Vo!==0;return Vo=0,e}function Qo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function $o(e){if(Ro){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ro=!1}Fo=0,Lo=Io=J=null,zo=!1,Ho=Vo=0,Uo=null}function es(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lo===null?J.memoizedState=Lo=e:Lo=Lo.next=e,Lo}function ts(){if(Io===null){var e=J.alternate;e=e===null?null:e.memoizedState}else e=Io.next;var t=Lo===null?J.memoizedState:Lo.next;if(t!==null)Lo=t,Io=e;else{if(e===null)throw J.alternate===null?Error(i(467)):Error(i(310));Io=e,e={memoizedState:Io.memoizedState,baseState:Io.baseState,baseQueue:Io.baseQueue,queue:Io.queue,next:null},Lo===null?J.memoizedState=Lo=e:Lo=Lo.next=e}return Lo}function ns(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rs(e){var t=Ho;return Ho+=1,Uo===null&&(Uo=[]),e=Ja(Uo,e,t),t=J,(Lo===null?t.memoizedState:Lo.next)===null&&(t=t.alternate,I.H=t===null||t.memoizedState===null?uc:dc),e}function is(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return rs(e);if(e.$$typeof===de)return;if(e.$$typeof===j)return ya(e)}throw Error(i(438,String(e)))}function as(e){var t=null,n=J.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=J.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ns(),J.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=le;return t.index++,n}function os(e,t){return typeof t==`function`?t(e):t}function ss(e){return cs(ts(),Io,e)}function cs(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Fo&f)===f:(X&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Na&&(d=!0);else if((Fo&p)===p){u=u.next,p===Na&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,J.lanes|=p,od|=p;f=u.action,Bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,J.lanes|=f,od|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Fr(o,e.memoizedState)&&(Oc=!0,d&&(n=Pa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ls(e){var t=ts(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Fr(o,t.memoizedState)||(Oc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function us(e,t,n){var r=J,a=ts(),o=K;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Fr((Io||a).memoizedState,n);if(s&&(a.memoizedState=n,Oc=!0),a=a.queue,Fs(ps.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Lo!==null&&!!(Lo.memoizedState.tag&1),As(e?9:8,{destroy:void 0},fs.bind(null,r,a,n,t),null),e){if(r.flags|=2048,Qu===null)throw Error(i(349));o||Fo&127||ds(r,t,n)}return n}function ds(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t=ns(),J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fs(e,t,n,r){t.value=n,t.getSnapshot=r,ms(t)&&hs(e)}function ps(e,t,n){return n(function(){ms(t)&&hs(e)})}function ms(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fr(e,n)}catch{return!0}}function hs(e){var t=xi(e,2);t!==null&&Pd(t,e,2)}function gs(e){var t=es();if(typeof e==`function`){var n=e;if(e=n(),Bo){Ye(!0);try{n()}finally{Ye(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:e},t}function _s(e,t,n,r){return e.baseState=n,cs(e,Io,typeof r==`function`?r:os)}function vs(e,t,n,r,a){if(oc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};I.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,ys(t,o)):(o.next=n.next,t.pending=n.next=o)}}function ys(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=I.T,o={};o.types=a===null?null:a.types,I.T=o;try{var s=n(i,r),c=I.S;c!==null&&c(o,s),bs(e,t,s)}catch(n){Ss(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),I.T=a}}else try{a=n(i,r),bs(e,t,a)}catch(n){Ss(e,t,n)}}function bs(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){xs(e,t,n)},function(n){return Ss(e,t,n)}):xs(e,t,n)}function xs(e,t,n){t.status=`fulfilled`,t.value=n,Cs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ys(e,n)))}function Ss(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Cs(t),t=t.next;while(t!==r)}e.action=null}function Cs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ws(e,t){return t}function Ts(e,t){if(K){var n=Qu.formState;if(n!==null){a:{var r=J;if(K){if(Qi){b:{for(var i=Qi,a=ea;i.nodeType!==8;)if(!a||(i=lm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Qi=lm(i.nextSibling),r=i.data===`F!`;break a}}na(r)}r=!1}r&&(t=n[0])}}return n=es(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ws,lastRenderedState:t},n.queue=r,n=rc.bind(null,J,r),r.dispatch=n,r=gs(!1),a=ac.bind(null,J,!1,r.queue),r=es(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=vs.bind(null,J,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Es(e){return Ds(ts(),Io,e)}function Ds(e,t,n){if(t=cs(e,t,ws)[0],e=ss(os)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=rs(t)}catch(e){throw e===Ua?Ga:e}else r=t;t=ts();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(J.flags|=2048,As(9,{destroy:void 0},Os.bind(null,i,n),null)),[r,a,e]}function Os(e,t){e.action=t}function ks(e){var t=ts(),n=Io;if(n!==null)return Ds(t,n,e);ts(),t=t.memoizedState,n=ts();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function As(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=J.updateQueue,t===null&&(t=ns(),J.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function js(){return ts().memoizedState}function Ms(e,t,n,r){var i=es();J.flags|=e,i.memoizedState=As(1|t,{destroy:void 0},n,r===void 0?null:r)}function Ns(e,t,n,r){var i=ts();r=r===void 0?null:r;var a=i.memoizedState.inst;Io!==null&&r!==null&&Ko(r,Io.memoizedState.deps)?i.memoizedState=As(t,a,n,r):(J.flags|=e,i.memoizedState=As(1|t,a,n,r))}function Ps(e,t){Ms(8390656,8,e,t)}function Fs(e,t){Ns(2048,8,e,t)}function Is(e){J.flags|=4;var t=J.updateQueue;if(t===null)t=ns(),J.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ls(e){var t=ts().memoizedState;return Is({ref:t,nextImpl:e}),function(){if(Zu&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Rs(e,t){return Ns(4,2,e,t)}function zs(e,t){return Ns(4,4,e,t)}function Bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vs(e,t,n){n=n==null?null:n.concat([e]),Ns(4,4,Bs.bind(null,t,e),n)}function Hs(){}function Us(e,t){var n=ts();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Ko(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ws(e,t){var n=ts();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Ko(t,r[1]))return r[0];if(r=e(),Bo){Ye(!0);try{e()}finally{Ye(!1)}}return n.memoizedState=[r,t],r}function Gs(e,t,n){return n===void 0||Fo&1073741824&&!(X&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),J.lanes|=e,od|=e,n)}function Ks(e,t,n,r){return Fr(n,t)?n:yo.current===null?!(Fo&106)||Fo&1073741824&&!(X&261930)?(Oc=!0,e.memoizedState=n):(e=Md(),J.lanes|=e,od|=e,t):(e=Gs(e,n,r),Fr(e,t)||(Oc=!0),e)}function qs(e,t,n,r,i){var a=L.p;L.p=a!==0&&8>a?a:8;var o=I.T,s={};s.types=o===null?null:o.types,I.T=s,ac(e,!1,t,n);try{var c=i(),l=I.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?ic(e,t,La(c,r),jd(e)):ic(e,t,r,jd(e))}catch(n){ic(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{L.p=a,o!==null&&s.types!==null&&(o.types=s.types),I.T=o}}function Js(){}function Ys(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Xs(e).queue;qs(e,a,t,R,n===null?Js:function(){return Zs(e),n(r)})}function Xs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:R,baseState:R,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:R},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Zs(e){var t=Xs(e);t.next===null&&(t=e.alternate.memoizedState),ic(e,t.next.queue,{},jd())}function Qs(){return ya(sh)}function $s(){return ts().memoizedState}function ec(){return ts().memoizedState}function tc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=uo(n);var r=fo(t,e,n);r!==null&&(Pd(r,t,n),po(r,t,n)),t={cache:Ea()},e.payload=t;return}t=t.return}}function nc(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},oc(e)?sc(t,n):(n=bi(e,t,n,r),n!==null&&(Pd(n,e,r),cc(n,t,r)))}function rc(e,t,n){ic(e,t,n,jd())}function ic(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(oc(e))sc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Fr(s,o))return yi(e,t,i,0),Qu===null&&vi(),!1}catch{}if(n=bi(e,t,i,r),n!==null)return Pd(n,e,r),cc(n,t,r),!0}return!1}function ac(e,t,n,r){if(r={lane:2,revertLane:Ff(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},oc(e)){if(t)throw Error(i(479))}else t=bi(e,n,r,2),t!==null&&Pd(t,e,2)}function oc(e){var t=e.alternate;return e===J||t!==null&&t===J}function sc(e,t){zo=Ro=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ft(e,n)}}var lc={readContext:ya,use:is,useCallback:Go,useContext:Go,useEffect:Go,useImperativeHandle:Go,useLayoutEffect:Go,useInsertionEffect:Go,useMemo:Go,useReducer:Go,useRef:Go,useState:Go,useDebugValue:Go,useDeferredValue:Go,useTransition:Go,useSyncExternalStore:Go,useId:Go,useHostTransitionStatus:Go,useFormState:Go,useActionState:Go,useOptimistic:Go,useMemoCache:Go,useCacheRefresh:Go,useEffectEvent:Go},uc={readContext:ya,use:is,useCallback:function(e,t){return es().memoizedState=[e,t===void 0?null:t],e},useContext:ya,useEffect:Ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Ms(4194308,4,Bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ms(4194308,4,e,t)},useInsertionEffect:function(e,t){Ms(4,2,e,t)},useMemo:function(e,t){var n=es();t=t===void 0?null:t;var r=e();if(Bo){Ye(!0);try{e()}finally{Ye(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=es();if(n!==void 0){var i=n(t);if(Bo){Ye(!0);try{n(t)}finally{Ye(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=nc.bind(null,J,e),[r.memoizedState,e]},useRef:function(e){var t=es();return e={current:e},t.memoizedState=e},useState:function(e){e=gs(e);var t=e.queue,n=rc.bind(null,J,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Hs,useDeferredValue:function(e,t){return Gs(es(),e,t)},useTransition:function(){var e=gs(!1);return e=qs.bind(null,J,e.queue,!0,!1),es().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=J,a=es();if(K){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Qu===null)throw Error(i(349));X&127||ds(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Ps(ps.bind(null,r,o,e),[e]),r.flags|=2048,As(9,{destroy:void 0},fs.bind(null,r,o,n,t),null),n},useId:function(){var e=es(),t=Qu.identifierPrefix;if(K){var n=Gi,r=Wi;n=(r&~(1<<32-V(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Vo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Qs,useFormState:Ts,useActionState:Ts,useOptimistic:function(e){var t=es();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ac.bind(null,J,!0,n),n.dispatch=t,[e,t]},useMemoCache:as,useCacheRefresh:function(){return es().memoizedState=tc.bind(null,J)},useEffectEvent:function(e){var t=es(),n={impl:e};return t.memoizedState=n,function(){if(Zu&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},dc={readContext:ya,use:is,useCallback:Us,useContext:ya,useEffect:Fs,useImperativeHandle:Vs,useInsertionEffect:Rs,useLayoutEffect:zs,useMemo:Ws,useReducer:ss,useRef:js,useState:function(){return ss(os)},useDebugValue:Hs,useDeferredValue:function(e,t){return Ks(ts(),Io.memoizedState,e,t)},useTransition:function(){var e=ss(os)[0],t=ts().memoizedState;return[typeof e==`boolean`?e:rs(e),t]},useSyncExternalStore:us,useId:$s,useHostTransitionStatus:Qs,useFormState:Es,useActionState:Es,useOptimistic:function(e,t){return _s(ts(),Io,e,t)},useMemoCache:as,useCacheRefresh:ec,useEffectEvent:Ls},fc={readContext:ya,use:is,useCallback:Us,useContext:ya,useEffect:Fs,useImperativeHandle:Vs,useInsertionEffect:Rs,useLayoutEffect:zs,useMemo:Ws,useReducer:ls,useRef:js,useState:function(){return ls(os)},useDebugValue:Hs,useDeferredValue:function(e,t){var n=ts();return Io===null?Gs(n,e,t):Ks(n,Io.memoizedState,e,t)},useTransition:function(){var e=ls(os)[0],t=ts().memoizedState;return[typeof e==`boolean`?e:rs(e),t]},useSyncExternalStore:us,useId:$s,useHostTransitionStatus:Qs,useFormState:ks,useActionState:ks,useOptimistic:function(e,t){var n=ts();return Io===null?(n.baseState=e,[e,n.queue.dispatch]):_s(n,Io,e,t)},useMemoCache:as,useCacheRefresh:ec,useEffectEvent:Ls};function pc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var mc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=uo(r);i.payload=t,n!=null&&(i.callback=n),t=fo(e,i,r),t!==null&&(Pd(t,e,r),po(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=uo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=fo(e,i,r),t!==null&&(Pd(t,e,r),po(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=uo(n);r.tag=2,t!=null&&(r.callback=t),t=fo(e,r,n),t!==null&&(Pd(t,e,n),po(t,e,n))}};function hc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ir(n,r)||!Ir(i,a):!0}function gc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&mc.enqueueReplaceState(t,t.state,null)}function _c(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=D({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function vc(e){mi(e)}function yc(e){console.error(e)}function bc(e){mi(e)}function xc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Sc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Cc(e,t,n){return n=uo(n),n.tag=3,n.payload={element:null},n.callback=function(){xc(e,t)},n}function wc(e){return e=uo(e),e.tag=3,e}function Tc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Sc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Sc(t,n,r),typeof i!=`function`&&(vd===null?vd=new Set([this]):vd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Ec(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ga(t,n,a,!0),n=wo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return To===null?Kd():n.alternate===null&&ad===0&&(ad=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ka?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),hf(e,r,a)),!1;case 22:return n.flags|=65536,r===Ka?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),hf(e,r,a)),!1}throw Error(i(435,n.tag))}return hf(e,r,a),Kd(),!1}if(K)return t=wo.current,t===null?(r!==ta&&(t=Error(i(423),{cause:r}),ca(Ii(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ii(r,n),a=Cc(e.stateNode,r,a),mo(e,a),ad!==4&&(ad=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ta&&(e=Error(i(422),{cause:r}),ca(Ii(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ii(o,n),dd===null?dd=[o]:dd.push(o),ad!==4&&(ad=2),t===null)return!0;r=Ii(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Cc(n.stateNode,r,e),mo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(vd===null||!vd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=wc(a),Tc(a,e,n,r),mo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Dc=Error(i(461)),Oc=!1;function kc(e,t,n,r){t.child=e===null?oo(t,null,n,r):ao(t,e.child,n,r)}function Ac(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return va(t),r=qo(e,t,n,o,a,i),s=Zo(),e!==null&&!Oc?(Qo(e,t,i),il(e,t,i)):(K&&s&&Ji(t),t.flags|=1,kc(e,t,r,i),t.child)}function jc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Di(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Mc(e,t,a,r,i)):(e=Ai(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!al(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ir:n,n(o,r)&&e.ref===t.ref)return il(e,t,i)}return t.flags|=1,e=Oi(a,r),e.ref=t.ref,e.return=t,t.child=e}function Mc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ir(a,r)&&e.ref===t.ref){if(Oc=!1,t.pendingProps=r=a,al(e,i))e.flags&131072&&(Oc=!0);else return t.lanes=e.lanes,il(e,t,i)}}return Bc(e,t,n,r,i)}function Nc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Va(t,a===null?null:a.cachePool),a===null?So():xo(t,a),Oo(t);else return r=t.lanes=536870912,Fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Va(t,null),So(),ko()):(Va(t,a.cachePool),xo(t,a),ko(),t.memoizedState=null);return kc(e,t,i,n),t.child}function Pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Fc(e,t,n,r,i){var a=Ba();return a=a===null?null:{parent:Ta._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Va(t,null),So(),Oo(t),e!==null&&ga(e,t,r,!0),t.childLanes=i,null}function Ic(e,t){return t=Yc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Lc(e,t,n){return ao(t,e.child,null,n),e=Ic(t,t.pendingProps),e.flags|=2,Ao(t),t.memoizedState=null,e}function Rc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(K){if(r.mode===`hidden`)return e=Ic(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Pc(null,e);if(Do(t),(e=Qi)?(e=am(e,ea),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ui===null?null:{id:Wi,overflow:Gi},retryLane:536870912,hydrationErrors:null},n=Ni(e),n.return=t,t.child=n,Zi=t,Qi=null)):e=null,e===null)throw na(t);return t.lanes=536870912,null}return Ic(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Do(t),a){if(t.flags&256)t.flags&=-257,t=Lc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Oc||ga(e,t,n,!1),a=(n&e.childLanes)!==0,Oc||a){if(yo.current===null){if(r=Qu,r!==null&&(s=pt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,xi(e,s),Pd(r,e,s),Dc;Kd()}t=Lc(e,t,n)}else e=o.treeContext,Qi=lm(s.nextSibling),Zi=t,K=!0,$i=null,ea=!1,e!==null&&Xi(t,e),t=Ic(t,r),t.flags|=134221824;return t}return e=Oi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function zc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Bc(e,t,n,r,i){return va(t),n=qo(e,t,n,r,void 0,i),r=Zo(),e!==null&&!Oc?(Qo(e,t,i),il(e,t,i)):(K&&r&&Ji(t),t.flags|=1,kc(e,t,n,i),t.child)}function Vc(e,t,n,r,i,a){return va(t),t.updateQueue=null,n=Yo(t,r,n,i),Jo(e),r=Zo(),e!==null&&!Oc?(Qo(e,t,a),il(e,t,a)):(K&&r&&Ji(t),t.flags|=1,kc(e,t,n,a),t.child)}function Hc(e,t,n,r,i){if(va(t),t.stateNode===null){var a=wi,o=n.contextType;typeof o==`object`&&o&&(a=ya(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=mc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},co(t),o=n.contextType,a.context=typeof o==`object`&&o?ya(o):wi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(pc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&mc.enqueueReplaceState(a,a.state,null),_o(t,r,a,i),go(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=_c(n,s);a.props=c;var l=a.context,u=n.contextType;o=wi,typeof u==`object`&&u&&(o=ya(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&gc(t,a,r,o),so=!1;var f=t.memoizedState;a.state=f,_o(t,r,a,i),go(),l=t.memoizedState,s||f!==l||so?(typeof d==`function`&&(pc(t,n,d,r),l=t.memoizedState),(c=so||hc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,lo(e,t),o=t.memoizedProps,u=_c(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=wi,typeof l==`object`&&l&&(c=ya(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&gc(t,a,r,c),so=!1,f=t.memoizedState,a.state=f,_o(t,r,a,i),go();var p=t.memoizedState;o!==d||f!==p||so||e!==null&&e.dependencies!==null&&_a(e.dependencies)?(typeof s==`function`&&(pc(t,n,s,r),p=t.memoizedState),(u=so||hc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&_a(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,zc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=ao(t,e.child,null,i),t.child=ao(t,null,n,i)):kc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=il(e,t,i),e}function Uc(e,t,n,r){return oa(),t.flags|=256,kc(e,t,n,r),t.child}var Wc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gc(e){return{baseLanes:e,cachePool:Ha()}}function Kc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ld),e}function qc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(jo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(K){if(i?Eo(t):ko(),(e=Qi)?(e=am(e,ea),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ui===null?null:{id:Wi,overflow:Gi},retryLane:536870912,hydrationErrors:null},n=Ni(e),n.return=t,t.child=n,Zi=t,Qi=null)):e=null,e===null)throw na(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(ko(),i=t.mode,a=Yc({mode:`hidden`,children:a},i),r=ji(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Gc(n),r.childLanes=Kc(e,o,n),t.memoizedState=Wc,Pc(null,r)):(Eo(t),Jc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return Zc(e,t,a,o,r,c,s,n)}return i?(ko(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Oi(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=ji(i,a,n,null),i.flags|=2):i=Oi(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Pc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Gc(n):(a=i.cachePool,a===null?a=Ha():(s=Ta._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Kc(e,o,n),t.memoizedState=Wc,Pc(e.child,r)):(Eo(t),n=e.child,e=n.sibling,n=Oi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Jc(e,t){return t=Yc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Yc(e,t){return e=Ei(22,e,null,t),e.lanes=0,e}function Xc(e,t,n){return ao(t,e.child,null,n),e=Jc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zc(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Eo(t),t.flags&=-257,Xc(e,t,c)):t.memoizedState===null?(ko(),o=a.fallback,s=t.mode,a=Yc({mode:`visible`,children:a.children},s),o=ji(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,ao(t,e.child,null,c),a=t.child,a.memoizedState=Gc(c),a.childLanes=Kc(e,r,c),t.memoizedState=Wc,Pc(null,a)):(ko(),t.child=e.child,t.flags|=128,null);if(Eo(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,ca({value:a,source:null,stack:null})),Xc(e,t,c)}if(Oc||ga(e,t,c,!1),r=(c&e.childLanes)!==0,Oc||r){if(yo.current!==null)return Xc(e,t,c);if(r=Qu,r!==null&&(a=pt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,xi(e,a),Pd(r,e,a),Dc;return om(o)||Kd(),Xc(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,Qi=lm(o.nextSibling),Zi=t,K=!0,$i=null,ea=!1,e!==null&&Xi(t,e),t=Jc(t,a.children),t.flags|=134221824,t)}function Qc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ma(e.return,t,n)}function $c(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Po(n)===null&&(t=e),e=e.sibling}return t}function el(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function tl(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function nl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=jo.current;if(t.flags&128)return Mo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Mo(t,o),i===`backwards`&&e!==null?(tl(e),kc(e,t,r,n),tl(e)):kc(e,t,r,n),r=K?Bi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qc(e,n,t);else if(e.tag===19)Qc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=$c(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,tl(t)),el(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Po(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}el(t,!0,n,null,a,r);break;case`together`:el(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=$c(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),el(t,!1,i,n,a,r)}return t.child}function rl(e,t,n){var r=t.pendingProps;return fa(t,t.type,r.value),kc(e,t,r.children,n),t.child}function il(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),od|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ga(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Oi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Oi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function al(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&_a(e)))}function ol(e,t,n){switch(t.tag){case 3:B(t,t.stateNode.containerInfo),fa(t,Ta,e.memoizedState.cache),oa();break;case 27:case 5:we(t);break;case 4:B(t,t.stateNode.containerInfo);break;case 10:fa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Do(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Eo(t),t.flags|=128,null;r=ga(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?qc(e,t,n):(Eo(t),e=il(e,t,n),e===null?null:e.sibling)}Eo(t);break;case 19:if(t.flags&128)return nl(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(ga(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return nl(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Mo(t,jo.current),r)break;return null;case 22:return t.lanes=0,Nc(e,t,n,t.pendingProps);case 24:fa(t,Ta,e.memoizedState.cache)}return il(e,t,n)}function sl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Oc=!0;else{if(!al(e,n)&&!(t.flags&128))return Oc=!1,ol(e,t,n);Oc=!!(e.flags&131072)}}else Oc=!1,K&&t.flags&1048576&&qi(t,Bi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ya(t.elementType),t.type=e,typeof e==`function`)Di(e)?(r=_c(e,r),t.tag=1,t=Hc(null,t,e,r,n)):(t.tag=0,t=Bc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===ie){t.tag=11,t=Ac(null,t,e,r,n);break a}if(a===N){t.tag=14,t=jc(null,t,e,r,n);break a}if(a===j){t.tag=10,t.type=e,t=rl(null,t,n);break a}}throw t=pe(e)||e,Error(i(306,t,``))}}return t;case 0:return Bc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=_c(r,t.pendingProps),Hc(e,t,r,a,n);case 3:a:{if(B(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,lo(e,t),_o(t,r,null,n);var s=t.memoizedState;if(r=s.cache,fa(t,Ta,r),r!==o.cache&&ha(t,[Ta],n,!0),go(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Uc(e,t,r,n);break a}if(r!==a){a=Ii(Error(i(424)),t),ca(a),t=Uc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Qi=lm(e.firstChild),Zi=t,K=!0,$i=null,ea=!0,n=oo(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(oa(),r===a){t=il(e,t,n);break a}kc(e,t,r,n)}t=t.child}return t;case 26:return zc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:K||(t.stateNode=mp(t.type,t.pendingProps,xe.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return we(t),e===null&&K&&(r=t.stateNode=hm(t.type,t.pendingProps,xe.current),Zi=t,ea=!0,a=Qi,$(t.type)?(um=a,Qi=lm(r.firstChild)):Qi=a),kc(e,t,t.pendingProps.children,n),zc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&K&&((a=r=Qi)&&(r=rm(r,t.type,t.pendingProps,ea),r===null?a=!1:(t.stateNode=r,Zi=t,Qi=lm(r.firstChild),ea=!1,a=!0)),a||na(t)),we(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,hp(a,o)?r=null:s!==null&&hp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=qo(e,t,Xo,null,null,n),sh._currentValue=a),zc(e,t),kc(e,t,r,n),t.child;case 6:return e===null&&K&&((e=n=Qi)&&(n=im(n,t.pendingProps,ea),n===null?e=!1:(t.stateNode=n,Zi=t,Qi=null,e=!0)),e||na(t)),null;case 13:return qc(e,t,n);case 4:return B(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ao(t,null,r,n):kc(e,t,r,n),t.child;case 11:return Ac(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,zc(e,t),kc(e,t,r,n),t.child;case 8:return kc(e,t,t.pendingProps.children,n),t.child;case 12:return kc(e,t,t.pendingProps.children,n),t.child;case 10:return rl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,va(t),a=ya(a),r=r(a),t.flags|=1,kc(e,t,r,n),t.child;case 14:return jc(e,t,t.type,t.pendingProps,n);case 15:return Mc(e,t,t.type,t.pendingProps,n);case 19:return nl(e,t,n);case 31:return Rc(e,t,n);case 22:return Nc(e,t,n,t.pendingProps);case 24:return va(t),r=ya(Ta),e===null?(a=Ba(),a===null&&(a=Qu,o=Ea(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},co(t),fa(t,Ta,a)):((e.lanes&n)!==0&&(lo(e,t),_o(t,null,null,n),go()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,fa(t,Ta,r),r!==a.cache&&ha(t,[Ta],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),fa(t,Ta,r))),kc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:K&&Ji(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:zc(e,t),kc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function cl(e){e.flags|=4}function ll(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw Xa=Ka,Wa}}else e.flags&=-16777217}function ul(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Ud())e.flags|=8192;else throw Xa=Ka,Wa}}function dl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:st(),e.lanes|=t,ud|=t)}function fl(e,t){if(!K)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function pl(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ml(e,t,n){var r=t.pendingProps;switch(Yi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pl(t),null;case 1:return pl(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),pa(Ta),Ce(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(aa(t)?cl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,sa())),pl(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(cl(t),o===null?(pl(t),ll(t,a,null,r,n)):(pl(t),ul(t,o))):o?o===e.memoizedState?(pl(t),t.flags&=-16777217):(cl(t),pl(t),ul(t,o)):(e=e.memoizedProps,e!==r&&cl(t),pl(t),ll(t,a,e,r,n)),null;case 27:if(Te(t),n=xe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&cl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return pl(t),t.subtreeFlags&=-33554433,null}e=ye.current,aa(t)?ra(t,e):(e=hm(a,r,n),t.stateNode=e,cl(t))}return pl(t),t.subtreeFlags&=-33554433,null;case 5:if(Te(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&cl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return pl(t),t.subtreeFlags&=-33554433,null}if(o=ye.current,aa(t))ra(t,o);else{var s=dp(xe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[yt]=t,o[bt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(ip(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&cl(t)}}return pl(t),t.subtreeFlags&=-33554433,ll(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&cl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=xe.current,aa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Zi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[yt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||tp(e.nodeValue,n)),e||na(t,!0)}else e=dp(e).createTextNode(r),e[yt]=t,t.stateNode=e}return pl(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=aa(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[yt]=t}else oa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pl(t),e=!1}else n=sa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ao(t),t):(Ao(t),null);if(t.flags&128)throw Error(i(558))}return pl(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=aa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[yt]=t}else oa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pl(t),a=!1}else a=sa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ao(t),t):(Ao(t),null)}return Ao(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),dl(t,t.updateQueue),pl(t),null);case 4:return Ce(),e===null&&Gf(t.stateNode.containerInfo),t.flags|=67108864,pl(t),null;case 10:return pa(t.type),pl(t),null;case 19:if(No(t),r=t.memoizedState,r===null)return pl(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)fl(r,!1);else{if(ad!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Po(e),o!==null){for(t.flags|=128,fl(r,!1),e=o.updateQueue,t.updateQueue=e,dl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ki(n,e),n=n.sibling;return Mo(t,jo.current&1|2),K&&Ki(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Re()>gd&&(t.flags|=128,a=!0,fl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Po(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,dl(t,e),fl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!K)return pl(t),null}else 2*Re()-r.renderingStartTime>gd&&n!==536870912&&(t.flags|=128,a=!0,fl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Re(),e.sibling=null,o=jo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||K?Mo(t,o):(n=o,ve(wo,t),ve(jo,n),To===null&&(To=t)),K&&Ki(t,r.treeForkCount),e}return pl(t),null;case 22:case 23:return Ao(t),Co(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(pl(t),t.subtreeFlags&6&&(t.flags|=8192)):pl(t),n=t.updateQueue,n!==null&&dl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&_e(za),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),pa(Ta),pl(t),null;case 25:return null;case 30:return t.flags|=33554432,pl(t),null}throw Error(i(156,t.tag))}function hl(e,t){switch(Yi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pa(Ta),Ce(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Te(t),null;case 31:if(t.memoizedState!==null){if(Ao(t),t.alternate===null)throw Error(i(340));oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ao(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return No(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Ce(),null;case 10:return pa(t.type),null;case 22:case 23:return Ao(t),Co(),e!==null&&_e(za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return pa(Ta),null;case 25:return null;default:return null}}function gl(e,t){switch(Yi(t),t.tag){case 3:pa(Ta),Ce();break;case 26:case 27:case 5:Te(t);break;case 4:Ce();break;case 31:t.memoizedState!==null&&Ao(t);break;case 13:Ao(t);break;case 19:No(t);break;case 10:pa(t.type);break;case 22:case 23:Ao(t),Co(),e!==null&&_e(za);break;case 24:pa(Ta)}}function _l(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){mf(t,t.return,e)}}function vl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){mf(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){mf(t,t.return,e)}}function yl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{vo(t,n)}catch(t){mf(e,e.return,t)}}}function bl(e,t,n){n.props=_c(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){mf(e,t,n)}}function xl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=di(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){mf(e,t,n)}}function Sl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){mf(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){mf(e,t,n)}else n.current=null}}function Cl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function wl(e){for(var t=e.return;t!==null&&(Dl(t)&&em(e.stateNode,t.stateNode),!El(t));)t=t.return}function Tl(e){for(var t=e.return;t!==null&&(Dl(t)&&tm(e.stateNode,t.stateNode),!El(t));)t=t.return}function El(e){return e.tag===5||e.tag===3||e.tag===27}function Dl(e){return e&&e.tag===7&&e.stateNode!==null}function Ol(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){mf(e,e.return,t)}}function kl(e,t,n){try{var r=e.stateNode;op(r,e.type,n,t),r[bt]=t}catch(t){mf(e,e.return,t)}}function Al(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&$(e.type)||e.tag===4}function jl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Al(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&$(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ml(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=hn)),Cl(e,r),Ht=!0;else if(i!==4&&(i===27&&(Cl(e,r),r=null,$(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Ml(e,t,n,r),e=e.sibling;e!==null;)Ml(e,t,n,r),e=e.sibling}function Nl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Cl(e,r),Ht=!0;else if(i!==4&&(i===27&&(Cl(e,r),r=null,$(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Nl(e,t,n,r),e=e.sibling;e!==null;)Nl(e,t,n,r),e=e.sibling}function Pl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ip(t,r,n),t[yt]=e,t[bt]=n}catch(t){mf(e,e.return,t)}}var Fl=!1,Il=null;function Ll(e){(e.tag===30||e.subtreeFlags&33554432)&&(Fl=!0)}var Rl=null;function zl(){var e=Rl;return Rl=null,e}var Bl=0;function Vl(e,t,n,r,i){return Bl=0,Hl(e.child,t,n,r,i)}function Hl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Fl=!0,Tp(o,Bl===0?t:t+`_`+Bl,n),Bl++}else e.tag===22&&e.memoizedState!==null||e.tag===30&&i||Hl(e.child,t,n,r,i)&&(a=!0);e=e.sibling}return a}function Ul(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):e.tag===22&&e.memoizedState!==null||e.tag===30&&t||Ul(e.child,t),e=e.sibling}function Wl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Wl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=pi(t.default,t.share),t!==`none`&&(Vl(e,n,t,null,!1)||Ul(e.child,!1))}e=e.sibling}}function Gl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=di(r,n),a=pi(r.default,n.paired?r.share:r.enter);a===`none`?Wl(e):Vl(e,i,a,null,!1)?(Wl(e),n.paired||t||Nd(e,r.onEnter)):Ul(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Gl(e,t),e=e.sibling;else Wl(e)}function Kl(e){if(Il!==null&&Il.size!==0){var t=Il;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=pi(n.default,n.share);if(a!==`none`&&(Vl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):Ul(e.child,!1)),t.delete(r),t.size===0)break}}}Kl(e)}e=e.sibling}}}function ql(e){if(e.tag===30){var t=e.memoizedProps,n=di(t,e.stateNode),r=Il===null?void 0:Il.get(n),i=pi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Vl(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Il.delete(n),Nd(e,t.onShare)):Ul(e.child,!1)),Il!==null&&Kl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)ql(e),e=e.sibling;else Il!==null&&Kl(e)}function Jl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=di(t,e.stateNode);t=pi(t.default,t.update),e.flags&=-5,t!==`none`&&Vl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Jl(e);e=e.sibling}}function Yl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Ul(e.child,!1))}Yl(e)}e=e.sibling}}function Xl(e){if(e.tag===30)e.stateNode.paired=null,Ul(e.child,!1),Yl(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Xl(e),e=e.sibling;else Yl(e)}function Zl(e){for(e=e.child;e!==null;)e.tag===30?Ul(e.child,!1):e.subtreeFlags&33554432&&Zl(e),e=e.sibling}function Ql(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Bl<a.length){var l=a[Bl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Bl===0?n:n+`_`+Bl,i),s&&e.flags&4||(Rl===null&&(Rl=[]),Rl.push(c,Bl===0?r:r+`_`+Bl,t.memoizedProps)),Bl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:Ql(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function $l(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=di(n,r),a=pi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Bl=0,i=Ql(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&$l(e,t);e=e.sibling}}var eu=!1,tu=!1,nu=!1,ru=!1,iu=typeof WeakSet==`function`?WeakSet:Set,au=null,ou=!1,su=!1,cu=!1,lu=!1;function uu(e,t,n){if(e=e.containerInfo,lp=gh,e=Vr(e),Hr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(up={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,au=t,t=n?9270:1024;au!==null;){if(e=au,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&ql(r[a]);if(e.alternate===null&&e.flags&2)n&&Ll(e),du(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&ql(r),du(n);continue}if(r!==null&&r.memoizedState!==null){n&&Ll(e),du(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,au=r):(n&&Jl(e),du(n))}}Il=null}function du(e){for(;au!==null;){var t=au,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=_c(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){mf(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=di(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=pi(a.default,a.update),a!==`none`&&Vl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,au=r;break}au=t.return}}function fu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Mu(e,n),r&4&&_l(5,n);break;case 1:if(Mu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){mf(n,n.return,e)}else{var i=_c(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){mf(n,n.return,e)}}}r&64&&yl(n),r&512&&xl(n,n.return);break;case 3:if(Mu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{vo(e,t)}catch(e){mf(n,n.return,e)}}break;case 27:t===null&&r&4&&Pl(n);case 26:case 5:Mu(e,n),t===null&&r&4&&Ol(n),r&512&&xl(n,n.return);break;case 12:Mu(e,n);break;case 31:Mu(e,n),r&4&&xu(e,n);break;case 13:Mu(e,n),r&4&&Su(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=vf.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||eu,!r){var a=t!==null&&t.memoizedState!==null||tu;t=eu,i=tu,eu=r,(tu=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Pu(e,n,r)):Mu(e,n),eu=t,tu=i}break;case 30:Mu(e,n),r&512&&xl(n,n.return);break;case 7:r&512&&xl(n,n.return);default:Mu(e,n)}}function pu(e,t){for(e=e.child;e!==null;)mu(e,t),e=e.sibling}function mu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){mf(e,e.return,t)}hu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,Ht=!0}catch(t){mf(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){mf(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&pu(e,t);break;default:pu(e,t)}}function hu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:mu(n,r);break a;case 22:n.memoizedState===null&&hu(n,r);break a;default:hu(n,r)}}e=e.sibling}}function gu(e){var t=e.alternate;t!==null&&(e.alternate=null,gu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&H(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _u=null,vu=!1;function yu(e,t,n){for(n=n.child;n!==null;)bu(e,t,n),n=n.sibling}function bu(e,t,n){if(Je&&typeof Je.onCommitFiberUnmount==`function`)try{Je.onCommitFiberUnmount(qe,n)}catch{}switch(n.tag){case 26:tu||Sl(n,t),yu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!tu&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tu||Sl(n,t),Tl(n);var r=_u,i=vu;$(n.type)&&(_u=n.stateNode,vu=!1),yu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),_u=r,vu=i;break;case 5:tu||Sl(n,t),Tl(n);case 6:if(n.tag===6&&Tl(n),r=_u,i=vu,_u=null,yu(e,t,n),_u=r,vu=i,_u!==null){if(vu)try{(_u.nodeType===9?_u.body:_u.nodeName===`HTML`?_u.ownerDocument.body:_u).removeChild(n.stateNode),Ht=!0}catch(e){mf(n,t,e)}else try{_u.removeChild(n.stateNode),Ht=!0}catch(e){mf(n,t,e)}}break;case 18:_u!==null&&(vu?(e=_u,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(_u,n.stateNode));break;case 4:r=_u,i=vu,_u=n.stateNode.containerInfo,vu=!0,yu(e,t,n),_u=r,vu=i;break;case 0:case 11:case 14:case 15:vl(2,n,t),tu||vl(4,n,t),yu(e,t,n);break;case 1:tu||(Sl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&bl(n,t,r)),yu(e,t,n);break;case 21:yu(e,t,n);break;case 22:tu=(r=tu)||n.memoizedState!==null,yu(e,t,n),tu=r;break;case 30:Sl(n,t),yu(e,t,n);break;case 7:tu||Sl(n,t),yu(e,t,n);break;default:yu(e,t,n)}}function xu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){mf(t,t.return,e)}}}function Su(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){mf(t,t.return,e)}}function Cu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new iu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new iu),t;default:throw Error(i(435,e.tag))}}function wu(e,t){var n=Cu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=yf.bind(null,e,t);t.then(r,r)}})}function Tu(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if($(l.type)){_u=l.stateNode,vu=!1;break a}break;case 5:_u=l.stateNode,vu=!1;break a;case 3:case 4:_u=l.stateNode.containerInfo,vu=!0;break a}l=l.return}if(_u===null)throw Error(i(160));bu(s,c,o),_u=null,vu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Du(t,e,n),t=t.sibling}var Eu=null;function Du(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Tu(t,e,n),Ou(e),a&4&&(vl(3,e,e.return),_l(3,e),vl(5,e,e.return));break;case 1:Tu(t,e,n),Ou(e),a&512&&(tu||r===null||Sl(r,r.return)),a&64&&eu&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Eu,Tu(t,e,n),Ou(e),a&512&&(tu||r===null||Sl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(eu)e.stateNode=mp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Et]||r[yt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),ip(r,t,n),r[yt]=e,Mt(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),ip(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),ip(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[yt]=e,Mt(r),t=r}e.stateNode=t}}else eu||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&kl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||tu||t.parentNode.removeChild(t)):a.count--,n===null?eu||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Tu(t,e,n),Ou(e),a&512&&(tu||r===null||Sl(r,r.return)),r!==null&&a&4&&kl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=nu,nu=!1,Tu(t,e,n),nu=o,Ou(e),a&512&&(tu||r===null||Sl(r,r.return)),e.flags&32){t=e.stateNode;try{sn(t,``),Ht=!0}catch(t){mf(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,kl(e,t,r===null?t:r.memoizedProps)),a&1024&&(ru=!0);break;case 6:if(Tu(t,e,n),Ou(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Ht=!0}catch(t){mf(e,e.return,t)}}break;case 3:if(Ht=!1,Wm=null,o=Eu,Eu=bm(t.containerInfo),Tu(t,e,n),Eu=o,Ou(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){mf(e,e.return,t)}ru&&(ru=!1,ku(e)),Ht=!1;break;case 4:a=nu,nu=eu,r=Ut(),o=Eu,Eu=bm(e.stateNode.containerInfo),Tu(t,e,n),Ou(e),Eu=o,Ht&&su&&(cu=!0),Ht=r,nu=a;break;case 12:Tu(t,e,n),Ou(e);break;case 31:Tu(t,e,n),Ou(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,wu(e,t)));break;case 13:Tu(t,e,n),Ou(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(md=Re()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,wu(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=eu,l=tu,u=nu;eu=c||o,nu=u||o,tu=l||s,Tu(t,e,n),tu=l,nu=u,eu=c,Ou(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||eu||tu||(t=s||tu,n=eu,r=tu,eu=o||eu,tu=t,Nu(e,2),eu=n,tu=r),!o&&nu||pu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,wu(e,n))));break;case 19:Tu(t,e,n),Ou(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,wu(e,t)));break;case 30:a&512&&(tu||r===null||Sl(r,r.return)),a=Ut(),o=su,s=(n&335544064)===n,c=e.memoizedProps,su=s&&pi(c.default,c.update)!==`none`,Tu(t,e,n),Ou(e),s&&r!==null&&Ht&&(e.flags|=4),su=o,Ht=a;break;case 21:break;case 7:a&512&&(tu||r===null||Sl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Tu(t,e,n),Ou(e)}}function Ou(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Al(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Dl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(El(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Nl(e,jl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(sn(l,``),n.flags&=-33),Nl(e,jl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Ml(e,jl(e),u,s);break;default:throw Error(i(161))}}catch(t){mf(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ku(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ku(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Au(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)ju(t,e),t=t.sibling;else $l(t,!1)}function ju(e,t){var n=e.alternate;if(n===null)Gl(e,!1);else switch(e.tag){case 3:if(lu=ou=!1,zl(),Au(t,e),!ou&&!cu){if(e=Rl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),lu=!0}Rl=null;break;case 5:Au(t,e);break;case 4:r=ou,ou=!1,Au(t,e),ou&&(cu=!0),ou=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Au(t,e):Gl(e,!1));break;case 30:r=ou,i=zl(),ou=!1,Au(t,e),ou&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=di(a,o),o=di(n.memoizedProps,o);var s=pi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Bl=0,t=Ql(e,n,t,o,s,a,!0),Bl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),Rl=i):i!==null&&(i.push.apply(i,Rl),Rl=i),ou=e.flags&32?!0:r;break;default:Au(t,e)}}function Mu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)fu(e,t.alternate,t),t=t.sibling}function Nu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:vl(4,n,n.return),Nu(n,r);break;case 1:Sl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&bl(n,n.return,i),Nu(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:Sl(n,n.return),n.tag!==5&&n.tag!==27||Tl(n),Nu(n,r);break;case 6:Tl(n);break;case 26:Sl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||tu||i.parentNode.removeChild(i),Nu(n,r);break;case 22:n.memoizedState===null&&Nu(n,r);break;case 30:Sl(n,n.return),Nu(n,r);break;case 7:Sl(n,n.return);default:Nu(n,r)}e=e.sibling}}function Pu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Pu(i,a,n),_l(4,a);break;case 1:if(Pu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){mf(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)q(l[i],c)}catch(e){mf(r,r.return,e)}}s&&o&64&&yl(a),xl(a,a.return);break;case 27:n&2&&Pl(a);case 5:a.tag!==5&&a.tag!==27||wl(a),Pu(i,a,n),s&&r===null&&o&4&&Ol(a),xl(a,a.return);break;case 6:wl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||eu||Km(bm(c.ownerDocument),a.type,c),Pu(i,a,n),s&&r===null&&o&4&&Ol(a),xl(a,a.return);break;case 12:Pu(i,a,n);break;case 31:Pu(i,a,n),s&&o&4&&xu(i,a);break;case 13:Pu(i,a,n),s&&o&4&&Su(i,a);break;case 22:a.memoizedState===null&&Pu(i,a,n),xl(a,a.return);break;case 30:Pu(i,a,n),xl(a,a.return);break;case 7:xl(a,a.return);default:Pu(i,a,n)}t=t.sibling}}function Fu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Da(n))}function Iu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Da(e))}function Lu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Ru(e,t,n,r),t=t.sibling;else i&&Zl(t)}function Ru(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Xl(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Lu(e,t,n,r),a&2048&&_l(9,t);break;case 1:Lu(e,t,n,r);break;case 3:Lu(e,t,n,r),i&&lu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Da(a)));break;case 12:if(a&2048){Lu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){mf(t,t.return,e)}}else Lu(e,t,n,r);break;case 31:Lu(e,t,n,r);break;case 13:Lu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&Xl(t),o._visibility&2?Lu(e,t,n,r):(o._visibility|=2,zu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&Xl(s),o._visibility&2?Lu(e,t,n,r):Bu(e,t)),a&2048&&Fu(s,t);break;case 24:Lu(e,t,n,r),a&2048&&Iu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Ul(a.child,!0),Ul(t.child,!0))),Lu(e,t,n,r);break;default:Lu(e,t,n,r)}}function zu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:zu(a,o,s,c,i),_l(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,zu(a,o,s,c,i)):u._visibility&2?zu(a,o,s,c,i):Bu(a,o),i&&l&2048&&Fu(o.alternate,o);break;case 24:zu(a,o,s,c,i),i&&l&2048&&Iu(o.alternate,o);break;default:zu(a,o,s,c,i)}t=t.sibling}}function Bu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Bu(n,r),i&2048&&Fu(r.alternate,r);break;case 24:Bu(n,r),i&2048&&Iu(r.alternate,r);break;default:Bu(n,r)}t=t.sibling}}var Vu=8192;function Hu(e,t,n){if(e.subtreeFlags&Vu)for(e=e.child;e!==null;)Uu(e,t,n),e=e.sibling}function Uu(e,t,n){switch(e.tag){case 26:Hu(e,t,n),e.flags&Vu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,Eu,e.memoizedState,e.memoizedProps));break;case 5:Hu(e,t,n),e.flags&Vu&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=Eu;Eu=bm(e.stateNode.containerInfo),Hu(e,t,n),Eu=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Vu,Vu=16777216,Hu(e,t,n),Vu=r):Hu(e,t,n));break;case 30:if((e.flags&Vu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Il===null&&(Il=new Map),Il.set(r,i)}Hu(e,t,n);break;default:Hu(e,t,n)}}function Wu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Gu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];au=r,Ju(r,e)}Wu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ku(e),e=e.sibling}function Ku(e){switch(e.tag){case 0:case 11:case 15:Gu(e),e.flags&2048&&vl(9,e,e.return);break;case 3:Gu(e);break;case 12:Gu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,qu(e)):Gu(e);break;default:Gu(e)}}function qu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];au=r,Ju(r,e)}Wu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:vl(8,t,t.return),qu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,qu(t));break;default:qu(t)}e=e.sibling}}function Ju(e,t){for(;au!==null;){var n=au;switch(n.tag){case 0:case 11:case 15:vl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Da(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,au=r;else a:for(n=e;au!==null;){r=au;var i=r.sibling,a=r.return;if(gu(r),r===n){au=null;break a}if(i!==null){i.return=a,au=i;break a}au=a}}}var Yu={getCacheForType:function(e){var t=ya(Ta),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ya(Ta).controller.signal}},Xu=typeof WeakMap==`function`?WeakMap:Map,Zu=0,Qu=null,Y=null,X=0,$u=0,ed=null,td=!1,nd=!1,rd=!1,id=0,ad=0,od=0,sd=0,cd=0,ld=0,ud=0,dd=null,fd=null,pd=!1,md=0,hd=0,gd=1/0,_d=null,vd=null,yd=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return Zu&2&&X!==0?X&-X:I.T===null?gt():Ff()}function Md(){if(ld===0){if(!(X&536870912)||K){var e=et;et<<=1,!(et&3932160)&&(et=262144),ld=e}else ld=536870912}return e=wo.current,e!==null&&(e.flags|=32),ld}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(di(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===Qu&&($u===2||$u===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,X,ld,!1)),lt(e,n),Zu&2&&e===Qu||(e===Qu&&(!(Zu&2)&&(sd|=n),ad===4&&Rd(e,X,ld,!1)),Df(e))}function Fd(e,t,n){if(Zu&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||it(e,t),a=r?Yd(e,t):qd(e,t,!0),o=r;do{if(a===0){nd&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Ld(n))a=qd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=dd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,s).flags|=256),s=qd(c,s,!1),s!==2&&s!==6){if(rd&&!l){c.errorRecoveryDisabledLanes|=o,sd|=o,a=4;break a}o=fd,fd=a,o!==null&&(fd===null?fd=o:fd.push.apply(fd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ld,!td);break a;case 2:fd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=md+300-Re(),10<a)){if(Rd(r,t,ld,!td),rt(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=vp(Id.bind(null,r,n,fd,_d,pd,t,ld,sd,ud,td,o,`Throttled`,-0,0),a);break a}Id(r,n,fd,_d,pd,t,ld,sd,ud,td,o,null,-0,0)}break}}while(1);Df(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:hn},Il=null,Uu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?md-Re():(a&4194048)===a?hd-Re():0,m=eh(d,m),m!==null)?(Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l)):nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Fr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=at(e,t),t&=~cd,t&=~sd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-V(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&dt(e,n,t)}function zd(){return Zu&6?!0:(Of(0,!1),!1)}function Bd(){if(Y!==null){if($u===0)var e=Y.return;else e=Y,da=ua=null,$o(e),$a=null,eo=0,e=Y;for(;e!==null;)gl(e.alternate,e),e=e.return;Y=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,yp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),Qu=e,Y=n=Oi(e.current,null),X=t,$u=0,ed=null,td=!1,nd=it(e,t),rd=!1,ud=ld=cd=sd=od=ad=0,fd=dd=null,pd=!1,id=at(e,t),vi(),n}function Hd(e,t){J=null,I.H=lc,t===Ua||t===Ga?(t=Za(),$u=3):t===Wa?(t=Za(),$u=4):$u=t===Dc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,ed=t,Y===null&&(ad=1,xc(e,Ii(t,e.current)))}function Ud(){var e=wo.current;return e===null?!0:(X&4194048)===X?To===null:(X&62914560)===X||X&536870912?e===To:!1}function Wd(){var e=I.H;return I.H=lc,e===null?lc:e}function Gd(){var e=I.A;return I.A=Yu,e}function Kd(){ad=4,td||(X&4194048)!==X&&wo.current!==null||(nd=!0),!(od&134217727)&&!(sd&134217727)||Qu===null||Rd(Qu,X,ld,!1)}function qd(e,t,n){var r=Zu;Zu|=2;var i=Wd(),a=Gd();(Qu!==e||X!==t)&&(_d=null,Vd(e,t)),t=!1;var o=ad;a:do try{if($u!==0&&Y!==null){var s=Y,c=ed;switch($u){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:wo.current===null&&(t=!0);var l=$u;if($u=0,ed=null,$d(e,s,c,l),n&&nd){o=0;break a}break;default:l=$u,$u=0,ed=null,$d(e,s,c,l)}}Jd(),o=ad;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,da=ua=null,Zu=r,I.H=i,I.A=a,Y===null&&(Qu=null,X=0,vi()),o}function Jd(){for(;Y!==null;)Zd(Y)}function Yd(e,t){var n=Zu;Zu|=2;var r=Wd(),a=Gd();Qu!==e||X!==t?(_d=null,gd=Re()+500,Vd(e,t)):nd=it(e,t);a:do try{if($u!==0&&Y!==null){t=Y;var o=ed;b:switch($u){case 1:$u=0,ed=null,$d(e,t,o,1);break;case 2:case 9:if(qa(o)){$u=0,ed=null,Qd(t);break}t=function(){$u!==2&&$u!==9||Qu!==e||($u=7),Df(e)},o.then(t,t);break a;case 3:$u=7;break a;case 4:$u=5;break a;case 7:qa(o)?($u=0,ed=null,Qd(t)):($u=0,ed=null,$d(e,t,o,7));break;case 5:var s=null;switch(Y.tag){case 26:s=Y.memoizedState;case 5:case 27:var c=Y;if(s?Ym(s):c.stateNode.complete){$u=0,ed=null;var l=c.sibling;if(l!==null)Y=l;else{var u=c.return;u===null?Y=null:(Y=u,ef(u))}break b}}$u=0,ed=null,$d(e,t,o,5);break;case 6:$u=0,ed=null,$d(e,t,o,6);break;case 8:Bd(),ad=6;break a;default:throw Error(i(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return da=ua=null,I.H=r,I.A=a,Zu=n,Y===null?(Qu=null,X=0,vi(),ad):0}function Xd(){for(;Y!==null&&!Ie();)Zd(Y)}function Zd(e){var t=sl(e.alternate,e,id);e.memoizedProps=e.pendingProps,t===null?ef(e):Y=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Vc(n,t,t.pendingProps,t.type,void 0,X);break;case 11:t=Vc(n,t,t.pendingProps,t.type.render,t.ref,X);break;case 5:$o(t);var r=t;r===Zi&&(K?(ia(r),r.tag===5&&r.stateNode!=null&&(Qi=r.stateNode)):(ia(r),K=!0));default:gl(n,t),t=Y=ki(t,id),t=sl(n,t,id)}e.memoizedProps=e.pendingProps,t===null?ef(e):Y=t}function $d(e,t,n,r){da=ua=null,$o(t),$a=null,eo=0;var i=t.return;try{if(Ec(e,i,t,n,X)){ad=1,xc(e,Ii(n,e.current)),Y=null;return}}catch(t){if(i!==null)throw Y=i,t;ad=1,xc(e,Ii(n,e.current)),Y=null;return}t.flags&32768?(K||r===1?e=!0:nd||X&536870912?e=!1:(td=e=!0,(r===2||r===9||r===3||r===6)&&(r=wo.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,td);return}e=t.return;var n=ml(t.alternate,t,id);if(n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);ad===0&&(ad=5)}function tf(e,t){do{var n=hl(e.alternate,e);if(n!==null){n.flags&=32767,Y=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Y=e;return}Y=e=n}while(e!==null);ad=6,Y=null}function nf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(yd!==0);if(Zu&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===Qu&&(Y=Qu=null,X=0),xd=t,bd=e,Sd=n,wd=a,Td=r,rf(e,t,n,s,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=_i,ut(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=Aa(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,bf(He,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),Fl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=I.T,I.T=null,i=L.p,L.p=2,a=Zu,Zu|=4;try{uu(e,t,n)}finally{Zu=a,L.p=i,I.T=r}}yd=1,Fl?Ed=Mp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(yd!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){yd===3&&(yd=0,ju(xd,bd),yd=4)}function sf(){if(yd===1){yd=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=I.T,I.T=null;var i=L.p;L.p=2;var a=Zu;Zu|=4;try{su=cu=!1,Du(t,e,n),n=up;var o=Vr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Br(s.ownerDocument.documentElement,s)){if(c!==null&&Hr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=zr(s,h),v=zr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!lp,up=lp=null}finally{Zu=a,L.p=i,I.T=r}}e.current=t,yd=2}}function cf(){if(yd===2){yd=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=I.T,I.T=null;var r=L.p;L.p=2;var i=Zu;Zu|=4;try{fu(e,t.alternate,t)}finally{Zu=i,L.p=r,I.T=n}}yd=3}}function lf(){if(yd===4||yd===3){yd=0;var e=Ed;Ed=null,Le();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?yd=5:(yd=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(vd=null),ht(r),n=n.stateNode,Je&&typeof Je.onCommitFiberRoot==`function`)try{Je.onCommitFiberRoot(qe,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=I.T,a=L.p,L.p=2,I.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{I.T=n,L.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Df(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Of(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Da(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(yd!==5)return!1;var e=bd,t=Cd;Cd=0;var n=ht(Sd),r=I.T,a=L.p;try{L.p=32>n?32:n,I.T=null,n=wd,wd=null;var o=bd,s=Sd;if(yd=0,xd=bd=null,Sd=0,Zu&6)throw Error(i(331));var c=Zu;if(Zu|=4,Ku(o.current),Ru(o,o.current,s,n),Zu=c,Of(0,!1),Je&&typeof Je.onPostCommitFiberRoot==`function`)try{Je.onPostCommitFiberRoot(qe,o)}catch{}return!0}finally{L.p=a,I.T=r,uf(e,t)}}function pf(e,t,n){t=Ii(n,t),t=Cc(e.stateNode,t,2),e=fo(e,t,2),e!==null&&(lt(e,2),Df(e))}function mf(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(vd===null||!vd.has(r))){e=Ii(n,e),n=wc(2),r=fo(t,n,2),r!==null&&(Tc(n,r,t,e),lt(r,2),Df(r));break}}t=t.return}}function hf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Xu;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(rd=!0,i.add(n),e=gf.bind(null,e,t,n),t.then(e,e))}function gf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Qu===e&&(X&n)===n&&(ad===4||ad===3&&(X&62914560)===X&&300>Re()-md?Zu&2?cd|=n:Vd(e,0):cd|=n,ud===X&&(ud=0)),Df(e)}function _f(e,t){t===0&&(t=st()),e=xi(e,t),e!==null&&(lt(e,t),Df(e))}function vf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_f(e,n)}function yf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),_f(e,n)}function bf(e,t){return Pe(e,t)}var xf=null,Sf=null,Cf=!1,wf=!1,Tf=!1,Ef=0;function Df(e){e!==Sf&&e.next===null&&(Sf===null?xf=Sf=e:Sf=Sf.next=e),wf=!0,Cf||(Cf=!0,Pf())}function Of(e,t){if(!Tf&&wf){Tf=!0;do for(var n=!1,r=xf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-V(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Nf(r,a))}else a=X,a=rt(r,r===Qu?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||it(r,a)||(n=!0,Nf(r,a))}r=r.next}while(n);Tf=!1}}function kf(){Af()}function Af(){wf=Cf=!1;var e=0;Ef!==0&&_p()&&(e=Ef);for(var t=Re(),n=null,r=xf;r!==null;){var i=r.next,a=jf(r,t);a===0?(r.next=null,n===null?xf=i:n.next=i,i===null&&(Sf=n)):(n=r,(e!==0||a&3)&&(wf=!0)),r=i}yd!==0&&yd!==5||Of(e,!1),Ef!==0&&(Ef=0)}function jf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-V(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=ot(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Qu,n=X,n=rt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&($u===2||$u===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Fe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||it(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Fe(r),ht(n)){case 2:case 8:n=Ve;break;case 32:n=He;break;case 268435456:n=We;break;default:n=He}return r=Mf.bind(null,e),n=Pe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Fe(r),e.callbackPriority=2,e.callbackNode=null,2}function Mf(e,t){if(yd!==0&&yd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=X;return r=rt(e,e===Qu?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),jf(e,Re()),e.callbackNode!=null&&e.callbackNode===n?Mf.bind(null,e):null)}function Nf(e,t){if(df())return null;Fd(e,t,!0)}function Pf(){Q(function(){Zu&6?Pe(Be,kf):Af()})}function Ff(){if(Ef===0){var e=Na;e===0&&(e=$e,$e<<=1,!($e&261888)&&($e=256)),Ef=e}return Ef}function If(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:mn(e)}function Lf(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=If((i[bt]||null).action),o=r.submitter;o&&(t=(t=o[bt]||null)?If(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Fn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ef!==0){var e=new FormData(i,o);Ys(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),Ys(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Rf=0;Rf<ci.length;Rf++){var zf=ci[Rf];li(zf.toLowerCase(),`on`+(zf[0].toUpperCase()+zf.slice(1)))}li(ei,`onAnimationEnd`),li(ti,`onAnimationIteration`),li(ni,`onAnimationStart`),li(`dblclick`,`onDoubleClick`),li(`focusin`,`onFocus`),li(`focusout`,`onBlur`),li(ri,`onTransitionRun`),li(ii,`onTransitionStart`),li(ai,`onTransitionCancel`),li(oi,`onTransitionEnd`),Lt(`onMouseEnter`,[`mouseout`,`mouseover`]),Lt(`onMouseLeave`,[`mouseout`,`mouseover`]),Lt(`onPointerEnter`,[`pointerout`,`pointerover`]),Lt(`onPointerLeave`,[`pointerout`,`pointerover`]),It(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),It(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),It(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),It(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),It(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),It(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Bf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Vf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Bf));function Hf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){mi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){mi(e)}i.currentTarget=null,a=c}}}}function Z(e,t){var n=t[St];n===void 0&&(n=t[St]=new Set);var r=e+`__bubble`;n.has(r)||(Kf(t,e,2,!1),n.add(r))}function Uf(e,t,n){var r=0;t&&(r|=4),Kf(n,e,r,t)}var Wf=`_reactListening`+Math.random().toString(36).slice(2);function Gf(e){if(!e[Wf]){e[Wf]=!0,Pt.forEach(function(t){t!==`selectionchange`&&(Vf.has(t)||Uf(t,!1,e),Uf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wf]||(t[Wf]=!0,Uf(`selectionchange`,!1,t))}}function Kf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!Tn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function qf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ot(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}Sn(function(){var r=a,i=_n(n),s=[];a:{var c=si.get(e);if(c!==void 0){var l=Fn,u=e;switch(e){case`keypress`:if(jn(n)===0)break a;case`keydown`:case`keyup`:l=Zn;break;case`focusin`:u=`focus`,l=Hn;break;case`focusout`:u=`blur`,l=Hn;break;case`beforeblur`:case`afterblur`:l=Hn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Vn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=G;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=er;break;case ei:case ti:case ni:l=Un;break;case oi:l=tr;break;case`scroll`:case`scrollend`:l=Ln;break;case`wheel`:l=nr;break;case`copy`:case`cut`:case`paste`:l=Wn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Qn;break;case`submit`:l=$n;break;case`toggle`:case`beforetoggle`:l=rr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Cn(m,p),g!=null&&d.push(Jf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==gn&&(u=n.relatedTarget||n.fromElement)&&(Ot(u)||u[xt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Ot(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Vn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:At(c),h=l==null?u:At(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Ot(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?E(c,l,Xf):null,c!==null&&Zf(s,u,c,d,!1),l!==null&&f!==null&&Zf(s,f,l,d,!0)))}a:{if(c=r?At(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Cr;else if(_r(c)){if(wr)_=Nr;else{_=jr;var v=Ar}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&dn(r.elementType)&&(_=Cr):_=Mr;if(_&&=_(e,r)){vr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?At(r):window,e){case`focusin`:(_r(v)||v.contentEditable===`true`)&&(Wr=v,Gr=r,Kr=null);break;case`focusout`:Kr=Gr=Wr=null;break;case`mousedown`:qr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:qr=!1,Jr(s,n,i);break;case`selectionchange`:if(Ur)break;case`keydown`:case`keyup`:Jr(s,n,i)}var y;if(ar)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else pr?dr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(cr&&n.locale!==`ko`&&(pr||b!==`onCompositionStart`?b===`onCompositionEnd`&&pr&&(y=An()):(Dn=i,On=`value`in Dn?Dn.value:Dn.textContent,pr=!0)),v=Yf(r,b),0<v.length&&(b=new Gn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=fr(n),y!==null&&(b.data=y)))),(y=sr?mr(e,n):hr(e,n))&&(b=Yf(r,`onBeforeInput`),0<b.length&&(v=new Gn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),Lf(s,e,r,n,i)}Hf(s,t)})}function Jf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Cn(e,n),i!=null&&r.unshift(Jf(e,i,a)),i=Cn(e,t),i!=null&&r.push(Jf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Xf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Cn(n,a),l!=null&&o.unshift(Jf(n,l,c))):i||(l=Cn(n,a),l!=null&&o.push(Jf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Qf=/\r\n?/g,$f=/\u0000|\uFFFD/g;function ep(e){return(typeof e==`string`?e:``+e).replace(Qf,`
`).replace($f,``)}function tp(e,t){return t=ep(t),ep(e)===t}function np(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||sn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&sn(e,``+r);else return;break;case`className`:Gt(e,`class`,r);break;case`tabIndex`:Gt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Gt(e,n,r);break;case`style`:un(e,r,o);return;case`data`:if(t!==`object`){Gt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=mn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&np(e,t,`name`,a.name,a,null),np(e,t,`formEncType`,a.formEncType,a,null),np(e,t,`formMethod`,a.formMethod,a,null),np(e,t,`formTarget`,a.formTarget,a,null)):(np(e,t,`encType`,a.encType,a,null),np(e,t,`method`,a.method,a,null),np(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=mn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=hn);return;case`onScroll`:r!=null&&Z(`scroll`,e);return;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=mn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Z(`beforetoggle`,e),Z(`toggle`,e),Wt(e,`popover`,r);break;case`xlinkActuate`:Kt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Kt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Kt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Kt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Kt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Kt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Kt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Wt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=fn.get(n)||n,Wt(e,n,r);else return}Ht=!0}function rp(e,t,n,r,a,o){switch(n){case`style`:un(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)sn(e,r);else if(typeof r==`number`||typeof r==`bigint`)sn(e,``+r);else return;break;case`onScroll`:r!=null&&Z(`scroll`,e);return;case`onScrollEnd`:r!=null&&Z(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=hn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Ft.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[bt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}Ht=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Wt(e,n,r)}return}Ht=!0}function ip(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Z(`error`,e),Z(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:np(e,t,o,s,n,null)}}a&&np(e,t,`srcSet`,n.srcSet,n,null),r&&np(e,t,`src`,n.src,n,null);return;case`input`:Z(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:np(e,t,r,d,n,null)}}tn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Z(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:np(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&rn(e,!!r,n,!0):rn(e,!!r,t,!1);return;case`textarea`:for(s in Z(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:np(e,t,s,c,n,null)}on(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:np(e,t,l,r,n,null)}return;case`dialog`:Z(`beforetoggle`,e),Z(`toggle`,e),Z(`cancel`,e),Z(`close`,e);break;case`iframe`:case`object`:Z(`load`,e);break;case`video`:case`audio`:for(r=0;r<Bf.length;r++)Z(Bf[r],e);break;case`image`:Z(`error`,e),Z(`load`,e);break;case`details`:Z(`toggle`,e);break;case`embed`:case`source`:case`link`:Z(`error`,e),Z(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:np(e,t,u,r,n,null)}return;default:if(dn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&rp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&np(e,t,c,r,n,null))}var ap={};function op(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||np(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(Ht=!0),o=m;break;case`name`:m!==f&&(Ht=!0),a=m;break;case`checked`:m!==f&&(Ht=!0),u=m;break;case`defaultChecked`:m!==f&&(Ht=!0),d=m;break;case`value`:m!==f&&(Ht=!0),s=m;break;case`defaultValue`:m!==f&&(Ht=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&np(e,t,p,m,r,f)}}en(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||np(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(Ht=!0),p=o;break;case`defaultValue`:o!==l&&(Ht=!0),c=o;break;case`multiple`:o!==l&&(Ht=!0),s=o;default:o!==l&&np(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?rn(e,!!n,n?[]:``,!1):rn(e,!!n,t,!0)):rn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:np(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(Ht=!0),p=a;break;case`defaultValue`:a!==o&&(Ht=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&np(e,t,s,a,r,o)}an(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:np(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(Ht=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:np(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&np(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:np(e,t,u,p,r,m)}return;default:if(dn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&rp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||rp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&np(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||np(e,t,f,p,r,m)}function sp(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function cp(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&sp(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&sp(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var lp=null,up=null;function dp(e){return e.nodeType===9?e:e.ownerDocument}function fp(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function pp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function mp(e,t,n,r){return n=dp(n).createElement(e),n[yt]=r,n[bt]=t,ip(n,e,t),Mt(n),n}function hp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gp=null;function _p(){var e=window.event;return e&&e.type===`popstate`?e!==gp&&(gp=e,!0):(gp=null,!1)}var vp=typeof setTimeout==`function`?setTimeout:void 0,yp=typeof clearTimeout==`function`?clearTimeout:void 0,bp=typeof Promise==`function`?Promise:void 0,xp=typeof requestAnimationFrame==`function`?requestAnimationFrame:vp,Q=typeof queueMicrotask==`function`?queueMicrotask:bp===void 0?vp:function(e){return bp.resolve(null).then(e).catch(Sp)};function Sp(e){setTimeout(function(){throw e})}function $(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Et]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:D({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=dp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Ot(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=E(n,a,T),t===null?t=!1:(h(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=E(r,a,T),t===null?t=!1:(h(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),H(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Et])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){xp(function(){xp(function(t){return e(t)})})}function hm(e,t,n){switch(t=dp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&np(e,t,r,null,ap,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===hn&&(e.onclick=null),H(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);H(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=L.d;L.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=zd();return e||t}function Cm(e){var t=kt(e);t!==null&&t.tag===5&&t.type===`form`?Zs(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=$t(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),ip(t,`link`,e),Mt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+$t(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+$t(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+$t(n.imageSizes)+`"]`)):i+=`[href="`+$t(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=D({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);ip(o,`link`,e),t===`style`&&(o[Dt]=!0,o.onload=o.onerror=function(){Nt(o)}),Mt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+$t(r)+`"][href="`+$t(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=D({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),ip(r,`link`,e),Mt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=jt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=D({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Mt(c),ip(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=jt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Mt(a),ip(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=jt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Mt(a),ip(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=xe.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=jt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=jt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=jt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+$t(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Dt]){r.loading=1;return}}else t=e.createElement(`link`),t[Dt]=!0,t.onload=t.onerror=Nt.bind(null,t),ip(t,`link`,n),Mt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+$t(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+$t(n.href)+`"]`);if(r)return t.instance=r,Mt(r),r;var a=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Mt(r),ip(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Mt(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Mt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),ip(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Mt(a),a):(r=n,(a=vm.get(o))&&(r=D({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Mt(a),ip(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Et]||a[yt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Mt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Mt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),ip(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*cp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:j,Provider:null,Consumer:null,_currentValue:R,_currentValue2:R,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ct(0),this.hiddenUpdates=ct(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Ei(3,null,null,t),e.current=a,a.stateNode=e,t=Ea(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},co(a),e}function uh(e){return e?(e=wi,e):wi}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=uo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=fo(e,r,t),n!==null&&(Pd(n,e,t),po(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=xi(e,67108864);t!==null&&Pd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jd();t=mt(t);var n=xi(e,t);n!==null&&Pd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=I.T;I.T=null;var a=L.p;try{L.p=2,yh(e,t,n,r)}finally{L.p=a,I.T=i}}function vh(e,t,n,r){var i=I.T;I.T=null;var a=L.p;try{L.p=8,yh(e,t,n,r)}finally{L.p=a,I.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)qf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=kt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=nt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-V(o);s.entanglements[1]|=c,o&=~c}Df(a),!(Zu&6)&&(gd=Re()+500,Of(0,!1))}}break;case 31:case 13:s=xi(a,2),s!==null&&Pd(s,a,2),zd(),ph(a,2)}if(a=bh(r),a===null&&qf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else qf(e,t,r,null,n)}}function bh(e){return e=_n(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Ot(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(ze()){case Be:return 2;case Ve:return 8;case He:case Ue:return 32;case We:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=kt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Ot(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,_t(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,_t(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);gn=r,n.target.dispatchEvent(r),gn=null}else return t=kt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=kt(n);a!==null&&(e.splice(t,3),t-=3,Ys(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[bt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[bt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,jd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),zd(),t[xt]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=gt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.1`)throw Error(i(527,Kh,`19.3.1`));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:I,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{qe=Jh.inject(qh),Je=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=vc,s=yc,c=bc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[xt]=t.current,Gf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u()),v=g(),y=`-ms-`,b=`-moz-`,x=`-webkit-`,S=`comm`,C=`rule`,w=`decl`,T=`@import`,E=`@namespace`,D=`@keyframes`,ee=`@layer`,O=Math.abs,te=String.fromCharCode,k=Object.assign;function A(e,t){return M(e,0)^45?(((t<<2^M(e,0))<<2^M(e,1))<<2^M(e,2))<<2^M(e,3):0}function ne(e){return e.trim()}function re(e,t){return(e=t.exec(e))?e[0]:e}function j(e,t,n){return e.replace(t,n)}function ie(e,t,n){return e.indexOf(t,n)}function M(e,t){return e.charCodeAt(t)|0}function ae(e,t,n){return e.slice(t,n)}function N(e){return e.length}function oe(e){return e.length}function se(e,t){return t.push(e),e}function ce(e,t){return e.map(t).join(``)}function le(e,t){return e.filter(function(e){return!re(e,t)})}var ue=1,de=1,fe=0,P=0,F=0,pe=``;function me(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ue,column:de,length:o,return:``,siblings:s}}function I(e,t){return k(me(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function L(e){for(;e.root;)e=I(e.root,{children:[e]});se(e,e.siblings)}function R(){return F}function he(){return F=P>0?M(pe,--P):0,de--,F===10&&(de=1,ue--),F}function z(){return F=P<fe?M(pe,P++):0,de++,F===10&&(de=1,ue++),F}function ge(){return M(pe,P)}function _e(){return P}function ve(e,t){return ae(pe,e,t)}function ye(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function be(e){return ue=de=1,fe=N(pe=e),P=0,[]}function xe(e){return pe=``,e}function Se(e){return ne(ve(P-1,we(e===91?e+2:e===40?e+1:e)))}function B(e){for(;(F=ge())&&F<33;)z();return ye(e)>2||ye(F)>3?``:` `}function Ce(e,t){for(;--t&&z()&&!(F<48||F>102||F>57&&F<65||F>70&&F<97););return ve(e,_e()+(t<6&&ge()==32&&z()==32))}function we(e){for(;z();)switch(F){case e:return P;case 34:case 39:e!==34&&e!==39&&we(F);break;case 40:e===41&&we(e);break;case 92:z()}return P}function Te(e,t){for(;z()&&e+F!==57&&(e+F!==84||ge()!==47););return`/*`+ve(t,P-1)+`*`+te(e===47?e:z())}function Ee(e){for(;!ye(ge());)z();return ve(e,P)}function De(e){return xe(Oe(``,null,null,null,[``],e=be(e),0,[0],e))}function Oe(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=z()){case 40:if(m!=108&&M(C,d-1)==58){ie(C+=j(Se(v),`&`,`&\f`),`&\f`,O(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Se(v);break;case 9:case 10:case 13:case 32:C+=B(m);break;case 92:C+=Ce(_e()-1,7);continue;case 47:switch(ge()){case 42:case 47:se(Ae(Te(z(),_e()),t,n,c),c),(ye(m||1)==5||ye(ge()||1)==5)&&N(C)&&ae(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=N(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=j(C,/\f/g,``)),p>0&&(N(C)-d||h===0&&m===47)&&se(p>32?je(C+`;`,r,n,d-1,c):je(j(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(se(S=ke(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123){if(u===0)Oe(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(M(C,3)===110)break;case 108:if(M(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Oe(e,S,S,r&&se(ke(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):Oe(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+N(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&he()==125)continue}switch(C+=te(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(N(C)-1)*_,_=1;break;case 64:ge()===45&&(C+=Se(z())),f=ge(),u=d=N(y=C+=Ee(_e())),v++;break;case 45:m===45&&N(C)==2&&(h=0)}}return a}function ke(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=oe(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=ae(e,f+1,f=O(g=o[h])),b=e;v<m;++v)(b=ne(g>0?p[v]+` `+y:j(y,/&\f/g,p[v])))&&(c[_++]=b);return me(e,t,n,i===0?C:s,c,l,u,d)}function Ae(e,t,n,r){return me(e,t,n,S,te(R()),ae(e,2,-2),0,r)}function je(e,t,n,r,i){return me(e,t,n,w,ae(e,0,r),ae(e,r+1,-1),r,i)}function Me(e,t,n){switch(A(e,t)){case 5103:return x+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return x+e+e;case 4855:return x+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return b+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return x+e+b+e+y+e+e;case 5936:switch(M(e,t+11)){case 114:return x+e+y+j(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return x+e+y+j(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return x+e+y+j(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return x+e+y+e+e;case 6165:return x+e+y+`flex-`+e+e;case 5187:return x+e+j(e,/(\w+).+(:[^]+)/,x+`box-$1$2`+y+`flex-$1$2`)+e;case 5443:return x+e+y+`flex-item-`+j(e,/flex-|-self/g,``)+(re(e,/flex-|baseline/)?``:y+`grid-row-`+j(e,/flex-|-self/g,``))+e;case 4675:return x+e+y+`flex-line-pack`+j(e,/align-content|flex-|-self/g,``)+e;case 5548:return x+e+y+j(e,`shrink`,`negative`)+e;case 5292:return x+e+y+j(e,`basis`,`preferred-size`)+e;case 6060:return x+`box-`+j(e,`-grow`,``)+x+e+y+j(e,`grow`,`positive`)+e;case 4554:return x+j(e,/([^-])(transform)/g,`$1`+x+`$2`)+e;case 6187:return j(j(j(e,/(zoom-|grab)/,x+`$1`),/(image-set)/,x+`$1`),e,``)+e;case 5495:case 3959:return j(e,/(image-set\([^]*)/,x+"$1$`$1");case 4968:return j(j(e,/(.+:)(flex-)?(.*)/,x+`box-pack:$3`+y+`flex-pack:$3`),/space-between/,`justify`)+x+e+e;case 4200:if(!re(e,/flex-|baseline/))return y+`grid-column-align`+ae(e,t)+e;break;case 2592:case 3360:return y+j(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,re(e.props,/grid-\w+-end/)})?~ie(e+(n=n[t].value),`span`,0)?e:y+j(e,`-start`,``)+e+y+`grid-row-span:`+(~ie(n,`span`,0)?re(n,/\d+/):+re(n,/\d+/)-re(e,/\d+/))+`;`:y+j(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return re(e.props,/grid-\w+-start/)})?e:y+j(j(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return j(e,/(.+)-inline(.+)/,x+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(N(e)-1-t>6)switch(M(e,t+1)){case 109:if(M(e,t+4)!==45)break;case 102:return j(e,/(.+:)(.+)-([^]+)/,`$1`+x+`$2-$3$1`+b+(M(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~ie(e,`stretch`,0)?Me(j(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return j(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return y+n+`:`+r+s+(i?y+n+`-span:`+(a?o:+o-r)+s:``)+e});case 4949:if(M(e,t+6)===121)return j(e,`:`,`:`+x)+e;break;case 6444:switch(M(e,M(e,14)===45?18:11)){case 120:return j(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+x+(M(e,14)===45?`inline-`:``)+`box$3$1`+x+`$2$3$1`+y+`$2box$3`)+e;case 100:return j(e,`:`,`:`+y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return j(e,`scroll-`,`scroll-snap-`)+e}return e}function Ne(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Pe(e,t,n,r){switch(e.type){case ee:if(e.children.length)break;case T:case E:case w:return e.return=e.return||e.value;case S:return``;case D:return e.return=e.value+`{`+Ne(e.children,r)+`}`;case C:if(!N(e.value=e.props.join(`,`)))return``}return N(n=Ne(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Fe(e){var t=oe(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Ie(e){return function(t){t.root||(t=t.return)&&e(t)}}function Le(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case w:e.return=Me(e.value,e.length,n);return;case D:return Ne([I(e,{value:j(e.value,`@`,`@`+x)})],r);case C:if(e.length)return ce(n=e.props,function(t){switch(re(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:L(I(e,{props:[j(t,/:(read-\w+)/,`:`+b+`$1`)]})),L(I(e,{props:[t]})),k(e,{props:le(n,r)});break;case`::placeholder`:L(I(e,{props:[j(t,/:(plac\w+)/,`:`+x+`input-$1`)]})),L(I(e,{props:[j(t,/:(plac\w+)/,`:`+b+`$1`)]})),L(I(e,{props:[j(t,/:(plac\w+)/,y+`input-$1`)]})),L(I(e,{props:[t]})),k(e,{props:le(n,r)})}return``})}}function Re(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var ze=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Be=`active`,Ve=`data-styled-version`,He=`6.6.0`,Ue=`/*!sc*/
`,We=typeof window<`u`&&typeof document<`u`;if(!_.createContext)throw Re(19);function Ge(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var Ke=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:Ge(`REACT_APP_SC_DISABLE_SPEEDY`)??Ge(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),qe=`sc-keyframes-`,Je=new Map,Ye=new Map,V=1,Xe=e=>{if(Je.has(e))return Je.get(e);for(;Ye.has(V);)V++;let t=V++;return Je.set(e,t),Ye.set(t,e),t},Ze=e=>Ye.get(e),Qe=(e,t)=>{V=t+1,Je.set(e,t),Ye.set(t,e)},$e=Object.freeze([]),et=Object.freeze({});function tt(e,t,n=et){return e.theme!==n.theme&&e.theme||t||n.theme}var nt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,rt=/(^-|-$)/g;function it(e){return e.replace(nt,`-`).replace(rt,``)}var at=/(a)(d)/gi,ot=e=>String.fromCharCode(e+(e>25?39:97));function st(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=ot(t%52)+n;return(ot(t%52)+n).replace(at,`$1-$2`)}var ct=5381,lt=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},ut=e=>lt(ct,e);function dt(e){return st(ut(e)>>>0)}function ft(e){return e.displayName||e.name||`Component`}function pt(e){return typeof e==`string`&&!0}function mt(e){return pt(e)?`styled.${e}`:`Styled(${ft(e)})`}var ht=Symbol.for(`react.memo`),gt=Symbol.for(`react.forward_ref`),_t={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},vt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},bt={[gt]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[ht]:yt};function xt(e){return(`type`in(t=e)&&t.type.$$typeof)===ht?yt:`$$typeof`in e?bt[e.$$typeof]:_t;var t}var St=Object.defineProperty,Ct=Object.getOwnPropertyNames,wt=Object.getOwnPropertySymbols,Tt=Object.getOwnPropertyDescriptor,Et=Object.getPrototypeOf,Dt=Object.prototype;function H(e,t,n){if(typeof t!=`string`){let r=Et(t);r&&r!==Dt&&H(e,r,n);let i=Ct(t).concat(wt(t)),a=xt(e),o=xt(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in vt||n&&n[s]||o&&s in o||a&&s in a)){let n=Tt(t,s);try{St(e,s,n)}catch{}}}}return e}function Ot(e){return typeof e==`function`}var kt=Symbol.for(`react.forward_ref`);function At(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===kt&&`styledComponentId`in e}function jt(e,t){return e&&t?e+` `+t:e||t||``}function Mt(e,t){return e.join(t||``)}function Nt(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Pt(e,t,n=!1){if(!n&&!Nt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Pt(e[n],t[n]);else if(Nt(t))for(let n in t)e[n]=Pt(e[n],t[n]);return e}function Ft(e,t){Object.defineProperty(e,"toString",{value:t})}var It=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw Re(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+Ue;return t}},Lt=`style[${ze}][${Ve}="${He}"]`,Rt=RegExp(`^${ze}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),zt=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,Bt=e=>{if(!e)return document;if(zt(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(zt(t))return t}return document},Vt=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},Ht=(e,t)=>{let n=(t.textContent??``).split(Ue),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(Rt);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(Qe(n,t),Vt(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},Ut=e=>{let t=Bt(e.options.target).querySelectorAll(Lt);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(ze)!==Be&&(Ht(e,r),r.parentNode&&r.parentNode.removeChild(r))}},Wt=!1;function Gt(){if(!1!==Wt)return Wt;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return Wt=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return Wt=t.getAttribute(`content`)||void 0}return Wt=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var Kt=(e,t)=>{if(typeof document>`u`)throw Re(20);let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${ze}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(ze,Be),i.setAttribute(Ve,He);let s=t||Gt();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},qt=class{constructor(e,t){this.element=Kt(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw Re(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},Jt=class{constructor(e,t){this.element=Kt(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},Yt=We,Xt={isServer:!We,useCSSOMInjection:!Ke},Zt=class e{static registerId(e){return Xe(e)}constructor(e=et,t={},n){this.options=Object.assign(Object.assign({},Xt),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&We&&Yt&&(Yt=!1,Ut(this)),Ft(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=Ze(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=ze+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&We&&Ut(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&We&&t.target!==this.options.target&&Bt(this.options.target)!==Bt(t.target)&&Ut(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new qt(t,n):new Jt(t,n))(this.options),new It(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){Xe(e),e.startsWith(qe)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(Xe(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(Xe(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},Qt=new WeakSet,$t={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function en(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in $t||e.startsWith(`--`)?String(t).trim():t+`px`}var tn=47;function nn(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var rn=Symbol.for(`sc-keyframes`);function an(e){return typeof e==`object`&&!!e&&rn in e}function on(e){return Ot(e)&&!(e.prototype&&e.prototype.isReactComponent)}var sn=e=>e==null||!1===e||e===``,cn=Symbol.for(`react.client.reference`);function ln(e){return e.$$typeof===cn}function un(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!sn(r)&&(Array.isArray(r)&&Qt.has(r)||Ot(r)?t.push(nn(n)+`:`,r,`;`):Nt(r)?(t.push(n+` {`),un(r,t),t.push(`}`)):t.push(nn(n)+`: `+en(n,r)+`;`))}}function dn(e,t,n,r,i=[]){if(sn(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return ln(e)?i:on(e)&&t?dn(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)dn(e[a],t,n,r,i);return i}return At(e)?(i.push(`.${e.styledComponentId}`),i):an(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):ln(e)?i:Nt(e)&&e.toString===Object.prototype.toString?(un(e,i),i):(i.push(e.toString()),i)}var fn=ut(He),pn=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=lt(fn,t),this.baseStyle=n,Zt.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a){if(on(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=Mt(dn(r,e,t,n)))}else i+=Mt(dn(a,e,t,n))}}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=st(lt(lt(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=jt(r,a)}}return r}},mn=/&/g;function hn(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function gn(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==tn||e.charCodeAt(c+1)!==42){if(o)l===42&&e.charCodeAt(c+1)===tn&&(o=!1,c++);else if(l!==34&&l!==39||hn(e,c)){if(a===0){if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}}else a===0?a=l:a===l&&(a=0)}else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function _n(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&_n(a.children,t)}return e}function vn({options:e=et,plugins:t=$e}=et){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(mn,r).replace(i,a))}),e.prefix&&o.push(Le),o.push(Pe);let s=[],c=Fe(o.concat(Ie(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return gn(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||hn(e,o)){if(s===0){if(t===tn&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==tn);)o++;o+=2}else if(t!==40){if(t!==41){if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===tn)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===tn&&o+1<r&&e.charCodeAt(o+1)===tn){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++}else c>0&&c--,o++}else c++,o++}else o++}else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:gn(i)):l===0?e:gn(e)}(t),d=De(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=_n(d,e.namespace)),s=[],Ne(d,c),s},u=e,d=ct;for(let e=0;e<t.length;e++)t[e].name||Re(15),d=lt(d,t[e].name);return u!=null&&u.namespace&&(d=lt(d,u.namespace)),u!=null&&u.prefix&&(d=lt(d,`p`)),l.hash=d===ct?``:d.toString(),l}var yn=new Zt,bn=vn(),xn=_.createContext({shouldForwardProp:void 0,styleSheet:yn,stylis:bn,stylisPlugins:void 0});xn.Consumer;function Sn(){return _.useContext(xn)}var Cn=_.createContext(void 0);Cn.Consumer;var wn={};function Tn(e,t){let n=typeof e==`string`?it(e):`sc`;wn[n]=(wn[n]||0)+1;let r=n+`-`+dt(He+n+wn[n]);return t?t+`-`+r:r}function En(e,t,n){let r=At(e),i=e,a=!pt(e),{attrs:o=$e,componentId:s=Tn(t.displayName,t.parentComponentId),displayName:c=mt(e)}=t,l=t.displayName&&t.componentId?it(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new pn(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=_.useContext(Cn),u=Sn(),d=e.shouldForwardProp||u.shouldForwardProp,f=tt(t,l,a)||et,[p,m]=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=null,a=e.length>1;for(let t=0;t<e.length;t++){let n=e[t],o=Ot(n)?n(a?Object.assign({},r):r):n;for(let e in o)e===`className`?r.className=jt(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):o[e]===void 0?e in r&&(r[e]!==void 0&&(i||=[]).push(e),r[e]=void 0):r[e]=o[e]}return`className`in t&&typeof t.className==`string`&&(r.className=jt(r.className,t.className)),[r,i]}(r,t,f),h=i.generateAndInjectStyles(p,u.styleSheet,u.stylis),g=p.as||c,v=pt(g),y=function(e,t,n,r,i,a){let o={};for(let s in e)s[0]===`$`||s===`as`||s===`theme`&&e.theme===n||(s===`forwardedAs`?e.forwardedAs!==void 0&&(o.as=e.forwardedAs):e[s]===void 0?s===`className`||i||a!==null&&a.indexOf(s)!==-1||r&&!r(s,t)||(o[s]=void 0):r&&!r(s,t)||(o[s]=e[s]));return o}(p,g,f,d,v,m),b=jt(o,s);return h&&(b+=` `+h),p.className&&(b+=` `+p.className),y[v&&g.includes(`-`)?`class`:`className`]=b,n&&(y.ref=n),(0,_.createElement)(g,y)}(m,e,t)}p.displayName=c;let m=_.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?jt(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Pt(e,n,!0);return e}({},i.defaultProps,e):e}}),Ft(m,()=>`.${m.styledComponentId}`),a&&H(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Dn=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function On(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var kn=e=>(Qt.add(e),e);function An(e,...t){if(Ot(e)||Nt(e))return kn(dn(On($e,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?dn(n):kn(dn(On(n,t)))}function jn(e,t,n=et){if(!t)throw Re(1,t);let r=(r,...i)=>e(t,n,An(r,...i));return r.attrs=r=>jn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>jn(e,t,Object.assign(Object.assign({},n),r)),r}var Mn=e=>jn(En,e),U=Mn;Dn.forEach(e=>{U[e]=Mn(e)}),`${ze}`,`${ze}`,`${ze}`;var Nn=15e3,Pn=new Set,Fn=new Map,In=!1,Ln=0;function Rn(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function zn(){In||(In=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>Bn(e)))}function Bn(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?Fn.get(n):void 0;n&&r&&(Fn.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),Pn.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}var W={get available(){return Rn()},send(e){Rn()?(zn(),window.external.sendMessage(JSON.stringify(e))):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=Nn){if(!Rn())return Promise.reject(Error(`Native bridge is not available.`));zn();let r=`req-${++Ln}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{Fn.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);Fn.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return zn(),Pn.add(e),()=>Pn.delete(e)}},Vn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),G=o(((e,t)=>{t.exports=Vn()}))();function Hn(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}async function Un(e){return W.available?await W.request(`i18n.get`,e?{locale:e}:void 0):{locale:`en`,strings:{},available:[`en`]}}var Wn=(0,_.createContext)(Hn({})),Gn=(0,_.createContext)(`en`);function Kn(){return(0,_.useContext)(Wn)}var qn=({children:e})=>{let[t,n]=(0,_.useState)(()=>Hn({})),[r,i]=(0,_.useState)(`en`);return(0,_.useEffect)(()=>{let e=!1,t=async()=>{try{let t=await Un();if(e)return;n(()=>Hn(t.strings)),i(t.locale)}catch{}};t();let r=W.on(e=>{e.type===`settings.changed`&&t()});return()=>{e=!0,r()}},[]),(0,_.useEffect)(()=>{document.documentElement.lang=r},[r]),(0,G.jsx)(Wn.Provider,{value:t,children:(0,G.jsx)(Gn.Provider,{value:r,children:e})})},Jn=e=>W.send({type:e});function Yn(){let[e,t]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{if(W.available)return W.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>Jn(`window.minimize`),toggleMaximize:()=>Jn(`window.toggleMaximize`),close:()=>Jn(`window.close`)}}function Xn(){return{onMouseDown:()=>Jn(`window.drag`),onDoubleClick:()=>Jn(`window.toggleMaximize`)}}function Zn(){let[e,t]=(0,_.useState)(!1),{maximized:n}=Yn();return(0,_.useEffect)(()=>{if(!W.available)return;let e=!1;return W.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,_.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var Qn=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function $n(){return(0,G.jsx)(G.Fragment,{children:Qn.map(([e,t])=>(0,G.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),W.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var er={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},tr={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function nr(e,t){return W.available?await W.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function rr(e){return W.available?(await W.request(`fs.open`,{path:e})).ok:!1}async function ir(e,t=!0,n=!1){return await W.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n})}async function ar(e){return W.available?await W.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function or(e,t){return W.available?(await W.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function sr(e,t,n,r){return W.available?(await W.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function cr(e,t=!1){return W.available?await W.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function lr(){return(await W.request(`fs.places`)).places}async function ur(){return(await W.request(`fs.drives`)).drives}async function dr(e=!1){return(await W.request(`fs.recycle`,{includeOrphans:e})).entries}async function fr(e=!1){await W.request(`fs.recycle.empty`,{includeOrphans:e})}async function pr(e){return!W.available||e.length===0?{ok:!1,done:0}:await W.request(`fs.recycle.restoreMany`,{ids:e})}async function mr(e){return!W.available||e.length===0?{ok:!1,done:0}:await W.request(`fs.recycle.deleteMany`,{ids:e})}async function hr(e){W.available&&e&&await W.request(`fs.recycle.properties`,{id:e})}async function gr(){if(!W.available)return{entries:[],cancelled:!0,failed:!1};let e=await W.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function _r(){return W.available?(await W.request(`fs.recycle.admin.purge`)).ok:!1}async function vr(e=0,t=150,n=!1){return W.available?await W.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function yr(){return W.available?(await W.request(`fs.recent`)).entries:[]}async function br(){return W.available?(await W.request(`fs.frequent`)).entries:[]}async function xr(e){W.available&&await W.request(`fs.frequent.record`,{path:e})}async function Sr(){await W.request(`fs.recent.clear`)}async function Cr(){await W.request(`fs.frequent.clear`)}async function wr(){return await W.request(`fs.visibility`)}async function Tr(){return await W.request(`fs.hidden.toggle`)}var Er={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,accentColor:null,secondaryColor:null,language:null,themePresets:[]};async function Dr(){if(!W.available)return Er;let e=await W.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,language:e?.language??null,themePresets:e?.themePresets??[]}}async function Or(e){if(!W.available)return e;let t=await W.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets}}async function kr(e,t){W.available&&await W.request(`app.tabs.set`,{tabs:e,active:t})}async function Ar(e,t,n){return W.available?(await W.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}async function jr(){return W.available?(await W.request(`app.pickIcon`)).path:null}async function Mr(){return W.available?(await W.request(`app.pickFolder`)).path:null}var Nr={managed:0,private:0,workingSet:0,available:0};async function Pr(){return W.available?await W.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1}}async function Fr(){return W.available?await W.request(`app.memory`):Nr}async function Ir(){return W.available?await W.request(`app.memory.trim`):Nr}async function Lr(){return W.available?(await W.request(`app.scheme`)).registered:!1}async function Rr(e){return W.available?(await W.request(`app.scheme.set`,{enabled:e})).registered:!1}async function zr(e,t=!1){return!W.available||e.length===0?!1:(await W.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function Br(){return W.available?(await W.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function Vr(){return W.available?await W.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function Hr(e,t,n){return!W.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await W.request(`fs.operation.transfer`,{paths:e,target:t,move:n})}async function Ur(e){return!W.available||e.length===0?[]:(await W.request(`fs.paths.info`,{paths:e})).entries}async function Wr(e){return W.available?(await W.request(`fs.clipboard.paste`,{directory:e})).ok:!1}async function Gr(e,t=!1){return!W.available||e.length===0?!1:(await W.request(`fs.operation.delete`,{paths:e,permanent:t})).ok}async function Kr(e,t){return W.available?await W.request(`fs.operation.rename`,{path:e,name:t}):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function qr(e){return W.available?await W.request(`fs.operation.newFolder`,{directory:e}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function Jr(e){return W.available?await W.request(`fs.operation.newFile`,{directory:e}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function Yr(e){W.available&&e.length!==0&&await W.request(`fs.operation.properties`,{paths:e})}async function Xr(e){W.available&&await W.request(`fs.operation.openWith`,{path:e})}async function Zr(e){W.available&&await W.request(`fs.operation.terminal`,{path:e})}async function Qr(e){return W.available?await W.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function $r(e,t){return W.available?(await W.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function ei(){return W.available?await W.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function ti(){return W.available?await W.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function ni(e){W.available&&await W.request(`fs.operation.showInExplorer`,{path:e})}async function ri(e){return!W.available||e.length===0?{verbs:[],safe:!0}:await W.request(`shell.verbs`,{paths:e})}async function ii(e,t,n,r){W.available&&e.length!==0&&await W.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function ai(e){return!W.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await W.request(`fs.operation.compress`,{paths:e})}async function oi(){return W.available?(await W.request(`app.tasks`)).tasks:[]}async function si(){W.available&&await W.request(`app.tasks.clear`)}var ci={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,refresh:`f5`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},li=ci.openInNewTab;function ui(e){li=e.trim()||ci.openInNewTab}function di(e){let t=li.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function fi(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function pi(e){return e.split(`+`).filter(Boolean).map(e=>mi[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var mi={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function hi(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var gi=new Map,_i=new Map,vi=new Set,yi=0;function bi(){gi.clear(),_i.clear(),yi+=1,vi.forEach(e=>e())}function xi(){let[e,t]=(0,_.useState)(yi);return(0,_.useEffect)(()=>{let e=()=>t(yi);return vi.add(e),()=>{vi.delete(e)}},[]),e}var Si=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function Ci(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return Si.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function wi(e,t,n=!1){let r=xi(),i=e===null?``:Ci(e,t,n),[a,o]=(0,_.useState)(()=>gi.get(i)??null);return(0,_.useEffect)(()=>{if(e===null){o(null);return}if(!W.available)return;if(gi.has(i)){o(gi.get(i)??null);return}let r=!0;return W.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{gi.set(i,e.dataUrl),r&&o(e.dataUrl)},()=>{gi.set(i,null),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function Ti(e){let t=xi(),[n,r]=(0,_.useState)(()=>e?_i.get(e)??null:null);return(0,_.useEffect)(()=>{if(!e||!W.available){r(null);return}if(_i.has(e)){r(_i.get(e)??null);return}let t=!0;return W.request(`fs.iconFile`,{path:e}).then(n=>{_i.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{_i.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var Ei=null,Di=null;function Oi(){return Ei===null?W.available?(Di??=W.request(`app.thumbnails`).then(e=>(Ei=e.base??``,Ei),()=>(Ei=``,``)),Di):Promise.resolve(``):Promise.resolve(Ei)}function ki(e,t=128,n=0){let[r,i]=(0,_.useState)(Ei);return(0,_.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return Oi().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}`}function Ai(e,t=0,n=``){let[r,i]=(0,_.useState)(Ei);if((0,_.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return Oi().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function ji(e,t=0){let[n,r]=(0,_.useState)(Ei);return(0,_.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return Oi().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var Mi={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},Ni={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function Pi(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=Li(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=Bi(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var Fi=`\0`,Ii=``;function Li(e){return e.query!==Fi&&(Fi=e.query,Ii=e.query.toLowerCase()),Ii}var Ri=`\0`,zi=null;function Bi(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===Ri)return zi;Ri=t;try{zi=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{zi=null}return zi}function Vi(e,t){return Pi(e,t)!==null}var Hi=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],Ui={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Wi(e){let t=Ki(e);for(let{kind:e}of Hi)if(Ui[e].has(t))return e;return null}function Gi(e){return Wi(e)!==null}function Ki(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}function qi(e,t,n,r,i={}){return e(t===1?n:r,{count:t,...i})}function Ji(e){if(e<0)return`—`;if(e===0)return`0 B`;let t=[`B`,`KB`,`MB`,`GB`,`TB`],n=Math.min(Math.floor(Math.log(e)/Math.log(1024)),t.length-1);return`${(e/1024**n).toFixed(n===0?0:1)} ${t[n]}`}function Yi(){let e=document.documentElement.lang.trim();return e.length>0?e:void 0}function Xi(e){return e<=0?`—`:new Date(e).toLocaleString(Yi(),{year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`})}function Zi(e){return e>=.9?`#ef4444`:e>=.75?`#f59e0b`:`var(--accent-gradient)`}function Qi(e){return e.replace(/[\\/]+$/,``).split(/[\\/]/).at(-1)||e}function K(e){let t=e.replace(/[\\/]+$/,``),n=Math.max(t.lastIndexOf(`\\`),t.lastIndexOf(`/`));return n>0?t.slice(0,n):t}function $i(e){let t=e.includes(`/`)||e.includes(`\\\\`)?e.replace(/[\\/]+/g,`\\`):e;return t.endsWith(`\\`)&&(t=t.slice(0,-1)),t.toLowerCase()}function ea(e){let t=e.name.replace(/[\\/]+$/,``);return/^[a-z]:$/i.test(t)?` (${t.toUpperCase()})`:``}function ta(e){return`${e.label||`Local Disk`}${ea(e)}`}var na=(0,_.createContext)({places:{},useIcons:!1}),ra=na.Provider;function ia(){return(0,_.useContext)(na)}function aa(e,t){return e.places[$i(t)]}function oa(e,t,n){return aa(e,t)?.name||n}function sa(e,t){try{let n=Number(localStorage.getItem(e));return Number.isFinite(n)?n:t}catch{return t}}function ca(e,t){try{localStorage.setItem(e,String(t))}catch{}}function la(e){try{return JSON.parse(localStorage.getItem(e)??`null`)}catch{return null}}function ua(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}var da=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,G.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,G.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),fa=e=>(0,G.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,G.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),pa=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,G.jsx)(`path`,{d:`M14 3v4h4`})]}),ma=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,G.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,G.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),ha=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,G.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),ga=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M12 19V5`}),(0,G.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),_a=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,G.jsx)(`path`,{d:`M20 4v7h-7`})]}),va=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M12 5v14`}),(0,G.jsx)(`path`,{d:`M5 12h14`})]}),ya=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M19 12H5`}),(0,G.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),ba=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M5 12h14`}),(0,G.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),xa=e=>(0,G.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,G.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),Sa=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,G.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),Ca=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,G.jsx)(`path`,{d:`M12 12v8`})]}),wa=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,G.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),Ta=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,G.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,G.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,G.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),Ea=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,G.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),Da=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M4 7h16`}),(0,G.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,G.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,G.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),Oa=e=>(0,G.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,G.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),ka=e=>(0,G.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,G.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),Aa=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,G.jsxs)(`defs`,{children:[(0,G.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,G.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,G.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,G.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,G.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,G.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,G.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,G.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,G.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,G.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),ja=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,G.jsx)(`path`,{d:`M15 3v4h4`}),(0,G.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),Ma=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,G.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,G.jsx)(`path`,{d:`m13 5-2 14`})]}),Na=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,G.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,G.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Pa=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,G.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Fa=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,G.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,G.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Ia=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,G.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),La=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,G.jsx)(`path`,{d:`M15 3v4h4`}),(0,G.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),Ra=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,G.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),za=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,G.jsx)(`path`,{d:`M8.5 14h7`})]}),Ba=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,G.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,G.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),Va=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,G.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),Ha=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,G.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),Ua=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,G.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),Wa=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,G.jsx)(`path`,{d:`M15 3v4h4`}),(0,G.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),Ga=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,G.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,G.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,G.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),Ka=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,G.jsx)(`path`,{d:`m14 6 4 4`})]}),qa=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,G.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Ja=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,G.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Ya=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M12 4v10`}),(0,G.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,G.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Xa=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,G.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,G.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Za=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,G.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,G.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Qa=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,G.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),$a=e=>(0,G.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,G.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),eo=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,G.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),to=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,G.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,G.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),no=e=>(0,G.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,G.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),ro=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,G.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,G.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,G.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),io=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,G.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),ao=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,G.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),oo=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,G.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,G.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),so=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,G.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),co=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,G.jsx)(`path`,{d:`M3.5 12h17`}),(0,G.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),lo=e=>(0,G.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,G.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),uo=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,G.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),fo=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,G.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,G.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),po=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,G.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),mo=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M12 16V4`}),(0,G.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,G.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),ho=e=>(0,G.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,G.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),go=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,G.jsx)(`path`,{d:`M12 4v16`})]}),_o=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,G.jsx)(`path`,{d:`M15 4v16`})]});function q(e,t){return({size:n=t,...r})=>(0,G.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var vo=q(da,18),yo=q(fa,18),bo=q(pa,18),xo=q(ma,18),So=q(ha,16),Co=q(ga,16),wo=q(_a,16),To=q(va,16),Eo=q(ya,16),Do=q(ba,16),Oo=q(xa,12),ko=q(Sa,18),Ao=q(Ca,14),jo=q(wa,14),Mo=q(Ta,14),No=q(Ea,18),Po=q(Da,18),Fo=q(Oa,14),J=q(ka,14),Io=q(Aa,18),Lo=q(ja,18),Ro=q(Ma,18),zo=q(Na,18),Bo=q(Pa,18),Vo=q(Fa,18),Ho=q(Ia,18),Uo=q(La,18),Wo=q(Ra,18),Go=q(za,18),Ko=q(Ba,18),qo=q(Va,18),Jo=q(Ha,18),Yo=q(Ua,18),Xo=q(Wa,18),Zo=q(Ga,18),Qo=q(Ka,16),$o=q(qa,18),es=q(Ja,18),ts=q(Ya,18),ns=q(Xa,18),rs=q(Za,18),is=q(Qa,18),as=q($a,18),os=q(eo,18),ss=q(to,18),cs=q(no,18),ls=q(ro,18),us=q(io,18),ds=q(ao,18),fs=q(oo,18),ps=q(so,18),ms=q(co,18),hs=q(lo,18),gs=q(uo,16),_s=q(fo,16),vs=q(po,16),ys=q(mo,16),bs=q(ho,16),xs=q(go,16),Ss=q(_o,16),Cs=m(),ws=An`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: var(--bg-elevated);
    backdrop-filter: blur(18px) saturate(120%);
    -webkit-backdrop-filter: blur(18px) saturate(120%);
    box-shadow: var(--shadow-panel);
`;function Ts({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,_.useState)([]),s=(0,_.useRef)(void 0);if((0,_.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,_.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,G.jsx)(Fs,{},`group-rule-${i}`)),n.push((0,G.jsx)(Ps,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,G.jsx)(Fs,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,G.jsxs)(js,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,G.jsx)(Ms,{children:e.loading?(0,G.jsx)(Is,{}):e.icon}),(0,G.jsx)(Ns,{children:e.label}),a?(0,G.jsx)(Oo,{size:12}):e.checked&&(0,G.jsx)(Fo,{size:12})]},`${e.label}-${i}`))}),n};return(0,Cs.createPortal)((0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(Es,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Ds,{children:r.map((e,t)=>(0,G.jsxs)(Os,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,G.jsx)(ks,{children:e.icon}),(0,G.jsx)(As,{children:e.label})]},`${e.label}-${t}`))}),(0,G.jsx)(Fs,{})]}),m(n,0)]}),a.map((e,t)=>(0,G.jsx)(Es,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var Es=U.div`
    position: fixed;
    z-index: 2000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${ws}
`,Ds=U.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,Os=U.button`
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

    &:hover:not(:disabled) {
        background: var(--bg-card-hover);
        color: ${({$danger:e})=>e?`#fecaca`:`var(--text-primary)`};
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }
`,ks=U.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,As=U.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,js=U.button`
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

    &:hover:not(:disabled) {
        background: var(--bg-card-hover);
        color: ${({$danger:e})=>e?`#fecaca`:`var(--text-primary)`};
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`,Ms=U.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Ns=U.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ps=U.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Fs=U.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,Is=U.span`
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
`;function Ls({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=Kn(),c=(0,_.useRef)(null);return(0,_.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,Cs.createPortal)((0,G.jsx)(Rs,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,G.jsxs)(zs,{role:`alertdialog`,"aria-modal":`true`,children:[(0,G.jsx)(Bs,{children:t}),(0,G.jsx)(Vs,{children:n}),(0,G.jsxs)(Hs,{children:[(0,G.jsx)(Us,{onClick:o,type:`button`,children:s(`Cancel`)}),(0,G.jsx)(Us,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var Rs=U.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
`,zs=U.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
`,Bs=U.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Vs=U.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Hs=U.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Us=U.button`
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
`,Ws=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),Gs=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),Ks=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),qs=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function Js({info:e,width:t,onWidth:n,videoAudio:r,videoAutoplay:i,selectionNote:a}){let o=Kn(),[s,c]=(0,_.useState)(!1),[l,u]=(0,_.useState)(!1),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(0),[h,g]=(0,_.useState)(0),[v,y]=(0,_.useState)(null),[b,x]=(0,_.useState)(!1),[S,C]=(0,_.useState)(!1),w=(0,_.useRef)(null),T=(0,_.useRef)(null),E=e?.path??null,D=e?Ys(e.name):``,ee=!!e&&!e.isDirectory&&Ws.has(D),O=!!e&&!e.isDirectory&&Gs.has(D),te=!!e&&!e.isDirectory&&Ks.has(D),k=!!e&&!e.isDirectory&&qs.has(D),A=!!e&&!e.isDirectory&&D===`pdf`,ne=ki(ee?E:null,512,e?.modified??0),re=Ai(te?E:null,e?.modified??0,D),j=Ai(ee||O?E:null,e?.modified??0,D),ie=ji(A?E:null,e?.modified??0),M=wi(!ee&&!O&&!te&&!k&&!A?E:null,e?.isDirectory??!1);if((0,_.useEffect)(()=>{c(!1),u(!1),f(!1),m(0),g(0),C(!1)},[E]),(0,_.useEffect)(()=>{if(!E||!k){y(null),x(!1);return}let e=!0;return x(!0),y(null),ar(E).then(t=>{e&&(y(t),x(!1))},()=>{e&&(y({text:null,truncated:!1,error:`Could not read this file.`}),x(!1))}),()=>{e=!1}},[E,k]),!e)return null;let ae=e=>{T.current={x:e.clientX,width:t},e.currentTarget.setPointerCapture(e.pointerId)},N=e=>{let t=T.current;t&&n(Math.max(220,Math.min(560,t.width+t.x-e.clientX)))},oe=e=>{T.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},se=()=>{let e=w.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,G.jsxs)(Zs,{children:[(0,G.jsx)(Qs,{onPointerDown:ae,onPointerMove:N,onPointerUp:oe,onDoubleClick:()=>n(320),title:o(`Drag to resize; double-click to reset`)}),(0,G.jsxs)($s,{style:{width:t},children:[(0,G.jsx)(ec,{children:ee&&j&&!s?(0,G.jsxs)(tc,{onPointerEnter:()=>f(!0),onPointerLeave:()=>f(!1),children:[(0,G.jsx)(`video`,{autoPlay:i,controls:!1,muted:!r,onClick:se,onDurationChange:e=>m(e.currentTarget.duration||0),onError:()=>c(!0),onLoadedMetadata:e=>{m(e.currentTarget.duration||0),g(e.currentTarget.currentTime)},onPause:()=>u(!1),onPlay:()=>u(!0),onTimeUpdate:e=>g(e.currentTarget.currentTime),playsInline:!0,poster:ne??void 0,preload:`metadata`,ref:w,src:j}),!l&&(0,G.jsx)(nc,{onClick:se,title:o(`Play`),type:`button`,children:(0,G.jsx)(bs,{size:28})}),d&&(0,G.jsxs)(rc,{onClick:e=>e.stopPropagation(),children:[(0,G.jsxs)(ic,{children:[(0,G.jsx)(`span`,{children:Xs(h)}),(0,G.jsx)(`span`,{children:Xs(p)})]}),(0,G.jsx)(ac,{"aria-label":o(`Seek`),max:p||0,min:0,onChange:e=>{let t=w.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,g(n)},step:.1,type:`range`,value:Math.min(h,p||0)})]})]}):O&&j?(0,G.jsx)(`audio`,{controls:!0,src:j}):te&&re?(0,G.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:re}):A&&ie&&!S?(0,G.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>C(!0),src:ie}):A?(0,G.jsx)(bo,{size:64}):k?(0,G.jsx)(oc,{children:b||!v?(0,G.jsx)(cc,{children:o(`Loading…`)}):v.error?(0,G.jsx)(cc,{children:v.error}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(sc,{children:v.text}),v.truncated&&(0,G.jsx)(cc,{children:o(`Showing the first 256 KB.`)})]})}):ee&&ne?(0,G.jsx)(`img`,{alt:``,src:ne}):M?(0,G.jsx)(`img`,{alt:``,src:M}):e.isDirectory?(0,G.jsx)(yo,{size:64}):(0,G.jsx)(bo,{size:64})}),(0,G.jsxs)(lc,{children:[(0,G.jsx)(uc,{title:e.path,children:e.name}),a&&(0,G.jsx)(dc,{children:a}),(0,G.jsx)(fc,{children:e.fields.map(e=>(0,G.jsxs)(pc,{children:[(0,G.jsx)(mc,{children:e.label}),(0,G.jsx)(hc,{title:e.value,children:e.value})]},e.label))})]})]})]})}function Ys(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function Xs(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var Zs=U.div`
    display: flex;
    flex-shrink: 0;
    align-self: stretch;
    min-height: 0;
`,Qs=U.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,$s=U.aside`
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    background: var(--bg-secondary);
`,ec=U.div`
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
`,tc=U.div`
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
`,nc=U.button`
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

    svg {
        margin-left: 3px;
        fill: currentColor;
        stroke: currentColor;
    }

    &:hover {
        border-color: var(--border-color-focus);
        background: rgba(var(--bg-rgb), 0.86);
    }
`,rc=U.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 24px 10px 8px;
    background: linear-gradient(to top, rgba(var(--bg-rgb), 0.92), rgba(var(--bg-rgb), 0));
`,ic=U.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,ac=U.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,oc=U.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: var(--bg-secondary);
`,sc=U.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,cc=U.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,lc=U.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,uc=U.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,dc=U.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,fc=U.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,pc=U.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,mc=U.span`
    color: var(--text-muted);
`,hc=U.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,gc=[`quick`,`frequent`,`recent`,`home`,`drives`],_c=gc,vc={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`},yc={folder:e=>(0,G.jsx)(yo,{size:e}),home:e=>(0,G.jsx)(vo,{size:e}),desktop:e=>(0,G.jsx)($o,{size:e}),documents:e=>(0,G.jsx)(es,{size:e}),downloads:e=>(0,G.jsx)(ts,{size:e}),pictures:e=>(0,G.jsx)(ns,{size:e}),music:e=>(0,G.jsx)(rs,{size:e}),videos:e=>(0,G.jsx)(is,{size:e}),drive:e=>(0,G.jsx)(xo,{size:e}),image:e=>(0,G.jsx)(zo,{size:e}),video:e=>(0,G.jsx)(Bo,{size:e}),audio:e=>(0,G.jsx)(Vo,{size:e}),text:e=>(0,G.jsx)(Lo,{size:e}),code:e=>(0,G.jsx)(Ro,{size:e}),clock:e=>(0,G.jsx)(No,{size:e}),star:e=>(0,G.jsx)(as,{size:e}),file:e=>(0,G.jsx)(bo,{size:e}),archive:e=>(0,G.jsx)(Ho,{size:e}),pdf:e=>(0,G.jsx)(Uo,{size:e}),executable:e=>(0,G.jsx)(Wo,{size:e}),font:e=>(0,G.jsx)(Go,{size:e}),database:e=>(0,G.jsx)(Ko,{size:e}),config:e=>(0,G.jsx)(qo,{size:e}),spreadsheet:e=>(0,G.jsx)(Jo,{size:e}),presentation:e=>(0,G.jsx)(Yo,{size:e}),document:e=>(0,G.jsx)(Xo,{size:e}),app:e=>(0,G.jsx)(Io,{size:e}),gear:e=>(0,G.jsx)(ko,{size:e}),pin:e=>(0,G.jsx)(Ao,{size:e}),trash:e=>(0,G.jsx)(Po,{size:e}),overview:e=>(0,G.jsx)(Zo,{size:e}),book:e=>(0,G.jsx)(os,{size:e}),briefcase:e=>(0,G.jsx)(ss,{size:e}),cloud:e=>(0,G.jsx)(cs,{size:e}),gamepad:e=>(0,G.jsx)(ls,{size:e}),camera:e=>(0,G.jsx)(us,{size:e}),terminal:e=>(0,G.jsx)(ds,{size:e}),server:e=>(0,G.jsx)(fs,{size:e}),package:e=>(0,G.jsx)(ps,{size:e}),globe:e=>(0,G.jsx)(ms,{size:e}),heart:e=>(0,G.jsx)(hs,{size:e})};function bc(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function xc(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??gc)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||_c.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=bc(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${vc[n]??n}${Sc(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Sc(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Cc({panel:e,size:t=16}){let n=Ti(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,G.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?yc[e.icon]:void 0;if(r)return(0,G.jsx)(G.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,G.jsx)(yo,{size:t});case`recent`:return(0,G.jsx)(No,{size:t});case`frequent`:return(0,G.jsx)(as,{size:t});case`drives`:return(0,G.jsx)(xo,{size:t});case`home`:return(0,G.jsx)(vo,{size:t});default:return(0,G.jsx)(yo,{size:t})}}function wc({place:e,size:t=18}){let n=Ti(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,G.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&yc[e.icon]?(0,G.jsx)(G.Fragment,{children:yc[e.icon](t)}):(0,G.jsx)(yo,{size:t})}function Tc(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Ec({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=Kn(),[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)(`#2dd4bf`),f=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},v=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},y=Math.max(8,Math.min(e,window.innerWidth-272)),b=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,Cs.createPortal)((0,G.jsxs)(Dc,{"data-tag-menu":`true`,ref:f,style:{left:y,top:b},children:[(0,G.jsxs)(Oc,{children:[(0,G.jsx)(`span`,{children:s(`Tags`)}),(0,G.jsx)(kc,{onClick:o,title:s(`Close`),type:`button`,children:(0,G.jsx)(J,{size:11})})]}),(0,G.jsxs)(Ac,{children:[p.length===0&&(0,G.jsx)(Pc,{children:s(`No tags yet.`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,G.jsxs)(jc,{children:[(0,G.jsx)(Mc,{"aria-label":s(`Color of {tag}`,{tag:e}),onChange:t=>g(e,t.target.value),title:s(`Change this tag's color`),type:`color`,value:t}),(0,G.jsxs)(Nc,{$color:t,$ink:Tc(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,G.jsx)(Fo,{size:11}),(0,G.jsx)(`span`,{children:e})]})]},e)})]}),(0,G.jsxs)(Fc,{children:[(0,G.jsx)(Mc,{"aria-label":s(`Color of the new tag`),onChange:e=>d(e.target.value),title:s(`Color of the new tag`),type:`color`,value:u}),(0,G.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),v())},placeholder:s(`New tag`),spellCheck:!1,value:c}),(0,G.jsx)(Ic,{onClick:v,type:`button`,children:s(`Add`)})]})]}),document.body)}var Dc=U.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
`,Oc=U.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,kc=U.button`
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
`,Ac=U.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,jc=U.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Mc=U.input`
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
`,Nc=U.button`
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
`,Pc=U.span`
    font-size: 11px;
    color: var(--text-muted);
`,Fc=U.div`
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
`,Ic=U.button`
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
`,Lc={file:bo,folder:yo,text:Lo,code:Ro,image:zo,video:Bo,audio:Vo,archive:Ho,pdf:Uo,executable:Wo,font:Go,database:Ko,config:qo,spreadsheet:Jo,presentation:Yo,document:Xo},Rc={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function zc(e){let t=e.lastIndexOf(`.`);return t>0?Rc[e.slice(t).toLowerCase()]??`file`:`file`}function Bc({name:e,size:t}){let n=Lc[e??`file`]??bo;return(0,G.jsx)(n,{size:t})}function Vc({path:e,name:t,isDirectory:n,size:r=18}){let i=wi(e,n);return i?(0,G.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,G.jsx)(yo,{size:r}):(0,G.jsx)(Bc,{name:zc(t),size:r})}var Hc=`application/x-yafm-paths`;function Uc(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(Hc);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\/.test(e)),move:!0}}function Wc(e,t,n=!0){e.dataTransfer.setData(Hc,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=n?`move`:`copy`}function Gc({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let p=Kn(),[m,h]=(0,_.useState)(()=>new Set),[g,v]=(0,_.useState)(!1),y=(0,_.useRef)(null),b=(0,_.useMemo)(()=>e.filter(e=>m.has(e.path)),[e,m]),x=(0,_.useMemo)(()=>t.filter(e=>m.has(e.path)),[t,m]),S=(0,_.useRef)(null);if((0,_.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=S.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&n.types.some(e=>e.toLowerCase()===Hc)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=Uc(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let C=new Set([...e,...t].map(e=>e.path)),w=C.size>0&&[...C].every(e=>m.has(e)),T=C.size,E=e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},D=()=>{h(w?new Set:C)},ee=e=>{y.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),v(!0)},O=e=>{let t=y.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},te=e=>{y.current&&(y.current=null,v(!1),e.currentTarget.releasePointerCapture(e.pointerId))},k=()=>{let e=b.map(e=>e.path);e.length!==0&&(c(e),h(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},A=()=>{let e=b.map(e=>e.path);e.length!==0&&d(e)},ne=()=>{let e=new Map;for(let t of b)e.set(t.path,!0);for(let t of x)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),h(new Set)},re=(e,t)=>{let n=m.has(e.path);return(0,G.jsxs)(rl,{$checked:n,draggable:!0,onClick:()=>E(e.path),onDragStart:r=>{Wc(r,n&&m.size>0?[...new Set([...b,...x].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,G.jsx)(il,{$checked:n,onClick:t=>{t.stopPropagation(),E(e.path)},type:`button`,children:n&&(0,G.jsx)(Fo,{size:8})}),(0,G.jsx)(Vc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,G.jsxs)(al,{children:[(0,G.jsx)(ol,{children:e.name}),(0,G.jsx)(sl,{children:K(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},j=e=>{e.dataTransfer.types.some(e=>e.toLowerCase()===Hc)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,G.jsxs)(Kc,{$dragging:g,"data-tray":`true`,ref:S,style:{left:i.x,top:i.y},onDragEnter:j,onDragOver:j,onDrop:e=>{let{paths:t}=Uc(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,G.jsxs)(qc,{onPointerDown:ee,onPointerMove:O,onPointerUp:te,children:[(0,G.jsxs)(Jc,{children:[(0,G.jsx)(ps,{size:13}),p(`Tray`),(0,G.jsx)(Yc,{children:T})]}),(0,G.jsxs)(Xc,{onPointerDown:e=>e.stopPropagation(),children:[(0,G.jsx)(Zc,{onClick:D,title:p(w?`Select none`:`Select all`),type:`button`,children:p(w?`None`:`All`)}),(0,G.jsx)(Zc,{onClick:l,title:p(`Remove everything from the tray`),type:`button`,children:p(`Clear`)}),(0,G.jsx)(Qc,{onClick:u,title:p(`Hide the tray`),type:`button`,children:(0,G.jsx)(J,{size:10})})]})]}),(0,G.jsxs)($c,{children:[(0,G.jsxs)(tl,{children:[p(`In this app`),(0,G.jsx)(Yc,{children:e.length})]}),e.length===0&&(0,G.jsx)(el,{children:p(`Drag files or folders here`)}),e.map(e=>re(e,!0)),t.length>0&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(tl,{$clipboard:!0,children:[p(`Clipboard`),(0,G.jsx)(Yc,{children:t.length}),n&&(0,G.jsx)(nl,{children:p(`cut`)})]}),t.map(e=>re(e,n))]})]}),(0,G.jsxs)(cl,{children:[(0,G.jsx)(ll,{$plain:!0,disabled:b.length===0,onClick:A,title:p(`Write the selected tray entries to the system clipboard`),type:`button`,children:p(`To clipboard`)}),(0,G.jsx)(ll,{disabled:m.size===0||!a,onClick:ne,type:`button`,children:p(`Move here`)}),(0,G.jsx)(ll,{$danger:!0,disabled:b.length===0,onClick:k,type:`button`,children:p(`Remove`)})]})]})}var Kc=U.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${ws}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
`,qc=U.div`
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
`,Jc=U.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,Yc=U.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,Xc=U.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,Zc=U.button`
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
`,Qc=U.button`
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
`,$c=U.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,el=U.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,tl=U.div`
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
`,nl=U.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,rl=U.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 5px 6px;
    border: 1px solid ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.4)`:`transparent`};
    border-radius: var(--radius-sm);
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.1)`:`transparent`};
    cursor: grab;

    &:hover {
        background: rgba(var(--accent-rgb), 0.07);
    }

    &:active {
        cursor: grabbing;
    }
`,il=U.button`
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
`,al=U.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,ol=U.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,sl=U.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,cl=U.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,ll=U.button`
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
`,ul=60,dl=300,fl=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],pl=190,ml=120;function hl({listing:e,loading:t,error:n,find:r=Ni,view:i,showImages:a,imageStripHeight:o=pl,onImageStripHeight:s,onSort:c,onSetTags:l,onOpen:u,onOpenFile:d,showCheckboxes:f=!0,openOnSingleClick:p=!1,shortcuts:m=ci,enableShortcuts:h=!0,refreshToken:g=0,onRefresh:v,onClipboardChanged:y,onTransfer:b,onPaste:x,confirmDelete:S=!1,previewVideoAudio:C=!1,previewVideoAutoplay:w=!1,showDetails:T=!0,onPreviewInfo:E,onActivate:D,groupOf:ee,onGridScroll:O,gridFooter:te,allowBackgroundMenu:k=!0}){let A=Kn(),ne=ia(),re=(0,_.useRef)(null),j=(0,_.useRef)(null),ie=(0,_.useRef)(null),[M,ae]=(0,_.useState)(dl),[N,oe]=(0,_.useState)({top:0,height:640}),se=(0,_.useRef)(null),ce=(0,_.useRef)(null),[le,ue]=(0,_.useState)(null),[de,fe]=(0,_.useState)(o),[P,F]=(0,_.useState)(()=>new Set),pe=(0,_.useRef)(P),me=(0,_.useRef)([]);pe.current=P;let[I,L]=(0,_.useState)(null),[R,he]=(0,_.useState)(null),[z,ge]=(0,_.useState)(null),_e=(0,_.useRef)(z);_e.current=z;let ve=(0,_.useRef)(D);ve.current=D;let[ye,be]=(0,_.useState)(()=>{let e=sa(`yafm.preview.width`,320);return e>=220?e:320}),xe=(0,_.useCallback)(e=>{be(e),ca(`yafm.preview.width`,e)},[]),[Se,B]=(0,_.useState)(!1),Ce=(0,_.useRef)(0),we=(0,_.useRef)(0),[Te,Ee]=(0,_.useState)({verbs:[],safe:!0,loading:!1}),[De,Oe]=(0,_.useState)({recommended:[],other:[],loading:!1});(0,_.useEffect)(()=>{F(new Set),ge(null),L(null),Ee({verbs:[],safe:!0,loading:!1}),Oe({recommended:[],other:[],loading:!1}),Ce.current+=1,we.current+=1,ce.current=null},[e?.path]),(0,_.useEffect)(()=>{fe(o)},[o]),(0,_.useEffect)(()=>{F(new Set),ge(null),ce.current=null},[g]);let ke=e=>{se.current={y:e.clientY,height:de},e.currentTarget.setPointerCapture(e.pointerId)},Ae=e=>{let t=se.current;if(!t)return;let n=Math.max(ml,Math.round(window.innerHeight*.7));fe(Math.min(n,Math.max(ml,t.height+t.y-e.clientY)))},je=e=>{se.current&&(se.current=null,e.currentTarget.releasePointerCapture(e.pointerId),s?.(de))},Me=()=>{fe(pl),s?.(pl)},Ne=r.query.length>0,Pe=(0,_.useMemo)(()=>fl.filter(e=>i.columns?.includes(e.id)),[i.columns]),Fe=i.columns?.includes(`linkTarget`)??!1,Ie=(0,_.useMemo)(()=>`minmax(160px, 1fr) ${Pe.map(e=>`${e.width}px`).join(` `)}`.trim(),[Pe]),Le=(0,_.useMemo)(()=>e?yl(e.entries.map(t=>{let n=t.isDirectory?aa(ne,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:Ne?Pi(i,r):null,tags:e.tags[t.name]??[]}}).filter(e=>!Ne||r.mode===`dim`||e.ranges!==null),i,e,A):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,Ne,r,ne,i.sort,i.sortDescending,A]);me.current=Le;let Re=Math.max(40,i.iconSize+20),ze=Math.max(0,Math.floor(N.top/Re)-4),Be=Math.min(Le.length,ze+Math.ceil(N.height/Re)+10),Ve=(0,_.useMemo)(()=>Le.slice(ze,Be),[Le,ze,Be]);(0,_.useEffect)(()=>{let e=ie.current;if(!e||i.mode!==`list`)return;let t=()=>oe(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,_.useEffect)(()=>{oe(e=>({...e,top:0})),ie.current&&(ie.current.scrollTop=0)},[e?.path]),(0,_.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=Le.findIndex(e=>e.entry.fullPath===r.currentPath),t=ie.current;if(e<0||!t)return;let n=e*Re;(n<t.scrollTop||n+Re>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else re.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,Le,Re]);let He=(0,_.useMemo)(()=>Le.slice(0,M),[Le,M]);(0,_.useEffect)(()=>{ae(dl)},[e?.path]),(0,_.useEffect)(()=>{if(!r.currentPath)return;let e=Le.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&ae(t=>Math.max(t,e+dl))},[r.currentPath,Le]);let Ue=(0,_.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&ae(e=>Math.min(Le.length,e+dl))},[Le.length]),We=i.mode===`grid`,Ge=(0,_.useMemo)(()=>{if(!We)return[];if(!ee)return Sl(He,xl);let e=[],t=new Map;for(let n of He){let r=ee(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[He,We,ee]),Ke=(0,_.useMemo)(()=>a?Le.filter(e=>!e.entry.isDirectory&&Gi(e.entry.name)):[],[Le,a]),qe=Ke.length,Je=(0,_.useMemo)(()=>Ke.slice(0,ul),[Ke]),Ye=(0,_.useMemo)(()=>a?Sl(Je,bl):[],[Je,a]),V=(0,_.useMemo)(()=>Le.map(e=>e.entry.fullPath),[Le]),Xe=e?.path??``,Ze=(0,_.useCallback)((e,t)=>{let n=e.ctrlKey||e.metaKey;F(r=>{if(e.shiftKey&&ce.current!==null){let e=V.indexOf(ce.current),i=V.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(V[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),ce.current=t,e}return ce.current=t,new Set([t])})},[V]),Qe=(0,_.useCallback)(e=>{ce.current=e,F(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},[]),$e=(0,_.useCallback)(()=>{ce.current=null,F(new Set)},[]),et=(0,_.useCallback)(()=>{Ce.current+=1,we.current+=1,L(null)},[]),tt=(0,_.useCallback)((e,t)=>{e.isDirectory?u(e.fullPath,di(t)):d?.(e.fullPath)},[u,d]),nt=(0,_.useCallback)((e,t,n)=>{ue({entry:e,x:t,y:n})},[]),rt=(0,_.useRef)(null),it=(0,_.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;Wc(e,P.has(n)?[...P]:[n])},[P]),at=(0,_.useCallback)(e=>{if(!e.dataTransfer.types.some(e=>e.toLowerCase()===`application/x-yafm-paths`))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);rt.current=t?.dataset.directory===`true`?t.dataset.path??Xe:Xe,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[Xe]),ot=(0,_.useCallback)(e=>{let{paths:t,move:n}=Uc(e),r=rt.current??Xe;rt.current=null,t.length!==0&&b&&(e.preventDefault(),b(t,r,!e.ctrlKey&&n))},[Xe,b]),st=(0,_.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),!t&&!k)return;let n=pe.current;t&&!n.has(t)&&F(new Set([t])),t&&(ce.current=t);let r=t?n.has(t)?[...n]:[t]:[],i=t?r:Xe?[Xe]:[],a=++Ce.current,o=t?me.current.find(e=>e.entry.fullPath===t):void 0,s=o&&!o.entry.isDirectory&&r.length===1?o.entry.fullPath:null,c=++we.current;L({x:e.clientX,y:e.clientY,paths:r,background:!t}),Ee({verbs:[],safe:!0,loading:i.length>0}),s?(Oe({recommended:[],other:[],loading:!0}),Qr(s).then(e=>{we.current===c&&Oe({...e,loading:!1})},()=>{we.current===c&&Oe({recommended:[],other:[],loading:!1})})):Oe({recommended:[],other:[],loading:!1}),Br().then(B,()=>B(!1)),i.length!==0&&ri(i).then(e=>{Ce.current===a&&Ee({...e,loading:!1})},()=>{Ce.current===a&&Ee({verbs:[],safe:!0,loading:!1})})},[k,Xe]),ct=(0,_.useCallback)(()=>v?.(),[v]),lt=async(e,t=!1)=>{await zr(e,t)&&(B(!0),y?.())},ut=async e=>{e&&(await Wr(e)?(ct(),x?.()):window.alert(A(`Nothing on the clipboard could be pasted here.`)))},dt=async()=>{if(!Xe)return;let e=await qr(Xe);e.ok?ct():window.alert(e.error??A(`Could not create the folder.`))},ft=e=>{F(new Set([e.fullPath])),ce.current=e.fullPath,ge({path:e.fullPath,value:e.name})},pt=(0,_.useCallback)(e=>ge(t=>t&&{...t,value:e}),[]),mt=(0,_.useCallback)(()=>ge(null),[]),ht=(0,_.useCallback)(async()=>{let e=_e.current;if(ge(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=me.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await Kr(e.path,t);r.ok?($e(),ct()):window.alert(r.error??A(`Could not rename the entry.`))},[$e,ct,A]),gt=async(e,t=!1)=>{(!t&&!S||await _t(e,t))&&(await Gr(e,t)?($e(),ct()):window.alert(A(t?`The shell could not delete the selection.`:`The shell could not move the selection to the recycle bin.`)))},_t=(0,_.useCallback)((e,t)=>new Promise(n=>he({paths:e,permanent:t,resolve:n})),[]),vt=(0,_.useCallback)(e=>{he(t=>(t?.resolve(e),null))},[]),yt=async e=>{let t=await ai(e);t.ok?ct():window.alert(t.error??A(`Could not create the ZIP file.`))},bt=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}};(0,_.useEffect)(()=>{if(!h||I)return;let e=e=>{if(hi(e.target))return;ve.current?.();let t=fi(e),n=[...P],r=n.length===1?Le.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(V.length===0)return;e.preventDefault();let n=ce.current&&V.includes(ce.current)?ce.current:P.size===1?[...P][0]:null,r=n?V.indexOf(n):-1,i=t===`home`?0:t===`end`?V.length-1:Math.max(0,Math.min(V.length-1,r+(t===`arrowdown`?1:-1))),a=V[i];F(new Set([a])),ce.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===m.copy?i(()=>{n.length>0&&lt(n)}):t===m.cut?i(()=>{n.length>0&&lt(n,!0)}):t===m.paste?i(()=>void ut(Xe)):t===m.delete?i(()=>{n.length>0&&gt(n)}):t===m.deletePermanently?i(()=>{n.length>0&&gt(n,!0)}):t===m.selectAll?i(()=>{F(new Set(V)),ce.current=V[0]??null}):t===m.invertSelection?i(()=>{F(new Set(V.filter(e=>!P.has(e)))),ce.current=V[0]??null}):t===m.rename&&r?i(()=>void ft(r)):t===m.open&&r?i(()=>{r.isDirectory?u(r.fullPath):d?.(r.fullPath)}):t===m.newFolder||t===`f10`?i(()=>void dt()):t===m.terminal?i(()=>void Zr(Xe)):t===m.properties?i(()=>void Yr(n.length>0?n:Xe?[Xe]:[])):t===m.refresh&&i(ct)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[V,lt,dt,Xe,h,I,u,d,ut,ct,gt,ft,Le,P,m]);let xt=[],St=[],Ct=I?.paths[0],wt=Ct?Le.find(e=>e.entry.fullPath===Ct)?.entry:void 0,Tt=I?.paths.length===1,Et=I?.background?Xe?[Xe]:[]:I?.paths??[];if(I?.background)xt.push({label:A(`Open in Terminal`),icon:(0,G.jsx)(ds,{size:14}),onSelect:()=>void Zr(Xe)}),xt.push({label:A(`Show in Explorer`),icon:(0,G.jsx)(yo,{size:14}),separatorBefore:!0,onSelect:()=>void ni(Xe)}),St.push({label:A(`New folder`),icon:(0,G.jsx)(To,{size:16}),shortcut:pi(m.newFolder),onSelect:()=>void dt()},{label:A(`Paste`),icon:(0,G.jsx)(vs,{size:16}),disabled:!Se,shortcut:pi(m.paste),onSelect:()=>void ut(Xe)},{label:A(`Refresh`),icon:(0,G.jsx)(wo,{size:16}),shortcut:pi(m.refresh),onSelect:ct},{label:A(`Properties`),icon:(0,G.jsx)(ko,{size:16}),shortcut:pi(m.properties),onSelect:()=>void Yr([Xe])});else if(I){if(xt.push({label:A(`Open`),icon:(0,G.jsx)(Do,{size:14}),onSelect:()=>{wt&&(wt.isDirectory?u(wt.fullPath):d?.(wt.fullPath))}}),wt?.isDirectory&&(xt.push({label:A(`Open in new tab`),icon:(0,G.jsx)(To,{size:14}),onSelect:()=>u(wt.fullPath,!0)}),xt.push({label:A(`Paste into folder`),icon:(0,G.jsx)(vs,{size:14}),disabled:!Se,onSelect:()=>void ut(wt.fullPath)}),xt.push({label:A(`Open in Terminal`),icon:(0,G.jsx)(ds,{size:14}),onSelect:()=>void Zr(wt.fullPath)})),Tt&&wt&&!wt.isDirectory){let e=[];De.loading?e.push({label:A(`Loading apps…`),loading:!0,disabled:!0,onSelect:()=>void 0}):(De.recommended.forEach(t=>{e.push({label:t.name,group:A(`Suggested apps`),icon:t.icon?(0,G.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,G.jsx)(Wo,{size:14}),onSelect:()=>void $r(wt.fullPath,t.path).then(e=>{e||Xr(wt.fullPath)})})}),De.other.forEach(t=>{e.push({label:t.name,group:A(`Other apps`),icon:t.icon?(0,G.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,G.jsx)(Wo,{size:14}),onSelect:()=>void $r(wt.fullPath,t.path).then(e=>{e||Xr(wt.fullPath)})})})),e.push({label:A(`Choose another app…`),icon:(0,G.jsx)(Wo,{size:14}),separatorBefore:!0,onSelect:()=>void Xr(wt.fullPath)}),xt.push({label:A(`Open with`),icon:(0,G.jsx)(Wo,{size:14}),children:e,onSelect:()=>void Xr(wt.fullPath)})}xt.push({label:A(`Compress to ZIP`),icon:(0,G.jsx)(Ho,{size:14}),separatorBefore:!0,onSelect:()=>void yt(I.paths)}),xt.push({label:A(`Copy as path`),icon:(0,G.jsx)(gs,{size:14}),onSelect:()=>void bt(I.paths)}),xt.push({label:A(`Show in Explorer`),icon:(0,G.jsx)(yo,{size:14}),separatorBefore:!0,onSelect:()=>void ni(I.paths[0])}),St.push({label:A(`Cut`),icon:(0,G.jsx)(_s,{size:16}),shortcut:pi(m.cut),onSelect:()=>void lt(I.paths,!0)},{label:A(`Copy`),icon:(0,G.jsx)(gs,{size:16}),shortcut:pi(m.copy),onSelect:()=>void lt(I.paths,!1)}),Tt&&wt&&St.push({label:A(`Rename`),icon:(0,G.jsx)(Qo,{size:16}),shortcut:pi(m.rename),onSelect:()=>void ft(wt)}),St.push({label:A(`Delete`),icon:(0,G.jsx)(Po,{size:16}),danger:!0,shortcut:pi(m.delete),onSelect:()=>void gt(I.paths)},{label:A(`Properties`),icon:(0,G.jsx)(ko,{size:16}),shortcut:pi(m.properties),onSelect:()=>void Yr(I.paths)})}if(I){if(Te.loading)xt.push({label:A(`More actions`),icon:(0,G.jsx)(Wo,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(Te.verbs.length>0){let e={items:[],children:new Map};for(let t of Te.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,G.jsx)(gl,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void ii(Et,Te.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];xt.push({label:Te.safe?`More actions`:`More actions (extensions)`,icon:(0,G.jsx)(Wo,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}}let Dt=R&&(0,G.jsx)(Ls,{confirmLabel:R.permanent?A(`Delete`):A(`Move`),danger:R.permanent,message:R.permanent?A(`Permanently delete {target}? This cannot be undone.`,{target:R.paths.length===1?A(`this item`):A(`{count} items`,{count:R.paths.length})}):A(`Move {target} to the recycle bin?`,{target:R.paths.length===1?A(`this item`):A(`{count} items`,{count:R.paths.length})}),onCancel:()=>vt(!1),onConfirm:()=>vt(!0),open:!0,title:R.permanent?A(`Delete permanently`):A(`Move to the recycle bin`)}),H=(0,_.useMemo)(()=>{if(!e||P.size===0)return null;let t=V.find(e=>P.has(e));return t?Le.find(e=>e.entry.fullPath===t)?.entry??null:null},[V,e,Le,P]),Ot=(0,_.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:Qi(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:A(`Type`),value:A(`Folder`)},{label:A(`Location`),value:e.parent??`—`},{label:A(`Path`),value:e.path},{label:A(`Size`),value:Ji(t)},{label:A(`Items`),value:qi(A,n,`1 item`,`{count} items`)},{label:A(`Modified`),value:`—`},{label:A(`Created`),value:`—`},{label:A(`Attributes`),value:`—`}]}},[e,A]),kt=(0,_.useMemo)(()=>{if(!H||!e)return null;let t=H.isDirectory?e.folderSizes[H.name]:void 0,n=e.tags[H.name]??[],r=H.name.lastIndexOf(`.`),i=r>0&&r<H.name.length-1?H.name.slice(r+1).toUpperCase():`—`;return{name:H.name,path:H.fullPath,isDirectory:H.isDirectory,size:H.size,modified:H.modified,created:H.created,fields:[{label:A(`Type`),value:Tl(H,A)},{label:A(`Extension`),value:H.isDirectory?`—`:i},{label:A(`Location`),value:e.path},{label:A(`Full path`),value:H.fullPath},{label:A(`Size`),value:H.isDirectory?t===void 0?`—`:Ji(t):Ji(H.size)},...H.isDirectory?[{label:A(`Items`),value:`${e.counts[H.name]??`—`}`}]:[],{label:A(`Modified`),value:Xi(H.modified)},{label:A(`Created`),value:Xi(H.created)},{label:A(`Link status`),value:H.linkTarget==null?H.linkCount>1?A(`Hard link`):`—`:H.linkValid?`OK`:A(`Broken`)},...H.linkTarget?[{label:A(`Target`),value:H.linkTarget}]:[],...H.linkCount>1?[{label:A(`Links`),value:String(H.linkCount)}]:[],{label:A(`Attributes`),value:[H.isHidden?A(`Hidden`):``,H.isSystem?A(`System`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:A(`Tags`),value:n.join(`, `)}]:[]]}},[e,H,A])??Ot,At=(0,_.useRef)(E);At.current=E,(0,_.useEffect)(()=>{At.current?.(kt)},[E,kt]);let jt=T&&kt&&(0,G.jsx)(Js,{info:kt,onWidth:xe,selectionNote:P.size>1?qi(A,P.size,`1 item selected`,`{count} items selected`):void 0,videoAudio:C,videoAutoplay:w,width:ye});return n&&!e?(0,G.jsx)(xu,{children:(0,G.jsx)(Cu,{children:n})}):!e&&!t?(0,G.jsx)(xu,{children:(0,G.jsx)(Su,{children:A(`Nothing selected.`)})}):i.mode===`grid`?(0,G.jsxs)(zl,{onPointerDown:D,children:[(0,G.jsxs)(Bl,{children:[(0,G.jsxs)(Jl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||$e()},onContextMenu:e=>st(e),onDragOver:at,onDragStart:it,onDrop:ot,onScroll:e=>{O?.(e.currentTarget),Ue(e.currentTarget)},children:[t&&!e?(0,G.jsx)($l,{$size:i.gridSize,children:(0,G.jsx)(jl,{size:i.gridSize})}):(0,G.jsx)(Nl,{counts:e?.counts,currentPath:Ne?r.currentPath:null,groups:Ge,gridSize:i.gridSize,innerRef:re,onContextMenu:st,onOpen:u,onOpenFile:d,onRenameCancel:mt,onRenameChange:pt,onRenameCommit:ht,onSelect:Ze,onToggle:Qe,openOnSingleClick:p,renaming:z,searching:Ne,selected:P,showCheckboxes:f,showTarget:Fe}),!t&&e&&Le.length===0&&(0,G.jsx)(bu,{children:(0,G.jsx)(Su,{children:n??(Ne&&r.mode===`hide`?A(`No entries match the search.`):A(`This folder is empty.`))})}),te]}),I&&(0,G.jsx)(Ts,{items:xt,onClose:et,quick:St,x:I.x,y:I.y}),Dt]}),jt]}):(0,G.jsxs)(zl,{onPointerDown:D,children:[(0,G.jsxs)(Bl,{children:[(0,G.jsxs)(Vl,{onScroll:e=>{ie.current&&ie.current.scrollLeft!==e.currentTarget.scrollLeft&&(ie.current.scrollLeft=e.currentTarget.scrollLeft)},ref:j,style:{gridTemplateColumns:Ie},children:[(0,G.jsxs)(Hl,{onClick:()=>c(`name`),type:`button`,children:[A(`Name`),_l(i,`name`)]}),Pe.map(e=>(0,G.jsxs)(Hl,{onClick:()=>c(e.id),type:`button`,children:[A(e.label),_l(i,e.id)]},e.id))]}),(0,G.jsxs)(Ul,{onClick:e=>{e.target===e.currentTarget&&$e()},onContextMenu:e=>st(e),onDragOver:at,onDragStart:it,onDrop:ot,onScroll:e=>{j.current&&j.current.scrollLeft!==e.currentTarget.scrollLeft&&(j.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;oe(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:ie,children:[t&&!e?(0,G.jsx)(Al,{template:Ie,columns:Pe.length}):(0,G.jsxs)(G.Fragment,{children:[ze>0&&(0,G.jsx)(`div`,{style:{height:ze*Re}}),Ve.map(t=>{let n=t.entry.fullPath;return(0,G.jsx)(Fl,{current:Ne&&n===r.currentPath,dim:Ne&&t.ranges===null,height:Re,iconSize:i.iconSize,innerRef:re,listing:e,onContextMenu:st,onOpen:tt,onRenameCancel:mt,onRenameChange:pt,onRenameCommit:ht,onSelect:Ze,onTagEdit:nt,onToggle:Qe,openOnSingleClick:p,renaming:z?.path===n?{value:z.value}:null,row:t,selected:P.has(n),showCheckboxes:f,showTarget:Fe,template:Ie,visible:Pe},n)}),Be<Le.length&&(0,G.jsx)(`div`,{style:{height:(Le.length-Be)*Re}})]}),!t&&e&&Le.length===0&&(0,G.jsx)(xu,{children:(0,G.jsx)(Su,{children:n??(Ne&&r.mode===`hide`?A(`No entries match the search.`):A(`This folder is empty.`))})})]}),a&&Ke.length>0&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Wl,{onDoubleClick:Me,onPointerDown:ke,onPointerMove:Ae,onPointerUp:je,title:A(`Drag to resize; double-click to reset`)}),(0,G.jsxs)(Gl,{style:{height:de},children:[(0,G.jsxs)(Kl,{children:[A(`Preview`),(0,G.jsx)(ql,{children:qe>ul?`${Je.length} / ${qe}`:qe})]}),(0,G.jsx)(Jl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||$e()},onContextMenu:e=>st(e),children:(0,G.jsx)(Nl,{counts:e?.counts,currentPath:Ne?r.currentPath:null,groups:Ye,gridSize:i.gridSize,onContextMenu:st,onOpen:u,onOpenFile:d,onSelect:Ze,onToggle:Qe,openOnSingleClick:p,searching:Ne,selected:P,showCheckboxes:f,showTarget:Fe})})]})]}),le&&e&&(0,G.jsx)(Ec,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>l?.(le.entry.name,e,t),onClose:()=>ue(null),tags:e.tags[le.entry.name]??[],x:le.x,y:le.y}),I&&(0,G.jsx)(Ts,{items:xt,onClose:et,quick:St,x:I.x,y:I.y}),Dt]}),jt]})}function gl({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,G.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,G.jsx)(Do,{size:14});case`document`:return(0,G.jsx)(Xo,{size:14});case`cut`:return(0,G.jsx)(_s,{size:14});case`copy`:return(0,G.jsx)(gs,{size:14});case`paste`:return(0,G.jsx)(vs,{size:14});case`trash`:return(0,G.jsx)(Po,{size:14});case`pencil`:return(0,G.jsx)(Qo,{size:14});case`gear`:return(0,G.jsx)(ko,{size:14});case`star`:return(0,G.jsx)(as,{size:14});case`pin`:return(0,G.jsx)(Ao,{size:14});case`executable`:return(0,G.jsx)(Wo,{size:14});case`share`:return(0,G.jsx)(ys,{size:14});case`arrow`:return(0,G.jsx)(Do,{size:14});default:return(0,G.jsx)(Io,{size:14})}}function _l(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var vl=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function yl(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Tl(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:vl.compare(String(r),String(i));return t.sortDescending?-o:o})}var bl=Hi.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Wi(t.entry.name)===e})),xl=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...bl.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function Sl(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function Cl(e){return Math.max(24,Math.min(e-56,160))}var wl={file:`file`,folder:`folder`,text:`text file`,code:`source file`,image:`image`,video:`video`,audio:`audio`,archive:`archive`,pdf:`PDF`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Tl(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`Shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`Internet shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`Folder link`):t(`Symbolic link`);if(e.isDirectory)return t(`Folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(wl[zc(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`File`)}function El(e,t,n,r){switch(e){case`type`:return Tl(t,r);case`size`:return Ol(t,n.folderSizes);case`modified`:return Xi(t.modified);case`created`:return Xi(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:r(`Broken`);default:return``}}function Dl({name:e,ranges:t}){if(!t||t.length===0)return(0,G.jsx)(G.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,G.jsx)(yu,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,G.jsx)(G.Fragment,{children:n})}function Ol(e,t){if(!e.isDirectory)return Ji(e.size);let n=t[e.name];return n===void 0?`—`:Ji(n)}function kl({entry:e,size:t=18}){let n=(0,_.useRef)(null),[r,i]=(0,_.useState)(!1);(0,_.useEffect)(()=>{if(r)return;let e=n.current;if(!e)return;if(!(`IntersectionObserver`in window)){i(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(i(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[r]);let a=wi(r?e.fullPath:null,e.isDirectory,t>32),o=Ti(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,G.jsx)(Il,{$size:t,ref:n,children:e.iconSource?.startsWith(`icon:`)?(0,G.jsx)(Bc,{name:e.iconSource.slice(5),size:t}):o?(0,G.jsx)(`img`,{alt:``,height:t,src:o,width:t}):a?(0,G.jsx)(`img`,{alt:``,height:t,src:a,width:t}):e.isDirectory?(0,G.jsx)(yo,{size:t}):(0,G.jsx)(Bc,{name:zc(e.name),size:t})})}function Al({template:e,columns:t}){return(0,G.jsx)(G.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,G.jsxs)(eu,{style:{gridTemplateColumns:e},children:[(0,G.jsxs)(ru,{children:[(0,G.jsx)(tu,{style:{flexShrink:0,height:18,width:18}}),(0,G.jsx)(tu,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,G.jsx)(tu,{style:{width:t%2==0?44:92}},t))]},r))})}function jl({size:e}){return(0,G.jsx)(G.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,G.jsxs)(fu,{$dim:!1,$current:!1,$selected:!1,children:[(0,G.jsx)(pu,{children:(0,G.jsx)(tu,{style:{height:e,width:e}})}),(0,G.jsx)(hu,{children:(0,G.jsx)(tu,{style:{height:9,width:`${t}%`}})})]},n))})}var Ml=(0,_.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:d,onRenameCommit:f,onRenameCancel:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:v,onOpenFile:y}){let b=Kn(),x=ia(),S=!e.entry.isDirectory&&Gi(e.entry.name),C=(0,_.useRef)(null),[w,T]=(0,_.useState)(!1);(0,_.useEffect)(()=>{if(!S||w)return;let e=C.current;if(!e)return;if(!(`IntersectionObserver`in window)){T(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(T(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,w]);let E=ki(S&&w?e.entry.fullPath:null,192,e.entry.modified),[D,ee]=(0,_.useState)(!1),O=e.entry.fullPath,te=t=>{e.entry.isDirectory?v(O,di(t)):y?.(O)};return(0,G.jsxs)(fu,{$current:t,$dim:n,$selected:s,onClick:e=>{m(e,O),l&&te(e)},onContextMenu:e=>g(e,O),onDoubleClick:e=>{l||te(e)},ref:e=>{C.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":O,draggable:!u,children:[c&&(0,G.jsx)(Rl,{$checked:s,onClick:e=>{e.stopPropagation(),h(O)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`Deselect`:`Select`),type:`button`,children:s&&(0,G.jsx)(Fo,{size:10})}),(0,G.jsx)(pu,{children:S&&E&&!D?(0,G.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>ee(!0),src:E}):(0,G.jsx)(mu,{children:e.place&&x.useIcons?(0,G.jsx)(wc,{place:e.place,size:r}):(0,G.jsx)(kl,{entry:e.entry,size:r})})}),(0,G.jsxs)(hu,{children:[u?(0,G.jsx)(Pl,{onCancel:()=>p?.(),onChange:e=>d?.(e),onCommit:()=>f?.(),value:u.value}):(0,G.jsx)(gu,{$broken:e.entry.linkValid===!1,children:(0,G.jsx)(Dl,{name:e.label,ranges:e.ranges})}),(0,G.jsx)(_u,{children:e.entry.isDirectory?i===void 0?Tl(e.entry,b):b(`{type} · {count} items`,{type:Tl(e.entry,b),count:i}):b(`{type} · {size}`,{type:Tl(e.entry,b),size:Ji(e.entry.size)})}),a&&e.entry.linkTarget&&(0,G.jsxs)(vu,{title:e.entry.linkTarget,children:[`→ `,e.entry.linkTarget]})]})]})});function Nl({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:p,onOpen:m,onOpenFile:h,onRenameChange:g,onRenameCommit:_,onRenameCancel:v}){let y=Kn();return(0,G.jsx)(G.Fragment,{children:e.map(e=>(0,G.jsxs)(Yl,{children:[(0,G.jsxs)(Xl,{children:[y(e.label),(0,G.jsx)(Zl,{children:e.rows.length}),(0,G.jsx)(Ql,{})]}),(0,G.jsx)($l,{$size:t,children:e.rows.map(e=>(0,G.jsx)(Ml,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:Cl(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:p,onOpen:m,onOpenFile:h,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:v,onRenameChange:g,onRenameCommit:_,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function Pl({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,_.useRef)(null);return(0,_.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,G.jsx)(au,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var Fl=(0,_.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:_,onTagEdit:v,onRenameChange:y,onRenameCommit:b,onRenameCancel:x}){let S=Kn(),C=ia(),w=e.entry.fullPath;return(0,G.jsxs)(nu,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{m(t,w),o&&_(e.entry,t)},onContextMenu:e=>g(e,w),onDoubleClick:t=>{o||_(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":w,draggable:!p,children:[(0,G.jsxs)(ru,{children:[i&&(0,G.jsx)(Ll,{$checked:r,onClick:e=>{e.stopPropagation(),h(w)},onDoubleClick:e=>e.stopPropagation(),title:S(r?`Deselect`:`Select`),type:`button`,children:r&&(0,G.jsx)(Fo,{size:10})}),e.place&&C.useIcons?(0,G.jsx)(Il,{children:(0,G.jsx)(wc,{place:e.place,size:s})}):(0,G.jsx)(kl,{entry:e.entry,size:s}),p?(0,G.jsx)(Pl,{onCancel:x,onChange:y,onCommit:b,value:p.value}):(0,G.jsx)(iu,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,G.jsx)(Dl,{name:e.label,ranges:e.ranges})}),a&&e.entry.linkTarget&&(0,G.jsxs)(ou,{title:e.entry.linkTarget,children:[`→ `,e.entry.linkTarget]})]}),u.map(t=>(0,G.jsx)(su,{children:t.id===`tags`?(0,G.jsx)(cu,{onClick:t=>{t.stopPropagation(),v(e.entry,t.clientX,t.clientY)},title:S(`Edit tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,G.jsx)(lu,{$color:t,$ink:Tc(t),children:e},e)}):(0,G.jsx)(uu,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,G.jsx)(du,{children:S(`Broken`)}):El(t.id,e.entry,d,S)},t.id))]})}),Il=U.span`
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
`,Ll=U.button`
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
`,Rl=U(Ll)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
`,zl=U.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Bl=U.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
`,Vl=U.div`
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
`,Hl=U.button`
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
`,Ul=U.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,Wl=U.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,Gl=U.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: var(--bg-secondary);
`,Kl=U.div`
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
`,ql=U.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,Jl=U.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,Yl=U.section`
    & + & {
        margin-top: 22px;
    }
`,Xl=U.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Zl=U.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Ql=U.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,$l=U.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,eu=U.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,tu=U.span`
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
`,nu=U.div`
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
`,ru=U.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,iu=U.span`
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,au=U.input`
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
`,ou=U.span`
    overflow: hidden;
    min-width: 0;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent-primary);
    text-overflow: ellipsis;
    white-space: nowrap;
`,su=U.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,cu=U.button`
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
`,lu=U.span`
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
`,uu=U.span`
    color: var(--text-muted);
    font-size: 11px;
`,du=U.span`
    color: #fca5a5;
`,fu=U.div`
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
    transition: background 120ms ease, border-color 120ms ease, opacity 120ms ease;

    &:hover {
        background: var(--bg-card-hover);
        border-color: var(--border-color-hover);
    }
`,pu=U.div`
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
`,mu=U.span`
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
`,hu=U.div`
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
`,gu=U.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,_u=U.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,vu=U.span`
    width: 100%;
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--accent-primary);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,yu=U.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,bu=U.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,xu=U.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,Su=U.p`
    font-size: 13px;
    color: var(--text-muted);
`,Cu=U.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`;function wu({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,onQuery:s,onPrevious:c,onNext:l,onMatchCase:u,onRegex:d,onMode:f,onClose:p}){let m=Kn(),h=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=h.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let g=e=>{e(),h.current?.focus()};return(0,G.jsxs)(Tu,{children:[(0,G.jsx)(So,{}),(0,G.jsx)(Eu,{"aria-label":m(`Search this folder`),onChange:e=>s(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?c():l()),e.key===`Escape`&&(e.preventDefault(),p())},placeholder:m(`Search this folder`),ref:h,spellCheck:!1,value:e}),(0,G.jsx)(Du,{children:i===0?`0/0`:`${a+1}/${i}`}),(0,G.jsx)(Ou,{onClick:()=>g(c),title:m(`Previous match (Shift+Enter)`),type:`button`,children:(0,G.jsx)(Oo,{size:12})}),(0,G.jsx)(Ou,{$down:!0,onClick:()=>g(l),title:m(`Next match (Enter)`),type:`button`,children:(0,G.jsx)(Oo,{size:12})}),(0,G.jsx)(ku,{$on:n,onClick:()=>g(u),title:m(`Match case`),type:`button`,children:`Aa`}),(0,G.jsx)(ku,{$on:r,onClick:()=>g(d),title:m(`Regular expression`),type:`button`,children:`.*`}),(0,G.jsx)(Au,{$on:t===`hide`,onClick:()=>g(f),title:m(t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`),type:`button`,children:m(t===`hide`?`Hide`:`Dim`)}),(0,G.jsx)(Ou,{onClick:p,title:m(`Close search (Esc)`),type:`button`,children:(0,G.jsx)(J,{size:12})})]})}var Tu=U.div`
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
    color: var(--text-muted);
`,Eu=U.input`
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
`,Du=U.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Ou=U.button`
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
`,ku=U.button`
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
`,Au=U(ku)`
    min-width: 34px;
    font-family: var(--font-sans);
    font-size: 10px;
`;function ju({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=Kn(),a=(0,_.useRef)(null),o=(0,_.useRef)(null),[s,c]=(0,_.useState)(null);return(0,_.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,_.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,_.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,Cs.createPortal)((0,G.jsxs)(Mu,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(yc).map(n=>(0,G.jsx)(Nu,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:yc[n](16)},n)),(0,G.jsx)(Nu,{onClick:async()=>{let e=await jr();e&&t(`file:${e}`)},title:i(`Choose an image`),type:`button`,children:(0,G.jsx)(To,{size:13})}),r&&(0,G.jsx)(Nu,{$active:!e,onClick:()=>t(null),title:i(`Default`),type:`button`,children:(0,G.jsx)(J,{size:12})})]}),document.body)]})}var Mu=U.div`
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
`,Nu=U.button`
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
`,Pu=U.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 14px 26px 34px;
`,Fu=U.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    flex-wrap: wrap;
    padding-bottom: 14px;
`,Iu=U.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,Lu=U.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,Ru=U.button`
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
`,zu=U.div`
    position: relative;
    display: inline-flex;
`,Bu=U.div`
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
`,Vu=U.button`
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
`,Hu=U.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,Uu=U.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
`,Wu=U.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Gu=U.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,Ku=U.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,qu=U.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,Ju=U.input`
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
`,Yu=U.button`
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
`,Xu=U.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,Zu=U.div`
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 11px 13px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    color: var(--text-primary);
    font: inherit;
    text-align: left;
    cursor: ${({$plain:e})=>e?`default`:`pointer`};

    &:hover {
        border-color: ${({$plain:e})=>e?`var(--border-color)`:`var(--border-color-hover)`};
        background: ${({$plain:e})=>e?`var(--bg-card)`:`var(--bg-card-hover)`};
    }
`,Qu=U.span`
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
`,Y=U.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,X=U.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,$u=U.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,ed=U.button`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 7px 10px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
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
`,td=U.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,nd=U.button`
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
`,rd=U.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,id=U.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,ad=U.div`
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
`,od=U.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,sd=U.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,cd=U.button`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 7px 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-card);
    color: var(--text-secondary);
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
`,ld=U.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,ud=U.button`
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
`,dd=U.button`
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
`,fd=U.button`
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
`,pd=U.span`
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
`,md=U.button`
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
`,hd=U.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,gd=U.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`;function _d({places:e,drives:t,recent:n,recentLimit:r,homePath:i,historyVersion:a,onOpen:o,onPlacesChanged:s,onRecentCleared:c,onLayoutChanged:l,onHistoryChanged:u,onDrivesChanged:d,visibilityVersion:f=0}){let p=Kn(),m=ia(),[h,g]=(0,_.useState)(!1),[v,y]=(0,_.useState)(null),[b,x]=(0,_.useState)(null),[S,C]=(0,_.useState)(!1),[w,T]=(0,_.useState)(null),[E,D]=(0,_.useState)(null),[ee,O]=(0,_.useState)(null);(0,_.useEffect)(()=>{Dr().then(y,()=>y(null))},[]),(0,_.useEffect)(()=>{if(!b)return;let e=()=>x(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||x(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[b]),(0,_.useEffect)(()=>{if(!S)return;let e=()=>C(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[S]);let te=xc(v),k=te.map(e=>e.id),A=e=>b?.kind===`panel`&&b.id===e,ne=e=>b?.kind===`place`&&b.id===e;(0,_.useEffect)(()=>{if(!W.available)return;let e=te.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??i).filter(e=>e.length>0);W.send({type:`fs.watch`,payload:{paths:e}})},[te.map(e=>e.path??e.id).join(`|`),i]);let re=async(e,t)=>{let n={...v?.placeIcons};t?n[e]=t:delete n[e],x(null),await N({placeIcons:n}),s(await lr())},j=async(e,t)=>{let n={...v?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],D(null),await N({placeNames:n}),s(await lr())},ie=e=>{O(null),T({drive:e,label:e.label||`Local Disk`})},M=async()=>{if(!w)return;let{drive:e,label:t}=w;T(null);let n=await nr(e.name,t.trim());n.ok?(O(null),d?.()):O(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},ae=v?.overviewColumns??1,N=async e=>{if(!v)return;let t={...v,...e,overviewPanels:e.overviewPanels??k,overviewHidden:[]};y(await Or(t)),l?.()},oe=(e,t)=>{let n=k.indexOf(e),r=n+t;if(n<0||r<0||r>=k.length)return;let i=[...k];[i[n],i[r]]=[i[r],i[n]],N({overviewPanels:i})},se=(e,t)=>{let n={...v?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],N({overviewTitles:n})},ce=(e,t)=>void N({overviewViews:{...v?.overviewViews,[e]:t}}),le=e=>{let t=v?.overviewPinned??te.filter(e=>e.pinned).map(e=>e.id);N({overviewPinned:te.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},ue=e=>{x(null);let t=t=>{let n={...t};return delete n[e],n},n=v?.overviewPinned??te.filter(e=>e.pinned).map(e=>e.id);N({overviewPanels:k.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(v?.overviewTitles),overviewViews:t(v?.overviewViews),overviewIcons:t(v?.overviewIcons),panelPlaces:t(v?.panelPlaces)})},de=(e,t)=>{let n={...v?.overviewIcons};t?n[e]=t:delete n[e],x(null),N({overviewIcons:n})},fe=async e=>{if(!v)return;if(e===`folder`){let e=await Mr();if(!e)return;let t=`folder:${e}`;k.includes(t)||await N({overviewPanels:[...k,t]});return}if(e===`quick`){let e=2;for(;k.includes(`quick:${e}`);)e+=1;await N({overviewPanels:[...k,`quick:${e}`]});return}let t=e;for(let n=2;k.includes(t);n+=1)t=`${e}:${n}`;await N({overviewPanels:[...k,t]})},P=async t=>{let n=await Mr();if(!n)return;if(t.id===`quick`){await N({quickAccess:[...new Set([...e.map(e=>e.path),n])]}),s(await lr());return}let r=t.places??[];r.some(e=>yd(e,n))||await N({panelPlaces:{...v?.panelPlaces,[t.id]:[...r,n]}})},F=async(t,n)=>{x(null),t.id===`quick`?(await N({quickAccess:e.filter(e=>!yd(e.path,n)).map(e=>e.path)}),s(await lr())):await N({panelPlaces:{...v?.panelPlaces,[t.id]:(t.places??[]).filter(e=>!yd(e,n))}})},pe=async(t,n,r)=>{if(yd(n,r))return;let i=t.id===`quick`?e.map(e=>e.path):t.places??[],a=i.findIndex(e=>yd(e,n)),o=i.findIndex(e=>yd(e,r));if(a<0||o<0)return;let c=[...i],[l]=c.splice(a,1);c.splice(o,0,l),t.id===`quick`?(await N({quickAccess:c}),s(await lr())):await N({panelPlaces:{...v?.panelPlaces,[t.id]:c}})},me=(e,t)=>({draggable:h,onDragOver:e=>{h&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{h&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{h&&(n.preventDefault(),pe(e,n.dataTransfer.getData(`text/plain`),t))}}),I=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>yd(e.path,t));return{name:v?.placeNames?.[t]??n?.name??(Qi(t)||t),path:t,kind:`folder`,icon:n?.icon??v?.placeIcons?.[t]??null}}),L=e=>{if(n.length===0)return(0,G.jsx)(gd,{children:p(`Files and folders you open show up here.`)});let t=n.slice(0,r);return e.view===`grid`?(0,G.jsx)(Xu,{children:t.map(e=>{let t=aa(m,e.path);return(0,G.jsxs)(Zu,{$plain:!1,onClick:t=>e.isDirectory?o(e.path,di(t)):void rr(e.path),title:e.path,children:[(0,G.jsx)(Qu,{children:t&&m.useIcons?(0,G.jsx)(wc,{place:t,size:18}):(0,G.jsx)(Vc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,G.jsxs)(Y,{children:[(0,G.jsx)(`strong`,{children:t?.name||e.name}),(0,G.jsx)(X,{children:e.path})]})]},e.path)})}):(0,G.jsx)($u,{children:t.map(e=>{let t=aa(m,e.path);return(0,G.jsxs)(ed,{onClick:t=>e.isDirectory?o(e.path,di(t)):void rr(e.path),title:e.path,type:`button`,children:[t&&m.useIcons?(0,G.jsx)(wc,{place:t,size:15}):(0,G.jsx)(Vc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,G.jsxs)(td,{children:[(0,G.jsx)(`strong`,{children:t?.name||e.name}),(0,G.jsx)(X,{children:e.path})]})]},e.path)})})},R=e=>{if(t.length===0)return(0,G.jsx)(gd,{children:p(`No drives are available.`)});let n=t.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=w?.drive.name===t.name,i=r?(0,G.jsx)(vd,{maxLength:32,onCancel:()=>T(null),onChange:e=>T({...w,label:e}),onCommit:()=>void M(),value:w?.label??``}):(0,G.jsx)(G.Fragment,{children:ta(t)}),a=!r&&h&&(0,G.jsx)(fd,{onClick:e=>{e.stopPropagation(),ie(t)},title:p(`Rename volume`),type:`button`,children:(0,G.jsx)(Qo,{size:11})}),s=(0,G.jsx)(X,{children:p(`{free} free of {total}`,{free:Ji(t.freeSpace),total:Ji(t.totalSize)})});return e.view===`grid`?(0,G.jsxs)(Zu,{$plain:!1,onClick:e=>!r&&o(t.name,di(e)),title:t.name,children:[(0,G.jsx)(Qu,{children:(0,G.jsx)(xo,{size:18})}),(0,G.jsxs)(Y,{children:[(0,G.jsxs)(`strong`,{children:[i,r&&ea(t),a]}),s]})]},t.name):(0,G.jsxs)(ed,{as:r?`div`:`button`,onClick:r?void 0:e=>o(t.name,di(e)),title:t.name,type:r?void 0:`button`,children:[(0,G.jsx)(xo,{size:18}),(0,G.jsxs)(td,{children:[(0,G.jsxs)(`strong`,{children:[i,r&&ea(t),a]}),s]}),(0,G.jsx)(rd,{children:(0,G.jsx)(id,{$used:n,$tone:Zi(n)})})]},t.name)});return e.view===`grid`?(0,G.jsx)(Xu,{children:n}):(0,G.jsx)($u,{children:n})},he=e=>{switch(e.kind){case`quick`:{let t=I(e);return!h&&t.length===0?(0,G.jsx)(gd,{children:p(`No folders in this Quick access panel yet.`)}):e.view===`grid`?(0,G.jsxs)(Xu,{children:[t.map(t=>(0,G.jsxs)(Zu,{$plain:h,...me(e,t.path),onClick:e=>!h&&o(t.path,di(e)),title:t.path,children:[h&&(0,G.jsx)(dd,{onClick:n=>{n.stopPropagation(),F(e,t.path)},title:p(`Remove from Quick access`),type:`button`,children:(0,G.jsx)(J,{size:11})}),(0,G.jsxs)(ld,{children:[h?(0,G.jsx)(ud,{onClick:e=>{e.stopPropagation(),x(ne(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:p(`Change icon`),type:`button`,children:(0,G.jsx)(Qu,{children:(0,G.jsx)(wc,{place:t})})}):(0,G.jsx)(Qu,{children:(0,G.jsx)(wc,{place:t})}),ne(t.path)&&(0,G.jsx)(ju,{onPick:e=>void re(t.path,e),value:v?.placeIcons?.[t.path]??t.icon})]}),(0,G.jsxs)(Y,{children:[E?.path===t.path?(0,G.jsx)(`strong`,{children:(0,G.jsx)(vd,{onCancel:()=>D(null),onChange:e=>D({path:t.path,name:e}),onCommit:()=>void j(t.path,E?.name??``),value:E?.name??``})}):(0,G.jsxs)(`strong`,{children:[t.name,h&&(0,G.jsx)(fd,{onClick:e=>{e.stopPropagation(),x(null),D({path:t.path,name:t.name})},title:p(`Rename folder`),type:`button`,children:(0,G.jsx)(Qo,{size:11})})]}),(0,G.jsx)(X,{children:t.path})]})]},t.path)),h&&(0,G.jsxs)(nd,{onClick:()=>void P(e),title:p(`Pin a folder here`),type:`button`,children:[(0,G.jsx)(Qu,{children:(0,G.jsx)(To,{size:15})}),(0,G.jsxs)(Y,{children:[(0,G.jsx)(`strong`,{children:p(`Add folder`)}),(0,G.jsx)(X,{children:p(`Pin a directory here`)})]})]})]}):(0,G.jsxs)($u,{children:[t.map(t=>(0,G.jsxs)(ed,{...me(e,t.path),onClick:e=>!h&&o(t.path,di(e)),title:t.path,type:`button`,children:[(0,G.jsxs)(ld,{children:[h?(0,G.jsx)(ud,{onClick:e=>{e.stopPropagation(),x(ne(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:p(`Change icon`),type:`button`,children:(0,G.jsx)(wc,{place:t,size:15})}):(0,G.jsx)(wc,{place:t,size:15}),ne(t.path)&&(0,G.jsx)(ju,{onPick:e=>void re(t.path,e),value:v?.placeIcons?.[t.path]??t.icon})]}),(0,G.jsxs)(td,{children:[E?.path===t.path?(0,G.jsx)(`strong`,{children:(0,G.jsx)(vd,{onCancel:()=>D(null),onChange:e=>D({path:t.path,name:e}),onCommit:()=>void j(t.path,E?.name??``),value:E?.name??``})}):(0,G.jsxs)(`strong`,{children:[t.name,h&&(0,G.jsx)(fd,{onClick:e=>{e.stopPropagation(),x(null),D({path:t.path,name:t.name})},title:p(`Rename folder`),type:`button`,children:(0,G.jsx)(Qo,{size:11})})]}),(0,G.jsx)(X,{children:t.path})]}),h&&(0,G.jsx)(dd,{$inline:!0,onClick:n=>{n.stopPropagation(),F(e,t.path)},title:p(`Remove from Quick access`),type:`button`,children:(0,G.jsx)(J,{size:11})})]},t.path)),h&&(0,G.jsxs)(nd,{$row:!0,onClick:()=>void P(e),title:p(`Pin a folder here`),type:`button`,children:[(0,G.jsx)(To,{size:15}),(0,G.jsxs)(td,{children:[(0,G.jsx)(`strong`,{children:p(`Add folder`)}),(0,G.jsx)(X,{children:p(`Pin a directory here`)})]})]})]})}case`frequent`:return(0,G.jsx)(bd,{mode:e.view,onOpen:o,version:a});case`recent`:return L(e);case`drives`:return R(e);default:return(0,G.jsx)(xd,{mode:e.view,onOpen:o,openOnSingleClick:v?.openOnSingleClick??!1,path:e.path??i,showCheckboxes:v?.showCheckboxes??!0,visibilityVersion:f})}};return(0,G.jsxs)(Pu,{children:[(0,G.jsxs)(Fu,{children:[(0,G.jsx)(Iu,{role:`group`,title:p(`Columns`),children:[1,2,3,4,5].map(e=>(0,G.jsx)(Lu,{$active:ae===e,onClick:()=>void N({overviewColumns:e}),title:qi(p,e,`1 column`,`{count} columns`),type:`button`,children:e},e))}),h&&(0,G.jsxs)(zu,{children:[(0,G.jsxs)(Ru,{onClick:()=>C(e=>!e),onPointerDown:e=>e.stopPropagation(),title:p(`Add a panel`),type:`button`,children:[(0,G.jsx)(To,{size:12}),p(`Add panel ▾`)]}),S&&(0,G.jsx)(Bu,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`folder`].map(e=>(0,G.jsx)(Vu,{onClick:()=>{C(!1),fe(e)},type:`button`,children:p(e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:`Folder…`)},e))})]}),(0,G.jsxs)(Ru,{onClick:()=>{g(e=>!e),C(!1),x(null),D(null),T(null)},title:p(h?`Done`:`Edit`),type:`button`,children:[h?(0,G.jsx)(Fo,{size:13}):(0,G.jsx)(Qo,{size:13}),p(h?`Done`:`Edit`)]})]}),ee&&(0,G.jsx)(hd,{children:ee}),(0,G.jsx)(Hu,{$columns:ae,children:te.map(e=>{let t=k.indexOf(e.id);return(0,G.jsxs)(Uu,{children:[(0,G.jsxs)(Wu,{children:[(0,G.jsxs)(Gu,{children:[(0,G.jsxs)(ld,{children:[h?(0,G.jsx)(ud,{onClick:()=>x(A(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:p(`Change icon`),type:`button`,children:(0,G.jsx)(Cc,{panel:e,size:15})}):(0,G.jsx)(Cc,{panel:e,size:15}),A(e.id)&&(0,G.jsx)(ju,{onPick:t=>de(e.id,t),value:e.icon})]}),h?(0,G.jsx)(Ju,{defaultValue:e.title,onBlur:t=>se(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,G.jsx)(qu,{children:p(e.title)})]}),(0,G.jsxs)(Ku,{children:[!h&&e.kind===`recent`&&(0,G.jsx)(Ru,{onClick:()=>void Sr().then(c),title:p(`Clear`),type:`button`,children:p(`Clear`)}),!h&&e.kind===`frequent`&&(0,G.jsx)(Ru,{onClick:()=>void Cr().then(()=>u?.()),title:p(`Clear the frequent list`),type:`button`,children:p(`Clear`)}),!h&&(e.kind===`home`||e.kind===`folder`)&&(0,G.jsx)(Ru,{onClick:()=>o(e.path??i),title:p(`Open folder`),type:`button`,children:p(`Open`)}),h&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Yu,{$active:e.pinned,onClick:()=>le(e.id),title:e.pinned?p(`Unpin from the sidebar`):p(`Pin to the sidebar`),type:`button`,children:(0,G.jsx)(Ao,{size:12})}),(0,G.jsx)(Yu,{$active:e.view===`list`,onClick:()=>ce(e.id,`list`),title:p(`List`),type:`button`,children:(0,G.jsx)(jo,{size:13})}),(0,G.jsx)(Yu,{$active:e.view===`grid`,onClick:()=>ce(e.id,`grid`),title:p(`Grid`),type:`button`,children:(0,G.jsx)(Mo,{size:13})}),(0,G.jsx)(Yu,{disabled:t===0,onClick:()=>oe(e.id,-1),title:p(`Move up`),type:`button`,children:(0,G.jsx)(Co,{size:12})}),(0,G.jsx)(Yu,{disabled:t===k.length-1,onClick:()=>oe(e.id,1),title:p(`Move down`),type:`button`,children:(0,G.jsx)(Co,{size:12})}),(0,G.jsx)(Yu,{onClick:()=>ue(e.id),title:p(`Remove panel`),type:`button`,children:(0,G.jsx)(J,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?he(e):(0,G.jsx)(od,{children:he(e)})]},e.id)})})]})}function vd({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=Kn();return(0,G.jsxs)(pd,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,G.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,G.jsx)(md,{onClick:r,title:a(`Cancel`),type:`button`,children:(0,G.jsx)(J,{size:11})}),(0,G.jsx)(md,{$apply:!0,onClick:n,title:a(`Rename volume`),type:`button`,children:(0,G.jsx)(Fo,{size:12})})]})}function yd(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}function bd({mode:e,onOpen:t,version:n}){let r=Kn(),[i,a]=(0,_.useState)(null),o=ia();if((0,_.useEffect)(()=>{br().then(a,()=>a([]))},[n]),!i)return(0,G.jsx)(gd,{children:r(`Reading…`)});if(i.length===0)return(0,G.jsx)(gd,{children:r(`Folders you open often show up here.`)});let s=e=>qi(r,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path});return e===`grid`?(0,G.jsx)(Xu,{children:i.map(e=>{let n=aa(o,e.path);return(0,G.jsxs)(Zu,{$plain:!1,onClick:n=>t(e.path,di(n)),title:e.path,children:[(0,G.jsx)(Qu,{children:n&&o.useIcons?(0,G.jsx)(wc,{place:n,size:18}):(0,G.jsx)(Vc,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,G.jsxs)(Y,{children:[(0,G.jsx)(`strong`,{children:n?.name||e.name}),(0,G.jsx)(X,{children:s(e)})]})]},e.path)})}):(0,G.jsx)($u,{children:i.map(e=>{let n=aa(o,e.path);return(0,G.jsxs)(ed,{onClick:n=>t(e.path,di(n)),title:e.path,type:`button`,children:[n&&o.useIcons?(0,G.jsx)(wc,{place:n,size:15}):(0,G.jsx)(Vc,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,G.jsxs)(td,{children:[(0,G.jsx)(`strong`,{children:n?.name||e.name}),(0,G.jsx)(X,{children:s(e)})]})]},e.path)})})}function xd({path:e,mode:t,onOpen:n,showCheckboxes:r,openOnSingleClick:i,visibilityVersion:a}){let o=Kn(),[s,c]=(0,_.useState)(null),l=ia();return(0,_.useEffect)(()=>{e&&(c(null),ir(e).then(c,()=>c(null)))},[e,a]),(0,_.useEffect)(()=>{if(W.available)return W.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&n.data.path.replace(/[\\\\/]+$/,``).toLowerCase()===e.replace(/[\\\\/]+$/,``).toLowerCase()&&ir(e,!1).then(c,()=>void 0)})},[e]),s?t===`list`?(0,G.jsx)(ad,{children:(0,G.jsx)(hl,{error:null,listing:s,loading:!1,onOpen:n,onOpenFile:e=>void rr(e),onSort:()=>void 0,openOnSingleClick:i,enableShortcuts:!1,showCheckboxes:r,showDetails:!1,showImages:!1,view:{...er,columns:tr.columns??[]}})}):(0,G.jsx)(od,{children:s.entries.length===0?(0,G.jsx)(gd,{children:o(`This folder is empty.`)}):(0,G.jsx)(sd,{children:s.entries.map(e=>{let t=aa(l,e.fullPath);return(0,G.jsxs)(cd,{onClick:t=>e.isDirectory?n(e.fullPath,di(t)):void rr(e.fullPath),title:e.name,type:`button`,children:[t&&l.useIcons?(0,G.jsx)(wc,{place:t,size:16}):(0,G.jsx)(Vc,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,G.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,G.jsx)(gd,{children:o(`Reading…`)})}function Sd({path:e,label:t,icon:n,focusToken:r,onNavigate:i}){let a=Kn(),o=ia(),[s,c]=(0,_.useState)(!1),[l,u]=(0,_.useState)(``),d=(0,_.useRef)(null),f=(0,_.useRef)(0);(0,_.useEffect)(()=>{s||u(e.replace(/\\/g,`/`))},[e,s]),(0,_.useEffect)(()=>{r&&r!==f.current&&(f.current=r,u(e.replace(/\\/g,`/`)),c(!0))},[r,e]),(0,_.useEffect)(()=>{s&&d.current?.select()},[s]),(0,_.useEffect)(()=>{if(!s)return;let e=()=>c(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[s]);let p=()=>{u(e.replace(/\\/g,`/`)),c(!0)},m=()=>{let t=l.trim();c(!1),t.length>0&&t!==e&&i(t)};if(s)return(0,G.jsxs)(Ad,{onPointerDown:e=>e.stopPropagation(),children:[(0,G.jsx)(`input`,{onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&m(),e.key===`Escape`&&c(!1)},ref:d,spellCheck:!1,value:l}),(0,G.jsx)(jd,{onClick:()=>c(!1),title:a(`Cancel`),type:`button`,children:(0,G.jsx)(J,{size:12})}),(0,G.jsx)(jd,{$apply:!0,onClick:m,onPointerDown:e=>e.stopPropagation(),title:a(`Open this path`),type:`button`,children:(0,G.jsx)(Fo,{size:14})})]});let h=t?[{label:t,path:e,icon:n}]:wd(e,o.places);return(0,G.jsx)(Td,{onClick:p,title:a(`Click to type a path`),children:h.map((t,n)=>(0,G.jsxs)(Ed,{$last:n===h.length-1,children:[n>0&&(0,G.jsx)(Od,{children:(0,G.jsx)(Oo,{size:9})}),(0,G.jsxs)(kd,{onClick:n=>{n.stopPropagation(),t.path!==e&&i(t.path)},type:`button`,children:[t.place?(0,G.jsx)(Dd,{children:(0,G.jsx)(wc,{place:t.place,size:13})}):t.icon&&(0,G.jsx)(Dd,{children:t.icon}),t.label]})]},t.path))})}function Cd(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function wd(e,t){let n=Cd(e),r=e=>e.replace(/[\\/]+$/,``).toLowerCase(),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>r(t.path)===r(e.path));t>i&&(i=t,a=e)}return a&&i>=0&&n.splice(0,i+1,{label:a.name,path:n[i].path,place:a}),n}var Td=U.div`
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
`,Ed=U.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Dd=U.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Od=U.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,kd=U.button`
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
`,Ad=U.div`
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
`,jd=U.button`
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
`,Md=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,G.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,G.jsx)(`path`,{d:`M4 4v6h6`})]});function Nd({onOpenLocation:e,showDetails:t=!0,onShowDetails:n,videoAudio:r=!1,videoAutoplay:i=!1}){let a=Kn(),[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)([]),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)(!0),[g,v]=(0,_.useState)(!1),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)(!1),[C,w]=(0,_.useState)(()=>new Set),[T,E]=(0,_.useState)(null),[D,ee]=(0,_.useState)(()=>{let e=la(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[O,te]=(0,_.useState)(null),[k,A]=(0,_.useState)(null),[ne,re]=(0,_.useState)(()=>{let e=sa(`yafm.recycle.preview.width`,320);return e>=220?e:320}),j=(0,_.useRef)(null),ie=e=>{re(e),ca(`yafm.recycle.preview.width`,e)},M=(0,_.useCallback)(async()=>{h(!0),b(null);try{s(await dr(x))}catch(e){b(e instanceof Error?e.message:String(e))}finally{h(!1)}},[x]);(0,_.useEffect)(()=>{M()},[M]),(0,_.useEffect)(()=>{x||(l([]),d(!1),p(null))},[x]),(0,_.useEffect)(()=>{w(e=>{let t=new Set(o.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[o]);let ae=(0,_.useMemo)(()=>{let e=new Set(o.map(e=>e.id));return[...o,...c.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=Pd(e,t,D.column);return D.descending?-n:n})},[o,c,D]),N=(0,_.useMemo)(()=>ae.filter(e=>C.has(e.id)),[ae,C]),oe=N.filter(e=>e.removable&&!e.isOrphan),se=N.filter(e=>e.removable),ce=(e,t)=>{let n=t.ctrlKey||t.metaKey;w(r=>{if(t.shiftKey&&T){let t=ae.findIndex(e=>e.id===T),i=ae.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(ae[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),E(e.id)},le=(0,_.useCallback)(()=>w(new Set(ae.map(e=>e.id))),[ae]),ue=(0,_.useCallback)(async()=>{let e=oe.map(e=>e.id);if(e.length!==0){v(!0);try{let t=await pr(e);t.ok||window.alert(qi(a,e.length,`Restored {done} of 1 item.`,`Restored {done} of {total} items.`,{done:t.done,total:e.length})),w(new Set),await M()}finally{v(!1)}}},[M,oe,a]),de=(0,_.useCallback)(async()=>{let e=se.map(e=>e.id);if(A(null),e.length!==0){v(!0);try{let t=await mr(e);t.ok||window.alert(qi(a,e.length,`Deleted {done} of 1 item.`,`Deleted {done} of {total} items.`,{done:t.done,total:e.length})),w(new Set),await M()}finally{v(!1)}}},[se,M,a]),fe=async()=>{A(null),v(!0);try{await fr(x),w(new Set),await M()}finally{v(!1)}},P=async()=>{v(!0),p(null);try{let e=await gr();if(e.cancelled){p(`Elevation was declined — nothing was read.`);return}if(e.failed){p(`The elevated helper could not produce a report. Try again.`);return}l(e.entries),d(!0)}finally{v(!1)}},F=async()=>{v(!0),A(null);try{await _r(),l([]),d(!1),p(null),await M()}finally{v(!1)}},pe=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},me=e=>{navigator.clipboard.writeText(e.originalPath)},I=(e,t)=>{e.preventDefault(),t&&!C.has(t.id)&&w(new Set([t.id])),te({x:e.clientX,y:e.clientY})};(0,_.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),le()):e.key===`Delete`?(e.preventDefault(),se.length>0&&A(`delete`)):e.key===`Enter`&&oe.length>0?(e.preventDefault(),ue()):e.key===`Escape`&&(w(new Set),te(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[se.length,oe.length,ue,le]);let L=[{label:a(`Restore`),icon:(0,G.jsx)(Md,{width:14,height:14}),disabled:oe.length===0,onSelect:()=>void ue()},{label:a(`Delete permanently`),icon:(0,G.jsx)(Po,{size:14}),danger:!0,disabled:se.length===0,onSelect:()=>A(`delete`)},{label:a(`Properties`),icon:(0,G.jsx)(ko,{size:14}),disabled:N.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=N;e&&hr(e.id)}},{label:a(`Open original location`),icon:(0,G.jsx)(yo,{size:14}),disabled:N.length!==1,onSelect:()=>{let[e]=N;e&&pe(e)}},{label:a(`Copy original path`),icon:(0,G.jsx)(gs,{size:14}),disabled:N.length!==1,onSelect:()=>{let[e]=N;e&&me(e)}},{label:a(`Select all`),separatorBefore:!0,onSelect:le},{label:a(`Refresh`),icon:(0,G.jsx)(wo,{size:14}),onSelect:()=>void M()}],R=N.length>0?N[0]:null,he=R?{name:R.name,path:R.contentPath||R.originalPath,isDirectory:R.isDirectory,size:R.size,modified:R.deleted,fields:[{label:a(`Type`),value:a(Id(R))},{label:a(`Original location`),value:R.originalPath},{label:a(`Date deleted`),value:Xi(R.deleted)},{label:a(`Size`),value:R.isDirectory?`—`:Ji(R.size)},...R.owner?[{label:a(`Owner`),value:R.owner}]:[],{label:a(`Status`),value:R.isOrphan?a(`Metadata only`):R.removable?a(`Restorable`):a(`Other profile`)}]}:null;return(0,G.jsxs)(Rd,{ref:j,onContextMenu:e=>I(e),children:[(0,G.jsxs)(zd,{children:[(0,G.jsxs)(Bd,{children:[(0,G.jsx)(Po,{size:16}),(0,G.jsx)(`span`,{children:a(`Recycle Bin`)}),(0,G.jsxs)(Vd,{children:[m?`…`:qi(a,ae.length,`1 item`,`{count} items`),C.size>0&&` · ${a(`{count} selected`,{count:C.size})}`]})]}),(0,G.jsxs)(Hd,{children:[(0,G.jsx)(Wd,{$on:x,onClick:()=>S(e=>!e),title:a(`Show metadata records whose content is already gone`),type:`button`,children:a(`Orphans`)}),x&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Ud,{disabled:g||u,onClick:()=>void P(),title:a(u?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`),type:`button`,children:a(g?`Working…`:u?`Admin view loaded`:`Show all (admin)…`)}),u&&c.length>0&&(0,G.jsx)(Ud,{disabled:g,onClick:()=>A(`purge`),type:`button`,children:a(`Delete every orphan`)})]}),(0,G.jsx)(Ud,{disabled:g||oe.length===0,onClick:()=>void ue(),type:`button`,children:a(`Restore`)}),(0,G.jsx)(Ud,{$danger:!0,disabled:g||se.length===0,onClick:()=>A(`delete`),type:`button`,children:a(`Delete`)}),(0,G.jsx)(Ud,{disabled:g||ae.length===0,onClick:()=>A(`empty`),type:`button`,children:a(`Empty`)}),(0,G.jsx)(Gd,{onClick:()=>void M(),title:a(`Refresh`),type:`button`,children:(0,G.jsx)(wo,{size:14})})]})]}),f&&(0,G.jsx)(df,{children:f}),y&&(0,G.jsx)(ff,{children:y}),!y&&!m&&ae.length===0&&(0,G.jsx)(ff,{children:a(`The recycle bin is empty.`)}),ae.length>0&&(0,G.jsxs)(uf,{children:[(0,G.jsxs)(Kd,{children:[(0,G.jsxs)(Jd,{children:[(0,G.jsx)(`span`,{}),(0,G.jsxs)(Yd,{onClick:()=>z(`name`),type:`button`,children:[a(`Name`),Fd(D,`name`)]}),(0,G.jsxs)(Yd,{onClick:()=>z(`original`),type:`button`,children:[a(`Original location`),Fd(D,`original`)]}),(0,G.jsxs)(Yd,{onClick:()=>z(`deleted`),type:`button`,children:[a(`Date deleted`),Fd(D,`deleted`)]}),(0,G.jsxs)(Yd,{onClick:()=>z(`size`),type:`button`,children:[a(`Size`),Fd(D,`size`)]}),(0,G.jsxs)(Yd,{onClick:()=>z(`type`),type:`button`,children:[a(`Type`),Fd(D,`type`)]}),(0,G.jsx)(`span`,{})]}),(0,G.jsx)(Xd,{onClick:e=>{e.target===e.currentTarget&&w(new Set)},children:ae.map(e=>(0,G.jsxs)(Zd,{$checked:C.has(e.id),$orphan:e.isOrphan,onClick:t=>ce(e,t),onContextMenu:t=>I(t,e),onDoubleClick:()=>{w(new Set([e.id])),E(e.id),n?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,G.jsx)($d,{$checked:C.has(e.id),children:C.has(e.id)&&(0,G.jsx)(Fo,{size:9})}),(0,G.jsxs)(ef,{children:[(0,G.jsx)(Ld,{entry:e}),(0,G.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,G.jsx)(lf,{children:a(`metadata only`)}),e.owner&&(0,G.jsx)(lf,{$other:!0,children:a(`other profile`)})]}),(0,G.jsx)(nf,{children:e.originalPath}),(0,G.jsx)(rf,{children:Xi(e.deleted)}),(0,G.jsx)(af,{children:e.isDirectory?`—`:Ji(e.size)}),(0,G.jsx)(of,{children:a(Id(e))}),(0,G.jsxs)(sf,{children:[e.removable&&!e.isOrphan&&(0,G.jsx)(cf,{onClick:t=>{t.stopPropagation(),pr([e.id]).then(M)},title:a(`Restore to its original folder`),type:`button`,children:(0,G.jsx)(Md,{})}),e.removable&&(0,G.jsx)(cf,{$danger:!0,onClick:t=>{t.stopPropagation(),w(new Set([e.id])),A(`delete`)},title:e.isOrphan?a(`Remove the leftover record`):a(`Delete permanently`),type:`button`,children:(0,G.jsx)(Po,{size:13})})]})]},e.id))})]}),t&&he&&(0,G.jsx)(Js,{info:he,onWidth:ie,selectionNote:N.length>1?qi(a,N.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:r,videoAutoplay:i,width:ne})]}),O&&(0,G.jsx)(Ts,{items:L,onClose:()=>te(null),x:O.x,y:O.y}),(0,G.jsx)(Ls,{confirmLabel:a(k===`empty`?`Empty the bin`:k===`purge`?`Delete every orphan`:`Delete`),danger:!0,message:k===`empty`?qi(a,ae.length,`Permanently delete 1 item? This cannot be undone.`,`Permanently delete {count} items? This cannot be undone.`):k===`purge`?a(`Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.`):qi(a,se.length,`Permanently delete 1 selected item? This cannot be undone.`,`Permanently delete {count} selected items? This cannot be undone.`),onCancel:()=>A(null),onConfirm:()=>{k===`empty`?fe():k===`purge`?F():de()},open:k!==null,title:a(k===`empty`?`Empty the recycle bin`:k===`purge`?`Delete every orphan`:`Delete permanently`)})]});function z(e){ee(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return ua(`yafm.recycle.sort`,n),n})}}function Pd(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return Id(e).localeCompare(Id(t),void 0,{sensitivity:`base`})}}function Fd(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function Id(e){if(e.isDirectory)return`Folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`File`}function Ld({entry:e}){let t=wi(e.originalPath,e.isDirectory);return(0,G.jsx)(tf,{children:t?(0,G.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,G.jsx)(yo,{}):(0,G.jsx)(bo,{})})}var Rd=U.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,zd=U.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,Bd=U.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,Vd=U.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Hd=U.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Ud=U.button`
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
`,Wd=U(Ud)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Gd=U.button`
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
`,Kd=U.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,qd=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,Jd=U.div`
    display: grid;
    grid-template-columns: ${qd};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Yd=U.button`
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
`,Xd=U.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,Zd=U.div`
    display: grid;
    grid-template-columns: ${qd};
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
`,Qd=U.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$d=U.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,ef=U(Qd)`
    display: flex;
    align-items: center;
    gap: 9px;
`,tf=U.span`
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
`,nf=U(Qd)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,rf=U(Qd)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,af=U(Qd)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,of=U(Qd)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,sf=U.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,cf=U.button`
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
`,lf=U.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,uf=U.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,df=U.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,ff=U.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function pf(){return W.available?(await W.request(`app.tags`)).tags:[]}async function mf(e){return!W.available||!e?!1:(await W.request(`app.tags.delete`,{name:e})).ok}async function hf(e,t){return!W.available||!e||!t?!1:(await W.request(`app.tags.rename`,{oldName:e,newName:t})).ok}var gf=`#3b82f6`,_f=`#6366f1`,vf=/^#?([0-9a-f]{6})$/i;function yf(e,t){if(!e)return t;let n=vf.exec(e.trim());return n?`#${n[1].toLowerCase()}`:t}function bf(e){let t=vf.exec(e);if(!t)return[59,130,246];let n=Number.parseInt(t[1],16);return[n>>16&255,n>>8&255,n&255]}function xf(e){let[t,n,r]=bf(e).map(e=>e/255),i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2,s=i-a;if(s===0)return{hue:0,saturation:0};let c=s/(1-Math.abs(2*o-1));return{hue:((i===t?(n-r)/s%6:i===n?(r-t)/s+2:(t-n)/s+4)*60+360)%360,saturation:c*100}}function Sf(e,t,n,r=1){return r===1?`hsl(${e.toFixed(1)} ${t}% ${n}%)`:`hsl(${e.toFixed(1)} ${t}% ${n}% / ${r})`}function Cf(e,t,n){let r=t/100,i=n/100,a=(1-Math.abs(2*i-1))*r,o=a*(1-Math.abs(e/60%2-1)),s=i-a/2,[c,l,u]=e<60?[a,o,0]:e<120?[o,a,0]:e<180?[0,a,o]:e<240?[0,o,a]:e<300?[o,0,a]:[a,0,o];return[c,l,u].map(e=>Math.round((e+s)*255)).join(`, `)}function wf(e,t){let n=yf(e,gf),r=yf(t,_f),[i,a,o]=bf(n),[s,c,l]=bf(r),{hue:u,saturation:d}=xf(n),f=Math.round(Math.min(Math.max(d*.35,6),30)),p=document.documentElement.style;p.setProperty(`--accent-primary`,n),p.setProperty(`--accent-rgb`,`${i}, ${a}, ${o}`),p.setProperty(`--accent-secondary`,r),p.setProperty(`--accent-secondary-rgb`,`${s}, ${c}, ${l}`),p.setProperty(`--border-color`,`rgba(${i}, ${a}, ${o}, 0.13)`),p.setProperty(`--border-color-hover`,`rgba(${i}, ${a}, ${o}, 0.40)`),p.setProperty(`--border-color-focus`,n),p.setProperty(`--accent-gradient`,`linear-gradient(135deg, ${n} 0%, ${r} 100%)`),p.setProperty(`--accent-glow`,`0 0 28px rgba(${i}, ${a}, ${o}, 0.28)`),p.setProperty(`--selection-bg`,`rgba(${i}, ${a}, ${o}, 0.11)`),p.setProperty(`--selection-border`,`rgba(${i}, ${a}, ${o}, 0.36)`),p.setProperty(`--bg-primary`,Sf(u,f,7)),p.setProperty(`--bg-secondary`,Sf(u,f,11)),p.setProperty(`--bg-card`,Sf(u,f,14,.75)),p.setProperty(`--bg-card-hover`,Sf(u,f,20,.85)),p.setProperty(`--bg-input`,Sf(u,f,9,.75)),p.setProperty(`--bg-elevated`,Sf(u,f,8,.96)),p.setProperty(`--bg-media`,Sf(u,f,4)),p.setProperty(`--bg-rgb`,Cf(u,f,7))}function Tf(){let e=Kn();return(0,G.jsx)(Ef,{title:e(`Always applies to every folder`),children:e(`Global`)})}var Ef=U.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,Df=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`refresh`,label:`Refresh`,note:`Reads the current folder again.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}],Of=[{name:`Blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`Indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`Violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`Teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`Green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`Amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`Rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`Slate`,accent:`#64748b`,secondary:`#94a3b8`}],kf=`en`,Af=`system`,jf={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},Mf=[{id:`application`,label:`Application`},{id:`colors`,label:`Colors`},{id:`tags`,label:`Tags`},{id:`files-view`,label:`Files view`},{id:`shortcuts`,label:`Shortcuts`},{id:`memory`,label:`Memory`},{id:`overview`,label:`Overview`},{id:`gallery`,label:`Gallery`},{id:`icons`,label:`Icons`},{id:`extension-icons`,label:`Icons by extension`},{id:`folder-icons`,label:`Folder icons`},{id:`folder-index`,label:`Folder index`},{id:`files`,label:`Files`}],Nf=`yafm.colors.recent`;function Pf(){let e=la(Nf);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function Ff({appInfo:e,onSettingsChanged:t}){let n=Kn(),[r,i]=(0,_.useState)([]),[a,o]=(0,_.useState)(null),[s,c]=(0,_.useState)(null),[l,u]=(0,_.useState)(null),[d,f]=(0,_.useState)(``),[p,m]=(0,_.useState)(`file`),[h,g]=(0,_.useState)(!1),[v,y]=(0,_.useState)(!1),[b,x]=(0,_.useState)(null),[S,C]=(0,_.useState)(!1),[w,T]=(0,_.useState)(!1),[E,D]=(0,_.useState)(null),[ee,O]=(0,_.useState)(null),[te,k]=(0,_.useState)([]),[A,ne]=(0,_.useState)(null),[re,j]=(0,_.useState)(!1),[ie,M]=(0,_.useState)(null),[ae,N]=(0,_.useState)(Pf),[oe,se]=(0,_.useState)(null),[ce,le]=(0,_.useState)(null),[ue,de]=(0,_.useState)(Mf[0].id),fe=(0,_.useRef)(null),P=(0,_.useRef)({}),F=s?.defaultView??tr,pe=s?.themePresets??[];(0,_.useEffect)(()=>{let e=fe.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){de(Mf[Mf.length-1].id);return}let n=t+110,r=Mf[0].id;for(let{id:e}of Mf){let t=P.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}de(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let me=e=>t=>{P.current[e]=t},I=e=>{P.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),de(e)};(0,_.useEffect)(()=>{Un().then(e=>i(e.available),()=>i([]))},[]),(0,_.useEffect)(()=>{wr().then(o,()=>o(null)),Dr().then(c,()=>c(null)),Lr().then(C,()=>C(!1)),pf().then(k,()=>k([]))},[]),(0,_.useEffect)(()=>{let e=()=>void Fr().then(x,()=>x(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let L=async e=>{if(!s)return;let n={...s,...e};Object.keys(e).every(e=>n[e]===s[e])||(c(n),bi(),c(await Or(n)),t())},R=(e,t)=>{N(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return ua(Nf,i),i})},he=yf(s?.accentColor,gf),z=yf(s?.secondaryColor,_f),ge=(e,t)=>{s&&(R(`accent`,he),R(`secondary`,z),L({accentColor:e,secondaryColor:t}))},_e=(e,t)=>{s&&(R(e,e===`accent`?he:z),L(e===`accent`?{accentColor:t}:{secondaryColor:t}))},ve=async()=>{if(!s||!oe)return;let e=oe.name.trim()||`${oe.accent.toUpperCase()} / ${oe.secondary.toUpperCase()}`,t=[...s.themePresets,{name:e,accent:oe.accent,secondary:oe.secondary}];se(null),await L({themePresets:t})},ye=async e=>{s&&await L({themePresets:s.themePresets.filter((t,n)=>n!==e)})},be=e=>{let t=ce;le(null),t&&t.role===e&&(e===`accent`?he:z).toLowerCase()!==t.color.toLowerCase()&&R(e,t.color)},xe=async e=>{if(re)return;j(!0),M(null);let t=await mf(e);k(await pf()),t||M(`"${e}" is still used by a folder whose index could not be updated.`),j(!1)},Se=async()=>{let e=A;if(!e||re)return;let t=e.value.trim();t.length===0||t===e.name?ne(null):(j(!0),M(null),await hf(e.name,t)?(k(await pf()),ne(null)):M(`Could not rename "${e.name}".`),j(!1))},B=async e=>{let t=new Set(F.columns??tr.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=fl.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await L({defaultView:{...F,columns:n}})},Ce=async()=>{if(w)return;let e=!S;T(!0),D(null);try{let n=await Rr(e);C(n),c(e=>e&&{...e,linksEnabled:n}),t(),n!==e&&D(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{D(`The request to Windows failed. Try again.`)}finally{T(!1)}},we=async(e,t)=>{if(!s)return;let n={...s.extensionIcons};t===null?delete n[e]:n[e]=t,await L({extensionIcons:n})},Te={...ci,...s?.shortcuts};(0,_.useEffect)(()=>{if(!ee)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){O(null);return}let t=fi(e);t&&(O(null),L({shortcuts:{...Te,[ee]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[ee,s]);let Ee=async e=>{await L({recentLimit:Math.min(Math.max(e,0),50)})},De=async e=>{await L({galleryRoots:e.length>0?e:null})},Oe=async()=>{let e=await Mr(),t=s?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await De([...t,e])},ke=async()=>{let e=d.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await we(e,p),f(``))},Ae=async()=>{y(!0);try{let e=await Mr();if(!e)return;let t=await jr();if(!t)return;await Ar(e.replace(/[\\/][^\\/]+$/,``),Qi(e),`file:${t}`)&&(bi(),u({folder:e,icon:t}))}finally{y(!1)}};return(0,G.jsxs)(Wf,{children:[(0,G.jsxs)(Gf,{ref:fe,children:[(0,G.jsxs)(Kf,{ref:me(`application`),children:[(0,G.jsx)(Uf,{note:`The build, its yafm:// links, and what reopens at launch.`,title:`Application`}),(0,G.jsxs)(Jf,{children:[(0,G.jsxs)(yp,{children:[(0,G.jsx)(Q,{children:n(`Version`)}),(0,G.jsx)(wp,{children:e?`v${e.version}`:`—`})]}),(0,G.jsxs)(yp,{children:[(0,G.jsx)(Q,{children:n(`Platform`)}),(0,G.jsx)(wp,{children:e?.platform??`—`})]}),(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsx)(Q,{children:n(`Language`)}),(0,G.jsx)($,{children:n(`The language the interface uses. English is the default; the system option follows the operating system.`)})]}),(0,G.jsx)(xp,{children:(0,G.jsx)(Vf,{disabled:!s,onChange:e=>void L({language:e}),options:[Af,...r.length>0?r:[kf]],value:s?.language??kf})})]}),(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsx)(Q,{children:n(`Open yafm:// links`)}),(0,G.jsx)($,{children:n(`Registers this app for yafm:// links, for the current user only. While this is on, the app repairs the entry at every launch.`)}),E&&(0,G.jsx)(Cp,{children:E})]}),(0,G.jsxs)(xp,{children:[(0,G.jsx)(jp,{$on:S,children:n(S?`Active`:`Off`)}),(0,G.jsx)(Mp,{$on:S,disabled:w,onClick:()=>void Ce(),title:n(S?`Stop opening yafm:// links`:`Open yafm:// links with this app`),type:`button`,children:(0,G.jsx)(Np,{})})]})]}),(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsx)(Q,{children:n(`Reopen the tabs that were open`)}),(0,G.jsx)($,{children:n(`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`)})]}),(0,G.jsx)(Mp,{$on:s?.restoreTabs??!0,disabled:!s,onClick:()=>void L({restoreTabs:!s?.restoreTabs}),type:`button`,children:(0,G.jsx)(Np,{})})]})]})]}),(0,G.jsxs)(Kf,{ref:me(`colors`),children:[(0,G.jsx)(Uf,{note:`The accent and highlight colours the whole window uses.`,title:`Colors`}),(0,G.jsxs)(Jf,{children:[(0,G.jsxs)(Yf,{children:[(0,G.jsxs)(Xf,{children:[(0,G.jsx)(Q,{children:n(`Presets`)}),(0,G.jsx)($,{children:n(`One click changes the accent and the highlight together.`)})]}),(0,G.jsxs)(Zf,{children:[Of.map(e=>(0,G.jsxs)(Qf,{$on:he.toLowerCase()===e.accent&&z.toLowerCase()===e.secondary,onClick:()=>ge(e.accent,e.secondary),title:`${n(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,G.jsxs)(ap,{children:[(0,G.jsx)(`i`,{style:{background:e.accent}}),(0,G.jsx)(`i`,{style:{background:e.secondary}})]}),(0,G.jsx)($f,{children:n(e.name)})]},e.name)),pe.map((e,t)=>(0,G.jsxs)(ep,{children:[(0,G.jsxs)(Qf,{$on:he.toLowerCase()===e.accent.toLowerCase()&&z.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>ge(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,G.jsxs)(ap,{children:[(0,G.jsx)(`i`,{style:{background:e.accent}}),(0,G.jsx)(`i`,{style:{background:e.secondary}})]}),(0,G.jsx)($f,{children:e.name})]}),(0,G.jsx)(tp,{onClick:()=>void ye(t),title:n(`Remove preset`),type:`button`,children:(0,G.jsx)(J,{size:9})})]},`${e.name}-${t}`)),oe?(0,G.jsxs)(rp,{children:[(0,G.jsxs)(ap,{children:[(0,G.jsx)(`i`,{style:{background:oe.accent}}),(0,G.jsx)(`i`,{style:{background:oe.secondary}})]}),(0,G.jsx)(ip,{autoFocus:!0,maxLength:24,onChange:e=>se({...oe,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),ve()):e.key===`Escape`&&(e.preventDefault(),se(null))},placeholder:n(`Preset name`),spellCheck:!1,value:oe.name}),(0,G.jsx)(Dp,{onClick:()=>void ve(),type:`button`,children:n(`Save`)}),(0,G.jsx)(Dp,{onClick:()=>se(null),type:`button`,children:n(`Cancel`)})]}):(0,G.jsxs)(np,{disabled:!s,onClick:()=>se({name:``,accent:he,secondary:z}),title:n(`Save the current colours as a preset`),type:`button`,children:[(0,G.jsx)(To,{size:12}),n(`Add preset`)]})]})]}),(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsx)(Q,{children:n(`Accent color`)}),(0,G.jsx)($,{children:n(`Buttons, selections, focus rings, and active navigation.`)})]}),(0,G.jsxs)(xp,{children:[(0,G.jsx)(Z,{colors:ae.accent,current:he,onApply:e=>_e(`accent`,e)}),(0,G.jsx)(Op,{"aria-label":n(`Accent color`),disabled:!s,onBlur:()=>be(`accent`),onChange:e=>void L({accentColor:e.target.value}),onFocus:()=>le({role:`accent`,color:he}),type:`color`,value:he}),(0,G.jsx)(kp,{children:he.toUpperCase()})]})]}),(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsx)(Q,{children:n(`Secondary color`)}),(0,G.jsx)($,{children:n(`Gradients, highlights, and the second end of the accent ramp.`)})]}),(0,G.jsxs)(xp,{children:[(0,G.jsx)(Z,{colors:ae.secondary,current:z,onApply:e=>_e(`secondary`,e)}),(0,G.jsx)(Op,{"aria-label":n(`Secondary color`),disabled:!s,onBlur:()=>be(`secondary`),onChange:e=>void L({secondaryColor:e.target.value}),onFocus:()=>le({role:`secondary`,color:z}),type:`color`,value:z}),(0,G.jsx)(kp,{children:z.toUpperCase()})]})]}),(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsx)(Q,{children:n(`Reset colors`)}),(0,G.jsx)($,{children:n(`Returns the interface to the default blue and indigo theme.`)})]}),(0,G.jsx)(xp,{children:(0,G.jsx)(Dp,{disabled:!s,onClick:()=>{R(`accent`,he),R(`secondary`,z),L({accentColor:null,secondaryColor:null})},type:`button`,children:n(`Reset`)})})]})]})]}),(0,G.jsxs)(Kf,{ref:me(`tags`),children:[(0,G.jsx)(Uf,{note:`Every tag the catalogue has seen, ready to rename or remove.`,title:`Tags`}),(0,G.jsxs)(Jf,{children:[ie&&(0,G.jsx)(yp,{children:(0,G.jsx)(Cp,{children:ie})}),te.length===0&&(0,G.jsx)(yp,{children:(0,G.jsx)($,{children:n(`No tags yet. Add one from an entry's Tags cell; every tag you use will appear here.`)})}),te.map(e=>(0,G.jsx)(yp,{children:A?.name===e.name?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsxs)(Sp,{children:[(0,G.jsx)(Tp,{$color:e.color??`#64748b`}),(0,G.jsx)(Ep,{autoFocus:!0,disabled:re,onChange:t=>ne({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Se()):e.key===`Escape`&&(e.preventDefault(),ne(null))},value:A.value})]}),(0,G.jsx)($,{children:n(`Press Enter to save, Escape to cancel.`)})]}),(0,G.jsxs)(xp,{children:[(0,G.jsx)(Dp,{disabled:re,onClick:()=>void Se(),type:`button`,children:n(`Save`)}),(0,G.jsx)(Dp,{disabled:re,onClick:()=>ne(null),type:`button`,children:n(`Cancel`)})]})]}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsxs)(Sp,{children:[(0,G.jsx)(Tp,{$color:e.color??`#64748b`}),(0,G.jsx)(Q,{children:e.name})]}),(0,G.jsx)($,{children:qi(n,e.folders,`Used in 1 folder. Renaming or removing it updates that folder's index.`,`Used in {count} folders. Renaming or removing it updates those folders' indexes.`)})]}),(0,G.jsxs)(xp,{children:[(0,G.jsx)(Dp,{disabled:re,onClick:()=>ne({name:e.name,value:e.name}),type:`button`,children:n(`Edit`)}),(0,G.jsxs)(Ap,{disabled:re,onClick:()=>void xe(e.name),type:`button`,children:[(0,G.jsx)(Po,{size:13}),n(`Remove`)]})]})]})},e.name))]})]}),(0,G.jsxs)(Kf,{ref:me(`files-view`),children:[(0,G.jsx)(Uf,{note:`The defaults every folder starts with; a folder can still override them.`,title:`Files view (global)`}),(0,G.jsxs)(Jf,{children:[(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsx)(Q,{children:n(`Default view`)}),(0,G.jsx)($,{children:n(`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`)})]}),(0,G.jsx)(xp,{children:(0,G.jsxs)(Bp,{children:[(0,G.jsx)(Vp,{$on:F.mode===`list`,onClick:()=>void L({defaultView:{...F,mode:`list`}}),type:`button`,children:n(`List`)}),(0,G.jsx)(Vp,{$on:F.mode===`grid`,onClick:()=>void L({defaultView:{...F,mode:`grid`}}),type:`button`,children:n(`Grid`)})]})})]}),(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsx)(Q,{children:n(`List icon size`)}),(0,G.jsx)($,{children:n(`The icon in the list rows.`)})]}),(0,G.jsxs)(xp,{children:[(0,G.jsx)(Hp,{max:48,min:16,onChange:e=>void L({defaultView:{...F,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:F.iconSize}),(0,G.jsxs)(wp,{children:[F.iconSize,`px`]})]})]}),(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsx)(Q,{children:n(`Grid size`)}),(0,G.jsx)($,{children:n(`The height of a grid tile; the icon inside follows it.`)})]}),(0,G.jsxs)(xp,{children:[(0,G.jsx)(Hp,{max:260,min:100,onChange:e=>void L({defaultView:{...F,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:F.gridSize}),(0,G.jsxs)(wp,{children:[F.gridSize,`px`]})]})]}),(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsxs)(Sp,{children:[(0,G.jsx)(Q,{children:n(`Selection checkboxes`)}),(0,G.jsx)(Tf,{})]}),(0,G.jsx)($,{children:n(`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`)})]}),(0,G.jsx)(Mp,{$on:s?.showCheckboxes??!0,disabled:!s,onClick:()=>void L({showCheckboxes:!(s?.showCheckboxes??!0)}),type:`button`,children:(0,G.jsx)(Np,{})})]}),(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsxs)(Sp,{children:[(0,G.jsx)(Q,{children:n(`Open with a single click`)}),(0,G.jsx)(Tf,{})]}),(0,G.jsx)($,{children:n(`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`)})]}),(0,G.jsx)(Mp,{$on:s?.openOnSingleClick??!1,disabled:!s,onClick:()=>void L({openOnSingleClick:!(s?.openOnSingleClick??!1)}),type:`button`,children:(0,G.jsx)(Np,{})})]}),(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsxs)(Sp,{children:[(0,G.jsx)(Q,{children:n(`Confirm before deleting`)}),(0,G.jsx)(Tf,{})]}),(0,G.jsx)($,{children:n(`Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.`)})]}),(0,G.jsx)(Mp,{$on:s?.confirmDelete??!1,disabled:!s,onClick:()=>void L({confirmDelete:!(s?.confirmDelete??!1)}),type:`button`,children:(0,G.jsx)(Np,{})})]}),(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsxs)(Sp,{children:[(0,G.jsx)(Q,{children:n(`Play audio in video previews`)}),(0,G.jsx)(Tf,{})]}),(0,G.jsx)($,{children:n(`Video previews play muted by default. Turn this on to hear their audio while the details panel is open.`)})]}),(0,G.jsx)(Mp,{$on:s?.previewVideoAudio??!1,disabled:!s,onClick:()=>void L({previewVideoAudio:!(s?.previewVideoAudio??!1)}),type:`button`,children:(0,G.jsx)(Np,{})})]}),(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsxs)(Sp,{children:[(0,G.jsx)(Q,{children:n(`Autoplay video previews`)}),(0,G.jsx)(Tf,{})]}),(0,G.jsx)($,{children:n(`Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.`)})]}),(0,G.jsx)(Mp,{$on:s?.previewVideoAutoplay??!1,disabled:!s,onClick:()=>void L({previewVideoAutoplay:!(s?.previewVideoAutoplay??!1)}),type:`button`,children:(0,G.jsx)(Np,{})})]}),(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsxs)(Sp,{children:[(0,G.jsx)(Q,{children:n(`Preview panel under the list`)}),(0,G.jsx)(Tf,{})]}),(0,G.jsx)($,{children:n(`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`)})]}),(0,G.jsx)(Mp,{$on:F.showImages??!0,onClick:()=>void L({defaultView:{...F,showImages:!(F.showImages??!0)}}),type:`button`,children:(0,G.jsx)(Np,{})})]}),(0,G.jsx)(yp,{children:(0,G.jsxs)(bp,{children:[(0,G.jsxs)(Sp,{children:[(0,G.jsx)(Q,{children:n(`Columns`)}),(0,G.jsx)(Tf,{})]}),(0,G.jsx)($,{children:n(`Shown in every folder; changing them changes all folders at once.`)})]})}),(0,G.jsx)(yp,{children:(0,G.jsxs)(Up,{children:[fl.map(e=>(0,G.jsxs)(Wp,{children:[(0,G.jsx)(`input`,{checked:(F.columns??[]).includes(e.id),onChange:()=>void B(e.id),type:`checkbox`}),(0,G.jsx)(`span`,{children:n(e.label)})]},e.id)),(0,G.jsxs)(Wp,{children:[(0,G.jsx)(`input`,{checked:(F.columns??[]).includes(`linkTarget`),onChange:()=>void B(`linkTarget`),type:`checkbox`}),(0,G.jsx)(`span`,{children:n(`Link target after the name`)})]})]})})]}),(0,G.jsxs)(Xp,{children:[n(`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.`),` `,(0,G.jsx)(Tf,{}),` `,n(`Anything marked as global always applies to every folder.`)]})]}),(0,G.jsxs)(Kf,{ref:me(`shortcuts`),children:[(0,G.jsx)(Uf,{note:`The keys this window listens for. Click a combination to record a new one.`,title:`Shortcuts`}),(0,G.jsxs)(Jf,{children:[Df.map(({id:e,label:t,note:r})=>(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsx)(Q,{children:n(t)}),(0,G.jsx)($,{children:n(r)})]}),(0,G.jsx)(xp,{children:(0,G.jsx)(Gp,{$listening:ee===e,onClick:()=>O(e),type:`button`,children:ee===e?n(`Press a key…`):pi(Te[e])})})]},e)),(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsx)(Q,{children:n(`Reset`)}),(0,G.jsx)($,{children:n(`Back to the default combination for every action.`)})]}),(0,G.jsx)(xp,{children:(0,G.jsx)(Kp,{onClick:()=>void L({shortcuts:{...ci}}),type:`button`,children:n(`Reset`)})})]})]})]}),(0,G.jsxs)(Kf,{ref:me(`memory`),children:[(0,G.jsx)(Uf,{note:`What the process holds and how to give it back.`,title:`Memory`}),(0,G.jsxs)(Jf,{children:[(0,G.jsxs)(hp,{children:[(0,G.jsxs)(gp,{children:[(0,G.jsx)(Q,{children:n(`Process memory`)}),(0,G.jsx)(wp,{children:b?`${Ji(b.private)} · ${mp(b.private,b.available)}`:`—`})]}),(0,G.jsx)(_p,{children:(0,G.jsx)(vp,{$ratio:b?b.private/Math.max(b.available,1):0,$tone:Zi(b?b.private/Math.max(b.available,1):0)})}),(0,G.jsx)($,{children:b?n(`Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.`,{available:Ji(b.available),resident:Ji(b.workingSet)}):n(`Reading the current usage…`)})]}),(0,G.jsxs)(hp,{children:[(0,G.jsxs)(gp,{children:[(0,G.jsx)(Q,{children:n(`Managed heap`)}),(0,G.jsx)(wp,{children:b?`${Ji(b.managed)} · ${mp(b.managed,b.private)}`:`—`})]}),(0,G.jsx)(_p,{children:(0,G.jsx)(vp,{$ratio:b?b.managed/Math.max(b.private,1):0,$tone:`var(--accent-secondary)`})}),(0,G.jsx)($,{children:n(`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`)})]}),(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsx)(Q,{children:n(`Free memory`)}),(0,G.jsx)($,{children:n(`Compacts the heap and returns unused pages to the system. Always safe.`)})]}),(0,G.jsx)(xp,{children:(0,G.jsx)(Kp,{onClick:()=>void Ir().then(x),type:`button`,children:n(`Trim now`)})})]})]})]}),(0,G.jsxs)(Kf,{ref:me(`overview`),children:[(0,G.jsx)(Uf,{note:`The home tab's history and how much of it it shows.`,title:`Overview`}),(0,G.jsx)(Jf,{children:(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsx)(Q,{children:n(`Recent items`)}),(0,G.jsx)($,{children:n(`How many recently opened folders the overview lists. 0 hides the section.`)})]}),(0,G.jsx)(xp,{children:(0,G.jsx)(Pp,{max:50,min:0,onChange:e=>void Ee(Number(e.target.value)),type:`number`,value:s?.recentLimit??10})})]})})]}),(0,G.jsxs)(Kf,{ref:me(`gallery`),children:[(0,G.jsx)(Uf,{note:`The folders the gallery scans for pictures and videos.`,title:`Gallery`}),(0,G.jsxs)(Jf,{children:[(s?.galleryRoots??[]).map(e=>(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsx)(Q,{children:Qi(e)}),(0,G.jsx)($,{children:e})]}),(0,G.jsx)(xp,{children:(0,G.jsx)(qp,{onClick:()=>void De((s?.galleryRoots??[]).filter(t=>t!==e)),title:n(`Stop scanning this folder`),type:`button`,children:(0,G.jsx)(J,{size:12})})})]},e)),(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsx)(Q,{children:n(`Scan folders`)}),(0,G.jsx)($,{children:(s?.galleryRoots??[]).length===0?n(`Nothing added yet, so the gallery reads the Pictures folder.`):n(`Only these folders are scanned, three levels deep.`)})]}),(0,G.jsx)(xp,{children:(0,G.jsx)(Kp,{onClick:()=>void Oe(),type:`button`,children:n(`Choose folder…`)})})]})]})]}),(0,G.jsxs)(Kf,{ref:me(`icons`),children:[(0,G.jsx)(Uf,{note:`Where the shell's own icons and the built-in glyphs come from.`,title:`Icons`}),(0,G.jsxs)(Jf,{children:[(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsx)(Q,{children:n(`Use system file icons`)}),(0,G.jsx)($,{children:n(`Ask the shell for the icon of each file type instead of the built-in glyphs.`)})]}),(0,G.jsx)(Mp,{$on:s?.systemIcons??!1,disabled:!s,onClick:()=>void L({systemIcons:!s?.systemIcons}),type:`button`,children:(0,G.jsx)(Np,{})})]}),(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsx)(Q,{children:n(`Use custom folder icons`)}),(0,G.jsx)($,{children:n(`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`)})]}),(0,G.jsx)(Mp,{$on:s?.customFolderIcons??!1,disabled:!s,onClick:()=>void L({customFolderIcons:!s?.customFolderIcons}),type:`button`,children:(0,G.jsx)(Np,{})})]})]})]}),(0,G.jsxs)(Kf,{ref:me(`extension-icons`),children:[(0,G.jsx)(Uf,{note:`A custom glyph for one file extension.`,title:`Icons by extension`}),(0,G.jsxs)(Jf,{children:[Object.entries(s?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsx)(Q,{children:e}),(0,G.jsx)($,{children:Rf(n,t)})]}),(0,G.jsxs)(xp,{children:[(0,G.jsx)(zf,{source:t}),(0,G.jsx)(qp,{onClick:()=>void we(e,null),title:n(`Remove this rule`),type:`button`,children:(0,G.jsx)(J,{size:12})})]})]},e)),(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsx)(Q,{children:n(`Add a rule`)}),(0,G.jsx)($,{children:n(`Extension and the icon to draw for it.`)})]}),(0,G.jsxs)(xp,{children:[(0,G.jsx)(Pp,{onChange:e=>f(e.target.value),placeholder:`.psd`,spellCheck:!1,value:d}),(0,G.jsxs)(zp,{children:[(0,G.jsx)(qp,{onClick:()=>g(e=>!e),title:n(`Choose the icon`),type:`button`,children:(0,G.jsx)(zf,{source:p})}),h&&(0,G.jsx)(ju,{allowDefault:!1,onClose:()=>g(!1),onPick:e=>{m(e??`file`),g(!1)},value:p})]}),(0,G.jsx)(qp,{onClick:()=>void ke(),title:n(`Add the rule`),type:`button`,children:(0,G.jsx)(To,{size:13})})]})]})]})]}),(0,G.jsxs)(Kf,{ref:me(`folder-icons`),children:[(0,G.jsx)(Uf,{note:`A single folder can carry an icon of its own.`,title:`Folder icons`}),(0,G.jsxs)(Jf,{children:[(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsx)(Q,{children:n(`Give a folder its own icon`)}),(0,G.jsx)($,{children:n(`Stored in the folder's parent {index}, so it stays with the files.`,{index:`.yafm-index.db`})})]}),(0,G.jsxs)(xp,{children:[l&&(0,G.jsx)(Bf,{src:l.icon}),(0,G.jsx)(Kp,{disabled:v,onClick:()=>void Ae(),type:`button`,children:n(v?`Choosing…`:`Choose folder and icon…`)})]})]}),l&&(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsx)(Q,{children:Qi(l.folder)}),(0,G.jsx)($,{children:l.folder})]}),(0,G.jsx)(xp,{children:(0,G.jsxs)(Yp,{children:[(0,G.jsx)(Fo,{size:11}),` `,n(`Saved`)]})})]})]})]}),(0,G.jsxs)(Kf,{ref:me(`folder-index`),children:[(0,G.jsx)(Uf,{note:`The hidden cache that makes a folder open instantly next time.`,title:`Folder index`}),(0,G.jsx)(Jf,{children:(0,G.jsxs)(yp,{children:[(0,G.jsxs)(bp,{children:[(0,G.jsx)(Q,{children:n(`Keep a {index} in every folder`,{index:`.yafm-index.db`})}),(0,G.jsx)($,{children:n(`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`)})]}),(0,G.jsx)(Mp,{$on:s?.writeDirectoryIndex??!0,disabled:!s,onClick:()=>void L({writeDirectoryIndex:!s?.writeDirectoryIndex}),type:`button`,children:(0,G.jsx)(Np,{})})]})}),!(s?.writeDirectoryIndex??!0)&&(0,G.jsx)(Zp,{children:Lf(n,e?.platform)})]}),(0,G.jsxs)(Kf,{ref:me(`files`),children:[(0,G.jsx)(Uf,{note:`What the listings include.`,title:`Files`}),(0,G.jsxs)(Jf,{children:[(0,G.jsxs)(yp,{children:[(0,G.jsx)(Q,{children:n(`Hidden items`)}),(0,G.jsx)(wp,{children:If(n,a?.showHidden)})]}),(0,G.jsxs)(yp,{children:[(0,G.jsx)(Q,{children:n(`Protected operating system files`)}),(0,G.jsx)(wp,{children:If(n,a?.showSystem)})]})]}),(0,G.jsx)(Xp,{children:n(`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`)})]})]}),(0,G.jsxs)(lp,{"aria-label":n(`Settings sections`),children:[(0,G.jsx)(up,{children:n(`Sections`)}),(0,G.jsx)(dp,{children:Mf.map(({id:e,label:t})=>(0,G.jsx)(fp,{$active:ue===e,onClick:()=>I(e),type:`button`,children:(0,G.jsx)(`span`,{children:n(t)})},e))}),(0,G.jsx)(pp,{children:n(`Changes are saved as you make them.`)})]})]})}function If(e,t){return e(t===void 0?`Reading…`:t?`Shown`:`Hidden`)}function Lf(e,t){return e(`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`,{place:e(t===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:t===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`)})}function Rf(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built-in: {source}`,{source:t})}function zf({source:e}){let t=Ti(e.startsWith(`file:`)?e.slice(5):null);return(0,G.jsx)(Jp,{children:t?(0,G.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,G.jsx)(Bc,{name:e,size:16})})}function Bf({src:e}){let t=Ti(e);return(0,G.jsx)(Jp,{children:t&&(0,G.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function Vf({value:e,options:t,onChange:n,disabled:r}){let i=Kn(),[a,o]=(0,_.useState)(null),s=(0,_.useRef)(null);return(0,_.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(Fp,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,G.jsx)(`span`,{children:Hf(i,e)}),(0,G.jsx)(Ip,{children:(0,G.jsx)(Oo,{size:11})})]}),a&&(0,Cs.createPortal)((0,G.jsx)(Lp,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,G.jsxs)(Rp,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,G.jsx)(`span`,{children:Hf(i,t)}),t===e&&(0,G.jsx)(Fo,{size:11})]},t))}),document.body)]})}function Hf(e,t){return t===Af?e(`System default`):jf[t]??t}function Z({colors:e,current:t,onApply:n}){let r=Kn();if(e.length===0)return null;let[i,...a]=e;return(0,G.jsxs)(op,{children:[(0,G.jsxs)(cp,{$color:i,onClick:()=>n(i),title:r(`Previous colour · {colour}`,{colour:i}),type:`button`,children:[(0,G.jsx)(`i`,{}),r(`Previous`)]}),a.map(e=>(0,G.jsx)(sp,{$color:e,onClick:()=>n(e),title:r(`Use {colour}`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,G.jsx)(Fo,{size:9})},e))]})}function Uf({title:e,note:t}){let n=Kn();return(0,G.jsxs)(qf,{children:[(0,G.jsx)(`h2`,{children:n(e)}),(0,G.jsx)(`p`,{children:n(t)})]})}var Wf=U.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,Gf=U.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,Kf=U.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 900px;
    scroll-margin-top: 10px;
`,qf=U.header`
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
`,Jf=U.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    overflow: hidden;
`,Yf=U.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Xf=U.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Zf=U.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,Qf=U.button`
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
`,$f=U.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ep=U.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,tp=U.button`
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
`,np=U.button`
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
`,rp=U.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,ip=U.input`
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
`,ap=U.span`
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
`,op=U.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,sp=U.button`
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
`,cp=U.button`
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
`,lp=U.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,up=U.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,dp=U.div`
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
`,fp=U.button`
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

    ${({$active:e})=>e&&An`
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
`,pp=U.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function mp(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}var hp=U.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,gp=U.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,_p=U.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,vp=U.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,yp=U.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,bp=U.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,xp=U.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,Q=U.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,Sp=U.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=U.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,Cp=U.span`
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
`,wp=U.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,Tp=U.span`
    width: 10px;
    height: 10px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$color:e})=>e};
`,Ep=U.input`
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
`,Dp=U.button`
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
`,Op=U.input`
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
`,kp=U.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,Ap=U.button`
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
`,jp=U.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,Mp=U.button`
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
`,Np=U.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,Pp=U.input`
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
`,Fp=U.button`
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
`,Ip=U.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Lp=U.div`
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
`,Rp=U.button`
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
`,zp=U.span`
    position: relative;
    display: inline-flex;
`,Bp=U.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Vp=U.button`
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
`,Hp=U.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,Up=U.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,Wp=U.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,Gp=U.button`
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
`,Kp=U.button`
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
`,qp=U.button`
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
`,Jp=U.span`
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
`,Yp=U.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,Xp=U.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,Zp=U.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,Qp=150,$p=2500,em=3,tm=600;function nm({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i}){let a=Kn(),[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)(0),[u,d]=(0,_.useState)(!0),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)(!1),g=(0,_.useRef)([]),v=(0,_.useRef)(0),y=(0,_.useRef)(!1),b=(0,_.useRef)(!0),x=(0,_.useRef)(0),S=(0,_.useRef)(null),C=(0,_.useRef)(0),w=(0,_.useCallback)(async e=>{let t=++x.current;d(!0),b.current=!0,p(null);try{let n=await vr(0,Qp,e);if(t!==x.current)return;g.current=n.entries,v.current=n.total,s(n.entries),l(n.total)}catch(e){t===x.current&&p(e instanceof Error?e.message:String(e))}finally{t===x.current&&(b.current=!1,d(!1))}},[]);(0,_.useEffect)(()=>{w(!1)},[w]);let T=(0,_.useCallback)(async()=>{if(b.current||y.current||g.current.length>=v.current)return;let e=x.current;y.current=!0;try{let t=g.current,n=v.current;for(let r=0;r<em&&t.length<n;r++){let r=await vr(t.length,Qp,!1);if(e!==x.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<Qp)break}if(e!==x.current)return;g.current=t,v.current=n,(0,_.startTransition)(()=>{s(t),l(n)})}catch{}finally{y.current=!1}},[]),E=(0,_.useCallback)(e=>{C.current||=window.requestAnimationFrame(()=>{C.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<$p&&T()})},[T]);(0,_.useEffect)(()=>{let e=S.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&T()},{root:e.parentElement,rootMargin:`${$p}px 0px`});return t.observe(e),()=>t.disconnect()},[T]),(0,_.useEffect)(()=>{if(o.length>=c)return;let e=window.setTimeout(()=>{let e=S.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<$p&&T()},200);return()=>window.clearTimeout(e)},[o.length,c,T]);let D=(0,_.useMemo)(()=>({path:``,parent:null,entries:o.map(rm),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[o]),ee=(0,_.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),O=(0,_.useCallback)(e=>{rr(e)},[]),te=(0,_.useCallback)(e=>{let t=im(e.modified);return{id:t,label:t}},[]),k=()=>{h(!0),w(!0).finally(()=>h(!1))},A=o.length<c;return(0,G.jsxs)(am,{children:[(0,G.jsxs)(om,{children:[(0,G.jsxs)(sm,{children:[(0,G.jsx)(`span`,{children:a(`Gallery`)}),(0,G.jsx)(cm,{children:u?a(`scanning…`):a(`{shown} of {total} pictures`,{shown:o.length,total:c})})]}),(0,G.jsx)(lm,{onClick:k,title:a(`Scan the folders again`),type:`button`,children:(0,G.jsx)(um,{$spinning:m,children:(0,G.jsx)(wo,{size:14})})})]}),f&&(0,G.jsx)(fm,{children:f}),!f&&!u&&c===0&&(0,G.jsx)(fm,{children:a(`No pictures found.`)}),!f&&(u||c>0)&&(0,G.jsx)(hl,{confirmDelete:n,listing:u&&o.length===0?null:D,loading:u,error:null,view:ee,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSort:()=>void 0,onOpen:O,onOpenFile:O,onRefresh:k,groupOf:te,onGridScroll:E,gridFooter:(0,G.jsx)(dm,{$space:A?tm:1,ref:S}),allowBackgroundMenu:!1})]})}function rm(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function im(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(Yi(),{weekday:`long`}):t.toLocaleDateString(Yi(),{year:`numeric`,month:`long`,day:`numeric`})}var am=U.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,om=U.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,sm=U.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,cm=U.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,lm=U.button`
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
`,um=U.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,dm=U.div`
    height: ${({$space:e})=>e}px;
`,fm=U.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function pm({places:e,drives:t,recent:n,recentLimit:r,currentPath:i,activeKind:a,homePath:o=``,version:s=0,historyVersion:c=0,onNavigate:l,onOpenView:u}){let[d,f]=(0,_.useState)([]),p=Kn(),[m,h]=(0,_.useState)(null),g=ia();(0,_.useEffect)(()=>{Dr().then(e=>{h(e),f(xc(e).filter(e=>e.pinned))},()=>{h(null),f([])})},[s]);let v=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>ym(e.path,t));return{name:m?.placeNames?.[t]??n?.name??(Qi(t)||t),path:t,kind:`folder`,icon:n?.icon??m?.placeIcons?.[t]??null}}),y=a===`files`;return(0,G.jsxs)(bm,{children:[(0,G.jsxs)(xm,{children:[(0,G.jsxs)(Em,{$active:a===`home`,onClick:()=>u(`home`),title:p(`Overview`),type:`button`,children:[(0,G.jsx)(Zo,{}),(0,G.jsx)(Om,{children:p(`Overview`)})]}),(0,G.jsxs)(Em,{$active:a===`recycle`,onClick:()=>u(`recycle`),title:p(`Recycle Bin`),type:`button`,children:[(0,G.jsx)(Po,{}),(0,G.jsx)(Om,{children:p(`Recycle Bin`)})]}),(0,G.jsxs)(Em,{$active:a===`gallery`,onClick:()=>u(`gallery`),title:p(`Gallery`),type:`button`,children:[(0,G.jsx)(zo,{}),(0,G.jsx)(Om,{children:p(`Gallery`)})]})]}),d.map(e=>(0,G.jsxs)(Cm,{children:[(0,G.jsxs)(Em,{as:`div`,$active:!1,children:[(0,G.jsx)(Dm,{children:(0,G.jsx)(Cc,{panel:e,size:16})}),(0,G.jsx)(Om,{children:p(e.title)})]}),(0,G.jsx)(wm,{children:(0,G.jsxs)(Tm,{children:[e.kind===`quick`&&v(e).map(e=>(0,G.jsxs)(Em,{$active:y&&ym(i,e.path),onClick:t=>l(e.path,di(t)),title:e.path,type:`button`,children:[(0,G.jsx)(wc,{place:e}),(0,G.jsx)(Om,{children:e.name})]},e.path)),e.kind===`recent`&&n.slice(0,r).map(e=>{let t=aa(g,e.path);return(0,G.jsxs)(Em,{$active:y&&ym(i,e.path),onClick:t=>e.isDirectory?l(e.path,di(t)):void rr(e.path),title:e.path,type:`button`,children:[t&&g.useIcons?(0,G.jsx)(wc,{place:t}):(0,G.jsx)(Vc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,G.jsx)(Om,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,G.jsx)(gm,{historyVersion:c,onNavigate:l}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,G.jsxs)(Em,{$active:y&&ym(i,e.name),onClick:t=>l(e.name,di(t)),title:e.name,type:`button`,children:[(0,G.jsx)(xo,{}),(0,G.jsxs)(Om,{children:[ta(e),(0,G.jsxs)(km,{children:[Ji(e.freeSpace),` free`]}),(0,G.jsx)(Am,{children:(0,G.jsx)(jm,{$used:t,$tone:Zi(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,G.jsx)(_m,{onNavigate:l,path:e.path||o})]})})]},e.id)),(0,G.jsx)(Sm,{children:(0,G.jsxs)(Em,{$active:a===`settings`,onClick:()=>u(`settings`),title:p(`Settings`),type:`button`,children:[(0,G.jsx)(ko,{}),(0,G.jsx)(Om,{children:p(`Settings`)})]})})]})}var mm=10,hm=40;function gm({historyVersion:e=0,onNavigate:t}){let n=Kn(),[r,i]=(0,_.useState)(null),a=ia();return(0,_.useEffect)(()=>{br().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=aa(a,e.path);return(0,G.jsxs)(Em,{$active:!1,onClick:n=>t(e.path,di(n)),title:qi(n,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,G.jsx)(wc,{place:r}):(0,G.jsx)(Vc,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,G.jsx)(Om,{children:r?.name||e.name})]},e.path)})}function _m({path:e,onNavigate:t}){let[n,r]=(0,_.useState)(null);(0,_.useEffect)(()=>{e&&(r(null),ir(e,!1).then(r,()=>r(null)))},[e]),(0,_.useEffect)(()=>{if(e&&W.available)return W.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&ym(n.data.path,e)&&ir(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,mm),o=i.filter(e=>!e.isDirectory).slice(0,hm);return(0,G.jsxs)(G.Fragment,{children:[a.map(e=>(0,G.jsx)(vm,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,G.jsx)(vm,{entry:e,onNavigate:t},e.fullPath))]})}function vm({entry:e,onNavigate:t}){let n=ia(),r=aa(n,e.fullPath);return(0,G.jsxs)(Em,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,di(n)):void rr(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,G.jsx)(wc,{place:r}):(0,G.jsx)(Vc,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,G.jsx)(Om,{children:r?.name||e.name})]})}function ym(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}var bm=U.aside`
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

    &:not(:hover) ${()=>km},
    &:not(:hover) ${()=>Am} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,xm=U.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,Sm=U(xm)`
    margin-top: auto;
`,Cm=U.div`
    display: flex;
    flex-direction: column;
`,wm=U.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${bm}:hover ${Cm}:hover > & {
        grid-template-rows: 1fr;
    }
`,Tm=U.div`
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
`,Em=U.button`
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
`,Dm=U.span`
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
`,Om=U.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,km=U.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Am=U.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,jm=U.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`;function Mm({tasks:e,onClear:t}){let n=Kn(),[r,i]=(0,_.useState)(!1),a=(0,_.useRef)(null),o=e.filter(e=>e.state===`running`).length;return(0,_.useEffect)(()=>{if(!r)return;let e=e=>{a.current?.contains(e.target)||i(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[r]),(0,G.jsxs)(Pm,{ref:a,children:[(0,G.jsxs)(Fm,{$active:r,onClick:()=>i(e=>!e),title:o>0?qi(n,o,`1 operation running`,`{count} operations running`):n(`Activity`),type:`button`,children:[(0,G.jsx)(No,{size:13}),o>0&&(0,G.jsx)(Im,{children:o>9?`9+`:o})]}),r&&(0,G.jsxs)(Lm,{children:[(0,G.jsxs)(Rm,{children:[(0,G.jsx)(zm,{children:n(`Activity`)}),(0,G.jsxs)(Bm,{children:[(0,G.jsx)(Vm,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:n(`Clear finished`)}),(0,G.jsx)(Hm,{onClick:()=>i(!1),title:n(`Close`),type:`button`,children:(0,G.jsx)(J,{size:10})})]})]}),e.length===0?(0,G.jsx)(Wm,{children:n(`No operations yet.`)}):(0,G.jsx)(Um,{children:e.map(e=>(0,G.jsx)(Nm,{task:e},e.id))})]})]})}function Nm({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,G.jsxs)(Gm,{children:[(0,G.jsxs)(Km,{children:[(0,G.jsx)(qm,{$state:e.state,children:e.state===`done`?(0,G.jsx)(Fo,{size:10}):e.state===`failed`?(0,G.jsx)(J,{size:10}):(0,G.jsx)(Jm,{})}),(0,G.jsx)(Ym,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,G.jsxs)(Xm,{children:[Ji(e.bytesDone),` / `,Ji(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,G.jsxs)(Xm,{children:[e.done,` / `,e.total]})]}),i&&(0,G.jsx)(Zm,{children:(0,G.jsx)(Qm,{$percent:r,$indeterminate:t===0})}),e.error&&(0,G.jsx)($m,{children:e.error})]})}var Pm=U.div`
    position: relative;
    display: flex;
`,Fm=U.button`
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
`,Im=U.span`
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
`,Lm=U.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${ws}
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
`,Rm=U.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,zm=U.span`
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
`,Bm=U.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Vm=U.button`
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
`,Hm=U.button`
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
`,Um=U.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,Wm=U.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Gm=U.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,Km=U.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,qm=U.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,Jm=U.span`
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
`,Ym=U.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Xm=U.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Zm=U.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,Qm=U.div`
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
`,$m=U.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;function eh({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=Kn(),[s,c]=(0,_.useState)(!1),l=(0,_.useRef)(null);(0,_.useEffect)(()=>{if(!s)return;let e=e=>{l.current?.contains(e.target)||c(!1)},t=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[s]),(0,_.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=fl.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,G.jsxs)(th,{ref:l,children:[(0,G.jsx)(nh,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`View`),type:`button`,children:e.mode===`grid`?(0,G.jsx)(Mo,{size:14}):(0,G.jsx)(jo,{size:14})}),s&&(0,G.jsxs)(rh,{children:[(0,G.jsx)(ih,{children:o(`View`)}),(0,G.jsxs)(ah,{children:[(0,G.jsxs)(oh,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,G.jsx)(jo,{size:12}),` `,o(`List`)]}),(0,G.jsxs)(oh,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,G.jsx)(Mo,{size:12}),` `,o(`Grid`)]})]}),(0,G.jsx)(ih,{children:o(`List icon size`)}),(0,G.jsxs)(sh,{children:[(0,G.jsx)(`input`,{"aria-label":o(`List icon size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,G.jsxs)(ch,{children:[e.iconSize,`px`]})]}),(0,G.jsx)(ih,{children:o(`Grid size`)}),(0,G.jsxs)(sh,{children:[(0,G.jsx)(`input`,{"aria-label":o(`Grid size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,G.jsxs)(ch,{children:[e.gridSize,`px`]})]}),(0,G.jsxs)(ih,{children:[o(`Columns`),(0,G.jsx)(Tf,{})]}),fl.map(e=>(0,G.jsxs)(lh,{children:[(0,G.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,G.jsx)(`span`,{children:e.label})]},e.id)),(0,G.jsxs)(lh,{children:[(0,G.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,G.jsx)(`span`,{children:o(`Link target after the name`)})]}),(0,G.jsxs)(ih,{children:[o(`Preview panel`),(0,G.jsx)(Tf,{})]}),(0,G.jsxs)(lh,{children:[(0,G.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,G.jsx)(`span`,{children:o(`Preview under the list`)})]})]})]})}var th=U.div`
    position: relative;
    display: flex;
    height: 100%;
`,nh=U.button`
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
`,rh=U.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${ws}
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
`,ih=U.div`
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
`,ah=U.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,oh=U.button`
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
`,sh=U.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,ch=U.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,lh=U.label`
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
`,uh=e=>(0,G.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,G.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),dh=e=>(0,G.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,G.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),fh=e=>(0,G.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,G.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),ph=e=>(0,G.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,G.jsx)(`path`,{d:`M2 5h6`})}),mh=e=>(0,G.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,G.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),hh=e=>(0,G.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,G.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,G.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function gh({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,view:o,onViewChange:s,onColumns:c,showImages:l,onShowImages:u,tasks:d,onClearTasks:f,trayCount:p,trayVisible:m,onToggleTray:h,split:g,canSplit:v,onToggleSplit:y,details:b,canDetails:x,onToggleDetails:S,shortcuts:C}){let w=Kn(),T=Yn(),E=Xn(),[D,ee]=(0,_.useState)({left:!1,right:!1}),[O,te]=(0,_.useState)(null),k=(0,_.useRef)(null),A=(0,_.useRef)(null),ne=(0,_.useCallback)(()=>{let e=k.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;ee(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,_.useEffect)(()=>{ne();let e=k.current;if(!e)return;let t=new ResizeObserver(ne);return t.observe(e),()=>t.disconnect()},[ne,e.length]),(0,_.useEffect)(()=>{A.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let re=e=>k.current?.scrollBy({left:e,behavior:`smooth`});return(0,G.jsxs)(yh,{children:[(0,G.jsx)(bh,{children:(0,G.jsx)(Io,{size:19})}),(0,G.jsxs)(xh,{children:[D.left&&(0,G.jsx)(Ch,{onClick:()=>re(-180),title:w(`Scroll tabs left`),type:`button`,children:(0,G.jsx)(uh,{})}),(0,G.jsx)(Sh,{onScroll:ne,onWheel:e=>{let t=k.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:k,children:e.map(e=>(0,G.jsxs)(wh,{$active:e.id===t,$dragging:O===e.id,$split:!!e.split,draggable:!0,onDragEnd:()=>te(null),onDragOver:e=>{O&&e.preventDefault()},onDragStart:()=>te(e.id),onDrop:t=>{t.preventDefault(),O&&a(O,e.id),te(null)},onClick:()=>n(e.id),ref:e.id===t?A:void 0,title:e.path||e.title,type:`button`,children:[(0,G.jsx)(_h,{tab:e}),(0,G.jsx)(Th,{children:e.title}),e.partner&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(Eh,{children:`|`}),(0,G.jsx)(vh,{place:e.partner.place}),(0,G.jsx)(Th,{children:e.partner.title})]}),(0,G.jsx)(Dh,{"data-shortcut":pi(C.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:w(`Close tab`),children:(0,G.jsx)(fh,{})})]},e.id))}),D.right&&(0,G.jsx)(Ch,{onClick:()=>re(180),title:w(`Scroll tabs right`),type:`button`,children:(0,G.jsx)(dh,{})}),(0,G.jsx)(Oh,{"data-shortcut":pi(C.newTab),onClick:i,title:w(`New tab`),type:`button`,children:(0,G.jsx)(To,{size:13})})]}),(0,G.jsx)(kh,{...E}),(0,G.jsxs)(Ah,{children:[(0,G.jsx)(Mh,{$active:g,"data-shortcut":pi(C.splitView),disabled:!v,onClick:y,title:w(g?`Close split view`:`Split view`),type:`button`,children:(0,G.jsx)(xs,{size:15})}),(0,G.jsx)(Mh,{$active:b,disabled:!x,onClick:S,title:w(b?`Hide details panel`:`Show details panel`),type:`button`,children:(0,G.jsx)(Ss,{size:15})}),(0,G.jsxs)(jh,{$active:m,onClick:h,title:w(m?`Hide file tray`:`Show file tray`),type:`button`,children:[(0,G.jsx)(ps,{size:14}),p>0&&(0,G.jsx)(Nh,{children:p>9?`9+`:p})]}),(0,G.jsx)(Mm,{tasks:d,onClear:f}),(0,G.jsx)(eh,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:s,onColumns:c,onShowImages:u,showImages:l,view:o}),(0,G.jsx)(Ph,{onClick:T.minimize,title:w(`Minimize`),type:`button`,children:(0,G.jsx)(ph,{})}),(0,G.jsx)(Ph,{onClick:T.toggleMaximize,title:T.maximized?w(`Restore`):w(`Maximize`),type:`button`,children:T.maximized?(0,G.jsx)(hh,{}):(0,G.jsx)(mh,{})}),(0,G.jsx)(Fh,{onClick:T.close,title:w(`Close`),type:`button`,children:(0,G.jsx)(fh,{})})]})]})}function _h({tab:e}){switch(e.kind){case`home`:return(0,G.jsx)(vo,{size:13});case`settings`:return(0,G.jsx)(ko,{size:13});case`recycle`:return(0,G.jsx)(Po,{size:13});default:return(0,G.jsx)(vh,{place:e.place})}}function vh({place:e}){return e?(0,G.jsx)(wc,{place:e,size:13}):(0,G.jsx)(yo,{size:13})}var yh=U.header`
    display: flex;
    align-items: stretch;
    height: 44px;
    flex-shrink: 0;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,bh=U.span`
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
`,xh=U.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,Sh=U.div`
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
`,Ch=U.button`
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
`,wh=U.button`
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
`,Th=U.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Eh=U.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,Dh=U.span`
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
`,Oh=U.button`
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
`,kh=U.div`
    flex: 1;
    min-width: 28px;
`,Ah=U.div`
    display: flex;
    flex-shrink: 0;
`,jh=U.button`
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
`,Mh=U.button`
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
`,Nh=U.span`
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
`,Ph=U.button`
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
`,Fh=U(Ph)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function Ih(){let[e,t]=(0,_.useState)(null),n=(0,_.useRef)(null),r=(0,_.useRef)(void 0);return(0,_.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,Cs.createPortal)((0,G.jsx)(Lh,{tooltip:e}),document.body):null}function Lh({tooltip:e}){let t=(0,_.useRef)(null),[n,r]=(0,_.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,_.useState)(()=>e.bottom+6);return(0,_.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,G.jsxs)(Rh,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,G.jsx)(zh,{children:e.text}),e.shortcut&&(0,G.jsx)(Bh,{children:e.shortcut})]})}var Rh=U.div`
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
`,zh=U.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,Bh=U.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,Vh={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`},Hh=`yafm://`,Uh={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`},Wh=0;function Gh(e){return`${Hh}${e===`home`?`overview`:e}`}function Kh(e){return e.toLowerCase().startsWith(Hh)?Uh[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function qh(e){let t=e.trim();if(t.length===0)return null;if(!t.toLowerCase().startsWith(Hh))return t;let n=Uh[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?Gh(n):null}function Jh(e){return e.history[e.index]??Gh(`home`)}function Yh(e){return Kh(Jh(e))??`files`}function Xh(e){let t=Jh(e);return Kh(t)?``:e.listing?.path||t}function Zh(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||Yh(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function Qh(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function $h(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||er.iconSize,gridSize:e.view?.gridSize||t.gridSize||er.gridSize,sort:e.view?.sort??er.sort,sortDescending:e.view?.sortDescending??er.sortDescending,columns:t.columns??tr.columns??[]}}function eg(e=Gh(`home`)){return Wh+=1,{id:`tab-${Wh}`,listing:null,loading:!Kh(e),error:null,history:[e],index:0,fresh:!0,view:null}}function tg(e){return e instanceof Error?e.message:String(e)}function ng(e,t){let n=e=>e.replace(/[\\/]+/g,`\\`).replace(/\\$/,``).toLowerCase();return n(e)===n(t)}function rg(e){let t=e.replace(/[\\/]+$/,``);if(t.length===0)return null;let n=Math.max(t.lastIndexOf(`\\`),t.lastIndexOf(`/`));return n<0?null:n===2&&t[1]===`:`?`${t.slice(0,2)}\\`:t.slice(0,n)}function ig(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return qi(e,t.entries.length,`1 item · {size}`,`{count} items · {size}`,{size:Ji(n)})}function ag(){let e=Kn(),[t,n]=(0,_.useState)(()=>[eg()]),[r,i]=(0,_.useState)(()=>t[0].id),[a,o]=(0,_.useState)(()=>{let e=sa(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[s,c]=(0,_.useState)([]),[l,u]=(0,_.useState)([]),[d,f]=(0,_.useState)(null),p=Zn(),[m,h]=(0,_.useState)(Mi),[g,v]=(0,_.useState)(0),[y,b]=(0,_.useState)(0),[x,S]=(0,_.useState)([]),[C,w]=(0,_.useState)(10),[T,E]=(0,_.useState)(null),[D,ee]=(0,_.useState)(0),[O,te]=(0,_.useState)(ci),[k,A]=(0,_.useState)(0),[ne,re]=(0,_.useState)(0),[j,ie]=(0,_.useState)(0),[M,ae]=(0,_.useState)(!0),[N,oe]=(0,_.useState)(()=>{let e=sa(`yafm.preview.width`,320);return e>=220?e:320}),[se,ce]=(0,_.useState)(null),[le,ue]=(0,_.useState)(null),[de,fe]=(0,_.useState)(`primary`),[P,F]=(0,_.useState)(null),[pe,me]=(0,_.useState)([]),[I,L]=(0,_.useState)([]),[R,he]=(0,_.useState)([]),[z,ge]=(0,_.useState)(!1),[_e,ve]=(0,_.useState)(!1),[ye,be]=(0,_.useState)(()=>{let e=la(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?Qh({x:e.x,y:e.y}):Qh({x:Math.max(20,window.innerWidth-340),y:110})}),xe=(0,_.useCallback)(()=>{be(e=>Qh(e)),ve(!0)},[]),Se=t.find(e=>e.id===r)??t[0],B=Yh(Se),Ce=Jh(Se),we=Xh(Se),Te=B===`files`?Se.listing?.parent??rg(we):null,Ee=Se.splitWith?t.find(e=>e.id===Se.splitWith):void 0,De=B===`files`&&Ee!==void 0,Oe=Ee?Xh(Ee):``,ke=Ee?Ee.listing?.parent??rg(Oe):null,Ae=De&&Ee&&de===`secondary`?Ee:Se,je=T?.defaultView??tr,Me=$h(Ae,je);(0,_.useEffect)(()=>{wf(T?.accentColor,T?.secondaryColor)},[T?.accentColor,T?.secondaryColor]),(0,_.useEffect)(()=>{fe(`primary`)},[r]);let Ne=Me.columns.includes(`linkCount`),Pe=(0,_.useMemo)(()=>{let e={},t=xc(T),n={};for(let[e,t]of Object.entries(T?.placeNames??{}))n[$i(e)]=t;for(let t of s)e[$i(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=$i(t),i=s.find(e=>$i(e.path)===r);e[r]={name:n[r]??i?.name??(Qi(t)||t),path:t,kind:`folder`,icon:i?.icon??T?.placeIcons?.[t]??null}}return e},[s,T]),Fe=(0,_.useMemo)(()=>({places:Pe,useIcons:T?.systemIcons===!1}),[Pe,T?.systemIcons]),Ie=T?.defaultView?.showImages??!0,Le=T?.defaultView?.imageStripHeight??tr.imageStripHeight,Re=B===`home`?(0,G.jsx)(Zo,{size:13}):B===`settings`?(0,G.jsx)(ko,{size:13}):B===`recycle`?(0,G.jsx)(Po,{size:13}):B===`gallery`?(0,G.jsx)(zo,{size:13}):void 0,ze=m.open&&m.query.length>0,Be=(0,_.useMemo)(()=>ze&&Ae.listing?Ae.listing.entries.filter(e=>Vi(e.isDirectory?oa(Fe,e.fullPath,e.name):e.name,m)).map(e=>e.fullPath):[],[ze,m,Ae.listing,Fe]);(0,_.useEffect)(()=>{v(0)},[m.query,m.matchCase,m.regex,Ae.listing?.path]);let Ve=Be.length===0?-1:Math.min(g,Be.length-1),He=(0,_.useCallback)(()=>{h(e=>({...e,open:!1,query:``})),v(0)},[]),Ue=(0,_.useCallback)(()=>{h(e=>({...e,open:!0})),b(e=>e+1)},[]),We=(0,_.useCallback)(e=>{h(t=>({...t,open:!0,query:t.open?t.query+e:e})),b(e=>e+1)},[]),Ge=(0,_.useCallback)(e=>{v(t=>Be.length===0?0:(Math.min(t,Be.length-1)+e+Be.length)%Be.length)},[Be.length]),Ke=(0,_.useRef)({tabs:t,activeId:r,activePane:de});Ke.current={tabs:t,activeId:r,activePane:de};let qe=(0,_.useRef)(T);qe.current=T;let Je=(0,_.useRef)(!1),Ye=(0,_.useRef)([]),V=(0,_.useCallback)((e,t)=>{n(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Xe=(0,_.useRef)(new Map),Ze=(0,_.useCallback)(e=>{let t=(Xe.current.get(e)??0)+1;return Xe.current.set(e,t),()=>Xe.current.get(e)===t},[]),Qe=(0,_.useCallback)(async(e,t,n)=>{try{let r=await cr(t,Ne);if(!n()||!r.listing)return;V(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[Ne,V]),$e=(0,_.useCallback)(async(e,t,n=!1)=>{let r=Ze(e);He();let i=!n||!Ke.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;V(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&ng(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&Qe(e,t,r);let o=await ir(t,!0,Ne);if(!r())return;V(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),n||xr(o.path).then(()=>ee(e=>e+1))}catch(i){if(!r())return;let a=Ke.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?Xh(a):``,s=o.replace(/[\\/]+$/,``),c=Math.max(s.lastIndexOf(`\\`),s.lastIndexOf(`/`)),l=c>0?s.slice(0,c):null,u=tg(i);V(e,e=>({listing:{path:o,parent:l,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:u,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[Ze,Ne,V,He,Qe]),et=(0,_.useCallback)((e,t)=>{let n=qh(t);n&&(Kh(n)?(He(),Ze(e),V(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):$e(e,n))},[Ze,$e,V,He]),tt=(0,_.useCallback)(async(e,t,n)=>{if(He(),Kh(t)){Ze(e),V(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Ze(e);V(e,()=>({index:n,listing:null,loading:!0,error:null}));try{if(await Qe(e,t,r),!r())return;let n=await ir(t,!0,Ne);if(!r())return;V(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(n){if(!r())return;let i=t.replace(/[\\/]+$/,``),a=Math.max(i.lastIndexOf(`\\`),i.lastIndexOf(`/`));V(e,()=>({listing:{path:t,parent:a>0?i.slice(0,a):null,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:tg(n)}))}},[Ze,Ne,V,He,Qe]),nt=(0,_.useCallback)((e,t=!0)=>{let r=eg(e??Gh(`home`));n(e=>[...e,r]),t&&i(r.id),e&&$e(r.id,e)},[$e]),rt=(0,_.useCallback)(e=>{et(Ke.current.activeId,Gh(e))},[et]),it=(0,_.useCallback)(e=>{let{tabs:t,activeId:r}=Ke.current,a=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==a?.splitWith);if(o.length===0){let e=eg();n([e]),i(e.id);return}let s=t.findIndex(t=>t.id===e);n(o),r===e&&i(o[Math.min(s,o.length-1)].id)},[]),at=(0,_.useCallback)((e,t=!1)=>{t?nt(e):et(Zh(Ke.current),e??Gh(`home`))},[et,nt]),ot=(0,_.useCallback)(e=>{let{tabs:t,activeId:n}=Ke.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let a=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;i(r[a].id)},[]),st=(0,_.useCallback)(()=>{let{tabs:e,activeId:t}=Ke.current,r=e.find(e=>e.id===t);if(!r||Yh(r)!==`files`)return;let i=r.splitWith?e.find(e=>e.id===r.splitWith):void 0;if(i){n(e=>e.filter(e=>e.id!==i.id)),V(t,()=>({splitWith:void 0})),fe(`primary`);return}let a=Xh(r),o={...eg(a),hidden:!0};n(e=>[...e,o]),V(t,()=>({splitWith:o.id})),$e(o.id,a),fe(`primary`)},[$e,V]),ct=(0,_.useCallback)(e=>{oe(e),ca(`yafm.preview.width`,e)},[]),lt=De?de===`secondary`?le??se:se??le:se,ut=(0,_.useRef)(null),dt=e=>{e.preventDefault();let t=ut.current?.getBoundingClientRect();if(!t)return;let n=M?N:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);o(n),ca(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},ft=(e,t,n)=>{t&&F({x:e.clientX,y:e.clientY,directory:t,refresh:n})},pt=async e=>{let t=P;F(null),t&&(e?await Jr(t.directory):await qr(t.directory)).ok&&t.refresh()},mt=P?[{label:e(`New folder`),icon:(0,G.jsx)(yo,{size:14}),shortcut:pi(O.newFolder),onSelect:()=>void pt(!1)},{label:e(`New file`),icon:(0,G.jsx)(bo,{size:14}),onSelect:()=>void pt(!0)}]:[],ht=(0,_.useCallback)(()=>{let{tabs:e}=Ke.current,t=e.find(e=>e.id===Zh(Ke.current));t&&t.index>0&&tt(t.id,t.history[t.index-1],t.index-1)},[tt]),gt=(0,_.useCallback)(()=>{let{tabs:e}=Ke.current,t=e.find(e=>e.id===Zh(Ke.current));t&&t.index<t.history.length-1&&tt(t.id,t.history[t.index+1],t.index+1)},[tt]),_t=(0,_.useCallback)(()=>{let{tabs:e}=Ke.current,t=e.find(e=>e.id===Zh(Ke.current));t&&Yh(t)===`files`&&t.listing?.parent&&at(t.listing.parent)},[at]),vt=(0,_.useRef)(null),yt=(0,_.useCallback)(()=>{for(let e of Ke.current.tabs)e.listing&&$e(e.id,e.listing.path,!0)},[$e]),bt=(0,_.useCallback)(e=>{e.length!==0&&(L(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),xe())},[xe]),xt=(0,_.useCallback)(async e=>{let t=await Ur(e);t.length!==0&&bt(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[bt]),St=(0,_.useCallback)(e=>{let t=new Set(e);L(e=>e.filter(e=>!t.has(e.path)))},[]),Ct=(0,_.useCallback)(()=>L([]),[]),wt=(0,_.useRef)(-1),Tt=(0,_.useCallback)(e=>{he(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),ge(e.move),e.entries.length>0&&xe()},[xe]),Et=(0,_.useCallback)(async()=>{if(W.available)try{let e=await Vr();wt.current=e.sequence,Tt(e)}catch{}},[Tt]),Dt=(0,_.useCallback)(async e=>{e.length!==0&&await zr(e,!1)&&await Et()},[Et]),H=(0,_.useRef)(I);H.current=I,(0,_.useEffect)(()=>{let e=e=>{e.dataTransfer?.types.some(e=>e.toLowerCase()===`application/x-yafm-paths`)&&xe()};return window.addEventListener(`dragstart`,e),()=>window.removeEventListener(`dragstart`,e)},[xe]),(0,_.useEffect)(()=>{let e=()=>be(e=>Qh(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Ot=(0,_.useCallback)(async()=>{let e=H.current;if(e.length>0){let t=await Ur(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));L(e=>e.filter(e=>n.has(e.path)))}await Et()},[Et]),kt=(0,_.useCallback)(e=>{let t=Qh(e);be(t),ua(`yafm.tray.position`,t)},[]),At=(0,_.useCallback)(()=>{_e?ve(!1):xe()},[xe,_e]),jt=(0,_.useCallback)(async(t,n,r)=>{let i=await Hr(t,n,r);i.ok?(r&&St(t),ie(e=>e+1),yt(),Et()):window.alert(i.error??e(`The files could not be transferred.`))},[yt,Et,St]);(0,_.useEffect)(()=>{if(W.available)return oi().then(me,()=>void 0),W.on(e=>{let t=e;t.type===`app.tasks.changed`&&Array.isArray(t.data?.tasks)&&me(t.data.tasks)})},[]);let Mt=(0,_.useCallback)(()=>{si().then(()=>oi().then(me,()=>void 0))},[]);(0,_.useEffect)(()=>{if(!W.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await Vr();if(!e||t.sequence===wt.current)return;wt.current=t.sequence,Tt(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Tt]);let Nt=(0,_.useCallback)(async e=>{let t=e?await ei():await ti();t.ok?(ie(e=>e+1),yt()):t.error&&!t.error.startsWith(`Nothing to`)&&window.alert(t.error)},[yt]),Pt=(0,_.useRef)(Ne);(0,_.useEffect)(()=>{Pt.current!==Ne&&(Pt.current=Ne,yt())},[Ne,yt]);let Ft=(0,_.useCallback)((e,t)=>{let{tabs:n}=Ke.current,r=n.find(t=>t.id===e);if(!r||Yh(r)!==`files`)return;let i=Xh(r),a=qe.current?.defaultView??tr,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||er.iconSize,gridSize:r.view?.gridSize||a.gridSize||er.gridSize,sort:r.view?.sort??er.sort,sortDescending:r.view?.sortDescending??er.sortDescending,...t};V(e,()=>({view:o})),vt.current!==null&&window.clearTimeout(vt.current),vt.current=window.setTimeout(()=>{vt.current=null,or(i,o)},250)},[V]),It=(0,_.useCallback)(e=>{Ft(Zh(Ke.current),e)},[Ft]),Lt=(0,_.useCallback)(e=>{let t=qe.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??tr,columns:e}};E(n),Or(n)},[]),Rt=(0,_.useCallback)(e=>{let t=qe.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??tr,showImages:e}};E(n),Or(n)},[]),zt=(0,_.useCallback)(e=>{let t=qe.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??tr,imageStripHeight:e}};E(n),Or(n)},[]),Bt=(0,_.useCallback)((e,t,n,r)=>{let i=Ke.current.tabs.find(t=>t.id===e);if(!i||Yh(i)!==`files`||!i.listing)return;let a=Xh(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));V(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),sr(a,t,n,r)},[V]),Vt=(0,_.useCallback)((e,t)=>{let n=Ke.current.tabs.find(t=>t.id===e);if(!n)return;let r=$h(n,qe.current?.defaultView??tr);Ft(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[Ft]),Ht=(0,_.useCallback)((e,t)=>{n(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),Ut=(0,_.useCallback)(()=>{lr().then(c,()=>c([]))},[]),Wt=(0,_.useCallback)(e=>{let t=(e.openTabs??[]).map(qh).filter(e=>e!==null);if(t.length===0)return!1;let r=t.map(e=>({...eg(e),fresh:!1})),a=Math.min(Math.max(e.activeTab??0,0),r.length-1);n(r),i(r[a].id);for(let e of r)Yh(e)===`files`&&$e(e.id,Xh(e),!0);return!0},[$e]),Gt=(0,_.useCallback)(e=>{let t=Ye.current;if(Ye.current=[],t.length===0)return;let{tabs:n}=Ke.current;if(!e&&n.length===1&&n[0].fresh){et(n[0].id,t[0]);for(let e of t.slice(1))nt(e)}else for(let e of t)nt(e)},[nt,et]),Kt=(0,_.useCallback)(()=>{Dr().then(e=>{E(e),w(e.recentLimit);let t={...ci,...e.shortcuts};te(t),ui(t.openInNewTab),A(e=>e+1),Je.current||(Je.current=!0,Gt(e.restoreTabs&&Wt(e)))},()=>{w(10),Je.current=!0,Gt(!1)})},[Gt,Wt]),qt=(0,_.useCallback)(()=>{yr().then(S,()=>S([]))},[]),Jt=(0,_.useCallback)(()=>{ur().then(u,()=>u([]))},[]),Yt=t.filter(e=>!e.hidden),Xt=Yt.map(Jh),Zt=Xt.join(`
`),Qt=Math.max(Yt.findIndex(e=>e.id===r),0);(0,_.useEffect)(()=>{if(!T?.restoreTabs)return;let e=setTimeout(()=>void kr(Xt,Qt),700);return()=>clearTimeout(e)},[Zt,Qt,T?.restoreTabs]),(0,_.useEffect)(()=>{let{tabs:e,activeId:t}=Ke.current,n=e.find(e=>e.id===t);n&&Yh(n)===`files`&&$e(n.id,void 0,!0),Ut(),Kt(),Jt(),Pr().then(f,()=>f(null))},[$e,Ut,Kt,Jt]),(0,_.useEffect)(()=>{let e=setInterval(Jt,3e4);return()=>clearInterval(e)},[Jt]),(0,_.useEffect)(()=>{B===`home`&&(qt(),Jt())},[B,Se.id,qt,Jt]),(0,_.useEffect)(()=>{if(!W.available)return;let e=W.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=Ke.current,i=t.data.startup===!0;i&&!Je.current?Ye.current.push(n):i&&r.length===1&&r[0].fresh?et(r[0].id,n):nt(n)});return W.send({type:`app.ready`}),e},[et,nt]),(0,_.useEffect)(()=>{if(W.available)return W.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:r,sizes:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},n})})},[]),(0,_.useEffect)(()=>{if(W.available)return W.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:r,counts:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},n})})},[]),(0,_.useEffect)(()=>{let e=e=>{if(hi(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),ht();return}if(e.key===`BrowserForward`){e.preventDefault(),gt();return}if(e.key===`Escape`&&m.open){e.preventDefault(),He();return}let t=fi(e);if(t===O.closeTab)e.preventDefault(),it(Zh(Ke.current));else if(t===O.newTab)e.preventDefault(),nt();else if(t===O.goBack)e.preventDefault(),ht();else if(t===O.goForward)e.preventDefault(),gt();else if(t===O.goUp)e.preventDefault(),_t();else if(t===O.find)e.preventDefault(),Ue();else if(t===O.location)e.preventDefault(),re(e=>e+1);else if(t===O.home){e.preventDefault();let t=s.find(e=>e.kind===`home`)?.path;t&&at(t)}else t===O.iconsView?(e.preventDefault(),B===`files`&&It({mode:`grid`})):t===O.detailsView?(e.preventDefault(),B===`files`&&It({mode:`list`})):t===O.nextTab?(e.preventDefault(),ot(1)):t===O.previousTab?(e.preventDefault(),ot(-1)):t===O.hidden||t===`alt+.`?(e.preventDefault(),Tr().then(()=>{ie(e=>e+1),yt()})):t===O.undo?(e.preventDefault(),Nt(!0)):t===O.redo?(e.preventDefault(),Nt(!1)):t===O.splitView?(e.preventDefault(),st()):B!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),We(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[O,B,m.open,it,nt,ht,gt,_t,Ue,He,We,It,ot,at,s,yt,Nt,st]),(0,_.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),ht()):e.button===4&&(e.preventDefault(),gt())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[ht,gt]),(0,_.useEffect)(()=>{W.available&&B===`files`&&W.send({type:`fs.watch`,payload:{paths:[Ce]}})},[B,Ce]),(0,_.useEffect)(()=>{if(W.available)return W.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let{tabs:n,activeId:r}=Ke.current,i=n.find(e=>e.id===r);i&&Yh(i)===`files`&&ng(Xh(i),t.data.path)&&ir(t.data.path,!1,Ne).then(e=>{let t=Ke.current.tabs.find(e=>e.id===i.id);t&&Yh(t)===`files`&&!t.loading&&ng(Xh(t),e.path)&&V(i.id,()=>({listing:e}))},()=>void 0)})},[Ne,V]);let $t=Se.index>0,en=Se.index<Se.history.length-1,tn=(e,t)=>{let n=$h(e,je);return(0,G.jsx)(hl,{confirmDelete:T?.confirmDelete??!1,previewVideoAudio:T?.previewVideoAudio??!1,previewVideoAutoplay:T?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?ce:ue,onActivate:()=>fe(t?`primary`:`secondary`),enableShortcuts:!De||(t?de===`primary`:de===`secondary`),error:e.error,find:e.id===Ae.id?{...m,currentPath:Ve<0?null:Be[Ve]}:void 0,imageStripHeight:Le,listing:e.listing,loading:e.loading,onImageStripHeight:zt,onOpen:(t,n)=>{n?nt(t):$e(e.id,t)},onOpenFile:e=>void rr(e),onRefresh:()=>{e.listing&&$e(e.id,e.listing.path,!0)},onSetTags:(t,n,r)=>Bt(e.id,t,n,r),onSort:t=>Vt(e.id,t),onPaste:Ot,onClipboardChanged:()=>void Et(),onTransfer:jt,openOnSingleClick:T?.openOnSingleClick??!1,refreshToken:j,shortcuts:O,showCheckboxes:T?.showCheckboxes??!0,showImages:Ie,view:n})},nn=m.open&&(0,G.jsx)(wu,{current:Ve,focusToken:y,matchCase:m.matchCase,mode:m.mode,onClose:He,onMatchCase:()=>h(e=>({...e,matchCase:!e.matchCase})),onMode:()=>h(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Ge(1),onPrevious:()=>Ge(-1),onQuery:e=>h(t=>({...t,query:e})),onRegex:()=>h(e=>({...e,regex:!e.regex})),query:m.query,regex:m.regex,total:Be.length}),rn=(0,G.jsxs)(lg,{children:[(0,G.jsx)(ug,{"data-shortcut":pi(O.goBack),disabled:!$t,onClick:ht,title:e(`Back`),type:`button`,children:(0,G.jsx)(Eo,{})}),(0,G.jsx)(ug,{"data-shortcut":pi(O.goForward),disabled:!en,onClick:gt,title:e(`Forward`),type:`button`,children:(0,G.jsx)(Do,{})}),(0,G.jsx)(ug,{"data-shortcut":pi(O.goUp),disabled:B!==`files`||!Te,onClick:()=>Te&&at(Te),title:e(`Up one level`),type:`button`,children:(0,G.jsx)(Co,{})}),(0,G.jsx)(Sd,{focusToken:ne,icon:Re,label:B===`files`?void 0:e(Vh[B]),onNavigate:at,path:B===`files`?we:Ce}),B===`files`&&(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(ug,{onClick:e=>ft(e,we,()=>void $e(Se.id,we,!0)),title:e(`New folder or file`),type:`button`,children:(0,G.jsx)(To,{})}),(0,G.jsx)(ug,{"data-shortcut":pi(O.find),onClick:Ue,title:e(`Search`),type:`button`,children:(0,G.jsx)(So,{})})]})]});return(0,G.jsx)(ra,{value:Fe,children:(0,G.jsxs)(og,{$rounded:p,children:[(0,G.jsx)(gh,{activeId:Se.id,onClose:it,onNewTab:()=>nt(),onReorder:Ht,onSelect:i,onViewChange:It,onColumns:Lt,onShowImages:Rt,showImages:Ie,tasks:pe,onClearTasks:Mt,trayCount:I.length+R.length,trayVisible:_e,onToggleTray:At,split:De,canSplit:B===`files`,onToggleSplit:st,details:M,canDetails:B===`files`||B===`recycle`,onToggleDetails:()=>ae(e=>!e),shortcuts:O,view:Me,tabs:t.filter(e=>!e.hidden).map(n=>{let r=Yh(n),i=Xh(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?Xh(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?aa(Fe,i):void 0,split:!!a,title:r===`files`?oa(Fe,i,Qi(i)||e(`Files`)):e(Vh[r]),partner:a?{title:oa(Fe,o,Qi(o)||e(`Files`)),place:aa(Fe,o)}:void 0}})}),(0,G.jsxs)(sg,{children:[(0,G.jsx)(pm,{activeKind:B,currentPath:B===`files`?Ce:``,drives:l,historyVersion:D,onNavigate:e=>at(e),onOpenView:rt,homePath:s.find(e=>e.kind===`home`)?.path??``,places:s,recent:x,recentLimit:C,version:k}),(0,G.jsxs)(cg,{children:[B!==`files`&&rn,B===`files`?De&&Ee?(0,G.jsxs)(fg,{ref:ut,children:[(0,G.jsxs)(pg,{style:{flex:a},children:[(0,G.jsxs)(dg,{$active:de===`primary`,onPointerDown:()=>fe(`primary`),children:[(0,G.jsx)(ug,{"data-shortcut":pi(O.goBack),disabled:!$t,onClick:()=>{let e=Se.index-1;e>=0&&tt(Se.id,Se.history[e],e)},title:e(`Back`),type:`button`,children:(0,G.jsx)(Eo,{})}),(0,G.jsx)(ug,{"data-shortcut":pi(O.goForward),disabled:!en,onClick:()=>{let e=Se.index+1;e<Se.history.length&&tt(Se.id,Se.history[e],e)},title:e(`Forward`),type:`button`,children:(0,G.jsx)(Do,{})}),(0,G.jsx)(ug,{"data-shortcut":pi(O.goUp),disabled:!Te,onClick:()=>Te&&void $e(Se.id,Te),title:e(`Up one level`),type:`button`,children:(0,G.jsx)(Co,{})}),(0,G.jsx)(Sd,{focusToken:de===`primary`?ne:void 0,onNavigate:e=>void $e(Se.id,e),path:we}),(0,G.jsx)(ug,{onClick:e=>ft(e,we,()=>void $e(Se.id,we,!0)),title:e(`New folder or file`),type:`button`,children:(0,G.jsx)(To,{})}),(0,G.jsx)(ug,{"data-shortcut":pi(O.find),onClick:Ue,title:e(`Search`),type:`button`,children:(0,G.jsx)(So,{})})]}),tn(Se,!0),de===`primary`&&nn]}),(0,G.jsx)(mg,{onDoubleClick:()=>o(.5),onPointerDown:dt,title:e(`Drag to resize; double-click to reset`)}),(0,G.jsxs)(pg,{style:{flex:1-a},children:[(0,G.jsxs)(dg,{$active:de===`secondary`,onPointerDown:()=>fe(`secondary`),children:[(0,G.jsx)(ug,{"data-shortcut":pi(O.goBack),disabled:Ee.index<=0,onClick:()=>{let e=Ee.index-1;e>=0&&tt(Ee.id,Ee.history[e],e)},title:e(`Back`),type:`button`,children:(0,G.jsx)(Eo,{})}),(0,G.jsx)(ug,{"data-shortcut":pi(O.goForward),disabled:Ee.index>=Ee.history.length-1,onClick:()=>{let e=Ee.index+1;e<Ee.history.length&&tt(Ee.id,Ee.history[e],e)},title:e(`Forward`),type:`button`,children:(0,G.jsx)(Do,{})}),(0,G.jsx)(ug,{"data-shortcut":pi(O.goUp),disabled:!ke,onClick:()=>{ke&&$e(Ee.id,ke)},title:e(`Up one level`),type:`button`,children:(0,G.jsx)(Co,{})}),(0,G.jsx)(Sd,{focusToken:de===`secondary`?ne:void 0,onNavigate:e=>void $e(Ee.id,e),path:Oe}),(0,G.jsx)(ug,{onClick:e=>ft(e,Oe,()=>void $e(Ee.id,Oe,!0)),title:e(`New folder or file`),type:`button`,children:(0,G.jsx)(To,{})}),(0,G.jsx)(ug,{"data-shortcut":pi(O.find),onClick:Ue,title:e(`Search`),type:`button`,children:(0,G.jsx)(So,{})})]}),tn(Ee,!1),de===`secondary`&&nn]}),M&&(0,G.jsx)(Js,{info:lt,onWidth:ct,videoAudio:T?.previewVideoAudio??!1,videoAutoplay:T?.previewVideoAutoplay??!1,width:N})]}):(0,G.jsxs)(gg,{children:[(0,G.jsxs)(_g,{children:[rn,(0,G.jsxs)(hg,{children:[tn(Se,!0),nn]})]}),M&&(0,G.jsx)(Js,{info:se,onWidth:ct,videoAudio:T?.previewVideoAudio??!1,videoAutoplay:T?.previewVideoAutoplay??!1,width:N})]}):B===`home`?(0,G.jsx)(_d,{drives:l,historyVersion:D,homePath:s.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:Jt,onHistoryChanged:()=>ee(e=>e+1),onOpen:at,onLayoutChanged:Kt,onPlacesChanged:c,onRecentCleared:qt,places:s,recent:x,recentLimit:C,visibilityVersion:j}):B===`settings`?(0,G.jsx)(Ff,{appInfo:d,onSettingsChanged:Kt}):B===`gallery`?(0,G.jsx)(nm,{confirmDelete:T?.confirmDelete??!1,openOnSingleClick:T?.openOnSingleClick??!1,shortcuts:O,showCheckboxes:T?.showCheckboxes??!0,view:Me}):(0,G.jsx)(Nd,{onOpenLocation:at,onShowDetails:()=>ae(!0),showDetails:M,videoAudio:T?.previewVideoAudio??!1,videoAutoplay:T?.previewVideoAutoplay??!1}),(0,G.jsxs)(vg,{children:[(0,G.jsx)(`span`,{children:B===`files`&&Se.listing?ig(e,Se.listing):``}),(0,G.jsx)(`span`,{children:d?`v${d.version} · ${d.platform}`:`browser preview`})]})]})]}),(0,G.jsx)(Gc,{clipboardItems:R,clipboardMove:z,currentDirectory:B===`files`?Ce:``,items:I,onAdd:e=>void xt(e),onClear:Ct,onClose:()=>ve(!1),onCopyToClipboard:e=>void Dt(e),onPosition:kt,onRemove:St,onTransfer:jt,position:ye,visible:_e}),P&&(0,G.jsx)(Ts,{items:mt,onClose:()=>F(null),x:P.x,y:P.y}),(0,G.jsx)(Ih,{}),(0,G.jsx)($n,{})]})})}var og=U.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    background: var(--bg-primary);

    /* An undecorated window gets no frame from the compositor, so the corners are drawn here. */
    border-radius: ${({$rounded:e})=>e?`12px`:`0`};
    box-shadow: ${({$rounded:e})=>e?`inset 0 0 0 1px var(--border-color), 0 24px 70px rgba(0, 0, 0, 0.38)`:`none`};
`,sg=U.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
    background:
        radial-gradient(1200px 650px at 12% -10%, rgba(var(--accent-secondary-rgb), 0.12), transparent 60%),
        radial-gradient(900px 520px at 110% 18%, rgba(var(--accent-rgb), 0.09), transparent 55%),
        linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-media) 100%);
`,cg=U.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,lg=U.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
`,ug=U.button`
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
`,dg=U.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,fg=U.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,pg=U.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,mg=U.div`
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
`,hg=U.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,gg=U.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,_g=U.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,vg=U.footer`
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
`,yg=document.getElementById(`root`);yg&&(0,v.createRoot)(yg).render((0,G.jsx)(_.StrictMode,{children:(0,G.jsx)(qn,{children:(0,G.jsx)(ag,{})})}));