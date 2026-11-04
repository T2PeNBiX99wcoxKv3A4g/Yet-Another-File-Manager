var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ee(e,t){return D(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var k=/\/+/g;function ne(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function A(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function j(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,j(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ne(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(k,`$&/`)+`/`),j(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=ee(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(k,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ne(a,u),c+=j(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ne(a,u++),c+=j(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return j(A(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function M(e,t,n){if(e==null)return e;var r=[],i=0;return j(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function re(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var N=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function ie(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,N)}catch(e){N(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function P(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else ie(P.bind(null,e))}var ae={map:M,forEach:function(e,t,n){M(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return M(e,function(){t++}),t},toArray:function(e){return M(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=ae,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=P,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:re}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=ie,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,ee());else{var t=n(l);t!==null&&k(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&k(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ee():S=!1}}}var ee;if(typeof y==`function`)ee=function(){y(D)};else if(typeof MessageChannel<`u`){var O=new MessageChannel,te=O.port2;O.port1.onmessage=D,ee=function(){te.postMessage(null)}}else ee=function(){_(D,0)};function k(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,k(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,ee()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function E(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var D=Object.assign,ee=Symbol.for(`react.element`),O=Symbol.for(`react.transitional.element`),te=Symbol.for(`react.portal`),k=Symbol.for(`react.fragment`),ne=Symbol.for(`react.strict_mode`),A=Symbol.for(`react.profiler`),j=Symbol.for(`react.consumer`),M=Symbol.for(`react.context`),re=Symbol.for(`react.forward_ref`),N=Symbol.for(`react.suspense`),ie=Symbol.for(`react.suspense_list`),P=Symbol.for(`react.memo`),ae=Symbol.for(`react.lazy`),oe=Symbol.for(`react.activity`),se=Symbol.for(`react.legacy_hidden`),ce=Symbol.for(`react.memo_cache_sentinel`),le=Symbol.for(`react.view_transition`),ue=Symbol.for(`react.recoverable`),de=Symbol.iterator;function fe(e){return typeof e!=`object`||!e?null:(e=de&&e[de]||e[`@@iterator`],typeof e==`function`?e:null)}var F=Symbol.for(`react.client.reference`);function pe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===F?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case k:return`Fragment`;case A:return`Profiler`;case ne:return`StrictMode`;case N:return`Suspense`;case ie:return`SuspenseList`;case oe:return`Activity`;case le:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case te:return`Portal`;case M:return e.displayName||`Context`;case j:return(e._context.displayName||`Context`)+`.Consumer`;case re:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case P:return t=e.displayName||null,t===null?pe(e.type)||`Memo`:t;case ae:t=e._payload,e=e._init;try{return pe(e(t))}catch{}}return null}var me=Array.isArray,I=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,he={pending:!1,data:null,method:null,action:null},ge=[],_e=-1;function R(e){return{current:e}}function ve(e){0>_e||(e.current=ge[_e],ge[_e]=null,_e--)}function z(e,t){_e++,ge[_e]=e.current,e.current=t}var ye=R(null),be=R(null),xe=R(null),Se=R(null);function Ce(e,t){switch(z(xe,t),z(be,e),z(ye,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?pp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=pp(t),e=mp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ve(ye),z(ye,e)}function we(){ve(ye),ve(be),ve(xe)}function Te(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,z(Se,e)),t=ye.current;var n=mp(t,e.type);t!==n&&(z(be,e),z(ye,n))}function Ee(e){be.current===e&&(ve(ye),ve(be)),Se.current===e&&(ve(Se),sh._currentValue=he)}var De,Oe;function ke(e){if(De===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);De=t&&t[1]||``,Oe=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+De+e+Oe}var Ae=!1;function je(e,t){if(!e||Ae)return``;Ae=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ae=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ke(n):``}function Me(e,t){switch(e.tag){case 26:case 27:case 5:return ke(e.type);case 16:return ke(`Lazy`);case 13:return e.child!==t&&t!==null?ke(`Suspense Fallback`):ke(`Suspense`);case 19:return ke(`SuspenseList`);case 0:case 15:return je(e.type,!1);case 11:return je(e.type.render,!1);case 1:return je(e.type,!0);case 31:return ke(`Activity`);case 30:return ke(`ViewTransition`);default:return``}}function Ne(e){try{var t=``,n=null;do t+=Me(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Pe=Object.prototype.hasOwnProperty,B=t.unstable_scheduleCallback,Fe=t.unstable_cancelCallback,Ie=t.unstable_shouldYield,Le=t.unstable_requestPaint,V=t.unstable_now,Re=t.unstable_getCurrentPriorityLevel,ze=t.unstable_ImmediatePriority,Be=t.unstable_UserBlockingPriority,Ve=t.unstable_NormalPriority,He=t.unstable_LowPriority,Ue=t.unstable_IdlePriority,We=t.log,Ge=t.unstable_setDisableYieldValue,Ke=null,qe=null;function Je(e){if(typeof We==`function`&&Ge(e),qe&&typeof qe.setStrictMode==`function`)try{qe.setStrictMode(Ke,e)}catch{}}var Ye=Math.clz32?Math.clz32:Qe,Xe=Math.log,Ze=Math.LN2;function Qe(e){return e>>>=0,e===0?32:31-(Xe(e)/Ze|0)|0}var $e=256,et=262144,tt=4194304;function nt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function H(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=nt(n))):i=nt(o):i=nt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=nt(n))):i=nt(o)):i=nt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function rt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function it(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-Ye(n),i=1<<r;t|=e[r],n&=~i}return t}function at(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ot(){var e=tt;return tt<<=1,!(tt&62914560)&&(tt=4194304),e}function st(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ct(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function lt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ye(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ut(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ut(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ye(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function dt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ye(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ft(e,t){var n=t&-t;return n=n&42?1:pt(n),(n&(e.suspendedLanes|t))===0?n:0}function pt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function mt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ht(){var e=L.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function gt(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}var _t=Math.random().toString(36).slice(2),vt=`__reactFiber$`+_t,yt=`__reactProps$`+_t,bt=`__reactContainer$`+_t,xt=`__reactEvents$`+_t,St=`__reactListeners$`+_t,Ct=`__reactHandles$`+_t,wt=`__reactResources$`+_t,Tt=`__reactMarker$`+_t,Et=`__reactLoad$`+_t;function Dt(e){delete e[vt],delete e[yt],delete e[St],delete e[Ct]}function Ot(e){var t;if(t=e[vt])return t;for(var n=e.parentNode;n;){if(t=n[bt]||n[vt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hm(e);e!==null;){if(n=e[vt])return n;e=hm(e)}return t}e=n,n=e.parentNode}return null}function kt(e){if(e=e[vt]||e[bt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function At(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function U(e){var t=e[wt];return t||=e[wt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function jt(e){e[Tt]=!0}function Mt(e){e[Et]=void 0}var Nt=new Set,Pt={};function Ft(e,t){It(e,t),It(e+`Capture`,t)}function It(e,t){for(Pt[e]=t,e=0;e<t.length;e++)Nt.add(t[e])}var Lt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Rt={},zt={};function Bt(e){return Pe.call(zt,e)?!0:Pe.call(Rt,e)?!1:Lt.test(e)?zt[e]=!0:(Rt[e]=!0,!1)}var Vt=!1;function Ht(){var e=Vt;return Vt=!1,e}function Ut(e,t,n){if(Bt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Wt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Gt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Kt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function qt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Jt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Yt(e){if(!e._valueTracker){var t=qt(e)?`checked`:`value`;e._valueTracker=Jt(e,t,``+e[t])}}function Xt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=qt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var Zt=/[\n"\\]/g;function Qt(e){return e.replace(Zt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function $t(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Kt(t)):e.value!==``+Kt(t)&&(e.value=``+Kt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):tn(e,Kt(n)):o===`number`&&e.value==t?tn(e,Kt(e.value)):tn(e,Kt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Kt(s):e.removeAttribute(`name`)}function en(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Yt(e);return}n=n==null?``:``+Kt(n),t=t==null?n:``+Kt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Yt(e)}function tn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function nn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Kt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function rn(e,t,n){t!=null&&(t=``+Kt(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+Kt(n)}function an(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(me(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Kt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Yt(e)}function on(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var sn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function cn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||sn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function ln(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,Vt=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(cn(e,a,r),Vt=!0)}else for(var o in t)t.hasOwnProperty(o)&&cn(e,o,t[o])}function un(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var dn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),fn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pn(e){return fn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function mn(){}var hn=null;function gn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _n=null,vn=null;function yn(e){var t=kt(e);if(t&&(e=t.stateNode)){var n=e[yt]||null;a:switch(e=t.stateNode,t.type){case`input`:if($t(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Qt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[yt]||null;if(!a)throw Error(i(90));$t(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Xt(r)}break a;case`textarea`:rn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&nn(e,!!n.multiple,t,!1)}}}var bn=!1;function xn(e,t,n){if(bn)return e(t,n);bn=!0;try{return e(t)}finally{if(bn=!1,(_n!==null||vn!==null)&&(zd(),_n&&(t=_n,e=vn,vn=_n=null,yn(t),e)))for(t=0;t<e.length;t++)yn(e[t])}}function Sn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[yt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var Cn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,wn=!1;if(Cn)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){wn=!0}}),window.addEventListener(`test`,Tn,Tn),window.removeEventListener(`test`,Tn,Tn)}catch{wn=!1}var En=null,Dn=null,On=null;function kn(){if(On)return On;var e,t=Dn,n=t.length,r,i=`value`in En?En.value:En.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return On=i.slice(e,1<r?1-r:void 0)}function An(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function jn(){return!0}function W(){return!1}function Mn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?jn:W,this.isPropagationStopped=W,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=jn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=jn)},persist:function(){},isPersistent:jn}),t}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pn=Mn(Nn),Fn=D({},Nn,{view:0,detail:0}),In=Mn(Fn),Ln,Rn,zn,Bn=D({},Fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==zn&&(zn&&e.type===`mousemove`?(Ln=e.screenX-zn.screenX,Rn=e.screenY-zn.screenY):Rn=Ln=0,zn=e),Ln)},movementY:function(e){return`movementY`in e?e.movementY:Rn}}),Vn=Mn(Bn),Hn=Mn(D({},Bn,{dataTransfer:0})),G=Mn(D({},Fn,{relatedTarget:0})),Un=Mn(D({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0})),K=Mn(D({},Nn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Wn=Mn(D({},Nn,{data:0})),Gn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Kn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},qn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qn[e])?!!t[e]:!1}function Yn(){return Jn}var Xn=Mn(D({},Fn,{key:function(e){if(e.key){var t=Gn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=An(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Kn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yn,charCode:function(e){return e.type===`keypress`?An(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?An(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Zn=Mn(D({},Bn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Qn=Mn(D({},Nn,{submitter:0})),$n=Mn(D({},Fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yn})),er=Mn(D({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0})),tr=Mn(D({},Bn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),nr=Mn(D({},Nn,{newState:0,oldState:0,source:0})),rr=[9,13,27,32],ir=Cn&&`CompositionEvent`in window,ar=null;Cn&&`documentMode`in document&&(ar=document.documentMode);var or=Cn&&`TextEvent`in window&&!ar,sr=Cn&&(!ir||ar&&8<ar&&11>=ar),cr=` `,lr=!1;function ur(e,t){switch(e){case`keyup`:return rr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function dr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var fr=!1;function pr(e,t){switch(e){case`compositionend`:return dr(t);case`keypress`:return t.which===32?(lr=!0,cr):null;case`textInput`:return e=t.data,e===cr&&lr?null:e;default:return null}}function mr(e,t){if(fr)return e===`compositionend`||!ir&&ur(e,t)?(e=kn(),On=Dn=En=null,fr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return sr&&t.locale!==`ko`?null:t.data;default:return null}}var hr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!hr[e.type]:t===`textarea`}function _r(e,t,n,r){_n?vn?vn.push(r):vn=[r]:_n=r,t=Xf(t,`onChange`),0<t.length&&(n=new Pn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var vr=null,yr=null;function br(e){Hf(e,0)}function xr(e){if(Xt(At(e)))return e}function Sr(e,t){if(e===`change`)return t}var Cr=!1;if(Cn){var wr;if(Cn){var Tr=`oninput`in document;if(!Tr){var Er=document.createElement(`div`);Er.setAttribute(`oninput`,`return;`),Tr=typeof Er.oninput==`function`}wr=Tr}else wr=!1;Cr=wr&&(!document.documentMode||9<document.documentMode)}function Dr(){vr&&(vr.detachEvent(`onpropertychange`,Or),yr=vr=null)}function Or(e){if(e.propertyName===`value`&&xr(yr)){var t=[];_r(t,yr,e,gn(e)),xn(br,t)}}function kr(e,t,n){e===`focusin`?(Dr(),vr=t,yr=n,vr.attachEvent(`onpropertychange`,Or)):e===`focusout`&&Dr()}function Ar(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return xr(yr)}function jr(e,t){if(e===`click`)return xr(t)}function Mr(e,t){if(e===`input`||e===`change`)return xr(t)}function Nr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Pr=typeof Object.is==`function`?Object.is:Nr;function Fr(e,t){if(Pr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Pe.call(t,i)||!Pr(e[i],t[i]))return!1}return!0}function Ir(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Lr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rr(e,t){var n=Lr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Lr(n)}}function zr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Br(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ir(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ir(e.document)}return t}function Vr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Hr=Cn&&`documentMode`in document&&11>=document.documentMode,Ur=null,Wr=null,Gr=null,Kr=!1;function qr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kr||Ur==null||Ur!==Ir(r)||(r=Ur,`selectionStart`in r&&Vr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gr&&Fr(Gr,r)||(Gr=r,r=Xf(Wr,`onSelect`),0<r.length&&(t=new Pn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ur)))}function Jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Yr={animationend:Jr(`Animation`,`AnimationEnd`),animationiteration:Jr(`Animation`,`AnimationIteration`),animationstart:Jr(`Animation`,`AnimationStart`),transitionrun:Jr(`Transition`,`TransitionRun`),transitionstart:Jr(`Transition`,`TransitionStart`),transitioncancel:Jr(`Transition`,`TransitionCancel`),transitionend:Jr(`Transition`,`TransitionEnd`)},Xr={},Zr={};Cn&&(Zr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),`TransitionEvent`in window||delete Yr.transitionend.transition);function Qr(e){if(Xr[e])return Xr[e];if(!Yr[e])return e;var t=Yr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zr)return Xr[e]=t[n];return e}var $r=Qr(`animationend`),ei=Qr(`animationiteration`),ti=Qr(`animationstart`),ni=Qr(`transitionrun`),ri=Qr(`transitionstart`),ii=Qr(`transitioncancel`),ai=Qr(`transitionend`),oi=new Map,si=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);si.push(`scrollEnd`);function ci(e,t){oi.set(e,t),Ft(t,[e])}var li=0;function ui(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=li++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function di(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function fi(e,t){return e=di(e),t=di(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var pi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},mi=[],hi=0,gi=0;function _i(){for(var e=hi,t=gi=hi=0;t<e;){var n=mi[t];mi[t++]=null;var r=mi[t];mi[t++]=null;var i=mi[t];mi[t++]=null;var a=mi[t];if(mi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&xi(n,i,a)}}function vi(e,t,n,r){mi[hi++]=e,mi[hi++]=t,mi[hi++]=n,mi[hi++]=r,gi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function yi(e,t,n,r){return vi(e,t,n,r),Si(e)}function bi(e,t){return vi(e,null,null,t),Si(e)}function xi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ye(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Si(e){if(50<kd)throw kd=0,Ad=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ci={};function wi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ti(e,t,n,r){return new wi(e,t,n,r)}function Ei(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Di(e,t){var n=e.alternate;return n===null?(n=Ti(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Oi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ki(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Ei(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,ye.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case oe:return e=Ti(31,n,t,a),e.elementType=oe,e.lanes=o,e;case k:return Ai(n.children,a,o,t);case ne:s=8,a|=24;break;case A:return e=Ti(12,n,t,a|2),e.elementType=A,e.lanes=o,e;case N:return e=Ti(13,n,t,a),e.elementType=N,e.lanes=o,e;case ie:return e=Ti(19,n,t,a),e.elementType=ie,e.lanes=o,e;case se:case le:return e=a|32,e=Ti(30,n,t,e),e.elementType=le,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case M:s=10;break a;case j:s=9;break a;case re:s=11;break a;case P:s=14;break a;case ae:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Ti(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Ai(e,t,n,r){return e=Ti(7,e,r,t),e.lanes=n,e}function ji(e,t,n){return e=Ti(6,e,null,t),e.lanes=n,e}function Mi(e){var t=Ti(18,null,null,0);return t.stateNode=e,t}function Ni(e,t,n){return t=Ti(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Pi=new WeakMap;function Fi(e,t){if(typeof e==`object`&&e){var n=Pi.get(e);return n===void 0?(t={value:e,source:t,stack:Ne(t)},Pi.set(e,t),t):n}return{value:e,source:t,stack:Ne(t)}}var Ii=[],Li=0,Ri=null,zi=0,Bi=[],Vi=0,Hi=null,Ui=1,Wi=``;function Gi(e,t){Ii[Li++]=zi,Ii[Li++]=Ri,Ri=e,zi=t}function Ki(e,t,n){Bi[Vi++]=Ui,Bi[Vi++]=Wi,Bi[Vi++]=Hi,Hi=e;var r=Ui;e=Wi;var i=32-Ye(r)-1;r&=~(1<<i),n+=1;var a=32-Ye(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ui=1<<32-Ye(t)+i|n<<i|r,Wi=a+e}else Ui=1<<a|n<<i|r,Wi=e}function qi(e){e.return!==null&&(Gi(e,1),Ki(e,1,0))}function Ji(e){for(;e===Ri;)Ri=Ii[--Li],Ii[Li]=null,zi=Ii[--Li],Ii[Li]=null;for(;e===Hi;)Hi=Bi[--Vi],Bi[Vi]=null,Wi=Bi[--Vi],Bi[Vi]=null,Ui=Bi[--Vi],Bi[Vi]=null}function Yi(e,t){Bi[Vi++]=Ui,Bi[Vi++]=Wi,Bi[Vi++]=Hi,Ui=t.id,Wi=t.overflow,Hi=e}var Xi=null,q=null,J=!1,Zi=null,Qi=!1,$i=Error(i(519));function ea(e){throw oa(Fi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),$i}function ta(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[vt]=e,t[yt]=r,n){case`dialog`:Uf(`cancel`,t),Uf(`close`,t);break;case`iframe`:case`object`:case`embed`:Uf(`load`,t);break;case`video`:case`audio`:for(n=0;n<Bf.length;n++)Uf(Bf[n],t);break;case`source`:Uf(`error`,t);break;case`img`:case`image`:case`link`:Uf(`error`,t),Uf(`load`,t);break;case`details`:Uf(`toggle`,t);break;case`input`:Uf(`invalid`,t),en(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Uf(`invalid`,t);break;case`textarea`:Uf(`invalid`,t),an(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||np(t.textContent,n)?(r.popover!=null&&(Uf(`beforetoggle`,t),Uf(`toggle`,t)),r.onScroll!=null&&Uf(`scroll`,t),r.onScrollEnd!=null&&Uf(`scrollend`,t),r.onClick!=null&&(t.onclick=mn),t=!0):t=!1,t||ea(e,!0)}function na(e){for(Xi=e.return;Xi;)switch(Xi.tag){case 5:case 31:case 13:Qi=!1;return;case 27:case 3:Qi=!0;return;default:Xi=Xi.return}}function ra(e){if(e!==Xi)return!1;if(!J)return na(e),J=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||gp(e.type,e.memoizedProps)),n=!n),n&&q&&ea(e),na(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));q=mm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));q=mm(e)}else t===27?(t=q,Tp(e.type)?(e=pm,pm=null,q=e):q=t):q=Xi?fm(e.stateNode.nextSibling):null;return!0}function ia(){q=Xi=null,J=!1}function aa(){var e=Zi;return e!==null&&(fd===null?fd=e:fd.push.apply(fd,e),Zi=null),e}function oa(e){Zi===null?Zi=[e]:Zi.push(e)}var sa=R(null),ca=null,la=null;function ua(e,t,n){z(sa,t._currentValue),t._currentValue=n}function da(e){e._currentValue=sa.current,ve(sa)}function fa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function pa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),fa(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),fa(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),fa(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ma(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Pr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Se.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&pa(t,e,n,r),t.flags|=262144,e!==null}function ha(e){for(e=e.firstContext;e!==null;){if(!Pr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ga(e){ca=e,la=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _a(e){return ya(ca,e)}function va(e,t){return ca===null&&ga(e),ya(e,t)}function ya(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},la===null){if(e===null)throw Error(i(308));la=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else la=la.next=t;return n}var ba=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},xa=t.unstable_scheduleCallback,Sa=t.unstable_NormalPriority,Ca={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wa(){return{controller:new ba,data:new Map,refCount:0}}function Ta(e){e.refCount--,e.refCount===0&&xa(Sa,function(){e.controller.abort()})}function Ea(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Da=null;function Oa(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var ka=null,Aa=0,ja=0,Ma=null;function Na(e,t){if(ka===null){var n=ka=[];Aa=0,ja=Ff(),Ma={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Aa++,t.then(Pa,Pa),t}function Pa(){if(--Aa===0&&(Da=null,ka!==null)){Ma!==null&&(Ma.status=`fulfilled`);var e=ka;ka=null,ja=0,Ma=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Fa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ia=I.S;I.S=function(e,t){if(hd=V(),typeof t==`object`&&t&&typeof t.then==`function`&&Na(e,t),Da!==null)for(var n=xf;n!==null;)Ea(n,Da),n=n.next;if(n=e.types,n!==null){for(var r=xf;r!==null;)Ea(r,n),r=r.next;if(ja!==0){r=Da,r===null&&(r=Da=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Ia!==null&&Ia(e,t)};var La=R(null);function Ra(){var e=La.current;return e===null?Xu.pooledCache:e}function za(e,t){t===null?z(La,La.current):z(La,t.pool)}function Ba(){var e=Ra();return e===null?null:{parent:Ca._currentValue,pool:e}}var Va=Error(i(460)),Ha=Error(i(474)),Ua=Error(i(542)),Wa={then:function(){}};function Ga(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ka(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(mn,mn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Xa(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(mn,mn);else{if(e=Xu,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Xa(e),e}throw Ja=t,Va}}function qa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ja=e,Va):e}}var Ja=null;function Ya(){if(Ja===null)throw Error(i(459));var e=Ja;return Ja=null,e}function Xa(e){if(e===Va||e===Ua)throw Error(i(483))}var Za=null,Qa=0;function $a(e){var t=Qa;return Qa+=1,Za===null&&(Za=[]),Ka(Za,e,t)}function eo(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function to(e,t){throw t.$$typeof===ee?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function no(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Di(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ji(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===k?(e=d(e,t,n.props.children,r,n.key),eo(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ae&&qa(i)===t.type)?(t=a(t,n.props),eo(t,n),t.return=e,t):(t=ki(n.type,n.key,n.props,null,e.mode,r),eo(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ni(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ai(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ji(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case O:return n=ki(t.type,t.key,t.props,null,e.mode,n),eo(n,t),n.return=e,n;case te:return t=Ni(t,e.mode,n),t.return=e,t;case ae:return t=qa(t),f(e,t,n)}if(me(t)||fe(t))return t=Ai(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,$a(t),n);if(t.$$typeof===M)return f(e,va(e,t),n);to(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case O:return n.key===i?l(e,t,n,r):null;case te:return n.key===i?u(e,t,n,r):null;case ae:return n=qa(n),p(e,t,n,r)}if(me(n)||fe(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,$a(n),r);if(n.$$typeof===M)return p(e,t,va(e,n),r);to(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case O:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case te:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ae:return r=qa(r),m(e,t,n,r,i)}if(me(r)||fe(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,$a(r),i);if(r.$$typeof===M)return m(e,t,n,va(t,r),i);to(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),J&&Gi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return J&&Gi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),J&&Gi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),J&&Gi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return J&&Gi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),J&&Gi(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===k&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case O:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===k){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),eo(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ae&&qa(l)===r.type){n(e,r.sibling),c=a(r,o.props),eo(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===k?(c=Ai(o.props.children,e.mode,c,o.key),eo(c,o),c.return=e,e=c):(c=ki(o.type,o.key,o.props,null,e.mode,c),eo(c,o),c.return=e,e=c)}return s(e);case te:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Ni(o,e.mode,c),c.return=e,e=c}return s(e);case ae:return o=qa(o),_(e,r,o,c)}if(me(o))return h(e,r,o,c);if(fe(o)){if(l=fe(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,$a(o),c);if(o.$$typeof===M)return _(e,r,va(e,o),c);to(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=ji(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Qa=0;var i=_(e,t,n,r);return Za=null,i}catch(t){if(t===Va||t===Ua)throw t;var a=Ti(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var ro=no(!0),io=no(!1),ao=!1;function oo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function so(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function co(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function lo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Yu&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Si(e),xi(e,null,n),t}return vi(e,r,t,n),Si(e)}function uo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dt(e,n)}}function fo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var po=!1;function mo(){if(po){var e=Ma;if(e!==null)throw e}}function ho(e,t,n,r){po=!1;var i=e.updateQueue;ao=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Qu&f)===f:(r&f)===f){f!==0&&f===ja&&(po=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=D({},d,f);break a;case 2:ao=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),od|=o,e.lanes=o,e.memoizedState=d}}function go(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function _o(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)go(n[e],t)}var vo=R(null),yo=R(0);function Y(e,t){e=id,z(yo,e),z(vo,t),id=e|t.baseLanes}function bo(){z(yo,id),z(vo,vo.current)}function xo(){id=yo.current,ve(vo),ve(yo)}var So=R(null),Co=null;function wo(e){var t=e.alternate;z(ko,ko.current&1),z(So,e),Co===null&&(t===null||vo.current!==null||t.memoizedState!==null)&&(Co=e)}function To(e){z(ko,ko.current),z(So,e),Co===null&&(Co=e)}function Eo(e){e.tag===22?(z(ko,ko.current),z(So,e),Co===null&&(Co=e)):Do()}function Do(){z(ko,ko.current),z(So,So.current)}function Oo(e){ve(So),Co===e&&(Co=null),ve(ko)}var ko=R(0);function Ao(e,t){z(So,So.current),z(ko,t)}function jo(e){ve(ko),ve(So),Co===e&&(Co=null)}function Mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||lm(n)||um(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var No=0,X=null,Po=null,Fo=null,Io=!1,Lo=!1,Ro=!1,zo=0,Bo=0,Vo=null,Ho=0;function Uo(){throw Error(i(321))}function Wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pr(e[n],t[n]))return!1;return!0}function Go(e,t,n,r,i,a){return No=a,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,I.H=e===null||e.memoizedState===null?cc:lc,Ro=!1,a=n(r,i),Ro=!1,Lo&&(a=qo(t,n,r,i)),Ko(e),a}function Ko(e){I.H=sc;var t=Po!==null&&Po.next!==null;if(No=0,Fo=Po=X=null,Io=!1,Bo=0,Vo=null,t)throw Error(i(300));e===null||Ec||(e=e.dependencies,e!==null&&ha(e)&&(Ec=!0))}function qo(e,t,n,r){X=e;var a=0;do{if(Lo&&(Vo=null),Bo=0,Lo=!1,25<=a)throw Error(i(301));if(a+=1,Fo=Po=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}I.H=uc,o=t(n,r)}while(Lo);return o}function Jo(){var e=I.H,t=e.useState()[0];return t=typeof t.then==`function`?ts(t):t,e=e.useState()[0],(Po===null?null:Po.memoizedState)!==e&&(X.flags|=1024),t}function Yo(){var e=zo!==0;return zo=0,e}function Xo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Zo(e){if(Io){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Io=!1}No=0,Fo=Po=X=null,Lo=!1,Bo=zo=0,Vo=null}function Qo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fo===null?X.memoizedState=Fo=e:Fo=Fo.next=e,Fo}function $o(){if(Po===null){var e=X.alternate;e=e===null?null:e.memoizedState}else e=Po.next;var t=Fo===null?X.memoizedState:Fo.next;if(t!==null)Fo=t,Po=e;else{if(e===null)throw X.alternate===null?Error(i(467)):Error(i(310));Po=e,e={memoizedState:Po.memoizedState,baseState:Po.baseState,baseQueue:Po.baseQueue,queue:Po.queue,next:null},Fo===null?X.memoizedState=Fo=e:Fo=Fo.next=e}return Fo}function es(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ts(e){var t=Bo;return Bo+=1,Vo===null&&(Vo=[]),e=Ka(Vo,e,t),t=X,(Fo===null?t.memoizedState:Fo.next)===null&&(t=t.alternate,I.H=t===null||t.memoizedState===null?cc:lc),e}function ns(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ts(e);if(e.$$typeof===ue)return;if(e.$$typeof===M)return _a(e)}throw Error(i(438,String(e)))}function rs(e){var t=null,n=X.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=X.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=es(),X.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ce;return t.index++,n}function is(e,t){return typeof t==`function`?t(e):t}function as(e){return os($o(),Po,e)}function os(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(No&f)===f:(Qu&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ja&&(d=!0);else if((No&p)===p){u=u.next,p===ja&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,X.lanes|=p,od|=p;f=u.action,Ro&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,X.lanes|=f,od|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Pr(o,e.memoizedState)&&(Ec=!0,d&&(n=Ma,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ss(e){var t=$o(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Pr(o,t.memoizedState)||(Ec=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function cs(e,t,n){var r=X,a=$o(),o=J;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Pr((Po||a).memoizedState,n);if(s&&(a.memoizedState=n,Ec=!0),a=a.queue,Ns(ds.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Fo!==null&&!!(Fo.memoizedState.tag&1),Os(e?9:8,{destroy:void 0},us.bind(null,r,a,n,t),null),e){if(r.flags|=2048,Xu===null)throw Error(i(349));o||No&127||ls(r,t,n)}return n}function ls(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t=es(),X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function us(e,t,n,r){t.value=n,t.getSnapshot=r,fs(t)&&ps(e)}function ds(e,t,n){return n(function(){fs(t)&&ps(e)})}function fs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pr(e,n)}catch{return!0}}function ps(e){var t=bi(e,2);t!==null&&Pd(t,e,2)}function ms(e){var t=Qo();if(typeof e==`function`){var n=e;if(e=n(),Ro){Je(!0);try{n()}finally{Je(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:e},t}function hs(e,t,n,r){return e.baseState=n,os(e,Po,typeof r==`function`?r:is)}function gs(e,t,n,r,a){if(ic(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};I.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,_s(t,o)):(o.next=n.next,t.pending=n.next=o)}}function _s(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=I.T,o={};o.types=a===null?null:a.types,I.T=o;try{var s=n(i,r),c=I.S;c!==null&&c(o,s),vs(e,t,s)}catch(n){bs(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),I.T=a}}else try{a=n(i,r),vs(e,t,a)}catch(n){bs(e,t,n)}}function vs(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ys(e,t,n)},function(n){return bs(e,t,n)}):ys(e,t,n)}function ys(e,t,n){t.status=`fulfilled`,t.value=n,xs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,_s(e,n)))}function bs(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,xs(t),t=t.next;while(t!==r)}e.action=null}function xs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ss(e,t){return t}function Cs(e,t){if(J){var n=Xu.formState;if(n!==null){a:{var r=X;if(J){if(q){b:{for(var i=q,a=Qi;i.nodeType!==8;)if(!a||(i=fm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){q=fm(i.nextSibling),r=i.data===`F!`;break a}}ea(r)}r=!1}r&&(t=n[0])}}return n=Qo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ss,lastRenderedState:t},n.queue=r,n=tc.bind(null,X,r),r.dispatch=n,r=ms(!1),a=rc.bind(null,X,!1,r.queue),r=Qo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=gs.bind(null,X,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ws(e){return Ts($o(),Po,e)}function Ts(e,t,n){if(t=os(e,t,Ss)[0],e=as(is)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ts(t)}catch(e){throw e===Va?Ua:e}else r=t;t=$o();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(X.flags|=2048,Os(9,{destroy:void 0},Es.bind(null,i,n),null)),[r,a,e]}function Es(e,t){e.action=t}function Ds(e){var t=$o(),n=Po;if(n!==null)return Ts(t,n,e);$o(),t=t.memoizedState,n=$o();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=X.updateQueue,t===null&&(t=es(),X.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ks(){return $o().memoizedState}function As(e,t,n,r){var i=Qo();X.flags|=e,i.memoizedState=Os(1|t,{destroy:void 0},n,r===void 0?null:r)}function js(e,t,n,r){var i=$o();r=r===void 0?null:r;var a=i.memoizedState.inst;Po!==null&&r!==null&&Wo(r,Po.memoizedState.deps)?i.memoizedState=Os(t,a,n,r):(X.flags|=e,i.memoizedState=Os(1|t,a,n,r))}function Ms(e,t){As(8390656,8,e,t)}function Ns(e,t){js(2048,8,e,t)}function Ps(e){X.flags|=4;var t=X.updateQueue;if(t===null)t=es(),X.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Fs(e){var t=$o().memoizedState;return Ps({ref:t,nextImpl:e}),function(){if(Yu&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Is(e,t){return js(4,2,e,t)}function Ls(e,t){return js(4,4,e,t)}function Rs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zs(e,t,n){n=n==null?null:n.concat([e]),js(4,4,Rs.bind(null,t,e),n)}function Bs(){}function Vs(e,t){var n=$o();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hs(e,t){var n=$o();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Wo(t,r[1]))return r[0];if(r=e(),Ro){Je(!0);try{e()}finally{Je(!1)}}return n.memoizedState=[r,t],r}function Us(e,t,n){return n===void 0||No&1073741824&&!(Qu&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),X.lanes|=e,od|=e,n)}function Ws(e,t,n,r){return Pr(n,t)?n:vo.current===null?!(No&106)||No&1073741824&&!(Qu&261930)?(Ec=!0,e.memoizedState=n):(e=Md(),X.lanes|=e,od|=e,t):(e=Us(e,n,r),Pr(e,t)||(Ec=!0),e)}function Gs(e,t,n,r,i){var a=L.p;L.p=a!==0&&8>a?a:8;var o=I.T,s={};s.types=o===null?null:o.types,I.T=s,rc(e,!1,t,n);try{var c=i(),l=I.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?nc(e,t,Fa(c,r),jd(e)):nc(e,t,r,jd(e))}catch(n){nc(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{L.p=a,o!==null&&s.types!==null&&(o.types=s.types),I.T=o}}function Ks(){}function qs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Js(e).queue;Gs(e,a,t,he,n===null?Ks:function(){return Ys(e),n(r)})}function Js(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:he,baseState:he,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:he},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ys(e){var t=Js(e);t.next===null&&(t=e.alternate.memoizedState),nc(e,t.next.queue,{},jd())}function Xs(){return _a(sh)}function Zs(){return $o().memoizedState}function Qs(){return $o().memoizedState}function $s(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=co(n);var r=lo(t,e,n);r!==null&&(Pd(r,t,n),uo(r,t,n)),t={cache:wa()},e.payload=t;return}t=t.return}}function ec(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ic(e)?ac(t,n):(n=yi(e,t,n,r),n!==null&&(Pd(n,e,r),oc(n,t,r)))}function tc(e,t,n){nc(e,t,n,jd())}function nc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ic(e))ac(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Pr(s,o))return vi(e,t,i,0),Xu===null&&_i(),!1}catch{}if(n=yi(e,t,i,r),n!==null)return Pd(n,e,r),oc(n,t,r),!0}return!1}function rc(e,t,n,r){if(r={lane:2,revertLane:Ff(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ic(e)){if(t)throw Error(i(479))}else t=yi(e,n,r,2),t!==null&&Pd(t,e,2)}function ic(e){var t=e.alternate;return e===X||t!==null&&t===X}function ac(e,t){Lo=Io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function oc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,dt(e,n)}}var sc={readContext:_a,use:ns,useCallback:Uo,useContext:Uo,useEffect:Uo,useImperativeHandle:Uo,useLayoutEffect:Uo,useInsertionEffect:Uo,useMemo:Uo,useReducer:Uo,useRef:Uo,useState:Uo,useDebugValue:Uo,useDeferredValue:Uo,useTransition:Uo,useSyncExternalStore:Uo,useId:Uo,useHostTransitionStatus:Uo,useFormState:Uo,useActionState:Uo,useOptimistic:Uo,useMemoCache:Uo,useCacheRefresh:Uo,useEffectEvent:Uo},cc={readContext:_a,use:ns,useCallback:function(e,t){return Qo().memoizedState=[e,t===void 0?null:t],e},useContext:_a,useEffect:Ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),As(4194308,4,Rs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return As(4194308,4,e,t)},useInsertionEffect:function(e,t){As(4,2,e,t)},useMemo:function(e,t){var n=Qo();t=t===void 0?null:t;var r=e();if(Ro){Je(!0);try{e()}finally{Je(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Qo();if(n!==void 0){var i=n(t);if(Ro){Je(!0);try{n(t)}finally{Je(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ec.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=Qo();return e={current:e},t.memoizedState=e},useState:function(e){e=ms(e);var t=e.queue,n=tc.bind(null,X,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Bs,useDeferredValue:function(e,t){return Us(Qo(),e,t)},useTransition:function(){var e=ms(!1);return e=Gs.bind(null,X,e.queue,!0,!1),Qo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=X,a=Qo();if(J){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Xu===null)throw Error(i(349));Qu&127||ls(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Ms(ds.bind(null,r,o,e),[e]),r.flags|=2048,Os(9,{destroy:void 0},us.bind(null,r,o,n,t),null),n},useId:function(){var e=Qo(),t=Xu.identifierPrefix;if(J){var n=Wi,r=Ui;n=(r&~(1<<32-Ye(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=zo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Ho++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Xs,useFormState:Cs,useActionState:Cs,useOptimistic:function(e){var t=Qo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=rc.bind(null,X,!0,n),n.dispatch=t,[e,t]},useMemoCache:rs,useCacheRefresh:function(){return Qo().memoizedState=$s.bind(null,X)},useEffectEvent:function(e){var t=Qo(),n={impl:e};return t.memoizedState=n,function(){if(Yu&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},lc={readContext:_a,use:ns,useCallback:Vs,useContext:_a,useEffect:Ns,useImperativeHandle:zs,useInsertionEffect:Is,useLayoutEffect:Ls,useMemo:Hs,useReducer:as,useRef:ks,useState:function(){return as(is)},useDebugValue:Bs,useDeferredValue:function(e,t){return Ws($o(),Po.memoizedState,e,t)},useTransition:function(){var e=as(is)[0],t=$o().memoizedState;return[typeof e==`boolean`?e:ts(e),t]},useSyncExternalStore:cs,useId:Zs,useHostTransitionStatus:Xs,useFormState:ws,useActionState:ws,useOptimistic:function(e,t){return hs($o(),Po,e,t)},useMemoCache:rs,useCacheRefresh:Qs,useEffectEvent:Fs},uc={readContext:_a,use:ns,useCallback:Vs,useContext:_a,useEffect:Ns,useImperativeHandle:zs,useInsertionEffect:Is,useLayoutEffect:Ls,useMemo:Hs,useReducer:ss,useRef:ks,useState:function(){return ss(is)},useDebugValue:Bs,useDeferredValue:function(e,t){var n=$o();return Po===null?Us(n,e,t):Ws(n,Po.memoizedState,e,t)},useTransition:function(){var e=ss(is)[0],t=$o().memoizedState;return[typeof e==`boolean`?e:ts(e),t]},useSyncExternalStore:cs,useId:Zs,useHostTransitionStatus:Xs,useFormState:Ds,useActionState:Ds,useOptimistic:function(e,t){var n=$o();return Po===null?(n.baseState=e,[e,n.queue.dispatch]):hs(n,Po,e,t)},useMemoCache:rs,useCacheRefresh:Qs,useEffectEvent:Fs};function dc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=co(r);i.payload=t,n!=null&&(i.callback=n),t=lo(e,i,r),t!==null&&(Pd(t,e,r),uo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=co(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=lo(e,i,r),t!==null&&(Pd(t,e,r),uo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=co(n);r.tag=2,t!=null&&(r.callback=t),t=lo(e,r,n),t!==null&&(Pd(t,e,n),uo(t,e,n))}};function pc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Fr(n,r)||!Fr(i,a):!0}function mc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fc.enqueueReplaceState(t,t.state,null)}function hc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=D({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function gc(e){pi(e)}function _c(e){console.error(e)}function vc(e){pi(e)}function yc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function bc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function xc(e,t,n){return n=co(n),n.tag=3,n.payload={element:null},n.callback=function(){yc(e,t)},n}function Sc(e){return e=co(e),e.tag=3,e}function Cc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){bc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){bc(t,n,r),typeof i!=`function`&&(vd===null?vd=new Set([this]):vd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function wc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ma(t,n,a,!0),n=So.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Co===null?Kd():n.alternate===null&&ad===0&&(ad=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Wa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),hf(e,r,a)),!1;case 22:return n.flags|=65536,r===Wa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),hf(e,r,a)),!1}throw Error(i(435,n.tag))}return hf(e,r,a),Kd(),!1}if(J)return t=So.current,t===null?(r!==$i&&(t=Error(i(423),{cause:r}),oa(Fi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Fi(r,n),a=xc(e.stateNode,r,a),fo(e,a),ad!==4&&(ad=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==$i&&(e=Error(i(422),{cause:r}),oa(Fi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Fi(o,n),dd===null?dd=[o]:dd.push(o),ad!==4&&(ad=2),t===null)return!0;r=Fi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=xc(n.stateNode,r,e),fo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(vd===null||!vd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Sc(a),Cc(a,e,n,r),fo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Tc=Error(i(461)),Ec=!1;function Dc(e,t,n,r){t.child=e===null?io(t,null,n,r):ro(t,e.child,n,r)}function Oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ga(t),r=Go(e,t,n,o,a,i),s=Yo(),e!==null&&!Ec?(Xo(e,t,i),nl(e,t,i)):(J&&s&&qi(t),t.flags|=1,Dc(e,t,r,i),t.child)}function kc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Ei(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Ac(e,t,a,r,i)):(e=ki(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!rl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Fr:n,n(o,r)&&e.ref===t.ref)return nl(e,t,i)}return t.flags|=1,e=Di(a,r),e.ref=t.ref,e.return=t,t.child=e}function Ac(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Fr(a,r)&&e.ref===t.ref){if(Ec=!1,t.pendingProps=r=a,rl(e,i))e.flags&131072&&(Ec=!0);else return t.lanes=e.lanes,nl(e,t,i)}}return Rc(e,t,n,r,i)}function jc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Nc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&za(t,a===null?null:a.cachePool),a===null?bo():Y(t,a),Eo(t);else return r=t.lanes=536870912,Nc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&za(t,null),bo(),Do()):(za(t,a.cachePool),Y(t,a),Do(),t.memoizedState=null);return Dc(e,t,i,n),t.child}function Mc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Nc(e,t,n,r,i){var a=Ra();return a=a===null?null:{parent:Ca._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&za(t,null),bo(),Eo(t),e!==null&&ma(e,t,r,!0),t.childLanes=i,null}function Pc(e,t){return t=qc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Fc(e,t,n){return ro(t,e.child,null,n),e=Pc(t,t.pendingProps),e.flags|=2,Oo(t),t.memoizedState=null,e}function Ic(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(J){if(r.mode===`hidden`)return e=Pc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Mc(null,e);if(To(t),(e=q)?(e=cm(e,Qi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Hi===null?null:{id:Ui,overflow:Wi},retryLane:536870912,hydrationErrors:null},n=Mi(e),n.return=t,t.child=n,Xi=t,q=null)):e=null,e===null)throw ea(t);return t.lanes=536870912,null}return Pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(To(t),a){if(t.flags&256)t.flags&=-257,t=Fc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Ec||ma(e,t,n,!1),a=(n&e.childLanes)!==0,Ec||a){if(vo.current===null){if(r=Xu,r!==null&&(s=ft(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,bi(e,s),Pd(r,e,s),Tc;Kd()}t=Fc(e,t,n)}else e=o.treeContext,q=fm(s.nextSibling),Xi=t,J=!0,Zi=null,Qi=!1,e!==null&&Yi(t,e),t=Pc(t,r),t.flags|=134221824;return t}return e=Di(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Lc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Rc(e,t,n,r,i){return ga(t),n=Go(e,t,n,r,void 0,i),r=Yo(),e!==null&&!Ec?(Xo(e,t,i),nl(e,t,i)):(J&&r&&qi(t),t.flags|=1,Dc(e,t,n,i),t.child)}function zc(e,t,n,r,i,a){return ga(t),t.updateQueue=null,n=qo(t,r,n,i),Ko(e),r=Yo(),e!==null&&!Ec?(Xo(e,t,a),nl(e,t,a)):(J&&r&&qi(t),t.flags|=1,Dc(e,t,n,a),t.child)}function Bc(e,t,n,r,i){if(ga(t),t.stateNode===null){var a=Ci,o=n.contextType;typeof o==`object`&&o&&(a=_a(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=fc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},oo(t),o=n.contextType,a.context=typeof o==`object`&&o?_a(o):Ci,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(dc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&fc.enqueueReplaceState(a,a.state,null),ho(t,r,a,i),mo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=hc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Ci,typeof u==`object`&&u&&(o=_a(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&mc(t,a,r,o),ao=!1;var f=t.memoizedState;a.state=f,ho(t,r,a,i),mo(),l=t.memoizedState,s||f!==l||ao?(typeof d==`function`&&(dc(t,n,d,r),l=t.memoizedState),(c=ao||pc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,so(e,t),o=t.memoizedProps,u=hc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Ci,typeof l==`object`&&l&&(c=_a(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&mc(t,a,r,c),ao=!1,f=t.memoizedState,a.state=f,ho(t,r,a,i),mo();var p=t.memoizedState;o!==d||f!==p||ao||e!==null&&e.dependencies!==null&&ha(e.dependencies)?(typeof s==`function`&&(dc(t,n,s,r),p=t.memoizedState),(u=ao||pc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ha(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Lc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=ro(t,e.child,null,i),t.child=ro(t,null,n,i)):Dc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=nl(e,t,i),e}function Vc(e,t,n,r){return ia(),t.flags|=256,Dc(e,t,n,r),t.child}var Hc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uc(e){return{baseLanes:e,cachePool:Ba()}}function Wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ld),e}function Gc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(ko.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(J){if(i?wo(t):Do(),(e=q)?(e=cm(e,Qi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Hi===null?null:{id:Ui,overflow:Wi},retryLane:536870912,hydrationErrors:null},n=Mi(e),n.return=t,t.child=n,Xi=t,q=null)):e=null,e===null)throw ea(t);return t.lanes=um(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Do(),i=t.mode,a=qc({mode:`hidden`,children:a},i),r=Ai(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Uc(n),r.childLanes=Wc(e,o,n),t.memoizedState=Hc,Mc(null,r)):(wo(t),Kc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return Yc(e,t,a,o,r,c,s,n)}return i?(Do(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Di(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Ai(i,a,n,null),i.flags|=2):i=Di(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Mc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Uc(n):(a=i.cachePool,a===null?a=Ba():(s=Ca._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Wc(e,o,n),t.memoizedState=Hc,Mc(e.child,r)):(wo(t),n=e.child,e=n.sibling,n=Di(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Kc(e,t){return t=qc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function qc(e,t){return e=Ti(22,e,null,t),e.lanes=0,e}function Jc(e,t,n){return ro(t,e.child,null,n),e=Kc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yc(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(wo(t),t.flags&=-257,Jc(e,t,c)):t.memoizedState===null?(Do(),o=a.fallback,s=t.mode,a=qc({mode:`visible`,children:a.children},s),o=Ai(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,ro(t,e.child,null,c),a=t.child,a.memoizedState=Uc(c),a.childLanes=Wc(e,r,c),t.memoizedState=Hc,Mc(null,a)):(Do(),t.child=e.child,t.flags|=128,null);if(wo(t),um(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,oa({value:a,source:null,stack:null})),Jc(e,t,c)}if(Ec||ma(e,t,c,!1),r=(c&e.childLanes)!==0,Ec||r){if(vo.current!==null)return Jc(e,t,c);if(r=Xu,r!==null&&(a=ft(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,bi(e,a),Pd(r,e,a),Tc;return lm(o)||Kd(),Jc(e,t,c)}return lm(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,q=fm(o.nextSibling),Xi=t,J=!0,Zi=null,Qi=!1,e!==null&&Yi(t,e),t=Kc(t,a.children),t.flags|=134221824,t)}function Xc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fa(e.return,t,n)}function Zc(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Mo(n)===null&&(t=e),e=e.sibling}return t}function Qc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function $c(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function el(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=ko.current;if(t.flags&128)return Ao(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Ao(t,o),i===`backwards`&&e!==null?($c(e),Dc(e,t,r,n),$c(e)):Dc(e,t,r,n),r=J?zi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xc(e,n,t);else if(e.tag===19)Xc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=Zc(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,$c(t)),Qc(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Qc(t,!0,n,null,a,r);break;case`together`:Qc(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=Zc(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Qc(t,!1,i,n,a,r)}return t.child}function tl(e,t,n){var r=t.pendingProps;return ua(t,t.type,r.value),Dc(e,t,r.children,n),t.child}function nl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),od|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ma(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Di(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Di(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ha(e)))}function il(e,t,n){switch(t.tag){case 3:Ce(t,t.stateNode.containerInfo),ua(t,Ca,e.memoizedState.cache),ia();break;case 27:case 5:Te(t);break;case 4:Ce(t,t.stateNode.containerInfo);break;case 10:ua(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,To(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return wo(t),t.flags|=128,null;r=ma(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Gc(e,t,n):(wo(t),e=nl(e,t,n),e===null?null:e.sibling)}wo(t);break;case 19:if(t.flags&128)return el(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(ma(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return el(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ao(t,ko.current),r)break;return null;case 22:return t.lanes=0,jc(e,t,n,t.pendingProps);case 24:ua(t,Ca,e.memoizedState.cache)}return nl(e,t,n)}function al(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Ec=!0;else{if(!rl(e,n)&&!(t.flags&128))return Ec=!1,il(e,t,n);Ec=!!(e.flags&131072)}}else Ec=!1,J&&t.flags&1048576&&Ki(t,zi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=qa(t.elementType),t.type=e,typeof e==`function`)Ei(e)?(r=hc(e,r),t.tag=1,t=Bc(null,t,e,r,n)):(t.tag=0,t=Rc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===re){t.tag=11,t=Oc(null,t,e,r,n);break a}if(a===P){t.tag=14,t=kc(null,t,e,r,n);break a}if(a===M){t.tag=10,t.type=e,t=tl(null,t,n);break a}}throw t=pe(e)||e,Error(i(306,t,``))}}return t;case 0:return Rc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=hc(r,t.pendingProps),Bc(e,t,r,a,n);case 3:a:{if(Ce(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,so(e,t),ho(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ua(t,Ca,r),r!==o.cache&&pa(t,[Ca],n,!0),mo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Vc(e,t,r,n);break a}if(r!==a){a=Fi(Error(i(424)),t),oa(a),t=Vc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(q=fm(e.firstChild),Xi=t,J=!0,Zi=null,Qi=!0,n=io(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ia(),r===a){t=nl(e,t,n);break a}Dc(e,t,r,n)}t=t.child}return t;case 26:return Lc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:J||(t.stateNode=hp(t.type,t.pendingProps,xe.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Te(t),e===null&&J&&(r=t.stateNode=vm(t.type,t.pendingProps,xe.current),Xi=t,Qi=!0,a=q,Tp(t.type)?(pm=a,q=fm(r.firstChild)):q=a),Dc(e,t,t.pendingProps.children,n),Lc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&J&&((a=r=q)&&(r=om(r,t.type,t.pendingProps,Qi),r===null?a=!1:(t.stateNode=r,Xi=t,q=fm(r.firstChild),Qi=!1,a=!0)),a||ea(t)),Te(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,gp(a,o)?r=null:s!==null&&gp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Go(e,t,Jo,null,null,n),sh._currentValue=a),Lc(e,t),Dc(e,t,r,n),t.child;case 6:return e===null&&J&&((e=n=q)&&(n=sm(n,t.pendingProps,Qi),n===null?e=!1:(t.stateNode=n,Xi=t,q=null,e=!0)),e||ea(t)),null;case 13:return Gc(e,t,n);case 4:return Ce(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ro(t,null,r,n):Dc(e,t,r,n),t.child;case 11:return Oc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Lc(e,t),Dc(e,t,r,n),t.child;case 8:return Dc(e,t,t.pendingProps.children,n),t.child;case 12:return Dc(e,t,t.pendingProps.children,n),t.child;case 10:return tl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,ga(t),a=_a(a),r=r(a),t.flags|=1,Dc(e,t,r,n),t.child;case 14:return kc(e,t,t.type,t.pendingProps,n);case 15:return Ac(e,t,t.type,t.pendingProps,n);case 19:return el(e,t,n);case 31:return Ic(e,t,n);case 22:return jc(e,t,n,t.pendingProps);case 24:return ga(t),r=_a(Ca),e===null?(a=Ra(),a===null&&(a=Xu,o=wa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},oo(t),ua(t,Ca,a)):((e.lanes&n)!==0&&(so(e,t),ho(t,null,null,n),mo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ua(t,Ca,r),r!==a.cache&&pa(t,[Ca],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ua(t,Ca,r))),Dc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:J&&qi(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Lc(e,t),Dc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function ol(e){e.flags|=4}function sl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw Ja=Wa,Ha}}else e.flags&=-16777217}function cl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Ud())e.flags|=8192;else throw Ja=Wa,Ha}}function ll(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:ot(),e.lanes|=t,ud|=t)}function ul(e,t){if(!J)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function dl(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fl(e,t,n){var r=t.pendingProps;switch(Ji(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dl(t),null;case 1:return dl(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),da(Ca),we(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ra(t)?ol(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,aa())),dl(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(ol(t),o===null?(dl(t),sl(t,a,null,r,n)):(dl(t),cl(t,o))):o?o===e.memoizedState?(dl(t),t.flags&=-16777217):(ol(t),dl(t),cl(t,o)):(e=e.memoizedProps,e!==r&&ol(t),dl(t),sl(t,a,e,r,n)),null;case 27:if(Ee(t),n=xe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ol(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return dl(t),t.subtreeFlags&=-33554433,null}e=ye.current,ra(t)?ta(t,e):(e=vm(a,r,n),t.stateNode=e,ol(t))}return dl(t),t.subtreeFlags&=-33554433,null;case 5:if(Ee(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ol(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return dl(t),t.subtreeFlags&=-33554433,null}if(o=ye.current,ra(t))ta(t,o);else{var s=fp(xe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[vt]=t,o[yt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(ap(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&ol(t)}}return dl(t),t.subtreeFlags&=-33554433,sl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&ol(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=xe.current,ra(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Xi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[vt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||np(e.nodeValue,n)),e||ea(t,!0)}else e=fp(e).createTextNode(r),e[vt]=t,t.stateNode=e}return dl(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ra(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[vt]=t}else ia(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dl(t),e=!1}else n=aa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Oo(t),t):(Oo(t),null);if(t.flags&128)throw Error(i(558))}return dl(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ra(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[vt]=t}else ia(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dl(t),a=!1}else a=aa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Oo(t),t):(Oo(t),null)}return Oo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ll(t,t.updateQueue),dl(t),null);case 4:return we(),e===null&&Kf(t.stateNode.containerInfo),t.flags|=67108864,dl(t),null;case 10:return da(t.type),dl(t),null;case 19:if(jo(t),r=t.memoizedState,r===null)return dl(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)ul(r,!1);else{if(ad!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Mo(e),o!==null){for(t.flags|=128,ul(r,!1),e=o.updateQueue,t.updateQueue=e,ll(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Oi(n,e),n=n.sibling;return Ao(t,ko.current&1|2),J&&Gi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&V()>gd&&(t.flags|=128,a=!0,ul(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Mo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,ll(t,e),ul(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!J)return dl(t),null}else 2*V()-r.renderingStartTime>gd&&n!==536870912&&(t.flags|=128,a=!0,ul(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=V(),e.sibling=null,o=ko.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||J?Ao(t,o):(n=o,z(So,t),z(ko,n),Co===null&&(Co=t)),J&&Gi(t,r.treeForkCount),e}return dl(t),null;case 22:case 23:return Oo(t),xo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(dl(t),t.subtreeFlags&6&&(t.flags|=8192)):dl(t),n=t.updateQueue,n!==null&&ll(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ve(La),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),da(Ca),dl(t),null;case 25:return null;case 30:return t.flags|=33554432,dl(t),null}throw Error(i(156,t.tag))}function pl(e,t){switch(Ji(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return da(Ca),we(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ee(t),null;case 31:if(t.memoizedState!==null){if(Oo(t),t.alternate===null)throw Error(i(340));ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Oo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return jo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return we(),null;case 10:return da(t.type),null;case 22:case 23:return Oo(t),xo(),e!==null&&ve(La),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return da(Ca),null;case 25:return null;default:return null}}function ml(e,t){switch(Ji(t),t.tag){case 3:da(Ca),we();break;case 26:case 27:case 5:Ee(t);break;case 4:we();break;case 31:t.memoizedState!==null&&Oo(t);break;case 13:Oo(t);break;case 19:jo(t);break;case 10:da(t.type);break;case 22:case 23:Oo(t),xo(),e!==null&&ve(La);break;case 24:da(Ca)}}function hl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){mf(t,t.return,e)}}function gl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){mf(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){mf(t,t.return,e)}}function _l(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{_o(t,n)}catch(t){mf(e,e.return,t)}}}function vl(e,t,n){n.props=hc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){mf(e,t,n)}}function yl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=ui(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Lp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Rp(e);h(e.child,!1,tm,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){mf(e,t,n)}}function bl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){mf(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){mf(e,t,n)}else n.current=null}}function xl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)rm(e.stateNode,t[n])}function Sl(e){for(var t=e.return;t!==null&&(Tl(t)&&rm(e.stateNode,t.stateNode),!wl(t));)t=t.return}function Cl(e){for(var t=e.return;t!==null&&(Tl(t)&&im(e.stateNode,t.stateNode),!wl(t));)t=t.return}function wl(e){return e.tag===5||e.tag===3||e.tag===27}function Tl(e){return e&&e.tag===7&&e.stateNode!==null}function El(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){mf(e,e.return,t)}}function Dl(e,t,n){try{var r=e.stateNode;sp(r,e.type,n,t),r[yt]=t}catch(t){mf(e,e.return,t)}}function Ol(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Tp(e.type)||e.tag===4}function kl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ol(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Tp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Al(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=mn)),xl(e,r),Vt=!0;else if(i!==4&&(i===27&&(xl(e,r),r=null,Tp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Al(e,t,n,r),e=e.sibling;e!==null;)Al(e,t,n,r),e=e.sibling}function jl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),xl(e,r),Vt=!0;else if(i!==4&&(i===27&&(xl(e,r),r=null,Tp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(jl(e,t,n,r),e=e.sibling;e!==null;)jl(e,t,n,r),e=e.sibling}function Ml(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ap(t,r,n),t[vt]=e,t[yt]=n}catch(t){mf(e,e.return,t)}}var Nl=!1,Pl=null;function Fl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Nl=!0)}var Il=null;function Ll(){var e=Il;return Il=null,e}var Rl=0;function zl(e,t,n,r,i){return Rl=0,Bl(e.child,t,n,r,i)}function Bl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=jp(o);r.push(s),s.view&&(a=!0)}else a||jp(o).view&&(a=!0);Nl=!0,Op(o,Rl===0?t:t+`_`+Rl,n),Rl++}else e.tag===22&&e.memoizedState!==null||e.tag===30&&i||Bl(e.child,t,n,r,i)&&(a=!0);e=e.sibling}return a}function Vl(e,t){for(;e!==null;)e.tag===5?kp(e.stateNode,e.memoizedProps):e.tag===22&&e.memoizedState!==null||e.tag===30&&t||Vl(e.child,t),e=e.sibling}function Hl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Hl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=fi(t.default,t.share),t!==`none`&&(zl(e,n,t,null,!1)||Vl(e.child,!1))}e=e.sibling}}function Ul(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=ui(r,n),a=fi(r.default,n.paired?r.share:r.enter);a===`none`?Hl(e):zl(e,i,a,null,!1)?(Hl(e),n.paired||t||Nd(e,r.onEnter)):Vl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ul(e,t),e=e.sibling;else Hl(e)}function Wl(e){if(Pl!==null&&Pl.size!==0){var t=Pl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=fi(n.default,n.share);if(a!==`none`&&(zl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):Vl(e.child,!1)),t.delete(r),t.size===0)break}}}Wl(e)}e=e.sibling}}}function Gl(e){if(e.tag===30){var t=e.memoizedProps,n=ui(t,e.stateNode),r=Pl===null?void 0:Pl.get(n),i=fi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(zl(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Pl.delete(n),Nd(e,t.onShare)):Vl(e.child,!1)),Pl!==null&&Wl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Gl(e),e=e.sibling;else Pl!==null&&Wl(e)}function Kl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=ui(t,e.stateNode);t=fi(t.default,t.update),e.flags&=-5,t!==`none`&&zl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Kl(e);e=e.sibling}}function ql(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Vl(e.child,!1))}ql(e)}e=e.sibling}}function Jl(e){if(e.tag===30)e.stateNode.paired=null,Vl(e.child,!1),ql(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Jl(e),e=e.sibling;else ql(e)}function Yl(e){for(e=e.child;e!==null;)e.tag===30?Vl(e.child,!1):e.subtreeFlags&33554432&&Yl(e),e=e.sibling}function Xl(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Rl<a.length){var l=a[Rl],u=jp(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Op(c,Rl===0?n:n+`_`+Rl,i),s&&e.flags&4||(Il===null&&(Il=[]),Il.push(c,Rl===0?r:r+`_`+Rl,t.memoizedProps)),Rl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:Xl(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function Zl(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=ui(n,r),a=fi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(Mp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Rl=0,i=Xl(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&Zl(e,t);e=e.sibling}}var Ql=!1,$l=!1,eu=!1,tu=!1,nu=typeof WeakSet==`function`?WeakSet:Set,ru=null,iu=!1,au=!1,ou=!1,su=!1;function cu(e,t,n){if(e=e.containerInfo,up=gh,e=Br(e),Vr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(dp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,ru=t,t=n?9270:1024;ru!==null;){if(e=ru,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Gl(r[a]);if(e.alternate===null&&e.flags&2)n&&Fl(e),lu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Gl(r),lu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Fl(e),lu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,ru=r):(n&&Kl(e),lu(n))}}Pl=null}function lu(e){for(;ru!==null;){var t=ru,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=hc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){mf(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)am(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:am(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=ui(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=fi(a.default,a.update),a!==`none`&&zl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,ru=r;break}ru=t.return}}function uu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Au(e,n),r&4&&hl(5,n);break;case 1:if(Au(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){mf(n,n.return,e)}else{var i=hc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){mf(n,n.return,e)}}}r&64&&_l(n),r&512&&yl(n,n.return);break;case 3:if(Au(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{_o(e,t)}catch(e){mf(n,n.return,e)}}break;case 27:t===null&&r&4&&Ml(n);case 26:case 5:Au(e,n),t===null&&r&4&&El(n),r&512&&yl(n,n.return);break;case 12:Au(e,n);break;case 31:Au(e,n),r&4&&yu(e,n);break;case 13:Au(e,n),r&4&&bu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=vf.bind(null,n),dm(e,n))));break;case 22:if(r=n.memoizedState!==null||Ql,!r){var a=t!==null&&t.memoizedState!==null||$l;t=Ql,i=$l,Ql=r,($l=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Mu(e,n,r)):Au(e,n),Ql=t,$l=i}break;case 30:Au(e,n),r&512&&yl(n,n.return);break;case 7:r&512&&yl(n,n.return);default:Au(e,n)}}function du(e,t){for(e=e.child;e!==null;)fu(e,t),e=e.sibling}function fu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){mf(e,e.return,t)}pu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,Vt=!0}catch(t){mf(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?Dp(s,!0):Dp(e.stateNode,!1)}catch(t){mf(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&du(e,t);break;default:du(e,t)}}function pu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:fu(n,r);break a;case 22:n.memoizedState===null&&pu(n,r);break a;default:pu(n,r)}}e=e.sibling}}function mu(e){var t=e.alternate;t!==null&&(e.alternate=null,mu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Dt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var hu=null,gu=!1;function _u(e,t,n){for(n=n.child;n!==null;)vu(e,t,n),n=n.sibling}function vu(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount==`function`)try{qe.onCommitFiberUnmount(Ke,n)}catch{}switch(n.tag){case 26:$l||bl(n,t),_u(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!$l&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:$l||bl(n,t),Cl(n);var r=hu,i=gu;Tp(n.type)&&(hu=n.stateNode,gu=!1),_u(e,t,n),ym(n.stateNode,n.type,n.memoizedProps),hu=r,gu=i;break;case 5:$l||bl(n,t),Cl(n);case 6:if(n.tag===6&&Cl(n),r=hu,i=gu,hu=null,_u(e,t,n),hu=r,gu=i,hu!==null){if(gu)try{(hu.nodeType===9?hu.body:hu.nodeName===`HTML`?hu.ownerDocument.body:hu).removeChild(n.stateNode),Vt=!0}catch(e){mf(n,t,e)}else try{hu.removeChild(n.stateNode),Vt=!0}catch(e){mf(n,t,e)}}break;case 18:hu!==null&&(gu?(e=hu,Ep(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Ep(hu,n.stateNode));break;case 4:r=hu,i=gu,hu=n.stateNode.containerInfo,gu=!0,_u(e,t,n),hu=r,gu=i;break;case 0:case 11:case 14:case 15:gl(2,n,t),$l||gl(4,n,t),_u(e,t,n);break;case 1:$l||(bl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&vl(n,t,r)),_u(e,t,n);break;case 21:_u(e,t,n);break;case 22:$l=(r=$l)||n.memoizedState!==null,_u(e,t,n),$l=r;break;case 30:bl(n,t),_u(e,t,n);break;case 7:$l||bl(n,t),_u(e,t,n);break;default:_u(e,t,n)}}function yu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){mf(t,t.return,e)}}}function bu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){mf(t,t.return,e)}}function xu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nu),t;default:throw Error(i(435,e.tag))}}function Su(e,t){var n=xu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=yf.bind(null,e,t);t.then(r,r)}})}function Cu(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Tp(l.type)){hu=l.stateNode,gu=!1;break a}break;case 5:hu=l.stateNode,gu=!1;break a;case 3:case 4:hu=l.stateNode.containerInfo,gu=!0;break a}l=l.return}if(hu===null)throw Error(i(160));vu(s,c,o),hu=null,gu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Tu(t,e,n),t=t.sibling}var wu=null;function Tu(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Cu(t,e,n),Eu(e),a&4&&(gl(3,e,e.return),hl(3,e),gl(5,e,e.return));break;case 1:Cu(t,e,n),Eu(e),a&512&&($l||r===null||bl(r,r.return)),a&64&&Ql&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=wu,Cu(t,e,n),Eu(e),a&512&&($l||r===null||bl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(Ql)e.stateNode=hp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Tt]||r[vt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),ap(r,t,n),r[vt]=e,jt(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),ap(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),ap(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[vt]=e,jt(r),t=r}e.stateNode=t}}else Ql||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Dl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||$l||t.parentNode.removeChild(t)):a.count--,n===null?Ql||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Cu(t,e,n),Eu(e),a&512&&($l||r===null||bl(r,r.return)),r!==null&&a&4&&Dl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=eu,eu=!1,Cu(t,e,n),eu=o,Eu(e),a&512&&($l||r===null||bl(r,r.return)),e.flags&32){t=e.stateNode;try{on(t,``),Vt=!0}catch(t){mf(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Dl(e,t,r===null?t:r.memoizedProps)),a&1024&&(tu=!0);break;case 6:if(Cu(t,e,n),Eu(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Vt=!0}catch(t){mf(e,e.return,t)}}break;case 3:if(Vt=!1,Wm=null,o=wu,wu=Cm(t.containerInfo),Cu(t,e,n),wu=o,Eu(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){mf(e,e.return,t)}tu&&(tu=!1,Du(e)),Vt=!1;break;case 4:a=eu,eu=Ql,r=Ht(),o=wu,wu=Cm(e.stateNode.containerInfo),Cu(t,e,n),Eu(e),wu=o,Vt&&au&&(ou=!0),Vt=r,eu=a;break;case 12:Cu(t,e,n),Eu(e);break;case 31:Cu(t,e,n),Eu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Su(e,t)));break;case 13:Cu(t,e,n),Eu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(md=V()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Su(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=Ql,l=$l,u=eu;Ql=c||o,eu=u||o,$l=l||s,Cu(t,e,n),$l=l,eu=u,Ql=c,Eu(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||Ql||$l||(t=s||$l,n=Ql,r=$l,Ql=o||Ql,$l=t,ju(e,2),Ql=n,$l=r),!o&&eu||du(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Su(e,n))));break;case 19:Cu(t,e,n),Eu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Su(e,t)));break;case 30:a&512&&($l||r===null||bl(r,r.return)),a=Ht(),o=au,s=(n&335544064)===n,c=e.memoizedProps,au=s&&fi(c.default,c.update)!==`none`,Cu(t,e,n),Eu(e),s&&r!==null&&Vt&&(e.flags|=4),au=o,Vt=a;break;case 21:break;case 7:a&512&&($l||r===null||bl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Cu(t,e,n),Eu(e)}}function Eu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Ol(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Tl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(wl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;jl(e,kl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(on(l,``),n.flags&=-33),jl(e,kl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Al(e,kl(e),u,s);break;default:throw Error(i(161))}}catch(t){mf(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Du(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Du(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Ou(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)ku(t,e),t=t.sibling;else Zl(t,!1)}function ku(e,t){var n=e.alternate;if(n===null)Ul(e,!1);else switch(e.tag){case 3:if(su=iu=!1,Ll(),Ou(t,e),!iu&&!ou){if(e=Il,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];kp(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),su=!0}Il=null;break;case 5:Ou(t,e);break;case 4:r=iu,iu=!1,Ou(t,e),iu&&(ou=!0),iu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Ou(t,e):Ul(e,!1));break;case 30:r=iu,i=Ll(),iu=!1,Ou(t,e),iu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=ui(a,o),o=ui(n.memoizedProps,o);var s=fi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Rl=0,t=Xl(e,n,t,o,s,a,!0),Rl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),Il=i):i!==null&&(i.push.apply(i,Il),Il=i),iu=e.flags&32?!0:r;break;default:Ou(t,e)}}function Au(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)uu(e,t.alternate,t),t=t.sibling}function ju(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:gl(4,n,n.return),ju(n,r);break;case 1:bl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&vl(n,n.return,i),ju(n,r);break;case 27:r&2&&ym(n.stateNode,n.type,n.memoizedProps);case 5:bl(n,n.return),n.tag!==5&&n.tag!==27||Cl(n),ju(n,r);break;case 6:Cl(n);break;case 26:bl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||$l||i.parentNode.removeChild(i),ju(n,r);break;case 22:n.memoizedState===null&&ju(n,r);break;case 30:bl(n,n.return),ju(n,r);break;case 7:bl(n,n.return);default:ju(n,r)}e=e.sibling}}function Mu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Mu(i,a,n),hl(4,a);break;case 1:if(Mu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){mf(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)go(l[i],c)}catch(e){mf(r,r.return,e)}}s&&o&64&&_l(a),yl(a,a.return);break;case 27:n&2&&Ml(a);case 5:a.tag!==5&&a.tag!==27||Sl(a),Mu(i,a,n),s&&r===null&&o&4&&El(a),yl(a,a.return);break;case 6:Sl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||Ql||Km(Cm(c.ownerDocument),a.type,c),Mu(i,a,n),s&&r===null&&o&4&&El(a),yl(a,a.return);break;case 12:Mu(i,a,n);break;case 31:Mu(i,a,n),s&&o&4&&yu(i,a);break;case 13:Mu(i,a,n),s&&o&4&&bu(i,a);break;case 22:a.memoizedState===null&&Mu(i,a,n),yl(a,a.return);break;case 30:Mu(i,a,n),yl(a,a.return);break;case 7:yl(a,a.return);default:Mu(i,a,n)}t=t.sibling}}function Nu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ta(n))}function Pu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ta(e))}function Fu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Iu(e,t,n,r),t=t.sibling;else i&&Yl(t)}function Iu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Jl(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Fu(e,t,n,r),a&2048&&hl(9,t);break;case 1:Fu(e,t,n,r);break;case 3:Fu(e,t,n,r),i&&su&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Ta(a)));break;case 12:if(a&2048){Fu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){mf(t,t.return,e)}}else Fu(e,t,n,r);break;case 31:Fu(e,t,n,r);break;case 13:Fu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&Jl(t),o._visibility&2?Fu(e,t,n,r):(o._visibility|=2,Lu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&Jl(s),o._visibility&2?Fu(e,t,n,r):Ru(e,t)),a&2048&&Nu(s,t);break;case 24:Fu(e,t,n,r),a&2048&&Pu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Vl(a.child,!0),Vl(t.child,!0))),Fu(e,t,n,r);break;default:Fu(e,t,n,r)}}function Lu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Lu(a,o,s,c,i),hl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Lu(a,o,s,c,i)):u._visibility&2?Lu(a,o,s,c,i):Ru(a,o),i&&l&2048&&Nu(o.alternate,o);break;case 24:Lu(a,o,s,c,i),i&&l&2048&&Pu(o.alternate,o);break;default:Lu(a,o,s,c,i)}t=t.sibling}}function Ru(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ru(n,r),i&2048&&Nu(r.alternate,r);break;case 24:Ru(n,r),i&2048&&Pu(r.alternate,r);break;default:Ru(n,r)}t=t.sibling}}var zu=8192;function Bu(e,t,n){if(e.subtreeFlags&zu)for(e=e.child;e!==null;)Vu(e,t,n),e=e.sibling}function Vu(e,t,n){switch(e.tag){case 26:Bu(e,t,n),e.flags&zu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,wu,e.memoizedState,e.memoizedProps));break;case 5:Bu(e,t,n),e.flags&zu&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=wu;wu=Cm(e.stateNode.containerInfo),Bu(e,t,n),wu=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=zu,zu=16777216,Bu(e,t,n),zu=r):Bu(e,t,n));break;case 30:if((e.flags&zu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Pl===null&&(Pl=new Map),Pl.set(r,i)}Bu(e,t,n);break;default:Bu(e,t,n)}}function Hu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Uu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ru=r,Ku(r,e)}Hu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wu(e),e=e.sibling}function Wu(e){switch(e.tag){case 0:case 11:case 15:Uu(e),e.flags&2048&&gl(9,e,e.return);break;case 3:Uu(e);break;case 12:Uu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gu(e)):Uu(e);break;default:Uu(e)}}function Gu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ru=r,Ku(r,e)}Hu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:gl(8,t,t.return),Gu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Gu(t));break;default:Gu(t)}e=e.sibling}}function Ku(e,t){for(;ru!==null;){var n=ru;switch(n.tag){case 0:case 11:case 15:gl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ta(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ru=r;else a:for(n=e;ru!==null;){r=ru;var i=r.sibling,a=r.return;if(mu(r),r===n){ru=null;break a}if(i!==null){i.return=a,ru=i;break a}ru=a}}}var qu={getCacheForType:function(e){var t=_a(Ca),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return _a(Ca).controller.signal}},Ju=typeof WeakMap==`function`?WeakMap:Map,Yu=0,Xu=null,Zu=null,Qu=0,$u=0,ed=null,td=!1,nd=!1,rd=!1,id=0,ad=0,od=0,sd=0,cd=0,ld=0,ud=0,dd=null,fd=null,pd=!1,md=0,hd=0,gd=1/0,_d=null,vd=null,yd=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return Yu&2&&Qu!==0?Qu&-Qu:I.T===null?ht():Ff()}function Md(){if(ld===0){if(!(Qu&536870912)||J){var e=et;et<<=1,!(et&3932160)&&(et=262144),ld=e}else ld=536870912}return e=So.current,e!==null&&(e.flags|=32),ld}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Lp(ui(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===Xu&&($u===2||$u===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,Qu,ld,!1)),ct(e,n),Yu&2&&e===Xu||(e===Xu&&(!(Yu&2)&&(sd|=n),ad===4&&Rd(e,Qu,ld,!1)),Df(e))}function Fd(e,t,n){if(Yu&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||rt(e,t),a=r?Yd(e,t):qd(e,t,!0),o=r;do{if(a===0){nd&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Ld(n))a=qd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=dd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,s).flags|=256),s=qd(c,s,!1),s!==2&&s!==6){if(rd&&!l){c.errorRecoveryDisabledLanes|=o,sd|=o,a=4;break a}o=fd,fd=a,o!==null&&(fd===null?fd=o:fd.push.apply(fd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ld,!td);break a;case 2:fd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=md+300-V(),10<a)){if(Rd(r,t,ld,!td),H(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=yp(Id.bind(null,r,n,fd,_d,pd,t,ld,sd,ud,td,o,`Throttled`,-0,0),a);break a}Id(r,n,fd,_d,pd,t,ld,sd,ud,td,o,null,-0,0)}break}}while(1);Df(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:mn},Pl=null,Vu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?md-V():(a&4194048)===a?hd-V():0,m=eh(d,m),m!==null)?(Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l)):nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Pr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=it(e,t),t&=~cd,t&=~sd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ye(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ut(e,n,t)}function zd(){return Yu&6?!0:(Of(0,!1),!1)}function Bd(){if(Zu!==null){if($u===0)var e=Zu.return;else e=Zu,la=ca=null,Zo(e),Za=null,Qa=0,e=Zu;for(;e!==null;)ml(e.alternate,e),e=e.return;Zu=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,bp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),Xu=e,Zu=n=Di(e.current,null),Qu=t,$u=0,ed=null,td=!1,nd=rt(e,t),rd=!1,ud=ld=cd=sd=od=ad=0,fd=dd=null,pd=!1,id=it(e,t),_i(),n}function Hd(e,t){X=null,I.H=sc,t===Va||t===Ua?(t=Ya(),$u=3):t===Ha?(t=Ya(),$u=4):$u=t===Tc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,ed=t,Zu===null&&(ad=1,yc(e,Fi(t,e.current)))}function Ud(){var e=So.current;return e===null?!0:(Qu&4194048)===Qu?Co===null:(Qu&62914560)===Qu||Qu&536870912?e===Co:!1}function Wd(){var e=I.H;return I.H=sc,e===null?sc:e}function Gd(){var e=I.A;return I.A=qu,e}function Kd(){ad=4,td||(Qu&4194048)!==Qu&&So.current!==null||(nd=!0),!(od&134217727)&&!(sd&134217727)||Xu===null||Rd(Xu,Qu,ld,!1)}function qd(e,t,n){var r=Yu;Yu|=2;var i=Wd(),a=Gd();(Xu!==e||Qu!==t)&&(_d=null,Vd(e,t)),t=!1;var o=ad;a:do try{if($u!==0&&Zu!==null){var s=Zu,c=ed;switch($u){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:So.current===null&&(t=!0);var l=$u;if($u=0,ed=null,$d(e,s,c,l),n&&nd){o=0;break a}break;default:l=$u,$u=0,ed=null,$d(e,s,c,l)}}Jd(),o=ad;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,la=ca=null,Yu=r,I.H=i,I.A=a,Zu===null&&(Xu=null,Qu=0,_i()),o}function Jd(){for(;Zu!==null;)Zd(Zu)}function Yd(e,t){var n=Yu;Yu|=2;var r=Wd(),a=Gd();Xu!==e||Qu!==t?(_d=null,gd=V()+500,Vd(e,t)):nd=rt(e,t);a:do try{if($u!==0&&Zu!==null){t=Zu;var o=ed;b:switch($u){case 1:$u=0,ed=null,$d(e,t,o,1);break;case 2:case 9:if(Ga(o)){$u=0,ed=null,Qd(t);break}t=function(){$u!==2&&$u!==9||Xu!==e||($u=7),Df(e)},o.then(t,t);break a;case 3:$u=7;break a;case 4:$u=5;break a;case 7:Ga(o)?($u=0,ed=null,Qd(t)):($u=0,ed=null,$d(e,t,o,7));break;case 5:var s=null;switch(Zu.tag){case 26:s=Zu.memoizedState;case 5:case 27:var c=Zu;if(s?Ym(s):c.stateNode.complete){$u=0,ed=null;var l=c.sibling;if(l!==null)Zu=l;else{var u=c.return;u===null?Zu=null:(Zu=u,ef(u))}break b}}$u=0,ed=null,$d(e,t,o,5);break;case 6:$u=0,ed=null,$d(e,t,o,6);break;case 8:Bd(),ad=6;break a;default:throw Error(i(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return la=ca=null,I.H=r,I.A=a,Yu=n,Zu===null?(Xu=null,Qu=0,_i(),ad):0}function Xd(){for(;Zu!==null&&!Ie();)Zd(Zu)}function Zd(e){var t=al(e.alternate,e,id);e.memoizedProps=e.pendingProps,t===null?ef(e):Zu=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=zc(n,t,t.pendingProps,t.type,void 0,Qu);break;case 11:t=zc(n,t,t.pendingProps,t.type.render,t.ref,Qu);break;case 5:Zo(t);var r=t;r===Xi&&(J?(na(r),r.tag===5&&r.stateNode!=null&&(q=r.stateNode)):(na(r),J=!0));default:ml(n,t),t=Zu=Oi(t,id),t=al(n,t,id)}e.memoizedProps=e.pendingProps,t===null?ef(e):Zu=t}function $d(e,t,n,r){la=ca=null,Zo(t),Za=null,Qa=0;var i=t.return;try{if(wc(e,i,t,n,Qu)){ad=1,yc(e,Fi(n,e.current)),Zu=null;return}}catch(t){if(i!==null)throw Zu=i,t;ad=1,yc(e,Fi(n,e.current)),Zu=null;return}t.flags&32768?(J||r===1?e=!0:nd||Qu&536870912?e=!1:(td=e=!0,(r===2||r===9||r===3||r===6)&&(r=So.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,td);return}e=t.return;var n=fl(t.alternate,t,id);if(n!==null){Zu=n;return}if(t=t.sibling,t!==null){Zu=t;return}Zu=t=e}while(t!==null);ad===0&&(ad=5)}function tf(e,t){do{var n=pl(e.alternate,e);if(n!==null){n.flags&=32767,Zu=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Zu=e;return}Zu=e=n}while(e!==null);ad=6,Zu=null}function nf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(yd!==0);if(Yu&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===Xu&&(Zu=Xu=null,Qu=0),xd=t,bd=e,Sd=n,wd=a,Td=r,rf(e,t,n,s,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=gi,lt(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=Oa(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,bf(Ve,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),Nl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=I.T,I.T=null,i=L.p,L.p=2,a=Yu,Yu|=4;try{cu(e,t,n)}finally{Yu=a,L.p=i,I.T=r}}yd=1,Nl?Ed=Fp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(yd!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){yd===3&&(yd=0,ku(xd,bd),yd=4)}function sf(){if(yd===1){yd=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=I.T,I.T=null;var i=L.p;L.p=2;var a=Yu;Yu|=4;try{au=ou=!1,Tu(t,e,n),n=dp;var o=Br(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&zr(s.ownerDocument.documentElement,s)){if(c!==null&&Vr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Rr(s,h),v=Rr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!up,dp=up=null}finally{Yu=a,L.p=i,I.T=r}}e.current=t,yd=2}}function cf(){if(yd===2){yd=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=I.T,I.T=null;var r=L.p;L.p=2;var i=Yu;Yu|=4;try{uu(e,t.alternate,t)}finally{Yu=i,L.p=r,I.T=n}}yd=3}}function lf(){if(yd===4||yd===3){yd=0;var e=Ed;Ed=null,Le();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?yd=5:(yd=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(vd=null),mt(r),n=n.stateNode,qe&&typeof qe.onCommitFiberRoot==`function`)try{qe.onCommitFiberRoot(Ke,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=I.T,a=L.p,L.p=2,I.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{I.T=n,L.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Df(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Of(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ta(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(yd!==5)return!1;var e=bd,t=Cd;Cd=0;var n=mt(Sd),r=I.T,a=L.p;try{L.p=32>n?32:n,I.T=null,n=wd,wd=null;var o=bd,s=Sd;if(yd=0,xd=bd=null,Sd=0,Yu&6)throw Error(i(331));var c=Yu;if(Yu|=4,Wu(o.current),Iu(o,o.current,s,n),Yu=c,Of(0,!1),qe&&typeof qe.onPostCommitFiberRoot==`function`)try{qe.onPostCommitFiberRoot(Ke,o)}catch{}return!0}finally{L.p=a,I.T=r,uf(e,t)}}function pf(e,t,n){t=Fi(n,t),t=xc(e.stateNode,t,2),e=lo(e,t,2),e!==null&&(ct(e,2),Df(e))}function mf(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(vd===null||!vd.has(r))){e=Fi(n,e),n=Sc(2),r=lo(t,n,2),r!==null&&(Cc(n,r,t,e),ct(r,2),Df(r));break}}t=t.return}}function hf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ju;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(rd=!0,i.add(n),e=gf.bind(null,e,t,n),t.then(e,e))}function gf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Xu===e&&(Qu&n)===n&&(ad===4||ad===3&&(Qu&62914560)===Qu&&300>V()-md?Yu&2?cd|=n:Vd(e,0):cd|=n,ud===Qu&&(ud=0)),Df(e)}function _f(e,t){t===0&&(t=ot()),e=bi(e,t),e!==null&&(ct(e,t),Df(e))}function vf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_f(e,n)}function yf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),_f(e,n)}function bf(e,t){return B(e,t)}var xf=null,Sf=null,Cf=!1,wf=!1,Tf=!1,Ef=0;function Df(e){e!==Sf&&e.next===null&&(Sf===null?xf=Sf=e:Sf=Sf.next=e),wf=!0,Cf||(Cf=!0,Pf())}function Of(e,t){if(!Tf&&wf){Tf=!0;do for(var n=!1,r=xf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ye(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Nf(r,a))}else a=Qu,a=H(r,r===Xu?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||rt(r,a)||(n=!0,Nf(r,a))}r=r.next}while(n);Tf=!1}}function kf(){Af()}function Af(){wf=Cf=!1;var e=0;Ef!==0&&vp()&&(e=Ef);for(var t=V(),n=null,r=xf;r!==null;){var i=r.next,a=jf(r,t);a===0?(r.next=null,n===null?xf=i:n.next=i,i===null&&(Sf=n)):(n=r,(e!==0||a&3)&&(wf=!0)),r=i}yd!==0&&yd!==5||Of(e,!1),Ef!==0&&(Ef=0)}function jf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ye(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=at(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Xu,n=Qu,n=H(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&($u===2||$u===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Fe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||rt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Fe(r),mt(n)){case 2:case 8:n=Be;break;case 32:n=Ve;break;case 268435456:n=Ue;break;default:n=Ve}return r=Mf.bind(null,e),n=B(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Fe(r),e.callbackPriority=2,e.callbackNode=null,2}function Mf(e,t){if(yd!==0&&yd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=Qu;return r=H(e,e===Xu?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),jf(e,V()),e.callbackNode!=null&&e.callbackNode===n?Mf.bind(null,e):null)}function Nf(e,t){if(df())return null;Fd(e,t,!0)}function Pf(){Cp(function(){Yu&6?B(ze,kf):Af()})}function Ff(){if(Ef===0){var e=ja;e===0&&(e=$e,$e<<=1,!($e&261888)&&($e=256)),Ef=e}return Ef}function If(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:pn(e)}function Lf(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=If((i[yt]||null).action),o=r.submitter;o&&(t=(t=o[yt]||null)?If(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Pn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ef!==0){var e=new FormData(i,o);qs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),qs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Rf=0;Rf<si.length;Rf++){var zf=si[Rf];ci(zf.toLowerCase(),`on`+(zf[0].toUpperCase()+zf.slice(1)))}ci($r,`onAnimationEnd`),ci(ei,`onAnimationIteration`),ci(ti,`onAnimationStart`),ci(`dblclick`,`onDoubleClick`),ci(`focusin`,`onFocus`),ci(`focusout`,`onBlur`),ci(ni,`onTransitionRun`),ci(ri,`onTransitionStart`),ci(ii,`onTransitionCancel`),ci(ai,`onTransitionEnd`),It(`onMouseEnter`,[`mouseout`,`mouseover`]),It(`onMouseLeave`,[`mouseout`,`mouseover`]),It(`onPointerEnter`,[`pointerout`,`pointerover`]),It(`onPointerLeave`,[`pointerout`,`pointerover`]),Ft(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ft(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ft(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ft(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ft(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ft(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Bf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Vf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Bf));function Hf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){pi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){pi(e)}i.currentTarget=null,a=c}}}}function Uf(e,t){var n=t[xt];n===void 0&&(n=t[xt]=new Set);var r=e+`__bubble`;n.has(r)||(qf(t,e,2,!1),n.add(r))}function Wf(e,t,n){var r=0;t&&(r|=4),qf(n,e,r,t)}var Gf=`_reactListening`+Math.random().toString(36).slice(2);function Kf(e){if(!e[Gf]){e[Gf]=!0,Nt.forEach(function(t){t!==`selectionchange`&&(Vf.has(t)||Wf(t,!1,e),Wf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gf]||(t[Gf]=!0,Wf(`selectionchange`,!1,t))}}function qf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!wn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Jf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ot(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}xn(function(){var r=a,i=gn(n),s=[];a:{var c=oi.get(e);if(c!==void 0){var l=Pn,u=e;switch(e){case`keypress`:if(An(n)===0)break a;case`keydown`:case`keyup`:l=Xn;break;case`focusin`:u=`focus`,l=G;break;case`focusout`:u=`blur`,l=G;break;case`beforeblur`:case`afterblur`:l=G;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Vn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Hn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=$n;break;case $r:case ei:case ti:l=Un;break;case ai:l=er;break;case`scroll`:case`scrollend`:l=In;break;case`wheel`:l=tr;break;case`copy`:case`cut`:case`paste`:l=K;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Zn;break;case`submit`:l=Qn;break;case`toggle`:case`beforetoggle`:l=nr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Sn(m,p),g!=null&&d.push(Yf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==hn&&(u=n.relatedTarget||n.fromElement)&&(Ot(u)||u[bt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Ot(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Vn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Zn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:At(c),h=l==null?u:At(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Ot(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?E(c,l,Zf):null,c!==null&&Qf(s,u,c,d,!1),l!==null&&f!==null&&Qf(s,f,l,d,!0)))}a:{if(c=r?At(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Sr;else if(gr(c)){if(Cr)_=Mr;else{_=Ar;var v=kr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&un(r.elementType)&&(_=Sr):_=jr;if(_&&=_(e,r)){_r(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?At(r):window,e){case`focusin`:(gr(v)||v.contentEditable===`true`)&&(Ur=v,Wr=r,Gr=null);break;case`focusout`:Gr=Wr=Ur=null;break;case`mousedown`:Kr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Kr=!1,qr(s,n,i);break;case`selectionchange`:if(Hr)break;case`keydown`:case`keyup`:qr(s,n,i)}var y;if(ir)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else fr?ur(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(sr&&n.locale!==`ko`&&(fr||b!==`onCompositionStart`?b===`onCompositionEnd`&&fr&&(y=kn()):(En=i,Dn=`value`in En?En.value:En.textContent,fr=!0)),v=Xf(r,b),0<v.length&&(b=new Wn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=dr(n),y!==null&&(b.data=y)))),(y=or?pr(e,n):mr(e,n))&&(b=Xf(r,`onBeforeInput`),0<b.length&&(v=new Wn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),Lf(s,e,r,n,i)}Hf(s,t)})}function Yf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Sn(e,n),i!=null&&r.unshift(Yf(e,i,a)),i=Sn(e,t),i!=null&&r.push(Yf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Zf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Sn(n,a),l!=null&&o.unshift(Yf(n,l,c))):i||(l=Sn(n,a),l!=null&&o.push(Yf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var $f=/\r\n?/g,ep=/\u0000|\uFFFD/g;function tp(e){return(typeof e==`string`?e:``+e).replace($f,`
`).replace(ep,``)}function np(e,t){return t=tp(t),tp(e)===t}function rp(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||on(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&on(e,``+r);else return;break;case`className`:Wt(e,`class`,r);break;case`tabIndex`:Wt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Wt(e,n,r);break;case`style`:ln(e,r,o);return;case`data`:if(t!==`object`){Wt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=pn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&rp(e,t,`name`,a.name,a,null),rp(e,t,`formEncType`,a.formEncType,a,null),rp(e,t,`formMethod`,a.formMethod,a,null),rp(e,t,`formTarget`,a.formTarget,a,null)):(rp(e,t,`encType`,a.encType,a,null),rp(e,t,`method`,a.method,a,null),rp(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=pn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=mn);return;case`onScroll`:r!=null&&Uf(`scroll`,e);return;case`onScrollEnd`:r!=null&&Uf(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=pn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Uf(`beforetoggle`,e),Uf(`toggle`,e),Ut(e,`popover`,r);break;case`xlinkActuate`:Gt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Gt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Gt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Gt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Gt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Gt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Gt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Gt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Gt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ut(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=dn.get(n)||n,Ut(e,n,r);else return}Vt=!0}function ip(e,t,n,r,a,o){switch(n){case`style`:ln(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)on(e,r);else if(typeof r==`number`||typeof r==`bigint`)on(e,``+r);else return;break;case`onScroll`:r!=null&&Uf(`scroll`,e);return;case`onScrollEnd`:r!=null&&Uf(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=mn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Pt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[yt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}Vt=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ut(e,n,r)}return}Vt=!0}function ap(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Uf(`error`,e),Uf(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:rp(e,t,o,s,n,null)}}a&&rp(e,t,`srcSet`,n.srcSet,n,null),r&&rp(e,t,`src`,n.src,n,null);return;case`input`:Uf(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:rp(e,t,r,d,n,null)}}en(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Uf(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:rp(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&nn(e,!!r,n,!0):nn(e,!!r,t,!1);return;case`textarea`:for(s in Uf(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:rp(e,t,s,c,n,null)}an(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:rp(e,t,l,r,n,null)}return;case`dialog`:Uf(`beforetoggle`,e),Uf(`toggle`,e),Uf(`cancel`,e),Uf(`close`,e);break;case`iframe`:case`object`:Uf(`load`,e);break;case`video`:case`audio`:for(r=0;r<Bf.length;r++)Uf(Bf[r],e);break;case`image`:Uf(`error`,e),Uf(`load`,e);break;case`details`:Uf(`toggle`,e);break;case`embed`:case`source`:case`link`:Uf(`error`,e),Uf(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:rp(e,t,u,r,n,null)}return;default:if(un(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&ip(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&rp(e,t,c,r,n,null))}var op={};function sp(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||rp(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(Vt=!0),o=m;break;case`name`:m!==f&&(Vt=!0),a=m;break;case`checked`:m!==f&&(Vt=!0),u=m;break;case`defaultChecked`:m!==f&&(Vt=!0),d=m;break;case`value`:m!==f&&(Vt=!0),s=m;break;case`defaultValue`:m!==f&&(Vt=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&rp(e,t,p,m,r,f)}}$t(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||rp(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(Vt=!0),p=o;break;case`defaultValue`:o!==l&&(Vt=!0),c=o;break;case`multiple`:o!==l&&(Vt=!0),s=o;default:o!==l&&rp(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?nn(e,!!n,n?[]:``,!1):nn(e,!!n,t,!0)):nn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:rp(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(Vt=!0),p=a;break;case`defaultValue`:a!==o&&(Vt=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&rp(e,t,s,a,r,o)}rn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:rp(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(Vt=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:rp(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&rp(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:rp(e,t,u,p,r,m)}return;default:if(un(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&ip(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||ip(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&rp(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||rp(e,t,f,p,r,m)}function cp(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function lp(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&cp(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&cp(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var up=null,dp=null;function fp(e){return e.nodeType===9?e:e.ownerDocument}function pp(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function mp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function hp(e,t,n,r){return n=fp(n).createElement(e),n[vt]=r,n[yt]=t,ap(n,e,t),jt(n),n}function gp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _p=null;function vp(){var e=window.event;return e&&e.type===`popstate`?e!==_p&&(_p=e,!0):(_p=null,!1)}var yp=typeof setTimeout==`function`?setTimeout:void 0,bp=typeof clearTimeout==`function`?clearTimeout:void 0,xp=typeof Promise==`function`?Promise:void 0,Sp=typeof requestAnimationFrame==`function`?requestAnimationFrame:yp,Cp=typeof queueMicrotask==`function`?queueMicrotask:xp===void 0?yp:function(e){return xp.resolve(null).then(e).catch(wp)};function wp(e){setTimeout(function(){throw e})}function Tp(e){return e===`head`}function Ep(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)bm(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,bm(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Tt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&bm(e.ownerDocument.body)}n=i}while(n);Hh(t)}function Dp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Op(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function kp(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Ap(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function jp(e){return Ap(e.getBoundingClientRect(),getComputedStyle(e),e)}function Mp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Ap(t,n,e)}function Np(e){return e.documentElement.clientHeight}function Pp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Fp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Np(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(Pp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Ip(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Ip.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:D({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Ip.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Ip.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Lp(e){return{name:e,group:new Ip(`group`,e),imagePair:new Ip(`image-pair`,e),old:new Ip(`old`,e),new:new Ip(`new`,e)}}function Rp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Rp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Up(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Vp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,zp,e,s,r)}this._eventListeners=a}};function zp(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Rp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Up(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Vp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Bp,e,n,i),r.splice(t,1),a!==null&&a()}};function Bp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Vp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Hp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Up(e,t,n,r){if(e.length===0)return-1;r=Hp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&Hp(a.optionsOrUseCapture)===r)return i}return-1}Rp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Vp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Vp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Rp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag!==6&&(e=b(e),gm(e,t))}Rp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Gp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Wp(t[n],e);n--);};function Gp(e,t){return t.push(e),!1}Rp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=fp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Kp,e,void 0,void 0))};function Kp(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Rp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,qp,e,void 0,void 0)};function qp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Rp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Jp,e,void 0,void 0);for(var n=t=0;n<Yp.length;n++){var r=Yp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Yp[t++]=r}Yp.length=t}};function Jp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Yp=[],Xp=!1;function Zp(e,t,n){Yp.push({fragmentInstance:e,observer:t,instance:n}),Xp||(Xp=!0,_m(function(){Xp=!1;var e=Yp;Yp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Rp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Qp,e,void 0,void 0),e};function Qp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Rp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Rp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Gp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||$p(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function $p(e,t,n,r,i){var a=Ot(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=E(n,a,T),t===null?t=!1:(h(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=E(r,a,T),t===null?t=!1:(h(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function em(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Rp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Gp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),em(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),em(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function tm(e,t){return e=b(e),nm(e,t),!1}function nm(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function rm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Vp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Yp.length;i++){var a=Yp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Yp[r++]=a)}Yp.length=r,n.observe(e)}),nm(e,t))}function im(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Vp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Zp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function am(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:am(n),Dt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function om(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Tt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=fm(e.nextSibling),e===null)break}return null}function sm(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=fm(e.nextSibling),e===null))return null;return e}function cm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=fm(e.nextSibling),e===null))return null;return e}function lm(e){return e.data===`$?`||e.data===`$~`}function um(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function dm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function fm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var pm=null;function mm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return fm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function hm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function gm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function _m(e){Sp(function(){Sp(function(t){return e(t)})})}function vm(e,t,n){switch(t=fp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function ym(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&rp(e,t,r,null,op,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===mn&&(e.onclick=null),Dt(e)}function bm(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Dt(e)}var xm=new Map,Sm=new Set;function Cm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var wm=L.d;L.d={f:Tm,r:Em,D:Om,C:Q,L:km,m:$,X:jm,S:Am,M:Mm};function Tm(){var e=wm.f(),t=zd();return e||t}function Em(e){var t=kt(e);t!==null&&t.tag===5&&t.type===`form`?Ys(t):wm.r(e)}var Z=typeof document>`u`?null:document;function Dm(e,t,n){var r=Z;if(r&&typeof t==`string`&&t){var i=Qt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),Sm.has(i)||(Sm.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),ap(t,`link`,e),jt(t),r.head.appendChild(t)))}}function Om(e){wm.D(e),Dm(`dns-prefetch`,e,null)}function Q(e,t){wm.C(e,t),Dm(`preconnect`,e,t)}function km(e,t,n){wm.L(e,t,n);var r=Z;if(r&&e&&t){var i=`link[rel="preload"][as="`+Qt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Qt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Qt(n.imageSizes)+`"]`)):i+=`[href="`+Qt(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(xm.has(a)||(e=D({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),xm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);ap(o,`link`,e),t===`style`&&(o[Et]=!0,o.onload=o.onerror=function(){Mt(o)}),jt(o),r.head.appendChild(o)}}}function $(e,t){wm.m(e,t);var n=Z;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Qt(r)+`"][href="`+Qt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!xm.has(a)&&(e=D({rel:`modulepreload`,href:e},t),xm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),ap(r,`link`,e),jt(r),n.head.appendChild(r)}}}function Am(e,t,n){wm.S(e,t,n);var r=Z;if(r&&e){var i=U(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=D({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=xm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);jt(c),ap(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){wm.X(e,t);var n=Z;if(n&&e){var r=U(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0},t),(t=xm.get(i))&&Um(e,t),a=n.createElement(`script`),jt(a),ap(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){wm.M(e,t);var n=Z;if(n&&e){var r=U(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0,type:`module`},t),(t=xm.get(i))&&Um(e,t),a=n.createElement(`script`),jt(a),ap(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=xe.current)?Cm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=U(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=U(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=xm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},xm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=U(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+Qt(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Et]){r.loading=1;return}}else t=e.createElement(`link`),t[Et]=!0,t.onload=t.onerror=Mt.bind(null,t),ap(t,`link`,n),jt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+Qt(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Qt(n.href)+`"]`);if(r)return t.instance=r,jt(r),r;var a=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),jt(r),ap(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,jt(o),o;r=Im(n),(a=xm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),jt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),ap(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,jt(a),a):(r=n,(a=xm.get(o))&&(r=D({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),jt(a),ap(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Tt]||a[vt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,jt(a);return}a=t.ownerDocument||t,r=Im(r),(i=xm.get(i))&&Hm(r,i),a=a.createElement(`link`),jt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),ap(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*lp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:M,Provider:null,Consumer:null,_currentValue:he,_currentValue2:he,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=st(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=st(0),this.hiddenUpdates=st(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Ti(3,null,null,t),e.current=a,a.stateNode=e,t=wa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},oo(a),e}function uh(e){return e?(e=Ci,e):Ci}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=co(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=lo(e,r,t),n!==null&&(Pd(n,e,t),uo(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=bi(e,67108864);t!==null&&Pd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jd();t=pt(t);var n=bi(e,t);n!==null&&Pd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=I.T;I.T=null;var a=L.p;try{L.p=2,yh(e,t,n,r)}finally{L.p=a,I.T=i}}function vh(e,t,n,r){var i=I.T;I.T=null;var a=L.p;try{L.p=8,yh(e,t,n,r)}finally{L.p=a,I.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Jf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=kt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=nt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ye(o);s.entanglements[1]|=c,o&=~c}Df(a),!(Yu&6)&&(gd=V()+500,Of(0,!1))}}break;case 31:case 13:s=bi(a,2),s!==null&&Pd(s,a,2),zd(),ph(a,2)}if(a=bh(r),a===null&&Jf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Jf(e,t,r,null,n)}}function bh(e){return e=gn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Ot(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Re()){case ze:return 2;case Be:return 8;case Ve:case He:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=kt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Ot(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,gt(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,gt(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hn=r,n.target.dispatchEvent(r),hn=null}else return t=kt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=kt(n);a!==null&&(e.splice(t,3),t-=3,qs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[yt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[yt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,jd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),zd(),t[bt]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=ht();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.1`)throw Error(i(527,Kh,`19.3.1`));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:I,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{Ke=Jh.inject(qh),qe=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=gc,s=_c,c=vc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[bt]=t.current,Kf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u()),v=g(),y=`-ms-`,b=`-moz-`,x=`-webkit-`,S=`comm`,C=`rule`,w=`decl`,T=`@import`,E=`@namespace`,D=`@keyframes`,ee=`@layer`,O=Math.abs,te=String.fromCharCode,k=Object.assign;function ne(e,t){return N(e,0)^45?(((t<<2^N(e,0))<<2^N(e,1))<<2^N(e,2))<<2^N(e,3):0}function A(e){return e.trim()}function j(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function re(e,t,n){return e.indexOf(t,n)}function N(e,t){return e.charCodeAt(t)|0}function ie(e,t,n){return e.slice(t,n)}function P(e){return e.length}function ae(e){return e.length}function oe(e,t){return t.push(e),e}function se(e,t){return e.map(t).join(``)}function ce(e,t){return e.filter(function(e){return!j(e,t)})}var le=1,ue=1,de=0,fe=0,F=0,pe=``;function me(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:le,column:ue,length:o,return:``,siblings:s}}function I(e,t){return k(me(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function L(e){for(;e.root;)e=I(e.root,{children:[e]});oe(e,e.siblings)}function he(){return F}function ge(){return F=fe>0?N(pe,--fe):0,ue--,F===10&&(ue=1,le--),F}function _e(){return F=fe<de?N(pe,fe++):0,ue++,F===10&&(ue=1,le++),F}function R(){return N(pe,fe)}function ve(){return fe}function z(e,t){return ie(pe,e,t)}function ye(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function be(e){return le=ue=1,de=P(pe=e),fe=0,[]}function xe(e){return pe=``,e}function Se(e){return A(z(fe-1,Te(e===91?e+2:e===40?e+1:e)))}function Ce(e){for(;(F=R())&&F<33;)_e();return ye(e)>2||ye(F)>3?``:` `}function we(e,t){for(;--t&&_e()&&!(F<48||F>102||F>57&&F<65||F>70&&F<97););return z(e,ve()+(t<6&&R()==32&&_e()==32))}function Te(e){for(;_e();)switch(F){case e:return fe;case 34:case 39:e!==34&&e!==39&&Te(F);break;case 40:e===41&&Te(e);break;case 92:_e()}return fe}function Ee(e,t){for(;_e()&&e+F!==57&&(e+F!==84||R()!==47););return`/*`+z(t,fe-1)+`*`+te(e===47?e:_e())}function De(e){for(;!ye(R());)_e();return z(e,fe)}function Oe(e){return xe(ke(``,null,null,null,[``],e=be(e),0,[0],e))}function ke(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=_e()){case 40:if(m!=108&&N(C,d-1)==58){re(C+=M(Se(v),`&`,`&\f`),`&\f`,O(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Se(v);break;case 9:case 10:case 13:case 32:C+=Ce(m);break;case 92:C+=we(ve()-1,7);continue;case 47:switch(R()){case 42:case 47:oe(je(Ee(_e(),ve()),t,n,c),c),(ye(m||1)==5||ye(R()||1)==5)&&P(C)&&ie(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=P(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=M(C,/\f/g,``)),p>0&&(P(C)-d||h===0&&m===47)&&oe(p>32?Me(C+`;`,r,n,d-1,c):Me(M(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(oe(S=Ae(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123){if(u===0)ke(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(N(C,3)===110)break;case 108:if(N(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?ke(e,S,S,r&&oe(Ae(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):ke(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+P(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&ge()==125)continue}switch(C+=te(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(P(C)-1)*_,_=1;break;case 64:R()===45&&(C+=Se(_e())),f=R(),u=d=P(y=C+=De(ve())),v++;break;case 45:m===45&&P(C)==2&&(h=0)}}return a}function Ae(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=ae(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=ie(e,f+1,f=O(g=o[h])),b=e;v<m;++v)(b=A(g>0?p[v]+` `+y:M(y,/&\f/g,p[v])))&&(c[_++]=b);return me(e,t,n,i===0?C:s,c,l,u,d)}function je(e,t,n,r){return me(e,t,n,S,te(he()),ie(e,2,-2),0,r)}function Me(e,t,n,r,i){return me(e,t,n,w,ie(e,0,r),ie(e,r+1,-1),r,i)}function Ne(e,t,n){switch(ne(e,t)){case 5103:return x+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return x+e+e;case 4855:return x+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return b+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return x+e+b+e+y+e+e;case 5936:switch(N(e,t+11)){case 114:return x+e+y+M(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return x+e+y+M(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return x+e+y+M(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return x+e+y+e+e;case 6165:return x+e+y+`flex-`+e+e;case 5187:return x+e+M(e,/(\w+).+(:[^]+)/,x+`box-$1$2`+y+`flex-$1$2`)+e;case 5443:return x+e+y+`flex-item-`+M(e,/flex-|-self/g,``)+(j(e,/flex-|baseline/)?``:y+`grid-row-`+M(e,/flex-|-self/g,``))+e;case 4675:return x+e+y+`flex-line-pack`+M(e,/align-content|flex-|-self/g,``)+e;case 5548:return x+e+y+M(e,`shrink`,`negative`)+e;case 5292:return x+e+y+M(e,`basis`,`preferred-size`)+e;case 6060:return x+`box-`+M(e,`-grow`,``)+x+e+y+M(e,`grow`,`positive`)+e;case 4554:return x+M(e,/([^-])(transform)/g,`$1`+x+`$2`)+e;case 6187:return M(M(M(e,/(zoom-|grab)/,x+`$1`),/(image-set)/,x+`$1`),e,``)+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,x+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,x+`box-pack:$3`+y+`flex-pack:$3`),/space-between/,`justify`)+x+e+e;case 4200:if(!j(e,/flex-|baseline/))return y+`grid-column-align`+ie(e,t)+e;break;case 2592:case 3360:return y+M(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,j(e.props,/grid-\w+-end/)})?~re(e+(n=n[t].value),`span`,0)?e:y+M(e,`-start`,``)+e+y+`grid-row-span:`+(~re(n,`span`,0)?j(n,/\d+/):+j(n,/\d+/)-j(e,/\d+/))+`;`:y+M(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return j(e.props,/grid-\w+-start/)})?e:y+M(M(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,x+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(P(e)-1-t>6)switch(N(e,t+1)){case 109:if(N(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,`$1`+x+`$2-$3$1`+b+(N(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~re(e,`stretch`,0)?Ne(M(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return y+n+`:`+r+s+(i?y+n+`-span:`+(a?o:+o-r)+s:``)+e});case 4949:if(N(e,t+6)===121)return M(e,`:`,`:`+x)+e;break;case 6444:switch(N(e,N(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+x+(N(e,14)===45?`inline-`:``)+`box$3$1`+x+`$2$3$1`+y+`$2box$3`)+e;case 100:return M(e,`:`,`:`+y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,`scroll-`,`scroll-snap-`)+e}return e}function Pe(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function B(e,t,n,r){switch(e.type){case ee:if(e.children.length)break;case T:case E:case w:return e.return=e.return||e.value;case S:return``;case D:return e.return=e.value+`{`+Pe(e.children,r)+`}`;case C:if(!P(e.value=e.props.join(`,`)))return``}return P(n=Pe(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Fe(e){var t=ae(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Ie(e){return function(t){t.root||(t=t.return)&&e(t)}}function Le(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case w:e.return=Ne(e.value,e.length,n);return;case D:return Pe([I(e,{value:M(e.value,`@`,`@`+x)})],r);case C:if(e.length)return se(n=e.props,function(t){switch(j(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:L(I(e,{props:[M(t,/:(read-\w+)/,`:`+b+`$1`)]})),L(I(e,{props:[t]})),k(e,{props:ce(n,r)});break;case`::placeholder`:L(I(e,{props:[M(t,/:(plac\w+)/,`:`+x+`input-$1`)]})),L(I(e,{props:[M(t,/:(plac\w+)/,`:`+b+`$1`)]})),L(I(e,{props:[M(t,/:(plac\w+)/,y+`input-$1`)]})),L(I(e,{props:[t]})),k(e,{props:ce(n,r)})}return``})}}function V(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Re=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,ze=`active`,Be=`data-styled-version`,Ve=`6.6.0`,He=`/*!sc*/
`,Ue=typeof window<`u`&&typeof document<`u`;if(!_.createContext)throw V(19);function We(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var Ge=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:We(`REACT_APP_SC_DISABLE_SPEEDY`)??We(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),Ke=`sc-keyframes-`,qe=new Map,Je=new Map,Ye=1,Xe=e=>{if(qe.has(e))return qe.get(e);for(;Je.has(Ye);)Ye++;let t=Ye++;return qe.set(e,t),Je.set(t,e),t},Ze=e=>Je.get(e),Qe=(e,t)=>{Ye=t+1,qe.set(e,t),Je.set(t,e)},$e=Object.freeze([]),et=Object.freeze({});function tt(e,t,n=et){return e.theme!==n.theme&&e.theme||t||n.theme}var nt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,H=/(^-|-$)/g;function rt(e){return e.replace(nt,`-`).replace(H,``)}var it=/(a)(d)/gi,at=e=>String.fromCharCode(e+(e>25?39:97));function ot(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=at(t%52)+n;return(at(t%52)+n).replace(it,`$1-$2`)}var st=5381,ct=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},lt=e=>ct(st,e);function ut(e){return ot(lt(e)>>>0)}function dt(e){return e.displayName||e.name||`Component`}function ft(e){return typeof e==`string`&&!0}function pt(e){return ft(e)?`styled.${e}`:`Styled(${dt(e)})`}var mt=Symbol.for(`react.memo`),ht=Symbol.for(`react.forward_ref`),gt={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},_t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},yt={[ht]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[mt]:vt};function bt(e){return(`type`in(t=e)&&t.type.$$typeof)===mt?vt:`$$typeof`in e?yt[e.$$typeof]:gt;var t}var xt=Object.defineProperty,St=Object.getOwnPropertyNames,Ct=Object.getOwnPropertySymbols,wt=Object.getOwnPropertyDescriptor,Tt=Object.getPrototypeOf,Et=Object.prototype;function Dt(e,t,n){if(typeof t!=`string`){let r=Tt(t);r&&r!==Et&&Dt(e,r,n);let i=St(t).concat(Ct(t)),a=bt(e),o=bt(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in _t||n&&n[s]||o&&s in o||a&&s in a)){let n=wt(t,s);try{xt(e,s,n)}catch{}}}}return e}function Ot(e){return typeof e==`function`}var kt=Symbol.for(`react.forward_ref`);function At(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===kt&&`styledComponentId`in e}function U(e,t){return e&&t?e+` `+t:e||t||``}function jt(e,t){return e.join(t||``)}function Mt(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Nt(e,t,n=!1){if(!n&&!Mt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Nt(e[n],t[n]);else if(Mt(t))for(let n in t)e[n]=Nt(e[n],t[n]);return e}function Pt(e,t){Object.defineProperty(e,"toString",{value:t})}var Ft=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw V(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+He;return t}},It=`style[${Re}][${Be}="${Ve}"]`,Lt=RegExp(`^${Re}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Rt=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,zt=e=>{if(!e)return document;if(Rt(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(Rt(t))return t}return document},Bt=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},Vt=(e,t)=>{let n=(t.textContent??``).split(He),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(Lt);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(Qe(n,t),Bt(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},Ht=e=>{let t=zt(e.options.target).querySelectorAll(It);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(Re)!==ze&&(Vt(e,r),r.parentNode&&r.parentNode.removeChild(r))}},Ut=!1;function Wt(){if(!1!==Ut)return Ut;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return Ut=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return Ut=t.getAttribute(`content`)||void 0}return Ut=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var Gt=(e,t)=>{if(typeof document>`u`)throw V(20);let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${Re}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(Re,ze),i.setAttribute(Be,Ve);let s=t||Wt();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},Kt=class{constructor(e,t){this.element=Gt(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw V(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},qt=class{constructor(e,t){this.element=Gt(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},Jt=Ue,Yt={isServer:!Ue,useCSSOMInjection:!Ge},Xt=class e{static registerId(e){return Xe(e)}constructor(e=et,t={},n){this.options=Object.assign(Object.assign({},Yt),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ue&&Jt&&(Jt=!1,Ht(this)),Pt(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=Ze(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=Re+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&Ue&&Ht(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Ue&&t.target!==this.options.target&&zt(this.options.target)!==zt(t.target)&&Ht(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new Kt(t,n):new qt(t,n))(this.options),new Ft(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){Xe(e),e.startsWith(Ke)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(Xe(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(Xe(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},Zt=new WeakSet,Qt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function $t(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in Qt||e.startsWith(`--`)?String(t).trim():t+`px`}var en=47;function tn(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var nn=Symbol.for(`sc-keyframes`);function rn(e){return typeof e==`object`&&!!e&&nn in e}function an(e){return Ot(e)&&!(e.prototype&&e.prototype.isReactComponent)}var on=e=>e==null||!1===e||e===``,sn=Symbol.for(`react.client.reference`);function cn(e){return e.$$typeof===sn}function ln(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!on(r)&&(Array.isArray(r)&&Zt.has(r)||Ot(r)?t.push(tn(n)+`:`,r,`;`):Mt(r)?(t.push(n+` {`),ln(r,t),t.push(`}`)):t.push(tn(n)+`: `+$t(n,r)+`;`))}}function un(e,t,n,r,i=[]){if(on(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return cn(e)?i:an(e)&&t?un(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)un(e[a],t,n,r,i);return i}return At(e)?(i.push(`.${e.styledComponentId}`),i):rn(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):cn(e)?i:Mt(e)&&e.toString===Object.prototype.toString?(ln(e,i),i):(i.push(e.toString()),i)}var dn=lt(Ve),fn=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=ct(dn,t),this.baseStyle=n,Xt.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a){if(an(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=jt(un(r,e,t,n)))}else i+=jt(un(a,e,t,n))}}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=ot(ct(ct(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=U(r,a)}}return r}},pn=/&/g;function mn(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function hn(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==en||e.charCodeAt(c+1)!==42){if(o)l===42&&e.charCodeAt(c+1)===en&&(o=!1,c++);else if(l!==34&&l!==39||mn(e,c)){if(a===0){if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}}else a===0?a=l:a===l&&(a=0)}else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function gn(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&gn(a.children,t)}return e}function _n({options:e=et,plugins:t=$e}=et){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(pn,r).replace(i,a))}),e.prefix&&o.push(Le),o.push(B);let s=[],c=Fe(o.concat(Ie(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return hn(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||mn(e,o)){if(s===0){if(t===en&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==en);)o++;o+=2}else if(t!==40){if(t!==41){if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===en)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===en&&o+1<r&&e.charCodeAt(o+1)===en){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++}else c>0&&c--,o++}else c++,o++}else o++}else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:hn(i)):l===0?e:hn(e)}(t),d=Oe(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=gn(d,e.namespace)),s=[],Pe(d,c),s},u=e,d=st;for(let e=0;e<t.length;e++)t[e].name||V(15),d=ct(d,t[e].name);return u!=null&&u.namespace&&(d=ct(d,u.namespace)),u!=null&&u.prefix&&(d=ct(d,`p`)),l.hash=d===st?``:d.toString(),l}var vn=new Xt,yn=_n(),bn=_.createContext({shouldForwardProp:void 0,styleSheet:vn,stylis:yn,stylisPlugins:void 0});bn.Consumer;function xn(){return _.useContext(bn)}var Sn=_.createContext(void 0);Sn.Consumer;var Cn={};function wn(e,t){let n=typeof e==`string`?rt(e):`sc`;Cn[n]=(Cn[n]||0)+1;let r=n+`-`+ut(Ve+n+Cn[n]);return t?t+`-`+r:r}function Tn(e,t,n){let r=At(e),i=e,a=!ft(e),{attrs:o=$e,componentId:s=wn(t.displayName,t.parentComponentId),displayName:c=pt(e)}=t,l=t.displayName&&t.componentId?rt(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new fn(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=_.useContext(Sn),u=xn(),d=e.shouldForwardProp||u.shouldForwardProp,f=tt(t,l,a)||et,[p,m]=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=null,a=e.length>1;for(let t=0;t<e.length;t++){let n=e[t],o=Ot(n)?n(a?Object.assign({},r):r):n;for(let e in o)e===`className`?r.className=U(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):o[e]===void 0?e in r&&(r[e]!==void 0&&(i||=[]).push(e),r[e]=void 0):r[e]=o[e]}return`className`in t&&typeof t.className==`string`&&(r.className=U(r.className,t.className)),[r,i]}(r,t,f),h=i.generateAndInjectStyles(p,u.styleSheet,u.stylis),g=p.as||c,v=ft(g),y=function(e,t,n,r,i,a){let o={};for(let s in e)s[0]===`$`||s===`as`||s===`theme`&&e.theme===n||(s===`forwardedAs`?e.forwardedAs!==void 0&&(o.as=e.forwardedAs):e[s]===void 0?s===`className`||i||a!==null&&a.indexOf(s)!==-1||r&&!r(s,t)||(o[s]=void 0):r&&!r(s,t)||(o[s]=e[s]));return o}(p,g,f,d,v,m),b=U(o,s);return h&&(b+=` `+h),p.className&&(b+=` `+p.className),y[v&&g.includes(`-`)?`class`:`className`]=b,n&&(y.ref=n),(0,_.createElement)(g,y)}(m,e,t)}p.displayName=c;let m=_.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?U(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Nt(e,n,!0);return e}({},i.defaultProps,e):e}}),Pt(m,()=>`.${m.styledComponentId}`),a&&Dt(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var En=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function Dn(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var On=e=>(Zt.add(e),e);function kn(e,...t){if(Ot(e)||Mt(e))return On(un(Dn($e,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?un(n):On(un(Dn(n,t)))}function An(e,t,n=et){if(!t)throw V(1,t);let r=(r,...i)=>e(t,n,kn(r,...i));return r.attrs=r=>An(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>An(e,t,Object.assign(Object.assign({},n),r)),r}var jn=e=>An(Tn,e),W=jn;En.forEach(e=>{W[e]=jn(e)});var Mn,Nn=class{constructor(e,t){this[Mn]=!0,this.inject=(e,t=yn)=>{let n=this.getName(t);if(!e.hasNameForId(this.id,n)){let r=t(this.rules,n,`@keyframes`);e.insertRules(this.id,n,r)}},this.name=e,this.id=Ke+e,this.rules=t,Xe(this.id),Pt(this,()=>{throw V(12,String(this.name))})}getName(e=yn){return e.hash?this.name+ot(e.hash>>>0):this.name}};function Pn(e,...t){let n=jt(kn(e,...t));return new Nn(ut(n),n)}Mn=nn,`${Re}`,`${Re}`,`${Re}`;var Fn=15e3,In=new Set,Ln=new Map,Rn=!1,zn=0;function Bn(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function Vn(){Rn||(Rn=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>Hn(e)))}function Hn(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?Ln.get(n):void 0;n&&r&&(Ln.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),In.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}var G={get available(){return Bn()},send(e){Bn()?(Vn(),window.external.sendMessage(JSON.stringify(e))):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=Fn){if(!Bn())return Promise.reject(Error(`Native bridge is not available.`));Vn();let r=`req-${++zn}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{Ln.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);Ln.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return Vn(),In.add(e),()=>In.delete(e)}},Un=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),K=o(((e,t)=>{t.exports=Un()}))();function Wn(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}async function Gn(e){return G.available?await G.request(`i18n.get`,e?{locale:e}:void 0):{locale:`en`,strings:{},available:[`en`]}}var Kn=(0,_.createContext)(Wn({})),qn=(0,_.createContext)(`en`);function Jn(){return(0,_.useContext)(Kn)}var Yn=({children:e})=>{let[t,n]=(0,_.useState)(()=>Wn({})),[r,i]=(0,_.useState)(`en`);return(0,_.useEffect)(()=>{let e=!1,t=async()=>{try{let t=await Gn();if(e)return;n(()=>Wn(t.strings)),i(t.locale)}catch{}};t();let r=G.on(e=>{e.type===`settings.changed`&&t()});return()=>{e=!0,r()}},[]),(0,_.useEffect)(()=>{document.documentElement.lang=r},[r]),(0,K.jsx)(Kn.Provider,{value:t,children:(0,K.jsx)(qn.Provider,{value:r,children:e})})},Xn=e=>G.send({type:e});function Zn(){let[e,t]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{if(G.available)return G.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>Xn(`window.minimize`),toggleMaximize:()=>Xn(`window.toggleMaximize`),close:()=>Xn(`window.close`)}}function Qn(){return{onMouseDown:()=>Xn(`window.drag`),onDoubleClick:()=>Xn(`window.toggleMaximize`)}}function $n(){let[e,t]=(0,_.useState)(!1),{maximized:n}=Zn();return(0,_.useEffect)(()=>{if(!G.available)return;let e=!1;return G.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,_.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var er=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function tr(){return(0,K.jsx)(K.Fragment,{children:er.map(([e,t])=>(0,K.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),G.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var nr={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},rr={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function ir(e,t){return G.available?await G.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function ar(e){return G.available?(await G.request(`fs.open`,{path:e})).ok:!1}async function or(e,t=!0,n=!1){return await G.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n})}async function sr(e){return G.available?await G.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function cr(e,t){return G.available?(await G.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function lr(e,t,n,r){return G.available?(await G.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function ur(e,t=!1){return G.available?await G.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function dr(){return(await G.request(`fs.places`)).places}async function fr(){return(await G.request(`fs.drives`)).drives}async function pr(e=!1){return(await G.request(`fs.recycle`,{includeOrphans:e})).entries}async function mr(e=!1){await G.request(`fs.recycle.empty`,{includeOrphans:e})}async function hr(e){return!G.available||e.length===0?{ok:!1,done:0}:await G.request(`fs.recycle.restoreMany`,{ids:e})}async function gr(e){return!G.available||e.length===0?{ok:!1,done:0}:await G.request(`fs.recycle.deleteMany`,{ids:e})}async function _r(e){G.available&&e&&await G.request(`fs.recycle.properties`,{id:e})}async function vr(){if(!G.available)return{entries:[],cancelled:!0,failed:!1};let e=await G.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function yr(){return G.available?(await G.request(`fs.recycle.admin.purge`)).ok:!1}async function br(e=0,t=150,n=!1){return G.available?await G.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function xr(){return G.available?(await G.request(`fs.recent`)).entries:[]}async function Sr(){return G.available?(await G.request(`fs.frequent`)).entries:[]}async function Cr(e){G.available&&await G.request(`fs.frequent.record`,{path:e})}async function wr(){await G.request(`fs.recent.clear`)}async function Tr(){await G.request(`fs.frequent.clear`)}async function Er(){return await G.request(`fs.visibility`)}async function Dr(){return await G.request(`fs.hidden.toggle`)}var Or={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,accentColor:null,secondaryColor:null,language:null,themePresets:[]};async function kr(){if(!G.available)return Or;let e=await G.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,language:e?.language??null,themePresets:e?.themePresets??[]}}async function Ar(e){if(!G.available)return e;let t=await G.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets}}async function jr(e,t){G.available&&await G.request(`app.tabs.set`,{tabs:e,active:t})}async function Mr(e,t,n){return G.available?(await G.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var Nr={managed:0,private:0,workingSet:0,available:0};async function Pr(){return G.available?await G.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1}}async function Fr(){return G.available?await G.request(`app.updateStatus`)??null:null}async function Ir(){return G.available?await G.request(`app.checkUpdate`):{current:`dev`,latest:`dev`,available:!1}}async function Lr(e){return!G.available||!e?!1:(await G.request(`app.openUrl`,{url:e})).ok}async function Rr(){return G.available?await G.request(`app.memory`):Nr}async function zr(){return G.available?await G.request(`app.memory.trim`):Nr}async function Br(){return G.available?(await G.request(`app.scheme`)).registered:!1}async function Vr(e){return G.available?(await G.request(`app.scheme.set`,{enabled:e})).registered:!1}async function Hr(e,t=!1){return!G.available||e.length===0?!1:(await G.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function Ur(){return G.available?(await G.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function Wr(){return G.available?await G.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function Gr(e,t,n){return!G.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await G.request(`fs.operation.transfer`,{paths:e,target:t,move:n})}async function Kr(e){return!G.available||e.length===0?[]:(await G.request(`fs.paths.info`,{paths:e})).entries}async function qr(e){return G.available?(await G.request(`fs.clipboard.paste`,{directory:e})).ok:!1}async function Jr(e,t=!1){return!G.available||e.length===0?{ok:!1,needsPermanent:!1,error:null}:await G.request(`fs.operation.delete`,{paths:e,permanent:t})}async function Yr(e,t){return G.available?await G.request(`fs.operation.rename`,{path:e,name:t}):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function Xr(e){return G.available?await G.request(`fs.operation.newFolder`,{directory:e}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function Zr(e){return G.available?await G.request(`fs.operation.newFile`,{directory:e}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function Qr(e){G.available&&e.length!==0&&await G.request(`fs.operation.properties`,{paths:e})}async function $r(e){G.available&&await G.request(`fs.operation.openWith`,{path:e})}async function ei(e){G.available&&await G.request(`fs.operation.terminal`,{path:e})}async function ti(e){return G.available?await G.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function ni(e,t){return G.available?(await G.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function ri(){return G.available?await G.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function ii(){return G.available?await G.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function ai(e){G.available&&await G.request(`fs.operation.showInExplorer`,{path:e})}async function oi(e){return!G.available||e.length===0?{verbs:[],safe:!0}:await G.request(`shell.verbs`,{paths:e})}async function si(e,t,n,r){G.available&&e.length!==0&&await G.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function ci(e){return!G.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await G.request(`fs.operation.compress`,{paths:e})}async function li(){return G.available?(await G.request(`app.tasks`)).tasks:[]}async function ui(){G.available&&await G.request(`app.tasks.clear`)}var di={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,refresh:`f5`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},fi=di.openInNewTab;function pi(e){fi=e.trim()||di.openInNewTab}function mi(e){let t=fi.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function hi(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function gi(e){return e.split(`+`).filter(Boolean).map(e=>_i[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var _i={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function vi(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var yi=new Map,bi=new Map,xi=new Set,Si=0;function Ci(){yi.clear(),bi.clear(),Si+=1,xi.forEach(e=>e())}function wi(){let[e,t]=(0,_.useState)(Si);return(0,_.useEffect)(()=>{let e=()=>t(Si);return xi.add(e),()=>{xi.delete(e)}},[]),e}var Ti=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function Ei(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return Ti.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function Di(e,t,n=!1){let r=wi(),i=e===null?``:Ei(e,t,n),[a,o]=(0,_.useState)(()=>yi.get(i)??null);return(0,_.useEffect)(()=>{if(e===null){o(null);return}if(!G.available)return;if(yi.has(i)){o(yi.get(i)??null);return}let r=!0;return G.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{yi.set(i,e.dataUrl),r&&o(e.dataUrl)},()=>{yi.set(i,null),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function Oi(e){let t=wi(),[n,r]=(0,_.useState)(()=>e?bi.get(e)??null:null);return(0,_.useEffect)(()=>{if(!e||!G.available){r(null);return}if(bi.has(e)){r(bi.get(e)??null);return}let t=!0;return G.request(`fs.iconFile`,{path:e}).then(n=>{bi.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{bi.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var ki=null,Ai=null;function ji(){return ki===null?G.available?(Ai??=G.request(`app.thumbnails`).then(e=>(ki=e.base??``,ki),()=>(ki=``,``)),Ai):Promise.resolve(``):Promise.resolve(ki)}function Mi(e,t=128,n=0){let[r,i]=(0,_.useState)(ki);return(0,_.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return ji().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}`}function Ni(e,t=0,n=``){let[r,i]=(0,_.useState)(ki);if((0,_.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return ji().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function Pi(e,t=0){let[n,r]=(0,_.useState)(ki);return(0,_.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return ji().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var Fi={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},Ii={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function Li(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=Bi(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=Ui(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var Ri=`\0`,zi=``;function Bi(e){return e.query!==Ri&&(Ri=e.query,zi=e.query.toLowerCase()),zi}var Vi=`\0`,Hi=null;function Ui(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===Vi)return Hi;Vi=t;try{Hi=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{Hi=null}return Hi}function Wi(e,t){return Li(e,t)!==null}var Gi=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],Ki={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function qi(e){let t=Yi(e);for(let{kind:e}of Gi)if(Ki[e].has(t))return e;return null}function Ji(e){return qi(e)!==null}function Yi(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}function Xi(e,t,n,r,i={}){return e(t===1?n:r,{count:t,...i})}function q(e){if(e<0)return`—`;if(e===0)return`0 B`;let t=[`B`,`KB`,`MB`,`GB`,`TB`],n=Math.min(Math.floor(Math.log(e)/Math.log(1024)),t.length-1);return`${(e/1024**n).toFixed(n===0?0:1)} ${t[n]}`}function J(){let e=document.documentElement.lang.trim();return e.length>0?e:void 0}function Zi(e){return e<=0?`—`:new Date(e).toLocaleString(J(),{year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`})}function Qi(e){return e>=.9?`#ef4444`:e>=.75?`#f59e0b`:`var(--accent-gradient)`}function $i(e){return e.replace(/[\\/]+$/,``).split(/[\\/]/).at(-1)||e}function ea(e){let t=e.replace(/[\\/]+$/,``),n=Math.max(t.lastIndexOf(`\\`),t.lastIndexOf(`/`));return n>0?t.slice(0,n):t}function ta(e){let t=e.includes(`/`)||e.includes(`\\\\`)?e.replace(/[\\/]+/g,`\\`):e;return t.endsWith(`\\`)&&(t=t.slice(0,-1)),t.toLowerCase()}function na(e){let t=e.name.replace(/[\\/]+$/,``);return/^[a-z]:$/i.test(t)?` (${t.toUpperCase()})`:``}function ra(e){let t=na(e);return t?`${e.label||`Local Disk`}${t}`:e.label||e.name}var ia=(0,_.createContext)({places:{},useIcons:!1}),aa=ia.Provider;function oa(){return(0,_.useContext)(ia)}function sa(e,t){return e.places[ta(t)]}function ca(e,t,n){return sa(e,t)?.name||n}function la(e,t){try{let n=Number(localStorage.getItem(e));return Number.isFinite(n)?n:t}catch{return t}}function ua(e,t){try{localStorage.setItem(e,String(t))}catch{}}function da(e){try{return JSON.parse(localStorage.getItem(e)??`null`)}catch{return null}}function fa(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}var pa=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,K.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,K.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),ma=e=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,K.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),ha=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,K.jsx)(`path`,{d:`M14 3v4h4`})]}),ga=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,K.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,K.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),_a=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,K.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),va=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M12 19V5`}),(0,K.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),ya=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,K.jsx)(`path`,{d:`M20 4v7h-7`})]}),ba=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M12 5v14`}),(0,K.jsx)(`path`,{d:`M5 12h14`})]}),xa=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M19 12H5`}),(0,K.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),Sa=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M5 12h14`}),(0,K.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),Ca=e=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,K.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),wa=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,K.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),Ta=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,K.jsx)(`path`,{d:`M12 12v8`})]}),Ea=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,K.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),Da=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,K.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,K.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,K.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),Oa=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,K.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),ka=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M4 7h16`}),(0,K.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,K.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,K.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),Aa=e=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,K.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),ja=e=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,K.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),Ma=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,K.jsxs)(`defs`,{children:[(0,K.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,K.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,K.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,K.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,K.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,K.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,K.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,K.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,K.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,K.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),Na=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,K.jsx)(`path`,{d:`M15 3v4h4`}),(0,K.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),Pa=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,K.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,K.jsx)(`path`,{d:`m13 5-2 14`})]}),Fa=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,K.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,K.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Ia=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,K.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),La=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,K.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,K.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Ra=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,K.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),za=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,K.jsx)(`path`,{d:`M15 3v4h4`}),(0,K.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),Ba=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,K.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),Va=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,K.jsx)(`path`,{d:`M8.5 14h7`})]}),Ha=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,K.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,K.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),Ua=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,K.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),Wa=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,K.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),Ga=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,K.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),Ka=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,K.jsx)(`path`,{d:`M15 3v4h4`}),(0,K.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),qa=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,K.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,K.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,K.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),Ja=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,K.jsx)(`path`,{d:`m14 6 4 4`})]}),Ya=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,K.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Xa=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,K.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Za=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M12 4v10`}),(0,K.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,K.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Qa=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,K.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,K.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),$a=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,K.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,K.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),eo=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,K.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),to=e=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,K.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),no=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,K.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),ro=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,K.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,K.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),io=e=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,K.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),ao=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,K.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,K.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,K.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),oo=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,K.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),so=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,K.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),co=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,K.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,K.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),lo=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,K.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),uo=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,K.jsx)(`path`,{d:`M3.5 12h17`}),(0,K.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),fo=e=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,K.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),po=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,K.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),mo=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,K.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,K.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),ho=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,K.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),go=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M12 16V4`}),(0,K.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,K.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),_o=e=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,K.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),vo=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,K.jsx)(`path`,{d:`M12 4v16`})]}),yo=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,K.jsx)(`path`,{d:`M15 4v16`})]});function Y(e,t){return({size:n=t,...r})=>(0,K.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var bo=Y(pa,18),xo=Y(ma,18),So=Y(ha,18),Co=Y(ga,18),wo=Y(_a,16),To=Y(va,16),Eo=Y(ya,16),Do=Y(ba,16),Oo=Y(xa,16),ko=Y(Sa,16),Ao=Y(Ca,12),jo=Y(wa,18),Mo=Y(Ta,14),No=Y(Ea,14),X=Y(Da,14),Po=Y(Oa,18),Fo=Y(ka,18),Io=Y(Aa,14),Lo=Y(ja,14),Ro=Y(Ma,18),zo=Y(Na,18),Bo=Y(Pa,18),Vo=Y(Fa,18),Ho=Y(Ia,18),Uo=Y(La,18),Wo=Y(Ra,18),Go=Y(za,18),Ko=Y(Ba,18),qo=Y(Va,18),Jo=Y(Ha,18),Yo=Y(Ua,18),Xo=Y(Wa,18),Zo=Y(Ga,18),Qo=Y(Ka,18),$o=Y(qa,18),es=Y(Ja,16),ts=Y(Ya,18),ns=Y(Xa,18),rs=Y(Za,18),is=Y(Qa,18),as=Y($a,18),os=Y(eo,18),ss=Y(to,18),cs=Y(no,18),ls=Y(ro,18),us=Y(io,18),ds=Y(ao,18),fs=Y(oo,18),ps=Y(so,18),ms=Y(co,18),hs=Y(lo,18),gs=Y(uo,18),_s=Y(fo,18),vs=Y(po,16),ys=Y(mo,16),bs=Y(ho,16),xs=Y(go,16),Ss=Y(_o,16),Cs=Y(vo,16),ws=Y(yo,16),Ts=m(),Es=kn`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,Ds=Pn`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Os=Pn`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,ks=Pn`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,As=Pn`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,js=Pn`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Ms=Pn`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,Ns=kn`animation: ${Ds} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Ps=kn`animation: ${Os} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,Fs=kn`animation: ${ks} 180ms cubic-bezier(0.22, 1, 0.36, 1);`,Is=kn`animation: ${As} 190ms cubic-bezier(0.22, 1, 0.36, 1);`,Ls=kn`animation: ${js} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Rs=kn`animation: ${Ms} 140ms ease-out;`;function zs({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,_.useState)([]),s=(0,_.useRef)(void 0);if((0,_.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,_.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,K.jsx)(Ys,{},`group-rule-${i}`)),n.push((0,K.jsx)(Js,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,K.jsx)(Ys,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,K.jsxs)(Gs,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,K.jsx)(Ks,{children:e.loading?(0,K.jsx)(Xs,{}):e.icon}),(0,K.jsx)(qs,{children:e.label}),a?(0,K.jsx)(Ao,{size:12}):e.checked&&(0,K.jsx)(Io,{size:12})]},`${e.label}-${i}`))}),n};return(0,Ts.createPortal)((0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(Bs,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Vs,{children:r.map((e,t)=>(0,K.jsxs)(Hs,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,K.jsx)(Us,{children:e.icon}),(0,K.jsx)(Ws,{children:e.label})]},`${e.label}-${t}`))}),(0,K.jsx)(Ys,{})]}),m(n,0)]}),a.map((e,t)=>(0,K.jsx)(Bs,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var Bs=W.div`
    position: fixed;
    z-index: 2000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${Es}
    ${Ps}
    transform-origin: top left;
`,Vs=W.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,Hs=W.button`
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
`,Us=W.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,Ws=W.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Gs=W.button`
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
`,Ks=W.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,qs=W.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Js=W.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Ys=W.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,Xs=W.span`
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
`;function Zs({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=Jn(),c=(0,_.useRef)(null);return(0,_.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,Ts.createPortal)((0,K.jsx)(Qs,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,K.jsxs)($s,{role:`alertdialog`,"aria-modal":`true`,children:[(0,K.jsx)(ec,{children:t}),(0,K.jsx)(tc,{children:n}),(0,K.jsxs)(nc,{children:[(0,K.jsx)(rc,{onClick:o,type:`button`,children:s(`Cancel`)}),(0,K.jsx)(rc,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var Qs=W.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Rs}
`,$s=W.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Ns}
`,ec=W.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,tc=W.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,nc=W.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,rc=W.button`
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
`,ic=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),ac=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),oc=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),sc=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function cc({info:e,width:t,onWidth:n,videoAudio:r,videoAutoplay:i,selectionNote:a,emptyNote:o}){let s=Jn(),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(0),[g,v]=(0,_.useState)(0),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)(!1),[C,w]=(0,_.useState)(!1),T=(0,_.useRef)(null),E=(0,_.useRef)(null),D=e?.path??null,ee=e?lc(e.name):``,O=!!e&&!e.isDirectory&&ic.has(ee),te=!!e&&!e.isDirectory&&ac.has(ee),k=!!e&&!e.isDirectory&&oc.has(ee),ne=!!e&&!e.isDirectory&&sc.has(ee),A=!!e&&!e.isDirectory&&ee===`pdf`,j=Mi(O?D:null,512,e?.modified??0),M=Ni(k?D:null,e?.modified??0,ee),re=Ni(O||te?D:null,e?.modified??0,ee),N=Pi(A?D:null,e?.modified??0),ie=Di(!O&&!te&&!k&&!ne&&!A?D:null,e?.isDirectory??!1);if((0,_.useEffect)(()=>{l(!1),d(!1),p(!1),h(0),v(0),w(!1)},[D]),(0,_.useEffect)(()=>{if(!D||!ne){b(null),S(!1);return}let e=!0;return S(!0),b(null),sr(D).then(t=>{e&&(b(t),S(!1))},()=>{e&&(b({text:null,truncated:!1,error:`Could not read this file.`}),S(!1))}),()=>{e=!1}},[D,ne]),!e&&!o)return null;let P=e=>{E.current={x:e.clientX,width:t},e.currentTarget.setPointerCapture(e.pointerId)},ae=e=>{let t=E.current;t&&n(Math.max(220,Math.min(560,t.width+t.x-e.clientX)))},oe=e=>{E.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,K.jsxs)(dc,{children:[(0,K.jsx)(fc,{onPointerDown:P,onPointerMove:ae,onPointerUp:oe,onDoubleClick:()=>n(320),title:s(`Drag to resize; double-click to reset`)}),(0,K.jsx)(pc,{style:{width:t},children:(0,K.jsxs)(mc,{children:[(0,K.jsx)(xo,{size:56}),(0,K.jsx)(`span`,{children:o})]})})]});let se=()=>{let e=T.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,K.jsxs)(dc,{children:[(0,K.jsx)(fc,{onPointerDown:P,onPointerMove:ae,onPointerUp:oe,onDoubleClick:()=>n(320),title:s(`Drag to resize; double-click to reset`)}),(0,K.jsxs)(pc,{style:{width:t},children:[(0,K.jsx)(hc,{children:O&&re&&!c?(0,K.jsxs)(gc,{onPointerEnter:()=>p(!0),onPointerLeave:()=>p(!1),children:[(0,K.jsx)(`video`,{autoPlay:i,controls:!1,muted:!r,onClick:se,onDurationChange:e=>h(e.currentTarget.duration||0),onError:()=>l(!0),onLoadedMetadata:e=>{h(e.currentTarget.duration||0),v(e.currentTarget.currentTime)},onPause:()=>d(!1),onPlay:()=>d(!0),onTimeUpdate:e=>v(e.currentTarget.currentTime),playsInline:!0,poster:j??void 0,preload:`metadata`,ref:T,src:re}),!u&&(0,K.jsx)(_c,{onClick:se,title:s(`Play`),type:`button`,children:(0,K.jsx)(Ss,{size:28})}),f&&(0,K.jsxs)(vc,{onClick:e=>e.stopPropagation(),children:[(0,K.jsxs)(yc,{children:[(0,K.jsx)(`span`,{children:uc(g)}),(0,K.jsx)(`span`,{children:uc(m)})]}),(0,K.jsx)(bc,{"aria-label":s(`Seek`),max:m||0,min:0,onChange:e=>{let t=T.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,v(n)},step:.1,type:`range`,value:Math.min(g,m||0)})]})]}):te&&re?(0,K.jsx)(`audio`,{controls:!0,src:re}):k&&M?(0,K.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:M}):A&&N&&!C?(0,K.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>w(!0),src:N}):A?(0,K.jsx)(So,{size:64}):ne?(0,K.jsx)(xc,{children:x||!y?(0,K.jsx)(Cc,{children:s(`Loading…`)}):y.error?(0,K.jsx)(Cc,{children:y.error}):(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Sc,{children:y.text}),y.truncated&&(0,K.jsx)(Cc,{children:s(`Showing the first 256 KB.`)})]})}):O&&j?(0,K.jsx)(`img`,{alt:``,src:j}):ie?(0,K.jsx)(`img`,{alt:``,src:ie}):e.isDirectory?(0,K.jsx)(xo,{size:64}):(0,K.jsx)(So,{size:64})}),(0,K.jsxs)(wc,{children:[(0,K.jsx)(Tc,{title:e.path,children:e.name}),a&&(0,K.jsx)(Ec,{children:a}),(0,K.jsx)(Dc,{children:e.fields.map(e=>(0,K.jsxs)(Oc,{children:[(0,K.jsx)(kc,{children:e.label}),(0,K.jsx)(Ac,{title:e.value,children:e.value})]},e.label))})]})]})]})}function lc(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function uc(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var dc=W.div`
    display: flex;
    flex-shrink: 0;
    align-self: stretch;
    min-height: 0;
`,fc=W.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,pc=W.aside`
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    background: var(--bg-secondary);
    ${Is}
`,mc=W.div`
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
`,hc=W.div`
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
`,gc=W.div`
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
`,_c=W.button`
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
`,vc=W.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 24px 10px 8px;
    background: linear-gradient(to top, rgba(var(--bg-rgb), 0.92), rgba(var(--bg-rgb), 0));
`,yc=W.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,bc=W.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,xc=W.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: var(--bg-secondary);
`,Sc=W.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,Cc=W.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,wc=W.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,Tc=W.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,Ec=W.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,Dc=W.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,Oc=W.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,kc=W.span`
    color: var(--text-muted);
`,Ac=W.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,jc=[`quick`,`frequent`,`recent`,`home`,`drives`],Mc=jc,Nc={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`},Pc={folder:e=>(0,K.jsx)(xo,{size:e}),home:e=>(0,K.jsx)(bo,{size:e}),desktop:e=>(0,K.jsx)(ts,{size:e}),documents:e=>(0,K.jsx)(ns,{size:e}),downloads:e=>(0,K.jsx)(rs,{size:e}),pictures:e=>(0,K.jsx)(is,{size:e}),music:e=>(0,K.jsx)(as,{size:e}),videos:e=>(0,K.jsx)(os,{size:e}),drive:e=>(0,K.jsx)(Co,{size:e}),image:e=>(0,K.jsx)(Vo,{size:e}),video:e=>(0,K.jsx)(Ho,{size:e}),audio:e=>(0,K.jsx)(Uo,{size:e}),text:e=>(0,K.jsx)(zo,{size:e}),code:e=>(0,K.jsx)(Bo,{size:e}),clock:e=>(0,K.jsx)(Po,{size:e}),star:e=>(0,K.jsx)(ss,{size:e}),file:e=>(0,K.jsx)(So,{size:e}),archive:e=>(0,K.jsx)(Wo,{size:e}),pdf:e=>(0,K.jsx)(Go,{size:e}),executable:e=>(0,K.jsx)(Ko,{size:e}),font:e=>(0,K.jsx)(qo,{size:e}),database:e=>(0,K.jsx)(Jo,{size:e}),config:e=>(0,K.jsx)(Yo,{size:e}),spreadsheet:e=>(0,K.jsx)(Xo,{size:e}),presentation:e=>(0,K.jsx)(Zo,{size:e}),document:e=>(0,K.jsx)(Qo,{size:e}),app:e=>(0,K.jsx)(Ro,{size:e}),gear:e=>(0,K.jsx)(jo,{size:e}),pin:e=>(0,K.jsx)(Mo,{size:e}),trash:e=>(0,K.jsx)(Fo,{size:e}),overview:e=>(0,K.jsx)($o,{size:e}),book:e=>(0,K.jsx)(cs,{size:e}),briefcase:e=>(0,K.jsx)(ls,{size:e}),cloud:e=>(0,K.jsx)(us,{size:e}),gamepad:e=>(0,K.jsx)(ds,{size:e}),camera:e=>(0,K.jsx)(fs,{size:e}),terminal:e=>(0,K.jsx)(ps,{size:e}),server:e=>(0,K.jsx)(ms,{size:e}),package:e=>(0,K.jsx)(hs,{size:e}),globe:e=>(0,K.jsx)(gs,{size:e}),heart:e=>(0,K.jsx)(_s,{size:e})};function Fc(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function Ic(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??jc)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||Mc.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=Fc(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${Nc[n]??n}${Lc(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Lc(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Rc({panel:e,size:t=16}){let n=Oi(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,K.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?Pc[e.icon]:void 0;if(r)return(0,K.jsx)(K.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,K.jsx)(xo,{size:t});case`recent`:return(0,K.jsx)(Po,{size:t});case`frequent`:return(0,K.jsx)(ss,{size:t});case`drives`:return(0,K.jsx)(Co,{size:t});case`home`:return(0,K.jsx)(bo,{size:t});default:return(0,K.jsx)(xo,{size:t})}}function zc({place:e,size:t=18}){let n=Oi(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,K.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&Pc[e.icon]?(0,K.jsx)(K.Fragment,{children:Pc[e.icon](t)}):(0,K.jsx)(xo,{size:t})}var Bc=`#64748b`;function Vc(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Hc({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=Jn(),[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)(`#2dd4bf`),f=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},v=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},y=Math.max(8,Math.min(e,window.innerWidth-272)),b=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,Ts.createPortal)((0,K.jsxs)(Uc,{"data-tag-menu":`true`,ref:f,style:{left:y,top:b},children:[(0,K.jsxs)(Wc,{children:[(0,K.jsx)(`span`,{children:s(`Tags`)}),(0,K.jsx)(Gc,{onClick:o,title:s(`Close`),type:`button`,children:(0,K.jsx)(Lo,{size:11})})]}),(0,K.jsxs)(Kc,{children:[p.length===0&&(0,K.jsx)(Xc,{children:s(`No tags yet.`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,K.jsxs)(qc,{children:[(0,K.jsx)(Jc,{"aria-label":s(`Color of {tag}`,{tag:e}),onChange:t=>g(e,t.target.value),title:s(`Change this tag's color`),type:`color`,value:t}),(0,K.jsxs)(Yc,{$color:t,$ink:Vc(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,K.jsx)(Io,{size:11}),(0,K.jsx)(`span`,{children:e})]})]},e)})]}),(0,K.jsxs)(Zc,{children:[(0,K.jsx)(Jc,{"aria-label":s(`Color of the new tag`),onChange:e=>d(e.target.value),title:s(`Color of the new tag`),type:`color`,value:u}),(0,K.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),v())},placeholder:s(`New tag`),spellCheck:!1,value:c}),(0,K.jsx)(Qc,{onClick:v,type:`button`,children:s(`Add`)})]})]}),document.body)}var Uc=W.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    ${Ns}
`,Wc=W.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,Gc=W.button`
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
`,Kc=W.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,qc=W.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Jc=W.input`
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
`,Yc=W.button`
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
`,Xc=W.span`
    font-size: 11px;
    color: var(--text-muted);
`,Zc=W.div`
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
`,Qc=W.button`
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
`,$c={file:So,folder:xo,text:zo,code:Bo,image:Vo,video:Ho,audio:Uo,archive:Wo,pdf:Go,executable:Ko,font:qo,database:Jo,config:Yo,spreadsheet:Xo,presentation:Zo,document:Qo},el={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function tl(e){let t=e.lastIndexOf(`.`);return t>0?el[e.slice(t).toLowerCase()]??`file`:`file`}function nl({name:e,size:t}){let n=$c[e??`file`]??So;return(0,K.jsx)(n,{size:t})}function rl({path:e,name:t,isDirectory:n,size:r=18}){let i=Di(e,n);return i?(0,K.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,K.jsx)(xo,{size:r}):(0,K.jsx)(nl,{name:tl(t),size:r})}var il=`application/x-yafm-paths`,al=[il,`text/uri-list`];function ol(e){return e?.types.some(e=>al.includes(e.toLowerCase()))??!1}function sl(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(il);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(ll).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var cl=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function ll(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return cl?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function ul(e,t,n=!0){e.dataTransfer.setData(il,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function dl({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let p=Jn(),[m,h]=(0,_.useState)(()=>new Set),[g,v]=(0,_.useState)(!1),y=(0,_.useRef)(null),b=(0,_.useMemo)(()=>e.filter(e=>m.has(e.path)),[e,m]),x=(0,_.useMemo)(()=>t.filter(e=>m.has(e.path)),[t,m]),S=(0,_.useRef)(null);if((0,_.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=S.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&ol(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=sl(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let C=new Set([...e,...t].map(e=>e.path)),w=C.size>0&&[...C].every(e=>m.has(e)),T=C.size,E=e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},D=()=>{h(w?new Set:C)},ee=e=>{y.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),v(!0)},O=e=>{let t=y.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},te=e=>{y.current&&(y.current=null,v(!1),e.currentTarget.releasePointerCapture(e.pointerId))},k=()=>{let e=b.map(e=>e.path);e.length!==0&&(c(e),h(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},ne=()=>{let e=b.map(e=>e.path);e.length!==0&&d(e)},A=()=>{let e=new Map;for(let t of b)e.set(t.path,!0);for(let t of x)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),h(new Set)},j=(e,t)=>{let n=m.has(e.path);return(0,K.jsxs)(Cl,{$checked:n,draggable:!0,onClick:()=>E(e.path),onDragStart:r=>{ul(r,n&&m.size>0?[...new Set([...b,...x].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,K.jsx)(wl,{$checked:n,onClick:t=>{t.stopPropagation(),E(e.path)},type:`button`,children:n&&(0,K.jsx)(Io,{size:8})}),(0,K.jsx)(rl,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,K.jsxs)(Tl,{children:[(0,K.jsx)(El,{children:e.name}),(0,K.jsx)(Dl,{children:ea(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},M=e=>{ol(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,K.jsxs)(fl,{$dragging:g,"data-tray":`true`,ref:S,style:{left:i.x,top:i.y},onDragEnter:M,onDragOver:M,onDrop:e=>{let{paths:t}=sl(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,K.jsxs)(pl,{onPointerDown:ee,onPointerMove:O,onPointerUp:te,children:[(0,K.jsxs)(ml,{children:[(0,K.jsx)(hs,{size:13}),p(`Tray`),(0,K.jsx)(hl,{children:T})]}),(0,K.jsxs)(gl,{onPointerDown:e=>e.stopPropagation(),children:[(0,K.jsx)(_l,{onClick:D,title:p(w?`Select none`:`Select all`),type:`button`,children:p(w?`None`:`All`)}),(0,K.jsx)(_l,{onClick:l,title:p(`Remove everything from the tray`),type:`button`,children:p(`Clear`)}),(0,K.jsx)(vl,{onClick:u,title:p(`Hide the tray`),type:`button`,children:(0,K.jsx)(Lo,{size:10})})]})]}),(0,K.jsxs)(yl,{children:[(0,K.jsxs)(xl,{children:[p(`In this app`),(0,K.jsx)(hl,{children:e.length})]}),e.length===0&&(0,K.jsx)(bl,{children:p(`Drag files or folders here`)}),e.map(e=>j(e,!0)),t.length>0&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(xl,{$clipboard:!0,children:[p(`Clipboard`),(0,K.jsx)(hl,{children:t.length}),n&&(0,K.jsx)(Sl,{children:p(`cut`)})]}),t.map(e=>j(e,n))]})]}),(0,K.jsxs)(Ol,{children:[(0,K.jsx)(kl,{$plain:!0,disabled:b.length===0,onClick:ne,title:p(`Write the selected tray entries to the system clipboard`),type:`button`,children:p(`To clipboard`)}),(0,K.jsx)(kl,{disabled:m.size===0||!a,onClick:A,type:`button`,children:p(`Move here`)}),(0,K.jsx)(kl,{$danger:!0,disabled:b.length===0,onClick:k,type:`button`,children:p(`Remove`)})]})]})}var fl=W.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${Es}
    ${Ns}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,pl=W.div`
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
`,ml=W.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,hl=W.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,gl=W.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,_l=W.button`
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
`,vl=W.button`
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
`,yl=W.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,bl=W.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,xl=W.div`
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
`,Sl=W.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,Cl=W.div`
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
`,wl=W.button`
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
`,Tl=W.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,El=W.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Dl=W.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ol=W.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,kl=W.button`
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
`,Al=60,jl=300,Ml=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],Nl=190,Pl=120;function Fl({listing:e,loading:t,error:n,find:r=Ii,view:i,showImages:a,imageStripHeight:o=Nl,onImageStripHeight:s,onSort:c,onSetTags:l,onOpen:u,onOpenFile:d,showCheckboxes:f=!0,openOnSingleClick:p=!1,shortcuts:m=di,enableShortcuts:h=!0,refreshToken:g=0,onRefresh:v,onClipboardChanged:y,onTransfer:b,onAddToTray:x,onPaste:S,confirmDelete:C=!1,previewVideoAudio:w=!1,previewVideoAutoplay:T=!1,showDetails:E=!0,onPreviewInfo:D,onActivate:ee,groupOf:O,onGridScroll:te,gridFooter:k,allowBackgroundMenu:ne=!0}){let A=Jn(),j=oa(),M=(0,_.useRef)(null),re=(0,_.useRef)(null),N=(0,_.useRef)(null),[ie,P]=(0,_.useState)(jl),[ae,oe]=(0,_.useState)({top:0,height:640}),se=(0,_.useRef)(null),ce=(0,_.useRef)(null),[le,ue]=(0,_.useState)(null),[de,fe]=(0,_.useState)(o),[F,pe]=(0,_.useState)(()=>new Set),me=(0,_.useRef)(F),I=(0,_.useRef)([]);me.current=F;let[L,he]=(0,_.useState)(null),[ge,_e]=(0,_.useState)(null),[R,ve]=(0,_.useState)(null),z=(0,_.useRef)(R);z.current=R;let ye=(0,_.useRef)(ee);ye.current=ee;let[be,xe]=(0,_.useState)(()=>{let e=la(`yafm.preview.width`,320);return e>=220?e:320}),Se=(0,_.useCallback)(e=>{xe(e),ua(`yafm.preview.width`,e)},[]),[Ce,we]=(0,_.useState)(!1),Te=(0,_.useRef)(0),Ee=(0,_.useRef)(0),[De,Oe]=(0,_.useState)({verbs:[],safe:!0,loading:!1}),[ke,Ae]=(0,_.useState)({recommended:[],other:[],loading:!1});(0,_.useEffect)(()=>{pe(new Set),ve(null),he(null),Oe({verbs:[],safe:!0,loading:!1}),Ae({recommended:[],other:[],loading:!1}),Te.current+=1,Ee.current+=1,ce.current=null},[e?.path]),(0,_.useEffect)(()=>{fe(o)},[o]),(0,_.useEffect)(()=>{pe(new Set),ve(null),ce.current=null},[g]);let je=e=>{se.current={y:e.clientY,height:de},e.currentTarget.setPointerCapture(e.pointerId)},Me=e=>{let t=se.current;if(!t)return;let n=Math.max(Pl,Math.round(window.innerHeight*.7));fe(Math.min(n,Math.max(Pl,t.height+t.y-e.clientY)))},Ne=e=>{se.current&&(se.current=null,e.currentTarget.releasePointerCapture(e.pointerId),s?.(de))},Pe=()=>{fe(Nl),s?.(Nl)},B=r.query.length>0,Fe=(0,_.useMemo)(()=>Ml.filter(e=>i.columns?.includes(e.id)),[i.columns]),Ie=i.columns?.includes(`linkTarget`)??!1,Le=(0,_.useMemo)(()=>`minmax(160px, 1fr) ${Fe.map(e=>`${e.width}px`).join(` `)}`.trim(),[Fe]),V=(0,_.useMemo)(()=>e?zl(e.entries.map(t=>{let n=t.isDirectory?sa(j,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:B?Li(i,r):null,tags:e.tags[t.name]??[]}}).filter(e=>!B||r.mode===`dim`||e.ranges!==null),i,e,A):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,B,r,j,i.sort,i.sortDescending,A]);I.current=V;let Re=Math.max(40,i.iconSize+20),ze=Math.max(0,Math.floor(ae.top/Re)-4),Be=Math.min(V.length,ze+Math.ceil(ae.height/Re)+10),Ve=(0,_.useMemo)(()=>V.slice(ze,Be),[V,ze,Be]);(0,_.useEffect)(()=>{let e=N.current;if(!e||i.mode!==`list`)return;let t=()=>oe(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,_.useEffect)(()=>{oe(e=>({...e,top:0})),N.current&&(N.current.scrollTop=0)},[e?.path]),(0,_.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=V.findIndex(e=>e.entry.fullPath===r.currentPath),t=N.current;if(e<0||!t)return;let n=e*Re;(n<t.scrollTop||n+Re>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else M.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,V,Re]);let He=(0,_.useMemo)(()=>V.slice(0,ie),[V,ie]);(0,_.useEffect)(()=>{P(jl)},[e?.path]),(0,_.useEffect)(()=>{if(!r.currentPath)return;let e=V.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&P(t=>Math.max(t,e+jl))},[r.currentPath,V]);let Ue=(0,_.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&P(e=>Math.min(V.length,e+jl))},[V.length]),We=i.mode===`grid`,Ge=(0,_.useMemo)(()=>{if(!We)return[];if(!O)return Hl(He,Vl);let e=[],t=new Map;for(let n of He){let r=O(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[He,We,O]),Ke=(0,_.useMemo)(()=>a?V.filter(e=>!e.entry.isDirectory&&Ji(e.entry.name)):[],[V,a]),qe=Ke.length,Je=(0,_.useMemo)(()=>Ke.slice(0,Al),[Ke]),Ye=(0,_.useMemo)(()=>a?Hl(Je,Bl):[],[Je,a]),Xe=(0,_.useMemo)(()=>V.map(e=>e.entry.fullPath),[V]),Ze=V.length>0&&F.size>=V.length,Qe=F.size>0&&!Ze,$e=()=>{Ze?H():pe(new Set(Xe))},et=e?.path??``,tt=(0,_.useCallback)((e,t)=>{let n=e.ctrlKey||e.metaKey;pe(r=>{if(e.shiftKey&&ce.current!==null){let e=Xe.indexOf(ce.current),i=Xe.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(Xe[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),ce.current=t,e}return ce.current=t,new Set([t])})},[Xe]),nt=(0,_.useCallback)(e=>{ce.current=e,pe(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},[]),H=(0,_.useCallback)(()=>{ce.current=null,pe(new Set)},[]),rt=(0,_.useCallback)(()=>{Te.current+=1,Ee.current+=1,he(null)},[]),it=(0,_.useCallback)((e,t)=>{e.isDirectory?u(e.fullPath,mi(t)):d?.(e.fullPath)},[u,d]),at=(0,_.useCallback)((e,t,n)=>{ue({entry:e,x:t,y:n})},[]),ot=(0,_.useRef)(null),st=(0,_.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;ul(e,F.has(n)?[...F]:[n])},[F]),ct=(0,_.useCallback)(e=>{if(!ol(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);ot.current=t?.dataset.directory===`true`?t.dataset.path??et:et,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[et]),lt=(0,_.useCallback)(e=>{let{paths:t,move:n}=sl(e),r=ot.current??et;ot.current=null,t.length!==0&&b&&(e.preventDefault(),b(t,r,!e.ctrlKey&&n))},[et,b]),ut=(0,_.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),!t&&!ne)return;let n=me.current;t&&!n.has(t)&&pe(new Set([t])),t&&(ce.current=t);let r=t?n.has(t)?[...n]:[t]:[],i=t?r:et?[et]:[],a=++Te.current,o=t?I.current.find(e=>e.entry.fullPath===t):void 0,s=o&&!o.entry.isDirectory&&r.length===1?o.entry.fullPath:null,c=++Ee.current;he({x:e.clientX,y:e.clientY,paths:r,background:!t}),Oe({verbs:[],safe:!0,loading:i.length>0}),s?(Ae({recommended:[],other:[],loading:!0}),ti(s).then(e=>{Ee.current===c&&Ae({...e,loading:!1})},()=>{Ee.current===c&&Ae({recommended:[],other:[],loading:!1})})):Ae({recommended:[],other:[],loading:!1}),Ur().then(we,()=>we(!1)),i.length!==0&&oi(i).then(e=>{Te.current===a&&Oe({...e,loading:!1})},()=>{Te.current===a&&Oe({verbs:[],safe:!0,loading:!1})})},[ne,et]),dt=(0,_.useCallback)(()=>v?.(),[v]),ft=async(e,t=!1)=>{await Hr(e,t)&&(we(!0),y?.())},pt=async e=>{e&&(await qr(e)?(dt(),S?.()):window.alert(A(`Nothing on the clipboard could be pasted here.`)))},mt=async()=>{if(!et)return;let e=await Xr(et);e.ok?dt():window.alert(e.error??A(`Could not create the folder.`))},ht=e=>{pe(new Set([e.fullPath])),ce.current=e.fullPath,ve({path:e.fullPath,value:e.name})},gt=(0,_.useCallback)(e=>ve(t=>t&&{...t,value:e}),[]),_t=(0,_.useCallback)(()=>ve(null),[]),vt=(0,_.useCallback)(async()=>{let e=z.current;if(ve(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=I.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await Yr(e.path,t);r.ok?(H(),dt()):window.alert(r.error??A(`Could not rename the entry.`))},[H,dt,A]),yt=async(e,t=!1)=>{if((t||C)&&!await bt(e,t))return;let n=await Jr(e,t);if(!n.ok&&n.needsPermanent){if(!await bt(e,!0))return;n=await Jr(e,!0)}n.ok?(H(),dt()):window.alert(n.error??A(t?`Could not delete the selection.`:`Could not move the selection to the recycle bin.`))},bt=(0,_.useCallback)((e,t)=>new Promise(n=>_e({paths:e,permanent:t,resolve:n})),[]),xt=(0,_.useCallback)(e=>{_e(t=>(t?.resolve(e),null))},[]),St=async e=>{let t=await ci(e);t.ok?dt():window.alert(t.error??A(`Could not create the ZIP file.`))},Ct=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}};(0,_.useEffect)(()=>{if(!h||L)return;let e=e=>{if(vi(e.target))return;ye.current?.();let t=hi(e),n=[...F],r=n.length===1?V.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(Xe.length===0)return;e.preventDefault();let n=ce.current&&Xe.includes(ce.current)?ce.current:F.size===1?[...F][0]:null,r=n?Xe.indexOf(n):-1,i=t===`home`?0:t===`end`?Xe.length-1:Math.max(0,Math.min(Xe.length-1,r+(t===`arrowdown`?1:-1))),a=Xe[i];pe(new Set([a])),ce.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===m.copy?i(()=>{n.length>0&&ft(n)}):t===m.cut?i(()=>{n.length>0&&ft(n,!0)}):t===m.paste?i(()=>void pt(et)):t===m.delete?i(()=>{n.length>0&&yt(n)}):t===m.deletePermanently?i(()=>{n.length>0&&yt(n,!0)}):t===m.selectAll?i(()=>{pe(new Set(Xe)),ce.current=Xe[0]??null}):t===m.invertSelection?i(()=>{pe(new Set(Xe.filter(e=>!F.has(e)))),ce.current=Xe[0]??null}):t===m.rename&&r?i(()=>void ht(r)):t===m.open&&r?i(()=>{r.isDirectory?u(r.fullPath):d?.(r.fullPath)}):t===m.newFolder||t===`f10`?i(()=>void mt()):t===m.terminal?i(()=>void ei(et)):t===m.properties?i(()=>void Qr(n.length>0?n:et?[et]:[])):t===m.refresh&&i(dt)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[Xe,ft,mt,et,h,L,u,d,pt,dt,yt,ht,V,F,m]);let wt=[],Tt=[],Et=L?.paths[0],Dt=Et?V.find(e=>e.entry.fullPath===Et)?.entry:void 0,Ot=L?.paths.length===1,kt=L?.background?et?[et]:[]:L?.paths??[];if(L?.background)wt.push({label:A(`Open in Terminal`),icon:(0,K.jsx)(ps,{size:14}),onSelect:()=>void ei(et)}),wt.push({label:A(`Show in Explorer`),icon:(0,K.jsx)(xo,{size:14}),separatorBefore:!0,onSelect:()=>void ai(et)}),Tt.push({label:A(`New folder`),icon:(0,K.jsx)(Do,{size:16}),shortcut:gi(m.newFolder),onSelect:()=>void mt()},{label:A(`Paste`),icon:(0,K.jsx)(bs,{size:16}),disabled:!Ce,shortcut:gi(m.paste),onSelect:()=>void pt(et)},{label:A(`Refresh`),icon:(0,K.jsx)(Eo,{size:16}),shortcut:gi(m.refresh),onSelect:dt},{label:A(`Properties`),icon:(0,K.jsx)(jo,{size:16}),shortcut:gi(m.properties),onSelect:()=>void Qr([et])});else if(L){if(wt.push({label:A(`Open`),icon:(0,K.jsx)(ko,{size:14}),onSelect:()=>{Dt&&(Dt.isDirectory?u(Dt.fullPath):d?.(Dt.fullPath))}}),Dt?.isDirectory&&(wt.push({label:A(`Open in new tab`),icon:(0,K.jsx)(Do,{size:14}),onSelect:()=>u(Dt.fullPath,!0)}),wt.push({label:A(`Paste into folder`),icon:(0,K.jsx)(bs,{size:14}),disabled:!Ce,onSelect:()=>void pt(Dt.fullPath)}),wt.push({label:A(`Open in Terminal`),icon:(0,K.jsx)(ps,{size:14}),onSelect:()=>void ei(Dt.fullPath)})),Ot&&Dt&&!Dt.isDirectory){let e=[];ke.loading?e.push({label:A(`Loading apps…`),loading:!0,disabled:!0,onSelect:()=>void 0}):(ke.recommended.forEach(t=>{e.push({label:t.name,group:A(`Suggested apps`),icon:t.icon?(0,K.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,K.jsx)(Ko,{size:14}),onSelect:()=>void ni(Dt.fullPath,t.path).then(e=>{e||$r(Dt.fullPath)})})}),ke.other.forEach(t=>{e.push({label:t.name,group:A(`Other apps`),icon:t.icon?(0,K.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,K.jsx)(Ko,{size:14}),onSelect:()=>void ni(Dt.fullPath,t.path).then(e=>{e||$r(Dt.fullPath)})})})),e.push({label:A(`Choose another app…`),icon:(0,K.jsx)(Ko,{size:14}),separatorBefore:!0,onSelect:()=>void $r(Dt.fullPath)}),wt.push({label:A(`Open with`),icon:(0,K.jsx)(Ko,{size:14}),children:e,onSelect:()=>void $r(Dt.fullPath)})}wt.push({label:A(`Compress to ZIP`),icon:(0,K.jsx)(Wo,{size:14}),separatorBefore:!0,onSelect:()=>void St(L.paths)}),wt.push({label:A(`Copy as path`),icon:(0,K.jsx)(vs,{size:14}),onSelect:()=>void Ct(L.paths)}),x&&wt.push({label:A(`Add to file tray`),icon:(0,K.jsx)(hs,{size:14}),onSelect:()=>x(L.paths)}),wt.push({label:A(`Show in Explorer`),icon:(0,K.jsx)(xo,{size:14}),separatorBefore:!0,onSelect:()=>void ai(L.paths[0])}),Tt.push({label:A(`Cut`),icon:(0,K.jsx)(ys,{size:16}),shortcut:gi(m.cut),onSelect:()=>void ft(L.paths,!0)},{label:A(`Copy`),icon:(0,K.jsx)(vs,{size:16}),shortcut:gi(m.copy),onSelect:()=>void ft(L.paths,!1)}),Ot&&Dt&&Tt.push({label:A(`Rename`),icon:(0,K.jsx)(es,{size:16}),shortcut:gi(m.rename),onSelect:()=>void ht(Dt)}),Tt.push({label:A(`Delete`),icon:(0,K.jsx)(Fo,{size:16}),danger:!0,shortcut:gi(m.delete),onSelect:()=>void yt(L.paths)},{label:A(`Properties`),icon:(0,K.jsx)(jo,{size:16}),shortcut:gi(m.properties),onSelect:()=>void Qr(L.paths)})}if(L){if(De.loading)wt.push({label:A(`More actions`),icon:(0,K.jsx)(Ko,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(De.verbs.length>0){let e={items:[],children:new Map};for(let t of De.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,K.jsx)(Il,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void si(kt,De.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];wt.push({label:De.safe?`More actions`:`More actions (extensions)`,icon:(0,K.jsx)(Ko,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}}let At=ge&&(0,K.jsx)(Zs,{confirmLabel:ge.permanent?A(`Delete`):A(`Move`),danger:ge.permanent,message:ge.permanent?A(`Permanently delete {target}? This cannot be undone.`,{target:ge.paths.length===1?A(`this item`):A(`{count} items`,{count:ge.paths.length})}):A(`Move {target} to the recycle bin?`,{target:ge.paths.length===1?A(`this item`):A(`{count} items`,{count:ge.paths.length})}),onCancel:()=>xt(!1),onConfirm:()=>xt(!0),open:!0,title:ge.permanent?A(`Delete permanently`):A(`Move to the recycle bin`)}),U=(0,_.useMemo)(()=>{if(!e||F.size===0)return null;let t=Xe.find(e=>F.has(e));return t?V.find(e=>e.entry.fullPath===t)?.entry??null:null},[Xe,e,V,F]),jt=(0,_.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:$i(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:A(`Type`),value:A(`Folder`)},{label:A(`Location`),value:e.parent??`—`},{label:A(`Path`),value:e.path},{label:A(`Size`),value:q(t)},{label:A(`Items`),value:Xi(A,n,`1 item`,`{count} items`)},{label:A(`Modified`),value:`—`},{label:A(`Created`),value:`—`},{label:A(`Attributes`),value:`—`}]}},[e,A]),Mt=(0,_.useMemo)(()=>{if(!U||!e)return null;let t=U.isDirectory?e.folderSizes[U.name]:void 0,n=e.tags[U.name]??[],r=U.name.lastIndexOf(`.`),i=r>0&&r<U.name.length-1?U.name.slice(r+1).toUpperCase():`—`;return{name:U.name,path:U.fullPath,isDirectory:U.isDirectory,size:U.size,modified:U.modified,created:U.created,fields:[{label:A(`Type`),value:Gl(U,A)},{label:A(`Extension`),value:U.isDirectory?`—`:i},{label:A(`Location`),value:e.path},{label:A(`Full path`),value:U.fullPath},{label:A(`Size`),value:U.isDirectory?t===void 0?`—`:q(t):q(U.size)},...U.isDirectory?[{label:A(`Items`),value:`${e.counts[U.name]??`—`}`}]:[],{label:A(`Modified`),value:Zi(U.modified)},{label:A(`Created`),value:Zi(U.created)},{label:A(`Link status`),value:U.linkTarget==null?U.linkCount>1?A(`Hard link`):`—`:U.linkValid?`OK`:A(`Broken`)},...U.linkTarget?[{label:A(`Target`),value:U.linkTarget}]:[],...U.linkCount>1?[{label:A(`Links`),value:String(U.linkCount)}]:[],{label:A(`Attributes`),value:[U.isHidden?A(`Hidden`):``,U.isSystem?A(`System`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:A(`Tags`),value:n.join(`, `)}]:[]]}},[e,U,A])??jt,Nt=(0,_.useRef)(D);Nt.current=D,(0,_.useEffect)(()=>{Nt.current?.(Mt)},[D,Mt]);let Pt=E&&Mt&&(0,K.jsx)(cc,{info:Mt,onWidth:Se,selectionNote:F.size>1?Xi(A,F.size,`1 item selected`,`{count} items selected`):void 0,videoAudio:w,videoAutoplay:T,width:be});return n&&!e?(0,K.jsx)(Gu,{children:(0,K.jsx)(qu,{children:n})}):!e&&!t?(0,K.jsx)(Gu,{children:(0,K.jsx)(Ku,{children:A(`Nothing selected.`)})}):i.mode===`grid`?(0,K.jsxs)(lu,{onPointerDown:ee,children:[(0,K.jsxs)(uu,{children:[(0,K.jsxs)(vu,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||H()},onContextMenu:e=>ut(e),onDragOver:ct,onDragStart:st,onDrop:lt,onScroll:e=>{te?.(e.currentTarget),Ue(e.currentTarget)},children:[f&&V.length>0&&(0,K.jsxs)(ou,{children:[(0,K.jsx)(iu,{$checked:Ze,$partial:Qe,"aria-label":A(Ze?`Select none`:`Select all`),onClick:$e,title:A(Ze?`Select none`:`Select all`),type:`button`,children:Ze?(0,K.jsx)(Io,{size:10}):Qe?(0,K.jsx)(au,{}):null}),(0,K.jsx)(`span`,{children:A(Ze?`Select none`:`Select all`)})]}),t&&!e?(0,K.jsx)(Cu,{$size:i.gridSize,children:(0,K.jsx)(Zl,{size:i.gridSize})}):(0,K.jsx)($l,{counts:e?.counts,currentPath:B?r.currentPath:null,groups:Ge,gridSize:i.gridSize,innerRef:M,onContextMenu:ut,onOpen:u,onOpenFile:d,onRenameCancel:_t,onRenameChange:gt,onRenameCommit:vt,onSelect:tt,onToggle:nt,openOnSingleClick:p,renaming:R,searching:B,selected:F,showCheckboxes:f,showTarget:Ie}),!t&&e&&V.length===0&&(0,K.jsx)(Wu,{children:(0,K.jsx)(Ku,{children:n??(B&&r.mode===`hide`?A(`No entries match the search.`):A(`This folder is empty.`))})}),k]}),L&&(0,K.jsx)(zs,{items:wt,onClose:rt,quick:Tt,x:L.x,y:L.y}),At]}),Pt]}):(0,K.jsxs)(lu,{onPointerDown:ee,children:[(0,K.jsxs)(uu,{children:[(0,K.jsxs)(du,{onScroll:e=>{N.current&&N.current.scrollLeft!==e.currentTarget.scrollLeft&&(N.current.scrollLeft=e.currentTarget.scrollLeft)},ref:re,style:{gridTemplateColumns:Le},children:[(0,K.jsxs)(ru,{children:[f&&(0,K.jsx)(iu,{$checked:Ze,$partial:Qe,"aria-label":A(Ze?`Select none`:`Select all`),onClick:e=>{e.stopPropagation(),$e()},title:A(Ze?`Select none`:`Select all`),type:`button`,children:Ze?(0,K.jsx)(Io,{size:10}):Qe?(0,K.jsx)(au,{}):null}),(0,K.jsxs)(fu,{onClick:()=>c(`name`),type:`button`,children:[A(`Name`),Ll(i,`name`)]})]}),Fe.map(e=>(0,K.jsxs)(fu,{onClick:()=>c(e.id),type:`button`,children:[A(e.label),Ll(i,e.id)]},e.id))]}),(0,K.jsxs)(pu,{onClick:e=>{e.target===e.currentTarget&&H()},onContextMenu:e=>ut(e),onDragOver:ct,onDragStart:st,onDrop:lt,onScroll:e=>{re.current&&re.current.scrollLeft!==e.currentTarget.scrollLeft&&(re.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;oe(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:N,children:[t&&!e?(0,K.jsx)(Xl,{template:Le,columns:Fe.length}):(0,K.jsxs)(K.Fragment,{children:[ze>0&&(0,K.jsx)(`div`,{style:{height:ze*Re}}),Ve.map(t=>{let n=t.entry.fullPath;return(0,K.jsx)(tu,{current:B&&n===r.currentPath,dim:B&&t.ranges===null,height:Re,iconSize:i.iconSize,innerRef:M,listing:e,onContextMenu:ut,onOpen:it,onRenameCancel:_t,onRenameChange:gt,onRenameCommit:vt,onSelect:tt,onTagEdit:at,onToggle:nt,openOnSingleClick:p,renaming:R?.path===n?{value:R.value}:null,row:t,selected:F.has(n),showCheckboxes:f,showTarget:Ie,template:Le,visible:Fe},n)}),Be<V.length&&(0,K.jsx)(`div`,{style:{height:(V.length-Be)*Re}})]}),!t&&e&&V.length===0&&(0,K.jsx)(Gu,{children:(0,K.jsx)(Ku,{children:n??(B&&r.mode===`hide`?A(`No entries match the search.`):A(`This folder is empty.`))})})]}),a&&Ke.length>0&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(mu,{onDoubleClick:Pe,onPointerDown:je,onPointerMove:Me,onPointerUp:Ne,title:A(`Drag to resize; double-click to reset`)}),(0,K.jsxs)(hu,{style:{height:de},children:[(0,K.jsxs)(gu,{children:[A(`Preview`),(0,K.jsx)(_u,{children:qe>Al?`${Je.length} / ${qe}`:qe})]}),(0,K.jsx)(vu,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||H()},onContextMenu:e=>ut(e),children:(0,K.jsx)($l,{counts:e?.counts,currentPath:B?r.currentPath:null,groups:Ye,gridSize:i.gridSize,onContextMenu:ut,onOpen:u,onOpenFile:d,onSelect:tt,onToggle:nt,openOnSingleClick:p,searching:B,selected:F,showCheckboxes:f,showTarget:Ie})})]})]}),le&&e&&(0,K.jsx)(Hc,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>l?.(le.entry.name,e,t),onClose:()=>ue(null),tags:e.tags[le.entry.name]??[],x:le.x,y:le.y}),L&&(0,K.jsx)(zs,{items:wt,onClose:rt,quick:Tt,x:L.x,y:L.y}),At]}),Pt]})}function Il({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,K.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,K.jsx)(ko,{size:14});case`document`:return(0,K.jsx)(Qo,{size:14});case`cut`:return(0,K.jsx)(ys,{size:14});case`copy`:return(0,K.jsx)(vs,{size:14});case`paste`:return(0,K.jsx)(bs,{size:14});case`trash`:return(0,K.jsx)(Fo,{size:14});case`pencil`:return(0,K.jsx)(es,{size:14});case`gear`:return(0,K.jsx)(jo,{size:14});case`star`:return(0,K.jsx)(ss,{size:14});case`pin`:return(0,K.jsx)(Mo,{size:14});case`executable`:return(0,K.jsx)(Ko,{size:14});case`share`:return(0,K.jsx)(xs,{size:14});case`arrow`:return(0,K.jsx)(ko,{size:14});default:return(0,K.jsx)(Ro,{size:14})}}function Ll(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var Rl=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function zl(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Gl(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:Rl.compare(String(r),String(i));return t.sortDescending?-o:o})}var Bl=Gi.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&qi(t.entry.name)===e})),Vl=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...Bl.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function Hl(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function Ul(e){return Math.max(24,Math.min(e-56,160))}var Wl={file:`file`,folder:`folder`,text:`text file`,code:`source file`,image:`image`,video:`video`,audio:`audio`,archive:`archive`,pdf:`PDF`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Gl(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`Shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`Internet shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`Folder link`):t(`Symbolic link`);if(e.isDirectory)return t(`Folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(Wl[tl(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`File`)}function Kl(e,t,n,r){switch(e){case`type`:return Gl(t,r);case`size`:return Jl(t,n.folderSizes);case`modified`:return Zi(t.modified);case`created`:return Zi(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:r(`Broken`);default:return``}}function ql({name:e,ranges:t}){if(!t||t.length===0)return(0,K.jsx)(K.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,K.jsx)(Uu,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,K.jsx)(K.Fragment,{children:n})}function Jl(e,t){if(!e.isDirectory)return q(e.size);let n=t[e.name];return n===void 0?`—`:q(n)}function Yl({entry:e,size:t=18}){let n=(0,_.useRef)(null),[r,i]=(0,_.useState)(!1);(0,_.useEffect)(()=>{if(r)return;let e=n.current;if(!e)return;if(!(`IntersectionObserver`in window)){i(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(i(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[r]);let a=Di(r?e.fullPath:null,e.isDirectory,t>32),o=Oi(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,K.jsx)(nu,{$size:t,ref:n,children:e.iconSource?.startsWith(`icon:`)?(0,K.jsx)(nl,{name:e.iconSource.slice(5),size:t}):o?(0,K.jsx)(`img`,{alt:``,height:t,src:o,width:t}):a?(0,K.jsx)(`img`,{alt:``,height:t,src:a,width:t}):e.isDirectory?(0,K.jsx)(xo,{size:t}):(0,K.jsx)(nl,{name:tl(e.name),size:t})})}function Xl({template:e,columns:t}){return(0,K.jsx)(K.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,K.jsxs)(wu,{style:{gridTemplateColumns:e},children:[(0,K.jsxs)(Du,{children:[(0,K.jsx)(Tu,{style:{flexShrink:0,height:18,width:18}}),(0,K.jsx)(Tu,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,K.jsx)(Tu,{style:{width:t%2==0?44:92}},t))]},r))})}function Zl({size:e}){return(0,K.jsx)(K.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,K.jsxs)(Iu,{$dim:!1,$current:!1,$selected:!1,children:[(0,K.jsx)(Lu,{children:(0,K.jsx)(Tu,{style:{height:e,width:e}})}),(0,K.jsx)(zu,{children:(0,K.jsx)(Tu,{style:{height:9,width:`${t}%`}})})]},n))})}var Ql=(0,_.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:d,onRenameCommit:f,onRenameCancel:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:v,onOpenFile:y}){let b=Jn(),x=oa(),S=!e.entry.isDirectory&&Ji(e.entry.name),C=(0,_.useRef)(null),[w,T]=(0,_.useState)(!1);(0,_.useEffect)(()=>{if(!S||w)return;let e=C.current;if(!e)return;if(!(`IntersectionObserver`in window)){T(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(T(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,w]);let E=Mi(S&&w?e.entry.fullPath:null,192,e.entry.modified),[D,ee]=(0,_.useState)(!1),O=e.entry.fullPath,te=t=>{e.entry.isDirectory?v(O,mi(t)):y?.(O)};return(0,K.jsxs)(Iu,{$current:t,$dim:n,$selected:s,onClick:e=>{m(e,O),l&&te(e)},onContextMenu:e=>g(e,O),onDoubleClick:e=>{l||te(e)},ref:e=>{C.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":O,draggable:!u,children:[c&&(0,K.jsx)(cu,{$checked:s,onClick:e=>{e.stopPropagation(),h(O)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`Deselect`:`Select`),type:`button`,children:s&&(0,K.jsx)(Io,{size:10})}),(0,K.jsx)(Lu,{children:S&&E&&!D?(0,K.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>ee(!0),src:E}):(0,K.jsx)(Ru,{children:e.place&&x.useIcons?(0,K.jsx)(zc,{place:e.place,size:r}):(0,K.jsx)(Yl,{entry:e.entry,size:r})})}),(0,K.jsxs)(zu,{children:[u?(0,K.jsx)(eu,{onCancel:()=>p?.(),onChange:e=>d?.(e),onCommit:()=>f?.(),value:u.value}):(0,K.jsx)(Bu,{$broken:e.entry.linkValid===!1,children:(0,K.jsx)(ql,{name:e.label,ranges:e.ranges})}),(0,K.jsx)(Vu,{children:e.entry.isDirectory?i===void 0?Gl(e.entry,b):b(`{type} · {count} items`,{type:Gl(e.entry,b),count:i}):b(`{type} · {size}`,{type:Gl(e.entry,b),size:q(e.entry.size)})}),a&&e.entry.linkTarget&&(0,K.jsxs)(Hu,{title:e.entry.linkTarget,children:[`→ `,e.entry.linkTarget]})]})]})});function $l({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:p,onOpen:m,onOpenFile:h,onRenameChange:g,onRenameCommit:_,onRenameCancel:v}){let y=Jn();return(0,K.jsx)(K.Fragment,{children:e.map(e=>(0,K.jsxs)(yu,{children:[(0,K.jsxs)(bu,{children:[y(e.label),(0,K.jsx)(xu,{children:e.rows.length}),(0,K.jsx)(Su,{})]}),(0,K.jsx)(Cu,{$size:t,children:e.rows.map(e=>(0,K.jsx)(Ql,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:Ul(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:p,onOpen:m,onOpenFile:h,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:v,onRenameChange:g,onRenameCommit:_,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function eu({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,_.useRef)(null);return(0,_.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,K.jsx)(ku,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var tu=(0,_.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:_,onTagEdit:v,onRenameChange:y,onRenameCommit:b,onRenameCancel:x}){let S=Jn(),C=oa(),w=e.entry.fullPath;return(0,K.jsxs)(Eu,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{m(t,w),o&&_(e.entry,t)},onContextMenu:e=>g(e,w),onDoubleClick:t=>{o||_(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":w,draggable:!p,children:[(0,K.jsxs)(Du,{children:[i&&(0,K.jsx)(su,{$checked:r,onClick:e=>{e.stopPropagation(),h(w)},onDoubleClick:e=>e.stopPropagation(),title:S(r?`Deselect`:`Select`),type:`button`,children:r&&(0,K.jsx)(Io,{size:10})}),e.place&&C.useIcons?(0,K.jsx)(nu,{children:(0,K.jsx)(zc,{place:e.place,size:s})}):(0,K.jsx)(Yl,{entry:e.entry,size:s}),p?(0,K.jsx)(eu,{onCancel:x,onChange:y,onCommit:b,value:p.value}):(0,K.jsx)(Ou,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,K.jsx)(ql,{name:e.label,ranges:e.ranges})}),a&&e.entry.linkTarget&&(0,K.jsxs)(Au,{title:e.entry.linkTarget,children:[`→ `,e.entry.linkTarget]})]}),u.map(t=>(0,K.jsx)(ju,{children:t.id===`tags`?(0,K.jsx)(Mu,{onClick:t=>{t.stopPropagation(),v(e.entry,t.clientX,t.clientY)},title:S(`Edit tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,K.jsx)(Nu,{$color:t,$ink:Vc(t),children:e},e)}):(0,K.jsx)(Pu,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,K.jsx)(Fu,{children:S(`Broken`)}):Kl(t.id,e.entry,d,S)},t.id))]})}),nu=W.span`
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
`,ru=W.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,iu=W.button`
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
`,au=W.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,ou=W.div`
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
`,su=W.button`
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
`,cu=W(su)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,lu=W.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,uu=W.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
`,du=W.div`
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
`,fu=W.button`
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
`,pu=W.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,mu=W.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,hu=W.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: var(--bg-secondary);
`,gu=W.div`
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
`,_u=W.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,vu=W.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,yu=W.section`
    & + & {
        margin-top: 22px;
    }
`,bu=W.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,xu=W.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Su=W.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,Cu=W.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,wu=W.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,Tu=W.span`
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
`,Eu=W.div`
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
`,Du=W.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,Ou=W.span`
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,ku=W.input`
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
`,Au=W.span`
    overflow: hidden;
    min-width: 0;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent-primary);
    text-overflow: ellipsis;
    white-space: nowrap;
`,ju=W.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Mu=W.button`
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
`,Nu=W.span`
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
`,Pu=W.span`
    color: var(--text-muted);
    font-size: 11px;
`,Fu=W.span`
    color: #fca5a5;
`,Iu=W.div`
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
`,Lu=W.div`
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
`,Ru=W.span`
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
`,zu=W.div`
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
`,Bu=W.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Vu=W.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Hu=W.span`
    width: 100%;
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--accent-primary);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Uu=W.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,Wu=W.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Gu=W.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,Ku=W.p`
    font-size: 13px;
    color: var(--text-muted);
`,qu=W.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`;function Ju({initial:e=``,mode:t=`folder`,extensions:n,onCancel:r,onSelect:i}){let a=t===`file`,o=Jn(),s=oa(),[c,l]=(0,_.useState)(e),[u,d]=(0,_.useState)(e),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)(!0),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)([]),C=(0,_.useMemo)(()=>Object.values(s.places).filter(e=>e.path.length>0),[s.places]);(0,_.useEffect)(()=>{fr().then(S,()=>S([]))},[]),(0,_.useEffect)(()=>{let e=!0;return h(!0),v(null),or(c||void 0,!1).then(t=>{e&&(p(t),l(t.path),d(t.path),b(null),h(!1))},t=>{e&&(v(t instanceof Error?t.message:String(t)),h(!1))}),()=>{e=!1}},[c]),(0,_.useEffect)(()=>{let e=e=>{e.key===`Escape`&&r()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[r]);let w=e=>{let t=e.trim();t.length>0&&l(t)},T=()=>{m||g||(a?y&&i(y.fullPath):i(f?.path||c))},E=f?.parent??(c?ea(c):null),D=f?.entries.filter(e=>e.isDirectory)??[],ee=a?(f?.entries??[]).filter(e=>!e.isDirectory&&(!n?.length||n.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))):[];return(0,Ts.createPortal)((0,K.jsx)(Yu,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,K.jsxs)(Xu,{role:`dialog`,"aria-modal":`true`,children:[(0,K.jsxs)(Zu,{children:[(0,K.jsxs)(Qu,{children:[(0,K.jsx)(xo,{size:16}),o(a?`Choose a file`:`Choose a folder`)]}),(0,K.jsx)($u,{onClick:r,title:o(`Cancel`),type:`button`,children:(0,K.jsx)(Lo,{size:12})})]}),(0,K.jsxs)(ed,{children:[(0,K.jsx)(nd,{$disabled:!E,onClick:()=>E&&w(E),title:o(`Up one level`),type:`button`,children:(0,K.jsx)(To,{size:14})}),(0,K.jsx)(td,{onChange:e=>d(e.target.value),onKeyDown:e=>{e.key===`Enter`&&w(u)},spellCheck:!1,value:u}),(0,K.jsx)(nd,{onClick:()=>w(u),title:o(`Refresh`),type:`button`,children:(0,K.jsx)(Eo,{size:14})})]}),(0,K.jsxs)(rd,{children:[C.map(e=>(0,K.jsxs)(id,{onClick:()=>w(e.path),title:e.path,type:`button`,children:[(0,K.jsx)(zc,{place:e,size:14}),e.name]},e.path)),x.map(e=>(0,K.jsxs)(id,{onClick:()=>w(e.name),title:e.name,type:`button`,children:[(0,K.jsx)(Co,{size:14}),e.label||e.name]},e.name))]}),(0,K.jsxs)(ad,{children:[m&&(0,K.jsx)(cd,{children:o(`Working…`)}),!m&&g&&(0,K.jsx)(cd,{$error:!0,children:g}),!m&&!g&&D.length===0&&ee.length===0&&(0,K.jsx)(cd,{children:o(`This folder is empty.`)}),!m&&!g&&D.map(e=>(0,K.jsxs)(od,{onClick:()=>w(e.fullPath),onDoubleClick:()=>w(e.fullPath),title:e.fullPath,type:`button`,children:[(0,K.jsx)(rl,{isDirectory:!0,name:e.name,path:e.fullPath,size:18}),(0,K.jsx)(sd,{children:e.name})]},e.fullPath)),!m&&!g&&ee.map(e=>(0,K.jsxs)(od,{$selected:y?.fullPath===e.fullPath,onClick:()=>b(e),onDoubleClick:()=>{b(e),i(e.fullPath)},title:e.fullPath,type:`button`,children:[(0,K.jsx)(rl,{isDirectory:!1,name:e.name,path:e.fullPath,size:18}),(0,K.jsx)(sd,{children:e.name})]},e.fullPath))]}),(0,K.jsxs)(ld,{children:[(0,K.jsx)(ud,{children:y?.fullPath||f?.path||c||o(`Home`)}),(0,K.jsxs)(dd,{children:[(0,K.jsx)(fd,{onClick:r,type:`button`,children:o(`Cancel`)}),(0,K.jsxs)(fd,{$primary:!0,disabled:m||g!==null||a&&!y,onClick:T,type:`button`,children:[(0,K.jsx)(Io,{size:12}),o(a?`Select this file`:`Select this folder`)]})]})]})]})}),document.body)}var Yu=W.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${Rs}
`,Xu=W.div`
    display: flex;
    flex-direction: column;
    width: min(720px, 100%);
    height: min(580px, 86vh);
    overflow: hidden;
    ${Es}
    ${Ns}
`,Zu=W.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 14px;
    border-bottom: 1px solid var(--border-color);
`,Qu=W.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,$u=W.button`
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
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
`,ed=W.div`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 9px 12px;
    border-bottom: 1px solid var(--border-color);
`,td=W.input`
    flex: 1;
    min-width: 0;
    height: 28px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 12px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
    }
`,nd=W.button`
    display: grid;
    place-items: center;
    width: 28px;
    height: 28px;
    padding: 0;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: ${({$disabled:e})=>e?`default`:`pointer`};
    opacity: ${({$disabled:e})=>e?.35:1};

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,rd=W.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    padding: 8px 12px;
    border-bottom: 1px solid var(--border-color);
`,id=W.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    max-width: 190px;
    padding: 4px 8px;
    border: 1px solid var(--border-color);
    border-radius: 999px;
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 10px;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`,ad=W.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 5px;
`,od=W.button`
    display: flex;
    align-items: center;
    gap: 9px;
    width: 100%;
    padding: 6px 8px;
    border: 1px solid ${({$selected:e})=>e?`rgba(var(--accent-rgb), 0.4)`:`transparent`};
    border-radius: var(--radius-sm);
    background: ${({$selected:e})=>e?`rgba(var(--accent-rgb), 0.1)`:`transparent`};
    color: ${({$selected:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 12px;
    text-align: left;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,sd=W.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,cd=W.p`
    padding: 14px;
    color: ${({$error:e})=>e?`#fca5a5`:`var(--text-muted)`};
    font-size: 11px;
    text-align: center;
`,ld=W.footer`
    display: flex;
    align-items: center;
    gap: 12px;
    justify-content: space-between;
    padding: 10px 14px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,ud=W.span`
    min-width: 0;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,dd=W.span`
    display: flex;
    gap: 7px;
    flex-shrink: 0;
`,fd=W.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 6px 11px;
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
`,pd=null,md=null;function hd(e){pd=e}function gd(e){md=e}function _d(e){return pd?pd(e):Promise.resolve(null)}function vd(e){return md?md(e):Promise.resolve(null)}function yd({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,onQuery:s,onPrevious:c,onNext:l,onMatchCase:u,onRegex:d,onMode:f,onClose:p}){let m=Jn(),h=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=h.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let g=e=>{e(),h.current?.focus()};return(0,K.jsxs)(bd,{children:[(0,K.jsx)(wo,{}),(0,K.jsx)(xd,{"aria-label":m(`Search this folder`),onChange:e=>s(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?c():l()),e.key===`Escape`&&(e.preventDefault(),p())},placeholder:m(`Search this folder`),ref:h,spellCheck:!1,value:e}),(0,K.jsx)(Sd,{children:i===0?`0/0`:`${a+1}/${i}`}),(0,K.jsx)(Cd,{onClick:()=>g(c),title:m(`Previous match (Shift+Enter)`),type:`button`,children:(0,K.jsx)(Ao,{size:12})}),(0,K.jsx)(Cd,{$down:!0,onClick:()=>g(l),title:m(`Next match (Enter)`),type:`button`,children:(0,K.jsx)(Ao,{size:12})}),(0,K.jsx)(wd,{$on:n,onClick:()=>g(u),title:m(`Match case`),type:`button`,children:`Aa`}),(0,K.jsx)(wd,{$on:r,onClick:()=>g(d),title:m(`Regular expression`),type:`button`,children:`.*`}),(0,K.jsx)(Td,{$on:t===`hide`,onClick:()=>g(f),title:m(t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`),type:`button`,children:m(t===`hide`?`Hide`:`Dim`)}),(0,K.jsx)(Cd,{onClick:p,title:m(`Close search (Esc)`),type:`button`,children:(0,K.jsx)(Lo,{size:12})})]})}var bd=W.div`
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
    ${Ls}
`,xd=W.input`
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
`,Sd=W.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Cd=W.button`
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
`,wd=W.button`
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
`,Td=W(wd)`
    min-width: 34px;
    font-family: var(--font-sans);
    font-size: 10px;
`;function Ed({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=Jn(),a=(0,_.useRef)(null),o=(0,_.useRef)(null),[s,c]=(0,_.useState)(null);return(0,_.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,_.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,_.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,Ts.createPortal)((0,K.jsxs)(Dd,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(Pc).map(n=>(0,K.jsx)(Od,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:Pc[n](16)},n)),(0,K.jsx)(Od,{onClick:async()=>{let e=await vd([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`Choose an image`),type:`button`,children:(0,K.jsx)(Do,{size:13})}),r&&(0,K.jsx)(Od,{$active:!e,onClick:()=>t(null),title:i(`Default`),type:`button`,children:(0,K.jsx)(Lo,{size:12})})]}),document.body)]})}var Dd=W.div`
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
    ${Ps}
    transform-origin: top left;
`,Od=W.button`
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
`,kd=W.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 14px 26px 34px;
`,Ad=W.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    flex-wrap: wrap;
    padding-bottom: 14px;
`,jd=W.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,Md=W.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,Nd=W.button`
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
`,Pd=W.div`
    position: relative;
    display: inline-flex;
`,Fd=W.div`
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
`,Id=W.button`
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
`,Ld=W.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,Rd=W.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
`,zd=W.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Bd=W.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,Vd=W.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Hd=W.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,Ud=W.input`
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
`,Wd=W.button`
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
`,Gd=W.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,Kd=W.div`
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
    transition: background 130ms ease, border-color 130ms ease, transform 140ms cubic-bezier(0.22, 1, 0.36, 1),
        box-shadow 140ms ease;

    &:hover {
        border-color: ${({$plain:e})=>e?`var(--border-color)`:`var(--border-color-hover)`};
        background: ${({$plain:e})=>e?`var(--bg-card)`:`var(--bg-card-hover)`};
        box-shadow: ${({$plain:e})=>e?`none`:`0 8px 20px rgba(0, 0, 0, 0.22)`};
        transform: ${({$plain:e})=>e?`none`:`translateY(-1px)`};
    }
`,qd=W.span`
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
`,Jd=W.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,Yd=W.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Xd=W.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,Zd=W.button`
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
`,Qd=W.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,$d=W.button`
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
`,ef=W.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,tf=W.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,nf=W.div`
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
`,rf=W.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,af=W.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,of=W.button`
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
`,sf=W.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,cf=W.button`
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
`,lf=W.button`
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
`,uf=W.button`
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
`,df=W.span`
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
`,ff=W.button`
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
`,pf=W.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,mf=W.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`;function hf({places:e,drives:t,recent:n,recentLimit:r,homePath:i,historyVersion:a,onOpen:o,onPlacesChanged:s,onRecentCleared:c,onLayoutChanged:l,onHistoryChanged:u,onDrivesChanged:d,visibilityVersion:f=0}){let p=Jn(),m=oa(),[h,g]=(0,_.useState)(!1),[v,y]=(0,_.useState)(null),[b,x]=(0,_.useState)(null),[S,C]=(0,_.useState)(!1),[w,T]=(0,_.useState)(null),[E,D]=(0,_.useState)(null),[ee,O]=(0,_.useState)(null);(0,_.useEffect)(()=>{kr().then(y,()=>y(null))},[]),(0,_.useEffect)(()=>{if(!b)return;let e=()=>x(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||x(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[b]),(0,_.useEffect)(()=>{if(!S)return;let e=()=>C(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[S]);let te=Ic(v),k=te.map(e=>e.id),ne=e=>b?.kind===`panel`&&b.id===e,A=e=>b?.kind===`place`&&b.id===e;(0,_.useEffect)(()=>{if(!G.available)return;let e=te.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??i).filter(e=>e.length>0);G.send({type:`fs.watch`,payload:{paths:e}})},[te.map(e=>e.path??e.id).join(`|`),i]);let j=async(e,t)=>{let n={...v?.placeIcons};t?n[e]=t:delete n[e],x(null),await P({placeIcons:n}),s(await dr())},M=async(e,t)=>{let n={...v?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],D(null),await P({placeNames:n}),s(await dr())},re=e=>{O(null),T({drive:e,label:e.label||`Local Disk`})},N=async()=>{if(!w)return;let{drive:e,label:t}=w;T(null);let n=await ir(e.name,t.trim());n.ok?(O(null),d?.()):O(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},ie=v?.overviewColumns??1,P=async e=>{if(!v)return;let t={...v,...e,overviewPanels:e.overviewPanels??k,overviewHidden:[]};y(await Ar(t)),l?.()},ae=(e,t)=>{let n=k.indexOf(e),r=n+t;if(n<0||r<0||r>=k.length)return;let i=[...k];[i[n],i[r]]=[i[r],i[n]],P({overviewPanels:i})},oe=(e,t)=>{let n={...v?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],P({overviewTitles:n})},se=(e,t)=>void P({overviewViews:{...v?.overviewViews,[e]:t}}),ce=e=>{let t=v?.overviewPinned??te.filter(e=>e.pinned).map(e=>e.id);P({overviewPinned:te.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},le=e=>{x(null);let t=t=>{let n={...t};return delete n[e],n},n=v?.overviewPinned??te.filter(e=>e.pinned).map(e=>e.id);P({overviewPanels:k.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(v?.overviewTitles),overviewViews:t(v?.overviewViews),overviewIcons:t(v?.overviewIcons),panelPlaces:t(v?.panelPlaces)})},ue=(e,t)=>{let n={...v?.overviewIcons};t?n[e]=t:delete n[e],x(null),P({overviewIcons:n})},de=async e=>{if(!v)return;if(e===`folder`){let e=await _d();if(!e)return;let t=`folder:${e}`;k.includes(t)||await P({overviewPanels:[...k,t]});return}if(e===`quick`){let e=2;for(;k.includes(`quick:${e}`);)e+=1;await P({overviewPanels:[...k,`quick:${e}`]});return}let t=e;for(let n=2;k.includes(t);n+=1)t=`${e}:${n}`;await P({overviewPanels:[...k,t]})},fe=async t=>{let n=await _d();if(!n)return;if(t.id===`quick`){await P({quickAccess:[...new Set([...e.map(e=>e.path),n])]}),s(await dr());return}let r=t.places??[];r.some(e=>_f(e,n))||await P({panelPlaces:{...v?.panelPlaces,[t.id]:[...r,n]}})},F=async(t,n)=>{x(null),t.id===`quick`?(await P({quickAccess:e.filter(e=>!_f(e.path,n)).map(e=>e.path)}),s(await dr())):await P({panelPlaces:{...v?.panelPlaces,[t.id]:(t.places??[]).filter(e=>!_f(e,n))}})},pe=async(t,n,r)=>{if(_f(n,r))return;let i=t.id===`quick`?e.map(e=>e.path):t.places??[],a=i.findIndex(e=>_f(e,n)),o=i.findIndex(e=>_f(e,r));if(a<0||o<0)return;let c=[...i],[l]=c.splice(a,1);c.splice(o,0,l),t.id===`quick`?(await P({quickAccess:c}),s(await dr())):await P({panelPlaces:{...v?.panelPlaces,[t.id]:c}})},me=(e,t)=>({draggable:h,onDragOver:e=>{h&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{h&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{h&&(n.preventDefault(),pe(e,n.dataTransfer.getData(`text/plain`),t))}}),I=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>_f(e.path,t));return{name:v?.placeNames?.[t]??n?.name??($i(t)||t),path:t,kind:`folder`,icon:n?.icon??v?.placeIcons?.[t]??null}}),L=e=>{if(n.length===0)return(0,K.jsx)(mf,{children:p(`Files and folders you open show up here.`)});let t=n.slice(0,r);return e.view===`grid`?(0,K.jsx)(Gd,{children:t.map(e=>{let t=sa(m,e.path);return(0,K.jsxs)(Kd,{$plain:!1,onClick:t=>e.isDirectory?o(e.path,mi(t)):void ar(e.path),title:e.path,children:[(0,K.jsx)(qd,{children:t&&m.useIcons?(0,K.jsx)(zc,{place:t,size:18}):(0,K.jsx)(rl,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,K.jsxs)(Jd,{children:[(0,K.jsx)(`strong`,{children:t?.name||e.name}),(0,K.jsx)(Yd,{children:e.path})]})]},e.path)})}):(0,K.jsx)(Xd,{children:t.map(e=>{let t=sa(m,e.path);return(0,K.jsxs)(Zd,{onClick:t=>e.isDirectory?o(e.path,mi(t)):void ar(e.path),title:e.path,type:`button`,children:[t&&m.useIcons?(0,K.jsx)(zc,{place:t,size:15}):(0,K.jsx)(rl,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,K.jsxs)(Qd,{children:[(0,K.jsx)(`strong`,{children:t?.name||e.name}),(0,K.jsx)(Yd,{children:e.path})]})]},e.path)})})},he=e=>{if(t.length===0)return(0,K.jsx)(mf,{children:p(`No drives are available.`)});let n=t.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=w?.drive.name===t.name,i=r?(0,K.jsx)(gf,{maxLength:32,onCancel:()=>T(null),onChange:e=>T({...w,label:e}),onCommit:()=>void N(),value:w?.label??``}):(0,K.jsx)(K.Fragment,{children:ra(t)}),a=!r&&h&&(0,K.jsx)(uf,{onClick:e=>{e.stopPropagation(),re(t)},title:p(`Rename volume`),type:`button`,children:(0,K.jsx)(es,{size:11})}),s=(0,K.jsx)(Yd,{children:p(`{free} free of {total}`,{free:q(t.freeSpace),total:q(t.totalSize)})});return e.view===`grid`?(0,K.jsxs)(Kd,{$plain:!1,onClick:e=>!r&&o(t.name,mi(e)),title:t.name,children:[(0,K.jsx)(qd,{children:(0,K.jsx)(Co,{size:18})}),(0,K.jsxs)(Jd,{children:[(0,K.jsxs)(`strong`,{children:[i,r&&na(t),a]}),s]})]},t.name):(0,K.jsxs)(Zd,{as:r?`div`:`button`,onClick:r?void 0:e=>o(t.name,mi(e)),title:t.name,type:r?void 0:`button`,children:[(0,K.jsx)(Co,{size:18}),(0,K.jsxs)(Qd,{children:[(0,K.jsxs)(`strong`,{children:[i,r&&na(t),a]}),s]}),(0,K.jsx)(ef,{children:(0,K.jsx)(tf,{$used:n,$tone:Qi(n)})})]},t.name)});return e.view===`grid`?(0,K.jsx)(Gd,{children:n}):(0,K.jsx)(Xd,{children:n})},ge=e=>{switch(e.kind){case`quick`:{let t=I(e);return!h&&t.length===0?(0,K.jsx)(mf,{children:p(`No folders in this Quick access panel yet.`)}):e.view===`grid`?(0,K.jsxs)(Gd,{children:[t.map(t=>(0,K.jsxs)(Kd,{$plain:h,...me(e,t.path),onClick:e=>!h&&o(t.path,mi(e)),title:t.path,children:[h&&(0,K.jsx)(lf,{onClick:n=>{n.stopPropagation(),F(e,t.path)},title:p(`Remove from Quick access`),type:`button`,children:(0,K.jsx)(Lo,{size:11})}),(0,K.jsxs)(sf,{children:[h?(0,K.jsx)(cf,{onClick:e=>{e.stopPropagation(),x(A(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:p(`Change icon`),type:`button`,children:(0,K.jsx)(qd,{children:(0,K.jsx)(zc,{place:t})})}):(0,K.jsx)(qd,{children:(0,K.jsx)(zc,{place:t})}),A(t.path)&&(0,K.jsx)(Ed,{onPick:e=>void j(t.path,e),value:v?.placeIcons?.[t.path]??t.icon})]}),(0,K.jsxs)(Jd,{children:[E?.path===t.path?(0,K.jsx)(`strong`,{children:(0,K.jsx)(gf,{onCancel:()=>D(null),onChange:e=>D({path:t.path,name:e}),onCommit:()=>void M(t.path,E?.name??``),value:E?.name??``})}):(0,K.jsxs)(`strong`,{children:[t.name,h&&(0,K.jsx)(uf,{onClick:e=>{e.stopPropagation(),x(null),D({path:t.path,name:t.name})},title:p(`Rename folder`),type:`button`,children:(0,K.jsx)(es,{size:11})})]}),(0,K.jsx)(Yd,{children:t.path})]})]},t.path)),h&&(0,K.jsxs)($d,{onClick:()=>void fe(e),title:p(`Pin a folder here`),type:`button`,children:[(0,K.jsx)(qd,{children:(0,K.jsx)(Do,{size:15})}),(0,K.jsxs)(Jd,{children:[(0,K.jsx)(`strong`,{children:p(`Add folder`)}),(0,K.jsx)(Yd,{children:p(`Pin a directory here`)})]})]})]}):(0,K.jsxs)(Xd,{children:[t.map(t=>(0,K.jsxs)(Zd,{...me(e,t.path),onClick:e=>!h&&o(t.path,mi(e)),title:t.path,type:`button`,children:[(0,K.jsxs)(sf,{children:[h?(0,K.jsx)(cf,{onClick:e=>{e.stopPropagation(),x(A(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:p(`Change icon`),type:`button`,children:(0,K.jsx)(zc,{place:t,size:15})}):(0,K.jsx)(zc,{place:t,size:15}),A(t.path)&&(0,K.jsx)(Ed,{onPick:e=>void j(t.path,e),value:v?.placeIcons?.[t.path]??t.icon})]}),(0,K.jsxs)(Qd,{children:[E?.path===t.path?(0,K.jsx)(`strong`,{children:(0,K.jsx)(gf,{onCancel:()=>D(null),onChange:e=>D({path:t.path,name:e}),onCommit:()=>void M(t.path,E?.name??``),value:E?.name??``})}):(0,K.jsxs)(`strong`,{children:[t.name,h&&(0,K.jsx)(uf,{onClick:e=>{e.stopPropagation(),x(null),D({path:t.path,name:t.name})},title:p(`Rename folder`),type:`button`,children:(0,K.jsx)(es,{size:11})})]}),(0,K.jsx)(Yd,{children:t.path})]}),h&&(0,K.jsx)(lf,{$inline:!0,onClick:n=>{n.stopPropagation(),F(e,t.path)},title:p(`Remove from Quick access`),type:`button`,children:(0,K.jsx)(Lo,{size:11})})]},t.path)),h&&(0,K.jsxs)($d,{$row:!0,onClick:()=>void fe(e),title:p(`Pin a folder here`),type:`button`,children:[(0,K.jsx)(Do,{size:15}),(0,K.jsxs)(Qd,{children:[(0,K.jsx)(`strong`,{children:p(`Add folder`)}),(0,K.jsx)(Yd,{children:p(`Pin a directory here`)})]})]})]})}case`frequent`:return(0,K.jsx)(vf,{mode:e.view,onOpen:o,version:a});case`recent`:return L(e);case`drives`:return he(e);default:return(0,K.jsx)(yf,{mode:e.view,onOpen:o,openOnSingleClick:v?.openOnSingleClick??!1,path:e.path??i,showCheckboxes:v?.showCheckboxes??!0,visibilityVersion:f})}};return(0,K.jsxs)(kd,{children:[(0,K.jsxs)(Ad,{children:[(0,K.jsx)(jd,{role:`group`,title:p(`Columns`),children:[1,2,3,4,5].map(e=>(0,K.jsx)(Md,{$active:ie===e,onClick:()=>void P({overviewColumns:e}),title:Xi(p,e,`1 column`,`{count} columns`),type:`button`,children:e},e))}),h&&(0,K.jsxs)(Pd,{children:[(0,K.jsxs)(Nd,{onClick:()=>C(e=>!e),onPointerDown:e=>e.stopPropagation(),title:p(`Add a panel`),type:`button`,children:[(0,K.jsx)(Do,{size:12}),p(`Add panel ▾`)]}),S&&(0,K.jsx)(Fd,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`folder`].map(e=>(0,K.jsx)(Id,{onClick:()=>{C(!1),de(e)},type:`button`,children:p(e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:`Folder…`)},e))})]}),(0,K.jsxs)(Nd,{onClick:()=>{g(e=>!e),C(!1),x(null),D(null),T(null)},title:p(h?`Done`:`Edit`),type:`button`,children:[h?(0,K.jsx)(Io,{size:13}):(0,K.jsx)(es,{size:13}),p(h?`Done`:`Edit`)]})]}),ee&&(0,K.jsx)(pf,{children:ee}),(0,K.jsx)(Ld,{$columns:ie,children:te.map(e=>{let t=k.indexOf(e.id);return(0,K.jsxs)(Rd,{children:[(0,K.jsxs)(zd,{children:[(0,K.jsxs)(Bd,{children:[(0,K.jsxs)(sf,{children:[h?(0,K.jsx)(cf,{onClick:()=>x(ne(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:p(`Change icon`),type:`button`,children:(0,K.jsx)(Rc,{panel:e,size:15})}):(0,K.jsx)(Rc,{panel:e,size:15}),ne(e.id)&&(0,K.jsx)(Ed,{onPick:t=>ue(e.id,t),value:e.icon})]}),h?(0,K.jsx)(Ud,{defaultValue:e.title,onBlur:t=>oe(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,K.jsx)(Hd,{children:p(e.title)})]}),(0,K.jsxs)(Vd,{children:[!h&&e.kind===`recent`&&(0,K.jsx)(Nd,{onClick:()=>void wr().then(c),title:p(`Clear`),type:`button`,children:p(`Clear`)}),!h&&e.kind===`frequent`&&(0,K.jsx)(Nd,{onClick:()=>void Tr().then(()=>u?.()),title:p(`Clear the frequent list`),type:`button`,children:p(`Clear`)}),!h&&(e.kind===`home`||e.kind===`folder`)&&(0,K.jsx)(Nd,{onClick:()=>o(e.path??i),title:p(`Open folder`),type:`button`,children:p(`Open`)}),h&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Wd,{$active:e.pinned,onClick:()=>ce(e.id),title:e.pinned?p(`Unpin from the sidebar`):p(`Pin to the sidebar`),type:`button`,children:(0,K.jsx)(Mo,{size:12})}),(0,K.jsx)(Wd,{$active:e.view===`list`,onClick:()=>se(e.id,`list`),title:p(`List`),type:`button`,children:(0,K.jsx)(No,{size:13})}),(0,K.jsx)(Wd,{$active:e.view===`grid`,onClick:()=>se(e.id,`grid`),title:p(`Grid`),type:`button`,children:(0,K.jsx)(X,{size:13})}),(0,K.jsx)(Wd,{disabled:t===0,onClick:()=>ae(e.id,-1),title:p(`Move up`),type:`button`,children:(0,K.jsx)(To,{size:12})}),(0,K.jsx)(Wd,{disabled:t===k.length-1,onClick:()=>ae(e.id,1),title:p(`Move down`),type:`button`,children:(0,K.jsx)(To,{size:12})}),(0,K.jsx)(Wd,{onClick:()=>le(e.id),title:p(`Remove panel`),type:`button`,children:(0,K.jsx)(Lo,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?ge(e):(0,K.jsx)(rf,{children:ge(e)})]},e.id)})})]})}function gf({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=Jn();return(0,K.jsxs)(df,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,K.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,K.jsx)(ff,{onClick:r,title:a(`Cancel`),type:`button`,children:(0,K.jsx)(Lo,{size:11})}),(0,K.jsx)(ff,{$apply:!0,onClick:n,title:a(`Rename volume`),type:`button`,children:(0,K.jsx)(Io,{size:12})})]})}function _f(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}function vf({mode:e,onOpen:t,version:n}){let r=Jn(),[i,a]=(0,_.useState)(null),o=oa();if((0,_.useEffect)(()=>{Sr().then(a,()=>a([]))},[n]),!i)return(0,K.jsx)(mf,{children:r(`Reading…`)});if(i.length===0)return(0,K.jsx)(mf,{children:r(`Folders you open often show up here.`)});let s=e=>Xi(r,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path});return e===`grid`?(0,K.jsx)(Gd,{children:i.map(e=>{let n=sa(o,e.path);return(0,K.jsxs)(Kd,{$plain:!1,onClick:n=>t(e.path,mi(n)),title:e.path,children:[(0,K.jsx)(qd,{children:n&&o.useIcons?(0,K.jsx)(zc,{place:n,size:18}):(0,K.jsx)(rl,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,K.jsxs)(Jd,{children:[(0,K.jsx)(`strong`,{children:n?.name||e.name}),(0,K.jsx)(Yd,{children:s(e)})]})]},e.path)})}):(0,K.jsx)(Xd,{children:i.map(e=>{let n=sa(o,e.path);return(0,K.jsxs)(Zd,{onClick:n=>t(e.path,mi(n)),title:e.path,type:`button`,children:[n&&o.useIcons?(0,K.jsx)(zc,{place:n,size:15}):(0,K.jsx)(rl,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,K.jsxs)(Qd,{children:[(0,K.jsx)(`strong`,{children:n?.name||e.name}),(0,K.jsx)(Yd,{children:s(e)})]})]},e.path)})})}function yf({path:e,mode:t,onOpen:n,showCheckboxes:r,openOnSingleClick:i,visibilityVersion:a}){let o=Jn(),[s,c]=(0,_.useState)(null),l=oa();return(0,_.useEffect)(()=>{e&&(c(null),or(e).then(c,()=>c(null)))},[e,a]),(0,_.useEffect)(()=>{if(G.available)return G.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&n.data.path.replace(/[\\\\/]+$/,``).toLowerCase()===e.replace(/[\\\\/]+$/,``).toLowerCase()&&or(e,!1).then(c,()=>void 0)})},[e]),s?t===`list`?(0,K.jsx)(nf,{children:(0,K.jsx)(Fl,{error:null,listing:s,loading:!1,onOpen:n,onOpenFile:e=>void ar(e),onSort:()=>void 0,openOnSingleClick:i,enableShortcuts:!1,showCheckboxes:r,showDetails:!1,showImages:!1,view:{...nr,columns:rr.columns??[]}})}):(0,K.jsx)(rf,{children:s.entries.length===0?(0,K.jsx)(mf,{children:o(`This folder is empty.`)}):(0,K.jsx)(af,{children:s.entries.map(e=>{let t=sa(l,e.fullPath);return(0,K.jsxs)(of,{onClick:t=>e.isDirectory?n(e.fullPath,mi(t)):void ar(e.fullPath),title:e.name,type:`button`,children:[t&&l.useIcons?(0,K.jsx)(zc,{place:t,size:16}):(0,K.jsx)(rl,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,K.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,K.jsx)(mf,{children:o(`Reading…`)})}function bf({path:e,label:t,icon:n,focusToken:r,onNavigate:i}){let a=Jn(),o=oa(),[s,c]=(0,_.useState)(!1),[l,u]=(0,_.useState)(``),[d,f]=(0,_.useState)([]),[p,m]=(0,_.useState)(0),[h,g]=(0,_.useState)(null),v=(0,_.useRef)(null),y=(0,_.useRef)(null),b=(0,_.useRef)(0);(0,_.useEffect)(()=>{s||u(e.replace(/\\/g,`/`))},[e,s]),(0,_.useEffect)(()=>{r&&r!==b.current&&(b.current=r,u(e.replace(/\\/g,`/`)),c(!0))},[r,e]),(0,_.useEffect)(()=>{s&&v.current?.select()},[s]),(0,_.useEffect)(()=>{if(!s)return;let e=()=>c(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[s]);let x=()=>{u(e.replace(/\\/g,`/`)),c(!0)},S=()=>{let t=l.trim();c(!1),t.length>0&&t!==e&&i(t)};(0,_.useEffect)(()=>{if(!s){f([]);return}let e=Cf(l);if(!e){f([]);return}let t=!1,n=window.setTimeout(()=>{or(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));f(i),m(0)},()=>{t||f([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[l,s]);let C=e=>{c(!1),i(e.path)};if((0,_.useLayoutEffect)(()=>{if(!s){g(null);return}let e=()=>{let e=y.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);g({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[s]),s)return(0,K.jsxs)(kf,{onPointerDown:e=>e.stopPropagation(),ref:y,children:[(0,K.jsxs)(Nf,{children:[(0,K.jsx)(`input`,{onChange:e=>u(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&d.length>0)e.preventDefault(),m(e=>(e+1)%d.length);else if(e.key===`ArrowUp`&&d.length>0)e.preventDefault(),m(e=>(e-1+d.length)%d.length);else if(e.key===`Tab`&&d.length>0){e.preventDefault();let t=d[Math.min(p,d.length-1)];u(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?d.length>0?C(d[Math.min(p,d.length-1)]):S():e.key===`Escape`&&(d.length>0?f([]):c(!1))},ref:v,spellCheck:!1,value:l}),(0,K.jsx)(Pf,{onClick:()=>c(!1),title:a(`Cancel`),type:`button`,children:(0,K.jsx)(Lo,{size:12})}),(0,K.jsx)(Pf,{$apply:!0,onClick:S,onPointerDown:e=>e.stopPropagation(),title:a(`Open this path`),type:`button`,children:(0,K.jsx)(Io,{size:14})})]}),d.length>0&&h&&(0,Ts.createPortal)((0,K.jsx)(Af,{onPointerDown:e=>e.stopPropagation(),style:{left:h.left,top:h.top,width:h.width},children:d.map((e,t)=>(0,K.jsxs)(jf,{$active:t===p,onClick:()=>C(e),onMouseEnter:()=>m(t),type:`button`,children:[(0,K.jsx)(rl,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,K.jsx)(Mf,{children:e.name})]},e.path))}),document.body)]});let w=t?[{label:t,path:e,icon:n}]:Sf(e,o.places);return(0,K.jsx)(wf,{onClick:x,title:a(`Click to type a path`),children:w.map((t,n)=>(0,K.jsxs)(Tf,{$last:n===w.length-1,children:[n>0&&(0,K.jsx)(Df,{children:(0,K.jsx)(Ao,{size:9})}),(0,K.jsxs)(Of,{onClick:n=>{n.stopPropagation(),t.path!==e&&i(t.path)},type:`button`,children:[t.place?(0,K.jsx)(Ef,{children:(0,K.jsx)(zc,{place:t.place,size:13})}):t.icon&&(0,K.jsx)(Ef,{children:t.icon}),t.label]})]},t.path))})}function xf(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function Sf(e,t){let n=xf(e),r=e=>e.replace(/[\\/]+$/,``).toLowerCase(),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>r(t.path)===r(e.path));t>i&&(i=t,a=e)}return a&&i>=0&&n.splice(0,i+1,{label:a.name,path:n[i].path,place:a}),n}function Cf(e){if(e.toLowerCase().startsWith(`yafm://`))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var wf=W.div`
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
`,Tf=W.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Ef=W.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Df=W.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,Of=W.button`
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
`,kf=W.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,Af=W.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${Es}
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
`,jf=W.button`
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
`,Mf=W.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Nf=W.div`
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
`,Pf=W.button`
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
`,Ff=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,K.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,K.jsx)(`path`,{d:`M4 4v6h6`})]});function If({onOpenLocation:e,showDetails:t=!0,onShowDetails:n,videoAudio:r=!1,videoAutoplay:i=!1,platform:a}){let o=Jn(),s=a===`windows`,[c,l]=(0,_.useState)([]),[u,d]=(0,_.useState)([]),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(null),[g,v]=(0,_.useState)(!0),[y,b]=(0,_.useState)(!1),[x,S]=(0,_.useState)(null),[C,w]=(0,_.useState)(!1),[T,E]=(0,_.useState)(()=>new Set),[D,ee]=(0,_.useState)(null),[O,te]=(0,_.useState)(()=>{let e=da(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[k,ne]=(0,_.useState)(null),[A,j]=(0,_.useState)(null),[M,re]=(0,_.useState)(()=>{let e=la(`yafm.recycle.preview.width`,320);return e>=220?e:320}),N=(0,_.useRef)(null),ie=e=>{re(e),ua(`yafm.recycle.preview.width`,e)},P=(0,_.useCallback)(async()=>{v(!0),S(null);try{l(await pr(C))}catch(e){S(e instanceof Error?e.message:String(e))}finally{v(!1)}},[C]);(0,_.useEffect)(()=>{P()},[P]),(0,_.useEffect)(()=>{C||(d([]),p(!1),h(null))},[C]),(0,_.useEffect)(()=>{E(e=>{let t=new Set(c.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[c]);let ae=(0,_.useMemo)(()=>{let e=new Set(c.map(e=>e.id));return[...c,...u.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=Lf(e,t,O.column);return O.descending?-n:n})},[c,u,O]),oe=(0,_.useMemo)(()=>ae.filter(e=>T.has(e.id)),[ae,T]),se=oe.filter(e=>e.removable&&!e.isOrphan),ce=oe.filter(e=>e.removable),le=(e,t)=>{let n=t.ctrlKey||t.metaKey;E(r=>{if(t.shiftKey&&D){let t=ae.findIndex(e=>e.id===D),i=ae.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(ae[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),ee(e.id)},ue=(0,_.useCallback)(()=>E(new Set(ae.map(e=>e.id))),[ae]),de=ae.length>0&&ae.every(e=>T.has(e.id)),fe=(0,_.useCallback)(async()=>{let e=se.map(e=>e.id);if(e.length!==0){b(!0);try{let t=await hr(e);t.ok||window.alert(Xi(o,e.length,`Restored {done} of 1 item.`,`Restored {done} of {total} items.`,{done:t.done,total:e.length})),E(new Set),await P()}finally{b(!1)}}},[P,se,o]),F=(0,_.useCallback)(async()=>{let e=ce.map(e=>e.id);if(j(null),e.length!==0){b(!0);try{let t=await gr(e);t.ok||window.alert(Xi(o,e.length,`Deleted {done} of 1 item.`,`Deleted {done} of {total} items.`,{done:t.done,total:e.length})),E(new Set),await P()}finally{b(!1)}}},[ce,P,o]),pe=async()=>{j(null),b(!0);try{await mr(C),E(new Set),await P()}finally{b(!1)}},me=async()=>{b(!0),h(null);try{let e=await vr();if(e.cancelled){h(`Elevation was declined — nothing was read.`);return}if(e.failed){h(`The elevated helper could not produce a report. Try again.`);return}d(e.entries),p(!0)}finally{b(!1)}},I=async()=>{b(!0),j(null);try{await yr(),d([]),p(!1),h(null),await P()}finally{b(!1)}},L=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},he=e=>{navigator.clipboard.writeText(e.originalPath)},ge=(e,t)=>{e.preventDefault(),t&&!T.has(t.id)&&E(new Set([t.id])),ne({x:e.clientX,y:e.clientY})};(0,_.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),ue()):e.key===`Delete`?(e.preventDefault(),ce.length>0&&j(`delete`)):e.key===`Enter`&&se.length>0?(e.preventDefault(),fe()):e.key===`Escape`&&(E(new Set),ne(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[ce.length,se.length,fe,ue]);let _e=[{label:o(`Restore`),icon:(0,K.jsx)(Ff,{width:14,height:14}),disabled:se.length===0,onSelect:()=>void fe()},{label:o(`Delete permanently`),icon:(0,K.jsx)(Fo,{size:14}),danger:!0,disabled:ce.length===0,onSelect:()=>j(`delete`)},{label:o(`Properties`),icon:(0,K.jsx)(jo,{size:14}),disabled:oe.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=oe;e&&_r(e.id)}},{label:o(`Open original location`),icon:(0,K.jsx)(xo,{size:14}),disabled:oe.length!==1,onSelect:()=>{let[e]=oe;e&&L(e)}},{label:o(`Copy original path`),icon:(0,K.jsx)(vs,{size:14}),disabled:oe.length!==1,onSelect:()=>{let[e]=oe;e&&he(e)}},{label:o(`Select all`),separatorBefore:!0,onSelect:ue},{label:o(`Refresh`),icon:(0,K.jsx)(Eo,{size:14}),onSelect:()=>void P()}],R=oe.length>0?oe[0]:null,ve=R?{name:R.name,path:R.contentPath||R.originalPath,isDirectory:R.isDirectory,size:R.size,modified:R.deleted,fields:[{label:o(`Type`),value:o(zf(R))},{label:o(`Original location`),value:R.originalPath},{label:o(`Date deleted`),value:Zi(R.deleted)},{label:o(`Size`),value:R.isDirectory?`—`:q(R.size)},...R.owner?[{label:o(`Owner`),value:R.owner}]:[],{label:o(`Status`),value:R.isOrphan?o(`Metadata only`):R.removable?o(`Restorable`):o(`Other profile`)}]}:null;return(0,K.jsxs)(Vf,{ref:N,onContextMenu:e=>ge(e),children:[(0,K.jsxs)(Hf,{children:[(0,K.jsxs)(Uf,{children:[(0,K.jsx)(Fo,{size:16}),(0,K.jsx)(`span`,{children:o(`Recycle Bin`)}),(0,K.jsxs)(Wf,{children:[g?`…`:Xi(o,ae.length,`1 item`,`{count} items`),T.size>0&&` · ${o(`{count} selected`,{count:T.size})}`]})]}),(0,K.jsxs)(Gf,{children:[(0,K.jsx)(qf,{$on:C,onClick:()=>w(e=>!e),title:o(`Show metadata records whose content is already gone`),type:`button`,children:o(`Orphans`)}),C&&s&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Kf,{disabled:y||f,onClick:()=>void me(),title:o(f?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`),type:`button`,children:o(y?`Working…`:f?`Admin view loaded`:`Show all (admin)…`)}),f&&u.length>0&&(0,K.jsx)(Kf,{disabled:y,onClick:()=>j(`purge`),type:`button`,children:o(`Delete every orphan`)})]}),(0,K.jsx)(Kf,{disabled:y||se.length===0,onClick:()=>void fe(),type:`button`,children:o(`Restore`)}),(0,K.jsx)(Kf,{$danger:!0,disabled:y||ce.length===0,onClick:()=>j(`delete`),type:`button`,children:o(`Delete`)}),(0,K.jsx)(Kf,{disabled:y||ae.length===0,onClick:()=>j(`empty`),type:`button`,children:o(`Empty`)}),(0,K.jsx)(Jf,{onClick:()=>void P(),title:o(`Refresh`),type:`button`,children:(0,K.jsx)(Eo,{size:14})})]})]}),m&&(0,K.jsx)(hp,{children:m}),x&&(0,K.jsx)(gp,{children:x}),!x&&!g&&ae.length===0&&(0,K.jsx)(gp,{children:o(`The recycle bin is empty.`)}),ae.length>0&&(0,K.jsxs)(mp,{children:[(0,K.jsxs)(Yf,{children:[(0,K.jsxs)(Zf,{children:[(0,K.jsx)(rp,{$checked:de,$partial:!de&&T.size>0,onClick:()=>de?E(new Set):ue(),title:o(de?`Select none`:`Select all`),type:`button`,children:de?(0,K.jsx)(Io,{size:9}):T.size>0&&(0,K.jsx)(ip,{})}),(0,K.jsxs)(Qf,{onClick:()=>z(`name`),type:`button`,children:[o(`Name`),Rf(O,`name`)]}),(0,K.jsxs)(Qf,{onClick:()=>z(`original`),type:`button`,children:[o(`Original location`),Rf(O,`original`)]}),(0,K.jsxs)(Qf,{onClick:()=>z(`deleted`),type:`button`,children:[o(`Date deleted`),Rf(O,`deleted`)]}),(0,K.jsxs)(Qf,{onClick:()=>z(`size`),type:`button`,children:[o(`Size`),Rf(O,`size`)]}),(0,K.jsxs)(Qf,{onClick:()=>z(`type`),type:`button`,children:[o(`Type`),Rf(O,`type`)]}),(0,K.jsx)(`span`,{})]}),(0,K.jsx)($f,{onClick:e=>{e.target===e.currentTarget&&E(new Set)},children:ae.map(e=>(0,K.jsxs)(ep,{$checked:T.has(e.id),$orphan:e.isOrphan,onClick:t=>le(e,t),onContextMenu:t=>ge(t,e),onDoubleClick:()=>{E(new Set([e.id])),ee(e.id),n?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,K.jsx)(np,{$checked:T.has(e.id),children:T.has(e.id)&&(0,K.jsx)(Io,{size:9})}),(0,K.jsxs)(ap,{children:[(0,K.jsx)(Bf,{entry:e}),(0,K.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,K.jsx)(pp,{children:o(`metadata only`)}),e.owner&&(0,K.jsx)(pp,{$other:!0,children:o(`other profile`)})]}),(0,K.jsx)(sp,{children:e.originalPath}),(0,K.jsx)(cp,{children:Zi(e.deleted)}),(0,K.jsx)(lp,{children:e.isDirectory?`—`:q(e.size)}),(0,K.jsx)(up,{children:o(zf(e))}),(0,K.jsxs)(dp,{children:[e.removable&&!e.isOrphan&&(0,K.jsx)(fp,{onClick:t=>{t.stopPropagation(),hr([e.id]).then(P)},title:o(`Restore to its original folder`),type:`button`,children:(0,K.jsx)(Ff,{})}),e.removable&&(0,K.jsx)(fp,{$danger:!0,onClick:t=>{t.stopPropagation(),E(new Set([e.id])),j(`delete`)},title:e.isOrphan?o(`Remove the leftover record`):o(`Delete permanently`),type:`button`,children:(0,K.jsx)(Fo,{size:13})})]})]},e.id))})]}),t&&(0,K.jsx)(cc,{emptyNote:o(`Nothing selected.`),info:ve,onWidth:ie,selectionNote:oe.length>1?Xi(o,oe.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:r,videoAutoplay:i,width:M})]}),k&&(0,K.jsx)(zs,{items:_e,onClose:()=>ne(null),x:k.x,y:k.y}),(0,K.jsx)(Zs,{confirmLabel:o(A===`empty`?`Empty the bin`:A===`purge`?`Delete every orphan`:`Delete`),danger:!0,message:A===`empty`?Xi(o,ae.length,`Permanently delete 1 item? This cannot be undone.`,`Permanently delete {count} items? This cannot be undone.`):A===`purge`?o(`Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.`):Xi(o,ce.length,`Permanently delete 1 selected item? This cannot be undone.`,`Permanently delete {count} selected items? This cannot be undone.`),onCancel:()=>j(null),onConfirm:()=>{A===`empty`?pe():A===`purge`?I():F()},open:A!==null,title:o(A===`empty`?`Empty the recycle bin`:A===`purge`?`Delete every orphan`:`Delete permanently`)})]});function z(e){te(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return fa(`yafm.recycle.sort`,n),n})}}function Lf(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return zf(e).localeCompare(zf(t),void 0,{sensitivity:`base`})}}function Rf(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function zf(e){if(e.isDirectory)return`Folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`File`}function Bf({entry:e}){let t=Di(e.originalPath,e.isDirectory);return(0,K.jsx)(op,{children:t?(0,K.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,K.jsx)(xo,{}):(0,K.jsx)(So,{})})}var Vf=W.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Hf=W.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,Uf=W.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,Wf=W.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Gf=W.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Kf=W.button`
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
`,qf=W(Kf)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Jf=W.button`
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
`,Yf=W.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Xf=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,Zf=W.div`
    display: grid;
    grid-template-columns: ${Xf};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Qf=W.button`
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
`,$f=W.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,ep=W.div`
    display: grid;
    grid-template-columns: ${Xf};
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
`,tp=W.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,np=W.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,rp=W.button`
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
`,ip=W.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,ap=W(tp)`
    display: flex;
    align-items: center;
    gap: 9px;
`,op=W.span`
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
`,sp=W(tp)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,cp=W(tp)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,lp=W(tp)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,up=W(tp)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,dp=W.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,fp=W.button`
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
`,pp=W.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,mp=W.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,hp=W.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,gp=W.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function _p(){return G.available?(await G.request(`app.tags`)).tags:[]}async function vp(e){return!G.available||!e?!1:(await G.request(`app.tags.delete`,{name:e})).ok}async function yp(e,t){return!G.available||!e?[]:(await G.request(`app.tags.create`,{name:e,color:t})).tags}async function bp(e,t){return!G.available||!e?!1:(await G.request(`app.tags.color`,{name:e,color:t})).ok}async function xp(e,t){return!G.available||!e||!t?!1:(await G.request(`app.tags.rename`,{oldName:e,newName:t})).ok}var Sp=`#3b82f6`,Cp=`#6366f1`,wp=/^#?([0-9a-f]{6})$/i;function Tp(e,t){if(!e)return t;let n=wp.exec(e.trim());return n?`#${n[1].toLowerCase()}`:t}function Ep(e){let t=wp.exec(e);if(!t)return[59,130,246];let n=Number.parseInt(t[1],16);return[n>>16&255,n>>8&255,n&255]}function Dp(e){let[t,n,r]=Ep(e).map(e=>e/255),i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2,s=i-a;if(s===0)return{hue:0,saturation:0};let c=s/(1-Math.abs(2*o-1));return{hue:((i===t?(n-r)/s%6:i===n?(r-t)/s+2:(t-n)/s+4)*60+360)%360,saturation:c*100}}function Op(e,t,n,r=1){return r===1?`hsl(${e.toFixed(1)} ${t}% ${n}%)`:`hsl(${e.toFixed(1)} ${t}% ${n}% / ${r})`}function kp(e,t,n){let r=t/100,i=n/100,a=(1-Math.abs(2*i-1))*r,o=a*(1-Math.abs(e/60%2-1)),s=i-a/2,[c,l,u]=e<60?[a,o,0]:e<120?[o,a,0]:e<180?[0,a,o]:e<240?[0,o,a]:e<300?[o,0,a]:[a,0,o];return[c,l,u].map(e=>Math.round((e+s)*255)).join(`, `)}function Ap(e,t){let n=Tp(e,Sp),r=Tp(t,Cp),[i,a,o]=Ep(n),[s,c,l]=Ep(r),{hue:u,saturation:d}=Dp(n),f=Math.round(Math.min(Math.max(d*.35,6),30)),p=document.documentElement.style;p.setProperty(`--accent-primary`,n),p.setProperty(`--accent-rgb`,`${i}, ${a}, ${o}`),p.setProperty(`--accent-secondary`,r),p.setProperty(`--accent-secondary-rgb`,`${s}, ${c}, ${l}`),p.setProperty(`--border-color`,`rgba(${i}, ${a}, ${o}, 0.13)`),p.setProperty(`--border-color-hover`,`rgba(${i}, ${a}, ${o}, 0.40)`),p.setProperty(`--border-color-focus`,n),p.setProperty(`--accent-gradient`,`linear-gradient(135deg, ${n} 0%, ${r} 100%)`),p.setProperty(`--accent-glow`,`0 0 28px rgba(${i}, ${a}, ${o}, 0.28)`),p.setProperty(`--selection-bg`,`rgba(${i}, ${a}, ${o}, 0.11)`),p.setProperty(`--selection-border`,`rgba(${i}, ${a}, ${o}, 0.36)`),p.setProperty(`--bg-primary`,Op(u,f,7)),p.setProperty(`--bg-secondary`,Op(u,f,11)),p.setProperty(`--bg-card`,Op(u,f,14,.75)),p.setProperty(`--bg-card-hover`,Op(u,f,20,.85)),p.setProperty(`--bg-input`,Op(u,f,9,.75)),p.setProperty(`--bg-elevated`,Op(u,f,8,.96)),p.setProperty(`--bg-media`,Op(u,f,4)),p.setProperty(`--bg-rgb`,kp(u,f,7))}function jp(){let e=Jn();return(0,K.jsx)(Mp,{title:e(`Always applies to every folder`),children:e(`Global`)})}var Mp=W.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,Np=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`reopenTab`,label:`Reopen closed tab`,note:`Brings back the tab you closed last, folder and all.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`refresh`,label:`Refresh`,note:`Reads the current folder again.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}],Pp=[{name:`Blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`Indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`Violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`Teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`Green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`Amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`Rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`Slate`,accent:`#64748b`,secondary:`#94a3b8`}],Fp=`https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest`,Ip=`en`,Lp=`system`,Rp={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},zp=[{id:`application`,label:`Application`},{id:`updates`,label:`Updates`},{id:`colors`,label:`Colors`},{id:`tags`,label:`Tags`},{id:`files-view`,label:`Files view`},{id:`shortcuts`,label:`Shortcuts`},{id:`memory`,label:`Memory`},{id:`overview`,label:`Overview`},{id:`gallery`,label:`Gallery`},{id:`icons`,label:`Icons`},{id:`extension-icons`,label:`Icons by extension`},{id:`folder-icons`,label:`Folder icons`},{id:`folder-index`,label:`Folder index`},{id:`files`,label:`Files`}],Bp=`yafm.colors.recent`;function Vp(){let e=da(Bp);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function Hp({appInfo:e,focusSection:t,onSettingsChanged:n}){let r=Jn(),[i,a]=(0,_.useState)([]),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(``),[m,h]=(0,_.useState)(`file`),[g,v]=(0,_.useState)(!1),[y,b]=(0,_.useState)(!1),[x,S]=(0,_.useState)(null),[C,w]=(0,_.useState)(!1),[T,E]=(0,_.useState)(!1),[D,ee]=(0,_.useState)(null),[O,te]=(0,_.useState)(null),[k,ne]=(0,_.useState)([]),[A,j]=(0,_.useState)(null),[M,re]=(0,_.useState)(!1),[N,ie]=(0,_.useState)(null),[P,ae]=(0,_.useState)(``),[oe,se]=(0,_.useState)(Bc),[ce,le]=(0,_.useState)(Vp),[ue,de]=(0,_.useState)(null),[fe,F]=(0,_.useState)(null),[pe,me]=(0,_.useState)(!1),[I,L]=(0,_.useState)(!1),[he,ge]=(0,_.useState)(null),[_e,R]=(0,_.useState)(zp[0].id),ve=(0,_.useRef)(null),z=(0,_.useRef)({}),ye=c?.defaultView??rr,be=c?.themePresets??[];(0,_.useEffect)(()=>{let e=ve.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){R(zp[zp.length-1].id);return}let n=t+110,r=zp[0].id;for(let{id:e}of zp){let t=z.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}R(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let xe=e=>t=>{z.current[e]=t},Se=e=>{z.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),R(e)};(0,_.useEffect)(()=>{t&&Se(t)},[t]),(0,_.useEffect)(()=>{Gn().then(e=>a(e.available),()=>a([]))},[]),(0,_.useEffect)(()=>{Fr().then(F,()=>void 0)},[]),(0,_.useEffect)(()=>{Er().then(s,()=>s(null)),kr().then(l,()=>l(null)),Br().then(w,()=>w(!1)),_p().then(ne,()=>ne([]))},[]),(0,_.useEffect)(()=>{let e=()=>void Rr().then(S,()=>S(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let Ce=async e=>{if(!c)return;let t={...c,...e};Object.keys(e).every(e=>t[e]===c[e])||(l(t),Ci(),l(await Ar(t)),n())},we=(e,t)=>{le(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return fa(Bp,i),i})},Te=Tp(c?.accentColor,Sp),Ee=Tp(c?.secondaryColor,Cp),De=(e,t)=>{c&&(we(`accent`,Te),we(`secondary`,Ee),Ce({accentColor:e,secondaryColor:t}))},Oe=(e,t)=>{c&&(we(e,e===`accent`?Te:Ee),Ce(e===`accent`?{accentColor:t}:{secondaryColor:t}))},ke=async()=>{me(!0),L(!1);try{F(await Ir())}catch{L(!0)}finally{me(!1)}},Ae=async()=>{if(!c||!ue)return;let e=ue.name.trim()||`${ue.accent.toUpperCase()} / ${ue.secondary.toUpperCase()}`,t=[...c.themePresets,{name:e,accent:ue.accent,secondary:ue.secondary}];de(null),await Ce({themePresets:t})},je=async e=>{c&&await Ce({themePresets:c.themePresets.filter((t,n)=>n!==e)})},Me=e=>{let t=he;ge(null),t&&t.role===e&&(e===`accent`?Te:Ee).toLowerCase()!==t.color.toLowerCase()&&we(e,t.color)},Ne=async()=>{let e=P.trim();if(e&&!M){re(!0),ie(null);try{ne(await yp(e,oe)),ae(``)}catch{ie(r(`Could not add the tag.`))}finally{re(!1)}}},Pe=async(e,t)=>{ne(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await bp(e,t)||ie(r(`Could not change the tag's color.`))},B=async e=>{if(M)return;re(!0),ie(null);let t=await vp(e);ne(await _p()),t||ie(`"${e}" is still used by a folder whose index could not be updated.`),re(!1)},Fe=async()=>{let e=A;if(!e||M)return;let t=e.value.trim();t.length===0||t===e.name?j(null):(re(!0),ie(null),await xp(e.name,t)?(ne(await _p()),j(null)):ie(`Could not rename "${e.name}".`),re(!1))},Ie=async e=>{let t=new Set(ye.columns??rr.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=Ml.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await Ce({defaultView:{...ye,columns:n}})},Le=async()=>{if(T)return;let e=!C;E(!0),ee(null);try{let t=await Vr(e);w(t),l(e=>e&&{...e,linksEnabled:t}),n(),t!==e&&ee(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{ee(`The request to Windows failed. Try again.`)}finally{E(!1)}},V=async(e,t)=>{if(!c)return;let n={...c.extensionIcons};t===null?delete n[e]:n[e]=t,await Ce({extensionIcons:n})},Re={...di,...c?.shortcuts};(0,_.useEffect)(()=>{if(!O)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){te(null);return}let t=hi(e);t&&(te(null),Ce({shortcuts:{...Re,[O]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[O,c]);let ze=async e=>{await Ce({recentLimit:Math.min(Math.max(e,0),50)})},Be=async e=>{await Ce({galleryRoots:e.length>0?e:null})},Ve=async()=>{let e=await _d(),t=c?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await Be([...t,e])},He=async()=>{let e=f.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await V(e,m),p(``))},Ue=async()=>{b(!0);try{let e=await _d();if(!e)return;let t=await vd([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await Mr(e.replace(/[\\/][^\\/]+$/,``),$i(e),`file:${t}`)&&(Ci(),d({folder:e,icon:t}))}finally{b(!1)}};return(0,K.jsxs)(Qp,{children:[(0,K.jsxs)($p,{ref:ve,children:[(0,K.jsxs)(em,{ref:xe(`application`),children:[(0,K.jsx)(Zp,{note:`The build, its yafm:// links, and what reopens at launch.`,title:`Application`}),(0,K.jsxs)(nm,{children:[(0,K.jsxs)(Z,{children:[(0,K.jsx)(Q,{children:r(`Version`)}),(0,K.jsx)(jm,{children:e?`v${e.version}`:`—`})]}),(0,K.jsxs)(Z,{children:[(0,K.jsx)(Q,{children:r(`Platform`)}),(0,K.jsx)(jm,{children:e?.platform??`—`})]}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:r(`Language`)}),(0,K.jsx)($,{children:r(`The language the interface uses. English is the default; the system option follows the operating system.`)})]}),(0,K.jsx)(Om,{children:(0,K.jsx)(Jp,{disabled:!c,onChange:e=>void Ce({language:e}),options:[Lp,...i.length>0?i:[Ip]],value:c?.language??Ip})})]}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:r(`Open yafm:// links`)}),(0,K.jsx)($,{children:r(`Registers this app for yafm:// links, for the current user only. While this is on, the app repairs the entry at every launch.`)}),D&&(0,K.jsx)(Am,{children:D})]}),(0,K.jsxs)(Om,{children:[(0,K.jsx)(Rm,{$on:C,children:r(C?`Active`:`Off`)}),(0,K.jsx)(zm,{$on:C,disabled:T,onClick:()=>void Le(),title:r(C?`Stop opening yafm:// links`:`Open yafm:// links with this app`),type:`button`,children:(0,K.jsx)(Bm,{})})]})]}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:r(`Use as the default file manager`)}),(0,K.jsx)($,{children:r(`Registers this app for folder opens on this account. Explorer stays available from the context menu; on Linux this sets the inode/directory default.`)})]}),(0,K.jsxs)(Om,{children:[(0,K.jsx)(Rm,{$on:c?.defaultFileManager??!1,children:c?.defaultFileManager?r(`Active`):r(`Off`)}),(0,K.jsx)(zm,{$on:c?.defaultFileManager??!1,disabled:!c,onClick:()=>void Ce({defaultFileManager:!c?.defaultFileManager}),title:c?.defaultFileManager?r(`Stop using this app for folders`):r(`Use this app for folders`),type:`button`,children:(0,K.jsx)(Bm,{})})]})]}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:r(`Reopen the tabs that were open`)}),(0,K.jsx)($,{children:r(`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`)})]}),(0,K.jsx)(zm,{$on:c?.restoreTabs??!0,disabled:!c,onClick:()=>void Ce({restoreTabs:!c?.restoreTabs}),type:`button`,children:(0,K.jsx)(Bm,{})})]})]})]}),(0,K.jsxs)(em,{ref:xe(`updates`),children:[(0,K.jsx)(Zp,{note:`The running build and the newest one published.`,title:`Updates`}),(0,K.jsxs)(nm,{children:[(0,K.jsxs)(Z,{children:[(0,K.jsx)(Q,{children:r(`Current version`)}),(0,K.jsx)(jm,{children:e?`v${e.version}`:`—`})]}),(0,K.jsxs)(Z,{children:[(0,K.jsx)(Q,{children:r(`Latest version`)}),(0,K.jsx)(jm,{children:fe?`v${fe.latest}`:`—`})]}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:r(`Check for updates`)}),(0,K.jsx)($,{children:fe&&!fe.available?r(`You are on the latest version.`):r(`Reads the version file the release workflow publishes.`)})]}),(0,K.jsx)(Om,{children:(0,K.jsx)($m,{disabled:pe,onClick:()=>void ke(),type:`button`,children:r(pe?`Checking…`:`Check now`)})})]}),fe?.available&&(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:r(`Version {version} is available.`,{version:fe.latest})}),(0,K.jsx)($,{children:r(`Download the new build from the releases page.`)})]}),(0,K.jsx)(Om,{children:(0,K.jsx)($m,{onClick:()=>void Lr(Fp),type:`button`,children:r(`Open release page`)})})]}),I&&(0,K.jsx)(Z,{children:(0,K.jsx)(Am,{children:r(`Could not check for updates.`)})})]})]}),(0,K.jsxs)(em,{ref:xe(`colors`),children:[(0,K.jsx)(Zp,{note:`The accent and highlight colours the whole window uses.`,title:`Colors`}),(0,K.jsxs)(nm,{children:[(0,K.jsxs)(rm,{children:[(0,K.jsxs)(im,{children:[(0,K.jsx)(Q,{children:r(`Presets`)}),(0,K.jsx)($,{children:r(`One click changes the accent and the highlight together.`)})]}),(0,K.jsxs)(am,{children:[Pp.map(e=>(0,K.jsxs)(om,{$on:Te.toLowerCase()===e.accent&&Ee.toLowerCase()===e.secondary,onClick:()=>De(e.accent,e.secondary),title:`${r(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,K.jsxs)(pm,{children:[(0,K.jsx)(`i`,{style:{background:e.accent}}),(0,K.jsx)(`i`,{style:{background:e.secondary}})]}),(0,K.jsx)(sm,{children:r(e.name)})]},e.name)),be.map((e,t)=>(0,K.jsxs)(cm,{children:[(0,K.jsxs)(om,{$on:Te.toLowerCase()===e.accent.toLowerCase()&&Ee.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>De(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,K.jsxs)(pm,{children:[(0,K.jsx)(`i`,{style:{background:e.accent}}),(0,K.jsx)(`i`,{style:{background:e.secondary}})]}),(0,K.jsx)(sm,{children:e.name})]}),(0,K.jsx)(lm,{onClick:()=>void je(t),title:r(`Remove preset`),type:`button`,children:(0,K.jsx)(Lo,{size:9})})]},`${e.name}-${t}`)),ue?(0,K.jsxs)(dm,{children:[(0,K.jsxs)(pm,{children:[(0,K.jsx)(`i`,{style:{background:ue.accent}}),(0,K.jsx)(`i`,{style:{background:ue.secondary}})]}),(0,K.jsx)(fm,{autoFocus:!0,maxLength:24,onChange:e=>de({...ue,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Ae()):e.key===`Escape`&&(e.preventDefault(),de(null))},placeholder:r(`Preset name`),spellCheck:!1,value:ue.name}),(0,K.jsx)(Pm,{onClick:()=>void Ae(),type:`button`,children:r(`Save`)}),(0,K.jsx)(Pm,{onClick:()=>de(null),type:`button`,children:r(`Cancel`)})]}):(0,K.jsxs)(um,{disabled:!c,onClick:()=>de({name:``,accent:Te,secondary:Ee}),title:r(`Save the current colours as a preset`),type:`button`,children:[(0,K.jsx)(Do,{size:12}),r(`Add preset`)]})]})]}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:r(`Accent color`)}),(0,K.jsx)($,{children:r(`Buttons, selections, focus rings, and active navigation.`)})]}),(0,K.jsxs)(Om,{children:[(0,K.jsx)(Xp,{colors:ce.accent,current:Te,onApply:e=>Oe(`accent`,e)}),(0,K.jsx)(Fm,{"aria-label":r(`Accent color`),disabled:!c,onBlur:()=>Me(`accent`),onChange:e=>void Ce({accentColor:e.target.value}),onFocus:()=>ge({role:`accent`,color:Te}),type:`color`,value:Te}),(0,K.jsx)(Im,{children:Te.toUpperCase()})]})]}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:r(`Secondary color`)}),(0,K.jsx)($,{children:r(`Gradients, highlights, and the second end of the accent ramp.`)})]}),(0,K.jsxs)(Om,{children:[(0,K.jsx)(Xp,{colors:ce.secondary,current:Ee,onApply:e=>Oe(`secondary`,e)}),(0,K.jsx)(Fm,{"aria-label":r(`Secondary color`),disabled:!c,onBlur:()=>Me(`secondary`),onChange:e=>void Ce({secondaryColor:e.target.value}),onFocus:()=>ge({role:`secondary`,color:Ee}),type:`color`,value:Ee}),(0,K.jsx)(Im,{children:Ee.toUpperCase()})]})]}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:r(`Reset colors`)}),(0,K.jsx)($,{children:r(`Returns the interface to the default blue and indigo theme.`)})]}),(0,K.jsx)(Om,{children:(0,K.jsx)(Pm,{disabled:!c,onClick:()=>{we(`accent`,Te),we(`secondary`,Ee),Ce({accentColor:null,secondaryColor:null})},type:`button`,children:r(`Reset`)})})]})]})]}),(0,K.jsxs)(em,{ref:xe(`tags`),children:[(0,K.jsx)(Zp,{note:`Every tag in the catalogue; add, rename, recolour or remove them here.`,title:`Tags`}),(0,K.jsxs)(nm,{children:[(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsxs)(km,{children:[(0,K.jsx)(Mm,{"aria-label":r(`Color of the new tag`),onChange:e=>se(e.target.value),type:`color`,value:oe}),(0,K.jsx)(Vm,{onChange:e=>ae(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ne())},placeholder:r(`New tag`),spellCheck:!1,value:P})]}),(0,K.jsx)($,{children:r(`Add a tag here; it is available in every folder.`)})]}),(0,K.jsx)(Om,{children:(0,K.jsx)(Pm,{disabled:M||P.trim().length===0,onClick:()=>void Ne(),type:`button`,children:r(`Add`)})})]}),N&&(0,K.jsx)(Z,{children:(0,K.jsx)(Am,{children:N})}),k.length===0&&(0,K.jsx)(Z,{children:(0,K.jsx)($,{children:r(`No tags yet. Add one below; it is available in every folder.`)})}),k.map(e=>(0,K.jsx)(Z,{children:A?.name===e.name?(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsxs)(km,{children:[(0,K.jsx)(Mm,{"aria-label":r(`Color of {tag}`,{tag:e.name}),onChange:t=>void Pe(e.name,t.target.value),title:r(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,K.jsx)(Nm,{autoFocus:!0,disabled:M,onChange:t=>j({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Fe()):e.key===`Escape`&&(e.preventDefault(),j(null))},value:A.value})]}),(0,K.jsx)($,{children:r(`Press Enter to save, Escape to cancel.`)})]}),(0,K.jsxs)(Om,{children:[(0,K.jsx)(Pm,{disabled:M,onClick:()=>void Fe(),type:`button`,children:r(`Save`)}),(0,K.jsx)(Pm,{disabled:M,onClick:()=>j(null),type:`button`,children:r(`Cancel`)})]})]}):(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsxs)(km,{children:[(0,K.jsx)(Mm,{"aria-label":r(`Color of {tag}`,{tag:e.name}),onChange:t=>void Pe(e.name,t.target.value),title:r(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,K.jsx)(Q,{children:e.name})]}),(0,K.jsx)($,{children:Xi(r,e.folders,`Used in 1 folder. Renaming or removing it updates that folder's index.`,`Used in {count} folders. Renaming or removing it updates those folders' indexes.`)})]}),(0,K.jsxs)(Om,{children:[(0,K.jsx)(Pm,{disabled:M,onClick:()=>j({name:e.name,value:e.name}),type:`button`,children:r(`Edit`)}),(0,K.jsxs)(Lm,{disabled:M,onClick:()=>void B(e.name),type:`button`,children:[(0,K.jsx)(Fo,{size:13}),r(`Remove`)]})]})]})},e.name))]})]}),(0,K.jsxs)(em,{ref:xe(`files-view`),children:[(0,K.jsx)(Zp,{note:`The defaults every folder starts with; a folder can still override them.`,title:`Files view (global)`}),(0,K.jsxs)(nm,{children:[(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:r(`Default view`)}),(0,K.jsx)($,{children:r(`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`)})]}),(0,K.jsx)(Om,{children:(0,K.jsxs)(qm,{children:[(0,K.jsx)(Jm,{$on:ye.mode===`list`,onClick:()=>void Ce({defaultView:{...ye,mode:`list`}}),type:`button`,children:r(`List`)}),(0,K.jsx)(Jm,{$on:ye.mode===`grid`,onClick:()=>void Ce({defaultView:{...ye,mode:`grid`}}),type:`button`,children:r(`Grid`)})]})})]}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:r(`List icon size`)}),(0,K.jsx)($,{children:r(`The icon in the list rows.`)})]}),(0,K.jsxs)(Om,{children:[(0,K.jsx)(Ym,{max:48,min:16,onChange:e=>void Ce({defaultView:{...ye,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:ye.iconSize}),(0,K.jsxs)(jm,{children:[ye.iconSize,`px`]})]})]}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:r(`Grid size`)}),(0,K.jsx)($,{children:r(`The height of a grid tile; the icon inside follows it.`)})]}),(0,K.jsxs)(Om,{children:[(0,K.jsx)(Ym,{max:260,min:100,onChange:e=>void Ce({defaultView:{...ye,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:ye.gridSize}),(0,K.jsxs)(jm,{children:[ye.gridSize,`px`]})]})]}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsxs)(km,{children:[(0,K.jsx)(Q,{children:r(`Selection checkboxes`)}),(0,K.jsx)(jp,{})]}),(0,K.jsx)($,{children:r(`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`)})]}),(0,K.jsx)(zm,{$on:c?.showCheckboxes??!0,disabled:!c,onClick:()=>void Ce({showCheckboxes:!(c?.showCheckboxes??!0)}),type:`button`,children:(0,K.jsx)(Bm,{})})]}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsxs)(km,{children:[(0,K.jsx)(Q,{children:r(`Open with a single click`)}),(0,K.jsx)(jp,{})]}),(0,K.jsx)($,{children:r(`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`)})]}),(0,K.jsx)(zm,{$on:c?.openOnSingleClick??!1,disabled:!c,onClick:()=>void Ce({openOnSingleClick:!(c?.openOnSingleClick??!1)}),type:`button`,children:(0,K.jsx)(Bm,{})})]}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsxs)(km,{children:[(0,K.jsx)(Q,{children:r(`Confirm before deleting`)}),(0,K.jsx)(jp,{})]}),(0,K.jsx)($,{children:r(`Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.`)})]}),(0,K.jsx)(zm,{$on:c?.confirmDelete??!1,disabled:!c,onClick:()=>void Ce({confirmDelete:!(c?.confirmDelete??!1)}),type:`button`,children:(0,K.jsx)(Bm,{})})]}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsxs)(km,{children:[(0,K.jsx)(Q,{children:r(`Play audio in video previews`)}),(0,K.jsx)(jp,{})]}),(0,K.jsx)($,{children:r(`Video previews play muted by default. Turn this on to hear their audio while the details panel is open.`)})]}),(0,K.jsx)(zm,{$on:c?.previewVideoAudio??!1,disabled:!c,onClick:()=>void Ce({previewVideoAudio:!(c?.previewVideoAudio??!1)}),type:`button`,children:(0,K.jsx)(Bm,{})})]}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsxs)(km,{children:[(0,K.jsx)(Q,{children:r(`Autoplay video previews`)}),(0,K.jsx)(jp,{})]}),(0,K.jsx)($,{children:r(`Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.`)})]}),(0,K.jsx)(zm,{$on:c?.previewVideoAutoplay??!1,disabled:!c,onClick:()=>void Ce({previewVideoAutoplay:!(c?.previewVideoAutoplay??!1)}),type:`button`,children:(0,K.jsx)(Bm,{})})]}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsxs)(km,{children:[(0,K.jsx)(Q,{children:r(`Preview panel under the list`)}),(0,K.jsx)(jp,{})]}),(0,K.jsx)($,{children:r(`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`)})]}),(0,K.jsx)(zm,{$on:ye.showImages??!0,onClick:()=>void Ce({defaultView:{...ye,showImages:!(ye.showImages??!0)}}),type:`button`,children:(0,K.jsx)(Bm,{})})]}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Dm,{children:[(0,K.jsxs)(km,{children:[(0,K.jsx)(Q,{children:r(`Columns`)}),(0,K.jsx)(jp,{})]}),(0,K.jsx)($,{children:r(`Shown in every folder; changing them changes all folders at once.`)})]})}),(0,K.jsx)(Z,{children:(0,K.jsxs)(Xm,{children:[Ml.map(e=>(0,K.jsxs)(Zm,{children:[(0,K.jsx)(`input`,{checked:(ye.columns??[]).includes(e.id),onChange:()=>void Ie(e.id),type:`checkbox`}),(0,K.jsx)(`span`,{children:r(e.label)})]},e.id)),(0,K.jsxs)(Zm,{children:[(0,K.jsx)(`input`,{checked:(ye.columns??[]).includes(`linkTarget`),onChange:()=>void Ie(`linkTarget`),type:`checkbox`}),(0,K.jsx)(`span`,{children:r(`Link target after the name`)})]})]})})]}),(0,K.jsxs)(rh,{children:[r(`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.`),` `,(0,K.jsx)(jp,{}),` `,r(`Anything marked as global always applies to every folder.`)]})]}),(0,K.jsxs)(em,{ref:xe(`shortcuts`),children:[(0,K.jsx)(Zp,{note:`The keys this window listens for. Click a combination to record a new one.`,title:`Shortcuts`}),(0,K.jsxs)(nm,{children:[Np.map(({id:e,label:t,note:n})=>(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:r(t)}),(0,K.jsx)($,{children:r(n)})]}),(0,K.jsx)(Om,{children:(0,K.jsx)(Qm,{$listening:O===e,onClick:()=>te(e),type:`button`,children:O===e?r(`Press a key…`):gi(Re[e])})})]},e)),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:r(`Reset`)}),(0,K.jsx)($,{children:r(`Back to the default combination for every action.`)})]}),(0,K.jsx)(Om,{children:(0,K.jsx)($m,{onClick:()=>void Ce({shortcuts:{...di}}),type:`button`,children:r(`Reset`)})})]})]})]}),(0,K.jsxs)(em,{ref:xe(`memory`),children:[(0,K.jsx)(Zp,{note:`What the process holds and how to give it back.`,title:`Memory`}),(0,K.jsxs)(nm,{children:[(0,K.jsxs)(Cm,{children:[(0,K.jsxs)(wm,{children:[(0,K.jsx)(Q,{children:r(`Process memory`)}),(0,K.jsx)(jm,{children:x?`${q(x.private)} · ${Sm(x.private,x.available)}`:`—`})]}),(0,K.jsx)(Tm,{children:(0,K.jsx)(Em,{$ratio:x?x.private/Math.max(x.available,1):0,$tone:Qi(x?x.private/Math.max(x.available,1):0)})}),(0,K.jsx)($,{children:x?r(`Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.`,{available:q(x.available),resident:q(x.workingSet)}):r(`Reading the current usage…`)})]}),(0,K.jsxs)(Cm,{children:[(0,K.jsxs)(wm,{children:[(0,K.jsx)(Q,{children:r(`Managed heap`)}),(0,K.jsx)(jm,{children:x?`${q(x.managed)} · ${Sm(x.managed,x.private)}`:`—`})]}),(0,K.jsx)(Tm,{children:(0,K.jsx)(Em,{$ratio:x?x.managed/Math.max(x.private,1):0,$tone:`var(--accent-secondary)`})}),(0,K.jsx)($,{children:r(`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`)})]}),(0,K.jsxs)(Cm,{children:[(0,K.jsxs)(wm,{children:[(0,K.jsx)(Q,{children:r(`Native and runtime`)}),(0,K.jsx)(jm,{children:x?`${q(Math.max(0,x.private-x.managed))} · ${Sm(Math.max(0,x.private-x.managed),x.private)}`:`—`})]}),(0,K.jsx)(Tm,{children:(0,K.jsx)(Em,{$ratio:x?Math.max(0,x.private-x.managed)/Math.max(x.private,1):0,$tone:`var(--accent-primary)`})}),(0,K.jsx)($,{children:r(`The runtime, loaded libraries and the Rust helper share this part. Rust runs inside the process, so it has no separate figure.`)})]}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:r(`Free memory`)}),(0,K.jsx)($,{children:r(`Compacts the heap and returns unused pages to the system. Always safe.`)})]}),(0,K.jsx)(Om,{children:(0,K.jsx)($m,{onClick:()=>void zr().then(S),type:`button`,children:r(`Trim now`)})})]})]})]}),(0,K.jsxs)(em,{ref:xe(`overview`),children:[(0,K.jsx)(Zp,{note:`The home tab's history and how much of it it shows.`,title:`Overview`}),(0,K.jsx)(nm,{children:(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:r(`Recent items`)}),(0,K.jsx)($,{children:r(`How many recently opened folders the overview lists. 0 hides the section.`)})]}),(0,K.jsx)(Om,{children:(0,K.jsx)(Vm,{max:50,min:0,onChange:e=>void ze(Number(e.target.value)),type:`number`,value:c?.recentLimit??10})})]})})]}),(0,K.jsxs)(em,{ref:xe(`gallery`),children:[(0,K.jsx)(Zp,{note:`The folders the gallery scans for pictures and videos.`,title:`Gallery`}),(0,K.jsxs)(nm,{children:[(c?.galleryRoots??[]).map(e=>(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:$i(e)}),(0,K.jsx)($,{children:e})]}),(0,K.jsx)(Om,{children:(0,K.jsx)(eh,{onClick:()=>void Be((c?.galleryRoots??[]).filter(t=>t!==e)),title:r(`Stop scanning this folder`),type:`button`,children:(0,K.jsx)(Lo,{size:12})})})]},e)),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:r(`Scan folders`)}),(0,K.jsx)($,{children:(c?.galleryRoots??[]).length===0?r(`Nothing added yet, so the gallery reads the Pictures folder.`):r(`Only these folders are scanned, three levels deep.`)})]}),(0,K.jsx)(Om,{children:(0,K.jsx)($m,{onClick:()=>void Ve(),type:`button`,children:r(`Choose folder…`)})})]})]})]}),(0,K.jsxs)(em,{ref:xe(`icons`),children:[(0,K.jsx)(Zp,{note:`Where the shell's own icons and the built-in glyphs come from.`,title:`Icons`}),(0,K.jsxs)(nm,{children:[(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:r(`Use system file icons`)}),(0,K.jsx)($,{children:r(`Ask the shell for the icon of each file type instead of the built-in glyphs.`)})]}),(0,K.jsx)(zm,{$on:c?.systemIcons??!1,disabled:!c,onClick:()=>void Ce({systemIcons:!c?.systemIcons}),type:`button`,children:(0,K.jsx)(Bm,{})})]}),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:r(`Use custom folder icons`)}),(0,K.jsx)($,{children:r(`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`)})]}),(0,K.jsx)(zm,{$on:c?.customFolderIcons??!1,disabled:!c,onClick:()=>void Ce({customFolderIcons:!c?.customFolderIcons}),type:`button`,children:(0,K.jsx)(Bm,{})})]})]})]}),(0,K.jsxs)(em,{ref:xe(`extension-icons`),children:[(0,K.jsx)(Zp,{note:`A custom glyph for one file extension.`,title:`Icons by extension`}),(0,K.jsxs)(nm,{children:[Object.entries(c?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:e}),(0,K.jsx)($,{children:Gp(r,t)})]}),(0,K.jsxs)(Om,{children:[(0,K.jsx)(Kp,{source:t}),(0,K.jsx)(eh,{onClick:()=>void V(e,null),title:r(`Remove this rule`),type:`button`,children:(0,K.jsx)(Lo,{size:12})})]})]},e)),(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:r(`Add a rule`)}),(0,K.jsx)($,{children:r(`Extension and the icon to draw for it.`)})]}),(0,K.jsxs)(Om,{children:[(0,K.jsx)(Vm,{onChange:e=>p(e.target.value),placeholder:`.psd`,spellCheck:!1,value:f}),(0,K.jsxs)(Km,{children:[(0,K.jsx)(eh,{onClick:()=>v(e=>!e),title:r(`Choose the icon`),type:`button`,children:(0,K.jsx)(Kp,{source:m})}),g&&(0,K.jsx)(Ed,{allowDefault:!1,onClose:()=>v(!1),onPick:e=>{h(e??`file`),v(!1)},value:m})]}),(0,K.jsx)(eh,{onClick:()=>void He(),title:r(`Add the rule`),type:`button`,children:(0,K.jsx)(Do,{size:13})})]})]})]})]}),(0,K.jsxs)(em,{ref:xe(`folder-icons`),children:[(0,K.jsx)(Zp,{note:`A single folder can carry an icon of its own.`,title:`Folder icons`}),(0,K.jsxs)(nm,{children:[(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:r(`Give a folder its own icon`)}),(0,K.jsx)($,{children:r(`Stored in the folder's parent {index}, so it stays with the files.`,{index:`.yafm-index.db`})})]}),(0,K.jsxs)(Om,{children:[u&&(0,K.jsx)(qp,{src:u.icon}),(0,K.jsx)($m,{disabled:y,onClick:()=>void Ue(),type:`button`,children:r(y?`Choosing…`:`Choose folder and icon…`)})]})]}),u&&(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:$i(u.folder)}),(0,K.jsx)($,{children:u.folder})]}),(0,K.jsx)(Om,{children:(0,K.jsxs)(nh,{children:[(0,K.jsx)(Io,{size:11}),` `,r(`Saved`)]})})]})]})]}),(0,K.jsxs)(em,{ref:xe(`folder-index`),children:[(0,K.jsx)(Zp,{note:`The hidden cache that makes a folder open instantly next time.`,title:`Folder index`}),(0,K.jsx)(nm,{children:(0,K.jsxs)(Z,{children:[(0,K.jsxs)(Dm,{children:[(0,K.jsx)(Q,{children:r(`Keep a {index} in every folder`,{index:`.yafm-index.db`})}),(0,K.jsx)($,{children:r(`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`)})]}),(0,K.jsx)(zm,{$on:c?.writeDirectoryIndex??!0,disabled:!c,onClick:()=>void Ce({writeDirectoryIndex:!c?.writeDirectoryIndex}),type:`button`,children:(0,K.jsx)(Bm,{})})]})}),!(c?.writeDirectoryIndex??!0)&&(0,K.jsx)(ih,{children:Wp(r,e?.platform)})]}),(0,K.jsxs)(em,{ref:xe(`files`),children:[(0,K.jsx)(Zp,{note:`What the listings include.`,title:`Files`}),(0,K.jsxs)(nm,{children:[(0,K.jsxs)(Z,{children:[(0,K.jsx)(Q,{children:r(`Hidden items`)}),(0,K.jsx)(jm,{children:Up(r,o?.showHidden)})]}),(0,K.jsxs)(Z,{children:[(0,K.jsx)(Q,{children:r(`Protected operating system files`)}),(0,K.jsx)(jm,{children:Up(r,o?.showSystem)})]})]}),(0,K.jsx)(rh,{children:r(`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`)})]})]}),(0,K.jsxs)(_m,{"aria-label":r(`Settings sections`),children:[(0,K.jsx)(vm,{children:r(`Sections`)}),(0,K.jsx)(ym,{children:zp.map(({id:e,label:t})=>(0,K.jsx)(bm,{$active:_e===e,onClick:()=>Se(e),type:`button`,children:(0,K.jsx)(`span`,{children:r(t)})},e))}),(0,K.jsx)(xm,{children:r(`Changes are saved as you make them.`)})]})]})}function Up(e,t){return e(t===void 0?`Reading…`:t?`Shown`:`Hidden`)}function Wp(e,t){return e(`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`,{place:e(t===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:t===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`)})}function Gp(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built-in: {source}`,{source:t})}function Kp({source:e}){let t=Oi(e.startsWith(`file:`)?e.slice(5):null);return(0,K.jsx)(th,{children:t?(0,K.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,K.jsx)(nl,{name:e,size:16})})}function qp({src:e}){let t=Oi(e);return(0,K.jsx)(th,{children:t&&(0,K.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function Jp({value:e,options:t,onChange:n,disabled:r}){let i=Jn(),[a,o]=(0,_.useState)(null),s=(0,_.useRef)(null);return(0,_.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(Hm,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,K.jsx)(`span`,{children:Yp(i,e)}),(0,K.jsx)(Um,{children:(0,K.jsx)(Ao,{size:11})})]}),a&&(0,Ts.createPortal)((0,K.jsx)(Wm,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,K.jsxs)(Gm,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,K.jsx)(`span`,{children:Yp(i,t)}),t===e&&(0,K.jsx)(Io,{size:11})]},t))}),document.body)]})}function Yp(e,t){return t===Lp?e(`System default`):Rp[t]??t}function Xp({colors:e,current:t,onApply:n}){let r=Jn();if(e.length===0)return null;let[i,...a]=e;return(0,K.jsxs)(mm,{children:[(0,K.jsxs)(gm,{$color:i,onClick:()=>n(i),title:r(`Previous colour · {colour}`,{colour:i}),type:`button`,children:[(0,K.jsx)(`i`,{}),r(`Previous`)]}),a.map(e=>(0,K.jsx)(hm,{$color:e,onClick:()=>n(e),title:r(`Use {colour}`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,K.jsx)(Io,{size:9})},e))]})}function Zp({title:e,note:t}){let n=Jn();return(0,K.jsxs)(tm,{children:[(0,K.jsx)(`h2`,{children:n(e)}),(0,K.jsx)(`p`,{children:n(t)})]})}var Qp=W.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,$p=W.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,em=W.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 900px;
    scroll-margin-top: 10px;
`,tm=W.header`
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
`,nm=W.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,rm=W.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,im=W.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,am=W.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,om=W.button`
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
`,sm=W.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,cm=W.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,lm=W.button`
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
`,um=W.button`
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
`,dm=W.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,fm=W.input`
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
`,pm=W.span`
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
`,mm=W.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,hm=W.button`
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
`,gm=W.button`
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
`,_m=W.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,vm=W.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ym=W.div`
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
`,bm=W.button`
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

    ${({$active:e})=>e&&kn`
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
`,xm=W.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function Sm(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}var Cm=W.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,wm=W.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,Tm=W.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Em=W.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,Z=W.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,Dm=W.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Om=W.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,Q=W.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,km=W.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=W.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,Am=W.span`
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
`,jm=W.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,Mm=W.input`
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
`,Nm=W.input`
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
`,Pm=W.button`
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
`,Fm=W.input`
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
`,Im=W.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,Lm=W.button`
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
`,Rm=W.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,zm=W.button`
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
`,Bm=W.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,Vm=W.input`
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
`,Hm=W.button`
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
`,Um=W.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Wm=W.div`
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
`,Gm=W.button`
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
`,Km=W.span`
    position: relative;
    display: inline-flex;
`,qm=W.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Jm=W.button`
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
`,Ym=W.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,Xm=W.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,Zm=W.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,Qm=W.button`
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
`,$m=W.button`
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
`,eh=W.button`
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
`,th=W.span`
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
`,nh=W.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,rh=W.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,ih=W.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,ah=150,oh=2500,sh=3,ch=600;function lh({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i}){let a=Jn(),[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)(0),[u,d]=(0,_.useState)(!0),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)(!1),g=(0,_.useRef)([]),v=(0,_.useRef)(0),y=(0,_.useRef)(!1),b=(0,_.useRef)(!0),x=(0,_.useRef)(0),S=(0,_.useRef)(null),C=(0,_.useRef)(0),w=(0,_.useCallback)(async e=>{let t=++x.current;d(!0),b.current=!0,p(null);try{let n=await br(0,ah,e);if(t!==x.current)return;g.current=n.entries,v.current=n.total,s(n.entries),l(n.total)}catch(e){t===x.current&&p(e instanceof Error?e.message:String(e))}finally{t===x.current&&(b.current=!1,d(!1))}},[]);(0,_.useEffect)(()=>{w(!1)},[w]);let T=(0,_.useCallback)(async()=>{if(b.current||y.current||g.current.length>=v.current)return;let e=x.current;y.current=!0;try{let t=g.current,n=v.current;for(let r=0;r<sh&&t.length<n;r++){let r=await br(t.length,ah,!1);if(e!==x.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<ah)break}if(e!==x.current)return;g.current=t,v.current=n,(0,_.startTransition)(()=>{s(t),l(n)})}catch{}finally{y.current=!1}},[]),E=(0,_.useCallback)(e=>{C.current||=window.requestAnimationFrame(()=>{C.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<oh&&T()})},[T]);(0,_.useEffect)(()=>{let e=S.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&T()},{root:e.parentElement,rootMargin:`${oh}px 0px`});return t.observe(e),()=>t.disconnect()},[T]),(0,_.useEffect)(()=>{if(o.length>=c)return;let e=window.setTimeout(()=>{let e=S.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<oh&&T()},200);return()=>window.clearTimeout(e)},[o.length,c,T]);let D=(0,_.useMemo)(()=>({path:``,parent:null,entries:o.map(uh),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[o]),ee=(0,_.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),O=(0,_.useCallback)(e=>{ar(e)},[]),te=(0,_.useCallback)(e=>{let t=dh(e.modified);return{id:t,label:t}},[]),k=()=>{h(!0),w(!0).finally(()=>h(!1))},ne=o.length<c;return(0,K.jsxs)(fh,{children:[(0,K.jsxs)(ph,{children:[(0,K.jsxs)(mh,{children:[(0,K.jsx)(`span`,{children:a(`Gallery`)}),(0,K.jsx)(hh,{children:u?a(`scanning…`):a(`{shown} of {total} pictures`,{shown:o.length,total:c})})]}),(0,K.jsx)(gh,{onClick:k,title:a(`Scan the folders again`),type:`button`,children:(0,K.jsx)(_h,{$spinning:m,children:(0,K.jsx)(Eo,{size:14})})})]}),f&&(0,K.jsx)(yh,{children:f}),!f&&!u&&c===0&&(0,K.jsx)(yh,{children:a(`No pictures found.`)}),!f&&(u||c>0)&&(0,K.jsx)(Fl,{confirmDelete:n,listing:u&&o.length===0?null:D,loading:u,error:null,view:ee,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSort:()=>void 0,onOpen:O,onOpenFile:O,onRefresh:k,groupOf:te,onGridScroll:E,gridFooter:(0,K.jsx)(vh,{$space:ne?ch:1,ref:S}),allowBackgroundMenu:!1})]})}function uh(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function dh(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(J(),{weekday:`long`}):t.toLocaleDateString(J(),{year:`numeric`,month:`long`,day:`numeric`})}var fh=W.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,ph=W.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,mh=W.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,hh=W.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,gh=W.button`
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
`,_h=W.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,vh=W.div`
    height: ${({$space:e})=>e}px;
`,yh=W.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function bh({places:e,drives:t,recent:n,recentLimit:r,currentPath:i,activeKind:a,homePath:o=``,version:s=0,historyVersion:c=0,onNavigate:l,onOpenView:u}){let[d,f]=(0,_.useState)([]),p=Jn(),[m,h]=(0,_.useState)(null),g=oa();(0,_.useEffect)(()=>{kr().then(e=>{h(e),f(Ic(e).filter(e=>e.pinned))},()=>{h(null),f([])})},[s]);let v=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>Eh(e.path,t));return{name:m?.placeNames?.[t]??n?.name??($i(t)||t),path:t,kind:`folder`,icon:n?.icon??m?.placeIcons?.[t]??null}}),y=a===`files`;return(0,K.jsxs)(Dh,{children:[(0,K.jsxs)(Oh,{children:[(0,K.jsxs)(Nh,{$active:a===`home`,onClick:()=>u(`home`),title:p(`Overview`),type:`button`,children:[(0,K.jsx)($o,{}),(0,K.jsx)(Fh,{children:p(`Overview`)})]}),(0,K.jsxs)(Nh,{$active:a===`recycle`,onClick:()=>u(`recycle`),title:p(`Recycle Bin`),type:`button`,children:[(0,K.jsx)(Fo,{}),(0,K.jsx)(Fh,{children:p(`Recycle Bin`)})]}),(0,K.jsxs)(Nh,{$active:a===`gallery`,onClick:()=>u(`gallery`),title:p(`Gallery`),type:`button`,children:[(0,K.jsx)(Vo,{}),(0,K.jsx)(Fh,{children:p(`Gallery`)})]})]}),d.map(e=>(0,K.jsxs)(Ah,{children:[(0,K.jsxs)(Nh,{as:`div`,$active:!1,children:[(0,K.jsx)(Ph,{children:(0,K.jsx)(Rc,{panel:e,size:16})}),(0,K.jsx)(Fh,{children:p(e.title)})]}),(0,K.jsx)(jh,{children:(0,K.jsxs)(Mh,{children:[e.kind===`quick`&&v(e).map(e=>(0,K.jsxs)(Nh,{$active:y&&Eh(i,e.path),onClick:t=>l(e.path,mi(t)),title:e.path,type:`button`,children:[(0,K.jsx)(zc,{place:e}),(0,K.jsx)(Fh,{children:e.name})]},e.path)),e.kind===`recent`&&n.slice(0,r).map(e=>{let t=sa(g,e.path);return(0,K.jsxs)(Nh,{$active:y&&Eh(i,e.path),onClick:t=>e.isDirectory?l(e.path,mi(t)):void ar(e.path),title:e.path,type:`button`,children:[t&&g.useIcons?(0,K.jsx)(zc,{place:t}):(0,K.jsx)(rl,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,K.jsx)(Fh,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,K.jsx)(Ch,{historyVersion:c,onNavigate:l}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,K.jsxs)(Nh,{$active:y&&Eh(i,e.name),onClick:t=>l(e.name,mi(t)),title:e.name,type:`button`,children:[(0,K.jsx)(Co,{}),(0,K.jsxs)(Fh,{children:[ra(e),(0,K.jsxs)(Ih,{children:[q(e.freeSpace),` free`]}),(0,K.jsx)(Lh,{children:(0,K.jsx)(Rh,{$used:t,$tone:Qi(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,K.jsx)(wh,{onNavigate:l,path:e.path||o})]})})]},e.id)),(0,K.jsx)(kh,{children:(0,K.jsxs)(Nh,{$active:a===`settings`,onClick:()=>u(`settings`),title:p(`Settings`),type:`button`,children:[(0,K.jsx)(jo,{}),(0,K.jsx)(Fh,{children:p(`Settings`)})]})})]})}var xh=10,Sh=40;function Ch({historyVersion:e=0,onNavigate:t}){let n=Jn(),[r,i]=(0,_.useState)(null),a=oa();return(0,_.useEffect)(()=>{Sr().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=sa(a,e.path);return(0,K.jsxs)(Nh,{$active:!1,onClick:n=>t(e.path,mi(n)),title:Xi(n,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,K.jsx)(zc,{place:r}):(0,K.jsx)(rl,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,K.jsx)(Fh,{children:r?.name||e.name})]},e.path)})}function wh({path:e,onNavigate:t}){let[n,r]=(0,_.useState)(null);(0,_.useEffect)(()=>{e&&(r(null),or(e,!1).then(r,()=>r(null)))},[e]),(0,_.useEffect)(()=>{if(e&&G.available)return G.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&Eh(n.data.path,e)&&or(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,xh),o=i.filter(e=>!e.isDirectory).slice(0,Sh);return(0,K.jsxs)(K.Fragment,{children:[a.map(e=>(0,K.jsx)(Th,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,K.jsx)(Th,{entry:e,onNavigate:t},e.fullPath))]})}function Th({entry:e,onNavigate:t}){let n=oa(),r=sa(n,e.fullPath);return(0,K.jsxs)(Nh,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,mi(n)):void ar(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,K.jsx)(zc,{place:r}):(0,K.jsx)(rl,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,K.jsx)(Fh,{children:r?.name||e.name})]})}function Eh(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}var Dh=W.aside`
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

    &:not(:hover) ${()=>Ih},
    &:not(:hover) ${()=>Lh} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,Oh=W.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,kh=W(Oh)`
    margin-top: auto;
`,Ah=W.div`
    display: flex;
    flex-direction: column;
`,jh=W.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${Dh}:hover ${Ah}:hover > & {
        grid-template-rows: 1fr;
    }
`,Mh=W.div`
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
`,Nh=W.button`
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
`,Ph=W.span`
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
`,Fh=W.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ih=W.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Lh=W.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Rh=W.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`;function zh({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=Jn(),a=(0,_.useRef)(null),o=e.filter(e=>e.state===`running`).length;return(0,_.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[n,r]),(0,K.jsxs)(Vh,{ref:a,children:[(0,K.jsxs)(Hh,{$active:n,onClick:()=>r(!n),title:o>0?Xi(i,o,`1 operation running`,`{count} operations running`):i(`Activity`),type:`button`,children:[(0,K.jsx)(Po,{size:13}),o>0&&(0,K.jsx)(Uh,{children:o>9?`9+`:o})]}),n&&(0,K.jsxs)(Wh,{children:[(0,K.jsxs)(Gh,{children:[(0,K.jsx)(Kh,{children:i(`Activity`)}),(0,K.jsxs)(qh,{children:[(0,K.jsx)(Jh,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`Clear finished`)}),(0,K.jsx)(Yh,{onClick:()=>r(!1),title:i(`Close`),type:`button`,children:(0,K.jsx)(Lo,{size:10})})]})]}),e.length===0?(0,K.jsx)(Zh,{children:i(`No operations yet.`)}):(0,K.jsx)(Xh,{children:e.map(e=>(0,K.jsx)(Bh,{task:e},e.id))})]})]})}function Bh({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,K.jsxs)(Qh,{children:[(0,K.jsxs)($h,{children:[(0,K.jsx)(eg,{$state:e.state,children:e.state===`done`?(0,K.jsx)(Io,{size:10}):e.state===`failed`?(0,K.jsx)(Lo,{size:10}):(0,K.jsx)(tg,{})}),(0,K.jsx)(ng,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,K.jsxs)(rg,{children:[q(e.bytesDone),` / `,q(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,K.jsxs)(rg,{children:[e.done,` / `,e.total]})]}),i&&(0,K.jsx)(ig,{children:(0,K.jsx)(ag,{$percent:r,$indeterminate:t===0})}),e.error&&(0,K.jsx)(og,{children:e.error})]})}var Vh=W.div`
    position: relative;
    display: flex;
`,Hh=W.button`
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
`,Uh=W.span`
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
`,Wh=W.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${Es}
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
`,Gh=W.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Kh=W.span`
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
`,qh=W.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Jh=W.button`
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
`,Yh=W.button`
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
`,Xh=W.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,Zh=W.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Qh=W.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;
    ${Rs}

    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,$h=W.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,eg=W.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,tg=W.span`
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
`,ng=W.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,rg=W.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,ig=W.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,ag=W.div`
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
`,og=W.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;function sg({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=Jn(),[s,c]=(0,_.useState)(!1),l=(0,_.useRef)(null);(0,_.useEffect)(()=>{if(!s)return;let e=e=>{l.current?.contains(e.target)||c(!1)},t=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[s]),(0,_.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=Ml.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,K.jsxs)(cg,{ref:l,children:[(0,K.jsx)(lg,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`View`),type:`button`,children:e.mode===`grid`?(0,K.jsx)(X,{size:14}):(0,K.jsx)(No,{size:14})}),s&&(0,K.jsxs)(ug,{children:[(0,K.jsx)(dg,{children:o(`View`)}),(0,K.jsxs)(fg,{children:[(0,K.jsxs)(pg,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,K.jsx)(No,{size:12}),` `,o(`List`)]}),(0,K.jsxs)(pg,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,K.jsx)(X,{size:12}),` `,o(`Grid`)]})]}),(0,K.jsx)(dg,{children:o(`List icon size`)}),(0,K.jsxs)(mg,{children:[(0,K.jsx)(`input`,{"aria-label":o(`List icon size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,K.jsxs)(hg,{children:[e.iconSize,`px`]})]}),(0,K.jsx)(dg,{children:o(`Grid size`)}),(0,K.jsxs)(mg,{children:[(0,K.jsx)(`input`,{"aria-label":o(`Grid size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,K.jsxs)(hg,{children:[e.gridSize,`px`]})]}),(0,K.jsxs)(dg,{children:[o(`Columns`),(0,K.jsx)(jp,{})]}),Ml.map(e=>(0,K.jsxs)(gg,{children:[(0,K.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,K.jsx)(`span`,{children:e.label})]},e.id)),(0,K.jsxs)(gg,{children:[(0,K.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,K.jsx)(`span`,{children:o(`Link target after the name`)})]}),(0,K.jsxs)(dg,{children:[o(`Preview panel`),(0,K.jsx)(jp,{})]}),(0,K.jsxs)(gg,{children:[(0,K.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,K.jsx)(`span`,{children:o(`Preview under the list`)})]})]})]})}var cg=W.div`
    position: relative;
    display: flex;
    height: 100%;
`,lg=W.button`
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
`,ug=W.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${Es}
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
`,dg=W.div`
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
`,fg=W.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,pg=W.button`
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
`,mg=W.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,hg=W.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,gg=W.label`
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
`,_g=e=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,K.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),vg=e=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,K.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),yg=e=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,K.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),bg=e=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,K.jsx)(`path`,{d:`M2 5h6`})}),xg=e=>(0,K.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,K.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Sg=e=>(0,K.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,K.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,K.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function Cg({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,view:o,onViewChange:s,onColumns:c,showImages:l,onShowImages:u,tasks:d,onClearTasks:f,activityOpen:p,onActivityOpenChange:m,trayCount:h,trayVisible:g,onToggleTray:v,split:y,canSplit:b,onToggleSplit:x,details:S,canDetails:C,onToggleDetails:w,shortcuts:T}){let E=Jn(),D=Zn(),ee=Qn(),[O,te]=(0,_.useState)({left:!1,right:!1}),[k,ne]=(0,_.useState)(null),A=(0,_.useRef)(null),j=(0,_.useRef)(null),M=(0,_.useCallback)(()=>{let e=A.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;te(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,_.useEffect)(()=>{M();let e=A.current;if(!e)return;let t=new ResizeObserver(M);return t.observe(e),()=>t.disconnect()},[M,e.length]),(0,_.useEffect)(()=>{j.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let re=e=>A.current?.scrollBy({left:e,behavior:`smooth`});return(0,K.jsxs)(Eg,{children:[(0,K.jsx)(Dg,{children:(0,K.jsx)(Ro,{size:19})}),(0,K.jsxs)(Og,{children:[O.left&&(0,K.jsx)(Ag,{onClick:()=>re(-180),title:E(`Scroll tabs left`),type:`button`,children:(0,K.jsx)(_g,{})}),(0,K.jsx)(kg,{onScroll:M,onWheel:e=>{let t=A.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:A,children:e.map(e=>(0,K.jsxs)(jg,{$active:e.id===t,$dragging:k===e.id,$split:!!e.split,draggable:!0,onDragEnd:()=>ne(null),onDragOver:e=>{k&&e.preventDefault()},onDragStart:()=>ne(e.id),onDrop:t=>{t.preventDefault(),k&&a(k,e.id),ne(null)},onClick:()=>n(e.id),ref:e.id===t?j:void 0,title:e.path||e.title,type:`button`,children:[(0,K.jsx)(wg,{tab:e}),(0,K.jsx)(Mg,{children:e.title}),e.partner&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(Ng,{children:`|`}),(0,K.jsx)(Tg,{place:e.partner.place}),(0,K.jsx)(Mg,{children:e.partner.title})]}),(0,K.jsx)(Pg,{"data-shortcut":gi(T.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:E(`Close tab`),children:(0,K.jsx)(yg,{})})]},e.id))}),O.right&&(0,K.jsx)(Ag,{onClick:()=>re(180),title:E(`Scroll tabs right`),type:`button`,children:(0,K.jsx)(vg,{})}),(0,K.jsx)(Fg,{"data-shortcut":gi(T.newTab),onClick:i,title:E(`New tab`),type:`button`,children:(0,K.jsx)(Do,{size:13})})]}),(0,K.jsx)(Ig,{...ee}),(0,K.jsxs)(Lg,{children:[(0,K.jsx)(zg,{$active:y,"data-shortcut":gi(T.splitView),disabled:!b,onClick:x,title:E(y?`Close split view`:`Split view`),type:`button`,children:(0,K.jsx)(Cs,{size:15})}),(0,K.jsx)(zg,{$active:S,disabled:!C,onClick:w,title:E(S?`Hide details panel`:`Show details panel`),type:`button`,children:(0,K.jsx)(ws,{size:15})}),(0,K.jsxs)(Rg,{$active:g,onClick:v,title:E(g?`Hide file tray`:`Show file tray`),type:`button`,children:[(0,K.jsx)(hs,{size:14}),h>0&&(0,K.jsx)(Bg,{children:h>9?`9+`:h})]}),(0,K.jsx)(zh,{tasks:d,onClear:f,open:p,onOpenChange:m}),(0,K.jsx)(sg,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:s,onColumns:c,onShowImages:u,showImages:l,view:o}),(0,K.jsx)(Vg,{onClick:D.minimize,title:E(`Minimize`),type:`button`,children:(0,K.jsx)(bg,{})}),(0,K.jsx)(Vg,{onClick:D.toggleMaximize,title:D.maximized?E(`Restore`):E(`Maximize`),type:`button`,children:D.maximized?(0,K.jsx)(Sg,{}):(0,K.jsx)(xg,{})}),(0,K.jsx)(Hg,{onClick:D.close,title:E(`Close`),type:`button`,children:(0,K.jsx)(yg,{})})]})]})}function wg({tab:e}){switch(e.kind){case`home`:return(0,K.jsx)(bo,{size:13});case`settings`:return(0,K.jsx)(jo,{size:13});case`recycle`:return(0,K.jsx)(Fo,{size:13});default:return(0,K.jsx)(Tg,{place:e.place})}}function Tg({place:e}){return e?(0,K.jsx)(zc,{place:e,size:13}):(0,K.jsx)(xo,{size:13})}var Eg=W.header`
    display: flex;
    align-items: stretch;
    height: 44px;
    flex-shrink: 0;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,Dg=W.span`
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
`,Og=W.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,kg=W.div`
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
`,Ag=W.button`
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
`,jg=W.button`
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
`,Mg=W.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ng=W.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,Pg=W.span`
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
`,Fg=W.button`
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
`,Ig=W.div`
    flex: 1;
    min-width: 28px;
`,Lg=W.div`
    display: flex;
    flex-shrink: 0;
`,Rg=W.button`
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
`,zg=W.button`
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
`,Bg=W.span`
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
`,Vg=W.button`
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
`,Hg=W(Vg)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function Ug(){let[e,t]=(0,_.useState)(null),n=(0,_.useRef)(null),r=(0,_.useRef)(void 0);return(0,_.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,Ts.createPortal)((0,K.jsx)(Wg,{tooltip:e}),document.body):null}function Wg({tooltip:e}){let t=(0,_.useRef)(null),[n,r]=(0,_.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,_.useState)(()=>e.bottom+6);return(0,_.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,K.jsxs)(Gg,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,K.jsx)(Kg,{children:e.text}),e.shortcut&&(0,K.jsx)(qg,{children:e.shortcut})]})}var Gg=W.div`
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
    ${Rs}
`,Kg=W.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,qg=W.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,Jg={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`},Yg=`yafm://`,Xg={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`},Zg=0,Qg=20;function $g(e){return`${Yg}${e===`home`?`overview`:e}`}function e_(e){return e.toLowerCase().startsWith(Yg)?Xg[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function t_(e){let t=e.trim();if(t.length===0)return null;if(!t.toLowerCase().startsWith(Yg))return t;let n=Xg[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?$g(n):null}function n_(e){return e.history[e.index]??$g(`home`)}function r_(e){return e_(n_(e))??`files`}function i_(e){let t=n_(e);return e_(t)?``:e.listing?.path||t}function a_(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||r_(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function o_(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function s_(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||nr.iconSize,gridSize:e.view?.gridSize||t.gridSize||nr.gridSize,sort:e.view?.sort??nr.sort,sortDescending:e.view?.sortDescending??nr.sortDescending,columns:t.columns??rr.columns??[]}}function c_(e=$g(`home`)){return Zg+=1,{id:`tab-${Zg}`,listing:null,loading:!e_(e),error:null,history:[e],index:0,fresh:!0,view:null}}function l_(e){return e instanceof Error?e.message:String(e)}function u_(e,t){let n=e=>e.replace(/[\\/]+/g,`\\`).replace(/\\$/,``).toLowerCase();return n(e)===n(t)}function d_(e){let t=e.replace(/[\\/]+$/,``);if(t.length===0)return null;let n=Math.max(t.lastIndexOf(`\\`),t.lastIndexOf(`/`));return n<0?null:n===2&&t[1]===`:`?`${t.slice(0,2)}\\`:t.slice(0,n)}function f_(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return Xi(e,t.entries.length,`1 item · {size}`,`{count} items · {size}`,{size:q(n)})}function p_(){let e=Jn(),[t,n]=(0,_.useState)(()=>[c_()]),[r,i]=(0,_.useState)(()=>t[0].id),[a,o]=(0,_.useState)(()=>{let e=la(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[s,c]=(0,_.useState)([]),[l,u]=(0,_.useState)([]),[d,f]=(0,_.useState)(null),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)(null),v=$n(),[y,b]=(0,_.useState)(Fi),[x,S]=(0,_.useState)(0),[C,w]=(0,_.useState)(0),[T,E]=(0,_.useState)([]),[D,ee]=(0,_.useState)(10),[O,te]=(0,_.useState)(null),[k,ne]=(0,_.useState)(0),[A,j]=(0,_.useState)(di),[M,re]=(0,_.useState)(0),[N,ie]=(0,_.useState)(0),[P,ae]=(0,_.useState)(0),[oe,se]=(0,_.useState)(!0),[ce,le]=(0,_.useState)(()=>{let e=la(`yafm.preview.width`,320);return e>=220?e:320}),[ue,de]=(0,_.useState)(null),[fe,F]=(0,_.useState)(null),[pe,me]=(0,_.useState)(`primary`),[I,L]=(0,_.useState)(null),[he,ge]=(0,_.useState)([]),[_e,R]=(0,_.useState)(!1),ve=(0,_.useRef)([]),z=(0,_.useRef)([]),[ye,be]=(0,_.useState)([]),[xe,Se]=(0,_.useState)([]),[Ce,we]=(0,_.useState)(!1),[Te,Ee]=(0,_.useState)(!1),[De,Oe]=(0,_.useState)(null),[ke,Ae]=(0,_.useState)(null),[je,Me]=(0,_.useState)(()=>{let e=da(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?o_({x:e.x,y:e.y}):o_({x:Math.max(20,window.innerWidth-340),y:110})}),Ne=(0,_.useCallback)(()=>{Me(e=>o_(e)),Ee(!0)},[]),Pe=t.find(e=>e.id===r)??t[0],B=r_(Pe),Fe=n_(Pe),Ie=i_(Pe),Le=B===`files`?Pe.listing?.parent??d_(Ie):null,V=Pe.splitWith?t.find(e=>e.id===Pe.splitWith):void 0,Re=B===`files`&&V!==void 0,ze=V?i_(V):``,Be=V?V.listing?.parent??d_(ze):null,Ve=Re&&V&&pe===`secondary`?V:Pe,He=O?.defaultView??rr,Ue=s_(Ve,He);(0,_.useEffect)(()=>{Ap(O?.accentColor,O?.secondaryColor)},[O?.accentColor,O?.secondaryColor]),(0,_.useEffect)(()=>{me(`primary`)},[r]);let We=Ue.columns.includes(`linkCount`),Ge=(0,_.useMemo)(()=>{let e={},t=Ic(O),n={};for(let[e,t]of Object.entries(O?.placeNames??{}))n[ta(e)]=t;for(let t of s)e[ta(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=ta(t),i=s.find(e=>ta(e.path)===r);e[r]={name:n[r]??i?.name??($i(t)||t),path:t,kind:`folder`,icon:i?.icon??O?.placeIcons?.[t]??null}}return e},[s,O]),Ke=(0,_.useMemo)(()=>({places:Ge,useIcons:O?.systemIcons===!1}),[Ge,O?.systemIcons]),qe=O?.defaultView?.showImages??!0,Je=O?.defaultView?.imageStripHeight??rr.imageStripHeight,Ye=B===`home`?(0,K.jsx)($o,{size:13}):B===`settings`?(0,K.jsx)(jo,{size:13}):B===`recycle`?(0,K.jsx)(Fo,{size:13}):B===`gallery`?(0,K.jsx)(Vo,{size:13}):void 0,Xe=y.open&&y.query.length>0,Ze=(0,_.useMemo)(()=>Xe&&Ve.listing?Ve.listing.entries.filter(e=>Wi(e.isDirectory?ca(Ke,e.fullPath,e.name):e.name,y)).map(e=>e.fullPath):[],[Xe,y,Ve.listing,Ke]);(0,_.useEffect)(()=>{S(0)},[y.query,y.matchCase,y.regex,Ve.listing?.path]);let Qe=Ze.length===0?-1:Math.min(x,Ze.length-1),$e=(0,_.useCallback)(()=>{b(e=>({...e,open:!1,query:``})),S(0)},[]),et=(0,_.useCallback)(()=>{b(e=>({...e,open:!0})),w(e=>e+1)},[]),tt=(0,_.useCallback)(e=>{b(t=>({...t,open:!0,query:t.open?t.query+e:e})),w(e=>e+1)},[]),nt=(0,_.useCallback)(e=>{S(t=>Ze.length===0?0:(Math.min(t,Ze.length-1)+e+Ze.length)%Ze.length)},[Ze.length]),H=(0,_.useRef)({tabs:t,activeId:r,activePane:pe});H.current={tabs:t,activeId:r,activePane:pe};let rt=(0,_.useRef)(O);rt.current=O;let it=(0,_.useRef)(!1),at=(0,_.useRef)([]),ot=(0,_.useCallback)((e,t)=>{n(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),st=(0,_.useRef)(new Map),ct=(0,_.useCallback)(e=>{let t=(st.current.get(e)??0)+1;return st.current.set(e,t),()=>st.current.get(e)===t},[]),lt=(0,_.useCallback)(async(e,t,n)=>{try{let r=await ur(t,We);if(!n()||!r.listing)return;ot(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[We,ot]),ut=(0,_.useCallback)(async(e,t,n=!1)=>{let r=ct(e);$e();let i=!n||!H.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;ot(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&u_(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&lt(e,t,r);let o=await or(t,!0,We);if(!r())return;ot(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),n||Cr(o.path).then(()=>ne(e=>e+1))}catch(i){if(!r())return;let a=H.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?i_(a):``,s=o.replace(/[\\/]+$/,``),c=Math.max(s.lastIndexOf(`\\`),s.lastIndexOf(`/`)),l=c>0?s.slice(0,c):null,u=l_(i);ot(e,e=>({listing:{path:o,parent:l,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:u,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[ct,We,ot,$e,lt]),dt=(0,_.useCallback)((e,t)=>{let n=t_(t);n&&(e_(n)?($e(),ct(e),ot(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):ut(e,n))},[ct,ut,ot,$e]),ft=(0,_.useCallback)(async(e,t,n)=>{if($e(),e_(t)){ct(e),ot(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=ct(e);ot(e,()=>({index:n,listing:null,loading:!0,error:null}));try{if(await lt(e,t,r),!r())return;let n=await or(t,!0,We);if(!r())return;ot(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(n){if(!r())return;let i=t.replace(/[\\/]+$/,``),a=Math.max(i.lastIndexOf(`\\`),i.lastIndexOf(`/`));ot(e,()=>({listing:{path:t,parent:a>0?i.slice(0,a):null,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:l_(n)}))}},[ct,We,ot,$e,lt]),pt=(0,_.useCallback)((e,t=!0)=>{let r=c_(e??$g(`home`));n(e=>[...e,r]),t&&i(r.id),e&&!e_(e)&&ut(r.id,e)},[ut]),mt=(0,_.useCallback)(e=>{dt(H.current.activeId,$g(e))},[dt]),ht=(0,_.useCallback)(e=>{let{tabs:t,activeId:r}=H.current,a=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==a?.splitWith);if(a&&!a.hidden&&(z.current.push(n_(a)),z.current.length>Qg&&z.current.shift()),o.length===0){let e=c_();n([e]),i(e.id);return}let s=t.findIndex(t=>t.id===e);n(o),r===e&&i(o[Math.min(s,o.length-1)].id)},[]),gt=(0,_.useCallback)(()=>{let e=z.current.pop();if(!e)return;let t={...c_(e),fresh:!1};n(e=>[...e,t]),i(t.id),r_(t)===`files`&&ut(t.id,i_(t))},[ut]),_t=(0,_.useCallback)((e,t=!1)=>{t?pt(e):dt(a_(H.current),e??$g(`home`))},[dt,pt]),vt=(0,_.useCallback)(e=>{let{tabs:t,activeId:n}=H.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let a=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;i(r[a].id)},[]),yt=(0,_.useCallback)(()=>{let{tabs:e,activeId:t}=H.current,r=e.find(e=>e.id===t);if(!r||r_(r)!==`files`)return;let i=r.splitWith?e.find(e=>e.id===r.splitWith):void 0;if(i){n(e=>e.filter(e=>e.id!==i.id)),ot(t,()=>({splitWith:void 0})),me(`primary`);return}let a=i_(r),o={...c_(a),hidden:!0};n(e=>[...e,o]),ot(t,()=>({splitWith:o.id})),ut(o.id,a),me(`primary`)},[ut,ot]),bt=(0,_.useCallback)(e=>{le(e),ua(`yafm.preview.width`,e)},[]),xt=Re?pe===`secondary`?fe??ue:ue??fe:ue,St=(0,_.useRef)(null),Ct=e=>{e.preventDefault();let t=St.current?.getBoundingClientRect();if(!t)return;let n=oe?ce:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);o(n),ua(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},wt=(e,t,n)=>{t&&L({x:e.clientX,y:e.clientY,directory:t,refresh:n})},Tt=async e=>{let t=I;L(null),t&&(e?await Zr(t.directory):await Xr(t.directory)).ok&&t.refresh()},Et=I?[{label:e(`New folder`),icon:(0,K.jsx)(xo,{size:14}),shortcut:gi(A.newFolder),onSelect:()=>void Tt(!1)},{label:e(`New file`),icon:(0,K.jsx)(So,{size:14}),onSelect:()=>void Tt(!0)}]:[],Dt=(0,_.useCallback)(()=>{let{tabs:e}=H.current,t=e.find(e=>e.id===a_(H.current));t&&t.index>0&&ft(t.id,t.history[t.index-1],t.index-1)},[ft]),Ot=(0,_.useCallback)(()=>{let{tabs:e}=H.current,t=e.find(e=>e.id===a_(H.current));t&&t.index<t.history.length-1&&ft(t.id,t.history[t.index+1],t.index+1)},[ft]),kt=(0,_.useCallback)(()=>{let{tabs:e}=H.current,t=e.find(e=>e.id===a_(H.current));t&&r_(t)===`files`&&t.listing?.parent&&_t(t.listing.parent)},[_t]),At=(0,_.useRef)(null),U=(0,_.useCallback)(()=>{for(let e of H.current.tabs)e.listing&&ut(e.id,e.listing.path,!0)},[ut]),jt=(0,_.useCallback)(e=>{e.length!==0&&(be(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),Ne())},[Ne]),Mt=(0,_.useCallback)(async e=>{let t=await Kr(e);t.length!==0&&jt(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[jt]),Nt=(0,_.useCallback)(e=>{let t=new Set(e);be(e=>e.filter(e=>!t.has(e.path)))},[]),Pt=(0,_.useCallback)(()=>be([]),[]),Ft=(0,_.useRef)(-1),It=(0,_.useCallback)(e=>{Se(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),we(e.move),e.entries.length>0&&Ne()},[Ne]),Lt=(0,_.useCallback)(async()=>{if(G.available)try{let e=await Wr();Ft.current=e.sequence,It(e)}catch{}},[It]),Rt=(0,_.useCallback)(async e=>{e.length!==0&&await Hr(e,!1)&&await Lt()},[Lt]),zt=(0,_.useRef)(ye);zt.current=ye,(0,_.useEffect)(()=>(hd(e=>new Promise(t=>Oe({initial:e??``,resolve:t}))),gd(e=>new Promise(t=>Ae({extensions:e??[],resolve:t}))),()=>{hd(null),gd(null)}),[]),(0,_.useEffect)(()=>{let e=e=>{ol(e.dataTransfer)&&Ne()},t=e=>{ol(e.dataTransfer)&&Ne()};return window.addEventListener(`dragstart`,e),window.addEventListener(`dragenter`,t),()=>{window.removeEventListener(`dragstart`,e),window.removeEventListener(`dragenter`,t)}},[Ne]),(0,_.useEffect)(()=>{let e=()=>Me(e=>o_(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Bt=(0,_.useCallback)(async()=>{let e=zt.current;if(e.length>0){let t=await Kr(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));be(e=>e.filter(e=>n.has(e.path)))}await Lt()},[Lt]),Vt=(0,_.useCallback)(e=>{let t=o_(e);Me(t),fa(`yafm.tray.position`,t)},[]),Ht=(0,_.useCallback)(()=>{Te?Ee(!1):Ne()},[Ne,Te]),Ut=(0,_.useCallback)(async(t,n,r)=>{let i=await Gr(t,n,r);i.ok?(r&&Nt(t),ae(e=>e+1),U(),Lt()):window.alert(i.error??e(`The files could not be transferred.`))},[U,Lt,Nt]);(0,_.useEffect)(()=>{if(G.available)return li().then(e=>{ve.current=e,ge(e)},()=>void 0),G.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>e.kind===`delete`&&!ve.current.some(t=>t.id===e.id));ve.current=n,ge(n),r&&R(!0)})},[]);let Wt=(0,_.useCallback)(()=>{ui().then(()=>li().then(e=>{ve.current=e,ge(e)},()=>void 0))},[]);(0,_.useEffect)(()=>{if(!G.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await Wr();if(!e||t.sequence===Ft.current)return;Ft.current=t.sequence,It(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[It]);let Gt=(0,_.useCallback)(async e=>{let t=e?await ri():await ii();t.ok?(ae(e=>e+1),U()):t.error&&!t.error.startsWith(`Nothing to`)&&window.alert(t.error)},[U]),Kt=(0,_.useRef)(We);(0,_.useEffect)(()=>{Kt.current!==We&&(Kt.current=We,U())},[We,U]);let qt=(0,_.useCallback)((e,t)=>{let{tabs:n}=H.current,r=n.find(t=>t.id===e);if(!r||r_(r)!==`files`)return;let i=i_(r),a=rt.current?.defaultView??rr,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||nr.iconSize,gridSize:r.view?.gridSize||a.gridSize||nr.gridSize,sort:r.view?.sort??nr.sort,sortDescending:r.view?.sortDescending??nr.sortDescending,...t};ot(e,()=>({view:o})),At.current!==null&&window.clearTimeout(At.current),At.current=window.setTimeout(()=>{At.current=null,cr(i,o)},250)},[ot]),Jt=(0,_.useCallback)(e=>{qt(a_(H.current),e)},[qt]),Yt=(0,_.useCallback)(e=>{let t=rt.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??rr,columns:e}};te(n),Ar(n)},[]),Xt=(0,_.useCallback)(e=>{let t=rt.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??rr,showImages:e}};te(n),Ar(n)},[]),Zt=(0,_.useCallback)(e=>{let t=rt.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??rr,imageStripHeight:e}};te(n),Ar(n)},[]),Qt=(0,_.useCallback)((e,t,n,r)=>{let i=H.current.tabs.find(t=>t.id===e);if(!i||r_(i)!==`files`||!i.listing)return;let a=i_(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));ot(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),lr(a,t,n,r)},[ot]),$t=(0,_.useCallback)((e,t)=>{let n=H.current.tabs.find(t=>t.id===e);if(!n)return;let r=s_(n,rt.current?.defaultView??rr);qt(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[qt]),en=(0,_.useCallback)((e,t)=>{n(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),tn=(0,_.useCallback)(()=>{dr().then(c,()=>c([]))},[]),nn=(0,_.useCallback)(e=>{let t=(e.openTabs??[]).map(t_).filter(e=>e!==null);if(t.length===0)return!1;let r=t.map(e=>({...c_(e),fresh:!1})),a=Math.min(Math.max(e.activeTab??0,0),r.length-1);n(r),i(r[a].id);for(let e of r)r_(e)===`files`&&ut(e.id,i_(e),!0);return!0},[ut]),rn=(0,_.useCallback)(e=>{let t=at.current;if(at.current=[],t.length===0)return;let{tabs:n}=H.current;if(!e&&n.length===1&&n[0].fresh){dt(n[0].id,t[0]);for(let e of t.slice(1))pt(e)}else for(let e of t)pt(e)},[pt,dt]),an=(0,_.useCallback)(()=>{kr().then(e=>{te(e),ee(e.recentLimit);let t={...di,...e.shortcuts};j(t),pi(t.openInNewTab),re(e=>e+1),it.current||(it.current=!0,rn(e.restoreTabs&&nn(e)))},()=>{ee(10),it.current=!0,rn(!1)})},[rn,nn]),on=(0,_.useCallback)(()=>{xr().then(E,()=>E([]))},[]),sn=(0,_.useCallback)(()=>{fr().then(u,()=>u([]))},[]),cn=t.filter(e=>!e.hidden),ln=cn.map(n_),un=ln.join(`
`),dn=Math.max(cn.findIndex(e=>e.id===r),0);(0,_.useEffect)(()=>{if(!O?.restoreTabs)return;let e=setTimeout(()=>void jr(ln,dn),700);return()=>clearTimeout(e)},[un,dn,O?.restoreTabs]),(0,_.useEffect)(()=>{let{tabs:e,activeId:t}=H.current,n=e.find(e=>e.id===t);n&&r_(n)===`files`&&ut(n.id,void 0,!0),tn(),an(),sn(),Pr().then(f,()=>f(null))},[ut,tn,an,sn]),(0,_.useEffect)(()=>{if(Fr().then(m,()=>m(null)),G.available)return G.on(e=>{let t=e;t.type===`app.update`&&t.data&&m(t.data)})},[]),(0,_.useEffect)(()=>{let e=setInterval(sn,3e4);return()=>clearInterval(e)},[sn]),(0,_.useEffect)(()=>{B===`home`&&(on(),sn())},[B,Pe.id,on,sn]),(0,_.useEffect)(()=>{if(!G.available)return;let e=G.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=H.current,i=t.data.startup===!0;i&&!it.current?at.current.push(n):i&&r.length===1&&r[0].fresh?dt(r[0].id,n):e_(n)?dt(a_(H.current),n):pt(n)});return G.send({type:`app.ready`}),e},[dt,pt]),(0,_.useEffect)(()=>{if(G.available)return G.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:r,sizes:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},n})})},[]),(0,_.useEffect)(()=>{if(G.available)return G.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:r,counts:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},n})})},[]),(0,_.useEffect)(()=>{let e=e=>{if(vi(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),Dt();return}if(e.key===`BrowserForward`){e.preventDefault(),Ot();return}if(e.key===`Escape`&&y.open){e.preventDefault(),$e();return}let t=hi(e);if(t===A.closeTab)e.preventDefault(),ht(a_(H.current));else if(t===A.newTab)e.preventDefault(),pt();else if(t===A.reopenTab)e.preventDefault(),gt();else if(t===A.goBack)e.preventDefault(),Dt();else if(t===A.goForward)e.preventDefault(),Ot();else if(t===A.goUp)e.preventDefault(),kt();else if(t===A.find)e.preventDefault(),et();else if(t===A.location)e.preventDefault(),ie(e=>e+1);else if(t===A.home){e.preventDefault();let t=s.find(e=>e.kind===`home`)?.path;t&&_t(t)}else t===A.iconsView?(e.preventDefault(),B===`files`&&Jt({mode:`grid`})):t===A.detailsView?(e.preventDefault(),B===`files`&&Jt({mode:`list`})):t===A.nextTab?(e.preventDefault(),vt(1)):t===A.previousTab?(e.preventDefault(),vt(-1)):t===A.hidden||t===`alt+.`?(e.preventDefault(),Dr().then(()=>{ae(e=>e+1),U()})):t===A.undo?(e.preventDefault(),Gt(!0)):t===A.redo?(e.preventDefault(),Gt(!1)):t===A.splitView?(e.preventDefault(),yt()):B!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),tt(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[A,B,y.open,ht,gt,pt,Dt,Ot,kt,et,$e,tt,Jt,vt,_t,s,U,Gt,yt]),(0,_.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),Dt()):e.button===4&&(e.preventDefault(),Ot())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[Dt,Ot]),(0,_.useEffect)(()=>{G.available&&B===`files`&&G.send({type:`fs.watch`,payload:{paths:[Fe]}})},[B,Fe]),(0,_.useEffect)(()=>{if(G.available)return G.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let{tabs:n,activeId:r}=H.current,i=n.find(e=>e.id===r);i&&r_(i)===`files`&&u_(i_(i),t.data.path)&&or(t.data.path,!1,We).then(e=>{let t=H.current.tabs.find(e=>e.id===i.id);t&&r_(t)===`files`&&!t.loading&&u_(i_(t),e.path)&&ot(i.id,()=>({listing:e}))},()=>void 0)})},[We,ot]);let fn=Pe.index>0,pn=Pe.index<Pe.history.length-1,mn=(e,t)=>{let n=s_(e,He);return(0,K.jsx)(Fl,{confirmDelete:O?.confirmDelete??!1,previewVideoAudio:O?.previewVideoAudio??!1,previewVideoAutoplay:O?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?de:F,onActivate:()=>me(t?`primary`:`secondary`),enableShortcuts:!Re||(t?pe===`primary`:pe===`secondary`),error:e.error,find:e.id===Ve.id?{...y,currentPath:Qe<0?null:Ze[Qe]}:void 0,imageStripHeight:Je,listing:e.listing,loading:e.loading,onImageStripHeight:Zt,onOpen:(t,n)=>{n?pt(t):ut(e.id,t)},onOpenFile:e=>void ar(e),onRefresh:()=>{e.listing&&ut(e.id,e.listing.path,!0)},onSetTags:(t,n,r)=>Qt(e.id,t,n,r),onSort:t=>$t(e.id,t),onPaste:Bt,onClipboardChanged:()=>void Lt(),onTransfer:Ut,onAddToTray:e=>void Mt(e),openOnSingleClick:O?.openOnSingleClick??!1,refreshToken:P,shortcuts:A,showCheckboxes:O?.showCheckboxes??!0,showImages:qe,view:n})},hn=y.open&&(0,K.jsx)(yd,{current:Qe,focusToken:C,matchCase:y.matchCase,mode:y.mode,onClose:$e,onMatchCase:()=>b(e=>({...e,matchCase:!e.matchCase})),onMode:()=>b(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>nt(1),onPrevious:()=>nt(-1),onQuery:e=>b(t=>({...t,query:e})),onRegex:()=>b(e=>({...e,regex:!e.regex})),query:y.query,regex:y.regex,total:Ze.length}),gn=(0,K.jsxs)(v_,{children:[(0,K.jsx)(y_,{"data-shortcut":gi(A.goBack),disabled:!fn,onClick:Dt,title:e(`Back`),type:`button`,children:(0,K.jsx)(Oo,{})}),(0,K.jsx)(y_,{"data-shortcut":gi(A.goForward),disabled:!pn,onClick:Ot,title:e(`Forward`),type:`button`,children:(0,K.jsx)(ko,{})}),(0,K.jsx)(y_,{"data-shortcut":gi(A.goUp),disabled:B!==`files`||!Le,onClick:()=>Le&&_t(Le),title:e(`Up one level`),type:`button`,children:(0,K.jsx)(To,{})}),(0,K.jsx)(bf,{focusToken:N,icon:Ye,label:B===`files`?void 0:e(Jg[B]),onNavigate:_t,path:B===`files`?Ie:Fe}),B===`files`&&(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(y_,{onClick:e=>wt(e,Ie,()=>void ut(Pe.id,Ie,!0)),title:e(`New folder or file`),type:`button`,children:(0,K.jsx)(Do,{})}),(0,K.jsx)(y_,{"data-shortcut":gi(A.find),onClick:et,title:e(`Search`),type:`button`,children:(0,K.jsx)(wo,{})})]})]});return(0,K.jsx)(aa,{value:Ke,children:(0,K.jsxs)(m_,{$rounded:v,children:[(0,K.jsx)(Cg,{activeId:Pe.id,onClose:ht,onNewTab:()=>pt(),onReorder:en,onSelect:i,onViewChange:Jt,onColumns:Yt,onShowImages:Xt,showImages:qe,tasks:he,onClearTasks:Wt,activityOpen:_e,onActivityOpenChange:R,trayCount:ye.length+xe.length,trayVisible:Te,onToggleTray:Ht,split:Re,canSplit:B===`files`,onToggleSplit:yt,details:oe,canDetails:B===`files`||B===`recycle`,onToggleDetails:()=>se(e=>!e),shortcuts:A,view:Ue,tabs:t.filter(e=>!e.hidden).map(n=>{let r=r_(n),i=i_(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?i_(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?sa(Ke,i):void 0,split:!!a,title:r===`files`?ca(Ke,i,$i(i)||e(`Files`)):e(Jg[r]),partner:a?{title:ca(Ke,o,$i(o)||e(`Files`)),place:sa(Ke,o)}:void 0}})}),(0,K.jsxs)(h_,{children:[(0,K.jsx)(bh,{activeKind:B,currentPath:B===`files`?Fe:``,drives:l,historyVersion:k,onNavigate:e=>_t(e),onOpenView:mt,homePath:s.find(e=>e.kind===`home`)?.path??``,places:s,recent:T,recentLimit:D,version:M}),(0,K.jsxs)(g_,{children:[B!==`files`&&gn,(0,K.jsx)(__,{children:B===`files`?Re&&V?(0,K.jsxs)(x_,{ref:St,children:[(0,K.jsxs)(S_,{style:{flex:a},children:[(0,K.jsxs)(b_,{$active:pe===`primary`,onPointerDown:()=>me(`primary`),children:[(0,K.jsx)(y_,{"data-shortcut":gi(A.goBack),disabled:!fn,onClick:()=>{let e=Pe.index-1;e>=0&&ft(Pe.id,Pe.history[e],e)},title:e(`Back`),type:`button`,children:(0,K.jsx)(Oo,{})}),(0,K.jsx)(y_,{"data-shortcut":gi(A.goForward),disabled:!pn,onClick:()=>{let e=Pe.index+1;e<Pe.history.length&&ft(Pe.id,Pe.history[e],e)},title:e(`Forward`),type:`button`,children:(0,K.jsx)(ko,{})}),(0,K.jsx)(y_,{"data-shortcut":gi(A.goUp),disabled:!Le,onClick:()=>Le&&void ut(Pe.id,Le),title:e(`Up one level`),type:`button`,children:(0,K.jsx)(To,{})}),(0,K.jsx)(bf,{focusToken:pe===`primary`?N:void 0,onNavigate:e=>void ut(Pe.id,e),path:Ie}),(0,K.jsx)(y_,{onClick:e=>wt(e,Ie,()=>void ut(Pe.id,Ie,!0)),title:e(`New folder or file`),type:`button`,children:(0,K.jsx)(Do,{})}),(0,K.jsx)(y_,{"data-shortcut":gi(A.find),onClick:et,title:e(`Search`),type:`button`,children:(0,K.jsx)(wo,{})})]}),mn(Pe,!0),pe===`primary`&&hn]}),(0,K.jsx)(C_,{onDoubleClick:()=>o(.5),onPointerDown:Ct,title:e(`Drag to resize; double-click to reset`)}),(0,K.jsxs)(S_,{style:{flex:1-a},children:[(0,K.jsxs)(b_,{$active:pe===`secondary`,onPointerDown:()=>me(`secondary`),children:[(0,K.jsx)(y_,{"data-shortcut":gi(A.goBack),disabled:V.index<=0,onClick:()=>{let e=V.index-1;e>=0&&ft(V.id,V.history[e],e)},title:e(`Back`),type:`button`,children:(0,K.jsx)(Oo,{})}),(0,K.jsx)(y_,{"data-shortcut":gi(A.goForward),disabled:V.index>=V.history.length-1,onClick:()=>{let e=V.index+1;e<V.history.length&&ft(V.id,V.history[e],e)},title:e(`Forward`),type:`button`,children:(0,K.jsx)(ko,{})}),(0,K.jsx)(y_,{"data-shortcut":gi(A.goUp),disabled:!Be,onClick:()=>{Be&&ut(V.id,Be)},title:e(`Up one level`),type:`button`,children:(0,K.jsx)(To,{})}),(0,K.jsx)(bf,{focusToken:pe===`secondary`?N:void 0,onNavigate:e=>void ut(V.id,e),path:ze}),(0,K.jsx)(y_,{onClick:e=>wt(e,ze,()=>void ut(V.id,ze,!0)),title:e(`New folder or file`),type:`button`,children:(0,K.jsx)(Do,{})}),(0,K.jsx)(y_,{"data-shortcut":gi(A.find),onClick:et,title:e(`Search`),type:`button`,children:(0,K.jsx)(wo,{})})]}),mn(V,!1),pe===`secondary`&&hn]}),oe&&(0,K.jsx)(cc,{info:xt,onWidth:bt,videoAudio:O?.previewVideoAudio??!1,videoAutoplay:O?.previewVideoAutoplay??!1,width:ce})]}):(0,K.jsxs)(T_,{children:[(0,K.jsxs)(E_,{children:[gn,(0,K.jsxs)(w_,{children:[mn(Pe,!0),hn]})]}),oe&&(0,K.jsx)(cc,{info:ue,onWidth:bt,videoAudio:O?.previewVideoAudio??!1,videoAutoplay:O?.previewVideoAutoplay??!1,width:ce})]}):B===`home`?(0,K.jsx)(hf,{drives:l,historyVersion:k,homePath:s.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:sn,onHistoryChanged:()=>ne(e=>e+1),onOpen:_t,onLayoutChanged:an,onPlacesChanged:c,onRecentCleared:on,places:s,recent:T,recentLimit:D,visibilityVersion:P}):B===`settings`?(0,K.jsx)(Hp,{appInfo:d,focusSection:h,onSettingsChanged:an}):B===`gallery`?(0,K.jsx)(lh,{confirmDelete:O?.confirmDelete??!1,openOnSingleClick:O?.openOnSingleClick??!1,shortcuts:A,showCheckboxes:O?.showCheckboxes??!0,view:Ue}):(0,K.jsx)(If,{onOpenLocation:_t,onShowDetails:()=>se(!0),platform:d?.platform,showDetails:oe,videoAudio:O?.previewVideoAudio??!1,videoAutoplay:O?.previewVideoAutoplay??!1})},B),(0,K.jsxs)(A_,{children:[(0,K.jsx)(`span`,{children:B===`files`&&Pe.listing?f_(e,Pe.listing):``}),d?(0,K.jsxs)(D_,{children:[(0,K.jsxs)(`span`,{children:[`v`,d.version,` · `,d.platform]}),p?.available&&(0,K.jsxs)(O_,{onClick:()=>{g(`updates`),mt(`settings`)},title:e(`Version {version} is available.`,{version:p.latest}),type:`button`,children:[(0,K.jsx)(k_,{}),e(`Update available`)]})]}):(0,K.jsx)(`span`,{children:`browser preview`})]})]})]}),(0,K.jsx)(dl,{clipboardItems:xe,clipboardMove:Ce,currentDirectory:B===`files`?Fe:``,items:ye,onAdd:e=>void Mt(e),onClear:Pt,onClose:()=>Ee(!1),onCopyToClipboard:e=>void Rt(e),onPosition:Vt,onRemove:Nt,onTransfer:Ut,position:je,visible:Te}),I&&(0,K.jsx)(zs,{items:Et,onClose:()=>L(null),x:I.x,y:I.y}),De&&(0,K.jsx)(Ju,{initial:De.initial,onCancel:()=>{De.resolve(null),Oe(null)},onSelect:e=>{De.resolve(e),Oe(null)}}),ke&&(0,K.jsx)(Ju,{extensions:ke.extensions,mode:`file`,onCancel:()=>{ke.resolve(null),Ae(null)},onSelect:e=>{ke.resolve(e),Ae(null)}}),(0,K.jsx)(Ug,{}),(0,K.jsx)(tr,{})]})})}var m_=W.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    background: var(--bg-primary);

    /* An undecorated window gets no frame from the compositor, so the corners are drawn here. */
    border-radius: ${({$rounded:e})=>e?`12px`:`0`};
    box-shadow: ${({$rounded:e})=>e?`inset 0 0 0 1px var(--border-color), 0 24px 70px rgba(0, 0, 0, 0.38)`:`none`};
`,h_=W.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
    background:
        radial-gradient(1200px 650px at 12% -10%, rgba(var(--accent-secondary-rgb), 0.12), transparent 60%),
        radial-gradient(900px 520px at 110% 18%, rgba(var(--accent-rgb), 0.09), transparent 55%),
        linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-media) 100%);
`,g_=W.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,__=W.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${Fs}
`,v_=W.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,y_=W.button`
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
`,b_=W.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,x_=W.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,S_=W.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,C_=W.div`
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
`,w_=W.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,T_=W.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,E_=W.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,D_=W.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,O_=W.button`
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
`,k_=W.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,A_=W.footer`
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
`,j_=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,j_);var M_=document.getElementById(`root`);M_&&(0,v.createRoot)(M_).render((0,K.jsx)(_.StrictMode,{children:(0,K.jsx)(Yn,{children:(0,K.jsx)(p_,{})})}));