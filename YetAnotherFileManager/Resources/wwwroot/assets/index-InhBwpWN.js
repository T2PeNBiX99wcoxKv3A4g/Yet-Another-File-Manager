var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var te=/\/+/g;function ne(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function A(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function re(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,re(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ne(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(te,`$&/`)+`/`),re(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(te,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ne(a,u),c+=re(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ne(a,u++),c+=re(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return re(A(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function j(e,t,n){if(e==null)return e;var r=[],i=0;return re(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ie(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var M=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function N(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,M)}catch(e){M(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function ae(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else N(ae.bind(null,e))}var oe={map:j,forEach:function(e,t,n){j(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return j(e,function(){t++}),t},toArray:function(e){return j(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=oe,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=ae,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ee.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ee.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ie}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=N,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&te(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function ee(){return g?!0:!(e.unstable_now()-T<w)}function E(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ee());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&te(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(E)};else if(typeof MessageChannel<`u`){var O=new MessageChannel,k=O.port2;O.port1.onmessage=E,D=function(){k.postMessage(null)}}else D=function(){_(E,0)};function te(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,te(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function ee(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var E=Object.assign,D=Symbol.for(`react.element`),O=Symbol.for(`react.transitional.element`),k=Symbol.for(`react.portal`),te=Symbol.for(`react.fragment`),ne=Symbol.for(`react.strict_mode`),A=Symbol.for(`react.profiler`),re=Symbol.for(`react.consumer`),j=Symbol.for(`react.context`),ie=Symbol.for(`react.forward_ref`),M=Symbol.for(`react.suspense`),N=Symbol.for(`react.suspense_list`),ae=Symbol.for(`react.memo`),oe=Symbol.for(`react.lazy`),se=Symbol.for(`react.activity`),ce=Symbol.for(`react.legacy_hidden`),le=Symbol.for(`react.memo_cache_sentinel`),ue=Symbol.for(`react.view_transition`),de=Symbol.for(`react.recoverable`),fe=Symbol.iterator;function P(e){return typeof e!=`object`||!e?null:(e=fe&&e[fe]||e[`@@iterator`],typeof e==`function`?e:null)}var F=Symbol.for(`react.client.reference`);function pe(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===F?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case te:return`Fragment`;case A:return`Profiler`;case ne:return`StrictMode`;case M:return`Suspense`;case N:return`SuspenseList`;case se:return`Activity`;case ue:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case k:return`Portal`;case j:return e.displayName||`Context`;case re:return(e._context.displayName||`Context`)+`.Consumer`;case ie:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ae:return t=e.displayName||null,t===null?pe(e.type)||`Memo`:t;case oe:t=e._payload,e=e._init;try{return pe(e(t))}catch{}}return null}var I=Array.isArray,L=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,R=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},he=[],ge=-1;function _e(e){return{current:e}}function z(e){0>ge||(e.current=he[ge],he[ge]=null,ge--)}function B(e,t){ge++,he[ge]=e.current,e.current=t}var ve=_e(null),ye=_e(null),be=_e(null),xe=_e(null);function Se(e,t){switch(B(be,t),B(ye,e),B(ve,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}z(ve),B(ve,e)}function Ce(){z(ve),z(ye),z(be)}function we(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,B(xe,e)),t=ve.current;var n=dp(t,e.type);t!==n&&(B(ye,e),B(ve,n))}function Te(e){ye.current===e&&(z(ve),z(ye)),xe.current===e&&(z(xe),sh._currentValue=me)}var Ee,De;function Oe(e){if(Ee===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ee=t&&t[1]||``,De=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ee+e+De}var ke=!1;function Ae(e,t){if(!e||ke)return``;ke=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ke=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Oe(n):``}function je(e,t){switch(e.tag){case 26:case 27:case 5:return Oe(e.type);case 16:return Oe(`Lazy`);case 13:return e.child!==t&&t!==null?Oe(`Suspense Fallback`):Oe(`Suspense`);case 19:return Oe(`SuspenseList`);case 0:case 15:return Ae(e.type,!1);case 11:return Ae(e.type.render,!1);case 1:return Ae(e.type,!0);case 31:return Oe(`Activity`);case 30:return Oe(`ViewTransition`);default:return``}}function Me(e){try{var t=``,n=null;do t+=je(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ne=Object.prototype.hasOwnProperty,Pe=t.unstable_scheduleCallback,Fe=t.unstable_cancelCallback,Ie=t.unstable_shouldYield,Le=t.unstable_requestPaint,Re=t.unstable_now,ze=t.unstable_getCurrentPriorityLevel,Be=t.unstable_ImmediatePriority,Ve=t.unstable_UserBlockingPriority,He=t.unstable_NormalPriority,Ue=t.unstable_LowPriority,We=t.unstable_IdlePriority,Ge=t.log,Ke=t.unstable_setDisableYieldValue,qe=null,Je=null;function Ye(e){if(typeof Ge==`function`&&Ke(e),Je&&typeof Je.setStrictMode==`function`)try{Je.setStrictMode(qe,e)}catch{}}var Xe=Math.clz32?Math.clz32:$e,Ze=Math.log,Qe=Math.LN2;function $e(e){return e>>>=0,e===0?32:31-(Ze(e)/Qe|0)|0}var et=256,tt=262144,nt=4194304;function rt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function it(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=rt(n))):i=rt(o):i=rt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=rt(n))):i=rt(o)):i=rt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function at(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ot(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-Xe(n),i=1<<r;t|=e[r],n&=~i}return t}function st(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ct(){var e=nt;return nt<<=1,!(nt&62914560)&&(nt=4194304),e}function lt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ut(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function dt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Xe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&ft(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function ft(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Xe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function pt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function mt(e,t){var n=t&-t;return n=n&42?1:ht(n),(n&(e.suspendedLanes|t))===0?n:0}function ht(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function gt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function _t(){var e=R.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function vt(e,t){var n=R.p;try{return R.p=e,t()}finally{R.p=n}}var yt=Math.random().toString(36).slice(2),bt=`__reactFiber$`+yt,xt=`__reactProps$`+yt,St=`__reactContainer$`+yt,Ct=`__reactEvents$`+yt,wt=`__reactListeners$`+yt,Tt=`__reactHandles$`+yt,Et=`__reactResources$`+yt,Dt=`__reactMarker$`+yt,Ot=`__reactLoad$`+yt;function kt(e){delete e[bt],delete e[xt],delete e[wt],delete e[Tt]}function At(e){var t;if(t=e[bt])return t;for(var n=e.parentNode;n;){if(t=n[St]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[bt])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function jt(e){if(e=e[bt]||e[St]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Mt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Nt(e){var t=e[Et];return t||=e[Et]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Pt(e){e[Dt]=!0}function Ft(e){e[Ot]=void 0}var It=new Set,Lt={};function Rt(e,t){zt(e,t),zt(e+`Capture`,t)}function zt(e,t){for(Lt[e]=t,e=0;e<t.length;e++)It.add(t[e])}var Bt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Vt={},Ht={};function Ut(e){return Ne.call(Ht,e)?!0:Ne.call(Vt,e)?!1:Bt.test(e)?Ht[e]=!0:(Vt[e]=!0,!1)}var V=!1;function Wt(){var e=V;return V=!1,e}function Gt(e,t,n){if(Ut(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Kt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function qt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Jt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Yt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Xt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zt(e){if(!e._valueTracker){var t=Yt(e)?`checked`:`value`;e._valueTracker=Xt(e,t,``+e[t])}}function Qt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Yt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var $t=/[\n"\\]/g;function en(e){return e.replace($t,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function tn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Jt(t)):e.value!==``+Jt(t)&&(e.value=``+Jt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):rn(e,Jt(n)):o===`number`&&e.value==t?rn(e,Jt(e.value)):rn(e,Jt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Jt(s):e.removeAttribute(`name`)}function nn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Zt(e);return}n=n==null?``:``+Jt(n),t=t==null?n:``+Jt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Zt(e)}function rn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function an(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Jt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function on(e,t,n){t!=null&&(t=``+Jt(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+Jt(n)}function sn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(I(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Jt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Zt(e)}function cn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ln=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function un(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||ln.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function dn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,V=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(un(e,a,r),V=!0)}else for(var o in t)t.hasOwnProperty(o)&&un(e,o,t[o])}function fn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var pn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),mn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hn(e){return mn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function gn(){}var _n=null;function vn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yn=null,bn=null;function xn(e){var t=jt(e);if(t&&(e=t.stateNode)){var n=e[xt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(tn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+en(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[xt]||null;if(!a)throw Error(i(90));tn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Qt(r)}break a;case`textarea`:on(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&an(e,!!n.multiple,t,!1)}}}var Sn=!1;function Cn(e,t,n){if(Sn)return e(t,n);Sn=!0;try{return e(t)}finally{if(Sn=!1,(yn!==null||bn!==null)&&(Ld(),yn&&(t=yn,e=bn,bn=yn=null,xn(t),e)))for(t=0;t<e.length;t++)xn(e[t])}}function wn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[xt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var Tn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,En=!1;if(Tn)try{var Dn={};Object.defineProperty(Dn,"passive",{get:function(){En=!0}}),window.addEventListener(`test`,Dn,Dn),window.removeEventListener(`test`,Dn,Dn)}catch{En=!1}var On=null,kn=null,An=null;function jn(){if(An)return An;var e,t=kn,n=t.length,r,i=`value`in On?On.value:On.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return An=i.slice(e,1<r?1-r:void 0)}function Mn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nn(){return!0}function H(){return!1}function Pn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Nn:H,this.isPropagationStopped=H,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),t}var Fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},In=Pn(Fn),Ln=E({},Fn,{view:0,detail:0}),Rn=Pn(Ln),zn,Bn,Vn,U=E({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Vn&&(Vn&&e.type===`mousemove`?(zn=e.screenX-Vn.screenX,Bn=e.screenY-Vn.screenY):Bn=zn=0,Vn=e),zn)},movementY:function(e){return`movementY`in e?e.movementY:Bn}}),Hn=Pn(U),W=Pn(E({},U,{dataTransfer:0})),Un=Pn(E({},Ln,{relatedTarget:0})),Wn=Pn(E({},Fn,{animationName:0,elapsedTime:0,pseudoElement:0})),Gn=Pn(E({},Fn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Kn=Pn(E({},Fn,{data:0})),qn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Jn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Yn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Xn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Yn[e])?!!t[e]:!1}function Zn(){return Xn}var Qn=Pn(E({},Ln,{key:function(e){if(e.key){var t=qn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Mn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Jn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zn,charCode:function(e){return e.type===`keypress`?Mn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Mn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),$n=Pn(E({},U,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),er=Pn(E({},Fn,{submitter:0})),tr=Pn(E({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zn})),nr=Pn(E({},Fn,{propertyName:0,elapsedTime:0,pseudoElement:0})),rr=Pn(E({},U,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),ir=Pn(E({},Fn,{newState:0,oldState:0,source:0})),ar=[9,13,27,32],or=Tn&&`CompositionEvent`in window,sr=null;Tn&&`documentMode`in document&&(sr=document.documentMode);var cr=Tn&&`TextEvent`in window&&!sr,lr=Tn&&(!or||sr&&8<sr&&11>=sr),ur=` `,dr=!1;function fr(e,t){switch(e){case`keyup`:return ar.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function pr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var mr=!1;function hr(e,t){switch(e){case`compositionend`:return pr(t);case`keypress`:return t.which===32?(dr=!0,ur):null;case`textInput`:return e=t.data,e===ur&&dr?null:e;default:return null}}function gr(e,t){if(mr)return e===`compositionend`||!or&&fr(e,t)?(e=jn(),An=kn=On=null,mr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return lr&&t.locale!==`ko`?null:t.data;default:return null}}var _r={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!_r[e.type]:t===`textarea`}function yr(e,t,n,r){yn?bn?bn.push(r):bn=[r]:yn=r,t=qf(t,`onChange`),0<t.length&&(n=new In(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var br=null,xr=null;function Sr(e){Bf(e,0)}function Cr(e){if(Qt(Mt(e)))return e}function wr(e,t){if(e===`change`)return t}var Tr=!1;if(Tn){var Er;if(Tn){var Dr=`oninput`in document;if(!Dr){var Or=document.createElement(`div`);Or.setAttribute(`oninput`,`return;`),Dr=typeof Or.oninput==`function`}Er=Dr}else Er=!1;Tr=Er&&(!document.documentMode||9<document.documentMode)}function kr(){br&&(br.detachEvent(`onpropertychange`,Ar),xr=br=null)}function Ar(e){if(e.propertyName===`value`&&Cr(xr)){var t=[];yr(t,xr,e,vn(e)),Cn(Sr,t)}}function jr(e,t,n){e===`focusin`?(kr(),br=t,xr=n,br.attachEvent(`onpropertychange`,Ar)):e===`focusout`&&kr()}function Mr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Cr(xr)}function Nr(e,t){if(e===`click`)return Cr(t)}function Pr(e,t){if(e===`input`||e===`change`)return Cr(t)}function Fr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ir=typeof Object.is==`function`?Object.is:Fr;function Lr(e,t){if(Ir(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ne.call(t,i)||!Ir(e[i],t[i]))return!1}return!0}function Rr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function zr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Br(e,t){var n=zr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=zr(n)}}function Vr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Rr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function Ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Wr=Tn&&`documentMode`in document&&11>=document.documentMode,Gr=null,Kr=null,qr=null,Jr=!1;function Yr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jr||Gr==null||Gr!==Rr(r)||(r=Gr,`selectionStart`in r&&Ur(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qr&&Lr(qr,r)||(qr=r,r=qf(Kr,`onSelect`),0<r.length&&(t=new In(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Gr)))}function Xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Zr={animationend:Xr(`Animation`,`AnimationEnd`),animationiteration:Xr(`Animation`,`AnimationIteration`),animationstart:Xr(`Animation`,`AnimationStart`),transitionrun:Xr(`Transition`,`TransitionRun`),transitionstart:Xr(`Transition`,`TransitionStart`),transitioncancel:Xr(`Transition`,`TransitionCancel`),transitionend:Xr(`Transition`,`TransitionEnd`)},Qr={},$r={};Tn&&($r=document.createElement(`div`).style,`AnimationEvent`in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),`TransitionEvent`in window||delete Zr.transitionend.transition);function ei(e){if(Qr[e])return Qr[e];if(!Zr[e])return e;var t=Zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $r)return Qr[e]=t[n];return e}var ti=ei(`animationend`),ni=ei(`animationiteration`),ri=ei(`animationstart`),ii=ei(`transitionrun`),ai=ei(`transitionstart`),oi=ei(`transitioncancel`),si=ei(`transitionend`),ci=new Map,li=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);li.push(`scrollEnd`);function ui(e,t){ci.set(e,t),Rt(t,[e])}var di=0;function fi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=vd.identifierPrefix;var n=di++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function pi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Ed;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function mi(e,t){return e=pi(e),t=pi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var hi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},gi=[],_i=0,vi=0;function yi(){for(var e=_i,t=vi=_i=0;t<e;){var n=gi[t];gi[t++]=null;var r=gi[t];gi[t++]=null;var i=gi[t];gi[t++]=null;var a=gi[t];if(gi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Ci(n,i,a)}}function bi(e,t,n,r){gi[_i++]=e,gi[_i++]=t,gi[_i++]=n,gi[_i++]=r,vi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function xi(e,t,n,r){return bi(e,t,n,r),wi(e)}function Si(e,t){return bi(e,null,null,t),wi(e)}function Ci(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Xe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function wi(e){if(50<Dd)throw Dd=0,Od=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ti={};function Ei(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Di(e,t,n,r){return new Ei(e,t,n,r)}function Oi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ki(e,t){var n=e.alternate;return n===null?(n=Di(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ai(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ji(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Oi(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,ve.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case se:return e=Di(31,n,t,a),e.elementType=se,e.lanes=o,e;case te:return Mi(n.children,a,o,t);case ne:s=8,a|=24;break;case A:return e=Di(12,n,t,a|2),e.elementType=A,e.lanes=o,e;case M:return e=Di(13,n,t,a),e.elementType=M,e.lanes=o,e;case N:return e=Di(19,n,t,a),e.elementType=N,e.lanes=o,e;case ce:case ue:return e=a|32,e=Di(30,n,t,e),e.elementType=ue,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case j:s=10;break a;case re:s=9;break a;case ie:s=11;break a;case ae:s=14;break a;case oe:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=Di(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Mi(e,t,n,r){return e=Di(7,e,r,t),e.lanes=n,e}function Ni(e,t,n){return e=Di(6,e,null,t),e.lanes=n,e}function Pi(e){var t=Di(18,null,null,0);return t.stateNode=e,t}function Fi(e,t,n){return t=Di(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ii=new WeakMap;function Li(e,t){if(typeof e==`object`&&e){var n=Ii.get(e);return n===void 0?(t={value:e,source:t,stack:Me(t)},Ii.set(e,t),t):n}return{value:e,source:t,stack:Me(t)}}var Ri=[],zi=0,Bi=null,Vi=0,Hi=[],Ui=0,Wi=null,Gi=1,Ki=``;function qi(e,t){Ri[zi++]=Vi,Ri[zi++]=Bi,Bi=e,Vi=t}function Ji(e,t,n){Hi[Ui++]=Gi,Hi[Ui++]=Ki,Hi[Ui++]=Wi,Wi=e;var r=Gi;e=Ki;var i=32-Xe(r)-1;r&=~(1<<i),n+=1;var a=32-Xe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Gi=1<<32-Xe(t)+i|n<<i|r,Ki=a+e}else Gi=1<<a|n<<i|r,Ki=e}function Yi(e){e.return!==null&&(qi(e,1),Ji(e,1,0))}function Xi(e){for(;e===Bi;)Bi=Ri[--zi],Ri[zi]=null,Vi=Ri[--zi],Ri[zi]=null;for(;e===Wi;)Wi=Hi[--Ui],Hi[Ui]=null,Ki=Hi[--Ui],Hi[Ui]=null,Gi=Hi[--Ui],Hi[Ui]=null}function Zi(e,t){Hi[Ui++]=Gi,Hi[Ui++]=Ki,Hi[Ui++]=Wi,Gi=t.id,Ki=t.overflow,Wi=e}var Qi=null,$i=null,G=!1,ea=null,ta=!1,na=Error(i(519));function ra(e){throw la(Li(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),na}function ia(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[bt]=e,t[xt]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<Rf.length;n++)$(Rf[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),nn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),sn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||$f(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=gn),t=!0):t=!1,t||ra(e,!0)}function aa(e){for(Qi=e.return;Qi;)switch(Qi.tag){case 5:case 31:case 13:ta=!1;return;case 27:case 3:ta=!0;return;default:Qi=Qi.return}}function oa(e){if(e!==Qi)return!1;if(!G)return aa(e),G=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&$i&&ra(e),aa(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));$i=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));$i=dm(e)}else t===27?(t=$i,Sp(e.type)?(e=um,um=null,$i=e):$i=t):$i=Qi?lm(e.stateNode.nextSibling):null;return!0}function sa(){$i=Qi=null,G=!1}function ca(){var e=ea;return e!==null&&(dd===null?dd=e:dd.push.apply(dd,e),ea=null),e}function la(e){ea===null?ea=[e]:ea.push(e)}var ua=_e(null),da=null,fa=null;function pa(e,t,n){B(ua,t._currentValue),t._currentValue=n}function ma(e){e._currentValue=ua.current,z(ua)}function ha(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ga(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ha(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ha(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ha(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function _a(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Ir(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===xe.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&ga(t,e,n,r),t.flags|=262144,e!==null}function va(e){for(e=e.firstContext;e!==null;){if(!Ir(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ya(e){da=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ba(e){return Sa(da,e)}function xa(e,t){return da===null&&ya(e),Sa(e,t)}function Sa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},fa===null){if(e===null)throw Error(i(308));fa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else fa=fa.next=t;return n}var Ca=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},wa=t.unstable_scheduleCallback,Ta=t.unstable_NormalPriority,Ea={$$typeof:j,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Da(){return{controller:new Ca,data:new Map,refCount:0}}function Oa(e){e.refCount--,e.refCount===0&&wa(Ta,function(){e.controller.abort()})}function ka(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Aa=null;function ja(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Ma=null,Na=0,Pa=0,Fa=null;function Ia(e,t){if(Ma===null){var n=Ma=[];Na=0,Pa=Nf(),Fa={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Na++,t.then(La,La),t}function La(){if(--Na===0&&(Aa=null,Ma!==null)){Fa!==null&&(Fa.status=`fulfilled`);var e=Ma;Ma=null,Pa=0,Fa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ra(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var za=L.S;L.S=function(e,t){if(md=Re(),typeof t==`object`&&t&&typeof t.then==`function`&&Ia(e,t),Aa!==null)for(var n=yf;n!==null;)ka(n,Aa),n=n.next;if(n=e.types,n!==null){for(var r=yf;r!==null;)ka(r,n),r=r.next;if(Pa!==0){r=Aa,r===null&&(r=Aa=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}za!==null&&za(e,t)};var Ba=_e(null);function Va(){var e=Ba.current;return e===null?Y.pooledCache:e}function Ha(e,t){t===null?B(Ba,Ba.current):B(Ba,t.pool)}function Ua(){var e=Va();return e===null?null:{parent:Ea._currentValue,pool:e}}var Wa=Error(i(460)),Ga=Error(i(474)),Ka=Error(i(542)),qa={then:function(){}};function Ja(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ya(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(gn,gn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,K(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(gn,gn);else{if(e=Y,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,K(e),e}throw Za=t,Wa}}function Xa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Za=e,Wa):e}}var Za=null;function Qa(){if(Za===null)throw Error(i(459));var e=Za;return Za=null,e}function K(e){if(e===Wa||e===Ka)throw Error(i(483))}var $a=null,eo=0;function to(e){var t=eo;return eo+=1,$a===null&&($a=[]),Ya($a,e,t)}function no(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function ro(e,t){throw t.$$typeof===D?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function io(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ki(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Ni(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===te?(e=d(e,t,n.props.children,r,n.key),no(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===oe&&Xa(i)===t.type)?(t=a(t,n.props),no(t,n),t.return=e,t):(t=ji(n.type,n.key,n.props,null,e.mode,r),no(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Fi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Mi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Ni(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case O:return n=ji(t.type,t.key,t.props,null,e.mode,n),no(n,t),n.return=e,n;case k:return t=Fi(t,e.mode,n),t.return=e,t;case oe:return t=Xa(t),f(e,t,n)}if(I(t)||P(t))return t=Mi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,to(t),n);if(t.$$typeof===j)return f(e,xa(e,t),n);ro(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case O:return n.key===i?l(e,t,n,r):null;case k:return n.key===i?u(e,t,n,r):null;case oe:return n=Xa(n),p(e,t,n,r)}if(I(n)||P(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,to(n),r);if(n.$$typeof===j)return p(e,t,xa(e,n),r);ro(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case O:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case k:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case oe:return r=Xa(r),m(e,t,n,r,i)}if(I(r)||P(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,to(r),i);if(r.$$typeof===j)return m(e,t,n,xa(t,r),i);ro(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),G&&qi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return G&&qi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),G&&qi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),G&&qi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return G&&qi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),G&&qi(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===te&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case O:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===te){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),no(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===oe&&Xa(l)===r.type){n(e,r.sibling),c=a(r,o.props),no(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===te?(c=Mi(o.props.children,e.mode,c,o.key),no(c,o),c.return=e,e=c):(c=ji(o.type,o.key,o.props,null,e.mode,c),no(c,o),c.return=e,e=c)}return s(e);case k:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Fi(o,e.mode,c),c.return=e,e=c}return s(e);case oe:return o=Xa(o),_(e,r,o,c)}if(I(o))return h(e,r,o,c);if(P(o)){if(l=P(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,to(o),c);if(o.$$typeof===j)return _(e,r,xa(e,o),c);ro(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Ni(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{eo=0;var i=_(e,t,n,r);return $a=null,i}catch(t){if(t===Wa||t===Ka)throw t;var a=Di(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var ao=io(!0),oo=io(!1),so=!1;function co(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function uo(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function fo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=wi(e),Ci(e,null,n),t}return bi(e,r,t,n),wi(e)}function po(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pt(e,n)}}function mo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ho=!1;function go(){if(ho){var e=Fa;if(e!==null)throw e}}function _o(e,t,n,r){ho=!1;var i=e.updateQueue;so=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Z&f)===f:(r&f)===f){f!==0&&f===Pa&&(ho=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=E({},d,f);break a;case 2:so=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),ad|=o,e.lanes=o,e.memoizedState=d}}function vo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function yo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)vo(n[e],t)}var bo=_e(null),xo=_e(0);function So(e,t){e=rd,B(xo,e),B(bo,t),rd=e|t.baseLanes}function Co(){B(xo,rd),B(bo,bo.current)}function wo(){rd=xo.current,z(bo),z(xo)}var To=_e(null),Eo=null;function Do(e){var t=e.alternate;B(Mo,Mo.current&1),B(To,e),Eo===null&&(t===null||bo.current!==null||t.memoizedState!==null)&&(Eo=e)}function Oo(e){B(Mo,Mo.current),B(To,e),Eo===null&&(Eo=e)}function ko(e){e.tag===22?(B(Mo,Mo.current),B(To,e),Eo===null&&(Eo=e)):Ao()}function Ao(){B(Mo,Mo.current),B(To,To.current)}function jo(e){z(To),Eo===e&&(Eo=null),z(Mo)}var Mo=_e(0);function No(e,t){B(To,To.current),B(Mo,t)}function Po(e){z(Mo),z(To),Eo===e&&(Eo=null)}function Fo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Io=0,q=null,Lo=null,Ro=null,zo=!1,Bo=!1,Vo=!1,Ho=0,Uo=0,Wo=null,Go=0;function Ko(){throw Error(i(321))}function qo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ir(e[n],t[n]))return!1;return!0}function Jo(e,t,n,r,i,a){return Io=a,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=e===null||e.memoizedState===null?dc:fc,Vo=!1,a=n(r,i),Vo=!1,Bo&&(a=Xo(t,n,r,i)),Yo(e),a}function Yo(e){L.H=uc;var t=Lo!==null&&Lo.next!==null;if(Io=0,Ro=Lo=q=null,zo=!1,Uo=0,Wo=null,t)throw Error(i(300));e===null||kc||(e=e.dependencies,e!==null&&va(e)&&(kc=!0))}function Xo(e,t,n,r){q=e;var a=0;do{if(Bo&&(Wo=null),Uo=0,Bo=!1,25<=a)throw Error(i(301));if(a+=1,Ro=Lo=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}L.H=pc,o=t(n,r)}while(Bo);return o}function Zo(){var e=L.H,t=e.useState()[0];return t=typeof t.then==`function`?is(t):t,e=e.useState()[0],(Lo===null?null:Lo.memoizedState)!==e&&(q.flags|=1024),t}function Qo(){var e=Ho!==0;return Ho=0,e}function $o(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function es(e){if(zo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}zo=!1}Io=0,Ro=Lo=q=null,Bo=!1,Uo=Ho=0,Wo=null}function ts(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ro===null?q.memoizedState=Ro=e:Ro=Ro.next=e,Ro}function ns(){if(Lo===null){var e=q.alternate;e=e===null?null:e.memoizedState}else e=Lo.next;var t=Ro===null?q.memoizedState:Ro.next;if(t!==null)Ro=t,Lo=e;else{if(e===null)throw q.alternate===null?Error(i(467)):Error(i(310));Lo=e,e={memoizedState:Lo.memoizedState,baseState:Lo.baseState,baseQueue:Lo.baseQueue,queue:Lo.queue,next:null},Ro===null?q.memoizedState=Ro=e:Ro=Ro.next=e}return Ro}function rs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function is(e){var t=Uo;return Uo+=1,Wo===null&&(Wo=[]),e=Ya(Wo,e,t),t=q,(Ro===null?t.memoizedState:Ro.next)===null&&(t=t.alternate,L.H=t===null||t.memoizedState===null?dc:fc),e}function as(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return is(e);if(e.$$typeof===de)return;if(e.$$typeof===j)return ba(e)}throw Error(i(438,String(e)))}function os(e){var t=null,n=q.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=q.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=rs(),q.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=le;return t.index++,n}function ss(e,t){return typeof t==`function`?t(e):t}function cs(e){return ls(ns(),Lo,e)}function ls(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Io&f)===f:(Z&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Pa&&(d=!0);else if((Io&p)===p){u=u.next,p===Pa&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,q.lanes|=p,ad|=p;f=u.action,Vo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,q.lanes|=f,ad|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Ir(o,e.memoizedState)&&(kc=!0,d&&(n=Fa,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function us(e){var t=ns(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ir(o,t.memoizedState)||(kc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ds(e,t,n){var r=q,a=ns(),o=G;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ir((Lo||a).memoizedState,n);if(s&&(a.memoizedState=n,kc=!0),a=a.queue,Is(ms.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Ro!==null&&!!(Ro.memoizedState.tag&1),js(e?9:8,{destroy:void 0},ps.bind(null,r,a,n,t),null),e){if(r.flags|=2048,Y===null)throw Error(i(349));o||Io&127||fs(r,t,n)}return n}function fs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t=rs(),q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ps(e,t,n,r){t.value=n,t.getSnapshot=r,hs(t)&&gs(e)}function ms(e,t,n){return n(function(){hs(t)&&gs(e)})}function hs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ir(e,n)}catch{return!0}}function gs(e){var t=Si(e,2);t!==null&&Md(t,e,2)}function _s(e){var t=ts();if(typeof e==`function`){var n=e;if(e=n(),Vo){Ye(!0);try{n()}finally{Ye(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:e},t}function vs(e,t,n,r){return e.baseState=n,ls(e,Lo,typeof r==`function`?r:ss)}function ys(e,t,n,r,a){if(sc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};L.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,bs(t,o)):(o.next=n.next,t.pending=n.next=o)}}function bs(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=L.T,o={};o.types=a===null?null:a.types,L.T=o;try{var s=n(i,r),c=L.S;c!==null&&c(o,s),xs(e,t,s)}catch(n){Cs(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),L.T=a}}else try{a=n(i,r),xs(e,t,a)}catch(n){Cs(e,t,n)}}function xs(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Ss(e,t,n)},function(n){return Cs(e,t,n)}):Ss(e,t,n)}function Ss(e,t,n){t.status=`fulfilled`,t.value=n,ws(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,bs(e,n)))}function Cs(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ws(t),t=t.next;while(t!==r)}e.action=null}function ws(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ts(e,t){return t}function Es(e,t){if(G){var n=Y.formState;if(n!==null){a:{var r=q;if(G){if($i){b:{for(var i=$i,a=ta;i.nodeType!==8;)if(!a||(i=lm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){$i=lm(i.nextSibling),r=i.data===`F!`;break a}}ra(r)}r=!1}r&&(t=n[0])}}return n=ts(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ts,lastRenderedState:t},n.queue=r,n=ic.bind(null,q,r),r.dispatch=n,r=_s(!1),a=oc.bind(null,q,!1,r.queue),r=ts(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=ys.bind(null,q,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ds(e){return Os(ns(),Lo,e)}function Os(e,t,n){if(t=ls(e,t,Ts)[0],e=cs(ss)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=is(t)}catch(e){throw e===Wa?Ka:e}else r=t;t=ns();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(q.flags|=2048,js(9,{destroy:void 0},ks.bind(null,i,n),null)),[r,a,e]}function ks(e,t){e.action=t}function As(e){var t=ns(),n=Lo;if(n!==null)return Os(t,n,e);ns(),t=t.memoizedState,n=ns();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function js(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=q.updateQueue,t===null&&(t=rs(),q.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ms(){return ns().memoizedState}function Ns(e,t,n,r){var i=ts();q.flags|=e,i.memoizedState=js(1|t,{destroy:void 0},n,r===void 0?null:r)}function Ps(e,t,n,r){var i=ns();r=r===void 0?null:r;var a=i.memoizedState.inst;Lo!==null&&r!==null&&qo(r,Lo.memoizedState.deps)?i.memoizedState=js(t,a,n,r):(q.flags|=e,i.memoizedState=js(1|t,a,n,r))}function Fs(e,t){Ns(8390656,8,e,t)}function Is(e,t){Ps(2048,8,e,t)}function Ls(e){q.flags|=4;var t=q.updateQueue;if(t===null)t=rs(),q.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Rs(e){var t=ns().memoizedState;return Ls({ref:t,nextImpl:e}),function(){if(J&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function zs(e,t){return Ps(4,2,e,t)}function Bs(e,t){return Ps(4,4,e,t)}function Vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hs(e,t,n){n=n==null?null:n.concat([e]),Ps(4,4,Vs.bind(null,t,e),n)}function Us(){}function Ws(e,t){var n=ns();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&qo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Gs(e,t){var n=ns();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&qo(t,r[1]))return r[0];if(r=e(),Vo){Ye(!0);try{e()}finally{Ye(!1)}}return n.memoizedState=[r,t],r}function Ks(e,t,n){return n===void 0||Io&1073741824&&!(Z&261930)?e.memoizedState=t:(e.memoizedState=n,e=Ad(),q.lanes|=e,ad|=e,n)}function qs(e,t,n,r){return Ir(n,t)?n:bo.current===null?!(Io&106)||Io&1073741824&&!(Z&261930)?(kc=!0,e.memoizedState=n):(e=Ad(),q.lanes|=e,ad|=e,t):(e=Ks(e,n,r),Ir(e,t)||(kc=!0),e)}function Js(e,t,n,r,i){var a=R.p;R.p=a!==0&&8>a?a:8;var o=L.T,s={};s.types=o===null?null:o.types,L.T=s,oc(e,!1,t,n);try{var c=i(),l=L.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?ac(e,t,Ra(c,r),kd(e)):ac(e,t,r,kd(e))}catch(n){ac(e,t,{then:function(){},status:`rejected`,reason:n},kd())}finally{R.p=a,o!==null&&s.types!==null&&(o.types=s.types),L.T=o}}function Ys(){}function Xs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Zs(e).queue;Js(e,a,t,me,n===null?Ys:function(){return Qs(e),n(r)})}function Zs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:me},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Qs(e){var t=Zs(e);t.next===null&&(t=e.alternate.memoizedState),ac(e,t.next.queue,{},kd())}function $s(){return ba(sh)}function ec(){return ns().memoizedState}function tc(){return ns().memoizedState}function nc(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=kd();e=uo(n);var r=fo(t,e,n);r!==null&&(Md(r,t,n),po(r,t,n)),t={cache:Da()},e.payload=t;return}t=t.return}}function rc(e,t,n){var r=kd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},sc(e)?cc(t,n):(n=xi(e,t,n,r),n!==null&&(Md(n,e,r),lc(n,t,r)))}function ic(e,t,n){ac(e,t,n,kd())}function ac(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(sc(e))cc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ir(s,o))return bi(e,t,i,0),Y===null&&yi(),!1}catch{}if(n=xi(e,t,i,r),n!==null)return Md(n,e,r),lc(n,t,r),!0}return!1}function oc(e,t,n,r){if(r={lane:2,revertLane:Nf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},sc(e)){if(t)throw Error(i(479))}else t=xi(e,n,r,2),t!==null&&Md(t,e,2)}function sc(e){var t=e.alternate;return e===q||t!==null&&t===q}function cc(e,t){Bo=zo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pt(e,n)}}var uc={readContext:ba,use:as,useCallback:Ko,useContext:Ko,useEffect:Ko,useImperativeHandle:Ko,useLayoutEffect:Ko,useInsertionEffect:Ko,useMemo:Ko,useReducer:Ko,useRef:Ko,useState:Ko,useDebugValue:Ko,useDeferredValue:Ko,useTransition:Ko,useSyncExternalStore:Ko,useId:Ko,useHostTransitionStatus:Ko,useFormState:Ko,useActionState:Ko,useOptimistic:Ko,useMemoCache:Ko,useCacheRefresh:Ko,useEffectEvent:Ko},dc={readContext:ba,use:as,useCallback:function(e,t){return ts().memoizedState=[e,t===void 0?null:t],e},useContext:ba,useEffect:Fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Ns(4194308,4,Vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ns(4194308,4,e,t)},useInsertionEffect:function(e,t){Ns(4,2,e,t)},useMemo:function(e,t){var n=ts();t=t===void 0?null:t;var r=e();if(Vo){Ye(!0);try{e()}finally{Ye(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=ts();if(n!==void 0){var i=n(t);if(Vo){Ye(!0);try{n(t)}finally{Ye(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=rc.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=ts();return e={current:e},t.memoizedState=e},useState:function(e){e=_s(e);var t=e.queue,n=ic.bind(null,q,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Us,useDeferredValue:function(e,t){return Ks(ts(),e,t)},useTransition:function(){var e=_s(!1);return e=Js.bind(null,q,e.queue,!0,!1),ts().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=q,a=ts();if(G){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Y===null)throw Error(i(349));Z&127||fs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Fs(ms.bind(null,r,o,e),[e]),r.flags|=2048,js(9,{destroy:void 0},ps.bind(null,r,o,n,t),null),n},useId:function(){var e=ts(),t=Y.identifierPrefix;if(G){var n=Ki,r=Gi;n=(r&~(1<<32-Xe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Ho++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Go++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:$s,useFormState:Es,useActionState:Es,useOptimistic:function(e){var t=ts();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=oc.bind(null,q,!0,n),n.dispatch=t,[e,t]},useMemoCache:os,useCacheRefresh:function(){return ts().memoizedState=nc.bind(null,q)},useEffectEvent:function(e){var t=ts(),n={impl:e};return t.memoizedState=n,function(){if(J&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},fc={readContext:ba,use:as,useCallback:Ws,useContext:ba,useEffect:Is,useImperativeHandle:Hs,useInsertionEffect:zs,useLayoutEffect:Bs,useMemo:Gs,useReducer:cs,useRef:Ms,useState:function(){return cs(ss)},useDebugValue:Us,useDeferredValue:function(e,t){return qs(ns(),Lo.memoizedState,e,t)},useTransition:function(){var e=cs(ss)[0],t=ns().memoizedState;return[typeof e==`boolean`?e:is(e),t]},useSyncExternalStore:ds,useId:ec,useHostTransitionStatus:$s,useFormState:Ds,useActionState:Ds,useOptimistic:function(e,t){return vs(ns(),Lo,e,t)},useMemoCache:os,useCacheRefresh:tc,useEffectEvent:Rs},pc={readContext:ba,use:as,useCallback:Ws,useContext:ba,useEffect:Is,useImperativeHandle:Hs,useInsertionEffect:zs,useLayoutEffect:Bs,useMemo:Gs,useReducer:us,useRef:Ms,useState:function(){return us(ss)},useDebugValue:Us,useDeferredValue:function(e,t){var n=ns();return Lo===null?Ks(n,e,t):qs(n,Lo.memoizedState,e,t)},useTransition:function(){var e=us(ss)[0],t=ns().memoizedState;return[typeof e==`boolean`?e:is(e),t]},useSyncExternalStore:ds,useId:ec,useHostTransitionStatus:$s,useFormState:As,useActionState:As,useOptimistic:function(e,t){var n=ns();return Lo===null?(n.baseState=e,[e,n.queue.dispatch]):vs(n,Lo,e,t)},useMemoCache:os,useCacheRefresh:tc,useEffectEvent:Rs};function mc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=kd(),i=uo(r);i.payload=t,n!=null&&(i.callback=n),t=fo(e,i,r),t!==null&&(Md(t,e,r),po(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=kd(),i=uo(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=fo(e,i,r),t!==null&&(Md(t,e,r),po(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kd(),r=uo(n);r.tag=2,t!=null&&(r.callback=t),t=fo(e,r,n),t!==null&&(Md(t,e,n),po(t,e,n))}};function gc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Lr(n,r)||!Lr(i,a):!0}function _c(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hc.enqueueReplaceState(t,t.state,null)}function vc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=E({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function yc(e){hi(e)}function bc(e){console.error(e)}function xc(e){hi(e)}function Sc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Cc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function wc(e,t,n){return n=uo(n),n.tag=3,n.payload={element:null},n.callback=function(){Sc(e,t)},n}function Tc(e){return e=uo(e),e.tag=3,e}function Ec(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Cc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Cc(t,n,r),typeof i!=`function`&&(_d===null?_d=new Set([this]):_d.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Dc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&_a(t,n,a,!0),n=To.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Eo===null?Wd():n.alternate===null&&id===0&&(id=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===qa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),pf(e,r,a)),!1;case 22:return n.flags|=65536,r===qa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),pf(e,r,a)),!1}throw Error(i(435,n.tag))}return pf(e,r,a),Wd(),!1}if(G)return t=To.current,t===null?(r!==na&&(t=Error(i(423),{cause:r}),la(Li(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Li(r,n),a=wc(e.stateNode,r,a),mo(e,a),id!==4&&(id=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==na&&(e=Error(i(422),{cause:r}),la(Li(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Li(o,n),ud===null?ud=[o]:ud.push(o),id!==4&&(id=2),t===null)return!0;r=Li(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=wc(n.stateNode,r,e),mo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(_d===null||!_d.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Tc(a),Ec(a,e,n,r),mo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Oc=Error(i(461)),kc=!1;function Ac(e,t,n,r){t.child=e===null?oo(t,null,n,r):ao(t,e.child,n,r)}function jc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ya(t),r=Jo(e,t,n,o,a,i),s=Qo(),e!==null&&!kc?($o(e,t,i),al(e,t,i)):(G&&s&&Yi(t),t.flags|=1,Ac(e,t,r,i),t.child)}function Mc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Oi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Nc(e,t,a,r,i)):(e=ji(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!ol(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Lr:n,n(o,r)&&e.ref===t.ref)return al(e,t,i)}return t.flags|=1,e=ki(a,r),e.ref=t.ref,e.return=t,t.child=e}function Nc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Lr(a,r)&&e.ref===t.ref){if(kc=!1,t.pendingProps=r=a,ol(e,i))e.flags&131072&&(kc=!0);else return t.lanes=e.lanes,al(e,t,i)}}return Vc(e,t,n,r,i)}function Pc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Ic(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ha(t,a===null?null:a.cachePool),a===null?Co():So(t,a),ko(t);else return r=t.lanes=536870912,Ic(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ha(t,null),Co(),Ao()):(Ha(t,a.cachePool),So(t,a),Ao(),t.memoizedState=null);return Ac(e,t,i,n),t.child}function Fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ic(e,t,n,r,i){var a=Va();return a=a===null?null:{parent:Ea._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ha(t,null),Co(),ko(t),e!==null&&_a(e,t,r,!0),t.childLanes=i,null}function Lc(e,t){return t=Xc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Rc(e,t,n){return ao(t,e.child,null,n),e=Lc(t,t.pendingProps),e.flags|=2,jo(t),t.memoizedState=null,e}function zc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(G){if(r.mode===`hidden`)return e=Lc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Fc(null,e);if(Oo(t),(e=$i)?(e=am(e,ta),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Wi===null?null:{id:Gi,overflow:Ki},retryLane:536870912,hydrationErrors:null},n=Pi(e),n.return=t,t.child=n,Qi=t,$i=null)):e=null,e===null)throw ra(t);return t.lanes=536870912,null}return Lc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Oo(t),a){if(t.flags&256)t.flags&=-257,t=Rc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(kc||_a(e,t,n,!1),a=(n&e.childLanes)!==0,kc||a){if(bo.current===null){if(r=Y,r!==null&&(s=mt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Si(e,s),Md(r,e,s),Oc;Wd()}t=Rc(e,t,n)}else e=o.treeContext,$i=lm(s.nextSibling),Qi=t,G=!0,ea=null,ta=!1,e!==null&&Zi(t,e),t=Lc(t,r),t.flags|=134221824;return t}return e=ki(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Bc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Vc(e,t,n,r,i){return ya(t),n=Jo(e,t,n,r,void 0,i),r=Qo(),e!==null&&!kc?($o(e,t,i),al(e,t,i)):(G&&r&&Yi(t),t.flags|=1,Ac(e,t,n,i),t.child)}function Hc(e,t,n,r,i,a){return ya(t),t.updateQueue=null,n=Xo(t,r,n,i),Yo(e),r=Qo(),e!==null&&!kc?($o(e,t,a),al(e,t,a)):(G&&r&&Yi(t),t.flags|=1,Ac(e,t,n,a),t.child)}function Uc(e,t,n,r,i){if(ya(t),t.stateNode===null){var a=Ti,o=n.contextType;typeof o==`object`&&o&&(a=ba(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=hc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},co(t),o=n.contextType,a.context=typeof o==`object`&&o?ba(o):Ti,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(mc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&hc.enqueueReplaceState(a,a.state,null),_o(t,r,a,i),go(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=vc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Ti,typeof u==`object`&&u&&(o=ba(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&_c(t,a,r,o),so=!1;var f=t.memoizedState;a.state=f,_o(t,r,a,i),go(),l=t.memoizedState,s||f!==l||so?(typeof d==`function`&&(mc(t,n,d,r),l=t.memoizedState),(c=so||gc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,lo(e,t),o=t.memoizedProps,u=vc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Ti,typeof l==`object`&&l&&(c=ba(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&_c(t,a,r,c),so=!1,f=t.memoizedState,a.state=f,_o(t,r,a,i),go();var p=t.memoizedState;o!==d||f!==p||so||e!==null&&e.dependencies!==null&&va(e.dependencies)?(typeof s==`function`&&(mc(t,n,s,r),p=t.memoizedState),(u=so||gc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&va(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Bc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=ao(t,e.child,null,i),t.child=ao(t,null,n,i)):Ac(e,t,n,i),t.memoizedState=a.state,e=t.child):e=al(e,t,i),e}function Wc(e,t,n,r){return sa(),t.flags|=256,Ac(e,t,n,r),t.child}var Gc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Kc(e){return{baseLanes:e,cachePool:Ua()}}function qc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=cd),e}function Jc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Mo.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(G){if(i?Do(t):Ao(),(e=$i)?(e=am(e,ta),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Wi===null?null:{id:Gi,overflow:Ki},retryLane:536870912,hydrationErrors:null},n=Pi(e),n.return=t,t.child=n,Qi=t,$i=null)):e=null,e===null)throw ra(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Ao(),i=t.mode,a=Xc({mode:`hidden`,children:a},i),r=Mi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Kc(n),r.childLanes=qc(e,o,n),t.memoizedState=Gc,Fc(null,r)):(Do(t),Yc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return Qc(e,t,a,o,r,c,s,n)}return i?(Ao(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=ki(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Mi(i,a,n,null),i.flags|=2):i=ki(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Fc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Kc(n):(a=i.cachePool,a===null?a=Ua():(s=Ea._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=qc(e,o,n),t.memoizedState=Gc,Fc(e.child,r)):(Do(t),n=e.child,e=n.sibling,n=ki(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Yc(e,t){return t=Xc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Xc(e,t){return e=Di(22,e,null,t),e.lanes=0,e}function Zc(e,t,n){return ao(t,e.child,null,n),e=Yc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qc(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(Do(t),t.flags&=-257,Zc(e,t,c)):t.memoizedState===null?(Ao(),o=a.fallback,s=t.mode,a=Xc({mode:`visible`,children:a.children},s),o=Mi(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,ao(t,e.child,null,c),a=t.child,a.memoizedState=Kc(c),a.childLanes=qc(e,r,c),t.memoizedState=Gc,Fc(null,a)):(Ao(),t.child=e.child,t.flags|=128,null);if(Do(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,la({value:a,source:null,stack:null})),Zc(e,t,c)}if(kc||_a(e,t,c,!1),r=(c&e.childLanes)!==0,kc||r){if(bo.current!==null)return Zc(e,t,c);if(r=Y,r!==null&&(a=mt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,Si(e,a),Md(r,e,a),Oc;return om(o)||Wd(),Zc(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,$i=lm(o.nextSibling),Qi=t,G=!0,ea=null,ta=!1,e!==null&&Zi(t,e),t=Yc(t,a.children),t.flags|=134221824,t)}function $c(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ha(e.return,t,n)}function el(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Fo(n)===null&&(t=e),e=e.sibling}return t}function tl(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function nl(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function rl(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Mo.current;if(t.flags&128)return No(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,No(t,o),i===`backwards`&&e!==null?(nl(e),Ac(e,t,r,n),nl(e)):Ac(e,t,r,n),r=G?Vi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$c(e,n,t);else if(e.tag===19)$c(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=el(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,nl(t)),tl(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Fo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}tl(t,!0,n,null,a,r);break;case`together`:tl(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=el(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),tl(t,!1,i,n,a,r)}return t.child}function il(e,t,n){var r=t.pendingProps;return pa(t,t.type,r.value),Ac(e,t,r.children,n),t.child}function al(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ad|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(_a(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ki(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ki(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ol(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&va(e)))}function sl(e,t,n){switch(t.tag){case 3:Se(t,t.stateNode.containerInfo),pa(t,Ea,e.memoizedState.cache),sa();break;case 27:case 5:we(t);break;case 4:Se(t,t.stateNode.containerInfo);break;case 10:pa(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Oo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return Do(t),t.flags|=128,null;r=_a(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Jc(e,t,n):(Do(t),e=al(e,t,n),e===null?null:e.sibling)}Do(t);break;case 19:if(t.flags&128)return rl(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(_a(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return rl(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),No(t,Mo.current),r)break;return null;case 22:return t.lanes=0,Pc(e,t,n,t.pendingProps);case 24:pa(t,Ea,e.memoizedState.cache)}return al(e,t,n)}function cl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)kc=!0;else{if(!ol(e,n)&&!(t.flags&128))return kc=!1,sl(e,t,n);kc=!!(e.flags&131072)}}else kc=!1,G&&t.flags&1048576&&Ji(t,Vi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Xa(t.elementType),t.type=e,typeof e==`function`)Oi(e)?(r=vc(e,r),t.tag=1,t=Uc(null,t,e,r,n)):(t.tag=0,t=Vc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===ie){t.tag=11,t=jc(null,t,e,r,n);break a}if(a===ae){t.tag=14,t=Mc(null,t,e,r,n);break a}if(a===j){t.tag=10,t.type=e,t=il(null,t,n);break a}}throw t=pe(e)||e,Error(i(306,t,``))}}return t;case 0:return Vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=vc(r,t.pendingProps),Uc(e,t,r,a,n);case 3:a:{if(Se(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,lo(e,t),_o(t,r,null,n);var s=t.memoizedState;if(r=s.cache,pa(t,Ea,r),r!==o.cache&&ga(t,[Ea],n,!0),go(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Wc(e,t,r,n);break a}if(r!==a){a=Li(Error(i(424)),t),la(a),t=Wc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for($i=lm(e.firstChild),Qi=t,G=!0,ea=null,ta=!0,n=oo(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(sa(),r===a){t=al(e,t,n);break a}Ac(e,t,r,n)}t=t.child}return t;case 26:return Bc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:G||(t.stateNode=fp(t.type,t.pendingProps,be.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return we(t),e===null&&G&&(r=t.stateNode=hm(t.type,t.pendingProps,be.current),Qi=t,ta=!0,a=$i,Sp(t.type)?(um=a,$i=lm(r.firstChild)):$i=a),Ac(e,t,t.pendingProps.children,n),Bc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&G&&((a=r=$i)&&(r=rm(r,t.type,t.pendingProps,ta),r===null?a=!1:(t.stateNode=r,Qi=t,$i=lm(r.firstChild),ta=!1,a=!0)),a||ra(t)),we(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Jo(e,t,Zo,null,null,n),sh._currentValue=a),Bc(e,t),Ac(e,t,r,n),t.child;case 6:return e===null&&G&&((e=n=$i)&&(n=im(n,t.pendingProps,ta),n===null?e=!1:(t.stateNode=n,Qi=t,$i=null,e=!0)),e||ra(t)),null;case 13:return Jc(e,t,n);case 4:return Se(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ao(t,null,r,n):Ac(e,t,r,n),t.child;case 11:return jc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Bc(e,t),Ac(e,t,r,n),t.child;case 8:return Ac(e,t,t.pendingProps.children,n),t.child;case 12:return Ac(e,t,t.pendingProps.children,n),t.child;case 10:return il(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,ya(t),a=ba(a),r=r(a),t.flags|=1,Ac(e,t,r,n),t.child;case 14:return Mc(e,t,t.type,t.pendingProps,n);case 15:return Nc(e,t,t.type,t.pendingProps,n);case 19:return rl(e,t,n);case 31:return zc(e,t,n);case 22:return Pc(e,t,n,t.pendingProps);case 24:return ya(t),r=ba(Ea),e===null?(a=Va(),a===null&&(a=Y,o=Da(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},co(t),pa(t,Ea,a)):((e.lanes&n)!==0&&(lo(e,t),_o(t,null,null,n),go()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,pa(t,Ea,r),r!==a.cache&&ga(t,[Ea],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),pa(t,Ea,r))),Ac(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:G&&Yi(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Bc(e,t),Ac(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function ll(e){e.flags|=4}function ul(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Vd())e.flags|=8192;else throw Za=qa,Ga}}else e.flags&=-16777217}function dl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Vd())e.flags|=8192;else throw Za=qa,Ga}}function fl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:ct(),e.lanes|=t,ld|=t)}function pl(e,t){if(!G)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function ml(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hl(e,t,n){var r=t.pendingProps;switch(Xi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ml(t),null;case 1:return ml(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ma(Ea),Ce(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(oa(t)?ll(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ca())),ml(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(ll(t),o===null?(ml(t),ul(t,a,null,r,n)):(ml(t),dl(t,o))):o?o===e.memoizedState?(ml(t),t.flags&=-16777217):(ll(t),ml(t),dl(t,o)):(e=e.memoizedProps,e!==r&&ll(t),ml(t),ul(t,a,e,r,n)),null;case 27:if(Te(t),n=be.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ll(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return ml(t),t.subtreeFlags&=-33554433,null}e=ve.current,oa(t)?ia(t,e):(e=hm(a,r,n),t.stateNode=e,ll(t))}return ml(t),t.subtreeFlags&=-33554433,null;case 5:if(Te(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ll(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return ml(t),t.subtreeFlags&=-33554433,null}if(o=ve.current,oa(t))ia(t,o);else{var s=lp(be.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[bt]=t,o[xt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&ll(t)}}return ml(t),t.subtreeFlags&=-33554433,ul(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&ll(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=be.current,oa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Qi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[bt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||$f(e.nodeValue,n)),e||ra(t,!0)}else e=lp(e).createTextNode(r),e[bt]=t,t.stateNode=e}return ml(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=oa(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[bt]=t}else sa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ml(t),e=!1}else n=ca(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(jo(t),t):(jo(t),null);if(t.flags&128)throw Error(i(558))}return ml(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=oa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[bt]=t}else sa(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ml(t),a=!1}else a=ca(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(jo(t),t):(jo(t),null)}return jo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),fl(t,t.updateQueue),ml(t),null);case 4:return Ce(),e===null&&Uf(t.stateNode.containerInfo),t.flags|=67108864,ml(t),null;case 10:return ma(t.type),ml(t),null;case 19:if(Po(t),r=t.memoizedState,r===null)return ml(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)pl(r,!1);else{if(id!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Fo(e),o!==null){for(t.flags|=128,pl(r,!1),e=o.updateQueue,t.updateQueue=e,fl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ai(n,e),n=n.sibling;return No(t,Mo.current&1|2),G&&qi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Re()>hd&&(t.flags|=128,a=!0,pl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Fo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,fl(t,e),pl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!G)return ml(t),null}else 2*Re()-r.renderingStartTime>hd&&n!==536870912&&(t.flags|=128,a=!0,pl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Re(),e.sibling=null,o=Mo.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||G?No(t,o):(n=o,B(To,t),B(Mo,n),Eo===null&&(Eo=t)),G&&qi(t,r.treeForkCount),e}return ml(t),null;case 22:case 23:return jo(t),wo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(ml(t),t.subtreeFlags&6&&(t.flags|=8192)):ml(t),n=t.updateQueue,n!==null&&fl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&z(Ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ma(Ea),ml(t),null;case 25:return null;case 30:return t.flags|=33554432,ml(t),null}throw Error(i(156,t.tag))}function gl(e,t){switch(Xi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ma(Ea),Ce(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Te(t),null;case 31:if(t.memoizedState!==null){if(jo(t),t.alternate===null)throw Error(i(340));sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(jo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));sa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Po(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Ce(),null;case 10:return ma(t.type),null;case 22:case 23:return jo(t),wo(),e!==null&&z(Ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ma(Ea),null;case 25:return null;default:return null}}function _l(e,t){switch(Xi(t),t.tag){case 3:ma(Ea),Ce();break;case 26:case 27:case 5:Te(t);break;case 4:Ce();break;case 31:t.memoizedState!==null&&jo(t);break;case 13:jo(t);break;case 19:Po(t);break;case 10:ma(t.type);break;case 22:case 23:jo(t),wo(),e!==null&&z(Ba);break;case 24:ma(Ea)}}function vl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){ff(t,t.return,e)}}function yl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){ff(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){ff(t,t.return,e)}}function bl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{yo(t,n)}catch(t){ff(e,e.return,t)}}}function xl(e,t,n){n.props=vc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){ff(e,t,n)}}function Sl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=fi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){ff(e,t,n)}}function Cl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){ff(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){ff(e,t,n)}else n.current=null}}function wl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function Tl(e){for(var t=e.return;t!==null&&(Ol(t)&&em(e.stateNode,t.stateNode),!Dl(t));)t=t.return}function El(e){for(var t=e.return;t!==null&&(Ol(t)&&tm(e.stateNode,t.stateNode),!Dl(t));)t=t.return}function Dl(e){return e.tag===5||e.tag===3||e.tag===27}function Ol(e){return e&&e.tag===7&&e.stateNode!==null}function kl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){ff(e,e.return,t)}}function Al(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[xt]=t}catch(t){ff(e,e.return,t)}}function jl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Ml(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||jl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gn)),wl(e,r),V=!0;else if(i!==4&&(i===27&&(wl(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Nl(e,t,n,r),e=e.sibling;e!==null;)Nl(e,t,n,r),e=e.sibling}function Pl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),wl(e,r),V=!0;else if(i!==4&&(i===27&&(wl(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Pl(e,t,n,r),e=e.sibling;e!==null;)Pl(e,t,n,r),e=e.sibling}function Fl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[bt]=e,t[xt]=n}catch(t){ff(e,e.return,t)}}var Il=!1,Ll=null;function Rl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Il=!0)}var zl=null;function Bl(){var e=zl;return zl=null,e}var Vl=0;function Hl(e,t,n,r,i){return Vl=0,Ul(e.child,t,n,r,i)}function Ul(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Il=!0,Tp(o,Vl===0?t:t+`_`+Vl,n),Vl++}else e.tag===22&&e.memoizedState!==null||e.tag===30&&i||Ul(e.child,t,n,r,i)&&(a=!0);e=e.sibling}return a}function Wl(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):e.tag===22&&e.memoizedState!==null||e.tag===30&&t||Wl(e.child,t),e=e.sibling}function Gl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Gl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=mi(t.default,t.share),t!==`none`&&(Hl(e,n,t,null,!1)||Wl(e.child,!1))}e=e.sibling}}function Kl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=fi(r,n),a=mi(r.default,n.paired?r.share:r.enter);a===`none`?Gl(e):Hl(e,i,a,null,!1)?(Gl(e),n.paired||t||jd(e,r.onEnter)):Wl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Kl(e,t),e=e.sibling;else Gl(e)}function ql(e){if(Ll!==null&&Ll.size!==0){var t=Ll;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=mi(n.default,n.share);if(a!==`none`&&(Hl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,jd(e,n.onShare)):Wl(e.child,!1)),t.delete(r),t.size===0)break}}}ql(e)}e=e.sibling}}}function Jl(e){if(e.tag===30){var t=e.memoizedProps,n=fi(t,e.stateNode),r=Ll===null?void 0:Ll.get(n),i=mi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Hl(e,n,i,null,!1)?r===void 0?jd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Ll.delete(n),jd(e,t.onShare)):Wl(e.child,!1)),Ll!==null&&ql(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Jl(e),e=e.sibling;else Ll!==null&&ql(e)}function Yl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=fi(t,e.stateNode);t=mi(t.default,t.update),e.flags&=-5,t!==`none`&&Hl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Yl(e);e=e.sibling}}function Xl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Wl(e.child,!1))}Xl(e)}e=e.sibling}}function Zl(e){if(e.tag===30)e.stateNode.paired=null,Wl(e.child,!1),Xl(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Zl(e),e=e.sibling;else Xl(e)}function Ql(e){for(e=e.child;e!==null;)e.tag===30?Wl(e.child,!1):e.subtreeFlags&33554432&&Ql(e),e=e.sibling}function $l(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Vl<a.length){var l=a[Vl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Vl===0?n:n+`_`+Vl,i),s&&e.flags&4||(zl===null&&(zl=[]),zl.push(c,Vl===0?r:r+`_`+Vl,t.memoizedProps)),Vl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:$l(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function eu(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=fi(n,r),a=mi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Vl=0,i=$l(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||jd(e,n.onUpdate))}else e.subtreeFlags&33554432&&eu(e,t);e=e.sibling}}var tu=!1,nu=!1,ru=!1,iu=!1,au=typeof WeakSet==`function`?WeakSet:Set,ou=null,su=!1,cu=!1,lu=!1,uu=!1;function du(e,t,n){if(e=e.containerInfo,sp=gh,e=Hr(e),Ur(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,ou=t,t=n?9270:1024;ou!==null;){if(e=ou,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Jl(r[a]);if(e.alternate===null&&e.flags&2)n&&Rl(e),fu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Jl(r),fu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Rl(e),fu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,ou=r):(n&&Yl(e),fu(n))}}Ll=null}function fu(e){for(;ou!==null;){var t=ou,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=vc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){ff(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=fi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=mi(a.default,a.update),a!==`none`&&Hl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,ou=r;break}ou=t.return}}function pu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Nu(e,n),r&4&&vl(5,n);break;case 1:if(Nu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){ff(n,n.return,e)}else{var i=vc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){ff(n,n.return,e)}}}r&64&&bl(n),r&512&&Sl(n,n.return);break;case 3:if(Nu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{yo(e,t)}catch(e){ff(n,n.return,e)}}break;case 27:t===null&&r&4&&Fl(n);case 26:case 5:Nu(e,n),t===null&&r&4&&kl(n),r&512&&Sl(n,n.return);break;case 12:Nu(e,n);break;case 31:Nu(e,n),r&4&&Su(e,n);break;case 13:Nu(e,n),r&4&&Cu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=gf.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||tu,!r){var a=t!==null&&t.memoizedState!==null||nu;t=tu,i=nu,tu=r,(nu=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Fu(e,n,r)):Nu(e,n),tu=t,nu=i}break;case 30:Nu(e,n),r&512&&Sl(n,n.return);break;case 7:r&512&&Sl(n,n.return);default:Nu(e,n)}}function mu(e,t){for(e=e.child;e!==null;)hu(e,t),e=e.sibling}function hu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){ff(e,e.return,t)}gu(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,V=!0}catch(t){ff(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){ff(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&mu(e,t);break;default:mu(e,t)}}function gu(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:hu(n,r);break a;case 22:n.memoizedState===null&&gu(n,r);break a;default:gu(n,r)}}e=e.sibling}}function _u(e){var t=e.alternate;t!==null&&(e.alternate=null,_u(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&kt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var vu=null,yu=!1;function bu(e,t,n){for(n=n.child;n!==null;)xu(e,t,n),n=n.sibling}function xu(e,t,n){if(Je&&typeof Je.onCommitFiberUnmount==`function`)try{Je.onCommitFiberUnmount(qe,n)}catch{}switch(n.tag){case 26:nu||Cl(n,t),bu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!nu&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:nu||Cl(n,t),El(n);var r=vu,i=yu;Sp(n.type)&&(vu=n.stateNode,yu=!1),bu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),vu=r,yu=i;break;case 5:nu||Cl(n,t),El(n);case 6:if(n.tag===6&&El(n),r=vu,i=yu,vu=null,bu(e,t,n),vu=r,yu=i,vu!==null){if(yu)try{(vu.nodeType===9?vu.body:vu.nodeName===`HTML`?vu.ownerDocument.body:vu).removeChild(n.stateNode),V=!0}catch(e){ff(n,t,e)}else try{vu.removeChild(n.stateNode),V=!0}catch(e){ff(n,t,e)}}break;case 18:vu!==null&&(yu?(e=vu,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(vu,n.stateNode));break;case 4:r=vu,i=yu,vu=n.stateNode.containerInfo,yu=!0,bu(e,t,n),vu=r,yu=i;break;case 0:case 11:case 14:case 15:yl(2,n,t),nu||yl(4,n,t),bu(e,t,n);break;case 1:nu||(Cl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&xl(n,t,r)),bu(e,t,n);break;case 21:bu(e,t,n);break;case 22:nu=(r=nu)||n.memoizedState!==null,bu(e,t,n),nu=r;break;case 30:Cl(n,t),bu(e,t,n);break;case 7:nu||Cl(n,t),bu(e,t,n);break;default:bu(e,t,n)}}function Su(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){ff(t,t.return,e)}}}function Cu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){ff(t,t.return,e)}}function wu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new au),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new au),t;default:throw Error(i(435,e.tag))}}function Tu(e,t){var n=wu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=_f.bind(null,e,t);t.then(r,r)}})}function Eu(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){vu=l.stateNode,yu=!1;break a}break;case 5:vu=l.stateNode,yu=!1;break a;case 3:case 4:vu=l.stateNode.containerInfo,yu=!0;break a}l=l.return}if(vu===null)throw Error(i(160));xu(s,c,o),vu=null,yu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ou(t,e,n),t=t.sibling}var Du=null;function Ou(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Eu(t,e,n),ku(e),a&4&&(yl(3,e,e.return),vl(3,e),yl(5,e,e.return));break;case 1:Eu(t,e,n),ku(e),a&512&&(nu||r===null||Cl(r,r.return)),a&64&&tu&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Du,Eu(t,e,n),ku(e),a&512&&(nu||r===null||Cl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(tu)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[Dt]||r[bt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[bt]=e,Pt(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[bt]=e,Pt(r),t=r}e.stateNode=t}}else tu||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Al(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||nu||t.parentNode.removeChild(t)):a.count--,n===null?tu||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Eu(t,e,n),ku(e),a&512&&(nu||r===null||Cl(r,r.return)),r!==null&&a&4&&Al(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=ru,ru=!1,Eu(t,e,n),ru=o,ku(e),a&512&&(nu||r===null||Cl(r,r.return)),e.flags&32){t=e.stateNode;try{cn(t,``),V=!0}catch(t){ff(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Al(e,t,r===null?t:r.memoizedProps)),a&1024&&(iu=!0);break;case 6:if(Eu(t,e,n),ku(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,V=!0}catch(t){ff(e,e.return,t)}}break;case 3:if(V=!1,Wm=null,o=Du,Du=bm(t.containerInfo),Eu(t,e,n),Du=o,ku(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){ff(e,e.return,t)}iu&&(iu=!1,Au(e)),V=!1;break;case 4:a=ru,ru=tu,r=Wt(),o=Du,Du=bm(e.stateNode.containerInfo),Eu(t,e,n),ku(e),Du=o,V&&cu&&(lu=!0),V=r,ru=a;break;case 12:Eu(t,e,n),ku(e);break;case 31:Eu(t,e,n),ku(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Tu(e,t)));break;case 13:Eu(t,e,n),ku(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(pd=Re()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Tu(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=tu,l=nu,u=ru;tu=c||o,ru=u||o,nu=l||s,Eu(t,e,n),nu=l,ru=u,tu=c,ku(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||tu||nu||(t=s||nu,n=tu,r=nu,tu=o||tu,nu=t,Pu(e,2),tu=n,nu=r),!o&&ru||mu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Tu(e,n))));break;case 19:Eu(t,e,n),ku(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Tu(e,t)));break;case 30:a&512&&(nu||r===null||Cl(r,r.return)),a=Wt(),o=cu,s=(n&335544064)===n,c=e.memoizedProps,cu=s&&mi(c.default,c.update)!==`none`,Eu(t,e,n),ku(e),s&&r!==null&&V&&(e.flags|=4),cu=o,V=a;break;case 21:break;case 7:a&512&&(nu||r===null||Cl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Eu(t,e,n),ku(e)}}function ku(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(jl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Ol(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Dl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Pl(e,Ml(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(cn(l,``),n.flags&=-33),Pl(e,Ml(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Nl(e,Ml(e),u,s);break;default:throw Error(i(161))}}catch(t){ff(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Au(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Au(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function ju(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Mu(t,e),t=t.sibling;else eu(t,!1)}function Mu(e,t){var n=e.alternate;if(n===null)Kl(e,!1);else switch(e.tag){case 3:if(uu=su=!1,Bl(),ju(t,e),!su&&!lu){if(e=zl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),uu=!0}zl=null;break;case 5:ju(t,e);break;case 4:r=su,su=!1,ju(t,e),su&&(lu=!0),su=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?ju(t,e):Kl(e,!1));break;case 30:r=su,i=Bl(),su=!1,ju(t,e),su&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=fi(a,o),o=fi(n.memoizedProps,o);var s=mi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Vl=0,t=$l(e,n,t,o,s,a,!0),Vl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(jd(e,e.memoizedProps.onUpdate),zl=i):i!==null&&(i.push.apply(i,zl),zl=i),su=e.flags&32?!0:r;break;default:ju(t,e)}}function Nu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)pu(e,t.alternate,t),t=t.sibling}function Pu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:yl(4,n,n.return),Pu(n,r);break;case 1:Cl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&xl(n,n.return,i),Pu(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:Cl(n,n.return),n.tag!==5&&n.tag!==27||El(n),Pu(n,r);break;case 6:El(n);break;case 26:Cl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||nu||i.parentNode.removeChild(i),Pu(n,r);break;case 22:n.memoizedState===null&&Pu(n,r);break;case 30:Cl(n,n.return),Pu(n,r);break;case 7:Cl(n,n.return);default:Pu(n,r)}e=e.sibling}}function Fu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Fu(i,a,n),vl(4,a);break;case 1:if(Fu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){ff(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)vo(l[i],c)}catch(e){ff(r,r.return,e)}}s&&o&64&&bl(a),Sl(a,a.return);break;case 27:n&2&&Fl(a);case 5:a.tag!==5&&a.tag!==27||Tl(a),Fu(i,a,n),s&&r===null&&o&4&&kl(a),Sl(a,a.return);break;case 6:Tl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||tu||Km(bm(c.ownerDocument),a.type,c),Fu(i,a,n),s&&r===null&&o&4&&kl(a),Sl(a,a.return);break;case 12:Fu(i,a,n);break;case 31:Fu(i,a,n),s&&o&4&&Su(i,a);break;case 13:Fu(i,a,n),s&&o&4&&Cu(i,a);break;case 22:a.memoizedState===null&&Fu(i,a,n),Sl(a,a.return);break;case 30:Fu(i,a,n),Sl(a,a.return);break;case 7:Sl(a,a.return);default:Fu(i,a,n)}t=t.sibling}}function Iu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Oa(n))}function Lu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Oa(e))}function Ru(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)zu(e,t,n,r),t=t.sibling;else i&&Ql(t)}function zu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Zl(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:Ru(e,t,n,r),a&2048&&vl(9,t);break;case 1:Ru(e,t,n,r);break;case 3:Ru(e,t,n,r),i&&uu&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Oa(a)));break;case 12:if(a&2048){Ru(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){ff(t,t.return,e)}}else Ru(e,t,n,r);break;case 31:Ru(e,t,n,r);break;case 13:Ru(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&Zl(t),o._visibility&2?Ru(e,t,n,r):(o._visibility|=2,Bu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&Zl(s),o._visibility&2?Ru(e,t,n,r):Vu(e,t)),a&2048&&Iu(s,t);break;case 24:Ru(e,t,n,r),a&2048&&Lu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Wl(a.child,!0),Wl(t.child,!0))),Ru(e,t,n,r);break;default:Ru(e,t,n,r)}}function Bu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Bu(a,o,s,c,i),vl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Bu(a,o,s,c,i)):u._visibility&2?Bu(a,o,s,c,i):Vu(a,o),i&&l&2048&&Iu(o.alternate,o);break;case 24:Bu(a,o,s,c,i),i&&l&2048&&Lu(o.alternate,o);break;default:Bu(a,o,s,c,i)}t=t.sibling}}function Vu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Vu(n,r),i&2048&&Iu(r.alternate,r);break;case 24:Vu(n,r),i&2048&&Lu(r.alternate,r);break;default:Vu(n,r)}t=t.sibling}}var Hu=8192;function Uu(e,t,n){if(e.subtreeFlags&Hu)for(e=e.child;e!==null;)Wu(e,t,n),e=e.sibling}function Wu(e,t,n){switch(e.tag){case 26:Uu(e,t,n),e.flags&Hu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,Du,e.memoizedState,e.memoizedProps));break;case 5:Uu(e,t,n),e.flags&Hu&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=Du;Du=bm(e.stateNode.containerInfo),Uu(e,t,n),Du=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Hu,Hu=16777216,Uu(e,t,n),Hu=r):Uu(e,t,n));break;case 30:if((e.flags&Hu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Ll===null&&(Ll=new Map),Ll.set(r,i)}Uu(e,t,n);break;default:Uu(e,t,n)}}function Gu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ku(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ou=r,Yu(r,e)}Gu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qu(e),e=e.sibling}function qu(e){switch(e.tag){case 0:case 11:case 15:Ku(e),e.flags&2048&&yl(9,e,e.return);break;case 3:Ku(e);break;case 12:Ku(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ju(e)):Ku(e);break;default:Ku(e)}}function Ju(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ou=r,Yu(r,e)}Gu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:yl(8,t,t.return),Ju(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ju(t));break;default:Ju(t)}e=e.sibling}}function Yu(e,t){for(;ou!==null;){var n=ou;switch(n.tag){case 0:case 11:case 15:yl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Oa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ou=r;else a:for(n=e;ou!==null;){r=ou;var i=r.sibling,a=r.return;if(_u(r),r===n){ou=null;break a}if(i!==null){i.return=a,ou=i;break a}ou=a}}}var Xu={getCacheForType:function(e){var t=ba(Ea),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ba(Ea).controller.signal}},Zu=typeof WeakMap==`function`?WeakMap:Map,J=0,Y=null,X=null,Z=0,Qu=0,$u=null,ed=!1,td=!1,nd=!1,rd=0,id=0,ad=0,od=0,sd=0,cd=0,ld=0,ud=null,dd=null,fd=!1,pd=0,md=0,hd=1/0,gd=null,_d=null,Q=0,vd=null,yd=null,bd=0,xd=0,Sd=null,Cd=null,wd=null,Td=null,Ed=null,Dd=0,Od=null;function kd(){return J&2&&Z!==0?Z&-Z:L.T===null?_t():Nf()}function Ad(){if(cd===0){if(!(Z&536870912)||G){var e=tt;tt<<=1,!(tt&3932160)&&(tt=262144),cd=e}else cd=536870912}return e=To.current,e!==null&&(e.flags|=32),cd}function jd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(fi(e.memoizedProps,n))),Td===null&&(Td=[]),Td.push(t.bind(null,r))}}function Md(e,t,n){(e===Y&&(Qu===2||Qu===9)||e.cancelPendingCommit!==null)&&(zd(e,0),Id(e,Z,cd,!1)),ut(e,n),J&2&&e===Y||(e===Y&&(!(J&2)&&(od|=n),id===4&&Id(e,Z,cd,!1)),Tf(e))}function Nd(e,t,n){if(J&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||at(e,t),a=r?qd(e,t):Gd(e,t,!0),o=r;do{if(a===0){td&&!r&&Id(e,t,0,!1);break}if(n=e.current.alternate,o&&!Fd(n))a=Gd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=ud;var l=c.current.memoizedState.isDehydrated;if(l&&(zd(c,s).flags|=256),s=Gd(c,s,!1),s!==2&&s!==6){if(nd&&!l){c.errorRecoveryDisabledLanes|=o,od|=o,a=4;break a}o=dd,dd=a,o!==null&&(dd===null?dd=o:dd.push.apply(dd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){zd(e,0),Id(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Id(r,t,cd,!ed);break a;case 2:dd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=pd+300-Re(),10<a)){if(Id(r,t,cd,!ed),it(r,0,!0)!==0)break a;bd=t,r.timeoutHandle=gp(Pd.bind(null,r,n,dd,gd,fd,t,cd,od,ld,ed,o,`Throttled`,-0,0),a);break a}Pd(r,n,dd,gd,fd,t,cd,od,ld,ed,o,null,-0,0)}break}}while(1);Tf(e)}function Pd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:gn},Ll=null,Wu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?pd-Re():(a&4194048)===a?md-Re():0,m=eh(d,m),m!==null)?(bd=a,e.cancelPendingCommit=m(ef.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Id(e,a,o,!l)):ef(e,t,a,n,r,i,o,s,c,l,u,d)}function Fd(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ir(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Id(e,t,n,r){t=ot(e,t),t&=~sd,t&=~od,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Xe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&ft(e,n,t)}function Ld(){return J&6?!0:(Ef(0,!1),!1)}function Rd(){if(X!==null){if(Qu===0)var e=X.return;else e=X,fa=da=null,es(e),$a=null,eo=0,e=X;for(;e!==null;)_l(e.alternate,e),e=e.return;X=null}}function zd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),bd=0,Rd(),Y=e,X=n=ki(e.current,null),Z=t,Qu=0,$u=null,ed=!1,td=at(e,t),nd=!1,ld=cd=sd=od=ad=id=0,dd=ud=null,fd=!1,rd=ot(e,t),yi(),n}function Bd(e,t){q=null,L.H=uc,t===Wa||t===Ka?(t=Qa(),Qu=3):t===Ga?(t=Qa(),Qu=4):Qu=t===Oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,$u=t,X===null&&(id=1,Sc(e,Li(t,e.current)))}function Vd(){var e=To.current;return e===null?!0:(Z&4194048)===Z?Eo===null:(Z&62914560)===Z||Z&536870912?e===Eo:!1}function Hd(){var e=L.H;return L.H=uc,e===null?uc:e}function Ud(){var e=L.A;return L.A=Xu,e}function Wd(){id=4,ed||(Z&4194048)!==Z&&To.current!==null||(td=!0),!(ad&134217727)&&!(od&134217727)||Y===null||Id(Y,Z,cd,!1)}function Gd(e,t,n){var r=J;J|=2;var i=Hd(),a=Ud();(Y!==e||Z!==t)&&(gd=null,zd(e,t)),t=!1;var o=id;a:do try{if(Qu!==0&&X!==null){var s=X,c=$u;switch(Qu){case 8:Rd(),o=6;break a;case 3:case 2:case 9:case 6:To.current===null&&(t=!0);var l=Qu;if(Qu=0,$u=null,Zd(e,s,c,l),n&&td){o=0;break a}break;default:l=Qu,Qu=0,$u=null,Zd(e,s,c,l)}}Kd(),o=id;break}catch(t){Bd(e,t)}while(1);return t&&e.shellSuspendCounter++,fa=da=null,J=r,L.H=i,L.A=a,X===null&&(Y=null,Z=0,yi()),o}function Kd(){for(;X!==null;)Yd(X)}function qd(e,t){var n=J;J|=2;var r=Hd(),a=Ud();Y!==e||Z!==t?(gd=null,hd=Re()+500,zd(e,t)):td=at(e,t);a:do try{if(Qu!==0&&X!==null){t=X;var o=$u;b:switch(Qu){case 1:Qu=0,$u=null,Zd(e,t,o,1);break;case 2:case 9:if(Ja(o)){Qu=0,$u=null,Xd(t);break}t=function(){Qu!==2&&Qu!==9||Y!==e||(Qu=7),Tf(e)},o.then(t,t);break a;case 3:Qu=7;break a;case 4:Qu=5;break a;case 7:Ja(o)?(Qu=0,$u=null,Xd(t)):(Qu=0,$u=null,Zd(e,t,o,7));break;case 5:var s=null;switch(X.tag){case 26:s=X.memoizedState;case 5:case 27:var c=X;if(s?Ym(s):c.stateNode.complete){Qu=0,$u=null;var l=c.sibling;if(l!==null)X=l;else{var u=c.return;u===null?X=null:(X=u,Qd(u))}break b}}Qu=0,$u=null,Zd(e,t,o,5);break;case 6:Qu=0,$u=null,Zd(e,t,o,6);break;case 8:Rd(),id=6;break a;default:throw Error(i(462))}}Jd();break}catch(t){Bd(e,t)}while(1);return fa=da=null,L.H=r,L.A=a,J=n,X===null?(Y=null,Z=0,yi(),id):0}function Jd(){for(;X!==null&&!Ie();)Yd(X)}function Yd(e){var t=cl(e.alternate,e,rd);e.memoizedProps=e.pendingProps,t===null?Qd(e):X=t}function Xd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Hc(n,t,t.pendingProps,t.type,void 0,Z);break;case 11:t=Hc(n,t,t.pendingProps,t.type.render,t.ref,Z);break;case 5:es(t);var r=t;r===Qi&&(G?(aa(r),r.tag===5&&r.stateNode!=null&&($i=r.stateNode)):(aa(r),G=!0));default:_l(n,t),t=X=Ai(t,rd),t=cl(n,t,rd)}e.memoizedProps=e.pendingProps,t===null?Qd(e):X=t}function Zd(e,t,n,r){fa=da=null,es(t),$a=null,eo=0;var i=t.return;try{if(Dc(e,i,t,n,Z)){id=1,Sc(e,Li(n,e.current)),X=null;return}}catch(t){if(i!==null)throw X=i,t;id=1,Sc(e,Li(n,e.current)),X=null;return}t.flags&32768?(G||r===1?e=!0:td||Z&536870912?e=!1:(ed=e=!0,(r===2||r===9||r===3||r===6)&&(r=To.current,r!==null&&r.tag===13&&(r.flags|=16384))),$d(t,e)):Qd(t)}function Qd(e){var t=e;do{if(t.flags&32768){$d(t,ed);return}e=t.return;var n=hl(t.alternate,t,rd);if(n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);id===0&&(id=5)}function $d(e,t){do{var n=gl(e.alternate,e);if(n!==null){n.flags&=32767,X=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){X=e;return}X=e=n}while(e!==null);id=6,X=null}function ef(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do lf();while(Q!==0);if(J&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===Y&&(X=Y=null,Z=0),yd=t,vd=e,bd=n,Sd=a,Cd=r,tf(e,t,n,s,c,l,f)}}function tf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(xd=s,s|=vi,dt(e,n,s,r,i,a),Td=null,(n&335544064)===n?(Ed=ja(e),r=10262):(Ed=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,vf(He,function(){return uf(),null})):(e.callbackNode=null,e.callbackPriority=0),Il=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=L.T,L.T=null,i=R.p,R.p=2,a=J,J|=4;try{du(e,t,n)}finally{J=a,R.p=i,L.T=r}}Q=1,Il?wd=Mp(o,e.containerInfo,Ed,af,of,rf,sf,uf,nf,null,null):(af(),of(),sf())}function nf(e){if(Q!==0){var t=vd.onRecoverableError;t(e,{componentStack:null})}}function rf(){Q===3&&(Q=0,Mu(yd,vd),Q=4)}function af(){if(Q===1){Q=0;var e=vd,t=yd,n=bd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=L.T,L.T=null;var i=R.p;R.p=2;var a=J;J|=4;try{cu=lu=!1,Ou(t,e,n),n=cp;var o=Hr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Vr(s.ownerDocument.documentElement,s)){if(c!==null&&Ur(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Br(s,h),v=Br(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{J=a,R.p=i,L.T=r}}e.current=t,Q=2}}function of(){if(Q===2){Q=0;var e=vd,t=yd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=L.T,L.T=null;var r=R.p;R.p=2;var i=J;J|=4;try{pu(e,t.alternate,t)}finally{J=i,R.p=r,L.T=n}}Q=3}}function sf(){if(Q===4||Q===3){Q=0;var e=wd;wd=null,Le();var t=vd,n=yd,r=bd,i=Cd,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?Q=5:(Q=0,yd=vd=null,cf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(_d=null),gt(r),n=n.stateNode,Je&&typeof Je.onCommitFiberRoot==`function`)try{Je.onCommitFiberRoot(qe,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=L.T,a=R.p,R.p=2,L.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{L.T=n,R.p=a}}if(i=Td,o=Ed,Ed=null,i!==null&&(Td=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);bd&3&&lf(),Tf(t),a=t.pendingLanes,r&261930&&a&42?t===Od?Dd++:(Dd=0,Od=t):(Dd=0,Od=null),Ef(0,!1)}}function cf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Oa(t)))}function lf(){return wd!==null&&(wd.skipTransition(),wd=null),af(),of(),sf(),uf()}function uf(){if(Q!==5)return!1;var e=vd,t=xd;xd=0;var n=gt(bd),r=L.T,a=R.p;try{R.p=32>n?32:n,L.T=null,n=Sd,Sd=null;var o=vd,s=bd;if(Q=0,yd=vd=null,bd=0,J&6)throw Error(i(331));var c=J;if(J|=4,qu(o.current),zu(o,o.current,s,n),J=c,Ef(0,!1),Je&&typeof Je.onPostCommitFiberRoot==`function`)try{Je.onPostCommitFiberRoot(qe,o)}catch{}return!0}finally{R.p=a,L.T=r,cf(e,t)}}function df(e,t,n){t=Li(n,t),t=wc(e.stateNode,t,2),e=fo(e,t,2),e!==null&&(ut(e,2),Tf(e))}function ff(e,t,n){if(e.tag===3)df(e,e,n);else for(;t!==null;){if(t.tag===3){df(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(_d===null||!_d.has(r))){e=Li(n,e),n=Tc(2),r=fo(t,n,2),r!==null&&(Ec(n,r,t,e),ut(r,2),Tf(r));break}}t=t.return}}function pf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zu;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(nd=!0,i.add(n),e=mf.bind(null,e,t,n),t.then(e,e))}function mf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Y===e&&(Z&n)===n&&(id===4||id===3&&(Z&62914560)===Z&&300>Re()-pd?J&2?sd|=n:zd(e,0):sd|=n,ld===Z&&(ld=0)),Tf(e)}function hf(e,t){t===0&&(t=ct()),e=Si(e,t),e!==null&&(ut(e,t),Tf(e))}function gf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hf(e,n)}function _f(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),hf(e,n)}function vf(e,t){return Pe(e,t)}var yf=null,bf=null,xf=!1,Sf=!1,Cf=!1,wf=0;function Tf(e){e!==bf&&e.next===null&&(bf===null?yf=bf=e:bf=bf.next=e),Sf=!0,xf||(xf=!0,Mf())}function Ef(e,t){if(!Cf&&Sf){Cf=!0;do for(var n=!1,r=yf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Xe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,jf(r,a))}else a=Z,a=it(r,r===Y?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||at(r,a)||(n=!0,jf(r,a))}r=r.next}while(n);Cf=!1}}function Df(){Of()}function Of(){Sf=xf=!1;var e=0;wf!==0&&hp()&&(e=wf);for(var t=Re(),n=null,r=yf;r!==null;){var i=r.next,a=kf(r,t);a===0?(r.next=null,n===null?yf=i:n.next=i,i===null&&(bf=n)):(n=r,(e!==0||a&3)&&(Sf=!0)),r=i}Q!==0&&Q!==5||Ef(e,!1),wf!==0&&(wf=0)}function kf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Xe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=st(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Y,n=Z,n=it(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Qu===2||Qu===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Fe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||at(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Fe(r),gt(n)){case 2:case 8:n=Ve;break;case 32:n=He;break;case 268435456:n=We;break;default:n=He}return r=Af.bind(null,e),n=Pe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Fe(r),e.callbackPriority=2,e.callbackNode=null,2}function Af(e,t){if(Q!==0&&Q!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(lf()&&e.callbackNode!==n)return null;var r=Z;return r=it(e,e===Y?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Nd(e,r,t),kf(e,Re()),e.callbackNode!=null&&e.callbackNode===n?Af.bind(null,e):null)}function jf(e,t){if(lf())return null;Nd(e,t,!0)}function Mf(){bp(function(){J&6?Pe(Be,Df):Of()})}function Nf(){if(wf===0){var e=Pa;e===0&&(e=et,et<<=1,!(et&261888)&&(et=256)),wf=e}return wf}function Pf(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:hn(e)}function Ff(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Pf((i[xt]||null).action),o=r.submitter;o&&(t=(t=o[xt]||null)?Pf(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new In(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(wf!==0){var e=new FormData(i,o);Xs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),Xs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var If=0;If<li.length;If++){var Lf=li[If];ui(Lf.toLowerCase(),`on`+(Lf[0].toUpperCase()+Lf.slice(1)))}ui(ti,`onAnimationEnd`),ui(ni,`onAnimationIteration`),ui(ri,`onAnimationStart`),ui(`dblclick`,`onDoubleClick`),ui(`focusin`,`onFocus`),ui(`focusout`,`onBlur`),ui(ii,`onTransitionRun`),ui(ai,`onTransitionStart`),ui(oi,`onTransitionCancel`),ui(si,`onTransitionEnd`),zt(`onMouseEnter`,[`mouseout`,`mouseover`]),zt(`onMouseLeave`,[`mouseout`,`mouseover`]),zt(`onPointerEnter`,[`pointerout`,`pointerover`]),zt(`onPointerLeave`,[`pointerout`,`pointerover`]),Rt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Rt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Rt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Rt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Rt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Rt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Rf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),zf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Rf));function Bf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){hi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){hi(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[Ct];n===void 0&&(n=t[Ct]=new Set);var r=e+`__bubble`;n.has(r)||(Wf(t,e,2,!1),n.add(r))}function Vf(e,t,n){var r=0;t&&(r|=4),Wf(n,e,r,t)}var Hf=`_reactListening`+Math.random().toString(36).slice(2);function Uf(e){if(!e[Hf]){e[Hf]=!0,It.forEach(function(t){t!==`selectionchange`&&(zf.has(t)||Vf(t,!1,e),Vf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hf]||(t[Hf]=!0,Vf(`selectionchange`,!1,t))}}function Wf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!En||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Gf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=At(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}Cn(function(){var r=a,i=vn(n),s=[];a:{var c=ci.get(e);if(c!==void 0){var l=In,u=e;switch(e){case`keypress`:if(Mn(n)===0)break a;case`keydown`:case`keyup`:l=Qn;break;case`focusin`:u=`focus`,l=Un;break;case`focusout`:u=`blur`,l=Un;break;case`beforeblur`:case`afterblur`:l=Un;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Hn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=W;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=tr;break;case ti:case ni:case ri:l=Wn;break;case si:l=nr;break;case`scroll`:case`scrollend`:l=Rn;break;case`wheel`:l=rr;break;case`copy`:case`cut`:case`paste`:l=Gn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=$n;break;case`submit`:l=er;break;case`toggle`:case`beforetoggle`:l=ir}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=wn(m,p),g!=null&&d.push(Kf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==_n&&(u=n.relatedTarget||n.fromElement)&&(At(u)||u[St]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?At(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Hn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=$n,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Mt(c),h=l==null?u:Mt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,At(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?ee(c,l,Jf):null,c!==null&&Yf(s,u,c,d,!1),l!==null&&f!==null&&Yf(s,f,l,d,!0)))}a:{if(c=r?Mt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=wr;else if(vr(c)){if(Tr)_=Pr;else{_=Mr;var v=jr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&fn(r.elementType)&&(_=wr):_=Nr;if(_&&=_(e,r)){yr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Mt(r):window,e){case`focusin`:(vr(v)||v.contentEditable===`true`)&&(Gr=v,Kr=r,qr=null);break;case`focusout`:qr=Kr=Gr=null;break;case`mousedown`:Jr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Jr=!1,Yr(s,n,i);break;case`selectionchange`:if(Wr)break;case`keydown`:case`keyup`:Yr(s,n,i)}var y;if(or)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else mr?fr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(lr&&n.locale!==`ko`&&(mr||b!==`onCompositionStart`?b===`onCompositionEnd`&&mr&&(y=jn()):(On=i,kn=`value`in On?On.value:On.textContent,mr=!0)),v=qf(r,b),0<v.length&&(b=new Kn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=pr(n),y!==null&&(b.data=y)))),(y=cr?hr(e,n):gr(e,n))&&(b=qf(r,`onBeforeInput`),0<b.length&&(v=new Kn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),Ff(s,e,r,n,i)}Bf(s,t)})}function Kf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=wn(e,n),i!=null&&r.unshift(Kf(e,i,a)),i=wn(e,t),i!=null&&r.push(Kf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Jf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=wn(n,a),l!=null&&o.unshift(Kf(n,l,c))):i||(l=wn(n,a),l!=null&&o.push(Kf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Xf=/\r\n?/g,Zf=/\u0000|\uFFFD/g;function Qf(e){return(typeof e==`string`?e:``+e).replace(Xf,`
`).replace(Zf,``)}function $f(e,t){return t=Qf(t),Qf(e)===t}function ep(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||cn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&cn(e,``+r);else return;break;case`className`:Kt(e,`class`,r);break;case`tabIndex`:Kt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Kt(e,n,r);break;case`style`:dn(e,r,o);return;case`data`:if(t!==`object`){Kt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=hn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&ep(e,t,`name`,a.name,a,null),ep(e,t,`formEncType`,a.formEncType,a,null),ep(e,t,`formMethod`,a.formMethod,a,null),ep(e,t,`formTarget`,a.formTarget,a,null)):(ep(e,t,`encType`,a.encType,a,null),ep(e,t,`method`,a.method,a,null),ep(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=hn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=gn);return;case`onScroll`:r!=null&&$(`scroll`,e);return;case`onScrollEnd`:r!=null&&$(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=hn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),Gt(e,`popover`,r);break;case`xlinkActuate`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:qt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:qt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Gt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=pn.get(n)||n,Gt(e,n,r);else return}V=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:dn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)cn(e,r);else if(typeof r==`number`||typeof r==`bigint`)cn(e,``+r);else return;break;case`onScroll`:r!=null&&$(`scroll`,e);return;case`onScrollEnd`:r!=null&&$(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=gn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Lt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[xt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}V=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Gt(e,n,r)}return}V=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:ep(e,t,o,s,n,null)}}a&&ep(e,t,`srcSet`,n.srcSet,n,null),r&&ep(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:ep(e,t,r,d,n,null)}}nn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:ep(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&an(e,!!r,n,!0):an(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:ep(e,t,s,c,n,null)}sn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:ep(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<Rf.length;r++)$(Rf[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:ep(e,t,u,r,n,null)}return;default:if(fn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&ep(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||ep(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(V=!0),o=m;break;case`name`:m!==f&&(V=!0),a=m;break;case`checked`:m!==f&&(V=!0),u=m;break;case`defaultChecked`:m!==f&&(V=!0),d=m;break;case`value`:m!==f&&(V=!0),s=m;break;case`defaultValue`:m!==f&&(V=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&ep(e,t,p,m,r,f)}}tn(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||ep(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(V=!0),p=o;break;case`defaultValue`:o!==l&&(V=!0),c=o;break;case`multiple`:o!==l&&(V=!0),s=o;default:o!==l&&ep(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?an(e,!!n,n?[]:``,!1):an(e,!!n,t,!0)):an(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:ep(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(V=!0),p=a;break;case`defaultValue`:a!==o&&(V=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&ep(e,t,s,a,r,o)}on(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:ep(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(V=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:ep(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&ep(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:ep(e,t,u,p,r,m)}return;default:if(fn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&ep(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||ep(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[bt]=r,n[xt]=t,np(n,e,t),Pt(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Dt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:E({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=At(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=ee(n,a,T),t===null?t=!1:(h(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=ee(r,a,T),t===null?t=!1:(h(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),kt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Dt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&ep(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===gn&&(e.onclick=null),kt(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);kt(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=R.d;R.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=Ld();return e||t}function Cm(e){var t=jt(e);t!==null&&t.tag===5&&t.type===`form`?Qs(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=en(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Pt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+en(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+en(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+en(n.imageSizes)+`"]`)):i+=`[href="`+en(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=E({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[Ot]=!0,o.onload=o.onerror=function(){Ft(o)}),Pt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+en(r)+`"][href="`+en(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=E({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Pt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Nt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=E({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Pt(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Nt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=E({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Pt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Nt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=E({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Pt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=be.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Nt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Nt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Nt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+en(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Ot]){r.loading=1;return}}else t=e.createElement(`link`),t[Ot]=!0,t.onload=t.onerror=Ft.bind(null,t),np(t,`link`,n),Pt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+en(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+en(n.href)+`"]`);if(r)return t.instance=r,Pt(r),r;var a=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Pt(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Pt(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Pt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Pt(a),a):(r=n,(a=vm.get(o))&&(r=E({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Pt(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Dt]||a[bt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Pt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Pt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:j,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lt(0),this.hiddenUpdates=lt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Di(3,null,null,t),e.current=a,a.stateNode=e,t=Da(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},co(a),e}function uh(e){return e?(e=Ti,e):Ti}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=uo(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=fo(e,r,t),n!==null&&(Md(n,e,t),po(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=Si(e,67108864);t!==null&&Md(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=kd();t=ht(t);var n=Si(e,t);n!==null&&Md(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=L.T;L.T=null;var a=R.p;try{R.p=2,yh(e,t,n,r)}finally{R.p=a,L.T=i}}function vh(e,t,n,r){var i=L.T;L.T=null;var a=R.p;try{R.p=8,yh(e,t,n,r)}finally{R.p=a,L.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Gf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=jt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=rt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Xe(o);s.entanglements[1]|=c,o&=~c}Tf(a),!(J&6)&&(hd=Re()+500,Ef(0,!1))}}break;case 31:case 13:s=Si(a,2),s!==null&&Md(s,a,2),Ld(),ph(a,2)}if(a=bh(r),a===null&&Gf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Gf(e,t,r,null,n)}}function bh(e){return e=vn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=At(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(ze()){case Be:return 2;case Ve:return 8;case He:case Ue:return 32;case We:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=jt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=At(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,vt(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,vt(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_n=r,n.target.dispatchEvent(r),_n=null}else return t=jt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=jt(n);a!==null&&(e.splice(t,3),t-=3,Xs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[xt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[xt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,kd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),Ld(),t[St]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=_t();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.1`)throw Error(i(527,Kh,`19.3.1`));R.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:L,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{qe=Jh.inject(qh),Je=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=yc,s=bc,c=xc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[St]=t.current,Uf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u()),v=g(),y=`-ms-`,b=`-moz-`,x=`-webkit-`,S=`comm`,C=`rule`,w=`decl`,T=`@import`,ee=`@namespace`,E=`@keyframes`,D=`@layer`,O=Math.abs,k=String.fromCharCode,te=Object.assign;function ne(e,t){return M(e,0)^45?(((t<<2^M(e,0))<<2^M(e,1))<<2^M(e,2))<<2^M(e,3):0}function A(e){return e.trim()}function re(e,t){return(e=t.exec(e))?e[0]:e}function j(e,t,n){return e.replace(t,n)}function ie(e,t,n){return e.indexOf(t,n)}function M(e,t){return e.charCodeAt(t)|0}function N(e,t,n){return e.slice(t,n)}function ae(e){return e.length}function oe(e){return e.length}function se(e,t){return t.push(e),e}function ce(e,t){return e.map(t).join(``)}function le(e,t){return e.filter(function(e){return!re(e,t)})}var ue=1,de=1,fe=0,P=0,F=0,pe=``;function I(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:ue,column:de,length:o,return:``,siblings:s}}function L(e,t){return te(I(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function R(e){for(;e.root;)e=L(e.root,{children:[e]});se(e,e.siblings)}function me(){return F}function he(){return F=P>0?M(pe,--P):0,de--,F===10&&(de=1,ue--),F}function ge(){return F=P<fe?M(pe,P++):0,de++,F===10&&(de=1,ue++),F}function _e(){return M(pe,P)}function z(){return P}function B(e,t){return N(pe,e,t)}function ve(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ye(e){return ue=de=1,fe=ae(pe=e),P=0,[]}function be(e){return pe=``,e}function xe(e){return A(B(P-1,we(e===91?e+2:e===40?e+1:e)))}function Se(e){for(;(F=_e())&&F<33;)ge();return ve(e)>2||ve(F)>3?``:` `}function Ce(e,t){for(;--t&&ge()&&!(F<48||F>102||F>57&&F<65||F>70&&F<97););return B(e,z()+(t<6&&_e()==32&&ge()==32))}function we(e){for(;ge();)switch(F){case e:return P;case 34:case 39:e!==34&&e!==39&&we(F);break;case 40:e===41&&we(e);break;case 92:ge()}return P}function Te(e,t){for(;ge()&&e+F!==57&&(e+F!==84||_e()!==47););return`/*`+B(t,P-1)+`*`+k(e===47?e:ge())}function Ee(e){for(;!ve(_e());)ge();return B(e,P)}function De(e){return be(Oe(``,null,null,null,[``],e=ye(e),0,[0],e))}function Oe(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=ge()){case 40:if(m!=108&&M(C,d-1)==58){ie(C+=j(xe(v),`&`,`&\f`),`&\f`,O(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=xe(v);break;case 9:case 10:case 13:case 32:C+=Se(m);break;case 92:C+=Ce(z()-1,7);continue;case 47:switch(_e()){case 42:case 47:se(Ae(Te(ge(),z()),t,n,c),c),(ve(m||1)==5||ve(_e()||1)==5)&&ae(C)&&N(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=ae(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=j(C,/\f/g,``)),p>0&&(ae(C)-d||h===0&&m===47)&&se(p>32?je(C+`;`,r,n,d-1,c):je(j(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(se(S=ke(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123){if(u===0)Oe(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(M(C,3)===110)break;case 108:if(M(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Oe(e,S,S,r&&se(ke(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):Oe(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+ae(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&he()==125)continue}switch(C+=k(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(ae(C)-1)*_,_=1;break;case 64:_e()===45&&(C+=xe(ge())),f=_e(),u=d=ae(y=C+=Ee(z())),v++;break;case 45:m===45&&ae(C)==2&&(h=0)}}return a}function ke(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=oe(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=N(e,f+1,f=O(g=o[h])),b=e;v<m;++v)(b=A(g>0?p[v]+` `+y:j(y,/&\f/g,p[v])))&&(c[_++]=b);return I(e,t,n,i===0?C:s,c,l,u,d)}function Ae(e,t,n,r){return I(e,t,n,S,k(me()),N(e,2,-2),0,r)}function je(e,t,n,r,i){return I(e,t,n,w,N(e,0,r),N(e,r+1,-1),r,i)}function Me(e,t,n){switch(ne(e,t)){case 5103:return x+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return x+e+e;case 4855:return x+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return b+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return x+e+b+e+y+e+e;case 5936:switch(M(e,t+11)){case 114:return x+e+y+j(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return x+e+y+j(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return x+e+y+j(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return x+e+y+e+e;case 6165:return x+e+y+`flex-`+e+e;case 5187:return x+e+j(e,/(\w+).+(:[^]+)/,x+`box-$1$2`+y+`flex-$1$2`)+e;case 5443:return x+e+y+`flex-item-`+j(e,/flex-|-self/g,``)+(re(e,/flex-|baseline/)?``:y+`grid-row-`+j(e,/flex-|-self/g,``))+e;case 4675:return x+e+y+`flex-line-pack`+j(e,/align-content|flex-|-self/g,``)+e;case 5548:return x+e+y+j(e,`shrink`,`negative`)+e;case 5292:return x+e+y+j(e,`basis`,`preferred-size`)+e;case 6060:return x+`box-`+j(e,`-grow`,``)+x+e+y+j(e,`grow`,`positive`)+e;case 4554:return x+j(e,/([^-])(transform)/g,`$1`+x+`$2`)+e;case 6187:return j(j(j(e,/(zoom-|grab)/,x+`$1`),/(image-set)/,x+`$1`),e,``)+e;case 5495:case 3959:return j(e,/(image-set\([^]*)/,x+"$1$`$1");case 4968:return j(j(e,/(.+:)(flex-)?(.*)/,x+`box-pack:$3`+y+`flex-pack:$3`),/space-between/,`justify`)+x+e+e;case 4200:if(!re(e,/flex-|baseline/))return y+`grid-column-align`+N(e,t)+e;break;case 2592:case 3360:return y+j(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,re(e.props,/grid-\w+-end/)})?~ie(e+(n=n[t].value),`span`,0)?e:y+j(e,`-start`,``)+e+y+`grid-row-span:`+(~ie(n,`span`,0)?re(n,/\d+/):+re(n,/\d+/)-re(e,/\d+/))+`;`:y+j(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return re(e.props,/grid-\w+-start/)})?e:y+j(j(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return j(e,/(.+)-inline(.+)/,x+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ae(e)-1-t>6)switch(M(e,t+1)){case 109:if(M(e,t+4)!==45)break;case 102:return j(e,/(.+:)(.+)-([^]+)/,`$1`+x+`$2-$3$1`+b+(M(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~ie(e,`stretch`,0)?Me(j(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return j(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return y+n+`:`+r+s+(i?y+n+`-span:`+(a?o:+o-r)+s:``)+e});case 4949:if(M(e,t+6)===121)return j(e,`:`,`:`+x)+e;break;case 6444:switch(M(e,M(e,14)===45?18:11)){case 120:return j(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+x+(M(e,14)===45?`inline-`:``)+`box$3$1`+x+`$2$3$1`+y+`$2box$3`)+e;case 100:return j(e,`:`,`:`+y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return j(e,`scroll-`,`scroll-snap-`)+e}return e}function Ne(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Pe(e,t,n,r){switch(e.type){case D:if(e.children.length)break;case T:case ee:case w:return e.return=e.return||e.value;case S:return``;case E:return e.return=e.value+`{`+Ne(e.children,r)+`}`;case C:if(!ae(e.value=e.props.join(`,`)))return``}return ae(n=Ne(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Fe(e){var t=oe(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Ie(e){return function(t){t.root||(t=t.return)&&e(t)}}function Le(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case w:e.return=Me(e.value,e.length,n);return;case E:return Ne([L(e,{value:j(e.value,`@`,`@`+x)})],r);case C:if(e.length)return ce(n=e.props,function(t){switch(re(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:R(L(e,{props:[j(t,/:(read-\w+)/,`:`+b+`$1`)]})),R(L(e,{props:[t]})),te(e,{props:le(n,r)});break;case`::placeholder`:R(L(e,{props:[j(t,/:(plac\w+)/,`:`+x+`input-$1`)]})),R(L(e,{props:[j(t,/:(plac\w+)/,`:`+b+`$1`)]})),R(L(e,{props:[j(t,/:(plac\w+)/,y+`input-$1`)]})),R(L(e,{props:[t]})),te(e,{props:le(n,r)})}return``})}}function Re(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var ze=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Be=`active`,Ve=`data-styled-version`,He=`6.6.0`,Ue=`/*!sc*/
`,We=typeof window<`u`&&typeof document<`u`;if(!_.createContext)throw Re(19);function Ge(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var Ke=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:Ge(`REACT_APP_SC_DISABLE_SPEEDY`)??Ge(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),qe=`sc-keyframes-`,Je=new Map,Ye=new Map,Xe=1,Ze=e=>{if(Je.has(e))return Je.get(e);for(;Ye.has(Xe);)Xe++;let t=Xe++;return Je.set(e,t),Ye.set(t,e),t},Qe=e=>Ye.get(e),$e=(e,t)=>{Xe=t+1,Je.set(e,t),Ye.set(t,e)},et=Object.freeze([]),tt=Object.freeze({});function nt(e,t,n=tt){return e.theme!==n.theme&&e.theme||t||n.theme}var rt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,it=/(^-|-$)/g;function at(e){return e.replace(rt,`-`).replace(it,``)}var ot=/(a)(d)/gi,st=e=>String.fromCharCode(e+(e>25?39:97));function ct(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=st(t%52)+n;return(st(t%52)+n).replace(ot,`$1-$2`)}var lt=5381,ut=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},dt=e=>ut(lt,e);function ft(e){return ct(dt(e)>>>0)}function pt(e){return e.displayName||e.name||`Component`}function mt(e){return typeof e==`string`&&!0}function ht(e){return mt(e)?`styled.${e}`:`Styled(${pt(e)})`}var gt=Symbol.for(`react.memo`),_t=Symbol.for(`react.forward_ref`),vt={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},yt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},bt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xt={[_t]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[gt]:bt};function St(e){return(`type`in(t=e)&&t.type.$$typeof)===gt?bt:`$$typeof`in e?xt[e.$$typeof]:vt;var t}var Ct=Object.defineProperty,wt=Object.getOwnPropertyNames,Tt=Object.getOwnPropertySymbols,Et=Object.getOwnPropertyDescriptor,Dt=Object.getPrototypeOf,Ot=Object.prototype;function kt(e,t,n){if(typeof t!=`string`){let r=Dt(t);r&&r!==Ot&&kt(e,r,n);let i=wt(t).concat(Tt(t)),a=St(e),o=St(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in yt||n&&n[s]||o&&s in o||a&&s in a)){let n=Et(t,s);try{Ct(e,s,n)}catch{}}}}return e}function At(e){return typeof e==`function`}var jt=Symbol.for(`react.forward_ref`);function Mt(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===jt&&`styledComponentId`in e}function Nt(e,t){return e&&t?e+` `+t:e||t||``}function Pt(e,t){return e.join(t||``)}function Ft(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function It(e,t,n=!1){if(!n&&!Ft(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=It(e[n],t[n]);else if(Ft(t))for(let n in t)e[n]=It(e[n],t[n]);return e}function Lt(e,t){Object.defineProperty(e,"toString",{value:t})}var Rt=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw Re(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+Ue;return t}},zt=`style[${ze}][${Ve}="${He}"]`,Bt=RegExp(`^${ze}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Vt=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,Ht=e=>{if(!e)return document;if(Vt(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(Vt(t))return t}return document},Ut=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},V=(e,t)=>{let n=(t.textContent??``).split(Ue),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(Bt);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&($e(n,t),Ut(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},Wt=e=>{let t=Ht(e.options.target).querySelectorAll(zt);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(ze)!==Be&&(V(e,r),r.parentNode&&r.parentNode.removeChild(r))}},Gt=!1;function Kt(){if(!1!==Gt)return Gt;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return Gt=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return Gt=t.getAttribute(`content`)||void 0}return Gt=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var qt=(e,t)=>{if(typeof document>`u`)throw Re(20);let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${ze}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(ze,Be),i.setAttribute(Ve,He);let s=t||Kt();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},Jt=class{constructor(e,t){this.element=qt(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw Re(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},Yt=class{constructor(e,t){this.element=qt(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},Xt=We,Zt={isServer:!We,useCSSOMInjection:!Ke},Qt=class e{static registerId(e){return Ze(e)}constructor(e=tt,t={},n){this.options=Object.assign(Object.assign({},Zt),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&We&&Xt&&(Xt=!1,Wt(this)),Lt(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=Qe(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=ze+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&We&&Wt(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&We&&t.target!==this.options.target&&Ht(this.options.target)!==Ht(t.target)&&Wt(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new Jt(t,n):new Yt(t,n))(this.options),new Rt(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){Ze(e),e.startsWith(qe)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(Ze(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(Ze(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},$t=new WeakSet,en={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function tn(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in en||e.startsWith(`--`)?String(t).trim():t+`px`}var nn=47;function rn(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var an=Symbol.for(`sc-keyframes`);function on(e){return typeof e==`object`&&!!e&&an in e}function sn(e){return At(e)&&!(e.prototype&&e.prototype.isReactComponent)}var cn=e=>e==null||!1===e||e===``,ln=Symbol.for(`react.client.reference`);function un(e){return e.$$typeof===ln}function dn(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!cn(r)&&(Array.isArray(r)&&$t.has(r)||At(r)?t.push(rn(n)+`:`,r,`;`):Ft(r)?(t.push(n+` {`),dn(r,t),t.push(`}`)):t.push(rn(n)+`: `+tn(n,r)+`;`))}}function fn(e,t,n,r,i=[]){if(cn(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return un(e)?i:sn(e)&&t?fn(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)fn(e[a],t,n,r,i);return i}return Mt(e)?(i.push(`.${e.styledComponentId}`),i):on(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):un(e)?i:Ft(e)&&e.toString===Object.prototype.toString?(dn(e,i),i):(i.push(e.toString()),i)}var pn=dt(He),mn=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=ut(pn,t),this.baseStyle=n,Qt.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a){if(sn(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=Pt(fn(r,e,t,n)))}else i+=Pt(fn(a,e,t,n))}}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=ct(ut(ut(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Nt(r,a)}}return r}},hn=/&/g;function gn(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function _n(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==nn||e.charCodeAt(c+1)!==42){if(o)l===42&&e.charCodeAt(c+1)===nn&&(o=!1,c++);else if(l!==34&&l!==39||gn(e,c)){if(a===0){if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}}else a===0?a=l:a===l&&(a=0)}else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function vn(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&vn(a.children,t)}return e}function yn({options:e=tt,plugins:t=et}=tt){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(hn,r).replace(i,a))}),e.prefix&&o.push(Le),o.push(Pe);let s=[],c=Fe(o.concat(Ie(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return _n(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||gn(e,o)){if(s===0){if(t===nn&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==nn);)o++;o+=2}else if(t!==40){if(t!==41){if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===nn)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===nn&&o+1<r&&e.charCodeAt(o+1)===nn){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++}else c>0&&c--,o++}else c++,o++}else o++}else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:_n(i)):l===0?e:_n(e)}(t),d=De(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=vn(d,e.namespace)),s=[],Ne(d,c),s},u=e,d=lt;for(let e=0;e<t.length;e++)t[e].name||Re(15),d=ut(d,t[e].name);return u!=null&&u.namespace&&(d=ut(d,u.namespace)),u!=null&&u.prefix&&(d=ut(d,`p`)),l.hash=d===lt?``:d.toString(),l}var bn=new Qt,xn=yn(),Sn=_.createContext({shouldForwardProp:void 0,styleSheet:bn,stylis:xn,stylisPlugins:void 0});Sn.Consumer;function Cn(){return _.useContext(Sn)}var wn=_.createContext(void 0);wn.Consumer;var Tn={};function En(e,t){let n=typeof e==`string`?at(e):`sc`;Tn[n]=(Tn[n]||0)+1;let r=n+`-`+ft(He+n+Tn[n]);return t?t+`-`+r:r}function Dn(e,t,n){let r=Mt(e),i=e,a=!mt(e),{attrs:o=et,componentId:s=En(t.displayName,t.parentComponentId),displayName:c=ht(e)}=t,l=t.displayName&&t.componentId?at(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new mn(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=_.useContext(wn),u=Cn(),d=e.shouldForwardProp||u.shouldForwardProp,f=nt(t,l,a)||tt,[p,m]=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=null,a=e.length>1;for(let t=0;t<e.length;t++){let n=e[t],o=At(n)?n(a?Object.assign({},r):r):n;for(let e in o)e===`className`?r.className=Nt(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):o[e]===void 0?e in r&&(r[e]!==void 0&&(i||=[]).push(e),r[e]=void 0):r[e]=o[e]}return`className`in t&&typeof t.className==`string`&&(r.className=Nt(r.className,t.className)),[r,i]}(r,t,f),h=i.generateAndInjectStyles(p,u.styleSheet,u.stylis),g=p.as||c,v=mt(g),y=function(e,t,n,r,i,a){let o={};for(let s in e)s[0]===`$`||s===`as`||s===`theme`&&e.theme===n||(s===`forwardedAs`?e.forwardedAs!==void 0&&(o.as=e.forwardedAs):e[s]===void 0?s===`className`||i||a!==null&&a.indexOf(s)!==-1||r&&!r(s,t)||(o[s]=void 0):r&&!r(s,t)||(o[s]=e[s]));return o}(p,g,f,d,v,m),b=Nt(o,s);return h&&(b+=` `+h),p.className&&(b+=` `+p.className),y[v&&g.includes(`-`)?`class`:`className`]=b,n&&(y.ref=n),(0,_.createElement)(g,y)}(m,e,t)}p.displayName=c;let m=_.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Nt(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)It(e,n,!0);return e}({},i.defaultProps,e):e}}),Lt(m,()=>`.${m.styledComponentId}`),a&&kt(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var On=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function kn(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var An=e=>($t.add(e),e);function jn(e,...t){if(At(e)||Ft(e))return An(fn(kn(et,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?fn(n):An(fn(kn(n,t)))}function Mn(e,t,n=tt){if(!t)throw Re(1,t);let r=(r,...i)=>e(t,n,jn(r,...i));return r.attrs=r=>Mn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Mn(e,t,Object.assign(Object.assign({},n),r)),r}var Nn=e=>Mn(Dn,e),H=Nn;On.forEach(e=>{H[e]=Nn(e)}),`${ze}`,`${ze}`,`${ze}`;var Pn=15e3,Fn=new Set,In=new Map,Ln=!1,Rn=0;function zn(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function Bn(){Ln||(Ln=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>Vn(e)))}function Vn(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?In.get(n):void 0;n&&r&&(In.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),Fn.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}var U={get available(){return zn()},send(e){zn()?(Bn(),window.external.sendMessage(JSON.stringify(e))):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=Pn){if(!zn())return Promise.reject(Error(`Native bridge is not available.`));Bn();let r=`req-${++Rn}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{In.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);In.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return Bn(),Fn.add(e),()=>Fn.delete(e)}},Hn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),W=o(((e,t)=>{t.exports=Hn()}))();function Un(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}(0,_.createContext)(Un({})),(0,_.createContext)(`en`);var Wn=e=>U.send({type:e});function Gn(){let[e,t]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{if(U.available)return U.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>Wn(`window.minimize`),toggleMaximize:()=>Wn(`window.toggleMaximize`),close:()=>Wn(`window.close`)}}function Kn(){return{onMouseDown:()=>Wn(`window.drag`),onDoubleClick:()=>Wn(`window.toggleMaximize`)}}function qn(){let[e,t]=(0,_.useState)(!1),{maximized:n}=Gn();return(0,_.useEffect)(()=>{if(!U.available)return;let e=!1;return U.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,_.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var Jn=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function Yn(){return(0,W.jsx)(W.Fragment,{children:Jn.map(([e,t])=>(0,W.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),U.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var Xn={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},Zn={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function Qn(e,t){return U.available?await U.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function $n(e){return U.available?(await U.request(`fs.open`,{path:e})).ok:!1}async function er(e,t=!0,n=!1){return await U.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n})}async function tr(e,t){return U.available?(await U.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function nr(e,t,n,r){return U.available?(await U.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function rr(e,t=!1){return U.available?await U.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function ir(){return(await U.request(`fs.places`)).places}async function ar(){return(await U.request(`fs.drives`)).drives}async function or(e=!1){return(await U.request(`fs.recycle`,{includeOrphans:e})).entries}async function sr(e){return(await U.request(`fs.recycle.restore`,{id:e})).ok}async function cr(e=!1){await U.request(`fs.recycle.empty`,{includeOrphans:e})}async function lr(e){await U.request(`fs.recycle.delete`,{id:e})}async function ur(){if(!U.available)return{entries:[],cancelled:!0,failed:!1};let e=await U.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function dr(){return U.available?(await U.request(`fs.recycle.admin.purge`)).ok:!1}async function fr(e=0,t=150,n=!1){return U.available?await U.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function pr(){return U.available?(await U.request(`fs.recent`)).entries:[]}async function mr(){return U.available?(await U.request(`fs.frequent`)).entries:[]}async function hr(e){U.available&&await U.request(`fs.frequent.record`,{path:e})}async function gr(){await U.request(`fs.recent.clear`)}async function _r(){await U.request(`fs.frequent.clear`)}async function vr(){return await U.request(`fs.visibility`)}async function yr(){return await U.request(`fs.hidden.toggle`)}var br={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showCheckboxes:!0,openOnSingleClick:!1};async function xr(){if(!U.available)return br;let e=await U.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1}}async function Sr(e){if(!U.available)return e;let t=await U.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick}}async function Cr(e,t){U.available&&await U.request(`app.tabs.set`,{tabs:e,active:t})}async function wr(e,t,n){return U.available?(await U.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}async function Tr(){return U.available?(await U.request(`app.pickIcon`)).path:null}async function Er(){return U.available?(await U.request(`app.pickFolder`)).path:null}var Dr={managed:0,private:0,workingSet:0,available:0};async function Or(){return U.available?await U.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1}}async function kr(){return U.available?await U.request(`app.memory`):Dr}async function Ar(){return U.available?await U.request(`app.memory.trim`):Dr}async function jr(){return U.available?(await U.request(`app.scheme`)).registered:!1}async function Mr(e){return U.available?(await U.request(`app.scheme.set`,{enabled:e})).registered:!1}async function Nr(e,t=!1){return!U.available||e.length===0?!1:(await U.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function Pr(){return U.available?(await U.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function Fr(){return U.available?await U.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function Ir(e,t,n){return!U.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await U.request(`fs.operation.transfer`,{paths:e,target:t,move:n})}async function Lr(e){return!U.available||e.length===0?[]:(await U.request(`fs.paths.info`,{paths:e})).entries}async function Rr(e){return U.available?(await U.request(`fs.clipboard.paste`,{directory:e})).ok:!1}async function zr(e,t=!1){return!U.available||e.length===0?!1:(await U.request(`fs.operation.delete`,{paths:e,permanent:t})).ok}async function Br(e,t){return U.available?await U.request(`fs.operation.rename`,{path:e,name:t}):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function Vr(e){return U.available?await U.request(`fs.operation.newFolder`,{directory:e}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function Hr(e){U.available&&e.length!==0&&await U.request(`fs.operation.properties`,{paths:e})}async function Ur(e){U.available&&await U.request(`fs.operation.openWith`,{path:e})}async function Wr(e){U.available&&await U.request(`fs.operation.terminal`,{path:e})}async function Gr(e){return U.available?await U.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function Kr(e,t){return U.available?(await U.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function qr(){return U.available?await U.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function Jr(){return U.available?await U.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function Yr(e){U.available&&await U.request(`fs.operation.showInExplorer`,{path:e})}async function Xr(e){return!U.available||e.length===0?{verbs:[],safe:!0}:await U.request(`shell.verbs`,{paths:e})}async function Zr(e,t,n,r){U.available&&e.length!==0&&await U.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Qr(e){return!U.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await U.request(`fs.operation.compress`,{paths:e})}async function $r(){return U.available?(await U.request(`app.tasks`)).tasks:[]}async function ei(){U.available&&await U.request(`app.tasks.clear`)}var ti={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,refresh:`f5`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,placesPanel:`f9`,openInNewTab:`ctrl`},ni=ti.openInNewTab;function ri(e){ni=e.trim()||ti.openInNewTab}function ii(e){let t=ni.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function ai(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function oi(e){return e.split(`+`).filter(Boolean).map(e=>si[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var si={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function ci(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var li=new Map,ui=new Map,di=new Set,fi=0;function pi(){li.clear(),ui.clear(),fi+=1,di.forEach(e=>e())}function mi(){let[e,t]=(0,_.useState)(fi);return(0,_.useEffect)(()=>{let e=()=>t(fi);return di.add(e),()=>{di.delete(e)}},[]),e}var hi=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function gi(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return hi.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function _i(e,t,n=!1){let r=mi(),i=gi(e,t,n),[a,o]=(0,_.useState)(()=>li.get(i)??null);return(0,_.useEffect)(()=>{if(!U.available)return;if(li.has(i)){o(li.get(i)??null);return}let r=!0;return U.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{li.set(i,e.dataUrl),r&&o(e.dataUrl)},()=>{li.set(i,null),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function vi(e){let t=mi(),[n,r]=(0,_.useState)(()=>e?ui.get(e)??null:null);return(0,_.useEffect)(()=>{if(!e||!U.available){r(null);return}if(ui.has(e)){r(ui.get(e)??null);return}let t=!0;return U.request(`fs.iconFile`,{path:e}).then(n=>{ui.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{ui.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var yi=null,bi=null;function xi(){return yi===null?U.available?(bi??=U.request(`app.thumbnails`).then(e=>(yi=e.base??``,yi),()=>(yi=``,``)),bi):Promise.resolve(``):Promise.resolve(yi)}function Si(e,t=128,n=0){let[r,i]=(0,_.useState)(yi);return(0,_.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return xi().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}`}var Ci={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},wi={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function Ti(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=Oi(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=ji(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var Ei=`\0`,Di=``;function Oi(e){return e.query!==Ei&&(Ei=e.query,Di=e.query.toLowerCase()),Di}var ki=`\0`,Ai=null;function ji(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===ki)return Ai;ki=t;try{Ai=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{Ai=null}return Ai}function Mi(e,t){return Ti(e,t)!==null}var Ni=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],Pi={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Fi(e){let t=Li(e);for(let{kind:e}of Ni)if(Pi[e].has(t))return e;return null}function Ii(e){return Fi(e)!==null}function Li(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}function Ri(e){if(e<0)return`—`;if(e===0)return`0 B`;let t=[`B`,`KB`,`MB`,`GB`,`TB`],n=Math.min(Math.floor(Math.log(e)/Math.log(1024)),t.length-1);return`${(e/1024**n).toFixed(n===0?0:1)} ${t[n]}`}function zi(){let e=document.documentElement.lang.trim();return e.length>0?e:void 0}function Bi(e){return e<=0?`—`:new Date(e).toLocaleString(zi(),{year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`})}function Vi(e){return e>=.9?`#ef4444`:e>=.75?`#f59e0b`:`var(--accent-gradient)`}function Hi(e){return e.replace(/[\\/]+$/,``).split(/[\\/]/).at(-1)||e}function Ui(e){let t=e.includes(`/`)||e.includes(`\\\\`)?e.replace(/[\\/]+/g,`\\`):e;return t.endsWith(`\\`)&&(t=t.slice(0,-1)),t.toLowerCase()}function Wi(e){let t=e.name.replace(/[\\/]+$/,``);return/^[a-z]:$/i.test(t)?` (${t.toUpperCase()})`:``}function Gi(e){return`${e.label||`Local Disk`}${Wi(e)}`}var Ki=(0,_.createContext)({places:{},useIcons:!1}),qi=Ki.Provider;function Ji(){return(0,_.useContext)(Ki)}function Yi(e,t){return e.places[Ui(t)]}function Xi(e,t,n){return Yi(e,t)?.name||n}var Zi=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,W.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,W.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),Qi=e=>(0,W.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,W.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),$i=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,W.jsx)(`path`,{d:`M14 3v4h4`})]}),G=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,W.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,W.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),ea=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,W.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),ta=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M12 19V5`}),(0,W.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),na=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,W.jsx)(`path`,{d:`M20 4v7h-7`})]}),ra=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M12 5v14`}),(0,W.jsx)(`path`,{d:`M5 12h14`})]}),ia=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M19 12H5`}),(0,W.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),aa=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M5 12h14`}),(0,W.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),oa=e=>(0,W.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,W.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),sa=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,W.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),ca=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,W.jsx)(`path`,{d:`M12 12v8`})]}),la=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,W.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),ua=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,W.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,W.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,W.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),da=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,W.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),fa=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M4 7h16`}),(0,W.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,W.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,W.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),pa=e=>(0,W.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,W.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),ma=e=>(0,W.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,W.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),ha=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,W.jsxs)(`defs`,{children:[(0,W.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,W.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,W.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,W.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,W.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,W.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,W.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,W.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,W.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,W.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),ga=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,W.jsx)(`path`,{d:`M15 3v4h4`}),(0,W.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),_a=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,W.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,W.jsx)(`path`,{d:`m13 5-2 14`})]}),va=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,W.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,W.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),ya=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,W.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),ba=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,W.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,W.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),xa=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,W.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),Sa=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,W.jsx)(`path`,{d:`M15 3v4h4`}),(0,W.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),Ca=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,W.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),wa=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,W.jsx)(`path`,{d:`M8.5 14h7`})]}),Ta=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,W.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,W.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),Ea=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,W.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),Da=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,W.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),Oa=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,W.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),ka=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,W.jsx)(`path`,{d:`M15 3v4h4`}),(0,W.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),Aa=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,W.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,W.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,W.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),ja=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,W.jsx)(`path`,{d:`m14 6 4 4`})]}),Ma=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,W.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Na=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,W.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Pa=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M12 4v10`}),(0,W.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,W.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Fa=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,W.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,W.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Ia=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,W.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,W.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),La=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,W.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Ra=e=>(0,W.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,W.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),za=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,W.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Ba=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,W.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,W.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Va=e=>(0,W.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,W.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),Ha=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,W.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,W.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,W.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),Ua=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,W.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Wa=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,W.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Ga=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,W.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,W.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),Ka=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,W.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),qa=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,W.jsx)(`path`,{d:`M3.5 12h17`}),(0,W.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Ja=e=>(0,W.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,W.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),Ya=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,W.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),Xa=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,W.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,W.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),Za=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,W.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),Qa=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M12 16V4`}),(0,W.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,W.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]});function K(e,t){return({size:n=t,...r})=>(0,W.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var $a=K(Zi,18),eo=K(Qi,18),to=K($i,18),no=K(G,18),ro=K(ea,16),io=K(ta,16),ao=K(na,16),oo=K(ra,16),so=K(ia,16),co=K(aa,16),lo=K(oa,12),uo=K(sa,18),fo=K(ca,14),po=K(la,14),mo=K(ua,14),ho=K(da,18),go=K(fa,18),_o=K(pa,14),vo=K(ma,14),yo=K(ha,18),bo=K(ga,18),xo=K(_a,18),So=K(va,18),Co=K(ya,18),wo=K(ba,18),To=K(xa,18),Eo=K(Sa,18),Do=K(Ca,18),Oo=K(wa,18),ko=K(Ta,18),Ao=K(Ea,18),jo=K(Da,18),Mo=K(Oa,18),No=K(ka,18),Po=K(Aa,18),Fo=K(ja,16),Io=K(Ma,18),q=K(Na,18),Lo=K(Pa,18),Ro=K(Fa,18),zo=K(Ia,18),Bo=K(La,18),Vo=K(Ra,18),Ho=K(za,18),Uo=K(Ba,18),Wo=K(Va,18),Go=K(Ha,18),Ko=K(Ua,18),qo=K(Wa,18),Jo=K(Ga,18),Yo=K(Ka,18),Xo=K(qa,18),Zo=K(Ja,18),Qo=K(Ya,16),$o=K(Xa,16),es=K(Za,16),ts=K(Qa,16),ns=m();function rs({x:e,y:t,items:n,quick:r=[],onClose:i}){let a=(0,_.useRef)(null),o=(0,_.useRef)(null),s=(0,_.useRef)(void 0),[c,l]=(0,_.useState)(null);if((0,_.useEffect)(()=>{let e=e=>a.current?.contains(e)||o.current?.contains(e),t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),s=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,s,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,s,!0)}},[i]),(0,_.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let u=Math.max(8,Math.min(e,window.innerWidth-280)),d=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),f=()=>window.clearTimeout(s.current),p=()=>{f(),s.current=window.setTimeout(()=>l(null),180)},m=(e,t)=>{f();let n=e.currentTarget.getBoundingClientRect(),r=n.right+248>window.innerWidth?Math.max(8,n.left-248):n.right+4,i=Math.max(8,Math.min(n.top,window.innerHeight-320));l({items:t,left:r,top:i})},h=e=>{i(),e.onSelect()},g=e=>{let t=[],n;return e.forEach((e,r)=>{e.group&&e.group!==n&&(t.length>0&&t.push((0,W.jsx)(ps,{},`group-rule-${r}`)),t.push((0,W.jsx)(fs,{children:e.group},`group-${r}`)),n=e.group),e.separatorBefore&&t.length>0&&t.push((0,W.jsx)(ps,{},`rule-${r}`));let i=(e.children?.length??0)>0;t.push((0,W.jsxs)(ls,{$danger:e.danger,$depth:e.depth,disabled:e.disabled,onClick:t=>{i?m(t,e.children):h(e)},onPointerEnter:i?t=>m(t,e.children):void 0,onPointerLeave:i?p:void 0,role:`menuitem`,type:`button`,children:[(0,W.jsx)(us,{children:e.loading?(0,W.jsx)(ms,{}):e.icon}),(0,W.jsx)(ds,{children:e.label}),i?(0,W.jsx)(lo,{size:12}):e.checked&&(0,W.jsx)(_o,{size:12})]},`${e.label}-${r}`))}),t};return(0,ns.createPortal)((0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(is,{onContextMenu:e=>e.preventDefault(),ref:a,role:`menu`,style:{left:u,top:d,maxHeight:Math.max(160,window.innerHeight-d-8)},children:[r.length>0&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(as,{children:r.map((e,t)=>(0,W.jsxs)(os,{$danger:e.danger,disabled:e.disabled,onClick:()=>h(e),title:e.label,type:`button`,children:[(0,W.jsx)(ss,{children:e.icon}),(0,W.jsx)(cs,{children:e.label})]},`${e.label}-${t}`))}),(0,W.jsx)(ps,{})]}),g(n)]}),c&&(0,W.jsx)(is,{onPointerEnter:f,onPointerLeave:p,ref:o,role:`menu`,style:{left:c.left,minWidth:240,top:c.top,maxHeight:Math.max(160,window.innerHeight-c.top-8)},children:g(c.items)})]}),document.body)}var is=H.div`
    position: fixed;
    z-index: 2000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 5px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.55);
`,as=H.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,os=H.button`
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
`,ss=H.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,cs=H.span`
    max-width: 64px;
    overflow: hidden;
    font-size: 9px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ls=H.button`
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
    font-size: 12px;
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
`,us=H.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,ds=H.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,fs=H.div`
    padding: 7px 10px 3px;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ps=H.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,ms=H.span`
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
`,hs=[`quick`,`frequent`,`recent`,`home`,`drives`],gs=hs,_s={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`},vs={folder:e=>(0,W.jsx)(eo,{size:e}),home:e=>(0,W.jsx)($a,{size:e}),desktop:e=>(0,W.jsx)(Io,{size:e}),documents:e=>(0,W.jsx)(q,{size:e}),downloads:e=>(0,W.jsx)(Lo,{size:e}),pictures:e=>(0,W.jsx)(Ro,{size:e}),music:e=>(0,W.jsx)(zo,{size:e}),videos:e=>(0,W.jsx)(Bo,{size:e}),drive:e=>(0,W.jsx)(no,{size:e}),image:e=>(0,W.jsx)(So,{size:e}),video:e=>(0,W.jsx)(Co,{size:e}),audio:e=>(0,W.jsx)(wo,{size:e}),text:e=>(0,W.jsx)(bo,{size:e}),code:e=>(0,W.jsx)(xo,{size:e}),clock:e=>(0,W.jsx)(ho,{size:e}),star:e=>(0,W.jsx)(Vo,{size:e}),file:e=>(0,W.jsx)(to,{size:e}),archive:e=>(0,W.jsx)(To,{size:e}),pdf:e=>(0,W.jsx)(Eo,{size:e}),executable:e=>(0,W.jsx)(Do,{size:e}),font:e=>(0,W.jsx)(Oo,{size:e}),database:e=>(0,W.jsx)(ko,{size:e}),config:e=>(0,W.jsx)(Ao,{size:e}),spreadsheet:e=>(0,W.jsx)(jo,{size:e}),presentation:e=>(0,W.jsx)(Mo,{size:e}),document:e=>(0,W.jsx)(No,{size:e}),app:e=>(0,W.jsx)(yo,{size:e}),gear:e=>(0,W.jsx)(uo,{size:e}),pin:e=>(0,W.jsx)(fo,{size:e}),trash:e=>(0,W.jsx)(go,{size:e}),overview:e=>(0,W.jsx)(Po,{size:e}),book:e=>(0,W.jsx)(Ho,{size:e}),briefcase:e=>(0,W.jsx)(Uo,{size:e}),cloud:e=>(0,W.jsx)(Wo,{size:e}),gamepad:e=>(0,W.jsx)(Go,{size:e}),camera:e=>(0,W.jsx)(Ko,{size:e}),terminal:e=>(0,W.jsx)(qo,{size:e}),server:e=>(0,W.jsx)(Jo,{size:e}),package:e=>(0,W.jsx)(Yo,{size:e}),globe:e=>(0,W.jsx)(Xo,{size:e}),heart:e=>(0,W.jsx)(Zo,{size:e})};function ys(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function bs(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??hs)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||gs.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=ys(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${_s[n]??n}${xs(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function xs(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Ss({panel:e,size:t=16}){let n=vi(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,W.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?vs[e.icon]:void 0;if(r)return(0,W.jsx)(W.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,W.jsx)(eo,{size:t});case`recent`:return(0,W.jsx)(ho,{size:t});case`frequent`:return(0,W.jsx)(Vo,{size:t});case`drives`:return(0,W.jsx)(no,{size:t});case`home`:return(0,W.jsx)($a,{size:t});default:return(0,W.jsx)(eo,{size:t})}}function Cs({place:e,size:t=18}){let n=vi(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,W.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&vs[e.icon]?(0,W.jsx)(W.Fragment,{children:vs[e.icon](t)}):(0,W.jsx)(eo,{size:t})}function ws(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Ts({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)(`#3b82f6`),d=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let f=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),p=e=>i[e]??`#64748b`,m=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},h=(e,t)=>{a(n,{...i,[e]:t})},g=()=>{let e=s.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:l}),c(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,ns.createPortal)((0,W.jsxs)(Es,{"data-tag-menu":`true`,ref:d,style:{left:v,top:y},children:[(0,W.jsxs)(Ds,{children:[(0,W.jsx)(`span`,{children:`Tags`}),(0,W.jsx)(Os,{onClick:o,title:`Close`,type:`button`,children:(0,W.jsx)(vo,{size:11})})]}),(0,W.jsxs)(ks,{children:[f.length===0&&(0,W.jsx)(Ns,{children:`No tags yet.`}),f.map(e=>{let t=p(e),r=n.includes(e);return(0,W.jsxs)(As,{children:[(0,W.jsx)(js,{"aria-label":`Color of ${e}`,onChange:t=>h(e,t.target.value),title:`Change this tag's color`,type:`color`,value:t}),(0,W.jsxs)(Ms,{$color:t,$ink:ws(t),$on:r,onClick:()=>m(e),type:`button`,children:[r&&(0,W.jsx)(_o,{size:11}),(0,W.jsx)(`span`,{children:e})]})]},e)})]}),(0,W.jsxs)(Ps,{children:[(0,W.jsx)(js,{"aria-label":`Color of the new tag`,onChange:e=>u(e.target.value),title:`Color of the new tag`,type:`color`,value:l}),(0,W.jsx)(`input`,{onChange:e=>c(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),g())},placeholder:`New tag`,spellCheck:!1,value:s}),(0,W.jsx)(Fs,{onClick:g,type:`button`,children:`Add`})]})]}),document.body)}var Es=H.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
`,Ds=H.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,Os=H.button`
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
`,ks=H.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,As=H.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,js=H.input`
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
`,Ms=H.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    max-width: 100%;
    padding: 3px 9px;
    border: 1px solid ${({$on:e,$color:t})=>e?t:`var(--border-color)`};
    border-radius: 999px;
    background: ${({$on:e,$color:t})=>e?t:`transparent`};
    color: ${({$on:e,$ink:t})=>e?t:`var(--text-secondary)`};
    font-size: 10px;
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
`,Ns=H.span`
    font-size: 10px;
    color: var(--text-muted);
`,Ps=H.div`
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
`,Fs=H.button`
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
`,Is={file:to,folder:eo,text:bo,code:xo,image:So,video:Co,audio:wo,archive:To,pdf:Eo,executable:Do,font:Oo,database:ko,config:Ao,spreadsheet:jo,presentation:Mo,document:No},Ls={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Rs(e){let t=e.lastIndexOf(`.`);return t>0?Ls[e.slice(t).toLowerCase()]??`file`:`file`}function zs({name:e,size:t}){let n=Is[e??`file`]??to;return(0,W.jsx)(n,{size:t})}function Bs({path:e,name:t,isDirectory:n,size:r=18}){let i=_i(e,n);return i?(0,W.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,W.jsx)(eo,{size:r}):(0,W.jsx)(zs,{name:Rs(t),size:r})}var Vs=`application/x-yafm-paths`;function Hs(e){let t=e.dataTransfer.getData(Vs);if(t)try{let e=JSON.parse(t);if(Array.isArray(e.paths))return e.paths.filter(e=>typeof e==`string`)}catch{}return e.dataTransfer.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\/.test(e))}function Us(e,t){e.dataTransfer.setData(Vs,JSON.stringify({paths:t})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`move`}function Ws({items:e,visible:t,position:n,currentDirectory:r,onPosition:i,onAdd:a,onRemove:o,onClear:s,onClose:c,onTransfer:l}){let[u,d]=(0,_.useState)(()=>new Set),[f,p]=(0,_.useState)(!1),m=(0,_.useRef)(null),h=(0,_.useMemo)(()=>e.filter(e=>u.has(e.path)),[e,u]);if(!t||e.length===0)return null;let g=u.size===e.length&&e.length>0,v=e=>{d(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})};return(0,W.jsxs)(Ks,{$dragging:f,style:{left:n.x,top:n.y},children:[(0,W.jsxs)(qs,{onPointerDown:e=>{m.current={x:e.clientX,y:e.clientY,left:n.x,top:n.y},e.currentTarget.setPointerCapture(e.pointerId),p(!0)},onPointerMove:e=>{let t=m.current;t&&i({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},onPointerUp:e=>{m.current&&(m.current=null,p(!1),e.currentTarget.releasePointerCapture(e.pointerId))},children:[(0,W.jsxs)(Js,{children:[(0,W.jsx)(Yo,{size:13}),`Tray`,(0,W.jsx)(Ys,{children:e.length})]}),(0,W.jsxs)(Xs,{onPointerDown:e=>e.stopPropagation(),children:[(0,W.jsx)(Zs,{onClick:()=>{d(g?new Set:new Set(e.map(e=>e.path)))},title:g?`Select none`:`Select all`,type:`button`,children:g?`None`:`All`}),(0,W.jsx)(Zs,{onClick:s,title:`Remove everything from the tray`,type:`button`,children:`Clear`}),(0,W.jsx)(Qs,{onClick:c,title:`Hide the tray`,type:`button`,children:(0,W.jsx)(vo,{size:10})})]})]}),(0,W.jsx)($s,{onDragOver:e=>{e.dataTransfer.types.some(e=>e.toLowerCase()===Vs)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)},onDrop:e=>{let t=Hs(e);t.length>0&&(e.preventDefault(),a(t))},children:e.map(e=>{let t=u.has(e.path);return(0,W.jsxs)(ec,{$checked:t,draggable:!0,onClick:()=>v(e.path),onDragStart:n=>{Us(n,t&&u.size>0?h.map(e=>e.path):[e.path])},title:e.path,children:[(0,W.jsx)(tc,{$checked:t,onClick:t=>{t.stopPropagation(),v(e.path)},type:`button`,children:t&&(0,W.jsx)(_o,{size:8})}),(0,W.jsx)(Bs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,W.jsxs)(nc,{children:[(0,W.jsx)(rc,{children:e.name}),(0,W.jsx)(ic,{children:Gs(e.path)})]})]},e.path)})}),(0,W.jsxs)(ac,{children:[(0,W.jsxs)(oc,{disabled:h.length===0||!r,onClick:()=>{let e=h.map(e=>e.path);e.length!==0&&(l(e,r,!0),d(new Set))},type:`button`,children:[`Move `,h.length||``,` here`]}),(0,W.jsx)(oc,{$danger:!0,disabled:h.length===0,onClick:()=>{let e=h.map(e=>e.path);e.length!==0&&(o(e),d(new Set))},type:`button`,children:`Remove`})]})]})}function Gs(e){let t=e.replace(/[\\/]+$/,``),n=Math.max(t.lastIndexOf(`\\`),t.lastIndexOf(`/`));return n>0?t.slice(0,n):t}var Ks=H.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(10, 15, 24, 0.97);
    box-shadow: 0 22px 50px rgba(2, 6, 23, 0.6);
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
`,qs=H.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 7px 8px;
    border-bottom: 1px solid var(--border-color);
    cursor: grab;

    &:active {
        cursor: grabbing;
    }
`,Js=H.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,Ys=H.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(148, 163, 184, 0.18);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,Xs=H.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,Zs=H.button`
    padding: 2px 6px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 9px;
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,Qs=H.button`
    display: grid;
    place-items: center;
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,$s=H.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,ec=H.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 5px 6px;
    border: 1px solid ${({$checked:e})=>e?`rgba(59, 130, 246, 0.4)`:`transparent`};
    border-radius: var(--radius-sm);
    background: ${({$checked:e})=>e?`rgba(59, 130, 246, 0.1)`:`transparent`};
    cursor: grab;

    &:hover {
        background: var(--bg-card-hover);
    }

    &:active {
        cursor: grabbing;
    }
`,tc=H.button`
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
`,nc=H.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,rc=H.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ic=H.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ac=H.div`
    display: flex;
    gap: 5px;
    padding: 6px 8px;
    border-top: 1px solid var(--border-color);
`,oc=H.button`
    flex: 1;
    padding: 5px 6px;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    background: ${({$danger:e})=>e?`transparent`:`var(--accent-primary)`};
    color: ${({$danger:e})=>e?`var(--text-secondary)`:`#fff`};
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:hover:not(:disabled) {
        filter: brightness(1.08);
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`,sc=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],cc=190,lc=120;function uc({listing:e,loading:t,error:n,find:r=wi,view:i,showImages:a,imageStripHeight:o=cc,onImageStripHeight:s,onSort:c,onSetTags:l,onOpen:u,onOpenFile:d,showCheckboxes:f=!0,openOnSingleClick:p=!1,shortcuts:m=ti,enableShortcuts:h=!0,refreshToken:g=0,onRefresh:v,onTray:y,onTransfer:b}){let x=Ji(),S=(0,_.useRef)(null),C=(0,_.useRef)(null),w=(0,_.useRef)(null),[T,ee]=(0,_.useState)(null),[E,D]=(0,_.useState)(o),[O,k]=(0,_.useState)(()=>new Set),te=(0,_.useRef)(O),ne=(0,_.useRef)([]);te.current=O;let[A,re]=(0,_.useState)(null),[j,ie]=(0,_.useState)(!1),M=(0,_.useRef)(0),N=(0,_.useRef)(0),[ae,oe]=(0,_.useState)({verbs:[],safe:!0,loading:!1}),[se,ce]=(0,_.useState)({recommended:[],other:[],loading:!1});(0,_.useEffect)(()=>{k(new Set),re(null),oe({verbs:[],safe:!0,loading:!1}),ce({recommended:[],other:[],loading:!1}),M.current+=1,N.current+=1,w.current=null},[e?.path]),(0,_.useEffect)(()=>{D(o)},[o]),(0,_.useEffect)(()=>{k(new Set),w.current=null},[g]);let le=e=>{C.current={y:e.clientY,height:E},e.currentTarget.setPointerCapture(e.pointerId)},ue=e=>{let t=C.current;if(!t)return;let n=Math.max(lc,Math.round(window.innerHeight*.7));D(Math.min(n,Math.max(lc,t.height+t.y-e.clientY)))},de=e=>{C.current&&(C.current=null,e.currentTarget.releasePointerCapture(e.pointerId),s?.(E))},fe=()=>{D(cc),s?.(cc)};(0,_.useEffect)(()=>{S.current?.scrollIntoView({block:`nearest`})},[r.currentPath]);let P=r.query.length>0,F=(0,_.useMemo)(()=>sc.filter(e=>i.columns?.includes(e.id)),[i.columns]),pe=i.columns?.includes(`linkTarget`)??!1,I=(0,_.useMemo)(()=>`minmax(160px, 1fr) ${F.map(e=>`${e.width}px`).join(` `)}`.trim(),[F]),L=(0,_.useMemo)(()=>e?mc(e.entries.map(t=>{let n=t.isDirectory?Yi(x,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:P?Ti(i,r):null,tags:e.tags[t.name]??[]}}).filter(e=>!P||r.mode===`dim`||e.ranges!==null),i,e):[],[e,P,r,x,i.sort,i.sortDescending]);ne.current=L;let R=i.mode===`grid`,me=(0,_.useMemo)(()=>R?_c(L,gc):[],[L,R]),he=(0,_.useMemo)(()=>a?L.filter(e=>!e.entry.isDirectory&&Ii(e.entry.name)):[],[L,a]),ge=(0,_.useMemo)(()=>a?_c(he,hc):[],[he,a]),_e=(0,_.useMemo)(()=>L.map(e=>e.entry.fullPath),[L]),z=e?.path??``,B=(0,_.useCallback)((e,t)=>{let n=e.ctrlKey||e.metaKey;k(r=>{if(e.shiftKey&&w.current!==null){let e=_e.indexOf(w.current),i=_e.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(_e[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),w.current=t,e}return w.current=t,new Set([t])})},[_e]),ve=(0,_.useCallback)(e=>{w.current=e,k(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},[]),ye=(0,_.useCallback)(()=>{w.current=null,k(new Set)},[]),be=(0,_.useCallback)(()=>{M.current+=1,N.current+=1,re(null)},[]),xe=(0,_.useCallback)((e,t)=>{e.isDirectory?u(e.fullPath,ii(t)):d?.(e.fullPath)},[u,d]),Se=(0,_.useCallback)((e,t,n)=>{ee({entry:e,x:t,y:n})},[]),Ce=(0,_.useRef)(null),we=(0,_.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;Us(e,O.has(n)?[...O]:[n])},[O]),Te=(0,_.useCallback)(e=>{if(!e.dataTransfer.types.some(e=>e.toLowerCase()===`application/x-yafm-paths`))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);Ce.current=t?.dataset.directory===`true`?t.dataset.path??z:z,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[z]),Ee=(0,_.useCallback)(e=>{let t=Hs(e),n=Ce.current??z;Ce.current=null,t.length!==0&&b&&(e.preventDefault(),b(t,n,!e.ctrlKey))},[z,b]),De=(0,_.useCallback)((e,t)=>{e.preventDefault(),e.stopPropagation();let n=te.current;t&&!n.has(t)&&k(new Set([t])),t&&(w.current=t);let r=t?n.has(t)?[...n]:[t]:[],i=t?r:z?[z]:[],a=++M.current,o=t?ne.current.find(e=>e.entry.fullPath===t):void 0,s=o&&!o.entry.isDirectory&&r.length===1?o.entry.fullPath:null,c=++N.current;re({x:e.clientX,y:e.clientY,paths:r,background:!t}),oe({verbs:[],safe:!0,loading:i.length>0}),s?(ce({recommended:[],other:[],loading:!0}),Gr(s).then(e=>{N.current===c&&ce({...e,loading:!1})},()=>{N.current===c&&ce({recommended:[],other:[],loading:!1})})):ce({recommended:[],other:[],loading:!1}),Pr().then(ie,()=>ie(!1)),i.length!==0&&Xr(i).then(e=>{M.current===a&&oe({...e,loading:!1})},()=>{M.current===a&&oe({verbs:[],safe:!0,loading:!1})})},[z]),Oe=()=>v?.(),ke=async(t,n=!1)=>{if(await Nr(t,n)){ie(!0);let n=new Map((e?.entries??[]).map(e=>[e.fullPath,e]));y?.(t.map(e=>{let t=n.get(e);return{path:e,name:t?.name??Hi(e),isDirectory:t?.isDirectory??!1}}))}},Ae=async e=>{await Rr(e)?Oe():window.alert(`Nothing on the clipboard could be pasted here.`)},je=async()=>{let e=await Vr(z);e.ok?Oe():window.alert(e.error??`Could not create the folder.`)},Me=async e=>{let t=window.prompt(`Rename`,e.name);if(t===null||t.trim().length===0||t===e.name)return;let n=await Br(e.fullPath,t);n.ok?(ye(),Oe()):window.alert(n.error??`Could not rename the entry.`)},Ne=async(e,t=!1)=>{let n=t?`Permanently delete ${e.length===1?`this item`:`${e.length} items`}? This cannot be undone.`:`Move ${e.length===1?`this item`:`${e.length} items`} to the recycle bin?`;window.confirm(n)&&(await zr(e,t)?(ye(),Oe()):window.alert(t?`The shell could not delete the selection.`:`The shell could not move the selection to the recycle bin.`))},Pe=async e=>{let t=await Qr(e);t.ok?Oe():window.alert(t.error??`Could not create the ZIP file.`)},Fe=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}};(0,_.useEffect)(()=>{if(!h||A)return;let e=e=>{if(ci(e.target))return;let t=ai(e),n=[...O],r=n.length===1?L.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};t===`ctrl+d`||t===m.copy?i(()=>{n.length>0&&ke(n)}):t===m.cut?i(()=>{n.length>0&&ke(n,!0)}):t===m.paste?i(()=>void Ae(z)):t===m.delete?i(()=>{n.length>0&&Ne(n)}):t===m.deletePermanently?i(()=>{n.length>0&&Ne(n,!0)}):t===m.selectAll?i(()=>{k(new Set(_e)),w.current=_e[0]??null}):t===m.invertSelection?i(()=>{k(new Set(_e.filter(e=>!O.has(e)))),w.current=_e[0]??null}):t===m.rename&&r?i(()=>void Me(r)):t===m.open&&r?i(()=>{r.isDirectory?u(r.fullPath):d?.(r.fullPath)}):t===m.newFolder||t===`f10`?i(()=>void je()):t===m.terminal?i(()=>void Wr(z)):t===m.properties?i(()=>void Hr(n.length>0?n:z?[z]:[])):t===m.refresh&&i(Oe)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[_e,ke,je,z,h,A,u,d,Ae,Oe,Ne,Me,L,O,m]);let Ie=[],Le=[],Re=A?.paths[0],ze=Re?L.find(e=>e.entry.fullPath===Re)?.entry:void 0,Be=A?.paths.length===1,Ve=A?.background?z?[z]:[]:A?.paths??[],He=ae.safe?`Shell actions (standard)`:`Shell actions`;if(A?.background)Ie.push({label:`Open in Terminal`,icon:(0,W.jsx)(qo,{size:14}),onSelect:()=>void Wr(z)}),Ie.push({label:`Show in Explorer`,icon:(0,W.jsx)(eo,{size:14}),separatorBefore:!0,onSelect:()=>void Yr(z)}),Le.push({label:`New folder`,icon:(0,W.jsx)(oo,{size:16}),onSelect:()=>void je()},{label:`Paste`,icon:(0,W.jsx)(es,{size:16}),disabled:!j,onSelect:()=>void Ae(z)},{label:`Refresh`,icon:(0,W.jsx)(ao,{size:16}),onSelect:Oe},{label:`Properties`,icon:(0,W.jsx)(uo,{size:16}),onSelect:()=>void Hr([z])});else if(A){if(Ie.push({label:`Open`,icon:(0,W.jsx)(co,{size:14}),onSelect:()=>{ze&&(ze.isDirectory?u(ze.fullPath):d?.(ze.fullPath))}}),ze?.isDirectory&&(Ie.push({label:`Open in new tab`,icon:(0,W.jsx)(oo,{size:14}),onSelect:()=>u(ze.fullPath,!0)}),Ie.push({label:`Paste into folder`,icon:(0,W.jsx)(es,{size:14}),disabled:!j,onSelect:()=>void Ae(ze.fullPath)}),Ie.push({label:`Open in Terminal`,icon:(0,W.jsx)(qo,{size:14}),onSelect:()=>void Wr(ze.fullPath)})),Be&&ze&&!ze.isDirectory){let e=[];se.loading?e.push({label:`Loading apps…`,loading:!0,disabled:!0,onSelect:()=>void 0}):(se.recommended.forEach(t=>{e.push({label:t.name,group:`Suggested apps`,icon:t.icon?(0,W.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,W.jsx)(yo,{size:14}),onSelect:()=>void Kr(ze.fullPath,t.path).then(e=>{e||Ur(ze.fullPath)})})}),se.other.forEach(t=>{e.push({label:t.name,group:`Other apps`,icon:t.icon?(0,W.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,W.jsx)(yo,{size:14}),onSelect:()=>void Kr(ze.fullPath,t.path).then(e=>{e||Ur(ze.fullPath)})})})),e.push({label:`Choose another app…`,icon:(0,W.jsx)(yo,{size:14}),separatorBefore:!0,onSelect:()=>void Ur(ze.fullPath)}),Ie.push({label:`Open with`,icon:(0,W.jsx)(yo,{size:14}),children:e,onSelect:()=>void Ur(ze.fullPath)})}Ie.push({label:`Compress to ZIP`,icon:(0,W.jsx)(To,{size:14}),separatorBefore:!0,onSelect:()=>void Pe(A.paths)}),Ie.push({label:`Copy as path`,icon:(0,W.jsx)(Qo,{size:14}),onSelect:()=>void Fe(A.paths)}),Ie.push({label:`Show in Explorer`,icon:(0,W.jsx)(eo,{size:14}),separatorBefore:!0,onSelect:()=>void Yr(A.paths[0])}),Le.push({label:`Cut`,icon:(0,W.jsx)($o,{size:16}),onSelect:()=>void ke(A.paths,!0)},{label:`Copy`,icon:(0,W.jsx)(Qo,{size:16}),onSelect:()=>void ke(A.paths,!1)}),Be&&ze&&Le.push({label:`Rename`,icon:(0,W.jsx)(Fo,{size:16}),onSelect:()=>void Me(ze)}),Le.push({label:`Delete`,icon:(0,W.jsx)(go,{size:16}),danger:!0,onSelect:()=>void Ne(A.paths)},{label:`Properties`,icon:(0,W.jsx)(uo,{size:16}),onSelect:()=>void Hr(A.paths)})}return A&&(ae.loading?Ie.push({label:`Reading shell actions…`,group:He,loading:!0,disabled:!0,onSelect:()=>void 0}):ae.verbs.forEach(e=>{Ie.push({label:e.label,group:e.group??He,depth:e.group?e.depth:0,icon:(0,W.jsx)(dc,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void Zr(Ve,ae.safe,e.verb,e.offset)})})),n?(0,W.jsx)(pl,{children:(0,W.jsx)(hl,{children:n})}):!e&&!t?(0,W.jsx)(pl,{children:(0,W.jsx)(ml,{children:`Nothing selected.`})}):i.mode===`grid`?(0,W.jsxs)(Nc,{children:[(0,W.jsxs)(Vc,{onClick:e=>{e.target===e.currentTarget&&ye()},onContextMenu:e=>De(e),onDragOver:Te,onDragStart:we,onDrop:Ee,children:[t&&!e?(0,W.jsx)(Kc,{$size:i.gridSize,children:(0,W.jsx)(Ec,{size:i.gridSize})}):(0,W.jsx)(Oc,{counts:e?.counts,currentPath:P?r.currentPath:null,groups:me,gridSize:i.gridSize,innerRef:S,onContextMenu:De,onOpen:u,onOpenFile:d,onSelect:B,onToggle:ve,openOnSingleClick:p,searching:P,selected:O,showCheckboxes:f,showTarget:pe}),!t&&e&&L.length===0&&(0,W.jsx)(fl,{children:(0,W.jsx)(ml,{children:P&&r.mode===`hide`?`No entries match the search.`:`This folder is empty.`})})]}),A&&(0,W.jsx)(rs,{items:Ie,onClose:be,quick:Le,x:A.x,y:A.y})]}):(0,W.jsxs)(Nc,{children:[(0,W.jsxs)(Pc,{style:{gridTemplateColumns:I},children:[(0,W.jsxs)(Fc,{onClick:()=>c(`name`),type:`button`,children:[`Name`,fc(i,`name`)]}),F.map(e=>(0,W.jsxs)(Fc,{onClick:()=>c(e.id),type:`button`,children:[e.label,fc(i,e.id)]},e.id))]}),(0,W.jsxs)(Ic,{onClick:e=>{e.target===e.currentTarget&&ye()},onContextMenu:e=>De(e),onDragOver:Te,onDragStart:we,onDrop:Ee,children:[t&&!e?(0,W.jsx)(Tc,{template:I,columns:F.length}):L.map(t=>{let n=t.entry.fullPath;return(0,W.jsx)(kc,{current:P&&n===r.currentPath,dim:P&&t.ranges===null,iconSize:i.iconSize,innerRef:S,listing:e,onContextMenu:De,onOpen:xe,onSelect:B,onTagEdit:Se,onToggle:ve,openOnSingleClick:p,row:t,selected:O.has(n),showCheckboxes:f,showTarget:pe,template:I,visible:F},n)}),!t&&e&&L.length===0&&(0,W.jsx)(pl,{children:(0,W.jsx)(ml,{children:P&&r.mode===`hide`?`No entries match the search.`:`This folder is empty.`})})]}),a&&he.length>0&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(Lc,{onDoubleClick:fe,onPointerDown:le,onPointerMove:ue,onPointerUp:de,title:`Drag to resize; double-click to reset`}),(0,W.jsxs)(Rc,{style:{height:E},children:[(0,W.jsxs)(zc,{children:[`Preview`,(0,W.jsx)(Bc,{children:he.length})]}),(0,W.jsx)(Vc,{onClick:e=>{e.target===e.currentTarget&&ye()},onContextMenu:e=>De(e),children:(0,W.jsx)(Oc,{counts:e?.counts,currentPath:P?r.currentPath:null,groups:ge,gridSize:i.gridSize,onContextMenu:De,onOpen:u,onOpenFile:d,onSelect:B,onToggle:ve,openOnSingleClick:p,searching:P,selected:O,showCheckboxes:f,showTarget:pe})})]})]}),T&&e&&(0,W.jsx)(Ts,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>l?.(T.entry.name,e,t),onClose:()=>ee(null),tags:e.tags[T.entry.name]??[],x:T.x,y:T.y}),A&&(0,W.jsx)(rs,{items:Ie,onClose:be,quick:Le,x:A.x,y:A.y})]})}function dc({source:e}){if(!e)return(0,W.jsx)(yo,{size:14});if(e.startsWith(`data:`))return(0,W.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,W.jsx)(co,{size:14});case`document`:return(0,W.jsx)(No,{size:14});case`cut`:return(0,W.jsx)($o,{size:14});case`copy`:return(0,W.jsx)(Qo,{size:14});case`paste`:return(0,W.jsx)(es,{size:14});case`trash`:return(0,W.jsx)(go,{size:14});case`pencil`:return(0,W.jsx)(Fo,{size:14});case`gear`:return(0,W.jsx)(uo,{size:14});case`star`:return(0,W.jsx)(Vo,{size:14});case`pin`:return(0,W.jsx)(fo,{size:14});case`executable`:return(0,W.jsx)(Do,{size:14});case`share`:return(0,W.jsx)(ts,{size:14});case`arrow`:return(0,W.jsx)(co,{size:14});default:return(0,W.jsx)(yo,{size:14})}}function fc(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var pc=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function mc(e,t,n){let r=e=>{switch(t.sort){case`type`:return bc(e);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},i=new Map(e.map(e=>[e,r(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=i.get(e),a=i.get(n),o=typeof r==`number`&&typeof a==`number`?r-a:pc.compare(String(r),String(a));return t.sortDescending?-o:o})}var hc=Ni.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Fi(t.entry.name)===e})),gc=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...hc.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function _c(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function vc(e){return Math.max(24,Math.min(e-56,160))}var yc={file:`file`,folder:`folder`,text:`text file`,code:`source file`,image:`image`,video:`video`,audio:`audio`,archive:`archive`,pdf:`PDF`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function bc(e){let t=e.name.toLowerCase();if(t.endsWith(`.lnk`))return`Shortcut`;if(t.endsWith(`.url`)||t.endsWith(`.website`))return`Internet shortcut`;if(e.linkTarget!=null)return e.isDirectory?`Folder link`:`Symbolic link`;if(e.isDirectory)return`Folder`;let n=e.name.lastIndexOf(`.`),r=n>0&&n<e.name.length-1?e.name.slice(n+1).toUpperCase():``,i=yc[Rs(e.name)]??`file`;return r.length>0?`${r} ${i}`:`File`}function xc(e,t,n){switch(e){case`type`:return bc(t);case`size`:return Cc(t,n.folderSizes);case`modified`:return Bi(t.modified);case`created`:return Bi(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:`Broken`;default:return``}}function Sc({name:e,ranges:t}){if(!t||t.length===0)return(0,W.jsx)(W.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,W.jsx)(dl,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,W.jsx)(W.Fragment,{children:n})}function Cc(e,t){if(!e.isDirectory)return Ri(e.size);let n=t[e.name];return n===void 0?`—`:Ri(n)}function wc({entry:e,size:t=18}){let n=_i(e.fullPath,e.isDirectory,t>32),r=vi(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,W.jsx)(Ac,{$size:t,children:e.iconSource?.startsWith(`icon:`)?(0,W.jsx)(zs,{name:e.iconSource.slice(5),size:t}):r?(0,W.jsx)(`img`,{alt:``,height:t,src:r,width:t}):n?(0,W.jsx)(`img`,{alt:``,height:t,src:n,width:t}):e.isDirectory?(0,W.jsx)(eo,{size:t}):(0,W.jsx)(zs,{name:Rs(e.name),size:t})})}function Tc({template:e,columns:t}){return(0,W.jsx)(W.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,W.jsxs)(qc,{style:{gridTemplateColumns:e},children:[(0,W.jsxs)(Xc,{children:[(0,W.jsx)(Jc,{style:{flexShrink:0,height:18,width:18}}),(0,W.jsx)(Jc,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,W.jsx)(Jc,{style:{width:t%2==0?44:92}},t))]},r))})}function Ec({size:e}){return(0,W.jsx)(W.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,W.jsxs)(il,{$dim:!1,$current:!1,$selected:!1,children:[(0,W.jsx)(al,{children:(0,W.jsx)(Jc,{style:{height:e,width:e}})}),(0,W.jsx)(sl,{children:(0,W.jsx)(Jc,{style:{height:9,width:`${t}%`}})})]},n))})}var Dc=(0,_.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,onSelect:u,onToggle:d,onContextMenu:f,onOpen:p,onOpenFile:m}){let h=Ji(),g=!e.entry.isDirectory&&Ii(e.entry.name),v=Si(g?e.entry.fullPath:null,192,e.entry.modified),[y,b]=(0,_.useState)(!1),x=e.entry.fullPath,S=t=>{e.entry.isDirectory?p(x,ii(t)):m?.(x)};return(0,W.jsxs)(il,{$current:t,$dim:n,$selected:s,onClick:e=>{u(e,x),l&&S(e)},onContextMenu:e=>f(e,x),onDoubleClick:e=>{l||S(e)},ref:t?o:void 0,title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":x,draggable:!0,children:[c&&(0,W.jsx)(Mc,{$checked:s,onClick:e=>{e.stopPropagation(),d(x)},onDoubleClick:e=>e.stopPropagation(),title:s?`Deselect`:`Select`,type:`button`,children:s&&(0,W.jsx)(_o,{size:10})}),(0,W.jsx)(al,{children:g&&v&&!y?(0,W.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>b(!0),src:v}):(0,W.jsx)(ol,{children:e.place&&h.useIcons?(0,W.jsx)(Cs,{place:e.place,size:r}):(0,W.jsx)(wc,{entry:e.entry,size:r})})}),(0,W.jsxs)(sl,{children:[(0,W.jsx)(cl,{$broken:e.entry.linkValid===!1,children:(0,W.jsx)(Sc,{name:e.label,ranges:e.ranges})}),(0,W.jsx)(ll,{children:e.entry.isDirectory?i===void 0?bc(e.entry):`${bc(e.entry)} · ${i} items`:`${bc(e.entry)} · ${Ri(e.entry.size)}`}),a&&e.entry.linkTarget&&(0,W.jsxs)(ul,{title:e.entry.linkTarget,children:[`→ `,e.entry.linkTarget]})]})]})});function Oc({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,onSelect:u,onToggle:d,onContextMenu:f,onOpen:p,onOpenFile:m}){return(0,W.jsx)(W.Fragment,{children:e.map(e=>(0,W.jsxs)(Hc,{children:[(0,W.jsxs)(Uc,{children:[e.label,(0,W.jsx)(Wc,{children:e.rows.length}),(0,W.jsx)(Gc,{})]}),(0,W.jsx)(Kc,{$size:t,children:e.rows.map(e=>(0,W.jsx)(Dc,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:vc(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:f,onOpen:p,onOpenFile:m,onSelect:u,onToggle:d,openOnSingleClick:l,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}var kc=(0,_.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,template:c,visible:l,listing:u,innerRef:d,onSelect:f,onToggle:p,onContextMenu:m,onOpen:h,onTagEdit:g}){let _=Ji(),v=e.entry.fullPath;return(0,W.jsxs)(Yc,{$current:t,$dim:n,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{f(t,v),o&&h(e.entry,t)},onContextMenu:e=>m(e,v),onDoubleClick:t=>{o||h(e.entry,t)},ref:t?d:void 0,style:{gridTemplateColumns:c},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":v,draggable:!0,children:[(0,W.jsxs)(Xc,{children:[i&&(0,W.jsx)(jc,{$checked:r,onClick:e=>{e.stopPropagation(),p(v)},onDoubleClick:e=>e.stopPropagation(),title:r?`Deselect`:`Select`,type:`button`,children:r&&(0,W.jsx)(_o,{size:10})}),e.place&&_.useIcons?(0,W.jsx)(Ac,{children:(0,W.jsx)(Cs,{place:e.place,size:s})}):(0,W.jsx)(wc,{entry:e.entry,size:s}),(0,W.jsx)(Zc,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,W.jsx)(Sc,{name:e.label,ranges:e.ranges})}),a&&e.entry.linkTarget&&(0,W.jsxs)(Qc,{title:e.entry.linkTarget,children:[`→ `,e.entry.linkTarget]})]}),l.map(t=>(0,W.jsx)($c,{children:t.id===`tags`?(0,W.jsx)(el,{onClick:t=>{t.stopPropagation(),g(e.entry,t.clientX,t.clientY)},title:`Edit tags`,type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=u.tagColors?.[e]??`#64748b`;return(0,W.jsx)(tl,{$color:t,$ink:ws(t),children:e},e)}):(0,W.jsx)(nl,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,W.jsx)(rl,{children:`Broken`}):xc(t.id,e.entry,u)},t.id))]})}),Ac=H.span`
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
`,jc=H.button`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    padding: 0;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`rgba(59, 130, 246, 0.8)`:`transparent`};
    color: #fff;
    cursor: pointer;
    transition: background 100ms ease, border-color 100ms ease;

    &:hover {
        border-color: var(--border-color-focus);
        background: ${({$checked:e})=>e?`rgba(59, 130, 246, 0.9)`:`rgba(148, 163, 184, 0.16)`};
    }
`,Mc=H(jc)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(59, 130, 246, 0.9)`:`rgba(15, 23, 42, 0.6)`};
    backdrop-filter: blur(4px);
`,Nc=H.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    flex: 1;
`,Pc=H.div`
    display: grid;
    gap: 16px;
    padding: 10px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Fc=H.button`
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
`,Ic=H.div`
    flex: 1;
    min-height: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,Lc=H.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(59, 130, 246, 0.35);
    }
`,Rc=H.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: var(--bg-secondary);
`,zc=H.div`
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
`,Bc=H.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,Vc=H.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,Hc=H.section`
    & + & {
        margin-top: 22px;
    }
`,Uc=H.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Wc=H.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Gc=H.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,Kc=H.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,qc=H.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,Jc=H.span`
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
`,Yc=H.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
    border: 1px solid ${({$selected:e})=>e?`rgba(59, 130, 246, 0.35)`:`transparent`};
    border-radius: var(--radius-sm);
    background: ${({$current:e,$selected:t})=>e?`rgba(59, 130, 246, 0.14)`:t?`rgba(59, 130, 246, 0.09)`:`transparent`};
    box-shadow: ${({$current:e})=>e?`inset 0 0 0 1px rgba(59, 130, 246, 0.5)`:`none`};
    font-size: 13px;
    color: var(--text-secondary);
    opacity: ${({$hidden:e,$dim:t})=>t?.3:e?.55:1};
    cursor: default;
    user-select: none;
    content-visibility: auto;
    contain-intrinsic-size: auto 40px;
    transition: background 100ms ease, border-color 100ms ease, opacity 100ms ease;

    &:hover {
        background: var(--bg-card-hover);
        border-color: var(--border-color);
        color: var(--text-primary);
    }
`,Xc=H.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,Zc=H.span`
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Qc=H.span`
    overflow: hidden;
    min-width: 0;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--accent-primary);
    text-overflow: ellipsis;
    white-space: nowrap;
`,$c=H.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,el=H.button`
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
`,tl=H.span`
    max-width: 100%;
    padding: 1px 7px;
    overflow: hidden;
    border-radius: 999px;
    background: ${({$color:e})=>e};
    color: ${({$ink:e})=>e};
    font-family: var(--font-sans);
    font-size: 9px;
    line-height: 1.5;
    text-overflow: ellipsis;
    white-space: nowrap;
`,nl=H.span`
    color: var(--text-muted);
    font-size: 10px;
`,rl=H.span`
    color: #fca5a5;
`,il=H.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    overflow: hidden;
    border: 1px solid ${({$current:e,$selected:t})=>e?`rgba(59, 130, 246, 0.5)`:t?`rgba(59, 130, 246, 0.4)`:`var(--border-color)`};
    border-radius: var(--radius-md);
    background: ${({$current:e,$selected:t})=>e?`rgba(59, 130, 246, 0.14)`:t?`rgba(59, 130, 246, 0.1)`:`var(--bg-primary)`};
    opacity: ${({$dim:e})=>e?.3:1};
    cursor: default;
    user-select: none;
    content-visibility: auto;
    transition: background 100ms ease, border-color 100ms ease, opacity 100ms ease;

    &:hover {
        background: var(--bg-card-hover);
        border-color: var(--border-color-hover);
    }
`,al=H.div`
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
`,ol=H.span`
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
`,sl=H.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding: 18px 8px 6px;
    background: linear-gradient(to top, rgba(2, 6, 23, 0.92), rgba(2, 6, 23, 0));
    overflow: hidden;
`,cl=H.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,ll=H.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,ul=H.span`
    width: 100%;
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--accent-primary);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,dl=H.mark`
    border-radius: 2px;
    background: rgba(59, 130, 246, 0.5);
    color: var(--text-primary);
`,fl=H.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,pl=H.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,ml=H.p`
    font-size: 13px;
    color: var(--text-muted);
`,hl=H.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`;function gl({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,onQuery:s,onPrevious:c,onNext:l,onMatchCase:u,onRegex:d,onMode:f,onClose:p}){let m=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=m.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let h=e=>{e(),m.current?.focus()};return(0,W.jsxs)(_l,{children:[(0,W.jsx)(ro,{}),(0,W.jsx)(vl,{"aria-label":`Search this folder`,onChange:e=>s(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?c():l()),e.key===`Escape`&&(e.preventDefault(),p())},placeholder:`Search this folder`,ref:m,spellCheck:!1,value:e}),(0,W.jsx)(yl,{children:i===0?`0/0`:`${a+1}/${i}`}),(0,W.jsx)(bl,{onClick:()=>h(c),title:`Previous match (Shift+Enter)`,type:`button`,children:(0,W.jsx)(lo,{size:12})}),(0,W.jsx)(bl,{$down:!0,onClick:()=>h(l),title:`Next match (Enter)`,type:`button`,children:(0,W.jsx)(lo,{size:12})}),(0,W.jsx)(xl,{$on:n,onClick:()=>h(u),title:`Match case`,type:`button`,children:`Aa`}),(0,W.jsx)(xl,{$on:r,onClick:()=>h(d),title:`Regular expression`,type:`button`,children:`.*`}),(0,W.jsx)(Sl,{$on:t===`hide`,onClick:()=>h(f),title:t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`,type:`button`,children:t===`hide`?`Hide`:`Dim`}),(0,W.jsx)(bl,{onClick:p,title:`Close search (Esc)`,type:`button`,children:(0,W.jsx)(vo,{size:12})})]})}var _l=H.div`
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
`,vl=H.input`
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
`,yl=H.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,bl=H.button`
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
`,xl=H.button`
    min-width: 24px;
    height: 22px;
    padding: 0 4px;
    border: 1px solid ${({$on:e})=>e?`var(--border-color-focus)`:`transparent`};
    border-radius: var(--radius-sm);
    background: ${({$on:e})=>e?`rgba(59, 130, 246, 0.18)`:`transparent`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font-family: var(--font-mono);
    font-size: 10px;
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
    }
`,Sl=H(xl)`
    min-width: 34px;
    font-family: var(--font-sans);
    font-size: 10px;
`;function Cl({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=(0,_.useRef)(null),a=(0,_.useRef)(null),[o,s]=(0,_.useState)(null);return(0,_.useLayoutEffect)(()=>{let e=i.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();s({top:t.bottom+6,left:t.left})},[]),(0,_.useLayoutEffect)(()=>{if(!o||!a.current)return;let e=a.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,o.top-e.height-12):o.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):o.left;(t!==o.top||n!==o.left)&&s({top:t,left:n})},[o]),(0,_.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(`span`,{ref:i,style:{display:`none`}}),o&&(0,ns.createPortal)((0,W.jsxs)(wl,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:a,style:{position:`fixed`,top:o.top,left:o.left},children:[Object.keys(vs).map(n=>(0,W.jsx)(Tl,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:vs[n](16)},n)),(0,W.jsx)(Tl,{onClick:async()=>{let e=await Tr();e&&t(`file:${e}`)},title:`Choose an image`,type:`button`,children:(0,W.jsx)(oo,{size:13})}),r&&(0,W.jsx)(Tl,{$active:!e,onClick:()=>t(null),title:`Default`,type:`button`,children:(0,W.jsx)(vo,{size:12})})]}),document.body)]})}var wl=H.div`
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
`,Tl=H.button`
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: 1px solid ${({$active:e})=>e?`var(--border-color-focus)`:`transparent`};
    border-radius: 5px;
    background: ${({$active:e})=>e?`rgba(99, 102, 241, 0.24)`:`transparent`};
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,El=H.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 14px 26px 34px;
`,Dl=H.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    flex-wrap: wrap;
    padding-bottom: 14px;
`,Ol=H.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,kl=H.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(99, 102, 241, 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 11px;
    cursor: pointer;
`,Al=H.button`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 3px 8px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,jl=H.div`
    position: relative;
    display: inline-flex;
`,Ml=H.div`
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
`,Nl=H.button`
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
`,Pl=H.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,Fl=H.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
`,Il=H.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Ll=H.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,Rl=H.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,zl=H.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,Bl=H.input`
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
`,Vl=H.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    padding: 0;
    border: 1px solid ${({$active:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: 5px;
    background: ${({$active:e})=>e?`rgba(99, 102, 241, 0.24)`:`var(--bg-input)`};
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
`,Hl=H.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,Ul=H.div`
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
`,Wl=H.span`
    display: grid;
    place-items: center;
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 8px;
    background: rgba(99, 102, 241, 0.16);
    color: var(--accent-primary);

    img {
        width: 18px;
        height: 18px;
        object-fit: contain;
    }
`,Gl=H.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,Kl=H.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,ql=H.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,Jl=H.button`
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
`,Yl=H.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,Xl=H.button`
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
`,Zl=H.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Ql=H.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,$l=H.div`
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
`,eu=H.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,tu=H.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,nu=H.button`
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
`,ru=H.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,iu=H.button`
    display: inline-grid;
    place-items: center;
    padding: 0;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: inherit;
    cursor: pointer;

    &:hover {
        background: rgba(99, 102, 241, 0.22);
    }
`,au=H.button`
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
`,ou=H.button`
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
        background: rgba(99, 102, 241, 0.28);
        color: #c7d2fe;
        opacity: 1;
    }
`,su=H.span`
    display: inline-flex;
    align-items: center;
    gap: 2px;
    max-width: 100%;
    padding: 1px 2px 1px 6px;
    border: 1px solid var(--border-color-focus);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);

    input {
        min-width: 4ch;
        border: 0;
        outline: 0;
        background: transparent;
        color: var(--text-primary);
        font: inherit;
        font-size: 12.5px;
    }
`,cu=H.button`
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
`,lu=H.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,uu=H.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`;function du({places:e,drives:t,recent:n,recentLimit:r,homePath:i,historyVersion:a,onOpen:o,onPlacesChanged:s,onRecentCleared:c,onLayoutChanged:l,onHistoryChanged:u,onDrivesChanged:d,visibilityVersion:f=0}){let p=Ji(),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(null),[x,S]=(0,_.useState)(!1),[C,w]=(0,_.useState)(null),[T,ee]=(0,_.useState)(null),[E,D]=(0,_.useState)(null);(0,_.useEffect)(()=>{xr().then(v,()=>v(null))},[]),(0,_.useEffect)(()=>{if(!y)return;let e=()=>b(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||b(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[y]),(0,_.useEffect)(()=>{if(!x)return;let e=()=>S(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[x]);let O=bs(g),k=O.map(e=>e.id),te=e=>y?.kind===`panel`&&y.id===e,ne=e=>y?.kind===`place`&&y.id===e;(0,_.useEffect)(()=>{if(!U.available)return;let e=O.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??i).filter(e=>e.length>0);U.send({type:`fs.watch`,payload:{paths:e}})},[O.map(e=>e.path??e.id).join(`|`),i]);let A=async(e,t)=>{let n={...g?.placeIcons};t?n[e]=t:delete n[e],b(null),await N({placeIcons:n}),s(await ir())},re=async(e,t)=>{let n={...g?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],ee(null),await N({placeNames:n}),s(await ir())},j=e=>{D(null),w({drive:e,label:e.label||`Local Disk`})},ie=async()=>{if(!C)return;let{drive:e,label:t}=C;w(null);let n=await Qn(e.name,t.trim());n.ok?(D(null),d?.()):D(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},M=g?.overviewColumns??1,N=async e=>{if(!g)return;let t={...g,...e,overviewPanels:e.overviewPanels??k,overviewHidden:[]};v(await Sr(t)),l?.()},ae=(e,t)=>{let n=k.indexOf(e),r=n+t;if(n<0||r<0||r>=k.length)return;let i=[...k];[i[n],i[r]]=[i[r],i[n]],N({overviewPanels:i})},oe=(e,t)=>{let n={...g?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],N({overviewTitles:n})},se=(e,t)=>void N({overviewViews:{...g?.overviewViews,[e]:t}}),ce=e=>{let t=g?.overviewPinned??O.filter(e=>e.pinned).map(e=>e.id);N({overviewPinned:O.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},le=e=>{b(null);let t=t=>{let n={...t};return delete n[e],n},n=g?.overviewPinned??O.filter(e=>e.pinned).map(e=>e.id);N({overviewPanels:k.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(g?.overviewTitles),overviewViews:t(g?.overviewViews),overviewIcons:t(g?.overviewIcons),panelPlaces:t(g?.panelPlaces)})},ue=(e,t)=>{let n={...g?.overviewIcons};t?n[e]=t:delete n[e],b(null),N({overviewIcons:n})},de=async e=>{if(!g)return;if(e===`folder`){let e=await Er();if(!e)return;let t=`folder:${e}`;k.includes(t)||await N({overviewPanels:[...k,t]});return}if(e===`quick`){let e=2;for(;k.includes(`quick:${e}`);)e+=1;await N({overviewPanels:[...k,`quick:${e}`]});return}let t=e;for(let n=2;k.includes(t);n+=1)t=`${e}:${n}`;await N({overviewPanels:[...k,t]})},fe=async t=>{let n=await Er();if(!n)return;if(t.id===`quick`){await N({quickAccess:[...new Set([...e.map(e=>e.path),n])]}),s(await ir());return}let r=t.places??[];r.some(e=>pu(e,n))||await N({panelPlaces:{...g?.panelPlaces,[t.id]:[...r,n]}})},P=async(t,n)=>{b(null),t.id===`quick`?(await N({quickAccess:e.filter(e=>!pu(e.path,n)).map(e=>e.path)}),s(await ir())):await N({panelPlaces:{...g?.panelPlaces,[t.id]:(t.places??[]).filter(e=>!pu(e,n))}})},F=async(t,n,r)=>{if(pu(n,r))return;let i=t.id===`quick`?e.map(e=>e.path):t.places??[],a=i.findIndex(e=>pu(e,n)),o=i.findIndex(e=>pu(e,r));if(a<0||o<0)return;let c=[...i],[l]=c.splice(a,1);c.splice(o,0,l),t.id===`quick`?(await N({quickAccess:c}),s(await ir())):await N({panelPlaces:{...g?.panelPlaces,[t.id]:c}})},pe=(e,t)=>({draggable:m,onDragOver:e=>{m&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{m&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{m&&(n.preventDefault(),F(e,n.dataTransfer.getData(`text/plain`),t))}}),I=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>pu(e.path,t));return{name:g?.placeNames?.[t]??n?.name??(Hi(t)||t),path:t,kind:`folder`,icon:n?.icon??g?.placeIcons?.[t]??null}}),L=e=>{if(n.length===0)return(0,W.jsx)(uu,{children:`Files and folders you open show up here.`});let t=n.slice(0,r);return e.view===`grid`?(0,W.jsx)(Hl,{children:t.map(e=>{let t=Yi(p,e.path);return(0,W.jsxs)(Ul,{$plain:!1,onClick:t=>e.isDirectory?o(e.path,ii(t)):void $n(e.path),title:e.path,children:[(0,W.jsx)(Wl,{children:t&&p.useIcons?(0,W.jsx)(Cs,{place:t,size:18}):(0,W.jsx)(Bs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,W.jsxs)(Gl,{children:[(0,W.jsx)(`strong`,{children:t?.name||e.name}),(0,W.jsx)(Kl,{children:e.path})]})]},e.path)})}):(0,W.jsx)(ql,{children:t.map(e=>{let t=Yi(p,e.path);return(0,W.jsxs)(Jl,{onClick:t=>e.isDirectory?o(e.path,ii(t)):void $n(e.path),title:e.path,type:`button`,children:[t&&p.useIcons?(0,W.jsx)(Cs,{place:t,size:15}):(0,W.jsx)(Bs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,W.jsxs)(Yl,{children:[(0,W.jsx)(`strong`,{children:t?.name||e.name}),(0,W.jsx)(Kl,{children:e.path})]})]},e.path)})})},R=e=>{if(t.length===0)return(0,W.jsx)(uu,{children:`No drives are available.`});let n=t.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=C?.drive.name===t.name,i=r?(0,W.jsx)(fu,{maxLength:32,onCancel:()=>w(null),onChange:e=>w({...C,label:e}),onCommit:()=>void ie(),value:C?.label??``}):(0,W.jsx)(W.Fragment,{children:Gi(t)}),a=!r&&m&&(0,W.jsx)(ou,{onClick:e=>{e.stopPropagation(),j(t)},title:`Rename volume`,type:`button`,children:(0,W.jsx)(Fo,{size:11})}),s=(0,W.jsxs)(Kl,{children:[Ri(t.freeSpace),` free of `,Ri(t.totalSize)]});return e.view===`grid`?(0,W.jsxs)(Ul,{$plain:!1,onClick:e=>!r&&o(t.name,ii(e)),title:t.name,children:[(0,W.jsx)(Wl,{children:(0,W.jsx)(no,{size:18})}),(0,W.jsxs)(Gl,{children:[(0,W.jsxs)(`strong`,{children:[i,r&&Wi(t),a]}),s]})]},t.name):(0,W.jsxs)(Jl,{as:r?`div`:`button`,onClick:r?void 0:e=>o(t.name,ii(e)),title:t.name,type:r?void 0:`button`,children:[(0,W.jsx)(no,{size:18}),(0,W.jsxs)(Yl,{children:[(0,W.jsxs)(`strong`,{children:[i,r&&Wi(t),a]}),s]}),(0,W.jsx)(Zl,{children:(0,W.jsx)(Ql,{$used:n,$tone:Vi(n)})})]},t.name)});return e.view===`grid`?(0,W.jsx)(Hl,{children:n}):(0,W.jsx)(ql,{children:n})},me=e=>{switch(e.kind){case`quick`:{let t=I(e);return!m&&t.length===0?(0,W.jsx)(uu,{children:`No folders in this Quick access panel yet.`}):e.view===`grid`?(0,W.jsxs)(Hl,{children:[t.map(t=>(0,W.jsxs)(Ul,{$plain:m,...pe(e,t.path),onClick:e=>!m&&o(t.path,ii(e)),title:t.path,children:[m&&(0,W.jsx)(au,{onClick:n=>{n.stopPropagation(),P(e,t.path)},title:`Remove from Quick access`,type:`button`,children:(0,W.jsx)(vo,{size:11})}),(0,W.jsxs)(ru,{children:[m?(0,W.jsx)(iu,{onClick:e=>{e.stopPropagation(),b(ne(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:`Change icon`,type:`button`,children:(0,W.jsx)(Wl,{children:(0,W.jsx)(Cs,{place:t})})}):(0,W.jsx)(Wl,{children:(0,W.jsx)(Cs,{place:t})}),ne(t.path)&&(0,W.jsx)(Cl,{onPick:e=>void A(t.path,e),value:g?.placeIcons?.[t.path]??t.icon})]}),(0,W.jsxs)(Gl,{children:[T?.path===t.path?(0,W.jsx)(`strong`,{children:(0,W.jsx)(fu,{onCancel:()=>ee(null),onChange:e=>ee({path:t.path,name:e}),onCommit:()=>void re(t.path,T?.name??``),value:T?.name??``})}):(0,W.jsxs)(`strong`,{children:[t.name,m&&(0,W.jsx)(ou,{onClick:e=>{e.stopPropagation(),b(null),ee({path:t.path,name:t.name})},title:`Rename folder`,type:`button`,children:(0,W.jsx)(Fo,{size:11})})]}),(0,W.jsx)(Kl,{children:t.path})]})]},t.path)),m&&(0,W.jsxs)(Xl,{onClick:()=>void fe(e),title:`Pin a folder here`,type:`button`,children:[(0,W.jsx)(Wl,{children:(0,W.jsx)(oo,{size:15})}),(0,W.jsxs)(Gl,{children:[(0,W.jsx)(`strong`,{children:`Add folder`}),(0,W.jsx)(Kl,{children:`Pin a directory here`})]})]})]}):(0,W.jsxs)(ql,{children:[t.map(t=>(0,W.jsxs)(Jl,{...pe(e,t.path),onClick:e=>!m&&o(t.path,ii(e)),title:t.path,type:`button`,children:[(0,W.jsxs)(ru,{children:[m?(0,W.jsx)(iu,{onClick:e=>{e.stopPropagation(),b(ne(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:`Change icon`,type:`button`,children:(0,W.jsx)(Cs,{place:t,size:15})}):(0,W.jsx)(Cs,{place:t,size:15}),ne(t.path)&&(0,W.jsx)(Cl,{onPick:e=>void A(t.path,e),value:g?.placeIcons?.[t.path]??t.icon})]}),(0,W.jsxs)(Yl,{children:[T?.path===t.path?(0,W.jsx)(`strong`,{children:(0,W.jsx)(fu,{onCancel:()=>ee(null),onChange:e=>ee({path:t.path,name:e}),onCommit:()=>void re(t.path,T?.name??``),value:T?.name??``})}):(0,W.jsxs)(`strong`,{children:[t.name,m&&(0,W.jsx)(ou,{onClick:e=>{e.stopPropagation(),b(null),ee({path:t.path,name:t.name})},title:`Rename folder`,type:`button`,children:(0,W.jsx)(Fo,{size:11})})]}),(0,W.jsx)(Kl,{children:t.path})]}),m&&(0,W.jsx)(au,{$inline:!0,onClick:n=>{n.stopPropagation(),P(e,t.path)},title:`Remove from Quick access`,type:`button`,children:(0,W.jsx)(vo,{size:11})})]},t.path)),m&&(0,W.jsxs)(Xl,{$row:!0,onClick:()=>void fe(e),title:`Pin a folder here`,type:`button`,children:[(0,W.jsx)(oo,{size:15}),(0,W.jsxs)(Yl,{children:[(0,W.jsx)(`strong`,{children:`Add folder`}),(0,W.jsx)(Kl,{children:`Pin a directory here`})]})]})]})}case`frequent`:return(0,W.jsx)(mu,{mode:e.view,onOpen:o,version:a});case`recent`:return L(e);case`drives`:return R(e);default:return(0,W.jsx)(hu,{mode:e.view,onOpen:o,openOnSingleClick:g?.openOnSingleClick??!1,path:e.path??i,showCheckboxes:g?.showCheckboxes??!0,visibilityVersion:f})}};return(0,W.jsxs)(El,{children:[(0,W.jsxs)(Dl,{children:[(0,W.jsx)(Ol,{role:`group`,title:`Columns`,children:[1,2,3,4,5].map(e=>(0,W.jsx)(kl,{$active:M===e,onClick:()=>void N({overviewColumns:e}),title:`${e} column${e>1?`s`:``}`,type:`button`,children:e},e))}),m&&(0,W.jsxs)(jl,{children:[(0,W.jsxs)(Al,{onClick:()=>S(e=>!e),onPointerDown:e=>e.stopPropagation(),title:`Add a panel`,type:`button`,children:[(0,W.jsx)(oo,{size:12}),`Add panel ▾`]}),x&&(0,W.jsx)(Ml,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`folder`].map(e=>(0,W.jsx)(Nl,{onClick:()=>{S(!1),de(e)},type:`button`,children:e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:`Folder…`},e))})]}),(0,W.jsxs)(Al,{onClick:()=>{h(e=>!e),S(!1),b(null),ee(null),w(null)},title:m?`Done`:`Edit`,type:`button`,children:[m?(0,W.jsx)(_o,{size:13}):(0,W.jsx)(Fo,{size:13}),m?`Done`:`Edit`]})]}),E&&(0,W.jsx)(lu,{children:E}),(0,W.jsx)(Pl,{$columns:M,children:O.map(e=>{let t=k.indexOf(e.id);return(0,W.jsxs)(Fl,{children:[(0,W.jsxs)(Il,{children:[(0,W.jsxs)(Ll,{children:[(0,W.jsxs)(ru,{children:[m?(0,W.jsx)(iu,{onClick:()=>b(te(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:`Change icon`,type:`button`,children:(0,W.jsx)(Ss,{panel:e,size:15})}):(0,W.jsx)(Ss,{panel:e,size:15}),te(e.id)&&(0,W.jsx)(Cl,{onPick:t=>ue(e.id,t),value:e.icon})]}),m?(0,W.jsx)(Bl,{defaultValue:e.title,onBlur:t=>oe(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,W.jsx)(zl,{children:e.title})]}),(0,W.jsxs)(Rl,{children:[!m&&e.kind===`recent`&&(0,W.jsx)(Al,{onClick:()=>void gr().then(c),title:`Clear`,type:`button`,children:`Clear`}),!m&&e.kind===`frequent`&&(0,W.jsx)(Al,{onClick:()=>void _r().then(()=>u?.()),title:`Clear the frequent list`,type:`button`,children:`Clear`}),!m&&(e.kind===`home`||e.kind===`folder`)&&(0,W.jsx)(Al,{onClick:()=>o(e.path??i),title:`Open folder`,type:`button`,children:`Open`}),m&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(Vl,{$active:e.pinned,onClick:()=>ce(e.id),title:e.pinned?`Unpin from the sidebar`:`Pin to the sidebar`,type:`button`,children:(0,W.jsx)(fo,{size:12})}),(0,W.jsx)(Vl,{$active:e.view===`list`,onClick:()=>se(e.id,`list`),title:`List`,type:`button`,children:(0,W.jsx)(po,{size:13})}),(0,W.jsx)(Vl,{$active:e.view===`grid`,onClick:()=>se(e.id,`grid`),title:`Grid`,type:`button`,children:(0,W.jsx)(mo,{size:13})}),(0,W.jsx)(Vl,{disabled:t===0,onClick:()=>ae(e.id,-1),title:`Move up`,type:`button`,children:(0,W.jsx)(io,{size:12})}),(0,W.jsx)(Vl,{disabled:t===k.length-1,onClick:()=>ae(e.id,1),title:`Move down`,type:`button`,children:(0,W.jsx)(io,{size:12})}),(0,W.jsx)(Vl,{onClick:()=>le(e.id),title:`Remove panel`,type:`button`,children:(0,W.jsx)(vo,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?me(e):(0,W.jsx)(eu,{children:me(e)})]},e.id)})})]})}function fu({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){return(0,W.jsxs)(su,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,W.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,W.jsx)(cu,{onClick:r,title:`Cancel`,type:`button`,children:(0,W.jsx)(vo,{size:11})}),(0,W.jsx)(cu,{$apply:!0,onClick:n,title:`Rename volume`,type:`button`,children:(0,W.jsx)(_o,{size:12})})]})}function pu(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}function mu({mode:e,onOpen:t,version:n}){let[r,i]=(0,_.useState)(null),a=Ji();if((0,_.useEffect)(()=>{mr().then(i,()=>i([]))},[n]),!r)return(0,W.jsx)(uu,{children:`Reading…`});if(r.length===0)return(0,W.jsx)(uu,{children:`Folders you open often show up here.`});let o=e=>`${e.count} ${e.count===1?`visit`:`visits`} · ${e.path}`;return e===`grid`?(0,W.jsx)(Hl,{children:r.map(e=>{let n=Yi(a,e.path);return(0,W.jsxs)(Ul,{$plain:!1,onClick:n=>t(e.path,ii(n)),title:e.path,children:[(0,W.jsx)(Wl,{children:n&&a.useIcons?(0,W.jsx)(Cs,{place:n,size:18}):(0,W.jsx)(Bs,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,W.jsxs)(Gl,{children:[(0,W.jsx)(`strong`,{children:n?.name||e.name}),(0,W.jsx)(Kl,{children:o(e)})]})]},e.path)})}):(0,W.jsx)(ql,{children:r.map(e=>{let n=Yi(a,e.path);return(0,W.jsxs)(Jl,{onClick:n=>t(e.path,ii(n)),title:e.path,type:`button`,children:[n&&a.useIcons?(0,W.jsx)(Cs,{place:n,size:15}):(0,W.jsx)(Bs,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,W.jsxs)(Yl,{children:[(0,W.jsx)(`strong`,{children:n?.name||e.name}),(0,W.jsx)(Kl,{children:o(e)})]})]},e.path)})})}function hu({path:e,mode:t,onOpen:n,showCheckboxes:r,openOnSingleClick:i,visibilityVersion:a}){let[o,s]=(0,_.useState)(null),c=Ji();return(0,_.useEffect)(()=>{e&&(s(null),er(e).then(s,()=>s(null)))},[e,a]),(0,_.useEffect)(()=>{if(U.available)return U.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&n.data.path.replace(/[\\\\/]+$/,``).toLowerCase()===e.replace(/[\\\\/]+$/,``).toLowerCase()&&er(e,!1).then(s,()=>void 0)})},[e]),o?t===`list`?(0,W.jsx)($l,{children:(0,W.jsx)(uc,{error:null,listing:o,loading:!1,onOpen:n,onOpenFile:e=>void $n(e),onSort:()=>void 0,openOnSingleClick:i,enableShortcuts:!1,showCheckboxes:r,showImages:!1,view:{...Xn,columns:Zn.columns??[]}})}):(0,W.jsx)(eu,{children:o.entries.length===0?(0,W.jsx)(uu,{children:`This folder is empty.`}):(0,W.jsx)(tu,{children:o.entries.map(e=>{let t=Yi(c,e.fullPath);return(0,W.jsxs)(nu,{onClick:t=>e.isDirectory?n(e.fullPath,ii(t)):void $n(e.fullPath),title:e.name,type:`button`,children:[t&&c.useIcons?(0,W.jsx)(Cs,{place:t,size:16}):(0,W.jsx)(Bs,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,W.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,W.jsx)(uu,{children:`Reading…`})}function gu({path:e,label:t,icon:n,focusToken:r,onNavigate:i}){let a=Ji(),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(``),u=(0,_.useRef)(null),d=(0,_.useRef)(0);(0,_.useEffect)(()=>{o||l(e.replace(/\\/g,`/`))},[e,o]),(0,_.useEffect)(()=>{r&&r!==d.current&&(d.current=r,l(e.replace(/\\/g,`/`)),s(!0))},[r,e]),(0,_.useEffect)(()=>{o&&u.current?.select()},[o]),(0,_.useEffect)(()=>{if(!o)return;let e=()=>s(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[o]);let f=()=>{l(e.replace(/\\/g,`/`)),s(!0)},p=()=>{let t=c.trim();s(!1),t.length>0&&t!==e&&i(t)};if(o)return(0,W.jsxs)(wu,{onPointerDown:e=>e.stopPropagation(),children:[(0,W.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&p(),e.key===`Escape`&&s(!1)},ref:u,spellCheck:!1,value:c}),(0,W.jsx)(Tu,{onClick:()=>s(!1),title:`Cancel`,type:`button`,children:(0,W.jsx)(vo,{size:12})}),(0,W.jsx)(Tu,{$apply:!0,onClick:p,onPointerDown:e=>e.stopPropagation(),title:`Open this path`,type:`button`,children:(0,W.jsx)(_o,{size:14})})]});let m=t?[{label:t,path:e,icon:n}]:vu(e,a.places);return(0,W.jsx)(yu,{onClick:f,title:`Click to type a path`,children:m.map((t,n)=>(0,W.jsxs)(bu,{$last:n===m.length-1,children:[n>0&&(0,W.jsx)(Su,{children:(0,W.jsx)(lo,{size:9})}),(0,W.jsxs)(Cu,{onClick:n=>{n.stopPropagation(),t.path!==e&&i(t.path)},type:`button`,children:[t.place?(0,W.jsx)(xu,{children:(0,W.jsx)(Cs,{place:t.place,size:13})}):t.icon&&(0,W.jsx)(xu,{children:t.icon}),t.label]})]},t.path))})}function _u(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function vu(e,t){let n=_u(e),r=e=>e.replace(/[\\/]+$/,``).toLowerCase(),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>r(t.path)===r(e.path));t>i&&(i=t,a=e)}return a&&i>=0&&n.splice(0,i+1,{label:a.name,path:n[i].path,place:a}),n}var yu=H.div`
    display: flex;
    align-items: center;
    min-width: 0;
    flex: 1;
    height: 32px;
    padding: 0 10px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    overflow: hidden;
    cursor: text;
    transition: border-color 130ms ease, background 130ms ease, box-shadow 130ms ease;

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-input);
        box-shadow: inset 0 0 0 1px rgba(99, 102, 241, 0.08);
    }
`,bu=H.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,xu=H.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Su=H.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,Cu=H.button`
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
`,wu=H.div`
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1;
    min-width: 0;
    height: 32px;
    padding: 0 4px 0 10px;
    border: 1px solid var(--border-color-focus);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);

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
`,Tu=H.button`
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
`,Eu=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,W.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,W.jsx)(`path`,{d:`M4 4v6h6`})]});function Du(){let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)([]),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(!0),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(!1),y=(0,_.useCallback)(async()=>{l(!0),p(null);try{t(await or(g))}catch(e){p(e instanceof Error?e.message:String(e))}finally{l(!1)}},[g]);(0,_.useEffect)(()=>{y()},[y]),(0,_.useEffect)(()=>{g||(r([]),a(!1),s(null))},[g]);let b=async e=>{await sr(e),await y()},x=async()=>{h(!1),await cr(g),await y()},S=async e=>{await lr(e),await y()},C=async()=>{d(!0),s(null);try{let e=await ur();if(e.cancelled){s(`Elevation was declined — nothing was read.`);return}if(e.failed){s(`The elevated helper could not produce a report. Try again.`);return}r(e.entries),a(!0)}finally{d(!1)}},w=async()=>{d(!0),h(!1);try{await dr(),r([]),a(!1),s(null),await y()}finally{d(!1)}},T=new Set(e.map(e=>e.id)),ee=[...e,...n.filter(e=>!T.has(e.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>t.deleted-e.deleted);return(0,W.jsxs)(ku,{children:[(0,W.jsxs)(Au,{children:[(0,W.jsxs)(ju,{children:[(0,W.jsx)(go,{size:16}),(0,W.jsx)(`span`,{children:`Recycle Bin`}),(0,W.jsx)(Mu,{children:c?`…`:`${ee.length} items`})]}),(0,W.jsxs)(Nu,{children:[(0,W.jsx)(Pu,{$on:g,onClick:()=>v(e=>!e),title:`Show metadata records whose content is already gone`,type:`button`,children:`Orphans`}),g?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(Iu,{disabled:u||i,onClick:()=>void C(),title:i?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`,type:`button`,children:u?`Working…`:i?`Admin view loaded`:`Show all (admin)…`}),m?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(Lu,{$danger:!0,disabled:u,onClick:()=>void w(),type:`button`,children:[(0,W.jsx)(_o,{size:12}),` Delete every orphan`]}),(0,W.jsx)(Ru,{onClick:()=>h(!1),title:`Cancel`,type:`button`,children:(0,W.jsx)(vo,{size:12})})]}):(0,W.jsx)(Iu,{disabled:u||ee.length===0,onClick:()=>h(!0),title:`Runs an elevated copy of the app and deletes every leftover record`,type:`button`,children:`Delete all orphans…`})]}):m?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(Lu,{$danger:!0,onClick:()=>void x(),type:`button`,children:[(0,W.jsx)(_o,{size:12}),` Delete everything`]}),(0,W.jsx)(Ru,{onClick:()=>h(!1),title:`Cancel`,type:`button`,children:(0,W.jsx)(vo,{size:12})})]}):(0,W.jsx)(Iu,{disabled:ee.length===0,onClick:()=>h(!0),type:`button`,children:`Empty`}),(0,W.jsx)(Ru,{onClick:()=>void y(),title:`Refresh`,type:`button`,children:(0,W.jsx)(ao,{size:14})})]})]}),o&&(0,W.jsx)(Zu,{children:o}),f&&(0,W.jsx)(J,{children:f}),!f&&!c&&ee.length===0&&(0,W.jsx)(J,{children:`The recycle bin is empty.`}),ee.length>0&&(0,W.jsxs)(zu,{children:[(0,W.jsxs)(Bu,{children:[(0,W.jsx)(`span`,{children:`Name`}),(0,W.jsx)(`span`,{children:`Original location`}),(0,W.jsx)(`span`,{children:`Deleted`}),(0,W.jsx)(`span`,{children:`Size`}),(0,W.jsx)(`span`,{})]}),(0,W.jsx)(Vu,{children:ee.map(e=>(0,W.jsxs)(Hu,{$orphan:e.isOrphan,title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,W.jsxs)(Wu,{children:[(0,W.jsx)(Ou,{entry:e}),(0,W.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,W.jsx)(Fu,{children:`metadata only`}),e.owner&&(0,W.jsx)(Fu,{$other:!0,children:`other profile`})]}),(0,W.jsx)(Ku,{children:e.originalPath}),(0,W.jsx)(qu,{children:Bi(e.deleted)}),(0,W.jsx)(Ju,{children:e.isDirectory?`—`:Ri(e.size)}),(0,W.jsxs)(Yu,{children:[!e.isOrphan&&e.removable&&(0,W.jsx)(Xu,{onClick:()=>void b(e.id),title:`Restore to its original folder`,type:`button`,children:(0,W.jsx)(Eu,{})}),e.removable&&(0,W.jsx)(Xu,{$danger:!0,onClick:()=>void S(e.id),title:e.isOrphan?`Remove the leftover record`:`Delete permanently`,type:`button`,children:(0,W.jsx)(go,{size:13})})]})]},e.id))})]})]})}function Ou({entry:e}){let t=_i(e.originalPath,e.isDirectory);return(0,W.jsx)(Gu,{children:t?(0,W.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,W.jsx)(eo,{}):(0,W.jsx)(to,{})})}var ku=H.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Au=H.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,ju=H.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,Mu=H.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Nu=H.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Pu=H.button`
    padding: 5px 10px;
    border: 1px solid ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$on:e})=>e?`rgba(99, 102, 241, 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,Fu=H.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,Iu=H.button`
    padding: 5px 10px;
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
        opacity: 0.4;
        cursor: default;
    }
`,Lu=H(Iu)`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border-color: ${({$danger:e})=>e?`rgba(248, 113, 113, 0.5)`:`var(--border-color)`};
    color: ${({$danger:e})=>e?`#fca5a5`:`var(--text-secondary)`};

    &:hover:not(:disabled) {
        background: rgba(248, 113, 113, 0.14);
        color: #fecaca;
    }
`,Ru=H.button`
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
`,zu=H.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Bu=H.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr) 170px 100px 56px;
    gap: 16px;
    padding: 10px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Vu=H.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,Hu=H.div`
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr) 170px 100px 56px;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    font-size: 13px;
    color: var(--text-secondary);
    opacity: ${({$orphan:e})=>e?.72:1};

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
        opacity: 1;
    }

    &:hover button {
        opacity: 1;
    }
`,Uu=H.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Wu=H(Uu)`
    display: flex;
    align-items: center;
    gap: 10px;
`,Gu=H.span`
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
`,Ku=H(Uu)`
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
`,qu=H(Uu)`
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
`,Ju=H(Uu)`
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
`,Yu=H.span`
    display: flex;
    justify-content: flex-end;
    gap: 4px;
`,Xu=H.button`
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
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
`,Zu=H.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,J=H.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function Y(){return(0,W.jsx)(X,{title:`Always applies to every folder`,children:`Global`})}var X=H.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,Z=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`refresh`,label:`Refresh`,note:`Reads the current folder again.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`placesPanel`,label:`Toggle sidebar`,note:`Shows or hides the Places-style sidebar; F9 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}];function Qu({appInfo:e,onSettingsChanged:t}){let[n,r]=(0,_.useState)(null),[i,a]=(0,_.useState)(null),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)(`file`),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(!1),[x,S]=(0,_.useState)(!1),[C,w]=(0,_.useState)(null),[T,ee]=(0,_.useState)(null),E=i?.defaultView??Zn;(0,_.useEffect)(()=>{vr().then(r,()=>r(null)),xr().then(a,()=>a(null)),jr().then(b,()=>b(!1))},[]),(0,_.useEffect)(()=>{let e=()=>void kr().then(v,()=>v(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let D=async e=>{if(!i)return;let n={...i,...e};a(n),pi(),a(await Sr(n)),t()},O=async e=>{let t=new Set(E.columns??Zn.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=sc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await D({defaultView:{...E,columns:n}})},k=async()=>{if(x)return;let e=!y;S(!0),w(null);try{let t=await Mr(e);b(t),a(t=>t&&{...t,linksEnabled:e}),t!==e&&w(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{w(`The request to Windows failed. Try again.`)}finally{S(!1)}},te=async(e,t)=>{if(!i)return;let n={...i.extensionIcons};t===null?delete n[e]:n[e]=t,await D({extensionIcons:n})},ne={...ti,...i?.shortcuts};(0,_.useEffect)(()=>{if(!T)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){ee(null);return}let t=ai(e);t&&(ee(null),D({shortcuts:{...ne,[T]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[T,i]);let A=async e=>{await D({recentLimit:Math.min(Math.max(e,0),50)})},re=async e=>{await D({galleryRoots:e.length>0?e:null})},j=async()=>{let e=await Er(),t=i?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await re([...t,e])},ie=async()=>{let e=c.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await te(e,u),l(``))},M=async()=>{h(!0);try{let e=await Er();if(!e)return;let t=await Tr();if(!t)return;await wr(e.replace(/[\\/][^\\/]+$/,``),Hi(e),`file:${t}`)&&(pi(),s({folder:e,icon:t}))}finally{h(!1)}};return(0,W.jsxs)(id,{children:[(0,W.jsxs)(ad,{children:[(0,W.jsx)(od,{children:`Application`}),(0,W.jsxs)(sd,{children:[(0,W.jsxs)(pd,{children:[(0,W.jsx)(gd,{children:`Version`}),(0,W.jsx)(vd,{children:e?`v${e.version}`:`—`})]}),(0,W.jsxs)(pd,{children:[(0,W.jsx)(gd,{children:`Platform`}),(0,W.jsx)(vd,{children:e?.platform??`—`})]}),(0,W.jsxs)(pd,{children:[(0,W.jsxs)(md,{children:[(0,W.jsx)(gd,{children:`Open yafm:// links`}),(0,W.jsxs)(Q,{children:[`Registers this app for yafm:// links, for the current user only. While this is on, the app repairs the entry at every launch.`,C?` ${C}`:``]})]}),(0,W.jsxs)(hd,{children:[(0,W.jsx)(yd,{$on:y,children:y?`Active`:`Off`}),(0,W.jsx)(xd,{$on:y,disabled:x,onClick:()=>void k(),title:y?`Stop opening yafm:// links`:`Open yafm:// links with this app`,type:`button`,children:(0,W.jsx)(Sd,{})})]})]}),(0,W.jsxs)(pd,{children:[(0,W.jsxs)(md,{children:[(0,W.jsx)(gd,{children:`Reopen the tabs that were open`}),(0,W.jsx)(Q,{children:`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`})]}),(0,W.jsx)(xd,{$on:i?.restoreTabs??!0,disabled:!i,onClick:()=>void D({restoreTabs:!i?.restoreTabs}),type:`button`,children:(0,W.jsx)(Sd,{})})]})]})]}),(0,W.jsxs)(ad,{children:[(0,W.jsx)(od,{children:`Files view (global)`}),(0,W.jsxs)(sd,{children:[(0,W.jsxs)(pd,{children:[(0,W.jsxs)(md,{children:[(0,W.jsx)(gd,{children:`Default view`}),(0,W.jsx)(Q,{children:`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`})]}),(0,W.jsx)(hd,{children:(0,W.jsxs)(Td,{children:[(0,W.jsx)(Ed,{$on:E.mode===`list`,onClick:()=>void D({defaultView:{...E,mode:`list`}}),type:`button`,children:`List`}),(0,W.jsx)(Ed,{$on:E.mode===`grid`,onClick:()=>void D({defaultView:{...E,mode:`grid`}}),type:`button`,children:`Grid`})]})})]}),(0,W.jsxs)(pd,{children:[(0,W.jsxs)(md,{children:[(0,W.jsx)(gd,{children:`List icon size`}),(0,W.jsx)(Q,{children:`The icon in the list rows.`})]}),(0,W.jsxs)(hd,{children:[(0,W.jsx)(Dd,{max:48,min:16,onChange:e=>void D({defaultView:{...E,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:E.iconSize}),(0,W.jsxs)(vd,{children:[E.iconSize,`px`]})]})]}),(0,W.jsxs)(pd,{children:[(0,W.jsxs)(md,{children:[(0,W.jsx)(gd,{children:`Grid size`}),(0,W.jsx)(Q,{children:`The height of a grid tile; the icon inside follows it.`})]}),(0,W.jsxs)(hd,{children:[(0,W.jsx)(Dd,{max:260,min:100,onChange:e=>void D({defaultView:{...E,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:E.gridSize}),(0,W.jsxs)(vd,{children:[E.gridSize,`px`]})]})]}),(0,W.jsxs)(pd,{children:[(0,W.jsxs)(md,{children:[(0,W.jsxs)(_d,{children:[(0,W.jsx)(gd,{children:`Selection checkboxes`}),(0,W.jsx)(Y,{})]}),(0,W.jsx)(Q,{children:`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`})]}),(0,W.jsx)(xd,{$on:i?.showCheckboxes??!0,disabled:!i,onClick:()=>void D({showCheckboxes:!(i?.showCheckboxes??!0)}),type:`button`,children:(0,W.jsx)(Sd,{})})]}),(0,W.jsxs)(pd,{children:[(0,W.jsxs)(md,{children:[(0,W.jsxs)(_d,{children:[(0,W.jsx)(gd,{children:`Open with a single click`}),(0,W.jsx)(Y,{})]}),(0,W.jsx)(Q,{children:`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`})]}),(0,W.jsx)(xd,{$on:i?.openOnSingleClick??!1,disabled:!i,onClick:()=>void D({openOnSingleClick:!(i?.openOnSingleClick??!1)}),type:`button`,children:(0,W.jsx)(Sd,{})})]}),(0,W.jsxs)(pd,{children:[(0,W.jsxs)(md,{children:[(0,W.jsxs)(_d,{children:[(0,W.jsx)(gd,{children:`Preview panel under the list`}),(0,W.jsx)(Y,{})]}),(0,W.jsx)(Q,{children:`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`})]}),(0,W.jsx)(xd,{$on:E.showImages??!0,onClick:()=>void D({defaultView:{...E,showImages:!(E.showImages??!0)}}),type:`button`,children:(0,W.jsx)(Sd,{})})]}),(0,W.jsx)(pd,{children:(0,W.jsxs)(md,{children:[(0,W.jsxs)(_d,{children:[(0,W.jsx)(gd,{children:`Columns`}),(0,W.jsx)(Y,{})]}),(0,W.jsx)(Q,{children:`Shown in every folder; changing them changes all folders at once.`})]})}),(0,W.jsx)(pd,{children:(0,W.jsxs)(Od,{children:[sc.map(e=>(0,W.jsxs)(kd,{children:[(0,W.jsx)(`input`,{checked:(E.columns??[]).includes(e.id),onChange:()=>void O(e.id),type:`checkbox`}),(0,W.jsx)(`span`,{children:e.label})]},e.id)),(0,W.jsxs)(kd,{children:[(0,W.jsx)(`input`,{checked:(E.columns??[]).includes(`linkTarget`),onChange:()=>void O(`linkTarget`),type:`checkbox`}),(0,W.jsx)(`span`,{children:`Link target after the name`})]})]})})]}),(0,W.jsxs)(Fd,{children:[`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar. Anything marked `,(0,W.jsx)(Y,{}),` always applies to every folder.`]})]}),(0,W.jsxs)(ad,{children:[(0,W.jsx)(od,{children:`Shortcuts`}),(0,W.jsxs)(sd,{children:[Z.map(({id:e,label:t,note:n})=>(0,W.jsxs)(pd,{children:[(0,W.jsxs)(md,{children:[(0,W.jsx)(gd,{children:t}),(0,W.jsx)(Q,{children:n})]}),(0,W.jsx)(hd,{children:(0,W.jsx)(Ad,{$listening:T===e,onClick:()=>ee(e),type:`button`,children:T===e?`Press a key…`:oi(ne[e])})})]},e)),(0,W.jsxs)(pd,{children:[(0,W.jsxs)(md,{children:[(0,W.jsx)(gd,{children:`Reset`}),(0,W.jsx)(Q,{children:`Back to the default combination for every action.`})]}),(0,W.jsx)(hd,{children:(0,W.jsx)(jd,{onClick:()=>void D({shortcuts:{...ti}}),type:`button`,children:`Reset`})})]})]})]}),(0,W.jsxs)(ad,{children:[(0,W.jsx)(od,{children:`Memory`}),(0,W.jsxs)(sd,{children:[(0,W.jsxs)(ld,{children:[(0,W.jsxs)(ud,{children:[(0,W.jsx)(gd,{children:`Process memory`}),(0,W.jsx)(vd,{children:g?`${Ri(g.private)} · ${cd(g.private,g.available)}`:`—`})]}),(0,W.jsx)(dd,{children:(0,W.jsx)(fd,{$ratio:g?g.private/Math.max(g.available,1):0,$tone:Vi(g?g.private/Math.max(g.available,1):0)})}),(0,W.jsx)(Q,{children:g?`Committed of ${Ri(g.available)} the runtime can use; ${Ri(g.workingSet)} is resident. The webview runs in its own process.`:`Reading the current usage…`})]}),(0,W.jsxs)(ld,{children:[(0,W.jsxs)(ud,{children:[(0,W.jsx)(gd,{children:`Managed heap`}),(0,W.jsx)(vd,{children:g?`${Ri(g.managed)} · ${cd(g.managed,g.private)}`:`—`})]}),(0,W.jsx)(dd,{children:(0,W.jsx)(fd,{$ratio:g?g.managed/Math.max(g.private,1):0,$tone:`var(--accent-secondary)`})}),(0,W.jsx)(Q,{children:`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`})]}),(0,W.jsxs)(pd,{children:[(0,W.jsxs)(md,{children:[(0,W.jsx)(gd,{children:`Free memory`}),(0,W.jsx)(Q,{children:`Compacts the heap and returns unused pages to the system. Always safe.`})]}),(0,W.jsx)(hd,{children:(0,W.jsx)(jd,{onClick:()=>void Ar().then(v),type:`button`,children:`Trim now`})})]})]})]}),(0,W.jsxs)(ad,{children:[(0,W.jsx)(od,{children:`Overview`}),(0,W.jsx)(sd,{children:(0,W.jsxs)(pd,{children:[(0,W.jsxs)(md,{children:[(0,W.jsx)(gd,{children:`Recent items`}),(0,W.jsx)(Q,{children:`How many recently opened folders the overview lists. 0 hides the section.`})]}),(0,W.jsx)(hd,{children:(0,W.jsx)(Cd,{max:50,min:0,onChange:e=>void A(Number(e.target.value)),type:`number`,value:i?.recentLimit??10})})]})})]}),(0,W.jsxs)(ad,{children:[(0,W.jsx)(od,{children:`Gallery`}),(0,W.jsxs)(sd,{children:[(i?.galleryRoots??[]).map(e=>(0,W.jsxs)(pd,{children:[(0,W.jsxs)(md,{children:[(0,W.jsx)(gd,{children:Hi(e)}),(0,W.jsx)(Q,{children:e})]}),(0,W.jsx)(hd,{children:(0,W.jsx)(Md,{onClick:()=>void re((i?.galleryRoots??[]).filter(t=>t!==e)),title:`Stop scanning this folder`,type:`button`,children:(0,W.jsx)(vo,{size:12})})})]},e)),(0,W.jsxs)(pd,{children:[(0,W.jsxs)(md,{children:[(0,W.jsx)(gd,{children:`Scan folders`}),(0,W.jsx)(Q,{children:(i?.galleryRoots??[]).length===0?`Nothing added yet, so the gallery reads the Pictures folder.`:`Only these folders are scanned, three levels deep.`})]}),(0,W.jsx)(hd,{children:(0,W.jsx)(jd,{onClick:()=>void j(),type:`button`,children:`Choose folder…`})})]})]})]}),(0,W.jsxs)(ad,{children:[(0,W.jsx)(od,{children:`Icons`}),(0,W.jsxs)(sd,{children:[(0,W.jsxs)(pd,{children:[(0,W.jsxs)(md,{children:[(0,W.jsx)(gd,{children:`Use system file icons`}),(0,W.jsx)(Q,{children:`Ask the shell for the icon of each file type instead of the built-in glyphs.`})]}),(0,W.jsx)(xd,{$on:i?.systemIcons??!1,disabled:!i,onClick:()=>void D({systemIcons:!i?.systemIcons}),type:`button`,children:(0,W.jsx)(Sd,{})})]}),(0,W.jsxs)(pd,{children:[(0,W.jsxs)(md,{children:[(0,W.jsx)(gd,{children:`Use custom folder icons`}),(0,W.jsx)(Q,{children:`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`})]}),(0,W.jsx)(xd,{$on:i?.customFolderIcons??!1,disabled:!i,onClick:()=>void D({customFolderIcons:!i?.customFolderIcons}),type:`button`,children:(0,W.jsx)(Sd,{})})]})]})]}),(0,W.jsxs)(ad,{children:[(0,W.jsx)(od,{children:`Icons by extension`}),(0,W.jsxs)(sd,{children:[Object.entries(i?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,W.jsxs)(pd,{children:[(0,W.jsxs)(md,{children:[(0,W.jsx)(gd,{children:e}),(0,W.jsx)(Q,{children:td(t)})]}),(0,W.jsxs)(hd,{children:[(0,W.jsx)(nd,{source:t}),(0,W.jsx)(Md,{onClick:()=>void te(e,null),title:`Remove this rule`,type:`button`,children:(0,W.jsx)(vo,{size:12})})]})]},e)),(0,W.jsxs)(pd,{children:[(0,W.jsxs)(md,{children:[(0,W.jsx)(gd,{children:`Add a rule`}),(0,W.jsx)(Q,{children:`Extension and the icon to draw for it.`})]}),(0,W.jsxs)(hd,{children:[(0,W.jsx)(Cd,{onChange:e=>l(e.target.value),placeholder:`.psd`,spellCheck:!1,value:c}),(0,W.jsxs)(wd,{children:[(0,W.jsx)(Md,{onClick:()=>p(e=>!e),title:`Choose the icon`,type:`button`,children:(0,W.jsx)(nd,{source:u})}),f&&(0,W.jsx)(Cl,{allowDefault:!1,onClose:()=>p(!1),onPick:e=>{d(e??`file`),p(!1)},value:u})]}),(0,W.jsx)(Md,{onClick:()=>void ie(),title:`Add the rule`,type:`button`,children:(0,W.jsx)(oo,{size:13})})]})]})]})]}),(0,W.jsxs)(ad,{children:[(0,W.jsx)(od,{children:`Folder icons`}),(0,W.jsxs)(sd,{children:[(0,W.jsxs)(pd,{children:[(0,W.jsxs)(md,{children:[(0,W.jsx)(gd,{children:`Give a folder its own icon`}),(0,W.jsxs)(Q,{children:[`Stored in the folder's parent `,(0,W.jsx)(bd,{children:`.yafm-index.db`}),`, so it stays with the files.`]})]}),(0,W.jsxs)(hd,{children:[o&&(0,W.jsx)(rd,{src:o.icon}),(0,W.jsx)(jd,{disabled:m,onClick:()=>void M(),type:`button`,children:m?`Choosing…`:`Choose folder and icon…`})]})]}),o&&(0,W.jsxs)(pd,{children:[(0,W.jsxs)(md,{children:[(0,W.jsx)(gd,{children:Hi(o.folder)}),(0,W.jsx)(Q,{children:o.folder})]}),(0,W.jsx)(hd,{children:(0,W.jsxs)(Pd,{children:[(0,W.jsx)(_o,{size:11}),` Saved`]})})]})]})]}),(0,W.jsxs)(ad,{children:[(0,W.jsx)(od,{children:`Folder index`}),(0,W.jsx)(sd,{children:(0,W.jsxs)(pd,{children:[(0,W.jsxs)(md,{children:[(0,W.jsxs)(gd,{children:[`Keep a `,(0,W.jsx)(bd,{children:`.yafm-index.db`}),` in every folder`]}),(0,W.jsx)(Q,{children:`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`})]}),(0,W.jsx)(xd,{$on:i?.writeDirectoryIndex??!0,disabled:!i,onClick:()=>void D({writeDirectoryIndex:!i?.writeDirectoryIndex}),type:`button`,children:(0,W.jsx)(Sd,{})})]})}),!(i?.writeDirectoryIndex??!0)&&(0,W.jsx)(Id,{children:ed(e?.platform)})]}),(0,W.jsxs)(ad,{children:[(0,W.jsx)(od,{children:`Files`}),(0,W.jsxs)(sd,{children:[(0,W.jsxs)(pd,{children:[(0,W.jsx)(gd,{children:`Hidden items`}),(0,W.jsx)(vd,{children:$u(n?.showHidden)})]}),(0,W.jsxs)(pd,{children:[(0,W.jsx)(gd,{children:`Protected operating system files`}),(0,W.jsx)(vd,{children:$u(n?.showSystem)})]})]}),(0,W.jsx)(Fd,{children:`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`})]})]})}function $u(e){return e===void 0?`Reading…`:e?`Shown`:`Hidden`}function ed(e){return`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in ${e===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:e===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`}function td(e){return e.startsWith(`file:`)?e.slice(5):`built-in: ${e}`}function nd({source:e}){let t=vi(e.startsWith(`file:`)?e.slice(5):null);return(0,W.jsx)(Nd,{children:t?(0,W.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,W.jsx)(zs,{name:e,size:16})})}function rd({src:e}){let t=vi(e);return(0,W.jsx)(Nd,{children:t&&(0,W.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}var id=H.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 26px 26px 34px;
    max-width: 860px;
`,ad=H.section`
    display: flex;
    flex-direction: column;
    gap: 10px;

    & + & {
        margin-top: 30px;
    }
`,od=H.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,sd=H.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow: hidden;
`;function cd(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}var ld=H.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,ud=H.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,dd=H.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,fd=H.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,pd=H.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 13px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,md=H.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,hd=H.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,gd=H.span`
    font-size: 13px;
    color: var(--text-secondary);
`,_d=H.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,Q=H.span`
    font-size: 11px;
    color: var(--text-muted);
`,vd=H.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
`,yd=H.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,bd=H.code`
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-secondary);
`,xd=H.button`
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
`,Sd=H.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,Cd=H.input`
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
`,wd=H.span`
    position: relative;
    display: inline-flex;
`,Td=H.div`
    display: flex;
    gap: 4px;
`,Ed=H.button`
    padding: 5px 14px;
    border: 1px solid ${({$on:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$on:e})=>e?`rgba(59, 130, 246, 0.18)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font-size: 11px;
    cursor: pointer;
`,Dd=H.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,Od=H.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,kd=H.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,Ad=H.button`
    min-width: 92px;
    padding: 4px 10px;
    border: 1px solid ${({$listening:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$listening:e})=>e?`rgba(59, 130, 246, 0.16)`:`var(--bg-input)`};
    color: ${({$listening:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font-family: var(--font-mono);
    font-size: 11px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`,jd=H.button`
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
`,Md=H.button`
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
`,Nd=H.span`
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
`,Pd=H.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,Fd=H.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,Id=H.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,Ld=100;function Rd(){let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)(0),[i,a]=(0,_.useState)(!0),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(!1),u=(0,_.useRef)(!1),d=(0,_.useRef)(null),f=(0,_.useCallback)(async e=>{a(!0),s(null);try{let n=await fr(0,Ld,e);t(n.entries),r(n.total)}catch(e){s(e instanceof Error?e.message:String(e))}finally{a(!1)}},[]);(0,_.useEffect)(()=>{f(!1)},[f]);let p=(0,_.useCallback)(async()=>{if(!u.current){u.current=!0;try{let n=await fr(e.length,Ld,!1);(0,_.startTransition)(()=>{t(e=>[...e,...n.entries]),r(n.total)})}catch{}finally{u.current=!1}}},[e.length]);(0,_.useEffect)(()=>{let t=d.current;if(!t)return;let r=new IntersectionObserver(t=>{t.some(e=>e.isIntersecting)&&e.length<n&&p()},{rootMargin:`800px`});return r.observe(t),()=>r.disconnect()},[e.length,n,p]);let m=(0,_.useMemo)(()=>Vd(e),[e]);return(0,W.jsxs)(Ud,{children:[(0,W.jsxs)(Wd,{children:[(0,W.jsxs)(Gd,{children:[(0,W.jsx)(`span`,{children:`Gallery`}),(0,W.jsx)(Kd,{children:i?`scanning…`:`${e.length} of ${n} pictures`})]}),(0,W.jsx)(qd,{onClick:()=>{l(!0),f(!0).finally(()=>l(!1))},title:`Scan the folders again`,type:`button`,children:(0,W.jsx)(Jd,{$spinning:c,children:(0,W.jsx)(ao,{size:14})})})]}),o&&(0,W.jsx)(of,{children:o}),!o&&!i&&n===0&&(0,W.jsx)(of,{children:`No pictures found.`}),(0,W.jsxs)(Yd,{children:[m.map(e=>(0,W.jsxs)(Xd,{children:[(0,W.jsx)(Zd,{children:e.label}),(0,W.jsx)(Qd,{children:e.entries.map(e=>(0,W.jsx)(zd,{entry:e},e.path))})]},e.label)),(0,W.jsx)(af,{ref:d})]})]})}var zd=(0,_.memo)(function({entry:e}){let t=Si(e.path,128,e.modified),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(!1);return(0,W.jsxs)($d,{title:e.name,children:[(!t||!n||i)&&(0,W.jsx)(ef,{}),t&&!i&&(0,W.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>a(!0),onLoad:()=>r(!0),src:t}),(0,W.jsxs)(tf,{children:[(0,W.jsx)(nf,{children:e.name}),(0,W.jsx)(rf,{children:`${Bd(e.name)} · ${Ri(e.size)}`})]})]})});function Bd(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toUpperCase():`FILE`}function Vd(e){let t=[];for(let n of e){let e=Hd(n.modified),r=t[t.length-1];r?.label===e?r.entries.push(n):t.push({label:e,entries:[n]})}return t}function Hd(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(zi(),{weekday:`long`}):t.toLocaleDateString(zi(),{year:`numeric`,month:`long`,day:`numeric`})}var Ud=H.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Wd=H.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,Gd=H.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,Kd=H.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,qd=H.button`
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
`,Jd=H.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,Yd=H.div`
    flex: 1;
    min-height: 0;
    padding: 14px 22px 30px;
    overflow-y: auto;
`,Xd=H.section`
    & + & {
        margin-top: 28px;
    }
`,Zd=H.h2`
    position: sticky;
    top: -14px;
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 0 -22px 12px;
    padding: 9px 22px;
    background: var(--bg-primary);
    font-size: 12px;
    font-weight: 600;
    color: var(--text-secondary);
    letter-spacing: 0.01em;

    /* A short accent bar marks the day; the rule then carries the eye across to the first tile. */
    &::before {
        content: "";
        width: 3px;
        height: 12px;
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    &::after {
        content: "";
        flex: 1;
        height: 1px;
        background: linear-gradient(to right, var(--border-color), transparent);
    }
`,Qd=H.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    /* Explicit row height: an auto row collapses to nothing in Chromium when the tile is a shrinking
       flex box, which once left the gallery as a wall of empty strips. */
    grid-auto-rows: 124px;
    gap: 12px;
    align-content: start;
`,$d=H.div`
    position: relative;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    /* Transparent pictures show the app's own background, not a black box. */
    background: var(--bg-primary);
    overflow: hidden;
    /* Tiles far below the viewport are laid out but not painted, which is what keeps a long
       scroll smooth. The intrinsic size matches the real cell so the scrollbar does not jump. */
    content-visibility: auto;
    contain-intrinsic-size: 200px 124px;
    transition: border-color 120ms ease;

    &:hover {
        border-color: var(--border-color-hover);
    }

    img {
        position: relative;
        z-index: 1;
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`,ef=H.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    background:
            radial-gradient(circle at 50% 45%, rgba(99, 102, 241, 0.12), transparent 60%),
            rgba(15, 23, 42, 0.6);
`,tf=H.span`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 20px 8px 7px;
    background: linear-gradient(to top, rgba(2, 6, 23, 0.92), rgba(2, 6, 23, 0));
    overflow: hidden;
`,nf=H.span`
    overflow: hidden;
    font-size: 11px;
    color: #e5e7eb;
    text-overflow: ellipsis;
    white-space: nowrap;
`,rf=H.span`
    font-family: var(--font-mono);
    font-size: 10px;
    color: #9ca3af;
    text-overflow: ellipsis;
    white-space: nowrap;
`,af=H.div`
    height: 1px;
`,of=H.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function sf({places:e,drives:t,recent:n,recentLimit:r,currentPath:i,activeKind:a,homePath:o=``,version:s=0,historyVersion:c=0,onNavigate:l,onOpenView:u}){let[d,f]=(0,_.useState)([]),[p,m]=(0,_.useState)(null),h=Ji();(0,_.useEffect)(()=>{xr().then(e=>{m(e),f(bs(e).filter(e=>e.pinned))},()=>{m(null),f([])})},[s]);let g=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>pf(e.path,t));return{name:p?.placeNames?.[t]??n?.name??(Hi(t)||t),path:t,kind:`folder`,icon:n?.icon??p?.placeIcons?.[t]??null}}),v=a===`files`;return(0,W.jsxs)(mf,{children:[(0,W.jsxs)(hf,{children:[(0,W.jsxs)(bf,{$active:a===`home`,onClick:()=>u(`home`),title:`Overview`,type:`button`,children:[(0,W.jsx)(Po,{}),(0,W.jsx)(Sf,{children:`Overview`})]}),(0,W.jsxs)(bf,{$active:a===`recycle`,onClick:()=>u(`recycle`),title:`Recycle Bin`,type:`button`,children:[(0,W.jsx)(go,{}),(0,W.jsx)(Sf,{children:`Recycle Bin`})]}),(0,W.jsxs)(bf,{$active:a===`gallery`,onClick:()=>u(`gallery`),title:`Gallery`,type:`button`,children:[(0,W.jsx)(So,{}),(0,W.jsx)(Sf,{children:`Gallery`})]})]}),d.map(e=>(0,W.jsxs)(_f,{children:[(0,W.jsxs)(bf,{as:`div`,$active:!1,children:[(0,W.jsx)(xf,{children:(0,W.jsx)(Ss,{panel:e,size:16})}),(0,W.jsx)(Sf,{children:e.title})]}),(0,W.jsx)(vf,{children:(0,W.jsxs)(yf,{children:[e.kind===`quick`&&g(e).map(e=>(0,W.jsxs)(bf,{$active:v&&pf(i,e.path),onClick:t=>l(e.path,ii(t)),title:e.path,type:`button`,children:[(0,W.jsx)(Cs,{place:e}),(0,W.jsx)(Sf,{children:e.name})]},e.path)),e.kind===`recent`&&n.slice(0,r).map(e=>{let t=Yi(h,e.path);return(0,W.jsxs)(bf,{$active:v&&pf(i,e.path),onClick:t=>e.isDirectory?l(e.path,ii(t)):void $n(e.path),title:e.path,type:`button`,children:[t&&h.useIcons?(0,W.jsx)(Cs,{place:t}):(0,W.jsx)(Bs,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,W.jsx)(Sf,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,W.jsx)(uf,{historyVersion:c,onNavigate:l}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,W.jsxs)(bf,{$active:v&&pf(i,e.name),onClick:t=>l(e.name,ii(t)),title:e.name,type:`button`,children:[(0,W.jsx)(no,{}),(0,W.jsxs)(Sf,{children:[Gi(e),(0,W.jsxs)(Cf,{children:[Ri(e.freeSpace),` free`]}),(0,W.jsx)(wf,{children:(0,W.jsx)(Tf,{$used:t,$tone:Vi(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,W.jsx)(df,{onNavigate:l,path:e.path||o})]})})]},e.id)),(0,W.jsx)(gf,{children:(0,W.jsxs)(bf,{$active:a===`settings`,onClick:()=>u(`settings`),title:`Settings`,type:`button`,children:[(0,W.jsx)(uo,{}),(0,W.jsx)(Sf,{children:`Settings`})]})})]})}var cf=10,lf=40;function uf({historyVersion:e=0,onNavigate:t}){let[n,r]=(0,_.useState)(null),i=Ji();return(0,_.useEffect)(()=>{mr().then(r,()=>r([]))},[e]),(n??[]).slice(0,15).map(e=>{let n=Yi(i,e.path);return(0,W.jsxs)(bf,{$active:!1,onClick:n=>t(e.path,ii(n)),title:`${e.count} ${e.count===1?`visit`:`visits`} · ${e.path}`,type:`button`,children:[n&&i.useIcons?(0,W.jsx)(Cs,{place:n}):(0,W.jsx)(Bs,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,W.jsx)(Sf,{children:n?.name||e.name})]},e.path)})}function df({path:e,onNavigate:t}){let[n,r]=(0,_.useState)(null);(0,_.useEffect)(()=>{e&&(r(null),er(e,!1).then(r,()=>r(null)))},[e]),(0,_.useEffect)(()=>{if(e&&U.available)return U.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&pf(n.data.path,e)&&er(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,cf),o=i.filter(e=>!e.isDirectory).slice(0,lf);return(0,W.jsxs)(W.Fragment,{children:[a.map(e=>(0,W.jsx)(ff,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,W.jsx)(ff,{entry:e,onNavigate:t},e.fullPath))]})}function ff({entry:e,onNavigate:t}){let n=Ji(),r=Yi(n,e.fullPath);return(0,W.jsxs)(bf,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,ii(n)):void $n(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,W.jsx)(Cs,{place:r}):(0,W.jsx)(Bs,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,W.jsx)(Sf,{children:r?.name||e.name})]})}function pf(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}var mf=H.aside`
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
    background: var(--bg-secondary);
    border-right: 1px solid var(--border-color);
    transition: width 150ms ease, padding 150ms ease, box-shadow 150ms ease;

    &::-webkit-scrollbar {
        display: none;
    }

    &:hover {
        width: 224px;
        padding: 10px 10px;
        box-shadow: 14px 0 34px rgba(0, 0, 0, 0.45);
        overflow-y: auto;
        scrollbar-width: none;
    }

    &:not(:hover) ${()=>Cf},
    &:not(:hover) ${()=>wf} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,hf=H.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,gf=H(hf)`
    margin-top: auto;
`,_f=H.div`
    display: flex;
    flex-direction: column;
`,vf=H.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${mf}:hover ${_f}:hover > & {
        grid-template-rows: 1fr;
    }
`,yf=H.div`
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
`,bf=H.button`
    display: flex;
    align-items: center;
    gap: 9px;
    width: 100%;
    padding: 6px 8px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: ${({$active:e})=>e?`rgba(99, 102, 241, 0.14)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 12.5px;
    text-align: left;
    cursor: pointer;

    svg {
        flex-shrink: 0;
        color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    }

    &:hover {
        background: var(--bg-card-hover);
        border-color: var(--border-color);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,xf=H.span`
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
`,Sf=H.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Cf=H.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,wf=H.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Tf=H.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`;function Ef({tasks:e,onClear:t}){let[n,r]=(0,_.useState)(!1),i=(0,_.useRef)(null),a=e.filter(e=>e.state===`running`).length;return(0,_.useEffect)(()=>{if(!n)return;let e=e=>{i.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[n]),(0,W.jsxs)(Of,{ref:i,children:[(0,W.jsxs)(kf,{$active:n,onClick:()=>r(e=>!e),title:a>0?`${a} operation(s) running`:`Activity`,type:`button`,children:[(0,W.jsx)(ho,{size:13}),a>0&&(0,W.jsx)(Af,{children:a>9?`9+`:a})]}),n&&(0,W.jsxs)(jf,{children:[(0,W.jsxs)(Mf,{children:[(0,W.jsx)(Nf,{children:`Activity`}),(0,W.jsxs)(Pf,{children:[(0,W.jsx)(Ff,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:`Clear finished`}),(0,W.jsx)(If,{onClick:()=>r(!1),title:`Close`,type:`button`,children:(0,W.jsx)(vo,{size:10})})]})]}),e.length===0?(0,W.jsx)(Rf,{children:`No operations yet.`}):(0,W.jsx)(Lf,{children:e.map(e=>(0,W.jsx)(Df,{task:e},e.id))})]})]})}function Df({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,W.jsxs)(zf,{children:[(0,W.jsxs)(Bf,{children:[(0,W.jsx)($,{$state:e.state,children:e.state===`done`?(0,W.jsx)(_o,{size:10}):e.state===`failed`?(0,W.jsx)(vo,{size:10}):(0,W.jsx)(Vf,{})}),(0,W.jsx)(Hf,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,W.jsxs)(Uf,{children:[Ri(e.bytesDone),` / `,Ri(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,W.jsxs)(Uf,{children:[e.done,` / `,e.total]})]}),i&&(0,W.jsx)(Wf,{children:(0,W.jsx)(Gf,{$percent:r,$indeterminate:t===0})}),e.error&&(0,W.jsx)(Kf,{children:e.error})]})}var Of=H.div`
    position: relative;
    display: flex;
`,kf=H.button`
    position: relative;
    display: grid;
    place-items: center;
    width: 38px;
    height: 100%;
    border: 0;
    background: ${({$active:e})=>e?`rgba(148, 163, 184, 0.14)`:`transparent`};
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        background: rgba(148, 163, 184, 0.14);
        color: var(--text-primary);
    }
`,Af=H.span`
    position: absolute;
    top: 6px;
    right: 5px;
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
`,jf=H.div`
    position: absolute;
    top: calc(100% + 6px);
    right: 0;
    z-index: 60;
    width: 340px;
    max-height: 380px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 40px rgba(2, 6, 23, 0.55);
`,Mf=H.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 9px 10px;
    border-bottom: 1px solid var(--border-color);
`,Nf=H.span`
    font-size: 11px;
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: 0.04em;
    text-transform: uppercase;
`,Pf=H.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Ff=H.button`
    padding: 3px 6px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:hover:not(:disabled) {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.45;
        cursor: default;
    }
`,If=H.button`
    display: grid;
    place-items: center;
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,Lf=H.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,Rf=H.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,zf=H.div`
    padding: 7px 8px;
    border-radius: var(--radius-sm);

    & + & {
        border-top: 1px solid rgba(148, 163, 184, 0.08);
    }
`,Bf=H.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,$=H.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(59, 130, 246, 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,Vf=H.span`
    width: 9px;
    height: 9px;
    border: 2px solid rgba(59, 130, 246, 0.25);
    border-top-color: var(--accent-primary);
    border-radius: 50%;
    animation: yafm-task-spin 800ms linear infinite;

    @keyframes yafm-task-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,Hf=H.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Uf=H.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Wf=H.div`
    height: 4px;
    margin: 6px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(148, 163, 184, 0.16);
`,Gf=H.div`
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
`,Kf=H.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;function qf({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let[o,s]=(0,_.useState)(!1),c=(0,_.useRef)(null);(0,_.useEffect)(()=>{if(!o)return;let e=e=>{c.current?.contains(e.target)||s(!1)},t=e=>{e.key===`Escape`&&s(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]),(0,_.useEffect)(()=>{a&&s(!1)},[a]);let l=e.columns,u=e=>{let t=new Set(l);t.has(e)?t.delete(e):t.add(e);let r=sc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,W.jsxs)(Jf,{ref:c,children:[(0,W.jsx)(Yf,{disabled:a,onClick:()=>s(e=>!e),title:`View`,type:`button`,children:e.mode===`grid`?(0,W.jsx)(mo,{size:14}):(0,W.jsx)(po,{size:14})}),o&&(0,W.jsxs)(Xf,{children:[(0,W.jsx)(Zf,{children:`View`}),(0,W.jsxs)(Qf,{children:[(0,W.jsxs)($f,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,W.jsx)(po,{size:12}),` List`]}),(0,W.jsxs)($f,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,W.jsx)(mo,{size:12}),` Grid`]})]}),(0,W.jsx)(Zf,{children:`List icon size`}),(0,W.jsxs)(ep,{children:[(0,W.jsx)(`input`,{"aria-label":`List icon size`,max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,W.jsxs)(tp,{children:[e.iconSize,`px`]})]}),(0,W.jsx)(Zf,{children:`Grid size`}),(0,W.jsxs)(ep,{children:[(0,W.jsx)(`input`,{"aria-label":`Grid size`,max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,W.jsxs)(tp,{children:[e.gridSize,`px`]})]}),(0,W.jsxs)(Zf,{children:[`Columns`,(0,W.jsx)(Y,{})]}),sc.map(e=>(0,W.jsxs)(np,{children:[(0,W.jsx)(`input`,{checked:l.includes(e.id),onChange:()=>u(e.id),type:`checkbox`}),(0,W.jsx)(`span`,{children:e.label})]},e.id)),(0,W.jsxs)(np,{children:[(0,W.jsx)(`input`,{checked:l.includes(`linkTarget`),onChange:()=>u(`linkTarget`),type:`checkbox`}),(0,W.jsx)(`span`,{children:`Link target after the name`})]}),(0,W.jsxs)(Zf,{children:[`Preview panel`,(0,W.jsx)(Y,{})]}),(0,W.jsxs)(np,{children:[(0,W.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,W.jsx)(`span`,{children:`Preview under the list`})]})]})]})}var Jf=H.div`
    position: relative;
    display: flex;
    height: 100%;
`,Yf=H.button`
    display: grid;
    place-items: center;
    width: 42px;
    height: 100%;
    border: 0;
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        background: rgba(148, 163, 184, 0.14);
        color: var(--text-primary);
    }

    &:disabled {
        background: transparent;
        opacity: 0.4;
        cursor: default;
    }
`,Xf=H.div`
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 60;
    width: 232px;
    padding: 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
`,Zf=H.div`
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 10px 0 5px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);

    &:first-child {
        margin-top: 2px;
    }
`,Qf=H.div`
    display: flex;
    gap: 4px;
`,$f=H.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    flex: 1;
    padding: 5px 6px;
    border: 1px solid ${({$on:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$on:e})=>e?`rgba(59, 130, 246, 0.18)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 11px;
    cursor: pointer;
`,ep=H.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,tp=H.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,np=H.label`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 3px 0;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,rp=e=>(0,W.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,W.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),ip=e=>(0,W.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,W.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),ap=e=>(0,W.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,W.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),op=e=>(0,W.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,W.jsx)(`path`,{d:`M2 5h6`})}),sp=e=>(0,W.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,W.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),cp=e=>(0,W.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,W.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,W.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function lp({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,view:o,onViewChange:s,onColumns:c,showImages:l,onShowImages:u,tasks:d,onClearTasks:f,trayCount:p,trayVisible:m,onToggleTray:h}){let g=Gn(),v=Kn(),[y,b]=(0,_.useState)({left:!1,right:!1}),[x,S]=(0,_.useState)(null),C=(0,_.useRef)(null),w=(0,_.useRef)(null),T=(0,_.useCallback)(()=>{let e=C.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;b(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,_.useEffect)(()=>{T();let e=C.current;if(!e)return;let t=new ResizeObserver(T);return t.observe(e),()=>t.disconnect()},[T,e.length]),(0,_.useEffect)(()=>{w.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let ee=e=>C.current?.scrollBy({left:e,behavior:`smooth`});return(0,W.jsxs)(fp,{children:[(0,W.jsx)(pp,{children:(0,W.jsx)(yo,{size:19})}),(0,W.jsxs)(mp,{children:[y.left&&(0,W.jsx)(gp,{onClick:()=>ee(-180),title:`Scroll tabs left`,type:`button`,children:(0,W.jsx)(rp,{})}),(0,W.jsx)(hp,{onScroll:T,onWheel:e=>{let t=C.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:C,children:e.map(e=>(0,W.jsxs)(_p,{$active:e.id===t,$dragging:x===e.id,draggable:!0,onDragEnd:()=>S(null),onDragOver:e=>{x&&e.preventDefault()},onDragStart:()=>S(e.id),onDrop:t=>{t.preventDefault(),x&&a(x,e.id),S(null)},onClick:()=>n(e.id),ref:e.id===t?w:void 0,title:e.path||e.title,type:`button`,children:[(0,W.jsx)(up,{tab:e}),(0,W.jsx)(vp,{children:e.title}),(0,W.jsx)(yp,{onClick:t=>{t.stopPropagation(),r(e.id)},title:`Close tab`,children:(0,W.jsx)(ap,{})})]},e.id))}),y.right&&(0,W.jsx)(gp,{onClick:()=>ee(180),title:`Scroll tabs right`,type:`button`,children:(0,W.jsx)(ip,{})}),(0,W.jsx)(bp,{onClick:i,title:`New tab`,type:`button`,children:(0,W.jsx)(oo,{size:13})})]}),(0,W.jsx)(xp,{...v}),(0,W.jsxs)(Sp,{children:[(0,W.jsxs)(Cp,{$active:m,disabled:p===0,onClick:h,title:`File tray`,type:`button`,children:[(0,W.jsx)(Yo,{size:14}),p>0&&(0,W.jsx)(wp,{children:p>9?`9+`:p})]}),(0,W.jsx)(Ef,{tasks:d,onClear:f}),(0,W.jsx)(qf,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:s,onColumns:c,onShowImages:u,showImages:l,view:o}),(0,W.jsx)(Tp,{onClick:g.minimize,title:`Minimize`,type:`button`,children:(0,W.jsx)(op,{})}),(0,W.jsx)(Tp,{onClick:g.toggleMaximize,title:g.maximized?`Restore`:`Maximize`,type:`button`,children:g.maximized?(0,W.jsx)(cp,{}):(0,W.jsx)(sp,{})}),(0,W.jsx)(Ep,{onClick:g.close,title:`Close`,type:`button`,children:(0,W.jsx)(ap,{})})]})]})}function up({tab:e}){switch(e.kind){case`home`:return(0,W.jsx)($a,{size:13});case`settings`:return(0,W.jsx)(uo,{size:13});case`recycle`:return(0,W.jsx)(go,{size:13});default:return(0,W.jsx)(dp,{place:e.place})}}function dp({place:e}){return e?(0,W.jsx)(Cs,{place:e,size:13}):(0,W.jsx)(eo,{size:13})}var fp=H.header`
    display: flex;
    align-items: stretch;
    height: 38px;
    flex-shrink: 0;
    background: rgba(7, 11, 18, 0.95);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,pp=H.span`
    display: grid;
    place-items: center;
    align-self: center;
    width: 22px;
    height: 22px;
    margin-left: 12px;
    flex-shrink: 0;
`,mp=H.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 4px;
`,hp=H.div`
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
`,gp=H.button`
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
`,_p=H.button`
    display: flex;
    align-items: center;
    gap: 7px;
    width: 168px;
    height: 30px;
    flex: 0 0 auto;
    padding: 0 6px 0 10px;
    border: 1px solid ${({$active:e})=>e?`var(--border-color)`:`transparent`};
    border-bottom: 0;
    border-radius: 7px 7px 0 0;
    background: ${({$active:e})=>e?`var(--bg-card-hover)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 11px;
    cursor: pointer;
    opacity: ${({$dragging:e})=>e?.45:1};
    transition: background 110ms ease, color 110ms ease, opacity 110ms ease;

    svg {
        flex-shrink: 0;
        color: ${({$active:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    }

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }

    &:hover > span:last-child {
        opacity: 1;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: -2px;
    }
`,vp=H.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,yp=H.span`
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
        background: rgba(148, 163, 184, 0.22);
        color: var(--text-primary);
    }
`,bp=H.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    margin-bottom: 2px;
    border: 0;
    border-radius: 6px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,xp=H.div`
    flex: 1;
    min-width: 28px;
`,Sp=H.div`
    display: flex;
    flex-shrink: 0;
`,Cp=H.button`
    position: relative;
    display: grid;
    place-items: center;
    width: 34px;
    height: 100%;
    border: 0;
    background: ${({$active:e})=>e?`rgba(148, 163, 184, 0.14)`:`transparent`};
    color: var(--text-secondary);
    cursor: pointer;

    &:hover:not(:disabled) {
        background: rgba(148, 163, 184, 0.14);
        color: var(--text-primary);
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }
`,wp=H.span`
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
`,Tp=H.button`
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
        background: rgba(148, 163, 184, 0.14);
        color: var(--text-primary);
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: -2px;
    }
`,Ep=H(Tp)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`,Dp={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`},Op=`yafm://`,kp={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`},Ap=0;function jp(e){return`${Op}${e===`home`?`overview`:e}`}function Mp(e){return e.toLowerCase().startsWith(Op)?kp[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Np(e){let t=e.trim();if(t.length===0)return null;if(!t.toLowerCase().startsWith(Op))return t;let n=kp[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?jp(n):null}function Pp(e){return e.history[e.index]??jp(`home`)}function Fp(e){return Mp(Pp(e))??`files`}function Ip(e){let t=Pp(e);return Mp(t)?``:e.listing?.path||t}function Lp(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||Xn.iconSize,gridSize:e.view?.gridSize||t.gridSize||Xn.gridSize,sort:e.view?.sort??Xn.sort,sortDescending:e.view?.sortDescending??Xn.sortDescending,columns:t.columns??Zn.columns??[]}}function Rp(e=jp(`home`)){return Ap+=1,{id:`tab-${Ap}`,listing:null,loading:!Mp(e),error:null,history:[e],index:0,fresh:!0,view:null}}function zp(e){return e instanceof Error?e.message:String(e)}function Bp(e,t){let n=e=>e.replace(/[\\/]+/g,`\\`).replace(/\\$/,``).toLowerCase();return n(e)===n(t)}function Vp(e){let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0);return`${e.entries.length} items · ${Ri(t)}`}function Hp(){let[e,t]=(0,_.useState)(()=>[Rp()]),[n,r]=(0,_.useState)(()=>e[0].id),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)([]),[u,d]=(0,_.useState)(null),f=qn(),[p,m]=(0,_.useState)(Ci),[h,g]=(0,_.useState)(0),[v,y]=(0,_.useState)(0),[b,x]=(0,_.useState)([]),[S,C]=(0,_.useState)(10),[w,T]=(0,_.useState)(null),[ee,E]=(0,_.useState)(0),[D,O]=(0,_.useState)(ti),[k,te]=(0,_.useState)(0),[ne,A]=(0,_.useState)(0),[re,j]=(0,_.useState)(0),[ie,M]=(0,_.useState)(!0),[N,ae]=(0,_.useState)([]),[oe,se]=(0,_.useState)([]),[ce,le]=(0,_.useState)(!1),[ue,de]=(0,_.useState)(()=>{try{let e=JSON.parse(localStorage.getItem(`yafm.tray.position`)??`null`);if(typeof e?.x==`number`&&typeof e?.y==`number`)return{x:e.x,y:e.y}}catch{}return{x:Math.max(20,window.innerWidth-340),y:110}}),fe=e.find(e=>e.id===n)??e[0],P=Fp(fe),F=Pp(fe),pe=Math.max(e.findIndex(e=>e.id===n),0),I=e.find((e,t)=>t!==pe&&Fp(e)===`files`),L=P===`files`&&i&&I!==void 0,R=w?.defaultView??Zn,me=Lp(fe,R),he=me.columns.includes(`linkCount`),ge=(0,_.useMemo)(()=>{let e={},t=bs(w),n={};for(let[e,t]of Object.entries(w?.placeNames??{}))n[Ui(e)]=t;for(let t of o)e[Ui(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=Ui(t),i=o.find(e=>Ui(e.path)===r);e[r]={name:n[r]??i?.name??(Hi(t)||t),path:t,kind:`folder`,icon:i?.icon??w?.placeIcons?.[t]??null}}return e},[o,w]),_e=(0,_.useMemo)(()=>({places:ge,useIcons:w?.systemIcons===!1}),[ge,w?.systemIcons]),z=w?.defaultView?.showImages??!0,B=w?.defaultView?.imageStripHeight??Zn.imageStripHeight,ve=P===`home`?(0,W.jsx)(Po,{size:13}):P===`settings`?(0,W.jsx)(uo,{size:13}):P===`recycle`?(0,W.jsx)(go,{size:13}):P===`gallery`?(0,W.jsx)(So,{size:13}):void 0,ye=p.open&&p.query.length>0,be=(0,_.useMemo)(()=>ye&&fe.listing?fe.listing.entries.filter(e=>Mi(e.isDirectory?Xi(_e,e.fullPath,e.name):e.name,p)).map(e=>e.fullPath):[],[ye,p,fe.listing,_e]);(0,_.useEffect)(()=>{g(0)},[p.query,p.matchCase,p.regex,fe.listing?.path]);let xe=be.length===0?-1:Math.min(h,be.length-1),Se=(0,_.useCallback)(()=>{m(e=>({...e,open:!1,query:``})),g(0)},[]),Ce=(0,_.useCallback)(()=>{m(e=>({...e,open:!0})),y(e=>e+1)},[]),we=(0,_.useCallback)(e=>{m(t=>({...t,open:!0,query:t.open?t.query+e:e})),y(e=>e+1)},[]),Te=(0,_.useCallback)(e=>{g(t=>be.length===0?0:(Math.min(t,be.length-1)+e+be.length)%be.length)},[be.length]),Ee=(0,_.useRef)({tabs:e,activeId:n});Ee.current={tabs:e,activeId:n};let De=(0,_.useRef)(w);De.current=w;let Oe=(0,_.useRef)(!1),ke=(0,_.useRef)([]),Ae=(0,_.useCallback)((e,n)=>{t(t=>t.map(t=>t.id===e?{...t,...n(t)}:t))},[]),je=(0,_.useRef)(new Map),Me=(0,_.useCallback)(e=>{let t=(je.current.get(e)??0)+1;return je.current.set(e,t),()=>je.current.get(e)===t},[]),Ne=(0,_.useCallback)(async(e,t,n)=>{try{let r=await rr(t,he);if(!n()||!r.listing)return;Ae(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[he,Ae]),Pe=(0,_.useCallback)(async(e,t,n=!1)=>{let r=Me(e);Se();let i=!n||!Ee.current.tabs.find(t=>t.id===e)?.listing;Ae(e,e=>({listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh}));try{i&&Ne(e,t,r);let a=await er(t,!0,he);if(!r())return;Ae(e,e=>({listing:a,view:a.view??null,loading:!1,fresh:!1,history:[...e.history.slice(0,e.index+1),a.path],index:e.index+1})),n||hr(a.path).then(()=>E(e=>e+1))}catch(t){if(!r())return;Ae(e,()=>({loading:!1,error:zp(t)}))}},[Me,he,Ae,Se,Ne]),Fe=(0,_.useCallback)((e,t)=>{let n=Np(t);n&&(Mp(n)?(Se(),Me(e),Ae(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):Pe(e,n))},[Me,Pe,Ae,Se]),Ie=(0,_.useCallback)(async(e,t,n)=>{if(Se(),Mp(t)){Me(e),Ae(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Me(e);Ae(e,()=>({index:n,listing:null,loading:!0,error:null}));try{if(await Ne(e,t,r),!r())return;let n=await er(t,!0,he);if(!r())return;Ae(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(t){if(!r())return;Ae(e,()=>({loading:!1,error:zp(t)}))}},[Me,he,Ae,Se,Ne]),Le=(0,_.useCallback)(e=>{let n=Rp(e??jp(`home`));t(e=>[...e,n]),r(n.id),e&&Pe(n.id,e)},[Pe]),Re=(0,_.useCallback)(e=>{Fe(Ee.current.activeId,jp(e))},[Fe]),ze=(0,_.useCallback)(e=>{let{tabs:n,activeId:i}=Ee.current;if(n.length===1){let e=Rp();t([e]),r(e.id);return}let a=n.findIndex(t=>t.id===e),o=n.filter(t=>t.id!==e);t(o),i===e&&r(o[Math.min(a,o.length-1)].id)},[]),Be=(0,_.useCallback)((e,t=!1)=>{t?Le(e):Fe(Ee.current.activeId,e??jp(`home`))},[Fe,Le]),Ve=(0,_.useCallback)(e=>{let{tabs:t,activeId:n}=Ee.current;if(t.length<2)return;let i=(t.findIndex(e=>e.id===n)+e+t.length)%t.length;r(t[i].id)},[]),He=(0,_.useCallback)(()=>{if(i){a(!1);return}let{tabs:e,activeId:t}=Ee.current,n=e.find(e=>e.id===t);n&&Fp(n)===`files`&&(e.some(e=>e.id!==t&&Fp(e)===`files`)||Le(Ip(n)),a(!0))},[Le,i]),Ue=(0,_.useCallback)(()=>{let{tabs:e,activeId:t}=Ee.current,n=e.find(e=>e.id===t);n&&n.index>0&&Ie(n.id,n.history[n.index-1],n.index-1)},[Ie]),We=(0,_.useCallback)(()=>{let{tabs:e,activeId:t}=Ee.current,n=e.find(e=>e.id===t);n&&n.index<n.history.length-1&&Ie(n.id,n.history[n.index+1],n.index+1)},[Ie]),Ge=(0,_.useCallback)(()=>{let{tabs:e,activeId:t}=Ee.current,n=e.find(e=>e.id===t);n&&Fp(n)===`files`&&n.listing?.parent&&Be(n.listing.parent)},[Be]),Ke=(0,_.useRef)(null),qe=(0,_.useCallback)(()=>{let{tabs:e,activeId:t}=Ee.current,n=e.find(e=>e.id===t);n?.listing&&Pe(n.id,n.listing.path,!0)},[Pe]),Je=(0,_.useCallback)(()=>{for(let e of Ee.current.tabs)e.listing&&Pe(e.id,e.listing.path,!0)},[Pe]),Ye=(0,_.useCallback)(e=>{e.length!==0&&(se(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),le(!0))},[]),Xe=(0,_.useCallback)(async e=>{let t=await Lr(e);Ye(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[Ye]),Ze=(0,_.useCallback)(e=>{let t=new Set(e);se(e=>e.filter(e=>!t.has(e.path)))},[]),Qe=(0,_.useCallback)(()=>se([]),[]),$e=(0,_.useCallback)(e=>{de(e);try{localStorage.setItem(`yafm.tray.position`,JSON.stringify(e))}catch{}},[]),et=(0,_.useCallback)(()=>le(e=>!e),[]),tt=(0,_.useCallback)(async(e,t,n)=>{let r=await Ir(e,t,n);r.ok?(n&&Ze(e),j(e=>e+1),Je()):window.alert(r.error??`The files could not be transferred.`)},[Je,Ze]);(0,_.useEffect)(()=>{if(U.available)return $r().then(ae,()=>void 0),U.on(e=>{let t=e;t.type===`app.tasks.changed`&&Array.isArray(t.data?.tasks)&&ae(t.data.tasks)})},[]);let nt=(0,_.useCallback)(()=>{ei().then(()=>$r().then(ae,()=>void 0))},[]),rt=(0,_.useRef)(-1);(0,_.useEffect)(()=>{if(!U.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await Fr();if(!e||t.sequence===rt.current)return;rt.current=t.sequence,t.entries.length>0&&Ye(t.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Ye]);let it=(0,_.useCallback)(async e=>{let t=e?await qr():await Jr();t.ok?(j(e=>e+1),Je()):t.error&&!t.error.startsWith(`Nothing to`)&&window.alert(t.error)},[Je]),at=(0,_.useRef)(he);(0,_.useEffect)(()=>{at.current!==he&&(at.current=he,Je())},[he,Je]);let ot=(0,_.useCallback)((e,t)=>{let{tabs:n}=Ee.current,r=n.find(t=>t.id===e);if(!r||Fp(r)!==`files`)return;let i=Ip(r),a=De.current?.defaultView??Zn,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||Xn.iconSize,gridSize:r.view?.gridSize||a.gridSize||Xn.gridSize,sort:r.view?.sort??Xn.sort,sortDescending:r.view?.sortDescending??Xn.sortDescending,...t};Ae(e,()=>({view:o})),Ke.current!==null&&window.clearTimeout(Ke.current),Ke.current=window.setTimeout(()=>{Ke.current=null,tr(i,o)},250)},[Ae]),st=(0,_.useCallback)(e=>{ot(Ee.current.activeId,e)},[ot]),ct=(0,_.useCallback)(e=>{let t=De.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??Zn,columns:e}};T(n),Sr(n)},[]),lt=(0,_.useCallback)(e=>{let t=De.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??Zn,showImages:e}};T(n),Sr(n)},[]),ut=(0,_.useCallback)(e=>{let t=De.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??Zn,imageStripHeight:e}};T(n),Sr(n)},[]),dt=(0,_.useCallback)((e,t,n,r)=>{let i=Ee.current.tabs.find(t=>t.id===e);if(!i||Fp(i)!==`files`||!i.listing)return;let a=Ip(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));Ae(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),nr(a,t,n,r)},[Ae]),ft=(0,_.useCallback)((e,t,n)=>{dt(Ee.current.activeId,e,t,n)},[dt]),pt=(0,_.useCallback)((e,t)=>{let n=Ee.current.tabs.find(t=>t.id===e);if(!n)return;let r=Lp(n,De.current?.defaultView??Zn);ot(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[ot]),mt=(0,_.useCallback)(e=>{pt(Ee.current.activeId,e)},[pt]),ht=(0,_.useCallback)((e,n)=>{t(t=>{let r=t.findIndex(t=>t.id===e),i=t.findIndex(e=>e.id===n);if(r<0||i<0||r===i)return t;let a=[...t],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),gt=(0,_.useCallback)(()=>{ir().then(s,()=>s([]))},[]),_t=(0,_.useCallback)(e=>{let n=(e.openTabs??[]).map(Np).filter(e=>e!==null);if(n.length===0)return!1;let i=n.map(e=>({...Rp(e),fresh:!1})),a=Math.min(Math.max(e.activeTab??0,0),i.length-1);t(i),r(i[a].id);for(let e of i)Fp(e)===`files`&&Pe(e.id,Ip(e),!0);return!0},[Pe]),vt=(0,_.useCallback)(e=>{let t=ke.current;if(ke.current=[],t.length===0)return;let{tabs:n}=Ee.current;if(!e&&n.length===1&&n[0].fresh){Fe(n[0].id,t[0]);for(let e of t.slice(1))Le(e)}else for(let e of t)Le(e)},[Le,Fe]),yt=(0,_.useCallback)(()=>{xr().then(e=>{T(e),C(e.recentLimit);let t={...ti,...e.shortcuts};O(t),ri(t.openInNewTab),te(e=>e+1),Oe.current||(Oe.current=!0,vt(e.restoreTabs&&_t(e)))},()=>{C(10),Oe.current=!0,vt(!1)})},[vt,_t]),bt=(0,_.useCallback)(()=>{pr().then(x,()=>x([]))},[]),xt=(0,_.useCallback)(()=>{ar().then(l,()=>l([]))},[]),St=e.map(Pp),Ct=St.join(`
`),wt=Math.max(e.findIndex(e=>e.id===n),0);(0,_.useEffect)(()=>{if(!w?.restoreTabs)return;let e=setTimeout(()=>void Cr(St,wt),700);return()=>clearTimeout(e)},[Ct,wt,w?.restoreTabs]),(0,_.useEffect)(()=>{let{tabs:e,activeId:t}=Ee.current,n=e.find(e=>e.id===t);n&&Fp(n)===`files`&&Pe(n.id,void 0,!0),gt(),yt(),xt(),Or().then(d,()=>d(null))},[Pe,gt,yt,xt]),(0,_.useEffect)(()=>{let e=setInterval(xt,3e4);return()=>clearInterval(e)},[xt]),(0,_.useEffect)(()=>{P===`home`&&(bt(),xt())},[P,fe.id,bt,xt]),(0,_.useEffect)(()=>{if(!U.available)return;let e=U.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=Ee.current,i=t.data.startup===!0;i&&!Oe.current?ke.current.push(n):i&&r.length===1&&r[0].fresh?Fe(r[0].id,n):Le(n)});return U.send({type:`app.ready`}),e},[Fe,Le]),(0,_.useEffect)(()=>{if(U.available)return U.on(e=>{let n=e;if(n.type!==`fs.sizes`||typeof n.data?.path!=`string`||!n.data.sizes)return;let{path:r,sizes:i}=n.data;t(e=>e.map(e=>e.listing?.path===r?{...e,listing:{...e.listing,folderSizes:{...e.listing.folderSizes,...i}}}:e))})},[]),(0,_.useEffect)(()=>{if(U.available)return U.on(e=>{let n=e;if(n.type!==`fs.counts`||typeof n.data?.path!=`string`||!n.data.counts)return;let{path:r,counts:i}=n.data;t(e=>e.map(e=>e.listing?.path===r?{...e,listing:{...e.listing,counts:{...e.listing.counts,...i}}}:e))})},[]),(0,_.useEffect)(()=>{let e=e=>{if(ci(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),Ue();return}if(e.key===`BrowserForward`){e.preventDefault(),We();return}if(e.key===`Escape`&&p.open){e.preventDefault(),Se();return}let t=ai(e);if(t===D.closeTab)e.preventDefault(),ze(Ee.current.activeId);else if(t===D.newTab)e.preventDefault(),Le();else if(t===D.goBack)e.preventDefault(),Ue();else if(t===D.goForward)e.preventDefault(),We();else if(t===D.goUp)e.preventDefault(),Ge();else if(t===D.find)e.preventDefault(),Ce();else if(t===D.location)e.preventDefault(),A(e=>e+1);else if(t===D.home){e.preventDefault();let t=o.find(e=>e.kind===`home`)?.path;t&&Be(t)}else t===D.iconsView?(e.preventDefault(),P===`files`&&st({mode:`grid`})):t===D.detailsView?(e.preventDefault(),P===`files`&&st({mode:`list`})):t===D.nextTab?(e.preventDefault(),Ve(1)):t===D.previousTab?(e.preventDefault(),Ve(-1)):t===D.hidden||t===`alt+.`?(e.preventDefault(),yr().then(()=>{j(e=>e+1),Je()})):t===D.undo?(e.preventDefault(),it(!0)):t===D.redo?(e.preventDefault(),it(!1)):t===D.splitView?(e.preventDefault(),He()):t===D.placesPanel?(e.preventDefault(),M(e=>!e)):P!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),we(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[D,P,p.open,ze,Le,Ue,We,Ge,Ce,Se,we,st,Ve,Be,o,Je,it,He]),(0,_.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),Ue()):e.button===4&&(e.preventDefault(),We())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[Ue,We]),(0,_.useEffect)(()=>{U.available&&P===`files`&&U.send({type:`fs.watch`,payload:{paths:[F]}})},[P,F]),(0,_.useEffect)(()=>{if(U.available)return U.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let{tabs:n,activeId:r}=Ee.current,i=n.find(e=>e.id===r);i&&Fp(i)===`files`&&Bp(Ip(i),t.data.path)&&er(t.data.path,!1,he).then(e=>Ae(i.id,()=>({listing:e})),()=>void 0)})},[he,Ae]);let Tt=fe.index>0,Et=fe.index<fe.history.length-1,Dt=(e,t)=>{let n=t?me:Lp(e,R);return(0,W.jsx)(uc,{enableShortcuts:t,error:e.error,find:t?{...p,currentPath:xe<0?null:be[xe]}:void 0,imageStripHeight:B,listing:e.listing,loading:e.loading,onImageStripHeight:ut,onOpen:(n,r)=>{r?Le(n):t?Be(n):Pe(e.id,n)},onOpenFile:e=>void $n(e),onRefresh:t?qe:()=>{e.listing&&Pe(e.id,e.listing.path,!0)},onSetTags:t?ft:(t,n,r)=>dt(e.id,t,n,r),onSort:t?mt:t=>pt(e.id,t),onTray:Ye,onTransfer:tt,openOnSingleClick:w?.openOnSingleClick??!1,refreshToken:re,shortcuts:D,showCheckboxes:w?.showCheckboxes??!0,showImages:t?z:!1,view:n})},Ot=p.open&&(0,W.jsx)(gl,{current:xe,focusToken:v,matchCase:p.matchCase,mode:p.mode,onClose:Se,onMatchCase:()=>m(e=>({...e,matchCase:!e.matchCase})),onMode:()=>m(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Te(1),onPrevious:()=>Te(-1),onQuery:e=>m(t=>({...t,query:e})),onRegex:()=>m(e=>({...e,regex:!e.regex})),query:p.query,regex:p.regex,total:be.length});return(0,W.jsx)(qi,{value:_e,children:(0,W.jsxs)(Up,{$rounded:f,children:[(0,W.jsx)(lp,{activeId:fe.id,onClose:ze,onNewTab:()=>Le(),onReorder:ht,onSelect:r,onViewChange:st,onColumns:ct,onShowImages:lt,showImages:z,tasks:N,onClearTasks:nt,trayCount:oe.length,trayVisible:ce,onToggleTray:et,view:me,tabs:e.map(e=>{let t=Fp(e),n=Ip(e);return{id:e.id,kind:t,path:n,place:t===`files`?Yi(_e,n):void 0,title:t===`files`?Xi(_e,n,Hi(n)||`Files`):Dp[t]}})}),(0,W.jsxs)(Wp,{children:[ie&&(0,W.jsx)(sf,{activeKind:P,currentPath:P===`files`?F:``,drives:c,historyVersion:ee,onNavigate:e=>Be(e),onOpenView:Re,homePath:o.find(e=>e.kind===`home`)?.path??``,places:o,recent:b,recentLimit:S,version:k}),(0,W.jsxs)(Gp,{$sidebar:ie,children:[(0,W.jsxs)(Kp,{children:[(0,W.jsx)(qp,{disabled:!Tt,onClick:Ue,title:`Back`,type:`button`,children:(0,W.jsx)(so,{})}),(0,W.jsx)(qp,{disabled:!Et,onClick:We,title:`Forward`,type:`button`,children:(0,W.jsx)(co,{})}),(0,W.jsx)(qp,{disabled:P!==`files`||!fe.listing?.parent,onClick:()=>fe.listing?.parent&&Be(fe.listing.parent),title:`Up one level`,type:`button`,children:(0,W.jsx)(io,{})}),!L&&(0,W.jsx)(gu,{focusToken:ne,icon:ve,label:P===`files`?void 0:Dp[P],onNavigate:Be,path:P===`files`?Ip(fe):F})]}),P===`files`?L&&I?(0,W.jsxs)(Jp,{children:[(0,W.jsxs)(Yp,{children:[(0,W.jsx)(Zp,{children:(0,W.jsx)(gu,{focusToken:ne,onNavigate:Be,path:Ip(fe)})}),Dt(fe,!0),Ot]}),(0,W.jsx)(Xp,{}),(0,W.jsxs)(Yp,{children:[(0,W.jsxs)(Zp,{children:[(0,W.jsx)(Qp,{disabled:I.index<=0,onClick:()=>{let e=I.index-1;e>=0&&Ie(I.id,I.history[e],e)},title:`Back`,type:`button`,children:(0,W.jsx)(so,{size:12})}),(0,W.jsx)(Qp,{disabled:I.index>=I.history.length-1,onClick:()=>{let e=I.index+1;e<I.history.length&&Ie(I.id,I.history[e],e)},title:`Forward`,type:`button`,children:(0,W.jsx)(co,{size:12})}),(0,W.jsx)(Qp,{disabled:!I.listing?.parent,onClick:()=>{I.listing?.parent&&Pe(I.id,I.listing.parent)},title:`Up one level`,type:`button`,children:(0,W.jsx)(io,{size:12})}),(0,W.jsx)(gu,{onNavigate:e=>void Pe(I.id,e),path:Ip(I)}),(0,W.jsx)(Qp,{onClick:()=>a(!1),title:`Close split view`,type:`button`,children:(0,W.jsx)(vo,{size:12})})]}),Dt(I,!1)]})]}):(0,W.jsxs)($p,{children:[Dt(fe,!0),Ot]}):P===`home`?(0,W.jsx)(du,{drives:c,historyVersion:ee,homePath:o.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:xt,onHistoryChanged:()=>E(e=>e+1),onOpen:Be,onLayoutChanged:yt,onPlacesChanged:s,onRecentCleared:bt,places:o,recent:b,recentLimit:S,visibilityVersion:re}):P===`settings`?(0,W.jsx)(Qu,{appInfo:u,onSettingsChanged:yt}):P===`gallery`?(0,W.jsx)(Rd,{}):(0,W.jsx)(Du,{}),(0,W.jsxs)(em,{children:[(0,W.jsx)(`span`,{children:P===`files`&&fe.listing?Vp(fe.listing):``}),(0,W.jsx)(`span`,{children:u?`v${u.version} · ${u.platform}`:`browser preview`})]})]})]}),(0,W.jsx)(Ws,{currentDirectory:P===`files`?F:``,items:oe,onAdd:e=>void Xe(e),onClear:Qe,onClose:()=>le(!1),onPosition:$e,onRemove:Ze,onTransfer:tt,position:ue,visible:ce}),(0,W.jsx)(Yn,{})]})})}var Up=H.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    background: var(--bg-primary);

    /* An undecorated window gets no frame from the compositor, so the corners are drawn here. */
    border-radius: ${({$rounded:e})=>e?`10px`:`0`};
    box-shadow: ${({$rounded:e})=>e?`inset 0 0 0 1px var(--border-color)`:`none`};
`,Wp=H.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
    background:
        radial-gradient(1200px 600px at 15% -10%, rgba(99, 102, 241, 0.12), transparent 60%),
        radial-gradient(900px 500px at 110% 20%, rgba(59, 130, 246, 0.08), transparent 55%),
        var(--bg-primary);
`,Gp=H.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: ${({$sidebar:e})=>e?`56px`:`0`};
`,Kp=H.header`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(11, 15, 25, 0.55);
    backdrop-filter: blur(8px);
`,qp=H.button`
    display: grid;
    place-items: center;
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    cursor: pointer;
    transition: color 120ms ease, border-color 120ms ease, background 120ms ease;

    &:hover:not(:disabled) {
        color: var(--text-primary);
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
    }

    &:disabled {
        opacity: 0.35;
        cursor: default;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,Jp=H.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Yp=H.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Xp=H.div`
    width: 1px;
    flex-shrink: 0;
    background: var(--border-color);
`,Zp=H.div`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    border-bottom: 1px solid var(--border-color);
`,Qp=H.button`
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    border: 0;
    border-radius: var(--radius-sm);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        background: var(--bg-card-hover);
        color: var(--text-primary);
    }
`,$p=H.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,em=H.footer`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 8px 22px;
    border-top: 1px solid var(--border-color);
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,tm=document.getElementById(`root`);tm&&(0,v.createRoot)(tm).render((0,W.jsx)(_.StrictMode,{children:(0,W.jsx)(Hp,{})}));