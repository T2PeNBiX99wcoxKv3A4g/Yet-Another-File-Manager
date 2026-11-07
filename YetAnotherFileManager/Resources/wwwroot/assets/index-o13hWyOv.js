var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function O(e,t){return D(e.type,t,e.props)}function k(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ee(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?ee(``+e.key):t.toString(36)}function te(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function M(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,M(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),M(o,r,i,``,function(e){return e})):o!=null&&(k(o)&&(o=O(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=M(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=M(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return M(te(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function N(e,t,n){if(e==null)return e;var r=[],i=0;return M(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ne(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var P=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function re(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,P)}catch(e){P(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function ie(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else re(ie.bind(null,e))}var F={map:N,forEach:function(e,t,n){N(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return N(e,function(){t++}),t},toArray:function(e){return N(e,function(e){return e})||[]},only:function(e){if(!k(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=F,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=ie,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=k,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ne}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=re,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&A(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&A(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,ee=k.port2;k.port1.onmessage=D,O=function(){ee.postMessage(null)}}else O=function(){_(D,0)};function A(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,A(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function E(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var D=Object.assign,O=Symbol.for(`react.element`),k=Symbol.for(`react.transitional.element`),ee=Symbol.for(`react.portal`),A=Symbol.for(`react.fragment`),j=Symbol.for(`react.strict_mode`),te=Symbol.for(`react.profiler`),M=Symbol.for(`react.consumer`),N=Symbol.for(`react.context`),ne=Symbol.for(`react.forward_ref`),P=Symbol.for(`react.suspense`),re=Symbol.for(`react.suspense_list`),ie=Symbol.for(`react.memo`),F=Symbol.for(`react.lazy`),I=Symbol.for(`react.activity`),ae=Symbol.for(`react.legacy_hidden`),oe=Symbol.for(`react.memo_cache_sentinel`),L=Symbol.for(`react.view_transition`),se=Symbol.for(`react.recoverable`),ce=Symbol.iterator;function le(e){return typeof e!=`object`||!e?null:(e=ce&&e[ce]||e[`@@iterator`],typeof e==`function`?e:null)}var ue=Symbol.for(`react.client.reference`);function de(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ue?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case A:return`Fragment`;case te:return`Profiler`;case j:return`StrictMode`;case P:return`Suspense`;case re:return`SuspenseList`;case I:return`Activity`;case L:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case ee:return`Portal`;case N:return e.displayName||`Context`;case M:return(e._context.displayName||`Context`)+`.Consumer`;case ne:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ie:return t=e.displayName||null,t===null?de(e.type)||`Memo`:t;case F:t=e._payload,e=e._init;try{return de(e(t))}catch{}}return null}var R=Array.isArray,z=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},pe=[],me=-1;function V(e){return{current:e}}function H(e){0>me||(e.current=pe[me],pe[me]=null,me--)}function he(e,t){me++,pe[me]=e.current,e.current=t}var ge=V(null),U=V(null),_e=V(null),ve=V(null);function ye(e,t){switch(he(_e,t),he(U,e),he(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?pp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=pp(t),e=mp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}H(ge),he(ge,e)}function be(){H(ge),H(U),H(_e)}function xe(e){var t=e.memoizedState;t!==null&&(uh._currentValue=t.memoizedState,he(ve,e)),t=ge.current;var n=mp(t,e.type);t!==n&&(he(U,e),he(ge,n))}function Se(e){U.current===e&&(H(ge),H(U)),ve.current===e&&(H(ve),uh._currentValue=fe)}var Ce,we;function Te(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Ee=!1;function De(e,t){if(!e||Ee)return``;Ee=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ee=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Te(n):``}function Oe(e,t){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te(`Lazy`);case 13:return e.child!==t&&t!==null?Te(`Suspense Fallback`):Te(`Suspense`);case 19:return Te(`SuspenseList`);case 0:case 15:return De(e.type,!1);case 11:return De(e.type.render,!1);case 1:return De(e.type,!0);case 31:return Te(`Activity`);case 30:return Te(`ViewTransition`);default:return``}}function ke(e){try{var t=``,n=null;do t+=Oe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ae=Object.prototype.hasOwnProperty,je=t.unstable_scheduleCallback,Me=t.unstable_cancelCallback,Ne=t.unstable_shouldYield,Pe=t.unstable_requestPaint,Fe=t.unstable_now,Ie=t.unstable_getCurrentPriorityLevel,Le=t.unstable_ImmediatePriority,Re=t.unstable_UserBlockingPriority,ze=t.unstable_NormalPriority,Be=t.unstable_LowPriority,Ve=t.unstable_IdlePriority,He=t.log,Ue=t.unstable_setDisableYieldValue,We=null,Ge=null;function W(e){if(typeof He==`function`&&Ue(e),Ge&&typeof Ge.setStrictMode==`function`)try{Ge.setStrictMode(We,e)}catch{}}var Ke=Math.clz32?Math.clz32:Ye,qe=Math.log,Je=Math.LN2;function Ye(e){return e>>>=0,e===0?32:31-(qe(e)/Je|0)|0}var Xe=256,G=262144,Ze=4194304;function Qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $e(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Qe(n))):i=Qe(o):i=Qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Qe(n))):i=Qe(o)):i=Qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function et(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tt(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-Ke(n),i=1<<r;t|=e[r],n&=~i}return t}function nt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rt(){var e=Ze;return Ze<<=1,!(Ze&62914560)&&(Ze=4194304),e}function it(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function at(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ot(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ke(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&st(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function st(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ke(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ct(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ke(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function lt(e,t){var n=t&-t;return n=n&42?1:ut(n),(n&(e.suspendedLanes|t))===0?n:0}function ut(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function dt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ft(){var e=B.p;return e===0?(e=window.event,e===void 0?32:Eh(e.type)):e}function pt(e,t){var n=B.p;try{return B.p=e,t()}finally{B.p=n}}var mt=Math.random().toString(36).slice(2),ht=`__reactFiber$`+mt,gt=`__reactProps$`+mt,_t=`__reactContainer$`+mt,vt=`__reactEvents$`+mt,yt=`__reactListeners$`+mt,bt=`__reactHandles$`+mt,xt=`__reactResources$`+mt,St=`__reactMarker$`+mt,Ct=`__reactLoad$`+mt;function wt(e){delete e[ht],delete e[gt],delete e[yt],delete e[bt]}function Tt(e){var t;if(t=e[ht])return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hm(e);e!==null;){if(n=e[ht])return n;e=hm(e)}return t}e=n,n=e.parentNode}return null}function Et(e){if(e=e[ht]||e[_t]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Dt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ot(e){var t=e[xt];return t||=e[xt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function K(e){e[St]=!0}function kt(e){e[Ct]=void 0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return Ae.call(It,e)?!0:Ae.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}var Rt=!1;function zt(){var e=Rt;return Rt=!1,e}function Bt(e,t,n){if(Lt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Vt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Ht(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Ut(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Wt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Gt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kt(e){if(!e._valueTracker){var t=Wt(e)?`checked`:`value`;e._valueTracker=Gt(e,t,``+e[t])}}function qt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Wt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var Jt=/[\n"\\]/g;function Yt(e){return e.replace(Jt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Xt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Ut(t)):e.value!==``+Ut(t)&&(e.value=``+Ut(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Qt(e,Ut(n)):o===`number`&&e.value==t?Qt(e,Ut(e.value)):Qt(e,Ut(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Ut(s):e.removeAttribute(`name`)}function Zt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Kt(e);return}n=n==null?``:``+Ut(n),t=t==null?n:``+Ut(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Kt(e)}function Qt(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function $t(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Ut(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function en(e,t,n){t!=null&&(t=``+Ut(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+Ut(n)}function tn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(R(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Ut(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Kt(e)}function nn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var rn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function an(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||rn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function on(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,Rt=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(an(e,a,r),Rt=!0)}else for(var o in t)t.hasOwnProperty(o)&&an(e,o,t[o])}function sn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var cn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),ln=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function un(e){return ln.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function dn(){}var fn=null;function pn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mn=null,hn=null;function gn(e){var t=Et(e);if(t&&(e=t.stateNode)){var n=e[gt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Xt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Yt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[gt]||null;if(!a)throw Error(i(90));Xt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&qt(r)}break a;case`textarea`:en(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&$t(e,!!n.multiple,t,!1)}}}var _n=!1;function vn(e,t,n){if(_n)return e(t,n);_n=!0;try{return e(t)}finally{if(_n=!1,(mn!==null||hn!==null)&&(zd(),mn&&(t=mn,e=hn,hn=mn=null,gn(t),e)))for(t=0;t<e.length;t++)gn(e[t])}}function yn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[gt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var bn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,xn=!1;if(bn)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){xn=!0}}),window.addEventListener(`test`,Sn,Sn),window.removeEventListener(`test`,Sn,Sn)}catch{xn=!1}var Cn=null,wn=null,Tn=null;function En(){if(Tn)return Tn;var e,t=wn,n=t.length,r,i=`value`in Cn?Cn.value:Cn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Tn=i.slice(e,1<r?1-r:void 0)}function Dn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function On(){return!0}function q(){return!1}function kn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?On:q,this.isPropagationStopped=q,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=On)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=On)},persist:function(){},isPersistent:On}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jn=kn(An),Mn=D({},An,{view:0,detail:0}),Nn=kn(Mn),Pn,Fn,In,Ln=D({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==In&&(In&&e.type===`mousemove`?(Pn=e.screenX-In.screenX,Fn=e.screenY-In.screenY):Fn=Pn=0,In=e),Pn)},movementY:function(e){return`movementY`in e?e.movementY:Fn}}),Rn=kn(Ln),zn=kn(D({},Ln,{dataTransfer:0})),Bn=kn(D({},Mn,{relatedTarget:0})),Vn=kn(D({},An,{animationName:0,elapsedTime:0,pseudoElement:0})),J=kn(D({},An,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=kn(D({},An,{data:0})),Y={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Un={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Wn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Gn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wn[e])?!!t[e]:!1}function Kn(){return Gn}var qn=kn(D({},Mn,{key:function(e){if(e.key){var t=Y[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Dn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Un[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(e){return e.type===`keypress`?Dn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Dn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Jn=kn(D({},Ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Yn=kn(D({},An,{submitter:0})),Xn=kn(D({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn})),Zn=kn(D({},An,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=kn(D({},Ln,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=kn(D({},An,{newState:0,oldState:0,source:0})),er=[9,13,27,32],tr=bn&&`CompositionEvent`in window,nr=null;bn&&`documentMode`in document&&(nr=document.documentMode);var rr=bn&&`TextEvent`in window&&!nr,ir=bn&&(!tr||nr&&8<nr&&11>=nr),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!tr&&sr(e,t)?(e=En(),Tn=wn=Cn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){mn?hn?hn.push(r):hn=[r]:mn=r,t=Xf(t,`onChange`),0<t.length&&(n=new jn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){Hf(e,0)}function vr(e){if(qt(Dt(e)))return e}function yr(e,t){if(e===`change`)return t}var br=!1;if(bn){var xr;if(bn){var Sr=`oninput`in document;if(!Sr){var Cr=document.createElement(`div`);Cr.setAttribute(`oninput`,`return;`),Sr=typeof Cr.oninput==`function`}xr=Sr}else xr=!1;br=xr&&(!document.documentMode||9<document.documentMode)}function wr(){hr&&(hr.detachEvent(`onpropertychange`,Tr),gr=hr=null)}function Tr(e){if(e.propertyName===`value`&&vr(gr)){var t=[];mr(t,gr,e,pn(e)),vn(_r,t)}}function Er(e,t,n){e===`focusin`?(wr(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,Tr)):e===`focusout`&&wr()}function Dr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return vr(gr)}function Or(e,t){if(e===`click`)return vr(t)}function kr(e,t){if(e===`input`||e===`change`)return vr(t)}function Ar(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var jr=typeof Object.is==`function`?Object.is:Ar;function Mr(e,t){if(jr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ae.call(t,i)||!jr(e[i],t[i]))return!1}return!0}function Nr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Pr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fr(e,t){var n=Pr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Pr(n)}}function Ir(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ir(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Nr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Nr(e.document)}return t}function Rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var zr=bn&&`documentMode`in document&&11>=document.documentMode,Br=null,Vr=null,Hr=null,Ur=!1;function Wr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ur||Br==null||Br!==Nr(r)||(r=Br,`selectionStart`in r&&Rr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hr&&Mr(Hr,r)||(Hr=r,r=Xf(Vr,`onSelect`),0<r.length&&(t=new jn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Br)))}function Gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Kr={animationend:Gr(`Animation`,`AnimationEnd`),animationiteration:Gr(`Animation`,`AnimationIteration`),animationstart:Gr(`Animation`,`AnimationStart`),transitionrun:Gr(`Transition`,`TransitionRun`),transitionstart:Gr(`Transition`,`TransitionStart`),transitioncancel:Gr(`Transition`,`TransitionCancel`),transitionend:Gr(`Transition`,`TransitionEnd`)},qr={},Jr={};bn&&(Jr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),`TransitionEvent`in window||delete Kr.transitionend.transition);function Yr(e){if(qr[e])return qr[e];if(!Kr[e])return e;var t=Kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jr)return qr[e]=t[n];return e}var Xr=Yr(`animationend`),Zr=Yr(`animationiteration`),Qr=Yr(`animationstart`),$r=Yr(`transitionrun`),ei=Yr(`transitionstart`),ti=Yr(`transitioncancel`),ni=Yr(`transitionend`),ri=new Map,ii=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ii.push(`scrollEnd`);function ai(e,t){ri.set(e,t),Mt(t,[e])}var oi=0;function si(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=oi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function ci(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function li(e,t){return e=ci(e),t=ci(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var ui=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},di=[],fi=0,pi=0;function mi(){for(var e=fi,t=pi=fi=0;t<e;){var n=di[t];di[t++]=null;var r=di[t];di[t++]=null;var i=di[t];di[t++]=null;var a=di[t];if(di[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&vi(n,i,a)}}function hi(e,t,n,r){di[fi++]=e,di[fi++]=t,di[fi++]=n,di[fi++]=r,pi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function gi(e,t,n,r){return hi(e,t,n,r),yi(e)}function _i(e,t){return hi(e,null,null,t),yi(e)}function vi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ke(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function yi(e){if(50<kd)throw kd=0,Ad=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var bi={};function xi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Si(e,t,n,r){return new xi(e,t,n,r)}function Ci(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wi(e,t){var n=e.alternate;return n===null?(n=Si(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ti(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ei(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Ci(r)&&(s=1);else if(typeof r==`string`)s=Xm(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case I:return e=Si(31,n,t,a),e.elementType=I,e.lanes=o,e;case A:return Di(n.children,a,o,t);case j:s=8,a|=24;break;case te:return e=Si(12,n,t,a|2),e.elementType=te,e.lanes=o,e;case P:return e=Si(13,n,t,a),e.elementType=P,e.lanes=o,e;case re:return e=Si(19,n,t,a),e.elementType=re,e.lanes=o,e;case ae:case L:return e=a|32,e=Si(30,n,t,e),e.elementType=L,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case N:s=10;break a;case M:s=9;break a;case ne:s=11;break a;case ie:s=14;break a;case F:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Si(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Di(e,t,n,r){return e=Si(7,e,r,t),e.lanes=n,e}function Oi(e,t,n){return e=Si(6,e,null,t),e.lanes=n,e}function ki(e){var t=Si(18,null,null,0);return t.stateNode=e,t}function Ai(e,t,n){return t=Si(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ji=new WeakMap;function Mi(e,t){if(typeof e==`object`&&e){var n=ji.get(e);return n===void 0?(t={value:e,source:t,stack:ke(t)},ji.set(e,t),t):n}return{value:e,source:t,stack:ke(t)}}var Ni=[],Pi=0,Fi=null,Ii=0,Li=[],Ri=0,zi=null,Bi=1,Vi=``;function Hi(e,t){Ni[Pi++]=Ii,Ni[Pi++]=Fi,Fi=e,Ii=t}function Ui(e,t,n){Li[Ri++]=Bi,Li[Ri++]=Vi,Li[Ri++]=zi,zi=e;var r=Bi;e=Vi;var i=32-Ke(r)-1;r&=~(1<<i),n+=1;var a=32-Ke(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Bi=1<<32-Ke(t)+i|n<<i|r,Vi=a+e}else Bi=1<<a|n<<i|r,Vi=e}function Wi(e){e.return!==null&&(Hi(e,1),Ui(e,1,0))}function Gi(e){for(;e===Fi;)Fi=Ni[--Pi],Ni[Pi]=null,Ii=Ni[--Pi],Ni[Pi]=null;for(;e===zi;)zi=Li[--Ri],Li[Ri]=null,Vi=Li[--Ri],Li[Ri]=null,Bi=Li[--Ri],Li[Ri]=null}function Ki(e,t){Li[Ri++]=Bi,Li[Ri++]=Vi,Li[Ri++]=zi,Bi=t.id,Vi=t.overflow,zi=e}var qi=null,Ji=null,Yi=!1,Xi=null,Zi=!1,Qi=Error(i(519));function $i(e){throw aa(Mi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Qi}function ea(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ht]=e,t[gt]=r,n){case`dialog`:Uf(`cancel`,t),Uf(`close`,t);break;case`iframe`:case`object`:case`embed`:Uf(`load`,t);break;case`video`:case`audio`:for(n=0;n<Bf.length;n++)Uf(Bf[n],t);break;case`source`:Uf(`error`,t);break;case`img`:case`image`:case`link`:Uf(`error`,t),Uf(`load`,t);break;case`details`:Uf(`toggle`,t);break;case`input`:Uf(`invalid`,t),Zt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Uf(`invalid`,t);break;case`textarea`:Uf(`invalid`,t),tn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||np(t.textContent,n)?(r.popover!=null&&(Uf(`beforetoggle`,t),Uf(`toggle`,t)),r.onScroll!=null&&Uf(`scroll`,t),r.onScrollEnd!=null&&Uf(`scrollend`,t),r.onClick!=null&&(t.onclick=dn),t=!0):t=!1,t||$i(e,!0)}function ta(e){for(qi=e.return;qi;)switch(qi.tag){case 5:case 31:case 13:Zi=!1;return;case 27:case 3:Zi=!0;return;default:qi=qi.return}}function na(e){if(e!==qi)return!1;if(!Yi)return ta(e),Yi=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||gp(e.type,e.memoizedProps)),n=!n),n&&Ji&&$i(e),ta(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ji=mm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ji=mm(e)}else t===27?(t=Ji,Tp(e.type)?(e=pm,pm=null,Ji=e):Ji=t):Ji=qi?fm(e.stateNode.nextSibling):null;return!0}function ra(){Ji=qi=null,Yi=!1}function ia(){var e=Xi;return e!==null&&(fd===null?fd=e:fd.push.apply(fd,e),Xi=null),e}function aa(e){Xi===null?Xi=[e]:Xi.push(e)}var oa=V(null),sa=null,ca=null;function la(e,t,n){he(oa,t._currentValue),t._currentValue=n}function ua(e){e._currentValue=oa.current,H(oa)}function da(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function fa(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),da(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),da(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),da(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function pa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;jr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ve.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[uh]:e.push(uh))}a=a.return}return e!==null&&fa(t,e,n,r),t.flags|=262144,e!==null}function ma(e){for(e=e.firstContext;e!==null;){if(!jr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ha(e){sa=e,ca=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ga(e){return va(sa,e)}function _a(e,t){return sa===null&&ha(e),va(e,t)}function va(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ca===null){if(e===null)throw Error(i(308));ca=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ca=ca.next=t;return n}var ya=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ba=t.unstable_scheduleCallback,xa=t.unstable_NormalPriority,Sa={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ca(){return{controller:new ya,data:new Map,refCount:0}}function wa(e){e.refCount--,e.refCount===0&&ba(xa,function(){e.controller.abort()})}function Ta(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Ea=null;function Da(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Oa=null,ka=0,Aa=0,ja=null;function Ma(e,t){if(Oa===null){var n=Oa=[];ka=0,Aa=Ff(),ja={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ka++,t.then(Na,Na),t}function Na(){if(--ka===0&&(Ea=null,Oa!==null)){ja!==null&&(ja.status=`fulfilled`);var e=Oa;Oa=null,Aa=0,ja=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Pa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Fa=z.S;z.S=function(e,t){if(hd=Fe(),typeof t==`object`&&t&&typeof t.then==`function`&&Ma(e,t),Ea!==null)for(var n=xf;n!==null;)Ta(n,Ea),n=n.next;if(n=e.types,n!==null){for(var r=xf;r!==null;)Ta(r,n),r=r.next;if(Aa!==0){r=Ea,r===null&&(r=Ea=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Fa!==null&&Fa(e,t)};var Ia=V(null);function La(){var e=Ia.current;return e===null?Xu.pooledCache:e}function Ra(e,t){t===null?he(Ia,Ia.current):he(Ia,t.pool)}function za(){var e=La();return e===null?null:{parent:Sa._currentValue,pool:e}}var Ba=Error(i(460)),Va=Error(i(474)),Ha=Error(i(542)),Ua={then:function(){}};function Wa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ga(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(dn,dn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ya(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(dn,dn);else{if(e=Xu,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ya(e),e}throw qa=t,Ba}}function Ka(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(qa=e,Ba):e}}var qa=null;function Ja(){if(qa===null)throw Error(i(459));var e=qa;return qa=null,e}function Ya(e){if(e===Ba||e===Ha)throw Error(i(483))}var Xa=null,Za=0;function Qa(e){var t=Za;return Za+=1,Xa===null&&(Xa=[]),Ga(Xa,e,t)}function $a(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function eo(e,t){throw t.$$typeof===O?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function to(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=wi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Oi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===A?(e=d(e,t,n.props.children,r,n.key),$a(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===F&&Ka(i)===t.type)?(t=a(t,n.props),$a(t,n),t.return=e,t):(t=Ei(n.type,n.key,n.props,null,e.mode,r),$a(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ai(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Di(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Oi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case k:return n=Ei(t.type,t.key,t.props,null,e.mode,n),$a(n,t),n.return=e,n;case ee:return t=Ai(t,e.mode,n),t.return=e,t;case F:return t=Ka(t),f(e,t,n)}if(R(t)||le(t))return t=Di(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Qa(t),n);if(t.$$typeof===N)return f(e,_a(e,t),n);eo(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case k:return n.key===i?l(e,t,n,r):null;case ee:return n.key===i?u(e,t,n,r):null;case F:return n=Ka(n),p(e,t,n,r)}if(R(n)||le(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Qa(n),r);if(n.$$typeof===N)return p(e,t,_a(e,n),r);eo(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case k:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case ee:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case F:return r=Ka(r),m(e,t,n,r,i)}if(R(r)||le(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Qa(r),i);if(r.$$typeof===N)return m(e,t,n,_a(t,r),i);eo(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),Yi&&Hi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return Yi&&Hi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),Yi&&Hi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),Yi&&Hi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return Yi&&Hi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),Yi&&Hi(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===A&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case k:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===A){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),$a(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===F&&Ka(l)===r.type){n(e,r.sibling),c=a(r,o.props),$a(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===A?(c=Di(o.props.children,e.mode,c,o.key),$a(c,o),c.return=e,e=c):(c=Ei(o.type,o.key,o.props,null,e.mode,c),$a(c,o),c.return=e,e=c)}return s(e);case ee:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Ai(o,e.mode,c),c.return=e,e=c}return s(e);case F:return o=Ka(o),_(e,r,o,c)}if(R(o))return h(e,r,o,c);if(le(o)){if(l=le(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,Qa(o),c);if(o.$$typeof===N)return _(e,r,_a(e,o),c);eo(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Oi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Za=0;var i=_(e,t,n,r);return Xa=null,i}catch(t){if(t===Ba||t===Ha)throw t;var a=Si(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var no=to(!0),ro=to(!1),io=!1;function ao(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function so(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function co(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Yu&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=yi(e),vi(e,null,n),t}return hi(e,r,t,n),yi(e)}function lo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}function uo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var fo=!1;function po(){if(fo){var e=ja;if(e!==null)throw e}}function mo(e,t,n,r){fo=!1;var i=e.updateQueue;io=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Qu&f)===f:(r&f)===f){f!==0&&f===Aa&&(fo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=D({},d,f);break a;case 2:io=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),od|=o,e.lanes=o,e.memoizedState=d}}function ho(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function go(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ho(n[e],t)}var _o=V(null),vo=V(0);function yo(e,t){e=id,he(vo,e),he(_o,t),id=e|t.baseLanes}function bo(){he(vo,id),he(_o,_o.current)}function xo(){id=vo.current,H(_o),H(vo)}var So=V(null),Co=null;function wo(e){var t=e.alternate;he(ko,ko.current&1),he(So,e),Co===null&&(t===null||_o.current!==null||t.memoizedState!==null)&&(Co=e)}function To(e){he(ko,ko.current),he(So,e),Co===null&&(Co=e)}function Eo(e){e.tag===22?(he(ko,ko.current),he(So,e),Co===null&&(Co=e)):Do()}function Do(){he(ko,ko.current),he(So,So.current)}function Oo(e){H(So),Co===e&&(Co=null),H(ko)}var ko=V(0);function Ao(e,t){he(So,So.current),he(ko,t)}function jo(e){H(ko),H(So),Co===e&&(Co=null)}function Mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||lm(n)||um(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var No=0,Po=null,Fo=null,Io=null,Lo=!1,Ro=!1,zo=!1,Bo=0,Vo=0,Ho=null,Uo=0;function Wo(){throw Error(i(321))}function Go(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!jr(e[n],t[n]))return!1;return!0}function Ko(e,t,n,r,i,a){return No=a,Po=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?cc:lc,zo=!1,a=n(r,i),zo=!1,Ro&&(a=Jo(t,n,r,i)),qo(e),a}function qo(e){z.H=sc;var t=Fo!==null&&Fo.next!==null;if(No=0,Io=Fo=Po=null,Lo=!1,Vo=0,Ho=null,t)throw Error(i(300));e===null||Ec||(e=e.dependencies,e!==null&&ma(e)&&(Ec=!0))}function Jo(e,t,n,r){Po=e;var a=0;do{if(Ro&&(Ho=null),Vo=0,Ro=!1,25<=a)throw Error(i(301));if(a+=1,Io=Fo=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}z.H=uc,o=t(n,r)}while(Ro);return o}function Yo(){var e=z.H,t=e.useState()[0];return t=typeof t.then==`function`?ns(t):t,e=e.useState()[0],(Fo===null?null:Fo.memoizedState)!==e&&(Po.flags|=1024),t}function Xo(){var e=Bo!==0;return Bo=0,e}function Zo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Qo(e){if(Lo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Lo=!1}No=0,Io=Fo=Po=null,Ro=!1,Vo=Bo=0,Ho=null}function $o(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Io===null?Po.memoizedState=Io=e:Io=Io.next=e,Io}function es(){if(Fo===null){var e=Po.alternate;e=e===null?null:e.memoizedState}else e=Fo.next;var t=Io===null?Po.memoizedState:Io.next;if(t!==null)Io=t,Fo=e;else{if(e===null)throw Po.alternate===null?Error(i(467)):Error(i(310));Fo=e,e={memoizedState:Fo.memoizedState,baseState:Fo.baseState,baseQueue:Fo.baseQueue,queue:Fo.queue,next:null},Io===null?Po.memoizedState=Io=e:Io=Io.next=e}return Io}function ts(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ns(e){var t=Vo;return Vo+=1,Ho===null&&(Ho=[]),e=Ga(Ho,e,t),t=Po,(Io===null?t.memoizedState:Io.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?cc:lc),e}function rs(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ns(e);if(e.$$typeof===se)return;if(e.$$typeof===N)return ga(e)}throw Error(i(438,String(e)))}function is(e){var t=null,n=Po.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=Po.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=ts(),Po.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=oe;return t.index++,n}function as(e,t){return typeof t==`function`?t(e):t}function os(e){return ss(es(),Fo,e)}function ss(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(No&f)===f:(Qu&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Aa&&(d=!0);else if((No&p)===p){u=u.next,p===Aa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,Po.lanes|=p,od|=p;f=u.action,zo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,Po.lanes|=f,od|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!jr(o,e.memoizedState)&&(Ec=!0,d&&(n=ja,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function cs(e){var t=es(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);jr(o,t.memoizedState)||(Ec=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function X(e,t,n){var r=Po,a=es(),o=Yi;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!jr((Fo||a).memoizedState,n);if(s&&(a.memoizedState=n,Ec=!0),a=a.queue,Ns(ds.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Io!==null&&!!(Io.memoizedState.tag&1),Os(e?9:8,{destroy:void 0},us.bind(null,r,a,n,t),null),e){if(r.flags|=2048,Xu===null)throw Error(i(349));o||No&127||ls(r,t,n)}return n}function ls(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Po.updateQueue,t===null?(t=ts(),Po.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function us(e,t,n,r){t.value=n,t.getSnapshot=r,fs(t)&&ps(e)}function ds(e,t,n){return n(function(){fs(t)&&ps(e)})}function fs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!jr(e,n)}catch{return!0}}function ps(e){var t=_i(e,2);t!==null&&Pd(t,e,2)}function ms(e){var t=$o();if(typeof e==`function`){var n=e;if(e=n(),zo){W(!0);try{n()}finally{W(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:e},t}function hs(e,t,n,r){return e.baseState=n,ss(e,Fo,typeof r==`function`?r:as)}function gs(e,t,n,r,a){if(ic(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};z.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,_s(t,o)):(o.next=n.next,t.pending=n.next=o)}}function _s(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=z.T,o={};o.types=a===null?null:a.types,z.T=o;try{var s=n(i,r),c=z.S;c!==null&&c(o,s),vs(e,t,s)}catch(n){bs(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),z.T=a}}else try{a=n(i,r),vs(e,t,a)}catch(n){bs(e,t,n)}}function vs(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ys(e,t,n)},function(n){return bs(e,t,n)}):ys(e,t,n)}function ys(e,t,n){t.status=`fulfilled`,t.value=n,xs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,_s(e,n)))}function bs(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,xs(t),t=t.next;while(t!==r)}e.action=null}function xs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ss(e,t){return t}function Cs(e,t){if(Yi){var n=Xu.formState;if(n!==null){a:{var r=Po;if(Yi){if(Ji){b:{for(var i=Ji,a=Zi;i.nodeType!==8;)if(!a||(i=fm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ji=fm(i.nextSibling),r=i.data===`F!`;break a}}$i(r)}r=!1}r&&(t=n[0])}}return n=$o(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ss,lastRenderedState:t},n.queue=r,n=tc.bind(null,Po,r),r.dispatch=n,r=ms(!1),a=rc.bind(null,Po,!1,r.queue),r=$o(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=gs.bind(null,Po,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ws(e){return Ts(es(),Fo,e)}function Ts(e,t,n){if(t=ss(e,t,Ss)[0],e=os(as)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ns(t)}catch(e){throw e===Ba?Ha:e}else r=t;t=es();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(Po.flags|=2048,Os(9,{destroy:void 0},Es.bind(null,i,n),null)),[r,a,e]}function Es(e,t){e.action=t}function Ds(e){var t=es(),n=Fo;if(n!==null)return Ts(t,n,e);es(),t=t.memoizedState,n=es();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Os(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=Po.updateQueue,t===null&&(t=ts(),Po.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ks(){return es().memoizedState}function As(e,t,n,r){var i=$o();Po.flags|=e,i.memoizedState=Os(1|t,{destroy:void 0},n,r===void 0?null:r)}function js(e,t,n,r){var i=es();r=r===void 0?null:r;var a=i.memoizedState.inst;Fo!==null&&r!==null&&Go(r,Fo.memoizedState.deps)?i.memoizedState=Os(t,a,n,r):(Po.flags|=e,i.memoizedState=Os(1|t,a,n,r))}function Ms(e,t){As(8390656,8,e,t)}function Ns(e,t){js(2048,8,e,t)}function Ps(e){Po.flags|=4;var t=Po.updateQueue;if(t===null)t=ts(),Po.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Fs(e){var t=es().memoizedState;return Ps({ref:t,nextImpl:e}),function(){if(Yu&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Is(e,t){return js(4,2,e,t)}function Ls(e,t){return js(4,4,e,t)}function Rs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zs(e,t,n){n=n==null?null:n.concat([e]),js(4,4,Rs.bind(null,t,e),n)}function Bs(){}function Vs(e,t){var n=es();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Go(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hs(e,t){var n=es();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Go(t,r[1]))return r[0];if(r=e(),zo){W(!0);try{e()}finally{W(!1)}}return n.memoizedState=[r,t],r}function Us(e,t,n){return n===void 0||No&1073741824&&!(Qu&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),Po.lanes|=e,od|=e,n)}function Ws(e,t,n,r){return jr(n,t)?n:_o.current===null?!(No&106)||No&1073741824&&!(Qu&261930)?(Ec=!0,e.memoizedState=n):(e=Md(),Po.lanes|=e,od|=e,t):(e=Us(e,n,r),jr(e,t)||(Ec=!0),e)}function Gs(e,t,n,r,i){var a=B.p;B.p=a!==0&&8>a?a:8;var o=z.T,s={};s.types=o===null?null:o.types,z.T=s,rc(e,!1,t,n);try{var c=i(),l=z.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?nc(e,t,Pa(c,r),jd(e)):nc(e,t,r,jd(e))}catch(n){nc(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{B.p=a,o!==null&&s.types!==null&&(o.types=s.types),z.T=o}}function Ks(){}function qs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Js(e).queue;Gs(e,a,t,fe,n===null?Ks:function(){return Ys(e),n(r)})}function Js(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:fe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ys(e){var t=Js(e);t.next===null&&(t=e.alternate.memoizedState),nc(e,t.next.queue,{},jd())}function Xs(){return ga(uh)}function Zs(){return es().memoizedState}function Qs(){return es().memoizedState}function $s(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=so(n);var r=co(t,e,n);r!==null&&(Pd(r,t,n),lo(r,t,n)),t={cache:Ca()},e.payload=t;return}t=t.return}}function ec(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ic(e)?ac(t,n):(n=gi(e,t,n,r),n!==null&&(Pd(n,e,r),oc(n,t,r)))}function tc(e,t,n){nc(e,t,n,jd())}function nc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ic(e))ac(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,jr(s,o))return hi(e,t,i,0),Xu===null&&mi(),!1}catch{}if(n=gi(e,t,i,r),n!==null)return Pd(n,e,r),oc(n,t,r),!0}return!1}function rc(e,t,n,r){if(r={lane:2,revertLane:Ff(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ic(e)){if(t)throw Error(i(479))}else t=gi(e,n,r,2),t!==null&&Pd(t,e,2)}function ic(e){var t=e.alternate;return e===Po||t!==null&&t===Po}function ac(e,t){Ro=Lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function oc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ct(e,n)}}var sc={readContext:ga,use:rs,useCallback:Wo,useContext:Wo,useEffect:Wo,useImperativeHandle:Wo,useLayoutEffect:Wo,useInsertionEffect:Wo,useMemo:Wo,useReducer:Wo,useRef:Wo,useState:Wo,useDebugValue:Wo,useDeferredValue:Wo,useTransition:Wo,useSyncExternalStore:Wo,useId:Wo,useHostTransitionStatus:Wo,useFormState:Wo,useActionState:Wo,useOptimistic:Wo,useMemoCache:Wo,useCacheRefresh:Wo,useEffectEvent:Wo},cc={readContext:ga,use:rs,useCallback:function(e,t){return $o().memoizedState=[e,t===void 0?null:t],e},useContext:ga,useEffect:Ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),As(4194308,4,Rs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return As(4194308,4,e,t)},useInsertionEffect:function(e,t){As(4,2,e,t)},useMemo:function(e,t){var n=$o();t=t===void 0?null:t;var r=e();if(zo){W(!0);try{e()}finally{W(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=$o();if(n!==void 0){var i=n(t);if(zo){W(!0);try{n(t)}finally{W(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ec.bind(null,Po,e),[r.memoizedState,e]},useRef:function(e){var t=$o();return e={current:e},t.memoizedState=e},useState:function(e){e=ms(e);var t=e.queue,n=tc.bind(null,Po,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Bs,useDeferredValue:function(e,t){return Us($o(),e,t)},useTransition:function(){var e=ms(!1);return e=Gs.bind(null,Po,e.queue,!0,!1),$o().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Po,a=$o();if(Yi){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Xu===null)throw Error(i(349));Qu&127||ls(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Ms(ds.bind(null,r,o,e),[e]),r.flags|=2048,Os(9,{destroy:void 0},us.bind(null,r,o,n,t),null),n},useId:function(){var e=$o(),t=Xu.identifierPrefix;if(Yi){var n=Vi,r=Bi;n=(r&~(1<<32-Ke(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Bo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Uo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Xs,useFormState:Cs,useActionState:Cs,useOptimistic:function(e){var t=$o();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=rc.bind(null,Po,!0,n),n.dispatch=t,[e,t]},useMemoCache:is,useCacheRefresh:function(){return $o().memoizedState=$s.bind(null,Po)},useEffectEvent:function(e){var t=$o(),n={impl:e};return t.memoizedState=n,function(){if(Yu&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},lc={readContext:ga,use:rs,useCallback:Vs,useContext:ga,useEffect:Ns,useImperativeHandle:zs,useInsertionEffect:Is,useLayoutEffect:Ls,useMemo:Hs,useReducer:os,useRef:ks,useState:function(){return os(as)},useDebugValue:Bs,useDeferredValue:function(e,t){return Ws(es(),Fo.memoizedState,e,t)},useTransition:function(){var e=os(as)[0],t=es().memoizedState;return[typeof e==`boolean`?e:ns(e),t]},useSyncExternalStore:X,useId:Zs,useHostTransitionStatus:Xs,useFormState:ws,useActionState:ws,useOptimistic:function(e,t){return hs(es(),Fo,e,t)},useMemoCache:is,useCacheRefresh:Qs,useEffectEvent:Fs},uc={readContext:ga,use:rs,useCallback:Vs,useContext:ga,useEffect:Ns,useImperativeHandle:zs,useInsertionEffect:Is,useLayoutEffect:Ls,useMemo:Hs,useReducer:cs,useRef:ks,useState:function(){return cs(as)},useDebugValue:Bs,useDeferredValue:function(e,t){var n=es();return Fo===null?Us(n,e,t):Ws(n,Fo.memoizedState,e,t)},useTransition:function(){var e=cs(as)[0],t=es().memoizedState;return[typeof e==`boolean`?e:ns(e),t]},useSyncExternalStore:X,useId:Zs,useHostTransitionStatus:Xs,useFormState:Ds,useActionState:Ds,useOptimistic:function(e,t){var n=es();return Fo===null?(n.baseState=e,[e,n.queue.dispatch]):hs(n,Fo,e,t)},useMemoCache:is,useCacheRefresh:Qs,useEffectEvent:Fs};function dc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var fc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=so(r);i.payload=t,n!=null&&(i.callback=n),t=co(e,i,r),t!==null&&(Pd(t,e,r),lo(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=so(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=co(e,i,r),t!==null&&(Pd(t,e,r),lo(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=so(n);r.tag=2,t!=null&&(r.callback=t),t=co(e,r,n),t!==null&&(Pd(t,e,n),lo(t,e,n))}};function pc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Mr(n,r)||!Mr(i,a):!0}function mc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fc.enqueueReplaceState(t,t.state,null)}function hc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=D({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function gc(e){ui(e)}function _c(e){console.error(e)}function vc(e){ui(e)}function yc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function bc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function xc(e,t,n){return n=so(n),n.tag=3,n.payload={element:null},n.callback=function(){yc(e,t)},n}function Sc(e){return e=so(e),e.tag=3,e}function Cc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){bc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){bc(t,n,r),typeof i!=`function`&&(vd===null?vd=new Set([this]):vd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function wc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&pa(t,n,a,!0),n=So.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Co===null?Kd():n.alternate===null&&ad===0&&(ad=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ua?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),hf(e,r,a)),!1;case 22:return n.flags|=65536,r===Ua?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),hf(e,r,a)),!1}throw Error(i(435,n.tag))}return hf(e,r,a),Kd(),!1}if(Yi)return t=So.current,t===null?(r!==Qi&&(t=Error(i(423),{cause:r}),aa(Mi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Mi(r,n),a=xc(e.stateNode,r,a),uo(e,a),ad!==4&&(ad=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Qi&&(e=Error(i(422),{cause:r}),aa(Mi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Mi(o,n),dd===null?dd=[o]:dd.push(o),ad!==4&&(ad=2),t===null)return!0;r=Mi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=xc(n.stateNode,r,e),uo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(vd===null||!vd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Sc(a),Cc(a,e,n,r),uo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Tc=Error(i(461)),Ec=!1;function Dc(e,t,n,r){t.child=e===null?ro(t,null,n,r):no(t,e.child,n,r)}function Oc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ha(t),r=Ko(e,t,n,o,a,i),s=Xo(),e!==null&&!Ec?(Zo(e,t,i),nl(e,t,i)):(Yi&&s&&Wi(t),t.flags|=1,Dc(e,t,r,i),t.child)}function kc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Ci(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Ac(e,t,a,r,i)):(e=Ei(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!rl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Mr:n,n(o,r)&&e.ref===t.ref)return nl(e,t,i)}return t.flags|=1,e=wi(a,r),e.ref=t.ref,e.return=t,t.child=e}function Ac(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Mr(a,r)&&e.ref===t.ref){if(Ec=!1,t.pendingProps=r=a,rl(e,i))e.flags&131072&&(Ec=!0);else return t.lanes=e.lanes,nl(e,t,i)}}return Rc(e,t,n,r,i)}function jc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Nc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ra(t,a===null?null:a.cachePool),a===null?bo():yo(t,a),Eo(t);else return r=t.lanes=536870912,Nc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ra(t,null),bo(),Do()):(Ra(t,a.cachePool),yo(t,a),Do(),t.memoizedState=null);return Dc(e,t,i,n),t.child}function Mc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Nc(e,t,n,r,i){var a=La();return a=a===null?null:{parent:Sa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ra(t,null),bo(),Eo(t),e!==null&&pa(e,t,r,!0),t.childLanes=i,null}function Pc(e,t){return t=qc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Fc(e,t,n){return no(t,e.child,null,n),e=Pc(t,t.pendingProps),e.flags|=2,Oo(t),t.memoizedState=null,e}function Ic(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(Yi){if(r.mode===`hidden`)return e=Pc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Mc(null,e);if(To(t),(e=Ji)?(e=cm(e,Zi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:zi===null?null:{id:Bi,overflow:Vi},retryLane:536870912,hydrationErrors:null},n=ki(e),n.return=t,t.child=n,qi=t,Ji=null)):e=null,e===null)throw $i(t);return t.lanes=536870912,null}return Pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(To(t),a){if(t.flags&256)t.flags&=-257,t=Fc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Ec||pa(e,t,n,!1),a=(n&e.childLanes)!==0,Ec||a){if(_o.current===null){if(r=Xu,r!==null&&(s=lt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,_i(e,s),Pd(r,e,s),Tc;Kd()}t=Fc(e,t,n)}else e=o.treeContext,Ji=fm(s.nextSibling),qi=t,Yi=!0,Xi=null,Zi=!1,e!==null&&Ki(t,e),t=Pc(t,r),t.flags|=134221824;return t}return e=wi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Lc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Rc(e,t,n,r,i){return ha(t),n=Ko(e,t,n,r,void 0,i),r=Xo(),e!==null&&!Ec?(Zo(e,t,i),nl(e,t,i)):(Yi&&r&&Wi(t),t.flags|=1,Dc(e,t,n,i),t.child)}function zc(e,t,n,r,i,a){return ha(t),t.updateQueue=null,n=Jo(t,r,n,i),qo(e),r=Xo(),e!==null&&!Ec?(Zo(e,t,a),nl(e,t,a)):(Yi&&r&&Wi(t),t.flags|=1,Dc(e,t,n,a),t.child)}function Bc(e,t,n,r,i){if(ha(t),t.stateNode===null){var a=bi,o=n.contextType;typeof o==`object`&&o&&(a=ga(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=fc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},ao(t),o=n.contextType,a.context=typeof o==`object`&&o?ga(o):bi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(dc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&fc.enqueueReplaceState(a,a.state,null),mo(t,r,a,i),po(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=hc(n,s);a.props=c;var l=a.context,u=n.contextType;o=bi,typeof u==`object`&&u&&(o=ga(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&mc(t,a,r,o),io=!1;var f=t.memoizedState;a.state=f,mo(t,r,a,i),po(),l=t.memoizedState,s||f!==l||io?(typeof d==`function`&&(dc(t,n,d,r),l=t.memoizedState),(c=io||pc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,oo(e,t),o=t.memoizedProps,u=hc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=bi,typeof l==`object`&&l&&(c=ga(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&mc(t,a,r,c),io=!1,f=t.memoizedState,a.state=f,mo(t,r,a,i),po();var p=t.memoizedState;o!==d||f!==p||io||e!==null&&e.dependencies!==null&&ma(e.dependencies)?(typeof s==`function`&&(dc(t,n,s,r),p=t.memoizedState),(u=io||pc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ma(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Lc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=no(t,e.child,null,i),t.child=no(t,null,n,i)):Dc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=nl(e,t,i),e}function Vc(e,t,n,r){return ra(),t.flags|=256,Dc(e,t,n,r),t.child}var Hc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uc(e){return{baseLanes:e,cachePool:za()}}function Wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ld),e}function Gc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(ko.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(Yi){if(i?wo(t):Do(),(e=Ji)?(e=cm(e,Zi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:zi===null?null:{id:Bi,overflow:Vi},retryLane:536870912,hydrationErrors:null},n=ki(e),n.return=t,t.child=n,qi=t,Ji=null)):e=null,e===null)throw $i(t);return t.lanes=um(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Do(),i=t.mode,a=qc({mode:`hidden`,children:a},i),r=Di(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Uc(n),r.childLanes=Wc(e,o,n),t.memoizedState=Hc,Mc(null,r)):(wo(t),Kc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return Yc(e,t,a,o,r,c,s,n)}return i?(Do(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=wi(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Di(i,a,n,null),i.flags|=2):i=wi(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Mc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Uc(n):(a=i.cachePool,a===null?a=za():(s=Sa._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Wc(e,o,n),t.memoizedState=Hc,Mc(e.child,r)):(wo(t),n=e.child,e=n.sibling,n=wi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Kc(e,t){return t=qc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function qc(e,t){return e=Si(22,e,null,t),e.lanes=0,e}function Jc(e,t,n){return no(t,e.child,null,n),e=Kc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yc(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(wo(t),t.flags&=-257,Jc(e,t,c)):t.memoizedState===null?(Do(),o=a.fallback,s=t.mode,a=qc({mode:`visible`,children:a.children},s),o=Di(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,no(t,e.child,null,c),a=t.child,a.memoizedState=Uc(c),a.childLanes=Wc(e,r,c),t.memoizedState=Hc,Mc(null,a)):(Do(),t.child=e.child,t.flags|=128,null);if(wo(t),um(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,aa({value:a,source:null,stack:null})),Jc(e,t,c)}if(Ec||pa(e,t,c,!1),r=(c&e.childLanes)!==0,Ec||r){if(_o.current!==null)return Jc(e,t,c);if(r=Xu,r!==null&&(a=lt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,_i(e,a),Pd(r,e,a),Tc;return lm(o)||Kd(),Jc(e,t,c)}return lm(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,Ji=fm(o.nextSibling),qi=t,Yi=!0,Xi=null,Zi=!1,e!==null&&Ki(t,e),t=Kc(t,a.children),t.flags|=134221824,t)}function Xc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),da(e.return,t,n)}function Zc(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Mo(n)===null&&(t=e),e=e.sibling}return t}function Qc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function $c(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function el(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=ko.current;if(t.flags&128)return Ao(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Ao(t,o),i===`backwards`&&e!==null?($c(e),Dc(e,t,r,n),$c(e)):Dc(e,t,r,n),r=Yi?Ii:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xc(e,n,t);else if(e.tag===19)Xc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=Zc(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,$c(t)),Qc(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Qc(t,!0,n,null,a,r);break;case`together`:Qc(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=Zc(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Qc(t,!1,i,n,a,r)}return t.child}function tl(e,t,n){var r=t.pendingProps;return la(t,t.type,r.value),Dc(e,t,r.children,n),t.child}function nl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),od|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(pa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=wi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function rl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ma(e)))}function il(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),la(t,Sa,e.memoizedState.cache),ra();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:la(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,To(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return wo(t),t.flags|=128,null;r=pa(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Gc(e,t,n):(wo(t),e=nl(e,t,n),e===null?null:e.sibling)}wo(t);break;case 19:if(t.flags&128)return el(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(pa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return el(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ao(t,ko.current),r)break;return null;case 22:return t.lanes=0,jc(e,t,n,t.pendingProps);case 24:la(t,Sa,e.memoizedState.cache)}return nl(e,t,n)}function al(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Ec=!0;else{if(!rl(e,n)&&!(t.flags&128))return Ec=!1,il(e,t,n);Ec=!!(e.flags&131072)}}else Ec=!1,Yi&&t.flags&1048576&&Ui(t,Ii,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ka(t.elementType),t.type=e,typeof e==`function`)Ci(e)?(r=hc(e,r),t.tag=1,t=Bc(null,t,e,r,n)):(t.tag=0,t=Rc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===ne){t.tag=11,t=Oc(null,t,e,r,n);break a}if(a===ie){t.tag=14,t=kc(null,t,e,r,n);break a}if(a===N){t.tag=10,t.type=e,t=tl(null,t,n);break a}}throw t=de(e)||e,Error(i(306,t,``))}}return t;case 0:return Rc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=hc(r,t.pendingProps),Bc(e,t,r,a,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,oo(e,t),mo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,la(t,Sa,r),r!==o.cache&&fa(t,[Sa],n,!0),po(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Vc(e,t,r,n);break a}if(r!==a){a=Mi(Error(i(424)),t),aa(a),t=Vc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ji=fm(e.firstChild),qi=t,Yi=!0,Xi=null,Zi=!0,n=ro(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(ra(),r===a){t=nl(e,t,n);break a}Dc(e,t,r,n)}t=t.child}return t;case 26:return Lc(e,t),e===null?(n=Im(t.type,null,t.pendingProps,null))?t.memoizedState=n:Yi||(t.stateNode=hp(t.type,t.pendingProps,_e.current,t)):t.memoizedState=Im(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&Yi&&(r=t.stateNode=vm(t.type,t.pendingProps,_e.current),qi=t,Zi=!0,a=Ji,Tp(t.type)?(pm=a,Ji=fm(r.firstChild)):Ji=a),Dc(e,t,t.pendingProps.children,n),Lc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Yi&&((a=r=Ji)&&(r=om(r,t.type,t.pendingProps,Zi),r===null?a=!1:(t.stateNode=r,qi=t,Ji=fm(r.firstChild),Zi=!1,a=!0)),a||$i(t)),xe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,gp(a,o)?r=null:s!==null&&gp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Ko(e,t,Yo,null,null,n),uh._currentValue=a),Lc(e,t),Dc(e,t,r,n),t.child;case 6:return e===null&&Yi&&((e=n=Ji)&&(n=sm(n,t.pendingProps,Zi),n===null?e=!1:(t.stateNode=n,qi=t,Ji=null,e=!0)),e||$i(t)),null;case 13:return Gc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=no(t,null,r,n):Dc(e,t,r,n),t.child;case 11:return Oc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Lc(e,t),Dc(e,t,r,n),t.child;case 8:return Dc(e,t,t.pendingProps.children,n),t.child;case 12:return Dc(e,t,t.pendingProps.children,n),t.child;case 10:return tl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,ha(t),a=ga(a),r=r(a),t.flags|=1,Dc(e,t,r,n),t.child;case 14:return kc(e,t,t.type,t.pendingProps,n);case 15:return Ac(e,t,t.type,t.pendingProps,n);case 19:return el(e,t,n);case 31:return Ic(e,t,n);case 22:return jc(e,t,n,t.pendingProps);case 24:return ha(t),r=ga(Sa),e===null?(a=La(),a===null&&(a=Xu,o=Ca(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},ao(t),la(t,Sa,a)):((e.lanes&n)!==0&&(oo(e,t),mo(t,null,null,n),po()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,la(t,Sa,r),r!==a.cache&&fa(t,[Sa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),la(t,Sa,r))),Dc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:Yi&&Wi(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Lc(e,t),Dc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function ol(e){e.flags|=4}function sl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Zm(t,r):Zm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw qa=Ua,Va}}else e.flags&=-16777217}function cl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Qm(t)){if(Ud())e.flags|=8192;else throw qa=Ua,Va}}function ll(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:rt(),e.lanes|=t,ud|=t)}function ul(e,t){if(!Yi)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function dl(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fl(e,t,n){var r=t.pendingProps;switch(Gi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dl(t),null;case 1:return dl(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ua(Sa),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(na(t)?ol(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ia())),dl(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(ol(t),o===null?(dl(t),sl(t,a,null,r,n)):(dl(t),cl(t,o))):o?o===e.memoizedState?(dl(t),t.flags&=-16777217):(ol(t),dl(t),cl(t,o)):(e=e.memoizedProps,e!==r&&ol(t),dl(t),sl(t,a,e,r,n)),null;case 27:if(Se(t),n=_e.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ol(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return dl(t),t.subtreeFlags&=-33554433,null}e=ge.current,na(t)?ea(t,e):(e=vm(a,r,n),t.stateNode=e,ol(t))}return dl(t),t.subtreeFlags&=-33554433,null;case 5:if(Se(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ol(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return dl(t),t.subtreeFlags&=-33554433,null}if(o=ge.current,na(t))ea(t,o);else{var s=fp(_e.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ht]=t,o[gt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(ap(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&ol(t)}}return dl(t),t.subtreeFlags&=-33554433,sl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&ol(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=_e.current,na(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=qi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ht]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||np(e.nodeValue,n)),e||$i(t,!0)}else e=fp(e).createTextNode(r),e[ht]=t,t.stateNode=e}return dl(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=na(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ht]=t}else ra(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dl(t),e=!1}else n=ia(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Oo(t),t):(Oo(t),null);if(t.flags&128)throw Error(i(558))}return dl(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=na(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ht]=t}else ra(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dl(t),a=!1}else a=ia(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Oo(t),t):(Oo(t),null)}return Oo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ll(t,t.updateQueue),dl(t),null);case 4:return be(),e===null&&Kf(t.stateNode.containerInfo),t.flags|=67108864,dl(t),null;case 10:return ua(t.type),dl(t),null;case 19:if(jo(t),r=t.memoizedState,r===null)return dl(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)ul(r,!1);else{if(ad!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Mo(e),o!==null){for(t.flags|=128,ul(r,!1),e=o.updateQueue,t.updateQueue=e,ll(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ti(n,e),n=n.sibling;return Ao(t,ko.current&1|2),Yi&&Hi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Fe()>gd&&(t.flags|=128,a=!0,ul(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Mo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,ll(t,e),ul(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!Yi)return dl(t),null}else 2*Fe()-r.renderingStartTime>gd&&n!==536870912&&(t.flags|=128,a=!0,ul(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Fe(),e.sibling=null,o=ko.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||Yi?Ao(t,o):(n=o,he(So,t),he(ko,n),Co===null&&(Co=t)),Yi&&Hi(t,r.treeForkCount),e}return dl(t),null;case 22:case 23:return Oo(t),xo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(dl(t),t.subtreeFlags&6&&(t.flags|=8192)):dl(t),n=t.updateQueue,n!==null&&ll(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&H(Ia),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ua(Sa),dl(t),null;case 25:return null;case 30:return t.flags|=33554432,dl(t),null}throw Error(i(156,t.tag))}function pl(e,t){switch(Gi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ua(Sa),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(Oo(t),t.alternate===null)throw Error(i(340));ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Oo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return jo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return be(),null;case 10:return ua(t.type),null;case 22:case 23:return Oo(t),xo(),e!==null&&H(Ia),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ua(Sa),null;case 25:return null;default:return null}}function ml(e,t){switch(Gi(t),t.tag){case 3:ua(Sa),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&Oo(t);break;case 13:Oo(t);break;case 19:jo(t);break;case 10:ua(t.type);break;case 22:case 23:Oo(t),xo(),e!==null&&H(Ia);break;case 24:ua(Sa)}}function hl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){mf(t,t.return,e)}}function gl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){mf(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){mf(t,t.return,e)}}function _l(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{go(t,n)}catch(t){mf(e,e.return,t)}}}function vl(e,t,n){n.props=hc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){mf(e,t,n)}}function yl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=si(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Lp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Rp(e);h(e.child,!1,tm,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){mf(e,t,n)}}function bl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){mf(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){mf(e,t,n)}else n.current=null}}function xl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)rm(e.stateNode,t[n])}function Sl(e){for(var t=e.return;t!==null&&(Tl(t)&&rm(e.stateNode,t.stateNode),!wl(t));)t=t.return}function Cl(e){for(var t=e.return;t!==null&&(Tl(t)&&im(e.stateNode,t.stateNode),!wl(t));)t=t.return}function wl(e){return e.tag===5||e.tag===3||e.tag===27}function Tl(e){return e&&e.tag===7&&e.stateNode!==null}function El(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){mf(e,e.return,t)}}function Dl(e,t,n){try{var r=e.stateNode;sp(r,e.type,n,t),r[gt]=t}catch(t){mf(e,e.return,t)}}function Ol(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Tp(e.type)||e.tag===4}function kl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ol(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Tp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Al(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dn)),xl(e,r),Rt=!0;else if(i!==4&&(i===27&&(xl(e,r),r=null,Tp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Al(e,t,n,r),e=e.sibling;e!==null;)Al(e,t,n,r),e=e.sibling}function jl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),xl(e,r),Rt=!0;else if(i!==4&&(i===27&&(xl(e,r),r=null,Tp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(jl(e,t,n,r),e=e.sibling;e!==null;)jl(e,t,n,r),e=e.sibling}function Ml(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ap(t,r,n),t[ht]=e,t[gt]=n}catch(t){mf(e,e.return,t)}}var Nl=!1,Pl=null;function Fl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Nl=!0)}var Il=null;function Ll(){var e=Il;return Il=null,e}var Rl=0;function zl(e,t,n,r,i){return Rl=0,Bl(e.child,t,n,r,i)}function Bl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=jp(o);r.push(s),s.view&&(a=!0)}else a||jp(o).view&&(a=!0);Nl=!0,Op(o,Rl===0?t:t+`_`+Rl,n),Rl++}else e.tag===22&&e.memoizedState!==null||e.tag===30&&i||Bl(e.child,t,n,r,i)&&(a=!0);e=e.sibling}return a}function Vl(e,t){for(;e!==null;)e.tag===5?kp(e.stateNode,e.memoizedProps):e.tag===22&&e.memoizedState!==null||e.tag===30&&t||Vl(e.child,t),e=e.sibling}function Hl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Hl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=li(t.default,t.share),t!==`none`&&(zl(e,n,t,null,!1)||Vl(e.child,!1))}e=e.sibling}}function Ul(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=si(r,n),a=li(r.default,n.paired?r.share:r.enter);a===`none`?Hl(e):zl(e,i,a,null,!1)?(Hl(e),n.paired||t||Nd(e,r.onEnter)):Vl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Ul(e,t),e=e.sibling;else Hl(e)}function Wl(e){if(Pl!==null&&Pl.size!==0){var t=Pl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=li(n.default,n.share);if(a!==`none`&&(zl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):Vl(e.child,!1)),t.delete(r),t.size===0)break}}}Wl(e)}e=e.sibling}}}function Gl(e){if(e.tag===30){var t=e.memoizedProps,n=si(t,e.stateNode),r=Pl===null?void 0:Pl.get(n),i=li(t.default,r===void 0?t.exit:t.share);i!==`none`&&(zl(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Pl.delete(n),Nd(e,t.onShare)):Vl(e.child,!1)),Pl!==null&&Wl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Gl(e),e=e.sibling;else Pl!==null&&Wl(e)}function Kl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=si(t,e.stateNode);t=li(t.default,t.update),e.flags&=-5,t!==`none`&&zl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Kl(e);e=e.sibling}}function ql(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Vl(e.child,!1))}ql(e)}e=e.sibling}}function Jl(e){if(e.tag===30)e.stateNode.paired=null,Vl(e.child,!1),ql(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Jl(e),e=e.sibling;else ql(e)}function Yl(e){for(e=e.child;e!==null;)e.tag===30?Vl(e.child,!1):e.subtreeFlags&33554432&&Yl(e),e=e.sibling}function Xl(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Rl<a.length){var l=a[Rl],u=jp(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Op(c,Rl===0?n:n+`_`+Rl,i),s&&e.flags&4||(Il===null&&(Il=[]),Il.push(c,Rl===0?r:r+`_`+Rl,t.memoizedProps)),Rl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:Xl(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function Zl(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=si(n,r),a=li(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(Mp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Rl=0,i=Xl(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&Zl(e,t);e=e.sibling}}var Ql=!1,$l=!1,eu=!1,tu=!1,nu=typeof WeakSet==`function`?WeakSet:Set,ru=null,iu=!1,au=!1,ou=!1,su=!1;function cu(e,t,n){if(e=e.containerInfo,up=yh,e=Lr(e),Rr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(dp={focusedElem:e,selectionRange:r},yh=!1,n=(n&335544064)===n,ru=t,t=n?9270:1024;ru!==null;){if(e=ru,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Gl(r[a]);if(e.alternate===null&&e.flags&2)n&&Fl(e),lu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Gl(r),lu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Fl(e),lu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,ru=r):(n&&Kl(e),lu(n))}}Pl=null}function lu(e){for(;ru!==null;){var t=ru,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=hc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){mf(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)am(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:am(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=si(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=li(a.default,a.update),a!==`none`&&zl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,ru=r;break}ru=t.return}}function uu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Au(e,n),r&4&&hl(5,n);break;case 1:if(Au(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){mf(n,n.return,e)}else{var i=hc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){mf(n,n.return,e)}}}r&64&&_l(n),r&512&&yl(n,n.return);break;case 3:if(Au(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{go(e,t)}catch(e){mf(n,n.return,e)}}break;case 27:t===null&&r&4&&Ml(n);case 26:case 5:Au(e,n),t===null&&r&4&&El(n),r&512&&yl(n,n.return);break;case 12:Au(e,n);break;case 31:Au(e,n),r&4&&yu(e,n);break;case 13:Au(e,n),r&4&&bu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=vf.bind(null,n),dm(e,n))));break;case 22:if(r=n.memoizedState!==null||Ql,!r){var a=t!==null&&t.memoizedState!==null||$l;t=Ql,i=$l,Ql=r,($l=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Mu(e,n,r)):Au(e,n),Ql=t,$l=i}break;case 30:Au(e,n),r&512&&yl(n,n.return);break;case 7:r&512&&yl(n,n.return);default:Au(e,n)}}function du(e,t){for(e=e.child;e!==null;)fu(e,t),e=e.sibling}function fu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){mf(e,e.return,t)}pu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,Rt=!0}catch(t){mf(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?Dp(s,!0):Dp(e.stateNode,!1)}catch(t){mf(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&du(e,t);break;default:du(e,t)}}function pu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:fu(n,r);break a;case 22:n.memoizedState===null&&pu(n,r);break a;default:pu(n,r)}}e=e.sibling}}function mu(e){var t=e.alternate;t!==null&&(e.alternate=null,mu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&wt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var hu=null,gu=!1;function _u(e,t,n){for(n=n.child;n!==null;)vu(e,t,n),n=n.sibling}function vu(e,t,n){if(Ge&&typeof Ge.onCommitFiberUnmount==`function`)try{Ge.onCommitFiberUnmount(We,n)}catch{}switch(n.tag){case 26:$l||bl(n,t),_u(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!$l&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:$l||bl(n,t),Cl(n);var r=hu,i=gu;Tp(n.type)&&(hu=n.stateNode,gu=!1),_u(e,t,n),ym(n.stateNode,n.type,n.memoizedProps),hu=r,gu=i;break;case 5:$l||bl(n,t),Cl(n);case 6:if(n.tag===6&&Cl(n),r=hu,i=gu,hu=null,_u(e,t,n),hu=r,gu=i,hu!==null){if(gu)try{(hu.nodeType===9?hu.body:hu.nodeName===`HTML`?hu.ownerDocument.body:hu).removeChild(n.stateNode),Rt=!0}catch(e){mf(n,t,e)}else try{hu.removeChild(n.stateNode),Rt=!0}catch(e){mf(n,t,e)}}break;case 18:hu!==null&&(gu?(e=hu,Ep(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Gh(e)):Ep(hu,n.stateNode));break;case 4:r=hu,i=gu,hu=n.stateNode.containerInfo,gu=!0,_u(e,t,n),hu=r,gu=i;break;case 0:case 11:case 14:case 15:gl(2,n,t),$l||gl(4,n,t),_u(e,t,n);break;case 1:$l||(bl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&vl(n,t,r)),_u(e,t,n);break;case 21:_u(e,t,n);break;case 22:$l=(r=$l)||n.memoizedState!==null,_u(e,t,n),$l=r;break;case 30:bl(n,t),_u(e,t,n);break;case 7:$l||bl(n,t),_u(e,t,n);break;default:_u(e,t,n)}}function yu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Gh(e)}catch(e){mf(t,t.return,e)}}}function bu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Gh(e)}catch(e){mf(t,t.return,e)}}function xu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nu),t;default:throw Error(i(435,e.tag))}}function Su(e,t){var n=xu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=yf.bind(null,e,t);t.then(r,r)}})}function Cu(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Tp(l.type)){hu=l.stateNode,gu=!1;break a}break;case 5:hu=l.stateNode,gu=!1;break a;case 3:case 4:hu=l.stateNode.containerInfo,gu=!0;break a}l=l.return}if(hu===null)throw Error(i(160));vu(s,c,o),hu=null,gu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Tu(t,e,n),t=t.sibling}var wu=null;function Tu(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Cu(t,e,n),Eu(e),a&4&&(gl(3,e,e.return),hl(3,e),gl(5,e,e.return));break;case 1:Cu(t,e,n),Eu(e),a&512&&($l||r===null||bl(r,r.return)),a&64&&Ql&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=wu,Cu(t,e,n),Eu(e),a&512&&($l||r===null||bl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(Ql)e.stateNode=hp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[St]||r[ht]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),ap(r,t,n),r[ht]=e,K(r),t=r;break a;case`link`:if(o=Jm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),ap(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Jm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),ap(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[ht]=e,K(r),t=r}e.stateNode=t}}else Ql||Ym(o,e.type,e.stateNode)}else e.stateNode=Um(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Dl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||$l||t.parentNode.removeChild(t)):a.count--,n===null?Ql||Ym(o,e.type,e.stateNode):Um(o,n,e.memoizedProps))}break;case 27:Cu(t,e,n),Eu(e),a&512&&($l||r===null||bl(r,r.return)),r!==null&&a&4&&Dl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=eu,eu=!1,Cu(t,e,n),eu=o,Eu(e),a&512&&($l||r===null||bl(r,r.return)),e.flags&32){t=e.stateNode;try{nn(t,``),Rt=!0}catch(t){mf(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Dl(e,t,r===null?t:r.memoizedProps)),a&1024&&(tu=!0);break;case 6:if(Cu(t,e,n),Eu(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Rt=!0}catch(t){mf(e,e.return,t)}}break;case 3:if(Rt=!1,qm=null,o=wu,wu=Cm(t.containerInfo),Cu(t,e,n),wu=o,Eu(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Gh(t.containerInfo)}catch(t){mf(e,e.return,t)}tu&&(tu=!1,Du(e)),Rt=!1;break;case 4:a=eu,eu=Ql,r=zt(),o=wu,wu=Cm(e.stateNode.containerInfo),Cu(t,e,n),Eu(e),wu=o,Rt&&au&&(ou=!0),Rt=r,eu=a;break;case 12:Cu(t,e,n),Eu(e);break;case 31:Cu(t,e,n),Eu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Su(e,t)));break;case 13:Cu(t,e,n),Eu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(md=Fe()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Su(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=Ql,l=$l,u=eu;Ql=c||o,eu=u||o,$l=l||s,Cu(t,e,n),$l=l,eu=u,Ql=c,Eu(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||Ql||$l||(t=s||$l,n=Ql,r=$l,Ql=o||Ql,$l=t,ju(e,2),Ql=n,$l=r),!o&&eu||du(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Su(e,n))));break;case 19:Cu(t,e,n),Eu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Su(e,t)));break;case 30:a&512&&($l||r===null||bl(r,r.return)),a=zt(),o=au,s=(n&335544064)===n,c=e.memoizedProps,au=s&&li(c.default,c.update)!==`none`,Cu(t,e,n),Eu(e),s&&r!==null&&Rt&&(e.flags|=4),au=o,Rt=a;break;case 21:break;case 7:a&512&&($l||r===null||bl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Cu(t,e,n),Eu(e)}}function Eu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Ol(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Tl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(wl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;jl(e,kl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(nn(l,``),n.flags&=-33),jl(e,kl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Al(e,kl(e),u,s);break;default:throw Error(i(161))}}catch(t){mf(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Du(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Du(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,yh=!0,t.reset(),yh=!1),e=e.sibling}}function Ou(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)ku(t,e),t=t.sibling;else Zl(t,!1)}function ku(e,t){var n=e.alternate;if(n===null)Ul(e,!1);else switch(e.tag){case 3:if(su=iu=!1,Ll(),Ou(t,e),!iu&&!ou){if(e=Il,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];kp(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),su=!0}Il=null;break;case 5:Ou(t,e);break;case 4:r=iu,iu=!1,Ou(t,e),iu&&(ou=!0),iu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Ou(t,e):Ul(e,!1));break;case 30:r=iu,i=Ll(),iu=!1,Ou(t,e),iu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=si(a,o),o=si(n.memoizedProps,o);var s=li(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Rl=0,t=Xl(e,n,t,o,s,a,!0),Rl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),Il=i):i!==null&&(i.push.apply(i,Il),Il=i),iu=e.flags&32?!0:r;break;default:Ou(t,e)}}function Au(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)uu(e,t.alternate,t),t=t.sibling}function ju(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:gl(4,n,n.return),ju(n,r);break;case 1:bl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&vl(n,n.return,i),ju(n,r);break;case 27:r&2&&ym(n.stateNode,n.type,n.memoizedProps);case 5:bl(n,n.return),n.tag!==5&&n.tag!==27||Cl(n),ju(n,r);break;case 6:Cl(n);break;case 26:bl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||$l||i.parentNode.removeChild(i),ju(n,r);break;case 22:n.memoizedState===null&&ju(n,r);break;case 30:bl(n,n.return),ju(n,r);break;case 7:bl(n,n.return);default:ju(n,r)}e=e.sibling}}function Mu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Mu(i,a,n),hl(4,a);break;case 1:if(Mu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){mf(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)ho(l[i],c)}catch(e){mf(r,r.return,e)}}s&&o&64&&_l(a),yl(a,a.return);break;case 27:n&2&&Ml(a);case 5:a.tag!==5&&a.tag!==27||Sl(a),Mu(i,a,n),s&&r===null&&o&4&&El(a),yl(a,a.return);break;case 6:Sl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||Ql||Ym(Cm(c.ownerDocument),a.type,c),Mu(i,a,n),s&&r===null&&o&4&&El(a),yl(a,a.return);break;case 12:Mu(i,a,n);break;case 31:Mu(i,a,n),s&&o&4&&yu(i,a);break;case 13:Mu(i,a,n),s&&o&4&&bu(i,a);break;case 22:a.memoizedState===null&&Mu(i,a,n),yl(a,a.return);break;case 30:Mu(i,a,n),yl(a,a.return);break;case 7:yl(a,a.return);default:Mu(i,a,n)}t=t.sibling}}function Nu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&wa(n))}function Pu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&wa(e))}function Fu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Iu(e,t,n,r),t=t.sibling;else i&&Yl(t)}function Iu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Jl(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Fu(e,t,n,r),a&2048&&hl(9,t);break;case 1:Fu(e,t,n,r);break;case 3:Fu(e,t,n,r),i&&su&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&wa(a)));break;case 12:if(a&2048){Fu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){mf(t,t.return,e)}}else Fu(e,t,n,r);break;case 31:Fu(e,t,n,r);break;case 13:Fu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&Jl(t),o._visibility&2?Fu(e,t,n,r):(o._visibility|=2,Lu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&Jl(s),o._visibility&2?Fu(e,t,n,r):Ru(e,t)),a&2048&&Nu(s,t);break;case 24:Fu(e,t,n,r),a&2048&&Pu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Vl(a.child,!0),Vl(t.child,!0))),Fu(e,t,n,r);break;default:Fu(e,t,n,r)}}function Lu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Lu(a,o,s,c,i),hl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Lu(a,o,s,c,i)):u._visibility&2?Lu(a,o,s,c,i):Ru(a,o),i&&l&2048&&Nu(o.alternate,o);break;case 24:Lu(a,o,s,c,i),i&&l&2048&&Pu(o.alternate,o);break;default:Lu(a,o,s,c,i)}t=t.sibling}}function Ru(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ru(n,r),i&2048&&Nu(r.alternate,r);break;case 24:Ru(n,r),i&2048&&Pu(r.alternate,r);break;default:Ru(n,r)}t=t.sibling}}var zu=8192;function Bu(e,t,n){if(e.subtreeFlags&zu)for(e=e.child;e!==null;)Vu(e,t,n),e=e.sibling}function Vu(e,t,n){switch(e.tag){case 26:Bu(e,t,n),e.flags&zu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&eh(n,e)):th(n,wu,e.memoizedState,e.memoizedProps));break;case 5:Bu(e,t,n),e.flags&zu&&(e=e.stateNode,(t&335544128)===t&&eh(n,e));break;case 3:case 4:var r=wu;wu=Cm(e.stateNode.containerInfo),Bu(e,t,n),wu=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=zu,zu=16777216,Bu(e,t,n),zu=r):Bu(e,t,n));break;case 30:if((e.flags&zu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Pl===null&&(Pl=new Map),Pl.set(r,i)}Bu(e,t,n);break;default:Bu(e,t,n)}}function Hu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Uu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ru=r,Ku(r,e)}Hu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wu(e),e=e.sibling}function Wu(e){switch(e.tag){case 0:case 11:case 15:Uu(e),e.flags&2048&&gl(9,e,e.return);break;case 3:Uu(e);break;case 12:Uu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gu(e)):Uu(e);break;default:Uu(e)}}function Gu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ru=r,Ku(r,e)}Hu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:gl(8,t,t.return),Gu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Gu(t));break;default:Gu(t)}e=e.sibling}}function Ku(e,t){for(;ru!==null;){var n=ru;switch(n.tag){case 0:case 11:case 15:gl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:wa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ru=r;else a:for(n=e;ru!==null;){r=ru;var i=r.sibling,a=r.return;if(mu(r),r===n){ru=null;break a}if(i!==null){i.return=a,ru=i;break a}ru=a}}}var qu={getCacheForType:function(e){var t=ga(Sa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ga(Sa).controller.signal}},Ju=typeof WeakMap==`function`?WeakMap:Map,Yu=0,Xu=null,Zu=null,Qu=0,$u=0,ed=null,td=!1,nd=!1,rd=!1,id=0,ad=0,od=0,sd=0,cd=0,ld=0,ud=0,dd=null,fd=null,pd=!1,md=0,hd=0,gd=1/0,_d=null,vd=null,yd=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return Yu&2&&Qu!==0?Qu&-Qu:z.T===null?ft():Ff()}function Md(){if(ld===0){if(!(Qu&536870912)||Yi){var e=G;G<<=1,!(G&3932160)&&(G=262144),ld=e}else ld=536870912}return e=So.current,e!==null&&(e.flags|=32),ld}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Lp(si(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===Xu&&($u===2||$u===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,Qu,ld,!1)),at(e,n),Yu&2&&e===Xu||(e===Xu&&(!(Yu&2)&&(sd|=n),ad===4&&Rd(e,Qu,ld,!1)),Df(e))}function Fd(e,t,n){if(Yu&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||et(e,t),a=r?Yd(e,t):qd(e,t,!0),o=r;do{if(a===0){nd&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Ld(n))a=qd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=dd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,s).flags|=256),s=qd(c,s,!1),s!==2&&s!==6){if(rd&&!l){c.errorRecoveryDisabledLanes|=o,sd|=o,a=4;break a}o=fd,fd=a,o!==null&&(fd===null?fd=o:fd.push.apply(fd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ld,!td);break a;case 2:fd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=md+300-Fe(),10<a)){if(Rd(r,t,ld,!td),$e(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=yp(Id.bind(null,r,n,fd,_d,pd,t,ld,sd,ud,td,o,`Throttled`,-0,0),a);break a}Id(r,n,fd,_d,pd,t,ld,sd,ud,td,o,null,-0,0)}break}}while(1);Df(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dn},Pl=null,Vu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=ah.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?md-Fe():(a&4194048)===a?hd-Fe():0,m=rh(d,m),m!==null)?(Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l)):nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!jr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=tt(e,t),t&=~cd,t&=~sd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ke(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&st(e,n,t)}function zd(){return Yu&6?!0:(Of(0,!1),!1)}function Bd(){if(Zu!==null){if($u===0)var e=Zu.return;else e=Zu,ca=sa=null,Qo(e),Xa=null,Za=0,e=Zu;for(;e!==null;)ml(e.alternate,e),e=e.return;Zu=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,bp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),Xu=e,Zu=n=wi(e.current,null),Qu=t,$u=0,ed=null,td=!1,nd=et(e,t),rd=!1,ud=ld=cd=sd=od=ad=0,fd=dd=null,pd=!1,id=tt(e,t),mi(),n}function Hd(e,t){Po=null,z.H=sc,t===Ba||t===Ha?(t=Ja(),$u=3):t===Va?(t=Ja(),$u=4):$u=t===Tc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,ed=t,Zu===null&&(ad=1,yc(e,Mi(t,e.current)))}function Ud(){var e=So.current;return e===null?!0:(Qu&4194048)===Qu?Co===null:(Qu&62914560)===Qu||Qu&536870912?e===Co:!1}function Wd(){var e=z.H;return z.H=sc,e===null?sc:e}function Gd(){var e=z.A;return z.A=qu,e}function Kd(){ad=4,td||(Qu&4194048)!==Qu&&So.current!==null||(nd=!0),!(od&134217727)&&!(sd&134217727)||Xu===null||Rd(Xu,Qu,ld,!1)}function qd(e,t,n){var r=Yu;Yu|=2;var i=Wd(),a=Gd();(Xu!==e||Qu!==t)&&(_d=null,Vd(e,t)),t=!1;var o=ad;a:do try{if($u!==0&&Zu!==null){var s=Zu,c=ed;switch($u){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:So.current===null&&(t=!0);var l=$u;if($u=0,ed=null,$d(e,s,c,l),n&&nd){o=0;break a}break;default:l=$u,$u=0,ed=null,$d(e,s,c,l)}}Jd(),o=ad;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,ca=sa=null,Yu=r,z.H=i,z.A=a,Zu===null&&(Xu=null,Qu=0,mi()),o}function Jd(){for(;Zu!==null;)Zd(Zu)}function Yd(e,t){var n=Yu;Yu|=2;var r=Wd(),a=Gd();Xu!==e||Qu!==t?(_d=null,gd=Fe()+500,Vd(e,t)):nd=et(e,t);a:do try{if($u!==0&&Zu!==null){t=Zu;var o=ed;b:switch($u){case 1:$u=0,ed=null,$d(e,t,o,1);break;case 2:case 9:if(Wa(o)){$u=0,ed=null,Qd(t);break}t=function(){$u!==2&&$u!==9||Xu!==e||($u=7),Df(e)},o.then(t,t);break a;case 3:$u=7;break a;case 4:$u=5;break a;case 7:Wa(o)?($u=0,ed=null,Qd(t)):($u=0,ed=null,$d(e,t,o,7));break;case 5:var s=null;switch(Zu.tag){case 26:s=Zu.memoizedState;case 5:case 27:var c=Zu;if(s?Qm(s):c.stateNode.complete){$u=0,ed=null;var l=c.sibling;if(l!==null)Zu=l;else{var u=c.return;u===null?Zu=null:(Zu=u,ef(u))}break b}}$u=0,ed=null,$d(e,t,o,5);break;case 6:$u=0,ed=null,$d(e,t,o,6);break;case 8:Bd(),ad=6;break a;default:throw Error(i(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return ca=sa=null,z.H=r,z.A=a,Yu=n,Zu===null?(Xu=null,Qu=0,mi(),ad):0}function Xd(){for(;Zu!==null&&!Ne();)Zd(Zu)}function Zd(e){var t=al(e.alternate,e,id);e.memoizedProps=e.pendingProps,t===null?ef(e):Zu=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=zc(n,t,t.pendingProps,t.type,void 0,Qu);break;case 11:t=zc(n,t,t.pendingProps,t.type.render,t.ref,Qu);break;case 5:Qo(t);var r=t;r===qi&&(Yi?(ta(r),r.tag===5&&r.stateNode!=null&&(Ji=r.stateNode)):(ta(r),Yi=!0));default:ml(n,t),t=Zu=Ti(t,id),t=al(n,t,id)}e.memoizedProps=e.pendingProps,t===null?ef(e):Zu=t}function $d(e,t,n,r){ca=sa=null,Qo(t),Xa=null,Za=0;var i=t.return;try{if(wc(e,i,t,n,Qu)){ad=1,yc(e,Mi(n,e.current)),Zu=null;return}}catch(t){if(i!==null)throw Zu=i,t;ad=1,yc(e,Mi(n,e.current)),Zu=null;return}t.flags&32768?(Yi||r===1?e=!0:nd||Qu&536870912?e=!1:(td=e=!0,(r===2||r===9||r===3||r===6)&&(r=So.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,td);return}e=t.return;var n=fl(t.alternate,t,id);if(n!==null){Zu=n;return}if(t=t.sibling,t!==null){Zu=t;return}Zu=t=e}while(t!==null);ad===0&&(ad=5)}function tf(e,t){do{var n=pl(e.alternate,e);if(n!==null){n.flags&=32767,Zu=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Zu=e;return}Zu=e=n}while(e!==null);ad=6,Zu=null}function nf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(yd!==0);if(Yu&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===Xu&&(Zu=Xu=null,Qu=0),xd=t,bd=e,Sd=n,wd=a,Td=r,rf(e,t,n,s,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=pi,ot(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=Da(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,bf(ze,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),Nl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=z.T,z.T=null,i=B.p,B.p=2,a=Yu,Yu|=4;try{cu(e,t,n)}finally{Yu=a,B.p=i,z.T=r}}yd=1,Nl?Ed=Fp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(yd!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){yd===3&&(yd=0,ku(xd,bd),yd=4)}function sf(){if(yd===1){yd=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=z.T,z.T=null;var i=B.p;B.p=2;var a=Yu;Yu|=4;try{au=ou=!1,Tu(t,e,n),n=dp;var o=Lr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ir(s.ownerDocument.documentElement,s)){if(c!==null&&Rr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Fr(s,h),v=Fr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}yh=!!up,dp=up=null}finally{Yu=a,B.p=i,z.T=r}}e.current=t,yd=2}}function cf(){if(yd===2){yd=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=z.T,z.T=null;var r=B.p;B.p=2;var i=Yu;Yu|=4;try{uu(e,t.alternate,t)}finally{Yu=i,B.p=r,z.T=n}}yd=3}}function lf(){if(yd===4||yd===3){yd=0;var e=Ed;Ed=null,Pe();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?yd=5:(yd=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(vd=null),dt(r),n=n.stateNode,Ge&&typeof Ge.onCommitFiberRoot==`function`)try{Ge.onCommitFiberRoot(We,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=z.T,a=B.p,B.p=2,z.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{z.T=n,B.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Df(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Of(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,wa(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(yd!==5)return!1;var e=bd,t=Cd;Cd=0;var n=dt(Sd),r=z.T,a=B.p;try{B.p=32>n?32:n,z.T=null,n=wd,wd=null;var o=bd,s=Sd;if(yd=0,xd=bd=null,Sd=0,Yu&6)throw Error(i(331));var c=Yu;if(Yu|=4,Wu(o.current),Iu(o,o.current,s,n),Yu=c,Of(0,!1),Ge&&typeof Ge.onPostCommitFiberRoot==`function`)try{Ge.onPostCommitFiberRoot(We,o)}catch{}return!0}finally{B.p=a,z.T=r,uf(e,t)}}function pf(e,t,n){t=Mi(n,t),t=xc(e.stateNode,t,2),e=co(e,t,2),e!==null&&(at(e,2),Df(e))}function mf(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(vd===null||!vd.has(r))){e=Mi(n,e),n=Sc(2),r=co(t,n,2),r!==null&&(Cc(n,r,t,e),at(r,2),Df(r));break}}t=t.return}}function hf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ju;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(rd=!0,i.add(n),e=gf.bind(null,e,t,n),t.then(e,e))}function gf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Xu===e&&(Qu&n)===n&&(ad===4||ad===3&&(Qu&62914560)===Qu&&300>Fe()-md?Yu&2?cd|=n:Vd(e,0):cd|=n,ud===Qu&&(ud=0)),Df(e)}function _f(e,t){t===0&&(t=rt()),e=_i(e,t),e!==null&&(at(e,t),Df(e))}function vf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_f(e,n)}function yf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),_f(e,n)}function bf(e,t){return je(e,t)}var xf=null,Sf=null,Cf=!1,wf=!1,Tf=!1,Ef=0;function Df(e){e!==Sf&&e.next===null&&(Sf===null?xf=Sf=e:Sf=Sf.next=e),wf=!0,Cf||(Cf=!0,Pf())}function Of(e,t){if(!Tf&&wf){Tf=!0;do for(var n=!1,r=xf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ke(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Nf(r,a))}else a=Qu,a=$e(r,r===Xu?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||et(r,a)||(n=!0,Nf(r,a))}r=r.next}while(n);Tf=!1}}function kf(){Af()}function Af(){wf=Cf=!1;var e=0;Ef!==0&&vp()&&(e=Ef);for(var t=Fe(),n=null,r=xf;r!==null;){var i=r.next,a=jf(r,t);a===0?(r.next=null,n===null?xf=i:n.next=i,i===null&&(Sf=n)):(n=r,(e!==0||a&3)&&(wf=!0)),r=i}yd!==0&&yd!==5||Of(e,!1),Ef!==0&&(Ef=0)}function jf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ke(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=nt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Xu,n=Qu,n=$e(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&($u===2||$u===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Me(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||et(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Me(r),dt(n)){case 2:case 8:n=Re;break;case 32:n=ze;break;case 268435456:n=Ve;break;default:n=ze}return r=Mf.bind(null,e),n=je(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Me(r),e.callbackPriority=2,e.callbackNode=null,2}function Mf(e,t){if(yd!==0&&yd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=Qu;return r=$e(e,e===Xu?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),jf(e,Fe()),e.callbackNode!=null&&e.callbackNode===n?Mf.bind(null,e):null)}function Nf(e,t){if(df())return null;Fd(e,t,!0)}function Pf(){Cp(function(){Yu&6?je(Le,kf):Af()})}function Ff(){if(Ef===0){var e=Aa;e===0&&(e=Xe,Xe<<=1,!(Xe&261888)&&(Xe=256)),Ef=e}return Ef}function If(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:un(e)}function Lf(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=If((i[gt]||null).action),o=r.submitter;o&&(t=(t=o[gt]||null)?If(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new jn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ef!==0){var e=new FormData(i,o);qs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),qs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Rf=0;Rf<ii.length;Rf++){var zf=ii[Rf];ai(zf.toLowerCase(),`on`+(zf[0].toUpperCase()+zf.slice(1)))}ai(Xr,`onAnimationEnd`),ai(Zr,`onAnimationIteration`),ai(Qr,`onAnimationStart`),ai(`dblclick`,`onDoubleClick`),ai(`focusin`,`onFocus`),ai(`focusout`,`onBlur`),ai($r,`onTransitionRun`),ai(ei,`onTransitionStart`),ai(ti,`onTransitionCancel`),ai(ni,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Bf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Vf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Bf));function Hf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ui(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ui(e)}i.currentTarget=null,a=c}}}}function Uf(e,t){var n=t[vt];n===void 0&&(n=t[vt]=new Set);var r=e+`__bubble`;n.has(r)||(qf(t,e,2,!1),n.add(r))}function Wf(e,t,n){var r=0;t&&(r|=4),qf(n,e,r,t)}var Gf=`_reactListening`+Math.random().toString(36).slice(2);function Kf(e){if(!e[Gf]){e[Gf]=!0,At.forEach(function(t){t!==`selectionchange`&&(Vf.has(t)||Wf(t,!1,e),Wf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gf]||(t[Gf]=!0,Wf(`selectionchange`,!1,t))}}function qf(e,t,n,r){switch(Eh(t)){case 2:var i=bh;break;case 8:i=xh;break;default:i=Sh}n=i.bind(null,t,n,e),i=void 0,!xn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Jf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Tt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}vn(function(){var r=a,i=pn(n),s=[];a:{var c=ri.get(e);if(c!==void 0){var l=jn,u=e;switch(e){case`keypress`:if(Dn(n)===0)break a;case`keydown`:case`keyup`:l=qn;break;case`focusin`:u=`focus`,l=Bn;break;case`focusout`:u=`blur`,l=Bn;break;case`beforeblur`:case`afterblur`:l=Bn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Rn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=zn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Xn;break;case Xr:case Zr:case Qr:l=Vn;break;case ni:l=Zn;break;case`scroll`:case`scrollend`:l=Nn;break;case`wheel`:l=Qn;break;case`copy`:case`cut`:case`paste`:l=J;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Jn;break;case`submit`:l=Yn;break;case`toggle`:case`beforetoggle`:l=$n}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=yn(m,p),g!=null&&d.push(Yf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==fn&&(u=n.relatedTarget||n.fromElement)&&(Tt(u)||u[_t]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Tt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Rn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Dt(c),h=l==null?u:Dt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Tt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?E(c,l,Zf):null,c!==null&&Qf(s,u,c,d,!1),l!==null&&f!==null&&Qf(s,f,l,d,!0)))}a:{if(c=r?Dt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=yr;else if(pr(c)){if(br)_=kr;else{_=Dr;var v=Er}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&sn(r.elementType)&&(_=yr):_=Or;if(_&&=_(e,r)){mr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Dt(r):window,e){case`focusin`:(pr(v)||v.contentEditable===`true`)&&(Br=v,Vr=r,Hr=null);break;case`focusout`:Hr=Vr=Br=null;break;case`mousedown`:Ur=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ur=!1,Wr(s,n,i);break;case`selectionchange`:if(zr)break;case`keydown`:case`keyup`:Wr(s,n,i)}var y;if(tr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else lr?sr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(ir&&n.locale!==`ko`&&(lr||b!==`onCompositionStart`?b===`onCompositionEnd`&&lr&&(y=En()):(Cn=i,wn=`value`in Cn?Cn.value:Cn.textContent,lr=!0)),v=Xf(r,b),0<v.length&&(b=new Hn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=cr(n),y!==null&&(b.data=y)))),(y=rr?ur(e,n):dr(e,n))&&(b=Xf(r,`onBeforeInput`),0<b.length&&(v=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),Lf(s,e,r,n,i)}Hf(s,t)})}function Yf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=yn(e,n),i!=null&&r.unshift(Yf(e,i,a)),i=yn(e,t),i!=null&&r.push(Yf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Zf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=yn(n,a),l!=null&&o.unshift(Yf(n,l,c))):i||(l=yn(n,a),l!=null&&o.push(Yf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var $f=/\r\n?/g,ep=/\u0000|\uFFFD/g;function tp(e){return(typeof e==`string`?e:``+e).replace($f,`
`).replace(ep,``)}function np(e,t){return t=tp(t),tp(e)===t}function rp(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||nn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&nn(e,``+r);else return;break;case`className`:Vt(e,`class`,r);break;case`tabIndex`:Vt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Vt(e,n,r);break;case`style`:on(e,r,o);return;case`data`:if(t!==`object`){Vt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=un(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&rp(e,t,`name`,a.name,a,null),rp(e,t,`formEncType`,a.formEncType,a,null),rp(e,t,`formMethod`,a.formMethod,a,null),rp(e,t,`formTarget`,a.formTarget,a,null)):(rp(e,t,`encType`,a.encType,a,null),rp(e,t,`method`,a.method,a,null),rp(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=un(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=dn);return;case`onScroll`:r!=null&&Uf(`scroll`,e);return;case`onScrollEnd`:r!=null&&Uf(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=un(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Uf(`beforetoggle`,e),Uf(`toggle`,e),Bt(e,`popover`,r);break;case`xlinkActuate`:Ht(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Ht(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Ht(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Ht(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Ht(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Ht(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Ht(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Ht(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Ht(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Bt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=cn.get(n)||n,Bt(e,n,r);else return}Rt=!0}function ip(e,t,n,r,a,o){switch(n){case`style`:on(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)nn(e,r);else if(typeof r==`number`||typeof r==`bigint`)nn(e,``+r);else return;break;case`onScroll`:r!=null&&Uf(`scroll`,e);return;case`onScrollEnd`:r!=null&&Uf(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=dn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[gt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}Rt=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Bt(e,n,r)}return}Rt=!0}function ap(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Uf(`error`,e),Uf(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:rp(e,t,o,s,n,null)}}a&&rp(e,t,`srcSet`,n.srcSet,n,null),r&&rp(e,t,`src`,n.src,n,null);return;case`input`:Uf(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:rp(e,t,r,d,n,null)}}Zt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Uf(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:rp(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&$t(e,!!r,n,!0):$t(e,!!r,t,!1);return;case`textarea`:for(s in Uf(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:rp(e,t,s,c,n,null)}tn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:rp(e,t,l,r,n,null)}return;case`dialog`:Uf(`beforetoggle`,e),Uf(`toggle`,e),Uf(`cancel`,e),Uf(`close`,e);break;case`iframe`:case`object`:Uf(`load`,e);break;case`video`:case`audio`:for(r=0;r<Bf.length;r++)Uf(Bf[r],e);break;case`image`:Uf(`error`,e),Uf(`load`,e);break;case`details`:Uf(`toggle`,e);break;case`embed`:case`source`:case`link`:Uf(`error`,e),Uf(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:rp(e,t,u,r,n,null)}return;default:if(sn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&ip(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&rp(e,t,c,r,n,null))}var op={};function sp(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||rp(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(Rt=!0),o=m;break;case`name`:m!==f&&(Rt=!0),a=m;break;case`checked`:m!==f&&(Rt=!0),u=m;break;case`defaultChecked`:m!==f&&(Rt=!0),d=m;break;case`value`:m!==f&&(Rt=!0),s=m;break;case`defaultValue`:m!==f&&(Rt=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&rp(e,t,p,m,r,f)}}Xt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||rp(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(Rt=!0),p=o;break;case`defaultValue`:o!==l&&(Rt=!0),c=o;break;case`multiple`:o!==l&&(Rt=!0),s=o;default:o!==l&&rp(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?$t(e,!!n,n?[]:``,!1):$t(e,!!n,t,!0)):$t(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:rp(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(Rt=!0),p=a;break;case`defaultValue`:a!==o&&(Rt=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&rp(e,t,s,a,r,o)}en(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:rp(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(Rt=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:rp(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&rp(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:rp(e,t,u,p,r,m)}return;default:if(sn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&ip(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||ip(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&rp(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||rp(e,t,f,p,r,m)}function cp(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function lp(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&cp(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&cp(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var up=null,dp=null;function fp(e){return e.nodeType===9?e:e.ownerDocument}function pp(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function mp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function hp(e,t,n,r){return n=fp(n).createElement(e),n[ht]=r,n[gt]=t,ap(n,e,t),K(n),n}function gp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _p=null;function vp(){var e=window.event;return e&&e.type===`popstate`?e!==_p&&(_p=e,!0):(_p=null,!1)}var yp=typeof setTimeout==`function`?setTimeout:void 0,bp=typeof clearTimeout==`function`?clearTimeout:void 0,xp=typeof Promise==`function`?Promise:void 0,Sp=typeof requestAnimationFrame==`function`?requestAnimationFrame:yp,Cp=typeof queueMicrotask==`function`?queueMicrotask:xp===void 0?yp:function(e){return xp.resolve(null).then(e).catch(wp)};function wp(e){setTimeout(function(){throw e})}function Tp(e){return e===`head`}function Ep(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Gh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)bm(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,bm(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[St]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&bm(e.ownerDocument.body)}n=i}while(n);Gh(t)}function Dp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Op(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function kp(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Ap(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function jp(e){return Ap(e.getBoundingClientRect(),getComputedStyle(e),e)}function Mp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Ap(t,n,e)}function Np(e){return e.documentElement.clientHeight}function Pp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Fp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Np(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=$m(f),u>nh){s.length=o;break}f=new Promise(Pp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Ip(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Ip.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:D({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Ip.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Ip.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Lp(e){return{name:e,group:new Ip(`group`,e),imagePair:new Ip(`image-pair`,e),old:new Ip(`old`,e),new:new Ip(`new`,e)}}function Rp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Rp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Up(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Vp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,zp,e,s,r)}this._eventListeners=a}};function zp(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Rp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Up(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Vp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Bp,e,n,i),r.splice(t,1),a!==null&&a()}};function Bp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Vp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Hp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Up(e,t,n,r){if(e.length===0)return-1;r=Hp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&Hp(a.optionsOrUseCapture)===r)return i}return-1}Rp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Vp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Vp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Rp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag!==6&&(e=b(e),gm(e,t))}Rp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Gp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Wp(t[n],e);n--);};function Gp(e,t){return t.push(e),!1}Rp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=fp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Kp,e,void 0,void 0))};function Kp(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Rp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,qp,e,void 0,void 0)};function qp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Rp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Jp,e,void 0,void 0);for(var n=t=0;n<Yp.length;n++){var r=Yp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Yp[t++]=r}Yp.length=t}};function Jp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Yp=[],Xp=!1;function Zp(e,t,n){Yp.push({fragmentInstance:e,observer:t,instance:n}),Xp||(Xp=!0,_m(function(){Xp=!1;var e=Yp;Yp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Rp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Qp,e,void 0,void 0),e};function Qp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Rp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Rp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Gp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||$p(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function $p(e,t,n,r,i){var a=Tt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=E(n,a,T),t===null?t=!1:(h(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=E(r,a,T),t===null?t=!1:(h(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function em(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Rp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Gp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),em(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),em(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function tm(e,t){return e=b(e),nm(e,t),!1}function nm(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function rm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Vp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Yp.length;i++){var a=Yp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Yp[r++]=a)}Yp.length=r,n.observe(e)}),nm(e,t))}function im(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Vp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Zp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function am(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:am(n),wt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function om(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[St])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=fm(e.nextSibling),e===null)break}return null}function sm(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=fm(e.nextSibling),e===null))return null;return e}function cm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=fm(e.nextSibling),e===null))return null;return e}function lm(e){return e.data===`$?`||e.data===`$~`}function um(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function dm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function fm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var pm=null;function mm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return fm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function hm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function gm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function _m(e){Sp(function(){Sp(function(t){return e(t)})})}function vm(e,t,n){switch(t=fp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function ym(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&rp(e,t,r,null,op,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===dn&&(e.onclick=null),wt(e)}function bm(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);wt(e)}var xm=new Map,Sm=new Set;function Cm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var wm=B.d;B.d={f:Tm,r:Em,D:km,C:Am,L:jm,m:Mm,X:Pm,S:Nm,M:Fm};function Tm(){var e=wm.f(),t=zd();return e||t}function Em(e){var t=Et(e);t!==null&&t.tag===5&&t.type===`form`?Ys(t):wm.r(e)}var Dm=typeof document>`u`?null:document;function Om(e,t,n){var r=Dm;if(r&&typeof t==`string`&&t){var i=Yt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),Sm.has(i)||(Sm.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),ap(t,`link`,e),K(t),r.head.appendChild(t)))}}function km(e){wm.D(e),Om(`dns-prefetch`,e,null)}function Am(e,t){wm.C(e,t),Om(`preconnect`,e,t)}function jm(e,t,n){wm.L(e,t,n);var r=Dm;if(r&&e&&t){var i=`link[rel="preload"][as="`+Yt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Yt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Yt(n.imageSizes)+`"]`)):i+=`[href="`+Yt(e)+`"]`;var a=i;switch(t){case`style`:a=Lm(e);break;case`script`:a=Vm(e)}if(!(xm.has(a)||(e=D({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),xm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Rm(a))||t===`script`&&r.querySelector(Hm(a))))){var o=r.createElement(`link`);ap(o,`link`,e),t===`style`&&(o[Ct]=!0,o.onload=o.onerror=function(){kt(o)}),K(o),r.head.appendChild(o)}}}function Mm(e,t){wm.m(e,t);var n=Dm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Yt(r)+`"][href="`+Yt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Vm(e)}if(!xm.has(a)&&(e=D({rel:`modulepreload`,href:e},t),xm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Hm(a)))return}r=n.createElement(`link`),ap(r,`link`,e),K(r),n.head.appendChild(r)}}}function Nm(e,t,n){wm.S(e,t,n);var r=Dm;if(r&&e){var i=Ot(r).hoistableStyles,a=Lm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Rm(a)))s.loading=5;else{e=D({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=xm.get(a))&&Gm(e,n);var c=o=r.createElement(`link`);K(c),ap(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Wm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Pm(e,t){wm.X(e,t);var n=Dm;if(n&&e){var r=Ot(n).hoistableScripts,i=Vm(e),a=r.get(i);a||(a=n.querySelector(Hm(i)),a||(e=D({src:e,async:!0},t),(t=xm.get(i))&&Km(e,t),a=n.createElement(`script`),K(a),ap(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Fm(e,t){wm.M(e,t);var n=Dm;if(n&&e){var r=Ot(n).hoistableScripts,i=Vm(e),a=r.get(i);a||(a=n.querySelector(Hm(i)),a||(e=D({src:e,async:!0,type:`module`},t),(t=xm.get(i))&&Km(e,t),a=n.createElement(`script`),K(a),ap(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Im(e,t,n,r){var a=(a=_e.current)?Cm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Lm(n.href),t=Ot(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Lm(n.href);var o=Ot(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Rm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=xm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},xm.set(e,o)),Bm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Vm(n),t=Ot(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Lm(e){return`href="`+Yt(e)+`"`}function Rm(e){return`link[rel="stylesheet"][`+e+`]`}function zm(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function Bm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Ct]){r.loading=1;return}}else t=e.createElement(`link`),t[Ct]=!0,t.onload=t.onerror=kt.bind(null,t),ap(t,`link`,n),K(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Vm(e){return`[src="`+Yt(e)+`"]`}function Hm(e){return`script[async]`+e}function Um(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Yt(n.href)+`"]`);if(r)return t.instance=r,K(r),r;var a=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),K(r),ap(r,`style`,a),Wm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Lm(n.href);var o=e.querySelector(Rm(a));if(o)return t.state.loading|=4,t.instance=o,K(o),o;r=zm(n),(a=xm.get(a))&&Gm(r,a),o=(e.ownerDocument||e).createElement(`link`),K(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),ap(o,`link`,r),t.state.loading|=4,Wm(o,n.precedence,e),t.instance=o;case`script`:return o=Vm(n.src),(a=e.querySelector(Hm(o)))?(t.instance=a,K(a),a):(r=n,(a=xm.get(o))&&(r=D({},n),Km(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),K(a),ap(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Wm(r,n.precedence,e));return t.instance}function Wm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Gm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Km(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var qm=null;function Jm(e,t,n){if(qm===null){var r=new Map,i=qm=new Map;i.set(n,r)}else i=qm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[St]||a[ht]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Ym(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Xm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Zm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Qm(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function $m(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function eh(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=$m(t),e.suspenseyImages.push(t)),e=oh.bind(e),t.decode().then(e,e))}function th(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Lm(r.href),a=t.querySelector(Rm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=ah.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,K(a);return}a=t.ownerDocument||t,r=zm(r),(i=xm.get(i))&&Gm(r,i),a=a.createElement(`link`),K(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),ap(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=ah.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var nh=0;function rh(e,t){return e.stylesheets&&e.count===0&&ch(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ch(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&nh===0&&(nh=62500*lp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ch(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>nh?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function ih(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ch(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function ah(){this.count--,ih(this)}function oh(){this.imgCount--,ih(this)}var sh=null;function ch(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,sh=new Map,t.forEach(lh,e),sh=null,ah.call(e))}function lh(e,t){if(!(t.state.loading&4)){var n=sh.get(e);if(n)var r=n.get(null);else{n=new Map,sh.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=ah.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var uh={$$typeof:N,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function dh(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=it(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=it(0),this.hiddenUpdates=it(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function fh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new dh(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Si(3,null,null,t),e.current=a,a.stateNode=e,t=Ca(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},ao(a),e}function ph(e){return e?(e=bi,e):bi}function mh(e,t,n,r,i,a){i=ph(i),r.context===null?r.context=i:r.pendingContext=i,r=so(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=co(e,r,t),n!==null&&(Pd(n,e,t),lo(n,e,t))}function hh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gh(e,t){hh(e,t),(e=e.alternate)&&hh(e,t)}function _h(e){if(e.tag===13||e.tag===31){var t=_i(e,67108864);t!==null&&Pd(t,e,67108864),gh(e,67108864)}}function vh(e){if(e.tag===13||e.tag===31){var t=jd();t=ut(t);var n=_i(e,t);n!==null&&Pd(n,e,t),gh(e,t)}}var yh=!0;function bh(e,t,n,r){var i=z.T;z.T=null;var a=B.p;try{B.p=2,Sh(e,t,n,r)}finally{B.p=a,z.T=i}}function xh(e,t,n,r){var i=z.T;z.T=null;var a=B.p;try{B.p=8,Sh(e,t,n,r)}finally{B.p=a,z.T=i}}function Sh(e,t,n,r){if(yh){var i=Ch(r);if(i===null)Jf(e,t,r,wh,n),Fh(e,r);else if(Lh(i,e,t,n,r))r.stopPropagation();else if(Fh(e,r),t&4&&-1<Ph.indexOf(e)){for(;i!==null;){var a=Et(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ke(o);s.entanglements[1]|=c,o&=~c}Df(a),!(Yu&6)&&(gd=Fe()+500,Of(0,!1))}}break;case 31:case 13:s=_i(a,2),s!==null&&Pd(s,a,2),zd(),gh(a,2)}if(a=Ch(r),a===null&&Jf(e,t,r,wh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Jf(e,t,r,null,n)}}function Ch(e){return e=pn(e),Th(e)}var wh=null;function Th(e){if(wh=null,e=Tt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return wh=e,null}function Eh(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ie()){case Le:return 2;case Re:return 8;case ze:case Be:return 32;case Ve:return 268435456;default:return 32}default:return 32}}var Dh=!1,Oh=null,kh=null,Ah=null,jh=new Map,Mh=new Map,Nh=[],Ph=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Fh(e,t){switch(e){case`focusin`:case`focusout`:Oh=null;break;case`dragenter`:case`dragleave`:kh=null;break;case`mouseover`:case`mouseout`:Ah=null;break;case`pointerover`:case`pointerout`:jh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:Mh.delete(t.pointerId)}}function Ih(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Et(t),t!==null&&_h(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Lh(e,t,n,r,i){switch(t){case`focusin`:return Oh=Ih(Oh,e,t,n,r,i),!0;case`dragenter`:return kh=Ih(kh,e,t,n,r,i),!0;case`mouseover`:return Ah=Ih(Ah,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return jh.set(a,Ih(jh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,Mh.set(a,Ih(Mh.get(a)||null,e,t,n,r,i)),!0}return!1}function Rh(e){var t=Tt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,pt(e.priority,function(){vh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,pt(e.priority,function(){vh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ch(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fn=r,n.target.dispatchEvent(r),fn=null}else return t=Et(n),t!==null&&_h(t),e.blockedOn=n,!1;t.shift()}return!0}function Bh(e,t,n){zh(e)&&n.delete(t)}function Vh(){Dh=!1,Oh!==null&&zh(Oh)&&(Oh=null),kh!==null&&zh(kh)&&(kh=null),Ah!==null&&zh(Ah)&&(Ah=null),jh.forEach(Bh),Mh.forEach(Bh)}function Hh(e,n){e.blockedOn===n&&(e.blockedOn=null,Dh||(Dh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Vh)))}var Uh=null;function Wh(e){Uh!==e&&(Uh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Uh===e&&(Uh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Th(r||n)===null)continue;break}var a=Et(n);a!==null&&(e.splice(t,3),t-=3,qs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Gh(e){function t(t){return Hh(t,e)}Oh!==null&&Hh(Oh,e),kh!==null&&Hh(kh,e),Ah!==null&&Hh(Ah,e),jh.forEach(t),Mh.forEach(t);for(var n=0;n<Nh.length;n++){var r=Nh[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Nh.length&&(n=Nh[0],n.blockedOn===null);)Rh(n),n.blockedOn===null&&Nh.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[gt]||null;if(typeof a==`function`)o||Wh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[gt]||null)s=o.formAction;else if(Th(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Wh(n)}}}function Kh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function qh(e){this._internalRoot=e}Jh.prototype.render=qh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;mh(n,jd(),e,t,null,null)},Jh.prototype.unmount=qh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mh(e.current,2,null,e,null,null),zd(),t[_t]=null}};function Jh(e){this._internalRoot=e}Jh.prototype.unstable_scheduleHydration=function(e){if(e){var t=ft();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nh.length&&t!==0&&t<Nh[n].priority;n++);Nh.splice(n,0,e),n===0&&Rh(e)}};var Yh=n.version;if(Yh!==`19.3.1`)throw Error(i(527,Yh,`19.3.1`));B.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Xh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:z,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Zh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zh.isDisabled&&Zh.supportsFiber)try{We=Zh.inject(Xh),Ge=Zh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=gc,s=_c,c=vc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=fh(e,1,!1,null,null,n,r,null,o,s,c,Kh),e[_t]=t.current,Kf(e),new qh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u()),v=g(),y=`-ms-`,b=`-moz-`,x=`-webkit-`,S=`comm`,C=`rule`,w=`decl`,T=`@import`,E=`@namespace`,D=`@keyframes`,O=`@layer`,k=Math.abs,ee=String.fromCharCode,A=Object.assign;function j(e,t){return P(e,0)^45?(((t<<2^P(e,0))<<2^P(e,1))<<2^P(e,2))<<2^P(e,3):0}function te(e){return e.trim()}function M(e,t){return(e=t.exec(e))?e[0]:e}function N(e,t,n){return e.replace(t,n)}function ne(e,t,n){return e.indexOf(t,n)}function P(e,t){return e.charCodeAt(t)|0}function re(e,t,n){return e.slice(t,n)}function ie(e){return e.length}function F(e){return e.length}function I(e,t){return t.push(e),e}function ae(e,t){return e.map(t).join(``)}function oe(e,t){return e.filter(function(e){return!M(e,t)})}var L=1,se=1,ce=0,le=0,ue=0,de=``;function R(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:L,column:se,length:o,return:``,siblings:s}}function z(e,t){return A(R(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function B(e){for(;e.root;)e=z(e.root,{children:[e]});I(e,e.siblings)}function fe(){return ue}function pe(){return ue=le>0?P(de,--le):0,se--,ue===10&&(se=1,L--),ue}function me(){return ue=le<ce?P(de,le++):0,se++,ue===10&&(se=1,L++),ue}function V(){return P(de,le)}function H(){return le}function he(e,t){return re(de,e,t)}function ge(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function U(e){return L=se=1,ce=ie(de=e),le=0,[]}function _e(e){return de=``,e}function ve(e){return te(he(le-1,xe(e===91?e+2:e===40?e+1:e)))}function ye(e){for(;(ue=V())&&ue<33;)me();return ge(e)>2||ge(ue)>3?``:` `}function be(e,t){for(;--t&&me()&&!(ue<48||ue>102||ue>57&&ue<65||ue>70&&ue<97););return he(e,H()+(t<6&&V()==32&&me()==32))}function xe(e){for(;me();)switch(ue){case e:return le;case 34:case 39:e!==34&&e!==39&&xe(ue);break;case 40:e===41&&xe(e);break;case 92:me()}return le}function Se(e,t){for(;me()&&e+ue!==57&&(e+ue!==84||V()!==47););return`/*`+he(t,le-1)+`*`+ee(e===47?e:me())}function Ce(e){for(;!ge(V());)me();return he(e,le)}function we(e){return _e(Te(``,null,null,null,[``],e=U(e),0,[0],e))}function Te(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=me()){case 40:if(m!=108&&P(C,d-1)==58){ne(C+=N(ve(v),`&`,`&\f`),`&\f`,k(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=ve(v);break;case 9:case 10:case 13:case 32:C+=ye(m);break;case 92:C+=be(H()-1,7);continue;case 47:switch(V()){case 42:case 47:I(De(Se(me(),H()),t,n,c),c),(ge(m||1)==5||ge(V()||1)==5)&&ie(C)&&re(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=ie(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=N(C,/\f/g,``)),p>0&&(ie(C)-d||h===0&&m===47)&&I(p>32?Oe(C+`;`,r,n,d-1,c):Oe(N(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(I(S=Ee(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123){if(u===0)Te(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(P(C,3)===110)break;case 108:if(P(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Te(e,S,S,r&&I(Ee(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):Te(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+ie(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&pe()==125)continue}switch(C+=ee(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(ie(C)-1)*_,_=1;break;case 64:V()===45&&(C+=ve(me())),f=V(),u=d=ie(y=C+=Ce(H())),v++;break;case 45:m===45&&ie(C)==2&&(h=0)}}return a}function Ee(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=F(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=re(e,f+1,f=k(g=o[h])),b=e;v<m;++v)(b=te(g>0?p[v]+` `+y:N(y,/&\f/g,p[v])))&&(c[_++]=b);return R(e,t,n,i===0?C:s,c,l,u,d)}function De(e,t,n,r){return R(e,t,n,S,ee(fe()),re(e,2,-2),0,r)}function Oe(e,t,n,r,i){return R(e,t,n,w,re(e,0,r),re(e,r+1,-1),r,i)}function ke(e,t,n){switch(j(e,t)){case 5103:return x+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return x+e+e;case 4855:return x+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return b+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return x+e+b+e+y+e+e;case 5936:switch(P(e,t+11)){case 114:return x+e+y+N(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return x+e+y+N(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return x+e+y+N(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return x+e+y+e+e;case 6165:return x+e+y+`flex-`+e+e;case 5187:return x+e+N(e,/(\w+).+(:[^]+)/,x+`box-$1$2`+y+`flex-$1$2`)+e;case 5443:return x+e+y+`flex-item-`+N(e,/flex-|-self/g,``)+(M(e,/flex-|baseline/)?``:y+`grid-row-`+N(e,/flex-|-self/g,``))+e;case 4675:return x+e+y+`flex-line-pack`+N(e,/align-content|flex-|-self/g,``)+e;case 5548:return x+e+y+N(e,`shrink`,`negative`)+e;case 5292:return x+e+y+N(e,`basis`,`preferred-size`)+e;case 6060:return x+`box-`+N(e,`-grow`,``)+x+e+y+N(e,`grow`,`positive`)+e;case 4554:return x+N(e,/([^-])(transform)/g,`$1`+x+`$2`)+e;case 6187:return N(N(N(e,/(zoom-|grab)/,x+`$1`),/(image-set)/,x+`$1`),e,``)+e;case 5495:case 3959:return N(e,/(image-set\([^]*)/,x+"$1$`$1");case 4968:return N(N(e,/(.+:)(flex-)?(.*)/,x+`box-pack:$3`+y+`flex-pack:$3`),/space-between/,`justify`)+x+e+e;case 4200:if(!M(e,/flex-|baseline/))return y+`grid-column-align`+re(e,t)+e;break;case 2592:case 3360:return y+N(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,M(e.props,/grid-\w+-end/)})?~ne(e+(n=n[t].value),`span`,0)?e:y+N(e,`-start`,``)+e+y+`grid-row-span:`+(~ne(n,`span`,0)?M(n,/\d+/):+M(n,/\d+/)-M(e,/\d+/))+`;`:y+N(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return M(e.props,/grid-\w+-start/)})?e:y+N(N(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return N(e,/(.+)-inline(.+)/,x+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ie(e)-1-t>6)switch(P(e,t+1)){case 109:if(P(e,t+4)!==45)break;case 102:return N(e,/(.+:)(.+)-([^]+)/,`$1`+x+`$2-$3$1`+b+(P(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~ne(e,`stretch`,0)?ke(N(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return N(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return y+n+`:`+r+s+(i?y+n+`-span:`+(a?o:+o-r)+s:``)+e});case 4949:if(P(e,t+6)===121)return N(e,`:`,`:`+x)+e;break;case 6444:switch(P(e,P(e,14)===45?18:11)){case 120:return N(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+x+(P(e,14)===45?`inline-`:``)+`box$3$1`+x+`$2$3$1`+y+`$2box$3`)+e;case 100:return N(e,`:`,`:`+y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return N(e,`scroll-`,`scroll-snap-`)+e}return e}function Ae(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function je(e,t,n,r){switch(e.type){case O:if(e.children.length)break;case T:case E:case w:return e.return=e.return||e.value;case S:return``;case D:return e.return=e.value+`{`+Ae(e.children,r)+`}`;case C:if(!ie(e.value=e.props.join(`,`)))return``}return ie(n=Ae(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Me(e){var t=F(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Ne(e){return function(t){t.root||(t=t.return)&&e(t)}}function Pe(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case w:e.return=ke(e.value,e.length,n);return;case D:return Ae([z(e,{value:N(e.value,`@`,`@`+x)})],r);case C:if(e.length)return ae(n=e.props,function(t){switch(M(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:B(z(e,{props:[N(t,/:(read-\w+)/,`:`+b+`$1`)]})),B(z(e,{props:[t]})),A(e,{props:oe(n,r)});break;case`::placeholder`:B(z(e,{props:[N(t,/:(plac\w+)/,`:`+x+`input-$1`)]})),B(z(e,{props:[N(t,/:(plac\w+)/,`:`+b+`$1`)]})),B(z(e,{props:[N(t,/:(plac\w+)/,y+`input-$1`)]})),B(z(e,{props:[t]})),A(e,{props:oe(n,r)})}return``})}}function Fe(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Ie=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Le=`active`,Re=`data-styled-version`,ze=`6.6.0`,Be=`/*!sc*/
`,Ve=typeof window<`u`&&typeof document<`u`;if(!_.createContext)throw Fe(19);function He(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var Ue=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:He(`REACT_APP_SC_DISABLE_SPEEDY`)??He(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),We=`sc-keyframes-`,Ge=new Map,W=new Map,Ke=1,qe=e=>{if(Ge.has(e))return Ge.get(e);for(;W.has(Ke);)Ke++;let t=Ke++;return Ge.set(e,t),W.set(t,e),t},Je=e=>W.get(e),Ye=(e,t)=>{Ke=t+1,Ge.set(e,t),W.set(t,e)},Xe=Object.freeze([]),G=Object.freeze({});function Ze(e,t,n=G){return e.theme!==n.theme&&e.theme||t||n.theme}var Qe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$e=/(^-|-$)/g;function et(e){return e.replace(Qe,`-`).replace($e,``)}var tt=/(a)(d)/gi,nt=e=>String.fromCharCode(e+(e>25?39:97));function rt(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=nt(t%52)+n;return(nt(t%52)+n).replace(tt,`$1-$2`)}var it=5381,at=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},ot=e=>at(it,e);function st(e){return rt(ot(e)>>>0)}function ct(e){return e.displayName||e.name||`Component`}function lt(e){return typeof e==`string`&&!0}function ut(e){return lt(e)?`styled.${e}`:`Styled(${ct(e)})`}var dt=Symbol.for(`react.memo`),ft=Symbol.for(`react.forward_ref`),pt={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},mt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ht={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gt={[ft]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[dt]:ht};function _t(e){return(`type`in(t=e)&&t.type.$$typeof)===dt?ht:`$$typeof`in e?gt[e.$$typeof]:pt;var t}var vt=Object.defineProperty,yt=Object.getOwnPropertyNames,bt=Object.getOwnPropertySymbols,xt=Object.getOwnPropertyDescriptor,St=Object.getPrototypeOf,Ct=Object.prototype;function wt(e,t,n){if(typeof t!=`string`){let r=St(t);r&&r!==Ct&&wt(e,r,n);let i=yt(t).concat(bt(t)),a=_t(e),o=_t(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in mt||n&&n[s]||o&&s in o||a&&s in a)){let n=xt(t,s);try{vt(e,s,n)}catch{}}}}return e}function Tt(e){return typeof e==`function`}var Et=Symbol.for(`react.forward_ref`);function Dt(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===Et&&`styledComponentId`in e}function Ot(e,t){return e&&t?e+` `+t:e||t||``}function K(e,t){return e.join(t||``)}function kt(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function At(e,t,n=!1){if(!n&&!kt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=At(e[n],t[n]);else if(kt(t))for(let n in t)e[n]=At(e[n],t[n]);return e}function jt(e,t){Object.defineProperty(e,"toString",{value:t})}var Mt=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw Fe(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+Be;return t}},Nt=`style[${Ie}][${Re}="${ze}"]`,Pt=RegExp(`^${Ie}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Ft=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,It=e=>{if(!e)return document;if(Ft(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(Ft(t))return t}return document},Lt=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},Rt=(e,t)=>{let n=(t.textContent??``).split(Be),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(Pt);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(Ye(n,t),Lt(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},zt=e=>{let t=It(e.options.target).querySelectorAll(Nt);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(Ie)!==Le&&(Rt(e,r),r.parentNode&&r.parentNode.removeChild(r))}},Bt=!1;function Vt(){if(!1!==Bt)return Bt;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return Bt=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return Bt=t.getAttribute(`content`)||void 0}return Bt=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var Ht=(e,t)=>{if(typeof document>`u`)throw Fe(20);let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${Ie}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(Ie,Le),i.setAttribute(Re,ze);let s=t||Vt();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},Ut=class{constructor(e,t){this.element=Ht(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw Fe(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},Wt=class{constructor(e,t){this.element=Ht(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},Gt=Ve,Kt={isServer:!Ve,useCSSOMInjection:!Ue},qt=class e{static registerId(e){return qe(e)}constructor(e=G,t={},n){this.options=Object.assign(Object.assign({},Kt),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ve&&Gt&&(Gt=!1,zt(this)),jt(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=Je(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=Ie+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&Ve&&zt(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Ve&&t.target!==this.options.target&&It(this.options.target)!==It(t.target)&&zt(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new Ut(t,n):new Wt(t,n))(this.options),new Mt(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){qe(e),e.startsWith(We)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(qe(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(qe(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},Jt=new WeakSet,Yt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Xt(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in Yt||e.startsWith(`--`)?String(t).trim():t+`px`}var Zt=47;function Qt(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var $t=Symbol.for(`sc-keyframes`);function en(e){return typeof e==`object`&&!!e&&$t in e}function tn(e){return Tt(e)&&!(e.prototype&&e.prototype.isReactComponent)}var nn=e=>e==null||!1===e||e===``,rn=Symbol.for(`react.client.reference`);function an(e){return e.$$typeof===rn}function on(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!nn(r)&&(Array.isArray(r)&&Jt.has(r)||Tt(r)?t.push(Qt(n)+`:`,r,`;`):kt(r)?(t.push(n+` {`),on(r,t),t.push(`}`)):t.push(Qt(n)+`: `+Xt(n,r)+`;`))}}function sn(e,t,n,r,i=[]){if(nn(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return an(e)?i:tn(e)&&t?sn(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)sn(e[a],t,n,r,i);return i}return Dt(e)?(i.push(`.${e.styledComponentId}`),i):en(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):an(e)?i:kt(e)&&e.toString===Object.prototype.toString?(on(e,i),i):(i.push(e.toString()),i)}var cn=ot(ze),ln=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=at(cn,t),this.baseStyle=n,qt.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a){if(tn(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=K(sn(r,e,t,n)))}else i+=K(sn(a,e,t,n))}}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=rt(at(at(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Ot(r,a)}}return r}},un=/&/g;function dn(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function fn(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==Zt||e.charCodeAt(c+1)!==42){if(o)l===42&&e.charCodeAt(c+1)===Zt&&(o=!1,c++);else if(l!==34&&l!==39||dn(e,c)){if(a===0){if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}}else a===0?a=l:a===l&&(a=0)}else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function pn(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&pn(a.children,t)}return e}function mn({options:e=G,plugins:t=Xe}=G){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(un,r).replace(i,a))}),e.prefix&&o.push(Pe),o.push(je);let s=[],c=Me(o.concat(Ne(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return fn(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||dn(e,o)){if(s===0){if(t===Zt&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==Zt);)o++;o+=2}else if(t!==40){if(t!==41){if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===Zt)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===Zt&&o+1<r&&e.charCodeAt(o+1)===Zt){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++}else c>0&&c--,o++}else c++,o++}else o++}else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:fn(i)):l===0?e:fn(e)}(t),d=we(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=pn(d,e.namespace)),s=[],Ae(d,c),s},u=e,d=it;for(let e=0;e<t.length;e++)t[e].name||Fe(15),d=at(d,t[e].name);return u!=null&&u.namespace&&(d=at(d,u.namespace)),u!=null&&u.prefix&&(d=at(d,`p`)),l.hash=d===it?``:d.toString(),l}var hn=new qt,gn=mn(),_n=_.createContext({shouldForwardProp:void 0,styleSheet:hn,stylis:gn,stylisPlugins:void 0});_n.Consumer;function vn(){return _.useContext(_n)}var yn=_.createContext(void 0);yn.Consumer;var bn={};function xn(e,t){let n=typeof e==`string`?et(e):`sc`;bn[n]=(bn[n]||0)+1;let r=n+`-`+st(ze+n+bn[n]);return t?t+`-`+r:r}function Sn(e,t,n){let r=Dt(e),i=e,a=!lt(e),{attrs:o=Xe,componentId:s=xn(t.displayName,t.parentComponentId),displayName:c=ut(e)}=t,l=t.displayName&&t.componentId?et(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new ln(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=_.useContext(yn),u=vn(),d=e.shouldForwardProp||u.shouldForwardProp,f=Ze(t,l,a)||G,[p,m]=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=null,a=e.length>1;for(let t=0;t<e.length;t++){let n=e[t],o=Tt(n)?n(a?Object.assign({},r):r):n;for(let e in o)e===`className`?r.className=Ot(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):o[e]===void 0?e in r&&(r[e]!==void 0&&(i||=[]).push(e),r[e]=void 0):r[e]=o[e]}return`className`in t&&typeof t.className==`string`&&(r.className=Ot(r.className,t.className)),[r,i]}(r,t,f),h=i.generateAndInjectStyles(p,u.styleSheet,u.stylis),g=p.as||c,v=lt(g),y=function(e,t,n,r,i,a){let o={};for(let s in e)s[0]===`$`||s===`as`||s===`theme`&&e.theme===n||(s===`forwardedAs`?e.forwardedAs!==void 0&&(o.as=e.forwardedAs):e[s]===void 0?s===`className`||i||a!==null&&a.indexOf(s)!==-1||r&&!r(s,t)||(o[s]=void 0):r&&!r(s,t)||(o[s]=e[s]));return o}(p,g,f,d,v,m),b=Ot(o,s);return h&&(b+=` `+h),p.className&&(b+=` `+p.className),y[v&&g.includes(`-`)?`class`:`className`]=b,n&&(y.ref=n),(0,_.createElement)(g,y)}(m,e,t)}p.displayName=c;let m=_.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Ot(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)At(e,n,!0);return e}({},i.defaultProps,e):e}}),jt(m,()=>`.${m.styledComponentId}`),a&&wt(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Cn=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function wn(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Tn=e=>(Jt.add(e),e);function En(e,...t){if(Tt(e)||kt(e))return Tn(sn(wn(Xe,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?sn(n):Tn(sn(wn(n,t)))}function Dn(e,t,n=G){if(!t)throw Fe(1,t);let r=(r,...i)=>e(t,n,En(r,...i));return r.attrs=r=>Dn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Dn(e,t,Object.assign(Object.assign({},n),r)),r}var On=e=>Dn(Sn,e),q=On;Cn.forEach(e=>{q[e]=On(e)});var kn,An=class{constructor(e,t){this[kn]=!0,this.inject=(e,t=gn)=>{let n=this.getName(t);if(!e.hasNameForId(this.id,n)){let r=t(this.rules,n,`@keyframes`);e.insertRules(this.id,n,r)}},this.name=e,this.id=We+e,this.rules=t,qe(this.id),jt(this,()=>{throw Fe(12,String(this.name))})}getName(e=gn){return e.hash?this.name+rt(e.hash>>>0):this.name}};function jn(e,...t){let n=K(En(e,...t));return new An(st(n),n)}kn=$t,`${Ie}`,`${Ie}`,`${Ie}`;var Mn=15e3,Nn=new Set,Pn=new Map,Fn=!1,In=0,Ln;function Rn(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function zn(){Fn||(Fn=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>Bn(e)))}function Bn(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?Pn.get(n):void 0;n&&r&&(Pn.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),Nn.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}function Vn(){if(Ln!==void 0)return;let e=()=>{if(!Rn())return;let e=document.getElementById(`root`),t=e!==null&&e.childElementCount===0;window.external.sendMessage(JSON.stringify({type:`webview.heartbeat`,payload:{blank:t}}))};e(),Ln=setInterval(e,5e3)}var J={get available(){return Rn()},send(e){Rn()?(zn(),window.external.sendMessage(JSON.stringify(e)),e.type===`app.ready`&&Vn()):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=Mn){if(!Rn())return Promise.reject(Error(`Native bridge is not available.`));zn();let r=`req-${++In}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{Pn.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);Pn.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return zn(),Nn.add(e),()=>Nn.delete(e)}},Hn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Y=o(((e,t)=>{t.exports=Hn()}))();function Un(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}async function Wn(e){return J.available?await J.request(`i18n.get`,e?{locale:e}:void 0):{locale:`en`,strings:{},available:[`en`]}}var Gn=(0,_.createContext)(Un({})),Kn=(0,_.createContext)(`en`);function qn(){return(0,_.useContext)(Gn)}var Jn=({children:e})=>{let[t,n]=(0,_.useState)(()=>Un({})),[r,i]=(0,_.useState)(`en`);return(0,_.useEffect)(()=>{let e=!1,t=async()=>{try{let t=await Wn();if(e)return;n(()=>Un(t.strings)),i(t.locale)}catch{}};t();let r=J.on(e=>{e.type===`settings.changed`&&t()});return()=>{e=!0,r()}},[]),(0,_.useEffect)(()=>{document.documentElement.lang=r},[r]),(0,Y.jsx)(Gn.Provider,{value:t,children:(0,Y.jsx)(Kn.Provider,{value:r,children:e})})},Yn=e=>J.send({type:e});function Xn(){let[e,t]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{if(J.available)return J.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>Yn(`window.minimize`),toggleMaximize:()=>Yn(`window.toggleMaximize`),close:()=>Yn(`window.close`)}}function Zn(){return{onMouseDown:()=>Yn(`window.drag`),onDoubleClick:()=>Yn(`window.toggleMaximize`)}}function Qn(){let[e,t]=(0,_.useState)(!1),{maximized:n}=Xn();return(0,_.useEffect)(()=>{if(!J.available)return;let e=!1;return J.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,_.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var $n=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function er(){return(0,Y.jsx)(Y.Fragment,{children:$n.map(([e,t])=>(0,Y.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),J.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var tr=null;function nr(e){tr=e}function rr(e){return tr?tr(e):Promise.resolve(!1)}var ir={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},ar={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function or(e,t){return J.available?await J.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function sr(e){return J.available?(await J.request(`fs.open`,{path:e})).ok:!1}async function cr(e,t=!0,n=!1,r=0,i){return await J.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function lr(e,t,n=0,r){return await J.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r})}async function ur(e,t=0,n){return await J.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function dr(e){return J.available?await J.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function fr(e,t){return J.available?(await J.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function pr(e,t,n,r){return J.available?(await J.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function mr(e,t=!1){return J.available?await J.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function hr(){return(await J.request(`fs.places`)).places}async function gr(){return(await J.request(`fs.drives`)).drives}async function _r(e=!1){return(await J.request(`fs.recycle`,{includeOrphans:e})).entries}async function vr(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await rr({hits:r.protected,delaySeconds:r.delaySeconds??5,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await J.request(e,{...t,confirm:r.token})}return r}async function yr(e=!1){let t=await J.request(`fs.recycle.empty`,{includeOrphans:e});await vr(`fs.recycle.empty`,{includeOrphans:e},t)}async function br(e){return!J.available||e.length===0?{ok:!1,done:0}:await J.request(`fs.recycle.restoreMany`,{ids:e})}async function xr(e){if(!J.available||e.length===0)return{ok:!1,done:0};let t=await J.request(`fs.recycle.deleteMany`,{ids:e}),n=await vr(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Sr(e){J.available&&e&&await J.request(`fs.recycle.properties`,{id:e})}async function Cr(){if(!J.available)return{entries:[],cancelled:!0,failed:!1};let e=await J.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function wr(){return J.available?(await J.request(`fs.recycle.admin.purge`)).ok:!1}async function Tr(e=0,t=150,n=!1){return J.available?await J.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function Er(){return J.available?(await J.request(`fs.recent`)).entries:[]}async function Dr(){return J.available?(await J.request(`fs.frequent`)).entries:[]}async function Or(e){J.available&&await J.request(`fs.frequent.record`,{path:e})}async function kr(){await J.request(`fs.recent.clear`)}async function Ar(){await J.request(`fs.frequent.clear`)}async function jr(){return await J.request(`fs.visibility`)}async function Mr(){return await J.request(`fs.hidden.toggle`)}async function Nr(){return J.available?await J.request(`fs.index.tasks`):{count:0,directories:[]}}var Pr={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,accentColor:null,secondaryColor:null,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],globalHotkey:null,language:null,themePresets:[]};async function Fr(){if(!J.available)return Pr;let e=await J.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[]}}async function Ir(){return J.available?(await J.request(`app.protection.defaults`)).paths??[]:[]}var Lr={registered:!1,pathMatches:!1,registeredPath:null};async function Rr(){return J.available?await J.request(`app.defaultManager.status`):{registered:!1,pathMatches:!1,registeredPath:null}}async function zr(){return J.available?await J.request(`app.archive.status`):Lr}async function Br(){return J.available?await J.request(`app.archive.register`):Lr}async function Vr(){return J.available?await J.request(`app.archive.unregister`):Lr}async function Hr(e){if(!J.available)return e;let t=await J.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets}}async function Ur(e,t){J.available&&await J.request(`app.tabs.set`,{tabs:e,active:t})}async function Wr(e,t,n){return J.available?(await J.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var Gr={managed:0,private:0,workingSet:0,available:0};async function Kr(){return J.available?await J.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1}}async function qr(){return J.available?await J.request(`app.updateStatus`)??null:null}async function Jr(){return J.available?await J.request(`app.checkUpdate`):{current:`dev`,latest:`dev`,available:!1}}async function Yr(e){return!J.available||!e?!1:(await J.request(`app.openUrl`,{url:e})).ok}async function Xr(){return J.available?await J.request(`app.memory`):Gr}async function Zr(){return J.available?await J.request(`app.memory.trim`):Gr}async function Qr(){return J.available?(await J.request(`app.scheme`)).registered:!1}async function $r(e){return J.available?(await J.request(`app.scheme.set`,{enabled:e})).registered:!1}async function ei(e,t=!1){return!J.available||e.length===0?!1:(await J.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function ti(){return J.available?(await J.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function ni(){return J.available?await J.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function ri(e,t,n){return!J.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await J.request(`fs.operation.transfer`,{paths:e,target:t,move:n})}async function ii(e){return!J.available||e.length===0?[]:(await J.request(`fs.paths.info`,{paths:e})).entries}async function ai(e){return J.available?(await J.request(`fs.clipboard.paste`,{directory:e})).ok:!1}async function oi(e,t=!1){if(!J.available||e.length===0)return{ok:!1,error:null};let n=await J.request(`fs.operation.delete`,{paths:e,permanent:t});for(let r=0;r<2&&n.required&&n.token&&n.protected?.length;r++){if(!await rr({hits:n.protected,delaySeconds:n.delaySeconds??5,permanent:t}))return{ok:!1,error:null,cancelled:!0};n=await J.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return n}async function si(e,t){return J.available?await J.request(`fs.operation.rename`,{path:e,name:t}):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function ci(e,t=!1){return J.available?await J.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function li(e){return J.available?(await J.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function ui(e,t){return J.available?await J.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function di(e,t,n){return J.available?await J.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function fi(e,t){return J.available?await J.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function pi(e){J.available&&e.length!==0&&await J.request(`fs.operation.properties`,{paths:e})}async function mi(e){J.available&&await J.request(`fs.operation.openWith`,{path:e})}async function hi(e){J.available&&await J.request(`fs.operation.terminal`,{path:e})}async function gi(e){return J.available?await J.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function _i(e,t){return J.available?(await J.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function vi(){return J.available?await J.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function yi(){return J.available?await J.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function bi(e){J.available&&await J.request(`fs.operation.showInExplorer`,{path:e})}async function xi(e){return!J.available||e.length===0?{verbs:[],safe:!0}:await J.request(`shell.verbs`,{paths:e})}async function Si(e,t,n,r){J.available&&e.length!==0&&await J.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Ci(e,t){return!J.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await J.request(`fs.operation.compress`,{...t,paths:e})}async function wi(){return J.available?(await J.request(`app.tasks`)).tasks:[]}async function Ti(){J.available&&await J.request(`app.tasks.clear`)}var Ei={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,refresh:`f5`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},Di=Ei.openInNewTab;function Oi(e){Di=e.trim()||Ei.openInNewTab}function ki(e){let t=Di.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Ai(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function ji(e){return e.split(`+`).filter(Boolean).map(e=>Mi[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Mi={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Ni(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}function Pi(e,t,n,r,i={}){return e(t===1?n:r,{count:t,...i})}function Fi(e){if(e<0)return`—`;if(e===0)return`0 B`;let t=[`B`,`KB`,`MB`,`GB`,`TB`],n=Math.min(Math.floor(Math.log(e)/Math.log(1024)),t.length-1);return`${(e/1024**n).toFixed(n===0?0:1)} ${t[n]}`}function Ii(){let e=document.documentElement.lang.trim();return e.length>0?e:void 0}var Li=`yyyy/MM/dd HH:mm`,Ri=`24`,zi=Li;function Bi(e,t){Ri=Vi(e),zi=t?.trim()||`yyyy/MM/dd HH:mm`}function Vi(e){return e===`system`||e===`12`||e===`custom`?e:`24`}function Hi(e){return Ui(e,Ri,zi)}function Ui(e,t,n){if(e<=0)return`—`;let r=new Date(e),i=Vi(t);if(i===`custom`)return Ki(r,n?.trim()||`yyyy/MM/dd HH:mm`);let a={year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`};return i===`24`&&(a.hourCycle=`h23`),i===`12`&&(a.hour12=!0),r.toLocaleString(Ii(),a)}function Wi(e){if(e<=0)return`—`;let t=new Date(e);if(Ri===`custom`)return Ki(t,zi);let n={hour:`2-digit`,minute:`2-digit`,second:`2-digit`};return Ri===`24`&&(n.hourCycle=`h23`),Ri===`12`&&(n.hour12=!0),t.toLocaleTimeString(Ii(),n)}var Gi=[`yyyy`,`yy`,`MM`,`M`,`dd`,`d`,`HH`,`H`,`hh`,`h`,`mm`,`m`,`ss`,`s`,`a`];function Ki(e,t){let n=``;for(let r=0;r<t.length;){let i=Gi.find(e=>t.startsWith(e,r));i?(n+=qi(e,i),r+=i.length):(n+=t[r],r++)}return n}function qi(e,t){let n=e.getHours(),r=(n+11)%12+1;switch(t){case`yyyy`:return String(e.getFullYear());case`yy`:return Ji(e.getFullYear()%100);case`MM`:return Ji(e.getMonth()+1);case`M`:return String(e.getMonth()+1);case`dd`:return Ji(e.getDate());case`d`:return String(e.getDate());case`HH`:return Ji(n);case`H`:return String(n);case`hh`:return Ji(r);case`h`:return String(r);case`mm`:return Ji(e.getMinutes());case`m`:return String(e.getMinutes());case`ss`:return Ji(e.getSeconds());case`s`:return String(e.getSeconds());case`a`:return Yi(e);default:return``}}function Ji(e){return String(e).padStart(2,`0`)}function Yi(e){return new Intl.DateTimeFormat(Ii(),{hour:`numeric`,hour12:!0}).formatToParts(e).find(e=>e.type===`dayPeriod`)?.value??(e.getHours()<12?`AM`:`PM`)}function Xi(e){return e>=.9?`#ef4444`:e>=.75?`#f59e0b`:`var(--accent-gradient)`}function Zi(e){return e.replace(/[\\/]+$/,``).split(/[\\/]/).at(-1)||e}function Qi(e){let t=e.replace(/[\\/]+$/,``),n=Math.max(t.lastIndexOf(`\\`),t.lastIndexOf(`/`));return n>0?t.slice(0,n):t}var $i=[`.zip`,`.7z`,`.rar`,`.tar`,`.gz`,`.tgz`,`.bz2`,`.xz`];function ea(e){let t=e.replace(/[\\/]+$/,``).toLowerCase();return $i.some(e=>t.endsWith(e))}function ta(e){return ea(e)?!0:e.toLowerCase().split(/[\\/]/).some(e=>$i.some(t=>e.endsWith(t)))}function na(e){let t=e.split(/[\\/]/),n=t.findIndex(e=>$i.some(t=>e.toLowerCase().endsWith(t)));return n<0?e:t.slice(0,n+1).join(`\\`)}function ra(e){return na(e).toLowerCase().endsWith(`.zip`)}function ia(e){let t=e.includes(`/`)||e.includes(`\\\\`)?e.replace(/[\\/]+/g,`\\`):e;return t.endsWith(`\\`)&&(t=t.slice(0,-1)),t.toLowerCase()}function aa(e){let t=e.name.replace(/[\\/]+$/,``);return/^[a-z]:$/i.test(t)?` (${t.toUpperCase()})`:``}function oa(e){let t=aa(e);return t?`${e.label||`Local Disk`}${t}`:e.label||e.name}var sa=new Map;function ca(e){return ia(ta(e)?na(e):e)}function la(e){return sa.get(ca(e))}function ua(e,t){sa.set(ca(e),t)}function da(e){sa.delete(ca(e))}function fa(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var pa=new Map,ma=new Map,ha=new Set,ga=0;function _a(){pa.clear(),ma.clear(),ga+=1,ha.forEach(e=>e())}function va(){let[e,t]=(0,_.useState)(ga);return(0,_.useEffect)(()=>{let e=()=>t(ga);return ha.add(e),()=>{ha.delete(e)}},[]),e}var ya=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function ba(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return ya.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function xa(e,t,n=!1){let r=va(),i=e===null?``:ba(e,t,n),[a,o]=(0,_.useState)(()=>pa.get(i)??null);return(0,_.useEffect)(()=>{if(e===null){o(null);return}if(!J.available)return;if(pa.has(i)){o(pa.get(i)??null);return}let r=!0;return J.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?pa.set(i,e.dataUrl):pa.delete(i),r&&o(e.dataUrl)},()=>{pa.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function Sa(e){let[t,n]=(0,_.useState)(e);return(0,_.useEffect)(()=>{if(!e){n(null);return}if(!ta(e)){n(e);return}let t=!0;return ur(e,0,la(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function Ca(e){let t=va(),[n,r]=(0,_.useState)(()=>e?ma.get(e)??null:null);return(0,_.useEffect)(()=>{if(!e||!J.available){r(null);return}if(ma.has(e)){r(ma.get(e)??null);return}let t=!0;return J.request(`fs.iconFile`,{path:e}).then(n=>{ma.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{ma.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var wa=null,Ta=null;function Ea(){return wa===null?J.available?(Ta??=J.request(`app.thumbnails`).then(e=>(wa=e.base??``,wa),()=>(wa=``,``)),Ta):Promise.resolve(``):Promise.resolve(wa)}function Da(e,t=128,n=0){let[r,i]=(0,_.useState)(wa);return(0,_.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return Ea().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}`}function Oa(e,t=0,n=``){let[r,i]=(0,_.useState)(wa);if((0,_.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return Ea().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function ka(e,t=0){let[n,r]=(0,_.useState)(wa);return(0,_.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return Ea().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var Aa={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},ja={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function Ma(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=Fa(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=Ra(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var Na=`\0`,Pa=``;function Fa(e){return e.query!==Na&&(Na=e.query,Pa=e.query.toLowerCase()),Pa}var Ia=`\0`,La=null;function Ra(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===Ia)return La;Ia=t;try{La=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{La=null}return La}function za(e,t){return Ma(e,t)!==null}var Ba=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],Va={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Ha(e){let t=Wa(e);for(let{kind:e}of Ba)if(Va[e].has(t))return e;return null}function Ua(e){return Ha(e)!==null}function Wa(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var Ga=(0,_.createContext)({places:{},useIcons:!1}),Ka=Ga.Provider;function qa(){return(0,_.useContext)(Ga)}function Ja(e,t){return e.places[ia(t)]}function Ya(e,t,n){return Ja(e,t)?.name||n}function Xa(e,t){try{let n=Number(localStorage.getItem(e));return Number.isFinite(n)?n:t}catch{return t}}function Za(e,t){try{localStorage.setItem(e,String(t))}catch{}}function Qa(e){try{return JSON.parse(localStorage.getItem(e)??`null`)}catch{return null}}function $a(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}var eo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,Y.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,Y.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),to=e=>(0,Y.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Y.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),no=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,Y.jsx)(`path`,{d:`M14 3v4h4`})]}),ro=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,Y.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,Y.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),io=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,Y.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),ao=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M12 19V5`}),(0,Y.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),oo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,Y.jsx)(`path`,{d:`M20 4v7h-7`})]}),so=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M12 5v14`}),(0,Y.jsx)(`path`,{d:`M5 12h14`})]}),co=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M19 12H5`}),(0,Y.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),lo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M5 12h14`}),(0,Y.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),uo=e=>(0,Y.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,Y.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),fo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,Y.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),po=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,Y.jsx)(`path`,{d:`M12 12v8`})]}),mo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,Y.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),ho=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,Y.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,Y.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,Y.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),go=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,Y.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),_o=e=>(0,Y.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Y.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),vo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M4 7h16`}),(0,Y.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,Y.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,Y.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),yo=e=>(0,Y.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Y.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),bo=e=>(0,Y.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Y.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),xo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,Y.jsxs)(`defs`,{children:[(0,Y.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,Y.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,Y.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,Y.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,Y.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,Y.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,Y.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,Y.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,Y.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,Y.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),So=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,Y.jsx)(`path`,{d:`M15 3v4h4`}),(0,Y.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),Co=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,Y.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,Y.jsx)(`path`,{d:`m13 5-2 14`})]}),wo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,Y.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,Y.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),To=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,Y.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Eo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,Y.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,Y.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Do=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,Y.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),Oo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,Y.jsx)(`path`,{d:`M15 3v4h4`}),(0,Y.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),ko=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,Y.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),Ao=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,Y.jsx)(`path`,{d:`M8.5 14h7`})]}),jo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,Y.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,Y.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),Mo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,Y.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),No=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,Y.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),Po=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,Y.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),Fo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,Y.jsx)(`path`,{d:`M15 3v4h4`}),(0,Y.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),Io=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,Y.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,Y.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,Y.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),Lo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,Y.jsx)(`path`,{d:`m14 6 4 4`})]}),Ro=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,Y.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),zo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,Y.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Bo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M12 4v10`}),(0,Y.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,Y.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Vo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,Y.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,Y.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Ho=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,Y.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,Y.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Uo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,Y.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Wo=e=>(0,Y.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Y.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Go=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,Y.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Ko=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,Y.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,Y.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),qo=e=>(0,Y.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Y.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),Jo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,Y.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,Y.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,Y.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),Yo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,Y.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Xo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,Y.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Zo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,Y.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,Y.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),Qo=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,Y.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),$o=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,Y.jsx)(`path`,{d:`M3.5 12h17`}),(0,Y.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),es=e=>(0,Y.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Y.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),ts=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,Y.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),ns=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,Y.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,Y.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),rs=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,Y.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),is=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M12 16V4`}),(0,Y.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,Y.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),as=e=>(0,Y.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Y.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),os=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,Y.jsx)(`path`,{d:`M12 4v16`})]}),ss=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,Y.jsx)(`path`,{d:`M15 4v16`})]}),cs=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,Y.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,Y.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,Y.jsx)(`circle`,{cx:19,cy:12,r:1.6})]});function X(e,t){return({size:n=t,...r})=>(0,Y.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var ls=X(eo,18),us=X(to,18),ds=X(no,18),fs=X(ro,18),ps=X(io,16),ms=X(ao,16),hs=X(oo,16),gs=X(so,16),_s=X(co,16),vs=X(lo,16),ys=X(uo,12),bs=X(fo,18),xs=X(po,14),Ss=X(mo,14),Cs=X(ho,14),ws=X(go,18),Ts=X(_o,18),Es=X(vo,18),Ds=X(yo,14),Os=X(bo,14),ks=X(xo,18),As=X(So,18),js=X(Co,18),Ms=X(wo,18),Ns=X(To,18),Ps=X(Eo,18),Fs=X(Do,18),Is=X(Oo,18),Ls=X(ko,18),Rs=X(Ao,18),zs=X(jo,18),Bs=X(Mo,18),Vs=X(No,18),Hs=X(Po,18),Us=X(Fo,18),Ws=X(Io,18),Gs=X(Lo,16),Ks=X(Ro,18),qs=X(zo,18),Js=X(Bo,18),Ys=X(Vo,18),Xs=X(Ho,18),Zs=X(Uo,18),Qs=X(Wo,18),$s=X(Go,18),ec=X(Ko,18),tc=X(qo,18),nc=X(Jo,18),rc=X(Yo,18),ic=X(Xo,18),ac=X(Zo,18),oc=X(Qo,18),sc=X($o,18),cc=X(es,18),lc=X(ts,16),uc=X(ns,16),dc=X(rs,16),fc=X(is,16),pc=X(as,16),mc=X(os,16),hc=X(ss,16),gc=X(cs,16);async function _c(e,t,n){return J.available?(await J.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function vc(e){return _c(`folder`,[],e??``)}function yc(e){return _c(`file`,e??[],``)}var bc=null,xc=null;function Sc(e){bc=e}function Cc(e){return bc?bc(e):Promise.resolve()}function wc(e){xc=e}function Tc(e,t=!1){return xc?xc(e,t):Promise.resolve(null)}var Ec=[{extension:`.txt`,label:`Text file`},{extension:`.md`,label:`Markdown file`},{extension:`.json`,label:`JSON file`},{extension:`.html`,label:`HTML file`},{extension:`.css`,label:`CSS file`},{extension:`.js`,label:`JavaScript file`},{extension:`.ts`,label:`TypeScript file`},{extension:`.cs`,label:`C# file`},{extension:`.py`,label:`Python file`},{extension:`.bat`,label:`Batch file`},{extension:`.ps1`,label:`PowerShell file`},{extension:`.csv`,label:`CSV file`},{extension:`.xml`,label:`XML file`},{extension:`.yml`,label:`YAML file`}],Dc=null,Oc=0,kc=new Set;function Ac(){Oc+=1;for(let e of kc)e()}function jc(e){return kc.add(e),()=>kc.delete(e)}function Mc(){return Oc}function Nc(e){Dc=e,Ac()}function Pc(){return(0,_.useSyncExternalStore)(jc,Mc,Mc),Dc}var Fc=m(),Ic=En`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,Lc=jn`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Rc=jn`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,zc=jn`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Bc=jn`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Vc=jn`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Hc=jn`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Uc=jn`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,Wc=jn`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,Gc=En`animation: ${Lc} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Kc=En`animation: ${Rc} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,qc=En`animation: ${zc} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;En`animation: ${Bc} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var Jc=En`animation: ${Vc} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Yc=En`animation: ${Hc} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Xc=En`animation: ${Uc} 140ms ease-out;`,Zc=En`animation: ${Wc} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function Qc({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,_.useState)([]),s=(0,_.useRef)(void 0);if((0,_.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,_.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,Y.jsx)(cl,{},`group-rule-${i}`)),n.push((0,Y.jsx)(sl,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,Y.jsx)(cl,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,Y.jsxs)(il,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,Y.jsx)(al,{children:e.loading?(0,Y.jsx)(ll,{}):e.icon}),(0,Y.jsx)(ol,{children:e.label}),a?(0,Y.jsx)(ys,{size:12}):e.checked&&(0,Y.jsx)(Ds,{size:12})]},`${e.label}-${i}`))}),n};return(0,Fc.createPortal)((0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)($c,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(el,{children:r.map((e,t)=>(0,Y.jsxs)(tl,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,Y.jsx)(nl,{children:e.icon}),(0,Y.jsx)(rl,{children:e.label})]},`${e.label}-${t}`))}),(0,Y.jsx)(cl,{})]}),m(n,0)]}),a.map((e,t)=>(0,Y.jsx)($c,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var $c=q.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${Ic}
    ${Kc}
    transform-origin: top left;
`,el=q.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,tl=q.button`
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
`,nl=q.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,rl=q.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,il=q.button`
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
`,al=q.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,ol=q.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,sl=q.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,cl=q.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,ll=q.span`
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
`;function ul({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:o,onOpenFile:s,onRename:c,onDelete:l,onCopy:u,onPaste:d,onCreateFolder:f,onCreateFile:p,creationOnly:m=!1,onRefresh:h,onAddToTray:g,allowCompression:v=!1,onCompressTo:y,onArchiveCreated:b}){let x=qn(),S=Pc(),C=ta(t),[w,T]=(0,_.useState)({verbs:[],safe:!0,loading:!1}),[E,D]=(0,_.useState)({recommended:[],other:[],loading:!1}),[O,k]=(0,_.useState)(null),ee=(0,_.useRef)(0),A=(0,_.useRef)(0),j=e?.paths.length===1,te=e?.background?t?[t]:[]:e?.paths??[];if((0,_.useEffect)(()=>{if(!e){T({verbs:[],safe:!0,loading:!1}),D({recommended:[],other:[],loading:!1});return}let t=++ee.current;T({verbs:[],safe:!0,loading:te.length>0&&!C}),te.length>0&&!C&&xi(te).then(e=>{ee.current===t&&T({...e,loading:!1})},()=>{ee.current===t&&T({verbs:[],safe:!0,loading:!1})});let r=++A.current;!C&&j&&n?(D({recommended:[],other:[],loading:!0}),gi(n.path).then(e=>{A.current===r&&D({...e,loading:!1})},()=>{A.current===r&&D({recommended:[],other:[],loading:!1})})):D({recommended:[],other:[],loading:!1})},[e,j,n?.path,n?.isDirectory,te.length,C]),(0,_.useEffect)(()=>{if(!e||e.background||!j||!n?.isDirectory){k(null);return}let t=!0;return li(n.path).then(e=>{t&&k(e)},()=>{t&&k(null)}),()=>{t=!1}},[e,j,n?.path,n?.isDirectory]),!e)return null;let M=[],N=[],ne=()=>{if(!j||!n)return`Archive`;let e=Zi(n.path);if(n.isDirectory)return e;let t=e.lastIndexOf(`.`);return t>0?e.slice(0,t):e},P=async e=>{let n=await Ci(e,{directory:t,name:ne(),format:`zip`,level:5});n.ok&&n.path?b?.(n.path,!0):Cc(n.error??x(`Could not create the archive.`))},re=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},ie=async()=>{if(!n||O===null)return;let e=await ui(n.path,!O);e.ok?(k(e.enabled),h?.()):Cc(e.error??x(`Could not change the case sensitivity.`))},F=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await di(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await di(e,t,`${a}\\${fl(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?h?.():Cc(o.error??x(`Could not create the link.`))},I=async e=>{if(!n)return;let r=await vc(t);r&&await F(e,n.path,r,Zi(n.path),e.endsWith(`-copy`))},ae=async e=>{let n=S?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=ia(r.path.replace(/[\\/][^\\/]+$/,``))===ia(t);await F(n,r.path,t,Zi(r.path),i&&!a)}},oe=async()=>{let t=(await ii(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&Nc({paths:t})},L=()=>{let e=S?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:x(`Cancel selected link`),icon:(0,Y.jsx)(Os,{size:14}),onSelect:()=>Nc(null)},...t?[{label:x(`Hard link`),icon:(0,Y.jsx)(ds,{size:14}),separatorBefore:!0,onSelect:()=>void ae(`hard`)}]:[],{label:x(`Symbolic link`),icon:(0,Y.jsx)(ds,{size:14}),separatorBefore:!t,onSelect:()=>void ae(`symbolic-file`)},...n?[{label:x(`Directory junction`),icon:(0,Y.jsx)(us,{size:14}),onSelect:()=>void ae(`junction`)},{label:x(`Smart copy`),icon:(0,Y.jsx)(lc,{size:14}),separatorBefore:!0,onSelect:()=>void ae(`smart-copy`)},{label:x(`Smart mirror`),icon:(0,Y.jsx)(lc,{size:14}),onSelect:()=>void ae(`smart-mirror`)},{label:x(`Multi-version smart copy`),icon:(0,Y.jsx)(lc,{size:14}),onSelect:()=>void ae(`multi-version-smart-copy`)},{label:x(`Hardlink copy`),icon:(0,Y.jsx)(lc,{size:14}),separatorBefore:!0,onSelect:()=>void ae(`hard-copy`)},{label:x(`Symbolic link copy`),icon:(0,Y.jsx)(lc,{size:14}),onSelect:()=>void ae(`symbolic-copy`)}]:[]]};if(e.background){if(f&&N.push({label:x(`New folder`),icon:(0,Y.jsx)(gs,{size:16}),shortcut:ji(r.newFolder),onSelect:f}),p||f){let e=[];f&&(e.push({label:x(`Folder`),icon:(0,Y.jsx)(us,{size:14}),onSelect:()=>f(!1)}),C||e.push({label:x(`Case-sensitive folder`),icon:(0,Y.jsx)(us,{size:14}),onSelect:()=>f(!0)})),p&&e.push(...Ec.map((e,t)=>({label:`${x(e.label)} (${e.extension})`,icon:(0,Y.jsx)(ds,{size:14}),separatorBefore:t===0,onSelect:()=>p(e.extension)}))),M.push({label:x(`New`),icon:(0,Y.jsx)(gs,{size:14}),children:e,onSelect:()=>void 0})}if(C||M.push({label:x(`Create link`),icon:(0,Y.jsx)(fc,{size:14}),disabled:!S,children:L(),onSelect:()=>void 0}),m)return(0,Y.jsx)(Qc,{items:M,onClose:a,quick:N,x:e.x,y:e.y});!C&&v&&(M.push({label:x(`Open in Terminal`),icon:(0,Y.jsx)(ic,{size:14}),onSelect:()=>void hi(t)}),M.push({label:x(`Show in Explorer`),icon:(0,Y.jsx)(us,{size:14}),separatorBefore:!0,onSelect:()=>void bi(t)})),d&&N.push({label:x(`Paste`),icon:(0,Y.jsx)(dc,{size:16}),disabled:!i,shortcut:ji(r.paste),onSelect:()=>d(t)}),h&&N.push({label:x(`Refresh`),icon:(0,Y.jsx)(hs,{size:16}),shortcut:ji(r.refresh),onSelect:h}),C||N.push({label:x(`Properties`),icon:(0,Y.jsx)(bs,{size:16}),shortcut:ji(r.properties),onSelect:()=>void pi([t])})}else{if(o&&M.push({label:x(`Open`),icon:(0,Y.jsx)(vs,{size:14}),onSelect:()=>{n?.isDirectory?o(n.path):n&&s?.(n.path)}}),n?.isDirectory&&(o&&M.push({label:x(`Open in new tab`),icon:(0,Y.jsx)(gs,{size:14}),onSelect:()=>o(n.path,!0)}),d&&M.push({label:x(`Paste into folder`),icon:(0,Y.jsx)(dc,{size:14}),disabled:!i,onSelect:()=>d(n.path)}),C||M.push({label:x(`Open in Terminal`),icon:(0,Y.jsx)(ic,{size:14}),onSelect:()=>void hi(n.path)})),!C&&j&&n){let e=[];if(E.loading)e.push({label:x(`Loading apps…`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of E.recommended)e.push({label:t.name,group:x(`Suggested apps`),icon:t.icon?(0,Y.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,Y.jsx)(Ls,{size:14}),onSelect:()=>void _i(n.path,t.path).then(e=>{e||mi(n.path)})});for(let t of E.other)e.push({label:t.name,group:x(`Other apps`),icon:t.icon?(0,Y.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,Y.jsx)(Ls,{size:14}),onSelect:()=>void _i(n.path,t.path).then(e=>{e||mi(n.path)})})}e.push({label:x(`Choose another app…`),icon:(0,Y.jsx)(Ls,{size:14}),separatorBefore:!0,onSelect:()=>void mi(n.path)}),M.push({label:x(`Open with`),icon:(0,Y.jsx)(Ls,{size:14}),children:e,onSelect:()=>void mi(n.path)})}if(C||M.push({label:x(`Compress`),icon:(0,Y.jsx)(Fs,{size:14}),separatorBefore:!0,children:[{label:x(`Compress to ZIP`),icon:(0,Y.jsx)(Fs,{size:14}),onSelect:()=>void P(e.paths)},{label:x(`Compress to…`),icon:(0,Y.jsx)(Fs,{size:14}),onSelect:()=>y?.(e.paths,ne())}],onSelect:()=>void 0}),!C&&(e?.paths.length??0)>0){let e=[{label:x(`Select link source`),icon:(0,Y.jsx)(fc,{size:14}),onSelect:()=>void oe()},...S?[{label:x(`Cancel selected link`),icon:(0,Y.jsx)(Os,{size:14}),onSelect:()=>Nc(null)}]:[],...j&&n?n.isDirectory?[{label:x(`Symbolic link`),icon:(0,Y.jsx)(us,{size:14}),separatorBefore:!0,onSelect:()=>void I(`symbolic-folder`)},{label:x(`Directory junction`),icon:(0,Y.jsx)(us,{size:14}),onSelect:()=>void I(`junction`)},{label:x(`Smart copy`),icon:(0,Y.jsx)(lc,{size:14}),separatorBefore:!0,onSelect:()=>void I(`smart-copy`)},{label:x(`Smart mirror`),icon:(0,Y.jsx)(lc,{size:14}),onSelect:()=>void I(`smart-mirror`)},{label:x(`Multi-version smart copy`),icon:(0,Y.jsx)(lc,{size:14}),onSelect:()=>void I(`multi-version-smart-copy`)},{label:x(`Hardlink copy`),icon:(0,Y.jsx)(lc,{size:14}),separatorBefore:!0,onSelect:()=>void I(`hard-copy`)},{label:x(`Symbolic link copy`),icon:(0,Y.jsx)(lc,{size:14}),onSelect:()=>void I(`symbolic-copy`)}]:[{label:x(`Symbolic link`),icon:(0,Y.jsx)(ds,{size:14}),separatorBefore:!0,onSelect:()=>void I(`symbolic-file`)},{label:x(`Hard link`),icon:(0,Y.jsx)(ds,{size:14}),onSelect:()=>void I(`hard`)}]:[]];M.push({label:x(`Create link`),icon:(0,Y.jsx)(fc,{size:14}),children:e,onSelect:()=>void 0})}!C&&n?.isDirectory&&O!==null&&M.push({label:x(`Case-sensitive names`),icon:(0,Y.jsx)(us,{size:14}),checked:O,onSelect:()=>void ie()}),M.push({label:x(`Copy as path`),icon:(0,Y.jsx)(lc,{size:14}),onSelect:()=>void re(e.paths)}),g&&M.push({label:x(`Add to file tray`),icon:(0,Y.jsx)(oc,{size:14}),onSelect:()=>g(e.paths)}),C||M.push({label:x(`Show in Explorer`),icon:(0,Y.jsx)(us,{size:14}),separatorBefore:!0,onSelect:()=>void bi(e.paths[0])}),u&&N.push({label:x(`Cut`),icon:(0,Y.jsx)(uc,{size:16}),shortcut:ji(r.cut),onSelect:()=>u(e.paths,!0)},{label:x(`Copy`),icon:(0,Y.jsx)(lc,{size:16}),shortcut:ji(r.copy),onSelect:()=>u(e.paths,!1)}),j&&n&&c&&N.push({label:x(`Rename`),icon:(0,Y.jsx)(Gs,{size:16}),shortcut:ji(r.rename),onSelect:()=>c(n.path)}),l&&N.push({label:x(`Delete`),icon:(0,Y.jsx)(Es,{size:16}),danger:!0,shortcut:ji(r.delete),onSelect:()=>l(e.paths)}),C||N.push({label:x(`Properties`),icon:(0,Y.jsx)(bs,{size:16}),shortcut:ji(r.properties),onSelect:()=>void pi(e.paths)})}if(w.loading)M.push({label:x(`More actions`),icon:(0,Y.jsx)(Ls,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(w.verbs.length>0){let e={items:[],children:new Map};for(let t of w.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,Y.jsx)(dl,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void Si(te,w.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];M.push({label:x(w.safe?`More actions`:`More actions (extensions)`),icon:(0,Y.jsx)(Ls,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,Y.jsx)(Qc,{items:M,onClose:a,quick:N,x:e.x,y:e.y})}function dl({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,Y.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,Y.jsx)(vs,{size:14});case`document`:return(0,Y.jsx)(Us,{size:14});case`cut`:return(0,Y.jsx)(uc,{size:14});case`copy`:return(0,Y.jsx)(lc,{size:14});case`paste`:return(0,Y.jsx)(dc,{size:14});case`trash`:return(0,Y.jsx)(Es,{size:14});case`pencil`:return(0,Y.jsx)(Gs,{size:14});case`gear`:return(0,Y.jsx)(bs,{size:14});case`star`:return(0,Y.jsx)(Qs,{size:14});case`pin`:return(0,Y.jsx)(xs,{size:14});case`executable`:return(0,Y.jsx)(Ls,{size:14});case`share`:return(0,Y.jsx)(fc,{size:14});case`arrow`:return(0,Y.jsx)(vs,{size:14});default:return(0,Y.jsx)(ks,{size:14})}}function fl(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function pl({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let[c,l]=(0,_.useState)(null),u=(0,_.useRef)(null),d=t.find(t=>t.value===e)??t[0];return(0,_.useEffect)(()=>{if(!c)return;let e=()=>l(null),t=t=>{let n=t.target;n instanceof Node&&u.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[c]),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(ml,{$icon:a!==void 0,"aria-expanded":c!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(c){l(null);return}let e=u.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;l({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:u,style:i&&!a?{width:i}:void 0,title:o??d?.title,type:`button`,children:[a===void 0?(0,Y.jsx)(hl,{children:d?.label??``}):(0,Y.jsx)(gl,{children:a}),a===void 0&&(0,Y.jsx)(_l,{children:(0,Y.jsx)(ys,{size:11})})]}),c&&(0,Fc.createPortal)((0,Y.jsx)(vl,{"aria-label":`options`,"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:c.bottom,left:c.left,minWidth:c.width,top:c.top},children:t.map(t=>(0,Y.jsxs)(yl,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),l(null)},role:`option`,title:t.title,type:`button`,children:[(0,Y.jsx)(bl,{children:t.label}),t.value===e&&(0,Y.jsx)(Ds,{size:11})]},t.value))}),document.body)]})}var ml=q.button`
    display: inline-flex;
    align-items: center;
    justify-content: ${({$icon:e})=>e?`center`:`space-between`};
    gap: 10px;
    min-width: ${({$icon:e})=>e?`34px`:`120px`};
    width: ${({$icon:e})=>e?`34px`:void 0};
    height: 32px;
    padding: ${({$icon:e})=>e?`0`:`0 9px 0 10px`};
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background: ${({$icon:e})=>e?`transparent`:`var(--bg-input)`};
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;
    transition: border-color 130ms ease, background 130ms ease, color 130ms ease, transform 130ms ease;

    &:hover {
        border-color: ${({$icon:e})=>`var(--border-color-hover)`};
        background: ${({$icon:e})=>e?`rgba(var(--accent-rgb), 0.10)`:`var(--bg-input)`};
        color: var(--text-primary);
        transform: ${({$icon:e})=>e?`translateY(-1px)`:`none`};
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }

    &:disabled {
        opacity: 0.55;
        cursor: default;
    }
`,hl=q.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,gl=q.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,_l=q.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,vl=q.div`
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
    ${Kc}
`,yl=q.button`
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
`,bl=q.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,xl=[{value:`zip`,label:`ZIP archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`ZIPX archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`7z archive (LZMA2)`,extension:`.7z`,level:!1},{value:`tar`,label:`TAR archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`TAR + GZip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`TAR + BZip2`,extension:`.tar.bz2`,level:!1}],Sl=[{value:`default`,label:`Automatic`},{value:`store`,label:`Store (no compression)`},{value:`deflate`,label:`Deflate`},{value:`deflate64`,label:`Deflate64`},{value:`bzip2`,label:`BZip2`},{value:`lzma`,label:`LZMA`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`PPMd`}],Cl=[{value:`none`,label:`None`},{value:`zipcrypto`,label:`ZipCrypto`},{value:`aes128`,label:`AES-128`},{value:`aes192`,label:`AES-192`},{value:`aes256`,label:`AES-256`}],wl=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],Tl=[{value:`0`,label:`Store (no compression)`},{value:`1`,label:`Fastest`},{value:`5`,label:`Normal`},{value:`9`,label:`Maximum`},{value:`-1`,label:`Automatic`}];function El({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=qn(),a=(0,_.useRef)(null),[o,s]=(0,_.useState)(e),[c,l]=(0,_.useState)(t),[u,d]=(0,_.useState)(`zip`),[f,p]=(0,_.useState)(`5`),[m,h]=(0,_.useState)(`default`),[g,v]=(0,_.useState)(`none`),[y,b]=(0,_.useState)(``),[x,S]=(0,_.useState)(`0`),[C,w]=(0,_.useState)(!1);(0,_.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let T=xl.find(e=>e.value===u)??xl[0],E=u===`zip`||u===`zipx`,D=g!==`none`,O=E||u===`7z`,k=u===`zip`||u===`7z`,ee=async()=>{if(C||!c.trim()||!o||D&&y.length===0)return;w(!0);let e=await r({directory:o,name:c.trim(),format:u,level:T.level?Number(f):0,method:E?m:null,encryption:O?g:`none`,password:D?y:void 0,splitSize:k?Number(x):0});w(!1),e&&n()};return(0,Fc.createPortal)((0,Y.jsx)(Dl,{onPointerDown:e=>{e.target===e.currentTarget&&!C&&n()},children:(0,Y.jsxs)(Ol,{"aria-modal":`true`,role:`dialog`,children:[(0,Y.jsx)(kl,{children:i(`Compress to…`)}),(0,Y.jsxs)(Al,{children:[(0,Y.jsx)(jl,{children:i(`Archive name`)}),(0,Y.jsx)(Ml,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&ee()}}),(0,Y.jsx)(Nl,{children:T.extension})]}),(0,Y.jsxs)(Al,{children:[(0,Y.jsx)(jl,{children:i(`Format`)}),(0,Y.jsx)(pl,{onChange:e=>d(e),options:xl.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,Y.jsxs)(Al,{children:[(0,Y.jsx)(jl,{children:i(`Method`)}),(0,Y.jsx)(pl,{disabled:!E,onChange:h,options:Sl.map(e=>({...e,label:i(e.label)})),value:E?m:`default`,width:236,zIndex:3700})]}),(0,Y.jsxs)(Al,{children:[(0,Y.jsx)(jl,{children:i(`Encryption`)}),(0,Y.jsx)(pl,{disabled:!O,onChange:e=>{v(e),e===`none`&&b(``)},options:Cl.map(e=>({...e,label:i(e.label)})),value:O?g:`none`,width:236,zIndex:3700})]}),D&&(0,Y.jsxs)(Al,{children:[(0,Y.jsx)(jl,{children:i(`Password`)}),(0,Y.jsx)(Ml,{autoFocus:!0,onChange:e=>b(e.target.value),type:`password`,value:y})]}),(0,Y.jsxs)(Al,{children:[(0,Y.jsx)(jl,{children:i(`Split volumes`)}),(0,Y.jsx)(pl,{disabled:!k,onChange:S,options:wl.map(e=>({...e,label:i(e.label)})),value:k?x:`0`,width:236,zIndex:3700})]}),(0,Y.jsxs)(Al,{children:[(0,Y.jsx)(jl,{children:i(`Compression level`)}),(0,Y.jsx)(pl,{disabled:!T.level,onChange:p,options:Tl.map(e=>({...e,label:i(e.label)})),value:T.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,Y.jsxs)(Al,{$stack:!0,children:[(0,Y.jsx)(jl,{children:i(`Destination`)}),(0,Y.jsxs)(Pl,{children:[(0,Y.jsx)(Fl,{title:o,children:o}),(0,Y.jsx)(Ll,{disabled:C,onClick:()=>void vc(o).then(e=>{e&&s(e)}),type:`button`,children:i(`Choose folder…`)})]})]}),(0,Y.jsxs)(Il,{children:[(0,Y.jsx)(Ll,{disabled:C,onClick:n,type:`button`,children:i(`Cancel`)}),(0,Y.jsx)(Rl,{disabled:C||!c.trim()||D&&y.length===0,onClick:()=>void ee(),type:`button`,children:i(C?`Compressing…`:`Compress`)})]})]})}),document.body)}var Dl=q.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Xc}
`,Ol=q.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Gc}
`,kl=q.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Al=q.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,jl=q.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,Ml=q.input`
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
`,Nl=q.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,Pl=q.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,Fl=q.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Il=q.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,Ll=q.button`
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
`,Rl=q(Ll)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function zl({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=qn(),c=(0,_.useRef)(null);return(0,_.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,Fc.createPortal)((0,Y.jsx)(Bl,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,Y.jsxs)(Vl,{role:`alertdialog`,"aria-modal":`true`,children:[(0,Y.jsx)(Hl,{children:t}),(0,Y.jsx)(Ul,{children:n}),(0,Y.jsxs)(Wl,{children:[(0,Y.jsx)(Gl,{onClick:o,type:`button`,children:s(`Cancel`)}),(0,Y.jsx)(Gl,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var Bl=q.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Xc}
`,Vl=q.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Gc}
`,Hl=q.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Ul=q.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Wl=q.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Gl=q.button`
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
`,Kl=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),ql=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),Jl=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),Yl=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function Xl({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=qn(),[l,u]=(0,_.useState)(!1),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(!1),[h,g]=(0,_.useState)(0),[v,y]=(0,_.useState)(0),[b,x]=(0,_.useState)(null),[S,C]=(0,_.useState)(!1),[w,T]=(0,_.useState)(!1),E=(0,_.useRef)(null),D=(0,_.useRef)(null),O=(0,_.useRef)(null),[k,ee]=(0,_.useState)(()=>{let e=Xa(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),A=e?.path??null,j=Sa(A),te=e?Zl(e.name):``,M=!!e&&!e.isDirectory&&Kl.has(te),N=!!e&&!e.isDirectory&&ql.has(te),ne=!!e&&!e.isDirectory&&Jl.has(te),P=!!e&&!e.isDirectory&&Yl.has(te),re=!!e&&!e.isDirectory&&te===`pdf`,ie=Da(M?j:null,512,e?.modified??0),F=Oa(ne?j:null,e?.modified??0,te),I=Oa(M||N?j:null,e?.modified??0,te),ae=ka(re?j:null,e?.modified??0),oe=xa(!M&&!N&&!ne&&!P&&!re?j:null,e?.isDirectory??!1);if((0,_.useEffect)(()=>{u(!1),f(!1),m(!1),g(0),y(0),T(!1)},[A]),(0,_.useEffect)(()=>{if(!j||!P){x(null),C(!1);return}let e=!0;return C(!0),x(null),dr(j).then(t=>{e&&(x(t),C(!1))},()=>{e&&(x({text:null,truncated:!1,error:`Could not read this file.`}),C(!1))}),()=>{e=!1}},[j,P]),!e&&!s)return null;let L=e=>{D.current={x:e.clientX,width:t},e.currentTarget.setPointerCapture(e.pointerId)},se=e=>{let t=D.current;t&&n(Math.max(220,Math.min(560,t.width+t.x-e.clientX)))},ce=e=>{D.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},le=e=>{O.current={y:e.clientY,height:k},e.currentTarget.setPointerCapture(e.pointerId)},ue=e=>{let t=O.current;if(!t)return;let n=Math.max(80,Math.min(560,t.height+e.clientY-t.y));ee(n),Za(`yafm.preview.media.height`,n)},de=e=>{O.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,Y.jsxs)($l,{children:[r&&(0,Y.jsx)(eu,{onPointerDown:L,onPointerMove:se,onPointerUp:ce,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,Y.jsx)(tu,{style:{width:r?t:0},children:(0,Y.jsxs)(nu,{children:[(0,Y.jsx)(us,{size:56}),(0,Y.jsx)(`span`,{children:s})]})})]});let R=()=>{let e=E.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,Y.jsxs)($l,{children:[r&&(0,Y.jsx)(eu,{onPointerDown:L,onPointerMove:se,onPointerUp:ce,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,Y.jsxs)(tu,{style:{width:r?t:0},children:[(0,Y.jsx)(ru,{style:{height:k},children:M&&I&&!l?(0,Y.jsxs)(au,{onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),children:[(0,Y.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:R,onDurationChange:e=>g(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{g(e.currentTarget.duration||0),y(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>y(e.currentTarget.currentTime),playsInline:!0,poster:ie??void 0,preload:`metadata`,ref:E,src:I}),!d&&(0,Y.jsx)(ou,{onClick:R,title:c(`Play`),type:`button`,children:(0,Y.jsx)(pc,{size:28})}),p&&(0,Y.jsxs)(su,{onClick:e=>e.stopPropagation(),children:[(0,Y.jsxs)(cu,{children:[(0,Y.jsx)(`span`,{children:Ql(v)}),(0,Y.jsx)(`span`,{children:Ql(h)})]}),(0,Y.jsx)(lu,{"aria-label":c(`Seek`),max:h||0,min:0,onChange:e=>{let t=E.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,y(n)},step:.1,type:`range`,value:Math.min(v,h||0)})]})]}):N&&I?(0,Y.jsx)(`audio`,{controls:!0,src:I}):ne&&F?(0,Y.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:F}):re&&ae&&!w?(0,Y.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>T(!0),src:ae}):re?(0,Y.jsx)(ds,{size:64}):P?(0,Y.jsx)(uu,{children:S||!b?(0,Y.jsx)(fu,{children:c(`Loading…`)}):b.error?(0,Y.jsx)(fu,{children:b.error}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(du,{children:b.text}),b.truncated&&(0,Y.jsx)(fu,{children:c(`Showing the first 256 KB.`)})]})}):M&&ie?(0,Y.jsx)(`img`,{alt:``,src:ie}):oe?(0,Y.jsx)(`img`,{alt:``,src:oe}):e.isDirectory?(0,Y.jsx)(us,{size:64}):(0,Y.jsx)(ds,{size:64})}),(0,Y.jsx)(iu,{onDoubleClick:()=>{ee(210),Za(`yafm.preview.media.height`,210)},onPointerDown:le,onPointerMove:ue,onPointerUp:de,title:c(`Drag to resize; double-click to reset`)}),(0,Y.jsxs)(pu,{children:[(0,Y.jsx)(mu,{title:e.path,children:e.name}),o&&(0,Y.jsx)(hu,{children:o}),(0,Y.jsx)(gu,{children:e.fields.map(e=>(0,Y.jsxs)(_u,{children:[(0,Y.jsx)(vu,{children:e.label}),(0,Y.jsx)(yu,{title:e.value,children:e.value})]},e.label))})]})]})]})}function Zl(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function Ql(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var $l=q.div`
    display: flex;
    flex-shrink: 0;
    align-self: stretch;
    min-height: 0;
`,eu=q.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,tu=q.aside`
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
    background: var(--bg-secondary);
    transition: width 180ms cubic-bezier(0.22, 1, 0.36, 1);
`,nu=q.div`
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
`,ru=q.div`
    position: relative;
    display: grid;
    place-items: center;
    height: 210px;
    flex-shrink: 0;
    overflow: hidden;
    border-bottom: 1px solid var(--border-color);
    background: var(--bg-secondary);
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
`,iu=q.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,au=q.div`
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
`,ou=q.button`
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
`,su=q.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 24px 10px 8px;
    background: linear-gradient(to top, rgba(var(--bg-rgb), 0.92), rgba(var(--bg-rgb), 0));
`,cu=q.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,lu=q.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,uu=q.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: var(--bg-secondary);
`,du=q.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,fu=q.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,pu=q.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,mu=q.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,hu=q.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,gu=q.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,_u=q.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,vu=q.span`
    color: var(--text-muted);
`,yu=q.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,bu=[`quick`,`frequent`,`recent`,`home`,`drives`],xu=bu,Su={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`},Cu={folder:e=>(0,Y.jsx)(us,{size:e}),home:e=>(0,Y.jsx)(ls,{size:e}),desktop:e=>(0,Y.jsx)(Ks,{size:e}),documents:e=>(0,Y.jsx)(qs,{size:e}),downloads:e=>(0,Y.jsx)(Js,{size:e}),pictures:e=>(0,Y.jsx)(Ys,{size:e}),music:e=>(0,Y.jsx)(Xs,{size:e}),videos:e=>(0,Y.jsx)(Zs,{size:e}),drive:e=>(0,Y.jsx)(fs,{size:e}),image:e=>(0,Y.jsx)(Ms,{size:e}),video:e=>(0,Y.jsx)(Ns,{size:e}),audio:e=>(0,Y.jsx)(Ps,{size:e}),text:e=>(0,Y.jsx)(As,{size:e}),code:e=>(0,Y.jsx)(js,{size:e}),clock:e=>(0,Y.jsx)(ws,{size:e}),star:e=>(0,Y.jsx)(Qs,{size:e}),file:e=>(0,Y.jsx)(ds,{size:e}),archive:e=>(0,Y.jsx)(Fs,{size:e}),pdf:e=>(0,Y.jsx)(Is,{size:e}),executable:e=>(0,Y.jsx)(Ls,{size:e}),font:e=>(0,Y.jsx)(Rs,{size:e}),database:e=>(0,Y.jsx)(zs,{size:e}),config:e=>(0,Y.jsx)(Bs,{size:e}),spreadsheet:e=>(0,Y.jsx)(Vs,{size:e}),presentation:e=>(0,Y.jsx)(Hs,{size:e}),document:e=>(0,Y.jsx)(Us,{size:e}),app:e=>(0,Y.jsx)(ks,{size:e}),gear:e=>(0,Y.jsx)(bs,{size:e}),pin:e=>(0,Y.jsx)(xs,{size:e}),trash:e=>(0,Y.jsx)(Es,{size:e}),overview:e=>(0,Y.jsx)(Ws,{size:e}),book:e=>(0,Y.jsx)($s,{size:e}),briefcase:e=>(0,Y.jsx)(ec,{size:e}),cloud:e=>(0,Y.jsx)(tc,{size:e}),gamepad:e=>(0,Y.jsx)(nc,{size:e}),camera:e=>(0,Y.jsx)(rc,{size:e}),terminal:e=>(0,Y.jsx)(ic,{size:e}),server:e=>(0,Y.jsx)(ac,{size:e}),package:e=>(0,Y.jsx)(oc,{size:e}),globe:e=>(0,Y.jsx)(sc,{size:e}),heart:e=>(0,Y.jsx)(cc,{size:e})};function wu(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function Tu(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??bu)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||xu.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=wu(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${Su[n]??n}${Eu(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Eu(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Du({panel:e,size:t=16}){let n=Ca(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,Y.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?Cu[e.icon]:void 0;if(r)return(0,Y.jsx)(Y.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,Y.jsx)(us,{size:t});case`recent`:return(0,Y.jsx)(ws,{size:t});case`frequent`:return(0,Y.jsx)(Qs,{size:t});case`drives`:return(0,Y.jsx)(fs,{size:t});case`home`:return(0,Y.jsx)(ls,{size:t});default:return(0,Y.jsx)(us,{size:t})}}function Ou({place:e,size:t=18}){let n=Ca(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,Y.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&Cu[e.icon]?(0,Y.jsx)(Y.Fragment,{children:Cu[e.icon](t)}):(0,Y.jsx)(us,{size:t})}var ku=`#64748b`;function Au(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function ju({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=qn(),[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)(`#2dd4bf`),f=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},v=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},y=Math.max(8,Math.min(e,window.innerWidth-272)),b=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,Fc.createPortal)((0,Y.jsxs)(Mu,{"data-tag-menu":`true`,ref:f,style:{left:y,top:b},children:[(0,Y.jsxs)(Nu,{children:[(0,Y.jsx)(`span`,{children:s(`Tags`)}),(0,Y.jsx)(Pu,{onClick:o,title:s(`Close`),type:`button`,children:(0,Y.jsx)(Os,{size:11})})]}),(0,Y.jsxs)(Fu,{children:[p.length===0&&(0,Y.jsx)(zu,{children:s(`No tags yet.`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,Y.jsxs)(Iu,{children:[(0,Y.jsx)(Lu,{"aria-label":s(`Color of {tag}`,{tag:e}),onChange:t=>g(e,t.target.value),title:s(`Change this tag's color`),type:`color`,value:t}),(0,Y.jsxs)(Ru,{$color:t,$ink:Au(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,Y.jsx)(Ds,{size:11}),(0,Y.jsx)(`span`,{children:e})]})]},e)})]}),(0,Y.jsxs)(Bu,{children:[(0,Y.jsx)(Lu,{"aria-label":s(`Color of the new tag`),onChange:e=>d(e.target.value),title:s(`Color of the new tag`),type:`color`,value:u}),(0,Y.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),v())},placeholder:s(`New tag`),spellCheck:!1,value:c}),(0,Y.jsx)(Vu,{onClick:v,type:`button`,children:s(`Add`)})]})]}),document.body)}var Mu=q.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    ${Gc}
`,Nu=q.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,Pu=q.button`
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
`,Fu=q.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,Iu=q.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Lu=q.input`
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
`,Ru=q.button`
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
`,zu=q.span`
    font-size: 11px;
    color: var(--text-muted);
`,Bu=q.div`
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
`,Vu=q.button`
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
`,Hu={file:ds,folder:us,text:As,code:js,image:Ms,video:Ns,audio:Ps,archive:Fs,pdf:Is,executable:Ls,font:Rs,database:zs,config:Bs,spreadsheet:Vs,presentation:Hs,document:Us},Uu={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Wu(e){let t=e.lastIndexOf(`.`);return t>0?Uu[e.slice(t).toLowerCase()]??`file`:`file`}function Gu({name:e,size:t}){let n=Hu[e??`file`]??ds;return(0,Y.jsx)(n,{size:t})}function Ku({path:e,name:t,isDirectory:n,size:r=18}){let i=xa(e,n);return i?(0,Y.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,Y.jsx)(us,{size:r}):(0,Y.jsx)(Gu,{name:Wu(t),size:r})}var qu=`application/x-yafm-paths`,Ju=[qu,`text/uri-list`];function Yu(e){return e?.types.some(e=>Ju.includes(e.toLowerCase()))??!1}function Xu(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(qu);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(Qu).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var Zu=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function Qu(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return Zu?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function $u(e,t,n=!0){e.dataTransfer.setData(qu,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function ed({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let p=qn(),[m,h]=(0,_.useState)(()=>new Set),[g,v]=(0,_.useState)(!1),y=(0,_.useRef)(null),b=(0,_.useMemo)(()=>e.filter(e=>m.has(e.path)),[e,m]),x=(0,_.useMemo)(()=>t.filter(e=>m.has(e.path)),[t,m]),S=(0,_.useRef)(null);if((0,_.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=S.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&Yu(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=Xu(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let C=new Set([...e,...t].map(e=>e.path)),w=C.size>0&&[...C].every(e=>m.has(e)),T=C.size,E=e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},D=()=>{h(w?new Set:C)},O=e=>{y.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),v(!0)},k=e=>{let t=y.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},ee=e=>{y.current&&(y.current=null,v(!1),e.currentTarget.releasePointerCapture(e.pointerId))},A=()=>{let e=b.map(e=>e.path);e.length!==0&&(c(e),h(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},j=()=>{let e=b.map(e=>e.path);e.length!==0&&d(e)},te=()=>{let e=new Map;for(let t of b)e.set(t.path,!0);for(let t of x)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),h(new Set)},M=(e,t)=>{let n=m.has(e.path);return(0,Y.jsxs)(fd,{$checked:n,draggable:!0,onClick:()=>E(e.path),onDragStart:r=>{$u(r,n&&m.size>0?[...new Set([...b,...x].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,Y.jsx)(pd,{$checked:n,onClick:t=>{t.stopPropagation(),E(e.path)},type:`button`,children:n&&(0,Y.jsx)(Ds,{size:8})}),(0,Y.jsx)(Ku,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,Y.jsxs)(md,{children:[(0,Y.jsx)(hd,{children:e.name}),(0,Y.jsx)(gd,{children:Qi(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},N=e=>{Yu(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,Y.jsxs)(td,{$dragging:g,"data-tray":`true`,ref:S,style:{left:i.x,top:i.y},onDragEnter:N,onDragOver:N,onDrop:e=>{let{paths:t}=Xu(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,Y.jsxs)(nd,{onPointerDown:O,onPointerMove:k,onPointerUp:ee,children:[(0,Y.jsxs)(rd,{children:[(0,Y.jsx)(oc,{size:13}),p(`Tray`),(0,Y.jsx)(id,{children:T})]}),(0,Y.jsxs)(ad,{onPointerDown:e=>e.stopPropagation(),children:[(0,Y.jsx)(od,{onClick:D,title:p(w?`Select none`:`Select all`),type:`button`,children:p(w?`None`:`All`)}),(0,Y.jsx)(od,{onClick:l,title:p(`Remove everything from the tray`),type:`button`,children:p(`Clear`)}),(0,Y.jsx)(sd,{onClick:u,title:p(`Hide the tray`),type:`button`,children:(0,Y.jsx)(Os,{size:10})})]})]}),(0,Y.jsxs)(cd,{children:[(0,Y.jsxs)(ud,{children:[p(`In this app`),(0,Y.jsx)(id,{children:e.length})]}),e.length===0&&(0,Y.jsx)(ld,{children:p(`Drag files or folders here`)}),e.map(e=>M(e,!0)),t.length>0&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(ud,{$clipboard:!0,children:[p(`Clipboard`),(0,Y.jsx)(id,{children:t.length}),n&&(0,Y.jsx)(dd,{children:p(`cut`)})]}),t.map(e=>M(e,n))]})]}),(0,Y.jsxs)(_d,{children:[(0,Y.jsx)(vd,{$plain:!0,disabled:b.length===0,onClick:j,title:p(`Write the selected tray entries to the system clipboard`),type:`button`,children:p(`To clipboard`)}),(0,Y.jsx)(vd,{disabled:m.size===0||!a,onClick:te,type:`button`,children:p(`Move here`)}),(0,Y.jsx)(vd,{$danger:!0,disabled:b.length===0,onClick:A,type:`button`,children:p(`Remove`)})]})]})}var td=q.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${Ic}
    ${Gc}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,nd=q.div`
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
`,rd=q.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,id=q.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,ad=q.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,od=q.button`
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
`,sd=q.button`
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
`,cd=q.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,ld=q.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,ud=q.div`
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
`,dd=q.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,fd=q.div`
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
`,pd=q.button`
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
`,md=q.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,hd=q.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,gd=q.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,_d=q.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,vd=q.button`
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
`,yd=new Map,bd=new Set,xd=0;function Sd(){xd+=1;for(let e of bd)e()}function Cd(e,t){t?yd.set(e,t):yd.delete(e),Sd()}function wd(e){return yd.has(e)}function Td(e,t,n){yd.get(e)?.(t,n)}function Ed(e){return bd.add(e),()=>bd.delete(e)}function Dd(){return xd}function Od(e){return(0,_.useSyncExternalStore)(Ed,Dd,Dd),{available:wd(e),open:(t,n)=>Td(e,t,n)}}function kd(e){return[...yd.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function Ad(e){return(0,_.useSyncExternalStore)(Ed,Dd,Dd),{available:kd(e).length>0,open:(t,n)=>{let r=kd(e).at(-1);r&&Td(r,t,n)}}}var jd=60,Md=300,Nd=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],Pd=190,Fd=120;function Id({listing:e,loading:t,error:n,find:r=ja,view:i,showImages:a,imageStripHeight:o=Pd,onImageStripHeight:s,onSort:c,onSetTags:l,onOpen:u,onOpenFile:d,showCheckboxes:f=!0,openOnSingleClick:p=!1,shortcuts:m=Ei,enableShortcuts:h=!0,refreshToken:g=0,onRefresh:v,onClipboardChanged:y,onTransfer:b,onAddToTray:x,onPaste:S,confirmDelete:C=!1,previewVideoAudio:w=!1,previewVideoAutoplay:T=!1,showDetails:E=!0,onPreviewInfo:D,onActivate:O,groupOf:k,onGridScroll:ee,gridFooter:A,allowBackgroundMenu:j=!0,readOnly:te=!1,onSelectionChange:M,onSelectionCountChange:N,selectionMenuRequest:ne,selectionMenuId:P,singleSelect:re=!1,pendingRename:ie=null,pendingRenameToken:F=0}){let I=qn(),ae=qa(),oe=(0,_.useRef)(null),L=(0,_.useRef)(null),se=(0,_.useRef)(null),[ce,le]=(0,_.useState)(Md),[ue,de]=(0,_.useState)({top:0,height:640}),R=(0,_.useRef)(null),z=(0,_.useRef)(null),[B,fe]=(0,_.useState)(null),[pe,me]=(0,_.useState)(o),[V,H]=(0,_.useState)(()=>new Set),he=(0,_.useRef)(V),ge=(0,_.useRef)([]);he.current=V,(0,_.useEffect)(()=>M?.([...V]),[V,M]),(0,_.useEffect)(()=>N?.(V.size),[V,N]),(0,_.useEffect)(()=>{let e=ne;if(!e||e.token===ve.current)return;ve.current=e.token;let t=[...he.current];t.length!==0&&(_e({x:e.x,y:e.y,paths:t,background:!1}),ti().then(Me,()=>Me(!1)))},[ne]);let[U,_e]=(0,_.useState)(null),ve=(0,_.useRef)(0),[ye,be]=(0,_.useState)(null),[xe,Se]=(0,_.useState)(null),[Ce,we]=(0,_.useState)(null),Te=(0,_.useRef)(Ce);Te.current=Ce;let Ee=(0,_.useRef)(0),De=(0,_.useRef)(O);De.current=O;let[Oe,ke]=(0,_.useState)(()=>{let e=Xa(`yafm.preview.width`,320);return e>=220?e:320}),Ae=(0,_.useCallback)(e=>{ke(e),Za(`yafm.preview.width`,e)},[]),[je,Me]=(0,_.useState)(!1),Ne=(0,_.useCallback)((e,t)=>{let n=[...he.current];n.length!==0&&(_e({x:e,y:t,paths:n,background:!1}),ti().then(Me,()=>Me(!1)))},[]);(0,_.useEffect)(()=>{if(P)return Cd(P,V.size>0?Ne:null),()=>Cd(P,null)},[P,V,Ne]),(0,_.useEffect)(()=>{H(new Set),we(null),_e(null),z.current=null},[e?.path]),(0,_.useEffect)(()=>{me(o)},[o]),(0,_.useEffect)(()=>{H(new Set),we(null),z.current=null},[g]);let Pe=e=>{R.current={y:e.clientY,height:pe},e.currentTarget.setPointerCapture(e.pointerId)},Fe=e=>{let t=R.current;if(!t)return;let n=Math.max(Fd,Math.round(window.innerHeight*.7));me(Math.min(n,Math.max(Fd,t.height+t.y-e.clientY)))},Ie=e=>{R.current&&(R.current=null,e.currentTarget.releasePointerCapture(e.pointerId),s?.(pe))},Le=()=>{me(Pd),s?.(Pd)},Re=r.query.length>0,ze=(0,_.useMemo)(()=>Nd.filter(e=>i.columns?.includes(e.id)),[i.columns]),Be=i.columns?.includes(`linkTarget`)??!1,Ve=(0,_.useMemo)(()=>`minmax(160px, 1fr) ${ze.map(e=>`${e.width}px`).join(` `)}`.trim(),[ze]),He=(0,_.useMemo)(()=>e?zd(e.entries.map(t=>{let n=t.isDirectory?Ja(ae,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:Re?Ma(i,r):null,tags:e.tags[t.name]??[]}}).filter(e=>!Re||r.mode===`dim`||e.ranges!==null),i,e,I):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,Re,r,ae,i.sort,i.sortDescending,I]);ge.current=He;let Ue=Math.max(40,i.iconSize+20),We=Math.max(0,Math.floor(ue.top/Ue)-4),Ge=Math.min(He.length,We+Math.ceil(ue.height/Ue)+10),W=(0,_.useMemo)(()=>He.slice(We,Ge),[He,We,Ge]);(0,_.useEffect)(()=>{let e=se.current;if(!e||i.mode!==`list`)return;let t=()=>de(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,_.useEffect)(()=>{de(e=>({...e,top:0})),se.current&&(se.current.scrollTop=0)},[e?.path]),(0,_.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=He.findIndex(e=>e.entry.fullPath===r.currentPath),t=se.current;if(e<0||!t)return;let n=e*Ue;(n<t.scrollTop||n+Ue>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else oe.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,He,Ue]);let Ke=(0,_.useMemo)(()=>He.slice(0,ce),[He,ce]);(0,_.useEffect)(()=>{le(Md)},[e?.path]),(0,_.useEffect)(()=>{if(!r.currentPath)return;let e=He.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&le(t=>Math.max(t,e+Md))},[r.currentPath,He]);let qe=(0,_.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&le(e=>Math.min(He.length,e+Md))},[He.length]),Je=i.mode===`grid`,Ye=(0,_.useMemo)(()=>{if(!Je)return[];if(!k)return Hd(Ke,Vd);let e=[],t=new Map;for(let n of Ke){let r=k(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[Ke,Je,k]),Xe=(0,_.useMemo)(()=>a?He.filter(e=>!e.entry.isDirectory&&Ua(e.entry.name)):[],[He,a]),G=Xe.length,Ze=(0,_.useMemo)(()=>Xe.slice(0,jd),[Xe]),Qe=(0,_.useMemo)(()=>a?Hd(Ze,Bd):[],[Ze,a]),$e=(0,_.useMemo)(()=>He.map(e=>e.entry.fullPath),[He]),et=He.length>0&&V.size>=He.length,tt=V.size>0&&!et,nt=()=>{re||(et?ot():H(new Set($e)))},rt=e?.path??``,it=(0,_.useCallback)((e,t)=>{if(re){z.current=t,H(new Set([t]));return}let n=e.ctrlKey||e.metaKey;H(r=>{if(e.shiftKey&&z.current!==null){let e=$e.indexOf(z.current),i=$e.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add($e[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),z.current=t,e}return z.current=t,new Set([t])})},[$e,re]),at=(0,_.useCallback)(e=>{re?(z.current=e,H(new Set([e]))):(z.current=e,H(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[re]),ot=(0,_.useCallback)(()=>{z.current=null,H(new Set)},[]);(0,_.useEffect)(()=>{if(F===0||!ie||Ee.current===F||!e?.entries.some(e=>e.fullPath===ie))return;Ee.current=F,z.current=ie,H(new Set([ie])),we({path:ie,value:Zi(ie)});let t=He.findIndex(e=>e.entry.fullPath===ie),n=se.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*Ue;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(ie)}"]`)?.scrollIntoView({block:`nearest`})})}},[se,e,ie,F,Ue,He,i.mode]),(0,_.useEffect)(()=>{if(!Ce)return;let e=He.findIndex(e=>e.entry.fullPath===Ce.path),t=se.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*Ue;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Ce.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[se,Ce,Ue,He,i.mode]);let st=(0,_.useCallback)(()=>_e(null),[]),ct=(0,_.useCallback)((e,t)=>{e.isDirectory?u(e.fullPath,ki(t)):d?.(e.fullPath,ki(t))},[u,d]),lt=(0,_.useCallback)((e,t,n)=>{fe({entry:e,x:t,y:n})},[]),ut=(0,_.useRef)(null),dt=(0,_.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;$u(e,V.has(n)?[...V]:[n])},[V]),ft=(0,_.useCallback)(e=>{if(!Yu(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);ut.current=t?.dataset.directory===`true`?t.dataset.path??rt:rt,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[rt]),pt=(0,_.useCallback)(e=>{if(te)return;let{paths:t,move:n}=Xu(e),r=ut.current??rt;ut.current=null,t.length!==0&&b&&(e.preventDefault(),b(t,r,!e.ctrlKey&&n))},[rt,b,te]),mt=(0,_.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),te||!t&&!j)return;let n=he.current;t&&!n.has(t)&&H(new Set([t])),t&&(z.current=t);let r=t?n.has(t)?[...n]:[t]:[];_e({x:e.clientX,y:e.clientY,paths:r,background:!t}),ti().then(Me,()=>Me(!1))},[j,rt]),ht=(0,_.useCallback)(()=>v?.(),[v]),gt=(e,t)=>{z.current=e,H(new Set([e])),t&&we({path:e,value:Zi(e)}),ht()},_t=ye&&(0,Y.jsx)(El,{initialDirectory:rt,initialName:ye.name,onCancel:()=>be(null),onCompress:async e=>{let t=await Ci(ye.paths,e);return!t.ok||!t.path?(Cc(t.error??I(`Could not create the archive.`)),!1):(gt(t.path,!1),!0)}}),vt=async(e,t=!1)=>{await ei(e,t)&&(Me(!0),y?.())},yt=async e=>{e&&(await ai(e)?(ht(),S?.()):Cc(I(`Nothing on the clipboard could be pasted here.`)))},bt=async(e,t=!1)=>{if(!rt)return;let n=e===null?await ci(rt,t):await fi(rt,e);!n.ok||n.path===null?Cc(n.error??I(`Could not create the item.`)):(z.current=n.path,H(new Set([n.path])),we({path:n.path,value:Zi(n.path)}),ht())},xt=e=>{H(new Set([e.fullPath])),z.current=e.fullPath,we({path:e.fullPath,value:e.name})},St=(0,_.useCallback)(e=>we(t=>t&&{...t,value:e}),[]),Ct=(0,_.useCallback)(()=>we(null),[]),wt=(0,_.useCallback)(async()=>{let e=Te.current;if(we(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=ge.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await si(e.path,t);r.ok?(ot(),ht()):Cc(r.error??I(`Could not rename the entry.`))},[ot,ht,I]),Tt=async(e,t=!1)=>{if((t||C)&&!await Et(e,t))return;let n=await oi(e,t);if(!n.ok&&n.needsPermanent){if(!await Et(e,!0))return;n=await oi(e,!0)}if(n.ok)ot(),ht();else{if(n.cancelled)return;Cc(n.error??I(t?`Could not delete the selection.`:`Could not move the selection to the recycle bin.`))}},Et=(0,_.useCallback)((e,t)=>new Promise(n=>Se({paths:e,permanent:t,resolve:n})),[]),Dt=(0,_.useCallback)(e=>{Se(t=>(t?.resolve(e),null))},[]);(0,_.useEffect)(()=>{if(!h||U)return;let e=e=>{if(Ni(e.target))return;De.current?.();let t=Ai(e),n=[...V],r=n.length===1?He.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if($e.length===0)return;e.preventDefault();let n=z.current&&$e.includes(z.current)?z.current:V.size===1?[...V][0]:null,r=n?$e.indexOf(n):-1,i=t===`home`?0:t===`end`?$e.length-1:Math.max(0,Math.min($e.length-1,r+(t===`arrowdown`?1:-1))),a=$e[i];H(new Set([a])),z.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===m.copy?i(()=>{n.length>0&&vt(n)}):t===m.cut?i(()=>{n.length>0&&vt(n,!0)}):t===m.paste?i(()=>void yt(rt)):t===m.delete?i(()=>{n.length>0&&Tt(n)}):t===m.deletePermanently?i(()=>{n.length>0&&Tt(n,!0)}):t===m.selectAll?i(()=>{H(new Set($e)),z.current=$e[0]??null}):t===m.invertSelection?i(()=>{H(new Set($e.filter(e=>!V.has(e)))),z.current=$e[0]??null}):t===m.rename&&r?i(()=>void xt(r)):t===m.open&&r?i(()=>{r.isDirectory?u(r.fullPath):d?.(r.fullPath)}):t===m.newFolder||t===`f10`?i(()=>void bt(null)):t===m.terminal?i(()=>void hi(rt)):t===m.properties?i(()=>void pi(n.length>0?n:rt?[rt]:[])):t===m.refresh&&i(ht)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[$e,vt,bt,rt,h,U,u,d,yt,ht,Tt,xt,He,V,m]);let Ot=xe&&(0,Y.jsx)(zl,{confirmLabel:xe.permanent?I(`Delete`):I(`Move`),danger:xe.permanent,message:xe.permanent?I(`Permanently delete {target}? This cannot be undone.`,{target:xe.paths.length===1?I(`this item`):I(`{count} items`,{count:xe.paths.length})}):I(`Move {target} to the recycle bin?`,{target:xe.paths.length===1?I(`this item`):I(`{count} items`,{count:xe.paths.length})}),onCancel:()=>Dt(!1),onConfirm:()=>Dt(!0),open:!0,title:xe.permanent?I(`Delete permanently`):I(`Move to the recycle bin`)}),K=(0,_.useMemo)(()=>{if(!e||V.size===0)return null;let t=$e.find(e=>V.has(e));return t?He.find(e=>e.entry.fullPath===t)?.entry??null:null},[$e,e,He,V]),kt=(0,_.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:Zi(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:I(`Type`),value:I(`Folder`)},{label:I(`Location`),value:e.parent??`—`},{label:I(`Path`),value:e.path},{label:I(`Size`),value:Fi(t)},{label:I(`Items`),value:Pi(I,n,`1 item`,`{count} items`)},{label:I(`Modified`),value:`—`},{label:I(`Created`),value:`—`},{label:I(`Attributes`),value:`—`}]}},[e,I]),At=(0,_.useMemo)(()=>{if(!K||!e)return null;let t=K.isDirectory?e.folderSizes[K.name]:void 0,n=e.tags[K.name]??[],r=K.name.lastIndexOf(`.`),i=r>0&&r<K.name.length-1?K.name.slice(r+1).toUpperCase():`—`;return{name:K.name,path:K.fullPath,isDirectory:K.isDirectory,size:K.size,modified:K.modified,created:K.created,fields:[{label:I(`Type`),value:Gd(K,I)},{label:I(`Extension`),value:K.isDirectory?`—`:i},{label:I(`Location`),value:e.path},{label:I(`Full path`),value:K.fullPath},{label:I(`Size`),value:K.isDirectory?t===void 0?`—`:Fi(t):Fi(K.size)},...K.isDirectory?[{label:I(`Items`),value:`${e.counts[K.name]??`—`}`}]:[],{label:I(`Modified`),value:Hi(K.modified)},{label:I(`Created`),value:Hi(K.created)},{label:I(`Link status`),value:K.linkTarget==null?K.linkCount>1?I(`Hard link`):`—`:K.linkValid?`OK`:I(`Broken`)},...K.linkTarget?[{label:I(`Target`),value:K.linkTarget}]:[],...K.linkCount>1?[{label:I(`Links`),value:String(K.linkCount)}]:[],{label:I(`Attributes`),value:[K.isHidden?I(`Hidden`):``,K.isSystem?I(`System`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:I(`Tags`),value:n.join(`, `)}]:[]]}},[e,K,I]),jt=U?.paths.length===1?U.paths[0]:null,Mt=jt?He.find(e=>e.entry.fullPath===jt)?.entry:void 0,Nt=Mt?{path:Mt.fullPath,isDirectory:Mt.isDirectory}:null,Pt=At??kt,Ft=(0,_.useRef)(D);Ft.current=D,(0,_.useEffect)(()=>{Ft.current?.(Pt)},[D,Pt]);let It=E&&Pt&&(0,Y.jsx)(Xl,{info:Pt,onWidth:Ae,selectionNote:V.size>1?Pi(I,V.size,`1 item selected`,`{count} items selected`):void 0,videoAudio:w,videoAutoplay:T,width:Oe});return n&&!e?(0,Y.jsx)(Kf,{children:(0,Y.jsx)(Jf,{children:n})}):!e&&!t?(0,Y.jsx)(Kf,{children:(0,Y.jsx)(qf,{children:I(`Nothing selected.`)})}):i.mode===`grid`?(0,Y.jsxs)(uf,{onPointerDown:O,children:[(0,Y.jsxs)(df,{children:[(0,Y.jsxs)(yf,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||ot()},onContextMenu:e=>mt(e),onDragOver:ft,onDragStart:dt,onDrop:pt,onScroll:e=>{ee?.(e.currentTarget),qe(e.currentTarget)},children:[f&&He.length>0&&(0,Y.jsxs)(sf,{children:[(0,Y.jsx)(af,{$checked:!re&&et,$partial:!re&&tt,"aria-label":I(et?`Select none`:`Select all`),disabled:re,onClick:nt,title:I(et?`Select none`:`Select all`),type:`button`,children:et?(0,Y.jsx)(Ds,{size:10}):tt?(0,Y.jsx)(of,{}):null}),(0,Y.jsx)(`span`,{children:I(et?`Select none`:`Select all`)})]}),t&&!e?(0,Y.jsx)(wf,{$size:i.gridSize,children:(0,Y.jsx)(Zd,{size:i.gridSize})}):(0,Y.jsx)($d,{counts:e?.counts,currentPath:Re?r.currentPath:null,groups:Ye,gridSize:i.gridSize,innerRef:oe,onContextMenu:mt,onOpen:u,onOpenFile:d,onRenameCancel:Ct,onRenameChange:St,onRenameCommit:wt,onSelect:it,onToggle:at,openOnSingleClick:p,renaming:Ce,searching:Re,selected:V,showCheckboxes:f,showTarget:Be}),!t&&e&&He.length===0&&(0,Y.jsx)(Gf,{children:(0,Y.jsx)(qf,{children:n??(Re&&r.mode===`hide`?I(`No entries match the search.`):I(`This folder is empty.`))})}),A]}),U&&(0,Y.jsx)(ul,{canPaste:je,directory:rt,allowCompression:!0,menu:U,onAddToTray:x,onArchiveCreated:gt,onClose:st,onCompressTo:(e,t)=>be({paths:e,name:t}),onCopy:vt,onCreateFile:e=>void bt(e),onCreateFolder:e=>void bt(null,e),onDelete:Tt,onOpen:u,onOpenFile:d,onPaste:yt,onRefresh:ht,onRename:e=>{let t=He.find(t=>t.entry.fullPath===e)?.entry;t&&xt(t)},shortcuts:m,target:Nt}),_t,Ot]}),It]}):(0,Y.jsxs)(uf,{onPointerDown:O,children:[(0,Y.jsxs)(df,{children:[(0,Y.jsxs)(ff,{onScroll:e=>{se.current&&se.current.scrollLeft!==e.currentTarget.scrollLeft&&(se.current.scrollLeft=e.currentTarget.scrollLeft)},ref:L,style:{gridTemplateColumns:Ve},children:[(0,Y.jsxs)(rf,{children:[f&&(0,Y.jsx)(af,{$checked:!re&&et,$partial:!re&&tt,"aria-label":I(et?`Select none`:`Select all`),disabled:re,onClick:e=>{e.stopPropagation(),nt()},title:I(et?`Select none`:`Select all`),type:`button`,children:et?(0,Y.jsx)(Ds,{size:10}):tt?(0,Y.jsx)(of,{}):null}),(0,Y.jsxs)(pf,{onClick:()=>c(`name`),type:`button`,children:[I(`Name`),Ld(i,`name`)]})]}),ze.map(e=>(0,Y.jsxs)(pf,{onClick:()=>c(e.id),type:`button`,children:[I(e.label),Ld(i,e.id)]},e.id))]}),(0,Y.jsxs)(mf,{onClick:e=>{e.target===e.currentTarget&&ot()},onContextMenu:e=>mt(e),onDragOver:ft,onDragStart:dt,onDrop:pt,onScroll:e=>{L.current&&L.current.scrollLeft!==e.currentTarget.scrollLeft&&(L.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;de(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:se,children:[t&&!e?(0,Y.jsx)(Xd,{template:Ve,columns:ze.length}):(0,Y.jsxs)(Y.Fragment,{children:[We>0&&(0,Y.jsx)(`div`,{style:{height:We*Ue}}),W.map(t=>{let n=t.entry.fullPath;return(0,Y.jsx)(tf,{current:Re&&n===r.currentPath,dim:Re&&t.ranges===null,height:Ue,iconSize:i.iconSize,innerRef:oe,listing:e,onContextMenu:mt,onOpen:ct,onRenameCancel:Ct,onRenameChange:St,onRenameCommit:wt,onSelect:it,onTagEdit:lt,onToggle:at,openOnSingleClick:p,renaming:Ce?.path===n?{value:Ce.value}:null,row:t,selected:V.has(n),showCheckboxes:f,showTarget:Be,template:Ve,visible:ze},n)}),Ge<He.length&&(0,Y.jsx)(`div`,{style:{height:(He.length-Ge)*Ue}})]}),!t&&e&&He.length===0&&(0,Y.jsx)(Kf,{children:(0,Y.jsx)(qf,{children:n??(Re&&r.mode===`hide`?I(`No entries match the search.`):I(`This folder is empty.`))})})]}),a&&Xe.length>0&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(hf,{onDoubleClick:Le,onPointerDown:Pe,onPointerMove:Fe,onPointerUp:Ie,title:I(`Drag to resize; double-click to reset`)}),(0,Y.jsxs)(gf,{style:{height:pe},children:[(0,Y.jsxs)(_f,{children:[I(`Preview`),(0,Y.jsx)(vf,{children:G>jd?`${Ze.length} / ${G}`:G})]}),(0,Y.jsx)(yf,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||ot()},onContextMenu:e=>mt(e),children:(0,Y.jsx)($d,{counts:e?.counts,currentPath:Re?r.currentPath:null,groups:Qe,gridSize:i.gridSize,onContextMenu:mt,onOpen:u,onOpenFile:d,onSelect:it,onToggle:at,openOnSingleClick:p,searching:Re,selected:V,showCheckboxes:f,showTarget:Be})})]})]}),B&&e&&(0,Y.jsx)(ju,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>l?.(B.entry.name,e,t),onClose:()=>fe(null),tags:e.tags[B.entry.name]??[],x:B.x,y:B.y}),U&&(0,Y.jsx)(ul,{canPaste:je,directory:rt,allowCompression:!0,menu:U,onAddToTray:x,onArchiveCreated:gt,onClose:st,onCompressTo:(e,t)=>be({paths:e,name:t}),onCopy:vt,onCreateFile:e=>void bt(e),onCreateFolder:e=>void bt(null,e),onDelete:Tt,onOpen:u,onOpenFile:d,onPaste:yt,onRefresh:ht,onRename:e=>{let t=He.find(t=>t.entry.fullPath===e)?.entry;t&&xt(t)},shortcuts:m,target:Nt}),_t,Ot]}),It]})}function Ld(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var Rd=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function zd(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Gd(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:Rd.compare(String(r),String(i));return t.sortDescending?-o:o})}var Bd=Ba.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Ha(t.entry.name)===e})),Vd=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...Bd.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function Hd(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function Ud(e){return Math.max(24,Math.min(e-56,160))}var Wd={file:`file`,folder:`folder`,text:`text file`,code:`source file`,image:`image`,video:`video`,audio:`audio`,archive:`archive`,pdf:`PDF`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Gd(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`Shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`Internet shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`Folder link`):t(`Symbolic link`);if(e.isDirectory)return t(`Folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(Wd[Wu(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`File`)}function Kd(e,t,n,r){switch(e){case`type`:return Gd(t,r);case`size`:return Jd(t,n.folderSizes);case`modified`:return Hi(t.modified);case`created`:return Hi(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:r(`Broken`);default:return``}}function qd({name:e,ranges:t}){if(!t||t.length===0)return(0,Y.jsx)(Y.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,Y.jsx)(Wf,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,Y.jsx)(Y.Fragment,{children:n})}function Jd(e,t){if(!e.isDirectory)return Fi(e.size);let n=t[e.name];return n===void 0?`—`:Fi(n)}function Yd({entry:e,size:t=18}){let n=(0,_.useRef)(null),[r,i]=(0,_.useState)(!1);(0,_.useEffect)(()=>{if(r)return;let e=n.current;if(!e)return;if(!(`IntersectionObserver`in window)){i(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(i(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[r]);let a=xa(r?e.fullPath:null,e.isDirectory,t>32),o=Ca(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,Y.jsx)(nf,{$size:t,ref:n,children:e.iconSource?.startsWith(`icon:`)?(0,Y.jsx)(Gu,{name:e.iconSource.slice(5),size:t}):o?(0,Y.jsx)(`img`,{alt:``,height:t,src:o,width:t}):a?(0,Y.jsx)(`img`,{alt:``,height:t,src:a,width:t}):e.isDirectory?(0,Y.jsx)(us,{size:t}):(0,Y.jsx)(Gu,{name:Wu(e.name),size:t})})}function Xd({template:e,columns:t}){return(0,Y.jsx)(Y.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,Y.jsxs)(Tf,{style:{gridTemplateColumns:e},children:[(0,Y.jsxs)(Of,{children:[(0,Y.jsx)(Ef,{style:{flexShrink:0,height:18,width:18}}),(0,Y.jsx)(Ef,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,Y.jsx)(Ef,{style:{width:t%2==0?44:92}},t))]},r))})}function Zd({size:e}){return(0,Y.jsx)(Y.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,Y.jsxs)(Lf,{$dim:!1,$current:!1,$selected:!1,children:[(0,Y.jsx)(Rf,{children:(0,Y.jsx)(Ef,{style:{height:e,width:e}})}),(0,Y.jsx)(Bf,{children:(0,Y.jsx)(Ef,{style:{height:9,width:`${t}%`}})})]},n))})}var Qd=(0,_.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:d,onRenameCommit:f,onRenameCancel:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:v,onOpenFile:y}){let b=qn(),x=qa(),S=!e.entry.isDirectory&&Ua(e.entry.name),C=(0,_.useRef)(null),[w,T]=(0,_.useState)(!1);(0,_.useEffect)(()=>{if(!S||w)return;let e=C.current;if(!e)return;if(!(`IntersectionObserver`in window)){T(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(T(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,w]);let E=Da(S&&w?e.entry.fullPath:null,192,e.entry.modified),[D,O]=(0,_.useState)(!1),k=e.entry.fullPath,ee=t=>{e.entry.isDirectory?v(k,ki(t)):y?.(k,ki(t))};return(0,Y.jsxs)(Lf,{$current:t,$dim:n,$selected:s,onClick:e=>{m(e,k),l&&ee(e)},onContextMenu:e=>g(e,k),onDoubleClick:e=>{l||ee(e)},ref:e=>{C.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":k,draggable:!u,children:[c&&(0,Y.jsx)(lf,{$checked:s,onClick:e=>{e.stopPropagation(),h(k)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`Deselect`:`Select`),type:`button`,children:s&&(0,Y.jsx)(Ds,{size:10})}),(0,Y.jsx)(Rf,{children:S&&E&&!D?(0,Y.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>O(!0),src:E}):(0,Y.jsx)(zf,{children:e.place&&x.useIcons?(0,Y.jsx)(Ou,{place:e.place,size:r}):(0,Y.jsx)(Yd,{entry:e.entry,size:r})})}),(0,Y.jsxs)(Bf,{children:[u?(0,Y.jsx)(ef,{onCancel:()=>p?.(),onChange:e=>d?.(e),onCommit:()=>f?.(),value:u.value}):(0,Y.jsx)(Vf,{$broken:e.entry.linkValid===!1,children:(0,Y.jsx)(qd,{name:e.label,ranges:e.ranges})}),(0,Y.jsx)(Hf,{children:e.entry.isDirectory?i===void 0?Gd(e.entry,b):b(`{type} · {count} items`,{type:Gd(e.entry,b),count:i}):b(`{type} · {size}`,{type:Gd(e.entry,b),size:Fi(e.entry.size)})}),a&&e.entry.linkTarget&&(0,Y.jsxs)(Uf,{title:e.entry.linkTarget,children:[`→ `,e.entry.linkTarget]})]})]})});function $d({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:p,onOpen:m,onOpenFile:h,onRenameChange:g,onRenameCommit:_,onRenameCancel:v}){let y=qn();return(0,Y.jsx)(Y.Fragment,{children:e.map(e=>(0,Y.jsxs)(bf,{children:[(0,Y.jsxs)(xf,{children:[y(e.label),(0,Y.jsx)(Sf,{children:e.rows.length}),(0,Y.jsx)(Cf,{})]}),(0,Y.jsx)(wf,{$size:t,children:e.rows.map(e=>(0,Y.jsx)(Qd,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:Ud(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:p,onOpen:m,onOpenFile:h,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:v,onRenameChange:g,onRenameCommit:_,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function ef({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,_.useRef)(null);return(0,_.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,Y.jsx)(Af,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var tf=(0,_.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:_,onTagEdit:v,onRenameChange:y,onRenameCommit:b,onRenameCancel:x}){let S=qn(),C=qa(),w=e.entry.fullPath;return(0,Y.jsxs)(Df,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{m(t,w),o&&_(e.entry,t)},onContextMenu:e=>g(e,w),onDoubleClick:t=>{o||_(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":w,draggable:!p,children:[(0,Y.jsxs)(Of,{children:[i&&(0,Y.jsx)(cf,{$checked:r,onClick:e=>{e.stopPropagation(),h(w)},onDoubleClick:e=>e.stopPropagation(),title:S(r?`Deselect`:`Select`),type:`button`,children:r&&(0,Y.jsx)(Ds,{size:10})}),e.place&&C.useIcons?(0,Y.jsx)(nf,{children:(0,Y.jsx)(Ou,{place:e.place,size:s})}):(0,Y.jsx)(Yd,{entry:e.entry,size:s}),p?(0,Y.jsx)(ef,{onCancel:x,onChange:y,onCommit:b,value:p.value}):(0,Y.jsx)(kf,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,Y.jsx)(qd,{name:e.label,ranges:e.ranges})}),a&&e.entry.linkTarget&&(0,Y.jsxs)(jf,{title:e.entry.linkTarget,children:[`→ `,e.entry.linkTarget]})]}),u.map(t=>(0,Y.jsx)(Mf,{children:t.id===`tags`?(0,Y.jsx)(Nf,{onClick:t=>{t.stopPropagation(),v(e.entry,t.clientX,t.clientY)},title:S(`Edit tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,Y.jsx)(Pf,{$color:t,$ink:Au(t),children:e},e)}):(0,Y.jsx)(Ff,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,Y.jsx)(If,{children:S(`Broken`)}):Kd(t.id,e.entry,d,S)},t.id))]})}),nf=q.span`
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
`,rf=q.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,af=q.button`
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
`,of=q.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,sf=q.div`
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
`,cf=q.button`
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
`,lf=q(cf)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,uf=q.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,df=q.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
`,ff=q.div`
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
`,pf=q.button`
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
`,mf=q.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,hf=q.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,gf=q.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: var(--bg-secondary);
`,_f=q.div`
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
`,vf=q.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,yf=q.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,bf=q.section`
    & + & {
        margin-top: 22px;
    }
`,xf=q.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Sf=q.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Cf=q.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,wf=q.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,Tf=q.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,Ef=q.span`
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
`,Df=q.div`
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
`,Of=q.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,kf=q.span`
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Af=q.input`
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
`,jf=q.span`
    overflow: hidden;
    min-width: 0;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent-primary);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Mf=q.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Nf=q.button`
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
`,Pf=q.span`
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
`,Ff=q.span`
    color: var(--text-muted);
    font-size: 11px;
`,If=q.span`
    color: #fca5a5;
`,Lf=q.div`
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
`,Rf=q.div`
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
`,zf=q.span`
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
`,Bf=q.div`
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
`,Vf=q.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Hf=q.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Uf=q.span`
    width: 100%;
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--accent-primary);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Wf=q.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,Gf=q.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Kf=q.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,qf=q.p`
    font-size: 13px;
    color: var(--text-muted);
`,Jf=q.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,Yf=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,Xf=`/assets/bloom-BpfZWiaG.mp4`,Zf=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,Qf=`/assets/drift-BRBSQL2_.mp4`,$f=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,ep=`/assets/ember-CtSz0YxR.mp4`,tp=[{name:`Blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`Indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`Violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`Teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`Green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`Amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`Rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`Slate`,accent:`#64748b`,secondary:`#94a3b8`}],np=[{id:`aurora`,name:`Aurora`},{id:`dunes`,name:`Dunes`},{id:`tide`,name:`Tide`}],rp=[{id:`builtin:video:drift`,name:`Drift`,url:Qf,poster:Zf},{id:`builtin:video:ember`,name:`Ember`,url:ep,poster:$f},{id:`builtin:video:bloom`,name:`Bloom`,url:Xf,poster:Yf}],ip=np.map(e=>({...e,variants:tp.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:lp(up(e.id,t))}))})),ap=new Map(ip.flatMap(e=>e.variants.map(e=>[e.id,e]))),op=new Map(rp.map(e=>[e.id,e]));function sp(e){if(ap.has(e))return ap.get(e).url;if(op.has(e))return op.get(e).url;let t=e.split(`:`)[1];return t?ap.get(`builtin:${t}:indigo`)?.url??null:null}function cp(e){return op.has(e)}function lp(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function up(e,t){return e===`dunes`?mp(t):e===`tide`?hp(t):pp(t)}function dp(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function fp(e,t,n){let[r,i,a]=dp(e),[o,s,c]=dp(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function pp({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${fp(e,`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${fp(t,`#070b1c`,.85)}"/>
            <stop offset="1" stop-color="${fp(e,`#04060c`,.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${fp(e,t,.5)}" opacity="0.42" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="0.5" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="0.42" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="0.36" filter="url(#soft2)"/>
</svg>`}function mp({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${fp(t,`#120a05`,.84)}"/>
            <stop offset="0.5" stop-color="${fp(t,`#1c0f07`,.7)}"/>
            <stop offset="1" stop-color="#0d0703"/>
        </linearGradient>
        <linearGradient id="dune1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${fp(e,t,.25)}" stop-opacity="0.65"/>
            <stop offset="1" stop-color="${fp(e,`#160b04`,.55)}" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="dune2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${t}" stop-opacity="0.4"/>
            <stop offset="1" stop-color="${fp(e,`#1a0d05`,.7)}" stop-opacity="0.15"/>
        </linearGradient>
        <filter id="haze" x="-160%" y="-160%" width="420%" height="420%">
            <feGaussianBlur stdDeviation="90"/>
        </filter>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1480" cy="250" r="170" fill="${t}" opacity="0.42" filter="url(#haze)"/>
    <circle cx="1480" cy="250" r="110" fill="${fp(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${fp(e,`#0b0603`,.82)}" opacity="0.75"/>
</svg>`}function hp({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${fp(e,`#02070a`,.9)}"/>
            <stop offset="0.5" stop-color="${fp(t,`#03100f`,.82)}"/>
            <stop offset="1" stop-color="${fp(e,`#020609`,.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${fp(e,t,.4)}" opacity="0.5" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var gp=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function _p(e){return gp.test(e)}function vp({settings:e}){let t=e?.backgroundSource??null,n=t?.startsWith(`file:`)?t.slice(5):null,r=Oa(n),i=t?.startsWith(`builtin:`)?sp(t):r,a=n===null?t!==null&&cp(t):_p(n);if(!t||!i)return null;let o=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,Y.jsxs)(yp,{"aria-hidden":!0,children:[a?(0,Y.jsx)(xp,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:i,style:{filter:o}}):(0,Y.jsx)(bp,{src:i,style:{filter:o}}),(0,Y.jsx)(Sp,{})]})}var yp=q.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,bp=q.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,xp=q.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,Sp=q.div`
    position: absolute;
    inset: 0;
    background:
        linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
        radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);
`;function Cp({hits:e,delaySeconds:t,permanent:n,onCancel:r,onConfirm:i}){let a=qn(),o=(0,_.useRef)(null),[s,c]=(0,_.useState)(()=>Math.max(1,Math.ceil(t)));return(0,_.useEffect)(()=>{o.current?.focus();let e=Date.now(),n=window.setInterval(()=>{let r=Math.max(0,Math.ceil(t-(Date.now()-e)/1e3));c(r),r===0&&window.clearInterval(n)},200),i=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),r()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,i,!0),()=>{window.clearInterval(n),window.removeEventListener(`keydown`,i,!0)}},[t,r]),(0,Fc.createPortal)((0,Y.jsx)(wp,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,Y.jsxs)(Tp,{role:`alertdialog`,"aria-modal":`true`,children:[(0,Y.jsx)(Ep,{children:a(`Protected folder`)}),(0,Y.jsx)(Dp,{children:a(`These paths are protected by the safety settings:`)}),(0,Y.jsx)(Op,{children:e.map(e=>(0,Y.jsxs)(kp,{children:[(0,Y.jsx)(Ap,{children:e.path}),(0,Y.jsx)(jp,{children:a(`Protected by {pattern}`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,Y.jsx)(Mp,{children:a(n?`Deletes permanently`:`Moves to the recycle bin`)}),(0,Y.jsx)(Np,{children:a(`Nothing has been deleted.`)}),(0,Y.jsx)(Pp,{children:a(`This waits {seconds}s before the delete button works.`,{seconds:t})}),(0,Y.jsxs)(Fp,{children:[(0,Y.jsx)(Ip,{onClick:r,ref:o,type:`button`,children:a(`Cancel`)}),(0,Y.jsx)(Lp,{disabled:s>0,onClick:i,type:`button`,children:s>0?a(`Delete anyway ({seconds}s)`,{seconds:s}):a(`Delete anyway`)})]})]})}),document.body)}var wp=q.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Xc}
`,Tp=q.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Gc}
`,Ep=q.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Dp=q.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Op=q.div`
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
`,kp=q.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Ap=q.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,jp=q.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,Mp=q.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,Np=q.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,Pp=q.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Fp=q.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Ip=q.button`
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
`,Lp=q.button`
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
`;function Rp(){let e=qn(),[t,n]=(0,_.useState)(null),r=(0,_.useRef)(null),i=(0,_.useRef)(null);(0,_.useEffect)(()=>(Sc(e=>new Promise(t=>{r.current=t,n(e)})),()=>Sc(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,_.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,Fc.createPortal)((0,Y.jsx)(zp,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,Y.jsxs)(Bp,{role:`alertdialog`,"aria-modal":`true`,children:[(0,Y.jsx)(Vp,{children:e(`Notice`)}),(0,Y.jsx)(Hp,{children:t}),(0,Y.jsx)(Up,{children:(0,Y.jsx)(Wp,{onClick:a,ref:i,type:`button`,children:e(`OK`)})})]})}),document.body)}var zp=q.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Xc}
`,Bp=q.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Gc}
`,Vp=q.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Hp=q.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Up=q.div`
    display: flex;
    justify-content: flex-end;
`,Wp=q.button`
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
`;function Gp(){let e=qn(),[t,n]=(0,_.useState)(null),[r,i]=(0,_.useState)(``),a=(0,_.useRef)(null),o=(0,_.useRef)(null);(0,_.useEffect)(()=>(wc((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>wc(null)),[]),(0,_.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,Fc.createPortal)((0,Y.jsx)(Kp,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,Y.jsxs)(qp,{role:`dialog`,"aria-modal":`true`,children:[(0,Y.jsx)(Jp,{children:e(`Archive password`)}),(0,Y.jsx)(Yp,{children:t.wrong?e(`That password did not open the archive. Try again.`):e(`This archive is encrypted. Enter its password.`)}),(0,Y.jsx)(Xp,{title:t.archive,children:t.archive}),(0,Y.jsx)(Zp,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,Y.jsxs)(Qp,{children:[(0,Y.jsx)($p,{onClick:()=>s(null),type:`button`,children:e(`Cancel`)}),(0,Y.jsx)(em,{disabled:r.length===0,onClick:c,type:`button`,children:e(`OK`)})]})]})}),document.body)}var Kp=q.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Xc}
`,qp=q.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Gc}
`,Jp=q.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Yp=q.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Xp=q.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Zp=q.input`
    width: 100%;
    height: 32px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    outline: 0;
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;

    &:focus {
        border-color: var(--border-color-focus);
        box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.12);
    }
`,Qp=q.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,$p=q.button`
    min-width: 84px;
    padding: 7px 12px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`,em=q($p)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function tm({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h}){let g=qn(),v=(0,_.useRef)(null),y=c??g(`Search this folder`);(0,_.useEffect)(()=>{let e=v.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let b=e=>{e(),v.current?.focus()};return(0,Y.jsxs)(nm,{children:[(0,Y.jsx)(ps,{}),(0,Y.jsx)(rm,{"aria-label":y,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:y,ref:v,spellCheck:!1,value:e}),!s&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(im,{children:i===0?`0/0`:`${a+1}/${i}`}),(0,Y.jsx)(am,{onClick:()=>b(u),title:g(`Previous match (Shift+Enter)`),type:`button`,children:(0,Y.jsx)(ys,{size:12})}),(0,Y.jsx)(am,{$down:!0,onClick:()=>b(d),title:g(`Next match (Enter)`),type:`button`,children:(0,Y.jsx)(ys,{size:12})})]}),(0,Y.jsx)(om,{$on:n,onClick:()=>b(f),title:g(`Match case`),type:`button`,children:`Aa`}),(0,Y.jsx)(om,{$on:r,onClick:()=>b(p),title:g(`Regular expression`),type:`button`,children:`.*`}),!s&&(0,Y.jsx)(sm,{$on:t===`hide`,onClick:()=>b(m),title:g(t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`),type:`button`,children:g(t===`hide`?`Hide`:`Dim`)}),(0,Y.jsx)(am,{onClick:h,title:g(`Close search (Esc)`),type:`button`,children:(0,Y.jsx)(Os,{size:12})})]})}var nm=q.div`
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
    ${Jc}
`,rm=q.input`
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
`,im=q.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,am=q.button`
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
`,om=q.button`
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
`,sm=q(om)`
    min-width: 34px;
    font-family: var(--font-sans);
    font-size: 10px;
`;function cm(e,t,n,r,i=[]){(0,_.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=Ma(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function lm({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=qn(),a=(0,_.useRef)(null),o=(0,_.useRef)(null),[s,c]=(0,_.useState)(null);return(0,_.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,_.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,_.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,Fc.createPortal)((0,Y.jsxs)(um,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(Cu).map(n=>(0,Y.jsx)(dm,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:Cu[n](16)},n)),(0,Y.jsx)(dm,{onClick:async()=>{let e=await yc([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`Choose an image`),type:`button`,children:(0,Y.jsx)(gs,{size:13})}),r&&(0,Y.jsx)(dm,{$active:!e,onClick:()=>t(null),title:i(`Default`),type:`button`,children:(0,Y.jsx)(Os,{size:12})})]}),document.body)]})}var um=q.div`
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
    ${Kc}
    transform-origin: top left;
`,dm=q.button`
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
`;function fm({path:e}){let t=e.split(`.`).pop()?.toLowerCase()??``,n=[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(t),r=Oa(e,0,t?`.${t}`:``);return r?n?(0,Y.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:r}):(0,Y.jsx)(`img`,{alt:``,src:r}):null}var pm=q.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 14px 26px 34px;
`,mm=q.div`
    position: relative;
    margin: -14px -26px 18px;
    overflow: hidden;
    border-bottom: 1px solid var(--border-color);
    background: var(--bg-secondary);

    img,
    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
`,hm=q.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 10px;
    cursor: row-resize;
    background: rgba(var(--accent-rgb), 0.18);

    &:hover {
        background: rgba(var(--accent-rgb), 0.38);
    }
`,gm=q.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
    padding: 12px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
`,_m=q.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,vm=q.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,ym=q.button`
    width: 132px;
    height: 72px;
    padding: 0;
    overflow: hidden;
    border: 1px solid ${({$active:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: var(--bg-secondary);
    box-shadow: ${({$active:e})=>e?`0 0 0 2px rgba(var(--accent-rgb), 0.25)`:`none`};
    cursor: pointer;

    img,
    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
`,bm=q.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 132px;
    height: 72px;
    border: 1px dashed var(--border-color-hover);
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-focus);
        color: var(--text-primary);
    }
`,xm=q.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    flex-wrap: wrap;
    padding-bottom: 14px;
`,Sm=q.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,Cm=q.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,wm=q.button`
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
`,Tm=q.div`
    position: relative;
    display: inline-flex;
`,Em=q.div`
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
`,Dm=q.button`
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
`,Om=q.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,km=q.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
`,Am=q.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,jm=q.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,Mm=q.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Nm=q.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,Pm=q.input`
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
`,Fm=q.button`
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
`,Im=q.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,Lm=q.div`
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
`,Rm=q.span`
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
`,zm=q.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,Bm=q.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Vm=q.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,Hm=q.button`
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
`,Um=q.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,Wm=q.button`
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
`,Gm=q.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Km=q.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,qm=q.div`
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
`,Jm=q.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,Ym=q.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,Xm=q.button`
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
`,Zm=q.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,Qm=q.button`
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
`,$m=q.button`
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
`,eh=q.button`
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
`,th=q.span`
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
`,nh=q.button`
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
`,rh=q.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,ih=q.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`;function ah({places:e,drives:t,recent:n,recentLimit:r,homePath:i,historyVersion:a,onOpen:o,onPlacesChanged:s,onRecentCleared:c,onLayoutChanged:l,onHistoryChanged:u,onDrivesChanged:d,visibilityVersion:f=0,find:p,onSearchMatches:m,readOnly:h=!1,onPick:g,onSelectionChange:v,onAddToTray:y}){let b=qn(),x=qa(),[S,C]=(0,_.useState)(!1),[w,T]=(0,_.useState)(null),E=w?.overviewBanner??null,D=E?.split(`.`).pop()?.toLowerCase()??``,O=[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(D),k=Oa(E,0,D?`.${D}`:``),[ee,A]=(0,_.useState)(null),[j,te]=(0,_.useState)(!1),[M,N]=(0,_.useState)(null),[ne,P]=(0,_.useState)(null),[re,ie]=(0,_.useState)(null),[F,I]=(0,_.useState)(null),[ae,oe]=(0,_.useState)(null),L=Ad(`overview`),[se,ce]=(0,_.useState)(null),[le,ue]=(0,_.useState)(null),de=(0,_.useRef)(null),R=(e,t=!1)=>g?(I(e),oe({path:e,isDirectory:t}),v?.([e]),!0):!1,z=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),I(t),oe({path:t,isDirectory:n}),ce({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,_.useEffect)(()=>(Cd(`overview`,ae?(e,t)=>ce({x:e,y:t,target:ae}):null),()=>Cd(`overview`,null)),[ae]);let B=(e,t)=>o(e,t);(0,_.useEffect)(()=>{Fr().then(T,()=>T(null))},[]),(0,_.useEffect)(()=>{if(!ee)return;let e=()=>A(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||A(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[ee]),(0,_.useEffect)(()=>{if(!j)return;let e=()=>te(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[j]);let fe=Tu(w),pe=fe.map(e=>e.id),me=(0,_.useRef)(null),V=e=>ee?.kind===`panel`&&ee.id===e,H=e=>ee?.kind===`place`&&ee.id===e;(0,_.useEffect)(()=>{if(!J.available)return;let e=fe.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??i).filter(e=>e.length>0);J.send({type:`fs.watch`,payload:{paths:e}})},[fe.map(e=>e.path??e.id).join(`|`),i]),cm(me,p??null,`section`,m??(()=>void 0),[n.length,e.length,t.length,f]);let he=async(e,t)=>{let n={...w?.placeIcons};t?n[e]=t:delete n[e],A(null),await ye({placeIcons:n}),s(await hr())},ge=async(e,t)=>{let n={...w?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],P(null),await ye({placeNames:n}),s(await hr())},U=e=>{ie(null),N({drive:e,label:e.label||`Local Disk`})},_e=async()=>{if(!M)return;let{drive:e,label:t}=M;N(null);let n=await or(e.name,t.trim());n.ok?(ie(null),d?.()):ie(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},ve=w?.overviewColumns??1,ye=async e=>{if(!w)return;let t={...w,...e,overviewPanels:e.overviewPanels??pe,overviewHidden:[]};T(await Hr(t)),l?.()},be=async()=>{let e=await yc([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=w?.overviewBanners??[];await ye({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},xe=()=>void ye({overviewBanner:null}),Se=e=>{de.current={y:e.clientY,height:le??w?.overviewBannerHeight??220},e.currentTarget.setPointerCapture(e.pointerId)},Ce=e=>{let t=de.current;t&&ue(Math.min(900,Math.max(120,t.height+e.clientY-t.y)))},we=e=>{de.current=null,e.currentTarget.releasePointerCapture(e.pointerId),le!==null&&ye({overviewBannerHeight:le})},Te=(e,t)=>{let n=pe.indexOf(e),r=n+t;if(n<0||r<0||r>=pe.length)return;let i=[...pe];[i[n],i[r]]=[i[r],i[n]],ye({overviewPanels:i})},Ee=(e,t)=>{let n={...w?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],ye({overviewTitles:n})},De=(e,t)=>void ye({overviewViews:{...w?.overviewViews,[e]:t}}),Oe=e=>{let t=w?.overviewPinned??fe.filter(e=>e.pinned).map(e=>e.id);ye({overviewPinned:fe.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},ke=e=>{A(null);let t=t=>{let n={...t};return delete n[e],n},n=w?.overviewPinned??fe.filter(e=>e.pinned).map(e=>e.id);ye({overviewPanels:pe.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(w?.overviewTitles),overviewViews:t(w?.overviewViews),overviewIcons:t(w?.overviewIcons),panelPlaces:t(w?.panelPlaces)})},Ae=(e,t)=>{let n={...w?.overviewIcons};t?n[e]=t:delete n[e],A(null),ye({overviewIcons:n})},je=async e=>{if(!w)return;if(e===`folder`){let e=await vc();if(!e)return;let t=`folder:${e}`;pe.includes(t)||await ye({overviewPanels:[...pe,t]});return}if(e===`quick`){let e=2;for(;pe.includes(`quick:${e}`);)e+=1;await ye({overviewPanels:[...pe,`quick:${e}`]});return}let t=e;for(let n=2;pe.includes(t);n+=1)t=`${e}:${n}`;await ye({overviewPanels:[...pe,t]})},Me=async t=>{let n=await vc();if(!n)return;if(t.id===`quick`){await ye({quickAccess:[...new Set([...e.map(e=>e.path),n])]}),s(await hr());return}let r=t.places??[];r.some(e=>sh(e,n))||await ye({panelPlaces:{...w?.panelPlaces,[t.id]:[...r,n]}})},Ne=async(t,n)=>{A(null),t.id===`quick`?(await ye({quickAccess:e.filter(e=>!sh(e.path,n)).map(e=>e.path)}),s(await hr())):await ye({panelPlaces:{...w?.panelPlaces,[t.id]:(t.places??[]).filter(e=>!sh(e,n))}})},Pe=async(t,n,r)=>{if(sh(n,r))return;let i=t.id===`quick`?e.map(e=>e.path):t.places??[],a=i.findIndex(e=>sh(e,n)),o=i.findIndex(e=>sh(e,r));if(a<0||o<0)return;let c=[...i],[l]=c.splice(a,1);c.splice(o,0,l),t.id===`quick`?(await ye({quickAccess:c}),s(await hr())):await ye({panelPlaces:{...w?.panelPlaces,[t.id]:c}})},Fe=(e,t)=>({draggable:S,onDragOver:e=>{S&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{S&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{S&&(n.preventDefault(),Pe(e,n.dataTransfer.getData(`text/plain`),t))}}),Ie=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>sh(e.path,t));return{name:w?.placeNames?.[t]??n?.name??(Zi(t)||t),path:t,kind:`folder`,icon:n?.icon??w?.placeIcons?.[t]??null}}),Le=e=>{if(n.length===0)return(0,Y.jsx)(ih,{children:b(`Files and folders you open show up here.`)});let t=n.slice(0,r);return e.view===`grid`?(0,Y.jsx)(Im,{children:t.map(e=>{let t=Ja(x,e.path);return(0,Y.jsxs)(Lm,{$plain:!1,$selected:F===e.path,onClick:t=>{R(e.path,e.isDirectory)||(e.isDirectory?o(e.path,ki(t)):sr(e.path))},onDoubleClick:()=>g?.(e.path),onContextMenu:t=>z(t,e.path,e.isDirectory),title:e.path,children:[(0,Y.jsx)(Rm,{children:t&&x.useIcons?(0,Y.jsx)(Ou,{place:t,size:18}):(0,Y.jsx)(Ku,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,Y.jsxs)(zm,{children:[(0,Y.jsx)(`strong`,{children:t?.name||e.name}),(0,Y.jsx)(Bm,{children:e.path})]})]},e.path)})}):(0,Y.jsx)(Vm,{children:t.map(e=>{let t=Ja(x,e.path);return(0,Y.jsxs)(Hm,{$selected:F===e.path,onClick:t=>{R(e.path,e.isDirectory)||(e.isDirectory?o(e.path,ki(t)):sr(e.path))},onDoubleClick:()=>g?.(e.path),onContextMenu:t=>z(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&x.useIcons?(0,Y.jsx)(Ou,{place:t,size:15}):(0,Y.jsx)(Ku,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,Y.jsxs)(Um,{children:[(0,Y.jsx)(`strong`,{children:t?.name||e.name}),(0,Y.jsx)(Bm,{children:e.path})]})]},e.path)})})},Re=e=>{if(t.length===0)return(0,Y.jsx)(ih,{children:b(`No drives are available.`)});let n=t.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=M?.drive.name===t.name,i=r?(0,Y.jsx)(oh,{maxLength:32,onCancel:()=>N(null),onChange:e=>N({...M,label:e}),onCommit:()=>void _e(),value:M?.label??``}):(0,Y.jsx)(Y.Fragment,{children:oa(t)}),a=!r&&S&&(0,Y.jsx)(eh,{onClick:e=>{e.stopPropagation(),U(t)},title:b(`Rename volume`),type:`button`,children:(0,Y.jsx)(Gs,{size:11})}),s=(0,Y.jsx)(Bm,{children:b(`{free} free of {total}`,{free:Fi(t.freeSpace),total:Fi(t.totalSize)})});return e.view===`grid`?(0,Y.jsxs)(Lm,{$plain:!1,$selected:F===t.name,onClick:e=>{!r&&R(t.name,!0)||r||o(t.name,ki(e))},onDoubleClick:()=>!r&&g?.(t.name),onContextMenu:e=>!r&&z(e,t.name,!0),title:t.name,children:[(0,Y.jsx)(Rm,{children:(0,Y.jsx)(fs,{size:18})}),(0,Y.jsxs)(zm,{children:[(0,Y.jsxs)(`strong`,{children:[i,r&&aa(t),a]}),s]})]},t.name):(0,Y.jsxs)(Hm,{as:r?`div`:`button`,$selected:F===t.name,onClick:r?void 0:e=>{R(t.name,!0)||o(t.name,ki(e))},onDoubleClick:r?void 0:()=>g?.(t.name),onContextMenu:r?void 0:e=>z(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,Y.jsx)(fs,{size:18}),(0,Y.jsxs)(Um,{children:[(0,Y.jsxs)(`strong`,{children:[i,r&&aa(t),a]}),s]}),(0,Y.jsx)(Gm,{children:(0,Y.jsx)(Km,{$used:n,$tone:Xi(n)})})]},t.name)});return e.view===`grid`?(0,Y.jsx)(Im,{children:n}):(0,Y.jsx)(Vm,{children:n})},ze=e=>{switch(e.kind){case`quick`:{let t=Ie(e);return!S&&t.length===0?(0,Y.jsx)(ih,{children:b(`No folders in this Quick access panel yet.`)}):e.view===`grid`?(0,Y.jsxs)(Im,{children:[t.map(t=>(0,Y.jsxs)(Lm,{$plain:S,$selected:F===t.path,...Fe(e,t.path),onClick:e=>{!S&&!R(t.path,!0)&&o(t.path,ki(e))},onDoubleClick:()=>!S&&g?.(t.path),onContextMenu:e=>!S&&z(e,t.path,!0),title:t.path,children:[S&&(0,Y.jsx)($m,{onClick:n=>{n.stopPropagation(),Ne(e,t.path)},title:b(`Remove from Quick access`),type:`button`,children:(0,Y.jsx)(Os,{size:11})}),(0,Y.jsxs)(Zm,{children:[S?(0,Y.jsx)(Qm,{onClick:e=>{e.stopPropagation(),A(H(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:b(`Change icon`),type:`button`,children:(0,Y.jsx)(Rm,{children:(0,Y.jsx)(Ou,{place:t})})}):(0,Y.jsx)(Rm,{children:(0,Y.jsx)(Ou,{place:t})}),H(t.path)&&(0,Y.jsx)(lm,{onPick:e=>void he(t.path,e),value:w?.placeIcons?.[t.path]??t.icon})]}),(0,Y.jsxs)(zm,{children:[ne?.path===t.path?(0,Y.jsx)(`strong`,{children:(0,Y.jsx)(oh,{onCancel:()=>P(null),onChange:e=>P({path:t.path,name:e}),onCommit:()=>void ge(t.path,ne?.name??``),value:ne?.name??``})}):(0,Y.jsxs)(`strong`,{children:[t.name,S&&(0,Y.jsx)(eh,{onClick:e=>{e.stopPropagation(),A(null),P({path:t.path,name:t.name})},title:b(`Rename folder`),type:`button`,children:(0,Y.jsx)(Gs,{size:11})})]}),(0,Y.jsx)(Bm,{children:t.path})]})]},t.path)),S&&(0,Y.jsxs)(Wm,{onClick:()=>void Me(e),title:b(`Pin a folder here`),type:`button`,children:[(0,Y.jsx)(Rm,{children:(0,Y.jsx)(gs,{size:15})}),(0,Y.jsxs)(zm,{children:[(0,Y.jsx)(`strong`,{children:b(`Add folder`)}),(0,Y.jsx)(Bm,{children:b(`Pin a directory here`)})]})]})]}):(0,Y.jsxs)(Vm,{children:[t.map(t=>(0,Y.jsxs)(Hm,{$selected:F===t.path,...Fe(e,t.path),onClick:e=>{!S&&!R(t.path,!0)&&o(t.path,ki(e))},onDoubleClick:()=>!S&&g?.(t.path),onContextMenu:e=>!S&&z(e,t.path,!0),title:t.path,type:`button`,children:[(0,Y.jsxs)(Zm,{children:[S?(0,Y.jsx)(Qm,{onClick:e=>{e.stopPropagation(),A(H(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:b(`Change icon`),type:`button`,children:(0,Y.jsx)(Ou,{place:t,size:15})}):(0,Y.jsx)(Ou,{place:t,size:15}),H(t.path)&&(0,Y.jsx)(lm,{onPick:e=>void he(t.path,e),value:w?.placeIcons?.[t.path]??t.icon})]}),(0,Y.jsxs)(Um,{children:[ne?.path===t.path?(0,Y.jsx)(`strong`,{children:(0,Y.jsx)(oh,{onCancel:()=>P(null),onChange:e=>P({path:t.path,name:e}),onCommit:()=>void ge(t.path,ne?.name??``),value:ne?.name??``})}):(0,Y.jsxs)(`strong`,{children:[t.name,S&&(0,Y.jsx)(eh,{onClick:e=>{e.stopPropagation(),A(null),P({path:t.path,name:t.name})},title:b(`Rename folder`),type:`button`,children:(0,Y.jsx)(Gs,{size:11})})]}),(0,Y.jsx)(Bm,{children:t.path})]}),S&&(0,Y.jsx)($m,{$inline:!0,onClick:n=>{n.stopPropagation(),Ne(e,t.path)},title:b(`Remove from Quick access`),type:`button`,children:(0,Y.jsx)(Os,{size:11})})]},t.path)),S&&(0,Y.jsxs)(Wm,{$row:!0,onClick:()=>void Me(e),title:b(`Pin a folder here`),type:`button`,children:[(0,Y.jsx)(gs,{size:15}),(0,Y.jsxs)(Um,{children:[(0,Y.jsx)(`strong`,{children:b(`Add folder`)}),(0,Y.jsx)(Bm,{children:b(`Pin a directory here`)})]})]})]})}case`frequent`:return(0,Y.jsx)(ch,{mode:e.view,onContextMenu:z,onOpen:o,onPick:g,onSelectionChange:v,version:a});case`recent`:return Le(e);case`drives`:return Re(e);default:return(0,Y.jsx)(lh,{mode:e.view,onContextMenu:z,onOpen:o,onPick:g,onSelectionChange:v,openOnSingleClick:w?.openOnSingleClick??!1,path:e.path??i,selectionMenuId:`overview:${e.id}`,showCheckboxes:w?.showCheckboxes??!0,visibilityVersion:f})}};return(0,Y.jsxs)(pm,{children:[!h&&(0,Y.jsxs)(xm,{children:[(0,Y.jsx)(Sm,{role:`group`,title:b(`Columns`),children:[1,2,3,4,5].map(e=>(0,Y.jsx)(Cm,{$active:ve===e,onClick:()=>void ye({overviewColumns:e}),title:Pi(b,e,`1 column`,`{count} columns`),type:`button`,children:e},e))}),S&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(wm,{onClick:()=>void be(),title:b(`Choose banner`),type:`button`,children:[(0,Y.jsx)(gs,{size:12}),w?.overviewBanner?b(`Change banner…`):b(`Add banner…`)]}),w?.overviewBanner&&(0,Y.jsx)(wm,{onClick:xe,title:b(`Remove banner`),type:`button`,children:(0,Y.jsx)(Os,{size:12})})]}),S&&(0,Y.jsxs)(Tm,{children:[(0,Y.jsxs)(wm,{onClick:()=>te(e=>!e),onPointerDown:e=>e.stopPropagation(),title:b(`Add a panel`),type:`button`,children:[(0,Y.jsx)(gs,{size:12}),b(`Add panel ▾`)]}),j&&(0,Y.jsx)(Em,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`folder`].map(e=>(0,Y.jsx)(Dm,{onClick:()=>{te(!1),je(e)},type:`button`,children:b(e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:`Folder…`)},e))})]}),L.available&&(0,Y.jsx)(Fm,{onClick:e=>L.open(e.clientX,e.clientY),title:b(`Selection menu`),type:`button`,children:(0,Y.jsx)(gc,{size:14})}),(0,Y.jsxs)(wm,{onClick:()=>{C(e=>!e),te(!1),A(null),P(null),N(null)},title:b(S?`Done`:`Edit`),type:`button`,children:[S?(0,Y.jsx)(Ds,{size:13}):(0,Y.jsx)(Gs,{size:13}),b(S?`Done`:`Edit`)]})]}),re&&(0,Y.jsx)(rh,{children:re}),w?.overviewBanner&&(0,Y.jsxs)(mm,{style:{height:le??w.overviewBannerHeight??220},children:[O?(0,Y.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:k??void 0}):(0,Y.jsx)(`img`,{alt:``,src:k??void 0}),S&&(0,Y.jsx)(hm,{onDoubleClick:()=>{ue(null),ye({overviewBannerHeight:220})},onPointerDown:Se,onPointerMove:Ce,onPointerUp:we,title:b(`Drag to resize; double-click to reset`)})]}),S&&(0,Y.jsxs)(gm,{children:[(0,Y.jsx)(_m,{children:b(`Banners`)}),(0,Y.jsxs)(vm,{children:[(w?.overviewBanners??[]).map(e=>(0,Y.jsx)(ym,{$active:w?.overviewBanner===e,onClick:()=>void ye({overviewBanner:e}),title:e,type:`button`,children:(0,Y.jsx)(fm,{path:e})},e)),(0,Y.jsxs)(bm,{onClick:()=>void be(),title:b(`Add banner…`),type:`button`,children:[(0,Y.jsx)(gs,{size:18}),(0,Y.jsx)(`span`,{children:b(`Add banner…`)})]})]})]}),(0,Y.jsx)(Om,{ref:me,$columns:ve,children:fe.map(e=>{let t=pe.indexOf(e.id);return(0,Y.jsxs)(km,{children:[(0,Y.jsxs)(Am,{children:[(0,Y.jsxs)(jm,{children:[(0,Y.jsxs)(Zm,{children:[S?(0,Y.jsx)(Qm,{onClick:()=>A(V(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:b(`Change icon`),type:`button`,children:(0,Y.jsx)(Du,{panel:e,size:15})}):(0,Y.jsx)(Du,{panel:e,size:15}),V(e.id)&&(0,Y.jsx)(lm,{onPick:t=>Ae(e.id,t),value:e.icon})]}),S?(0,Y.jsx)(Pm,{defaultValue:e.title,onBlur:t=>Ee(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,Y.jsx)(Nm,{children:b(e.title)})]}),(0,Y.jsxs)(Mm,{children:[!S&&e.kind===`recent`&&(0,Y.jsx)(wm,{onClick:()=>void kr().then(c),title:b(`Clear`),type:`button`,children:b(`Clear`)}),!S&&e.kind===`frequent`&&(0,Y.jsx)(wm,{onClick:()=>void Ar().then(()=>u?.()),title:b(`Clear the frequent list`),type:`button`,children:b(`Clear`)}),!S&&(e.kind===`home`||e.kind===`folder`)&&(0,Y.jsx)(wm,{onClick:()=>o(e.path??i),title:b(`Open folder`),type:`button`,children:b(`Open`)}),S&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(Fm,{$active:e.pinned,onClick:()=>Oe(e.id),title:e.pinned?b(`Unpin from the sidebar`):b(`Pin to the sidebar`),type:`button`,children:(0,Y.jsx)(xs,{size:12})}),(0,Y.jsx)(Fm,{$active:e.view===`list`,onClick:()=>De(e.id,`list`),title:b(`List`),type:`button`,children:(0,Y.jsx)(Ss,{size:13})}),(0,Y.jsx)(Fm,{$active:e.view===`grid`,onClick:()=>De(e.id,`grid`),title:b(`Grid`),type:`button`,children:(0,Y.jsx)(Cs,{size:13})}),(0,Y.jsx)(Fm,{disabled:t===0,onClick:()=>Te(e.id,-1),title:b(`Move up`),type:`button`,children:(0,Y.jsx)(ms,{size:12})}),(0,Y.jsx)(Fm,{disabled:t===pe.length-1,onClick:()=>Te(e.id,1),title:b(`Move down`),type:`button`,children:(0,Y.jsx)(ms,{size:12})}),(0,Y.jsx)(Fm,{onClick:()=>ke(e.id),title:b(`Remove panel`),type:`button`,children:(0,Y.jsx)(Os,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?ze(e):(0,Y.jsx)(Jm,{children:ze(e)})]},e.id)})}),se&&(0,Y.jsx)(ul,{directory:i,menu:{x:se.x,y:se.y,paths:[se.target.path]},onClose:()=>ce(null),onCopy:(e,t)=>void ei(e,t),onAddToTray:y,onOpen:B,onOpenFile:e=>g?g(e):void sr(e),shortcuts:Ei,target:se.target})]})}function oh({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=qn();return(0,Y.jsxs)(th,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,Y.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,Y.jsx)(nh,{onClick:r,title:a(`Cancel`),type:`button`,children:(0,Y.jsx)(Os,{size:11})}),(0,Y.jsx)(nh,{$apply:!0,onClick:n,title:a(`Rename volume`),type:`button`,children:(0,Y.jsx)(Ds,{size:12})})]})}function sh(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}function ch({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:a}){let o=qn(),[s,c]=(0,_.useState)(null),[l,u]=(0,_.useState)(null),d=qa(),f=e=>r?(u(e),i?.([e]),!0):!1;if((0,_.useEffect)(()=>{Dr().then(c,()=>c([]))},[a]),!s)return(0,Y.jsx)(ih,{children:o(`Reading…`)});if(s.length===0)return(0,Y.jsx)(ih,{children:o(`Folders you open often show up here.`)});let p=e=>Pi(o,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path});return e===`grid`?(0,Y.jsx)(Im,{children:s.map(e=>{let i=Ja(d,e.path);return(0,Y.jsxs)(Lm,{$plain:!1,$selected:l===e.path,onClick:n=>{f(e.path)||t(e.path,ki(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,Y.jsx)(Rm,{children:i&&d.useIcons?(0,Y.jsx)(Ou,{place:i,size:18}):(0,Y.jsx)(Ku,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,Y.jsxs)(zm,{children:[(0,Y.jsx)(`strong`,{children:i?.name||e.name}),(0,Y.jsx)(Bm,{children:p(e)})]})]},e.path)})}):(0,Y.jsx)(Vm,{children:s.map(e=>{let i=Ja(d,e.path);return(0,Y.jsxs)(Hm,{$selected:l===e.path,onClick:n=>{f(e.path)||t(e.path,ki(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&d.useIcons?(0,Y.jsx)(Ou,{place:i,size:15}):(0,Y.jsx)(Ku,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,Y.jsxs)(Um,{children:[(0,Y.jsx)(`strong`,{children:i?.name||e.name}),(0,Y.jsx)(Bm,{children:p(e)})]})]},e.path)})})}function lh({path:e,mode:t,onOpen:n,onContextMenu:r,onPick:i,onSelectionChange:a,selectionMenuId:o,showCheckboxes:s,openOnSingleClick:c,visibilityVersion:l}){let u=qn(),[d,f]=(0,_.useState)(null),[p,m]=(0,_.useState)(null),h=qa();return(0,_.useEffect)(()=>{e&&(f(null),cr(e).then(f,()=>f(null)))},[e,l]),(0,_.useEffect)(()=>{if(J.available)return J.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&n.data.path.replace(/[\\\\/]+$/,``).toLowerCase()===e.replace(/[\\\\/]+$/,``).toLowerCase()&&cr(e,!1).then(f,()=>void 0)})},[e]),d?t===`list`?(0,Y.jsx)(qm,{children:(0,Y.jsx)(Id,{error:null,listing:d,loading:!1,onOpen:i??n,onOpenFile:i??(e=>void sr(e)),onSelectionChange:a,selectionMenuId:o,onSort:()=>void 0,openOnSingleClick:c,enableShortcuts:!1,showCheckboxes:s,showDetails:!1,showImages:!1,view:{...ir,columns:ar.columns??[]}})}):(0,Y.jsx)(Jm,{children:d.entries.length===0?(0,Y.jsx)(ih,{children:u(`This folder is empty.`)}):(0,Y.jsx)(Ym,{children:d.entries.map(e=>{let t=Ja(h,e.fullPath);return(0,Y.jsxs)(Xm,{$selected:p===e.fullPath,onClick:t=>{i?(m(e.fullPath),a?.([e.fullPath])):e.isDirectory?n(e.fullPath,ki(t)):sr(e.fullPath)},onDoubleClick:()=>i?.(e.fullPath),onContextMenu:t=>r?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&h.useIcons?(0,Y.jsx)(Ou,{place:t,size:16}):(0,Y.jsx)(Ku,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,Y.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,Y.jsx)(ih,{children:u(`Reading…`)})}function uh({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=qn(),s=qa(),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(``),[f,p]=(0,_.useState)([]),[m,h]=(0,_.useState)(0),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(null),x=(0,_.useRef)(null),S=(0,_.useRef)(null),C=(0,_.useRef)(0);(0,_.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,_.useEffect)(()=>{r&&r!==C.current&&(C.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,_.useEffect)(()=>{c&&x.current?.select()},[c]),(0,_.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[c]);let w=()=>{d(e.replace(/\\/g,`/`)),l(!0)},T=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,_.useEffect)(()=>{if(!c){p([]);return}let e=ph(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{cr(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),h(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let E=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,_.useLayoutEffect)(()=>{if(!c){v(null);return}let e=()=>{let e=S.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);v({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,Y.jsxs)(yh,{onPointerDown:e=>e.stopPropagation(),ref:S,children:[(0,Y.jsxs)(Ch,{children:[(0,Y.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),h(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),h(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?E(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):T(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:x,spellCheck:!1,value:u}),(0,Y.jsx)(wh,{onClick:()=>l(!1),title:o(`Cancel`),type:`button`,children:(0,Y.jsx)(Os,{size:12})}),(0,Y.jsx)(wh,{$apply:!0,onClick:T,onPointerDown:e=>e.stopPropagation(),title:o(`Open this path`),type:`button`,children:(0,Y.jsx)(Ds,{size:14})})]}),f.length>0&&g&&(0,Fc.createPortal)((0,Y.jsx)(bh,{onPointerDown:e=>e.stopPropagation(),style:{left:g.left,top:g.top,width:g.width},children:f.map((e,t)=>(0,Y.jsxs)(xh,{$active:t===m,onClick:t=>E(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>h(t),type:`button`,children:[(0,Y.jsx)(Ku,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,Y.jsx)(Sh,{children:e.name})]},e.path))}),document.body)]});let D=t?[{label:t,path:e,icon:n}]:fh(e,s.places);return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(mh,{onClick:w,title:o(`Click to type a path`),children:D.map((t,n)=>(0,Y.jsxs)(hh,{$last:n===D.length-1,children:[n>0&&(0,Y.jsx)(_h,{children:(0,Y.jsx)(ys,{size:9})}),(0,Y.jsxs)(vh,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):b({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,Y.jsx)(gh,{children:(0,Y.jsx)(Ou,{place:t.place,size:13})}):t.icon&&(0,Y.jsx)(gh,{children:t.icon}),t.label]})]},t.path))}),y&&(0,Y.jsx)(Qc,{items:[{label:o(`Open`),onSelect:()=>i(y.path)},{label:o(`Open in new tab`),onSelect:()=>i(y.path,!0)},{label:o(`Open with…`),onSelect:()=>void mi(y.path)},{label:o(`Copy path`),onSelect:()=>void navigator.clipboard.writeText(y.path)},{label:o(`Properties`),onSelect:()=>void pi([y.path])}],onClose:()=>b(null),x:y.x,y:y.y})]})}function dh(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function fh(e,t){let n=dh(e),r=e=>e.replace(/[\\/]+$/,``).toLowerCase(),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>r(t.path)===r(e.path));t>i&&(i=t,a=e)}return a&&i>=0&&n.splice(0,i+1,{label:a.name,path:n[i].path,place:a}),n}function ph(e){if(e.toLowerCase().startsWith(`yafm://`))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var mh=q.div`
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
`,hh=q.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,gh=q.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,_h=q.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,vh=q.button`
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
`,yh=q.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,bh=q.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${Ic}
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
`,xh=q.button`
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
`,Sh=q.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ch=q.div`
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
`,wh=q.button`
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
`,Th=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,Y.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,Y.jsx)(`path`,{d:`M4 4v6h6`})]});function Eh({onOpenLocation:e,find:t,onSearchMatches:n,showDetails:r=!0,onShowDetails:i,videoAudio:a=!1,videoAutoplay:o=!1,platform:s}){let c=qn(),l=Od(`recycle`),u=s===`windows`,[d,f]=(0,_.useState)([]),[p,m]=(0,_.useState)([]),[h,g]=(0,_.useState)(!1),[v,y]=(0,_.useState)(null),[b,x]=(0,_.useState)(!0),[S,C]=(0,_.useState)(!1),[w,T]=(0,_.useState)(null),[E,D]=(0,_.useState)(!1),[O,k]=(0,_.useState)(()=>new Set),[ee,A]=(0,_.useState)(null),[j,te]=(0,_.useState)(()=>{let e=Qa(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[M,N]=(0,_.useState)(null),[ne,P]=(0,_.useState)(null),[re,ie]=(0,_.useState)(()=>{let e=Xa(`yafm.recycle.preview.width`,320);return e>=220?e:320}),F=(0,_.useRef)(null),I=e=>{ie(e),Za(`yafm.recycle.preview.width`,e)},ae=(0,_.useCallback)(async()=>{x(!0),T(null);try{f(await _r(E))}catch(e){T(e instanceof Error?e.message:String(e))}finally{x(!1)}},[E]);(0,_.useEffect)(()=>{ae()},[ae]),(0,_.useEffect)(()=>{E||(m([]),g(!1),y(null))},[E]),(0,_.useEffect)(()=>{k(e=>{let t=new Set(d.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[d]);let oe=(0,_.useMemo)(()=>{let e=new Set(d.map(e=>e.id));return[...d,...p.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=Dh(e,t,j.column);return j.descending?-n:n})},[d,p,j]),L=(0,_.useMemo)(()=>!t?.open||t.query.trim().length===0?oe:oe.filter(e=>za(e.name,t)||za(e.originalPath,t)),[oe,t?.open,t?.query,t?.matchCase,t?.regex]),se=(0,_.useRef)(null);cm(se,t??null,`[data-search-block]`,n??(()=>void 0),[oe]),(0,_.useEffect)(()=>{k(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]);let ce=(0,_.useMemo)(()=>oe.filter(e=>O.has(e.id)),[oe,O]),le=ce.filter(e=>e.removable&&!e.isOrphan),ue=ce.filter(e=>e.removable),de=(e,t)=>{let n=t.ctrlKey||t.metaKey;k(r=>{if(t.shiftKey&&ee){let t=oe.findIndex(e=>e.id===ee),i=oe.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(oe[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),A(e.id)},R=(0,_.useCallback)(()=>k(new Set(L.map(e=>e.id))),[L]),z=L.length>0&&L.every(e=>O.has(e.id)),B=(0,_.useCallback)(async()=>{let e=le.map(e=>e.id);if(e.length!==0){C(!0);try{let t=await br(e);t.ok||await Cc(Pi(c,e.length,`Restored {done} of 1 item.`,`Restored {done} of {total} items.`,{done:t.done,total:e.length})),k(new Set),await ae()}finally{C(!1)}}},[ae,le,c]),fe=(0,_.useCallback)(async()=>{let e=ue.map(e=>e.id);if(P(null),e.length!==0){C(!0);try{let t=await xr(e);!t.ok&&!t.cancelled&&await Cc(Pi(c,e.length,`Deleted {done} of 1 item.`,`Deleted {done} of {total} items.`,{done:t.done,total:e.length})),k(new Set),await ae()}finally{C(!1)}}},[ue,ae,c]),pe=async()=>{P(null),C(!0);try{await yr(E),k(new Set),await ae()}finally{C(!1)}},me=async()=>{C(!0),y(null);try{let e=await Cr();if(e.cancelled){y(`Elevation was declined — nothing was read.`);return}if(e.failed){y(`The elevated helper could not produce a report. Try again.`);return}m(e.entries),g(!0)}finally{C(!1)}},V=async()=>{C(!0),P(null);try{await wr(),m([]),g(!1),y(null),await ae()}finally{C(!1)}},H=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},he=e=>{navigator.clipboard.writeText(e.originalPath)},ge=(e,t)=>{e.preventDefault(),t&&!O.has(t.id)&&k(new Set([t.id])),N({x:e.clientX,y:e.clientY})};(0,_.useEffect)(()=>(Cd(`recycle`,O.size>0?(e,t)=>N({x:e,y:t}):null),()=>Cd(`recycle`,null)),[O]),(0,_.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),R()):e.key===`Delete`?(e.preventDefault(),ue.length>0&&P(`delete`)):e.key===`Enter`&&le.length>0?(e.preventDefault(),B()):e.key===`Escape`&&(k(new Set),N(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[ue.length,le.length,B,R]);let U=[{label:c(`Restore`),icon:(0,Y.jsx)(Th,{width:14,height:14}),disabled:le.length===0,onSelect:()=>void B()},{label:c(`Delete permanently`),icon:(0,Y.jsx)(Es,{size:14}),danger:!0,disabled:ue.length===0,onSelect:()=>P(`delete`)},{label:c(`Properties`),icon:(0,Y.jsx)(bs,{size:14}),disabled:ce.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=ce;e&&Sr(e.id)}},{label:c(`Open original location`),icon:(0,Y.jsx)(us,{size:14}),disabled:ce.length!==1,onSelect:()=>{let[e]=ce;e&&H(e)}},{label:c(`Copy original path`),icon:(0,Y.jsx)(lc,{size:14}),disabled:ce.length!==1,onSelect:()=>{let[e]=ce;e&&he(e)}},{label:c(`Select all`),separatorBefore:!0,onSelect:R},{label:c(`Refresh`),icon:(0,Y.jsx)(hs,{size:14}),onSelect:()=>void ae()}],_e=ce.length>0?ce[0]:null,ve=_e?{name:_e.name,path:_e.contentPath||_e.originalPath,isDirectory:_e.isDirectory,size:_e.size,modified:_e.deleted,fields:[{label:c(`Type`),value:c(kh(_e))},{label:c(`Original location`),value:_e.originalPath},{label:c(`Date deleted`),value:Hi(_e.deleted)},{label:c(`Size`),value:_e.isDirectory?`—`:Fi(_e.size)},..._e.owner?[{label:c(`Owner`),value:_e.owner}]:[],{label:c(`Status`),value:_e.isOrphan?c(`Metadata only`):_e.removable?c(`Restorable`):c(`Other profile`)}]}:null;return(0,Y.jsxs)(jh,{ref:F,onContextMenu:e=>ge(e),children:[(0,Y.jsxs)(Mh,{children:[(0,Y.jsxs)(Nh,{children:[(0,Y.jsx)(Es,{size:16}),(0,Y.jsx)(`span`,{children:c(`Recycle Bin`)}),(0,Y.jsxs)(Ph,{children:[b?`…`:Pi(c,oe.length,`1 item`,`{count} items`),O.size>0&&` · ${c(`{count} selected`,{count:O.size})}`]})]}),(0,Y.jsxs)(Fh,{children:[(0,Y.jsx)(Lh,{$on:E,onClick:()=>D(e=>!e),title:c(`Show metadata records whose content is already gone`),type:`button`,children:c(`Orphans`)}),E&&u&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(Ih,{disabled:S||h,onClick:()=>void me(),title:c(h?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`),type:`button`,children:c(S?`Working…`:h?`Admin view loaded`:`Show all (admin)…`)}),h&&p.length>0&&(0,Y.jsx)(Ih,{disabled:S,onClick:()=>P(`purge`),type:`button`,children:c(`Delete every orphan`)})]}),(0,Y.jsx)(Ih,{disabled:S||le.length===0,onClick:()=>void B(),type:`button`,children:c(`Restore`)}),(0,Y.jsx)(Ih,{$danger:!0,disabled:S||ue.length===0,onClick:()=>P(`delete`),type:`button`,children:c(`Delete`)}),(0,Y.jsx)(Ih,{disabled:S||oe.length===0,onClick:()=>P(`empty`),type:`button`,children:c(`Empty`)}),(0,Y.jsx)(Rh,{onClick:()=>void ae(),title:c(`Refresh`),type:`button`,children:(0,Y.jsx)(hs,{size:14})}),l.available&&(0,Y.jsx)(Rh,{onClick:e=>l.open(e.clientX,e.clientY),title:c(`Selection menu`),type:`button`,children:(0,Y.jsx)(gc,{size:14})})]})]}),v&&(0,Y.jsx)(ag,{children:v}),w&&(0,Y.jsx)(og,{children:w}),!w&&!b&&(t?.open&&t.query.trim().length>0?L.length===0:oe.length===0)&&(0,Y.jsx)(og,{children:t?.open&&t.query.trim().length>0?c(`No matching items.`):c(`The recycle bin is empty.`)}),oe.length>0&&(0,Y.jsxs)(ig,{children:[(0,Y.jsxs)(zh,{ref:se,children:[(0,Y.jsxs)(Vh,{children:[(0,Y.jsx)(qh,{$checked:z,$partial:!z&&O.size>0,onClick:()=>z?k(new Set):R(),title:c(z?`Select none`:`Select all`),type:`button`,children:z?(0,Y.jsx)(Ds,{size:9}):O.size>0&&(0,Y.jsx)(Jh,{})}),(0,Y.jsxs)(Hh,{onClick:()=>ye(`name`),type:`button`,children:[c(`Name`),Oh(j,`name`)]}),(0,Y.jsxs)(Hh,{onClick:()=>ye(`original`),type:`button`,children:[c(`Original location`),Oh(j,`original`)]}),(0,Y.jsxs)(Hh,{onClick:()=>ye(`deleted`),type:`button`,children:[c(`Date deleted`),Oh(j,`deleted`)]}),(0,Y.jsxs)(Hh,{onClick:()=>ye(`size`),type:`button`,children:[c(`Size`),Oh(j,`size`)]}),(0,Y.jsxs)(Hh,{onClick:()=>ye(`type`),type:`button`,children:[c(`Type`),Oh(j,`type`)]}),(0,Y.jsx)(`span`,{})]}),(0,Y.jsx)(Uh,{onClick:e=>{e.target===e.currentTarget&&k(new Set)},children:oe.map(e=>(0,Y.jsxs)(Wh,{$checked:O.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>de(e,t),onContextMenu:t=>ge(t,e),onDoubleClick:()=>{k(new Set([e.id])),A(e.id),i?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,Y.jsx)(Kh,{$checked:O.has(e.id),children:O.has(e.id)&&(0,Y.jsx)(Ds,{size:9})}),(0,Y.jsxs)(Yh,{children:[(0,Y.jsx)(Ah,{entry:e}),(0,Y.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,Y.jsx)(rg,{children:c(`metadata only`)}),e.owner&&(0,Y.jsx)(rg,{$other:!0,children:c(`other profile`)})]}),(0,Y.jsx)(Zh,{children:e.originalPath}),(0,Y.jsx)(Qh,{children:Hi(e.deleted)}),(0,Y.jsx)($h,{children:e.isDirectory?`—`:Fi(e.size)}),(0,Y.jsx)(eg,{children:c(kh(e))}),(0,Y.jsxs)(tg,{children:[e.removable&&!e.isOrphan&&(0,Y.jsx)(ng,{onClick:t=>{t.stopPropagation(),br([e.id]).then(ae)},title:c(`Restore to its original folder`),type:`button`,children:(0,Y.jsx)(Th,{})}),e.removable&&(0,Y.jsx)(ng,{$danger:!0,onClick:t=>{t.stopPropagation(),k(new Set([e.id])),P(`delete`)},title:e.isOrphan?c(`Remove the leftover record`):c(`Delete permanently`),type:`button`,children:(0,Y.jsx)(Es,{size:13})})]})]},e.id))})]}),r&&(0,Y.jsx)(Xl,{emptyNote:c(`Nothing selected.`),info:ve,onWidth:I,selectionNote:ce.length>1?Pi(c,ce.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:a,videoAutoplay:o,width:re})]}),M&&(0,Y.jsx)(Qc,{items:U,onClose:()=>N(null),x:M.x,y:M.y}),(0,Y.jsx)(zl,{confirmLabel:c(ne===`empty`?`Empty the bin`:ne===`purge`?`Delete every orphan`:`Delete`),danger:!0,message:ne===`empty`?Pi(c,oe.length,`Permanently delete 1 item? This cannot be undone.`,`Permanently delete {count} items? This cannot be undone.`):ne===`purge`?c(`Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.`):Pi(c,ue.length,`Permanently delete 1 selected item? This cannot be undone.`,`Permanently delete {count} selected items? This cannot be undone.`),onCancel:()=>P(null),onConfirm:()=>{ne===`empty`?pe():ne===`purge`?V():fe()},open:ne!==null,title:c(ne===`empty`?`Empty the recycle bin`:ne===`purge`?`Delete every orphan`:`Delete permanently`)})]});function ye(e){te(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return $a(`yafm.recycle.sort`,n),n})}}function Dh(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return kh(e).localeCompare(kh(t),void 0,{sensitivity:`base`})}}function Oh(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function kh(e){if(e.isDirectory)return`Folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`File`}function Ah({entry:e}){let t=xa(e.originalPath,e.isDirectory);return(0,Y.jsx)(Xh,{children:t?(0,Y.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,Y.jsx)(us,{}):(0,Y.jsx)(ds,{})})}var jh=q.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Mh=q.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,Nh=q.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,Ph=q.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Fh=q.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Ih=q.button`
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
`,Lh=q(Ih)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Rh=q.button`
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
`,zh=q.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Bh=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,Vh=q.div`
    display: grid;
    grid-template-columns: ${Bh};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Hh=q.button`
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
`,Uh=q.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,Wh=q.div`
    display: grid;
    grid-template-columns: ${Bh};
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
`,Gh=q.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Kh=q.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,qh=q.button`
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
`,Jh=q.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,Yh=q(Gh)`
    display: flex;
    align-items: center;
    gap: 9px;
`,Xh=q.span`
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
`,Zh=q(Gh)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Qh=q(Gh)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,$h=q(Gh)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,eg=q(Gh)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,tg=q.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,ng=q.button`
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
`,rg=q.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,ig=q.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,ag=q.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,og=q.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function sg(){return J.available?(await J.request(`app.tags`)).tags:[]}async function cg(e){return!J.available||!e?!1:(await J.request(`app.tags.delete`,{name:e})).ok}async function lg(e,t){return!J.available||!e?[]:(await J.request(`app.tags.create`,{name:e,color:t})).tags}async function ug(e,t){return!J.available||!e?!1:(await J.request(`app.tags.color`,{name:e,color:t})).ok}async function dg(e,t){return!J.available||!e||!t?!1:(await J.request(`app.tags.rename`,{oldName:e,newName:t})).ok}var fg=`#3b82f6`,pg=`#6366f1`,mg=/^#?([0-9a-f]{6})$/i;function hg(e,t){if(!e)return t;let n=mg.exec(e.trim());return n?`#${n[1].toLowerCase()}`:t}function gg(e){let t=mg.exec(e);if(!t)return[59,130,246];let n=Number.parseInt(t[1],16);return[n>>16&255,n>>8&255,n&255]}function _g(e){let[t,n,r]=gg(e).map(e=>e/255),i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2,s=i-a;if(s===0)return{hue:0,saturation:0};let c=s/(1-Math.abs(2*o-1));return{hue:((i===t?(n-r)/s%6:i===n?(r-t)/s+2:(t-n)/s+4)*60+360)%360,saturation:c*100}}function vg(e,t,n,r=1){return r===1?`hsl(${e.toFixed(1)} ${t}% ${n}%)`:`hsl(${e.toFixed(1)} ${t}% ${n}% / ${r})`}function yg(e,t,n){let r=t/100,i=n/100,a=(1-Math.abs(2*i-1))*r,o=a*(1-Math.abs(e/60%2-1)),s=i-a/2,[c,l,u]=e<60?[a,o,0]:e<120?[o,a,0]:e<180?[0,a,o]:e<240?[0,o,a]:e<300?[o,0,a]:[a,0,o];return[c,l,u].map(e=>Math.round((e+s)*255)).join(`, `)}function bg(e,t){let n=hg(e,fg),r=hg(t,pg),[i,a,o]=gg(n),[s,c,l]=gg(r),{hue:u,saturation:d}=_g(n),f=Math.round(Math.min(Math.max(d*.35,6),30)),p=document.documentElement.style;p.setProperty(`--accent-primary`,n),p.setProperty(`--accent-rgb`,`${i}, ${a}, ${o}`),p.setProperty(`--accent-secondary`,r),p.setProperty(`--accent-secondary-rgb`,`${s}, ${c}, ${l}`),p.setProperty(`--border-color`,`rgba(${i}, ${a}, ${o}, 0.13)`),p.setProperty(`--border-color-hover`,`rgba(${i}, ${a}, ${o}, 0.40)`),p.setProperty(`--border-color-focus`,n),p.setProperty(`--accent-gradient`,`linear-gradient(135deg, ${n} 0%, ${r} 100%)`),p.setProperty(`--accent-glow`,`0 0 28px rgba(${i}, ${a}, ${o}, 0.28)`),p.setProperty(`--selection-bg`,`rgba(${i}, ${a}, ${o}, 0.11)`),p.setProperty(`--selection-border`,`rgba(${i}, ${a}, ${o}, 0.36)`),p.setProperty(`--bg-primary`,vg(u,f,7)),p.setProperty(`--bg-secondary`,vg(u,f,11)),p.setProperty(`--bg-card`,vg(u,f,14,.75)),p.setProperty(`--bg-card-hover`,vg(u,f,20,.85)),p.setProperty(`--bg-input`,vg(u,f,9,.75)),p.setProperty(`--bg-elevated`,vg(u,f,8,.96)),p.setProperty(`--bg-media`,vg(u,f,4)),p.setProperty(`--bg-rgb`,yg(u,f,7))}function xg(){let e=qn();return(0,Y.jsx)(Sg,{title:e(`Always applies to every folder`),children:e(`Global`)})}var Sg=q.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,Cg=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`reopenTab`,label:`Reopen closed tab`,note:`Brings back the tab you closed last, folder and all.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`refresh`,label:`Refresh`,note:`Reads the current folder again.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}],wg=`https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest`,Tg=`en`,Eg=[{id:`system`,label:`System`},{id:`24`,label:`24-hour`},{id:`12`,label:`12-hour`},{id:`custom`,label:`Custom`}],Dg=new Date(2026,10,5,16,8).getTime(),Og=`system`,kg={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},Ag=[{id:`application`,label:`Application`},{id:`time`,label:`Time format`},{id:`updates`,label:`Updates`},{id:`colors`,label:`Colors`},{id:`background`,label:`Background`},{id:`safety`,label:`Safety`},{id:`tags`,label:`Tags`},{id:`files-view`,label:`Files view`},{id:`shortcuts`,label:`Shortcuts`},{id:`memory`,label:`Memory`},{id:`overview`,label:`Overview`},{id:`gallery`,label:`Gallery`},{id:`icons`,label:`Icons`},{id:`extension-icons`,label:`Icons by extension`},{id:`folder-icons`,label:`Folder icons`},{id:`folder-index`,label:`Folder index`},{id:`indexing`,label:`Index tasks`},{id:`files`,label:`Files`}],jg=`yafm.colors.recent`;function Mg(){let e=Qa(jg);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function Ng({appInfo:e,focusSection:t,onSettingsChanged:n,find:r,onSearchMatches:i}){let a=qn(),[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)(``),[g,v]=(0,_.useState)(`file`),[y,b]=(0,_.useState)(!1),[x,S]=(0,_.useState)(!1),[C,w]=(0,_.useState)(null),[T,E]=(0,_.useState)(!1),[D,O]=(0,_.useState)(!1),[k,ee]=(0,_.useState)(null),[A,j]=(0,_.useState)(null),[te,M]=(0,_.useState)(null),[N,ne]=(0,_.useState)(!1),[P,re]=(0,_.useState)(null),[ie,F]=(0,_.useState)(null),[I,ae]=(0,_.useState)(!1),[oe,L]=(0,_.useState)([]),[se,ce]=(0,_.useState)(null),[le,ue]=(0,_.useState)(!1),[de,R]=(0,_.useState)(null),[z,B]=(0,_.useState)(``),[fe,pe]=(0,_.useState)(ku),[me,V]=(0,_.useState)(null),[H,he]=(0,_.useState)(null),[ge,U]=(0,_.useState)(``),[_e,ve]=(0,_.useState)(``),[ye,be]=(0,_.useState)(null),[xe,Se]=(0,_.useState)(Mg),[Ce,we]=(0,_.useState)({}),[Te,Ee]=(0,_.useState)(null),[De,Oe]=(0,_.useState)(null),[ke,Ae]=(0,_.useState)(!1),[je,Me]=(0,_.useState)(!1),[Ne,Pe]=(0,_.useState)(null),[Fe,Ie]=(0,_.useState)(Ag[0].id),Le=(0,_.useRef)(null),Re=(0,_.useRef)({}),ze=u?.defaultView??ar,Be=u?.themePresets??[],Ve=A?A.registered&&A.pathMatches:u?.archiveHandler??!1,He=A?.registered??u?.archiveHandler??!1,Ue=te?te.registered&&te.pathMatches:u?.defaultFileManager??!1;cm(Le,r??null,`section`,i??(()=>void 0),[u]),(0,_.useEffect)(()=>{let e=Le.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){Ie(Ag[Ag.length-1].id);return}let n=t+110,r=Ag[0].id;for(let{id:e}of Ag){let t=Re.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}Ie(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let We=e=>t=>{Re.current[e]=t},Ge=e=>{Re.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),Ie(e)};(0,_.useEffect)(()=>{t&&Ge(t)},[t]),(0,_.useEffect)(()=>{Wn().then(e=>s(e.available),()=>s([]))},[]),(0,_.useEffect)(()=>{qr().then(Oe,()=>void 0)},[]),(0,_.useEffect)(()=>{jr().then(l,()=>l(null)),Fr().then(d,()=>d(null)),Qr().then(E,()=>E(!1)),zr().then(j,()=>j(null)),Rr().then(M,()=>M(null)),sg().then(L,()=>L([]))},[]),(0,_.useEffect)(()=>{let e=()=>void Xr().then(w,()=>w(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let W=async e=>{if(!u)return;let t={...u,...e};Object.keys(e).every(e=>t[e]===u[e])||(d(t),_a(),d(await Hr(t)),n())},Ke=async e=>{let t=await yc(e);if(!t)return;let n=u?.backgroundCustom??[];await W({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},qe=e=>{u&&W({backgroundCustom:u.backgroundCustom.filter(t=>t!==e),backgroundSource:u.backgroundSource===`file:${e}`?null:u.backgroundSource})},Je=async()=>{if(!u)return;let t=await vc();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;u.protectedPaths.includes(r)||await W({protectedPaths:[...u.protectedPaths,r]})},Ye=()=>{let e=ge.trim();u&&e&&!u.protectedPaths.includes(e)&&(U(``),W({protectedPaths:[...u.protectedPaths,e]}))},Xe=()=>{if(!u||!me)return;let e=me.value.trim(),t=me.from;V(null),e.length!==0&&e!==t&&W({protectedPaths:u.protectedPaths.map(n=>n===t?e:n)})},G=e=>{u&&W({protectedPaths:u.protectedPaths.filter(t=>t!==e)})},Ze=async()=>{let e=await Ir();e.length>0&&await W({protectedPaths:e})},Qe=()=>{if(!u||!H)return;let e=H.value.trim(),t=H.from;he(null),e&&e!==t&&W({directoryIndexBlacklist:u.directoryIndexBlacklist.map(n=>n===t?e:n)})},$e=()=>{let e=_e.trim();u&&e&&!u.directoryIndexBlacklist.includes(e)&&(ve(``),W({directoryIndexBlacklist:[...u.directoryIndexBlacklist,e]}))},et=async()=>{if(!u)return;let t=await vc();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;u.directoryIndexBlacklist.includes(r)||await W({directoryIndexBlacklist:[...u.directoryIndexBlacklist,r]})},tt=e=>{u&&W({directoryIndexBlacklist:u.directoryIndexBlacklist.filter(t=>t!==e)})},nt=()=>{W({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},rt=()=>{if(!u||ye===null)return;let e=ye.trim()||`yyyy/MM/dd HH:mm`;be(null),e!==u.timeFormatPattern&&W({timeFormatPattern:e})},it=(e,t)=>{Se(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return $a(jg,i),i})},at=hg(u?.accentColor,fg),ot=hg(u?.secondaryColor,pg),st=(e,t)=>{u&&(it(`accent`,at),it(`secondary`,ot),W({accentColor:e,secondaryColor:t}))},ct=(e,t)=>{u&&(it(e,e===`accent`?at:ot),W(e===`accent`?{accentColor:t}:{secondaryColor:t}))},lt=async()=>{Ae(!0),Me(!1);try{Oe(await Jr())}catch{Me(!0)}finally{Ae(!1)}},ut=async()=>{if(!u||!Te)return;let e=Te.name.trim()||`${Te.accent.toUpperCase()} / ${Te.secondary.toUpperCase()}`,t=[...u.themePresets,{name:e,accent:Te.accent,secondary:Te.secondary}];Ee(null),await W({themePresets:t})},dt=async e=>{u&&await W({themePresets:u.themePresets.filter((t,n)=>n!==e)})},ft=e=>{let t=Ne;Pe(null),t&&t.role===e&&(e===`accent`?at:ot).toLowerCase()!==t.color.toLowerCase()&&it(e,t.color)},pt=async()=>{let e=z.trim();if(e&&!le){ue(!0),R(null);try{L(await lg(e,fe)),B(``)}catch{R(a(`Could not add the tag.`))}finally{ue(!1)}}},mt=async(e,t)=>{L(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await ug(e,t)||R(a(`Could not change the tag's color.`))},ht=async e=>{if(le)return;ue(!0),R(null);let t=await cg(e);L(await sg()),t||R(`"${e}" is still used by a folder whose index could not be updated.`),ue(!1)},gt=async()=>{let e=se;if(!e||le)return;let t=e.value.trim();t.length===0||t===e.name?ce(null):(ue(!0),R(null),await dg(e.name,t)?(L(await sg()),ce(null)):R(`Could not rename "${e.name}".`),ue(!1))},_t=async e=>{let t=new Set(ze.columns??ar.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=Nd.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await W({defaultView:{...ze,columns:n}})},vt=async()=>{if(D)return;let e=!T;O(!0),ee(null);try{let t=await $r(e);E(t),d(e=>e&&{...e,linksEnabled:t}),n(),t!==e&&ee(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{ee(`The request to Windows failed. Try again.`)}finally{O(!1)}},yt=async()=>{if(!N){ne(!0),re(null);try{let e=await Br();j(e);let t=e.registered&&e.pathMatches;d(e=>e&&{...e,archiveHandler:t}),n(),t||re(`Windows did not accept the archive registration. Try again.`)}catch{re(`The request to Windows failed. Try again.`)}finally{ne(!1)}}},bt=async()=>{if(!N){ne(!0),re(null);try{let e=await Vr();j(e),d(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&re(`The registration is still there. Try turning it off again.`)}catch{re(`The request to Windows failed. Try again.`)}finally{ne(!1)}}},xt=async(e,t)=>{if(!u)return;let n={...u.extensionIcons};t===null?delete n[e]:n[e]=t,await W({extensionIcons:n})},St={...Ei,...u?.shortcuts};(0,_.useEffect)(()=>{if(!ie)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){F(null);return}let t=Ai(e);t&&(F(null),W({shortcuts:{...St,[ie]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[ie,u]),(0,_.useEffect)(()=>{if(!I)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){ae(!1);return}let t=Ai(e);t&&(ae(!1),W({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[I,u]);let Ct=async e=>{await W({recentLimit:Math.min(Math.max(e,0),50)})},wt=(e,t)=>{let n=t??Ce[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};we(t=>({...t,[e]:void 0})),W(i)},Tt=async e=>{await W({galleryRoots:e.length>0?e:null})},Et=async()=>{let e=await vc(),t=u?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await Tt([...t,e])},Dt=async()=>{let e=m.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await xt(e,g),h(``))},Ot=async()=>{S(!0);try{let e=await vc();if(!e)return;let t=await yc([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await Wr(e.replace(/[\\/][^\\/]+$/,``),Zi(e),`file:${t}`)&&(_a(),p({folder:e,icon:t}))}finally{S(!1)}};return(0,Y.jsxs)(Gg,{children:[(0,Y.jsxs)(Kg,{ref:Le,children:[(0,Y.jsxs)(qg,{ref:We(`application`),children:[(0,Y.jsx)(Wg,{note:`The build, its yafm:// links, and what reopens at launch.`,title:`Application`}),(0,Y.jsxs)(Yg,{children:[(0,Y.jsxs)(Z,{children:[(0,Y.jsx)(Q,{children:a(`Version`)}),(0,Y.jsx)(w_,{children:e?`v${e.version}`:`—`})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsx)(Q,{children:a(`Platform`)}),(0,Y.jsx)(w_,{children:e?.platform??`—`})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Language`)}),(0,Y.jsx)($,{children:a(`The language the interface uses. English is the default; the system option follows the operating system.`)})]}),(0,Y.jsx)(x_,{children:(0,Y.jsx)(Vg,{disabled:!u,onChange:e=>void W({language:e}),options:[Og,...o.length>0?o:[Tg]],value:u?.language??Tg})})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Picker window size`)}),(0,Y.jsx)($,{children:a(`The size the folder and file picker opens at. Width and height are in pixels.`)})]}),(0,Y.jsxs)(x_,{children:[(0,Y.jsx)(P_,{inputMode:`numeric`,onBlur:e=>wt(`width`,e.currentTarget.value),onChange:e=>we(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Ce.width??String(u?.pickerWindowWidth??1200)}),(0,Y.jsx)(w_,{children:`×`}),(0,Y.jsx)(P_,{inputMode:`numeric`,onBlur:e=>wt(`height`,e.currentTarget.value),onChange:e=>we(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Ce.height??String(u?.pickerWindowHeight??800)})]})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Link paths`)}),(0,Y.jsx)($,{children:a(`Relative links keep working when the link and its target move together. Absolute links always store the full target path.`)})]}),(0,Y.jsx)(x_,{children:(0,Y.jsx)(pl,{disabled:!u,onChange:e=>void W({linkPathMode:e}),options:[{value:`relative`,label:a(`Relative`)},{value:`absolute`,label:a(`Absolute`)}],value:u?.linkPathMode??`relative`,width:160})})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Global hotkey`)}),(0,Y.jsx)($,{children:a(`Brings the window forward from anywhere while the app is running. Empty means no global shortcut.`)})]}),(0,Y.jsxs)(x_,{children:[(0,Y.jsx)(fv,{$listening:I,disabled:!u,onClick:()=>ae(!0),type:`button`,children:I?a(`Press a key…`):u?.globalHotkey?ji(u.globalHotkey):a(`None`)}),u?.globalHotkey&&(0,Y.jsx)(D_,{onClick:()=>void W({globalHotkey:null}),type:`button`,children:a(`Clear`)})]})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Open yafm:// links`)}),(0,Y.jsx)($,{children:a(`Registers this app for yafm:// links, for the current user only. While this is on, the app repairs the entry at every launch.`)}),k&&(0,Y.jsx)(C_,{children:k})]}),(0,Y.jsxs)(x_,{children:[(0,Y.jsx)(j_,{$on:T,children:a(T?`Active`:`Off`)}),(0,Y.jsx)(M_,{$on:T,disabled:D,onClick:()=>void vt(),title:a(T?`Stop opening yafm:// links`:`Open yafm:// links with this app`),type:`button`,children:(0,Y.jsx)(N_,{})})]})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Use as the default file manager`)}),(0,Y.jsx)($,{children:a(`Registers this app for folder opens on this account. Explorer stays available from the context menu; on Linux this sets the inode/directory default.`)}),te?.registered&&!te.pathMatches&&(0,Y.jsx)(C_,{children:a(`The registered path points to {path}. Register again to use this build.`,{path:te.registeredPath??`?`})})]}),(0,Y.jsxs)(x_,{children:[(0,Y.jsx)(j_,{$on:Ue,children:a(Ue?`Active`:`Off`)}),(0,Y.jsx)(M_,{$on:Ue,disabled:!u,onClick:()=>void(async()=>{let e=te?.registered&&!te.pathMatches?!0:!u?.defaultFileManager;await W({defaultFileManager:e}),M(await Rr().catch(()=>null))})(),title:a(Ue?`Stop using this app for folders`:`Use this app for folders`),type:`button`,children:(0,Y.jsx)(N_,{})})]})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Open archives with this app`)}),(0,Y.jsx)($,{children:a(`Registers this app for ZIP, 7z, RAR, TAR and the other archive types on this account, so double-clicking one shows it as a folder here. Windows may still ask once which app to use.`)}),(0,Y.jsx)($,{children:a(`When this is off, opening an archive uses the system's default application instead.`)}),A?.registered&&!A.pathMatches&&(0,Y.jsx)(C_,{children:a(`The registered path points to {path}. Register again to use this build.`,{path:A.registeredPath??`?`})}),P&&(0,Y.jsx)(C_,{children:P})]}),(0,Y.jsxs)(x_,{children:[(0,Y.jsx)(j_,{$on:Ve,children:a(Ve?`Active`:`Off`)}),(0,Y.jsx)(pv,{disabled:!u||N||Ve,onClick:()=>void yt(),type:`button`,children:a(`Register`)}),e?.platform===`windows`&&(0,Y.jsx)(pv,{onClick:()=>void Yr(`ms-settings:defaultapps`),type:`button`,children:a(`Default apps…`)}),(0,Y.jsx)(A_,{disabled:!u||N||!He,onClick:()=>void bt(),type:`button`,children:a(`Unregister`)})]})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Reopen the tabs that were open`)}),(0,Y.jsx)($,{children:a(`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`)})]}),(0,Y.jsx)(M_,{$on:u?.restoreTabs??!0,disabled:!u,onClick:()=>void W({restoreTabs:!u?.restoreTabs}),type:`button`,children:(0,Y.jsx)(N_,{})})]})]})]}),(0,Y.jsxs)(qg,{ref:We(`time`),children:[(0,Y.jsx)(Wg,{note:`Every timestamp in the interface uses this format: follow the system, force 24-hour or 12-hour time, or define your own pattern.`,title:`Time format`}),(0,Y.jsx)(Yg,{children:(0,Y.jsxs)(Xg,{children:[(0,Y.jsxs)(Zg,{children:[(0,Y.jsx)(Q,{children:a(`Format`)}),(0,Y.jsx)($,{children:a(`Follow the system, force 24-hour or 12-hour time, or define your own pattern.`)})]}),(0,Y.jsx)(ov,{children:Eg.map(e=>(0,Y.jsx)(sv,{$active:(u?.timeFormat??`24`)===e.id,onClick:()=>void W({timeFormat:e.id}),type:`button`,children:a(e.label)},e.id))}),(u?.timeFormat??`24`)===`custom`&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(cv,{"aria-label":a(`Pattern`),onBlur:rt,onChange:e=>be(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),rt()):e.key===`Escape`&&be(null)},spellCheck:!1,value:ye??u?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,Y.jsx)($,{children:a(`Tokens: yyyy year, MM month, dd day, HH 24-hour, mm minute, ss second, hh 12-hour and a AM/PM. Other characters are copied.`)})]}),(0,Y.jsxs)(lv,{children:[(0,Y.jsx)(`span`,{children:a(`Preview`)}),(0,Y.jsx)(`code`,{children:Ui(Dg,u?.timeFormat,ye??u?.timeFormatPattern)})]})]})})]}),(0,Y.jsxs)(qg,{ref:We(`updates`),children:[(0,Y.jsx)(Wg,{note:`The running build and the newest one published.`,title:`Updates`}),(0,Y.jsxs)(Yg,{children:[(0,Y.jsxs)(Z,{children:[(0,Y.jsx)(Q,{children:a(`Current version`)}),(0,Y.jsx)(w_,{children:e?`v${e.version}`:`—`})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsx)(Q,{children:a(`Latest version`)}),(0,Y.jsx)(w_,{children:De?`v${De.latest}`:`—`})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Check for updates`)}),(0,Y.jsx)($,{children:De&&!De.available?a(`You are on the latest version.`):a(`Reads the version file the release workflow publishes.`)})]}),(0,Y.jsx)(x_,{children:(0,Y.jsx)(pv,{disabled:ke,onClick:()=>void lt(),type:`button`,children:a(ke?`Checking…`:`Check now`)})})]}),De?.available&&(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Version {version} is available.`,{version:De.latest})}),(0,Y.jsx)($,{children:a(`Download the new build from the releases page.`)})]}),(0,Y.jsx)(x_,{children:(0,Y.jsx)(pv,{onClick:()=>void Yr(wg),type:`button`,children:a(`Open release page`)})})]}),je&&(0,Y.jsx)(Z,{children:(0,Y.jsx)(C_,{children:a(`Could not check for updates.`)})})]})]}),(0,Y.jsxs)(qg,{ref:We(`colors`),children:[(0,Y.jsx)(Wg,{note:`The accent and highlight colours the whole window uses.`,title:`Colors`}),(0,Y.jsxs)(Yg,{children:[(0,Y.jsxs)(Xg,{children:[(0,Y.jsxs)(Zg,{children:[(0,Y.jsx)(Q,{children:a(`Presets`)}),(0,Y.jsx)($,{children:a(`One click changes the accent and the highlight together.`)})]}),(0,Y.jsxs)(Qg,{children:[tp.map(e=>(0,Y.jsxs)($g,{$on:at.toLowerCase()===e.accent&&ot.toLowerCase()===e.secondary,onClick:()=>st(e.accent,e.secondary),title:`${a(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,Y.jsxs)(o_,{children:[(0,Y.jsx)(`i`,{style:{background:e.accent}}),(0,Y.jsx)(`i`,{style:{background:e.secondary}})]}),(0,Y.jsx)(e_,{children:a(e.name)})]},e.name)),Be.map((e,t)=>(0,Y.jsxs)(t_,{children:[(0,Y.jsxs)($g,{$on:at.toLowerCase()===e.accent.toLowerCase()&&ot.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>st(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,Y.jsxs)(o_,{children:[(0,Y.jsx)(`i`,{style:{background:e.accent}}),(0,Y.jsx)(`i`,{style:{background:e.secondary}})]}),(0,Y.jsx)(e_,{children:e.name})]}),(0,Y.jsx)(n_,{onClick:()=>void dt(t),title:a(`Remove preset`),type:`button`,children:(0,Y.jsx)(Os,{size:9})})]},`${e.name}-${t}`)),Te?(0,Y.jsxs)(i_,{children:[(0,Y.jsxs)(o_,{children:[(0,Y.jsx)(`i`,{style:{background:Te.accent}}),(0,Y.jsx)(`i`,{style:{background:Te.secondary}})]}),(0,Y.jsx)(a_,{autoFocus:!0,maxLength:24,onChange:e=>Ee({...Te,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),ut()):e.key===`Escape`&&(e.preventDefault(),Ee(null))},placeholder:a(`Preset name`),spellCheck:!1,value:Te.name}),(0,Y.jsx)(D_,{onClick:()=>void ut(),type:`button`,children:a(`Save`)}),(0,Y.jsx)(D_,{onClick:()=>Ee(null),type:`button`,children:a(`Cancel`)})]}):(0,Y.jsxs)(r_,{disabled:!u,onClick:()=>Ee({name:``,accent:at,secondary:ot}),title:a(`Save the current colours as a preset`),type:`button`,children:[(0,Y.jsx)(gs,{size:12}),a(`Add preset`)]})]})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Accent color`)}),(0,Y.jsx)($,{children:a(`Buttons, selections, focus rings, and active navigation.`)})]}),(0,Y.jsxs)(x_,{children:[(0,Y.jsx)(Ug,{colors:xe.accent,current:at,onApply:e=>ct(`accent`,e)}),(0,Y.jsx)(O_,{"aria-label":a(`Accent color`),disabled:!u,onBlur:()=>ft(`accent`),onChange:e=>void W({accentColor:e.target.value}),onFocus:()=>Pe({role:`accent`,color:at}),type:`color`,value:at}),(0,Y.jsx)(k_,{children:at.toUpperCase()})]})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Secondary color`)}),(0,Y.jsx)($,{children:a(`Gradients, highlights, and the second end of the accent ramp.`)})]}),(0,Y.jsxs)(x_,{children:[(0,Y.jsx)(Ug,{colors:xe.secondary,current:ot,onApply:e=>ct(`secondary`,e)}),(0,Y.jsx)(O_,{"aria-label":a(`Secondary color`),disabled:!u,onBlur:()=>ft(`secondary`),onChange:e=>void W({secondaryColor:e.target.value}),onFocus:()=>Pe({role:`secondary`,color:ot}),type:`color`,value:ot}),(0,Y.jsx)(k_,{children:ot.toUpperCase()})]})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Reset colors`)}),(0,Y.jsx)($,{children:a(`Returns the interface to the default blue and indigo theme.`)})]}),(0,Y.jsx)(x_,{children:(0,Y.jsx)(D_,{disabled:!u,onClick:()=>{it(`accent`,at),it(`secondary`,ot),W({accentColor:null,secondaryColor:null})},type:`button`,children:a(`Reset`)})})]})]})]}),(0,Y.jsxs)(qg,{ref:We(`background`),children:[(0,Y.jsx)(Wg,{note:`A picture or video behind the whole window, from the title bar to the bottom.`,title:`Background`}),(0,Y.jsxs)(Yg,{children:[(0,Y.jsxs)(Xg,{children:[(0,Y.jsxs)(Zg,{children:[(0,Y.jsx)(Q,{children:a(`Wallpaper`)}),(0,Y.jsx)($,{children:a(`None keeps the normal dark surface. Every built-in concept comes in the app's colour presets; your own pictures, SVGs and videos are kept in the gallery.`)})]}),(0,Y.jsx)(K_,{children:(0,Y.jsx)(q_,{$active:!u?.backgroundSource,onClick:()=>void W({backgroundSource:null}),title:a(`None`),type:`button`,children:(0,Y.jsx)(Q_,{children:a(`None`)})})}),(0,Y.jsxs)(U_,{children:[ip.map(e=>(0,Y.jsxs)(W_,{children:[(0,Y.jsx)(G_,{children:a(e.name)}),(0,Y.jsx)(K_,{children:e.variants.map(t=>(0,Y.jsx)(q_,{$active:u?.backgroundSource===t.id,onClick:()=>void W({backgroundSource:t.id}),title:`${a(e.name)} · ${a(t.preset)}`,type:`button`,children:(0,Y.jsx)(`img`,{alt:``,src:t.url})},t.id))})]},e.id)),(0,Y.jsxs)(W_,{children:[(0,Y.jsx)(G_,{children:a(`Motion`)}),(0,Y.jsx)(K_,{children:rp.map(e=>(0,Y.jsxs)(q_,{$active:u?.backgroundSource===e.id,onClick:()=>void W({backgroundSource:e.id}),title:a(e.name),type:`button`,children:[(0,Y.jsx)(`img`,{alt:``,src:e.poster}),(0,Y.jsx)(X_,{children:(0,Y.jsx)(Ns,{size:11})})]},e.id))})]}),(0,Y.jsxs)(W_,{children:[(0,Y.jsx)(G_,{children:a(`Custom`)}),(0,Y.jsxs)(K_,{children:[(u?.backgroundCustom??[]).map(e=>(0,Y.jsx)(Bg,{active:u?.backgroundSource===`file:${e}`,onRemove:()=>qe(e),onSelect:()=>void W({backgroundSource:`file:${e}`}),path:e},e)),(0,Y.jsxs)(Z_,{onClick:()=>void Ke([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,Y.jsx)(gs,{size:12}),a(`Image…`)]}),(0,Y.jsxs)(Z_,{onClick:()=>void Ke([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,Y.jsx)(gs,{size:12}),a(`Video…`)]})]})]})]})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsx)(Q,{children:a(`Blur`)}),(0,Y.jsxs)(x_,{children:[(0,Y.jsx)(H_,{max:40,min:0,onChange:e=>void W({backgroundBlur:Number(e.target.value)}),type:`range`,value:u?.backgroundBlur??0}),(0,Y.jsxs)(w_,{children:[u?.backgroundBlur??0,`px`]})]})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsx)(Q,{children:a(`Saturation`)}),(0,Y.jsxs)(x_,{children:[(0,Y.jsx)(H_,{max:200,min:0,onChange:e=>void W({backgroundSaturation:Number(e.target.value)}),type:`range`,value:u?.backgroundSaturation??100}),(0,Y.jsxs)(w_,{children:[u?.backgroundSaturation??100,`%`]})]})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsx)(Q,{children:a(`Brightness`)}),(0,Y.jsxs)(x_,{children:[(0,Y.jsx)(H_,{max:150,min:40,onChange:e=>void W({backgroundBrightness:Number(e.target.value)}),type:`range`,value:u?.backgroundBrightness??100}),(0,Y.jsxs)(w_,{children:[u?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,Y.jsxs)(qg,{ref:We(`safety`),children:[(0,Y.jsx)(Wg,{note:`Deleting a protected folder, anything inside a recursive entry, or a folder that contains one always waits for an explicit confirmation.`,title:`Safety`}),(0,Y.jsxs)(Yg,{children:[(0,Y.jsxs)(Xg,{children:[(0,Y.jsxs)(Zg,{children:[(0,Y.jsx)(Q,{children:a(`Protected folders`)}),(0,Y.jsx)($,{children:a(`Rules are full-path globs: * stays inside one name, ** crosses folders, and ? matches one character. A rule without a folder part, such as *.log, applies to that name at any depth. %VARS%, $VARS and ~ are expanded first.`)})]}),(0,Y.jsx)($_,{children:(u?.protectedPaths??[]).map(e=>(0,Y.jsxs)(ev,{children:[(0,Y.jsx)(tv,{"aria-label":a(`Protected path`),onBlur:Xe,onChange:t=>V({from:e,value:t.target.value}),onFocus:()=>V({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Xe()):e.key===`Escape`&&V(null)},spellCheck:!1,value:me?.from===e?me.value:e}),(0,Y.jsx)(nv,{onClick:()=>G(e),title:a(`Remove`),type:`button`,children:(0,Y.jsx)(Os,{size:10})})]},e))}),(0,Y.jsxs)(iv,{children:[(0,Y.jsx)(av,{"aria-label":a(`New protected rule`),onChange:e=>U(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ye())},placeholder:`*.log`,spellCheck:!1,value:ge}),(0,Y.jsx)(D_,{onClick:Ye,type:`button`,children:a(`Add the rule`)})]}),(0,Y.jsxs)(rv,{children:[(0,Y.jsx)(D_,{onClick:()=>void Ze(),type:`button`,children:a(`Restore defaults`)}),(0,Y.jsx)(D_,{onClick:()=>void Je(),type:`button`,children:a(`Add folder…`)})]})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Confirmation delay`)}),(0,Y.jsx)($,{children:a(`The delete button in the protected-folder dialog stays disabled for this many seconds. At least 2.`)})]}),(0,Y.jsxs)(x_,{children:[(0,Y.jsx)(H_,{max:30,min:2,onChange:e=>void W({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:u?.deleteDelaySeconds??5}),(0,Y.jsxs)(w_,{children:[u?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,Y.jsxs)(qg,{ref:We(`tags`),children:[(0,Y.jsx)(Wg,{note:`Every tag in the catalogue; add, rename, recolour or remove them here.`,title:`Tags`}),(0,Y.jsxs)(Yg,{children:[(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsxs)(S_,{children:[(0,Y.jsx)(T_,{"aria-label":a(`Color of the new tag`),onChange:e=>pe(e.target.value),type:`color`,value:fe}),(0,Y.jsx)(P_,{onChange:e=>B(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),pt())},placeholder:a(`New tag`),spellCheck:!1,value:z})]}),(0,Y.jsx)($,{children:a(`Add a tag here; it is available in every folder.`)})]}),(0,Y.jsx)(x_,{children:(0,Y.jsx)(D_,{disabled:le||z.trim().length===0,onClick:()=>void pt(),type:`button`,children:a(`Add`)})})]}),de&&(0,Y.jsx)(Z,{children:(0,Y.jsx)(C_,{children:de})}),oe.length===0&&(0,Y.jsx)(Z,{children:(0,Y.jsx)($,{children:a(`No tags yet. Add one below; it is available in every folder.`)})}),oe.map(e=>(0,Y.jsx)(Z,{children:se?.name===e.name?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsxs)(S_,{children:[(0,Y.jsx)(T_,{"aria-label":a(`Color of {tag}`,{tag:e.name}),onChange:t=>void mt(e.name,t.target.value),title:a(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,Y.jsx)(E_,{autoFocus:!0,disabled:le,onChange:t=>ce({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),gt()):e.key===`Escape`&&(e.preventDefault(),ce(null))},value:se.value})]}),(0,Y.jsx)($,{children:a(`Press Enter to save, Escape to cancel.`)})]}),(0,Y.jsxs)(x_,{children:[(0,Y.jsx)(D_,{disabled:le,onClick:()=>void gt(),type:`button`,children:a(`Save`)}),(0,Y.jsx)(D_,{disabled:le,onClick:()=>ce(null),type:`button`,children:a(`Cancel`)})]})]}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsxs)(S_,{children:[(0,Y.jsx)(T_,{"aria-label":a(`Color of {tag}`,{tag:e.name}),onChange:t=>void mt(e.name,t.target.value),title:a(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,Y.jsx)(Q,{children:e.name})]}),(0,Y.jsx)($,{children:Pi(a,e.folders,`Used in 1 folder. Renaming or removing it updates that folder's index.`,`Used in {count} folders. Renaming or removing it updates those folders' indexes.`)})]}),(0,Y.jsxs)(x_,{children:[(0,Y.jsx)(D_,{disabled:le,onClick:()=>ce({name:e.name,value:e.name}),type:`button`,children:a(`Edit`)}),(0,Y.jsxs)(A_,{disabled:le,onClick:()=>void ht(e.name),type:`button`,children:[(0,Y.jsx)(Es,{size:13}),a(`Remove`)]})]})]})},e.name))]})]}),(0,Y.jsxs)(qg,{ref:We(`files-view`),children:[(0,Y.jsx)(Wg,{note:`The defaults every folder starts with; a folder can still override them.`,title:`Files view`,global:!0}),(0,Y.jsxs)(Yg,{children:[(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Default view`)}),(0,Y.jsx)($,{children:a(`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`)})]}),(0,Y.jsx)(x_,{children:(0,Y.jsxs)(B_,{children:[(0,Y.jsx)(V_,{$on:ze.mode===`list`,onClick:()=>void W({defaultView:{...ze,mode:`list`}}),type:`button`,children:a(`List`)}),(0,Y.jsx)(V_,{$on:ze.mode===`grid`,onClick:()=>void W({defaultView:{...ze,mode:`grid`}}),type:`button`,children:a(`Grid`)})]})})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`List icon size`)}),(0,Y.jsx)($,{children:a(`The icon in the list rows.`)})]}),(0,Y.jsxs)(x_,{children:[(0,Y.jsx)(H_,{max:48,min:16,onChange:e=>void W({defaultView:{...ze,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:ze.iconSize}),(0,Y.jsxs)(w_,{children:[ze.iconSize,`px`]})]})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Grid size`)}),(0,Y.jsx)($,{children:a(`The height of a grid tile; the icon inside follows it.`)})]}),(0,Y.jsxs)(x_,{children:[(0,Y.jsx)(H_,{max:260,min:100,onChange:e=>void W({defaultView:{...ze,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:ze.gridSize}),(0,Y.jsxs)(w_,{children:[ze.gridSize,`px`]})]})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsxs)(S_,{children:[(0,Y.jsx)(Q,{children:a(`Selection checkboxes`)}),(0,Y.jsx)(xg,{})]}),(0,Y.jsx)($,{children:a(`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`)})]}),(0,Y.jsx)(M_,{$on:u?.showCheckboxes??!0,disabled:!u,onClick:()=>void W({showCheckboxes:!(u?.showCheckboxes??!0)}),type:`button`,children:(0,Y.jsx)(N_,{})})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsxs)(S_,{children:[(0,Y.jsx)(Q,{children:a(`Open with a single click`)}),(0,Y.jsx)(xg,{})]}),(0,Y.jsx)($,{children:a(`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`)})]}),(0,Y.jsx)(M_,{$on:u?.openOnSingleClick??!1,disabled:!u,onClick:()=>void W({openOnSingleClick:!(u?.openOnSingleClick??!1)}),type:`button`,children:(0,Y.jsx)(N_,{})})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsxs)(S_,{children:[(0,Y.jsx)(Q,{children:a(`Confirm before deleting`)}),(0,Y.jsx)(xg,{})]}),(0,Y.jsx)($,{children:a(`Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.`)})]}),(0,Y.jsx)(M_,{$on:u?.confirmDelete??!1,disabled:!u,onClick:()=>void W({confirmDelete:!(u?.confirmDelete??!1)}),type:`button`,children:(0,Y.jsx)(N_,{})})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsxs)(S_,{children:[(0,Y.jsx)(Q,{children:a(`Play audio in video previews`)}),(0,Y.jsx)(xg,{})]}),(0,Y.jsx)($,{children:a(`Video previews play muted by default. Turn this on to hear their audio while the details panel is open.`)})]}),(0,Y.jsx)(M_,{$on:u?.previewVideoAudio??!1,disabled:!u,onClick:()=>void W({previewVideoAudio:!(u?.previewVideoAudio??!1)}),type:`button`,children:(0,Y.jsx)(N_,{})})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsxs)(S_,{children:[(0,Y.jsx)(Q,{children:a(`Autoplay video previews`)}),(0,Y.jsx)(xg,{})]}),(0,Y.jsx)($,{children:a(`Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.`)})]}),(0,Y.jsx)(M_,{$on:u?.previewVideoAutoplay??!1,disabled:!u,onClick:()=>void W({previewVideoAutoplay:!(u?.previewVideoAutoplay??!1)}),type:`button`,children:(0,Y.jsx)(N_,{})})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsxs)(S_,{children:[(0,Y.jsx)(Q,{children:a(`Preview panel under the list`)}),(0,Y.jsx)(xg,{})]}),(0,Y.jsx)($,{children:a(`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`)})]}),(0,Y.jsx)(M_,{$on:ze.showImages??!0,onClick:()=>void W({defaultView:{...ze,showImages:!(ze.showImages??!0)}}),type:`button`,children:(0,Y.jsx)(N_,{})})]}),(0,Y.jsx)(Z,{children:(0,Y.jsxs)(b_,{children:[(0,Y.jsxs)(S_,{children:[(0,Y.jsx)(Q,{children:a(`Columns`)}),(0,Y.jsx)(xg,{})]}),(0,Y.jsx)($,{children:a(`Shown in every folder; changing them changes all folders at once.`)})]})}),(0,Y.jsx)(Z,{children:(0,Y.jsxs)(uv,{children:[Nd.map(e=>(0,Y.jsxs)(dv,{children:[(0,Y.jsx)(`input`,{checked:(ze.columns??[]).includes(e.id),onChange:()=>void _t(e.id),type:`checkbox`}),(0,Y.jsx)(`span`,{children:a(e.label)})]},e.id)),(0,Y.jsxs)(dv,{children:[(0,Y.jsx)(`input`,{checked:(ze.columns??[]).includes(`linkTarget`),onChange:()=>void _t(`linkTarget`),type:`checkbox`}),(0,Y.jsx)(`span`,{children:a(`Link target after the name`)})]})]})})]}),(0,Y.jsxs)(_v,{children:[a(`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.`),` `,(0,Y.jsx)(xg,{}),` `,a(`Anything marked as global always applies to every folder.`)]})]}),(0,Y.jsxs)(qg,{ref:We(`shortcuts`),children:[(0,Y.jsx)(Wg,{note:`The keys this window listens for. Click a combination to record a new one.`,title:`Shortcuts`}),(0,Y.jsxs)(Yg,{children:[Cg.map(({id:e,label:t,note:n})=>(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(t)}),(0,Y.jsx)($,{children:a(n)})]}),(0,Y.jsx)(x_,{children:(0,Y.jsx)(fv,{$listening:ie===e,onClick:()=>F(e),type:`button`,children:ie===e?a(`Press a key…`):ji(St[e])})})]},e)),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Reset`)}),(0,Y.jsx)($,{children:a(`Back to the default combination for every action.`)})]}),(0,Y.jsx)(x_,{children:(0,Y.jsx)(pv,{onClick:()=>void W({shortcuts:{...Ei}}),type:`button`,children:a(`Reset`)})})]})]})]}),(0,Y.jsxs)(qg,{ref:We(`memory`),children:[(0,Y.jsx)(Wg,{note:`What the process holds and how to give it back.`,title:`Memory`}),(0,Y.jsxs)(Yg,{children:[(0,Y.jsxs)(g_,{children:[(0,Y.jsxs)(__,{children:[(0,Y.jsx)(Q,{children:a(`Process memory`)}),(0,Y.jsx)(w_,{children:C?`${Fi(C.private)} · ${h_(C.private,C.available)}`:`—`})]}),(0,Y.jsx)(v_,{children:(0,Y.jsx)(y_,{$ratio:C?C.private/Math.max(C.available,1):0,$tone:Xi(C?C.private/Math.max(C.available,1):0)})}),(0,Y.jsx)($,{children:C?a(`Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.`,{available:Fi(C.available),resident:Fi(C.workingSet)}):a(`Reading the current usage…`)})]}),(0,Y.jsxs)(g_,{children:[(0,Y.jsxs)(__,{children:[(0,Y.jsx)(Q,{children:a(`Managed heap`)}),(0,Y.jsx)(w_,{children:C?`${Fi(C.managed)} · ${h_(C.managed,C.private)}`:`—`})]}),(0,Y.jsx)(v_,{children:(0,Y.jsx)(y_,{$ratio:C?C.managed/Math.max(C.private,1):0,$tone:`var(--accent-secondary)`})}),(0,Y.jsx)($,{children:a(`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`)})]}),(0,Y.jsxs)(g_,{children:[(0,Y.jsxs)(__,{children:[(0,Y.jsx)(Q,{children:a(`Native and runtime`)}),(0,Y.jsx)(w_,{children:C?`${Fi(Math.max(0,C.private-C.managed))} · ${h_(Math.max(0,C.private-C.managed),C.private)}`:`—`})]}),(0,Y.jsx)(v_,{children:(0,Y.jsx)(y_,{$ratio:C?Math.max(0,C.private-C.managed)/Math.max(C.private,1):0,$tone:`var(--accent-primary)`})}),(0,Y.jsx)($,{children:a(`The runtime, loaded libraries and the Rust helper share this part. Rust runs inside the process, so it has no separate figure.`)})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Free memory`)}),(0,Y.jsx)($,{children:a(`Compacts the heap and returns unused pages to the system. Always safe.`)})]}),(0,Y.jsx)(x_,{children:(0,Y.jsx)(pv,{onClick:()=>void Zr().then(w),type:`button`,children:a(`Trim now`)})})]})]})]}),(0,Y.jsxs)(qg,{ref:We(`overview`),children:[(0,Y.jsx)(Wg,{note:`The home tab's history and how much of it it shows.`,title:`Overview`}),(0,Y.jsx)(Yg,{children:(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Recent items`)}),(0,Y.jsx)($,{children:a(`How many recently opened folders the overview lists. 0 hides the section.`)})]}),(0,Y.jsx)(x_,{children:(0,Y.jsx)(P_,{max:50,min:0,onChange:e=>void Ct(Number(e.target.value)),type:`number`,value:u?.recentLimit??10})})]})})]}),(0,Y.jsxs)(qg,{ref:We(`gallery`),children:[(0,Y.jsx)(Wg,{note:`The folders the gallery scans for pictures and videos.`,title:`Gallery`}),(0,Y.jsxs)(Yg,{children:[(u?.galleryRoots??[]).map(e=>(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:Zi(e)}),(0,Y.jsx)($,{children:e})]}),(0,Y.jsx)(x_,{children:(0,Y.jsx)(mv,{onClick:()=>void Tt((u?.galleryRoots??[]).filter(t=>t!==e)),title:a(`Stop scanning this folder`),type:`button`,children:(0,Y.jsx)(Os,{size:12})})})]},e)),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Scan folders`)}),(0,Y.jsx)($,{children:(u?.galleryRoots??[]).length===0?a(`Nothing added yet, so the gallery reads the Pictures folder.`):a(`Only these folders are scanned, three levels deep.`)})]}),(0,Y.jsx)(x_,{children:(0,Y.jsx)(pv,{onClick:()=>void Et(),type:`button`,children:a(`Choose folder…`)})})]})]})]}),(0,Y.jsxs)(qg,{ref:We(`icons`),children:[(0,Y.jsx)(Wg,{note:`Where the shell's own icons and the built-in glyphs come from.`,title:`Icons`}),(0,Y.jsxs)(Yg,{children:[(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Use system file icons`)}),(0,Y.jsx)($,{children:a(`Ask the shell for the icon of each file type instead of the built-in glyphs.`)})]}),(0,Y.jsx)(M_,{$on:u?.systemIcons??!1,disabled:!u,onClick:()=>void W({systemIcons:!u?.systemIcons}),type:`button`,children:(0,Y.jsx)(N_,{})})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Use custom folder icons`)}),(0,Y.jsx)($,{children:a(`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`)})]}),(0,Y.jsx)(M_,{$on:u?.customFolderIcons??!1,disabled:!u,onClick:()=>void W({customFolderIcons:!u?.customFolderIcons}),type:`button`,children:(0,Y.jsx)(N_,{})})]})]})]}),(0,Y.jsxs)(qg,{ref:We(`extension-icons`),children:[(0,Y.jsx)(Wg,{note:`A custom glyph for one file extension.`,title:`Icons by extension`}),(0,Y.jsxs)(Yg,{children:[Object.entries(u?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:e}),(0,Y.jsx)($,{children:Lg(a,t)})]}),(0,Y.jsxs)(x_,{children:[(0,Y.jsx)(Rg,{source:t}),(0,Y.jsx)(mv,{onClick:()=>void xt(e,null),title:a(`Remove this rule`),type:`button`,children:(0,Y.jsx)(Os,{size:12})})]})]},e)),(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Add a rule`)}),(0,Y.jsx)($,{children:a(`Extension and the icon to draw for it.`)})]}),(0,Y.jsxs)(x_,{children:[(0,Y.jsx)(P_,{onChange:e=>h(e.target.value),placeholder:`.psd`,spellCheck:!1,value:m}),(0,Y.jsxs)(z_,{children:[(0,Y.jsx)(mv,{onClick:()=>b(e=>!e),title:a(`Choose the icon`),type:`button`,children:(0,Y.jsx)(Rg,{source:g})}),y&&(0,Y.jsx)(lm,{allowDefault:!1,onClose:()=>b(!1),onPick:e=>{v(e??`file`),b(!1)},value:g})]}),(0,Y.jsx)(mv,{onClick:()=>void Dt(),title:a(`Add the rule`),type:`button`,children:(0,Y.jsx)(gs,{size:13})})]})]})]})]}),(0,Y.jsxs)(qg,{ref:We(`folder-icons`),children:[(0,Y.jsx)(Wg,{note:`A single folder can carry an icon of its own.`,title:`Folder icons`}),(0,Y.jsxs)(Yg,{children:[(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Give a folder its own icon`)}),(0,Y.jsx)($,{children:a(`Stored in the folder's parent {index}, so it stays with the files.`,{index:`.yafm-index.db`})})]}),(0,Y.jsxs)(x_,{children:[f&&(0,Y.jsx)(zg,{src:f.icon}),(0,Y.jsx)(pv,{disabled:x,onClick:()=>void Ot(),type:`button`,children:a(x?`Choosing…`:`Choose folder and icon…`)})]})]}),f&&(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:Zi(f.folder)}),(0,Y.jsx)($,{children:f.folder})]}),(0,Y.jsx)(x_,{children:(0,Y.jsxs)(gv,{children:[(0,Y.jsx)(Ds,{size:11}),` `,a(`Saved`)]})})]})]})]}),(0,Y.jsxs)(qg,{ref:We(`folder-index`),children:[(0,Y.jsx)(Wg,{note:`The hidden cache that makes a folder open instantly next time.`,title:`Folder index`}),(0,Y.jsxs)(Yg,{children:[(0,Y.jsxs)(Z,{children:[(0,Y.jsxs)(b_,{children:[(0,Y.jsx)(Q,{children:a(`Keep a {index} in every folder`,{index:`.yafm-index.db`})}),(0,Y.jsx)($,{children:a(`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`)})]}),(0,Y.jsx)(M_,{$on:u?.writeDirectoryIndex??!0,disabled:!u,onClick:()=>void W({writeDirectoryIndex:!u?.writeDirectoryIndex}),type:`button`,children:(0,Y.jsx)(N_,{})})]}),(0,Y.jsxs)(Xg,{children:[(0,Y.jsxs)(Zg,{children:[(0,Y.jsx)(Q,{children:a(`Directory index blacklist`)}),(0,Y.jsx)($,{children:a(`Rules are full-path globs: * matches within one path segment and ** crosses folders. Matching folders use the central database instead of creating .yafm-index.db files.`)})]}),(0,Y.jsx)($_,{children:(u?.directoryIndexBlacklist??[]).map(e=>(0,Y.jsxs)(ev,{children:[(0,Y.jsx)(tv,{"aria-label":a(`Directory index blacklist rule`),onBlur:Qe,onChange:t=>he({from:e,value:t.target.value}),onFocus:()=>he({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Qe()):e.key===`Escape`&&he(null)},spellCheck:!1,value:H?.from===e?H.value:e}),(0,Y.jsx)(nv,{onClick:()=>tt(e),title:a(`Remove`),type:`button`,children:(0,Y.jsx)(Os,{size:10})})]},e))}),(0,Y.jsxs)(iv,{children:[(0,Y.jsx)(av,{"aria-label":a(`Directory index blacklist rule`),onChange:e=>ve(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),$e())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:_e}),(0,Y.jsx)(D_,{onClick:$e,type:`button`,children:a(`Add the rule`)})]}),(0,Y.jsxs)(rv,{children:[(0,Y.jsx)(D_,{onClick:nt,type:`button`,children:a(`Restore defaults`)}),(0,Y.jsx)(D_,{onClick:()=>void et(),type:`button`,children:a(`Add folder…`)})]})]})]}),!(u?.writeDirectoryIndex??!0)&&(0,Y.jsx)(vv,{children:Ig(a,e?.platform)})]}),(0,Y.jsxs)(qg,{ref:We(`indexing`),children:[(0,Y.jsx)(Wg,{note:`Background folder size and item-count walks.`,title:`Index tasks`}),(0,Y.jsx)(Fg,{})]}),(0,Y.jsxs)(qg,{ref:We(`files`),children:[(0,Y.jsx)(Wg,{note:`What the listings include.`,title:`Files`}),(0,Y.jsxs)(Yg,{children:[(0,Y.jsxs)(Z,{children:[(0,Y.jsx)(Q,{children:a(`Hidden items`)}),(0,Y.jsx)(w_,{children:Pg(a,c?.showHidden)})]}),(0,Y.jsxs)(Z,{children:[(0,Y.jsx)(Q,{children:a(`Protected operating system files`)}),(0,Y.jsx)(w_,{children:Pg(a,c?.showSystem)})]})]}),(0,Y.jsx)(_v,{children:a(`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`)})]})]}),(0,Y.jsxs)(u_,{"aria-label":a(`Settings sections`),children:[(0,Y.jsx)(d_,{children:a(`Sections`)}),(0,Y.jsx)(f_,{children:Ag.map(({id:e,label:t})=>(0,Y.jsx)(p_,{$active:Fe===e,onClick:()=>Ge(e),type:`button`,children:(0,Y.jsx)(`span`,{children:a(t)})},e))}),(0,Y.jsx)(m_,{children:a(`Changes are saved as you make them.`)})]})]})}function Pg(e,t){return e(t===void 0?`Reading…`:t?`Shown`:`Hidden`)}function Fg(){let e=qn(),[t,n]=(0,_.useState)(null);return(0,_.useEffect)(()=>{let e=!0,t=()=>Nr().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,Y.jsx)(vv,{children:e(`No indexing tasks are running.`)}):(0,Y.jsxs)(Yg,{children:[(0,Y.jsx)(Z,{children:(0,Y.jsx)(Q,{children:e(`{count} indexing tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,Y.jsx)(Z,{children:(0,Y.jsx)(w_,{title:e,children:e})},e))]}):(0,Y.jsx)(vv,{children:e(`Index task information is unavailable.`)})}function Ig(e,t){return e(`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`,{place:e(t===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:t===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`)})}function Lg(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built-in: {source}`,{source:t})}function Rg({source:e}){let t=Ca(e.startsWith(`file:`)?e.slice(5):null);return(0,Y.jsx)(hv,{children:t?(0,Y.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,Y.jsx)(Gu,{name:e,size:16})})}function zg({src:e}){let t=Ca(e);return(0,Y.jsx)(hv,{children:t&&(0,Y.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function Bg({path:e,active:t,onSelect:n,onRemove:r}){let i=qn(),a=Oa(e),o=_p(e);return(0,Y.jsxs)(J_,{children:[(0,Y.jsxs)(q_,{$active:t,onClick:n,title:e,type:`button`,children:[a&&(o?(0,Y.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${a}#t=0.5`}):(0,Y.jsx)(`img`,{alt:``,src:a})),o&&(0,Y.jsx)(X_,{children:(0,Y.jsx)(Ns,{size:11})})]}),(0,Y.jsx)(Y_,{onClick:r,title:i(`Remove`),type:`button`,children:(0,Y.jsx)(Os,{size:9})})]})}function Vg({value:e,options:t,onChange:n,disabled:r}){let i=qn(),[a,o]=(0,_.useState)(null),s=(0,_.useRef)(null);return(0,_.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(F_,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,Y.jsx)(`span`,{children:Hg(i,e)}),(0,Y.jsx)(I_,{children:(0,Y.jsx)(ys,{size:11})})]}),a&&(0,Fc.createPortal)((0,Y.jsx)(L_,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,Y.jsxs)(R_,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,Y.jsx)(`span`,{children:Hg(i,t)}),t===e&&(0,Y.jsx)(Ds,{size:11})]},t))}),document.body)]})}function Hg(e,t){return t===Og?e(`System default`):kg[t]??t}function Ug({colors:e,current:t,onApply:n}){let r=qn();if(e.length===0)return null;let[i,...a]=e;return(0,Y.jsxs)(s_,{children:[(0,Y.jsxs)(l_,{$color:i,onClick:()=>n(i),title:r(`Previous colour · {colour}`,{colour:i}),type:`button`,children:[(0,Y.jsx)(`i`,{}),r(`Previous`)]}),a.map(e=>(0,Y.jsx)(c_,{$color:e,onClick:()=>n(e),title:r(`Use {colour}`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,Y.jsx)(Ds,{size:9})},e))]})}function Wg({title:e,note:t,global:n=!1}){let r=qn();return(0,Y.jsxs)(Jg,{children:[(0,Y.jsxs)(`h2`,{children:[r(e),n&&(0,Y.jsx)(xg,{})]}),(0,Y.jsx)(`p`,{children:r(t)})]})}var Gg=q.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,Kg=q.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,qg=q.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,Jg=q.header`
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
`,Yg=q.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,Xg=q.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Zg=q.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Qg=q.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,$g=q.button`
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
`,e_=q.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,t_=q.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,n_=q.button`
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
`,r_=q.button`
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
`,i_=q.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,a_=q.input`
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
`,o_=q.span`
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
`,s_=q.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,c_=q.button`
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
`,l_=q.button`
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
`,u_=q.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,d_=q.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,f_=q.div`
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
`,p_=q.button`
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

    ${({$active:e})=>e&&En`
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
`,m_=q.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function h_(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}var g_=q.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,__=q.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,v_=q.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,y_=q.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,Z=q.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,b_=q.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,x_=q.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,Q=q.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,S_=q.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=q.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,C_=q.span`
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
`,w_=q.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,T_=q.input`
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
`,E_=q.input`
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
`,D_=q.button`
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
`,O_=q.input`
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
`,k_=q.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,A_=q.button`
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
`,j_=q.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,M_=q.button`
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
`,N_=q.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,P_=q.input`
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
`,F_=q.button`
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
`,I_=q.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,L_=q.div`
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
`,R_=q.button`
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
`,z_=q.span`
    position: relative;
    display: inline-flex;
`,B_=q.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,V_=q.button`
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
`,H_=q.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,U_=q.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,W_=q.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,G_=q.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,K_=q.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,q_=q.button`
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
`,J_=q.div`
    position: relative;
    width: 102px;
    height: 58px;
`,Y_=q.button`
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
`,X_=q.span`
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
`,Z_=q.button`
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
`,Q_=q.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,$_=q.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,ev=q.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,tv=q.input`
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
`,nv=q.button`
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
`,rv=q.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,iv=q.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,av=q.input`
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
`,ov=q.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,sv=q.button`
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
`,cv=q.input`
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
`,lv=q.div`
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
`,uv=q.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,dv=q.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,fv=q.button`
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
`,pv=q.button`
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
`,mv=q.button`
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
`,hv=q.span`
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
`,gv=q.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,_v=q.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,vv=q.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,yv=150,bv=2500,xv=3,Sv=600;function Cv({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:a,onSearchMatches:o,onPick:s,onSelectionChange:c,onAddToTray:l,showDetails:u=!0,videoAudio:d=!1,videoAutoplay:f=!1}){let p=qn(),m=Od(`gallery`),[h,g]=(0,_.useState)([]),[v,y]=(0,_.useState)(0),[b,x]=(0,_.useState)(!0),[S,C]=(0,_.useState)(null),[w,T]=(0,_.useState)(!1),[E,D]=(0,_.useState)([]),[O,k]=(0,_.useState)(()=>{let e=Xa(`yafm.preview.width`,320);return e>=220?e:320}),ee=(0,_.useRef)([]),A=(0,_.useRef)(0),j=(0,_.useRef)(!1),te=(0,_.useRef)(!0),M=(0,_.useRef)(0),N=(0,_.useRef)(null),ne=(0,_.useRef)(0),P=(0,_.useCallback)(async e=>{let t=++M.current;x(!0),te.current=!0,C(null);try{let n=await Tr(0,yv,e);if(t!==M.current)return;ee.current=n.entries,A.current=n.total,g(n.entries),y(n.total)}catch(e){t===M.current&&C(e instanceof Error?e.message:String(e))}finally{t===M.current&&(te.current=!1,x(!1))}},[]);(0,_.useEffect)(()=>{P(!1)},[P]);let re=(0,_.useCallback)(async()=>{if(te.current||j.current||ee.current.length>=A.current)return;let e=M.current;j.current=!0;try{let t=ee.current,n=A.current;for(let r=0;r<xv&&t.length<n;r++){let r=await Tr(t.length,yv,!1);if(e!==M.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<yv)break}if(e!==M.current)return;ee.current=t,A.current=n,(0,_.startTransition)(()=>{g(t),y(n)})}catch{}finally{j.current=!1}},[]),ie=(0,_.useCallback)(e=>{ne.current||=window.requestAnimationFrame(()=>{ne.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<bv&&re()})},[re]);(0,_.useEffect)(()=>{let e=N.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&re()},{root:e.parentElement,rootMargin:`${bv}px 0px`});return t.observe(e),()=>t.disconnect()},[re]),(0,_.useEffect)(()=>{if(h.length>=v)return;let e=window.setTimeout(()=>{let e=N.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<bv&&re()},200);return()=>window.clearTimeout(e)},[h.length,v,re]);let F=(0,_.useMemo)(()=>({path:``,parent:null,entries:h.map(wv),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[h]),I=(0,_.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),ae=(0,_.useCallback)(e=>{s?s(e):sr(e)},[s]),oe=(0,_.useCallback)(e=>{let t=Tv(e.modified);return{id:t,label:t}},[]),L=()=>{T(!0),P(!0).finally(()=>T(!1))},se=h.length<v,ce=(0,_.useMemo)(()=>!a?.open||a.query.trim().length===0?[]:h.filter(e=>za(e.name,a)||za(e.path,a)),[h,a?.open,a?.query,a?.matchCase,a?.regex]),le=(0,_.useMemo)(()=>a?.open?{query:a.query,matchCase:a.matchCase,regex:a.regex,mode:a.mode,currentPath:ce[Math.min(a.index,Math.max(0,ce.length-1))]?.path??null}:ja,[a?.open,a?.query,a?.matchCase,a?.regex,a?.mode,a?.index,ce]);(0,_.useEffect)(()=>{o?.(ce.length)},[ce.length,o]);let ue=(0,_.useCallback)(e=>{D(e),c?.(e)},[c]),de=e=>{k(e),Za(`yafm.preview.width`,e)},R=E.length>0?h.find(e=>e.path===E[0])??null:null,z=R?.name.includes(`.`)?R.name.slice(R.name.lastIndexOf(`.`)+1).toUpperCase():`—`,B=R&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(R.name)?p(`Video`):p(`Picture`),fe=R?R.path.slice(0,Math.max(R.path.lastIndexOf(`\\`),R.path.lastIndexOf(`/`))):``,pe=R?{name:R.name,path:R.path,isDirectory:!1,size:R.size,modified:R.modified,fields:[{label:p(`Type`),value:B},{label:p(`Extension`),value:z},{label:p(`Location`),value:fe},{label:p(`Full path`),value:R.path},{label:p(`Size`),value:Fi(R.size)},{label:p(`Modified`),value:Hi(R.modified)},{label:p(`Created`),value:`—`}]}:null;return(0,Y.jsxs)(Ev,{children:[(0,Y.jsxs)(kv,{children:[(0,Y.jsxs)(jv,{children:[(0,Y.jsx)(`span`,{children:p(`Gallery`)}),(0,Y.jsx)(Mv,{children:b?p(`scanning…`):p(`{shown} of {total} pictures`,{shown:h.length,total:v})})]}),(0,Y.jsxs)(Av,{children:[(0,Y.jsx)(Nv,{onClick:L,title:p(`Scan the folders again`),type:`button`,children:(0,Y.jsx)(Pv,{$spinning:w,children:(0,Y.jsx)(hs,{size:14})})}),m.available&&(0,Y.jsx)(Nv,{onClick:e=>m.open(e.clientX,e.clientY),title:p(`Selection menu`),type:`button`,children:(0,Y.jsx)(gc,{size:14})})]})]}),S&&(0,Y.jsx)(Iv,{children:S}),!S&&!b&&v===0&&(0,Y.jsx)(Iv,{children:p(`No pictures found.`)}),!S&&(b||v>0)&&(0,Y.jsxs)(Dv,{children:[(0,Y.jsx)(Ov,{children:(0,Y.jsx)(Id,{confirmDelete:n,find:le,listing:b&&h.length===0?null:F,loading:b,error:null,view:I,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:ue,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:ae,onOpenFile:ae,onRefresh:L,onAddToTray:l,groupOf:oe,onGridScroll:ie,gridFooter:(0,Y.jsx)(Fv,{$space:se?Sv:1,ref:N}),allowBackgroundMenu:!1})}),u&&(0,Y.jsx)(Xl,{emptyNote:p(`Nothing selected.`),info:pe,onWidth:de,selectionNote:E.length>1?Pi(p,E.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:d,videoAutoplay:f,width:O})]})]})}function wv(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function Tv(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(Ii(),{weekday:`long`}):t.toLocaleDateString(Ii(),{year:`numeric`,month:`long`,day:`numeric`})}var Ev=q.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Dv=q.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Ov=q.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`,kv=q.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,Av=q.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,jv=q.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,Mv=q.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Nv=q.button`
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
`,Pv=q.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,Fv=q.div`
    height: ${({$space:e})=>e}px;
`,Iv=q.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function Lv({places:e,drives:t,recent:n,recentLimit:r,currentPath:i,activeKind:a,homePath:o=``,version:s=0,historyVersion:c=0,hiddenViews:l=[],onNavigate:u,onOpenView:d}){let[f,p]=(0,_.useState)([]),m=qn(),[h,g]=(0,_.useState)(null),v=qa();(0,_.useEffect)(()=>{Fr().then(e=>{g(e),p(Tu(e).filter(e=>e.pinned))},()=>{g(null),p([])})},[s]);let y=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>Uv(e.path,t));return{name:h?.placeNames?.[t]??n?.name??(Zi(t)||t),path:t,kind:`folder`,icon:n?.icon??h?.placeIcons?.[t]??null}}),b=a===`files`;return(0,Y.jsxs)(Wv,{children:[(0,Y.jsxs)(Gv,{children:[!l.includes(`home`)&&(0,Y.jsxs)(Xv,{$active:a===`home`,onClick:e=>d(`home`,ki(e)),title:m(`Overview`),type:`button`,children:[(0,Y.jsx)(Ws,{}),(0,Y.jsx)(Qv,{children:m(`Overview`)})]}),!l.includes(`recycle`)&&(0,Y.jsxs)(Xv,{$active:a===`recycle`,onClick:e=>d(`recycle`,ki(e)),title:m(`Recycle Bin`),type:`button`,children:[(0,Y.jsx)(Es,{}),(0,Y.jsx)(Qv,{children:m(`Recycle Bin`)})]}),!l.includes(`gallery`)&&(0,Y.jsxs)(Xv,{$active:a===`gallery`,onClick:e=>d(`gallery`,ki(e)),title:m(`Gallery`),type:`button`,children:[(0,Y.jsx)(Ms,{}),(0,Y.jsx)(Qv,{children:m(`Gallery`)})]})]}),f.map(e=>(0,Y.jsxs)(qv,{children:[(0,Y.jsxs)(Xv,{as:`div`,$active:!1,children:[(0,Y.jsx)(Zv,{children:(0,Y.jsx)(Du,{panel:e,size:16})}),(0,Y.jsx)(Qv,{children:m(e.title)})]}),(0,Y.jsx)(Jv,{children:(0,Y.jsxs)(Yv,{children:[e.kind===`quick`&&y(e).map(e=>(0,Y.jsxs)(Xv,{$active:b&&Uv(i,e.path),onClick:t=>u(e.path,ki(t)),title:e.path,type:`button`,children:[(0,Y.jsx)(Ou,{place:e}),(0,Y.jsx)(Qv,{children:e.name})]},e.path)),e.kind===`recent`&&n.slice(0,r).map(e=>{let t=Ja(v,e.path);return(0,Y.jsxs)(Xv,{$active:b&&Uv(i,e.path),onClick:t=>e.isDirectory?u(e.path,ki(t)):void sr(e.path),title:e.path,type:`button`,children:[t&&v.useIcons?(0,Y.jsx)(Ou,{place:t}):(0,Y.jsx)(Ku,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,Y.jsx)(Qv,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,Y.jsx)(Bv,{historyVersion:c,onNavigate:u}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,Y.jsxs)(Xv,{$active:b&&Uv(i,e.name),onClick:t=>u(e.name,ki(t)),title:e.name,type:`button`,children:[(0,Y.jsx)(fs,{}),(0,Y.jsxs)(Qv,{children:[oa(e),(0,Y.jsxs)($v,{children:[Fi(e.freeSpace),` free`]}),(0,Y.jsx)(ey,{children:(0,Y.jsx)(ty,{$used:t,$tone:Xi(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,Y.jsx)(Vv,{onNavigate:u,path:e.path||o})]})})]},e.id)),!l.includes(`settings`)&&(0,Y.jsx)(Kv,{children:(0,Y.jsxs)(Xv,{$active:a===`settings`,onClick:e=>d(`settings`,ki(e)),title:m(`Settings`),type:`button`,children:[(0,Y.jsx)(bs,{}),(0,Y.jsx)(Qv,{children:m(`Settings`)})]})})]})}var Rv=10,zv=40;function Bv({historyVersion:e=0,onNavigate:t}){let n=qn(),[r,i]=(0,_.useState)(null),a=qa();return(0,_.useEffect)(()=>{Dr().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=Ja(a,e.path);return(0,Y.jsxs)(Xv,{$active:!1,onClick:n=>t(e.path,ki(n)),title:Pi(n,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,Y.jsx)(Ou,{place:r}):(0,Y.jsx)(Ku,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,Y.jsx)(Qv,{children:r?.name||e.name})]},e.path)})}function Vv({path:e,onNavigate:t}){let[n,r]=(0,_.useState)(null);(0,_.useEffect)(()=>{e&&(r(null),cr(e,!1).then(r,()=>r(null)))},[e]),(0,_.useEffect)(()=>{if(e&&J.available)return J.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&Uv(n.data.path,e)&&cr(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,Rv),o=i.filter(e=>!e.isDirectory).slice(0,zv);return(0,Y.jsxs)(Y.Fragment,{children:[a.map(e=>(0,Y.jsx)(Hv,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,Y.jsx)(Hv,{entry:e,onNavigate:t},e.fullPath))]})}function Hv({entry:e,onNavigate:t}){let n=qa(),r=Ja(n,e.fullPath);return(0,Y.jsxs)(Xv,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,ki(n)):void sr(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,Y.jsx)(Ou,{place:r}):(0,Y.jsx)(Ku,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,Y.jsx)(Qv,{children:r?.name||e.name})]})}function Uv(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}var Wv=q.aside`
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

    &:not(:hover) ${()=>$v},
    &:not(:hover) ${()=>ey} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,Gv=q.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,Kv=q(Gv)`
    margin-top: auto;
`,qv=q.div`
    display: flex;
    flex-direction: column;
`,Jv=q.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${Wv}:hover ${qv}:hover > & {
        grid-template-rows: 1fr;
    }
`,Yv=q.div`
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
`,Xv=q.button`
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
`,Zv=q.span`
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
`,Qv=q.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$v=q.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,ey=q.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,ty=q.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`;function ny({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=qn(),a=(0,_.useRef)(null),o=e.filter(e=>e.state===`running`).length;return(0,_.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[n,r]),(0,Y.jsxs)(iy,{ref:a,children:[(0,Y.jsxs)(ay,{$active:n,onClick:()=>r(!n),title:o>0?Pi(i,o,`1 operation running`,`{count} operations running`):i(`Status center`),type:`button`,children:[(0,Y.jsx)(Ts,{size:13}),o>0&&(0,Y.jsx)(oy,{children:o>9?`9+`:o})]}),n&&(0,Y.jsxs)(sy,{children:[(0,Y.jsxs)(cy,{children:[(0,Y.jsx)(ly,{children:i(`Status center`)}),(0,Y.jsxs)(uy,{children:[(0,Y.jsx)(dy,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`Clear finished`)}),(0,Y.jsx)(fy,{onClick:()=>r(!1),title:i(`Close`),type:`button`,children:(0,Y.jsx)(Os,{size:10})})]})]}),e.length===0?(0,Y.jsx)(my,{children:i(`No operations yet.`)}):(0,Y.jsx)(py,{children:e.map(e=>(0,Y.jsx)(ry,{task:e},e.id))})]})]})}function ry({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,Y.jsxs)(hy,{children:[(0,Y.jsxs)(gy,{children:[(0,Y.jsx)(_y,{$state:e.state,children:e.state===`done`?(0,Y.jsx)(Ds,{size:10}):e.state===`failed`?(0,Y.jsx)(Os,{size:10}):(0,Y.jsx)(vy,{})}),(0,Y.jsx)(yy,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,Y.jsxs)(by,{children:[Fi(e.bytesDone),` / `,Fi(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,Y.jsxs)(by,{children:[e.done,` / `,e.total]})]}),i&&(0,Y.jsx)(xy,{children:(0,Y.jsx)(Sy,{$percent:r,$indeterminate:t===0})}),e.error&&(0,Y.jsx)(Cy,{children:e.error})]})}var iy=q.div`
    position: relative;
    display: flex;
`,ay=q.button`
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
`,oy=q.span`
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
`,sy=q.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${Ic}
    ${Yc}
`,cy=q.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,ly=q.span`
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
`,uy=q.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,dy=q.button`
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
`,fy=q.button`
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
`,py=q.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,my=q.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,hy=q.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;
    ${Xc}

    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,gy=q.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,_y=q.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,vy=q.span`
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
`,yy=q.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,by=q.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,xy=q.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,Sy=q.div`
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
`,Cy=q.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function wy(){return J.available?(await J.request(`fs.history.list`)).entries:[]}async function Ty(e){return J.available?(await J.request(`fs.history.undoTo`,{id:e})).ok:!1}function Ey(){let e=qn(),[t,n]=(0,_.useState)(!1),[r,i]=(0,_.useState)([]),[a,o]=(0,_.useState)(!1),s=(0,_.useRef)(null),c=()=>void wy().then(i,()=>i([]));(0,_.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)};return window.addEventListener(`pointerdown`,r),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r)}},[t]);let l=async e=>{o(!0);try{await Ty(e),c()}finally{o(!1)}};return(0,Y.jsxs)(ky,{ref:s,children:[(0,Y.jsx)(Ay,{$active:t,onClick:()=>n(e=>!e),title:e(`History`),type:`button`,children:(0,Y.jsx)(ws,{size:14})}),t&&(0,Y.jsxs)(jy,{children:[(0,Y.jsxs)(My,{children:[(0,Y.jsx)(Ny,{children:e(`History`)}),(0,Y.jsx)(Py,{onClick:()=>n(!1),title:e(`Close`),type:`button`,children:(0,Y.jsx)(Os,{size:10})})]}),r.length===0?(0,Y.jsx)(Uy,{children:e(`No operations yet.`)}):(0,Y.jsx)(Fy,{children:r.map(t=>(0,Y.jsxs)(Iy,{children:[(0,Y.jsxs)(Ly,{children:[(0,Y.jsxs)(Ry,{children:[(0,Y.jsx)(Oy,{label:t.label}),Dy(e,t.label)]}),(0,Y.jsx)(zy,{children:Wi(t.at)})]}),t.paths.length>0&&(0,Y.jsxs)(By,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,Y.jsx)(Vy,{children:(0,Y.jsx)(Hy,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`Undo`)})})]},t.id))})]})]})}function Dy(e,t){if(t===`New folder`)return e(`New folder`);if(t===`New file`)return e(`New file`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`Move`?`Move {count} items`:t===`Copy`?`Copy {count} items`:`Delete {count} items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`Compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`Rename`)} ${i[1]}`:t}function Oy({label:e}){return e.startsWith(`Delete`)?(0,Y.jsx)(Es,{size:13}):e.startsWith(`Move`)||e.startsWith(`Copy`)?(0,Y.jsx)(lc,{size:13}):e.startsWith(`Rename`)?(0,Y.jsx)(Gs,{size:13}):e.startsWith(`Compress`)?(0,Y.jsx)(Fs,{size:13}):e.startsWith(`New`)?(0,Y.jsx)(gs,{size:13}):(0,Y.jsx)(vs,{size:13})}var ky=q.div`
    position: relative;
    display: flex;
`,Ay=q.button`
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
`,jy=q.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${Ic}
    ${Yc}
`,My=q.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Ny=q.span`
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
`,Py=q.button`
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
`,Fy=q.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,Iy=q.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,Ly=q.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,Ry=q.span`
    display: flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;

    svg {
        flex-shrink: 0;
        color: var(--text-muted);
    }
`,zy=q.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,By=q.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Vy=q.div`
    display: flex;
    justify-content: flex-end;
`,Hy=q.button`
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
`,Uy=q.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function Wy({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=qn(),[s,c]=(0,_.useState)(!1),l=(0,_.useRef)(null);(0,_.useEffect)(()=>{if(!s)return;let e=e=>{l.current?.contains(e.target)||c(!1)},t=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[s]),(0,_.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=Nd.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,Y.jsxs)(Gy,{ref:l,children:[(0,Y.jsx)(Ky,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`View`),type:`button`,children:e.mode===`grid`?(0,Y.jsx)(Cs,{size:14}):(0,Y.jsx)(Ss,{size:14})}),s&&(0,Y.jsxs)(qy,{children:[(0,Y.jsx)(Jy,{children:o(`View`)}),(0,Y.jsxs)(Yy,{children:[(0,Y.jsxs)(Xy,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,Y.jsx)(Ss,{size:12}),` `,o(`List`)]}),(0,Y.jsxs)(Xy,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,Y.jsx)(Cs,{size:12}),` `,o(`Grid`)]})]}),(0,Y.jsx)(Jy,{children:o(`List icon size`)}),(0,Y.jsxs)(Zy,{children:[(0,Y.jsx)(`input`,{"aria-label":o(`List icon size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,Y.jsxs)(Qy,{children:[e.iconSize,`px`]})]}),(0,Y.jsx)(Jy,{children:o(`Grid size`)}),(0,Y.jsxs)(Zy,{children:[(0,Y.jsx)(`input`,{"aria-label":o(`Grid size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,Y.jsxs)(Qy,{children:[e.gridSize,`px`]})]}),(0,Y.jsxs)(Jy,{children:[o(`Columns`),(0,Y.jsx)(xg,{})]}),Nd.map(e=>(0,Y.jsxs)($y,{children:[(0,Y.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,Y.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,Y.jsxs)($y,{children:[(0,Y.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,Y.jsx)(`span`,{children:o(`Link target after the name`)})]}),(0,Y.jsxs)(Jy,{children:[o(`Preview panel`),(0,Y.jsx)(xg,{})]}),(0,Y.jsxs)($y,{children:[(0,Y.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,Y.jsx)(`span`,{children:o(`Preview under the list`)})]})]})]})}var Gy=q.div`
    position: relative;
    display: flex;
    height: 100%;
`,Ky=q.button`
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
`,qy=q.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${Ic}
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
`,Jy=q.div`
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
`,Yy=q.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Xy=q.button`
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
`,Zy=q.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,Qy=q.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,$y=q.label`
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
`,eb=e=>(0,Y.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Y.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),tb=e=>(0,Y.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Y.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),nb=e=>(0,Y.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Y.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),rb=e=>(0,Y.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,Y.jsx)(`path`,{d:`M2 5h6`})}),ib=e=>(0,Y.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,Y.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),ab=e=>(0,Y.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,Y.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,Y.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function ob({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:p,activityOpen:m,onActivityOpenChange:h,trayCount:g,trayVisible:v,onToggleTray:y,split:b,canSplit:x,onToggleSplit:S,details:C,canDetails:w,onToggleDetails:T,shortcuts:E}){let D=qn(),O=Xn(),k=Zn(),[ee,A]=(0,_.useState)({left:!1,right:!1}),[j,te]=(0,_.useState)(null),[M,N]=(0,_.useState)(null),ne=(0,_.useRef)(null),P=(0,_.useRef)(null),re=(0,_.useRef)(null),ie=(0,_.useCallback)(()=>{let e=P.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;A(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,_.useEffect)(()=>{ie();let e=P.current;if(!e)return;let t=new ResizeObserver(ie);return t.observe(e),()=>t.disconnect()},[ie,e.length]),(0,_.useEffect)(()=>()=>{ne.current&&window.clearTimeout(ne.current.timer)},[]),(0,_.useEffect)(()=>{re.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let F=e=>P.current?.scrollBy({left:e,behavior:`smooth`}),I=()=>{ne.current&&window.clearTimeout(ne.current.timer),ne.current=null,N(null)};return(0,Y.jsxs)(ub,{children:[(0,Y.jsx)(db,{children:(0,Y.jsx)(ks,{size:19})}),(0,Y.jsxs)(fb,{children:[ee.left&&(0,Y.jsx)(mb,{onClick:()=>F(-180),title:D(`Scroll tabs left`),type:`button`,children:(0,Y.jsx)(eb,{})}),(0,Y.jsx)(pb,{onScroll:ie,onWheel:e=>{let t=P.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:P,children:e.map(e=>(0,Y.jsxs)(hb,{$active:e.id===t,$dragging:j===e.id,$dropTarget:M===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!Yu(t.dataTransfer)||!sb(e)||(t.preventDefault(),ne.current?.id===e.id))return;I(),N(e.id);let r=window.setTimeout(()=>{n(e.id),ne.current=null},500);ne.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(ne.current?.id===e.id||M===e.id)&&I()},onDragEnd:()=>{te(null),I()},onDragOver:t=>{(j||Yu(t.dataTransfer)&&sb(e))&&(t.preventDefault(),Yu(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>te(e.id),onDrop:t=>{if(t.preventDefault(),j)a(j,e.id);else if(sb(e)&&Yu(t.dataTransfer)){let{paths:r,move:i}=Xu(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}te(null),I()},onClick:()=>n(e.id),ref:e.id===t?re:void 0,title:e.path||e.title,type:`button`,children:[(0,Y.jsx)(cb,{tab:e}),(0,Y.jsx)(gb,{children:e.title}),e.partner&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(_b,{children:`|`}),(0,Y.jsx)(lb,{place:e.partner.place}),(0,Y.jsx)(gb,{children:e.partner.title})]}),(0,Y.jsx)(vb,{"data-shortcut":ji(E.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:D(`Close tab`),children:(0,Y.jsx)(nb,{})})]},e.id))}),ee.right&&(0,Y.jsx)(mb,{onClick:()=>F(180),title:D(`Scroll tabs right`),type:`button`,children:(0,Y.jsx)(tb,{})}),(0,Y.jsx)(yb,{"data-shortcut":ji(E.newTab),onClick:i,title:D(`New tab`),type:`button`,children:(0,Y.jsx)(gs,{size:13})})]}),(0,Y.jsx)(bb,{...k}),(0,Y.jsxs)(xb,{children:[(0,Y.jsx)(Cb,{$active:b,"data-shortcut":ji(E.splitView),disabled:!x,onClick:S,title:D(b?`Close split view`:`Split view`),type:`button`,children:(0,Y.jsx)(mc,{size:15})}),(0,Y.jsx)(Cb,{$active:C,disabled:!w,onClick:T,title:D(C?`Hide details panel`:`Show details panel`),type:`button`,children:(0,Y.jsx)(hc,{size:15})}),(0,Y.jsxs)(Sb,{$active:v,onClick:y,title:D(v?`Hide file tray`:`Show file tray`),type:`button`,children:[(0,Y.jsx)(oc,{size:14}),g>0&&(0,Y.jsx)(wb,{children:g>9?`9+`:g})]}),(0,Y.jsx)(Ey,{}),(0,Y.jsx)(ny,{tasks:f,onClear:p,open:m,onOpenChange:h}),(0,Y.jsx)(Wy,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,Y.jsx)(Tb,{onClick:O.minimize,title:D(`Minimize`),type:`button`,children:(0,Y.jsx)(rb,{})}),(0,Y.jsx)(Tb,{onClick:O.toggleMaximize,title:O.maximized?D(`Restore`):D(`Maximize`),type:`button`,children:O.maximized?(0,Y.jsx)(ab,{}):(0,Y.jsx)(ib,{})}),(0,Y.jsx)(Eb,{onClick:O.close,title:D(`Close`),type:`button`,children:(0,Y.jsx)(nb,{})})]})]})}function sb(e){return e.kind===`files`&&(!ta(e.path)||ra(e.path))}function cb({tab:e}){switch(e.kind){case`home`:return(0,Y.jsx)(ls,{size:13});case`settings`:return(0,Y.jsx)(bs,{size:13});case`recycle`:return(0,Y.jsx)(Es,{size:13});default:return(0,Y.jsx)(lb,{place:e.place})}}function lb({place:e}){return e?(0,Y.jsx)(Ou,{place:e,size:13}):(0,Y.jsx)(us,{size:13})}var ub=q.header`
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
`,db=q.span`
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
`,fb=q.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,pb=q.div`
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
`,mb=q.button`
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
`,hb=q.button`
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
`,gb=q.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,_b=q.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,vb=q.span`
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
`,yb=q.button`
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
`,bb=q.div`
    flex: 1;
    min-width: 28px;
`,xb=q.div`
    display: flex;
    flex-shrink: 0;
`,Sb=q.button`
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
`,Cb=q.button`
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
`,wb=q.span`
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
`,Tb=q.button`
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
`,Eb=q(Tb)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function Db(){let[e,t]=(0,_.useState)(null),n=(0,_.useRef)(null),r=(0,_.useRef)(void 0);return(0,_.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,Fc.createPortal)((0,Y.jsx)(Ob,{tooltip:e}),document.body):null}function Ob({tooltip:e}){let t=(0,_.useRef)(null),[n,r]=(0,_.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,_.useState)(()=>e.bottom+6);return(0,_.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,Y.jsxs)(kb,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,Y.jsx)(Ab,{children:e.text}),e.shortcut&&(0,Y.jsx)(jb,{children:e.shortcut})]})}var kb=q.div`
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
    ${Xc}
`,Ab=q.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,jb=q.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,Mb={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`},Nb=`yafm://`,Pb={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`},Fb=0,Ib=20,Lb=[{value:`0`,label:`Auto`},{value:`932`,label:`Japanese (CP932)`},{value:`936`,label:`Simplified Chinese (CP936)`},{value:`950`,label:`Traditional Chinese (CP950)`},{value:`949`,label:`Korean (CP949)`},{value:`1252`,label:`Western (CP1252)`},{value:`1250`,label:`Central European (CP1250)`},{value:`1251`,label:`Cyrillic (CP1251)`},{value:`1254`,label:`Turkish (CP1254)`},{value:`1253`,label:`Greek (CP1253)`},{value:`1256`,label:`Arabic (CP1256)`},{value:`1255`,label:`Hebrew (CP1255)`},{value:`1257`,label:`Baltic (CP1257)`},{value:`874`,label:`Thai (CP874)`},{value:`65001`,label:`UTF-8`}];function Rb(e){return`${Nb}${e===`home`?`overview`:e}`}function zb(e){return e.toLowerCase().startsWith(Nb)?Pb[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Bb(e){let t=e.trim();if(t.length===0)return null;if(!t.toLowerCase().startsWith(Nb))return t;let n=Pb[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?Rb(n):null}function Vb(e){return e.history[e.index]??Rb(`home`)}function Hb(e){return zb(Vb(e))??`files`}function Ub(e){let t=Vb(e);return zb(t)?``:e.listing?.path||t}function Wb(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||Hb(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function Gb(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function Kb(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||ir.iconSize,gridSize:e.view?.gridSize||t.gridSize||ir.gridSize,sort:e.view?.sort??ir.sort,sortDescending:e.view?.sortDescending??ir.sortDescending,columns:t.columns??ar.columns??[]}}function qb(e=Rb(`home`)){return Fb+=1,{id:`tab-${Fb}`,listing:null,loading:!zb(e),error:null,history:[e],index:0,fresh:!0,view:null}}function Jb(e){return e instanceof Error?e.message:String(e)}function Yb(e,t){let n=e=>e.replace(/[\\/]+/g,`\\`).replace(/\\$/,``).toLowerCase();return n(e)===n(t)}function Xb(e){let t=e.replace(/[\\/]+$/,``);if(t.length===0)return null;let n=Math.max(t.lastIndexOf(`\\`),t.lastIndexOf(`/`));return n<0?null:n===2&&t[1]===`:`?`${t.slice(0,2)}\\`:t.slice(0,n)}function Zb(e){let t=Zi(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function Qb(e){return ta(e)?la(e):void 0}function $b(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return Pi(e,t.entries.length,`1 item · {size}`,`{count} items · {size}`,{size:Fi(n)})}function ex(){let e=qn(),[t,n]=(0,_.useState)(()=>[qb()]),[r,i]=(0,_.useState)(()=>t[0].id),[a,o]=(0,_.useState)(()=>{let e=Xa(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[s,c]=(0,_.useState)([]),[l,u]=(0,_.useState)([]),[d,f]=(0,_.useState)(null),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)(null),v=Qn(),[y,b]=(0,_.useState)(Aa),[x,S]=(0,_.useState)(0),[C,w]=(0,_.useState)(0),[T,E]=(0,_.useState)(Aa),[D,O]=(0,_.useState)(0),[k,ee]=(0,_.useState)(0),[A,j]=(0,_.useState)(0),[te,M]=(0,_.useState)(0),N=(0,_.useRef)(te);N.current=te;let[ne,P]=(0,_.useState)([]),[re,ie]=(0,_.useState)(10),[F,I]=(0,_.useState)(null),[ae,oe]=(0,_.useState)(0),[L,se]=(0,_.useState)(Ei),[ce,le]=(0,_.useState)(0),[ue,de]=(0,_.useState)(0),[R,z]=(0,_.useState)(0),[B,fe]=(0,_.useState)(!0),[pe,me]=(0,_.useState)(()=>{let e=Xa(`yafm.preview.width`,320);return e>=220?e:320}),[V,H]=(0,_.useState)(null),[he,ge]=(0,_.useState)(null),[U,_e]=(0,_.useState)(`primary`),[ve,ye]=(0,_.useState)(null),[be,xe]=(0,_.useState)(null),[Se,Ce]=(0,_.useState)(null),[we,Te]=(0,_.useState)(null),[Ee,De]=(0,_.useState)({primary:0,secondary:0}),[Oe,ke]=(0,_.useState)({primary:null,secondary:null}),[Ae,je]=(0,_.useState)(null),[Me,Ne]=(0,_.useState)([]),[Pe,Fe]=(0,_.useState)(!1),Ie=(0,_.useRef)([]),Le=(0,_.useRef)([]),[Re,ze]=(0,_.useState)([]),[Be,Ve]=(0,_.useState)(!1),[He,Ue]=(0,_.useState)(!1),[We,Ge]=(0,_.useState)([]),[W,Ke]=(0,_.useState)(null),qe=(0,_.useRef)(0),[Je,Ye]=(0,_.useState)(()=>{let e=Qa(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?Gb({x:e.x,y:e.y}):Gb({x:Math.max(20,window.innerWidth-340),y:110})}),Xe=(0,_.useCallback)(()=>{Ye(e=>Gb(e)),Ue(!0)},[]),G=t.find(e=>e.id===r)??t[0],Ze=Hb(G),Qe=Vb(G),$e=Ub(G),et=Ze===`files`?G.listing?.parent??Xb($e):null,tt=G.splitWith?t.find(e=>e.id===G.splitWith):void 0,nt=Ze===`files`&&tt!==void 0,rt=tt?Ub(tt):``,it=tt?tt.listing?.parent??Xb(rt):null,at=nt&&tt&&U===`secondary`?tt:G,ot=F?.defaultView??ar,st=Kb(at,ot);(0,_.useEffect)(()=>{bg(F?.accentColor,F?.secondaryColor)},[F?.accentColor,F?.secondaryColor]),(0,_.useEffect)(()=>{Bi(F?.timeFormat,F?.timeFormatPattern)},[F?.timeFormat,F?.timeFormatPattern]),(0,_.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!F?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[F?.backgroundSource]),(0,_.useEffect)(()=>(nr(e=>new Promise(t=>{Ke({id:++qe.current,prompt:e,resolve:t})})),()=>nr(null)),[]),(0,_.useEffect)(()=>{_e(`primary`)},[r]),(0,_.useEffect)(()=>{E(Aa),ee(0),j(0)},[Ze]),(0,_.useEffect)(()=>{ee(0)},[T.query,T.matchCase,T.regex]),(0,_.useEffect)(()=>{ee(e=>A===0?0:Math.min(e,A-1))},[A]);let ct=st.columns.includes(`linkCount`),lt=(0,_.useMemo)(()=>{let e={},t=Tu(F),n={};for(let[e,t]of Object.entries(F?.placeNames??{}))n[ia(e)]=t;for(let t of s)e[ia(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=ia(t),i=s.find(e=>ia(e.path)===r);e[r]={name:n[r]??i?.name??(Zi(t)||t),path:t,kind:`folder`,icon:i?.icon??F?.placeIcons?.[t]??null}}return e},[s,F]),ut=(0,_.useMemo)(()=>({places:lt,useIcons:F?.systemIcons===!1}),[lt,F?.systemIcons]),dt=F?.defaultView?.showImages??!0,ft=F?.defaultView?.imageStripHeight??ar.imageStripHeight,pt=Ze===`home`?(0,Y.jsx)(Ws,{size:13}):Ze===`settings`?(0,Y.jsx)(bs,{size:13}):Ze===`recycle`?(0,Y.jsx)(Es,{size:13}):Ze===`gallery`?(0,Y.jsx)(Ms,{size:13}):void 0,mt=y.open&&y.query.length>0,ht=(0,_.useMemo)(()=>mt&&at.listing?at.listing.entries.filter(e=>za(e.isDirectory?Ya(ut,e.fullPath,e.name):e.name,y)).map(e=>e.fullPath):[],[mt,y,at.listing,ut]);(0,_.useEffect)(()=>{S(0)},[y.query,y.matchCase,y.regex,at.listing?.path]);let gt=ht.length===0?-1:Math.min(x,ht.length-1),_t=(0,_.useCallback)(()=>{b(e=>({...e,open:!1,query:``})),S(0)},[]),vt=(0,_.useCallback)(()=>{b(e=>({...e,open:!0})),w(e=>e+1)},[]),yt=(0,_.useCallback)(()=>{E(e=>({...e,open:!0})),O(e=>e+1)},[]),bt=(0,_.useCallback)(()=>{E(Aa),ee(0),j(0)},[]),xt=(0,_.useCallback)(e=>{ee(t=>A===0?0:(Math.min(t,A-1)+e+A)%A)},[A]),St=(0,_.useCallback)(e=>{b(t=>({...t,open:!0,query:t.open?t.query+e:e})),w(e=>e+1)},[]),Ct=(0,_.useCallback)(e=>{S(t=>ht.length===0?0:(Math.min(t,ht.length-1)+e+ht.length)%ht.length)},[ht.length]),wt=(0,_.useRef)({tabs:t,activeId:r,activePane:U});wt.current={tabs:t,activeId:r,activePane:U};let Tt=(0,_.useRef)(F);Tt.current=F;let Et=(0,_.useRef)(!1),Dt=(0,_.useRef)([]),Ot=(0,_.useCallback)((e,t)=>{n(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),K=(0,_.useRef)(new Map),kt=(0,_.useCallback)(e=>{let t=(K.current.get(e)??0)+1;return K.current.set(e,t),()=>K.current.get(e)===t},[]),At=(0,_.useCallback)(async(e,t,n)=>{try{let r=await mr(t,ct);if(!n()||!r.listing)return;Ot(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[ct,Ot]),jt=(0,_.useCallback)(async(e,t,n=!1)=>{let r=kt(e);_t();let i=!n||!wt.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;Ot(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&Yb(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&At(e,t,r);let o=await cr(t,!0,ct,N.current,t?Qb(t):void 0);if(!r())return;Ot(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),n||Or(o.path).then(()=>oe(e=>e+1))}catch(i){if(!r())return;let a=wt.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?Ub(a):``,s=o.replace(/[\\/]+$/,``),c=Math.max(s.lastIndexOf(`\\`),s.lastIndexOf(`/`)),l=c>0?s.slice(0,c):null,u=Jb(i);if(o&&fa(u)){let i=na(o),a=await Tc(i,!!la(i));if(a){ua(i,a),r()&&jt(e,t,n);return}}Ot(e,e=>({listing:{path:o,parent:l,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:u,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[kt,ct,Ot,_t,At]),Mt=(0,_.useCallback)((e,t)=>{let n=Bb(t);n&&(zb(n)?(_t(),kt(e),Ot(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):jt(e,n))},[kt,jt,Ot,_t]),Nt=(0,_.useCallback)(async(e,t,n)=>{if(_t(),zb(t)){kt(e),Ot(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=kt(e);Ot(e,()=>({index:n,listing:null,loading:!0,error:null}));try{if(await At(e,t,r),!r())return;let n=await cr(t,!0,ct,N.current,Qb(t));if(!r())return;Ot(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;let a=t.replace(/[\\/]+$/,``),o=Math.max(a.lastIndexOf(`\\`),a.lastIndexOf(`/`));if(fa(Jb(i))){let i=na(t),a=await Tc(i,!!la(i));if(a){ua(i,a),r()&&Nt(e,t,n);return}}Ot(e,()=>({listing:{path:t,parent:o>0?a.slice(0,o):null,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:Jb(i)}))}},[kt,ct,Ot,_t,At]),Pt=(0,_.useCallback)((e,t=!0)=>{let r=qb(e??Rb(`home`));return n(e=>[...e,r]),t&&i(r.id),e&&!zb(e)&&jt(r.id,e),r.id},[jt]),Ft=(0,_.useCallback)(e=>{for(let t of wt.current.tabs)Hb(t)===`files`&&Yb(Ub(t),e)&&jt(t.id,e,!0)},[jt]),It=(0,_.useCallback)((e,t=!1)=>{t?Pt(Rb(e)):Mt(wt.current.activeId,Rb(e))},[Pt,Mt]),Lt=(0,_.useCallback)(e=>{let{tabs:t,activeId:r}=wt.current,a=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==a?.splitWith);if(a&&!a.hidden&&(Le.current.push(Vb(a)),Le.current.length>Ib&&Le.current.shift()),o.length===0){let e=qb();n([e]),i(e.id);return}let s=t.findIndex(t=>t.id===e);n(o),r===e&&i(o[Math.min(s,o.length-1)].id)},[]),Rt=(0,_.useCallback)(()=>{let e=Le.current.pop();if(!e)return;let t={...qb(e),fresh:!1};n(e=>[...e,t]),i(t.id),Hb(t)===`files`&&jt(t.id,Ub(t))},[jt]),zt=(0,_.useCallback)((e,t=!1)=>{t?Pt(e):Mt(Wb(wt.current),e??Rb(`home`))},[Mt,Pt]),Bt=(0,_.useCallback)(e=>{let{tabs:t,activeId:n}=wt.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let a=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;i(r[a].id)},[]),Vt=(0,_.useCallback)(()=>{let{tabs:e,activeId:t}=wt.current,r=e.find(e=>e.id===t);if(!r||Hb(r)!==`files`)return;let i=r.splitWith?e.find(e=>e.id===r.splitWith):void 0;if(i){n(e=>e.filter(e=>e.id!==i.id)),Ot(t,()=>({splitWith:void 0})),_e(`primary`);return}let a=Ub(r),o={...qb(a),hidden:!0};n(e=>[...e,o]),Ot(t,()=>({splitWith:o.id})),jt(o.id,a),_e(`primary`)},[jt,Ot]),Ht=(0,_.useCallback)(e=>{me(e),Za(`yafm.preview.width`,e)},[]),Ut=nt?U===`secondary`?he??V:V??he:V,Wt=(0,_.useRef)(null),Gt=e=>{e.preventDefault();let t=Wt.current?.getBoundingClientRect();if(!t)return;let n=B?pe:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);o(n),Za(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},Kt=(e,t,n)=>{t&&ye({x:e.clientX,y:e.clientY,directory:t,refresh:n})},qt=(0,_.useCallback)((e,t)=>{De(n=>n[e]===t?n:{...n,[e]:t})},[]),Jt=(0,_.useCallback)(e=>qt(`primary`,e),[qt]),Yt=(0,_.useCallback)(e=>qt(`secondary`,e),[qt]),Xt=(e,t)=>{Ee[e]!==0&&ke(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},Zt=async(e,t=!1)=>{let n=ve;if(ye(null),!n)return;let r=e===null?await ci(n.directory,t):await fi(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;_t(),je(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},Qt=(0,_.useCallback)(()=>{let{tabs:e}=wt.current,t=e.find(e=>e.id===Wb(wt.current));t&&t.index>0&&Nt(t.id,t.history[t.index-1],t.index-1)},[Nt]),$t=(0,_.useCallback)(()=>{let{tabs:e}=wt.current,t=e.find(e=>e.id===Wb(wt.current));t&&t.index<t.history.length-1&&Nt(t.id,t.history[t.index+1],t.index+1)},[Nt]),en=(0,_.useCallback)(()=>{let{tabs:e}=wt.current,t=e.find(e=>e.id===Wb(wt.current));t&&Hb(t)===`files`&&t.listing?.parent&&zt(t.listing.parent)},[zt]),tn=(0,_.useRef)(null),nn=(0,_.useCallback)(()=>{for(let e of wt.current.tabs)e.listing&&jt(e.id,e.listing.path,!0)},[jt]),rn=(0,_.useCallback)(e=>{e.length!==0&&(Ge(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),Xe())},[Xe]),an=(0,_.useCallback)(async e=>{let t=await ii(e);t.length!==0&&rn(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[rn]),on=(0,_.useCallback)(e=>{let t=new Set(e);Ge(e=>e.filter(e=>!t.has(e.path)))},[]),sn=(0,_.useCallback)(()=>Ge([]),[]),cn=(0,_.useRef)(-1),ln=(0,_.useCallback)(e=>{ze(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),Ve(e.move),e.entries.length>0&&Xe()},[Xe]),un=(0,_.useCallback)(async()=>{if(J.available)try{let e=await ni();cn.current=e.sequence,ln(e)}catch{}},[ln]),dn=(0,_.useCallback)(async e=>{e.length!==0&&await ei(e,!1)&&await un()},[un]),fn=(0,_.useRef)(We);fn.current=We,(0,_.useEffect)(()=>{let e=e=>{Yu(e.dataTransfer)&&Xe()},t=e=>{Yu(e.dataTransfer)&&Xe()};return window.addEventListener(`dragstart`,e),window.addEventListener(`dragenter`,t),()=>{window.removeEventListener(`dragstart`,e),window.removeEventListener(`dragenter`,t)}},[Xe]),(0,_.useEffect)(()=>{let e=()=>Ye(e=>Gb(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let pn=(0,_.useCallback)(async()=>{let e=fn.current;if(e.length>0){let t=await ii(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));Ge(e=>e.filter(e=>n.has(e.path)))}await un()},[un]),mn=(0,_.useCallback)(()=>{pn(),z(e=>e+1),nn()},[pn,nn]),hn=(0,_.useCallback)(e=>{let t=Gb(e);Ye(t),$a(`yafm.tray.position`,t)},[]),gn=(0,_.useCallback)(()=>{He?Ue(!1):Xe()},[Xe,He]),_n=(0,_.useCallback)(async(t,n,r)=>{let i=await ri(t,n,r);i.ok?(r&&on(t),z(e=>e+1),nn(),un()):Cc(i.error??e(`The files could not be transferred.`))},[nn,un,on]);(0,_.useEffect)(()=>{if(J.available)return wi().then(e=>{Ie.current=e,Ne(e)},()=>void 0),J.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>e.kind===`delete`&&!Ie.current.some(t=>t.id===e.id));Ie.current=n,Ne(n),r&&Fe(!0)})},[]);let vn=(0,_.useCallback)(()=>{Ti().then(()=>wi().then(e=>{Ie.current=e,Ne(e)},()=>void 0))},[]);(0,_.useEffect)(()=>{if(!J.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await ni();if(!e||t.sequence===cn.current)return;cn.current=t.sequence,ln(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[ln]);let yn=(0,_.useCallback)(async e=>{let t=e?await vi():await yi();t.ok?(z(e=>e+1),nn()):t.error&&!t.error.startsWith(`Nothing to`)&&Cc(t.error)},[nn]),bn=(0,_.useRef)(ct);(0,_.useEffect)(()=>{bn.current!==ct&&(bn.current=ct,nn())},[ct,nn]);let xn=(0,_.useCallback)((e,t)=>{let{tabs:n}=wt.current,r=n.find(t=>t.id===e);if(!r||Hb(r)!==`files`)return;let i=Ub(r),a=Tt.current?.defaultView??ar,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||ir.iconSize,gridSize:r.view?.gridSize||a.gridSize||ir.gridSize,sort:r.view?.sort??ir.sort,sortDescending:r.view?.sortDescending??ir.sortDescending,...t};Ot(e,()=>({view:o})),tn.current!==null&&window.clearTimeout(tn.current),tn.current=window.setTimeout(()=>{tn.current=null,fr(i,o)},250)},[Ot]),Sn=(0,_.useCallback)(e=>{xn(Wb(wt.current),e)},[xn]),Cn=(0,_.useCallback)(e=>{let t=Tt.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??ar,columns:e}};I(n),Hr(n)},[]),wn=(0,_.useCallback)(e=>{let t=Tt.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??ar,showImages:e}};I(n),Hr(n)},[]),Tn=(0,_.useCallback)(e=>{let t=Tt.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??ar,imageStripHeight:e}};I(n),Hr(n)},[]),En=(0,_.useCallback)((e,t,n,r)=>{let i=wt.current.tabs.find(t=>t.id===e);if(!i||Hb(i)!==`files`||!i.listing)return;let a=Ub(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));Ot(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),pr(a,t,n,r)},[Ot]),Dn=(0,_.useCallback)((e,t)=>{let n=wt.current.tabs.find(t=>t.id===e);if(!n)return;let r=Kb(n,Tt.current?.defaultView??ar);xn(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[xn]),On=(0,_.useCallback)((e,t)=>{n(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),q=(0,_.useCallback)(()=>{hr().then(c,()=>c([]))},[]),kn=(0,_.useCallback)(e=>{let t=(e.openTabs??[]).map(Bb).filter(e=>e!==null);if(t.length===0)return!1;let r=t.map(e=>({...qb(e),fresh:!1})),a=Math.min(Math.max(e.activeTab??0,0),r.length-1);n(r),i(r[a].id);for(let e of r)Hb(e)===`files`&&jt(e.id,Ub(e),!0);return!0},[jt]),An=(0,_.useCallback)(e=>{let t=Dt.current;if(Dt.current=[],t.length===0)return;let{tabs:n}=wt.current;if(!e&&n.length===1&&n[0].fresh){Mt(n[0].id,t[0]);for(let e of t.slice(1))Pt(e);return}let r=t.map(e=>Pt(e)).at(-1);r&&setTimeout(()=>i(r),0)},[Pt,Mt]),jn=(0,_.useCallback)(()=>{Fr().then(e=>{I(e),ie(e.recentLimit);let t={...Ei,...e.shortcuts};se(t),Oi(t.openInNewTab),le(e=>e+1),Et.current||(Et.current=!0,An(e.restoreTabs&&kn(e)))},()=>{ie(10),Et.current=!0,An(!1)})},[An,kn]),Mn=(0,_.useCallback)(()=>{Er().then(P,()=>P([]))},[]),Nn=(0,_.useCallback)(()=>{gr().then(u,()=>u([]))},[]),Pn=t.filter(e=>!e.hidden),Fn=Pn.map(Vb),In=Fn.join(`
`),Ln=Math.max(Pn.findIndex(e=>e.id===r),0);(0,_.useEffect)(()=>{if(!F?.restoreTabs)return;let e=setTimeout(()=>void Ur(Fn,Ln),700);return()=>clearTimeout(e)},[In,Ln,F?.restoreTabs]),(0,_.useEffect)(()=>{let{tabs:e,activeId:t}=wt.current,n=e.find(e=>e.id===t);n&&Hb(n)===`files`&&jt(n.id,void 0,!0),q(),jn(),Nn(),Kr().then(f,()=>f(null))},[jt,q,jn,Nn]),(0,_.useEffect)(()=>{if(qr().then(m,()=>m(null)),J.available)return J.on(e=>{let t=e;t.type===`app.update`&&t.data&&m(t.data)})},[]),(0,_.useEffect)(()=>{let e=setInterval(Nn,3e4);return()=>clearInterval(e)},[Nn]),(0,_.useEffect)(()=>{Ze===`home`&&(Mn(),Nn())},[Ze,G.id,Mn,Nn]),(0,_.useEffect)(()=>{if(!J.available)return;let e=J.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=wt.current,i=t.data.startup===!0;i&&!Et.current?Dt.current.push(n):i&&r.length===1&&r[0].fresh?Mt(r[0].id,n):zb(n)?Mt(Wb(wt.current),n):Pt(n)});return J.send({type:`app.ready`}),e},[Mt,Pt]),(0,_.useEffect)(()=>{if(J.available)return J.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:r,sizes:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},n})})},[]),(0,_.useEffect)(()=>{if(J.available)return J.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:r,counts:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},n})})},[]),(0,_.useEffect)(()=>{let e=e=>{if(Ni(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),Qt();return}if(e.key===`BrowserForward`){e.preventDefault(),$t();return}if(e.key===`Escape`&&y.open){e.preventDefault(),_t();return}let t=Ai(e);if(t===L.closeTab)e.preventDefault(),Lt(Wb(wt.current));else if(t===L.newTab)e.preventDefault(),Pt();else if(t===L.reopenTab)e.preventDefault(),Rt();else if(t===L.goBack)e.preventDefault(),Qt();else if(t===L.goForward)e.preventDefault(),$t();else if(t===L.goUp)e.preventDefault(),en();else if(t===L.find)e.preventDefault(),Ze===`files`?vt():yt();else if(t===L.location)e.preventDefault(),de(e=>e+1);else if(t===L.home){e.preventDefault();let t=s.find(e=>e.kind===`home`)?.path;t&&zt(t)}else t===L.iconsView?(e.preventDefault(),Ze===`files`&&Sn({mode:`grid`})):t===L.detailsView?(e.preventDefault(),Ze===`files`&&Sn({mode:`list`})):t===L.nextTab?(e.preventDefault(),Bt(1)):t===L.previousTab?(e.preventDefault(),Bt(-1)):t===L.hidden||t===`alt+.`?(e.preventDefault(),Mr().then(()=>{z(e=>e+1),nn()})):t===L.undo?(e.preventDefault(),yn(!0)):t===L.redo?(e.preventDefault(),yn(!1)):t===L.splitView?(e.preventDefault(),Vt()):Ze!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),St(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[L,Ze,y.open,Lt,Rt,Pt,Qt,$t,en,vt,yt,_t,St,Sn,Bt,zt,s,nn,yn,Vt]),(0,_.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),Qt()):e.button===4&&(e.preventDefault(),$t())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[Qt,$t]),(0,_.useEffect)(()=>{if(!J.available||Ze!==`files`)return;let e=new Set;for(let n of t){if(Hb(n)!==`files`)continue;let t=Ub(n);if(t){if(ta(t)){let n=Xb(na(t));n&&e.add(n)}else e.add(t)}}e.size>0&&J.send({type:`fs.watch`,payload:{paths:[...e]}})},[Ze,Qe,t]),(0,_.useEffect)(()=>{if(J.available)return J.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,r=wt.current.tabs.filter(e=>Hb(e)===`files`&&Yb(Ub(e),n));r.length!==0&&(_a(),cr(n,!1,ct).then(e=>{for(let t of r){let n=wt.current.tabs.find(e=>e.id===t.id);n&&Hb(n)===`files`&&!n.loading&&Yb(Ub(n),e.path)&&Ot(t.id,()=>({listing:e}))}},()=>void 0))})},[ct,Ot]);let Rn=G.index>0,zn=G.index<G.history.length-1,Bn=(e,t)=>{let n=Kb(e,ot),r=e.listing?.path??e.history[e.index]??``,i=ta(r),a=i&&ra(r);return(0,Y.jsx)(Id,{confirmDelete:F?.confirmDelete??!1,previewVideoAudio:F?.previewVideoAudio??!1,previewVideoAutoplay:F?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?H:ge,onActivate:()=>_e(t?`primary`:`secondary`),enableShortcuts:(!nt||(t?U===`primary`:U===`secondary`))&&(!i||a),error:e.error,find:e.id===at.id?{...y,currentPath:gt<0?null:ht[gt]}:void 0,imageStripHeight:ft,listing:e.listing,loading:e.loading,onImageStripHeight:Tn,readOnly:i&&!a,onOpen:(t,n)=>{n?Pt(t):jt(e.id,t)},onOpenFile:(t,n)=>{ea(t)?F?.archiveHandler??!1?n?Pt(t):jt(e.id,t):sr(t):ta(t)?(async()=>{let e=await ur(t,N.current,Qb(t));if(!e.path&&fa(e.error)){let n=na(t),r=la(n);r&&da(n);let i=await Tc(n,!!r);i&&(ua(n,i),e=await ur(t,N.current,i))}e.path?sr(e.path):e.error&&Cc(e.error)})():sr(t)},onRefresh:()=>{let t=e.listing?.path;t&&Ft(t)},onSelectionCountChange:t?Jt:Yt,onSetTags:(t,n,r)=>En(e.id,t,n,r),selectionMenuRequest:t?Oe.primary:Oe.secondary,onSort:t=>Dn(e.id,t),onPaste:mn,onClipboardChanged:()=>void un(),onTransfer:_n,onAddToTray:e=>void an(e),openOnSingleClick:F?.openOnSingleClick??!1,pendingRename:Ae&&t===(U===`primary`)&&Yb(Ae.directory,e.listing?.path??``)?Ae.path:null,pendingRenameToken:Ae?.token??0,refreshToken:R,shortcuts:L,showCheckboxes:F?.showCheckboxes??!0,showImages:dt,view:n})},Vn=y.open&&(0,Y.jsx)(tm,{current:gt,focusToken:C,matchCase:y.matchCase,mode:y.mode,onClose:_t,onMatchCase:()=>b(e=>({...e,matchCase:!e.matchCase})),onMode:()=>b(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Ct(1),onPrevious:()=>Ct(-1),onQuery:e=>b(t=>({...t,query:e})),onRegex:()=>b(e=>({...e,regex:!e.regex})),query:y.query,regex:y.regex,total:ht.length}),Hn=Ze===`files`&&ta($e),Un=Hn&&ra($e),Wn=async e=>{if(!Hn)return;let t=na($e),n=Xb(t);if(!n)return;let r=e===`named`;if(e===`auto`){let e=Yb($e,t)?G.listing?.entries??[]:(await cr(t,!1,!1,N.current,Qb(t))).entries;r=!(e.length===1&&e[0].isDirectory)}let i=n.includes(`\\`)?`\\`:`/`,a=r?`${n.replace(/[\\/]+$/,``)}${i}${Zb(t)}`:n;await Gn(a)},Gn=async t=>{let n=await lr($e,t,N.current,Qb($e));if(!n.ok&&fa(n.error)){let e=na($e),r=la(e);r&&da(e);let i=await Tc(e,!!r);i&&(ua(e,i),n=await lr($e,t,N.current,i))}n.ok?(Ft(t),_a(),jt(G.id,t,!0)):Cc(`${e(`Could not extract the archive.`)}${n.error?`\n${n.error}`:``}`)},Kn=async()=>{if(!Hn)return;let e=await vc(Xb(na($e))??void 0);e&&await Gn(e)},Jn=(0,Y.jsxs)(ax,{children:[(0,Y.jsx)(ox,{"data-shortcut":ji(L.goBack),disabled:!Rn,onClick:e=>{G.index>0&&ki(e)?Pt(G.history[G.index-1]):Qt()},title:e(`Back`),type:`button`,children:(0,Y.jsx)(_s,{})}),(0,Y.jsx)(ox,{"data-shortcut":ji(L.goForward),disabled:!zn,onClick:e=>{G.index<G.history.length-1&&ki(e)?Pt(G.history[G.index+1]):$t()},title:e(`Forward`),type:`button`,children:(0,Y.jsx)(vs,{})}),(0,Y.jsx)(ox,{"data-shortcut":ji(L.goUp),disabled:Ze!==`files`||!et,onClick:e=>{et&&(ki(e)?Pt(et):zt(et))},title:e(`Up one level`),type:`button`,children:(0,Y.jsx)(ms,{})}),(0,Y.jsx)(uh,{focusToken:ue,icon:pt,label:Ze===`files`?void 0:e(Mb[Ze]),onContextMenu:Ze===`files`?(e,t,n)=>Ce({x:t,y:n,path:e}):void 0,onNavigate:zt,path:Ze===`files`?$e:Qe}),Ze===`files`&&(!Hn||Un)&&(0,Y.jsx)(ox,{onClick:e=>Kt(e,$e,()=>void jt(G.id,$e,!0)),title:e(`New folder or file`),type:`button`,children:(0,Y.jsx)(gs,{})}),(0,Y.jsx)(ox,{"data-shortcut":ji(L.find),onClick:yt,title:e(`Search`),type:`button`,children:(0,Y.jsx)(ps,{})}),Ee.primary>0&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(cx,{}),(0,Y.jsx)(ox,{onClick:e=>Xt(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,Y.jsx)(gc,{})})]}),Hn&&(0,Y.jsxs)(sx,{children:[(0,Y.jsx)(cx,{}),(0,Y.jsx)(ox,{onClick:()=>void Kn(),onContextMenu:e=>{e.preventDefault(),xe({x:e.clientX,y:e.clientY})},title:e(`Extract archive`),type:`button`,children:(0,Y.jsx)(Fs,{})}),(0,Y.jsx)(pl,{icon:(0,Y.jsx)(sc,{size:15}),onChange:e=>{let t=Number(e);M(t),N.current=t,Hn&&jt(G.id,$e,!0)},options:Lb.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`Archive encoding`)}: ${e(Lb.find(e=>e.value===String(te))?.label??`Auto`)}`,value:String(te)})]})]}),Yn=T.open?{...T,index:k}:null;return(0,Y.jsx)(Ka,{value:ut,children:(0,Y.jsxs)(tx,{$rounded:v,children:[(0,Y.jsx)(vp,{settings:F}),(0,Y.jsx)(ob,{activeId:G.id,onClose:Lt,onNewTab:()=>Pt(),onReorder:On,onTransferToTab:_n,onSelect:i,onViewChange:Sn,onColumns:Cn,onShowImages:wn,showImages:dt,tasks:Me,onClearTasks:vn,activityOpen:Pe,onActivityOpenChange:Fe,trayCount:We.length+Re.length,trayVisible:He,onToggleTray:gn,split:nt,canSplit:Ze===`files`,onToggleSplit:Vt,details:B,canDetails:Ze===`files`||Ze===`recycle`||Ze===`gallery`,onToggleDetails:()=>fe(e=>!e),shortcuts:L,view:st,tabs:t.filter(e=>!e.hidden).map(n=>{let r=Hb(n),i=Ub(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?Ub(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?Ja(ut,i):void 0,split:!!a,title:r===`files`?Ya(ut,i,Zi(i)||e(`Files`)):e(Mb[r]),partner:a?{title:Ya(ut,o,Zi(o)||e(`Files`)),place:Ja(ut,o)}:void 0}})}),(0,Y.jsxs)(nx,{children:[(0,Y.jsx)(Lv,{activeKind:Ze,currentPath:Ze===`files`?Qe:``,drives:l,historyVersion:ae,onNavigate:zt,onOpenView:It,homePath:s.find(e=>e.kind===`home`)?.path??``,places:s,recent:ne,recentLimit:re,version:ce}),(0,Y.jsxs)(rx,{children:[Ze!==`files`&&Jn,(0,Y.jsxs)(ix,{children:[Ze!==`files`&&T.open&&(0,Y.jsx)(tm,{current:k,focusToken:D,matchCase:T.matchCase,mode:T.mode,onClose:bt,onMatchCase:()=>E(e=>({...e,matchCase:!e.matchCase})),onMode:()=>E(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>xt(1),onPrevious:()=>xt(-1),onQuery:e=>E(t=>({...t,query:e})),onRegex:()=>E(e=>({...e,regex:!e.regex})),placeholder:e(`Search`),query:T.query,regex:T.regex,total:A}),Ze===`files`?nt&&tt?(0,Y.jsxs)(ux,{ref:Wt,children:[(0,Y.jsxs)(dx,{style:{flex:a},children:[(0,Y.jsxs)(lx,{$active:U===`primary`,onPointerDown:()=>_e(`primary`),children:[(0,Y.jsx)(ox,{"data-shortcut":ji(L.goBack),disabled:!Rn,onClick:e=>{let t=G.index-1;t<0||(ki(e)?Pt(G.history[t]):Nt(G.id,G.history[t],t))},title:e(`Back`),type:`button`,children:(0,Y.jsx)(_s,{})}),(0,Y.jsx)(ox,{"data-shortcut":ji(L.goForward),disabled:!zn,onClick:e=>{let t=G.index+1;t>=G.history.length||(ki(e)?Pt(G.history[t]):Nt(G.id,G.history[t],t))},title:e(`Forward`),type:`button`,children:(0,Y.jsx)(vs,{})}),(0,Y.jsx)(ox,{"data-shortcut":ji(L.goUp),disabled:!et,onClick:e=>{et&&(ki(e)?Pt(et):jt(G.id,et))},title:e(`Up one level`),type:`button`,children:(0,Y.jsx)(ms,{})}),(0,Y.jsx)(uh,{focusToken:U===`primary`?ue:void 0,onContextMenu:(e,t,n)=>Ce({x:t,y:n,path:e}),onNavigate:(e,t)=>t?Pt(e):void jt(G.id,e),path:$e}),(0,Y.jsx)(ox,{onClick:e=>Kt(e,$e,()=>void jt(G.id,$e,!0)),title:e(`New folder or file`),type:`button`,children:(0,Y.jsx)(gs,{})}),(0,Y.jsx)(ox,{"data-shortcut":ji(L.find),onClick:vt,title:e(`Search`),type:`button`,children:(0,Y.jsx)(ps,{})}),Ee.primary>0&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(cx,{}),(0,Y.jsx)(ox,{onClick:e=>Xt(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,Y.jsx)(gc,{})})]})]}),Bn(G,!0),U===`primary`&&Vn]}),(0,Y.jsx)(fx,{onDoubleClick:()=>o(.5),onPointerDown:Gt,title:e(`Drag to resize; double-click to reset`)}),(0,Y.jsxs)(dx,{$enter:!0,style:{flex:1-a},children:[(0,Y.jsxs)(lx,{$active:U===`secondary`,onPointerDown:()=>_e(`secondary`),children:[(0,Y.jsx)(ox,{"data-shortcut":ji(L.goBack),disabled:tt.index<=0,onClick:e=>{let t=tt.index-1;t<0||(ki(e)?Pt(tt.history[t]):Nt(tt.id,tt.history[t],t))},title:e(`Back`),type:`button`,children:(0,Y.jsx)(_s,{})}),(0,Y.jsx)(ox,{"data-shortcut":ji(L.goForward),disabled:tt.index>=tt.history.length-1,onClick:e=>{let t=tt.index+1;t>=tt.history.length||(ki(e)?Pt(tt.history[t]):Nt(tt.id,tt.history[t],t))},title:e(`Forward`),type:`button`,children:(0,Y.jsx)(vs,{})}),(0,Y.jsx)(ox,{"data-shortcut":ji(L.goUp),disabled:!it,onClick:e=>{it&&(ki(e)?Pt(it):jt(tt.id,it))},title:e(`Up one level`),type:`button`,children:(0,Y.jsx)(ms,{})}),(0,Y.jsx)(uh,{focusToken:U===`secondary`?ue:void 0,onContextMenu:(e,t,n)=>Ce({x:t,y:n,path:e}),onNavigate:(e,t)=>t?Pt(e):void jt(tt.id,e),path:rt}),(0,Y.jsx)(ox,{onClick:e=>Kt(e,rt,()=>void jt(tt.id,rt,!0)),title:e(`New folder or file`),type:`button`,children:(0,Y.jsx)(gs,{})}),(0,Y.jsx)(ox,{"data-shortcut":ji(L.find),onClick:vt,title:e(`Search`),type:`button`,children:(0,Y.jsx)(ps,{})}),Ee.secondary>0&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(cx,{}),(0,Y.jsx)(ox,{onClick:e=>Xt(`secondary`,e),title:e(`Selection menu`),type:`button`,children:(0,Y.jsx)(gc,{})})]})]}),Bn(tt,!1),U===`secondary`&&Vn]}),(0,Y.jsx)(Xl,{info:Ut,onWidth:Ht,open:B,videoAudio:F?.previewVideoAudio??!1,videoAutoplay:F?.previewVideoAutoplay??!1,width:pe})]}):(0,Y.jsxs)(mx,{children:[(0,Y.jsxs)(hx,{children:[Jn,(0,Y.jsxs)(px,{children:[Bn(G,!0),Vn]})]}),(0,Y.jsx)(Xl,{info:V,onWidth:Ht,open:B,videoAudio:F?.previewVideoAudio??!1,videoAutoplay:F?.previewVideoAutoplay??!1,width:pe})]}):Ze===`home`?(0,Y.jsx)(ah,{drives:l,find:Yn,historyVersion:ae,onSearchMatches:j,homePath:s.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:Nn,onHistoryChanged:()=>oe(e=>e+1),onAddToTray:e=>void an(e),onOpen:zt,onLayoutChanged:jn,onPlacesChanged:c,onRecentCleared:Mn,places:s,recent:ne,recentLimit:re,visibilityVersion:R}):Ze===`settings`?(0,Y.jsx)(Ng,{appInfo:d,find:Yn,focusSection:h,onSearchMatches:j,onSettingsChanged:jn}):Ze===`gallery`?(0,Y.jsx)(Cv,{confirmDelete:F?.confirmDelete??!1,find:Yn,onSearchMatches:j,openOnSingleClick:F?.openOnSingleClick??!1,onAddToTray:e=>void an(e),shortcuts:L,showCheckboxes:F?.showCheckboxes??!0,showDetails:B,videoAudio:F?.previewVideoAudio??!1,videoAutoplay:F?.previewVideoAutoplay??!1,view:st}):(0,Y.jsx)(Eh,{find:Yn,onOpenLocation:zt,onShowDetails:()=>fe(!0),platform:d?.platform,showDetails:B,videoAudio:F?.previewVideoAudio??!1,videoAutoplay:F?.previewVideoAutoplay??!1})]},Ze),(0,Y.jsxs)(yx,{children:[(0,Y.jsx)(`span`,{children:Ze===`files`&&G.listing?$b(e,G.listing):``}),d?(0,Y.jsxs)(gx,{children:[(0,Y.jsxs)(`span`,{children:[`v`,d.version,` · `,d.platform]}),p?.available&&(0,Y.jsxs)(_x,{onClick:()=>{g(`updates`),It(`settings`)},title:e(`Version {version} is available.`,{version:p.latest}),type:`button`,children:[(0,Y.jsx)(vx,{}),e(`Update available`)]})]}):(0,Y.jsx)(`span`,{children:`browser preview`})]})]})]}),(0,Y.jsx)(ed,{clipboardItems:Re,clipboardMove:Be,currentDirectory:Ze===`files`?Qe:``,items:We,onAdd:e=>void an(e),onClear:sn,onClose:()=>Ue(!1),onCopyToClipboard:e=>void dn(e),onPosition:hn,onRemove:on,onTransfer:_n,position:Je,visible:He}),ve&&(0,Y.jsx)(ul,{creationOnly:!0,directory:ve.directory,menu:{x:ve.x,y:ve.y,paths:[],background:!0},onClose:()=>ye(null),onCreateFile:e=>void Zt(e),onCreateFolder:e=>void Zt(null,e),shortcuts:L}),Se&&(0,Y.jsx)(ul,{allowCompression:!0,directory:Xb(Se.path)??Se.path,menu:{x:Se.x,y:Se.y,paths:[Se.path]},onAddToTray:e=>void an(e),onArchiveCreated:e=>{e&&Ft(Xb(Se.path)??Se.path)},onClose:()=>Ce(null),onCompressTo:(e,t)=>Te({paths:e,name:t}),onCopy:(e,t)=>void ei(e,t),onDelete:e=>void oi(e,!1).then(()=>Ft(Xb(Se.path)??Se.path)),onOpen:(e,t)=>t?Pt(e):void jt(G.id,e),onOpenFile:e=>void sr(e),onPaste:e=>void ai(e).then(t=>{t&&Ft(e)}),onRefresh:()=>Ft(Se.path),shortcuts:L,target:{path:Se.path,isDirectory:!0}}),we&&(0,Y.jsx)(El,{initialDirectory:Xb(Se?.path??$e)??$e,initialName:we.name,onCancel:()=>Te(null),onCompress:async e=>{let t=await Ci(we.paths,e);return!t.ok&&t.error&&Cc(t.error),t.ok}}),be&&(0,Y.jsx)(Qc,{items:[{label:e(`Extract here`),onSelect:()=>void Wn(`here`)},{label:e(`Extract to a folder named after the archive`),onSelect:()=>void Wn(`named`)},{label:e(`Auto extract to the current folder`),onSelect:()=>void Wn(`auto`)}],onClose:()=>xe(null),x:be.x,y:be.y}),W&&(0,Y.jsx)(Cp,{delaySeconds:W.prompt.delaySeconds,hits:W.prompt.hits,onCancel:()=>{W.resolve(!1),Ke(null)},onConfirm:()=>{W.resolve(!0),Ke(null)},permanent:W.prompt.permanent},W.id),(0,Y.jsx)(Rp,{}),(0,Y.jsx)(Gp,{}),(0,Y.jsx)(Db,{}),(0,Y.jsx)(er,{})]})})}var tx=q.div`
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
`,nx=q.div`
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
`,rx=q.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,ix=q.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${qc}
`,ax=q.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,ox=q.button`
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
`,sx=q.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,cx=q.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,lx=q.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,ux=q.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,dx=q.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?Xc:``}
`,fx=q.div`
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
        ${Zc}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,px=q.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,mx=q.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,hx=q.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,gx=q.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,_x=q.button`
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
`,vx=q.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,yx=q.footer`
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
`;function bx({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,onCancel:o,onSelect:s}){let c=qn(),l=Od(`picker`),u=t===`file`,d=r??[],[f,p]=(0,_.useState)(e),[m,h]=(0,_.useState)(null),[g,v]=(0,_.useState)(!0),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)(()=>new Set),[C,w]=(0,_.useState)(a??[]),[T,E]=(0,_.useState)([]),[D,O]=(0,_.useState)([]),[k,ee]=(0,_.useState)([]),[A,j]=(0,_.useState)([]),[te,M]=(0,_.useState)(``),[N,ne]=(0,_.useState)(d.length===0),[P,re]=(0,_.useState)(`files`),[ie,F]=(0,_.useState)(0),[I,ae]=(0,_.useState)(Aa),[oe,L]=(0,_.useState)(0),[se,ce]=(0,_.useState)(0),[le,ue]=(0,_.useState)(null),[de,R]=(0,_.useState)(null),[z,B]=(0,_.useState)(0),[fe,pe]=(0,_.useState)(null),[me,V]=(0,_.useState)(null);(0,_.useEffect)(()=>{Fr().then(pe,()=>pe(null))},[]),(0,_.useEffect)(()=>{a?w(a):hr().then(w,()=>w([]))},[a]),(0,_.useEffect)(()=>{gr().then(E,()=>E([])),Er().then(O,()=>O([]))},[]),(0,_.useEffect)(()=>{let e=!0;return v(!0),b(null),S(new Set),M(u?``:Zi(f)),cr(f||void 0,!1).then(t=>{e&&(h(t),p(t.path),M(u?``:Zi(t.path)),v(!1))},t=>{e&&(b(t instanceof Error?t.message:String(t)),v(!1))}),()=>{e=!1}},[f,ie,u]),(0,_.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),ae(e=>({...e,open:!0})),L(e=>e+1);return}if(e.key===`Escape`){I.open?(ae(e=>({...e,open:!1,query:``})),ce(0)):o();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),he();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),ge();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),ae(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),L(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||De()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,_.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),he()):e.button===4&&(e.preventDefault(),ge())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let H=e=>{let t=e.trim();t.length!==0&&ia(t)!==ia(f)&&(ee(e=>[...e,f]),j([]),re(`files`),p(t))},he=()=>{let e=k.at(-1);e!==void 0&&(ee(e=>e.slice(0,-1)),j(e=>[f,...e]),p(e))},ge=()=>{let e=A[0];e!==void 0&&(j(e=>e.slice(1)),ee(e=>[...e,f]),p(e))},U=m?.path??f,_e=m?.parent??(f?Qi(f):null);(0,_.useEffect)(()=>{J.available&&U&&J.send({type:`fs.watch`,payload:{paths:[U]}})},[U]),(0,_.useEffect)(()=>{if(J.available&&U)return J.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&ia(t.data.path)===ia(U)&&cr(U,!1).then(e=>{h(e);let t=new Set(e.entries.map(e=>e.fullPath));S(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[U]);let ve=(m?.entries??[]).filter(e=>e.isDirectory||u&&(N||d.length===0||d.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),ye=m?{...m,entries:ve}:null,be=I.open&&I.query.length>0,xe=(0,_.useMemo)(()=>be?ve.filter(e=>za(e.name,I)).map(e=>e.fullPath):[],[be,ve,I]);(0,_.useEffect)(()=>{ce(0)},[I.query,I.matchCase,I.regex,m?.path]);let Se=xe.length===0?-1:Math.min(se,xe.length-1),Ce=(0,_.useMemo)(()=>({...I,currentPath:Se>=0?xe[Se]:null}),[I,Se,xe]),we={mode:fe?.defaultView?.mode??`list`,iconSize:fe?.defaultView?.iconSize??ar.iconSize,gridSize:fe?.defaultView?.gridSize??ar.gridSize,sort:`name`,sortDescending:!1,columns:fe?.defaultView?.columns??ar.columns??[`type`,`size`,`modified`]},Te=te.trim(),Ee=Te.length>0?Sx(Te)?Te:xx(U,Te):null,De=()=>{if(g||y)return;let e=n?[...x]:[...x].slice(0,1);e.length>0?s(e):Ee!==null&&Te!==Zi(U)?s([Ee]):!u&&U&&s([U])},Oe=(0,_.useCallback)(e=>{S(new Set(e)),M(e.length===1?Zi(e[0]):e.length===0&&!u?Zi(U):``)},[U,u]),ke=e=>{m?.entries.find(t=>t.fullPath===e)?.isDirectory?H(e):u&&s([e])},Ae=e=>M(e),je=async e=>{let t=le;if(ue(null),!t||!U)return;let n=e===null?await ci(U):await fi(U,e);n.ok&&n.path!==null&&(ae(e=>({...e,open:!1,query:``})),e!==null&&ne(!0),F(e=>e+1),window.setTimeout(()=>{R(n.path),B(e=>e+1)},120))},Me=()=>{ae(e=>({...e,open:!0})),L(e=>e+1)},Ne=e=>{ce(t=>xe.length===0?0:(t+e+xe.length)%xe.length)},Pe=e=>(0,Y.jsxs)(Nx,{children:[(0,Y.jsxs)(Px,{children:[(0,Y.jsx)(Fx,{children:c(u?`File name:`:`Folder:`)}),(0,Y.jsx)(Ix,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),De())},spellCheck:!1,value:te}),u&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(Fx,{children:c(`Files of type:`)}),(0,Y.jsx)(pl,{onChange:e=>ne(e===`all`),options:[...d.length>0?[{value:`supported`,label:`${c(`Supported files`)} (${d.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${c(`All files`)} (*.*)`}],value:N?`all`:`supported`,width:220})]})]}),(0,Y.jsxs)(Lx,{children:[(0,Y.jsx)(Rx,{onClick:o,type:`button`,children:c(`Cancel`)}),(0,Y.jsxs)(Rx,{$primary:!0,disabled:g||y!==null||u&&x.size===0&&Te.length===0,onClick:De,type:`button`,children:[(0,Y.jsx)(Ds,{size:12}),c(u?`Select this file`:`Select this folder`)]})]})]}),Fe=(0,Y.jsxs)(wx,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,Y.jsxs)(Tx,{children:[(0,Y.jsxs)(Ex,{children:[(0,Y.jsx)(us,{size:16}),c(u?`Choose a file`:`Choose a folder`)]}),(0,Y.jsx)(Dx,{onClick:o,title:c(`Cancel`),type:`button`,children:(0,Y.jsx)(Os,{size:12})})]}),(0,Y.jsxs)(Ox,{children:[(0,Y.jsx)(Lv,{activeKind:P===`overview`?`home`:P===`gallery`?`gallery`:`files`,currentPath:U,drives:T,hiddenViews:u?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:C.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>H(e),onOpenView:e=>{e===`home`?(S(new Set),M(u?``:Zi(U)),re(`overview`)):e===`gallery`&&u&&(S(new Set),M(``),re(`gallery`))},places:C,recent:D,recentLimit:10}),(0,Y.jsx)(kx,{children:P===`overview`?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(ah,{drives:T,historyVersion:0,homePath:C.find(e=>e.kind===`home`)?.path??``,onOpen:e=>H(e),onPick:u?e=>s([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:Oe,places:C,readOnly:!0,recent:D,recentLimit:10,visibilityVersion:0}),Pe(M)]}):P===`gallery`?(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(Cv,{onPick:e=>s([e]),onSelectionChange:Oe,showCheckboxes:fe?.showCheckboxes??!0,view:{...ir,columns:[]}}),Pe(M)]}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(Ax,{children:[(0,Y.jsx)(jx,{disabled:k.length===0,onClick:he,title:c(`Back`),type:`button`,children:(0,Y.jsx)(_s,{})}),(0,Y.jsx)(jx,{disabled:A.length===0,onClick:ge,title:c(`Forward`),type:`button`,children:(0,Y.jsx)(vs,{})}),(0,Y.jsx)(jx,{disabled:!_e,onClick:()=>_e&&H(_e),title:c(`Up one level`),type:`button`,children:(0,Y.jsx)(ms,{})}),(0,Y.jsx)(uh,{onNavigate:H,path:U}),(0,Y.jsx)(jx,{onClick:e=>ue({x:e.clientX,y:e.clientY}),title:c(`New folder or file`),type:`button`,children:(0,Y.jsx)(gs,{})}),(0,Y.jsx)(jx,{onClick:Me,title:c(`Search`),type:`button`,children:(0,Y.jsx)(ps,{})}),l.available&&(0,Y.jsx)(jx,{onClick:e=>l.open(e.clientX,e.clientY),title:c(`Selection menu`),type:`button`,children:(0,Y.jsx)(gc,{})})]}),I.open&&(0,Y.jsx)(tm,{current:Se,focusToken:oe,matchCase:I.matchCase,mode:I.mode,onClose:()=>{ae(e=>({...e,open:!1,query:``})),ce(0)},onMatchCase:()=>ae(e=>({...e,matchCase:!e.matchCase})),onMode:()=>ae(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Ne(1),onPrevious:()=>Ne(-1),onQuery:e=>ae(t=>({...t,query:e})),onRegex:()=>ae(e=>({...e,regex:!e.regex})),query:I.query,regex:I.regex,total:xe.length}),(0,Y.jsx)(Id,{allowBackgroundMenu:!0,confirmDelete:fe?.confirmDelete??!1,enableShortcuts:!0,error:y,find:Ce,loading:g,listing:ye,onOpen:ke,onOpenFile:ke,onRefresh:()=>F(e=>e+1),onSelectionChange:Oe,onPreviewInfo:V,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:fe?.openOnSingleClick??!1,refreshToken:ie,pendingRename:de,pendingRenameToken:z,showCheckboxes:fe?.showCheckboxes??!0,showDetails:!1,showImages:!1,singleSelect:!n,view:we}),x.size>0&&me&&(0,Y.jsx)(Mx,{children:(0,Y.jsx)(Xl,{info:me,onWidth:()=>void 0,videoAudio:fe?.previewVideoAudio??!1,videoAutoplay:fe?.previewVideoAutoplay??!1,width:320})}),Pe(Ae)]})})]}),le&&(0,Y.jsx)(ul,{creationOnly:!0,directory:U,menu:{x:le.x,y:le.y,paths:[],background:!0},onClose:()=>ue(null),onCreateFile:u?e=>void je(e):void 0,onCreateFolder:()=>void je(null),shortcuts:Ei})]});return i?Fe:(0,Fc.createPortal)((0,Y.jsx)(Cx,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:Fe}),document.body)}function xx(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Sx(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Cx=q.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${Xc}
`,wx=q.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:Ic}
    ${({$inline:e})=>e?``:Gc}
`,Tx=q.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,Ex=q.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,Dx=q.button`
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
`,Ox=q.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,kx=q.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,Ax=q.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,jx=q.button`
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
`,Mx=q.div`
    display: flex;
    flex-shrink: 0;
    height: 190px;
    min-height: 0;
    border-top: 1px solid var(--border-color);
    background: var(--bg-secondary);
    overflow: hidden;
`,Nx=q.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,Px=q.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,Fx=q.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,Ix=q.input`
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
`,Lx=q.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,Rx=q.button`
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
`;function zx({mode:e,multiple:t,extensions:n,initial:r}){let i=qn(),a=Zn(),[o,s]=(0,_.useState)(null),c=(0,_.useRef)(0);return(0,_.useEffect)(()=>{J.send({type:`app.ready`})},[]),(0,_.useEffect)(()=>(nr(e=>new Promise(t=>{s({id:++c.current,prompt:e,resolve:t})})),()=>nr(null)),[]),(0,_.useEffect)(()=>{Fr().then(e=>bg(e.accentColor,e.secondaryColor),()=>void 0)},[]),(0,Y.jsxs)(Bx,{children:[(0,Y.jsxs)(Vx,{...a,children:[(0,Y.jsx)(Hx,{children:(0,Y.jsx)(ks,{size:17})}),(0,Y.jsx)(Ux,{children:i(e===`file`?`Choose a file`:`Choose a folder`)}),(0,Y.jsx)(Wx,{children:(0,Y.jsx)(Gx,{onClick:()=>J.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:i(`Cancel`),type:`button`,children:(0,Y.jsx)(Os,{size:12})})})]}),(0,Y.jsx)(Kx,{children:(0,Y.jsx)(bx,{extensions:n,initial:r,inline:!0,mode:e,multiple:t,onCancel:()=>J.send({type:`pick.cancel`}),onSelect:e=>J.send({type:`pick.submit`,payload:{paths:e}})})}),o&&(0,Y.jsx)(Cp,{delaySeconds:o.prompt.delaySeconds,hits:o.prompt.hits,onCancel:()=>{o.resolve(!1),s(null)},onConfirm:()=>{o.resolve(!0),s(null)},permanent:o.prompt.permanent},o.id),(0,Y.jsx)(Rp,{}),(0,Y.jsx)(er,{})]})}var Bx=q.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,Vx=q.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,Hx=q.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,Ux=q.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Wx=q.div`
    display: flex;
    flex-shrink: 0;
`,Gx=q.button`
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
`,Kx=q.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,qx=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,qx);var Jx=document.getElementById(`root`),Yx=new URLSearchParams(window.location.search),Xx=Yx.get(`picker`),Zx=Yx.get(`filter`)??``;Jx&&(0,v.createRoot)(Jx).render((0,Y.jsx)(_.StrictMode,{children:(0,Y.jsx)(Jn,{children:Xx===`folder`||Xx===`file`?(0,Y.jsx)(zx,{extensions:Zx?Zx.split(`;`).filter(Boolean):[],initial:Yx.get(`initial`)??``,mode:Xx,multiple:Yx.get(`multiple`)===`1`}):(0,Y.jsx)(ex,{})})}));