var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function O(e,t){return D(e.type,t,e.props)}function ee(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ne=/\/+/g;function k(e,t){return typeof e==`object`&&e&&e.key!=null?te(``+e.key):t.toString(36)}function A(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function j(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,j(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+k(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(ne,`$&/`)+`/`),j(o,r,i,``,function(e){return e})):o!=null&&(ee(o)&&(o=O(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ne,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+k(a,u),c+=j(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+k(a,u++),c+=j(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return j(A(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function M(e,t,n){if(e==null)return e;var r=[],i=0;return j(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function N(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var P=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function F(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,P)}catch(e){P(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function I(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else F(I.bind(null,e))}var L={map:M,forEach:function(e,t,n){M(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return M(e,function(){t++}),t},toArray:function(e){return M(e,function(e){return e})||[]},only:function(e){if(!ee(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=L,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=I,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ee,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:N}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=F,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&ne(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ne(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var ee=new MessageChannel,te=ee.port2;ee.port1.onmessage=D,O=function(){te.postMessage(null)}}else O=function(){_(D,0)};function ne(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ne(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function E(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var D=Object.assign,O=Symbol.for(`react.element`),ee=Symbol.for(`react.transitional.element`),te=Symbol.for(`react.portal`),ne=Symbol.for(`react.fragment`),k=Symbol.for(`react.strict_mode`),A=Symbol.for(`react.profiler`),j=Symbol.for(`react.consumer`),M=Symbol.for(`react.context`),N=Symbol.for(`react.forward_ref`),P=Symbol.for(`react.suspense`),F=Symbol.for(`react.suspense_list`),I=Symbol.for(`react.memo`),L=Symbol.for(`react.lazy`),R=Symbol.for(`react.activity`),re=Symbol.for(`react.legacy_hidden`),ie=Symbol.for(`react.memo_cache_sentinel`),z=Symbol.for(`react.view_transition`),ae=Symbol.for(`react.recoverable`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case ne:return`Fragment`;case A:return`Profiler`;case k:return`StrictMode`;case P:return`Suspense`;case F:return`SuspenseList`;case R:return`Activity`;case z:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case te:return`Portal`;case M:return e.displayName||`Context`;case j:return(e._context.displayName||`Context`)+`.Consumer`;case N:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case I:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case L:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,B=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function H(e){return{current:e}}function U(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function me(e,t){pe++,fe[pe]=e.current,e.current=t}var he=H(null),ge=H(null),_e=H(null),ve=H(null);function ye(e,t){switch(me(_e,t),me(ge,e),me(he,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?fp(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=fp(t),e=pp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}U(he),me(he,e)}function be(){U(he),U(ge),U(_e)}function xe(e){var t=e.memoizedState;t!==null&&(lh._currentValue=t.memoizedState,me(ve,e)),t=he.current;var n=pp(t,e.type);t!==n&&(me(ge,e),me(he,n))}function Se(e){ge.current===e&&(U(he),U(ge)),ve.current===e&&(U(ve),lh._currentValue=de)}var Ce,we;function W(e){if(Ce===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ce=t&&t[1]||``,we=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ce+e+we}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?W(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return W(e.type);case 16:return W(`Lazy`);case 13:return e.child!==t&&t!==null?W(`Suspense Fallback`):W(`Suspense`);case 19:return W(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return W(`Activity`);case 30:return W(`ViewTransition`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,Ve=t.log,He=t.unstable_setDisableYieldValue,Ue=null,We=null;function G(e){if(typeof Ve==`function`&&He(e),We&&typeof We.setStrictMode==`function`)try{We.setStrictMode(Ue,e)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Ke=Math.log,qe=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(Ke(e)/qe|0)|0}var Ye=256,K=262144,Xe=4194304;function Ze(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ze(n))):i=Ze(o):i=Ze(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ze(n))):i=Ze(o)):i=Ze(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function $e(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function et(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-Ge(n),i=1<<r;t|=e[r],n&=~i}return t}function tt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nt(){var e=Xe;return Xe<<=1,!(Xe&62914560)&&(Xe=4194304),e}function rt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function it(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function at(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ge(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ot(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ot(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ge(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function st(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ct(e,t){var n=t&-t;return n=n&42?1:lt(n),(n&(e.suspendedLanes|t))===0?n:0}function lt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ut(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function dt(){var e=V.p;return e===0?(e=window.event,e===void 0?32:Th(e.type)):e}function ft(e,t){var n=V.p;try{return V.p=e,t()}finally{V.p=n}}var pt=Math.random().toString(36).slice(2),mt=`__reactFiber$`+pt,ht=`__reactProps$`+pt,gt=`__reactContainer$`+pt,_t=`__reactEvents$`+pt,vt=`__reactListeners$`+pt,yt=`__reactHandles$`+pt,bt=`__reactResources$`+pt,xt=`__reactMarker$`+pt,St=`__reactLoad$`+pt;function Ct(e){delete e[mt],delete e[ht],delete e[vt],delete e[yt]}function wt(e){var t;if(t=e[mt])return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mm(e);e!==null;){if(n=e[mt])return n;e=mm(e)}return t}e=n,n=e.parentNode}return null}function Tt(e){if(e=e[mt]||e[gt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Et(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Dt(e){var t=e[bt];return t||=e[bt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function q(e){e[xt]=!0}function Ot(e){e[St]=void 0}var kt=new Set,At={};function jt(e,t){Mt(e,t),Mt(e+`Capture`,t)}function Mt(e,t){for(At[e]=t,e=0;e<t.length;e++)kt.add(t[e])}var Nt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Pt={},Ft={};function It(e){return ke.call(Ft,e)?!0:ke.call(Pt,e)?!1:Nt.test(e)?Ft[e]=!0:(Pt[e]=!0,!1)}var Lt=!1;function Rt(){var e=Lt;return Lt=!1,e}function zt(e,t,n){if(It(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Bt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Vt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Ht(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ut(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Wt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gt(e){if(!e._valueTracker){var t=Ut(e)?`checked`:`value`;e._valueTracker=Wt(e,t,``+e[t])}}function Kt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ut(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var qt=/[\n"\\]/g;function Jt(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Yt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Ht(t)):e.value!==``+Ht(t)&&(e.value=``+Ht(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,Ht(n)):o===`number`&&e.value==t?Zt(e,Ht(e.value)):Zt(e,Ht(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Ht(s):e.removeAttribute(`name`)}function Xt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Gt(e);return}n=n==null?``:``+Ht(n),t=t==null?n:``+Ht(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Gt(e)}function Zt(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $t(e,t,n){t!=null&&(t=``+Ht(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+Ht(n)}function en(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ue(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Ht(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Gt(e)}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function rn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||nn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,Lt=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(rn(e,a,r),Lt=!0)}else for(var o in t)t.hasOwnProperty(o)&&rn(e,o,t[o])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function un(){}var dn=null;function fn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,mn=null;function hn(e){var t=Tt(e);if(t&&(e=t.stateNode)){var n=e[ht]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Jt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[ht]||null;if(!a)throw Error(i(90));Yt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Kt(r)}break a;case`textarea`:$t(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var gn=!1;function _n(e,t,n){if(gn)return e(t,n);gn=!0;try{return e(t)}finally{if(gn=!1,(pn!==null||mn!==null)&&(Rd(),pn&&(t=pn,e=mn,mn=pn=null,hn(t),e)))for(t=0;t<e.length;t++)hn(e[t])}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ht]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var yn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,bn=!1;if(yn)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){bn=!0}}),window.addEventListener(`test`,xn,xn),window.removeEventListener(`test`,xn,xn)}catch{bn=!1}var Sn=null,Cn=null,wn=null;function Tn(){if(wn)return wn;var e,t=Cn,n=t.length,r,i=`value`in Sn?Sn.value:Sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return wn=i.slice(e,1<r?1-r:void 0)}function En(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function J(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Dn:J,this.isPropagationStopped=J,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=D({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=D({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(D({},In,{dataTransfer:0})),zn=On(D({},jn,{relatedTarget:0})),Bn=On(D({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Y=On(D({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Vn=On(D({},kn,{data:0})),X={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=On(D({},jn,{key:function(e){if(e.key){var t=X[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=En(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?En(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?En(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=On(D({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=On(D({},kn,{submitter:0})),Yn=On(D({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Xn=On(D({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Zn=On(D({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Qn=On(D({},kn,{newState:0,oldState:0,source:0})),$n=[9,13,27,32],er=yn&&`CompositionEvent`in window,tr=null;yn&&`documentMode`in document&&(tr=document.documentMode);var nr=yn&&`TextEvent`in window&&!tr,rr=yn&&(!er||tr&&8<tr&&11>=tr),ir=` `,ar=!1;function or(e,t){switch(e){case`keyup`:return $n.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function sr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var cr=!1;function lr(e,t){switch(e){case`compositionend`:return sr(t);case`keypress`:return t.which===32?(ar=!0,ir):null;case`textInput`:return e=t.data,e===ir&&ar?null:e;default:return null}}function ur(e,t){if(cr)return e===`compositionend`||!er&&or(e,t)?(e=Tn(),wn=Cn=Sn=null,cr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return rr&&t.locale!==`ko`?null:t.data;default:return null}}var dr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!dr[e.type]:t===`textarea`}function pr(e,t,n,r){pn?mn?mn.push(r):mn=[r]:pn=r,t=Yf(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var mr=null,hr=null;function gr(e){Vf(e,0)}function _r(e){if(Kt(Et(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(yn){var br;if(yn){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){mr&&(mr.detachEvent(`onpropertychange`,wr),hr=mr=null)}function wr(e){if(e.propertyName===`value`&&_r(hr)){var t=[];pr(t,hr,e,fn(e)),_n(gr,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),mr=t,hr=n,mr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return _r(hr)}function Dr(e,t){if(e===`click`)return _r(t)}function Or(e,t){if(e===`input`||e===`change`)return _r(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pr(e,t){var n=Nr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Nr(n)}}function Fr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Fr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ir(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Mr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mr(e.document)}return t}function Lr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Rr=yn&&`documentMode`in document&&11>=document.documentMode,zr=null,Br=null,Vr=null,Hr=!1;function Ur(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hr||zr==null||zr!==Mr(r)||(r=zr,`selectionStart`in r&&Lr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&jr(Vr,r)||(Vr=r,r=Yf(Br,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=zr)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Gr={animationend:Wr(`Animation`,`AnimationEnd`),animationiteration:Wr(`Animation`,`AnimationIteration`),animationstart:Wr(`Animation`,`AnimationStart`),transitionrun:Wr(`Transition`,`TransitionRun`),transitionstart:Wr(`Transition`,`TransitionStart`),transitioncancel:Wr(`Transition`,`TransitionCancel`),transitionend:Wr(`Transition`,`TransitionEnd`)},Kr={},qr={};yn&&(qr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),`TransitionEvent`in window||delete Gr.transitionend.transition);function Jr(e){if(Kr[e])return Kr[e];if(!Gr[e])return e;var t=Gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qr)return Kr[e]=t[n];return e}var Yr=Jr(`animationend`),Xr=Jr(`animationiteration`),Zr=Jr(`animationstart`),Qr=Jr(`transitionrun`),$r=Jr(`transitionstart`),ei=Jr(`transitioncancel`),ti=Jr(`transitionend`),ni=new Map,ri=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ri.push(`scrollEnd`);function ii(e,t){ni.set(e,t),jt(t,[e])}var ai=0;function oi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=yd.identifierPrefix;var n=ai++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function si(e){if(e==null||typeof e==`string`)return e;var t=null,n=Dd;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function ci(e,t){return e=si(e),t=si(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var li=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ui=[],di=0,fi=0;function pi(){for(var e=di,t=fi=di=0;t<e;){var n=ui[t];ui[t++]=null;var r=ui[t];ui[t++]=null;var i=ui[t];ui[t++]=null;var a=ui[t];if(ui[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&_i(n,i,a)}}function mi(e,t,n,r){ui[di++]=e,ui[di++]=t,ui[di++]=n,ui[di++]=r,fi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function hi(e,t,n,r){return mi(e,t,n,r),vi(e)}function gi(e,t){return mi(e,null,null,t),vi(e)}function _i(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ge(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function vi(e){if(50<Od)throw Od=0,kd=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var yi={};function bi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(e,t,n,r){return new bi(e,t,n,r)}function Si(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ci(e,t){var n=e.alternate;return n===null?(n=xi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function wi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ti(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Si(r)&&(s=1);else if(typeof r==`string`)s=Ym(e,n,he.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case R:return e=xi(31,n,t,a),e.elementType=R,e.lanes=o,e;case ne:return Ei(n.children,a,o,t);case k:s=8,a|=24;break;case A:return e=xi(12,n,t,a|2),e.elementType=A,e.lanes=o,e;case P:return e=xi(13,n,t,a),e.elementType=P,e.lanes=o,e;case F:return e=xi(19,n,t,a),e.elementType=F,e.lanes=o,e;case re:case z:return e=a|32,e=xi(30,n,t,e),e.elementType=z,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case M:s=10;break a;case j:s=9;break a;case N:s=11;break a;case I:s=14;break a;case L:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=xi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Ei(e,t,n,r){return e=xi(7,e,r,t),e.lanes=n,e}function Di(e,t,n){return e=xi(6,e,null,t),e.lanes=n,e}function Oi(e){var t=xi(18,null,null,0);return t.stateNode=e,t}function ki(e,t,n){return t=xi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ai=new WeakMap;function ji(e,t){if(typeof e==`object`&&e){var n=Ai.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},Ai.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var Mi=[],Ni=0,Pi=null,Fi=0,Ii=[],Li=0,Ri=null,zi=1,Bi=``;function Vi(e,t){Mi[Ni++]=Fi,Mi[Ni++]=Pi,Pi=e,Fi=t}function Hi(e,t,n){Ii[Li++]=zi,Ii[Li++]=Bi,Ii[Li++]=Ri,Ri=e;var r=zi;e=Bi;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,zi=1<<32-Ge(t)+i|n<<i|r,Bi=a+e}else zi=1<<a|n<<i|r,Bi=e}function Ui(e){e.return!==null&&(Vi(e,1),Hi(e,1,0))}function Wi(e){for(;e===Pi;)Pi=Mi[--Ni],Mi[Ni]=null,Fi=Mi[--Ni],Mi[Ni]=null;for(;e===Ri;)Ri=Ii[--Li],Ii[Li]=null,Bi=Ii[--Li],Ii[Li]=null,zi=Ii[--Li],Ii[Li]=null}function Gi(e,t){Ii[Li++]=zi,Ii[Li++]=Bi,Ii[Li++]=Ri,zi=t.id,Bi=t.overflow,Ri=e}var Ki=null,qi=null,Ji=!1,Yi=null,Xi=!1,Zi=Error(i(519));function Qi(e){throw ia(ji(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Zi}function $i(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[mt]=e,t[ht]=r,n){case`dialog`:Hf(`cancel`,t),Hf(`close`,t);break;case`iframe`:case`object`:case`embed`:Hf(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Hf(zf[n],t);break;case`source`:Hf(`error`,t);break;case`img`:case`image`:case`link`:Hf(`error`,t),Hf(`load`,t);break;case`details`:Hf(`toggle`,t);break;case`input`:Hf(`invalid`,t),Xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Hf(`invalid`,t);break;case`textarea`:Hf(`invalid`,t),en(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||tp(t.textContent,n)?(r.popover!=null&&(Hf(`beforetoggle`,t),Hf(`toggle`,t)),r.onScroll!=null&&Hf(`scroll`,t),r.onScrollEnd!=null&&Hf(`scrollend`,t),r.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||Qi(e,!0)}function ea(e){for(Ki=e.return;Ki;)switch(Ki.tag){case 5:case 31:case 13:Xi=!1;return;case 27:case 3:Xi=!0;return;default:Ki=Ki.return}}function ta(e){if(e!==Ki)return!1;if(!Ji)return ea(e),Ji=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||hp(e.type,e.memoizedProps)),n=!n),n&&qi&&Qi(e),ea(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));qi=pm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));qi=pm(e)}else t===27?(t=qi,wp(e.type)?(e=fm,fm=null,qi=e):qi=t):qi=Ki?dm(e.stateNode.nextSibling):null;return!0}function na(){qi=Ki=null,Ji=!1}function ra(){var e=Yi;return e!==null&&(dd===null?dd=e:dd.push.apply(dd,e),Yi=null),e}function ia(e){Yi===null?Yi=[e]:Yi.push(e)}var aa=H(null),oa=null,sa=null;function ca(e,t,n){me(aa,t._currentValue),t._currentValue=n}function la(e){e._currentValue=aa.current,U(aa)}function ua(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function da(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ua(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ua(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ua(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function fa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Ar(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ve.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[lh]:e.push(lh))}a=a.return}return e!==null&&da(t,e,n,r),t.flags|=262144,e!==null}function pa(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ma(e){oa=e,sa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ha(e){return _a(oa,e)}function ga(e,t){return oa===null&&ma(e),_a(e,t)}function _a(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},sa===null){if(e===null)throw Error(i(308));sa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else sa=sa.next=t;return n}var va=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ya=t.unstable_scheduleCallback,ba=t.unstable_NormalPriority,xa={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Sa(){return{controller:new va,data:new Map,refCount:0}}function Ca(e){e.refCount--,e.refCount===0&&ya(ba,function(){e.controller.abort()})}function wa(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Ta=null;function Ea(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Da=null,Oa=0,ka=0,Aa=null;function ja(e,t){if(Da===null){var n=Da=[];Oa=0,ka=Pf(),Aa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Oa++,t.then(Ma,Ma),t}function Ma(){if(--Oa===0&&(Ta=null,Da!==null)){Aa!==null&&(Aa.status=`fulfilled`);var e=Da;Da=null,ka=0,Aa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Na(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Pa=B.S;B.S=function(e,t){if(md=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&ja(e,t),Ta!==null)for(var n=bf;n!==null;)wa(n,Ta),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)wa(r,n),r=r.next;if(ka!==0){r=Ta,r===null&&(r=Ta=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Pa!==null&&Pa(e,t)};var Fa=H(null);function Ia(){var e=Fa.current;return e===null?Yu.pooledCache:e}function La(e,t){t===null?me(Fa,Fa.current):me(Fa,t.pool)}function Ra(){var e=Ia();return e===null?null:{parent:xa._currentValue,pool:e}}var za=Error(i(460)),Ba=Error(i(474)),Va=Error(i(542)),Ha={then:function(){}};function Ua(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Wa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ja(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(un,un);else{if(e=Yu,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ja(e),e}throw Ka=t,za}}function Ga(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ka=e,za):e}}var Ka=null;function qa(){if(Ka===null)throw Error(i(459));var e=Ka;return Ka=null,e}function Ja(e){if(e===za||e===Va)throw Error(i(483))}var Ya=null,Xa=0;function Za(e){var t=Xa;return Xa+=1,Ya===null&&(Ya=[]),Wa(Ya,e,t)}function Qa(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function $a(e,t){throw t.$$typeof===O?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function eo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Ci(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Di(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===ne?(e=d(e,t,n.props.children,r,n.key),Qa(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===L&&Ga(i)===t.type)?(t=a(t,n.props),Qa(t,n),t.return=e,t):(t=Ti(n.type,n.key,n.props,null,e.mode,r),Qa(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=ki(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ei(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Di(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case ee:return n=Ti(t.type,t.key,t.props,null,e.mode,n),Qa(n,t),n.return=e,n;case te:return t=ki(t,e.mode,n),t.return=e,t;case L:return t=Ga(t),f(e,t,n)}if(ue(t)||se(t))return t=Ei(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Za(t),n);if(t.$$typeof===M)return f(e,ga(e,t),n);$a(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case ee:return n.key===i?l(e,t,n,r):null;case te:return n.key===i?u(e,t,n,r):null;case L:return n=Ga(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Za(n),r);if(n.$$typeof===M)return p(e,t,ga(e,n),r);$a(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case ee:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case te:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case L:return r=Ga(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Za(r),i);if(r.$$typeof===M)return m(e,t,n,ga(t,r),i);$a(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),Ji&&Vi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return Ji&&Vi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),Ji&&Vi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),Ji&&Vi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return Ji&&Vi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),Ji&&Vi(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===ne&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case ee:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===ne){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),Qa(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===L&&Ga(l)===r.type){n(e,r.sibling),c=a(r,o.props),Qa(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===ne?(c=Ei(o.props.children,e.mode,c,o.key),Qa(c,o),c.return=e,e=c):(c=Ti(o.type,o.key,o.props,null,e.mode,c),Qa(c,o),c.return=e,e=c)}return s(e);case te:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=ki(o,e.mode,c),c.return=e,e=c}return s(e);case L:return o=Ga(o),_(e,r,o,c)}if(ue(o))return h(e,r,o,c);if(se(o)){if(l=se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,Za(o),c);if(o.$$typeof===M)return _(e,r,ga(e,o),c);$a(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Di(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Xa=0;var i=_(e,t,n,r);return Ya=null,i}catch(t){if(t===za||t===Va)throw t;var a=xi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var to=eo(!0),no=eo(!1),ro=!1;function io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ao(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function oo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function so(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Ju&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=vi(e),_i(e,null,n),t}return mi(e,r,t,n),vi(e)}function co(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}function lo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var uo=!1;function fo(){if(uo){var e=Aa;if(e!==null)throw e}}function po(e,t,n,r){uo=!1;var i=e.updateQueue;ro=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Zu&f)===f:(r&f)===f){f!==0&&f===ka&&(uo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=D({},d,f);break a;case 2:ro=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),ad|=o,e.lanes=o,e.memoizedState=d}}function mo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function ho(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)mo(n[e],t)}var go=H(null),_o=H(0);function vo(e,t){e=rd,me(_o,e),me(go,t),rd=e|t.baseLanes}function yo(){me(_o,rd),me(go,go.current)}function bo(){rd=_o.current,U(go),U(_o)}var xo=H(null),So=null;function Co(e){var t=e.alternate;me(Oo,Oo.current&1),me(xo,e),So===null&&(t===null||go.current!==null||t.memoizedState!==null)&&(So=e)}function wo(e){me(Oo,Oo.current),me(xo,e),So===null&&(So=e)}function To(e){e.tag===22?(me(Oo,Oo.current),me(xo,e),So===null&&(So=e)):Eo()}function Eo(){me(Oo,Oo.current),me(xo,xo.current)}function Do(e){U(xo),So===e&&(So=null),U(Oo)}var Oo=H(0);function ko(e,t){me(xo,xo.current),me(Oo,t)}function Ao(e){U(Oo),U(xo),So===e&&(So=null)}function jo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||cm(n)||lm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mo=0,No=null,Po=null,Fo=null,Io=!1,Lo=!1,Ro=!1,zo=0,Bo=0,Vo=null,Ho=0;function Uo(){throw Error(i(321))}function Wo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function Go(e,t,n,r,i,a){return Mo=a,No=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?sc:cc,Ro=!1,a=n(r,i),Ro=!1,Lo&&(a=qo(t,n,r,i)),Ko(e),a}function Ko(e){B.H=oc;var t=Po!==null&&Po.next!==null;if(Mo=0,Fo=Po=No=null,Io=!1,Bo=0,Vo=null,t)throw Error(i(300));e===null||Tc||(e=e.dependencies,e!==null&&pa(e)&&(Tc=!0))}function qo(e,t,n,r){No=e;var a=0;do{if(Lo&&(Vo=null),Bo=0,Lo=!1,25<=a)throw Error(i(301));if(a+=1,Fo=Po=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}B.H=lc,o=t(n,r)}while(Lo);return o}function Jo(){var e=B.H,t=e.useState()[0];return t=typeof t.then==`function`?ts(t):t,e=e.useState()[0],(Po===null?null:Po.memoizedState)!==e&&(No.flags|=1024),t}function Yo(){var e=zo!==0;return zo=0,e}function Xo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Zo(e){if(Io){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Io=!1}Mo=0,Fo=Po=No=null,Lo=!1,Bo=zo=0,Vo=null}function Qo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fo===null?No.memoizedState=Fo=e:Fo=Fo.next=e,Fo}function $o(){if(Po===null){var e=No.alternate;e=e===null?null:e.memoizedState}else e=Po.next;var t=Fo===null?No.memoizedState:Fo.next;if(t!==null)Fo=t,Po=e;else{if(e===null)throw No.alternate===null?Error(i(467)):Error(i(310));Po=e,e={memoizedState:Po.memoizedState,baseState:Po.baseState,baseQueue:Po.baseQueue,queue:Po.queue,next:null},Fo===null?No.memoizedState=Fo=e:Fo=Fo.next=e}return Fo}function es(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ts(e){var t=Bo;return Bo+=1,Vo===null&&(Vo=[]),e=Wa(Vo,e,t),t=No,(Fo===null?t.memoizedState:Fo.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?sc:cc),e}function ns(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ts(e);if(e.$$typeof===ae)return;if(e.$$typeof===M)return ha(e)}throw Error(i(438,String(e)))}function rs(e){var t=null,n=No.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=No.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=es(),No.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ie;return t.index++,n}function is(e,t){return typeof t==`function`?t(e):t}function as(e){return os($o(),Po,e)}function os(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Mo&f)===f:(Zu&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ka&&(d=!0);else if((Mo&p)===p){u=u.next,p===ka&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,No.lanes|=p,ad|=p;f=u.action,Ro&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,No.lanes|=f,ad|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Ar(o,e.memoizedState)&&(Tc=!0,d&&(n=Aa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ss(e){var t=$o(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ar(o,t.memoizedState)||(Tc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Z(e,t,n){var r=No,a=$o(),o=Ji;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ar((Po||a).memoizedState,n);if(s&&(a.memoizedState=n,Tc=!0),a=a.queue,Ms(us.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Fo!==null&&!!(Fo.memoizedState.tag&1),Ds(e?9:8,{destroy:void 0},ls.bind(null,r,a,n,t),null),e){if(r.flags|=2048,Yu===null)throw Error(i(349));o||Mo&127||cs(r,t,n)}return n}function cs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=No.updateQueue,t===null?(t=es(),No.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ls(e,t,n,r){t.value=n,t.getSnapshot=r,ds(t)&&fs(e)}function us(e,t,n){return n(function(){ds(t)&&fs(e)})}function ds(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function fs(e){var t=gi(e,2);t!==null&&Nd(t,e,2)}function ps(e){var t=Qo();if(typeof e==`function`){var n=e;if(e=n(),Ro){G(!0);try{n()}finally{G(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:e},t}function ms(e,t,n,r){return e.baseState=n,os(e,Po,typeof r==`function`?r:is)}function hs(e,t,n,r,a){if(rc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};B.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,gs(t,o)):(o.next=n.next,t.pending=n.next=o)}}function gs(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=B.T,o={};o.types=a===null?null:a.types,B.T=o;try{var s=n(i,r),c=B.S;c!==null&&c(o,s),_s(e,t,s)}catch(n){ys(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),B.T=a}}else try{a=n(i,r),_s(e,t,a)}catch(n){ys(e,t,n)}}function _s(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){vs(e,t,n)},function(n){return ys(e,t,n)}):vs(e,t,n)}function vs(e,t,n){t.status=`fulfilled`,t.value=n,bs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,gs(e,n)))}function ys(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,bs(t),t=t.next;while(t!==r)}e.action=null}function bs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function xs(e,t){return t}function Ss(e,t){if(Ji){var n=Yu.formState;if(n!==null){a:{var r=No;if(Ji){if(qi){b:{for(var i=qi,a=Xi;i.nodeType!==8;)if(!a||(i=dm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){qi=dm(i.nextSibling),r=i.data===`F!`;break a}}Qi(r)}r=!1}r&&(t=n[0])}}return n=Qo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xs,lastRenderedState:t},n.queue=r,n=ec.bind(null,No,r),r.dispatch=n,r=ps(!1),a=nc.bind(null,No,!1,r.queue),r=Qo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=hs.bind(null,No,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Cs(e){return ws($o(),Po,e)}function ws(e,t,n){if(t=os(e,t,xs)[0],e=as(is)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ts(t)}catch(e){throw e===za?Va:e}else r=t;t=$o();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(No.flags|=2048,Ds(9,{destroy:void 0},Ts.bind(null,i,n),null)),[r,a,e]}function Ts(e,t){e.action=t}function Es(e){var t=$o(),n=Po;if(n!==null)return ws(t,n,e);$o(),t=t.memoizedState,n=$o();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Ds(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=No.updateQueue,t===null&&(t=es(),No.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Os(){return $o().memoizedState}function ks(e,t,n,r){var i=Qo();No.flags|=e,i.memoizedState=Ds(1|t,{destroy:void 0},n,r===void 0?null:r)}function As(e,t,n,r){var i=$o();r=r===void 0?null:r;var a=i.memoizedState.inst;Po!==null&&r!==null&&Wo(r,Po.memoizedState.deps)?i.memoizedState=Ds(t,a,n,r):(No.flags|=e,i.memoizedState=Ds(1|t,a,n,r))}function js(e,t){ks(8390656,8,e,t)}function Ms(e,t){As(2048,8,e,t)}function Ns(e){No.flags|=4;var t=No.updateQueue;if(t===null)t=es(),No.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Ps(e){var t=$o().memoizedState;return Ns({ref:t,nextImpl:e}),function(){if(Ju&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Fs(e,t){return As(4,2,e,t)}function Is(e,t){return As(4,4,e,t)}function Ls(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rs(e,t,n){n=n==null?null:n.concat([e]),As(4,4,Ls.bind(null,t,e),n)}function zs(){}function Bs(e,t){var n=$o();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Wo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vs(e,t){var n=$o();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Wo(t,r[1]))return r[0];if(r=e(),Ro){G(!0);try{e()}finally{G(!1)}}return n.memoizedState=[r,t],r}function Hs(e,t,n){return n===void 0||Mo&1073741824&&!(Zu&261930)?e.memoizedState=t:(e.memoizedState=n,e=jd(),No.lanes|=e,ad|=e,n)}function Us(e,t,n,r){return Ar(n,t)?n:go.current===null?!(Mo&106)||Mo&1073741824&&!(Zu&261930)?(Tc=!0,e.memoizedState=n):(e=jd(),No.lanes|=e,ad|=e,t):(e=Hs(e,n,r),Ar(e,t)||(Tc=!0),e)}function Ws(e,t,n,r,i){var a=V.p;V.p=a!==0&&8>a?a:8;var o=B.T,s={};s.types=o===null?null:o.types,B.T=s,nc(e,!1,t,n);try{var c=i(),l=B.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?tc(e,t,Na(c,r),Ad(e)):tc(e,t,r,Ad(e))}catch(n){tc(e,t,{then:function(){},status:`rejected`,reason:n},Ad())}finally{V.p=a,o!==null&&s.types!==null&&(o.types=s.types),B.T=o}}function Gs(){}function Ks(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=qs(e).queue;Ws(e,a,t,de,n===null?Gs:function(){return Js(e),n(r)})}function qs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Js(e){var t=qs(e);t.next===null&&(t=e.alternate.memoizedState),tc(e,t.next.queue,{},Ad())}function Ys(){return ha(lh)}function Xs(){return $o().memoizedState}function Zs(){return $o().memoizedState}function Qs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ad();e=oo(n);var r=so(t,e,n);r!==null&&(Nd(r,t,n),co(r,t,n)),t={cache:Sa()},e.payload=t;return}t=t.return}}function $s(e,t,n){var r=Ad();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},rc(e)?ic(t,n):(n=hi(e,t,n,r),n!==null&&(Nd(n,e,r),ac(n,t,r)))}function ec(e,t,n){tc(e,t,n,Ad())}function tc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(rc(e))ic(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return mi(e,t,i,0),Yu===null&&pi(),!1}catch{}if(n=hi(e,t,i,r),n!==null)return Nd(n,e,r),ac(n,t,r),!0}return!1}function nc(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},rc(e)){if(t)throw Error(i(479))}else t=hi(e,n,r,2),t!==null&&Nd(t,e,2)}function rc(e){var t=e.alternate;return e===No||t!==null&&t===No}function ic(e,t){Lo=Io=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ac(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,st(e,n)}}var oc={readContext:ha,use:ns,useCallback:Uo,useContext:Uo,useEffect:Uo,useImperativeHandle:Uo,useLayoutEffect:Uo,useInsertionEffect:Uo,useMemo:Uo,useReducer:Uo,useRef:Uo,useState:Uo,useDebugValue:Uo,useDeferredValue:Uo,useTransition:Uo,useSyncExternalStore:Uo,useId:Uo,useHostTransitionStatus:Uo,useFormState:Uo,useActionState:Uo,useOptimistic:Uo,useMemoCache:Uo,useCacheRefresh:Uo,useEffectEvent:Uo},sc={readContext:ha,use:ns,useCallback:function(e,t){return Qo().memoizedState=[e,t===void 0?null:t],e},useContext:ha,useEffect:js,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ks(4194308,4,Ls.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ks(4194308,4,e,t)},useInsertionEffect:function(e,t){ks(4,2,e,t)},useMemo:function(e,t){var n=Qo();t=t===void 0?null:t;var r=e();if(Ro){G(!0);try{e()}finally{G(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Qo();if(n!==void 0){var i=n(t);if(Ro){G(!0);try{n(t)}finally{G(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=$s.bind(null,No,e),[r.memoizedState,e]},useRef:function(e){var t=Qo();return e={current:e},t.memoizedState=e},useState:function(e){e=ps(e);var t=e.queue,n=ec.bind(null,No,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:zs,useDeferredValue:function(e,t){return Hs(Qo(),e,t)},useTransition:function(){var e=ps(!1);return e=Ws.bind(null,No,e.queue,!0,!1),Qo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=No,a=Qo();if(Ji){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Yu===null)throw Error(i(349));Zu&127||cs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,js(us.bind(null,r,o,e),[e]),r.flags|=2048,Ds(9,{destroy:void 0},ls.bind(null,r,o,n,t),null),n},useId:function(){var e=Qo(),t=Yu.identifierPrefix;if(Ji){var n=Bi,r=zi;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=zo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Ho++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ys,useFormState:Ss,useActionState:Ss,useOptimistic:function(e){var t=Qo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=nc.bind(null,No,!0,n),n.dispatch=t,[e,t]},useMemoCache:rs,useCacheRefresh:function(){return Qo().memoizedState=Qs.bind(null,No)},useEffectEvent:function(e){var t=Qo(),n={impl:e};return t.memoizedState=n,function(){if(Ju&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},cc={readContext:ha,use:ns,useCallback:Bs,useContext:ha,useEffect:Ms,useImperativeHandle:Rs,useInsertionEffect:Fs,useLayoutEffect:Is,useMemo:Vs,useReducer:as,useRef:Os,useState:function(){return as(is)},useDebugValue:zs,useDeferredValue:function(e,t){return Us($o(),Po.memoizedState,e,t)},useTransition:function(){var e=as(is)[0],t=$o().memoizedState;return[typeof e==`boolean`?e:ts(e),t]},useSyncExternalStore:Z,useId:Xs,useHostTransitionStatus:Ys,useFormState:Cs,useActionState:Cs,useOptimistic:function(e,t){return ms($o(),Po,e,t)},useMemoCache:rs,useCacheRefresh:Zs,useEffectEvent:Ps},lc={readContext:ha,use:ns,useCallback:Bs,useContext:ha,useEffect:Ms,useImperativeHandle:Rs,useInsertionEffect:Fs,useLayoutEffect:Is,useMemo:Vs,useReducer:ss,useRef:Os,useState:function(){return ss(is)},useDebugValue:zs,useDeferredValue:function(e,t){var n=$o();return Po===null?Hs(n,e,t):Us(n,Po.memoizedState,e,t)},useTransition:function(){var e=ss(is)[0],t=$o().memoizedState;return[typeof e==`boolean`?e:ts(e),t]},useSyncExternalStore:Z,useId:Xs,useHostTransitionStatus:Ys,useFormState:Es,useActionState:Es,useOptimistic:function(e,t){var n=$o();return Po===null?(n.baseState=e,[e,n.queue.dispatch]):ms(n,Po,e,t)},useMemoCache:rs,useCacheRefresh:Zs,useEffectEvent:Ps};function uc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ad(),i=oo(r);i.payload=t,n!=null&&(i.callback=n),t=so(e,i,r),t!==null&&(Nd(t,e,r),co(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ad(),i=oo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=so(e,i,r),t!==null&&(Nd(t,e,r),co(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ad(),r=oo(n);r.tag=2,t!=null&&(r.callback=t),t=so(e,r,n),t!==null&&(Nd(t,e,n),co(t,e,n))}};function fc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function pc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dc.enqueueReplaceState(t,t.state,null)}function mc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=D({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function hc(e){li(e)}function gc(e){console.error(e)}function _c(e){li(e)}function vc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function yc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function bc(e,t,n){return n=oo(n),n.tag=3,n.payload={element:null},n.callback=function(){vc(e,t)},n}function xc(e){return e=oo(e),e.tag=3,e}function Sc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){yc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){yc(t,n,r),typeof i!=`function`&&(_d===null?_d=new Set([this]):_d.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Cc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&fa(t,n,a,!0),n=xo.current,n!==null){switch(n.tag){case 31:case 13:case 19:return So===null?Gd():n.alternate===null&&id===0&&(id=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ha?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,a)),!1;case 22:return n.flags|=65536,r===Ha?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,a)),!1}throw Error(i(435,n.tag))}return mf(e,r,a),Gd(),!1}if(Ji)return t=xo.current,t===null?(r!==Zi&&(t=Error(i(423),{cause:r}),ia(ji(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=ji(r,n),a=bc(e.stateNode,r,a),lo(e,a),id!==4&&(id=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Zi&&(e=Error(i(422),{cause:r}),ia(ji(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=ji(o,n),ud===null?ud=[o]:ud.push(o),id!==4&&(id=2),t===null)return!0;r=ji(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=bc(n.stateNode,r,e),lo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(_d===null||!_d.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=xc(a),Sc(a,e,n,r),lo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var wc=Error(i(461)),Tc=!1;function Ec(e,t,n,r){t.child=e===null?no(t,null,n,r):to(t,e.child,n,r)}function Dc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ma(t),r=Go(e,t,n,o,a,i),s=Yo(),e!==null&&!Tc?(Xo(e,t,i),tl(e,t,i)):(Ji&&s&&Ui(t),t.flags|=1,Ec(e,t,r,i),t.child)}function Oc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Si(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,kc(e,t,a,r,i)):(e=Ti(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!nl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return tl(e,t,i)}return t.flags|=1,e=Ci(a,r),e.ref=t.ref,e.return=t,t.child=e}function kc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref){if(Tc=!1,t.pendingProps=r=a,nl(e,i))e.flags&131072&&(Tc=!0);else return t.lanes=e.lanes,tl(e,t,i)}}return Lc(e,t,n,r,i)}function Ac(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&La(t,a===null?null:a.cachePool),a===null?yo():vo(t,a),To(t);else return r=t.lanes=536870912,Mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&La(t,null),yo(),Eo()):(La(t,a.cachePool),vo(t,a),Eo(),t.memoizedState=null);return Ec(e,t,i,n),t.child}function jc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Mc(e,t,n,r,i){var a=Ia();return a=a===null?null:{parent:xa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&La(t,null),yo(),To(t),e!==null&&fa(e,t,r,!0),t.childLanes=i,null}function Nc(e,t){return t=Kc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Pc(e,t,n){return to(t,e.child,null,n),e=Nc(t,t.pendingProps),e.flags|=2,Do(t),t.memoizedState=null,e}function Fc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(Ji){if(r.mode===`hidden`)return e=Nc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},jc(null,e);if(wo(t),(e=qi)?(e=sm(e,Xi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ri===null?null:{id:zi,overflow:Bi},retryLane:536870912,hydrationErrors:null},n=Oi(e),n.return=t,t.child=n,Ki=t,qi=null)):e=null,e===null)throw Qi(t);return t.lanes=536870912,null}return Nc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(wo(t),a){if(t.flags&256)t.flags&=-257,t=Pc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Tc||fa(e,t,n,!1),a=(n&e.childLanes)!==0,Tc||a){if(go.current===null){if(r=Yu,r!==null&&(s=ct(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,gi(e,s),Nd(r,e,s),wc;Gd()}t=Pc(e,t,n)}else e=o.treeContext,qi=dm(s.nextSibling),Ki=t,Ji=!0,Yi=null,Xi=!1,e!==null&&Gi(t,e),t=Nc(t,r),t.flags|=134221824;return t}return e=Ci(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ic(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Lc(e,t,n,r,i){return ma(t),n=Go(e,t,n,r,void 0,i),r=Yo(),e!==null&&!Tc?(Xo(e,t,i),tl(e,t,i)):(Ji&&r&&Ui(t),t.flags|=1,Ec(e,t,n,i),t.child)}function Rc(e,t,n,r,i,a){return ma(t),t.updateQueue=null,n=qo(t,r,n,i),Ko(e),r=Yo(),e!==null&&!Tc?(Xo(e,t,a),tl(e,t,a)):(Ji&&r&&Ui(t),t.flags|=1,Ec(e,t,n,a),t.child)}function zc(e,t,n,r,i){if(ma(t),t.stateNode===null){var a=yi,o=n.contextType;typeof o==`object`&&o&&(a=ha(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=dc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},io(t),o=n.contextType,a.context=typeof o==`object`&&o?ha(o):yi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(uc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&dc.enqueueReplaceState(a,a.state,null),po(t,r,a,i),fo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=mc(n,s);a.props=c;var l=a.context,u=n.contextType;o=yi,typeof u==`object`&&u&&(o=ha(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&pc(t,a,r,o),ro=!1;var f=t.memoizedState;a.state=f,po(t,r,a,i),fo(),l=t.memoizedState,s||f!==l||ro?(typeof d==`function`&&(uc(t,n,d,r),l=t.memoizedState),(c=ro||fc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ao(e,t),o=t.memoizedProps,u=mc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=yi,typeof l==`object`&&l&&(c=ha(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&pc(t,a,r,c),ro=!1,f=t.memoizedState,a.state=f,po(t,r,a,i),fo();var p=t.memoizedState;o!==d||f!==p||ro||e!==null&&e.dependencies!==null&&pa(e.dependencies)?(typeof s==`function`&&(uc(t,n,s,r),p=t.memoizedState),(u=ro||fc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&pa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Ic(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=to(t,e.child,null,i),t.child=to(t,null,n,i)):Ec(e,t,n,i),t.memoizedState=a.state,e=t.child):e=tl(e,t,i),e}function Bc(e,t,n,r){return na(),t.flags|=256,Ec(e,t,n,r),t.child}var Vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hc(e){return{baseLanes:e,cachePool:Ra()}}function Uc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=cd),e}function Wc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Oo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(Ji){if(i?Co(t):Eo(),(e=qi)?(e=sm(e,Xi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ri===null?null:{id:zi,overflow:Bi},retryLane:536870912,hydrationErrors:null},n=Oi(e),n.return=t,t.child=n,Ki=t,qi=null)):e=null,e===null)throw Qi(t);return t.lanes=lm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Eo(),i=t.mode,a=Kc({mode:`hidden`,children:a},i),r=Ei(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Hc(n),r.childLanes=Uc(e,o,n),t.memoizedState=Vc,jc(null,r)):(Co(t),Gc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return Jc(e,t,a,o,r,c,s,n)}return i?(Eo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Ci(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Ei(i,a,n,null),i.flags|=2):i=Ci(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,jc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Hc(n):(a=i.cachePool,a===null?a=Ra():(s=xa._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Uc(e,o,n),t.memoizedState=Vc,jc(e.child,r)):(Co(t),n=e.child,e=n.sibling,n=Ci(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Gc(e,t){return t=Kc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Kc(e,t){return e=xi(22,e,null,t),e.lanes=0,e}function qc(e,t,n){return to(t,e.child,null,n),e=Gc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jc(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Co(t),t.flags&=-257,qc(e,t,c)):t.memoizedState===null?(Eo(),o=a.fallback,s=t.mode,a=Kc({mode:`visible`,children:a.children},s),o=Ei(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,to(t,e.child,null,c),a=t.child,a.memoizedState=Hc(c),a.childLanes=Uc(e,r,c),t.memoizedState=Vc,jc(null,a)):(Eo(),t.child=e.child,t.flags|=128,null);if(Co(t),lm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,ia({value:a,source:null,stack:null})),qc(e,t,c)}if(Tc||fa(e,t,c,!1),r=(c&e.childLanes)!==0,Tc||r){if(go.current!==null)return qc(e,t,c);if(r=Yu,r!==null&&(a=ct(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,gi(e,a),Nd(r,e,a),wc;return cm(o)||Gd(),qc(e,t,c)}return cm(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,qi=dm(o.nextSibling),Ki=t,Ji=!0,Yi=null,Xi=!1,e!==null&&Gi(t,e),t=Gc(t,a.children),t.flags|=134221824,t)}function Yc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ua(e.return,t,n)}function Xc(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&jo(n)===null&&(t=e),e=e.sibling}return t}function Zc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Qc(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function $c(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Oo.current;if(t.flags&128)return ko(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,ko(t,o),i===`backwards`&&e!==null?(Qc(e),Ec(e,t,r,n),Qc(e)):Ec(e,t,r,n),r=Ji?Fi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yc(e,n,t);else if(e.tag===19)Yc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=Xc(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,Qc(t)),Zc(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&jo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Zc(t,!0,n,null,a,r);break;case`together`:Zc(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=Xc(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Zc(t,!1,i,n,a,r)}return t.child}function el(e,t,n){var r=t.pendingProps;return ca(t,t.type,r.value),Ec(e,t,r.children,n),t.child}function tl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ad|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(fa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Ci(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ci(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&pa(e)))}function rl(e,t,n){switch(t.tag){case 3:ye(t,t.stateNode.containerInfo),ca(t,xa,e.memoizedState.cache),na();break;case 27:case 5:xe(t);break;case 4:ye(t,t.stateNode.containerInfo);break;case 10:ca(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,wo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Co(t),t.flags|=128,null;r=fa(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Wc(e,t,n):(Co(t),e=tl(e,t,n),e===null?null:e.sibling)}Co(t);break;case 19:if(t.flags&128)return $c(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(fa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return $c(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ko(t,Oo.current),r)break;return null;case 22:return t.lanes=0,Ac(e,t,n,t.pendingProps);case 24:ca(t,xa,e.memoizedState.cache)}return tl(e,t,n)}function il(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Tc=!0;else{if(!nl(e,n)&&!(t.flags&128))return Tc=!1,rl(e,t,n);Tc=!!(e.flags&131072)}}else Tc=!1,Ji&&t.flags&1048576&&Hi(t,Fi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ga(t.elementType),t.type=e,typeof e==`function`)Si(e)?(r=mc(e,r),t.tag=1,t=zc(null,t,e,r,n)):(t.tag=0,t=Lc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===N){t.tag=11,t=Dc(null,t,e,r,n);break a}if(a===I){t.tag=14,t=Oc(null,t,e,r,n);break a}if(a===M){t.tag=10,t.type=e,t=el(null,t,n);break a}}throw t=le(e)||e,Error(i(306,t,``))}}return t;case 0:return Lc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=mc(r,t.pendingProps),zc(e,t,r,a,n);case 3:a:{if(ye(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,ao(e,t),po(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ca(t,xa,r),r!==o.cache&&da(t,[xa],n,!0),fo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Bc(e,t,r,n);break a}if(r!==a){a=ji(Error(i(424)),t),ia(a),t=Bc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(qi=dm(e.firstChild),Ki=t,Ji=!0,Yi=null,Xi=!0,n=no(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(na(),r===a){t=tl(e,t,n);break a}Ec(e,t,r,n)}t=t.child}return t;case 26:return Ic(e,t),e===null?(n=Fm(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ji||(t.stateNode=mp(t.type,t.pendingProps,_e.current,t)):t.memoizedState=Fm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return xe(t),e===null&&Ji&&(r=t.stateNode=_m(t.type,t.pendingProps,_e.current),Ki=t,Xi=!0,a=qi,wp(t.type)?(fm=a,qi=dm(r.firstChild)):qi=a),Ec(e,t,t.pendingProps.children,n),Ic(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ji&&((a=r=qi)&&(r=am(r,t.type,t.pendingProps,Xi),r===null?a=!1:(t.stateNode=r,Ki=t,qi=dm(r.firstChild),Xi=!1,a=!0)),a||Qi(t)),xe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,hp(a,o)?r=null:s!==null&&hp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Go(e,t,Jo,null,null,n),lh._currentValue=a),Ic(e,t),Ec(e,t,r,n),t.child;case 6:return e===null&&Ji&&((e=n=qi)&&(n=om(n,t.pendingProps,Xi),n===null?e=!1:(t.stateNode=n,Ki=t,qi=null,e=!0)),e||Qi(t)),null;case 13:return Wc(e,t,n);case 4:return ye(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=to(t,null,r,n):Ec(e,t,r,n),t.child;case 11:return Dc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Ic(e,t),Ec(e,t,r,n),t.child;case 8:return Ec(e,t,t.pendingProps.children,n),t.child;case 12:return Ec(e,t,t.pendingProps.children,n),t.child;case 10:return el(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,ma(t),a=ha(a),r=r(a),t.flags|=1,Ec(e,t,r,n),t.child;case 14:return Oc(e,t,t.type,t.pendingProps,n);case 15:return kc(e,t,t.type,t.pendingProps,n);case 19:return $c(e,t,n);case 31:return Fc(e,t,n);case 22:return Ac(e,t,n,t.pendingProps);case 24:return ma(t),r=ha(xa),e===null?(a=Ia(),a===null&&(a=Yu,o=Sa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},io(t),ca(t,xa,a)):((e.lanes&n)!==0&&(ao(e,t),po(t,null,null,n),fo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ca(t,xa,r),r!==a.cache&&da(t,[xa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ca(t,xa,r))),Ec(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:Ji&&Ui(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Ic(e,t),Ec(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function al(e){e.flags|=4}function ol(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Xm(t,r):Xm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Hd())e.flags|=8192;else throw Ka=Ha,Ba}}else e.flags&=-16777217}function sl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Zm(t)){if(Hd())e.flags|=8192;else throw Ka=Ha,Ba}}function cl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:nt(),e.lanes|=t,ld|=t)}function ll(e,t){if(!Ji)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function ul(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function dl(e,t,n){var r=t.pendingProps;switch(Wi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ul(t),null;case 1:return ul(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),la(xa),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ta(t)?al(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ra())),ul(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(al(t),o===null?(ul(t),ol(t,a,null,r,n)):(ul(t),sl(t,o))):o?o===e.memoizedState?(ul(t),t.flags&=-16777217):(al(t),ul(t),sl(t,o)):(e=e.memoizedProps,e!==r&&al(t),ul(t),ol(t,a,e,r,n)),null;case 27:if(Se(t),n=_e.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&al(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return ul(t),t.subtreeFlags&=-33554433,null}e=he.current,ta(t)?$i(t,e):(e=_m(a,r,n),t.stateNode=e,al(t))}return ul(t),t.subtreeFlags&=-33554433,null;case 5:if(Se(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&al(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return ul(t),t.subtreeFlags&=-33554433,null}if(o=he.current,ta(t))$i(t,o);else{var s=dp(_e.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[mt]=t,o[ht]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(ip(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&al(t)}}return ul(t),t.subtreeFlags&=-33554433,ol(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&al(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=_e.current,ta(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Ki,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[mt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||tp(e.nodeValue,n)),e||Qi(t,!0)}else e=dp(e).createTextNode(r),e[mt]=t,t.stateNode=e}return ul(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ta(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[mt]=t}else na(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ul(t),e=!1}else n=ra(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Do(t),t):(Do(t),null);if(t.flags&128)throw Error(i(558))}return ul(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ta(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[mt]=t}else na(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ul(t),a=!1}else a=ra(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Do(t),t):(Do(t),null)}return Do(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),cl(t,t.updateQueue),ul(t),null);case 4:return be(),e===null&&Gf(t.stateNode.containerInfo),t.flags|=67108864,ul(t),null;case 10:return la(t.type),ul(t),null;case 19:if(Ao(t),r=t.memoizedState,r===null)return ul(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)ll(r,!1);else{if(id!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=jo(e),o!==null){for(t.flags|=128,ll(r,!1),e=o.updateQueue,t.updateQueue=e,cl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)wi(n,e),n=n.sibling;return ko(t,Oo.current&1|2),Ji&&Vi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>hd&&(t.flags|=128,a=!0,ll(r,!1),t.lanes=4194304)}}else{if(!a){if(e=jo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,cl(t,e),ll(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!Ji)return ul(t),null}else 2*Pe()-r.renderingStartTime>hd&&n!==536870912&&(t.flags|=128,a=!0,ll(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,o=Oo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||Ji?ko(t,o):(n=o,me(xo,t),me(Oo,n),So===null&&(So=t)),Ji&&Vi(t,r.treeForkCount),e}return ul(t),null;case 22:case 23:return Do(t),bo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(ul(t),t.subtreeFlags&6&&(t.flags|=8192)):ul(t),n=t.updateQueue,n!==null&&cl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&U(Fa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),la(xa),ul(t),null;case 25:return null;case 30:return t.flags|=33554432,ul(t),null}throw Error(i(156,t.tag))}function fl(e,t){switch(Wi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return la(xa),be(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Se(t),null;case 31:if(t.memoizedState!==null){if(Do(t),t.alternate===null)throw Error(i(340));na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Do(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));na()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ao(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return be(),null;case 10:return la(t.type),null;case 22:case 23:return Do(t),bo(),e!==null&&U(Fa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return la(xa),null;case 25:return null;default:return null}}function pl(e,t){switch(Wi(t),t.tag){case 3:la(xa),be();break;case 26:case 27:case 5:Se(t);break;case 4:be();break;case 31:t.memoizedState!==null&&Do(t);break;case 13:Do(t);break;case 19:Ao(t);break;case 10:la(t.type);break;case 22:case 23:Do(t),bo(),e!==null&&U(Fa);break;case 24:la(xa)}}function ml(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){pf(t,t.return,e)}}function hl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){pf(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){pf(t,t.return,e)}}function gl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ho(t,n)}catch(t){pf(e,e.return,t)}}}function _l(e,t,n){n.props=mc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){pf(e,t,n)}}function vl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=oi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Ip(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Lp(e);h(e.child,!1,em,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){pf(e,t,n)}}function yl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){pf(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){pf(e,t,n)}else n.current=null}}function bl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)nm(e.stateNode,t[n])}function xl(e){for(var t=e.return;t!==null&&(wl(t)&&nm(e.stateNode,t.stateNode),!Cl(t));)t=t.return}function Sl(e){for(var t=e.return;t!==null&&(wl(t)&&rm(e.stateNode,t.stateNode),!Cl(t));)t=t.return}function Cl(e){return e.tag===5||e.tag===3||e.tag===27}function wl(e){return e&&e.tag===7&&e.stateNode!==null}function Tl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){pf(e,e.return,t)}}function El(e,t,n){try{var r=e.stateNode;op(r,e.type,n,t),r[ht]=t}catch(t){pf(e,e.return,t)}}function Dl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wp(e.type)||e.tag===4}function Ol(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Dl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un)),bl(e,r),Lt=!0;else if(i!==4&&(i===27&&(bl(e,r),r=null,wp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(kl(e,t,n,r),e=e.sibling;e!==null;)kl(e,t,n,r),e=e.sibling}function Al(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),bl(e,r),Lt=!0;else if(i!==4&&(i===27&&(bl(e,r),r=null,wp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Al(e,t,n,r),e=e.sibling;e!==null;)Al(e,t,n,r),e=e.sibling}function jl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ip(t,r,n),t[mt]=e,t[ht]=n}catch(t){pf(e,e.return,t)}}var Ml=!1,Nl=null;function Pl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Ml=!0)}var Fl=null;function Il(){var e=Fl;return Fl=null,e}var Ll=0;function Rl(e,t,n,r,i){return Ll=0,zl(e.child,t,n,r,i)}function zl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Ap(o);r.push(s),s.view&&(a=!0)}else a||Ap(o).view&&(a=!0);Ml=!0,Dp(o,Ll===0?t:t+`_`+Ll,n),Ll++}else e.tag===22&&e.memoizedState!==null||e.tag===30&&i||zl(e.child,t,n,r,i)&&(a=!0);e=e.sibling}return a}function Bl(e,t){for(;e!==null;)e.tag===5?Op(e.stateNode,e.memoizedProps):e.tag===22&&e.memoizedState!==null||e.tag===30&&t||Bl(e.child,t),e=e.sibling}function Vl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Vl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=ci(t.default,t.share),t!==`none`&&(Rl(e,n,t,null,!1)||Bl(e.child,!1))}e=e.sibling}}function Hl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=oi(r,n),a=ci(r.default,n.paired?r.share:r.enter);a===`none`?Vl(e):Rl(e,i,a,null,!1)?(Vl(e),n.paired||t||Md(e,r.onEnter)):Bl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Hl(e,t),e=e.sibling;else Vl(e)}function Ul(e){if(Nl!==null&&Nl.size!==0){var t=Nl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=ci(n.default,n.share);if(a!==`none`&&(Rl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Md(e,n.onShare)):Bl(e.child,!1)),t.delete(r),t.size===0)break}}}Ul(e)}e=e.sibling}}}function Wl(e){if(e.tag===30){var t=e.memoizedProps,n=oi(t,e.stateNode),r=Nl===null?void 0:Nl.get(n),i=ci(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Rl(e,n,i,null,!1)?r===void 0?Md(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Nl.delete(n),Md(e,t.onShare)):Bl(e.child,!1)),Nl!==null&&Ul(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Wl(e),e=e.sibling;else Nl!==null&&Ul(e)}function Gl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=oi(t,e.stateNode);t=ci(t.default,t.update),e.flags&=-5,t!==`none`&&Rl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Gl(e);e=e.sibling}}function Kl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Bl(e.child,!1))}Kl(e)}e=e.sibling}}function ql(e){if(e.tag===30)e.stateNode.paired=null,Bl(e.child,!1),Kl(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)ql(e),e=e.sibling;else Kl(e)}function Jl(e){for(e=e.child;e!==null;)e.tag===30?Bl(e.child,!1):e.subtreeFlags&33554432&&Jl(e),e=e.sibling}function Yl(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Ll<a.length){var l=a[Ll],u=Ap(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Dp(c,Ll===0?n:n+`_`+Ll,i),s&&e.flags&4||(Fl===null&&(Fl=[]),Fl.push(c,Ll===0?r:r+`_`+Ll,t.memoizedProps)),Ll++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:Yl(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function Xl(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=oi(n,r),a=ci(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(jp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Ll=0,i=Yl(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Md(e,n.onUpdate))}else e.subtreeFlags&33554432&&Xl(e,t);e=e.sibling}}var Zl=!1,Ql=!1,$l=!1,eu=!1,tu=typeof WeakSet==`function`?WeakSet:Set,nu=null,ru=!1,iu=!1,au=!1,ou=!1;function su(e,t,n){if(e=e.containerInfo,lp=vh,e=Ir(e),Lr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(up={focusedElem:e,selectionRange:r},vh=!1,n=(n&335544064)===n,nu=t,t=n?9270:1024;nu!==null;){if(e=nu,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Wl(r[a]);if(e.alternate===null&&e.flags&2)n&&Pl(e),cu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Wl(r),cu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Pl(e),cu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,nu=r):(n&&Gl(e),cu(n))}}Nl=null}function cu(e){for(;nu!==null;){var t=nu,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=mc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){pf(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)im(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:im(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=oi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=ci(a.default,a.update),a!==`none`&&Rl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,nu=r;break}nu=t.return}}function lu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:ku(e,n),r&4&&ml(5,n);break;case 1:if(ku(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){pf(n,n.return,e)}else{var i=mc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){pf(n,n.return,e)}}}r&64&&gl(n),r&512&&vl(n,n.return);break;case 3:if(ku(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ho(e,t)}catch(e){pf(n,n.return,e)}}break;case 27:t===null&&r&4&&jl(n);case 26:case 5:ku(e,n),t===null&&r&4&&Tl(n),r&512&&vl(n,n.return);break;case 12:ku(e,n);break;case 31:ku(e,n),r&4&&vu(e,n);break;case 13:ku(e,n),r&4&&yu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),um(e,n))));break;case 22:if(r=n.memoizedState!==null||Zl,!r){var a=t!==null&&t.memoizedState!==null||Ql;t=Zl,i=Ql,Zl=r,(Ql=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),ju(e,n,r)):ku(e,n),Zl=t,Ql=i}break;case 30:ku(e,n),r&512&&vl(n,n.return);break;case 7:r&512&&vl(n,n.return);default:ku(e,n)}}function uu(e,t){for(e=e.child;e!==null;)du(e,t),e=e.sibling}function du(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){pf(e,e.return,t)}fu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,Lt=!0}catch(t){pf(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?Ep(s,!0):Ep(e.stateNode,!1)}catch(t){pf(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&uu(e,t);break;default:uu(e,t)}}function fu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:du(n,r);break a;case 22:n.memoizedState===null&&fu(n,r);break a;default:fu(n,r)}}e=e.sibling}}function pu(e){var t=e.alternate;t!==null&&(e.alternate=null,pu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ct(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var mu=null,hu=!1;function gu(e,t,n){for(n=n.child;n!==null;)_u(e,t,n),n=n.sibling}function _u(e,t,n){if(We&&typeof We.onCommitFiberUnmount==`function`)try{We.onCommitFiberUnmount(Ue,n)}catch{}switch(n.tag){case 26:Ql||yl(n,t),gu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!Ql&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ql||yl(n,t),Sl(n);var r=mu,i=hu;wp(n.type)&&(mu=n.stateNode,hu=!1),gu(e,t,n),vm(n.stateNode,n.type,n.memoizedProps),mu=r,hu=i;break;case 5:Ql||yl(n,t),Sl(n);case 6:if(n.tag===6&&Sl(n),r=mu,i=hu,mu=null,gu(e,t,n),mu=r,hu=i,mu!==null){if(hu)try{(mu.nodeType===9?mu.body:mu.nodeName===`HTML`?mu.ownerDocument.body:mu).removeChild(n.stateNode),Lt=!0}catch(e){pf(n,t,e)}else try{mu.removeChild(n.stateNode),Lt=!0}catch(e){pf(n,t,e)}}break;case 18:mu!==null&&(hu?(e=mu,Tp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Wh(e)):Tp(mu,n.stateNode));break;case 4:r=mu,i=hu,mu=n.stateNode.containerInfo,hu=!0,gu(e,t,n),mu=r,hu=i;break;case 0:case 11:case 14:case 15:hl(2,n,t),Ql||hl(4,n,t),gu(e,t,n);break;case 1:Ql||(yl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&_l(n,t,r)),gu(e,t,n);break;case 21:gu(e,t,n);break;case 22:Ql=(r=Ql)||n.memoizedState!==null,gu(e,t,n),Ql=r;break;case 30:yl(n,t),gu(e,t,n);break;case 7:Ql||yl(n,t),gu(e,t,n);break;default:gu(e,t,n)}}function vu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Wh(e)}catch(e){pf(t,t.return,e)}}}function yu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wh(e)}catch(e){pf(t,t.return,e)}}function bu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new tu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new tu),t;default:throw Error(i(435,e.tag))}}function xu(e,t){var n=bu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Su(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(wp(l.type)){mu=l.stateNode,hu=!1;break a}break;case 5:mu=l.stateNode,hu=!1;break a;case 3:case 4:mu=l.stateNode.containerInfo,hu=!0;break a}l=l.return}if(mu===null)throw Error(i(160));_u(s,c,o),mu=null,hu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)wu(t,e,n),t=t.sibling}var Cu=null;function wu(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Su(t,e,n),Tu(e),a&4&&(hl(3,e,e.return),ml(3,e),hl(5,e,e.return));break;case 1:Su(t,e,n),Tu(e),a&512&&(Ql||r===null||yl(r,r.return)),a&64&&Zl&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Cu,Su(t,e,n),Tu(e),a&512&&(Ql||r===null||yl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(Zl)e.stateNode=mp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[xt]||r[mt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),ip(r,t,n),r[mt]=e,q(r),t=r;break a;case`link`:if(o=qm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),ip(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=qm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),ip(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[mt]=e,q(r),t=r}e.stateNode=t}}else Zl||Jm(o,e.type,e.stateNode)}else e.stateNode=Hm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&El(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||Ql||t.parentNode.removeChild(t)):a.count--,n===null?Zl||Jm(o,e.type,e.stateNode):Hm(o,n,e.memoizedProps))}break;case 27:Su(t,e,n),Tu(e),a&512&&(Ql||r===null||yl(r,r.return)),r!==null&&a&4&&El(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=$l,$l=!1,Su(t,e,n),$l=o,Tu(e),a&512&&(Ql||r===null||yl(r,r.return)),e.flags&32){t=e.stateNode;try{tn(t,``),Lt=!0}catch(t){pf(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,El(e,t,r===null?t:r.memoizedProps)),a&1024&&(eu=!0);break;case 6:if(Su(t,e,n),Tu(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Lt=!0}catch(t){pf(e,e.return,t)}}break;case 3:if(Lt=!1,Km=null,o=Cu,Cu=Sm(t.containerInfo),Su(t,e,n),Cu=o,Tu(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Wh(t.containerInfo)}catch(t){pf(e,e.return,t)}eu&&(eu=!1,Eu(e)),Lt=!1;break;case 4:a=$l,$l=Zl,r=Rt(),o=Cu,Cu=Sm(e.stateNode.containerInfo),Su(t,e,n),Tu(e),Cu=o,Lt&&iu&&(au=!0),Lt=r,$l=a;break;case 12:Su(t,e,n),Tu(e);break;case 31:Su(t,e,n),Tu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xu(e,t)));break;case 13:Su(t,e,n),Tu(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(pd=Pe()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xu(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=Zl,l=Ql,u=$l;Zl=c||o,$l=u||o,Ql=l||s,Su(t,e,n),Ql=l,$l=u,Zl=c,Tu(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||Zl||Ql||(t=s||Ql,n=Zl,r=Ql,Zl=o||Zl,Ql=t,Au(e,2),Zl=n,Ql=r),!o&&$l||uu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,xu(e,n))));break;case 19:Su(t,e,n),Tu(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,xu(e,t)));break;case 30:a&512&&(Ql||r===null||yl(r,r.return)),a=Rt(),o=iu,s=(n&335544064)===n,c=e.memoizedProps,iu=s&&ci(c.default,c.update)!==`none`,Su(t,e,n),Tu(e),s&&r!==null&&Lt&&(e.flags|=4),iu=o,Lt=a;break;case 21:break;case 7:a&512&&(Ql||r===null||yl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Su(t,e,n),Tu(e)}}function Tu(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Dl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(wl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Cl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Al(e,Ol(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(tn(l,``),n.flags&=-33),Al(e,Ol(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;kl(e,Ol(e),u,s);break;default:throw Error(i(161))}}catch(t){pf(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Eu(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Eu(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,vh=!0,t.reset(),vh=!1),e=e.sibling}}function Du(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Ou(t,e),t=t.sibling;else Xl(t,!1)}function Ou(e,t){var n=e.alternate;if(n===null)Hl(e,!1);else switch(e.tag){case 3:if(ou=ru=!1,Il(),Du(t,e),!ru&&!au){if(e=Fl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Op(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),ou=!0}Fl=null;break;case 5:Du(t,e);break;case 4:r=ru,ru=!1,Du(t,e),ru&&(au=!0),ru=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Du(t,e):Hl(e,!1));break;case 30:r=ru,i=Il(),ru=!1,Du(t,e),ru&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=oi(a,o),o=oi(n.memoizedProps,o);var s=ci(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Ll=0,t=Yl(e,n,t,o,s,a,!0),Ll!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Md(e,e.memoizedProps.onUpdate),Fl=i):i!==null&&(i.push.apply(i,Fl),Fl=i),ru=e.flags&32?!0:r;break;default:Du(t,e)}}function ku(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)lu(e,t.alternate,t),t=t.sibling}function Au(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:hl(4,n,n.return),Au(n,r);break;case 1:yl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&_l(n,n.return,i),Au(n,r);break;case 27:r&2&&vm(n.stateNode,n.type,n.memoizedProps);case 5:yl(n,n.return),n.tag!==5&&n.tag!==27||Sl(n),Au(n,r);break;case 6:Sl(n);break;case 26:yl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||Ql||i.parentNode.removeChild(i),Au(n,r);break;case 22:n.memoizedState===null&&Au(n,r);break;case 30:yl(n,n.return),Au(n,r);break;case 7:yl(n,n.return);default:Au(n,r)}e=e.sibling}}function ju(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:ju(i,a,n),ml(4,a);break;case 1:if(ju(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){pf(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)mo(l[i],c)}catch(e){pf(r,r.return,e)}}s&&o&64&&gl(a),vl(a,a.return);break;case 27:n&2&&jl(a);case 5:a.tag!==5&&a.tag!==27||xl(a),ju(i,a,n),s&&r===null&&o&4&&Tl(a),vl(a,a.return);break;case 6:xl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||Zl||Jm(Sm(c.ownerDocument),a.type,c),ju(i,a,n),s&&r===null&&o&4&&Tl(a),vl(a,a.return);break;case 12:ju(i,a,n);break;case 31:ju(i,a,n),s&&o&4&&vu(i,a);break;case 13:ju(i,a,n),s&&o&4&&yu(i,a);break;case 22:a.memoizedState===null&&ju(i,a,n),vl(a,a.return);break;case 30:ju(i,a,n),vl(a,a.return);break;case 7:vl(a,a.return);default:ju(i,a,n)}t=t.sibling}}function Mu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ca(n))}function Nu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ca(e))}function Pu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Fu(e,t,n,r),t=t.sibling;else i&&Jl(t)}function Fu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ql(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Pu(e,t,n,r),a&2048&&ml(9,t);break;case 1:Pu(e,t,n,r);break;case 3:Pu(e,t,n,r),i&&ou&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Ca(a)));break;case 12:if(a&2048){Pu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){pf(t,t.return,e)}}else Pu(e,t,n,r);break;case 31:Pu(e,t,n,r);break;case 13:Pu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&ql(t),o._visibility&2?Pu(e,t,n,r):(o._visibility|=2,Iu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&ql(s),o._visibility&2?Pu(e,t,n,r):Lu(e,t)),a&2048&&Mu(s,t);break;case 24:Pu(e,t,n,r),a&2048&&Nu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Bl(a.child,!0),Bl(t.child,!0))),Pu(e,t,n,r);break;default:Pu(e,t,n,r)}}function Iu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Iu(a,o,s,c,i),ml(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Iu(a,o,s,c,i)):u._visibility&2?Iu(a,o,s,c,i):Lu(a,o),i&&l&2048&&Mu(o.alternate,o);break;case 24:Iu(a,o,s,c,i),i&&l&2048&&Nu(o.alternate,o);break;default:Iu(a,o,s,c,i)}t=t.sibling}}function Lu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Lu(n,r),i&2048&&Mu(r.alternate,r);break;case 24:Lu(n,r),i&2048&&Nu(r.alternate,r);break;default:Lu(n,r)}t=t.sibling}}var Ru=8192;function zu(e,t,n){if(e.subtreeFlags&Ru)for(e=e.child;e!==null;)Bu(e,t,n),e=e.sibling}function Bu(e,t,n){switch(e.tag){case 26:zu(e,t,n),e.flags&Ru&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&$m(n,e)):eh(n,Cu,e.memoizedState,e.memoizedProps));break;case 5:zu(e,t,n),e.flags&Ru&&(e=e.stateNode,(t&335544128)===t&&$m(n,e));break;case 3:case 4:var r=Cu;Cu=Sm(e.stateNode.containerInfo),zu(e,t,n),Cu=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ru,Ru=16777216,zu(e,t,n),Ru=r):zu(e,t,n));break;case 30:if((e.flags&Ru)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Nl===null&&(Nl=new Map),Nl.set(r,i)}zu(e,t,n);break;default:zu(e,t,n)}}function Vu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Hu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];nu=r,Gu(r,e)}Vu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Uu(e),e=e.sibling}function Uu(e){switch(e.tag){case 0:case 11:case 15:Hu(e),e.flags&2048&&hl(9,e,e.return);break;case 3:Hu(e);break;case 12:Hu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Wu(e)):Hu(e);break;default:Hu(e)}}function Wu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];nu=r,Gu(r,e)}Vu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:hl(8,t,t.return),Wu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Wu(t));break;default:Wu(t)}e=e.sibling}}function Gu(e,t){for(;nu!==null;){var n=nu;switch(n.tag){case 0:case 11:case 15:hl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ca(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,nu=r;else a:for(n=e;nu!==null;){r=nu;var i=r.sibling,a=r.return;if(pu(r),r===n){nu=null;break a}if(i!==null){i.return=a,nu=i;break a}nu=a}}}var Ku={getCacheForType:function(e){var t=ha(xa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ha(xa).controller.signal}},qu=typeof WeakMap==`function`?WeakMap:Map,Ju=0,Yu=null,Xu=null,Zu=0,Qu=0,$u=null,ed=!1,td=!1,nd=!1,rd=0,id=0,ad=0,od=0,sd=0,cd=0,ld=0,ud=null,dd=null,fd=!1,pd=0,md=0,hd=1/0,gd=null,_d=null,vd=0,yd=null,bd=null,xd=0,Sd=0,Cd=null,wd=null,Td=null,Ed=null,Dd=null,Od=0,kd=null;function Ad(){return Ju&2&&Zu!==0?Zu&-Zu:B.T===null?dt():Pf()}function jd(){if(cd===0){if(!(Zu&536870912)||Ji){var e=K;K<<=1,!(K&3932160)&&(K=262144),cd=e}else cd=536870912}return e=xo.current,e!==null&&(e.flags|=32),cd}function Md(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Ip(oi(e.memoizedProps,n))),Ed===null&&(Ed=[]),Ed.push(t.bind(null,r))}}function Nd(e,t,n){(e===Yu&&(Qu===2||Qu===9)||e.cancelPendingCommit!==null)&&(Bd(e,0),Ld(e,Zu,cd,!1)),it(e,n),Ju&2&&e===Yu||(e===Yu&&(!(Ju&2)&&(od|=n),id===4&&Ld(e,Zu,cd,!1)),Ef(e))}function Pd(e,t,n){if(Ju&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||$e(e,t),a=r?Jd(e,t):Kd(e,t,!0),o=r;do{if(a===0){td&&!r&&Ld(e,t,0,!1);break}if(n=e.current.alternate,o&&!Id(n))a=Kd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=ud;var l=c.current.memoizedState.isDehydrated;if(l&&(Bd(c,s).flags|=256),s=Kd(c,s,!1),s!==2&&s!==6){if(nd&&!l){c.errorRecoveryDisabledLanes|=o,od|=o,a=4;break a}o=dd,dd=a,o!==null&&(dd===null?dd=o:dd.push.apply(dd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Bd(e,0),Ld(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Ld(r,t,cd,!ed);break a;case 2:dd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=pd+300-Pe(),10<a)){if(Ld(r,t,cd,!ed),Qe(r,0,!0)!==0)break a;xd=t,r.timeoutHandle=vp(Fd.bind(null,r,n,dd,gd,fd,t,cd,od,ld,ed,o,`Throttled`,-0,0),a);break a}Fd(r,n,dd,gd,fd,t,cd,od,ld,ed,o,null,-0,0)}break}}while(1);Ef(e)}function Fd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},Nl=null,Bu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=ih.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?pd-Pe():(a&4194048)===a?md-Pe():0,m=nh(d,m),m!==null)?(xd=a,e.cancelPendingCommit=m(tf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Ld(e,a,o,!l)):tf(e,t,a,n,r,i,o,s,c,l,u,d)}function Id(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ld(e,t,n,r){t=et(e,t),t&=~sd,t&=~od,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ge(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ot(e,n,t)}function Rd(){return Ju&6?!0:(Df(0,!1),!1)}function zd(){if(Xu!==null){if(Qu===0)var e=Xu.return;else e=Xu,sa=oa=null,Zo(e),Ya=null,Xa=0,e=Xu;for(;e!==null;)pl(e.alternate,e),e=e.return;Xu=null}}function Bd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,yp(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),xd=0,zd(),Yu=e,Xu=n=Ci(e.current,null),Zu=t,Qu=0,$u=null,ed=!1,td=$e(e,t),nd=!1,ld=cd=sd=od=ad=id=0,dd=ud=null,fd=!1,rd=et(e,t),pi(),n}function Vd(e,t){No=null,B.H=oc,t===za||t===Va?(t=qa(),Qu=3):t===Ba?(t=qa(),Qu=4):Qu=t===wc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,$u=t,Xu===null&&(id=1,vc(e,ji(t,e.current)))}function Hd(){var e=xo.current;return e===null?!0:(Zu&4194048)===Zu?So===null:(Zu&62914560)===Zu||Zu&536870912?e===So:!1}function Ud(){var e=B.H;return B.H=oc,e===null?oc:e}function Wd(){var e=B.A;return B.A=Ku,e}function Gd(){id=4,ed||(Zu&4194048)!==Zu&&xo.current!==null||(td=!0),!(ad&134217727)&&!(od&134217727)||Yu===null||Ld(Yu,Zu,cd,!1)}function Kd(e,t,n){var r=Ju;Ju|=2;var i=Ud(),a=Wd();(Yu!==e||Zu!==t)&&(gd=null,Bd(e,t)),t=!1;var o=id;a:do try{if(Qu!==0&&Xu!==null){var s=Xu,c=$u;switch(Qu){case 8:zd(),o=6;break a;case 3:case 2:case 9:case 6:xo.current===null&&(t=!0);var l=Qu;if(Qu=0,$u=null,Qd(e,s,c,l),n&&td){o=0;break a}break;default:l=Qu,Qu=0,$u=null,Qd(e,s,c,l)}}qd(),o=id;break}catch(t){Vd(e,t)}while(1);return t&&e.shellSuspendCounter++,sa=oa=null,Ju=r,B.H=i,B.A=a,Xu===null&&(Yu=null,Zu=0,pi()),o}function qd(){for(;Xu!==null;)Xd(Xu)}function Jd(e,t){var n=Ju;Ju|=2;var r=Ud(),a=Wd();Yu!==e||Zu!==t?(gd=null,hd=Pe()+500,Bd(e,t)):td=$e(e,t);a:do try{if(Qu!==0&&Xu!==null){t=Xu;var o=$u;b:switch(Qu){case 1:Qu=0,$u=null,Qd(e,t,o,1);break;case 2:case 9:if(Ua(o)){Qu=0,$u=null,Zd(t);break}t=function(){Qu!==2&&Qu!==9||Yu!==e||(Qu=7),Ef(e)},o.then(t,t);break a;case 3:Qu=7;break a;case 4:Qu=5;break a;case 7:Ua(o)?(Qu=0,$u=null,Zd(t)):(Qu=0,$u=null,Qd(e,t,o,7));break;case 5:var s=null;switch(Xu.tag){case 26:s=Xu.memoizedState;case 5:case 27:var c=Xu;if(s?Zm(s):c.stateNode.complete){Qu=0,$u=null;var l=c.sibling;if(l!==null)Xu=l;else{var u=c.return;u===null?Xu=null:(Xu=u,$d(u))}break b}}Qu=0,$u=null,Qd(e,t,o,5);break;case 6:Qu=0,$u=null,Qd(e,t,o,6);break;case 8:zd(),id=6;break a;default:throw Error(i(462))}}Yd();break}catch(t){Vd(e,t)}while(1);return sa=oa=null,B.H=r,B.A=a,Ju=n,Xu===null?(Yu=null,Zu=0,pi(),id):0}function Yd(){for(;Xu!==null&&!Me();)Xd(Xu)}function Xd(e){var t=il(e.alternate,e,rd);e.memoizedProps=e.pendingProps,t===null?$d(e):Xu=t}function Zd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Rc(n,t,t.pendingProps,t.type,void 0,Zu);break;case 11:t=Rc(n,t,t.pendingProps,t.type.render,t.ref,Zu);break;case 5:Zo(t);var r=t;r===Ki&&(Ji?(ea(r),r.tag===5&&r.stateNode!=null&&(qi=r.stateNode)):(ea(r),Ji=!0));default:pl(n,t),t=Xu=wi(t,rd),t=il(n,t,rd)}e.memoizedProps=e.pendingProps,t===null?$d(e):Xu=t}function Qd(e,t,n,r){sa=oa=null,Zo(t),Ya=null,Xa=0;var i=t.return;try{if(Cc(e,i,t,n,Zu)){id=1,vc(e,ji(n,e.current)),Xu=null;return}}catch(t){if(i!==null)throw Xu=i,t;id=1,vc(e,ji(n,e.current)),Xu=null;return}t.flags&32768?(Ji||r===1?e=!0:td||Zu&536870912?e=!1:(ed=e=!0,(r===2||r===9||r===3||r===6)&&(r=xo.current,r!==null&&r.tag===13&&(r.flags|=16384))),ef(t,e)):$d(t)}function $d(e){var t=e;do{if(t.flags&32768){ef(t,ed);return}e=t.return;var n=dl(t.alternate,t,rd);if(n!==null){Xu=n;return}if(t=t.sibling,t!==null){Xu=t;return}Xu=t=e}while(t!==null);id===0&&(id=5)}function ef(e,t){do{var n=fl(e.alternate,e);if(n!==null){n.flags&=32767,Xu=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Xu=e;return}Xu=e=n}while(e!==null);id=6,Xu=null}function tf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do uf();while(vd!==0);if(Ju&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===Yu&&(Xu=Yu=null,Zu=0),bd=t,yd=e,xd=n,Cd=a,wd=r,nf(e,t,n,s,c,l,f)}}function nf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Sd=s,s|=fi,at(e,n,s,r,i,a),Ed=null,(n&335544064)===n?(Dd=Ea(e),r=10262):(Dd=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(Re,function(){return df(),null})):(e.callbackNode=null,e.callbackPriority=0),Ml=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=B.T,B.T=null,i=V.p,V.p=2,a=Ju,Ju|=4;try{su(e,t,n)}finally{Ju=a,V.p=i,B.T=r}}vd=1,Ml?Td=Pp(o,e.containerInfo,Dd,of,sf,af,cf,df,rf,null,null):(of(),sf(),cf())}function rf(e){if(vd!==0){var t=yd.onRecoverableError;t(e,{componentStack:null})}}function af(){vd===3&&(vd=0,Ou(bd,yd),vd=4)}function of(){if(vd===1){vd=0;var e=yd,t=bd,n=xd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=B.T,B.T=null;var i=V.p;V.p=2;var a=Ju;Ju|=4;try{iu=au=!1,wu(t,e,n),n=up;var o=Ir(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Fr(s.ownerDocument.documentElement,s)){if(c!==null&&Lr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Pr(s,h),v=Pr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}vh=!!lp,up=lp=null}finally{Ju=a,V.p=i,B.T=r}}e.current=t,vd=2}}function sf(){if(vd===2){vd=0;var e=yd,t=bd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=B.T,B.T=null;var r=V.p;V.p=2;var i=Ju;Ju|=4;try{lu(e,t.alternate,t)}finally{Ju=i,V.p=r,B.T=n}}vd=3}}function cf(){if(vd===4||vd===3){vd=0;var e=Td;Td=null,Ne();var t=yd,n=bd,r=xd,i=wd,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?vd=5:(vd=0,bd=yd=null,lf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(_d=null),ut(r),n=n.stateNode,We&&typeof We.onCommitFiberRoot==`function`)try{We.onCommitFiberRoot(Ue,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=B.T,a=V.p,V.p=2,B.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{B.T=n,V.p=a}}if(i=Ed,o=Dd,Dd=null,i!==null&&(Ed=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);xd&3&&uf(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===kd?Od++:(Od=0,kd=t):(Od=0,kd=null),Df(0,!1)}}function lf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ca(t)))}function uf(){return Td!==null&&(Td.skipTransition(),Td=null),of(),sf(),cf(),df()}function df(){if(vd!==5)return!1;var e=yd,t=Sd;Sd=0;var n=ut(xd),r=B.T,a=V.p;try{V.p=32>n?32:n,B.T=null,n=Cd,Cd=null;var o=yd,s=xd;if(vd=0,bd=yd=null,xd=0,Ju&6)throw Error(i(331));var c=Ju;if(Ju|=4,Uu(o.current),Fu(o,o.current,s,n),Ju=c,Df(0,!1),We&&typeof We.onPostCommitFiberRoot==`function`)try{We.onPostCommitFiberRoot(Ue,o)}catch{}return!0}finally{V.p=a,B.T=r,lf(e,t)}}function ff(e,t,n){t=ji(n,t),t=bc(e.stateNode,t,2),e=so(e,t,2),e!==null&&(it(e,2),Ef(e))}function pf(e,t,n){if(e.tag===3)ff(e,e,n);else for(;t!==null;){if(t.tag===3){ff(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(_d===null||!_d.has(r))){e=ji(n,e),n=xc(2),r=so(t,n,2),r!==null&&(Sc(n,r,t,e),it(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qu;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(nd=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Yu===e&&(Zu&n)===n&&(id===4||id===3&&(Zu&62914560)===Zu&&300>Pe()-pd?Ju&2?sd|=n:Bd(e,0):sd|=n,ld===Zu&&(ld=0)),Ef(e)}function gf(e,t){t===0&&(t=nt()),e=gi(e,t),e!==null&&(it(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Ae(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ge(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=Zu,a=Qe(r,r===Yu?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||$e(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&_p()&&(e=Tf);for(var t=Pe(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}vd!==0&&vd!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ge(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=tt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Yu,n=Zu,n=Qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Qu===2||Qu===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||$e(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),ut(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=jf.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(vd!==0&&vd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(uf()&&e.callbackNode!==n)return null;var r=Zu;return r=Qe(e,e===Yu?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Pd(e,r,t),Af(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(uf())return null;Pd(e,t,!0)}function Nf(){Sp(function(){Ju&6?Ae(Ie,Of):kf()})}function Pf(){if(Tf===0){var e=ka;e===0&&(e=Ye,Ye<<=1,!(Ye&261888)&&(Ye=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:ln(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[ht]||null).action),o=r.submitter;o&&(t=(t=o[ht]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);Ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),Ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<ri.length;Lf++){var Rf=ri[Lf];ii(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}ii(Yr,`onAnimationEnd`),ii(Xr,`onAnimationIteration`),ii(Zr,`onAnimationStart`),ii(`dblclick`,`onDoubleClick`),ii(`focusin`,`onFocus`),ii(`focusout`,`onBlur`),ii(Qr,`onTransitionRun`),ii($r,`onTransitionStart`),ii(ei,`onTransitionCancel`),ii(ti,`onTransitionEnd`),Mt(`onMouseEnter`,[`mouseout`,`mouseover`]),Mt(`onMouseLeave`,[`mouseout`,`mouseover`]),Mt(`onPointerEnter`,[`pointerout`,`pointerover`]),Mt(`onPointerLeave`,[`pointerout`,`pointerover`]),jt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),jt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),jt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),jt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),jt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){li(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){li(e)}i.currentTarget=null,a=c}}}}function Hf(e,t){var n=t[_t];n===void 0&&(n=t[_t]=new Set);var r=e+`__bubble`;n.has(r)||(Kf(t,e,2,!1),n.add(r))}function Uf(e,t,n){var r=0;t&&(r|=4),Kf(n,e,r,t)}var Wf=`_reactListening`+Math.random().toString(36).slice(2);function Gf(e){if(!e[Wf]){e[Wf]=!0,kt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Uf(t,!1,e),Uf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wf]||(t[Wf]=!0,Uf(`selectionchange`,!1,t))}}function Kf(e,t,n,r){switch(Th(t)){case 2:var i=yh;break;case 8:i=bh;break;default:i=xh}n=i.bind(null,t,n,e),i=void 0,!bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function qf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=wt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}_n(function(){var r=a,i=fn(n),s=[];a:{var c=ni.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(En(n)===0)break a;case`keydown`:case`keyup`:l=Kn;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Yn;break;case Yr:case Xr:case Zr:l=Bn;break;case ti:l=Xn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Zn;break;case`copy`:case`cut`:case`paste`:l=Y;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=qn;break;case`submit`:l=Jn;break;case`toggle`:case`beforetoggle`:l=Qn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=vn(m,p),g!=null&&d.push(Jf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==dn&&(u=n.relatedTarget||n.fromElement)&&(wt(u)||u[gt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?wt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Et(c),h=l==null?u:Et(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,wt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?E(c,l,Xf):null,c!==null&&Zf(s,u,c,d,!1),l!==null&&f!==null&&Zf(s,f,l,d,!0)))}a:{if(c=r?Et(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=vr;else if(fr(c)){if(yr)_=Or;else{_=Er;var v=Tr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&on(r.elementType)&&(_=vr):_=Dr;if(_&&=_(e,r)){pr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Et(r):window,e){case`focusin`:(fr(v)||v.contentEditable===`true`)&&(zr=v,Br=r,Vr=null);break;case`focusout`:Vr=Br=zr=null;break;case`mousedown`:Hr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Hr=!1,Ur(s,n,i);break;case`selectionchange`:if(Rr)break;case`keydown`:case`keyup`:Ur(s,n,i)}var y;if(er)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else cr?or(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(rr&&n.locale!==`ko`&&(cr||b!==`onCompositionStart`?b===`onCompositionEnd`&&cr&&(y=Tn()):(Sn=i,Cn=`value`in Sn?Sn.value:Sn.textContent,cr=!0)),v=Yf(r,b),0<v.length&&(b=new Vn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=sr(n),y!==null&&(b.data=y)))),(y=nr?lr(e,n):ur(e,n))&&(b=Yf(r,`onBeforeInput`),0<b.length&&(v=new Vn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),If(s,e,r,n,i)}Vf(s,t)})}function Jf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=vn(e,n),i!=null&&r.unshift(Jf(e,i,a)),i=vn(e,t),i!=null&&r.push(Jf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Xf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=vn(n,a),l!=null&&o.unshift(Jf(n,l,c))):i||(l=vn(n,a),l!=null&&o.push(Jf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Qf=/\r\n?/g,$f=/\u0000|\uFFFD/g;function ep(e){return(typeof e==`string`?e:``+e).replace(Qf,`
`).replace($f,``)}function tp(e,t){return t=ep(t),ep(e)===t}function np(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||tn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&tn(e,``+r);else return;break;case`className`:Bt(e,`class`,r);break;case`tabIndex`:Bt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Bt(e,n,r);break;case`style`:an(e,r,o);return;case`data`:if(t!==`object`){Bt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&np(e,t,`name`,a.name,a,null),np(e,t,`formEncType`,a.formEncType,a,null),np(e,t,`formMethod`,a.formMethod,a,null),np(e,t,`formTarget`,a.formTarget,a,null)):(np(e,t,`encType`,a.encType,a,null),np(e,t,`method`,a.method,a,null),np(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=un);return;case`onScroll`:r!=null&&Hf(`scroll`,e);return;case`onScrollEnd`:r!=null&&Hf(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=ln(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Hf(`beforetoggle`,e),Hf(`toggle`,e),zt(e,`popover`,r);break;case`xlinkActuate`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Vt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Vt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:zt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=sn.get(n)||n,zt(e,n,r);else return}Lt=!0}function rp(e,t,n,r,a,o){switch(n){case`style`:an(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)tn(e,r);else if(typeof r==`number`||typeof r==`bigint`)tn(e,``+r);else return;break;case`onScroll`:r!=null&&Hf(`scroll`,e);return;case`onScrollEnd`:r!=null&&Hf(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=un);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!At.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[ht]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}Lt=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):zt(e,n,r)}return}Lt=!0}function ip(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Hf(`error`,e),Hf(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:np(e,t,o,s,n,null)}}a&&np(e,t,`srcSet`,n.srcSet,n,null),r&&np(e,t,`src`,n.src,n,null);return;case`input`:Hf(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:np(e,t,r,d,n,null)}}Xt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Hf(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:np(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(s in Hf(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:np(e,t,s,c,n,null)}en(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:np(e,t,l,r,n,null)}return;case`dialog`:Hf(`beforetoggle`,e),Hf(`toggle`,e),Hf(`cancel`,e),Hf(`close`,e);break;case`iframe`:case`object`:Hf(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Hf(zf[r],e);break;case`image`:Hf(`error`,e),Hf(`load`,e);break;case`details`:Hf(`toggle`,e);break;case`embed`:case`source`:case`link`:Hf(`error`,e),Hf(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:np(e,t,u,r,n,null)}return;default:if(on(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&rp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&np(e,t,c,r,n,null))}var ap={};function op(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||np(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(Lt=!0),o=m;break;case`name`:m!==f&&(Lt=!0),a=m;break;case`checked`:m!==f&&(Lt=!0),u=m;break;case`defaultChecked`:m!==f&&(Lt=!0),d=m;break;case`value`:m!==f&&(Lt=!0),s=m;break;case`defaultValue`:m!==f&&(Lt=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&np(e,t,p,m,r,f)}}Yt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||np(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(Lt=!0),p=o;break;case`defaultValue`:o!==l&&(Lt=!0),c=o;break;case`multiple`:o!==l&&(Lt=!0),s=o;default:o!==l&&np(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:np(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(Lt=!0),p=a;break;case`defaultValue`:a!==o&&(Lt=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&np(e,t,s,a,r,o)}$t(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:np(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(Lt=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:np(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&np(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:np(e,t,u,p,r,m)}return;default:if(on(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&rp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||rp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&np(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||np(e,t,f,p,r,m)}function sp(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function cp(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&sp(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&sp(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var lp=null,up=null;function dp(e){return e.nodeType===9?e:e.ownerDocument}function fp(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function pp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function mp(e,t,n,r){return n=dp(n).createElement(e),n[mt]=r,n[ht]=t,ip(n,e,t),q(n),n}function hp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gp=null;function _p(){var e=window.event;return e&&e.type===`popstate`?e!==gp&&(gp=e,!0):(gp=null,!1)}var vp=typeof setTimeout==`function`?setTimeout:void 0,yp=typeof clearTimeout==`function`?clearTimeout:void 0,bp=typeof Promise==`function`?Promise:void 0,xp=typeof requestAnimationFrame==`function`?requestAnimationFrame:vp,Sp=typeof queueMicrotask==`function`?queueMicrotask:bp===void 0?vp:function(e){return bp.resolve(null).then(e).catch(Cp)};function Cp(e){setTimeout(function(){throw e})}function wp(e){return e===`head`}function Tp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Wh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)ym(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,ym(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[xt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&ym(e.ownerDocument.body)}n=i}while(n);Wh(t)}function Ep(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Dp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Op(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function kp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Ap(e){return kp(e.getBoundingClientRect(),getComputedStyle(e),e)}function jp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return kp(t,n,e)}function Mp(e){return e.documentElement.clientHeight}function Np(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Pp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Mp(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Qm(f),u>th){s.length=o;break}f=new Promise(Np.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Fp(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Fp.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:D({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Fp.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Fp.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Ip(e){return{name:e,group:new Fp(`group`,e),imagePair:new Fp(`image-pair`,e),old:new Fp(`old`,e),new:new Fp(`new`,e)}}function Lp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Lp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Hp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Bp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Rp,e,s,r)}this._eventListeners=a}};function Rp(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Lp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Hp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Bp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,zp,e,n,i),r.splice(t,1),a!==null&&a()}};function zp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Bp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Vp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Hp(e,t,n,r){if(e.length===0)return-1;r=Vp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&Vp(a.optionsOrUseCapture)===r)return i}return-1}Lp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Bp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Bp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Lp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Up,e,void 0,void 0)};function Up(e,t){return e.tag!==6&&(e=b(e),hm(e,t))}Lp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Wp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Up(t[n],e);n--);};function Wp(e,t){return t.push(e),!1}Lp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=dp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0))};function Gp(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Lp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Kp,e,void 0,void 0)};function Kp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Lp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,qp,e,void 0,void 0);for(var n=t=0;n<Jp.length;n++){var r=Jp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Jp[t++]=r}Jp.length=t}};function qp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Jp=[],Yp=!1;function Xp(e,t,n){Jp.push({fragmentInstance:e,observer:t,instance:n}),Yp||(Yp=!0,gm(function(){Yp=!1;var e=Jp;Jp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Lp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Zp,e,void 0,void 0),e};function Zp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Lp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Lp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Wp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Qp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Qp(e,t,n,r,i){var a=wt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=E(n,a,T),t===null?t=!1:(h(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=E(r,a,T),t===null?t=!1:(h(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function $p(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Lp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Wp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),$p(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),$p(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function em(e,t){return e=b(e),tm(e,t),!1}function tm(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function nm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Bp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Jp.length;i++){var a=Jp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Jp[r++]=a)}Jp.length=r,n.observe(e)}),tm(e,t))}function rm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Bp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Xp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function im(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:im(n),Ct(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function am(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[xt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=dm(e.nextSibling),e===null)break}return null}function om(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=dm(e.nextSibling),e===null))return null;return e}function sm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=dm(e.nextSibling),e===null))return null;return e}function cm(e){return e.data===`$?`||e.data===`$~`}function lm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function um(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function dm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var fm=null;function pm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return dm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function mm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function hm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function gm(e){xp(function(){xp(function(t){return e(t)})})}function _m(e,t,n){switch(t=dp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function vm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&np(e,t,r,null,ap,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===un&&(e.onclick=null),Ct(e)}function ym(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ct(e)}var bm=new Map,xm=new Set;function Sm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Cm=V.d;V.d={f:wm,r:Tm,D:Om,C:km,L:Am,m:jm,X:Nm,S:Mm,M:Pm};function wm(){var e=Cm.f(),t=Rd();return e||t}function Tm(e){var t=Tt(e);t!==null&&t.tag===5&&t.type===`form`?Js(t):Cm.r(e)}var Em=typeof document>`u`?null:document;function Dm(e,t,n){var r=Em;if(r&&typeof t==`string`&&t){var i=Jt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),xm.has(i)||(xm.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),ip(t,`link`,e),q(t),r.head.appendChild(t)))}}function Om(e){Cm.D(e),Dm(`dns-prefetch`,e,null)}function km(e,t){Cm.C(e,t),Dm(`preconnect`,e,t)}function Am(e,t,n){Cm.L(e,t,n);var r=Em;if(r&&e&&t){var i=`link[rel="preload"][as="`+Jt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Jt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Jt(n.imageSizes)+`"]`)):i+=`[href="`+Jt(e)+`"]`;var a=i;switch(t){case`style`:a=Im(e);break;case`script`:a=Bm(e)}if(!(bm.has(a)||(e=D({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),bm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Lm(a))||t===`script`&&r.querySelector(Vm(a))))){var o=r.createElement(`link`);ip(o,`link`,e),t===`style`&&(o[St]=!0,o.onload=o.onerror=function(){Ot(o)}),q(o),r.head.appendChild(o)}}}function jm(e,t){Cm.m(e,t);var n=Em;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Jt(r)+`"][href="`+Jt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Bm(e)}if(!bm.has(a)&&(e=D({rel:`modulepreload`,href:e},t),bm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Vm(a)))return}r=n.createElement(`link`),ip(r,`link`,e),q(r),n.head.appendChild(r)}}}function Mm(e,t,n){Cm.S(e,t,n);var r=Em;if(r&&e){var i=Dt(r).hoistableStyles,a=Im(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Lm(a)))s.loading=5;else{e=D({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=bm.get(a))&&Wm(e,n);var c=o=r.createElement(`link`);q(c),ip(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Um(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Nm(e,t){Cm.X(e,t);var n=Em;if(n&&e){var r=Dt(n).hoistableScripts,i=Bm(e),a=r.get(i);a||(a=n.querySelector(Vm(i)),a||(e=D({src:e,async:!0},t),(t=bm.get(i))&&Gm(e,t),a=n.createElement(`script`),q(a),ip(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Pm(e,t){Cm.M(e,t);var n=Em;if(n&&e){var r=Dt(n).hoistableScripts,i=Bm(e),a=r.get(i);a||(a=n.querySelector(Vm(i)),a||(e=D({src:e,async:!0,type:`module`},t),(t=bm.get(i))&&Gm(e,t),a=n.createElement(`script`),q(a),ip(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Fm(e,t,n,r){var a=(a=_e.current)?Sm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Im(n.href),t=Dt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Im(n.href);var o=Dt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Lm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=bm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},bm.set(e,o)),zm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Bm(n),t=Dt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Im(e){return`href="`+Jt(e)+`"`}function Lm(e){return`link[rel="stylesheet"][`+e+`]`}function Rm(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function zm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[St]){r.loading=1;return}}else t=e.createElement(`link`),t[St]=!0,t.onload=t.onerror=Ot.bind(null,t),ip(t,`link`,n),q(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Bm(e){return`[src="`+Jt(e)+`"]`}function Vm(e){return`script[async]`+e}function Hm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Jt(n.href)+`"]`);if(r)return t.instance=r,q(r),r;var a=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),q(r),ip(r,`style`,a),Um(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Im(n.href);var o=e.querySelector(Lm(a));if(o)return t.state.loading|=4,t.instance=o,q(o),o;r=Rm(n),(a=bm.get(a))&&Wm(r,a),o=(e.ownerDocument||e).createElement(`link`),q(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),ip(o,`link`,r),t.state.loading|=4,Um(o,n.precedence,e),t.instance=o;case`script`:return o=Bm(n.src),(a=e.querySelector(Vm(o)))?(t.instance=a,q(a),a):(r=n,(a=bm.get(o))&&(r=D({},n),Gm(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),q(a),ip(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Um(r,n.precedence,e));return t.instance}function Um(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Wm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Gm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Km=null;function qm(e,t,n){if(Km===null){var r=new Map,i=Km=new Map;i.set(n,r)}else i=Km,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[xt]||a[mt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Jm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Ym(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Xm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Zm(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Qm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function $m(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Qm(t),e.suspenseyImages.push(t)),e=ah.bind(e),t.decode().then(e,e))}function eh(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Im(r.href),a=t.querySelector(Lm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=ih.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,q(a);return}a=t.ownerDocument||t,r=Rm(r),(i=bm.get(i))&&Wm(r,i),a=a.createElement(`link`),q(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),ip(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=ih.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var th=0;function nh(e,t){return e.stylesheets&&e.count===0&&sh(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&sh(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&th===0&&(th=62500*cp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&sh(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>th?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function rh(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)sh(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function ih(){this.count--,rh(this)}function ah(){this.imgCount--,rh(this)}var oh=null;function sh(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oh=new Map,t.forEach(ch,e),oh=null,ih.call(e))}function ch(e,t){if(!(t.state.loading&4)){var n=oh.get(e);if(n)var r=n.get(null);else{n=new Map,oh.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=ih.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var lh={$$typeof:M,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function uh(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rt(0),this.hiddenUpdates=rt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function dh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new uh(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=xi(3,null,null,t),e.current=a,a.stateNode=e,t=Sa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},io(a),e}function fh(e){return e?(e=yi,e):yi}function ph(e,t,n,r,i,a){i=fh(i),r.context===null?r.context=i:r.pendingContext=i,r=oo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=so(e,r,t),n!==null&&(Nd(n,e,t),co(n,e,t))}function mh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hh(e,t){mh(e,t),(e=e.alternate)&&mh(e,t)}function gh(e){if(e.tag===13||e.tag===31){var t=gi(e,67108864);t!==null&&Nd(t,e,67108864),hh(e,67108864)}}function _h(e){if(e.tag===13||e.tag===31){var t=Ad();t=lt(t);var n=gi(e,t);n!==null&&Nd(n,e,t),hh(e,t)}}var vh=!0;function yh(e,t,n,r){var i=B.T;B.T=null;var a=V.p;try{V.p=2,xh(e,t,n,r)}finally{V.p=a,B.T=i}}function bh(e,t,n,r){var i=B.T;B.T=null;var a=V.p;try{V.p=8,xh(e,t,n,r)}finally{V.p=a,B.T=i}}function xh(e,t,n,r){if(vh){var i=Sh(r);if(i===null)qf(e,t,r,Ch,n),Ph(e,r);else if(Ih(i,e,t,n,r))r.stopPropagation();else if(Ph(e,r),t&4&&-1<Nh.indexOf(e)){for(;i!==null;){var a=Tt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ze(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ge(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(Ju&6)&&(hd=Pe()+500,Df(0,!1))}}break;case 31:case 13:s=gi(a,2),s!==null&&Nd(s,a,2),Rd(),hh(a,2)}if(a=Sh(r),a===null&&qf(e,t,r,Ch,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else qf(e,t,r,null,n)}}function Sh(e){return e=fn(e),wh(e)}var Ch=null;function wh(e){if(Ch=null,e=wt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ch=e,null}function Th(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var Eh=!1,Dh=null,Oh=null,kh=null,Ah=new Map,jh=new Map,Mh=[],Nh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Ph(e,t){switch(e){case`focusin`:case`focusout`:Dh=null;break;case`dragenter`:case`dragleave`:Oh=null;break;case`mouseover`:case`mouseout`:kh=null;break;case`pointerover`:case`pointerout`:Ah.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:jh.delete(t.pointerId)}}function Fh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Tt(t),t!==null&&gh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ih(e,t,n,r,i){switch(t){case`focusin`:return Dh=Fh(Dh,e,t,n,r,i),!0;case`dragenter`:return Oh=Fh(Oh,e,t,n,r,i),!0;case`mouseover`:return kh=Fh(kh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Ah.set(a,Fh(Ah.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,jh.set(a,Fh(jh.get(a)||null,e,t,n,r,i)),!0}return!1}function Lh(e){var t=wt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ft(e.priority,function(){_h(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ft(e.priority,function(){_h(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rh(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Sh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dn=r,n.target.dispatchEvent(r),dn=null}else return t=Tt(n),t!==null&&gh(t),e.blockedOn=n,!1;t.shift()}return!0}function zh(e,t,n){Rh(e)&&n.delete(t)}function Bh(){Eh=!1,Dh!==null&&Rh(Dh)&&(Dh=null),Oh!==null&&Rh(Oh)&&(Oh=null),kh!==null&&Rh(kh)&&(kh=null),Ah.forEach(zh),jh.forEach(zh)}function Vh(e,n){e.blockedOn===n&&(e.blockedOn=null,Eh||(Eh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Bh)))}var Hh=null;function Uh(e){Hh!==e&&(Hh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Hh===e&&(Hh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(wh(r||n)===null)continue;break}var a=Tt(n);a!==null&&(e.splice(t,3),t-=3,Ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Wh(e){function t(t){return Vh(t,e)}Dh!==null&&Vh(Dh,e),Oh!==null&&Vh(Oh,e),kh!==null&&Vh(kh,e),Ah.forEach(t),jh.forEach(t);for(var n=0;n<Mh.length;n++){var r=Mh[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Mh.length&&(n=Mh[0],n.blockedOn===null);)Lh(n),n.blockedOn===null&&Mh.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ht]||null;if(typeof a==`function`)o||Uh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ht]||null)s=o.formAction;else if(wh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Uh(n)}}}function Gh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Kh(e){this._internalRoot=e}qh.prototype.render=Kh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;ph(n,Ad(),e,t,null,null)},qh.prototype.unmount=Kh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ph(e.current,2,null,e,null,null),Rd(),t[gt]=null}};function qh(e){this._internalRoot=e}qh.prototype.unstable_scheduleHydration=function(e){if(e){var t=dt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mh.length&&t!==0&&t<Mh[n].priority;n++);Mh.splice(n,0,e),n===0&&Lh(e)}};var Jh=n.version;if(Jh!==`19.3.1`)throw Error(i(527,Jh,`19.3.1`));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Yh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:B,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Xh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xh.isDisabled&&Xh.supportsFiber)try{Ue=Xh.inject(Yh),We=Xh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=hc,s=gc,c=_c;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=dh(e,1,!1,null,null,n,r,null,o,s,c,Gh),e[gt]=t.current,Gf(e),new Kh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u()),v=g(),y=`-ms-`,b=`-moz-`,x=`-webkit-`,S=`comm`,C=`rule`,w=`decl`,T=`@import`,E=`@namespace`,D=`@keyframes`,O=`@layer`,ee=Math.abs,te=String.fromCharCode,ne=Object.assign;function k(e,t){return P(e,0)^45?(((t<<2^P(e,0))<<2^P(e,1))<<2^P(e,2))<<2^P(e,3):0}function A(e){return e.trim()}function j(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function N(e,t,n){return e.indexOf(t,n)}function P(e,t){return e.charCodeAt(t)|0}function F(e,t,n){return e.slice(t,n)}function I(e){return e.length}function L(e){return e.length}function R(e,t){return t.push(e),e}function re(e,t){return e.map(t).join(``)}function ie(e,t){return e.filter(function(e){return!j(e,t)})}var z=1,ae=1,oe=0,se=0,ce=0,le=``;function ue(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:z,column:ae,length:o,return:``,siblings:s}}function B(e,t){return ne(ue(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function V(e){for(;e.root;)e=B(e.root,{children:[e]});R(e,e.siblings)}function de(){return ce}function fe(){return ce=se>0?P(le,--se):0,ae--,ce===10&&(ae=1,z--),ce}function pe(){return ce=se<oe?P(le,se++):0,ae++,ce===10&&(ae=1,z++),ce}function H(){return P(le,se)}function U(){return se}function me(e,t){return F(le,e,t)}function he(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ge(e){return z=ae=1,oe=I(le=e),se=0,[]}function _e(e){return le=``,e}function ve(e){return A(me(se-1,xe(e===91?e+2:e===40?e+1:e)))}function ye(e){for(;(ce=H())&&ce<33;)pe();return he(e)>2||he(ce)>3?``:` `}function be(e,t){for(;--t&&pe()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return me(e,U()+(t<6&&H()==32&&pe()==32))}function xe(e){for(;pe();)switch(ce){case e:return se;case 34:case 39:e!==34&&e!==39&&xe(ce);break;case 40:e===41&&xe(e);break;case 92:pe()}return se}function Se(e,t){for(;pe()&&e+ce!==57&&(e+ce!==84||H()!==47););return`/*`+me(t,se-1)+`*`+te(e===47?e:pe())}function Ce(e){for(;!he(H());)pe();return me(e,se)}function we(e){return _e(W(``,null,null,null,[``],e=ge(e),0,[0],e))}function W(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=pe()){case 40:if(m!=108&&P(C,d-1)==58){N(C+=M(ve(v),`&`,`&\f`),`&\f`,ee(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=ve(v);break;case 9:case 10:case 13:case 32:C+=ye(m);break;case 92:C+=be(U()-1,7);continue;case 47:switch(H()){case 42:case 47:R(Ee(Se(pe(),U()),t,n,c),c),(he(m||1)==5||he(H()||1)==5)&&I(C)&&F(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=I(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=M(C,/\f/g,``)),p>0&&(I(C)-d||h===0&&m===47)&&R(p>32?De(C+`;`,r,n,d-1,c):De(M(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(R(S=Te(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123){if(u===0)W(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(P(C,3)===110)break;case 108:if(P(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?W(e,S,S,r&&R(Te(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):W(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+I(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&fe()==125)continue}switch(C+=te(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(I(C)-1)*_,_=1;break;case 64:H()===45&&(C+=ve(pe())),f=H(),u=d=I(y=C+=Ce(U())),v++;break;case 45:m===45&&I(C)==2&&(h=0)}}return a}function Te(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=L(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=F(e,f+1,f=ee(g=o[h])),b=e;v<m;++v)(b=A(g>0?p[v]+` `+y:M(y,/&\f/g,p[v])))&&(c[_++]=b);return ue(e,t,n,i===0?C:s,c,l,u,d)}function Ee(e,t,n,r){return ue(e,t,n,S,te(de()),F(e,2,-2),0,r)}function De(e,t,n,r,i){return ue(e,t,n,w,F(e,0,r),F(e,r+1,-1),r,i)}function Oe(e,t,n){switch(k(e,t)){case 5103:return x+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return x+e+e;case 4855:return x+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return b+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return x+e+b+e+y+e+e;case 5936:switch(P(e,t+11)){case 114:return x+e+y+M(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return x+e+y+M(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return x+e+y+M(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return x+e+y+e+e;case 6165:return x+e+y+`flex-`+e+e;case 5187:return x+e+M(e,/(\w+).+(:[^]+)/,x+`box-$1$2`+y+`flex-$1$2`)+e;case 5443:return x+e+y+`flex-item-`+M(e,/flex-|-self/g,``)+(j(e,/flex-|baseline/)?``:y+`grid-row-`+M(e,/flex-|-self/g,``))+e;case 4675:return x+e+y+`flex-line-pack`+M(e,/align-content|flex-|-self/g,``)+e;case 5548:return x+e+y+M(e,`shrink`,`negative`)+e;case 5292:return x+e+y+M(e,`basis`,`preferred-size`)+e;case 6060:return x+`box-`+M(e,`-grow`,``)+x+e+y+M(e,`grow`,`positive`)+e;case 4554:return x+M(e,/([^-])(transform)/g,`$1`+x+`$2`)+e;case 6187:return M(M(M(e,/(zoom-|grab)/,x+`$1`),/(image-set)/,x+`$1`),e,``)+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,x+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,x+`box-pack:$3`+y+`flex-pack:$3`),/space-between/,`justify`)+x+e+e;case 4200:if(!j(e,/flex-|baseline/))return y+`grid-column-align`+F(e,t)+e;break;case 2592:case 3360:return y+M(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,j(e.props,/grid-\w+-end/)})?~N(e+(n=n[t].value),`span`,0)?e:y+M(e,`-start`,``)+e+y+`grid-row-span:`+(~N(n,`span`,0)?j(n,/\d+/):+j(n,/\d+/)-j(e,/\d+/))+`;`:y+M(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return j(e.props,/grid-\w+-start/)})?e:y+M(M(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,x+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(I(e)-1-t>6)switch(P(e,t+1)){case 109:if(P(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,`$1`+x+`$2-$3$1`+b+(P(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~N(e,`stretch`,0)?Oe(M(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return y+n+`:`+r+s+(i?y+n+`-span:`+(a?o:+o-r)+s:``)+e});case 4949:if(P(e,t+6)===121)return M(e,`:`,`:`+x)+e;break;case 6444:switch(P(e,P(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+x+(P(e,14)===45?`inline-`:``)+`box$3$1`+x+`$2$3$1`+y+`$2box$3`)+e;case 100:return M(e,`:`,`:`+y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,`scroll-`,`scroll-snap-`)+e}return e}function ke(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Ae(e,t,n,r){switch(e.type){case O:if(e.children.length)break;case T:case E:case w:return e.return=e.return||e.value;case S:return``;case D:return e.return=e.value+`{`+ke(e.children,r)+`}`;case C:if(!I(e.value=e.props.join(`,`)))return``}return I(n=ke(e.children,r))?e.return=e.value+`{`+n+`}`:``}function je(e){var t=L(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Me(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ne(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case w:e.return=Oe(e.value,e.length,n);return;case D:return ke([B(e,{value:M(e.value,`@`,`@`+x)})],r);case C:if(e.length)return re(n=e.props,function(t){switch(j(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:V(B(e,{props:[M(t,/:(read-\w+)/,`:`+b+`$1`)]})),V(B(e,{props:[t]})),ne(e,{props:ie(n,r)});break;case`::placeholder`:V(B(e,{props:[M(t,/:(plac\w+)/,`:`+x+`input-$1`)]})),V(B(e,{props:[M(t,/:(plac\w+)/,`:`+b+`$1`)]})),V(B(e,{props:[M(t,/:(plac\w+)/,y+`input-$1`)]})),V(B(e,{props:[t]})),ne(e,{props:ie(n,r)})}return``})}}function Pe(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Fe=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Ie=`active`,Le=`data-styled-version`,Re=`6.6.0`,ze=`/*!sc*/
`,Be=typeof window<`u`&&typeof document<`u`;if(!_.createContext)throw Pe(19);function Ve(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var He=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:Ve(`REACT_APP_SC_DISABLE_SPEEDY`)??Ve(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),Ue=`sc-keyframes-`,We=new Map,G=new Map,Ge=1,Ke=e=>{if(We.has(e))return We.get(e);for(;G.has(Ge);)Ge++;let t=Ge++;return We.set(e,t),G.set(t,e),t},qe=e=>G.get(e),Je=(e,t)=>{Ge=t+1,We.set(e,t),G.set(t,e)},Ye=Object.freeze([]),K=Object.freeze({});function Xe(e,t,n=K){return e.theme!==n.theme&&e.theme||t||n.theme}var Ze=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Qe=/(^-|-$)/g;function $e(e){return e.replace(Ze,`-`).replace(Qe,``)}var et=/(a)(d)/gi,tt=e=>String.fromCharCode(e+(e>25?39:97));function nt(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=tt(t%52)+n;return(tt(t%52)+n).replace(et,`$1-$2`)}var rt=5381,it=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},at=e=>it(rt,e);function ot(e){return nt(at(e)>>>0)}function st(e){return e.displayName||e.name||`Component`}function ct(e){return typeof e==`string`&&!0}function lt(e){return ct(e)?`styled.${e}`:`Styled(${st(e)})`}var ut=Symbol.for(`react.memo`),dt=Symbol.for(`react.forward_ref`),ft={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},pt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ht={[dt]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[ut]:mt};function gt(e){return(`type`in(t=e)&&t.type.$$typeof)===ut?mt:`$$typeof`in e?ht[e.$$typeof]:ft;var t}var _t=Object.defineProperty,vt=Object.getOwnPropertyNames,yt=Object.getOwnPropertySymbols,bt=Object.getOwnPropertyDescriptor,xt=Object.getPrototypeOf,St=Object.prototype;function Ct(e,t,n){if(typeof t!=`string`){let r=xt(t);r&&r!==St&&Ct(e,r,n);let i=vt(t).concat(yt(t)),a=gt(e),o=gt(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in pt||n&&n[s]||o&&s in o||a&&s in a)){let n=bt(t,s);try{_t(e,s,n)}catch{}}}}return e}function wt(e){return typeof e==`function`}var Tt=Symbol.for(`react.forward_ref`);function Et(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===Tt&&`styledComponentId`in e}function Dt(e,t){return e&&t?e+` `+t:e||t||``}function q(e,t){return e.join(t||``)}function Ot(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function kt(e,t,n=!1){if(!n&&!Ot(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=kt(e[n],t[n]);else if(Ot(t))for(let n in t)e[n]=kt(e[n],t[n]);return e}function At(e,t){Object.defineProperty(e,"toString",{value:t})}var jt=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw Pe(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+ze;return t}},Mt=`style[${Fe}][${Le}="${Re}"]`,Nt=RegExp(`^${Fe}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Pt=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,Ft=e=>{if(!e)return document;if(Pt(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(Pt(t))return t}return document},It=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},Lt=(e,t)=>{let n=(t.textContent??``).split(ze),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(Nt);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(Je(n,t),It(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},Rt=e=>{let t=Ft(e.options.target).querySelectorAll(Mt);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(Fe)!==Ie&&(Lt(e,r),r.parentNode&&r.parentNode.removeChild(r))}},zt=!1;function Bt(){if(!1!==zt)return zt;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return zt=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return zt=t.getAttribute(`content`)||void 0}return zt=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var Vt=(e,t)=>{if(typeof document>`u`)throw Pe(20);let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${Fe}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(Fe,Ie),i.setAttribute(Le,Re);let s=t||Bt();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},Ht=class{constructor(e,t){this.element=Vt(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw Pe(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},Ut=class{constructor(e,t){this.element=Vt(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},Wt=Be,Gt={isServer:!Be,useCSSOMInjection:!He},Kt=class e{static registerId(e){return Ke(e)}constructor(e=K,t={},n){this.options=Object.assign(Object.assign({},Gt),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Be&&Wt&&(Wt=!1,Rt(this)),At(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=qe(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=Fe+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&Be&&Rt(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Be&&t.target!==this.options.target&&Ft(this.options.target)!==Ft(t.target)&&Rt(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new Ht(t,n):new Ut(t,n))(this.options),new jt(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){Ke(e),e.startsWith(Ue)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(Ke(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(Ke(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},qt=new WeakSet,Jt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Yt(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in Jt||e.startsWith(`--`)?String(t).trim():t+`px`}var Xt=47;function Zt(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var Qt=Symbol.for(`sc-keyframes`);function $t(e){return typeof e==`object`&&!!e&&Qt in e}function en(e){return wt(e)&&!(e.prototype&&e.prototype.isReactComponent)}var tn=e=>e==null||!1===e||e===``,nn=Symbol.for(`react.client.reference`);function rn(e){return e.$$typeof===nn}function an(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!tn(r)&&(Array.isArray(r)&&qt.has(r)||wt(r)?t.push(Zt(n)+`:`,r,`;`):Ot(r)?(t.push(n+` {`),an(r,t),t.push(`}`)):t.push(Zt(n)+`: `+Yt(n,r)+`;`))}}function on(e,t,n,r,i=[]){if(tn(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return rn(e)?i:en(e)&&t?on(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)on(e[a],t,n,r,i);return i}return Et(e)?(i.push(`.${e.styledComponentId}`),i):$t(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):rn(e)?i:Ot(e)&&e.toString===Object.prototype.toString?(an(e,i),i):(i.push(e.toString()),i)}var sn=at(Re),cn=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=it(sn,t),this.baseStyle=n,Kt.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a){if(en(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=q(on(r,e,t,n)))}else i+=q(on(a,e,t,n))}}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=nt(it(it(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Dt(r,a)}}return r}},ln=/&/g;function un(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function dn(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==Xt||e.charCodeAt(c+1)!==42){if(o)l===42&&e.charCodeAt(c+1)===Xt&&(o=!1,c++);else if(l!==34&&l!==39||un(e,c)){if(a===0){if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}}else a===0?a=l:a===l&&(a=0)}else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function fn(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&fn(a.children,t)}return e}function pn({options:e=K,plugins:t=Ye}=K){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(ln,r).replace(i,a))}),e.prefix&&o.push(Ne),o.push(Ae);let s=[],c=je(o.concat(Me(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return dn(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||un(e,o)){if(s===0){if(t===Xt&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==Xt);)o++;o+=2}else if(t!==40){if(t!==41){if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===Xt)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===Xt&&o+1<r&&e.charCodeAt(o+1)===Xt){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++}else c>0&&c--,o++}else c++,o++}else o++}else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:dn(i)):l===0?e:dn(e)}(t),d=we(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=fn(d,e.namespace)),s=[],ke(d,c),s},u=e,d=rt;for(let e=0;e<t.length;e++)t[e].name||Pe(15),d=it(d,t[e].name);return u!=null&&u.namespace&&(d=it(d,u.namespace)),u!=null&&u.prefix&&(d=it(d,`p`)),l.hash=d===rt?``:d.toString(),l}var mn=new Kt,hn=pn(),gn=_.createContext({shouldForwardProp:void 0,styleSheet:mn,stylis:hn,stylisPlugins:void 0});gn.Consumer;function _n(){return _.useContext(gn)}var vn=_.createContext(void 0);vn.Consumer;var yn={};function bn(e,t){let n=typeof e==`string`?$e(e):`sc`;yn[n]=(yn[n]||0)+1;let r=n+`-`+ot(Re+n+yn[n]);return t?t+`-`+r:r}function xn(e,t,n){let r=Et(e),i=e,a=!ct(e),{attrs:o=Ye,componentId:s=bn(t.displayName,t.parentComponentId),displayName:c=lt(e)}=t,l=t.displayName&&t.componentId?$e(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new cn(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=_.useContext(vn),u=_n(),d=e.shouldForwardProp||u.shouldForwardProp,f=Xe(t,l,a)||K,[p,m]=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=null,a=e.length>1;for(let t=0;t<e.length;t++){let n=e[t],o=wt(n)?n(a?Object.assign({},r):r):n;for(let e in o)e===`className`?r.className=Dt(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):o[e]===void 0?e in r&&(r[e]!==void 0&&(i||=[]).push(e),r[e]=void 0):r[e]=o[e]}return`className`in t&&typeof t.className==`string`&&(r.className=Dt(r.className,t.className)),[r,i]}(r,t,f),h=i.generateAndInjectStyles(p,u.styleSheet,u.stylis),g=p.as||c,v=ct(g),y=function(e,t,n,r,i,a){let o={};for(let s in e)s[0]===`$`||s===`as`||s===`theme`&&e.theme===n||(s===`forwardedAs`?e.forwardedAs!==void 0&&(o.as=e.forwardedAs):e[s]===void 0?s===`className`||i||a!==null&&a.indexOf(s)!==-1||r&&!r(s,t)||(o[s]=void 0):r&&!r(s,t)||(o[s]=e[s]));return o}(p,g,f,d,v,m),b=Dt(o,s);return h&&(b+=` `+h),p.className&&(b+=` `+p.className),y[v&&g.includes(`-`)?`class`:`className`]=b,n&&(y.ref=n),(0,_.createElement)(g,y)}(m,e,t)}p.displayName=c;let m=_.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Dt(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)kt(e,n,!0);return e}({},i.defaultProps,e):e}}),At(m,()=>`.${m.styledComponentId}`),a&&Ct(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Sn=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function Cn(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var wn=e=>(qt.add(e),e);function Tn(e,...t){if(wt(e)||Ot(e))return wn(on(Cn(Ye,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?on(n):wn(on(Cn(n,t)))}function En(e,t,n=K){if(!t)throw Pe(1,t);let r=(r,...i)=>e(t,n,Tn(r,...i));return r.attrs=r=>En(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>En(e,t,Object.assign(Object.assign({},n),r)),r}var Dn=e=>En(xn,e),J=Dn;Sn.forEach(e=>{J[e]=Dn(e)});var On,kn=class{constructor(e,t){this[On]=!0,this.inject=(e,t=hn)=>{let n=this.getName(t);if(!e.hasNameForId(this.id,n)){let r=t(this.rules,n,`@keyframes`);e.insertRules(this.id,n,r)}},this.name=e,this.id=Ue+e,this.rules=t,Ke(this.id),At(this,()=>{throw Pe(12,String(this.name))})}getName(e=hn){return e.hash?this.name+nt(e.hash>>>0):this.name}};function An(e,...t){let n=q(Tn(e,...t));return new kn(ot(n),n)}On=Qt,`${Fe}`,`${Fe}`,`${Fe}`;var jn=15e3,Mn=new Set,Nn=new Map,Pn=!1,Fn=0,In;function Ln(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function Rn(){Pn||(Pn=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>zn(e)))}function zn(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?Nn.get(n):void 0;n&&r&&(Nn.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),Mn.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}function Bn(){if(In!==void 0)return;let e=()=>{if(!Ln())return;let e=document.getElementById(`root`),t=e!==null&&e.childElementCount===0;window.external.sendMessage(JSON.stringify({type:`webview.heartbeat`,payload:{blank:t}}))};e(),In=setInterval(e,5e3)}var Y={get available(){return Ln()},send(e){Ln()?(Rn(),window.external.sendMessage(JSON.stringify(e)),e.type===`app.ready`&&Bn()):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=jn){if(!Ln())return Promise.reject(Error(`Native bridge is not available.`));Rn();let r=`req-${++Fn}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{Nn.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);Nn.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return Rn(),Mn.add(e),()=>Mn.delete(e)}},Vn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),X=o(((e,t)=>{t.exports=Vn()}))();function Hn(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}async function Un(e){return Y.available?await Y.request(`i18n.get`,e?{locale:e}:void 0):{locale:`en`,strings:{},available:[`en`]}}var Wn=(0,_.createContext)(Hn({})),Gn=(0,_.createContext)(`en`);function Kn(){return(0,_.useContext)(Wn)}var qn=({children:e})=>{let[t,n]=(0,_.useState)(()=>Hn({})),[r,i]=(0,_.useState)(`en`);return(0,_.useEffect)(()=>{let e=!1,t=async()=>{try{let t=await Un();if(e)return;n(()=>Hn(t.strings)),i(t.locale)}catch{}};t();let r=Y.on(e=>{e.type===`settings.changed`&&t()});return()=>{e=!0,r()}},[]),(0,_.useEffect)(()=>{document.documentElement.lang=r},[r]),(0,X.jsx)(Wn.Provider,{value:t,children:(0,X.jsx)(Gn.Provider,{value:r,children:e})})},Jn=e=>Y.send({type:e});function Yn(){let[e,t]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{if(Y.available)return Y.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>Jn(`window.minimize`),toggleMaximize:()=>Jn(`window.toggleMaximize`),close:()=>Jn(`window.close`)}}function Xn(){return{onMouseDown:()=>Jn(`window.drag`),onDoubleClick:()=>Jn(`window.toggleMaximize`)}}function Zn(){let[e,t]=(0,_.useState)(!1),{maximized:n}=Yn();return(0,_.useEffect)(()=>{if(!Y.available)return;let e=!1;return Y.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,_.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var Qn=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function $n(){return(0,X.jsx)(X.Fragment,{children:Qn.map(([e,t])=>(0,X.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),Y.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var er=null;function tr(e){er=e}function nr(e){return er?er(e):Promise.resolve(!1)}var rr={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},ir={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function ar(e,t){return Y.available?await Y.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function or(e){return Y.available?(await Y.request(`fs.open`,{path:e})).ok:!1}async function sr(e,t=!0,n=!1,r=0,i){return await Y.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function cr(e,t,n=0,r){return await Y.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r})}async function lr(e,t=0,n){return await Y.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function ur(e){return Y.available?await Y.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function dr(e,t){return Y.available?(await Y.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function fr(e,t,n,r){return Y.available?(await Y.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function pr(e,t=!1){return Y.available?await Y.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function mr(){return(await Y.request(`fs.places`)).places}async function hr(){return(await Y.request(`fs.drives`)).drives}async function gr(e=!1){return(await Y.request(`fs.recycle`,{includeOrphans:e})).entries}async function _r(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await nr({hits:r.protected,delaySeconds:r.delaySeconds??5,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await Y.request(e,{...t,confirm:r.token})}return r}async function vr(e=!1){let t=await Y.request(`fs.recycle.empty`,{includeOrphans:e});await _r(`fs.recycle.empty`,{includeOrphans:e},t)}async function yr(e){return!Y.available||e.length===0?{ok:!1,done:0}:await Y.request(`fs.recycle.restoreMany`,{ids:e})}async function br(e){if(!Y.available||e.length===0)return{ok:!1,done:0};let t=await Y.request(`fs.recycle.deleteMany`,{ids:e}),n=await _r(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function xr(e){Y.available&&e&&await Y.request(`fs.recycle.properties`,{id:e})}async function Sr(){if(!Y.available)return{entries:[],cancelled:!0,failed:!1};let e=await Y.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function Cr(){return Y.available?(await Y.request(`fs.recycle.admin.purge`)).ok:!1}async function wr(e=0,t=150,n=!1){return Y.available?await Y.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function Tr(){return Y.available?(await Y.request(`fs.recent`)).entries:[]}async function Er(){return Y.available?(await Y.request(`fs.frequent`)).entries:[]}async function Dr(e){Y.available&&await Y.request(`fs.frequent.record`,{path:e})}async function Or(){await Y.request(`fs.recent.clear`)}async function kr(){await Y.request(`fs.frequent.clear`)}async function Ar(){return await Y.request(`fs.visibility`)}async function jr(){return await Y.request(`fs.hidden.toggle`)}async function Mr(){return Y.available?await Y.request(`fs.index.tasks`):{count:0,directories:[]}}var Nr={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,accentColor:null,secondaryColor:null,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],globalHotkey:null,language:null,themePresets:[]};async function Pr(){if(!Y.available)return Nr;let e=await Y.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[]}}async function Fr(){return Y.available?(await Y.request(`app.protection.defaults`)).paths??[]:[]}var Ir={registered:!1,pathMatches:!1,registeredPath:null};async function Lr(){return Y.available?await Y.request(`app.defaultManager.status`):{registered:!1,pathMatches:!1,registeredPath:null}}async function Rr(){return Y.available?await Y.request(`app.archive.status`):Ir}async function zr(){return Y.available?await Y.request(`app.archive.register`):Ir}async function Br(){return Y.available?await Y.request(`app.archive.unregister`):Ir}async function Vr(e){if(!Y.available)return e;let t=await Y.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets}}async function Hr(e,t){Y.available&&await Y.request(`app.tabs.set`,{tabs:e,active:t})}async function Ur(e,t,n){return Y.available?(await Y.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var Wr={managed:0,private:0,workingSet:0,available:0};async function Gr(){return Y.available?await Y.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1}}async function Kr(){return Y.available?await Y.request(`app.updateStatus`)??null:null}async function qr(){return Y.available?await Y.request(`app.checkUpdate`):{current:`dev`,latest:`dev`,available:!1}}async function Jr(e){return!Y.available||!e?!1:(await Y.request(`app.openUrl`,{url:e})).ok}async function Yr(){return Y.available?await Y.request(`app.memory`):Wr}async function Xr(){return Y.available?await Y.request(`app.memory.trim`):Wr}async function Zr(){return Y.available?(await Y.request(`app.scheme`)).registered:!1}async function Qr(e){return Y.available?(await Y.request(`app.scheme.set`,{enabled:e})).registered:!1}async function $r(e,t=!1){return!Y.available||e.length===0?!1:(await Y.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function ei(){return Y.available?(await Y.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function ti(){return Y.available?await Y.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function ni(e,t,n){return!Y.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await Y.request(`fs.operation.transfer`,{paths:e,target:t,move:n})}async function ri(e){return!Y.available||e.length===0?[]:(await Y.request(`fs.paths.info`,{paths:e})).entries}async function ii(e){return Y.available?(await Y.request(`fs.clipboard.paste`,{directory:e})).ok:!1}async function ai(e,t=!1){if(!Y.available||e.length===0)return{ok:!1,error:null};let n=await Y.request(`fs.operation.delete`,{paths:e,permanent:t});for(let r=0;r<2&&n.required&&n.token&&n.protected?.length;r++){if(!await nr({hits:n.protected,delaySeconds:n.delaySeconds??5,permanent:t}))return{ok:!1,error:null,cancelled:!0};n=await Y.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return n}async function oi(e,t){return Y.available?await Y.request(`fs.operation.rename`,{path:e,name:t}):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function si(e,t=!1){return Y.available?await Y.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function ci(e){return Y.available?(await Y.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function li(e,t){return Y.available?await Y.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function ui(e,t,n){return Y.available?await Y.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function di(e,t){return Y.available?await Y.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function fi(e){Y.available&&e.length!==0&&await Y.request(`fs.operation.properties`,{paths:e})}async function pi(e){Y.available&&await Y.request(`fs.operation.openWith`,{path:e})}async function mi(e){Y.available&&await Y.request(`fs.operation.terminal`,{path:e})}async function hi(e){return Y.available?await Y.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function gi(e,t){return Y.available?(await Y.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function _i(){return Y.available?await Y.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function vi(){return Y.available?await Y.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function yi(e){Y.available&&await Y.request(`fs.operation.showInExplorer`,{path:e})}async function bi(e){return!Y.available||e.length===0?{verbs:[],safe:!0}:await Y.request(`shell.verbs`,{paths:e})}async function xi(e,t,n,r){Y.available&&e.length!==0&&await Y.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Si(e,t){return!Y.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await Y.request(`fs.operation.compress`,{...t,paths:e})}async function Ci(){return Y.available?(await Y.request(`app.tasks`)).tasks:[]}async function wi(){Y.available&&await Y.request(`app.tasks.clear`)}var Ti={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,refresh:`f5`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},Ei=Ti.openInNewTab;function Di(e){Ei=e.trim()||Ti.openInNewTab}function Oi(e){let t=Ei.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function ki(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Ai(e){return e.split(`+`).filter(Boolean).map(e=>ji[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var ji={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Mi(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}function Ni(e,t,n,r,i={}){return e(t===1?n:r,{count:t,...i})}function Pi(e){if(e<0)return`—`;if(e===0)return`0 B`;let t=[`B`,`KB`,`MB`,`GB`,`TB`],n=Math.min(Math.floor(Math.log(e)/Math.log(1024)),t.length-1);return`${(e/1024**n).toFixed(n===0?0:1)} ${t[n]}`}function Fi(){let e=document.documentElement.lang.trim();return e.length>0?e:void 0}var Ii=`yyyy/MM/dd HH:mm`,Li=`24`,Ri=Ii;function zi(e,t){Li=Bi(e),Ri=t?.trim()||`yyyy/MM/dd HH:mm`}function Bi(e){return e===`system`||e===`12`||e===`custom`?e:`24`}function Vi(e){return Hi(e,Li,Ri)}function Hi(e,t,n){if(e<=0)return`—`;let r=new Date(e),i=Bi(t);if(i===`custom`)return Gi(r,n?.trim()||`yyyy/MM/dd HH:mm`);let a={year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`};return i===`24`&&(a.hourCycle=`h23`),i===`12`&&(a.hour12=!0),r.toLocaleString(Fi(),a)}function Ui(e){if(e<=0)return`—`;let t=new Date(e);if(Li===`custom`)return Gi(t,Ri);let n={hour:`2-digit`,minute:`2-digit`,second:`2-digit`};return Li===`24`&&(n.hourCycle=`h23`),Li===`12`&&(n.hour12=!0),t.toLocaleTimeString(Fi(),n)}var Wi=[`yyyy`,`yy`,`MM`,`M`,`dd`,`d`,`HH`,`H`,`hh`,`h`,`mm`,`m`,`ss`,`s`,`a`];function Gi(e,t){let n=``;for(let r=0;r<t.length;){let i=Wi.find(e=>t.startsWith(e,r));i?(n+=Ki(e,i),r+=i.length):(n+=t[r],r++)}return n}function Ki(e,t){let n=e.getHours(),r=(n+11)%12+1;switch(t){case`yyyy`:return String(e.getFullYear());case`yy`:return qi(e.getFullYear()%100);case`MM`:return qi(e.getMonth()+1);case`M`:return String(e.getMonth()+1);case`dd`:return qi(e.getDate());case`d`:return String(e.getDate());case`HH`:return qi(n);case`H`:return String(n);case`hh`:return qi(r);case`h`:return String(r);case`mm`:return qi(e.getMinutes());case`m`:return String(e.getMinutes());case`ss`:return qi(e.getSeconds());case`s`:return String(e.getSeconds());case`a`:return Ji(e);default:return``}}function qi(e){return String(e).padStart(2,`0`)}function Ji(e){return new Intl.DateTimeFormat(Fi(),{hour:`numeric`,hour12:!0}).formatToParts(e).find(e=>e.type===`dayPeriod`)?.value??(e.getHours()<12?`AM`:`PM`)}function Yi(e){return e>=.9?`#ef4444`:e>=.75?`#f59e0b`:`var(--accent-gradient)`}function Xi(e){return e.replace(/[\\/]+$/,``).split(/[\\/]/).at(-1)||e}function Zi(e){let t=e.replace(/[\\/]+$/,``),n=Math.max(t.lastIndexOf(`\\`),t.lastIndexOf(`/`));return n>0?t.slice(0,n):t}var Qi=[`.zip`,`.7z`,`.rar`,`.tar`,`.gz`,`.tgz`,`.bz2`,`.xz`];function $i(e){let t=e.replace(/[\\/]+$/,``).toLowerCase();return Qi.some(e=>t.endsWith(e))}function ea(e){return $i(e)?!0:e.toLowerCase().split(/[\\/]/).some(e=>Qi.some(t=>e.endsWith(t)))}function ta(e){let t=e.split(/[\\/]/),n=t.findIndex(e=>Qi.some(t=>e.toLowerCase().endsWith(t)));return n<0?e:t.slice(0,n+1).join(`\\`)}function na(e){return ta(e).toLowerCase().endsWith(`.zip`)}function ra(e){let t=e.includes(`/`)||e.includes(`\\\\`)?e.replace(/[\\/]+/g,`\\`):e;return t.endsWith(`\\`)&&(t=t.slice(0,-1)),t.toLowerCase()}function ia(e){let t=e.name.replace(/[\\/]+$/,``);return/^[a-z]:$/i.test(t)?` (${t.toUpperCase()})`:``}function aa(e){let t=ia(e);return t?`${e.label||`Local Disk`}${t}`:e.label||e.name}var oa=new Map;function sa(e){return ra(ea(e)?ta(e):e)}function ca(e){return oa.get(sa(e))}function la(e,t){oa.set(sa(e),t)}function ua(e){oa.delete(sa(e))}function da(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var fa=new Map,pa=new Map,ma=new Set,ha=0;function ga(){fa.clear(),pa.clear(),ha+=1,ma.forEach(e=>e())}function _a(){let[e,t]=(0,_.useState)(ha);return(0,_.useEffect)(()=>{let e=()=>t(ha);return ma.add(e),()=>{ma.delete(e)}},[]),e}var va=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function ya(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return va.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function ba(e,t,n=!1){let r=_a(),i=e===null?``:ya(e,t,n),[a,o]=(0,_.useState)(()=>fa.get(i)??null);return(0,_.useEffect)(()=>{if(e===null){o(null);return}if(!Y.available)return;if(fa.has(i)){o(fa.get(i)??null);return}let r=!0;return Y.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?fa.set(i,e.dataUrl):fa.delete(i),r&&o(e.dataUrl)},()=>{fa.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function xa(e){let[t,n]=(0,_.useState)(e);return(0,_.useEffect)(()=>{if(!e){n(null);return}if(!ea(e)){n(e);return}let t=!0;return lr(e,0,ca(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function Sa(e){let t=_a(),[n,r]=(0,_.useState)(()=>e?pa.get(e)??null:null);return(0,_.useEffect)(()=>{if(!e||!Y.available){r(null);return}if(pa.has(e)){r(pa.get(e)??null);return}let t=!0;return Y.request(`fs.iconFile`,{path:e}).then(n=>{pa.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{pa.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var Ca=null,wa=null;function Ta(){return Ca===null?Y.available?(wa??=Y.request(`app.thumbnails`).then(e=>(Ca=e.base??``,Ca),()=>(Ca=``,``)),wa):Promise.resolve(``):Promise.resolve(Ca)}function Ea(e,t=128,n=0){let[r,i]=(0,_.useState)(Ca);return(0,_.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return Ta().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}`}function Da(e,t=0,n=``){let[r,i]=(0,_.useState)(Ca);if((0,_.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return Ta().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function Oa(e,t=0){let[n,r]=(0,_.useState)(Ca);return(0,_.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return Ta().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var ka={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},Aa={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function ja(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=Pa(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=La(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var Ma=`\0`,Na=``;function Pa(e){return e.query!==Ma&&(Ma=e.query,Na=e.query.toLowerCase()),Na}var Fa=`\0`,Ia=null;function La(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===Fa)return Ia;Fa=t;try{Ia=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{Ia=null}return Ia}function Ra(e,t){return ja(e,t)!==null}var za=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],Ba={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Va(e){let t=Ua(e);for(let{kind:e}of za)if(Ba[e].has(t))return e;return null}function Ha(e){return Va(e)!==null}function Ua(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var Wa=(0,_.createContext)({places:{},useIcons:!1}),Ga=Wa.Provider;function Ka(){return(0,_.useContext)(Wa)}function qa(e,t){return e.places[ra(t)]}function Ja(e,t,n){return qa(e,t)?.name||n}function Ya(e,t){try{let n=Number(localStorage.getItem(e));return Number.isFinite(n)?n:t}catch{return t}}function Xa(e,t){try{localStorage.setItem(e,String(t))}catch{}}function Za(e){try{return JSON.parse(localStorage.getItem(e)??`null`)}catch{return null}}function Qa(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}var $a=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,X.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,X.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),eo=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,X.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),to=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,X.jsx)(`path`,{d:`M14 3v4h4`})]}),no=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,X.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,X.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),ro=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,X.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),io=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M12 19V5`}),(0,X.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),ao=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,X.jsx)(`path`,{d:`M20 4v7h-7`})]}),oo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M12 5v14`}),(0,X.jsx)(`path`,{d:`M5 12h14`})]}),so=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M19 12H5`}),(0,X.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),co=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M5 12h14`}),(0,X.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),lo=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,X.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),uo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,X.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),fo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,X.jsx)(`path`,{d:`M12 12v8`})]}),po=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,X.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),mo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,X.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,X.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,X.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),ho=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,X.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),go=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,X.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),_o=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M4 7h16`}),(0,X.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,X.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,X.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),vo=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,X.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),yo=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,X.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),bo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,X.jsxs)(`defs`,{children:[(0,X.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,X.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,X.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,X.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,X.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,X.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,X.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,X.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,X.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,X.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),xo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,X.jsx)(`path`,{d:`M15 3v4h4`}),(0,X.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),So=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,X.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,X.jsx)(`path`,{d:`m13 5-2 14`})]}),Co=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,X.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,X.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),wo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,X.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),To=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,X.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,X.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Eo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,X.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),Do=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,X.jsx)(`path`,{d:`M15 3v4h4`}),(0,X.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),Oo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,X.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),ko=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,X.jsx)(`path`,{d:`M8.5 14h7`})]}),Ao=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,X.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,X.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),jo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,X.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),Mo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,X.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),No=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,X.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),Po=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,X.jsx)(`path`,{d:`M15 3v4h4`}),(0,X.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),Fo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,X.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,X.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,X.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),Io=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,X.jsx)(`path`,{d:`m14 6 4 4`})]}),Lo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,X.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Ro=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,X.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),zo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M12 4v10`}),(0,X.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,X.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Bo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,X.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,X.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Vo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,X.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,X.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Ho=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,X.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Uo=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,X.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Wo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,X.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Go=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,X.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,X.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Ko=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,X.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),qo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,X.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,X.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,X.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),Jo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,X.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Yo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,X.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Xo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,X.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,X.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),Zo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,X.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),Qo=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,X.jsx)(`path`,{d:`M3.5 12h17`}),(0,X.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),$o=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,X.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),es=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,X.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),ts=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,X.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,X.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),ns=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,X.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),rs=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M12 16V4`}),(0,X.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,X.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),is=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,X.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),as=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,X.jsx)(`path`,{d:`M12 4v16`})]}),os=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,X.jsx)(`path`,{d:`M15 4v16`})]}),ss=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,X.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,X.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,X.jsx)(`circle`,{cx:19,cy:12,r:1.6})]});function Z(e,t){return({size:n=t,...r})=>(0,X.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var cs=Z($a,18),ls=Z(eo,18),us=Z(to,18),ds=Z(no,18),fs=Z(ro,16),ps=Z(io,16),ms=Z(ao,16),hs=Z(oo,16),gs=Z(so,16),_s=Z(co,16),vs=Z(lo,12),ys=Z(uo,18),bs=Z(fo,14),xs=Z(po,14),Ss=Z(mo,14),Cs=Z(ho,18),ws=Z(go,18),Ts=Z(_o,18),Es=Z(vo,14),Ds=Z(yo,14),Os=Z(bo,18),ks=Z(xo,18),As=Z(So,18),js=Z(Co,18),Ms=Z(wo,18),Ns=Z(To,18),Ps=Z(Eo,18),Fs=Z(Do,18),Is=Z(Oo,18),Ls=Z(ko,18),Rs=Z(Ao,18),zs=Z(jo,18),Bs=Z(Mo,18),Vs=Z(No,18),Hs=Z(Po,18),Us=Z(Fo,18),Ws=Z(Io,16),Gs=Z(Lo,18),Ks=Z(Ro,18),qs=Z(zo,18),Js=Z(Bo,18),Ys=Z(Vo,18),Xs=Z(Ho,18),Zs=Z(Uo,18),Qs=Z(Wo,18),$s=Z(Go,18),ec=Z(Ko,18),tc=Z(qo,18),nc=Z(Jo,18),rc=Z(Yo,18),ic=Z(Xo,18),ac=Z(Zo,18),oc=Z(Qo,18),sc=Z($o,18),cc=Z(es,16),lc=Z(ts,16),uc=Z(ns,16),dc=Z(rs,16),fc=Z(is,16),pc=Z(as,16),mc=Z(os,16),hc=Z(ss,16);async function gc(e,t,n){return Y.available?(await Y.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function _c(e){return gc(`folder`,[],e??``)}function vc(e){return gc(`file`,e??[],``)}var yc=null,bc=null;function xc(e){yc=e}function Sc(e){return yc?yc(e):Promise.resolve()}function Cc(e){bc=e}function wc(e,t=!1){return bc?bc(e,t):Promise.resolve(null)}var Tc=[{extension:`.txt`,label:`Text file`},{extension:`.md`,label:`Markdown file`},{extension:`.json`,label:`JSON file`},{extension:`.html`,label:`HTML file`},{extension:`.css`,label:`CSS file`},{extension:`.js`,label:`JavaScript file`},{extension:`.ts`,label:`TypeScript file`},{extension:`.cs`,label:`C# file`},{extension:`.py`,label:`Python file`},{extension:`.bat`,label:`Batch file`},{extension:`.ps1`,label:`PowerShell file`},{extension:`.csv`,label:`CSV file`},{extension:`.xml`,label:`XML file`},{extension:`.yml`,label:`YAML file`}],Ec=null,Dc=0,Oc=new Set;function kc(){Dc+=1;for(let e of Oc)e()}function Ac(e){return Oc.add(e),()=>Oc.delete(e)}function jc(){return Dc}function Mc(e){Ec=e,kc()}function Nc(){return(0,_.useSyncExternalStore)(Ac,jc,jc),Ec}var Pc=m(),Fc=Tn`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,Ic=An`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Lc=An`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Rc=An`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,zc=An`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Bc=An`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Vc=An`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Hc=An`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,Uc=An`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,Wc=Tn`animation: ${Ic} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Gc=Tn`animation: ${Lc} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,Kc=Tn`animation: ${Rc} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;Tn`animation: ${zc} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var qc=Tn`animation: ${Bc} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Jc=Tn`animation: ${Vc} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Yc=Tn`animation: ${Hc} 140ms ease-out;`,Xc=Tn`animation: ${Uc} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function Zc({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,_.useState)([]),s=(0,_.useRef)(void 0);if((0,_.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,_.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,X.jsx)(sl,{},`group-rule-${i}`)),n.push((0,X.jsx)(ol,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,X.jsx)(sl,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,X.jsxs)(rl,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,X.jsx)(il,{children:e.loading?(0,X.jsx)(cl,{}):e.icon}),(0,X.jsx)(al,{children:e.label}),a?(0,X.jsx)(vs,{size:12}):e.checked&&(0,X.jsx)(Es,{size:12})]},`${e.label}-${i}`))}),n};return(0,Pc.createPortal)((0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(Qc,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)($c,{children:r.map((e,t)=>(0,X.jsxs)(el,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,X.jsx)(tl,{children:e.icon}),(0,X.jsx)(nl,{children:e.label})]},`${e.label}-${t}`))}),(0,X.jsx)(sl,{})]}),m(n,0)]}),a.map((e,t)=>(0,X.jsx)(Qc,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var Qc=J.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${Fc}
    ${Gc}
    transform-origin: top left;
`,$c=J.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,el=J.button`
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
`,tl=J.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,nl=J.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,rl=J.button`
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
`,il=J.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,al=J.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ol=J.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,sl=J.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,cl=J.span`
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
`;function ll({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:o,onOpenFile:s,onRename:c,onDelete:l,onCopy:u,onPaste:d,onCreateFolder:f,onCreateFile:p,creationOnly:m=!1,onRefresh:h,onAddToTray:g,allowCompression:v=!1,onCompressTo:y,onArchiveCreated:b}){let x=Kn(),S=Nc(),C=ea(t),[w,T]=(0,_.useState)({verbs:[],safe:!0,loading:!1}),[E,D]=(0,_.useState)({recommended:[],other:[],loading:!1}),[O,ee]=(0,_.useState)(null),te=(0,_.useRef)(0),ne=(0,_.useRef)(0),k=e?.paths.length===1,A=e?.background?t?[t]:[]:e?.paths??[];if((0,_.useEffect)(()=>{if(!e){T({verbs:[],safe:!0,loading:!1}),D({recommended:[],other:[],loading:!1});return}let t=++te.current;T({verbs:[],safe:!0,loading:A.length>0&&!C}),A.length>0&&!C&&bi(A).then(e=>{te.current===t&&T({...e,loading:!1})},()=>{te.current===t&&T({verbs:[],safe:!0,loading:!1})});let r=++ne.current;!C&&k&&n?(D({recommended:[],other:[],loading:!0}),hi(n.path).then(e=>{ne.current===r&&D({...e,loading:!1})},()=>{ne.current===r&&D({recommended:[],other:[],loading:!1})})):D({recommended:[],other:[],loading:!1})},[e,k,n?.path,n?.isDirectory,A.length,C]),(0,_.useEffect)(()=>{if(!e||e.background||!k||!n?.isDirectory){ee(null);return}let t=!0;return ci(n.path).then(e=>{t&&ee(e)},()=>{t&&ee(null)}),()=>{t=!1}},[e,k,n?.path,n?.isDirectory]),!e)return null;let j=[],M=[],N=()=>{if(!k||!n)return`Archive`;let e=Xi(n.path);if(n.isDirectory)return e;let t=e.lastIndexOf(`.`);return t>0?e.slice(0,t):e},P=async e=>{let n=await Si(e,{directory:t,name:N(),format:`zip`,level:5});n.ok&&n.path?b?.(n.path,!0):Sc(n.error??x(`Could not create the archive.`))},F=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},I=async()=>{if(!n||O===null)return;let e=await li(n.path,!O);e.ok?(ee(e.enabled),h?.()):Sc(e.error??x(`Could not change the case sensitivity.`))},L=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await ui(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await ui(e,t,`${a}\\${dl(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?h?.():Sc(o.error??x(`Could not create the link.`))},R=async e=>{if(!n)return;let r=await _c(t);r&&await L(e,n.path,r,Xi(n.path),e.endsWith(`-copy`))},re=async e=>{let n=S?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=ra(r.path.replace(/[\\/][^\\/]+$/,``))===ra(t);await L(n,r.path,t,Xi(r.path),i&&!a)}},ie=async()=>{let t=(await ri(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&Mc({paths:t})},z=()=>{let e=S?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:x(`Cancel selected link`),icon:(0,X.jsx)(Ds,{size:14}),onSelect:()=>Mc(null)},...t?[{label:x(`Hard link`),icon:(0,X.jsx)(us,{size:14}),separatorBefore:!0,onSelect:()=>void re(`hard`)}]:[],{label:x(`Symbolic link`),icon:(0,X.jsx)(us,{size:14}),separatorBefore:!t,onSelect:()=>void re(`symbolic-file`)},...n?[{label:x(`Directory junction`),icon:(0,X.jsx)(ls,{size:14}),onSelect:()=>void re(`junction`)},{label:x(`Smart copy`),icon:(0,X.jsx)(cc,{size:14}),separatorBefore:!0,onSelect:()=>void re(`smart-copy`)},{label:x(`Smart mirror`),icon:(0,X.jsx)(cc,{size:14}),onSelect:()=>void re(`smart-mirror`)},{label:x(`Multi-version smart copy`),icon:(0,X.jsx)(cc,{size:14}),onSelect:()=>void re(`multi-version-smart-copy`)},{label:x(`Hardlink copy`),icon:(0,X.jsx)(cc,{size:14}),separatorBefore:!0,onSelect:()=>void re(`hard-copy`)},{label:x(`Symbolic link copy`),icon:(0,X.jsx)(cc,{size:14}),onSelect:()=>void re(`symbolic-copy`)}]:[]]};if(e.background){if(f&&M.push({label:x(`New folder`),icon:(0,X.jsx)(hs,{size:16}),shortcut:Ai(r.newFolder),onSelect:f}),p||f){let e=[];f&&(e.push({label:x(`Folder`),icon:(0,X.jsx)(ls,{size:14}),onSelect:()=>f(!1)}),C||e.push({label:x(`Case-sensitive folder`),icon:(0,X.jsx)(ls,{size:14}),onSelect:()=>f(!0)})),p&&e.push(...Tc.map((e,t)=>({label:`${x(e.label)} (${e.extension})`,icon:(0,X.jsx)(us,{size:14}),separatorBefore:t===0,onSelect:()=>p(e.extension)}))),j.push({label:x(`New`),icon:(0,X.jsx)(hs,{size:14}),children:e,onSelect:()=>void 0})}if(C||j.push({label:x(`Create link`),icon:(0,X.jsx)(dc,{size:14}),disabled:!S,children:z(),onSelect:()=>void 0}),m)return(0,X.jsx)(Zc,{items:j,onClose:a,quick:M,x:e.x,y:e.y});!C&&v&&(j.push({label:x(`Open in Terminal`),icon:(0,X.jsx)(rc,{size:14}),onSelect:()=>void mi(t)}),j.push({label:x(`Show in Explorer`),icon:(0,X.jsx)(ls,{size:14}),separatorBefore:!0,onSelect:()=>void yi(t)})),d&&M.push({label:x(`Paste`),icon:(0,X.jsx)(uc,{size:16}),disabled:!i,shortcut:Ai(r.paste),onSelect:()=>d(t)}),h&&M.push({label:x(`Refresh`),icon:(0,X.jsx)(ms,{size:16}),shortcut:Ai(r.refresh),onSelect:h}),C||M.push({label:x(`Properties`),icon:(0,X.jsx)(ys,{size:16}),shortcut:Ai(r.properties),onSelect:()=>void fi([t])})}else{if(o&&j.push({label:x(`Open`),icon:(0,X.jsx)(_s,{size:14}),onSelect:()=>{n?.isDirectory?o(n.path):n&&s?.(n.path)}}),n?.isDirectory&&(o&&j.push({label:x(`Open in new tab`),icon:(0,X.jsx)(hs,{size:14}),onSelect:()=>o(n.path,!0)}),d&&j.push({label:x(`Paste into folder`),icon:(0,X.jsx)(uc,{size:14}),disabled:!i,onSelect:()=>d(n.path)}),C||j.push({label:x(`Open in Terminal`),icon:(0,X.jsx)(rc,{size:14}),onSelect:()=>void mi(n.path)})),!C&&k&&n){let e=[];if(E.loading)e.push({label:x(`Loading apps…`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of E.recommended)e.push({label:t.name,group:x(`Suggested apps`),icon:t.icon?(0,X.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,X.jsx)(Is,{size:14}),onSelect:()=>void gi(n.path,t.path).then(e=>{e||pi(n.path)})});for(let t of E.other)e.push({label:t.name,group:x(`Other apps`),icon:t.icon?(0,X.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,X.jsx)(Is,{size:14}),onSelect:()=>void gi(n.path,t.path).then(e=>{e||pi(n.path)})})}e.push({label:x(`Choose another app…`),icon:(0,X.jsx)(Is,{size:14}),separatorBefore:!0,onSelect:()=>void pi(n.path)}),j.push({label:x(`Open with`),icon:(0,X.jsx)(Is,{size:14}),children:e,onSelect:()=>void pi(n.path)})}if(C||j.push({label:x(`Compress`),icon:(0,X.jsx)(Ps,{size:14}),separatorBefore:!0,children:[{label:x(`Compress to ZIP`),icon:(0,X.jsx)(Ps,{size:14}),onSelect:()=>void P(e.paths)},{label:x(`Compress to…`),icon:(0,X.jsx)(Ps,{size:14}),onSelect:()=>y?.(e.paths,N())}],onSelect:()=>void 0}),!C&&(e?.paths.length??0)>0){let e=[{label:x(`Select link source`),icon:(0,X.jsx)(dc,{size:14}),onSelect:()=>void ie()},...S?[{label:x(`Cancel selected link`),icon:(0,X.jsx)(Ds,{size:14}),onSelect:()=>Mc(null)}]:[],...k&&n?n.isDirectory?[{label:x(`Symbolic link`),icon:(0,X.jsx)(ls,{size:14}),separatorBefore:!0,onSelect:()=>void R(`symbolic-folder`)},{label:x(`Directory junction`),icon:(0,X.jsx)(ls,{size:14}),onSelect:()=>void R(`junction`)},{label:x(`Smart copy`),icon:(0,X.jsx)(cc,{size:14}),separatorBefore:!0,onSelect:()=>void R(`smart-copy`)},{label:x(`Smart mirror`),icon:(0,X.jsx)(cc,{size:14}),onSelect:()=>void R(`smart-mirror`)},{label:x(`Multi-version smart copy`),icon:(0,X.jsx)(cc,{size:14}),onSelect:()=>void R(`multi-version-smart-copy`)},{label:x(`Hardlink copy`),icon:(0,X.jsx)(cc,{size:14}),separatorBefore:!0,onSelect:()=>void R(`hard-copy`)},{label:x(`Symbolic link copy`),icon:(0,X.jsx)(cc,{size:14}),onSelect:()=>void R(`symbolic-copy`)}]:[{label:x(`Symbolic link`),icon:(0,X.jsx)(us,{size:14}),separatorBefore:!0,onSelect:()=>void R(`symbolic-file`)},{label:x(`Hard link`),icon:(0,X.jsx)(us,{size:14}),onSelect:()=>void R(`hard`)}]:[]];j.push({label:x(`Create link`),icon:(0,X.jsx)(dc,{size:14}),children:e,onSelect:()=>void 0})}!C&&n?.isDirectory&&O!==null&&j.push({label:x(`Case-sensitive names`),icon:(0,X.jsx)(ls,{size:14}),checked:O,onSelect:()=>void I()}),j.push({label:x(`Copy as path`),icon:(0,X.jsx)(cc,{size:14}),onSelect:()=>void F(e.paths)}),g&&j.push({label:x(`Add to file tray`),icon:(0,X.jsx)(ac,{size:14}),onSelect:()=>g(e.paths)}),C||j.push({label:x(`Show in Explorer`),icon:(0,X.jsx)(ls,{size:14}),separatorBefore:!0,onSelect:()=>void yi(e.paths[0])}),u&&M.push({label:x(`Cut`),icon:(0,X.jsx)(lc,{size:16}),shortcut:Ai(r.cut),onSelect:()=>u(e.paths,!0)},{label:x(`Copy`),icon:(0,X.jsx)(cc,{size:16}),shortcut:Ai(r.copy),onSelect:()=>u(e.paths,!1)}),k&&n&&c&&M.push({label:x(`Rename`),icon:(0,X.jsx)(Ws,{size:16}),shortcut:Ai(r.rename),onSelect:()=>c(n.path)}),l&&M.push({label:x(`Delete`),icon:(0,X.jsx)(Ts,{size:16}),danger:!0,shortcut:Ai(r.delete),onSelect:()=>l(e.paths)}),C||M.push({label:x(`Properties`),icon:(0,X.jsx)(ys,{size:16}),shortcut:Ai(r.properties),onSelect:()=>void fi(e.paths)})}if(w.loading)j.push({label:x(`More actions`),icon:(0,X.jsx)(Is,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(w.verbs.length>0){let e={items:[],children:new Map};for(let t of w.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,X.jsx)(ul,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void xi(A,w.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];j.push({label:x(w.safe?`More actions`:`More actions (extensions)`),icon:(0,X.jsx)(Is,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,X.jsx)(Zc,{items:j,onClose:a,quick:M,x:e.x,y:e.y})}function ul({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,X.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,X.jsx)(_s,{size:14});case`document`:return(0,X.jsx)(Hs,{size:14});case`cut`:return(0,X.jsx)(lc,{size:14});case`copy`:return(0,X.jsx)(cc,{size:14});case`paste`:return(0,X.jsx)(uc,{size:14});case`trash`:return(0,X.jsx)(Ts,{size:14});case`pencil`:return(0,X.jsx)(Ws,{size:14});case`gear`:return(0,X.jsx)(ys,{size:14});case`star`:return(0,X.jsx)(Zs,{size:14});case`pin`:return(0,X.jsx)(bs,{size:14});case`executable`:return(0,X.jsx)(Is,{size:14});case`share`:return(0,X.jsx)(dc,{size:14});case`arrow`:return(0,X.jsx)(_s,{size:14});default:return(0,X.jsx)(Os,{size:14})}}function dl(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function fl({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let[c,l]=(0,_.useState)(null),u=(0,_.useRef)(null),d=t.find(t=>t.value===e)??t[0];return(0,_.useEffect)(()=>{if(!c)return;let e=()=>l(null),t=t=>{let n=t.target;n instanceof Node&&u.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[c]),(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(pl,{$icon:a!==void 0,"aria-expanded":c!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(c){l(null);return}let e=u.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;l({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:u,style:i&&!a?{width:i}:void 0,title:o??d?.title,type:`button`,children:[a===void 0?(0,X.jsx)(ml,{children:d?.label??``}):(0,X.jsx)(hl,{children:a}),a===void 0&&(0,X.jsx)(gl,{children:(0,X.jsx)(vs,{size:11})})]}),c&&(0,Pc.createPortal)((0,X.jsx)(_l,{"aria-label":`options`,"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:c.bottom,left:c.left,minWidth:c.width,top:c.top},children:t.map(t=>(0,X.jsxs)(vl,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),l(null)},role:`option`,title:t.title,type:`button`,children:[(0,X.jsx)(yl,{children:t.label}),t.value===e&&(0,X.jsx)(Es,{size:11})]},t.value))}),document.body)]})}var pl=J.button`
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
`,ml=J.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,hl=J.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,gl=J.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,_l=J.div`
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
    ${Gc}
`,vl=J.button`
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
`,yl=J.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,bl=[{value:`zip`,label:`ZIP archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`ZIPX archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`7z archive (LZMA2)`,extension:`.7z`,level:!1},{value:`tar`,label:`TAR archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`TAR + GZip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`TAR + BZip2`,extension:`.tar.bz2`,level:!1}],xl=[{value:`default`,label:`Automatic`},{value:`store`,label:`Store (no compression)`},{value:`deflate`,label:`Deflate`},{value:`deflate64`,label:`Deflate64`},{value:`bzip2`,label:`BZip2`},{value:`lzma`,label:`LZMA`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`PPMd`}],Sl=[{value:`none`,label:`None`},{value:`zipcrypto`,label:`ZipCrypto`},{value:`aes128`,label:`AES-128`},{value:`aes192`,label:`AES-192`},{value:`aes256`,label:`AES-256`}],Cl=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],wl=[{value:`0`,label:`Store (no compression)`},{value:`1`,label:`Fastest`},{value:`5`,label:`Normal`},{value:`9`,label:`Maximum`},{value:`-1`,label:`Automatic`}];function Tl({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=Kn(),a=(0,_.useRef)(null),[o,s]=(0,_.useState)(e),[c,l]=(0,_.useState)(t),[u,d]=(0,_.useState)(`zip`),[f,p]=(0,_.useState)(`5`),[m,h]=(0,_.useState)(`default`),[g,v]=(0,_.useState)(`none`),[y,b]=(0,_.useState)(``),[x,S]=(0,_.useState)(`0`),[C,w]=(0,_.useState)(!1);(0,_.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let T=bl.find(e=>e.value===u)??bl[0],E=u===`zip`||u===`zipx`,D=g!==`none`,O=E||u===`7z`,ee=u===`zip`||u===`7z`,te=async()=>{if(C||!c.trim()||!o||D&&y.length===0)return;w(!0);let e=await r({directory:o,name:c.trim(),format:u,level:T.level?Number(f):0,method:E?m:null,encryption:O?g:`none`,password:D?y:void 0,splitSize:ee?Number(x):0});w(!1),e&&n()};return(0,Pc.createPortal)((0,X.jsx)(El,{onPointerDown:e=>{e.target===e.currentTarget&&!C&&n()},children:(0,X.jsxs)(Dl,{"aria-modal":`true`,role:`dialog`,children:[(0,X.jsx)(Ol,{children:i(`Compress to…`)}),(0,X.jsxs)(kl,{children:[(0,X.jsx)(Al,{children:i(`Archive name`)}),(0,X.jsx)(jl,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&te()}}),(0,X.jsx)(Ml,{children:T.extension})]}),(0,X.jsxs)(kl,{children:[(0,X.jsx)(Al,{children:i(`Format`)}),(0,X.jsx)(fl,{onChange:e=>d(e),options:bl.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,X.jsxs)(kl,{children:[(0,X.jsx)(Al,{children:i(`Method`)}),(0,X.jsx)(fl,{disabled:!E,onChange:h,options:xl.map(e=>({...e,label:i(e.label)})),value:E?m:`default`,width:236,zIndex:3700})]}),(0,X.jsxs)(kl,{children:[(0,X.jsx)(Al,{children:i(`Encryption`)}),(0,X.jsx)(fl,{disabled:!O,onChange:e=>{v(e),e===`none`&&b(``)},options:Sl.map(e=>({...e,label:i(e.label)})),value:O?g:`none`,width:236,zIndex:3700})]}),D&&(0,X.jsxs)(kl,{children:[(0,X.jsx)(Al,{children:i(`Password`)}),(0,X.jsx)(jl,{autoFocus:!0,onChange:e=>b(e.target.value),type:`password`,value:y})]}),(0,X.jsxs)(kl,{children:[(0,X.jsx)(Al,{children:i(`Split volumes`)}),(0,X.jsx)(fl,{disabled:!ee,onChange:S,options:Cl.map(e=>({...e,label:i(e.label)})),value:ee?x:`0`,width:236,zIndex:3700})]}),(0,X.jsxs)(kl,{children:[(0,X.jsx)(Al,{children:i(`Compression level`)}),(0,X.jsx)(fl,{disabled:!T.level,onChange:p,options:wl.map(e=>({...e,label:i(e.label)})),value:T.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,X.jsxs)(kl,{$stack:!0,children:[(0,X.jsx)(Al,{children:i(`Destination`)}),(0,X.jsxs)(Nl,{children:[(0,X.jsx)(Pl,{title:o,children:o}),(0,X.jsx)(Il,{disabled:C,onClick:()=>void _c(o).then(e=>{e&&s(e)}),type:`button`,children:i(`Choose folder…`)})]})]}),(0,X.jsxs)(Fl,{children:[(0,X.jsx)(Il,{disabled:C,onClick:n,type:`button`,children:i(`Cancel`)}),(0,X.jsx)(Ll,{disabled:C||!c.trim()||D&&y.length===0,onClick:()=>void te(),type:`button`,children:i(C?`Compressing…`:`Compress`)})]})]})}),document.body)}var El=J.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Yc}
`,Dl=J.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Wc}
`,Ol=J.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,kl=J.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,Al=J.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,jl=J.input`
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
`,Ml=J.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,Nl=J.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,Pl=J.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Fl=J.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,Il=J.button`
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
`,Ll=J(Il)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Rl({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=Kn(),c=(0,_.useRef)(null);return(0,_.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,Pc.createPortal)((0,X.jsx)(zl,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,X.jsxs)(Bl,{role:`alertdialog`,"aria-modal":`true`,children:[(0,X.jsx)(Vl,{children:t}),(0,X.jsx)(Hl,{children:n}),(0,X.jsxs)(Ul,{children:[(0,X.jsx)(Wl,{onClick:o,type:`button`,children:s(`Cancel`)}),(0,X.jsx)(Wl,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var zl=J.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Yc}
`,Bl=J.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Wc}
`,Vl=J.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Hl=J.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Ul=J.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Wl=J.button`
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
`,Gl=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),Kl=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),ql=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),Jl=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function Yl({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=Kn(),[l,u]=(0,_.useState)(!1),[d,f]=(0,_.useState)(!1),[p,m]=(0,_.useState)(!1),[h,g]=(0,_.useState)(0),[v,y]=(0,_.useState)(0),[b,x]=(0,_.useState)(null),[S,C]=(0,_.useState)(!1),[w,T]=(0,_.useState)(!1),E=(0,_.useRef)(null),D=(0,_.useRef)(null),O=(0,_.useRef)(null),[ee,te]=(0,_.useState)(()=>{let e=Ya(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),ne=e?.path??null,k=xa(ne),A=e?Xl(e.name):``,j=!!e&&!e.isDirectory&&Gl.has(A),M=!!e&&!e.isDirectory&&Kl.has(A),N=!!e&&!e.isDirectory&&ql.has(A),P=!!e&&!e.isDirectory&&Jl.has(A),F=!!e&&!e.isDirectory&&A===`pdf`,I=Ea(j?k:null,512,e?.modified??0),L=Da(N?k:null,e?.modified??0,A),R=Da(j||M?k:null,e?.modified??0,A),re=Oa(F?k:null,e?.modified??0),ie=ba(!j&&!M&&!N&&!P&&!F?k:null,e?.isDirectory??!1);if((0,_.useEffect)(()=>{u(!1),f(!1),m(!1),g(0),y(0),T(!1)},[ne]),(0,_.useEffect)(()=>{if(!k||!P){x(null),C(!1);return}let e=!0;return C(!0),x(null),ur(k).then(t=>{e&&(x(t),C(!1))},()=>{e&&(x({text:null,truncated:!1,error:`Could not read this file.`}),C(!1))}),()=>{e=!1}},[k,P]),!e&&!s)return null;let z=e=>{D.current={x:e.clientX,width:t},e.currentTarget.setPointerCapture(e.pointerId)},ae=e=>{let t=D.current;t&&n(Math.max(220,Math.min(560,t.width+t.x-e.clientX)))},oe=e=>{D.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},se=e=>{O.current={y:e.clientY,height:ee},e.currentTarget.setPointerCapture(e.pointerId)},ce=e=>{let t=O.current;if(!t)return;let n=Math.max(80,Math.min(560,t.height+e.clientY-t.y));te(n),Xa(`yafm.preview.media.height`,n)},le=e=>{O.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,X.jsxs)(Ql,{children:[r&&(0,X.jsx)($l,{onPointerDown:z,onPointerMove:ae,onPointerUp:oe,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,X.jsx)(eu,{style:{width:r?t:0},children:(0,X.jsxs)(tu,{children:[(0,X.jsx)(ls,{size:56}),(0,X.jsx)(`span`,{children:s})]})})]});let ue=()=>{let e=E.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,X.jsxs)(Ql,{children:[r&&(0,X.jsx)($l,{onPointerDown:z,onPointerMove:ae,onPointerUp:oe,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,X.jsxs)(eu,{style:{width:r?t:0},children:[(0,X.jsx)(nu,{style:{height:ee},children:j&&R&&!l?(0,X.jsxs)(iu,{onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),children:[(0,X.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:ue,onDurationChange:e=>g(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{g(e.currentTarget.duration||0),y(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>y(e.currentTarget.currentTime),playsInline:!0,poster:I??void 0,preload:`metadata`,ref:E,src:R}),!d&&(0,X.jsx)(au,{onClick:ue,title:c(`Play`),type:`button`,children:(0,X.jsx)(fc,{size:28})}),p&&(0,X.jsxs)(ou,{onClick:e=>e.stopPropagation(),children:[(0,X.jsxs)(su,{children:[(0,X.jsx)(`span`,{children:Zl(v)}),(0,X.jsx)(`span`,{children:Zl(h)})]}),(0,X.jsx)(cu,{"aria-label":c(`Seek`),max:h||0,min:0,onChange:e=>{let t=E.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,y(n)},step:.1,type:`range`,value:Math.min(v,h||0)})]})]}):M&&R?(0,X.jsx)(`audio`,{controls:!0,src:R}):N&&L?(0,X.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:L}):F&&re&&!w?(0,X.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>T(!0),src:re}):F?(0,X.jsx)(us,{size:64}):P?(0,X.jsx)(lu,{children:S||!b?(0,X.jsx)(du,{children:c(`Loading…`)}):b.error?(0,X.jsx)(du,{children:b.error}):(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(uu,{children:b.text}),b.truncated&&(0,X.jsx)(du,{children:c(`Showing the first 256 KB.`)})]})}):j&&I?(0,X.jsx)(`img`,{alt:``,src:I}):ie?(0,X.jsx)(`img`,{alt:``,src:ie}):e.isDirectory?(0,X.jsx)(ls,{size:64}):(0,X.jsx)(us,{size:64})}),(0,X.jsx)(ru,{onDoubleClick:()=>{te(210),Xa(`yafm.preview.media.height`,210)},onPointerDown:se,onPointerMove:ce,onPointerUp:le,title:c(`Drag to resize; double-click to reset`)}),(0,X.jsxs)(fu,{children:[(0,X.jsx)(pu,{title:e.path,children:e.name}),o&&(0,X.jsx)(mu,{children:o}),(0,X.jsx)(hu,{children:e.fields.map(e=>(0,X.jsxs)(gu,{children:[(0,X.jsx)(_u,{children:e.label}),(0,X.jsx)(vu,{title:e.value,children:e.value})]},e.label))})]})]})]})}function Xl(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function Zl(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var Ql=J.div`
    display: flex;
    flex-shrink: 0;
    align-self: stretch;
    min-height: 0;
`,$l=J.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,eu=J.aside`
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
    background: var(--bg-secondary);
    transition: width 180ms cubic-bezier(0.22, 1, 0.36, 1);
`,tu=J.div`
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
`,nu=J.div`
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
`,ru=J.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,iu=J.div`
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
`,au=J.button`
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
`,ou=J.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 24px 10px 8px;
    background: linear-gradient(to top, rgba(var(--bg-rgb), 0.92), rgba(var(--bg-rgb), 0));
`,su=J.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,cu=J.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,lu=J.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: var(--bg-secondary);
`,uu=J.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,du=J.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,fu=J.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,pu=J.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,mu=J.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,hu=J.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,gu=J.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,_u=J.span`
    color: var(--text-muted);
`,vu=J.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,yu=[`quick`,`frequent`,`recent`,`home`,`drives`],bu=yu,xu={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`},Su={folder:e=>(0,X.jsx)(ls,{size:e}),home:e=>(0,X.jsx)(cs,{size:e}),desktop:e=>(0,X.jsx)(Gs,{size:e}),documents:e=>(0,X.jsx)(Ks,{size:e}),downloads:e=>(0,X.jsx)(qs,{size:e}),pictures:e=>(0,X.jsx)(Js,{size:e}),music:e=>(0,X.jsx)(Ys,{size:e}),videos:e=>(0,X.jsx)(Xs,{size:e}),drive:e=>(0,X.jsx)(ds,{size:e}),image:e=>(0,X.jsx)(js,{size:e}),video:e=>(0,X.jsx)(Ms,{size:e}),audio:e=>(0,X.jsx)(Ns,{size:e}),text:e=>(0,X.jsx)(ks,{size:e}),code:e=>(0,X.jsx)(As,{size:e}),clock:e=>(0,X.jsx)(Cs,{size:e}),star:e=>(0,X.jsx)(Zs,{size:e}),file:e=>(0,X.jsx)(us,{size:e}),archive:e=>(0,X.jsx)(Ps,{size:e}),pdf:e=>(0,X.jsx)(Fs,{size:e}),executable:e=>(0,X.jsx)(Is,{size:e}),font:e=>(0,X.jsx)(Ls,{size:e}),database:e=>(0,X.jsx)(Rs,{size:e}),config:e=>(0,X.jsx)(zs,{size:e}),spreadsheet:e=>(0,X.jsx)(Bs,{size:e}),presentation:e=>(0,X.jsx)(Vs,{size:e}),document:e=>(0,X.jsx)(Hs,{size:e}),app:e=>(0,X.jsx)(Os,{size:e}),gear:e=>(0,X.jsx)(ys,{size:e}),pin:e=>(0,X.jsx)(bs,{size:e}),trash:e=>(0,X.jsx)(Ts,{size:e}),overview:e=>(0,X.jsx)(Us,{size:e}),book:e=>(0,X.jsx)(Qs,{size:e}),briefcase:e=>(0,X.jsx)($s,{size:e}),cloud:e=>(0,X.jsx)(ec,{size:e}),gamepad:e=>(0,X.jsx)(tc,{size:e}),camera:e=>(0,X.jsx)(nc,{size:e}),terminal:e=>(0,X.jsx)(rc,{size:e}),server:e=>(0,X.jsx)(ic,{size:e}),package:e=>(0,X.jsx)(ac,{size:e}),globe:e=>(0,X.jsx)(oc,{size:e}),heart:e=>(0,X.jsx)(sc,{size:e})};function Cu(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function wu(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??yu)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||bu.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=Cu(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${xu[n]??n}${Tu(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Tu(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Eu({panel:e,size:t=16}){let n=Sa(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,X.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?Su[e.icon]:void 0;if(r)return(0,X.jsx)(X.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,X.jsx)(ls,{size:t});case`recent`:return(0,X.jsx)(Cs,{size:t});case`frequent`:return(0,X.jsx)(Zs,{size:t});case`drives`:return(0,X.jsx)(ds,{size:t});case`home`:return(0,X.jsx)(cs,{size:t});default:return(0,X.jsx)(ls,{size:t})}}function Du({place:e,size:t=18}){let n=Sa(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,X.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&Su[e.icon]?(0,X.jsx)(X.Fragment,{children:Su[e.icon](t)}):(0,X.jsx)(ls,{size:t})}var Ou=`#64748b`;function ku(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Au({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=Kn(),[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)(`#2dd4bf`),f=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},v=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},y=Math.max(8,Math.min(e,window.innerWidth-272)),b=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,Pc.createPortal)((0,X.jsxs)(ju,{"data-tag-menu":`true`,ref:f,style:{left:y,top:b},children:[(0,X.jsxs)(Mu,{children:[(0,X.jsx)(`span`,{children:s(`Tags`)}),(0,X.jsx)(Nu,{onClick:o,title:s(`Close`),type:`button`,children:(0,X.jsx)(Ds,{size:11})})]}),(0,X.jsxs)(Pu,{children:[p.length===0&&(0,X.jsx)(Ru,{children:s(`No tags yet.`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,X.jsxs)(Fu,{children:[(0,X.jsx)(Iu,{"aria-label":s(`Color of {tag}`,{tag:e}),onChange:t=>g(e,t.target.value),title:s(`Change this tag's color`),type:`color`,value:t}),(0,X.jsxs)(Lu,{$color:t,$ink:ku(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,X.jsx)(Es,{size:11}),(0,X.jsx)(`span`,{children:e})]})]},e)})]}),(0,X.jsxs)(zu,{children:[(0,X.jsx)(Iu,{"aria-label":s(`Color of the new tag`),onChange:e=>d(e.target.value),title:s(`Color of the new tag`),type:`color`,value:u}),(0,X.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),v())},placeholder:s(`New tag`),spellCheck:!1,value:c}),(0,X.jsx)(Bu,{onClick:v,type:`button`,children:s(`Add`)})]})]}),document.body)}var ju=J.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    ${Wc}
`,Mu=J.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,Nu=J.button`
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
`,Pu=J.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,Fu=J.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Iu=J.input`
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
`,Lu=J.button`
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
`,Ru=J.span`
    font-size: 11px;
    color: var(--text-muted);
`,zu=J.div`
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
`,Bu=J.button`
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
`,Vu={file:us,folder:ls,text:ks,code:As,image:js,video:Ms,audio:Ns,archive:Ps,pdf:Fs,executable:Is,font:Ls,database:Rs,config:zs,spreadsheet:Bs,presentation:Vs,document:Hs},Hu={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Uu(e){let t=e.lastIndexOf(`.`);return t>0?Hu[e.slice(t).toLowerCase()]??`file`:`file`}function Wu({name:e,size:t}){let n=Vu[e??`file`]??us;return(0,X.jsx)(n,{size:t})}function Gu({path:e,name:t,isDirectory:n,size:r=18}){let i=ba(e,n);return i?(0,X.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,X.jsx)(ls,{size:r}):(0,X.jsx)(Wu,{name:Uu(t),size:r})}var Ku=`application/x-yafm-paths`,qu=[Ku,`text/uri-list`];function Ju(e){return e?.types.some(e=>qu.includes(e.toLowerCase()))??!1}function Yu(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(Ku);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(Zu).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var Xu=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function Zu(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return Xu?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function Qu(e,t,n=!0){e.dataTransfer.setData(Ku,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function $u({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let p=Kn(),[m,h]=(0,_.useState)(()=>new Set),[g,v]=(0,_.useState)(!1),y=(0,_.useRef)(null),b=(0,_.useMemo)(()=>e.filter(e=>m.has(e.path)),[e,m]),x=(0,_.useMemo)(()=>t.filter(e=>m.has(e.path)),[t,m]),S=(0,_.useRef)(null);if((0,_.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=S.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&Ju(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=Yu(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let C=new Set([...e,...t].map(e=>e.path)),w=C.size>0&&[...C].every(e=>m.has(e)),T=C.size,E=e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},D=()=>{h(w?new Set:C)},O=e=>{y.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),v(!0)},ee=e=>{let t=y.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},te=e=>{y.current&&(y.current=null,v(!1),e.currentTarget.releasePointerCapture(e.pointerId))},ne=()=>{let e=b.map(e=>e.path);e.length!==0&&(c(e),h(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},k=()=>{let e=b.map(e=>e.path);e.length!==0&&d(e)},A=()=>{let e=new Map;for(let t of b)e.set(t.path,!0);for(let t of x)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),h(new Set)},j=(e,t)=>{let n=m.has(e.path);return(0,X.jsxs)(dd,{$checked:n,draggable:!0,onClick:()=>E(e.path),onDragStart:r=>{Qu(r,n&&m.size>0?[...new Set([...b,...x].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,X.jsx)(fd,{$checked:n,onClick:t=>{t.stopPropagation(),E(e.path)},type:`button`,children:n&&(0,X.jsx)(Es,{size:8})}),(0,X.jsx)(Gu,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,X.jsxs)(pd,{children:[(0,X.jsx)(md,{children:e.name}),(0,X.jsx)(hd,{children:Zi(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},M=e=>{Ju(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,X.jsxs)(ed,{$dragging:g,"data-tray":`true`,ref:S,style:{left:i.x,top:i.y},onDragEnter:M,onDragOver:M,onDrop:e=>{let{paths:t}=Yu(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,X.jsxs)(td,{onPointerDown:O,onPointerMove:ee,onPointerUp:te,children:[(0,X.jsxs)(nd,{children:[(0,X.jsx)(ac,{size:13}),p(`Tray`),(0,X.jsx)(rd,{children:T})]}),(0,X.jsxs)(id,{onPointerDown:e=>e.stopPropagation(),children:[(0,X.jsx)(ad,{onClick:D,title:p(w?`Select none`:`Select all`),type:`button`,children:p(w?`None`:`All`)}),(0,X.jsx)(ad,{onClick:l,title:p(`Remove everything from the tray`),type:`button`,children:p(`Clear`)}),(0,X.jsx)(od,{onClick:u,title:p(`Hide the tray`),type:`button`,children:(0,X.jsx)(Ds,{size:10})})]})]}),(0,X.jsxs)(sd,{children:[(0,X.jsxs)(ld,{children:[p(`In this app`),(0,X.jsx)(rd,{children:e.length})]}),e.length===0&&(0,X.jsx)(cd,{children:p(`Drag files or folders here`)}),e.map(e=>j(e,!0)),t.length>0&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(ld,{$clipboard:!0,children:[p(`Clipboard`),(0,X.jsx)(rd,{children:t.length}),n&&(0,X.jsx)(ud,{children:p(`cut`)})]}),t.map(e=>j(e,n))]})]}),(0,X.jsxs)(gd,{children:[(0,X.jsx)(_d,{$plain:!0,disabled:b.length===0,onClick:k,title:p(`Write the selected tray entries to the system clipboard`),type:`button`,children:p(`To clipboard`)}),(0,X.jsx)(_d,{disabled:m.size===0||!a,onClick:A,type:`button`,children:p(`Move here`)}),(0,X.jsx)(_d,{$danger:!0,disabled:b.length===0,onClick:ne,type:`button`,children:p(`Remove`)})]})]})}var ed=J.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${Fc}
    ${Wc}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,td=J.div`
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
`,nd=J.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,rd=J.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,id=J.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,ad=J.button`
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
`,od=J.button`
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
`,sd=J.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,cd=J.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,ld=J.div`
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
`,ud=J.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,dd=J.div`
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
`,fd=J.button`
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
`,pd=J.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,md=J.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,hd=J.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,gd=J.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,_d=J.button`
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
`,vd=new Map,yd=new Set,bd=0;function xd(){bd+=1;for(let e of yd)e()}function Sd(e,t){t?vd.set(e,t):vd.delete(e),xd()}function Cd(e){return vd.has(e)}function wd(e,t,n){vd.get(e)?.(t,n)}function Td(e){return yd.add(e),()=>yd.delete(e)}function Ed(){return bd}function Dd(e){return(0,_.useSyncExternalStore)(Td,Ed,Ed),{available:Cd(e),open:(t,n)=>wd(e,t,n)}}function Od(e){return[...vd.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function kd(e){return(0,_.useSyncExternalStore)(Td,Ed,Ed),{available:Od(e).length>0,open:(t,n)=>{let r=Od(e).at(-1);r&&wd(r,t,n)}}}var Ad=60,jd=300,Md=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],Nd=190,Pd=120;function Fd({listing:e,loading:t,error:n,find:r=Aa,view:i,showImages:a,imageStripHeight:o=Nd,onImageStripHeight:s,onSort:c,onSetTags:l,onOpen:u,onOpenFile:d,showCheckboxes:f=!0,openOnSingleClick:p=!1,shortcuts:m=Ti,enableShortcuts:h=!0,refreshToken:g=0,onRefresh:v,onClipboardChanged:y,onTransfer:b,onAddToTray:x,onPaste:S,confirmDelete:C=!1,previewVideoAudio:w=!1,previewVideoAutoplay:T=!1,showDetails:E=!0,onPreviewInfo:D,onActivate:O,groupOf:ee,onGridScroll:te,gridFooter:ne,allowBackgroundMenu:k=!0,readOnly:A=!1,onSelectionChange:j,onSelectionCountChange:M,selectionMenuRequest:N,selectionMenuId:P,singleSelect:F=!1,pendingRename:I=null,pendingRenameToken:L=0}){let R=Kn(),re=Ka(),ie=(0,_.useRef)(null),z=(0,_.useRef)(null),ae=(0,_.useRef)(null),[oe,se]=(0,_.useState)(jd),[ce,le]=(0,_.useState)({top:0,height:640}),ue=(0,_.useRef)(null),B=(0,_.useRef)(null),[V,de]=(0,_.useState)(null),[fe,pe]=(0,_.useState)(o),[H,U]=(0,_.useState)(()=>new Set),me=(0,_.useRef)(H),he=(0,_.useRef)([]);me.current=H,(0,_.useEffect)(()=>j?.([...H]),[H,j]),(0,_.useEffect)(()=>M?.(H.size),[H,M]),(0,_.useEffect)(()=>{let e=N;if(!e||e.token===ve.current)return;ve.current=e.token;let t=[...me.current];t.length!==0&&(_e({x:e.x,y:e.y,paths:t,background:!1}),ei().then(je,()=>je(!1)))},[N]);let[ge,_e]=(0,_.useState)(null),ve=(0,_.useRef)(0),[ye,be]=(0,_.useState)(null),[xe,Se]=(0,_.useState)(null),[Ce,we]=(0,_.useState)(null),W=(0,_.useRef)(Ce);W.current=Ce;let Te=(0,_.useRef)(0),Ee=(0,_.useRef)(O);Ee.current=O;let[De,Oe]=(0,_.useState)(()=>{let e=Ya(`yafm.preview.width`,320);return e>=220?e:320}),ke=(0,_.useCallback)(e=>{Oe(e),Xa(`yafm.preview.width`,e)},[]),[Ae,je]=(0,_.useState)(!1),Me=(0,_.useCallback)((e,t)=>{let n=[...me.current];n.length!==0&&(_e({x:e,y:t,paths:n,background:!1}),ei().then(je,()=>je(!1)))},[]);(0,_.useEffect)(()=>{if(P)return Sd(P,H.size>0?Me:null),()=>Sd(P,null)},[P,H,Me]),(0,_.useEffect)(()=>{U(new Set),we(null),_e(null),B.current=null},[e?.path]),(0,_.useEffect)(()=>{pe(o)},[o]),(0,_.useEffect)(()=>{U(new Set),we(null),B.current=null},[g]);let Ne=e=>{ue.current={y:e.clientY,height:fe},e.currentTarget.setPointerCapture(e.pointerId)},Pe=e=>{let t=ue.current;if(!t)return;let n=Math.max(Pd,Math.round(window.innerHeight*.7));pe(Math.min(n,Math.max(Pd,t.height+t.y-e.clientY)))},Fe=e=>{ue.current&&(ue.current=null,e.currentTarget.releasePointerCapture(e.pointerId),s?.(fe))},Ie=()=>{pe(Nd),s?.(Nd)},Le=r.query.length>0,Re=(0,_.useMemo)(()=>Md.filter(e=>i.columns?.includes(e.id)),[i.columns]),ze=i.columns?.includes(`linkTarget`)??!1,Be=(0,_.useMemo)(()=>`minmax(160px, 1fr) ${Re.map(e=>`${e.width}px`).join(` `)}`.trim(),[Re]),Ve=(0,_.useMemo)(()=>e?Rd(e.entries.map(t=>{let n=t.isDirectory?qa(re,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:Le?ja(i,r):null,tags:e.tags[t.name]??[]}}).filter(e=>!Le||r.mode===`dim`||e.ranges!==null),i,e,R):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,Le,r,re,i.sort,i.sortDescending,R]);he.current=Ve;let He=Math.max(40,i.iconSize+20),Ue=Math.max(0,Math.floor(ce.top/He)-4),We=Math.min(Ve.length,Ue+Math.ceil(ce.height/He)+10),G=(0,_.useMemo)(()=>Ve.slice(Ue,We),[Ve,Ue,We]);(0,_.useEffect)(()=>{let e=ae.current;if(!e||i.mode!==`list`)return;let t=()=>le(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,_.useEffect)(()=>{le(e=>({...e,top:0})),ae.current&&(ae.current.scrollTop=0)},[e?.path]),(0,_.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=Ve.findIndex(e=>e.entry.fullPath===r.currentPath),t=ae.current;if(e<0||!t)return;let n=e*He;(n<t.scrollTop||n+He>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else ie.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,Ve,He]);let Ge=(0,_.useMemo)(()=>Ve.slice(0,oe),[Ve,oe]);(0,_.useEffect)(()=>{se(jd)},[e?.path]),(0,_.useEffect)(()=>{if(!r.currentPath)return;let e=Ve.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&se(t=>Math.max(t,e+jd))},[r.currentPath,Ve]);let Ke=(0,_.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&se(e=>Math.min(Ve.length,e+jd))},[Ve.length]),qe=i.mode===`grid`,Je=(0,_.useMemo)(()=>{if(!qe)return[];if(!ee)return Vd(Ge,Bd);let e=[],t=new Map;for(let n of Ge){let r=ee(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[Ge,qe,ee]),Ye=(0,_.useMemo)(()=>a?Ve.filter(e=>!e.entry.isDirectory&&Ha(e.entry.name)):[],[Ve,a]),K=Ye.length,Xe=(0,_.useMemo)(()=>Ye.slice(0,Ad),[Ye]),Ze=(0,_.useMemo)(()=>a?Vd(Xe,zd):[],[Xe,a]),Qe=(0,_.useMemo)(()=>Ve.map(e=>e.entry.fullPath),[Ve]),$e=Ve.length>0&&H.size>=Ve.length,et=H.size>0&&!$e,tt=()=>{F||($e?at():U(new Set(Qe)))},nt=e?.path??``,rt=(0,_.useCallback)((e,t)=>{if(F){B.current=t,U(new Set([t]));return}let n=e.ctrlKey||e.metaKey;U(r=>{if(e.shiftKey&&B.current!==null){let e=Qe.indexOf(B.current),i=Qe.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(Qe[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),B.current=t,e}return B.current=t,new Set([t])})},[Qe,F]),it=(0,_.useCallback)(e=>{F?(B.current=e,U(new Set([e]))):(B.current=e,U(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[F]),at=(0,_.useCallback)(()=>{B.current=null,U(new Set)},[]);(0,_.useEffect)(()=>{if(L===0||!I||Te.current===L||!e?.entries.some(e=>e.fullPath===I))return;Te.current=L,B.current=I,U(new Set([I])),we({path:I,value:Xi(I)});let t=Ve.findIndex(e=>e.entry.fullPath===I),n=ae.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*He;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(I)}"]`)?.scrollIntoView({block:`nearest`})})}},[ae,e,I,L,He,Ve,i.mode]),(0,_.useEffect)(()=>{if(!Ce)return;let e=Ve.findIndex(e=>e.entry.fullPath===Ce.path),t=ae.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*He;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Ce.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[ae,Ce,He,Ve,i.mode]);let ot=(0,_.useCallback)(()=>_e(null),[]),st=(0,_.useCallback)((e,t)=>{e.isDirectory?u(e.fullPath,Oi(t)):d?.(e.fullPath,Oi(t))},[u,d]),ct=(0,_.useCallback)((e,t,n)=>{de({entry:e,x:t,y:n})},[]),lt=(0,_.useRef)(null),ut=(0,_.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;Qu(e,H.has(n)?[...H]:[n])},[H]),dt=(0,_.useCallback)(e=>{if(!Ju(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);lt.current=t?.dataset.directory===`true`?t.dataset.path??nt:nt,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[nt]),ft=(0,_.useCallback)(e=>{if(A)return;let{paths:t,move:n}=Yu(e),r=lt.current??nt;lt.current=null,t.length!==0&&b&&(e.preventDefault(),b(t,r,!e.ctrlKey&&n))},[nt,b,A]),pt=(0,_.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),A||!t&&!k)return;let n=me.current;t&&!n.has(t)&&U(new Set([t])),t&&(B.current=t);let r=t?n.has(t)?[...n]:[t]:[];_e({x:e.clientX,y:e.clientY,paths:r,background:!t}),ei().then(je,()=>je(!1))},[k,nt]),mt=(0,_.useCallback)(()=>v?.(),[v]),ht=(e,t)=>{B.current=e,U(new Set([e])),t&&we({path:e,value:Xi(e)}),mt()},gt=ye&&(0,X.jsx)(Tl,{initialDirectory:nt,initialName:ye.name,onCancel:()=>be(null),onCompress:async e=>{let t=await Si(ye.paths,e);return!t.ok||!t.path?(Sc(t.error??R(`Could not create the archive.`)),!1):(ht(t.path,!1),!0)}}),_t=async(e,t=!1)=>{await $r(e,t)&&(je(!0),y?.())},vt=async e=>{e&&(await ii(e)?(mt(),S?.()):Sc(R(`Nothing on the clipboard could be pasted here.`)))},yt=async(e,t=!1)=>{if(!nt)return;let n=e===null?await si(nt,t):await di(nt,e);!n.ok||n.path===null?Sc(n.error??R(`Could not create the item.`)):(B.current=n.path,U(new Set([n.path])),we({path:n.path,value:Xi(n.path)}),mt())},bt=e=>{U(new Set([e.fullPath])),B.current=e.fullPath,we({path:e.fullPath,value:e.name})},xt=(0,_.useCallback)(e=>we(t=>t&&{...t,value:e}),[]),St=(0,_.useCallback)(()=>we(null),[]),Ct=(0,_.useCallback)(async()=>{let e=W.current;if(we(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=he.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await oi(e.path,t);r.ok?(at(),mt()):Sc(r.error??R(`Could not rename the entry.`))},[at,mt,R]),wt=async(e,t=!1)=>{if((t||C)&&!await Tt(e,t))return;let n=await ai(e,t);if(!n.ok&&n.needsPermanent){if(!await Tt(e,!0))return;n=await ai(e,!0)}if(n.ok)at(),mt();else{if(n.cancelled)return;Sc(n.error??R(t?`Could not delete the selection.`:`Could not move the selection to the recycle bin.`))}},Tt=(0,_.useCallback)((e,t)=>new Promise(n=>Se({paths:e,permanent:t,resolve:n})),[]),Et=(0,_.useCallback)(e=>{Se(t=>(t?.resolve(e),null))},[]);(0,_.useEffect)(()=>{if(!h||ge)return;let e=e=>{if(Mi(e.target))return;Ee.current?.();let t=ki(e),n=[...H],r=n.length===1?Ve.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(Qe.length===0)return;e.preventDefault();let n=B.current&&Qe.includes(B.current)?B.current:H.size===1?[...H][0]:null,r=n?Qe.indexOf(n):-1,i=t===`home`?0:t===`end`?Qe.length-1:Math.max(0,Math.min(Qe.length-1,r+(t===`arrowdown`?1:-1))),a=Qe[i];U(new Set([a])),B.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===m.copy?i(()=>{n.length>0&&_t(n)}):t===m.cut?i(()=>{n.length>0&&_t(n,!0)}):t===m.paste?i(()=>void vt(nt)):t===m.delete?i(()=>{n.length>0&&wt(n)}):t===m.deletePermanently?i(()=>{n.length>0&&wt(n,!0)}):t===m.selectAll?i(()=>{U(new Set(Qe)),B.current=Qe[0]??null}):t===m.invertSelection?i(()=>{U(new Set(Qe.filter(e=>!H.has(e)))),B.current=Qe[0]??null}):t===m.rename&&r?i(()=>void bt(r)):t===m.open&&r?i(()=>{r.isDirectory?u(r.fullPath):d?.(r.fullPath)}):t===m.newFolder||t===`f10`?i(()=>void yt(null)):t===m.terminal?i(()=>void mi(nt)):t===m.properties?i(()=>void fi(n.length>0?n:nt?[nt]:[])):t===m.refresh&&i(mt)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[Qe,_t,yt,nt,h,ge,u,d,vt,mt,wt,bt,Ve,H,m]);let Dt=xe&&(0,X.jsx)(Rl,{confirmLabel:xe.permanent?R(`Delete`):R(`Move`),danger:xe.permanent,message:xe.permanent?R(`Permanently delete {target}? This cannot be undone.`,{target:xe.paths.length===1?R(`this item`):R(`{count} items`,{count:xe.paths.length})}):R(`Move {target} to the recycle bin?`,{target:xe.paths.length===1?R(`this item`):R(`{count} items`,{count:xe.paths.length})}),onCancel:()=>Et(!1),onConfirm:()=>Et(!0),open:!0,title:xe.permanent?R(`Delete permanently`):R(`Move to the recycle bin`)}),q=(0,_.useMemo)(()=>{if(!e||H.size===0)return null;let t=Qe.find(e=>H.has(e));return t?Ve.find(e=>e.entry.fullPath===t)?.entry??null:null},[Qe,e,Ve,H]),Ot=(0,_.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:Xi(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:R(`Type`),value:R(`Folder`)},{label:R(`Location`),value:e.parent??`—`},{label:R(`Path`),value:e.path},{label:R(`Size`),value:Pi(t)},{label:R(`Items`),value:Ni(R,n,`1 item`,`{count} items`)},{label:R(`Modified`),value:`—`},{label:R(`Created`),value:`—`},{label:R(`Attributes`),value:`—`}]}},[e,R]),kt=(0,_.useMemo)(()=>{if(!q||!e)return null;let t=q.isDirectory?e.folderSizes[q.name]:void 0,n=e.tags[q.name]??[],r=q.name.lastIndexOf(`.`),i=r>0&&r<q.name.length-1?q.name.slice(r+1).toUpperCase():`—`;return{name:q.name,path:q.fullPath,isDirectory:q.isDirectory,size:q.size,modified:q.modified,created:q.created,fields:[{label:R(`Type`),value:Wd(q,R)},{label:R(`Extension`),value:q.isDirectory?`—`:i},{label:R(`Location`),value:e.path},{label:R(`Full path`),value:q.fullPath},{label:R(`Size`),value:q.isDirectory?t===void 0?`—`:Pi(t):Pi(q.size)},...q.isDirectory?[{label:R(`Items`),value:`${e.counts[q.name]??`—`}`}]:[],{label:R(`Modified`),value:Vi(q.modified)},{label:R(`Created`),value:Vi(q.created)},{label:R(`Link status`),value:q.linkTarget==null?q.linkCount>1?R(`Hard link`):`—`:q.linkValid?`OK`:R(`Broken`)},...q.linkTarget?[{label:R(`Target`),value:q.linkTarget}]:[],...q.linkCount>1?[{label:R(`Links`),value:String(q.linkCount)}]:[],{label:R(`Attributes`),value:[q.isHidden?R(`Hidden`):``,q.isSystem?R(`System`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:R(`Tags`),value:n.join(`, `)}]:[]]}},[e,q,R]),At=ge?.paths.length===1?ge.paths[0]:null,jt=At?Ve.find(e=>e.entry.fullPath===At)?.entry:void 0,Mt=jt?{path:jt.fullPath,isDirectory:jt.isDirectory}:null,Nt=kt??Ot,Pt=(0,_.useRef)(D);Pt.current=D,(0,_.useEffect)(()=>{Pt.current?.(Nt)},[D,Nt]);let Ft=E&&Nt&&(0,X.jsx)(Yl,{info:Nt,onWidth:ke,selectionNote:H.size>1?Ni(R,H.size,`1 item selected`,`{count} items selected`):void 0,videoAudio:w,videoAutoplay:T,width:De});return n&&!e?(0,X.jsx)(Gf,{children:(0,X.jsx)(qf,{children:n})}):!e&&!t?(0,X.jsx)(Gf,{children:(0,X.jsx)(Kf,{children:R(`Nothing selected.`)})}):i.mode===`grid`?(0,X.jsxs)(lf,{onPointerDown:O,children:[(0,X.jsxs)(uf,{children:[(0,X.jsxs)(vf,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||at()},onContextMenu:e=>pt(e),onDragOver:dt,onDragStart:ut,onDrop:ft,onScroll:e=>{te?.(e.currentTarget),Ke(e.currentTarget)},children:[f&&Ve.length>0&&(0,X.jsxs)(of,{children:[(0,X.jsx)(rf,{$checked:!F&&$e,$partial:!F&&et,"aria-label":R($e?`Select none`:`Select all`),disabled:F,onClick:tt,title:R($e?`Select none`:`Select all`),type:`button`,children:$e?(0,X.jsx)(Es,{size:10}):et?(0,X.jsx)(af,{}):null}),(0,X.jsx)(`span`,{children:R($e?`Select none`:`Select all`)})]}),t&&!e?(0,X.jsx)(Cf,{$size:i.gridSize,children:(0,X.jsx)(Xd,{size:i.gridSize})}):(0,X.jsx)(Qd,{counts:e?.counts,currentPath:Le?r.currentPath:null,groups:Je,gridSize:i.gridSize,innerRef:ie,onContextMenu:pt,onOpen:u,onOpenFile:d,onRenameCancel:St,onRenameChange:xt,onRenameCommit:Ct,onSelect:rt,onToggle:it,openOnSingleClick:p,renaming:Ce,searching:Le,selected:H,showCheckboxes:f,showTarget:ze}),!t&&e&&Ve.length===0&&(0,X.jsx)(Wf,{children:(0,X.jsx)(Kf,{children:n??(Le&&r.mode===`hide`?R(`No entries match the search.`):R(`This folder is empty.`))})}),ne]}),ge&&(0,X.jsx)(ll,{canPaste:Ae,directory:nt,allowCompression:!0,menu:ge,onAddToTray:x,onArchiveCreated:ht,onClose:ot,onCompressTo:(e,t)=>be({paths:e,name:t}),onCopy:_t,onCreateFile:e=>void yt(e),onCreateFolder:e=>void yt(null,e),onDelete:wt,onOpen:u,onOpenFile:d,onPaste:vt,onRefresh:mt,onRename:e=>{let t=Ve.find(t=>t.entry.fullPath===e)?.entry;t&&bt(t)},shortcuts:m,target:Mt}),gt,Dt]}),Ft]}):(0,X.jsxs)(lf,{onPointerDown:O,children:[(0,X.jsxs)(uf,{children:[(0,X.jsxs)(df,{onScroll:e=>{ae.current&&ae.current.scrollLeft!==e.currentTarget.scrollLeft&&(ae.current.scrollLeft=e.currentTarget.scrollLeft)},ref:z,style:{gridTemplateColumns:Be},children:[(0,X.jsxs)(nf,{children:[f&&(0,X.jsx)(rf,{$checked:!F&&$e,$partial:!F&&et,"aria-label":R($e?`Select none`:`Select all`),disabled:F,onClick:e=>{e.stopPropagation(),tt()},title:R($e?`Select none`:`Select all`),type:`button`,children:$e?(0,X.jsx)(Es,{size:10}):et?(0,X.jsx)(af,{}):null}),(0,X.jsxs)(ff,{onClick:()=>c(`name`),type:`button`,children:[R(`Name`),Id(i,`name`)]})]}),Re.map(e=>(0,X.jsxs)(ff,{onClick:()=>c(e.id),type:`button`,children:[R(e.label),Id(i,e.id)]},e.id))]}),(0,X.jsxs)(pf,{onClick:e=>{e.target===e.currentTarget&&at()},onContextMenu:e=>pt(e),onDragOver:dt,onDragStart:ut,onDrop:ft,onScroll:e=>{z.current&&z.current.scrollLeft!==e.currentTarget.scrollLeft&&(z.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;le(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:ae,children:[t&&!e?(0,X.jsx)(Yd,{template:Be,columns:Re.length}):(0,X.jsxs)(X.Fragment,{children:[Ue>0&&(0,X.jsx)(`div`,{style:{height:Ue*He}}),G.map(t=>{let n=t.entry.fullPath;return(0,X.jsx)(ef,{current:Le&&n===r.currentPath,dim:Le&&t.ranges===null,height:He,iconSize:i.iconSize,innerRef:ie,listing:e,onContextMenu:pt,onOpen:st,onRenameCancel:St,onRenameChange:xt,onRenameCommit:Ct,onSelect:rt,onTagEdit:ct,onToggle:it,openOnSingleClick:p,renaming:Ce?.path===n?{value:Ce.value}:null,row:t,selected:H.has(n),showCheckboxes:f,showTarget:ze,template:Be,visible:Re},n)}),We<Ve.length&&(0,X.jsx)(`div`,{style:{height:(Ve.length-We)*He}})]}),!t&&e&&Ve.length===0&&(0,X.jsx)(Gf,{children:(0,X.jsx)(Kf,{children:n??(Le&&r.mode===`hide`?R(`No entries match the search.`):R(`This folder is empty.`))})})]}),a&&Ye.length>0&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(mf,{onDoubleClick:Ie,onPointerDown:Ne,onPointerMove:Pe,onPointerUp:Fe,title:R(`Drag to resize; double-click to reset`)}),(0,X.jsxs)(hf,{style:{height:fe},children:[(0,X.jsxs)(gf,{children:[R(`Preview`),(0,X.jsx)(_f,{children:K>Ad?`${Xe.length} / ${K}`:K})]}),(0,X.jsx)(vf,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||at()},onContextMenu:e=>pt(e),children:(0,X.jsx)(Qd,{counts:e?.counts,currentPath:Le?r.currentPath:null,groups:Ze,gridSize:i.gridSize,onContextMenu:pt,onOpen:u,onOpenFile:d,onSelect:rt,onToggle:it,openOnSingleClick:p,searching:Le,selected:H,showCheckboxes:f,showTarget:ze})})]})]}),V&&e&&(0,X.jsx)(Au,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>l?.(V.entry.name,e,t),onClose:()=>de(null),tags:e.tags[V.entry.name]??[],x:V.x,y:V.y}),ge&&(0,X.jsx)(ll,{canPaste:Ae,directory:nt,allowCompression:!0,menu:ge,onAddToTray:x,onArchiveCreated:ht,onClose:ot,onCompressTo:(e,t)=>be({paths:e,name:t}),onCopy:_t,onCreateFile:e=>void yt(e),onCreateFolder:e=>void yt(null,e),onDelete:wt,onOpen:u,onOpenFile:d,onPaste:vt,onRefresh:mt,onRename:e=>{let t=Ve.find(t=>t.entry.fullPath===e)?.entry;t&&bt(t)},shortcuts:m,target:Mt}),gt,Dt]}),Ft]})}function Id(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var Ld=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function Rd(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Wd(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:Ld.compare(String(r),String(i));return t.sortDescending?-o:o})}var zd=za.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Va(t.entry.name)===e})),Bd=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...zd.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function Vd(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function Hd(e){return Math.max(24,Math.min(e-56,160))}var Ud={file:`file`,folder:`folder`,text:`text file`,code:`source file`,image:`image`,video:`video`,audio:`audio`,archive:`archive`,pdf:`PDF`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Wd(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`Shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`Internet shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`Folder link`):t(`Symbolic link`);if(e.isDirectory)return t(`Folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(Ud[Uu(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`File`)}function Gd(e,t,n,r){switch(e){case`type`:return Wd(t,r);case`size`:return qd(t,n.folderSizes);case`modified`:return Vi(t.modified);case`created`:return Vi(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:r(`Broken`);default:return``}}function Kd({name:e,ranges:t}){if(!t||t.length===0)return(0,X.jsx)(X.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,X.jsx)(Uf,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,X.jsx)(X.Fragment,{children:n})}function qd(e,t){if(!e.isDirectory)return Pi(e.size);let n=t[e.name];return n===void 0?`—`:Pi(n)}function Jd({entry:e,size:t=18}){let n=(0,_.useRef)(null),[r,i]=(0,_.useState)(!1);(0,_.useEffect)(()=>{if(r)return;let e=n.current;if(!e)return;if(!(`IntersectionObserver`in window)){i(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(i(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[r]);let a=ba(r?e.fullPath:null,e.isDirectory,t>32),o=Sa(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,X.jsx)(tf,{$size:t,ref:n,children:e.iconSource?.startsWith(`icon:`)?(0,X.jsx)(Wu,{name:e.iconSource.slice(5),size:t}):o?(0,X.jsx)(`img`,{alt:``,height:t,src:o,width:t}):a?(0,X.jsx)(`img`,{alt:``,height:t,src:a,width:t}):e.isDirectory?(0,X.jsx)(ls,{size:t}):(0,X.jsx)(Wu,{name:Uu(e.name),size:t})})}function Yd({template:e,columns:t}){return(0,X.jsx)(X.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,X.jsxs)(wf,{style:{gridTemplateColumns:e},children:[(0,X.jsxs)(Df,{children:[(0,X.jsx)(Tf,{style:{flexShrink:0,height:18,width:18}}),(0,X.jsx)(Tf,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,X.jsx)(Tf,{style:{width:t%2==0?44:92}},t))]},r))})}function Xd({size:e}){return(0,X.jsx)(X.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,X.jsxs)(If,{$dim:!1,$current:!1,$selected:!1,children:[(0,X.jsx)(Lf,{children:(0,X.jsx)(Tf,{style:{height:e,width:e}})}),(0,X.jsx)(zf,{children:(0,X.jsx)(Tf,{style:{height:9,width:`${t}%`}})})]},n))})}var Zd=(0,_.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:d,onRenameCommit:f,onRenameCancel:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:v,onOpenFile:y}){let b=Kn(),x=Ka(),S=!e.entry.isDirectory&&Ha(e.entry.name),C=(0,_.useRef)(null),[w,T]=(0,_.useState)(!1);(0,_.useEffect)(()=>{if(!S||w)return;let e=C.current;if(!e)return;if(!(`IntersectionObserver`in window)){T(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(T(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,w]);let E=Ea(S&&w?e.entry.fullPath:null,192,e.entry.modified),[D,O]=(0,_.useState)(!1),ee=e.entry.fullPath,te=t=>{e.entry.isDirectory?v(ee,Oi(t)):y?.(ee,Oi(t))};return(0,X.jsxs)(If,{$current:t,$dim:n,$selected:s,onClick:e=>{m(e,ee),l&&te(e)},onContextMenu:e=>g(e,ee),onDoubleClick:e=>{l||te(e)},ref:e=>{C.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":ee,draggable:!u,children:[c&&(0,X.jsx)(cf,{$checked:s,onClick:e=>{e.stopPropagation(),h(ee)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`Deselect`:`Select`),type:`button`,children:s&&(0,X.jsx)(Es,{size:10})}),(0,X.jsx)(Lf,{children:S&&E&&!D?(0,X.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>O(!0),src:E}):(0,X.jsx)(Rf,{children:e.place&&x.useIcons?(0,X.jsx)(Du,{place:e.place,size:r}):(0,X.jsx)(Jd,{entry:e.entry,size:r})})}),(0,X.jsxs)(zf,{children:[u?(0,X.jsx)($d,{onCancel:()=>p?.(),onChange:e=>d?.(e),onCommit:()=>f?.(),value:u.value}):(0,X.jsx)(Bf,{$broken:e.entry.linkValid===!1,children:(0,X.jsx)(Kd,{name:e.label,ranges:e.ranges})}),(0,X.jsx)(Vf,{children:e.entry.isDirectory?i===void 0?Wd(e.entry,b):b(`{type} · {count} items`,{type:Wd(e.entry,b),count:i}):b(`{type} · {size}`,{type:Wd(e.entry,b),size:Pi(e.entry.size)})}),a&&e.entry.linkTarget&&(0,X.jsxs)(Hf,{title:e.entry.linkTarget,children:[`→ `,e.entry.linkTarget]})]})]})});function Qd({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:p,onOpen:m,onOpenFile:h,onRenameChange:g,onRenameCommit:_,onRenameCancel:v}){let y=Kn();return(0,X.jsx)(X.Fragment,{children:e.map(e=>(0,X.jsxs)(yf,{children:[(0,X.jsxs)(bf,{children:[y(e.label),(0,X.jsx)(xf,{children:e.rows.length}),(0,X.jsx)(Sf,{})]}),(0,X.jsx)(Cf,{$size:t,children:e.rows.map(e=>(0,X.jsx)(Zd,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:Hd(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:p,onOpen:m,onOpenFile:h,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:v,onRenameChange:g,onRenameCommit:_,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function $d({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,_.useRef)(null);return(0,_.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,X.jsx)(kf,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var ef=(0,_.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:_,onTagEdit:v,onRenameChange:y,onRenameCommit:b,onRenameCancel:x}){let S=Kn(),C=Ka(),w=e.entry.fullPath;return(0,X.jsxs)(Ef,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{m(t,w),o&&_(e.entry,t)},onContextMenu:e=>g(e,w),onDoubleClick:t=>{o||_(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":w,draggable:!p,children:[(0,X.jsxs)(Df,{children:[i&&(0,X.jsx)(sf,{$checked:r,onClick:e=>{e.stopPropagation(),h(w)},onDoubleClick:e=>e.stopPropagation(),title:S(r?`Deselect`:`Select`),type:`button`,children:r&&(0,X.jsx)(Es,{size:10})}),e.place&&C.useIcons?(0,X.jsx)(tf,{children:(0,X.jsx)(Du,{place:e.place,size:s})}):(0,X.jsx)(Jd,{entry:e.entry,size:s}),p?(0,X.jsx)($d,{onCancel:x,onChange:y,onCommit:b,value:p.value}):(0,X.jsx)(Of,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,X.jsx)(Kd,{name:e.label,ranges:e.ranges})}),a&&e.entry.linkTarget&&(0,X.jsxs)(Af,{title:e.entry.linkTarget,children:[`→ `,e.entry.linkTarget]})]}),u.map(t=>(0,X.jsx)(jf,{children:t.id===`tags`?(0,X.jsx)(Mf,{onClick:t=>{t.stopPropagation(),v(e.entry,t.clientX,t.clientY)},title:S(`Edit tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,X.jsx)(Nf,{$color:t,$ink:ku(t),children:e},e)}):(0,X.jsx)(Pf,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,X.jsx)(Ff,{children:S(`Broken`)}):Gd(t.id,e.entry,d,S)},t.id))]})}),tf=J.span`
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
`,nf=J.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,rf=J.button`
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
`,af=J.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,of=J.div`
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
`,sf=J.button`
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
`,cf=J(sf)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,lf=J.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,uf=J.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
`,df=J.div`
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
`,ff=J.button`
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
`,pf=J.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,mf=J.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,hf=J.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: var(--bg-secondary);
`,gf=J.div`
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
`,_f=J.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,vf=J.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,yf=J.section`
    & + & {
        margin-top: 22px;
    }
`,bf=J.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,xf=J.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Sf=J.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,Cf=J.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,wf=J.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,Tf=J.span`
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
`,Ef=J.div`
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
`,Df=J.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,Of=J.span`
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,kf=J.input`
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
`,Af=J.span`
    overflow: hidden;
    min-width: 0;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent-primary);
    text-overflow: ellipsis;
    white-space: nowrap;
`,jf=J.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Mf=J.button`
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
`,Nf=J.span`
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
`,Pf=J.span`
    color: var(--text-muted);
    font-size: 11px;
`,Ff=J.span`
    color: #fca5a5;
`,If=J.div`
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
`,Lf=J.div`
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
`,Rf=J.span`
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
`,zf=J.div`
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
`,Bf=J.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Vf=J.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Hf=J.span`
    width: 100%;
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--accent-primary);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Uf=J.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,Wf=J.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Gf=J.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,Kf=J.p`
    font-size: 13px;
    color: var(--text-muted);
`,qf=J.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,Jf=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,Yf=`/assets/bloom-BpfZWiaG.mp4`,Xf=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,Zf=`/assets/drift-BRBSQL2_.mp4`,Qf=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,$f=`/assets/ember-CtSz0YxR.mp4`,ep=[{name:`Blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`Indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`Violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`Teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`Green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`Amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`Rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`Slate`,accent:`#64748b`,secondary:`#94a3b8`}],tp=[{id:`aurora`,name:`Aurora`},{id:`dunes`,name:`Dunes`},{id:`tide`,name:`Tide`}],np=[{id:`builtin:video:drift`,name:`Drift`,url:Zf,poster:Xf},{id:`builtin:video:ember`,name:`Ember`,url:$f,poster:Qf},{id:`builtin:video:bloom`,name:`Bloom`,url:Yf,poster:Jf}],rp=tp.map(e=>({...e,variants:ep.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:cp(lp(e.id,t))}))})),ip=new Map(rp.flatMap(e=>e.variants.map(e=>[e.id,e]))),ap=new Map(np.map(e=>[e.id,e]));function op(e){if(ip.has(e))return ip.get(e).url;if(ap.has(e))return ap.get(e).url;let t=e.split(`:`)[1];return t?ip.get(`builtin:${t}:indigo`)?.url??null:null}function sp(e){return ap.has(e)}function cp(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function lp(e,t){return e===`dunes`?pp(t):e===`tide`?mp(t):fp(t)}function up(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function dp(e,t,n){let[r,i,a]=up(e),[o,s,c]=up(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function fp({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${dp(e,`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${dp(t,`#070b1c`,.85)}"/>
            <stop offset="1" stop-color="${dp(e,`#04060c`,.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${dp(e,t,.5)}" opacity="0.42" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="0.5" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="0.42" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="0.36" filter="url(#soft2)"/>
</svg>`}function pp({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${dp(t,`#120a05`,.84)}"/>
            <stop offset="0.5" stop-color="${dp(t,`#1c0f07`,.7)}"/>
            <stop offset="1" stop-color="#0d0703"/>
        </linearGradient>
        <linearGradient id="dune1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${dp(e,t,.25)}" stop-opacity="0.65"/>
            <stop offset="1" stop-color="${dp(e,`#160b04`,.55)}" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="dune2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${t}" stop-opacity="0.4"/>
            <stop offset="1" stop-color="${dp(e,`#1a0d05`,.7)}" stop-opacity="0.15"/>
        </linearGradient>
        <filter id="haze" x="-160%" y="-160%" width="420%" height="420%">
            <feGaussianBlur stdDeviation="90"/>
        </filter>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1480" cy="250" r="170" fill="${t}" opacity="0.42" filter="url(#haze)"/>
    <circle cx="1480" cy="250" r="110" fill="${dp(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${dp(e,`#0b0603`,.82)}" opacity="0.75"/>
</svg>`}function mp({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${dp(e,`#02070a`,.9)}"/>
            <stop offset="0.5" stop-color="${dp(t,`#03100f`,.82)}"/>
            <stop offset="1" stop-color="${dp(e,`#020609`,.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${dp(e,t,.4)}" opacity="0.5" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var hp=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function gp(e){return hp.test(e)}function _p({settings:e}){let t=e?.backgroundSource??null,n=t?.startsWith(`file:`)?t.slice(5):null,r=Da(n),i=t?.startsWith(`builtin:`)?op(t):r,a=n===null?t!==null&&sp(t):gp(n);if(!t||!i)return null;let o=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,X.jsxs)(vp,{"aria-hidden":!0,children:[a?(0,X.jsx)(bp,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:i,style:{filter:o}}):(0,X.jsx)(yp,{src:i,style:{filter:o}}),(0,X.jsx)(xp,{})]})}var vp=J.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,yp=J.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,bp=J.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,xp=J.div`
    position: absolute;
    inset: 0;
    background:
        linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
        radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);
`;function Sp({hits:e,delaySeconds:t,permanent:n,onCancel:r,onConfirm:i}){let a=Kn(),o=(0,_.useRef)(null),[s,c]=(0,_.useState)(()=>Math.max(1,Math.ceil(t)));return(0,_.useEffect)(()=>{o.current?.focus();let e=Date.now(),n=window.setInterval(()=>{let r=Math.max(0,Math.ceil(t-(Date.now()-e)/1e3));c(r),r===0&&window.clearInterval(n)},200),i=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),r()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,i,!0),()=>{window.clearInterval(n),window.removeEventListener(`keydown`,i,!0)}},[t,r]),(0,Pc.createPortal)((0,X.jsx)(Cp,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,X.jsxs)(wp,{role:`alertdialog`,"aria-modal":`true`,children:[(0,X.jsx)(Tp,{children:a(`Protected folder`)}),(0,X.jsx)(Ep,{children:a(`These paths are protected by the safety settings:`)}),(0,X.jsx)(Dp,{children:e.map(e=>(0,X.jsxs)(Op,{children:[(0,X.jsx)(kp,{children:e.path}),(0,X.jsx)(Ap,{children:a(`Protected by {pattern}`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,X.jsx)(jp,{children:a(n?`Deletes permanently`:`Moves to the recycle bin`)}),(0,X.jsx)(Mp,{children:a(`Nothing has been deleted.`)}),(0,X.jsx)(Np,{children:a(`This waits {seconds}s before the delete button works.`,{seconds:t})}),(0,X.jsxs)(Pp,{children:[(0,X.jsx)(Fp,{onClick:r,ref:o,type:`button`,children:a(`Cancel`)}),(0,X.jsx)(Ip,{disabled:s>0,onClick:i,type:`button`,children:s>0?a(`Delete anyway ({seconds}s)`,{seconds:s}):a(`Delete anyway`)})]})]})}),document.body)}var Cp=J.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Yc}
`,wp=J.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Wc}
`,Tp=J.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Ep=J.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Dp=J.div`
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
`,Op=J.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,kp=J.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,Ap=J.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,jp=J.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,Mp=J.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,Np=J.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Pp=J.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Fp=J.button`
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
`,Ip=J.button`
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
`;function Lp(){let e=Kn(),[t,n]=(0,_.useState)(null),r=(0,_.useRef)(null),i=(0,_.useRef)(null);(0,_.useEffect)(()=>(xc(e=>new Promise(t=>{r.current=t,n(e)})),()=>xc(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,_.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,Pc.createPortal)((0,X.jsx)(Rp,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,X.jsxs)(zp,{role:`alertdialog`,"aria-modal":`true`,children:[(0,X.jsx)(Bp,{children:e(`Notice`)}),(0,X.jsx)(Vp,{children:t}),(0,X.jsx)(Hp,{children:(0,X.jsx)(Up,{onClick:a,ref:i,type:`button`,children:e(`OK`)})})]})}),document.body)}var Rp=J.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Yc}
`,zp=J.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Wc}
`,Bp=J.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Vp=J.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Hp=J.div`
    display: flex;
    justify-content: flex-end;
`,Up=J.button`
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
`;function Wp(){let e=Kn(),[t,n]=(0,_.useState)(null),[r,i]=(0,_.useState)(``),a=(0,_.useRef)(null),o=(0,_.useRef)(null);(0,_.useEffect)(()=>(Cc((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>Cc(null)),[]),(0,_.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,Pc.createPortal)((0,X.jsx)(Gp,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,X.jsxs)(Kp,{role:`dialog`,"aria-modal":`true`,children:[(0,X.jsx)(qp,{children:e(`Archive password`)}),(0,X.jsx)(Jp,{children:t.wrong?e(`That password did not open the archive. Try again.`):e(`This archive is encrypted. Enter its password.`)}),(0,X.jsx)(Yp,{title:t.archive,children:t.archive}),(0,X.jsx)(Xp,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,X.jsxs)(Zp,{children:[(0,X.jsx)(Qp,{onClick:()=>s(null),type:`button`,children:e(`Cancel`)}),(0,X.jsx)($p,{disabled:r.length===0,onClick:c,type:`button`,children:e(`OK`)})]})]})}),document.body)}var Gp=J.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Yc}
`,Kp=J.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Wc}
`,qp=J.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Jp=J.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Yp=J.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Xp=J.input`
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
`,Zp=J.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,Qp=J.button`
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
`,$p=J(Qp)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function em({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h}){let g=Kn(),v=(0,_.useRef)(null),y=c??g(`Search this folder`);(0,_.useEffect)(()=>{let e=v.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let b=e=>{e(),v.current?.focus()};return(0,X.jsxs)(tm,{children:[(0,X.jsx)(fs,{}),(0,X.jsx)(nm,{"aria-label":y,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:y,ref:v,spellCheck:!1,value:e}),!s&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(rm,{children:i===0?`0/0`:`${a+1}/${i}`}),(0,X.jsx)(im,{onClick:()=>b(u),title:g(`Previous match (Shift+Enter)`),type:`button`,children:(0,X.jsx)(vs,{size:12})}),(0,X.jsx)(im,{$down:!0,onClick:()=>b(d),title:g(`Next match (Enter)`),type:`button`,children:(0,X.jsx)(vs,{size:12})})]}),(0,X.jsx)(am,{$on:n,onClick:()=>b(f),title:g(`Match case`),type:`button`,children:`Aa`}),(0,X.jsx)(am,{$on:r,onClick:()=>b(p),title:g(`Regular expression`),type:`button`,children:`.*`}),!s&&(0,X.jsx)(om,{$on:t===`hide`,onClick:()=>b(m),title:g(t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`),type:`button`,children:g(t===`hide`?`Hide`:`Dim`)}),(0,X.jsx)(im,{onClick:h,title:g(`Close search (Esc)`),type:`button`,children:(0,X.jsx)(Ds,{size:12})})]})}var tm=J.div`
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
    ${qc}
`,nm=J.input`
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
`,rm=J.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,im=J.button`
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
`,am=J.button`
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
`,om=J(am)`
    min-width: 34px;
    font-family: var(--font-sans);
    font-size: 10px;
`;function sm(e,t,n,r,i=[]){(0,_.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=ja(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function cm({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=Kn(),a=(0,_.useRef)(null),o=(0,_.useRef)(null),[s,c]=(0,_.useState)(null);return(0,_.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,_.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,_.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,Pc.createPortal)((0,X.jsxs)(lm,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(Su).map(n=>(0,X.jsx)(um,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:Su[n](16)},n)),(0,X.jsx)(um,{onClick:async()=>{let e=await vc([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`Choose an image`),type:`button`,children:(0,X.jsx)(hs,{size:13})}),r&&(0,X.jsx)(um,{$active:!e,onClick:()=>t(null),title:i(`Default`),type:`button`,children:(0,X.jsx)(Ds,{size:12})})]}),document.body)]})}var lm=J.div`
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
    ${Gc}
    transform-origin: top left;
`,um=J.button`
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
`;function dm({source:e,poster:t}){let n=e.split(`.`).pop()?.toLowerCase()??``,r=Da(e.startsWith(`builtin:`)?null:e,0,n?`.${n}`:``),i=t??op(e)??r,a=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(n);return i?a?(0,X.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:i}):(0,X.jsx)(`img`,{alt:``,src:i}):null}var fm=[{concept:`aurora`,preset:`Indigo`},{concept:`aurora`,preset:`Violet`},{concept:`dunes`,preset:`Amber`},{concept:`dunes`,preset:`Rose`},{concept:`tide`,preset:`Teal`},{concept:`tide`,preset:`Green`}].flatMap(({concept:e,preset:t})=>{let n=rp.find(t=>t.id===e)?.variants.find(e=>e.preset===t);return n?[n]:[]}),pm=96,mm=J.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,hm=J.div`
    position: relative;
    margin: 0 -26px 18px;
    overflow: hidden;
    background: transparent;

    img,
    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        /* A tiny parallax keeps the artwork moving a little slower than the page while scrolling. */
        transform: translateY(calc(var(--banner-scroll, 0px) * -0.05)) scale(1.12);
        transform-origin: center center;
        will-change: transform;
        /* A long mask, so the artwork dissolves into whatever the page paints behind it;
           a solid-colour gradient shows a seam because the page is a gradient too. */
        -webkit-mask-image: linear-gradient(to bottom,
            #000 0%,
            #000 18%,
            rgba(0, 0, 0, 0.94) 30%,
            rgba(0, 0, 0, 0.76) 46%,
            rgba(0, 0, 0, 0.5) 62%,
            rgba(0, 0, 0, 0.24) 80%,
            rgba(0, 0, 0, 0.08) 92%,
            transparent 100%);
        mask-image: linear-gradient(to bottom,
            #000 0%,
            #000 18%,
            rgba(0, 0, 0, 0.94) 30%,
            rgba(0, 0, 0, 0.76) 46%,
            rgba(0, 0, 0, 0.5) 62%,
            rgba(0, 0, 0, 0.24) 80%,
            rgba(0, 0, 0, 0.08) 92%,
            transparent 100%);
    }
`,gm=J.div`
    position: absolute;
    right: 0;
    bottom: ${pm}px;
    left: 0;
    z-index: 2;
    display: grid;
    place-items: center;
    height: 14px;
    cursor: row-resize;
    background: transparent;

    /* A small centred grip; a full-width bar reads as a separator line. */
    &::before {
        content: "";
        width: 88px;
        height: 3px;
        border-radius: 999px;
        background: rgba(var(--accent-rgb), 0.35);
        transition: background 120ms ease;
    }

    &:hover::before {
        background: rgba(var(--accent-rgb), 0.7);
    }
`,_m=J.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$overlap:e})=>e?`-${pm}px`:`0`};
`,vm=J.section`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
    padding: 10px 12px 14px;
    /* A soft glass band: a bordered card here would draw a full-width line across the fading art. */
    background: linear-gradient(to bottom,
        rgba(var(--bg-rgb), 0) 0%,
        rgba(var(--bg-rgb), 0.38) 18%,
        rgba(var(--bg-rgb), 0.38) 82%,
        rgba(var(--bg-rgb), 0) 100%);
    backdrop-filter: blur(8px);
`,ym=J.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,bm=J.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,xm=J.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,Sm=J.div`
    position: relative;
    width: 132px;
    height: 72px;
`,Cm=J.button`
    width: 100%;
    height: 100%;
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
`,wm=J.button`
    position: absolute;
    top: 4px;
    right: 4px;
    z-index: 1;
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.24);
    border-radius: 50%;
    background: rgba(6, 8, 16, 0.78);
    color: #fff;
    cursor: pointer;

    &:hover {
        border-color: #e81123;
        background: #e81123;
    }
`,Tm=J.span`
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
`,Em=J.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,Dm=J.button`
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
`,Om=J.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    flex-wrap: wrap;

    ${({$overlay:e})=>e?`
            position: absolute;
            z-index: 10;
            top: 10px;
            right: 18px;
            padding: 4px;
            border: 1px solid rgba(var(--accent-rgb), 0.14);
            border-radius: var(--radius-md);
            background: rgba(var(--bg-rgb), 0.42);
            backdrop-filter: blur(14px) saturate(1.2);
            -webkit-backdrop-filter: blur(14px) saturate(1.2);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
        `:`padding-bottom: 14px;`}
`,km=J.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,Am=J.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,jm=J.button`
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
`,Mm=J.div`
    position: relative;
    display: inline-flex;
`,Nm=J.div`
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
`,Pm=J.button`
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
`,Fm=J.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,Im=J.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
`,Lm=J.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Rm=J.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,zm=J.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Bm=J.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,Vm=J.input`
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
`,Hm=J.button`
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
`,Um=J.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,Wm=J.div`
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
`,Gm=J.span`
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
`,Km=J.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,qm=J.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Jm=J.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,Ym=J.button`
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
`,Xm=J.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,Zm=J.button`
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
`,Qm=J.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,$m=J.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,eh=J.div`
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
`,th=J.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,nh=J.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,rh=J.button`
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
`,ih=J.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,ah=J.button`
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
`,oh=J.button`
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
`,sh=J.button`
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
`,ch=J.span`
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
`,lh=J.button`
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
`,uh=J.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,dh=J.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`;function fh({places:e,drives:t,recent:n,recentLimit:r,homePath:i,historyVersion:a,onOpen:o,onPlacesChanged:s,onRecentCleared:c,onLayoutChanged:l,onHistoryChanged:u,onDrivesChanged:d,visibilityVersion:f=0,find:p,onSearchMatches:m,readOnly:h=!1,onPick:g,onSelectionChange:v,onAddToTray:y}){let b=Kn(),x=Ka(),[S,C]=(0,_.useState)(!1),[w,T]=(0,_.useState)(null),E=w?.overviewBanner??null,D=E?.startsWith(`builtin:`)??!1,O=D?``:E?.split(`.`).pop()?.toLowerCase()??``,ee=D?sp(E):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(O),te=Da(D?null:E,0,O?`.${O}`:``),ne=E?op(E)??te:null,[k,A]=(0,_.useState)(null),[j,M]=(0,_.useState)(!1),[N,P]=(0,_.useState)(null),[F,I]=(0,_.useState)(null),[L,R]=(0,_.useState)(null),[re,ie]=(0,_.useState)(null),[z,ae]=(0,_.useState)(null),oe=kd(`overview`),[se,ce]=(0,_.useState)(null),[le,ue]=(0,_.useState)(null),B=(0,_.useRef)(null),V=(0,_.useRef)(null),de=(0,_.useRef)(null),fe=le??w?.overviewBannerHeight??220,pe=Math.min(72,fe*.18),H=(e,t=!1)=>g?(ie(e),ae({path:e,isDirectory:t}),v?.([e]),!0):!1,U=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),ie(t),ae({path:t,isDirectory:n}),ce({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,_.useEffect)(()=>(Sd(`overview`,z?(e,t)=>ce({x:e,y:t,target:z}):null),()=>Sd(`overview`,null)),[z]);let me=(e,t)=>o(e,t);(0,_.useEffect)(()=>{Pr().then(T,()=>T(null))},[]),(0,_.useEffect)(()=>{let e=de.current;if(!e)return;let t=0,n=()=>{t=0,e.style.setProperty(`--banner-scroll`,`${Math.min(e.scrollTop,480)}px`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,_.useEffect)(()=>{if(!k)return;let e=()=>A(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||A(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[k]),(0,_.useEffect)(()=>{if(!j)return;let e=()=>M(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[j]);let he=wu(w),ge=he.map(e=>e.id),_e=(0,_.useRef)(null),ve=e=>k?.kind===`panel`&&k.id===e,ye=e=>k?.kind===`place`&&k.id===e;(0,_.useEffect)(()=>{if(!Y.available)return;let e=he.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??i).filter(e=>e.length>0);Y.send({type:`fs.watch`,payload:{paths:e}})},[he.map(e=>e.path??e.id).join(`|`),i]),sm(_e,p??null,`section`,m??(()=>void 0),[n.length,e.length,t.length,f]);let be=async(e,t)=>{let n={...w?.placeIcons};t?n[e]=t:delete n[e],A(null),await W({placeIcons:n}),s(await mr())},xe=async(e,t)=>{let n={...w?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],I(null),await W({placeNames:n}),s(await mr())},Se=e=>{R(null),P({drive:e,label:e.label||`Local Disk`})},Ce=async()=>{if(!N)return;let{drive:e,label:t}=N;P(null);let n=await ar(e.name,t.trim());n.ok?(R(null),d?.()):R(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},we=w?.overviewColumns??1,W=async e=>{if(!w)return;let t={...w,...e,overviewPanels:e.overviewPanels??ge,overviewHidden:[]};T(await Vr(t)),l?.()},Te=async()=>{let e=await vc([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=w?.overviewBanners??[];await W({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},Ee=()=>void W({overviewBanner:null}),De=e=>void W({overviewBanners:(w?.overviewBanners??[]).filter(t=>t!==e),...w?.overviewBanner===e?{overviewBanner:null}:{}}),Oe=e=>{B.current={y:e.clientY,height:fe},e.currentTarget.setPointerCapture(e.pointerId)},ke=e=>{let t=B.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));V.current=n,ue(n)},Ae=e=>{B.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),V.current!==null&&(W({overviewBannerHeight:V.current}),V.current=null)},je=(e,t)=>{let n=ge.indexOf(e),r=n+t;if(n<0||r<0||r>=ge.length)return;let i=[...ge];[i[n],i[r]]=[i[r],i[n]],W({overviewPanels:i})},Me=(e,t)=>{let n={...w?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],W({overviewTitles:n})},Ne=(e,t)=>void W({overviewViews:{...w?.overviewViews,[e]:t}}),Pe=e=>{let t=w?.overviewPinned??he.filter(e=>e.pinned).map(e=>e.id);W({overviewPinned:he.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Fe=e=>{A(null);let t=t=>{let n={...t};return delete n[e],n},n=w?.overviewPinned??he.filter(e=>e.pinned).map(e=>e.id);W({overviewPanels:ge.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(w?.overviewTitles),overviewViews:t(w?.overviewViews),overviewIcons:t(w?.overviewIcons),panelPlaces:t(w?.panelPlaces)})},Ie=(e,t)=>{let n={...w?.overviewIcons};t?n[e]=t:delete n[e],A(null),W({overviewIcons:n})},Le=async e=>{if(!w)return;if(e===`folder`){let e=await _c();if(!e)return;let t=`folder:${e}`;ge.includes(t)||await W({overviewPanels:[...ge,t]});return}if(e===`quick`){let e=2;for(;ge.includes(`quick:${e}`);)e+=1;await W({overviewPanels:[...ge,`quick:${e}`]});return}let t=e;for(let n=2;ge.includes(t);n+=1)t=`${e}:${n}`;await W({overviewPanels:[...ge,t]})},Re=async t=>{let n=await _c();if(!n)return;if(t.id===`quick`){await W({quickAccess:[...new Set([...e.map(e=>e.path),n])]}),s(await mr());return}let r=t.places??[];r.some(e=>mh(e,n))||await W({panelPlaces:{...w?.panelPlaces,[t.id]:[...r,n]}})},ze=async(t,n)=>{A(null),t.id===`quick`?(await W({quickAccess:e.filter(e=>!mh(e.path,n)).map(e=>e.path)}),s(await mr())):await W({panelPlaces:{...w?.panelPlaces,[t.id]:(t.places??[]).filter(e=>!mh(e,n))}})},Be=async(t,n,r)=>{if(mh(n,r))return;let i=t.id===`quick`?e.map(e=>e.path):t.places??[],a=i.findIndex(e=>mh(e,n)),o=i.findIndex(e=>mh(e,r));if(a<0||o<0)return;let c=[...i],[l]=c.splice(a,1);c.splice(o,0,l),t.id===`quick`?(await W({quickAccess:c}),s(await mr())):await W({panelPlaces:{...w?.panelPlaces,[t.id]:c}})},Ve=(e,t)=>({draggable:S,onDragOver:e=>{S&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{S&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{S&&(n.preventDefault(),Be(e,n.dataTransfer.getData(`text/plain`),t))}}),He=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>mh(e.path,t));return{name:w?.placeNames?.[t]??n?.name??(Xi(t)||t),path:t,kind:`folder`,icon:n?.icon??w?.placeIcons?.[t]??null}}),Ue=e=>{if(n.length===0)return(0,X.jsx)(dh,{children:b(`Files and folders you open show up here.`)});let t=n.slice(0,r);return e.view===`grid`?(0,X.jsx)(Um,{children:t.map(e=>{let t=qa(x,e.path);return(0,X.jsxs)(Wm,{$plain:!1,$selected:re===e.path,onClick:t=>{H(e.path,e.isDirectory)||(e.isDirectory?o(e.path,Oi(t)):or(e.path))},onDoubleClick:()=>g?.(e.path),onContextMenu:t=>U(t,e.path,e.isDirectory),title:e.path,children:[(0,X.jsx)(Gm,{children:t&&x.useIcons?(0,X.jsx)(Du,{place:t,size:18}):(0,X.jsx)(Gu,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,X.jsxs)(Km,{children:[(0,X.jsx)(`strong`,{children:t?.name||e.name}),(0,X.jsx)(qm,{children:e.path})]})]},e.path)})}):(0,X.jsx)(Jm,{children:t.map(e=>{let t=qa(x,e.path);return(0,X.jsxs)(Ym,{$selected:re===e.path,onClick:t=>{H(e.path,e.isDirectory)||(e.isDirectory?o(e.path,Oi(t)):or(e.path))},onDoubleClick:()=>g?.(e.path),onContextMenu:t=>U(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&x.useIcons?(0,X.jsx)(Du,{place:t,size:15}):(0,X.jsx)(Gu,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,X.jsxs)(Xm,{children:[(0,X.jsx)(`strong`,{children:t?.name||e.name}),(0,X.jsx)(qm,{children:e.path})]})]},e.path)})})},We=e=>{if(t.length===0)return(0,X.jsx)(dh,{children:b(`No drives are available.`)});let n=t.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=N?.drive.name===t.name,i=r?(0,X.jsx)(ph,{maxLength:32,onCancel:()=>P(null),onChange:e=>P({...N,label:e}),onCommit:()=>void Ce(),value:N?.label??``}):(0,X.jsx)(X.Fragment,{children:aa(t)}),a=!r&&S&&(0,X.jsx)(sh,{onClick:e=>{e.stopPropagation(),Se(t)},title:b(`Rename volume`),type:`button`,children:(0,X.jsx)(Ws,{size:11})}),s=(0,X.jsx)(qm,{children:b(`{free} free of {total}`,{free:Pi(t.freeSpace),total:Pi(t.totalSize)})});return e.view===`grid`?(0,X.jsxs)(Wm,{$plain:!1,$selected:re===t.name,onClick:e=>{!r&&H(t.name,!0)||r||o(t.name,Oi(e))},onDoubleClick:()=>!r&&g?.(t.name),onContextMenu:e=>!r&&U(e,t.name,!0),title:t.name,children:[(0,X.jsx)(Gm,{children:(0,X.jsx)(ds,{size:18})}),(0,X.jsxs)(Km,{children:[(0,X.jsxs)(`strong`,{children:[i,r&&ia(t),a]}),s]})]},t.name):(0,X.jsxs)(Ym,{as:r?`div`:`button`,$selected:re===t.name,onClick:r?void 0:e=>{H(t.name,!0)||o(t.name,Oi(e))},onDoubleClick:r?void 0:()=>g?.(t.name),onContextMenu:r?void 0:e=>U(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,X.jsx)(ds,{size:18}),(0,X.jsxs)(Xm,{children:[(0,X.jsxs)(`strong`,{children:[i,r&&ia(t),a]}),s]}),(0,X.jsx)(Qm,{children:(0,X.jsx)($m,{$used:n,$tone:Yi(n)})})]},t.name)});return e.view===`grid`?(0,X.jsx)(Um,{children:n}):(0,X.jsx)(Jm,{children:n})},G=e=>{switch(e.kind){case`quick`:{let t=He(e);return!S&&t.length===0?(0,X.jsx)(dh,{children:b(`No folders in this Quick access panel yet.`)}):e.view===`grid`?(0,X.jsxs)(Um,{children:[t.map(t=>(0,X.jsxs)(Wm,{$plain:S,$selected:re===t.path,...Ve(e,t.path),onClick:e=>{!S&&!H(t.path,!0)&&o(t.path,Oi(e))},onDoubleClick:()=>!S&&g?.(t.path),onContextMenu:e=>!S&&U(e,t.path,!0),title:t.path,children:[S&&(0,X.jsx)(oh,{onClick:n=>{n.stopPropagation(),ze(e,t.path)},title:b(`Remove from Quick access`),type:`button`,children:(0,X.jsx)(Ds,{size:11})}),(0,X.jsxs)(ih,{children:[S?(0,X.jsx)(ah,{onClick:e=>{e.stopPropagation(),A(ye(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:b(`Change icon`),type:`button`,children:(0,X.jsx)(Gm,{children:(0,X.jsx)(Du,{place:t})})}):(0,X.jsx)(Gm,{children:(0,X.jsx)(Du,{place:t})}),ye(t.path)&&(0,X.jsx)(cm,{onPick:e=>void be(t.path,e),value:w?.placeIcons?.[t.path]??t.icon})]}),(0,X.jsxs)(Km,{children:[F?.path===t.path?(0,X.jsx)(`strong`,{children:(0,X.jsx)(ph,{onCancel:()=>I(null),onChange:e=>I({path:t.path,name:e}),onCommit:()=>void xe(t.path,F?.name??``),value:F?.name??``})}):(0,X.jsxs)(`strong`,{children:[t.name,S&&(0,X.jsx)(sh,{onClick:e=>{e.stopPropagation(),A(null),I({path:t.path,name:t.name})},title:b(`Rename folder`),type:`button`,children:(0,X.jsx)(Ws,{size:11})})]}),(0,X.jsx)(qm,{children:t.path})]})]},t.path)),S&&(0,X.jsxs)(Zm,{onClick:()=>void Re(e),title:b(`Pin a folder here`),type:`button`,children:[(0,X.jsx)(Gm,{children:(0,X.jsx)(hs,{size:15})}),(0,X.jsxs)(Km,{children:[(0,X.jsx)(`strong`,{children:b(`Add folder`)}),(0,X.jsx)(qm,{children:b(`Pin a directory here`)})]})]})]}):(0,X.jsxs)(Jm,{children:[t.map(t=>(0,X.jsxs)(Ym,{$selected:re===t.path,...Ve(e,t.path),onClick:e=>{!S&&!H(t.path,!0)&&o(t.path,Oi(e))},onDoubleClick:()=>!S&&g?.(t.path),onContextMenu:e=>!S&&U(e,t.path,!0),title:t.path,type:`button`,children:[(0,X.jsxs)(ih,{children:[S?(0,X.jsx)(ah,{onClick:e=>{e.stopPropagation(),A(ye(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:b(`Change icon`),type:`button`,children:(0,X.jsx)(Du,{place:t,size:15})}):(0,X.jsx)(Du,{place:t,size:15}),ye(t.path)&&(0,X.jsx)(cm,{onPick:e=>void be(t.path,e),value:w?.placeIcons?.[t.path]??t.icon})]}),(0,X.jsxs)(Xm,{children:[F?.path===t.path?(0,X.jsx)(`strong`,{children:(0,X.jsx)(ph,{onCancel:()=>I(null),onChange:e=>I({path:t.path,name:e}),onCommit:()=>void xe(t.path,F?.name??``),value:F?.name??``})}):(0,X.jsxs)(`strong`,{children:[t.name,S&&(0,X.jsx)(sh,{onClick:e=>{e.stopPropagation(),A(null),I({path:t.path,name:t.name})},title:b(`Rename folder`),type:`button`,children:(0,X.jsx)(Ws,{size:11})})]}),(0,X.jsx)(qm,{children:t.path})]}),S&&(0,X.jsx)(oh,{$inline:!0,onClick:n=>{n.stopPropagation(),ze(e,t.path)},title:b(`Remove from Quick access`),type:`button`,children:(0,X.jsx)(Ds,{size:11})})]},t.path)),S&&(0,X.jsxs)(Zm,{$row:!0,onClick:()=>void Re(e),title:b(`Pin a folder here`),type:`button`,children:[(0,X.jsx)(hs,{size:15}),(0,X.jsxs)(Xm,{children:[(0,X.jsx)(`strong`,{children:b(`Add folder`)}),(0,X.jsx)(qm,{children:b(`Pin a directory here`)})]})]})]})}case`frequent`:return(0,X.jsx)(hh,{mode:e.view,onContextMenu:U,onOpen:o,onPick:g,onSelectionChange:v,version:a});case`recent`:return Ue(e);case`drives`:return We(e);default:return(0,X.jsx)(gh,{mode:e.view,onContextMenu:U,onOpen:o,onPick:g,onSelectionChange:v,openOnSingleClick:w?.openOnSingleClick??!1,path:e.path??i,selectionMenuId:`overview:${e.id}`,showCheckboxes:w?.showCheckboxes??!0,visibilityVersion:f})}};return(0,X.jsxs)(mm,{$flush:!!w?.overviewBanner,ref:de,children:[!h&&(0,X.jsxs)(Om,{$overlay:!!w?.overviewBanner,children:[(0,X.jsx)(km,{role:`group`,title:b(`Columns`),children:[1,2,3,4,5].map(e=>(0,X.jsx)(Am,{$active:we===e,onClick:()=>void W({overviewColumns:e}),title:Ni(b,e,`1 column`,`{count} columns`),type:`button`,children:e},e))}),S&&(0,X.jsxs)(Mm,{children:[(0,X.jsxs)(jm,{onClick:()=>M(e=>!e),onPointerDown:e=>e.stopPropagation(),title:b(`Add a panel`),type:`button`,children:[(0,X.jsx)(hs,{size:12}),b(`Add panel ▾`)]}),j&&(0,X.jsx)(Nm,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`folder`].map(e=>(0,X.jsx)(Pm,{onClick:()=>{M(!1),Le(e)},type:`button`,children:b(e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:`Folder…`)},e))})]}),oe.available&&(0,X.jsx)(Hm,{onClick:e=>oe.open(e.clientX,e.clientY),title:b(`Selection menu`),type:`button`,children:(0,X.jsx)(hc,{size:14})}),(0,X.jsxs)(jm,{onClick:()=>{C(e=>!e),M(!1),A(null),I(null),P(null)},title:b(S?`Done`:`Edit`),type:`button`,children:[S?(0,X.jsx)(Es,{size:13}):(0,X.jsx)(Ws,{size:13}),b(S?`Done`:`Edit`)]})]}),L&&(0,X.jsx)(uh,{children:L}),w?.overviewBanner&&(0,X.jsxs)(hm,{style:{height:`calc(${fe}px - min(var(--banner-scroll, 0px) * 0.16, ${pe}px))`},children:[ee?(0,X.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:ne??void 0}):(0,X.jsx)(`img`,{alt:``,src:ne??void 0}),S&&(0,X.jsx)(gm,{onDoubleClick:()=>{V.current=null,ue(null),W({overviewBannerHeight:220})},onPointerCancel:Ae,onPointerDown:Oe,onPointerMove:ke,onPointerUp:Ae,title:b(`Drag to resize; double-click to reset`)})]}),(0,X.jsxs)(_m,{$overlap:!!w?.overviewBanner,children:[S&&(0,X.jsxs)(vm,{children:[(0,X.jsx)(ym,{children:(0,X.jsx)(bm,{children:b(`Banners`)})}),(0,X.jsxs)(xm,{children:[(0,X.jsx)(Sm,{children:(0,X.jsx)(Cm,{$active:!w?.overviewBanner,onClick:Ee,title:b(`No banner`),type:`button`,children:(0,X.jsxs)(Em,{children:[(0,X.jsx)(Ds,{size:16}),(0,X.jsx)(`span`,{children:b(`No banner`)})]})})}),fm.map(e=>(0,X.jsx)(Sm,{children:(0,X.jsx)(Cm,{$active:w?.overviewBanner===e.id,onClick:()=>void W({overviewBanner:e.id}),title:`${b(e.concept)} · ${b(e.preset)}`,type:`button`,children:(0,X.jsx)(dm,{poster:e.url,source:e.id})})},e.id)),np.map(e=>(0,X.jsx)(Sm,{children:(0,X.jsxs)(Cm,{$active:w?.overviewBanner===e.id,onClick:()=>void W({overviewBanner:e.id}),title:b(e.name),type:`button`,children:[(0,X.jsx)(dm,{poster:e.poster,source:e.id}),(0,X.jsx)(Tm,{children:(0,X.jsx)(Ms,{size:11})})]})},e.id)),(w?.overviewBanners??[]).map(e=>(0,X.jsxs)(Sm,{children:[(0,X.jsx)(Cm,{$active:w?.overviewBanner===e,onClick:()=>void W({overviewBanner:e}),title:e,type:`button`,children:(0,X.jsx)(dm,{source:e})}),(0,X.jsx)(wm,{onClick:()=>De(e),title:b(`Remove`),type:`button`,children:(0,X.jsx)(Ds,{size:10})})]},e)),(0,X.jsxs)(Dm,{onClick:()=>void Te(),title:b(`Add banner…`),type:`button`,children:[(0,X.jsx)(hs,{size:18}),(0,X.jsx)(`span`,{children:b(`Add banner…`)})]})]})]}),(0,X.jsx)(Fm,{ref:_e,$columns:we,children:he.map(e=>{let t=ge.indexOf(e.id);return(0,X.jsxs)(Im,{children:[(0,X.jsxs)(Lm,{children:[(0,X.jsxs)(Rm,{children:[(0,X.jsxs)(ih,{children:[S?(0,X.jsx)(ah,{onClick:()=>A(ve(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:b(`Change icon`),type:`button`,children:(0,X.jsx)(Eu,{panel:e,size:15})}):(0,X.jsx)(Eu,{panel:e,size:15}),ve(e.id)&&(0,X.jsx)(cm,{onPick:t=>Ie(e.id,t),value:e.icon})]}),S?(0,X.jsx)(Vm,{defaultValue:e.title,onBlur:t=>Me(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,X.jsx)(Bm,{children:b(e.title)})]}),(0,X.jsxs)(zm,{children:[!S&&e.kind===`recent`&&(0,X.jsx)(jm,{onClick:()=>void Or().then(c),title:b(`Clear`),type:`button`,children:b(`Clear`)}),!S&&e.kind===`frequent`&&(0,X.jsx)(jm,{onClick:()=>void kr().then(()=>u?.()),title:b(`Clear the frequent list`),type:`button`,children:b(`Clear`)}),!S&&(e.kind===`home`||e.kind===`folder`)&&(0,X.jsx)(jm,{onClick:()=>o(e.path??i),title:b(`Open folder`),type:`button`,children:b(`Open`)}),S&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Hm,{$active:e.pinned,onClick:()=>Pe(e.id),title:e.pinned?b(`Unpin from the sidebar`):b(`Pin to the sidebar`),type:`button`,children:(0,X.jsx)(bs,{size:12})}),(0,X.jsx)(Hm,{$active:e.view===`list`,onClick:()=>Ne(e.id,`list`),title:b(`List`),type:`button`,children:(0,X.jsx)(xs,{size:13})}),(0,X.jsx)(Hm,{$active:e.view===`grid`,onClick:()=>Ne(e.id,`grid`),title:b(`Grid`),type:`button`,children:(0,X.jsx)(Ss,{size:13})}),(0,X.jsx)(Hm,{disabled:t===0,onClick:()=>je(e.id,-1),title:b(`Move up`),type:`button`,children:(0,X.jsx)(ps,{size:12})}),(0,X.jsx)(Hm,{disabled:t===ge.length-1,onClick:()=>je(e.id,1),title:b(`Move down`),type:`button`,children:(0,X.jsx)(ps,{size:12})}),(0,X.jsx)(Hm,{onClick:()=>Fe(e.id),title:b(`Remove panel`),type:`button`,children:(0,X.jsx)(Ds,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?G(e):(0,X.jsx)(th,{children:G(e)})]},e.id)})})]}),se&&(0,X.jsx)(ll,{directory:i,menu:{x:se.x,y:se.y,paths:[se.target.path]},onClose:()=>ce(null),onCopy:(e,t)=>void $r(e,t),onAddToTray:y,onOpen:me,onOpenFile:e=>g?g(e):void or(e),shortcuts:Ti,target:se.target})]})}function ph({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=Kn();return(0,X.jsxs)(ch,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,X.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,X.jsx)(lh,{onClick:r,title:a(`Cancel`),type:`button`,children:(0,X.jsx)(Ds,{size:11})}),(0,X.jsx)(lh,{$apply:!0,onClick:n,title:a(`Rename volume`),type:`button`,children:(0,X.jsx)(Es,{size:12})})]})}function mh(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}function hh({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:a}){let o=Kn(),[s,c]=(0,_.useState)(null),[l,u]=(0,_.useState)(null),d=Ka(),f=e=>r?(u(e),i?.([e]),!0):!1;if((0,_.useEffect)(()=>{Er().then(c,()=>c([]))},[a]),!s)return(0,X.jsx)(dh,{children:o(`Reading…`)});if(s.length===0)return(0,X.jsx)(dh,{children:o(`Folders you open often show up here.`)});let p=e=>Ni(o,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path});return e===`grid`?(0,X.jsx)(Um,{children:s.map(e=>{let i=qa(d,e.path);return(0,X.jsxs)(Wm,{$plain:!1,$selected:l===e.path,onClick:n=>{f(e.path)||t(e.path,Oi(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,X.jsx)(Gm,{children:i&&d.useIcons?(0,X.jsx)(Du,{place:i,size:18}):(0,X.jsx)(Gu,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,X.jsxs)(Km,{children:[(0,X.jsx)(`strong`,{children:i?.name||e.name}),(0,X.jsx)(qm,{children:p(e)})]})]},e.path)})}):(0,X.jsx)(Jm,{children:s.map(e=>{let i=qa(d,e.path);return(0,X.jsxs)(Ym,{$selected:l===e.path,onClick:n=>{f(e.path)||t(e.path,Oi(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&d.useIcons?(0,X.jsx)(Du,{place:i,size:15}):(0,X.jsx)(Gu,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,X.jsxs)(Xm,{children:[(0,X.jsx)(`strong`,{children:i?.name||e.name}),(0,X.jsx)(qm,{children:p(e)})]})]},e.path)})})}function gh({path:e,mode:t,onOpen:n,onContextMenu:r,onPick:i,onSelectionChange:a,selectionMenuId:o,showCheckboxes:s,openOnSingleClick:c,visibilityVersion:l}){let u=Kn(),[d,f]=(0,_.useState)(null),[p,m]=(0,_.useState)(null),h=Ka();return(0,_.useEffect)(()=>{e&&(f(null),sr(e).then(f,()=>f(null)))},[e,l]),(0,_.useEffect)(()=>{if(Y.available)return Y.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&n.data.path.replace(/[\\\\/]+$/,``).toLowerCase()===e.replace(/[\\\\/]+$/,``).toLowerCase()&&sr(e,!1).then(f,()=>void 0)})},[e]),d?t===`list`?(0,X.jsx)(eh,{children:(0,X.jsx)(Fd,{error:null,listing:d,loading:!1,onOpen:i??n,onOpenFile:i??(e=>void or(e)),onSelectionChange:a,selectionMenuId:o,onSort:()=>void 0,openOnSingleClick:c,enableShortcuts:!1,showCheckboxes:s,showDetails:!1,showImages:!1,view:{...rr,columns:ir.columns??[]}})}):(0,X.jsx)(th,{children:d.entries.length===0?(0,X.jsx)(dh,{children:u(`This folder is empty.`)}):(0,X.jsx)(nh,{children:d.entries.map(e=>{let t=qa(h,e.fullPath);return(0,X.jsxs)(rh,{$selected:p===e.fullPath,onClick:t=>{i?(m(e.fullPath),a?.([e.fullPath])):e.isDirectory?n(e.fullPath,Oi(t)):or(e.fullPath)},onDoubleClick:()=>i?.(e.fullPath),onContextMenu:t=>r?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&h.useIcons?(0,X.jsx)(Du,{place:t,size:16}):(0,X.jsx)(Gu,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,X.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,X.jsx)(dh,{children:u(`Reading…`)})}function _h({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=Kn(),s=Ka(),[c,l]=(0,_.useState)(!1),[u,d]=(0,_.useState)(``),[f,p]=(0,_.useState)([]),[m,h]=(0,_.useState)(0),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(null),x=(0,_.useRef)(null),S=(0,_.useRef)(null),C=(0,_.useRef)(0);(0,_.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,_.useEffect)(()=>{r&&r!==C.current&&(C.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,_.useEffect)(()=>{c&&x.current?.select()},[c]),(0,_.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[c]);let w=()=>{d(e.replace(/\\/g,`/`)),l(!0)},T=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,_.useEffect)(()=>{if(!c){p([]);return}let e=bh(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{sr(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),h(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let E=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,_.useLayoutEffect)(()=>{if(!c){v(null);return}let e=()=>{let e=S.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);v({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,X.jsxs)(Eh,{onPointerDown:e=>e.stopPropagation(),ref:S,children:[(0,X.jsxs)(Ah,{children:[(0,X.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),h(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),h(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?E(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):T(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:x,spellCheck:!1,value:u}),(0,X.jsx)(jh,{onClick:()=>l(!1),title:o(`Cancel`),type:`button`,children:(0,X.jsx)(Ds,{size:12})}),(0,X.jsx)(jh,{$apply:!0,onClick:T,onPointerDown:e=>e.stopPropagation(),title:o(`Open this path`),type:`button`,children:(0,X.jsx)(Es,{size:14})})]}),f.length>0&&g&&(0,Pc.createPortal)((0,X.jsx)(Dh,{onPointerDown:e=>e.stopPropagation(),style:{left:g.left,top:g.top,width:g.width},children:f.map((e,t)=>(0,X.jsxs)(Oh,{$active:t===m,onClick:t=>E(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>h(t),type:`button`,children:[(0,X.jsx)(Gu,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,X.jsx)(kh,{children:e.name})]},e.path))}),document.body)]});let D=t?[{label:t,path:e,icon:n}]:yh(e,s.places);return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(xh,{onClick:w,title:o(`Click to type a path`),children:D.map((t,n)=>(0,X.jsxs)(Sh,{$last:n===D.length-1,children:[n>0&&(0,X.jsx)(wh,{children:(0,X.jsx)(vs,{size:9})}),(0,X.jsxs)(Th,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):b({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,X.jsx)(Ch,{children:(0,X.jsx)(Du,{place:t.place,size:13})}):t.icon&&(0,X.jsx)(Ch,{children:t.icon}),t.label]})]},t.path))}),y&&(0,X.jsx)(Zc,{items:[{label:o(`Open`),onSelect:()=>i(y.path)},{label:o(`Open in new tab`),onSelect:()=>i(y.path,!0)},{label:o(`Open with…`),onSelect:()=>void pi(y.path)},{label:o(`Copy path`),onSelect:()=>void navigator.clipboard.writeText(y.path)},{label:o(`Properties`),onSelect:()=>void fi([y.path])}],onClose:()=>b(null),x:y.x,y:y.y})]})}function vh(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function yh(e,t){let n=vh(e),r=e=>e.replace(/[\\/]+$/,``).toLowerCase(),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>r(t.path)===r(e.path));t>i&&(i=t,a=e)}return a&&i>=0&&n.splice(0,i+1,{label:a.name,path:n[i].path,place:a}),n}function bh(e){if(e.toLowerCase().startsWith(`yafm://`))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var xh=J.div`
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
`,Sh=J.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Ch=J.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,wh=J.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,Th=J.button`
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
`,Eh=J.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,Dh=J.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${Fc}
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
`,Oh=J.button`
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
`,kh=J.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ah=J.div`
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
`,jh=J.button`
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
`,Mh=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,X.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,X.jsx)(`path`,{d:`M4 4v6h6`})]});function Nh({onOpenLocation:e,find:t,onSearchMatches:n,showDetails:r=!0,onShowDetails:i,videoAudio:a=!1,videoAutoplay:o=!1,platform:s}){let c=Kn(),l=Dd(`recycle`),u=s===`windows`,[d,f]=(0,_.useState)([]),[p,m]=(0,_.useState)([]),[h,g]=(0,_.useState)(!1),[v,y]=(0,_.useState)(null),[b,x]=(0,_.useState)(!0),[S,C]=(0,_.useState)(!1),[w,T]=(0,_.useState)(null),[E,D]=(0,_.useState)(!1),[O,ee]=(0,_.useState)(()=>new Set),[te,ne]=(0,_.useState)(null),[k,A]=(0,_.useState)(()=>{let e=Za(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[j,M]=(0,_.useState)(null),[N,P]=(0,_.useState)(null),[F,I]=(0,_.useState)(()=>{let e=Ya(`yafm.recycle.preview.width`,320);return e>=220?e:320}),L=(0,_.useRef)(null),R=e=>{I(e),Xa(`yafm.recycle.preview.width`,e)},re=(0,_.useCallback)(async()=>{x(!0),T(null);try{f(await gr(E))}catch(e){T(e instanceof Error?e.message:String(e))}finally{x(!1)}},[E]);(0,_.useEffect)(()=>{re()},[re]),(0,_.useEffect)(()=>{E||(m([]),g(!1),y(null))},[E]),(0,_.useEffect)(()=>{ee(e=>{let t=new Set(d.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[d]);let ie=(0,_.useMemo)(()=>{let e=new Set(d.map(e=>e.id));return[...d,...p.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=Ph(e,t,k.column);return k.descending?-n:n})},[d,p,k]),z=(0,_.useMemo)(()=>!t?.open||t.query.trim().length===0?ie:ie.filter(e=>Ra(e.name,t)||Ra(e.originalPath,t)),[ie,t?.open,t?.query,t?.matchCase,t?.regex]),ae=(0,_.useRef)(null);sm(ae,t??null,`[data-search-block]`,n??(()=>void 0),[ie]),(0,_.useEffect)(()=>{ee(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]);let oe=(0,_.useMemo)(()=>ie.filter(e=>O.has(e.id)),[ie,O]),se=oe.filter(e=>e.removable&&!e.isOrphan),ce=oe.filter(e=>e.removable),le=(e,t)=>{let n=t.ctrlKey||t.metaKey;ee(r=>{if(t.shiftKey&&te){let t=ie.findIndex(e=>e.id===te),i=ie.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(ie[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),ne(e.id)},ue=(0,_.useCallback)(()=>ee(new Set(z.map(e=>e.id))),[z]),B=z.length>0&&z.every(e=>O.has(e.id)),V=(0,_.useCallback)(async()=>{let e=se.map(e=>e.id);if(e.length!==0){C(!0);try{let t=await yr(e);t.ok||await Sc(Ni(c,e.length,`Restored {done} of 1 item.`,`Restored {done} of {total} items.`,{done:t.done,total:e.length})),ee(new Set),await re()}finally{C(!1)}}},[re,se,c]),de=(0,_.useCallback)(async()=>{let e=ce.map(e=>e.id);if(P(null),e.length!==0){C(!0);try{let t=await br(e);!t.ok&&!t.cancelled&&await Sc(Ni(c,e.length,`Deleted {done} of 1 item.`,`Deleted {done} of {total} items.`,{done:t.done,total:e.length})),ee(new Set),await re()}finally{C(!1)}}},[ce,re,c]),fe=async()=>{P(null),C(!0);try{await vr(E),ee(new Set),await re()}finally{C(!1)}},pe=async()=>{C(!0),y(null);try{let e=await Sr();if(e.cancelled){y(`Elevation was declined — nothing was read.`);return}if(e.failed){y(`The elevated helper could not produce a report. Try again.`);return}m(e.entries),g(!0)}finally{C(!1)}},H=async()=>{C(!0),P(null);try{await Cr(),m([]),g(!1),y(null),await re()}finally{C(!1)}},U=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},me=e=>{navigator.clipboard.writeText(e.originalPath)},he=(e,t)=>{e.preventDefault(),t&&!O.has(t.id)&&ee(new Set([t.id])),M({x:e.clientX,y:e.clientY})};(0,_.useEffect)(()=>(Sd(`recycle`,O.size>0?(e,t)=>M({x:e,y:t}):null),()=>Sd(`recycle`,null)),[O]),(0,_.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),ue()):e.key===`Delete`?(e.preventDefault(),ce.length>0&&P(`delete`)):e.key===`Enter`&&se.length>0?(e.preventDefault(),V()):e.key===`Escape`&&(ee(new Set),M(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[ce.length,se.length,V,ue]);let ge=[{label:c(`Restore`),icon:(0,X.jsx)(Mh,{width:14,height:14}),disabled:se.length===0,onSelect:()=>void V()},{label:c(`Delete permanently`),icon:(0,X.jsx)(Ts,{size:14}),danger:!0,disabled:ce.length===0,onSelect:()=>P(`delete`)},{label:c(`Properties`),icon:(0,X.jsx)(ys,{size:14}),disabled:oe.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=oe;e&&xr(e.id)}},{label:c(`Open original location`),icon:(0,X.jsx)(ls,{size:14}),disabled:oe.length!==1,onSelect:()=>{let[e]=oe;e&&U(e)}},{label:c(`Copy original path`),icon:(0,X.jsx)(cc,{size:14}),disabled:oe.length!==1,onSelect:()=>{let[e]=oe;e&&me(e)}},{label:c(`Select all`),separatorBefore:!0,onSelect:ue},{label:c(`Refresh`),icon:(0,X.jsx)(ms,{size:14}),onSelect:()=>void re()}],_e=oe.length>0?oe[0]:null,ve=_e?{name:_e.name,path:_e.contentPath||_e.originalPath,isDirectory:_e.isDirectory,size:_e.size,modified:_e.deleted,fields:[{label:c(`Type`),value:c(Ih(_e))},{label:c(`Original location`),value:_e.originalPath},{label:c(`Date deleted`),value:Vi(_e.deleted)},{label:c(`Size`),value:_e.isDirectory?`—`:Pi(_e.size)},..._e.owner?[{label:c(`Owner`),value:_e.owner}]:[],{label:c(`Status`),value:_e.isOrphan?c(`Metadata only`):_e.removable?c(`Restorable`):c(`Other profile`)}]}:null;return(0,X.jsxs)(Rh,{ref:L,onContextMenu:e=>he(e),children:[(0,X.jsxs)(zh,{children:[(0,X.jsxs)(Bh,{children:[(0,X.jsx)(Ts,{size:16}),(0,X.jsx)(`span`,{children:c(`Recycle Bin`)}),(0,X.jsxs)(Vh,{children:[b?`…`:Ni(c,ie.length,`1 item`,`{count} items`),O.size>0&&` · ${c(`{count} selected`,{count:O.size})}`]})]}),(0,X.jsxs)(Hh,{children:[(0,X.jsx)(Wh,{$on:E,onClick:()=>D(e=>!e),title:c(`Show metadata records whose content is already gone`),type:`button`,children:c(`Orphans`)}),E&&u&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Uh,{disabled:S||h,onClick:()=>void pe(),title:c(h?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`),type:`button`,children:c(S?`Working…`:h?`Admin view loaded`:`Show all (admin)…`)}),h&&p.length>0&&(0,X.jsx)(Uh,{disabled:S,onClick:()=>P(`purge`),type:`button`,children:c(`Delete every orphan`)})]}),(0,X.jsx)(Uh,{disabled:S||se.length===0,onClick:()=>void V(),type:`button`,children:c(`Restore`)}),(0,X.jsx)(Uh,{$danger:!0,disabled:S||ce.length===0,onClick:()=>P(`delete`),type:`button`,children:c(`Delete`)}),(0,X.jsx)(Uh,{disabled:S||ie.length===0,onClick:()=>P(`empty`),type:`button`,children:c(`Empty`)}),(0,X.jsx)(Gh,{onClick:()=>void re(),title:c(`Refresh`),type:`button`,children:(0,X.jsx)(ms,{size:14})}),l.available&&(0,X.jsx)(Gh,{onClick:e=>l.open(e.clientX,e.clientY),title:c(`Selection menu`),type:`button`,children:(0,X.jsx)(hc,{size:14})})]})]}),v&&(0,X.jsx)(fg,{children:v}),w&&(0,X.jsx)(pg,{children:w}),!w&&!b&&(t?.open&&t.query.trim().length>0?z.length===0:ie.length===0)&&(0,X.jsx)(pg,{children:t?.open&&t.query.trim().length>0?c(`No matching items.`):c(`The recycle bin is empty.`)}),ie.length>0&&(0,X.jsxs)(dg,{children:[(0,X.jsxs)(Kh,{ref:ae,children:[(0,X.jsxs)(Jh,{children:[(0,X.jsx)(eg,{$checked:B,$partial:!B&&O.size>0,onClick:()=>B?ee(new Set):ue(),title:c(B?`Select none`:`Select all`),type:`button`,children:B?(0,X.jsx)(Es,{size:9}):O.size>0&&(0,X.jsx)(tg,{})}),(0,X.jsxs)(Yh,{onClick:()=>ye(`name`),type:`button`,children:[c(`Name`),Fh(k,`name`)]}),(0,X.jsxs)(Yh,{onClick:()=>ye(`original`),type:`button`,children:[c(`Original location`),Fh(k,`original`)]}),(0,X.jsxs)(Yh,{onClick:()=>ye(`deleted`),type:`button`,children:[c(`Date deleted`),Fh(k,`deleted`)]}),(0,X.jsxs)(Yh,{onClick:()=>ye(`size`),type:`button`,children:[c(`Size`),Fh(k,`size`)]}),(0,X.jsxs)(Yh,{onClick:()=>ye(`type`),type:`button`,children:[c(`Type`),Fh(k,`type`)]}),(0,X.jsx)(`span`,{})]}),(0,X.jsx)(Xh,{onClick:e=>{e.target===e.currentTarget&&ee(new Set)},children:ie.map(e=>(0,X.jsxs)(Zh,{$checked:O.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>le(e,t),onContextMenu:t=>he(t,e),onDoubleClick:()=>{ee(new Set([e.id])),ne(e.id),i?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,X.jsx)($h,{$checked:O.has(e.id),children:O.has(e.id)&&(0,X.jsx)(Es,{size:9})}),(0,X.jsxs)(ng,{children:[(0,X.jsx)(Lh,{entry:e}),(0,X.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,X.jsx)(ug,{children:c(`metadata only`)}),e.owner&&(0,X.jsx)(ug,{$other:!0,children:c(`other profile`)})]}),(0,X.jsx)(ig,{children:e.originalPath}),(0,X.jsx)(ag,{children:Vi(e.deleted)}),(0,X.jsx)(og,{children:e.isDirectory?`—`:Pi(e.size)}),(0,X.jsx)(sg,{children:c(Ih(e))}),(0,X.jsxs)(cg,{children:[e.removable&&!e.isOrphan&&(0,X.jsx)(lg,{onClick:t=>{t.stopPropagation(),yr([e.id]).then(re)},title:c(`Restore to its original folder`),type:`button`,children:(0,X.jsx)(Mh,{})}),e.removable&&(0,X.jsx)(lg,{$danger:!0,onClick:t=>{t.stopPropagation(),ee(new Set([e.id])),P(`delete`)},title:e.isOrphan?c(`Remove the leftover record`):c(`Delete permanently`),type:`button`,children:(0,X.jsx)(Ts,{size:13})})]})]},e.id))})]}),r&&(0,X.jsx)(Yl,{emptyNote:c(`Nothing selected.`),info:ve,onWidth:R,selectionNote:oe.length>1?Ni(c,oe.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:a,videoAutoplay:o,width:F})]}),j&&(0,X.jsx)(Zc,{items:ge,onClose:()=>M(null),x:j.x,y:j.y}),(0,X.jsx)(Rl,{confirmLabel:c(N===`empty`?`Empty the bin`:N===`purge`?`Delete every orphan`:`Delete`),danger:!0,message:N===`empty`?Ni(c,ie.length,`Permanently delete 1 item? This cannot be undone.`,`Permanently delete {count} items? This cannot be undone.`):N===`purge`?c(`Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.`):Ni(c,ce.length,`Permanently delete 1 selected item? This cannot be undone.`,`Permanently delete {count} selected items? This cannot be undone.`),onCancel:()=>P(null),onConfirm:()=>{N===`empty`?fe():N===`purge`?H():de()},open:N!==null,title:c(N===`empty`?`Empty the recycle bin`:N===`purge`?`Delete every orphan`:`Delete permanently`)})]});function ye(e){A(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return Qa(`yafm.recycle.sort`,n),n})}}function Ph(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return Ih(e).localeCompare(Ih(t),void 0,{sensitivity:`base`})}}function Fh(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function Ih(e){if(e.isDirectory)return`Folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`File`}function Lh({entry:e}){let t=ba(e.originalPath,e.isDirectory);return(0,X.jsx)(rg,{children:t?(0,X.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,X.jsx)(ls,{}):(0,X.jsx)(us,{})})}var Rh=J.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,zh=J.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,Bh=J.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,Vh=J.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Hh=J.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Uh=J.button`
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
`,Wh=J(Uh)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Gh=J.button`
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
`,Kh=J.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,qh=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,Jh=J.div`
    display: grid;
    grid-template-columns: ${qh};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Yh=J.button`
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
`,Xh=J.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,Zh=J.div`
    display: grid;
    grid-template-columns: ${qh};
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
`,Qh=J.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$h=J.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,eg=J.button`
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
`,tg=J.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,ng=J(Qh)`
    display: flex;
    align-items: center;
    gap: 9px;
`,rg=J.span`
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
`,ig=J(Qh)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,ag=J(Qh)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,og=J(Qh)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,sg=J(Qh)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,cg=J.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,lg=J.button`
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
`,ug=J.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,dg=J.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,fg=J.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,pg=J.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function mg(){return Y.available?(await Y.request(`app.tags`)).tags:[]}async function hg(e){return!Y.available||!e?!1:(await Y.request(`app.tags.delete`,{name:e})).ok}async function gg(e,t){return!Y.available||!e?[]:(await Y.request(`app.tags.create`,{name:e,color:t})).tags}async function _g(e,t){return!Y.available||!e?!1:(await Y.request(`app.tags.color`,{name:e,color:t})).ok}async function vg(e,t){return!Y.available||!e||!t?!1:(await Y.request(`app.tags.rename`,{oldName:e,newName:t})).ok}var yg=`#3b82f6`,bg=`#6366f1`,xg=/^#?([0-9a-f]{6})$/i;function Sg(e,t){if(!e)return t;let n=xg.exec(e.trim());return n?`#${n[1].toLowerCase()}`:t}function Cg(e){let t=xg.exec(e);if(!t)return[59,130,246];let n=Number.parseInt(t[1],16);return[n>>16&255,n>>8&255,n&255]}function wg(e){let[t,n,r]=Cg(e).map(e=>e/255),i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2,s=i-a;if(s===0)return{hue:0,saturation:0};let c=s/(1-Math.abs(2*o-1));return{hue:((i===t?(n-r)/s%6:i===n?(r-t)/s+2:(t-n)/s+4)*60+360)%360,saturation:c*100}}function Tg(e,t,n,r=1){return r===1?`hsl(${e.toFixed(1)} ${t}% ${n}%)`:`hsl(${e.toFixed(1)} ${t}% ${n}% / ${r})`}function Eg(e,t,n){let r=t/100,i=n/100,a=(1-Math.abs(2*i-1))*r,o=a*(1-Math.abs(e/60%2-1)),s=i-a/2,[c,l,u]=e<60?[a,o,0]:e<120?[o,a,0]:e<180?[0,a,o]:e<240?[0,o,a]:e<300?[o,0,a]:[a,0,o];return[c,l,u].map(e=>Math.round((e+s)*255)).join(`, `)}function Dg(e,t){let n=Sg(e,yg),r=Sg(t,bg),[i,a,o]=Cg(n),[s,c,l]=Cg(r),{hue:u,saturation:d}=wg(n),f=Math.round(Math.min(Math.max(d*.35,6),30)),p=document.documentElement.style;p.setProperty(`--accent-primary`,n),p.setProperty(`--accent-rgb`,`${i}, ${a}, ${o}`),p.setProperty(`--accent-secondary`,r),p.setProperty(`--accent-secondary-rgb`,`${s}, ${c}, ${l}`),p.setProperty(`--border-color`,`rgba(${i}, ${a}, ${o}, 0.13)`),p.setProperty(`--border-color-hover`,`rgba(${i}, ${a}, ${o}, 0.40)`),p.setProperty(`--border-color-focus`,n),p.setProperty(`--accent-gradient`,`linear-gradient(135deg, ${n} 0%, ${r} 100%)`),p.setProperty(`--accent-glow`,`0 0 28px rgba(${i}, ${a}, ${o}, 0.28)`),p.setProperty(`--selection-bg`,`rgba(${i}, ${a}, ${o}, 0.11)`),p.setProperty(`--selection-border`,`rgba(${i}, ${a}, ${o}, 0.36)`),p.setProperty(`--bg-primary`,Tg(u,f,7)),p.setProperty(`--bg-secondary`,Tg(u,f,11)),p.setProperty(`--bg-card`,Tg(u,f,14,.75)),p.setProperty(`--bg-card-hover`,Tg(u,f,20,.85)),p.setProperty(`--bg-input`,Tg(u,f,9,.75)),p.setProperty(`--bg-elevated`,Tg(u,f,8,.96)),p.setProperty(`--bg-media`,Tg(u,f,4)),p.setProperty(`--bg-rgb`,Eg(u,f,7))}function Og(){let e=Kn();return(0,X.jsx)(kg,{title:e(`Always applies to every folder`),children:e(`Global`)})}var kg=J.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,Ag=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`reopenTab`,label:`Reopen closed tab`,note:`Brings back the tab you closed last, folder and all.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`refresh`,label:`Refresh`,note:`Reads the current folder again.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}],jg=`https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest`,Mg=`en`,Ng=[{id:`system`,label:`System`},{id:`24`,label:`24-hour`},{id:`12`,label:`12-hour`},{id:`custom`,label:`Custom`}],Pg=new Date(2026,10,5,16,8).getTime(),Fg=`system`,Ig={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},Lg=[{id:`application`,label:`Application`},{id:`time`,label:`Time format`},{id:`updates`,label:`Updates`},{id:`colors`,label:`Colors`},{id:`background`,label:`Background`},{id:`safety`,label:`Safety`},{id:`tags`,label:`Tags`},{id:`files-view`,label:`Files view`},{id:`shortcuts`,label:`Shortcuts`},{id:`memory`,label:`Memory`},{id:`overview`,label:`Overview`},{id:`gallery`,label:`Gallery`},{id:`icons`,label:`Icons`},{id:`extension-icons`,label:`Icons by extension`},{id:`folder-icons`,label:`Folder icons`},{id:`folder-index`,label:`Folder index`},{id:`indexing`,label:`Index tasks`},{id:`files`,label:`Files`}],Rg=`yafm.colors.recent`;function zg(){let e=Za(Rg);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function Bg({appInfo:e,focusSection:t,onSettingsChanged:n,find:r,onSearchMatches:i}){let a=Kn(),[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)(null),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)(``),[g,v]=(0,_.useState)(`file`),[y,b]=(0,_.useState)(!1),[x,S]=(0,_.useState)(!1),[C,w]=(0,_.useState)(null),[T,E]=(0,_.useState)(!1),[D,O]=(0,_.useState)(!1),[ee,te]=(0,_.useState)(null),[ne,k]=(0,_.useState)(null),[A,j]=(0,_.useState)(null),[M,N]=(0,_.useState)(!1),[P,F]=(0,_.useState)(null),[I,L]=(0,_.useState)(null),[R,re]=(0,_.useState)(!1),[ie,z]=(0,_.useState)([]),[ae,oe]=(0,_.useState)(null),[se,ce]=(0,_.useState)(!1),[le,ue]=(0,_.useState)(null),[B,V]=(0,_.useState)(``),[de,fe]=(0,_.useState)(Ou),[pe,H]=(0,_.useState)(null),[U,me]=(0,_.useState)(null),[he,ge]=(0,_.useState)(``),[_e,ve]=(0,_.useState)(``),[ye,be]=(0,_.useState)(null),[xe,Se]=(0,_.useState)(zg),[Ce,we]=(0,_.useState)({}),[W,Te]=(0,_.useState)(null),[Ee,De]=(0,_.useState)(null),[Oe,ke]=(0,_.useState)(!1),[Ae,je]=(0,_.useState)(!1),[Me,Ne]=(0,_.useState)(null),[Pe,Fe]=(0,_.useState)(Lg[0].id),Ie=(0,_.useRef)(null),Le=(0,_.useRef)({}),Re=u?.defaultView??ir,ze=u?.themePresets??[],Be=ne?ne.registered&&ne.pathMatches:u?.archiveHandler??!1,Ve=ne?.registered??u?.archiveHandler??!1,He=A?A.registered&&A.pathMatches:u?.defaultFileManager??!1;sm(Ie,r??null,`section`,i??(()=>void 0),[u]),(0,_.useEffect)(()=>{let e=Ie.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){Fe(Lg[Lg.length-1].id);return}let n=t+110,r=Lg[0].id;for(let{id:e}of Lg){let t=Le.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}Fe(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let Ue=e=>t=>{Le.current[e]=t},We=e=>{Le.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),Fe(e)};(0,_.useEffect)(()=>{t&&We(t)},[t]),(0,_.useEffect)(()=>{Un().then(e=>s(e.available),()=>s([]))},[]),(0,_.useEffect)(()=>{Kr().then(De,()=>void 0)},[]),(0,_.useEffect)(()=>{Ar().then(l,()=>l(null)),Pr().then(d,()=>d(null)),Zr().then(E,()=>E(!1)),Rr().then(k,()=>k(null)),Lr().then(j,()=>j(null)),mg().then(z,()=>z([]))},[]),(0,_.useEffect)(()=>{let e=()=>void Yr().then(w,()=>w(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let G=async e=>{if(!u)return;let t={...u,...e};Object.keys(e).every(e=>t[e]===u[e])||(d(t),ga(),d(await Vr(t)),n())},Ge=async e=>{let t=await vc(e);if(!t)return;let n=u?.backgroundCustom??[];await G({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},Ke=e=>{u&&G({backgroundCustom:u.backgroundCustom.filter(t=>t!==e),backgroundSource:u.backgroundSource===`file:${e}`?null:u.backgroundSource})},qe=async()=>{if(!u)return;let t=await _c();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;u.protectedPaths.includes(r)||await G({protectedPaths:[...u.protectedPaths,r]})},Je=()=>{let e=he.trim();u&&e&&!u.protectedPaths.includes(e)&&(ge(``),G({protectedPaths:[...u.protectedPaths,e]}))},Ye=()=>{if(!u||!pe)return;let e=pe.value.trim(),t=pe.from;H(null),e.length!==0&&e!==t&&G({protectedPaths:u.protectedPaths.map(n=>n===t?e:n)})},K=e=>{u&&G({protectedPaths:u.protectedPaths.filter(t=>t!==e)})},Xe=async()=>{let e=await Fr();e.length>0&&await G({protectedPaths:e})},Ze=()=>{if(!u||!U)return;let e=U.value.trim(),t=U.from;me(null),e&&e!==t&&G({directoryIndexBlacklist:u.directoryIndexBlacklist.map(n=>n===t?e:n)})},Qe=()=>{let e=_e.trim();u&&e&&!u.directoryIndexBlacklist.includes(e)&&(ve(``),G({directoryIndexBlacklist:[...u.directoryIndexBlacklist,e]}))},$e=async()=>{if(!u)return;let t=await _c();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;u.directoryIndexBlacklist.includes(r)||await G({directoryIndexBlacklist:[...u.directoryIndexBlacklist,r]})},et=e=>{u&&G({directoryIndexBlacklist:u.directoryIndexBlacklist.filter(t=>t!==e)})},tt=()=>{G({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},nt=()=>{if(!u||ye===null)return;let e=ye.trim()||`yyyy/MM/dd HH:mm`;be(null),e!==u.timeFormatPattern&&G({timeFormatPattern:e})},rt=(e,t)=>{Se(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return Qa(Rg,i),i})},it=Sg(u?.accentColor,yg),at=Sg(u?.secondaryColor,bg),ot=(e,t)=>{u&&(rt(`accent`,it),rt(`secondary`,at),G({accentColor:e,secondaryColor:t}))},st=(e,t)=>{u&&(rt(e,e===`accent`?it:at),G(e===`accent`?{accentColor:t}:{secondaryColor:t}))},ct=async()=>{ke(!0),je(!1);try{De(await qr())}catch{je(!0)}finally{ke(!1)}},lt=async()=>{if(!u||!W)return;let e=W.name.trim()||`${W.accent.toUpperCase()} / ${W.secondary.toUpperCase()}`,t=[...u.themePresets,{name:e,accent:W.accent,secondary:W.secondary}];Te(null),await G({themePresets:t})},ut=async e=>{u&&await G({themePresets:u.themePresets.filter((t,n)=>n!==e)})},dt=e=>{let t=Me;Ne(null),t&&t.role===e&&(e===`accent`?it:at).toLowerCase()!==t.color.toLowerCase()&&rt(e,t.color)},ft=async()=>{let e=B.trim();if(e&&!se){ce(!0),ue(null);try{z(await gg(e,de)),V(``)}catch{ue(a(`Could not add the tag.`))}finally{ce(!1)}}},pt=async(e,t)=>{z(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await _g(e,t)||ue(a(`Could not change the tag's color.`))},mt=async e=>{if(se)return;ce(!0),ue(null);let t=await hg(e);z(await mg()),t||ue(`"${e}" is still used by a folder whose index could not be updated.`),ce(!1)},ht=async()=>{let e=ae;if(!e||se)return;let t=e.value.trim();t.length===0||t===e.name?oe(null):(ce(!0),ue(null),await vg(e.name,t)?(z(await mg()),oe(null)):ue(`Could not rename "${e.name}".`),ce(!1))},gt=async e=>{let t=new Set(Re.columns??ir.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=Md.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await G({defaultView:{...Re,columns:n}})},_t=async()=>{if(D)return;let e=!T;O(!0),te(null);try{let t=await Qr(e);E(t),d(e=>e&&{...e,linksEnabled:t}),n(),t!==e&&te(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{te(`The request to Windows failed. Try again.`)}finally{O(!1)}},vt=async()=>{if(!M){N(!0),F(null);try{let e=await zr();k(e);let t=e.registered&&e.pathMatches;d(e=>e&&{...e,archiveHandler:t}),n(),t||F(`Windows did not accept the archive registration. Try again.`)}catch{F(`The request to Windows failed. Try again.`)}finally{N(!1)}}},yt=async()=>{if(!M){N(!0),F(null);try{let e=await Br();k(e),d(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&F(`The registration is still there. Try turning it off again.`)}catch{F(`The request to Windows failed. Try again.`)}finally{N(!1)}}},bt=async(e,t)=>{if(!u)return;let n={...u.extensionIcons};t===null?delete n[e]:n[e]=t,await G({extensionIcons:n})},xt={...Ti,...u?.shortcuts};(0,_.useEffect)(()=>{if(!I)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){L(null);return}let t=ki(e);t&&(L(null),G({shortcuts:{...xt,[I]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[I,u]),(0,_.useEffect)(()=>{if(!R)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){re(!1);return}let t=ki(e);t&&(re(!1),G({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[R,u]);let St=async e=>{await G({recentLimit:Math.min(Math.max(e,0),50)})},Ct=(e,t)=>{let n=t??Ce[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};we(t=>({...t,[e]:void 0})),G(i)},wt=async e=>{await G({galleryRoots:e.length>0?e:null})},Tt=async()=>{let e=await _c(),t=u?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await wt([...t,e])},Et=async()=>{let e=m.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await bt(e,g),h(``))},Dt=async()=>{S(!0);try{let e=await _c();if(!e)return;let t=await vc([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await Ur(e.replace(/[\\/][^\\/]+$/,``),Xi(e),`file:${t}`)&&(ga(),p({folder:e,icon:t}))}finally{S(!1)}};return(0,X.jsxs)(Qg,{children:[(0,X.jsxs)($g,{ref:Ie,children:[(0,X.jsxs)(e_,{ref:Ue(`application`),children:[(0,X.jsx)(Zg,{note:`The build, its yafm:// links, and what reopens at launch.`,title:`Application`}),(0,X.jsxs)(n_,{children:[(0,X.jsxs)(Q,{children:[(0,X.jsx)($,{children:a(`Version`)}),(0,X.jsx)(M_,{children:e?`v${e.version}`:`—`})]}),(0,X.jsxs)(Q,{children:[(0,X.jsx)($,{children:a(`Platform`)}),(0,X.jsx)(M_,{children:e?.platform??`—`})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Language`)}),(0,X.jsx)(A_,{children:a(`The language the interface uses. English is the default; the system option follows the operating system.`)})]}),(0,X.jsx)(O_,{children:(0,X.jsx)(Jg,{disabled:!u,onChange:e=>void G({language:e}),options:[Fg,...o.length>0?o:[Mg]],value:u?.language??Mg})})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Picker window size`)}),(0,X.jsx)(A_,{children:a(`The size the folder and file picker opens at. Width and height are in pixels.`)})]}),(0,X.jsxs)(O_,{children:[(0,X.jsx)(H_,{inputMode:`numeric`,onBlur:e=>Ct(`width`,e.currentTarget.value),onChange:e=>we(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Ce.width??String(u?.pickerWindowWidth??1200)}),(0,X.jsx)(M_,{children:`×`}),(0,X.jsx)(H_,{inputMode:`numeric`,onBlur:e=>Ct(`height`,e.currentTarget.value),onChange:e=>we(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Ce.height??String(u?.pickerWindowHeight??800)})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Link paths`)}),(0,X.jsx)(A_,{children:a(`Relative links keep working when the link and its target move together. Absolute links always store the full target path.`)})]}),(0,X.jsx)(O_,{children:(0,X.jsx)(fl,{disabled:!u,onChange:e=>void G({linkPathMode:e}),options:[{value:`relative`,label:a(`Relative`)},{value:`absolute`,label:a(`Absolute`)}],value:u?.linkPathMode??`relative`,width:160})})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Global hotkey`)}),(0,X.jsx)(A_,{children:a(`Brings the window forward from anywhere while the app is running. Empty means no global shortcut.`)})]}),(0,X.jsxs)(O_,{children:[(0,X.jsx)(bv,{$listening:R,disabled:!u,onClick:()=>re(!0),type:`button`,children:R?a(`Press a key…`):u?.globalHotkey?Ai(u.globalHotkey):a(`None`)}),u?.globalHotkey&&(0,X.jsx)(F_,{onClick:()=>void G({globalHotkey:null}),type:`button`,children:a(`Clear`)})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Open yafm:// links`)}),(0,X.jsx)(A_,{children:a(`Registers this app for yafm:// links, for the current user only. While this is on, the app repairs the entry at every launch.`)}),ee&&(0,X.jsx)(j_,{children:ee})]}),(0,X.jsxs)(O_,{children:[(0,X.jsx)(z_,{$on:T,children:a(T?`Active`:`Off`)}),(0,X.jsx)(B_,{$on:T,disabled:D,onClick:()=>void _t(),title:a(T?`Stop opening yafm:// links`:`Open yafm:// links with this app`),type:`button`,children:(0,X.jsx)(V_,{})})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Use as the default file manager`)}),(0,X.jsx)(A_,{children:a(`Registers this app for folder opens on this account. Explorer stays available from the context menu; on Linux this sets the inode/directory default.`)}),A?.registered&&!A.pathMatches&&(0,X.jsx)(j_,{children:a(`The registered path points to {path}. Register again to use this build.`,{path:A.registeredPath??`?`})})]}),(0,X.jsxs)(O_,{children:[(0,X.jsx)(z_,{$on:He,children:a(He?`Active`:`Off`)}),(0,X.jsx)(B_,{$on:He,disabled:!u,onClick:()=>void(async()=>{let e=A?.registered&&!A.pathMatches?!0:!u?.defaultFileManager;await G({defaultFileManager:e}),j(await Lr().catch(()=>null))})(),title:a(He?`Stop using this app for folders`:`Use this app for folders`),type:`button`,children:(0,X.jsx)(V_,{})})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Open archives with this app`)}),(0,X.jsx)(A_,{children:a(`Registers this app for ZIP, 7z, RAR, TAR and the other archive types on this account, so double-clicking one shows it as a folder here. Windows may still ask once which app to use.`)}),(0,X.jsx)(A_,{children:a(`When this is off, opening an archive uses the system's default application instead.`)}),ne?.registered&&!ne.pathMatches&&(0,X.jsx)(j_,{children:a(`The registered path points to {path}. Register again to use this build.`,{path:ne.registeredPath??`?`})}),P&&(0,X.jsx)(j_,{children:P})]}),(0,X.jsxs)(O_,{children:[(0,X.jsx)(z_,{$on:Be,children:a(Be?`Active`:`Off`)}),(0,X.jsx)(xv,{disabled:!u||M||Be,onClick:()=>void vt(),type:`button`,children:a(`Register`)}),e?.platform===`windows`&&(0,X.jsx)(xv,{onClick:()=>void Jr(`ms-settings:defaultapps`),type:`button`,children:a(`Default apps…`)}),(0,X.jsx)(R_,{disabled:!u||M||!Ve,onClick:()=>void yt(),type:`button`,children:a(`Unregister`)})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Reopen the tabs that were open`)}),(0,X.jsx)(A_,{children:a(`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`)})]}),(0,X.jsx)(B_,{$on:u?.restoreTabs??!0,disabled:!u,onClick:()=>void G({restoreTabs:!u?.restoreTabs}),type:`button`,children:(0,X.jsx)(V_,{})})]})]})]}),(0,X.jsxs)(e_,{ref:Ue(`time`),children:[(0,X.jsx)(Zg,{note:`Every timestamp in the interface uses this format: follow the system, force 24-hour or 12-hour time, or define your own pattern.`,title:`Time format`}),(0,X.jsx)(n_,{children:(0,X.jsxs)(r_,{children:[(0,X.jsxs)(i_,{children:[(0,X.jsx)($,{children:a(`Format`)}),(0,X.jsx)(A_,{children:a(`Follow the system, force 24-hour or 12-hour time, or define your own pattern.`)})]}),(0,X.jsx)(mv,{children:Ng.map(e=>(0,X.jsx)(hv,{$active:(u?.timeFormat??`24`)===e.id,onClick:()=>void G({timeFormat:e.id}),type:`button`,children:a(e.label)},e.id))}),(u?.timeFormat??`24`)===`custom`&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(gv,{"aria-label":a(`Pattern`),onBlur:nt,onChange:e=>be(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),nt()):e.key===`Escape`&&be(null)},spellCheck:!1,value:ye??u?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,X.jsx)(A_,{children:a(`Tokens: yyyy year, MM month, dd day, HH 24-hour, mm minute, ss second, hh 12-hour and a AM/PM. Other characters are copied.`)})]}),(0,X.jsxs)(_v,{children:[(0,X.jsx)(`span`,{children:a(`Preview`)}),(0,X.jsx)(`code`,{children:Hi(Pg,u?.timeFormat,ye??u?.timeFormatPattern)})]})]})})]}),(0,X.jsxs)(e_,{ref:Ue(`updates`),children:[(0,X.jsx)(Zg,{note:`The running build and the newest one published.`,title:`Updates`}),(0,X.jsxs)(n_,{children:[(0,X.jsxs)(Q,{children:[(0,X.jsx)($,{children:a(`Current version`)}),(0,X.jsx)(M_,{children:e?`v${e.version}`:`—`})]}),(0,X.jsxs)(Q,{children:[(0,X.jsx)($,{children:a(`Latest version`)}),(0,X.jsx)(M_,{children:Ee?`v${Ee.latest}`:`—`})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Check for updates`)}),(0,X.jsx)(A_,{children:Ee&&!Ee.available?a(`You are on the latest version.`):a(`Reads the version file the release workflow publishes.`)})]}),(0,X.jsx)(O_,{children:(0,X.jsx)(xv,{disabled:Oe,onClick:()=>void ct(),type:`button`,children:a(Oe?`Checking…`:`Check now`)})})]}),Ee?.available&&(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Version {version} is available.`,{version:Ee.latest})}),(0,X.jsx)(A_,{children:a(`Download the new build from the releases page.`)})]}),(0,X.jsx)(O_,{children:(0,X.jsx)(xv,{onClick:()=>void Jr(jg),type:`button`,children:a(`Open release page`)})})]}),Ae&&(0,X.jsx)(Q,{children:(0,X.jsx)(j_,{children:a(`Could not check for updates.`)})})]})]}),(0,X.jsxs)(e_,{ref:Ue(`colors`),children:[(0,X.jsx)(Zg,{note:`The accent and highlight colours the whole window uses.`,title:`Colors`}),(0,X.jsxs)(n_,{children:[(0,X.jsxs)(r_,{children:[(0,X.jsxs)(i_,{children:[(0,X.jsx)($,{children:a(`Presets`)}),(0,X.jsx)(A_,{children:a(`One click changes the accent and the highlight together.`)})]}),(0,X.jsxs)(a_,{children:[ep.map(e=>(0,X.jsxs)(o_,{$on:it.toLowerCase()===e.accent&&at.toLowerCase()===e.secondary,onClick:()=>ot(e.accent,e.secondary),title:`${a(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,X.jsxs)(p_,{children:[(0,X.jsx)(`i`,{style:{background:e.accent}}),(0,X.jsx)(`i`,{style:{background:e.secondary}})]}),(0,X.jsx)(s_,{children:a(e.name)})]},e.name)),ze.map((e,t)=>(0,X.jsxs)(c_,{children:[(0,X.jsxs)(o_,{$on:it.toLowerCase()===e.accent.toLowerCase()&&at.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>ot(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,X.jsxs)(p_,{children:[(0,X.jsx)(`i`,{style:{background:e.accent}}),(0,X.jsx)(`i`,{style:{background:e.secondary}})]}),(0,X.jsx)(s_,{children:e.name})]}),(0,X.jsx)(l_,{onClick:()=>void ut(t),title:a(`Remove preset`),type:`button`,children:(0,X.jsx)(Ds,{size:9})})]},`${e.name}-${t}`)),W?(0,X.jsxs)(d_,{children:[(0,X.jsxs)(p_,{children:[(0,X.jsx)(`i`,{style:{background:W.accent}}),(0,X.jsx)(`i`,{style:{background:W.secondary}})]}),(0,X.jsx)(f_,{autoFocus:!0,maxLength:24,onChange:e=>Te({...W,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),lt()):e.key===`Escape`&&(e.preventDefault(),Te(null))},placeholder:a(`Preset name`),spellCheck:!1,value:W.name}),(0,X.jsx)(F_,{onClick:()=>void lt(),type:`button`,children:a(`Save`)}),(0,X.jsx)(F_,{onClick:()=>Te(null),type:`button`,children:a(`Cancel`)})]}):(0,X.jsxs)(u_,{disabled:!u,onClick:()=>Te({name:``,accent:it,secondary:at}),title:a(`Save the current colours as a preset`),type:`button`,children:[(0,X.jsx)(hs,{size:12}),a(`Add preset`)]})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Accent color`)}),(0,X.jsx)(A_,{children:a(`Buttons, selections, focus rings, and active navigation.`)})]}),(0,X.jsxs)(O_,{children:[(0,X.jsx)(Xg,{colors:xe.accent,current:it,onApply:e=>st(`accent`,e)}),(0,X.jsx)(I_,{"aria-label":a(`Accent color`),disabled:!u,onBlur:()=>dt(`accent`),onChange:e=>void G({accentColor:e.target.value}),onFocus:()=>Ne({role:`accent`,color:it}),type:`color`,value:it}),(0,X.jsx)(L_,{children:it.toUpperCase()})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Secondary color`)}),(0,X.jsx)(A_,{children:a(`Gradients, highlights, and the second end of the accent ramp.`)})]}),(0,X.jsxs)(O_,{children:[(0,X.jsx)(Xg,{colors:xe.secondary,current:at,onApply:e=>st(`secondary`,e)}),(0,X.jsx)(I_,{"aria-label":a(`Secondary color`),disabled:!u,onBlur:()=>dt(`secondary`),onChange:e=>void G({secondaryColor:e.target.value}),onFocus:()=>Ne({role:`secondary`,color:at}),type:`color`,value:at}),(0,X.jsx)(L_,{children:at.toUpperCase()})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Reset colors`)}),(0,X.jsx)(A_,{children:a(`Returns the interface to the default blue and indigo theme.`)})]}),(0,X.jsx)(O_,{children:(0,X.jsx)(F_,{disabled:!u,onClick:()=>{rt(`accent`,it),rt(`secondary`,at),G({accentColor:null,secondaryColor:null})},type:`button`,children:a(`Reset`)})})]})]})]}),(0,X.jsxs)(e_,{ref:Ue(`background`),children:[(0,X.jsx)(Zg,{note:`A picture or video behind the whole window, from the title bar to the bottom.`,title:`Background`}),(0,X.jsxs)(n_,{children:[(0,X.jsxs)(r_,{children:[(0,X.jsxs)(i_,{children:[(0,X.jsx)($,{children:a(`Wallpaper`)}),(0,X.jsx)(A_,{children:a(`None keeps the normal dark surface. Every built-in concept comes in the app's colour presets; your own pictures, SVGs and videos are kept in the gallery.`)})]}),(0,X.jsx)(ev,{children:(0,X.jsx)(tv,{$active:!u?.backgroundSource,onClick:()=>void G({backgroundSource:null}),title:a(`None`),type:`button`,children:(0,X.jsx)(ov,{children:a(`None`)})})}),(0,X.jsxs)(Z_,{children:[rp.map(e=>(0,X.jsxs)(Q_,{children:[(0,X.jsx)($_,{children:a(e.name)}),(0,X.jsx)(ev,{children:e.variants.map(t=>(0,X.jsx)(tv,{$active:u?.backgroundSource===t.id,onClick:()=>void G({backgroundSource:t.id}),title:`${a(e.name)} · ${a(t.preset)}`,type:`button`,children:(0,X.jsx)(`img`,{alt:``,src:t.url})},t.id))})]},e.id)),(0,X.jsxs)(Q_,{children:[(0,X.jsx)($_,{children:a(`Motion`)}),(0,X.jsx)(ev,{children:np.map(e=>(0,X.jsxs)(tv,{$active:u?.backgroundSource===e.id,onClick:()=>void G({backgroundSource:e.id}),title:a(e.name),type:`button`,children:[(0,X.jsx)(`img`,{alt:``,src:e.poster}),(0,X.jsx)(iv,{children:(0,X.jsx)(Ms,{size:11})})]},e.id))})]}),(0,X.jsxs)(Q_,{children:[(0,X.jsx)($_,{children:a(`Custom`)}),(0,X.jsxs)(ev,{children:[(u?.backgroundCustom??[]).map(e=>(0,X.jsx)(qg,{active:u?.backgroundSource===`file:${e}`,onRemove:()=>Ke(e),onSelect:()=>void G({backgroundSource:`file:${e}`}),path:e},e)),(0,X.jsxs)(av,{onClick:()=>void Ge([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,X.jsx)(hs,{size:12}),a(`Image…`)]}),(0,X.jsxs)(av,{onClick:()=>void Ge([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,X.jsx)(hs,{size:12}),a(`Video…`)]})]})]})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsx)($,{children:a(`Blur`)}),(0,X.jsxs)(O_,{children:[(0,X.jsx)(X_,{max:40,min:0,onChange:e=>void G({backgroundBlur:Number(e.target.value)}),type:`range`,value:u?.backgroundBlur??0}),(0,X.jsxs)(M_,{children:[u?.backgroundBlur??0,`px`]})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsx)($,{children:a(`Saturation`)}),(0,X.jsxs)(O_,{children:[(0,X.jsx)(X_,{max:200,min:0,onChange:e=>void G({backgroundSaturation:Number(e.target.value)}),type:`range`,value:u?.backgroundSaturation??100}),(0,X.jsxs)(M_,{children:[u?.backgroundSaturation??100,`%`]})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsx)($,{children:a(`Brightness`)}),(0,X.jsxs)(O_,{children:[(0,X.jsx)(X_,{max:150,min:40,onChange:e=>void G({backgroundBrightness:Number(e.target.value)}),type:`range`,value:u?.backgroundBrightness??100}),(0,X.jsxs)(M_,{children:[u?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,X.jsxs)(e_,{ref:Ue(`safety`),children:[(0,X.jsx)(Zg,{note:`Deleting a protected folder, anything inside a recursive entry, or a folder that contains one always waits for an explicit confirmation.`,title:`Safety`}),(0,X.jsxs)(n_,{children:[(0,X.jsxs)(r_,{children:[(0,X.jsxs)(i_,{children:[(0,X.jsx)($,{children:a(`Protected folders`)}),(0,X.jsx)(A_,{children:a(`Rules are full-path globs: * stays inside one name, ** crosses folders, and ? matches one character. A rule without a folder part, such as *.log, applies to that name at any depth. %VARS%, $VARS and ~ are expanded first.`)})]}),(0,X.jsx)(sv,{children:(u?.protectedPaths??[]).map(e=>(0,X.jsxs)(cv,{children:[(0,X.jsx)(lv,{"aria-label":a(`Protected path`),onBlur:Ye,onChange:t=>H({from:e,value:t.target.value}),onFocus:()=>H({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Ye()):e.key===`Escape`&&H(null)},spellCheck:!1,value:pe?.from===e?pe.value:e}),(0,X.jsx)(uv,{onClick:()=>K(e),title:a(`Remove`),type:`button`,children:(0,X.jsx)(Ds,{size:10})})]},e))}),(0,X.jsxs)(fv,{children:[(0,X.jsx)(pv,{"aria-label":a(`New protected rule`),onChange:e=>ge(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Je())},placeholder:`*.log`,spellCheck:!1,value:he}),(0,X.jsx)(F_,{onClick:Je,type:`button`,children:a(`Add the rule`)})]}),(0,X.jsxs)(dv,{children:[(0,X.jsx)(F_,{onClick:()=>void Xe(),type:`button`,children:a(`Restore defaults`)}),(0,X.jsx)(F_,{onClick:()=>void qe(),type:`button`,children:a(`Add folder…`)})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Confirmation delay`)}),(0,X.jsx)(A_,{children:a(`The delete button in the protected-folder dialog stays disabled for this many seconds. At least 2.`)})]}),(0,X.jsxs)(O_,{children:[(0,X.jsx)(X_,{max:30,min:2,onChange:e=>void G({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:u?.deleteDelaySeconds??5}),(0,X.jsxs)(M_,{children:[u?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,X.jsxs)(e_,{ref:Ue(`tags`),children:[(0,X.jsx)(Zg,{note:`Every tag in the catalogue; add, rename, recolour or remove them here.`,title:`Tags`}),(0,X.jsxs)(n_,{children:[(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsxs)(k_,{children:[(0,X.jsx)(N_,{"aria-label":a(`Color of the new tag`),onChange:e=>fe(e.target.value),type:`color`,value:de}),(0,X.jsx)(H_,{onChange:e=>V(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),ft())},placeholder:a(`New tag`),spellCheck:!1,value:B})]}),(0,X.jsx)(A_,{children:a(`Add a tag here; it is available in every folder.`)})]}),(0,X.jsx)(O_,{children:(0,X.jsx)(F_,{disabled:se||B.trim().length===0,onClick:()=>void ft(),type:`button`,children:a(`Add`)})})]}),le&&(0,X.jsx)(Q,{children:(0,X.jsx)(j_,{children:le})}),ie.length===0&&(0,X.jsx)(Q,{children:(0,X.jsx)(A_,{children:a(`No tags yet. Add one below; it is available in every folder.`)})}),ie.map(e=>(0,X.jsx)(Q,{children:ae?.name===e.name?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsxs)(k_,{children:[(0,X.jsx)(N_,{"aria-label":a(`Color of {tag}`,{tag:e.name}),onChange:t=>void pt(e.name,t.target.value),title:a(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,X.jsx)(P_,{autoFocus:!0,disabled:se,onChange:t=>oe({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),ht()):e.key===`Escape`&&(e.preventDefault(),oe(null))},value:ae.value})]}),(0,X.jsx)(A_,{children:a(`Press Enter to save, Escape to cancel.`)})]}),(0,X.jsxs)(O_,{children:[(0,X.jsx)(F_,{disabled:se,onClick:()=>void ht(),type:`button`,children:a(`Save`)}),(0,X.jsx)(F_,{disabled:se,onClick:()=>oe(null),type:`button`,children:a(`Cancel`)})]})]}):(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsxs)(k_,{children:[(0,X.jsx)(N_,{"aria-label":a(`Color of {tag}`,{tag:e.name}),onChange:t=>void pt(e.name,t.target.value),title:a(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,X.jsx)($,{children:e.name})]}),(0,X.jsx)(A_,{children:Ni(a,e.folders,`Used in 1 folder. Renaming or removing it updates that folder's index.`,`Used in {count} folders. Renaming or removing it updates those folders' indexes.`)})]}),(0,X.jsxs)(O_,{children:[(0,X.jsx)(F_,{disabled:se,onClick:()=>oe({name:e.name,value:e.name}),type:`button`,children:a(`Edit`)}),(0,X.jsxs)(R_,{disabled:se,onClick:()=>void mt(e.name),type:`button`,children:[(0,X.jsx)(Ts,{size:13}),a(`Remove`)]})]})]})},e.name))]})]}),(0,X.jsxs)(e_,{ref:Ue(`files-view`),children:[(0,X.jsx)(Zg,{note:`The defaults every folder starts with; a folder can still override them.`,title:`Files view`,global:!0}),(0,X.jsxs)(n_,{children:[(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Default view`)}),(0,X.jsx)(A_,{children:a(`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`)})]}),(0,X.jsx)(O_,{children:(0,X.jsxs)(J_,{children:[(0,X.jsx)(Y_,{$on:Re.mode===`list`,onClick:()=>void G({defaultView:{...Re,mode:`list`}}),type:`button`,children:a(`List`)}),(0,X.jsx)(Y_,{$on:Re.mode===`grid`,onClick:()=>void G({defaultView:{...Re,mode:`grid`}}),type:`button`,children:a(`Grid`)})]})})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`List icon size`)}),(0,X.jsx)(A_,{children:a(`The icon in the list rows.`)})]}),(0,X.jsxs)(O_,{children:[(0,X.jsx)(X_,{max:48,min:16,onChange:e=>void G({defaultView:{...Re,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Re.iconSize}),(0,X.jsxs)(M_,{children:[Re.iconSize,`px`]})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Grid size`)}),(0,X.jsx)(A_,{children:a(`The height of a grid tile; the icon inside follows it.`)})]}),(0,X.jsxs)(O_,{children:[(0,X.jsx)(X_,{max:260,min:100,onChange:e=>void G({defaultView:{...Re,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Re.gridSize}),(0,X.jsxs)(M_,{children:[Re.gridSize,`px`]})]})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsxs)(k_,{children:[(0,X.jsx)($,{children:a(`Selection checkboxes`)}),(0,X.jsx)(Og,{})]}),(0,X.jsx)(A_,{children:a(`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`)})]}),(0,X.jsx)(B_,{$on:u?.showCheckboxes??!0,disabled:!u,onClick:()=>void G({showCheckboxes:!(u?.showCheckboxes??!0)}),type:`button`,children:(0,X.jsx)(V_,{})})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsxs)(k_,{children:[(0,X.jsx)($,{children:a(`Open with a single click`)}),(0,X.jsx)(Og,{})]}),(0,X.jsx)(A_,{children:a(`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`)})]}),(0,X.jsx)(B_,{$on:u?.openOnSingleClick??!1,disabled:!u,onClick:()=>void G({openOnSingleClick:!(u?.openOnSingleClick??!1)}),type:`button`,children:(0,X.jsx)(V_,{})})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsxs)(k_,{children:[(0,X.jsx)($,{children:a(`Confirm before deleting`)}),(0,X.jsx)(Og,{})]}),(0,X.jsx)(A_,{children:a(`Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.`)})]}),(0,X.jsx)(B_,{$on:u?.confirmDelete??!1,disabled:!u,onClick:()=>void G({confirmDelete:!(u?.confirmDelete??!1)}),type:`button`,children:(0,X.jsx)(V_,{})})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsxs)(k_,{children:[(0,X.jsx)($,{children:a(`Play audio in video previews`)}),(0,X.jsx)(Og,{})]}),(0,X.jsx)(A_,{children:a(`Video previews play muted by default. Turn this on to hear their audio while the details panel is open.`)})]}),(0,X.jsx)(B_,{$on:u?.previewVideoAudio??!1,disabled:!u,onClick:()=>void G({previewVideoAudio:!(u?.previewVideoAudio??!1)}),type:`button`,children:(0,X.jsx)(V_,{})})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsxs)(k_,{children:[(0,X.jsx)($,{children:a(`Autoplay video previews`)}),(0,X.jsx)(Og,{})]}),(0,X.jsx)(A_,{children:a(`Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.`)})]}),(0,X.jsx)(B_,{$on:u?.previewVideoAutoplay??!1,disabled:!u,onClick:()=>void G({previewVideoAutoplay:!(u?.previewVideoAutoplay??!1)}),type:`button`,children:(0,X.jsx)(V_,{})})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsxs)(k_,{children:[(0,X.jsx)($,{children:a(`Preview panel under the list`)}),(0,X.jsx)(Og,{})]}),(0,X.jsx)(A_,{children:a(`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`)})]}),(0,X.jsx)(B_,{$on:Re.showImages??!0,onClick:()=>void G({defaultView:{...Re,showImages:!(Re.showImages??!0)}}),type:`button`,children:(0,X.jsx)(V_,{})})]}),(0,X.jsx)(Q,{children:(0,X.jsxs)(D_,{children:[(0,X.jsxs)(k_,{children:[(0,X.jsx)($,{children:a(`Columns`)}),(0,X.jsx)(Og,{})]}),(0,X.jsx)(A_,{children:a(`Shown in every folder; changing them changes all folders at once.`)})]})}),(0,X.jsx)(Q,{children:(0,X.jsxs)(vv,{children:[Md.map(e=>(0,X.jsxs)(yv,{children:[(0,X.jsx)(`input`,{checked:(Re.columns??[]).includes(e.id),onChange:()=>void gt(e.id),type:`checkbox`}),(0,X.jsx)(`span`,{children:a(e.label)})]},e.id)),(0,X.jsxs)(yv,{children:[(0,X.jsx)(`input`,{checked:(Re.columns??[]).includes(`linkTarget`),onChange:()=>void gt(`linkTarget`),type:`checkbox`}),(0,X.jsx)(`span`,{children:a(`Link target after the name`)})]})]})})]}),(0,X.jsxs)(Tv,{children:[a(`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.`),` `,(0,X.jsx)(Og,{}),` `,a(`Anything marked as global always applies to every folder.`)]})]}),(0,X.jsxs)(e_,{ref:Ue(`shortcuts`),children:[(0,X.jsx)(Zg,{note:`The keys this window listens for. Click a combination to record a new one.`,title:`Shortcuts`}),(0,X.jsxs)(n_,{children:[Ag.map(({id:e,label:t,note:n})=>(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(t)}),(0,X.jsx)(A_,{children:a(n)})]}),(0,X.jsx)(O_,{children:(0,X.jsx)(bv,{$listening:I===e,onClick:()=>L(e),type:`button`,children:I===e?a(`Press a key…`):Ai(xt[e])})})]},e)),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Reset`)}),(0,X.jsx)(A_,{children:a(`Back to the default combination for every action.`)})]}),(0,X.jsx)(O_,{children:(0,X.jsx)(xv,{onClick:()=>void G({shortcuts:{...Ti}}),type:`button`,children:a(`Reset`)})})]})]})]}),(0,X.jsxs)(e_,{ref:Ue(`memory`),children:[(0,X.jsx)(Zg,{note:`What the process holds and how to give it back.`,title:`Memory`}),(0,X.jsxs)(n_,{children:[(0,X.jsxs)(C_,{children:[(0,X.jsxs)(w_,{children:[(0,X.jsx)($,{children:a(`Process memory`)}),(0,X.jsx)(M_,{children:C?`${Pi(C.private)} · ${S_(C.private,C.available)}`:`—`})]}),(0,X.jsx)(T_,{children:(0,X.jsx)(E_,{$ratio:C?C.private/Math.max(C.available,1):0,$tone:Yi(C?C.private/Math.max(C.available,1):0)})}),(0,X.jsx)(A_,{children:C?a(`Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.`,{available:Pi(C.available),resident:Pi(C.workingSet)}):a(`Reading the current usage…`)})]}),(0,X.jsxs)(C_,{children:[(0,X.jsxs)(w_,{children:[(0,X.jsx)($,{children:a(`Managed heap`)}),(0,X.jsx)(M_,{children:C?`${Pi(C.managed)} · ${S_(C.managed,C.private)}`:`—`})]}),(0,X.jsx)(T_,{children:(0,X.jsx)(E_,{$ratio:C?C.managed/Math.max(C.private,1):0,$tone:`var(--accent-secondary)`})}),(0,X.jsx)(A_,{children:a(`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`)})]}),(0,X.jsxs)(C_,{children:[(0,X.jsxs)(w_,{children:[(0,X.jsx)($,{children:a(`Native and runtime`)}),(0,X.jsx)(M_,{children:C?`${Pi(Math.max(0,C.private-C.managed))} · ${S_(Math.max(0,C.private-C.managed),C.private)}`:`—`})]}),(0,X.jsx)(T_,{children:(0,X.jsx)(E_,{$ratio:C?Math.max(0,C.private-C.managed)/Math.max(C.private,1):0,$tone:`var(--accent-primary)`})}),(0,X.jsx)(A_,{children:a(`The runtime, loaded libraries and the Rust helper share this part. Rust runs inside the process, so it has no separate figure.`)})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Free memory`)}),(0,X.jsx)(A_,{children:a(`Compacts the heap and returns unused pages to the system. Always safe.`)})]}),(0,X.jsx)(O_,{children:(0,X.jsx)(xv,{onClick:()=>void Xr().then(w),type:`button`,children:a(`Trim now`)})})]})]})]}),(0,X.jsxs)(e_,{ref:Ue(`overview`),children:[(0,X.jsx)(Zg,{note:`The home tab's history and how much of it it shows.`,title:`Overview`}),(0,X.jsx)(n_,{children:(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Recent items`)}),(0,X.jsx)(A_,{children:a(`How many recently opened folders the overview lists. 0 hides the section.`)})]}),(0,X.jsx)(O_,{children:(0,X.jsx)(H_,{max:50,min:0,onChange:e=>void St(Number(e.target.value)),type:`number`,value:u?.recentLimit??10})})]})})]}),(0,X.jsxs)(e_,{ref:Ue(`gallery`),children:[(0,X.jsx)(Zg,{note:`The folders the gallery scans for pictures and videos.`,title:`Gallery`}),(0,X.jsxs)(n_,{children:[(u?.galleryRoots??[]).map(e=>(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:Xi(e)}),(0,X.jsx)(A_,{children:e})]}),(0,X.jsx)(O_,{children:(0,X.jsx)(Sv,{onClick:()=>void wt((u?.galleryRoots??[]).filter(t=>t!==e)),title:a(`Stop scanning this folder`),type:`button`,children:(0,X.jsx)(Ds,{size:12})})})]},e)),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Scan folders`)}),(0,X.jsx)(A_,{children:(u?.galleryRoots??[]).length===0?a(`Nothing added yet, so the gallery reads the Pictures folder.`):a(`Only these folders are scanned, three levels deep.`)})]}),(0,X.jsx)(O_,{children:(0,X.jsx)(xv,{onClick:()=>void Tt(),type:`button`,children:a(`Choose folder…`)})})]})]})]}),(0,X.jsxs)(e_,{ref:Ue(`icons`),children:[(0,X.jsx)(Zg,{note:`Where the shell's own icons and the built-in glyphs come from.`,title:`Icons`}),(0,X.jsxs)(n_,{children:[(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Use system file icons`)}),(0,X.jsx)(A_,{children:a(`Ask the shell for the icon of each file type instead of the built-in glyphs.`)})]}),(0,X.jsx)(B_,{$on:u?.systemIcons??!1,disabled:!u,onClick:()=>void G({systemIcons:!u?.systemIcons}),type:`button`,children:(0,X.jsx)(V_,{})})]}),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Use custom folder icons`)}),(0,X.jsx)(A_,{children:a(`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`)})]}),(0,X.jsx)(B_,{$on:u?.customFolderIcons??!1,disabled:!u,onClick:()=>void G({customFolderIcons:!u?.customFolderIcons}),type:`button`,children:(0,X.jsx)(V_,{})})]})]})]}),(0,X.jsxs)(e_,{ref:Ue(`extension-icons`),children:[(0,X.jsx)(Zg,{note:`A custom glyph for one file extension.`,title:`Icons by extension`}),(0,X.jsxs)(n_,{children:[Object.entries(u?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:e}),(0,X.jsx)(A_,{children:Wg(a,t)})]}),(0,X.jsxs)(O_,{children:[(0,X.jsx)(Gg,{source:t}),(0,X.jsx)(Sv,{onClick:()=>void bt(e,null),title:a(`Remove this rule`),type:`button`,children:(0,X.jsx)(Ds,{size:12})})]})]},e)),(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Add a rule`)}),(0,X.jsx)(A_,{children:a(`Extension and the icon to draw for it.`)})]}),(0,X.jsxs)(O_,{children:[(0,X.jsx)(H_,{onChange:e=>h(e.target.value),placeholder:`.psd`,spellCheck:!1,value:m}),(0,X.jsxs)(q_,{children:[(0,X.jsx)(Sv,{onClick:()=>b(e=>!e),title:a(`Choose the icon`),type:`button`,children:(0,X.jsx)(Gg,{source:g})}),y&&(0,X.jsx)(cm,{allowDefault:!1,onClose:()=>b(!1),onPick:e=>{v(e??`file`),b(!1)},value:g})]}),(0,X.jsx)(Sv,{onClick:()=>void Et(),title:a(`Add the rule`),type:`button`,children:(0,X.jsx)(hs,{size:13})})]})]})]})]}),(0,X.jsxs)(e_,{ref:Ue(`folder-icons`),children:[(0,X.jsx)(Zg,{note:`A single folder can carry an icon of its own.`,title:`Folder icons`}),(0,X.jsxs)(n_,{children:[(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Give a folder its own icon`)}),(0,X.jsx)(A_,{children:a(`Stored in the folder's parent {index}, so it stays with the files.`,{index:`.yafm-index.db`})})]}),(0,X.jsxs)(O_,{children:[f&&(0,X.jsx)(Kg,{src:f.icon}),(0,X.jsx)(xv,{disabled:x,onClick:()=>void Dt(),type:`button`,children:a(x?`Choosing…`:`Choose folder and icon…`)})]})]}),f&&(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:Xi(f.folder)}),(0,X.jsx)(A_,{children:f.folder})]}),(0,X.jsx)(O_,{children:(0,X.jsxs)(wv,{children:[(0,X.jsx)(Es,{size:11}),` `,a(`Saved`)]})})]})]})]}),(0,X.jsxs)(e_,{ref:Ue(`folder-index`),children:[(0,X.jsx)(Zg,{note:`The hidden cache that makes a folder open instantly next time.`,title:`Folder index`}),(0,X.jsxs)(n_,{children:[(0,X.jsxs)(Q,{children:[(0,X.jsxs)(D_,{children:[(0,X.jsx)($,{children:a(`Keep a {index} in every folder`,{index:`.yafm-index.db`})}),(0,X.jsx)(A_,{children:a(`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`)})]}),(0,X.jsx)(B_,{$on:u?.writeDirectoryIndex??!0,disabled:!u,onClick:()=>void G({writeDirectoryIndex:!u?.writeDirectoryIndex}),type:`button`,children:(0,X.jsx)(V_,{})})]}),(0,X.jsxs)(r_,{children:[(0,X.jsxs)(i_,{children:[(0,X.jsx)($,{children:a(`Directory index blacklist`)}),(0,X.jsx)(A_,{children:a(`Rules are full-path globs: * matches within one path segment and ** crosses folders. Matching folders use the central database instead of creating .yafm-index.db files.`)})]}),(0,X.jsx)(sv,{children:(u?.directoryIndexBlacklist??[]).map(e=>(0,X.jsxs)(cv,{children:[(0,X.jsx)(lv,{"aria-label":a(`Directory index blacklist rule`),onBlur:Ze,onChange:t=>me({from:e,value:t.target.value}),onFocus:()=>me({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Ze()):e.key===`Escape`&&me(null)},spellCheck:!1,value:U?.from===e?U.value:e}),(0,X.jsx)(uv,{onClick:()=>et(e),title:a(`Remove`),type:`button`,children:(0,X.jsx)(Ds,{size:10})})]},e))}),(0,X.jsxs)(fv,{children:[(0,X.jsx)(pv,{"aria-label":a(`Directory index blacklist rule`),onChange:e=>ve(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Qe())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:_e}),(0,X.jsx)(F_,{onClick:Qe,type:`button`,children:a(`Add the rule`)})]}),(0,X.jsxs)(dv,{children:[(0,X.jsx)(F_,{onClick:tt,type:`button`,children:a(`Restore defaults`)}),(0,X.jsx)(F_,{onClick:()=>void $e(),type:`button`,children:a(`Add folder…`)})]})]})]}),!(u?.writeDirectoryIndex??!0)&&(0,X.jsx)(Ev,{children:Ug(a,e?.platform)})]}),(0,X.jsxs)(e_,{ref:Ue(`indexing`),children:[(0,X.jsx)(Zg,{note:`Background folder size and item-count walks.`,title:`Index tasks`}),(0,X.jsx)(Hg,{})]}),(0,X.jsxs)(e_,{ref:Ue(`files`),children:[(0,X.jsx)(Zg,{note:`What the listings include.`,title:`Files`}),(0,X.jsxs)(n_,{children:[(0,X.jsxs)(Q,{children:[(0,X.jsx)($,{children:a(`Hidden items`)}),(0,X.jsx)(M_,{children:Vg(a,c?.showHidden)})]}),(0,X.jsxs)(Q,{children:[(0,X.jsx)($,{children:a(`Protected operating system files`)}),(0,X.jsx)(M_,{children:Vg(a,c?.showSystem)})]})]}),(0,X.jsx)(Tv,{children:a(`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`)})]})]}),(0,X.jsxs)(__,{"aria-label":a(`Settings sections`),children:[(0,X.jsx)(v_,{children:a(`Sections`)}),(0,X.jsx)(y_,{children:Lg.map(({id:e,label:t})=>(0,X.jsx)(b_,{$active:Pe===e,onClick:()=>We(e),type:`button`,children:(0,X.jsx)(`span`,{children:a(t)})},e))}),(0,X.jsx)(x_,{children:a(`Changes are saved as you make them.`)})]})]})}function Vg(e,t){return e(t===void 0?`Reading…`:t?`Shown`:`Hidden`)}function Hg(){let e=Kn(),[t,n]=(0,_.useState)(null);return(0,_.useEffect)(()=>{let e=!0,t=()=>Mr().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,X.jsx)(Ev,{children:e(`No indexing tasks are running.`)}):(0,X.jsxs)(n_,{children:[(0,X.jsx)(Q,{children:(0,X.jsx)($,{children:e(`{count} indexing tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,X.jsx)(Q,{children:(0,X.jsx)(M_,{title:e,children:e})},e))]}):(0,X.jsx)(Ev,{children:e(`Index task information is unavailable.`)})}function Ug(e,t){return e(`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`,{place:e(t===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:t===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`)})}function Wg(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built-in: {source}`,{source:t})}function Gg({source:e}){let t=Sa(e.startsWith(`file:`)?e.slice(5):null);return(0,X.jsx)(Cv,{children:t?(0,X.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,X.jsx)(Wu,{name:e,size:16})})}function Kg({src:e}){let t=Sa(e);return(0,X.jsx)(Cv,{children:t&&(0,X.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function qg({path:e,active:t,onSelect:n,onRemove:r}){let i=Kn(),a=Da(e),o=gp(e);return(0,X.jsxs)(nv,{children:[(0,X.jsxs)(tv,{$active:t,onClick:n,title:e,type:`button`,children:[a&&(o?(0,X.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${a}#t=0.5`}):(0,X.jsx)(`img`,{alt:``,src:a})),o&&(0,X.jsx)(iv,{children:(0,X.jsx)(Ms,{size:11})})]}),(0,X.jsx)(rv,{onClick:r,title:i(`Remove`),type:`button`,children:(0,X.jsx)(Ds,{size:9})})]})}function Jg({value:e,options:t,onChange:n,disabled:r}){let i=Kn(),[a,o]=(0,_.useState)(null),s=(0,_.useRef)(null);return(0,_.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(U_,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,X.jsx)(`span`,{children:Yg(i,e)}),(0,X.jsx)(W_,{children:(0,X.jsx)(vs,{size:11})})]}),a&&(0,Pc.createPortal)((0,X.jsx)(G_,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,X.jsxs)(K_,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,X.jsx)(`span`,{children:Yg(i,t)}),t===e&&(0,X.jsx)(Es,{size:11})]},t))}),document.body)]})}function Yg(e,t){return t===Fg?e(`System default`):Ig[t]??t}function Xg({colors:e,current:t,onApply:n}){let r=Kn();if(e.length===0)return null;let[i,...a]=e;return(0,X.jsxs)(m_,{children:[(0,X.jsxs)(g_,{$color:i,onClick:()=>n(i),title:r(`Previous colour · {colour}`,{colour:i}),type:`button`,children:[(0,X.jsx)(`i`,{}),r(`Previous`)]}),a.map(e=>(0,X.jsx)(h_,{$color:e,onClick:()=>n(e),title:r(`Use {colour}`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,X.jsx)(Es,{size:9})},e))]})}function Zg({title:e,note:t,global:n=!1}){let r=Kn();return(0,X.jsxs)(t_,{children:[(0,X.jsxs)(`h2`,{children:[r(e),n&&(0,X.jsx)(Og,{})]}),(0,X.jsx)(`p`,{children:r(t)})]})}var Qg=J.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,$g=J.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,e_=J.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,t_=J.header`
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
`,n_=J.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,r_=J.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,i_=J.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,a_=J.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,o_=J.button`
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
`,s_=J.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,c_=J.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,l_=J.button`
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
`,u_=J.button`
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
`,d_=J.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,f_=J.input`
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
`,p_=J.span`
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
`,m_=J.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,h_=J.button`
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
`,g_=J.button`
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
`,__=J.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,v_=J.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,y_=J.div`
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
`,b_=J.button`
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
`,x_=J.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function S_(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}var C_=J.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,w_=J.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,T_=J.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,E_=J.div`
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
`,D_=J.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,O_=J.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,$=J.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,k_=J.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,A_=J.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,j_=J.span`
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
`,M_=J.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,N_=J.input`
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
`,P_=J.input`
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
`,F_=J.button`
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
`,I_=J.input`
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
`,L_=J.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,R_=J.button`
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
`,z_=J.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,B_=J.button`
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
`,V_=J.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,H_=J.input`
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
`,U_=J.button`
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
`,W_=J.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,G_=J.div`
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
`,K_=J.button`
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
`,q_=J.span`
    position: relative;
    display: inline-flex;
`,J_=J.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Y_=J.button`
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
`,X_=J.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,Z_=J.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,Q_=J.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,$_=J.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ev=J.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,tv=J.button`
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
`,nv=J.div`
    position: relative;
    width: 102px;
    height: 58px;
`,rv=J.button`
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
`,iv=J.span`
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
`,av=J.button`
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
`,ov=J.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,sv=J.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,cv=J.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,lv=J.input`
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
`,uv=J.button`
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
`,dv=J.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,fv=J.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,pv=J.input`
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
`,mv=J.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,hv=J.button`
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
`,gv=J.input`
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
`,_v=J.div`
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
`,vv=J.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,yv=J.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,bv=J.button`
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
`,xv=J.button`
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
`,Sv=J.button`
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
`,Cv=J.span`
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
`,wv=J.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,Tv=J.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,Ev=J.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,Dv=150,Ov=2500,kv=3,Av=600;function jv({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:a,onSearchMatches:o,onPick:s,onSelectionChange:c,onAddToTray:l,showDetails:u=!0,videoAudio:d=!1,videoAutoplay:f=!1}){let p=Kn(),m=Dd(`gallery`),[h,g]=(0,_.useState)([]),[v,y]=(0,_.useState)(0),[b,x]=(0,_.useState)(!0),[S,C]=(0,_.useState)(null),[w,T]=(0,_.useState)(!1),[E,D]=(0,_.useState)([]),[O,ee]=(0,_.useState)(()=>{let e=Ya(`yafm.preview.width`,320);return e>=220?e:320}),te=(0,_.useRef)([]),ne=(0,_.useRef)(0),k=(0,_.useRef)(!1),A=(0,_.useRef)(!0),j=(0,_.useRef)(0),M=(0,_.useRef)(null),N=(0,_.useRef)(0),P=(0,_.useCallback)(async e=>{let t=++j.current;x(!0),A.current=!0,C(null);try{let n=await wr(0,Dv,e);if(t!==j.current)return;te.current=n.entries,ne.current=n.total,g(n.entries),y(n.total)}catch(e){t===j.current&&C(e instanceof Error?e.message:String(e))}finally{t===j.current&&(A.current=!1,x(!1))}},[]);(0,_.useEffect)(()=>{P(!1)},[P]);let F=(0,_.useCallback)(async()=>{if(A.current||k.current||te.current.length>=ne.current)return;let e=j.current;k.current=!0;try{let t=te.current,n=ne.current;for(let r=0;r<kv&&t.length<n;r++){let r=await wr(t.length,Dv,!1);if(e!==j.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<Dv)break}if(e!==j.current)return;te.current=t,ne.current=n,(0,_.startTransition)(()=>{g(t),y(n)})}catch{}finally{k.current=!1}},[]),I=(0,_.useCallback)(e=>{N.current||=window.requestAnimationFrame(()=>{N.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<Ov&&F()})},[F]);(0,_.useEffect)(()=>{let e=M.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&F()},{root:e.parentElement,rootMargin:`${Ov}px 0px`});return t.observe(e),()=>t.disconnect()},[F]),(0,_.useEffect)(()=>{if(h.length>=v)return;let e=window.setTimeout(()=>{let e=M.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<Ov&&F()},200);return()=>window.clearTimeout(e)},[h.length,v,F]);let L=(0,_.useMemo)(()=>({path:``,parent:null,entries:h.map(Mv),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[h]),R=(0,_.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),re=(0,_.useCallback)(e=>{s?s(e):or(e)},[s]),ie=(0,_.useCallback)(e=>{let t=Nv(e.modified);return{id:t,label:t}},[]),z=()=>{T(!0),P(!0).finally(()=>T(!1))},ae=h.length<v,oe=(0,_.useMemo)(()=>!a?.open||a.query.trim().length===0?[]:h.filter(e=>Ra(e.name,a)||Ra(e.path,a)),[h,a?.open,a?.query,a?.matchCase,a?.regex]),se=(0,_.useMemo)(()=>a?.open?{query:a.query,matchCase:a.matchCase,regex:a.regex,mode:a.mode,currentPath:oe[Math.min(a.index,Math.max(0,oe.length-1))]?.path??null}:Aa,[a?.open,a?.query,a?.matchCase,a?.regex,a?.mode,a?.index,oe]);(0,_.useEffect)(()=>{o?.(oe.length)},[oe.length,o]);let ce=(0,_.useCallback)(e=>{D(e),c?.(e)},[c]),le=e=>{ee(e),Xa(`yafm.preview.width`,e)},ue=E.length>0?h.find(e=>e.path===E[0])??null:null,B=ue?.name.includes(`.`)?ue.name.slice(ue.name.lastIndexOf(`.`)+1).toUpperCase():`—`,V=ue&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(ue.name)?p(`Video`):p(`Picture`),de=ue?ue.path.slice(0,Math.max(ue.path.lastIndexOf(`\\`),ue.path.lastIndexOf(`/`))):``,fe=ue?{name:ue.name,path:ue.path,isDirectory:!1,size:ue.size,modified:ue.modified,fields:[{label:p(`Type`),value:V},{label:p(`Extension`),value:B},{label:p(`Location`),value:de},{label:p(`Full path`),value:ue.path},{label:p(`Size`),value:Pi(ue.size)},{label:p(`Modified`),value:Vi(ue.modified)},{label:p(`Created`),value:`—`}]}:null;return(0,X.jsxs)(Pv,{children:[(0,X.jsxs)(Lv,{children:[(0,X.jsxs)(zv,{children:[(0,X.jsx)(`span`,{children:p(`Gallery`)}),(0,X.jsx)(Bv,{children:b?p(`scanning…`):p(`{shown} of {total} pictures`,{shown:h.length,total:v})})]}),(0,X.jsxs)(Rv,{children:[(0,X.jsx)(Vv,{onClick:z,title:p(`Scan the folders again`),type:`button`,children:(0,X.jsx)(Hv,{$spinning:w,children:(0,X.jsx)(ms,{size:14})})}),m.available&&(0,X.jsx)(Vv,{onClick:e=>m.open(e.clientX,e.clientY),title:p(`Selection menu`),type:`button`,children:(0,X.jsx)(hc,{size:14})})]})]}),S&&(0,X.jsx)(Wv,{children:S}),!S&&!b&&v===0&&(0,X.jsx)(Wv,{children:p(`No pictures found.`)}),!S&&(b||v>0)&&(0,X.jsxs)(Fv,{children:[(0,X.jsx)(Iv,{children:(0,X.jsx)(Fd,{confirmDelete:n,find:se,listing:b&&h.length===0?null:L,loading:b,error:null,view:R,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:ce,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:re,onOpenFile:re,onRefresh:z,onAddToTray:l,groupOf:ie,onGridScroll:I,gridFooter:(0,X.jsx)(Uv,{$space:ae?Av:1,ref:M}),allowBackgroundMenu:!1})}),u&&(0,X.jsx)(Yl,{emptyNote:p(`Nothing selected.`),info:fe,onWidth:le,selectionNote:E.length>1?Ni(p,E.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:d,videoAutoplay:f,width:O})]})]})}function Mv(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function Nv(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(Fi(),{weekday:`long`}):t.toLocaleDateString(Fi(),{year:`numeric`,month:`long`,day:`numeric`})}var Pv=J.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Fv=J.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Iv=J.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`,Lv=J.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,Rv=J.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,zv=J.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,Bv=J.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Vv=J.button`
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
`,Hv=J.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,Uv=J.div`
    height: ${({$space:e})=>e}px;
`,Wv=J.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function Gv({places:e,drives:t,recent:n,recentLimit:r,currentPath:i,activeKind:a,homePath:o=``,version:s=0,historyVersion:c=0,hiddenViews:l=[],onNavigate:u,onOpenView:d}){let[f,p]=(0,_.useState)([]),m=Kn(),[h,g]=(0,_.useState)(null),v=Ka();(0,_.useEffect)(()=>{Pr().then(e=>{g(e),p(wu(e).filter(e=>e.pinned))},()=>{g(null),p([])})},[s]);let y=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>Zv(e.path,t));return{name:h?.placeNames?.[t]??n?.name??(Xi(t)||t),path:t,kind:`folder`,icon:n?.icon??h?.placeIcons?.[t]??null}}),b=a===`files`;return(0,X.jsxs)(Qv,{children:[(0,X.jsxs)($v,{children:[!l.includes(`home`)&&(0,X.jsxs)(iy,{$active:a===`home`,onClick:e=>d(`home`,Oi(e)),title:m(`Overview`),type:`button`,children:[(0,X.jsx)(Us,{}),(0,X.jsx)(oy,{children:m(`Overview`)})]}),!l.includes(`recycle`)&&(0,X.jsxs)(iy,{$active:a===`recycle`,onClick:e=>d(`recycle`,Oi(e)),title:m(`Recycle Bin`),type:`button`,children:[(0,X.jsx)(Ts,{}),(0,X.jsx)(oy,{children:m(`Recycle Bin`)})]}),!l.includes(`gallery`)&&(0,X.jsxs)(iy,{$active:a===`gallery`,onClick:e=>d(`gallery`,Oi(e)),title:m(`Gallery`),type:`button`,children:[(0,X.jsx)(js,{}),(0,X.jsx)(oy,{children:m(`Gallery`)})]})]}),f.map(e=>(0,X.jsxs)(ty,{children:[(0,X.jsxs)(iy,{as:`div`,$active:!1,children:[(0,X.jsx)(ay,{children:(0,X.jsx)(Eu,{panel:e,size:16})}),(0,X.jsx)(oy,{children:m(e.title)})]}),(0,X.jsx)(ny,{children:(0,X.jsxs)(ry,{children:[e.kind===`quick`&&y(e).map(e=>(0,X.jsxs)(iy,{$active:b&&Zv(i,e.path),onClick:t=>u(e.path,Oi(t)),title:e.path,type:`button`,children:[(0,X.jsx)(Du,{place:e}),(0,X.jsx)(oy,{children:e.name})]},e.path)),e.kind===`recent`&&n.slice(0,r).map(e=>{let t=qa(v,e.path);return(0,X.jsxs)(iy,{$active:b&&Zv(i,e.path),onClick:t=>e.isDirectory?u(e.path,Oi(t)):void or(e.path),title:e.path,type:`button`,children:[t&&v.useIcons?(0,X.jsx)(Du,{place:t}):(0,X.jsx)(Gu,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,X.jsx)(oy,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,X.jsx)(Jv,{historyVersion:c,onNavigate:u}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,X.jsxs)(iy,{$active:b&&Zv(i,e.name),onClick:t=>u(e.name,Oi(t)),title:e.name,type:`button`,children:[(0,X.jsx)(ds,{}),(0,X.jsxs)(oy,{children:[aa(e),(0,X.jsxs)(sy,{children:[Pi(e.freeSpace),` free`]}),(0,X.jsx)(cy,{children:(0,X.jsx)(ly,{$used:t,$tone:Yi(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,X.jsx)(Yv,{onNavigate:u,path:e.path||o})]})})]},e.id)),!l.includes(`settings`)&&(0,X.jsx)(ey,{children:(0,X.jsxs)(iy,{$active:a===`settings`,onClick:e=>d(`settings`,Oi(e)),title:m(`Settings`),type:`button`,children:[(0,X.jsx)(ys,{}),(0,X.jsx)(oy,{children:m(`Settings`)})]})})]})}var Kv=10,qv=40;function Jv({historyVersion:e=0,onNavigate:t}){let n=Kn(),[r,i]=(0,_.useState)(null),a=Ka();return(0,_.useEffect)(()=>{Er().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=qa(a,e.path);return(0,X.jsxs)(iy,{$active:!1,onClick:n=>t(e.path,Oi(n)),title:Ni(n,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,X.jsx)(Du,{place:r}):(0,X.jsx)(Gu,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,X.jsx)(oy,{children:r?.name||e.name})]},e.path)})}function Yv({path:e,onNavigate:t}){let[n,r]=(0,_.useState)(null);(0,_.useEffect)(()=>{e&&(r(null),sr(e,!1).then(r,()=>r(null)))},[e]),(0,_.useEffect)(()=>{if(e&&Y.available)return Y.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&Zv(n.data.path,e)&&sr(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,Kv),o=i.filter(e=>!e.isDirectory).slice(0,qv);return(0,X.jsxs)(X.Fragment,{children:[a.map(e=>(0,X.jsx)(Xv,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,X.jsx)(Xv,{entry:e,onNavigate:t},e.fullPath))]})}function Xv({entry:e,onNavigate:t}){let n=Ka(),r=qa(n,e.fullPath);return(0,X.jsxs)(iy,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Oi(n)):void or(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,X.jsx)(Du,{place:r}):(0,X.jsx)(Gu,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,X.jsx)(oy,{children:r?.name||e.name})]})}function Zv(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}var Qv=J.aside`
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

    &:not(:hover) ${()=>sy},
    &:not(:hover) ${()=>cy} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,$v=J.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,ey=J($v)`
    margin-top: auto;
`,ty=J.div`
    display: flex;
    flex-direction: column;
`,ny=J.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${Qv}:hover ${ty}:hover > & {
        grid-template-rows: 1fr;
    }
`,ry=J.div`
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
`,iy=J.button`
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
`,ay=J.span`
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
`,oy=J.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,sy=J.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,cy=J.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,ly=J.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`;function uy({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=Kn(),a=(0,_.useRef)(null),o=e.filter(e=>e.state===`running`).length;return(0,_.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[n,r]),(0,X.jsxs)(fy,{ref:a,children:[(0,X.jsxs)(py,{$active:n,onClick:()=>r(!n),title:o>0?Ni(i,o,`1 operation running`,`{count} operations running`):i(`Status center`),type:`button`,children:[(0,X.jsx)(ws,{size:13}),o>0&&(0,X.jsx)(my,{children:o>9?`9+`:o})]}),n&&(0,X.jsxs)(hy,{children:[(0,X.jsxs)(gy,{children:[(0,X.jsx)(_y,{children:i(`Status center`)}),(0,X.jsxs)(vy,{children:[(0,X.jsx)(yy,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`Clear finished`)}),(0,X.jsx)(by,{onClick:()=>r(!1),title:i(`Close`),type:`button`,children:(0,X.jsx)(Ds,{size:10})})]})]}),e.length===0?(0,X.jsx)(Sy,{children:i(`No operations yet.`)}):(0,X.jsx)(xy,{children:e.map(e=>(0,X.jsx)(dy,{task:e},e.id))})]})]})}function dy({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,X.jsxs)(Cy,{children:[(0,X.jsxs)(wy,{children:[(0,X.jsx)(Ty,{$state:e.state,children:e.state===`done`?(0,X.jsx)(Es,{size:10}):e.state===`failed`?(0,X.jsx)(Ds,{size:10}):(0,X.jsx)(Ey,{})}),(0,X.jsx)(Dy,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,X.jsxs)(Oy,{children:[Pi(e.bytesDone),` / `,Pi(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,X.jsxs)(Oy,{children:[e.done,` / `,e.total]})]}),i&&(0,X.jsx)(ky,{children:(0,X.jsx)(Ay,{$percent:r,$indeterminate:t===0})}),e.error&&(0,X.jsx)(jy,{children:e.error})]})}var fy=J.div`
    position: relative;
    display: flex;
`,py=J.button`
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
`,my=J.span`
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
`,hy=J.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${Fc}
    ${Jc}
`,gy=J.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,_y=J.span`
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
`,vy=J.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,yy=J.button`
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
`,by=J.button`
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
`,xy=J.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,Sy=J.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Cy=J.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;
    ${Yc}

    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,wy=J.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,Ty=J.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,Ey=J.span`
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
`,Dy=J.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Oy=J.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,ky=J.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,Ay=J.div`
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
`,jy=J.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function My(){return Y.available?(await Y.request(`fs.history.list`)).entries:[]}async function Ny(e){return Y.available?(await Y.request(`fs.history.undoTo`,{id:e})).ok:!1}function Py(){let e=Kn(),[t,n]=(0,_.useState)(!1),[r,i]=(0,_.useState)([]),[a,o]=(0,_.useState)(!1),s=(0,_.useRef)(null),c=()=>void My().then(i,()=>i([]));(0,_.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)};return window.addEventListener(`pointerdown`,r),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r)}},[t]);let l=async e=>{o(!0);try{await Ny(e),c()}finally{o(!1)}};return(0,X.jsxs)(Ly,{ref:s,children:[(0,X.jsx)(Ry,{$active:t,onClick:()=>n(e=>!e),title:e(`History`),type:`button`,children:(0,X.jsx)(Cs,{size:14})}),t&&(0,X.jsxs)(zy,{children:[(0,X.jsxs)(By,{children:[(0,X.jsx)(Vy,{children:e(`History`)}),(0,X.jsx)(Hy,{onClick:()=>n(!1),title:e(`Close`),type:`button`,children:(0,X.jsx)(Ds,{size:10})})]}),r.length===0?(0,X.jsx)(Zy,{children:e(`No operations yet.`)}):(0,X.jsx)(Uy,{children:r.map(t=>(0,X.jsxs)(Wy,{children:[(0,X.jsxs)(Gy,{children:[(0,X.jsxs)(Ky,{children:[(0,X.jsx)(Iy,{label:t.label}),Fy(e,t.label)]}),(0,X.jsx)(qy,{children:Ui(t.at)})]}),t.paths.length>0&&(0,X.jsxs)(Jy,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,X.jsx)(Yy,{children:(0,X.jsx)(Xy,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`Undo`)})})]},t.id))})]})]})}function Fy(e,t){if(t===`New folder`)return e(`New folder`);if(t===`New file`)return e(`New file`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`Move`?`Move {count} items`:t===`Copy`?`Copy {count} items`:`Delete {count} items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`Compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`Rename`)} ${i[1]}`:t}function Iy({label:e}){return e.startsWith(`Delete`)?(0,X.jsx)(Ts,{size:13}):e.startsWith(`Move`)||e.startsWith(`Copy`)?(0,X.jsx)(cc,{size:13}):e.startsWith(`Rename`)?(0,X.jsx)(Ws,{size:13}):e.startsWith(`Compress`)?(0,X.jsx)(Ps,{size:13}):e.startsWith(`New`)?(0,X.jsx)(hs,{size:13}):(0,X.jsx)(_s,{size:13})}var Ly=J.div`
    position: relative;
    display: flex;
`,Ry=J.button`
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
`,zy=J.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${Fc}
    ${Jc}
`,By=J.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Vy=J.span`
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
`,Hy=J.button`
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
`,Uy=J.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,Wy=J.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,Gy=J.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,Ky=J.span`
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
`,qy=J.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Jy=J.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Yy=J.div`
    display: flex;
    justify-content: flex-end;
`,Xy=J.button`
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
`,Zy=J.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function Qy({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=Kn(),[s,c]=(0,_.useState)(!1),l=(0,_.useRef)(null);(0,_.useEffect)(()=>{if(!s)return;let e=e=>{l.current?.contains(e.target)||c(!1)},t=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[s]),(0,_.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=Md.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,X.jsxs)($y,{ref:l,children:[(0,X.jsx)(eb,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`View`),type:`button`,children:e.mode===`grid`?(0,X.jsx)(Ss,{size:14}):(0,X.jsx)(xs,{size:14})}),s&&(0,X.jsxs)(tb,{children:[(0,X.jsx)(nb,{children:o(`View`)}),(0,X.jsxs)(rb,{children:[(0,X.jsxs)(ib,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,X.jsx)(xs,{size:12}),` `,o(`List`)]}),(0,X.jsxs)(ib,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,X.jsx)(Ss,{size:12}),` `,o(`Grid`)]})]}),(0,X.jsx)(nb,{children:o(`List icon size`)}),(0,X.jsxs)(ab,{children:[(0,X.jsx)(`input`,{"aria-label":o(`List icon size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,X.jsxs)(ob,{children:[e.iconSize,`px`]})]}),(0,X.jsx)(nb,{children:o(`Grid size`)}),(0,X.jsxs)(ab,{children:[(0,X.jsx)(`input`,{"aria-label":o(`Grid size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,X.jsxs)(ob,{children:[e.gridSize,`px`]})]}),(0,X.jsxs)(nb,{children:[o(`Columns`),(0,X.jsx)(Og,{})]}),Md.map(e=>(0,X.jsxs)(sb,{children:[(0,X.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,X.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,X.jsxs)(sb,{children:[(0,X.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,X.jsx)(`span`,{children:o(`Link target after the name`)})]}),(0,X.jsxs)(nb,{children:[o(`Preview panel`),(0,X.jsx)(Og,{})]}),(0,X.jsxs)(sb,{children:[(0,X.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,X.jsx)(`span`,{children:o(`Preview under the list`)})]})]})]})}var $y=J.div`
    position: relative;
    display: flex;
    height: 100%;
`,eb=J.button`
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
`,tb=J.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${Fc}
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
`,nb=J.div`
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
`,rb=J.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,ib=J.button`
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
`,ab=J.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,ob=J.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,sb=J.label`
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
`,cb=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,X.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),lb=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,X.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),ub=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,X.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),db=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,X.jsx)(`path`,{d:`M2 5h6`})}),fb=e=>(0,X.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,X.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),pb=e=>(0,X.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,X.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,X.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function mb({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:p,activityOpen:m,onActivityOpenChange:h,trayCount:g,trayVisible:v,onToggleTray:y,split:b,canSplit:x,onToggleSplit:S,details:C,canDetails:w,onToggleDetails:T,shortcuts:E}){let D=Kn(),O=Yn(),ee=Xn(),[te,ne]=(0,_.useState)({left:!1,right:!1}),[k,A]=(0,_.useState)(null),[j,M]=(0,_.useState)(null),N=(0,_.useRef)(null),P=(0,_.useRef)(null),F=(0,_.useRef)(null),I=(0,_.useCallback)(()=>{let e=P.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;ne(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,_.useEffect)(()=>{I();let e=P.current;if(!e)return;let t=new ResizeObserver(I);return t.observe(e),()=>t.disconnect()},[I,e.length]),(0,_.useEffect)(()=>()=>{N.current&&window.clearTimeout(N.current.timer)},[]),(0,_.useEffect)(()=>{F.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let L=e=>P.current?.scrollBy({left:e,behavior:`smooth`}),R=()=>{N.current&&window.clearTimeout(N.current.timer),N.current=null,M(null)};return(0,X.jsxs)(vb,{children:[(0,X.jsx)(yb,{children:(0,X.jsx)(Os,{size:19})}),(0,X.jsxs)(bb,{children:[te.left&&(0,X.jsx)(Sb,{onClick:()=>L(-180),title:D(`Scroll tabs left`),type:`button`,children:(0,X.jsx)(cb,{})}),(0,X.jsx)(xb,{onScroll:I,onWheel:e=>{let t=P.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:P,children:e.map(e=>(0,X.jsxs)(Cb,{$active:e.id===t,$dragging:k===e.id,$dropTarget:j===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!Ju(t.dataTransfer)||!hb(e)||(t.preventDefault(),N.current?.id===e.id))return;R(),M(e.id);let r=window.setTimeout(()=>{n(e.id),N.current=null},500);N.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(N.current?.id===e.id||j===e.id)&&R()},onDragEnd:()=>{A(null),R()},onDragOver:t=>{(k||Ju(t.dataTransfer)&&hb(e))&&(t.preventDefault(),Ju(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>A(e.id),onDrop:t=>{if(t.preventDefault(),k)a(k,e.id);else if(hb(e)&&Ju(t.dataTransfer)){let{paths:r,move:i}=Yu(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}A(null),R()},onClick:()=>n(e.id),ref:e.id===t?F:void 0,title:e.path||e.title,type:`button`,children:[(0,X.jsx)(gb,{tab:e}),(0,X.jsx)(wb,{children:e.title}),e.partner&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Tb,{children:`|`}),(0,X.jsx)(_b,{place:e.partner.place}),(0,X.jsx)(wb,{children:e.partner.title})]}),(0,X.jsx)(Eb,{"data-shortcut":Ai(E.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:D(`Close tab`),children:(0,X.jsx)(ub,{})})]},e.id))}),te.right&&(0,X.jsx)(Sb,{onClick:()=>L(180),title:D(`Scroll tabs right`),type:`button`,children:(0,X.jsx)(lb,{})}),(0,X.jsx)(Db,{"data-shortcut":Ai(E.newTab),onClick:i,title:D(`New tab`),type:`button`,children:(0,X.jsx)(hs,{size:13})})]}),(0,X.jsx)(Ob,{...ee}),(0,X.jsxs)(kb,{children:[(0,X.jsx)(jb,{$active:b,"data-shortcut":Ai(E.splitView),disabled:!x,onClick:S,title:D(b?`Close split view`:`Split view`),type:`button`,children:(0,X.jsx)(pc,{size:15})}),(0,X.jsx)(jb,{$active:C,disabled:!w,onClick:T,title:D(C?`Hide details panel`:`Show details panel`),type:`button`,children:(0,X.jsx)(mc,{size:15})}),(0,X.jsxs)(Ab,{$active:v,onClick:y,title:D(v?`Hide file tray`:`Show file tray`),type:`button`,children:[(0,X.jsx)(ac,{size:14}),g>0&&(0,X.jsx)(Mb,{children:g>9?`9+`:g})]}),(0,X.jsx)(Py,{}),(0,X.jsx)(uy,{tasks:f,onClear:p,open:m,onOpenChange:h}),(0,X.jsx)(Qy,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,X.jsx)(Nb,{onClick:O.minimize,title:D(`Minimize`),type:`button`,children:(0,X.jsx)(db,{})}),(0,X.jsx)(Nb,{onClick:O.toggleMaximize,title:O.maximized?D(`Restore`):D(`Maximize`),type:`button`,children:O.maximized?(0,X.jsx)(pb,{}):(0,X.jsx)(fb,{})}),(0,X.jsx)(Pb,{onClick:O.close,title:D(`Close`),type:`button`,children:(0,X.jsx)(ub,{})})]})]})}function hb(e){return e.kind===`files`&&(!ea(e.path)||na(e.path))}function gb({tab:e}){switch(e.kind){case`home`:return(0,X.jsx)(cs,{size:13});case`settings`:return(0,X.jsx)(ys,{size:13});case`recycle`:return(0,X.jsx)(Ts,{size:13});default:return(0,X.jsx)(_b,{place:e.place})}}function _b({place:e}){return e?(0,X.jsx)(Du,{place:e,size:13}):(0,X.jsx)(ls,{size:13})}var vb=J.header`
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
`,yb=J.span`
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
`,bb=J.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,xb=J.div`
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
`,Sb=J.button`
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
`,Cb=J.button`
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
`,wb=J.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Tb=J.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,Eb=J.span`
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
`,Db=J.button`
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
`,Ob=J.div`
    flex: 1;
    min-width: 28px;
`,kb=J.div`
    display: flex;
    flex-shrink: 0;
`,Ab=J.button`
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
`,jb=J.button`
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
`,Mb=J.span`
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
`,Nb=J.button`
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
`,Pb=J(Nb)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function Fb(){let[e,t]=(0,_.useState)(null),n=(0,_.useRef)(null),r=(0,_.useRef)(void 0);return(0,_.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,Pc.createPortal)((0,X.jsx)(Ib,{tooltip:e}),document.body):null}function Ib({tooltip:e}){let t=(0,_.useRef)(null),[n,r]=(0,_.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,_.useState)(()=>e.bottom+6);return(0,_.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,X.jsxs)(Lb,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,X.jsx)(Rb,{children:e.text}),e.shortcut&&(0,X.jsx)(zb,{children:e.shortcut})]})}var Lb=J.div`
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
    ${Yc}
`,Rb=J.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,zb=J.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,Bb={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`},Vb=`yafm://`,Hb={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`},Ub=0,Wb=new Set;function Gb(e){Wb.add(e),Y.send({type:`app.navigate.done`,payload:{path:e}})}var Kb=20,qb=[{value:`0`,label:`Auto`},{value:`932`,label:`Japanese (CP932)`},{value:`936`,label:`Simplified Chinese (CP936)`},{value:`950`,label:`Traditional Chinese (CP950)`},{value:`949`,label:`Korean (CP949)`},{value:`1252`,label:`Western (CP1252)`},{value:`1250`,label:`Central European (CP1250)`},{value:`1251`,label:`Cyrillic (CP1251)`},{value:`1254`,label:`Turkish (CP1254)`},{value:`1253`,label:`Greek (CP1253)`},{value:`1256`,label:`Arabic (CP1256)`},{value:`1255`,label:`Hebrew (CP1255)`},{value:`1257`,label:`Baltic (CP1257)`},{value:`874`,label:`Thai (CP874)`},{value:`65001`,label:`UTF-8`}];function Jb(e){return`${Vb}${e===`home`?`overview`:e}`}function Yb(e){return e.toLowerCase().startsWith(Vb)?Hb[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Xb(e){let t=e.trim();if(t.length===0)return null;if(!t.toLowerCase().startsWith(Vb))return t;let n=Hb[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?Jb(n):null}function Zb(e){return e.history[e.index]??Jb(`home`)}function Qb(e){return Yb(Zb(e))??`files`}function $b(e){let t=Zb(e);return Yb(t)?``:e.listing?.path||t}function ex(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||Qb(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function tx(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function nx(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||rr.iconSize,gridSize:e.view?.gridSize||t.gridSize||rr.gridSize,sort:e.view?.sort??rr.sort,sortDescending:e.view?.sortDescending??rr.sortDescending,columns:t.columns??ir.columns??[]}}function rx(e=Jb(`home`)){return Ub+=1,{id:`tab-${Ub}`,listing:null,loading:!Yb(e),error:null,history:[e],index:0,fresh:!0,view:null}}function ix(e){return e instanceof Error?e.message:String(e)}function ax(e,t){let n=e=>e.replace(/[\\/]+/g,`\\`).replace(/\\$/,``).toLowerCase();return n(e)===n(t)}function ox(e){let t=e.replace(/[\\/]+$/,``);if(t.length===0)return null;let n=Math.max(t.lastIndexOf(`\\`),t.lastIndexOf(`/`));return n<0?null:n===2&&t[1]===`:`?`${t.slice(0,2)}\\`:t.slice(0,n)}function sx(e){let t=Xi(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function cx(e){return ea(e)?ca(e):void 0}function lx(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return Ni(e,t.entries.length,`1 item · {size}`,`{count} items · {size}`,{size:Pi(n)})}function ux(){let e=Kn(),[t,n]=(0,_.useState)(()=>[rx()]),[r,i]=(0,_.useState)(()=>t[0].id),[a,o]=(0,_.useState)(()=>{let e=Ya(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[s,c]=(0,_.useState)([]),[l,u]=(0,_.useState)([]),[d,f]=(0,_.useState)(null),[p,m]=(0,_.useState)(null),[h,g]=(0,_.useState)(null),v=Zn(),[y,b]=(0,_.useState)(ka),[x,S]=(0,_.useState)(0),[C,w]=(0,_.useState)(0),[T,E]=(0,_.useState)(ka),[D,O]=(0,_.useState)(0),[ee,te]=(0,_.useState)(0),[ne,k]=(0,_.useState)(0),[A,j]=(0,_.useState)(0),M=(0,_.useRef)(A);M.current=A;let[N,P]=(0,_.useState)([]),[F,I]=(0,_.useState)(10),[L,R]=(0,_.useState)(null),[re,ie]=(0,_.useState)(0),[z,ae]=(0,_.useState)(Ti),[oe,se]=(0,_.useState)(0),[ce,le]=(0,_.useState)(0),[ue,B]=(0,_.useState)(0),[V,de]=(0,_.useState)(!0),[fe,pe]=(0,_.useState)(()=>{let e=Ya(`yafm.preview.width`,320);return e>=220?e:320}),[H,U]=(0,_.useState)(null),[me,he]=(0,_.useState)(null),[ge,_e]=(0,_.useState)(`primary`),[ve,ye]=(0,_.useState)(null),[be,xe]=(0,_.useState)(null),[Se,Ce]=(0,_.useState)(null),[we,W]=(0,_.useState)(null),[Te,Ee]=(0,_.useState)({primary:0,secondary:0}),[De,Oe]=(0,_.useState)({primary:null,secondary:null}),[ke,Ae]=(0,_.useState)(null),[je,Me]=(0,_.useState)([]),[Ne,Pe]=(0,_.useState)(!1),Fe=(0,_.useRef)([]),Ie=(0,_.useRef)([]),[Le,Re]=(0,_.useState)([]),[ze,Be]=(0,_.useState)(!1),[Ve,He]=(0,_.useState)(!1),[Ue,We]=(0,_.useState)([]),[G,Ge]=(0,_.useState)(null),Ke=(0,_.useRef)(0),[qe,Je]=(0,_.useState)(()=>{let e=Za(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?tx({x:e.x,y:e.y}):tx({x:Math.max(20,window.innerWidth-340),y:110})}),Ye=(0,_.useCallback)(()=>{Je(e=>tx(e)),He(!0)},[]),K=t.find(e=>e.id===r)??t[0],Xe=Qb(K),Ze=Zb(K),Qe=$b(K),$e=Xe===`files`?K.listing?.parent??ox(Qe):null,et=K.splitWith?t.find(e=>e.id===K.splitWith):void 0,tt=Xe===`files`&&et!==void 0,nt=et?$b(et):``,rt=et?et.listing?.parent??ox(nt):null,it=tt&&et&&ge===`secondary`?et:K,at=L?.defaultView??ir,ot=nx(it,at);(0,_.useEffect)(()=>{Dg(L?.accentColor,L?.secondaryColor)},[L?.accentColor,L?.secondaryColor]),(0,_.useEffect)(()=>{zi(L?.timeFormat,L?.timeFormatPattern)},[L?.timeFormat,L?.timeFormatPattern]),(0,_.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!L?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[L?.backgroundSource]),(0,_.useEffect)(()=>(tr(e=>new Promise(t=>{Ge({id:++Ke.current,prompt:e,resolve:t})})),()=>tr(null)),[]),(0,_.useEffect)(()=>{_e(`primary`)},[r]),(0,_.useEffect)(()=>{E(ka),te(0),k(0)},[Xe]),(0,_.useEffect)(()=>{te(0)},[T.query,T.matchCase,T.regex]),(0,_.useEffect)(()=>{te(e=>ne===0?0:Math.min(e,ne-1))},[ne]);let st=ot.columns.includes(`linkCount`),ct=(0,_.useMemo)(()=>{let e={},t=wu(L),n={};for(let[e,t]of Object.entries(L?.placeNames??{}))n[ra(e)]=t;for(let t of s)e[ra(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=ra(t),i=s.find(e=>ra(e.path)===r);e[r]={name:n[r]??i?.name??(Xi(t)||t),path:t,kind:`folder`,icon:i?.icon??L?.placeIcons?.[t]??null}}return e},[s,L]),lt=(0,_.useMemo)(()=>({places:ct,useIcons:L?.systemIcons===!1}),[ct,L?.systemIcons]),ut=L?.defaultView?.showImages??!0,dt=L?.defaultView?.imageStripHeight??ir.imageStripHeight,ft=Xe===`home`?(0,X.jsx)(Us,{size:13}):Xe===`settings`?(0,X.jsx)(ys,{size:13}):Xe===`recycle`?(0,X.jsx)(Ts,{size:13}):Xe===`gallery`?(0,X.jsx)(js,{size:13}):void 0,pt=y.open&&y.query.length>0,mt=(0,_.useMemo)(()=>pt&&it.listing?it.listing.entries.filter(e=>Ra(e.isDirectory?Ja(lt,e.fullPath,e.name):e.name,y)).map(e=>e.fullPath):[],[pt,y,it.listing,lt]);(0,_.useEffect)(()=>{S(0)},[y.query,y.matchCase,y.regex,it.listing?.path]);let ht=mt.length===0?-1:Math.min(x,mt.length-1),gt=(0,_.useCallback)(()=>{b(e=>({...e,open:!1,query:``})),S(0)},[]),_t=(0,_.useCallback)(()=>{b(e=>({...e,open:!0})),w(e=>e+1)},[]),vt=(0,_.useCallback)(()=>{E(e=>({...e,open:!0})),O(e=>e+1)},[]),yt=(0,_.useCallback)(()=>{E(ka),te(0),k(0)},[]),bt=(0,_.useCallback)(e=>{te(t=>ne===0?0:(Math.min(t,ne-1)+e+ne)%ne)},[ne]),xt=(0,_.useCallback)(e=>{b(t=>({...t,open:!0,query:t.open?t.query+e:e})),w(e=>e+1)},[]),St=(0,_.useCallback)(e=>{S(t=>mt.length===0?0:(Math.min(t,mt.length-1)+e+mt.length)%mt.length)},[mt.length]),Ct=(0,_.useRef)({tabs:t,activeId:r,activePane:ge});Ct.current={tabs:t,activeId:r,activePane:ge};let wt=(0,_.useRef)(L);wt.current=L;let Tt=(0,_.useRef)(!1),Et=(0,_.useRef)([]),Dt=(0,_.useCallback)((e,t)=>{n(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),q=(0,_.useRef)(new Map),Ot=(0,_.useCallback)(e=>{let t=(q.current.get(e)??0)+1;return q.current.set(e,t),()=>q.current.get(e)===t},[]),kt=(0,_.useCallback)(async(e,t,n)=>{try{let r=await pr(t,st);if(!n()||!r.listing)return;Dt(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[st,Dt]),At=(0,_.useCallback)(async(e,t,n=!1)=>{let r=Ot(e);gt();let i=!n||!Ct.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;Dt(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&ax(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&kt(e,t,r);let o=await sr(t,!0,st,M.current,t?cx(t):void 0);if(!r())return;Dt(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),n||Dr(o.path).then(()=>ie(e=>e+1))}catch(i){if(!r())return;let a=Ct.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?$b(a):``,s=o.replace(/[\\/]+$/,``),c=Math.max(s.lastIndexOf(`\\`),s.lastIndexOf(`/`)),l=c>0?s.slice(0,c):null,u=ix(i);if(o&&da(u)){let i=ta(o),a=await wc(i,!!ca(i));if(a){la(i,a),r()&&At(e,t,n);return}}Dt(e,e=>({listing:{path:o,parent:l,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:u,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[Ot,st,Dt,gt,kt]),jt=(0,_.useCallback)((e,t)=>{let n=Xb(t);n&&(Yb(n)?(gt(),Ot(e),Dt(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):At(e,n))},[Ot,At,Dt,gt]),Mt=(0,_.useCallback)(async(e,t,n)=>{if(gt(),Yb(t)){Ot(e),Dt(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Ot(e);Dt(e,()=>({index:n,listing:null,loading:!0,error:null}));try{if(await kt(e,t,r),!r())return;let n=await sr(t,!0,st,M.current,cx(t));if(!r())return;Dt(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;let a=t.replace(/[\\/]+$/,``),o=Math.max(a.lastIndexOf(`\\`),a.lastIndexOf(`/`));if(da(ix(i))){let i=ta(t),a=await wc(i,!!ca(i));if(a){la(i,a),r()&&Mt(e,t,n);return}}Dt(e,()=>({listing:{path:t,parent:o>0?a.slice(0,o):null,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:ix(i)}))}},[Ot,st,Dt,gt,kt]),Nt=(0,_.useCallback)((e,t=!0)=>{let r=rx(e??Jb(`home`));return n(e=>[...e,r]),t&&i(r.id),e&&!Yb(e)&&At(r.id,e),r.id},[At]),Pt=(0,_.useCallback)(e=>{for(let t of Ct.current.tabs)Qb(t)===`files`&&ax($b(t),e)&&At(t.id,e,!0)},[At]),Ft=(0,_.useCallback)((e,t=!1)=>{t?Nt(Jb(e)):jt(Ct.current.activeId,Jb(e))},[Nt,jt]),It=(0,_.useCallback)(e=>{let{tabs:t,activeId:r}=Ct.current,a=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==a?.splitWith);if(a&&!a.hidden&&(Ie.current.push(Zb(a)),Ie.current.length>Kb&&Ie.current.shift()),o.length===0){let e=rx();n([e]),i(e.id);return}let s=t.findIndex(t=>t.id===e);n(o),r===e&&i(o[Math.min(s,o.length-1)].id)},[]),Lt=(0,_.useCallback)(()=>{let e=Ie.current.pop();if(!e)return;let t={...rx(e),fresh:!1};n(e=>[...e,t]),i(t.id),Qb(t)===`files`&&At(t.id,$b(t))},[At]),Rt=(0,_.useCallback)((e,t=!1)=>{t?Nt(e):jt(ex(Ct.current),e??Jb(`home`))},[jt,Nt]),zt=(0,_.useCallback)(e=>{let{tabs:t,activeId:n}=Ct.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let a=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;i(r[a].id)},[]),Bt=(0,_.useCallback)(()=>{let{tabs:e,activeId:t}=Ct.current,r=e.find(e=>e.id===t);if(!r||Qb(r)!==`files`)return;let i=r.splitWith?e.find(e=>e.id===r.splitWith):void 0;if(i){n(e=>e.filter(e=>e.id!==i.id)),Dt(t,()=>({splitWith:void 0})),_e(`primary`);return}let a=$b(r),o={...rx(a),hidden:!0};n(e=>[...e,o]),Dt(t,()=>({splitWith:o.id})),At(o.id,a),_e(`primary`)},[At,Dt]),Vt=(0,_.useCallback)(e=>{pe(e),Xa(`yafm.preview.width`,e)},[]),Ht=tt?ge===`secondary`?me??H:H??me:H,Ut=(0,_.useRef)(null),Wt=e=>{e.preventDefault();let t=Ut.current?.getBoundingClientRect();if(!t)return;let n=V?fe:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);o(n),Xa(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},Gt=(e,t,n)=>{t&&ye({x:e.clientX,y:e.clientY,directory:t,refresh:n})},Kt=(0,_.useCallback)((e,t)=>{Ee(n=>n[e]===t?n:{...n,[e]:t})},[]),qt=(0,_.useCallback)(e=>Kt(`primary`,e),[Kt]),Jt=(0,_.useCallback)(e=>Kt(`secondary`,e),[Kt]),Yt=(e,t)=>{Te[e]!==0&&Oe(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},Xt=async(e,t=!1)=>{let n=ve;if(ye(null),!n)return;let r=e===null?await si(n.directory,t):await di(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;gt(),Ae(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},Zt=(0,_.useCallback)(()=>{let{tabs:e}=Ct.current,t=e.find(e=>e.id===ex(Ct.current));t&&t.index>0&&Mt(t.id,t.history[t.index-1],t.index-1)},[Mt]),Qt=(0,_.useCallback)(()=>{let{tabs:e}=Ct.current,t=e.find(e=>e.id===ex(Ct.current));t&&t.index<t.history.length-1&&Mt(t.id,t.history[t.index+1],t.index+1)},[Mt]),$t=(0,_.useCallback)(()=>{let{tabs:e}=Ct.current,t=e.find(e=>e.id===ex(Ct.current));t&&Qb(t)===`files`&&t.listing?.parent&&Rt(t.listing.parent)},[Rt]),en=(0,_.useRef)(null),tn=(0,_.useCallback)(()=>{for(let e of Ct.current.tabs)e.listing&&At(e.id,e.listing.path,!0)},[At]),nn=(0,_.useCallback)(e=>{e.length!==0&&(We(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),Ye())},[Ye]),rn=(0,_.useCallback)(async e=>{let t=await ri(e);t.length!==0&&nn(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[nn]),an=(0,_.useCallback)(e=>{let t=new Set(e);We(e=>e.filter(e=>!t.has(e.path)))},[]),on=(0,_.useCallback)(()=>We([]),[]),sn=(0,_.useRef)(-1),cn=(0,_.useCallback)(e=>{Re(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),Be(e.move),e.entries.length>0&&Ye()},[Ye]),ln=(0,_.useCallback)(async()=>{if(Y.available)try{let e=await ti();sn.current=e.sequence,cn(e)}catch{}},[cn]),un=(0,_.useCallback)(async e=>{e.length!==0&&await $r(e,!1)&&await ln()},[ln]),dn=(0,_.useRef)(Ue);dn.current=Ue,(0,_.useEffect)(()=>{let e=e=>{Ju(e.dataTransfer)&&Ye()},t=e=>{Ju(e.dataTransfer)&&Ye()};return window.addEventListener(`dragstart`,e),window.addEventListener(`dragenter`,t),()=>{window.removeEventListener(`dragstart`,e),window.removeEventListener(`dragenter`,t)}},[Ye]),(0,_.useEffect)(()=>{let e=()=>Je(e=>tx(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let fn=(0,_.useCallback)(async()=>{let e=dn.current;if(e.length>0){let t=await ri(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));We(e=>e.filter(e=>n.has(e.path)))}await ln()},[ln]),pn=(0,_.useCallback)(()=>{fn(),B(e=>e+1),tn()},[fn,tn]),mn=(0,_.useCallback)(e=>{let t=tx(e);Je(t),Qa(`yafm.tray.position`,t)},[]),hn=(0,_.useCallback)(()=>{Ve?He(!1):Ye()},[Ye,Ve]),gn=(0,_.useCallback)(async(t,n,r)=>{let i=await ni(t,n,r);i.ok?(r&&an(t),B(e=>e+1),tn(),ln()):Sc(i.error??e(`The files could not be transferred.`))},[tn,ln,an]);(0,_.useEffect)(()=>{if(Y.available)return Ci().then(e=>{Fe.current=e,Me(e)},()=>void 0),Y.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>e.kind===`delete`&&!Fe.current.some(t=>t.id===e.id));Fe.current=n,Me(n),r&&Pe(!0)})},[]);let _n=(0,_.useCallback)(()=>{wi().then(()=>Ci().then(e=>{Fe.current=e,Me(e)},()=>void 0))},[]);(0,_.useEffect)(()=>{if(!Y.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await ti();if(!e||t.sequence===sn.current)return;sn.current=t.sequence,cn(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[cn]);let vn=(0,_.useCallback)(async e=>{let t=e?await _i():await vi();t.ok?(B(e=>e+1),tn()):t.error&&!t.error.startsWith(`Nothing to`)&&Sc(t.error)},[tn]),yn=(0,_.useRef)(st);(0,_.useEffect)(()=>{yn.current!==st&&(yn.current=st,tn())},[st,tn]);let bn=(0,_.useCallback)((e,t)=>{let{tabs:n}=Ct.current,r=n.find(t=>t.id===e);if(!r||Qb(r)!==`files`)return;let i=$b(r),a=wt.current?.defaultView??ir,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||rr.iconSize,gridSize:r.view?.gridSize||a.gridSize||rr.gridSize,sort:r.view?.sort??rr.sort,sortDescending:r.view?.sortDescending??rr.sortDescending,...t};Dt(e,()=>({view:o})),en.current!==null&&window.clearTimeout(en.current),en.current=window.setTimeout(()=>{en.current=null,dr(i,o)},250)},[Dt]),xn=(0,_.useCallback)(e=>{bn(ex(Ct.current),e)},[bn]),Sn=(0,_.useCallback)(e=>{let t=wt.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??ir,columns:e}};R(n),Vr(n)},[]),Cn=(0,_.useCallback)(e=>{let t=wt.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??ir,showImages:e}};R(n),Vr(n)},[]),wn=(0,_.useCallback)(e=>{let t=wt.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??ir,imageStripHeight:e}};R(n),Vr(n)},[]),Tn=(0,_.useCallback)((e,t,n,r)=>{let i=Ct.current.tabs.find(t=>t.id===e);if(!i||Qb(i)!==`files`||!i.listing)return;let a=$b(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));Dt(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),fr(a,t,n,r)},[Dt]),En=(0,_.useCallback)((e,t)=>{let n=Ct.current.tabs.find(t=>t.id===e);if(!n)return;let r=nx(n,wt.current?.defaultView??ir);bn(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[bn]),Dn=(0,_.useCallback)((e,t)=>{n(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),J=(0,_.useCallback)(()=>{mr().then(c,()=>c([]))},[]),On=(0,_.useCallback)(e=>{let t=(e.openTabs??[]).map(Xb).filter(e=>e!==null);if(t.length===0)return!1;let r=t.map(e=>({...rx(e),fresh:!1})),a=Math.min(Math.max(e.activeTab??0,0),r.length-1);n(r),i(r[a].id);for(let e of r)Qb(e)===`files`&&At(e.id,$b(e),!0);return!0},[At]),kn=(0,_.useCallback)(e=>{let t=Et.current;if(Et.current=[],t.length===0)return;let n=t.filter(e=>!Wb.has(e));for(let e of t)n.includes(e)||Gb(e);if(n.length===0)return;let{tabs:r}=Ct.current;if(!e&&r.length===1&&r[0].fresh){jt(r[0].id,n[0]),Gb(n[0]);for(let e of n.slice(1))Nt(e),Gb(e);return}let a=n.map(e=>{let t=Nt(e);return Gb(e),t}).at(-1);a&&setTimeout(()=>i(a),0)},[Nt,jt]),An=(0,_.useCallback)(()=>{Pr().then(e=>{R(e),I(e.recentLimit);let t={...Ti,...e.shortcuts};ae(t),Di(t.openInNewTab),se(e=>e+1),Tt.current||(Tt.current=!0,kn(e.restoreTabs&&On(e)))},()=>{I(10),Tt.current=!0,kn(!1)})},[kn,On]),jn=(0,_.useCallback)(()=>{Tr().then(P,()=>P([]))},[]),Mn=(0,_.useCallback)(()=>{hr().then(u,()=>u([]))},[]),Nn=t.filter(e=>!e.hidden),Pn=Nn.map(Zb),Fn=Pn.join(`
`),In=Math.max(Nn.findIndex(e=>e.id===r),0);(0,_.useEffect)(()=>{if(!L?.restoreTabs)return;let e=setTimeout(()=>void Hr(Pn,In),700);return()=>clearTimeout(e)},[Fn,In,L?.restoreTabs]),(0,_.useEffect)(()=>{let{tabs:e,activeId:t}=Ct.current,n=e.find(e=>e.id===t);n&&n.fresh&&Qb(n)===`files`&&At(n.id,$b(n),!0),J(),An(),Mn(),Gr().then(f,()=>f(null))},[At,J,An,Mn]),(0,_.useEffect)(()=>{if(Kr().then(m,()=>m(null)),Y.available)return Y.on(e=>{let t=e;t.type===`app.update`&&t.data&&m(t.data)})},[]),(0,_.useEffect)(()=>{let e=setInterval(Mn,3e4);return()=>clearInterval(e)},[Mn]),(0,_.useEffect)(()=>{Xe===`home`&&(jn(),Mn())},[Xe,K.id,jn,Mn]),(0,_.useEffect)(()=>{if(!Y.available)return;let e=Y.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=Ct.current,i=t.data.startup===!0;i&&Wb.has(n)?Gb(n):i&&!Tt.current?Et.current.includes(n)||Et.current.push(n):(i&&r.length===1&&r[0].fresh?jt(r[0].id,n):Yb(n)?jt(ex(Ct.current),n):Nt(n),i&&Gb(n))});return Y.send({type:`app.ready`}),e},[jt,Nt]),(0,_.useEffect)(()=>{if(Y.available)return Y.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:r,sizes:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},n})})},[]),(0,_.useEffect)(()=>{if(Y.available)return Y.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:r,counts:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},n})})},[]),(0,_.useEffect)(()=>{let e=e=>{if(Mi(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),Zt();return}if(e.key===`BrowserForward`){e.preventDefault(),Qt();return}if(e.key===`Escape`&&y.open){e.preventDefault(),gt();return}let t=ki(e);if(t===z.closeTab)e.preventDefault(),It(ex(Ct.current));else if(t===z.newTab)e.preventDefault(),Nt();else if(t===z.reopenTab)e.preventDefault(),Lt();else if(t===z.goBack)e.preventDefault(),Zt();else if(t===z.goForward)e.preventDefault(),Qt();else if(t===z.goUp)e.preventDefault(),$t();else if(t===z.find)e.preventDefault(),Xe===`files`?_t():vt();else if(t===z.location)e.preventDefault(),le(e=>e+1);else if(t===z.home){e.preventDefault();let t=s.find(e=>e.kind===`home`)?.path;t&&Rt(t)}else t===z.iconsView?(e.preventDefault(),Xe===`files`&&xn({mode:`grid`})):t===z.detailsView?(e.preventDefault(),Xe===`files`&&xn({mode:`list`})):t===z.nextTab?(e.preventDefault(),zt(1)):t===z.previousTab?(e.preventDefault(),zt(-1)):t===z.hidden||t===`alt+.`?(e.preventDefault(),jr().then(()=>{B(e=>e+1),tn()})):t===z.undo?(e.preventDefault(),vn(!0)):t===z.redo?(e.preventDefault(),vn(!1)):t===z.splitView?(e.preventDefault(),Bt()):Xe!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),xt(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[z,Xe,y.open,It,Lt,Nt,Zt,Qt,$t,_t,vt,gt,xt,xn,zt,Rt,s,tn,vn,Bt]),(0,_.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),Zt()):e.button===4&&(e.preventDefault(),Qt())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[Zt,Qt]),(0,_.useEffect)(()=>{if(!Y.available||Xe!==`files`)return;let e=new Set;for(let n of t){if(Qb(n)!==`files`)continue;let t=$b(n);if(t){if(ea(t)){let n=ox(ta(t));n&&e.add(n)}else e.add(t)}}e.size>0&&Y.send({type:`fs.watch`,payload:{paths:[...e]}})},[Xe,Ze,t]),(0,_.useEffect)(()=>{if(Y.available)return Y.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,r=Ct.current.tabs.filter(e=>Qb(e)===`files`&&ax($b(e),n));r.length!==0&&(ga(),sr(n,!1,st).then(e=>{for(let t of r){let n=Ct.current.tabs.find(e=>e.id===t.id);n&&Qb(n)===`files`&&!n.loading&&ax($b(n),e.path)&&Dt(t.id,()=>({listing:e}))}},()=>void 0))})},[st,Dt]);let Ln=K.index>0,Rn=K.index<K.history.length-1,zn=(e,t)=>{let n=nx(e,at),r=e.listing?.path??e.history[e.index]??``,i=ea(r),a=i&&na(r);return(0,X.jsx)(Fd,{confirmDelete:L?.confirmDelete??!1,previewVideoAudio:L?.previewVideoAudio??!1,previewVideoAutoplay:L?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?U:he,onActivate:()=>_e(t?`primary`:`secondary`),enableShortcuts:(!tt||(t?ge===`primary`:ge===`secondary`))&&(!i||a),error:e.error,find:e.id===it.id?{...y,currentPath:ht<0?null:mt[ht]}:void 0,imageStripHeight:dt,listing:e.listing,loading:e.loading,onImageStripHeight:wn,readOnly:i&&!a,onOpen:(t,n)=>{n?Nt(t):At(e.id,t)},onOpenFile:(t,n)=>{$i(t)?L?.archiveHandler??!1?n?Nt(t):At(e.id,t):or(t):ea(t)?(async()=>{let e=await lr(t,M.current,cx(t));if(!e.path&&da(e.error)){let n=ta(t),r=ca(n);r&&ua(n);let i=await wc(n,!!r);i&&(la(n,i),e=await lr(t,M.current,i))}e.path?or(e.path):e.error&&Sc(e.error)})():or(t)},onRefresh:()=>{let t=e.listing?.path;t&&Pt(t)},onSelectionCountChange:t?qt:Jt,onSetTags:(t,n,r)=>Tn(e.id,t,n,r),selectionMenuRequest:t?De.primary:De.secondary,onSort:t=>En(e.id,t),onPaste:pn,onClipboardChanged:()=>void ln(),onTransfer:gn,onAddToTray:e=>void rn(e),openOnSingleClick:L?.openOnSingleClick??!1,pendingRename:ke&&t===(ge===`primary`)&&ax(ke.directory,e.listing?.path??``)?ke.path:null,pendingRenameToken:ke?.token??0,refreshToken:ue,shortcuts:z,showCheckboxes:L?.showCheckboxes??!0,showImages:ut,view:n})},Bn=y.open&&(0,X.jsx)(em,{current:ht,focusToken:C,matchCase:y.matchCase,mode:y.mode,onClose:gt,onMatchCase:()=>b(e=>({...e,matchCase:!e.matchCase})),onMode:()=>b(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>St(1),onPrevious:()=>St(-1),onQuery:e=>b(t=>({...t,query:e})),onRegex:()=>b(e=>({...e,regex:!e.regex})),query:y.query,regex:y.regex,total:mt.length}),Vn=Xe===`files`&&ea(Qe),Hn=Vn&&na(Qe),Un=async e=>{if(!Vn)return;let t=ta(Qe),n=ox(t);if(!n)return;let r=e===`named`;if(e===`auto`){let e=ax(Qe,t)?K.listing?.entries??[]:(await sr(t,!1,!1,M.current,cx(t))).entries;r=!(e.length===1&&e[0].isDirectory)}let i=n.includes(`\\`)?`\\`:`/`,a=r?`${n.replace(/[\\/]+$/,``)}${i}${sx(t)}`:n;await Wn(a)},Wn=async t=>{let n=await cr(Qe,t,M.current,cx(Qe));if(!n.ok&&da(n.error)){let e=ta(Qe),r=ca(e);r&&ua(e);let i=await wc(e,!!r);i&&(la(e,i),n=await cr(Qe,t,M.current,i))}n.ok?(Pt(t),ga(),At(K.id,t,!0)):Sc(`${e(`Could not extract the archive.`)}${n.error?`\n${n.error}`:``}`)},Gn=async()=>{if(!Vn)return;let e=await _c(ox(ta(Qe))??void 0);e&&await Wn(e)},qn=(0,X.jsxs)(hx,{children:[(0,X.jsx)(gx,{"data-shortcut":Ai(z.goBack),disabled:!Ln,onClick:e=>{K.index>0&&Oi(e)?Nt(K.history[K.index-1]):Zt()},title:e(`Back`),type:`button`,children:(0,X.jsx)(gs,{})}),(0,X.jsx)(gx,{"data-shortcut":Ai(z.goForward),disabled:!Rn,onClick:e=>{K.index<K.history.length-1&&Oi(e)?Nt(K.history[K.index+1]):Qt()},title:e(`Forward`),type:`button`,children:(0,X.jsx)(_s,{})}),(0,X.jsx)(gx,{"data-shortcut":Ai(z.goUp),disabled:Xe!==`files`||!$e,onClick:e=>{$e&&(Oi(e)?Nt($e):Rt($e))},title:e(`Up one level`),type:`button`,children:(0,X.jsx)(ps,{})}),(0,X.jsx)(_h,{focusToken:ce,icon:ft,label:Xe===`files`?void 0:e(Bb[Xe]),onContextMenu:Xe===`files`?(e,t,n)=>Ce({x:t,y:n,path:e}):void 0,onNavigate:Rt,path:Xe===`files`?Qe:Ze}),Xe===`files`&&(!Vn||Hn)&&(0,X.jsx)(gx,{onClick:e=>Gt(e,Qe,()=>void At(K.id,Qe,!0)),title:e(`New folder or file`),type:`button`,children:(0,X.jsx)(hs,{})}),(0,X.jsx)(gx,{"data-shortcut":Ai(z.find),onClick:vt,title:e(`Search`),type:`button`,children:(0,X.jsx)(fs,{})}),Te.primary>0&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(vx,{}),(0,X.jsx)(gx,{onClick:e=>Yt(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,X.jsx)(hc,{})})]}),Vn&&(0,X.jsxs)(_x,{children:[(0,X.jsx)(vx,{}),(0,X.jsx)(gx,{onClick:()=>void Gn(),onContextMenu:e=>{e.preventDefault(),xe({x:e.clientX,y:e.clientY})},title:e(`Extract archive`),type:`button`,children:(0,X.jsx)(Ps,{})}),(0,X.jsx)(fl,{icon:(0,X.jsx)(oc,{size:15}),onChange:e=>{let t=Number(e);j(t),M.current=t,Vn&&At(K.id,Qe,!0)},options:qb.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`Archive encoding`)}: ${e(qb.find(e=>e.value===String(A))?.label??`Auto`)}`,value:String(A)})]})]}),Jn=T.open?{...T,index:ee}:null;return(0,X.jsx)(Ga,{value:lt,children:(0,X.jsxs)(dx,{$rounded:v,children:[(0,X.jsx)(_p,{settings:L}),(0,X.jsx)(mb,{activeId:K.id,onClose:It,onNewTab:()=>Nt(),onReorder:Dn,onTransferToTab:gn,onSelect:i,onViewChange:xn,onColumns:Sn,onShowImages:Cn,showImages:ut,tasks:je,onClearTasks:_n,activityOpen:Ne,onActivityOpenChange:Pe,trayCount:Ue.length+Le.length,trayVisible:Ve,onToggleTray:hn,split:tt,canSplit:Xe===`files`,onToggleSplit:Bt,details:V,canDetails:Xe===`files`||Xe===`recycle`||Xe===`gallery`,onToggleDetails:()=>de(e=>!e),shortcuts:z,view:ot,tabs:t.filter(e=>!e.hidden).map(n=>{let r=Qb(n),i=$b(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?$b(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?qa(lt,i):void 0,split:!!a,title:r===`files`?Ja(lt,i,Xi(i)||e(`Files`)):e(Bb[r]),partner:a?{title:Ja(lt,o,Xi(o)||e(`Files`)),place:qa(lt,o)}:void 0}})}),(0,X.jsxs)(fx,{children:[(0,X.jsx)(Gv,{activeKind:Xe,currentPath:Xe===`files`?Ze:``,drives:l,historyVersion:re,onNavigate:Rt,onOpenView:Ft,homePath:s.find(e=>e.kind===`home`)?.path??``,places:s,recent:N,recentLimit:F,version:oe}),(0,X.jsxs)(px,{children:[Xe!==`files`&&qn,(0,X.jsxs)(mx,{children:[Xe!==`files`&&T.open&&(0,X.jsx)(em,{current:ee,focusToken:D,matchCase:T.matchCase,mode:T.mode,onClose:yt,onMatchCase:()=>E(e=>({...e,matchCase:!e.matchCase})),onMode:()=>E(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>bt(1),onPrevious:()=>bt(-1),onQuery:e=>E(t=>({...t,query:e})),onRegex:()=>E(e=>({...e,regex:!e.regex})),placeholder:e(`Search`),query:T.query,regex:T.regex,total:ne}),Xe===`files`?tt&&et?(0,X.jsxs)(bx,{ref:Ut,children:[(0,X.jsxs)(xx,{style:{flex:a},children:[(0,X.jsxs)(yx,{$active:ge===`primary`,onPointerDown:()=>_e(`primary`),children:[(0,X.jsx)(gx,{"data-shortcut":Ai(z.goBack),disabled:!Ln,onClick:e=>{let t=K.index-1;t<0||(Oi(e)?Nt(K.history[t]):Mt(K.id,K.history[t],t))},title:e(`Back`),type:`button`,children:(0,X.jsx)(gs,{})}),(0,X.jsx)(gx,{"data-shortcut":Ai(z.goForward),disabled:!Rn,onClick:e=>{let t=K.index+1;t>=K.history.length||(Oi(e)?Nt(K.history[t]):Mt(K.id,K.history[t],t))},title:e(`Forward`),type:`button`,children:(0,X.jsx)(_s,{})}),(0,X.jsx)(gx,{"data-shortcut":Ai(z.goUp),disabled:!$e,onClick:e=>{$e&&(Oi(e)?Nt($e):At(K.id,$e))},title:e(`Up one level`),type:`button`,children:(0,X.jsx)(ps,{})}),(0,X.jsx)(_h,{focusToken:ge===`primary`?ce:void 0,onContextMenu:(e,t,n)=>Ce({x:t,y:n,path:e}),onNavigate:(e,t)=>t?Nt(e):void At(K.id,e),path:Qe}),(0,X.jsx)(gx,{onClick:e=>Gt(e,Qe,()=>void At(K.id,Qe,!0)),title:e(`New folder or file`),type:`button`,children:(0,X.jsx)(hs,{})}),(0,X.jsx)(gx,{"data-shortcut":Ai(z.find),onClick:_t,title:e(`Search`),type:`button`,children:(0,X.jsx)(fs,{})}),Te.primary>0&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(vx,{}),(0,X.jsx)(gx,{onClick:e=>Yt(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,X.jsx)(hc,{})})]})]}),zn(K,!0),ge===`primary`&&Bn]}),(0,X.jsx)(Sx,{onDoubleClick:()=>o(.5),onPointerDown:Wt,title:e(`Drag to resize; double-click to reset`)}),(0,X.jsxs)(xx,{$enter:!0,style:{flex:1-a},children:[(0,X.jsxs)(yx,{$active:ge===`secondary`,onPointerDown:()=>_e(`secondary`),children:[(0,X.jsx)(gx,{"data-shortcut":Ai(z.goBack),disabled:et.index<=0,onClick:e=>{let t=et.index-1;t<0||(Oi(e)?Nt(et.history[t]):Mt(et.id,et.history[t],t))},title:e(`Back`),type:`button`,children:(0,X.jsx)(gs,{})}),(0,X.jsx)(gx,{"data-shortcut":Ai(z.goForward),disabled:et.index>=et.history.length-1,onClick:e=>{let t=et.index+1;t>=et.history.length||(Oi(e)?Nt(et.history[t]):Mt(et.id,et.history[t],t))},title:e(`Forward`),type:`button`,children:(0,X.jsx)(_s,{})}),(0,X.jsx)(gx,{"data-shortcut":Ai(z.goUp),disabled:!rt,onClick:e=>{rt&&(Oi(e)?Nt(rt):At(et.id,rt))},title:e(`Up one level`),type:`button`,children:(0,X.jsx)(ps,{})}),(0,X.jsx)(_h,{focusToken:ge===`secondary`?ce:void 0,onContextMenu:(e,t,n)=>Ce({x:t,y:n,path:e}),onNavigate:(e,t)=>t?Nt(e):void At(et.id,e),path:nt}),(0,X.jsx)(gx,{onClick:e=>Gt(e,nt,()=>void At(et.id,nt,!0)),title:e(`New folder or file`),type:`button`,children:(0,X.jsx)(hs,{})}),(0,X.jsx)(gx,{"data-shortcut":Ai(z.find),onClick:_t,title:e(`Search`),type:`button`,children:(0,X.jsx)(fs,{})}),Te.secondary>0&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(vx,{}),(0,X.jsx)(gx,{onClick:e=>Yt(`secondary`,e),title:e(`Selection menu`),type:`button`,children:(0,X.jsx)(hc,{})})]})]}),zn(et,!1),ge===`secondary`&&Bn]}),(0,X.jsx)(Yl,{info:Ht,onWidth:Vt,open:V,videoAudio:L?.previewVideoAudio??!1,videoAutoplay:L?.previewVideoAutoplay??!1,width:fe})]}):(0,X.jsxs)(wx,{children:[(0,X.jsxs)(Tx,{children:[qn,(0,X.jsxs)(Cx,{children:[zn(K,!0),Bn]})]}),(0,X.jsx)(Yl,{info:H,onWidth:Vt,open:V,videoAudio:L?.previewVideoAudio??!1,videoAutoplay:L?.previewVideoAutoplay??!1,width:fe})]}):Xe===`home`?(0,X.jsx)(fh,{drives:l,find:Jn,historyVersion:re,onSearchMatches:k,homePath:s.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:Mn,onHistoryChanged:()=>ie(e=>e+1),onAddToTray:e=>void rn(e),onOpen:Rt,onLayoutChanged:An,onPlacesChanged:c,onRecentCleared:jn,places:s,recent:N,recentLimit:F,visibilityVersion:ue}):Xe===`settings`?(0,X.jsx)(Bg,{appInfo:d,find:Jn,focusSection:h,onSearchMatches:k,onSettingsChanged:An}):Xe===`gallery`?(0,X.jsx)(jv,{confirmDelete:L?.confirmDelete??!1,find:Jn,onSearchMatches:k,openOnSingleClick:L?.openOnSingleClick??!1,onAddToTray:e=>void rn(e),shortcuts:z,showCheckboxes:L?.showCheckboxes??!0,showDetails:V,videoAudio:L?.previewVideoAudio??!1,videoAutoplay:L?.previewVideoAutoplay??!1,view:ot}):(0,X.jsx)(Nh,{find:Jn,onOpenLocation:Rt,onShowDetails:()=>de(!0),platform:d?.platform,showDetails:V,videoAudio:L?.previewVideoAudio??!1,videoAutoplay:L?.previewVideoAutoplay??!1})]},Xe),(0,X.jsxs)(kx,{children:[(0,X.jsx)(`span`,{children:Xe===`files`&&K.listing?lx(e,K.listing):``}),d?(0,X.jsxs)(Ex,{children:[(0,X.jsxs)(`span`,{children:[`v`,d.version,` · `,d.platform]}),p?.available&&(0,X.jsxs)(Dx,{onClick:()=>{g(`updates`),Ft(`settings`)},title:e(`Version {version} is available.`,{version:p.latest}),type:`button`,children:[(0,X.jsx)(Ox,{}),e(`Update available`)]})]}):(0,X.jsx)(`span`,{children:`browser preview`})]})]})]}),(0,X.jsx)($u,{clipboardItems:Le,clipboardMove:ze,currentDirectory:Xe===`files`?Ze:``,items:Ue,onAdd:e=>void rn(e),onClear:on,onClose:()=>He(!1),onCopyToClipboard:e=>void un(e),onPosition:mn,onRemove:an,onTransfer:gn,position:qe,visible:Ve}),ve&&(0,X.jsx)(ll,{creationOnly:!0,directory:ve.directory,menu:{x:ve.x,y:ve.y,paths:[],background:!0},onClose:()=>ye(null),onCreateFile:e=>void Xt(e),onCreateFolder:e=>void Xt(null,e),shortcuts:z}),Se&&(0,X.jsx)(ll,{allowCompression:!0,directory:ox(Se.path)??Se.path,menu:{x:Se.x,y:Se.y,paths:[Se.path]},onAddToTray:e=>void rn(e),onArchiveCreated:e=>{e&&Pt(ox(Se.path)??Se.path)},onClose:()=>Ce(null),onCompressTo:(e,t)=>W({paths:e,name:t}),onCopy:(e,t)=>void $r(e,t),onDelete:e=>void ai(e,!1).then(()=>Pt(ox(Se.path)??Se.path)),onOpen:(e,t)=>t?Nt(e):void At(K.id,e),onOpenFile:e=>void or(e),onPaste:e=>void ii(e).then(t=>{t&&Pt(e)}),onRefresh:()=>Pt(Se.path),shortcuts:z,target:{path:Se.path,isDirectory:!0}}),we&&(0,X.jsx)(Tl,{initialDirectory:ox(Se?.path??Qe)??Qe,initialName:we.name,onCancel:()=>W(null),onCompress:async e=>{let t=await Si(we.paths,e);return!t.ok&&t.error&&Sc(t.error),t.ok}}),be&&(0,X.jsx)(Zc,{items:[{label:e(`Extract here`),onSelect:()=>void Un(`here`)},{label:e(`Extract to a folder named after the archive`),onSelect:()=>void Un(`named`)},{label:e(`Auto extract to the current folder`),onSelect:()=>void Un(`auto`)}],onClose:()=>xe(null),x:be.x,y:be.y}),G&&(0,X.jsx)(Sp,{delaySeconds:G.prompt.delaySeconds,hits:G.prompt.hits,onCancel:()=>{G.resolve(!1),Ge(null)},onConfirm:()=>{G.resolve(!0),Ge(null)},permanent:G.prompt.permanent},G.id),(0,X.jsx)(Lp,{}),(0,X.jsx)(Wp,{}),(0,X.jsx)(Fb,{}),(0,X.jsx)($n,{})]})})}var dx=J.div`
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
`,fx=J.div`
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
`,px=J.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,mx=J.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${Kc}
`,hx=J.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,gx=J.button`
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
`,_x=J.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,vx=J.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,yx=J.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,bx=J.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,xx=J.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?Yc:``}
`,Sx=J.div`
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
        ${Xc}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,Cx=J.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,wx=J.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Tx=J.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Ex=J.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,Dx=J.button`
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
`,Ox=J.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,kx=J.footer`
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
`;function Ax({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:o,showImages:s,onCancel:c,onSelect:l}){let u=Kn(),d=Dd(`picker`),f=t===`file`,p=r??[],[m,h]=(0,_.useState)(e),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(!0),[x,S]=(0,_.useState)(null),[C,w]=(0,_.useState)(()=>new Set),[T,E]=(0,_.useState)(a??[]),[D,O]=(0,_.useState)([]),[ee,te]=(0,_.useState)([]),[ne,k]=(0,_.useState)([]),[A,j]=(0,_.useState)([]),[M,N]=(0,_.useState)(``),[P,F]=(0,_.useState)(p.length===0),[I,L]=(0,_.useState)(`files`),[R,re]=(0,_.useState)(0),[ie,z]=(0,_.useState)(ka),[ae,oe]=(0,_.useState)(0),[se,ce]=(0,_.useState)(0),[le,ue]=(0,_.useState)(null),[B,V]=(0,_.useState)(null),[de,fe]=(0,_.useState)(0),[pe,H]=(0,_.useState)(null),[U,me]=(0,_.useState)(ir.imageStripHeight);(0,_.useEffect)(()=>{Pr().then(H,()=>H(null))},[]),(0,_.useEffect)(()=>{a?E(a):mr().then(E,()=>E([]))},[a]),(0,_.useEffect)(()=>{hr().then(O,()=>O([])),Tr().then(te,()=>te([]))},[]),(0,_.useEffect)(()=>{let e=!0;return b(!0),S(null),w(new Set),N(f?``:Xi(m)),sr(m||void 0,!1).then(t=>{e&&(v(t),h(t.path),N(f?``:Xi(t.path)),b(!1))},t=>{e&&(S(t instanceof Error?t.message:String(t)),b(!1))}),()=>{e=!1}},[m,R,f]),(0,_.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),z(e=>({...e,open:!0})),oe(e=>e+1);return}if(e.key===`Escape`){ie.open?(z(e=>({...e,open:!1,query:``})),ce(0)):c();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),ge();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),_e();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),z(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),oe(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Ae()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,_.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),ge()):e.button===4&&(e.preventDefault(),_e())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let he=e=>{let t=e.trim();t.length!==0&&ra(t)!==ra(m)&&(k(e=>[...e,m]),j([]),L(`files`),h(t))},ge=()=>{let e=ne.at(-1);e!==void 0&&(k(e=>e.slice(0,-1)),j(e=>[m,...e]),h(e))},_e=()=>{let e=A[0];e!==void 0&&(j(e=>e.slice(1)),k(e=>[...e,m]),h(e))},ve=g?.path??m,ye=g?.parent??(m?Zi(m):null);(0,_.useEffect)(()=>{Y.available&&ve&&Y.send({type:`fs.watch`,payload:{paths:[ve]}})},[ve]),(0,_.useEffect)(()=>{if(Y.available&&ve)return Y.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&ra(t.data.path)===ra(ve)&&sr(ve,!1).then(e=>{v(e);let t=new Set(e.entries.map(e=>e.fullPath));w(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[ve]);let be=(g?.entries??[]).filter(e=>e.isDirectory||f&&(P||p.length===0||p.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),xe=g?{...g,entries:be}:null,Se=ie.open&&ie.query.length>0,Ce=(0,_.useMemo)(()=>Se?be.filter(e=>Ra(e.name,ie)).map(e=>e.fullPath):[],[Se,be,ie]);(0,_.useEffect)(()=>{ce(0)},[ie.query,ie.matchCase,ie.regex,g?.path]);let we=Ce.length===0?-1:Math.min(se,Ce.length-1),W=(0,_.useMemo)(()=>({...ie,currentPath:we>=0?Ce[we]:null}),[ie,we,Ce]),Te=pe?.defaultView??ir,Ee=o??{mode:Te.mode,iconSize:Te.iconSize,gridSize:Te.gridSize,sort:`name`,sortDescending:!1,columns:Te.columns??[`type`,`size`,`modified`]},De=(s??Te.showImages)&&Ee.mode===`list`,Oe=M.trim(),ke=Oe.length>0?Mx(Oe)?Oe:jx(ve,Oe):null,Ae=()=>{if(y||x)return;let e=n?[...C]:[...C].slice(0,1);e.length>0?l(e):ke!==null&&Oe!==Xi(ve)?l([ke]):!f&&ve&&l([ve])},je=(0,_.useCallback)(e=>{w(new Set(e)),N(e.length===1?Xi(e[0]):e.length===0&&!f?Xi(ve):``)},[ve,f]),Me=e=>{g?.entries.find(t=>t.fullPath===e)?.isDirectory?he(e):f&&l([e])},Ne=e=>N(e),Pe=async e=>{let t=le;if(ue(null),!t||!ve)return;let n=e===null?await si(ve):await di(ve,e);n.ok&&n.path!==null&&(z(e=>({...e,open:!1,query:``})),e!==null&&F(!0),re(e=>e+1),window.setTimeout(()=>{V(n.path),fe(e=>e+1)},120))},Fe=()=>{z(e=>({...e,open:!0})),oe(e=>e+1)},Ie=e=>{ce(t=>Ce.length===0?0:(t+e+Ce.length)%Ce.length)},Le=e=>(0,X.jsxs)(Hx,{children:[(0,X.jsxs)(Ux,{children:[(0,X.jsx)(Wx,{children:u(f?`File name:`:`Folder:`)}),(0,X.jsx)(Gx,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ae())},spellCheck:!1,value:M}),f&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Wx,{children:u(`Files of type:`)}),(0,X.jsx)(fl,{onChange:e=>F(e===`all`),options:[...p.length>0?[{value:`supported`,label:`${u(`Supported files`)} (${p.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${u(`All files`)} (*.*)`}],value:P?`all`:`supported`,width:220})]})]}),(0,X.jsxs)(Kx,{children:[(0,X.jsx)(qx,{onClick:c,type:`button`,children:u(`Cancel`)}),(0,X.jsxs)(qx,{$primary:!0,disabled:y||x!==null||f&&C.size===0&&Oe.length===0,onClick:Ae,type:`button`,children:[(0,X.jsx)(Es,{size:12}),u(f?`Select this file`:`Select this folder`)]})]})]}),Re=(0,X.jsxs)(Px,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,X.jsxs)(Fx,{children:[(0,X.jsxs)(Ix,{children:[(0,X.jsx)(ls,{size:16}),u(f?`Choose a file`:`Choose a folder`)]}),(0,X.jsx)(Lx,{onClick:c,title:u(`Cancel`),type:`button`,children:(0,X.jsx)(Ds,{size:12})})]}),(0,X.jsxs)(Rx,{children:[(0,X.jsx)(Gv,{activeKind:I===`overview`?`home`:I===`gallery`?`gallery`:`files`,currentPath:ve,drives:D,hiddenViews:f?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:T.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>he(e),onOpenView:e=>{e===`home`?(w(new Set),N(f?``:Xi(ve)),L(`overview`)):e===`gallery`&&f&&(w(new Set),N(``),L(`gallery`))},places:T,recent:ee,recentLimit:10}),(0,X.jsx)(zx,{children:I===`overview`?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(fh,{drives:D,historyVersion:0,homePath:T.find(e=>e.kind===`home`)?.path??``,onOpen:e=>he(e),onPick:f?e=>l([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:je,places:T,readOnly:!0,recent:ee,recentLimit:10,visibilityVersion:0}),Le(N)]}):I===`gallery`?(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(jv,{onPick:e=>l([e]),onSelectionChange:je,showCheckboxes:pe?.showCheckboxes??!0,view:{...rr,columns:[]}}),Le(N)]}):(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(Bx,{children:[(0,X.jsx)(Vx,{disabled:ne.length===0,onClick:ge,title:u(`Back`),type:`button`,children:(0,X.jsx)(gs,{})}),(0,X.jsx)(Vx,{disabled:A.length===0,onClick:_e,title:u(`Forward`),type:`button`,children:(0,X.jsx)(_s,{})}),(0,X.jsx)(Vx,{disabled:!ye,onClick:()=>ye&&he(ye),title:u(`Up one level`),type:`button`,children:(0,X.jsx)(ps,{})}),(0,X.jsx)(_h,{onNavigate:he,path:ve}),(0,X.jsx)(Vx,{onClick:e=>ue({x:e.clientX,y:e.clientY}),title:u(`New folder or file`),type:`button`,children:(0,X.jsx)(hs,{})}),(0,X.jsx)(Vx,{onClick:Fe,title:u(`Search`),type:`button`,children:(0,X.jsx)(fs,{})}),d.available&&(0,X.jsx)(Vx,{onClick:e=>d.open(e.clientX,e.clientY),title:u(`Selection menu`),type:`button`,children:(0,X.jsx)(hc,{})})]}),ie.open&&(0,X.jsx)(em,{current:we,focusToken:ae,matchCase:ie.matchCase,mode:ie.mode,onClose:()=>{z(e=>({...e,open:!1,query:``})),ce(0)},onMatchCase:()=>z(e=>({...e,matchCase:!e.matchCase})),onMode:()=>z(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Ie(1),onPrevious:()=>Ie(-1),onQuery:e=>z(t=>({...t,query:e})),onRegex:()=>z(e=>({...e,regex:!e.regex})),query:ie.query,regex:ie.regex,total:Ce.length}),(0,X.jsx)(Fd,{allowBackgroundMenu:!0,confirmDelete:pe?.confirmDelete??!1,enableShortcuts:!0,error:x,find:W,imageStripHeight:U,loading:y,listing:xe,onImageStripHeight:me,onOpen:Me,onOpenFile:Me,onRefresh:()=>re(e=>e+1),onSelectionChange:je,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:pe?.openOnSingleClick??!1,refreshToken:R,pendingRename:B,pendingRenameToken:de,showCheckboxes:pe?.showCheckboxes??!0,showDetails:!1,showImages:De,singleSelect:!n,view:Ee}),Le(Ne)]})})]}),le&&(0,X.jsx)(ll,{creationOnly:!0,directory:ve,menu:{x:le.x,y:le.y,paths:[],background:!0},onClose:()=>ue(null),onCreateFile:f?e=>void Pe(e):void 0,onCreateFolder:()=>void Pe(null),shortcuts:Ti})]});return i?Re:(0,Pc.createPortal)((0,X.jsx)(Nx,{onPointerDown:e=>{e.target===e.currentTarget&&c()},children:Re}),document.body)}function jx(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Mx(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Nx=J.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${Yc}
`,Px=J.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:Fc}
    ${({$inline:e})=>e?``:Wc}
`,Fx=J.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,Ix=J.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,Lx=J.button`
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
`,Rx=J.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,zx=J.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,Bx=J.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Vx=J.button`
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
`,Hx=J.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,Ux=J.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,Wx=J.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,Gx=J.input`
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
`,Kx=J.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,qx=J.button`
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
`;function Jx({mode:e,multiple:t,extensions:n,initial:r}){let i=Kn(),a=Xn(),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)({}),[u,d]=(0,_.useState)(null),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)(null),g=(0,_.useRef)(0);(0,_.useEffect)(()=>{Y.send({type:`app.ready`})},[]),(0,_.useEffect)(()=>(tr(e=>new Promise(t=>{h({id:++g.current,prompt:e,resolve:t})})),()=>tr(null)),[]),(0,_.useEffect)(()=>{Pr().then(e=>{s(e),Dg(e.accentColor,e.secondaryColor)},()=>void 0)},[]);let v=o?.defaultView??ir,y={mode:c.mode??v.mode,iconSize:c.iconSize??v.iconSize,gridSize:c.gridSize??v.gridSize,sort:`name`,sortDescending:!1,columns:u??v.columns??[`type`,`size`,`modified`]},b=e=>l(t=>({...t,...e}));return(0,X.jsxs)(Yx,{children:[(0,X.jsxs)(Xx,{children:[(0,X.jsx)(Zx,{children:(0,X.jsx)(Os,{size:17})}),(0,X.jsx)(Qx,{...a,children:i(e===`file`?`Choose a file`:`Choose a folder`)}),(0,X.jsx)(Qy,{onChange:b,onColumns:d,onShowImages:p,showImages:f??v.showImages,view:y}),(0,X.jsx)($x,{children:(0,X.jsx)(eS,{onClick:()=>Y.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:i(`Cancel`),type:`button`,children:(0,X.jsx)(Ds,{size:12})})})]}),(0,X.jsx)(tS,{children:(0,X.jsx)(Ax,{extensions:n,initial:r,inline:!0,mode:e,multiple:t,onCancel:()=>Y.send({type:`pick.cancel`}),onSelect:e=>Y.send({type:`pick.submit`,payload:{paths:e}}),showImages:f??v.showImages,fileView:y})}),m&&(0,X.jsx)(Sp,{delaySeconds:m.prompt.delaySeconds,hits:m.prompt.hits,onCancel:()=>{m.resolve(!1),h(null)},onConfirm:()=>{m.resolve(!0),h(null)},permanent:m.prompt.permanent},m.id),(0,X.jsx)(Lp,{}),(0,X.jsx)($n,{})]})}var Yx=J.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,Xx=J.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,Zx=J.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,Qx=J.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$x=J.div`
    display: flex;
    flex-shrink: 0;
`,eS=J.button`
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
`,tS=J.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,nS=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,nS);var rS=document.getElementById(`root`),iS=new URLSearchParams(window.location.search),aS=iS.get(`picker`),oS=iS.get(`filter`)??``;rS&&(0,v.createRoot)(rS).render((0,X.jsx)(_.StrictMode,{children:(0,X.jsx)(qn,{children:aS===`folder`||aS===`file`?(0,X.jsx)(Jx,{extensions:oS?oS.split(`;`).filter(Boolean):[],initial:iS.get(`initial`)??``,mode:aS,multiple:iS.get(`multiple`)===`1`}):(0,X.jsx)(ux,{})})}));