var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function w(){}var T={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function D(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function O(e,t){return D(e.type,t,e.props)}function ee(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function te(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function ne(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(w,w):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function re(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,re(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+te(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),re(o,r,i,``,function(e){return e})):o!=null&&(ee(o)&&(o=O(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+te(a,u),c+=re(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+te(a,u++),c+=re(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return re(ne(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function j(e,t,n){if(e==null)return e;var r=[],i=0;return re(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ie(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var M=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function ae(e){var t=T.T,n={};n.types=t===null?null:t.types,T.T=n;try{var r=e(),i=T.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(w,M)}catch(e){M(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),T.T=t}}function oe(e){var t=T.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else ae(oe.bind(null,e))}var se={map:j,forEach:function(e,t,n){j(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return j(e,function(){t++}),t},toArray:function(e){return j(e,function(e){return e})||[]},only:function(e){if(!ee(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=se,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=T,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return T.H.useMemoCache(e)}},e.addTransitionType=oe,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!E.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return D(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)E.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return D(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ee,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ie}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=ae,e.unstable_useCacheRefresh=function(){return T.H.useCacheRefresh()},e.use=function(e){return T.H.use(e)},e.useActionState=function(e,t,n){return T.H.useActionState(e,t,n)},e.useCallback=function(e,t){return T.H.useCallback(e,t)},e.useContext=function(e){return T.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return T.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return T.H.useEffect(e,t)},e.useEffectEvent=function(e){return T.H.useEffectEvent(e)},e.useId=function(){return T.H.useId()},e.useImperativeHandle=function(e,t,n){return T.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.H.useMemo(e,t)},e.useOptimistic=function(e,t){return T.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return T.H.useReducer(e,t,n)},e.useRef=function(e){return T.H.useRef(e)},e.useState=function(e){return T.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.H.useTransition()},e.version=`19.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&A(x,t.startTime-e)}}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&A(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var ee=new MessageChannel,k=ee.port2;ee.port1.onmessage=D,O=function(){k.postMessage(null)}}else O=function(){_(D,0)};function A(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,A(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function w(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function T(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function E(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var D=Object.assign,O=Symbol.for(`react.element`),ee=Symbol.for(`react.transitional.element`),k=Symbol.for(`react.portal`),A=Symbol.for(`react.fragment`),te=Symbol.for(`react.strict_mode`),ne=Symbol.for(`react.profiler`),re=Symbol.for(`react.consumer`),j=Symbol.for(`react.context`),ie=Symbol.for(`react.forward_ref`),M=Symbol.for(`react.suspense`),ae=Symbol.for(`react.suspense_list`),oe=Symbol.for(`react.memo`),se=Symbol.for(`react.lazy`),ce=Symbol.for(`react.activity`),le=Symbol.for(`react.legacy_hidden`),ue=Symbol.for(`react.memo_cache_sentinel`),de=Symbol.for(`react.view_transition`),fe=Symbol.for(`react.recoverable`),pe=Symbol.iterator;function N(e){return typeof e!=`object`||!e?null:(e=pe&&e[pe]||e[`@@iterator`],typeof e==`function`?e:null)}var me=Symbol.for(`react.client.reference`);function he(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===me?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case A:return`Fragment`;case ne:return`Profiler`;case te:return`StrictMode`;case M:return`Suspense`;case ae:return`SuspenseList`;case ce:return`Activity`;case de:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case k:return`Portal`;case j:return e.displayName||`Context`;case re:return(e._context.displayName||`Context`)+`.Consumer`;case ie:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case oe:return t=e.displayName||null,t===null?he(e.type)||`Memo`:t;case se:t=e._payload,e=e._init;try{return he(e(t))}catch{}}return null}var ge=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_e={pending:!1,data:null,method:null,action:null},ve=[],ye=-1;function be(e){return{current:e}}function xe(e){0>ye||(e.current=ve[ye],ve[ye]=null,ye--)}function I(e,t){ye++,ve[ye]=e.current,e.current=t}var Se=be(null),Ce=be(null),we=be(null),Te=be(null);function Ee(e,t){switch(I(we,t),I(Ce,e),I(Se,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}xe(Se),I(Se,e)}function De(){xe(Se),xe(Ce),xe(we)}function Oe(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,I(Te,e)),t=Se.current;var n=dp(t,e.type);t!==n&&(I(Ce,e),I(Se,n))}function ke(e){Ce.current===e&&(xe(Se),xe(Ce)),Te.current===e&&(xe(Te),sh._currentValue=_e)}var Ae,je;function Me(e){if(Ae===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Ae=t&&t[1]||``,je=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Ae+e+je}var Ne=!1;function Pe(e,t){if(!e||Ne)return``;Ne=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Ne=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Me(n):``}function Fe(e,t){switch(e.tag){case 26:case 27:case 5:return Me(e.type);case 16:return Me(`Lazy`);case 13:return e.child!==t&&t!==null?Me(`Suspense Fallback`):Me(`Suspense`);case 19:return Me(`SuspenseList`);case 0:case 15:return Pe(e.type,!1);case 11:return Pe(e.type.render,!1);case 1:return Pe(e.type,!0);case 31:return Me(`Activity`);case 30:return Me(`ViewTransition`);default:return``}}function Ie(e){try{var t=``,n=null;do t+=Fe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Le=Object.prototype.hasOwnProperty,Re=t.unstable_scheduleCallback,ze=t.unstable_cancelCallback,Be=t.unstable_shouldYield,Ve=t.unstable_requestPaint,He=t.unstable_now,Ue=t.unstable_getCurrentPriorityLevel,We=t.unstable_ImmediatePriority,Ge=t.unstable_UserBlockingPriority,Ke=t.unstable_NormalPriority,qe=t.unstable_LowPriority,Je=t.unstable_IdlePriority,Ye=t.log,Xe=t.unstable_setDisableYieldValue,Ze=null,Qe=null;function $e(e){if(typeof Ye==`function`&&Xe(e),Qe&&typeof Qe.setStrictMode==`function`)try{Qe.setStrictMode(Ze,e)}catch{}}var et=Math.clz32?Math.clz32:rt,tt=Math.log,nt=Math.LN2;function rt(e){return e>>>=0,e===0?32:31-(tt(e)/nt|0)|0}var it=256,at=262144,ot=4194304;function st(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ct(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=st(n))):i=st(o):i=st(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=st(n))):i=st(o)):i=st(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function lt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ut(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-et(n),i=1<<r;t|=e[r],n&=~i}return t}function dt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ft(){var e=ot;return ot<<=1,!(ot&62914560)&&(ot=4194304),e}function pt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function mt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ht(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-et(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&gt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function gt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-et(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function _t(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-et(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function vt(e,t){var n=t&-t;return n=n&42?1:yt(n),(n&(e.suspendedLanes|t))===0?n:0}function yt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function xt(){var e=F.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function St(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var Ct=Math.random().toString(36).slice(2),wt=`__reactFiber$`+Ct,Tt=`__reactProps$`+Ct,Et=`__reactContainer$`+Ct,Dt=`__reactEvents$`+Ct,Ot=`__reactListeners$`+Ct,kt=`__reactHandles$`+Ct,At=`__reactResources$`+Ct,jt=`__reactMarker$`+Ct,Mt=`__reactLoad$`+Ct;function Nt(e){delete e[wt],delete e[Tt],delete e[Ot],delete e[kt]}function Pt(e){var t;if(t=e[wt])return t;for(var n=e.parentNode;n;){if(t=n[Et]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[wt])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Ft(e){if(e=e[wt]||e[Et]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function It(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Lt(e){var t=e[At];return t||=e[At]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Rt(e){e[jt]=!0}function zt(e){e[Mt]=void 0}var Bt=new Set,Vt={};function Ht(e,t){Ut(e,t),Ut(e+`Capture`,t)}function Ut(e,t){for(Vt[e]=t,e=0;e<t.length;e++)Bt.add(t[e])}var Wt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Gt={},Kt={};function qt(e){return Le.call(Kt,e)?!0:Le.call(Gt,e)?!1:Wt.test(e)?Kt[e]=!0:(Gt[e]=!0,!1)}var L=!1;function Jt(){var e=L;return L=!1,e}function Yt(e,t,n){if(qt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Xt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Zt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Qt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function $t(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function en(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function tn(e){if(!e._valueTracker){var t=$t(e)?`checked`:`value`;e._valueTracker=en(e,t,``+e[t])}}function nn(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=$t(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var rn=/[\n"\\]/g;function an(e){return e.replace(rn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function on(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Qt(t)):e.value!==``+Qt(t)&&(e.value=``+Qt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):cn(e,Qt(n)):o===`number`&&e.value==t?cn(e,Qt(e.value)):cn(e,Qt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Qt(s):e.removeAttribute(`name`)}function sn(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){tn(e);return}n=n==null?``:``+Qt(n),t=t==null?n:``+Qt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),tn(e)}function cn(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function ln(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Qt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function un(e,t,n){t!=null&&(t=``+Qt(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+Qt(n)}function dn(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ge(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Qt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),tn(e)}function fn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function mn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||pn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function hn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,L=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(mn(e,a,r),L=!0)}else for(var o in t)t.hasOwnProperty(o)&&mn(e,o,t[o])}function gn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var _n=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),vn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yn(e){return vn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function bn(){}var xn=null;function Sn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cn=null,wn=null;function Tn(e){var t=Ft(e);if(t&&(e=t.stateNode)){var n=e[Tt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(on(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+an(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Tt]||null;if(!a)throw Error(i(90));on(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&nn(r)}break a;case`textarea`:un(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&ln(e,!!n.multiple,t,!1)}}}var En=!1;function Dn(e,t,n){if(En)return e(t,n);En=!0;try{return e(t)}finally{if(En=!1,(Cn!==null||wn!==null)&&(zd(),Cn&&(t=Cn,e=wn,wn=Cn=null,Tn(t),e)))for(t=0;t<e.length;t++)Tn(e[t])}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Tt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var kn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,An=!1;if(kn)try{var jn={};Object.defineProperty(jn,"passive",{get:function(){An=!0}}),window.addEventListener(`test`,jn,jn),window.removeEventListener(`test`,jn,jn)}catch{An=!1}var Mn=null,Nn=null,Pn=null;function Fn(){if(Pn)return Pn;var e,t=Nn,n=t.length,r,i=`value`in Mn?Mn.value:Mn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Pn=i.slice(e,1<r?1-r:void 0)}function In(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ln(){return!0}function R(){return!1}function Rn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Ln:R,this.isPropagationStopped=R,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Ln)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Ln)},persist:function(){},isPersistent:Ln}),t}var zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bn=Rn(zn),Vn=D({},zn,{view:0,detail:0}),Hn=Rn(Vn),Un,Wn,Gn,z=D({},Vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Gn&&(Gn&&e.type===`mousemove`?(Un=e.screenX-Gn.screenX,Wn=e.screenY-Gn.screenY):Wn=Un=0,Gn=e),Un)},movementY:function(e){return`movementY`in e?e.movementY:Wn}}),Kn=Rn(z),B=Rn(D({},z,{dataTransfer:0})),qn=Rn(D({},Vn,{relatedTarget:0})),Jn=Rn(D({},zn,{animationName:0,elapsedTime:0,pseudoElement:0})),Yn=Rn(D({},zn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Xn=Rn(D({},zn,{data:0})),Zn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Qn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},$n={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function er(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$n[e])?!!t[e]:!1}function tr(){return er}var nr=Rn(D({},Vn,{key:function(e){if(e.key){var t=Zn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=In(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Qn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tr,charCode:function(e){return e.type===`keypress`?In(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?In(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),rr=Rn(D({},z,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),ir=Rn(D({},zn,{submitter:0})),ar=Rn(D({},Vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tr})),or=Rn(D({},zn,{propertyName:0,elapsedTime:0,pseudoElement:0})),sr=Rn(D({},z,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),cr=Rn(D({},zn,{newState:0,oldState:0,source:0})),lr=[9,13,27,32],ur=kn&&`CompositionEvent`in window,dr=null;kn&&`documentMode`in document&&(dr=document.documentMode);var fr=kn&&`TextEvent`in window&&!dr,pr=kn&&(!ur||dr&&8<dr&&11>=dr),mr=` `,hr=!1;function gr(e,t){switch(e){case`keyup`:return lr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function _r(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var vr=!1;function yr(e,t){switch(e){case`compositionend`:return _r(t);case`keypress`:return t.which===32?(hr=!0,mr):null;case`textInput`:return e=t.data,e===mr&&hr?null:e;default:return null}}function br(e,t){if(vr)return e===`compositionend`||!ur&&gr(e,t)?(e=Fn(),Pn=Nn=Mn=null,vr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return pr&&t.locale!==`ko`?null:t.data;default:return null}}var xr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!xr[e.type]:t===`textarea`}function Cr(e,t,n,r){Cn?wn?wn.push(r):wn=[r]:Cn=r,t=Jf(t,`onChange`),0<t.length&&(n=new Bn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var wr=null,Tr=null;function Er(e){Vf(e,0)}function Dr(e){if(nn(It(e)))return e}function Or(e,t){if(e===`change`)return t}var kr=!1;if(kn){var Ar;if(kn){var jr=`oninput`in document;if(!jr){var Mr=document.createElement(`div`);Mr.setAttribute(`oninput`,`return;`),jr=typeof Mr.oninput==`function`}Ar=jr}else Ar=!1;kr=Ar&&(!document.documentMode||9<document.documentMode)}function Nr(){wr&&(wr.detachEvent(`onpropertychange`,Pr),Tr=wr=null)}function Pr(e){if(e.propertyName===`value`&&Dr(Tr)){var t=[];Cr(t,Tr,e,Sn(e)),Dn(Er,t)}}function Fr(e,t,n){e===`focusin`?(Nr(),wr=t,Tr=n,wr.attachEvent(`onpropertychange`,Pr)):e===`focusout`&&Nr()}function Ir(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Dr(Tr)}function Lr(e,t){if(e===`click`)return Dr(t)}function Rr(e,t){if(e===`input`||e===`change`)return Dr(t)}function zr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Br=typeof Object.is==`function`?Object.is:zr;function Vr(e,t){if(Br(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Le.call(t,i)||!Br(e[i],t[i]))return!1}return!0}function Hr(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wr(e,t){var n=Ur(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ur(n)}}function Gr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Hr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hr(e.document)}return t}function qr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Jr=kn&&`documentMode`in document&&11>=document.documentMode,Yr=null,Xr=null,Zr=null,Qr=!1;function $r(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qr||Yr==null||Yr!==Hr(r)||(r=Yr,`selectionStart`in r&&qr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&Vr(Zr,r)||(Zr=r,r=Jf(Xr,`onSelect`),0<r.length&&(t=new Bn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Yr)))}function ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var ti={animationend:ei(`Animation`,`AnimationEnd`),animationiteration:ei(`Animation`,`AnimationIteration`),animationstart:ei(`Animation`,`AnimationStart`),transitionrun:ei(`Transition`,`TransitionRun`),transitionstart:ei(`Transition`,`TransitionStart`),transitioncancel:ei(`Transition`,`TransitionCancel`),transitionend:ei(`Transition`,`TransitionEnd`)},ni={},ri={};kn&&(ri=document.createElement(`div`).style,`AnimationEvent`in window||(delete ti.animationend.animation,delete ti.animationiteration.animation,delete ti.animationstart.animation),`TransitionEvent`in window||delete ti.transitionend.transition);function ii(e){if(ni[e])return ni[e];if(!ti[e])return e;var t=ti[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ri)return ni[e]=t[n];return e}var ai=ii(`animationend`),oi=ii(`animationiteration`),si=ii(`animationstart`),ci=ii(`transitionrun`),li=ii(`transitionstart`),ui=ii(`transitioncancel`),di=ii(`transitionend`),fi=new Map,pi=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);pi.push(`scrollEnd`);function mi(e,t){fi.set(e,t),Ht(t,[e])}var hi=0;function gi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=bd.identifierPrefix;var n=hi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function _i(e){if(e==null||typeof e==`string`)return e;var t=null,n=Od;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function vi(e,t){return e=_i(e),t=_i(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var yi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},bi=[],xi=0,Si=0;function Ci(){for(var e=xi,t=Si=xi=0;t<e;){var n=bi[t];bi[t++]=null;var r=bi[t];bi[t++]=null;var i=bi[t];bi[t++]=null;var a=bi[t];if(bi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Di(n,i,a)}}function wi(e,t,n,r){bi[xi++]=e,bi[xi++]=t,bi[xi++]=n,bi[xi++]=r,Si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ti(e,t,n,r){return wi(e,t,n,r),Oi(e)}function Ei(e,t){return wi(e,null,null,t),Oi(e)}function Di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-et(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Oi(e){if(50<kd)throw kd=0,Ad=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ki={};function Ai(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ji(e,t,n,r){return new Ai(e,t,n,r)}function Mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ni(e,t){var n=e.alternate;return n===null?(n=ji(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Pi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Fi(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Mi(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,Se.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case ce:return e=ji(31,n,t,a),e.elementType=ce,e.lanes=o,e;case A:return Ii(n.children,a,o,t);case te:s=8,a|=24;break;case ne:return e=ji(12,n,t,a|2),e.elementType=ne,e.lanes=o,e;case M:return e=ji(13,n,t,a),e.elementType=M,e.lanes=o,e;case ae:return e=ji(19,n,t,a),e.elementType=ae,e.lanes=o,e;case le:case de:return e=a|32,e=ji(30,n,t,e),e.elementType=de,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case j:s=10;break a;case re:s=9;break a;case ie:s=11;break a;case oe:s=14;break a;case se:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ji(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Ii(e,t,n,r){return e=ji(7,e,r,t),e.lanes=n,e}function Li(e,t,n){return e=ji(6,e,null,t),e.lanes=n,e}function Ri(e){var t=ji(18,null,null,0);return t.stateNode=e,t}function zi(e,t,n){return t=ji(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Bi=new WeakMap;function Vi(e,t){if(typeof e==`object`&&e){var n=Bi.get(e);return n===void 0?(t={value:e,source:t,stack:Ie(t)},Bi.set(e,t),t):n}return{value:e,source:t,stack:Ie(t)}}var Hi=[],Ui=0,Wi=null,Gi=0,Ki=[],qi=0,Ji=null,Yi=1,Xi=``;function Zi(e,t){Hi[Ui++]=Gi,Hi[Ui++]=Wi,Wi=e,Gi=t}function Qi(e,t,n){Ki[qi++]=Yi,Ki[qi++]=Xi,Ki[qi++]=Ji,Ji=e;var r=Yi;e=Xi;var i=32-et(r)-1;r&=~(1<<i),n+=1;var a=32-et(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yi=1<<32-et(t)+i|n<<i|r,Xi=a+e}else Yi=1<<a|n<<i|r,Xi=e}function $i(e){e.return!==null&&(Zi(e,1),Qi(e,1,0))}function ea(e){for(;e===Wi;)Wi=Hi[--Ui],Hi[Ui]=null,Gi=Hi[--Ui],Hi[Ui]=null;for(;e===Ji;)Ji=Ki[--qi],Ki[qi]=null,Xi=Ki[--qi],Ki[qi]=null,Yi=Ki[--qi],Ki[qi]=null}function ta(e,t){Ki[qi++]=Yi,Ki[qi++]=Xi,Ki[qi++]=Ji,Yi=t.id,Xi=t.overflow,Ji=e}var na=null,ra=null,V=!1,ia=null,aa=!1,oa=Error(i(519));function sa(e){throw pa(Vi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),oa}function ca(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[wt]=e,t[Tt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<zf.length;n++)Q(zf[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),sn(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),dn(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||ep(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=bn),t=!0):t=!1,t||sa(e,!0)}function la(e){for(na=e.return;na;)switch(na.tag){case 5:case 31:case 13:aa=!1;return;case 27:case 3:aa=!0;return;default:na=na.return}}function ua(e){if(e!==na)return!1;if(!V)return la(e),V=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&ra&&sa(e),la(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));ra=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));ra=dm(e)}else t===27?(t=ra,Sp(e.type)?(e=um,um=null,ra=e):ra=t):ra=na?lm(e.stateNode.nextSibling):null;return!0}function da(){ra=na=null,V=!1}function fa(){var e=ia;return e!==null&&(fd===null?fd=e:fd.push.apply(fd,e),ia=null),e}function pa(e){ia===null?ia=[e]:ia.push(e)}var ma=be(null),ha=null,ga=null;function _a(e,t,n){I(ma,t._currentValue),t._currentValue=n}function va(e){e._currentValue=ma.current,xe(ma)}function ya(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ba(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ya(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ya(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ya(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function xa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Br(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Te.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&ba(t,e,n,r),t.flags|=262144,e!==null}function Sa(e){for(e=e.firstContext;e!==null;){if(!Br(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ca(e){ha=e,ga=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function H(e){return Ta(ha,e)}function wa(e,t){return ha===null&&Ca(e),Ta(e,t)}function Ta(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ga===null){if(e===null)throw Error(i(308));ga=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ga=ga.next=t;return n}var Ea=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Da=t.unstable_scheduleCallback,Oa=t.unstable_NormalPriority,ka={$$typeof:j,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Aa(){return{controller:new Ea,data:new Map,refCount:0}}function ja(e){e.refCount--,e.refCount===0&&Da(Oa,function(){e.controller.abort()})}function Ma(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Na=null;function Pa(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Fa=null,Ia=0,La=0,Ra=null;function za(e,t){if(Fa===null){var n=Fa=[];Ia=0,La=Pf(),Ra={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Ia++,t.then(Ba,Ba),t}function Ba(){if(--Ia===0&&(Na=null,Fa!==null)){Ra!==null&&(Ra.status=`fulfilled`);var e=Fa;Fa=null,La=0,Ra=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Va(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ha=P.S;P.S=function(e,t){if(hd=He(),typeof t==`object`&&t&&typeof t.then==`function`&&za(e,t),Na!==null)for(var n=bf;n!==null;)Ma(n,Na),n=n.next;if(n=e.types,n!==null){for(var r=bf;r!==null;)Ma(r,n),r=r.next;if(La!==0){r=Na,r===null&&(r=Na=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}Ha!==null&&Ha(e,t)};var Ua=be(null);function Wa(){var e=Ua.current;return e===null?$u.pooledCache:e}function Ga(e,t){t===null?I(Ua,Ua.current):I(Ua,t.pool)}function Ka(){var e=Wa();return e===null?null:{parent:ka._currentValue,pool:e}}var qa=Error(i(460)),Ja=Error(i(474)),Ya=Error(i(542)),Xa={then:function(){}};function Za(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Qa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(bn,bn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,no(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(bn,bn);else{if(e=$u,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,no(e),e}throw eo=t,qa}}function $a(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(eo=e,qa):e}}var eo=null;function to(){if(eo===null)throw Error(i(459));var e=eo;return eo=null,e}function no(e){if(e===qa||e===Ya)throw Error(i(483))}var ro=null,io=0;function ao(e){var t=io;return io+=1,ro===null&&(ro=[]),Qa(ro,e,t)}function oo(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function so(e,t){throw t.$$typeof===O?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function co(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=Ni(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Li(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===A?(e=d(e,t,n.props.children,r,n.key),oo(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===se&&$a(i)===t.type)?(t=a(t,n.props),oo(t,n),t.return=e,t):(t=Fi(n.type,n.key,n.props,null,e.mode,r),oo(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=zi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ii(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Li(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case ee:return n=Fi(t.type,t.key,t.props,null,e.mode,n),oo(n,t),n.return=e,n;case k:return t=zi(t,e.mode,n),t.return=e,t;case se:return t=$a(t),f(e,t,n)}if(ge(t)||N(t))return t=Ii(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,ao(t),n);if(t.$$typeof===j)return f(e,wa(e,t),n);so(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case ee:return n.key===i?l(e,t,n,r):null;case k:return n.key===i?u(e,t,n,r):null;case se:return n=$a(n),p(e,t,n,r)}if(ge(n)||N(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,ao(n),r);if(n.$$typeof===j)return p(e,t,wa(e,n),r);so(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case ee:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case k:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case se:return r=$a(r),m(e,t,n,r,i)}if(ge(r)||N(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,ao(r),i);if(r.$$typeof===j)return m(e,t,n,wa(t,r),i);so(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),V&&Zi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return V&&Zi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),V&&Zi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),V&&Zi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return V&&Zi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),V&&Zi(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===A&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case ee:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===A){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),oo(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===se&&$a(l)===r.type){n(e,r.sibling),c=a(r,o.props),oo(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===A?(c=Ii(o.props.children,e.mode,c,o.key),oo(c,o),c.return=e,e=c):(c=Fi(o.type,o.key,o.props,null,e.mode,c),oo(c,o),c.return=e,e=c)}return s(e);case k:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=zi(o,e.mode,c),c.return=e,e=c}return s(e);case se:return o=$a(o),_(e,r,o,c)}if(ge(o))return h(e,r,o,c);if(N(o)){if(l=N(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,ao(o),c);if(o.$$typeof===j)return _(e,r,wa(e,o),c);so(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Li(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{io=0;var i=_(e,t,n,r);return ro=null,i}catch(t){if(t===qa||t===Ya)throw t;var a=ji(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var lo=co(!0),uo=co(!1),fo=!1;function po(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ho(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function go(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Oi(e),Di(e,null,n),t}return wi(e,r,t,n),Oi(e)}function _o(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_t(e,n)}}function vo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var yo=!1;function bo(){if(yo){var e=Ra;if(e!==null)throw e}}function xo(e,t,n,r){yo=!1;var i=e.updateQueue;fo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===La&&(yo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=D({},d,f);break a;case 2:fo=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),od|=o,e.lanes=o,e.memoizedState=d}}function So(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function Co(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)So(n[e],t)}var wo=be(null),To=be(0);function Eo(e,t){e=id,I(To,e),I(wo,t),id=e|t.baseLanes}function Do(){I(To,id),I(wo,wo.current)}function Oo(){id=To.current,xe(wo),xe(To)}var ko=be(null),Ao=null;function jo(e){var t=e.alternate;I(Io,Io.current&1),I(ko,e),Ao===null&&(t===null||wo.current!==null||t.memoizedState!==null)&&(Ao=e)}function Mo(e){I(Io,Io.current),I(ko,e),Ao===null&&(Ao=e)}function No(e){e.tag===22?(I(Io,Io.current),I(ko,e),Ao===null&&(Ao=e)):Po()}function Po(){I(Io,Io.current),I(ko,ko.current)}function Fo(e){xe(ko),Ao===e&&(Ao=null),xe(Io)}var Io=be(0);function Lo(e,t){I(ko,ko.current),I(Io,t)}function Ro(e){xe(Io),xe(ko),Ao===e&&(Ao=null)}function zo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bo=0,U=null,W=null,Vo=null,Ho=!1,Uo=!1,Wo=!1,Go=0,Ko=0,qo=null,Jo=0;function Yo(){throw Error(i(321))}function Xo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Br(e[n],t[n]))return!1;return!0}function Zo(e,t,n,r,i,a){return Bo=a,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,P.H=e===null||e.memoizedState===null?mc:hc,Wo=!1,a=n(r,i),Wo=!1,Uo&&(a=$o(t,n,r,i)),Qo(e),a}function Qo(e){P.H=pc;var t=W!==null&&W.next!==null;if(Bo=0,Vo=W=U=null,Ho=!1,Ko=0,qo=null,t)throw Error(i(300));e===null||Mc||(e=e.dependencies,e!==null&&Sa(e)&&(Mc=!0))}function $o(e,t,n,r){U=e;var a=0;do{if(Uo&&(qo=null),Ko=0,Uo=!1,25<=a)throw Error(i(301));if(a+=1,Vo=W=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}P.H=gc,o=t(n,r)}while(Uo);return o}function es(){var e=P.H,t=e.useState()[0];return t=typeof t.then==`function`?ss(t):t,e=e.useState()[0],(W===null?null:W.memoizedState)!==e&&(U.flags|=1024),t}function ts(){var e=Go!==0;return Go=0,e}function ns(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function rs(e){if(Ho){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ho=!1}Bo=0,Vo=W=U=null,Uo=!1,Ko=Go=0,qo=null}function is(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vo===null?U.memoizedState=Vo=e:Vo=Vo.next=e,Vo}function as(){if(W===null){var e=U.alternate;e=e===null?null:e.memoizedState}else e=W.next;var t=Vo===null?U.memoizedState:Vo.next;if(t!==null)Vo=t,W=e;else{if(e===null)throw U.alternate===null?Error(i(467)):Error(i(310));W=e,e={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},Vo===null?U.memoizedState=Vo=e:Vo=Vo.next=e}return Vo}function os(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ss(e){var t=Ko;return Ko+=1,qo===null&&(qo=[]),e=Qa(qo,e,t),t=U,(Vo===null?t.memoizedState:Vo.next)===null&&(t=t.alternate,P.H=t===null||t.memoizedState===null?mc:hc),e}function cs(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return ss(e);if(e.$$typeof===fe)return;if(e.$$typeof===j)return H(e)}throw Error(i(438,String(e)))}function ls(e){var t=null,n=U.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=U.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=os(),U.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ue;return t.index++,n}function us(e,t){return typeof t==`function`?t(e):t}function ds(e){return fs(as(),W,e)}function fs(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Bo&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===La&&(d=!0);else if((Bo&p)===p){u=u.next,p===La&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,U.lanes|=p,od|=p;f=u.action,Wo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,U.lanes|=f,od|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Br(o,e.memoizedState)&&(Mc=!0,d&&(n=Ra,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ps(e){var t=as(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Br(o,t.memoizedState)||(Mc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ms(e,t,n){var r=U,a=as(),o=V;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Br((W||a).memoizedState,n);if(s&&(a.memoizedState=n,Mc=!0),a=a.queue,zs(_s.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Vo!==null&&!!(Vo.memoizedState.tag&1),Ps(e?9:8,{destroy:void 0},gs.bind(null,r,a,n,t),null),e){if(r.flags|=2048,$u===null)throw Error(i(349));o||Bo&127||hs(r,t,n)}return n}function hs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t=os(),U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function gs(e,t,n,r){t.value=n,t.getSnapshot=r,vs(t)&&ys(e)}function _s(e,t,n){return n(function(){vs(t)&&ys(e)})}function vs(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Br(e,n)}catch{return!0}}function ys(e){var t=Ei(e,2);t!==null&&Pd(t,e,2)}function bs(e){var t=is();if(typeof e==`function`){var n=e;if(e=n(),Wo){$e(!0);try{n()}finally{$e(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:e},t}function xs(e,t,n,r){return e.baseState=n,fs(e,W,typeof r==`function`?r:us)}function Ss(e,t,n,r,a){if(uc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};P.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Cs(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Cs(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=P.T,o={};o.types=a===null?null:a.types,P.T=o;try{var s=n(i,r),c=P.S;c!==null&&c(o,s),ws(e,t,s)}catch(n){Es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),P.T=a}}else try{a=n(i,r),ws(e,t,a)}catch(n){Es(e,t,n)}}function ws(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Ts(e,t,n)},function(n){return Es(e,t,n)}):Ts(e,t,n)}function Ts(e,t,n){t.status=`fulfilled`,t.value=n,Ds(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Cs(e,n)))}function Es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Ds(t),t=t.next;while(t!==r)}e.action=null}function Ds(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Os(e,t){return t}function ks(e,t){if(V){var n=$u.formState;if(n!==null){a:{var r=U;if(V){if(ra){b:{for(var i=ra,a=aa;i.nodeType!==8;)if(!a||(i=lm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){ra=lm(i.nextSibling),r=i.data===`F!`;break a}}sa(r)}r=!1}r&&(t=n[0])}}return n=is(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Os,lastRenderedState:t},n.queue=r,n=sc.bind(null,U,r),r.dispatch=n,r=bs(!1),a=lc.bind(null,U,!1,r.queue),r=is(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Ss.bind(null,U,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function As(e){return js(as(),W,e)}function js(e,t,n){if(t=fs(e,t,Os)[0],e=ds(us)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=ss(t)}catch(e){throw e===qa?Ya:e}else r=t;t=as();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(U.flags|=2048,Ps(9,{destroy:void 0},Ms.bind(null,i,n),null)),[r,a,e]}function Ms(e,t){e.action=t}function Ns(e){var t=as(),n=W;if(n!==null)return js(t,n,e);as(),t=t.memoizedState,n=as();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Ps(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=U.updateQueue,t===null&&(t=os(),U.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Fs(){return as().memoizedState}function Is(e,t,n,r){var i=is();U.flags|=e,i.memoizedState=Ps(1|t,{destroy:void 0},n,r===void 0?null:r)}function Ls(e,t,n,r){var i=as();r=r===void 0?null:r;var a=i.memoizedState.inst;W!==null&&r!==null&&Xo(r,W.memoizedState.deps)?i.memoizedState=Ps(t,a,n,r):(U.flags|=e,i.memoizedState=Ps(1|t,a,n,r))}function Rs(e,t){Is(8390656,8,e,t)}function zs(e,t){Ls(2048,8,e,t)}function Bs(e){U.flags|=4;var t=U.updateQueue;if(t===null)t=os(),U.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Vs(e){var t=as().memoizedState;return Bs({ref:t,nextImpl:e}),function(){if(q&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Hs(e,t){return Ls(4,2,e,t)}function Us(e,t){return Ls(4,4,e,t)}function Ws(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gs(e,t,n){n=n==null?null:n.concat([e]),Ls(4,4,Ws.bind(null,t,e),n)}function Ks(){}function qs(e,t){var n=as();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Xo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Js(e,t){var n=as();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Xo(t,r[1]))return r[0];if(r=e(),Wo){$e(!0);try{e()}finally{$e(!1)}}return n.memoizedState=[r,t],r}function Ys(e,t,n){return n===void 0||Bo&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=Md(),U.lanes|=e,od|=e,n)}function Xs(e,t,n,r){return Br(n,t)?n:wo.current===null?!(Bo&106)||Bo&1073741824&&!(Y&261930)?(Mc=!0,e.memoizedState=n):(e=Md(),U.lanes|=e,od|=e,t):(e=Ys(e,n,r),Br(e,t)||(Mc=!0),e)}function Zs(e,t,n,r,i){var a=F.p;F.p=a!==0&&8>a?a:8;var o=P.T,s={};s.types=o===null?null:o.types,P.T=s,lc(e,!1,t,n);try{var c=i(),l=P.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?cc(e,t,Va(c,r),jd(e)):cc(e,t,r,jd(e))}catch(n){cc(e,t,{then:function(){},status:`rejected`,reason:n},jd())}finally{F.p=a,o!==null&&s.types!==null&&(o.types=s.types),P.T=o}}function Qs(){}function $s(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ec(e).queue;Zs(e,a,t,_e,n===null?Qs:function(){return tc(e),n(r)})}function ec(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:_e,baseState:_e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:_e},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function tc(e){var t=ec(e);t.next===null&&(t=e.alternate.memoizedState),cc(e,t.next.queue,{},jd())}function nc(){return H(sh)}function rc(){return as().memoizedState}function ic(){return as().memoizedState}function ac(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=jd();e=ho(n);var r=go(t,e,n);r!==null&&(Pd(r,t,n),_o(r,t,n)),t={cache:Aa()},e.payload=t;return}t=t.return}}function oc(e,t,n){var r=jd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},uc(e)?dc(t,n):(n=Ti(e,t,n,r),n!==null&&(Pd(n,e,r),fc(n,t,r)))}function sc(e,t,n){cc(e,t,n,jd())}function cc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(uc(e))dc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Br(s,o))return wi(e,t,i,0),$u===null&&Ci(),!1}catch{}if(n=Ti(e,t,i,r),n!==null)return Pd(n,e,r),fc(n,t,r),!0}return!1}function lc(e,t,n,r){if(r={lane:2,revertLane:Pf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},uc(e)){if(t)throw Error(i(479))}else t=Ti(e,n,r,2),t!==null&&Pd(t,e,2)}function uc(e){var t=e.alternate;return e===U||t!==null&&t===U}function dc(e,t){Uo=Ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_t(e,n)}}var pc={readContext:H,use:cs,useCallback:Yo,useContext:Yo,useEffect:Yo,useImperativeHandle:Yo,useLayoutEffect:Yo,useInsertionEffect:Yo,useMemo:Yo,useReducer:Yo,useRef:Yo,useState:Yo,useDebugValue:Yo,useDeferredValue:Yo,useTransition:Yo,useSyncExternalStore:Yo,useId:Yo,useHostTransitionStatus:Yo,useFormState:Yo,useActionState:Yo,useOptimistic:Yo,useMemoCache:Yo,useCacheRefresh:Yo,useEffectEvent:Yo},mc={readContext:H,use:cs,useCallback:function(e,t){return is().memoizedState=[e,t===void 0?null:t],e},useContext:H,useEffect:Rs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Is(4194308,4,Ws.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Is(4194308,4,e,t)},useInsertionEffect:function(e,t){Is(4,2,e,t)},useMemo:function(e,t){var n=is();t=t===void 0?null:t;var r=e();if(Wo){$e(!0);try{e()}finally{$e(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=is();if(n!==void 0){var i=n(t);if(Wo){$e(!0);try{n(t)}finally{$e(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=oc.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=is();return e={current:e},t.memoizedState=e},useState:function(e){e=bs(e);var t=e.queue,n=sc.bind(null,U,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ks,useDeferredValue:function(e,t){return Ys(is(),e,t)},useTransition:function(){var e=bs(!1);return e=Zs.bind(null,U,e.queue,!0,!1),is().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=U,a=is();if(V){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),$u===null)throw Error(i(349));Y&127||hs(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Rs(_s.bind(null,r,o,e),[e]),r.flags|=2048,Ps(9,{destroy:void 0},gs.bind(null,r,o,n,t),null),n},useId:function(){var e=is(),t=$u.identifierPrefix;if(V){var n=Xi,r=Yi;n=(r&~(1<<32-et(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Go++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Jo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:nc,useFormState:ks,useActionState:ks,useOptimistic:function(e){var t=is();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=lc.bind(null,U,!0,n),n.dispatch=t,[e,t]},useMemoCache:ls,useCacheRefresh:function(){return is().memoizedState=ac.bind(null,U)},useEffectEvent:function(e){var t=is(),n={impl:e};return t.memoizedState=n,function(){if(q&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},hc={readContext:H,use:cs,useCallback:qs,useContext:H,useEffect:zs,useImperativeHandle:Gs,useInsertionEffect:Hs,useLayoutEffect:Us,useMemo:Js,useReducer:ds,useRef:Fs,useState:function(){return ds(us)},useDebugValue:Ks,useDeferredValue:function(e,t){return Xs(as(),W.memoizedState,e,t)},useTransition:function(){var e=ds(us)[0],t=as().memoizedState;return[typeof e==`boolean`?e:ss(e),t]},useSyncExternalStore:ms,useId:rc,useHostTransitionStatus:nc,useFormState:As,useActionState:As,useOptimistic:function(e,t){return xs(as(),W,e,t)},useMemoCache:ls,useCacheRefresh:ic,useEffectEvent:Vs},gc={readContext:H,use:cs,useCallback:qs,useContext:H,useEffect:zs,useImperativeHandle:Gs,useInsertionEffect:Hs,useLayoutEffect:Us,useMemo:Js,useReducer:ps,useRef:Fs,useState:function(){return ps(us)},useDebugValue:Ks,useDeferredValue:function(e,t){var n=as();return W===null?Ys(n,e,t):Xs(n,W.memoizedState,e,t)},useTransition:function(){var e=ps(us)[0],t=as().memoizedState;return[typeof e==`boolean`?e:ss(e),t]},useSyncExternalStore:ms,useId:rc,useHostTransitionStatus:nc,useFormState:Ns,useActionState:Ns,useOptimistic:function(e,t){var n=as();return W===null?(n.baseState=e,[e,n.queue.dispatch]):xs(n,W,e,t)},useMemoCache:ls,useCacheRefresh:ic,useEffectEvent:Vs};function _c(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:D({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var vc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=jd(),i=ho(r);i.payload=t,n!=null&&(i.callback=n),t=go(e,i,r),t!==null&&(Pd(t,e,r),_o(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=jd(),i=ho(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=go(e,i,r),t!==null&&(Pd(t,e,r),_o(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=jd(),r=ho(n);r.tag=2,t!=null&&(r.callback=t),t=go(e,r,n),t!==null&&(Pd(t,e,n),_o(t,e,n))}};function yc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Vr(n,r)||!Vr(i,a):!0}function bc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&vc.enqueueReplaceState(t,t.state,null)}function xc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=D({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Sc(e){yi(e)}function Cc(e){console.error(e)}function wc(e){yi(e)}function Tc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Dc(e,t,n){return n=ho(n),n.tag=3,n.payload={element:null},n.callback=function(){Tc(e,t)},n}function Oc(e){return e=ho(e),e.tag=3,e}function kc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ec(t,n,r),typeof i!=`function`&&(vd===null?vd=new Set([this]):vd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Ac(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&xa(t,n,a,!0),n=ko.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Ao===null?Kd():n.alternate===null&&ad===0&&(ad=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Xa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),mf(e,r,a)),!1;case 22:return n.flags|=65536,r===Xa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),mf(e,r,a)),!1}throw Error(i(435,n.tag))}return mf(e,r,a),Kd(),!1}if(V)return t=ko.current,t===null?(r!==oa&&(t=Error(i(423),{cause:r}),pa(Vi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Vi(r,n),a=Dc(e.stateNode,r,a),vo(e,a),ad!==4&&(ad=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==oa&&(e=Error(i(422),{cause:r}),pa(Vi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Vi(o,n),dd===null?dd=[o]:dd.push(o),ad!==4&&(ad=2),t===null)return!0;r=Vi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Dc(n.stateNode,r,e),vo(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(vd===null||!vd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Oc(a),kc(a,e,n,r),vo(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var jc=Error(i(461)),Mc=!1;function Nc(e,t,n,r){t.child=e===null?uo(t,null,n,r):lo(t,e.child,n,r)}function Pc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Ca(t),r=Zo(e,t,n,o,a,i),s=ts(),e!==null&&!Mc?(ns(e,t,i),cl(e,t,i)):(V&&s&&$i(t),t.flags|=1,Nc(e,t,r,i),t.child)}function Fc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Mi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Ic(e,t,a,r,i)):(e=Fi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!ll(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Vr:n,n(o,r)&&e.ref===t.ref)return cl(e,t,i)}return t.flags|=1,e=Ni(a,r),e.ref=t.ref,e.return=t,t.child=e}function Ic(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Vr(a,r)&&e.ref===t.ref){if(Mc=!1,t.pendingProps=r=a,ll(e,i))e.flags&131072&&(Mc=!0);else return t.lanes=e.lanes,cl(e,t,i)}}return Wc(e,t,n,r,i)}function Lc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return zc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ga(t,a===null?null:a.cachePool),a===null?Do():Eo(t,a),No(t);else return r=t.lanes=536870912,zc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ga(t,null),Do(),Po()):(Ga(t,a.cachePool),Eo(t,a),Po(),t.memoizedState=null);return Nc(e,t,i,n),t.child}function Rc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function zc(e,t,n,r,i){var a=Wa();return a=a===null?null:{parent:ka._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ga(t,null),Do(),No(t),e!==null&&xa(e,t,r,!0),t.childLanes=i,null}function Bc(e,t){return t=$c({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Vc(e,t,n){return lo(t,e.child,null,n),e=Bc(t,t.pendingProps),e.flags|=2,Fo(t),t.memoizedState=null,e}function Hc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(V){if(r.mode===`hidden`)return e=Bc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Rc(null,e);if(Mo(t),(e=ra)?(e=am(e,aa),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ji===null?null:{id:Yi,overflow:Xi},retryLane:536870912,hydrationErrors:null},n=Ri(e),n.return=t,t.child=n,na=t,ra=null)):e=null,e===null)throw sa(t);return t.lanes=536870912,null}return Bc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Mo(t),a){if(t.flags&256)t.flags&=-257,t=Vc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(Mc||xa(e,t,n,!1),a=(n&e.childLanes)!==0,Mc||a){if(wo.current===null){if(r=$u,r!==null&&(s=vt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,Ei(e,s),Pd(r,e,s),jc;Kd()}t=Vc(e,t,n)}else e=o.treeContext,ra=lm(s.nextSibling),na=t,V=!0,ia=null,aa=!1,e!==null&&ta(t,e),t=Bc(t,r),t.flags|=134221824;return t}return e=Ni(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Uc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Wc(e,t,n,r,i){return Ca(t),n=Zo(e,t,n,r,void 0,i),r=ts(),e!==null&&!Mc?(ns(e,t,i),cl(e,t,i)):(V&&r&&$i(t),t.flags|=1,Nc(e,t,n,i),t.child)}function Gc(e,t,n,r,i,a){return Ca(t),t.updateQueue=null,n=$o(t,r,n,i),Qo(e),r=ts(),e!==null&&!Mc?(ns(e,t,a),cl(e,t,a)):(V&&r&&$i(t),t.flags|=1,Nc(e,t,n,a),t.child)}function Kc(e,t,n,r,i){if(Ca(t),t.stateNode===null){var a=ki,o=n.contextType;typeof o==`object`&&o&&(a=H(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=vc,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},po(t),o=n.contextType,a.context=typeof o==`object`&&o?H(o):ki,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(_c(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&vc.enqueueReplaceState(a,a.state,null),xo(t,r,a,i),bo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=xc(n,s);a.props=c;var l=a.context,u=n.contextType;o=ki,typeof u==`object`&&u&&(o=H(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&bc(t,a,r,o),fo=!1;var f=t.memoizedState;a.state=f,xo(t,r,a,i),bo(),l=t.memoizedState,s||f!==l||fo?(typeof d==`function`&&(_c(t,n,d,r),l=t.memoizedState),(c=fo||yc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,mo(e,t),o=t.memoizedProps,u=xc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=ki,typeof l==`object`&&l&&(c=H(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&bc(t,a,r,c),fo=!1,f=t.memoizedState,a.state=f,xo(t,r,a,i),bo();var p=t.memoizedState;o!==d||f!==p||fo||e!==null&&e.dependencies!==null&&Sa(e.dependencies)?(typeof s==`function`&&(_c(t,n,s,r),p=t.memoizedState),(u=fo||yc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Sa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Uc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=lo(t,e.child,null,i),t.child=lo(t,null,n,i)):Nc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=cl(e,t,i),e}function qc(e,t,n,r){return da(),t.flags|=256,Nc(e,t,n,r),t.child}var Jc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yc(e){return{baseLanes:e,cachePool:Ka()}}function Xc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=ld),e}function Zc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Io.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(V){if(i?jo(t):Po(),(e=ra)?(e=am(e,aa),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ji===null?null:{id:Yi,overflow:Xi},retryLane:536870912,hydrationErrors:null},n=Ri(e),n.return=t,t.child=n,na=t,ra=null)):e=null,e===null)throw sa(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Po(),i=t.mode,a=$c({mode:`hidden`,children:a},i),r=Ii(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Yc(n),r.childLanes=Xc(e,o,n),t.memoizedState=Jc,Rc(null,r)):(jo(t),Qc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return tl(e,t,a,o,r,c,s,n)}return i?(Po(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=Ni(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Ii(i,a,n,null),i.flags|=2):i=Ni(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Rc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Yc(n):(a=i.cachePool,a===null?a=Ka():(s=ka._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Xc(e,o,n),t.memoizedState=Jc,Rc(e.child,r)):(jo(t),n=e.child,e=n.sibling,n=Ni(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Qc(e,t){return t=$c({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function $c(e,t){return e=ji(22,e,null,t),e.lanes=0,e}function el(e,t,n){return lo(t,e.child,null,n),e=Qc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tl(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(jo(t),t.flags&=-257,el(e,t,c)):t.memoizedState===null?(Po(),o=a.fallback,s=t.mode,a=$c({mode:`visible`,children:a.children},s),o=Ii(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,lo(t,e.child,null,c),a=t.child,a.memoizedState=Yc(c),a.childLanes=Xc(e,r,c),t.memoizedState=Jc,Rc(null,a)):(Po(),t.child=e.child,t.flags|=128,null);if(jo(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,pa({value:a,source:null,stack:null})),el(e,t,c)}if(Mc||xa(e,t,c,!1),r=(c&e.childLanes)!==0,Mc||r){if(wo.current!==null)return el(e,t,c);if(r=$u,r!==null&&(a=vt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,Ei(e,a),Pd(r,e,a),jc;return om(o)||Kd(),el(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,ra=lm(o.nextSibling),na=t,V=!0,ia=null,aa=!1,e!==null&&ta(t,e),t=Qc(t,a.children),t.flags|=134221824,t)}function nl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ya(e.return,t,n)}function rl(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&zo(n)===null&&(t=e),e=e.sibling}return t}function il(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function al(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function ol(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Io.current;if(t.flags&128)return Lo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Lo(t,o),i===`backwards`&&e!==null?(al(e),Nc(e,t,r,n),al(e)):Nc(e,t,r,n),r=V?Gi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nl(e,n,t);else if(e.tag===19)nl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=rl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,al(t)),il(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&zo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}il(t,!0,n,null,a,r);break;case`together`:il(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=rl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),il(t,!1,i,n,a,r)}return t.child}function sl(e,t,n){var r=t.pendingProps;return _a(t,t.type,r.value),Nc(e,t,r.children,n),t.child}function cl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),od|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(xa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Ni(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ni(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ll(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&Sa(e)))}function ul(e,t,n){switch(t.tag){case 3:Ee(t,t.stateNode.containerInfo),_a(t,ka,e.memoizedState.cache),da();break;case 27:case 5:Oe(t);break;case 4:Ee(t,t.stateNode.containerInfo);break;case 10:_a(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Mo(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return jo(t),t.flags|=128,null;r=xa(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Zc(e,t,n):(jo(t),e=cl(e,t,n),e===null?null:e.sibling)}jo(t);break;case 19:if(t.flags&128)return ol(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(xa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return ol(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Lo(t,Io.current),r)break;return null;case 22:return t.lanes=0,Lc(e,t,n,t.pendingProps);case 24:_a(t,ka,e.memoizedState.cache)}return cl(e,t,n)}function dl(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)Mc=!0;else{if(!ll(e,n)&&!(t.flags&128))return Mc=!1,ul(e,t,n);Mc=!!(e.flags&131072)}}else Mc=!1,V&&t.flags&1048576&&Qi(t,Gi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=$a(t.elementType),t.type=e,typeof e==`function`)Mi(e)?(r=xc(e,r),t.tag=1,t=Kc(null,t,e,r,n)):(t.tag=0,t=Wc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===ie){t.tag=11,t=Pc(null,t,e,r,n);break a}if(a===oe){t.tag=14,t=Fc(null,t,e,r,n);break a}if(a===j){t.tag=10,t.type=e,t=sl(null,t,n);break a}}throw t=he(e)||e,Error(i(306,t,``))}}return t;case 0:return Wc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=xc(r,t.pendingProps),Kc(e,t,r,a,n);case 3:a:{if(Ee(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,mo(e,t),xo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,_a(t,ka,r),r!==o.cache&&ba(t,[ka],n,!0),bo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=qc(e,t,r,n);break a}if(r!==a){a=Vi(Error(i(424)),t),pa(a),t=qc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(ra=lm(e.firstChild),na=t,V=!0,ia=null,aa=!0,n=uo(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(da(),r===a){t=cl(e,t,n);break a}Nc(e,t,r,n)}t=t.child}return t;case 26:return Uc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:V||(t.stateNode=fp(t.type,t.pendingProps,we.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Oe(t),e===null&&V&&(r=t.stateNode=hm(t.type,t.pendingProps,we.current),na=t,aa=!0,a=ra,Sp(t.type)?(um=a,ra=lm(r.firstChild)):ra=a),Nc(e,t,t.pendingProps.children,n),Uc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((a=r=ra)&&(r=rm(r,t.type,t.pendingProps,aa),r===null?a=!1:(t.stateNode=r,na=t,ra=lm(r.firstChild),aa=!1,a=!0)),a||sa(t)),Oe(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Zo(e,t,es,null,null,n),sh._currentValue=a),Uc(e,t),Nc(e,t,r,n),t.child;case 6:return e===null&&V&&((e=n=ra)&&(n=im(n,t.pendingProps,aa),n===null?e=!1:(t.stateNode=n,na=t,ra=null,e=!0)),e||sa(t)),null;case 13:return Zc(e,t,n);case 4:return Ee(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=lo(t,null,r,n):Nc(e,t,r,n),t.child;case 11:return Pc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Uc(e,t),Nc(e,t,r,n),t.child;case 8:return Nc(e,t,t.pendingProps.children,n),t.child;case 12:return Nc(e,t,t.pendingProps.children,n),t.child;case 10:return sl(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,Ca(t),a=H(a),r=r(a),t.flags|=1,Nc(e,t,r,n),t.child;case 14:return Fc(e,t,t.type,t.pendingProps,n);case 15:return Ic(e,t,t.type,t.pendingProps,n);case 19:return ol(e,t,n);case 31:return Hc(e,t,n);case 22:return Lc(e,t,n,t.pendingProps);case 24:return Ca(t),r=H(ka),e===null?(a=Wa(),a===null&&(a=$u,o=Aa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},po(t),_a(t,ka,a)):((e.lanes&n)!==0&&(mo(e,t),xo(t,null,null,n),bo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,_a(t,ka,r),r!==a.cache&&ba(t,[ka],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),_a(t,ka,r))),Nc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:V&&$i(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Uc(e,t),Nc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function fl(e){e.flags|=4}function pl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Ud())e.flags|=8192;else throw eo=Xa,Ja}}else e.flags&=-16777217}function ml(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Ud())e.flags|=8192;else throw eo=Xa,Ja}}function hl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:ft(),e.lanes|=t,ud|=t)}function gl(e,t){if(!V)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function _l(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vl(e,t,n){var r=t.pendingProps;switch(ea(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _l(t),null;case 1:return _l(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),va(ka),De(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ua(t)?fl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,fa())),_l(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(fl(t),o===null?(_l(t),pl(t,a,null,r,n)):(_l(t),ml(t,o))):o?o===e.memoizedState?(_l(t),t.flags&=-16777217):(fl(t),_l(t),ml(t,o)):(e=e.memoizedProps,e!==r&&fl(t),_l(t),pl(t,a,e,r,n)),null;case 27:if(ke(t),n=we.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&fl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return _l(t),t.subtreeFlags&=-33554433,null}e=Se.current,ua(t)?ca(t,e):(e=hm(a,r,n),t.stateNode=e,fl(t))}return _l(t),t.subtreeFlags&=-33554433,null;case 5:if(ke(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&fl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return _l(t),t.subtreeFlags&=-33554433,null}if(o=Se.current,ua(t))ca(t,o);else{var s=lp(we.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[wt]=t,o[Tt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&fl(t)}}return _l(t),t.subtreeFlags&=-33554433,pl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&fl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=we.current,ua(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=na,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[wt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||ep(e.nodeValue,n)),e||sa(t,!0)}else e=lp(e).createTextNode(r),e[wt]=t,t.stateNode=e}return _l(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ua(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[wt]=t}else da(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_l(t),e=!1}else n=fa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Fo(t),t):(Fo(t),null);if(t.flags&128)throw Error(i(558))}return _l(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ua(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[wt]=t}else da(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;_l(t),a=!1}else a=fa(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Fo(t),t):(Fo(t),null)}return Fo(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),hl(t,t.updateQueue),_l(t),null);case 4:return De(),e===null&&Wf(t.stateNode.containerInfo),t.flags|=67108864,_l(t),null;case 10:return va(t.type),_l(t),null;case 19:if(Ro(t),r=t.memoizedState,r===null)return _l(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)gl(r,!1);else{if(ad!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=zo(e),o!==null){for(t.flags|=128,gl(r,!1),e=o.updateQueue,t.updateQueue=e,hl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Pi(n,e),n=n.sibling;return Lo(t,Io.current&1|2),V&&Zi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&He()>gd&&(t.flags|=128,a=!0,gl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=zo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,hl(t,e),gl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!V)return _l(t),null}else 2*He()-r.renderingStartTime>gd&&n!==536870912&&(t.flags|=128,a=!0,gl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=He(),e.sibling=null,o=Io.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||V?Lo(t,o):(n=o,I(ko,t),I(Io,n),Ao===null&&(Ao=t)),V&&Zi(t,r.treeForkCount),e}return _l(t),null;case 22:case 23:return Fo(t),Oo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(_l(t),t.subtreeFlags&6&&(t.flags|=8192)):_l(t),n=t.updateQueue,n!==null&&hl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&xe(Ua),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),va(ka),_l(t),null;case 25:return null;case 30:return t.flags|=33554432,_l(t),null}throw Error(i(156,t.tag))}function yl(e,t){switch(ea(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return va(ka),De(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ke(t),null;case 31:if(t.memoizedState!==null){if(Fo(t),t.alternate===null)throw Error(i(340));da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Fo(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));da()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ro(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return De(),null;case 10:return va(t.type),null;case 22:case 23:return Fo(t),Oo(),e!==null&&xe(Ua),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return va(ka),null;case 25:return null;default:return null}}function bl(e,t){switch(ea(t),t.tag){case 3:va(ka),De();break;case 26:case 27:case 5:ke(t);break;case 4:De();break;case 31:t.memoizedState!==null&&Fo(t);break;case 13:Fo(t);break;case 19:Ro(t);break;case 10:va(t.type);break;case 22:case 23:Fo(t),Oo(),e!==null&&xe(Ua);break;case 24:va(ka)}}function xl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Sl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Cl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Co(t,n)}catch(t){Z(e,e.return,t)}}}function wl(e,t,n){n.props=xc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Tl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=gi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function El(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Dl(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function Ol(e){for(var t=e.return;t!==null&&(jl(t)&&em(e.stateNode,t.stateNode),!Al(t));)t=t.return}function kl(e){for(var t=e.return;t!==null&&(jl(t)&&tm(e.stateNode,t.stateNode),!Al(t));)t=t.return}function Al(e){return e.tag===5||e.tag===3||e.tag===27}function jl(e){return e&&e.tag===7&&e.stateNode!==null}function Ml(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Nl(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[Tt]=t}catch(t){Z(e,e.return,t)}}function Pl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Fl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Pl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Il(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=bn)),Dl(e,r),L=!0;else if(i!==4&&(i===27&&(Dl(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Il(e,t,n,r),e=e.sibling;e!==null;)Il(e,t,n,r),e=e.sibling}function Ll(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),Dl(e,r),L=!0;else if(i!==4&&(i===27&&(Dl(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Ll(e,t,n,r),e=e.sibling;e!==null;)Ll(e,t,n,r),e=e.sibling}function Rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[wt]=e,t[Tt]=n}catch(t){Z(e,e.return,t)}}var zl=!1,Bl=null;function Vl(e){(e.tag===30||e.subtreeFlags&33554432)&&(zl=!0)}var Hl=null;function Ul(){var e=Hl;return Hl=null,e}var Wl=0;function Gl(e,t,n,r,i){return Wl=0,Kl(e.child,t,n,r,i)}function Kl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);zl=!0,Tp(o,Wl===0?t:t+`_`+Wl,n),Wl++}else e.tag===22&&e.memoizedState!==null||e.tag===30&&i||Kl(e.child,t,n,r,i)&&(a=!0);e=e.sibling}return a}function ql(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):e.tag===22&&e.memoizedState!==null||e.tag===30&&t||ql(e.child,t),e=e.sibling}function Jl(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Jl(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=vi(t.default,t.share),t!==`none`&&(Gl(e,n,t,null,!1)||ql(e.child,!1))}e=e.sibling}}function Yl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=gi(r,n),a=vi(r.default,n.paired?r.share:r.enter);a===`none`?Jl(e):Gl(e,i,a,null,!1)?(Jl(e),n.paired||t||Nd(e,r.onEnter)):ql(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Yl(e,t),e=e.sibling;else Jl(e)}function Xl(e){if(Bl!==null&&Bl.size!==0){var t=Bl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=vi(n.default,n.share);if(a!==`none`&&(Gl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Nd(e,n.onShare)):ql(e.child,!1)),t.delete(r),t.size===0)break}}}Xl(e)}e=e.sibling}}}function Zl(e){if(e.tag===30){var t=e.memoizedProps,n=gi(t,e.stateNode),r=Bl===null?void 0:Bl.get(n),i=vi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Gl(e,n,i,null,!1)?r===void 0?Nd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,Bl.delete(n),Nd(e,t.onShare)):ql(e.child,!1)),Bl!==null&&Xl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Zl(e),e=e.sibling;else Bl!==null&&Xl(e)}function Ql(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=gi(t,e.stateNode);t=vi(t.default,t.update),e.flags&=-5,t!==`none`&&Gl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Ql(e);e=e.sibling}}function $l(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,ql(e.child,!1))}$l(e)}e=e.sibling}}function G(e){if(e.tag===30)e.stateNode.paired=null,ql(e.child,!1),$l(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)G(e),e=e.sibling;else $l(e)}function eu(e){for(e=e.child;e!==null;)e.tag===30?ql(e.child,!1):e.subtreeFlags&33554432&&eu(e),e=e.sibling}function tu(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Wl<a.length){var l=a[Wl],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Wl===0?n:n+`_`+Wl,i),s&&e.flags&4||(Hl===null&&(Hl=[]),Hl.push(c,Wl===0?r:r+`_`+Wl,t.memoizedProps)),Wl++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:tu(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function nu(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=gi(n,r),a=vi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Wl=0,i=tu(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||Nd(e,n.onUpdate))}else e.subtreeFlags&33554432&&nu(e,t);e=e.sibling}}var ru=!1,K=!1,iu=!1,au=!1,ou=typeof WeakSet==`function`?WeakSet:Set,su=null,cu=!1,lu=!1,uu=!1,du=!1;function fu(e,t,n){if(e=e.containerInfo,sp=gh,e=Kr(e),qr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,su=t,t=n?9270:1024;su!==null;){if(e=su,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Zl(r[a]);if(e.alternate===null&&e.flags&2)n&&Vl(e),pu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Zl(r),pu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Vl(e),pu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,su=r):(n&&Ql(e),pu(n))}}Bl=null}function pu(e){for(;su!==null;){var t=su,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=xc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){Z(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=gi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=vi(a.default,a.update),a!==`none`&&Gl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,su=r;break}su=t.return}}function mu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Pu(e,n),r&4&&xl(5,n);break;case 1:if(Pu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=xc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Cl(n),r&512&&Tl(n,n.return);break;case 3:if(Pu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Co(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Rl(n);case 26:case 5:Pu(e,n),t===null&&r&4&&Ml(n),r&512&&Tl(n,n.return);break;case 12:Pu(e,n);break;case 31:Pu(e,n),r&4&&Cu(e,n);break;case 13:Pu(e,n),r&4&&wu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_f.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||ru,!r){var a=t!==null&&t.memoizedState!==null||K;t=ru,i=K,ru=r,(K=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),Iu(e,n,r)):Pu(e,n),ru=t,K=i}break;case 30:Pu(e,n),r&512&&Tl(n,n.return);break;case 7:r&512&&Tl(n,n.return);default:Pu(e,n)}}function hu(e,t){for(e=e.child;e!==null;)gu(e,t),e=e.sibling}function gu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){Z(e,e.return,t)}_u(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,L=!0}catch(t){Z(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){Z(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&hu(e,t);break;default:hu(e,t)}}function _u(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:gu(n,r);break a;case 22:n.memoizedState===null&&_u(n,r);break a;default:_u(n,r)}}e=e.sibling}}function vu(e){var t=e.alternate;t!==null&&(e.alternate=null,vu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Nt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var yu=null,bu=!1;function xu(e,t,n){for(n=n.child;n!==null;)Su(e,t,n),n=n.sibling}function Su(e,t,n){if(Qe&&typeof Qe.onCommitFiberUnmount==`function`)try{Qe.onCommitFiberUnmount(Ze,n)}catch{}switch(n.tag){case 26:K||El(n,t),xu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!K&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:K||El(n,t),kl(n);var r=yu,i=bu;Sp(n.type)&&(yu=n.stateNode,bu=!1),xu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),yu=r,bu=i;break;case 5:K||El(n,t),kl(n);case 6:if(n.tag===6&&kl(n),r=yu,i=bu,yu=null,xu(e,t,n),yu=r,bu=i,yu!==null){if(bu)try{(yu.nodeType===9?yu.body:yu.nodeName===`HTML`?yu.ownerDocument.body:yu).removeChild(n.stateNode),L=!0}catch(e){Z(n,t,e)}else try{yu.removeChild(n.stateNode),L=!0}catch(e){Z(n,t,e)}}break;case 18:yu!==null&&(bu?(e=yu,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(yu,n.stateNode));break;case 4:r=yu,i=bu,yu=n.stateNode.containerInfo,bu=!0,xu(e,t,n),yu=r,bu=i;break;case 0:case 11:case 14:case 15:Sl(2,n,t),K||Sl(4,n,t),xu(e,t,n);break;case 1:K||(El(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&wl(n,t,r)),xu(e,t,n);break;case 21:xu(e,t,n);break;case 22:K=(r=K)||n.memoizedState!==null,xu(e,t,n),K=r;break;case 30:El(n,t),xu(e,t,n);break;case 7:K||El(n,t),xu(e,t,n);break;default:xu(e,t,n)}}function Cu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){Z(t,t.return,e)}}}function wu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){Z(t,t.return,e)}}function Tu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ou),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ou),t;default:throw Error(i(435,e.tag))}}function Eu(e,t){var n=Tu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=vf.bind(null,e,t);t.then(r,r)}})}function Du(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){yu=l.stateNode,bu=!1;break a}break;case 5:yu=l.stateNode,bu=!1;break a;case 3:case 4:yu=l.stateNode.containerInfo,bu=!0;break a}l=l.return}if(yu===null)throw Error(i(160));Su(s,c,o),yu=null,bu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ku(t,e,n),t=t.sibling}var Ou=null;function ku(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Du(t,e,n),Au(e),a&4&&(Sl(3,e,e.return),xl(3,e),Sl(5,e,e.return));break;case 1:Du(t,e,n),Au(e),a&512&&(K||r===null||El(r,r.return)),a&64&&ru&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Ou,Du(t,e,n),Au(e),a&512&&(K||r===null||El(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(ru)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[jt]||r[wt]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[wt]=e,Rt(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[wt]=e,Rt(r),t=r}e.stateNode=t}}else ru||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Nl(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||K||t.parentNode.removeChild(t)):a.count--,n===null?ru||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Du(t,e,n),Au(e),a&512&&(K||r===null||El(r,r.return)),r!==null&&a&4&&Nl(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=iu,iu=!1,Du(t,e,n),iu=o,Au(e),a&512&&(K||r===null||El(r,r.return)),e.flags&32){t=e.stateNode;try{fn(t,``),L=!0}catch(t){Z(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Nl(e,t,r===null?t:r.memoizedProps)),a&1024&&(au=!0);break;case 6:if(Du(t,e,n),Au(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,L=!0}catch(t){Z(e,e.return,t)}}break;case 3:if(L=!1,Wm=null,o=Ou,Ou=bm(t.containerInfo),Du(t,e,n),Ou=o,Au(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){Z(e,e.return,t)}au&&(au=!1,ju(e)),L=!1;break;case 4:a=iu,iu=ru,r=Jt(),o=Ou,Ou=bm(e.stateNode.containerInfo),Du(t,e,n),Au(e),Ou=o,L&&lu&&(uu=!0),L=r,iu=a;break;case 12:Du(t,e,n),Au(e);break;case 31:Du(t,e,n),Au(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Eu(e,t)));break;case 13:Du(t,e,n),Au(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(md=He()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Eu(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=ru,l=K,u=iu;ru=c||o,iu=u||o,K=l||s,Du(t,e,n),K=l,iu=u,ru=c,Au(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||ru||K||(t=s||K,n=ru,r=K,ru=o||ru,K=t,Fu(e,2),ru=n,K=r),!o&&iu||hu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Eu(e,n))));break;case 19:Du(t,e,n),Au(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Eu(e,t)));break;case 30:a&512&&(K||r===null||El(r,r.return)),a=Jt(),o=lu,s=(n&335544064)===n,c=e.memoizedProps,lu=s&&vi(c.default,c.update)!==`none`,Du(t,e,n),Au(e),s&&r!==null&&L&&(e.flags|=4),lu=o,L=a;break;case 21:break;case 7:a&512&&(K||r===null||El(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Du(t,e,n),Au(e)}}function Au(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Pl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(jl(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(Al(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Ll(e,Fl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(fn(l,``),n.flags&=-33),Ll(e,Fl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Il(e,Fl(e),u,s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ju(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ju(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Mu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Nu(t,e),t=t.sibling;else nu(t,!1)}function Nu(e,t){var n=e.alternate;if(n===null)Yl(e,!1);else switch(e.tag){case 3:if(du=cu=!1,Ul(),Mu(t,e),!cu&&!uu){if(e=Hl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),du=!0}Hl=null;break;case 5:Mu(t,e);break;case 4:r=cu,cu=!1,Mu(t,e),cu&&(uu=!0),cu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Mu(t,e):Yl(e,!1));break;case 30:r=cu,i=Ul(),cu=!1,Mu(t,e),cu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=gi(a,o),o=gi(n.memoizedProps,o);var s=vi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Wl=0,t=tu(e,n,t,o,s,a,!0),Wl!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Nd(e,e.memoizedProps.onUpdate),Hl=i):i!==null&&(i.push.apply(i,Hl),Hl=i),cu=e.flags&32?!0:r;break;default:Mu(t,e)}}function Pu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)mu(e,t.alternate,t),t=t.sibling}function Fu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:Sl(4,n,n.return),Fu(n,r);break;case 1:El(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&wl(n,n.return,i),Fu(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:El(n,n.return),n.tag!==5&&n.tag!==27||kl(n),Fu(n,r);break;case 6:kl(n);break;case 26:El(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||K||i.parentNode.removeChild(i),Fu(n,r);break;case 22:n.memoizedState===null&&Fu(n,r);break;case 30:El(n,n.return),Fu(n,r);break;case 7:El(n,n.return);default:Fu(n,r)}e=e.sibling}}function Iu(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:Iu(i,a,n),xl(4,a);break;case 1:if(Iu(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)So(l[i],c)}catch(e){Z(r,r.return,e)}}s&&o&64&&Cl(a),Tl(a,a.return);break;case 27:n&2&&Rl(a);case 5:a.tag!==5&&a.tag!==27||Ol(a),Iu(i,a,n),s&&r===null&&o&4&&Ml(a),Tl(a,a.return);break;case 6:Ol(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||ru||Km(bm(c.ownerDocument),a.type,c),Iu(i,a,n),s&&r===null&&o&4&&Ml(a),Tl(a,a.return);break;case 12:Iu(i,a,n);break;case 31:Iu(i,a,n),s&&o&4&&Cu(i,a);break;case 13:Iu(i,a,n),s&&o&4&&wu(i,a);break;case 22:a.memoizedState===null&&Iu(i,a,n),Tl(a,a.return);break;case 30:Iu(i,a,n),Tl(a,a.return);break;case 7:Tl(a,a.return);default:Iu(i,a,n)}t=t.sibling}}function Lu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ja(n))}function Ru(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ja(e))}function zu(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Bu(e,t,n,r),t=t.sibling;else i&&eu(t)}function Bu(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&G(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:zu(e,t,n,r),a&2048&&xl(9,t);break;case 1:zu(e,t,n,r);break;case 3:zu(e,t,n,r),i&&du&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&ja(a)));break;case 12:if(a&2048){zu(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else zu(e,t,n,r);break;case 31:zu(e,t,n,r);break;case 13:zu(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&G(t),o._visibility&2?zu(e,t,n,r):(o._visibility|=2,Vu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&G(s),o._visibility&2?zu(e,t,n,r):Hu(e,t)),a&2048&&Lu(s,t);break;case 24:zu(e,t,n,r),a&2048&&Ru(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(ql(a.child,!0),ql(t.child,!0))),zu(e,t,n,r);break;default:zu(e,t,n,r)}}function Vu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Vu(a,o,s,c,i),xl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Vu(a,o,s,c,i)):u._visibility&2?Vu(a,o,s,c,i):Hu(a,o),i&&l&2048&&Lu(o.alternate,o);break;case 24:Vu(a,o,s,c,i),i&&l&2048&&Ru(o.alternate,o);break;default:Vu(a,o,s,c,i)}t=t.sibling}}function Hu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Hu(n,r),i&2048&&Lu(r.alternate,r);break;case 24:Hu(n,r),i&2048&&Ru(r.alternate,r);break;default:Hu(n,r)}t=t.sibling}}var Uu=8192;function Wu(e,t,n){if(e.subtreeFlags&Uu)for(e=e.child;e!==null;)Gu(e,t,n),e=e.sibling}function Gu(e,t,n){switch(e.tag){case 26:Wu(e,t,n),e.flags&Uu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,Ou,e.memoizedState,e.memoizedProps));break;case 5:Wu(e,t,n),e.flags&Uu&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=Ou;Ou=bm(e.stateNode.containerInfo),Wu(e,t,n),Ou=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Uu,Uu=16777216,Wu(e,t,n),Uu=r):Wu(e,t,n));break;case 30:if((e.flags&Uu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,Bl===null&&(Bl=new Map),Bl.set(r,i)}Wu(e,t,n);break;default:Wu(e,t,n)}}function Ku(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function qu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];su=r,Xu(r,e)}Ku(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ju(e),e=e.sibling}function Ju(e){switch(e.tag){case 0:case 11:case 15:qu(e),e.flags&2048&&Sl(9,e,e.return);break;case 3:qu(e);break;case 12:qu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Yu(e)):qu(e);break;default:qu(e)}}function Yu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];su=r,Xu(r,e)}Ku(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Sl(8,t,t.return),Yu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Yu(t));break;default:Yu(t)}e=e.sibling}}function Xu(e,t){for(;su!==null;){var n=su;switch(n.tag){case 0:case 11:case 15:Sl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ja(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,su=r;else a:for(n=e;su!==null;){r=su;var i=r.sibling,a=r.return;if(vu(r),r===n){su=null;break a}if(i!==null){i.return=a,su=i;break a}su=a}}}var Zu={getCacheForType:function(e){var t=H(ka),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return H(ka).controller.signal}},Qu=typeof WeakMap==`function`?WeakMap:Map,q=0,$u=null,J=null,Y=0,X=0,ed=null,td=!1,nd=!1,rd=!1,id=0,ad=0,od=0,sd=0,cd=0,ld=0,ud=0,dd=null,fd=null,pd=!1,md=0,hd=0,gd=1/0,_d=null,vd=null,yd=0,bd=null,xd=null,Sd=0,Cd=0,wd=null,Td=null,Ed=null,Dd=null,Od=null,kd=0,Ad=null;function jd(){return q&2&&Y!==0?Y&-Y:P.T===null?xt():Pf()}function Md(){if(ld===0){if(!(Y&536870912)||V){var e=at;at<<=1,!(at&3932160)&&(at=262144),ld=e}else ld=536870912}return e=ko.current,e!==null&&(e.flags|=32),ld}function Nd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(gi(e.memoizedProps,n))),Dd===null&&(Dd=[]),Dd.push(t.bind(null,r))}}function Pd(e,t,n){(e===$u&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Vd(e,0),Rd(e,Y,ld,!1)),mt(e,n),q&2&&e===$u||(e===$u&&(!(q&2)&&(sd|=n),ad===4&&Rd(e,Y,ld,!1)),Ef(e))}function Fd(e,t,n){if(q&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||lt(e,t),a=r?Yd(e,t):qd(e,t,!0),o=r;do{if(a===0){nd&&!r&&Rd(e,t,0,!1);break}if(n=e.current.alternate,o&&!Ld(n))a=qd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=dd;var l=c.current.memoizedState.isDehydrated;if(l&&(Vd(c,s).flags|=256),s=qd(c,s,!1),s!==2&&s!==6){if(rd&&!l){c.errorRecoveryDisabledLanes|=o,sd|=o,a=4;break a}o=fd,fd=a,o!==null&&(fd===null?fd=o:fd.push.apply(fd,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Vd(e,0),Rd(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Rd(r,t,ld,!td);break a;case 2:fd=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=md+300-He(),10<a)){if(Rd(r,t,ld,!td),ct(r,0,!0)!==0)break a;Sd=t,r.timeoutHandle=gp(Id.bind(null,r,n,fd,_d,pd,t,ld,sd,ud,td,o,`Throttled`,-0,0),a);break a}Id(r,n,fd,_d,pd,t,ld,sd,ud,td,o,null,-0,0)}break}}while(1);Ef(e)}function Id(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:bn},Bl=null,Gu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?md-He():(a&4194048)===a?hd-He():0,m=eh(d,m),m!==null)?(Sd=a,e.cancelPendingCommit=m(nf.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Rd(e,a,o,!l)):nf(e,t,a,n,r,i,o,s,c,l,u,d)}function Ld(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Br(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rd(e,t,n,r){t=ut(e,t),t&=~cd,t&=~sd,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-et(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&gt(e,n,t)}function zd(){return q&6?!0:(Df(0,!1),!1)}function Bd(){if(J!==null){if(X===0)var e=J.return;else e=J,ga=ha=null,rs(e),ro=null,io=0,e=J;for(;e!==null;)bl(e.alternate,e),e=e.return;J=null}}function Vd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Sd=0,Bd(),$u=e,J=n=Ni(e.current,null),Y=t,X=0,ed=null,td=!1,nd=lt(e,t),rd=!1,ud=ld=cd=sd=od=ad=0,fd=dd=null,pd=!1,id=ut(e,t),Ci(),n}function Hd(e,t){U=null,P.H=pc,t===qa||t===Ya?(t=to(),X=3):t===Ja?(t=to(),X=4):X=t===jc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,ed=t,J===null&&(ad=1,Tc(e,Vi(t,e.current)))}function Ud(){var e=ko.current;return e===null?!0:(Y&4194048)===Y?Ao===null:(Y&62914560)===Y||Y&536870912?e===Ao:!1}function Wd(){var e=P.H;return P.H=pc,e===null?pc:e}function Gd(){var e=P.A;return P.A=Zu,e}function Kd(){ad=4,td||(Y&4194048)!==Y&&ko.current!==null||(nd=!0),!(od&134217727)&&!(sd&134217727)||$u===null||Rd($u,Y,ld,!1)}function qd(e,t,n){var r=q;q|=2;var i=Wd(),a=Gd();($u!==e||Y!==t)&&(_d=null,Vd(e,t)),t=!1;var o=ad;a:do try{if(X!==0&&J!==null){var s=J,c=ed;switch(X){case 8:Bd(),o=6;break a;case 3:case 2:case 9:case 6:ko.current===null&&(t=!0);var l=X;if(X=0,ed=null,$d(e,s,c,l),n&&nd){o=0;break a}break;default:l=X,X=0,ed=null,$d(e,s,c,l)}}Jd(),o=ad;break}catch(t){Hd(e,t)}while(1);return t&&e.shellSuspendCounter++,ga=ha=null,q=r,P.H=i,P.A=a,J===null&&($u=null,Y=0,Ci()),o}function Jd(){for(;J!==null;)Zd(J)}function Yd(e,t){var n=q;q|=2;var r=Wd(),a=Gd();$u!==e||Y!==t?(_d=null,gd=He()+500,Vd(e,t)):nd=lt(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=ed;b:switch(X){case 1:X=0,ed=null,$d(e,t,o,1);break;case 2:case 9:if(Za(o)){X=0,ed=null,Qd(t);break}t=function(){X!==2&&X!==9||$u!==e||(X=7),Ef(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Za(o)?(X=0,ed=null,Qd(t)):(X=0,ed=null,$d(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Ym(s):c.stateNode.complete){X=0,ed=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,ef(u))}break b}}X=0,ed=null,$d(e,t,o,5);break;case 6:X=0,ed=null,$d(e,t,o,6);break;case 8:Bd(),ad=6;break a;default:throw Error(i(462))}}Xd();break}catch(t){Hd(e,t)}while(1);return ga=ha=null,P.H=r,P.A=a,q=n,J===null?($u=null,Y=0,Ci(),ad):0}function Xd(){for(;J!==null&&!Be();)Zd(J)}function Zd(e){var t=dl(e.alternate,e,id);e.memoizedProps=e.pendingProps,t===null?ef(e):J=t}function Qd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Gc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=Gc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:rs(t);var r=t;r===na&&(V?(la(r),r.tag===5&&r.stateNode!=null&&(ra=r.stateNode)):(la(r),V=!0));default:bl(n,t),t=J=Pi(t,id),t=dl(n,t,id)}e.memoizedProps=e.pendingProps,t===null?ef(e):J=t}function $d(e,t,n,r){ga=ha=null,rs(t),ro=null,io=0;var i=t.return;try{if(Ac(e,i,t,n,Y)){ad=1,Tc(e,Vi(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;ad=1,Tc(e,Vi(n,e.current)),J=null;return}t.flags&32768?(V||r===1?e=!0:nd||Y&536870912?e=!1:(td=e=!0,(r===2||r===9||r===3||r===6)&&(r=ko.current,r!==null&&r.tag===13&&(r.flags|=16384))),tf(t,e)):ef(t)}function ef(e){var t=e;do{if(t.flags&32768){tf(t,td);return}e=t.return;var n=vl(t.alternate,t,id);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);ad===0&&(ad=5)}function tf(e,t){do{var n=yl(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);ad=6,J=null}function nf(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do df();while(yd!==0);if(q&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===$u&&(J=$u=null,Y=0),xd=t,bd=e,Sd=n,wd=a,Td=r,rf(e,t,n,s,c,l,f)}}function rf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(Cd=s,s|=Si,ht(e,n,s,r,i,a),Dd=null,(n&335544064)===n?(Od=Pa(e),r=10262):(Od=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,yf(Ke,function(){return ff(),null})):(e.callbackNode=null,e.callbackPriority=0),zl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=P.T,P.T=null,i=F.p,F.p=2,a=q,q|=4;try{fu(e,t,n)}finally{q=a,F.p=i,P.T=r}}yd=1,zl?Ed=Mp(o,e.containerInfo,Od,sf,cf,of,lf,ff,af,null,null):(sf(),cf(),lf())}function af(e){if(yd!==0){var t=bd.onRecoverableError;t(e,{componentStack:null})}}function of(){yd===3&&(yd=0,Nu(xd,bd),yd=4)}function sf(){if(yd===1){yd=0;var e=bd,t=xd,n=Sd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=P.T,P.T=null;var i=F.p;F.p=2;var a=q;q|=4;try{lu=uu=!1,ku(t,e,n),n=cp;var o=Kr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Gr(s.ownerDocument.documentElement,s)){if(c!==null&&qr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Wr(s,h),v=Wr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{q=a,F.p=i,P.T=r}}e.current=t,yd=2}}function cf(){if(yd===2){yd=0;var e=bd,t=xd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=q;q|=4;try{mu(e,t.alternate,t)}finally{q=i,F.p=r,P.T=n}}yd=3}}function lf(){if(yd===4||yd===3){yd=0;var e=Ed;Ed=null,Ve();var t=bd,n=xd,r=Sd,i=Td,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?yd=5:(yd=0,xd=bd=null,uf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(vd=null),bt(r),n=n.stateNode,Qe&&typeof Qe.onCommitFiberRoot==`function`)try{Qe.onCommitFiberRoot(Ze,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=P.T,a=F.p,F.p=2,P.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{P.T=n,F.p=a}}if(i=Dd,o=Od,Od=null,i!==null&&(Dd=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);Sd&3&&df(),Ef(t),a=t.pendingLanes,r&261930&&a&42?t===Ad?kd++:(kd=0,Ad=t):(kd=0,Ad=null),Df(0,!1)}}function uf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ja(t)))}function df(){return Ed!==null&&(Ed.skipTransition(),Ed=null),sf(),cf(),lf(),ff()}function ff(){if(yd!==5)return!1;var e=bd,t=Cd;Cd=0;var n=bt(Sd),r=P.T,a=F.p;try{F.p=32>n?32:n,P.T=null,n=wd,wd=null;var o=bd,s=Sd;if(yd=0,xd=bd=null,Sd=0,q&6)throw Error(i(331));var c=q;if(q|=4,Ju(o.current),Bu(o,o.current,s,n),q=c,Df(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot==`function`)try{Qe.onPostCommitFiberRoot(Ze,o)}catch{}return!0}finally{F.p=a,P.T=r,uf(e,t)}}function pf(e,t,n){t=Vi(n,t),t=Dc(e.stateNode,t,2),e=go(e,t,2),e!==null&&(mt(e,2),Ef(e))}function Z(e,t,n){if(e.tag===3)pf(e,e,n);else for(;t!==null;){if(t.tag===3){pf(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(vd===null||!vd.has(r))){e=Vi(n,e),n=Oc(2),r=go(t,n,2),r!==null&&(kc(n,r,t,e),mt(r,2),Ef(r));break}}t=t.return}}function mf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Qu;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(rd=!0,i.add(n),e=hf.bind(null,e,t,n),t.then(e,e))}function hf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,$u===e&&(Y&n)===n&&(ad===4||ad===3&&(Y&62914560)===Y&&300>He()-md?q&2?cd|=n:Vd(e,0):cd|=n,ud===Y&&(ud=0)),Ef(e)}function gf(e,t){t===0&&(t=ft()),e=Ei(e,t),e!==null&&(mt(e,t),Ef(e))}function _f(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),gf(e,n)}function vf(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),gf(e,n)}function yf(e,t){return Re(e,t)}var bf=null,xf=null,Sf=!1,Cf=!1,wf=!1,Tf=0;function Ef(e){e!==xf&&e.next===null&&(xf===null?bf=xf=e:xf=xf.next=e),Cf=!0,Sf||(Sf=!0,Nf())}function Df(e,t){if(!wf&&Cf){wf=!0;do for(var n=!1,r=bf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-et(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Mf(r,a))}else a=Y,a=ct(r,r===$u?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||lt(r,a)||(n=!0,Mf(r,a))}r=r.next}while(n);wf=!1}}function Of(){kf()}function kf(){Cf=Sf=!1;var e=0;Tf!==0&&hp()&&(e=Tf);for(var t=He(),n=null,r=bf;r!==null;){var i=r.next,a=Af(r,t);a===0?(r.next=null,n===null?bf=i:n.next=i,i===null&&(xf=n)):(n=r,(e!==0||a&3)&&(Cf=!0)),r=i}yd!==0&&yd!==5||Df(e,!1),Tf!==0&&(Tf=0)}function Af(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-et(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=dt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=$u,n=Y,n=ct(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ze(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||lt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ze(r),bt(n)){case 2:case 8:n=Ge;break;case 32:n=Ke;break;case 268435456:n=Je;break;default:n=Ke}return r=jf.bind(null,e),n=Re(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ze(r),e.callbackPriority=2,e.callbackNode=null,2}function jf(e,t){if(yd!==0&&yd!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(df()&&e.callbackNode!==n)return null;var r=Y;return r=ct(e,e===$u?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Fd(e,r,t),Af(e,He()),e.callbackNode!=null&&e.callbackNode===n?jf.bind(null,e):null)}function Mf(e,t){if(df())return null;Fd(e,t,!0)}function Nf(){bp(function(){q&6?Re(We,Of):kf()})}function Pf(){if(Tf===0){var e=La;e===0&&(e=it,it<<=1,!(it&261888)&&(it=256)),Tf=e}return Tf}function Ff(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:yn(e)}function If(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Ff((i[Tt]||null).action),o=r.submitter;o&&(t=(t=o[Tt]||null)?Ff(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Bn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Tf!==0){var e=new FormData(i,o);$s(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),$s(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var Lf=0;Lf<pi.length;Lf++){var Rf=pi[Lf];mi(Rf.toLowerCase(),`on`+(Rf[0].toUpperCase()+Rf.slice(1)))}mi(ai,`onAnimationEnd`),mi(oi,`onAnimationIteration`),mi(si,`onAnimationStart`),mi(`dblclick`,`onDoubleClick`),mi(`focusin`,`onFocus`),mi(`focusout`,`onBlur`),mi(ci,`onTransitionRun`),mi(li,`onTransitionStart`),mi(ui,`onTransitionCancel`),mi(di,`onTransitionEnd`),Ut(`onMouseEnter`,[`mouseout`,`mouseover`]),Ut(`onMouseLeave`,[`mouseout`,`mouseover`]),Ut(`onPointerEnter`,[`pointerout`,`pointerover`]),Ut(`onPointerLeave`,[`pointerout`,`pointerover`]),Ht(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ht(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ht(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ht(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ht(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ht(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));function Vf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){yi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){yi(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[Dt];n===void 0&&(n=t[Dt]=new Set);var r=e+`__bubble`;n.has(r)||(Gf(t,e,2,!1),n.add(r))}function Hf(e,t,n){var r=0;t&&(r|=4),Gf(n,e,r,t)}var Uf=`_reactListening`+Math.random().toString(36).slice(2);function Wf(e){if(!e[Uf]){e[Uf]=!0,Bt.forEach(function(t){t!==`selectionchange`&&(Bf.has(t)||Hf(t,!1,e),Hf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Uf]||(t[Uf]=!0,Hf(`selectionchange`,!1,t))}}function Gf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!An||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Kf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Pt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}Dn(function(){var r=a,i=Sn(n),s=[];a:{var c=fi.get(e);if(c!==void 0){var l=Bn,u=e;switch(e){case`keypress`:if(In(n)===0)break a;case`keydown`:case`keyup`:l=nr;break;case`focusin`:u=`focus`,l=qn;break;case`focusout`:u=`blur`,l=qn;break;case`beforeblur`:case`afterblur`:l=qn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Kn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=B;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=ar;break;case ai:case oi:case si:l=Jn;break;case di:l=or;break;case`scroll`:case`scrollend`:l=Hn;break;case`wheel`:l=sr;break;case`copy`:case`cut`:case`paste`:l=Yn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=rr;break;case`submit`:l=ir;break;case`toggle`:case`beforetoggle`:l=cr}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=On(m,p),g!=null&&d.push(qf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==xn&&(u=n.relatedTarget||n.fromElement)&&(Pt(u)||u[Et]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Pt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Kn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=rr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:It(c),h=l==null?u:It(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Pt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?E(c,l,Yf):null,c!==null&&Xf(s,u,c,d,!1),l!==null&&f!==null&&Xf(s,f,l,d,!0)))}a:{if(c=r?It(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Or;else if(Sr(c)){if(kr)_=Rr;else{_=Ir;var v=Fr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&gn(r.elementType)&&(_=Or):_=Lr;if(_&&=_(e,r)){Cr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?It(r):window,e){case`focusin`:(Sr(v)||v.contentEditable===`true`)&&(Yr=v,Xr=r,Zr=null);break;case`focusout`:Zr=Xr=Yr=null;break;case`mousedown`:Qr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Qr=!1,$r(s,n,i);break;case`selectionchange`:if(Jr)break;case`keydown`:case`keyup`:$r(s,n,i)}var y;if(ur)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else vr?gr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(pr&&n.locale!==`ko`&&(vr||b!==`onCompositionStart`?b===`onCompositionEnd`&&vr&&(y=Fn()):(Mn=i,Nn=`value`in Mn?Mn.value:Mn.textContent,vr=!0)),v=Jf(r,b),0<v.length&&(b=new Xn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=_r(n),y!==null&&(b.data=y)))),(y=fr?yr(e,n):br(e,n))&&(b=Jf(r,`onBeforeInput`),0<b.length&&(v=new Xn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),If(s,e,r,n,i)}Vf(s,t)})}function qf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=On(e,n),i!=null&&r.unshift(qf(e,i,a)),i=On(e,t),i!=null&&r.push(qf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Yf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=On(n,a),l!=null&&o.unshift(qf(n,l,c))):i||(l=On(n,a),l!=null&&o.push(qf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Zf=/\r\n?/g,Qf=/\u0000|\uFFFD/g;function $f(e){return(typeof e==`string`?e:``+e).replace(Zf,`
`).replace(Qf,``)}function ep(e,t){return t=$f(t),$f(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||fn(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&fn(e,``+r);else return;break;case`className`:Xt(e,`class`,r);break;case`tabIndex`:Xt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Xt(e,n,r);break;case`style`:hn(e,r,o);return;case`data`:if(t!==`object`){Xt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=yn(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=yn(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=bn);return;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=yn(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Yt(e,`popover`,r);break;case`xlinkActuate`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Zt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Zt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Yt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=_n.get(n)||n,Yt(e,n,r);else return}L=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:hn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)fn(e,r);else if(typeof r==`number`||typeof r==`bigint`)fn(e,``+r);else return;break;case`onScroll`:r!=null&&Q(`scroll`,e);return;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=bn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!Vt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[Tt]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}L=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):Yt(e,n,r)}return}L=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}sn(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&ln(e,!!r,n,!0):ln(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}dn(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<zf.length;r++)Q(zf[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(gn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(L=!0),o=m;break;case`name`:m!==f&&(L=!0),a=m;break;case`checked`:m!==f&&(L=!0),u=m;break;case`defaultChecked`:m!==f&&(L=!0),d=m;break;case`value`:m!==f&&(L=!0),s=m;break;case`defaultValue`:m!==f&&(L=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}on(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(L=!0),p=o;break;case`defaultValue`:o!==l&&(L=!0),c=o;break;case`multiple`:o!==l&&(L=!0),s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?ln(e,!!n,n?[]:``,!1):ln(e,!!n,t,!0)):ln(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(L=!0),p=a;break;case`defaultValue`:a!==o&&(L=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}un(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(L=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(gn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[wt]=r,n[Tt]=t,np(n,e,t),Rt(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[jt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:D({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Pt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=E(n,a,T),t===null?t=!1:(h(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=E(r,a,T),t===null?t=!1:(h(t,!0,w,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),Nt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[jt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&$(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===bn&&(e.onclick=null),Nt(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Nt(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=F.d;F.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=zd();return e||t}function Cm(e){var t=Ft(e);t!==null&&t.tag===5&&t.type===`form`?tc(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=an(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),Rt(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+an(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+an(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+an(n.imageSizes)+`"]`)):i+=`[href="`+an(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=D({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[Mt]=!0,o.onload=o.onerror=function(){zt(o)}),Rt(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+an(r)+`"][href="`+an(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=D({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),Rt(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Lt(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=D({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);Rt(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Lt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Rt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Lt(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=D({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),Rt(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=we.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Lt(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Lt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Lt(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+an(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return D({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Mt]){r.loading=1;return}}else t=e.createElement(`link`),t[Mt]=!0,t.onload=t.onerror=zt.bind(null,t),np(t,`link`,n),Rt(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+an(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+an(n.href)+`"]`);if(r)return t.instance=r,Rt(r),r;var a=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Rt(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,Rt(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),Rt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,Rt(a),a):(r=n,(a=vm.get(o))&&(r=D({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Rt(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[jt]||a[wt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Rt(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),Rt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:j,Provider:null,Consumer:null,_currentValue:_e,_currentValue2:_e,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pt(0),this.hiddenUpdates=pt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ji(3,null,null,t),e.current=a,a.stateNode=e,t=Aa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},po(a),e}function uh(e){return e?(e=ki,e):ki}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=ho(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=go(e,r,t),n!==null&&(Pd(n,e,t),_o(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=Ei(e,67108864);t!==null&&Pd(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=jd();t=yt(t);var n=Ei(e,t);n!==null&&Pd(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=2,yh(e,t,n,r)}finally{F.p=a,P.T=i}}function vh(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=8,yh(e,t,n,r)}finally{F.p=a,P.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Kf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Ft(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=st(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-et(o);s.entanglements[1]|=c,o&=~c}Ef(a),!(q&6)&&(gd=He()+500,Df(0,!1))}}break;case 31:case 13:s=Ei(a,2),s!==null&&Pd(s,a,2),zd(),ph(a,2)}if(a=bh(r),a===null&&Kf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Kf(e,t,r,null,n)}}function bh(e){return e=Sn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Pt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ue()){case We:return 2;case Ge:return 8;case Ke:case qe:return 32;case Je:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ft(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Pt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,St(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,St(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xn=r,n.target.dispatchEvent(r),xn=null}else return t=Ft(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Ft(n);a!==null&&(e.splice(t,3),t-=3,$s(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Tt]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Tt]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,jd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),zd(),t[Et]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=xt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.1`)throw Error(i(527,Kh,`19.3.1`));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:P,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{Ze=Jh.inject(qh),Qe=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Sc,s=Cc,c=wc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[Et]=t.current,Wf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u()),v=g(),y=`-ms-`,b=`-moz-`,x=`-webkit-`,S=`comm`,C=`rule`,w=`decl`,T=`@import`,E=`@namespace`,D=`@keyframes`,O=`@layer`,ee=Math.abs,k=String.fromCharCode,A=Object.assign;function te(e,t){return M(e,0)^45?(((t<<2^M(e,0))<<2^M(e,1))<<2^M(e,2))<<2^M(e,3):0}function ne(e){return e.trim()}function re(e,t){return(e=t.exec(e))?e[0]:e}function j(e,t,n){return e.replace(t,n)}function ie(e,t,n){return e.indexOf(t,n)}function M(e,t){return e.charCodeAt(t)|0}function ae(e,t,n){return e.slice(t,n)}function oe(e){return e.length}function se(e){return e.length}function ce(e,t){return t.push(e),e}function le(e,t){return e.map(t).join(``)}function ue(e,t){return e.filter(function(e){return!re(e,t)})}var de=1,fe=1,pe=0,N=0,me=0,he=``;function ge(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:de,column:fe,length:o,return:``,siblings:s}}function P(e,t){return A(ge(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function F(e){for(;e.root;)e=P(e.root,{children:[e]});ce(e,e.siblings)}function _e(){return me}function ve(){return me=N>0?M(he,--N):0,fe--,me===10&&(fe=1,de--),me}function ye(){return me=N<pe?M(he,N++):0,fe++,me===10&&(fe=1,de++),me}function be(){return M(he,N)}function xe(){return N}function I(e,t){return ae(he,e,t)}function Se(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ce(e){return de=fe=1,pe=oe(he=e),N=0,[]}function we(e){return he=``,e}function Te(e){return ne(I(N-1,Oe(e===91?e+2:e===40?e+1:e)))}function Ee(e){for(;(me=be())&&me<33;)ye();return Se(e)>2||Se(me)>3?``:` `}function De(e,t){for(;--t&&ye()&&!(me<48||me>102||me>57&&me<65||me>70&&me<97););return I(e,xe()+(t<6&&be()==32&&ye()==32))}function Oe(e){for(;ye();)switch(me){case e:return N;case 34:case 39:e!==34&&e!==39&&Oe(me);break;case 40:e===41&&Oe(e);break;case 92:ye()}return N}function ke(e,t){for(;ye()&&e+me!==57&&(e+me!==84||be()!==47););return`/*`+I(t,N-1)+`*`+k(e===47?e:ye())}function Ae(e){for(;!Se(be());)ye();return I(e,N)}function je(e){return we(Me(``,null,null,null,[``],e=Ce(e),0,[0],e))}function Me(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=ye()){case 40:if(m!=108&&M(C,d-1)==58){ie(C+=j(Te(v),`&`,`&\f`),`&\f`,ee(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Te(v);break;case 9:case 10:case 13:case 32:C+=Ee(m);break;case 92:C+=De(xe()-1,7);continue;case 47:switch(be()){case 42:case 47:ce(Pe(ke(ye(),xe()),t,n,c),c),(Se(m||1)==5||Se(be()||1)==5)&&oe(C)&&ae(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=oe(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=j(C,/\f/g,``)),p>0&&(oe(C)-d||h===0&&m===47)&&ce(p>32?Fe(C+`;`,r,n,d-1,c):Fe(j(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(ce(S=Ne(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123){if(u===0)Me(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(M(C,3)===110)break;case 108:if(M(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Me(e,S,S,r&&ce(Ne(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):Me(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+oe(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&ve()==125)continue}switch(C+=k(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(oe(C)-1)*_,_=1;break;case 64:be()===45&&(C+=Te(ye())),f=be(),u=d=oe(y=C+=Ae(xe())),v++;break;case 45:m===45&&oe(C)==2&&(h=0)}}return a}function Ne(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=se(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=ae(e,f+1,f=ee(g=o[h])),b=e;v<m;++v)(b=ne(g>0?p[v]+` `+y:j(y,/&\f/g,p[v])))&&(c[_++]=b);return ge(e,t,n,i===0?C:s,c,l,u,d)}function Pe(e,t,n,r){return ge(e,t,n,S,k(_e()),ae(e,2,-2),0,r)}function Fe(e,t,n,r,i){return ge(e,t,n,w,ae(e,0,r),ae(e,r+1,-1),r,i)}function Ie(e,t,n){switch(te(e,t)){case 5103:return x+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return x+e+e;case 4855:return x+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return b+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return x+e+b+e+y+e+e;case 5936:switch(M(e,t+11)){case 114:return x+e+y+j(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return x+e+y+j(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return x+e+y+j(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return x+e+y+e+e;case 6165:return x+e+y+`flex-`+e+e;case 5187:return x+e+j(e,/(\w+).+(:[^]+)/,x+`box-$1$2`+y+`flex-$1$2`)+e;case 5443:return x+e+y+`flex-item-`+j(e,/flex-|-self/g,``)+(re(e,/flex-|baseline/)?``:y+`grid-row-`+j(e,/flex-|-self/g,``))+e;case 4675:return x+e+y+`flex-line-pack`+j(e,/align-content|flex-|-self/g,``)+e;case 5548:return x+e+y+j(e,`shrink`,`negative`)+e;case 5292:return x+e+y+j(e,`basis`,`preferred-size`)+e;case 6060:return x+`box-`+j(e,`-grow`,``)+x+e+y+j(e,`grow`,`positive`)+e;case 4554:return x+j(e,/([^-])(transform)/g,`$1`+x+`$2`)+e;case 6187:return j(j(j(e,/(zoom-|grab)/,x+`$1`),/(image-set)/,x+`$1`),e,``)+e;case 5495:case 3959:return j(e,/(image-set\([^]*)/,x+"$1$`$1");case 4968:return j(j(e,/(.+:)(flex-)?(.*)/,x+`box-pack:$3`+y+`flex-pack:$3`),/space-between/,`justify`)+x+e+e;case 4200:if(!re(e,/flex-|baseline/))return y+`grid-column-align`+ae(e,t)+e;break;case 2592:case 3360:return y+j(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,re(e.props,/grid-\w+-end/)})?~ie(e+(n=n[t].value),`span`,0)?e:y+j(e,`-start`,``)+e+y+`grid-row-span:`+(~ie(n,`span`,0)?re(n,/\d+/):+re(n,/\d+/)-re(e,/\d+/))+`;`:y+j(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return re(e.props,/grid-\w+-start/)})?e:y+j(j(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return j(e,/(.+)-inline(.+)/,x+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(oe(e)-1-t>6)switch(M(e,t+1)){case 109:if(M(e,t+4)!==45)break;case 102:return j(e,/(.+:)(.+)-([^]+)/,`$1`+x+`$2-$3$1`+b+(M(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~ie(e,`stretch`,0)?Ie(j(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return j(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return y+n+`:`+r+s+(i?y+n+`-span:`+(a?o:+o-r)+s:``)+e});case 4949:if(M(e,t+6)===121)return j(e,`:`,`:`+x)+e;break;case 6444:switch(M(e,M(e,14)===45?18:11)){case 120:return j(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+x+(M(e,14)===45?`inline-`:``)+`box$3$1`+x+`$2$3$1`+y+`$2box$3`)+e;case 100:return j(e,`:`,`:`+y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return j(e,`scroll-`,`scroll-snap-`)+e}return e}function Le(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Re(e,t,n,r){switch(e.type){case O:if(e.children.length)break;case T:case E:case w:return e.return=e.return||e.value;case S:return``;case D:return e.return=e.value+`{`+Le(e.children,r)+`}`;case C:if(!oe(e.value=e.props.join(`,`)))return``}return oe(n=Le(e.children,r))?e.return=e.value+`{`+n+`}`:``}function ze(e){var t=se(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Be(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ve(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case w:e.return=Ie(e.value,e.length,n);return;case D:return Le([P(e,{value:j(e.value,`@`,`@`+x)})],r);case C:if(e.length)return le(n=e.props,function(t){switch(re(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:F(P(e,{props:[j(t,/:(read-\w+)/,`:`+b+`$1`)]})),F(P(e,{props:[t]})),A(e,{props:ue(n,r)});break;case`::placeholder`:F(P(e,{props:[j(t,/:(plac\w+)/,`:`+x+`input-$1`)]})),F(P(e,{props:[j(t,/:(plac\w+)/,`:`+b+`$1`)]})),F(P(e,{props:[j(t,/:(plac\w+)/,y+`input-$1`)]})),F(P(e,{props:[t]})),A(e,{props:ue(n,r)})}return``})}}function He(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Ue=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,We=`active`,Ge=`data-styled-version`,Ke=`6.6.0`,qe=`/*!sc*/
`,Je=typeof window<`u`&&typeof document<`u`;if(!_.createContext)throw He(19);function Ye(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var Xe=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:Ye(`REACT_APP_SC_DISABLE_SPEEDY`)??Ye(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),Ze=`sc-keyframes-`,Qe=new Map,$e=new Map,et=1,tt=e=>{if(Qe.has(e))return Qe.get(e);for(;$e.has(et);)et++;let t=et++;return Qe.set(e,t),$e.set(t,e),t},nt=e=>$e.get(e),rt=(e,t)=>{et=t+1,Qe.set(e,t),$e.set(t,e)},it=Object.freeze([]),at=Object.freeze({});function ot(e,t,n=at){return e.theme!==n.theme&&e.theme||t||n.theme}var st=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ct=/(^-|-$)/g;function lt(e){return e.replace(st,`-`).replace(ct,``)}var ut=/(a)(d)/gi,dt=e=>String.fromCharCode(e+(e>25?39:97));function ft(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=dt(t%52)+n;return(dt(t%52)+n).replace(ut,`$1-$2`)}var pt=5381,mt=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},ht=e=>mt(pt,e);function gt(e){return ft(ht(e)>>>0)}function _t(e){return e.displayName||e.name||`Component`}function vt(e){return typeof e==`string`&&!0}function yt(e){return vt(e)?`styled.${e}`:`Styled(${_t(e)})`}var bt=Symbol.for(`react.memo`),xt=Symbol.for(`react.forward_ref`),St={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Ct={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},wt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Tt={[xt]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[bt]:wt};function Et(e){return(`type`in(t=e)&&t.type.$$typeof)===bt?wt:`$$typeof`in e?Tt[e.$$typeof]:St;var t}var Dt=Object.defineProperty,Ot=Object.getOwnPropertyNames,kt=Object.getOwnPropertySymbols,At=Object.getOwnPropertyDescriptor,jt=Object.getPrototypeOf,Mt=Object.prototype;function Nt(e,t,n){if(typeof t!=`string`){let r=jt(t);r&&r!==Mt&&Nt(e,r,n);let i=Ot(t).concat(kt(t)),a=Et(e),o=Et(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in Ct||n&&n[s]||o&&s in o||a&&s in a)){let n=At(t,s);try{Dt(e,s,n)}catch{}}}}return e}function Pt(e){return typeof e==`function`}var Ft=Symbol.for(`react.forward_ref`);function It(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===Ft&&`styledComponentId`in e}function Lt(e,t){return e&&t?e+` `+t:e||t||``}function Rt(e,t){return e.join(t||``)}function zt(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Bt(e,t,n=!1){if(!n&&!zt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Bt(e[n],t[n]);else if(zt(t))for(let n in t)e[n]=Bt(e[n],t[n]);return e}function Vt(e,t){Object.defineProperty(e,"toString",{value:t})}var Ht=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw He(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+qe;return t}},Ut=`style[${Ue}][${Ge}="${Ke}"]`,Wt=RegExp(`^${Ue}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Gt=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,Kt=e=>{if(!e)return document;if(Gt(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(Gt(t))return t}return document},qt=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},L=(e,t)=>{let n=(t.textContent??``).split(qe),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(Wt);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(rt(n,t),qt(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},Jt=e=>{let t=Kt(e.options.target).querySelectorAll(Ut);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(Ue)!==We&&(L(e,r),r.parentNode&&r.parentNode.removeChild(r))}},Yt=!1;function Xt(){if(!1!==Yt)return Yt;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return Yt=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return Yt=t.getAttribute(`content`)||void 0}return Yt=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var Zt=(e,t)=>{if(typeof document>`u`)throw He(20);let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${Ue}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(Ue,We),i.setAttribute(Ge,Ke);let s=t||Xt();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},Qt=class{constructor(e,t){this.element=Zt(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw He(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},$t=class{constructor(e,t){this.element=Zt(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},en=Je,tn={isServer:!Je,useCSSOMInjection:!Xe},nn=class e{static registerId(e){return tt(e)}constructor(e=at,t={},n){this.options=Object.assign(Object.assign({},tn),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Je&&en&&(en=!1,Jt(this)),Vt(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=nt(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=Ue+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&Je&&Jt(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Je&&t.target!==this.options.target&&Kt(this.options.target)!==Kt(t.target)&&Jt(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new Qt(t,n):new $t(t,n))(this.options),new Ht(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){tt(e),e.startsWith(Ze)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(tt(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(tt(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},rn=new WeakSet,an={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function on(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in an||e.startsWith(`--`)?String(t).trim():t+`px`}var sn=47;function cn(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var ln=Symbol.for(`sc-keyframes`);function un(e){return typeof e==`object`&&!!e&&ln in e}function dn(e){return Pt(e)&&!(e.prototype&&e.prototype.isReactComponent)}var fn=e=>e==null||!1===e||e===``,pn=Symbol.for(`react.client.reference`);function mn(e){return e.$$typeof===pn}function hn(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!fn(r)&&(Array.isArray(r)&&rn.has(r)||Pt(r)?t.push(cn(n)+`:`,r,`;`):zt(r)?(t.push(n+` {`),hn(r,t),t.push(`}`)):t.push(cn(n)+`: `+on(n,r)+`;`))}}function gn(e,t,n,r,i=[]){if(fn(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return mn(e)?i:dn(e)&&t?gn(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)gn(e[a],t,n,r,i);return i}return It(e)?(i.push(`.${e.styledComponentId}`),i):un(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):mn(e)?i:zt(e)&&e.toString===Object.prototype.toString?(hn(e,i),i):(i.push(e.toString()),i)}var _n=ht(Ke),vn=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=mt(_n,t),this.baseStyle=n,nn.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a){if(dn(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=Rt(gn(r,e,t,n)))}else i+=Rt(gn(a,e,t,n))}}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=ft(mt(mt(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Lt(r,a)}}return r}},yn=/&/g;function bn(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function xn(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==sn||e.charCodeAt(c+1)!==42){if(o)l===42&&e.charCodeAt(c+1)===sn&&(o=!1,c++);else if(l!==34&&l!==39||bn(e,c)){if(a===0){if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}}else a===0?a=l:a===l&&(a=0)}else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function Sn(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&Sn(a.children,t)}return e}function Cn({options:e=at,plugins:t=it}=at){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(yn,r).replace(i,a))}),e.prefix&&o.push(Ve),o.push(Re);let s=[],c=ze(o.concat(Be(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return xn(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||bn(e,o)){if(s===0){if(t===sn&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==sn);)o++;o+=2}else if(t!==40){if(t!==41){if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===sn)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===sn&&o+1<r&&e.charCodeAt(o+1)===sn){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++}else c>0&&c--,o++}else c++,o++}else o++}else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:xn(i)):l===0?e:xn(e)}(t),d=je(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=Sn(d,e.namespace)),s=[],Le(d,c),s},u=e,d=pt;for(let e=0;e<t.length;e++)t[e].name||He(15),d=mt(d,t[e].name);return u!=null&&u.namespace&&(d=mt(d,u.namespace)),u!=null&&u.prefix&&(d=mt(d,`p`)),l.hash=d===pt?``:d.toString(),l}var wn=new nn,Tn=Cn(),En=_.createContext({shouldForwardProp:void 0,styleSheet:wn,stylis:Tn,stylisPlugins:void 0});En.Consumer;function Dn(){return _.useContext(En)}var On=_.createContext(void 0);On.Consumer;var kn={};function An(e,t){let n=typeof e==`string`?lt(e):`sc`;kn[n]=(kn[n]||0)+1;let r=n+`-`+gt(Ke+n+kn[n]);return t?t+`-`+r:r}function jn(e,t,n){let r=It(e),i=e,a=!vt(e),{attrs:o=it,componentId:s=An(t.displayName,t.parentComponentId),displayName:c=yt(e)}=t,l=t.displayName&&t.componentId?lt(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new vn(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=_.useContext(On),u=Dn(),d=e.shouldForwardProp||u.shouldForwardProp,f=ot(t,l,a)||at,[p,m]=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=null,a=e.length>1;for(let t=0;t<e.length;t++){let n=e[t],o=Pt(n)?n(a?Object.assign({},r):r):n;for(let e in o)e===`className`?r.className=Lt(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):o[e]===void 0?e in r&&(r[e]!==void 0&&(i||=[]).push(e),r[e]=void 0):r[e]=o[e]}return`className`in t&&typeof t.className==`string`&&(r.className=Lt(r.className,t.className)),[r,i]}(r,t,f),h=i.generateAndInjectStyles(p,u.styleSheet,u.stylis),g=p.as||c,v=vt(g),y=function(e,t,n,r,i,a){let o={};for(let s in e)s[0]===`$`||s===`as`||s===`theme`&&e.theme===n||(s===`forwardedAs`?e.forwardedAs!==void 0&&(o.as=e.forwardedAs):e[s]===void 0?s===`className`||i||a!==null&&a.indexOf(s)!==-1||r&&!r(s,t)||(o[s]=void 0):r&&!r(s,t)||(o[s]=e[s]));return o}(p,g,f,d,v,m),b=Lt(o,s);return h&&(b+=` `+h),p.className&&(b+=` `+p.className),y[v&&g.includes(`-`)?`class`:`className`]=b,n&&(y.ref=n),(0,_.createElement)(g,y)}(m,e,t)}p.displayName=c;let m=_.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Lt(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Bt(e,n,!0);return e}({},i.defaultProps,e):e}}),Vt(m,()=>`.${m.styledComponentId}`),a&&Nt(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Mn=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function Nn(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Pn=e=>(rn.add(e),e);function Fn(e,...t){if(Pt(e)||zt(e))return Pn(gn(Nn(it,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?gn(n):Pn(gn(Nn(n,t)))}function In(e,t,n=at){if(!t)throw He(1,t);let r=(r,...i)=>e(t,n,Fn(r,...i));return r.attrs=r=>In(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>In(e,t,Object.assign(Object.assign({},n),r)),r}var Ln=e=>In(jn,e),R=Ln;Mn.forEach(e=>{R[e]=Ln(e)}),`${Ue}`,`${Ue}`,`${Ue}`;var Rn=15e3,zn=new Set,Bn=new Map,Vn=!1,Hn=0;function Un(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function Wn(){Vn||(Vn=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>Gn(e)))}function Gn(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?Bn.get(n):void 0;n&&r&&(Bn.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),zn.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}var z={get available(){return Un()},send(e){Un()?(Wn(),window.external.sendMessage(JSON.stringify(e))):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=Rn){if(!Un())return Promise.reject(Error(`Native bridge is not available.`));Wn();let r=`req-${++Hn}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{Bn.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);Bn.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return Wn(),zn.add(e),()=>zn.delete(e)}},Kn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),B=o(((e,t)=>{t.exports=Kn()}))();function qn(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}(0,_.createContext)(qn({})),(0,_.createContext)(`en`);var Jn=e=>z.send({type:e});function Yn(){let[e,t]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{if(z.available)return z.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>Jn(`window.minimize`),toggleMaximize:()=>Jn(`window.toggleMaximize`),close:()=>Jn(`window.close`)}}function Xn(){return{onMouseDown:()=>Jn(`window.drag`),onDoubleClick:()=>Jn(`window.toggleMaximize`)}}function Zn(){let[e,t]=(0,_.useState)(!1),{maximized:n}=Yn();return(0,_.useEffect)(()=>{if(!z.available)return;let e=!1;return z.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,_.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var Qn=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function $n(){return(0,B.jsx)(B.Fragment,{children:Qn.map(([e,t])=>(0,B.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),z.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var er={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},tr={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function nr(e,t){return z.available?await z.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function rr(e){return z.available?(await z.request(`fs.open`,{path:e})).ok:!1}async function ir(e,t=!0){return await z.request(`fs.list`,{path:e??null,sizes:t})}async function ar(e,t){return z.available?(await z.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function or(e,t,n,r){return z.available?(await z.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function sr(e){return z.available?await z.request(`fs.list.cached`,{path:e??null}):{cached:!1,listing:null}}async function cr(){return(await z.request(`fs.places`)).places}async function lr(){return(await z.request(`fs.drives`)).drives}async function ur(e=!1){return(await z.request(`fs.recycle`,{includeOrphans:e})).entries}async function dr(e){return(await z.request(`fs.recycle.restore`,{id:e})).ok}async function fr(e=!1){await z.request(`fs.recycle.empty`,{includeOrphans:e})}async function pr(e){await z.request(`fs.recycle.delete`,{id:e})}async function mr(){if(!z.available)return{entries:[],cancelled:!0,failed:!1};let e=await z.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function hr(){return z.available?(await z.request(`fs.recycle.admin.purge`)).ok:!1}async function gr(e=0,t=150,n=!1){return z.available?await z.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function _r(){return z.available?(await z.request(`fs.recent`)).entries:[]}async function vr(){return z.available?(await z.request(`fs.frequent`)).entries:[]}async function yr(e){z.available&&await z.request(`fs.frequent.record`,{path:e})}async function br(){await z.request(`fs.recent.clear`)}async function xr(){await z.request(`fs.frequent.clear`)}async function Sr(){return await z.request(`fs.visibility`)}var Cr={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null};async function wr(){if(!z.available)return Cr;let e=await z.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null}}async function Tr(e){if(!z.available)return e;let t=await z.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView}}async function Er(e,t){z.available&&await z.request(`app.tabs.set`,{tabs:e,active:t})}async function Dr(e,t,n){return z.available?(await z.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}async function Or(){return z.available?(await z.request(`app.pickIcon`)).path:null}async function kr(){return z.available?(await z.request(`app.pickFolder`)).path:null}var Ar={managed:0,private:0,workingSet:0,available:0};async function jr(){return z.available?await z.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1}}async function Mr(){return z.available?await z.request(`app.memory`):Ar}async function Nr(){return z.available?await z.request(`app.memory.trim`):Ar}async function Pr(){return z.available?(await z.request(`app.scheme`)).registered:!1}async function Fr(e){return z.available?(await z.request(`app.scheme.set`,{enabled:e})).registered:!1}var Ir={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,openInNewTab:`ctrl`},Lr=Ir.openInNewTab;function Rr(e){Lr=e.trim()||Ir.openInNewTab}function zr(e){let t=Lr.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Br(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Vr(e){return e.split(`+`).filter(Boolean).map(e=>Hr[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Hr={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Ur(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Wr=new Map,Gr=new Map,Kr=new Set,qr=0;function Jr(){Wr.clear(),Gr.clear(),qr+=1,Kr.forEach(e=>e())}function Yr(){let[e,t]=(0,_.useState)(qr);return(0,_.useEffect)(()=>{let e=()=>t(qr);return Kr.add(e),()=>{Kr.delete(e)}},[]),e}var Xr=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function Zr(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return Xr.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function Qr(e,t,n=!1){let r=Yr(),i=Zr(e,t,n),[a,o]=(0,_.useState)(()=>Wr.get(i)??null);return(0,_.useEffect)(()=>{if(!z.available)return;if(Wr.has(i)){o(Wr.get(i)??null);return}let r=!0;return z.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{Wr.set(i,e.dataUrl),r&&o(e.dataUrl)},()=>{Wr.set(i,null),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function $r(e){let t=Yr(),[n,r]=(0,_.useState)(()=>e?Gr.get(e)??null:null);return(0,_.useEffect)(()=>{if(!e||!z.available){r(null);return}if(Gr.has(e)){r(Gr.get(e)??null);return}let t=!0;return z.request(`fs.iconFile`,{path:e}).then(n=>{Gr.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{Gr.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var ei=null,ti=null;function ni(){return ei===null?z.available?(ti??=z.request(`app.thumbnails`).then(e=>(ei=e.base??``,ei),()=>(ei=``,``)),ti):Promise.resolve(``):Promise.resolve(ei)}function ri(e,t=128,n=0){let[r,i]=(0,_.useState)(ei);return(0,_.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return ni().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}`}var ii={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},ai={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function oi(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=t.matchCase?t.query:t.query.toLowerCase(),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}try{let n=new RegExp(t.query,t.matchCase?`g`:`gi`),r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}catch{return null}}function si(e,t){return oi(e,t)!==null}var ci=new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),li=new Set(`.mp4,.m4v,.mov,.wmv,.avi,.mkv,.webm,.mpg,.mpeg,.3gp,.3g2,.ts,.m2ts,.mts,.flv,.ogv,.asf,.vob,.rm,.rmvb,.pdf,.xps,.oxps,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.odt,.ods,.odp,.mp3,.m4a,.aac,.flac,.wav,.ogg,.oga,.opus,.wma,.psd,.psb,.ai,.eps`.split(`,`));function ui(e){let t=fi(e);return ci.has(t)||li.has(t)}function di(e){return ci.has(fi(e))}function fi(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}function pi(e){if(e<0)return`—`;if(e===0)return`0 B`;let t=[`B`,`KB`,`MB`,`GB`,`TB`],n=Math.min(Math.floor(Math.log(e)/Math.log(1024)),t.length-1);return`${(e/1024**n).toFixed(n===0?0:1)} ${t[n]}`}function mi(){let e=document.documentElement.lang.trim();return e.length>0?e:void 0}function hi(e){return e<=0?`—`:new Date(e).toLocaleString(mi(),{year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`})}function gi(e){return e>=.9?`#ef4444`:e>=.75?`#f59e0b`:`var(--accent-gradient)`}function _i(e){return e.replace(/[\\/]+$/,``).split(/[\\/]/).at(-1)||e}function vi(e){return e.replace(/[\\/]+/g,`\\`).replace(/\\$/,``).toLowerCase()}function yi(e){let t=e.name.replace(/[\\/]+$/,``);return/^[a-z]:$/i.test(t)?` (${t.toUpperCase()})`:``}function bi(e){return`${e.label||`Local Disk`}${yi(e)}`}var xi=(0,_.createContext)({places:{},useIcons:!1}),Si=xi.Provider;function Ci(){return(0,_.useContext)(xi)}function wi(e,t){return e.places[vi(t)]}function Ti(e,t,n){return wi(e,t)?.name||n}var Ei=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,B.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,B.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),Di=e=>(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,B.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),Oi=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,B.jsx)(`path`,{d:`M14 3v4h4`})]}),ki=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,B.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,B.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),Ai=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,B.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),ji=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M12 19V5`}),(0,B.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),Mi=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,B.jsx)(`path`,{d:`M20 4v7h-7`})]}),Ni=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M12 5v14`}),(0,B.jsx)(`path`,{d:`M5 12h14`})]}),Pi=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M19 12H5`}),(0,B.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),Fi=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M5 12h14`}),(0,B.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),Ii=e=>(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,B.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),Li=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,B.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),Ri=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,B.jsx)(`path`,{d:`M12 12v8`})]}),zi=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,B.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),Bi=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,B.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,B.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,B.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),Vi=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,B.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),Hi=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M4 7h16`}),(0,B.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,B.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,B.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),Ui=e=>(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,B.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),Wi=e=>(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,B.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),Gi=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,B.jsxs)(`defs`,{children:[(0,B.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,B.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,B.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,B.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,B.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,B.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,B.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,B.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,B.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,B.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),Ki=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,B.jsx)(`path`,{d:`M15 3v4h4`}),(0,B.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),qi=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,B.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,B.jsx)(`path`,{d:`m13 5-2 14`})]}),Ji=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,B.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,B.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Yi=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,B.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Xi=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,B.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,B.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Zi=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,B.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),Qi=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,B.jsx)(`path`,{d:`M15 3v4h4`}),(0,B.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),$i=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,B.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),ea=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,B.jsx)(`path`,{d:`M8.5 14h7`})]}),ta=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,B.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,B.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),na=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,B.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),ra=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,B.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),V=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,B.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),ia=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,B.jsx)(`path`,{d:`M15 3v4h4`}),(0,B.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),aa=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,B.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,B.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,B.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),oa=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,B.jsx)(`path`,{d:`m14 6 4 4`})]}),sa=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,B.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),ca=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,B.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),la=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M12 4v10`}),(0,B.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,B.jsx)(`path`,{d:`M4.5 19.5h15`})]}),ua=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,B.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,B.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),da=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,B.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,B.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),fa=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,B.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),pa=e=>(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,B.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),ma=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,B.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),ha=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,B.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,B.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),ga=e=>(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,B.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),_a=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,B.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,B.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,B.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),va=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,B.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),ya=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,B.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),ba=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,B.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,B.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),xa=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,B.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),Sa=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,B.jsx)(`path`,{d:`M3.5 12h17`}),(0,B.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Ca=e=>(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,B.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})});function H(e,t){return({size:n=t,...r})=>(0,B.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var wa=H(Ei,18),Ta=H(Di,18),Ea=H(Oi,18),Da=H(ki,18),Oa=H(Ai,16),ka=H(ji,16),Aa=H(Mi,16),ja=H(Ni,16),Ma=H(Pi,16),Na=H(Fi,16),Pa=H(Ii,12),Fa=H(Li,18),Ia=H(Ri,14),La=H(zi,14),Ra=H(Bi,14),za=H(Vi,18),Ba=H(Hi,18),Va=H(Ui,14),Ha=H(Wi,14),Ua=H(Gi,18),Wa=H(Ki,18),Ga=H(qi,18),Ka=H(Ji,18),qa=H(Yi,18),Ja=H(Xi,18),Ya=H(Zi,18),Xa=H(Qi,18),Za=H($i,18),Qa=H(ea,18),$a=H(ta,18),eo=H(na,18),to=H(ra,18),no=H(V,18),ro=H(ia,18),io=H(aa,18),ao=H(oa,16),oo=H(sa,18),so=H(ca,18),co=H(la,18),lo=H(ua,18),uo=H(da,18),fo=H(fa,18),po=H(pa,18),mo=H(ma,18),ho=H(ha,18),go=H(ga,18),_o=H(_a,18),vo=H(va,18),yo=H(ya,18),bo=H(ba,18),xo=H(xa,18),So=H(Sa,18),Co=H(Ca,18),wo=[`quick`,`frequent`,`recent`,`home`,`drives`],To=wo,Eo={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`},Do={folder:e=>(0,B.jsx)(Ta,{size:e}),home:e=>(0,B.jsx)(wa,{size:e}),desktop:e=>(0,B.jsx)(oo,{size:e}),documents:e=>(0,B.jsx)(so,{size:e}),downloads:e=>(0,B.jsx)(co,{size:e}),pictures:e=>(0,B.jsx)(lo,{size:e}),music:e=>(0,B.jsx)(uo,{size:e}),videos:e=>(0,B.jsx)(fo,{size:e}),drive:e=>(0,B.jsx)(Da,{size:e}),image:e=>(0,B.jsx)(Ka,{size:e}),video:e=>(0,B.jsx)(qa,{size:e}),audio:e=>(0,B.jsx)(Ja,{size:e}),text:e=>(0,B.jsx)(Wa,{size:e}),code:e=>(0,B.jsx)(Ga,{size:e}),clock:e=>(0,B.jsx)(za,{size:e}),star:e=>(0,B.jsx)(po,{size:e}),file:e=>(0,B.jsx)(Ea,{size:e}),archive:e=>(0,B.jsx)(Ya,{size:e}),pdf:e=>(0,B.jsx)(Xa,{size:e}),executable:e=>(0,B.jsx)(Za,{size:e}),font:e=>(0,B.jsx)(Qa,{size:e}),database:e=>(0,B.jsx)($a,{size:e}),config:e=>(0,B.jsx)(eo,{size:e}),spreadsheet:e=>(0,B.jsx)(to,{size:e}),presentation:e=>(0,B.jsx)(no,{size:e}),document:e=>(0,B.jsx)(ro,{size:e}),app:e=>(0,B.jsx)(Ua,{size:e}),gear:e=>(0,B.jsx)(Fa,{size:e}),pin:e=>(0,B.jsx)(Ia,{size:e}),trash:e=>(0,B.jsx)(Ba,{size:e}),overview:e=>(0,B.jsx)(io,{size:e}),book:e=>(0,B.jsx)(mo,{size:e}),briefcase:e=>(0,B.jsx)(ho,{size:e}),cloud:e=>(0,B.jsx)(go,{size:e}),gamepad:e=>(0,B.jsx)(_o,{size:e}),camera:e=>(0,B.jsx)(vo,{size:e}),terminal:e=>(0,B.jsx)(yo,{size:e}),server:e=>(0,B.jsx)(bo,{size:e}),package:e=>(0,B.jsx)(xo,{size:e}),globe:e=>(0,B.jsx)(So,{size:e}),heart:e=>(0,B.jsx)(Co,{size:e})};function Oo(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function ko(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??wo)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||To.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=Oo(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${Eo[n]??n}${Ao(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Ao(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function jo({panel:e,size:t=16}){let n=$r(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,B.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?Do[e.icon]:void 0;if(r)return(0,B.jsx)(B.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,B.jsx)(Ta,{size:t});case`recent`:return(0,B.jsx)(za,{size:t});case`frequent`:return(0,B.jsx)(po,{size:t});case`drives`:return(0,B.jsx)(Da,{size:t});case`home`:return(0,B.jsx)(wa,{size:t});default:return(0,B.jsx)(Ta,{size:t})}}function Mo({place:e,size:t=18}){let n=$r(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,B.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&Do[e.icon]?(0,B.jsx)(B.Fragment,{children:Do[e.icon](t)}):(0,B.jsx)(Ta,{size:t})}var No=m();function Po(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Fo({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)(`#3b82f6`),d=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let f=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),p=e=>i[e]??`#64748b`,m=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},h=(e,t)=>{a(n,{...i,[e]:t})},g=()=>{let e=s.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:l}),c(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,No.createPortal)((0,B.jsxs)(Io,{"data-tag-menu":`true`,ref:d,style:{left:v,top:y},children:[(0,B.jsxs)(Lo,{children:[(0,B.jsx)(`span`,{children:`Tags`}),(0,B.jsx)(Ro,{onClick:o,title:`Close`,type:`button`,children:(0,B.jsx)(Ha,{size:11})})]}),(0,B.jsxs)(zo,{children:[f.length===0&&(0,B.jsx)(Vo,{children:`No tags yet.`}),f.map(e=>{let t=p(e),r=n.includes(e);return(0,B.jsxs)(Bo,{children:[(0,B.jsx)(U,{"aria-label":`Color of ${e}`,onChange:t=>h(e,t.target.value),title:`Change this tag's color`,type:`color`,value:t}),(0,B.jsxs)(W,{$color:t,$ink:Po(t),$on:r,onClick:()=>m(e),type:`button`,children:[r&&(0,B.jsx)(Va,{size:11}),(0,B.jsx)(`span`,{children:e})]})]},e)})]}),(0,B.jsxs)(Ho,{children:[(0,B.jsx)(U,{"aria-label":`Color of the new tag`,onChange:e=>u(e.target.value),title:`Color of the new tag`,type:`color`,value:l}),(0,B.jsx)(`input`,{onChange:e=>c(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),g())},placeholder:`New tag`,spellCheck:!1,value:s}),(0,B.jsx)(Uo,{onClick:g,type:`button`,children:`Add`})]})]}),document.body)}var Io=R.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
`,Lo=R.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,Ro=R.button`
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
`,zo=R.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,Bo=R.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,U=R.input`
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
`,W=R.button`
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
`,Vo=R.span`
    font-size: 10px;
    color: var(--text-muted);
`,Ho=R.div`
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
`,Uo=R.button`
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
`,Wo={file:Ea,folder:Ta,text:Wa,code:Ga,image:Ka,video:qa,audio:Ja,archive:Ya,pdf:Xa,executable:Za,font:Qa,database:$a,config:eo,spreadsheet:to,presentation:no,document:ro},Go={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Ko(e){let t=e.lastIndexOf(`.`);return t>0?Go[e.slice(t).toLowerCase()]??`file`:`file`}function qo({name:e,size:t}){let n=Wo[e??`file`]??Ea;return(0,B.jsx)(n,{size:t})}var Jo=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],Yo=190,Xo=120;function Zo({listing:e,loading:t,error:n,find:r=ai,view:i,showImages:a,imageStripHeight:o=Yo,onImageStripHeight:s,onSort:c,onSetTags:l,onOpen:u,onOpenFile:d}){let f=Ci(),p=(0,_.useRef)(null),m=(0,_.useRef)(null),[h,g]=(0,_.useState)(null),[v,y]=(0,_.useState)(o);(0,_.useEffect)(()=>{y(o)},[o]);let b=e=>{m.current={y:e.clientY,height:v},e.currentTarget.setPointerCapture(e.pointerId)},x=e=>{let t=m.current;if(!t)return;let n=Math.max(Xo,Math.round(window.innerHeight*.7));y(Math.min(n,Math.max(Xo,t.height+t.y-e.clientY)))},S=e=>{m.current&&(m.current=null,e.currentTarget.releasePointerCapture(e.pointerId),s?.(v))},C=()=>{y(Yo),s?.(Yo)};(0,_.useEffect)(()=>{p.current?.scrollIntoView({block:`nearest`})},[r.currentPath]);let w=r.query.length>0,T=Jo.filter(e=>i.columns?.includes(e.id)),E=i.columns?.includes(`linkTarget`)??!1,D=`minmax(160px, 1fr) ${T.map(e=>`${e.width}px`).join(` `)}`.trim(),O=(0,_.useMemo)(()=>e?$o(e.entries.map(t=>{let n=wi(f,t.fullPath),i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:w?oi(i,r):null,tags:e.tags[t.name]??[]}}).filter(e=>!w||r.mode===`dim`||e.ranges!==null),i,e):[],[e,w,r,f,i.sort,i.sortDescending]),ee=(0,_.useMemo)(()=>es(O),[O]),k=(0,_.useMemo)(()=>O.filter(e=>!e.entry.isDirectory&&ui(e.entry.name)),[O]);return n?(0,B.jsx)(Ks,{children:(0,B.jsx)(Js,{children:n})}):!e&&!t?(0,B.jsx)(Ks,{children:(0,B.jsx)(qs,{children:`Nothing selected.`})}):i.mode===`grid`?(0,B.jsx)(fs,{children:(0,B.jsxs)(bs,{children:[t&&!e?(0,B.jsx)(Ts,{$size:i.gridSize,children:(0,B.jsx)(ls,{size:i.gridSize})}):ee.map(t=>(0,B.jsxs)(xs,{children:[(0,B.jsxs)(Ss,{children:[t.label,(0,B.jsx)(Cs,{children:t.rows.length}),(0,B.jsx)(ws,{})]}),(0,B.jsx)(Ts,{$size:i.gridSize,children:t.rows.map(t=>(0,B.jsx)(us,{current:w&&t.entry.fullPath===r.currentPath,dim:w&&t.ranges===null,iconSize:ts(i.gridSize),innerRef:p,itemCount:e?.counts[t.entry.name],onOpen:u,onOpenFile:d,row:t,showTarget:E},t.entry.fullPath))})]},t.id)),!t&&e&&O.length===0&&(0,B.jsx)(Gs,{children:(0,B.jsx)(qs,{children:w&&r.mode===`hide`?`No entries match the search.`:`This folder is empty.`})})]})}):(0,B.jsxs)(fs,{children:[(0,B.jsxs)(ps,{style:{gridTemplateColumns:D},children:[(0,B.jsxs)(ms,{onClick:()=>c(`name`),type:`button`,children:[`Name`,Qo(i,`name`)]}),T.map(e=>(0,B.jsxs)(ms,{onClick:()=>c(e.id),type:`button`,children:[e.label,Qo(i,e.id)]},e.id))]}),(0,B.jsxs)(hs,{children:[t&&!e?(0,B.jsx)(cs,{template:D,columns:T.length}):O.map(t=>{let n=w&&t.ranges===null,a=w&&t.entry.fullPath===r.currentPath;return(0,B.jsxs)(Os,{$current:a,$dim:n,$hidden:t.entry.isHidden,onClick:e=>t.entry.isDirectory&&zr(e)&&u(t.entry.fullPath,!0),onDoubleClick:e=>t.entry.isDirectory?u(t.entry.fullPath,zr(e)):d?.(t.entry.fullPath),ref:a?p:void 0,style:{gridTemplateColumns:D},children:[(0,B.jsxs)(ks,{children:[t.place&&f.useIcons?(0,B.jsx)(ds,{children:(0,B.jsx)(Mo,{place:t.place,size:i.iconSize})}):(0,B.jsx)(ss,{entry:t.entry,size:i.iconSize}),(0,B.jsx)(As,{$broken:t.entry.linkValid===!1,title:t.entry.name,children:(0,B.jsx)(as,{name:t.label,ranges:t.ranges})}),E&&t.entry.linkTarget&&(0,B.jsxs)(js,{title:t.entry.linkTarget,children:[`→ `,t.entry.linkTarget]})]}),T.map(n=>(0,B.jsx)(Ms,{children:n.id===`tags`?(0,B.jsx)(Ns,{onClick:e=>{e.stopPropagation(),g({entry:t.entry,x:e.clientX,y:e.clientY})},title:`Edit tags`,type:`button`,children:t.tags.length>0?t.tags.map(t=>{let n=e.tagColors?.[t]??`#64748b`;return(0,B.jsx)(Ps,{$color:n,$ink:Po(n),children:t},t)}):(0,B.jsx)(Fs,{children:`+`})}):n.id===`linkStatus`&&t.entry.linkValid===!1?(0,B.jsx)(Is,{children:`Broken`}):is(n.id,t.entry,e)},n.id))]},t.entry.fullPath)}),!t&&e&&O.length===0&&(0,B.jsx)(Ks,{children:(0,B.jsx)(qs,{children:w&&r.mode===`hide`?`No entries match the search.`:`This folder is empty.`})})]}),a&&k.length>0&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(gs,{onDoubleClick:C,onPointerDown:b,onPointerMove:x,onPointerUp:S,title:`Drag to resize; double-click to reset`}),(0,B.jsxs)(_s,{style:{height:v},children:[(0,B.jsxs)(vs,{children:[`Preview`,(0,B.jsx)(ys,{children:k.length})]}),(0,B.jsx)(bs,{children:(0,B.jsx)(Ts,{$size:i.gridSize,children:k.map(e=>(0,B.jsx)(us,{current:w&&e.entry.fullPath===r.currentPath,dim:w&&e.ranges===null,iconSize:ts(i.gridSize),onOpen:u,onOpenFile:d,row:e,showTarget:E},e.entry.fullPath))})})]})]}),h&&e&&(0,B.jsx)(Fo,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>l?.(h.entry.name,e,t),onClose:()=>g(null),tags:e.tags[h.entry.name]??[],x:h.x,y:h.y})]})}function Qo(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}function $o(e,t,n){let r=e=>{switch(t.sort){case`type`:return rs(e);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}};return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let i=r(e.entry),a=r(n.entry),o=typeof i==`number`&&typeof a==`number`?i-a:String(i).localeCompare(String(a),void 0,{numeric:!0,sensitivity:`base`});return t.sortDescending?-o:o})}function es(e){let t=[{id:`folders`,label:`Folders`,rows:[]},{id:`images`,label:`Images`,rows:[]},{id:`files`,label:`Other files`,rows:[]}];for(let n of e)n.entry.isDirectory?t[0].rows.push(n):di(n.entry.name)?t[1].rows.push(n):t[2].rows.push(n);return t.filter(e=>e.rows.length>0)}function ts(e){return Math.max(24,Math.min(e-56,160))}var ns={file:`file`,folder:`folder`,text:`text file`,code:`source file`,image:`image`,video:`video`,audio:`audio`,archive:`archive`,pdf:`PDF`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function rs(e){let t=e.name.toLowerCase();if(t.endsWith(`.lnk`))return`Shortcut`;if(t.endsWith(`.url`)||t.endsWith(`.website`))return`Internet shortcut`;if(e.linkTarget!=null)return e.isDirectory?`Folder link`:`Symbolic link`;if(e.isDirectory)return`Folder`;let n=e.name.lastIndexOf(`.`),r=n>0&&n<e.name.length-1?e.name.slice(n+1).toUpperCase():``,i=ns[Ko(e.name)]??`file`;return r.length>0?`${r} ${i}`:`File`}function is(e,t,n){switch(e){case`type`:return rs(t);case`size`:return os(t,n.folderSizes);case`modified`:return hi(t.modified);case`created`:return hi(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:`Broken`;default:return``}}function as({name:e,ranges:t}){if(!t||t.length===0)return(0,B.jsx)(B.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,B.jsx)(Ws,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,B.jsx)(B.Fragment,{children:n})}function os(e,t){if(!e.isDirectory)return pi(e.size);let n=t[e.name];return n===void 0?`—`:pi(n)}function ss({entry:e,size:t=18}){let n=Qr(e.fullPath,e.isDirectory,t>32),r=$r(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,B.jsx)(ds,{$size:t,children:e.iconSource?.startsWith(`icon:`)?(0,B.jsx)(qo,{name:e.iconSource.slice(5),size:t}):r?(0,B.jsx)(`img`,{alt:``,height:t,src:r,width:t}):n?(0,B.jsx)(`img`,{alt:``,height:t,src:n,width:t}):e.isDirectory?(0,B.jsx)(Ta,{size:t}):(0,B.jsx)(qo,{name:Ko(e.name),size:t})})}function cs({template:e,columns:t}){return(0,B.jsx)(B.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,B.jsxs)(Es,{style:{gridTemplateColumns:e},children:[(0,B.jsxs)(ks,{children:[(0,B.jsx)(Ds,{style:{flexShrink:0,height:18,width:18}}),(0,B.jsx)(Ds,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,B.jsx)(Ds,{style:{width:t%2==0?44:92}},t))]},r))})}function ls({size:e}){return(0,B.jsx)(B.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,B.jsxs)(Ls,{$dim:!1,$current:!1,children:[(0,B.jsx)(Rs,{children:(0,B.jsx)(Ds,{style:{height:e,width:e}})}),(0,B.jsx)(Bs,{children:(0,B.jsx)(Ds,{style:{height:9,width:`${t}%`}})})]},n))})}var us=(0,_.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,onOpen:s,onOpenFile:c}){let l=Ci(),u=!e.entry.isDirectory&&ui(e.entry.name),d=ri(u?e.entry.fullPath:null,192,e.entry.modified),[f,p]=(0,_.useState)(!1);return(0,B.jsxs)(Ls,{$current:t,$dim:n,onClick:t=>e.entry.isDirectory&&zr(t)&&s(e.entry.fullPath,!0),onDoubleClick:t=>e.entry.isDirectory?s(e.entry.fullPath,zr(t)):c?.(e.entry.fullPath),ref:t?o:void 0,title:e.entry.name,children:[(0,B.jsx)(Rs,{children:u&&d&&!f?(0,B.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>p(!0),src:d}):(0,B.jsx)(zs,{children:e.place&&l.useIcons?(0,B.jsx)(Mo,{place:e.place,size:r}):(0,B.jsx)(ss,{entry:e.entry,size:r})})}),(0,B.jsxs)(Bs,{children:[(0,B.jsx)(Vs,{$broken:e.entry.linkValid===!1,children:(0,B.jsx)(as,{name:e.label,ranges:e.ranges})}),(0,B.jsx)(Hs,{children:e.entry.isDirectory?i===void 0?rs(e.entry):`${rs(e.entry)} · ${i} items`:`${rs(e.entry)} · ${pi(e.entry.size)}`}),a&&e.entry.linkTarget&&(0,B.jsxs)(Us,{title:e.entry.linkTarget,children:[`→ `,e.entry.linkTarget]})]})]})}),ds=R.span`
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
`,fs=R.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    flex: 1;
`,ps=R.div`
    display: grid;
    gap: 16px;
    padding: 10px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ms=R.button`
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
`,hs=R.div`
    flex: 1;
    min-height: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,gs=R.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(59, 130, 246, 0.35);
    }
`,_s=R.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: var(--bg-secondary);
`,vs=R.div`
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
`,ys=R.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,bs=R.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,xs=R.section`
    & + & {
        margin-top: 22px;
    }
`,Ss=R.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Cs=R.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,ws=R.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,Ts=R.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,Es=R.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,Ds=R.span`
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
`,Os=R.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: ${({$current:e})=>e?`rgba(59, 130, 246, 0.14)`:`transparent`};
    box-shadow: ${({$current:e})=>e?`inset 0 0 0 1px rgba(59, 130, 246, 0.5)`:`none`};
    font-size: 13px;
    color: var(--text-secondary);
    opacity: ${({$hidden:e,$dim:t})=>t?.3:e?.55:1};
    cursor: default;
    user-select: none;
    transition: background 100ms ease, border-color 100ms ease, opacity 100ms ease;

    &:hover {
        background: var(--bg-card-hover);
        border-color: var(--border-color);
        color: var(--text-primary);
    }
`,ks=R.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,As=R.span`
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,js=R.span`
    overflow: hidden;
    min-width: 0;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--accent-primary);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ms=R.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ns=R.button`
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
`,Ps=R.span`
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
`,Fs=R.span`
    color: var(--text-muted);
    font-size: 10px;
`,Is=R.span`
    color: #fca5a5;
`,Ls=R.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    overflow: hidden;
    border: 1px solid ${({$current:e})=>e?`rgba(59, 130, 246, 0.5)`:`var(--border-color)`};
    border-radius: var(--radius-md);
    background: ${({$current:e})=>e?`rgba(59, 130, 246, 0.14)`:`var(--bg-primary)`};
    opacity: ${({$dim:e})=>e?.3:1};
    cursor: default;
    user-select: none;
    transition: background 100ms ease, border-color 100ms ease, opacity 100ms ease;

    &:hover {
        background: var(--bg-card-hover);
        border-color: var(--border-color-hover);
    }
`,Rs=R.div`
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
`,zs=R.span`
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
`,Bs=R.div`
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
`,Vs=R.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Hs=R.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Us=R.span`
    width: 100%;
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--accent-primary);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ws=R.mark`
    border-radius: 2px;
    background: rgba(59, 130, 246, 0.5);
    color: var(--text-primary);
`,Gs=R.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Ks=R.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,qs=R.p`
    font-size: 13px;
    color: var(--text-muted);
`,Js=R.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`;function Ys({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,onQuery:s,onPrevious:c,onNext:l,onMatchCase:u,onRegex:d,onMode:f,onClose:p}){let m=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=m.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let h=e=>{e(),m.current?.focus()};return(0,B.jsxs)(Xs,{children:[(0,B.jsx)(Oa,{}),(0,B.jsx)(Zs,{"aria-label":`Search this folder`,onChange:e=>s(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?c():l()),e.key===`Escape`&&(e.preventDefault(),p())},placeholder:`Search this folder`,ref:m,spellCheck:!1,value:e}),(0,B.jsx)(Qs,{children:i===0?`0/0`:`${a+1}/${i}`}),(0,B.jsx)($s,{onClick:()=>h(c),title:`Previous match (Shift+Enter)`,type:`button`,children:(0,B.jsx)(Pa,{size:12})}),(0,B.jsx)($s,{$down:!0,onClick:()=>h(l),title:`Next match (Enter)`,type:`button`,children:(0,B.jsx)(Pa,{size:12})}),(0,B.jsx)(ec,{$on:n,onClick:()=>h(u),title:`Match case`,type:`button`,children:`Aa`}),(0,B.jsx)(ec,{$on:r,onClick:()=>h(d),title:`Regular expression`,type:`button`,children:`.*`}),(0,B.jsx)(tc,{$on:t===`hide`,onClick:()=>h(f),title:t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`,type:`button`,children:t===`hide`?`Hide`:`Dim`}),(0,B.jsx)($s,{onClick:p,title:`Close search (Esc)`,type:`button`,children:(0,B.jsx)(Ha,{size:12})})]})}var Xs=R.div`
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
`,Zs=R.input`
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
`,Qs=R.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,$s=R.button`
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
`,ec=R.button`
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
`,tc=R(ec)`
    min-width: 34px;
    font-family: var(--font-sans);
    font-size: 10px;
`;function nc({path:e,name:t,isDirectory:n,size:r=18}){let i=Qr(e,n);return i?(0,B.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,B.jsx)(Ta,{size:r}):(0,B.jsx)(qo,{name:Ko(t),size:r})}function rc({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=(0,_.useRef)(null),a=(0,_.useRef)(null),[o,s]=(0,_.useState)(null);return(0,_.useLayoutEffect)(()=>{let e=i.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();s({top:t.bottom+6,left:t.left})},[]),(0,_.useLayoutEffect)(()=>{if(!o||!a.current)return;let e=a.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,o.top-e.height-12):o.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):o.left;(t!==o.top||n!==o.left)&&s({top:t,left:n})},[o]),(0,_.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`span`,{ref:i,style:{display:`none`}}),o&&(0,No.createPortal)((0,B.jsxs)(ic,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:a,style:{position:`fixed`,top:o.top,left:o.left},children:[Object.keys(Do).map(n=>(0,B.jsx)(ac,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:Do[n](16)},n)),(0,B.jsx)(ac,{onClick:async()=>{let e=await Or();e&&t(`file:${e}`)},title:`Choose an image`,type:`button`,children:(0,B.jsx)(ja,{size:13})}),r&&(0,B.jsx)(ac,{$active:!e,onClick:()=>t(null),title:`Default`,type:`button`,children:(0,B.jsx)(Ha,{size:12})})]}),document.body)]})}var ic=R.div`
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
`,ac=R.button`
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
`,oc=R.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 14px 26px 34px;
`,sc=R.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    flex-wrap: wrap;
    padding-bottom: 14px;
`,cc=R.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,lc=R.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(99, 102, 241, 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 11px;
    cursor: pointer;
`,uc=R.button`
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
`,dc=R.div`
    position: relative;
    display: inline-flex;
`,fc=R.div`
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
`,pc=R.button`
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
`,mc=R.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,hc=R.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
`,gc=R.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,_c=R.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,vc=R.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,yc=R.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,bc=R.input`
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
`,xc=R.button`
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
`,Sc=R.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,Cc=R.div`
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
`,wc=R.span`
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
`,Tc=R.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,Ec=R.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Dc=R.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,Oc=R.button`
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
`,kc=R.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,Ac=R.button`
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
`,jc=R.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Mc=R.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,Nc=R.div`
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
`,Pc=R.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,Fc=R.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,Ic=R.button`
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
`,Lc=R.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,Rc=R.button`
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
`,zc=R.button`
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
`,Bc=R.button`
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
`,Vc=R.span`
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
`,Hc=R.button`
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
`,Uc=R.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,Wc=R.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`;function Gc({places:e,drives:t,recent:n,recentLimit:r,homePath:i,historyVersion:a,onOpen:o,onPlacesChanged:s,onRecentCleared:c,onLayoutChanged:l,onHistoryChanged:u,onDrivesChanged:d}){let f=Ci(),[p,m]=(0,_.useState)(!1),[h,g]=(0,_.useState)(null),[v,y]=(0,_.useState)(null),[b,x]=(0,_.useState)(!1),[S,C]=(0,_.useState)(null),[w,T]=(0,_.useState)(null),[E,D]=(0,_.useState)(null);(0,_.useEffect)(()=>{wr().then(g,()=>g(null))},[]),(0,_.useEffect)(()=>{if(!v)return;let e=()=>y(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||y(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[v]),(0,_.useEffect)(()=>{if(!b)return;let e=()=>x(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[b]);let O=ko(h),ee=O.map(e=>e.id),k=e=>v?.kind===`panel`&&v.id===e,A=e=>v?.kind===`place`&&v.id===e;(0,_.useEffect)(()=>{if(!z.available)return;let e=O.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??i).filter(e=>e.length>0);z.send({type:`fs.watch`,payload:{paths:e}})},[O.map(e=>e.path??e.id).join(`|`),i]);let te=async(e,t)=>{let n={...h?.placeIcons};t?n[e]=t:delete n[e],y(null),await M({placeIcons:n}),s(await cr())},ne=async(e,t)=>{let n={...h?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],T(null),await M({placeNames:n}),s(await cr())},re=e=>{D(null),C({drive:e,label:e.label||`Local Disk`})},j=async()=>{if(!S)return;let{drive:e,label:t}=S;C(null);let n=await nr(e.name,t.trim());n.ok?(D(null),d?.()):D(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},ie=h?.overviewColumns??1,M=async e=>{if(!h)return;let t={...h,...e,overviewPanels:e.overviewPanels??ee,overviewHidden:[]};g(await Tr(t)),l?.()},ae=(e,t)=>{let n=ee.indexOf(e),r=n+t;if(n<0||r<0||r>=ee.length)return;let i=[...ee];[i[n],i[r]]=[i[r],i[n]],M({overviewPanels:i})},oe=(e,t)=>{let n={...h?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],M({overviewTitles:n})},se=(e,t)=>void M({overviewViews:{...h?.overviewViews,[e]:t}}),ce=e=>{let t=h?.overviewPinned??O.filter(e=>e.pinned).map(e=>e.id);M({overviewPinned:O.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},le=e=>{y(null);let t=t=>{let n={...t};return delete n[e],n},n=h?.overviewPinned??O.filter(e=>e.pinned).map(e=>e.id);M({overviewPanels:ee.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(h?.overviewTitles),overviewViews:t(h?.overviewViews),overviewIcons:t(h?.overviewIcons),panelPlaces:t(h?.panelPlaces)})},ue=(e,t)=>{let n={...h?.overviewIcons};t?n[e]=t:delete n[e],y(null),M({overviewIcons:n})},de=async e=>{if(!h)return;if(e===`folder`){let e=await kr();if(!e)return;let t=`folder:${e}`;ee.includes(t)||await M({overviewPanels:[...ee,t]});return}if(e===`quick`){let e=2;for(;ee.includes(`quick:${e}`);)e+=1;await M({overviewPanels:[...ee,`quick:${e}`]});return}let t=e;for(let n=2;ee.includes(t);n+=1)t=`${e}:${n}`;await M({overviewPanels:[...ee,t]})},fe=async t=>{let n=await kr();if(!n)return;if(t.id===`quick`){await M({quickAccess:[...new Set([...e.map(e=>e.path),n])]}),s(await cr());return}let r=t.places??[];r.some(e=>qc(e,n))||await M({panelPlaces:{...h?.panelPlaces,[t.id]:[...r,n]}})},pe=async(t,n)=>{y(null),t.id===`quick`?(await M({quickAccess:e.filter(e=>!qc(e.path,n)).map(e=>e.path)}),s(await cr())):await M({panelPlaces:{...h?.panelPlaces,[t.id]:(t.places??[]).filter(e=>!qc(e,n))}})},N=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>qc(e.path,t));return{name:h?.placeNames?.[t]??n?.name??(_i(t)||t),path:t,kind:`folder`,icon:n?.icon??h?.placeIcons?.[t]??null}}),me=e=>{if(n.length===0)return(0,B.jsx)(Wc,{children:`Files and folders you open show up here.`});let t=n.slice(0,r);return e.view===`grid`?(0,B.jsx)(Sc,{children:t.map(e=>{let t=wi(f,e.path);return(0,B.jsxs)(Cc,{$plain:!1,onClick:t=>e.isDirectory?o(e.path,zr(t)):void rr(e.path),title:e.path,children:[(0,B.jsx)(wc,{children:t&&f.useIcons?(0,B.jsx)(Mo,{place:t,size:18}):(0,B.jsx)(nc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,B.jsxs)(Tc,{children:[(0,B.jsx)(`strong`,{children:t?.name||e.name}),(0,B.jsx)(Ec,{children:e.path})]})]},e.path)})}):(0,B.jsx)(Dc,{children:t.map(e=>{let t=wi(f,e.path);return(0,B.jsxs)(Oc,{onClick:t=>e.isDirectory?o(e.path,zr(t)):void rr(e.path),title:e.path,type:`button`,children:[t&&f.useIcons?(0,B.jsx)(Mo,{place:t,size:15}):(0,B.jsx)(nc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,B.jsxs)(kc,{children:[(0,B.jsx)(`strong`,{children:t?.name||e.name}),(0,B.jsx)(Ec,{children:e.path})]})]},e.path)})})},he=e=>{if(t.length===0)return(0,B.jsx)(Wc,{children:`No drives are available.`});let n=t.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=S?.drive.name===t.name,i=r?(0,B.jsx)(Kc,{maxLength:32,onCancel:()=>C(null),onChange:e=>C({...S,label:e}),onCommit:()=>void j(),value:S?.label??``}):(0,B.jsx)(B.Fragment,{children:bi(t)}),a=!r&&p&&(0,B.jsx)(Bc,{onClick:e=>{e.stopPropagation(),re(t)},title:`Rename volume`,type:`button`,children:(0,B.jsx)(ao,{size:11})}),s=(0,B.jsxs)(Ec,{children:[pi(t.freeSpace),` free of `,pi(t.totalSize)]});return e.view===`grid`?(0,B.jsxs)(Cc,{$plain:!1,onClick:e=>!r&&o(t.name,zr(e)),title:t.name,children:[(0,B.jsx)(wc,{children:(0,B.jsx)(Da,{size:18})}),(0,B.jsxs)(Tc,{children:[(0,B.jsxs)(`strong`,{children:[i,r&&yi(t),a]}),s]})]},t.name):(0,B.jsxs)(Oc,{as:r?`div`:`button`,onClick:r?void 0:e=>o(t.name,zr(e)),title:t.name,type:r?void 0:`button`,children:[(0,B.jsx)(Da,{size:18}),(0,B.jsxs)(kc,{children:[(0,B.jsxs)(`strong`,{children:[i,r&&yi(t),a]}),s]}),(0,B.jsx)(jc,{children:(0,B.jsx)(Mc,{$used:n,$tone:gi(n)})})]},t.name)});return e.view===`grid`?(0,B.jsx)(Sc,{children:n}):(0,B.jsx)(Dc,{children:n})},ge=e=>{switch(e.kind){case`quick`:{let t=N(e);return!p&&t.length===0?(0,B.jsx)(Wc,{children:`No folders in this Quick access panel yet.`}):e.view===`grid`?(0,B.jsxs)(Sc,{children:[t.map(t=>(0,B.jsxs)(Cc,{$plain:p,onClick:e=>!p&&o(t.path,zr(e)),title:t.path,children:[p&&(0,B.jsx)(zc,{onClick:n=>{n.stopPropagation(),pe(e,t.path)},title:`Remove from Quick access`,type:`button`,children:(0,B.jsx)(Ha,{size:11})}),(0,B.jsxs)(Lc,{children:[p?(0,B.jsx)(Rc,{onClick:e=>{e.stopPropagation(),y(A(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:`Change icon`,type:`button`,children:(0,B.jsx)(wc,{children:(0,B.jsx)(Mo,{place:t})})}):(0,B.jsx)(wc,{children:(0,B.jsx)(Mo,{place:t})}),A(t.path)&&(0,B.jsx)(rc,{onPick:e=>void te(t.path,e),value:h?.placeIcons?.[t.path]??t.icon})]}),(0,B.jsxs)(Tc,{children:[w?.path===t.path?(0,B.jsx)(`strong`,{children:(0,B.jsx)(Kc,{onCancel:()=>T(null),onChange:e=>T({path:t.path,name:e}),onCommit:()=>void ne(t.path,w?.name??``),value:w?.name??``})}):(0,B.jsxs)(`strong`,{children:[t.name,p&&(0,B.jsx)(Bc,{onClick:e=>{e.stopPropagation(),y(null),T({path:t.path,name:t.name})},title:`Rename folder`,type:`button`,children:(0,B.jsx)(ao,{size:11})})]}),(0,B.jsx)(Ec,{children:t.path})]})]},t.path)),p&&(0,B.jsxs)(Ac,{onClick:()=>void fe(e),title:`Pin a folder here`,type:`button`,children:[(0,B.jsx)(wc,{children:(0,B.jsx)(ja,{size:15})}),(0,B.jsxs)(Tc,{children:[(0,B.jsx)(`strong`,{children:`Add folder`}),(0,B.jsx)(Ec,{children:`Pin a directory here`})]})]})]}):(0,B.jsxs)(Dc,{children:[t.map(t=>(0,B.jsxs)(Oc,{onClick:e=>!p&&o(t.path,zr(e)),title:t.path,type:`button`,children:[(0,B.jsxs)(Lc,{children:[p?(0,B.jsx)(Rc,{onClick:e=>{e.stopPropagation(),y(A(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:`Change icon`,type:`button`,children:(0,B.jsx)(Mo,{place:t,size:15})}):(0,B.jsx)(Mo,{place:t,size:15}),A(t.path)&&(0,B.jsx)(rc,{onPick:e=>void te(t.path,e),value:h?.placeIcons?.[t.path]??t.icon})]}),(0,B.jsxs)(kc,{children:[w?.path===t.path?(0,B.jsx)(`strong`,{children:(0,B.jsx)(Kc,{onCancel:()=>T(null),onChange:e=>T({path:t.path,name:e}),onCommit:()=>void ne(t.path,w?.name??``),value:w?.name??``})}):(0,B.jsxs)(`strong`,{children:[t.name,p&&(0,B.jsx)(Bc,{onClick:e=>{e.stopPropagation(),y(null),T({path:t.path,name:t.name})},title:`Rename folder`,type:`button`,children:(0,B.jsx)(ao,{size:11})})]}),(0,B.jsx)(Ec,{children:t.path})]}),p&&(0,B.jsx)(zc,{$inline:!0,onClick:n=>{n.stopPropagation(),pe(e,t.path)},title:`Remove from Quick access`,type:`button`,children:(0,B.jsx)(Ha,{size:11})})]},t.path)),p&&(0,B.jsxs)(Ac,{$row:!0,onClick:()=>void fe(e),title:`Pin a folder here`,type:`button`,children:[(0,B.jsx)(ja,{size:15}),(0,B.jsxs)(kc,{children:[(0,B.jsx)(`strong`,{children:`Add folder`}),(0,B.jsx)(Ec,{children:`Pin a directory here`})]})]})]})}case`frequent`:return(0,B.jsx)(Jc,{mode:e.view,onOpen:o,version:a});case`recent`:return me(e);case`drives`:return he(e);default:return(0,B.jsx)(Yc,{mode:e.view,onOpen:o,path:e.path??i})}};return(0,B.jsxs)(oc,{children:[(0,B.jsxs)(sc,{children:[(0,B.jsx)(cc,{role:`group`,title:`Columns`,children:[1,2,3,4,5].map(e=>(0,B.jsx)(lc,{$active:ie===e,onClick:()=>void M({overviewColumns:e}),title:`${e} column${e>1?`s`:``}`,type:`button`,children:e},e))}),p&&(0,B.jsxs)(dc,{children:[(0,B.jsxs)(uc,{onClick:()=>x(e=>!e),onPointerDown:e=>e.stopPropagation(),title:`Add a panel`,type:`button`,children:[(0,B.jsx)(ja,{size:12}),`Add panel ▾`]}),b&&(0,B.jsx)(fc,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`folder`].map(e=>(0,B.jsx)(pc,{onClick:()=>{x(!1),de(e)},type:`button`,children:e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:`Folder…`},e))})]}),(0,B.jsxs)(uc,{onClick:()=>{m(e=>!e),x(!1),y(null),T(null),C(null)},title:p?`Done`:`Edit`,type:`button`,children:[p?(0,B.jsx)(Va,{size:13}):(0,B.jsx)(ao,{size:13}),p?`Done`:`Edit`]})]}),E&&(0,B.jsx)(Uc,{children:E}),(0,B.jsx)(mc,{$columns:ie,children:O.map(e=>{let t=ee.indexOf(e.id);return(0,B.jsxs)(hc,{children:[(0,B.jsxs)(gc,{children:[(0,B.jsxs)(_c,{children:[(0,B.jsxs)(Lc,{children:[p?(0,B.jsx)(Rc,{onClick:()=>y(k(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:`Change icon`,type:`button`,children:(0,B.jsx)(jo,{panel:e,size:15})}):(0,B.jsx)(jo,{panel:e,size:15}),k(e.id)&&(0,B.jsx)(rc,{onPick:t=>ue(e.id,t),value:e.icon})]}),p?(0,B.jsx)(bc,{defaultValue:e.title,onBlur:t=>oe(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,B.jsx)(yc,{children:e.title})]}),(0,B.jsxs)(vc,{children:[!p&&e.kind===`recent`&&(0,B.jsx)(uc,{onClick:()=>void br().then(c),title:`Clear`,type:`button`,children:`Clear`}),!p&&e.kind===`frequent`&&(0,B.jsx)(uc,{onClick:()=>void xr().then(()=>u?.()),title:`Clear the frequent list`,type:`button`,children:`Clear`}),!p&&(e.kind===`home`||e.kind===`folder`)&&(0,B.jsx)(uc,{onClick:()=>o(e.path??i),title:`Open folder`,type:`button`,children:`Open`}),p&&(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(xc,{$active:e.pinned,onClick:()=>ce(e.id),title:e.pinned?`Unpin from the sidebar`:`Pin to the sidebar`,type:`button`,children:(0,B.jsx)(Ia,{size:12})}),(0,B.jsx)(xc,{$active:e.view===`list`,onClick:()=>se(e.id,`list`),title:`List`,type:`button`,children:(0,B.jsx)(La,{size:13})}),(0,B.jsx)(xc,{$active:e.view===`grid`,onClick:()=>se(e.id,`grid`),title:`Grid`,type:`button`,children:(0,B.jsx)(Ra,{size:13})}),(0,B.jsx)(xc,{disabled:t===0,onClick:()=>ae(e.id,-1),title:`Move up`,type:`button`,children:(0,B.jsx)(ka,{size:12})}),(0,B.jsx)(xc,{disabled:t===ee.length-1,onClick:()=>ae(e.id,1),title:`Move down`,type:`button`,children:(0,B.jsx)(ka,{size:12})}),(0,B.jsx)(xc,{onClick:()=>le(e.id),title:`Remove panel`,type:`button`,children:(0,B.jsx)(Ha,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?ge(e):(0,B.jsx)(Pc,{children:ge(e)})]},e.id)})})]})}function Kc({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){return(0,B.jsxs)(Vc,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,B.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,B.jsx)(Hc,{onClick:r,title:`Cancel`,type:`button`,children:(0,B.jsx)(Ha,{size:11})}),(0,B.jsx)(Hc,{$apply:!0,onClick:n,title:`Rename volume`,type:`button`,children:(0,B.jsx)(Va,{size:12})})]})}function qc(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}function Jc({mode:e,onOpen:t,version:n}){let[r,i]=(0,_.useState)(null),a=Ci();if((0,_.useEffect)(()=>{vr().then(i,()=>i([]))},[n]),!r)return(0,B.jsx)(Wc,{children:`Reading…`});if(r.length===0)return(0,B.jsx)(Wc,{children:`Folders you open often show up here.`});let o=e=>`${e.count} ${e.count===1?`visit`:`visits`} · ${e.path}`;return e===`grid`?(0,B.jsx)(Sc,{children:r.map(e=>{let n=wi(a,e.path);return(0,B.jsxs)(Cc,{$plain:!1,onClick:n=>t(e.path,zr(n)),title:e.path,children:[(0,B.jsx)(wc,{children:n&&a.useIcons?(0,B.jsx)(Mo,{place:n,size:18}):(0,B.jsx)(nc,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,B.jsxs)(Tc,{children:[(0,B.jsx)(`strong`,{children:n?.name||e.name}),(0,B.jsx)(Ec,{children:o(e)})]})]},e.path)})}):(0,B.jsx)(Dc,{children:r.map(e=>{let n=wi(a,e.path);return(0,B.jsxs)(Oc,{onClick:n=>t(e.path,zr(n)),title:e.path,type:`button`,children:[n&&a.useIcons?(0,B.jsx)(Mo,{place:n,size:15}):(0,B.jsx)(nc,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,B.jsxs)(kc,{children:[(0,B.jsx)(`strong`,{children:n?.name||e.name}),(0,B.jsx)(Ec,{children:o(e)})]})]},e.path)})})}function Yc({path:e,mode:t,onOpen:n}){let[r,i]=(0,_.useState)(null),a=Ci();return(0,_.useEffect)(()=>{e&&(i(null),ir(e).then(i,()=>i(null)))},[e]),(0,_.useEffect)(()=>{if(z.available)return z.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&n.data.path.replace(/[\\\\/]+$/,``).toLowerCase()===e.replace(/[\\\\/]+$/,``).toLowerCase()&&ir(e,!1).then(i,()=>void 0)})},[e]),r?t===`list`?(0,B.jsx)(Nc,{children:(0,B.jsx)(Zo,{error:null,listing:r,loading:!1,onOpen:n,onOpenFile:e=>void rr(e),onSort:()=>void 0,showImages:!1,view:{...er,columns:tr.columns??[]}})}):(0,B.jsx)(Pc,{children:r.entries.length===0?(0,B.jsx)(Wc,{children:`This folder is empty.`}):(0,B.jsx)(Fc,{children:r.entries.map(e=>{let t=wi(a,e.fullPath);return(0,B.jsxs)(Ic,{onClick:t=>e.isDirectory?n(e.fullPath,zr(t)):void rr(e.fullPath),title:e.name,type:`button`,children:[t&&a.useIcons?(0,B.jsx)(Mo,{place:t,size:16}):(0,B.jsx)(nc,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,B.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,B.jsx)(Wc,{children:`Reading…`})}function Xc({path:e,label:t,icon:n,onNavigate:r}){let i=Ci(),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(``),l=(0,_.useRef)(null);(0,_.useEffect)(()=>{a||c(e.replace(/\\/g,`/`))},[e,a]),(0,_.useEffect)(()=>{a&&l.current?.select()},[a]),(0,_.useEffect)(()=>{if(!a)return;let e=()=>o(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[a]);let u=()=>{c(e.replace(/\\/g,`/`)),o(!0)},d=()=>{let t=s.trim();o(!1),t.length>0&&t!==e&&r(t)};if(a)return(0,B.jsxs)(il,{onPointerDown:e=>e.stopPropagation(),children:[(0,B.jsx)(`input`,{onChange:e=>c(e.target.value),onKeyDown:e=>{e.key===`Enter`&&d(),e.key===`Escape`&&o(!1)},ref:l,spellCheck:!1,value:s}),(0,B.jsx)(al,{onClick:()=>o(!1),title:`Cancel`,type:`button`,children:(0,B.jsx)(Ha,{size:12})}),(0,B.jsx)(al,{$apply:!0,onClick:d,onPointerDown:e=>e.stopPropagation(),title:`Open this path`,type:`button`,children:(0,B.jsx)(Va,{size:14})})]});let f=t?[{label:t,path:e,icon:n}]:Qc(e,i.places);return(0,B.jsx)($c,{onClick:u,title:`Click to type a path`,children:f.map((t,n)=>(0,B.jsxs)(el,{$last:n===f.length-1,children:[n>0&&(0,B.jsx)(nl,{children:(0,B.jsx)(Pa,{size:9})}),(0,B.jsxs)(rl,{onClick:n=>{n.stopPropagation(),t.path!==e&&r(t.path)},type:`button`,children:[t.place?(0,B.jsx)(tl,{children:(0,B.jsx)(Mo,{place:t.place,size:13})}):t.icon&&(0,B.jsx)(tl,{children:t.icon}),t.label]})]},t.path))})}function Zc(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function Qc(e,t){let n=Zc(e),r=e=>e.replace(/[\\/]+$/,``).toLowerCase(),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>r(t.path)===r(e.path));t>i&&(i=t,a=e)}return a&&i>=0&&n.splice(0,i+1,{label:a.name,path:n[i].path,place:a}),n}var $c=R.div`
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
`,el=R.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,tl=R.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,nl=R.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,rl=R.button`
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
`,il=R.div`
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
`,al=R.button`
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
`,ol=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,B.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,B.jsx)(`path`,{d:`M4 4v6h6`})]});function sl(){let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)([]),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(!0),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(!1),y=(0,_.useCallback)(async()=>{l(!0),p(null);try{t(await ur(g))}catch(e){p(e instanceof Error?e.message:String(e))}finally{l(!1)}},[g]);(0,_.useEffect)(()=>{y()},[y]),(0,_.useEffect)(()=>{g||(r([]),a(!1),s(null))},[g]);let b=async e=>{await dr(e),await y()},x=async()=>{h(!1),await fr(g),await y()},S=async e=>{await pr(e),await y()},C=async()=>{d(!0),s(null);try{let e=await mr();if(e.cancelled){s(`Elevation was declined — nothing was read.`);return}if(e.failed){s(`The elevated helper could not produce a report. Try again.`);return}r(e.entries),a(!0)}finally{d(!1)}},w=async()=>{d(!0),h(!1);try{await hr(),r([]),a(!1),s(null),await y()}finally{d(!1)}},T=new Set(e.map(e=>e.id)),E=[...e,...n.filter(e=>!T.has(e.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>t.deleted-e.deleted);return(0,B.jsxs)(ll,{children:[(0,B.jsxs)(ul,{children:[(0,B.jsxs)(dl,{children:[(0,B.jsx)(Ba,{size:16}),(0,B.jsx)(`span`,{children:`Recycle Bin`}),(0,B.jsx)(fl,{children:c?`…`:`${E.length} items`})]}),(0,B.jsxs)(pl,{children:[(0,B.jsx)(ml,{$on:g,onClick:()=>v(e=>!e),title:`Show metadata records whose content is already gone`,type:`button`,children:`Orphans`}),g?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(gl,{disabled:u||i,onClick:()=>void C(),title:i?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`,type:`button`,children:u?`Working…`:i?`Admin view loaded`:`Show all (admin)…`}),m?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(_l,{$danger:!0,disabled:u,onClick:()=>void w(),type:`button`,children:[(0,B.jsx)(Va,{size:12}),` Delete every orphan`]}),(0,B.jsx)(vl,{onClick:()=>h(!1),title:`Cancel`,type:`button`,children:(0,B.jsx)(Ha,{size:12})})]}):(0,B.jsx)(gl,{disabled:u||E.length===0,onClick:()=>h(!0),title:`Runs an elevated copy of the app and deletes every leftover record`,type:`button`,children:`Delete all orphans…`})]}):m?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(_l,{$danger:!0,onClick:()=>void x(),type:`button`,children:[(0,B.jsx)(Va,{size:12}),` Delete everything`]}),(0,B.jsx)(vl,{onClick:()=>h(!1),title:`Cancel`,type:`button`,children:(0,B.jsx)(Ha,{size:12})})]}):(0,B.jsx)(gl,{disabled:E.length===0,onClick:()=>h(!0),type:`button`,children:`Empty`}),(0,B.jsx)(vl,{onClick:()=>void y(),title:`Refresh`,type:`button`,children:(0,B.jsx)(Aa,{size:14})})]})]}),o&&(0,B.jsx)(jl,{children:o}),f&&(0,B.jsx)(Ml,{children:f}),!f&&!c&&E.length===0&&(0,B.jsx)(Ml,{children:`The recycle bin is empty.`}),E.length>0&&(0,B.jsxs)(yl,{children:[(0,B.jsxs)(bl,{children:[(0,B.jsx)(`span`,{children:`Name`}),(0,B.jsx)(`span`,{children:`Original location`}),(0,B.jsx)(`span`,{children:`Deleted`}),(0,B.jsx)(`span`,{children:`Size`}),(0,B.jsx)(`span`,{})]}),(0,B.jsx)(xl,{children:E.map(e=>(0,B.jsxs)(Sl,{$orphan:e.isOrphan,title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,B.jsxs)(wl,{children:[(0,B.jsx)(cl,{entry:e}),(0,B.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,B.jsx)(hl,{children:`metadata only`}),e.owner&&(0,B.jsx)(hl,{$other:!0,children:`other profile`})]}),(0,B.jsx)(El,{children:e.originalPath}),(0,B.jsx)(Dl,{children:hi(e.deleted)}),(0,B.jsx)(Ol,{children:e.isDirectory?`—`:pi(e.size)}),(0,B.jsxs)(kl,{children:[!e.isOrphan&&e.removable&&(0,B.jsx)(Al,{onClick:()=>void b(e.id),title:`Restore to its original folder`,type:`button`,children:(0,B.jsx)(ol,{})}),e.removable&&(0,B.jsx)(Al,{$danger:!0,onClick:()=>void S(e.id),title:e.isOrphan?`Remove the leftover record`:`Delete permanently`,type:`button`,children:(0,B.jsx)(Ba,{size:13})})]})]},e.id))})]})]})}function cl({entry:e}){let t=Qr(e.originalPath,e.isDirectory);return(0,B.jsx)(Tl,{children:t?(0,B.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,B.jsx)(Ta,{}):(0,B.jsx)(Ea,{})})}var ll=R.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,ul=R.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,dl=R.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,fl=R.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,pl=R.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,ml=R.button`
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
`,hl=R.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,gl=R.button`
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
`,_l=R(gl)`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border-color: ${({$danger:e})=>e?`rgba(248, 113, 113, 0.5)`:`var(--border-color)`};
    color: ${({$danger:e})=>e?`#fca5a5`:`var(--text-secondary)`};

    &:hover:not(:disabled) {
        background: rgba(248, 113, 113, 0.14);
        color: #fecaca;
    }
`,vl=R.button`
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
`,yl=R.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,bl=R.div`
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
`,xl=R.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,Sl=R.div`
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
`,Cl=R.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,wl=R(Cl)`
    display: flex;
    align-items: center;
    gap: 10px;
`,Tl=R.span`
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
`,El=R(Cl)`
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
`,Dl=R(Cl)`
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
`,Ol=R(Cl)`
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
`,kl=R.span`
    display: flex;
    justify-content: flex-end;
    gap: 4px;
`,Al=R.button`
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
`,jl=R.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,Ml=R.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function Nl(){return(0,B.jsx)(Pl,{title:`Always applies to every folder`,children:`Global`})}var Pl=R.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,Fl=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}];function Il({appInfo:e,onSettingsChanged:t}){let[n,r]=(0,_.useState)(null),[i,a]=(0,_.useState)(null),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)(`file`),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(!1),[x,S]=(0,_.useState)(!1),[C,w]=(0,_.useState)(null),[T,E]=(0,_.useState)(null),D=i?.defaultView??tr;(0,_.useEffect)(()=>{Sr().then(r,()=>r(null)),wr().then(a,()=>a(null)),Pr().then(b,()=>b(!1))},[]),(0,_.useEffect)(()=>{let e=()=>void Mr().then(v,()=>v(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let O=async e=>{if(!i)return;let n={...i,...e};a(n),Jr(),a(await Tr(n)),t()},ee=async e=>{let t=new Set(D.columns??tr.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=Jo.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await O({defaultView:{...D,columns:n}})},k=async()=>{if(x)return;let e=!y;S(!0),w(null);try{let t=await Fr(e);b(t),a(t=>t&&{...t,linksEnabled:e}),t!==e&&w(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{w(`The request to Windows failed. Try again.`)}finally{S(!1)}},A=async(e,t)=>{if(!i)return;let n={...i.extensionIcons};t===null?delete n[e]:n[e]=t,await O({extensionIcons:n})},te={...Ir,...i?.shortcuts};(0,_.useEffect)(()=>{if(!T)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){E(null);return}let t=Br(e);t&&(E(null),O({shortcuts:{...te,[T]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[T,i]);let ne=async e=>{await O({recentLimit:Math.min(Math.max(e,0),50)})},re=async e=>{await O({galleryRoots:e.length>0?e:null})},j=async()=>{let e=await kr(),t=i?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await re([...t,e])},ie=async()=>{let e=c.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await A(e,u),l(``))},M=async()=>{h(!0);try{let e=await kr();if(!e)return;let t=await Or();if(!t)return;await Dr(e.replace(/[\\/][^\\/]+$/,``),_i(e),`file:${t}`)&&(Jr(),s({folder:e,icon:t}))}finally{h(!1)}};return(0,B.jsxs)(Hl,{children:[(0,B.jsxs)(Ul,{children:[(0,B.jsx)(Wl,{children:`Application`}),(0,B.jsxs)(Gl,{children:[(0,B.jsxs)(Zl,{children:[(0,B.jsx)(G,{children:`Version`}),(0,B.jsx)(nu,{children:e?`v${e.version}`:`—`})]}),(0,B.jsxs)(Zl,{children:[(0,B.jsx)(G,{children:`Platform`}),(0,B.jsx)(nu,{children:e?.platform??`—`})]}),(0,B.jsxs)(Zl,{children:[(0,B.jsxs)(Ql,{children:[(0,B.jsx)(G,{children:`Open yafm:// links`}),(0,B.jsxs)(tu,{children:[`Registers this app for yafm:// links, for the current user only. While this is on, the app repairs the entry at every launch.`,C?` ${C}`:``]})]}),(0,B.jsxs)($l,{children:[(0,B.jsx)(ru,{$on:y,children:y?`Active`:`Off`}),(0,B.jsx)(iu,{$on:y,disabled:x,onClick:()=>void k(),title:y?`Stop opening yafm:// links`:`Open yafm:// links with this app`,type:`button`,children:(0,B.jsx)(au,{})})]})]}),(0,B.jsxs)(Zl,{children:[(0,B.jsxs)(Ql,{children:[(0,B.jsx)(G,{children:`Reopen the tabs that were open`}),(0,B.jsx)(tu,{children:`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`})]}),(0,B.jsx)(iu,{$on:i?.restoreTabs??!0,disabled:!i,onClick:()=>void O({restoreTabs:!i?.restoreTabs}),type:`button`,children:(0,B.jsx)(au,{})})]})]})]}),(0,B.jsxs)(Ul,{children:[(0,B.jsx)(Wl,{children:`Files view (global)`}),(0,B.jsxs)(Gl,{children:[(0,B.jsxs)(Zl,{children:[(0,B.jsxs)(Ql,{children:[(0,B.jsx)(G,{children:`Default view`}),(0,B.jsx)(tu,{children:`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`})]}),(0,B.jsx)($l,{children:(0,B.jsxs)(cu,{children:[(0,B.jsx)(lu,{$on:D.mode===`list`,onClick:()=>void O({defaultView:{...D,mode:`list`}}),type:`button`,children:`List`}),(0,B.jsx)(lu,{$on:D.mode===`grid`,onClick:()=>void O({defaultView:{...D,mode:`grid`}}),type:`button`,children:`Grid`})]})})]}),(0,B.jsxs)(Zl,{children:[(0,B.jsxs)(Ql,{children:[(0,B.jsx)(G,{children:`List icon size`}),(0,B.jsx)(tu,{children:`The icon in the list rows.`})]}),(0,B.jsxs)($l,{children:[(0,B.jsx)(uu,{max:48,min:16,onChange:e=>void O({defaultView:{...D,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:D.iconSize}),(0,B.jsxs)(nu,{children:[D.iconSize,`px`]})]})]}),(0,B.jsxs)(Zl,{children:[(0,B.jsxs)(Ql,{children:[(0,B.jsx)(G,{children:`Grid size`}),(0,B.jsx)(tu,{children:`The height of a grid tile; the icon inside follows it.`})]}),(0,B.jsxs)($l,{children:[(0,B.jsx)(uu,{max:260,min:100,onChange:e=>void O({defaultView:{...D,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:D.gridSize}),(0,B.jsxs)(nu,{children:[D.gridSize,`px`]})]})]}),(0,B.jsxs)(Zl,{children:[(0,B.jsxs)(Ql,{children:[(0,B.jsxs)(eu,{children:[(0,B.jsx)(G,{children:`Preview panel under the list`}),(0,B.jsx)(Nl,{})]}),(0,B.jsx)(tu,{children:`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`})]}),(0,B.jsx)(iu,{$on:D.showImages??!0,onClick:()=>void O({defaultView:{...D,showImages:!(D.showImages??!0)}}),type:`button`,children:(0,B.jsx)(au,{})})]}),(0,B.jsx)(Zl,{children:(0,B.jsxs)(Ql,{children:[(0,B.jsxs)(eu,{children:[(0,B.jsx)(G,{children:`Columns`}),(0,B.jsx)(Nl,{})]}),(0,B.jsx)(tu,{children:`Shown in every folder; changing them changes all folders at once.`})]})}),(0,B.jsx)(Zl,{children:(0,B.jsxs)(du,{children:[Jo.map(e=>(0,B.jsxs)(fu,{children:[(0,B.jsx)(`input`,{checked:(D.columns??[]).includes(e.id),onChange:()=>void ee(e.id),type:`checkbox`}),(0,B.jsx)(`span`,{children:e.label})]},e.id)),(0,B.jsxs)(fu,{children:[(0,B.jsx)(`input`,{checked:(D.columns??[]).includes(`linkTarget`),onChange:()=>void ee(`linkTarget`),type:`checkbox`}),(0,B.jsx)(`span`,{children:`Link target after the name`})]})]})})]}),(0,B.jsxs)(vu,{children:[`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar. Anything marked `,(0,B.jsx)(Nl,{}),` always applies to every folder.`]})]}),(0,B.jsxs)(Ul,{children:[(0,B.jsx)(Wl,{children:`Shortcuts`}),(0,B.jsxs)(Gl,{children:[Fl.map(({id:e,label:t,note:n})=>(0,B.jsxs)(Zl,{children:[(0,B.jsxs)(Ql,{children:[(0,B.jsx)(G,{children:t}),(0,B.jsx)(tu,{children:n})]}),(0,B.jsx)($l,{children:(0,B.jsx)(pu,{$listening:T===e,onClick:()=>E(e),type:`button`,children:T===e?`Press a key…`:Vr(te[e])})})]},e)),(0,B.jsxs)(Zl,{children:[(0,B.jsxs)(Ql,{children:[(0,B.jsx)(G,{children:`Reset`}),(0,B.jsx)(tu,{children:`Back to the default combination for every action.`})]}),(0,B.jsx)($l,{children:(0,B.jsx)(mu,{onClick:()=>void O({shortcuts:{...Ir}}),type:`button`,children:`Reset`})})]})]})]}),(0,B.jsxs)(Ul,{children:[(0,B.jsx)(Wl,{children:`Memory`}),(0,B.jsxs)(Gl,{children:[(0,B.jsxs)(ql,{children:[(0,B.jsxs)(Jl,{children:[(0,B.jsx)(G,{children:`Process memory`}),(0,B.jsx)(nu,{children:g?`${pi(g.private)} · ${Kl(g.private,g.available)}`:`—`})]}),(0,B.jsx)(Yl,{children:(0,B.jsx)(Xl,{$ratio:g?g.private/Math.max(g.available,1):0,$tone:gi(g?g.private/Math.max(g.available,1):0)})}),(0,B.jsx)(tu,{children:g?`Committed of ${pi(g.available)} the runtime can use; ${pi(g.workingSet)} is resident. The webview runs in its own process.`:`Reading the current usage…`})]}),(0,B.jsxs)(ql,{children:[(0,B.jsxs)(Jl,{children:[(0,B.jsx)(G,{children:`Managed heap`}),(0,B.jsx)(nu,{children:g?`${pi(g.managed)} · ${Kl(g.managed,g.private)}`:`—`})]}),(0,B.jsx)(Yl,{children:(0,B.jsx)(Xl,{$ratio:g?g.managed/Math.max(g.private,1):0,$tone:`var(--accent-secondary)`})}),(0,B.jsx)(tu,{children:`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`})]}),(0,B.jsxs)(Zl,{children:[(0,B.jsxs)(Ql,{children:[(0,B.jsx)(G,{children:`Free memory`}),(0,B.jsx)(tu,{children:`Compacts the heap and returns unused pages to the system. Always safe.`})]}),(0,B.jsx)($l,{children:(0,B.jsx)(mu,{onClick:()=>void Nr().then(v),type:`button`,children:`Trim now`})})]})]})]}),(0,B.jsxs)(Ul,{children:[(0,B.jsx)(Wl,{children:`Overview`}),(0,B.jsx)(Gl,{children:(0,B.jsxs)(Zl,{children:[(0,B.jsxs)(Ql,{children:[(0,B.jsx)(G,{children:`Recent items`}),(0,B.jsx)(tu,{children:`How many recently opened folders the overview lists. 0 hides the section.`})]}),(0,B.jsx)($l,{children:(0,B.jsx)(ou,{max:50,min:0,onChange:e=>void ne(Number(e.target.value)),type:`number`,value:i?.recentLimit??10})})]})})]}),(0,B.jsxs)(Ul,{children:[(0,B.jsx)(Wl,{children:`Gallery`}),(0,B.jsxs)(Gl,{children:[(i?.galleryRoots??[]).map(e=>(0,B.jsxs)(Zl,{children:[(0,B.jsxs)(Ql,{children:[(0,B.jsx)(G,{children:_i(e)}),(0,B.jsx)(tu,{children:e})]}),(0,B.jsx)($l,{children:(0,B.jsx)(hu,{onClick:()=>void re((i?.galleryRoots??[]).filter(t=>t!==e)),title:`Stop scanning this folder`,type:`button`,children:(0,B.jsx)(Ha,{size:12})})})]},e)),(0,B.jsxs)(Zl,{children:[(0,B.jsxs)(Ql,{children:[(0,B.jsx)(G,{children:`Scan folders`}),(0,B.jsx)(tu,{children:(i?.galleryRoots??[]).length===0?`Nothing added yet, so the gallery reads the Pictures folder.`:`Only these folders are scanned, three levels deep.`})]}),(0,B.jsx)($l,{children:(0,B.jsx)(mu,{onClick:()=>void j(),type:`button`,children:`Choose folder…`})})]})]})]}),(0,B.jsxs)(Ul,{children:[(0,B.jsx)(Wl,{children:`Icons`}),(0,B.jsxs)(Gl,{children:[(0,B.jsxs)(Zl,{children:[(0,B.jsxs)(Ql,{children:[(0,B.jsx)(G,{children:`Use system file icons`}),(0,B.jsx)(tu,{children:`Ask the shell for the icon of each file type instead of the built-in glyphs.`})]}),(0,B.jsx)(iu,{$on:i?.systemIcons??!1,disabled:!i,onClick:()=>void O({systemIcons:!i?.systemIcons}),type:`button`,children:(0,B.jsx)(au,{})})]}),(0,B.jsxs)(Zl,{children:[(0,B.jsxs)(Ql,{children:[(0,B.jsx)(G,{children:`Use custom folder icons`}),(0,B.jsx)(tu,{children:`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`})]}),(0,B.jsx)(iu,{$on:i?.customFolderIcons??!1,disabled:!i,onClick:()=>void O({customFolderIcons:!i?.customFolderIcons}),type:`button`,children:(0,B.jsx)(au,{})})]})]})]}),(0,B.jsxs)(Ul,{children:[(0,B.jsx)(Wl,{children:`Icons by extension`}),(0,B.jsxs)(Gl,{children:[Object.entries(i?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,B.jsxs)(Zl,{children:[(0,B.jsxs)(Ql,{children:[(0,B.jsx)(G,{children:e}),(0,B.jsx)(tu,{children:zl(t)})]}),(0,B.jsxs)($l,{children:[(0,B.jsx)(Bl,{source:t}),(0,B.jsx)(hu,{onClick:()=>void A(e,null),title:`Remove this rule`,type:`button`,children:(0,B.jsx)(Ha,{size:12})})]})]},e)),(0,B.jsxs)(Zl,{children:[(0,B.jsxs)(Ql,{children:[(0,B.jsx)(G,{children:`Add a rule`}),(0,B.jsx)(tu,{children:`Extension and the icon to draw for it.`})]}),(0,B.jsxs)($l,{children:[(0,B.jsx)(ou,{onChange:e=>l(e.target.value),placeholder:`.psd`,spellCheck:!1,value:c}),(0,B.jsxs)(su,{children:[(0,B.jsx)(hu,{onClick:()=>p(e=>!e),title:`Choose the icon`,type:`button`,children:(0,B.jsx)(Bl,{source:u})}),f&&(0,B.jsx)(rc,{allowDefault:!1,onClose:()=>p(!1),onPick:e=>{d(e??`file`),p(!1)},value:u})]}),(0,B.jsx)(hu,{onClick:()=>void ie(),title:`Add the rule`,type:`button`,children:(0,B.jsx)(ja,{size:13})})]})]})]})]}),(0,B.jsxs)(Ul,{children:[(0,B.jsx)(Wl,{children:`Folder icons`}),(0,B.jsxs)(Gl,{children:[(0,B.jsxs)(Zl,{children:[(0,B.jsxs)(Ql,{children:[(0,B.jsx)(G,{children:`Give a folder its own icon`}),(0,B.jsxs)(tu,{children:[`Stored in the folder's parent `,(0,B.jsx)(K,{children:`.yafm-index.db`}),`, so it stays with the files.`]})]}),(0,B.jsxs)($l,{children:[o&&(0,B.jsx)(Vl,{src:o.icon}),(0,B.jsx)(mu,{disabled:m,onClick:()=>void M(),type:`button`,children:m?`Choosing…`:`Choose folder and icon…`})]})]}),o&&(0,B.jsxs)(Zl,{children:[(0,B.jsxs)(Ql,{children:[(0,B.jsx)(G,{children:_i(o.folder)}),(0,B.jsx)(tu,{children:o.folder})]}),(0,B.jsx)($l,{children:(0,B.jsxs)(_u,{children:[(0,B.jsx)(Va,{size:11}),` Saved`]})})]})]})]}),(0,B.jsxs)(Ul,{children:[(0,B.jsx)(Wl,{children:`Folder index`}),(0,B.jsx)(Gl,{children:(0,B.jsxs)(Zl,{children:[(0,B.jsxs)(Ql,{children:[(0,B.jsxs)(G,{children:[`Keep a `,(0,B.jsx)(K,{children:`.yafm-index.db`}),` in every folder`]}),(0,B.jsx)(tu,{children:`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`})]}),(0,B.jsx)(iu,{$on:i?.writeDirectoryIndex??!0,disabled:!i,onClick:()=>void O({writeDirectoryIndex:!i?.writeDirectoryIndex}),type:`button`,children:(0,B.jsx)(au,{})})]})}),!(i?.writeDirectoryIndex??!0)&&(0,B.jsx)(yu,{children:Rl(e?.platform)})]}),(0,B.jsxs)(Ul,{children:[(0,B.jsx)(Wl,{children:`Files`}),(0,B.jsxs)(Gl,{children:[(0,B.jsxs)(Zl,{children:[(0,B.jsx)(G,{children:`Hidden items`}),(0,B.jsx)(nu,{children:Ll(n?.showHidden)})]}),(0,B.jsxs)(Zl,{children:[(0,B.jsx)(G,{children:`Protected operating system files`}),(0,B.jsx)(nu,{children:Ll(n?.showSystem)})]})]}),(0,B.jsx)(vu,{children:`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`})]})]})}function Ll(e){return e===void 0?`Reading…`:e?`Shown`:`Hidden`}function Rl(e){return`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in ${e===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:e===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`}function zl(e){return e.startsWith(`file:`)?e.slice(5):`built-in: ${e}`}function Bl({source:e}){let t=$r(e.startsWith(`file:`)?e.slice(5):null);return(0,B.jsx)(gu,{children:t?(0,B.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,B.jsx)(qo,{name:e,size:16})})}function Vl({src:e}){let t=$r(e);return(0,B.jsx)(gu,{children:t&&(0,B.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}var Hl=R.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 26px 26px 34px;
    max-width: 860px;
`,Ul=R.section`
    display: flex;
    flex-direction: column;
    gap: 10px;

    & + & {
        margin-top: 30px;
    }
`,Wl=R.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,Gl=R.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow: hidden;
`;function Kl(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}var ql=R.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,Jl=R.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,Yl=R.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Xl=R.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,Zl=R.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 13px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,Ql=R.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,$l=R.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,G=R.span`
    font-size: 13px;
    color: var(--text-secondary);
`,eu=R.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,tu=R.span`
    font-size: 11px;
    color: var(--text-muted);
`,nu=R.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
`,ru=R.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,K=R.code`
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-secondary);
`,iu=R.button`
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
`,au=R.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,ou=R.input`
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
`,su=R.span`
    position: relative;
    display: inline-flex;
`,cu=R.div`
    display: flex;
    gap: 4px;
`,lu=R.button`
    padding: 5px 14px;
    border: 1px solid ${({$on:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$on:e})=>e?`rgba(59, 130, 246, 0.18)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font-size: 11px;
    cursor: pointer;
`,uu=R.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,du=R.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,fu=R.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,pu=R.button`
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
`,mu=R.button`
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
`,hu=R.button`
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
`,gu=R.span`
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
`,_u=R.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,vu=R.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,yu=R.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,bu=100;function xu(){let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)(0),[i,a]=(0,_.useState)(!0),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(!1),u=(0,_.useRef)(!1),d=(0,_.useRef)(null),f=(0,_.useCallback)(async e=>{a(!0),s(null);try{let n=await gr(0,bu,e);t(n.entries),r(n.total)}catch(e){s(e instanceof Error?e.message:String(e))}finally{a(!1)}},[]);(0,_.useEffect)(()=>{f(!1)},[f]);let p=(0,_.useCallback)(async()=>{if(!u.current){u.current=!0;try{let n=await gr(e.length,bu,!1);(0,_.startTransition)(()=>{t(e=>[...e,...n.entries]),r(n.total)})}catch{}finally{u.current=!1}}},[e.length]);(0,_.useEffect)(()=>{let t=d.current;if(!t)return;let r=new IntersectionObserver(t=>{t.some(e=>e.isIntersecting)&&e.length<n&&p()},{rootMargin:`800px`});return r.observe(t),()=>r.disconnect()},[e.length,n,p]);let m=(0,_.useMemo)(()=>wu(e),[e]);return(0,B.jsxs)(Eu,{children:[(0,B.jsxs)(Du,{children:[(0,B.jsxs)(Ou,{children:[(0,B.jsx)(`span`,{children:`Gallery`}),(0,B.jsx)(ku,{children:i?`scanning…`:`${e.length} of ${n} pictures`})]}),(0,B.jsx)(Au,{onClick:()=>{l(!0),f(!0).finally(()=>l(!1))},title:`Scan the folders again`,type:`button`,children:(0,B.jsx)(ju,{$spinning:c,children:(0,B.jsx)(Aa,{size:14})})})]}),o&&(0,B.jsx)(Hu,{children:o}),!o&&!i&&n===0&&(0,B.jsx)(Hu,{children:`No pictures found.`}),(0,B.jsxs)(Mu,{children:[m.map(e=>(0,B.jsxs)(Nu,{children:[(0,B.jsx)(Pu,{children:e.label}),(0,B.jsx)(Fu,{children:e.entries.map(e=>(0,B.jsx)(Su,{entry:e},e.path))})]},e.label)),(0,B.jsx)(Vu,{ref:d})]})]})}var Su=(0,_.memo)(function({entry:e}){let t=ri(e.path,128,e.modified),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(!1);return(0,B.jsxs)(Iu,{title:e.name,children:[(!t||!n||i)&&(0,B.jsx)(Lu,{}),t&&!i&&(0,B.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>a(!0),onLoad:()=>r(!0),src:t}),(0,B.jsxs)(Ru,{children:[(0,B.jsx)(zu,{children:e.name}),(0,B.jsx)(Bu,{children:`${Cu(e.name)} · ${pi(e.size)}`})]})]})});function Cu(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toUpperCase():`FILE`}function wu(e){let t=[];for(let n of e){let e=Tu(n.modified),r=t[t.length-1];r?.label===e?r.entries.push(n):t.push({label:e,entries:[n]})}return t}function Tu(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(mi(),{weekday:`long`}):t.toLocaleDateString(mi(),{year:`numeric`,month:`long`,day:`numeric`})}var Eu=R.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Du=R.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,Ou=R.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,ku=R.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Au=R.button`
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
`,ju=R.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,Mu=R.div`
    flex: 1;
    min-height: 0;
    padding: 14px 22px 30px;
    overflow-y: auto;
`,Nu=R.section`
    & + & {
        margin-top: 28px;
    }
`,Pu=R.h2`
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
`,Fu=R.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    /* Explicit row height: an auto row collapses to nothing in Chromium when the tile is a shrinking
       flex box, which once left the gallery as a wall of empty strips. */
    grid-auto-rows: 124px;
    gap: 12px;
    align-content: start;
`,Iu=R.div`
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
`,Lu=R.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    background:
            radial-gradient(circle at 50% 45%, rgba(99, 102, 241, 0.12), transparent 60%),
            rgba(15, 23, 42, 0.6);
`,Ru=R.span`
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
`,zu=R.span`
    overflow: hidden;
    font-size: 11px;
    color: #e5e7eb;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Bu=R.span`
    font-family: var(--font-mono);
    font-size: 10px;
    color: #9ca3af;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Vu=R.div`
    height: 1px;
`,Hu=R.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function Uu({places:e,drives:t,recent:n,recentLimit:r,currentPath:i,activeKind:a,homePath:o=``,version:s=0,historyVersion:c=0,onNavigate:l,onOpenView:u}){let[d,f]=(0,_.useState)([]),[p,m]=(0,_.useState)(null),h=Ci();(0,_.useEffect)(()=>{wr().then(e=>{m(e),f(ko(e).filter(e=>e.pinned))},()=>{m(null),f([])})},[s]);let g=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>Yu(e.path,t));return{name:p?.placeNames?.[t]??n?.name??(_i(t)||t),path:t,kind:`folder`,icon:n?.icon??p?.placeIcons?.[t]??null}}),v=a===`files`;return(0,B.jsxs)(Xu,{children:[(0,B.jsxs)(Zu,{children:[(0,B.jsxs)(Y,{$active:a===`home`,onClick:()=>u(`home`),title:`Overview`,type:`button`,children:[(0,B.jsx)(io,{}),(0,B.jsx)(ed,{children:`Overview`})]}),(0,B.jsxs)(Y,{$active:a===`recycle`,onClick:()=>u(`recycle`),title:`Recycle Bin`,type:`button`,children:[(0,B.jsx)(Ba,{}),(0,B.jsx)(ed,{children:`Recycle Bin`})]}),(0,B.jsxs)(Y,{$active:a===`gallery`,onClick:()=>u(`gallery`),title:`Gallery`,type:`button`,children:[(0,B.jsx)(Ka,{}),(0,B.jsx)(ed,{children:`Gallery`})]})]}),d.map(e=>(0,B.jsxs)(q,{children:[(0,B.jsxs)(Y,{as:`div`,$active:!1,children:[(0,B.jsx)(X,{children:(0,B.jsx)(jo,{panel:e,size:16})}),(0,B.jsx)(ed,{children:e.title})]}),(0,B.jsx)($u,{children:(0,B.jsxs)(J,{children:[e.kind===`quick`&&g(e).map(e=>(0,B.jsxs)(Y,{$active:v&&Yu(i,e.path),onClick:t=>l(e.path,zr(t)),title:e.path,type:`button`,children:[(0,B.jsx)(Mo,{place:e}),(0,B.jsx)(ed,{children:e.name})]},e.path)),e.kind===`recent`&&n.slice(0,r).map(e=>{let t=wi(h,e.path);return(0,B.jsxs)(Y,{$active:v&&Yu(i,e.path),onClick:t=>e.isDirectory?l(e.path,zr(t)):void rr(e.path),title:e.path,type:`button`,children:[t&&h.useIcons?(0,B.jsx)(Mo,{place:t}):(0,B.jsx)(nc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,B.jsx)(ed,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,B.jsx)(Ku,{historyVersion:c,onNavigate:l}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,B.jsxs)(Y,{$active:v&&Yu(i,e.name),onClick:t=>l(e.name,zr(t)),title:e.name,type:`button`,children:[(0,B.jsx)(Da,{}),(0,B.jsxs)(ed,{children:[bi(e),(0,B.jsxs)(td,{children:[pi(e.freeSpace),` free`]}),(0,B.jsx)(nd,{children:(0,B.jsx)(rd,{$used:t,$tone:gi(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,B.jsx)(qu,{onNavigate:l,path:e.path||o})]})})]},e.id)),(0,B.jsx)(Qu,{children:(0,B.jsxs)(Y,{$active:a===`settings`,onClick:()=>u(`settings`),title:`Settings`,type:`button`,children:[(0,B.jsx)(Fa,{}),(0,B.jsx)(ed,{children:`Settings`})]})})]})}var Wu=10,Gu=40;function Ku({historyVersion:e=0,onNavigate:t}){let[n,r]=(0,_.useState)(null),i=Ci();return(0,_.useEffect)(()=>{vr().then(r,()=>r([]))},[e]),(n??[]).slice(0,15).map(e=>{let n=wi(i,e.path);return(0,B.jsxs)(Y,{$active:!1,onClick:n=>t(e.path,zr(n)),title:`${e.count} ${e.count===1?`visit`:`visits`} · ${e.path}`,type:`button`,children:[n&&i.useIcons?(0,B.jsx)(Mo,{place:n}):(0,B.jsx)(nc,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,B.jsx)(ed,{children:n?.name||e.name})]},e.path)})}function qu({path:e,onNavigate:t}){let[n,r]=(0,_.useState)(null);(0,_.useEffect)(()=>{e&&(r(null),ir(e,!1).then(r,()=>r(null)))},[e]),(0,_.useEffect)(()=>{if(e&&z.available)return z.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&Yu(n.data.path,e)&&ir(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,Wu),o=i.filter(e=>!e.isDirectory).slice(0,Gu);return(0,B.jsxs)(B.Fragment,{children:[a.map(e=>(0,B.jsx)(Ju,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,B.jsx)(Ju,{entry:e,onNavigate:t},e.fullPath))]})}function Ju({entry:e,onNavigate:t}){let n=Ci(),r=wi(n,e.fullPath);return(0,B.jsxs)(Y,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,zr(n)):void rr(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,B.jsx)(Mo,{place:r}):(0,B.jsx)(nc,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,B.jsx)(ed,{children:r?.name||e.name})]})}function Yu(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}var Xu=R.aside`
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

    &:not(:hover) ${()=>td},
    &:not(:hover) ${()=>nd} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,Zu=R.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,Qu=R(Zu)`
    margin-top: auto;
`,q=R.div`
    display: flex;
    flex-direction: column;
`,$u=R.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${Xu}:hover ${q}:hover > & {
        grid-template-rows: 1fr;
    }
`,J=R.div`
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
`,Y=R.button`
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
`,X=R.span`
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
`,ed=R.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,td=R.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,nd=R.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,rd=R.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`;function id({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let[o,s]=(0,_.useState)(!1),c=(0,_.useRef)(null);(0,_.useEffect)(()=>{if(!o)return;let e=e=>{c.current?.contains(e.target)||s(!1)},t=e=>{e.key===`Escape`&&s(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]),(0,_.useEffect)(()=>{a&&s(!1)},[a]);let l=e.columns,u=e=>{let t=new Set(l);t.has(e)?t.delete(e):t.add(e);let r=Jo.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,B.jsxs)(ad,{ref:c,children:[(0,B.jsx)(od,{disabled:a,onClick:()=>s(e=>!e),title:`View`,type:`button`,children:e.mode===`grid`?(0,B.jsx)(Ra,{size:14}):(0,B.jsx)(La,{size:14})}),o&&(0,B.jsxs)(sd,{children:[(0,B.jsx)(cd,{children:`View`}),(0,B.jsxs)(ld,{children:[(0,B.jsxs)(ud,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,B.jsx)(La,{size:12}),` List`]}),(0,B.jsxs)(ud,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,B.jsx)(Ra,{size:12}),` Grid`]})]}),(0,B.jsx)(cd,{children:`List icon size`}),(0,B.jsxs)(dd,{children:[(0,B.jsx)(`input`,{"aria-label":`List icon size`,max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,B.jsxs)(fd,{children:[e.iconSize,`px`]})]}),(0,B.jsx)(cd,{children:`Grid size`}),(0,B.jsxs)(dd,{children:[(0,B.jsx)(`input`,{"aria-label":`Grid size`,max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,B.jsxs)(fd,{children:[e.gridSize,`px`]})]}),(0,B.jsxs)(cd,{children:[`Columns`,(0,B.jsx)(Nl,{})]}),Jo.map(e=>(0,B.jsxs)(pd,{children:[(0,B.jsx)(`input`,{checked:l.includes(e.id),onChange:()=>u(e.id),type:`checkbox`}),(0,B.jsx)(`span`,{children:e.label})]},e.id)),(0,B.jsxs)(pd,{children:[(0,B.jsx)(`input`,{checked:l.includes(`linkTarget`),onChange:()=>u(`linkTarget`),type:`checkbox`}),(0,B.jsx)(`span`,{children:`Link target after the name`})]}),(0,B.jsxs)(cd,{children:[`Preview panel`,(0,B.jsx)(Nl,{})]}),(0,B.jsxs)(pd,{children:[(0,B.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,B.jsx)(`span`,{children:`Preview under the list`})]})]})]})}var ad=R.div`
    position: relative;
    display: flex;
    height: 100%;
`,od=R.button`
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
`,sd=R.div`
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
`,cd=R.div`
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
`,ld=R.div`
    display: flex;
    gap: 4px;
`,ud=R.button`
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
`,dd=R.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,fd=R.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,pd=R.label`
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
`,md=e=>(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,B.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),hd=e=>(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,B.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),gd=e=>(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,B.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),_d=e=>(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,B.jsx)(`path`,{d:`M2 5h6`})}),vd=e=>(0,B.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,B.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),yd=e=>(0,B.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,B.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,B.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function bd({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,view:o,onViewChange:s,onColumns:c,showImages:l,onShowImages:u}){let d=Yn(),f=Xn(),[p,m]=(0,_.useState)({left:!1,right:!1}),[h,g]=(0,_.useState)(null),v=(0,_.useRef)(null),y=(0,_.useRef)(null),b=(0,_.useCallback)(()=>{let e=v.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;m(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,_.useEffect)(()=>{b();let e=v.current;if(!e)return;let t=new ResizeObserver(b);return t.observe(e),()=>t.disconnect()},[b,e.length]),(0,_.useEffect)(()=>{y.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let x=e=>v.current?.scrollBy({left:e,behavior:`smooth`});return(0,B.jsxs)(Cd,{children:[(0,B.jsx)(wd,{children:(0,B.jsx)(Ua,{size:19})}),(0,B.jsxs)(Td,{children:[p.left&&(0,B.jsx)(Dd,{onClick:()=>x(-180),title:`Scroll tabs left`,type:`button`,children:(0,B.jsx)(md,{})}),(0,B.jsx)(Ed,{onScroll:b,onWheel:e=>{let t=v.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:v,children:e.map(e=>(0,B.jsxs)(Od,{$active:e.id===t,$dragging:h===e.id,draggable:!0,onDragEnd:()=>g(null),onDragOver:e=>{h&&e.preventDefault()},onDragStart:()=>g(e.id),onDrop:t=>{t.preventDefault(),h&&a(h,e.id),g(null)},onClick:()=>n(e.id),ref:e.id===t?y:void 0,title:e.path||e.title,type:`button`,children:[(0,B.jsx)(xd,{tab:e}),(0,B.jsx)(kd,{children:e.title}),(0,B.jsx)(Ad,{onClick:t=>{t.stopPropagation(),r(e.id)},title:`Close tab`,children:(0,B.jsx)(gd,{})})]},e.id))}),p.right&&(0,B.jsx)(Dd,{onClick:()=>x(180),title:`Scroll tabs right`,type:`button`,children:(0,B.jsx)(hd,{})}),(0,B.jsx)(jd,{onClick:i,title:`New tab`,type:`button`,children:(0,B.jsx)(ja,{size:13})})]}),(0,B.jsx)(Md,{...f}),(0,B.jsxs)(Nd,{children:[(0,B.jsx)(id,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:s,onColumns:c,onShowImages:u,showImages:l,view:o}),(0,B.jsx)(Pd,{onClick:d.minimize,title:`Minimize`,type:`button`,children:(0,B.jsx)(_d,{})}),(0,B.jsx)(Pd,{onClick:d.toggleMaximize,title:d.maximized?`Restore`:`Maximize`,type:`button`,children:d.maximized?(0,B.jsx)(yd,{}):(0,B.jsx)(vd,{})}),(0,B.jsx)(Fd,{onClick:d.close,title:`Close`,type:`button`,children:(0,B.jsx)(gd,{})})]})]})}function xd({tab:e}){switch(e.kind){case`home`:return(0,B.jsx)(wa,{size:13});case`settings`:return(0,B.jsx)(Fa,{size:13});case`recycle`:return(0,B.jsx)(Ba,{size:13});default:return(0,B.jsx)(Sd,{place:e.place})}}function Sd({place:e}){return e?(0,B.jsx)(Mo,{place:e,size:13}):(0,B.jsx)(Ta,{size:13})}var Cd=R.header`
    display: flex;
    align-items: stretch;
    height: 38px;
    flex-shrink: 0;
    background: rgba(7, 11, 18, 0.95);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,wd=R.span`
    display: grid;
    place-items: center;
    align-self: center;
    width: 22px;
    height: 22px;
    margin-left: 12px;
    flex-shrink: 0;
`,Td=R.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 4px;
`,Ed=R.div`
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
`,Dd=R.button`
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
`,Od=R.button`
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
`,kd=R.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ad=R.span`
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
`,jd=R.button`
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
`,Md=R.div`
    flex: 1;
    min-width: 28px;
`,Nd=R.div`
    display: flex;
    flex-shrink: 0;
`,Pd=R.button`
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
`,Fd=R(Pd)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`,Id={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`},Ld=`yafm://`,Rd={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`},zd=0;function Bd(e){return`${Ld}${e===`home`?`overview`:e}`}function Vd(e){return e.toLowerCase().startsWith(Ld)?Rd[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Hd(e){let t=e.trim();if(t.length===0)return null;if(!t.toLowerCase().startsWith(Ld))return t;let n=Rd[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?Bd(n):null}function Ud(e){return e.history[e.index]??Bd(`home`)}function Wd(e){return Vd(Ud(e))??`files`}function Gd(e){let t=Ud(e);return Vd(t)?``:e.listing?.path||t}function Kd(e=Bd(`home`)){return zd+=1,{id:`tab-${zd}`,listing:null,loading:!Vd(e),error:null,history:[e],index:0,fresh:!0,view:null}}function qd(e){return e instanceof Error?e.message:String(e)}function Jd(e,t){let n=e=>e.replace(/[\\/]+/g,`\\`).replace(/\\$/,``).toLowerCase();return n(e)===n(t)}function Yd(e){let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0);return`${e.entries.length} items · ${pi(t)}`}function Xd(){let[e,t]=(0,_.useState)(()=>[Kd()]),[n,r]=(0,_.useState)(()=>e[0].id),[i,a]=(0,_.useState)([]),[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)(null),u=Zn(),[d,f]=(0,_.useState)(ii),[p,m]=(0,_.useState)(0),[h,g]=(0,_.useState)(0),[v,y]=(0,_.useState)([]),[b,x]=(0,_.useState)(10),[S,C]=(0,_.useState)(null),[w,T]=(0,_.useState)(0),[E,D]=(0,_.useState)(Ir),[O,ee]=(0,_.useState)(0),k=e.find(e=>e.id===n)??e[0],A=Wd(k),te=Ud(k),ne=S?.defaultView??tr,re={mode:k.view?.mode??ne.mode,iconSize:k.view?.iconSize||ne.iconSize||er.iconSize,gridSize:k.view?.gridSize||ne.gridSize||er.gridSize,sort:k.view?.sort??er.sort,sortDescending:k.view?.sortDescending??er.sortDescending,columns:ne.columns??tr.columns??[]},j=(0,_.useMemo)(()=>{let e={},t=ko(S),n={};for(let[e,t]of Object.entries(S?.placeNames??{}))n[vi(e)]=t;for(let t of i)e[vi(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=vi(t),a=i.find(e=>vi(e.path)===r);e[r]={name:n[r]??a?.name??(_i(t)||t),path:t,kind:`folder`,icon:a?.icon??S?.placeIcons?.[t]??null}}return e},[i,S]),ie=(0,_.useMemo)(()=>({places:j,useIcons:S?.systemIcons===!1}),[j,S?.systemIcons]),M=S?.defaultView?.showImages??!0,ae=S?.defaultView?.imageStripHeight??tr.imageStripHeight,oe=A===`home`?(0,B.jsx)(io,{size:13}):A===`settings`?(0,B.jsx)(Fa,{size:13}):A===`recycle`?(0,B.jsx)(Ba,{size:13}):A===`gallery`?(0,B.jsx)(Ka,{size:13}):void 0,se=d.open&&d.query.length>0,ce=(0,_.useMemo)(()=>se&&k.listing?k.listing.entries.filter(e=>si(Ti(ie,e.fullPath,e.name),d)).map(e=>e.fullPath):[],[se,d,k.listing,ie]);(0,_.useEffect)(()=>{m(0)},[d.query,d.matchCase,d.regex,k.listing?.path]);let le=ce.length===0?-1:Math.min(p,ce.length-1),ue=(0,_.useCallback)(()=>{f(e=>({...e,open:!1,query:``})),m(0)},[]),de=(0,_.useCallback)(()=>{f(e=>({...e,open:!0})),g(e=>e+1)},[]),fe=(0,_.useCallback)(e=>{f(t=>({...t,open:!0,query:t.open?t.query+e:e})),g(e=>e+1)},[]),pe=(0,_.useCallback)(e=>{m(t=>ce.length===0?0:(Math.min(t,ce.length-1)+e+ce.length)%ce.length)},[ce.length]),N=(0,_.useRef)({tabs:e,activeId:n});N.current={tabs:e,activeId:n};let me=(0,_.useRef)(S);me.current=S;let he=(0,_.useRef)(!1),ge=(0,_.useRef)([]),P=(0,_.useCallback)((e,n)=>{t(t=>t.map(t=>t.id===e?{...t,...n(t)}:t))},[]),F=(0,_.useRef)(new Map),_e=(0,_.useCallback)(e=>{let t=(F.current.get(e)??0)+1;return F.current.set(e,t),()=>F.current.get(e)===t},[]),ve=(0,_.useCallback)(async(e,t,n)=>{try{let r=await sr(t);n()&&r.listing&&P(e,()=>({listing:r.listing,view:r.listing.view??null}))}catch{}},[P]),ye=(0,_.useCallback)(async(e,t,n=!1)=>{let r=_e(e);ue();let i=!n||!N.current.tabs.find(t=>t.id===e)?.listing;P(e,e=>({listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh}));try{if(i&&(await ve(e,t,r),!r()))return;let a=await ir(t);if(!r())return;P(e,e=>({listing:a,view:a.view??null,loading:!1,fresh:!1,history:[...e.history.slice(0,e.index+1),a.path],index:e.index+1})),n||yr(a.path).then(()=>T(e=>e+1))}catch(t){if(!r())return;P(e,()=>({loading:!1,error:qd(t)}))}},[_e,P,ue,ve]),be=(0,_.useCallback)((e,t)=>{let n=Hd(t);n&&(Vd(n)?(ue(),_e(e),P(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):ye(e,n))},[_e,ye,P,ue]),xe=(0,_.useCallback)(async(e,t,n)=>{if(ue(),Vd(t)){_e(e),P(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=_e(e);P(e,()=>({index:n,listing:null,loading:!0,error:null}));try{if(await ve(e,t,r),!r())return;let n=await ir(t);if(!r())return;P(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(t){if(!r())return;P(e,()=>({loading:!1,error:qd(t)}))}},[_e,P,ue,ve]),I=(0,_.useCallback)(e=>{let n=Kd(e??Bd(`home`));t(e=>[...e,n]),r(n.id),e&&ye(n.id,e)},[ye]),Se=(0,_.useCallback)(e=>{be(N.current.activeId,Bd(e))},[be]),Ce=(0,_.useCallback)(e=>{let{tabs:n,activeId:i}=N.current;if(n.length===1){let e=Kd();t([e]),r(e.id);return}let a=n.findIndex(t=>t.id===e),o=n.filter(t=>t.id!==e);t(o),i===e&&r(o[Math.min(a,o.length-1)].id)},[]),we=(0,_.useCallback)((e,t=!1)=>{t?I(e):be(N.current.activeId,e??Bd(`home`))},[be,I]),Te=(0,_.useCallback)(()=>{let{tabs:e,activeId:t}=N.current,n=e.find(e=>e.id===t);n&&n.index>0&&xe(n.id,n.history[n.index-1],n.index-1)},[xe]),Ee=(0,_.useCallback)(()=>{let{tabs:e,activeId:t}=N.current,n=e.find(e=>e.id===t);n&&n.index<n.history.length-1&&xe(n.id,n.history[n.index+1],n.index+1)},[xe]),De=(0,_.useCallback)(()=>{let{tabs:e,activeId:t}=N.current,n=e.find(e=>e.id===t);n&&Wd(n)===`files`&&n.listing?.parent&&we(n.listing.parent)},[we]),Oe=(0,_.useRef)(null),ke=(0,_.useCallback)(e=>{let{tabs:t,activeId:n}=N.current,r=t.find(e=>e.id===n);if(!r||Wd(r)!==`files`)return;let i=Gd(r),a=me.current?.defaultView??tr,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||er.iconSize,gridSize:r.view?.gridSize||a.gridSize||er.gridSize,sort:r.view?.sort??er.sort,sortDescending:r.view?.sortDescending??er.sortDescending,...e};P(r.id,()=>({view:o})),Oe.current!==null&&window.clearTimeout(Oe.current),Oe.current=window.setTimeout(()=>{Oe.current=null,ar(i,o)},250)},[P]),Ae=(0,_.useCallback)(e=>{let t=me.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??tr,columns:e}};C(n),Tr(n)},[]),je=(0,_.useCallback)(e=>{let t=me.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??tr,showImages:e}};C(n),Tr(n)},[]),Me=(0,_.useCallback)(e=>{let t=me.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??tr,imageStripHeight:e}};C(n),Tr(n)},[]),Ne=(0,_.useCallback)((e,t,n)=>{let{tabs:r,activeId:i}=N.current,a=r.find(e=>e.id===i);if(!a||Wd(a)!==`files`||!a.listing)return;let o=Gd(a),s=n?{...a.listing.tagColors,...n}:a.listing.tagColors,c=[...new Set([...a.listing.allTags,...t,...Object.keys(s)])].sort((e,t)=>e.localeCompare(t));P(a.id,n=>n.listing?{listing:{...n.listing,tags:{...n.listing.tags,[e]:t},tagColors:s,allTags:c}}:n),or(o,e,t,n)},[P]),Pe=(0,_.useCallback)(e=>{ke({sort:e,sortDescending:re.sort===e&&!re.sortDescending})},[ke,re.sort,re.sortDescending]),Fe=(0,_.useCallback)((e,n)=>{t(t=>{let r=t.findIndex(t=>t.id===e),i=t.findIndex(e=>e.id===n);if(r<0||i<0||r===i)return t;let a=[...t],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),Ie=(0,_.useCallback)(()=>{cr().then(a,()=>a([]))},[]),Le=(0,_.useCallback)(e=>{let n=(e.openTabs??[]).map(Hd).filter(e=>e!==null);if(n.length===0)return!1;let i=n.map(e=>({...Kd(e),fresh:!1})),a=Math.min(Math.max(e.activeTab??0,0),i.length-1);t(i),r(i[a].id);for(let e of i)Wd(e)===`files`&&ye(e.id,Gd(e),!0);return!0},[ye]),Re=(0,_.useCallback)(e=>{let t=ge.current;if(ge.current=[],t.length===0)return;let{tabs:n}=N.current;if(!e&&n.length===1&&n[0].fresh){be(n[0].id,t[0]);for(let e of t.slice(1))I(e)}else for(let e of t)I(e)},[I,be]),ze=(0,_.useCallback)(()=>{wr().then(e=>{C(e),x(e.recentLimit);let t={...Ir,...e.shortcuts};D(t),Rr(t.openInNewTab),ee(e=>e+1),he.current||(he.current=!0,Re(e.restoreTabs&&Le(e)))},()=>{x(10),he.current=!0,Re(!1)})},[Re,Le]),Be=(0,_.useCallback)(()=>{_r().then(y,()=>y([]))},[]),Ve=(0,_.useCallback)(()=>{lr().then(s,()=>s([]))},[]),He=e.map(Ud),Ue=He.join(`
`),We=Math.max(e.findIndex(e=>e.id===n),0);(0,_.useEffect)(()=>{if(!S?.restoreTabs)return;let e=setTimeout(()=>void Er(He,We),700);return()=>clearTimeout(e)},[Ue,We,S?.restoreTabs]),(0,_.useEffect)(()=>{let{tabs:e,activeId:t}=N.current,n=e.find(e=>e.id===t);n&&Wd(n)===`files`&&ye(n.id,void 0,!0),Ie(),ze(),Ve(),jr().then(l,()=>l(null))},[ye,Ie,ze,Ve]),(0,_.useEffect)(()=>{let e=setInterval(Ve,3e4);return()=>clearInterval(e)},[Ve]),(0,_.useEffect)(()=>{A===`home`&&(Be(),Ve())},[A,k.id,Be,Ve]),(0,_.useEffect)(()=>{if(!z.available)return;let e=z.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=N.current,i=t.data.startup===!0;i&&!he.current?ge.current.push(n):i&&r.length===1&&r[0].fresh?be(r[0].id,n):I(n)});return z.send({type:`app.ready`}),e},[be,I]),(0,_.useEffect)(()=>{if(z.available)return z.on(e=>{let n=e;if(n.type!==`fs.sizes`||typeof n.data?.path!=`string`||!n.data.sizes)return;let{path:r,sizes:i}=n.data;t(e=>e.map(e=>e.listing?.path===r?{...e,listing:{...e.listing,folderSizes:{...e.listing.folderSizes,...i}}}:e))})},[]),(0,_.useEffect)(()=>{if(z.available)return z.on(e=>{let n=e;if(n.type!==`fs.counts`||typeof n.data?.path!=`string`||!n.data.counts)return;let{path:r,counts:i}=n.data;t(e=>e.map(e=>e.listing?.path===r?{...e,listing:{...e.listing,counts:{...e.listing.counts,...i}}}:e))})},[]),(0,_.useEffect)(()=>{let e=e=>{if(Ur(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),Te();return}if(e.key===`BrowserForward`){e.preventDefault(),Ee();return}if(e.key===`Escape`&&d.open){e.preventDefault(),ue();return}let t=Br(e);t===E.closeTab?(e.preventDefault(),Ce(N.current.activeId)):t===E.newTab?(e.preventDefault(),I()):t===E.goBack?(e.preventDefault(),Te()):t===E.goForward?(e.preventDefault(),Ee()):t===E.goUp?(e.preventDefault(),De()):t===E.find?(e.preventDefault(),de()):A!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),fe(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[E,A,d.open,Ce,I,Te,Ee,De,de,ue,fe]),(0,_.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),Te()):e.button===4&&(e.preventDefault(),Ee())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[Te,Ee]),(0,_.useEffect)(()=>{z.available&&A===`files`&&z.send({type:`fs.watch`,payload:{paths:[te]}})},[A,te]),(0,_.useEffect)(()=>{if(z.available)return z.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let{tabs:n,activeId:r}=N.current,i=n.find(e=>e.id===r);i&&Wd(i)===`files`&&Jd(Gd(i),t.data.path)&&ir(t.data.path,!1).then(e=>P(i.id,()=>({listing:e})),()=>void 0)})},[P]);let Ge=k.index>0,Ke=k.index<k.history.length-1;return(0,B.jsx)(Si,{value:ie,children:(0,B.jsxs)(Zd,{$rounded:u,children:[(0,B.jsx)(bd,{activeId:k.id,onClose:Ce,onNewTab:()=>I(),onReorder:Fe,onSelect:r,onViewChange:ke,onColumns:Ae,onShowImages:je,showImages:M,view:re,tabs:e.map(e=>{let t=Wd(e),n=Gd(e);return{id:e.id,kind:t,path:n,place:t===`files`?wi(ie,n):void 0,title:t===`files`?Ti(ie,n,_i(n)||`Files`):Id[t]}})}),(0,B.jsxs)(Qd,{children:[(0,B.jsx)(Uu,{activeKind:A,currentPath:A===`files`?te:``,drives:o,historyVersion:w,onNavigate:e=>we(e),onOpenView:Se,homePath:i.find(e=>e.kind===`home`)?.path??``,places:i,recent:v,recentLimit:b,version:O}),(0,B.jsxs)($d,{children:[(0,B.jsxs)(ef,{children:[(0,B.jsx)(tf,{disabled:!Ge,onClick:Te,title:`Back`,type:`button`,children:(0,B.jsx)(Ma,{})}),(0,B.jsx)(tf,{disabled:!Ke,onClick:Ee,title:`Forward`,type:`button`,children:(0,B.jsx)(Na,{})}),(0,B.jsx)(tf,{disabled:A!==`files`||!k.listing?.parent,onClick:()=>k.listing?.parent&&we(k.listing.parent),title:`Up one level`,type:`button`,children:(0,B.jsx)(ka,{})}),(0,B.jsx)(Xc,{icon:oe,label:A===`files`?void 0:Id[A],onNavigate:we,path:A===`files`?Gd(k):te})]}),A===`files`?(0,B.jsxs)(nf,{children:[(0,B.jsx)(Zo,{error:k.error,find:{...d,currentPath:le<0?null:ce[le]},listing:k.listing,imageStripHeight:ae,loading:k.loading,onImageStripHeight:Me,onOpen:we,onSetTags:Ne,onSort:Pe,showImages:M,view:re}),d.open&&(0,B.jsx)(Ys,{current:le,focusToken:h,matchCase:d.matchCase,mode:d.mode,onClose:ue,onMatchCase:()=>f(e=>({...e,matchCase:!e.matchCase})),onMode:()=>f(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>pe(1),onPrevious:()=>pe(-1),onQuery:e=>f(t=>({...t,query:e})),onRegex:()=>f(e=>({...e,regex:!e.regex})),query:d.query,regex:d.regex,total:ce.length})]}):A===`home`?(0,B.jsx)(Gc,{drives:o,historyVersion:w,homePath:i.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:Ve,onHistoryChanged:()=>T(e=>e+1),onOpen:we,onLayoutChanged:ze,onPlacesChanged:a,onRecentCleared:Be,places:i,recent:v,recentLimit:b}):A===`settings`?(0,B.jsx)(Il,{appInfo:c,onSettingsChanged:ze}):A===`gallery`?(0,B.jsx)(xu,{}):(0,B.jsx)(sl,{}),(0,B.jsxs)(rf,{children:[(0,B.jsx)(`span`,{children:A===`files`&&k.listing?Yd(k.listing):``}),(0,B.jsx)(`span`,{children:c?`v${c.version} · ${c.platform}`:`browser preview`})]})]})]}),(0,B.jsx)($n,{})]})})}var Zd=R.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    background: var(--bg-primary);

    /* An undecorated window gets no frame from the compositor, so the corners are drawn here. */
    border-radius: ${({$rounded:e})=>e?`10px`:`0`};
    box-shadow: ${({$rounded:e})=>e?`inset 0 0 0 1px var(--border-color)`:`none`};
`,Qd=R.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
    background:
        radial-gradient(1200px 600px at 15% -10%, rgba(99, 102, 241, 0.12), transparent 60%),
        radial-gradient(900px 500px at 110% 20%, rgba(59, 130, 246, 0.08), transparent 55%),
        var(--bg-primary);
`,$d=R.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,ef=R.header`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(11, 15, 25, 0.55);
    backdrop-filter: blur(8px);
`,tf=R.button`
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
`,nf=R.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,rf=R.footer`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 8px 22px;
    border-top: 1px solid var(--border-color);
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,af=document.getElementById(`root`);af&&(0,v.createRoot)(af).render((0,B.jsx)(_.StrictMode,{children:(0,B.jsx)(Xd,{})}));