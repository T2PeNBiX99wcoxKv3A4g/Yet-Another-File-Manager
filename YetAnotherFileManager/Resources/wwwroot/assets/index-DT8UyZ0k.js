var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.for(`react.view_transition`),m=Symbol.iterator;function h(e){return typeof e!=`object`||!e?null:(e=m&&e[m]||e[`@@iterator`],typeof e==`function`?e:null)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function b(){}b.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}var S=x.prototype=new b;S.constructor=x,_(S,y.prototype),S.isPureReactComponent=!0;var C=Array.isArray;function ee(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function te(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function O(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var k=/\/+/g;function ne(e,t){return typeof e==`object`&&e&&e.key!=null?O(``+e.key):t.toString(36)}function re(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(ee,ee):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ie(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ie(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ne(e,0):a,C(o)?(i=``,c!=null&&(i=c.replace(k,`$&/`)+`/`),ie(o,r,i,``,function(e){return e})):o!=null&&(te(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(k,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(C(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ne(a,u),c+=ie(a,r,i,s,o);else if(u=h(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ne(a,u++),c+=ie(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ie(re(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function A(e,t,n){if(e==null)return e;var r=[],i=0;return ie(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ae(e){if(e._status===-1){var t=e._result,n=t();n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t,n.status===void 0&&(n.status=`fulfilled`,n.value=t))},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t,n.status===void 0&&(n.status=`rejected`,n.reason=t))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var j=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)};function oe(e){var t=w.T,n={};n.types=t===null?null:t.types,w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(ee,j)}catch(e){j(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}}function se(e){var t=w.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else oe(se.bind(null,e))}var ce={map:A,forEach:function(e,t,n){A(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return A(e,function(){t++}),t},toArray:function(e){return A(e,function(e){return e})||[]},only:function(e){if(!te(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=ce,e.Component=y,e.Fragment=r,e.Profiler=a,e.PureComponent=x,e.StrictMode=i,e.Suspense=l,e.ViewTransition=p,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.addTransitionType=se,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=_({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=te,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ae}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=oe,e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.3.1`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,S||(S=!0,D());else{var t=n(l);t!==null&&k(x,t.startTime-e)}}}var S=!1,C=-1,ee=5,w=-1;function T(){return g?!0:!(e.unstable_now()-w<ee)}function E(){if(g=!1,S){var t=e.unstable_now();w=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&T());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&k(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?D():S=!1}}}var D;if(typeof y==`function`)D=function(){y(E)};else if(typeof MessageChannel<`u`){var te=new MessageChannel,O=te.port2;te.port1.onmessage=E,D=function(){O.postMessage(null)}}else D=function(){_(E,0)};function k(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):ee=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,k(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,D()))),r},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`),o=Symbol.for(`react.recoverable`),s=Symbol.for(`react.optimistic_key`);function c(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:r===s?s:``+r,children:e,containerInfo:t,implementation:n}}var l=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.browser=function(e){return{$$typeof:o,_reason:e}},e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return c(e,t,null,r)},e.flushSync=function(e){var t=l.T,n=i.p;try{if(l.T=null,i.p=2,e)return e()}finally{l.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=d(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=d(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=d(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},e.useFormStatus=function(){return l.H.useHostTransitionStatus()},e.version=`19.3.1`})),m=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}function h(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&h(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function g(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function _(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function v(e){var t=[null,null],n=g(e);return n===null||y(t,e,n.child,{foundSelf:!1}),t}function y(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&y(e,t,n.child,r))return!0;n=n.sibling}return!1}function b(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(i(559))}}var x=null,S=null;function C(e,t,n){return e===n||e===t&&(x=e,!0)}function ee(e,t,n){return e===n?(S=e,!1):e===t&&(S!==null&&(x=e),!0)}function w(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function T(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var E=Object.assign,D=Symbol.for(`react.element`),te=Symbol.for(`react.transitional.element`),O=Symbol.for(`react.portal`),k=Symbol.for(`react.fragment`),ne=Symbol.for(`react.strict_mode`),re=Symbol.for(`react.profiler`),ie=Symbol.for(`react.consumer`),A=Symbol.for(`react.context`),ae=Symbol.for(`react.forward_ref`),j=Symbol.for(`react.suspense`),oe=Symbol.for(`react.suspense_list`),se=Symbol.for(`react.memo`),ce=Symbol.for(`react.lazy`),le=Symbol.for(`react.activity`),ue=Symbol.for(`react.legacy_hidden`),de=Symbol.for(`react.memo_cache_sentinel`),fe=Symbol.for(`react.view_transition`),pe=Symbol.for(`react.recoverable`),me=Symbol.iterator;function M(e){return typeof e!=`object`||!e?null:(e=me&&e[me]||e[`@@iterator`],typeof e==`function`?e:null)}var N=Symbol.for(`react.client.reference`);function he(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===N?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case k:return`Fragment`;case re:return`Profiler`;case ne:return`StrictMode`;case j:return`Suspense`;case oe:return`SuspenseList`;case le:return`Activity`;case fe:return`ViewTransition`}if(typeof e==`object`)switch(e.$$typeof){case O:return`Portal`;case A:return e.displayName||`Context`;case ie:return(e._context.displayName||`Context`)+`.Consumer`;case ae:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case se:return t=e.displayName||null,t===null?he(e.type)||`Memo`:t;case ce:t=e._payload,e=e._init;try{return he(e(t))}catch{}}return null}var ge=Array.isArray,P=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_e={pending:!1,data:null,method:null,action:null},ve=[],I=-1;function L(e){return{current:e}}function ye(e){0>I||(e.current=ve[I],ve[I]=null,I--)}function R(e,t){I++,ve[I]=e.current,e.current=t}var be=L(null),xe=L(null),Se=L(null),Ce=L(null);function we(e,t){switch(R(Se,t),R(xe,e),R(be,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?up(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=up(t),e=dp(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}ye(be),R(be,e)}function Te(){ye(be),ye(xe),ye(Se)}function Ee(e){var t=e.memoizedState;t!==null&&(sh._currentValue=t.memoizedState,R(Ce,e)),t=be.current;var n=dp(t,e.type);t!==n&&(R(xe,e),R(be,n))}function De(e){xe.current===e&&(ye(be),ye(xe)),Ce.current===e&&(ye(Ce),sh._currentValue=_e)}var Oe,ke;function Ae(e){if(Oe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Oe=t&&t[1]||``,ke=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Oe+e+ke}var je=!1;function Me(e,t){if(!e||je)return``;je=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{je=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ae(n):``}function Ne(e,t){switch(e.tag){case 26:case 27:case 5:return Ae(e.type);case 16:return Ae(`Lazy`);case 13:return e.child!==t&&t!==null?Ae(`Suspense Fallback`):Ae(`Suspense`);case 19:return Ae(`SuspenseList`);case 0:case 15:return Me(e.type,!1);case 11:return Me(e.type.render,!1);case 1:return Me(e.type,!0);case 31:return Ae(`Activity`);case 30:return Ae(`ViewTransition`);default:return``}}function Pe(e){try{var t=``,n=null;do t+=Ne(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Fe=Object.prototype.hasOwnProperty,Ie=t.unstable_scheduleCallback,Le=t.unstable_cancelCallback,Re=t.unstable_shouldYield,ze=t.unstable_requestPaint,Be=t.unstable_now,Ve=t.unstable_getCurrentPriorityLevel,He=t.unstable_ImmediatePriority,Ue=t.unstable_UserBlockingPriority,We=t.unstable_NormalPriority,Ge=t.unstable_LowPriority,Ke=t.unstable_IdlePriority,qe=t.log,Je=t.unstable_setDisableYieldValue,Ye=null,Xe=null;function Ze(e){if(typeof qe==`function`&&Je(e),Xe&&typeof Xe.setStrictMode==`function`)try{Xe.setStrictMode(Ye,e)}catch{}}var Qe=Math.clz32?Math.clz32:tt,$e=Math.log,et=Math.LN2;function tt(e){return e>>>=0,e===0?32:31-($e(e)/et|0)|0}var nt=256,rt=262144,it=4194304;function at(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ot(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=at(n))):i=at(o):i=at(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=at(n))):i=at(o)):i=at(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function st(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ct(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-Qe(n),i=1<<r;t|=e[r],n&=~i}return t}function lt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ut(){var e=it;return it<<=1,!(it&62914560)&&(it=4194304),e}function dt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ft(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Qe(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&mt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function mt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Qe(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ht(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Qe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function gt(e,t){var n=t&-t;return n=n&42?1:_t(n),(n&(e.suspendedLanes|t))===0?n:0}function _t(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function vt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function yt(){var e=F.p;return e===0?(e=window.event,e===void 0?32:Ch(e.type)):e}function bt(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var xt=Math.random().toString(36).slice(2),St=`__reactFiber$`+xt,Ct=`__reactProps$`+xt,wt=`__reactContainer$`+xt,Tt=`__reactEvents$`+xt,Et=`__reactListeners$`+xt,Dt=`__reactHandles$`+xt,Ot=`__reactResources$`+xt,kt=`__reactMarker$`+xt,At=`__reactLoad$`+xt;function jt(e){delete e[St],delete e[Ct],delete e[Et],delete e[Dt]}function Mt(e){var t;if(t=e[St])return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fm(e);e!==null;){if(n=e[St])return n;e=fm(e)}return t}e=n,n=e.parentNode}return null}function Nt(e){if(e=e[St]||e[wt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Pt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Ft(e){var t=e[Ot];return t||=e[Ot]={hoistableStyles:new Map,hoistableScripts:new Map},t}function It(e){e[kt]=!0}function Lt(e){e[At]=void 0}var Rt=new Set,zt={};function Bt(e,t){Vt(e,t),Vt(e+`Capture`,t)}function Vt(e,t){for(zt[e]=t,e=0;e<t.length;e++)Rt.add(t[e])}var Ht=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ut={},Wt={};function Gt(e){return Fe.call(Wt,e)?!0:Fe.call(Ut,e)?!1:Ht.test(e)?Wt[e]=!0:(Ut[e]=!0,!1)}var z=!1;function Kt(){var e=z;return z=!1,e}function qt(e,t,n){if(Gt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,n)}}}function Jt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,n)}}function Yt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,r)}}function Xt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Qt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function $t(e){if(!e._valueTracker){var t=Zt(e)?`checked`:`value`;e._valueTracker=Qt(e,t,``+e[t])}}function en(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Zt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}var tn=/[\n"\\]/g;function nn(e){return e.replace(tn,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function rn(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Xt(t)):e.value!==``+Xt(t)&&(e.value=``+Xt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):on(e,Xt(n)):o===`number`&&e.value==t?on(e,Xt(e.value)):on(e,Xt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Xt(s):e.removeAttribute(`name`)}function an(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){$t(e);return}n=n==null?``:``+Xt(n),t=t==null?n:``+Xt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),$t(e)}function on(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function sn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Xt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function cn(e,t,n){t!=null&&(t=``+Xt(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+Xt(n)}function ln(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ge(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Xt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),$t(e)}function un(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var dn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function fn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||dn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function pn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``,z=!0);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&(fn(e,a,r),z=!0)}else for(var o in t)t.hasOwnProperty(o)&&fn(e,o,t[o])}function mn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var hn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),gn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _n(e){return gn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function vn(){}var yn=null;function bn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xn=null,Sn=null;function Cn(e){var t=Nt(e);if(t&&(e=t.stateNode)){var n=e[Ct]||null;a:switch(e=t.stateNode,t.type){case`input`:if(rn(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+nn(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Ct]||null;if(!a)throw Error(i(90));rn(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&en(r)}break a;case`textarea`:cn(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&sn(e,!!n.multiple,t,!1)}}}var wn=!1;function Tn(e,t,n){if(wn)return e(t,n);wn=!0;try{return e(t)}finally{if(wn=!1,(xn!==null||Sn!==null)&&(Ld(),xn&&(t=xn,e=Sn,Sn=xn=null,Cn(t),e)))for(t=0;t<e.length;t++)Cn(e[t])}}function En(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Ct]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var Dn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,On=!1;if(Dn)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){On=!0}}),window.addEventListener(`test`,kn,kn),window.removeEventListener(`test`,kn,kn)}catch{On=!1}var An=null,jn=null,Mn=null;function Nn(){if(Mn)return Mn;var e,t=jn,n=t.length,r,i=`value`in An?An.value:An.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Mn=i.slice(e,1<r?1-r:void 0)}function Pn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fn(){return!0}function B(){return!1}function In(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Fn:B,this.isPropagationStopped=B,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Fn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Fn)},persist:function(){},isPersistent:Fn}),t}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rn=In(Ln),zn=E({},Ln,{view:0,detail:0}),Bn=In(zn),Vn,Hn,Un,V=E({},zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$n,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Un&&(Un&&e.type===`mousemove`?(Vn=e.screenX-Un.screenX,Hn=e.screenY-Un.screenY):Hn=Vn=0,Un=e),Vn)},movementY:function(e){return`movementY`in e?e.movementY:Hn}}),Wn=In(V),H=In(E({},V,{dataTransfer:0})),Gn=In(E({},zn,{relatedTarget:0})),Kn=In(E({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0})),qn=In(E({},Ln,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Jn=In(E({},Ln,{data:0})),Yn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Xn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Zn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Qn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zn[e])?!!t[e]:!1}function $n(){return Qn}var er=In(E({},zn,{key:function(e){if(e.key){var t=Yn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Pn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Xn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$n,charCode:function(e){return e.type===`keypress`?Pn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Pn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),tr=In(E({},V,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),nr=In(E({},Ln,{submitter:0})),rr=In(E({},zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$n})),ir=In(E({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0})),ar=In(E({},V,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),or=In(E({},Ln,{newState:0,oldState:0,source:0})),sr=[9,13,27,32],cr=Dn&&`CompositionEvent`in window,lr=null;Dn&&`documentMode`in document&&(lr=document.documentMode);var ur=Dn&&`TextEvent`in window&&!lr,dr=Dn&&(!cr||lr&&8<lr&&11>=lr),fr=` `,pr=!1;function mr(e,t){switch(e){case`keyup`:return sr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function hr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var gr=!1;function _r(e,t){switch(e){case`compositionend`:return hr(t);case`keypress`:return t.which===32?(pr=!0,fr):null;case`textInput`:return e=t.data,e===fr&&pr?null:e;default:return null}}function vr(e,t){if(gr)return e===`compositionend`||!cr&&mr(e,t)?(e=Nn(),Mn=jn=An=null,gr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return dr&&t.locale!==`ko`?null:t.data;default:return null}}var yr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function br(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!yr[e.type]:t===`textarea`}function xr(e,t,n,r){xn?Sn?Sn.push(r):Sn=[r]:xn=r,t=qf(t,`onChange`),0<t.length&&(n=new Rn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Sr=null,Cr=null;function wr(e){Bf(e,0)}function Tr(e){if(en(Pt(e)))return e}function Er(e,t){if(e===`change`)return t}var Dr=!1;if(Dn){var Or;if(Dn){var kr=`oninput`in document;if(!kr){var Ar=document.createElement(`div`);Ar.setAttribute(`oninput`,`return;`),kr=typeof Ar.oninput==`function`}Or=kr}else Or=!1;Dr=Or&&(!document.documentMode||9<document.documentMode)}function jr(){Sr&&(Sr.detachEvent(`onpropertychange`,Mr),Cr=Sr=null)}function Mr(e){if(e.propertyName===`value`&&Tr(Cr)){var t=[];xr(t,Cr,e,bn(e)),Tn(wr,t)}}function Nr(e,t,n){e===`focusin`?(jr(),Sr=t,Cr=n,Sr.attachEvent(`onpropertychange`,Mr)):e===`focusout`&&jr()}function Pr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Tr(Cr)}function Fr(e,t){if(e===`click`)return Tr(t)}function Ir(e,t){if(e===`input`||e===`change`)return Tr(t)}function Lr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Rr=typeof Object.is==`function`?Object.is:Lr;function zr(e,t){if(Rr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fe.call(t,i)||!Rr(e[i],t[i]))return!1}return!0}function Br(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Vr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hr(e,t){var n=Vr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Vr(n)}}function Ur(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ur(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Br(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Br(e.document)}return t}function Gr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Kr=Dn&&`documentMode`in document&&11>=document.documentMode,qr=null,Jr=null,Yr=null,Xr=!1;function Zr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xr||qr==null||qr!==Br(r)||(r=qr,`selectionStart`in r&&Gr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&zr(Yr,r)||(Yr=r,r=qf(Jr,`onSelect`),0<r.length&&(t=new Rn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=qr)))}function Qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var $r={animationend:Qr(`Animation`,`AnimationEnd`),animationiteration:Qr(`Animation`,`AnimationIteration`),animationstart:Qr(`Animation`,`AnimationStart`),transitionrun:Qr(`Transition`,`TransitionRun`),transitionstart:Qr(`Transition`,`TransitionStart`),transitioncancel:Qr(`Transition`,`TransitionCancel`),transitionend:Qr(`Transition`,`TransitionEnd`)},ei={},ti={};Dn&&(ti=document.createElement(`div`).style,`AnimationEvent`in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),`TransitionEvent`in window||delete $r.transitionend.transition);function ni(e){if(ei[e])return ei[e];if(!$r[e])return e;var t=$r[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ti)return ei[e]=t[n];return e}var ri=ni(`animationend`),ii=ni(`animationiteration`),ai=ni(`animationstart`),oi=ni(`transitionrun`),si=ni(`transitionstart`),ci=ni(`transitioncancel`),li=ni(`transitionend`),ui=new Map,di=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);di.push(`scrollEnd`);function fi(e,t){ui.set(e,t),Bt(t,[e])}var pi=0;function mi(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=vd.identifierPrefix;var n=pi++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function hi(e){if(e==null||typeof e==`string`)return e;var t=null,n=Ed;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function gi(e,t){return e=hi(e),t=hi(t),t==null?e===`auto`?null:e:t===`auto`?null:t}var _i=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},vi=[],yi=0,bi=0;function xi(){for(var e=yi,t=bi=yi=0;t<e;){var n=vi[t];vi[t++]=null;var r=vi[t];vi[t++]=null;var i=vi[t];vi[t++]=null;var a=vi[t];if(vi[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Ti(n,i,a)}}function Si(e,t,n,r){vi[yi++]=e,vi[yi++]=t,vi[yi++]=n,vi[yi++]=r,bi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Ci(e,t,n,r){return Si(e,t,n,r),Ei(e)}function wi(e,t){return Si(e,null,null,t),Ei(e)}function Ti(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Qe(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Ei(e){if(50<Dd)throw Dd=0,Od=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Di={};function Oi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ki(e,t,n,r){return new Oi(e,t,n,r)}function Ai(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ji(e,t){var n=e.alternate;return n===null?(n=ki(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Mi(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ni(e,t,n,r,a,o){var s=0;if(r=e,typeof r==`function`)Ai(r)&&(s=1);else if(typeof r==`string`)s=qm(e,n,be.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(r){case le:return e=ki(31,n,t,a),e.elementType=le,e.lanes=o,e;case k:return Pi(n.children,a,o,t);case ne:s=8,a|=24;break;case re:return e=ki(12,n,t,a|2),e.elementType=re,e.lanes=o,e;case j:return e=ki(13,n,t,a),e.elementType=j,e.lanes=o,e;case oe:return e=ki(19,n,t,a),e.elementType=oe,e.lanes=o,e;case ue:case fe:return e=a|32,e=ki(30,n,t,e),e.elementType=fe,e.lanes=o,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r==`object`&&r)switch(r.$$typeof){case A:s=10;break a;case ie:s=9;break a;case ae:s=11;break a;case se:s=14;break a;case ce:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=ki(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function Pi(e,t,n,r){return e=ki(7,e,r,t),e.lanes=n,e}function Fi(e,t,n){return e=ki(6,e,null,t),e.lanes=n,e}function Ii(e){var t=ki(18,null,null,0);return t.stateNode=e,t}function Li(e,t,n){return t=ki(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ri=new WeakMap;function zi(e,t){if(typeof e==`object`&&e){var n=Ri.get(e);return n===void 0?(t={value:e,source:t,stack:Pe(t)},Ri.set(e,t),t):n}return{value:e,source:t,stack:Pe(t)}}var Bi=[],Vi=0,Hi=null,Ui=0,Wi=[],Gi=0,Ki=null,qi=1,Ji=``;function Yi(e,t){Bi[Vi++]=Ui,Bi[Vi++]=Hi,Hi=e,Ui=t}function Xi(e,t,n){Wi[Gi++]=qi,Wi[Gi++]=Ji,Wi[Gi++]=Ki,Ki=e;var r=qi;e=Ji;var i=32-Qe(r)-1;r&=~(1<<i),n+=1;var a=32-Qe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qi=1<<32-Qe(t)+i|n<<i|r,Ji=a+e}else qi=1<<a|n<<i|r,Ji=e}function Zi(e){e.return!==null&&(Yi(e,1),Xi(e,1,0))}function Qi(e){for(;e===Hi;)Hi=Bi[--Vi],Bi[Vi]=null,Ui=Bi[--Vi],Bi[Vi]=null;for(;e===Ki;)Ki=Wi[--Gi],Wi[Gi]=null,Ji=Wi[--Gi],Wi[Gi]=null,qi=Wi[--Gi],Wi[Gi]=null}function $i(e,t){Wi[Gi++]=qi,Wi[Gi++]=Ji,Wi[Gi++]=Ki,qi=t.id,Ji=t.overflow,Ki=e}var ea=null,ta=null,U=!1,na=null,ra=!1,ia=Error(i(519));function aa(e){throw da(zi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),ia}function oa(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[St]=e,t[Ct]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<Rf.length;n++)$(Rf[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),an(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),ln(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||$f(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=vn),t=!0):t=!1,t||aa(e,!0)}function sa(e){for(ea=e.return;ea;)switch(ea.tag){case 5:case 31:case 13:ra=!1;return;case 27:case 3:ra=!0;return;default:ea=ea.return}}function ca(e){if(e!==ea)return!1;if(!U)return sa(e),U=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||pp(e.type,e.memoizedProps)),n=!n),n&&ta&&aa(e),sa(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));ta=dm(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));ta=dm(e)}else t===27?(t=ta,Sp(e.type)?(e=um,um=null,ta=e):ta=t):ta=ea?lm(e.stateNode.nextSibling):null;return!0}function la(){ta=ea=null,U=!1}function ua(){var e=na;return e!==null&&(ud===null?ud=e:ud.push.apply(ud,e),na=null),e}function da(e){na===null?na=[e]:na.push(e)}var fa=L(null),pa=null,ma=null;function ha(e,t,n){R(fa,t._currentValue),t._currentValue=n}function ga(e){e._currentValue=fa.current,ye(fa)}function _a(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function va(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),_a(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),_a(s,n,e),s=null}else a.tag===13&&a.memoizedState!==null&&a.memoizedState.dehydrated===null?(a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),_a(a.return,n,e),s=a.child,s=s===null?null:s.sibling):s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ya(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Rr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===Ce.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[sh]:e.push(sh))}a=a.return}return e!==null&&va(t,e,n,r),t.flags|=262144,e!==null}function ba(e){for(e=e.firstContext;e!==null;){if(!Rr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xa(e){pa=e,ma=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Sa(e){return wa(pa,e)}function Ca(e,t){return pa===null&&xa(e),wa(e,t)}function wa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ma===null){if(e===null)throw Error(i(308));ma=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ma=ma.next=t;return n}var Ta=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Ea=t.unstable_scheduleCallback,Da=t.unstable_NormalPriority,Oa={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ka(){return{controller:new Ta,data:new Map,refCount:0}}function Aa(e){e.refCount--,e.refCount===0&&Ea(Da,function(){e.controller.abort()})}function ja(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}var Ma=null;function Na(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Pa=null,Fa=0,Ia=0,La=null;function Ra(e,t){if(Pa===null){var n=Pa=[];Fa=0,Ia=Nf(),La={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return Fa++,t.then(za,za),t}function za(){if(--Fa===0&&(Ma=null,Pa!==null)){La!==null&&(La.status=`fulfilled`);var e=Pa;Pa=null,Ia=0,La=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ba(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var W=P.S;P.S=function(e,t){if(pd=Be(),typeof t==`object`&&t&&typeof t.then==`function`&&Ra(e,t),Ma!==null)for(var n=yf;n!==null;)ja(n,Ma),n=n.next;if(n=e.types,n!==null){for(var r=yf;r!==null;)ja(r,n),r=r.next;if(Ia!==0){r=Ma,r===null&&(r=Ma=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}W!==null&&W(e,t)};var Va=L(null);function Ha(){var e=Va.current;return e===null?Zu.pooledCache:e}function Ua(e,t){t===null?R(Va,Va.current):R(Va,t.pool)}function Wa(){var e=Ha();return e===null?null:{parent:Oa._currentValue,pool:e}}var Ga=Error(i(460)),Ka=Error(i(474)),qa=Error(i(542)),Ja={then:function(){}};function Ya(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Xa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(vn,vn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,eo(e),e===void 0&&!(`reason`in t)?Error(i(600)):e;default:if(typeof t.status==`string`)t.then(vn,vn);else{if(e=Zu,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,eo(e),e}throw Qa=t,Ga}}function Za(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Qa=e,Ga):e}}var Qa=null;function $a(){if(Qa===null)throw Error(i(459));var e=Qa;return Qa=null,e}function eo(e){if(e===Ga||e===qa)throw Error(i(483))}var to=null,no=0;function ro(e){var t=no;return no+=1,to===null&&(to=[]),Xa(to,e,t)}function io(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function ao(e,t){throw t.$$typeof===D?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function oo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=ji(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Fi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===k?(e=d(e,t,n.props.children,r,n.key),io(e,n),e):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ce&&Za(i)===t.type)?(t=a(t,n.props),io(t,n),t.return=e,t):(t=Ni(n.type,n.key,n.props,null,e.mode,r),io(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Li(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Pi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Fi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case te:return n=Ni(t.type,t.key,t.props,null,e.mode,n),io(n,t),n.return=e,n;case O:return t=Li(t,e.mode,n),t.return=e,t;case ce:return t=Za(t),f(e,t,n)}if(ge(t)||M(t))return t=Pi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,ro(t),n);if(t.$$typeof===A)return f(e,Ca(e,t),n);ao(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case te:return n.key===i?l(e,t,n,r):null;case O:return n.key===i?u(e,t,n,r):null;case ce:return n=Za(n),p(e,t,n,r)}if(ge(n)||M(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,ro(n),r);if(n.$$typeof===A)return p(e,t,Ca(e,n),r);ao(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case te:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case O:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ce:return r=Za(r),m(e,t,n,r,i)}if(ge(r)||M(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,ro(r),i);if(r.$$typeof===A)return m(e,t,n,Ca(t,r),i);ao(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),U&&Yi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return U&&Yi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&(_=g.alternate,_!==null&&d.delete(_.key===null?h:_.key)),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),U&&Yi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),U&&Yi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return U&&Yi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&(_=v.alternate,_!==null&&h.delete(_.key===null?g:_.key)),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),U&&Yi(a,g),u}function _(e,r,o,c){if(typeof o==`object`&&o&&o.type===k&&o.key===null&&o.props.ref===void 0&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case te:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===k){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),io(c,o),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ce&&Za(l)===r.type){n(e,r.sibling),c=a(r,o.props),io(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===k?(c=Pi(o.props.children,e.mode,c,o.key),io(c,o),c.return=e,e=c):(c=Ni(o.type,o.key,o.props,null,e.mode,c),io(c,o),c.return=e,e=c)}return s(e);case O:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Li(o,e.mode,c),c.return=e,e=c}return s(e);case ce:return o=Za(o),_(e,r,o,c)}if(ge(o))return h(e,r,o,c);if(M(o)){if(l=M(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return _(e,r,ro(o),c);if(o.$$typeof===A)return _(e,r,Ca(e,o),c);ao(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Fi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{no=0;var i=_(e,t,n,r);return to=null,i}catch(t){if(t===Ga||t===qa)throw t;var a=ki(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var so=oo(!0),co=oo(!1),lo=!1;function uo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function fo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function po(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function mo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Ei(e),Ti(e,null,n),t}return Si(e,r,t,n),Ei(e)}function ho(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ht(e,n)}}function go(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var _o=!1;function vo(){if(_o){var e=La;if(e!==null)throw e}}function yo(e,t,n,r){_o=!1;var i=e.updateQueue;lo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Z&f)===f:(r&f)===f){f!==0&&f===Ia&&(_o=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,h=s;f=t;var g=n;switch(h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(g,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(g,d,f):m,f==null)break a;d=E({},d,f);break a;case 2:lo=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),id|=o,e.lanes=o,e.memoizedState=d}}function bo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function xo(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)bo(n[e],t)}var So=L(null),Co=L(0);function wo(e,t){e=nd,R(Co,e),R(So,t),nd=e|t.baseLanes}function To(){R(Co,nd),R(So,So.current)}function Eo(){nd=Co.current,ye(So),ye(Co)}var Do=L(null),Oo=null;function ko(e){var t=e.alternate;R(Po,Po.current&1),R(Do,e),Oo===null&&(t===null||So.current!==null||t.memoizedState!==null)&&(Oo=e)}function Ao(e){R(Po,Po.current),R(Do,e),Oo===null&&(Oo=e)}function jo(e){e.tag===22?(R(Po,Po.current),R(Do,e),Oo===null&&(Oo=e)):Mo()}function Mo(){R(Po,Po.current),R(Do,Do.current)}function No(e){ye(Do),Oo===e&&(Oo=null),ye(Po)}var Po=L(0);function Fo(e,t){R(Do,Do.current),R(Po,t)}function Io(e){ye(Po),ye(Do),Oo===e&&(Oo=null)}function Lo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||om(n)||sm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ro=0,G=null,zo=null,Bo=null,Vo=!1,Ho=!1,Uo=!1,Wo=0,Go=0,Ko=null,qo=0;function Jo(){throw Error(i(321))}function Yo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Rr(e[n],t[n]))return!1;return!0}function Xo(e,t,n,r,i,a){return Ro=a,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,P.H=e===null||e.memoizedState===null?pc:mc,Uo=!1,a=n(r,i),Uo=!1,Ho&&(a=Qo(t,n,r,i)),Zo(e),a}function Zo(e){P.H=fc;var t=zo!==null&&zo.next!==null;if(Ro=0,Bo=zo=G=null,Vo=!1,Go=0,Ko=null,t)throw Error(i(300));e===null||jc||(e=e.dependencies,e!==null&&ba(e)&&(jc=!0))}function Qo(e,t,n,r){G=e;var a=0;do{if(Ho&&(Ko=null),Go=0,Ho=!1,25<=a)throw Error(i(301));if(a+=1,Bo=zo=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}P.H=hc,o=t(n,r)}while(Ho);return o}function $o(){var e=P.H,t=e.useState()[0];return t=typeof t.then==`function`?os(t):t,e=e.useState()[0],(zo===null?null:zo.memoizedState)!==e&&(G.flags|=1024),t}function es(){var e=Wo!==0;return Wo=0,e}function ts(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ns(e){if(Vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Vo=!1}Ro=0,Bo=zo=G=null,Ho=!1,Go=Wo=0,Ko=null}function rs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bo===null?G.memoizedState=Bo=e:Bo=Bo.next=e,Bo}function is(){if(zo===null){var e=G.alternate;e=e===null?null:e.memoizedState}else e=zo.next;var t=Bo===null?G.memoizedState:Bo.next;if(t!==null)Bo=t,zo=e;else{if(e===null)throw G.alternate===null?Error(i(467)):Error(i(310));zo=e,e={memoizedState:zo.memoizedState,baseState:zo.baseState,baseQueue:zo.baseQueue,queue:zo.queue,next:null},Bo===null?G.memoizedState=Bo=e:Bo=Bo.next=e}return Bo}function as(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function os(e){var t=Go;return Go+=1,Ko===null&&(Ko=[]),e=Xa(Ko,e,t),t=G,(Bo===null?t.memoizedState:Bo.next)===null&&(t=t.alternate,P.H=t===null||t.memoizedState===null?pc:mc),e}function ss(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return os(e);if(e.$$typeof===pe)return;if(e.$$typeof===A)return Sa(e)}throw Error(i(438,String(e)))}function cs(e){var t=null,n=G.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=G.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=as(),G.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=de;return t.index++,n}function ls(e,t){return typeof t==`function`?t(e):t}function us(e){return ds(is(),zo,e)}function ds(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(Ro&f)===f:(Z&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ia&&(d=!0);else if((Ro&p)===p){u=u.next,p===Ia&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,G.lanes|=p,id|=p;f=u.action,Uo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,G.lanes|=f,id|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Rr(o,e.memoizedState)&&(jc=!0,d&&(n=La,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function fs(e){var t=is(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Rr(o,t.memoizedState)||(jc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ps(e,t,n){var r=G,a=is(),o=U;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Rr((zo||a).memoizedState,n);if(s&&(a.memoizedState=n,jc=!0),a=a.queue,Rs(gs.bind(null,r,a,e),[e]),e=a.getSnapshot!==t||s||Bo!==null&&!!(Bo.memoizedState.tag&1),Ns(e?9:8,{destroy:void 0},hs.bind(null,r,a,n,t),null),e){if(r.flags|=2048,Zu===null)throw Error(i(349));o||Ro&127||ms(r,t,n)}return n}function ms(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t=as(),G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hs(e,t,n,r){t.value=n,t.getSnapshot=r,_s(t)&&vs(e)}function gs(e,t,n){return n(function(){_s(t)&&vs(e)})}function _s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Rr(e,n)}catch{return!0}}function vs(e){var t=wi(e,2);t!==null&&Md(t,e,2)}function ys(e){var t=rs();if(typeof e==`function`){var n=e;if(e=n(),Uo){Ze(!0);try{n()}finally{Ze(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:e},t}function bs(e,t,n,r){return e.baseState=n,ds(e,zo,typeof r==`function`?r:ls)}function xs(e,t,n,r,a){if(lc(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};P.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Ss(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Ss(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=P.T,o={};o.types=a===null?null:a.types,P.T=o;try{var s=n(i,r),c=P.S;c!==null&&c(o,s),Cs(e,t,s)}catch(n){Ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),P.T=a}}else try{a=n(i,r),Cs(e,t,a)}catch(n){Ts(e,t,n)}}function Cs(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ws(e,t,n)},function(n){return Ts(e,t,n)}):ws(e,t,n)}function ws(e,t,n){t.status=`fulfilled`,t.value=n,Es(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Ss(e,n)))}function Ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Es(t),t=t.next;while(t!==r)}e.action=null}function Es(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ds(e,t){return t}function Os(e,t){if(U){var n=Zu.formState;if(n!==null){a:{var r=G;if(U){if(ta){b:{for(var i=ta,a=ra;i.nodeType!==8;)if(!a||(i=lm(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){ta=lm(i.nextSibling),r=i.data===`F!`;break a}}aa(r)}r=!1}r&&(t=n[0])}}return n=rs(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ds,lastRenderedState:t},n.queue=r,n=oc.bind(null,G,r),r.dispatch=n,r=ys(!1),a=cc.bind(null,G,!1,r.queue),r=rs(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=xs.bind(null,G,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function ks(e){return As(is(),zo,e)}function As(e,t,n){if(t=ds(e,t,Ds)[0],e=us(ls)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=os(t)}catch(e){throw e===Ga?qa:e}else r=t;t=is();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(G.flags|=2048,Ns(9,{destroy:void 0},js.bind(null,i,n),null)),[r,a,e]}function js(e,t){e.action=t}function Ms(e){var t=is(),n=zo;if(n!==null)return As(t,n,e);is(),t=t.memoizedState,n=is();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Ns(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=G.updateQueue,t===null&&(t=as(),G.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ps(){return is().memoizedState}function Fs(e,t,n,r){var i=rs();G.flags|=e,i.memoizedState=Ns(1|t,{destroy:void 0},n,r===void 0?null:r)}function Is(e,t,n,r){var i=is();r=r===void 0?null:r;var a=i.memoizedState.inst;zo!==null&&r!==null&&Yo(r,zo.memoizedState.deps)?i.memoizedState=Ns(t,a,n,r):(G.flags|=e,i.memoizedState=Ns(1|t,a,n,r))}function Ls(e,t){Fs(8390656,8,e,t)}function Rs(e,t){Is(2048,8,e,t)}function zs(e){G.flags|=4;var t=G.updateQueue;if(t===null)t=as(),G.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Bs(e){var t=is().memoizedState;return zs({ref:t,nextImpl:e}),function(){if(Y&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function Vs(e,t){return Is(4,2,e,t)}function Hs(e,t){return Is(4,4,e,t)}function Us(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ws(e,t,n){n=n==null?null:n.concat([e]),Is(4,4,Us.bind(null,t,e),n)}function Gs(){}function Ks(e,t){var n=is();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Yo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qs(e,t){var n=is();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Yo(t,r[1]))return r[0];if(r=e(),Uo){Ze(!0);try{e()}finally{Ze(!1)}}return n.memoizedState=[r,t],r}function Js(e,t,n){return n===void 0||Ro&1073741824&&!(Z&261930)?e.memoizedState=t:(e.memoizedState=n,e=Ad(),G.lanes|=e,id|=e,n)}function Ys(e,t,n,r){return Rr(n,t)?n:So.current===null?!(Ro&106)||Ro&1073741824&&!(Z&261930)?(jc=!0,e.memoizedState=n):(e=Ad(),G.lanes|=e,id|=e,t):(e=Js(e,n,r),Rr(e,t)||(jc=!0),e)}function Xs(e,t,n,r,i){var a=F.p;F.p=a!==0&&8>a?a:8;var o=P.T,s={};s.types=o===null?null:o.types,P.T=s,cc(e,!1,t,n);try{var c=i(),l=P.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?sc(e,t,Ba(c,r),kd(e)):sc(e,t,r,kd(e))}catch(n){sc(e,t,{then:function(){},status:`rejected`,reason:n},kd())}finally{F.p=a,o!==null&&s.types!==null&&(o.types=s.types),P.T=o}}function Zs(){}function Qs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=$s(e).queue;Xs(e,a,t,_e,n===null?Zs:function(){return ec(e),n(r)})}function $s(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:_e,baseState:_e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:_e},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ec(e){var t=$s(e);t.next===null&&(t=e.alternate.memoizedState),sc(e,t.next.queue,{},kd())}function tc(){return Sa(sh)}function nc(){return is().memoizedState}function rc(){return is().memoizedState}function ic(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=kd();e=po(n);var r=mo(t,e,n);r!==null&&(Md(r,t,n),ho(r,t,n)),t={cache:ka()},e.payload=t;return}t=t.return}}function ac(e,t,n){var r=kd();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},lc(e)?uc(t,n):(n=Ci(e,t,n,r),n!==null&&(Md(n,e,r),dc(n,t,r)))}function oc(e,t,n){sc(e,t,n,kd())}function sc(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(lc(e))uc(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Rr(s,o))return Si(e,t,i,0),Zu===null&&xi(),!1}catch{}if(n=Ci(e,t,i,r),n!==null)return Md(n,e,r),dc(n,t,r),!0}return!1}function cc(e,t,n,r){if(r={lane:2,revertLane:Nf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},lc(e)){if(t)throw Error(i(479))}else t=Ci(e,n,r,2),t!==null&&Md(t,e,2)}function lc(e){var t=e.alternate;return e===G||t!==null&&t===G}function uc(e,t){Ho=Vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dc(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ht(e,n)}}var fc={readContext:Sa,use:ss,useCallback:Jo,useContext:Jo,useEffect:Jo,useImperativeHandle:Jo,useLayoutEffect:Jo,useInsertionEffect:Jo,useMemo:Jo,useReducer:Jo,useRef:Jo,useState:Jo,useDebugValue:Jo,useDeferredValue:Jo,useTransition:Jo,useSyncExternalStore:Jo,useId:Jo,useHostTransitionStatus:Jo,useFormState:Jo,useActionState:Jo,useOptimistic:Jo,useMemoCache:Jo,useCacheRefresh:Jo,useEffectEvent:Jo},pc={readContext:Sa,use:ss,useCallback:function(e,t){return rs().memoizedState=[e,t===void 0?null:t],e},useContext:Sa,useEffect:Ls,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),Fs(4194308,4,Us.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fs(4194308,4,e,t)},useInsertionEffect:function(e,t){Fs(4,2,e,t)},useMemo:function(e,t){var n=rs();t=t===void 0?null:t;var r=e();if(Uo){Ze(!0);try{e()}finally{Ze(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=rs();if(n!==void 0){var i=n(t);if(Uo){Ze(!0);try{n(t)}finally{Ze(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ac.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=rs();return e={current:e},t.memoizedState=e},useState:function(e){e=ys(e);var t=e.queue,n=oc.bind(null,G,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Gs,useDeferredValue:function(e,t){return Js(rs(),e,t)},useTransition:function(){var e=ys(!1);return e=Xs.bind(null,G,e.queue,!0,!1),rs().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=G,a=rs();if(U){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Zu===null)throw Error(i(349));Z&127||ms(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Ls(gs.bind(null,r,o,e),[e]),r.flags|=2048,Ns(9,{destroy:void 0},hs.bind(null,r,o,n,t),null),n},useId:function(){var e=rs(),t=Zu.identifierPrefix;if(U){var n=Ji,r=qi;n=(r&~(1<<32-Qe(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Wo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=qo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:tc,useFormState:Os,useActionState:Os,useOptimistic:function(e){var t=rs();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=cc.bind(null,G,!0,n),n.dispatch=t,[e,t]},useMemoCache:cs,useCacheRefresh:function(){return rs().memoizedState=ic.bind(null,G)},useEffectEvent:function(e){var t=rs(),n={impl:e};return t.memoizedState=n,function(){if(Y&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},mc={readContext:Sa,use:ss,useCallback:Ks,useContext:Sa,useEffect:Rs,useImperativeHandle:Ws,useInsertionEffect:Vs,useLayoutEffect:Hs,useMemo:qs,useReducer:us,useRef:Ps,useState:function(){return us(ls)},useDebugValue:Gs,useDeferredValue:function(e,t){return Ys(is(),zo.memoizedState,e,t)},useTransition:function(){var e=us(ls)[0],t=is().memoizedState;return[typeof e==`boolean`?e:os(e),t]},useSyncExternalStore:ps,useId:nc,useHostTransitionStatus:tc,useFormState:ks,useActionState:ks,useOptimistic:function(e,t){return bs(is(),zo,e,t)},useMemoCache:cs,useCacheRefresh:rc,useEffectEvent:Bs},hc={readContext:Sa,use:ss,useCallback:Ks,useContext:Sa,useEffect:Rs,useImperativeHandle:Ws,useInsertionEffect:Vs,useLayoutEffect:Hs,useMemo:qs,useReducer:fs,useRef:Ps,useState:function(){return fs(ls)},useDebugValue:Gs,useDeferredValue:function(e,t){var n=is();return zo===null?Js(n,e,t):Ys(n,zo.memoizedState,e,t)},useTransition:function(){var e=fs(ls)[0],t=is().memoizedState;return[typeof e==`boolean`?e:os(e),t]},useSyncExternalStore:ps,useId:nc,useHostTransitionStatus:tc,useFormState:Ms,useActionState:Ms,useOptimistic:function(e,t){var n=is();return zo===null?(n.baseState=e,[e,n.queue.dispatch]):bs(n,zo,e,t)},useMemoCache:cs,useCacheRefresh:rc,useEffectEvent:Bs};function gc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _c={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=kd(),i=po(r);i.payload=t,n!=null&&(i.callback=n),t=mo(e,i,r),t!==null&&(Md(t,e,r),ho(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=kd(),i=po(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=mo(e,i,r),t!==null&&(Md(t,e,r),ho(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=kd(),r=po(n);r.tag=2,t!=null&&(r.callback=t),t=mo(e,r,n),t!==null&&(Md(t,e,n),ho(t,e,n))}};function vc(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!zr(n,r)||!zr(i,a):!0}function yc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_c.enqueueReplaceState(t,t.state,null)}function bc(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=E({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function xc(e){_i(e)}function Sc(e){console.error(e)}function Cc(e){_i(e)}function wc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Tc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Ec(e,t,n){return n=po(n),n.tag=3,n.payload={element:null},n.callback=function(){wc(e,t)},n}function Dc(e){return e=po(e),e.tag=3,e}function Oc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Tc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Tc(t,n,r),typeof i!=`function`&&(gd===null?gd=new Set([this]):gd.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function kc(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ya(t,n,a,!0),n=Do.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Oo===null?Wd():n.alternate===null&&rd===0&&(rd=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ja?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),pf(e,r,a)),!1;case 22:return n.flags|=65536,r===Ja?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),pf(e,r,a)),!1}throw Error(i(435,n.tag))}return pf(e,r,a),Wd(),!1}if(U)return t=Do.current,t===null?(r!==ia&&(t=Error(i(423),{cause:r}),da(zi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=zi(r,n),a=Ec(e.stateNode,r,a),go(e,a),rd!==4&&(rd=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==ia&&(e=Error(i(422),{cause:r}),da(zi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=zi(o,n),ld===null?ld=[o]:ld.push(o),rd!==4&&(rd=2),t===null)return!0;r=zi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Ec(n.stateNode,r,e),go(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(gd===null||!gd.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Dc(a),Oc(a,e,n,r),go(n,a),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Ac=Error(i(461)),jc=!1;function Mc(e,t,n,r){t.child=e===null?co(t,null,n,r):so(t,e.child,n,r)}function Nc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return xa(t),r=Xo(e,t,n,o,a,i),s=es(),e!==null&&!jc?(ts(e,t,i),sl(e,t,i)):(U&&s&&Zi(t),t.flags|=1,Mc(e,t,r,i),t.child)}function Pc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Ai(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Fc(e,t,a,r,i)):(e=Ni(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!cl(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?zr:n,n(o,r)&&e.ref===t.ref)return sl(e,t,i)}return t.flags|=1,e=ji(a,r),e.ref=t.ref,e.return=t,t.child=e}function Fc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(zr(a,r)&&e.ref===t.ref){if(jc=!1,t.pendingProps=r=a,cl(e,i))e.flags&131072&&(jc=!0);else return t.lanes=e.lanes,sl(e,t,i)}}return Uc(e,t,n,r,i)}function Ic(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return Rc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ua(t,a===null?null:a.cachePool),a===null?To():wo(t,a),jo(t);else return r=t.lanes=536870912,Rc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ua(t,null),To(),Mo()):(Ua(t,a.cachePool),wo(t,a),Mo(),t.memoizedState=null);return Mc(e,t,i,n),t.child}function Lc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Rc(e,t,n,r,i){var a=Ha();return a=a===null?null:{parent:Oa._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ua(t,null),To(),jo(t),e!==null&&ya(e,t,r,!0),t.childLanes=i,null}function zc(e,t){return t=Qc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Bc(e,t,n){return so(t,e.child,null,n),e=zc(t,t.pendingProps),e.flags|=2,No(t),t.memoizedState=null,e}function Vc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(U){if(r.mode===`hidden`)return e=zc(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Lc(null,e);if(Ao(t),(e=ta)?(e=am(e,ra),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ki===null?null:{id:qi,overflow:Ji},retryLane:536870912,hydrationErrors:null},n=Ii(e),n.return=t,t.child=n,ea=t,ta=null)):e=null,e===null)throw aa(t);return t.lanes=536870912,null}return zc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(Ao(t),a){if(t.flags&256)t.flags&=-257,t=Bc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(jc||ya(e,t,n,!1),a=(n&e.childLanes)!==0,jc||a){if(So.current===null){if(r=Zu,r!==null&&(s=gt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,wi(e,s),Md(r,e,s),Ac;Wd()}t=Bc(e,t,n)}else e=o.treeContext,ta=lm(s.nextSibling),ea=t,U=!0,na=null,ra=!1,e!==null&&$i(t,e),t=zc(t,r),t.flags|=134221824;return t}return e=ji(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Hc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Uc(e,t,n,r,i){return xa(t),n=Xo(e,t,n,r,void 0,i),r=es(),e!==null&&!jc?(ts(e,t,i),sl(e,t,i)):(U&&r&&Zi(t),t.flags|=1,Mc(e,t,n,i),t.child)}function Wc(e,t,n,r,i,a){return xa(t),t.updateQueue=null,n=Qo(t,r,n,i),Zo(e),r=es(),e!==null&&!jc?(ts(e,t,a),sl(e,t,a)):(U&&r&&Zi(t),t.flags|=1,Mc(e,t,n,a),t.child)}function Gc(e,t,n,r,i){if(xa(t),t.stateNode===null){var a=Di,o=n.contextType;typeof o==`object`&&o&&(a=Sa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=_c,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},uo(t),o=n.contextType,a.context=typeof o==`object`&&o?Sa(o):Di,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(gc(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&_c.enqueueReplaceState(a,a.state,null),yo(t,r,a,i),vo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=bc(n,s);a.props=c;var l=a.context,u=n.contextType;o=Di,typeof u==`object`&&u&&(o=Sa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&yc(t,a,r,o),lo=!1;var f=t.memoizedState;a.state=f,yo(t,r,a,i),vo(),l=t.memoizedState,s||f!==l||lo?(typeof d==`function`&&(gc(t,n,d,r),l=t.memoizedState),(c=lo||vc(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,fo(e,t),o=t.memoizedProps,u=bc(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Di,typeof l==`object`&&l&&(c=Sa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&yc(t,a,r,c),lo=!1,f=t.memoizedState,a.state=f,yo(t,r,a,i),vo();var p=t.memoizedState;o!==d||f!==p||lo||e!==null&&e.dependencies!==null&&ba(e.dependencies)?(typeof s==`function`&&(gc(t,n,s,r),p=t.memoizedState),(u=lo||vc(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ba(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Hc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=so(t,e.child,null,i),t.child=so(t,null,n,i)):Mc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=sl(e,t,i),e}function Kc(e,t,n,r){return la(),t.flags|=256,Mc(e,t,n,r),t.child}var qc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jc(e){return{baseLanes:e,cachePool:Wa()}}function Yc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=sd),e}function Xc(e,t,n){var r=t.pendingProps,i=!1,a=!!(t.flags&128),o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:!!(Po.current&2)),o&&(i=!0,t.flags&=-129),o=!!(t.flags&32),t.flags&=-33,e===null){if(U){if(i?ko(t):Mo(),(e=ta)?(e=am(e,ra),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ki===null?null:{id:qi,overflow:Ji},retryLane:536870912,hydrationErrors:null},n=Ii(e),n.return=t,t.child=n,ea=t,ta=null)):e=null,e===null)throw aa(t);return t.lanes=sm(e)?32:536870912,null}return a=r.children,r=r.fallback,i?(Mo(),i=t.mode,a=Qc({mode:`hidden`,children:a},i),r=Pi(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Jc(n),r.childLanes=Yc(e,o,n),t.memoizedState=qc,Lc(null,r)):(ko(t),Zc(t,a))}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(c!==null)return el(e,t,a,o,r,c,s,n)}return i?(Mo(),i=r.fallback,a=t.mode,s=e.child,c=s.sibling,r=ji(s,{mode:`hidden`,children:r.children}),r.subtreeFlags=s.subtreeFlags&1206910976,c===null?(i=Pi(i,a,n,null),i.flags|=2):i=ji(c,i),i.return=t,r.return=t,r.sibling=i,t.child=r,Lc(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Jc(n):(a=i.cachePool,a===null?a=Wa():(s=Oa._currentValue,a=a.parent===s?a:{parent:s,pool:s}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Yc(e,o,n),t.memoizedState=qc,Lc(e.child,r)):(ko(t),n=e.child,e=n.sibling,n=ji(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Zc(e,t){return t=Qc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Qc(e,t){return e=ki(22,e,null,t),e.lanes=0,e}function $c(e,t,n){return so(t,e.child,null,n),e=Zc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function el(e,t,n,r,a,o,s,c){if(n)return t.flags&256?(ko(t),t.flags&=-257,$c(e,t,c)):t.memoizedState===null?(Mo(),o=a.fallback,s=t.mode,a=Qc({mode:`visible`,children:a.children},s),o=Pi(o,s,c,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,so(t,e.child,null,c),a=t.child,a.memoizedState=Jc(c),a.childLanes=Yc(e,r,c),t.memoizedState=qc,Lc(null,a)):(Mo(),t.child=e.child,t.flags|=128,null);if(ko(t),sm(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,r!==``&&(a=Error(i(419)),a.stack=``,a.digest=r,da({value:a,source:null,stack:null})),$c(e,t,c)}if(jc||ya(e,t,c,!1),r=(c&e.childLanes)!==0,jc||r){if(So.current!==null)return $c(e,t,c);if(r=Zu,r!==null&&(a=gt(r,c),a!==0&&a!==s.retryLane))throw s.retryLane=a,wi(e,a),Md(r,e,a),Ac;return om(o)||Wd(),$c(e,t,c)}return om(o)?(t.flags|=192,t.child=e.child,null):(e=s.treeContext,ta=lm(o.nextSibling),ea=t,U=!0,na=null,ra=!1,e!==null&&$i(t,e),t=Zc(t,a.children),t.flags|=134221824,t)}function tl(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),_a(e.return,t,n)}function nl(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Lo(n)===null&&(t=e),e=e.sibling}return t}function rl(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function il(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function al(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=Po.current;if(t.flags&128)return Fo(t,o),null;var s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,Fo(t,o),i===`backwards`&&e!==null?(il(e),Mc(e,t,r,n),il(e)):Mc(e,t,r,n),r=U?Ui:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tl(e,n,t);else if(e.tag===19)tl(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=nl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,il(t)),rl(t,!0,i,null,a,r);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Lo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}rl(t,!0,n,null,a,r);break;case`together`:rl(t,!1,null,null,void 0,r);break;case`independent`:t.memoizedState=null;break;default:n=nl(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),rl(t,!1,i,n,a,r)}return t.child}function ol(e,t,n){var r=t.pendingProps;return ha(t,t.type,r.value),Mc(e,t,r.children,n),t.child}function sl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),id|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ya(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=ji(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ji(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cl(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ba(e)))}function ll(e,t,n){switch(t.tag){case 3:we(t,t.stateNode.containerInfo),ha(t,Oa,e.memoizedState.cache),la();break;case 27:case 5:Ee(t);break;case 4:we(t,t.stateNode.containerInfo);break;case 10:ha(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ao(t),null;break;case 13:var r=t.memoizedState;if(r!==null){if(r.dehydrated!==null)return ko(t),t.flags|=128,null;r=ya(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Xc(e,t,n):(ko(t),e=sl(e,t,n),e===null?null:e.sibling)}ko(t);break;case 19:if(t.flags&128)return al(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(ya(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return al(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Fo(t,Po.current),r)break;return null;case 22:return t.lanes=0,Ic(e,t,n,t.pendingProps);case 24:ha(t,Oa,e.memoizedState.cache)}return sl(e,t,n)}function ul(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)jc=!0;else{if(!cl(e,n)&&!(t.flags&128))return jc=!1,ll(e,t,n);jc=!!(e.flags&131072)}}else jc=!1,U&&t.flags&1048576&&Xi(t,Ui,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Za(t.elementType),t.type=e,typeof e==`function`)Ai(e)?(r=bc(e,r),t.tag=1,t=Gc(null,t,e,r,n)):(t.tag=0,t=Uc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===ae){t.tag=11,t=Nc(null,t,e,r,n);break a}if(a===se){t.tag=14,t=Pc(null,t,e,r,n);break a}if(a===A){t.tag=10,t.type=e,t=ol(null,t,n);break a}}throw t=he(e)||e,Error(i(306,t,``))}}return t;case 0:return Uc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=bc(r,t.pendingProps),Gc(e,t,r,a,n);case 3:a:{if(we(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,fo(e,t),yo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ha(t,Oa,r),r!==o.cache&&va(t,[Oa],n,!0),vo(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=Kc(e,t,r,n);break a}if(r!==a){a=zi(Error(i(424)),t),da(a),t=Kc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(ta=lm(e.firstChild),ea=t,U=!0,na=null,ra=!0,n=co(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(la(),r===a){t=sl(e,t,n);break a}Mc(e,t,r,n)}t=t.child}return t;case 26:return Hc(e,t),e===null?(n=Nm(t.type,null,t.pendingProps,null))?t.memoizedState=n:U||(t.stateNode=fp(t.type,t.pendingProps,Se.current,t)):t.memoizedState=Nm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ee(t),e===null&&U&&(r=t.stateNode=hm(t.type,t.pendingProps,Se.current),ea=t,ra=!0,a=ta,Sp(t.type)?(um=a,ta=lm(r.firstChild)):ta=a),Mc(e,t,t.pendingProps.children,n),Hc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&U&&((a=r=ta)&&(r=rm(r,t.type,t.pendingProps,ra),r===null?a=!1:(t.stateNode=r,ea=t,ta=lm(r.firstChild),ra=!1,a=!0)),a||aa(t)),Ee(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,pp(a,o)?r=null:s!==null&&pp(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Xo(e,t,$o,null,null,n),sh._currentValue=a),Hc(e,t),Mc(e,t,r,n),t.child;case 6:return e===null&&U&&((e=n=ta)&&(n=im(n,t.pendingProps,ra),n===null?e=!1:(t.stateNode=n,ea=t,ta=null,e=!0)),e||aa(t)),null;case 13:return Xc(e,t,n);case 4:return we(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=so(t,null,r,n):Mc(e,t,r,n),t.child;case 11:return Nc(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Hc(e,t),Mc(e,t,r,n),t.child;case 8:return Mc(e,t,t.pendingProps.children,n),t.child;case 12:return Mc(e,t,t.pendingProps.children,n),t.child;case 10:return ol(e,t,n);case 9:return a=t.type._context,r=t.pendingProps.children,xa(t),a=Sa(a),r=r(a),t.flags|=1,Mc(e,t,r,n),t.child;case 14:return Pc(e,t,t.type,t.pendingProps,n);case 15:return Fc(e,t,t.type,t.pendingProps,n);case 19:return al(e,t,n);case 31:return Vc(e,t,n);case 22:return Ic(e,t,n,t.pendingProps);case 24:return xa(t),r=Sa(Oa),e===null?(a=Ha(),a===null&&(a=Zu,o=ka(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},uo(t),ha(t,Oa,a)):((e.lanes&n)!==0&&(fo(e,t),yo(t,null,null,n),vo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ha(t,Oa,r),r!==a.cache&&va(t,[Oa],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ha(t,Oa,r))),Mc(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:U&&Zi(t),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Hc(e,t),Mc(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function dl(e){e.flags|=4}function fl(e,t,n,r,i){var a;if((a=!!(e.mode&32))&&(a=n===null?Jm(t,r):Jm(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(Vd())e.flags|=8192;else throw Qa=Ja,Ka}}else e.flags&=-16777217}function pl(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Ym(t)){if(Vd())e.flags|=8192;else throw Qa=Ja,Ka}}function ml(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:ut(),e.lanes|=t,cd|=t)}function hl(e,t){if(!U)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function gl(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _l(e,t,n){var r=t.pendingProps;switch(Qi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gl(t),null;case 1:return gl(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ga(Oa),Te(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ca(t)?dl(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ua())),gl(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(dl(t),o===null?(gl(t),fl(t,a,null,r,n)):(gl(t),pl(t,o))):o?o===e.memoizedState?(gl(t),t.flags&=-16777217):(dl(t),gl(t),pl(t,o)):(e=e.memoizedProps,e!==r&&dl(t),gl(t),fl(t,a,e,r,n)),null;case 27:if(De(t),n=Se.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&dl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return gl(t),t.subtreeFlags&=-33554433,null}e=be.current,ca(t)?oa(t,e):(e=hm(a,r,n),t.stateNode=e,dl(t))}return gl(t),t.subtreeFlags&=-33554433,null;case 5:if(De(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&dl(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return gl(t),t.subtreeFlags&=-33554433,null}if(o=be.current,ca(t))oa(t,o);else{var s=lp(Se.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[St]=t,o[Ct]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(np(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&dl(t)}}return gl(t),t.subtreeFlags&=-33554433,fl(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&dl(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=Se.current,ca(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=ea,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[St]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||$f(e.nodeValue,n)),e||aa(t,!0)}else e=lp(e).createTextNode(r),e[St]=t,t.stateNode=e}return gl(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ca(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[St]=t}else la(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;gl(t),e=!1}else n=ua(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(No(t),t):(No(t),null);if(t.flags&128)throw Error(i(558))}return gl(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ca(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[St]=t}else la(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;gl(t),a=!1}else a=ua(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(No(t),t):(No(t),null)}return No(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ml(t,t.updateQueue),gl(t),null);case 4:return Te(),e===null&&Uf(t.stateNode.containerInfo),t.flags|=67108864,gl(t),null;case 10:return ga(t.type),gl(t),null;case 19:if(Io(t),r=t.memoizedState,r===null)return gl(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)hl(r,!1);else{if(rd!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Lo(e),o!==null){for(t.flags|=128,hl(r,!1),e=o.updateQueue,t.updateQueue=e,ml(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Mi(n,e),n=n.sibling;return Fo(t,Po.current&1|2),U&&Yi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Be()>md&&(t.flags|=128,a=!0,hl(r,!1),t.lanes=4194304)}}else{if(!a){if(e=Lo(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,ml(t,e),hl(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!o.alternate&&!U)return gl(t),null}else 2*Be()-r.renderingStartTime>md&&n!==536870912&&(t.flags|=128,a=!0,hl(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Be(),e.sibling=null,o=Po.current,o=a?o&1|2:o&1,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||U?Fo(t,o):(n=o,R(Do,t),R(Po,n),Oo===null&&(Oo=t)),U&&Yi(t,r.treeForkCount),e}return gl(t),null;case 22:case 23:return No(t),Eo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(gl(t),t.subtreeFlags&6&&(t.flags|=8192)):gl(t),n=t.updateQueue,n!==null&&ml(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&ye(Va),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ga(Oa),gl(t),null;case 25:return null;case 30:return t.flags|=33554432,gl(t),null}throw Error(i(156,t.tag))}function vl(e,t){switch(Qi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ga(Oa),Te(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return De(t),null;case 31:if(t.memoizedState!==null){if(No(t),t.alternate===null)throw Error(i(340));la()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(No(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));la()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Io(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Te(),null;case 10:return ga(t.type),null;case 22:case 23:return No(t),Eo(),e!==null&&ye(Va),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ga(Oa),null;case 25:return null;default:return null}}function yl(e,t){switch(Qi(t),t.tag){case 3:ga(Oa),Te();break;case 26:case 27:case 5:De(t);break;case 4:Te();break;case 31:t.memoizedState!==null&&No(t);break;case 13:No(t);break;case 19:Io(t);break;case 10:ga(t.type);break;case 22:case 23:No(t),Eo(),e!==null&&ye(Va);break;case 24:ga(Oa)}}function bl(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){ff(t,t.return,e)}}function xl(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){ff(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){ff(t,t.return,e)}}function Sl(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{xo(t,n)}catch(t){ff(e,e.return,t)}}}function Cl(e,t,n){n.props=bc(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){ff(e,t,n)}}function wl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var i=e.stateNode,a=mi(e.memoizedProps,i);(i.ref===null||i.ref.name!==a)&&(i.ref=Pp(a)),r=i.ref;break;case 7:if(e.stateNode===null){var o=new Fp(e);h(e.child,!1,Qp,o,void 0,void 0),e.stateNode=o}r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){ff(e,t,n)}}function Tl(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){ff(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){ff(e,t,n)}else n.current=null}}function El(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)em(e.stateNode,t[n])}function Dl(e){for(var t=e.return;t!==null&&(Al(t)&&em(e.stateNode,t.stateNode),!kl(t));)t=t.return}function Ol(e){for(var t=e.return;t!==null&&(Al(t)&&tm(e.stateNode,t.stateNode),!kl(t));)t=t.return}function kl(e){return e.tag===5||e.tag===3||e.tag===27}function Al(e){return e&&e.tag===7&&e.stateNode!==null}function jl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){ff(e,e.return,t)}}function Ml(e,t,n){try{var r=e.stateNode;ip(r,e.type,n,t),r[Ct]=t}catch(t){ff(e,e.return,t)}}function Nl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Sp(e.type)||e.tag===4}function Pl(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Nl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Sp(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fl(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=vn)),El(e,r),z=!0;else if(i!==4&&(i===27&&(El(e,r),r=null,Sp(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Fl(e,t,n,r),e=e.sibling;e!==null;)Fl(e,t,n,r),e=e.sibling}function Il(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),El(e,r),z=!0;else if(i!==4&&(i===27&&(El(e,r),r=null,Sp(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Il(e,t,n,r),e=e.sibling;e!==null;)Il(e,t,n,r),e=e.sibling}function Ll(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);np(t,r,n),t[St]=e,t[Ct]=n}catch(t){ff(e,e.return,t)}}var Rl=!1,zl=null;function Bl(e){(e.tag===30||e.subtreeFlags&33554432)&&(Rl=!0)}var Vl=null;function Hl(){var e=Vl;return Vl=null,e}var Ul=0;function Wl(e,t,n,r,i){return Ul=0,Gl(e.child,t,n,r,i)}function Gl(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=Op(o);r.push(s),s.view&&(a=!0)}else a||Op(o).view&&(a=!0);Rl=!0,Tp(o,Ul===0?t:t+`_`+Ul,n),Ul++}else e.tag===22&&e.memoizedState!==null||e.tag===30&&i||Gl(e.child,t,n,r,i)&&(a=!0);e=e.sibling}return a}function Kl(e,t){for(;e!==null;)e.tag===5?Ep(e.stateNode,e.memoizedProps):e.tag===22&&e.memoizedState!==null||e.tag===30&&t||Kl(e.child,t),e=e.sibling}function ql(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(ql(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(i(544));var n=t.name;t=gi(t.default,t.share),t!==`none`&&(Wl(e,n,t,null,!1)||Kl(e.child,!1))}e=e.sibling}}function Jl(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=mi(r,n),a=gi(r.default,n.paired?r.share:r.enter);a===`none`?ql(e):Wl(e,i,a,null,!1)?(ql(e),n.paired||t||jd(e,r.onEnter)):Kl(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Jl(e,t),e=e.sibling;else ql(e)}function Yl(e){if(zl!==null&&zl.size!==0){var t=zl;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=gi(n.default,n.share);if(a!==`none`&&(Wl(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,jd(e,n.onShare)):Kl(e.child,!1)),t.delete(r),t.size===0)break}}}Yl(e)}e=e.sibling}}}function Xl(e){if(e.tag===30){var t=e.memoizedProps,n=mi(t,e.stateNode),r=zl===null?void 0:zl.get(n),i=gi(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Wl(e,n,i,null,!1)?r===void 0?jd(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,zl.delete(n),jd(e,t.onShare)):Kl(e.child,!1)),zl!==null&&Yl(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Xl(e),e=e.sibling;else zl!==null&&Yl(e)}function Zl(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=mi(t,e.stateNode);t=gi(t.default,t.update),e.flags&=-5,t!==`none`&&Wl(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Zl(e);e=e.sibling}}function Ql(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Kl(e.child,!1))}Ql(e)}e=e.sibling}}function $l(e){if(e.tag===30)e.stateNode.paired=null,Kl(e.child,!1),Ql(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)$l(e),e=e.sibling;else Ql(e)}function eu(e){for(e=e.child;e!==null;)e.tag===30?Kl(e.child,!1):e.subtreeFlags&33554432&&eu(e),e=e.sibling}function tu(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&Ul<a.length){var l=a[Ul],u=Op(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&Tp(c,Ul===0?n:n+`_`+Ul,i),s&&e.flags&4||(Vl===null&&(Vl=[]),Vl.push(c,Ul===0?r:r+`_`+Ul,t.memoizedProps)),Ul++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:tu(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function nu(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=mi(n,r),a=gi(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(kp)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child;Ul=0,i=tu(r,s,i,i,a,o,!1),e.flags&4&&i&&(t||jd(e,n.onUpdate))}else e.subtreeFlags&33554432&&nu(e,t);e=e.sibling}}var ru=!1,K=!1,iu=!1,au=!1,ou=typeof WeakSet==`function`?WeakSet:Set,su=null,cu=!1,lu=!1,uu=!1,du=!1;function fu(e,t,n){if(e=e.containerInfo,sp=gh,e=Wr(e),Gr(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(cp={focusedElem:e,selectionRange:r},gh=!1,n=(n&335544064)===n,su=t,t=n?9270:1024;su!==null;){if(e=su,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Xl(r[a]);if(e.alternate===null&&e.flags&2)n&&Bl(e),pu(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Xl(r),pu(n);continue}if(r!==null&&r.memoizedState!==null){n&&Bl(e),pu(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,su=r):(n&&Zl(e),pu(n))}}zl=null}function pu(e){for(;su!==null;){var t=su,n=e,r=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if(a&1024&&r!==null){n=void 0,a=r.memoizedProps,r=r.memoizedState;var o=t.stateNode;try{var s=bc(t.type,a);n=o.getSnapshotBeforeUpdate(s,r),o.__reactInternalSnapshotBeforeUpdate=n}catch(e){ff(t,t.return,e)}}break;case 3:if(a&1024){if(r=t.stateNode.containerInfo,n=r.nodeType,n===9)nm(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:nm(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=mi(r.memoizedProps,r.stateNode),a=t.memoizedProps,a=gi(a.default,a.update),a!==`none`&&Wl(r,n,a,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(i(163))}if(r=t.sibling,r!==null){r.return=t.return,su=r;break}su=t.return}}function mu(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Pu(e,n),r&4&&bl(5,n);break;case 1:if(Pu(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){ff(n,n.return,e)}else{var i=bc(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){ff(n,n.return,e)}}}r&64&&Sl(n),r&512&&wl(n,n.return);break;case 3:if(Pu(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{xo(e,t)}catch(e){ff(n,n.return,e)}}break;case 27:t===null&&r&4&&Ll(n);case 26:case 5:Pu(e,n),t===null&&r&4&&jl(n),r&512&&wl(n,n.return);break;case 12:Pu(e,n);break;case 31:Pu(e,n),r&4&&Cu(e,n);break;case 13:Pu(e,n),r&4&&wu(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=gf.bind(null,n),cm(e,n))));break;case 22:if(r=n.memoizedState!==null||ru,!r){var a=t!==null&&t.memoizedState!==null||K;t=ru,i=K,ru=r,(K=a)&&!i?(r=2,n.subtreeFlags&8772&&(r|=1),q(e,n,r)):Pu(e,n),ru=t,K=i}break;case 30:Pu(e,n),r&512&&wl(n,n.return);break;case 7:r&512&&wl(n,n.return);default:Pu(e,n)}}function hu(e,t){for(e=e.child;e!==null;)gu(e,t),e=e.sibling}function gu(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var r=n.style;typeof r.setProperty==`function`?r.setProperty(`display`,`none`,`important`):r.display=`none`}else{var i=e.stateNode,a=e.memoizedProps.style,o=a!=null&&a.hasOwnProperty(`display`)?a.display:null;i.style.display=o==null||typeof o==`boolean`?``:(``+o).trim()}}catch(t){ff(e,e.return,t)}_u(e,t);break;case 6:try{e.stateNode.nodeValue=t?``:e.memoizedProps,z=!0}catch(t){ff(e,e.return,t)}break;case 18:try{var s=e.stateNode;t?wp(s,!0):wp(e.stateNode,!1)}catch(t){ff(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&hu(e,t);break;default:hu(e,t)}}function _u(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:gu(n,r);break a;case 22:n.memoizedState===null&&_u(n,r);break a;default:_u(n,r)}}e=e.sibling}}function vu(e){var t=e.alternate;t!==null&&(e.alternate=null,vu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&jt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var yu=null,bu=!1;function xu(e,t,n){for(n=n.child;n!==null;)Su(e,t,n),n=n.sibling}function Su(e,t,n){if(Xe&&typeof Xe.onCommitFiberUnmount==`function`)try{Xe.onCommitFiberUnmount(Ye,n)}catch{}switch(n.tag){case 26:K||Tl(n,t),xu(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!K&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:K||Tl(n,t),Ol(n);var r=yu,i=bu;Sp(n.type)&&(yu=n.stateNode,bu=!1),xu(e,t,n),gm(n.stateNode,n.type,n.memoizedProps),yu=r,bu=i;break;case 5:K||Tl(n,t),Ol(n);case 6:if(n.tag===6&&Ol(n),r=yu,i=bu,yu=null,xu(e,t,n),yu=r,bu=i,yu!==null){if(bu)try{(yu.nodeType===9?yu.body:yu.nodeName===`HTML`?yu.ownerDocument.body:yu).removeChild(n.stateNode),z=!0}catch(e){ff(n,t,e)}else try{yu.removeChild(n.stateNode),z=!0}catch(e){ff(n,t,e)}}break;case 18:yu!==null&&(bu?(e=yu,Cp(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Hh(e)):Cp(yu,n.stateNode));break;case 4:r=yu,i=bu,yu=n.stateNode.containerInfo,bu=!0,xu(e,t,n),yu=r,bu=i;break;case 0:case 11:case 14:case 15:xl(2,n,t),K||xl(4,n,t),xu(e,t,n);break;case 1:K||(Tl(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Cl(n,t,r)),xu(e,t,n);break;case 21:xu(e,t,n);break;case 22:K=(r=K)||n.memoizedState!==null,xu(e,t,n),K=r;break;case 30:Tl(n,t),xu(e,t,n);break;case 7:K||Tl(n,t),xu(e,t,n);break;default:xu(e,t,n)}}function Cu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Hh(e)}catch(e){ff(t,t.return,e)}}}function wu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Hh(e)}catch(e){ff(t,t.return,e)}}function Tu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ou),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ou),t;default:throw Error(i(435,e.tag))}}function Eu(e,t){var n=Tu(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=_f.bind(null,e,t);t.then(r,r)}})}function Du(e,t,n){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var o=r[a],s=e,c=t,l=c;a:for(;l!==null;){switch(l.tag){case 27:if(Sp(l.type)){yu=l.stateNode,bu=!1;break a}break;case 5:yu=l.stateNode,bu=!1;break a;case 3:case 4:yu=l.stateNode.containerInfo,bu=!0;break a}l=l.return}if(yu===null)throw Error(i(160));Su(s,c,o),yu=null,bu=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ku(t,e,n),t=t.sibling}var Ou=null;function ku(e,t,n){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(a&4&&(r=e.updateQueue,r=r===null?null:r.events,r!==null))for(var o=0;o<r.length;o++){var s=r[o];s.ref.impl=s.nextImpl}Du(t,e,n),Au(e),a&4&&(xl(3,e,e.return),bl(3,e),xl(5,e,e.return));break;case 1:Du(t,e,n),Au(e),a&512&&(K||r===null||Tl(r,r.return)),a&64&&ru&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(o=Ou,Du(t,e,n),Au(e),a&512&&(K||r===null||Tl(r,r.return)),a&4){if(a=r===null?null:r.memoizedState,n=e.memoizedState,r===null){if(n===null){if(e.stateNode===null){if(ru)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,a=o.ownerDocument||o;b:switch(t){case`title`:r=a.getElementsByTagName(`title`)[0],(!r||r[kt]||r[St]||r.namespaceURI===`http://www.w3.org/2000/svg`||r.hasAttribute(`itemprop`))&&(r=a.createElement(t),a.head.insertBefore(r,a.querySelector(`head > title`))),np(r,t,n),r[St]=e,It(r),t=r;break a;case`link`:if(o=Gm(`link`,`href`,a).get(t+(n.href||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&r.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&r.getAttribute(`title`)===(n.title==null?null:n.title)&&r.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;case`meta`:if(o=Gm(`meta`,`content`,a).get(t+(n.content||``))){for(s=0;s<o.length;s++)if(r=o[s],r.getAttribute(`content`)===(n.content==null?null:``+n.content)&&r.getAttribute(`name`)===(n.name==null?null:n.name)&&r.getAttribute(`property`)===(n.property==null?null:n.property)&&r.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(s,1);break b}}r=a.createElement(t),np(r,t,n),a.head.appendChild(r);break;default:throw Error(i(468,t))}r[St]=e,It(r),t=r}e.stateNode=t}}else ru||Km(o,e.type,e.stateNode)}else e.stateNode=Bm(o,n,e.memoizedProps)}else a===n?n===null&&e.stateNode!==null&&Ml(e,e.memoizedProps,r.memoizedProps):(a===null?(t=r.stateNode,t===null||K||t.parentNode.removeChild(t)):a.count--,n===null?ru||Km(o,e.type,e.stateNode):Bm(o,n,e.memoizedProps))}break;case 27:Du(t,e,n),Au(e),a&512&&(K||r===null||Tl(r,r.return)),r!==null&&a&4&&Ml(e,e.memoizedProps,r.memoizedProps);break;case 5:if(o=iu,iu=!1,Du(t,e,n),iu=o,Au(e),a&512&&(K||r===null||Tl(r,r.return)),e.flags&32){t=e.stateNode;try{un(t,``),z=!0}catch(t){ff(e,e.return,t)}}a&4&&e.stateNode!=null&&(t=e.memoizedProps,Ml(e,t,r===null?t:r.memoizedProps)),a&1024&&(au=!0);break;case 6:if(Du(t,e,n),Au(e),a&4){if(e.stateNode===null)throw Error(i(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,z=!0}catch(t){ff(e,e.return,t)}}break;case 3:if(z=!1,Wm=null,o=Ou,Ou=bm(t.containerInfo),Du(t,e,n),Ou=o,Au(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Hh(t.containerInfo)}catch(t){ff(e,e.return,t)}au&&(au=!1,ju(e)),z=!1;break;case 4:a=iu,iu=ru,r=Kt(),o=Ou,Ou=bm(e.stateNode.containerInfo),Du(t,e,n),Au(e),Ou=o,z&&lu&&(uu=!0),z=r,iu=a;break;case 12:Du(t,e,n),Au(e);break;case 31:Du(t,e,n),Au(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Eu(e,t)));break;case 13:Du(t,e,n),Au(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(fd=Be()),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Eu(e,t)));break;case 22:o=e.memoizedState!==null,s=r!==null&&r.memoizedState!==null;var c=ru,l=K,u=iu;ru=c||o,iu=u||o,K=l||s,Du(t,e,n),K=l,iu=u,ru=c,Au(e),a&8192&&(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,!o||r===null||s||ru||K||(t=s||K,n=ru,r=K,ru=o||ru,K=t,Fu(e,2),ru=n,K=r),!o&&iu||hu(e,o)),a&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Eu(e,n))));break;case 19:Du(t,e,n),Au(e),a&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Eu(e,t)));break;case 30:a&512&&(K||r===null||Tl(r,r.return)),a=Kt(),o=lu,s=(n&335544064)===n,c=e.memoizedProps,lu=s&&gi(c.default,c.update)!==`none`,Du(t,e,n),Au(e),s&&r!==null&&z&&(e.flags|=4),lu=o,z=a;break;case 21:break;case 7:a&512&&(K||r===null||Tl(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Du(t,e,n),Au(e)}}function Au(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Nl(r)){n=r;break}r=r.return}r=null;for(var a=e.return;a!==null;){if(Al(a)){var o=a.stateNode;r===null?r=[o]:r.push(o)}if(kl(a))break;a=a.return}var s=r;if(n==null)throw Error(i(160));switch(n.tag){case 27:var c=n.stateNode;Il(e,Pl(e),c,s);break;case 5:var l=n.stateNode;n.flags&32&&(un(l,``),n.flags&=-33),Il(e,Pl(e),l,s);break;case 3:case 4:var u=n.stateNode.containerInfo;Fl(e,Pl(e),u,s);break;default:throw Error(i(161))}}catch(t){ff(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ju(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ju(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gh=!0,t.reset(),gh=!1),e=e.sibling}}function Mu(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)Nu(t,e),t=t.sibling;else nu(t,!1)}function Nu(e,t){var n=e.alternate;if(n===null)Jl(e,!1);else switch(e.tag){case 3:if(du=cu=!1,Hl(),Mu(t,e),!cu&&!uu){if(e=Vl,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];Ep(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),du=!0}Vl=null;break;case 5:Mu(t,e);break;case 4:r=cu,cu=!1,Mu(t,e),cu&&(uu=!0),cu=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Mu(t,e):Jl(e,!1));break;case 30:r=cu,i=Hl(),cu=!1,Mu(t,e),cu&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=mi(a,o),o=mi(n.memoizedProps,o);var s=gi(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Ul=0,t=tu(e,n,t,o,s,a,!0),Ul!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(jd(e,e.memoizedProps.onUpdate),Vl=i):i!==null&&(i.push.apply(i,Vl),Vl=i),cu=e.flags&32?!0:r;break;default:Mu(t,e)}}function Pu(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)mu(e,t.alternate,t),t=t.sibling}function Fu(e,t){for(e=e.child;e!==null;){var n=e,r=t;switch(n.tag){case 0:case 11:case 14:case 15:xl(4,n,n.return),Fu(n,r);break;case 1:Tl(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount==`function`&&Cl(n,n.return,i),Fu(n,r);break;case 27:r&2&&gm(n.stateNode,n.type,n.memoizedProps);case 5:Tl(n,n.return),n.tag!==5&&n.tag!==27||Ol(n),Fu(n,r);break;case 6:Ol(n);break;case 26:Tl(n,n.return),i=n.stateNode,n.memoizedState!==null||i===null||K||i.parentNode.removeChild(i),Fu(n,r);break;case 22:n.memoizedState===null&&Fu(n,r);break;case 30:Tl(n,n.return),Fu(n,r);break;case 7:Tl(n,n.return);default:Fu(n,r)}e=e.sibling}}function q(e,t,n){for(n=t.subtreeFlags&8772?n:n&-2,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags,s=!!(n&1);switch(a.tag){case 0:case 11:case 15:q(i,a,n),bl(4,a);break;case 1:if(q(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){ff(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var c=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)bo(l[i],c)}catch(e){ff(r,r.return,e)}}s&&o&64&&Sl(a),wl(a,a.return);break;case 27:n&2&&Ll(a);case 5:a.tag!==5&&a.tag!==27||Dl(a),q(i,a,n),s&&r===null&&o&4&&jl(a),wl(a,a.return);break;case 6:Dl(a);break;case 26:c=a.stateNode,a.memoizedState!==null||c===null||ru||Km(bm(c.ownerDocument),a.type,c),q(i,a,n),s&&r===null&&o&4&&jl(a),wl(a,a.return);break;case 12:q(i,a,n);break;case 31:q(i,a,n),s&&o&4&&Cu(i,a);break;case 13:q(i,a,n),s&&o&4&&wu(i,a);break;case 22:a.memoizedState===null&&q(i,a,n),wl(a,a.return);break;case 30:q(i,a,n),wl(a,a.return);break;case 7:wl(a,a.return);default:q(i,a,n)}t=t.sibling}}function Iu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Aa(n))}function Lu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Aa(e))}function J(e,t,n,r){var i=(n&335544064)===n;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)Ru(e,t,n,r),t=t.sibling;else i&&eu(t)}function Ru(e,t,n,r){var i=(n&335544064)===n;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&$l(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:J(e,t,n,r),a&2048&&bl(9,t);break;case 1:J(e,t,n,r);break;case 3:J(e,t,n,r),i&&du&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,e.style.viewTransitionName===`root`&&(e.style.viewTransitionName=``),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===`none`&&(e.style.viewTransitionName=``)),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&Aa(a)));break;case 12:if(a&2048){J(e,t,n,r),a=t.stateNode;try{var o=t.memoizedProps,s=o.id,c=o.onPostCommit;typeof c==`function`&&c(s,t.alternate===null?`mount`:`update`,a.passiveEffectDuration,-0)}catch(e){ff(t,t.return,e)}}else J(e,t,n,r);break;case 31:J(e,t,n,r);break;case 13:J(e,t,n,r);break;case 23:break;case 22:o=t.stateNode,s=t.alternate,t.memoizedState===null?(i&&s!==null&&s.memoizedState!==null&&$l(t),o._visibility&2?J(e,t,n,r):(o._visibility|=2,zu(e,t,n,r,!!(t.subtreeFlags&10256)||!1))):(i&&s!==null&&s.memoizedState===null&&$l(s),o._visibility&2?J(e,t,n,r):Bu(e,t)),a&2048&&Iu(s,t);break;case 24:J(e,t,n,r),a&2048&&Lu(t.alternate,t);break;case 30:i&&(a=t.alternate,a!==null&&(Kl(a.child,!0),Kl(t.child,!0))),J(e,t,n,r);break;default:J(e,t,n,r)}}function zu(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:zu(a,o,s,c,i),bl(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,zu(a,o,s,c,i)):u._visibility&2?zu(a,o,s,c,i):Bu(a,o),i&&l&2048&&Iu(o.alternate,o);break;case 24:zu(a,o,s,c,i),i&&l&2048&&Lu(o.alternate,o);break;default:zu(a,o,s,c,i)}t=t.sibling}}function Bu(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Bu(n,r),i&2048&&Iu(r.alternate,r);break;case 24:Bu(n,r),i&2048&&Lu(r.alternate,r);break;default:Bu(n,r)}t=t.sibling}}var Vu=8192;function Hu(e,t,n){if(e.subtreeFlags&Vu)for(e=e.child;e!==null;)Uu(e,t,n),e=e.sibling}function Uu(e,t,n){switch(e.tag){case 26:Hu(e,t,n),e.flags&Vu&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Zm(n,e)):Qm(n,Ou,e.memoizedState,e.memoizedProps));break;case 5:Hu(e,t,n),e.flags&Vu&&(e=e.stateNode,(t&335544128)===t&&Zm(n,e));break;case 3:case 4:var r=Ou;Ou=bm(e.stateNode.containerInfo),Hu(e,t,n),Ou=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Vu,Vu=16777216,Hu(e,t,n),Vu=r):Hu(e,t,n));break;case 30:if((e.flags&Vu)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,zl===null&&(zl=new Map),zl.set(r,i)}Hu(e,t,n);break;default:Hu(e,t,n)}}function Wu(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Gu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];su=r,Ju(r,e)}Wu(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ku(e),e=e.sibling}function Ku(e){switch(e.tag){case 0:case 11:case 15:Gu(e),e.flags&2048&&xl(9,e,e.return);break;case 3:Gu(e);break;case 12:Gu(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,qu(e)):Gu(e);break;default:Gu(e)}}function qu(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];su=r,Ju(r,e)}Wu(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:xl(8,t,t.return),qu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,qu(t));break;default:qu(t)}e=e.sibling}}function Ju(e,t){for(;su!==null;){var n=su;switch(n.tag){case 0:case 11:case 15:xl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Aa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,su=r;else a:for(n=e;su!==null;){r=su;var i=r.sibling,a=r.return;if(vu(r),r===n){su=null;break a}if(i!==null){i.return=a,su=i;break a}su=a}}}var Yu={getCacheForType:function(e){var t=Sa(Oa),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Sa(Oa).controller.signal}},Xu=typeof WeakMap==`function`?WeakMap:Map,Y=0,Zu=null,X=null,Z=0,Q=0,Qu=null,$u=!1,ed=!1,td=!1,nd=0,rd=0,id=0,ad=0,od=0,sd=0,cd=0,ld=null,ud=null,dd=!1,fd=0,pd=0,md=1/0,hd=null,gd=null,_d=0,vd=null,yd=null,bd=0,xd=0,Sd=null,Cd=null,wd=null,Td=null,Ed=null,Dd=0,Od=null;function kd(){return Y&2&&Z!==0?Z&-Z:P.T===null?yt():Nf()}function Ad(){if(sd===0){if(!(Z&536870912)||U){var e=rt;rt<<=1,!(rt&3932160)&&(rt=262144),sd=e}else sd=536870912}return e=Do.current,e!==null&&(e.flags|=32),sd}function jd(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Pp(mi(e.memoizedProps,n))),Td===null&&(Td=[]),Td.push(t.bind(null,r))}}function Md(e,t,n){(e===Zu&&(Q===2||Q===9)||e.cancelPendingCommit!==null)&&(zd(e,0),Id(e,Z,sd,!1)),ft(e,n),Y&2&&e===Zu||(e===Zu&&(!(Y&2)&&(ad|=n),rd===4&&Id(e,Z,sd,!1)),Tf(e))}function Nd(e,t,n){if(Y&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||st(e,t),a=r?qd(e,t):Gd(e,t,!0),o=r;do{if(a===0){ed&&!r&&Id(e,t,0,!1);break}if(n=e.current.alternate,o&&!Fd(n))a=Gd(e,t,!1),o=!1;else{if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=ld;var l=c.current.memoizedState.isDehydrated;if(l&&(zd(c,s).flags|=256),s=Gd(c,s,!1),s!==2&&s!==6){if(td&&!l){c.errorRecoveryDisabledLanes|=o,ad|=o,a=4;break a}o=ud,ud=a,o!==null&&(ud===null?ud=o:ud.push.apply(ud,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){zd(e,0),Id(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Id(r,t,sd,!$u);break a;case 2:ud=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=fd+300-Be(),10<a)){if(Id(r,t,sd,!$u),ot(r,0,!0)!==0)break a;bd=t,r.timeoutHandle=gp(Pd.bind(null,r,n,ud,hd,dd,t,sd,ad,cd,$u,o,`Throttled`,-0,0),a);break a}Pd(r,n,ud,hd,dd,t,sd,ad,cd,$u,o,null,-0,0)}break}}while(1);Tf(e)}function Pd(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=-1;var m=t.subtreeFlags,h=(a&335544064)===a;d=null,(h||m&8192||(m&16785408)==16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:vn},zl=null,Uu(t,a,d),h&&(m=d,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=nh.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?fd-Be():(a&4194048)===a?pd-Be():0,m=eh(d,m),m!==null)?(bd=a,e.cancelPendingCommit=m(ef.bind(null,e,t,a,n,r,i,o,s,c,l,u,d,null,f,p)),Id(e,a,o,!l)):ef(e,t,a,n,r,i,o,s,c,l,u,d)}function Fd(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Rr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Id(e,t,n,r){t=ct(e,t),t&=~od,t&=~ad,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Qe(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&mt(e,n,t)}function Ld(){return Y&6?!0:(Ef(0,!1),!1)}function Rd(){if(X!==null){if(Q===0)var e=X.return;else e=X,ma=pa=null,ns(e),to=null,no=0,e=X;for(;e!==null;)yl(e.alternate,e),e=e.return;X=null}}function zd(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,_p(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),bd=0,Rd(),Zu=e,X=n=ji(e.current,null),Z=t,Q=0,Qu=null,$u=!1,ed=st(e,t),td=!1,cd=sd=od=ad=id=rd=0,ud=ld=null,dd=!1,nd=ct(e,t),xi(),n}function Bd(e,t){G=null,P.H=fc,t===Ga||t===qa?(t=$a(),Q=3):t===Ka?(t=$a(),Q=4):Q=t===Ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Qu=t,X===null&&(rd=1,wc(e,zi(t,e.current)))}function Vd(){var e=Do.current;return e===null?!0:(Z&4194048)===Z?Oo===null:(Z&62914560)===Z||Z&536870912?e===Oo:!1}function Hd(){var e=P.H;return P.H=fc,e===null?fc:e}function Ud(){var e=P.A;return P.A=Yu,e}function Wd(){rd=4,$u||(Z&4194048)!==Z&&Do.current!==null||(ed=!0),!(id&134217727)&&!(ad&134217727)||Zu===null||Id(Zu,Z,sd,!1)}function Gd(e,t,n){var r=Y;Y|=2;var i=Hd(),a=Ud();(Zu!==e||Z!==t)&&(hd=null,zd(e,t)),t=!1;var o=rd;a:do try{if(Q!==0&&X!==null){var s=X,c=Qu;switch(Q){case 8:Rd(),o=6;break a;case 3:case 2:case 9:case 6:Do.current===null&&(t=!0);var l=Q;if(Q=0,Qu=null,Zd(e,s,c,l),n&&ed){o=0;break a}break;default:l=Q,Q=0,Qu=null,Zd(e,s,c,l)}}Kd(),o=rd;break}catch(t){Bd(e,t)}while(1);return t&&e.shellSuspendCounter++,ma=pa=null,Y=r,P.H=i,P.A=a,X===null&&(Zu=null,Z=0,xi()),o}function Kd(){for(;X!==null;)Yd(X)}function qd(e,t){var n=Y;Y|=2;var r=Hd(),a=Ud();Zu!==e||Z!==t?(hd=null,md=Be()+500,zd(e,t)):ed=st(e,t);a:do try{if(Q!==0&&X!==null){t=X;var o=Qu;b:switch(Q){case 1:Q=0,Qu=null,Zd(e,t,o,1);break;case 2:case 9:if(Ya(o)){Q=0,Qu=null,Xd(t);break}t=function(){Q!==2&&Q!==9||Zu!==e||(Q=7),Tf(e)},o.then(t,t);break a;case 3:Q=7;break a;case 4:Q=5;break a;case 7:Ya(o)?(Q=0,Qu=null,Xd(t)):(Q=0,Qu=null,Zd(e,t,o,7));break;case 5:var s=null;switch(X.tag){case 26:s=X.memoizedState;case 5:case 27:var c=X;if(s?Ym(s):c.stateNode.complete){Q=0,Qu=null;var l=c.sibling;if(l!==null)X=l;else{var u=c.return;u===null?X=null:(X=u,Qd(u))}break b}}Q=0,Qu=null,Zd(e,t,o,5);break;case 6:Q=0,Qu=null,Zd(e,t,o,6);break;case 8:Rd(),rd=6;break a;default:throw Error(i(462))}}Jd();break}catch(t){Bd(e,t)}while(1);return ma=pa=null,P.H=r,P.A=a,Y=n,X===null?(Zu=null,Z=0,xi(),rd):0}function Jd(){for(;X!==null&&!Re();)Yd(X)}function Yd(e){var t=ul(e.alternate,e,nd);e.memoizedProps=e.pendingProps,t===null?Qd(e):X=t}function Xd(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Wc(n,t,t.pendingProps,t.type,void 0,Z);break;case 11:t=Wc(n,t,t.pendingProps,t.type.render,t.ref,Z);break;case 5:ns(t);var r=t;r===ea&&(U?(sa(r),r.tag===5&&r.stateNode!=null&&(ta=r.stateNode)):(sa(r),U=!0));default:yl(n,t),t=X=Mi(t,nd),t=ul(n,t,nd)}e.memoizedProps=e.pendingProps,t===null?Qd(e):X=t}function Zd(e,t,n,r){ma=pa=null,ns(t),to=null,no=0;var i=t.return;try{if(kc(e,i,t,n,Z)){rd=1,wc(e,zi(n,e.current)),X=null;return}}catch(t){if(i!==null)throw X=i,t;rd=1,wc(e,zi(n,e.current)),X=null;return}t.flags&32768?(U||r===1?e=!0:ed||Z&536870912?e=!1:($u=e=!0,(r===2||r===9||r===3||r===6)&&(r=Do.current,r!==null&&r.tag===13&&(r.flags|=16384))),$d(t,e)):Qd(t)}function Qd(e){var t=e;do{if(t.flags&32768){$d(t,$u);return}e=t.return;var n=_l(t.alternate,t,nd);if(n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);rd===0&&(rd=5)}function $d(e,t){do{var n=vl(e.alternate,e);if(n!==null){n.flags&=32767,X=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){X=e;return}X=e=n}while(e!==null);rd=6,X=null}function ef(e,t,n,r,a,o,s,c,l,u,d,f){e.cancelPendingCommit=null;do lf();while(_d!==0);if(Y&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));e===Zu&&(X=Zu=null,Z=0),yd=t,vd=e,bd=n,Sd=a,Cd=r,tf(e,t,n,s,c,l,f)}}function tf(e,t,n,r,i,a,o){var s=t.lanes|t.childLanes;if(xd=s,s|=bi,pt(e,n,s,r,i,a),Td=null,(n&335544064)===n?(Ed=Na(e),r=10262):(Ed=null,r=10256),(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,vf(We,function(){return uf(),null})):(e.callbackNode=null,e.callbackPriority=0),Rl=!1,r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=P.T,P.T=null,i=F.p,F.p=2,a=Y,Y|=4;try{fu(e,t,n)}finally{Y=a,F.p=i,P.T=r}}_d=1,Rl?wd=Mp(o,e.containerInfo,Ed,af,of,rf,sf,uf,nf,null,null):(af(),of(),sf())}function nf(e){if(_d!==0){var t=vd.onRecoverableError;t(e,{componentStack:null})}}function rf(){_d===3&&(_d=0,Nu(yd,vd),_d=4)}function af(){if(_d===1){_d=0;var e=vd,t=yd,n=bd,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=P.T,P.T=null;var i=F.p;F.p=2;var a=Y;Y|=4;try{lu=uu=!1,ku(t,e,n),n=cp;var o=Wr(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ur(s.ownerDocument.documentElement,s)){if(c!==null&&Gr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Hr(s,h),v=Hr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}gh=!!sp,cp=sp=null}finally{Y=a,F.p=i,P.T=r}}e.current=t,_d=2}}function of(){if(_d===2){_d=0;var e=vd,t=yd,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=P.T,P.T=null;var r=F.p;F.p=2;var i=Y;Y|=4;try{mu(e,t.alternate,t)}finally{Y=i,F.p=r,P.T=n}}_d=3}}function sf(){if(_d===4||_d===3){_d=0;var e=wd;wd=null,ze();var t=vd,n=yd,r=bd,i=Cd,a=(r&335544064)===r?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?_d=5:(_d=0,yd=vd=null,cf(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(gd=null),vt(r),n=n.stateNode,Xe&&typeof Xe.onCommitFiberRoot==`function`)try{Xe.onCommitFiberRoot(Ye,n,void 0,(n.current.flags&128)==128)}catch{}if(i!==null){n=P.T,a=F.p,F.p=2,P.T=null;try{for(var o=t.onRecoverableError,s=0;s<i.length;s++){var c=i[s];o(c.value,{componentStack:c.stack})}}finally{P.T=n,F.p=a}}if(i=Td,o=Ed,Ed=null,i!==null&&(Td=null,o===null&&(o=[]),e!==null))for(c=0;c<i.length;c++)n=(0,i[c])(o),n!==void 0&&e.finished.finally(n);bd&3&&lf(),Tf(t),a=t.pendingLanes,r&261930&&a&42?t===Od?Dd++:(Dd=0,Od=t):(Dd=0,Od=null),Ef(0,!1)}}function cf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Aa(t)))}function lf(){return wd!==null&&(wd.skipTransition(),wd=null),af(),of(),sf(),uf()}function uf(){if(_d!==5)return!1;var e=vd,t=xd;xd=0;var n=vt(bd),r=P.T,a=F.p;try{F.p=32>n?32:n,P.T=null,n=Sd,Sd=null;var o=vd,s=bd;if(_d=0,yd=vd=null,bd=0,Y&6)throw Error(i(331));var c=Y;if(Y|=4,Ku(o.current),Ru(o,o.current,s,n),Y=c,Ef(0,!1),Xe&&typeof Xe.onPostCommitFiberRoot==`function`)try{Xe.onPostCommitFiberRoot(Ye,o)}catch{}return!0}finally{F.p=a,P.T=r,cf(e,t)}}function df(e,t,n){t=zi(n,t),t=Ec(e.stateNode,t,2),e=mo(e,t,2),e!==null&&(ft(e,2),Tf(e))}function ff(e,t,n){if(e.tag===3)df(e,e,n);else for(;t!==null;){if(t.tag===3){df(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(gd===null||!gd.has(r))){e=zi(n,e),n=Dc(2),r=mo(t,n,2),r!==null&&(Oc(n,r,t,e),ft(r,2),Tf(r));break}}t=t.return}}function pf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Xu;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(td=!0,i.add(n),e=mf.bind(null,e,t,n),t.then(e,e))}function mf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Zu===e&&(Z&n)===n&&(rd===4||rd===3&&(Z&62914560)===Z&&300>Be()-fd?Y&2?od|=n:zd(e,0):od|=n,cd===Z&&(cd=0)),Tf(e)}function hf(e,t){t===0&&(t=ut()),e=wi(e,t),e!==null&&(ft(e,t),Tf(e))}function gf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),hf(e,n)}function _f(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),hf(e,n)}function vf(e,t){return Ie(e,t)}var yf=null,bf=null,xf=!1,Sf=!1,Cf=!1,wf=0;function Tf(e){e!==bf&&e.next===null&&(bf===null?yf=bf=e:bf=bf.next=e),Sf=!0,xf||(xf=!0,Mf())}function Ef(e,t){if(!Cf&&Sf){Cf=!0;do for(var n=!1,r=yf;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Qe(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,jf(r,a))}else a=Z,a=ot(r,r===Zu?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||st(r,a)||(n=!0,jf(r,a))}r=r.next}while(n);Cf=!1}}function Df(){Of()}function Of(){Sf=xf=!1;var e=0;wf!==0&&hp()&&(e=wf);for(var t=Be(),n=null,r=yf;r!==null;){var i=r.next,a=kf(r,t);a===0?(r.next=null,n===null?yf=i:n.next=i,i===null&&(bf=n)):(n=r,(e!==0||a&3)&&(Sf=!0)),r=i}_d!==0&&_d!==5||Ef(e,!1),wf!==0&&(wf=0)}function kf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Qe(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=lt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Zu,n=Z,n=ot(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Q===2||Q===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Le(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||st(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Le(r),vt(n)){case 2:case 8:n=Ue;break;case 32:n=We;break;case 268435456:n=Ke;break;default:n=We}return r=Af.bind(null,e),n=Ie(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Le(r),e.callbackPriority=2,e.callbackNode=null,2}function Af(e,t){if(_d!==0&&_d!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(lf()&&e.callbackNode!==n)return null;var r=Z;return r=ot(e,e===Zu?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Nd(e,r,t),kf(e,Be()),e.callbackNode!=null&&e.callbackNode===n?Af.bind(null,e):null)}function jf(e,t){if(lf())return null;Nd(e,t,!0)}function Mf(){bp(function(){Y&6?Ie(He,Df):Of()})}function Nf(){if(wf===0){var e=Ia;e===0&&(e=nt,nt<<=1,!(nt&261888)&&(nt=256)),wf=e}return wf}function Pf(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:_n(e)}function Ff(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=Pf((i[Ct]||null).action),o=r.submitter;o&&(t=(t=o[Ct]||null)?Pf(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Rn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(wf!==0){var e=new FormData(i,o);Qs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),Qs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var If=0;If<di.length;If++){var Lf=di[If];fi(Lf.toLowerCase(),`on`+(Lf[0].toUpperCase()+Lf.slice(1)))}fi(ri,`onAnimationEnd`),fi(ii,`onAnimationIteration`),fi(ai,`onAnimationStart`),fi(`dblclick`,`onDoubleClick`),fi(`focusin`,`onFocus`),fi(`focusout`,`onBlur`),fi(oi,`onTransitionRun`),fi(si,`onTransitionStart`),fi(ci,`onTransitionCancel`),fi(li,`onTransitionEnd`),Vt(`onMouseEnter`,[`mouseout`,`mouseover`]),Vt(`onMouseLeave`,[`mouseout`,`mouseover`]),Vt(`onPointerEnter`,[`pointerout`,`pointerover`]),Vt(`onPointerLeave`,[`pointerout`,`pointerover`]),Bt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Bt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Bt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Bt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Bt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Bt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var Rf=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),zf=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(Rf));function Bf(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){_i(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){_i(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[Tt];n===void 0&&(n=t[Tt]=new Set);var r=e+`__bubble`;n.has(r)||(Wf(t,e,2,!1),n.add(r))}function Vf(e,t,n){var r=0;t&&(r|=4),Wf(n,e,r,t)}var Hf=`_reactListening`+Math.random().toString(36).slice(2);function Uf(e){if(!e[Hf]){e[Hf]=!0,Rt.forEach(function(t){t!==`selectionchange`&&(zf.has(t)||Vf(t,!1,e),Vf(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hf]||(t[Hf]=!0,Vf(`selectionchange`,!1,t))}}function Wf(e,t,n,r){switch(Ch(t)){case 2:var i=_h;break;case 8:i=vh;break;default:i=yh}n=i.bind(null,t,n,e),i=void 0,!On||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Gf(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Mt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}Tn(function(){var r=a,i=bn(n),s=[];a:{var c=ui.get(e);if(c!==void 0){var l=Rn,u=e;switch(e){case`keypress`:if(Pn(n)===0)break a;case`keydown`:case`keyup`:l=er;break;case`focusin`:u=`focus`,l=Gn;break;case`focusout`:u=`blur`,l=Gn;break;case`beforeblur`:case`afterblur`:l=Gn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Wn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=H;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=rr;break;case ri:case ii:case ai:l=Kn;break;case li:l=ir;break;case`scroll`:case`scrollend`:l=Bn;break;case`wheel`:l=ar;break;case`copy`:case`cut`:case`paste`:l=qn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=tr;break;case`submit`:l=nr;break;case`toggle`:case`beforetoggle`:l=or}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=En(m,p),g!=null&&d.push(Kf(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(l=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,l&&n!==yn&&(u=n.relatedTarget||n.fromElement)&&(Mt(u)||u[wt]))break a;(c||l)&&(u=i.window===i?i:(l=i.ownerDocument)?l.defaultView||l.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Mt(l):null,l!==null&&(f=o(l),d=l.tag,l!==f||d!==5&&d!==27&&d!==6)&&(l=null)):(c=null,l=r),c!==l&&(d=Wn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=tr,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?u:Pt(c),h=l==null?u:Pt(l),u=new d(g,m+`leave`,c,n,i),u.target=f,u.relatedTarget=h,g=null,Mt(i)===r&&(d=new d(p,m+`enter`,l,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,d=c&&l?T(c,l,Jf):null,c!==null&&Yf(s,u,c,d,!1),l!==null&&f!==null&&Yf(s,f,l,d,!0)))}a:{if(c=r?Pt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var _=Er;else if(br(c)){if(Dr)_=Ir;else{_=Pr;var v=Nr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&mn(r.elementType)&&(_=Er):_=Fr;if(_&&=_(e,r)){xr(s,_,n,i);break a}v&&v(e,c,r)}switch(v=r?Pt(r):window,e){case`focusin`:(br(v)||v.contentEditable===`true`)&&(qr=v,Jr=r,Yr=null);break;case`focusout`:Yr=Jr=qr=null;break;case`mousedown`:Xr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Xr=!1,Zr(s,n,i);break;case`selectionchange`:if(Kr)break;case`keydown`:case`keyup`:Zr(s,n,i)}var y;if(cr)b:{switch(e){case`compositionstart`:var b=`onCompositionStart`;break b;case`compositionend`:b=`onCompositionEnd`;break b;case`compositionupdate`:b=`onCompositionUpdate`;break b}b=void 0}else gr?mr(e,n)&&(b=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(b=`onCompositionStart`);b&&(dr&&n.locale!==`ko`&&(gr||b!==`onCompositionStart`?b===`onCompositionEnd`&&gr&&(y=Nn()):(An=i,jn=`value`in An?An.value:An.textContent,gr=!0)),v=qf(r,b),0<v.length&&(b=new Jn(b,e,null,n,i),s.push({event:b,listeners:v}),y?b.data=y:(y=hr(n),y!==null&&(b.data=y)))),(y=ur?_r(e,n):vr(e,n))&&(b=qf(r,`onBeforeInput`),0<b.length&&(v=new Jn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:v,listeners:b}),v.data=y)),Ff(s,e,r,n,i)}Bf(s,t)})}function Kf(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qf(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=En(e,n),i!=null&&r.unshift(Kf(e,i,a)),i=En(e,t),i!=null&&r.push(Kf(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Jf(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yf(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=En(n,a),l!=null&&o.unshift(Kf(n,l,c))):i||(l=En(n,a),l!=null&&o.push(Kf(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Xf=/\r\n?/g,Zf=/\u0000|\uFFFD/g;function Qf(e){return(typeof e==`string`?e:``+e).replace(Xf,`
`).replace(Zf,``)}function $f(e,t){return t=Qf(t),Qf(e)===t}function ep(e,t,n,r,a,o){switch(n){case`children`:if(typeof r==`string`)t===`body`||t===`textarea`&&r===``||un(e,r);else if(typeof r==`number`||typeof r==`bigint`)t!==`body`&&un(e,``+r);else return;break;case`className`:Jt(e,`class`,r);break;case`tabIndex`:Jt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Jt(e,n,r);break;case`style`:pn(e,r,o);return;case`data`:if(t!==`object`){Jt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)||r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=_n(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&ep(e,t,`name`,a.name,a,null),ep(e,t,`formEncType`,a.formEncType,a,null),ep(e,t,`formMethod`,a.formMethod,a,null),ep(e,t,`formTarget`,a.formTarget,a,null)):(ep(e,t,`encType`,a.encType,a,null),ep(e,t,`method`,a.method,a,null),ep(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=_n(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=vn);return;case`onScroll`:r!=null&&$(`scroll`,e);return;case`onScrollEnd`:r!=null&&$(`scrollend`,e);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=_n(r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),qt(e,`popover`,r);break;case`xlinkActuate`:Yt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Yt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Yt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Yt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Yt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Yt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Yt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Yt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Yt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:qt(e,`is`,r);break;case`innerText`:case`textContent`:return;default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=hn.get(n)||n,qt(e,n,r);else return}z=!0}function tp(e,t,n,r,a,o){switch(n){case`style`:pn(e,r,o);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));o?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)un(e,r);else if(typeof r==`number`||typeof r==`bigint`)un(e,``+r);else return;break;case`onScroll`:r!=null&&$(`scroll`,e);return;case`onScrollEnd`:r!=null&&$(`scrollend`,e);return;case`onClick`:r!=null&&(e.onclick=vn);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(!zt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),o=n.slice(2,a?n.length-7:void 0),t=e[Ct]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(o,t,a),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(o,r,a);break a}z=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):qt(e,n,r)}return}z=!0}function np(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:ep(e,t,o,s,n,null)}}a&&ep(e,t,`srcSet`,n.srcSet,n,null),r&&ep(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:ep(e,t,r,d,n,null)}}an(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:ep(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&sn(e,!!r,n,!0):sn(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:ep(e,t,s,c,n,null)}ln(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:ep(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<Rf.length;r++)$(Rf[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:ep(e,t,u,r,n,null)}return;default:if(mn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&tp(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&ep(e,t,c,r,n,null))}var rp={};function ip(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||ep(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:m!==f&&(z=!0),o=m;break;case`name`:m!==f&&(z=!0),a=m;break;case`checked`:m!==f&&(z=!0),u=m;break;case`defaultChecked`:m!==f&&(z=!0),d=m;break;case`value`:m!==f&&(z=!0),s=m;break;case`defaultValue`:m!==f&&(z=!0),c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&ep(e,t,p,m,r,f)}}rn(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||ep(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:o!==l&&(z=!0),p=o;break;case`defaultValue`:o!==l&&(z=!0),c=o;break;case`multiple`:o!==l&&(z=!0),s=o;default:o!==l&&ep(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?sn(e,!!n,n?[]:``,!1):sn(e,!!n,t,!0)):sn(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:ep(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:a!==o&&(z=!0),p=a;break;case`defaultValue`:a!==o&&(z=!0),m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&ep(e,t,s,a,r,o)}cn(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:ep(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:p!==m&&(z=!0),e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:ep(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&ep(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:ep(e,t,u,p,r,m)}return;default:if(mn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&tp(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||tp(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&ep(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||ep(e,t,f,p,r,m)}function ap(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function op(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&ap(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&ap(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var sp=null,cp=null;function lp(e){return e.nodeType===9?e:e.ownerDocument}function up(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function dp(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function fp(e,t,n,r){return n=lp(n).createElement(e),n[St]=r,n[Ct]=t,np(n,e,t),It(n),n}function pp(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var mp=null;function hp(){var e=window.event;return e&&e.type===`popstate`?e!==mp&&(mp=e,!0):(mp=null,!1)}var gp=typeof setTimeout==`function`?setTimeout:void 0,_p=typeof clearTimeout==`function`?clearTimeout:void 0,vp=typeof Promise==`function`?Promise:void 0,yp=typeof requestAnimationFrame==`function`?requestAnimationFrame:gp,bp=typeof queueMicrotask==`function`?queueMicrotask:vp===void 0?gp:function(e){return vp.resolve(null).then(e).catch(xp)};function xp(e){setTimeout(function(){throw e})}function Sp(e){return e===`head`}function Cp(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Hh(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)_m(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,_m(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[kt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&_m(e.ownerDocument.body)}n=i}while(n);Hh(t)}function wp(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function Tp(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1&&(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom)}}function Ep(e,t){e=e.style,t=t.style;var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function Dp(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Op(e){return Dp(e.getBoundingClientRect(),getComputedStyle(e),e)}function kp(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return Dp(t,n,e)}function Ap(e){return e.documentElement.clientHeight}function jp(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Mp(e,t,n,r,i,a,o,s,c){var l=t.nodeType===9?t:t.ownerDocument;try{var u=l.startViewTransition({update:function(){var t=l.defaultView,n=t.navigation&&t.navigation.transition,o=l.fonts.status;r();var s=[];if(o===`loaded`&&(Ap(l),l.fonts.status===`loading`&&s.push(l.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,d=0;d<c.length;d++){var f=c[d];if(!f.complete){var p=f.getBoundingClientRect();if(0<p.bottom&&0<p.right&&p.top<t.innerHeight&&p.left<t.innerWidth){if(u+=Xm(f),u>$m){s.length=o;break}f=new Promise(jp.bind(f)),s.push(f)}}}if(0<s.length)return t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,500)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});l.__reactViewTransition=u;var d=[];return u.ready.then(function(){for(var e=l.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){d.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var u=n[c],f=u.width;if(i===void 0)i=f;else if(i!==f){s=!1;break}if(f=u.height,a===void 0)a=f;else if(a!==f){s=!1;break}delete u.width,delete u.height,u.transform===`none`&&delete u.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){l.__reactViewTransition===u&&(l.__reactViewTransition=null);try{if(typeof e==`object`&&e)switch(e.name){case`InvalidStateError`:(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)&&(e=null)}e!==null&&c(e)}finally{r(),i(),o()}}),u.finished.finally(function(){for(var e=0;e<d.length;e++)d[e].cancel();l.__reactViewTransition===u&&(l.__reactViewTransition=null),s()}),u}catch{return r(),i(),o(),null}}function Np(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}Np.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:E({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Np.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Np.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Pp(e){return{name:e,group:new Np(`group`,e),imagePair:new Np(`image-pair`,e),old:new Np(`old`,e),new:new Np(`new`,e)}}function Fp(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Fp.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Bp(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=Rp(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),h(this._fragmentFiber.child,!1,Ip,e,s,r)}this._eventListeners=a}};function Ip(e,t,n,r){return b(e).addEventListener(t,n,r),!1}Fp.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Bp(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=Rp(i.optionsOrUseCapture),h(this._fragmentFiber.child,!1,Lp,e,n,i),r.splice(t,1),a!==null&&a()}};function Lp(e,t,n,r){return b(e).removeEventListener(t,n,r),!1}function Rp(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zp(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Bp(e,t,n,r){if(e.length===0)return-1;r=zp(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&zp(a.optionsOrUseCapture)===r)return i}return-1}Fp.prototype.dispatchEvent=function(e){var t=g(this._fragmentFiber);if(t===null)return!0;t=b(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,Rp(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Fp.prototype.focus=function(e){h(this._fragmentFiber.child,!0,Vp,e,void 0,void 0)};function Vp(e,t){return e.tag!==6&&(e=b(e),pm(e,t))}Fp.prototype.focusLast=function(e){var t=[];h(this._fragmentFiber.child,!0,Hp,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Vp(t[n],e);n--);};function Hp(e,t){return t.push(e),!1}Fp.prototype.blur=function(){var e=g(this._fragmentFiber);e!==null&&(e=b(e),e=lp(e).activeElement,e!==null&&h(this._fragmentFiber.child,!1,Up,e,void 0,void 0))};function Up(e,t){return e.tag!==6&&(e=b(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Fp.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),h(this._fragmentFiber.child,!1,Wp,e,void 0,void 0)};function Wp(e,t){return e.tag===6||(e=b(e),t.observe(e)),!1}Fp.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),h(this._fragmentFiber.child,!1,Gp,e,void 0,void 0);for(var n=t=0;n<Kp.length;n++){var r=Kp[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Kp[t++]=r}Kp.length=t}};function Gp(e,t){return e.tag===6||(e=b(e),t.unobserve(e)),!1}var Kp=[],qp=!1;function Jp(e,t,n){Kp.push({fragmentInstance:e,observer:t,instance:n}),qp||(qp=!0,mm(function(){qp=!1;var e=Kp;Kp=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}Fp.prototype.getClientRects=function(){var e=[];return h(this._fragmentFiber.child,!1,Yp,e,void 0,void 0),e};function Yp(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=b(e),t.push.apply(t,e.getClientRects());return!1}Fp.prototype.getRootNode=function(e){var t=g(this._fragmentFiber);return t===null?this:b(t).getRootNode(e)},Fp.prototype.compareDocumentPosition=function(e){var t=g(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];h(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=b(t);if(n.length===0){if(n=r,_(this._fragmentFiber)){a:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break a}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var i=r=n.compareDocumentPosition(e);return n===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=v(t)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=b(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=b(n[0]),i=b(n[n.length-1]);var a=_(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xp(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xp(e,t,n,r,i){var a=Mt(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=g(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=T(n,a,w),t===null?t=!1:(h(t,!0,C,a,n),a=x,x=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=T(r,a,w),t===null?t=!1:(h(t,!0,ee,a,r),a=x,S=x=null,t=a!==null)),t):!1}function Zp(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Fp.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(i(566));var t=[];h(this._fragmentFiber.child,!1,Hp,t,void 0,void 0);var n=!1!==e;if(t.length===0){var r=v(this._fragmentFiber);if(r=n?r[1]||r[0]||g(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=b(r),Zp(e,n);return}if(r=b(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n!==null&&n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var a=t[r];a.tag===6?(a=b(a),Zp(a,n)):b(a).scrollIntoView(e),r+=n?-1:1}};function Qp(e,t){return e=b(e),$p(e,t),!1}function $p(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function em(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<Kp.length;i++){var a=Kp[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(Kp[r++]=a)}Kp.length=r,n.observe(e)}),$p(e,t))}function tm(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,Rp(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?Jp(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function nm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:nm(n),jt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function rm(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[kt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=lm(e.nextSibling),e===null)break}return null}function im(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=lm(e.nextSibling),e===null))return null;return e}function am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=lm(e.nextSibling),e===null))return null;return e}function om(e){return e.data===`$?`||e.data===`$~`}function sm(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function cm(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function lm(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var um=null;function dm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return lm(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function pm(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function mm(e){yp(function(){yp(function(t){return e(t)})})}function hm(e,t,n){switch(t=lp(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function gm(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&ep(e,t,r,null,rp,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===vn&&(e.onclick=null),jt(e)}function _m(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);jt(e)}var vm=new Map,ym=new Set;function bm(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var xm=F.d;F.d={f:Sm,r:Cm,D:Em,C:Dm,L:Om,m:km,X:jm,S:Am,M:Mm};function Sm(){var e=xm.f(),t=Ld();return e||t}function Cm(e){var t=Nt(e);t!==null&&t.tag===5&&t.type===`form`?ec(t):xm.r(e)}var wm=typeof document>`u`?null:document;function Tm(e,t,n){var r=wm;if(r&&typeof t==`string`&&t){var i=nn(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),ym.has(i)||(ym.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),np(t,`link`,e),It(t),r.head.appendChild(t)))}}function Em(e){xm.D(e),Tm(`dns-prefetch`,e,null)}function Dm(e,t){xm.C(e,t),Tm(`preconnect`,e,t)}function Om(e,t,n){xm.L(e,t,n);var r=wm;if(r&&e&&t){var i=`link[rel="preload"][as="`+nn(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+nn(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+nn(n.imageSizes)+`"]`)):i+=`[href="`+nn(e)+`"]`;var a=i;switch(t){case`style`:a=Pm(e);break;case`script`:a=Rm(e)}if(!(vm.has(a)||(e=E({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),vm.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(Fm(a))||t===`script`&&r.querySelector(zm(a))))){var o=r.createElement(`link`);np(o,`link`,e),t===`style`&&(o[At]=!0,o.onload=o.onerror=function(){Lt(o)}),It(o),r.head.appendChild(o)}}}function km(e,t){xm.m(e,t);var n=wm;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+nn(r)+`"][href="`+nn(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Rm(e)}if(!vm.has(a)&&(e=E({rel:`modulepreload`,href:e},t),vm.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(zm(a)))return}r=n.createElement(`link`),np(r,`link`,e),It(r),n.head.appendChild(r)}}}function Am(e,t,n){xm.S(e,t,n);var r=wm;if(r&&e){var i=Ft(r).hoistableStyles,a=Pm(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Fm(a)))s.loading=5;else{e=E({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=vm.get(a))&&Hm(e,n);var c=o=r.createElement(`link`);It(c),np(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Vm(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function jm(e,t){xm.X(e,t);var n=wm;if(n&&e){var r=Ft(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=E({src:e,async:!0},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),It(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Mm(e,t){xm.M(e,t);var n=wm;if(n&&e){var r=Ft(n).hoistableScripts,i=Rm(e),a=r.get(i);a||(a=n.querySelector(zm(i)),a||(e=E({src:e,async:!0,type:`module`},t),(t=vm.get(i))&&Um(e,t),a=n.createElement(`script`),It(a),np(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Nm(e,t,n,r){var a=(a=Se.current)?bm(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=Pm(n.href),t=Ft(a).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Pm(n.href);var o=Ft(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(Fm(e)))?o._p||(s.instance=o,s.state.loading=5):(o=vm.get(e),o||(o={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vm.set(e,o)),Lm(a,e,o,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Rm(n),t=Ft(a).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Pm(e){return`href="`+nn(e)+`"`}function Fm(e){return`link[rel="stylesheet"][`+e+`]`}function Im(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Lm(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[At]){r.loading=1;return}}else t=e.createElement(`link`),t[At]=!0,t.onload=t.onerror=Lt.bind(null,t),np(t,`link`,n),It(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2})}function Rm(e){return`[src="`+nn(e)+`"]`}function zm(e){return`script[async]`+e}function Bm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+nn(n.href)+`"]`);if(r)return t.instance=r,It(r),r;var a=E({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),It(r),np(r,`style`,a),Vm(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Pm(n.href);var o=e.querySelector(Fm(a));if(o)return t.state.loading|=4,t.instance=o,It(o),o;r=Im(n),(a=vm.get(a))&&Hm(r,a),o=(e.ownerDocument||e).createElement(`link`),It(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),np(o,`link`,r),t.state.loading|=4,Vm(o,n.precedence,e),t.instance=o;case`script`:return o=Rm(n.src),(a=e.querySelector(zm(o)))?(t.instance=a,It(a),a):(r=n,(a=vm.get(o))&&(r=E({},n),Um(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),It(a),np(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Vm(r,n.precedence,e));return t.instance}function Vm(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Hm(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Um(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Wm=null;function Gm(e,t,n){if(Wm===null){var r=new Map,i=Wm=new Map;i.set(n,r)}else i=Wm,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[kt]||a[St]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Km(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function qm(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Jm(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Ym(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Xm(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Zm(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Xm(t),e.suspenseyImages.push(t)),e=rh.bind(e),t.decode().then(e,e))}function Qm(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Pm(r.href),a=t.querySelector(Fm(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=nh.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,It(a);return}a=t.ownerDocument||t,r=Im(r),(i=vm.get(i))&&Hm(r,i),a=a.createElement(`link`),It(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),np(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nh.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var $m=0;function eh(e,t){return e.stylesheets&&e.count===0&&ah(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&$m===0&&($m=62500*op());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ah(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>$m?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function th(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)ah(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function nh(){this.count--,th(this)}function rh(){this.imgCount--,th(this)}var ih=null;function ah(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(oh,e),ih=null,nh.call(e))}function oh(e,t){if(!(t.state.loading&4)){var n=ih.get(e);if(n)var r=n.get(null);else{n=new Map,ih.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=nh.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var sh={$$typeof:A,Provider:null,Consumer:null,_currentValue:_e,_currentValue2:_e,_threadCount:0};function ch(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dt(0),this.hiddenUpdates=dt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map}function lh(e,t,n,r,i,a,o,s,c,l,u,d){return e=new ch(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=ki(3,null,null,t),e.current=a,a.stateNode=e,t=ka(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},uo(a),e}function uh(e){return e?(e=Di,e):Di}function dh(e,t,n,r,i,a){i=uh(i),r.context===null?r.context=i:r.pendingContext=i,r=po(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=mo(e,r,t),n!==null&&(Md(n,e,t),ho(n,e,t))}function fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ph(e,t){fh(e,t),(e=e.alternate)&&fh(e,t)}function mh(e){if(e.tag===13||e.tag===31){var t=wi(e,67108864);t!==null&&Md(t,e,67108864),ph(e,67108864)}}function hh(e){if(e.tag===13||e.tag===31){var t=kd();t=_t(t);var n=wi(e,t);n!==null&&Md(n,e,t),ph(e,t)}}var gh=!0;function _h(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=2,yh(e,t,n,r)}finally{F.p=a,P.T=i}}function vh(e,t,n,r){var i=P.T;P.T=null;var a=F.p;try{F.p=8,yh(e,t,n,r)}finally{F.p=a,P.T=i}}function yh(e,t,n,r){if(gh){var i=bh(r);if(i===null)Gf(e,t,r,xh,n),Mh(e,r);else if(Ph(i,e,t,n,r))r.stopPropagation();else if(Mh(e,r),t&4&&-1<jh.indexOf(e)){for(;i!==null;){var a=Nt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=at(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Qe(o);s.entanglements[1]|=c,o&=~c}Tf(a),!(Y&6)&&(md=Be()+500,Ef(0,!1))}}break;case 31:case 13:s=wi(a,2),s!==null&&Md(s,a,2),Ld(),ph(a,2)}if(a=bh(r),a===null&&Gf(e,t,r,xh,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Gf(e,t,r,null,n)}}function bh(e){return e=bn(e),Sh(e)}var xh=null;function Sh(e){if(xh=null,e=Mt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xh=e,null}function Ch(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ve()){case He:return 2;case Ue:return 8;case We:case Ge:return 32;case Ke:return 268435456;default:return 32}default:return 32}}var wh=!1,Th=null,Eh=null,Dh=null,Oh=new Map,kh=new Map,Ah=[],jh=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Mh(e,t){switch(e){case`focusin`:case`focusout`:Th=null;break;case`dragenter`:case`dragleave`:Eh=null;break;case`mouseover`:case`mouseout`:Dh=null;break;case`pointerover`:case`pointerout`:Oh.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:kh.delete(t.pointerId)}}function Nh(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Nt(t),t!==null&&mh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ph(e,t,n,r,i){switch(t){case`focusin`:return Th=Nh(Th,e,t,n,r,i),!0;case`dragenter`:return Eh=Nh(Eh,e,t,n,r,i),!0;case`mouseover`:return Dh=Nh(Dh,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return Oh.set(a,Nh(Oh.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,kh.set(a,Nh(kh.get(a)||null,e,t,n,r,i)),!0}return!1}function Fh(e){var t=Mt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,bt(e.priority,function(){hh(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,bt(e.priority,function(){hh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ih(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bh(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yn=r,n.target.dispatchEvent(r),yn=null}else return t=Nt(n),t!==null&&mh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Ih(e)&&n.delete(t)}function Rh(){wh=!1,Th!==null&&Ih(Th)&&(Th=null),Eh!==null&&Ih(Eh)&&(Eh=null),Dh!==null&&Ih(Dh)&&(Dh=null),Oh.forEach(Lh),kh.forEach(Lh)}function zh(e,n){e.blockedOn===n&&(e.blockedOn=null,wh||(wh=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Rh)))}var Bh=null;function Vh(e){Bh!==e&&(Bh=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Bh===e&&(Bh=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(Sh(r||n)===null)continue;break}var a=Nt(n);a!==null&&(e.splice(t,3),t-=3,Qs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Hh(e){function t(t){return zh(t,e)}Th!==null&&zh(Th,e),Eh!==null&&zh(Eh,e),Dh!==null&&zh(Dh,e),Oh.forEach(t),kh.forEach(t);for(var n=0;n<Ah.length;n++){var r=Ah[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ah.length&&(n=Ah[0],n.blockedOn===null);)Fh(n),n.blockedOn===null&&Ah.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Ct]||null;if(typeof a==`function`)o||Vh(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Ct]||null)s=o.formAction;else if(Sh(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Vh(n)}}}function Uh(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Wh(e){this._internalRoot=e}Gh.prototype.render=Wh.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;dh(n,kd(),e,t,null,null)},Gh.prototype.unmount=Wh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dh(e.current,2,null,e,null,null),Ld(),t[wt]=null}};function Gh(e){this._internalRoot=e}Gh.prototype.unstable_scheduleHydration=function(e){if(e){var t=yt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ah.length&&t!==0&&t<Ah[n].priority;n++);Ah.splice(n,0,e),n===0&&Fh(e)}};var Kh=n.version;if(Kh!==`19.3.1`)throw Error(i(527,Kh,`19.3.1`));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var qh={bundleType:0,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:P,reconcilerVersion:`19.3.1`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jh.isDisabled&&Jh.supportsFiber)try{Ye=Jh.inject(qh),Xe=Jh}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=xc,s=Sc,c=Cc;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=lh(e,1,!1,null,null,n,r,null,o,s,c,Uh),e[wt]=t.current,Uf(e),new Wh(t)}})),g=o(((e,t)=>{function n(){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE==`function`)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u()),v=g(),y=`-ms-`,b=`-moz-`,x=`-webkit-`,S=`comm`,C=`rule`,ee=`decl`,w=`@import`,T=`@namespace`,E=`@keyframes`,D=`@layer`,te=Math.abs,O=String.fromCharCode,k=Object.assign;function ne(e,t){return j(e,0)^45?(((t<<2^j(e,0))<<2^j(e,1))<<2^j(e,2))<<2^j(e,3):0}function re(e){return e.trim()}function ie(e,t){return(e=t.exec(e))?e[0]:e}function A(e,t,n){return e.replace(t,n)}function ae(e,t,n){return e.indexOf(t,n)}function j(e,t){return e.charCodeAt(t)|0}function oe(e,t,n){return e.slice(t,n)}function se(e){return e.length}function ce(e){return e.length}function le(e,t){return t.push(e),e}function ue(e,t){return e.map(t).join(``)}function de(e,t){return e.filter(function(e){return!ie(e,t)})}var fe=1,pe=1,me=0,M=0,N=0,he=``;function ge(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:fe,column:pe,length:o,return:``,siblings:s}}function P(e,t){return k(ge(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function F(e){for(;e.root;)e=P(e.root,{children:[e]});le(e,e.siblings)}function _e(){return N}function ve(){return N=M>0?j(he,--M):0,pe--,N===10&&(pe=1,fe--),N}function I(){return N=M<me?j(he,M++):0,pe++,N===10&&(pe=1,fe++),N}function L(){return j(he,M)}function ye(){return M}function R(e,t){return oe(he,e,t)}function be(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function xe(e){return fe=pe=1,me=se(he=e),M=0,[]}function Se(e){return he=``,e}function Ce(e){return re(R(M-1,Ee(e===91?e+2:e===40?e+1:e)))}function we(e){for(;(N=L())&&N<33;)I();return be(e)>2||be(N)>3?``:` `}function Te(e,t){for(;--t&&I()&&!(N<48||N>102||N>57&&N<65||N>70&&N<97););return R(e,ye()+(t<6&&L()==32&&I()==32))}function Ee(e){for(;I();)switch(N){case e:return M;case 34:case 39:e!==34&&e!==39&&Ee(N);break;case 40:e===41&&Ee(e);break;case 92:I()}return M}function De(e,t){for(;I()&&e+N!==57&&(e+N!==84||L()!==47););return`/*`+R(t,M-1)+`*`+O(e===47?e:I())}function Oe(e){for(;!be(L());)I();return R(e,M)}function ke(e){return Se(Ae(``,null,null,null,[``],e=xe(e),0,[0],e))}function Ae(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=I()){case 40:if(m!=108&&j(C,d-1)==58){ae(C+=A(Ce(v),`&`,`&\f`),`&\f`,te(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=Ce(v);break;case 9:case 10:case 13:case 32:C+=we(m);break;case 92:C+=Te(ye()-1,7);continue;case 47:switch(L()){case 42:case 47:le(Me(De(I(),ye()),t,n,c),c),(be(m||1)==5||be(L()||1)==5)&&se(C)&&oe(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=se(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=A(C,/\f/g,``)),p>0&&(se(C)-d||h===0&&m===47)&&le(p>32?Ne(C+`;`,r,n,d-1,c):Ne(A(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(le(S=je(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123){if(u===0)Ae(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(j(C,3)===110)break;case 108:if(j(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?Ae(e,S,S,r&&le(je(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):Ae(C,S,S,S,[``],x,0,s,x)}}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+se(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&ve()==125)continue}switch(C+=O(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(se(C)-1)*_,_=1;break;case 64:L()===45&&(C+=Ce(I())),f=L(),u=d=se(y=C+=Oe(ye())),v++;break;case 45:m===45&&se(C)==2&&(h=0)}}return a}function je(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=ce(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=oe(e,f+1,f=te(g=o[h])),b=e;v<m;++v)(b=re(g>0?p[v]+` `+y:A(y,/&\f/g,p[v])))&&(c[_++]=b);return ge(e,t,n,i===0?C:s,c,l,u,d)}function Me(e,t,n,r){return ge(e,t,n,S,O(_e()),oe(e,2,-2),0,r)}function Ne(e,t,n,r,i){return ge(e,t,n,ee,oe(e,0,r),oe(e,r+1,-1),r,i)}function Pe(e,t,n){switch(ne(e,t)){case 5103:return x+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return x+e+e;case 4855:return x+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return b+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return x+e+b+e+y+e+e;case 5936:switch(j(e,t+11)){case 114:return x+e+y+A(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return x+e+y+A(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return x+e+y+A(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return x+e+y+e+e;case 6165:return x+e+y+`flex-`+e+e;case 5187:return x+e+A(e,/(\w+).+(:[^]+)/,x+`box-$1$2`+y+`flex-$1$2`)+e;case 5443:return x+e+y+`flex-item-`+A(e,/flex-|-self/g,``)+(ie(e,/flex-|baseline/)?``:y+`grid-row-`+A(e,/flex-|-self/g,``))+e;case 4675:return x+e+y+`flex-line-pack`+A(e,/align-content|flex-|-self/g,``)+e;case 5548:return x+e+y+A(e,`shrink`,`negative`)+e;case 5292:return x+e+y+A(e,`basis`,`preferred-size`)+e;case 6060:return x+`box-`+A(e,`-grow`,``)+x+e+y+A(e,`grow`,`positive`)+e;case 4554:return x+A(e,/([^-])(transform)/g,`$1`+x+`$2`)+e;case 6187:return A(A(A(e,/(zoom-|grab)/,x+`$1`),/(image-set)/,x+`$1`),e,``)+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,x+"$1$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,x+`box-pack:$3`+y+`flex-pack:$3`),/space-between/,`justify`)+x+e+e;case 4200:if(!ie(e,/flex-|baseline/))return y+`grid-column-align`+oe(e,t)+e;break;case 2592:case 3360:return y+A(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,ie(e.props,/grid-\w+-end/)})?~ae(e+(n=n[t].value),`span`,0)?e:y+A(e,`-start`,``)+e+y+`grid-row-span:`+(~ae(n,`span`,0)?ie(n,/\d+/):+ie(n,/\d+/)-ie(e,/\d+/))+`;`:y+A(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return ie(e.props,/grid-\w+-start/)})?e:y+A(A(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,x+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(se(e)-1-t>6)switch(j(e,t+1)){case 109:if(j(e,t+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,`$1`+x+`$2-$3$1`+b+(j(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~ae(e,`stretch`,0)?Pe(A(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return A(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return y+n+`:`+r+s+(i?y+n+`-span:`+(a?o:+o-r)+s:``)+e});case 4949:if(j(e,t+6)===121)return A(e,`:`,`:`+x)+e;break;case 6444:switch(j(e,j(e,14)===45?18:11)){case 120:return A(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+x+(j(e,14)===45?`inline-`:``)+`box$3$1`+x+`$2$3$1`+y+`$2box$3`)+e;case 100:return A(e,`:`,`:`+y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(e,`scroll-`,`scroll-snap-`)+e}return e}function Fe(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Ie(e,t,n,r){switch(e.type){case D:if(e.children.length)break;case w:case T:case ee:return e.return=e.return||e.value;case S:return``;case E:return e.return=e.value+`{`+Fe(e.children,r)+`}`;case C:if(!se(e.value=e.props.join(`,`)))return``}return se(n=Fe(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Le(e){var t=ce(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function Re(e){return function(t){t.root||(t=t.return)&&e(t)}}function ze(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ee:e.return=Pe(e.value,e.length,n);return;case E:return Fe([P(e,{value:A(e.value,`@`,`@`+x)})],r);case C:if(e.length)return ue(n=e.props,function(t){switch(ie(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:F(P(e,{props:[A(t,/:(read-\w+)/,`:`+b+`$1`)]})),F(P(e,{props:[t]})),k(e,{props:de(n,r)});break;case`::placeholder`:F(P(e,{props:[A(t,/:(plac\w+)/,`:`+x+`input-$1`)]})),F(P(e,{props:[A(t,/:(plac\w+)/,`:`+b+`$1`)]})),F(P(e,{props:[A(t,/:(plac\w+)/,y+`input-$1`)]})),F(P(e,{props:[t]})),k(e,{props:de(n,r)})}return``})}}function Be(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Ve=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,He=`active`,Ue=`data-styled-version`,We=`6.6.0`,Ge=`/*!sc*/
`,Ke=typeof window<`u`&&typeof document<`u`;if(!_.createContext)throw Be(19);function qe(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var Je=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:qe(`REACT_APP_SC_DISABLE_SPEEDY`)??qe(`SC_DISABLE_SPEEDY`)??(typeof process<`u`&&!1)),Ye=`sc-keyframes-`,Xe=new Map,Ze=new Map,Qe=1,$e=e=>{if(Xe.has(e))return Xe.get(e);for(;Ze.has(Qe);)Qe++;let t=Qe++;return Xe.set(e,t),Ze.set(t,e),t},et=e=>Ze.get(e),tt=(e,t)=>{Qe=t+1,Xe.set(e,t),Ze.set(t,e)},nt=Object.freeze([]),rt=Object.freeze({});function it(e,t,n=rt){return e.theme!==n.theme&&e.theme||t||n.theme}var at=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ot=/(^-|-$)/g;function st(e){return e.replace(at,`-`).replace(ot,``)}var ct=/(a)(d)/gi,lt=e=>String.fromCharCode(e+(e>25?39:97));function ut(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=lt(t%52)+n;return(lt(t%52)+n).replace(ct,`$1-$2`)}var dt=5381,ft=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},pt=e=>ft(dt,e);function mt(e){return ut(pt(e)>>>0)}function ht(e){return e.displayName||e.name||`Component`}function gt(e){return typeof e==`string`&&!0}function _t(e){return gt(e)?`styled.${e}`:`Styled(${ht(e)})`}var vt=Symbol.for(`react.memo`),yt=Symbol.for(`react.forward_ref`),bt={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},xt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},St={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ct={[yt]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[vt]:St};function wt(e){return(`type`in(t=e)&&t.type.$$typeof)===vt?St:`$$typeof`in e?Ct[e.$$typeof]:bt;var t}var Tt=Object.defineProperty,Et=Object.getOwnPropertyNames,Dt=Object.getOwnPropertySymbols,Ot=Object.getOwnPropertyDescriptor,kt=Object.getPrototypeOf,At=Object.prototype;function jt(e,t,n){if(typeof t!=`string`){let r=kt(t);r&&r!==At&&jt(e,r,n);let i=Et(t).concat(Dt(t)),a=wt(e),o=wt(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in xt||n&&n[s]||o&&s in o||a&&s in a)){let n=Ot(t,s);try{Tt(e,s,n)}catch{}}}}return e}function Mt(e){return typeof e==`function`}var Nt=Symbol.for(`react.forward_ref`);function Pt(e){return e!=null&&(typeof e==`object`||typeof e==`function`)&&e.$$typeof===Nt&&`styledComponentId`in e}function Ft(e,t){return e&&t?e+` `+t:e||t||``}function It(e,t){return e.join(t||``)}function Lt(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function Rt(e,t,n=!1){if(!n&&!Lt(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=Rt(e[n],t[n]);else if(Lt(t))for(let n in t)e[n]=Rt(e[n],t[n]);return e}function zt(e,t){Object.defineProperty(e,"toString",{value:t})}var Bt=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw Be(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+Ge;return t}},Vt=`style[${Ve}][${Ue}="${We}"]`,Ht=RegExp(`^${Ve}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Ut=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,Wt=e=>{if(!e)return document;if(Ut(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(Ut(t))return t}return document},Gt=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},z=(e,t)=>{let n=(t.textContent??``).split(Ge),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(Ht);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(tt(n,t),Gt(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},Kt=e=>{let t=Wt(e.options.target).querySelectorAll(Vt);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(Ve)!==He&&(z(e,r),r.parentNode&&r.parentNode.removeChild(r))}},qt=!1;function Jt(){if(!1!==qt)return qt;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return qt=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return qt=t.getAttribute(`content`)||void 0}return qt=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var Yt=(e,t)=>{if(typeof document>`u`)throw Be(20);let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${Ve}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(Ve,He),i.setAttribute(Ue,We);let s=t||Jt();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},Xt=class{constructor(e,t){this.element=Yt(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw Be(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},Zt=class{constructor(e,t){this.element=Yt(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},Qt=Ke,$t={isServer:!Ke,useCSSOMInjection:!Je},en=class e{static registerId(e){return $e(e)}constructor(e=rt,t={},n){this.options=Object.assign(Object.assign({},$t),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Ke&&Qt&&(Qt=!1,Kt(this)),zt(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=et(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=Ve+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&Ke&&Kt(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Ke&&t.target!==this.options.target&&Wt(this.options.target)!==Wt(t.target)&&Kt(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new Xt(t,n):new Zt(t,n))(this.options),new Bt(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){$e(e),e.startsWith(Ye)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules($e(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup($e(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},tn=new WeakSet,nn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function rn(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in nn||e.startsWith(`--`)?String(t).trim():t+`px`}var an=47;function on(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var sn=Symbol.for(`sc-keyframes`);function cn(e){return typeof e==`object`&&!!e&&sn in e}function ln(e){return Mt(e)&&!(e.prototype&&e.prototype.isReactComponent)}var un=e=>e==null||!1===e||e===``,dn=Symbol.for(`react.client.reference`);function fn(e){return e.$$typeof===dn}function pn(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!un(r)&&(Array.isArray(r)&&tn.has(r)||Mt(r)?t.push(on(n)+`:`,r,`;`):Lt(r)?(t.push(n+` {`),pn(r,t),t.push(`}`)):t.push(on(n)+`: `+rn(n,r)+`;`))}}function mn(e,t,n,r,i=[]){if(un(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return fn(e)?i:ln(e)&&t?mn(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)mn(e[a],t,n,r,i);return i}return Pt(e)?(i.push(`.${e.styledComponentId}`),i):cn(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):fn(e)?i:Lt(e)&&e.toString===Object.prototype.toString?(pn(e,i),i):(i.push(e.toString()),i)}var hn=pt(We),gn=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=ft(hn,t),this.baseStyle=n,en.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a){if(ln(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=It(mn(r,e,t,n)))}else i+=It(mn(a,e,t,n))}}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=ut(ft(ft(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Ft(r,a)}}return r}},_n=/&/g;function vn(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function yn(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==an||e.charCodeAt(c+1)!==42){if(o)l===42&&e.charCodeAt(c+1)===an&&(o=!1,c++);else if(l!==34&&l!==39||vn(e,c)){if(a===0){if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}}else a===0?a=l:a===l&&(a=0)}else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function bn(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&bn(a.children,t)}return e}function xn({options:e=rt,plugins:t=nt}=rt){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(_n,r).replace(i,a))}),e.prefix&&o.push(ze),o.push(Ie);let s=[],c=Le(o.concat(Re(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return yn(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||vn(e,o)){if(s===0){if(t===an&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==an);)o++;o+=2}else if(t!==40){if(t!==41){if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===an)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===an&&o+1<r&&e.charCodeAt(o+1)===an){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++}else c>0&&c--,o++}else c++,o++}else o++}else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:yn(i)):l===0?e:yn(e)}(t),d=ke(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=bn(d,e.namespace)),s=[],Fe(d,c),s},u=e,d=dt;for(let e=0;e<t.length;e++)t[e].name||Be(15),d=ft(d,t[e].name);return u!=null&&u.namespace&&(d=ft(d,u.namespace)),u!=null&&u.prefix&&(d=ft(d,`p`)),l.hash=d===dt?``:d.toString(),l}var Sn=new en,Cn=xn(),wn=_.createContext({shouldForwardProp:void 0,styleSheet:Sn,stylis:Cn,stylisPlugins:void 0});wn.Consumer;function Tn(){return _.useContext(wn)}var En=_.createContext(void 0);En.Consumer;var Dn={};function On(e,t){let n=typeof e==`string`?st(e):`sc`;Dn[n]=(Dn[n]||0)+1;let r=n+`-`+mt(We+n+Dn[n]);return t?t+`-`+r:r}function kn(e,t,n){let r=Pt(e),i=e,a=!gt(e),{attrs:o=nt,componentId:s=On(t.displayName,t.parentComponentId),displayName:c=_t(e)}=t,l=t.displayName&&t.componentId?st(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new gn(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=_.useContext(En),u=Tn(),d=e.shouldForwardProp||u.shouldForwardProp,f=it(t,l,a)||rt,[p,m]=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=null,a=e.length>1;for(let t=0;t<e.length;t++){let n=e[t],o=Mt(n)?n(a?Object.assign({},r):r):n;for(let e in o)e===`className`?r.className=Ft(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):o[e]===void 0?e in r&&(r[e]!==void 0&&(i||=[]).push(e),r[e]=void 0):r[e]=o[e]}return`className`in t&&typeof t.className==`string`&&(r.className=Ft(r.className,t.className)),[r,i]}(r,t,f),h=i.generateAndInjectStyles(p,u.styleSheet,u.stylis),g=p.as||c,v=gt(g),y=function(e,t,n,r,i,a){let o={};for(let s in e)s[0]===`$`||s===`as`||s===`theme`&&e.theme===n||(s===`forwardedAs`?e.forwardedAs!==void 0&&(o.as=e.forwardedAs):e[s]===void 0?s===`className`||i||a!==null&&a.indexOf(s)!==-1||r&&!r(s,t)||(o[s]=void 0):r&&!r(s,t)||(o[s]=e[s]));return o}(p,g,f,d,v,m),b=Ft(o,s);return h&&(b+=` `+h),p.className&&(b+=` `+p.className),y[v&&g.includes(`-`)?`class`:`className`]=b,n&&(y.ref=n),(0,_.createElement)(g,y)}(m,e,t)}p.displayName=c;let m=_.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Ft(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,"defaultProps",{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)Rt(e,n,!0);return e}({},i.defaultProps,e):e}}),zt(m,()=>`.${m.styledComponentId}`),a&&jt(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var An=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function jn(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Mn=e=>(tn.add(e),e);function Nn(e,...t){if(Mt(e)||Lt(e))return Mn(mn(jn(nt,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?mn(n):Mn(mn(jn(n,t)))}function Pn(e,t,n=rt){if(!t)throw Be(1,t);let r=(r,...i)=>e(t,n,Nn(r,...i));return r.attrs=r=>Pn(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Pn(e,t,Object.assign(Object.assign({},n),r)),r}var Fn=e=>Pn(kn,e),B=Fn;An.forEach(e=>{B[e]=Fn(e)}),`${Ve}`,`${Ve}`,`${Ve}`;var In=15e3,Ln=new Set,Rn=new Map,zn=!1,Bn=0;function Vn(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function Hn(){zn||(zn=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>Un(e)))}function Un(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?Rn.get(n):void 0;n&&r&&(Rn.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),Ln.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}var V={get available(){return Vn()},send(e){Vn()?(Hn(),window.external.sendMessage(JSON.stringify(e))):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=In){if(!Vn())return Promise.reject(Error(`Native bridge is not available.`));Hn();let r=`req-${++Bn}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{Rn.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);Rn.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return Hn(),Ln.add(e),()=>Ln.delete(e)}},Wn=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),H=o(((e,t)=>{t.exports=Wn()}))();function Gn(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}(0,_.createContext)(Gn({})),(0,_.createContext)(`en`);var Kn=e=>V.send({type:e});function qn(){let[e,t]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{if(V.available)return V.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>Kn(`window.minimize`),toggleMaximize:()=>Kn(`window.toggleMaximize`),close:()=>Kn(`window.close`)}}function Jn(){return{onMouseDown:()=>Kn(`window.drag`),onDoubleClick:()=>Kn(`window.toggleMaximize`)}}function Yn(){let[e,t]=(0,_.useState)(!1),{maximized:n}=qn();return(0,_.useEffect)(()=>{if(!V.available)return;let e=!1;return V.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,_.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var Xn=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function Zn(){return(0,H.jsx)(H.Fragment,{children:Xn.map(([e,t])=>(0,H.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),V.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var Qn={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},$n={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function er(e,t){return V.available?await V.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function tr(e){return V.available?(await V.request(`fs.open`,{path:e})).ok:!1}async function nr(e,t=!0){return await V.request(`fs.list`,{path:e??null,sizes:t})}async function rr(e,t){return V.available?(await V.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function ir(e,t,n,r){return V.available?(await V.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function ar(e){return V.available?await V.request(`fs.list.cached`,{path:e??null}):{cached:!1,listing:null}}async function or(){return(await V.request(`fs.places`)).places}async function sr(){return(await V.request(`fs.drives`)).drives}async function cr(e=!1){return(await V.request(`fs.recycle`,{includeOrphans:e})).entries}async function lr(e){return(await V.request(`fs.recycle.restore`,{id:e})).ok}async function ur(e=!1){await V.request(`fs.recycle.empty`,{includeOrphans:e})}async function dr(e){await V.request(`fs.recycle.delete`,{id:e})}async function fr(){if(!V.available)return{entries:[],cancelled:!0,failed:!1};let e=await V.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function pr(){return V.available?(await V.request(`fs.recycle.admin.purge`)).ok:!1}async function mr(e=0,t=150,n=!1){return V.available?await V.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function hr(){return V.available?(await V.request(`fs.recent`)).entries:[]}async function gr(){return V.available?(await V.request(`fs.frequent`)).entries:[]}async function _r(e){V.available&&await V.request(`fs.frequent.record`,{path:e})}async function vr(){await V.request(`fs.recent.clear`)}async function yr(){await V.request(`fs.frequent.clear`)}async function br(){return await V.request(`fs.visibility`)}var xr={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showCheckboxes:!0,openOnSingleClick:!1};async function Sr(){if(!V.available)return xr;let e=await V.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1}}async function Cr(e){if(!V.available)return e;let t=await V.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick}}async function wr(e,t){V.available&&await V.request(`app.tabs.set`,{tabs:e,active:t})}async function Tr(e,t,n){return V.available?(await V.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}async function Er(){return V.available?(await V.request(`app.pickIcon`)).path:null}async function Dr(){return V.available?(await V.request(`app.pickFolder`)).path:null}var Or={managed:0,private:0,workingSet:0,available:0};async function kr(){return V.available?await V.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1}}async function Ar(){return V.available?await V.request(`app.memory`):Or}async function jr(){return V.available?await V.request(`app.memory.trim`):Or}async function Mr(){return V.available?(await V.request(`app.scheme`)).registered:!1}async function Nr(e){return V.available?(await V.request(`app.scheme.set`,{enabled:e})).registered:!1}var Pr={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,openInNewTab:`ctrl`},Fr=Pr.openInNewTab;function Ir(e){Fr=e.trim()||Pr.openInNewTab}function Lr(e){let t=Fr.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Rr(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function zr(e){return e.split(`+`).filter(Boolean).map(e=>Br[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Br={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Vr(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Hr=new Map,Ur=new Map,Wr=new Set,Gr=0;function Kr(){Hr.clear(),Ur.clear(),Gr+=1,Wr.forEach(e=>e())}function qr(){let[e,t]=(0,_.useState)(Gr);return(0,_.useEffect)(()=>{let e=()=>t(Gr);return Wr.add(e),()=>{Wr.delete(e)}},[]),e}var Jr=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function Yr(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return Jr.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function Xr(e,t,n=!1){let r=qr(),i=Yr(e,t,n),[a,o]=(0,_.useState)(()=>Hr.get(i)??null);return(0,_.useEffect)(()=>{if(!V.available)return;if(Hr.has(i)){o(Hr.get(i)??null);return}let r=!0;return V.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{Hr.set(i,e.dataUrl),r&&o(e.dataUrl)},()=>{Hr.set(i,null),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function Zr(e){let t=qr(),[n,r]=(0,_.useState)(()=>e?Ur.get(e)??null:null);return(0,_.useEffect)(()=>{if(!e||!V.available){r(null);return}if(Ur.has(e)){r(Ur.get(e)??null);return}let t=!0;return V.request(`fs.iconFile`,{path:e}).then(n=>{Ur.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{Ur.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var Qr=null,$r=null;function ei(){return Qr===null?V.available?($r??=V.request(`app.thumbnails`).then(e=>(Qr=e.base??``,Qr),()=>(Qr=``,``)),$r):Promise.resolve(``):Promise.resolve(Qr)}function ti(e,t=128,n=0){let[r,i]=(0,_.useState)(Qr);return(0,_.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return ei().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}`}async function ni(e,t=!1){return!V.available||e.length===0?!1:(await V.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function ri(){return V.available?(await V.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function ii(e){return V.available?(await V.request(`fs.clipboard.paste`,{directory:e})).ok:!1}async function ai(e){return!V.available||e.length===0?!1:(await V.request(`fs.operation.delete`,{paths:e})).ok}async function oi(e,t){return V.available?await V.request(`fs.operation.rename`,{path:e,name:t}):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function si(e){return V.available?await V.request(`fs.operation.newFolder`,{directory:e}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function ci(e){V.available&&e.length!==0&&await V.request(`fs.operation.properties`,{paths:e})}async function li(e){V.available&&await V.request(`fs.operation.openWith`,{path:e})}async function ui(e){V.available&&await V.request(`fs.operation.terminal`,{path:e})}async function di(e){return V.available?await V.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function fi(e,t){return V.available?(await V.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function pi(e){V.available&&await V.request(`fs.operation.showInExplorer`,{path:e})}async function mi(e){return!V.available||e.length===0?{verbs:[],safe:!0}:await V.request(`shell.verbs`,{paths:e})}async function hi(e,t,n,r){V.available&&e.length!==0&&await V.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function gi(e){return!V.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await V.request(`fs.operation.compress`,{paths:e})}var _i={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},vi={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function yi(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=t.matchCase?t.query:t.query.toLowerCase(),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}try{let n=new RegExp(t.query,t.matchCase?`g`:`gi`),r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}catch{return null}}function bi(e,t){return yi(e,t)!==null}var xi=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],Si={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Ci(e){let t=Ti(e);for(let{kind:e}of xi)if(Si[e].has(t))return e;return null}function wi(e){return Ci(e)!==null}function Ti(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}function Ei(e){if(e<0)return`—`;if(e===0)return`0 B`;let t=[`B`,`KB`,`MB`,`GB`,`TB`],n=Math.min(Math.floor(Math.log(e)/Math.log(1024)),t.length-1);return`${(e/1024**n).toFixed(n===0?0:1)} ${t[n]}`}function Di(){let e=document.documentElement.lang.trim();return e.length>0?e:void 0}function Oi(e){return e<=0?`—`:new Date(e).toLocaleString(Di(),{year:`numeric`,month:`2-digit`,day:`2-digit`,hour:`2-digit`,minute:`2-digit`})}function ki(e){return e>=.9?`#ef4444`:e>=.75?`#f59e0b`:`var(--accent-gradient)`}function Ai(e){return e.replace(/[\\/]+$/,``).split(/[\\/]/).at(-1)||e}function ji(e){return e.replace(/[\\/]+/g,`\\`).replace(/\\$/,``).toLowerCase()}function Mi(e){let t=e.name.replace(/[\\/]+$/,``);return/^[a-z]:$/i.test(t)?` (${t.toUpperCase()})`:``}function Ni(e){return`${e.label||`Local Disk`}${Mi(e)}`}var Pi=(0,_.createContext)({places:{},useIcons:!1}),Fi=Pi.Provider;function Ii(){return(0,_.useContext)(Pi)}function Li(e,t){return e.places[ji(t)]}function Ri(e,t,n){return Li(e,t)?.name||n}var zi=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,H.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,H.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),Bi=e=>(0,H.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,H.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),Vi=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,H.jsx)(`path`,{d:`M14 3v4h4`})]}),Hi=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,H.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,H.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),Ui=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,H.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),Wi=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M12 19V5`}),(0,H.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),Gi=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,H.jsx)(`path`,{d:`M20 4v7h-7`})]}),Ki=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M12 5v14`}),(0,H.jsx)(`path`,{d:`M5 12h14`})]}),qi=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M19 12H5`}),(0,H.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),Ji=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M5 12h14`}),(0,H.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),Yi=e=>(0,H.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,H.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),Xi=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,H.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),Zi=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,H.jsx)(`path`,{d:`M12 12v8`})]}),Qi=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,H.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),$i=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,H.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,H.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,H.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),ea=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,H.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),ta=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M4 7h16`}),(0,H.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,H.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,H.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),U=e=>(0,H.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,H.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),na=e=>(0,H.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,H.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),ra=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,H.jsxs)(`defs`,{children:[(0,H.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,H.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,H.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,H.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,H.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,H.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,H.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,H.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,H.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,H.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),ia=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,H.jsx)(`path`,{d:`M15 3v4h4`}),(0,H.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),aa=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,H.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,H.jsx)(`path`,{d:`m13 5-2 14`})]}),oa=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,H.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,H.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),sa=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,H.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),ca=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,H.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,H.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),la=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,H.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),ua=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,H.jsx)(`path`,{d:`M15 3v4h4`}),(0,H.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),da=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,H.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),fa=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,H.jsx)(`path`,{d:`M8.5 14h7`})]}),pa=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,H.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,H.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),ma=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,H.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),ha=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,H.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),ga=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,H.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),_a=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,H.jsx)(`path`,{d:`M15 3v4h4`}),(0,H.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),va=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,H.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,H.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,H.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),ya=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,H.jsx)(`path`,{d:`m14 6 4 4`})]}),ba=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,H.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),xa=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,H.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Sa=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M12 4v10`}),(0,H.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,H.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Ca=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,H.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,H.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),wa=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,H.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,H.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Ta=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,H.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Ea=e=>(0,H.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,H.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Da=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,H.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Oa=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,H.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,H.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),ka=e=>(0,H.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,H.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),Aa=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,H.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,H.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,H.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),ja=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,H.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Ma=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,H.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Na=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,H.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,H.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),Pa=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,H.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),Fa=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,H.jsx)(`path`,{d:`M3.5 12h17`}),(0,H.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Ia=e=>(0,H.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,H.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),La=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,H.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),Ra=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,H.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,H.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),za=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,H.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),Ba=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M12 16V4`}),(0,H.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,H.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]});function W(e,t){return({size:n=t,...r})=>(0,H.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var Va=W(zi,18),Ha=W(Bi,18),Ua=W(Vi,18),Wa=W(Hi,18),Ga=W(Ui,16),Ka=W(Wi,16),qa=W(Gi,16),Ja=W(Ki,16),Ya=W(qi,16),Xa=W(Ji,16),Za=W(Yi,12),Qa=W(Xi,18),$a=W(Zi,14),eo=W(Qi,14),to=W($i,14),no=W(ea,18),ro=W(ta,18),io=W(U,14),ao=W(na,14),oo=W(ra,18),so=W(ia,18),co=W(aa,18),lo=W(oa,18),uo=W(sa,18),fo=W(ca,18),po=W(la,18),mo=W(ua,18),ho=W(da,18),go=W(fa,18),_o=W(pa,18),vo=W(ma,18),yo=W(ha,18),bo=W(ga,18),xo=W(_a,18),So=W(va,18),Co=W(ya,16),wo=W(ba,18),To=W(xa,18),Eo=W(Sa,18),Do=W(Ca,18),Oo=W(wa,18),ko=W(Ta,18),Ao=W(Ea,18),jo=W(Da,18),Mo=W(Oa,18),No=W(ka,18),Po=W(Aa,18),Fo=W(ja,18),Io=W(Ma,18),Lo=W(Na,18),Ro=W(Pa,18),G=W(Fa,18),zo=W(Ia,18),Bo=W(La,16),Vo=W(Ra,16),Ho=W(za,16),Uo=W(Ba,16),Wo=m();function Go({x:e,y:t,items:n,quick:r=[],onClose:i}){let a=(0,_.useRef)(null),o=(0,_.useRef)(null),s=(0,_.useRef)(void 0),[c,l]=(0,_.useState)(null);if((0,_.useEffect)(()=>{let e=e=>a.current?.contains(e)||o.current?.contains(e),t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),s=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,s,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,s,!0)}},[i]),(0,_.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let u=Math.max(8,Math.min(e,window.innerWidth-280)),d=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),f=()=>window.clearTimeout(s.current),p=()=>{f(),s.current=window.setTimeout(()=>l(null),180)},m=(e,t)=>{f();let n=e.currentTarget.getBoundingClientRect(),r=n.right+248>window.innerWidth?Math.max(8,n.left-248):n.right+4,i=Math.max(8,Math.min(n.top,window.innerHeight-320));l({items:t,left:r,top:i})},h=e=>{i(),e.onSelect()},g=e=>{let t=[],n;return e.forEach((e,r)=>{e.group&&e.group!==n&&(t.length>0&&t.push((0,H.jsx)(ts,{},`group-rule-${r}`)),t.push((0,H.jsx)(es,{children:e.group},`group-${r}`)),n=e.group),e.separatorBefore&&t.length>0&&t.push((0,H.jsx)(ts,{},`rule-${r}`));let i=(e.children?.length??0)>0;t.push((0,H.jsxs)(Zo,{$danger:e.danger,$depth:e.depth,disabled:e.disabled,onClick:t=>{i?m(t,e.children):h(e)},onPointerEnter:i?t=>m(t,e.children):void 0,onPointerLeave:i?p:void 0,role:`menuitem`,type:`button`,children:[(0,H.jsx)(Qo,{children:e.loading?(0,H.jsx)(ns,{}):e.icon}),(0,H.jsx)($o,{children:e.label}),i?(0,H.jsx)(Za,{size:12}):e.checked&&(0,H.jsx)(io,{size:12})]},`${e.label}-${r}`))}),t};return(0,Wo.createPortal)((0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(Ko,{onContextMenu:e=>e.preventDefault(),ref:a,role:`menu`,style:{left:u,top:d},children:[r.length>0&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(qo,{children:r.map((e,t)=>(0,H.jsxs)(Jo,{$danger:e.danger,disabled:e.disabled,onClick:()=>h(e),title:e.label,type:`button`,children:[(0,H.jsx)(Yo,{children:e.icon}),(0,H.jsx)(Xo,{children:e.label})]},`${e.label}-${t}`))}),(0,H.jsx)(ts,{})]}),g(n)]}),c&&(0,H.jsx)(Ko,{onPointerEnter:f,onPointerLeave:p,ref:o,role:`menu`,style:{left:c.left,minWidth:240,top:c.top},children:g(c.items)})]}),document.body)}var Ko=B.div`
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
`,qo=B.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,Jo=B.button`
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
`,Yo=B.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,Xo=B.span`
    max-width: 64px;
    overflow: hidden;
    font-size: 9px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Zo=B.button`
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
`,Qo=B.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,$o=B.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,es=B.div`
    padding: 7px 10px 3px;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ts=B.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,ns=B.span`
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
`,rs=[`quick`,`frequent`,`recent`,`home`,`drives`],is=rs,as={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`},os={folder:e=>(0,H.jsx)(Ha,{size:e}),home:e=>(0,H.jsx)(Va,{size:e}),desktop:e=>(0,H.jsx)(wo,{size:e}),documents:e=>(0,H.jsx)(To,{size:e}),downloads:e=>(0,H.jsx)(Eo,{size:e}),pictures:e=>(0,H.jsx)(Do,{size:e}),music:e=>(0,H.jsx)(Oo,{size:e}),videos:e=>(0,H.jsx)(ko,{size:e}),drive:e=>(0,H.jsx)(Wa,{size:e}),image:e=>(0,H.jsx)(lo,{size:e}),video:e=>(0,H.jsx)(uo,{size:e}),audio:e=>(0,H.jsx)(fo,{size:e}),text:e=>(0,H.jsx)(so,{size:e}),code:e=>(0,H.jsx)(co,{size:e}),clock:e=>(0,H.jsx)(no,{size:e}),star:e=>(0,H.jsx)(Ao,{size:e}),file:e=>(0,H.jsx)(Ua,{size:e}),archive:e=>(0,H.jsx)(po,{size:e}),pdf:e=>(0,H.jsx)(mo,{size:e}),executable:e=>(0,H.jsx)(ho,{size:e}),font:e=>(0,H.jsx)(go,{size:e}),database:e=>(0,H.jsx)(_o,{size:e}),config:e=>(0,H.jsx)(vo,{size:e}),spreadsheet:e=>(0,H.jsx)(yo,{size:e}),presentation:e=>(0,H.jsx)(bo,{size:e}),document:e=>(0,H.jsx)(xo,{size:e}),app:e=>(0,H.jsx)(oo,{size:e}),gear:e=>(0,H.jsx)(Qa,{size:e}),pin:e=>(0,H.jsx)($a,{size:e}),trash:e=>(0,H.jsx)(ro,{size:e}),overview:e=>(0,H.jsx)(So,{size:e}),book:e=>(0,H.jsx)(jo,{size:e}),briefcase:e=>(0,H.jsx)(Mo,{size:e}),cloud:e=>(0,H.jsx)(No,{size:e}),gamepad:e=>(0,H.jsx)(Po,{size:e}),camera:e=>(0,H.jsx)(Fo,{size:e}),terminal:e=>(0,H.jsx)(Io,{size:e}),server:e=>(0,H.jsx)(Lo,{size:e}),package:e=>(0,H.jsx)(Ro,{size:e}),globe:e=>(0,H.jsx)(G,{size:e}),heart:e=>(0,H.jsx)(zo,{size:e})};function ss(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function cs(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??rs)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||is.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=ss(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${as[n]??n}${ls(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function ls(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function us({panel:e,size:t=16}){let n=Zr(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,H.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?os[e.icon]:void 0;if(r)return(0,H.jsx)(H.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,H.jsx)(Ha,{size:t});case`recent`:return(0,H.jsx)(no,{size:t});case`frequent`:return(0,H.jsx)(Ao,{size:t});case`drives`:return(0,H.jsx)(Wa,{size:t});case`home`:return(0,H.jsx)(Va,{size:t});default:return(0,H.jsx)(Ha,{size:t})}}function ds({place:e,size:t=18}){let n=Zr(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,H.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&os[e.icon]?(0,H.jsx)(H.Fragment,{children:os[e.icon](t)}):(0,H.jsx)(Ha,{size:t})}function fs(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function ps({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let[s,c]=(0,_.useState)(``),[l,u]=(0,_.useState)(`#3b82f6`),d=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let f=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),p=e=>i[e]??`#64748b`,m=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},h=(e,t)=>{a(n,{...i,[e]:t})},g=()=>{let e=s.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:l}),c(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,Wo.createPortal)((0,H.jsxs)(ms,{"data-tag-menu":`true`,ref:d,style:{left:v,top:y},children:[(0,H.jsxs)(hs,{children:[(0,H.jsx)(`span`,{children:`Tags`}),(0,H.jsx)(gs,{onClick:o,title:`Close`,type:`button`,children:(0,H.jsx)(ao,{size:11})})]}),(0,H.jsxs)(_s,{children:[f.length===0&&(0,H.jsx)(xs,{children:`No tags yet.`}),f.map(e=>{let t=p(e),r=n.includes(e);return(0,H.jsxs)(vs,{children:[(0,H.jsx)(ys,{"aria-label":`Color of ${e}`,onChange:t=>h(e,t.target.value),title:`Change this tag's color`,type:`color`,value:t}),(0,H.jsxs)(bs,{$color:t,$ink:fs(t),$on:r,onClick:()=>m(e),type:`button`,children:[r&&(0,H.jsx)(io,{size:11}),(0,H.jsx)(`span`,{children:e})]})]},e)})]}),(0,H.jsxs)(Ss,{children:[(0,H.jsx)(ys,{"aria-label":`Color of the new tag`,onChange:e=>u(e.target.value),title:`Color of the new tag`,type:`color`,value:l}),(0,H.jsx)(`input`,{onChange:e=>c(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),g())},placeholder:`New tag`,spellCheck:!1,value:s}),(0,H.jsx)(Cs,{onClick:g,type:`button`,children:`Add`})]})]}),document.body)}var ms=B.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
`,hs=B.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,gs=B.button`
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
`,_s=B.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,vs=B.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,ys=B.input`
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
`,bs=B.button`
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
`,xs=B.span`
    font-size: 10px;
    color: var(--text-muted);
`,Ss=B.div`
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
`,Cs=B.button`
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
`,ws={file:Ua,folder:Ha,text:so,code:co,image:lo,video:uo,audio:fo,archive:po,pdf:mo,executable:ho,font:go,database:_o,config:vo,spreadsheet:yo,presentation:bo,document:xo},Ts={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Es(e){let t=e.lastIndexOf(`.`);return t>0?Ts[e.slice(t).toLowerCase()]??`file`:`file`}function Ds({name:e,size:t}){let n=ws[e??`file`]??Ua;return(0,H.jsx)(n,{size:t})}var Os=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],ks=190,As=120;function js({listing:e,loading:t,error:n,find:r=vi,view:i,showImages:a,imageStripHeight:o=ks,onImageStripHeight:s,onSort:c,onSetTags:l,onOpen:u,onOpenFile:d,showCheckboxes:f=!0,openOnSingleClick:p=!1,onRefresh:m}){let h=Ii(),g=(0,_.useRef)(null),v=(0,_.useRef)(null),y=(0,_.useRef)(null),[b,x]=(0,_.useState)(null),[S,C]=(0,_.useState)(o),[ee,w]=(0,_.useState)(()=>new Set),[T,E]=(0,_.useState)(null),[D,te]=(0,_.useState)(!1),O=(0,_.useRef)(0),k=(0,_.useRef)(0),[ne,re]=(0,_.useState)({verbs:[],safe:!0,loading:!1}),[ie,A]=(0,_.useState)({recommended:[],other:[],loading:!1});(0,_.useEffect)(()=>{w(new Set),E(null),re({verbs:[],safe:!0,loading:!1}),A({recommended:[],other:[],loading:!1}),O.current+=1,k.current+=1,y.current=null},[e?.path]),(0,_.useEffect)(()=>{C(o)},[o]);let ae=e=>{v.current={y:e.clientY,height:S},e.currentTarget.setPointerCapture(e.pointerId)},j=e=>{let t=v.current;if(!t)return;let n=Math.max(As,Math.round(window.innerHeight*.7));C(Math.min(n,Math.max(As,t.height+t.y-e.clientY)))},oe=e=>{v.current&&(v.current=null,e.currentTarget.releasePointerCapture(e.pointerId),s?.(S))},se=()=>{C(ks),s?.(ks)};(0,_.useEffect)(()=>{g.current?.scrollIntoView({block:`nearest`})},[r.currentPath]);let ce=r.query.length>0,le=Os.filter(e=>i.columns?.includes(e.id)),ue=i.columns?.includes(`linkTarget`)??!1,de=`minmax(160px, 1fr) ${le.map(e=>`${e.width}px`).join(` `)}`.trim(),fe=(0,_.useMemo)(()=>e?Ps(e.entries.map(t=>{let n=Li(h,t.fullPath),i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:ce?yi(i,r):null,tags:e.tags[t.name]??[]}}).filter(e=>!ce||r.mode===`dim`||e.ranges!==null),i,e):[],[e,ce,r,h,i.sort,i.sortDescending]),pe=(0,_.useMemo)(()=>Ls(fe,Is),[fe]),me=(0,_.useMemo)(()=>fe.filter(e=>!e.entry.isDirectory&&wi(e.entry.name)),[fe]),M=(0,_.useMemo)(()=>Ls(me,Fs),[me]),N=(0,_.useMemo)(()=>fe.map(e=>e.entry.fullPath),[fe]),he=e?.path??``,ge=(0,_.useCallback)((e,t)=>{let n=e.ctrlKey||e.metaKey;w(r=>{if(e.shiftKey&&y.current!==null){let e=N.indexOf(y.current),i=N.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(N[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),y.current=t,e}return y.current=t,new Set([t])})},[N]),P=(0,_.useCallback)(e=>{y.current=e,w(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},[]),F=(0,_.useCallback)(()=>{y.current=null,w(new Set)},[]),_e=(0,_.useCallback)(()=>{O.current+=1,k.current+=1,E(null)},[]);(0,_.useEffect)(()=>{let e=e=>{Vr(e.target)||(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`&&(e.preventDefault(),w(new Set(N)),y.current=N[0]??null)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[N]);let ve=(0,_.useCallback)((e,t)=>{e.isDirectory?u(e.fullPath,Lr(t)):d?.(e.fullPath)},[u,d]),I=(0,_.useCallback)((e,t)=>{e.preventDefault(),e.stopPropagation(),t&&!ee.has(t)&&w(new Set([t])),t&&(y.current=t);let n=t?ee.has(t)?[...ee]:[t]:[],r=t?n:he?[he]:[],i=++O.current,a=t?fe.find(e=>e.entry.fullPath===t):void 0,o=a&&!a.entry.isDirectory&&n.length===1?a.entry.fullPath:null,s=++k.current;E({x:e.clientX,y:e.clientY,paths:n,background:!t}),re({verbs:[],safe:!0,loading:r.length>0}),o?(A({recommended:[],other:[],loading:!0}),di(o).then(e=>{k.current===s&&A({...e,loading:!1})},()=>{k.current===s&&A({recommended:[],other:[],loading:!1})})):A({recommended:[],other:[],loading:!1}),ri().then(te,()=>te(!1)),r.length!==0&&mi(r).then(e=>{O.current===i&&re({...e,loading:!1})},()=>{O.current===i&&re({verbs:[],safe:!0,loading:!1})})},[he,fe,ee]),L=()=>m?.(),ye=async(e,t=!1)=>{await ni(e,t)&&te(!0)},R=async e=>{await ii(e)?L():window.alert(`Nothing on the clipboard could be pasted here.`)},be=async()=>{let e=await si(he);e.ok?L():window.alert(e.error??`Could not create the folder.`)},xe=async e=>{let t=window.prompt(`Rename`,e.name);if(t===null||t.trim().length===0||t===e.name)return;let n=await oi(e.fullPath,t);n.ok?(F(),L()):window.alert(n.error??`Could not rename the entry.`)},Se=async e=>{window.confirm(`Move ${e.length===1?`this item`:`${e.length} items`} to the recycle bin?`)&&(await ai(e)?(F(),L()):window.alert(`The shell could not move the selection to the recycle bin.`))},Ce=async e=>{let t=await gi(e);t.ok?L():window.alert(t.error??`Could not create the ZIP file.`)},we=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},Te=[],Ee=[],De=T?.paths[0],Oe=De?fe.find(e=>e.entry.fullPath===De)?.entry:void 0,ke=T?.paths.length===1,Ae=T?.background?he?[he]:[]:T?.paths??[],je=ne.safe?`Shell actions (standard)`:`Shell actions`;if(T?.background)Te.push({label:`Open in Terminal`,icon:(0,H.jsx)(Io,{size:14}),onSelect:()=>void ui(he)}),Te.push({label:`Show in Explorer`,icon:(0,H.jsx)(Ha,{size:14}),separatorBefore:!0,onSelect:()=>void pi(he)}),Ee.push({label:`New folder`,icon:(0,H.jsx)(Ja,{size:16}),onSelect:()=>void be()},{label:`Paste`,icon:(0,H.jsx)(Ho,{size:16}),disabled:!D,onSelect:()=>void R(he)},{label:`Refresh`,icon:(0,H.jsx)(qa,{size:16}),onSelect:L},{label:`Properties`,icon:(0,H.jsx)(Qa,{size:16}),onSelect:()=>void ci([he])});else if(T){if(Te.push({label:`Open`,icon:(0,H.jsx)(Xa,{size:14}),onSelect:()=>{Oe&&(Oe.isDirectory?u(Oe.fullPath):d?.(Oe.fullPath))}}),Oe?.isDirectory&&(Te.push({label:`Open in new tab`,icon:(0,H.jsx)(Ja,{size:14}),onSelect:()=>u(Oe.fullPath,!0)}),Te.push({label:`Paste into folder`,icon:(0,H.jsx)(Ho,{size:14}),disabled:!D,onSelect:()=>void R(Oe.fullPath)}),Te.push({label:`Open in Terminal`,icon:(0,H.jsx)(Io,{size:14}),onSelect:()=>void ui(Oe.fullPath)})),ke&&Oe&&!Oe.isDirectory){let e=[];ie.loading?e.push({label:`Loading apps…`,loading:!0,disabled:!0,onSelect:()=>void 0}):(ie.recommended.forEach(t=>{e.push({label:t.name,group:`Suggested apps`,icon:t.icon?(0,H.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,H.jsx)(oo,{size:14}),onSelect:()=>void fi(Oe.fullPath,t.path).then(e=>{e||li(Oe.fullPath)})})}),ie.other.forEach(t=>{e.push({label:t.name,group:`Other apps`,icon:t.icon?(0,H.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,H.jsx)(oo,{size:14}),onSelect:()=>void fi(Oe.fullPath,t.path).then(e=>{e||li(Oe.fullPath)})})})),e.push({label:`Choose another app…`,icon:(0,H.jsx)(oo,{size:14}),separatorBefore:!0,onSelect:()=>void li(Oe.fullPath)}),Te.push({label:`Open with`,icon:(0,H.jsx)(oo,{size:14}),children:e,onSelect:()=>void li(Oe.fullPath)})}Te.push({label:`Compress to ZIP`,icon:(0,H.jsx)(po,{size:14}),separatorBefore:!0,onSelect:()=>void Ce(T.paths)}),Te.push({label:`Copy as path`,icon:(0,H.jsx)(Bo,{size:14}),onSelect:()=>void we(T.paths)}),Te.push({label:`Show in Explorer`,icon:(0,H.jsx)(Ha,{size:14}),separatorBefore:!0,onSelect:()=>void pi(T.paths[0])}),Ee.push({label:`Cut`,icon:(0,H.jsx)(Vo,{size:16}),onSelect:()=>void ye(T.paths,!0)},{label:`Copy`,icon:(0,H.jsx)(Bo,{size:16}),onSelect:()=>void ye(T.paths,!1)}),ke&&Oe&&Ee.push({label:`Rename`,icon:(0,H.jsx)(Co,{size:16}),onSelect:()=>void xe(Oe)}),Ee.push({label:`Delete`,icon:(0,H.jsx)(ro,{size:16}),danger:!0,onSelect:()=>void Se(T.paths)},{label:`Properties`,icon:(0,H.jsx)(Qa,{size:16}),onSelect:()=>void ci(T.paths)})}return T&&(ne.loading?Te.push({label:`Reading shell actions…`,group:je,loading:!0,disabled:!0,onSelect:()=>void 0}):ne.verbs.forEach(e=>{Te.push({label:e.label,group:e.group??je,depth:e.group?e.depth:0,icon:(0,H.jsx)(Ms,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void hi(Ae,ne.safe,e.verb,e.offset)})})),n?(0,H.jsx)(Mc,{children:(0,H.jsx)(Pc,{children:n})}):!e&&!t?(0,H.jsx)(Mc,{children:(0,H.jsx)(Nc,{children:`Nothing selected.`})}):i.mode===`grid`?(0,H.jsxs)(Qs,{children:[(0,H.jsxs)(oc,{onClick:e=>{e.target===e.currentTarget&&F()},onContextMenu:e=>I(e),children:[t&&!e?(0,H.jsx)(dc,{$size:i.gridSize,children:(0,H.jsx)(Ks,{size:i.gridSize})}):(0,H.jsx)(Js,{counts:e?.counts,currentPath:ce?r.currentPath:null,groups:pe,gridSize:i.gridSize,innerRef:g,onContextMenu:I,onOpen:u,onOpenFile:d,onSelect:ge,onToggle:P,openOnSingleClick:p,searching:ce,selected:ee,showCheckboxes:f,showTarget:ue}),!t&&e&&fe.length===0&&(0,H.jsx)(jc,{children:(0,H.jsx)(Nc,{children:ce&&r.mode===`hide`?`No entries match the search.`:`This folder is empty.`})})]}),T&&(0,H.jsx)(Go,{items:Te,onClose:_e,quick:Ee,x:T.x,y:T.y})]}):(0,H.jsxs)(Qs,{children:[(0,H.jsxs)($s,{style:{gridTemplateColumns:de},children:[(0,H.jsxs)(ec,{onClick:()=>c(`name`),type:`button`,children:[`Name`,Ns(i,`name`)]}),le.map(e=>(0,H.jsxs)(ec,{onClick:()=>c(e.id),type:`button`,children:[e.label,Ns(i,e.id)]},e.id))]}),(0,H.jsxs)(tc,{onClick:e=>{e.target===e.currentTarget&&F()},onContextMenu:e=>I(e),children:[t&&!e?(0,H.jsx)(Gs,{template:de,columns:le.length}):fe.map(t=>{let n=ce&&t.ranges===null,a=ce&&t.entry.fullPath===r.currentPath,o=t.entry.fullPath,s=ee.has(o);return(0,H.jsxs)(mc,{$current:a,$dim:n,$hidden:t.entry.isHidden,$selected:s,onClick:e=>{ge(e,o),p&&ve(t.entry,e)},onContextMenu:e=>I(e,o),onDoubleClick:e=>{p||ve(t.entry,e)},ref:a?g:void 0,style:{gridTemplateColumns:de},children:[(0,H.jsxs)(hc,{children:[f&&(0,H.jsx)(Xs,{$checked:s,onClick:e=>{e.stopPropagation(),P(o)},onDoubleClick:e=>e.stopPropagation(),title:s?`Deselect`:`Select`,type:`button`,children:s&&(0,H.jsx)(io,{size:10})}),t.place&&h.useIcons?(0,H.jsx)(Ys,{children:(0,H.jsx)(ds,{place:t.place,size:i.iconSize})}):(0,H.jsx)(Ws,{entry:t.entry,size:i.iconSize}),(0,H.jsx)(gc,{$broken:t.entry.linkValid===!1,title:t.entry.name,children:(0,H.jsx)(Hs,{name:t.label,ranges:t.ranges})}),ue&&t.entry.linkTarget&&(0,H.jsxs)(_c,{title:t.entry.linkTarget,children:[`→ `,t.entry.linkTarget]})]}),le.map(n=>(0,H.jsx)(vc,{children:n.id===`tags`?(0,H.jsx)(yc,{onClick:e=>{e.stopPropagation(),x({entry:t.entry,x:e.clientX,y:e.clientY})},title:`Edit tags`,type:`button`,children:t.tags.length>0?t.tags.map(t=>{let n=e.tagColors?.[t]??`#64748b`;return(0,H.jsx)(bc,{$color:n,$ink:fs(n),children:t},t)}):(0,H.jsx)(xc,{children:`+`})}):n.id===`linkStatus`&&t.entry.linkValid===!1?(0,H.jsx)(Sc,{children:`Broken`}):Vs(n.id,t.entry,e)},n.id))]},o)}),!t&&e&&fe.length===0&&(0,H.jsx)(Mc,{children:(0,H.jsx)(Nc,{children:ce&&r.mode===`hide`?`No entries match the search.`:`This folder is empty.`})})]}),a&&me.length>0&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(nc,{onDoubleClick:se,onPointerDown:ae,onPointerMove:j,onPointerUp:oe,title:`Drag to resize; double-click to reset`}),(0,H.jsxs)(rc,{style:{height:S},children:[(0,H.jsxs)(ic,{children:[`Preview`,(0,H.jsx)(ac,{children:me.length})]}),(0,H.jsx)(oc,{onClick:e=>{e.target===e.currentTarget&&F()},onContextMenu:e=>I(e),children:(0,H.jsx)(Js,{counts:e?.counts,currentPath:ce?r.currentPath:null,groups:M,gridSize:i.gridSize,onContextMenu:I,onOpen:u,onOpenFile:d,onSelect:ge,onToggle:P,openOnSingleClick:p,searching:ce,selected:ee,showCheckboxes:f,showTarget:ue})})]})]}),b&&e&&(0,H.jsx)(ps,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>l?.(b.entry.name,e,t),onClose:()=>x(null),tags:e.tags[b.entry.name]??[],x:b.x,y:b.y}),T&&(0,H.jsx)(Go,{items:Te,onClose:_e,quick:Ee,x:T.x,y:T.y})]})}function Ms({source:e}){if(!e)return(0,H.jsx)(oo,{size:14});if(e.startsWith(`data:`))return(0,H.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,H.jsx)(Xa,{size:14});case`document`:return(0,H.jsx)(xo,{size:14});case`cut`:return(0,H.jsx)(Vo,{size:14});case`copy`:return(0,H.jsx)(Bo,{size:14});case`paste`:return(0,H.jsx)(Ho,{size:14});case`trash`:return(0,H.jsx)(ro,{size:14});case`pencil`:return(0,H.jsx)(Co,{size:14});case`gear`:return(0,H.jsx)(Qa,{size:14});case`star`:return(0,H.jsx)(Ao,{size:14});case`pin`:return(0,H.jsx)($a,{size:14});case`executable`:return(0,H.jsx)(ho,{size:14});case`share`:return(0,H.jsx)(Uo,{size:14});case`arrow`:return(0,H.jsx)(Xa,{size:14});default:return(0,H.jsx)(oo,{size:14})}}function Ns(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}function Ps(e,t,n){let r=e=>{switch(t.sort){case`type`:return Bs(e);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}};return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let i=r(e.entry),a=r(n.entry),o=typeof i==`number`&&typeof a==`number`?i-a:String(i).localeCompare(String(a),void 0,{numeric:!0,sensitivity:`base`});return t.sortDescending?-o:o})}var Fs=xi.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Ci(t.entry.name)===e})),Is=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...Fs.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function Ls(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function Rs(e){return Math.max(24,Math.min(e-56,160))}var zs={file:`file`,folder:`folder`,text:`text file`,code:`source file`,image:`image`,video:`video`,audio:`audio`,archive:`archive`,pdf:`PDF`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Bs(e){let t=e.name.toLowerCase();if(t.endsWith(`.lnk`))return`Shortcut`;if(t.endsWith(`.url`)||t.endsWith(`.website`))return`Internet shortcut`;if(e.linkTarget!=null)return e.isDirectory?`Folder link`:`Symbolic link`;if(e.isDirectory)return`Folder`;let n=e.name.lastIndexOf(`.`),r=n>0&&n<e.name.length-1?e.name.slice(n+1).toUpperCase():``,i=zs[Es(e.name)]??`file`;return r.length>0?`${r} ${i}`:`File`}function Vs(e,t,n){switch(e){case`type`:return Bs(t);case`size`:return Us(t,n.folderSizes);case`modified`:return Oi(t.modified);case`created`:return Oi(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:`Broken`;default:return``}}function Hs({name:e,ranges:t}){if(!t||t.length===0)return(0,H.jsx)(H.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,H.jsx)(Ac,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,H.jsx)(H.Fragment,{children:n})}function Us(e,t){if(!e.isDirectory)return Ei(e.size);let n=t[e.name];return n===void 0?`—`:Ei(n)}function Ws({entry:e,size:t=18}){let n=Xr(e.fullPath,e.isDirectory,t>32),r=Zr(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,H.jsx)(Ys,{$size:t,children:e.iconSource?.startsWith(`icon:`)?(0,H.jsx)(Ds,{name:e.iconSource.slice(5),size:t}):r?(0,H.jsx)(`img`,{alt:``,height:t,src:r,width:t}):n?(0,H.jsx)(`img`,{alt:``,height:t,src:n,width:t}):e.isDirectory?(0,H.jsx)(Ha,{size:t}):(0,H.jsx)(Ds,{name:Es(e.name),size:t})})}function Gs({template:e,columns:t}){return(0,H.jsx)(H.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,H.jsxs)(fc,{style:{gridTemplateColumns:e},children:[(0,H.jsxs)(hc,{children:[(0,H.jsx)(pc,{style:{flexShrink:0,height:18,width:18}}),(0,H.jsx)(pc,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,H.jsx)(pc,{style:{width:t%2==0?44:92}},t))]},r))})}function Ks({size:e}){return(0,H.jsx)(H.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,H.jsxs)(Cc,{$dim:!1,$current:!1,$selected:!1,children:[(0,H.jsx)(wc,{children:(0,H.jsx)(pc,{style:{height:e,width:e}})}),(0,H.jsx)(Ec,{children:(0,H.jsx)(pc,{style:{height:9,width:`${t}%`}})})]},n))})}var qs=(0,_.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,onSelect:u,onToggle:d,onContextMenu:f,onOpen:p,onOpenFile:m}){let h=Ii(),g=!e.entry.isDirectory&&wi(e.entry.name),v=ti(g?e.entry.fullPath:null,192,e.entry.modified),[y,b]=(0,_.useState)(!1),x=e.entry.fullPath,S=t=>{e.entry.isDirectory?p(x,Lr(t)):m?.(x)};return(0,H.jsxs)(Cc,{$current:t,$dim:n,$selected:s,onClick:e=>{u(e,x),l&&S(e)},onContextMenu:e=>f(e,x),onDoubleClick:e=>{l||S(e)},ref:t?o:void 0,title:e.entry.name,children:[c&&(0,H.jsx)(Zs,{$checked:s,onClick:e=>{e.stopPropagation(),d(x)},onDoubleClick:e=>e.stopPropagation(),title:s?`Deselect`:`Select`,type:`button`,children:s&&(0,H.jsx)(io,{size:10})}),(0,H.jsx)(wc,{children:g&&v&&!y?(0,H.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>b(!0),src:v}):(0,H.jsx)(Tc,{children:e.place&&h.useIcons?(0,H.jsx)(ds,{place:e.place,size:r}):(0,H.jsx)(Ws,{entry:e.entry,size:r})})}),(0,H.jsxs)(Ec,{children:[(0,H.jsx)(Dc,{$broken:e.entry.linkValid===!1,children:(0,H.jsx)(Hs,{name:e.label,ranges:e.ranges})}),(0,H.jsx)(Oc,{children:e.entry.isDirectory?i===void 0?Bs(e.entry):`${Bs(e.entry)} · ${i} items`:`${Bs(e.entry)} · ${Ei(e.entry.size)}`}),a&&e.entry.linkTarget&&(0,H.jsxs)(kc,{title:e.entry.linkTarget,children:[`→ `,e.entry.linkTarget]})]})]})});function Js({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,onSelect:u,onToggle:d,onContextMenu:f,onOpen:p,onOpenFile:m}){return(0,H.jsx)(H.Fragment,{children:e.map(e=>(0,H.jsxs)(sc,{children:[(0,H.jsxs)(cc,{children:[e.label,(0,H.jsx)(lc,{children:e.rows.length}),(0,H.jsx)(uc,{})]}),(0,H.jsx)(dc,{$size:t,children:e.rows.map(e=>(0,H.jsx)(qs,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:Rs(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:f,onOpen:p,onOpenFile:m,onSelect:u,onToggle:d,openOnSingleClick:l,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}var Ys=B.span`
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
`,Xs=B.button`
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
`,Zs=B(Xs)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(59, 130, 246, 0.9)`:`rgba(15, 23, 42, 0.6)`};
    backdrop-filter: blur(4px);
`,Qs=B.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    flex: 1;
`,$s=B.div`
    display: grid;
    gap: 16px;
    padding: 10px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ec=B.button`
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
`,tc=B.div`
    flex: 1;
    min-height: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,nc=B.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(59, 130, 246, 0.35);
    }
`,rc=B.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: var(--bg-secondary);
`,ic=B.div`
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
`,ac=B.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,oc=B.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,sc=B.section`
    & + & {
        margin-top: 22px;
    }
`,cc=B.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,lc=B.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,uc=B.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,dc=B.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,fc=B.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,pc=B.span`
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
`,mc=B.div`
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
    transition: background 100ms ease, border-color 100ms ease, opacity 100ms ease;

    &:hover {
        background: var(--bg-card-hover);
        border-color: var(--border-color);
        color: var(--text-primary);
    }
`,hc=B.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,gc=B.span`
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,_c=B.span`
    overflow: hidden;
    min-width: 0;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--accent-primary);
    text-overflow: ellipsis;
    white-space: nowrap;
`,vc=B.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,yc=B.button`
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
`,bc=B.span`
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
`,xc=B.span`
    color: var(--text-muted);
    font-size: 10px;
`,Sc=B.span`
    color: #fca5a5;
`,Cc=B.div`
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
    transition: background 100ms ease, border-color 100ms ease, opacity 100ms ease;

    &:hover {
        background: var(--bg-card-hover);
        border-color: var(--border-color-hover);
    }
`,wc=B.div`
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
`,Tc=B.span`
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
`,Ec=B.div`
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
`,Dc=B.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Oc=B.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,kc=B.span`
    width: 100%;
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--accent-primary);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ac=B.mark`
    border-radius: 2px;
    background: rgba(59, 130, 246, 0.5);
    color: var(--text-primary);
`,jc=B.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Mc=B.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,Nc=B.p`
    font-size: 13px;
    color: var(--text-muted);
`,Pc=B.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`;function Fc({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,onQuery:s,onPrevious:c,onNext:l,onMatchCase:u,onRegex:d,onMode:f,onClose:p}){let m=(0,_.useRef)(null);(0,_.useEffect)(()=>{let e=m.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let h=e=>{e(),m.current?.focus()};return(0,H.jsxs)(Ic,{children:[(0,H.jsx)(Ga,{}),(0,H.jsx)(Lc,{"aria-label":`Search this folder`,onChange:e=>s(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?c():l()),e.key===`Escape`&&(e.preventDefault(),p())},placeholder:`Search this folder`,ref:m,spellCheck:!1,value:e}),(0,H.jsx)(Rc,{children:i===0?`0/0`:`${a+1}/${i}`}),(0,H.jsx)(zc,{onClick:()=>h(c),title:`Previous match (Shift+Enter)`,type:`button`,children:(0,H.jsx)(Za,{size:12})}),(0,H.jsx)(zc,{$down:!0,onClick:()=>h(l),title:`Next match (Enter)`,type:`button`,children:(0,H.jsx)(Za,{size:12})}),(0,H.jsx)(Bc,{$on:n,onClick:()=>h(u),title:`Match case`,type:`button`,children:`Aa`}),(0,H.jsx)(Bc,{$on:r,onClick:()=>h(d),title:`Regular expression`,type:`button`,children:`.*`}),(0,H.jsx)(Vc,{$on:t===`hide`,onClick:()=>h(f),title:t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`,type:`button`,children:t===`hide`?`Hide`:`Dim`}),(0,H.jsx)(zc,{onClick:p,title:`Close search (Esc)`,type:`button`,children:(0,H.jsx)(ao,{size:12})})]})}var Ic=B.div`
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
`,Lc=B.input`
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
`,Rc=B.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,zc=B.button`
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
`,Bc=B.button`
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
`,Vc=B(Bc)`
    min-width: 34px;
    font-family: var(--font-sans);
    font-size: 10px;
`;function Hc({path:e,name:t,isDirectory:n,size:r=18}){let i=Xr(e,n);return i?(0,H.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,H.jsx)(Ha,{size:r}):(0,H.jsx)(Ds,{name:Es(t),size:r})}function Uc({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=(0,_.useRef)(null),a=(0,_.useRef)(null),[o,s]=(0,_.useState)(null);return(0,_.useLayoutEffect)(()=>{let e=i.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();s({top:t.bottom+6,left:t.left})},[]),(0,_.useLayoutEffect)(()=>{if(!o||!a.current)return;let e=a.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,o.top-e.height-12):o.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):o.left;(t!==o.top||n!==o.left)&&s({top:t,left:n})},[o]),(0,_.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`span`,{ref:i,style:{display:`none`}}),o&&(0,Wo.createPortal)((0,H.jsxs)(Wc,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:a,style:{position:`fixed`,top:o.top,left:o.left},children:[Object.keys(os).map(n=>(0,H.jsx)(Gc,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:os[n](16)},n)),(0,H.jsx)(Gc,{onClick:async()=>{let e=await Er();e&&t(`file:${e}`)},title:`Choose an image`,type:`button`,children:(0,H.jsx)(Ja,{size:13})}),r&&(0,H.jsx)(Gc,{$active:!e,onClick:()=>t(null),title:`Default`,type:`button`,children:(0,H.jsx)(ao,{size:12})})]}),document.body)]})}var Wc=B.div`
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
`,Gc=B.button`
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
`,Kc=B.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 14px 26px 34px;
`,qc=B.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    flex-wrap: wrap;
    padding-bottom: 14px;
`,Jc=B.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,Yc=B.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(99, 102, 241, 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 11px;
    cursor: pointer;
`,Xc=B.button`
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
`,Zc=B.div`
    position: relative;
    display: inline-flex;
`,Qc=B.div`
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
`,$c=B.button`
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
`,el=B.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,tl=B.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-width: 0;
`,nl=B.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,rl=B.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,il=B.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,al=B.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,ol=B.input`
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
`,sl=B.button`
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
`,cl=B.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,ll=B.div`
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
`,ul=B.span`
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
`,dl=B.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,fl=B.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,pl=B.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,ml=B.button`
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
`,hl=B.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,gl=B.button`
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
`,_l=B.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,vl=B.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,yl=B.div`
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
`,bl=B.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,xl=B.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,Sl=B.button`
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
`,Cl=B.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,wl=B.button`
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
`,Tl=B.button`
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
`,El=B.button`
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
`,Dl=B.span`
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
`,Ol=B.button`
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
`,kl=B.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,Al=B.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`;function jl({places:e,drives:t,recent:n,recentLimit:r,homePath:i,historyVersion:a,onOpen:o,onPlacesChanged:s,onRecentCleared:c,onLayoutChanged:l,onHistoryChanged:u,onDrivesChanged:d}){let f=Ii(),[p,m]=(0,_.useState)(!1),[h,g]=(0,_.useState)(null),[v,y]=(0,_.useState)(null),[b,x]=(0,_.useState)(!1),[S,C]=(0,_.useState)(null),[ee,w]=(0,_.useState)(null),[T,E]=(0,_.useState)(null);(0,_.useEffect)(()=>{Sr().then(g,()=>g(null))},[]),(0,_.useEffect)(()=>{if(!v)return;let e=()=>y(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||y(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[v]),(0,_.useEffect)(()=>{if(!b)return;let e=()=>x(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[b]);let D=cs(h),te=D.map(e=>e.id),O=e=>v?.kind===`panel`&&v.id===e,k=e=>v?.kind===`place`&&v.id===e;(0,_.useEffect)(()=>{if(!V.available)return;let e=D.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??i).filter(e=>e.length>0);V.send({type:`fs.watch`,payload:{paths:e}})},[D.map(e=>e.path??e.id).join(`|`),i]);let ne=async(e,t)=>{let n={...h?.placeIcons};t?n[e]=t:delete n[e],y(null),await j({placeIcons:n}),s(await or())},re=async(e,t)=>{let n={...h?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],w(null),await j({placeNames:n}),s(await or())},ie=e=>{E(null),C({drive:e,label:e.label||`Local Disk`})},A=async()=>{if(!S)return;let{drive:e,label:t}=S;C(null);let n=await er(e.name,t.trim());n.ok?(E(null),d?.()):E(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},ae=h?.overviewColumns??1,j=async e=>{if(!h)return;let t={...h,...e,overviewPanels:e.overviewPanels??te,overviewHidden:[]};g(await Cr(t)),l?.()},oe=(e,t)=>{let n=te.indexOf(e),r=n+t;if(n<0||r<0||r>=te.length)return;let i=[...te];[i[n],i[r]]=[i[r],i[n]],j({overviewPanels:i})},se=(e,t)=>{let n={...h?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],j({overviewTitles:n})},ce=(e,t)=>void j({overviewViews:{...h?.overviewViews,[e]:t}}),le=e=>{let t=h?.overviewPinned??D.filter(e=>e.pinned).map(e=>e.id);j({overviewPinned:D.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},ue=e=>{y(null);let t=t=>{let n={...t};return delete n[e],n},n=h?.overviewPinned??D.filter(e=>e.pinned).map(e=>e.id);j({overviewPanels:te.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(h?.overviewTitles),overviewViews:t(h?.overviewViews),overviewIcons:t(h?.overviewIcons),panelPlaces:t(h?.panelPlaces)})},de=(e,t)=>{let n={...h?.overviewIcons};t?n[e]=t:delete n[e],y(null),j({overviewIcons:n})},fe=async e=>{if(!h)return;if(e===`folder`){let e=await Dr();if(!e)return;let t=`folder:${e}`;te.includes(t)||await j({overviewPanels:[...te,t]});return}if(e===`quick`){let e=2;for(;te.includes(`quick:${e}`);)e+=1;await j({overviewPanels:[...te,`quick:${e}`]});return}let t=e;for(let n=2;te.includes(t);n+=1)t=`${e}:${n}`;await j({overviewPanels:[...te,t]})},pe=async t=>{let n=await Dr();if(!n)return;if(t.id===`quick`){await j({quickAccess:[...new Set([...e.map(e=>e.path),n])]}),s(await or());return}let r=t.places??[];r.some(e=>Nl(e,n))||await j({panelPlaces:{...h?.panelPlaces,[t.id]:[...r,n]}})},me=async(t,n)=>{y(null),t.id===`quick`?(await j({quickAccess:e.filter(e=>!Nl(e.path,n)).map(e=>e.path)}),s(await or())):await j({panelPlaces:{...h?.panelPlaces,[t.id]:(t.places??[]).filter(e=>!Nl(e,n))}})},M=async(t,n,r)=>{if(Nl(n,r))return;let i=t.id===`quick`?e.map(e=>e.path):t.places??[],a=i.findIndex(e=>Nl(e,n)),o=i.findIndex(e=>Nl(e,r));if(a<0||o<0)return;let c=[...i],[l]=c.splice(a,1);c.splice(o,0,l),t.id===`quick`?(await j({quickAccess:c}),s(await or())):await j({panelPlaces:{...h?.panelPlaces,[t.id]:c}})},N=(e,t)=>({draggable:p,onDragOver:e=>{p&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{p&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{p&&(n.preventDefault(),M(e,n.dataTransfer.getData(`text/plain`),t))}}),he=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>Nl(e.path,t));return{name:h?.placeNames?.[t]??n?.name??(Ai(t)||t),path:t,kind:`folder`,icon:n?.icon??h?.placeIcons?.[t]??null}}),ge=e=>{if(n.length===0)return(0,H.jsx)(Al,{children:`Files and folders you open show up here.`});let t=n.slice(0,r);return e.view===`grid`?(0,H.jsx)(cl,{children:t.map(e=>{let t=Li(f,e.path);return(0,H.jsxs)(ll,{$plain:!1,onClick:t=>e.isDirectory?o(e.path,Lr(t)):void tr(e.path),title:e.path,children:[(0,H.jsx)(ul,{children:t&&f.useIcons?(0,H.jsx)(ds,{place:t,size:18}):(0,H.jsx)(Hc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,H.jsxs)(dl,{children:[(0,H.jsx)(`strong`,{children:t?.name||e.name}),(0,H.jsx)(fl,{children:e.path})]})]},e.path)})}):(0,H.jsx)(pl,{children:t.map(e=>{let t=Li(f,e.path);return(0,H.jsxs)(ml,{onClick:t=>e.isDirectory?o(e.path,Lr(t)):void tr(e.path),title:e.path,type:`button`,children:[t&&f.useIcons?(0,H.jsx)(ds,{place:t,size:15}):(0,H.jsx)(Hc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,H.jsxs)(hl,{children:[(0,H.jsx)(`strong`,{children:t?.name||e.name}),(0,H.jsx)(fl,{children:e.path})]})]},e.path)})})},P=e=>{if(t.length===0)return(0,H.jsx)(Al,{children:`No drives are available.`});let n=t.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=S?.drive.name===t.name,i=r?(0,H.jsx)(Ml,{maxLength:32,onCancel:()=>C(null),onChange:e=>C({...S,label:e}),onCommit:()=>void A(),value:S?.label??``}):(0,H.jsx)(H.Fragment,{children:Ni(t)}),a=!r&&p&&(0,H.jsx)(El,{onClick:e=>{e.stopPropagation(),ie(t)},title:`Rename volume`,type:`button`,children:(0,H.jsx)(Co,{size:11})}),s=(0,H.jsxs)(fl,{children:[Ei(t.freeSpace),` free of `,Ei(t.totalSize)]});return e.view===`grid`?(0,H.jsxs)(ll,{$plain:!1,onClick:e=>!r&&o(t.name,Lr(e)),title:t.name,children:[(0,H.jsx)(ul,{children:(0,H.jsx)(Wa,{size:18})}),(0,H.jsxs)(dl,{children:[(0,H.jsxs)(`strong`,{children:[i,r&&Mi(t),a]}),s]})]},t.name):(0,H.jsxs)(ml,{as:r?`div`:`button`,onClick:r?void 0:e=>o(t.name,Lr(e)),title:t.name,type:r?void 0:`button`,children:[(0,H.jsx)(Wa,{size:18}),(0,H.jsxs)(hl,{children:[(0,H.jsxs)(`strong`,{children:[i,r&&Mi(t),a]}),s]}),(0,H.jsx)(_l,{children:(0,H.jsx)(vl,{$used:n,$tone:ki(n)})})]},t.name)});return e.view===`grid`?(0,H.jsx)(cl,{children:n}):(0,H.jsx)(pl,{children:n})},F=e=>{switch(e.kind){case`quick`:{let t=he(e);return!p&&t.length===0?(0,H.jsx)(Al,{children:`No folders in this Quick access panel yet.`}):e.view===`grid`?(0,H.jsxs)(cl,{children:[t.map(t=>(0,H.jsxs)(ll,{$plain:p,...N(e,t.path),onClick:e=>!p&&o(t.path,Lr(e)),title:t.path,children:[p&&(0,H.jsx)(Tl,{onClick:n=>{n.stopPropagation(),me(e,t.path)},title:`Remove from Quick access`,type:`button`,children:(0,H.jsx)(ao,{size:11})}),(0,H.jsxs)(Cl,{children:[p?(0,H.jsx)(wl,{onClick:e=>{e.stopPropagation(),y(k(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:`Change icon`,type:`button`,children:(0,H.jsx)(ul,{children:(0,H.jsx)(ds,{place:t})})}):(0,H.jsx)(ul,{children:(0,H.jsx)(ds,{place:t})}),k(t.path)&&(0,H.jsx)(Uc,{onPick:e=>void ne(t.path,e),value:h?.placeIcons?.[t.path]??t.icon})]}),(0,H.jsxs)(dl,{children:[ee?.path===t.path?(0,H.jsx)(`strong`,{children:(0,H.jsx)(Ml,{onCancel:()=>w(null),onChange:e=>w({path:t.path,name:e}),onCommit:()=>void re(t.path,ee?.name??``),value:ee?.name??``})}):(0,H.jsxs)(`strong`,{children:[t.name,p&&(0,H.jsx)(El,{onClick:e=>{e.stopPropagation(),y(null),w({path:t.path,name:t.name})},title:`Rename folder`,type:`button`,children:(0,H.jsx)(Co,{size:11})})]}),(0,H.jsx)(fl,{children:t.path})]})]},t.path)),p&&(0,H.jsxs)(gl,{onClick:()=>void pe(e),title:`Pin a folder here`,type:`button`,children:[(0,H.jsx)(ul,{children:(0,H.jsx)(Ja,{size:15})}),(0,H.jsxs)(dl,{children:[(0,H.jsx)(`strong`,{children:`Add folder`}),(0,H.jsx)(fl,{children:`Pin a directory here`})]})]})]}):(0,H.jsxs)(pl,{children:[t.map(t=>(0,H.jsxs)(ml,{...N(e,t.path),onClick:e=>!p&&o(t.path,Lr(e)),title:t.path,type:`button`,children:[(0,H.jsxs)(Cl,{children:[p?(0,H.jsx)(wl,{onClick:e=>{e.stopPropagation(),y(k(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:`Change icon`,type:`button`,children:(0,H.jsx)(ds,{place:t,size:15})}):(0,H.jsx)(ds,{place:t,size:15}),k(t.path)&&(0,H.jsx)(Uc,{onPick:e=>void ne(t.path,e),value:h?.placeIcons?.[t.path]??t.icon})]}),(0,H.jsxs)(hl,{children:[ee?.path===t.path?(0,H.jsx)(`strong`,{children:(0,H.jsx)(Ml,{onCancel:()=>w(null),onChange:e=>w({path:t.path,name:e}),onCommit:()=>void re(t.path,ee?.name??``),value:ee?.name??``})}):(0,H.jsxs)(`strong`,{children:[t.name,p&&(0,H.jsx)(El,{onClick:e=>{e.stopPropagation(),y(null),w({path:t.path,name:t.name})},title:`Rename folder`,type:`button`,children:(0,H.jsx)(Co,{size:11})})]}),(0,H.jsx)(fl,{children:t.path})]}),p&&(0,H.jsx)(Tl,{$inline:!0,onClick:n=>{n.stopPropagation(),me(e,t.path)},title:`Remove from Quick access`,type:`button`,children:(0,H.jsx)(ao,{size:11})})]},t.path)),p&&(0,H.jsxs)(gl,{$row:!0,onClick:()=>void pe(e),title:`Pin a folder here`,type:`button`,children:[(0,H.jsx)(Ja,{size:15}),(0,H.jsxs)(hl,{children:[(0,H.jsx)(`strong`,{children:`Add folder`}),(0,H.jsx)(fl,{children:`Pin a directory here`})]})]})]})}case`frequent`:return(0,H.jsx)(Pl,{mode:e.view,onOpen:o,version:a});case`recent`:return ge(e);case`drives`:return P(e);default:return(0,H.jsx)(Fl,{mode:e.view,onOpen:o,openOnSingleClick:h?.openOnSingleClick??!1,path:e.path??i,showCheckboxes:h?.showCheckboxes??!0})}};return(0,H.jsxs)(Kc,{children:[(0,H.jsxs)(qc,{children:[(0,H.jsx)(Jc,{role:`group`,title:`Columns`,children:[1,2,3,4,5].map(e=>(0,H.jsx)(Yc,{$active:ae===e,onClick:()=>void j({overviewColumns:e}),title:`${e} column${e>1?`s`:``}`,type:`button`,children:e},e))}),p&&(0,H.jsxs)(Zc,{children:[(0,H.jsxs)(Xc,{onClick:()=>x(e=>!e),onPointerDown:e=>e.stopPropagation(),title:`Add a panel`,type:`button`,children:[(0,H.jsx)(Ja,{size:12}),`Add panel ▾`]}),b&&(0,H.jsx)(Qc,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`folder`].map(e=>(0,H.jsx)($c,{onClick:()=>{x(!1),fe(e)},type:`button`,children:e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:`Folder…`},e))})]}),(0,H.jsxs)(Xc,{onClick:()=>{m(e=>!e),x(!1),y(null),w(null),C(null)},title:p?`Done`:`Edit`,type:`button`,children:[p?(0,H.jsx)(io,{size:13}):(0,H.jsx)(Co,{size:13}),p?`Done`:`Edit`]})]}),T&&(0,H.jsx)(kl,{children:T}),(0,H.jsx)(el,{$columns:ae,children:D.map(e=>{let t=te.indexOf(e.id);return(0,H.jsxs)(tl,{children:[(0,H.jsxs)(nl,{children:[(0,H.jsxs)(rl,{children:[(0,H.jsxs)(Cl,{children:[p?(0,H.jsx)(wl,{onClick:()=>y(O(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:`Change icon`,type:`button`,children:(0,H.jsx)(us,{panel:e,size:15})}):(0,H.jsx)(us,{panel:e,size:15}),O(e.id)&&(0,H.jsx)(Uc,{onPick:t=>de(e.id,t),value:e.icon})]}),p?(0,H.jsx)(ol,{defaultValue:e.title,onBlur:t=>se(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,H.jsx)(al,{children:e.title})]}),(0,H.jsxs)(il,{children:[!p&&e.kind===`recent`&&(0,H.jsx)(Xc,{onClick:()=>void vr().then(c),title:`Clear`,type:`button`,children:`Clear`}),!p&&e.kind===`frequent`&&(0,H.jsx)(Xc,{onClick:()=>void yr().then(()=>u?.()),title:`Clear the frequent list`,type:`button`,children:`Clear`}),!p&&(e.kind===`home`||e.kind===`folder`)&&(0,H.jsx)(Xc,{onClick:()=>o(e.path??i),title:`Open folder`,type:`button`,children:`Open`}),p&&(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(sl,{$active:e.pinned,onClick:()=>le(e.id),title:e.pinned?`Unpin from the sidebar`:`Pin to the sidebar`,type:`button`,children:(0,H.jsx)($a,{size:12})}),(0,H.jsx)(sl,{$active:e.view===`list`,onClick:()=>ce(e.id,`list`),title:`List`,type:`button`,children:(0,H.jsx)(eo,{size:13})}),(0,H.jsx)(sl,{$active:e.view===`grid`,onClick:()=>ce(e.id,`grid`),title:`Grid`,type:`button`,children:(0,H.jsx)(to,{size:13})}),(0,H.jsx)(sl,{disabled:t===0,onClick:()=>oe(e.id,-1),title:`Move up`,type:`button`,children:(0,H.jsx)(Ka,{size:12})}),(0,H.jsx)(sl,{disabled:t===te.length-1,onClick:()=>oe(e.id,1),title:`Move down`,type:`button`,children:(0,H.jsx)(Ka,{size:12})}),(0,H.jsx)(sl,{onClick:()=>ue(e.id),title:`Remove panel`,type:`button`,children:(0,H.jsx)(ao,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?F(e):(0,H.jsx)(bl,{children:F(e)})]},e.id)})})]})}function Ml({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){return(0,H.jsxs)(Dl,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,H.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,H.jsx)(Ol,{onClick:r,title:`Cancel`,type:`button`,children:(0,H.jsx)(ao,{size:11})}),(0,H.jsx)(Ol,{$apply:!0,onClick:n,title:`Rename volume`,type:`button`,children:(0,H.jsx)(io,{size:12})})]})}function Nl(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}function Pl({mode:e,onOpen:t,version:n}){let[r,i]=(0,_.useState)(null),a=Ii();if((0,_.useEffect)(()=>{gr().then(i,()=>i([]))},[n]),!r)return(0,H.jsx)(Al,{children:`Reading…`});if(r.length===0)return(0,H.jsx)(Al,{children:`Folders you open often show up here.`});let o=e=>`${e.count} ${e.count===1?`visit`:`visits`} · ${e.path}`;return e===`grid`?(0,H.jsx)(cl,{children:r.map(e=>{let n=Li(a,e.path);return(0,H.jsxs)(ll,{$plain:!1,onClick:n=>t(e.path,Lr(n)),title:e.path,children:[(0,H.jsx)(ul,{children:n&&a.useIcons?(0,H.jsx)(ds,{place:n,size:18}):(0,H.jsx)(Hc,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,H.jsxs)(dl,{children:[(0,H.jsx)(`strong`,{children:n?.name||e.name}),(0,H.jsx)(fl,{children:o(e)})]})]},e.path)})}):(0,H.jsx)(pl,{children:r.map(e=>{let n=Li(a,e.path);return(0,H.jsxs)(ml,{onClick:n=>t(e.path,Lr(n)),title:e.path,type:`button`,children:[n&&a.useIcons?(0,H.jsx)(ds,{place:n,size:15}):(0,H.jsx)(Hc,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,H.jsxs)(hl,{children:[(0,H.jsx)(`strong`,{children:n?.name||e.name}),(0,H.jsx)(fl,{children:o(e)})]})]},e.path)})})}function Fl({path:e,mode:t,onOpen:n,showCheckboxes:r,openOnSingleClick:i}){let[a,o]=(0,_.useState)(null),s=Ii();return(0,_.useEffect)(()=>{e&&(o(null),nr(e).then(o,()=>o(null)))},[e]),(0,_.useEffect)(()=>{if(V.available)return V.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&n.data.path.replace(/[\\\\/]+$/,``).toLowerCase()===e.replace(/[\\\\/]+$/,``).toLowerCase()&&nr(e,!1).then(o,()=>void 0)})},[e]),a?t===`list`?(0,H.jsx)(yl,{children:(0,H.jsx)(js,{error:null,listing:a,loading:!1,onOpen:n,onOpenFile:e=>void tr(e),onSort:()=>void 0,openOnSingleClick:i,showCheckboxes:r,showImages:!1,view:{...Qn,columns:$n.columns??[]}})}):(0,H.jsx)(bl,{children:a.entries.length===0?(0,H.jsx)(Al,{children:`This folder is empty.`}):(0,H.jsx)(xl,{children:a.entries.map(e=>{let t=Li(s,e.fullPath);return(0,H.jsxs)(Sl,{onClick:t=>e.isDirectory?n(e.fullPath,Lr(t)):void tr(e.fullPath),title:e.name,type:`button`,children:[t&&s.useIcons?(0,H.jsx)(ds,{place:t,size:16}):(0,H.jsx)(Hc,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,H.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,H.jsx)(Al,{children:`Reading…`})}function Il({path:e,label:t,icon:n,onNavigate:r}){let i=Ii(),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(``),l=(0,_.useRef)(null);(0,_.useEffect)(()=>{a||c(e.replace(/\\/g,`/`))},[e,a]),(0,_.useEffect)(()=>{a&&l.current?.select()},[a]),(0,_.useEffect)(()=>{if(!a)return;let e=()=>o(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[a]);let u=()=>{c(e.replace(/\\/g,`/`)),o(!0)},d=()=>{let t=s.trim();o(!1),t.length>0&&t!==e&&r(t)};if(a)return(0,H.jsxs)(Wl,{onPointerDown:e=>e.stopPropagation(),children:[(0,H.jsx)(`input`,{onChange:e=>c(e.target.value),onKeyDown:e=>{e.key===`Enter`&&d(),e.key===`Escape`&&o(!1)},ref:l,spellCheck:!1,value:s}),(0,H.jsx)(Gl,{onClick:()=>o(!1),title:`Cancel`,type:`button`,children:(0,H.jsx)(ao,{size:12})}),(0,H.jsx)(Gl,{$apply:!0,onClick:d,onPointerDown:e=>e.stopPropagation(),title:`Open this path`,type:`button`,children:(0,H.jsx)(io,{size:14})})]});let f=t?[{label:t,path:e,icon:n}]:Rl(e,i.places);return(0,H.jsx)(zl,{onClick:u,title:`Click to type a path`,children:f.map((t,n)=>(0,H.jsxs)(Bl,{$last:n===f.length-1,children:[n>0&&(0,H.jsx)(Hl,{children:(0,H.jsx)(Za,{size:9})}),(0,H.jsxs)(Ul,{onClick:n=>{n.stopPropagation(),t.path!==e&&r(t.path)},type:`button`,children:[t.place?(0,H.jsx)(Vl,{children:(0,H.jsx)(ds,{place:t.place,size:13})}):t.icon&&(0,H.jsx)(Vl,{children:t.icon}),t.label]})]},t.path))})}function Ll(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function Rl(e,t){let n=Ll(e),r=e=>e.replace(/[\\/]+$/,``).toLowerCase(),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>r(t.path)===r(e.path));t>i&&(i=t,a=e)}return a&&i>=0&&n.splice(0,i+1,{label:a.name,path:n[i].path,place:a}),n}var zl=B.div`
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
`,Bl=B.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Vl=B.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Hl=B.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,Ul=B.button`
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
`,Wl=B.div`
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
`,Gl=B.button`
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
`,Kl=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,H.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,H.jsx)(`path`,{d:`M4 4v6h6`})]});function ql(){let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)([]),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(!0),[u,d]=(0,_.useState)(!1),[f,p]=(0,_.useState)(null),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(!1),y=(0,_.useCallback)(async()=>{l(!0),p(null);try{t(await cr(g))}catch(e){p(e instanceof Error?e.message:String(e))}finally{l(!1)}},[g]);(0,_.useEffect)(()=>{y()},[y]),(0,_.useEffect)(()=>{g||(r([]),a(!1),s(null))},[g]);let b=async e=>{await lr(e),await y()},x=async()=>{h(!1),await ur(g),await y()},S=async e=>{await dr(e),await y()},C=async()=>{d(!0),s(null);try{let e=await fr();if(e.cancelled){s(`Elevation was declined — nothing was read.`);return}if(e.failed){s(`The elevated helper could not produce a report. Try again.`);return}r(e.entries),a(!0)}finally{d(!1)}},ee=async()=>{d(!0),h(!1);try{await pr(),r([]),a(!1),s(null),await y()}finally{d(!1)}},w=new Set(e.map(e=>e.id)),T=[...e,...n.filter(e=>!w.has(e.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>t.deleted-e.deleted);return(0,H.jsxs)(Yl,{children:[(0,H.jsxs)(Xl,{children:[(0,H.jsxs)(Zl,{children:[(0,H.jsx)(ro,{size:16}),(0,H.jsx)(`span`,{children:`Recycle Bin`}),(0,H.jsx)(Ql,{children:c?`…`:`${T.length} items`})]}),(0,H.jsxs)($l,{children:[(0,H.jsx)(eu,{$on:g,onClick:()=>v(e=>!e),title:`Show metadata records whose content is already gone`,type:`button`,children:`Orphans`}),g?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(nu,{disabled:u||i,onClick:()=>void C(),title:i?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`,type:`button`,children:u?`Working…`:i?`Admin view loaded`:`Show all (admin)…`}),m?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(ru,{$danger:!0,disabled:u,onClick:()=>void ee(),type:`button`,children:[(0,H.jsx)(io,{size:12}),` Delete every orphan`]}),(0,H.jsx)(K,{onClick:()=>h(!1),title:`Cancel`,type:`button`,children:(0,H.jsx)(ao,{size:12})})]}):(0,H.jsx)(nu,{disabled:u||T.length===0,onClick:()=>h(!0),title:`Runs an elevated copy of the app and deletes every leftover record`,type:`button`,children:`Delete all orphans…`})]}):m?(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(ru,{$danger:!0,onClick:()=>void x(),type:`button`,children:[(0,H.jsx)(io,{size:12}),` Delete everything`]}),(0,H.jsx)(K,{onClick:()=>h(!1),title:`Cancel`,type:`button`,children:(0,H.jsx)(ao,{size:12})})]}):(0,H.jsx)(nu,{disabled:T.length===0,onClick:()=>h(!0),type:`button`,children:`Empty`}),(0,H.jsx)(K,{onClick:()=>void y(),title:`Refresh`,type:`button`,children:(0,H.jsx)(qa,{size:14})})]})]}),o&&(0,H.jsx)(gu,{children:o}),f&&(0,H.jsx)(_u,{children:f}),!f&&!c&&T.length===0&&(0,H.jsx)(_u,{children:`The recycle bin is empty.`}),T.length>0&&(0,H.jsxs)(iu,{children:[(0,H.jsxs)(au,{children:[(0,H.jsx)(`span`,{children:`Name`}),(0,H.jsx)(`span`,{children:`Original location`}),(0,H.jsx)(`span`,{children:`Deleted`}),(0,H.jsx)(`span`,{children:`Size`}),(0,H.jsx)(`span`,{})]}),(0,H.jsx)(ou,{children:T.map(e=>(0,H.jsxs)(su,{$orphan:e.isOrphan,title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,H.jsxs)(lu,{children:[(0,H.jsx)(Jl,{entry:e}),(0,H.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,H.jsx)(tu,{children:`metadata only`}),e.owner&&(0,H.jsx)(tu,{$other:!0,children:`other profile`})]}),(0,H.jsx)(du,{children:e.originalPath}),(0,H.jsx)(fu,{children:Oi(e.deleted)}),(0,H.jsx)(pu,{children:e.isDirectory?`—`:Ei(e.size)}),(0,H.jsxs)(mu,{children:[!e.isOrphan&&e.removable&&(0,H.jsx)(hu,{onClick:()=>void b(e.id),title:`Restore to its original folder`,type:`button`,children:(0,H.jsx)(Kl,{})}),e.removable&&(0,H.jsx)(hu,{$danger:!0,onClick:()=>void S(e.id),title:e.isOrphan?`Remove the leftover record`:`Delete permanently`,type:`button`,children:(0,H.jsx)(ro,{size:13})})]})]},e.id))})]})]})}function Jl({entry:e}){let t=Xr(e.originalPath,e.isDirectory);return(0,H.jsx)(uu,{children:t?(0,H.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,H.jsx)(Ha,{}):(0,H.jsx)(Ua,{})})}var Yl=B.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Xl=B.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,Zl=B.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,Ql=B.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,$l=B.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,eu=B.button`
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
`,tu=B.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,nu=B.button`
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
`,ru=B(nu)`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border-color: ${({$danger:e})=>e?`rgba(248, 113, 113, 0.5)`:`var(--border-color)`};
    color: ${({$danger:e})=>e?`#fca5a5`:`var(--text-secondary)`};

    &:hover:not(:disabled) {
        background: rgba(248, 113, 113, 0.14);
        color: #fecaca;
    }
`,K=B.button`
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
`,iu=B.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,au=B.div`
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
`,ou=B.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,su=B.div`
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
`,cu=B.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,lu=B(cu)`
    display: flex;
    align-items: center;
    gap: 10px;
`,uu=B.span`
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
`,du=B(cu)`
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
`,fu=B(cu)`
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
`,pu=B(cu)`
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
`,mu=B.span`
    display: flex;
    justify-content: flex-end;
    gap: 4px;
`,hu=B.button`
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
`,gu=B.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,_u=B.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function vu(){return(0,H.jsx)(yu,{title:`Always applies to every folder`,children:`Global`})}var yu=B.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,bu=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}];function xu({appInfo:e,onSettingsChanged:t}){let[n,r]=(0,_.useState)(null),[i,a]=(0,_.useState)(null),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(``),[u,d]=(0,_.useState)(`file`),[f,p]=(0,_.useState)(!1),[m,h]=(0,_.useState)(!1),[g,v]=(0,_.useState)(null),[y,b]=(0,_.useState)(!1),[x,S]=(0,_.useState)(!1),[C,ee]=(0,_.useState)(null),[w,T]=(0,_.useState)(null),E=i?.defaultView??$n;(0,_.useEffect)(()=>{br().then(r,()=>r(null)),Sr().then(a,()=>a(null)),Mr().then(b,()=>b(!1))},[]),(0,_.useEffect)(()=>{let e=()=>void Ar().then(v,()=>v(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let D=async e=>{if(!i)return;let n={...i,...e};a(n),Kr(),a(await Cr(n)),t()},te=async e=>{let t=new Set(E.columns??$n.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=Os.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await D({defaultView:{...E,columns:n}})},O=async()=>{if(x)return;let e=!y;S(!0),ee(null);try{let t=await Nr(e);b(t),a(t=>t&&{...t,linksEnabled:e}),t!==e&&ee(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{ee(`The request to Windows failed. Try again.`)}finally{S(!1)}},k=async(e,t)=>{if(!i)return;let n={...i.extensionIcons};t===null?delete n[e]:n[e]=t,await D({extensionIcons:n})},ne={...Pr,...i?.shortcuts};(0,_.useEffect)(()=>{if(!w)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){T(null);return}let t=Rr(e);t&&(T(null),D({shortcuts:{...ne,[w]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[w,i]);let re=async e=>{await D({recentLimit:Math.min(Math.max(e,0),50)})},ie=async e=>{await D({galleryRoots:e.length>0?e:null})},A=async()=>{let e=await Dr(),t=i?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await ie([...t,e])},ae=async()=>{let e=c.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await k(e,u),l(``))},j=async()=>{h(!0);try{let e=await Dr();if(!e)return;let t=await Er();if(!t)return;await Tr(e.replace(/[\\/][^\\/]+$/,``),Ai(e),`file:${t}`)&&(Kr(),s({folder:e,icon:t}))}finally{h(!1)}};return(0,H.jsxs)(Du,{children:[(0,H.jsxs)(Ou,{children:[(0,H.jsx)(ku,{children:`Application`}),(0,H.jsxs)(Au,{children:[(0,H.jsxs)(q,{children:[(0,H.jsx)(J,{children:`Version`}),(0,H.jsx)(Bu,{children:e?`v${e.version}`:`—`})]}),(0,H.jsxs)(q,{children:[(0,H.jsx)(J,{children:`Platform`}),(0,H.jsx)(Bu,{children:e?.platform??`—`})]}),(0,H.jsxs)(q,{children:[(0,H.jsxs)(Iu,{children:[(0,H.jsx)(J,{children:`Open yafm:// links`}),(0,H.jsxs)(zu,{children:[`Registers this app for yafm:// links, for the current user only. While this is on, the app repairs the entry at every launch.`,C?` ${C}`:``]})]}),(0,H.jsxs)(Lu,{children:[(0,H.jsx)(Vu,{$on:y,children:y?`Active`:`Off`}),(0,H.jsx)(Uu,{$on:y,disabled:x,onClick:()=>void O(),title:y?`Stop opening yafm:// links`:`Open yafm:// links with this app`,type:`button`,children:(0,H.jsx)(Wu,{})})]})]}),(0,H.jsxs)(q,{children:[(0,H.jsxs)(Iu,{children:[(0,H.jsx)(J,{children:`Reopen the tabs that were open`}),(0,H.jsx)(zu,{children:`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`})]}),(0,H.jsx)(Uu,{$on:i?.restoreTabs??!0,disabled:!i,onClick:()=>void D({restoreTabs:!i?.restoreTabs}),type:`button`,children:(0,H.jsx)(Wu,{})})]})]})]}),(0,H.jsxs)(Ou,{children:[(0,H.jsx)(ku,{children:`Files view (global)`}),(0,H.jsxs)(Au,{children:[(0,H.jsxs)(q,{children:[(0,H.jsxs)(Iu,{children:[(0,H.jsx)(J,{children:`Default view`}),(0,H.jsx)(zu,{children:`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`})]}),(0,H.jsx)(Lu,{children:(0,H.jsxs)(qu,{children:[(0,H.jsx)(Ju,{$on:E.mode===`list`,onClick:()=>void D({defaultView:{...E,mode:`list`}}),type:`button`,children:`List`}),(0,H.jsx)(Ju,{$on:E.mode===`grid`,onClick:()=>void D({defaultView:{...E,mode:`grid`}}),type:`button`,children:`Grid`})]})})]}),(0,H.jsxs)(q,{children:[(0,H.jsxs)(Iu,{children:[(0,H.jsx)(J,{children:`List icon size`}),(0,H.jsx)(zu,{children:`The icon in the list rows.`})]}),(0,H.jsxs)(Lu,{children:[(0,H.jsx)(Yu,{max:48,min:16,onChange:e=>void D({defaultView:{...E,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:E.iconSize}),(0,H.jsxs)(Bu,{children:[E.iconSize,`px`]})]})]}),(0,H.jsxs)(q,{children:[(0,H.jsxs)(Iu,{children:[(0,H.jsx)(J,{children:`Grid size`}),(0,H.jsx)(zu,{children:`The height of a grid tile; the icon inside follows it.`})]}),(0,H.jsxs)(Lu,{children:[(0,H.jsx)(Yu,{max:260,min:100,onChange:e=>void D({defaultView:{...E,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:E.gridSize}),(0,H.jsxs)(Bu,{children:[E.gridSize,`px`]})]})]}),(0,H.jsxs)(q,{children:[(0,H.jsxs)(Iu,{children:[(0,H.jsxs)(Ru,{children:[(0,H.jsx)(J,{children:`Selection checkboxes`}),(0,H.jsx)(vu,{})]}),(0,H.jsx)(zu,{children:`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`})]}),(0,H.jsx)(Uu,{$on:i?.showCheckboxes??!0,disabled:!i,onClick:()=>void D({showCheckboxes:!(i?.showCheckboxes??!0)}),type:`button`,children:(0,H.jsx)(Wu,{})})]}),(0,H.jsxs)(q,{children:[(0,H.jsxs)(Iu,{children:[(0,H.jsxs)(Ru,{children:[(0,H.jsx)(J,{children:`Open with a single click`}),(0,H.jsx)(vu,{})]}),(0,H.jsx)(zu,{children:`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`})]}),(0,H.jsx)(Uu,{$on:i?.openOnSingleClick??!1,disabled:!i,onClick:()=>void D({openOnSingleClick:!(i?.openOnSingleClick??!1)}),type:`button`,children:(0,H.jsx)(Wu,{})})]}),(0,H.jsxs)(q,{children:[(0,H.jsxs)(Iu,{children:[(0,H.jsxs)(Ru,{children:[(0,H.jsx)(J,{children:`Preview panel under the list`}),(0,H.jsx)(vu,{})]}),(0,H.jsx)(zu,{children:`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`})]}),(0,H.jsx)(Uu,{$on:E.showImages??!0,onClick:()=>void D({defaultView:{...E,showImages:!(E.showImages??!0)}}),type:`button`,children:(0,H.jsx)(Wu,{})})]}),(0,H.jsx)(q,{children:(0,H.jsxs)(Iu,{children:[(0,H.jsxs)(Ru,{children:[(0,H.jsx)(J,{children:`Columns`}),(0,H.jsx)(vu,{})]}),(0,H.jsx)(zu,{children:`Shown in every folder; changing them changes all folders at once.`})]})}),(0,H.jsx)(q,{children:(0,H.jsxs)(Xu,{children:[Os.map(e=>(0,H.jsxs)(Y,{children:[(0,H.jsx)(`input`,{checked:(E.columns??[]).includes(e.id),onChange:()=>void te(e.id),type:`checkbox`}),(0,H.jsx)(`span`,{children:e.label})]},e.id)),(0,H.jsxs)(Y,{children:[(0,H.jsx)(`input`,{checked:(E.columns??[]).includes(`linkTarget`),onChange:()=>void te(`linkTarget`),type:`checkbox`}),(0,H.jsx)(`span`,{children:`Link target after the name`})]})]})})]}),(0,H.jsxs)($u,{children:[`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar. Anything marked `,(0,H.jsx)(vu,{}),` always applies to every folder.`]})]}),(0,H.jsxs)(Ou,{children:[(0,H.jsx)(ku,{children:`Shortcuts`}),(0,H.jsxs)(Au,{children:[bu.map(({id:e,label:t,note:n})=>(0,H.jsxs)(q,{children:[(0,H.jsxs)(Iu,{children:[(0,H.jsx)(J,{children:t}),(0,H.jsx)(zu,{children:n})]}),(0,H.jsx)(Lu,{children:(0,H.jsx)(Zu,{$listening:w===e,onClick:()=>T(e),type:`button`,children:w===e?`Press a key…`:zr(ne[e])})})]},e)),(0,H.jsxs)(q,{children:[(0,H.jsxs)(Iu,{children:[(0,H.jsx)(J,{children:`Reset`}),(0,H.jsx)(zu,{children:`Back to the default combination for every action.`})]}),(0,H.jsx)(Lu,{children:(0,H.jsx)(X,{onClick:()=>void D({shortcuts:{...Pr}}),type:`button`,children:`Reset`})})]})]})]}),(0,H.jsxs)(Ou,{children:[(0,H.jsx)(ku,{children:`Memory`}),(0,H.jsxs)(Au,{children:[(0,H.jsxs)(Mu,{children:[(0,H.jsxs)(Nu,{children:[(0,H.jsx)(J,{children:`Process memory`}),(0,H.jsx)(Bu,{children:g?`${Ei(g.private)} · ${ju(g.private,g.available)}`:`—`})]}),(0,H.jsx)(Pu,{children:(0,H.jsx)(Fu,{$ratio:g?g.private/Math.max(g.available,1):0,$tone:ki(g?g.private/Math.max(g.available,1):0)})}),(0,H.jsx)(zu,{children:g?`Committed of ${Ei(g.available)} the runtime can use; ${Ei(g.workingSet)} is resident. The webview runs in its own process.`:`Reading the current usage…`})]}),(0,H.jsxs)(Mu,{children:[(0,H.jsxs)(Nu,{children:[(0,H.jsx)(J,{children:`Managed heap`}),(0,H.jsx)(Bu,{children:g?`${Ei(g.managed)} · ${ju(g.managed,g.private)}`:`—`})]}),(0,H.jsx)(Pu,{children:(0,H.jsx)(Fu,{$ratio:g?g.managed/Math.max(g.private,1):0,$tone:`var(--accent-secondary)`})}),(0,H.jsx)(zu,{children:`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`})]}),(0,H.jsxs)(q,{children:[(0,H.jsxs)(Iu,{children:[(0,H.jsx)(J,{children:`Free memory`}),(0,H.jsx)(zu,{children:`Compacts the heap and returns unused pages to the system. Always safe.`})]}),(0,H.jsx)(Lu,{children:(0,H.jsx)(X,{onClick:()=>void jr().then(v),type:`button`,children:`Trim now`})})]})]})]}),(0,H.jsxs)(Ou,{children:[(0,H.jsx)(ku,{children:`Overview`}),(0,H.jsx)(Au,{children:(0,H.jsxs)(q,{children:[(0,H.jsxs)(Iu,{children:[(0,H.jsx)(J,{children:`Recent items`}),(0,H.jsx)(zu,{children:`How many recently opened folders the overview lists. 0 hides the section.`})]}),(0,H.jsx)(Lu,{children:(0,H.jsx)(Gu,{max:50,min:0,onChange:e=>void re(Number(e.target.value)),type:`number`,value:i?.recentLimit??10})})]})})]}),(0,H.jsxs)(Ou,{children:[(0,H.jsx)(ku,{children:`Gallery`}),(0,H.jsxs)(Au,{children:[(i?.galleryRoots??[]).map(e=>(0,H.jsxs)(q,{children:[(0,H.jsxs)(Iu,{children:[(0,H.jsx)(J,{children:Ai(e)}),(0,H.jsx)(zu,{children:e})]}),(0,H.jsx)(Lu,{children:(0,H.jsx)(Z,{onClick:()=>void ie((i?.galleryRoots??[]).filter(t=>t!==e)),title:`Stop scanning this folder`,type:`button`,children:(0,H.jsx)(ao,{size:12})})})]},e)),(0,H.jsxs)(q,{children:[(0,H.jsxs)(Iu,{children:[(0,H.jsx)(J,{children:`Scan folders`}),(0,H.jsx)(zu,{children:(i?.galleryRoots??[]).length===0?`Nothing added yet, so the gallery reads the Pictures folder.`:`Only these folders are scanned, three levels deep.`})]}),(0,H.jsx)(Lu,{children:(0,H.jsx)(X,{onClick:()=>void A(),type:`button`,children:`Choose folder…`})})]})]})]}),(0,H.jsxs)(Ou,{children:[(0,H.jsx)(ku,{children:`Icons`}),(0,H.jsxs)(Au,{children:[(0,H.jsxs)(q,{children:[(0,H.jsxs)(Iu,{children:[(0,H.jsx)(J,{children:`Use system file icons`}),(0,H.jsx)(zu,{children:`Ask the shell for the icon of each file type instead of the built-in glyphs.`})]}),(0,H.jsx)(Uu,{$on:i?.systemIcons??!1,disabled:!i,onClick:()=>void D({systemIcons:!i?.systemIcons}),type:`button`,children:(0,H.jsx)(Wu,{})})]}),(0,H.jsxs)(q,{children:[(0,H.jsxs)(Iu,{children:[(0,H.jsx)(J,{children:`Use custom folder icons`}),(0,H.jsx)(zu,{children:`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`})]}),(0,H.jsx)(Uu,{$on:i?.customFolderIcons??!1,disabled:!i,onClick:()=>void D({customFolderIcons:!i?.customFolderIcons}),type:`button`,children:(0,H.jsx)(Wu,{})})]})]})]}),(0,H.jsxs)(Ou,{children:[(0,H.jsx)(ku,{children:`Icons by extension`}),(0,H.jsxs)(Au,{children:[Object.entries(i?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,H.jsxs)(q,{children:[(0,H.jsxs)(Iu,{children:[(0,H.jsx)(J,{children:e}),(0,H.jsx)(zu,{children:wu(t)})]}),(0,H.jsxs)(Lu,{children:[(0,H.jsx)(Tu,{source:t}),(0,H.jsx)(Z,{onClick:()=>void k(e,null),title:`Remove this rule`,type:`button`,children:(0,H.jsx)(ao,{size:12})})]})]},e)),(0,H.jsxs)(q,{children:[(0,H.jsxs)(Iu,{children:[(0,H.jsx)(J,{children:`Add a rule`}),(0,H.jsx)(zu,{children:`Extension and the icon to draw for it.`})]}),(0,H.jsxs)(Lu,{children:[(0,H.jsx)(Gu,{onChange:e=>l(e.target.value),placeholder:`.psd`,spellCheck:!1,value:c}),(0,H.jsxs)(Ku,{children:[(0,H.jsx)(Z,{onClick:()=>p(e=>!e),title:`Choose the icon`,type:`button`,children:(0,H.jsx)(Tu,{source:u})}),f&&(0,H.jsx)(Uc,{allowDefault:!1,onClose:()=>p(!1),onPick:e=>{d(e??`file`),p(!1)},value:u})]}),(0,H.jsx)(Z,{onClick:()=>void ae(),title:`Add the rule`,type:`button`,children:(0,H.jsx)(Ja,{size:13})})]})]})]})]}),(0,H.jsxs)(Ou,{children:[(0,H.jsx)(ku,{children:`Folder icons`}),(0,H.jsxs)(Au,{children:[(0,H.jsxs)(q,{children:[(0,H.jsxs)(Iu,{children:[(0,H.jsx)(J,{children:`Give a folder its own icon`}),(0,H.jsxs)(zu,{children:[`Stored in the folder's parent `,(0,H.jsx)(Hu,{children:`.yafm-index.db`}),`, so it stays with the files.`]})]}),(0,H.jsxs)(Lu,{children:[o&&(0,H.jsx)(Eu,{src:o.icon}),(0,H.jsx)(X,{disabled:m,onClick:()=>void j(),type:`button`,children:m?`Choosing…`:`Choose folder and icon…`})]})]}),o&&(0,H.jsxs)(q,{children:[(0,H.jsxs)(Iu,{children:[(0,H.jsx)(J,{children:Ai(o.folder)}),(0,H.jsx)(zu,{children:o.folder})]}),(0,H.jsx)(Lu,{children:(0,H.jsxs)(Qu,{children:[(0,H.jsx)(io,{size:11}),` Saved`]})})]})]})]}),(0,H.jsxs)(Ou,{children:[(0,H.jsx)(ku,{children:`Folder index`}),(0,H.jsx)(Au,{children:(0,H.jsxs)(q,{children:[(0,H.jsxs)(Iu,{children:[(0,H.jsxs)(J,{children:[`Keep a `,(0,H.jsx)(Hu,{children:`.yafm-index.db`}),` in every folder`]}),(0,H.jsx)(zu,{children:`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`})]}),(0,H.jsx)(Uu,{$on:i?.writeDirectoryIndex??!0,disabled:!i,onClick:()=>void D({writeDirectoryIndex:!i?.writeDirectoryIndex}),type:`button`,children:(0,H.jsx)(Wu,{})})]})}),!(i?.writeDirectoryIndex??!0)&&(0,H.jsx)(ed,{children:Cu(e?.platform)})]}),(0,H.jsxs)(Ou,{children:[(0,H.jsx)(ku,{children:`Files`}),(0,H.jsxs)(Au,{children:[(0,H.jsxs)(q,{children:[(0,H.jsx)(J,{children:`Hidden items`}),(0,H.jsx)(Bu,{children:Su(n?.showHidden)})]}),(0,H.jsxs)(q,{children:[(0,H.jsx)(J,{children:`Protected operating system files`}),(0,H.jsx)(Bu,{children:Su(n?.showSystem)})]})]}),(0,H.jsx)($u,{children:`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`})]})]})}function Su(e){return e===void 0?`Reading…`:e?`Shown`:`Hidden`}function Cu(e){return`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in ${e===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:e===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`}function wu(e){return e.startsWith(`file:`)?e.slice(5):`built-in: ${e}`}function Tu({source:e}){let t=Zr(e.startsWith(`file:`)?e.slice(5):null);return(0,H.jsx)(Q,{children:t?(0,H.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,H.jsx)(Ds,{name:e,size:16})})}function Eu({src:e}){let t=Zr(e);return(0,H.jsx)(Q,{children:t&&(0,H.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}var Du=B.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 26px 26px 34px;
    max-width: 860px;
`,Ou=B.section`
    display: flex;
    flex-direction: column;
    gap: 10px;

    & + & {
        margin-top: 30px;
    }
`,ku=B.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,Au=B.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow: hidden;
`;function ju(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}var Mu=B.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,Nu=B.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,Pu=B.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Fu=B.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,q=B.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 13px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,Iu=B.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Lu=B.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,J=B.span`
    font-size: 13px;
    color: var(--text-secondary);
`,Ru=B.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,zu=B.span`
    font-size: 11px;
    color: var(--text-muted);
`,Bu=B.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
`,Vu=B.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,Hu=B.code`
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-secondary);
`,Uu=B.button`
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
`,Wu=B.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,Gu=B.input`
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
`,Ku=B.span`
    position: relative;
    display: inline-flex;
`,qu=B.div`
    display: flex;
    gap: 4px;
`,Ju=B.button`
    padding: 5px 14px;
    border: 1px solid ${({$on:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$on:e})=>e?`rgba(59, 130, 246, 0.18)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font-size: 11px;
    cursor: pointer;
`,Yu=B.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,Xu=B.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,Y=B.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,Zu=B.button`
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
`,X=B.button`
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
`,Z=B.button`
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
`,Q=B.span`
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
`,Qu=B.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,$u=B.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,ed=B.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,td=100;function nd(){let[e,t]=(0,_.useState)([]),[n,r]=(0,_.useState)(0),[i,a]=(0,_.useState)(!0),[o,s]=(0,_.useState)(null),[c,l]=(0,_.useState)(!1),u=(0,_.useRef)(!1),d=(0,_.useRef)(null),f=(0,_.useCallback)(async e=>{a(!0),s(null);try{let n=await mr(0,td,e);t(n.entries),r(n.total)}catch(e){s(e instanceof Error?e.message:String(e))}finally{a(!1)}},[]);(0,_.useEffect)(()=>{f(!1)},[f]);let p=(0,_.useCallback)(async()=>{if(!u.current){u.current=!0;try{let n=await mr(e.length,td,!1);(0,_.startTransition)(()=>{t(e=>[...e,...n.entries]),r(n.total)})}catch{}finally{u.current=!1}}},[e.length]);(0,_.useEffect)(()=>{let t=d.current;if(!t)return;let r=new IntersectionObserver(t=>{t.some(e=>e.isIntersecting)&&e.length<n&&p()},{rootMargin:`800px`});return r.observe(t),()=>r.disconnect()},[e.length,n,p]);let m=(0,_.useMemo)(()=>ad(e),[e]);return(0,H.jsxs)(sd,{children:[(0,H.jsxs)(cd,{children:[(0,H.jsxs)(ld,{children:[(0,H.jsx)(`span`,{children:`Gallery`}),(0,H.jsx)(ud,{children:i?`scanning…`:`${e.length} of ${n} pictures`})]}),(0,H.jsx)(dd,{onClick:()=>{l(!0),f(!0).finally(()=>l(!1))},title:`Scan the folders again`,type:`button`,children:(0,H.jsx)(fd,{$spinning:c,children:(0,H.jsx)(qa,{size:14})})})]}),o&&(0,H.jsx)(Cd,{children:o}),!o&&!i&&n===0&&(0,H.jsx)(Cd,{children:`No pictures found.`}),(0,H.jsxs)(pd,{children:[m.map(e=>(0,H.jsxs)(md,{children:[(0,H.jsx)(hd,{children:e.label}),(0,H.jsx)(gd,{children:e.entries.map(e=>(0,H.jsx)(rd,{entry:e},e.path))})]},e.label)),(0,H.jsx)(Sd,{ref:d})]})]})}var rd=(0,_.memo)(function({entry:e}){let t=ti(e.path,128,e.modified),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(!1);return(0,H.jsxs)(_d,{title:e.name,children:[(!t||!n||i)&&(0,H.jsx)(vd,{}),t&&!i&&(0,H.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>a(!0),onLoad:()=>r(!0),src:t}),(0,H.jsxs)(yd,{children:[(0,H.jsx)(bd,{children:e.name}),(0,H.jsx)(xd,{children:`${id(e.name)} · ${Ei(e.size)}`})]})]})});function id(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toUpperCase():`FILE`}function ad(e){let t=[];for(let n of e){let e=od(n.modified),r=t[t.length-1];r?.label===e?r.entries.push(n):t.push({label:e,entries:[n]})}return t}function od(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(Di(),{weekday:`long`}):t.toLocaleDateString(Di(),{year:`numeric`,month:`long`,day:`numeric`})}var sd=B.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,cd=B.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,ld=B.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,ud=B.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,dd=B.button`
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
`,fd=B.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,pd=B.div`
    flex: 1;
    min-height: 0;
    padding: 14px 22px 30px;
    overflow-y: auto;
`,md=B.section`
    & + & {
        margin-top: 28px;
    }
`,hd=B.h2`
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
`,gd=B.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    /* Explicit row height: an auto row collapses to nothing in Chromium when the tile is a shrinking
       flex box, which once left the gallery as a wall of empty strips. */
    grid-auto-rows: 124px;
    gap: 12px;
    align-content: start;
`,_d=B.div`
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
`,vd=B.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    background:
            radial-gradient(circle at 50% 45%, rgba(99, 102, 241, 0.12), transparent 60%),
            rgba(15, 23, 42, 0.6);
`,yd=B.span`
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
`,bd=B.span`
    overflow: hidden;
    font-size: 11px;
    color: #e5e7eb;
    text-overflow: ellipsis;
    white-space: nowrap;
`,xd=B.span`
    font-family: var(--font-mono);
    font-size: 10px;
    color: #9ca3af;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Sd=B.div`
    height: 1px;
`,Cd=B.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function wd({places:e,drives:t,recent:n,recentLimit:r,currentPath:i,activeKind:a,homePath:o=``,version:s=0,historyVersion:c=0,onNavigate:l,onOpenView:u}){let[d,f]=(0,_.useState)([]),[p,m]=(0,_.useState)(null),h=Ii();(0,_.useEffect)(()=>{Sr().then(e=>{m(e),f(cs(e).filter(e=>e.pinned))},()=>{m(null),f([])})},[s]);let g=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>Ad(e.path,t));return{name:p?.placeNames?.[t]??n?.name??(Ai(t)||t),path:t,kind:`folder`,icon:n?.icon??p?.placeIcons?.[t]??null}}),v=a===`files`;return(0,H.jsxs)(jd,{children:[(0,H.jsxs)(Md,{children:[(0,H.jsxs)(Ld,{$active:a===`home`,onClick:()=>u(`home`),title:`Overview`,type:`button`,children:[(0,H.jsx)(So,{}),(0,H.jsx)(zd,{children:`Overview`})]}),(0,H.jsxs)(Ld,{$active:a===`recycle`,onClick:()=>u(`recycle`),title:`Recycle Bin`,type:`button`,children:[(0,H.jsx)(ro,{}),(0,H.jsx)(zd,{children:`Recycle Bin`})]}),(0,H.jsxs)(Ld,{$active:a===`gallery`,onClick:()=>u(`gallery`),title:`Gallery`,type:`button`,children:[(0,H.jsx)(lo,{}),(0,H.jsx)(zd,{children:`Gallery`})]})]}),d.map(e=>(0,H.jsxs)(Pd,{children:[(0,H.jsxs)(Ld,{as:`div`,$active:!1,children:[(0,H.jsx)(Rd,{children:(0,H.jsx)(us,{panel:e,size:16})}),(0,H.jsx)(zd,{children:e.title})]}),(0,H.jsx)(Fd,{children:(0,H.jsxs)(Id,{children:[e.kind===`quick`&&g(e).map(e=>(0,H.jsxs)(Ld,{$active:v&&Ad(i,e.path),onClick:t=>l(e.path,Lr(t)),title:e.path,type:`button`,children:[(0,H.jsx)(ds,{place:e}),(0,H.jsx)(zd,{children:e.name})]},e.path)),e.kind===`recent`&&n.slice(0,r).map(e=>{let t=Li(h,e.path);return(0,H.jsxs)(Ld,{$active:v&&Ad(i,e.path),onClick:t=>e.isDirectory?l(e.path,Lr(t)):void tr(e.path),title:e.path,type:`button`,children:[t&&h.useIcons?(0,H.jsx)(ds,{place:t}):(0,H.jsx)(Hc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,H.jsx)(zd,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,H.jsx)(Dd,{historyVersion:c,onNavigate:l}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,H.jsxs)(Ld,{$active:v&&Ad(i,e.name),onClick:t=>l(e.name,Lr(t)),title:e.name,type:`button`,children:[(0,H.jsx)(Wa,{}),(0,H.jsxs)(zd,{children:[Ni(e),(0,H.jsxs)(Bd,{children:[Ei(e.freeSpace),` free`]}),(0,H.jsx)(Vd,{children:(0,H.jsx)(Hd,{$used:t,$tone:ki(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,H.jsx)(Od,{onNavigate:l,path:e.path||o})]})})]},e.id)),(0,H.jsx)(Nd,{children:(0,H.jsxs)(Ld,{$active:a===`settings`,onClick:()=>u(`settings`),title:`Settings`,type:`button`,children:[(0,H.jsx)(Qa,{}),(0,H.jsx)(zd,{children:`Settings`})]})})]})}var Td=10,Ed=40;function Dd({historyVersion:e=0,onNavigate:t}){let[n,r]=(0,_.useState)(null),i=Ii();return(0,_.useEffect)(()=>{gr().then(r,()=>r([]))},[e]),(n??[]).slice(0,15).map(e=>{let n=Li(i,e.path);return(0,H.jsxs)(Ld,{$active:!1,onClick:n=>t(e.path,Lr(n)),title:`${e.count} ${e.count===1?`visit`:`visits`} · ${e.path}`,type:`button`,children:[n&&i.useIcons?(0,H.jsx)(ds,{place:n}):(0,H.jsx)(Hc,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,H.jsx)(zd,{children:n?.name||e.name})]},e.path)})}function Od({path:e,onNavigate:t}){let[n,r]=(0,_.useState)(null);(0,_.useEffect)(()=>{e&&(r(null),nr(e,!1).then(r,()=>r(null)))},[e]),(0,_.useEffect)(()=>{if(e&&V.available)return V.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&Ad(n.data.path,e)&&nr(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,Td),o=i.filter(e=>!e.isDirectory).slice(0,Ed);return(0,H.jsxs)(H.Fragment,{children:[a.map(e=>(0,H.jsx)(kd,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,H.jsx)(kd,{entry:e,onNavigate:t},e.fullPath))]})}function kd({entry:e,onNavigate:t}){let n=Ii(),r=Li(n,e.fullPath);return(0,H.jsxs)(Ld,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Lr(n)):void tr(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,H.jsx)(ds,{place:r}):(0,H.jsx)(Hc,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,H.jsx)(zd,{children:r?.name||e.name})]})}function Ad(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}var jd=B.aside`
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

    &:not(:hover) ${()=>Bd},
    &:not(:hover) ${()=>Vd} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,Md=B.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,Nd=B(Md)`
    margin-top: auto;
`,Pd=B.div`
    display: flex;
    flex-direction: column;
`,Fd=B.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${jd}:hover ${Pd}:hover > & {
        grid-template-rows: 1fr;
    }
`,Id=B.div`
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
`,Ld=B.button`
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
`,Rd=B.span`
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
`,zd=B.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Bd=B.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Vd=B.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Hd=B.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`;function Ud({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let[o,s]=(0,_.useState)(!1),c=(0,_.useRef)(null);(0,_.useEffect)(()=>{if(!o)return;let e=e=>{c.current?.contains(e.target)||s(!1)},t=e=>{e.key===`Escape`&&s(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]),(0,_.useEffect)(()=>{a&&s(!1)},[a]);let l=e.columns,u=e=>{let t=new Set(l);t.has(e)?t.delete(e):t.add(e);let r=Os.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,H.jsxs)(Wd,{ref:c,children:[(0,H.jsx)(Gd,{disabled:a,onClick:()=>s(e=>!e),title:`View`,type:`button`,children:e.mode===`grid`?(0,H.jsx)(to,{size:14}):(0,H.jsx)(eo,{size:14})}),o&&(0,H.jsxs)(Kd,{children:[(0,H.jsx)(qd,{children:`View`}),(0,H.jsxs)(Jd,{children:[(0,H.jsxs)(Yd,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,H.jsx)(eo,{size:12}),` List`]}),(0,H.jsxs)(Yd,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,H.jsx)(to,{size:12}),` Grid`]})]}),(0,H.jsx)(qd,{children:`List icon size`}),(0,H.jsxs)(Xd,{children:[(0,H.jsx)(`input`,{"aria-label":`List icon size`,max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,H.jsxs)(Zd,{children:[e.iconSize,`px`]})]}),(0,H.jsx)(qd,{children:`Grid size`}),(0,H.jsxs)(Xd,{children:[(0,H.jsx)(`input`,{"aria-label":`Grid size`,max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,H.jsxs)(Zd,{children:[e.gridSize,`px`]})]}),(0,H.jsxs)(qd,{children:[`Columns`,(0,H.jsx)(vu,{})]}),Os.map(e=>(0,H.jsxs)(Qd,{children:[(0,H.jsx)(`input`,{checked:l.includes(e.id),onChange:()=>u(e.id),type:`checkbox`}),(0,H.jsx)(`span`,{children:e.label})]},e.id)),(0,H.jsxs)(Qd,{children:[(0,H.jsx)(`input`,{checked:l.includes(`linkTarget`),onChange:()=>u(`linkTarget`),type:`checkbox`}),(0,H.jsx)(`span`,{children:`Link target after the name`})]}),(0,H.jsxs)(qd,{children:[`Preview panel`,(0,H.jsx)(vu,{})]}),(0,H.jsxs)(Qd,{children:[(0,H.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,H.jsx)(`span`,{children:`Preview under the list`})]})]})]})}var Wd=B.div`
    position: relative;
    display: flex;
    height: 100%;
`,Gd=B.button`
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
`,Kd=B.div`
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
`,qd=B.div`
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
`,Jd=B.div`
    display: flex;
    gap: 4px;
`,Yd=B.button`
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
`,Xd=B.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,Zd=B.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,Qd=B.label`
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
`,$d=e=>(0,H.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,H.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),ef=e=>(0,H.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,H.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),tf=e=>(0,H.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,H.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),nf=e=>(0,H.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,H.jsx)(`path`,{d:`M2 5h6`})}),rf=e=>(0,H.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,H.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),af=e=>(0,H.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,H.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,H.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function of({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,view:o,onViewChange:s,onColumns:c,showImages:l,onShowImages:u}){let d=qn(),f=Jn(),[p,m]=(0,_.useState)({left:!1,right:!1}),[h,g]=(0,_.useState)(null),v=(0,_.useRef)(null),y=(0,_.useRef)(null),b=(0,_.useCallback)(()=>{let e=v.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;m(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,_.useEffect)(()=>{b();let e=v.current;if(!e)return;let t=new ResizeObserver(b);return t.observe(e),()=>t.disconnect()},[b,e.length]),(0,_.useEffect)(()=>{y.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let x=e=>v.current?.scrollBy({left:e,behavior:`smooth`});return(0,H.jsxs)(lf,{children:[(0,H.jsx)(uf,{children:(0,H.jsx)(oo,{size:19})}),(0,H.jsxs)(df,{children:[p.left&&(0,H.jsx)(pf,{onClick:()=>x(-180),title:`Scroll tabs left`,type:`button`,children:(0,H.jsx)($d,{})}),(0,H.jsx)(ff,{onScroll:b,onWheel:e=>{let t=v.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:v,children:e.map(e=>(0,H.jsxs)(mf,{$active:e.id===t,$dragging:h===e.id,draggable:!0,onDragEnd:()=>g(null),onDragOver:e=>{h&&e.preventDefault()},onDragStart:()=>g(e.id),onDrop:t=>{t.preventDefault(),h&&a(h,e.id),g(null)},onClick:()=>n(e.id),ref:e.id===t?y:void 0,title:e.path||e.title,type:`button`,children:[(0,H.jsx)(sf,{tab:e}),(0,H.jsx)(hf,{children:e.title}),(0,H.jsx)(gf,{onClick:t=>{t.stopPropagation(),r(e.id)},title:`Close tab`,children:(0,H.jsx)(tf,{})})]},e.id))}),p.right&&(0,H.jsx)(pf,{onClick:()=>x(180),title:`Scroll tabs right`,type:`button`,children:(0,H.jsx)(ef,{})}),(0,H.jsx)(_f,{onClick:i,title:`New tab`,type:`button`,children:(0,H.jsx)(Ja,{size:13})})]}),(0,H.jsx)(vf,{...f}),(0,H.jsxs)(yf,{children:[(0,H.jsx)(Ud,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:s,onColumns:c,onShowImages:u,showImages:l,view:o}),(0,H.jsx)(bf,{onClick:d.minimize,title:`Minimize`,type:`button`,children:(0,H.jsx)(nf,{})}),(0,H.jsx)(bf,{onClick:d.toggleMaximize,title:d.maximized?`Restore`:`Maximize`,type:`button`,children:d.maximized?(0,H.jsx)(af,{}):(0,H.jsx)(rf,{})}),(0,H.jsx)(xf,{onClick:d.close,title:`Close`,type:`button`,children:(0,H.jsx)(tf,{})})]})]})}function sf({tab:e}){switch(e.kind){case`home`:return(0,H.jsx)(Va,{size:13});case`settings`:return(0,H.jsx)(Qa,{size:13});case`recycle`:return(0,H.jsx)(ro,{size:13});default:return(0,H.jsx)(cf,{place:e.place})}}function cf({place:e}){return e?(0,H.jsx)(ds,{place:e,size:13}):(0,H.jsx)(Ha,{size:13})}var lf=B.header`
    display: flex;
    align-items: stretch;
    height: 38px;
    flex-shrink: 0;
    background: rgba(7, 11, 18, 0.95);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,uf=B.span`
    display: grid;
    place-items: center;
    align-self: center;
    width: 22px;
    height: 22px;
    margin-left: 12px;
    flex-shrink: 0;
`,df=B.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 4px;
`,ff=B.div`
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
`,pf=B.button`
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
`,mf=B.button`
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
`,hf=B.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,gf=B.span`
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
`,_f=B.button`
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
`,vf=B.div`
    flex: 1;
    min-width: 28px;
`,yf=B.div`
    display: flex;
    flex-shrink: 0;
`,bf=B.button`
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
`,xf=B(bf)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`,Sf={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`},Cf=`yafm://`,wf={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`},Tf=0;function Ef(e){return`${Cf}${e===`home`?`overview`:e}`}function Df(e){return e.toLowerCase().startsWith(Cf)?wf[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Of(e){let t=e.trim();if(t.length===0)return null;if(!t.toLowerCase().startsWith(Cf))return t;let n=wf[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?Ef(n):null}function kf(e){return e.history[e.index]??Ef(`home`)}function Af(e){return Df(kf(e))??`files`}function jf(e){let t=kf(e);return Df(t)?``:e.listing?.path||t}function Mf(e=Ef(`home`)){return Tf+=1,{id:`tab-${Tf}`,listing:null,loading:!Df(e),error:null,history:[e],index:0,fresh:!0,view:null}}function Nf(e){return e instanceof Error?e.message:String(e)}function Pf(e,t){let n=e=>e.replace(/[\\/]+/g,`\\`).replace(/\\$/,``).toLowerCase();return n(e)===n(t)}function Ff(e){let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0);return`${e.entries.length} items · ${Ei(t)}`}function If(){let[e,t]=(0,_.useState)(()=>[Mf()]),[n,r]=(0,_.useState)(()=>e[0].id),[i,a]=(0,_.useState)([]),[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)(null),u=Yn(),[d,f]=(0,_.useState)(_i),[p,m]=(0,_.useState)(0),[h,g]=(0,_.useState)(0),[v,y]=(0,_.useState)([]),[b,x]=(0,_.useState)(10),[S,C]=(0,_.useState)(null),[ee,w]=(0,_.useState)(0),[T,E]=(0,_.useState)(Pr),[D,te]=(0,_.useState)(0),O=e.find(e=>e.id===n)??e[0],k=Af(O),ne=kf(O),re=S?.defaultView??$n,ie={mode:O.view?.mode??re.mode,iconSize:O.view?.iconSize||re.iconSize||Qn.iconSize,gridSize:O.view?.gridSize||re.gridSize||Qn.gridSize,sort:O.view?.sort??Qn.sort,sortDescending:O.view?.sortDescending??Qn.sortDescending,columns:re.columns??$n.columns??[]},A=(0,_.useMemo)(()=>{let e={},t=cs(S),n={};for(let[e,t]of Object.entries(S?.placeNames??{}))n[ji(e)]=t;for(let t of i)e[ji(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=ji(t),a=i.find(e=>ji(e.path)===r);e[r]={name:n[r]??a?.name??(Ai(t)||t),path:t,kind:`folder`,icon:a?.icon??S?.placeIcons?.[t]??null}}return e},[i,S]),ae=(0,_.useMemo)(()=>({places:A,useIcons:S?.systemIcons===!1}),[A,S?.systemIcons]),j=S?.defaultView?.showImages??!0,oe=S?.defaultView?.imageStripHeight??$n.imageStripHeight,se=k===`home`?(0,H.jsx)(So,{size:13}):k===`settings`?(0,H.jsx)(Qa,{size:13}):k===`recycle`?(0,H.jsx)(ro,{size:13}):k===`gallery`?(0,H.jsx)(lo,{size:13}):void 0,ce=d.open&&d.query.length>0,le=(0,_.useMemo)(()=>ce&&O.listing?O.listing.entries.filter(e=>bi(Ri(ae,e.fullPath,e.name),d)).map(e=>e.fullPath):[],[ce,d,O.listing,ae]);(0,_.useEffect)(()=>{m(0)},[d.query,d.matchCase,d.regex,O.listing?.path]);let ue=le.length===0?-1:Math.min(p,le.length-1),de=(0,_.useCallback)(()=>{f(e=>({...e,open:!1,query:``})),m(0)},[]),fe=(0,_.useCallback)(()=>{f(e=>({...e,open:!0})),g(e=>e+1)},[]),pe=(0,_.useCallback)(e=>{f(t=>({...t,open:!0,query:t.open?t.query+e:e})),g(e=>e+1)},[]),me=(0,_.useCallback)(e=>{m(t=>le.length===0?0:(Math.min(t,le.length-1)+e+le.length)%le.length)},[le.length]),M=(0,_.useRef)({tabs:e,activeId:n});M.current={tabs:e,activeId:n};let N=(0,_.useRef)(S);N.current=S;let he=(0,_.useRef)(!1),ge=(0,_.useRef)([]),P=(0,_.useCallback)((e,n)=>{t(t=>t.map(t=>t.id===e?{...t,...n(t)}:t))},[]),F=(0,_.useRef)(new Map),_e=(0,_.useCallback)(e=>{let t=(F.current.get(e)??0)+1;return F.current.set(e,t),()=>F.current.get(e)===t},[]),ve=(0,_.useCallback)(async(e,t,n)=>{try{let r=await ar(t);n()&&r.listing&&P(e,()=>({listing:r.listing,view:r.listing.view??null}))}catch{}},[P]),I=(0,_.useCallback)(async(e,t,n=!1)=>{let r=_e(e);de();let i=!n||!M.current.tabs.find(t=>t.id===e)?.listing;P(e,e=>({listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh}));try{if(i&&(await ve(e,t,r),!r()))return;let a=await nr(t);if(!r())return;P(e,e=>({listing:a,view:a.view??null,loading:!1,fresh:!1,history:[...e.history.slice(0,e.index+1),a.path],index:e.index+1})),n||_r(a.path).then(()=>w(e=>e+1))}catch(t){if(!r())return;P(e,()=>({loading:!1,error:Nf(t)}))}},[_e,P,de,ve]),L=(0,_.useCallback)((e,t)=>{let n=Of(t);n&&(Df(n)?(de(),_e(e),P(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):I(e,n))},[_e,I,P,de]),ye=(0,_.useCallback)(async(e,t,n)=>{if(de(),Df(t)){_e(e),P(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=_e(e);P(e,()=>({index:n,listing:null,loading:!0,error:null}));try{if(await ve(e,t,r),!r())return;let n=await nr(t);if(!r())return;P(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(t){if(!r())return;P(e,()=>({loading:!1,error:Nf(t)}))}},[_e,P,de,ve]),R=(0,_.useCallback)(e=>{let n=Mf(e??Ef(`home`));t(e=>[...e,n]),r(n.id),e&&I(n.id,e)},[I]),be=(0,_.useCallback)(e=>{L(M.current.activeId,Ef(e))},[L]),xe=(0,_.useCallback)(e=>{let{tabs:n,activeId:i}=M.current;if(n.length===1){let e=Mf();t([e]),r(e.id);return}let a=n.findIndex(t=>t.id===e),o=n.filter(t=>t.id!==e);t(o),i===e&&r(o[Math.min(a,o.length-1)].id)},[]),Se=(0,_.useCallback)((e,t=!1)=>{t?R(e):L(M.current.activeId,e??Ef(`home`))},[L,R]),Ce=(0,_.useCallback)(()=>{let{tabs:e,activeId:t}=M.current,n=e.find(e=>e.id===t);n&&n.index>0&&ye(n.id,n.history[n.index-1],n.index-1)},[ye]),we=(0,_.useCallback)(()=>{let{tabs:e,activeId:t}=M.current,n=e.find(e=>e.id===t);n&&n.index<n.history.length-1&&ye(n.id,n.history[n.index+1],n.index+1)},[ye]),Te=(0,_.useCallback)(()=>{let{tabs:e,activeId:t}=M.current,n=e.find(e=>e.id===t);n&&Af(n)===`files`&&n.listing?.parent&&Se(n.listing.parent)},[Se]),Ee=(0,_.useRef)(null),De=(0,_.useCallback)(()=>{let{tabs:e,activeId:t}=M.current,n=e.find(e=>e.id===t);n?.listing&&I(n.id,n.listing.path,!0)},[I]),Oe=(0,_.useCallback)(e=>{let{tabs:t,activeId:n}=M.current,r=t.find(e=>e.id===n);if(!r||Af(r)!==`files`)return;let i=jf(r),a=N.current?.defaultView??$n,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||Qn.iconSize,gridSize:r.view?.gridSize||a.gridSize||Qn.gridSize,sort:r.view?.sort??Qn.sort,sortDescending:r.view?.sortDescending??Qn.sortDescending,...e};P(r.id,()=>({view:o})),Ee.current!==null&&window.clearTimeout(Ee.current),Ee.current=window.setTimeout(()=>{Ee.current=null,rr(i,o)},250)},[P]),ke=(0,_.useCallback)(e=>{let t=N.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??$n,columns:e}};C(n),Cr(n)},[]),Ae=(0,_.useCallback)(e=>{let t=N.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??$n,showImages:e}};C(n),Cr(n)},[]),je=(0,_.useCallback)(e=>{let t=N.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??$n,imageStripHeight:e}};C(n),Cr(n)},[]),Me=(0,_.useCallback)((e,t,n)=>{let{tabs:r,activeId:i}=M.current,a=r.find(e=>e.id===i);if(!a||Af(a)!==`files`||!a.listing)return;let o=jf(a),s=n?{...a.listing.tagColors,...n}:a.listing.tagColors,c=[...new Set([...a.listing.allTags,...t,...Object.keys(s)])].sort((e,t)=>e.localeCompare(t));P(a.id,n=>n.listing?{listing:{...n.listing,tags:{...n.listing.tags,[e]:t},tagColors:s,allTags:c}}:n),ir(o,e,t,n)},[P]),Ne=(0,_.useCallback)(e=>{Oe({sort:e,sortDescending:ie.sort===e&&!ie.sortDescending})},[Oe,ie.sort,ie.sortDescending]),Pe=(0,_.useCallback)((e,n)=>{t(t=>{let r=t.findIndex(t=>t.id===e),i=t.findIndex(e=>e.id===n);if(r<0||i<0||r===i)return t;let a=[...t],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),Fe=(0,_.useCallback)(()=>{or().then(a,()=>a([]))},[]),Ie=(0,_.useCallback)(e=>{let n=(e.openTabs??[]).map(Of).filter(e=>e!==null);if(n.length===0)return!1;let i=n.map(e=>({...Mf(e),fresh:!1})),a=Math.min(Math.max(e.activeTab??0,0),i.length-1);t(i),r(i[a].id);for(let e of i)Af(e)===`files`&&I(e.id,jf(e),!0);return!0},[I]),Le=(0,_.useCallback)(e=>{let t=ge.current;if(ge.current=[],t.length===0)return;let{tabs:n}=M.current;if(!e&&n.length===1&&n[0].fresh){L(n[0].id,t[0]);for(let e of t.slice(1))R(e)}else for(let e of t)R(e)},[R,L]),Re=(0,_.useCallback)(()=>{Sr().then(e=>{C(e),x(e.recentLimit);let t={...Pr,...e.shortcuts};E(t),Ir(t.openInNewTab),te(e=>e+1),he.current||(he.current=!0,Le(e.restoreTabs&&Ie(e)))},()=>{x(10),he.current=!0,Le(!1)})},[Le,Ie]),ze=(0,_.useCallback)(()=>{hr().then(y,()=>y([]))},[]),Be=(0,_.useCallback)(()=>{sr().then(s,()=>s([]))},[]),Ve=e.map(kf),He=Ve.join(`
`),Ue=Math.max(e.findIndex(e=>e.id===n),0);(0,_.useEffect)(()=>{if(!S?.restoreTabs)return;let e=setTimeout(()=>void wr(Ve,Ue),700);return()=>clearTimeout(e)},[He,Ue,S?.restoreTabs]),(0,_.useEffect)(()=>{let{tabs:e,activeId:t}=M.current,n=e.find(e=>e.id===t);n&&Af(n)===`files`&&I(n.id,void 0,!0),Fe(),Re(),Be(),kr().then(l,()=>l(null))},[I,Fe,Re,Be]),(0,_.useEffect)(()=>{let e=setInterval(Be,3e4);return()=>clearInterval(e)},[Be]),(0,_.useEffect)(()=>{k===`home`&&(ze(),Be())},[k,O.id,ze,Be]),(0,_.useEffect)(()=>{if(!V.available)return;let e=V.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=M.current,i=t.data.startup===!0;i&&!he.current?ge.current.push(n):i&&r.length===1&&r[0].fresh?L(r[0].id,n):R(n)});return V.send({type:`app.ready`}),e},[L,R]),(0,_.useEffect)(()=>{if(V.available)return V.on(e=>{let n=e;if(n.type!==`fs.sizes`||typeof n.data?.path!=`string`||!n.data.sizes)return;let{path:r,sizes:i}=n.data;t(e=>e.map(e=>e.listing?.path===r?{...e,listing:{...e.listing,folderSizes:{...e.listing.folderSizes,...i}}}:e))})},[]),(0,_.useEffect)(()=>{if(V.available)return V.on(e=>{let n=e;if(n.type!==`fs.counts`||typeof n.data?.path!=`string`||!n.data.counts)return;let{path:r,counts:i}=n.data;t(e=>e.map(e=>e.listing?.path===r?{...e,listing:{...e.listing,counts:{...e.listing.counts,...i}}}:e))})},[]),(0,_.useEffect)(()=>{let e=e=>{if(Vr(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),Ce();return}if(e.key===`BrowserForward`){e.preventDefault(),we();return}if(e.key===`Escape`&&d.open){e.preventDefault(),de();return}let t=Rr(e);t===T.closeTab?(e.preventDefault(),xe(M.current.activeId)):t===T.newTab?(e.preventDefault(),R()):t===T.goBack?(e.preventDefault(),Ce()):t===T.goForward?(e.preventDefault(),we()):t===T.goUp?(e.preventDefault(),Te()):t===T.find?(e.preventDefault(),fe()):k!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),pe(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[T,k,d.open,xe,R,Ce,we,Te,fe,de,pe]),(0,_.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),Ce()):e.button===4&&(e.preventDefault(),we())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[Ce,we]),(0,_.useEffect)(()=>{V.available&&k===`files`&&V.send({type:`fs.watch`,payload:{paths:[ne]}})},[k,ne]),(0,_.useEffect)(()=>{if(V.available)return V.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let{tabs:n,activeId:r}=M.current,i=n.find(e=>e.id===r);i&&Af(i)===`files`&&Pf(jf(i),t.data.path)&&nr(t.data.path,!1).then(e=>P(i.id,()=>({listing:e})),()=>void 0)})},[P]);let We=O.index>0,Ge=O.index<O.history.length-1;return(0,H.jsx)(Fi,{value:ae,children:(0,H.jsxs)(Lf,{$rounded:u,children:[(0,H.jsx)(of,{activeId:O.id,onClose:xe,onNewTab:()=>R(),onReorder:Pe,onSelect:r,onViewChange:Oe,onColumns:ke,onShowImages:Ae,showImages:j,view:ie,tabs:e.map(e=>{let t=Af(e),n=jf(e);return{id:e.id,kind:t,path:n,place:t===`files`?Li(ae,n):void 0,title:t===`files`?Ri(ae,n,Ai(n)||`Files`):Sf[t]}})}),(0,H.jsxs)(Rf,{children:[(0,H.jsx)(wd,{activeKind:k,currentPath:k===`files`?ne:``,drives:o,historyVersion:ee,onNavigate:e=>Se(e),onOpenView:be,homePath:i.find(e=>e.kind===`home`)?.path??``,places:i,recent:v,recentLimit:b,version:D}),(0,H.jsxs)(zf,{children:[(0,H.jsxs)(Bf,{children:[(0,H.jsx)($,{disabled:!We,onClick:Ce,title:`Back`,type:`button`,children:(0,H.jsx)(Ya,{})}),(0,H.jsx)($,{disabled:!Ge,onClick:we,title:`Forward`,type:`button`,children:(0,H.jsx)(Xa,{})}),(0,H.jsx)($,{disabled:k!==`files`||!O.listing?.parent,onClick:()=>O.listing?.parent&&Se(O.listing.parent),title:`Up one level`,type:`button`,children:(0,H.jsx)(Ka,{})}),(0,H.jsx)(Il,{icon:se,label:k===`files`?void 0:Sf[k],onNavigate:Se,path:k===`files`?jf(O):ne})]}),k===`files`?(0,H.jsxs)(Vf,{children:[(0,H.jsx)(js,{error:O.error,find:{...d,currentPath:ue<0?null:le[ue]},listing:O.listing,imageStripHeight:oe,loading:O.loading,onImageStripHeight:je,onOpen:Se,onOpenFile:e=>void tr(e),onRefresh:De,onSetTags:Me,onSort:Ne,openOnSingleClick:S?.openOnSingleClick??!1,showCheckboxes:S?.showCheckboxes??!0,showImages:j,view:ie}),d.open&&(0,H.jsx)(Fc,{current:ue,focusToken:h,matchCase:d.matchCase,mode:d.mode,onClose:de,onMatchCase:()=>f(e=>({...e,matchCase:!e.matchCase})),onMode:()=>f(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>me(1),onPrevious:()=>me(-1),onQuery:e=>f(t=>({...t,query:e})),onRegex:()=>f(e=>({...e,regex:!e.regex})),query:d.query,regex:d.regex,total:le.length})]}):k===`home`?(0,H.jsx)(jl,{drives:o,historyVersion:ee,homePath:i.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:Be,onHistoryChanged:()=>w(e=>e+1),onOpen:Se,onLayoutChanged:Re,onPlacesChanged:a,onRecentCleared:ze,places:i,recent:v,recentLimit:b}):k===`settings`?(0,H.jsx)(xu,{appInfo:c,onSettingsChanged:Re}):k===`gallery`?(0,H.jsx)(nd,{}):(0,H.jsx)(ql,{}),(0,H.jsxs)(Hf,{children:[(0,H.jsx)(`span`,{children:k===`files`&&O.listing?Ff(O.listing):``}),(0,H.jsx)(`span`,{children:c?`v${c.version} · ${c.platform}`:`browser preview`})]})]})]}),(0,H.jsx)(Zn,{})]})})}var Lf=B.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    background: var(--bg-primary);

    /* An undecorated window gets no frame from the compositor, so the corners are drawn here. */
    border-radius: ${({$rounded:e})=>e?`10px`:`0`};
    box-shadow: ${({$rounded:e})=>e?`inset 0 0 0 1px var(--border-color)`:`none`};
`,Rf=B.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
    background:
        radial-gradient(1200px 600px at 15% -10%, rgba(99, 102, 241, 0.12), transparent 60%),
        radial-gradient(900px 500px at 110% 20%, rgba(59, 130, 246, 0.08), transparent 55%),
        var(--bg-primary);
`,zf=B.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,Bf=B.header`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(11, 15, 25, 0.55);
    backdrop-filter: blur(8px);
`,$=B.button`
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
`,Vf=B.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Hf=B.footer`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    padding: 8px 22px;
    border-top: 1px solid var(--border-color);
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Uf=document.getElementById(`root`);Uf&&(0,v.createRoot)(Uf).render((0,H.jsx)(_.StrictMode,{children:(0,H.jsx)(If,{})}));