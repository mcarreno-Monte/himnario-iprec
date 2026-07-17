function Zc(e,r){for(var n=0;n<r.length;n++){const a=r[n];if(typeof a!="string"&&!Array.isArray(a)){for(const t in a)if(t!=="default"&&!(t in e)){const o=Object.getOwnPropertyDescriptor(a,t);o&&Object.defineProperty(e,t,o.get?o:{enumerable:!0,get:()=>a[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function ed(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rs={exports:{}},ht={},As={exports:{}},x={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var la=Symbol.for("react.element"),rd=Symbol.for("react.portal"),nd=Symbol.for("react.fragment"),ad=Symbol.for("react.strict_mode"),td=Symbol.for("react.profiler"),od=Symbol.for("react.provider"),ld=Symbol.for("react.context"),id=Symbol.for("react.forward_ref"),sd=Symbol.for("react.suspense"),ud=Symbol.for("react.memo"),cd=Symbol.for("react.lazy"),ti=Symbol.iterator;function dd(e){return e===null||typeof e!="object"?null:(e=ti&&e[ti]||e["@@iterator"],typeof e=="function"?e:null)}var Ts={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zs=Object.assign,Fs={};function yn(e,r,n){this.props=e,this.context=r,this.refs=Fs,this.updater=n||Ts}yn.prototype.isReactComponent={};yn.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ps(){}Ps.prototype=yn.prototype;function il(e,r,n){this.props=e,this.context=r,this.refs=Fs,this.updater=n||Ts}var sl=il.prototype=new Ps;sl.constructor=il;zs(sl,yn.prototype);sl.isPureReactComponent=!0;var oi=Array.isArray,ks=Object.prototype.hasOwnProperty,ul={current:null},ws={key:!0,ref:!0,__self:!0,__source:!0};function Ds(e,r,n){var a,t={},o=null,l=null;if(r!=null)for(a in r.ref!==void 0&&(l=r.ref),r.key!==void 0&&(o=""+r.key),r)ks.call(r,a)&&!ws.hasOwnProperty(a)&&(t[a]=r[a]);var i=arguments.length-2;if(i===1)t.children=n;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];t.children=s}if(e&&e.defaultProps)for(a in i=e.defaultProps,i)t[a]===void 0&&(t[a]=i[a]);return{$$typeof:la,type:e,key:o,ref:l,props:t,_owner:ul.current}}function md(e,r){return{$$typeof:la,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function cl(e){return typeof e=="object"&&e!==null&&e.$$typeof===la}function pd(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return r[n]})}var li=/\/+/g;function bt(e,r){return typeof e=="object"&&e!==null&&e.key!=null?pd(""+e.key):r.toString(36)}function Na(e,r,n,a,t){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case la:case rd:l=!0}}if(l)return l=e,t=t(l),e=a===""?"."+bt(l,0):a,oi(t)?(n="",e!=null&&(n=e.replace(li,"$&/")+"/"),Na(t,r,n,"",function(u){return u})):t!=null&&(cl(t)&&(t=md(t,n+(!t.key||l&&l.key===t.key?"":(""+t.key).replace(li,"$&/")+"/")+e)),r.push(t)),1;if(l=0,a=a===""?".":a+":",oi(e))for(var i=0;i<e.length;i++){o=e[i];var s=a+bt(o,i);l+=Na(o,r,n,s,t)}else if(s=dd(e),typeof s=="function")for(e=s.call(e),i=0;!(o=e.next()).done;)o=o.value,s=a+bt(o,i++),l+=Na(o,r,n,s,t);else if(o==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function ya(e,r,n){if(e==null)return e;var a=[],t=0;return Na(e,a,"","",function(o){return r.call(n,o,t++)}),a}function fd(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},ja={transition:null},yd={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:ja,ReactCurrentOwner:ul};function xs(){throw Error("act(...) is not supported in production builds of React.")}x.Children={map:ya,forEach:function(e,r,n){ya(e,function(){r.apply(this,arguments)},n)},count:function(e){var r=0;return ya(e,function(){r++}),r},toArray:function(e){return ya(e,function(r){return r})||[]},only:function(e){if(!cl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};x.Component=yn;x.Fragment=nd;x.Profiler=td;x.PureComponent=il;x.StrictMode=ad;x.Suspense=sd;x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yd;x.act=xs;x.cloneElement=function(e,r,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=zs({},e.props),t=e.key,o=e.ref,l=e._owner;if(r!=null){if(r.ref!==void 0&&(o=r.ref,l=ul.current),r.key!==void 0&&(t=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in r)ks.call(r,s)&&!ws.hasOwnProperty(s)&&(a[s]=r[s]===void 0&&i!==void 0?i[s]:r[s])}var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){i=Array(s);for(var u=0;u<s;u++)i[u]=arguments[u+2];a.children=i}return{$$typeof:la,type:e.type,key:t,ref:o,props:a,_owner:l}};x.createContext=function(e){return e={$$typeof:ld,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:od,_context:e},e.Consumer=e};x.createElement=Ds;x.createFactory=function(e){var r=Ds.bind(null,e);return r.type=e,r};x.createRef=function(){return{current:null}};x.forwardRef=function(e){return{$$typeof:id,render:e}};x.isValidElement=cl;x.lazy=function(e){return{$$typeof:cd,_payload:{_status:-1,_result:e},_init:fd}};x.memo=function(e,r){return{$$typeof:ud,type:e,compare:r===void 0?null:r}};x.startTransition=function(e){var r=ja.transition;ja.transition={};try{e()}finally{ja.transition=r}};x.unstable_act=xs;x.useCallback=function(e,r){return ue.current.useCallback(e,r)};x.useContext=function(e){return ue.current.useContext(e)};x.useDebugValue=function(){};x.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};x.useEffect=function(e,r){return ue.current.useEffect(e,r)};x.useId=function(){return ue.current.useId()};x.useImperativeHandle=function(e,r,n){return ue.current.useImperativeHandle(e,r,n)};x.useInsertionEffect=function(e,r){return ue.current.useInsertionEffect(e,r)};x.useLayoutEffect=function(e,r){return ue.current.useLayoutEffect(e,r)};x.useMemo=function(e,r){return ue.current.useMemo(e,r)};x.useReducer=function(e,r,n){return ue.current.useReducer(e,r,n)};x.useRef=function(e){return ue.current.useRef(e)};x.useState=function(e){return ue.current.useState(e)};x.useSyncExternalStore=function(e,r,n){return ue.current.useSyncExternalStore(e,r,n)};x.useTransition=function(){return ue.current.useTransition()};x.version="18.3.1";As.exports=x;var O=As.exports;const Ns=ed(O),hd=Zc({__proto__:null,default:Ns},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd=O,gd=Symbol.for("react.element"),Sd=Symbol.for("react.fragment"),Ed=Object.prototype.hasOwnProperty,Cd=vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Od={key:!0,ref:!0,__self:!0,__source:!0};function js(e,r,n){var a,t={},o=null,l=null;n!==void 0&&(o=""+n),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(l=r.ref);for(a in r)Ed.call(r,a)&&!Od.hasOwnProperty(a)&&(t[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps,r)t[a]===void 0&&(t[a]=r[a]);return{$$typeof:gd,type:e,key:o,ref:l,props:t,_owner:Cd.current}}ht.Fragment=Sd;ht.jsx=js;ht.jsxs=js;Rs.exports=ht;var f=Rs.exports,co={},qs={exports:{}},Ee={},Ls={exports:{}},bs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(F,w){var D=F.length;F.push(w);e:for(;0<D;){var J=D-1>>>1,K=F[J];if(0<t(K,w))F[J]=w,F[D]=K,D=J;else break e}}function n(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var w=F[0],D=F.pop();if(D!==w){F[0]=D;e:for(var J=0,K=F.length,pa=K>>>1;J<pa;){var Or=2*(J+1)-1,Lt=F[Or],Rr=Or+1,fa=F[Rr];if(0>t(Lt,D))Rr<K&&0>t(fa,Lt)?(F[J]=fa,F[Rr]=D,J=Rr):(F[J]=Lt,F[Or]=D,J=Or);else if(Rr<K&&0>t(fa,D))F[J]=fa,F[Rr]=D,J=Rr;else break e}}return w}function t(F,w){var D=F.sortIndex-w.sortIndex;return D!==0?D:F.id-w.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var s=[],u=[],h=1,d=null,y=3,g=!1,S=!1,E=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(F){for(var w=n(u);w!==null;){if(w.callback===null)a(u);else if(w.startTime<=F)a(u),w.sortIndex=w.expirationTime,r(s,w);else break;w=n(u)}}function v(F){if(E=!1,m(F),!S)if(n(s)!==null)S=!0,jt(R);else{var w=n(u);w!==null&&qt(v,w.startTime-F)}}function R(F,w){S=!1,E&&(E=!1,p(k),k=-1),g=!0;var D=y;try{for(m(w),d=n(s);d!==null&&(!(d.expirationTime>w)||F&&!Pe());){var J=d.callback;if(typeof J=="function"){d.callback=null,y=d.priorityLevel;var K=J(d.expirationTime<=w);w=e.unstable_now(),typeof K=="function"?d.callback=K:d===n(s)&&a(s),m(w)}else a(s);d=n(s)}if(d!==null)var pa=!0;else{var Or=n(u);Or!==null&&qt(v,Or.startTime-w),pa=!1}return pa}finally{d=null,y=D,g=!1}}var z=!1,P=null,k=-1,V=5,N=-1;function Pe(){return!(e.unstable_now()-N<V)}function gn(){if(P!==null){var F=e.unstable_now();N=F;var w=!0;try{w=P(!0,F)}finally{w?Sn():(z=!1,P=null)}}else z=!1}var Sn;if(typeof c=="function")Sn=function(){c(gn)};else if(typeof MessageChannel<"u"){var ai=new MessageChannel,Xc=ai.port2;ai.port1.onmessage=gn,Sn=function(){Xc.postMessage(null)}}else Sn=function(){A(gn,0)};function jt(F){P=F,z||(z=!0,Sn())}function qt(F,w){k=A(function(){F(e.unstable_now())},w)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){S||g||(S=!0,jt(R))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(F){switch(y){case 1:case 2:case 3:var w=3;break;default:w=y}var D=y;y=w;try{return F()}finally{y=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,w){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var D=y;y=F;try{return w()}finally{y=D}},e.unstable_scheduleCallback=function(F,w,D){var J=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?J+D:J):D=J,F){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=D+K,F={id:h++,callback:w,priorityLevel:F,startTime:D,expirationTime:K,sortIndex:-1},D>J?(F.sortIndex=D,r(u,F),n(s)===null&&F===n(u)&&(E?(p(k),k=-1):E=!0,qt(v,D-J))):(F.sortIndex=K,r(s,F),S||g||(S=!0,jt(R))),F},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(F){var w=y;return function(){var D=y;y=w;try{return F.apply(this,arguments)}finally{y=D}}}})(bs);Ls.exports=bs;var Rd=Ls.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad=O,Se=Rd;function C(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ms=new Set,Hn={};function br(e,r){sn(e,r),sn(e+"Capture",r)}function sn(e,r){for(Hn[e]=r,e=0;e<r.length;e++)Ms.add(r[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mo=Object.prototype.hasOwnProperty,Td=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ii={},si={};function zd(e){return mo.call(si,e)?!0:mo.call(ii,e)?!1:Td.test(e)?si[e]=!0:(ii[e]=!0,!1)}function Fd(e,r,n,a){if(n!==null&&n.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Pd(e,r,n,a){if(r===null||typeof r>"u"||Fd(e,r,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function ce(e,r,n,a,t,o,l){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=t,this.mustUseProperty=n,this.propertyName=e,this.type=r,this.sanitizeURL=o,this.removeEmptyString=l}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];ne[r]=new ce(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var dl=/[\-:]([a-z])/g;function ml(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(dl,ml);ne[r]=new ce(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(dl,ml);ne[r]=new ce(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(dl,ml);ne[r]=new ce(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function pl(e,r,n,a){var t=ne.hasOwnProperty(r)?ne[r]:null;(t!==null?t.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Pd(r,n,t,a)&&(n=null),a||t===null?zd(r)&&(n===null?e.removeAttribute(r):e.setAttribute(r,""+n)):t.mustUseProperty?e[t.propertyName]=n===null?t.type===3?!1:"":n:(r=t.attributeName,a=t.attributeNamespace,n===null?e.removeAttribute(r):(t=t.type,n=t===3||t===4&&n===!0?"":""+n,a?e.setAttributeNS(a,r,n):e.setAttribute(r,n))))}var Xe=Ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ha=Symbol.for("react.element"),Ir=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),fl=Symbol.for("react.strict_mode"),po=Symbol.for("react.profiler"),Gs=Symbol.for("react.provider"),Ys=Symbol.for("react.context"),yl=Symbol.for("react.forward_ref"),fo=Symbol.for("react.suspense"),yo=Symbol.for("react.suspense_list"),hl=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),Hs=Symbol.for("react.offscreen"),ui=Symbol.iterator;function En(e){return e===null||typeof e!="object"?null:(e=ui&&e[ui]||e["@@iterator"],typeof e=="function"?e:null)}var _=Object.assign,Mt;function Pn(e){if(Mt===void 0)try{throw Error()}catch(n){var r=n.stack.trim().match(/\n( *(at )?)/);Mt=r&&r[1]||""}return`
`+Mt+e}var Gt=!1;function Yt(e,r){if(!e||Gt)return"";Gt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(u){var a=u}Reflect.construct(e,[],r)}else{try{r.call()}catch(u){a=u}e.call(r.prototype)}else{try{throw Error()}catch(u){a=u}e()}}catch(u){if(u&&a&&typeof u.stack=="string"){for(var t=u.stack.split(`
`),o=a.stack.split(`
`),l=t.length-1,i=o.length-1;1<=l&&0<=i&&t[l]!==o[i];)i--;for(;1<=l&&0<=i;l--,i--)if(t[l]!==o[i]){if(l!==1||i!==1)do if(l--,i--,0>i||t[l]!==o[i]){var s=`
`+t[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=i);break}}}finally{Gt=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pn(e):""}function kd(e){switch(e.tag){case 5:return Pn(e.type);case 16:return Pn("Lazy");case 13:return Pn("Suspense");case 19:return Pn("SuspenseList");case 0:case 2:case 15:return e=Yt(e.type,!1),e;case 11:return e=Yt(e.type.render,!1),e;case 1:return e=Yt(e.type,!0),e;default:return""}}function ho(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vr:return"Fragment";case Ir:return"Portal";case po:return"Profiler";case fl:return"StrictMode";case fo:return"Suspense";case yo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ys:return(e.displayName||"Context")+".Consumer";case Gs:return(e._context.displayName||"Context")+".Provider";case yl:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hl:return r=e.displayName||null,r!==null?r:ho(e.type)||"Memo";case er:r=e._payload,e=e._init;try{return ho(e(r))}catch{}}return null}function wd(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ho(r);case 8:return r===fl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function hr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _s(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Dd(e){var r=_s(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),a=""+e[r];if(!e.hasOwnProperty(r)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var t=n.get,o=n.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return t.call(this)},set:function(l){a=""+l,o.call(this,l)}}),Object.defineProperty(e,r,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(l){a=""+l},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function va(e){e._valueTracker||(e._valueTracker=Dd(e))}function Is(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var n=r.getValue(),a="";return e&&(a=_s(e)?e.checked?"true":"false":e.value),e=a,e!==n?(r.setValue(e),!0):!1}function Ja(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vo(e,r){var n=r.checked;return _({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ci(e,r){var n=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;n=hr(r.value!=null?r.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Vs(e,r){r=r.checked,r!=null&&pl(e,"checked",r,!1)}function go(e,r){Vs(e,r);var n=hr(r.value),a=r.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?So(e,r.type,n):r.hasOwnProperty("defaultValue")&&So(e,r.type,hr(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function di(e,r,n){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,n||r===e.value||(e.value=r),e.defaultValue=r}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function So(e,r,n){(r!=="number"||Ja(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kn=Array.isArray;function rn(e,r,n,a){if(e=e.options,r){r={};for(var t=0;t<n.length;t++)r["$"+n[t]]=!0;for(n=0;n<e.length;n++)t=r.hasOwnProperty("$"+e[n].value),e[n].selected!==t&&(e[n].selected=t),t&&a&&(e[n].defaultSelected=!0)}else{for(n=""+hr(n),r=null,t=0;t<e.length;t++){if(e[t].value===n){e[t].selected=!0,a&&(e[t].defaultSelected=!0);return}r!==null||e[t].disabled||(r=e[t])}r!==null&&(r.selected=!0)}}function Eo(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(C(91));return _({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mi(e,r){var n=r.value;if(n==null){if(n=r.children,r=r.defaultValue,n!=null){if(r!=null)throw Error(C(92));if(kn(n)){if(1<n.length)throw Error(C(93));n=n[0]}r=n}r==null&&(r=""),n=r}e._wrapperState={initialValue:hr(n)}}function Js(e,r){var n=hr(r.value),a=hr(r.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),r.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function pi(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function Bs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Co(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?Bs(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ga,Us=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,n,a,t){MSApp.execUnsafeLocalFunction(function(){return e(r,n,a,t)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(ga=ga||document.createElement("div"),ga.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ga.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function _n(e,r){if(r){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=r;return}}e.textContent=r}var xn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xd=["Webkit","ms","Moz","O"];Object.keys(xn).forEach(function(e){xd.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),xn[r]=xn[e]})});function Qs(e,r,n){return r==null||typeof r=="boolean"||r===""?"":n||typeof r!="number"||r===0||xn.hasOwnProperty(e)&&xn[e]?(""+r).trim():r+"px"}function $s(e,r){e=e.style;for(var n in r)if(r.hasOwnProperty(n)){var a=n.indexOf("--")===0,t=Qs(n,r[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,t):e[n]=t}}var Nd=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oo(e,r){if(r){if(Nd[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(C(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(C(61))}if(r.style!=null&&typeof r.style!="object")throw Error(C(62))}}function Ro(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ao=null;function vl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var To=null,nn=null,an=null;function fi(e){if(e=ua(e)){if(typeof To!="function")throw Error(C(280));var r=e.stateNode;r&&(r=Ct(r),To(e.stateNode,e.type,r))}}function Ws(e){nn?an?an.push(e):an=[e]:nn=e}function Ks(){if(nn){var e=nn,r=an;if(an=nn=null,fi(e),r)for(e=0;e<r.length;e++)fi(r[e])}}function Xs(e,r){return e(r)}function Zs(){}var Ht=!1;function eu(e,r,n){if(Ht)return e(r,n);Ht=!0;try{return Xs(e,r,n)}finally{Ht=!1,(nn!==null||an!==null)&&(Zs(),Ks())}}function In(e,r){var n=e.stateNode;if(n===null)return null;var a=Ct(n);if(a===null)return null;n=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,r,typeof n));return n}var zo=!1;if(Qe)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){zo=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{zo=!1}function jd(e,r,n,a,t,o,l,i,s){var u=Array.prototype.slice.call(arguments,3);try{r.apply(n,u)}catch(h){this.onError(h)}}var Nn=!1,Ba=null,Ua=!1,Fo=null,qd={onError:function(e){Nn=!0,Ba=e}};function Ld(e,r,n,a,t,o,l,i,s){Nn=!1,Ba=null,jd.apply(qd,arguments)}function bd(e,r,n,a,t,o,l,i,s){if(Ld.apply(this,arguments),Nn){if(Nn){var u=Ba;Nn=!1,Ba=null}else throw Error(C(198));Ua||(Ua=!0,Fo=u)}}function Mr(e){var r=e,n=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(n=r.return),e=r.return;while(e)}return r.tag===3?n:null}function ru(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function yi(e){if(Mr(e)!==e)throw Error(C(188))}function Md(e){var r=e.alternate;if(!r){if(r=Mr(e),r===null)throw Error(C(188));return r!==e?null:e}for(var n=e,a=r;;){var t=n.return;if(t===null)break;var o=t.alternate;if(o===null){if(a=t.return,a!==null){n=a;continue}break}if(t.child===o.child){for(o=t.child;o;){if(o===n)return yi(t),e;if(o===a)return yi(t),r;o=o.sibling}throw Error(C(188))}if(n.return!==a.return)n=t,a=o;else{for(var l=!1,i=t.child;i;){if(i===n){l=!0,n=t,a=o;break}if(i===a){l=!0,a=t,n=o;break}i=i.sibling}if(!l){for(i=o.child;i;){if(i===n){l=!0,n=o,a=t;break}if(i===a){l=!0,a=o,n=t;break}i=i.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==a)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:r}function nu(e){return e=Md(e),e!==null?au(e):null}function au(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=au(e);if(r!==null)return r;e=e.sibling}return null}var tu=Se.unstable_scheduleCallback,hi=Se.unstable_cancelCallback,Gd=Se.unstable_shouldYield,Yd=Se.unstable_requestPaint,B=Se.unstable_now,Hd=Se.unstable_getCurrentPriorityLevel,gl=Se.unstable_ImmediatePriority,ou=Se.unstable_UserBlockingPriority,Qa=Se.unstable_NormalPriority,_d=Se.unstable_LowPriority,lu=Se.unstable_IdlePriority,vt=null,Ye=null;function Id(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(vt,e,void 0,(e.current.flags&128)===128)}catch{}}var Ne=Math.clz32?Math.clz32:Bd,Vd=Math.log,Jd=Math.LN2;function Bd(e){return e>>>=0,e===0?32:31-(Vd(e)/Jd|0)|0}var Sa=64,Ea=4194304;function wn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $a(e,r){var n=e.pendingLanes;if(n===0)return 0;var a=0,t=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var i=l&~t;i!==0?a=wn(i):(o&=l,o!==0&&(a=wn(o)))}else l=n&~t,l!==0?a=wn(l):o!==0&&(a=wn(o));if(a===0)return 0;if(r!==0&&r!==a&&!(r&t)&&(t=a&-a,o=r&-r,t>=o||t===16&&(o&4194240)!==0))return r;if(a&4&&(a|=n&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=a;0<r;)n=31-Ne(r),t=1<<n,a|=e[n],r&=~t;return a}function Ud(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qd(e,r){for(var n=e.suspendedLanes,a=e.pingedLanes,t=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ne(o),i=1<<l,s=t[l];s===-1?(!(i&n)||i&a)&&(t[l]=Ud(i,r)):s<=r&&(e.expiredLanes|=i),o&=~i}}function Po(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function iu(){var e=Sa;return Sa<<=1,!(Sa&4194240)&&(Sa=64),e}function _t(e){for(var r=[],n=0;31>n;n++)r.push(e);return r}function ia(e,r,n){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Ne(r),e[r]=n}function $d(e,r){var n=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var t=31-Ne(n),o=1<<t;r[t]=0,a[t]=-1,e[t]=-1,n&=~o}}function Sl(e,r){var n=e.entangledLanes|=r;for(e=e.entanglements;n;){var a=31-Ne(n),t=1<<a;t&r|e[a]&r&&(e[a]|=r),n&=~t}}var q=0;function su(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var uu,El,cu,du,mu,ko=!1,Ca=[],ir=null,sr=null,ur=null,Vn=new Map,Jn=new Map,nr=[],Wd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vi(e,r){switch(e){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Vn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(r.pointerId)}}function On(e,r,n,a,t,o){return e===null||e.nativeEvent!==o?(e={blockedOn:r,domEventName:n,eventSystemFlags:a,nativeEvent:o,targetContainers:[t]},r!==null&&(r=ua(r),r!==null&&El(r)),e):(e.eventSystemFlags|=a,r=e.targetContainers,t!==null&&r.indexOf(t)===-1&&r.push(t),e)}function Kd(e,r,n,a,t){switch(r){case"focusin":return ir=On(ir,e,r,n,a,t),!0;case"dragenter":return sr=On(sr,e,r,n,a,t),!0;case"mouseover":return ur=On(ur,e,r,n,a,t),!0;case"pointerover":var o=t.pointerId;return Vn.set(o,On(Vn.get(o)||null,e,r,n,a,t)),!0;case"gotpointercapture":return o=t.pointerId,Jn.set(o,On(Jn.get(o)||null,e,r,n,a,t)),!0}return!1}function pu(e){var r=Fr(e.target);if(r!==null){var n=Mr(r);if(n!==null){if(r=n.tag,r===13){if(r=ru(n),r!==null){e.blockedOn=r,mu(e.priority,function(){cu(n)});return}}else if(r===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qa(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var n=wo(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Ao=a,n.target.dispatchEvent(a),Ao=null}else return r=ua(n),r!==null&&El(r),e.blockedOn=n,!1;r.shift()}return!0}function gi(e,r,n){qa(e)&&n.delete(r)}function Xd(){ko=!1,ir!==null&&qa(ir)&&(ir=null),sr!==null&&qa(sr)&&(sr=null),ur!==null&&qa(ur)&&(ur=null),Vn.forEach(gi),Jn.forEach(gi)}function Rn(e,r){e.blockedOn===r&&(e.blockedOn=null,ko||(ko=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,Xd)))}function Bn(e){function r(t){return Rn(t,e)}if(0<Ca.length){Rn(Ca[0],e);for(var n=1;n<Ca.length;n++){var a=Ca[n];a.blockedOn===e&&(a.blockedOn=null)}}for(ir!==null&&Rn(ir,e),sr!==null&&Rn(sr,e),ur!==null&&Rn(ur,e),Vn.forEach(r),Jn.forEach(r),n=0;n<nr.length;n++)a=nr[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)pu(n),n.blockedOn===null&&nr.shift()}var tn=Xe.ReactCurrentBatchConfig,Wa=!0;function Zd(e,r,n,a){var t=q,o=tn.transition;tn.transition=null;try{q=1,Cl(e,r,n,a)}finally{q=t,tn.transition=o}}function em(e,r,n,a){var t=q,o=tn.transition;tn.transition=null;try{q=4,Cl(e,r,n,a)}finally{q=t,tn.transition=o}}function Cl(e,r,n,a){if(Wa){var t=wo(e,r,n,a);if(t===null)Xt(e,r,a,Ka,n),vi(e,a);else if(Kd(t,e,r,n,a))a.stopPropagation();else if(vi(e,a),r&4&&-1<Wd.indexOf(e)){for(;t!==null;){var o=ua(t);if(o!==null&&uu(o),o=wo(e,r,n,a),o===null&&Xt(e,r,a,Ka,n),o===t)break;t=o}t!==null&&a.stopPropagation()}else Xt(e,r,a,null,n)}}var Ka=null;function wo(e,r,n,a){if(Ka=null,e=vl(a),e=Fr(e),e!==null)if(r=Mr(e),r===null)e=null;else if(n=r.tag,n===13){if(e=ru(r),e!==null)return e;e=null}else if(n===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Ka=e,null}function fu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hd()){case gl:return 1;case ou:return 4;case Qa:case _d:return 16;case lu:return 536870912;default:return 16}default:return 16}}var tr=null,Ol=null,La=null;function yu(){if(La)return La;var e,r=Ol,n=r.length,a,t="value"in tr?tr.value:tr.textContent,o=t.length;for(e=0;e<n&&r[e]===t[e];e++);var l=n-e;for(a=1;a<=l&&r[n-a]===t[o-a];a++);return La=t.slice(e,1<a?1-a:void 0)}function ba(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Oa(){return!0}function Si(){return!1}function Ce(e){function r(n,a,t,o,l){this._reactName=n,this._targetInst=t,this.type=a,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(o):o[i]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Oa:Si,this.isPropagationStopped=Si,this}return _(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),r}var hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=Ce(hn),sa=_({},hn,{view:0,detail:0}),rm=Ce(sa),It,Vt,An,gt=_({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Al,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==An&&(An&&e.type==="mousemove"?(It=e.screenX-An.screenX,Vt=e.screenY-An.screenY):Vt=It=0,An=e),It)},movementY:function(e){return"movementY"in e?e.movementY:Vt}}),Ei=Ce(gt),nm=_({},gt,{dataTransfer:0}),am=Ce(nm),tm=_({},sa,{relatedTarget:0}),Jt=Ce(tm),om=_({},hn,{animationName:0,elapsedTime:0,pseudoElement:0}),lm=Ce(om),im=_({},hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sm=Ce(im),um=_({},hn,{data:0}),Ci=Ce(um),cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pm(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=mm[e])?!!r[e]:!1}function Al(){return pm}var fm=_({},sa,{key:function(e){if(e.key){var r=cm[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=ba(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Al,charCode:function(e){return e.type==="keypress"?ba(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ba(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ym=Ce(fm),hm=_({},gt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oi=Ce(hm),vm=_({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Al}),gm=Ce(vm),Sm=_({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Em=Ce(Sm),Cm=_({},gt,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Om=Ce(Cm),Rm=[9,13,27,32],Tl=Qe&&"CompositionEvent"in window,jn=null;Qe&&"documentMode"in document&&(jn=document.documentMode);var Am=Qe&&"TextEvent"in window&&!jn,hu=Qe&&(!Tl||jn&&8<jn&&11>=jn),Ri=" ",Ai=!1;function vu(e,r){switch(e){case"keyup":return Rm.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jr=!1;function Tm(e,r){switch(e){case"compositionend":return gu(r);case"keypress":return r.which!==32?null:(Ai=!0,Ri);case"textInput":return e=r.data,e===Ri&&Ai?null:e;default:return null}}function zm(e,r){if(Jr)return e==="compositionend"||!Tl&&vu(e,r)?(e=yu(),La=Ol=tr=null,Jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return hu&&r.locale!=="ko"?null:r.data;default:return null}}var Fm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ti(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Fm[e.type]:r==="textarea"}function Su(e,r,n,a){Ws(a),r=Xa(r,"onChange"),0<r.length&&(n=new Rl("onChange","change",null,n,a),e.push({event:n,listeners:r}))}var qn=null,Un=null;function Pm(e){wu(e,0)}function St(e){var r=Qr(e);if(Is(r))return e}function km(e,r){if(e==="change")return r}var Eu=!1;if(Qe){var Bt;if(Qe){var Ut="oninput"in document;if(!Ut){var zi=document.createElement("div");zi.setAttribute("oninput","return;"),Ut=typeof zi.oninput=="function"}Bt=Ut}else Bt=!1;Eu=Bt&&(!document.documentMode||9<document.documentMode)}function Fi(){qn&&(qn.detachEvent("onpropertychange",Cu),Un=qn=null)}function Cu(e){if(e.propertyName==="value"&&St(Un)){var r=[];Su(r,Un,e,vl(e)),eu(Pm,r)}}function wm(e,r,n){e==="focusin"?(Fi(),qn=r,Un=n,qn.attachEvent("onpropertychange",Cu)):e==="focusout"&&Fi()}function Dm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return St(Un)}function xm(e,r){if(e==="click")return St(r)}function Nm(e,r){if(e==="input"||e==="change")return St(r)}function jm(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var qe=typeof Object.is=="function"?Object.is:jm;function Qn(e,r){if(qe(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var n=Object.keys(e),a=Object.keys(r);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var t=n[a];if(!mo.call(r,t)||!qe(e[t],r[t]))return!1}return!0}function Pi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ki(e,r){var n=Pi(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=r&&a>=r)return{node:n,offset:r-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pi(n)}}function Ou(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Ou(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Ru(){for(var e=window,r=Ja();r instanceof e.HTMLIFrameElement;){try{var n=typeof r.contentWindow.location.href=="string"}catch{n=!1}if(n)e=r.contentWindow;else break;r=Ja(e.document)}return r}function zl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function qm(e){var r=Ru(),n=e.focusedElem,a=e.selectionRange;if(r!==n&&n&&n.ownerDocument&&Ou(n.ownerDocument.documentElement,n)){if(a!==null&&zl(n)){if(r=a.start,e=a.end,e===void 0&&(e=r),"selectionStart"in n)n.selectionStart=r,n.selectionEnd=Math.min(e,n.value.length);else if(e=(r=n.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var t=n.textContent.length,o=Math.min(a.start,t);a=a.end===void 0?o:Math.min(a.end,t),!e.extend&&o>a&&(t=a,a=o,o=t),t=ki(n,o);var l=ki(n,a);t&&l&&(e.rangeCount!==1||e.anchorNode!==t.node||e.anchorOffset!==t.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(r=r.createRange(),r.setStart(t.node,t.offset),e.removeAllRanges(),o>a?(e.addRange(r),e.extend(l.node,l.offset)):(r.setEnd(l.node,l.offset),e.addRange(r)))}}for(r=[],e=n;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<r.length;n++)e=r[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lm=Qe&&"documentMode"in document&&11>=document.documentMode,Br=null,Do=null,Ln=null,xo=!1;function wi(e,r,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xo||Br==null||Br!==Ja(a)||(a=Br,"selectionStart"in a&&zl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ln&&Qn(Ln,a)||(Ln=a,a=Xa(Do,"onSelect"),0<a.length&&(r=new Rl("onSelect","select",null,r,n),e.push({event:r,listeners:a}),r.target=Br)))}function Ra(e,r){var n={};return n[e.toLowerCase()]=r.toLowerCase(),n["Webkit"+e]="webkit"+r,n["Moz"+e]="moz"+r,n}var Ur={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionend:Ra("Transition","TransitionEnd")},Qt={},Au={};Qe&&(Au=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function Et(e){if(Qt[e])return Qt[e];if(!Ur[e])return e;var r=Ur[e],n;for(n in r)if(r.hasOwnProperty(n)&&n in Au)return Qt[e]=r[n];return e}var Tu=Et("animationend"),zu=Et("animationiteration"),Fu=Et("animationstart"),Pu=Et("transitionend"),ku=new Map,Di="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(e,r){ku.set(e,r),br(r,[e])}for(var $t=0;$t<Di.length;$t++){var Wt=Di[$t],bm=Wt.toLowerCase(),Mm=Wt[0].toUpperCase()+Wt.slice(1);gr(bm,"on"+Mm)}gr(Tu,"onAnimationEnd");gr(zu,"onAnimationIteration");gr(Fu,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(Pu,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dn));function xi(e,r,n){var a=e.type||"unknown-event";e.currentTarget=n,bd(a,r,void 0,e),e.currentTarget=null}function wu(e,r){r=(r&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],t=a.event;a=a.listeners;e:{var o=void 0;if(r)for(var l=a.length-1;0<=l;l--){var i=a[l],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==o&&t.isPropagationStopped())break e;xi(t,i,u),o=s}else for(l=0;l<a.length;l++){if(i=a[l],s=i.instance,u=i.currentTarget,i=i.listener,s!==o&&t.isPropagationStopped())break e;xi(t,i,u),o=s}}}if(Ua)throw e=Fo,Ua=!1,Fo=null,e}function b(e,r){var n=r[bo];n===void 0&&(n=r[bo]=new Set);var a=e+"__bubble";n.has(a)||(Du(r,e,2,!1),n.add(a))}function Kt(e,r,n){var a=0;r&&(a|=4),Du(n,e,a,r)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function $n(e){if(!e[Aa]){e[Aa]=!0,Ms.forEach(function(n){n!=="selectionchange"&&(Gm.has(n)||Kt(n,!1,e),Kt(n,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Aa]||(r[Aa]=!0,Kt("selectionchange",!1,r))}}function Du(e,r,n,a){switch(fu(r)){case 1:var t=Zd;break;case 4:t=em;break;default:t=Cl}n=t.bind(null,r,n,e),t=void 0,!zo||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(t=!0),a?t!==void 0?e.addEventListener(r,n,{capture:!0,passive:t}):e.addEventListener(r,n,!0):t!==void 0?e.addEventListener(r,n,{passive:t}):e.addEventListener(r,n,!1)}function Xt(e,r,n,a,t){var o=a;if(!(r&1)&&!(r&2)&&a!==null)e:for(;;){if(a===null)return;var l=a.tag;if(l===3||l===4){var i=a.stateNode.containerInfo;if(i===t||i.nodeType===8&&i.parentNode===t)break;if(l===4)for(l=a.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===t||s.nodeType===8&&s.parentNode===t))return;l=l.return}for(;i!==null;){if(l=Fr(i),l===null)return;if(s=l.tag,s===5||s===6){a=o=l;continue e}i=i.parentNode}}a=a.return}eu(function(){var u=o,h=vl(n),d=[];e:{var y=ku.get(e);if(y!==void 0){var g=Rl,S=e;switch(e){case"keypress":if(ba(n)===0)break e;case"keydown":case"keyup":g=ym;break;case"focusin":S="focus",g=Jt;break;case"focusout":S="blur",g=Jt;break;case"beforeblur":case"afterblur":g=Jt;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ei;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=am;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=gm;break;case Tu:case zu:case Fu:g=lm;break;case Pu:g=Em;break;case"scroll":g=rm;break;case"wheel":g=Om;break;case"copy":case"cut":case"paste":g=sm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Oi}var E=(r&4)!==0,A=!E&&e==="scroll",p=E?y!==null?y+"Capture":null:y;E=[];for(var c=u,m;c!==null;){m=c;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,p!==null&&(v=In(c,p),v!=null&&E.push(Wn(c,v,m)))),A)break;c=c.return}0<E.length&&(y=new g(y,S,null,n,h),d.push({event:y,listeners:E}))}}if(!(r&7)){e:{if(y=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",y&&n!==Ao&&(S=n.relatedTarget||n.fromElement)&&(Fr(S)||S[$e]))break e;if((g||y)&&(y=h.window===h?h:(y=h.ownerDocument)?y.defaultView||y.parentWindow:window,g?(S=n.relatedTarget||n.toElement,g=u,S=S?Fr(S):null,S!==null&&(A=Mr(S),S!==A||S.tag!==5&&S.tag!==6)&&(S=null)):(g=null,S=u),g!==S)){if(E=Ei,v="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(E=Oi,v="onPointerLeave",p="onPointerEnter",c="pointer"),A=g==null?y:Qr(g),m=S==null?y:Qr(S),y=new E(v,c+"leave",g,n,h),y.target=A,y.relatedTarget=m,v=null,Fr(h)===u&&(E=new E(p,c+"enter",S,n,h),E.target=m,E.relatedTarget=A,v=E),A=v,g&&S)r:{for(E=g,p=S,c=0,m=E;m;m=Hr(m))c++;for(m=0,v=p;v;v=Hr(v))m++;for(;0<c-m;)E=Hr(E),c--;for(;0<m-c;)p=Hr(p),m--;for(;c--;){if(E===p||p!==null&&E===p.alternate)break r;E=Hr(E),p=Hr(p)}E=null}else E=null;g!==null&&Ni(d,y,g,E,!1),S!==null&&A!==null&&Ni(d,A,S,E,!0)}}e:{if(y=u?Qr(u):window,g=y.nodeName&&y.nodeName.toLowerCase(),g==="select"||g==="input"&&y.type==="file")var R=km;else if(Ti(y))if(Eu)R=Nm;else{R=Dm;var z=wm}else(g=y.nodeName)&&g.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(R=xm);if(R&&(R=R(e,u))){Su(d,R,n,h);break e}z&&z(e,y,u),e==="focusout"&&(z=y._wrapperState)&&z.controlled&&y.type==="number"&&So(y,"number",y.value)}switch(z=u?Qr(u):window,e){case"focusin":(Ti(z)||z.contentEditable==="true")&&(Br=z,Do=u,Ln=null);break;case"focusout":Ln=Do=Br=null;break;case"mousedown":xo=!0;break;case"contextmenu":case"mouseup":case"dragend":xo=!1,wi(d,n,h);break;case"selectionchange":if(Lm)break;case"keydown":case"keyup":wi(d,n,h)}var P;if(Tl)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Jr?vu(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(hu&&n.locale!=="ko"&&(Jr||k!=="onCompositionStart"?k==="onCompositionEnd"&&Jr&&(P=yu()):(tr=h,Ol="value"in tr?tr.value:tr.textContent,Jr=!0)),z=Xa(u,k),0<z.length&&(k=new Ci(k,e,null,n,h),d.push({event:k,listeners:z}),P?k.data=P:(P=gu(n),P!==null&&(k.data=P)))),(P=Am?Tm(e,n):zm(e,n))&&(u=Xa(u,"onBeforeInput"),0<u.length&&(h=new Ci("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=P))}wu(d,r)})}function Wn(e,r,n){return{instance:e,listener:r,currentTarget:n}}function Xa(e,r){for(var n=r+"Capture",a=[];e!==null;){var t=e,o=t.stateNode;t.tag===5&&o!==null&&(t=o,o=In(e,n),o!=null&&a.unshift(Wn(e,o,t)),o=In(e,r),o!=null&&a.push(Wn(e,o,t))),e=e.return}return a}function Hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ni(e,r,n,a,t){for(var o=r._reactName,l=[];n!==null&&n!==a;){var i=n,s=i.alternate,u=i.stateNode;if(s!==null&&s===a)break;i.tag===5&&u!==null&&(i=u,t?(s=In(n,o),s!=null&&l.unshift(Wn(n,s,i))):t||(s=In(n,o),s!=null&&l.push(Wn(n,s,i)))),n=n.return}l.length!==0&&e.push({event:r,listeners:l})}var Ym=/\r\n?/g,Hm=/\u0000|\uFFFD/g;function ji(e){return(typeof e=="string"?e:""+e).replace(Ym,`
`).replace(Hm,"")}function Ta(e,r,n){if(r=ji(r),ji(e)!==r&&n)throw Error(C(425))}function Za(){}var No=null,jo=null;function qo(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Lo=typeof setTimeout=="function"?setTimeout:void 0,_m=typeof clearTimeout=="function"?clearTimeout:void 0,qi=typeof Promise=="function"?Promise:void 0,Im=typeof queueMicrotask=="function"?queueMicrotask:typeof qi<"u"?function(e){return qi.resolve(null).then(e).catch(Vm)}:Lo;function Vm(e){setTimeout(function(){throw e})}function Zt(e,r){var n=r,a=0;do{var t=n.nextSibling;if(e.removeChild(n),t&&t.nodeType===8)if(n=t.data,n==="/$"){if(a===0){e.removeChild(t),Bn(r);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=t}while(n);Bn(r)}function cr(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Li(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(r===0)return e;r--}else n==="/$"&&r++}e=e.previousSibling}return null}var vn=Math.random().toString(36).slice(2),Ge="__reactFiber$"+vn,Kn="__reactProps$"+vn,$e="__reactContainer$"+vn,bo="__reactEvents$"+vn,Jm="__reactListeners$"+vn,Bm="__reactHandles$"+vn;function Fr(e){var r=e[Ge];if(r)return r;for(var n=e.parentNode;n;){if(r=n[$e]||n[Ge]){if(n=r.alternate,r.child!==null||n!==null&&n.child!==null)for(e=Li(e);e!==null;){if(n=e[Ge])return n;e=Li(e)}return r}e=n,n=e.parentNode}return null}function ua(e){return e=e[Ge]||e[$e],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Ct(e){return e[Kn]||null}var Mo=[],$r=-1;function Sr(e){return{current:e}}function M(e){0>$r||(e.current=Mo[$r],Mo[$r]=null,$r--)}function L(e,r){$r++,Mo[$r]=e.current,e.current=r}var vr={},le=Sr(vr),pe=Sr(!1),xr=vr;function un(e,r){var n=e.type.contextTypes;if(!n)return vr;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var t={},o;for(o in n)t[o]=r[o];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=t),t}function fe(e){return e=e.childContextTypes,e!=null}function et(){M(pe),M(le)}function bi(e,r,n){if(le.current!==vr)throw Error(C(168));L(le,r),L(pe,n)}function xu(e,r,n){var a=e.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var t in a)if(!(t in r))throw Error(C(108,wd(e)||"Unknown",t));return _({},n,a)}function rt(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vr,xr=le.current,L(le,e),L(pe,pe.current),!0}function Mi(e,r,n){var a=e.stateNode;if(!a)throw Error(C(169));n?(e=xu(e,r,xr),a.__reactInternalMemoizedMergedChildContext=e,M(pe),M(le),L(le,e)):M(pe),L(pe,n)}var Ie=null,Ot=!1,eo=!1;function Nu(e){Ie===null?Ie=[e]:Ie.push(e)}function Um(e){Ot=!0,Nu(e)}function Er(){if(!eo&&Ie!==null){eo=!0;var e=0,r=q;try{var n=Ie;for(q=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}Ie=null,Ot=!1}catch(t){throw Ie!==null&&(Ie=Ie.slice(e+1)),tu(gl,Er),t}finally{q=r,eo=!1}}return null}var Wr=[],Kr=0,nt=null,at=0,Oe=[],Re=0,Nr=null,Ve=1,Je="";function Ar(e,r){Wr[Kr++]=at,Wr[Kr++]=nt,nt=e,at=r}function ju(e,r,n){Oe[Re++]=Ve,Oe[Re++]=Je,Oe[Re++]=Nr,Nr=e;var a=Ve;e=Je;var t=32-Ne(a)-1;a&=~(1<<t),n+=1;var o=32-Ne(r)+t;if(30<o){var l=t-t%5;o=(a&(1<<l)-1).toString(32),a>>=l,t-=l,Ve=1<<32-Ne(r)+t|n<<t|a,Je=o+e}else Ve=1<<o|n<<t|a,Je=e}function Fl(e){e.return!==null&&(Ar(e,1),ju(e,1,0))}function Pl(e){for(;e===nt;)nt=Wr[--Kr],Wr[Kr]=null,at=Wr[--Kr],Wr[Kr]=null;for(;e===Nr;)Nr=Oe[--Re],Oe[Re]=null,Je=Oe[--Re],Oe[Re]=null,Ve=Oe[--Re],Oe[Re]=null}var ge=null,ve=null,G=!1,xe=null;function qu(e,r){var n=Ae(5,null,null,0);n.elementType="DELETED",n.stateNode=r,n.return=e,r=e.deletions,r===null?(e.deletions=[n],e.flags|=16):r.push(n)}function Gi(e,r){switch(e.tag){case 5:var n=e.type;return r=r.nodeType!==1||n.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,ge=e,ve=cr(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,ge=e,ve=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(n=Nr!==null?{id:Ve,overflow:Je}:null,e.memoizedState={dehydrated:r,treeContext:n,retryLane:1073741824},n=Ae(18,null,null,0),n.stateNode=r,n.return=e,e.child=n,ge=e,ve=null,!0):!1;default:return!1}}function Go(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yo(e){if(G){var r=ve;if(r){var n=r;if(!Gi(e,r)){if(Go(e))throw Error(C(418));r=cr(n.nextSibling);var a=ge;r&&Gi(e,r)?qu(a,n):(e.flags=e.flags&-4097|2,G=!1,ge=e)}}else{if(Go(e))throw Error(C(418));e.flags=e.flags&-4097|2,G=!1,ge=e}}}function Yi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function za(e){if(e!==ge)return!1;if(!G)return Yi(e),G=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!qo(e.type,e.memoizedProps)),r&&(r=ve)){if(Go(e))throw Lu(),Error(C(418));for(;r;)qu(e,r),r=cr(r.nextSibling)}if(Yi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(r===0){ve=cr(e.nextSibling);break e}r--}else n!=="$"&&n!=="$!"&&n!=="$?"||r++}e=e.nextSibling}ve=null}}else ve=ge?cr(e.stateNode.nextSibling):null;return!0}function Lu(){for(var e=ve;e;)e=cr(e.nextSibling)}function cn(){ve=ge=null,G=!1}function kl(e){xe===null?xe=[e]:xe.push(e)}var Qm=Xe.ReactCurrentBatchConfig;function Tn(e,r,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var a=n.stateNode}if(!a)throw Error(C(147,e));var t=a,o=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===o?r.ref:(r=function(l){var i=t.refs;l===null?delete i[o]:i[o]=l},r._stringRef=o,r)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Fa(e,r){throw e=Object.prototype.toString.call(r),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Hi(e){var r=e._init;return r(e._payload)}function bu(e){function r(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)r(p,c),c=c.sibling;return null}function a(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function t(p,c){return p=fr(p,c),p.index=0,p.sibling=null,p}function o(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function i(p,c,m,v){return c===null||c.tag!==6?(c=io(m,p.mode,v),c.return=p,c):(c=t(c,m),c.return=p,c)}function s(p,c,m,v){var R=m.type;return R===Vr?h(p,c,m.props.children,v,m.key):c!==null&&(c.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===er&&Hi(R)===c.type)?(v=t(c,m.props),v.ref=Tn(p,c,m),v.return=p,v):(v=Va(m.type,m.key,m.props,null,p.mode,v),v.ref=Tn(p,c,m),v.return=p,v)}function u(p,c,m,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=so(m,p.mode,v),c.return=p,c):(c=t(c,m.children||[]),c.return=p,c)}function h(p,c,m,v,R){return c===null||c.tag!==7?(c=Dr(m,p.mode,v,R),c.return=p,c):(c=t(c,m),c.return=p,c)}function d(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=io(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ha:return m=Va(c.type,c.key,c.props,null,p.mode,m),m.ref=Tn(p,null,c),m.return=p,m;case Ir:return c=so(c,p.mode,m),c.return=p,c;case er:var v=c._init;return d(p,v(c._payload),m)}if(kn(c)||En(c))return c=Dr(c,p.mode,m,null),c.return=p,c;Fa(p,c)}return null}function y(p,c,m,v){var R=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return R!==null?null:i(p,c,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ha:return m.key===R?s(p,c,m,v):null;case Ir:return m.key===R?u(p,c,m,v):null;case er:return R=m._init,y(p,c,R(m._payload),v)}if(kn(m)||En(m))return R!==null?null:h(p,c,m,v,null);Fa(p,m)}return null}function g(p,c,m,v,R){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(m)||null,i(c,p,""+v,R);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ha:return p=p.get(v.key===null?m:v.key)||null,s(c,p,v,R);case Ir:return p=p.get(v.key===null?m:v.key)||null,u(c,p,v,R);case er:var z=v._init;return g(p,c,m,z(v._payload),R)}if(kn(v)||En(v))return p=p.get(m)||null,h(c,p,v,R,null);Fa(c,v)}return null}function S(p,c,m,v){for(var R=null,z=null,P=c,k=c=0,V=null;P!==null&&k<m.length;k++){P.index>k?(V=P,P=null):V=P.sibling;var N=y(p,P,m[k],v);if(N===null){P===null&&(P=V);break}e&&P&&N.alternate===null&&r(p,P),c=o(N,c,k),z===null?R=N:z.sibling=N,z=N,P=V}if(k===m.length)return n(p,P),G&&Ar(p,k),R;if(P===null){for(;k<m.length;k++)P=d(p,m[k],v),P!==null&&(c=o(P,c,k),z===null?R=P:z.sibling=P,z=P);return G&&Ar(p,k),R}for(P=a(p,P);k<m.length;k++)V=g(P,p,k,m[k],v),V!==null&&(e&&V.alternate!==null&&P.delete(V.key===null?k:V.key),c=o(V,c,k),z===null?R=V:z.sibling=V,z=V);return e&&P.forEach(function(Pe){return r(p,Pe)}),G&&Ar(p,k),R}function E(p,c,m,v){var R=En(m);if(typeof R!="function")throw Error(C(150));if(m=R.call(m),m==null)throw Error(C(151));for(var z=R=null,P=c,k=c=0,V=null,N=m.next();P!==null&&!N.done;k++,N=m.next()){P.index>k?(V=P,P=null):V=P.sibling;var Pe=y(p,P,N.value,v);if(Pe===null){P===null&&(P=V);break}e&&P&&Pe.alternate===null&&r(p,P),c=o(Pe,c,k),z===null?R=Pe:z.sibling=Pe,z=Pe,P=V}if(N.done)return n(p,P),G&&Ar(p,k),R;if(P===null){for(;!N.done;k++,N=m.next())N=d(p,N.value,v),N!==null&&(c=o(N,c,k),z===null?R=N:z.sibling=N,z=N);return G&&Ar(p,k),R}for(P=a(p,P);!N.done;k++,N=m.next())N=g(P,p,k,N.value,v),N!==null&&(e&&N.alternate!==null&&P.delete(N.key===null?k:N.key),c=o(N,c,k),z===null?R=N:z.sibling=N,z=N);return e&&P.forEach(function(gn){return r(p,gn)}),G&&Ar(p,k),R}function A(p,c,m,v){if(typeof m=="object"&&m!==null&&m.type===Vr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ha:e:{for(var R=m.key,z=c;z!==null;){if(z.key===R){if(R=m.type,R===Vr){if(z.tag===7){n(p,z.sibling),c=t(z,m.props.children),c.return=p,p=c;break e}}else if(z.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===er&&Hi(R)===z.type){n(p,z.sibling),c=t(z,m.props),c.ref=Tn(p,z,m),c.return=p,p=c;break e}n(p,z);break}else r(p,z);z=z.sibling}m.type===Vr?(c=Dr(m.props.children,p.mode,v,m.key),c.return=p,p=c):(v=Va(m.type,m.key,m.props,null,p.mode,v),v.ref=Tn(p,c,m),v.return=p,p=v)}return l(p);case Ir:e:{for(z=m.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=t(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else r(p,c);c=c.sibling}c=so(m,p.mode,v),c.return=p,p=c}return l(p);case er:return z=m._init,A(p,c,z(m._payload),v)}if(kn(m))return S(p,c,m,v);if(En(m))return E(p,c,m,v);Fa(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=t(c,m),c.return=p,p=c):(n(p,c),c=io(m,p.mode,v),c.return=p,p=c),l(p)):n(p,c)}return A}var dn=bu(!0),Mu=bu(!1),tt=Sr(null),ot=null,Xr=null,wl=null;function Dl(){wl=Xr=ot=null}function xl(e){var r=tt.current;M(tt),e._currentValue=r}function Ho(e,r,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),e===n)break;e=e.return}}function on(e,r){ot=e,wl=Xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(me=!0),e.firstContext=null)}function ze(e){var r=e._currentValue;if(wl!==e)if(e={context:e,memoizedValue:r,next:null},Xr===null){if(ot===null)throw Error(C(308));Xr=e,ot.dependencies={lanes:0,firstContext:e}}else Xr=Xr.next=e;return r}var Pr=null;function Nl(e){Pr===null?Pr=[e]:Pr.push(e)}function Gu(e,r,n,a){var t=r.interleaved;return t===null?(n.next=n,Nl(r)):(n.next=t.next,t.next=n),r.interleaved=n,We(e,a)}function We(e,r){e.lanes|=r;var n=e.alternate;for(n!==null&&(n.lanes|=r),n=e,e=e.return;e!==null;)e.childLanes|=r,n=e.alternate,n!==null&&(n.childLanes|=r),n=e,e=e.return;return n.tag===3?n.stateNode:null}var rr=!1;function jl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yu(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ue(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function dr(e,r,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,j&2){var t=a.pending;return t===null?r.next=r:(r.next=t.next,t.next=r),a.pending=r,We(e,n)}return t=a.interleaved,t===null?(r.next=r,Nl(a)):(r.next=t.next,t.next=r),a.interleaved=r,We(e,n)}function Ma(e,r,n){if(r=r.updateQueue,r!==null&&(r=r.shared,(n&4194240)!==0)){var a=r.lanes;a&=e.pendingLanes,n|=a,r.lanes=n,Sl(e,n)}}function _i(e,r){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var t=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?t=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?t=o=r:o=o.next=r}else t=o=r;n={baseState:a.baseState,firstBaseUpdate:t,lastBaseUpdate:o,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=r:e.next=r,n.lastBaseUpdate=r}function lt(e,r,n,a){var t=e.updateQueue;rr=!1;var o=t.firstBaseUpdate,l=t.lastBaseUpdate,i=t.shared.pending;if(i!==null){t.shared.pending=null;var s=i,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var h=e.alternate;h!==null&&(h=h.updateQueue,i=h.lastBaseUpdate,i!==l&&(i===null?h.firstBaseUpdate=u:i.next=u,h.lastBaseUpdate=s))}if(o!==null){var d=t.baseState;l=0,h=u=s=null,i=o;do{var y=i.lane,g=i.eventTime;if((a&y)===y){h!==null&&(h=h.next={eventTime:g,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var S=e,E=i;switch(y=r,g=n,E.tag){case 1:if(S=E.payload,typeof S=="function"){d=S.call(g,d,y);break e}d=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=E.payload,y=typeof S=="function"?S.call(g,d,y):S,y==null)break e;d=_({},d,y);break e;case 2:rr=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,y=t.effects,y===null?t.effects=[i]:y.push(i))}else g={eventTime:g,lane:y,tag:i.tag,payload:i.payload,callback:i.callback,next:null},h===null?(u=h=g,s=d):h=h.next=g,l|=y;if(i=i.next,i===null){if(i=t.shared.pending,i===null)break;y=i,i=y.next,y.next=null,t.lastBaseUpdate=y,t.shared.pending=null}}while(!0);if(h===null&&(s=d),t.baseState=s,t.firstBaseUpdate=u,t.lastBaseUpdate=h,r=t.shared.interleaved,r!==null){t=r;do l|=t.lane,t=t.next;while(t!==r)}else o===null&&(t.shared.lanes=0);qr|=l,e.lanes=l,e.memoizedState=d}}function Ii(e,r,n){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var a=e[r],t=a.callback;if(t!==null){if(a.callback=null,a=n,typeof t!="function")throw Error(C(191,t));t.call(a)}}}var ca={},He=Sr(ca),Xn=Sr(ca),Zn=Sr(ca);function kr(e){if(e===ca)throw Error(C(174));return e}function ql(e,r){switch(L(Zn,r),L(Xn,e),L(He,ca),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Co(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Co(r,e)}M(He),L(He,r)}function mn(){M(He),M(Xn),M(Zn)}function Hu(e){kr(Zn.current);var r=kr(He.current),n=Co(r,e.type);r!==n&&(L(Xn,e),L(He,n))}function Ll(e){Xn.current===e&&(M(He),M(Xn))}var Y=Sr(0);function it(e){for(var r=e;r!==null;){if(r.tag===13){var n=r.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ro=[];function bl(){for(var e=0;e<ro.length;e++)ro[e]._workInProgressVersionPrimary=null;ro.length=0}var Ga=Xe.ReactCurrentDispatcher,no=Xe.ReactCurrentBatchConfig,jr=0,H=null,$=null,X=null,st=!1,bn=!1,ea=0,$m=0;function ae(){throw Error(C(321))}function Ml(e,r){if(r===null)return!1;for(var n=0;n<r.length&&n<e.length;n++)if(!qe(e[n],r[n]))return!1;return!0}function Gl(e,r,n,a,t,o){if(jr=o,H=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ga.current=e===null||e.memoizedState===null?Zm:ep,e=n(a,t),bn){o=0;do{if(bn=!1,ea=0,25<=o)throw Error(C(301));o+=1,X=$=null,r.updateQueue=null,Ga.current=rp,e=n(a,t)}while(bn)}if(Ga.current=ut,r=$!==null&&$.next!==null,jr=0,X=$=H=null,st=!1,r)throw Error(C(300));return e}function Yl(){var e=ea!==0;return ea=0,e}function Me(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?H.memoizedState=X=e:X=X.next=e,X}function Fe(){if($===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=$.next;var r=X===null?H.memoizedState:X.next;if(r!==null)X=r,$=e;else{if(e===null)throw Error(C(310));$=e,e={memoizedState:$.memoizedState,baseState:$.baseState,baseQueue:$.baseQueue,queue:$.queue,next:null},X===null?H.memoizedState=X=e:X=X.next=e}return X}function ra(e,r){return typeof r=="function"?r(e):r}function ao(e){var r=Fe(),n=r.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var a=$,t=a.baseQueue,o=n.pending;if(o!==null){if(t!==null){var l=t.next;t.next=o.next,o.next=l}a.baseQueue=t=o,n.pending=null}if(t!==null){o=t.next,a=a.baseState;var i=l=null,s=null,u=o;do{var h=u.lane;if((jr&h)===h)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),a=u.hasEagerState?u.eagerState:e(a,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(i=s=d,l=a):s=s.next=d,H.lanes|=h,qr|=h}u=u.next}while(u!==null&&u!==o);s===null?l=a:s.next=i,qe(a,r.memoizedState)||(me=!0),r.memoizedState=a,r.baseState=l,r.baseQueue=s,n.lastRenderedState=a}if(e=n.interleaved,e!==null){t=e;do o=t.lane,H.lanes|=o,qr|=o,t=t.next;while(t!==e)}else t===null&&(n.lanes=0);return[r.memoizedState,n.dispatch]}function to(e){var r=Fe(),n=r.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var a=n.dispatch,t=n.pending,o=r.memoizedState;if(t!==null){n.pending=null;var l=t=t.next;do o=e(o,l.action),l=l.next;while(l!==t);qe(o,r.memoizedState)||(me=!0),r.memoizedState=o,r.baseQueue===null&&(r.baseState=o),n.lastRenderedState=o}return[o,a]}function _u(){}function Iu(e,r){var n=H,a=Fe(),t=r(),o=!qe(a.memoizedState,t);if(o&&(a.memoizedState=t,me=!0),a=a.queue,Hl(Bu.bind(null,n,a,e),[e]),a.getSnapshot!==r||o||X!==null&&X.memoizedState.tag&1){if(n.flags|=2048,na(9,Ju.bind(null,n,a,t,r),void 0,null),Z===null)throw Error(C(349));jr&30||Vu(n,r,t)}return t}function Vu(e,r,n){e.flags|=16384,e={getSnapshot:r,value:n},r=H.updateQueue,r===null?(r={lastEffect:null,stores:null},H.updateQueue=r,r.stores=[e]):(n=r.stores,n===null?r.stores=[e]:n.push(e))}function Ju(e,r,n,a){r.value=n,r.getSnapshot=a,Uu(r)&&Qu(e)}function Bu(e,r,n){return n(function(){Uu(r)&&Qu(e)})}function Uu(e){var r=e.getSnapshot;e=e.value;try{var n=r();return!qe(e,n)}catch{return!0}}function Qu(e){var r=We(e,1);r!==null&&je(r,e,1,-1)}function Vi(e){var r=Me();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:e},r.queue=e,e=e.dispatch=Xm.bind(null,H,e),[r.memoizedState,e]}function na(e,r,n,a){return e={tag:e,create:r,destroy:n,deps:a,next:null},r=H.updateQueue,r===null?(r={lastEffect:null,stores:null},H.updateQueue=r,r.lastEffect=e.next=e):(n=r.lastEffect,n===null?r.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,r.lastEffect=e)),e}function $u(){return Fe().memoizedState}function Ya(e,r,n,a){var t=Me();H.flags|=e,t.memoizedState=na(1|r,n,void 0,a===void 0?null:a)}function Rt(e,r,n,a){var t=Fe();a=a===void 0?null:a;var o=void 0;if($!==null){var l=$.memoizedState;if(o=l.destroy,a!==null&&Ml(a,l.deps)){t.memoizedState=na(r,n,o,a);return}}H.flags|=e,t.memoizedState=na(1|r,n,o,a)}function Ji(e,r){return Ya(8390656,8,e,r)}function Hl(e,r){return Rt(2048,8,e,r)}function Wu(e,r){return Rt(4,2,e,r)}function Ku(e,r){return Rt(4,4,e,r)}function Xu(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Zu(e,r,n){return n=n!=null?n.concat([e]):null,Rt(4,4,Xu.bind(null,r,e),n)}function _l(){}function ec(e,r){var n=Fe();r=r===void 0?null:r;var a=n.memoizedState;return a!==null&&r!==null&&Ml(r,a[1])?a[0]:(n.memoizedState=[e,r],e)}function rc(e,r){var n=Fe();r=r===void 0?null:r;var a=n.memoizedState;return a!==null&&r!==null&&Ml(r,a[1])?a[0]:(e=e(),n.memoizedState=[e,r],e)}function nc(e,r,n){return jr&21?(qe(n,r)||(n=iu(),H.lanes|=n,qr|=n,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=n)}function Wm(e,r){var n=q;q=n!==0&&4>n?n:4,e(!0);var a=no.transition;no.transition={};try{e(!1),r()}finally{q=n,no.transition=a}}function ac(){return Fe().memoizedState}function Km(e,r,n){var a=pr(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},tc(e))oc(r,n);else if(n=Gu(e,r,n,a),n!==null){var t=se();je(n,e,a,t),lc(n,r,a)}}function Xm(e,r,n){var a=pr(e),t={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(tc(e))oc(r,t);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=r.lastRenderedReducer,o!==null))try{var l=r.lastRenderedState,i=o(l,n);if(t.hasEagerState=!0,t.eagerState=i,qe(i,l)){var s=r.interleaved;s===null?(t.next=t,Nl(r)):(t.next=s.next,s.next=t),r.interleaved=t;return}}catch{}finally{}n=Gu(e,r,t,a),n!==null&&(t=se(),je(n,e,a,t),lc(n,r,a))}}function tc(e){var r=e.alternate;return e===H||r!==null&&r===H}function oc(e,r){bn=st=!0;var n=e.pending;n===null?r.next=r:(r.next=n.next,n.next=r),e.pending=r}function lc(e,r,n){if(n&4194240){var a=r.lanes;a&=e.pendingLanes,n|=a,r.lanes=n,Sl(e,n)}}var ut={readContext:ze,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Zm={readContext:ze,useCallback:function(e,r){return Me().memoizedState=[e,r===void 0?null:r],e},useContext:ze,useEffect:Ji,useImperativeHandle:function(e,r,n){return n=n!=null?n.concat([e]):null,Ya(4194308,4,Xu.bind(null,r,e),n)},useLayoutEffect:function(e,r){return Ya(4194308,4,e,r)},useInsertionEffect:function(e,r){return Ya(4,2,e,r)},useMemo:function(e,r){var n=Me();return r=r===void 0?null:r,e=e(),n.memoizedState=[e,r],e},useReducer:function(e,r,n){var a=Me();return r=n!==void 0?n(r):r,a.memoizedState=a.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=Km.bind(null,H,e),[a.memoizedState,e]},useRef:function(e){var r=Me();return e={current:e},r.memoizedState=e},useState:Vi,useDebugValue:_l,useDeferredValue:function(e){return Me().memoizedState=e},useTransition:function(){var e=Vi(!1),r=e[0];return e=Wm.bind(null,e[1]),Me().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,n){var a=H,t=Me();if(G){if(n===void 0)throw Error(C(407));n=n()}else{if(n=r(),Z===null)throw Error(C(349));jr&30||Vu(a,r,n)}t.memoizedState=n;var o={value:n,getSnapshot:r};return t.queue=o,Ji(Bu.bind(null,a,o,e),[e]),a.flags|=2048,na(9,Ju.bind(null,a,o,n,r),void 0,null),n},useId:function(){var e=Me(),r=Z.identifierPrefix;if(G){var n=Je,a=Ve;n=(a&~(1<<32-Ne(a)-1)).toString(32)+n,r=":"+r+"R"+n,n=ea++,0<n&&(r+="H"+n.toString(32)),r+=":"}else n=$m++,r=":"+r+"r"+n.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},ep={readContext:ze,useCallback:ec,useContext:ze,useEffect:Hl,useImperativeHandle:Zu,useInsertionEffect:Wu,useLayoutEffect:Ku,useMemo:rc,useReducer:ao,useRef:$u,useState:function(){return ao(ra)},useDebugValue:_l,useDeferredValue:function(e){var r=Fe();return nc(r,$.memoizedState,e)},useTransition:function(){var e=ao(ra)[0],r=Fe().memoizedState;return[e,r]},useMutableSource:_u,useSyncExternalStore:Iu,useId:ac,unstable_isNewReconciler:!1},rp={readContext:ze,useCallback:ec,useContext:ze,useEffect:Hl,useImperativeHandle:Zu,useInsertionEffect:Wu,useLayoutEffect:Ku,useMemo:rc,useReducer:to,useRef:$u,useState:function(){return to(ra)},useDebugValue:_l,useDeferredValue:function(e){var r=Fe();return $===null?r.memoizedState=e:nc(r,$.memoizedState,e)},useTransition:function(){var e=to(ra)[0],r=Fe().memoizedState;return[e,r]},useMutableSource:_u,useSyncExternalStore:Iu,useId:ac,unstable_isNewReconciler:!1};function we(e,r){if(e&&e.defaultProps){r=_({},r),e=e.defaultProps;for(var n in e)r[n]===void 0&&(r[n]=e[n]);return r}return r}function _o(e,r,n,a){r=e.memoizedState,n=n(a,r),n=n==null?r:_({},r,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var At={isMounted:function(e){return(e=e._reactInternals)?Mr(e)===e:!1},enqueueSetState:function(e,r,n){e=e._reactInternals;var a=se(),t=pr(e),o=Ue(a,t);o.payload=r,n!=null&&(o.callback=n),r=dr(e,o,t),r!==null&&(je(r,e,t,a),Ma(r,e,t))},enqueueReplaceState:function(e,r,n){e=e._reactInternals;var a=se(),t=pr(e),o=Ue(a,t);o.tag=1,o.payload=r,n!=null&&(o.callback=n),r=dr(e,o,t),r!==null&&(je(r,e,t,a),Ma(r,e,t))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var n=se(),a=pr(e),t=Ue(n,a);t.tag=2,r!=null&&(t.callback=r),r=dr(e,t,a),r!==null&&(je(r,e,a,n),Ma(r,e,a))}};function Bi(e,r,n,a,t,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,o,l):r.prototype&&r.prototype.isPureReactComponent?!Qn(n,a)||!Qn(t,o):!0}function ic(e,r,n){var a=!1,t=vr,o=r.contextType;return typeof o=="object"&&o!==null?o=ze(o):(t=fe(r)?xr:le.current,a=r.contextTypes,o=(a=a!=null)?un(e,t):vr),r=new r(n,o),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=At,e.stateNode=r,r._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),r}function Ui(e,r,n,a){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(n,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(n,a),r.state!==e&&At.enqueueReplaceState(r,r.state,null)}function Io(e,r,n,a){var t=e.stateNode;t.props=n,t.state=e.memoizedState,t.refs={},jl(e);var o=r.contextType;typeof o=="object"&&o!==null?t.context=ze(o):(o=fe(r)?xr:le.current,t.context=un(e,o)),t.state=e.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(_o(e,r,o,n),t.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof t.getSnapshotBeforeUpdate=="function"||typeof t.UNSAFE_componentWillMount!="function"&&typeof t.componentWillMount!="function"||(r=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),r!==t.state&&At.enqueueReplaceState(t,t.state,null),lt(e,n,t,a),t.state=e.memoizedState),typeof t.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,r){try{var n="",a=r;do n+=kd(a),a=a.return;while(a);var t=n}catch(o){t=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:r,stack:t,digest:null}}function oo(e,r,n){return{value:e,source:null,stack:n??null,digest:r??null}}function Vo(e,r){try{console.error(r.value)}catch(n){setTimeout(function(){throw n})}}var np=typeof WeakMap=="function"?WeakMap:Map;function sc(e,r,n){n=Ue(-1,n),n.tag=3,n.payload={element:null};var a=r.value;return n.callback=function(){dt||(dt=!0,el=a),Vo(e,r)},n}function uc(e,r,n){n=Ue(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var t=r.value;n.payload=function(){return a(t)},n.callback=function(){Vo(e,r)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Vo(e,r),typeof a!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var l=r.stack;this.componentDidCatch(r.value,{componentStack:l!==null?l:""})}),n}function Qi(e,r,n){var a=e.pingCache;if(a===null){a=e.pingCache=new np;var t=new Set;a.set(r,t)}else t=a.get(r),t===void 0&&(t=new Set,a.set(r,t));t.has(n)||(t.add(n),e=hp.bind(null,e,r,n),r.then(e,e))}function $i(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function Wi(e,r,n,a,t){return e.mode&1?(e.flags|=65536,e.lanes=t,e):(e===r?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(r=Ue(-1,1),r.tag=2,dr(n,r,1))),n.lanes|=1),e)}var ap=Xe.ReactCurrentOwner,me=!1;function ie(e,r,n,a){r.child=e===null?Mu(r,null,n,a):dn(r,e.child,n,a)}function Ki(e,r,n,a,t){n=n.render;var o=r.ref;return on(r,t),a=Gl(e,r,n,a,o,t),n=Yl(),e!==null&&!me?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~t,Ke(e,r,t)):(G&&n&&Fl(r),r.flags|=1,ie(e,r,a,t),r.child)}function Xi(e,r,n,a,t){if(e===null){var o=n.type;return typeof o=="function"&&!Wl(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(r.tag=15,r.type=o,cc(e,r,o,a,t)):(e=Va(n.type,null,a,r,r.mode,t),e.ref=r.ref,e.return=r,r.child=e)}if(o=e.child,!(e.lanes&t)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Qn,n(l,a)&&e.ref===r.ref)return Ke(e,r,t)}return r.flags|=1,e=fr(o,a),e.ref=r.ref,e.return=r,r.child=e}function cc(e,r,n,a,t){if(e!==null){var o=e.memoizedProps;if(Qn(o,a)&&e.ref===r.ref)if(me=!1,r.pendingProps=a=o,(e.lanes&t)!==0)e.flags&131072&&(me=!0);else return r.lanes=e.lanes,Ke(e,r,t)}return Jo(e,r,n,a,t)}function dc(e,r,n){var a=r.pendingProps,t=a.children,o=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},L(en,he),he|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,L(en,he),he|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=o!==null?o.baseLanes:n,L(en,he),he|=a}else o!==null?(a=o.baseLanes|n,r.memoizedState=null):a=n,L(en,he),he|=a;return ie(e,r,t,n),r.child}function mc(e,r){var n=r.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(r.flags|=512,r.flags|=2097152)}function Jo(e,r,n,a,t){var o=fe(n)?xr:le.current;return o=un(r,o),on(r,t),n=Gl(e,r,n,a,o,t),a=Yl(),e!==null&&!me?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~t,Ke(e,r,t)):(G&&a&&Fl(r),r.flags|=1,ie(e,r,n,t),r.child)}function Zi(e,r,n,a,t){if(fe(n)){var o=!0;rt(r)}else o=!1;if(on(r,t),r.stateNode===null)Ha(e,r),ic(r,n,a),Io(r,n,a,t),a=!0;else if(e===null){var l=r.stateNode,i=r.memoizedProps;l.props=i;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=ze(u):(u=fe(n)?xr:le.current,u=un(r,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==a||s!==u)&&Ui(r,l,a,u),rr=!1;var y=r.memoizedState;l.state=y,lt(r,a,l,t),s=r.memoizedState,i!==a||y!==s||pe.current||rr?(typeof h=="function"&&(_o(r,n,h,a),s=r.memoizedState),(i=rr||Bi(r,n,i,a,y,s,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(r.flags|=4194308)):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=s),l.props=a,l.state=s,l.context=u,a=i):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{l=r.stateNode,Yu(e,r),i=r.memoizedProps,u=r.type===r.elementType?i:we(r.type,i),l.props=u,d=r.pendingProps,y=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=ze(s):(s=fe(n)?xr:le.current,s=un(r,s));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==d||y!==s)&&Ui(r,l,a,s),rr=!1,y=r.memoizedState,l.state=y,lt(r,a,l,t);var S=r.memoizedState;i!==d||y!==S||pe.current||rr?(typeof g=="function"&&(_o(r,n,g,a),S=r.memoizedState),(u=rr||Bi(r,n,u,a,y,S,s)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,S,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,S,s)),typeof l.componentDidUpdate=="function"&&(r.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=S),l.props=a,l.state=S,l.context=s,a=u):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(r.flags|=1024),a=!1)}return Bo(e,r,n,a,o,t)}function Bo(e,r,n,a,t,o){mc(e,r);var l=(r.flags&128)!==0;if(!a&&!l)return t&&Mi(r,n,!1),Ke(e,r,o);a=r.stateNode,ap.current=r;var i=l&&typeof n.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,e!==null&&l?(r.child=dn(r,e.child,null,o),r.child=dn(r,null,i,o)):ie(e,r,i,o),r.memoizedState=a.state,t&&Mi(r,n,!0),r.child}function pc(e){var r=e.stateNode;r.pendingContext?bi(e,r.pendingContext,r.pendingContext!==r.context):r.context&&bi(e,r.context,!1),ql(e,r.containerInfo)}function es(e,r,n,a,t){return cn(),kl(t),r.flags|=256,ie(e,r,n,a),r.child}var Uo={dehydrated:null,treeContext:null,retryLane:0};function Qo(e){return{baseLanes:e,cachePool:null,transitions:null}}function fc(e,r,n){var a=r.pendingProps,t=Y.current,o=!1,l=(r.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(t&2)!==0),i?(o=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(t|=1),L(Y,t&1),e===null)return Yo(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(l=a.children,e=a.fallback,o?(a=r.mode,o=r.child,l={mode:"hidden",children:l},!(a&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ft(l,a,0,null),e=Dr(e,a,n,null),o.return=r,e.return=r,o.sibling=e,r.child=o,r.child.memoizedState=Qo(n),r.memoizedState=Uo,e):Il(r,l));if(t=e.memoizedState,t!==null&&(i=t.dehydrated,i!==null))return tp(e,r,l,a,i,t,n);if(o){o=a.fallback,l=r.mode,t=e.child,i=t.sibling;var s={mode:"hidden",children:a.children};return!(l&1)&&r.child!==t?(a=r.child,a.childLanes=0,a.pendingProps=s,r.deletions=null):(a=fr(t,s),a.subtreeFlags=t.subtreeFlags&14680064),i!==null?o=fr(i,o):(o=Dr(o,l,n,null),o.flags|=2),o.return=r,a.return=r,a.sibling=o,r.child=a,a=o,o=r.child,l=e.child.memoizedState,l=l===null?Qo(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,r.memoizedState=Uo,a}return o=e.child,e=o.sibling,a=fr(o,{mode:"visible",children:a.children}),!(r.mode&1)&&(a.lanes=n),a.return=r,a.sibling=null,e!==null&&(n=r.deletions,n===null?(r.deletions=[e],r.flags|=16):n.push(e)),r.child=a,r.memoizedState=null,a}function Il(e,r){return r=Ft({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Pa(e,r,n,a){return a!==null&&kl(a),dn(r,e.child,null,n),e=Il(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function tp(e,r,n,a,t,o,l){if(n)return r.flags&256?(r.flags&=-257,a=oo(Error(C(422))),Pa(e,r,l,a)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(o=a.fallback,t=r.mode,a=Ft({mode:"visible",children:a.children},t,0,null),o=Dr(o,t,l,null),o.flags|=2,a.return=r,o.return=r,a.sibling=o,r.child=a,r.mode&1&&dn(r,e.child,null,l),r.child.memoizedState=Qo(l),r.memoizedState=Uo,o);if(!(r.mode&1))return Pa(e,r,l,null);if(t.data==="$!"){if(a=t.nextSibling&&t.nextSibling.dataset,a)var i=a.dgst;return a=i,o=Error(C(419)),a=oo(o,a,void 0),Pa(e,r,l,a)}if(i=(l&e.childLanes)!==0,me||i){if(a=Z,a!==null){switch(l&-l){case 4:t=2;break;case 16:t=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:t=32;break;case 536870912:t=268435456;break;default:t=0}t=t&(a.suspendedLanes|l)?0:t,t!==0&&t!==o.retryLane&&(o.retryLane=t,We(e,t),je(a,e,t,-1))}return $l(),a=oo(Error(C(421))),Pa(e,r,l,a)}return t.data==="$?"?(r.flags|=128,r.child=e.child,r=vp.bind(null,e),t._reactRetry=r,null):(e=o.treeContext,ve=cr(t.nextSibling),ge=r,G=!0,xe=null,e!==null&&(Oe[Re++]=Ve,Oe[Re++]=Je,Oe[Re++]=Nr,Ve=e.id,Je=e.overflow,Nr=r),r=Il(r,a.children),r.flags|=4096,r)}function rs(e,r,n){e.lanes|=r;var a=e.alternate;a!==null&&(a.lanes|=r),Ho(e.return,r,n)}function lo(e,r,n,a,t){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:t}:(o.isBackwards=r,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=n,o.tailMode=t)}function yc(e,r,n){var a=r.pendingProps,t=a.revealOrder,o=a.tail;if(ie(e,r,a.children,n),a=Y.current,a&2)a=a&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rs(e,n,r);else if(e.tag===19)rs(e,n,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(L(Y,a),!(r.mode&1))r.memoizedState=null;else switch(t){case"forwards":for(n=r.child,t=null;n!==null;)e=n.alternate,e!==null&&it(e)===null&&(t=n),n=n.sibling;n=t,n===null?(t=r.child,r.child=null):(t=n.sibling,n.sibling=null),lo(r,!1,t,n,o);break;case"backwards":for(n=null,t=r.child,r.child=null;t!==null;){if(e=t.alternate,e!==null&&it(e)===null){r.child=t;break}e=t.sibling,t.sibling=n,n=t,t=e}lo(r,!0,n,null,o);break;case"together":lo(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ha(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Ke(e,r,n){if(e!==null&&(r.dependencies=e.dependencies),qr|=r.lanes,!(n&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(C(153));if(r.child!==null){for(e=r.child,n=fr(e,e.pendingProps),r.child=n,n.return=r;e.sibling!==null;)e=e.sibling,n=n.sibling=fr(e,e.pendingProps),n.return=r;n.sibling=null}return r.child}function op(e,r,n){switch(r.tag){case 3:pc(r),cn();break;case 5:Hu(r);break;case 1:fe(r.type)&&rt(r);break;case 4:ql(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,t=r.memoizedProps.value;L(tt,a._currentValue),a._currentValue=t;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(L(Y,Y.current&1),r.flags|=128,null):n&r.child.childLanes?fc(e,r,n):(L(Y,Y.current&1),e=Ke(e,r,n),e!==null?e.sibling:null);L(Y,Y.current&1);break;case 19:if(a=(n&r.childLanes)!==0,e.flags&128){if(a)return yc(e,r,n);r.flags|=128}if(t=r.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),L(Y,Y.current),a)break;return null;case 22:case 23:return r.lanes=0,dc(e,r,n)}return Ke(e,r,n)}var hc,$o,vc,gc;hc=function(e,r){for(var n=r.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};$o=function(){};vc=function(e,r,n,a){var t=e.memoizedProps;if(t!==a){e=r.stateNode,kr(He.current);var o=null;switch(n){case"input":t=vo(e,t),a=vo(e,a),o=[];break;case"select":t=_({},t,{value:void 0}),a=_({},a,{value:void 0}),o=[];break;case"textarea":t=Eo(e,t),a=Eo(e,a),o=[];break;default:typeof t.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Za)}Oo(n,a);var l;n=null;for(u in t)if(!a.hasOwnProperty(u)&&t.hasOwnProperty(u)&&t[u]!=null)if(u==="style"){var i=t[u];for(l in i)i.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in a){var s=a[u];if(i=t!=null?t[u]:void 0,a.hasOwnProperty(u)&&s!==i&&(s!=null||i!=null))if(u==="style")if(i){for(l in i)!i.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&i[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,i=i?i.__html:void 0,s!=null&&i!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hn.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&b("scroll",e),o||i===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(r.updateQueue=u)&&(r.flags|=4)}};gc=function(e,r,n,a){n!==a&&(r.flags|=4)};function zn(e,r){if(!G)switch(e.tailMode){case"hidden":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function te(e){var r=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(r)for(var t=e.child;t!==null;)n|=t.lanes|t.childLanes,a|=t.subtreeFlags&14680064,a|=t.flags&14680064,t.return=e,t=t.sibling;else for(t=e.child;t!==null;)n|=t.lanes|t.childLanes,a|=t.subtreeFlags,a|=t.flags,t.return=e,t=t.sibling;return e.subtreeFlags|=a,e.childLanes=n,r}function lp(e,r,n){var a=r.pendingProps;switch(Pl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(r),null;case 1:return fe(r.type)&&et(),te(r),null;case 3:return a=r.stateNode,mn(),M(pe),M(le),bl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(za(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,xe!==null&&(al(xe),xe=null))),$o(e,r),te(r),null;case 5:Ll(r);var t=kr(Zn.current);if(n=r.type,e!==null&&r.stateNode!=null)vc(e,r,n,a,t),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(C(166));return te(r),null}if(e=kr(He.current),za(r)){a=r.stateNode,n=r.type;var o=r.memoizedProps;switch(a[Ge]=r,a[Kn]=o,e=(r.mode&1)!==0,n){case"dialog":b("cancel",a),b("close",a);break;case"iframe":case"object":case"embed":b("load",a);break;case"video":case"audio":for(t=0;t<Dn.length;t++)b(Dn[t],a);break;case"source":b("error",a);break;case"img":case"image":case"link":b("error",a),b("load",a);break;case"details":b("toggle",a);break;case"input":ci(a,o),b("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!o.multiple},b("invalid",a);break;case"textarea":mi(a,o),b("invalid",a)}Oo(n,o),t=null;for(var l in o)if(o.hasOwnProperty(l)){var i=o[l];l==="children"?typeof i=="string"?a.textContent!==i&&(o.suppressHydrationWarning!==!0&&Ta(a.textContent,i,e),t=["children",i]):typeof i=="number"&&a.textContent!==""+i&&(o.suppressHydrationWarning!==!0&&Ta(a.textContent,i,e),t=["children",""+i]):Hn.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&b("scroll",a)}switch(n){case"input":va(a),di(a,o,!0);break;case"textarea":va(a),pi(a);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(a.onclick=Za)}a=t,r.updateQueue=a,a!==null&&(r.flags|=4)}else{l=t.nodeType===9?t:t.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=l.createElement(n,{is:a.is}):(e=l.createElement(n),n==="select"&&(l=e,a.multiple?l.multiple=!0:a.size&&(l.size=a.size))):e=l.createElementNS(e,n),e[Ge]=r,e[Kn]=a,hc(e,r,!1,!1),r.stateNode=e;e:{switch(l=Ro(n,a),n){case"dialog":b("cancel",e),b("close",e),t=a;break;case"iframe":case"object":case"embed":b("load",e),t=a;break;case"video":case"audio":for(t=0;t<Dn.length;t++)b(Dn[t],e);t=a;break;case"source":b("error",e),t=a;break;case"img":case"image":case"link":b("error",e),b("load",e),t=a;break;case"details":b("toggle",e),t=a;break;case"input":ci(e,a),t=vo(e,a),b("invalid",e);break;case"option":t=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},t=_({},a,{value:void 0}),b("invalid",e);break;case"textarea":mi(e,a),t=Eo(e,a),b("invalid",e);break;default:t=a}Oo(n,t),i=t;for(o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="style"?$s(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Us(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&_n(e,s):typeof s=="number"&&_n(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Hn.hasOwnProperty(o)?s!=null&&o==="onScroll"&&b("scroll",e):s!=null&&pl(e,o,s,l))}switch(n){case"input":va(e),di(e,a,!1);break;case"textarea":va(e),pi(e);break;case"option":a.value!=null&&e.setAttribute("value",""+hr(a.value));break;case"select":e.multiple=!!a.multiple,o=a.value,o!=null?rn(e,!!a.multiple,o,!1):a.defaultValue!=null&&rn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof t.onClick=="function"&&(e.onclick=Za)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return te(r),null;case 6:if(e&&r.stateNode!=null)gc(e,r,e.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(C(166));if(n=kr(Zn.current),kr(He.current),za(r)){if(a=r.stateNode,n=r.memoizedProps,a[Ge]=r,(o=a.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:Ta(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ta(a.nodeValue,n,(e.mode&1)!==0)}o&&(r.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Ge]=r,r.stateNode=a}return te(r),null;case 13:if(M(Y),a=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&ve!==null&&r.mode&1&&!(r.flags&128))Lu(),cn(),r.flags|=98560,o=!1;else if(o=za(r),a!==null&&a.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=r.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[Ge]=r}else cn(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;te(r),o=!1}else xe!==null&&(al(xe),xe=null),o=!0;if(!o)return r.flags&65536?r:null}return r.flags&128?(r.lanes=n,r):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(r.child.flags|=8192,r.mode&1&&(e===null||Y.current&1?W===0&&(W=3):$l())),r.updateQueue!==null&&(r.flags|=4),te(r),null);case 4:return mn(),$o(e,r),e===null&&$n(r.stateNode.containerInfo),te(r),null;case 10:return xl(r.type._context),te(r),null;case 17:return fe(r.type)&&et(),te(r),null;case 19:if(M(Y),o=r.memoizedState,o===null)return te(r),null;if(a=(r.flags&128)!==0,l=o.rendering,l===null)if(a)zn(o,!1);else{if(W!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(l=it(e),l!==null){for(r.flags|=128,zn(o,!1),a=l.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=n,n=r.child;n!==null;)o=n,e=a,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return L(Y,Y.current&1|2),r.child}e=e.sibling}o.tail!==null&&B()>fn&&(r.flags|=128,a=!0,zn(o,!1),r.lanes=4194304)}else{if(!a)if(e=it(l),e!==null){if(r.flags|=128,a=!0,n=e.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),zn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!G)return te(r),null}else 2*B()-o.renderingStartTime>fn&&n!==1073741824&&(r.flags|=128,a=!0,zn(o,!1),r.lanes=4194304);o.isBackwards?(l.sibling=r.child,r.child=l):(n=o.last,n!==null?n.sibling=l:r.child=l,o.last=l)}return o.tail!==null?(r=o.tail,o.rendering=r,o.tail=r.sibling,o.renderingStartTime=B(),r.sibling=null,n=Y.current,L(Y,a?n&1|2:n&1),r):(te(r),null);case 22:case 23:return Ql(),a=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(r.flags|=8192),a&&r.mode&1?he&1073741824&&(te(r),r.subtreeFlags&6&&(r.flags|=8192)):te(r),null;case 24:return null;case 25:return null}throw Error(C(156,r.tag))}function ip(e,r){switch(Pl(r),r.tag){case 1:return fe(r.type)&&et(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return mn(),M(pe),M(le),bl(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return Ll(r),null;case 13:if(M(Y),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(C(340));cn()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return M(Y),null;case 4:return mn(),null;case 10:return xl(r.type._context),null;case 22:case 23:return Ql(),null;case 24:return null;default:return null}}var ka=!1,oe=!1,sp=typeof WeakSet=="function"?WeakSet:Set,T=null;function Zr(e,r){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){I(e,r,a)}else n.current=null}function Wo(e,r,n){try{n()}catch(a){I(e,r,a)}}var ns=!1;function up(e,r){if(No=Wa,e=Ru(),zl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var t=a.anchorOffset,o=a.focusNode;a=a.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,i=-1,s=-1,u=0,h=0,d=e,y=null;r:for(;;){for(var g;d!==n||t!==0&&d.nodeType!==3||(i=l+t),d!==o||a!==0&&d.nodeType!==3||(s=l+a),d.nodeType===3&&(l+=d.nodeValue.length),(g=d.firstChild)!==null;)y=d,d=g;for(;;){if(d===e)break r;if(y===n&&++u===t&&(i=l),y===o&&++h===a&&(s=l),(g=d.nextSibling)!==null)break;d=y,y=d.parentNode}d=g}n=i===-1||s===-1?null:{start:i,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(jo={focusedElem:e,selectionRange:n},Wa=!1,T=r;T!==null;)if(r=T,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,T=e;else for(;T!==null;){r=T;try{var S=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var E=S.memoizedProps,A=S.memoizedState,p=r.stateNode,c=p.getSnapshotBeforeUpdate(r.elementType===r.type?E:we(r.type,E),A);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=r.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(v){I(r,r.return,v)}if(e=r.sibling,e!==null){e.return=r.return,T=e;break}T=r.return}return S=ns,ns=!1,S}function Mn(e,r,n){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var t=a=a.next;do{if((t.tag&e)===e){var o=t.destroy;t.destroy=void 0,o!==void 0&&Wo(r,n,o)}t=t.next}while(t!==a)}}function Tt(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var n=r=r.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==r)}}function Ko(e){var r=e.ref;if(r!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof r=="function"?r(e):r.current=e}}function Sc(e){var r=e.alternate;r!==null&&(e.alternate=null,Sc(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Ge],delete r[Kn],delete r[bo],delete r[Jm],delete r[Bm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ec(e){return e.tag===5||e.tag===3||e.tag===4}function as(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xo(e,r,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?n.nodeType===8?n.parentNode.insertBefore(e,r):n.insertBefore(e,r):(n.nodeType===8?(r=n.parentNode,r.insertBefore(e,n)):(r=n,r.appendChild(e)),n=n._reactRootContainer,n!=null||r.onclick!==null||(r.onclick=Za));else if(a!==4&&(e=e.child,e!==null))for(Xo(e,r,n),e=e.sibling;e!==null;)Xo(e,r,n),e=e.sibling}function Zo(e,r,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,r?n.insertBefore(e,r):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Zo(e,r,n),e=e.sibling;e!==null;)Zo(e,r,n),e=e.sibling}var ee=null,De=!1;function Ze(e,r,n){for(n=n.child;n!==null;)Cc(e,r,n),n=n.sibling}function Cc(e,r,n){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(vt,n)}catch{}switch(n.tag){case 5:oe||Zr(n,r);case 6:var a=ee,t=De;ee=null,Ze(e,r,n),ee=a,De=t,ee!==null&&(De?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(De?(e=ee,n=n.stateNode,e.nodeType===8?Zt(e.parentNode,n):e.nodeType===1&&Zt(e,n),Bn(e)):Zt(ee,n.stateNode));break;case 4:a=ee,t=De,ee=n.stateNode.containerInfo,De=!0,Ze(e,r,n),ee=a,De=t;break;case 0:case 11:case 14:case 15:if(!oe&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){t=a=a.next;do{var o=t,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Wo(n,r,l),t=t.next}while(t!==a)}Ze(e,r,n);break;case 1:if(!oe&&(Zr(n,r),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(i){I(n,r,i)}Ze(e,r,n);break;case 21:Ze(e,r,n);break;case 22:n.mode&1?(oe=(a=oe)||n.memoizedState!==null,Ze(e,r,n),oe=a):Ze(e,r,n);break;default:Ze(e,r,n)}}function ts(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sp),r.forEach(function(a){var t=gp.bind(null,e,a);n.has(a)||(n.add(a),a.then(t,t))})}}function ke(e,r){var n=r.deletions;if(n!==null)for(var a=0;a<n.length;a++){var t=n[a];try{var o=e,l=r,i=l;e:for(;i!==null;){switch(i.tag){case 5:ee=i.stateNode,De=!1;break e;case 3:ee=i.stateNode.containerInfo,De=!0;break e;case 4:ee=i.stateNode.containerInfo,De=!0;break e}i=i.return}if(ee===null)throw Error(C(160));Cc(o,l,t),ee=null,De=!1;var s=t.alternate;s!==null&&(s.return=null),t.return=null}catch(u){I(t,r,u)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Oc(r,e),r=r.sibling}function Oc(e,r){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ke(r,e),be(e),a&4){try{Mn(3,e,e.return),Tt(3,e)}catch(E){I(e,e.return,E)}try{Mn(5,e,e.return)}catch(E){I(e,e.return,E)}}break;case 1:ke(r,e),be(e),a&512&&n!==null&&Zr(n,n.return);break;case 5:if(ke(r,e),be(e),a&512&&n!==null&&Zr(n,n.return),e.flags&32){var t=e.stateNode;try{_n(t,"")}catch(E){I(e,e.return,E)}}if(a&4&&(t=e.stateNode,t!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,i=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{i==="input"&&o.type==="radio"&&o.name!=null&&Vs(t,o),Ro(i,l);var u=Ro(i,o);for(l=0;l<s.length;l+=2){var h=s[l],d=s[l+1];h==="style"?$s(t,d):h==="dangerouslySetInnerHTML"?Us(t,d):h==="children"?_n(t,d):pl(t,h,d,u)}switch(i){case"input":go(t,o);break;case"textarea":Js(t,o);break;case"select":var y=t._wrapperState.wasMultiple;t._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?rn(t,!!o.multiple,g,!1):y!==!!o.multiple&&(o.defaultValue!=null?rn(t,!!o.multiple,o.defaultValue,!0):rn(t,!!o.multiple,o.multiple?[]:"",!1))}t[Kn]=o}catch(E){I(e,e.return,E)}}break;case 6:if(ke(r,e),be(e),a&4){if(e.stateNode===null)throw Error(C(162));t=e.stateNode,o=e.memoizedProps;try{t.nodeValue=o}catch(E){I(e,e.return,E)}}break;case 3:if(ke(r,e),be(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Bn(r.containerInfo)}catch(E){I(e,e.return,E)}break;case 4:ke(r,e),be(e);break;case 13:ke(r,e),be(e),t=e.child,t.flags&8192&&(o=t.memoizedState!==null,t.stateNode.isHidden=o,!o||t.alternate!==null&&t.alternate.memoizedState!==null||(Bl=B())),a&4&&ts(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(u=oe)||h,ke(r,e),oe=u):ke(r,e),be(e),a&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(T=e,h=e.child;h!==null;){for(d=T=h;T!==null;){switch(y=T,g=y.child,y.tag){case 0:case 11:case 14:case 15:Mn(4,y,y.return);break;case 1:Zr(y,y.return);var S=y.stateNode;if(typeof S.componentWillUnmount=="function"){a=y,n=y.return;try{r=a,S.props=r.memoizedProps,S.state=r.memoizedState,S.componentWillUnmount()}catch(E){I(a,n,E)}}break;case 5:Zr(y,y.return);break;case 22:if(y.memoizedState!==null){ls(d);continue}}g!==null?(g.return=y,T=g):ls(d)}h=h.sibling}e:for(h=null,d=e;;){if(d.tag===5){if(h===null){h=d;try{t=d.stateNode,u?(o=t.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(i=d.stateNode,s=d.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,i.style.display=Qs("display",l))}catch(E){I(e,e.return,E)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(E){I(e,e.return,E)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ke(r,e),be(e),a&4&&ts(e);break;case 21:break;default:ke(r,e),be(e)}}function be(e){var r=e.flags;if(r&2){try{e:{for(var n=e.return;n!==null;){if(Ec(n)){var a=n;break e}n=n.return}throw Error(C(160))}switch(a.tag){case 5:var t=a.stateNode;a.flags&32&&(_n(t,""),a.flags&=-33);var o=as(e);Zo(e,o,t);break;case 3:case 4:var l=a.stateNode.containerInfo,i=as(e);Xo(e,i,l);break;default:throw Error(C(161))}}catch(s){I(e,e.return,s)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function cp(e,r,n){T=e,Rc(e)}function Rc(e,r,n){for(var a=(e.mode&1)!==0;T!==null;){var t=T,o=t.child;if(t.tag===22&&a){var l=t.memoizedState!==null||ka;if(!l){var i=t.alternate,s=i!==null&&i.memoizedState!==null||oe;i=ka;var u=oe;if(ka=l,(oe=s)&&!u)for(T=t;T!==null;)l=T,s=l.child,l.tag===22&&l.memoizedState!==null?is(t):s!==null?(s.return=l,T=s):is(t);for(;o!==null;)T=o,Rc(o),o=o.sibling;T=t,ka=i,oe=u}os(e)}else t.subtreeFlags&8772&&o!==null?(o.return=t,T=o):os(e)}}function os(e){for(;T!==null;){var r=T;if(r.flags&8772){var n=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:oe||Tt(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!oe)if(n===null)a.componentDidMount();else{var t=r.elementType===r.type?n.memoizedProps:we(r.type,n.memoizedProps);a.componentDidUpdate(t,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var o=r.updateQueue;o!==null&&Ii(r,o,a);break;case 3:var l=r.updateQueue;if(l!==null){if(n=null,r.child!==null)switch(r.child.tag){case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}Ii(r,l,n)}break;case 5:var i=r.stateNode;if(n===null&&r.flags&4){n=i;var s=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var u=r.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Bn(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}oe||r.flags&512&&Ko(r)}catch(y){I(r,r.return,y)}}if(r===e){T=null;break}if(n=r.sibling,n!==null){n.return=r.return,T=n;break}T=r.return}}function ls(e){for(;T!==null;){var r=T;if(r===e){T=null;break}var n=r.sibling;if(n!==null){n.return=r.return,T=n;break}T=r.return}}function is(e){for(;T!==null;){var r=T;try{switch(r.tag){case 0:case 11:case 15:var n=r.return;try{Tt(4,r)}catch(s){I(r,n,s)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var t=r.return;try{a.componentDidMount()}catch(s){I(r,t,s)}}var o=r.return;try{Ko(r)}catch(s){I(r,o,s)}break;case 5:var l=r.return;try{Ko(r)}catch(s){I(r,l,s)}}}catch(s){I(r,r.return,s)}if(r===e){T=null;break}var i=r.sibling;if(i!==null){i.return=r.return,T=i;break}T=r.return}}var dp=Math.ceil,ct=Xe.ReactCurrentDispatcher,Vl=Xe.ReactCurrentOwner,Te=Xe.ReactCurrentBatchConfig,j=0,Z=null,U=null,re=0,he=0,en=Sr(0),W=0,aa=null,qr=0,zt=0,Jl=0,Gn=null,de=null,Bl=0,fn=1/0,_e=null,dt=!1,el=null,mr=null,wa=!1,or=null,mt=0,Yn=0,rl=null,_a=-1,Ia=0;function se(){return j&6?B():_a!==-1?_a:_a=B()}function pr(e){return e.mode&1?j&2&&re!==0?re&-re:Qm.transition!==null?(Ia===0&&(Ia=iu()),Ia):(e=q,e!==0||(e=window.event,e=e===void 0?16:fu(e.type)),e):1}function je(e,r,n,a){if(50<Yn)throw Yn=0,rl=null,Error(C(185));ia(e,n,a),(!(j&2)||e!==Z)&&(e===Z&&(!(j&2)&&(zt|=n),W===4&&ar(e,re)),ye(e,a),n===1&&j===0&&!(r.mode&1)&&(fn=B()+500,Ot&&Er()))}function ye(e,r){var n=e.callbackNode;Qd(e,r);var a=$a(e,e===Z?re:0);if(a===0)n!==null&&hi(n),e.callbackNode=null,e.callbackPriority=0;else if(r=a&-a,e.callbackPriority!==r){if(n!=null&&hi(n),r===1)e.tag===0?Um(ss.bind(null,e)):Nu(ss.bind(null,e)),Im(function(){!(j&6)&&Er()}),n=null;else{switch(su(a)){case 1:n=gl;break;case 4:n=ou;break;case 16:n=Qa;break;case 536870912:n=lu;break;default:n=Qa}n=Dc(n,Ac.bind(null,e))}e.callbackPriority=r,e.callbackNode=n}}function Ac(e,r){if(_a=-1,Ia=0,j&6)throw Error(C(327));var n=e.callbackNode;if(ln()&&e.callbackNode!==n)return null;var a=$a(e,e===Z?re:0);if(a===0)return null;if(a&30||a&e.expiredLanes||r)r=pt(e,a);else{r=a;var t=j;j|=2;var o=zc();(Z!==e||re!==r)&&(_e=null,fn=B()+500,wr(e,r));do try{fp();break}catch(i){Tc(e,i)}while(!0);Dl(),ct.current=o,j=t,U!==null?r=0:(Z=null,re=0,r=W)}if(r!==0){if(r===2&&(t=Po(e),t!==0&&(a=t,r=nl(e,t))),r===1)throw n=aa,wr(e,0),ar(e,a),ye(e,B()),n;if(r===6)ar(e,a);else{if(t=e.current.alternate,!(a&30)&&!mp(t)&&(r=pt(e,a),r===2&&(o=Po(e),o!==0&&(a=o,r=nl(e,o))),r===1))throw n=aa,wr(e,0),ar(e,a),ye(e,B()),n;switch(e.finishedWork=t,e.finishedLanes=a,r){case 0:case 1:throw Error(C(345));case 2:Tr(e,de,_e);break;case 3:if(ar(e,a),(a&130023424)===a&&(r=Bl+500-B(),10<r)){if($a(e,0)!==0)break;if(t=e.suspendedLanes,(t&a)!==a){se(),e.pingedLanes|=e.suspendedLanes&t;break}e.timeoutHandle=Lo(Tr.bind(null,e,de,_e),r);break}Tr(e,de,_e);break;case 4:if(ar(e,a),(a&4194240)===a)break;for(r=e.eventTimes,t=-1;0<a;){var l=31-Ne(a);o=1<<l,l=r[l],l>t&&(t=l),a&=~o}if(a=t,a=B()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*dp(a/1960))-a,10<a){e.timeoutHandle=Lo(Tr.bind(null,e,de,_e),a);break}Tr(e,de,_e);break;case 5:Tr(e,de,_e);break;default:throw Error(C(329))}}}return ye(e,B()),e.callbackNode===n?Ac.bind(null,e):null}function nl(e,r){var n=Gn;return e.current.memoizedState.isDehydrated&&(wr(e,r).flags|=256),e=pt(e,r),e!==2&&(r=de,de=n,r!==null&&al(r)),e}function al(e){de===null?de=e:de.push.apply(de,e)}function mp(e){for(var r=e;;){if(r.flags&16384){var n=r.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var t=n[a],o=t.getSnapshot;t=t.value;try{if(!qe(o(),t))return!1}catch{return!1}}}if(n=r.child,r.subtreeFlags&16384&&n!==null)n.return=r,r=n;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ar(e,r){for(r&=~Jl,r&=~zt,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var n=31-Ne(r),a=1<<n;e[n]=-1,r&=~a}}function ss(e){if(j&6)throw Error(C(327));ln();var r=$a(e,0);if(!(r&1))return ye(e,B()),null;var n=pt(e,r);if(e.tag!==0&&n===2){var a=Po(e);a!==0&&(r=a,n=nl(e,a))}if(n===1)throw n=aa,wr(e,0),ar(e,r),ye(e,B()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Tr(e,de,_e),ye(e,B()),null}function Ul(e,r){var n=j;j|=1;try{return e(r)}finally{j=n,j===0&&(fn=B()+500,Ot&&Er())}}function Lr(e){or!==null&&or.tag===0&&!(j&6)&&ln();var r=j;j|=1;var n=Te.transition,a=q;try{if(Te.transition=null,q=1,e)return e()}finally{q=a,Te.transition=n,j=r,!(j&6)&&Er()}}function Ql(){he=en.current,M(en)}function wr(e,r){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,_m(n)),U!==null)for(n=U.return;n!==null;){var a=n;switch(Pl(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&et();break;case 3:mn(),M(pe),M(le),bl();break;case 5:Ll(a);break;case 4:mn();break;case 13:M(Y);break;case 19:M(Y);break;case 10:xl(a.type._context);break;case 22:case 23:Ql()}n=n.return}if(Z=e,U=e=fr(e.current,null),re=he=r,W=0,aa=null,Jl=zt=qr=0,de=Gn=null,Pr!==null){for(r=0;r<Pr.length;r++)if(n=Pr[r],a=n.interleaved,a!==null){n.interleaved=null;var t=a.next,o=n.pending;if(o!==null){var l=o.next;o.next=t,a.next=l}n.pending=a}Pr=null}return e}function Tc(e,r){do{var n=U;try{if(Dl(),Ga.current=ut,st){for(var a=H.memoizedState;a!==null;){var t=a.queue;t!==null&&(t.pending=null),a=a.next}st=!1}if(jr=0,X=$=H=null,bn=!1,ea=0,Vl.current=null,n===null||n.return===null){W=1,aa=r,U=null;break}e:{var o=e,l=n.return,i=n,s=r;if(r=re,i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,h=i,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var y=h.alternate;y?(h.updateQueue=y.updateQueue,h.memoizedState=y.memoizedState,h.lanes=y.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=$i(l);if(g!==null){g.flags&=-257,Wi(g,l,i,o,r),g.mode&1&&Qi(o,u,r),r=g,s=u;var S=r.updateQueue;if(S===null){var E=new Set;E.add(s),r.updateQueue=E}else S.add(s);break e}else{if(!(r&1)){Qi(o,u,r),$l();break e}s=Error(C(426))}}else if(G&&i.mode&1){var A=$i(l);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Wi(A,l,i,o,r),kl(pn(s,i));break e}}o=s=pn(s,i),W!==4&&(W=2),Gn===null?Gn=[o]:Gn.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,r&=-r,o.lanes|=r;var p=sc(o,s,r);_i(o,p);break e;case 1:i=s;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(mr===null||!mr.has(m)))){o.flags|=65536,r&=-r,o.lanes|=r;var v=uc(o,i,r);_i(o,v);break e}}o=o.return}while(o!==null)}Pc(n)}catch(R){r=R,U===n&&n!==null&&(U=n=n.return);continue}break}while(!0)}function zc(){var e=ct.current;return ct.current=ut,e===null?ut:e}function $l(){(W===0||W===3||W===2)&&(W=4),Z===null||!(qr&268435455)&&!(zt&268435455)||ar(Z,re)}function pt(e,r){var n=j;j|=2;var a=zc();(Z!==e||re!==r)&&(_e=null,wr(e,r));do try{pp();break}catch(t){Tc(e,t)}while(!0);if(Dl(),j=n,ct.current=a,U!==null)throw Error(C(261));return Z=null,re=0,W}function pp(){for(;U!==null;)Fc(U)}function fp(){for(;U!==null&&!Gd();)Fc(U)}function Fc(e){var r=wc(e.alternate,e,he);e.memoizedProps=e.pendingProps,r===null?Pc(e):U=r,Vl.current=null}function Pc(e){var r=e;do{var n=r.alternate;if(e=r.return,r.flags&32768){if(n=ip(n,r),n!==null){n.flags&=32767,U=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{W=6,U=null;return}}else if(n=lp(n,r,he),n!==null){U=n;return}if(r=r.sibling,r!==null){U=r;return}U=r=e}while(r!==null);W===0&&(W=5)}function Tr(e,r,n){var a=q,t=Te.transition;try{Te.transition=null,q=1,yp(e,r,n,a)}finally{Te.transition=t,q=a}return null}function yp(e,r,n,a){do ln();while(or!==null);if(j&6)throw Error(C(327));n=e.finishedWork;var t=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if($d(e,o),e===Z&&(U=Z=null,re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wa||(wa=!0,Dc(Qa,function(){return ln(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Te.transition,Te.transition=null;var l=q;q=1;var i=j;j|=4,Vl.current=null,up(e,n),Oc(n,e),qm(jo),Wa=!!No,jo=No=null,e.current=n,cp(n),Yd(),j=i,q=l,Te.transition=o}else e.current=n;if(wa&&(wa=!1,or=e,mt=t),o=e.pendingLanes,o===0&&(mr=null),Id(n.stateNode),ye(e,B()),r!==null)for(a=e.onRecoverableError,n=0;n<r.length;n++)t=r[n],a(t.value,{componentStack:t.stack,digest:t.digest});if(dt)throw dt=!1,e=el,el=null,e;return mt&1&&e.tag!==0&&ln(),o=e.pendingLanes,o&1?e===rl?Yn++:(Yn=0,rl=e):Yn=0,Er(),null}function ln(){if(or!==null){var e=su(mt),r=Te.transition,n=q;try{if(Te.transition=null,q=16>e?16:e,or===null)var a=!1;else{if(e=or,or=null,mt=0,j&6)throw Error(C(331));var t=j;for(j|=4,T=e.current;T!==null;){var o=T,l=o.child;if(T.flags&16){var i=o.deletions;if(i!==null){for(var s=0;s<i.length;s++){var u=i[s];for(T=u;T!==null;){var h=T;switch(h.tag){case 0:case 11:case 15:Mn(8,h,o)}var d=h.child;if(d!==null)d.return=h,T=d;else for(;T!==null;){h=T;var y=h.sibling,g=h.return;if(Sc(h),h===u){T=null;break}if(y!==null){y.return=g,T=y;break}T=g}}}var S=o.alternate;if(S!==null){var E=S.child;if(E!==null){S.child=null;do{var A=E.sibling;E.sibling=null,E=A}while(E!==null)}}T=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,T=l;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Mn(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,T=p;break e}T=o.return}}var c=e.current;for(T=c;T!==null;){l=T;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,T=m;else e:for(l=c;T!==null;){if(i=T,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Tt(9,i)}}catch(R){I(i,i.return,R)}if(i===l){T=null;break e}var v=i.sibling;if(v!==null){v.return=i.return,T=v;break e}T=i.return}}if(j=t,Er(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(vt,e)}catch{}a=!0}return a}finally{q=n,Te.transition=r}}return!1}function us(e,r,n){r=pn(n,r),r=sc(e,r,1),e=dr(e,r,1),r=se(),e!==null&&(ia(e,1,r),ye(e,r))}function I(e,r,n){if(e.tag===3)us(e,e,n);else for(;r!==null;){if(r.tag===3){us(r,e,n);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(mr===null||!mr.has(a))){e=pn(n,e),e=uc(r,e,1),r=dr(r,e,1),e=se(),r!==null&&(ia(r,1,e),ye(r,e));break}}r=r.return}}function hp(e,r,n){var a=e.pingCache;a!==null&&a.delete(r),r=se(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(re&n)===n&&(W===4||W===3&&(re&130023424)===re&&500>B()-Bl?wr(e,0):Jl|=n),ye(e,r)}function kc(e,r){r===0&&(e.mode&1?(r=Ea,Ea<<=1,!(Ea&130023424)&&(Ea=4194304)):r=1);var n=se();e=We(e,r),e!==null&&(ia(e,r,n),ye(e,n))}function vp(e){var r=e.memoizedState,n=0;r!==null&&(n=r.retryLane),kc(e,n)}function gp(e,r){var n=0;switch(e.tag){case 13:var a=e.stateNode,t=e.memoizedState;t!==null&&(n=t.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(C(314))}a!==null&&a.delete(r),kc(e,n)}var wc;wc=function(e,r,n){if(e!==null)if(e.memoizedProps!==r.pendingProps||pe.current)me=!0;else{if(!(e.lanes&n)&&!(r.flags&128))return me=!1,op(e,r,n);me=!!(e.flags&131072)}else me=!1,G&&r.flags&1048576&&ju(r,at,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;Ha(e,r),e=r.pendingProps;var t=un(r,le.current);on(r,n),t=Gl(null,r,a,e,t,n);var o=Yl();return r.flags|=1,typeof t=="object"&&t!==null&&typeof t.render=="function"&&t.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,fe(a)?(o=!0,rt(r)):o=!1,r.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,jl(r),t.updater=At,r.stateNode=t,t._reactInternals=r,Io(r,a,e,n),r=Bo(null,r,a,!0,o,n)):(r.tag=0,G&&o&&Fl(r),ie(null,r,t,n),r=r.child),r;case 16:a=r.elementType;e:{switch(Ha(e,r),e=r.pendingProps,t=a._init,a=t(a._payload),r.type=a,t=r.tag=Ep(a),e=we(a,e),t){case 0:r=Jo(null,r,a,e,n);break e;case 1:r=Zi(null,r,a,e,n);break e;case 11:r=Ki(null,r,a,e,n);break e;case 14:r=Xi(null,r,a,we(a.type,e),n);break e}throw Error(C(306,a,""))}return r;case 0:return a=r.type,t=r.pendingProps,t=r.elementType===a?t:we(a,t),Jo(e,r,a,t,n);case 1:return a=r.type,t=r.pendingProps,t=r.elementType===a?t:we(a,t),Zi(e,r,a,t,n);case 3:e:{if(pc(r),e===null)throw Error(C(387));a=r.pendingProps,o=r.memoizedState,t=o.element,Yu(e,r),lt(r,a,null,n);var l=r.memoizedState;if(a=l.element,o.isDehydrated)if(o={element:a,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},r.updateQueue.baseState=o,r.memoizedState=o,r.flags&256){t=pn(Error(C(423)),r),r=es(e,r,a,n,t);break e}else if(a!==t){t=pn(Error(C(424)),r),r=es(e,r,a,n,t);break e}else for(ve=cr(r.stateNode.containerInfo.firstChild),ge=r,G=!0,xe=null,n=Mu(r,null,a,n),r.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cn(),a===t){r=Ke(e,r,n);break e}ie(e,r,a,n)}r=r.child}return r;case 5:return Hu(r),e===null&&Yo(r),a=r.type,t=r.pendingProps,o=e!==null?e.memoizedProps:null,l=t.children,qo(a,t)?l=null:o!==null&&qo(a,o)&&(r.flags|=32),mc(e,r),ie(e,r,l,n),r.child;case 6:return e===null&&Yo(r),null;case 13:return fc(e,r,n);case 4:return ql(r,r.stateNode.containerInfo),a=r.pendingProps,e===null?r.child=dn(r,null,a,n):ie(e,r,a,n),r.child;case 11:return a=r.type,t=r.pendingProps,t=r.elementType===a?t:we(a,t),Ki(e,r,a,t,n);case 7:return ie(e,r,r.pendingProps,n),r.child;case 8:return ie(e,r,r.pendingProps.children,n),r.child;case 12:return ie(e,r,r.pendingProps.children,n),r.child;case 10:e:{if(a=r.type._context,t=r.pendingProps,o=r.memoizedProps,l=t.value,L(tt,a._currentValue),a._currentValue=l,o!==null)if(qe(o.value,l)){if(o.children===t.children&&!pe.current){r=Ke(e,r,n);break e}}else for(o=r.child,o!==null&&(o.return=r);o!==null;){var i=o.dependencies;if(i!==null){l=o.child;for(var s=i.firstContext;s!==null;){if(s.context===a){if(o.tag===1){s=Ue(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ho(o.return,n,r),i.lanes|=n;break}s=s.next}}else if(o.tag===10)l=o.type===r.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(C(341));l.lanes|=n,i=l.alternate,i!==null&&(i.lanes|=n),Ho(l,n,r),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===r){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ie(e,r,t.children,n),r=r.child}return r;case 9:return t=r.type,a=r.pendingProps.children,on(r,n),t=ze(t),a=a(t),r.flags|=1,ie(e,r,a,n),r.child;case 14:return a=r.type,t=we(a,r.pendingProps),t=we(a.type,t),Xi(e,r,a,t,n);case 15:return cc(e,r,r.type,r.pendingProps,n);case 17:return a=r.type,t=r.pendingProps,t=r.elementType===a?t:we(a,t),Ha(e,r),r.tag=1,fe(a)?(e=!0,rt(r)):e=!1,on(r,n),ic(r,a,t),Io(r,a,t,n),Bo(null,r,a,!0,e,n);case 19:return yc(e,r,n);case 22:return dc(e,r,n)}throw Error(C(156,r.tag))};function Dc(e,r){return tu(e,r)}function Sp(e,r,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,r,n,a){return new Sp(e,r,n,a)}function Wl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ep(e){if(typeof e=="function")return Wl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yl)return 11;if(e===hl)return 14}return 2}function fr(e,r){var n=e.alternate;return n===null?(n=Ae(e.tag,r,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=r,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,r=e.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Va(e,r,n,a,t,o){var l=2;if(a=e,typeof e=="function")Wl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Vr:return Dr(n.children,t,o,r);case fl:l=8,t|=8;break;case po:return e=Ae(12,n,r,t|2),e.elementType=po,e.lanes=o,e;case fo:return e=Ae(13,n,r,t),e.elementType=fo,e.lanes=o,e;case yo:return e=Ae(19,n,r,t),e.elementType=yo,e.lanes=o,e;case Hs:return Ft(n,t,o,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gs:l=10;break e;case Ys:l=9;break e;case yl:l=11;break e;case hl:l=14;break e;case er:l=16,a=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return r=Ae(l,n,r,t),r.elementType=e,r.type=a,r.lanes=o,r}function Dr(e,r,n,a){return e=Ae(7,e,a,r),e.lanes=n,e}function Ft(e,r,n,a){return e=Ae(22,e,a,r),e.elementType=Hs,e.lanes=n,e.stateNode={isHidden:!1},e}function io(e,r,n){return e=Ae(6,e,null,r),e.lanes=n,e}function so(e,r,n){return r=Ae(4,e.children!==null?e.children:[],e.key,r),r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Cp(e,r,n,a,t){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_t(0),this.expirationTimes=_t(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_t(0),this.identifierPrefix=a,this.onRecoverableError=t,this.mutableSourceEagerHydrationData=null}function Kl(e,r,n,a,t,o,l,i,s){return e=new Cp(e,r,n,i,s),r===1?(r=1,o===!0&&(r|=8)):r=0,o=Ae(3,null,null,r),e.current=o,o.stateNode=e,o.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jl(o),e}function Op(e,r,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ir,key:a==null?null:""+a,children:e,containerInfo:r,implementation:n}}function xc(e){if(!e)return vr;e=e._reactInternals;e:{if(Mr(e)!==e||e.tag!==1)throw Error(C(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(fe(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(fe(n))return xu(e,n,r)}return r}function Nc(e,r,n,a,t,o,l,i,s){return e=Kl(n,a,!0,e,t,o,l,i,s),e.context=xc(null),n=e.current,a=se(),t=pr(n),o=Ue(a,t),o.callback=r??null,dr(n,o,t),e.current.lanes=t,ia(e,t,a),ye(e,a),e}function Pt(e,r,n,a){var t=r.current,o=se(),l=pr(t);return n=xc(n),r.context===null?r.context=n:r.pendingContext=n,r=Ue(o,l),r.payload={element:e},a=a===void 0?null:a,a!==null&&(r.callback=a),e=dr(t,r,l),e!==null&&(je(e,t,l,o),Ma(e,t,l)),l}function ft(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cs(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<r?n:r}}function Xl(e,r){cs(e,r),(e=e.alternate)&&cs(e,r)}function Rp(){return null}var jc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zl(e){this._internalRoot=e}kt.prototype.render=Zl.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(C(409));Pt(e,r,null,null)};kt.prototype.unmount=Zl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Lr(function(){Pt(null,e,null,null)}),r[$e]=null}};function kt(e){this._internalRoot=e}kt.prototype.unstable_scheduleHydration=function(e){if(e){var r=du();e={blockedOn:null,target:e,priority:r};for(var n=0;n<nr.length&&r!==0&&r<nr[n].priority;n++);nr.splice(n,0,e),n===0&&pu(e)}};function ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wt(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ds(){}function Ap(e,r,n,a,t){if(t){if(typeof a=="function"){var o=a;a=function(){var u=ft(l);o.call(u)}}var l=Nc(r,a,e,0,null,!1,!1,"",ds);return e._reactRootContainer=l,e[$e]=l.current,$n(e.nodeType===8?e.parentNode:e),Lr(),l}for(;t=e.lastChild;)e.removeChild(t);if(typeof a=="function"){var i=a;a=function(){var u=ft(s);i.call(u)}}var s=Kl(e,0,!1,null,null,!1,!1,"",ds);return e._reactRootContainer=s,e[$e]=s.current,$n(e.nodeType===8?e.parentNode:e),Lr(function(){Pt(r,s,n,a)}),s}function Dt(e,r,n,a,t){var o=n._reactRootContainer;if(o){var l=o;if(typeof t=="function"){var i=t;t=function(){var s=ft(l);i.call(s)}}Pt(r,l,e,t)}else l=Ap(n,r,e,t,a);return ft(l)}uu=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var n=wn(r.pendingLanes);n!==0&&(Sl(r,n|1),ye(r,B()),!(j&6)&&(fn=B()+500,Er()))}break;case 13:Lr(function(){var a=We(e,1);if(a!==null){var t=se();je(a,e,1,t)}}),Xl(e,1)}};El=function(e){if(e.tag===13){var r=We(e,134217728);if(r!==null){var n=se();je(r,e,134217728,n)}Xl(e,134217728)}};cu=function(e){if(e.tag===13){var r=pr(e),n=We(e,r);if(n!==null){var a=se();je(n,e,r,a)}Xl(e,r)}};du=function(){return q};mu=function(e,r){var n=q;try{return q=e,r()}finally{q=n}};To=function(e,r,n){switch(r){case"input":if(go(e,n),r=n.name,n.type==="radio"&&r!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<n.length;r++){var a=n[r];if(a!==e&&a.form===e.form){var t=Ct(a);if(!t)throw Error(C(90));Is(a),go(a,t)}}}break;case"textarea":Js(e,n);break;case"select":r=n.value,r!=null&&rn(e,!!n.multiple,r,!1)}};Xs=Ul;Zs=Lr;var Tp={usingClientEntryPoint:!1,Events:[ua,Qr,Ct,Ws,Ks,Ul]},Fn={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zp={bundleType:Fn.bundleType,version:Fn.version,rendererPackageName:Fn.rendererPackageName,rendererConfig:Fn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=nu(e),e===null?null:e.stateNode},findFiberByHostInstance:Fn.findFiberByHostInstance||Rp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Da.isDisabled&&Da.supportsFiber)try{vt=Da.inject(zp),Ye=Da}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tp;Ee.createPortal=function(e,r){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ei(r))throw Error(C(200));return Op(e,r,null,n)};Ee.createRoot=function(e,r){if(!ei(e))throw Error(C(299));var n=!1,a="",t=jc;return r!=null&&(r.unstable_strictMode===!0&&(n=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(t=r.onRecoverableError)),r=Kl(e,1,!1,null,null,n,!1,a,t),e[$e]=r.current,$n(e.nodeType===8?e.parentNode:e),new Zl(r)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=nu(r),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Lr(e)};Ee.hydrate=function(e,r,n){if(!wt(r))throw Error(C(200));return Dt(null,e,r,!0,n)};Ee.hydrateRoot=function(e,r,n){if(!ei(e))throw Error(C(405));var a=n!=null&&n.hydratedSources||null,t=!1,o="",l=jc;if(n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),r=Nc(r,null,e,1,n??null,t,!1,o,l),e[$e]=r.current,$n(e),a)for(e=0;e<a.length;e++)n=a[e],t=n._getVersion,t=t(n._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[n,t]:r.mutableSourceEagerHydrationData.push(n,t);return new kt(r)};Ee.render=function(e,r,n){if(!wt(r))throw Error(C(200));return Dt(null,e,r,!1,n)};Ee.unmountComponentAtNode=function(e){if(!wt(e))throw Error(C(40));return e._reactRootContainer?(Lr(function(){Dt(null,null,e,!1,function(){e._reactRootContainer=null,e[$e]=null})}),!0):!1};Ee.unstable_batchedUpdates=Ul;Ee.unstable_renderSubtreeIntoContainer=function(e,r,n,a){if(!wt(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Dt(e,r,n,!1,a)};Ee.version="18.3.1-next-f1338f8080-20240426";function qc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qc)}catch(e){console.error(e)}}qc(),qs.exports=Ee;var Fp=qs.exports,ms=Fp;co.createRoot=ms.createRoot,co.hydrateRoot=ms.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ta(){return ta=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ta.apply(this,arguments)}var lr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lr||(lr={}));const ps="popstate";function Pp(e){e===void 0&&(e={});function r(t,o){let{pathname:l="/",search:i="",hash:s=""}=Gr(t.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),tl("",{pathname:l,search:i,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(t,o){let l=t.document.querySelector("base"),i="";if(l&&l.getAttribute("href")){let s=t.location.href,u=s.indexOf("#");i=u===-1?s:s.slice(0,u)}return i+"#"+(typeof o=="string"?o:yt(o))}function a(t,o){xt(t.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return wp(r,n,a,e)}function Q(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function xt(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function kp(){return Math.random().toString(36).substr(2,8)}function fs(e,r){return{usr:e.state,key:e.key,idx:r}}function tl(e,r,n,a){return n===void 0&&(n=null),ta({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof r=="string"?Gr(r):r,{state:n,key:r&&r.key||a||kp()})}function yt(e){let{pathname:r="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(r+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(r+=a.charAt(0)==="#"?a:"#"+a),r}function Gr(e){let r={};if(e){let n=e.indexOf("#");n>=0&&(r.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(r.search=e.substr(a),e=e.substr(0,a)),e&&(r.pathname=e)}return r}function wp(e,r,n,a){a===void 0&&(a={});let{window:t=document.defaultView,v5Compat:o=!1}=a,l=t.history,i=lr.Pop,s=null,u=h();u==null&&(u=0,l.replaceState(ta({},l.state,{idx:u}),""));function h(){return(l.state||{idx:null}).idx}function d(){i=lr.Pop;let A=h(),p=A==null?null:A-u;u=A,s&&s({action:i,location:E.location,delta:p})}function y(A,p){i=lr.Push;let c=tl(E.location,A,p);n&&n(c,A),u=h()+1;let m=fs(c,u),v=E.createHref(c);try{l.pushState(m,"",v)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;t.location.assign(v)}o&&s&&s({action:i,location:E.location,delta:1})}function g(A,p){i=lr.Replace;let c=tl(E.location,A,p);n&&n(c,A),u=h();let m=fs(c,u),v=E.createHref(c);l.replaceState(m,"",v),o&&s&&s({action:i,location:E.location,delta:0})}function S(A){let p=t.location.origin!=="null"?t.location.origin:t.location.href,c=typeof A=="string"?A:yt(A);return c=c.replace(/ $/,"%20"),Q(p,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,p)}let E={get action(){return i},get location(){return e(t,l)},listen(A){if(s)throw new Error("A history only accepts one active listener");return t.addEventListener(ps,d),s=A,()=>{t.removeEventListener(ps,d),s=null}},createHref(A){return r(t,A)},createURL:S,encodeLocation(A){let p=S(A);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:y,replace:g,go(A){return l.go(A)}};return E}var ys;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ys||(ys={}));function Dp(e,r,n){return n===void 0&&(n="/"),xp(e,r,n)}function xp(e,r,n,a){let t=typeof r=="string"?Gr(r):r,o=ri(t.pathname||"/",n);if(o==null)return null;let l=Lc(e);Np(l);let i=null;for(let s=0;i==null&&s<l.length;++s){let u=Jp(o);i=_p(l[s],u)}return i}function Lc(e,r,n,a){r===void 0&&(r=[]),n===void 0&&(n=[]),a===void 0&&(a="");let t=(o,l,i)=>{let s={relativePath:i===void 0?o.path||"":i,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(Q(s.relativePath.startsWith(a),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(a.length));let u=yr([a,s.relativePath]),h=n.concat(s);o.children&&o.children.length>0&&(Q(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Lc(o.children,r,h,u)),!(o.path==null&&!o.index)&&r.push({path:u,score:Yp(u,o.index),routesMeta:h})};return e.forEach((o,l)=>{var i;if(o.path===""||!((i=o.path)!=null&&i.includes("?")))t(o,l);else for(let s of bc(o.path))t(o,l,s)}),r}function bc(e){let r=e.split("/");if(r.length===0)return[];let[n,...a]=r,t=n.endsWith("?"),o=n.replace(/\?$/,"");if(a.length===0)return t?[o,""]:[o];let l=bc(a.join("/")),i=[];return i.push(...l.map(s=>s===""?o:[o,s].join("/"))),t&&i.push(...l),i.map(s=>e.startsWith("/")&&s===""?"/":s)}function Np(e){e.sort((r,n)=>r.score!==n.score?n.score-r.score:Hp(r.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const jp=/^:[\w-]+$/,qp=3,Lp=2,bp=1,Mp=10,Gp=-2,hs=e=>e==="*";function Yp(e,r){let n=e.split("/"),a=n.length;return n.some(hs)&&(a+=Gp),r&&(a+=Lp),n.filter(t=>!hs(t)).reduce((t,o)=>t+(jp.test(o)?qp:o===""?bp:Mp),a)}function Hp(e,r){return e.length===r.length&&e.slice(0,-1).every((a,t)=>a===r[t])?e[e.length-1]-r[r.length-1]:0}function _p(e,r,n){let{routesMeta:a}=e,t={},o="/",l=[];for(let i=0;i<a.length;++i){let s=a[i],u=i===a.length-1,h=o==="/"?r:r.slice(o.length)||"/",d=Ip({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},h),y=s.route;if(!d)return null;Object.assign(t,d.params),l.push({params:t,pathname:yr([o,d.pathname]),pathnameBase:Wp(yr([o,d.pathnameBase])),route:y}),d.pathnameBase!=="/"&&(o=yr([o,d.pathnameBase]))}return l}function Ip(e,r){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=Vp(e.path,e.caseSensitive,e.end),t=r.match(n);if(!t)return null;let o=t[0],l=o.replace(/(.)\/+$/,"$1"),i=t.slice(1);return{params:a.reduce((u,h,d)=>{let{paramName:y,isOptional:g}=h;if(y==="*"){let E=i[d]||"";l=o.slice(0,o.length-E.length).replace(/(.)\/+$/,"$1")}const S=i[d];return g&&!S?u[y]=void 0:u[y]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function Vp(e,r,n){r===void 0&&(r=!1),n===void 0&&(n=!0),xt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],t="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,i,s)=>(a.push({paramName:i,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),t+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?t+="\\/*$":e!==""&&e!=="/"&&(t+="(?:(?=\\/|$))"),[new RegExp(t,r?void 0:"i"),a]}function Jp(e){try{return e.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return xt(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),e}}function ri(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let n=r.endsWith("/")?r.length-1:r.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}const Bp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Up=e=>Bp.test(e);function Qp(e,r){r===void 0&&(r="/");let{pathname:n,search:a="",hash:t=""}=typeof e=="string"?Gr(e):e,o;if(n)if(Up(n))o=n;else{if(n.includes("//")){let l=n;n=n.replace(/\/\/+/g,"/"),xt(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+n))}n.startsWith("/")?o=vs(n.substring(1),"/"):o=vs(n,r)}else o=r;return{pathname:o,search:Kp(a),hash:Xp(t)}}function vs(e,r){let n=r.replace(/\/+$/,"").split("/");return e.split("/").forEach(t=>{t===".."?n.length>1&&n.pop():t!=="."&&n.push(t)}),n.length>1?n.join("/"):"/"}function uo(e,r,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $p(e){return e.filter((r,n)=>n===0||r.route.path&&r.route.path.length>0)}function Mc(e,r){let n=$p(e);return r?n.map((a,t)=>t===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function Gc(e,r,n,a){a===void 0&&(a=!1);let t;typeof e=="string"?t=Gr(e):(t=ta({},e),Q(!t.pathname||!t.pathname.includes("?"),uo("?","pathname","search",t)),Q(!t.pathname||!t.pathname.includes("#"),uo("#","pathname","hash",t)),Q(!t.search||!t.search.includes("#"),uo("#","search","hash",t)));let o=e===""||t.pathname==="",l=o?"/":t.pathname,i;if(l==null)i=n;else{let d=r.length-1;if(!a&&l.startsWith("..")){let y=l.split("/");for(;y[0]==="..";)y.shift(),d-=1;t.pathname=y.join("/")}i=d>=0?r[d]:"/"}let s=Qp(t,i),u=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||h)&&(s.pathname+="/"),s}const yr=e=>e.join("/").replace(/\/\/+/g,"/"),Wp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Kp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Xp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Zp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Yc=["post","put","patch","delete"];new Set(Yc);const ef=["get",...Yc];new Set(ef);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oa(){return oa=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},oa.apply(this,arguments)}const ni=O.createContext(null),rf=O.createContext(null),Yr=O.createContext(null),Nt=O.createContext(null),Cr=O.createContext({outlet:null,matches:[],isDataRoute:!1}),Hc=O.createContext(null);function nf(e,r){let{relative:n}=r===void 0?{}:r;da()||Q(!1);let{basename:a,navigator:t}=O.useContext(Yr),{hash:o,pathname:l,search:i}=Vc(e,{relative:n}),s=l;return a!=="/"&&(s=l==="/"?a:yr([a,l])),t.createHref({pathname:s,search:i,hash:o})}function da(){return O.useContext(Nt)!=null}function ma(){return da()||Q(!1),O.useContext(Nt).location}function _c(e){O.useContext(Yr).static||O.useLayoutEffect(e)}function Ic(){let{isDataRoute:e}=O.useContext(Cr);return e?vf():af()}function af(){da()||Q(!1);let e=O.useContext(ni),{basename:r,future:n,navigator:a}=O.useContext(Yr),{matches:t}=O.useContext(Cr),{pathname:o}=ma(),l=JSON.stringify(Mc(t,n.v7_relativeSplatPath)),i=O.useRef(!1);return _c(()=>{i.current=!0}),O.useCallback(function(u,h){if(h===void 0&&(h={}),!i.current)return;if(typeof u=="number"){a.go(u);return}let d=Gc(u,JSON.parse(l),o,h.relative==="path");e==null&&r!=="/"&&(d.pathname=d.pathname==="/"?r:yr([r,d.pathname])),(h.replace?a.replace:a.push)(d,h.state,h)},[r,a,l,o,e])}function tf(){let{matches:e}=O.useContext(Cr),r=e[e.length-1];return r?r.params:{}}function Vc(e,r){let{relative:n}=r===void 0?{}:r,{future:a}=O.useContext(Yr),{matches:t}=O.useContext(Cr),{pathname:o}=ma(),l=JSON.stringify(Mc(t,a.v7_relativeSplatPath));return O.useMemo(()=>Gc(e,JSON.parse(l),o,n==="path"),[e,l,o,n])}function of(e,r){return lf(e,r)}function lf(e,r,n,a){da()||Q(!1);let{navigator:t}=O.useContext(Yr),{matches:o}=O.useContext(Cr),l=o[o.length-1],i=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=ma(),h;if(r){var d;let A=typeof r=="string"?Gr(r):r;s==="/"||(d=A.pathname)!=null&&d.startsWith(s)||Q(!1),h=A}else h=u;let y=h.pathname||"/",g=y;if(s!=="/"){let A=s.replace(/^\//,"").split("/");g="/"+y.replace(/^\//,"").split("/").slice(A.length).join("/")}let S=Dp(e,{pathname:g}),E=mf(S&&S.map(A=>Object.assign({},A,{params:Object.assign({},i,A.params),pathname:yr([s,t.encodeLocation?t.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?s:yr([s,t.encodeLocation?t.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),o,n,a);return r&&E?O.createElement(Nt.Provider,{value:{location:oa({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:lr.Pop}},E):E}function sf(){let e=hf(),r=Zp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,t={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},r),n?O.createElement("pre",{style:t},n):null,null)}const uf=O.createElement(sf,null);class cf extends O.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,n){return n.location!==r.location||n.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:n.error,location:n.location,revalidation:r.revalidation||n.revalidation}}componentDidCatch(r,n){console.error("React Router caught the following error during render",r,n)}render(){return this.state.error!==void 0?O.createElement(Cr.Provider,{value:this.props.routeContext},O.createElement(Hc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function df(e){let{routeContext:r,match:n,children:a}=e,t=O.useContext(ni);return t&&t.static&&t.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(t.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(Cr.Provider,{value:r},a)}function mf(e,r,n,a){var t;if(r===void 0&&(r=[]),n===void 0&&(n=null),a===void 0&&(a=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=a)!=null&&o.v7_partialHydration&&r.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,i=(t=n)==null?void 0:t.errors;if(i!=null){let h=l.findIndex(d=>d.route.id&&(i==null?void 0:i[d.route.id])!==void 0);h>=0||Q(!1),l=l.slice(0,Math.min(l.length,h+1))}let s=!1,u=-1;if(n&&a&&a.v7_partialHydration)for(let h=0;h<l.length;h++){let d=l[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:y,errors:g}=n,S=d.route.loader&&y[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||S){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((h,d,y)=>{let g,S=!1,E=null,A=null;n&&(g=i&&d.route.id?i[d.route.id]:void 0,E=d.route.errorElement||uf,s&&(u<0&&y===0?(gf("route-fallback"),S=!0,A=null):u===y&&(S=!0,A=d.route.hydrateFallbackElement||null)));let p=r.concat(l.slice(0,y+1)),c=()=>{let m;return g?m=E:S?m=A:d.route.Component?m=O.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=h,O.createElement(df,{match:d,routeContext:{outlet:h,matches:p,isDataRoute:n!=null},children:m})};return n&&(d.route.ErrorBoundary||d.route.errorElement||y===0)?O.createElement(cf,{location:n.location,revalidation:n.revalidation,component:E,error:g,children:c(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):c()},null)}var Jc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Jc||{}),Bc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Bc||{});function pf(e){let r=O.useContext(ni);return r||Q(!1),r}function ff(e){let r=O.useContext(rf);return r||Q(!1),r}function yf(e){let r=O.useContext(Cr);return r||Q(!1),r}function Uc(e){let r=yf(),n=r.matches[r.matches.length-1];return n.route.id||Q(!1),n.route.id}function hf(){var e;let r=O.useContext(Hc),n=ff(),a=Uc();return r!==void 0?r:(e=n.errors)==null?void 0:e[a]}function vf(){let{router:e}=pf(Jc.UseNavigateStable),r=Uc(Bc.UseNavigateStable),n=O.useRef(!1);return _c(()=>{n.current=!0}),O.useCallback(function(t,o){o===void 0&&(o={}),n.current&&(typeof t=="number"?e.navigate(t):e.navigate(t,oa({fromRouteId:r},o)))},[e,r])}const gs={};function gf(e,r,n){gs[e]||(gs[e]=!0)}function Sf(e,r){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function zr(e){Q(!1)}function Ef(e){let{basename:r="/",children:n=null,location:a,navigationType:t=lr.Pop,navigator:o,static:l=!1,future:i}=e;da()&&Q(!1);let s=r.replace(/^\/*/,"/"),u=O.useMemo(()=>({basename:s,navigator:o,static:l,future:oa({v7_relativeSplatPath:!1},i)}),[s,i,o,l]);typeof a=="string"&&(a=Gr(a));let{pathname:h="/",search:d="",hash:y="",state:g=null,key:S="default"}=a,E=O.useMemo(()=>{let A=ri(h,s);return A==null?null:{location:{pathname:A,search:d,hash:y,state:g,key:S},navigationType:t}},[s,h,d,y,g,S,t]);return E==null?null:O.createElement(Yr.Provider,{value:u},O.createElement(Nt.Provider,{children:n,value:E}))}function Cf(e){let{children:r,location:n}=e;return of(ol(r),n)}new Promise(()=>{});function ol(e,r){r===void 0&&(r=[]);let n=[];return O.Children.forEach(e,(a,t)=>{if(!O.isValidElement(a))return;let o=[...r,t];if(a.type===O.Fragment){n.push.apply(n,ol(a.props.children,o));return}a.type!==zr&&Q(!1),!a.props.index||!a.props.children||Q(!1);let l={id:a.props.id||o.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(l.children=ol(a.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ll(){return ll=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ll.apply(this,arguments)}function Of(e,r){if(e==null)return{};var n={},a=Object.keys(e),t,o;for(o=0;o<a.length;o++)t=a[o],!(r.indexOf(t)>=0)&&(n[t]=e[t]);return n}function Rf(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Af(e,r){return e.button===0&&(!r||r==="_self")&&!Rf(e)}const Tf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],zf="6";try{window.__reactRouterVersion=zf}catch{}const Ff="startTransition",Ss=hd[Ff];function Pf(e){let{basename:r,children:n,future:a,window:t}=e,o=O.useRef();o.current==null&&(o.current=Pp({window:t,v5Compat:!0}));let l=o.current,[i,s]=O.useState({action:l.action,location:l.location}),{v7_startTransition:u}=a||{},h=O.useCallback(d=>{u&&Ss?Ss(()=>s(d)):s(d)},[s,u]);return O.useLayoutEffect(()=>l.listen(h),[l,h]),O.useEffect(()=>Sf(a),[a]),O.createElement(Ef,{basename:r,children:n,location:i.location,navigationType:i.action,navigator:l,future:a})}const kf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_r=O.forwardRef(function(r,n){let{onClick:a,relative:t,reloadDocument:o,replace:l,state:i,target:s,to:u,preventScrollReset:h,viewTransition:d}=r,y=Of(r,Tf),{basename:g}=O.useContext(Yr),S,E=!1;if(typeof u=="string"&&wf.test(u)&&(S=u,kf))try{let m=new URL(window.location.href),v=u.startsWith("//")?new URL(m.protocol+u):new URL(u),R=ri(v.pathname,g);v.origin===m.origin&&R!=null?u=R+v.search+v.hash:E=!0}catch{}let A=nf(u,{relative:t}),p=Df(u,{replace:l,state:i,target:s,preventScrollReset:h,relative:t,viewTransition:d});function c(m){a&&a(m),m.defaultPrevented||p(m)}return O.createElement("a",ll({},y,{href:S||A,onClick:E||o?a:c,ref:n,target:s}))});var Es;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Es||(Es={}));var Cs;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Cs||(Cs={}));function Df(e,r){let{target:n,replace:a,state:t,preventScrollReset:o,relative:l,viewTransition:i}=r===void 0?{}:r,s=Ic(),u=ma(),h=Vc(e,{relative:l});return O.useCallback(d=>{if(Af(d,n)){d.preventDefault();let y=a!==void 0?a:yt(u)===yt(h);s(e,{replace:y,state:t,preventScrollReset:o,relative:l,viewTransition:i})}},[u,s,h,a,t,n,e,o,l,i])}const xf=["Do","Do#","Re","Re#","Mi","Fa","Fa#","Sol","Sol#","La","La#","Si"],Nf=["Do","Reb","Re","Mib","Mi","Fa","Solb","Sol","Lab","La","Sib","Si"],jf=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],qf=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],Lf={Do:0,"Do#":1,Reb:1,Re:2,"Re#":3,Mib:3,Mi:4,Fa:5,"Fa#":6,Solb:6,Sol:7,"Sol#":8,Lab:8,La:9,"La#":10,Sib:10,Si:11,C:0,"C#":1,Db:1,D:2,"D#":3,Eb:3,E:4,F:5,"F#":6,Gb:6,G:7,"G#":8,Ab:8,A:9,"A#":10,Bb:10,B:11},bf=["Sol#","Solb","Do#","Reb","Re#","Mib","Fa#","Sol","Lab","La#","Sib","Do","Re","Mi","Fa","La","Si","C#","Db","D#","Eb","F#","Gb","G#","Ab","A#","Bb","C","D","E","F","G","A","B"];function Mf(e){return e.includes("b")}function Gf(e,r){return e==="english"?r?qf:jf:r?Nf:xf}function Qc(e,r=0,n="spanish"){if(!e)return"";if(e.includes("/"))return e.split("/").map(s=>Qc(s,r,n)).join("/");const a=bf.find(s=>e.startsWith(s));if(!a)return e;const t=e.slice(a.length),o=Lf[a];if(o===void 0)return e;let l=(o+r)%12;return l<0&&(l+=12),Gf(n,Mf(a))[l]+t}function Yf(e,r=0,n="spanish"){const a=[];let t="",o=0;const l=/\[([^\]]+)\]/g;let i;function s(h){if(h==="")return;(h.match(/\s+|\S+/g)||[]).forEach(y=>{if(/^\s+$/.test(y)){a.push({chord:"",text:y,isSpace:!0});return}a.push({chord:t,text:y,isSpace:!1}),t=""})}for(;(i=l.exec(e))!==null;){const h=e.slice(o,i.index);s(h),t=Qc(i[1].trim(),r,n),o=l.lastIndex}const u=e.slice(o);return s(u),t&&a.push({chord:t,text:"",isSpace:!1}),a}/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _f=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=(e,r)=>{const n=O.forwardRef(({color:a="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:i="",children:s,...u},h)=>O.createElement("svg",{ref:h,...Hf,width:t,height:t,stroke:a,strokeWidth:l?Number(o)*24/Number(t):o,className:["lucide",`lucide-${_f(e)}`,i].join(" "),...u},[...r.map(([d,y])=>O.createElement(d,y)),...Array.isArray(s)?s:[s]]));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=Le("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=Le("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=Le("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=Le("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=Le("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uf=Le("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=Le("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=Le("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=Le("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=Le("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=Le("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),Kc=[{id:1,number:1,title:"Ven, oh Todopoderoso",key:"Sol mayor (G)",time:"2 tiempos",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

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
Hoy sé mi vínculo de honor,`},{id:85,number:85,title:"Firmes y Adelante",key:"Re mayor (D)",time:"2 tiempos",category:"Congregacional",isSpecial:!1,specialType:"especial",artist:"Himanario Pentecostal",lyrics:`INTRODUCCIÓN

D, Bm7, Em7, A7, D

ESTROFA 1

[D]Firmes y [G]adelante, [D]huestes [Em]de la [A7]fe. [D]
[G]Sin temor [F#m]alguno, [Em]que Jesús [A7]nos [D]ve.
[Em]Jefe soberano, [D]Cristo al frente va.
[Am7]Y la [D7]regia [G]enseña, [F#m]tremo[Em]landa [A]está.

CORO

[D]Firmes y [Em]adelante [A]huestes de la [D]fe,
[Bm7]Sin temor [Em]alguno [A]que Jesús nos [D]ve.

INTRODUCCIÓN

D, Bm7, Em7, A7, D

ESTROFA 2

Al Sagrado nombre de nuestro Adalid,
Tiembla el enemigo y huye de la lid.
Nuestra es la victoria, dad a Dios loor,
Y óigalo el averno, lleno de pavor.

ESTROFA 3

Muévase potente la Iglesia de Dios,
De los ya gloriosos, marchemos en pos,
Somos sólo un cuerpo, y uno es el Señor,
Una la esperanza, y uno nuestro amor.

ESTROFA 4

Tronos y coronas pueden perecer,
De Jesús la Iglesia fiel habrá de ser,
Nada en contra suya, prevalecerá,
Porque la promesa nunca faltará.`},{id:86,number:86,title:"Quisiera yo ser ángel",key:"Sol mayor (G)",time:"",category:"General",isSpecial:!1,artist:"Himnario Pentecostal",lyrics:`ESTROFA 1

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
Y sobre ellas majestuoso tú andarás.`},{id:800,number:1,title:"Siempre estuviste ahí",key:"Fa mayor (F)",time:"4 tiempos",category:"Devocional",isSpecial:!0,specialType:"especial",artist:"Coros Unidos",lyrics:`INTRODUCCIÓN

F, C, Dm, Am/C, Bbsus2, C

ESTROFA 1

A tus plantas vengo hoy
Anhelo que vengas a mí,
Necesito solo un momento
Volverte a sentir… mi Señor

[F]Me alejé sin saber,
[Dm]Que esperando estabas por [Am/C]mí
[Bbsus2]Y a pesar de mi error,
[F]Siempre has estado aquí,
[Csus4]Nunca has fallado [A7]Señor.

[Dm]Fuiste tú quien rompió las cadenas,
[Am7]Es tu amor que cambió mi existencia
[Bb]Y me libertó de las [Gm7]tinieblas
[Ebmaj7]Que me alejaban de [C]ti

CORO

[F]Pero siempre estuviste ahí,
[C]No me olvidaste
[Bb]Jamás me has dejado Señor,
[F/C]Me amaste a [C]mí

[F]Si de algo te sirvo Señor,
[C]Toma mi vida
[Bb]A cada instante mi Dios,
[F/A]Te quiero [F]servir

[Gm7]Solo a [C]ti
[F]Mi Señor

INTERLUDIO

C, Dm, Bbsus2, F, C, Bbsus2, C

ESTROFA 2

[F]Lo que yo soy,
[Dm]Es gracias a tu [Am/C]amor
[Bbsus2]Has tomado mi vida,
[F]Sin merecerlo
[Csus4]Me has elegido

[F]No me sueltes por favor,
[Dm]De tus manos oh mi [Am/C]Señor
[Bbsus2]En tus brazos quiero estar
[F]Poder abrazarte
[Csus4]Cuando no pueda [A7]seguir

[Dm]Eres tú quien camina a mi lado
[Am7]Me alienta y pude encontrar
[F7]Las fuerzas que desgastadas [Bb]habían
[Gm7]Para alejarme de [Ebmaj7]ti [C]

CORO

[F]Pero siempre estuviste ahí,
[C]No me olvidaste
[Bb]Jamás me has dejado Señor,
[F/C]Me amaste a [C]mí

[F]Si de algo te sirvo Señor,
[C]Toma mi vida
[Bb]A cada instante mi Dios,
[F/A]Te quiero [F]servir

[Gm7]Solo a [C]ti
[F]Mi [Gm/E]Señor [A7]

SOLO SAXO

Dm, C, Bbsus2, F, C, A7, Dm, Bbsus2, F, Cadd9, D, Csus4

PUENTE

Siempre estuviste ahí… Cuando nada había
Siempre estuviste ahí… En mi alegría
Siempre has estado aquí… Siempre has estado

[Cadd9]Se[D]ñor

[G]Siempre estuviste ahí,
[D]No me olvidaste
[G7]Jamás me has dejado [C]Señor,
[G]Me amaste a [Am]mí

[D]Si de algo te sirvo [G]Señor,
[D]Toma mi vida
[G7]A cada instante mi [C]Dios,
[G]Te quiero servir

[Am]Solo a [Dsus4]ti [D]
[G]Mi [F]Señor…
[Cadd9]Mi [G]Señor`},{id:801,number:2,title:"Medley: Aleluya, Tú mereces, Creo en ti",key:"La mayor (A)",time:"4 tiempos",category:"Medley",isSpecial:!0,specialType:"especial",artist:"Coros Unidos",lyrics:`ALELUYA

INTRODUCCIÓN

A

1° Piano, saxo.
2° Piano, saxo, mandolinas.
Entra solo bajo y teclado.

[A]Aleluya, [D]Aleluya nuestro Dios poderoso [A]es
[A]Aleluya, [D]Aleluya nuestro Dios poderoso [A]es

[D]Alelu[E]-[F#m]u-[E]ya,
[A]Sa[E]-[A]a-nto, Santo

[F#m7]Nuestro Dios es [E]Poderoso
[D]Digno de alabar digno de exaltar
[E]Él es [A]santo, [E]santo [A]

[F#m7]Nuestro Dios es [E]Poderoso
[D]Digno de alabar digno de exaltar
[A]Amén.

FINAL

F - E7

TÚ MERECES

[A]Tú mereces la [C#m]gloria y el honor
[D]Y mi [E]adora[A]ción

[A]Yo postrado traigo a [C#m]ti mi corazón
[D]Bendiciéndo[E]te. [A] [F#m]

[F#m]Oh altísimo, [C#m]majestuoso [D]Dios
[Bm]Reinas con [E]poder [F#m]

[F#m]Tú eres santo, [C#m]quien como [D]tú
[Bm]Oh Jeho[E]vá.

CORO

[A]Solo a [A7]ti bendeci[D]ré
[B7]Bendeciré tu [E]nombre

[C#]Bendito [C#7]eres [F#m]Tú, [E]
[D]Bendito [E]eres [A]Tú.

[Bm7] [E7]Para repetir coro
Mi para repetir estrofa

CREO EN TI

INTRODUCCIÓN

F, G, Em, Am, F, G, Am

[Am]Quiero levantar a ti mis [F]manos
[C]Maravilloso Jesús, milagroso [G]Señor

[Am]Llena este lugar de tu [F]presencia
[C]Y haz descender tu poder, a los que estamos [G]aquí

[Am]Creo en [G]ti… Je[F]sús
[Am]Y lo que [G]harás… en [F]mí
[C]En [G]mí, en [Am]mí

[Am]Recibe toda la gloria
[F]Recibe toda la honra
[C]Precioso, Hijo de [G]Dios

[Am]Recibe toda la gloria
[F]Recibe toda la honra
[C]Precioso, Hijo de [G]Dios

[Am]Hijo de Dios`},{id:803,number:3,title:"Honra y gloria a ti",key:"Re mayor (D)",time:"4 tiempos",category:"Adoración",isSpecial:!0,specialType:"especial",artist:"SAG-2022",lyrics:`INTRODUCCIÓN

D, G, D, C, Em, Bm, A, D, G, Gm, D

ESTROFA 1

[A]Hay que comprender que la [F#m]gloria es para [Bm]Dios,
[Am]Que no hay otro como [D7]Él. ¡Él es [G]Dios! [A7]¡Él es el [D]Rey! [Gm]

[D]Que, si no es por [F#m7]Él, no estaría yo a[Bm]quí,
[Am]No sabría yo [D7]reír; ni cantar [G]podría [A]yo. [D] [Am]

[D7]La gloria es de [G]Él, ¡sólo para [F#m]Él! [Bm]
[Em]Y si hoy canto es porque quiero de[A7]cir.

CORO

[D]Que toda la [Em]gloria, [F#m]gloria es para Dios.
[Am]No hay otro como [B7]Él, un Dios crea[Em]dor.

[G]Hizo los mares, el [A]cielo y la tierra,
[Em]Formó los [G]montes y también a [A]mí.

[D]¡Oh gloria, [Em]gloria! Yo ensalzo tu [F#m]Nombre;
[Am]Bendito seas [B7]Tú por tu amor sin [Em]fin.

[D]Yo alabo y [G]engrandezco tu [F#m]Nombre. [Bm]
[Em]Y la gloria a [A]Ti, la gloria a [D]Ti, ¡sólo a Ti!

INTRODUCCIÓN

D, G, D, C, Em, Bm, A, D, G, Gm, D

ESTROFA 2

[A]No puedes negar lo que ha [F#m]hecho Él por [Bm]ti,
[Am]Mostrando su [D7]poder en toda su [G]inmensi[A7]dad. [D] [Gm]

[D]Porque, en los momentos de [F#m7]mayor dificul[Bm]tad
[Am]Ha llegado con su [D7]mano, no dejándote [G]caer. [A] [D] [Am]

[D7]La gloria es de [G]Él, ¡y se la [F#m]merece! [Bm]
[Em]Y si hoy canto es porque vuelvo a de[A7]cir.

CORO

[D]Que toda la [Em]gloria, [F#m]gloria es para Dios.
[Am]No hay otro como [B7]Él, un Dios crea[Em]dor.

[G]Hizo los mares, el [A]cielo y la tierra,
[Em]Formó los [G]montes y también a [A]mí.

[D]¡Oh gloria, [Em]gloria! Yo ensalzo tu [F#m]Nombre;
[Am]Bendito seas [B7]Tú por tu amor sin [Em]fin.

[D]Yo alabo y [G]engrandezco tu [F#m]Nombre. [Bm]
[Em]Y la gloria a [A]Ti, la gloria a [D]Ti, ¡sólo a Ti!

FINAL

[Bm]Porque Tú eres digno de [F#m]honra y gloria
[G]Todo mi canto y alabanza es para [C]Ti, para [A]Ti.

CORO`},{id:804,number:3,title:"Grande es tu amor",key:"Do mayor (C)",time:"4 tiempos",category:"Adoración",isSpecial:!0,specialType:"especial",artist:"SAG-2022",lyrics:`INTRODUCCIÓN

C, F7+, Am, G, F, G

ESTROFA 1

[C]Cambiaste mi [F]existencia con tu [C]amor
[C]Le diste [F]esperanza a mi [G]ser…
[Am]solo puedo [G]agrade[F]cer

[C]Señor pues fuiste [G]tú quien me escogió…
[C]Tu mirada me [F]conquistó,
[C]tu manto de amor me [F]cubrió

[C]Tu sangre preciosa mi [F]vida cambió,
[C]y no puedo [G]vivir
[Am]Sin tu [G]amor...

CORO

[C]Porque tu amor es más [G]fuerte,
Mis manos alza[Am]ré

[G]Reconociendo que eres el [F]Rey,
Nada se compara a [C]lo

[G]inmenso de tu [Am]amor,
Cordero Santo [G]Fiel y Verda[F]dero

[C]En la oscuri[F]dad,
brilla tu ver[G]dad… [C]

INTRODUCCIÓN

C, C7+, F7+, C, Bb, F, Fm

ESTROFA 2

[C]Grande es tu [F]amor venciste la [C]muerte por [Bb]mí
[C]no puedo hacer [F]más que rendirme a [C]ti, [G] [C]
Digno eres de adoración…

CORO

[C]Tu amor es más [G]fuerte,
Mis manos alza[Am]ré

[G]Reconociendo que eres el [F]Rey,
Nada se compara a [C]lo

[G]inmenso de tu [Am]amor,
Cordero Santo [G]Fiel y Verda[F]dero

[C]En la oscuri[F]dad,
brilla tu ver[G]dad… [C]

VARIACIÓN

Solo voces y piano x2

[G]Dios no hay nadie como tú,
Junto a mí estás

[G]Dios no hay nadie como tú,
Junto a mí estás

[C]Dios no hay nadie como [F]tú,
Junto a mí esta[G]rás…

VARIACIÓN

Am, G, D, Fm, Dm, Em, F, G

CORO FINAL

[C]Porque tu amor es más [G]fuerte,
Mis manos alza[Am]ré

[G]Reconociendo que eres el [F]Rey,
Nada se compara a [C]lo

[G]inmenso de tu [Am]amor,
Cordero Santo [G]Fiel y Verda[F]dero

[C]Porque tu amor es más [G]fuerte,
Mis manos alza[Am]ré

[G]Reconociendo que eres el [F]Rey,
Nada se compara a [C]lo

[G]inmenso de tu [Am]amor,
Cordero Santo [G]Fiel y Verda[F]dero

FINAL

[C]En la oscuri[F]dad,
[Am]en la oscuri[Bb]dad…
[G]brilla tu ver[C]dad…`}],Xf=["General","Devocional","Predicación","Congregacional","Fúnebre","Coritos"],Be={fontSize:1.1,chordSize:.95,keepAwake:!1,theme:"dark",chordNotation:"spanish"},Zf="Pr. Marcos Carreño M.",Os="marcos.carreno.m@gmail.com",ey="1.1";function ry(){const[e,r]=O.useState(()=>{const a=localStorage.getItem("iprec_favorites");return a?JSON.parse(a):[]});return O.useEffect(()=>{localStorage.setItem("iprec_favorites",JSON.stringify(e))},[e]),[e,a=>{r(t=>t.includes(a)?t.filter(o=>o!==a):[...t,a])}]}function ny(){const[e,r]=O.useState(()=>{try{const a=localStorage.getItem("iprec_settings");return a?{...Be,...JSON.parse(a)}:Be}catch{return Be}});return O.useEffect(()=>{localStorage.setItem("iprec_settings",JSON.stringify(e))},[e]),[e,a=>{r(t=>({...t,...a}))}]}function ay(){const e=ma();return f.jsxs("nav",{className:"bottom-nav",children:[f.jsxs(_r,{to:"/",className:`nav-item ${e.pathname==="/"?"active":""}`,children:[f.jsx(Uf,{size:22}),f.jsx("span",{children:"Inicio"})]}),f.jsxs(_r,{to:"/favoritos",className:`nav-item ${e.pathname==="/favoritos"?"active":""}`,children:[f.jsx($c,{size:22}),f.jsx("span",{children:"Favoritos"})]}),f.jsxs(_r,{to:"/especiales-himnario",className:`nav-item ${e.pathname==="/especiales-himnario"?"active":""}`,children:[f.jsx(Vf,{size:22}),f.jsx("span",{children:"Esp. Himnario"})]}),f.jsxs(_r,{to:"/especiales",className:`nav-item ${e.pathname==="/especiales"?"active":""}`,children:[f.jsx(Kf,{size:22}),f.jsx("span",{children:"Especiales"})]}),f.jsxs(_r,{to:"/ajustes",className:`nav-item ${e.pathname==="/ajustes"?"active":""}`,children:[f.jsx(Wc,{size:22}),f.jsx("span",{children:"Ajustes"})]})]})}function xa({title:e,filterType:r,favoritesList:n}){const[a,t]=O.useState(""),[o,l]=O.useState("Todas"),i=Kc.filter(d=>r==="all"&&d.isSpecial||r==="favorites"&&(!n||!n.includes(d.id))?!1:r==="hymnal-specials"?d.isSpecial&&d.specialType==="himnario":r==="specials"?d.isSpecial&&(d.specialType==="especial"||!d.specialType):!0),u=["Todas",...Xf.filter(d=>i.some(y=>y.category===d))],h=i.filter(d=>{if(o!=="Todas"&&d.category!==o)return!1;const y=a.toLowerCase(),g=d.title.toLowerCase().includes(y),S=d.number?d.number.toString().includes(y):!1;return g||S}).sort((d,y)=>{const g=Number(d.number||d.id),S=Number(y.number||y.id);return g-S});return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"header song-list-header",children:[f.jsx("div",{className:"header-spacer"}),f.jsxs("div",{className:"main-title-with-logo",children:[f.jsx("img",{src:"./logo.png",alt:"Logo",className:"app-logo"}),f.jsx("h1",{children:e})]}),f.jsx("select",{className:"filter-select",value:o,onChange:d=>l(d.target.value),children:u.map(d=>f.jsx("option",{value:d,children:d},d))})]}),f.jsxs("div",{className:"main-content",children:[f.jsxs("div",{className:"search-container",children:[f.jsx(Wf,{style:{position:"absolute",left:"32px",marginTop:"14px",color:"var(--text-secondary)"},size:20}),f.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar por título o número...",value:a,onChange:d=>t(d.target.value)})]}),f.jsxs("div",{className:"song-list",children:[h.map(d=>f.jsxs(_r,{to:`/song/${d.id}`,className:"song-item",children:[f.jsx("div",{className:"song-number",children:d.number||d.id}),f.jsxs("div",{className:"song-details",children:[f.jsx("h2",{children:d.title}),f.jsxs("p",{children:[f.jsx("span",{children:d.artist}),d.category&&f.jsx("span",{className:"category-badge",children:d.category}),d.key&&f.jsxs("span",{className:"category-badge",children:["Tono: ",d.key]})]})]})]},d.id)),h.length===0&&f.jsx("p",{style:{textAlign:"center",color:"var(--text-secondary)",marginTop:"2rem"},children:"No se encontraron alabanzas"})]})]})]})}function ty({favorites:e,toggleFavorite:r,settings:n}){const{id:a}=tf(),t=Ic(),o=parseInt(a),l=Kc.find(c=>c.id===o),[i,s]=O.useState(0),[u,h]=O.useState(!1),d=(n==null?void 0:n.fontSize)||Be.fontSize,y=(n==null?void 0:n.chordSize)||Be.chordSize,g=(n==null?void 0:n.keepAwake)||!1,S=(n==null?void 0:n.chordNotation)||"spanish";if(O.useEffect(()=>{let c=null;const m=async()=>{try{g&&"wakeLock"in navigator&&(c=await navigator.wakeLock.request("screen"))}catch(R){console.log("Wake Lock no disponible:",R)}};m();const v=()=>{document.visibilityState==="visible"&&m()};return document.addEventListener("visibilitychange",v),()=>{document.removeEventListener("visibilitychange",v),c&&c.release().catch(()=>{})}},[g]),!l)return f.jsx("div",{className:"main-content",children:"Canción no encontrada"});const E=e.includes(o),A=c=>{let m=i+c;m>11&&(m-=12),m<-11&&(m+=12),s(m)},p=c=>{const m=c.trim();return/^(ESTROFA|CORO|PUENTE|INTRO|FINAL|VERSO|PRE-CORO|PRECORO|INTERLUDIO|CORO FINAL)(\s+\d+)?\s*:?$/i.test(m)};return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"header",style:{padding:"1rem 1.5rem"},children:[f.jsx("button",{className:"btn",style:{padding:"0.5rem",backgroundColor:"transparent"},onClick:()=>t(-1),children:f.jsx(If,{size:24})}),f.jsxs("div",{className:"song-viewer-title",children:[f.jsxs("div",{className:"song-type-label",children:[l.isSpecial?"ESPECIAL":"HIMNO"," ",l.number||l.id]}),f.jsx("h1",{children:l.title}),(l.key||l.time)&&f.jsxs("div",{className:"song-key-line",children:[f.jsx("span",{className:"song-note-symbol",children:"♪"}),l.key&&f.jsx("span",{children:l.key}),l.key&&l.time&&f.jsx("span",{children:"-"}),l.time&&f.jsx("span",{children:l.time})]})]}),f.jsx("button",{className:`favorite-btn ${E?"active":""}`,onClick:()=>r(o),children:f.jsx($c,{size:24,fill:E?"currentColor":"none"})})]}),f.jsxs("div",{className:"main-content",children:[f.jsxs("div",{className:"controls-bar",children:[f.jsxs("button",{className:`btn chord-toggle-btn ${u?"active":""}`,onClick:()=>h(!u),children:[u?f.jsx(Jf,{size:18}):f.jsx(Bf,{size:18}),u?"Ocultar Acordes":"Mostrar Acordes"]}),u&&f.jsxs("div",{className:"transpose-controls",children:[f.jsx("button",{className:"btn",onClick:()=>A(-1),children:f.jsx(Qf,{size:18})}),f.jsx("span",{className:"transpose-value",children:i>0?`+${i}`:i}),f.jsx("button",{className:"btn",onClick:()=>A(1),children:f.jsx($f,{size:18})})]})]}),f.jsx("div",{className:`lyrics ${u?"with-chords":"without-chords"}`,style:{"--lyrics-font-size":`${d}rem`,"--chord-font-size":`${y}rem`},children:l.lyrics.split(`
`).map((c,m)=>{const v=c.trim();if(v==="")return f.jsx("div",{className:"lyric-spacer"},m);if(p(v))return f.jsx("div",{className:"section-title",children:v},m);const R=Yf(c,i,S);return f.jsx("div",{className:"chord-line-container",children:R.map((z,P)=>f.jsxs("div",{className:z.isSpace?"space-group":"word-group",children:[!z.isSpace&&u&&f.jsx("span",{className:`chord-label ${z.chord?"":"empty-chord"}`,children:z.chord||""}),!z.isSpace&&f.jsx("span",{className:"lyric-text",children:z.text||" "})]},P))},m)})})]})]})}function oy({settings:e,updateSettings:r}){const n=Math.round(e.fontSize/Be.fontSize*100),a=Math.round(e.chordSize/Be.chordSize*100),t=typeof navigator<"u"&&"wakeLock"in navigator;return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"header",children:[f.jsx("h1",{children:"Ajustes"}),f.jsx(Wc,{size:24,color:"var(--accent)"})]}),f.jsxs("div",{className:"main-content",children:[f.jsxs("div",{className:"settings-card",children:[f.jsx("h2",{children:"Apariencia"}),f.jsx("p",{className:"settings-muted",children:"Elige cómo quieres visualizar el himnario."}),f.jsxs("div",{className:"theme-options",children:[f.jsxs("button",{className:`theme-option ${e.theme==="dark"?"active":""}`,onClick:()=>r({theme:"dark"}),children:[f.jsx("span",{className:"theme-preview dark-preview"}),f.jsx("strong",{children:"Oscuro"})]}),f.jsxs("button",{className:`theme-option ${e.theme==="light"?"active":""}`,onClick:()=>r({theme:"light"}),children:[f.jsx("span",{className:"theme-preview light-preview"}),f.jsx("strong",{children:"Claro"})]})]})]}),f.jsxs("div",{className:"settings-card",children:[f.jsx("h2",{children:"Escala de acordes"}),f.jsx("p",{className:"settings-muted",children:"Elige cómo quieres visualizar las notas musicales."}),f.jsxs("div",{className:"notation-options",children:[f.jsxs("button",{className:`notation-option ${e.chordNotation==="spanish"?"active":""}`,onClick:()=>r({chordNotation:"spanish"}),children:[f.jsx("strong",{children:"Española"}),f.jsx("span",{children:"Do · Re · Mi · Fa · Sol · La · Si"})]}),f.jsxs("button",{className:`notation-option ${e.chordNotation==="english"?"active":""}`,onClick:()=>r({chordNotation:"english"}),children:[f.jsx("strong",{children:"Inglesa"}),f.jsx("span",{children:"C · D · E · F · G · A · B"})]})]})]}),f.jsxs("div",{className:"settings-card",children:[f.jsx("h2",{children:"Tamaño de letra"}),f.jsxs("div",{className:"setting-group",children:[f.jsxs("div",{className:"setting-label-row",children:[f.jsx("label",{children:"Letra de la alabanza"}),f.jsxs("span",{children:[n,"%"]})]}),f.jsx("input",{className:"setting-range",type:"range",min:"0.85",max:"1.8",step:"0.05",value:e.fontSize,onChange:o=>r({fontSize:Number(o.target.value)})}),f.jsxs("div",{className:"settings-preview",style:{"--preview-font-size":`${e.fontSize}rem`},children:[f.jsx("p",{className:"preview-title",children:"Vista previa de letra"}),f.jsx("p",{className:"preview-lyrics-text",children:"Firmes y adelante, huestes de la fe"})]})]})]}),f.jsxs("div",{className:"settings-card",children:[f.jsx("h2",{children:"Tamaño de acordes"}),f.jsxs("div",{className:"setting-group",children:[f.jsxs("div",{className:"setting-label-row",children:[f.jsx("label",{children:"Acordes sobre la letra"}),f.jsxs("span",{children:[a,"%"]})]}),f.jsx("input",{className:"setting-range",type:"range",min:"0.75",max:"1.5",step:"0.05",value:e.chordSize,onChange:o=>r({chordSize:Number(o.target.value)})}),f.jsxs("div",{className:"settings-preview chord-preview",style:{"--preview-font-size":`${e.fontSize}rem`,"--preview-chord-size":`${e.chordSize}rem`},children:[f.jsx("p",{className:"preview-title",children:"Vista previa de acordes"}),f.jsxs("div",{className:"preview-chord-line",children:[f.jsxs("span",{className:"preview-word",children:[f.jsx("span",{className:"preview-chord",children:"Do"}),f.jsx("span",{className:"preview-text",children:"Firmes"})]}),f.jsx("span",{className:"preview-space"}),f.jsxs("span",{className:"preview-word",children:[f.jsx("span",{className:"preview-chord empty-preview-chord",children:"."}),f.jsx("span",{className:"preview-text",children:"y"})]}),f.jsx("span",{className:"preview-space"}),f.jsxs("span",{className:"preview-word",children:[f.jsx("span",{className:"preview-chord",children:"Sol"}),f.jsx("span",{className:"preview-text",children:"adelante"})]})]})]})]}),f.jsx("button",{className:"btn",style:{marginTop:"1rem"},onClick:()=>r({fontSize:Be.fontSize,chordSize:Be.chordSize}),children:"Restablecer tamaños"})]}),f.jsxs("div",{className:"settings-card",children:[f.jsx("h2",{children:"Lectura"}),f.jsxs("div",{className:"toggle-row",children:[f.jsxs("div",{children:[f.jsx("strong",{children:"Mantener pantalla activa"}),f.jsx("p",{children:"Evita que la pantalla se bloquee mientras estás leyendo una alabanza."}),!t&&f.jsx("p",{className:"settings-warning",children:"Tu navegador puede no permitir esta función."})]}),f.jsxs("label",{className:"toggle-switch",children:[f.jsx("input",{type:"checkbox",checked:e.keepAwake,onChange:o=>r({keepAwake:o.target.checked})}),f.jsx("span",{})]})]})]}),f.jsxs("div",{className:"settings-card",children:[f.jsx("h2",{children:"Contacto"}),f.jsx("p",{children:"Para sugerencias, correcciones de letra, errores en acordes o fallas de la aplicación, puedes escribir al correo:"}),f.jsx("a",{className:"contact-link",href:`mailto:${Os}`,children:Os})]}),f.jsxs("div",{className:"settings-card",children:[f.jsx("h2",{children:"Acerca de"}),f.jsxs("div",{className:"about-row",children:[f.jsx("span",{children:"Aplicación"}),f.jsx("strong",{children:"Himnario Digital IPREC"})]}),f.jsxs("div",{className:"about-row",children:[f.jsx("span",{children:"Versión"}),f.jsx("strong",{children:ey})]}),f.jsxs("div",{className:"about-row",children:[f.jsx("span",{children:"Contenido"}),f.jsx("strong",{children:"Himnos, coritos y especiales"})]}),f.jsx("p",{className:"settings-muted",children:"Aplicación creada para apoyar la lectura, búsqueda y acompañamiento musical de alabanzas congregacionales."})]}),f.jsxs("div",{className:"developer-watermark",children:["Desarrollada por ",Zf]})]})]})}function ly(){const[e,r]=ry(),[n,a]=ny();return O.useEffect(()=>{document.documentElement.setAttribute("data-theme",n.theme)},[n.theme]),f.jsx(Pf,{children:f.jsxs("div",{className:"app-container",children:[f.jsxs(Cf,{children:[f.jsx(zr,{path:"/",element:f.jsx(xa,{title:"Himnario IPREC",filterType:"all"})}),f.jsx(zr,{path:"/favoritos",element:f.jsx(xa,{title:"Mis Favoritos",filterType:"favorites",favoritesList:e})}),f.jsx(zr,{path:"/especiales-himnario",element:f.jsx(xa,{title:"Especiales de Himnario",filterType:"hymnal-specials"})}),f.jsx(zr,{path:"/especiales",element:f.jsx(xa,{title:"Especiales",filterType:"specials"})}),f.jsx(zr,{path:"/ajustes",element:f.jsx(oy,{settings:n,updateSettings:a})}),f.jsx(zr,{path:"/song/:id",element:f.jsx(ty,{favorites:e,toggleFavorite:r,settings:n})})]}),f.jsx(ay,{})]})})}co.createRoot(document.getElementById("root")).render(f.jsx(Ns.StrictMode,{children:f.jsx(ly,{})}));
