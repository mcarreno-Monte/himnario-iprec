function Zc(e,r){for(var n=0;n<r.length;n++){const t=r[n];if(typeof t!="string"&&!Array.isArray(t)){for(const a in t)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(t,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>t[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();function ed(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rs={exports:{}},ya={},Ts={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lt=Symbol.for("react.element"),rd=Symbol.for("react.portal"),nd=Symbol.for("react.fragment"),td=Symbol.for("react.strict_mode"),ad=Symbol.for("react.profiler"),od=Symbol.for("react.provider"),ld=Symbol.for("react.context"),id=Symbol.for("react.forward_ref"),sd=Symbol.for("react.suspense"),ud=Symbol.for("react.memo"),cd=Symbol.for("react.lazy"),ai=Symbol.iterator;function dd(e){return e===null||typeof e!="object"?null:(e=ai&&e[ai]||e["@@iterator"],typeof e=="function"?e:null)}var As={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zs=Object.assign,Ps={};function pn(e,r,n){this.props=e,this.context=r,this.refs=Ps,this.updater=n||As}pn.prototype.isReactComponent={};pn.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};pn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ks(){}ks.prototype=pn.prototype;function ll(e,r,n){this.props=e,this.context=r,this.refs=Ps,this.updater=n||As}var il=ll.prototype=new ks;il.constructor=ll;zs(il,pn.prototype);il.isPureReactComponent=!0;var oi=Array.isArray,Fs=Object.prototype.hasOwnProperty,sl={current:null},ws={key:!0,ref:!0,__self:!0,__source:!0};function xs(e,r,n){var t,a={},o=null,l=null;if(r!=null)for(t in r.ref!==void 0&&(l=r.ref),r.key!==void 0&&(o=""+r.key),r)Fs.call(r,t)&&!ws.hasOwnProperty(t)&&(a[t]=r[t]);var i=arguments.length-2;if(i===1)a.children=n;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(t in i=e.defaultProps,i)a[t]===void 0&&(a[t]=i[t]);return{$$typeof:lt,type:e,key:o,ref:l,props:a,_owner:sl.current}}function md(e,r){return{$$typeof:lt,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function ul(e){return typeof e=="object"&&e!==null&&e.$$typeof===lt}function pd(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return r[n]})}var li=/\/+/g;function La(e,r){return typeof e=="object"&&e!==null&&e.key!=null?pd(""+e.key):r.toString(36)}function Dt(e,r,n,t,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case lt:case rd:l=!0}}if(l)return l=e,a=a(l),e=t===""?"."+La(l,0):t,oi(a)?(n="",e!=null&&(n=e.replace(li,"$&/")+"/"),Dt(a,r,n,"",function(u){return u})):a!=null&&(ul(a)&&(a=md(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(li,"$&/")+"/")+e)),r.push(a)),1;if(l=0,t=t===""?".":t+":",oi(e))for(var i=0;i<e.length;i++){o=e[i];var s=t+La(o,i);l+=Dt(o,r,n,s,a)}else if(s=dd(e),typeof s=="function")for(e=s.call(e),i=0;!(o=e.next()).done;)o=o.value,s=t+La(o,i++),l+=Dt(o,r,n,s,a);else if(o==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function yt(e,r,n){if(e==null)return e;var t=[],a=0;return Dt(e,t,"","",function(o){return r.call(n,o,a++)}),t}function fd(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Nt={transition:null},yd={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Nt,ReactCurrentOwner:sl};function Ds(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:yt,forEach:function(e,r,n){yt(e,function(){r.apply(this,arguments)},n)},count:function(e){var r=0;return yt(e,function(){r++}),r},toArray:function(e){return yt(e,function(r){return r})||[]},only:function(e){if(!ul(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=pn;D.Fragment=nd;D.Profiler=ad;D.PureComponent=ll;D.StrictMode=td;D.Suspense=sd;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yd;D.act=Ds;D.cloneElement=function(e,r,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var t=zs({},e.props),a=e.key,o=e.ref,l=e._owner;if(r!=null){if(r.ref!==void 0&&(o=r.ref,l=sl.current),r.key!==void 0&&(a=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in r)Fs.call(r,s)&&!ws.hasOwnProperty(s)&&(t[s]=r[s]===void 0&&i!==void 0?i[s]:r[s])}var s=arguments.length-2;if(s===1)t.children=n;else if(1<s){i=Array(s);for(var u=0;u<s;u++)i[u]=arguments[u+2];t.children=i}return{$$typeof:lt,type:e.type,key:a,ref:o,props:t,_owner:l}};D.createContext=function(e){return e={$$typeof:ld,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:od,_context:e},e.Consumer=e};D.createElement=xs;D.createFactory=function(e){var r=xs.bind(null,e);return r.type=e,r};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:id,render:e}};D.isValidElement=ul;D.lazy=function(e){return{$$typeof:cd,_payload:{_status:-1,_result:e},_init:fd}};D.memo=function(e,r){return{$$typeof:ud,type:e,compare:r===void 0?null:r}};D.startTransition=function(e){var r=Nt.transition;Nt.transition={};try{e()}finally{Nt.transition=r}};D.unstable_act=Ds;D.useCallback=function(e,r){return ue.current.useCallback(e,r)};D.useContext=function(e){return ue.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};D.useEffect=function(e,r){return ue.current.useEffect(e,r)};D.useId=function(){return ue.current.useId()};D.useImperativeHandle=function(e,r,n){return ue.current.useImperativeHandle(e,r,n)};D.useInsertionEffect=function(e,r){return ue.current.useInsertionEffect(e,r)};D.useLayoutEffect=function(e,r){return ue.current.useLayoutEffect(e,r)};D.useMemo=function(e,r){return ue.current.useMemo(e,r)};D.useReducer=function(e,r,n){return ue.current.useReducer(e,r,n)};D.useRef=function(e){return ue.current.useRef(e)};D.useState=function(e){return ue.current.useState(e)};D.useSyncExternalStore=function(e,r,n){return ue.current.useSyncExternalStore(e,r,n)};D.useTransition=function(){return ue.current.useTransition()};D.version="18.3.1";Ts.exports=D;var O=Ts.exports;const Ns=ed(O),hd=Zc({__proto__:null,default:Ns},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd=O,gd=Symbol.for("react.element"),Sd=Symbol.for("react.fragment"),Ed=Object.prototype.hasOwnProperty,Cd=vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Od={key:!0,ref:!0,__self:!0,__source:!0};function js(e,r,n){var t,a={},o=null,l=null;n!==void 0&&(o=""+n),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(l=r.ref);for(t in r)Ed.call(r,t)&&!Od.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)a[t]===void 0&&(a[t]=r[t]);return{$$typeof:gd,type:e,key:o,ref:l,props:a,_owner:Cd.current}}ya.Fragment=Sd;ya.jsx=js;ya.jsxs=js;Rs.exports=ya;var f=Rs.exports,uo={},Ls={exports:{}},Ee={},qs={exports:{}},Ms={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(P,w){var x=P.length;P.push(w);e:for(;0<x;){var J=x-1>>>1,K=P[J];if(0<a(K,w))P[J]=w,P[x]=K,x=J;else break e}}function n(P){return P.length===0?null:P[0]}function t(P){if(P.length===0)return null;var w=P[0],x=P.pop();if(x!==w){P[0]=x;e:for(var J=0,K=P.length,pt=K>>>1;J<pt;){var Or=2*(J+1)-1,ja=P[Or],Rr=Or+1,ft=P[Rr];if(0>a(ja,x))Rr<K&&0>a(ft,ja)?(P[J]=ft,P[Rr]=x,J=Rr):(P[J]=ja,P[Or]=x,J=Or);else if(Rr<K&&0>a(ft,x))P[J]=ft,P[Rr]=x,J=Rr;else break e}}return w}function a(P,w){var x=P.sortIndex-w.sortIndex;return x!==0?x:P.id-w.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var s=[],u=[],h=1,d=null,y=3,g=!1,S=!1,E=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var w=n(u);w!==null;){if(w.callback===null)t(u);else if(w.startTime<=P)t(u),w.sortIndex=w.expirationTime,r(s,w);else break;w=n(u)}}function v(P){if(E=!1,m(P),!S)if(n(s)!==null)S=!0,Da(R);else{var w=n(u);w!==null&&Na(v,w.startTime-P)}}function R(P,w){S=!1,E&&(E=!1,p(F),F=-1),g=!0;var x=y;try{for(m(w),d=n(s);d!==null&&(!(d.expirationTime>w)||P&&!ke());){var J=d.callback;if(typeof J=="function"){d.callback=null,y=d.priorityLevel;var K=J(d.expirationTime<=w);w=e.unstable_now(),typeof K=="function"?d.callback=K:d===n(s)&&t(s),m(w)}else t(s);d=n(s)}if(d!==null)var pt=!0;else{var Or=n(u);Or!==null&&Na(v,Or.startTime-w),pt=!1}return pt}finally{d=null,y=x,g=!1}}var z=!1,k=null,F=-1,I=5,N=-1;function ke(){return!(e.unstable_now()-N<I)}function vn(){if(k!==null){var P=e.unstable_now();N=P;var w=!0;try{w=k(!0,P)}finally{w?gn():(z=!1,k=null)}}else z=!1}var gn;if(typeof c=="function")gn=function(){c(vn)};else if(typeof MessageChannel<"u"){var ti=new MessageChannel,Xc=ti.port2;ti.port1.onmessage=vn,gn=function(){Xc.postMessage(null)}}else gn=function(){T(vn,0)};function Da(P){k=P,z||(z=!0,gn())}function Na(P,w){F=T(function(){P(e.unstable_now())},w)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){S||g||(S=!0,Da(R))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(y){case 1:case 2:case 3:var w=3;break;default:w=y}var x=y;y=w;try{return P()}finally{y=x}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,w){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var x=y;y=P;try{return w()}finally{y=x}},e.unstable_scheduleCallback=function(P,w,x){var J=e.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?J+x:J):x=J,P){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=x+K,P={id:h++,callback:w,priorityLevel:P,startTime:x,expirationTime:K,sortIndex:-1},x>J?(P.sortIndex=x,r(u,P),n(s)===null&&P===n(u)&&(E?(p(F),F=-1):E=!0,Na(v,x-J))):(P.sortIndex=K,r(s,P),S||g||(S=!0,Da(R))),P},e.unstable_shouldYield=ke,e.unstable_wrapCallback=function(P){var w=y;return function(){var x=y;y=w;try{return P.apply(this,arguments)}finally{y=x}}}})(Ms);qs.exports=Ms;var Rd=qs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td=O,Se=Rd;function C(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bs=new Set,Hn={};function qr(e,r){on(e,r),on(e+"Capture",r)}function on(e,r){for(Hn[e]=r,e=0;e<r.length;e++)bs.add(r[e])}var Be=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),co=Object.prototype.hasOwnProperty,Ad=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ii={},si={};function zd(e){return co.call(si,e)?!0:co.call(ii,e)?!1:Ad.test(e)?si[e]=!0:(ii[e]=!0,!1)}function Pd(e,r,n,t){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return t?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function kd(e,r,n,t){if(r===null||typeof r>"u"||Pd(e,r,n,t))return!0;if(t)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function ce(e,r,n,t,a,o,l){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=t,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=o,this.removeEmptyString=l}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];ne[r]=new ce(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var cl=/[\-:]([a-z])/g;function dl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(cl,dl);ne[r]=new ce(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(cl,dl);ne[r]=new ce(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(cl,dl);ne[r]=new ce(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function ml(e,r,n,t){var a=ne.hasOwnProperty(r)?ne[r]:null;(a!==null?a.type!==0:t||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(kd(r,n,a,t)&&(n=null),t||a===null?zd(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(r=a.attributeName,t=a.attributeNamespace,n===null?e.removeAttribute(r):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,t?e.setAttributeNS(t,r,n):e.setAttribute(r,n))))}var Xe=Td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ht=Symbol.for("react.element"),Hr=Symbol.for("react.portal"),Gr=Symbol.for("react.fragment"),pl=Symbol.for("react.strict_mode"),mo=Symbol.for("react.profiler"),_s=Symbol.for("react.provider"),Ys=Symbol.for("react.context"),fl=Symbol.for("react.forward_ref"),po=Symbol.for("react.suspense"),fo=Symbol.for("react.suspense_list"),yl=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),Hs=Symbol.for("react.offscreen"),ui=Symbol.iterator;function Sn(e){return e===null||typeof e!="object"?null:(e=ui&&e[ui]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,qa;function Pn(e){if(qa===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);qa=r&&r[1]||""}return`
`+qa+e}var Ma=!1;function ba(e,r){if(!e||Ma)return"";Ma=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(u){var t=u}Reflect.construct(e,[],r)}else{try{r.call()}catch(u){t=u}e.call(r.prototype)}else{try{throw Error()}catch(u){t=u}e()}}catch(u){if(u&&t&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=t.stack.split(`
`),l=a.length-1,i=o.length-1;1<=l&&0<=i&&a[l]!==o[i];)i--;for(;1<=l&&0<=i;l--,i--)if(a[l]!==o[i]){if(l!==1||i!==1)do if(l--,i--,0>i||a[l]!==o[i]){var s=`
`+a[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=i);break}}}finally{Ma=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pn(e):""}function Fd(e){switch(e.tag){case 5:return Pn(e.type);case 16:return Pn("Lazy");case 13:return Pn("Suspense");case 19:return Pn("SuspenseList");case 0:case 2:case 15:return e=ba(e.type,!1),e;case 11:return e=ba(e.type.render,!1),e;case 1:return e=ba(e.type,!0),e;default:return""}}function yo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gr:return"Fragment";case Hr:return"Portal";case mo:return"Profiler";case pl:return"StrictMode";case po:return"Suspense";case fo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ys:return(e.displayName||"Context")+".Consumer";case _s:return(e._context.displayName||"Context")+".Provider";case fl:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case yl:return r=e.displayName||null,r!==null?r:yo(e.type)||"Memo";case er:r=e._payload,e=e._init;try{return yo(e(r))}catch{}}return null}function wd(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yo(r);case 8:return r===pl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function hr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gs(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function xd(e){var r=Gs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),t=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return a.call(this)},set:function(l){t=""+l,o.call(this,l)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return t},setValue:function(l){t=""+l},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function vt(e){e._valueTracker||(e._valueTracker=xd(e))}function Vs(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),t="";return e&&(t=Gs(e)?e.checked?"true":"false":e.value),e=t,e!==n?(r.setValue(e),!0):!1}function It(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ho(e,r){var n=r.checked;return G({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ci(e,r){var n=r.defaultValue==null?"":r.defaultValue,t=r.checked!=null?r.checked:r.defaultChecked;n=hr(r.value!=null?r.value:n),e._wrapperState={initialChecked:t,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Is(e,r){r=r.checked,r!=null&&ml(e,"checked",r,!1)}function vo(e,r){Is(e,r);var n=hr(r.value),t=r.type;if(n!=null)t==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?go(e,r.type,n):r.hasOwnProperty("defaultValue")&&go(e,r.type,hr(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function di(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var t=r.type;if(!(t!=="submit"&&t!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function go(e,r,n){(r!=="number"||It(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kn=Array.isArray;function Zr(e,r,n,t){if(e=e.options,r){r={};for(var a=0;a<n.length;a++)r["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=r.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&t&&(e[n].defaultSelected=!0)}else{for(n=""+hr(n),r=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,t&&(e[a].defaultSelected=!0);return}r!==null||e[a].disabled||(r=e[a])}r!==null&&(r.selected=!0)}}function So(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(C(91));return G({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mi(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(C(92));if(kn(n)){if(1<n.length)throw Error(C(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:hr(n)}}function Js(e,r){var n=hr(r.value),t=hr(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),t!=null&&(e.defaultValue=""+t)}function pi(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function Qs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Eo(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?Qs(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gt,Us=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,t,a){MSApp.execUnsafeLocalFunction(function(){return e(r,n,t,a)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(gt=gt||document.createElement("div"),gt.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=gt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Gn(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var Dn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dd=["Webkit","ms","Moz","O"];Object.keys(Dn).forEach(function(e){Dd.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Dn[r]=Dn[e]})});function Bs(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||Dn.hasOwnProperty(e)&&Dn[e]?(""+r).trim():r+"px"}function $s(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var t=n.indexOf("--")===0,a=Bs(n,r[n],t);n==="float"&&(n="cssFloat"),t?e.setProperty(n,a):e[n]=a}}var Nd=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Co(e,r){if(r){if(Nd[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(C(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(C(61))}if(r.style!=null&&typeof r.style!="object")throw Error(C(62))}}function Oo(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ro=null;function hl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var To=null,en=null,rn=null;function fi(e){if(e=ut(e)){if(typeof To!="function")throw Error(C(280));var r=e.stateNode;r&&(r=Ea(r),To(e.stateNode,e.type,r))}}function Ws(e){en?rn?rn.push(e):rn=[e]:en=e}function Ks(){if(en){var e=en,r=rn;if(rn=en=null,fi(e),r)for(e=0;e<r.length;e++)fi(r[e])}}function Xs(e,r){return e(r)}function Zs(){}var _a=!1;function eu(e,r,n){if(_a)return e(r,n);_a=!0;try{return Xs(e,r,n)}finally{_a=!1,(en!==null||rn!==null)&&(Zs(),Ks())}}function Vn(e,r){var n=e.stateNode;if(n===null)return null;var t=Ea(n);if(t===null)return null;n=t[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,r,typeof n));return n}var Ao=!1;if(Be)try{var En={};Object.defineProperty(En,"passive",{get:function(){Ao=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{Ao=!1}function jd(e,r,n,t,a,o,l,i,s){var u=Array.prototype.slice.call(arguments,3);try{r.apply(n,u)}catch(h){this.onError(h)}}var Nn=!1,Jt=null,Qt=!1,zo=null,Ld={onError:function(e){Nn=!0,Jt=e}};function qd(e,r,n,t,a,o,l,i,s){Nn=!1,Jt=null,jd.apply(Ld,arguments)}function Md(e,r,n,t,a,o,l,i,s){if(qd.apply(this,arguments),Nn){if(Nn){var u=Jt;Nn=!1,Jt=null}else throw Error(C(198));Qt||(Qt=!0,zo=u)}}function Mr(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function ru(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function yi(e){if(Mr(e)!==e)throw Error(C(188))}function bd(e){var r=e.alternate;if(!r){if(r=Mr(e),r===null)throw Error(C(188));return r!==e?null:e}for(var n=e,t=r;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(t=a.return,t!==null){n=t;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return yi(a),e;if(o===t)return yi(a),r;o=o.sibling}throw Error(C(188))}if(n.return!==t.return)n=a,t=o;else{for(var l=!1,i=a.child;i;){if(i===n){l=!0,n=a,t=o;break}if(i===t){l=!0,t=a,n=o;break}i=i.sibling}if(!l){for(i=o.child;i;){if(i===n){l=!0,n=o,t=a;break}if(i===t){l=!0,t=o,n=a;break}i=i.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==t)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:r}function nu(e){return e=bd(e),e!==null?tu(e):null}function tu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=tu(e);if(r!==null)return r;e=e.sibling}return null}var au=Se.unstable_scheduleCallback,hi=Se.unstable_cancelCallback,_d=Se.unstable_shouldYield,Yd=Se.unstable_requestPaint,Q=Se.unstable_now,Hd=Se.unstable_getCurrentPriorityLevel,vl=Se.unstable_ImmediatePriority,ou=Se.unstable_UserBlockingPriority,Ut=Se.unstable_NormalPriority,Gd=Se.unstable_LowPriority,lu=Se.unstable_IdlePriority,ha=null,_e=null;function Vd(e){if(_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(ha,e,void 0,(e.current.flags&128)===128)}catch{}}var Ne=Math.clz32?Math.clz32:Qd,Id=Math.log,Jd=Math.LN2;function Qd(e){return e>>>=0,e===0?32:31-(Id(e)/Jd|0)|0}var St=64,Et=4194304;function Fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bt(e,r){var n=e.pendingLanes;if(n===0)return 0;var t=0,a=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var i=l&~a;i!==0?t=Fn(i):(o&=l,o!==0&&(t=Fn(o)))}else l=n&~a,l!==0?t=Fn(l):o!==0&&(t=Fn(o));if(t===0)return 0;if(r!==0&&r!==t&&!(r&a)&&(a=t&-t,o=r&-r,a>=o||a===16&&(o&4194240)!==0))return r;if(t&4&&(t|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=t;0<r;)n=31-Ne(r),a=1<<n,t|=e[n],r&=~a;return t}function Ud(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bd(e,r){for(var n=e.suspendedLanes,t=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ne(o),i=1<<l,s=a[l];s===-1?(!(i&n)||i&t)&&(a[l]=Ud(i,r)):s<=r&&(e.expiredLanes|=i),o&=~i}}function Po(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function iu(){var e=St;return St<<=1,!(St&4194240)&&(St=64),e}function Ya(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function it(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Ne(r),e[r]=n}function $d(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Ne(n),o=1<<a;r[a]=0,t[a]=-1,e[a]=-1,n&=~o}}function gl(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var t=31-Ne(n),a=1<<t;a&r|e[t]&r&&(e[t]|=r),n&=~a}}var L=0;function su(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var uu,Sl,cu,du,mu,ko=!1,Ct=[],ir=null,sr=null,ur=null,In=new Map,Jn=new Map,nr=[],Wd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vi(e,r){switch(e){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":In.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(r.pointerId)}}function Cn(e,r,n,t,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:r,domEventName:n,eventSystemFlags:t,nativeEvent:o,targetContainers:[a]},r!==null&&(r=ut(r),r!==null&&Sl(r)),e):(e.eventSystemFlags|=t,r=e.targetContainers,a!==null&&r.indexOf(a)===-1&&r.push(a),e)}function Kd(e,r,n,t,a){switch(r){case"focusin":return ir=Cn(ir,e,r,n,t,a),!0;case"dragenter":return sr=Cn(sr,e,r,n,t,a),!0;case"mouseover":return ur=Cn(ur,e,r,n,t,a),!0;case"pointerover":var o=a.pointerId;return In.set(o,Cn(In.get(o)||null,e,r,n,t,a)),!0;case"gotpointercapture":return o=a.pointerId,Jn.set(o,Cn(Jn.get(o)||null,e,r,n,t,a)),!0}return!1}function pu(e){var r=zr(e.target);if(r!==null){var n=Mr(r);if(n!==null){if(r=n.tag,r===13){if(r=ru(n),r!==null){e.blockedOn=r,mu(e.priority,function(){cu(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jt(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=Fo(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var t=new n.constructor(n.type,n);Ro=t,n.target.dispatchEvent(t),Ro=null}else return r=ut(n),r!==null&&Sl(r),e.blockedOn=n,!1;r.shift()}return!0}function gi(e,r,n){jt(e)&&n.delete(r)}function Xd(){ko=!1,ir!==null&&jt(ir)&&(ir=null),sr!==null&&jt(sr)&&(sr=null),ur!==null&&jt(ur)&&(ur=null),In.forEach(gi),Jn.forEach(gi)}function On(e,r){e.blockedOn===r&&(e.blockedOn=null,ko||(ko=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,Xd)))}function Qn(e){function r(a){return On(a,e)}if(0<Ct.length){On(Ct[0],e);for(var n=1;n<Ct.length;n++){var t=Ct[n];t.blockedOn===e&&(t.blockedOn=null)}}for(ir!==null&&On(ir,e),sr!==null&&On(sr,e),ur!==null&&On(ur,e),In.forEach(r),Jn.forEach(r),n=0;n<nr.length;n++)t=nr[n],t.blockedOn===e&&(t.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)pu(n),n.blockedOn===null&&nr.shift()}var nn=Xe.ReactCurrentBatchConfig,$t=!0;function Zd(e,r,n,t){var a=L,o=nn.transition;nn.transition=null;try{L=1,El(e,r,n,t)}finally{L=a,nn.transition=o}}function em(e,r,n,t){var a=L,o=nn.transition;nn.transition=null;try{L=4,El(e,r,n,t)}finally{L=a,nn.transition=o}}function El(e,r,n,t){if($t){var a=Fo(e,r,n,t);if(a===null)Wa(e,r,t,Wt,n),vi(e,t);else if(Kd(a,e,r,n,t))t.stopPropagation();else if(vi(e,t),r&4&&-1<Wd.indexOf(e)){for(;a!==null;){var o=ut(a);if(o!==null&&uu(o),o=Fo(e,r,n,t),o===null&&Wa(e,r,t,Wt,n),o===a)break;a=o}a!==null&&t.stopPropagation()}else Wa(e,r,t,null,n)}}var Wt=null;function Fo(e,r,n,t){if(Wt=null,e=hl(t),e=zr(e),e!==null)if(r=Mr(e),r===null)e=null;else if(n=r.tag,n===13){if(e=ru(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Wt=e,null}function fu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hd()){case vl:return 1;case ou:return 4;case Ut:case Gd:return 16;case lu:return 536870912;default:return 16}default:return 16}}var ar=null,Cl=null,Lt=null;function yu(){if(Lt)return Lt;var e,r=Cl,n=r.length,t,a="value"in ar?ar.value:ar.textContent,o=a.length;for(e=0;e<n&&r[e]===a[e];e++);var l=n-e;for(t=1;t<=l&&r[n-t]===a[o-t];t++);return Lt=a.slice(e,1<t?1-t:void 0)}function qt(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Ot(){return!0}function Si(){return!1}function Ce(e){function r(n,t,a,o,l){this._reactName=n,this._targetInst=a,this.type=t,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(o):o[i]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ot:Si,this.isPropagationStopped=Si,this}return G(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ot)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ot)},persist:function(){},isPersistent:Ot}),r}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Ce(fn),st=G({},fn,{view:0,detail:0}),rm=Ce(st),Ha,Ga,Rn,va=G({},st,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rn&&(Rn&&e.type==="mousemove"?(Ha=e.screenX-Rn.screenX,Ga=e.screenY-Rn.screenY):Ga=Ha=0,Rn=e),Ha)},movementY:function(e){return"movementY"in e?e.movementY:Ga}}),Ei=Ce(va),nm=G({},va,{dataTransfer:0}),tm=Ce(nm),am=G({},st,{relatedTarget:0}),Va=Ce(am),om=G({},fn,{animationName:0,elapsedTime:0,pseudoElement:0}),lm=Ce(om),im=G({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sm=Ce(im),um=G({},fn,{data:0}),Ci=Ce(um),cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pm(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=mm[e])?!!r[e]:!1}function Rl(){return pm}var fm=G({},st,{key:function(e){if(e.key){var r=cm[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=qt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rl,charCode:function(e){return e.type==="keypress"?qt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ym=Ce(fm),hm=G({},va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oi=Ce(hm),vm=G({},st,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rl}),gm=Ce(vm),Sm=G({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Em=Ce(Sm),Cm=G({},va,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Om=Ce(Cm),Rm=[9,13,27,32],Tl=Be&&"CompositionEvent"in window,jn=null;Be&&"documentMode"in document&&(jn=document.documentMode);var Tm=Be&&"TextEvent"in window&&!jn,hu=Be&&(!Tl||jn&&8<jn&&11>=jn),Ri=" ",Ti=!1;function vu(e,r){switch(e){case"keyup":return Rm.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vr=!1;function Am(e,r){switch(e){case"compositionend":return gu(r);case"keypress":return r.which!==32?null:(Ti=!0,Ri);case"textInput":return e=r.data,e===Ri&&Ti?null:e;default:return null}}function zm(e,r){if(Vr)return e==="compositionend"||!Tl&&vu(e,r)?(e=yu(),Lt=Cl=ar=null,Vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return hu&&r.locale!=="ko"?null:r.data;default:return null}}var Pm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ai(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Pm[e.type]:r==="textarea"}function Su(e,r,n,t){Ws(t),r=Kt(r,"onChange"),0<r.length&&(n=new Ol("onChange","change",null,n,t),e.push({event:n,listeners:r}))}var Ln=null,Un=null;function km(e){wu(e,0)}function ga(e){var r=Qr(e);if(Vs(r))return e}function Fm(e,r){if(e==="change")return r}var Eu=!1;if(Be){var Ia;if(Be){var Ja="oninput"in document;if(!Ja){var zi=document.createElement("div");zi.setAttribute("oninput","return;"),Ja=typeof zi.oninput=="function"}Ia=Ja}else Ia=!1;Eu=Ia&&(!document.documentMode||9<document.documentMode)}function Pi(){Ln&&(Ln.detachEvent("onpropertychange",Cu),Un=Ln=null)}function Cu(e){if(e.propertyName==="value"&&ga(Un)){var r=[];Su(r,Un,e,hl(e)),eu(km,r)}}function wm(e,r,n){e==="focusin"?(Pi(),Ln=r,Un=n,Ln.attachEvent("onpropertychange",Cu)):e==="focusout"&&Pi()}function xm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ga(Un)}function Dm(e,r){if(e==="click")return ga(r)}function Nm(e,r){if(e==="input"||e==="change")return ga(r)}function jm(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Le=typeof Object.is=="function"?Object.is:jm;function Bn(e,r){if(Le(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),t=Object.keys(r);if(n.length!==t.length)return!1;for(t=0;t<n.length;t++){var a=n[t];if(!co.call(r,a)||!Le(e[a],r[a]))return!1}return!0}function ki(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fi(e,r){var n=ki(e);e=0;for(var t;n;){if(n.nodeType===3){if(t=e+n.textContent.length,e<=r&&t>=r)return{node:n,offset:r-e};e=t}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ki(n)}}function Ou(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Ou(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Ru(){for(var e=window,r=It();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=It(e.document)}return r}function Al(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Lm(e){var r=Ru(),n=e.focusedElem,t=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&Ou(n.ownerDocument.documentElement,n)){if(t!==null&&Al(n)){if(r=t.start,e=t.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(t.start,a);t=t.end===void 0?o:Math.min(t.end,a),!e.extend&&o>t&&(a=t,t=o,o=a),a=Fi(n,o);var l=Fi(n,t);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(r=r.createRange(),r.setStart(a.node,a.offset),e.removeAllRanges(),o>t?(e.addRange(r),e.extend(l.node,l.offset)):(r.setEnd(l.node,l.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var qm=Be&&"documentMode"in document&&11>=document.documentMode,Ir=null,wo=null,qn=null,xo=!1;function wi(e,r,n){var t=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xo||Ir==null||Ir!==It(t)||(t=Ir,"selectionStart"in t&&Al(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),qn&&Bn(qn,t)||(qn=t,t=Kt(wo,"onSelect"),0<t.length&&(r=new Ol("onSelect","select",null,r,n),e.push({event:r,listeners:t}),r.target=Ir)))}function Rt(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Jr={animationend:Rt("Animation","AnimationEnd"),animationiteration:Rt("Animation","AnimationIteration"),animationstart:Rt("Animation","AnimationStart"),transitionend:Rt("Transition","TransitionEnd")},Qa={},Tu={};Be&&(Tu=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function Sa(e){if(Qa[e])return Qa[e];if(!Jr[e])return e;var r=Jr[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in Tu)return Qa[e]=r[n];return e}var Au=Sa("animationend"),zu=Sa("animationiteration"),Pu=Sa("animationstart"),ku=Sa("transitionend"),Fu=new Map,xi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(e,r){Fu.set(e,r),qr(r,[e])}for(var Ua=0;Ua<xi.length;Ua++){var Ba=xi[Ua],Mm=Ba.toLowerCase(),bm=Ba[0].toUpperCase()+Ba.slice(1);gr(Mm,"on"+bm)}gr(Au,"onAnimationEnd");gr(zu,"onAnimationIteration");gr(Pu,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(ku,"onTransitionEnd");on("onMouseEnter",["mouseout","mouseover"]);on("onMouseLeave",["mouseout","mouseover"]);on("onPointerEnter",["pointerout","pointerover"]);on("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_m=new Set("cancel close invalid load scroll toggle".split(" ").concat(wn));function Di(e,r,n){var t=e.type||"unknown-event";e.currentTarget=n,Md(t,r,void 0,e),e.currentTarget=null}function wu(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var t=e[n],a=t.event;t=t.listeners;e:{var o=void 0;if(r)for(var l=t.length-1;0<=l;l--){var i=t[l],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==o&&a.isPropagationStopped())break e;Di(a,i,u),o=s}else for(l=0;l<t.length;l++){if(i=t[l],s=i.instance,u=i.currentTarget,i=i.listener,s!==o&&a.isPropagationStopped())break e;Di(a,i,u),o=s}}}if(Qt)throw e=zo,Qt=!1,zo=null,e}function M(e,r){var n=r[qo];n===void 0&&(n=r[qo]=new Set);var t=e+"__bubble";n.has(t)||(xu(r,e,2,!1),n.add(t))}function $a(e,r,n){var t=0;r&&(t|=4),xu(n,e,t,r)}var Tt="_reactListening"+Math.random().toString(36).slice(2);function $n(e){if(!e[Tt]){e[Tt]=!0,bs.forEach(function(n){n!=="selectionchange"&&(_m.has(n)||$a(n,!1,e),$a(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Tt]||(r[Tt]=!0,$a("selectionchange",!1,r))}}function xu(e,r,n,t){switch(fu(r)){case 1:var a=Zd;break;case 4:a=em;break;default:a=El}n=a.bind(null,r,n,e),a=void 0,!Ao||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(a=!0),t?a!==void 0?e.addEventListener(r,n,{capture:!0,passive:a}):e.addEventListener(r,n,!0):a!==void 0?e.addEventListener(r,n,{passive:a}):e.addEventListener(r,n,!1)}function Wa(e,r,n,t,a){var o=t;if(!(r&1)&&!(r&2)&&t!==null)e:for(;;){if(t===null)return;var l=t.tag;if(l===3||l===4){var i=t.stateNode.containerInfo;if(i===a||i.nodeType===8&&i.parentNode===a)break;if(l===4)for(l=t.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===a||s.nodeType===8&&s.parentNode===a))return;l=l.return}for(;i!==null;){if(l=zr(i),l===null)return;if(s=l.tag,s===5||s===6){t=o=l;continue e}i=i.parentNode}}t=t.return}eu(function(){var u=o,h=hl(n),d=[];e:{var y=Fu.get(e);if(y!==void 0){var g=Ol,S=e;switch(e){case"keypress":if(qt(n)===0)break e;case"keydown":case"keyup":g=ym;break;case"focusin":S="focus",g=Va;break;case"focusout":S="blur",g=Va;break;case"beforeblur":case"afterblur":g=Va;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ei;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=tm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=gm;break;case Au:case zu:case Pu:g=lm;break;case ku:g=Em;break;case"scroll":g=rm;break;case"wheel":g=Om;break;case"copy":case"cut":case"paste":g=sm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Oi}var E=(r&4)!==0,T=!E&&e==="scroll",p=E?y!==null?y+"Capture":null:y;E=[];for(var c=u,m;c!==null;){m=c;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,p!==null&&(v=Vn(c,p),v!=null&&E.push(Wn(c,v,m)))),T)break;c=c.return}0<E.length&&(y=new g(y,S,null,n,h),d.push({event:y,listeners:E}))}}if(!(r&7)){e:{if(y=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",y&&n!==Ro&&(S=n.relatedTarget||n.fromElement)&&(zr(S)||S[$e]))break e;if((g||y)&&(y=h.window===h?h:(y=h.ownerDocument)?y.defaultView||y.parentWindow:window,g?(S=n.relatedTarget||n.toElement,g=u,S=S?zr(S):null,S!==null&&(T=Mr(S),S!==T||S.tag!==5&&S.tag!==6)&&(S=null)):(g=null,S=u),g!==S)){if(E=Ei,v="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(E=Oi,v="onPointerLeave",p="onPointerEnter",c="pointer"),T=g==null?y:Qr(g),m=S==null?y:Qr(S),y=new E(v,c+"leave",g,n,h),y.target=T,y.relatedTarget=m,v=null,zr(h)===u&&(E=new E(p,c+"enter",S,n,h),E.target=m,E.relatedTarget=T,v=E),T=v,g&&S)r:{for(E=g,p=S,c=0,m=E;m;m=_r(m))c++;for(m=0,v=p;v;v=_r(v))m++;for(;0<c-m;)E=_r(E),c--;for(;0<m-c;)p=_r(p),m--;for(;c--;){if(E===p||p!==null&&E===p.alternate)break r;E=_r(E),p=_r(p)}E=null}else E=null;g!==null&&Ni(d,y,g,E,!1),S!==null&&T!==null&&Ni(d,T,S,E,!0)}}e:{if(y=u?Qr(u):window,g=y.nodeName&&y.nodeName.toLowerCase(),g==="select"||g==="input"&&y.type==="file")var R=Fm;else if(Ai(y))if(Eu)R=Nm;else{R=xm;var z=wm}else(g=y.nodeName)&&g.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(R=Dm);if(R&&(R=R(e,u))){Su(d,R,n,h);break e}z&&z(e,y,u),e==="focusout"&&(z=y._wrapperState)&&z.controlled&&y.type==="number"&&go(y,"number",y.value)}switch(z=u?Qr(u):window,e){case"focusin":(Ai(z)||z.contentEditable==="true")&&(Ir=z,wo=u,qn=null);break;case"focusout":qn=wo=Ir=null;break;case"mousedown":xo=!0;break;case"contextmenu":case"mouseup":case"dragend":xo=!1,wi(d,n,h);break;case"selectionchange":if(qm)break;case"keydown":case"keyup":wi(d,n,h)}var k;if(Tl)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else Vr?vu(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(hu&&n.locale!=="ko"&&(Vr||F!=="onCompositionStart"?F==="onCompositionEnd"&&Vr&&(k=yu()):(ar=h,Cl="value"in ar?ar.value:ar.textContent,Vr=!0)),z=Kt(u,F),0<z.length&&(F=new Ci(F,e,null,n,h),d.push({event:F,listeners:z}),k?F.data=k:(k=gu(n),k!==null&&(F.data=k)))),(k=Tm?Am(e,n):zm(e,n))&&(u=Kt(u,"onBeforeInput"),0<u.length&&(h=new Ci("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=k))}wu(d,r)})}function Wn(e,r,n){return{instance:e,listener:r,currentTarget:n}}function Kt(e,r){for(var n=r+"Capture",t=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Vn(e,n),o!=null&&t.unshift(Wn(e,o,a)),o=Vn(e,r),o!=null&&t.push(Wn(e,o,a))),e=e.return}return t}function _r(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ni(e,r,n,t,a){for(var o=r._reactName,l=[];n!==null&&n!==t;){var i=n,s=i.alternate,u=i.stateNode;if(s!==null&&s===t)break;i.tag===5&&u!==null&&(i=u,a?(s=Vn(n,o),s!=null&&l.unshift(Wn(n,s,i))):a||(s=Vn(n,o),s!=null&&l.push(Wn(n,s,i)))),n=n.return}l.length!==0&&e.push({event:r,listeners:l})}var Ym=/\r\n?/g,Hm=/\u0000|\uFFFD/g;function ji(e){return(typeof e=="string"?e:""+e).replace(Ym,`
`).replace(Hm,"")}function At(e,r,n){if(r=ji(r),ji(e)!==r&&n)throw Error(C(425))}function Xt(){}var Do=null,No=null;function jo(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Lo=typeof setTimeout=="function"?setTimeout:void 0,Gm=typeof clearTimeout=="function"?clearTimeout:void 0,Li=typeof Promise=="function"?Promise:void 0,Vm=typeof queueMicrotask=="function"?queueMicrotask:typeof Li<"u"?function(e){return Li.resolve(null).then(e).catch(Im)}:Lo;function Im(e){setTimeout(function(){throw e})}function Ka(e,r){var n=r,t=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(t===0){e.removeChild(a),Qn(r);return}t--}else n!=="$"&&n!=="$?"&&n!=="$!"||t++;n=a}while(n);Qn(r)}function cr(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function qi(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),be="__reactFiber$"+yn,Kn="__reactProps$"+yn,$e="__reactContainer$"+yn,qo="__reactEvents$"+yn,Jm="__reactListeners$"+yn,Qm="__reactHandles$"+yn;function zr(e){var r=e[be];if(r)return r;for(var n=e.parentNode;n;){if(r=n[$e]||n[be]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=qi(e);e!==null;){if(n=e[be])return n;e=qi(e)}return r}e=n,n=e.parentNode}return null}function ut(e){return e=e[be]||e[$e],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Ea(e){return e[Kn]||null}var Mo=[],Ur=-1;function Sr(e){return{current:e}}function b(e){0>Ur||(e.current=Mo[Ur],Mo[Ur]=null,Ur--)}function q(e,r){Ur++,Mo[Ur]=e.current,e.current=r}var vr={},le=Sr(vr),pe=Sr(!1),xr=vr;function ln(e,r){var n=e.type.contextTypes;if(!n)return vr;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===r)return t.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in n)a[o]=r[o];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),a}function fe(e){return e=e.childContextTypes,e!=null}function Zt(){b(pe),b(le)}function Mi(e,r,n){if(le.current!==vr)throw Error(C(168));q(le,r),q(pe,n)}function Du(e,r,n){var t=e.stateNode;if(r=r.childContextTypes,typeof t.getChildContext!="function")return n;t=t.getChildContext();for(var a in t)if(!(a in r))throw Error(C(108,wd(e)||"Unknown",a));return G({},n,t)}function ea(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vr,xr=le.current,q(le,e),q(pe,pe.current),!0}function bi(e,r,n){var t=e.stateNode;if(!t)throw Error(C(169));n?(e=Du(e,r,xr),t.__reactInternalMemoizedMergedChildContext=e,b(pe),b(le),q(le,e)):b(pe),q(pe,n)}var Ve=null,Ca=!1,Xa=!1;function Nu(e){Ve===null?Ve=[e]:Ve.push(e)}function Um(e){Ca=!0,Nu(e)}function Er(){if(!Xa&&Ve!==null){Xa=!0;var e=0,r=L;try{var n=Ve;for(L=1;e<n.length;e++){var t=n[e];do t=t(!0);while(t!==null)}Ve=null,Ca=!1}catch(a){throw Ve!==null&&(Ve=Ve.slice(e+1)),au(vl,Er),a}finally{L=r,Xa=!1}}return null}var Br=[],$r=0,ra=null,na=0,Oe=[],Re=0,Dr=null,Ie=1,Je="";function Tr(e,r){Br[$r++]=na,Br[$r++]=ra,ra=e,na=r}function ju(e,r,n){Oe[Re++]=Ie,Oe[Re++]=Je,Oe[Re++]=Dr,Dr=e;var t=Ie;e=Je;var a=32-Ne(t)-1;t&=~(1<<a),n+=1;var o=32-Ne(r)+a;if(30<o){var l=a-a%5;o=(t&(1<<l)-1).toString(32),t>>=l,a-=l,Ie=1<<32-Ne(r)+a|n<<a|t,Je=o+e}else Ie=1<<o|n<<a|t,Je=e}function zl(e){e.return!==null&&(Tr(e,1),ju(e,1,0))}function Pl(e){for(;e===ra;)ra=Br[--$r],Br[$r]=null,na=Br[--$r],Br[$r]=null;for(;e===Dr;)Dr=Oe[--Re],Oe[Re]=null,Je=Oe[--Re],Oe[Re]=null,Ie=Oe[--Re],Oe[Re]=null}var ge=null,ve=null,_=!1,De=null;function Lu(e,r){var n=Te(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function _i(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,ge=e,ve=cr(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,ge=e,ve=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=Dr!==null?{id:Ie,overflow:Je}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=Te(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,ge=e,ve=null,!0):!1;default:return!1}}function bo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _o(e){if(_){var r=ve;if(r){var n=r;if(!_i(e,r)){if(bo(e))throw Error(C(418));r=cr(n.nextSibling);var t=ge;r&&_i(e,r)?Lu(t,n):(e.flags=e.flags&-4097|2,_=!1,ge=e)}}else{if(bo(e))throw Error(C(418));e.flags=e.flags&-4097|2,_=!1,ge=e}}}function Yi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function zt(e){if(e!==ge)return!1;if(!_)return Yi(e),_=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!jo(e.type,e.memoizedProps)),r&&(r=ve)){if(bo(e))throw qu(),Error(C(418));for(;r;)Lu(e,r),r=cr(r.nextSibling)}if(Yi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){ve=cr(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}ve=null}}else ve=ge?cr(e.stateNode.nextSibling):null;return!0}function qu(){for(var e=ve;e;)e=cr(e.nextSibling)}function sn(){ve=ge=null,_=!1}function kl(e){De===null?De=[e]:De.push(e)}var Bm=Xe.ReactCurrentBatchConfig;function Tn(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var t=n.stateNode}if(!t)throw Error(C(147,e));var a=t,o=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===o?r.ref:(r=function(l){var i=a.refs;l===null?delete i[o]:i[o]=l},r._stringRef=o,r)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Pt(e,r){throw e=Object.prototype.toString.call(r),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Hi(e){var r=e._init;return r(e._payload)}function Mu(e){function r(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)r(p,c),c=c.sibling;return null}function t(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function a(p,c){return p=fr(p,c),p.index=0,p.sibling=null,p}function o(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function i(p,c,m,v){return c===null||c.tag!==6?(c=oo(m,p.mode,v),c.return=p,c):(c=a(c,m),c.return=p,c)}function s(p,c,m,v){var R=m.type;return R===Gr?h(p,c,m.props.children,v,m.key):c!==null&&(c.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===er&&Hi(R)===c.type)?(v=a(c,m.props),v.ref=Tn(p,c,m),v.return=p,v):(v=Vt(m.type,m.key,m.props,null,p.mode,v),v.ref=Tn(p,c,m),v.return=p,v)}function u(p,c,m,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=lo(m,p.mode,v),c.return=p,c):(c=a(c,m.children||[]),c.return=p,c)}function h(p,c,m,v,R){return c===null||c.tag!==7?(c=wr(m,p.mode,v,R),c.return=p,c):(c=a(c,m),c.return=p,c)}function d(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=oo(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ht:return m=Vt(c.type,c.key,c.props,null,p.mode,m),m.ref=Tn(p,null,c),m.return=p,m;case Hr:return c=lo(c,p.mode,m),c.return=p,c;case er:var v=c._init;return d(p,v(c._payload),m)}if(kn(c)||Sn(c))return c=wr(c,p.mode,m,null),c.return=p,c;Pt(p,c)}return null}function y(p,c,m,v){var R=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return R!==null?null:i(p,c,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ht:return m.key===R?s(p,c,m,v):null;case Hr:return m.key===R?u(p,c,m,v):null;case er:return R=m._init,y(p,c,R(m._payload),v)}if(kn(m)||Sn(m))return R!==null?null:h(p,c,m,v,null);Pt(p,m)}return null}function g(p,c,m,v,R){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(m)||null,i(c,p,""+v,R);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ht:return p=p.get(v.key===null?m:v.key)||null,s(c,p,v,R);case Hr:return p=p.get(v.key===null?m:v.key)||null,u(c,p,v,R);case er:var z=v._init;return g(p,c,m,z(v._payload),R)}if(kn(v)||Sn(v))return p=p.get(m)||null,h(c,p,v,R,null);Pt(c,v)}return null}function S(p,c,m,v){for(var R=null,z=null,k=c,F=c=0,I=null;k!==null&&F<m.length;F++){k.index>F?(I=k,k=null):I=k.sibling;var N=y(p,k,m[F],v);if(N===null){k===null&&(k=I);break}e&&k&&N.alternate===null&&r(p,k),c=o(N,c,F),z===null?R=N:z.sibling=N,z=N,k=I}if(F===m.length)return n(p,k),_&&Tr(p,F),R;if(k===null){for(;F<m.length;F++)k=d(p,m[F],v),k!==null&&(c=o(k,c,F),z===null?R=k:z.sibling=k,z=k);return _&&Tr(p,F),R}for(k=t(p,k);F<m.length;F++)I=g(k,p,F,m[F],v),I!==null&&(e&&I.alternate!==null&&k.delete(I.key===null?F:I.key),c=o(I,c,F),z===null?R=I:z.sibling=I,z=I);return e&&k.forEach(function(ke){return r(p,ke)}),_&&Tr(p,F),R}function E(p,c,m,v){var R=Sn(m);if(typeof R!="function")throw Error(C(150));if(m=R.call(m),m==null)throw Error(C(151));for(var z=R=null,k=c,F=c=0,I=null,N=m.next();k!==null&&!N.done;F++,N=m.next()){k.index>F?(I=k,k=null):I=k.sibling;var ke=y(p,k,N.value,v);if(ke===null){k===null&&(k=I);break}e&&k&&ke.alternate===null&&r(p,k),c=o(ke,c,F),z===null?R=ke:z.sibling=ke,z=ke,k=I}if(N.done)return n(p,k),_&&Tr(p,F),R;if(k===null){for(;!N.done;F++,N=m.next())N=d(p,N.value,v),N!==null&&(c=o(N,c,F),z===null?R=N:z.sibling=N,z=N);return _&&Tr(p,F),R}for(k=t(p,k);!N.done;F++,N=m.next())N=g(k,p,F,N.value,v),N!==null&&(e&&N.alternate!==null&&k.delete(N.key===null?F:N.key),c=o(N,c,F),z===null?R=N:z.sibling=N,z=N);return e&&k.forEach(function(vn){return r(p,vn)}),_&&Tr(p,F),R}function T(p,c,m,v){if(typeof m=="object"&&m!==null&&m.type===Gr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ht:e:{for(var R=m.key,z=c;z!==null;){if(z.key===R){if(R=m.type,R===Gr){if(z.tag===7){n(p,z.sibling),c=a(z,m.props.children),c.return=p,p=c;break e}}else if(z.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===er&&Hi(R)===z.type){n(p,z.sibling),c=a(z,m.props),c.ref=Tn(p,z,m),c.return=p,p=c;break e}n(p,z);break}else r(p,z);z=z.sibling}m.type===Gr?(c=wr(m.props.children,p.mode,v,m.key),c.return=p,p=c):(v=Vt(m.type,m.key,m.props,null,p.mode,v),v.ref=Tn(p,c,m),v.return=p,p=v)}return l(p);case Hr:e:{for(z=m.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=a(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else r(p,c);c=c.sibling}c=lo(m,p.mode,v),c.return=p,p=c}return l(p);case er:return z=m._init,T(p,c,z(m._payload),v)}if(kn(m))return S(p,c,m,v);if(Sn(m))return E(p,c,m,v);Pt(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=a(c,m),c.return=p,p=c):(n(p,c),c=oo(m,p.mode,v),c.return=p,p=c),l(p)):n(p,c)}return T}var un=Mu(!0),bu=Mu(!1),ta=Sr(null),aa=null,Wr=null,Fl=null;function wl(){Fl=Wr=aa=null}function xl(e){var r=ta.current;b(ta),e._currentValue=r}function Yo(e,r,n){for(;e!==null;){var t=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,t!==null&&(t.childLanes|=r)):t!==null&&(t.childLanes&r)!==r&&(t.childLanes|=r),e===n)break;e=e.return}}function tn(e,r){aa=e,Fl=Wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(me=!0),e.firstContext=null)}function ze(e){var r=e._currentValue;if(Fl!==e)if(e={context:e,memoizedValue:r,next:null},Wr===null){if(aa===null)throw Error(C(308));Wr=e,aa.dependencies={lanes:0,firstContext:e}}else Wr=Wr.next=e;return r}var Pr=null;function Dl(e){Pr===null?Pr=[e]:Pr.push(e)}function _u(e,r,n,t){var a=r.interleaved;return a===null?(n.next=n,Dl(r)):(n.next=a.next,a.next=n),r.interleaved=n,We(e,t)}function We(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rr=!1;function Nl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yu(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ue(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function dr(e,r,n){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,j&2){var a=t.pending;return a===null?r.next=r:(r.next=a.next,a.next=r),t.pending=r,We(e,n)}return a=t.interleaved,a===null?(r.next=r,Dl(t)):(r.next=a.next,a.next=r),t.interleaved=r,We(e,n)}function Mt(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var t=r.lanes;t&=e.pendingLanes,n|=t,r.lanes=n,gl(e,n)}}function Gi(e,r){var n=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,n===t)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?a=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?a=o=r:o=o.next=r}else a=o=r;n={baseState:t.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:t.shared,effects:t.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function oa(e,r,n,t){var a=e.updateQueue;rr=!1;var o=a.firstBaseUpdate,l=a.lastBaseUpdate,i=a.shared.pending;if(i!==null){a.shared.pending=null;var s=i,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var h=e.alternate;h!==null&&(h=h.updateQueue,i=h.lastBaseUpdate,i!==l&&(i===null?h.firstBaseUpdate=u:i.next=u,h.lastBaseUpdate=s))}if(o!==null){var d=a.baseState;l=0,h=u=s=null,i=o;do{var y=i.lane,g=i.eventTime;if((t&y)===y){h!==null&&(h=h.next={eventTime:g,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var S=e,E=i;switch(y=r,g=n,E.tag){case 1:if(S=E.payload,typeof S=="function"){d=S.call(g,d,y);break e}d=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=E.payload,y=typeof S=="function"?S.call(g,d,y):S,y==null)break e;d=G({},d,y);break e;case 2:rr=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,y=a.effects,y===null?a.effects=[i]:y.push(i))}else g={eventTime:g,lane:y,tag:i.tag,payload:i.payload,callback:i.callback,next:null},h===null?(u=h=g,s=d):h=h.next=g,l|=y;if(i=i.next,i===null){if(i=a.shared.pending,i===null)break;y=i,i=y.next,y.next=null,a.lastBaseUpdate=y,a.shared.pending=null}}while(!0);if(h===null&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=h,r=a.shared.interleaved,r!==null){a=r;do l|=a.lane,a=a.next;while(a!==r)}else o===null&&(a.shared.lanes=0);jr|=l,e.lanes=l,e.memoizedState=d}}function Vi(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var t=e[r],a=t.callback;if(a!==null){if(t.callback=null,t=n,typeof a!="function")throw Error(C(191,a));a.call(t)}}}var ct={},Ye=Sr(ct),Xn=Sr(ct),Zn=Sr(ct);function kr(e){if(e===ct)throw Error(C(174));return e}function jl(e,r){switch(q(Zn,r),q(Xn,e),q(Ye,ct),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Eo(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Eo(r,e)}b(Ye),q(Ye,r)}function cn(){b(Ye),b(Xn),b(Zn)}function Hu(e){kr(Zn.current);var r=kr(Ye.current),n=Eo(r,e.type);r!==n&&(q(Xn,e),q(Ye,n))}function Ll(e){Xn.current===e&&(b(Ye),b(Xn))}var Y=Sr(0);function la(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Za=[];function ql(){for(var e=0;e<Za.length;e++)Za[e]._workInProgressVersionPrimary=null;Za.length=0}var bt=Xe.ReactCurrentDispatcher,eo=Xe.ReactCurrentBatchConfig,Nr=0,H=null,$=null,X=null,ia=!1,Mn=!1,et=0,$m=0;function te(){throw Error(C(321))}function Ml(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!Le(e[n],r[n]))return!1;return!0}function bl(e,r,n,t,a,o){if(Nr=o,H=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,bt.current=e===null||e.memoizedState===null?Zm:ep,e=n(t,a),Mn){o=0;do{if(Mn=!1,et=0,25<=o)throw Error(C(301));o+=1,X=$=null,r.updateQueue=null,bt.current=rp,e=n(t,a)}while(Mn)}if(bt.current=sa,r=$!==null&&$.next!==null,Nr=0,X=$=H=null,ia=!1,r)throw Error(C(300));return e}function _l(){var e=et!==0;return et=0,e}function Me(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?H.memoizedState=X=e:X=X.next=e,X}function Pe(){if($===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=$.next;var r=X===null?H.memoizedState:X.next;if(r!==null)X=r,$=e;else{if(e===null)throw Error(C(310));$=e,e={memoizedState:$.memoizedState,baseState:$.baseState,baseQueue:$.baseQueue,queue:$.queue,next:null},X===null?H.memoizedState=X=e:X=X.next=e}return X}function rt(e,r){return typeof r=="function"?r(e):r}function ro(e){var r=Pe(),n=r.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var t=$,a=t.baseQueue,o=n.pending;if(o!==null){if(a!==null){var l=a.next;a.next=o.next,o.next=l}t.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,t=t.baseState;var i=l=null,s=null,u=o;do{var h=u.lane;if((Nr&h)===h)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),t=u.hasEagerState?u.eagerState:e(t,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(i=s=d,l=t):s=s.next=d,H.lanes|=h,jr|=h}u=u.next}while(u!==null&&u!==o);s===null?l=t:s.next=i,Le(t,r.memoizedState)||(me=!0),r.memoizedState=t,r.baseState=l,r.baseQueue=s,n.lastRenderedState=t}if(e=n.interleaved,e!==null){a=e;do o=a.lane,H.lanes|=o,jr|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function no(e){var r=Pe(),n=r.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var t=n.dispatch,a=n.pending,o=r.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do o=e(o,l.action),l=l.next;while(l!==a);Le(o,r.memoizedState)||(me=!0),r.memoizedState=o,r.baseQueue===null&&(r.baseState=o),n.lastRenderedState=o}return[o,t]}function Gu(){}function Vu(e,r){var n=H,t=Pe(),a=r(),o=!Le(t.memoizedState,a);if(o&&(t.memoizedState=a,me=!0),t=t.queue,Yl(Qu.bind(null,n,t,e),[e]),t.getSnapshot!==r||o||X!==null&&X.memoizedState.tag&1){if(n.flags|=2048,nt(9,Ju.bind(null,n,t,a,r),void 0,null),Z===null)throw Error(C(349));Nr&30||Iu(n,r,a)}return a}function Iu(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=H.updateQueue,r===null?(r={lastEffect:null,stores:null},H.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function Ju(e,r,n,t){r.value=n,r.getSnapshot=t,Uu(r)&&Bu(e)}function Qu(e,r,n){return n(function(){Uu(r)&&Bu(e)})}function Uu(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!Le(e,n)}catch{return!0}}function Bu(e){var r=We(e,1);r!==null&&je(r,e,1,-1)}function Ii(e){var r=Me();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rt,lastRenderedState:e},r.queue=e,e=e.dispatch=Xm.bind(null,H,e),[r.memoizedState,e]}function nt(e,r,n,t){return e={tag:e,create:r,destroy:n,deps:t,next:null},r=H.updateQueue,r===null?(r={lastEffect:null,stores:null},H.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(t=n.next,n.next=e,e.next=t,r.lastEffect=e)),e}function $u(){return Pe().memoizedState}function _t(e,r,n,t){var a=Me();H.flags|=e,a.memoizedState=nt(1|r,n,void 0,t===void 0?null:t)}function Oa(e,r,n,t){var a=Pe();t=t===void 0?null:t;var o=void 0;if($!==null){var l=$.memoizedState;if(o=l.destroy,t!==null&&Ml(t,l.deps)){a.memoizedState=nt(r,n,o,t);return}}H.flags|=e,a.memoizedState=nt(1|r,n,o,t)}function Ji(e,r){return _t(8390656,8,e,r)}function Yl(e,r){return Oa(2048,8,e,r)}function Wu(e,r){return Oa(4,2,e,r)}function Ku(e,r){return Oa(4,4,e,r)}function Xu(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Zu(e,r,n){return n=n!=null?n.concat([e]):null,Oa(4,4,Xu.bind(null,r,e),n)}function Hl(){}function ec(e,r){var n=Pe();r=r===void 0?null:r;var t=n.memoizedState;return t!==null&&r!==null&&Ml(r,t[1])?t[0]:(n.memoizedState=[e,r],e)}function rc(e,r){var n=Pe();r=r===void 0?null:r;var t=n.memoizedState;return t!==null&&r!==null&&Ml(r,t[1])?t[0]:(e=e(),n.memoizedState=[e,r],e)}function nc(e,r,n){return Nr&21?(Le(n,r)||(n=iu(),H.lanes|=n,jr|=n,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function Wm(e,r){var n=L;L=n!==0&&4>n?n:4,e(!0);var t=eo.transition;eo.transition={};try{e(!1),r()}finally{L=n,eo.transition=t}}function tc(){return Pe().memoizedState}function Km(e,r,n){var t=pr(e);if(n={lane:t,action:n,hasEagerState:!1,eagerState:null,next:null},ac(e))oc(r,n);else if(n=_u(e,r,n,t),n!==null){var a=se();je(n,e,t,a),lc(n,r,t)}}function Xm(e,r,n){var t=pr(e),a={lane:t,action:n,hasEagerState:!1,eagerState:null,next:null};if(ac(e))oc(r,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=r.lastRenderedReducer,o!==null))try{var l=r.lastRenderedState,i=o(l,n);if(a.hasEagerState=!0,a.eagerState=i,Le(i,l)){var s=r.interleaved;s===null?(a.next=a,Dl(r)):(a.next=s.next,s.next=a),r.interleaved=a;return}}catch{}finally{}n=_u(e,r,a,t),n!==null&&(a=se(),je(n,e,t,a),lc(n,r,t))}}function ac(e){var r=e.alternate;return e===H||r!==null&&r===H}function oc(e,r){Mn=ia=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function lc(e,r,n){if(n&4194240){var t=r.lanes;t&=e.pendingLanes,n|=t,r.lanes=n,gl(e,n)}}var sa={readContext:ze,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},Zm={readContext:ze,useCallback:function(e,r){return Me().memoizedState=[e,r===void 0?null:r],e},useContext:ze,useEffect:Ji,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,_t(4194308,4,Xu.bind(null,r,e),n)},useLayoutEffect:function(e,r){return _t(4194308,4,e,r)},useInsertionEffect:function(e,r){return _t(4,2,e,r)},useMemo:function(e,r){var n=Me();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var t=Me();return r=n!==void 0?n(r):r,t.memoizedState=t.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},t.queue=e,e=e.dispatch=Km.bind(null,H,e),[t.memoizedState,e]},useRef:function(e){var r=Me();return e={current:e},r.memoizedState=e},useState:Ii,useDebugValue:Hl,useDeferredValue:function(e){return Me().memoizedState=e},useTransition:function(){var e=Ii(!1),r=e[0];return e=Wm.bind(null,e[1]),Me().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var t=H,a=Me();if(_){if(n===void 0)throw Error(C(407));n=n()}else{if(n=r(),Z===null)throw Error(C(349));Nr&30||Iu(t,r,n)}a.memoizedState=n;var o={value:n,getSnapshot:r};return a.queue=o,Ji(Qu.bind(null,t,o,e),[e]),t.flags|=2048,nt(9,Ju.bind(null,t,o,n,r),void 0,null),n},useId:function(){var e=Me(),r=Z.identifierPrefix;if(_){var n=Je,t=Ie;n=(t&~(1<<32-Ne(t)-1)).toString(32)+n,r=":"+r+"R"+n,n=et++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=$m++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},ep={readContext:ze,useCallback:ec,useContext:ze,useEffect:Yl,useImperativeHandle:Zu,useInsertionEffect:Wu,useLayoutEffect:Ku,useMemo:rc,useReducer:ro,useRef:$u,useState:function(){return ro(rt)},useDebugValue:Hl,useDeferredValue:function(e){var r=Pe();return nc(r,$.memoizedState,e)},useTransition:function(){var e=ro(rt)[0],r=Pe().memoizedState;return[e,r]},useMutableSource:Gu,useSyncExternalStore:Vu,useId:tc,unstable_isNewReconciler:!1},rp={readContext:ze,useCallback:ec,useContext:ze,useEffect:Yl,useImperativeHandle:Zu,useInsertionEffect:Wu,useLayoutEffect:Ku,useMemo:rc,useReducer:no,useRef:$u,useState:function(){return no(rt)},useDebugValue:Hl,useDeferredValue:function(e){var r=Pe();return $===null?r.memoizedState=e:nc(r,$.memoizedState,e)},useTransition:function(){var e=no(rt)[0],r=Pe().memoizedState;return[e,r]},useMutableSource:Gu,useSyncExternalStore:Vu,useId:tc,unstable_isNewReconciler:!1};function we(e,r){if(e&&e.defaultProps){r=G({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function Ho(e,r,n,t){r=e.memoizedState,n=n(t,r),n=n==null?r:G({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ra={isMounted:function(e){return(e=e._reactInternals)?Mr(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var t=se(),a=pr(e),o=Ue(t,a);o.payload=r,n!=null&&(o.callback=n),r=dr(e,o,a),r!==null&&(je(r,e,a,t),Mt(r,e,a))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var t=se(),a=pr(e),o=Ue(t,a);o.tag=1,o.payload=r,n!=null&&(o.callback=n),r=dr(e,o,a),r!==null&&(je(r,e,a,t),Mt(r,e,a))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=se(),t=pr(e),a=Ue(n,t);a.tag=2,r!=null&&(a.callback=r),r=dr(e,a,t),r!==null&&(je(r,e,t,n),Mt(r,e,t))}};function Qi(e,r,n,t,a,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,o,l):r.prototype&&r.prototype.isPureReactComponent?!Bn(n,t)||!Bn(a,o):!0}function ic(e,r,n){var t=!1,a=vr,o=r.contextType;return typeof o=="object"&&o!==null?o=ze(o):(a=fe(r)?xr:le.current,t=r.contextTypes,o=(t=t!=null)?ln(e,a):vr),r=new r(n,o),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ra,e.stateNode=r,r._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),r}function Ui(e,r,n,t){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,t),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,t),r.state!==e&&Ra.enqueueReplaceState(r,r.state,null)}function Go(e,r,n,t){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Nl(e);var o=r.contextType;typeof o=="object"&&o!==null?a.context=ze(o):(o=fe(r)?xr:le.current,a.context=ln(e,o)),a.state=e.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(Ho(e,r,o,n),a.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Ra.enqueueReplaceState(a,a.state,null),oa(e,n,a,t),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function dn(e,r){try{var n="",t=r;do n+=Fd(t),t=t.return;while(t);var a=n}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:r,stack:a,digest:null}}function to(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function Vo(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var np=typeof WeakMap=="function"?WeakMap:Map;function sc(e,r,n){n=Ue(-1,n),n.tag=3,n.payload={element:null};var t=r.value;return n.callback=function(){ca||(ca=!0,Zo=t),Vo(e,r)},n}function uc(e,r,n){n=Ue(-1,n),n.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var a=r.value;n.payload=function(){return t(a)},n.callback=function(){Vo(e,r)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Vo(e,r),typeof t!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var l=r.stack;this.componentDidCatch(r.value,{componentStack:l!==null?l:""})}),n}function Bi(e,r,n){var t=e.pingCache;if(t===null){t=e.pingCache=new np;var a=new Set;t.set(r,a)}else a=t.get(r),a===void 0&&(a=new Set,t.set(r,a));a.has(n)||(a.add(n),e=hp.bind(null,e,r,n),r.then(e,e))}function $i(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function Wi(e,r,n,t,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=Ue(-1,1),r.tag=2,dr(n,r,1))),n.lanes|=1),e)}var tp=Xe.ReactCurrentOwner,me=!1;function ie(e,r,n,t){r.child=e===null?bu(r,null,n,t):un(r,e.child,n,t)}function Ki(e,r,n,t,a){n=n.render;var o=r.ref;return tn(r,a),t=bl(e,r,n,t,o,a),n=_l(),e!==null&&!me?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,Ke(e,r,a)):(_&&n&&zl(r),r.flags|=1,ie(e,r,t,a),r.child)}function Xi(e,r,n,t,a){if(e===null){var o=n.type;return typeof o=="function"&&!$l(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=o,cc(e,r,o,t,a)):(e=Vt(n.type,null,t,r,r.mode,a),e.ref=r.ref,e.return=r,r.child=e)}if(o=e.child,!(e.lanes&a)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Bn,n(l,t)&&e.ref===r.ref)return Ke(e,r,a)}return r.flags|=1,e=fr(o,t),e.ref=r.ref,e.return=r,r.child=e}function cc(e,r,n,t,a){if(e!==null){var o=e.memoizedProps;if(Bn(o,t)&&e.ref===r.ref)if(me=!1,r.pendingProps=t=o,(e.lanes&a)!==0)e.flags&131072&&(me=!0);else return r.lanes=e.lanes,Ke(e,r,a)}return Io(e,r,n,t,a)}function dc(e,r,n){var t=r.pendingProps,a=t.children,o=e!==null?e.memoizedState:null;if(t.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Xr,he),he|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,q(Xr,he),he|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=o!==null?o.baseLanes:n,q(Xr,he),he|=t}else o!==null?(t=o.baseLanes|n,r.memoizedState=null):t=n,q(Xr,he),he|=t;return ie(e,r,a,n),r.child}function mc(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function Io(e,r,n,t,a){var o=fe(n)?xr:le.current;return o=ln(r,o),tn(r,a),n=bl(e,r,n,t,o,a),t=_l(),e!==null&&!me?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,Ke(e,r,a)):(_&&t&&zl(r),r.flags|=1,ie(e,r,n,a),r.child)}function Zi(e,r,n,t,a){if(fe(n)){var o=!0;ea(r)}else o=!1;if(tn(r,a),r.stateNode===null)Yt(e,r),ic(r,n,t),Go(r,n,t,a),t=!0;else if(e===null){var l=r.stateNode,i=r.memoizedProps;l.props=i;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=ze(u):(u=fe(n)?xr:le.current,u=ln(r,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==t||s!==u)&&Ui(r,l,t,u),rr=!1;var y=r.memoizedState;l.state=y,oa(r,t,l,a),s=r.memoizedState,i!==t||y!==s||pe.current||rr?(typeof h=="function"&&(Ho(r,n,h,t),s=r.memoizedState),(i=rr||Qi(r,n,i,t,y,s,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(r.flags|=4194308)):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=t,r.memoizedState=s),l.props=t,l.state=s,l.context=u,t=i):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),t=!1)}else{l=r.stateNode,Yu(e,r),i=r.memoizedProps,u=r.type===r.elementType?i:we(r.type,i),l.props=u,d=r.pendingProps,y=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=ze(s):(s=fe(n)?xr:le.current,s=ln(r,s));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==d||y!==s)&&Ui(r,l,t,s),rr=!1,y=r.memoizedState,l.state=y,oa(r,t,l,a);var S=r.memoizedState;i!==d||y!==S||pe.current||rr?(typeof g=="function"&&(Ho(r,n,g,t),S=r.memoizedState),(u=rr||Qi(r,n,u,t,y,S,s)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(t,S,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(t,S,s)),typeof l.componentDidUpdate=="function"&&(r.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(r.flags|=1024),r.memoizedProps=t,r.memoizedState=S),l.props=t,l.state=S,l.context=s,t=u):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(r.flags|=1024),t=!1)}return Jo(e,r,n,t,o,a)}function Jo(e,r,n,t,a,o){mc(e,r);var l=(r.flags&128)!==0;if(!t&&!l)return a&&bi(r,n,!1),Ke(e,r,o);t=r.stateNode,tp.current=r;var i=l&&typeof n.getDerivedStateFromError!="function"?null:t.render();return r.flags|=1,e!==null&&l?(r.child=un(r,e.child,null,o),r.child=un(r,null,i,o)):ie(e,r,i,o),r.memoizedState=t.state,a&&bi(r,n,!0),r.child}function pc(e){var r=e.stateNode;r.pendingContext?Mi(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Mi(e,r.context,!1),jl(e,r.containerInfo)}function es(e,r,n,t,a){return sn(),kl(a),r.flags|=256,ie(e,r,n,t),r.child}var Qo={dehydrated:null,treeContext:null,retryLane:0};function Uo(e){return{baseLanes:e,cachePool:null,transitions:null}}function fc(e,r,n){var t=r.pendingProps,a=Y.current,o=!1,l=(r.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(a&2)!==0),i?(o=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),q(Y,a&1),e===null)return _o(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(l=t.children,e=t.fallback,o?(t=r.mode,o=r.child,l={mode:"hidden",children:l},!(t&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=za(l,t,0,null),e=wr(e,t,n,null),o.return=r,e.return=r,o.sibling=e,r.child=o,r.child.memoizedState=Uo(n),r.memoizedState=Qo,e):Gl(r,l));if(a=e.memoizedState,a!==null&&(i=a.dehydrated,i!==null))return ap(e,r,l,t,i,a,n);if(o){o=t.fallback,l=r.mode,a=e.child,i=a.sibling;var s={mode:"hidden",children:t.children};return!(l&1)&&r.child!==a?(t=r.child,t.childLanes=0,t.pendingProps=s,r.deletions=null):(t=fr(a,s),t.subtreeFlags=a.subtreeFlags&14680064),i!==null?o=fr(i,o):(o=wr(o,l,n,null),o.flags|=2),o.return=r,t.return=r,t.sibling=o,r.child=t,t=o,o=r.child,l=e.child.memoizedState,l=l===null?Uo(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,r.memoizedState=Qo,t}return o=e.child,e=o.sibling,t=fr(o,{mode:"visible",children:t.children}),!(r.mode&1)&&(t.lanes=n),t.return=r,t.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=t,r.memoizedState=null,t}function Gl(e,r){return r=za({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function kt(e,r,n,t){return t!==null&&kl(t),un(r,e.child,null,n),e=Gl(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function ap(e,r,n,t,a,o,l){if(n)return r.flags&256?(r.flags&=-257,t=to(Error(C(422))),kt(e,r,l,t)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(o=t.fallback,a=r.mode,t=za({mode:"visible",children:t.children},a,0,null),o=wr(o,a,l,null),o.flags|=2,t.return=r,o.return=r,t.sibling=o,r.child=t,r.mode&1&&un(r,e.child,null,l),r.child.memoizedState=Uo(l),r.memoizedState=Qo,o);if(!(r.mode&1))return kt(e,r,l,null);if(a.data==="$!"){if(t=a.nextSibling&&a.nextSibling.dataset,t)var i=t.dgst;return t=i,o=Error(C(419)),t=to(o,t,void 0),kt(e,r,l,t)}if(i=(l&e.childLanes)!==0,me||i){if(t=Z,t!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(t.suspendedLanes|l)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,We(e,a),je(t,e,a,-1))}return Bl(),t=to(Error(C(421))),kt(e,r,l,t)}return a.data==="$?"?(r.flags|=128,r.child=e.child,r=vp.bind(null,e),a._reactRetry=r,null):(e=o.treeContext,ve=cr(a.nextSibling),ge=r,_=!0,De=null,e!==null&&(Oe[Re++]=Ie,Oe[Re++]=Je,Oe[Re++]=Dr,Ie=e.id,Je=e.overflow,Dr=r),r=Gl(r,t.children),r.flags|=4096,r)}function rs(e,r,n){e.lanes|=r;var t=e.alternate;t!==null&&(t.lanes|=r),Yo(e.return,r,n)}function ao(e,r,n,t,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:t,tail:n,tailMode:a}:(o.isBackwards=r,o.rendering=null,o.renderingStartTime=0,o.last=t,o.tail=n,o.tailMode=a)}function yc(e,r,n){var t=r.pendingProps,a=t.revealOrder,o=t.tail;if(ie(e,r,t.children,n),t=Y.current,t&2)t=t&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rs(e,n,r);else if(e.tag===19)rs(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(q(Y,t),!(r.mode&1))r.memoizedState=null;else switch(a){case"forwards":for(n=r.child,a=null;n!==null;)e=n.alternate,e!==null&&la(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=r.child,r.child=null):(a=n.sibling,n.sibling=null),ao(r,!1,a,n,o);break;case"backwards":for(n=null,a=r.child,r.child=null;a!==null;){if(e=a.alternate,e!==null&&la(e)===null){r.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ao(r,!0,n,null,o);break;case"together":ao(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Yt(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Ke(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),jr|=r.lanes,!(n&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(C(153));if(r.child!==null){for(e=r.child,n=fr(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=fr(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function op(e,r,n){switch(r.tag){case 3:pc(r),sn();break;case 5:Hu(r);break;case 1:fe(r.type)&&ea(r);break;case 4:jl(r,r.stateNode.containerInfo);break;case 10:var t=r.type._context,a=r.memoizedProps.value;q(ta,t._currentValue),t._currentValue=a;break;case 13:if(t=r.memoizedState,t!==null)return t.dehydrated!==null?(q(Y,Y.current&1),r.flags|=128,null):n&r.child.childLanes?fc(e,r,n):(q(Y,Y.current&1),e=Ke(e,r,n),e!==null?e.sibling:null);q(Y,Y.current&1);break;case 19:if(t=(n&r.childLanes)!==0,e.flags&128){if(t)return yc(e,r,n);r.flags|=128}if(a=r.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),q(Y,Y.current),t)break;return null;case 22:case 23:return r.lanes=0,dc(e,r,n)}return Ke(e,r,n)}var hc,Bo,vc,gc;hc=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bo=function(){};vc=function(e,r,n,t){var a=e.memoizedProps;if(a!==t){e=r.stateNode,kr(Ye.current);var o=null;switch(n){case"input":a=ho(e,a),t=ho(e,t),o=[];break;case"select":a=G({},a,{value:void 0}),t=G({},t,{value:void 0}),o=[];break;case"textarea":a=So(e,a),t=So(e,t),o=[];break;default:typeof a.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=Xt)}Co(n,t);var l;n=null;for(u in a)if(!t.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var i=a[u];for(l in i)i.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in t){var s=t[u];if(i=a!=null?a[u]:void 0,t.hasOwnProperty(u)&&s!==i&&(s!=null||i!=null))if(u==="style")if(i){for(l in i)!i.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&i[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,i=i?i.__html:void 0,s!=null&&i!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hn.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&M("scroll",e),o||i===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(r.updateQueue=u)&&(r.flags|=4)}};gc=function(e,r,n,t){n!==t&&(r.flags|=4)};function An(e,r){if(!_)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function ae(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,t=0;if(r)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,t|=a.subtreeFlags&14680064,t|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,t|=a.subtreeFlags,t|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=t,e.childLanes=n,r}function lp(e,r,n){var t=r.pendingProps;switch(Pl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(r),null;case 1:return fe(r.type)&&Zt(),ae(r),null;case 3:return t=r.stateNode,cn(),b(pe),b(le),ql(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(zt(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,De!==null&&(nl(De),De=null))),Bo(e,r),ae(r),null;case 5:Ll(r);var a=kr(Zn.current);if(n=r.type,e!==null&&r.stateNode!=null)vc(e,r,n,t,a),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!t){if(r.stateNode===null)throw Error(C(166));return ae(r),null}if(e=kr(Ye.current),zt(r)){t=r.stateNode,n=r.type;var o=r.memoizedProps;switch(t[be]=r,t[Kn]=o,e=(r.mode&1)!==0,n){case"dialog":M("cancel",t),M("close",t);break;case"iframe":case"object":case"embed":M("load",t);break;case"video":case"audio":for(a=0;a<wn.length;a++)M(wn[a],t);break;case"source":M("error",t);break;case"img":case"image":case"link":M("error",t),M("load",t);break;case"details":M("toggle",t);break;case"input":ci(t,o),M("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!o.multiple},M("invalid",t);break;case"textarea":mi(t,o),M("invalid",t)}Co(n,o),a=null;for(var l in o)if(o.hasOwnProperty(l)){var i=o[l];l==="children"?typeof i=="string"?t.textContent!==i&&(o.suppressHydrationWarning!==!0&&At(t.textContent,i,e),a=["children",i]):typeof i=="number"&&t.textContent!==""+i&&(o.suppressHydrationWarning!==!0&&At(t.textContent,i,e),a=["children",""+i]):Hn.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&M("scroll",t)}switch(n){case"input":vt(t),di(t,o,!0);break;case"textarea":vt(t),pi(t);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(t.onclick=Xt)}t=a,r.updateQueue=t,t!==null&&(r.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=l.createElement(n,{is:t.is}):(e=l.createElement(n),n==="select"&&(l=e,t.multiple?l.multiple=!0:t.size&&(l.size=t.size))):e=l.createElementNS(e,n),e[be]=r,e[Kn]=t,hc(e,r,!1,!1),r.stateNode=e;e:{switch(l=Oo(n,t),n){case"dialog":M("cancel",e),M("close",e),a=t;break;case"iframe":case"object":case"embed":M("load",e),a=t;break;case"video":case"audio":for(a=0;a<wn.length;a++)M(wn[a],e);a=t;break;case"source":M("error",e),a=t;break;case"img":case"image":case"link":M("error",e),M("load",e),a=t;break;case"details":M("toggle",e),a=t;break;case"input":ci(e,t),a=ho(e,t),M("invalid",e);break;case"option":a=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},a=G({},t,{value:void 0}),M("invalid",e);break;case"textarea":mi(e,t),a=So(e,t),M("invalid",e);break;default:a=t}Co(n,a),i=a;for(o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="style"?$s(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Us(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Gn(e,s):typeof s=="number"&&Gn(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Hn.hasOwnProperty(o)?s!=null&&o==="onScroll"&&M("scroll",e):s!=null&&ml(e,o,s,l))}switch(n){case"input":vt(e),di(e,t,!1);break;case"textarea":vt(e),pi(e);break;case"option":t.value!=null&&e.setAttribute("value",""+hr(t.value));break;case"select":e.multiple=!!t.multiple,o=t.value,o!=null?Zr(e,!!t.multiple,o,!1):t.defaultValue!=null&&Zr(e,!!t.multiple,t.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Xt)}switch(n){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return ae(r),null;case 6:if(e&&r.stateNode!=null)gc(e,r,e.memoizedProps,t);else{if(typeof t!="string"&&r.stateNode===null)throw Error(C(166));if(n=kr(Zn.current),kr(Ye.current),zt(r)){if(t=r.stateNode,n=r.memoizedProps,t[be]=r,(o=t.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:At(t.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&At(t.nodeValue,n,(e.mode&1)!==0)}o&&(r.flags|=4)}else t=(n.nodeType===9?n:n.ownerDocument).createTextNode(t),t[be]=r,r.stateNode=t}return ae(r),null;case 13:if(b(Y),t=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(_&&ve!==null&&r.mode&1&&!(r.flags&128))qu(),sn(),r.flags|=98560,o=!1;else if(o=zt(r),t!==null&&t.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=r.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[be]=r}else sn(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;ae(r),o=!1}else De!==null&&(nl(De),De=null),o=!0;if(!o)return r.flags&65536?r:null}return r.flags&128?(r.lanes=n,r):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(r.child.flags|=8192,r.mode&1&&(e===null||Y.current&1?W===0&&(W=3):Bl())),r.updateQueue!==null&&(r.flags|=4),ae(r),null);case 4:return cn(),Bo(e,r),e===null&&$n(r.stateNode.containerInfo),ae(r),null;case 10:return xl(r.type._context),ae(r),null;case 17:return fe(r.type)&&Zt(),ae(r),null;case 19:if(b(Y),o=r.memoizedState,o===null)return ae(r),null;if(t=(r.flags&128)!==0,l=o.rendering,l===null)if(t)An(o,!1);else{if(W!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(l=la(e),l!==null){for(r.flags|=128,An(o,!1),t=l.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),r.subtreeFlags=0,t=n,n=r.child;n!==null;)o=n,e=t,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(Y,Y.current&1|2),r.child}e=e.sibling}o.tail!==null&&Q()>mn&&(r.flags|=128,t=!0,An(o,!1),r.lanes=4194304)}else{if(!t)if(e=la(l),e!==null){if(r.flags|=128,t=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),An(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!_)return ae(r),null}else 2*Q()-o.renderingStartTime>mn&&n!==1073741824&&(r.flags|=128,t=!0,An(o,!1),r.lanes=4194304);o.isBackwards?(l.sibling=r.child,r.child=l):(n=o.last,n!==null?n.sibling=l:r.child=l,o.last=l)}return o.tail!==null?(r=o.tail,o.rendering=r,o.tail=r.sibling,o.renderingStartTime=Q(),r.sibling=null,n=Y.current,q(Y,t?n&1|2:n&1),r):(ae(r),null);case 22:case 23:return Ul(),t=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(r.flags|=8192),t&&r.mode&1?he&1073741824&&(ae(r),r.subtreeFlags&6&&(r.flags|=8192)):ae(r),null;case 24:return null;case 25:return null}throw Error(C(156,r.tag))}function ip(e,r){switch(Pl(r),r.tag){case 1:return fe(r.type)&&Zt(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return cn(),b(pe),b(le),ql(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return Ll(r),null;case 13:if(b(Y),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(C(340));sn()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return b(Y),null;case 4:return cn(),null;case 10:return xl(r.type._context),null;case 22:case 23:return Ul(),null;case 24:return null;default:return null}}var Ft=!1,oe=!1,sp=typeof WeakSet=="function"?WeakSet:Set,A=null;function Kr(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(t){V(e,r,t)}else n.current=null}function $o(e,r,n){try{n()}catch(t){V(e,r,t)}}var ns=!1;function up(e,r){if(Do=$t,e=Ru(),Al(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var t=n.getSelection&&n.getSelection();if(t&&t.rangeCount!==0){n=t.anchorNode;var a=t.anchorOffset,o=t.focusNode;t=t.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,i=-1,s=-1,u=0,h=0,d=e,y=null;r:for(;;){for(var g;d!==n||a!==0&&d.nodeType!==3||(i=l+a),d!==o||t!==0&&d.nodeType!==3||(s=l+t),d.nodeType===3&&(l+=d.nodeValue.length),(g=d.firstChild)!==null;)y=d,d=g;for(;;){if(d===e)break r;if(y===n&&++u===a&&(i=l),y===o&&++h===t&&(s=l),(g=d.nextSibling)!==null)break;d=y,y=d.parentNode}d=g}n=i===-1||s===-1?null:{start:i,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(No={focusedElem:e,selectionRange:n},$t=!1,A=r;A!==null;)if(r=A,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,A=e;else for(;A!==null;){r=A;try{var S=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var E=S.memoizedProps,T=S.memoizedState,p=r.stateNode,c=p.getSnapshotBeforeUpdate(r.elementType===r.type?E:we(r.type,E),T);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=r.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(v){V(r,r.return,v)}if(e=r.sibling,e!==null){e.return=r.return,A=e;break}A=r.return}return S=ns,ns=!1,S}function bn(e,r,n){var t=r.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&$o(r,n,o)}a=a.next}while(a!==t)}}function Ta(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var t=n.create;n.destroy=t()}n=n.next}while(n!==r)}}function Wo(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Sc(e){var r=e.alternate;r!==null&&(e.alternate=null,Sc(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[be],delete r[Kn],delete r[qo],delete r[Jm],delete r[Qm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ec(e){return e.tag===5||e.tag===3||e.tag===4}function ts(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ko(e,r,n){var t=e.tag;if(t===5||t===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=Xt));else if(t!==4&&(e=e.child,e!==null))for(Ko(e,r,n),e=e.sibling;e!==null;)Ko(e,r,n),e=e.sibling}function Xo(e,r,n){var t=e.tag;if(t===5||t===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(Xo(e,r,n),e=e.sibling;e!==null;)Xo(e,r,n),e=e.sibling}var ee=null,xe=!1;function Ze(e,r,n){for(n=n.child;n!==null;)Cc(e,r,n),n=n.sibling}function Cc(e,r,n){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(ha,n)}catch{}switch(n.tag){case 5:oe||Kr(n,r);case 6:var t=ee,a=xe;ee=null,Ze(e,r,n),ee=t,xe=a,ee!==null&&(xe?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(xe?(e=ee,n=n.stateNode,e.nodeType===8?Ka(e.parentNode,n):e.nodeType===1&&Ka(e,n),Qn(e)):Ka(ee,n.stateNode));break;case 4:t=ee,a=xe,ee=n.stateNode.containerInfo,xe=!0,Ze(e,r,n),ee=t,xe=a;break;case 0:case 11:case 14:case 15:if(!oe&&(t=n.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){a=t=t.next;do{var o=a,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&$o(n,r,l),a=a.next}while(a!==t)}Ze(e,r,n);break;case 1:if(!oe&&(Kr(n,r),t=n.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=n.memoizedProps,t.state=n.memoizedState,t.componentWillUnmount()}catch(i){V(n,r,i)}Ze(e,r,n);break;case 21:Ze(e,r,n);break;case 22:n.mode&1?(oe=(t=oe)||n.memoizedState!==null,Ze(e,r,n),oe=t):Ze(e,r,n);break;default:Ze(e,r,n)}}function as(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sp),r.forEach(function(t){var a=gp.bind(null,e,t);n.has(t)||(n.add(t),t.then(a,a))})}}function Fe(e,r){var n=r.deletions;if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];try{var o=e,l=r,i=l;e:for(;i!==null;){switch(i.tag){case 5:ee=i.stateNode,xe=!1;break e;case 3:ee=i.stateNode.containerInfo,xe=!0;break e;case 4:ee=i.stateNode.containerInfo,xe=!0;break e}i=i.return}if(ee===null)throw Error(C(160));Cc(o,l,a),ee=null,xe=!1;var s=a.alternate;s!==null&&(s.return=null),a.return=null}catch(u){V(a,r,u)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Oc(r,e),r=r.sibling}function Oc(e,r){var n=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fe(r,e),qe(e),t&4){try{bn(3,e,e.return),Ta(3,e)}catch(E){V(e,e.return,E)}try{bn(5,e,e.return)}catch(E){V(e,e.return,E)}}break;case 1:Fe(r,e),qe(e),t&512&&n!==null&&Kr(n,n.return);break;case 5:if(Fe(r,e),qe(e),t&512&&n!==null&&Kr(n,n.return),e.flags&32){var a=e.stateNode;try{Gn(a,"")}catch(E){V(e,e.return,E)}}if(t&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,i=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{i==="input"&&o.type==="radio"&&o.name!=null&&Is(a,o),Oo(i,l);var u=Oo(i,o);for(l=0;l<s.length;l+=2){var h=s[l],d=s[l+1];h==="style"?$s(a,d):h==="dangerouslySetInnerHTML"?Us(a,d):h==="children"?Gn(a,d):ml(a,h,d,u)}switch(i){case"input":vo(a,o);break;case"textarea":Js(a,o);break;case"select":var y=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Zr(a,!!o.multiple,g,!1):y!==!!o.multiple&&(o.defaultValue!=null?Zr(a,!!o.multiple,o.defaultValue,!0):Zr(a,!!o.multiple,o.multiple?[]:"",!1))}a[Kn]=o}catch(E){V(e,e.return,E)}}break;case 6:if(Fe(r,e),qe(e),t&4){if(e.stateNode===null)throw Error(C(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(E){V(e,e.return,E)}}break;case 3:if(Fe(r,e),qe(e),t&4&&n!==null&&n.memoizedState.isDehydrated)try{Qn(r.containerInfo)}catch(E){V(e,e.return,E)}break;case 4:Fe(r,e),qe(e);break;case 13:Fe(r,e),qe(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Jl=Q())),t&4&&as(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(u=oe)||h,Fe(r,e),oe=u):Fe(r,e),qe(e),t&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(A=e,h=e.child;h!==null;){for(d=A=h;A!==null;){switch(y=A,g=y.child,y.tag){case 0:case 11:case 14:case 15:bn(4,y,y.return);break;case 1:Kr(y,y.return);var S=y.stateNode;if(typeof S.componentWillUnmount=="function"){t=y,n=y.return;try{r=t,S.props=r.memoizedProps,S.state=r.memoizedState,S.componentWillUnmount()}catch(E){V(t,n,E)}}break;case 5:Kr(y,y.return);break;case 22:if(y.memoizedState!==null){ls(d);continue}}g!==null?(g.return=y,A=g):ls(d)}h=h.sibling}e:for(h=null,d=e;;){if(d.tag===5){if(h===null){h=d;try{a=d.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(i=d.stateNode,s=d.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,i.style.display=Bs("display",l))}catch(E){V(e,e.return,E)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(E){V(e,e.return,E)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Fe(r,e),qe(e),t&4&&as(e);break;case 21:break;default:Fe(r,e),qe(e)}}function qe(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(Ec(n)){var t=n;break e}n=n.return}throw Error(C(160))}switch(t.tag){case 5:var a=t.stateNode;t.flags&32&&(Gn(a,""),t.flags&=-33);var o=ts(e);Xo(e,o,a);break;case 3:case 4:var l=t.stateNode.containerInfo,i=ts(e);Ko(e,i,l);break;default:throw Error(C(161))}}catch(s){V(e,e.return,s)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function cp(e,r,n){A=e,Rc(e)}function Rc(e,r,n){for(var t=(e.mode&1)!==0;A!==null;){var a=A,o=a.child;if(a.tag===22&&t){var l=a.memoizedState!==null||Ft;if(!l){var i=a.alternate,s=i!==null&&i.memoizedState!==null||oe;i=Ft;var u=oe;if(Ft=l,(oe=s)&&!u)for(A=a;A!==null;)l=A,s=l.child,l.tag===22&&l.memoizedState!==null?is(a):s!==null?(s.return=l,A=s):is(a);for(;o!==null;)A=o,Rc(o),o=o.sibling;A=a,Ft=i,oe=u}os(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,A=o):os(e)}}function os(e){for(;A!==null;){var r=A;if(r.flags&8772){var n=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:oe||Ta(5,r);break;case 1:var t=r.stateNode;if(r.flags&4&&!oe)if(n===null)t.componentDidMount();else{var a=r.elementType===r.type?n.memoizedProps:we(r.type,n.memoizedProps);t.componentDidUpdate(a,n.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var o=r.updateQueue;o!==null&&Vi(r,o,t);break;case 3:var l=r.updateQueue;if(l!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}Vi(r,l,n)}break;case 5:var i=r.stateNode;if(n===null&&r.flags&4){n=i;var s=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var u=r.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Qn(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}oe||r.flags&512&&Wo(r)}catch(y){V(r,r.return,y)}}if(r===e){A=null;break}if(n=r.sibling,n!==null){n.return=r.return,A=n;break}A=r.return}}function ls(e){for(;A!==null;){var r=A;if(r===e){A=null;break}var n=r.sibling;if(n!==null){n.return=r.return,A=n;break}A=r.return}}function is(e){for(;A!==null;){var r=A;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{Ta(4,r)}catch(s){V(r,n,s)}break;case 1:var t=r.stateNode;if(typeof t.componentDidMount=="function"){var a=r.return;try{t.componentDidMount()}catch(s){V(r,a,s)}}var o=r.return;try{Wo(r)}catch(s){V(r,o,s)}break;case 5:var l=r.return;try{Wo(r)}catch(s){V(r,l,s)}}}catch(s){V(r,r.return,s)}if(r===e){A=null;break}var i=r.sibling;if(i!==null){i.return=r.return,A=i;break}A=r.return}}var dp=Math.ceil,ua=Xe.ReactCurrentDispatcher,Vl=Xe.ReactCurrentOwner,Ae=Xe.ReactCurrentBatchConfig,j=0,Z=null,U=null,re=0,he=0,Xr=Sr(0),W=0,tt=null,jr=0,Aa=0,Il=0,_n=null,de=null,Jl=0,mn=1/0,Ge=null,ca=!1,Zo=null,mr=null,wt=!1,or=null,da=0,Yn=0,el=null,Ht=-1,Gt=0;function se(){return j&6?Q():Ht!==-1?Ht:Ht=Q()}function pr(e){return e.mode&1?j&2&&re!==0?re&-re:Bm.transition!==null?(Gt===0&&(Gt=iu()),Gt):(e=L,e!==0||(e=window.event,e=e===void 0?16:fu(e.type)),e):1}function je(e,r,n,t){if(50<Yn)throw Yn=0,el=null,Error(C(185));it(e,n,t),(!(j&2)||e!==Z)&&(e===Z&&(!(j&2)&&(Aa|=n),W===4&&tr(e,re)),ye(e,t),n===1&&j===0&&!(r.mode&1)&&(mn=Q()+500,Ca&&Er()))}function ye(e,r){var n=e.callbackNode;Bd(e,r);var t=Bt(e,e===Z?re:0);if(t===0)n!==null&&hi(n),e.callbackNode=null,e.callbackPriority=0;else if(r=t&-t,e.callbackPriority!==r){if(n!=null&&hi(n),r===1)e.tag===0?Um(ss.bind(null,e)):Nu(ss.bind(null,e)),Vm(function(){!(j&6)&&Er()}),n=null;else{switch(su(t)){case 1:n=vl;break;case 4:n=ou;break;case 16:n=Ut;break;case 536870912:n=lu;break;default:n=Ut}n=xc(n,Tc.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function Tc(e,r){if(Ht=-1,Gt=0,j&6)throw Error(C(327));var n=e.callbackNode;if(an()&&e.callbackNode!==n)return null;var t=Bt(e,e===Z?re:0);if(t===0)return null;if(t&30||t&e.expiredLanes||r)r=ma(e,t);else{r=t;var a=j;j|=2;var o=zc();(Z!==e||re!==r)&&(Ge=null,mn=Q()+500,Fr(e,r));do try{fp();break}catch(i){Ac(e,i)}while(!0);wl(),ua.current=o,j=a,U!==null?r=0:(Z=null,re=0,r=W)}if(r!==0){if(r===2&&(a=Po(e),a!==0&&(t=a,r=rl(e,a))),r===1)throw n=tt,Fr(e,0),tr(e,t),ye(e,Q()),n;if(r===6)tr(e,t);else{if(a=e.current.alternate,!(t&30)&&!mp(a)&&(r=ma(e,t),r===2&&(o=Po(e),o!==0&&(t=o,r=rl(e,o))),r===1))throw n=tt,Fr(e,0),tr(e,t),ye(e,Q()),n;switch(e.finishedWork=a,e.finishedLanes=t,r){case 0:case 1:throw Error(C(345));case 2:Ar(e,de,Ge);break;case 3:if(tr(e,t),(t&130023424)===t&&(r=Jl+500-Q(),10<r)){if(Bt(e,0)!==0)break;if(a=e.suspendedLanes,(a&t)!==t){se(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Lo(Ar.bind(null,e,de,Ge),r);break}Ar(e,de,Ge);break;case 4:if(tr(e,t),(t&4194240)===t)break;for(r=e.eventTimes,a=-1;0<t;){var l=31-Ne(t);o=1<<l,l=r[l],l>a&&(a=l),t&=~o}if(t=a,t=Q()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*dp(t/1960))-t,10<t){e.timeoutHandle=Lo(Ar.bind(null,e,de,Ge),t);break}Ar(e,de,Ge);break;case 5:Ar(e,de,Ge);break;default:throw Error(C(329))}}}return ye(e,Q()),e.callbackNode===n?Tc.bind(null,e):null}function rl(e,r){var n=_n;return e.current.memoizedState.isDehydrated&&(Fr(e,r).flags|=256),e=ma(e,r),e!==2&&(r=de,de=n,r!==null&&nl(r)),e}function nl(e){de===null?de=e:de.push.apply(de,e)}function mp(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var t=0;t<n.length;t++){var a=n[t],o=a.getSnapshot;a=a.value;try{if(!Le(o(),a))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function tr(e,r){for(r&=~Il,r&=~Aa,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-Ne(r),t=1<<n;e[n]=-1,r&=~t}}function ss(e){if(j&6)throw Error(C(327));an();var r=Bt(e,0);if(!(r&1))return ye(e,Q()),null;var n=ma(e,r);if(e.tag!==0&&n===2){var t=Po(e);t!==0&&(r=t,n=rl(e,t))}if(n===1)throw n=tt,Fr(e,0),tr(e,r),ye(e,Q()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Ar(e,de,Ge),ye(e,Q()),null}function Ql(e,r){var n=j;j|=1;try{return e(r)}finally{j=n,j===0&&(mn=Q()+500,Ca&&Er())}}function Lr(e){or!==null&&or.tag===0&&!(j&6)&&an();var r=j;j|=1;var n=Ae.transition,t=L;try{if(Ae.transition=null,L=1,e)return e()}finally{L=t,Ae.transition=n,j=r,!(j&6)&&Er()}}function Ul(){he=Xr.current,b(Xr)}function Fr(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Gm(n)),U!==null)for(n=U.return;n!==null;){var t=n;switch(Pl(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&Zt();break;case 3:cn(),b(pe),b(le),ql();break;case 5:Ll(t);break;case 4:cn();break;case 13:b(Y);break;case 19:b(Y);break;case 10:xl(t.type._context);break;case 22:case 23:Ul()}n=n.return}if(Z=e,U=e=fr(e.current,null),re=he=r,W=0,tt=null,Il=Aa=jr=0,de=_n=null,Pr!==null){for(r=0;r<Pr.length;r++)if(n=Pr[r],t=n.interleaved,t!==null){n.interleaved=null;var a=t.next,o=n.pending;if(o!==null){var l=o.next;o.next=a,t.next=l}n.pending=t}Pr=null}return e}function Ac(e,r){do{var n=U;try{if(wl(),bt.current=sa,ia){for(var t=H.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}ia=!1}if(Nr=0,X=$=H=null,Mn=!1,et=0,Vl.current=null,n===null||n.return===null){W=1,tt=r,U=null;break}e:{var o=e,l=n.return,i=n,s=r;if(r=re,i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,h=i,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var y=h.alternate;y?(h.updateQueue=y.updateQueue,h.memoizedState=y.memoizedState,h.lanes=y.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=$i(l);if(g!==null){g.flags&=-257,Wi(g,l,i,o,r),g.mode&1&&Bi(o,u,r),r=g,s=u;var S=r.updateQueue;if(S===null){var E=new Set;E.add(s),r.updateQueue=E}else S.add(s);break e}else{if(!(r&1)){Bi(o,u,r),Bl();break e}s=Error(C(426))}}else if(_&&i.mode&1){var T=$i(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Wi(T,l,i,o,r),kl(dn(s,i));break e}}o=s=dn(s,i),W!==4&&(W=2),_n===null?_n=[o]:_n.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,r&=-r,o.lanes|=r;var p=sc(o,s,r);Gi(o,p);break e;case 1:i=s;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(mr===null||!mr.has(m)))){o.flags|=65536,r&=-r,o.lanes|=r;var v=uc(o,i,r);Gi(o,v);break e}}o=o.return}while(o!==null)}kc(n)}catch(R){r=R,U===n&&n!==null&&(U=n=n.return);continue}break}while(!0)}function zc(){var e=ua.current;return ua.current=sa,e===null?sa:e}function Bl(){(W===0||W===3||W===2)&&(W=4),Z===null||!(jr&268435455)&&!(Aa&268435455)||tr(Z,re)}function ma(e,r){var n=j;j|=2;var t=zc();(Z!==e||re!==r)&&(Ge=null,Fr(e,r));do try{pp();break}catch(a){Ac(e,a)}while(!0);if(wl(),j=n,ua.current=t,U!==null)throw Error(C(261));return Z=null,re=0,W}function pp(){for(;U!==null;)Pc(U)}function fp(){for(;U!==null&&!_d();)Pc(U)}function Pc(e){var r=wc(e.alternate,e,he);e.memoizedProps=e.pendingProps,r===null?kc(e):U=r,Vl.current=null}function kc(e){var r=e;do{var n=r.alternate;if(e=r.return,r.flags&32768){if(n=ip(n,r),n!==null){n.flags&=32767,U=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{W=6,U=null;return}}else if(n=lp(n,r,he),n!==null){U=n;return}if(r=r.sibling,r!==null){U=r;return}U=r=e}while(r!==null);W===0&&(W=5)}function Ar(e,r,n){var t=L,a=Ae.transition;try{Ae.transition=null,L=1,yp(e,r,n,t)}finally{Ae.transition=a,L=t}return null}function yp(e,r,n,t){do an();while(or!==null);if(j&6)throw Error(C(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if($d(e,o),e===Z&&(U=Z=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wt||(wt=!0,xc(Ut,function(){return an(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ae.transition,Ae.transition=null;var l=L;L=1;var i=j;j|=4,Vl.current=null,up(e,n),Oc(n,e),Lm(No),$t=!!Do,No=Do=null,e.current=n,cp(n),Yd(),j=i,L=l,Ae.transition=o}else e.current=n;if(wt&&(wt=!1,or=e,da=a),o=e.pendingLanes,o===0&&(mr=null),Vd(n.stateNode),ye(e,Q()),r!==null)for(t=e.onRecoverableError,n=0;n<r.length;n++)a=r[n],t(a.value,{componentStack:a.stack,digest:a.digest});if(ca)throw ca=!1,e=Zo,Zo=null,e;return da&1&&e.tag!==0&&an(),o=e.pendingLanes,o&1?e===el?Yn++:(Yn=0,el=e):Yn=0,Er(),null}function an(){if(or!==null){var e=su(da),r=Ae.transition,n=L;try{if(Ae.transition=null,L=16>e?16:e,or===null)var t=!1;else{if(e=or,or=null,da=0,j&6)throw Error(C(331));var a=j;for(j|=4,A=e.current;A!==null;){var o=A,l=o.child;if(A.flags&16){var i=o.deletions;if(i!==null){for(var s=0;s<i.length;s++){var u=i[s];for(A=u;A!==null;){var h=A;switch(h.tag){case 0:case 11:case 15:bn(8,h,o)}var d=h.child;if(d!==null)d.return=h,A=d;else for(;A!==null;){h=A;var y=h.sibling,g=h.return;if(Sc(h),h===u){A=null;break}if(y!==null){y.return=g,A=y;break}A=g}}}var S=o.alternate;if(S!==null){var E=S.child;if(E!==null){S.child=null;do{var T=E.sibling;E.sibling=null,E=T}while(E!==null)}}A=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,A=l;else e:for(;A!==null;){if(o=A,o.flags&2048)switch(o.tag){case 0:case 11:case 15:bn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,A=p;break e}A=o.return}}var c=e.current;for(A=c;A!==null;){l=A;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,A=m;else e:for(l=c;A!==null;){if(i=A,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Ta(9,i)}}catch(R){V(i,i.return,R)}if(i===l){A=null;break e}var v=i.sibling;if(v!==null){v.return=i.return,A=v;break e}A=i.return}}if(j=a,Er(),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(ha,e)}catch{}t=!0}return t}finally{L=n,Ae.transition=r}}return!1}function us(e,r,n){r=dn(n,r),r=sc(e,r,1),e=dr(e,r,1),r=se(),e!==null&&(it(e,1,r),ye(e,r))}function V(e,r,n){if(e.tag===3)us(e,e,n);else for(;r!==null;){if(r.tag===3){us(r,e,n);break}else if(r.tag===1){var t=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(mr===null||!mr.has(t))){e=dn(n,e),e=uc(r,e,1),r=dr(r,e,1),e=se(),r!==null&&(it(r,1,e),ye(r,e));break}}r=r.return}}function hp(e,r,n){var t=e.pingCache;t!==null&&t.delete(r),r=se(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(re&n)===n&&(W===4||W===3&&(re&130023424)===re&&500>Q()-Jl?Fr(e,0):Il|=n),ye(e,r)}function Fc(e,r){r===0&&(e.mode&1?(r=Et,Et<<=1,!(Et&130023424)&&(Et=4194304)):r=1);var n=se();e=We(e,r),e!==null&&(it(e,r,n),ye(e,n))}function vp(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),Fc(e,n)}function gp(e,r){var n=0;switch(e.tag){case 13:var t=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(C(314))}t!==null&&t.delete(r),Fc(e,n)}var wc;wc=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||pe.current)me=!0;else{if(!(e.lanes&n)&&!(r.flags&128))return me=!1,op(e,r,n);me=!!(e.flags&131072)}else me=!1,_&&r.flags&1048576&&ju(r,na,r.index);switch(r.lanes=0,r.tag){case 2:var t=r.type;Yt(e,r),e=r.pendingProps;var a=ln(r,le.current);tn(r,n),a=bl(null,r,t,e,a,n);var o=_l();return r.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,fe(t)?(o=!0,ea(r)):o=!1,r.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Nl(r),a.updater=Ra,r.stateNode=a,a._reactInternals=r,Go(r,t,e,n),r=Jo(null,r,t,!0,o,n)):(r.tag=0,_&&o&&zl(r),ie(null,r,a,n),r=r.child),r;case 16:t=r.elementType;e:{switch(Yt(e,r),e=r.pendingProps,a=t._init,t=a(t._payload),r.type=t,a=r.tag=Ep(t),e=we(t,e),a){case 0:r=Io(null,r,t,e,n);break e;case 1:r=Zi(null,r,t,e,n);break e;case 11:r=Ki(null,r,t,e,n);break e;case 14:r=Xi(null,r,t,we(t.type,e),n);break e}throw Error(C(306,t,""))}return r;case 0:return t=r.type,a=r.pendingProps,a=r.elementType===t?a:we(t,a),Io(e,r,t,a,n);case 1:return t=r.type,a=r.pendingProps,a=r.elementType===t?a:we(t,a),Zi(e,r,t,a,n);case 3:e:{if(pc(r),e===null)throw Error(C(387));t=r.pendingProps,o=r.memoizedState,a=o.element,Yu(e,r),oa(r,t,null,n);var l=r.memoizedState;if(t=l.element,o.isDehydrated)if(o={element:t,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},r.updateQueue.baseState=o,r.memoizedState=o,r.flags&256){a=dn(Error(C(423)),r),r=es(e,r,t,n,a);break e}else if(t!==a){a=dn(Error(C(424)),r),r=es(e,r,t,n,a);break e}else for(ve=cr(r.stateNode.containerInfo.firstChild),ge=r,_=!0,De=null,n=bu(r,null,t,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sn(),t===a){r=Ke(e,r,n);break e}ie(e,r,t,n)}r=r.child}return r;case 5:return Hu(r),e===null&&_o(r),t=r.type,a=r.pendingProps,o=e!==null?e.memoizedProps:null,l=a.children,jo(t,a)?l=null:o!==null&&jo(t,o)&&(r.flags|=32),mc(e,r),ie(e,r,l,n),r.child;case 6:return e===null&&_o(r),null;case 13:return fc(e,r,n);case 4:return jl(r,r.stateNode.containerInfo),t=r.pendingProps,e===null?r.child=un(r,null,t,n):ie(e,r,t,n),r.child;case 11:return t=r.type,a=r.pendingProps,a=r.elementType===t?a:we(t,a),Ki(e,r,t,a,n);case 7:return ie(e,r,r.pendingProps,n),r.child;case 8:return ie(e,r,r.pendingProps.children,n),r.child;case 12:return ie(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(t=r.type._context,a=r.pendingProps,o=r.memoizedProps,l=a.value,q(ta,t._currentValue),t._currentValue=l,o!==null)if(Le(o.value,l)){if(o.children===a.children&&!pe.current){r=Ke(e,r,n);break e}}else for(o=r.child,o!==null&&(o.return=r);o!==null;){var i=o.dependencies;if(i!==null){l=o.child;for(var s=i.firstContext;s!==null;){if(s.context===t){if(o.tag===1){s=Ue(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Yo(o.return,n,r),i.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===r.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(C(341));l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),Yo(l,n,r),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===r){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ie(e,r,a.children,n),r=r.child}return r;case 9:return a=r.type,t=r.pendingProps.children,tn(r,n),a=ze(a),t=t(a),r.flags|=1,ie(e,r,t,n),r.child;case 14:return t=r.type,a=we(t,r.pendingProps),a=we(t.type,a),Xi(e,r,t,a,n);case 15:return cc(e,r,r.type,r.pendingProps,n);case 17:return t=r.type,a=r.pendingProps,a=r.elementType===t?a:we(t,a),Yt(e,r),r.tag=1,fe(t)?(e=!0,ea(r)):e=!1,tn(r,n),ic(r,t,a),Go(r,t,a,n),Jo(null,r,t,!0,e,n);case 19:return yc(e,r,n);case 22:return dc(e,r,n)}throw Error(C(156,r.tag))};function xc(e,r){return au(e,r)}function Sp(e,r,n,t){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(e,r,n,t){return new Sp(e,r,n,t)}function $l(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ep(e){if(typeof e=="function")return $l(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fl)return 11;if(e===yl)return 14}return 2}function fr(e,r){var n=e.alternate;return n===null?(n=Te(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vt(e,r,n,t,a,o){var l=2;if(t=e,typeof e=="function")$l(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Gr:return wr(n.children,a,o,r);case pl:l=8,a|=8;break;case mo:return e=Te(12,n,r,a|2),e.elementType=mo,e.lanes=o,e;case po:return e=Te(13,n,r,a),e.elementType=po,e.lanes=o,e;case fo:return e=Te(19,n,r,a),e.elementType=fo,e.lanes=o,e;case Hs:return za(n,a,o,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _s:l=10;break e;case Ys:l=9;break e;case fl:l=11;break e;case yl:l=14;break e;case er:l=16,t=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return r=Te(l,n,r,a),r.elementType=e,r.type=t,r.lanes=o,r}function wr(e,r,n,t){return e=Te(7,e,t,r),e.lanes=n,e}function za(e,r,n,t){return e=Te(22,e,t,r),e.elementType=Hs,e.lanes=n,e.stateNode={isHidden:!1},e}function oo(e,r,n){return e=Te(6,e,null,r),e.lanes=n,e}function lo(e,r,n){return r=Te(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Cp(e,r,n,t,a){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ya(0),this.expirationTimes=Ya(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ya(0),this.identifierPrefix=t,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Wl(e,r,n,t,a,o,l,i,s){return e=new Cp(e,r,n,i,s),r===1?(r=1,o===!0&&(r|=8)):r=0,o=Te(3,null,null,r),e.current=o,o.stateNode=e,o.memoizedState={element:t,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nl(o),e}function Op(e,r,n){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hr,key:t==null?null:""+t,children:e,containerInfo:r,implementation:n}}function Dc(e){if(!e)return vr;e=e._reactInternals;e:{if(Mr(e)!==e||e.tag!==1)throw Error(C(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(fe(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(fe(n))return Du(e,n,r)}return r}function Nc(e,r,n,t,a,o,l,i,s){return e=Wl(n,t,!0,e,a,o,l,i,s),e.context=Dc(null),n=e.current,t=se(),a=pr(n),o=Ue(t,a),o.callback=r??null,dr(n,o,a),e.current.lanes=a,it(e,a,t),ye(e,t),e}function Pa(e,r,n,t){var a=r.current,o=se(),l=pr(a);return n=Dc(n),r.context===null?r.context=n:r.pendingContext=n,r=Ue(o,l),r.payload={element:e},t=t===void 0?null:t,t!==null&&(r.callback=t),e=dr(a,r,l),e!==null&&(je(e,a,l,o),Mt(e,a,l)),l}function pa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cs(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function Kl(e,r){cs(e,r),(e=e.alternate)&&cs(e,r)}function Rp(){return null}var jc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xl(e){this._internalRoot=e}ka.prototype.render=Xl.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(C(409));Pa(e,r,null,null)};ka.prototype.unmount=Xl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Lr(function(){Pa(null,e,null,null)}),r[$e]=null}};function ka(e){this._internalRoot=e}ka.prototype.unstable_scheduleHydration=function(e){if(e){var r=du();e={blockedOn:null,target:e,priority:r};for(var n=0;n<nr.length&&r!==0&&r<nr[n].priority;n++);nr.splice(n,0,e),n===0&&pu(e)}};function Zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ds(){}function Tp(e,r,n,t,a){if(a){if(typeof t=="function"){var o=t;t=function(){var u=pa(l);o.call(u)}}var l=Nc(r,t,e,0,null,!1,!1,"",ds);return e._reactRootContainer=l,e[$e]=l.current,$n(e.nodeType===8?e.parentNode:e),Lr(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof t=="function"){var i=t;t=function(){var u=pa(s);i.call(u)}}var s=Wl(e,0,!1,null,null,!1,!1,"",ds);return e._reactRootContainer=s,e[$e]=s.current,$n(e.nodeType===8?e.parentNode:e),Lr(function(){Pa(r,s,n,t)}),s}function wa(e,r,n,t,a){var o=n._reactRootContainer;if(o){var l=o;if(typeof a=="function"){var i=a;a=function(){var s=pa(l);i.call(s)}}Pa(r,l,e,a)}else l=Tp(n,r,e,a,t);return pa(l)}uu=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=Fn(r.pendingLanes);n!==0&&(gl(r,n|1),ye(r,Q()),!(j&6)&&(mn=Q()+500,Er()))}break;case 13:Lr(function(){var t=We(e,1);if(t!==null){var a=se();je(t,e,1,a)}}),Kl(e,1)}};Sl=function(e){if(e.tag===13){var r=We(e,134217728);if(r!==null){var n=se();je(r,e,134217728,n)}Kl(e,134217728)}};cu=function(e){if(e.tag===13){var r=pr(e),n=We(e,r);if(n!==null){var t=se();je(n,e,r,t)}Kl(e,r)}};du=function(){return L};mu=function(e,r){var n=L;try{return L=e,r()}finally{L=n}};To=function(e,r,n){switch(r){case"input":if(vo(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var t=n[r];if(t!==e&&t.form===e.form){var a=Ea(t);if(!a)throw Error(C(90));Vs(t),vo(t,a)}}}break;case"textarea":Js(e,n);break;case"select":r=n.value,r!=null&&Zr(e,!!n.multiple,r,!1)}};Xs=Ql;Zs=Lr;var Ap={usingClientEntryPoint:!1,Events:[ut,Qr,Ea,Ws,Ks,Ql]},zn={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zp={bundleType:zn.bundleType,version:zn.version,rendererPackageName:zn.rendererPackageName,rendererConfig:zn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=nu(e),e===null?null:e.stateNode},findFiberByHostInstance:zn.findFiberByHostInstance||Rp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xt=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xt.isDisabled&&xt.supportsFiber)try{ha=xt.inject(zp),_e=xt}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ap;Ee.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zl(r))throw Error(C(200));return Op(e,r,null,n)};Ee.createRoot=function(e,r){if(!Zl(e))throw Error(C(299));var n=!1,t="",a=jc;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(t=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),r=Wl(e,1,!1,null,null,n,!1,t,a),e[$e]=r.current,$n(e.nodeType===8?e.parentNode:e),new Xl(r)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=nu(r),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Lr(e)};Ee.hydrate=function(e,r,n){if(!Fa(r))throw Error(C(200));return wa(null,e,r,!0,n)};Ee.hydrateRoot=function(e,r,n){if(!Zl(e))throw Error(C(405));var t=n!=null&&n.hydratedSources||null,a=!1,o="",l=jc;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),r=Nc(r,null,e,1,n??null,a,!1,o,l),e[$e]=r.current,$n(e),t)for(e=0;e<t.length;e++)n=t[e],a=n._getVersion,a=a(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,a]:r.mutableSourceEagerHydrationData.push(n,a);return new ka(r)};Ee.render=function(e,r,n){if(!Fa(r))throw Error(C(200));return wa(null,e,r,!1,n)};Ee.unmountComponentAtNode=function(e){if(!Fa(e))throw Error(C(40));return e._reactRootContainer?(Lr(function(){wa(null,null,e,!1,function(){e._reactRootContainer=null,e[$e]=null})}),!0):!1};Ee.unstable_batchedUpdates=Ql;Ee.unstable_renderSubtreeIntoContainer=function(e,r,n,t){if(!Fa(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return wa(e,r,n,!1,t)};Ee.version="18.3.1-next-f1338f8080-20240426";function Lc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lc)}catch(e){console.error(e)}}Lc(),Ls.exports=Ee;var Pp=Ls.exports,ms=Pp;uo.createRoot=ms.createRoot,uo.hydrateRoot=ms.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function at(){return at=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},at.apply(this,arguments)}var lr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lr||(lr={}));const ps="popstate";function kp(e){e===void 0&&(e={});function r(t,a){let{pathname:o,search:l,hash:i}=t.location;return tl("",{pathname:o,search:l,hash:i},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(t,a){return typeof a=="string"?a:fa(a)}return wp(r,n,null,e)}function B(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function ei(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Fp(){return Math.random().toString(36).substr(2,8)}function fs(e,r){return{usr:e.state,key:e.key,idx:r}}function tl(e,r,n,t){return n===void 0&&(n=null),at({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof r=="string"?hn(r):r,{state:n,key:r&&r.key||t||Fp()})}function fa(e){let{pathname:r="/",search:n="",hash:t=""}=e;return n&&n!=="?"&&(r+=n.charAt(0)==="?"?n:"?"+n),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function hn(e){let r={};if(e){let n=e.indexOf("#");n>=0&&(r.hash=e.substr(n),e=e.substr(0,n));let t=e.indexOf("?");t>=0&&(r.search=e.substr(t),e=e.substr(0,t)),e&&(r.pathname=e)}return r}function wp(e,r,n,t){t===void 0&&(t={});let{window:a=document.defaultView,v5Compat:o=!1}=t,l=a.history,i=lr.Pop,s=null,u=h();u==null&&(u=0,l.replaceState(at({},l.state,{idx:u}),""));function h(){return(l.state||{idx:null}).idx}function d(){i=lr.Pop;let T=h(),p=T==null?null:T-u;u=T,s&&s({action:i,location:E.location,delta:p})}function y(T,p){i=lr.Push;let c=tl(E.location,T,p);u=h()+1;let m=fs(c,u),v=E.createHref(c);try{l.pushState(m,"",v)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;a.location.assign(v)}o&&s&&s({action:i,location:E.location,delta:1})}function g(T,p){i=lr.Replace;let c=tl(E.location,T,p);u=h();let m=fs(c,u),v=E.createHref(c);l.replaceState(m,"",v),o&&s&&s({action:i,location:E.location,delta:0})}function S(T){let p=a.location.origin!=="null"?a.location.origin:a.location.href,c=typeof T=="string"?T:fa(T);return c=c.replace(/ $/,"%20"),B(p,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,p)}let E={get action(){return i},get location(){return e(a,l)},listen(T){if(s)throw new Error("A history only accepts one active listener");return a.addEventListener(ps,d),s=T,()=>{a.removeEventListener(ps,d),s=null}},createHref(T){return r(a,T)},createURL:S,encodeLocation(T){let p=S(T);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:y,replace:g,go(T){return l.go(T)}};return E}var ys;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ys||(ys={}));function xp(e,r,n){return n===void 0&&(n="/"),Dp(e,r,n)}function Dp(e,r,n,t){let a=typeof r=="string"?hn(r):r,o=ri(a.pathname||"/",n);if(o==null)return null;let l=qc(e);Np(l);let i=null;for(let s=0;i==null&&s<l.length;++s){let u=Jp(o);i=Gp(l[s],u)}return i}function qc(e,r,n,t){r===void 0&&(r=[]),n===void 0&&(n=[]),t===void 0&&(t="");let a=(o,l,i)=>{let s={relativePath:i===void 0?o.path||"":i,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(B(s.relativePath.startsWith(t),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+t+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(t.length));let u=yr([t,s.relativePath]),h=n.concat(s);o.children&&o.children.length>0&&(B(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),qc(o.children,r,h,u)),!(o.path==null&&!o.index)&&r.push({path:u,score:Yp(u,o.index),routesMeta:h})};return e.forEach((o,l)=>{var i;if(o.path===""||!((i=o.path)!=null&&i.includes("?")))a(o,l);else for(let s of Mc(o.path))a(o,l,s)}),r}function Mc(e){let r=e.split("/");if(r.length===0)return[];let[n,...t]=r,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(t.length===0)return a?[o,""]:[o];let l=Mc(t.join("/")),i=[];return i.push(...l.map(s=>s===""?o:[o,s].join("/"))),a&&i.push(...l),i.map(s=>e.startsWith("/")&&s===""?"/":s)}function Np(e){e.sort((r,n)=>r.score!==n.score?n.score-r.score:Hp(r.routesMeta.map(t=>t.childrenIndex),n.routesMeta.map(t=>t.childrenIndex)))}const jp=/^:[\w-]+$/,Lp=3,qp=2,Mp=1,bp=10,_p=-2,hs=e=>e==="*";function Yp(e,r){let n=e.split("/"),t=n.length;return n.some(hs)&&(t+=_p),r&&(t+=qp),n.filter(a=>!hs(a)).reduce((a,o)=>a+(jp.test(o)?Lp:o===""?Mp:bp),t)}function Hp(e,r){return e.length===r.length&&e.slice(0,-1).every((t,a)=>t===r[a])?e[e.length-1]-r[r.length-1]:0}function Gp(e,r,n){let{routesMeta:t}=e,a={},o="/",l=[];for(let i=0;i<t.length;++i){let s=t[i],u=i===t.length-1,h=o==="/"?r:r.slice(o.length)||"/",d=Vp({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},h),y=s.route;if(!d)return null;Object.assign(a,d.params),l.push({params:a,pathname:yr([o,d.pathname]),pathnameBase:Wp(yr([o,d.pathnameBase])),route:y}),d.pathnameBase!=="/"&&(o=yr([o,d.pathnameBase]))}return l}function Vp(e,r){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,t]=Ip(e.path,e.caseSensitive,e.end),a=r.match(n);if(!a)return null;let o=a[0],l=o.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:t.reduce((u,h,d)=>{let{paramName:y,isOptional:g}=h;if(y==="*"){let E=i[d]||"";l=o.slice(0,o.length-E.length).replace(/(.)\/+$/,"$1")}const S=i[d];return g&&!S?u[y]=void 0:u[y]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function Ip(e,r,n){r===void 0&&(r=!1),n===void 0&&(n=!0),ei(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let t=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,i,s)=>(t.push({paramName:i,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(t.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,r?void 0:"i"),t]}function Jp(e){try{return e.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return ei(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),e}}function ri(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let n=r.endsWith("/")?r.length-1:r.length,t=e.charAt(n);return t&&t!=="/"?null:e.slice(n)||"/"}const Qp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Up=e=>Qp.test(e);function Bp(e,r){r===void 0&&(r="/");let{pathname:n,search:t="",hash:a=""}=typeof e=="string"?hn(e):e,o;if(n)if(Up(n))o=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),ei(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?o=vs(n.substring(1),"/"):o=vs(n,r)}else o=r;return{pathname:o,search:Kp(t),hash:Xp(a)}}function vs(e,r){let n=r.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function io(e,r,n,t){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(t)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $p(e){return e.filter((r,n)=>n===0||r.route.path&&r.route.path.length>0)}function bc(e,r){let n=$p(e);return r?n.map((t,a)=>a===n.length-1?t.pathname:t.pathnameBase):n.map(t=>t.pathnameBase)}function _c(e,r,n,t){t===void 0&&(t=!1);let a;typeof e=="string"?a=hn(e):(a=at({},e),B(!a.pathname||!a.pathname.includes("?"),io("?","pathname","search",a)),B(!a.pathname||!a.pathname.includes("#"),io("#","pathname","hash",a)),B(!a.search||!a.search.includes("#"),io("#","search","hash",a)));let o=e===""||a.pathname==="",l=o?"/":a.pathname,i;if(l==null)i=n;else{let d=r.length-1;if(!t&&l.startsWith("..")){let y=l.split("/");for(;y[0]==="..";)y.shift(),d-=1;a.pathname=y.join("/")}i=d>=0?r[d]:"/"}let s=Bp(a,i),u=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||h)&&(s.pathname+="/"),s}const yr=e=>e.join("/").replace(/\/\/+/g,"/"),Wp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Kp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Xp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Zp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Yc=["post","put","patch","delete"];new Set(Yc);const ef=["get",...Yc];new Set(ef);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ot(){return ot=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},ot.apply(this,arguments)}const ni=O.createContext(null),rf=O.createContext(null),br=O.createContext(null),xa=O.createContext(null),Cr=O.createContext({outlet:null,matches:[],isDataRoute:!1}),Hc=O.createContext(null);function nf(e,r){let{relative:n}=r===void 0?{}:r;dt()||B(!1);let{basename:t,navigator:a}=O.useContext(br),{hash:o,pathname:l,search:i}=Ic(e,{relative:n}),s=l;return t!=="/"&&(s=l==="/"?t:yr([t,l])),a.createHref({pathname:s,search:i,hash:o})}function dt(){return O.useContext(xa)!=null}function mt(){return dt()||B(!1),O.useContext(xa).location}function Gc(e){O.useContext(br).static||O.useLayoutEffect(e)}function Vc(){let{isDataRoute:e}=O.useContext(Cr);return e?vf():tf()}function tf(){dt()||B(!1);let e=O.useContext(ni),{basename:r,future:n,navigator:t}=O.useContext(br),{matches:a}=O.useContext(Cr),{pathname:o}=mt(),l=JSON.stringify(bc(a,n.v7_relativeSplatPath)),i=O.useRef(!1);return Gc(()=>{i.current=!0}),O.useCallback(function(u,h){if(h===void 0&&(h={}),!i.current)return;if(typeof u=="number"){t.go(u);return}let d=_c(u,JSON.parse(l),o,h.relative==="path");e==null&&r!=="/"&&(d.pathname=d.pathname==="/"?r:yr([r,d.pathname])),(h.replace?t.replace:t.push)(d,h.state,h)},[r,t,l,o,e])}function af(){let{matches:e}=O.useContext(Cr),r=e[e.length-1];return r?r.params:{}}function Ic(e,r){let{relative:n}=r===void 0?{}:r,{future:t}=O.useContext(br),{matches:a}=O.useContext(Cr),{pathname:o}=mt(),l=JSON.stringify(bc(a,t.v7_relativeSplatPath));return O.useMemo(()=>_c(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function of(e,r){return lf(e,r)}function lf(e,r,n,t){dt()||B(!1);let{navigator:a}=O.useContext(br),{matches:o}=O.useContext(Cr),l=o[o.length-1],i=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=mt(),h;if(r){var d;let T=typeof r=="string"?hn(r):r;s==="/"||(d=T.pathname)!=null&&d.startsWith(s)||B(!1),h=T}else h=u;let y=h.pathname||"/",g=y;if(s!=="/"){let T=s.replace(/^\//,"").split("/");g="/"+y.replace(/^\//,"").split("/").slice(T.length).join("/")}let S=xp(e,{pathname:g}),E=mf(S&&S.map(T=>Object.assign({},T,{params:Object.assign({},i,T.params),pathname:yr([s,a.encodeLocation?a.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?s:yr([s,a.encodeLocation?a.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),o,n,t);return r&&E?O.createElement(xa.Provider,{value:{location:ot({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:lr.Pop}},E):E}function sf(){let e=hf(),r=Zp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},r),n?O.createElement("pre",{style:a},n):null,null)}const uf=O.createElement(sf,null);class cf extends O.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,n){return n.location!==r.location||n.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:n.error,location:n.location,revalidation:r.revalidation||n.revalidation}}componentDidCatch(r,n){console.error("React Router caught the following error during render",r,n)}render(){return this.state.error!==void 0?O.createElement(Cr.Provider,{value:this.props.routeContext},O.createElement(Hc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function df(e){let{routeContext:r,match:n,children:t}=e,a=O.useContext(ni);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(Cr.Provider,{value:r},t)}function mf(e,r,n,t){var a;if(r===void 0&&(r=[]),n===void 0&&(n=null),t===void 0&&(t=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=t)!=null&&o.v7_partialHydration&&r.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,i=(a=n)==null?void 0:a.errors;if(i!=null){let h=l.findIndex(d=>d.route.id&&(i==null?void 0:i[d.route.id])!==void 0);h>=0||B(!1),l=l.slice(0,Math.min(l.length,h+1))}let s=!1,u=-1;if(n&&t&&t.v7_partialHydration)for(let h=0;h<l.length;h++){let d=l[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:y,errors:g}=n,S=d.route.loader&&y[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||S){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((h,d,y)=>{let g,S=!1,E=null,T=null;n&&(g=i&&d.route.id?i[d.route.id]:void 0,E=d.route.errorElement||uf,s&&(u<0&&y===0?(gf("route-fallback"),S=!0,T=null):u===y&&(S=!0,T=d.route.hydrateFallbackElement||null)));let p=r.concat(l.slice(0,y+1)),c=()=>{let m;return g?m=E:S?m=T:d.route.Component?m=O.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=h,O.createElement(df,{match:d,routeContext:{outlet:h,matches:p,isDataRoute:n!=null},children:m})};return n&&(d.route.ErrorBoundary||d.route.errorElement||y===0)?O.createElement(cf,{location:n.location,revalidation:n.revalidation,component:E,error:g,children:c(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):c()},null)}var Jc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Jc||{}),Qc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Qc||{});function pf(e){let r=O.useContext(ni);return r||B(!1),r}function ff(e){let r=O.useContext(rf);return r||B(!1),r}function yf(e){let r=O.useContext(Cr);return r||B(!1),r}function Uc(e){let r=yf(),n=r.matches[r.matches.length-1];return n.route.id||B(!1),n.route.id}function hf(){var e;let r=O.useContext(Hc),n=ff(),t=Uc();return r!==void 0?r:(e=n.errors)==null?void 0:e[t]}function vf(){let{router:e}=pf(Jc.UseNavigateStable),r=Uc(Qc.UseNavigateStable),n=O.useRef(!1);return Gc(()=>{n.current=!0}),O.useCallback(function(a,o){o===void 0&&(o={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,ot({fromRouteId:r},o)))},[e,r])}const gs={};function gf(e,r,n){gs[e]||(gs[e]=!0)}function Sf(e,r){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Yr(e){B(!1)}function Ef(e){let{basename:r="/",children:n=null,location:t,navigationType:a=lr.Pop,navigator:o,static:l=!1,future:i}=e;dt()&&B(!1);let s=r.replace(/^\/*/,"/"),u=O.useMemo(()=>({basename:s,navigator:o,static:l,future:ot({v7_relativeSplatPath:!1},i)}),[s,i,o,l]);typeof t=="string"&&(t=hn(t));let{pathname:h="/",search:d="",hash:y="",state:g=null,key:S="default"}=t,E=O.useMemo(()=>{let T=ri(h,s);return T==null?null:{location:{pathname:T,search:d,hash:y,state:g,key:S},navigationType:a}},[s,h,d,y,g,S,a]);return E==null?null:O.createElement(br.Provider,{value:u},O.createElement(xa.Provider,{children:n,value:E}))}function Cf(e){let{children:r,location:n}=e;return of(al(r),n)}new Promise(()=>{});function al(e,r){r===void 0&&(r=[]);let n=[];return O.Children.forEach(e,(t,a)=>{if(!O.isValidElement(t))return;let o=[...r,a];if(t.type===O.Fragment){n.push.apply(n,al(t.props.children,o));return}t.type!==Yr&&B(!1),!t.props.index||!t.props.children||B(!1);let l={id:t.props.id||o.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:t.props.ErrorBoundary!=null||t.props.errorElement!=null,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(l.children=al(t.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ol(){return ol=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},ol.apply(this,arguments)}function Of(e,r){if(e==null)return{};var n={},t=Object.keys(e),a,o;for(o=0;o<t.length;o++)a=t[o],!(r.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Rf(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Tf(e,r){return e.button===0&&(!r||r==="_self")&&!Rf(e)}const Af=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],zf="6";try{window.__reactRouterVersion=zf}catch{}const Pf="startTransition",Ss=hd[Pf];function kf(e){let{basename:r,children:n,future:t,window:a}=e,o=O.useRef();o.current==null&&(o.current=kp({window:a,v5Compat:!0}));let l=o.current,[i,s]=O.useState({action:l.action,location:l.location}),{v7_startTransition:u}=t||{},h=O.useCallback(d=>{u&&Ss?Ss(()=>s(d)):s(d)},[s,u]);return O.useLayoutEffect(()=>l.listen(h),[l,h]),O.useEffect(()=>Sf(t),[t]),O.createElement(Ef,{basename:r,children:n,location:i.location,navigationType:i.action,navigator:l,future:t})}const Ff=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xn=O.forwardRef(function(r,n){let{onClick:t,relative:a,reloadDocument:o,replace:l,state:i,target:s,to:u,preventScrollReset:h,viewTransition:d}=r,y=Of(r,Af),{basename:g}=O.useContext(br),S,E=!1;if(typeof u=="string"&&wf.test(u)&&(S=u,Ff))try{let m=new URL(window.location.href),v=u.startsWith("//")?new URL(m.protocol+u):new URL(u),R=ri(v.pathname,g);v.origin===m.origin&&R!=null?u=R+v.search+v.hash:E=!0}catch{}let T=nf(u,{relative:a}),p=xf(u,{replace:l,state:i,target:s,preventScrollReset:h,relative:a,viewTransition:d});function c(m){t&&t(m),m.defaultPrevented||p(m)}return O.createElement("a",ol({},y,{href:S||T,onClick:E||o?t:c,ref:n,target:s}))});var Es;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Es||(Es={}));var Cs;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Cs||(Cs={}));function xf(e,r){let{target:n,replace:t,state:a,preventScrollReset:o,relative:l,viewTransition:i}=r===void 0?{}:r,s=Vc(),u=mt(),h=Ic(e,{relative:l});return O.useCallback(d=>{if(Tf(d,n)){d.preventDefault();let y=t!==void 0?t:fa(u)===fa(h);s(e,{replace:y,state:a,preventScrollReset:o,relative:l,viewTransition:i})}},[u,s,h,t,a,n,e,o,l,i])}const Df=["Do","Do#","Re","Re#","Mi","Fa","Fa#","Sol","Sol#","La","La#","Si"],Nf=["Do","Reb","Re","Mib","Mi","Fa","Solb","Sol","Lab","La","Sib","Si"],jf=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],Lf=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],qf={Do:0,"Do#":1,Reb:1,Re:2,"Re#":3,Mib:3,Mi:4,Fa:5,"Fa#":6,Solb:6,Sol:7,"Sol#":8,Lab:8,La:9,"La#":10,Sib:10,Si:11,C:0,"C#":1,Db:1,D:2,"D#":3,Eb:3,E:4,F:5,"F#":6,Gb:6,G:7,"G#":8,Ab:8,A:9,"A#":10,Bb:10,B:11},Mf=["Sol#","Solb","Do#","Reb","Re#","Mib","Fa#","Sol","Lab","La#","Sib","Do","Re","Mi","Fa","La","Si","C#","Db","D#","Eb","F#","Gb","G#","Ab","A#","Bb","C","D","E","F","G","A","B"];function bf(e){return e.includes("b")}function _f(e,r){return e==="english"?r?Lf:jf:r?Nf:Df}function Bc(e,r=0,n="spanish"){if(!e)return"";if(e.includes("/"))return e.split("/").map(s=>Bc(s,r,n)).join("/");const t=Mf.find(s=>e.startsWith(s));if(!t)return e;const a=e.slice(t.length),o=qf[t];if(o===void 0)return e;let l=(o+r)%12;return l<0&&(l+=12),_f(n,bf(t))[l]+a}function Yf(e,r=0,n="spanish"){const t=[];let a="",o=0;const l=/\[([^\]]+)\]/g;let i;function s(h){if(h==="")return;(h.match(/\s+|\S+/g)||[]).forEach(y=>{if(/^\s+$/.test(y)){t.push({chord:"",text:y,isSpace:!0});return}t.push({chord:a,text:y,isSpace:!1}),a=""})}for(;(i=l.exec(e))!==null;){const h=e.slice(o,i.index);s(h),a=Bc(i[1].trim(),r,n),o=l.lastIndex}const u=e.slice(o);return s(u),a&&t.push({chord:a,text:"",isSpace:!1}),t}/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=(e,r)=>{const n=O.forwardRef(({color:t="currentColor",size:a=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:i="",children:s,...u},h)=>O.createElement("svg",{ref:h,...Hf,width:a,height:a,stroke:t,strokeWidth:l?Number(o)*24/Number(a):o,className:["lucide",`lucide-${Gf(e)}`,i].join(" "),...u},[...r.map(([d,y])=>O.createElement(d,y)),...Array.isArray(s)?s:[s]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=He("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=He("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=He("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=He("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=He("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=He("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=He("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=He("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=He("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=He("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),Kc=[{id:1,number:1,title:"Ven, oh Todopoderoso",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Ven, ¡oh, Todopoderoso,
Adorable Creador!
Padre Santo, cariñoso,
Manifiesta tu amor.
A tu trono de clemencia
Levantamos nuestra voz.
Tu presencia te pedimos,
Nuestro Padre, nuestro Dios.

ESTROFA 2

Ven, ¡oh Salvador Divino,
Dios de nuestra Salvación!
En nosotros haz morada,
Vive en nuestro corazón.
Eres tú, Jesús, benigno,
Eres infinito amor:
Óyenos, te suplicamos.
Ven, bendícenos, Señor.

ESTROFA 3

Ven, ¡Espíritu Divino!
Danos tu precioso don;
Dios consolador, inspira
Paz en todo corazón.
De los santos la herencia
Déjanos hallar en ti.
Y la Vida de los cielos
Gozaremos ya aquí.`},{id:2,number:2,title:"Luz de Vida",key:"Re mayor (D)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Luz de Vida celestial,
Fuego de Divino amor,
Brilla en mi corazón,
Ven, inspírame fervor.
A cantar ayúdame
Dignamente en honor
Del cordero que murió
Por salvar al pecador

ESTROFA 2

Digno, digno de honor
Es mi redento Jesús,
Quien al mundo redimió
Por su muerte en la Cruz.
Gloria sea a Jesús,
Gloria sea y loor,
Y dominio eternal
A Jesús, mi Redentor.`},{id:3,number:3,title:"Alma mía, no delires",key:"Do mayor (C)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Alma mía, no delires,
Ni suspires de dolor;
Que posees en el cielo,
Tu consuelo, tu Señor

ESTROFA 2

Jesucristo, del pecado
Te ha librado con la Cruz
Y derrama sobre el alma
Gozo, calma, paz y luz.

ESTROFA 3

El conoce tu conciencia,
Tu dolencia y frenesí,
Y con ansia te bendice
Y te dice: "Ven a Mí".

ESTROFA 4

No más llanto, no más penas,
Cosas buenas gozarás;
Y en los brazos de tu dueño
Dulce sueño dormirás`},{id:20,number:20,title:"Cariñoso Salvador",key:"Sol mayor (G)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Cariñoso Salvador,
Huyo de la tempestad
A tu seno protector,
Fiándome de tu bondad.
Sálvame, Señor Jesús,
De las olas del turbión,
Hasta el puerto de salud
Guía mi pobre embarcación

ESTROFA 2

Otro asilo ninguno hay;
Indefenso acudo a ti;
Mi necesidad me trae,
Porque mi peligro vi.
Solamente en ti, Señor
Creo hallar consuelo y luz;
Vengo lleno de temor
A los pies de mi Jesús.

ESTROFA 3

Cristo, encuentro todo en ti
Y no necesito más;
Caído, me pusiste en pie;
Débil, ánimo me das.
Al enfermo das salud,
Guías tierno al que no ve;
Con amor y gratitud
Tu bondad ensalzaré`},{id:24,number:24,title:"Yo, vil, indigno",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Yo, vil, indigno pecador,
Mi alma llena de dolor,
Perdón buscando, acudí
A Cristo que murió por mí.

CORO

Murió por mí, murió por mí.
Jesús murió por mí.

ESTROFA 2

Con humildad y contrición
Le supliqué su compasión
Postrado a sus pies pedí
Perdón, porque murió por mí.

ESTROFA 3

perezco, sálvame, Jesús;
Confío sólo en tu Cruz;
¿A quién iré sino a ti?
Y tú me dices: Ven a Mí.

ESTROFA 4

Mi petición Jesús oyó
Y del pecado me lavó
En esa fuente carmesí
Que en la Cruz abrió por mí.

ESTROFA 5

Hallé en mi Jesús perdón,
Alivio, paz y Salvación;
Y toda dicha conseguí`},{id:38,number:38,title:"Hay un mundo feliz",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Hay un mundo feliz más allá,
Donde cantan los santos en luz,
Tributando Eterno loor
Al invicto glorioso Jesús.

CORO

En el mundo feliz,
Reinaremos con nuestro Señor.
En el mundo feliz
Reinaremos con nuestro Señor.

ESTROFA 2

Cantaremos también a Jesús;
Al cordero que nos rescató,
Y con sangre vertida en la Cruz,
Los pecados del mundo quitó.

ESTROFA 3

Y allá en el mundo feliz,
Con los santos daremos honor
Al invicto, glorioso Jesús,
A Jesús nuestro Rey de amor.`},{id:39,number:39,title:"Pecador, ven al dulce Jesús",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Pecador, ven al dulce Jesús,
Y feliz para siempre serás,
Que si tú le quisieres tener
Al Divino Señor hallarás.

CORO

Ven a Él, pecador,
Que te espera tu buen Salvador.
Ven a Él, pecador,
Que te espera tu buen Salvador.

ESTROFA 2

Si cual hijo que necio pecó
Vas buscando a sus pies compasión
Tierno hermano hallarás en Jesús,
Y tendrás en sus brazos perdón.

ESTROFA 3

Si de enfermo te sientes morir,
Él será tu doctor celestial,
Hallarás en su sangre también
Medicina que cure tu mal.

ESTROFA 4

Ovejuela que huyó del redil,
Vuelve ya a tu benigno Señor,
Y en sus brazos llevada serás
Por tan dulce y amante Pastor.`},{id:40,number:40,title:"Cantaré, cantaré",key:"Mi mayor (E)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Cantaré, cantaré del hermoso país,
El lejano glorioso jardín,
Donde ha de vivir el alma feliz,
Mientras vuelan los siglos sin fin.

ESTROFA 2

¡Oh, la patria del alma! en sueños se ven
Sus muros de jaspe y cristal,
Y cercano parece el bello Edén,
Radiante con luz celestial.

ESTROFA 3

Y el árbol de Vida florece allá,
Y corre el río de amor;
Y jamás en la santa ciudad entrará
Ni la muerte ni amargo dolor.

ESTROFA 4

¡Oh, cuán dulce será en el Santo país,
Pasadas las penas aquí;
Volveremos a ver en la Vida feliz,
Que nos queda con Cristo allí!`},{id:46,number:46,title:"¡Oh, Padre Eterno!",key:"Sol mayor (G)",time:"",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

¡Oh, Padre Eterno!
¡Oh, Padre amado!
Perdón te pido
Por mis pecados,
¿De qué ha servido
Que me hayas dado
Hoy este tiempo,
Si te he faltado?

CORO

¡Oh, Padre Eterno!
¡Oh, Padre Eterno!
Perdón te pido
Por mis pecados.

ESTROFA 2

Sé que merezco
Tu desagrado,
Y que al infierno
Un paso he dado.
Mas, ¡oh, Dios mío!
Ve que soy barro:
Ten de mis culpas
Piedad, Dios Santo.

ESTROFA 3

Tú no permitas
Dios humanado,
Que en adelante
More en pecado.
Ve que conozco
Lo mal que he obrado,
Sálvame, Cristo,
Dame tu amparo.`},{id:65,number:65,title:"La nave evangelista",key:"Sol mayor (G)",time:"4 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

La nave evangelista
Marcha, marcha,
La nave evangelista
Marcha para Canaán;
Los que embarcarse quieran
Quieran, quieran,
Los que embarcarse quieran
Bienvenidos sí serán.

CORO

"Gloria en las Alturas",
Los de a bordo cantan dulcemente.
"Gloria en las Alturas"
A nuestro Capitán.

ESTROFA 2

Desembarcaron miles,
Miles, miles;
Desembarcaron miles
Al buen puerto siglos ha;
Y miles más navegan,
Navegan, navegan,
Y miles más navegan
Por las mismas aguas ya.

ESTROFA 3

El viento en popa vuelan,
Vuelan, vuelan,
El viento en popa, vuelan
Hacia aquel florido hogar;
Felices voces se oyen
Se oyen, se oyen
Felices voces se oyen,
Resonando por la mar.`},{id:66,number:66,title:"Nos veremos en el río",key:"Re mayor (D)",time:"4 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Nos veremos en el río,
Cuyas aguas cristalinas,
Cuyas ondas argentinas
Nacen del trono de Dios.

CORO

¡Oh, sí! nos congregaremos
En célica, hermosísima ribera
Del río de la Vida verdadera
Que nace del trono de Dios.

ESTROFA 2

En las márgenes del río
Que frecuentan serafines
Y embellecen querubines,
Da la dicha eterna de Dios.

ESTROFA 3

El vergel que riega el río
De Jesús es la morada;
El mal nunca tiene entrada,
Allí sólo reina Dios.

ESTROFA 4

Antes de llegar al río
Nuestras cargas dejaremos,
Libre todos entraremos
Por la Gracia del Señor.`},{id:68,number:68,title:"Oh, qué amigo nos es Cristo",key:"Sol mayor (G)",time:"4 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

¡Oh, qué amigo nos es Cristo!
Él llevó nuestro dolor
Y nos manda que llevemos
Todo a Dios en oración.
¿Está el hombre desprovisto
De paz, gozo y Santo amor?
Esto es porque no llevamos
Todo a Dios en oración.

ESTROFA 2

¿Estás débil y cargado
De cuidados y temor?
A Jesús, refugio Eterno
Dile todo en oración.
¿Te desprecian tus amigos?
Cuéntaselo en oración;
En sus brazos
De amor tierno
Paz tendrá tu corazón.

ESTROFA 3

Jesucristo es nuestro amigo,
De esto pruebas nos mostró,
Pues para llevar consigo
Al culpable se humanó.
El castigo de su pueblo
En su muerte Él sufrió;
Cristo es un amigo Eterno,
Sólo en Él confío yo.`},{id:69,number:69,title:"Santa Biblia",key:"Sol mayor (G)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Santa Biblia, para mí
Eres un tesoro aquí;
Tú contienes con verdad,
La divina voluntad;
Tú me dices lo que soy,
De quién vine y a quién voy.

ESTROFA 2

Tú reprendes mi dudar.
Tú me exhortas sin cesar;
Eres faro que a mi pie
Va guiando por la fe,
A las fuentes del amor
Del bendito Salvador.

ESTROFA 3

Eres infalible voz
Del Espíritu de Dios,
Que vigor al alma da
Cuando en aflicción está;
Tú me enseñas a triunfar
De la muerte y del pecar.

ESTROFA 4

Por tu santa letra sé
Que con Cristo reinaré;
Yo que tan indigno soy,
Por tu luz al cielo voy;
¡Santa Biblia, para mí
Eres un tesoro aquí.`},{id:70,number:70,title:"Cuando leo la Biblia",key:"Mi mayor (E)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Cuando leo en la Biblia como llama Jesús
Y bendice a los niños con amor
Yo también quisiera estas,
Y con ellos descansar
En los brazos de mi buen Salvador.

ESTROFA 2

Ver quisiera sus mano sobre mi reposar
Cariñosos abrazos de Él sentir,
Sus miradas disfrutar,
Las palabras escuchar;
"A los niños dejad a mi venir".

ESTROFA 3

Todos los redimidos y salvados por Él
Al cordero celebran inmortal;
Allí voces mil y mil
Salen del coro infantil,
Porque es de ellos el reino celestial.

ESTROFA 4

¡Cuántos hay que no saben de esa bella nansión!
Y que no quieren a Jesús oír;
Yo quisiérales mostrar
Que para ellos hay lugar
En cielo do los convida a ir.`},{id:74,number:74,title:"Noche de paz",key:"Do mayor (C)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Noche de paz, noche de amor,
Todo duerme en derredor:
Entre los astros que esparcen su luz
Bella anunciando al niño Jesús;
Brilla la estrella de paz.

ESTROFA 2

¡Noche de paz, noche de amor!
En el campo al Pastor.
Coros celestes proclaman salud,
Gracias y Gloria en su plenitud,
Por nuestro buen Redentor.

ESTROFA 3

¡Noche de paz, noche de amor!
Ved qué bello resplandor
Luce en el rostro del niño Jesús
En el pesebre, el mundo la luz,
Astro de Eterno fulgor.`},{id:78,number:78,title:"Llaman, llaman",key:"Mi mayor (E)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Llaman, llaman; ¿quién va allá?
¡Abran, abran! ¿quién será?
Soy un huésped muy hermoso,
En el mundo sin igual;
Mi semblante es cariñoso,
¿No podré pisar tu umbral?

ESTROFA 2

Llaman, llaman; ¿quién va allá?
¡Abran, abran! aún está
"¡Oh, qué puerta tan cerrada!
¡Cuán difícil es de abrir!
Mi visita es despreciada,
¡No me quieres recibir!".

ESTROFA 3

Llaman, llaman; ¿quién va allá?
¡Abran, abran!, no se va.
De rocío estoy bañado,
No me canso de esperar;
¡Ay del corazón helado,
Que me llegue a rechazar!`},{id:82,number:82,title:"Día feliz",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Día feliz, cuando escogí
Servirte, mi Señor y Dios;
Preciso es que mi gozo en ti
Lo muestres hoy
Con obra y voz.

CORO

¡Soy feliz! ¡soy feliz!
Y en tu favor me gozaré.
En libertad y luz me vi
Cuando triunfó en mi la fe,
Y el raudal carmesí
Salud de mi alma
Enferma fue.

ESTROFA 2

¡Pasó mi gran deber, cumplí;
De Cristo soy, y mío es Él!
Me atrajo con placer, seguí
Su voz, conoce todo fiel.

ESTROFA 3

Reposa, débil corazón,
A tus contiendas pon ya fin;
Hallé más noble posesión,
Y parte en superior festín.

ESTROFA 4

Solemne voto, ofrenda flor,
Que al cielo Santo consagré,
Hoy sé mi vínculo de honor,`},{id:85,number:85,title:"Firmes y adelante",key:"Mi mayor (E)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

¡Firmes y adelante!
Huestes de la fe,
Sin temor alguno,
Que Jesús nos ve.
Jefe Soberano
Cristo al frente va,
Y la regia enseña
Tremolando está.

CORO

Firmes y adelante
Huestes de la fe.
Sin temor alguno,
Que Jesús nos ve.

ESTROFA 2

Al sagrado nombre
De nuestro adalid,
Tiembla el enemigo
Y huye de la lid.
Nuestra es la victoria
Dad a Dios loor;
Y óigalo el averno
Lleno de pavor.

ESTROFA 3

Muévase potente
La Iglesia de Dios;
De los ya gloriosos
Marchamos en pos.
Somos sólo un cuerpo,
Y uno es el Señor,
Una la Esperanza,
Y uno nuestro Amor.`},{id:86,number:86,title:"Quisiera yo ser ángel",key:"Sol mayor (G)",time:"",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Quisiera yo ser ángel,
Con ángeles estar,
Mis sienes coronadas
Mi arpa allí tocar.
Delante del que adoro
Por único Señor
Con canto melodioso
Dando a Jesús loor.

ESTROFA 2

Yo no me cansaría,
No lloraría más,
Pesares no tendría,
Ni miedo ni maldad.
En bienaventuranza,
Pureza y Santo amor,
Con mi Jesús morando
Mirando su esplendor.

ESTROFA 3

Soy débil y muy malo
Pero Él se apiadará;
Y al cielo se ha llevado
A muchos niños ya;
Así que yo me enferme,
Pues tengo que morir,
Jesús amado, vengan
Los ángeles por mí.`},{id:92,number:92,title:"¿Te sientes casi resuelto ya?",key:"Mi mayor (E)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

¿Te sientes casi resuelto ya?
¿Te falta poco para creer?
¿Por qué pues, dices a Jesucristo?
"Hoy no, mañana te seguiré"

ESTROFA 2

¿Te sientes casi, resuelto ya?
Pues vence el casi, a Cristo ven;
Que hoy es tiempo, mas el mañana
Sobrando tarde pudiera ser.

ESTROFA 3

Sabes que el casi no es de valor
En la presencia del justo juez
¡Ay del que muere casi creyendo!
Completamente perdido es.`},{id:93,number:93,title:"A Jesucristo ven sin tardar",key:"Do mayor (C)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

A Jesucristo ven sin tardar;
Que ente nosotros hoy Él está,
Y te convida con dulce afán
Tierno, diciendo: "Ven".

CORO

¡Oh, cuán grata
Es nuestra reunión!,
Cuando allá,
Señor, en tu mansión
Contigo estemos es comunión,
Gozando eterno bien.

ESTROFA 2

Piensa que Él sólo puede colmar
Tu triste pecho de gozo y paz;
Y porque anhela tu bienestar
Vuelve a decirte: "ven".

ESTROFA 3

Su voz escucha sin vacilar,
Y grato acepta lo que hoy te da:
Tal vez mañana no habrá lugar;
No te detengas, ven.`},{id:97,number:97,title:"Salvo navego",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Salvo navego en la nave "Salud"
¡Cantando el nombre del bendito Jesús!
La proa puesta al Edén celestial
Rápida se aleja de este mundo mortal.

CORO

Su ruta al cielo,
La enseña Jesús,
Ya leva el áncora
La nave "Salud";
Todos subid a bordo
Sin temer al mar;
Que Jesús la manda,
El mejor Capitán.

ESTROFA 2

Diestro el piloto, surcará el fiero mar,
Sin que la nave llegue a zozobrar;
No hay dicha igual a la del alma en Jesús,
Salva por su sangre navegando en su luz.

ESTROFA 3

No más pecar: ser quiero ya del Señor,
Mi regla sea su Evangelio de amor;
Pronto, muy pronto, llegaré a Canaán:
¡Gloria a Jesucristo, celestial Capitán!`},{id:123,number:123,title:"La débil cuerda",key:"Mi mayor (E)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

La débil cuerda cederá
Y no cual hoy, cantar podré:
Mas, ¡oh, qué gozo al despertar
En el palacio de mi Rey!

CORO

Y cara a cara le veré
Y allá la historia contaré
De cómo me dio Jesús
La Vida eterna en la Cruz.

ESTROFA 2

Mi casa frágil caerá,
El cuando, no podré decir;
Mas sé que Él prepara ya
Morada eterna para mí.

ESTROFA 3

Al descender el áureo sol
Un bello día de solaz,
Oiré decir al Salvador:
"Fiel siervo, entra en mi paz".

ESTROFA 4

Su voz mi alma esperará,
Y hasta entonces velaré;
La puerta luego Él abrirá,
Y a Él mi vuelo alzaré.`},{id:132,number:132,title:"Jesús es mi amigo",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Jesús es mi amigo, mi buen amigo fiel,
A mi alma el más bello de un millar;
El lirio de los valles, encuentro sólo en Él
La virtud que trae perfecto bienestar.
En todos mis pesares es siempre mi sostén.
Me manda sobre Él mi carga echar

CORO

Es el lirio de los valles, la estrella del amor,
A mi alma el más bello de un millar.

ESTROFA 2

Alivia mis pesares, mi buen amigo fiel,
En la tentación es torre eficaz;
Del corazón arranco los ídolos por Él
Y las faltas que me apartan de su faz.
Si todos me desprecian, yo firme quedaré,
Por Él podré victoria alcanzar.

ESTROFA 3

Si cumplo sus mandatos, viviendo por la fe,
En las pruebas de maldad me sostendrá:
Rodeado de sus brazos, yo nada temeré;
Con sus huestes el Señor me guardará
Entonces a la Gloria iremos para ver
Su rostro y el cielo heredar.`},{id:147,number:147,title:"Si siembras de flores",key:"Sol mayor (G)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Si siembras de flores tu campo,
Por sendas de flores irás;
Si abrojos esparce tu mano,
Lo que siembres también segarás.

CORO

Lo que siembres también segarás;
Lo que siembres también segarás;
De cierto vendrá la cosecha,
Y de abrojos la tuya será.

ESTROFA 2

Si esparces doquier bendiciones,
Bendito doquiera serás;
Si engaño tu boca compone,
Lo que siembres también segarás.

CORO

Lo que siembres también segarás;
Lo que siembres también segarás;
De cierto vendrá la cosecha,
Y de engaño la tuya será.

ESTROFA 3

Si siembras la misericordia
Piedad para ti lograrás;
Si a nadie tu Vida perdona,
Lo que siembres también segarás.

CORO

Lo que siembres también segarás;`},{id:150,number:150,title:"Consagrarme todo entero",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Consagrarme todo entero
Alma, Vida y corazón,
Es el íntimo deseo
Que hoy me anima, buen Señor.

CORO

Heme aquí, Señor,
A tus plantas hoy,
Consagrado a tu servicio
Todo lo que soy.

ESTROFA 2

Al contrito has prometido
Que de ti no arrojarás,
Hoy propicio sé conmigo
Y tu Espíritu me das.

ESTROFA 3

Confesando mis pecados,
Que sin número han de ser,
Y arrojando todo a un lado
A servirte aprenderé.

ESTROFA 4

Mi canción constante sea,
Y mi sola inspiración,
Proclamad la dicha eterna
Del que vive para Dios.

ESTROFA 5

¡Cuánta paz inunda mi alma`},{id:152,number:152,title:"Escuchad el Santo coro",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Escuchad el Santo coro
Cómo cantan más allá,
Donde amigos nos esperan,
Salvos en la Gloria ya.
Su jornada terminaron,
Ya pasaron el Jordán
Y con santos miles cantan
En la eterna Canaán.

ESTROFA 2

¡Oh, mirad, los cielos se abren,
Ya la obscuridad se va!
¡Contemplad, cómo amanece,
Día celestial vendrá!
Se levantarán las nubes
Que cercándonos están
Y con júbilo entraremos
En la hermosa Canaán.

ESTROFA 3

¡Oh, las grandes reuniones
Que por siglos durarán!
¡Oh, las gratas bienvenidas
En la excelsa Canaán!
Donde no entrará la muerte
Ni habrá llanto ni dolor;
Mas tendremos gozo Eterno
En presencia del Señor.`},{id:153,number:153,title:"Cara a cara, ver espero",key:"",time:"",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Cara a cara, ver espero
A Jesús mi Salvador;
¡Oh, si hoy mismo mi deseo
Realizarse viera yo!

CORO

Cara a cara será visto
En su pronta aparición,
De los que en Él han creído
Para eterna Redención.

ESTROFA 2

Hoy su imagen a mi vista
No le es dado conocer,
Pero en no lejano día
He de verle como Él es.

ESTROFA 3

¡Cuánta no será mi dicha
Cuando le llegue a mirar,
Y la dulce bienvenida
De su boca escuche ya!

ESTROFA 4

¡Cara a cara, dicha inmensa!
¡Verle a Él como Él a mí
Y gozar de su presencia
Por la eternidad sin fin!`},{id:154,number:154,title:"A cualquiera parte",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

A cualquiera parte sin temor iré
Si Jesús dirige mi inseguro pie;
Sin su compañía todo es turbación,
Pero si Él me guía no tendré
Temor.

CORO

Con Jesús, por doquier sin temor iré;
Si Jesús me guía nada temeré.

ESTROFA 2

Con Jesús por guía donde quiera voy,
Porque sus caminos aprendiendo estoy;
Y aunque Padre y madre me hayan de faltar,
Él yo sé que nunca me abandonará.

ESTROFA 3

Si por el desierto mi camino va
Un seguro albergue no me faltará,
Pues a quien yo sirvo con filial amor
Es el Dios bendito que a Jacob guió.`},{id:155,number:155,title:"Cuando combatido",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Cuando combatido
Por la adversidad
Creas ya perdida
Tu felicidad,
Mira lo que el cielo
Para ti guardó,
Cuenta las riquezas
Que el Señor te dio.

CORO

Cuenta las promesas
De tu Dios;
Mira las riquezas
De su amor,
Pon los ojos,
Donde Cristo está,
Y tu mente guarde
La divina paz.

ESTROFA 2

¿Andas agobiado
Por algún pesar?
¿Dura te parece
Tu Cruz de llevar?
Cuenta las promesas
Del Señor Jesús
Y de las tinieblas
Nacerá tu luz.

ESTROFA 3

Cuando de otros veas
La prosperidad,
Y tus pies claudiquen
Tras de su maldad,`},{id:162,number:162,title:"Soy extranjero aquí",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Soy extranjero aquí,
En Tierra extraña estoy;
Mi hogar está muy lejos,
Del sol más allá
A todo pecador
Embajador yo soy
Del que por siempre
Rey será.

CORO

Ved el mensaje
Que os traigo aquí:
"Que os reconciliéis
Con Dios".
Embajador yo soy
De mi Señor el Rey;
Oíd, ¡oh pueblos! a mi voz.

ESTROFA 2

Mi Rey ordena que
En todas partes hoy
El pecador se vuelva
Del pecado a Dios;
Los que obedecen
Reinarán allá do voy;
Escucha, pecador, su voz.

ESTROFA 3

La hermosura de
Mi hogar no tiene igual.
Eterna Vida y gozo`},{id:166,number:166,title:"Tus pies la senda",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Tus pies la senda han extraviado,
De Dios muy lejos tu alma está
Sus dones tú has disipado,
Mas el perdón Jesús te da.

CORO

Tu Dios te llama a su lado
El quiere oír tu triste historia;
Te limpiará de tus pecados,
Y Gloria eterna gozarás.

ESTROFA 2

Espinas crueles en tu senda
Herido te han sin compasión;
Tus ojos cubren negra venda
Y todo en ti es aflicción.

ESTROFA 3

Al corazón adolorido
Jamás despreciará el Señor:
Al quebrantado y afligido
Jesús es tierno Salvador.

ESTROFA 4

A Cristo ábrele tu alma,
Y a Él descubre tu aflicción
Y pronto inundará de calma
Tu pobre y triste corazón.`},{id:171,number:171,title:"Santo Espíritu desciende",key:"Sol mayor (G)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Santo Espíritu desciende
A mi pobre corazón,
Llénalo de tu presencia,
Has en Él tu habitación.

CORO

Llena hoy, llena hoy;
Llena hoy mi corazón;
Santo Espíritu desciende
Y haz en Él tu habitación.

ESTROFA 2

De tu Gracia puedes darme
Inundado el corazón.
Ven, que mucho necesito:
Dame hoy tu bendición.

ESTROFA 3

Débil soy, oh sí; muy débil,
Y a tus pies postrado estoy,
Esperando que tu gracia
Con poder me llene hoy.

ESTROFA 4

Dame paz, consuelo y gozo,
Cúbreme hoy con tu perdón;
Tú confortas y redimes
Tú das grande Salvación.`},{id:172,number:172,title:"Cuando en mí todo acabare",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Cuando en mí todo acabare,
Dios me sostendrá,
Y Satán me acosaré,
Dios me sostendrá.

CORO

Dios me sostendrá,
Dios me sostendrá,
Porque soy de Cristo amado,
Dios me sostendrá.

ESTROFA 2

Yo no puedo resistir.
Dios me sostendrá.
Y Él vino a redimir;
Dios me sostendrá.

ESTROFA 3

El conoce a sus amados:
Dios me sostendrá.
Y Él está con los tentados,
Dios me sostendrá.

ESTROFA 4

No me dejará perdido,
Dios me guiará.
Y hoy me encuentro arrepentido;
Dios me sostendrá.`},{id:173,number:173,title:"Unánimes junto a la Cruz",key:"Sol mayor (G)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Unánimes junto a la Cruz,
Pedimos con fervor;
Según tu dicho, o Jesús,
Manda el consolador.

CORO

¡Oh! Manda otro Pentecostés,
Potente Salvador,
Y con fuego otra vez
Avívanos, Señor.

ESTROFA 2

Cual vivo fuego o vendaval,
¡Oh! hazlo descender,
Y en el alma de cada cual
Tu templo, establecer.

ESTROFA 3

Mediante fe y oración
El cielo abrirás,
El Santo fuego harás bajar
Y nos avivarás.

ESTROFA 4

Destruye el egoísmo, así,
Y quema todo mal;
Ven, vivificamos aquí,
Con fuego celestial.

ESTROFA 5

¡Oh! haz temblar al pecador`},{id:174,number:174,title:"Un poco, poquito de tiempo",key:"Mi mayor (E)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Un poco, poquito de tiempo esperemos,
Que el que ha de venir, Jesús pronto vendrá,
Orando, leyendo y cantando velemos
Que pronto oiremos el grito: "¡Aquí está!".

CORO

Muy pronto vendrá,
Muy pronto vendrá.
Y no tardará y no tardará.

ESTROFA 2

Con mando, y con voz de un arcángel del cielo,
Y al son de trompeta el Señor bajará
Así lo esperamos con ansia y anhelo
Y muertos o vivos nos recogerá.

ESTROFA 3

A los que en Jesús han dormido, sabemos
Que Dios juntamente con Él traerá.
Los que nos quedamos su cara veremos
Al mismo momento en que Él nos llamará.

ESTROFA 4

Aquellos que han muerto serán los primeros
Que Cristo a su mando resucitará;
Nosotros los vivos seremos postreros;
Mas junto a Jesús nos arrebatará.

ESTROFA 5

Arriba en las nubes, ¡encuentro glorioso!
Jesús a los santos aparecerá;`},{id:177,number:177,title:"Qué ha quitado mi maldad",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

¿Qué ha quitado mi maldad?
Sólo de Jesús la sangre.
¿Qué me ha dado sanidad?
Sólo de Jesús la sangre.

CORO

De toda mi maldad
Por ella limpio soy,
Ni a otra fuente voy,
Sólo de Jesús la sangre.

ESTROFA 2

Alcancé de Dios perdón,
Sólo de Jesús la sangre.
Y un nuevo corazón;
Sólo de Jesús la sangre

ESTROFA 3

Me procura Gracia y paz,
Sólo de Jesús la sangre.
Es mi único solaz,
Sólo de Jesús la sangre.

ESTROFA 4

Cantaré junto a sus pies,
Sólo de Jesús la sangre.
El cordero digno es,
Sólo de Jesús la sangre.`},{id:183,number:183,title:"Nuevas alegres",key:"Re mayor (D)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Nuevas alegres para decirles
Yo tengo ahora y éstas son:
Que Jesucristo me ha salvado
Desde que le pedí el perdón.
Y que también en patria mejor,
Una morada prepara el Señor
Para aquellos que determinen
Su Salvación aceptar.

ESTROFA 2

Goces mundanos ya he dejado;
No quiero más tan falso placer.
Paz prometieron, mas engañaron,
No me pudieron satisfacer;
Más bien estoy con mi Salvador
Y al cielo voy gozando su amor;
Y Él me guarda día por día
En gozo y libertad.

ESTROFA 3

No me importa lo que dijeren
Los enemigos de mi Jesús:
He elegido el buen camino.
Voy a la gloria, reino de luz.
Luchas yo tengo siempre aquí,
Pero descanso aguardo allí.
¡Oh, qué consuelo para mi alma
Cuando me llame el Señor!`},{id:186,number:186,title:"Has hallado en Cristo",key:"La mayor (A)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

¿Has hallado en Cristo, tu buen Salvador?
¿Eres salvo por la sangre de Jesús?
¿Por la fe descansas en el Redentor?
¿Eres salvo por la sangre de Jesús?

CORO

¡Lávame! ¡Lávame!
En tu sangre cordero de Dios;
Y con alma limpia me presentaré
Ante tu tribunal de luz.

ESTROFA 2

Vives siempre al lado de tu Salvador.
¿Eres salvo por la sangre de Jesús?
¿Del pecado eres siempre vencedor?
¿Eres salvo por la sangre de Jesús?

ESTROFA 3

Cuando Él viniere ¿te encontrarás?
Ya lavado por la sangre de Jesús
¿Para su venida preparado estás?
¿Ya lavado por la sangre de Jesús?

ESTROFA 4

Si perdón y paz deseas, pecador.
Tu refugio es la sangre de Jesús;
Si librarte quieres de eternal dolor,
¡Oh, acude a la sangre de Jesús!`},{id:187,number:187,title:"Cuando anuncie el arcángel",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Cuando anuncie el arcángel
Que más tiempo no habrá,
Y aclare esplendoroso el día final;
Cuando todos los salvados
Se congreguen ante Dios,
Entre ellos yo también tendré lugar.

CORO

Cuando el ángel pase lista
Cuando el ángel pase lista
Cuando Él ángel pase lista
Al llamar mi nombre yo responderé.

ESTROFA 2

Resucitarán gloriosos
Los que han muerto en Jesús
Las delicias del paraíso a gozar;
Y triunfantes entrarán
En las mansiones de la luz,
Para mí también habrá un dulce hogar.

ESTROFA 3

Trabajemos para Cristo
Anunciando su amor,
Mientras dure nuestra Vida terrenal;
Y al fin de la jornada
Con los salvos por Jesús
Entraremos en la patria celestial.`},{id:190,number:190,title:"¡A combatir!",key:"La mayor (A)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

¡A combatir!
Resuena la guerrera voz
Del buen Jesús,
Que hoy llamando está,
Sin desmayar,
Seguidle siempre con valor,
Y la victoria plena os dará.

CORO

¡A la batalla!; ¡oh cristianos!
Con el escudo de la fe;
Sé fiel soldado,
Pues a tu lado
Está el príncipe Jesús.
El con su Gracia te sostiene.
Y con potencia sin igual
Su brazo extiende
Y te defiende
En esta lucha contra el mal.

ESTROFA 2

¡A combatir!
Marchad con fiel resolución
En pos de Cristo,
Vuestro Capitán,
Henchido el corazón
De varonil ardor
A derrotar
Las huestes de Satán.

ESTROFA 3`},{id:192,number:192,title:"Me hirió el pecado",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Me hirió el pecado, fui a Jesús,
Mostréle mi dolor.
Perdido, errante vi su luz,
Bendíjome su amor.

CORO

En la Cruz, en la Cruz, do primero vi la luz,
Y las manchas de mi alma lavé,
Fue allí por fe que vi a Jesús
Y siempre feliz con Él seré.

ESTROFA 2

Sobre una Cruz vi a mi Señor,
Por fe cuando Él murió;
En mí probó su grande amor,
Mis culpas Él expió.

ESTROFA 3

Venció la muerte con poder,
Y a Gloria se exaltó.
Confiar en Él es mi placer,
Morir no temo yo.

ESTROFA 4

Aunque Él se fue, solo no estoy,
Mandó el consolador
Divino Espíritu que hoy
Me da perfecto amor.

ESTROFA 5

Vivir en Cristo trae la paz;`},{id:193,number:193,title:"Honra y Gloria al Padre Eterno",key:"Sol mayor (G)",time:"4 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Honra y Gloria al Padre Eterno
Que a su Hijo unigénito dio,
Por el rescate del mundo entero
Su última gota de sangre derramó.

CORO

Más que victoria,
Más que victoria,
Más que victoria,
Tenemos en ti;
Todo es puesto debajo de tus pies
Y más que victoria tenemos en ti.

ESTROFA 2

Cristo amado, mi fuerza tú eres,
Fuera de ti nada puedo hacer;
Todo es puesto debajo de tus pies
Y más que victoria yo tengo en ti.

ESTROFA 3

Victoria sobre el mundo y sobre el pecado
Victoria sobre el diablo y toda potestad;
Y el que venciere será coronado
Según su promesa y buena voluntad.

ESTROFA 4

Ahora, hermanos, estamos en la guerra,
Contra los poderes de Satanás.
Después de la Vida aquí en la Tierra,
Con Cristo reinaremos por siempre jamás.`},{id:201,number:201,title:"Pronto vendrá Jesucristo",key:"Sol mayor (G)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Pronto vendrá Jesucristo,
En una nube del cielo;
Para de todos ser visto,
Lleno de Gloria del reino.

CORO

Ven, Jesús, del cielo,
Con poder y virtud
Para que mi alma
Sea como tú.

ESTROFA 2

Pronto veremos el cielo
Como un libro abrirse:
Llenos de espanto y miedo
Islas y montes huirse.

ESTROFA 3

Delante del Rey de reyes
Todos serán reunidos,
Para entrar en su gloria,
Los que por Él han vencido.

ESTROFA 4

En las moradas del cielo
Con mi Jesús en la gloria,
Alabaré al cordero
Que me ha dado victoria.`},{id:204,number:204,title:"Que mi Vida entera esté",key:"Re mayor (D)",time:"4 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Que mi Vida entera esté
Consagrada a ti, Señor;
Que mis pasos siempre guié
El impulso de tu amor.

CORO

¡Lávame en tu sangre, Salvador!
Límpiame de toda mi maldad
Traigo a ti mi Vida,
Para ser Señor,
Tuya por la eternidad.

ESTROFA 2

Que mis pies tan solo en pos
De los santos puedan ir,
Y que a ti, Señor, mi voz
Se complazca en bendecir.

ESTROFA 3

Que mi tiempo todo esté
Consagrado a tu loor,
Que mis labios al hablar
Hablen sólo de tu amor.

ESTROFA 4

Toma ¡oh Dios! mi voluntad
Y hazla tuya nada más;
Toma, sí, mi corazón;
Por tu trono lo tendrás.

ESTROFA 5`},{id:212,number:212,title:"En el fondo de mi alma",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

En el fondo de mi alma una dulce quietud
Se difunde embargando mi ser,
Una calma infinita que sólo podrán
Los salvados de Dios comprender.

CORO

¡Paz! ¡Paz! dulcísima paz
Es aquella que el Padre me da;
Yo le ruego que inunde por siempre mi ser
En sus ondas de amor celestial.

ESTROFA 2

Qué tesoros yo tengo en la paz que me dio,
Y en el fondo del alma ha de estar
Tan segura que nadie quitarla podrá
Mientras miro los años pasar.

ESTROFA 3

Esta paz inefable consuelo me da,
Descansando tan sólo en Jesús;
Y ningunos peligros mi Vida tendrá
Si me siento inundado en su luz.

ESTROFA 4

Alma triste que en rudo conflicto te ves
Sola y débil tu senda al seguir,
Haz de Cristo tu amigo, que fiel siempre es,
Y su paz tú podrás recibir.`},{id:214,number:214,title:"En Jesucristo mártir de paz",key:"Re menor (Dm)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

En Jesucristo mártir de paz,
En horas negras de tempestad
Hallan las almas dulce solaz,
Grato consuelo, felicidad.

CORO

Gloria cantemos al Redentor
Que por nosotros quiso morir,
Y que la Gracia del Salvador
Dirija siempre nuestro vivir.

ESTROFA 2

En nuestras dudas, en el dolor,
A cada paso su protección
Infunde calma, Santo vigor,
Nuevos alientos al corazón.

ESTROFA 3

Cuando en las luchas falta la fe,
Y el alma siente desfallecer,
Jesús nos dice: "Yo os colmaré,
De rica Gracia, Santo poder"`},{id:216,number:216,title:"Cuán glorioso es el cambio",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Cuán glorioso es el cambio operado en mi ser
Viniendo a mi Vida el Señor,
Hay en mi alma una paz que yo ansiaba tener,
La paz que me trajo su amor.

CORO

Él vino a mi corazón,
Él vino a mi corazón,
Soy feliz con la Vida que Cristo me dio,
Cuando Él vino a mi corazón.

ESTROFA 2

Ya no voy por la senda que el mal me trazó
Do sólo encontré confusión;
Mis errores pasados Jesús los borró
Cuando Él vino a mi corazón.

ESTROFA 3

Ni una sombra de duda obscurece su amor,
Amor que me trajo el perdón;
La Esperanza que aliento la debo al Señor,
Cuando Él vino a mi corazón.`},{id:219,number:219,title:"Nuestra Vida acabará",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Nuestra Vida acabará,
Cual las hojas caerá,
Cual el haz se ligará,
Busca a Dios.
Vuela cada día veloz
Y volando da su voz:
"Ven a dar tu cuenta a Dios",
Busca a Dios.

CORO

Busca a Dios, busca a Dios,
Entretanto tengas tiempo,
Busca a Dios.
Si te atreves a esperar,
Dios la puerta cerrará;
Te dirá: - "Es tarde ya",
Busca a Dios.

ESTROFA 2

Pierde el hombre su vigor,
Se marchita cual la flor,
Desvanece cual vapor.
Busca a Dios
Como el río aprisa va
Hasta entrar al vasto mar,
Vas así a la eternidad,
Busca a Dios.

ESTROFA 3

Clama a Dios de corazón,
Con sincera contrición.`},{id:223,number:223,title:"Cristo quiere que yo brille",key:"Sol mayor (G)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Cristo quiere que yo brille,
Brillando para Él;
Y que yo dé a conocer
Su amor y gran poder.

CORO

Brillando, brillando,
Queremos que Chile brille;
Brillando, brillando.
Chile pedimos a Dios.

ESTROFA 2

Somos pequeños nosotros,
Mas, grande es el Señor;
Haremos lo que podamos
En bien de la nación.

ESTROFA 3

Aunque somos pequeños
Nos oirá el Señor
Cuando pidamos por Chile
Con intenso clamor.

ESTROFA 4

Es un deber del cristiano,
Según nos aconsejó
El gran apóstol san Pablo:
Orar por la nación.`},{id:228,number:228,title:"Cristo me ayuda",key:"Sol mayor (G)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Cristo me ayuda por Él a vivir,
Cristo me ayuda por Él a morir
Hasta que llegue su Gloria a ver;
Cada momento le entrego mi ser.

CORO

Cada momento la Vida me da,
Cada momento conmigo Él está
Hasta que llegue su Gloria a ver,
Cada momento le entrego mi ser.

ESTROFA 2

Siento pesares, muy cerca Él está.
Siento dolores, alivio me da;
Tenga aflicciones, me muestra su amor.
Cada momento me cuidas, Señor.

ESTROFA 3

Tenga flaquezas o débil esté,
Cristo me dice: "Tu amparo seré".
Cada momento, en tinieblas, o en luz,
Siempre conmigo está mi Jesús.`},{id:229,number:229,title:"Lejos, allende los mares",key:"Do mayor (C)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Lejos, allende los mares,
Tengo mi dulce hogar.
Veo entre las tinieblas
La hermosa ribera brillar.
Pronto allá me dirijo
Aunque difícil es;
Recto el camino que llevo,
Y muy seguro es.

CORO

Sion, hermoso lugar
Do mi hogar tendré;
Feliz yo voy a estar
Cuando a ti veré.
Santos esperan allá;
Pronto con ellos estaré;
No habrá tristeza,
No habrá más muerte
En mi hogar.

ESTROFA 2

Cuando me llame la muerte
En mi hogar entraré;
Cuando ha cesado la lucha
Corona allí ceñiré;
Libre de todo pecado
Iré a descansar,
Mi alma a unirse con santos
A Cristo alabar.`},{id:233,number:233,title:"Cautivo era de Satán",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Cautivo era de Satán,
Por mis maldades oprimido
Perderme fue siempre su afán,
Mas, Cristo al fin me libertó.

CORO

Diré a todos mi historia;
Feliz y libre estoy,
Feliz y libre estoy,
A Dios loor, a Dios loor
Por su gloriosa libertad.

ESTROFA 2

Emancipado ya del mal
Emprenderé divina lucha.
Con Cristo insigne general
Invicto siempre yo seré.

ESTROFA 3

Jesús caudillo inmortal
Al mundo vino por librarnos
De la vil opresión del mal
Y darnos dulce libertad.

ESTROFA 4

Después de lidia terrenal
El premio celestial aguarda
Al vencedor, quien vivirá
Por siempre, libre de maldad.`},{id:234,number:234,title:"Oh, Cristo amado",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Oh, Cristo amado, mi buen Salvador,
Por ti he dejado las sendas del error:
Y quiero servirte pues tú me amaste a mí,
Si antes no te amaba,
Si antes no te amaba,
Si antes no te amaba, Señor, ahora sí.

CORO

Y al llegar al cielo así cantaré yo;
Yo era vil indigno, yo era vil indigno,
Yo era indigno, mas Cristo me salvó.

ESTROFA 2

En santas moradas en gozo perennal,
A Cristo Jesús el cordero inmortal
Yo siempre cantaré ¡oh! qué dicha para mí,
Si antes no te amaba,
Si antes no te amaba,
Si antes no te amaba, Señor, ahora sí.

ESTROFA 3

Te amo porque en tu grande amor,
Tuviste en poco vergüenza y dolor,
Corona de espinas llevaste tú por mí.
Si antes no te amaba,
Si antes no te amaba,
Si antes no te amaba, Señor, ahora sí.

ESTROFA 4

En la Vida y muerte yo siempre te amaré,
Y en alabanzas mi voz entonaré,`},{id:235,number:235,title:"Cómo podré estar triste",key:"Do mayor (C)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

¿Cómo podré estar triste,
Cómo entre sombras ir
Cómo sentirme solo
Y en el dolor vivir
Si Cristo es mi consuelo,
Mi amigo siempre fiel,
Si aun las aves tienen
Seguro asilo en Él?

CORO

Feliz cantando alegre,
Yo vivo siempre aquí:
¡Si Él cuida de las aves
Cuidará también de mí!

ESTROFA 2

Nunca te desalientes
Oigo al Señor decir,
Y en su Palabra fiado
Hago al dolor huir.
A Cristo paso a paso
Yo sigo sin cesar.
Y todas sus bondades
Me da sin limitar.

ESTROFA 3

Siempre que estoy tentado
O que en la sombra estoy,
Más cerca de Él camino
Y protegido voy.
Si en mí la fe desmaya,`},{id:236,number:236,title:"Pecador sin Esperanza",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Pecador sin Esperanza
Jesucristo te ama a ti;
Cuando estaba yo perdido,
Mi Jesús salvóme a mí.

CORO

Sí yo sé, sí yo sé,
Que la sangre de Jesús es eficaz;
Que Jesús con su sangre
Limpia al pecador más vil, y paz le da.

ESTROFA 2

Da poder al desmayado
Por los montes le guiará,
Agua encuentra en el desierto,
En las noches luz le da.

ESTROFA 3

Cuando vienen tentaciones
A tu lado Cristo está;
Al lugar seguro guía,
En las pruebas gracias da.

ESTROFA 4

Te guiará hasta que llegares
A la celestial ciudad,
Donde eterna Vida y dicha
Gozarás por su bondad.`},{id:237,number:237,title:"En tinieblas de maldad",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

En tinieblas de maldad, lejos de mi
Salvador preso era de ciega pasión,
Sin pensar que el fin del rebelde pecador
Era muerte y eterna destrucción.

CORO

Me sacó de las tinieblas a la luz,
De tinieblas a la luz
Me sacó de las tinieblas mi Jesús;
Gloriosa luz de Dios.

ESTROFA 2

No pensaba en mi alma ni en la eternidad,
Desoía la voz de mi Dios,
Y buscaba en vano hallar felicidad
Hasta que dejé de ir del mundo en pos.

ESTROFA 3

Ante Cristo me postré; mis pecados confesé
Y humilde pedí el perdón;
Ya la noche se fue y no más tropezaré
Pues Jesús me dio completa Salvación.

ESTROFA 4

Las tinieblas han pasado y vivo en la luz,
Disipóse la vana ilusión,
Y ahora yo vivo guardado por Jesús,
Victorioso sobre toda tentación.`},{id:240,number:240,title:"Adiós, mis hermanos",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

¡Adiós, mis hermanos! Yo voy a dejaros,
Y seguir la batalla en otra ciudad.
Más, quiero animaros a ser valerosos,
Luchando por Dios contra toda maldad.

CORO

Partiremos de aquí, más allá nos veremos,
Delante del trono de nuestro Señor;
Por siglos sin fin, nunca más separarnos
Morando con Cristo en Eterno esplendor.

ESTROFA 2

¡Adiós, mis amigos! El deber ya me toca;
Y tengo que irme sirviendo al Señor;
Y es mi oración que el Maestro os bendiga,
Guardándoos siempre en su Santo amor.

ESTROFA 3

¡Adiós, pecadores! Yo siento dejaros,
Porque todavía estáis lejos de Dios;
Más, aún tiempo hay, si queréis entregaros
En manos de aquel que os quiere salvar.`},{id:244,number:244,title:"Sembraré la simiente preciosa",key:"Do mayor (C)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Sembraré la simiente preciosa,
Del glorioso Evangelio de amor,
Sembraré, sembraré mientras viva
Dejaré el resultado al Señor.

CORO

Sembraré, sembraré
Mientras viva simiente de amor.
Segaré, segaré,
Al hallarme en la casa de Dios.

ESTROFA 2

Sembraré en corazones sencillos
La doctrina de Dios de perdón,
Sembraré, sembraré mientras viva;
Dejaré el resultado al Señor.

ESTROFA 3

Sembraré en corazones de mármol,
La bendita Palabra de amor.
Sembraré, sembraré mientras viva;
Dejaré el resultado al Señor.`},{id:246,number:246,title:"Cual ciudad sobre un monte",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Cual ciudad sobre un monte edificada
No se puede esconder.
Que la luz de Dios sea en ti reflejada;
Haz tu luz resplandecer.

CORO

Haz tu luz resplandecer.
Haz tu luz resplandecer.
Brille Cristo solamente en nuestra Vida
Haz tu luz resplandecer.

ESTROFA 2

Cuídate que el mundo no se asombre
Por un mal paso que en ti vea,
No deshonres de Jesús el Santo nombre;
Haz tu luz resplandecer.

ESTROFA 3

Caminando tú por plazas o por calles
En el hogar o en el taller,
Digno ejemplo de un cristiano en ti se halle;
Haz tu luz resplandecer.

ESTROFA 4

Del Señor alzad en alto la bandera
Hasta morir o vencer.
Sé cristiano hasta el fin de la carrera;
Haz tu luz resplandecer.`},{id:247,number:247,title:"En la guerra contra el pecado",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

En la guerra contra el pecado,
Vamos todos a combatir.
Estará Dios a nuestro lado
En tiempo de sufrir.
La victoria será nuestra
Confiando en su poder.
Nos dará Él su ayuda,
Hemos todos de vencer.

CORO

No, nosotros, nunca, nunca, cederemos al mal,
Nunca, no, no, no. nunca, no, no.
No, nosotros, nunca, nunca, cederemos al mal.
Nos espera la corona en el cielo.

ESTROFA 2

Pelearemos con toda fuerza
Los demonios del mal a destruir,
Ayudando a los pecadores
El Calvario a subir.
Sin miedo de las burlas
Del diablo y del mundo,
Para Dios y para el alma
Hemos todos de vivir.

ESTROFA 3

Jesucristo es nuestra fuerza
Su poder nunca faltará.
Su presencia nos esfuerza
Y victoria nos dará.
Levantemos la bandera`},{id:248,number:248,title:"A luchar sin temor",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

A luchar sin temor siempre iremos,
Pues victoria nos dará Jesús.
¡Oh, hermanos! sigamos esa senda
Que trazada nos dejó Cristo en la Cruz.

CORO

Y allá Jesús me dará corona
Si hasta el fin soy fiel en su camino,
Y sé que al fin de mi carrera
Con Jesús allá viviré por la eternidad.

ESTROFA 2

Tras el bello estandarte avancemos,
A la rica mansión sin igual;
Proclamemos al mundo perdido,
Predicando gratas nuevas al hombre ya.

ESTROFA 3

Valeroso Jesús nos convida
El autor de la paz y el deber;
Recorramos esa senda celeste,
Vamos pronto, compañeros, a reinar.

ESTROFA 4

Aunque rujan las huestes malignas,
A mi lado Jesús estará:
Quien por siempre ganó la batalla
Preparado con Jesús iré allá.`},{id:249,number:249,title:"Quieres ser salvo",key:"La mayor (A)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

¿Quieres ser salvo de toda maldad?
Tan sólo hay poder en mi Jesús.
¿Quieres vivir y gozar santidad?
Tan sólo hay poder en Jesús.

CORO

Hay poder, poder, sin igual poder,
En Jesús, quien murió,
Hay poder, poder, sin igual poder
En la sangre, que Él vertió.

ESTROFA 2

¿Quieres ser libre de orgullo y pasión?
Tan sólo hay poder en mi Jesús.
¿Quieres vencer toda cruel tentación?
Tan sólo hay poder en Jesús.

ESTROFA 3

¿Quieres servir a tu Rey Señor?
Tan sólo hay poder en Jesús.
Ven y ser salvo podrás en su amor;
Tan sólo hay poder en Jesús.`},{id:250,number:250,title:"En los cielos nuestra patria",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

En los cielos nuestra patria es hallada,
Con su sangre la compró nuestro Señor.
Los hermanos que tienen su parte allá;
Hoy nos traen un lazo sincero de amor.

CORO

Bienvenidos sois, hermanos,
En la Iglesia del Señor,
Todos juntos congregados
Al Señor damos loor.

ESTROFA 2

Reunidos, hoy con júbilo estamos
De los cuatro ámbitos de la nación;
Como símbolo de Redención, hermanos,
"Chile para Cristo" es nuestra oración.

ESTROFA 3

Triunfantes aquel día entraremos
Con vosotros a esta grata reunión;
Con vosotros hoy con regocijo estamos;
Bienvenidos, allá tributarán canción.`},{id:251,number:251,title:"En la mansión do Cristo está",key:"Mi menor (Em)",time:"4 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

En la mansión do Cristo está
Allí no habrá tribulación,
Ningún pesar, ningún dolor
Que me quebrante el corazón.

CORO

Allí no habrá tribulación,
Ningún pesar, ningún dolor.
Y cuando esté morando allá
Diré que no hay tribulación.

ESTROFA 2

Será muy triste estarme aquí
Muy lejos sí del Salvador;
Pues morarán con Él allí
Los redimidos por su amor.

ESTROFA 3

Perfecto amor encontraré
En la mansión del Salvador;
Perfecta paz allí tendré,
Mejor que la que gozo hoy.

ESTROFA 4

Entonces sí yo gozaré
De toda la felicidad;
Y ya con Cristo reinaré
Por toda la eternidad.`},{id:252,number:252,title:"En un monte lejano",key:"Do mayor (C)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

En un monte lejano diviso una Cruz
Emblema de afrenta y dolor
Y yo amo esa Cruz donde Cristo expiro
Por salvar al mas vil pecador

CORO

Yo me abrazo a esa Cruz con amor
Hasta el día de mi mutación,
Cuando a Cristo mi cuenta le dé
Por Jesús yo corona tendré.

ESTROFA 2

Despreciada del mundo yo veo esa Cruz
Que es centro de mi adoración
Pues en ella el cordero sin mancha expiro
Sacrificio de gran expiación

ESTROFA 3

Empapada de sangre yo veo esa Cruz
Y es sangre preciosa en verdad
Pues en ella mis culpas redime Jesús
Y dichosa mi alma sera

ESTROFA 4

A la Cruz despreciada yo leal he de ser
Su escarnio no he de rehuir
Mas un día Jesús ha de darme con Él
Herencia eterna y feliz`},{id:254,number:254,title:"Las sendas anchas dejaré",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Las sendas anchas dejaré,
Yo quiero por la angosta andar,
El mundo no sabrá por qué;
Mas voy a mi celeste hogar.

CORO

No puede el mundo ser mi hogar,
No puede el mundo ser mi hogar,
En Gloria tengo mi mansión,
No puede el mundo ser mi hogar.

ESTROFA 2

Algunos quieren verme ir
Por los senderos de maldad;
Oír no quiero su llamar
Pues voy a mi celeste hogar.

ESTROFA 3

¡Oh, ven conmigo, pecador!
Y sigue en pos del Salvador,
¿Por qué no quieres tú buscar
La hermosa tierra más allá?`},{id:255,number:255,title:"Alcemos, hermanos",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Alcemos, hermanos, las manos caídas,
Los pasos en Cristo hemos de afirmar;
Jesús hoy nos llama a la paz y armonía
Rencores pasados hemos de olvidar.

ESTROFA 2

Unidos a Jesús siempre hemos de estar,
Jesús nos limpió ya de culpa y pesar,
Delante del Padre que es nuestro abogado,
Rencores pasados hemos de olvidar.

ESTROFA 3

El fiero enemigo quiere dividirnos
Porque poco tiempo le queda que obrar,
Más bien, pues, hermanos, seamos unidos,
Rencores pasados hemos de olvidar.

ESTROFA 4

De Cristo a las puertas está su venida,
Viniendo muy pronto a sus hijos a buscar;
La llama del gozo esté siempre encendida,
Rencores pasados hemos de olvidar.

ESTROFA 5

De fieles cristianos demos Santo ejemplo
Y nada perturbe nuestro caminar;
Porque ya estamos en los últimos tiempos,
Rencores pasados hemos de olvidar.

ESTROFA 6

Hoy nuestro delitos a Dios confesemos`},{id:256,number:256,title:"El Señor Jesús está llamando",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

El Señor Jesús está llamando.
¿Quién irá por mí a trabajar?
¿Quién a mí traerá a los que se pierden
Y el camino les ha de enseñar?

CORO

Háblame, háblame
Y tu voz yo presto acataré.
Háblame, ¡oh, Señor!
Y tu voz yo presto acataré.

ESTROFA 2

Cuando el trozo de carbón ardiente
Al profeta fiel purificó;
Al oír la voz que le llamaba
"¡Mándame, Señor!", le respondió.

ESTROFA 3

Hay millones que en pecado mueren,
Escuchad su tétrico gemir;
Acudid con tiempo a rescatarles.
¿Quién dirá "Señor, yo quiero ir"?

ESTROFA 4

Pronto el tiempo de la siega pasa,
Pronto iremos al celeste Edén;
Ojalá en aquel solemne día
Él me diga: "Hijo hiciste bien".`},{id:259,number:259,title:"Oh! mi corazón rebosa de gozo",key:"Do mayor (C)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

¡Oh! mi corazón rebosa de gozo,
Porque Dios me perdonó en su amor;
Sirviéndolo a Él estoy dichoso,
Voy al cielo do está mi Salvador.

CORO

Voy subiendo en áurea escalera,
Voy subiendo do corona me espera,
Voy subiendo en la luz, voy subiendo con Jesús.
Alabanzas cantaré a Dios allá.
Voy subiendo en áurea escalera,
Voy subiendo do corona me espera.
Voy subiendo en la luz, voy subiendo con Jesús.
Voy subiendo a mi celeste hogar.

ESTROFA 2

Cada día quiero serle más constante,
Cada día quiero serle más leal;
Ayudado por su Gracia abundante
Que procede de mi Padre celestial.

ESTROFA 3

Hallo gran placer llevando pecadores,
Pobres, ricos de cualquiera condición,
A aquel que en la Cruz sufrió dolores
Para dar a todos plena Salvación.`},{id:263,number:263,title:"Yo quiero trabajar",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Yo quiero trabajar, por mi Señor
Confiado en su Palabra y en su amor.
Quiero yo cantar y orar
Y, ocupado siempre estar
En la viña del Señor.

CORO

Trabajad y orad
En la viña, en la viña del Señor.
Sí, mi anhelo es orar
Y ocupado siempre estar
En la viña del Señor.

ESTROFA 2

Yo quiero día por día trabajar
Y esclavos del pecado libertar,
Conducirlos a Jesús,
Nuestro guía, nuestra luz,
En la viña del Señor.

ESTROFA 3

Yo quiero ser obrero de valor
Confiado en el poder del Salvador,
Y el que quiera trabajar
Hallará también lugar
En la viña del Señor.`},{id:265,number:265,title:"A tí, alma",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

A ti alma, te digo despierta,
No desoigas de Cristo el llamado,
Hace tiempo Él golpea a tu puerta,
Y te dice abandona el pecado.

CORO

Ven, pues, a beber te llama
Agua de la viva fuente;
No esperes el mañana,
Hoy te invita Jesús dulcemente.

ESTROFA 2

Él te quiere sacar de los vicios
Y tenerte por su Hijo amado;
Por tu alma llegó al sacrificio,
Por tus culpas Él fue crucificado.

ESTROFA 3

Pecador, ven a tu Salvador,
¡Oh, acude a lavarte en su sangre!
No desprecies a tu Salvador,
De limpieza tu alma tiene hambre.

ESTROFA 4

No desoigas de Cristo el llamado,
Abre hoy mismo a Jesús tu corazón,
No le hagas más tiempo esperar,
Hoy recibe de Cristo el perdón.`},{id:266,number:266,title:"Si yo tuviera de la mañana",key:"Sol mayor (G)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Si yo tuviera de la mañana
Las raudas alas para volar,
Yo muy contento me trasladara
A las riberas de Canaán.

CORO

Ángeles blancos me llevarán
A la presencia de mi Señor,
Y yo con júbilo cantaría
Con los salvados por su amor.

ESTROFA 2

Allí no hay llanto, no hay amargura,
Allí no se sabe lo que es dolor,
Allí es todo luz y alegría,
Allí todo es amor.

ESTROFA 3

Vestidos blanco, palma y corona
Cada uno de ellos visten allí,
Y sé ahora que si soy fiel,
Vestido blanco hay para mí.

ESTROFA 4

Allí no hay llanto, no hay despedida,
Allí nunca se dice adiós,
Porque allí siempre reinaremos
Junto a Cristo nuestro Señor.`},{id:268,number:268,title:"La venida de Cristo",key:"Re menor (Dm)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

La venida de Cristo se acerca,
Pronto viene su Iglesia a buscar
No durmamos, estemos alerta,
Vigilad, vigilad, vigilad.

CORO

Pronto viene Jesús y nos lleva
A la hermosa mansión celestial,
Pronto viene Jesús a la Tierra;
Nos iremos con Él a gozar.

ESTROFA 2

Si queremos que Cristo nos lleve
A los cielos con Él a reinar,
No seamos jamás negligentes;
Trabajad, trabajad, trabajad.

ESTROFA 3

Arreglemos, estemos a cuenta
Con Jesús el cordero inmortal,
Del que ofende tengamos clemencia,
Perdonad, perdonad, perdonad.

ESTROFA 4

Perdonando, Jesús nos perdona,
Y a los cielos nos lleva a reinar,
Ganaremos también la corona;
Vigilad, trabajad, perdonad.`},{id:272,number:272,title:"De la Tierra de Egipto",key:"Do mayor (C)",time:"2 tiempos (*)",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

De la Tierra de Egipto yo vengo,
Desde allá me sacó mi Señor;
Mensajero enviado a mi pueblo,
El mensaje de eterna Salvación.

CORO

Bendito el Señor, bendito es su amor,
Que tuvo de mí compasión;
Enfermo me encontraba,
Desamparado me hallaba
Cuando vino mi bendito Salvador.

ESTROFA 2

Ya mi Vida se estaba terminando,
En este mundo de tanto dolor;
Aburrido e intranquilo me hallaba,
Cuando vino mi bendito Salvador.

ESTROFA 3

De la Tierra del martirio vengo
A pedirle perdón al Señor;
El pecado me tenía atado
A este mundo de tanto dolor.

ESTROFA 4

Hoy vivimos felices y contentos,
Con su sangre lavó mi corazón,
Esperando que cuando Él nos llame,
Gozaremos con Él en la mansión.`},{id:273,number:273,title:"Día de victoria",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Día de victoria,
Gozo sin igual,
Cuando Cristo volverá;
Que glorioso encuentro
Con mi Salvador.
En las nubes Él vendrá.

CORO

En las nubes se verá
En aquel día final;
Cristo el Salvador
Muy pronto volverá,
Por aquellos que Él amó.

ESTROFA 2

Día de gran gozo,
Gozo celestial;
Cuando Cristo volverá,
De la Tierra, al cielo,
Él nos llevará
A su seno paternal.

ESTROFA 3

Se oye la trompeta,
Anunciando está
La venida del Señor;
Ya no más dolores,
Ya no más afán,
Con Jesús triunfó el amor.`},{id:277,number:277,title:"En el cielo una morada",key:"Mi mayor (E)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

En el cielo una morada
Cristo fue a preparar
Para todo aquel que hiciere
Su divina voluntad.

CORO

Gozo Eterno hay en el cielo.
Allí cantan de alegría
Los Salvador por Jesús
Que han sido fieles en la Vida.

ESTROFA 2

Somos fieles los cristianos,
Somos fieles a Jesús.
Abracemos con el alma
El Evangelio de salud.

ESTROFA 3

Somos probados los cristianos
Como el oro en el crisol,
Y la sangre de Jesucristo
Lava y limpia el corazón.`},{id:279,number:279,title:"Hubo uno",key:"Mi mayor (E)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Hubo uno que quiso por mí padecer
Y morir por mi alma salvar,
El camino más cruel a la Cruz recorrer
Para así mis pecados lavar.

CORO

En la Cruz, en la Cruz mis pecados lavó
Cuando quiso por mí padecer.
Con angustias en la Cruz fue el benigno Jesús
Que por siempre mis culpas borró.

ESTROFA 2

Él es tierno y amante cual nadie lo fue
Pues convierte al infiel corazón
Y por esa paciencia y ternura yo sé
Que soy libre de condenación.

ESTROFA 3

Es mi anhelo constante a Cristo seguir
Mi camino su ejemplo marcó
Y por darme la Vida Él quiso morir
En la Cruz mis pecados lavó.`},{id:281,number:281,title:"Hay un canto nuevo",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Hay un canto nuevo en mi ser,
Es la voz de mi Jesús,
Que me dice: "Ven a descansar.
Tu paz conquisté en la Cruz".

CORO

Cristo, Cristo, Cristo,
Nombre sin igual.
Llena siempre mi alma
De esa nota celestial.

ESTROFA 2

Náufrago en pecado me encontré,
Sin paz en mi corazón,
Más en Cristo, mi Señor, hallé
Dulce paz y protección.

ESTROFA 3

Tengo de su Gracia celestial
Bajo sus alas de amor,
Riquezas que fluyen a raudal
Desde el trono del Señor.

ESTROFA 4

Cristo en las nubes volverá,
Bajo el bello cielo azul,
Él entonces mi alma llevará
A vivir en Gloria y luz.`},{id:282,number:282,title:"Jesús es mi Rey soberano",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Jesús es mi Rey soberano,
Mi gozo es cantar su loor;
Es Rey, y me ve cual Hermano,
Es Rey, y me brinda su amor.
Dejando su trono de gloria,
Me vino a sacar de la escoria,
Yo soy feliz, y yo soy feliz con Él.

ESTROFA 2

Jesús es mi amigo anhelado,
Que en sombras o en luz siempre está;
Paciente y humilde a mi lado,
Consuelo y alivio me da.
Por eso contento le sigo
Porque Él es mi Rey y mi amigo,
Y yo soy feliz, y yo soy feliz con Él.

ESTROFA 3

Señor, ¿qué pudiera yo darte
Por tanta bondad para mí?
Me basta servirte y amarte
Y en todo entregarme yo a ti
Entonces acepta hoy mi Vida
Que a ti sólo queda rendida,
Y yo soy feliz, y yo soy feliz con Él.`},{id:283,number:283,title:"La patria necesita",key:"Re mayor (D)",time:"4 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

La patria necesita
Privarse de maldad,
Para que en sus hogares
Reine felicidad.

CORO

Para entrar al cielo
Y estar con el Señor
Se le previene al hombre
Limpiar su corazón.

ESTROFA 2

Alerta, mis hermanos,
Pidamos a Jesús
Que Chile todo entero
Conozca su virtud.

ESTROFA 3

Porque ya el fin se acerca
Y a cuentas llamará,
Y toda alma sucia
Al cielo no entrará.

ESTROFA 4

Ya estamos convencidos
Con nuestro Salvador,
Que quita nuestras penas
Con su ferviente amor.

ESTROFA 5

Lávate en la sangre`},{id:284,number:284,title:"Magdalena",key:"La mayor (A)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Magdalena a los pies de Jesús
Llorando un día llegó,
Ante aquel que más tarde en la Cruz
Su sangre bendita derramó.
Con ungüento ungía sus pies
Y contrista pedía el perdón,
Jesús conmovióse en su ser,
Y mirándola le respondió.

CORO

Hija mía, ya estas perdonada,
Ve tranquila y no peques más,
Te ha salvado la fe que en tu alma
Pusiste con sinceridad.

ESTROFA 2

Como aquella que se arrepintió,
Yo también vengo a ti, Salvador;
Como oveja que busca al Pastor
Y se goza cuando oye su voz.
Y cantando le damos loor
A aquel que en la Cruz se inmoló.
Sembrad la Palabra de amor
Que es consigna del Hijo de Dios.

CORO

Humillados a tus pies, buen Señor,
Implorando tu dulce perdón
Y confiamos en el Dios de amor
Que oirá nuestra humilde oración.`},{id:288,number:288,title:"Son verdades reveladas",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Son verdades reveladas:
Que existe un Dios Creador,
Y la Gloria dará al justo,
El infierno al pecador.

CORO

Creo en Dios, en Dios espero,
Amo a Dios mi Redentor.
Creo en Dios que me salvó,
En el cual hay Salvación.

ESTROFA 2

Es un Dios en tres personas
Iguales en perfección:
Padre, Hijo y Espíritu Santo,
No hay más que un solo Dios.

ESTROFA 3

El Hijo se hizo hombre
Sin dejar de ser Dios,
En la Cruz su sangre dio
Para nuestra Redención.

ESTROFA 4

Predico el Santo Evangelio
Y clavado en la Cruz murió.
Para lavarnos a todos
Él su sangre derramó.`},{id:289,number:289,title:"Señor, yo te conozco",key:"Re mayor (D)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Señor, yo te conozco,
La noche azul serena
Me dice desde lejos:
"Tu Dios se acerca allí".
Pero la noche obscura,
La de nublado llena,
Me dice más pujante:
"Tu Dios se acerca a ti".

ESTROFA 2

Te acercas, y conozco
Las orlas de tu manto,
En esa ardiente nube
Con que ceñido estás.
El resplandor conozco
De tu semblante Santo,
Cuando al cruzar el éter
Relampagueando vas.

ESTROFA 3

Conozco de tus pasos
Las invisibles huellas,
Del repentino trueno
En el crujiente son.
Las chispas de tu carro
Conozco en las centellas,
Tu aliento en el rugido
Del rápido aquilón.

ESTROFA 4

Señor, yo te conozco,
Mi corazón te adora,
Mi espíritu de hinojos
Ante tus pies está.`},{id:290,number:290,title:"Señor de los cielos",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Señor de los cielos, dame hoy a mí
La paz, a mi alma que quiero de ti.
Sólo en ti yo encuentro la paz y el amor.
Y tú le das Vida a mi corazón.

CORO

Señor, te imploro la paz a mi alma,
Y quema el pecado de mi corazón,
Yo quiero la dicha, la paz y el consuelo,
Y vivir tranquilo en tu Santo amor.

ESTROFA 2

Alégrate, alma, en noches de amor,
Que Cristo ya viene a tu corazón,
Si estás angustiado por algún pesar,
Hoy clama a Cristo, y Él te salvará.

ESTROFA 3

No tengo más penas, ya te conocí;
Viniste a mí cuando yo te busqué.
Quisiera ya nunca dejarte, Señor,
Quisiera que todos sintieran tu amor.

ESTROFA 4

Así mis hermanos, Cristo, ya vendrá,
Y el alma angustiada Cristo avivará,
Seguir el camino que Cristo trazó,
Lavaos en la sangre que nos rescató.`},{id:295,number:295,title:"Oh, yo quiero andar con Cristo",key:"La mayor (A)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Oh, yo quiero andar con Cristo
Quiero oír su tierna voz,
Meditar en su Palabra,
Y cumplir su voluntad,
Consagrar a Él mi Vida,
Mis dolores y mi afán;
Y algún día con mi Cristo
Gozaré la claridad.

CORO

Oh, sí, yo quiero andar con Cristo
Oh, sí, yo quiero vivir con Cristo,
Oh, sí, yo quiero morir con Cristo,
Quiero serle un testigo fiel.

ESTROFA 2

Oh, yo quiero andar con Cristo.
Él es mi ejemplo fiel;
En la Biblia yo lo leo,
Y yo sé que es la verdad.
Cristo era Santo en todo,
El cordero de la Cruz,
Y yo anhelo ser cristiano,
Seguidor de mi Jesús.

ESTROFA 3

Oh, yo quiero andar con Cristo,
De mi senda Él es la luz,
Dejaré el penoso mundo
Para ir al Salvador,
Este mundo nada ofrece,`},{id:296,number:296,title:"Por ti, oh Cristo",key:"Do mayor (C)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Por ti, oh Cristo, yo tengo Salvación,
Por ti, oh Cristo, mi alma tiene paz.
Con tu muerte para mí se abrió el cielo,
Y con amor perdonaste mi maldad.

CORO

Y es por eso que yo digo al mundo
Que en tu sangre hay Salvación
Y remisión de pecados,
Que tú diste tu Vida allí en la Cruz
Por el justo y por el malvado.

ESTROFA 2

Yo te ruego que guardes a tu Iglesia
Y bendigas a tus hijos, oh Señor,
Que la llenes de tu Espíritu Santo,
Para que así se convierta el pecador.

ESTROFA 3

Yo te alabo porque me sacaste
De este mundo de vicios y de errores,
Te prometo, serte fiel hasta que vuelvas,
De no cumplirte, llévame antes, oh Señor.`},{id:300,number:300,title:"Un Salvador hallé",key:"Sol mayor (G)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Un Salvador hallé en Jesucristo,
Él me salvó de toda mi maldad.
En las tinieblas Él me había visto
Y me llevó a la Verdad.

CORO

Él me salvo y me llenó
De grande gozo que rebosa el corazón.
Te seguiré y llegaré
A tu gran célica mansión.

ESTROFA 2

Mi Salvador poder me da en la lucha
Y aunque esté débil Él me sostendrá,
Yo clamo a Él y Él siempre me escucha
Y al cielo Él me llevará.

ESTROFA 3

Mi Salvador te seguiré con gozo,
Tú eres todo para mí, Jesús,
De Salvación tu don es tan glorioso
Que fácil es llevar tu Cruz.`},{id:301,number:301,title:"Un día Cristo volverá",key:"La mayor (A)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Un día Cristo volverá.
Promesa fiel, faltar jamás,
Como se fue, así vendrá
Y su pueblo ha de ver al Rey Jesús.

CORO

Muy pronto, sí, Jesús vendrá
Y alegre le verá su pueblo.
Velad, orad, el Rey vendrá,
Los suyos arrebatará.

ESTROFA 2

Los mensajeros del Señor
Afirman que vendrá Jesús;
El buen y fiel consolador
Las promesas ya sacó a plena luz.

ESTROFA 3

Oh, Gloria sin comparación
Será mirar a nuestro Rey,
Reciban todos bendición
Esperando ese día su grey.

ESTROFA 4

Oh, bien venido Rey Jesús,
Tu Iglesia te espera aquí,
Muy pronto ha de ver tu faz
Y gozar de tus laureles siempre allí.`},{id:303,number:303,title:"Vagaba yo en la obscuridad",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Vagaba yo en la obscuridad,
Hasta que vi a mi Jesús
Que por su amor y su bondad
Me amaneció la luz.
Vagué muy lejos del redil,
Muy lejos de mi buen Pastor
Cual oveja por los montes
Errante, así yo fui.

CORO

Gozo y luz tengo en mi alma hoy,
Gozo y luz hoy, ya que salvo soy,
Desde que vi a mi Jesús
He sentido gozo de su amor en mí,
Gozo y luz tengo en mi alma hoy.
Gozo y luz hoy, ya que salvo soy.

ESTROFA 2

Las nubes y la tempestad
No encubren a mi Salvador
Y en medio de la obscuridad
Me gozaré en su amor.
Andando en la luz de Dios
Encuentro plena y dulce paz,
Voy adelante sin temor,
Dejando el mundo atrás.

ESTROFA 3

Veréle pronto cual es Él:
Raudal de pura y bella luz,
Y eternamente gozaré
A causa de su amor.
Volverá pronto a recoger
Las almas que en la Cruz ganó,`},{id:304,number:304,title:"En la Tierra soy un peregrino",key:"Mi mayor (E)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

En la Tierra soy un peregrino
Que camino en el mundo de la luz,
Alentando sólo en mi camino
La Esperanza de irme con Jesús.

CORO

Lo veré en un cercano día
Cuando deje el mundo de dolor,
Cara cara, sólo verle anhelo
Y vivir guardado por su amor.

ESTROFA 2

Nada importa que en mis desazones
En las pruebas mil que pase aquí,
Alentando sólo en mi camino
La Esperanza de irme con Jesús.

ESTROFA 3

Sólo estoy de paso en esta Vida
Donde todo ha de perecer,
Busco aquella patria bendecida
Que eternal con Dios habrá de ser.`},{id:305,number:305,title:"Un príncipe tenemos",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Un príncipe tenemos,
En Él todos confiamos,
Su Palabra es suave y fuerte
Y su orden, no ceder.
Lucharemos por la gloria
Todos juntos como hermanos
Y triunfantes entraremos
En la Gloria del Edén.

ESTROFA 2

Aunque turbe nuestros pasos,
Hierros, penas o cadenas,
Seguiremos adelante
Por la Gracia del Señor.
En conquista de otras almas,
En conquista de otras tierras
Para gozo, honra y gloria
Del precioso Salvador.

ESTROFA 3

Trataremos de ser fieles
Y luchar con gran anhelo
Por el Evangelio Santo
Que es dictado por amor
Para remisión del mundo
Y para Gloria del cielo,
Para consuelo del triste
Y perdón del pecador.

ESTROFA 4

Bienaventurado el triste
Porque Él tendrá consuelo
En la Gloria de mi Padre,
En la Gloria de Jehová.`},{id:306,number:306,title:"Junto al templo de La Hermosa",key:"Mi mayor (E)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Junto al templo de La Hermosa
Un mendigo una limosna cada día imploraba,
Y subía Pedro y Juan a orar
Y en ellos le fijó una mirada.

CORO

No tengo plata ni oro,
Mas lo que tengo te doy
En el nombre de Jesús de Nazareth
Levántate y anda y alaba a tu Dios.

ESTROFA 2

Hoy el mundo está afligido
Y ha caído en la desesperación,
Y no encuentra una mano protectora
Que le diga que en Jesús hay Salvación.

ESTROFA 3

Si Satán, nuestro enemigo,
A tu Hermano hiciere caer
Y quedarte tendido en el camino
Dale auxilio con presteza y con placer.`},{id:311,number:311,title:"¡Oh, amor de Dios!",key:"Re mayor (D)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

¡Oh, amor de Dios! su inmensidad
El hombre no podría contar;
Ni comprender la gran verdad,
Que Dios al hombre pudo amar.
Cuando el pecado entró al hogar
De Adán y Eva en Edén,
Dios les sacó, más prometió
Un Salvador también.

CORO

¡Oh, amor de Dios! brotando está
Inmensurable, eternal,
Por las edades durará
Inagotable raudal.

ESTROFA 2

Si fuera tinta todo el mar
Y todo el cielo un gran papel
Y todo hombre un escritor,
Y cada hoja un pincel;
Para escribir de su existir,
No bastarían jamás.
Él me salvó y me lavó,
Y me da el cielo, además.

ESTROFA 3

Y cuando el mundo pasará,
Con cada trama y plan carnal
Y todo reino caerá,
Con cada trono mundanal,
El gran amor del Redentor`},{id:315,number:315,title:"Cristo, nuestro jefe,",key:"La mayor (A)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Cristo, nuestro jefe, nos lleva a la lid;
Nunca cederemos si Él nos dice: Id.
En su justa causa se suele ignorar;
Mas, le seguiremos fiel.

CORO

¡Adelante, es la orden del Señor!
¡Adelante, vamos sin temor!
¡Adelante, canta ya su grey!
¡La victoria es cierta con el Rey!

ESTROFA 2

La furiosa lucha, larga no será
Y a los vencedores nos congregarán;
Donde cantaremos un himno triunfal,
Sí, le seguiremos fiel.

ESTROFA 3

Nuestro estandarte luce por doquier
Con poder y gloria, siempre se ha de ver;
Cristo, nuestro jefe, al mundo venció,
Sí, le seguiremos fiel.

ESTROFA 4

Chile para Cristo, Cristo para Él,
Nuestras peticiones, siempre han de ser
Y la gran victoria, nuestra Dios dará.
Sí, le seguiremos fiel.`},{id:321,number:321,title:"Fieles soldados",key:"Sol mayor (G)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Fieles soldados de Cristo Jesús
Sin vacilar, a la lucha salid
Obedeciendo al gran Capitán,
El avivamiento, tendrá que venir.

CORO

Ha de venir, sí, ha de venir,
El avivamiento tendrá que venir.
Obedezcamos, tengamos fe,
Que el avivamiento tendrá que venir.

ESTROFA 2

Con bendiciones Jesús nos colmó;
Nos revistió con Divino poder,
El hasta aquí la victoria nos dio
Y al enemigo podremos vencer.

ESTROFA 3

Tú nos amaste, ¡oh buen Salvador!
Y por salvarnos viniste a sufrir.
Danos tu Espíritu Santo, Señor,
Y así podremos amarnos y servir.

ESTROFA 4

Nada del mundo queremos amar,
Sólo por ti anhelamos vivir
Y así seguiremos orando con fe,
El avivamiento, tendrá que venir.`},{id:326,number:326,title:"Varios años he luchado",key:"Do mayor (C)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Varios años he luchado por ser bueno
Y no puedo, ni he podido ser mejor;
Mas, no puedo hacer bien lo que yo quiero,
Porque es malo y perverso el corazón.

CORO

"Ven a Mí, ven a Mí, quiero hacerte descansar";
Dice Cristo, invitando al pecador;
"Si tu carga es tan pesada y no puedes,
Hijo mío, dame hoy tu corazón".

ESTROFA 2

En el mundo he querido sin reproche,
Presentarme con un limpio corazón;
Mas, engaños y fracasos he tenido
Y no puedo, sin la ayuda del Señor.

ESTROFA 3

Sólo Cristo y su sangre derramada,
Por tan vil y malvado pecador,
Da perdón, da la Vida, paz y gozo
Y prepara para Dios el corazón.

ESTROFA 4

Yo no quiero, yo no quiero por más tiempo
Estar lejos, estar lejos del Señor;
Nos invita hoy, que todos le busquemos
En Espíritu y perfecta, comunión.`},{id:335,number:335,title:"En la vergonzosa Cruz",key:"La mayor (A)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

En la vergonzosa Cruz,
Padeció por mí, Jesús;
Por la sangre que vertió,
Mis pecados Él expió;
Lavará de todo mal
Ese rojo manantial;
El que abrió por mí, Jesús,
En la vergonzosa Cruz.

CORO

Si, fue por mí.
Sí, fue por mí,
Fue por mí; murió Jesús
En la vergonzosa Cruz.

ESTROFA 2

¡Oh! ¡Qué amor, qué inmenso amor!
Reveló mi Salvador;
La maldad que hice yo,
Al suplicio le llevó.
Ahora a ti, mi todo doy,
Cuerpo y alma tuyo soy;
Mientras permanezca aquí,
Hazme siempre fiel a ti.

ESTROFA 3

Yo de Cristo sólo soy;
A seguirle pronto estoy,
Al bendito Redentor
Serviré con firme amor.
Sea mi alma ya su hogar,`},{id:338,number:338,title:"¡Oh, Señor! procuro en vano",key:"Mi mayor (E)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

¡Oh, Señor! procuro en vano,
Mi conducta reformar;
Pues ningún poder humano
Santidad me puede dar.
Es mi Vida de pecado
Diaria ofensa para ti;
Pero mi alma ha confiado
En tu sangre carmesí.

ESTROFA 2

En tu reino está el contento,
Nada impuro allí entrará;
Sin el nuevo nacimiento
Ningún alma lo verá.
Mira, pues, mi insuficiencia,
Muestra en mí tu gran poder;
Manifiesta tu clemencia
Y de nuevo hazme nacer.

ESTROFA 3

Ven, Espíritu Divino;
Ven y escucha mi oración;
Ante ti mi frente inclino,
Por mi regeneración.
De este modo mi Esperanza
No vacila y llego a creer
Que la bienaventuranza
En el cielo he de tener.`},{id:339,number:339,title:"Señor, tu viña es grande",key:"Mi mayor (E)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Señor, tu viña es grande;
Mas faltan los obreros,
La mies está madura
¿Y quién la segará?
Yo siento tu llamado
Que invita al mundo entero;
Mas hoy pocos responden,
Señor, ¿por qué será?

ESTROFA 2

Acaso tú comprendes
Que pueda yo servirte
Y obrar, según cual sea
Tu santa voluntad.
Hoy mismo dejo todo,
Lo dejo por servirte
Y hacer lo que me mandes,
Con toda libertad.

ESTROFA 3

Ahora que mi Vida
Está limpia de pasiones,
Y mi alma está serena
Y quieto el corazón.
No sea que mañana
Florezcan tentaciones
Y pierda para siempre
Tan dulce bendición.

ESTROFA 4

Ocúpame al momento
Ahora que soy joven;
Mediante de tu gracia
Y lleno de tu amor;`},{id:340,number:340,title:"Padre, a tus pies me postro",key:"Do mayor (C)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Padre, a tus pies me postro,
Rompe mis prisiones duras;
¡Oh, responde mientras llamo!
Pon tu Espíritu en mí.

CORO

Pon tu Espíritu en mi alma,
Hazme lo que ser debiera;
Hazme puro en todo, limpio de pecado,
Pon tu Espíritu en mí.

ESTROFA 2

Mientras Cristo intercede;
Mientras oro yo humilde;
Lo que necesito dadme,
Pon tu Espíritu en mí.

ESTROFA 3

No deseo ya ofenderte,
Viviré para agradarte
Y en el corazón guardarte;
Pon tu Espíritu en mí.`},{id:341,number:341,title:"En tus afanes y en tu dolor",key:"La mayor (A)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

En tus afanes y en tu dolor,
Dios cuidará de ti.
Vive amparado en su inmenso amor:
Dios cuidará de ti.

CORO

Dios cuidará de ti
Y por doquier contigo irá;
Dios cuidará de ti
Nada te faltará.

ESTROFA 2

Si desfalleces en tu amor;
Dios cuidará de ti.
Si ves peligros en rededor,
Dios cuidará de ti.

ESTROFA 3

Cuando anhelares, Él te dará;
Dios cuidará de ti.
Nada que pidas te negará,
Dios cuidará de ti.

ESTROFA 4

Nunca en las pruebas sucumbirás;
Dios cuidará de ti.
En su regazo te apoyarás:
Dios cuidará de ti.`},{id:347,number:347,title:"En horas tristes",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

En horas tristes de dolor
Fuiste mi amparo, gran Señor;
Todo aquel que en ti creerá
Aunque esté muerto, ¡Vivirá!
Clamé a ti, en mi ansiedad,
Convalecí de enfermedad;
Porque tu brazo de poder
Restituyó mi triste ser.

ESTROFA 2

Por valle obscuro al Cruzar
Mi senda hubiste iluminar;
Si abandonado me encontré,
Mi fiel vanguardia el Señor fue.
Con su bandera Él me cubrió,
Mis enemigos ahuyentó:
Mi sed ardiente hubo calmar
Y mis heridas, cicatrizar.

ESTROFA 3

Ungiste el lecho del dolor,
Jesús, mi buen consolador;
Aunque en el mundo y sin hogar,
Mas el Señor me ha de auxiliar.
En negra noche y tempestad;
Todo lo calma con claridad;
La copa amarga como hiel
La torna dulce, cual la miel.

ESTROFA 4

En fuerte, recio vendaval
En densa noche abismal,
En la audaz persecución,
En todo, es Dios mi protector.`},{id:348,number:348,title:"Va mi barca",key:"Mi mayor (E)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Va mi barca veloz por el viento,
Enfrentando negra tempestad;
Mas vislumbra la Gloria del puerto
Y alivia la furia del mar.

CORO

No zozobrará;
¡No zozobrará!
Aunque porfié la dificultad;
Cristo al timón va.

ESTROFA 2

Entre pruebas que siegan tu Vida
Y agobian cual barco en el mar;
Va tu fe con el rumbo perdido;
Clama a Cristo y Él te salvará.

ESTROFA 3

No zozobra mi barca ahora,
Porque Cristo es mi Capitán;
Y la Biblia por carta me guía
En mi rumbo hasta el puerto final.

ESTROFA 4

Si alguien quiere navegar seguro
Y las rocas y bajos salvar,
Tripulemos el barco bendito,
Que se llama Evangelio de paz.`},{id:349,number:349,title:"La llamada",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Un amigo muy dulce y amante
Hoy te llama con ansias y amor;
Ven a mí, te daré Vida eterna
En mansiones de Eterno esplendor.

CORO

No rechaces la voz tan amante
De Jesús tu benigno Señor,
A la paz y pureza Él te llama;
Al Edén del celeste fulgor.

ESTROFA 2

Cuántos hay cuya carga es pesada,
Sólo es llanto, dolor y pesar;
Hoy escucha tan dulce llamada
Ven a mí, yo te haré descansar.

ESTROFA 3

Aunque vivas aquí sin amarle,
Ante el gran tribunal ¿qué será?
Sólo Él puede darte Esperanza,
Él que cree salvado será.`},{id:351,number:351,title:"No hay tristeza en el cielo",key:"Mi mayor (E)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

No hay tristeza en el cielo,
Ni llanto, ni amargo dolor;
No hay corazón angustiado
Do reina el Dios de amor.
Las nubes de nuestro horizonte,
Jamás aparecen allá;
Jesús en su Gloria esplendente
Derrama su luz celestial.

CORO

Yo voy a la patria del alma,
Do Cristo prepara mi hogar;
Do todos los santificados
Irán para siempre a gozar.
El día feliz ya se acerca
En que el sol para mí se pondrá
¡Oh, qué gozo será cuando mire al Señor
En aquella hermosa ciudad!

ESTROFA 2

No hay tentación en el cielo,
Ni pruebas existen allí;
El alma que en Cristo reposa
Segura en su seno estará.
No hay aflicción en el cielo,
Ni sombra de muerte atroz;
El árbol de Vida florece
Do fluye el río de Dios.

ESTROFA 3

Cuán dulce será en el cielo,`},{id:355,number:355,title:"Yo he venido de nuevo",key:"Mi mayor (E)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Yo he venido de nuevo hasta aquí
Implorando que oigas mi clamor;
Porque tú eres mi buen Salvador
Porque oyes a todo pecador.

CORO

Tu promesa nos dice Señor,
Que por siempre nos ayudarás;
Que ninguno vació se irá
Que en tu templo esta noche estarás.

ESTROFA 2

Yo he sido tan malo, Señor,
Reconozco mi negro borrón
Y tú has sido tan lleno de amor;
Me has salvado y me has dado el perdón.

ESTROFA 3

¿Cómo puedo pagarte, Señor?
Con servirte y amarte hasta el fin
Para irme contigo a reinar
En los cielos del sol más allá`},{id:371,number:371,title:"Corramos todos",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Corramos todos a la batalla,
Acompañemos a mi Jesús,
Nuestras oraciones son la metralla
Y Santo emblema será Jesús.

CORO

Evangelista, siempre adelante,
Nuestro estandarte flameando está
Y el enemigo, será vencido
Y la victoria, nuestra será.

ESTROFA 2

Acorazados y revestidos,
Apercibidos de la oración,
Muy pronto el diablo será vencido
Si somos fieles a nuestro Dios.

ESTROFA 3

Sabemos todos, hermanos míos,
Que Jesucristo pronto vendrá;
Llevará a todos sus escogidos
Y a los malos los dejará.

ESTROFA 4

Vienen angustias sobre la Tierra,
Y aflicciones con gran dolor,
No nos turbemos, hermanos míos,
Digamos todos: ¡aquí, Señor!`},{id:375,number:375,title:"La Iglesia en la Tierra",key:"La mayor (A)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

La Iglesia en la Tierra
Peregrina ha de estar,
Anhelante ella espera
Su feliz y Eterno hogar.

CORO

Nos veremos, nos veremos.
Nos veremos de la Tierra más allá.
Nos veremos, nos veremos
Junto al río cristalino más allá.

ESTROFA 2

Nada aquí es permanente,
Todo ha de terminar;
Mas miremos adelante
Es el cielo, nuestro hogar.

ESTROFA 3

Las familias aquí en la Tierra
Se desunen al morir;
Mas esperan la mañana
En que se han de reunir.

ESTROFA 4

Con Jesús, cual unos reyes,
Pronto habremos de estar,
Junto a miles de millares
Con Jesús para morar.`},{id:382,number:382,title:"Gracias te doy, Señor",key:"Mi menor (Em)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Gracias te doy, Señor;
Que tú me redimiste,
Me lavaste en tu sangre,
Me perdonaste;
Gracias, Señor.

CORO

Gracias te doy, Señor,
Gracias te doy, Señor;
Me lavaste, me perdonaste;
Me limpiaste mi corazón.

ESTROFA 2

No hallo cómo servirte,
No hallo cómo agradarte;
Sólo me resta, Señor,
Pedirte perdón;
Perdón, Señor.

ESTROFA 3

Yo era el más malo
De todos los pecadores;
Tú me sacaste del mundo,
Gracias, Señor;
Gracias, Señor.`},{id:385,number:385,title:"Hay una senda",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Hay una senda que el mundo no conoce,
Cristo es la senda que yo pude encontrar.
En Cristo tengo la Salvación de mi alma,
Cristo es la senda que me pudo salvar.

ESTROFA 2

Las amistades y todos mis parientes
Fueron la gente que yo relacioné;
Me aborrecieron por causa de su nombre,
Cuando supieron que a Cristo me entregué.

ESTROFA 3

Aquel camino de tanto sufrimientos
Es el camino que el mundo me trazo,
Fue transformado en aquel feliz momento
Cuando mi Cristo a mi me rescató.`},{id:388,number:388,title:"Aunque en esta Vida",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Aunque en esta Vida
No tengo riquezas
Sé que allá en la gloria
Tengo mi mansión.
De mi alma perdida
Entre la pobreza
Sólo Jesucristo
Tuvo compasión.

CORO

Más allá del sol, más allá del sol
Yo tengo un hogar, hogar, bello hogar,
Más allá del sol.

ESTROFA 2

Así por el mundo
Yo voy caminando
De pruebas rodeado
Y de tentación,
Pero Jesucristo
Que me está probando
Me llevará salvo
Hasta su mansión.

ESTROFA 3

A todas las razas
Del linaje humano
Cristo quiere darles
Plena Salvación,
También una casa
No hecha de mano`},{id:393,number:393,title:"Señor, mi Dios",key:"Do mayor (C)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Señor, mi Dios, al contemplar los cielos
El firmamento y las estrellas mil,
Al oír tu voz en los potentes truenos
Y ver brillar el sol en su cenit.

CORO

Mi corazón entona la canción
Cuán grande es Él, cuán grande es Él.
Mi corazón entona la canción
Cuán grande es Él, cuán grande es Él.

ESTROFA 2

Al recorrer los montes y los valles
Y ver las bellas flores al pasar,
Al escuchar el canto de las aves
Y el murmurar del claro manantial.

ESTROFA 3

Cuando recuerdo del amor Divino
Que desde el cielo el Salvador envío,
Aquel Jesús que por salvarme vino
Y en una Cruz sufrió por mí, y murió.

ESTROFA 4

Cuando el Señor me llame a su presencia
Al dulce hogar, al cielo de esplendor,
Le adoraré cantando su grandeza
De su poder y su infinito amor.`},{id:394,number:394,title:"Cuán gloriosa será la mañana",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Cuán gloriosa será la mañana
Cuando venga Jesús el Salvador,
Las naciones unidas como hermanas
Bienvenida daremos al Señor.

CORO

No habrá necesidad de la luz y el resplandor,
Ni el sol dará su luz ni tampoco su calor.
Allí llanto no habrá, ni tristeza ni dolor
Porque entonces Jesús el Rey del cielo,
Para siempre será el consolador.

ESTROFA 2

Esperemos la mañana gloriosa
Para dar la bienvenida al Dios de amor,
Donde todo será color de rosa
En la santa presencia del Señor.

ESTROFA 3

El cristiano fiel y verdadero
Y también el obrero de valor,
Y la Iglesia esposa del cordero,
Estarán en los brazos del Señor.`},{id:395,number:395,title:"Si en aflicciones",key:"La menor (Am)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Si en aflicciones te sientes morir
Y si en flaquezas tu alma está,
Hay un poder que te ofrece su amor,
Es Jesucristo mi Salvador.

CORO

Animo hermanos, miremos a Jesús,
No desmayemos Cristo aquí está;
Lleno de sangre dispuesto ya está
Para dar ánimo al que desmayó.

ESTROFA 2

Si falta en ti fuerzas para obrar,
Mira el consejo de Cristo el Señor.
No nos cansemos que pago tendrá
El que venciere sin desmayar.

ESTROFA 3

Muy poco tiempo nos queda para estar
Peregrinando en el mundo sin paz
Viene del cielo Jesús nuestro Rey
Para llevarnos con Él a gozar.`},{id:397,number:397,title:"Yo sólo espero ese día",key:"Sol mayor (G)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Yo sólo espero ese día cuando Cristo volverá.
Yo sólo espero ese día cuando Cristo volverá.
Afán y todo trabajo para mí terminará,
Cuando Cristo venga y a su reino me llevará.

ESTROFA 2

Ya no me importa que el mundo,
Me desprecie por doquier
Yo ya no soy de este mundo,
Soy del reino celestial
Yo sólo espero ese día cuando me levantaré
De la tumba fría con un cuerpo ya inmortal.

ESTROFA 3

Entonces allí triunfante
Victorioso ascenderé
Cuando a Cristo en las nubes
Cara a cara le veré.
Allí no habrá más pesares ni tristeza para mi
Con los redimidos al cordero alabaré.`},{id:403,number:403,title:"Yo oí al Salvador",key:"Mi mayor (E)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Yo oí al Salvador decir,
Sígueme, sígueme, sígueme.
En tierno acento pude oír,
Sígueme, sígueme, sígueme.
Sufrí por ti castigo cruel,
Bebí por ti la copa hiel,
Mi Padre te ama, ven a Él,
Sígueme, sígueme, sígueme.

ESTROFA 2

Tú pecado y mal, perdonaré.
Sígueme, sígueme, sígueme.
Y una nueva Vida te daré,
Sígueme, sígueme, sígueme.
En Vida siempre yo seré.
Tu Dios, tu guía y tu Rey,
Tu gozo Eterno yo compré,
Sígueme, sígueme, sígueme.`},{id:404,number:404,title:"Un día mi Señor",key:"Re mayor (D)",time:"4 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Un día mi Señor Jesús se fue
Y a los cielos una nube lo llevó;
Victorioso en su trono se sentó,
Mas un día volverá otra vez.

CORO

Velad, velad, velad, no sabemos
En la hora que Él vendrá.
Orad, orad, orad, pronto viene
Jesús a reinar.

ESTROFA 2

El Señor dijo a los suyos así:
Voy a preparar moradas y volver,
Para que donde yo estoy
Mis servidores fieles también estén.`},{id:405,number:405,title:"Muchas cosas preciosas",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Muchas cosas preciosas
En el cielo tendremos:
Una linda corona
Que será para mí.

CORO

¡Oh, qué feliz! ¡oh, qué feliz!
Cuando estemos allá,
¡Oh, qué feliz!
En las calles de oro.
Qué contento estaré.
¡Oh, qué feliz! ¡oh, qué feliz!
Cuando estemos allá,
¡Oh, qué feliz!
Todos juntos alabando
Al cordero de Dios.

ESTROFA 2

Cristo viene en las nubes
A su Iglesia a buscar;
A santos por millares
Para siempre reinar.

ESTROFA 3

Ya, prepárate Hermano,
Este mundo a dejar,
Nos espera un gran viaje
A la mansión celestial.`},{id:408,number:408,title:"Tan triste y tan lejos",key:"La mayor (A)",time:"3 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Tan triste y tan lejos de Dios me sentí,
Y sin el perdón de Jesús,
Mas cuando su voz amorosa oí
Que dijo, oh, ven a la Cruz.

CORO

Ya todo dejé por andar en la luz,
No moro en tinieblas ya más,
Encuentro la paz en seguir a Jesús
Y vivo en la luz de su faz.

ESTROFA 2

Qué amigo tan dulce es el tierno Jesús,
Tan lleno de paz y amor;
De todo este mundo es la fúlgida luz
El nombre del buen Salvador.

ESTROFA 3

De mi alma el anhelo por siempre será,
Más cerca vivir de la Cruz;
Del Santo poder y pureza me dé,
El nombre del buen Salvador.

ESTROFA 4

¡Oh!, ven a Jesús, ¡oh!, infiel pecador,
No vagues a ciegas ya más,
¡Oh!, ven a Jesús, tu benigno Señor,
Que en Él Salvación hallarás.`},{id:414,number:414,title:"La ciudad celeste",key:"La mayor (A)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Hay una ciudad muy grande y hermosa
Gloriosa ciudad donde no habrá sol
Allí solo irán los que son salvados
Por la sangre preciosa de nuestro Señor.

CORO

Oh yo quiero ir a esa ciudad
Donde morarán los hijos de Dios
Yo quiero vivir junto con los santos
Mi anhelo es estar para siempre allí
Con mi Salvador.

ESTROFA 2

La vida de allí será más hermosa
No habrá más sufrir ni tribulación
Allí solo habrán coros celestiales
Cantando alabanzas para nuestro Dios.

ESTROFA 3

Dicen que hay allí muchos querubines
Sus calles de oro su mar de cristal
Y la luz de allí será el rostro hermoso
Del Señor Jesús que al morir en Cruz nos pudo salvar`},{id:415,number:415,title:"La mano de mi Dios",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

A dónde volveré mis ojos, oh Señor
Para esperar ayuda
De quien sino de ti sustento me vendrá
En horas de aflicción
En sombras o en luz envuelto en la quietud
Si oro me sustentas
En paz o en aflicción la mano de mi Dios
Me da seguridad.

CORO

Dame tu mano; toma la mía, Dios amado.
Cuando soy débil me hace más fuerte tu Poder,
Tu compañía y tu calor, divina mano,
Me lleva al cielo donde un día te veré.

ESTROFA 2

Riquezas y poder, fama y celebridad,
Rasguñaban mis manos
Tratando de alcanzar lo que podría lograr
Como el supremo ideal
Pero al mirarte a ti de pronto comprendí
Que estaba equivocado
Un mundo descubrí más allá de la Cruz,
Donde sangró tu mano`},{id:416,number:416,title:"Sólo en Dios",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Sólo en Dios,
Mi alma espera y de Él viene mi salud,
Pues Él es
Mi refugio y en tinieblas no andaré
Y aún, me consuela si me
Encuentro en aflicción
Y en Él encuentro Gloria y
Ésta es mi Salvación.

CORO

Oh Jehová, de mañana oirás mi oración
De mañana me presentaré ante ti,
Porque tú eres la razón de mi existir
Y yo sé, que no eres Dios que se
complace en la maldad,
Pues lo malo junto a ti no habitará,
Ni tus ojos mirarán la iniquidad.
Así eres tú, así eres tú.

ESTROFA 2

Y aquí estoy de rodillas meditando
Mi oración,
Porque sé, que de lo alto tú me
Envías el perdón
Y también sentir yo quiero dentro
De mi corazón
Esa paz, que día a día tú me entregas
En tu amor.`},{id:419,number:419,title:"De la cumbre del Calvario",key:"Mi menor (Em)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

De la cumbre del Calvario
Donde el Salvador murió
Un sonido melodioso
Viene a nuestro corazón.

CORO

El rescate está pagado,
Ya eres libre, pecador.
El rescate está pagado,
¡Ya eres libre, pecador!

ESTROFA 2

De Jesús la sangre pura
El pecado ya bebió
Si hay quien gime es porque ignora
La divina Redención.

ESTROFA 3

El Señor nos justifica
Pues su sangre ya vertió
De las penas estamos libres
Si aceptamos el perdón.

ESTROFA 4

Con sus llagas queda hecha
De la culpa expiación
Descarriado ve a Cristo
Y seguirle con amor.`},{id:420,number:420,title:"Guerreros fieles somos",key:"",time:"",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Guerreros fieles somos
De Dios y la verdad
Llevamos por emblema
Virtud y santidad
El mundo para Cristo
Es nuestro noble fin
Salgamos valerosos, pues
Ya suena el clarín.

CORO

Sin vacilar marchad soldados de Jesús
Y por la Cruz luchad, armados de virtud
Sin descansar corred las almas a salvar
Los perdidos en maldad al Salvador llevad.

ESTROFA 2

Las almas por millones
Sin Dios ni Salvación
Se lanzan al abismo de
Eterna perdición
Aunque están sumidas
En vicio y maldad
Jesús murió por rescatar
Y darles libertad.

ESTROFA 3

Las huestes enemigas
En orden ya están
Sus tropas infernales
Mandadas por Satán
Valor pues mis hermanos`},{id:421,number:421,title:"La Iglesia del Señor",key:"Do mayor (C)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

La iglesia del Señor, ¿cuál será?
La iglesia del Señor, ¿cuál será?
Es aquella que en el nombre del Señor,
Sana enfermos, echa fuera demonios,
Es aquella que rescata al pecador,
Esa, sí, es la iglesia del Señor.`},{id:422,number:422,title:"Cuando Venga el Señor",key:"Do mayor (C)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Cuando venga el Señor,
Y te pregunte por tu talento,
¿Qué dirás al Señor,
Del talento que Cristo te dio?
Multiplícalo, multiplícalo,
Multiplica, hermano, tu talento,
Multiplícalo, multiplícalo,
El talento que Cristo te dio.`},{id:427,number:427,title:"Cristo Es Sin Igual",key:"La",time:"",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Cristo es sin igual, sin igual, sin igual,
Cristo es sin igual para mí:
No hay otro Salvador, no hay otro Sanador,
Cristo es sin igual para mí.`},{id:428,number:428,title:"Yo Estoy Sin Igual",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Yo estoy contento, porque soy de Cristo,
Yo estoy contento, porque soy de Cristo,
Yo estoy contento, porque soy de Cristo,
Aquí y en la eternidad.
Yo he nacido para alabar al Cordero,
Yo he nacido para alabar al Cordero,
Yo he nacido para alabar al Cordero,
Aquí y en la eternidad.`},{id:430,number:430,title:"Cuando el Alma Está Llena de Amor",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Cuando el alma está llena de amor,
Cuando el alma está llena de amor,
Es muy fácil orar durante el día y cantar,
Cuando el alma está llena de amor.
Cuando el alma está triste y vacía,
Cuando el alma está triste y vacía,
Es difícil orar durante el día y cantar,
Cuando el alma está triste y vacía.`},{id:431,number:431,title:"Cristo Es la Peña",key:"Re mayor (D)",time:"Tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Cristo es la Peña de Horeb
Que está brotando
Agua de vida saludable para mí.
Ven a beber, es más dulce que la miel.
Refresca el alma,
Satisface nuestro ser.
Cristo es la Peña de Horeb
Que está brotando
Agua de vida saludable para mí.`},{id:433,number:433,title:"Hay Vida en Jesús",key:"Mi mayor (E)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Hay vida, hay vida en Jesús,
Hay vida, hay vida en Jesús.
Yo voy a morar a la patria celestial
Porque hay vida, hay vida en Jesús.

ESTROFA 2

Hay gozo, hay gozo en Jesús.
Hay gozo, hay gozo en Jesús,
Yo voy a morar a la patria celestial
Porque hay gozo, hay gozo en Jesús.

ESTROFA 3

Hay triunfo, hay triunfo en Jesús,
Hay triunfo, hay triunfo en Jesús,
Yo voy a morar a la patria celestial
Porque hay triunfo, hay triunfo en Jesús.

ESTROFA 4

Hay vida, gozo y triunfo en Jesús,
Hay vida, gozo y triunfo en Jesús,
Yo voy a morar a la patria celestial
Porque hay vida, gozo y triunfo en Jesús.`},{id:434,number:434,title:"Estoy Alegre",key:"Re mayor (D)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Estoy alegre, alegre, muy alegre,
Estoy alegre, porque Cristo me salvó,
Estoy alegre, alegre, muy alegre,
Estoy alegre, porque Cristo me salvó.`},{id:439,number:439,title:"Que Vuelva Atrás",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Que vuelvas atrás, que vuelvas atrás
Me dice el mundo con toda su maldad
Y yo respondo que ahora voy buscando,
Buscando fe, esperanza y caridad.
Quiero llegar, quiero llegar
A ser un hombre de experiencia espiritual,
Y así el Señor Jesús me irá guiando
Hasta llegar al trono de Jehová.`},{id:443,number:443,title:"Grande Amor",key:"La mayor (A)",time:"",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Grande amor...
Profundo amor...
Perfecto amor...
El de Cristo Jesús..
Para mí
No lo puedo entender,
Pero él me ama
No lo comprendo
Pero él me cubrirá.
Todo mi ser
Se llena de él
Porque profundo y perfecto
Es su amor.`},{id:445,number:445,title:"Cristo el Nombre",key:"Sol mayor (G)",time:"",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Cristo el Nombre que me ha dado nueva vida
La pena y la penumbra te has llevado
El nombre de mi Cristo me ha dado nueva vida.
Sólo Cristo me ha dado la esperanza
De vivir aquí, mis fuerzas flanqueaban
De no haber sido por ti
Mi vida en penumbra se habría quedado
Necesito un toque de ti
Necesito un toque de ti
Que tu Espíritu Santo me llene, Señor
Necesito un toque de ti.`},{id:446,number:446,title:"Eres el Más Precioso",key:"Mi mayor (E)",time:"",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Eres el más precioso
Eres el más hermoso
Palabras faltarían para decir
Que tú eres el grande
Eres incomparable
La razón por la que vivo es por ti.
Toda mi vida está en ti.
Todos mis sueños están en ti.
Todo lo que soy y espero ser,
Está en la persona de Jesús.`},{id:447,number:447,title:"Cuán Bello Es el Señor",key:"Re mayor (D)",time:"",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Cuán bello es el Señor
Cuán hermoso es el Señor
Cuán bello es el Señor
Hoy le quiero adorar.
La belleza de mi Señor
Nunca se agotará
La hermosura de mi Señor
Siempre resplandecerá.`},{id:449,number:449,title:"Es Magnífico Jesucristo",key:"La mayor (A)",time:"",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Es magnífico, Jesucristo
Maravilloso, omnipotente, glorioso
Él me ama me perdona
Dio su vida, dio su sangre, para salvarme.`},{id:451,number:451,title:"Adonai",key:"",time:"",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

¡Oh, Adonai; oh, Adonai!
Dios del universo.
Señor de la creación.
Porque tú al justo bendecirás
Como un escudo lo rodearás.`},{id:460,number:460,title:"Has Cambiado Mi Lamento en Baile",key:"",time:"",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Has cambiado mi lamento en baile,
Me ceñiste todo de alegría.
Has cambiado mi lamento en baile,
Me ceñiste todo de alegría.
Por tanto a ti cantaré,
Gloria mía, gloria mía,
Y sólo a ti danzaré,
Gloria mía, gloria mí.`},{id:462,number:462,title:"Sumérgeme",key:"",time:"",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Cansado del camino
Sediento de ti.
Un desierto he cruzado
Sin fuerzas he quedado
Vengo a ti.
Luché como un soldado
Y a veces sufrí
Y aunque la lucha he ganado
Mi armadura he desgastado
Vengo a ti.

CORO

Sumérgeme en el río de tu Espíritu
Necesito refrescar
Este seco corazón
Sediento de ti
Sumérgeme.`},{id:463,number:463,title:"Sentado en Su Trono",key:"",time:"",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Sentado en su trono
Rodeado de luz
A la diestra del Padre
Gobierna Jesús
Con ojos de fuego
Y rostro de sol
Cuando abre su boca
Es trueno su voz

CORO

Poderoso, en Majestad y Reino; Poderoso
Poderoso en Potestad e Imperio
Poderoso.

ESTROFA 2

Un gran arcoíris corona su ser
Él es el Cordero que pudo vencer
Él es el primero
Él es el postrer
Y arrojan coronas
Delante de Él
Poderoso.`},{id:465,number:465,title:"Divino Compañero del Camino",key:"",time:"",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

Divino compañero del camino,
Tu presencia siento yo al transitar,
Tú has disipado toda sombra,
Ya tengo luz, la luz bendita de tu amor.

CORO

Quédate, Señor, que se hace tarde
Te ofrezco el corazón para posar.
Hazlo tu morada permanente,
Acéptalo, acéptalo mi Salvador.

ESTROFA 2

La sombra de la noche se aproxima
Y sobre ella el tentador acechará,
No me dejes solo en el camino,
Ayúdame, ayúdame hasta llegar.

ESTROFA 3

Contigo la jornada se hace corta,
No habrá sed ni el sol fatigará,
En el mar las olas amenazan
Y sobre ellas majestuoso tú andarás.`}],Kf=["General","Devocional","Predicación","Congregacional","Fúnebre","Coritos"],Qe={fontSize:1.1,chordSize:.95,keepAwake:!1,theme:"dark",chordNotation:"spanish"},Xf="Pr. Marcos Carreño M.",Os="marcos.carreno.m@gmail.com",Zf="1.1";function ey(){const[e,r]=O.useState(()=>{const t=localStorage.getItem("iprec_favorites");return t?JSON.parse(t):[]});return O.useEffect(()=>{localStorage.setItem("iprec_favorites",JSON.stringify(e))},[e]),[e,t=>{r(a=>a.includes(t)?a.filter(o=>o!==t):[...a,t])}]}function ry(){const[e,r]=O.useState(()=>{try{const t=localStorage.getItem("iprec_settings");return t?{...Qe,...JSON.parse(t)}:Qe}catch{return Qe}});return O.useEffect(()=>{localStorage.setItem("iprec_settings",JSON.stringify(e))},[e]),[e,t=>{r(a=>({...a,...t}))}]}function ny(){const e=mt();return e.pathname.includes("/song/")?null:f.jsxs("div",{className:"bottom-nav",children:[f.jsxs(xn,{to:"/",className:`nav-item ${e.pathname==="/"?"active":""}`,children:[f.jsx(Qf,{size:24}),f.jsx("span",{children:"Inicio"})]}),f.jsxs(xn,{to:"/favoritos",className:`nav-item ${e.pathname==="/favoritos"?"active":""}`,children:[f.jsx($c,{size:24}),f.jsx("span",{children:"Favoritos"})]}),f.jsxs(xn,{to:"/especiales",className:`nav-item ${e.pathname==="/especiales"?"active":""}`,children:[f.jsx(Wf,{size:24}),f.jsx("span",{children:"Especiales"})]}),f.jsxs(xn,{to:"/ajustes",className:`nav-item ${e.pathname==="/ajustes"?"active":""}`,children:[f.jsx(Wc,{size:24}),f.jsx("span",{children:"Ajustes"})]})]})}function so({title:e,filterType:r,favoritesList:n}){const[t,a]=O.useState(""),[o,l]=O.useState("Todas"),i=Kc.filter(d=>!(r==="all"&&d.isSpecial||r==="favorites"&&(!n||!n.includes(d.id))||r==="specials"&&!d.isSpecial)),u=["Todas",...Kf.filter(d=>i.some(y=>y.category===d))],h=i.filter(d=>{if(o!=="Todas"&&d.category!==o)return!1;const y=t.toLowerCase(),g=d.title.toLowerCase().includes(y),S=d.number?d.number.toString().includes(y):!1;return g||S}).sort((d,y)=>{const g=Number(d.number||d.id),S=Number(y.number||y.id);return g-S});return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"header",children:[f.jsx("h1",{children:e}),f.jsx("select",{className:"filter-select",value:o,onChange:d=>l(d.target.value),children:u.map(d=>f.jsx("option",{value:d,children:d},d))})]}),f.jsxs("div",{className:"main-content",children:[f.jsxs("div",{className:"search-container",children:[f.jsx($f,{style:{position:"absolute",left:"32px",marginTop:"14px",color:"var(--text-secondary)"},size:20}),f.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar por título o número...",value:t,onChange:d=>a(d.target.value)})]}),f.jsxs("div",{className:"song-list",children:[h.map(d=>f.jsxs(xn,{to:`/song/${d.id}`,className:"song-item",children:[f.jsx("div",{className:"song-number",children:d.number||d.id}),f.jsxs("div",{className:"song-details",children:[f.jsx("h2",{children:d.title}),f.jsxs("p",{children:[f.jsx("span",{children:d.artist}),d.category&&f.jsx("span",{className:"category-badge",children:d.category}),d.key&&f.jsxs("span",{className:"category-badge",children:["Tono: ",d.key]})]})]})]},d.id)),h.length===0&&f.jsx("p",{style:{textAlign:"center",color:"var(--text-secondary)",marginTop:"2rem"},children:"No se encontraron alabanzas"})]})]})]})}function ty({favorites:e,toggleFavorite:r,settings:n}){const{id:t}=af(),a=Vc(),o=parseInt(t),l=Kc.find(c=>c.id===o),[i,s]=O.useState(0),[u,h]=O.useState(!1),d=(n==null?void 0:n.fontSize)||Qe.fontSize,y=(n==null?void 0:n.chordSize)||Qe.chordSize,g=(n==null?void 0:n.keepAwake)||!1,S=(n==null?void 0:n.chordNotation)||"spanish";if(O.useEffect(()=>{let c=null;const m=async()=>{try{g&&"wakeLock"in navigator&&(c=await navigator.wakeLock.request("screen"))}catch(R){console.log("Wake Lock no disponible:",R)}};m();const v=()=>{document.visibilityState==="visible"&&m()};return document.addEventListener("visibilitychange",v),()=>{document.removeEventListener("visibilitychange",v),c&&c.release().catch(()=>{})}},[g]),!l)return f.jsx("div",{className:"main-content",children:"Canción no encontrada"});const E=e.includes(o),T=c=>{let m=i+c;m>11&&(m-=12),m<-11&&(m+=12),s(m)},p=c=>{const m=c.trim();return/^(ESTROFA|CORO|PUENTE|INTRO|FINAL|VERSO|PRE-CORO|PRECORO|INTERLUDIO|CORO FINAL)(\s+\d+)?\s*:?$/i.test(m)};return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"header",style:{padding:"1rem 1.5rem"},children:[f.jsx("button",{className:"btn",style:{padding:"0.5rem",backgroundColor:"transparent"},onClick:()=>a(-1),children:f.jsx(Vf,{size:24})}),f.jsxs("div",{className:"song-viewer-title",children:[f.jsxs("div",{className:"song-type-label",children:[l.isSpecial?"ESPECIAL":"HIMNO"," ",l.number||l.id]}),f.jsx("h1",{children:l.title}),(l.key||l.time)&&f.jsxs("div",{className:"song-key-line",children:[f.jsx("span",{className:"song-note-symbol",children:"♪"}),l.key&&f.jsx("span",{children:l.key}),l.key&&l.time&&f.jsx("span",{children:"-"}),l.time&&f.jsx("span",{children:l.time})]})]}),f.jsx("button",{className:`favorite-btn ${E?"active":""}`,onClick:()=>r(o),children:f.jsx($c,{size:24,fill:E?"currentColor":"none"})})]}),f.jsxs("div",{className:"main-content",children:[f.jsxs("div",{className:"controls-bar",children:[f.jsxs("button",{className:`btn chord-toggle-btn ${u?"active":""}`,onClick:()=>h(!u),children:[u?f.jsx(If,{size:18}):f.jsx(Jf,{size:18}),u?"Ocultar Acordes":"Mostrar Acordes"]}),u&&f.jsxs("div",{className:"transpose-controls",children:[f.jsx("button",{className:"btn",onClick:()=>T(-1),children:f.jsx(Uf,{size:18})}),f.jsx("span",{className:"transpose-value",children:i>0?`+${i}`:i}),f.jsx("button",{className:"btn",onClick:()=>T(1),children:f.jsx(Bf,{size:18})})]})]}),f.jsx("div",{className:`lyrics ${u?"with-chords":"without-chords"}`,style:{"--lyrics-font-size":`${d}rem`,"--chord-font-size":`${y}rem`},children:l.lyrics.split(`
`).map((c,m)=>{const v=c.trim();if(v==="")return f.jsx("div",{className:"lyric-spacer"},m);if(p(v))return f.jsx("div",{className:"section-title",children:v},m);const R=Yf(c,i,S);return f.jsx("div",{className:"chord-line-container",children:R.map((z,k)=>f.jsxs("div",{className:z.isSpace?"space-group":"word-group",children:[!z.isSpace&&u&&f.jsx("span",{className:`chord-label ${z.chord?"":"empty-chord"}`,children:z.chord||""}),!z.isSpace&&f.jsx("span",{className:"lyric-text",children:z.text||" "})]},k))},m)})})]})]})}function ay({settings:e,updateSettings:r}){const n=Math.round(e.fontSize/Qe.fontSize*100),t=Math.round(e.chordSize/Qe.chordSize*100),a=typeof navigator<"u"&&"wakeLock"in navigator;return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"header",children:[f.jsx("h1",{children:"Ajustes"}),f.jsx(Wc,{size:24,color:"var(--accent)"})]}),f.jsxs("div",{className:"main-content",children:[f.jsxs("div",{className:"settings-card",children:[f.jsx("h2",{children:"Apariencia"}),f.jsx("p",{className:"settings-muted",children:"Elige cómo quieres visualizar el himnario."}),f.jsxs("div",{className:"theme-options",children:[f.jsxs("button",{className:`theme-option ${e.theme==="dark"?"active":""}`,onClick:()=>r({theme:"dark"}),children:[f.jsx("span",{className:"theme-preview dark-preview"}),f.jsx("strong",{children:"Oscuro"})]}),f.jsxs("button",{className:`theme-option ${e.theme==="light"?"active":""}`,onClick:()=>r({theme:"light"}),children:[f.jsx("span",{className:"theme-preview light-preview"}),f.jsx("strong",{children:"Claro"})]})]})]}),f.jsxs("div",{className:"settings-card",children:[f.jsx("h2",{children:"Escala de acordes"}),f.jsx("p",{className:"settings-muted",children:"Elige cómo quieres visualizar las notas musicales."}),f.jsxs("div",{className:"notation-options",children:[f.jsxs("button",{className:`notation-option ${e.chordNotation==="spanish"?"active":""}`,onClick:()=>r({chordNotation:"spanish"}),children:[f.jsx("strong",{children:"Española"}),f.jsx("span",{children:"Do · Re · Mi · Fa · Sol · La · Si"})]}),f.jsxs("button",{className:`notation-option ${e.chordNotation==="english"?"active":""}`,onClick:()=>r({chordNotation:"english"}),children:[f.jsx("strong",{children:"Inglesa"}),f.jsx("span",{children:"C · D · E · F · G · A · B"})]})]})]}),f.jsxs("div",{className:"settings-card",children:[f.jsx("h2",{children:"Tamaño de letra"}),f.jsxs("div",{className:"setting-group",children:[f.jsxs("div",{className:"setting-label-row",children:[f.jsx("label",{children:"Letra de la alabanza"}),f.jsxs("span",{children:[n,"%"]})]}),f.jsx("input",{className:"setting-range",type:"range",min:"0.85",max:"1.8",step:"0.05",value:e.fontSize,onChange:o=>r({fontSize:Number(o.target.value)})}),f.jsxs("div",{className:"settings-preview",style:{"--preview-font-size":`${e.fontSize}rem`},children:[f.jsx("p",{className:"preview-title",children:"Vista previa de letra"}),f.jsx("p",{className:"preview-lyrics-text",children:"Firmes y adelante, huestes de la fe"})]})]})]}),f.jsxs("div",{className:"settings-card",children:[f.jsx("h2",{children:"Tamaño de acordes"}),f.jsxs("div",{className:"setting-group",children:[f.jsxs("div",{className:"setting-label-row",children:[f.jsx("label",{children:"Acordes sobre la letra"}),f.jsxs("span",{children:[t,"%"]})]}),f.jsx("input",{className:"setting-range",type:"range",min:"0.75",max:"1.5",step:"0.05",value:e.chordSize,onChange:o=>r({chordSize:Number(o.target.value)})}),f.jsxs("div",{className:"settings-preview chord-preview",style:{"--preview-font-size":`${e.fontSize}rem`,"--preview-chord-size":`${e.chordSize}rem`},children:[f.jsx("p",{className:"preview-title",children:"Vista previa de acordes"}),f.jsxs("div",{className:"preview-chord-line",children:[f.jsxs("span",{className:"preview-word",children:[f.jsx("span",{className:"preview-chord",children:"Do"}),f.jsx("span",{className:"preview-text",children:"Firmes"})]}),f.jsx("span",{className:"preview-space"}),f.jsxs("span",{className:"preview-word",children:[f.jsx("span",{className:"preview-chord empty-preview-chord",children:"."}),f.jsx("span",{className:"preview-text",children:"y"})]}),f.jsx("span",{className:"preview-space"}),f.jsxs("span",{className:"preview-word",children:[f.jsx("span",{className:"preview-chord",children:"Sol"}),f.jsx("span",{className:"preview-text",children:"adelante"})]})]})]})]}),f.jsx("button",{className:"btn",style:{marginTop:"1rem"},onClick:()=>r({fontSize:Qe.fontSize,chordSize:Qe.chordSize}),children:"Restablecer tamaños"})]}),f.jsxs("div",{className:"settings-card",children:[f.jsx("h2",{children:"Lectura"}),f.jsxs("div",{className:"toggle-row",children:[f.jsxs("div",{children:[f.jsx("strong",{children:"Mantener pantalla activa"}),f.jsx("p",{children:"Evita que la pantalla se bloquee mientras estás leyendo una alabanza."}),!a&&f.jsx("p",{className:"settings-warning",children:"Tu navegador puede no permitir esta función."})]}),f.jsxs("label",{className:"toggle-switch",children:[f.jsx("input",{type:"checkbox",checked:e.keepAwake,onChange:o=>r({keepAwake:o.target.checked})}),f.jsx("span",{})]})]})]}),f.jsxs("div",{className:"settings-card",children:[f.jsx("h2",{children:"Contacto"}),f.jsx("p",{children:"Para sugerencias, correcciones de letra, errores en acordes o fallas de la aplicación, puedes escribir al correo:"}),f.jsx("a",{className:"contact-link",href:`mailto:${Os}`,children:Os})]}),f.jsxs("div",{className:"settings-card",children:[f.jsx("h2",{children:"Acerca de"}),f.jsxs("div",{className:"about-row",children:[f.jsx("span",{children:"Aplicación"}),f.jsx("strong",{children:"Himnario Digital IPREC"})]}),f.jsxs("div",{className:"about-row",children:[f.jsx("span",{children:"Versión"}),f.jsx("strong",{children:Zf})]}),f.jsxs("div",{className:"about-row",children:[f.jsx("span",{children:"Contenido"}),f.jsx("strong",{children:"Himnos, coritos y especiales"})]}),f.jsx("p",{className:"settings-muted",children:"Aplicación creada para apoyar la lectura, búsqueda y acompañamiento musical de alabanzas congregacionales."})]}),f.jsxs("div",{className:"developer-watermark",children:["Desarrollada por ",Xf]})]})]})}function oy(){const[e,r]=ey(),[n,t]=ry();return O.useEffect(()=>{document.documentElement.setAttribute("data-theme",n.theme)},[n.theme]),f.jsx(kf,{children:f.jsxs("div",{className:"app-container",children:[f.jsxs(Cf,{children:[f.jsx(Yr,{path:"/",element:f.jsx(so,{title:"Himnario IPREC",filterType:"all"})}),f.jsx(Yr,{path:"/favoritos",element:f.jsx(so,{title:"Mis Favoritos",filterType:"favorites",favoritesList:e})}),f.jsx(Yr,{path:"/especiales",element:f.jsx(so,{title:"Coros Especiales",filterType:"specials"})}),f.jsx(Yr,{path:"/ajustes",element:f.jsx(ay,{settings:n,updateSettings:t})}),f.jsx(Yr,{path:"/song/:id",element:f.jsx(ty,{favorites:e,toggleFavorite:r,settings:n})})]}),f.jsx(ny,{})]})})}uo.createRoot(document.getElementById("root")).render(f.jsx(Ns.StrictMode,{children:f.jsx(oy,{})}));
