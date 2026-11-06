var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function O(e,t){return D(e.type,t,e.props)}function k(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ee(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function te(e,t){return typeof e==`object`&&e&&e.key!=null?ee(``+e.key):t.toString(36)}function j(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function M(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,M(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+te(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),M(o,r,i,``,function(e){return e})):o!=null&&(k(o)&&(o=O(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+te(a,u),c+=M(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+te(a,u++),c+=M(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return M(j(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function N(e,t,n){if(e==null)return e;var r=[],i=0;return M(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function P(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var F=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function I(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,F)}catch(e){F(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function ne(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else I(ne.bind(null,e))}var L={map:N,forEach:function(e,t,n){N(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return N(e,function(){t++}),t},toArray:function(e){return N(e,function(e){return e})||[]},only:function(e){if(!k(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=L,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=ne,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=k,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=I,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&A(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&A(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,ee=k.port2;k.port1.onmessage=D,O=function(){ee.postMessage(null)}}else O=function(){_(D,0)};function A(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,A(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function E(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var D=Object.assign,O=Symbol.for(`react.element`),k=Symbol.for(`react.transitional.element`),ee=Symbol.for(`react.portal`),A=Symbol.for(`react.fragment`),te=Symbol.for(`react.strict_mode`),j=Symbol.for(`react.profiler`),M=Symbol.for(`react.consumer`),N=Symbol.for(`react.context`),P=Symbol.for(`react.forward_ref`),F=Symbol.for(`react.suspense`),I=Symbol.for(`react.suspense_list`),ne=Symbol.for(`react.memo`),L=Symbol.for(`react.lazy`),R=Symbol.for(`react.activity`),re=Symbol.for(`react.legacy_hidden`),ie=Symbol.for(`react.memo_cache_sentinel`),z=Symbol.for(`react.view_transition`),ae=Symbol.for(`react.recoverable`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var B=Symbol.for(`react.client.reference`);function ce(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===B?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case A:return`Fragment`;case j:return`Profiler`;case te:return`StrictMode`;case F:return`Suspense`;case I:return`SuspenseList`;case R:return`Activity`;case z:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case ee:return`Portal`;case N:return e.displayName||`Context`;case M:return(e._context.displayName||`Context`)+`.Consumer`;case P:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ne:return t=e.displayName||null,t===null?ce(e.type)||`Memo`:t;case L:t=e._payload,e=e._init;try{return ce(e(t))}catch{}}return null}var le=Array.isArray,V=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function W(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function pe(e,t){de++,ue[de]=e.current,e.current=t}var me=fe(null),he=fe(null),ge=fe(null),_e=fe(null);function ve(e,t){switch(pe(ge,t),pe(he,e),pe(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?fp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=fp(t),e=pp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}W(me),pe(me,e)}function ye(){W(me),W(he),W(ge)}function be(e){var t=e.memoizedState;t!==null&&(lh._currentValue=t.memoizedState,pe(_e,e)),t=me.current;var n=pp(t,e.type);t!==n&&(pe(he,e),pe(me,n))}function xe(e){he.current===e&&(W(me),W(he)),_e.current===e&&(W(_e),lh._currentValue=U)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);case 30:return we(`ViewTransition`);default:return``}}function G(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Oe=Object.prototype.hasOwnProperty,ke=t.unstable_scheduleCallback,Ae=t.unstable_cancelCallback,je=t.unstable_shouldYield,Me=t.unstable_requestPaint,Ne=t.unstable_now,Pe=t.unstable_getCurrentPriorityLevel,Fe=t.unstable_ImmediatePriority,Ie=t.unstable_UserBlockingPriority,Le=t.unstable_NormalPriority,Re=t.unstable_LowPriority,ze=t.unstable_IdlePriority,K=t.log,q=t.unstable_setDisableYieldValue,Be=null,Ve=null;function He(e){if(typeof K==`function`&&q(e),Ve&&typeof Ve.setStrictMode==`function`)try{Ve.setStrictMode(Be,e)}catch{}}var Ue=Math.clz32?Math.clz32:Ke,We=Math.log,Ge=Math.LN2;function Ke(e){return e>>>=0,e===0?32:31-(We(e)/Ge|0)|0}var qe=256,Je=262144,Ye=4194304;function Xe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ze(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Xe(n))):i=Xe(o):i=Xe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Xe(n))):i=Xe(o)):i=Xe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $e(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-Ue(n),i=1<<r;t|=e[r],n&=~i}return t}function et(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var e=Ye;return Ye<<=1,!(Ye&62914560)&&(Ye=4194304),e}function nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function it(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ue(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&at(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function at(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ue(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function st(e,t){var n=t&-t;return n=n&42?1:ct(n),(n&(e.suspendedLanes|t))===0?n:0}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=H.p;return e===0?(e=window.event,e===void 0?32:Th(e.type)):e}function dt(e,t){var n=H.p;try{return H.p=e,t()}finally{H.p=n}}var ft=Math.random().toString(36).slice(2),pt=`__reactFiber$`+ft,mt=`__reactProps$`+ft,ht=`__reactContainer$`+ft,gt=`__reactEvents$`+ft,_t=`__reactListeners$`+ft,vt=`__reactHandles$`+ft,yt=`__reactResources$`+ft,bt=`__reactMarker$`+ft,xt=`__reactLoad$`+ft;function St(e){delete e[pt],delete e[mt],delete e[_t],delete e[vt]}function Ct(e){var t;if(t=e[pt])return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mm(e);e!==null;){if(n=e[pt])return n;e=mm(e)}return t}e=n,n=e.parentNode}return null}function wt(e){if(e=e[pt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Tt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Et(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Dt(e){e[bt]=!0}function Ot(e){e[xt]=void 0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return Oe.call(Ft,e)?!0:Oe.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}var Lt=!1;function Rt(){var e=Lt;return Lt=!1,e}function zt(e,t,n){if(It(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Bt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Vt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Ht(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ut(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Wt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gt(e){if(!e._valueTracker){var t=Ut(e)?`checked`:`value`;e._valueTracker=Wt(e,t,``+e[t])}}function Kt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ut(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var qt=/[\n"\\]/g;function Jt(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Yt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Ht(t)):e.value!==``+Ht(t)&&(e.value=``+Ht(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,Ht(n)):o===`number`&&e.value==t?Zt(e,Ht(e.value)):Zt(e,Ht(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Ht(s):e.removeAttribute(`name`)}function Xt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Gt(e);return}n=n==null?``:``+Ht(n),t=t==null?n:``+Ht(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Gt(e)}function Zt(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $t(e,t,n){t!=null&&(t=``+Ht(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+Ht(n)}function en(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(le(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Ht(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Gt(e)}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function rn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||nn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,Lt=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(rn(e,a,r),Lt=!0)}else for(var o in t)t.hasOwnProperty(o)&&rn(e,o,t[o])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function un(){}var dn=null;function fn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,mn=null;function hn(e){var t=wt(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Jt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[mt]||null;if(!a)throw Error(i(90));Yt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Kt(r)}break a;case`textarea`:$t(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var gn=!1;function _n(e,t,n){if(gn)return e(t,n);gn=!0;try{return e(t)}finally{if(gn=!1,(pn!==null||mn!==null)&&(Rd(),pn&&(t=pn,e=mn,mn=pn=null,hn(t),e)))for(t=0;t<e.length;t++)hn(e[t])}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var yn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,bn=!1;if(yn)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){bn=!0}}),window.addEventListener(`test`,xn,xn),window.removeEventListener(`test`,xn,xn)}catch{bn=!1}var Sn=null,Cn=null,wn=null;function Tn(){if(wn)return wn;var e,t=Cn,n=t.length,r,i=`value`in Sn?Sn.value:Sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return wn=i.slice(e,1<r?1-r:void 0)}function En(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function J(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Dn:J,this.isPropagationStopped=J,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=D({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=D({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(D({},In,{dataTransfer:0})),zn=On(D({},jn,{relatedTarget:0})),Bn=On(D({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Y=On(D({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=On(D({},kn,{data:0})),X={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=On(D({},jn,{key:function(e){if(e.key){var t=X[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=En(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?En(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?En(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=On(D({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=On(D({},kn,{submitter:0})),Yn=On(D({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Xn=On(D({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=On(D({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=On(D({},kn,{newState:0,oldState:0,source:0})),$n=[9,13,27,32],er=yn&&`CompositionEvent`in window,tr=null;yn&&`documentMode`in document&&(tr=document.documentMode);var nr=yn&&`TextEvent`in window&&!tr,rr=yn&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=Tn(),wn=Cn=Sn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){pn?mn?mn.push(r):mn=[r]:pn=r,t=Yf(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){Vf(e,0)}function _r(e){if(Kt(Tt(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(yn){var br;if(yn){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,fn(e)),_n(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Dr(e,t){if(e===`click`)return _r(t)}function Or(e,t){if(e===`input`||e===`change`)return _r(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oe.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pr(e,t){var n=Nr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Nr(n)}}function Fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Mr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mr(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Rr=yn&&`documentMode`in document&&11>=document.documentMode,zr=null,Br=null,Vr=null,Hr=!1;function Ur(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hr||zr==null||zr!==Mr(r)||(r=zr,`selectionStart`in r&&Lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&jr(Vr,r)||(Vr=r,r=Yf(Br,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Gr={animationend:Wr(`Animation`,`AnimationEnd`),animationiteration:Wr(`Animation`,`AnimationIteration`),animationstart:Wr(`Animation`,`AnimationStart`),transitionrun:Wr(`Transition`,`TransitionRun`),transitionstart:Wr(`Transition`,`TransitionStart`),transitioncancel:Wr(`Transition`,`TransitionCancel`),transitionend:Wr(`Transition`,`TransitionEnd`)},Kr={},qr={};yn&&(qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),`TransitionEvent`in window||delete Gr.transitionend.transition);function Jr(e){if(Kr[e])return Kr[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qr)return Kr[e]=t[n];return e}var Yr=Jr(`animationend`),Xr=Jr(`animationiteration`),Zr=Jr(`animationstart`),Qr=Jr(`transitionrun`),$r=Jr(`transitionstart`),ei=Jr(`transitioncancel`),ti=Jr(`transitionend`),ni=new Map,ri=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ri.push(`scrollEnd`);function ii(e,t){ni.set(e,t),jt(t,[e])}var ai=0;function oi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=yd.identifierPrefix;var n=ai++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function si(e){if(e==null||typeof e==`string`)return e;var t=null,n=Dd;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function ci(e,t){return e=si(e),t=si(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var li=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ui=[],di=0,fi=0;function pi(){for(var e=di,t=fi=di=0;t<e;){var n=ui[t];ui[t++]=null;var r=ui[t];ui[t++]=null;var i=ui[t];ui[t++]=null;var a=ui[t];if(ui[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&_i(n,i,a)}}function mi(e,t,n,r){ui[di++]=e,ui[di++]=t,ui[di++]=n,ui[di++]=r,fi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function hi(e,t,n,r){return mi(e,t,n,r),vi(e)}function gi(e,t){return mi(e,null,null,t),vi(e)}function _i(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ue(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function vi(e){if(50<Od)throw Od=0,kd=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var yi={};function bi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(e,t,n,r){return new bi(e,t,n,r)}function Si(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ci(e,t){var n=e.alternate;return n===null?(n=xi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function wi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ti(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Si(r)&&(s=1);else if(typeof r==`string`)s=Ym(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case R:return e=xi(31,n,t,a),e.elementType=R,e.lanes=o,e;case A:return Ei(n.children,a,o,t);case te:s=8,a|=24;break;case j:return e=xi(12,n,t,a|2),e.elementType=j,e.lanes=o,e;case F:return e=xi(13,n,t,a),e.elementType=F,e.lanes=o,e;case I:return e=xi(19,n,t,a),e.elementType=I,e.lanes=o,e;case re:case z:return e=a|32,e=xi(30,n,t,e),e.elementType=z,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case N:s=10;break a;case M:s=9;break a;case P:s=11;break a;case ne:s=14;break a;case L:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=xi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Ei(e,t,n,r){return e=xi(7,e,r,t),e.lanes=n,e}function Di(e,t,n){return e=xi(6,e,null,t),e.lanes=n,e}function Oi(e){var t=xi(18,null,null,0);return t.stateNode=e,t}function ki(e,t,n){return t=xi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ai=new WeakMap;function ji(e,t){if(typeof e==`object`&&e){var n=Ai.get(e);return n===void 0?(t={value:e,source:t,stack:G(t)},Ai.set(e,t),t):n}return{value:e,source:t,stack:G(t)}}var Mi=[],Ni=0,Pi=null,Fi=0,Ii=[],Li=0,Ri=null,zi=1,Bi=``;function Vi(e,t){Mi[Ni++]=Fi,Mi[Ni++]=Pi,Pi=e,Fi=t}function Hi(e,t,n){Ii[Li++]=zi,Ii[Li++]=Bi,Ii[Li++]=Ri,Ri=e;var r=zi;e=Bi;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var a=32-Ue(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,zi=1<<32-Ue(t)+i|n<<i|r,Bi=a+e}else zi=1<<a|n<<i|r,Bi=e}function Ui(e){e.return!==null&&(Vi(e,1),Hi(e,1,0))}function Wi(e){for(;e===Pi;)Pi=Mi[--Ni],Mi[Ni]=null,Fi=Mi[--Ni],Mi[Ni]=null;for(;e===Ri;)Ri=Ii[--Li],Ii[Li]=null,Bi=Ii[--Li],Ii[Li]=null,zi=Ii[--Li],Ii[Li]=null}function Gi(e,t){Ii[Li++]=zi,Ii[Li++]=Bi,Ii[Li++]=Ri,zi=t.id,Bi=t.overflow,Ri=e}var Ki=null,qi=null,Ji=!1,Yi=null,Xi=!1,Zi=Error(i(519));function Qi(e){throw ia(ji(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Zi}function $i(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[mt]=r,n){case`dialog`:Hf(`cancel`,t),Hf(`close`,t);break;case`iframe`:case`object`:case`embed`:Hf(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Hf(zf[n],t);break;case`source`:Hf(`error`,t);break;case`img`:case`image`:case`link`:Hf(`error`,t),Hf(`load`,t);break;case`details`:Hf(`toggle`,t);break;case`input`:Hf(`invalid`,t),Xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Hf(`invalid`,t);break;case`textarea`:Hf(`invalid`,t),en(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||tp(t.textContent,n)?(r.popover!=null&&(Hf(`beforetoggle`,t),Hf(`toggle`,t)),r.onScroll!=null&&Hf(`scroll`,t),r.onScrollEnd!=null&&Hf(`scrollend`,t),r.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||Qi(e,!0)}function ea(e){for(Ki=e.return;Ki;)switch(Ki.tag){case 5:case 31:case 13:Xi=!1;return;case 27:case 3:Xi=!0;return;default:Ki=Ki.return}}function ta(e){if(e!==Ki)return!1;if(!Ji)return ea(e),Ji=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||hp(e.type,e.memoizedProps)),n=!n),n&&qi&&Qi(e),ea(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));qi=pm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));qi=pm(e)}else t===27?(t=qi,wp(e.type)?(e=fm,fm=null,qi=e):qi=t):qi=Ki?dm(e.stateNode.nextSibling):null;return!0}function na(){qi=Ki=null,Ji=!1}function ra(){var e=Yi;return e!==null&&(dd===null?dd=e:dd.push.apply(dd,e),Yi=null),e}function ia(e){Yi===null?Yi=[e]:Yi.push(e)}var aa=fe(null),oa=null,sa=null;function ca(e,t,n){pe(aa,t._currentValue),t._currentValue=n}function la(e){e._currentValue=aa.current,W(aa)}function ua(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function da(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ua(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ua(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ua(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function fa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Ar(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[lh]:e.push(lh))}a=a.return}return e!==null&&da(t,e,n,r),t.flags|=262144,e!==null}function pa(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ma(e){oa=e,sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ha(e){return _a(oa,e)}function ga(e,t){return oa===null&&ma(e),_a(e,t)}function _a(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},sa===null){if(e===null)throw Error(i(308));sa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else sa=sa.next=t;return n}var va=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ya=t.unstable_scheduleCallback,ba=t.unstable_NormalPriority,xa={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sa(){return{controller:new va,data:new Map,refCount:0}}function Ca(e){e.refCount--,e.refCount===0&&ya(ba,function(){e.controller.abort()})}function wa(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Ta=null;function Ea(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Da=null,Oa=0,ka=0,Aa=null;function ja(e,t){if(Da===null){var n=Da=[];Oa=0,ka=Pf(),Aa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Oa++,t.then(Ma,Ma),t}function Ma(){if(--Oa===0&&(Ta=null,Da!==null)){Aa!==null&&(Aa.status=`fulfilled`);var e=Da;Da=null,ka=0,Aa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Na(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Pa=V.S;V.S=function(e,t){if(md=Ne(),typeof t==`object`&&t&&typeof t.then==`function`&&ja(e,t),Ta!==null)for(var n=bf;n!==null;)wa(n,Ta),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)wa(r,n),r=r.next;if(ka!==0){r=Ta,r===null&&(r=Ta=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Pa!==null&&Pa(e,t)};var Fa=fe(null);function Ia(){var e=Fa.current;return e===null?Yu.pooledCache:e}function La(e,t){t===null?pe(Fa,Fa.current):pe(Fa,t.pool)}function Ra(){var e=Ia();return e===null?null:{parent:xa._currentValue,pool:e}}var za=Error(i(460)),Ba=Error(i(474)),Va=Error(i(542)),Ha={then:function(){}};function Ua(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Wa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ja(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(un,un);else{if(e=Yu,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ja(e),e}throw Ka=t,za}}function Ga(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ka=e,za):e}}var Ka=null;function qa(){if(Ka===null)throw Error(i(459));var e=Ka;return Ka=null,e}function Ja(e){if(e===za||e===Va)throw Error(i(483))}var Ya=null,Xa=0;function Za(e){var t=Xa;return Xa+=1,Ya===null&&(Ya=[]),Wa(Ya,e,t)}function Qa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function $a(e,t){throw t.$$typeof===O?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function eo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Ci(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Di(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===A?(e=d(e,t,n.props.children,r,n.key),Qa(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===L&&Ga(i)===t.type)?(t=a(t,n.props),Qa(t,n),t.return=e,t):(t=Ti(n.type,n.key,n.props,null,e.mode,r),Qa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ki(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ei(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Di(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case k:return n=Ti(t.type,t.key,t.props,null,e.mode,n),Qa(n,t),n.return=e,n;case ee:return t=ki(t,e.mode,n),t.return=e,t;case L:return t=Ga(t),f(e,t,n)}if(le(t)||se(t))return t=Ei(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Za(t),n);if(t.$$typeof===N)return f(e,ga(e,t),n);$a(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case k:return n.key===i?l(e,t,n,r):null;case ee:return n.key===i?u(e,t,n,r):null;case L:return n=Ga(n),p(e,t,n,r)}if(le(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Za(n),r);if(n.$$typeof===N)return p(e,t,ga(e,n),r);$a(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case k:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case ee:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case L:return r=Ga(r),m(e,t,n,r,i)}if(le(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Za(r),i);if(r.$$typeof===N)return m(e,t,n,ga(t,r),i);$a(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),Ji&&Vi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return Ji&&Vi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),Ji&&Vi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),Ji&&Vi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return Ji&&Vi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),Ji&&Vi(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===A&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case k:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===A){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),Qa(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===L&&Ga(l)===r.type){n(e,r.sibling),c=a(r,o.props),Qa(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===A?(c=Ei(o.props.children,e.mode,c,o.key),Qa(c,o),c.return=e,e=c):(c=Ti(o.type,o.key,o.props,null,e.mode,c),Qa(c,o),c.return=e,e=c)}return s(e);case ee:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=ki(o,e.mode,c),c.return=e,e=c}return s(e);case L:return o=Ga(o),_(e,r,o,c)}if(le(o))return h(e,r,o,c);if(se(o)){if(l=se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,Za(o),c);if(o.$$typeof===N)return _(e,r,ga(e,o),c);$a(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Di(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Xa=0;var i=_(e,t,n,r);return Ya=null,i}catch(t){if(t===za||t===Va)throw t;var a=xi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var to=eo(!0),no=eo(!1),ro=!1;function io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ao(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function oo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function so(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ju&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=vi(e),_i(e,null,n),t}return mi(e,r,t,n),vi(e)}function co(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}function lo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var uo=!1;function fo(){if(uo){var e=Aa;if(e!==null)throw e}}function po(e,t,n,r){uo=!1;var i=e.updateQueue;ro=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Zu&f)===f:(r&f)===f){f!==0&&f===ka&&(uo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=D({},d,f);break a;case 2:ro=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),ad|=o,e.lanes=o,e.memoizedState=d}}function mo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function ho(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)mo(n[e],t)}var go=fe(null),_o=fe(0);function vo(e,t){e=rd,pe(_o,e),pe(go,t),rd=e|t.baseLanes}function yo(){pe(_o,rd),pe(go,go.current)}function bo(){rd=_o.current,W(go),W(_o)}var xo=fe(null),So=null;function Co(e){var t=e.alternate;pe(Oo,Oo.current&1),pe(xo,e),So===null&&(t===null||go.current!==null||t.memoizedState!==null)&&(So=e)}function wo(e){pe(Oo,Oo.current),pe(xo,e),So===null&&(So=e)}function To(e){e.tag===22?(pe(Oo,Oo.current),pe(xo,e),So===null&&(So=e)):Eo()}function Eo(){pe(Oo,Oo.current),pe(xo,xo.current)}function Do(e){W(xo),So===e&&(So=null),W(Oo)}var Oo=fe(0);function ko(e,t){pe(xo,xo.current),pe(Oo,t)}function Ao(e){W(Oo),W(xo),So===e&&(So=null)}function jo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||cm(n)||lm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mo=0,No=null,Po=null,Fo=null,Io=!1,Lo=!1,Ro=!1,zo=0,Bo=0,Vo=null,Ho=0;function Uo(){throw Error(i(321))}function Wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function Go(e,t,n,r,i,a){return Mo=a,No=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,V.H=e===null||e.memoizedState===null?sc:cc,Ro=!1,a=n(r,i),Ro=!1,Lo&&(a=qo(t,n,r,i)),Ko(e),a}function Ko(e){V.H=oc;var t=Po!==null&&Po.next!==null;if(Mo=0,Fo=Po=No=null,Io=!1,Bo=0,Vo=null,t)throw Error(i(300));e===null||Tc||(e=e.dependencies,e!==null&&pa(e)&&(Tc=!0))}function qo(e,t,n,r){No=e;var a=0;do{if(Lo&&(Vo=null),Bo=0,Lo=!1,25<=a)throw Error(i(301));if(a+=1,Fo=Po=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}V.H=lc,o=t(n,r)}while(Lo);return o}function Jo(){var e=V.H,t=e.useState()[0];return t=typeof t.then==`function`?es(t):t,e=e.useState()[0],(Po===null?null:Po.memoizedState)!==e&&(No.flags|=1024),t}function Yo(){var e=zo!==0;return zo=0,e}function Z(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Xo(e){if(Io){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Io=!1}Mo=0,Fo=Po=No=null,Lo=!1,Bo=zo=0,Vo=null}function Zo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fo===null?No.memoizedState=Fo=e:Fo=Fo.next=e,Fo}function Qo(){if(Po===null){var e=No.alternate;e=e===null?null:e.memoizedState}else e=Po.next;var t=Fo===null?No.memoizedState:Fo.next;if(t!==null)Fo=t,Po=e;else{if(e===null)throw No.alternate===null?Error(i(467)):Error(i(310));Po=e,e={memoizedState:Po.memoizedState,baseState:Po.baseState,baseQueue:Po.baseQueue,queue:Po.queue,next:null},Fo===null?No.memoizedState=Fo=e:Fo=Fo.next=e}return Fo}function $o(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function es(e){var t=Bo;return Bo+=1,Vo===null&&(Vo=[]),e=Wa(Vo,e,t),t=No,(Fo===null?t.memoizedState:Fo.next)===null&&(t=t.alternate,V.H=t===null||t.memoizedState===null?sc:cc),e}function ts(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return es(e);if(e.$$typeof===ae)return;if(e.$$typeof===N)return ha(e)}throw Error(i(438,String(e)))}function ns(e){var t=null,n=No.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=No.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=$o(),No.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function rs(e,t){return typeof t==`function`?t(e):t}function is(e){return as(Qo(),Po,e)}function as(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Mo&f)===f:(Zu&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ka&&(d=!0);else if((Mo&p)===p){u=u.next,p===ka&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,No.lanes|=p,ad|=p;f=u.action,Ro&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,No.lanes|=f,ad|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Ar(o,e.memoizedState)&&(Tc=!0,d&&(n=Aa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function os(e){var t=Qo(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ar(o,t.memoizedState)||(Tc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ss(e,t,n){var r=No,a=Qo(),o=Ji;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ar((Po||a).memoizedState,n);if(s&&(a.memoizedState=n,Tc=!0),a=a.queue,Ms(us.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Fo!==null&&!!(Fo.memoizedState.tag&1),Ds(e?9:8,{destroy:void 0},ls.bind(null,r,a,n,t),null),e){if(r.flags|=2048,Yu===null)throw Error(i(349));o||Mo&127||cs(r,t,n)}return n}function cs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=No.updateQueue,t===null?(t=$o(),No.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ls(e,t,n,r){t.value=n,t.getSnapshot=r,ds(t)&&fs(e)}function us(e,t,n){return n(function(){ds(t)&&fs(e)})}function ds(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function fs(e){var t=gi(e,2);t!==null&&Nd(t,e,2)}function ps(e){var t=Zo();if(typeof e==`function`){var n=e;if(e=n(),Ro){He(!0);try{n()}finally{He(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:e},t}function ms(e,t,n,r){return e.baseState=n,as(e,Po,typeof r==`function`?r:rs)}function hs(e,t,n,r,a){if(rc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};V.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,gs(t,o)):(o.next=n.next,t.pending=n.next=o)}}function gs(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=V.T,o={};o.types=a===null?null:a.types,V.T=o;try{var s=n(i,r),c=V.S;c!==null&&c(o,s),_s(e,t,s)}catch(n){ys(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),V.T=a}}else try{a=n(i,r),_s(e,t,a)}catch(n){ys(e,t,n)}}function _s(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){vs(e,t,n)},function(n){return ys(e,t,n)}):vs(e,t,n)}function vs(e,t,n){t.status=`fulfilled`,t.value=n,bs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,gs(e,n)))}function ys(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,bs(t),t=t.next;while(t!==r)}e.action=null}function bs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function xs(e,t){return t}function Ss(e,t){if(Ji){var n=Yu.formState;if(n!==null){a:{var r=No;if(Ji){if(qi){b:{for(var i=qi,a=Xi;i.nodeType!==8;)if(!a||(i=dm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){qi=dm(i.nextSibling),r=i.data===`F!`;break a}}Qi(r)}r=!1}r&&(t=n[0])}}return n=Zo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xs,lastRenderedState:t},n.queue=r,n=ec.bind(null,No,r),r.dispatch=n,r=ps(!1),a=nc.bind(null,No,!1,r.queue),r=Zo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=hs.bind(null,No,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Cs(e){return ws(Qo(),Po,e)}function ws(e,t,n){if(t=as(e,t,xs)[0],e=is(rs)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=es(t)}catch(e){throw e===za?Va:e}else r=t;t=Qo();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(No.flags|=2048,Ds(9,{destroy:void 0},Ts.bind(null,i,n),null)),[r,a,e]}function Ts(e,t){e.action=t}function Es(e){var t=Qo(),n=Po;if(n!==null)return ws(t,n,e);Qo(),t=t.memoizedState,n=Qo();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Ds(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=No.updateQueue,t===null&&(t=$o(),No.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Os(){return Qo().memoizedState}function ks(e,t,n,r){var i=Zo();No.flags|=e,i.memoizedState=Ds(1|t,{destroy:void 0},n,r===void 0?null:r)}function As(e,t,n,r){var i=Qo();r=r===void 0?null:r;var a=i.memoizedState.inst;Po!==null&&r!==null&&Wo(r,Po.memoizedState.deps)?i.memoizedState=Ds(t,a,n,r):(No.flags|=e,i.memoizedState=Ds(1|t,a,n,r))}function js(e,t){ks(8390656,8,e,t)}function Ms(e,t){As(2048,8,e,t)}function Ns(e){No.flags|=4;var t=No.updateQueue;if(t===null)t=$o(),No.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ps(e){var t=Qo().memoizedState;return Ns({ref:t,nextImpl:e}),function(){if(Ju&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Fs(e,t){return As(4,2,e,t)}function Is(e,t){return As(4,4,e,t)}function Ls(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rs(e,t,n){n=n==null?null:n.concat([e]),As(4,4,Ls.bind(null,t,e),n)}function zs(){}function Bs(e,t){var n=Qo();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vs(e,t){var n=Qo();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Wo(t,r[1]))return r[0];if(r=e(),Ro){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r}function Hs(e,t,n){return n===void 0||Mo&1073741824&&!(Zu&261930)?e.memoizedState=t:(e.memoizedState=n,e=jd(),No.lanes|=e,ad|=e,n)}function Us(e,t,n,r){return Ar(n,t)?n:go.current===null?!(Mo&106)||Mo&1073741824&&!(Zu&261930)?(Tc=!0,e.memoizedState=n):(e=jd(),No.lanes|=e,ad|=e,t):(e=Hs(e,n,r),Ar(e,t)||(Tc=!0),e)}function Ws(e,t,n,r,i){var a=H.p;H.p=a!==0&&8>a?a:8;var o=V.T,s={};s.types=o===null?null:o.types,V.T=s,nc(e,!1,t,n);try{var c=i(),l=V.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?tc(e,t,Na(c,r),Ad(e)):tc(e,t,r,Ad(e))}catch(n){tc(e,t,{then:function(){},status:`rejected`,reason:n},Ad())}finally{H.p=a,o!==null&&s.types!==null&&(o.types=s.types),V.T=o}}function Gs(){}function Ks(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=qs(e).queue;Ws(e,a,t,U,n===null?Gs:function(){return Js(e),n(r)})}function qs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:U},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Js(e){var t=qs(e);t.next===null&&(t=e.alternate.memoizedState),tc(e,t.next.queue,{},Ad())}function Ys(){return ha(lh)}function Xs(){return Qo().memoizedState}function Zs(){return Qo().memoizedState}function Qs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ad();e=oo(n);var r=so(t,e,n);r!==null&&(Nd(r,t,n),co(r,t,n)),t={cache:Sa()},e.payload=t;return}t=t.return}}function $s(e,t,n){var r=Ad();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},rc(e)?ic(t,n):(n=hi(e,t,n,r),n!==null&&(Nd(n,e,r),ac(n,t,r)))}function ec(e,t,n){tc(e,t,n,Ad())}function tc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(rc(e))ic(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return mi(e,t,i,0),Yu===null&&pi(),!1}catch{}if(n=hi(e,t,i,r),n!==null)return Nd(n,e,r),ac(n,t,r),!0}return!1}function nc(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},rc(e)){if(t)throw Error(i(479))}else t=hi(e,n,r,2),t!==null&&Nd(t,e,2)}function rc(e){var t=e.alternate;return e===No||t!==null&&t===No}function ic(e,t){Lo=Io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ac(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}var oc={readContext:ha,use:ts,useCallback:Uo,useContext:Uo,useEffect:Uo,useImperativeHandle:Uo,useLayoutEffect:Uo,useInsertionEffect:Uo,useMemo:Uo,useReducer:Uo,useRef:Uo,useState:Uo,useDebugValue:Uo,useDeferredValue:Uo,useTransition:Uo,useSyncExternalStore:Uo,useId:Uo,useHostTransitionStatus:Uo,useFormState:Uo,useActionState:Uo,useOptimistic:Uo,useMemoCache:Uo,useCacheRefresh:Uo,useEffectEvent:Uo},sc={readContext:ha,use:ts,useCallback:function(e,t){return Zo().memoizedState=[e,t===void 0?null:t],e},useContext:ha,useEffect:js,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ks(4194308,4,Ls.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ks(4194308,4,e,t)},useInsertionEffect:function(e,t){ks(4,2,e,t)},useMemo:function(e,t){var n=Zo();t=t===void 0?null:t;var r=e();if(Ro){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Zo();if(n!==void 0){var i=n(t);if(Ro){He(!0);try{n(t)}finally{He(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=$s.bind(null,No,e),[r.memoizedState,e]},useRef:function(e){var t=Zo();return e={current:e},t.memoizedState=e},useState:function(e){e=ps(e);var t=e.queue,n=ec.bind(null,No,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:zs,useDeferredValue:function(e,t){return Hs(Zo(),e,t)},useTransition:function(){var e=ps(!1);return e=Ws.bind(null,No,e.queue,!0,!1),Zo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=No,a=Zo();if(Ji){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Yu===null)throw Error(i(349));Zu&127||cs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,js(us.bind(null,r,o,e),[e]),r.flags|=2048,Ds(9,{destroy:void 0},ls.bind(null,r,o,n,t),null),n},useId:function(){var e=Zo(),t=Yu.identifierPrefix;if(Ji){var n=Bi,r=zi;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=zo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Ho++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ys,useFormState:Ss,useActionState:Ss,useOptimistic:function(e){var t=Zo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=nc.bind(null,No,!0,n),n.dispatch=t,[e,t]},useMemoCache:ns,useCacheRefresh:function(){return Zo().memoizedState=Qs.bind(null,No)},useEffectEvent:function(e){var t=Zo(),n={impl:e};return t.memoizedState=n,function(){if(Ju&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},cc={readContext:ha,use:ts,useCallback:Bs,useContext:ha,useEffect:Ms,useImperativeHandle:Rs,useInsertionEffect:Fs,useLayoutEffect:Is,useMemo:Vs,useReducer:is,useRef:Os,useState:function(){return is(rs)},useDebugValue:zs,useDeferredValue:function(e,t){return Us(Qo(),Po.memoizedState,e,t)},useTransition:function(){var e=is(rs)[0],t=Qo().memoizedState;return[typeof e==`boolean`?e:es(e),t]},useSyncExternalStore:ss,useId:Xs,useHostTransitionStatus:Ys,useFormState:Cs,useActionState:Cs,useOptimistic:function(e,t){return ms(Qo(),Po,e,t)},useMemoCache:ns,useCacheRefresh:Zs,useEffectEvent:Ps},lc={readContext:ha,use:ts,useCallback:Bs,useContext:ha,useEffect:Ms,useImperativeHandle:Rs,useInsertionEffect:Fs,useLayoutEffect:Is,useMemo:Vs,useReducer:os,useRef:Os,useState:function(){return os(rs)},useDebugValue:zs,useDeferredValue:function(e,t){var n=Qo();return Po===null?Hs(n,e,t):Us(n,Po.memoizedState,e,t)},useTransition:function(){var e=os(rs)[0],t=Qo().memoizedState;return[typeof e==`boolean`?e:es(e),t]},useSyncExternalStore:ss,useId:Xs,useHostTransitionStatus:Ys,useFormState:Es,useActionState:Es,useOptimistic:function(e,t){var n=Qo();return Po===null?(n.baseState=e,[e,n.queue.dispatch]):ms(n,Po,e,t)},useMemoCache:ns,useCacheRefresh:Zs,useEffectEvent:Ps};function uc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ad(),i=oo(r);i.payload=t,n!=null&&(i.callback=n),t=so(e,i,r),t!==null&&(Nd(t,e,r),co(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ad(),i=oo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=so(e,i,r),t!==null&&(Nd(t,e,r),co(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ad(),r=oo(n);r.tag=2,t!=null&&(r.callback=t),t=so(e,r,n),t!==null&&(Nd(t,e,n),co(t,e,n))}};function fc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function pc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dc.enqueueReplaceState(t,t.state,null)}function mc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=D({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function hc(e){li(e)}function gc(e){console.error(e)}function _c(e){li(e)}function vc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function yc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function bc(e,t,n){return n=oo(n),n.tag=3,n.payload={element:null},n.callback=function(){vc(e,t)},n}function xc(e){return e=oo(e),e.tag=3,e}function Sc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){yc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){yc(t,n,r),typeof i!=`function`&&(_d===null?_d=new Set([this]):_d.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Cc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&fa(t,n,a,!0),n=xo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return So===null?Gd():n.alternate===null&&id===0&&(id=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ha?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,a)),!1;case 22:return n.flags|=65536,r===Ha?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,a)),!1}throw Error(i(435,n.tag))}return mf(e,r,a),Gd(),!1}if(Ji)return t=xo.current,t===null?(r!==Zi&&(t=Error(i(423),{cause:r}),ia(ji(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=ji(r,n),a=bc(e.stateNode,r,a),lo(e,a),id!==4&&(id=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Zi&&(e=Error(i(422),{cause:r}),ia(ji(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=ji(o,n),ud===null?ud=[o]:ud.push(o),id!==4&&(id=2),t===null)return!0;r=ji(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=bc(n.stateNode,r,e),lo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(_d===null||!_d.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=xc(a),Sc(a,e,n,r),lo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var wc=Error(i(461)),Tc=!1;function Ec(e,t,n,r){t.child=e===null?no(t,null,n,r):to(t,e.child,n,r)}function Dc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ma(t),r=Go(e,t,n,o,a,i),s=Yo(),e!==null&&!Tc?(Z(e,t,i),tl(e,t,i)):(Ji&&s&&Ui(t),t.flags|=1,Ec(e,t,r,i),t.child)}function Oc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Si(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,kc(e,t,a,r,i)):(e=Ti(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!nl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return tl(e,t,i)}return t.flags|=1,e=Ci(a,r),e.ref=t.ref,e.return=t,t.child=e}function kc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref){if(Tc=!1,t.pendingProps=r=a,nl(e,i))e.flags&131072&&(Tc=!0);else return t.lanes=e.lanes,tl(e,t,i)}}return Lc(e,t,n,r,i)}function Ac(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&La(t,a===null?null:a.cachePool),a===null?yo():vo(t,a),To(t);else return r=t.lanes=536870912,Mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&La(t,null),yo(),Eo()):(La(t,a.cachePool),vo(t,a),Eo(),t.memoizedState=null);return Ec(e,t,i,n),t.child}function jc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Mc(e,t,n,r,i){var a=Ia();return a=a===null?null:{parent:xa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&La(t,null),yo(),To(t),e!==null&&fa(e,t,r,!0),t.childLanes=i,null}function Nc(e,t){return t=Kc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Pc(e,t,n){return to(t,e.child,null,n),e=Nc(t,t.pendingProps),e.flags|=2,Do(t),t.memoizedState=null,e}function Fc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(Ji){if(r.mode===`hidden`)return e=Nc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},jc(null,e);if(wo(t),(e=qi)?(e=sm(e,Xi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ri===null?null:{id:zi,overflow:Bi},retryLane:536870912,hydrationErrors:null},n=Oi(e),n.return=t,t.child=n,Ki=t,qi=null)):e=null,e===null)throw Qi(t);return t.lanes=536870912,null}return Nc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(wo(t),a){if(t.flags&256)t.flags&=-257,t=Pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Tc||fa(e,t,n,!1),a=(n&e.childLanes)!==0,Tc||a){if(go.current===null){if(r=Yu,r!==null&&(s=st(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,gi(e,s),Nd(r,e,s),wc;Gd()}t=Pc(e,t,n)}else e=o.treeContext,qi=dm(s.nextSibling),Ki=t,Ji=!0,Yi=null,Xi=!1,e!==null&&Gi(t,e),t=Nc(t,r),t.flags|=134221824;return t}return e=Ci(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ic(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Lc(e,t,n,r,i){return ma(t),n=Go(e,t,n,r,void 0,i),r=Yo(),e!==null&&!Tc?(Z(e,t,i),tl(e,t,i)):(Ji&&r&&Ui(t),t.flags|=1,Ec(e,t,n,i),t.child)}function Rc(e,t,n,r,i,a){return ma(t),t.updateQueue=null,n=qo(t,r,n,i),Ko(e),r=Yo(),e!==null&&!Tc?(Z(e,t,a),tl(e,t,a)):(Ji&&r&&Ui(t),t.flags|=1,Ec(e,t,n,a),t.child)}function zc(e,t,n,r,i){if(ma(t),t.stateNode===null){var a=yi,o=n.contextType;typeof o==`object`&&o&&(a=ha(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=dc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},io(t),o=n.contextType,a.context=typeof o==`object`&&o?ha(o):yi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(uc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&dc.enqueueReplaceState(a,a.state,null),po(t,r,a,i),fo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=mc(n,s);a.props=c;var l=a.context,u=n.contextType;o=yi,typeof u==`object`&&u&&(o=ha(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&pc(t,a,r,o),ro=!1;var f=t.memoizedState;a.state=f,po(t,r,a,i),fo(),l=t.memoizedState,s||f!==l||ro?(typeof d==`function`&&(uc(t,n,d,r),l=t.memoizedState),(c=ro||fc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ao(e,t),o=t.memoizedProps,u=mc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=yi,typeof l==`object`&&l&&(c=ha(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&pc(t,a,r,c),ro=!1,f=t.memoizedState,a.state=f,po(t,r,a,i),fo();var p=t.memoizedState;o!==d||f!==p||ro||e!==null&&e.dependencies!==null&&pa(e.dependencies)?(typeof s==`function`&&(uc(t,n,s,r),p=t.memoizedState),(u=ro||fc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&pa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Ic(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=to(t,e.child,null,i),t.child=to(t,null,n,i)):Ec(e,t,n,i),t.memoizedState=a.state,e=t.child):e=tl(e,t,i),e}function Bc(e,t,n,r){return na(),t.flags|=256,Ec(e,t,n,r),t.child}var Vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hc(e){return{baseLanes:e,cachePool:Ra()}}function Uc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=cd),e}function Wc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Oo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(Ji){if(i?Co(t):Eo(),(e=qi)?(e=sm(e,Xi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ri===null?null:{id:zi,overflow:Bi},retryLane:536870912,hydrationErrors:null},n=Oi(e),n.return=t,t.child=n,Ki=t,qi=null)):e=null,e===null)throw Qi(t);return t.lanes=lm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Eo(),i=t.mode,a=Kc({mode:`hidden`,children:a},i),r=Ei(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Hc(n),r.childLanes=Uc(e,o,n),t.memoizedState=Vc,jc(null,r)):(Co(t),Gc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return Jc(e,t,a,o,r,c,s,n)}return i?(Eo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Ci(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Ei(i,a,n,null),i.flags|=2):i=Ci(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,jc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Hc(n):(a=i.cachePool,a===null?a=Ra():(s=xa._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Uc(e,o,n),t.memoizedState=Vc,jc(e.child,r)):(Co(t),n=e.child,e=n.sibling,n=Ci(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Gc(e,t){return t=Kc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Kc(e,t){return e=xi(22,e,null,t),e.lanes=0,e}function qc(e,t,n){return to(t,e.child,null,n),e=Gc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jc(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Co(t),t.flags&=-257,qc(e,t,c)):t.memoizedState===null?(Eo(),o=a.fallback,s=t.mode,a=Kc({mode:`visible`,children:a.children},s),o=Ei(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,to(t,e.child,null,c),a=t.child,a.memoizedState=Hc(c),a.childLanes=Uc(e,r,c),t.memoizedState=Vc,jc(null,a)):(Eo(),t.child=e.child,t.flags|=128,null);if(Co(t),lm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,ia({value:a,source:null,stack:null})),qc(e,t,c)}if(Tc||fa(e,t,c,!1),r=(c&e.childLanes)!==0,Tc||r){if(go.current!==null)return qc(e,t,c);if(r=Yu,r!==null&&(a=st(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,gi(e,a),Nd(r,e,a),wc;return cm(o)||Gd(),qc(e,t,c)}return cm(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,qi=dm(o.nextSibling),Ki=t,Ji=!0,Yi=null,Xi=!1,e!==null&&Gi(t,e),t=Gc(t,a.children),t.flags|=134221824,t)}function Yc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ua(e.return,t,n)}function Xc(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&jo(n)===null&&(t=e),e=e.sibling}return t}function Zc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Qc(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function $c(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Oo.current;if(t.flags&128)return ko(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,ko(t,o),i===`backwards`&&e!==null?(Qc(e),Ec(e,t,r,n),Qc(e)):Ec(e,t,r,n),r=Ji?Fi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yc(e,n,t);else if(e.tag===19)Yc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=Xc(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,Qc(t)),Zc(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&jo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Zc(t,!0,n,null,a,r);break;case`together`:Zc(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=Xc(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Zc(t,!1,i,n,a,r)}return t.child}function el(e,t,n){var r=t.pendingProps;return ca(t,t.type,r.value),Ec(e,t,r.children,n),t.child}function tl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ad|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(fa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Ci(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ci(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&pa(e)))}function rl(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),ca(t,xa,e.memoizedState.cache),na();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:ca(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,wo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Co(t),t.flags|=128,null;r=fa(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Wc(e,t,n):(Co(t),e=tl(e,t,n),e===null?null:e.sibling)}Co(t);break;case 19:if(t.flags&128)return $c(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(fa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return $c(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ko(t,Oo.current),r)break;return null;case 22:return t.lanes=0,Ac(e,t,n,t.pendingProps);case 24:ca(t,xa,e.memoizedState.cache)}return tl(e,t,n)}function il(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Tc=!0;else{if(!nl(e,n)&&!(t.flags&128))return Tc=!1,rl(e,t,n);Tc=!!(e.flags&131072)}}else Tc=!1,Ji&&t.flags&1048576&&Hi(t,Fi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ga(t.elementType),t.type=e,typeof e==`function`)Si(e)?(r=mc(e,r),t.tag=1,t=zc(null,t,e,r,n)):(t.tag=0,t=Lc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===P){t.tag=11,t=Dc(null,t,e,r,n);break a}if(a===ne){t.tag=14,t=Oc(null,t,e,r,n);break a}if(a===N){t.tag=10,t.type=e,t=el(null,t,n);break a}}throw t=ce(e)||e,Error(i(306,t,``))}}return t;case 0:return Lc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=mc(r,t.pendingProps),zc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,ao(e,t),po(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ca(t,xa,r),r!==o.cache&&da(t,[xa],n,!0),fo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Bc(e,t,r,n);break a}if(r!==a){a=ji(Error(i(424)),t),ia(a),t=Bc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(qi=dm(e.firstChild),Ki=t,Ji=!0,Yi=null,Xi=!0,n=no(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(na(),r===a){t=tl(e,t,n);break a}Ec(e,t,r,n)}t=t.child}return t;case 26:return Ic(e,t),e===null?(n=Fm(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ji||(t.stateNode=mp(t.type,t.pendingProps,ge.current,t)):t.memoizedState=Fm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&Ji&&(r=t.stateNode=_m(t.type,t.pendingProps,ge.current),Ki=t,Xi=!0,a=qi,wp(t.type)?(fm=a,qi=dm(r.firstChild)):qi=a),Ec(e,t,t.pendingProps.children,n),Ic(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ji&&((a=r=qi)&&(r=am(r,t.type,t.pendingProps,Xi),r===null?a=!1:(t.stateNode=r,Ki=t,qi=dm(r.firstChild),Xi=!1,a=!0)),a||Qi(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,hp(a,o)?r=null:s!==null&&hp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Go(e,t,Jo,null,null,n),lh._currentValue=a),Ic(e,t),Ec(e,t,r,n),t.child;case 6:return e===null&&Ji&&((e=n=qi)&&(n=om(n,t.pendingProps,Xi),n===null?e=!1:(t.stateNode=n,Ki=t,qi=null,e=!0)),e||Qi(t)),null;case 13:return Wc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=to(t,null,r,n):Ec(e,t,r,n),t.child;case 11:return Dc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Ic(e,t),Ec(e,t,r,n),t.child;case 8:return Ec(e,t,t.pendingProps.children,n),t.child;case 12:return Ec(e,t,t.pendingProps.children,n),t.child;case 10:return el(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,ma(t),a=ha(a),r=r(a),t.flags|=1,Ec(e,t,r,n),t.child;case 14:return Oc(e,t,t.type,t.pendingProps,n);case 15:return kc(e,t,t.type,t.pendingProps,n);case 19:return $c(e,t,n);case 31:return Fc(e,t,n);case 22:return Ac(e,t,n,t.pendingProps);case 24:return ma(t),r=ha(xa),e===null?(a=Ia(),a===null&&(a=Yu,o=Sa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},io(t),ca(t,xa,a)):((e.lanes&n)!==0&&(ao(e,t),po(t,null,null,n),fo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ca(t,xa,r),r!==a.cache&&da(t,[xa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ca(t,xa,r))),Ec(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:Ji&&Ui(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Ic(e,t),Ec(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function al(e){e.flags|=4}function ol(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Xm(t,r):Xm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Hd())e.flags|=8192;else throw Ka=Ha,Ba}}else e.flags&=-16777217}function sl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Zm(t)){if(Hd())e.flags|=8192;else throw Ka=Ha,Ba}}function cl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:tt(),e.lanes|=t,ld|=t)}function ll(e,t){if(!Ji)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function ul(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dl(e,t,n){var r=t.pendingProps;switch(Wi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ul(t),null;case 1:return ul(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),la(xa),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ta(t)?al(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ra())),ul(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(al(t),o===null?(ul(t),ol(t,a,null,r,n)):(ul(t),sl(t,o))):o?o===e.memoizedState?(ul(t),t.flags&=-16777217):(al(t),ul(t),sl(t,o)):(e=e.memoizedProps,e!==r&&al(t),ul(t),ol(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&al(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return ul(t),t.subtreeFlags&=-33554433,null}e=me.current,ta(t)?$i(t,e):(e=_m(a,r,n),t.stateNode=e,al(t))}return ul(t),t.subtreeFlags&=-33554433,null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&al(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return ul(t),t.subtreeFlags&=-33554433,null}if(o=me.current,ta(t))$i(t,o);else{var s=dp(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[pt]=t,o[mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(ip(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&al(t)}}return ul(t),t.subtreeFlags&=-33554433,ol(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&al(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,ta(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ki,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||tp(e.nodeValue,n)),e||Qi(t,!0)}else e=dp(e).createTextNode(r),e[pt]=t,t.stateNode=e}return ul(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ta(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[pt]=t}else na(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ul(t),e=!1}else n=ra(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Do(t),t):(Do(t),null);if(t.flags&128)throw Error(i(558))}return ul(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ta(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[pt]=t}else na(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ul(t),a=!1}else a=ra(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Do(t),t):(Do(t),null)}return Do(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),cl(t,t.updateQueue),ul(t),null);case 4:return ye(),e===null&&Gf(t.stateNode.containerInfo),t.flags|=67108864,ul(t),null;case 10:return la(t.type),ul(t),null;case 19:if(Ao(t),r=t.memoizedState,r===null)return ul(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)ll(r,!1);else{if(id!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=jo(e),o!==null){for(t.flags|=128,ll(r,!1),e=o.updateQueue,t.updateQueue=e,cl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)wi(n,e),n=n.sibling;return ko(t,Oo.current&1|2),Ji&&Vi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ne()>hd&&(t.flags|=128,a=!0,ll(r,!1),t.lanes=4194304)}}else{if(!a){if(e=jo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,cl(t,e),ll(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!Ji)return ul(t),null}else 2*Ne()-r.renderingStartTime>hd&&n!==536870912&&(t.flags|=128,a=!0,ll(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ne(),e.sibling=null,o=Oo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||Ji?ko(t,o):(n=o,pe(xo,t),pe(Oo,n),So===null&&(So=t)),Ji&&Vi(t,r.treeForkCount),e}return ul(t),null;case 22:case 23:return Do(t),bo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(ul(t),t.subtreeFlags&6&&(t.flags|=8192)):ul(t),n=t.updateQueue,n!==null&&cl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&W(Fa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),la(xa),ul(t),null;case 25:return null;case 30:return t.flags|=33554432,ul(t),null}throw Error(i(156,t.tag))}function fl(e,t){switch(Wi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return la(xa),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(Do(t),t.alternate===null)throw Error(i(340));na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Do(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ao(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return ye(),null;case 10:return la(t.type),null;case 22:case 23:return Do(t),bo(),e!==null&&W(Fa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return la(xa),null;case 25:return null;default:return null}}function pl(e,t){switch(Wi(t),t.tag){case 3:la(xa),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&Do(t);break;case 13:Do(t);break;case 19:Ao(t);break;case 10:la(t.type);break;case 22:case 23:Do(t),bo(),e!==null&&W(Fa);break;case 24:la(xa)}}function ml(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){pf(t,t.return,e)}}function hl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){pf(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){pf(t,t.return,e)}}function gl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ho(t,n)}catch(t){pf(e,e.return,t)}}}function _l(e,t,n){n.props=mc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){pf(e,t,n)}}function vl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=oi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Ip(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Lp(e);h(e.child,!1,em,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){pf(e,t,n)}}function yl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){pf(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){pf(e,t,n)}else n.current=null}}function bl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)nm(e.stateNode,t[n])}function xl(e){for(var t=e.return;t!==null&&(wl(t)&&nm(e.stateNode,t.stateNode),!Cl(t));)t=t.return}function Sl(e){for(var t=e.return;t!==null&&(wl(t)&&rm(e.stateNode,t.stateNode),!Cl(t));)t=t.return}function Cl(e){return e.tag===5||e.tag===3||e.tag===27}function wl(e){return e&&e.tag===7&&e.stateNode!==null}function Tl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){pf(e,e.return,t)}}function El(e,t,n){try{var r=e.stateNode;op(r,e.type,n,t),r[mt]=t}catch(t){pf(e,e.return,t)}}function Dl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wp(e.type)||e.tag===4}function Ol(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Dl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un)),bl(e,r),Lt=!0;else if(i!==4&&(i===27&&(bl(e,r),r=null,wp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(kl(e,t,n,r),e=e.sibling;e!==null;)kl(e,t,n,r),e=e.sibling}function Al(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),bl(e,r),Lt=!0;else if(i!==4&&(i===27&&(bl(e,r),r=null,wp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Al(e,t,n,r),e=e.sibling;e!==null;)Al(e,t,n,r),e=e.sibling}function jl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ip(t,r,n),t[pt]=e,t[mt]=n}catch(t){pf(e,e.return,t)}}var Ml=!1,Nl=null;function Pl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Ml=!0)}var Fl=null;function Il(){var e=Fl;return Fl=null,e}var Ll=0;function Rl(e,t,n,r,i){return Ll=0,zl(e.child,t,n,r,i)}function zl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Ap(o);r.push(s),s.view&&(a=!0)}else a||Ap(o).view&&(a=!0);Ml=!0,Dp(o,Ll===0?t:t+`_`+Ll,n),Ll++}else e.tag===22&&e.memoizedState!==null||e.tag===30&&i||zl(e.child,t,n,r,i)&&(a=!0);e=e.sibling}return a}function Bl(e,t){for(;e!==null;)e.tag===5?Op(e.stateNode,e.memoizedProps):e.tag===22&&e.memoizedState!==null||e.tag===30&&t||Bl(e.child,t),e=e.sibling}function Vl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Vl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=ci(t.default,t.share),t!==`none`&&(Rl(e,n,t,null,!1)||Bl(e.child,!1))}e=e.sibling}}function Hl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=oi(r,n),a=ci(r.default,n.paired?r.share:r.enter);a===`none`?Vl(e):Rl(e,i,a,null,!1)?(Vl(e),n.paired||t||Md(e,r.onEnter)):Bl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Hl(e,t),e=e.sibling;else Vl(e)}function Ul(e){if(Nl!==null&&Nl.size!==0){var t=Nl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=ci(n.default,n.share);if(a!==`none`&&(Rl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Md(e,n.onShare)):Bl(e.child,!1)),t.delete(r),t.size===0)break}}}Ul(e)}e=e.sibling}}}function Wl(e){if(e.tag===30){var t=e.memoizedProps,n=oi(t,e.stateNode),r=Nl===null?void 0:Nl.get(n),i=ci(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Rl(e,n,i,null,!1)?r===void 0?Md(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Nl.delete(n),Md(e,t.onShare)):Bl(e.child,!1)),Nl!==null&&Ul(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Wl(e),e=e.sibling;else Nl!==null&&Ul(e)}function Gl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=oi(t,e.stateNode);t=ci(t.default,t.update),e.flags&=-5,t!==`none`&&Rl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Gl(e);e=e.sibling}}function Kl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Bl(e.child,!1))}Kl(e)}e=e.sibling}}function ql(e){if(e.tag===30)e.stateNode.paired=null,Bl(e.child,!1),Kl(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)ql(e),e=e.sibling;else Kl(e)}function Jl(e){for(e=e.child;e!==null;)e.tag===30?Bl(e.child,!1):e.subtreeFlags&33554432&&Jl(e),e=e.sibling}function Yl(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Ll<a.length){var l=a[Ll],u=Ap(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Dp(c,Ll===0?n:n+`_`+Ll,i),s&&e.flags&4||(Fl===null&&(Fl=[]),Fl.push(c,Ll===0?r:r+`_`+Ll,t.memoizedProps)),Ll++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:Yl(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function Xl(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=oi(n,r),a=ci(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(jp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Ll=0,i=Yl(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Md(e,n.onUpdate))}else e.subtreeFlags&33554432&&Xl(e,t);e=e.sibling}}var Zl=!1,Ql=!1,$l=!1,eu=!1,tu=typeof WeakSet==`function`?WeakSet:Set,nu=null,ru=!1,iu=!1,au=!1,ou=!1;function su(e,t,n){if(e=e.containerInfo,lp=vh,e=Ir(e),Lr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(up={focusedElem:e,selectionRange:r},vh=!1,n=(n&335544064)===n,nu=t,t=n?9270:1024;nu!==null;){if(e=nu,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Wl(r[a]);if(e.alternate===null&&e.flags&2)n&&Pl(e),cu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Wl(r),cu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Pl(e),cu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,nu=r):(n&&Gl(e),cu(n))}}Nl=null}function cu(e){for(;nu!==null;){var t=nu,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=mc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){pf(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)im(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:im(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=oi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=ci(a.default,a.update),a!==`none`&&Rl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,nu=r;break}nu=t.return}}function lu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:ku(e,n),r&4&&ml(5,n);break;case 1:if(ku(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){pf(n,n.return,e)}else{var i=mc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){pf(n,n.return,e)}}}r&64&&gl(n),r&512&&vl(n,n.return);break;case 3:if(ku(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ho(e,t)}catch(e){pf(n,n.return,e)}}break;case 27:t===null&&r&4&&jl(n);case 26:case 5:ku(e,n),t===null&&r&4&&Tl(n),r&512&&vl(n,n.return);break;case 12:ku(e,n);break;case 31:ku(e,n),r&4&&vu(e,n);break;case 13:ku(e,n),r&4&&yu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),um(e,n))));break;case 22:if(r=n.memoizedState!==null||Zl,!r){var a=t!==null&&t.memoizedState!==null||Ql;t=Zl,i=Ql,Zl=r,(Ql=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),ju(e,n,r)):ku(e,n),Zl=t,Ql=i}break;case 30:ku(e,n),r&512&&vl(n,n.return);break;case 7:r&512&&vl(n,n.return);default:ku(e,n)}}function uu(e,t){for(e=e.child;e!==null;)du(e,t),e=e.sibling}function du(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){pf(e,e.return,t)}fu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,Lt=!0}catch(t){pf(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?Ep(s,!0):Ep(e.stateNode,!1)}catch(t){pf(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&uu(e,t);break;default:uu(e,t)}}function fu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:du(n,r);break a;case 22:n.memoizedState===null&&fu(n,r);break a;default:fu(n,r)}}e=e.sibling}}function pu(e){var t=e.alternate;t!==null&&(e.alternate=null,pu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&St(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var mu=null,hu=!1;function gu(e,t,n){for(n=n.child;n!==null;)_u(e,t,n),n=n.sibling}function _u(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount==`function`)try{Ve.onCommitFiberUnmount(Be,n)}catch{}switch(n.tag){case 26:Ql||yl(n,t),gu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Ql&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ql||yl(n,t),Sl(n);var r=mu,i=hu;wp(n.type)&&(mu=n.stateNode,hu=!1),gu(e,t,n),vm(n.stateNode,n.type,n.memoizedProps),mu=r,hu=i;break;case 5:Ql||yl(n,t),Sl(n);case 6:if(n.tag===6&&Sl(n),r=mu,i=hu,mu=null,gu(e,t,n),mu=r,hu=i,mu!==null){if(hu)try{(mu.nodeType===9?mu.body:mu.nodeName===`HTML`?mu.ownerDocument.body:mu).removeChild(n.stateNode),Lt=!0}catch(e){pf(n,t,e)}else try{mu.removeChild(n.stateNode),Lt=!0}catch(e){pf(n,t,e)}}break;case 18:mu!==null&&(hu?(e=mu,Tp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Wh(e)):Tp(mu,n.stateNode));break;case 4:r=mu,i=hu,mu=n.stateNode.containerInfo,hu=!0,gu(e,t,n),mu=r,hu=i;break;case 0:case 11:case 14:case 15:hl(2,n,t),Ql||hl(4,n,t),gu(e,t,n);break;case 1:Ql||(yl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&_l(n,t,r)),gu(e,t,n);break;case 21:gu(e,t,n);break;case 22:Ql=(r=Ql)||n.memoizedState!==null,gu(e,t,n),Ql=r;break;case 30:yl(n,t),gu(e,t,n);break;case 7:Ql||yl(n,t),gu(e,t,n);break;default:gu(e,t,n)}}function vu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Wh(e)}catch(e){pf(t,t.return,e)}}}function yu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wh(e)}catch(e){pf(t,t.return,e)}}function bu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new tu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new tu),t;default:throw Error(i(435,e.tag))}}function xu(e,t){var n=bu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Su(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(wp(l.type)){mu=l.stateNode,hu=!1;break a}break;case 5:mu=l.stateNode,hu=!1;break a;case 3:case 4:mu=l.stateNode.containerInfo,hu=!0;break a}l=l.return}if(mu===null)throw Error(i(160));_u(s,c,o),mu=null,hu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)wu(t,e,n),t=t.sibling}var Cu=null;function wu(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Su(t,e,n),Tu(e),a&4&&(hl(3,e,e.return),ml(3,e),hl(5,e,e.return));break;case 1:Su(t,e,n),Tu(e),a&512&&(Ql||r===null||yl(r,r.return)),a&64&&Zl&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Cu,Su(t,e,n),Tu(e),a&512&&(Ql||r===null||yl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(Zl)e.stateNode=mp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[bt]||r[pt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),ip(r,t,n),r[pt]=e,Dt(r),t=r;break a;case`link`:if(o=qm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),ip(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=qm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),ip(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[pt]=e,Dt(r),t=r}e.stateNode=t}}else Zl||Jm(o,e.type,e.stateNode)}else e.stateNode=Hm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&El(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||Ql||t.parentNode.removeChild(t)):a.count--,n===null?Zl||Jm(o,e.type,e.stateNode):Hm(o,n,e.memoizedProps))}break;case 27:Su(t,e,n),Tu(e),a&512&&(Ql||r===null||yl(r,r.return)),r!==null&&a&4&&El(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=$l,$l=!1,Su(t,e,n),$l=o,Tu(e),a&512&&(Ql||r===null||yl(r,r.return)),e.flags&32){t=e.stateNode;try{tn(t,``),Lt=!0}catch(t){pf(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,El(e,t,r===null?t:r.memoizedProps)),a&1024&&(eu=!0);break;case 6:if(Su(t,e,n),Tu(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Lt=!0}catch(t){pf(e,e.return,t)}}break;case 3:if(Lt=!1,Km=null,o=Cu,Cu=Sm(t.containerInfo),Su(t,e,n),Cu=o,Tu(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Wh(t.containerInfo)}catch(t){pf(e,e.return,t)}eu&&(eu=!1,Eu(e)),Lt=!1;break;case 4:a=$l,$l=Zl,r=Rt(),o=Cu,Cu=Sm(e.stateNode.containerInfo),Su(t,e,n),Tu(e),Cu=o,Lt&&iu&&(au=!0),Lt=r,$l=a;break;case 12:Su(t,e,n),Tu(e);break;case 31:Su(t,e,n),Tu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xu(e,t)));break;case 13:Su(t,e,n),Tu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(pd=Ne()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xu(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=Zl,l=Ql,u=$l;Zl=c||o,$l=u||o,Ql=l||s,Su(t,e,n),Ql=l,$l=u,Zl=c,Tu(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||Zl||Ql||(t=s||Ql,n=Zl,r=Ql,Zl=o||Zl,Ql=t,Au(e,2),Zl=n,Ql=r),!o&&$l||uu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,xu(e,n))));break;case 19:Su(t,e,n),Tu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xu(e,t)));break;case 30:a&512&&(Ql||r===null||yl(r,r.return)),a=Rt(),o=iu,s=(n&335544064)===n,c=e.memoizedProps,iu=s&&ci(c.default,c.update)!==`none`,Su(t,e,n),Tu(e),s&&r!==null&&Lt&&(e.flags|=4),iu=o,Lt=a;break;case 21:break;case 7:a&512&&(Ql||r===null||yl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Su(t,e,n),Tu(e)}}function Tu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Dl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(wl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Cl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Al(e,Ol(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(tn(l,``),n.flags&=-33),Al(e,Ol(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;kl(e,Ol(e),u,s);break;default:throw Error(i(161))}}catch(t){pf(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Eu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Eu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,vh=!0,t.reset(),vh=!1),e=e.sibling}}function Du(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Ou(t,e),t=t.sibling;else Xl(t,!1)}function Ou(e,t){var n=e.alternate;if(n===null)Hl(e,!1);else switch(e.tag){case 3:if(ou=ru=!1,Il(),Du(t,e),!ru&&!au){if(e=Fl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Op(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),ou=!0}Fl=null;break;case 5:Du(t,e);break;case 4:r=ru,ru=!1,Du(t,e),ru&&(au=!0),ru=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Du(t,e):Hl(e,!1));break;case 30:r=ru,i=Il(),ru=!1,Du(t,e),ru&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=oi(a,o),o=oi(n.memoizedProps,o);var s=ci(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Ll=0,t=Yl(e,n,t,o,s,a,!0),Ll!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Md(e,e.memoizedProps.onUpdate),Fl=i):i!==null&&(i.push.apply(i,Fl),Fl=i),ru=e.flags&32?!0:r;break;default:Du(t,e)}}function ku(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)lu(e,t.alternate,t),t=t.sibling}function Au(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:hl(4,n,n.return),Au(n,r);break;case 1:yl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&_l(n,n.return,i),Au(n,r);break;case 27:r&2&&vm(n.stateNode,n.type,n.memoizedProps);case 5:yl(n,n.return),n.tag!==5&&n.tag!==27||Sl(n),Au(n,r);break;case 6:Sl(n);break;case 26:yl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||Ql||i.parentNode.removeChild(i),Au(n,r);break;case 22:n.memoizedState===null&&Au(n,r);break;case 30:yl(n,n.return),Au(n,r);break;case 7:yl(n,n.return);default:Au(n,r)}e=e.sibling}}function ju(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:ju(i,a,n),ml(4,a);break;case 1:if(ju(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){pf(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)mo(l[i],c)}catch(e){pf(r,r.return,e)}}s&&o&64&&gl(a),vl(a,a.return);break;case 27:n&2&&jl(a);case 5:a.tag!==5&&a.tag!==27||xl(a),ju(i,a,n),s&&r===null&&o&4&&Tl(a),vl(a,a.return);break;case 6:xl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||Zl||Jm(Sm(c.ownerDocument),a.type,c),ju(i,a,n),s&&r===null&&o&4&&Tl(a),vl(a,a.return);break;case 12:ju(i,a,n);break;case 31:ju(i,a,n),s&&o&4&&vu(i,a);break;case 13:ju(i,a,n),s&&o&4&&yu(i,a);break;case 22:a.memoizedState===null&&ju(i,a,n),vl(a,a.return);break;case 30:ju(i,a,n),vl(a,a.return);break;case 7:vl(a,a.return);default:ju(i,a,n)}t=t.sibling}}function Mu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ca(n))}function Nu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ca(e))}function Pu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Fu(e,t,n,r),t=t.sibling;else i&&Jl(t)}function Fu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ql(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Pu(e,t,n,r),a&2048&&ml(9,t);break;case 1:Pu(e,t,n,r);break;case 3:Pu(e,t,n,r),i&&ou&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Ca(a)));break;case 12:if(a&2048){Pu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){pf(t,t.return,e)}}else Pu(e,t,n,r);break;case 31:Pu(e,t,n,r);break;case 13:Pu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&ql(t),o._visibility&2?Pu(e,t,n,r):(o._visibility|=2,Iu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&ql(s),o._visibility&2?Pu(e,t,n,r):Lu(e,t)),a&2048&&Mu(s,t);break;case 24:Pu(e,t,n,r),a&2048&&Nu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Bl(a.child,!0),Bl(t.child,!0))),Pu(e,t,n,r);break;default:Pu(e,t,n,r)}}function Iu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Iu(a,o,s,c,i),ml(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Iu(a,o,s,c,i)):u._visibility&2?Iu(a,o,s,c,i):Lu(a,o),i&&l&2048&&Mu(o.alternate,o);break;case 24:Iu(a,o,s,c,i),i&&l&2048&&Nu(o.alternate,o);break;default:Iu(a,o,s,c,i)}t=t.sibling}}function Lu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Lu(n,r),i&2048&&Mu(r.alternate,r);break;case 24:Lu(n,r),i&2048&&Nu(r.alternate,r);break;default:Lu(n,r)}t=t.sibling}}var Ru=8192;function zu(e,t,n){if(e.subtreeFlags&Ru)for(e=e.child;e!==null;)Bu(e,t,n),e=e.sibling}function Bu(e,t,n){switch(e.tag){case 26:zu(e,t,n),e.flags&Ru&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&$m(n,e)):eh(n,Cu,e.memoizedState,e.memoizedProps));break;case 5:zu(e,t,n),e.flags&Ru&&(e=e.stateNode,(t&335544128)===t&&$m(n,e));break;case 3:case 4:var r=Cu;Cu=Sm(e.stateNode.containerInfo),zu(e,t,n),Cu=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ru,Ru=16777216,zu(e,t,n),Ru=r):zu(e,t,n));break;case 30:if((e.flags&Ru)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Nl===null&&(Nl=new Map),Nl.set(r,i)}zu(e,t,n);break;default:zu(e,t,n)}}function Vu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Hu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];nu=r,Gu(r,e)}Vu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Uu(e),e=e.sibling}function Uu(e){switch(e.tag){case 0:case 11:case 15:Hu(e),e.flags&2048&&hl(9,e,e.return);break;case 3:Hu(e);break;case 12:Hu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Wu(e)):Hu(e);break;default:Hu(e)}}function Wu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];nu=r,Gu(r,e)}Vu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:hl(8,t,t.return),Wu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Wu(t));break;default:Wu(t)}e=e.sibling}}function Gu(e,t){for(;nu!==null;){var n=nu;switch(n.tag){case 0:case 11:case 15:hl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ca(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,nu=r;else a:for(n=e;nu!==null;){r=nu;var i=r.sibling,a=r.return;if(pu(r),r===n){nu=null;break a}if(i!==null){i.return=a,nu=i;break a}nu=a}}}var Ku={getCacheForType:function(e){var t=ha(xa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ha(xa).controller.signal}},qu=typeof WeakMap==`function`?WeakMap:Map,Ju=0,Yu=null,Xu=null,Zu=0,Qu=0,$u=null,ed=!1,td=!1,nd=!1,rd=0,id=0,ad=0,od=0,sd=0,cd=0,ld=0,ud=null,dd=null,fd=!1,pd=0,md=0,hd=1/0,gd=null,_d=null,vd=0,yd=null,bd=null,xd=0,Sd=0,Cd=null,wd=null,Td=null,Ed=null,Dd=null,Od=0,kd=null;function Ad(){return Ju&2&&Zu!==0?Zu&-Zu:V.T===null?ut():Pf()}function jd(){if(cd===0){if(!(Zu&536870912)||Ji){var e=Je;Je<<=1,!(Je&3932160)&&(Je=262144),cd=e}else cd=536870912}return e=xo.current,e!==null&&(e.flags|=32),cd}function Md(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Ip(oi(e.memoizedProps,n))),Ed===null&&(Ed=[]),Ed.push(t.bind(null,r))}}function Nd(e,t,n){(e===Yu&&(Qu===2||Qu===9)||e.cancelPendingCommit!==null)&&(Bd(e,0),Ld(e,Zu,cd,!1)),rt(e,n),Ju&2&&e===Yu||(e===Yu&&(!(Ju&2)&&(od|=n),id===4&&Ld(e,Zu,cd,!1)),Ef(e))}function Pd(e,t,n){if(Ju&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||Qe(e,t),a=r?Jd(e,t):Kd(e,t,!0),o=r;do{if(a===0){td&&!r&&Ld(e,t,0,!1);break}if(n=e.current.alternate,o&&!Id(n))a=Kd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=ud;var l=c.current.memoizedState.isDehydrated;if(l&&(Bd(c,s).flags|=256),s=Kd(c,s,!1),s!==2&&s!==6){if(nd&&!l){c.errorRecoveryDisabledLanes|=o,od|=o,a=4;break a}o=dd,dd=a,o!==null&&(dd===null?dd=o:dd.push.apply(dd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Bd(e,0),Ld(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Ld(r,t,cd,!ed);break a;case 2:dd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=pd+300-Ne(),10<a)){if(Ld(r,t,cd,!ed),Ze(r,0,!0)!==0)break a;xd=t,r.timeoutHandle=vp(Fd.bind(null,r,n,dd,gd,fd,t,cd,od,ld,ed,o,`Throttled`,-0,0),a);break a}Fd(r,n,dd,gd,fd,t,cd,od,ld,ed,o,null,-0,0)}break}}while(1);Ef(e)}function Fd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},Nl=null,Bu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=ih.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?pd-Ne():(a&4194048)===a?md-Ne():0,m=nh(d,m),m!==null)?(xd=a,e.cancelPendingCommit=m(tf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Ld(e,a,o,!l)):tf(e,t,a,n,r,i,o,s,c,l,u,d)}function Id(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ld(e,t,n,r){t=$e(e,t),t&=~sd,t&=~od,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ue(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&at(e,n,t)}function Rd(){return Ju&6?!0:(Df(0,!1),!1)}function zd(){if(Xu!==null){if(Qu===0)var e=Xu.return;else e=Xu,sa=oa=null,Xo(e),Ya=null,Xa=0,e=Xu;for(;e!==null;)pl(e.alternate,e),e=e.return;Xu=null}}function Bd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,yp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),xd=0,zd(),Yu=e,Xu=n=Ci(e.current,null),Zu=t,Qu=0,$u=null,ed=!1,td=Qe(e,t),nd=!1,ld=cd=sd=od=ad=id=0,dd=ud=null,fd=!1,rd=$e(e,t),pi(),n}function Vd(e,t){No=null,V.H=oc,t===za||t===Va?(t=qa(),Qu=3):t===Ba?(t=qa(),Qu=4):Qu=t===wc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,$u=t,Xu===null&&(id=1,vc(e,ji(t,e.current)))}function Hd(){var e=xo.current;return e===null?!0:(Zu&4194048)===Zu?So===null:(Zu&62914560)===Zu||Zu&536870912?e===So:!1}function Ud(){var e=V.H;return V.H=oc,e===null?oc:e}function Wd(){var e=V.A;return V.A=Ku,e}function Gd(){id=4,ed||(Zu&4194048)!==Zu&&xo.current!==null||(td=!0),!(ad&134217727)&&!(od&134217727)||Yu===null||Ld(Yu,Zu,cd,!1)}function Kd(e,t,n){var r=Ju;Ju|=2;var i=Ud(),a=Wd();(Yu!==e||Zu!==t)&&(gd=null,Bd(e,t)),t=!1;var o=id;a:do try{if(Qu!==0&&Xu!==null){var s=Xu,c=$u;switch(Qu){case 8:zd(),o=6;break a;case 3:case 2:case 9:case 6:xo.current===null&&(t=!0);var l=Qu;if(Qu=0,$u=null,Qd(e,s,c,l),n&&td){o=0;break a}break;default:l=Qu,Qu=0,$u=null,Qd(e,s,c,l)}}qd(),o=id;break}catch(t){Vd(e,t)}while(1);return t&&e.shellSuspendCounter++,sa=oa=null,Ju=r,V.H=i,V.A=a,Xu===null&&(Yu=null,Zu=0,pi()),o}function qd(){for(;Xu!==null;)Xd(Xu)}function Jd(e,t){var n=Ju;Ju|=2;var r=Ud(),a=Wd();Yu!==e||Zu!==t?(gd=null,hd=Ne()+500,Bd(e,t)):td=Qe(e,t);a:do try{if(Qu!==0&&Xu!==null){t=Xu;var o=$u;b:switch(Qu){case 1:Qu=0,$u=null,Qd(e,t,o,1);break;case 2:case 9:if(Ua(o)){Qu=0,$u=null,Zd(t);break}t=function(){Qu!==2&&Qu!==9||Yu!==e||(Qu=7),Ef(e)},o.then(t,t);break a;case 3:Qu=7;break a;case 4:Qu=5;break a;case 7:Ua(o)?(Qu=0,$u=null,Zd(t)):(Qu=0,$u=null,Qd(e,t,o,7));break;case 5:var s=null;switch(Xu.tag){case 26:s=Xu.memoizedState;case 5:case 27:var c=Xu;if(s?Zm(s):c.stateNode.complete){Qu=0,$u=null;var l=c.sibling;if(l!==null)Xu=l;else{var u=c.return;u===null?Xu=null:(Xu=u,$d(u))}break b}}Qu=0,$u=null,Qd(e,t,o,5);break;case 6:Qu=0,$u=null,Qd(e,t,o,6);break;case 8:zd(),id=6;break a;default:throw Error(i(462))}}Yd();break}catch(t){Vd(e,t)}while(1);return sa=oa=null,V.H=r,V.A=a,Ju=n,Xu===null?(Yu=null,Zu=0,pi(),id):0}function Yd(){for(;Xu!==null&&!je();)Xd(Xu)}function Xd(e){var t=il(e.alternate,e,rd);e.memoizedProps=e.pendingProps,t===null?$d(e):Xu=t}function Zd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Rc(n,t,t.pendingProps,t.type,void 0,Zu);break;case 11:t=Rc(n,t,t.pendingProps,t.type.render,t.ref,Zu);break;case 5:Xo(t);var r=t;r===Ki&&(Ji?(ea(r),r.tag===5&&r.stateNode!=null&&(qi=r.stateNode)):(ea(r),Ji=!0));default:pl(n,t),t=Xu=wi(t,rd),t=il(n,t,rd)}e.memoizedProps=e.pendingProps,t===null?$d(e):Xu=t}function Qd(e,t,n,r){sa=oa=null,Xo(t),Ya=null,Xa=0;var i=t.return;try{if(Cc(e,i,t,n,Zu)){id=1,vc(e,ji(n,e.current)),Xu=null;return}}catch(t){if(i!==null)throw Xu=i,t;id=1,vc(e,ji(n,e.current)),Xu=null;return}t.flags&32768?(Ji||r===1?e=!0:td||Zu&536870912?e=!1:(ed=e=!0,(r===2||r===9||r===3||r===6)&&(r=xo.current,r!==null&&r.tag===13&&(r.flags|=16384))),ef(t,e)):$d(t)}function $d(e){var t=e;do{if(t.flags&32768){ef(t,ed);return}e=t.return;var n=dl(t.alternate,t,rd);if(n!==null){Xu=n;return}if(t=t.sibling,t!==null){Xu=t;return}Xu=t=e}while(t!==null);id===0&&(id=5)}function ef(e,t){do{var n=fl(e.alternate,e);if(n!==null){n.flags&=32767,Xu=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Xu=e;return}Xu=e=n}while(e!==null);id=6,Xu=null}function tf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do uf();while(vd!==0);if(Ju&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===Yu&&(Xu=Yu=null,Zu=0),bd=t,yd=e,xd=n,Cd=a,wd=r,nf(e,t,n,s,c,l,f)}}function nf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Sd=s,s|=fi,it(e,n,s,r,i,a),Ed=null,(n&335544064)===n?(Dd=Ea(e),r=10262):(Dd=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(Le,function(){return df(),null})):(e.callbackNode=null,e.callbackPriority=0),Ml=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=V.T,V.T=null,i=H.p,H.p=2,a=Ju,Ju|=4;try{su(e,t,n)}finally{Ju=a,H.p=i,V.T=r}}vd=1,Ml?Td=Pp(o,e.containerInfo,Dd,of,sf,af,cf,df,rf,null,null):(of(),sf(),cf())}function rf(e){if(vd!==0){var t=yd.onRecoverableError;t(e,{componentStack:null})}}function af(){vd===3&&(vd=0,Ou(bd,yd),vd=4)}function of(){if(vd===1){vd=0;var e=yd,t=bd,n=xd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=V.T,V.T=null;var i=H.p;H.p=2;var a=Ju;Ju|=4;try{iu=au=!1,wu(t,e,n),n=up;var o=Ir(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Fr(s.ownerDocument.documentElement,s)){if(c!==null&&Lr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Pr(s,h),v=Pr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}vh=!!lp,up=lp=null}finally{Ju=a,H.p=i,V.T=r}}e.current=t,vd=2}}function sf(){if(vd===2){vd=0;var e=yd,t=bd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=V.T,V.T=null;var r=H.p;H.p=2;var i=Ju;Ju|=4;try{lu(e,t.alternate,t)}finally{Ju=i,H.p=r,V.T=n}}vd=3}}function cf(){if(vd===4||vd===3){vd=0;var e=Td;Td=null,Me();var t=yd,n=bd,r=xd,i=wd,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?vd=5:(vd=0,bd=yd=null,lf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(_d=null),lt(r),n=n.stateNode,Ve&&typeof Ve.onCommitFiberRoot==`function`)try{Ve.onCommitFiberRoot(Be,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=V.T,a=H.p,H.p=2,V.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{V.T=n,H.p=a}}if(i=Ed,o=Dd,Dd=null,i!==null&&(Ed=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);xd&3&&uf(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===kd?Od++:(Od=0,kd=t):(Od=0,kd=null),Df(0,!1)}}function lf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ca(t)))}function uf(){return Td!==null&&(Td.skipTransition(),Td=null),of(),sf(),cf(),df()}function df(){if(vd!==5)return!1;var e=yd,t=Sd;Sd=0;var n=lt(xd),r=V.T,a=H.p;try{H.p=32>n?32:n,V.T=null,n=Cd,Cd=null;var o=yd,s=xd;if(vd=0,bd=yd=null,xd=0,Ju&6)throw Error(i(331));var c=Ju;if(Ju|=4,Uu(o.current),Fu(o,o.current,s,n),Ju=c,Df(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot==`function`)try{Ve.onPostCommitFiberRoot(Be,o)}catch{}return!0}finally{H.p=a,V.T=r,lf(e,t)}}function ff(e,t,n){t=ji(n,t),t=bc(e.stateNode,t,2),e=so(e,t,2),e!==null&&(rt(e,2),Ef(e))}function pf(e,t,n){if(e.tag===3)ff(e,e,n);else for(;t!==null;){if(t.tag===3){ff(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(_d===null||!_d.has(r))){e=ji(n,e),n=xc(2),r=so(t,n,2),r!==null&&(Sc(n,r,t,e),rt(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qu;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(nd=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Yu===e&&(Zu&n)===n&&(id===4||id===3&&(Zu&62914560)===Zu&&300>Ne()-pd?Ju&2?sd|=n:Bd(e,0):sd|=n,ld===Zu&&(ld=0)),Ef(e)}function gf(e,t){t===0&&(t=tt()),e=gi(e,t),e!==null&&(rt(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return ke(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ue(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=Zu,a=Ze(r,r===Yu?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Qe(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&_p()&&(e=Tf);for(var t=Ne(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}vd!==0&&vd!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ue(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=et(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Yu,n=Zu,n=Ze(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Qu===2||Qu===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ae(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ae(r),lt(n)){case 2:case 8:n=Ie;break;case 32:n=Le;break;case 268435456:n=ze;break;default:n=Le}return r=jf.bind(null,e),n=ke(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ae(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(vd!==0&&vd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(uf()&&e.callbackNode!==n)return null;var r=Zu;return r=Ze(e,e===Yu?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Pd(e,r,t),Af(e,Ne()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(uf())return null;Pd(e,t,!0)}function Nf(){Sp(function(){Ju&6?ke(Fe,Of):kf()})}function Pf(){if(Tf===0){var e=ka;e===0&&(e=qe,qe<<=1,!(qe&261888)&&(qe=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:ln(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);Ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),Ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<ri.length;Lf++){var Rf=ri[Lf];ii(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}ii(Yr,`onAnimationEnd`),ii(Xr,`onAnimationIteration`),ii(Zr,`onAnimationStart`),ii(`dblclick`,`onDoubleClick`),ii(`focusin`,`onFocus`),ii(`focusout`,`onBlur`),ii(Qr,`onTransitionRun`),ii($r,`onTransitionStart`),ii(ei,`onTransitionCancel`),ii(ti,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){li(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){li(e)}i.currentTarget=null,a=c}}}}function Hf(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(Kf(t,e,2,!1),n.add(r))}function Uf(e,t,n){var r=0;t&&(r|=4),Kf(n,e,r,t)}var Wf=`_reactListening`+Math.random().toString(36).slice(2);function Gf(e){if(!e[Wf]){e[Wf]=!0,kt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Uf(t,!1,e),Uf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wf]||(t[Wf]=!0,Uf(`selectionchange`,!1,t))}}function Kf(e,t,n,r){switch(Th(t)){case 2:var i=yh;break;case 8:i=bh;break;default:i=xh}n=i.bind(null,t,n,e),i=void 0,!bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function qf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Ct(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}_n(function(){var r=a,i=fn(n),s=[];a:{var c=ni.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(En(n)===0)break a;case`keydown`:case`keyup`:l=Kn;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Yn;break;case Yr:case Xr:case Zr:l=Bn;break;case ti:l=Xn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Zn;break;case`copy`:case`cut`:case`paste`:l=Y;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=qn;break;case`submit`:l=Jn;break;case`toggle`:case`beforetoggle`:l=Qn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=vn(m,p),g!=null&&d.push(Jf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==dn&&(u=n.relatedTarget||n.fromElement)&&(Ct(u)||u[ht]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Ct(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Tt(c),h=l==null?u:Tt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Ct(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?E(c,l,Xf):null,c!==null&&Zf(s,u,c,d,!1),l!==null&&f!==null&&Zf(s,f,l,d,!0)))}a:{if(c=r?Tt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=vr;else if(fr(c)){if(yr)_=Or;else{_=Er;var v=Tr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&on(r.elementType)&&(_=vr):_=Dr;if(_&&=_(e,r)){pr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Tt(r):window,e){case`focusin`:(fr(v)||v.contentEditable===`true`)&&(zr=v,Br=r,Vr=null);break;case`focusout`:Vr=Br=zr=null;break;case`mousedown`:Hr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Hr=!1,Ur(s,n,i);break;case`selectionchange`:if(Rr)break;case`keydown`:case`keyup`:Ur(s,n,i)}var y;if(er)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else cr?or(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(rr&&n.locale!==`ko`&&(cr||b!==`onCompositionStart`?b===`onCompositionEnd`&&cr&&(y=Tn()):(Sn=i,Cn=`value`in Sn?Sn.value:Sn.textContent,cr=!0)),v=Yf(r,b),0<v.length&&(b=new Vn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=sr(n),y!==null&&(b.data=y)))),(y=nr?lr(e,n):ur(e,n))&&(b=Yf(r,`onBeforeInput`),0<b.length&&(v=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),If(s,e,r,n,i)}Vf(s,t)})}function Jf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=vn(e,n),i!=null&&r.unshift(Jf(e,i,a)),i=vn(e,t),i!=null&&r.push(Jf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Xf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=vn(n,a),l!=null&&o.unshift(Jf(n,l,c))):i||(l=vn(n,a),l!=null&&o.push(Jf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Qf=/\r\n?/g,$f=/\u0000|\uFFFD/g;function ep(e){return(typeof e==`string`?e:``+e).replace(Qf,`
`).replace($f,``)}function tp(e,t){return t=ep(t),ep(e)===t}function np(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||tn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&tn(e,``+r);else return;break;case`className`:Bt(e,`class`,r);break;case`tabIndex`:Bt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Bt(e,n,r);break;case`style`:an(e,r,o);return;case`data`:if(t!==`object`){Bt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&np(e,t,`name`,a.name,a,null),np(e,t,`formEncType`,a.formEncType,a,null),np(e,t,`formMethod`,a.formMethod,a,null),np(e,t,`formTarget`,a.formTarget,a,null)):(np(e,t,`encType`,a.encType,a,null),np(e,t,`method`,a.method,a,null),np(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=un);return;case`onScroll`:r!=null&&Hf(`scroll`,e);return;case`onScrollEnd`:r!=null&&Hf(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=ln(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Hf(`beforetoggle`,e),Hf(`toggle`,e),zt(e,`popover`,r);break;case`xlinkActuate`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:zt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=sn.get(n)||n,zt(e,n,r);else return}Lt=!0}function rp(e,t,n,r,a,o){switch(n){case`style`:an(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)tn(e,r);else if(typeof r==`number`||typeof r==`bigint`)tn(e,``+r);else return;break;case`onScroll`:r!=null&&Hf(`scroll`,e);return;case`onScrollEnd`:r!=null&&Hf(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=un);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[mt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}Lt=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):zt(e,n,r)}return}Lt=!0}function ip(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Hf(`error`,e),Hf(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:np(e,t,o,s,n,null)}}a&&np(e,t,`srcSet`,n.srcSet,n,null),r&&np(e,t,`src`,n.src,n,null);return;case`input`:Hf(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:np(e,t,r,d,n,null)}}Xt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Hf(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:np(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(s in Hf(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:np(e,t,s,c,n,null)}en(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:np(e,t,l,r,n,null)}return;case`dialog`:Hf(`beforetoggle`,e),Hf(`toggle`,e),Hf(`cancel`,e),Hf(`close`,e);break;case`iframe`:case`object`:Hf(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Hf(zf[r],e);break;case`image`:Hf(`error`,e),Hf(`load`,e);break;case`details`:Hf(`toggle`,e);break;case`embed`:case`source`:case`link`:Hf(`error`,e),Hf(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:np(e,t,u,r,n,null)}return;default:if(on(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&rp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&np(e,t,c,r,n,null))}var ap={};function op(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||np(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(Lt=!0),o=m;break;case`name`:m!==f&&(Lt=!0),a=m;break;case`checked`:m!==f&&(Lt=!0),u=m;break;case`defaultChecked`:m!==f&&(Lt=!0),d=m;break;case`value`:m!==f&&(Lt=!0),s=m;break;case`defaultValue`:m!==f&&(Lt=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&np(e,t,p,m,r,f)}}Yt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||np(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(Lt=!0),p=o;break;case`defaultValue`:o!==l&&(Lt=!0),c=o;break;case`multiple`:o!==l&&(Lt=!0),s=o;default:o!==l&&np(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:np(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(Lt=!0),p=a;break;case`defaultValue`:a!==o&&(Lt=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&np(e,t,s,a,r,o)}$t(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:np(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(Lt=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:np(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&np(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:np(e,t,u,p,r,m)}return;default:if(on(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&rp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||rp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&np(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||np(e,t,f,p,r,m)}function sp(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function cp(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&sp(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&sp(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var lp=null,up=null;function dp(e){return e.nodeType===9?e:e.ownerDocument}function fp(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function pp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function mp(e,t,n,r){return n=dp(n).createElement(e),n[pt]=r,n[mt]=t,ip(n,e,t),Dt(n),n}function hp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gp=null;function _p(){var e=window.event;return e&&e.type===`popstate`?e!==gp&&(gp=e,!0):(gp=null,!1)}var vp=typeof setTimeout==`function`?setTimeout:void 0,yp=typeof clearTimeout==`function`?clearTimeout:void 0,bp=typeof Promise==`function`?Promise:void 0,xp=typeof requestAnimationFrame==`function`?requestAnimationFrame:vp,Sp=typeof queueMicrotask==`function`?queueMicrotask:bp===void 0?vp:function(e){return bp.resolve(null).then(e).catch(Cp)};function Cp(e){setTimeout(function(){throw e})}function wp(e){return e===`head`}function Tp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Wh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)ym(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,ym(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&ym(e.ownerDocument.body)}n=i}while(n);Wh(t)}function Ep(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Dp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Op(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function kp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Ap(e){return kp(e.getBoundingClientRect(),getComputedStyle(e),e)}function jp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return kp(t,n,e)}function Mp(e){return e.documentElement.clientHeight}function Np(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Pp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Mp(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Qm(f),u>th){s.length=o;break}f=new Promise(Np.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Fp(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Fp.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:D({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Fp.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Fp.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Ip(e){return{name:e,group:new Fp(`group`,e),imagePair:new Fp(`image-pair`,e),old:new Fp(`old`,e),new:new Fp(`new`,e)}}function Lp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Lp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Hp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Bp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Rp,e,s,r)}this._eventListeners=a}};function Rp(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Lp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Hp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Bp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,zp,e,n,i),r.splice(t,1),a!==null&&a()}};function zp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Bp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Vp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Hp(e,t,n,r){if(e.length===0)return-1;r=Vp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&Vp(a.optionsOrUseCapture)===r)return i}return-1}Lp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Bp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Bp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Lp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Up,e,void 0,void 0)};function Up(e,t){return e.tag!==6&&(e=b(e),hm(e,t))}Lp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Wp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Up(t[n],e);n--);};function Wp(e,t){return t.push(e),!1}Lp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=dp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0))};function Gp(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Lp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Kp,e,void 0,void 0)};function Kp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Lp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,qp,e,void 0,void 0);for(var n=t=0;n<Jp.length;n++){var r=Jp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Jp[t++]=r}Jp.length=t}};function qp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Jp=[],Yp=!1;function Xp(e,t,n){Jp.push({fragmentInstance:e,observer:t,instance:n}),Yp||(Yp=!0,gm(function(){Yp=!1;var e=Jp;Jp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Lp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Zp,e,void 0,void 0),e};function Zp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Lp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Lp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Wp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Qp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Qp(e,t,n,r,i){var a=Ct(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=E(n,a,T),t===null?t=!1:(h(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=E(r,a,T),t===null?t=!1:(h(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function $p(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Lp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Wp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),$p(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),$p(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function em(e,t){return e=b(e),tm(e,t),!1}function tm(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function nm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Bp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Jp.length;i++){var a=Jp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Jp[r++]=a)}Jp.length=r,n.observe(e)}),tm(e,t))}function rm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Bp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Xp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function im(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:im(n),St(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function am(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=dm(e.nextSibling),e===null)break}return null}function om(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=dm(e.nextSibling),e===null))return null;return e}function sm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=dm(e.nextSibling),e===null))return null;return e}function cm(e){return e.data===`$?`||e.data===`$~`}function lm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function um(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function dm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var fm=null;function pm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return dm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function mm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function hm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function gm(e){xp(function(){xp(function(t){return e(t)})})}function _m(e,t,n){switch(t=dp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function vm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&np(e,t,r,null,ap,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===un&&(e.onclick=null),St(e)}function ym(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);St(e)}var bm=new Map,xm=new Set;function Sm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Cm=H.d;H.d={f:wm,r:Tm,D:Om,C:km,L:Am,m:jm,X:Nm,S:Mm,M:Pm};function wm(){var e=Cm.f(),t=Rd();return e||t}function Tm(e){var t=wt(e);t!==null&&t.tag===5&&t.type===`form`?Js(t):Cm.r(e)}var Em=typeof document>`u`?null:document;function Dm(e,t,n){var r=Em;if(r&&typeof t==`string`&&t){var i=Jt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),xm.has(i)||(xm.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),ip(t,`link`,e),Dt(t),r.head.appendChild(t)))}}function Om(e){Cm.D(e),Dm(`dns-prefetch`,e,null)}function km(e,t){Cm.C(e,t),Dm(`preconnect`,e,t)}function Am(e,t,n){Cm.L(e,t,n);var r=Em;if(r&&e&&t){var i=`link[rel="preload"][as="`+Jt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Jt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Jt(n.imageSizes)+`"]`)):i+=`[href="`+Jt(e)+`"]`;var a=i;switch(t){case`style`:a=Im(e);break;case`script`:a=Bm(e)}if(!(bm.has(a)||(e=D({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),bm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Lm(a))||t===`script`&&r.querySelector(Vm(a))))){var o=r.createElement(`link`);ip(o,`link`,e),t===`style`&&(o[xt]=!0,o.onload=o.onerror=function(){Ot(o)}),Dt(o),r.head.appendChild(o)}}}function jm(e,t){Cm.m(e,t);var n=Em;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Jt(r)+`"][href="`+Jt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Bm(e)}if(!bm.has(a)&&(e=D({rel:`modulepreload`,href:e},t),bm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Vm(a)))return}r=n.createElement(`link`),ip(r,`link`,e),Dt(r),n.head.appendChild(r)}}}function Mm(e,t,n){Cm.S(e,t,n);var r=Em;if(r&&e){var i=Et(r).hoistableStyles,a=Im(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Lm(a)))s.loading=5;else{e=D({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=bm.get(a))&&Wm(e,n);var c=o=r.createElement(`link`);Dt(c),ip(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Um(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Nm(e,t){Cm.X(e,t);var n=Em;if(n&&e){var r=Et(n).hoistableScripts,i=Bm(e),a=r.get(i);a||(a=n.querySelector(Vm(i)),a||(e=D({src:e,async:!0},t),(t=bm.get(i))&&Gm(e,t),a=n.createElement(`script`),Dt(a),ip(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Pm(e,t){Cm.M(e,t);var n=Em;if(n&&e){var r=Et(n).hoistableScripts,i=Bm(e),a=r.get(i);a||(a=n.querySelector(Vm(i)),a||(e=D({src:e,async:!0,type:`module`},t),(t=bm.get(i))&&Gm(e,t),a=n.createElement(`script`),Dt(a),ip(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Fm(e,t,n,r){var a=(a=ge.current)?Sm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Im(n.href),t=Et(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Im(n.href);var o=Et(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Lm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=bm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},bm.set(e,o)),zm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Bm(n),t=Et(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Im(e){return`href="`+Jt(e)+`"`}function Lm(e){return`link[rel="stylesheet"][`+e+`]`}function Rm(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function zm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[xt]){r.loading=1;return}}else t=e.createElement(`link`),t[xt]=!0,t.onload=t.onerror=Ot.bind(null,t),ip(t,`link`,n),Dt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Bm(e){return`[src="`+Jt(e)+`"]`}function Vm(e){return`script[async]`+e}function Hm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Jt(n.href)+`"]`);if(r)return t.instance=r,Dt(r),r;var a=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Dt(r),ip(r,`style`,a),Um(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Im(n.href);var o=e.querySelector(Lm(a));if(o)return t.state.loading|=4,t.instance=o,Dt(o),o;r=Rm(n),(a=bm.get(a))&&Wm(r,a),o=(e.ownerDocument||e).createElement(`link`),Dt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),ip(o,`link`,r),t.state.loading|=4,Um(o,n.precedence,e),t.instance=o;case`script`:return o=Bm(n.src),(a=e.querySelector(Vm(o)))?(t.instance=a,Dt(a),a):(r=n,(a=bm.get(o))&&(r=D({},n),Gm(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Dt(a),ip(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Um(r,n.precedence,e));return t.instance}function Um(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Wm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Gm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Km=null;function qm(e,t,n){if(Km===null){var r=new Map,i=Km=new Map;i.set(n,r)}else i=Km,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Jm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Ym(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Xm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Zm(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Qm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function $m(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Qm(t),e.suspenseyImages.push(t)),e=ah.bind(e),t.decode().then(e,e))}function eh(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Im(r.href),a=t.querySelector(Lm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=ih.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Dt(a);return}a=t.ownerDocument||t,r=Rm(r),(i=bm.get(i))&&Wm(r,i),a=a.createElement(`link`),Dt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),ip(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=ih.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var th=0;function nh(e,t){return e.stylesheets&&e.count===0&&sh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&sh(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&th===0&&(th=62500*cp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&sh(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>th?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function rh(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)sh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function ih(){this.count--,rh(this)}function ah(){this.imgCount--,rh(this)}var oh=null;function sh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oh=new Map,t.forEach(ch,e),oh=null,ih.call(e))}function ch(e,t){if(!(t.state.loading&4)){var n=oh.get(e);if(n)var r=n.get(null);else{n=new Map,oh.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=ih.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var lh={$$typeof:N,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function uh(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function dh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new uh(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=xi(3,null,null,t),e.current=a,a.stateNode=e,t=Sa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},io(a),e}function fh(e){return e?(e=yi,e):yi}function ph(e,t,n,r,i,a){i=fh(i),r.context===null?r.context=i:r.pendingContext=i,r=oo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=so(e,r,t),n!==null&&(Nd(n,e,t),co(n,e,t))}function mh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hh(e,t){mh(e,t),(e=e.alternate)&&mh(e,t)}function gh(e){if(e.tag===13||e.tag===31){var t=gi(e,67108864);t!==null&&Nd(t,e,67108864),hh(e,67108864)}}function _h(e){if(e.tag===13||e.tag===31){var t=Ad();t=ct(t);var n=gi(e,t);n!==null&&Nd(n,e,t),hh(e,t)}}var vh=!0;function yh(e,t,n,r){var i=V.T;V.T=null;var a=H.p;try{H.p=2,xh(e,t,n,r)}finally{H.p=a,V.T=i}}function bh(e,t,n,r){var i=V.T;V.T=null;var a=H.p;try{H.p=8,xh(e,t,n,r)}finally{H.p=a,V.T=i}}function xh(e,t,n,r){if(vh){var i=Sh(r);if(i===null)qf(e,t,r,Ch,n),Ph(e,r);else if(Ih(i,e,t,n,r))r.stopPropagation();else if(Ph(e,r),t&4&&-1<Nh.indexOf(e)){for(;i!==null;){var a=wt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Xe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ue(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(Ju&6)&&(hd=Ne()+500,Df(0,!1))}}break;case 31:case 13:s=gi(a,2),s!==null&&Nd(s,a,2),Rd(),hh(a,2)}if(a=Sh(r),a===null&&qf(e,t,r,Ch,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else qf(e,t,r,null,n)}}function Sh(e){return e=fn(e),wh(e)}var Ch=null;function wh(e){if(Ch=null,e=Ct(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ch=e,null}function Th(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Pe()){case Fe:return 2;case Ie:return 8;case Le:case Re:return 32;case ze:return 268435456;default:return 32}default:return 32}}var Eh=!1,Dh=null,Oh=null,kh=null,Ah=new Map,jh=new Map,Mh=[],Nh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Ph(e,t){switch(e){case`focusin`:case`focusout`:Dh=null;break;case`dragenter`:case`dragleave`:Oh=null;break;case`mouseover`:case`mouseout`:kh=null;break;case`pointerover`:case`pointerout`:Ah.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:jh.delete(t.pointerId)}}function Fh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=wt(t),t!==null&&gh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ih(e,t,n,r,i){switch(t){case`focusin`:return Dh=Fh(Dh,e,t,n,r,i),!0;case`dragenter`:return Oh=Fh(Oh,e,t,n,r,i),!0;case`mouseover`:return kh=Fh(kh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Ah.set(a,Fh(Ah.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,jh.set(a,Fh(jh.get(a)||null,e,t,n,r,i)),!0}return!1}function Lh(e){var t=Ct(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,dt(e.priority,function(){_h(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,dt(e.priority,function(){_h(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dn=r,n.target.dispatchEvent(r),dn=null}else return t=wt(n),t!==null&&gh(t),e.blockedOn=n,!1;t.shift()}return!0}function zh(e,t,n){Rh(e)&&n.delete(t)}function Bh(){Eh=!1,Dh!==null&&Rh(Dh)&&(Dh=null),Oh!==null&&Rh(Oh)&&(Oh=null),kh!==null&&Rh(kh)&&(kh=null),Ah.forEach(zh),jh.forEach(zh)}function Vh(e,n){e.blockedOn===n&&(e.blockedOn=null,Eh||(Eh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Bh)))}var Hh=null;function Uh(e){Hh!==e&&(Hh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Hh===e&&(Hh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(wh(r||n)===null)continue;break}var a=wt(n);a!==null&&(e.splice(t,3),t-=3,Ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Wh(e){function t(t){return Vh(t,e)}Dh!==null&&Vh(Dh,e),Oh!==null&&Vh(Oh,e),kh!==null&&Vh(kh,e),Ah.forEach(t),jh.forEach(t);for(var n=0;n<Mh.length;n++){var r=Mh[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Mh.length&&(n=Mh[0],n.blockedOn===null);)Lh(n),n.blockedOn===null&&Mh.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||Uh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(wh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Uh(n)}}}function Gh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Kh(e){this._internalRoot=e}qh.prototype.render=Kh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;ph(n,Ad(),e,t,null,null)},qh.prototype.unmount=Kh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ph(e.current,2,null,e,null,null),Rd(),t[ht]=null}};function qh(e){this._internalRoot=e}qh.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mh.length&&t!==0&&t<Mh[n].priority;n++);Mh.splice(n,0,e),n===0&&Lh(e)}};var Jh=n.version;if(Jh!==`19.3.1`)throw Error(i(527,Jh,`19.3.1`));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Yh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:V,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Xh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xh.isDisabled&&Xh.supportsFiber)try{Be=Xh.inject(Yh),Ve=Xh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=hc,s=gc,c=_c;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=dh(e,1,!1,null,null,n,r,null,o,s,c,Gh),e[ht]=t.current,Gf(e),new Kh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u()),v=g(),y=`-ms-`,b=`-moz-`,x=`-webkit-`,S=`comm`,C=`rule`,w=`decl`,T=`@import`,E=`@namespace`,D=`@keyframes`,O=`@layer`,k=Math.abs,ee=String.fromCharCode,A=Object.assign;function te(e,t){return F(e,0)^45?(((t<<2^F(e,0))<<2^F(e,1))<<2^F(e,2))<<2^F(e,3):0}function j(e){return e.trim()}function M(e,t){return(e=t.exec(e))?e[0]:e}function N(e,t,n){return e.replace(t,n)}function P(e,t,n){return e.indexOf(t,n)}function F(e,t){return e.charCodeAt(t)|0}function I(e,t,n){return e.slice(t,n)}function ne(e){return e.length}function L(e){return e.length}function R(e,t){return t.push(e),e}function re(e,t){return e.map(t).join(``)}function ie(e,t){return e.filter(function(e){return!M(e,t)})}var z=1,ae=1,oe=0,se=0,B=0,ce=``;function le(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:z,column:ae,length:o,return:``,siblings:s}}function V(e,t){return A(le(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function H(e){for(;e.root;)e=V(e.root,{children:[e]});R(e,e.siblings)}function U(){return B}function ue(){return B=se>0?F(ce,--se):0,ae--,B===10&&(ae=1,z--),B}function de(){return B=se<oe?F(ce,se++):0,ae++,B===10&&(ae=1,z++),B}function fe(){return F(ce,se)}function W(){return se}function pe(e,t){return I(ce,e,t)}function me(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function he(e){return z=ae=1,oe=ne(ce=e),se=0,[]}function ge(e){return ce=``,e}function _e(e){return j(pe(se-1,be(e===91?e+2:e===40?e+1:e)))}function ve(e){for(;(B=fe())&&B<33;)de();return me(e)>2||me(B)>3?``:` `}function ye(e,t){for(;--t&&de()&&!(B<48||B>102||B>57&&B<65||B>70&&B<97););return pe(e,W()+(t<6&&fe()==32&&de()==32))}function be(e){for(;de();)switch(B){case e:return se;case 34:case 39:e!==34&&e!==39&&be(B);break;case 40:e===41&&be(e);break;case 92:de()}return se}function xe(e,t){for(;de()&&e+B!==57&&(e+B!==84||fe()!==47););return`/*`+pe(t,se-1)+`*`+ee(e===47?e:de())}function Se(e){for(;!me(fe());)de();return pe(e,se)}function Ce(e){return ge(we(``,null,null,null,[``],e=he(e),0,[0],e))}function we(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=de()){case 40:if(m!=108&&F(C,d-1)==58){P(C+=N(_e(v),`&`,`&\f`),`&\f`,k(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=_e(v);break;case 9:case 10:case 13:case 32:C+=ve(m);break;case 92:C+=ye(W()-1,7);continue;case 47:switch(fe()){case 42:case 47:R(Ee(xe(de(),W()),t,n,c),c),(me(m||1)==5||me(fe()||1)==5)&&ne(C)&&I(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=ne(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=N(C,/\f/g,``)),p>0&&(ne(C)-d||h===0&&m===47)&&R(p>32?De(C+`;`,r,n,d-1,c):De(N(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(R(S=Te(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123){if(u===0)we(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(F(C,3)===110)break;case 108:if(F(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?we(e,S,S,r&&R(Te(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):we(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+ne(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&ue()==125)continue}switch(C+=ee(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(ne(C)-1)*_,_=1;break;case 64:fe()===45&&(C+=_e(de())),f=fe(),u=d=ne(y=C+=Se(W())),v++;break;case 45:m===45&&ne(C)==2&&(h=0)}}return a}function Te(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=L(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=I(e,f+1,f=k(g=o[h])),b=e;v<m;++v)(b=j(g>0?p[v]+` `+y:N(y,/&\f/g,p[v])))&&(c[_++]=b);return le(e,t,n,i===0?C:s,c,l,u,d)}function Ee(e,t,n,r){return le(e,t,n,S,ee(U()),I(e,2,-2),0,r)}function De(e,t,n,r,i){return le(e,t,n,w,I(e,0,r),I(e,r+1,-1),r,i)}function G(e,t,n){switch(te(e,t)){case 5103:return x+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return x+e+e;case 4855:return x+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return b+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return x+e+b+e+y+e+e;case 5936:switch(F(e,t+11)){case 114:return x+e+y+N(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return x+e+y+N(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return x+e+y+N(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return x+e+y+e+e;case 6165:return x+e+y+`flex-`+e+e;case 5187:return x+e+N(e,/(\w+).+(:[^]+)/,x+`box-$1$2`+y+`flex-$1$2`)+e;case 5443:return x+e+y+`flex-item-`+N(e,/flex-|-self/g,``)+(M(e,/flex-|baseline/)?``:y+`grid-row-`+N(e,/flex-|-self/g,``))+e;case 4675:return x+e+y+`flex-line-pack`+N(e,/align-content|flex-|-self/g,``)+e;case 5548:return x+e+y+N(e,`shrink`,`negative`)+e;case 5292:return x+e+y+N(e,`basis`,`preferred-size`)+e;case 6060:return x+`box-`+N(e,`-grow`,``)+x+e+y+N(e,`grow`,`positive`)+e;case 4554:return x+N(e,/([^-])(transform)/g,`$1`+x+`$2`)+e;case 6187:return N(N(N(e,/(zoom-|grab)/,x+`$1`),/(image-set)/,x+`$1`),e,``)+e;case 5495:case 3959:return N(e,/(image-set\([^]*)/,x+"$1$`$1");case 4968:return N(N(e,/(.+:)(flex-)?(.*)/,x+`box-pack:$3`+y+`flex-pack:$3`),/space-between/,`justify`)+x+e+e;case 4200:if(!M(e,/flex-|baseline/))return y+`grid-column-align`+I(e,t)+e;break;case 2592:case 3360:return y+N(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,M(e.props,/grid-\w+-end/)})?~P(e+(n=n[t].value),`span`,0)?e:y+N(e,`-start`,``)+e+y+`grid-row-span:`+(~P(n,`span`,0)?M(n,/\d+/):+M(n,/\d+/)-M(e,/\d+/))+`;`:y+N(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return M(e.props,/grid-\w+-start/)})?e:y+N(N(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return N(e,/(.+)-inline(.+)/,x+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ne(e)-1-t>6)switch(F(e,t+1)){case 109:if(F(e,t+4)!==45)break;case 102:return N(e,/(.+:)(.+)-([^]+)/,`$1`+x+`$2-$3$1`+b+(F(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~P(e,`stretch`,0)?G(N(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return N(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return y+n+`:`+r+s+(i?y+n+`-span:`+(a?o:+o-r)+s:``)+e});case 4949:if(F(e,t+6)===121)return N(e,`:`,`:`+x)+e;break;case 6444:switch(F(e,F(e,14)===45?18:11)){case 120:return N(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+x+(F(e,14)===45?`inline-`:``)+`box$3$1`+x+`$2$3$1`+y+`$2box$3`)+e;case 100:return N(e,`:`,`:`+y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return N(e,`scroll-`,`scroll-snap-`)+e}return e}function Oe(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function ke(e,t,n,r){switch(e.type){case O:if(e.children.length)break;case T:case E:case w:return e.return=e.return||e.value;case S:return``;case D:return e.return=e.value+`{`+Oe(e.children,r)+`}`;case C:if(!ne(e.value=e.props.join(`,`)))return``}return ne(n=Oe(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Ae(e){var t=L(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function je(e){return function(t){t.root||(t=t.return)&&e(t)}}function Me(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case w:e.return=G(e.value,e.length,n);return;case D:return Oe([V(e,{value:N(e.value,`@`,`@`+x)})],r);case C:if(e.length)return re(n=e.props,function(t){switch(M(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:H(V(e,{props:[N(t,/:(read-\w+)/,`:`+b+`$1`)]})),H(V(e,{props:[t]})),A(e,{props:ie(n,r)});break;case`::placeholder`:H(V(e,{props:[N(t,/:(plac\w+)/,`:`+x+`input-$1`)]})),H(V(e,{props:[N(t,/:(plac\w+)/,`:`+b+`$1`)]})),H(V(e,{props:[N(t,/:(plac\w+)/,y+`input-$1`)]})),H(V(e,{props:[t]})),A(e,{props:ie(n,r)})}return``})}}function Ne(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Pe=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Fe=`active`,Ie=`data-styled-version`,Le=`6.6.0`,Re=`/*!sc*/
`,ze=typeof window<`u`&&typeof document<`u`;if(!_.createContext)throw Ne(19);function K(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var q=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:K(`REACT_APP_SC_DISABLE_SPEEDY`)??K(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),Be=`sc-keyframes-`,Ve=new Map,He=new Map,Ue=1,We=e=>{if(Ve.has(e))return Ve.get(e);for(;He.has(Ue);)Ue++;let t=Ue++;return Ve.set(e,t),He.set(t,e),t},Ge=e=>He.get(e),Ke=(e,t)=>{Ue=t+1,Ve.set(e,t),He.set(t,e)},qe=Object.freeze([]),Je=Object.freeze({});function Ye(e,t,n=Je){return e.theme!==n.theme&&e.theme||t||n.theme}var Xe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ze=/(^-|-$)/g;function Qe(e){return e.replace(Xe,`-`).replace(Ze,``)}var $e=/(a)(d)/gi,et=e=>String.fromCharCode(e+(e>25?39:97));function tt(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=et(t%52)+n;return(et(t%52)+n).replace($e,`$1-$2`)}var nt=5381,rt=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},it=e=>rt(nt,e);function at(e){return tt(it(e)>>>0)}function ot(e){return e.displayName||e.name||`Component`}function st(e){return typeof e==`string`&&!0}function ct(e){return st(e)?`styled.${e}`:`Styled(${ot(e)})`}var lt=Symbol.for(`react.memo`),ut=Symbol.for(`react.forward_ref`),dt={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},ft={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},pt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},mt={[ut]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[lt]:pt};function ht(e){return(`type`in(t=e)&&t.type.$$typeof)===lt?pt:`$$typeof`in e?mt[e.$$typeof]:dt;var t}var gt=Object.defineProperty,_t=Object.getOwnPropertyNames,vt=Object.getOwnPropertySymbols,yt=Object.getOwnPropertyDescriptor,bt=Object.getPrototypeOf,xt=Object.prototype;function St(e,t,n){if(typeof t!=`string`){let r=bt(t);r&&r!==xt&&St(e,r,n);let i=_t(t).concat(vt(t)),a=ht(e),o=ht(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in ft||n&&n[s]||o&&s in o||a&&s in a)){let n=yt(t,s);try{gt(e,s,n)}catch{}}}}return e}function Ct(e){return typeof e==`function`}var wt=Symbol.for(`react.forward_ref`);function Tt(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===wt&&`styledComponentId`in e}function Et(e,t){return e&&t?e+` `+t:e||t||``}function Dt(e,t){return e.join(t||``)}function Ot(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function kt(e,t,n=!1){if(!n&&!Ot(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=kt(e[n],t[n]);else if(Ot(t))for(let n in t)e[n]=kt(e[n],t[n]);return e}function At(e,t){Object.defineProperty(e,"toString",{value:t})}var jt=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw Ne(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+Re;return t}},Mt=`style[${Pe}][${Ie}="${Le}"]`,Nt=RegExp(`^${Pe}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Pt=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,Ft=e=>{if(!e)return document;if(Pt(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(Pt(t))return t}return document},It=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},Lt=(e,t)=>{let n=(t.textContent??``).split(Re),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(Nt);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(Ke(n,t),It(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},Rt=e=>{let t=Ft(e.options.target).querySelectorAll(Mt);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(Pe)!==Fe&&(Lt(e,r),r.parentNode&&r.parentNode.removeChild(r))}},zt=!1;function Bt(){if(!1!==zt)return zt;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return zt=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return zt=t.getAttribute(`content`)||void 0}return zt=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var Vt=(e,t)=>{if(typeof document>`u`)throw Ne(20);let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${Pe}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(Pe,Fe),i.setAttribute(Ie,Le);let s=t||Bt();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},Ht=class{constructor(e,t){this.element=Vt(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw Ne(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},Ut=class{constructor(e,t){this.element=Vt(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},Wt=ze,Gt={isServer:!ze,useCSSOMInjection:!q},Kt=class e{static registerId(e){return We(e)}constructor(e=Je,t={},n){this.options=Object.assign(Object.assign({},Gt),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&ze&&Wt&&(Wt=!1,Rt(this)),At(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=Ge(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=Pe+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&ze&&Rt(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&ze&&t.target!==this.options.target&&Ft(this.options.target)!==Ft(t.target)&&Rt(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new Ht(t,n):new Ut(t,n))(this.options),new jt(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){We(e),e.startsWith(Be)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(We(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(We(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},qt=new WeakSet,Jt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Yt(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in Jt||e.startsWith(`--`)?String(t).trim():t+`px`}var Xt=47;function Zt(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var Qt=Symbol.for(`sc-keyframes`);function $t(e){return typeof e==`object`&&!!e&&Qt in e}function en(e){return Ct(e)&&!(e.prototype&&e.prototype.isReactComponent)}var tn=e=>e==null||!1===e||e===``,nn=Symbol.for(`react.client.reference`);function rn(e){return e.$$typeof===nn}function an(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!tn(r)&&(Array.isArray(r)&&qt.has(r)||Ct(r)?t.push(Zt(n)+`:`,r,`;`):Ot(r)?(t.push(n+` {`),an(r,t),t.push(`}`)):t.push(Zt(n)+`: `+Yt(n,r)+`;`))}}function on(e,t,n,r,i=[]){if(tn(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return rn(e)?i:en(e)&&t?on(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)on(e[a],t,n,r,i);return i}return Tt(e)?(i.push(`.${e.styledComponentId}`),i):$t(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):rn(e)?i:Ot(e)&&e.toString===Object.prototype.toString?(an(e,i),i):(i.push(e.toString()),i)}var sn=it(Le),cn=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=rt(sn,t),this.baseStyle=n,Kt.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a){if(en(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=Dt(on(r,e,t,n)))}else i+=Dt(on(a,e,t,n))}}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=tt(rt(rt(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Et(r,a)}}return r}},ln=/&/g;function un(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function dn(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==Xt||e.charCodeAt(c+1)!==42){if(o)l===42&&e.charCodeAt(c+1)===Xt&&(o=!1,c++);else if(l!==34&&l!==39||un(e,c)){if(a===0){if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}}else a===0?a=l:a===l&&(a=0)}else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function fn(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&fn(a.children,t)}return e}function pn({options:e=Je,plugins:t=qe}=Je){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(ln,r).replace(i,a))}),e.prefix&&o.push(Me),o.push(ke);let s=[],c=Ae(o.concat(je(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return dn(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||un(e,o)){if(s===0){if(t===Xt&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==Xt);)o++;o+=2}else if(t!==40){if(t!==41){if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===Xt)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===Xt&&o+1<r&&e.charCodeAt(o+1)===Xt){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++}else c>0&&c--,o++}else c++,o++}else o++}else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:dn(i)):l===0?e:dn(e)}(t),d=Ce(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=fn(d,e.namespace)),s=[],Oe(d,c),s},u=e,d=nt;for(let e=0;e<t.length;e++)t[e].name||Ne(15),d=rt(d,t[e].name);return u!=null&&u.namespace&&(d=rt(d,u.namespace)),u!=null&&u.prefix&&(d=rt(d,`p`)),l.hash=d===nt?``:d.toString(),l}var mn=new Kt,hn=pn(),gn=_.createContext({shouldForwardProp:void 0,styleSheet:mn,stylis:hn,stylisPlugins:void 0});gn.Consumer;function _n(){return _.useContext(gn)}var vn=_.createContext(void 0);vn.Consumer;var yn={};function bn(e,t){let n=typeof e==`string`?Qe(e):`sc`;yn[n]=(yn[n]||0)+1;let r=n+`-`+at(Le+n+yn[n]);return t?t+`-`+r:r}function xn(e,t,n){let r=Tt(e),i=e,a=!st(e),{attrs:o=qe,componentId:s=bn(t.displayName,t.parentComponentId),displayName:c=ct(e)}=t,l=t.displayName&&t.componentId?Qe(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new cn(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=_.useContext(vn),u=_n(),d=e.shouldForwardProp||u.shouldForwardProp,f=Ye(t,l,a)||Je,[p,m]=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=null,a=e.length>1;for(let t=0;t<e.length;t++){let n=e[t],o=Ct(n)?n(a?Object.assign({},r):r):n;for(let e in o)e===`className`?r.className=Et(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):o[e]===void 0?e in r&&(r[e]!==void 0&&(i||=[]).push(e),r[e]=void 0):r[e]=o[e]}return`className`in t&&typeof t.className==`string`&&(r.className=Et(r.className,t.className)),[r,i]}(r,t,f),h=i.generateAndInjectStyles(p,u.styleSheet,u.stylis),g=p.as||c,v=st(g),y=function(e,t,n,r,i,a){let o={};for(let s in e)s[0]===`$`||s===`as`||s===`theme`&&e.theme===n||(s===`forwardedAs`?e.forwardedAs!==void 0&&(o.as=e.forwardedAs):e[s]===void 0?s===`className`||i||a!==null&&a.indexOf(s)!==-1||r&&!r(s,t)||(o[s]=void 0):r&&!r(s,t)||(o[s]=e[s]));return o}(p,g,f,d,v,m),b=Et(o,s);return h&&(b+=` `+h),p.className&&(b+=` `+p.className),y[v&&g.includes(`-`)?`class`:`className`]=b,n&&(y.ref=n),(0,_.createElement)(g,y)}(m,e,t)}p.displayName=c;let m=_.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Et(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)kt(e,n,!0);return e}({},i.defaultProps,e):e}}),At(m,()=>`.${m.styledComponentId}`),a&&St(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Sn=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function Cn(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var wn=e=>(qt.add(e),e);function Tn(e,...t){if(Ct(e)||Ot(e))return wn(on(Cn(qe,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?on(n):wn(on(Cn(n,t)))}function En(e,t,n=Je){if(!t)throw Ne(1,t);let r=(r,...i)=>e(t,n,Tn(r,...i));return r.attrs=r=>En(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>En(e,t,Object.assign(Object.assign({},n),r)),r}var Dn=e=>En(xn,e),J=Dn;Sn.forEach(e=>{J[e]=Dn(e)});var On,kn=class{constructor(e,t){this[On]=!0,this.inject=(e,t=hn)=>{let n=this.getName(t);if(!e.hasNameForId(this.id,n)){let r=t(this.rules,n,`@keyframes`);e.insertRules(this.id,n,r)}},this.name=e,this.id=Be+e,this.rules=t,We(this.id),At(this,()=>{throw Ne(12,String(this.name))})}getName(e=hn){return e.hash?this.name+tt(e.hash>>>0):this.name}};function An(e,...t){let n=Dt(Tn(e,...t));return new kn(at(n),n)}On=Qt,`${Pe}`,`${Pe}`,`${Pe}`;var jn=15e3,Mn=new Set,Nn=new Map,Pn=!1,Fn=0,In;function Ln(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function Rn(){Pn||(Pn=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>zn(e)))}function zn(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?Nn.get(n):void 0;n&&r&&(Nn.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),Mn.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}function Bn(){if(In!==void 0)return;let e=()=>{if(!Ln())return;let e=document.getElementById(`root`),t=e!==null&&e.childElementCount===0;window.external.sendMessage(JSON.stringify({type:`webview.heartbeat`,payload:{blank:t}}))};e(),In=setInterval(e,5e3)}var Y={get available(){return Ln()},send(e){Ln()?(Rn(),window.external.sendMessage(JSON.stringify(e)),e.type===`app.ready`&&Bn()):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=jn){if(!Ln())return Promise.reject(Error(`Native bridge is not available.`));Rn();let r=`req-${++Fn}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{Nn.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);Nn.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return Rn(),Mn.add(e),()=>Mn.delete(e)}},Vn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),X=o(((e,t)=>{t.exports=Vn()}))();function Hn(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}async function Un(e){return Y.available?await Y.request(`i18n.get`,e?{locale:e}:void 0):{locale:`en`,strings:{},available:[`en`]}}var Wn=(0,_.createContext)(Hn({})),Gn=(0,_.createContext)(`en`);function Kn(){return(0,_.useContext)(Wn)}var qn=({children:e})=>{let[t,n]=(0,_.useState)(()=>Hn({})),[r,i]=(0,_.useState)(`en`);return(0,_.useEffect)(()=>{let e=!1,t=async()=>{try{let t=await Un();if(e)return;n(()=>Hn(t.strings)),i(t.locale)}catch{}};t();let r=Y.on(e=>{e.type===`settings.changed`&&t()});return()=>{e=!0,r()}},[]),(0,_.useEffect)(()=>{document.documentElement.lang=r},[r]),(0,X.jsx)(Wn.Provider,{value:t,children:(0,X.jsx)(Gn.Provider,{value:r,children:e})})},Jn=e=>Y.send({type:e});function Yn(){let[e,t]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{if(Y.available)return Y.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>Jn(`window.minimize`),toggleMaximize:()=>Jn(`window.toggleMaximize`),close:()=>Jn(`window.close`)}}function Xn(){return{onMouseDown:()=>Jn(`window.drag`),onDoubleClick:()=>Jn(`window.toggleMaximize`)}}function Zn(){let[e,t]=(0,_.useState)(!1),{maximized:n}=Yn();return(0,_.useEffect)(()=>{if(!Y.available)return;let e=!1;return Y.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,_.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var Qn=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function $n(){return(0,X.jsx)(X.Fragment,{children:Qn.map(([e,t])=>(0,X.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),Y.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var er=null;function tr(e){er=e}function nr(e){return er?er(e):Promise.resolve(!1)}var rr={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},ir={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function ar(e,t){return Y.available?await Y.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function or(e){return Y.available?(await Y.request(`fs.open`,{path:e})).ok:!1}async function sr(e,t=!0,n=!1,r=0){return await Y.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r})}async function cr(e,t,n=0){return await Y.request(`fs.archive.extract`,{path:e,target:t,codePage:n})}async function lr(e,t=0){return await Y.request(`fs.archive.extractEntry`,{path:e,codePage:t})}async function ur(e,t=0){return await Y.request(`fs.archive.apply`,{path:e,codePage:t})}async function dr(e){return Y.available?await Y.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function fr(e,t){return Y.available?(await Y.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function pr(e,t,n,r){return Y.available?(await Y.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function mr(e,t=!1){return Y.available?await Y.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function hr(){return(await Y.request(`fs.places`)).places}async function gr(){return(await Y.request(`fs.drives`)).drives}async function _r(e=!1){return(await Y.request(`fs.recycle`,{includeOrphans:e})).entries}async function vr(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await nr({hits:r.protected,delaySeconds:r.delaySeconds??5,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await Y.request(e,{...t,confirm:r.token})}return r}async function yr(e=!1){let t=await Y.request(`fs.recycle.empty`,{includeOrphans:e});await vr(`fs.recycle.empty`,{includeOrphans:e},t)}async function br(e){return!Y.available||e.length===0?{ok:!1,done:0}:await Y.request(`fs.recycle.restoreMany`,{ids:e})}async function xr(e){if(!Y.available||e.length===0)return{ok:!1,done:0};let t=await Y.request(`fs.recycle.deleteMany`,{ids:e}),n=await vr(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Sr(e){Y.available&&e&&await Y.request(`fs.recycle.properties`,{id:e})}async function Cr(){if(!Y.available)return{entries:[],cancelled:!0,failed:!1};let e=await Y.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function wr(){return Y.available?(await Y.request(`fs.recycle.admin.purge`)).ok:!1}async function Tr(e=0,t=150,n=!1){return Y.available?await Y.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function Er(){return Y.available?(await Y.request(`fs.recent`)).entries:[]}async function Dr(){return Y.available?(await Y.request(`fs.frequent`)).entries:[]}async function Or(e){Y.available&&await Y.request(`fs.frequent.record`,{path:e})}async function kr(){await Y.request(`fs.recent.clear`)}async function Ar(){await Y.request(`fs.frequent.clear`)}async function jr(){return await Y.request(`fs.visibility`)}async function Mr(){return await Y.request(`fs.hidden.toggle`)}async function Nr(){return Y.available?await Y.request(`fs.index.tasks`):{count:0,directories:[]}}var Pr={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,accentColor:null,secondaryColor:null,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,language:null,themePresets:[]};async function Fr(){if(!Y.available)return Pr;let e=await Y.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,language:e?.language??null,themePresets:e?.themePresets??[]}}async function Ir(){return Y.available?(await Y.request(`app.protection.defaults`)).paths??[]:[]}async function Lr(e){if(!Y.available)return e;let t=await Y.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets}}async function Rr(e,t){Y.available&&await Y.request(`app.tabs.set`,{tabs:e,active:t})}async function zr(e,t,n){return Y.available?(await Y.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var Br={managed:0,private:0,workingSet:0,available:0};async function Vr(){return Y.available?await Y.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1}}async function Hr(){return Y.available?await Y.request(`app.updateStatus`)??null:null}async function Ur(){return Y.available?await Y.request(`app.checkUpdate`):{current:`dev`,latest:`dev`,available:!1}}async function Wr(e){return!Y.available||!e?!1:(await Y.request(`app.openUrl`,{url:e})).ok}async function Gr(){return Y.available?await Y.request(`app.memory`):Br}async function Kr(){return Y.available?await Y.request(`app.memory.trim`):Br}async function qr(){return Y.available?(await Y.request(`app.scheme`)).registered:!1}async function Jr(e){return Y.available?(await Y.request(`app.scheme.set`,{enabled:e})).registered:!1}async function Yr(e,t=!1){return!Y.available||e.length===0?!1:(await Y.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function Xr(){return Y.available?(await Y.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function Zr(){return Y.available?await Y.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function Qr(e,t,n){return!Y.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await Y.request(`fs.operation.transfer`,{paths:e,target:t,move:n})}async function $r(e){return!Y.available||e.length===0?[]:(await Y.request(`fs.paths.info`,{paths:e})).entries}async function ei(e){return Y.available?(await Y.request(`fs.clipboard.paste`,{directory:e})).ok:!1}async function ti(e,t=!1){if(!Y.available||e.length===0)return{ok:!1,error:null};let n=await Y.request(`fs.operation.delete`,{paths:e,permanent:t});for(let r=0;r<2&&n.required&&n.token&&n.protected?.length;r++){if(!await nr({hits:n.protected,delaySeconds:n.delaySeconds??5,permanent:t}))return{ok:!1,error:null,cancelled:!0};n=await Y.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return n}async function ni(e,t){return Y.available?await Y.request(`fs.operation.rename`,{path:e,name:t}):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function ri(e,t=!1){return Y.available?await Y.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function ii(e){return Y.available?(await Y.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function ai(e,t){return Y.available?await Y.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function oi(e,t,n){return Y.available?await Y.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function si(e,t){return Y.available?await Y.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function ci(e){Y.available&&e.length!==0&&await Y.request(`fs.operation.properties`,{paths:e})}async function li(e){Y.available&&await Y.request(`fs.operation.openWith`,{path:e})}async function ui(e){Y.available&&await Y.request(`fs.operation.terminal`,{path:e})}async function di(e){return Y.available?await Y.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function fi(e,t){return Y.available?(await Y.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function pi(){return Y.available?await Y.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function mi(){return Y.available?await Y.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function hi(e){Y.available&&await Y.request(`fs.operation.showInExplorer`,{path:e})}async function gi(e){return!Y.available||e.length===0?{verbs:[],safe:!0}:await Y.request(`shell.verbs`,{paths:e})}async function _i(e,t,n,r){Y.available&&e.length!==0&&await Y.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function vi(e,t){return!Y.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await Y.request(`fs.operation.compress`,{...t,paths:e})}async function yi(){return Y.available?(await Y.request(`app.tasks`)).tasks:[]}async function bi(){Y.available&&await Y.request(`app.tasks.clear`)}var xi={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,refresh:`f5`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},Si=xi.openInNewTab;function Ci(e){Si=e.trim()||xi.openInNewTab}function wi(e){let t=Si.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Ti(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Ei(e){return e.split(`+`).filter(Boolean).map(e=>Di[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Di={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Oi(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var ki=new Map,Ai=new Map,ji=new Set,Mi=0;function Ni(){ki.clear(),Ai.clear(),Mi+=1,ji.forEach(e=>e())}function Pi(){let[e,t]=(0,_.useState)(Mi);return(0,_.useEffect)(()=>{let e=()=>t(Mi);return ji.add(e),()=>{ji.delete(e)}},[]),e}var Fi=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function Ii(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return Fi.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function Li(e,t,n=!1){let r=Pi(),i=e===null?``:Ii(e,t,n),[a,o]=(0,_.useState)(()=>ki.get(i)??null);return(0,_.useEffect)(()=>{if(e===null){o(null);return}if(!Y.available)return;if(ki.has(i)){o(ki.get(i)??null);return}let r=!0;return Y.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{ki.set(i,e.dataUrl),r&&o(e.dataUrl)},()=>{ki.set(i,null),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function Ri(e){let t=Pi(),[n,r]=(0,_.useState)(()=>e?Ai.get(e)??null:null);return(0,_.useEffect)(()=>{if(!e||!Y.available){r(null);return}if(Ai.has(e)){r(Ai.get(e)??null);return}let t=!0;return Y.request(`fs.iconFile`,{path:e}).then(n=>{Ai.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{Ai.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var zi=null,Bi=null;function Vi(){return zi===null?Y.available?(Bi??=Y.request(`app.thumbnails`).then(e=>(zi=e.base??``,zi),()=>(zi=``,``)),Bi):Promise.resolve(``):Promise.resolve(zi)}function Hi(e,t=128,n=0){let[r,i]=(0,_.useState)(zi);return(0,_.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return Vi().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}`}function Ui(e,t=0,n=``){let[r,i]=(0,_.useState)(zi);if((0,_.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return Vi().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function Wi(e,t=0){let[n,r]=(0,_.useState)(zi);return(0,_.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return Vi().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var Gi={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},Ki={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function qi(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=Xi(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=$i(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var Ji=`\0`,Yi=``;function Xi(e){return e.query!==Ji&&(Ji=e.query,Yi=e.query.toLowerCase()),Yi}var Zi=`\0`,Qi=null;function $i(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===Zi)return Qi;Zi=t;try{Qi=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{Qi=null}return Qi}function ea(e,t){return qi(e,t)!==null}var ta=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],na={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function ra(e){let t=aa(e);for(let{kind:e}of ta)if(na[e].has(t))return e;return null}function ia(e){return ra(e)!==null}function aa(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}function oa(e,t,n,r,i={}){return e(t===1?n:r,{count:t,...i})}function sa(e){if(e<0)return`—`;if(e===0)return`0 B`;let t=[`B`,`KB`,`MB`,`GB`,`TB`],n=Math.min(Math.floor(Math.log(e)/Math.log(1024)),t.length-1);return`${(e/1024**n).toFixed(n===0?0:1)} ${t[n]}`}function ca(){let e=document.documentElement.lang.trim();return e.length>0?e:void 0}var la=`yyyy/MM/dd HH:mm`,ua=`24`,da=la;function fa(e,t){ua=pa(e),da=t?.trim()||`yyyy/MM/dd HH:mm`}function pa(e){return e===`system`||e===`12`||e===`custom`?e:`24`}function ma(e){return ha(e,ua,da)}function ha(e,t,n){if(e<=0)return`—`;let r=new Date(e),i=pa(t);if(i===`custom`)return va(r,n?.trim()||`yyyy/MM/dd HH:mm`);let a={year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`};return i===`24`&&(a.hourCycle=`h23`),i===`12`&&(a.hour12=!0),r.toLocaleString(ca(),a)}function ga(e){if(e<=0)return`—`;let t=new Date(e);if(ua===`custom`)return va(t,da);let n={hour:`2-digit`,minute:`2-digit`,second:`2-digit`};return ua===`24`&&(n.hourCycle=`h23`),ua===`12`&&(n.hour12=!0),t.toLocaleTimeString(ca(),n)}var _a=[`yyyy`,`yy`,`MM`,`M`,`dd`,`d`,`HH`,`H`,`hh`,`h`,`mm`,`m`,`ss`,`s`,`a`];function va(e,t){let n=``;for(let r=0;r<t.length;){let i=_a.find(e=>t.startsWith(e,r));i?(n+=ya(e,i),r+=i.length):(n+=t[r],r++)}return n}function ya(e,t){let n=e.getHours(),r=(n+11)%12+1;switch(t){case`yyyy`:return String(e.getFullYear());case`yy`:return ba(e.getFullYear()%100);case`MM`:return ba(e.getMonth()+1);case`M`:return String(e.getMonth()+1);case`dd`:return ba(e.getDate());case`d`:return String(e.getDate());case`HH`:return ba(n);case`H`:return String(n);case`hh`:return ba(r);case`h`:return String(r);case`mm`:return ba(e.getMinutes());case`m`:return String(e.getMinutes());case`ss`:return ba(e.getSeconds());case`s`:return String(e.getSeconds());case`a`:return xa(e);default:return``}}function ba(e){return String(e).padStart(2,`0`)}function xa(e){return new Intl.DateTimeFormat(ca(),{hour:`numeric`,hour12:!0}).formatToParts(e).find(e=>e.type===`dayPeriod`)?.value??(e.getHours()<12?`AM`:`PM`)}function Sa(e){return e>=.9?`#ef4444`:e>=.75?`#f59e0b`:`var(--accent-gradient)`}function Ca(e){return e.replace(/[\\/]+$/,``).split(/[\\/]/).at(-1)||e}function wa(e){let t=e.replace(/[\\/]+$/,``),n=Math.max(t.lastIndexOf(`\\`),t.lastIndexOf(`/`));return n>0?t.slice(0,n):t}var Ta=[`.zip`,`.7z`,`.rar`,`.tar`,`.gz`,`.tgz`,`.bz2`,`.xz`];function Ea(e){let t=e.replace(/[\\/]+$/,``).toLowerCase();return Ta.some(e=>t.endsWith(e))}function Da(e){return Ea(e)?!0:e.toLowerCase().split(/[\\/]/).some(e=>Ta.some(t=>e.endsWith(t)))}function Oa(e){let t=e.split(/[\\/]/),n=t.findIndex(e=>Ta.some(t=>e.toLowerCase().endsWith(t)));return n<0?e:t.slice(0,n+1).join(`\\`)}function ka(e){return Oa(e).toLowerCase().endsWith(`.zip`)}function Aa(e){let t=e.includes(`/`)||e.includes(`\\\\`)?e.replace(/[\\/]+/g,`\\`):e;return t.endsWith(`\\`)&&(t=t.slice(0,-1)),t.toLowerCase()}function ja(e){let t=e.name.replace(/[\\/]+$/,``);return/^[a-z]:$/i.test(t)?` (${t.toUpperCase()})`:``}function Ma(e){let t=ja(e);return t?`${e.label||`Local Disk`}${t}`:e.label||e.name}var Na=(0,_.createContext)({places:{},useIcons:!1}),Pa=Na.Provider;function Fa(){return(0,_.useContext)(Na)}function Ia(e,t){return e.places[Aa(t)]}function La(e,t,n){return Ia(e,t)?.name||n}function Ra(e,t){try{let n=Number(localStorage.getItem(e));return Number.isFinite(n)?n:t}catch{return t}}function za(e,t){try{localStorage.setItem(e,String(t))}catch{}}function Ba(e){try{return JSON.parse(localStorage.getItem(e)??`null`)}catch{return null}}function Va(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}var Ha=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,X.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,X.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),Ua=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,X.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),Wa=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,X.jsx)(`path`,{d:`M14 3v4h4`})]}),Ga=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,X.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,X.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),Ka=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,X.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),qa=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M12 19V5`}),(0,X.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),Ja=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,X.jsx)(`path`,{d:`M20 4v7h-7`})]}),Ya=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M12 5v14`}),(0,X.jsx)(`path`,{d:`M5 12h14`})]}),Xa=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M19 12H5`}),(0,X.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),Za=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M5 12h14`}),(0,X.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),Qa=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,X.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),$a=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,X.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),eo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,X.jsx)(`path`,{d:`M12 12v8`})]}),to=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,X.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),no=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,X.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,X.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,X.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),ro=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,X.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),io=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,X.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),ao=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M4 7h16`}),(0,X.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,X.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,X.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),oo=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,X.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),so=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,X.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),co=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,X.jsxs)(`defs`,{children:[(0,X.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,X.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,X.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,X.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,X.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,X.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,X.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,X.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,X.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,X.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),lo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,X.jsx)(`path`,{d:`M15 3v4h4`}),(0,X.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),uo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,X.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,X.jsx)(`path`,{d:`m13 5-2 14`})]}),fo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,X.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,X.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),po=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,X.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),mo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,X.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,X.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),ho=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,X.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),go=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,X.jsx)(`path`,{d:`M15 3v4h4`}),(0,X.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),_o=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,X.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),vo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,X.jsx)(`path`,{d:`M8.5 14h7`})]}),yo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,X.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,X.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),bo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,X.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),xo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,X.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),So=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,X.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),Co=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,X.jsx)(`path`,{d:`M15 3v4h4`}),(0,X.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),wo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,X.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,X.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,X.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),To=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,X.jsx)(`path`,{d:`m14 6 4 4`})]}),Eo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,X.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Do=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,X.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Oo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M12 4v10`}),(0,X.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,X.jsx)(`path`,{d:`M4.5 19.5h15`})]}),ko=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,X.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,X.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Ao=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,X.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,X.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),jo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,X.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Mo=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,X.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),No=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,X.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Po=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,X.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,X.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Fo=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,X.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),Io=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,X.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,X.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,X.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),Lo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,X.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Ro=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,X.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),zo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,X.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,X.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),Bo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,X.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),Vo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,X.jsx)(`path`,{d:`M3.5 12h17`}),(0,X.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Ho=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,X.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),Uo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,X.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),Wo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,X.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,X.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),Go=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,X.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),Ko=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M12 16V4`}),(0,X.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,X.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),qo=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,X.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),Jo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,X.jsx)(`path`,{d:`M12 4v16`})]}),Yo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,X.jsx)(`path`,{d:`M15 4v16`})]});function Z(e,t){return({size:n=t,...r})=>(0,X.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var Xo=Z(Ha,18),Zo=Z(Ua,18),Qo=Z(Wa,18),$o=Z(Ga,18),es=Z(Ka,16),ts=Z(qa,16),ns=Z(Ja,16),rs=Z(Ya,16),is=Z(Xa,16),as=Z(Za,16),os=Z(Qa,12),ss=Z($a,18),cs=Z(eo,14),ls=Z(to,14),us=Z(no,14),ds=Z(ro,18),fs=Z(io,18),ps=Z(ao,18),ms=Z(oo,14),hs=Z(so,14),gs=Z(co,18),_s=Z(lo,18),vs=Z(uo,18),ys=Z(fo,18),bs=Z(po,18),xs=Z(mo,18),Ss=Z(ho,18),Cs=Z(go,18),ws=Z(_o,18),Ts=Z(vo,18),Es=Z(yo,18),Ds=Z(bo,18),Os=Z(xo,18),ks=Z(So,18),As=Z(Co,18),js=Z(wo,18),Ms=Z(To,16),Ns=Z(Eo,18),Ps=Z(Do,18),Fs=Z(Oo,18),Is=Z(ko,18),Ls=Z(Ao,18),Rs=Z(jo,18),zs=Z(Mo,18),Bs=Z(No,18),Vs=Z(Po,18),Hs=Z(Fo,18),Us=Z(Io,18),Ws=Z(Lo,18),Gs=Z(Ro,18),Ks=Z(zo,18),qs=Z(Bo,18),Js=Z(Vo,18),Ys=Z(Ho,18),Xs=Z(Uo,16),Zs=Z(Wo,16),Qs=Z(Go,16),$s=Z(Ko,16),ec=Z(qo,16),tc=Z(Jo,16),nc=Z(Yo,16);async function rc(e,t,n){return Y.available?(await Y.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function ic(e){return rc(`folder`,[],e??``)}function ac(e){return rc(`file`,e??[],``)}var oc=[{extension:`.txt`,label:`Text file`},{extension:`.md`,label:`Markdown file`},{extension:`.json`,label:`JSON file`},{extension:`.html`,label:`HTML file`},{extension:`.css`,label:`CSS file`},{extension:`.js`,label:`JavaScript file`},{extension:`.ts`,label:`TypeScript file`},{extension:`.cs`,label:`C# file`},{extension:`.py`,label:`Python file`},{extension:`.bat`,label:`Batch file`},{extension:`.ps1`,label:`PowerShell file`},{extension:`.csv`,label:`CSV file`},{extension:`.xml`,label:`XML file`},{extension:`.yml`,label:`YAML file`}],sc=m(),cc=Tn`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,lc=An`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,uc=An`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,dc=An`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,fc=An`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,pc=An`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,mc=An`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,hc=An`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,gc=Tn`animation: ${lc} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,_c=Tn`animation: ${uc} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,vc=Tn`animation: ${dc} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;Tn`animation: ${fc} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var yc=Tn`animation: ${pc} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,bc=Tn`animation: ${mc} 140ms ease-out;`,xc=Tn`animation: ${hc} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function Sc({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,_.useState)([]),s=(0,_.useRef)(void 0);if((0,_.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,_.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,X.jsx)(Mc,{},`group-rule-${i}`)),n.push((0,X.jsx)(jc,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,X.jsx)(Mc,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,X.jsxs)(Oc,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,X.jsx)(kc,{children:e.loading?(0,X.jsx)(Nc,{}):e.icon}),(0,X.jsx)(Ac,{children:e.label}),a?(0,X.jsx)(os,{size:12}):e.checked&&(0,X.jsx)(ms,{size:12})]},`${e.label}-${i}`))}),n};return(0,sc.createPortal)((0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(Cc,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(wc,{children:r.map((e,t)=>(0,X.jsxs)(Tc,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,X.jsx)(Ec,{children:e.icon}),(0,X.jsx)(Dc,{children:e.label})]},`${e.label}-${t}`))}),(0,X.jsx)(Mc,{})]}),m(n,0)]}),a.map((e,t)=>(0,X.jsx)(Cc,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var Cc=J.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${cc}
    ${_c}
    transform-origin: top left;
`,wc=J.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,Tc=J.button`
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
`,Ec=J.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,Dc=J.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Oc=J.button`
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
`,kc=J.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Ac=J.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,jc=J.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Mc=J.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,Nc=J.span`
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
`;function Pc({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:o,onOpenFile:s,onRename:c,onDelete:l,onCopy:u,onPaste:d,onCreateFolder:f,onCreateFile:p,creationOnly:m=!1,onRefresh:h,onAddToTray:g,allowCompression:v=!1,onCompressTo:y,onArchiveCreated:b}){let x=Kn(),S=Da(t),[C,w]=(0,_.useState)({verbs:[],safe:!0,loading:!1}),[T,E]=(0,_.useState)({recommended:[],other:[],loading:!1}),[D,O]=(0,_.useState)(null),k=(0,_.useRef)(0),ee=(0,_.useRef)(0),A=e?.paths.length===1,te=e?.background?t?[t]:[]:e?.paths??[];if((0,_.useEffect)(()=>{if(!e){w({verbs:[],safe:!0,loading:!1}),E({recommended:[],other:[],loading:!1});return}let t=++k.current;w({verbs:[],safe:!0,loading:te.length>0&&!S}),te.length>0&&!S&&gi(te).then(e=>{k.current===t&&w({...e,loading:!1})},()=>{k.current===t&&w({verbs:[],safe:!0,loading:!1})});let r=++ee.current;!S&&A&&n&&!n.isDirectory?(E({recommended:[],other:[],loading:!0}),di(n.path).then(e=>{ee.current===r&&E({...e,loading:!1})},()=>{ee.current===r&&E({recommended:[],other:[],loading:!1})})):E({recommended:[],other:[],loading:!1})},[e,A,n?.path,n?.isDirectory,te.length,S]),(0,_.useEffect)(()=>{if(!e||e.background||!A||!n?.isDirectory){O(null);return}let t=!0;return ii(n.path).then(e=>{t&&O(e)},()=>{t&&O(null)}),()=>{t=!1}},[e,A,n?.path,n?.isDirectory]),!e)return null;let j=[],M=[],N=()=>{if(!A||!n)return`Archive`;let e=Ca(n.path);if(n.isDirectory)return e;let t=e.lastIndexOf(`.`);return t>0?e.slice(0,t):e},P=async e=>{let n=await vi(e,{directory:t,name:N(),format:`zip`,level:5});n.ok&&n.path?b?.(n.path,!0):window.alert(n.error??x(`Could not create the archive.`))},F=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},I=async()=>{if(!n||D===null)return;let e=await ai(n.path,!D);e.ok?(O(e.enabled),h?.()):window.alert(e.error??x(`Could not change the case sensitivity.`))},ne=async e=>{if(!n)return;let r=await ic(t);if(!r)return;let i=n.path.replace(/[\\/]+$/,``).split(/[\\/]/).pop()??`link`,a=await oi(e,n.path,`${r.replace(/[\\/]+$/,``)}\\${i} - link`);for(let t=2;!a.ok&&/exist/i.test(a.error??``)&&t<=99;t++)a=await oi(e,n.path,`${r.replace(/[\\/]+$/,``)}\\${i} - link ${t}`);a.ok?h?.():window.alert(a.error??x(`Could not create the link.`))};if(e.background){if(f&&M.push({label:x(`New folder`),icon:(0,X.jsx)(rs,{size:16}),shortcut:Ei(r.newFolder),onSelect:f}),p||f){let e=[];f&&(e.push({label:x(`Folder`),icon:(0,X.jsx)(Zo,{size:14}),onSelect:()=>f(!1)}),S||e.push({label:x(`Case-sensitive folder`),icon:(0,X.jsx)(Zo,{size:14}),onSelect:()=>f(!0)})),p&&e.push(...oc.map((e,t)=>({label:`${x(e.label)} (${e.extension})`,icon:(0,X.jsx)(Qo,{size:14}),separatorBefore:t===0,onSelect:()=>p(e.extension)}))),j.push({label:x(`New`),icon:(0,X.jsx)(rs,{size:14}),children:e,onSelect:()=>void 0})}if(m)return(0,X.jsx)(Sc,{items:j,onClose:a,quick:M,x:e.x,y:e.y});!S&&v&&(j.push({label:x(`Open in Terminal`),icon:(0,X.jsx)(Gs,{size:14}),onSelect:()=>void ui(t)}),j.push({label:x(`Show in Explorer`),icon:(0,X.jsx)(Zo,{size:14}),separatorBefore:!0,onSelect:()=>void hi(t)})),d&&M.push({label:x(`Paste`),icon:(0,X.jsx)(Qs,{size:16}),disabled:!i,shortcut:Ei(r.paste),onSelect:()=>d(t)}),h&&M.push({label:x(`Refresh`),icon:(0,X.jsx)(ns,{size:16}),shortcut:Ei(r.refresh),onSelect:h}),S||M.push({label:x(`Properties`),icon:(0,X.jsx)(ss,{size:16}),shortcut:Ei(r.properties),onSelect:()=>void ci([t])})}else{if(o&&j.push({label:x(`Open`),icon:(0,X.jsx)(as,{size:14}),onSelect:()=>{n?.isDirectory?o(n.path):n&&s?.(n.path)}}),n?.isDirectory&&(o&&j.push({label:x(`Open in new tab`),icon:(0,X.jsx)(rs,{size:14}),onSelect:()=>o(n.path,!0)}),d&&j.push({label:x(`Paste into folder`),icon:(0,X.jsx)(Qs,{size:14}),disabled:!i,onSelect:()=>d(n.path)}),S||j.push({label:x(`Open in Terminal`),icon:(0,X.jsx)(Gs,{size:14}),onSelect:()=>void ui(n.path)})),!S&&A&&n&&!n.isDirectory){let e=[];if(T.loading)e.push({label:x(`Loading apps…`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of T.recommended)e.push({label:t.name,group:x(`Suggested apps`),icon:t.icon?(0,X.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,X.jsx)(ws,{size:14}),onSelect:()=>void fi(n.path,t.path).then(e=>{e||li(n.path)})});for(let t of T.other)e.push({label:t.name,group:x(`Other apps`),icon:t.icon?(0,X.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,X.jsx)(ws,{size:14}),onSelect:()=>void fi(n.path,t.path).then(e=>{e||li(n.path)})})}e.push({label:x(`Choose another app…`),icon:(0,X.jsx)(ws,{size:14}),separatorBefore:!0,onSelect:()=>void li(n.path)}),j.push({label:x(`Open with`),icon:(0,X.jsx)(ws,{size:14}),children:e,onSelect:()=>void li(n.path)})}if(S||(j.push({label:x(`Compress to ZIP`),icon:(0,X.jsx)(Ss,{size:14}),separatorBefore:!0,onSelect:()=>void P(e.paths)}),j.push({label:x(`Compress to…`),icon:(0,X.jsx)(Ss,{size:14}),onSelect:()=>y?.(e.paths,N())})),!S&&A&&n){let e=n.isDirectory?[{label:x(`Symbolic link`),icon:(0,X.jsx)(Zo,{size:14}),onSelect:()=>void ne(`symbolic-folder`)},{label:x(`Directory junction`),icon:(0,X.jsx)(Zo,{size:14}),onSelect:()=>void ne(`junction`)}]:[{label:x(`Symbolic link`),icon:(0,X.jsx)(Qo,{size:14}),onSelect:()=>void ne(`symbolic-file`)},{label:x(`Hard link`),icon:(0,X.jsx)(Qo,{size:14}),onSelect:()=>void ne(`hard`)}];j.push({label:x(`Create link`),icon:(0,X.jsx)($s,{size:14}),children:e,onSelect:()=>void 0})}!S&&n?.isDirectory&&D!==null&&j.push({label:x(`Case-sensitive names`),icon:(0,X.jsx)(Zo,{size:14}),checked:D,onSelect:()=>void I()}),j.push({label:x(`Copy as path`),icon:(0,X.jsx)(Xs,{size:14}),onSelect:()=>void F(e.paths)}),g&&j.push({label:x(`Add to file tray`),icon:(0,X.jsx)(qs,{size:14}),onSelect:()=>g(e.paths)}),S||j.push({label:x(`Show in Explorer`),icon:(0,X.jsx)(Zo,{size:14}),separatorBefore:!0,onSelect:()=>void hi(e.paths[0])}),u&&M.push({label:x(`Cut`),icon:(0,X.jsx)(Zs,{size:16}),shortcut:Ei(r.cut),onSelect:()=>u(e.paths,!0)},{label:x(`Copy`),icon:(0,X.jsx)(Xs,{size:16}),shortcut:Ei(r.copy),onSelect:()=>u(e.paths,!1)}),A&&n&&c&&M.push({label:x(`Rename`),icon:(0,X.jsx)(Ms,{size:16}),shortcut:Ei(r.rename),onSelect:()=>c(n.path)}),l&&M.push({label:x(`Delete`),icon:(0,X.jsx)(ps,{size:16}),danger:!0,shortcut:Ei(r.delete),onSelect:()=>l(e.paths)}),S||M.push({label:x(`Properties`),icon:(0,X.jsx)(ss,{size:16}),shortcut:Ei(r.properties),onSelect:()=>void ci(e.paths)})}if(C.loading)j.push({label:x(`More actions`),icon:(0,X.jsx)(ws,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(C.verbs.length>0){let e={items:[],children:new Map};for(let t of C.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,X.jsx)(Fc,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void _i(te,C.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];j.push({label:x(C.safe?`More actions`:`More actions (extensions)`),icon:(0,X.jsx)(ws,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,X.jsx)(Sc,{items:j,onClose:a,quick:M,x:e.x,y:e.y})}function Fc({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,X.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,X.jsx)(as,{size:14});case`document`:return(0,X.jsx)(As,{size:14});case`cut`:return(0,X.jsx)(Zs,{size:14});case`copy`:return(0,X.jsx)(Xs,{size:14});case`paste`:return(0,X.jsx)(Qs,{size:14});case`trash`:return(0,X.jsx)(ps,{size:14});case`pencil`:return(0,X.jsx)(Ms,{size:14});case`gear`:return(0,X.jsx)(ss,{size:14});case`star`:return(0,X.jsx)(zs,{size:14});case`pin`:return(0,X.jsx)(cs,{size:14});case`executable`:return(0,X.jsx)(ws,{size:14});case`share`:return(0,X.jsx)($s,{size:14});case`arrow`:return(0,X.jsx)(as,{size:14});default:return(0,X.jsx)(gs,{size:14})}}function Ic({value:e,options:t,onChange:n,disabled:r,width:i,zIndex:a=3200}){let[o,s]=(0,_.useState)(null),c=(0,_.useRef)(null),l=t.find(t=>t.value===e)??t[0];return(0,_.useEffect)(()=>{if(!o)return;let e=()=>s(null),t=t=>{let n=t.target;n instanceof Node&&c.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[o]),(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(Lc,{"aria-expanded":o!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(o){s(null);return}let e=c.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;s({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:c,style:i?{width:i}:void 0,title:l?.title,type:`button`,children:[(0,X.jsx)(Rc,{children:l?.label??``}),(0,X.jsx)(zc,{children:(0,X.jsx)(os,{size:11})})]}),o&&(0,sc.createPortal)((0,X.jsx)(Bc,{"aria-label":`options`,"data-select-menu":`true`,$menuZIndex:a,role:`listbox`,style:{bottom:o.bottom,left:o.left,minWidth:o.width,top:o.top},children:t.map(t=>(0,X.jsxs)(Vc,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),s(null)},role:`option`,title:t.title,type:`button`,children:[(0,X.jsx)(Hc,{children:t.label}),t.value===e&&(0,X.jsx)(ms,{size:11})]},t.value))}),document.body)]})}var Lc=J.button`
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    min-width: 120px;
    height: 32px;
    padding: 0 9px 0 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;
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
`,Rc=J.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,zc=J.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Bc=J.div`
    position: fixed;
    z-index: ${({$menuZIndex:e})=>e};
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-width: min(520px, 90vw);
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 44px rgba(2, 6, 23, 0.55);
    ${_c}
`,Vc=J.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 14px;
    padding: 7px 9px;
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
        outline-offset: -2px;
    }
`,Hc=J.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Uc=[{value:`zip`,label:`ZIP archive`,extension:`.zip`,level:!0},{value:`7z`,label:`7z archive (LZMA2)`,extension:`.7z`,level:!1},{value:`tar`,label:`TAR archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`TAR + GZip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`TAR + BZip2`,extension:`.tar.bz2`,level:!1}],Wc=[{value:`0`,label:`Store (no compression)`},{value:`1`,label:`Fastest`},{value:`5`,label:`Normal`},{value:`9`,label:`Maximum`},{value:`-1`,label:`Automatic`}];function Gc({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=Kn(),a=(0,_.useRef)(null),[o,s]=(0,_.useState)(e),[c,l]=(0,_.useState)(t),[u,d]=(0,_.useState)(`zip`),[f,p]=(0,_.useState)(`5`),[m,h]=(0,_.useState)(!1);(0,_.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let g=Uc.find(e=>e.value===u)??Uc[0],v=async()=>{if(m||!c.trim()||!o)return;h(!0);let e=await r({directory:o,name:c.trim(),format:u,level:g.level?Number(f):0});h(!1),e&&n()};return(0,sc.createPortal)((0,X.jsx)(Kc,{onPointerDown:e=>{e.target===e.currentTarget&&!m&&n()},children:(0,X.jsxs)(qc,{"aria-modal":`true`,role:`dialog`,children:[(0,X.jsx)(Jc,{children:i(`Compress to…`)}),(0,X.jsxs)(Yc,{children:[(0,X.jsx)(Xc,{children:i(`Archive name`)}),(0,X.jsx)(Zc,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&v()}}),(0,X.jsx)(Qc,{children:g.extension})]}),(0,X.jsxs)(Yc,{children:[(0,X.jsx)(Xc,{children:i(`Format`)}),(0,X.jsx)(Ic,{onChange:e=>d(e),options:Uc.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,X.jsxs)(Yc,{children:[(0,X.jsx)(Xc,{children:i(`Compression level`)}),(0,X.jsx)(Ic,{disabled:!g.level,onChange:p,options:Wc.map(e=>({...e,label:i(e.label)})),value:g.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,X.jsxs)(Yc,{$stack:!0,children:[(0,X.jsx)(Xc,{children:i(`Destination`)}),(0,X.jsxs)($c,{children:[(0,X.jsx)(el,{title:o,children:o}),(0,X.jsx)(nl,{disabled:m,onClick:()=>void ic(o).then(e=>{e&&s(e)}),type:`button`,children:i(`Choose folder…`)})]})]}),(0,X.jsxs)(tl,{children:[(0,X.jsx)(nl,{disabled:m,onClick:n,type:`button`,children:i(`Cancel`)}),(0,X.jsx)(rl,{disabled:m||!c.trim(),onClick:()=>void v(),type:`button`,children:i(m?`Compressing…`:`Compress`)})]})]})}),document.body)}var Kc=J.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${bc}
`,qc=J.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${gc}
`,Jc=J.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Yc=J.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,Xc=J.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,Zc=J.input`
    min-width: 0;
    flex: 1;
    height: 32px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    outline: none;
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;

    &:focus { border-color: var(--border-color-focus); }
`,Qc=J.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,$c=J.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,el=J.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,tl=J.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,nl=J.button`
    min-height: 32px;
    padding: 0 11px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font: inherit;
    font-size: 11px;
    cursor: pointer;
    &:hover:not(:disabled) { border-color: var(--border-color-hover); color: var(--text-primary); }
    &:disabled { opacity: 0.5; cursor: default; }
`,rl=J(nl)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function il({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=Kn(),c=(0,_.useRef)(null);return(0,_.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,sc.createPortal)((0,X.jsx)(al,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,X.jsxs)(ol,{role:`alertdialog`,"aria-modal":`true`,children:[(0,X.jsx)(sl,{children:t}),(0,X.jsx)(cl,{children:n}),(0,X.jsxs)(ll,{children:[(0,X.jsx)(ul,{onClick:o,type:`button`,children:s(`Cancel`)}),(0,X.jsx)(ul,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var al=J.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${bc}
`,ol=J.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${gc}
`,sl=J.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,cl=J.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,ll=J.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,ul=J.button`
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
`,dl=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),fl=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),pl=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),ml=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function hl({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=Kn(),[l,u]=(0,_.useState)(!1),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(!1),[h,g]=(0,_.useState)(0),[v,y]=(0,_.useState)(0),[b,x]=(0,_.useState)(null),[S,C]=(0,_.useState)(!1),[w,T]=(0,_.useState)(!1),E=(0,_.useRef)(null),D=(0,_.useRef)(null),O=e?.path??null,k=e?gl(e.name):``,ee=!!e&&!e.isDirectory&&dl.has(k),A=!!e&&!e.isDirectory&&fl.has(k),te=!!e&&!e.isDirectory&&pl.has(k),j=!!e&&!e.isDirectory&&ml.has(k),M=!!e&&!e.isDirectory&&k===`pdf`,N=Hi(ee?O:null,512,e?.modified??0),P=Ui(te?O:null,e?.modified??0,k),F=Ui(ee||A?O:null,e?.modified??0,k),I=Wi(M?O:null,e?.modified??0),ne=Li(!ee&&!A&&!te&&!j&&!M?O:null,e?.isDirectory??!1);if((0,_.useEffect)(()=>{u(!1),f(!1),m(!1),g(0),y(0),T(!1)},[O]),(0,_.useEffect)(()=>{if(!O||!j){x(null),C(!1);return}let e=!0;return C(!0),x(null),dr(O).then(t=>{e&&(x(t),C(!1))},()=>{e&&(x({text:null,truncated:!1,error:`Could not read this file.`}),C(!1))}),()=>{e=!1}},[O,j]),!e&&!s)return null;let L=e=>{D.current={x:e.clientX,width:t},e.currentTarget.setPointerCapture(e.pointerId)},R=e=>{let t=D.current;t&&n(Math.max(220,Math.min(560,t.width+t.x-e.clientX)))},re=e=>{D.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,X.jsxs)(vl,{children:[r&&(0,X.jsx)(yl,{onPointerDown:L,onPointerMove:R,onPointerUp:re,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,X.jsx)(bl,{style:{width:r?t:0},children:(0,X.jsxs)(xl,{children:[(0,X.jsx)(Zo,{size:56}),(0,X.jsx)(`span`,{children:s})]})})]});let ie=()=>{let e=E.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,X.jsxs)(vl,{children:[r&&(0,X.jsx)(yl,{onPointerDown:L,onPointerMove:R,onPointerUp:re,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,X.jsxs)(bl,{style:{width:r?t:0},children:[(0,X.jsx)(Sl,{children:ee&&F&&!l?(0,X.jsxs)(Cl,{onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),children:[(0,X.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:ie,onDurationChange:e=>g(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{g(e.currentTarget.duration||0),y(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>y(e.currentTarget.currentTime),playsInline:!0,poster:N??void 0,preload:`metadata`,ref:E,src:F}),!d&&(0,X.jsx)(wl,{onClick:ie,title:c(`Play`),type:`button`,children:(0,X.jsx)(ec,{size:28})}),p&&(0,X.jsxs)(Tl,{onClick:e=>e.stopPropagation(),children:[(0,X.jsxs)(El,{children:[(0,X.jsx)(`span`,{children:_l(v)}),(0,X.jsx)(`span`,{children:_l(h)})]}),(0,X.jsx)(Dl,{"aria-label":c(`Seek`),max:h||0,min:0,onChange:e=>{let t=E.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,y(n)},step:.1,type:`range`,value:Math.min(v,h||0)})]})]}):A&&F?(0,X.jsx)(`audio`,{controls:!0,src:F}):te&&P?(0,X.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:P}):M&&I&&!w?(0,X.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>T(!0),src:I}):M?(0,X.jsx)(Qo,{size:64}):j?(0,X.jsx)(Ol,{children:S||!b?(0,X.jsx)(Al,{children:c(`Loading…`)}):b.error?(0,X.jsx)(Al,{children:b.error}):(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(kl,{children:b.text}),b.truncated&&(0,X.jsx)(Al,{children:c(`Showing the first 256 KB.`)})]})}):ee&&N?(0,X.jsx)(`img`,{alt:``,src:N}):ne?(0,X.jsx)(`img`,{alt:``,src:ne}):e.isDirectory?(0,X.jsx)(Zo,{size:64}):(0,X.jsx)(Qo,{size:64})}),(0,X.jsxs)(jl,{children:[(0,X.jsx)(Ml,{title:e.path,children:e.name}),o&&(0,X.jsx)(Nl,{children:o}),(0,X.jsx)(Pl,{children:e.fields.map(e=>(0,X.jsxs)(Fl,{children:[(0,X.jsx)(Il,{children:e.label}),(0,X.jsx)(Ll,{title:e.value,children:e.value})]},e.label))})]})]})]})}function gl(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function _l(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var vl=J.div`
    display: flex;
    flex-shrink: 0;
    align-self: stretch;
    min-height: 0;
`,yl=J.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,bl=J.aside`
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
    background: var(--bg-secondary);
    transition: width 180ms cubic-bezier(0.22, 1, 0.36, 1);
`,xl=J.div`
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
`,Sl=J.div`
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
`,Cl=J.div`
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
`,wl=J.button`
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
`,Tl=J.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 24px 10px 8px;
    background: linear-gradient(to top, rgba(var(--bg-rgb), 0.92), rgba(var(--bg-rgb), 0));
`,El=J.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,Dl=J.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,Ol=J.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: var(--bg-secondary);
`,kl=J.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,Al=J.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,jl=J.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,Ml=J.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,Nl=J.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,Pl=J.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,Fl=J.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,Il=J.span`
    color: var(--text-muted);
`,Ll=J.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,Rl=[`quick`,`frequent`,`recent`,`home`,`drives`],zl=Rl,Bl={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`},Vl={folder:e=>(0,X.jsx)(Zo,{size:e}),home:e=>(0,X.jsx)(Xo,{size:e}),desktop:e=>(0,X.jsx)(Ns,{size:e}),documents:e=>(0,X.jsx)(Ps,{size:e}),downloads:e=>(0,X.jsx)(Fs,{size:e}),pictures:e=>(0,X.jsx)(Is,{size:e}),music:e=>(0,X.jsx)(Ls,{size:e}),videos:e=>(0,X.jsx)(Rs,{size:e}),drive:e=>(0,X.jsx)($o,{size:e}),image:e=>(0,X.jsx)(ys,{size:e}),video:e=>(0,X.jsx)(bs,{size:e}),audio:e=>(0,X.jsx)(xs,{size:e}),text:e=>(0,X.jsx)(_s,{size:e}),code:e=>(0,X.jsx)(vs,{size:e}),clock:e=>(0,X.jsx)(ds,{size:e}),star:e=>(0,X.jsx)(zs,{size:e}),file:e=>(0,X.jsx)(Qo,{size:e}),archive:e=>(0,X.jsx)(Ss,{size:e}),pdf:e=>(0,X.jsx)(Cs,{size:e}),executable:e=>(0,X.jsx)(ws,{size:e}),font:e=>(0,X.jsx)(Ts,{size:e}),database:e=>(0,X.jsx)(Es,{size:e}),config:e=>(0,X.jsx)(Ds,{size:e}),spreadsheet:e=>(0,X.jsx)(Os,{size:e}),presentation:e=>(0,X.jsx)(ks,{size:e}),document:e=>(0,X.jsx)(As,{size:e}),app:e=>(0,X.jsx)(gs,{size:e}),gear:e=>(0,X.jsx)(ss,{size:e}),pin:e=>(0,X.jsx)(cs,{size:e}),trash:e=>(0,X.jsx)(ps,{size:e}),overview:e=>(0,X.jsx)(js,{size:e}),book:e=>(0,X.jsx)(Bs,{size:e}),briefcase:e=>(0,X.jsx)(Vs,{size:e}),cloud:e=>(0,X.jsx)(Hs,{size:e}),gamepad:e=>(0,X.jsx)(Us,{size:e}),camera:e=>(0,X.jsx)(Ws,{size:e}),terminal:e=>(0,X.jsx)(Gs,{size:e}),server:e=>(0,X.jsx)(Ks,{size:e}),package:e=>(0,X.jsx)(qs,{size:e}),globe:e=>(0,X.jsx)(Js,{size:e}),heart:e=>(0,X.jsx)(Ys,{size:e})};function Hl(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function Ul(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??Rl)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||zl.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=Hl(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${Bl[n]??n}${Wl(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Wl(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Gl({panel:e,size:t=16}){let n=Ri(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,X.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?Vl[e.icon]:void 0;if(r)return(0,X.jsx)(X.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,X.jsx)(Zo,{size:t});case`recent`:return(0,X.jsx)(ds,{size:t});case`frequent`:return(0,X.jsx)(zs,{size:t});case`drives`:return(0,X.jsx)($o,{size:t});case`home`:return(0,X.jsx)(Xo,{size:t});default:return(0,X.jsx)(Zo,{size:t})}}function Kl({place:e,size:t=18}){let n=Ri(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,X.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&Vl[e.icon]?(0,X.jsx)(X.Fragment,{children:Vl[e.icon](t)}):(0,X.jsx)(Zo,{size:t})}var ql=`#64748b`;function Jl(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Yl({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=Kn(),[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)(`#2dd4bf`),f=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},v=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},y=Math.max(8,Math.min(e,window.innerWidth-272)),b=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,sc.createPortal)((0,X.jsxs)(Xl,{"data-tag-menu":`true`,ref:f,style:{left:y,top:b},children:[(0,X.jsxs)(Zl,{children:[(0,X.jsx)(`span`,{children:s(`Tags`)}),(0,X.jsx)(Ql,{onClick:o,title:s(`Close`),type:`button`,children:(0,X.jsx)(hs,{size:11})})]}),(0,X.jsxs)($l,{children:[p.length===0&&(0,X.jsx)(ru,{children:s(`No tags yet.`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,X.jsxs)(eu,{children:[(0,X.jsx)(tu,{"aria-label":s(`Color of {tag}`,{tag:e}),onChange:t=>g(e,t.target.value),title:s(`Change this tag's color`),type:`color`,value:t}),(0,X.jsxs)(nu,{$color:t,$ink:Jl(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,X.jsx)(ms,{size:11}),(0,X.jsx)(`span`,{children:e})]})]},e)})]}),(0,X.jsxs)(iu,{children:[(0,X.jsx)(tu,{"aria-label":s(`Color of the new tag`),onChange:e=>d(e.target.value),title:s(`Color of the new tag`),type:`color`,value:u}),(0,X.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),v())},placeholder:s(`New tag`),spellCheck:!1,value:c}),(0,X.jsx)(au,{onClick:v,type:`button`,children:s(`Add`)})]})]}),document.body)}var Xl=J.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    ${gc}
`,Zl=J.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,Ql=J.button`
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
`,$l=J.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,eu=J.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,tu=J.input`
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
`,nu=J.button`
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
`,ru=J.span`
    font-size: 11px;
    color: var(--text-muted);
`,iu=J.div`
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
`,au=J.button`
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
`,ou={file:Qo,folder:Zo,text:_s,code:vs,image:ys,video:bs,audio:xs,archive:Ss,pdf:Cs,executable:ws,font:Ts,database:Es,config:Ds,spreadsheet:Os,presentation:ks,document:As},su={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function cu(e){let t=e.lastIndexOf(`.`);return t>0?su[e.slice(t).toLowerCase()]??`file`:`file`}function lu({name:e,size:t}){let n=ou[e??`file`]??Qo;return(0,X.jsx)(n,{size:t})}function uu({path:e,name:t,isDirectory:n,size:r=18}){let i=Li(e,n);return i?(0,X.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,X.jsx)(Zo,{size:r}):(0,X.jsx)(lu,{name:cu(t),size:r})}var du=`application/x-yafm-paths`,fu=[du,`text/uri-list`];function pu(e){return e?.types.some(e=>fu.includes(e.toLowerCase()))??!1}function mu(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(du);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(gu).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var hu=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function gu(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return hu?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function _u(e,t,n=!0){e.dataTransfer.setData(du,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function vu({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let p=Kn(),[m,h]=(0,_.useState)(()=>new Set),[g,v]=(0,_.useState)(!1),y=(0,_.useRef)(null),b=(0,_.useMemo)(()=>e.filter(e=>m.has(e.path)),[e,m]),x=(0,_.useMemo)(()=>t.filter(e=>m.has(e.path)),[t,m]),S=(0,_.useRef)(null);if((0,_.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=S.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&pu(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=mu(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let C=new Set([...e,...t].map(e=>e.path)),w=C.size>0&&[...C].every(e=>m.has(e)),T=C.size,E=e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},D=()=>{h(w?new Set:C)},O=e=>{y.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),v(!0)},k=e=>{let t=y.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},ee=e=>{y.current&&(y.current=null,v(!1),e.currentTarget.releasePointerCapture(e.pointerId))},A=()=>{let e=b.map(e=>e.path);e.length!==0&&(c(e),h(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},te=()=>{let e=b.map(e=>e.path);e.length!==0&&d(e)},j=()=>{let e=new Map;for(let t of b)e.set(t.path,!0);for(let t of x)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),h(new Set)},M=(e,t)=>{let n=m.has(e.path);return(0,X.jsxs)(Au,{$checked:n,draggable:!0,onClick:()=>E(e.path),onDragStart:r=>{_u(r,n&&m.size>0?[...new Set([...b,...x].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,X.jsx)(ju,{$checked:n,onClick:t=>{t.stopPropagation(),E(e.path)},type:`button`,children:n&&(0,X.jsx)(ms,{size:8})}),(0,X.jsx)(uu,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,X.jsxs)(Mu,{children:[(0,X.jsx)(Nu,{children:e.name}),(0,X.jsx)(Pu,{children:wa(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},N=e=>{pu(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,X.jsxs)(yu,{$dragging:g,"data-tray":`true`,ref:S,style:{left:i.x,top:i.y},onDragEnter:N,onDragOver:N,onDrop:e=>{let{paths:t}=mu(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,X.jsxs)(bu,{onPointerDown:O,onPointerMove:k,onPointerUp:ee,children:[(0,X.jsxs)(xu,{children:[(0,X.jsx)(qs,{size:13}),p(`Tray`),(0,X.jsx)(Su,{children:T})]}),(0,X.jsxs)(Cu,{onPointerDown:e=>e.stopPropagation(),children:[(0,X.jsx)(wu,{onClick:D,title:p(w?`Select none`:`Select all`),type:`button`,children:p(w?`None`:`All`)}),(0,X.jsx)(wu,{onClick:l,title:p(`Remove everything from the tray`),type:`button`,children:p(`Clear`)}),(0,X.jsx)(Tu,{onClick:u,title:p(`Hide the tray`),type:`button`,children:(0,X.jsx)(hs,{size:10})})]})]}),(0,X.jsxs)(Eu,{children:[(0,X.jsxs)(Ou,{children:[p(`In this app`),(0,X.jsx)(Su,{children:e.length})]}),e.length===0&&(0,X.jsx)(Du,{children:p(`Drag files or folders here`)}),e.map(e=>M(e,!0)),t.length>0&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(Ou,{$clipboard:!0,children:[p(`Clipboard`),(0,X.jsx)(Su,{children:t.length}),n&&(0,X.jsx)(ku,{children:p(`cut`)})]}),t.map(e=>M(e,n))]})]}),(0,X.jsxs)(Fu,{children:[(0,X.jsx)(Iu,{$plain:!0,disabled:b.length===0,onClick:te,title:p(`Write the selected tray entries to the system clipboard`),type:`button`,children:p(`To clipboard`)}),(0,X.jsx)(Iu,{disabled:m.size===0||!a,onClick:j,type:`button`,children:p(`Move here`)}),(0,X.jsx)(Iu,{$danger:!0,disabled:b.length===0,onClick:A,type:`button`,children:p(`Remove`)})]})]})}var yu=J.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${cc}
    ${gc}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,bu=J.div`
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
`,xu=J.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,Su=J.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,Cu=J.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,wu=J.button`
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
`,Tu=J.button`
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
`,Eu=J.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,Du=J.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,Ou=J.div`
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
`,ku=J.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,Au=J.div`
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
`,ju=J.button`
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
`,Mu=J.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,Nu=J.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Pu=J.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Fu=J.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,Iu=J.button`
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
`,Lu=60,Ru=300,zu=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],Bu=190,Vu=120;function Hu({listing:e,loading:t,error:n,find:r=Ki,view:i,showImages:a,imageStripHeight:o=Bu,onImageStripHeight:s,onSort:c,onSetTags:l,onOpen:u,onOpenFile:d,showCheckboxes:f=!0,openOnSingleClick:p=!1,shortcuts:m=xi,enableShortcuts:h=!0,refreshToken:g=0,onRefresh:v,onClipboardChanged:y,onTransfer:b,onAddToTray:x,onPaste:S,confirmDelete:C=!1,previewVideoAudio:w=!1,previewVideoAutoplay:T=!1,showDetails:E=!0,onPreviewInfo:D,onActivate:O,groupOf:k,onGridScroll:ee,gridFooter:A,allowBackgroundMenu:te=!0,readOnly:j=!1,onSelectionChange:M,singleSelect:N=!1,pendingRename:P=null,pendingRenameToken:F=0}){let I=Kn(),ne=Fa(),L=(0,_.useRef)(null),R=(0,_.useRef)(null),re=(0,_.useRef)(null),[ie,z]=(0,_.useState)(Ru),[ae,oe]=(0,_.useState)({top:0,height:640}),se=(0,_.useRef)(null),B=(0,_.useRef)(null),[ce,le]=(0,_.useState)(null),[V,H]=(0,_.useState)(o),[U,ue]=(0,_.useState)(()=>new Set),de=(0,_.useRef)(U),fe=(0,_.useRef)([]);de.current=U,(0,_.useEffect)(()=>M?.([...U]),[U,M]);let[W,pe]=(0,_.useState)(null),[me,he]=(0,_.useState)(null),[ge,_e]=(0,_.useState)(null),[ve,ye]=(0,_.useState)(null),be=(0,_.useRef)(ve);be.current=ve;let xe=(0,_.useRef)(0),Se=(0,_.useRef)(O);Se.current=O;let[Ce,we]=(0,_.useState)(()=>{let e=Ra(`yafm.preview.width`,320);return e>=220?e:320}),Te=(0,_.useCallback)(e=>{we(e),za(`yafm.preview.width`,e)},[]),[Ee,De]=(0,_.useState)(!1);(0,_.useEffect)(()=>{ue(new Set),ye(null),pe(null),B.current=null},[e?.path]),(0,_.useEffect)(()=>{H(o)},[o]),(0,_.useEffect)(()=>{ue(new Set),ye(null),B.current=null},[g]);let G=e=>{se.current={y:e.clientY,height:V},e.currentTarget.setPointerCapture(e.pointerId)},Oe=e=>{let t=se.current;if(!t)return;let n=Math.max(Vu,Math.round(window.innerHeight*.7));H(Math.min(n,Math.max(Vu,t.height+t.y-e.clientY)))},ke=e=>{se.current&&(se.current=null,e.currentTarget.releasePointerCapture(e.pointerId),s?.(V))},Ae=()=>{H(Bu),s?.(Bu)},je=r.query.length>0,Me=(0,_.useMemo)(()=>zu.filter(e=>i.columns?.includes(e.id)),[i.columns]),Ne=i.columns?.includes(`linkTarget`)??!1,Pe=(0,_.useMemo)(()=>`minmax(160px, 1fr) ${Me.map(e=>`${e.width}px`).join(` `)}`.trim(),[Me]),Fe=(0,_.useMemo)(()=>e?Gu(e.entries.map(t=>{let n=t.isDirectory?Ia(ne,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:je?qi(i,r):null,tags:e.tags[t.name]??[]}}).filter(e=>!je||r.mode===`dim`||e.ranges!==null),i,e,I):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,je,r,ne,i.sort,i.sortDescending,I]);fe.current=Fe;let Ie=Math.max(40,i.iconSize+20),Le=Math.max(0,Math.floor(ae.top/Ie)-4),Re=Math.min(Fe.length,Le+Math.ceil(ae.height/Ie)+10),ze=(0,_.useMemo)(()=>Fe.slice(Le,Re),[Fe,Le,Re]);(0,_.useEffect)(()=>{let e=re.current;if(!e||i.mode!==`list`)return;let t=()=>oe(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,_.useEffect)(()=>{oe(e=>({...e,top:0})),re.current&&(re.current.scrollTop=0)},[e?.path]),(0,_.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=Fe.findIndex(e=>e.entry.fullPath===r.currentPath),t=re.current;if(e<0||!t)return;let n=e*Ie;(n<t.scrollTop||n+Ie>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else L.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,Fe,Ie]);let K=(0,_.useMemo)(()=>Fe.slice(0,ie),[Fe,ie]);(0,_.useEffect)(()=>{z(Ru)},[e?.path]),(0,_.useEffect)(()=>{if(!r.currentPath)return;let e=Fe.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&z(t=>Math.max(t,e+Ru))},[r.currentPath,Fe]);let q=(0,_.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&z(e=>Math.min(Fe.length,e+Ru))},[Fe.length]),Be=i.mode===`grid`,Ve=(0,_.useMemo)(()=>{if(!Be)return[];if(!k)return Ju(K,qu);let e=[],t=new Map;for(let n of K){let r=k(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[K,Be,k]),He=(0,_.useMemo)(()=>a?Fe.filter(e=>!e.entry.isDirectory&&ia(e.entry.name)):[],[Fe,a]),Ue=He.length,We=(0,_.useMemo)(()=>He.slice(0,Lu),[He]),Ge=(0,_.useMemo)(()=>a?Ju(We,Ku):[],[We,a]),Ke=(0,_.useMemo)(()=>Fe.map(e=>e.entry.fullPath),[Fe]),qe=Fe.length>0&&U.size>=Fe.length,Je=U.size>0&&!qe,Ye=()=>{N||(qe?$e():ue(new Set(Ke)))},Xe=e?.path??``,Ze=(0,_.useCallback)((e,t)=>{if(N){B.current=t,ue(new Set([t]));return}let n=e.ctrlKey||e.metaKey;ue(r=>{if(e.shiftKey&&B.current!==null){let e=Ke.indexOf(B.current),i=Ke.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(Ke[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),B.current=t,e}return B.current=t,new Set([t])})},[Ke,N]),Qe=(0,_.useCallback)(e=>{N?(B.current=e,ue(new Set([e]))):(B.current=e,ue(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[N]),$e=(0,_.useCallback)(()=>{B.current=null,ue(new Set)},[]);(0,_.useEffect)(()=>{if(F===0||!P||xe.current===F||!e?.entries.some(e=>e.fullPath===P))return;xe.current=F,B.current=P,ue(new Set([P])),ye({path:P,value:Ca(P)});let t=Fe.findIndex(e=>e.entry.fullPath===P),n=re.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*Ie;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(P)}"]`)?.scrollIntoView({block:`nearest`})})}},[re,e,P,F,Ie,Fe,i.mode]),(0,_.useEffect)(()=>{if(!ve)return;let e=Fe.findIndex(e=>e.entry.fullPath===ve.path),t=re.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*Ie;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(ve.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[re,ve,Ie,Fe,i.mode]);let et=(0,_.useCallback)(()=>pe(null),[]),tt=(0,_.useCallback)((e,t)=>{e.isDirectory?u(e.fullPath,wi(t)):d?.(e.fullPath)},[u,d]),nt=(0,_.useCallback)((e,t,n)=>{le({entry:e,x:t,y:n})},[]),rt=(0,_.useRef)(null),it=(0,_.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;_u(e,U.has(n)?[...U]:[n])},[U]),at=(0,_.useCallback)(e=>{if(!pu(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);rt.current=t?.dataset.directory===`true`?t.dataset.path??Xe:Xe,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[Xe]),ot=(0,_.useCallback)(e=>{if(j)return;let{paths:t,move:n}=mu(e),r=rt.current??Xe;rt.current=null,t.length!==0&&b&&(e.preventDefault(),b(t,r,!e.ctrlKey&&n))},[Xe,b,j]),st=(0,_.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),j||!t&&!te)return;let n=de.current;t&&!n.has(t)&&ue(new Set([t])),t&&(B.current=t);let r=t?n.has(t)?[...n]:[t]:[];pe({x:e.clientX,y:e.clientY,paths:r,background:!t}),Xr().then(De,()=>De(!1))},[te,Xe]),ct=(0,_.useCallback)(()=>v?.(),[v]),lt=(e,t)=>{B.current=e,ue(new Set([e])),t&&ye({path:e,value:Ca(e)}),ct()},ut=me&&(0,X.jsx)(Gc,{initialDirectory:Xe,initialName:me.name,onCancel:()=>he(null),onCompress:async e=>{let t=await vi(me.paths,e);return!t.ok||!t.path?(window.alert(t.error??I(`Could not create the archive.`)),!1):(lt(t.path,!1),!0)}}),dt=async(e,t=!1)=>{await Yr(e,t)&&(De(!0),y?.())},ft=async e=>{e&&(await ei(e)?(ct(),S?.()):window.alert(I(`Nothing on the clipboard could be pasted here.`)))},pt=async(e,t=!1)=>{if(!Xe)return;let n=e===null?await ri(Xe,t):await si(Xe,e);!n.ok||n.path===null?window.alert(n.error??I(`Could not create the item.`)):(B.current=n.path,ue(new Set([n.path])),ye({path:n.path,value:Ca(n.path)}),ct())},mt=e=>{ue(new Set([e.fullPath])),B.current=e.fullPath,ye({path:e.fullPath,value:e.name})},ht=(0,_.useCallback)(e=>ye(t=>t&&{...t,value:e}),[]),gt=(0,_.useCallback)(()=>ye(null),[]),_t=(0,_.useCallback)(async()=>{let e=be.current;if(ye(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=fe.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await ni(e.path,t);r.ok?($e(),ct()):window.alert(r.error??I(`Could not rename the entry.`))},[$e,ct,I]),vt=async(e,t=!1)=>{if((t||C)&&!await yt(e,t))return;let n=await ti(e,t);if(!n.ok&&n.needsPermanent){if(!await yt(e,!0))return;n=await ti(e,!0)}if(n.ok)$e(),ct();else{if(n.cancelled)return;window.alert(n.error??I(t?`Could not delete the selection.`:`Could not move the selection to the recycle bin.`))}},yt=(0,_.useCallback)((e,t)=>new Promise(n=>_e({paths:e,permanent:t,resolve:n})),[]),bt=(0,_.useCallback)(e=>{_e(t=>(t?.resolve(e),null))},[]);(0,_.useEffect)(()=>{if(!h||W)return;let e=e=>{if(Oi(e.target))return;Se.current?.();let t=Ti(e),n=[...U],r=n.length===1?Fe.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(Ke.length===0)return;e.preventDefault();let n=B.current&&Ke.includes(B.current)?B.current:U.size===1?[...U][0]:null,r=n?Ke.indexOf(n):-1,i=t===`home`?0:t===`end`?Ke.length-1:Math.max(0,Math.min(Ke.length-1,r+(t===`arrowdown`?1:-1))),a=Ke[i];ue(new Set([a])),B.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===m.copy?i(()=>{n.length>0&&dt(n)}):t===m.cut?i(()=>{n.length>0&&dt(n,!0)}):t===m.paste?i(()=>void ft(Xe)):t===m.delete?i(()=>{n.length>0&&vt(n)}):t===m.deletePermanently?i(()=>{n.length>0&&vt(n,!0)}):t===m.selectAll?i(()=>{ue(new Set(Ke)),B.current=Ke[0]??null}):t===m.invertSelection?i(()=>{ue(new Set(Ke.filter(e=>!U.has(e)))),B.current=Ke[0]??null}):t===m.rename&&r?i(()=>void mt(r)):t===m.open&&r?i(()=>{r.isDirectory?u(r.fullPath):d?.(r.fullPath)}):t===m.newFolder||t===`f10`?i(()=>void pt(null)):t===m.terminal?i(()=>void ui(Xe)):t===m.properties?i(()=>void ci(n.length>0?n:Xe?[Xe]:[])):t===m.refresh&&i(ct)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[Ke,dt,pt,Xe,h,W,u,d,ft,ct,vt,mt,Fe,U,m]);let xt=ge&&(0,X.jsx)(il,{confirmLabel:ge.permanent?I(`Delete`):I(`Move`),danger:ge.permanent,message:ge.permanent?I(`Permanently delete {target}? This cannot be undone.`,{target:ge.paths.length===1?I(`this item`):I(`{count} items`,{count:ge.paths.length})}):I(`Move {target} to the recycle bin?`,{target:ge.paths.length===1?I(`this item`):I(`{count} items`,{count:ge.paths.length})}),onCancel:()=>bt(!1),onConfirm:()=>bt(!0),open:!0,title:ge.permanent?I(`Delete permanently`):I(`Move to the recycle bin`)}),St=(0,_.useMemo)(()=>{if(!e||U.size===0)return null;let t=Ke.find(e=>U.has(e));return t?Fe.find(e=>e.entry.fullPath===t)?.entry??null:null},[Ke,e,Fe,U]),Ct=(0,_.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:Ca(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:I(`Type`),value:I(`Folder`)},{label:I(`Location`),value:e.parent??`—`},{label:I(`Path`),value:e.path},{label:I(`Size`),value:sa(t)},{label:I(`Items`),value:oa(I,n,`1 item`,`{count} items`)},{label:I(`Modified`),value:`—`},{label:I(`Created`),value:`—`},{label:I(`Attributes`),value:`—`}]}},[e,I]),wt=(0,_.useMemo)(()=>{if(!St||!e)return null;let t=St.isDirectory?e.folderSizes[St.name]:void 0,n=e.tags[St.name]??[],r=St.name.lastIndexOf(`.`),i=r>0&&r<St.name.length-1?St.name.slice(r+1).toUpperCase():`—`;return{name:St.name,path:St.fullPath,isDirectory:St.isDirectory,size:St.size,modified:St.modified,created:St.created,fields:[{label:I(`Type`),value:Zu(St,I)},{label:I(`Extension`),value:St.isDirectory?`—`:i},{label:I(`Location`),value:e.path},{label:I(`Full path`),value:St.fullPath},{label:I(`Size`),value:St.isDirectory?t===void 0?`—`:sa(t):sa(St.size)},...St.isDirectory?[{label:I(`Items`),value:`${e.counts[St.name]??`—`}`}]:[],{label:I(`Modified`),value:ma(St.modified)},{label:I(`Created`),value:ma(St.created)},{label:I(`Link status`),value:St.linkTarget==null?St.linkCount>1?I(`Hard link`):`—`:St.linkValid?`OK`:I(`Broken`)},...St.linkTarget?[{label:I(`Target`),value:St.linkTarget}]:[],...St.linkCount>1?[{label:I(`Links`),value:String(St.linkCount)}]:[],{label:I(`Attributes`),value:[St.isHidden?I(`Hidden`):``,St.isSystem?I(`System`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:I(`Tags`),value:n.join(`, `)}]:[]]}},[e,St,I]),Tt=W?.paths.length===1?W.paths[0]:null,Et=Tt?Fe.find(e=>e.entry.fullPath===Tt)?.entry:void 0,Dt=Et?{path:Et.fullPath,isDirectory:Et.isDirectory}:null,Ot=wt??Ct,kt=(0,_.useRef)(D);kt.current=D,(0,_.useEffect)(()=>{kt.current?.(Ot)},[D,Ot]);let At=E&&Ot&&(0,X.jsx)(hl,{info:Ot,onWidth:Te,selectionNote:U.size>1?oa(I,U.size,`1 item selected`,`{count} items selected`):void 0,videoAudio:w,videoAutoplay:T,width:Ce});return n&&!e?(0,X.jsx)(Zd,{children:(0,X.jsx)($d,{children:n})}):!e&&!t?(0,X.jsx)(Zd,{children:(0,X.jsx)(Qd,{children:I(`Nothing selected.`)})}):i.mode===`grid`?(0,X.jsxs)(hd,{onPointerDown:O,children:[(0,X.jsxs)(gd,{children:[(0,X.jsxs)(wd,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||$e()},onContextMenu:e=>st(e),onDragOver:at,onDragStart:it,onDrop:ot,onScroll:e=>{ee?.(e.currentTarget),q(e.currentTarget)},children:[f&&Fe.length>0&&(0,X.jsxs)(fd,{children:[(0,X.jsx)(ud,{$checked:!N&&qe,$partial:!N&&Je,"aria-label":I(qe?`Select none`:`Select all`),disabled:N,onClick:Ye,title:I(qe?`Select none`:`Select all`),type:`button`,children:qe?(0,X.jsx)(ms,{size:10}):Je?(0,X.jsx)(dd,{}):null}),(0,X.jsx)(`span`,{children:I(qe?`Select none`:`Select all`)})]}),t&&!e?(0,X.jsx)(kd,{$size:i.gridSize,children:(0,X.jsx)(rd,{size:i.gridSize})}):(0,X.jsx)(ad,{counts:e?.counts,currentPath:je?r.currentPath:null,groups:Ve,gridSize:i.gridSize,innerRef:L,onContextMenu:st,onOpen:u,onOpenFile:d,onRenameCancel:gt,onRenameChange:ht,onRenameCommit:_t,onSelect:Ze,onToggle:Qe,openOnSingleClick:p,renaming:ve,searching:je,selected:U,showCheckboxes:f,showTarget:Ne}),!t&&e&&Fe.length===0&&(0,X.jsx)(Xd,{children:(0,X.jsx)(Qd,{children:n??(je&&r.mode===`hide`?I(`No entries match the search.`):I(`This folder is empty.`))})}),A]}),W&&(0,X.jsx)(Pc,{canPaste:Ee,directory:Xe,allowCompression:!0,menu:W,onAddToTray:x,onArchiveCreated:lt,onClose:et,onCompressTo:(e,t)=>he({paths:e,name:t}),onCopy:dt,onCreateFile:e=>void pt(e),onCreateFolder:e=>void pt(null,e),onDelete:vt,onOpen:u,onOpenFile:d,onPaste:ft,onRefresh:ct,onRename:e=>{let t=Fe.find(t=>t.entry.fullPath===e)?.entry;t&&mt(t)},shortcuts:m,target:Dt}),ut,xt]}),At]}):(0,X.jsxs)(hd,{onPointerDown:O,children:[(0,X.jsxs)(gd,{children:[(0,X.jsxs)(_d,{onScroll:e=>{re.current&&re.current.scrollLeft!==e.currentTarget.scrollLeft&&(re.current.scrollLeft=e.currentTarget.scrollLeft)},ref:R,style:{gridTemplateColumns:Pe},children:[(0,X.jsxs)(ld,{children:[f&&(0,X.jsx)(ud,{$checked:!N&&qe,$partial:!N&&Je,"aria-label":I(qe?`Select none`:`Select all`),disabled:N,onClick:e=>{e.stopPropagation(),Ye()},title:I(qe?`Select none`:`Select all`),type:`button`,children:qe?(0,X.jsx)(ms,{size:10}):Je?(0,X.jsx)(dd,{}):null}),(0,X.jsxs)(vd,{onClick:()=>c(`name`),type:`button`,children:[I(`Name`),Uu(i,`name`)]})]}),Me.map(e=>(0,X.jsxs)(vd,{onClick:()=>c(e.id),type:`button`,children:[I(e.label),Uu(i,e.id)]},e.id))]}),(0,X.jsxs)(yd,{onClick:e=>{e.target===e.currentTarget&&$e()},onContextMenu:e=>st(e),onDragOver:at,onDragStart:it,onDrop:ot,onScroll:e=>{R.current&&R.current.scrollLeft!==e.currentTarget.scrollLeft&&(R.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;oe(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:re,children:[t&&!e?(0,X.jsx)(nd,{template:Pe,columns:Me.length}):(0,X.jsxs)(X.Fragment,{children:[Le>0&&(0,X.jsx)(`div`,{style:{height:Le*Ie}}),ze.map(t=>{let n=t.entry.fullPath;return(0,X.jsx)(sd,{current:je&&n===r.currentPath,dim:je&&t.ranges===null,height:Ie,iconSize:i.iconSize,innerRef:L,listing:e,onContextMenu:st,onOpen:tt,onRenameCancel:gt,onRenameChange:ht,onRenameCommit:_t,onSelect:Ze,onTagEdit:nt,onToggle:Qe,openOnSingleClick:p,renaming:ve?.path===n?{value:ve.value}:null,row:t,selected:U.has(n),showCheckboxes:f,showTarget:Ne,template:Pe,visible:Me},n)}),Re<Fe.length&&(0,X.jsx)(`div`,{style:{height:(Fe.length-Re)*Ie}})]}),!t&&e&&Fe.length===0&&(0,X.jsx)(Zd,{children:(0,X.jsx)(Qd,{children:n??(je&&r.mode===`hide`?I(`No entries match the search.`):I(`This folder is empty.`))})})]}),a&&He.length>0&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(bd,{onDoubleClick:Ae,onPointerDown:G,onPointerMove:Oe,onPointerUp:ke,title:I(`Drag to resize; double-click to reset`)}),(0,X.jsxs)(xd,{style:{height:V},children:[(0,X.jsxs)(Sd,{children:[I(`Preview`),(0,X.jsx)(Cd,{children:Ue>Lu?`${We.length} / ${Ue}`:Ue})]}),(0,X.jsx)(wd,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||$e()},onContextMenu:e=>st(e),children:(0,X.jsx)(ad,{counts:e?.counts,currentPath:je?r.currentPath:null,groups:Ge,gridSize:i.gridSize,onContextMenu:st,onOpen:u,onOpenFile:d,onSelect:Ze,onToggle:Qe,openOnSingleClick:p,searching:je,selected:U,showCheckboxes:f,showTarget:Ne})})]})]}),ce&&e&&(0,X.jsx)(Yl,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>l?.(ce.entry.name,e,t),onClose:()=>le(null),tags:e.tags[ce.entry.name]??[],x:ce.x,y:ce.y}),W&&(0,X.jsx)(Pc,{canPaste:Ee,directory:Xe,allowCompression:!0,menu:W,onAddToTray:x,onArchiveCreated:lt,onClose:et,onCompressTo:(e,t)=>he({paths:e,name:t}),onCopy:dt,onCreateFile:e=>void pt(e),onCreateFolder:e=>void pt(null,e),onDelete:vt,onOpen:u,onOpenFile:d,onPaste:ft,onRefresh:ct,onRename:e=>{let t=Fe.find(t=>t.entry.fullPath===e)?.entry;t&&mt(t)},shortcuts:m,target:Dt}),ut,xt]}),At]})}function Uu(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var Wu=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function Gu(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Zu(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:Wu.compare(String(r),String(i));return t.sortDescending?-o:o})}var Ku=ta.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&ra(t.entry.name)===e})),qu=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...Ku.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function Ju(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function Yu(e){return Math.max(24,Math.min(e-56,160))}var Xu={file:`file`,folder:`folder`,text:`text file`,code:`source file`,image:`image`,video:`video`,audio:`audio`,archive:`archive`,pdf:`PDF`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Zu(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`Shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`Internet shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`Folder link`):t(`Symbolic link`);if(e.isDirectory)return t(`Folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(Xu[cu(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`File`)}function Qu(e,t,n,r){switch(e){case`type`:return Zu(t,r);case`size`:return ed(t,n.folderSizes);case`modified`:return ma(t.modified);case`created`:return ma(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:r(`Broken`);default:return``}}function $u({name:e,ranges:t}){if(!t||t.length===0)return(0,X.jsx)(X.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,X.jsx)(Yd,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,X.jsx)(X.Fragment,{children:n})}function ed(e,t){if(!e.isDirectory)return sa(e.size);let n=t[e.name];return n===void 0?`—`:sa(n)}function td({entry:e,size:t=18}){let n=(0,_.useRef)(null),[r,i]=(0,_.useState)(!1);(0,_.useEffect)(()=>{if(r)return;let e=n.current;if(!e)return;if(!(`IntersectionObserver`in window)){i(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(i(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[r]);let a=Li(r?e.fullPath:null,e.isDirectory,t>32),o=Ri(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,X.jsx)(cd,{$size:t,ref:n,children:e.iconSource?.startsWith(`icon:`)?(0,X.jsx)(lu,{name:e.iconSource.slice(5),size:t}):o?(0,X.jsx)(`img`,{alt:``,height:t,src:o,width:t}):a?(0,X.jsx)(`img`,{alt:``,height:t,src:a,width:t}):e.isDirectory?(0,X.jsx)(Zo,{size:t}):(0,X.jsx)(lu,{name:cu(e.name),size:t})})}function nd({template:e,columns:t}){return(0,X.jsx)(X.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,X.jsxs)(Ad,{style:{gridTemplateColumns:e},children:[(0,X.jsxs)(Nd,{children:[(0,X.jsx)(jd,{style:{flexShrink:0,height:18,width:18}}),(0,X.jsx)(jd,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,X.jsx)(jd,{style:{width:t%2==0?44:92}},t))]},r))})}function rd({size:e}){return(0,X.jsx)(X.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,X.jsxs)(Hd,{$dim:!1,$current:!1,$selected:!1,children:[(0,X.jsx)(Ud,{children:(0,X.jsx)(jd,{style:{height:e,width:e}})}),(0,X.jsx)(Gd,{children:(0,X.jsx)(jd,{style:{height:9,width:`${t}%`}})})]},n))})}var id=(0,_.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:d,onRenameCommit:f,onRenameCancel:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:v,onOpenFile:y}){let b=Kn(),x=Fa(),S=!e.entry.isDirectory&&ia(e.entry.name),C=(0,_.useRef)(null),[w,T]=(0,_.useState)(!1);(0,_.useEffect)(()=>{if(!S||w)return;let e=C.current;if(!e)return;if(!(`IntersectionObserver`in window)){T(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(T(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,w]);let E=Hi(S&&w?e.entry.fullPath:null,192,e.entry.modified),[D,O]=(0,_.useState)(!1),k=e.entry.fullPath,ee=t=>{e.entry.isDirectory?v(k,wi(t)):y?.(k)};return(0,X.jsxs)(Hd,{$current:t,$dim:n,$selected:s,onClick:e=>{m(e,k),l&&ee(e)},onContextMenu:e=>g(e,k),onDoubleClick:e=>{l||ee(e)},ref:e=>{C.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":k,draggable:!u,children:[c&&(0,X.jsx)(md,{$checked:s,onClick:e=>{e.stopPropagation(),h(k)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`Deselect`:`Select`),type:`button`,children:s&&(0,X.jsx)(ms,{size:10})}),(0,X.jsx)(Ud,{children:S&&E&&!D?(0,X.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>O(!0),src:E}):(0,X.jsx)(Wd,{children:e.place&&x.useIcons?(0,X.jsx)(Kl,{place:e.place,size:r}):(0,X.jsx)(td,{entry:e.entry,size:r})})}),(0,X.jsxs)(Gd,{children:[u?(0,X.jsx)(od,{onCancel:()=>p?.(),onChange:e=>d?.(e),onCommit:()=>f?.(),value:u.value}):(0,X.jsx)(Kd,{$broken:e.entry.linkValid===!1,children:(0,X.jsx)($u,{name:e.label,ranges:e.ranges})}),(0,X.jsx)(qd,{children:e.entry.isDirectory?i===void 0?Zu(e.entry,b):b(`{type} · {count} items`,{type:Zu(e.entry,b),count:i}):b(`{type} · {size}`,{type:Zu(e.entry,b),size:sa(e.entry.size)})}),a&&e.entry.linkTarget&&(0,X.jsxs)(Jd,{title:e.entry.linkTarget,children:[`→ `,e.entry.linkTarget]})]})]})});function ad({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:p,onOpen:m,onOpenFile:h,onRenameChange:g,onRenameCommit:_,onRenameCancel:v}){let y=Kn();return(0,X.jsx)(X.Fragment,{children:e.map(e=>(0,X.jsxs)(Td,{children:[(0,X.jsxs)(Ed,{children:[y(e.label),(0,X.jsx)(Dd,{children:e.rows.length}),(0,X.jsx)(Od,{})]}),(0,X.jsx)(kd,{$size:t,children:e.rows.map(e=>(0,X.jsx)(id,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:Yu(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:p,onOpen:m,onOpenFile:h,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:v,onRenameChange:g,onRenameCommit:_,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function od({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,_.useRef)(null);return(0,_.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,X.jsx)(Fd,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var sd=(0,_.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:_,onTagEdit:v,onRenameChange:y,onRenameCommit:b,onRenameCancel:x}){let S=Kn(),C=Fa(),w=e.entry.fullPath;return(0,X.jsxs)(Md,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{m(t,w),o&&_(e.entry,t)},onContextMenu:e=>g(e,w),onDoubleClick:t=>{o||_(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":w,draggable:!p,children:[(0,X.jsxs)(Nd,{children:[i&&(0,X.jsx)(pd,{$checked:r,onClick:e=>{e.stopPropagation(),h(w)},onDoubleClick:e=>e.stopPropagation(),title:S(r?`Deselect`:`Select`),type:`button`,children:r&&(0,X.jsx)(ms,{size:10})}),e.place&&C.useIcons?(0,X.jsx)(cd,{children:(0,X.jsx)(Kl,{place:e.place,size:s})}):(0,X.jsx)(td,{entry:e.entry,size:s}),p?(0,X.jsx)(od,{onCancel:x,onChange:y,onCommit:b,value:p.value}):(0,X.jsx)(Pd,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,X.jsx)($u,{name:e.label,ranges:e.ranges})}),a&&e.entry.linkTarget&&(0,X.jsxs)(Id,{title:e.entry.linkTarget,children:[`→ `,e.entry.linkTarget]})]}),u.map(t=>(0,X.jsx)(Ld,{children:t.id===`tags`?(0,X.jsx)(Rd,{onClick:t=>{t.stopPropagation(),v(e.entry,t.clientX,t.clientY)},title:S(`Edit tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,X.jsx)(zd,{$color:t,$ink:Jl(t),children:e},e)}):(0,X.jsx)(Bd,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,X.jsx)(Vd,{children:S(`Broken`)}):Qu(t.id,e.entry,d,S)},t.id))]})}),cd=J.span`
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
`,ld=J.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,ud=J.button`
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
`,dd=J.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,fd=J.div`
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

    html.has-wallpaper & {
        background: rgba(var(--bg-rgb), 0.65);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
    }
`,pd=J.button`
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
`,md=J(pd)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,hd=J.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,gd=J.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
`,_d=J.div`
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
`,vd=J.button`
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
`,yd=J.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,bd=J.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,xd=J.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: var(--bg-secondary);
`,Sd=J.div`
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
`,Cd=J.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,wd=J.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,Td=J.section`
    & + & {
        margin-top: 22px;
    }
`,Ed=J.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Dd=J.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Od=J.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,kd=J.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,Ad=J.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,jd=J.span`
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
`,Md=J.div`
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
`,Nd=J.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,Pd=J.span`
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Fd=J.input`
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
`,Id=J.span`
    overflow: hidden;
    min-width: 0;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent-primary);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ld=J.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Rd=J.button`
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
`,zd=J.span`
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
`,Bd=J.span`
    color: var(--text-muted);
    font-size: 11px;
`,Vd=J.span`
    color: #fca5a5;
`,Hd=J.div`
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
`,Ud=J.div`
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
`,Wd=J.span`
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
`,Gd=J.div`
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
`,Kd=J.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,qd=J.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Jd=J.span`
    width: 100%;
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--accent-primary);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Yd=J.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,Xd=J.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Zd=J.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,Qd=J.p`
    font-size: 13px;
    color: var(--text-muted);
`,$d=J.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,ef=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,tf=`/assets/bloom-BpfZWiaG.mp4`,nf=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,rf=`/assets/drift-BRBSQL2_.mp4`,af=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,of=`/assets/ember-CtSz0YxR.mp4`,sf=[{name:`Blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`Indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`Violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`Teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`Green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`Amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`Rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`Slate`,accent:`#64748b`,secondary:`#94a3b8`}],cf=[{id:`aurora`,name:`Aurora`},{id:`dunes`,name:`Dunes`},{id:`tide`,name:`Tide`}],lf=[{id:`builtin:video:drift`,name:`Drift`,url:rf,poster:nf},{id:`builtin:video:ember`,name:`Ember`,url:of,poster:af},{id:`builtin:video:bloom`,name:`Bloom`,url:tf,poster:ef}],uf=cf.map(e=>({...e,variants:sf.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:hf(gf(e.id,t))}))})),df=new Map(uf.flatMap(e=>e.variants.map(e=>[e.id,e]))),ff=new Map(lf.map(e=>[e.id,e]));function pf(e){if(df.has(e))return df.get(e).url;if(ff.has(e))return ff.get(e).url;let t=e.split(`:`)[1];return t?df.get(`builtin:${t}:indigo`)?.url??null:null}function mf(e){return ff.has(e)}function hf(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function gf(e,t){return e===`dunes`?bf(t):e===`tide`?xf(t):yf(t)}function _f(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function vf(e,t,n){let[r,i,a]=_f(e),[o,s,c]=_f(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function yf({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${vf(e,`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${vf(t,`#070b1c`,.85)}"/>
            <stop offset="1" stop-color="${vf(e,`#04060c`,.94)}"/>
        </linearGradient>
        <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="${e}" stop-opacity="0"/>
            <stop offset="0.45" stop-color="${t}" stop-opacity="0.55"/>
            <stop offset="0.7" stop-color="${e}" stop-opacity="0.4"/>
            <stop offset="1" stop-color="${e}" stop-opacity="0"/>
        </linearGradient>
        <filter id="soft" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="110"/>
        </filter>
        <filter id="soft2" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="70"/>
        </filter>
    </defs>
    <rect width="1920" height="1080" fill="url(#bg)"/>
    <ellipse cx="420" cy="260" rx="540" ry="300" fill="${e}" opacity="0.7" filter="url(#soft)"/>
    <ellipse cx="1450" cy="220" rx="460" ry="260" fill="${t}" opacity="0.66" filter="url(#soft)"/>
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${vf(e,t,.5)}" opacity="0.42" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="0.5" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="0.42" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="0.36" filter="url(#soft2)"/>
</svg>`}function bf({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${vf(t,`#120a05`,.84)}"/>
            <stop offset="0.5" stop-color="${vf(t,`#1c0f07`,.7)}"/>
            <stop offset="1" stop-color="#0d0703"/>
        </linearGradient>
        <linearGradient id="dune1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${vf(e,t,.25)}" stop-opacity="0.65"/>
            <stop offset="1" stop-color="${vf(e,`#160b04`,.55)}" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="dune2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${t}" stop-opacity="0.4"/>
            <stop offset="1" stop-color="${vf(e,`#1a0d05`,.7)}" stop-opacity="0.15"/>
        </linearGradient>
        <filter id="haze" x="-160%" y="-160%" width="420%" height="420%">
            <feGaussianBlur stdDeviation="90"/>
        </filter>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1480" cy="250" r="170" fill="${t}" opacity="0.42" filter="url(#haze)"/>
    <circle cx="1480" cy="250" r="110" fill="${vf(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${vf(e,`#0b0603`,.82)}" opacity="0.75"/>
</svg>`}function xf({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${vf(e,`#02070a`,.9)}"/>
            <stop offset="0.5" stop-color="${vf(t,`#03100f`,.82)}"/>
            <stop offset="1" stop-color="${vf(e,`#020609`,.94)}"/>
        </linearGradient>
        <filter id="blur" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="120"/>
        </filter>
        <linearGradient id="wave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="${e}" stop-opacity="0"/>
            <stop offset="0.5" stop-color="${t}" stop-opacity="0.55"/>
            <stop offset="1" stop-color="${e}" stop-opacity="0"/>
        </linearGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#sea)"/>
    <ellipse cx="350" cy="840" rx="620" ry="280" fill="${e}" opacity="0.45" filter="url(#blur)"/>
    <ellipse cx="1550" cy="240" rx="520" ry="260" fill="${t}" opacity="0.38" filter="url(#blur)"/>
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${vf(e,t,.4)}" opacity="0.5" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var Sf=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function Cf(e){return Sf.test(e)}function wf({settings:e}){let t=e?.backgroundSource??null,n=t?.startsWith(`file:`)?t.slice(5):null,r=Ui(n),i=t?.startsWith(`builtin:`)?pf(t):r,a=n===null?t!==null&&mf(t):Cf(n);if(!t||!i)return null;let o=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,X.jsxs)(Tf,{"aria-hidden":!0,children:[a?(0,X.jsx)(Df,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:i,style:{filter:o}}):(0,X.jsx)(Ef,{src:i,style:{filter:o}}),(0,X.jsx)(Of,{})]})}var Tf=J.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,Ef=J.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,Df=J.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,Of=J.div`
    position: absolute;
    inset: 0;
    background:
        linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
        radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);
`;function kf({hits:e,delaySeconds:t,permanent:n,onCancel:r,onConfirm:i}){let a=Kn(),o=(0,_.useRef)(null),[s,c]=(0,_.useState)(()=>Math.max(1,Math.ceil(t)));return(0,_.useEffect)(()=>{o.current?.focus();let e=Date.now(),n=window.setInterval(()=>{let r=Math.max(0,Math.ceil(t-(Date.now()-e)/1e3));c(r),r===0&&window.clearInterval(n)},200),i=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),r()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,i,!0),()=>{window.clearInterval(n),window.removeEventListener(`keydown`,i,!0)}},[t,r]),(0,sc.createPortal)((0,X.jsx)(Af,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,X.jsxs)(jf,{role:`alertdialog`,"aria-modal":`true`,children:[(0,X.jsx)(Mf,{children:a(`Protected folder`)}),(0,X.jsx)(Nf,{children:a(`These paths are protected by the safety settings:`)}),(0,X.jsx)(Pf,{children:e.map(e=>(0,X.jsxs)(Ff,{children:[(0,X.jsx)(If,{children:e.path}),(0,X.jsx)(Lf,{children:a(`Protected by {pattern}`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,X.jsx)(Rf,{children:a(n?`Deletes permanently`:`Moves to the recycle bin`)}),(0,X.jsx)(zf,{children:a(`Nothing has been deleted.`)}),(0,X.jsx)(Bf,{children:a(`This waits {seconds}s before the delete button works.`,{seconds:t})}),(0,X.jsxs)(Vf,{children:[(0,X.jsx)(Hf,{onClick:r,ref:o,type:`button`,children:a(`Cancel`)}),(0,X.jsx)(Uf,{disabled:s>0,onClick:i,type:`button`,children:s>0?a(`Delete anyway ({seconds}s)`,{seconds:s}):a(`Delete anyway`)})]})]})}),document.body)}var Af=J.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${bc}
`,jf=J.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${gc}
`,Mf=J.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Nf=J.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Pf=J.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    max-height: 220px;
    margin-bottom: 12px;
    overflow-y: auto;
    padding: 8px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.55);
`,Ff=J.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,If=J.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,Lf=J.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,Rf=J.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,zf=J.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,Bf=J.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Vf=J.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Hf=J.button`
    min-width: 84px;
    padding: 7px 12px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,Uf=J.button`
    min-width: 110px;
    padding: 7px 12px;
    border: 1px solid rgba(248, 113, 113, 0.5);
    border-radius: var(--radius-sm);
    background: rgba(248, 113, 113, 0.16);
    color: #fca5a5;
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: rgba(248, 113, 113, 0.8);
        color: #fecaca;
    }

    &:disabled {
        opacity: 0.45;
        cursor: not-allowed;
    }
`;function Wf({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h}){let g=Kn(),v=(0,_.useRef)(null),y=c??g(`Search this folder`);(0,_.useEffect)(()=>{let e=v.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let b=e=>{e(),v.current?.focus()};return(0,X.jsxs)(Gf,{children:[(0,X.jsx)(es,{}),(0,X.jsx)(Kf,{"aria-label":y,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:y,ref:v,spellCheck:!1,value:e}),!s&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(qf,{children:i===0?`0/0`:`${a+1}/${i}`}),(0,X.jsx)(Jf,{onClick:()=>b(u),title:g(`Previous match (Shift+Enter)`),type:`button`,children:(0,X.jsx)(os,{size:12})}),(0,X.jsx)(Jf,{$down:!0,onClick:()=>b(d),title:g(`Next match (Enter)`),type:`button`,children:(0,X.jsx)(os,{size:12})})]}),(0,X.jsx)(Yf,{$on:n,onClick:()=>b(f),title:g(`Match case`),type:`button`,children:`Aa`}),(0,X.jsx)(Yf,{$on:r,onClick:()=>b(p),title:g(`Regular expression`),type:`button`,children:`.*`}),!s&&(0,X.jsx)(Xf,{$on:t===`hide`,onClick:()=>b(m),title:g(t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`),type:`button`,children:g(t===`hide`?`Hide`:`Dim`)}),(0,X.jsx)(Jf,{onClick:h,title:g(`Close search (Esc)`),type:`button`,children:(0,X.jsx)(hs,{size:12})})]})}var Gf=J.div`
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
    ${yc}
`,Kf=J.input`
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
`,qf=J.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Jf=J.button`
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
`,Yf=J.button`
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
`,Xf=J(Yf)`
    min-width: 34px;
    font-family: var(--font-sans);
    font-size: 10px;
`;function Zf(e,t,n,r,i=[]){(0,_.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=qi(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function Qf({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=Kn(),a=(0,_.useRef)(null),o=(0,_.useRef)(null),[s,c]=(0,_.useState)(null);return(0,_.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,_.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,_.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,sc.createPortal)((0,X.jsxs)($f,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(Vl).map(n=>(0,X.jsx)(ep,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:Vl[n](16)},n)),(0,X.jsx)(ep,{onClick:async()=>{let e=await ac([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`Choose an image`),type:`button`,children:(0,X.jsx)(rs,{size:13})}),r&&(0,X.jsx)(ep,{$active:!e,onClick:()=>t(null),title:i(`Default`),type:`button`,children:(0,X.jsx)(hs,{size:12})})]}),document.body)]})}var $f=J.div`
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
    ${_c}
    transform-origin: top left;
`,ep=J.button`
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
`,tp=J.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 14px 26px 34px;
`,np=J.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    flex-wrap: wrap;
    padding-bottom: 14px;
`,rp=J.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,ip=J.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,ap=J.button`
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
`,op=J.div`
    position: relative;
    display: inline-flex;
`,sp=J.div`
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
`,cp=J.button`
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
`,lp=J.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,up=J.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
`,dp=J.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,fp=J.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,pp=J.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,mp=J.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,hp=J.input`
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
`,gp=J.button`
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
`,_p=J.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,vp=J.div`
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
`,yp=J.span`
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
`,bp=J.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,xp=J.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Sp=J.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,Cp=J.button`
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
`,wp=J.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,Tp=J.button`
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
`,Ep=J.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Dp=J.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,Op=J.div`
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
`,kp=J.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,Ap=J.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,jp=J.button`
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
`,Mp=J.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,Np=J.button`
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
`,Pp=J.button`
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
`,Fp=J.button`
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
`,Ip=J.span`
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
`,Lp=J.button`
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
`,Rp=J.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,zp=J.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`;function Bp({places:e,drives:t,recent:n,recentLimit:r,homePath:i,historyVersion:a,onOpen:o,onPlacesChanged:s,onRecentCleared:c,onLayoutChanged:l,onHistoryChanged:u,onDrivesChanged:d,visibilityVersion:f=0,find:p,onSearchMatches:m,readOnly:h=!1,onPick:g,onSelectionChange:v,onAddToTray:y}){let b=Kn(),x=Fa(),[S,C]=(0,_.useState)(!1),[w,T]=(0,_.useState)(null),[E,D]=(0,_.useState)(null),[O,k]=(0,_.useState)(!1),[ee,A]=(0,_.useState)(null),[te,j]=(0,_.useState)(null),[M,N]=(0,_.useState)(null),[P,F]=(0,_.useState)(null),[I,ne]=(0,_.useState)(null),L=e=>g?(F(e),v?.([e]),!0):!1,R=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),F(t),ne({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})},re=(e,t)=>o(e,t);(0,_.useEffect)(()=>{Fr().then(T,()=>T(null))},[]),(0,_.useEffect)(()=>{if(!E)return;let e=()=>D(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||D(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[E]),(0,_.useEffect)(()=>{if(!O)return;let e=()=>k(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[O]);let ie=Ul(w),z=ie.map(e=>e.id),ae=(0,_.useRef)(null),oe=e=>E?.kind===`panel`&&E.id===e,se=e=>E?.kind===`place`&&E.id===e;(0,_.useEffect)(()=>{if(!Y.available)return;let e=ie.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??i).filter(e=>e.length>0);Y.send({type:`fs.watch`,payload:{paths:e}})},[ie.map(e=>e.path??e.id).join(`|`),i]),Zf(ae,p??null,`section`,m??(()=>void 0),[n.length,e.length,t.length,f]);let B=async(e,t)=>{let n={...w?.placeIcons};t?n[e]=t:delete n[e],D(null),await U({placeIcons:n}),s(await hr())},ce=async(e,t)=>{let n={...w?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],j(null),await U({placeNames:n}),s(await hr())},le=e=>{N(null),A({drive:e,label:e.label||`Local Disk`})},V=async()=>{if(!ee)return;let{drive:e,label:t}=ee;A(null);let n=await ar(e.name,t.trim());n.ok?(N(null),d?.()):N(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},H=w?.overviewColumns??1,U=async e=>{if(!w)return;let t={...w,...e,overviewPanels:e.overviewPanels??z,overviewHidden:[]};T(await Lr(t)),l?.()},ue=(e,t)=>{let n=z.indexOf(e),r=n+t;if(n<0||r<0||r>=z.length)return;let i=[...z];[i[n],i[r]]=[i[r],i[n]],U({overviewPanels:i})},de=(e,t)=>{let n={...w?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],U({overviewTitles:n})},fe=(e,t)=>void U({overviewViews:{...w?.overviewViews,[e]:t}}),W=e=>{let t=w?.overviewPinned??ie.filter(e=>e.pinned).map(e=>e.id);U({overviewPinned:ie.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},pe=e=>{D(null);let t=t=>{let n={...t};return delete n[e],n},n=w?.overviewPinned??ie.filter(e=>e.pinned).map(e=>e.id);U({overviewPanels:z.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(w?.overviewTitles),overviewViews:t(w?.overviewViews),overviewIcons:t(w?.overviewIcons),panelPlaces:t(w?.panelPlaces)})},me=(e,t)=>{let n={...w?.overviewIcons};t?n[e]=t:delete n[e],D(null),U({overviewIcons:n})},he=async e=>{if(!w)return;if(e===`folder`){let e=await ic();if(!e)return;let t=`folder:${e}`;z.includes(t)||await U({overviewPanels:[...z,t]});return}if(e===`quick`){let e=2;for(;z.includes(`quick:${e}`);)e+=1;await U({overviewPanels:[...z,`quick:${e}`]});return}let t=e;for(let n=2;z.includes(t);n+=1)t=`${e}:${n}`;await U({overviewPanels:[...z,t]})},ge=async t=>{let n=await ic();if(!n)return;if(t.id===`quick`){await U({quickAccess:[...new Set([...e.map(e=>e.path),n])]}),s(await hr());return}let r=t.places??[];r.some(e=>Hp(e,n))||await U({panelPlaces:{...w?.panelPlaces,[t.id]:[...r,n]}})},_e=async(t,n)=>{D(null),t.id===`quick`?(await U({quickAccess:e.filter(e=>!Hp(e.path,n)).map(e=>e.path)}),s(await hr())):await U({panelPlaces:{...w?.panelPlaces,[t.id]:(t.places??[]).filter(e=>!Hp(e,n))}})},ve=async(t,n,r)=>{if(Hp(n,r))return;let i=t.id===`quick`?e.map(e=>e.path):t.places??[],a=i.findIndex(e=>Hp(e,n)),o=i.findIndex(e=>Hp(e,r));if(a<0||o<0)return;let c=[...i],[l]=c.splice(a,1);c.splice(o,0,l),t.id===`quick`?(await U({quickAccess:c}),s(await hr())):await U({panelPlaces:{...w?.panelPlaces,[t.id]:c}})},ye=(e,t)=>({draggable:S,onDragOver:e=>{S&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{S&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{S&&(n.preventDefault(),ve(e,n.dataTransfer.getData(`text/plain`),t))}}),be=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>Hp(e.path,t));return{name:w?.placeNames?.[t]??n?.name??(Ca(t)||t),path:t,kind:`folder`,icon:n?.icon??w?.placeIcons?.[t]??null}}),xe=e=>{if(n.length===0)return(0,X.jsx)(zp,{children:b(`Files and folders you open show up here.`)});let t=n.slice(0,r);return e.view===`grid`?(0,X.jsx)(_p,{children:t.map(e=>{let t=Ia(x,e.path);return(0,X.jsxs)(vp,{$plain:!1,$selected:P===e.path,onClick:t=>{L(e.path)||(e.isDirectory?o(e.path,wi(t)):or(e.path))},onDoubleClick:()=>g?.(e.path),onContextMenu:t=>R(t,e.path,e.isDirectory),title:e.path,children:[(0,X.jsx)(yp,{children:t&&x.useIcons?(0,X.jsx)(Kl,{place:t,size:18}):(0,X.jsx)(uu,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,X.jsxs)(bp,{children:[(0,X.jsx)(`strong`,{children:t?.name||e.name}),(0,X.jsx)(xp,{children:e.path})]})]},e.path)})}):(0,X.jsx)(Sp,{children:t.map(e=>{let t=Ia(x,e.path);return(0,X.jsxs)(Cp,{$selected:P===e.path,onClick:t=>{L(e.path)||(e.isDirectory?o(e.path,wi(t)):or(e.path))},onDoubleClick:()=>g?.(e.path),onContextMenu:t=>R(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&x.useIcons?(0,X.jsx)(Kl,{place:t,size:15}):(0,X.jsx)(uu,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,X.jsxs)(wp,{children:[(0,X.jsx)(`strong`,{children:t?.name||e.name}),(0,X.jsx)(xp,{children:e.path})]})]},e.path)})})},Se=e=>{if(t.length===0)return(0,X.jsx)(zp,{children:b(`No drives are available.`)});let n=t.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=ee?.drive.name===t.name,i=r?(0,X.jsx)(Vp,{maxLength:32,onCancel:()=>A(null),onChange:e=>A({...ee,label:e}),onCommit:()=>void V(),value:ee?.label??``}):(0,X.jsx)(X.Fragment,{children:Ma(t)}),a=!r&&S&&(0,X.jsx)(Fp,{onClick:e=>{e.stopPropagation(),le(t)},title:b(`Rename volume`),type:`button`,children:(0,X.jsx)(Ms,{size:11})}),s=(0,X.jsx)(xp,{children:b(`{free} free of {total}`,{free:sa(t.freeSpace),total:sa(t.totalSize)})});return e.view===`grid`?(0,X.jsxs)(vp,{$plain:!1,$selected:P===t.name,onClick:e=>{!r&&L(t.name)||r||o(t.name,wi(e))},onDoubleClick:()=>!r&&g?.(t.name),onContextMenu:e=>!r&&R(e,t.name,!0),title:t.name,children:[(0,X.jsx)(yp,{children:(0,X.jsx)($o,{size:18})}),(0,X.jsxs)(bp,{children:[(0,X.jsxs)(`strong`,{children:[i,r&&ja(t),a]}),s]})]},t.name):(0,X.jsxs)(Cp,{as:r?`div`:`button`,$selected:P===t.name,onClick:r?void 0:e=>{L(t.name)||o(t.name,wi(e))},onDoubleClick:r?void 0:()=>g?.(t.name),onContextMenu:r?void 0:e=>R(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,X.jsx)($o,{size:18}),(0,X.jsxs)(wp,{children:[(0,X.jsxs)(`strong`,{children:[i,r&&ja(t),a]}),s]}),(0,X.jsx)(Ep,{children:(0,X.jsx)(Dp,{$used:n,$tone:Sa(n)})})]},t.name)});return e.view===`grid`?(0,X.jsx)(_p,{children:n}):(0,X.jsx)(Sp,{children:n})},Ce=e=>{switch(e.kind){case`quick`:{let t=be(e);return!S&&t.length===0?(0,X.jsx)(zp,{children:b(`No folders in this Quick access panel yet.`)}):e.view===`grid`?(0,X.jsxs)(_p,{children:[t.map(t=>(0,X.jsxs)(vp,{$plain:S,$selected:P===t.path,...ye(e,t.path),onClick:e=>{!S&&!L(t.path)&&o(t.path,wi(e))},onDoubleClick:()=>!S&&g?.(t.path),onContextMenu:e=>!S&&R(e,t.path,!0),title:t.path,children:[S&&(0,X.jsx)(Pp,{onClick:n=>{n.stopPropagation(),_e(e,t.path)},title:b(`Remove from Quick access`),type:`button`,children:(0,X.jsx)(hs,{size:11})}),(0,X.jsxs)(Mp,{children:[S?(0,X.jsx)(Np,{onClick:e=>{e.stopPropagation(),D(se(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:b(`Change icon`),type:`button`,children:(0,X.jsx)(yp,{children:(0,X.jsx)(Kl,{place:t})})}):(0,X.jsx)(yp,{children:(0,X.jsx)(Kl,{place:t})}),se(t.path)&&(0,X.jsx)(Qf,{onPick:e=>void B(t.path,e),value:w?.placeIcons?.[t.path]??t.icon})]}),(0,X.jsxs)(bp,{children:[te?.path===t.path?(0,X.jsx)(`strong`,{children:(0,X.jsx)(Vp,{onCancel:()=>j(null),onChange:e=>j({path:t.path,name:e}),onCommit:()=>void ce(t.path,te?.name??``),value:te?.name??``})}):(0,X.jsxs)(`strong`,{children:[t.name,S&&(0,X.jsx)(Fp,{onClick:e=>{e.stopPropagation(),D(null),j({path:t.path,name:t.name})},title:b(`Rename folder`),type:`button`,children:(0,X.jsx)(Ms,{size:11})})]}),(0,X.jsx)(xp,{children:t.path})]})]},t.path)),S&&(0,X.jsxs)(Tp,{onClick:()=>void ge(e),title:b(`Pin a folder here`),type:`button`,children:[(0,X.jsx)(yp,{children:(0,X.jsx)(rs,{size:15})}),(0,X.jsxs)(bp,{children:[(0,X.jsx)(`strong`,{children:b(`Add folder`)}),(0,X.jsx)(xp,{children:b(`Pin a directory here`)})]})]})]}):(0,X.jsxs)(Sp,{children:[t.map(t=>(0,X.jsxs)(Cp,{$selected:P===t.path,...ye(e,t.path),onClick:e=>{!S&&!L(t.path)&&o(t.path,wi(e))},onDoubleClick:()=>!S&&g?.(t.path),onContextMenu:e=>!S&&R(e,t.path,!0),title:t.path,type:`button`,children:[(0,X.jsxs)(Mp,{children:[S?(0,X.jsx)(Np,{onClick:e=>{e.stopPropagation(),D(se(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:b(`Change icon`),type:`button`,children:(0,X.jsx)(Kl,{place:t,size:15})}):(0,X.jsx)(Kl,{place:t,size:15}),se(t.path)&&(0,X.jsx)(Qf,{onPick:e=>void B(t.path,e),value:w?.placeIcons?.[t.path]??t.icon})]}),(0,X.jsxs)(wp,{children:[te?.path===t.path?(0,X.jsx)(`strong`,{children:(0,X.jsx)(Vp,{onCancel:()=>j(null),onChange:e=>j({path:t.path,name:e}),onCommit:()=>void ce(t.path,te?.name??``),value:te?.name??``})}):(0,X.jsxs)(`strong`,{children:[t.name,S&&(0,X.jsx)(Fp,{onClick:e=>{e.stopPropagation(),D(null),j({path:t.path,name:t.name})},title:b(`Rename folder`),type:`button`,children:(0,X.jsx)(Ms,{size:11})})]}),(0,X.jsx)(xp,{children:t.path})]}),S&&(0,X.jsx)(Pp,{$inline:!0,onClick:n=>{n.stopPropagation(),_e(e,t.path)},title:b(`Remove from Quick access`),type:`button`,children:(0,X.jsx)(hs,{size:11})})]},t.path)),S&&(0,X.jsxs)(Tp,{$row:!0,onClick:()=>void ge(e),title:b(`Pin a folder here`),type:`button`,children:[(0,X.jsx)(rs,{size:15}),(0,X.jsxs)(wp,{children:[(0,X.jsx)(`strong`,{children:b(`Add folder`)}),(0,X.jsx)(xp,{children:b(`Pin a directory here`)})]})]})]})}case`frequent`:return(0,X.jsx)(Up,{mode:e.view,onContextMenu:R,onOpen:o,onPick:g,onSelectionChange:v,version:a});case`recent`:return xe(e);case`drives`:return Se(e);default:return(0,X.jsx)(Wp,{mode:e.view,onContextMenu:R,onOpen:o,onPick:g,onSelectionChange:v,openOnSingleClick:w?.openOnSingleClick??!1,path:e.path??i,showCheckboxes:w?.showCheckboxes??!0,visibilityVersion:f})}};return(0,X.jsxs)(tp,{children:[!h&&(0,X.jsxs)(np,{children:[(0,X.jsx)(rp,{role:`group`,title:b(`Columns`),children:[1,2,3,4,5].map(e=>(0,X.jsx)(ip,{$active:H===e,onClick:()=>void U({overviewColumns:e}),title:oa(b,e,`1 column`,`{count} columns`),type:`button`,children:e},e))}),S&&(0,X.jsxs)(op,{children:[(0,X.jsxs)(ap,{onClick:()=>k(e=>!e),onPointerDown:e=>e.stopPropagation(),title:b(`Add a panel`),type:`button`,children:[(0,X.jsx)(rs,{size:12}),b(`Add panel ▾`)]}),O&&(0,X.jsx)(sp,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`folder`].map(e=>(0,X.jsx)(cp,{onClick:()=>{k(!1),he(e)},type:`button`,children:b(e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:`Folder…`)},e))})]}),(0,X.jsxs)(ap,{onClick:()=>{C(e=>!e),k(!1),D(null),j(null),A(null)},title:b(S?`Done`:`Edit`),type:`button`,children:[S?(0,X.jsx)(ms,{size:13}):(0,X.jsx)(Ms,{size:13}),b(S?`Done`:`Edit`)]})]}),M&&(0,X.jsx)(Rp,{children:M}),(0,X.jsx)(lp,{ref:ae,$columns:H,children:ie.map(e=>{let t=z.indexOf(e.id);return(0,X.jsxs)(up,{children:[(0,X.jsxs)(dp,{children:[(0,X.jsxs)(fp,{children:[(0,X.jsxs)(Mp,{children:[S?(0,X.jsx)(Np,{onClick:()=>D(oe(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:b(`Change icon`),type:`button`,children:(0,X.jsx)(Gl,{panel:e,size:15})}):(0,X.jsx)(Gl,{panel:e,size:15}),oe(e.id)&&(0,X.jsx)(Qf,{onPick:t=>me(e.id,t),value:e.icon})]}),S?(0,X.jsx)(hp,{defaultValue:e.title,onBlur:t=>de(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,X.jsx)(mp,{children:b(e.title)})]}),(0,X.jsxs)(pp,{children:[!S&&e.kind===`recent`&&(0,X.jsx)(ap,{onClick:()=>void kr().then(c),title:b(`Clear`),type:`button`,children:b(`Clear`)}),!S&&e.kind===`frequent`&&(0,X.jsx)(ap,{onClick:()=>void Ar().then(()=>u?.()),title:b(`Clear the frequent list`),type:`button`,children:b(`Clear`)}),!S&&(e.kind===`home`||e.kind===`folder`)&&(0,X.jsx)(ap,{onClick:()=>o(e.path??i),title:b(`Open folder`),type:`button`,children:b(`Open`)}),S&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(gp,{$active:e.pinned,onClick:()=>W(e.id),title:e.pinned?b(`Unpin from the sidebar`):b(`Pin to the sidebar`),type:`button`,children:(0,X.jsx)(cs,{size:12})}),(0,X.jsx)(gp,{$active:e.view===`list`,onClick:()=>fe(e.id,`list`),title:b(`List`),type:`button`,children:(0,X.jsx)(ls,{size:13})}),(0,X.jsx)(gp,{$active:e.view===`grid`,onClick:()=>fe(e.id,`grid`),title:b(`Grid`),type:`button`,children:(0,X.jsx)(us,{size:13})}),(0,X.jsx)(gp,{disabled:t===0,onClick:()=>ue(e.id,-1),title:b(`Move up`),type:`button`,children:(0,X.jsx)(ts,{size:12})}),(0,X.jsx)(gp,{disabled:t===z.length-1,onClick:()=>ue(e.id,1),title:b(`Move down`),type:`button`,children:(0,X.jsx)(ts,{size:12})}),(0,X.jsx)(gp,{onClick:()=>pe(e.id),title:b(`Remove panel`),type:`button`,children:(0,X.jsx)(hs,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Ce(e):(0,X.jsx)(kp,{children:Ce(e)})]},e.id)})}),I&&(0,X.jsx)(Pc,{directory:i,menu:{x:I.x,y:I.y,paths:[I.target.path]},onClose:()=>ne(null),onCopy:(e,t)=>void Yr(e,t),onAddToTray:y,onOpen:re,onOpenFile:e=>g?g(e):void or(e),shortcuts:xi,target:I.target})]})}function Vp({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=Kn();return(0,X.jsxs)(Ip,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,X.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,X.jsx)(Lp,{onClick:r,title:a(`Cancel`),type:`button`,children:(0,X.jsx)(hs,{size:11})}),(0,X.jsx)(Lp,{$apply:!0,onClick:n,title:a(`Rename volume`),type:`button`,children:(0,X.jsx)(ms,{size:12})})]})}function Hp(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}function Up({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:a}){let o=Kn(),[s,c]=(0,_.useState)(null),[l,u]=(0,_.useState)(null),d=Fa(),f=e=>r?(u(e),i?.([e]),!0):!1;if((0,_.useEffect)(()=>{Dr().then(c,()=>c([]))},[a]),!s)return(0,X.jsx)(zp,{children:o(`Reading…`)});if(s.length===0)return(0,X.jsx)(zp,{children:o(`Folders you open often show up here.`)});let p=e=>oa(o,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path});return e===`grid`?(0,X.jsx)(_p,{children:s.map(e=>{let i=Ia(d,e.path);return(0,X.jsxs)(vp,{$plain:!1,$selected:l===e.path,onClick:n=>{f(e.path)||t(e.path,wi(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,X.jsx)(yp,{children:i&&d.useIcons?(0,X.jsx)(Kl,{place:i,size:18}):(0,X.jsx)(uu,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,X.jsxs)(bp,{children:[(0,X.jsx)(`strong`,{children:i?.name||e.name}),(0,X.jsx)(xp,{children:p(e)})]})]},e.path)})}):(0,X.jsx)(Sp,{children:s.map(e=>{let i=Ia(d,e.path);return(0,X.jsxs)(Cp,{$selected:l===e.path,onClick:n=>{f(e.path)||t(e.path,wi(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&d.useIcons?(0,X.jsx)(Kl,{place:i,size:15}):(0,X.jsx)(uu,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,X.jsxs)(wp,{children:[(0,X.jsx)(`strong`,{children:i?.name||e.name}),(0,X.jsx)(xp,{children:p(e)})]})]},e.path)})})}function Wp({path:e,mode:t,onOpen:n,onContextMenu:r,onPick:i,onSelectionChange:a,showCheckboxes:o,openOnSingleClick:s,visibilityVersion:c}){let l=Kn(),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(null),m=Fa();return(0,_.useEffect)(()=>{e&&(d(null),sr(e).then(d,()=>d(null)))},[e,c]),(0,_.useEffect)(()=>{if(Y.available)return Y.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&n.data.path.replace(/[\\\\/]+$/,``).toLowerCase()===e.replace(/[\\\\/]+$/,``).toLowerCase()&&sr(e,!1).then(d,()=>void 0)})},[e]),u?t===`list`?(0,X.jsx)(Op,{children:(0,X.jsx)(Hu,{error:null,listing:u,loading:!1,onOpen:i??n,onOpenFile:i??(e=>void or(e)),onSelectionChange:a,onSort:()=>void 0,openOnSingleClick:s,enableShortcuts:!1,showCheckboxes:o,showDetails:!1,showImages:!1,view:{...rr,columns:ir.columns??[]}})}):(0,X.jsx)(kp,{children:u.entries.length===0?(0,X.jsx)(zp,{children:l(`This folder is empty.`)}):(0,X.jsx)(Ap,{children:u.entries.map(e=>{let t=Ia(m,e.fullPath);return(0,X.jsxs)(jp,{$selected:f===e.fullPath,onClick:t=>{i?(p(e.fullPath),a?.([e.fullPath])):e.isDirectory?n(e.fullPath,wi(t)):or(e.fullPath)},onDoubleClick:()=>i?.(e.fullPath),onContextMenu:t=>r?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&m.useIcons?(0,X.jsx)(Kl,{place:t,size:16}):(0,X.jsx)(uu,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,X.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,X.jsx)(zp,{children:l(`Reading…`)})}function Gp({path:e,label:t,icon:n,focusToken:r,onNavigate:i}){let a=Kn(),o=Fa(),[s,c]=(0,_.useState)(!1),[l,u]=(0,_.useState)(``),[d,f]=(0,_.useState)([]),[p,m]=(0,_.useState)(0),[h,g]=(0,_.useState)(null),v=(0,_.useRef)(null),y=(0,_.useRef)(null),b=(0,_.useRef)(0);(0,_.useEffect)(()=>{s||u(e.replace(/\\/g,`/`))},[e,s]),(0,_.useEffect)(()=>{r&&r!==b.current&&(b.current=r,u(e.replace(/\\/g,`/`)),c(!0))},[r,e]),(0,_.useEffect)(()=>{s&&v.current?.select()},[s]),(0,_.useEffect)(()=>{if(!s)return;let e=()=>c(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[s]);let x=()=>{u(e.replace(/\\/g,`/`)),c(!0)},S=t=>{let n=l.trim();c(!1),n.length>0&&n!==e&&i(n,!!(t?.ctrlKey||t?.metaKey))};(0,_.useEffect)(()=>{if(!s){f([]);return}let e=Jp(l);if(!e){f([]);return}let t=!1,n=window.setTimeout(()=>{sr(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));f(i),m(0)},()=>{t||f([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[l,s]);let C=(e,t=!1)=>{c(!1),i(e.path,t)};if((0,_.useLayoutEffect)(()=>{if(!s){g(null);return}let e=()=>{let e=y.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);g({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[s]),s)return(0,X.jsxs)(em,{onPointerDown:e=>e.stopPropagation(),ref:y,children:[(0,X.jsxs)(im,{children:[(0,X.jsx)(`input`,{onChange:e=>u(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&d.length>0)e.preventDefault(),m(e=>(e+1)%d.length);else if(e.key===`ArrowUp`&&d.length>0)e.preventDefault(),m(e=>(e-1+d.length)%d.length);else if(e.key===`Tab`&&d.length>0){e.preventDefault();let t=d[Math.min(p,d.length-1)];u(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?d.length>0?C(d[Math.min(p,d.length-1)],e.ctrlKey||e.metaKey):S(e):e.key===`Escape`&&(d.length>0?f([]):c(!1))},ref:v,spellCheck:!1,value:l}),(0,X.jsx)(am,{onClick:()=>c(!1),title:a(`Cancel`),type:`button`,children:(0,X.jsx)(hs,{size:12})}),(0,X.jsx)(am,{$apply:!0,onClick:S,onPointerDown:e=>e.stopPropagation(),title:a(`Open this path`),type:`button`,children:(0,X.jsx)(ms,{size:14})})]}),d.length>0&&h&&(0,sc.createPortal)((0,X.jsx)(tm,{onPointerDown:e=>e.stopPropagation(),style:{left:h.left,top:h.top,width:h.width},children:d.map((e,t)=>(0,X.jsxs)(nm,{$active:t===p,onClick:t=>C(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>m(t),type:`button`,children:[(0,X.jsx)(uu,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,X.jsx)(rm,{children:e.name})]},e.path))}),document.body)]});let w=t?[{label:t,path:e,icon:n}]:qp(e,o.places);return(0,X.jsx)(Yp,{onClick:x,title:a(`Click to type a path`),children:w.map((t,n)=>(0,X.jsxs)(Xp,{$last:n===w.length-1,children:[n>0&&(0,X.jsx)(Qp,{children:(0,X.jsx)(os,{size:9})}),(0,X.jsxs)($p,{onClick:n=>{n.stopPropagation(),t.path!==e&&i(t.path,n.ctrlKey||n.metaKey)},type:`button`,children:[t.place?(0,X.jsx)(Zp,{children:(0,X.jsx)(Kl,{place:t.place,size:13})}):t.icon&&(0,X.jsx)(Zp,{children:t.icon}),t.label]})]},t.path))})}function Kp(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function qp(e,t){let n=Kp(e),r=e=>e.replace(/[\\/]+$/,``).toLowerCase(),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>r(t.path)===r(e.path));t>i&&(i=t,a=e)}return a&&i>=0&&n.splice(0,i+1,{label:a.name,path:n[i].path,place:a}),n}function Jp(e){if(e.toLowerCase().startsWith(`yafm://`))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var Yp=J.div`
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
`,Xp=J.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Zp=J.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Qp=J.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,$p=J.button`
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
`,em=J.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,tm=J.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${cc}
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
`,nm=J.button`
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
`,rm=J.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,im=J.div`
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
`,am=J.button`
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
`,om=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,X.jsx)(`path`,{d:`M4 4v6h6`})]});function sm({onOpenLocation:e,find:t,onSearchMatches:n,showDetails:r=!0,onShowDetails:i,videoAudio:a=!1,videoAutoplay:o=!1,platform:s}){let c=Kn(),l=s===`windows`,[u,d]=(0,_.useState)([]),[f,p]=(0,_.useState)([]),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(!0),[x,S]=(0,_.useState)(!1),[C,w]=(0,_.useState)(null),[T,E]=(0,_.useState)(!1),[D,O]=(0,_.useState)(()=>new Set),[k,ee]=(0,_.useState)(null),[A,te]=(0,_.useState)(()=>{let e=Ba(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[j,M]=(0,_.useState)(null),[N,P]=(0,_.useState)(null),[F,I]=(0,_.useState)(()=>{let e=Ra(`yafm.recycle.preview.width`,320);return e>=220?e:320}),ne=(0,_.useRef)(null),L=e=>{I(e),za(`yafm.recycle.preview.width`,e)},R=(0,_.useCallback)(async()=>{b(!0),w(null);try{d(await _r(T))}catch(e){w(e instanceof Error?e.message:String(e))}finally{b(!1)}},[T]);(0,_.useEffect)(()=>{R()},[R]),(0,_.useEffect)(()=>{T||(p([]),h(!1),v(null))},[T]),(0,_.useEffect)(()=>{O(e=>{let t=new Set(u.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[u]);let re=(0,_.useMemo)(()=>{let e=new Set(u.map(e=>e.id));return[...u,...f.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=cm(e,t,A.column);return A.descending?-n:n})},[u,f,A]),ie=(0,_.useMemo)(()=>!t?.open||t.query.trim().length===0?re:re.filter(e=>ea(e.name,t)||ea(e.originalPath,t)),[re,t?.open,t?.query,t?.matchCase,t?.regex]),z=(0,_.useRef)(null);Zf(z,t??null,`[data-search-block]`,n??(()=>void 0),[re]),(0,_.useEffect)(()=>{O(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]);let ae=(0,_.useMemo)(()=>re.filter(e=>D.has(e.id)),[re,D]),oe=ae.filter(e=>e.removable&&!e.isOrphan),se=ae.filter(e=>e.removable),B=(e,t)=>{let n=t.ctrlKey||t.metaKey;O(r=>{if(t.shiftKey&&k){let t=re.findIndex(e=>e.id===k),i=re.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(re[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),ee(e.id)},ce=(0,_.useCallback)(()=>O(new Set(ie.map(e=>e.id))),[ie]),le=ie.length>0&&ie.every(e=>D.has(e.id)),V=(0,_.useCallback)(async()=>{let e=oe.map(e=>e.id);if(e.length!==0){S(!0);try{let t=await br(e);t.ok||window.alert(oa(c,e.length,`Restored {done} of 1 item.`,`Restored {done} of {total} items.`,{done:t.done,total:e.length})),O(new Set),await R()}finally{S(!1)}}},[R,oe,c]),H=(0,_.useCallback)(async()=>{let e=se.map(e=>e.id);if(P(null),e.length!==0){S(!0);try{let t=await xr(e);!t.ok&&!t.cancelled&&window.alert(oa(c,e.length,`Deleted {done} of 1 item.`,`Deleted {done} of {total} items.`,{done:t.done,total:e.length})),O(new Set),await R()}finally{S(!1)}}},[se,R,c]),U=async()=>{P(null),S(!0);try{await yr(T),O(new Set),await R()}finally{S(!1)}},ue=async()=>{S(!0),v(null);try{let e=await Cr();if(e.cancelled){v(`Elevation was declined — nothing was read.`);return}if(e.failed){v(`The elevated helper could not produce a report. Try again.`);return}p(e.entries),h(!0)}finally{S(!1)}},de=async()=>{S(!0),P(null);try{await wr(),p([]),h(!1),v(null),await R()}finally{S(!1)}},fe=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},W=e=>{navigator.clipboard.writeText(e.originalPath)},pe=(e,t)=>{e.preventDefault(),t&&!D.has(t.id)&&O(new Set([t.id])),M({x:e.clientX,y:e.clientY})};(0,_.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),ce()):e.key===`Delete`?(e.preventDefault(),se.length>0&&P(`delete`)):e.key===`Enter`&&oe.length>0?(e.preventDefault(),V()):e.key===`Escape`&&(O(new Set),M(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[se.length,oe.length,V,ce]);let me=[{label:c(`Restore`),icon:(0,X.jsx)(om,{width:14,height:14}),disabled:oe.length===0,onSelect:()=>void V()},{label:c(`Delete permanently`),icon:(0,X.jsx)(ps,{size:14}),danger:!0,disabled:se.length===0,onSelect:()=>P(`delete`)},{label:c(`Properties`),icon:(0,X.jsx)(ss,{size:14}),disabled:ae.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=ae;e&&Sr(e.id)}},{label:c(`Open original location`),icon:(0,X.jsx)(Zo,{size:14}),disabled:ae.length!==1,onSelect:()=>{let[e]=ae;e&&fe(e)}},{label:c(`Copy original path`),icon:(0,X.jsx)(Xs,{size:14}),disabled:ae.length!==1,onSelect:()=>{let[e]=ae;e&&W(e)}},{label:c(`Select all`),separatorBefore:!0,onSelect:ce},{label:c(`Refresh`),icon:(0,X.jsx)(ns,{size:14}),onSelect:()=>void R()}],he=ae.length>0?ae[0]:null,ge=he?{name:he.name,path:he.contentPath||he.originalPath,isDirectory:he.isDirectory,size:he.size,modified:he.deleted,fields:[{label:c(`Type`),value:c(um(he))},{label:c(`Original location`),value:he.originalPath},{label:c(`Date deleted`),value:ma(he.deleted)},{label:c(`Size`),value:he.isDirectory?`—`:sa(he.size)},...he.owner?[{label:c(`Owner`),value:he.owner}]:[],{label:c(`Status`),value:he.isOrphan?c(`Metadata only`):he.removable?c(`Restorable`):c(`Other profile`)}]}:null;return(0,X.jsxs)(fm,{ref:ne,onContextMenu:e=>pe(e),children:[(0,X.jsxs)(pm,{children:[(0,X.jsxs)(mm,{children:[(0,X.jsx)(ps,{size:16}),(0,X.jsx)(`span`,{children:c(`Recycle Bin`)}),(0,X.jsxs)(hm,{children:[y?`…`:oa(c,re.length,`1 item`,`{count} items`),D.size>0&&` · ${c(`{count} selected`,{count:D.size})}`]})]}),(0,X.jsxs)(gm,{children:[(0,X.jsx)(vm,{$on:T,onClick:()=>E(e=>!e),title:c(`Show metadata records whose content is already gone`),type:`button`,children:c(`Orphans`)}),T&&l&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(_m,{disabled:x||m,onClick:()=>void ue(),title:c(m?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`),type:`button`,children:c(x?`Working…`:m?`Admin view loaded`:`Show all (admin)…`)}),m&&f.length>0&&(0,X.jsx)(_m,{disabled:x,onClick:()=>P(`purge`),type:`button`,children:c(`Delete every orphan`)})]}),(0,X.jsx)(_m,{disabled:x||oe.length===0,onClick:()=>void V(),type:`button`,children:c(`Restore`)}),(0,X.jsx)(_m,{$danger:!0,disabled:x||se.length===0,onClick:()=>P(`delete`),type:`button`,children:c(`Delete`)}),(0,X.jsx)(_m,{disabled:x||re.length===0,onClick:()=>P(`empty`),type:`button`,children:c(`Empty`)}),(0,X.jsx)(ym,{onClick:()=>void R(),title:c(`Refresh`),type:`button`,children:(0,X.jsx)(ns,{size:14})})]})]}),g&&(0,X.jsx)(Bm,{children:g}),C&&(0,X.jsx)(Vm,{children:C}),!C&&!y&&(t?.open&&t.query.trim().length>0?ie.length===0:re.length===0)&&(0,X.jsx)(Vm,{children:t?.open&&t.query.trim().length>0?c(`No matching items.`):c(`The recycle bin is empty.`)}),re.length>0&&(0,X.jsxs)(zm,{children:[(0,X.jsxs)(bm,{ref:z,children:[(0,X.jsxs)(Sm,{children:[(0,X.jsx)(Om,{$checked:le,$partial:!le&&D.size>0,onClick:()=>le?O(new Set):ce(),title:c(le?`Select none`:`Select all`),type:`button`,children:le?(0,X.jsx)(ms,{size:9}):D.size>0&&(0,X.jsx)(km,{})}),(0,X.jsxs)(Cm,{onClick:()=>_e(`name`),type:`button`,children:[c(`Name`),lm(A,`name`)]}),(0,X.jsxs)(Cm,{onClick:()=>_e(`original`),type:`button`,children:[c(`Original location`),lm(A,`original`)]}),(0,X.jsxs)(Cm,{onClick:()=>_e(`deleted`),type:`button`,children:[c(`Date deleted`),lm(A,`deleted`)]}),(0,X.jsxs)(Cm,{onClick:()=>_e(`size`),type:`button`,children:[c(`Size`),lm(A,`size`)]}),(0,X.jsxs)(Cm,{onClick:()=>_e(`type`),type:`button`,children:[c(`Type`),lm(A,`type`)]}),(0,X.jsx)(`span`,{})]}),(0,X.jsx)(wm,{onClick:e=>{e.target===e.currentTarget&&O(new Set)},children:re.map(e=>(0,X.jsxs)(Tm,{$checked:D.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>B(e,t),onContextMenu:t=>pe(t,e),onDoubleClick:()=>{O(new Set([e.id])),ee(e.id),i?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,X.jsx)(Dm,{$checked:D.has(e.id),children:D.has(e.id)&&(0,X.jsx)(ms,{size:9})}),(0,X.jsxs)(Am,{children:[(0,X.jsx)(dm,{entry:e}),(0,X.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,X.jsx)(Rm,{children:c(`metadata only`)}),e.owner&&(0,X.jsx)(Rm,{$other:!0,children:c(`other profile`)})]}),(0,X.jsx)(Mm,{children:e.originalPath}),(0,X.jsx)(Nm,{children:ma(e.deleted)}),(0,X.jsx)(Pm,{children:e.isDirectory?`—`:sa(e.size)}),(0,X.jsx)(Fm,{children:c(um(e))}),(0,X.jsxs)(Im,{children:[e.removable&&!e.isOrphan&&(0,X.jsx)(Lm,{onClick:t=>{t.stopPropagation(),br([e.id]).then(R)},title:c(`Restore to its original folder`),type:`button`,children:(0,X.jsx)(om,{})}),e.removable&&(0,X.jsx)(Lm,{$danger:!0,onClick:t=>{t.stopPropagation(),O(new Set([e.id])),P(`delete`)},title:e.isOrphan?c(`Remove the leftover record`):c(`Delete permanently`),type:`button`,children:(0,X.jsx)(ps,{size:13})})]})]},e.id))})]}),r&&(0,X.jsx)(hl,{emptyNote:c(`Nothing selected.`),info:ge,onWidth:L,selectionNote:ae.length>1?oa(c,ae.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:a,videoAutoplay:o,width:F})]}),j&&(0,X.jsx)(Sc,{items:me,onClose:()=>M(null),x:j.x,y:j.y}),(0,X.jsx)(il,{confirmLabel:c(N===`empty`?`Empty the bin`:N===`purge`?`Delete every orphan`:`Delete`),danger:!0,message:N===`empty`?oa(c,re.length,`Permanently delete 1 item? This cannot be undone.`,`Permanently delete {count} items? This cannot be undone.`):N===`purge`?c(`Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.`):oa(c,se.length,`Permanently delete 1 selected item? This cannot be undone.`,`Permanently delete {count} selected items? This cannot be undone.`),onCancel:()=>P(null),onConfirm:()=>{N===`empty`?U():N===`purge`?de():H()},open:N!==null,title:c(N===`empty`?`Empty the recycle bin`:N===`purge`?`Delete every orphan`:`Delete permanently`)})]});function _e(e){te(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return Va(`yafm.recycle.sort`,n),n})}}function cm(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return um(e).localeCompare(um(t),void 0,{sensitivity:`base`})}}function lm(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function um(e){if(e.isDirectory)return`Folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`File`}function dm({entry:e}){let t=Li(e.originalPath,e.isDirectory);return(0,X.jsx)(jm,{children:t?(0,X.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,X.jsx)(Zo,{}):(0,X.jsx)(Qo,{})})}var fm=J.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,pm=J.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,mm=J.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,hm=J.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,gm=J.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,_m=J.button`
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
`,vm=J(_m)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,ym=J.button`
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
`,bm=J.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,xm=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,Sm=J.div`
    display: grid;
    grid-template-columns: ${xm};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Cm=J.button`
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
`,wm=J.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,Tm=J.div`
    display: grid;
    grid-template-columns: ${xm};
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
`,Em=J.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Dm=J.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,Om=J.button`
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
`,km=J.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,Am=J(Em)`
    display: flex;
    align-items: center;
    gap: 9px;
`,jm=J.span`
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
`,Mm=J(Em)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Nm=J(Em)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Pm=J(Em)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Fm=J(Em)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Im=J.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,Lm=J.button`
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
`,Rm=J.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,zm=J.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Bm=J.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,Vm=J.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function Hm(){return Y.available?(await Y.request(`app.tags`)).tags:[]}async function Um(e){return!Y.available||!e?!1:(await Y.request(`app.tags.delete`,{name:e})).ok}async function Wm(e,t){return!Y.available||!e?[]:(await Y.request(`app.tags.create`,{name:e,color:t})).tags}async function Gm(e,t){return!Y.available||!e?!1:(await Y.request(`app.tags.color`,{name:e,color:t})).ok}async function Km(e,t){return!Y.available||!e||!t?!1:(await Y.request(`app.tags.rename`,{oldName:e,newName:t})).ok}var qm=`#3b82f6`,Jm=`#6366f1`,Ym=/^#?([0-9a-f]{6})$/i;function Xm(e,t){if(!e)return t;let n=Ym.exec(e.trim());return n?`#${n[1].toLowerCase()}`:t}function Zm(e){let t=Ym.exec(e);if(!t)return[59,130,246];let n=Number.parseInt(t[1],16);return[n>>16&255,n>>8&255,n&255]}function Qm(e){let[t,n,r]=Zm(e).map(e=>e/255),i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2,s=i-a;if(s===0)return{hue:0,saturation:0};let c=s/(1-Math.abs(2*o-1));return{hue:((i===t?(n-r)/s%6:i===n?(r-t)/s+2:(t-n)/s+4)*60+360)%360,saturation:c*100}}function $m(e,t,n,r=1){return r===1?`hsl(${e.toFixed(1)} ${t}% ${n}%)`:`hsl(${e.toFixed(1)} ${t}% ${n}% / ${r})`}function eh(e,t,n){let r=t/100,i=n/100,a=(1-Math.abs(2*i-1))*r,o=a*(1-Math.abs(e/60%2-1)),s=i-a/2,[c,l,u]=e<60?[a,o,0]:e<120?[o,a,0]:e<180?[0,a,o]:e<240?[0,o,a]:e<300?[o,0,a]:[a,0,o];return[c,l,u].map(e=>Math.round((e+s)*255)).join(`, `)}function th(e,t){let n=Xm(e,qm),r=Xm(t,Jm),[i,a,o]=Zm(n),[s,c,l]=Zm(r),{hue:u,saturation:d}=Qm(n),f=Math.round(Math.min(Math.max(d*.35,6),30)),p=document.documentElement.style;p.setProperty(`--accent-primary`,n),p.setProperty(`--accent-rgb`,`${i}, ${a}, ${o}`),p.setProperty(`--accent-secondary`,r),p.setProperty(`--accent-secondary-rgb`,`${s}, ${c}, ${l}`),p.setProperty(`--border-color`,`rgba(${i}, ${a}, ${o}, 0.13)`),p.setProperty(`--border-color-hover`,`rgba(${i}, ${a}, ${o}, 0.40)`),p.setProperty(`--border-color-focus`,n),p.setProperty(`--accent-gradient`,`linear-gradient(135deg, ${n} 0%, ${r} 100%)`),p.setProperty(`--accent-glow`,`0 0 28px rgba(${i}, ${a}, ${o}, 0.28)`),p.setProperty(`--selection-bg`,`rgba(${i}, ${a}, ${o}, 0.11)`),p.setProperty(`--selection-border`,`rgba(${i}, ${a}, ${o}, 0.36)`),p.setProperty(`--bg-primary`,$m(u,f,7)),p.setProperty(`--bg-secondary`,$m(u,f,11)),p.setProperty(`--bg-card`,$m(u,f,14,.75)),p.setProperty(`--bg-card-hover`,$m(u,f,20,.85)),p.setProperty(`--bg-input`,$m(u,f,9,.75)),p.setProperty(`--bg-elevated`,$m(u,f,8,.96)),p.setProperty(`--bg-media`,$m(u,f,4)),p.setProperty(`--bg-rgb`,eh(u,f,7))}function nh(){let e=Kn();return(0,X.jsx)(rh,{title:e(`Always applies to every folder`),children:e(`Global`)})}var rh=J.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,ih=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`reopenTab`,label:`Reopen closed tab`,note:`Brings back the tab you closed last, folder and all.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`refresh`,label:`Refresh`,note:`Reads the current folder again.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}],ah=`https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest`,oh=`en`,sh=[{id:`system`,label:`System`},{id:`24`,label:`24-hour`},{id:`12`,label:`12-hour`},{id:`custom`,label:`Custom`}],ch=new Date(2026,10,5,16,8).getTime(),lh=`system`,uh={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},dh=[{id:`application`,label:`Application`},{id:`time`,label:`Time format`},{id:`updates`,label:`Updates`},{id:`colors`,label:`Colors`},{id:`background`,label:`Background`},{id:`safety`,label:`Safety`},{id:`tags`,label:`Tags`},{id:`files-view`,label:`Files view`},{id:`shortcuts`,label:`Shortcuts`},{id:`memory`,label:`Memory`},{id:`overview`,label:`Overview`},{id:`gallery`,label:`Gallery`},{id:`icons`,label:`Icons`},{id:`extension-icons`,label:`Icons by extension`},{id:`folder-icons`,label:`Folder icons`},{id:`folder-index`,label:`Folder index`},{id:`indexing`,label:`Index tasks`},{id:`files`,label:`Files`}],fh=`yafm.colors.recent`;function ph(){let e=Ba(fh);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function mh({appInfo:e,focusSection:t,onSettingsChanged:n,find:r,onSearchMatches:i}){let a=Kn(),[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)(``),[g,v]=(0,_.useState)(`file`),[y,b]=(0,_.useState)(!1),[x,S]=(0,_.useState)(!1),[C,w]=(0,_.useState)(null),[T,E]=(0,_.useState)(!1),[D,O]=(0,_.useState)(!1),[k,ee]=(0,_.useState)(null),[A,te]=(0,_.useState)(null),[j,M]=(0,_.useState)([]),[N,P]=(0,_.useState)(null),[F,I]=(0,_.useState)(!1),[ne,L]=(0,_.useState)(null),[R,re]=(0,_.useState)(``),[ie,z]=(0,_.useState)(ql),[ae,oe]=(0,_.useState)(null),[se,B]=(0,_.useState)(null),[ce,le]=(0,_.useState)(``),[V,H]=(0,_.useState)(null),[U,ue]=(0,_.useState)(ph),[de,fe]=(0,_.useState)(null),[W,pe]=(0,_.useState)(null),[me,he]=(0,_.useState)(!1),[ge,_e]=(0,_.useState)(!1),[ve,ye]=(0,_.useState)(null),[be,xe]=(0,_.useState)(dh[0].id),Se=(0,_.useRef)(null),Ce=(0,_.useRef)({}),we=u?.defaultView??ir,Te=u?.themePresets??[];Zf(Se,r??null,`section`,i??(()=>void 0),[u]),(0,_.useEffect)(()=>{let e=Se.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){xe(dh[dh.length-1].id);return}let n=t+110,r=dh[0].id;for(let{id:e}of dh){let t=Ce.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}xe(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let Ee=e=>t=>{Ce.current[e]=t},De=e=>{Ce.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),xe(e)};(0,_.useEffect)(()=>{t&&De(t)},[t]),(0,_.useEffect)(()=>{Un().then(e=>s(e.available),()=>s([]))},[]),(0,_.useEffect)(()=>{Hr().then(pe,()=>void 0)},[]),(0,_.useEffect)(()=>{jr().then(l,()=>l(null)),Fr().then(d,()=>d(null)),qr().then(E,()=>E(!1)),Hm().then(M,()=>M([]))},[]),(0,_.useEffect)(()=>{let e=()=>void Gr().then(w,()=>w(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let G=async e=>{if(!u)return;let t={...u,...e};Object.keys(e).every(e=>t[e]===u[e])||(d(t),Ni(),d(await Lr(t)),n())},Oe=async e=>{let t=await ac(e);if(!t)return;let n=u?.backgroundCustom??[];await G({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},ke=e=>{u&&G({backgroundCustom:u.backgroundCustom.filter(t=>t!==e),backgroundSource:u.backgroundSource===`file:${e}`?null:u.backgroundSource})},Ae=async()=>{if(!u)return;let t=await ic();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;u.protectedPaths.includes(r)||await G({protectedPaths:[...u.protectedPaths,r]})},je=()=>{if(!u||!ae)return;let e=ae.value.trim(),t=ae.from;oe(null),e.length!==0&&e!==t&&G({protectedPaths:u.protectedPaths.map(n=>n===t?e:n)})},Me=e=>{u&&G({protectedPaths:u.protectedPaths.filter(t=>t!==e)})},Ne=async()=>{let e=await Ir();e.length>0&&await G({protectedPaths:e})},Pe=()=>{if(!u||!se)return;let e=se.value.trim(),t=se.from;B(null),e&&e!==t&&G({directoryIndexBlacklist:u.directoryIndexBlacklist.map(n=>n===t?e:n)})},Fe=()=>{let e=ce.trim();u&&e&&!u.directoryIndexBlacklist.includes(e)&&(le(``),G({directoryIndexBlacklist:[...u.directoryIndexBlacklist,e]}))},Ie=e=>{u&&G({directoryIndexBlacklist:u.directoryIndexBlacklist.filter(t=>t!==e)})},Le=()=>{G({directoryIndexBlacklist:[`**/uv/cache/**`]})},Re=()=>{if(!u||V===null)return;let e=V.trim()||`yyyy/MM/dd HH:mm`;H(null),e!==u.timeFormatPattern&&G({timeFormatPattern:e})},ze=(e,t)=>{ue(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return Va(fh,i),i})},K=Xm(u?.accentColor,qm),q=Xm(u?.secondaryColor,Jm),Be=(e,t)=>{u&&(ze(`accent`,K),ze(`secondary`,q),G({accentColor:e,secondaryColor:t}))},Ve=(e,t)=>{u&&(ze(e,e===`accent`?K:q),G(e===`accent`?{accentColor:t}:{secondaryColor:t}))},He=async()=>{he(!0),_e(!1);try{pe(await Ur())}catch{_e(!0)}finally{he(!1)}},Ue=async()=>{if(!u||!de)return;let e=de.name.trim()||`${de.accent.toUpperCase()} / ${de.secondary.toUpperCase()}`,t=[...u.themePresets,{name:e,accent:de.accent,secondary:de.secondary}];fe(null),await G({themePresets:t})},We=async e=>{u&&await G({themePresets:u.themePresets.filter((t,n)=>n!==e)})},Ge=e=>{let t=ve;ye(null),t&&t.role===e&&(e===`accent`?K:q).toLowerCase()!==t.color.toLowerCase()&&ze(e,t.color)},Ke=async()=>{let e=R.trim();if(e&&!F){I(!0),L(null);try{M(await Wm(e,ie)),re(``)}catch{L(a(`Could not add the tag.`))}finally{I(!1)}}},qe=async(e,t)=>{M(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Gm(e,t)||L(a(`Could not change the tag's color.`))},Je=async e=>{if(F)return;I(!0),L(null);let t=await Um(e);M(await Hm()),t||L(`"${e}" is still used by a folder whose index could not be updated.`),I(!1)},Ye=async()=>{let e=N;if(!e||F)return;let t=e.value.trim();t.length===0||t===e.name?P(null):(I(!0),L(null),await Km(e.name,t)?(M(await Hm()),P(null)):L(`Could not rename "${e.name}".`),I(!1))},Xe=async e=>{let t=new Set(we.columns??ir.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=zu.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await G({defaultView:{...we,columns:n}})},Ze=async()=>{if(D)return;let e=!T;O(!0),ee(null);try{let t=await Jr(e);E(t),d(e=>e&&{...e,linksEnabled:t}),n(),t!==e&&ee(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{ee(`The request to Windows failed. Try again.`)}finally{O(!1)}},Qe=async(e,t)=>{if(!u)return;let n={...u.extensionIcons};t===null?delete n[e]:n[e]=t,await G({extensionIcons:n})},$e={...xi,...u?.shortcuts};(0,_.useEffect)(()=>{if(!A)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){te(null);return}let t=Ti(e);t&&(te(null),G({shortcuts:{...$e,[A]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[A,u]);let et=async e=>{await G({recentLimit:Math.min(Math.max(e,0),50)})},tt=async e=>{await G({galleryRoots:e.length>0?e:null})},nt=async()=>{let e=await ic(),t=u?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await tt([...t,e])},rt=async()=>{let e=m.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await Qe(e,g),h(``))},it=async()=>{S(!0);try{let e=await ic();if(!e)return;let t=await ac([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await zr(e.replace(/[\\/][^\\/]+$/,``),Ca(e),`file:${t}`)&&(Ni(),p({folder:e,icon:t}))}finally{S(!1)}};return(0,X.jsxs)(Eh,{children:[(0,X.jsxs)(Dh,{ref:Se,children:[(0,X.jsxs)(Oh,{ref:Ee(`application`),children:[(0,X.jsx)(Th,{note:`The build, its yafm:// links, and what reopens at launch.`,title:`Application`}),(0,X.jsxs)(Ah,{children:[(0,X.jsxs)(Q,{children:[(0,X.jsx)($,{children:a(`Version`)}),(0,X.jsx)(og,{children:e?`v${e.version}`:`—`})]}),(0,X.jsxs)(Q,{children:[(0,X.jsx)($,{children:a(`Platform`)}),(0,X.jsx)(og,{children:e?.platform??`—`})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`Language`)}),(0,X.jsx)(ig,{children:a(`The language the interface uses. English is the default; the system option follows the operating system.`)})]}),(0,X.jsx)(ng,{children:(0,X.jsx)(Sh,{disabled:!u,onChange:e=>void G({language:e}),options:[lh,...o.length>0?o:[oh]],value:u?.language??oh})})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`Open yafm:// links`)}),(0,X.jsx)(ig,{children:a(`Registers this app for yafm:// links, for the current user only. While this is on, the app repairs the entry at every launch.`)}),k&&(0,X.jsx)(ag,{children:k})]}),(0,X.jsxs)(ng,{children:[(0,X.jsx)(pg,{$on:T,children:a(T?`Active`:`Off`)}),(0,X.jsx)(mg,{$on:T,disabled:D,onClick:()=>void Ze(),title:a(T?`Stop opening yafm:// links`:`Open yafm:// links with this app`),type:`button`,children:(0,X.jsx)(hg,{})})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`Use as the default file manager`)}),(0,X.jsx)(ig,{children:a(`Registers this app for folder opens on this account. Explorer stays available from the context menu; on Linux this sets the inode/directory default.`)})]}),(0,X.jsxs)(ng,{children:[(0,X.jsx)(pg,{$on:u?.defaultFileManager??!1,children:u?.defaultFileManager?a(`Active`):a(`Off`)}),(0,X.jsx)(mg,{$on:u?.defaultFileManager??!1,disabled:!u,onClick:()=>void G({defaultFileManager:!u?.defaultFileManager}),title:u?.defaultFileManager?a(`Stop using this app for folders`):a(`Use this app for folders`),type:`button`,children:(0,X.jsx)(hg,{})})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`Open archives with this app`)}),(0,X.jsx)(ig,{children:a(`Registers this app for ZIP, 7z, RAR, TAR and the other archive types on this account, so double-clicking one shows it as a folder here. Windows may still ask once which app to use.`)})]}),(0,X.jsxs)(ng,{children:[(0,X.jsx)(pg,{$on:u?.archiveHandler??!1,children:u?.archiveHandler?a(`Active`):a(`Off`)}),(0,X.jsx)(mg,{$on:u?.archiveHandler??!1,disabled:!u,onClick:()=>void G({archiveHandler:!u?.archiveHandler}),title:u?.archiveHandler?a(`Stop opening archives with this app`):a(`Open archives with this app`),type:`button`,children:(0,X.jsx)(hg,{})})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`Reopen the tabs that were open`)}),(0,X.jsx)(ig,{children:a(`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`)})]}),(0,X.jsx)(mg,{$on:u?.restoreTabs??!0,disabled:!u,onClick:()=>void G({restoreTabs:!u?.restoreTabs}),type:`button`,children:(0,X.jsx)(hg,{})})]})]})]}),(0,X.jsxs)(Oh,{ref:Ee(`time`),children:[(0,X.jsx)(Th,{note:`Every timestamp in the interface uses this format: follow the system, force 24-hour or 12-hour time, or define your own pattern.`,title:`Time format`}),(0,X.jsx)(Ah,{children:(0,X.jsxs)(jh,{children:[(0,X.jsxs)(Mh,{children:[(0,X.jsx)($,{children:a(`Format`)}),(0,X.jsx)(ig,{children:a(`Follow the system, force 24-hour or 12-hour time, or define your own pattern.`)})]}),(0,X.jsx)(Bg,{children:sh.map(e=>(0,X.jsx)(Vg,{$active:(u?.timeFormat??`24`)===e.id,onClick:()=>void G({timeFormat:e.id}),type:`button`,children:a(e.label)},e.id))}),(u?.timeFormat??`24`)===`custom`&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Hg,{"aria-label":a(`Pattern`),onBlur:Re,onChange:e=>H(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Re()):e.key===`Escape`&&H(null)},spellCheck:!1,value:V??u?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,X.jsx)(ig,{children:a(`Tokens: yyyy year, MM month, dd day, HH 24-hour, mm minute, ss second, hh 12-hour and a AM/PM. Other characters are copied.`)})]}),(0,X.jsxs)(Ug,{children:[(0,X.jsx)(`span`,{children:a(`Preview`)}),(0,X.jsx)(`code`,{children:ha(ch,u?.timeFormat,V??u?.timeFormatPattern)})]})]})})]}),(0,X.jsxs)(Oh,{ref:Ee(`updates`),children:[(0,X.jsx)(Th,{note:`The running build and the newest one published.`,title:`Updates`}),(0,X.jsxs)(Ah,{children:[(0,X.jsxs)(Q,{children:[(0,X.jsx)($,{children:a(`Current version`)}),(0,X.jsx)(og,{children:e?`v${e.version}`:`—`})]}),(0,X.jsxs)(Q,{children:[(0,X.jsx)($,{children:a(`Latest version`)}),(0,X.jsx)(og,{children:W?`v${W.latest}`:`—`})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`Check for updates`)}),(0,X.jsx)(ig,{children:W&&!W.available?a(`You are on the latest version.`):a(`Reads the version file the release workflow publishes.`)})]}),(0,X.jsx)(ng,{children:(0,X.jsx)(qg,{disabled:me,onClick:()=>void He(),type:`button`,children:a(me?`Checking…`:`Check now`)})})]}),W?.available&&(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`Version {version} is available.`,{version:W.latest})}),(0,X.jsx)(ig,{children:a(`Download the new build from the releases page.`)})]}),(0,X.jsx)(ng,{children:(0,X.jsx)(qg,{onClick:()=>void Wr(ah),type:`button`,children:a(`Open release page`)})})]}),ge&&(0,X.jsx)(Q,{children:(0,X.jsx)(ag,{children:a(`Could not check for updates.`)})})]})]}),(0,X.jsxs)(Oh,{ref:Ee(`colors`),children:[(0,X.jsx)(Th,{note:`The accent and highlight colours the whole window uses.`,title:`Colors`}),(0,X.jsxs)(Ah,{children:[(0,X.jsxs)(jh,{children:[(0,X.jsxs)(Mh,{children:[(0,X.jsx)($,{children:a(`Presets`)}),(0,X.jsx)(ig,{children:a(`One click changes the accent and the highlight together.`)})]}),(0,X.jsxs)(Nh,{children:[sf.map(e=>(0,X.jsxs)(Ph,{$on:K.toLowerCase()===e.accent&&q.toLowerCase()===e.secondary,onClick:()=>Be(e.accent,e.secondary),title:`${a(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,X.jsxs)(Vh,{children:[(0,X.jsx)(`i`,{style:{background:e.accent}}),(0,X.jsx)(`i`,{style:{background:e.secondary}})]}),(0,X.jsx)(Fh,{children:a(e.name)})]},e.name)),Te.map((e,t)=>(0,X.jsxs)(Ih,{children:[(0,X.jsxs)(Ph,{$on:K.toLowerCase()===e.accent.toLowerCase()&&q.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>Be(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,X.jsxs)(Vh,{children:[(0,X.jsx)(`i`,{style:{background:e.accent}}),(0,X.jsx)(`i`,{style:{background:e.secondary}})]}),(0,X.jsx)(Fh,{children:e.name})]}),(0,X.jsx)(Lh,{onClick:()=>void We(t),title:a(`Remove preset`),type:`button`,children:(0,X.jsx)(hs,{size:9})})]},`${e.name}-${t}`)),de?(0,X.jsxs)(zh,{children:[(0,X.jsxs)(Vh,{children:[(0,X.jsx)(`i`,{style:{background:de.accent}}),(0,X.jsx)(`i`,{style:{background:de.secondary}})]}),(0,X.jsx)(Bh,{autoFocus:!0,maxLength:24,onChange:e=>fe({...de,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Ue()):e.key===`Escape`&&(e.preventDefault(),fe(null))},placeholder:a(`Preset name`),spellCheck:!1,value:de.name}),(0,X.jsx)(lg,{onClick:()=>void Ue(),type:`button`,children:a(`Save`)}),(0,X.jsx)(lg,{onClick:()=>fe(null),type:`button`,children:a(`Cancel`)})]}):(0,X.jsxs)(Rh,{disabled:!u,onClick:()=>fe({name:``,accent:K,secondary:q}),title:a(`Save the current colours as a preset`),type:`button`,children:[(0,X.jsx)(rs,{size:12}),a(`Add preset`)]})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`Accent color`)}),(0,X.jsx)(ig,{children:a(`Buttons, selections, focus rings, and active navigation.`)})]}),(0,X.jsxs)(ng,{children:[(0,X.jsx)(wh,{colors:U.accent,current:K,onApply:e=>Ve(`accent`,e)}),(0,X.jsx)(ug,{"aria-label":a(`Accent color`),disabled:!u,onBlur:()=>Ge(`accent`),onChange:e=>void G({accentColor:e.target.value}),onFocus:()=>ye({role:`accent`,color:K}),type:`color`,value:K}),(0,X.jsx)(dg,{children:K.toUpperCase()})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`Secondary color`)}),(0,X.jsx)(ig,{children:a(`Gradients, highlights, and the second end of the accent ramp.`)})]}),(0,X.jsxs)(ng,{children:[(0,X.jsx)(wh,{colors:U.secondary,current:q,onApply:e=>Ve(`secondary`,e)}),(0,X.jsx)(ug,{"aria-label":a(`Secondary color`),disabled:!u,onBlur:()=>Ge(`secondary`),onChange:e=>void G({secondaryColor:e.target.value}),onFocus:()=>ye({role:`secondary`,color:q}),type:`color`,value:q}),(0,X.jsx)(dg,{children:q.toUpperCase()})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`Reset colors`)}),(0,X.jsx)(ig,{children:a(`Returns the interface to the default blue and indigo theme.`)})]}),(0,X.jsx)(ng,{children:(0,X.jsx)(lg,{disabled:!u,onClick:()=>{ze(`accent`,K),ze(`secondary`,q),G({accentColor:null,secondaryColor:null})},type:`button`,children:a(`Reset`)})})]})]})]}),(0,X.jsxs)(Oh,{ref:Ee(`background`),children:[(0,X.jsx)(Th,{note:`A picture or video behind the whole window, from the title bar to the bottom.`,title:`Background`}),(0,X.jsxs)(Ah,{children:[(0,X.jsxs)(jh,{children:[(0,X.jsxs)(Mh,{children:[(0,X.jsx)($,{children:a(`Wallpaper`)}),(0,X.jsx)(ig,{children:a(`None keeps the normal dark surface. Every built-in concept comes in the app's colour presets; your own pictures, SVGs and videos are kept in the gallery.`)})]}),(0,X.jsx)(Og,{children:(0,X.jsx)(kg,{$active:!u?.backgroundSource,onClick:()=>void G({backgroundSource:null}),title:a(`None`),type:`button`,children:(0,X.jsx)(Pg,{children:a(`None`)})})}),(0,X.jsxs)(Tg,{children:[uf.map(e=>(0,X.jsxs)(Eg,{children:[(0,X.jsx)(Dg,{children:a(e.name)}),(0,X.jsx)(Og,{children:e.variants.map(t=>(0,X.jsx)(kg,{$active:u?.backgroundSource===t.id,onClick:()=>void G({backgroundSource:t.id}),title:`${a(e.name)} · ${a(t.preset)}`,type:`button`,children:(0,X.jsx)(`img`,{alt:``,src:t.url})},t.id))})]},e.id)),(0,X.jsxs)(Eg,{children:[(0,X.jsx)(Dg,{children:a(`Motion`)}),(0,X.jsx)(Og,{children:lf.map(e=>(0,X.jsxs)(kg,{$active:u?.backgroundSource===e.id,onClick:()=>void G({backgroundSource:e.id}),title:a(e.name),type:`button`,children:[(0,X.jsx)(`img`,{alt:``,src:e.poster}),(0,X.jsx)(Mg,{children:(0,X.jsx)(bs,{size:11})})]},e.id))})]}),(0,X.jsxs)(Eg,{children:[(0,X.jsx)(Dg,{children:a(`Custom`)}),(0,X.jsxs)(Og,{children:[(u?.backgroundCustom??[]).map(e=>(0,X.jsx)(xh,{active:u?.backgroundSource===`file:${e}`,onRemove:()=>ke(e),onSelect:()=>void G({backgroundSource:`file:${e}`}),path:e},e)),(0,X.jsxs)(Ng,{onClick:()=>void Oe([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,X.jsx)(rs,{size:12}),a(`Image…`)]}),(0,X.jsxs)(Ng,{onClick:()=>void Oe([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,X.jsx)(rs,{size:12}),a(`Video…`)]})]})]})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsx)($,{children:a(`Blur`)}),(0,X.jsxs)(ng,{children:[(0,X.jsx)(wg,{max:40,min:0,onChange:e=>void G({backgroundBlur:Number(e.target.value)}),type:`range`,value:u?.backgroundBlur??0}),(0,X.jsxs)(og,{children:[u?.backgroundBlur??0,`px`]})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsx)($,{children:a(`Saturation`)}),(0,X.jsxs)(ng,{children:[(0,X.jsx)(wg,{max:200,min:0,onChange:e=>void G({backgroundSaturation:Number(e.target.value)}),type:`range`,value:u?.backgroundSaturation??100}),(0,X.jsxs)(og,{children:[u?.backgroundSaturation??100,`%`]})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsx)($,{children:a(`Brightness`)}),(0,X.jsxs)(ng,{children:[(0,X.jsx)(wg,{max:150,min:40,onChange:e=>void G({backgroundBrightness:Number(e.target.value)}),type:`range`,value:u?.backgroundBrightness??100}),(0,X.jsxs)(og,{children:[u?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,X.jsxs)(Oh,{ref:Ee(`safety`),children:[(0,X.jsx)(Th,{note:`Deleting a protected folder, anything inside a recursive entry, or a folder that contains one always waits for an explicit confirmation.`,title:`Safety`}),(0,X.jsxs)(Ah,{children:[(0,X.jsxs)(jh,{children:[(0,X.jsxs)(Mh,{children:[(0,X.jsx)($,{children:a(`Protected folders`)}),(0,X.jsx)(ig,{children:a(`Rules are full-path globs: * stays inside one name, ** crosses folders, and ? matches one character. A rule without a folder part, such as *.log, applies to that name at any depth. %VARS%, $VARS and ~ are expanded first.`)})]}),(0,X.jsx)(Fg,{children:(u?.protectedPaths??[]).map(e=>(0,X.jsxs)(Ig,{children:[(0,X.jsx)(Lg,{"aria-label":a(`Protected path`),onBlur:je,onChange:t=>oe({from:e,value:t.target.value}),onFocus:()=>oe({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),je()):e.key===`Escape`&&oe(null)},spellCheck:!1,value:ae?.from===e?ae.value:e}),(0,X.jsx)(Rg,{onClick:()=>Me(e),title:a(`Remove`),type:`button`,children:(0,X.jsx)(hs,{size:10})})]},e))}),(0,X.jsxs)(zg,{children:[(0,X.jsx)(lg,{onClick:()=>void Ne(),type:`button`,children:a(`Restore defaults`)}),(0,X.jsx)(lg,{onClick:()=>void Ae(),type:`button`,children:a(`Add folder…`)})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`Confirmation delay`)}),(0,X.jsx)(ig,{children:a(`The delete button in the protected-folder dialog stays disabled for this many seconds. At least 2.`)})]}),(0,X.jsxs)(ng,{children:[(0,X.jsx)(wg,{max:30,min:2,onChange:e=>void G({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:u?.deleteDelaySeconds??5}),(0,X.jsxs)(og,{children:[u?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,X.jsxs)(Oh,{ref:Ee(`tags`),children:[(0,X.jsx)(Th,{note:`Every tag in the catalogue; add, rename, recolour or remove them here.`,title:`Tags`}),(0,X.jsxs)(Ah,{children:[(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsxs)(rg,{children:[(0,X.jsx)(sg,{"aria-label":a(`Color of the new tag`),onChange:e=>z(e.target.value),type:`color`,value:ie}),(0,X.jsx)(gg,{onChange:e=>re(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ke())},placeholder:a(`New tag`),spellCheck:!1,value:R})]}),(0,X.jsx)(ig,{children:a(`Add a tag here; it is available in every folder.`)})]}),(0,X.jsx)(ng,{children:(0,X.jsx)(lg,{disabled:F||R.trim().length===0,onClick:()=>void Ke(),type:`button`,children:a(`Add`)})})]}),ne&&(0,X.jsx)(Q,{children:(0,X.jsx)(ag,{children:ne})}),j.length===0&&(0,X.jsx)(Q,{children:(0,X.jsx)(ig,{children:a(`No tags yet. Add one below; it is available in every folder.`)})}),j.map(e=>(0,X.jsx)(Q,{children:N?.name===e.name?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsxs)(rg,{children:[(0,X.jsx)(sg,{"aria-label":a(`Color of {tag}`,{tag:e.name}),onChange:t=>void qe(e.name,t.target.value),title:a(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,X.jsx)(cg,{autoFocus:!0,disabled:F,onChange:t=>P({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Ye()):e.key===`Escape`&&(e.preventDefault(),P(null))},value:N.value})]}),(0,X.jsx)(ig,{children:a(`Press Enter to save, Escape to cancel.`)})]}),(0,X.jsxs)(ng,{children:[(0,X.jsx)(lg,{disabled:F,onClick:()=>void Ye(),type:`button`,children:a(`Save`)}),(0,X.jsx)(lg,{disabled:F,onClick:()=>P(null),type:`button`,children:a(`Cancel`)})]})]}):(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsxs)(rg,{children:[(0,X.jsx)(sg,{"aria-label":a(`Color of {tag}`,{tag:e.name}),onChange:t=>void qe(e.name,t.target.value),title:a(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,X.jsx)($,{children:e.name})]}),(0,X.jsx)(ig,{children:oa(a,e.folders,`Used in 1 folder. Renaming or removing it updates that folder's index.`,`Used in {count} folders. Renaming or removing it updates those folders' indexes.`)})]}),(0,X.jsxs)(ng,{children:[(0,X.jsx)(lg,{disabled:F,onClick:()=>P({name:e.name,value:e.name}),type:`button`,children:a(`Edit`)}),(0,X.jsxs)(fg,{disabled:F,onClick:()=>void Je(e.name),type:`button`,children:[(0,X.jsx)(ps,{size:13}),a(`Remove`)]})]})]})},e.name))]})]}),(0,X.jsxs)(Oh,{ref:Ee(`files-view`),children:[(0,X.jsx)(Th,{note:`The defaults every folder starts with; a folder can still override them.`,title:`Files view`,global:!0}),(0,X.jsxs)(Ah,{children:[(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`Default view`)}),(0,X.jsx)(ig,{children:a(`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`)})]}),(0,X.jsx)(ng,{children:(0,X.jsxs)(Sg,{children:[(0,X.jsx)(Cg,{$on:we.mode===`list`,onClick:()=>void G({defaultView:{...we,mode:`list`}}),type:`button`,children:a(`List`)}),(0,X.jsx)(Cg,{$on:we.mode===`grid`,onClick:()=>void G({defaultView:{...we,mode:`grid`}}),type:`button`,children:a(`Grid`)})]})})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`List icon size`)}),(0,X.jsx)(ig,{children:a(`The icon in the list rows.`)})]}),(0,X.jsxs)(ng,{children:[(0,X.jsx)(wg,{max:48,min:16,onChange:e=>void G({defaultView:{...we,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:we.iconSize}),(0,X.jsxs)(og,{children:[we.iconSize,`px`]})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`Grid size`)}),(0,X.jsx)(ig,{children:a(`The height of a grid tile; the icon inside follows it.`)})]}),(0,X.jsxs)(ng,{children:[(0,X.jsx)(wg,{max:260,min:100,onChange:e=>void G({defaultView:{...we,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:we.gridSize}),(0,X.jsxs)(og,{children:[we.gridSize,`px`]})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsxs)(rg,{children:[(0,X.jsx)($,{children:a(`Selection checkboxes`)}),(0,X.jsx)(nh,{})]}),(0,X.jsx)(ig,{children:a(`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`)})]}),(0,X.jsx)(mg,{$on:u?.showCheckboxes??!0,disabled:!u,onClick:()=>void G({showCheckboxes:!(u?.showCheckboxes??!0)}),type:`button`,children:(0,X.jsx)(hg,{})})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsxs)(rg,{children:[(0,X.jsx)($,{children:a(`Open with a single click`)}),(0,X.jsx)(nh,{})]}),(0,X.jsx)(ig,{children:a(`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`)})]}),(0,X.jsx)(mg,{$on:u?.openOnSingleClick??!1,disabled:!u,onClick:()=>void G({openOnSingleClick:!(u?.openOnSingleClick??!1)}),type:`button`,children:(0,X.jsx)(hg,{})})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsxs)(rg,{children:[(0,X.jsx)($,{children:a(`Confirm before deleting`)}),(0,X.jsx)(nh,{})]}),(0,X.jsx)(ig,{children:a(`Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.`)})]}),(0,X.jsx)(mg,{$on:u?.confirmDelete??!1,disabled:!u,onClick:()=>void G({confirmDelete:!(u?.confirmDelete??!1)}),type:`button`,children:(0,X.jsx)(hg,{})})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsxs)(rg,{children:[(0,X.jsx)($,{children:a(`Play audio in video previews`)}),(0,X.jsx)(nh,{})]}),(0,X.jsx)(ig,{children:a(`Video previews play muted by default. Turn this on to hear their audio while the details panel is open.`)})]}),(0,X.jsx)(mg,{$on:u?.previewVideoAudio??!1,disabled:!u,onClick:()=>void G({previewVideoAudio:!(u?.previewVideoAudio??!1)}),type:`button`,children:(0,X.jsx)(hg,{})})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsxs)(rg,{children:[(0,X.jsx)($,{children:a(`Autoplay video previews`)}),(0,X.jsx)(nh,{})]}),(0,X.jsx)(ig,{children:a(`Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.`)})]}),(0,X.jsx)(mg,{$on:u?.previewVideoAutoplay??!1,disabled:!u,onClick:()=>void G({previewVideoAutoplay:!(u?.previewVideoAutoplay??!1)}),type:`button`,children:(0,X.jsx)(hg,{})})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsxs)(rg,{children:[(0,X.jsx)($,{children:a(`Preview panel under the list`)}),(0,X.jsx)(nh,{})]}),(0,X.jsx)(ig,{children:a(`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`)})]}),(0,X.jsx)(mg,{$on:we.showImages??!0,onClick:()=>void G({defaultView:{...we,showImages:!(we.showImages??!0)}}),type:`button`,children:(0,X.jsx)(hg,{})})]}),(0,X.jsx)(Q,{children:(0,X.jsxs)(tg,{children:[(0,X.jsxs)(rg,{children:[(0,X.jsx)($,{children:a(`Columns`)}),(0,X.jsx)(nh,{})]}),(0,X.jsx)(ig,{children:a(`Shown in every folder; changing them changes all folders at once.`)})]})}),(0,X.jsx)(Q,{children:(0,X.jsxs)(Wg,{children:[zu.map(e=>(0,X.jsxs)(Gg,{children:[(0,X.jsx)(`input`,{checked:(we.columns??[]).includes(e.id),onChange:()=>void Xe(e.id),type:`checkbox`}),(0,X.jsx)(`span`,{children:a(e.label)})]},e.id)),(0,X.jsxs)(Gg,{children:[(0,X.jsx)(`input`,{checked:(we.columns??[]).includes(`linkTarget`),onChange:()=>void Xe(`linkTarget`),type:`checkbox`}),(0,X.jsx)(`span`,{children:a(`Link target after the name`)})]})]})})]}),(0,X.jsxs)(Zg,{children:[a(`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.`),` `,(0,X.jsx)(nh,{}),` `,a(`Anything marked as global always applies to every folder.`)]})]}),(0,X.jsxs)(Oh,{ref:Ee(`shortcuts`),children:[(0,X.jsx)(Th,{note:`The keys this window listens for. Click a combination to record a new one.`,title:`Shortcuts`}),(0,X.jsxs)(Ah,{children:[ih.map(({id:e,label:t,note:n})=>(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(t)}),(0,X.jsx)(ig,{children:a(n)})]}),(0,X.jsx)(ng,{children:(0,X.jsx)(Kg,{$listening:A===e,onClick:()=>te(e),type:`button`,children:A===e?a(`Press a key…`):Ei($e[e])})})]},e)),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`Reset`)}),(0,X.jsx)(ig,{children:a(`Back to the default combination for every action.`)})]}),(0,X.jsx)(ng,{children:(0,X.jsx)(qg,{onClick:()=>void G({shortcuts:{...xi}}),type:`button`,children:a(`Reset`)})})]})]})]}),(0,X.jsxs)(Oh,{ref:Ee(`memory`),children:[(0,X.jsx)(Th,{note:`What the process holds and how to give it back.`,title:`Memory`}),(0,X.jsxs)(Ah,{children:[(0,X.jsxs)(Zh,{children:[(0,X.jsxs)(Qh,{children:[(0,X.jsx)($,{children:a(`Process memory`)}),(0,X.jsx)(og,{children:C?`${sa(C.private)} · ${Xh(C.private,C.available)}`:`—`})]}),(0,X.jsx)($h,{children:(0,X.jsx)(eg,{$ratio:C?C.private/Math.max(C.available,1):0,$tone:Sa(C?C.private/Math.max(C.available,1):0)})}),(0,X.jsx)(ig,{children:C?a(`Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.`,{available:sa(C.available),resident:sa(C.workingSet)}):a(`Reading the current usage…`)})]}),(0,X.jsxs)(Zh,{children:[(0,X.jsxs)(Qh,{children:[(0,X.jsx)($,{children:a(`Managed heap`)}),(0,X.jsx)(og,{children:C?`${sa(C.managed)} · ${Xh(C.managed,C.private)}`:`—`})]}),(0,X.jsx)($h,{children:(0,X.jsx)(eg,{$ratio:C?C.managed/Math.max(C.private,1):0,$tone:`var(--accent-secondary)`})}),(0,X.jsx)(ig,{children:a(`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`)})]}),(0,X.jsxs)(Zh,{children:[(0,X.jsxs)(Qh,{children:[(0,X.jsx)($,{children:a(`Native and runtime`)}),(0,X.jsx)(og,{children:C?`${sa(Math.max(0,C.private-C.managed))} · ${Xh(Math.max(0,C.private-C.managed),C.private)}`:`—`})]}),(0,X.jsx)($h,{children:(0,X.jsx)(eg,{$ratio:C?Math.max(0,C.private-C.managed)/Math.max(C.private,1):0,$tone:`var(--accent-primary)`})}),(0,X.jsx)(ig,{children:a(`The runtime, loaded libraries and the Rust helper share this part. Rust runs inside the process, so it has no separate figure.`)})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`Free memory`)}),(0,X.jsx)(ig,{children:a(`Compacts the heap and returns unused pages to the system. Always safe.`)})]}),(0,X.jsx)(ng,{children:(0,X.jsx)(qg,{onClick:()=>void Kr().then(w),type:`button`,children:a(`Trim now`)})})]})]})]}),(0,X.jsxs)(Oh,{ref:Ee(`overview`),children:[(0,X.jsx)(Th,{note:`The home tab's history and how much of it it shows.`,title:`Overview`}),(0,X.jsx)(Ah,{children:(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`Recent items`)}),(0,X.jsx)(ig,{children:a(`How many recently opened folders the overview lists. 0 hides the section.`)})]}),(0,X.jsx)(ng,{children:(0,X.jsx)(gg,{max:50,min:0,onChange:e=>void et(Number(e.target.value)),type:`number`,value:u?.recentLimit??10})})]})})]}),(0,X.jsxs)(Oh,{ref:Ee(`gallery`),children:[(0,X.jsx)(Th,{note:`The folders the gallery scans for pictures and videos.`,title:`Gallery`}),(0,X.jsxs)(Ah,{children:[(u?.galleryRoots??[]).map(e=>(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:Ca(e)}),(0,X.jsx)(ig,{children:e})]}),(0,X.jsx)(ng,{children:(0,X.jsx)(Jg,{onClick:()=>void tt((u?.galleryRoots??[]).filter(t=>t!==e)),title:a(`Stop scanning this folder`),type:`button`,children:(0,X.jsx)(hs,{size:12})})})]},e)),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`Scan folders`)}),(0,X.jsx)(ig,{children:(u?.galleryRoots??[]).length===0?a(`Nothing added yet, so the gallery reads the Pictures folder.`):a(`Only these folders are scanned, three levels deep.`)})]}),(0,X.jsx)(ng,{children:(0,X.jsx)(qg,{onClick:()=>void nt(),type:`button`,children:a(`Choose folder…`)})})]})]})]}),(0,X.jsxs)(Oh,{ref:Ee(`icons`),children:[(0,X.jsx)(Th,{note:`Where the shell's own icons and the built-in glyphs come from.`,title:`Icons`}),(0,X.jsxs)(Ah,{children:[(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`Use system file icons`)}),(0,X.jsx)(ig,{children:a(`Ask the shell for the icon of each file type instead of the built-in glyphs.`)})]}),(0,X.jsx)(mg,{$on:u?.systemIcons??!1,disabled:!u,onClick:()=>void G({systemIcons:!u?.systemIcons}),type:`button`,children:(0,X.jsx)(hg,{})})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`Use custom folder icons`)}),(0,X.jsx)(ig,{children:a(`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`)})]}),(0,X.jsx)(mg,{$on:u?.customFolderIcons??!1,disabled:!u,onClick:()=>void G({customFolderIcons:!u?.customFolderIcons}),type:`button`,children:(0,X.jsx)(hg,{})})]})]})]}),(0,X.jsxs)(Oh,{ref:Ee(`extension-icons`),children:[(0,X.jsx)(Th,{note:`A custom glyph for one file extension.`,title:`Icons by extension`}),(0,X.jsxs)(Ah,{children:[Object.entries(u?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:e}),(0,X.jsx)(ig,{children:vh(a,t)})]}),(0,X.jsxs)(ng,{children:[(0,X.jsx)(yh,{source:t}),(0,X.jsx)(Jg,{onClick:()=>void Qe(e,null),title:a(`Remove this rule`),type:`button`,children:(0,X.jsx)(hs,{size:12})})]})]},e)),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`Add a rule`)}),(0,X.jsx)(ig,{children:a(`Extension and the icon to draw for it.`)})]}),(0,X.jsxs)(ng,{children:[(0,X.jsx)(gg,{onChange:e=>h(e.target.value),placeholder:`.psd`,spellCheck:!1,value:m}),(0,X.jsxs)(xg,{children:[(0,X.jsx)(Jg,{onClick:()=>b(e=>!e),title:a(`Choose the icon`),type:`button`,children:(0,X.jsx)(yh,{source:g})}),y&&(0,X.jsx)(Qf,{allowDefault:!1,onClose:()=>b(!1),onPick:e=>{v(e??`file`),b(!1)},value:g})]}),(0,X.jsx)(Jg,{onClick:()=>void rt(),title:a(`Add the rule`),type:`button`,children:(0,X.jsx)(rs,{size:13})})]})]})]})]}),(0,X.jsxs)(Oh,{ref:Ee(`folder-icons`),children:[(0,X.jsx)(Th,{note:`A single folder can carry an icon of its own.`,title:`Folder icons`}),(0,X.jsxs)(Ah,{children:[(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`Give a folder its own icon`)}),(0,X.jsx)(ig,{children:a(`Stored in the folder's parent {index}, so it stays with the files.`,{index:`.yafm-index.db`})})]}),(0,X.jsxs)(ng,{children:[f&&(0,X.jsx)(bh,{src:f.icon}),(0,X.jsx)(qg,{disabled:x,onClick:()=>void it(),type:`button`,children:a(x?`Choosing…`:`Choose folder and icon…`)})]})]}),f&&(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:Ca(f.folder)}),(0,X.jsx)(ig,{children:f.folder})]}),(0,X.jsx)(ng,{children:(0,X.jsxs)(Xg,{children:[(0,X.jsx)(ms,{size:11}),` `,a(`Saved`)]})})]})]})]}),(0,X.jsxs)(Oh,{ref:Ee(`folder-index`),children:[(0,X.jsx)(Th,{note:`The hidden cache that makes a folder open instantly next time.`,title:`Folder index`}),(0,X.jsxs)(Ah,{children:[(0,X.jsxs)(Q,{children:[(0,X.jsxs)(tg,{children:[(0,X.jsx)($,{children:a(`Keep a {index} in every folder`,{index:`.yafm-index.db`})}),(0,X.jsx)(ig,{children:a(`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`)})]}),(0,X.jsx)(mg,{$on:u?.writeDirectoryIndex??!0,disabled:!u,onClick:()=>void G({writeDirectoryIndex:!u?.writeDirectoryIndex}),type:`button`,children:(0,X.jsx)(hg,{})})]}),(0,X.jsxs)(jh,{children:[(0,X.jsxs)(Mh,{children:[(0,X.jsx)($,{children:a(`Directory index blacklist`)}),(0,X.jsx)(ig,{children:a(`Rules are full-path globs: * matches within one path segment and ** crosses folders. Matching folders use the central database instead of creating .yafm-index.db files.`)})]}),(0,X.jsx)(Fg,{children:(u?.directoryIndexBlacklist??[]).map(e=>(0,X.jsxs)(Ig,{children:[(0,X.jsx)(Lg,{"aria-label":a(`Directory index blacklist rule`),onBlur:Pe,onChange:t=>B({from:e,value:t.target.value}),onFocus:()=>B({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Pe()):e.key===`Escape`&&B(null)},spellCheck:!1,value:se?.from===e?se.value:e}),(0,X.jsx)(Rg,{onClick:()=>Ie(e),title:a(`Remove`),type:`button`,children:(0,X.jsx)(hs,{size:10})})]},e))}),(0,X.jsxs)(zg,{children:[(0,X.jsx)(lg,{onClick:Le,type:`button`,children:a(`Restore defaults`)}),(0,X.jsx)(gg,{onChange:e=>le(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Fe())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:ce}),(0,X.jsx)(lg,{onClick:Fe,type:`button`,children:a(`Add the rule`)})]})]})]}),!(u?.writeDirectoryIndex??!0)&&(0,X.jsx)(Qg,{children:_h(a,e?.platform)})]}),(0,X.jsxs)(Oh,{ref:Ee(`indexing`),children:[(0,X.jsx)(Th,{note:`Background folder size and item-count walks.`,title:`Index tasks`}),(0,X.jsx)(gh,{})]}),(0,X.jsxs)(Oh,{ref:Ee(`files`),children:[(0,X.jsx)(Th,{note:`What the listings include.`,title:`Files`}),(0,X.jsxs)(Ah,{children:[(0,X.jsxs)(Q,{children:[(0,X.jsx)($,{children:a(`Hidden items`)}),(0,X.jsx)(og,{children:hh(a,c?.showHidden)})]}),(0,X.jsxs)(Q,{children:[(0,X.jsx)($,{children:a(`Protected operating system files`)}),(0,X.jsx)(og,{children:hh(a,c?.showSystem)})]})]}),(0,X.jsx)(Zg,{children:a(`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`)})]})]}),(0,X.jsxs)(Gh,{"aria-label":a(`Settings sections`),children:[(0,X.jsx)(Kh,{children:a(`Sections`)}),(0,X.jsx)(qh,{children:dh.map(({id:e,label:t})=>(0,X.jsx)(Jh,{$active:be===e,onClick:()=>De(e),type:`button`,children:(0,X.jsx)(`span`,{children:a(t)})},e))}),(0,X.jsx)(Yh,{children:a(`Changes are saved as you make them.`)})]})]})}function hh(e,t){return e(t===void 0?`Reading…`:t?`Shown`:`Hidden`)}function gh(){let e=Kn(),[t,n]=(0,_.useState)(null);return(0,_.useEffect)(()=>{let e=!0,t=()=>Nr().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,X.jsx)(Qg,{children:e(`No indexing tasks are running.`)}):(0,X.jsxs)(Ah,{children:[(0,X.jsx)(Q,{children:(0,X.jsx)($,{children:e(`{count} indexing tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,X.jsx)(Q,{children:(0,X.jsx)(og,{title:e,children:e})},e))]}):(0,X.jsx)(Qg,{children:e(`Index task information is unavailable.`)})}function _h(e,t){return e(`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`,{place:e(t===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:t===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`)})}function vh(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built-in: {source}`,{source:t})}function yh({source:e}){let t=Ri(e.startsWith(`file:`)?e.slice(5):null);return(0,X.jsx)(Yg,{children:t?(0,X.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,X.jsx)(lu,{name:e,size:16})})}function bh({src:e}){let t=Ri(e);return(0,X.jsx)(Yg,{children:t&&(0,X.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function xh({path:e,active:t,onSelect:n,onRemove:r}){let i=Kn(),a=Ui(e),o=Cf(e);return(0,X.jsxs)(Ag,{children:[(0,X.jsxs)(kg,{$active:t,onClick:n,title:e,type:`button`,children:[a&&(o?(0,X.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${a}#t=0.5`}):(0,X.jsx)(`img`,{alt:``,src:a})),o&&(0,X.jsx)(Mg,{children:(0,X.jsx)(bs,{size:11})})]}),(0,X.jsx)(jg,{onClick:r,title:i(`Remove`),type:`button`,children:(0,X.jsx)(hs,{size:9})})]})}function Sh({value:e,options:t,onChange:n,disabled:r}){let i=Kn(),[a,o]=(0,_.useState)(null),s=(0,_.useRef)(null);return(0,_.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(_g,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,X.jsx)(`span`,{children:Ch(i,e)}),(0,X.jsx)(vg,{children:(0,X.jsx)(os,{size:11})})]}),a&&(0,sc.createPortal)((0,X.jsx)(yg,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,X.jsxs)(bg,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,X.jsx)(`span`,{children:Ch(i,t)}),t===e&&(0,X.jsx)(ms,{size:11})]},t))}),document.body)]})}function Ch(e,t){return t===lh?e(`System default`):uh[t]??t}function wh({colors:e,current:t,onApply:n}){let r=Kn();if(e.length===0)return null;let[i,...a]=e;return(0,X.jsxs)(Hh,{children:[(0,X.jsxs)(Wh,{$color:i,onClick:()=>n(i),title:r(`Previous colour · {colour}`,{colour:i}),type:`button`,children:[(0,X.jsx)(`i`,{}),r(`Previous`)]}),a.map(e=>(0,X.jsx)(Uh,{$color:e,onClick:()=>n(e),title:r(`Use {colour}`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,X.jsx)(ms,{size:9})},e))]})}function Th({title:e,note:t,global:n=!1}){let r=Kn();return(0,X.jsxs)(kh,{children:[(0,X.jsxs)(`h2`,{children:[r(e),n&&(0,X.jsx)(nh,{})]}),(0,X.jsx)(`p`,{children:r(t)})]})}var Eh=J.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,Dh=J.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,Oh=J.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 900px;
    scroll-margin-top: 10px;
`,kh=J.header`
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
`,Ah=J.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,jh=J.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Mh=J.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Nh=J.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,Ph=J.button`
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
`,Fh=J.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ih=J.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,Lh=J.button`
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
`,Rh=J.button`
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
`,zh=J.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Bh=J.input`
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
`,Vh=J.span`
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
`,Hh=J.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,Uh=J.button`
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
`,Wh=J.button`
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
`,Gh=J.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,Kh=J.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,qh=J.div`
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
`,Jh=J.button`
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

    ${({$active:e})=>e&&Tn`
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
`,Yh=J.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function Xh(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}var Zh=J.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,Qh=J.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,$h=J.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,eg=J.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,Q=J.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,tg=J.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,ng=J.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,$=J.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,rg=J.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,ig=J.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,ag=J.span`
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
`,og=J.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,sg=J.input`
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
`,cg=J.input`
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
`,lg=J.button`
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
`,ug=J.input`
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
`,dg=J.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,fg=J.button`
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
`,pg=J.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,mg=J.button`
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
`,hg=J.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,gg=J.input`
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
`,_g=J.button`
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
`,vg=J.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,yg=J.div`
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
`,bg=J.button`
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
`,xg=J.span`
    position: relative;
    display: inline-flex;
`,Sg=J.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Cg=J.button`
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
`,wg=J.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,Tg=J.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,Eg=J.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Dg=J.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Og=J.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,kg=J.button`
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
`,Ag=J.div`
    position: relative;
    width: 102px;
    height: 58px;
`,jg=J.button`
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
`,Mg=J.span`
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
`,Ng=J.button`
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
`,Pg=J.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,Fg=J.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Ig=J.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,Lg=J.input`
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
`,Rg=J.button`
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
`,zg=J.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,Bg=J.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,Vg=J.button`
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
`,Hg=J.input`
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
`,Ug=J.div`
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
`,Wg=J.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,Gg=J.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,Kg=J.button`
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
`,qg=J.button`
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
`,Jg=J.button`
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
`,Yg=J.span`
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
`,Xg=J.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,Zg=J.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,Qg=J.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,$g=150,e_=2500,t_=3,n_=600;function r_({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:a,onSearchMatches:o,onPick:s,onSelectionChange:c,onAddToTray:l}){let u=Kn(),[d,f]=(0,_.useState)([]),[p,m]=(0,_.useState)(0),[h,g]=(0,_.useState)(!0),[v,y]=(0,_.useState)(null),[b,x]=(0,_.useState)(!1),S=(0,_.useRef)([]),C=(0,_.useRef)(0),w=(0,_.useRef)(!1),T=(0,_.useRef)(!0),E=(0,_.useRef)(0),D=(0,_.useRef)(null),O=(0,_.useRef)(0),k=(0,_.useCallback)(async e=>{let t=++E.current;g(!0),T.current=!0,y(null);try{let n=await Tr(0,$g,e);if(t!==E.current)return;S.current=n.entries,C.current=n.total,f(n.entries),m(n.total)}catch(e){t===E.current&&y(e instanceof Error?e.message:String(e))}finally{t===E.current&&(T.current=!1,g(!1))}},[]);(0,_.useEffect)(()=>{k(!1)},[k]);let ee=(0,_.useCallback)(async()=>{if(T.current||w.current||S.current.length>=C.current)return;let e=E.current;w.current=!0;try{let t=S.current,n=C.current;for(let r=0;r<t_&&t.length<n;r++){let r=await Tr(t.length,$g,!1);if(e!==E.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<$g)break}if(e!==E.current)return;S.current=t,C.current=n,(0,_.startTransition)(()=>{f(t),m(n)})}catch{}finally{w.current=!1}},[]),A=(0,_.useCallback)(e=>{O.current||=window.requestAnimationFrame(()=>{O.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<e_&&ee()})},[ee]);(0,_.useEffect)(()=>{let e=D.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&ee()},{root:e.parentElement,rootMargin:`${e_}px 0px`});return t.observe(e),()=>t.disconnect()},[ee]),(0,_.useEffect)(()=>{if(d.length>=p)return;let e=window.setTimeout(()=>{let e=D.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<e_&&ee()},200);return()=>window.clearTimeout(e)},[d.length,p,ee]);let te=(0,_.useMemo)(()=>({path:``,parent:null,entries:d.map(i_),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[d]),j=(0,_.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),M=(0,_.useCallback)(e=>{s?s(e):or(e)},[s]),N=(0,_.useCallback)(e=>{let t=a_(e.modified);return{id:t,label:t}},[]),P=()=>{x(!0),k(!0).finally(()=>x(!1))},F=d.length<p,I=(0,_.useMemo)(()=>!a?.open||a.query.trim().length===0?[]:d.filter(e=>ea(e.name,a)||ea(e.path,a)),[d,a?.open,a?.query,a?.matchCase,a?.regex]),ne=(0,_.useMemo)(()=>a?.open?{query:a.query,matchCase:a.matchCase,regex:a.regex,mode:a.mode,currentPath:I[Math.min(a.index,Math.max(0,I.length-1))]?.path??null}:Ki,[a?.open,a?.query,a?.matchCase,a?.regex,a?.mode,a?.index,I]);return(0,_.useEffect)(()=>{o?.(I.length)},[I.length,o]),(0,X.jsxs)(o_,{children:[(0,X.jsxs)(s_,{children:[(0,X.jsxs)(c_,{children:[(0,X.jsx)(`span`,{children:u(`Gallery`)}),(0,X.jsx)(l_,{children:h?u(`scanning…`):u(`{shown} of {total} pictures`,{shown:d.length,total:p})})]}),(0,X.jsx)(u_,{onClick:P,title:u(`Scan the folders again`),type:`button`,children:(0,X.jsx)(d_,{$spinning:b,children:(0,X.jsx)(ns,{size:14})})})]}),v&&(0,X.jsx)(p_,{children:v}),!v&&!h&&p===0&&(0,X.jsx)(p_,{children:u(`No pictures found.`)}),!v&&(h||p>0)&&(0,X.jsx)(Hu,{confirmDelete:n,find:ne,listing:h&&d.length===0?null:te,loading:h,error:null,view:j,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:c,onSort:()=>void 0,onOpen:M,onOpenFile:M,onRefresh:P,onAddToTray:l,groupOf:N,onGridScroll:A,gridFooter:(0,X.jsx)(f_,{$space:F?n_:1,ref:D}),allowBackgroundMenu:!1})]})}function i_(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function a_(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(ca(),{weekday:`long`}):t.toLocaleDateString(ca(),{year:`numeric`,month:`long`,day:`numeric`})}var o_=J.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,s_=J.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,c_=J.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,l_=J.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,u_=J.button`
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
`,d_=J.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,f_=J.div`
    height: ${({$space:e})=>e}px;
`,p_=J.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function m_({places:e,drives:t,recent:n,recentLimit:r,currentPath:i,activeKind:a,homePath:o=``,version:s=0,historyVersion:c=0,hiddenViews:l=[],onNavigate:u,onOpenView:d}){let[f,p]=(0,_.useState)([]),m=Kn(),[h,g]=(0,_.useState)(null),v=Fa();(0,_.useEffect)(()=>{Fr().then(e=>{g(e),p(Ul(e).filter(e=>e.pinned))},()=>{g(null),p([])})},[s]);let y=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>b_(e.path,t));return{name:h?.placeNames?.[t]??n?.name??(Ca(t)||t),path:t,kind:`folder`,icon:n?.icon??h?.placeIcons?.[t]??null}}),b=a===`files`;return(0,X.jsxs)(x_,{children:[(0,X.jsxs)(S_,{children:[!l.includes(`home`)&&(0,X.jsxs)(D_,{$active:a===`home`,onClick:e=>d(`home`,wi(e)),title:m(`Overview`),type:`button`,children:[(0,X.jsx)(js,{}),(0,X.jsx)(k_,{children:m(`Overview`)})]}),!l.includes(`recycle`)&&(0,X.jsxs)(D_,{$active:a===`recycle`,onClick:e=>d(`recycle`,wi(e)),title:m(`Recycle Bin`),type:`button`,children:[(0,X.jsx)(ps,{}),(0,X.jsx)(k_,{children:m(`Recycle Bin`)})]}),!l.includes(`gallery`)&&(0,X.jsxs)(D_,{$active:a===`gallery`,onClick:e=>d(`gallery`,wi(e)),title:m(`Gallery`),type:`button`,children:[(0,X.jsx)(ys,{}),(0,X.jsx)(k_,{children:m(`Gallery`)})]})]}),f.map(e=>(0,X.jsxs)(w_,{children:[(0,X.jsxs)(D_,{as:`div`,$active:!1,children:[(0,X.jsx)(O_,{children:(0,X.jsx)(Gl,{panel:e,size:16})}),(0,X.jsx)(k_,{children:m(e.title)})]}),(0,X.jsx)(T_,{children:(0,X.jsxs)(E_,{children:[e.kind===`quick`&&y(e).map(e=>(0,X.jsxs)(D_,{$active:b&&b_(i,e.path),onClick:t=>u(e.path,wi(t)),title:e.path,type:`button`,children:[(0,X.jsx)(Kl,{place:e}),(0,X.jsx)(k_,{children:e.name})]},e.path)),e.kind===`recent`&&n.slice(0,r).map(e=>{let t=Ia(v,e.path);return(0,X.jsxs)(D_,{$active:b&&b_(i,e.path),onClick:t=>e.isDirectory?u(e.path,wi(t)):void or(e.path),title:e.path,type:`button`,children:[t&&v.useIcons?(0,X.jsx)(Kl,{place:t}):(0,X.jsx)(uu,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,X.jsx)(k_,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,X.jsx)(__,{historyVersion:c,onNavigate:u}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,X.jsxs)(D_,{$active:b&&b_(i,e.name),onClick:t=>u(e.name,wi(t)),title:e.name,type:`button`,children:[(0,X.jsx)($o,{}),(0,X.jsxs)(k_,{children:[Ma(e),(0,X.jsxs)(A_,{children:[sa(e.freeSpace),` free`]}),(0,X.jsx)(j_,{children:(0,X.jsx)(M_,{$used:t,$tone:Sa(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,X.jsx)(v_,{onNavigate:u,path:e.path||o})]})})]},e.id)),!l.includes(`settings`)&&(0,X.jsx)(C_,{children:(0,X.jsxs)(D_,{$active:a===`settings`,onClick:e=>d(`settings`,wi(e)),title:m(`Settings`),type:`button`,children:[(0,X.jsx)(ss,{}),(0,X.jsx)(k_,{children:m(`Settings`)})]})})]})}var h_=10,g_=40;function __({historyVersion:e=0,onNavigate:t}){let n=Kn(),[r,i]=(0,_.useState)(null),a=Fa();return(0,_.useEffect)(()=>{Dr().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=Ia(a,e.path);return(0,X.jsxs)(D_,{$active:!1,onClick:n=>t(e.path,wi(n)),title:oa(n,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,X.jsx)(Kl,{place:r}):(0,X.jsx)(uu,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,X.jsx)(k_,{children:r?.name||e.name})]},e.path)})}function v_({path:e,onNavigate:t}){let[n,r]=(0,_.useState)(null);(0,_.useEffect)(()=>{e&&(r(null),sr(e,!1).then(r,()=>r(null)))},[e]),(0,_.useEffect)(()=>{if(e&&Y.available)return Y.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&b_(n.data.path,e)&&sr(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,h_),o=i.filter(e=>!e.isDirectory).slice(0,g_);return(0,X.jsxs)(X.Fragment,{children:[a.map(e=>(0,X.jsx)(y_,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,X.jsx)(y_,{entry:e,onNavigate:t},e.fullPath))]})}function y_({entry:e,onNavigate:t}){let n=Fa(),r=Ia(n,e.fullPath);return(0,X.jsxs)(D_,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,wi(n)):void or(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,X.jsx)(Kl,{place:r}):(0,X.jsx)(uu,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,X.jsx)(k_,{children:r?.name||e.name})]})}function b_(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}var x_=J.aside`
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

    html.has-wallpaper & {
        background: rgba(var(--bg-rgb), 0.52);
    }

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

    &:not(:hover) ${()=>A_},
    &:not(:hover) ${()=>j_} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,S_=J.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,C_=J(S_)`
    margin-top: auto;
`,w_=J.div`
    display: flex;
    flex-direction: column;
`,T_=J.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${x_}:hover ${w_}:hover > & {
        grid-template-rows: 1fr;
    }
`,E_=J.div`
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
`,D_=J.button`
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
`,O_=J.span`
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
`,k_=J.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,A_=J.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,j_=J.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,M_=J.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`;function N_({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=Kn(),a=(0,_.useRef)(null),o=e.filter(e=>e.state===`running`).length;return(0,_.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[n,r]),(0,X.jsxs)(F_,{ref:a,children:[(0,X.jsxs)(I_,{$active:n,onClick:()=>r(!n),title:o>0?oa(i,o,`1 operation running`,`{count} operations running`):i(`Status center`),type:`button`,children:[(0,X.jsx)(fs,{size:13}),o>0&&(0,X.jsx)(L_,{children:o>9?`9+`:o})]}),n&&(0,X.jsxs)(R_,{children:[(0,X.jsxs)(z_,{children:[(0,X.jsx)(B_,{children:i(`Status center`)}),(0,X.jsxs)(V_,{children:[(0,X.jsx)(H_,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`Clear finished`)}),(0,X.jsx)(U_,{onClick:()=>r(!1),title:i(`Close`),type:`button`,children:(0,X.jsx)(hs,{size:10})})]})]}),e.length===0?(0,X.jsx)(G_,{children:i(`No operations yet.`)}):(0,X.jsx)(W_,{children:e.map(e=>(0,X.jsx)(P_,{task:e},e.id))})]})]})}function P_({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,X.jsxs)(K_,{children:[(0,X.jsxs)(q_,{children:[(0,X.jsx)(J_,{$state:e.state,children:e.state===`done`?(0,X.jsx)(ms,{size:10}):e.state===`failed`?(0,X.jsx)(hs,{size:10}):(0,X.jsx)(Y_,{})}),(0,X.jsx)(X_,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,X.jsxs)(Z_,{children:[sa(e.bytesDone),` / `,sa(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,X.jsxs)(Z_,{children:[e.done,` / `,e.total]})]}),i&&(0,X.jsx)(Q_,{children:(0,X.jsx)($_,{$percent:r,$indeterminate:t===0})}),e.error&&(0,X.jsx)(ev,{children:e.error})]})}var F_=J.div`
    position: relative;
    display: flex;
`,I_=J.button`
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
`,L_=J.span`
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
`,R_=J.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${cc}
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
`,z_=J.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,B_=J.span`
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
`,V_=J.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,H_=J.button`
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
`,U_=J.button`
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
`,W_=J.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,G_=J.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,K_=J.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;
    ${bc}

    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,q_=J.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,J_=J.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,Y_=J.span`
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
`,X_=J.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Z_=J.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Q_=J.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,$_=J.div`
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
`,ev=J.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function tv(){return Y.available?(await Y.request(`fs.history.list`)).entries:[]}async function nv(e){return Y.available?(await Y.request(`fs.history.undoTo`,{id:e})).ok:!1}function rv(){let e=Kn(),[t,n]=(0,_.useState)(!1),[r,i]=(0,_.useState)([]),[a,o]=(0,_.useState)(!1),s=(0,_.useRef)(null),c=()=>void tv().then(i,()=>i([]));(0,_.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)};return window.addEventListener(`pointerdown`,r),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r)}},[t]);let l=async e=>{o(!0);try{await nv(e),c()}finally{o(!1)}};return(0,X.jsxs)(iv,{ref:s,children:[(0,X.jsx)(av,{$active:t,onClick:()=>n(e=>!e),title:e(`History`),type:`button`,children:(0,X.jsx)(ds,{size:14})}),t&&(0,X.jsxs)(ov,{children:[(0,X.jsxs)(sv,{children:[(0,X.jsx)(cv,{children:e(`History`)}),(0,X.jsx)(lv,{onClick:()=>n(!1),title:e(`Close`),type:`button`,children:(0,X.jsx)(hs,{size:10})})]}),r.length===0?(0,X.jsx)(vv,{children:e(`No operations yet.`)}):(0,X.jsx)(uv,{children:r.map(t=>(0,X.jsxs)(dv,{children:[(0,X.jsxs)(fv,{children:[(0,X.jsx)(pv,{children:t.label}),(0,X.jsx)(mv,{children:ga(t.at)})]}),t.paths.length>0&&(0,X.jsxs)(hv,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,X.jsx)(gv,{children:(0,X.jsx)(_v,{disabled:!t.applied||a,onClick:()=>void l(t.id),type:`button`,children:e(`Undo`)})})]},t.id))})]})]})}var iv=J.div`
    position: relative;
    display: flex;
`,av=J.button`
    display: grid;
    place-items: center;
    width: 38px;
    height: 100%;
    border: 0;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.12)`:`transparent`};
    color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-secondary)`};
    cursor: pointer;

    &:hover {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`,ov=J.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${cc}
`,sv=J.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,cv=J.span`
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
`,lv=J.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,uv=J.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,dv=J.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,fv=J.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,pv=J.span`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,mv=J.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,hv=J.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,gv=J.div`
    display: flex;
    justify-content: flex-end;
`,_v=J.button`
    padding: 2px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-secondary);
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }
`,vv=J.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function yv({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=Kn(),[s,c]=(0,_.useState)(!1),l=(0,_.useRef)(null);(0,_.useEffect)(()=>{if(!s)return;let e=e=>{l.current?.contains(e.target)||c(!1)},t=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[s]),(0,_.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=zu.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,X.jsxs)(bv,{ref:l,children:[(0,X.jsx)(xv,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`View`),type:`button`,children:e.mode===`grid`?(0,X.jsx)(us,{size:14}):(0,X.jsx)(ls,{size:14})}),s&&(0,X.jsxs)(Sv,{children:[(0,X.jsx)(Cv,{children:o(`View`)}),(0,X.jsxs)(wv,{children:[(0,X.jsxs)(Tv,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,X.jsx)(ls,{size:12}),` `,o(`List`)]}),(0,X.jsxs)(Tv,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,X.jsx)(us,{size:12}),` `,o(`Grid`)]})]}),(0,X.jsx)(Cv,{children:o(`List icon size`)}),(0,X.jsxs)(Ev,{children:[(0,X.jsx)(`input`,{"aria-label":o(`List icon size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,X.jsxs)(Dv,{children:[e.iconSize,`px`]})]}),(0,X.jsx)(Cv,{children:o(`Grid size`)}),(0,X.jsxs)(Ev,{children:[(0,X.jsx)(`input`,{"aria-label":o(`Grid size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,X.jsxs)(Dv,{children:[e.gridSize,`px`]})]}),(0,X.jsxs)(Cv,{children:[o(`Columns`),(0,X.jsx)(nh,{})]}),zu.map(e=>(0,X.jsxs)(Ov,{children:[(0,X.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,X.jsx)(`span`,{children:e.label})]},e.id)),(0,X.jsxs)(Ov,{children:[(0,X.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,X.jsx)(`span`,{children:o(`Link target after the name`)})]}),(0,X.jsxs)(Cv,{children:[o(`Preview panel`),(0,X.jsx)(nh,{})]}),(0,X.jsxs)(Ov,{children:[(0,X.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,X.jsx)(`span`,{children:o(`Preview under the list`)})]})]})]})}var bv=J.div`
    position: relative;
    display: flex;
    height: 100%;
`,xv=J.button`
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
`,Sv=J.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${cc}
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
`,Cv=J.div`
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
`,wv=J.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Tv=J.button`
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
`,Ev=J.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,Dv=J.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,Ov=J.label`
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
`,kv=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,X.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),Av=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,X.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),jv=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,X.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),Mv=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,X.jsx)(`path`,{d:`M2 5h6`})}),Nv=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,X.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Pv=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,X.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,X.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function Fv({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:p,activityOpen:m,onActivityOpenChange:h,trayCount:g,trayVisible:v,onToggleTray:y,split:b,canSplit:x,onToggleSplit:S,details:C,canDetails:w,onToggleDetails:T,shortcuts:E}){let D=Kn(),O=Yn(),k=Xn(),[ee,A]=(0,_.useState)({left:!1,right:!1}),[te,j]=(0,_.useState)(null),[M,N]=(0,_.useState)(null),P=(0,_.useRef)(null),F=(0,_.useRef)(null),I=(0,_.useRef)(null),ne=(0,_.useCallback)(()=>{let e=F.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;A(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,_.useEffect)(()=>{ne();let e=F.current;if(!e)return;let t=new ResizeObserver(ne);return t.observe(e),()=>t.disconnect()},[ne,e.length]),(0,_.useEffect)(()=>()=>{P.current&&window.clearTimeout(P.current.timer)},[]),(0,_.useEffect)(()=>{I.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let L=e=>F.current?.scrollBy({left:e,behavior:`smooth`}),R=()=>{P.current&&window.clearTimeout(P.current.timer),P.current=null,N(null)};return(0,X.jsxs)(zv,{children:[(0,X.jsx)(Bv,{children:(0,X.jsx)(gs,{size:19})}),(0,X.jsxs)(Vv,{children:[ee.left&&(0,X.jsx)(Uv,{onClick:()=>L(-180),title:D(`Scroll tabs left`),type:`button`,children:(0,X.jsx)(kv,{})}),(0,X.jsx)(Hv,{onScroll:ne,onWheel:e=>{let t=F.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:F,children:e.map(e=>(0,X.jsxs)(Wv,{$active:e.id===t,$dragging:te===e.id,$dropTarget:M===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!pu(t.dataTransfer)||!Iv(e)||(t.preventDefault(),P.current?.id===e.id))return;R(),N(e.id);let r=window.setTimeout(()=>{n(e.id),P.current=null},500);P.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(P.current?.id===e.id||M===e.id)&&R()},onDragEnd:()=>{j(null),R()},onDragOver:t=>{(te||pu(t.dataTransfer)&&Iv(e))&&(t.preventDefault(),pu(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>j(e.id),onDrop:t=>{if(t.preventDefault(),te)a(te,e.id);else if(Iv(e)&&pu(t.dataTransfer)){let{paths:r,move:i}=mu(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}j(null),R()},onClick:()=>n(e.id),ref:e.id===t?I:void 0,title:e.path||e.title,type:`button`,children:[(0,X.jsx)(Lv,{tab:e}),(0,X.jsx)(Gv,{children:e.title}),e.partner&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Kv,{children:`|`}),(0,X.jsx)(Rv,{place:e.partner.place}),(0,X.jsx)(Gv,{children:e.partner.title})]}),(0,X.jsx)(qv,{"data-shortcut":Ei(E.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:D(`Close tab`),children:(0,X.jsx)(jv,{})})]},e.id))}),ee.right&&(0,X.jsx)(Uv,{onClick:()=>L(180),title:D(`Scroll tabs right`),type:`button`,children:(0,X.jsx)(Av,{})}),(0,X.jsx)(Jv,{"data-shortcut":Ei(E.newTab),onClick:i,title:D(`New tab`),type:`button`,children:(0,X.jsx)(rs,{size:13})})]}),(0,X.jsx)(Yv,{...k}),(0,X.jsxs)(Xv,{children:[(0,X.jsx)(Qv,{$active:b,"data-shortcut":Ei(E.splitView),disabled:!x,onClick:S,title:D(b?`Close split view`:`Split view`),type:`button`,children:(0,X.jsx)(tc,{size:15})}),(0,X.jsx)(Qv,{$active:C,disabled:!w,onClick:T,title:D(C?`Hide details panel`:`Show details panel`),type:`button`,children:(0,X.jsx)(nc,{size:15})}),(0,X.jsxs)(Zv,{$active:v,onClick:y,title:D(v?`Hide file tray`:`Show file tray`),type:`button`,children:[(0,X.jsx)(qs,{size:14}),g>0&&(0,X.jsx)($v,{children:g>9?`9+`:g})]}),(0,X.jsx)(rv,{}),(0,X.jsx)(N_,{tasks:f,onClear:p,open:m,onOpenChange:h}),(0,X.jsx)(yv,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,X.jsx)(ey,{onClick:O.minimize,title:D(`Minimize`),type:`button`,children:(0,X.jsx)(Mv,{})}),(0,X.jsx)(ey,{onClick:O.toggleMaximize,title:O.maximized?D(`Restore`):D(`Maximize`),type:`button`,children:O.maximized?(0,X.jsx)(Pv,{}):(0,X.jsx)(Nv,{})}),(0,X.jsx)(ty,{onClick:O.close,title:D(`Close`),type:`button`,children:(0,X.jsx)(jv,{})})]})]})}function Iv(e){return e.kind===`files`&&(!Da(e.path)||ka(e.path))}function Lv({tab:e}){switch(e.kind){case`home`:return(0,X.jsx)(Xo,{size:13});case`settings`:return(0,X.jsx)(ss,{size:13});case`recycle`:return(0,X.jsx)(ps,{size:13});default:return(0,X.jsx)(Rv,{place:e.place})}}function Rv({place:e}){return e?(0,X.jsx)(Kl,{place:e,size:13}):(0,X.jsx)(Zo,{size:13})}var zv=J.header`
    position: relative;
    z-index: 2;
    display: flex;
    align-items: stretch;
    height: 44px;
    flex-shrink: 0;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;

    html.has-wallpaper & {
        background: rgba(var(--bg-rgb), 0.5);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
    }
`,Bv=J.span`
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
`,Vv=J.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,Hv=J.div`
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
`,Uv=J.button`
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
`,Wv=J.button`
    display: flex;
    align-items: center;
    gap: 7px;
    width: ${({$split:e})=>e?`300px`:`176px`};
    height: 32px;
    flex: 0 0 auto;
    padding: 0 6px 0 10px;
    border: 1px solid ${({$dropTarget:e,$active:t})=>e?`var(--accent-primary)`:t?`var(--border-color)`:`transparent`};
    border-bottom: 0;
    border-radius: 9px 9px 0 0;
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.10)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
    opacity: ${({$dragging:e})=>e?.45:1};
    box-shadow: ${({$dropTarget:e,$active:t})=>e?`inset 0 -2px 0 var(--accent-primary), 0 0 12px rgba(var(--accent-rgb), 0.22)`:t?`inset 0 -2px 0 var(--accent-primary)`:`none`};
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
`,Gv=J.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Kv=J.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,qv=J.span`
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
`,Jv=J.button`
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
`,Yv=J.div`
    flex: 1;
    min-width: 28px;
`,Xv=J.div`
    display: flex;
    flex-shrink: 0;
`,Zv=J.button`
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
`,Qv=J.button`
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
`,$v=J.span`
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
`,ey=J.button`
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
`,ty=J(ey)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function ny(){let[e,t]=(0,_.useState)(null),n=(0,_.useRef)(null),r=(0,_.useRef)(void 0);return(0,_.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,sc.createPortal)((0,X.jsx)(ry,{tooltip:e}),document.body):null}function ry({tooltip:e}){let t=(0,_.useRef)(null),[n,r]=(0,_.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,_.useState)(()=>e.bottom+6);return(0,_.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,X.jsxs)(iy,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,X.jsx)(ay,{children:e.text}),e.shortcut&&(0,X.jsx)(oy,{children:e.shortcut})]})}var iy=J.div`
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
    ${bc}
`,ay=J.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,oy=J.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,sy={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`},cy=`yafm://`,ly={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`},uy=0,dy=20,fy=[{value:`0`,label:`Auto`},{value:`932`,label:`日本語 (CP932)`},{value:`936`,label:`简体中文 (CP936)`},{value:`950`,label:`繁體中文 (CP950)`},{value:`949`,label:`한국어 (CP949)`},{value:`1252`,label:`Western (CP1252)`},{value:`65001`,label:`UTF-8`}];function py(e){return`${cy}${e===`home`?`overview`:e}`}function my(e){return e.toLowerCase().startsWith(cy)?ly[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function hy(e){let t=e.trim();if(t.length===0)return null;if(!t.toLowerCase().startsWith(cy))return t;let n=ly[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?py(n):null}function gy(e){return e.history[e.index]??py(`home`)}function _y(e){return my(gy(e))??`files`}function vy(e){let t=gy(e);return my(t)?``:e.listing?.path||t}function yy(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||_y(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function by(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function xy(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||rr.iconSize,gridSize:e.view?.gridSize||t.gridSize||rr.gridSize,sort:e.view?.sort??rr.sort,sortDescending:e.view?.sortDescending??rr.sortDescending,columns:t.columns??ir.columns??[]}}function Sy(e=py(`home`)){return uy+=1,{id:`tab-${uy}`,listing:null,loading:!my(e),error:null,history:[e],index:0,fresh:!0,view:null}}function Cy(e){return e instanceof Error?e.message:String(e)}function wy(e,t){let n=e=>e.replace(/[\\/]+/g,`\\`).replace(/\\$/,``).toLowerCase();return n(e)===n(t)}function Ty(e){let t=e.replace(/[\\/]+$/,``);if(t.length===0)return null;let n=Math.max(t.lastIndexOf(`\\`),t.lastIndexOf(`/`));return n<0?null:n===2&&t[1]===`:`?`${t.slice(0,2)}\\`:t.slice(0,n)}function Ey(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return oa(e,t.entries.length,`1 item · {size}`,`{count} items · {size}`,{size:sa(n)})}function Dy(){let e=Kn(),[t,n]=(0,_.useState)(()=>[Sy()]),[r,i]=(0,_.useState)(()=>t[0].id),[a,o]=(0,_.useState)(()=>{let e=Ra(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[s,c]=(0,_.useState)([]),[l,u]=(0,_.useState)([]),[d,f]=(0,_.useState)(null),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)(null),v=Zn(),[y,b]=(0,_.useState)(Gi),[x,S]=(0,_.useState)(0),[C,w]=(0,_.useState)(0),[T,E]=(0,_.useState)(Gi),[D,O]=(0,_.useState)(0),[k,ee]=(0,_.useState)(0),[A,te]=(0,_.useState)(0),[j,M]=(0,_.useState)(0),N=(0,_.useRef)(j);N.current=j;let[P,F]=(0,_.useState)([]),[I,ne]=(0,_.useState)(10),[L,R]=(0,_.useState)(null),[re,ie]=(0,_.useState)(0),[z,ae]=(0,_.useState)(xi),[oe,se]=(0,_.useState)(0),[B,ce]=(0,_.useState)(0),[le,V]=(0,_.useState)(0),[H,U]=(0,_.useState)(!0),[ue,de]=(0,_.useState)(()=>{let e=Ra(`yafm.preview.width`,320);return e>=220?e:320}),[fe,W]=(0,_.useState)(null),[pe,me]=(0,_.useState)(null),[he,ge]=(0,_.useState)(`primary`),[_e,ve]=(0,_.useState)(null),[ye,be]=(0,_.useState)(null),[xe,Se]=(0,_.useState)([]),[Ce,we]=(0,_.useState)(!1),Te=(0,_.useRef)([]),Ee=(0,_.useRef)([]),[De,G]=(0,_.useState)([]),[Oe,ke]=(0,_.useState)(!1),[Ae,je]=(0,_.useState)(!1),[Me,Ne]=(0,_.useState)([]),[Pe,Fe]=(0,_.useState)(null),Ie=(0,_.useRef)(0),[Le,Re]=(0,_.useState)(()=>{let e=Ba(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?by({x:e.x,y:e.y}):by({x:Math.max(20,window.innerWidth-340),y:110})}),ze=(0,_.useCallback)(()=>{Re(e=>by(e)),je(!0)},[]),K=t.find(e=>e.id===r)??t[0],q=_y(K),Be=gy(K),Ve=vy(K),He=q===`files`?K.listing?.parent??Ty(Ve):null,Ue=K.splitWith?t.find(e=>e.id===K.splitWith):void 0,We=q===`files`&&Ue!==void 0,Ge=Ue?vy(Ue):``,Ke=Ue?Ue.listing?.parent??Ty(Ge):null,qe=We&&Ue&&he===`secondary`?Ue:K,Je=L?.defaultView??ir,Ye=xy(qe,Je);(0,_.useEffect)(()=>{th(L?.accentColor,L?.secondaryColor)},[L?.accentColor,L?.secondaryColor]),(0,_.useEffect)(()=>{fa(L?.timeFormat,L?.timeFormatPattern)},[L?.timeFormat,L?.timeFormatPattern]),(0,_.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!L?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[L?.backgroundSource]),(0,_.useEffect)(()=>(tr(e=>new Promise(t=>{Fe({id:++Ie.current,prompt:e,resolve:t})})),()=>tr(null)),[]),(0,_.useEffect)(()=>{ge(`primary`)},[r]),(0,_.useEffect)(()=>{E(Gi),ee(0),te(0)},[q]),(0,_.useEffect)(()=>{ee(0)},[T.query,T.matchCase,T.regex]),(0,_.useEffect)(()=>{ee(e=>A===0?0:Math.min(e,A-1))},[A]);let Xe=Ye.columns.includes(`linkCount`),Ze=(0,_.useMemo)(()=>{let e={},t=Ul(L),n={};for(let[e,t]of Object.entries(L?.placeNames??{}))n[Aa(e)]=t;for(let t of s)e[Aa(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=Aa(t),i=s.find(e=>Aa(e.path)===r);e[r]={name:n[r]??i?.name??(Ca(t)||t),path:t,kind:`folder`,icon:i?.icon??L?.placeIcons?.[t]??null}}return e},[s,L]),Qe=(0,_.useMemo)(()=>({places:Ze,useIcons:L?.systemIcons===!1}),[Ze,L?.systemIcons]),$e=L?.defaultView?.showImages??!0,et=L?.defaultView?.imageStripHeight??ir.imageStripHeight,tt=q===`home`?(0,X.jsx)(js,{size:13}):q===`settings`?(0,X.jsx)(ss,{size:13}):q===`recycle`?(0,X.jsx)(ps,{size:13}):q===`gallery`?(0,X.jsx)(ys,{size:13}):void 0,nt=y.open&&y.query.length>0,rt=(0,_.useMemo)(()=>nt&&qe.listing?qe.listing.entries.filter(e=>ea(e.isDirectory?La(Qe,e.fullPath,e.name):e.name,y)).map(e=>e.fullPath):[],[nt,y,qe.listing,Qe]);(0,_.useEffect)(()=>{S(0)},[y.query,y.matchCase,y.regex,qe.listing?.path]);let it=rt.length===0?-1:Math.min(x,rt.length-1),at=(0,_.useCallback)(()=>{b(e=>({...e,open:!1,query:``})),S(0)},[]),ot=(0,_.useCallback)(()=>{b(e=>({...e,open:!0})),w(e=>e+1)},[]),st=(0,_.useCallback)(()=>{E(e=>({...e,open:!0})),O(e=>e+1)},[]),ct=(0,_.useCallback)(()=>{E(Gi),ee(0),te(0)},[]),lt=(0,_.useCallback)(e=>{ee(t=>A===0?0:(Math.min(t,A-1)+e+A)%A)},[A]),ut=(0,_.useCallback)(e=>{b(t=>({...t,open:!0,query:t.open?t.query+e:e})),w(e=>e+1)},[]),dt=(0,_.useCallback)(e=>{S(t=>rt.length===0?0:(Math.min(t,rt.length-1)+e+rt.length)%rt.length)},[rt.length]),ft=(0,_.useRef)({tabs:t,activeId:r,activePane:he});ft.current={tabs:t,activeId:r,activePane:he};let pt=(0,_.useRef)(L);pt.current=L;let mt=(0,_.useRef)(!1),ht=(0,_.useRef)([]),gt=(0,_.useCallback)((e,t)=>{n(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),_t=(0,_.useRef)(new Map),vt=(0,_.useCallback)(e=>{let t=(_t.current.get(e)??0)+1;return _t.current.set(e,t),()=>_t.current.get(e)===t},[]),yt=(0,_.useCallback)(async(e,t,n)=>{try{let r=await mr(t,Xe);if(!n()||!r.listing)return;gt(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[Xe,gt]),bt=(0,_.useCallback)(async(e,t,n=!1)=>{let r=vt(e);at();let i=!n||!ft.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;gt(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&wy(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&yt(e,t,r);let o=await sr(t,!0,Xe,N.current);if(!r())return;gt(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),n||Or(o.path).then(()=>ie(e=>e+1))}catch(i){if(!r())return;let a=ft.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?vy(a):``,s=o.replace(/[\\/]+$/,``),c=Math.max(s.lastIndexOf(`\\`),s.lastIndexOf(`/`)),l=c>0?s.slice(0,c):null,u=Cy(i);gt(e,e=>({listing:{path:o,parent:l,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:u,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[vt,Xe,gt,at,yt]),xt=(0,_.useCallback)((e,t)=>{let n=hy(t);n&&(my(n)?(at(),vt(e),gt(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):bt(e,n))},[vt,bt,gt,at]),St=(0,_.useCallback)(async(e,t,n)=>{if(at(),my(t)){vt(e),gt(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=vt(e);gt(e,()=>({index:n,listing:null,loading:!0,error:null}));try{if(await yt(e,t,r),!r())return;let n=await sr(t,!0,Xe,N.current);if(!r())return;gt(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(n){if(!r())return;let i=t.replace(/[\\/]+$/,``),a=Math.max(i.lastIndexOf(`\\`),i.lastIndexOf(`/`));gt(e,()=>({listing:{path:t,parent:a>0?i.slice(0,a):null,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:Cy(n)}))}},[vt,Xe,gt,at,yt]),Ct=(0,_.useCallback)((e,t=!0)=>{let r=Sy(e??py(`home`));return n(e=>[...e,r]),t&&i(r.id),e&&!my(e)&&bt(r.id,e),r.id},[bt]),wt=(0,_.useCallback)((e,t=!1)=>{t?Ct(py(e)):xt(ft.current.activeId,py(e))},[Ct,xt]),Tt=(0,_.useCallback)(e=>{let{tabs:t,activeId:r}=ft.current,a=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==a?.splitWith);if(a&&!a.hidden&&(Ee.current.push(gy(a)),Ee.current.length>dy&&Ee.current.shift()),o.length===0){let e=Sy();n([e]),i(e.id);return}let s=t.findIndex(t=>t.id===e);n(o),r===e&&i(o[Math.min(s,o.length-1)].id)},[]),Et=(0,_.useCallback)(()=>{let e=Ee.current.pop();if(!e)return;let t={...Sy(e),fresh:!1};n(e=>[...e,t]),i(t.id),_y(t)===`files`&&bt(t.id,vy(t))},[bt]),Dt=(0,_.useCallback)((e,t=!1)=>{t?Ct(e):xt(yy(ft.current),e??py(`home`))},[xt,Ct]),Ot=(0,_.useCallback)(e=>{let{tabs:t,activeId:n}=ft.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let a=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;i(r[a].id)},[]),kt=(0,_.useCallback)(()=>{let{tabs:e,activeId:t}=ft.current,r=e.find(e=>e.id===t);if(!r||_y(r)!==`files`)return;let i=r.splitWith?e.find(e=>e.id===r.splitWith):void 0;if(i){n(e=>e.filter(e=>e.id!==i.id)),gt(t,()=>({splitWith:void 0})),ge(`primary`);return}let a=vy(r),o={...Sy(a),hidden:!0};n(e=>[...e,o]),gt(t,()=>({splitWith:o.id})),bt(o.id,a),ge(`primary`)},[bt,gt]),At=(0,_.useCallback)(e=>{de(e),za(`yafm.preview.width`,e)},[]),jt=We?he===`secondary`?pe??fe:fe??pe:fe,Mt=(0,_.useRef)(null),Nt=e=>{e.preventDefault();let t=Mt.current?.getBoundingClientRect();if(!t)return;let n=H?ue:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);o(n),za(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},Pt=(e,t,n)=>{t&&ve({x:e.clientX,y:e.clientY,directory:t,refresh:n})},Ft=async(e,t=!1)=>{let n=_e;if(ve(null),!n)return;let r=e===null?await ri(n.directory,t):await si(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;at(),be(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},It=(0,_.useCallback)(()=>{let{tabs:e}=ft.current,t=e.find(e=>e.id===yy(ft.current));t&&t.index>0&&St(t.id,t.history[t.index-1],t.index-1)},[St]),Lt=(0,_.useCallback)(()=>{let{tabs:e}=ft.current,t=e.find(e=>e.id===yy(ft.current));t&&t.index<t.history.length-1&&St(t.id,t.history[t.index+1],t.index+1)},[St]),Rt=(0,_.useCallback)(()=>{let{tabs:e}=ft.current,t=e.find(e=>e.id===yy(ft.current));t&&_y(t)===`files`&&t.listing?.parent&&Dt(t.listing.parent)},[Dt]),zt=(0,_.useRef)(null),Bt=(0,_.useCallback)(()=>{for(let e of ft.current.tabs)e.listing&&bt(e.id,e.listing.path,!0)},[bt]),Vt=(0,_.useCallback)(e=>{e.length!==0&&(Ne(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),ze())},[ze]),Ht=(0,_.useCallback)(async e=>{let t=await $r(e);t.length!==0&&Vt(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[Vt]),Ut=(0,_.useCallback)(e=>{let t=new Set(e);Ne(e=>e.filter(e=>!t.has(e.path)))},[]),Wt=(0,_.useCallback)(()=>Ne([]),[]),Gt=(0,_.useRef)(-1),Kt=(0,_.useCallback)(e=>{G(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),ke(e.move),e.entries.length>0&&ze()},[ze]),qt=(0,_.useCallback)(async()=>{if(Y.available)try{let e=await Zr();Gt.current=e.sequence,Kt(e)}catch{}},[Kt]),Jt=(0,_.useCallback)(async e=>{e.length!==0&&await Yr(e,!1)&&await qt()},[qt]),Yt=(0,_.useRef)(Me);Yt.current=Me,(0,_.useEffect)(()=>{let e=e=>{pu(e.dataTransfer)&&ze()},t=e=>{pu(e.dataTransfer)&&ze()};return window.addEventListener(`dragstart`,e),window.addEventListener(`dragenter`,t),()=>{window.removeEventListener(`dragstart`,e),window.removeEventListener(`dragenter`,t)}},[ze]),(0,_.useEffect)(()=>{let e=()=>Re(e=>by(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Xt=(0,_.useCallback)(async()=>{let e=Yt.current;if(e.length>0){let t=await $r(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));Ne(e=>e.filter(e=>n.has(e.path)))}await qt()},[qt]),Zt=(0,_.useCallback)(e=>{let t=by(e);Re(t),Va(`yafm.tray.position`,t)},[]),Qt=(0,_.useCallback)(()=>{Ae?je(!1):ze()},[ze,Ae]),$t=(0,_.useCallback)(async(t,n,r)=>{let i=await Qr(t,n,r);i.ok?(r&&Ut(t),V(e=>e+1),Bt(),qt()):window.alert(i.error??e(`The files could not be transferred.`))},[Bt,qt,Ut]);(0,_.useEffect)(()=>{if(Y.available)return yi().then(e=>{Te.current=e,Se(e)},()=>void 0),Y.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>e.kind===`delete`&&!Te.current.some(t=>t.id===e.id));Te.current=n,Se(n),r&&we(!0)})},[]);let en=(0,_.useCallback)(()=>{bi().then(()=>yi().then(e=>{Te.current=e,Se(e)},()=>void 0))},[]);(0,_.useEffect)(()=>{if(!Y.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await Zr();if(!e||t.sequence===Gt.current)return;Gt.current=t.sequence,Kt(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Kt]);let tn=(0,_.useCallback)(async e=>{let t=e?await pi():await mi();t.ok?(V(e=>e+1),Bt()):t.error&&!t.error.startsWith(`Nothing to`)&&window.alert(t.error)},[Bt]),nn=(0,_.useRef)(Xe);(0,_.useEffect)(()=>{nn.current!==Xe&&(nn.current=Xe,Bt())},[Xe,Bt]);let rn=(0,_.useCallback)((e,t)=>{let{tabs:n}=ft.current,r=n.find(t=>t.id===e);if(!r||_y(r)!==`files`)return;let i=vy(r),a=pt.current?.defaultView??ir,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||rr.iconSize,gridSize:r.view?.gridSize||a.gridSize||rr.gridSize,sort:r.view?.sort??rr.sort,sortDescending:r.view?.sortDescending??rr.sortDescending,...t};gt(e,()=>({view:o})),zt.current!==null&&window.clearTimeout(zt.current),zt.current=window.setTimeout(()=>{zt.current=null,fr(i,o)},250)},[gt]),an=(0,_.useCallback)(e=>{rn(yy(ft.current),e)},[rn]),on=(0,_.useCallback)(e=>{let t=pt.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??ir,columns:e}};R(n),Lr(n)},[]),sn=(0,_.useCallback)(e=>{let t=pt.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??ir,showImages:e}};R(n),Lr(n)},[]),cn=(0,_.useCallback)(e=>{let t=pt.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??ir,imageStripHeight:e}};R(n),Lr(n)},[]),ln=(0,_.useCallback)((e,t,n,r)=>{let i=ft.current.tabs.find(t=>t.id===e);if(!i||_y(i)!==`files`||!i.listing)return;let a=vy(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));gt(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),pr(a,t,n,r)},[gt]),un=(0,_.useCallback)((e,t)=>{let n=ft.current.tabs.find(t=>t.id===e);if(!n)return;let r=xy(n,pt.current?.defaultView??ir);rn(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[rn]),dn=(0,_.useCallback)((e,t)=>{n(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),fn=(0,_.useCallback)(()=>{hr().then(c,()=>c([]))},[]),pn=(0,_.useCallback)(e=>{let t=(e.openTabs??[]).map(hy).filter(e=>e!==null);if(t.length===0)return!1;let r=t.map(e=>({...Sy(e),fresh:!1})),a=Math.min(Math.max(e.activeTab??0,0),r.length-1);n(r),i(r[a].id);for(let e of r)_y(e)===`files`&&bt(e.id,vy(e),!0);return!0},[bt]),mn=(0,_.useCallback)(e=>{let t=ht.current;if(ht.current=[],t.length===0)return;let{tabs:n}=ft.current;if(!e&&n.length===1&&n[0].fresh){xt(n[0].id,t[0]);for(let e of t.slice(1))Ct(e);return}let r=t.map(e=>Ct(e)).at(-1);r&&setTimeout(()=>i(r),0)},[Ct,xt]),hn=(0,_.useCallback)(()=>{Fr().then(e=>{R(e),ne(e.recentLimit);let t={...xi,...e.shortcuts};ae(t),Ci(t.openInNewTab),se(e=>e+1),mt.current||(mt.current=!0,mn(e.restoreTabs&&pn(e)))},()=>{ne(10),mt.current=!0,mn(!1)})},[mn,pn]),gn=(0,_.useCallback)(()=>{Er().then(F,()=>F([]))},[]),_n=(0,_.useCallback)(()=>{gr().then(u,()=>u([]))},[]),vn=t.filter(e=>!e.hidden),yn=vn.map(gy),bn=yn.join(`
`),xn=Math.max(vn.findIndex(e=>e.id===r),0);(0,_.useEffect)(()=>{if(!L?.restoreTabs)return;let e=setTimeout(()=>void Rr(yn,xn),700);return()=>clearTimeout(e)},[bn,xn,L?.restoreTabs]),(0,_.useEffect)(()=>{let{tabs:e,activeId:t}=ft.current,n=e.find(e=>e.id===t);n&&_y(n)===`files`&&bt(n.id,void 0,!0),fn(),hn(),_n(),Vr().then(f,()=>f(null))},[bt,fn,hn,_n]),(0,_.useEffect)(()=>{if(Hr().then(m,()=>m(null)),Y.available)return Y.on(e=>{let t=e;t.type===`app.update`&&t.data&&m(t.data)})},[]),(0,_.useEffect)(()=>{let e=setInterval(_n,3e4);return()=>clearInterval(e)},[_n]),(0,_.useEffect)(()=>{q===`home`&&(gn(),_n())},[q,K.id,gn,_n]),(0,_.useEffect)(()=>{if(!Y.available)return;let e=Y.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=ft.current,i=t.data.startup===!0;i&&!mt.current?ht.current.push(n):i&&r.length===1&&r[0].fresh?xt(r[0].id,n):my(n)?xt(yy(ft.current),n):Ct(n)});return Y.send({type:`app.ready`}),e},[xt,Ct]),(0,_.useEffect)(()=>{if(Y.available)return Y.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:r,sizes:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},n})})},[]),(0,_.useEffect)(()=>{if(Y.available)return Y.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:r,counts:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},n})})},[]),(0,_.useEffect)(()=>{let e=e=>{if(Oi(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),It();return}if(e.key===`BrowserForward`){e.preventDefault(),Lt();return}if(e.key===`Escape`&&y.open){e.preventDefault(),at();return}let t=Ti(e);if(t===z.closeTab)e.preventDefault(),Tt(yy(ft.current));else if(t===z.newTab)e.preventDefault(),Ct();else if(t===z.reopenTab)e.preventDefault(),Et();else if(t===z.goBack)e.preventDefault(),It();else if(t===z.goForward)e.preventDefault(),Lt();else if(t===z.goUp)e.preventDefault(),Rt();else if(t===z.find)e.preventDefault(),q===`files`?ot():st();else if(t===z.location)e.preventDefault(),ce(e=>e+1);else if(t===z.home){e.preventDefault();let t=s.find(e=>e.kind===`home`)?.path;t&&Dt(t)}else t===z.iconsView?(e.preventDefault(),q===`files`&&an({mode:`grid`})):t===z.detailsView?(e.preventDefault(),q===`files`&&an({mode:`list`})):t===z.nextTab?(e.preventDefault(),Ot(1)):t===z.previousTab?(e.preventDefault(),Ot(-1)):t===z.hidden||t===`alt+.`?(e.preventDefault(),Mr().then(()=>{V(e=>e+1),Bt()})):t===z.undo?(e.preventDefault(),tn(!0)):t===z.redo?(e.preventDefault(),tn(!1)):t===z.splitView?(e.preventDefault(),kt()):q!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),ut(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[z,q,y.open,Tt,Et,Ct,It,Lt,Rt,ot,st,at,ut,an,Ot,Dt,s,Bt,tn,kt]),(0,_.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),It()):e.button===4&&(e.preventDefault(),Lt())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[It,Lt]),(0,_.useEffect)(()=>{Y.available&&q===`files`&&Y.send({type:`fs.watch`,payload:{paths:[Be]}})},[q,Be]),(0,_.useEffect)(()=>{if(Y.available)return Y.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let{tabs:n,activeId:r}=ft.current,i=n.find(e=>e.id===r);i&&_y(i)===`files`&&wy(vy(i),t.data.path)&&sr(t.data.path,!1,Xe).then(e=>{let t=ft.current.tabs.find(e=>e.id===i.id);t&&_y(t)===`files`&&!t.loading&&wy(vy(t),e.path)&&gt(i.id,()=>({listing:e}))},()=>void 0)})},[Xe,gt]);let Sn=K.index>0,Cn=K.index<K.history.length-1,wn=(e,t)=>{let n=xy(e,Je),r=e.listing?.path??e.history[e.index]??``,i=Da(r),a=i&&ka(r);return(0,X.jsx)(Hu,{confirmDelete:L?.confirmDelete??!1,previewVideoAudio:L?.previewVideoAudio??!1,previewVideoAutoplay:L?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?W:me,onActivate:()=>ge(t?`primary`:`secondary`),enableShortcuts:(!We||(t?he===`primary`:he===`secondary`))&&(!i||a),error:e.error,find:e.id===qe.id?{...y,currentPath:it<0?null:rt[it]}:void 0,imageStripHeight:et,listing:e.listing,loading:e.loading,onImageStripHeight:cn,readOnly:i&&!a,onOpen:(t,n)=>{n?Ct(t):bt(e.id,t)},onOpenFile:t=>{Ea(t)?bt(e.id,t):Da(t)?lr(t,N.current).then(e=>{e.path?or(e.path):e.error&&alert(e.error)}):or(t)},onRefresh:()=>{e.listing&&bt(e.id,e.listing.path,!0)},onSetTags:(t,n,r)=>ln(e.id,t,n,r),onSort:t=>un(e.id,t),onPaste:Xt,onClipboardChanged:()=>void qt(),onTransfer:$t,onAddToTray:e=>void Ht(e),openOnSingleClick:L?.openOnSingleClick??!1,pendingRename:ye&&t===(he===`primary`)&&wy(ye.directory,e.listing?.path??``)?ye.path:null,pendingRenameToken:ye?.token??0,refreshToken:le,shortcuts:z,showCheckboxes:L?.showCheckboxes??!0,showImages:$e,view:n})},Tn=y.open&&(0,X.jsx)(Wf,{current:it,focusToken:C,matchCase:y.matchCase,mode:y.mode,onClose:at,onMatchCase:()=>b(e=>({...e,matchCase:!e.matchCase})),onMode:()=>b(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>dt(1),onPrevious:()=>dt(-1),onQuery:e=>b(t=>({...t,query:e})),onRegex:()=>b(e=>({...e,regex:!e.regex})),query:y.query,regex:y.regex,total:rt.length}),En=q===`files`&&Da(Ve),Dn=En&&ka(Ve),J=async()=>{if(!En)return;let t=await ic(Ty(Oa(Ve))??void 0);if(!t)return;let n=await cr(Ve,t,N.current);n.ok?bt(K.id,t,!0):alert(`${e(`Could not extract the archive.`)}${n.error?`\n${n.error}`:``}`)},On=async()=>{if(!Dn)return;let t=await ur(Ve,N.current);t.ok?t.changed&&bt(K.id,Ve,!0):alert(`${e(`Could not apply archive changes.`)}${t.error?`\n${t.error}`:``}`)},kn=(0,X.jsxs)(My,{children:[(0,X.jsx)(Ny,{"data-shortcut":Ei(z.goBack),disabled:!Sn,onClick:e=>{K.index>0&&wi(e)?Ct(K.history[K.index-1]):It()},title:e(`Back`),type:`button`,children:(0,X.jsx)(is,{})}),(0,X.jsx)(Ny,{"data-shortcut":Ei(z.goForward),disabled:!Cn,onClick:e=>{K.index<K.history.length-1&&wi(e)?Ct(K.history[K.index+1]):Lt()},title:e(`Forward`),type:`button`,children:(0,X.jsx)(as,{})}),(0,X.jsx)(Ny,{"data-shortcut":Ei(z.goUp),disabled:q!==`files`||!He,onClick:e=>{He&&(wi(e)?Ct(He):Dt(He))},title:e(`Up one level`),type:`button`,children:(0,X.jsx)(ts,{})}),(0,X.jsx)(Gp,{focusToken:B,icon:tt,label:q===`files`?void 0:e(sy[q]),onNavigate:Dt,path:q===`files`?Ve:Be}),q===`files`&&!En&&(0,X.jsx)(Ny,{onClick:e=>Pt(e,Ve,()=>void bt(K.id,Ve,!0)),title:e(`New folder or file`),type:`button`,children:(0,X.jsx)(rs,{})}),(0,X.jsx)(Ny,{"data-shortcut":Ei(z.find),onClick:st,title:e(`Search`),type:`button`,children:(0,X.jsx)(es,{})}),En&&(0,X.jsxs)(Py,{children:[(0,X.jsx)(Fy,{}),(0,X.jsx)(Ny,{onClick:()=>void J(),title:e(`Extract archive`),type:`button`,children:(0,X.jsx)(Ss,{})}),Dn&&(0,X.jsx)(Ny,{onClick:()=>void On(),title:e(`Apply archive changes`),type:`button`,children:(0,X.jsx)(ms,{})}),(0,X.jsx)(Ic,{onChange:e=>{let t=Number(e);M(t),N.current=t,En&&bt(K.id,Ve,!0)},options:fy.map(t=>({...t,label:e(t.label)})),value:String(j),width:116})]})]}),An=T.open?{...T,index:k}:null;return(0,X.jsx)(Pa,{value:Qe,children:(0,X.jsxs)(Oy,{$rounded:v,children:[(0,X.jsx)(wf,{settings:L}),(0,X.jsx)(Fv,{activeId:K.id,onClose:Tt,onNewTab:()=>Ct(),onReorder:dn,onTransferToTab:$t,onSelect:i,onViewChange:an,onColumns:on,onShowImages:sn,showImages:$e,tasks:xe,onClearTasks:en,activityOpen:Ce,onActivityOpenChange:we,trayCount:Me.length+De.length,trayVisible:Ae,onToggleTray:Qt,split:We,canSplit:q===`files`,onToggleSplit:kt,details:H,canDetails:q===`files`||q===`recycle`,onToggleDetails:()=>U(e=>!e),shortcuts:z,view:Ye,tabs:t.filter(e=>!e.hidden).map(n=>{let r=_y(n),i=vy(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?vy(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?Ia(Qe,i):void 0,split:!!a,title:r===`files`?La(Qe,i,Ca(i)||e(`Files`)):e(sy[r]),partner:a?{title:La(Qe,o,Ca(o)||e(`Files`)),place:Ia(Qe,o)}:void 0}})}),(0,X.jsxs)(ky,{children:[(0,X.jsx)(m_,{activeKind:q,currentPath:q===`files`?Be:``,drives:l,historyVersion:re,onNavigate:e=>Dt(e),onOpenView:wt,homePath:s.find(e=>e.kind===`home`)?.path??``,places:s,recent:P,recentLimit:I,version:oe}),(0,X.jsxs)(Ay,{children:[q!==`files`&&kn,(0,X.jsxs)(jy,{children:[q!==`files`&&T.open&&(0,X.jsx)(Wf,{current:k,focusToken:D,matchCase:T.matchCase,mode:T.mode,onClose:ct,onMatchCase:()=>E(e=>({...e,matchCase:!e.matchCase})),onMode:()=>E(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>lt(1),onPrevious:()=>lt(-1),onQuery:e=>E(t=>({...t,query:e})),onRegex:()=>E(e=>({...e,regex:!e.regex})),placeholder:e(`Search`),query:T.query,regex:T.regex,total:A}),q===`files`?We&&Ue?(0,X.jsxs)(Ly,{ref:Mt,children:[(0,X.jsxs)(Ry,{style:{flex:a},children:[(0,X.jsxs)(Iy,{$active:he===`primary`,onPointerDown:()=>ge(`primary`),children:[(0,X.jsx)(Ny,{"data-shortcut":Ei(z.goBack),disabled:!Sn,onClick:e=>{let t=K.index-1;t<0||(wi(e)?Ct(K.history[t]):St(K.id,K.history[t],t))},title:e(`Back`),type:`button`,children:(0,X.jsx)(is,{})}),(0,X.jsx)(Ny,{"data-shortcut":Ei(z.goForward),disabled:!Cn,onClick:e=>{let t=K.index+1;t>=K.history.length||(wi(e)?Ct(K.history[t]):St(K.id,K.history[t],t))},title:e(`Forward`),type:`button`,children:(0,X.jsx)(as,{})}),(0,X.jsx)(Ny,{"data-shortcut":Ei(z.goUp),disabled:!He,onClick:e=>{He&&(wi(e)?Ct(He):bt(K.id,He))},title:e(`Up one level`),type:`button`,children:(0,X.jsx)(ts,{})}),(0,X.jsx)(Gp,{focusToken:he===`primary`?B:void 0,onNavigate:(e,t)=>t?Ct(e):void bt(K.id,e),path:Ve}),(0,X.jsx)(Ny,{onClick:e=>Pt(e,Ve,()=>void bt(K.id,Ve,!0)),title:e(`New folder or file`),type:`button`,children:(0,X.jsx)(rs,{})}),(0,X.jsx)(Ny,{"data-shortcut":Ei(z.find),onClick:ot,title:e(`Search`),type:`button`,children:(0,X.jsx)(es,{})})]}),wn(K,!0),he===`primary`&&Tn]}),(0,X.jsx)(zy,{onDoubleClick:()=>o(.5),onPointerDown:Nt,title:e(`Drag to resize; double-click to reset`)}),(0,X.jsxs)(Ry,{$enter:!0,style:{flex:1-a},children:[(0,X.jsxs)(Iy,{$active:he===`secondary`,onPointerDown:()=>ge(`secondary`),children:[(0,X.jsx)(Ny,{"data-shortcut":Ei(z.goBack),disabled:Ue.index<=0,onClick:e=>{let t=Ue.index-1;t<0||(wi(e)?Ct(Ue.history[t]):St(Ue.id,Ue.history[t],t))},title:e(`Back`),type:`button`,children:(0,X.jsx)(is,{})}),(0,X.jsx)(Ny,{"data-shortcut":Ei(z.goForward),disabled:Ue.index>=Ue.history.length-1,onClick:e=>{let t=Ue.index+1;t>=Ue.history.length||(wi(e)?Ct(Ue.history[t]):St(Ue.id,Ue.history[t],t))},title:e(`Forward`),type:`button`,children:(0,X.jsx)(as,{})}),(0,X.jsx)(Ny,{"data-shortcut":Ei(z.goUp),disabled:!Ke,onClick:e=>{Ke&&(wi(e)?Ct(Ke):bt(Ue.id,Ke))},title:e(`Up one level`),type:`button`,children:(0,X.jsx)(ts,{})}),(0,X.jsx)(Gp,{focusToken:he===`secondary`?B:void 0,onNavigate:(e,t)=>t?Ct(e):void bt(Ue.id,e),path:Ge}),(0,X.jsx)(Ny,{onClick:e=>Pt(e,Ge,()=>void bt(Ue.id,Ge,!0)),title:e(`New folder or file`),type:`button`,children:(0,X.jsx)(rs,{})}),(0,X.jsx)(Ny,{"data-shortcut":Ei(z.find),onClick:ot,title:e(`Search`),type:`button`,children:(0,X.jsx)(es,{})})]}),wn(Ue,!1),he===`secondary`&&Tn]}),(0,X.jsx)(hl,{info:jt,onWidth:At,open:H,videoAudio:L?.previewVideoAudio??!1,videoAutoplay:L?.previewVideoAutoplay??!1,width:ue})]}):(0,X.jsxs)(Vy,{children:[(0,X.jsxs)(Hy,{children:[kn,(0,X.jsxs)(By,{children:[wn(K,!0),Tn]})]}),(0,X.jsx)(hl,{info:fe,onWidth:At,open:H,videoAudio:L?.previewVideoAudio??!1,videoAutoplay:L?.previewVideoAutoplay??!1,width:ue})]}):q===`home`?(0,X.jsx)(Bp,{drives:l,find:An,historyVersion:re,onSearchMatches:te,homePath:s.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:_n,onHistoryChanged:()=>ie(e=>e+1),onAddToTray:e=>void Ht(e),onOpen:Dt,onLayoutChanged:hn,onPlacesChanged:c,onRecentCleared:gn,places:s,recent:P,recentLimit:I,visibilityVersion:le}):q===`settings`?(0,X.jsx)(mh,{appInfo:d,find:An,focusSection:h,onSearchMatches:te,onSettingsChanged:hn}):q===`gallery`?(0,X.jsx)(r_,{confirmDelete:L?.confirmDelete??!1,find:An,onSearchMatches:te,openOnSingleClick:L?.openOnSingleClick??!1,onAddToTray:e=>void Ht(e),shortcuts:z,showCheckboxes:L?.showCheckboxes??!0,view:Ye}):(0,X.jsx)(sm,{find:An,onOpenLocation:Dt,onShowDetails:()=>U(!0),platform:d?.platform,showDetails:H,videoAudio:L?.previewVideoAudio??!1,videoAutoplay:L?.previewVideoAutoplay??!1})]},q),(0,X.jsxs)(Ky,{children:[(0,X.jsx)(`span`,{children:q===`files`&&K.listing?Ey(e,K.listing):``}),d?(0,X.jsxs)(Uy,{children:[(0,X.jsxs)(`span`,{children:[`v`,d.version,` · `,d.platform]}),p?.available&&(0,X.jsxs)(Wy,{onClick:()=>{g(`updates`),wt(`settings`)},title:e(`Version {version} is available.`,{version:p.latest}),type:`button`,children:[(0,X.jsx)(Gy,{}),e(`Update available`)]})]}):(0,X.jsx)(`span`,{children:`browser preview`})]})]})]}),(0,X.jsx)(vu,{clipboardItems:De,clipboardMove:Oe,currentDirectory:q===`files`?Be:``,items:Me,onAdd:e=>void Ht(e),onClear:Wt,onClose:()=>je(!1),onCopyToClipboard:e=>void Jt(e),onPosition:Zt,onRemove:Ut,onTransfer:$t,position:Le,visible:Ae}),_e&&(0,X.jsx)(Pc,{creationOnly:!0,directory:_e.directory,menu:{x:_e.x,y:_e.y,paths:[],background:!0},onClose:()=>ve(null),onCreateFile:e=>void Ft(e),onCreateFolder:e=>void Ft(null,e),shortcuts:z}),Pe&&(0,X.jsx)(kf,{delaySeconds:Pe.prompt.delaySeconds,hits:Pe.prompt.hits,onCancel:()=>{Pe.resolve(!1),Fe(null)},onConfirm:()=>{Pe.resolve(!0),Fe(null)},permanent:Pe.prompt.permanent},Pe.id),(0,X.jsx)(ny,{}),(0,X.jsx)($n,{})]})})}var Oy=J.div`
    position: relative;
    isolation: isolate;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    background: var(--bg-primary);

    html.has-wallpaper & {
        background: transparent;
    }

    /* An undecorated window gets no frame from the compositor, so the corners are drawn here. */
    border-radius: ${({$rounded:e})=>e?`12px`:`0`};
    box-shadow: ${({$rounded:e})=>e?`inset 0 0 0 1px var(--border-color), 0 24px 70px rgba(0, 0, 0, 0.38)`:`none`};
`,ky=J.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex: 1;
    min-height: 0;
    background:
        radial-gradient(1200px 650px at 12% -10%, rgba(var(--accent-secondary-rgb), 0.12), transparent 60%),
        radial-gradient(900px 520px at 110% 18%, rgba(var(--accent-rgb), 0.09), transparent 55%),
        linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-media) 100%);

    html.has-wallpaper & {
        background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.12), rgba(var(--bg-rgb), 0.3));
    }
`,Ay=J.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,jy=J.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${vc}
`,My=J.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Ny=J.button`
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
`,Py=J.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,Fy=J.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,Iy=J.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,Ly=J.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Ry=J.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?bc:``}
`,zy=J.div`
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
        transform-origin: center;
        transition: background 120ms ease, box-shadow 120ms ease;
        ${xc}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,By=J.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Vy=J.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Hy=J.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Uy=J.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,Wy=J.button`
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
`,Gy=J.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,Ky=J.footer`
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
`;function qy({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,onCancel:o,onSelect:s}){let c=Kn(),l=t===`file`,u=r??[],[d,f]=(0,_.useState)(e),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)(!0),[v,y]=(0,_.useState)(null),[b,x]=(0,_.useState)(()=>new Set),[S,C]=(0,_.useState)(a??[]),[w,T]=(0,_.useState)([]),[E,D]=(0,_.useState)([]),[O,k]=(0,_.useState)([]),[ee,A]=(0,_.useState)([]),[te,j]=(0,_.useState)(``),[M,N]=(0,_.useState)(u.length===0),[P,F]=(0,_.useState)(`files`),[I,ne]=(0,_.useState)(0),[L,R]=(0,_.useState)(Gi),[re,ie]=(0,_.useState)(0),[z,ae]=(0,_.useState)(0),[oe,se]=(0,_.useState)(null),[B,ce]=(0,_.useState)(null),[le,V]=(0,_.useState)(0),[H,U]=(0,_.useState)(null);(0,_.useEffect)(()=>{Fr().then(U,()=>U(null))},[]),(0,_.useEffect)(()=>{a?C(a):hr().then(C,()=>C([]))},[a]),(0,_.useEffect)(()=>{gr().then(T,()=>T([])),Er().then(D,()=>D([]))},[]),(0,_.useEffect)(()=>{let e=!0;return g(!0),y(null),x(new Set),j(l?``:Ca(d)),sr(d||void 0,!1).then(t=>{e&&(m(t),f(t.path),j(l?``:Ca(t.path)),g(!1))},t=>{e&&(y(t instanceof Error?t.message:String(t)),g(!1))}),()=>{e=!1}},[d,I,l]),(0,_.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),R(e=>({...e,open:!0})),ie(e=>e+1);return}if(e.key===`Escape`){L.open?(R(e=>({...e,open:!1,query:``})),ae(0)):o();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),de();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),fe();return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Ce()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,_.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),de()):e.button===4&&(e.preventDefault(),fe())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let ue=e=>{let t=e.trim();t.length!==0&&Aa(t)!==Aa(d)&&(k(e=>[...e,d]),A([]),F(`files`),f(t))},de=()=>{let e=O.at(-1);e!==void 0&&(k(e=>e.slice(0,-1)),A(e=>[d,...e]),f(e))},fe=()=>{let e=ee[0];e!==void 0&&(A(e=>e.slice(1)),k(e=>[...e,d]),f(e))},W=p?.path??d,pe=p?.parent??(d?wa(d):null);(0,_.useEffect)(()=>{Y.available&&W&&Y.send({type:`fs.watch`,payload:{paths:[W]}})},[W]),(0,_.useEffect)(()=>{if(Y.available&&W)return Y.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&Aa(t.data.path)===Aa(W)&&sr(W,!1).then(e=>{m(e);let t=new Set(e.entries.map(e=>e.fullPath));x(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[W]);let me=(p?.entries??[]).filter(e=>e.isDirectory||l&&(M||u.length===0||u.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),he=p?{...p,entries:me}:null,ge=L.open&&L.query.length>0,_e=(0,_.useMemo)(()=>ge?me.filter(e=>ea(e.name,L)).map(e=>e.fullPath):[],[ge,me,L]);(0,_.useEffect)(()=>{ae(0)},[L.query,L.matchCase,L.regex,p?.path]);let ve=_e.length===0?-1:Math.min(z,_e.length-1),ye=(0,_.useMemo)(()=>({...L,currentPath:ve>=0?_e[ve]:null}),[L,ve,_e]),be={mode:H?.defaultView?.mode??`list`,iconSize:H?.defaultView?.iconSize??ir.iconSize,gridSize:H?.defaultView?.gridSize??ir.gridSize,sort:`name`,sortDescending:!1,columns:H?.defaultView?.columns??ir.columns??[`type`,`size`,`modified`]},xe=te.trim(),Se=xe.length>0?Yy(xe)?xe:Jy(W,xe):null,Ce=()=>{if(h||v)return;let e=n?[...b]:[...b].slice(0,1);e.length>0?s(e):Se!==null&&xe!==Ca(W)?s([Se]):!l&&W&&s([W])},we=(0,_.useCallback)(e=>{x(new Set(e)),j(e.length===1?Ca(e[0]):e.length===0&&!l?Ca(W):``)},[W,l]),Te=e=>{p?.entries.find(t=>t.fullPath===e)?.isDirectory?ue(e):l&&s([e])},Ee=e=>j(e),De=async e=>{let t=oe;if(se(null),!t||!W)return;let n=e===null?await ri(W):await si(W,e);n.ok&&n.path!==null&&(R(e=>({...e,open:!1,query:``})),e!==null&&N(!0),ce(n.path),V(e=>e+1),ne(e=>e+1))},G=()=>{R(e=>({...e,open:!0})),ie(e=>e+1)},Oe=e=>{ae(t=>_e.length===0?0:(t+e+_e.length)%_e.length)},ke=e=>(0,X.jsxs)(ab,{children:[(0,X.jsxs)(ob,{children:[(0,X.jsx)(sb,{children:c(l?`File name:`:`Folder:`)}),(0,X.jsx)(cb,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ce())},spellCheck:!1,value:te}),l&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(sb,{children:c(`Files of type:`)}),(0,X.jsx)(Ic,{onChange:e=>N(e===`all`),options:[...u.length>0?[{value:`supported`,label:`${c(`Supported files`)} (${u.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${c(`All files`)} (*.*)`}],value:M?`all`:`supported`,width:220})]})]}),(0,X.jsxs)(lb,{children:[(0,X.jsx)(ub,{onClick:o,type:`button`,children:c(`Cancel`)}),(0,X.jsxs)(ub,{$primary:!0,disabled:h||v!==null||l&&b.size===0&&xe.length===0,onClick:Ce,type:`button`,children:[(0,X.jsx)(ms,{size:12}),c(l?`Select this file`:`Select this folder`)]})]})]}),Ae=(0,X.jsxs)(Zy,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,X.jsxs)(Qy,{children:[(0,X.jsxs)($y,{children:[(0,X.jsx)(Zo,{size:16}),c(l?`Choose a file`:`Choose a folder`)]}),(0,X.jsx)(eb,{onClick:o,title:c(`Cancel`),type:`button`,children:(0,X.jsx)(hs,{size:12})})]}),(0,X.jsxs)(tb,{children:[(0,X.jsx)(m_,{activeKind:P===`overview`?`home`:P===`gallery`?`gallery`:`files`,currentPath:W,drives:w,hiddenViews:l?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:S.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>ue(e),onOpenView:e=>{e===`home`?(x(new Set),j(l?``:Ca(W)),F(`overview`)):e===`gallery`&&l&&(x(new Set),j(``),F(`gallery`))},places:S,recent:E,recentLimit:10}),(0,X.jsx)(nb,{children:P===`overview`?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Bp,{drives:w,historyVersion:0,homePath:S.find(e=>e.kind===`home`)?.path??``,onOpen:e=>ue(e),onPick:e=>s([e]),onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:we,places:S,readOnly:!0,recent:E,recentLimit:10,visibilityVersion:0}),ke(j)]}):P===`gallery`?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(r_,{onPick:e=>s([e]),onSelectionChange:we,showCheckboxes:H?.showCheckboxes??!0,view:{...rr,columns:[]}}),ke(j)]}):(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(rb,{children:[(0,X.jsx)(ib,{disabled:O.length===0,onClick:de,title:c(`Back`),type:`button`,children:(0,X.jsx)(is,{})}),(0,X.jsx)(ib,{disabled:ee.length===0,onClick:fe,title:c(`Forward`),type:`button`,children:(0,X.jsx)(as,{})}),(0,X.jsx)(ib,{disabled:!pe,onClick:()=>pe&&ue(pe),title:c(`Up one level`),type:`button`,children:(0,X.jsx)(ts,{})}),(0,X.jsx)(Gp,{onNavigate:ue,path:W}),(0,X.jsx)(ib,{onClick:e=>se({x:e.clientX,y:e.clientY}),title:c(`New folder or file`),type:`button`,children:(0,X.jsx)(rs,{})}),(0,X.jsx)(ib,{onClick:G,title:c(`Search`),type:`button`,children:(0,X.jsx)(es,{})})]}),L.open&&(0,X.jsx)(Wf,{current:ve,focusToken:re,matchCase:L.matchCase,mode:L.mode,onClose:()=>{R(e=>({...e,open:!1,query:``})),ae(0)},onMatchCase:()=>R(e=>({...e,matchCase:!e.matchCase})),onMode:()=>R(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Oe(1),onPrevious:()=>Oe(-1),onQuery:e=>R(t=>({...t,query:e})),onRegex:()=>R(e=>({...e,regex:!e.regex})),query:L.query,regex:L.regex,total:_e.length}),(0,X.jsx)(Hu,{allowBackgroundMenu:!0,confirmDelete:H?.confirmDelete??!1,enableShortcuts:!0,error:v,find:ye,loading:h,listing:he,onOpen:Te,onOpenFile:Te,onRefresh:()=>ne(e=>e+1),onSelectionChange:we,onSort:()=>void 0,openOnSingleClick:H?.openOnSingleClick??!1,refreshToken:I,pendingRename:B,pendingRenameToken:le,showCheckboxes:H?.showCheckboxes??!0,showDetails:!1,showImages:!1,singleSelect:!n,view:be}),ke(Ee)]})})]}),oe&&(0,X.jsx)(Pc,{creationOnly:!0,directory:W,menu:{x:oe.x,y:oe.y,paths:[],background:!0},onClose:()=>se(null),onCreateFile:l?e=>void De(e):void 0,onCreateFolder:()=>void De(null),shortcuts:xi})]});return i?Ae:(0,sc.createPortal)((0,X.jsx)(Xy,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:Ae}),document.body)}function Jy(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Yy(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Xy=J.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${bc}
`,Zy=J.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:cc}
    ${({$inline:e})=>e?``:gc}
`,Qy=J.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,$y=J.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,eb=J.button`
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
`,tb=J.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,nb=J.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,rb=J.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,ib=J.button`
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
`,ab=J.footer`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,ob=J.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,sb=J.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,cb=J.input`
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
`,lb=J.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,ub=J.button`
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
`;function db({mode:e,multiple:t,extensions:n,initial:r}){let i=Kn(),a=Xn();return(0,_.useEffect)(()=>{Fr().then(e=>th(e.accentColor,e.secondaryColor),()=>void 0)},[]),(0,X.jsxs)(fb,{children:[(0,X.jsxs)(pb,{...a,children:[(0,X.jsx)(mb,{children:(0,X.jsx)(gs,{size:17})}),(0,X.jsx)(hb,{children:i(e===`file`?`Choose a file`:`Choose a folder`)}),(0,X.jsx)(gb,{children:(0,X.jsx)(_b,{onClick:()=>Y.send({type:`pick.cancel`}),title:i(`Cancel`),type:`button`,children:(0,X.jsx)(hs,{size:12})})})]}),(0,X.jsx)(vb,{children:(0,X.jsx)(qy,{extensions:n,initial:r,inline:!0,mode:e,multiple:t,onCancel:()=>Y.send({type:`pick.cancel`}),onSelect:e=>Y.send({type:`pick.submit`,payload:{paths:e}})})}),(0,X.jsx)($n,{})]})}var fb=J.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,pb=J.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,mb=J.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,hb=J.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,gb=J.div`
    display: flex;
    flex-shrink: 0;
`,_b=J.button`
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
`,vb=J.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,yb=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,yb);var bb=document.getElementById(`root`),xb=new URLSearchParams(window.location.search),Sb=xb.get(`picker`),Cb=xb.get(`filter`)??``;bb&&(0,v.createRoot)(bb).render((0,X.jsx)(_.StrictMode,{children:(0,X.jsx)(qn,{children:Sb===`folder`||Sb===`file`?(0,X.jsx)(db,{extensions:Cb?Cb.split(`;`).filter(Boolean):[],initial:xb.get(`initial`)??``,mode:Sb,multiple:xb.get(`multiple`)===`1`}):(0,X.jsx)(Dy,{})})}));