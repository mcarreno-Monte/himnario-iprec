function Zc(e,r){for(var a=0;a<r.length;a++){const n=r[a];if(typeof n!="string"&&!Array.isArray(n)){for(const t in n)if(t!=="default"&&!(t in e)){const o=Object.getOwnPropertyDescriptor(n,t);o&&Object.defineProperty(e,t,o.get?o:{enumerable:!0,get:()=>n[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();function ed(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rs={exports:{}},ht={},As={exports:{}},N={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var on=Symbol.for("react.element"),rd=Symbol.for("react.portal"),ad=Symbol.for("react.fragment"),nd=Symbol.for("react.strict_mode"),td=Symbol.for("react.profiler"),od=Symbol.for("react.provider"),ld=Symbol.for("react.context"),id=Symbol.for("react.forward_ref"),sd=Symbol.for("react.suspense"),ud=Symbol.for("react.memo"),cd=Symbol.for("react.lazy"),ti=Symbol.iterator;function dd(e){return e===null||typeof e!="object"?null:(e=ti&&e[ti]||e["@@iterator"],typeof e=="function"?e:null)}var Ts={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zs=Object.assign,Fs={};function fa(e,r,a){this.props=e,this.context=r,this.refs=Fs,this.updater=a||Ts}fa.prototype.isReactComponent={};fa.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};fa.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ps(){}Ps.prototype=fa.prototype;function il(e,r,a){this.props=e,this.context=r,this.refs=Fs,this.updater=a||Ts}var sl=il.prototype=new Ps;sl.constructor=il;zs(sl,fa.prototype);sl.isPureReactComponent=!0;var oi=Array.isArray,ks=Object.prototype.hasOwnProperty,ul={current:null},Ds={key:!0,ref:!0,__self:!0,__source:!0};function ws(e,r,a){var n,t={},o=null,l=null;if(r!=null)for(n in r.ref!==void 0&&(l=r.ref),r.key!==void 0&&(o=""+r.key),r)ks.call(r,n)&&!Ds.hasOwnProperty(n)&&(t[n]=r[n]);var i=arguments.length-2;if(i===1)t.children=a;else if(1<i){for(var s=Array(i),u=0;u<i;u++)s[u]=arguments[u+2];t.children=s}if(e&&e.defaultProps)for(n in i=e.defaultProps,i)t[n]===void 0&&(t[n]=i[n]);return{$$typeof:on,type:e,key:o,ref:l,props:t,_owner:ul.current}}function md(e,r){return{$$typeof:on,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function cl(e){return typeof e=="object"&&e!==null&&e.$$typeof===on}function pd(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return r[a]})}var li=/\/+/g;function bt(e,r){return typeof e=="object"&&e!==null&&e.key!=null?pd(""+e.key):r.toString(36)}function xn(e,r,a,n,t){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case on:case rd:l=!0}}if(l)return l=e,t=t(l),e=n===""?"."+bt(l,0):n,oi(t)?(a="",e!=null&&(a=e.replace(li,"$&/")+"/"),xn(t,r,a,"",function(u){return u})):t!=null&&(cl(t)&&(t=md(t,a+(!t.key||l&&l.key===t.key?"":(""+t.key).replace(li,"$&/")+"/")+e)),r.push(t)),1;if(l=0,n=n===""?".":n+":",oi(e))for(var i=0;i<e.length;i++){o=e[i];var s=n+bt(o,i);l+=xn(o,r,a,s,t)}else if(s=dd(e),typeof s=="function")for(e=s.call(e),i=0;!(o=e.next()).done;)o=o.value,s=n+bt(o,i++),l+=xn(o,r,a,s,t);else if(o==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return l}function yn(e,r,a){if(e==null)return e;var n=[],t=0;return xn(e,n,"","",function(o){return r.call(a,o,t++)}),n}function fd(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},jn={transition:null},yd={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:jn,ReactCurrentOwner:ul};function Ns(){throw Error("act(...) is not supported in production builds of React.")}N.Children={map:yn,forEach:function(e,r,a){yn(e,function(){r.apply(this,arguments)},a)},count:function(e){var r=0;return yn(e,function(){r++}),r},toArray:function(e){return yn(e,function(r){return r})||[]},only:function(e){if(!cl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};N.Component=fa;N.Fragment=ad;N.Profiler=td;N.PureComponent=il;N.StrictMode=nd;N.Suspense=sd;N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yd;N.act=Ns;N.cloneElement=function(e,r,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=zs({},e.props),t=e.key,o=e.ref,l=e._owner;if(r!=null){if(r.ref!==void 0&&(o=r.ref,l=ul.current),r.key!==void 0&&(t=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in r)ks.call(r,s)&&!Ds.hasOwnProperty(s)&&(n[s]=r[s]===void 0&&i!==void 0?i[s]:r[s])}var s=arguments.length-2;if(s===1)n.children=a;else if(1<s){i=Array(s);for(var u=0;u<s;u++)i[u]=arguments[u+2];n.children=i}return{$$typeof:on,type:e.type,key:t,ref:o,props:n,_owner:l}};N.createContext=function(e){return e={$$typeof:ld,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:od,_context:e},e.Consumer=e};N.createElement=ws;N.createFactory=function(e){var r=ws.bind(null,e);return r.type=e,r};N.createRef=function(){return{current:null}};N.forwardRef=function(e){return{$$typeof:id,render:e}};N.isValidElement=cl;N.lazy=function(e){return{$$typeof:cd,_payload:{_status:-1,_result:e},_init:fd}};N.memo=function(e,r){return{$$typeof:ud,type:e,compare:r===void 0?null:r}};N.startTransition=function(e){var r=jn.transition;jn.transition={};try{e()}finally{jn.transition=r}};N.unstable_act=Ns;N.useCallback=function(e,r){return ue.current.useCallback(e,r)};N.useContext=function(e){return ue.current.useContext(e)};N.useDebugValue=function(){};N.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};N.useEffect=function(e,r){return ue.current.useEffect(e,r)};N.useId=function(){return ue.current.useId()};N.useImperativeHandle=function(e,r,a){return ue.current.useImperativeHandle(e,r,a)};N.useInsertionEffect=function(e,r){return ue.current.useInsertionEffect(e,r)};N.useLayoutEffect=function(e,r){return ue.current.useLayoutEffect(e,r)};N.useMemo=function(e,r){return ue.current.useMemo(e,r)};N.useReducer=function(e,r,a){return ue.current.useReducer(e,r,a)};N.useRef=function(e){return ue.current.useRef(e)};N.useState=function(e){return ue.current.useState(e)};N.useSyncExternalStore=function(e,r,a){return ue.current.useSyncExternalStore(e,r,a)};N.useTransition=function(){return ue.current.useTransition()};N.version="18.3.1";As.exports=N;var O=As.exports;const xs=ed(O),hd=Zc({__proto__:null,default:xs},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vd=O,gd=Symbol.for("react.element"),Sd=Symbol.for("react.fragment"),Ed=Object.prototype.hasOwnProperty,Cd=vd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Od={key:!0,ref:!0,__self:!0,__source:!0};function js(e,r,a){var n,t={},o=null,l=null;a!==void 0&&(o=""+a),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(l=r.ref);for(n in r)Ed.call(r,n)&&!Od.hasOwnProperty(n)&&(t[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)t[n]===void 0&&(t[n]=r[n]);return{$$typeof:gd,type:e,key:o,ref:l,props:t,_owner:Cd.current}}ht.Fragment=Sd;ht.jsx=js;ht.jsxs=js;Rs.exports=ht;var f=Rs.exports,co={},qs={exports:{}},Ee={},Ls={exports:{}},bs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(F,D){var w=F.length;F.push(D);e:for(;0<w;){var J=w-1>>>1,K=F[J];if(0<t(K,D))F[J]=D,F[w]=K,w=J;else break e}}function a(F){return F.length===0?null:F[0]}function n(F){if(F.length===0)return null;var D=F[0],w=F.pop();if(w!==D){F[0]=w;e:for(var J=0,K=F.length,pn=K>>>1;J<pn;){var Or=2*(J+1)-1,Lt=F[Or],Rr=Or+1,fn=F[Rr];if(0>t(Lt,w))Rr<K&&0>t(fn,Lt)?(F[J]=fn,F[Rr]=w,J=Rr):(F[J]=Lt,F[Or]=w,J=Or);else if(Rr<K&&0>t(fn,w))F[J]=fn,F[Rr]=w,J=Rr;else break e}}return D}function t(F,D){var w=F.sortIndex-D.sortIndex;return w!==0?w:F.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var s=[],u=[],h=1,d=null,y=3,g=!1,S=!1,E=!1,A=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(F){for(var D=a(u);D!==null;){if(D.callback===null)n(u);else if(D.startTime<=F)n(u),D.sortIndex=D.expirationTime,r(s,D);else break;D=a(u)}}function v(F){if(E=!1,m(F),!S)if(a(s)!==null)S=!0,jt(R);else{var D=a(u);D!==null&&qt(v,D.startTime-F)}}function R(F,D){S=!1,E&&(E=!1,p(k),k=-1),g=!0;var w=y;try{for(m(D),d=a(s);d!==null&&(!(d.expirationTime>D)||F&&!Pe());){var J=d.callback;if(typeof J=="function"){d.callback=null,y=d.priorityLevel;var K=J(d.expirationTime<=D);D=e.unstable_now(),typeof K=="function"?d.callback=K:d===a(s)&&n(s),m(D)}else n(s);d=a(s)}if(d!==null)var pn=!0;else{var Or=a(u);Or!==null&&qt(v,Or.startTime-D),pn=!1}return pn}finally{d=null,y=w,g=!1}}var z=!1,P=null,k=-1,V=5,x=-1;function Pe(){return!(e.unstable_now()-x<V)}function va(){if(P!==null){var F=e.unstable_now();x=F;var D=!0;try{D=P(!0,F)}finally{D?ga():(z=!1,P=null)}}else z=!1}var ga;if(typeof c=="function")ga=function(){c(va)};else if(typeof MessageChannel<"u"){var ni=new MessageChannel,Xc=ni.port2;ni.port1.onmessage=va,ga=function(){Xc.postMessage(null)}}else ga=function(){A(va,0)};function jt(F){P=F,z||(z=!0,ga())}function qt(F,D){k=A(function(){F(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(F){F.callback=null},e.unstable_continueExecution=function(){S||g||(S=!0,jt(R))},e.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<F?Math.floor(1e3/F):5},e.unstable_getCurrentPriorityLevel=function(){return y},e.unstable_getFirstCallbackNode=function(){return a(s)},e.unstable_next=function(F){switch(y){case 1:case 2:case 3:var D=3;break;default:D=y}var w=y;y=D;try{return F()}finally{y=w}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(F,D){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var w=y;y=F;try{return D()}finally{y=w}},e.unstable_scheduleCallback=function(F,D,w){var J=e.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?J+w:J):w=J,F){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=w+K,F={id:h++,callback:D,priorityLevel:F,startTime:w,expirationTime:K,sortIndex:-1},w>J?(F.sortIndex=w,r(u,F),a(s)===null&&F===a(u)&&(E?(p(k),k=-1):E=!0,qt(v,w-J))):(F.sortIndex=K,r(s,F),S||g||(S=!0,jt(R))),F},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(F){var D=y;return function(){var w=y;y=D;try{return F.apply(this,arguments)}finally{y=w}}}})(bs);Ls.exports=bs;var Rd=Ls.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad=O,Se=Rd;function C(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gs=new Set,Ya={};function br(e,r){ia(e,r),ia(e+"Capture",r)}function ia(e,r){for(Ya[e]=r,e=0;e<r.length;e++)Gs.add(r[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mo=Object.prototype.hasOwnProperty,Td=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ii={},si={};function zd(e){return mo.call(si,e)?!0:mo.call(ii,e)?!1:Td.test(e)?si[e]=!0:(ii[e]=!0,!1)}function Fd(e,r,a,n){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return n?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Pd(e,r,a,n){if(r===null||typeof r>"u"||Fd(e,r,a,n))return!0;if(n)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function ce(e,r,a,n,t,o,l){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=n,this.attributeNamespace=t,this.mustUseProperty=a,this.propertyName=e,this.type=r,this.sanitizeURL=o,this.removeEmptyString=l}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];ae[r]=new ce(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var dl=/[\-:]([a-z])/g;function ml(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(dl,ml);ae[r]=new ce(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(dl,ml);ae[r]=new ce(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(dl,ml);ae[r]=new ce(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function pl(e,r,a,n){var t=ae.hasOwnProperty(r)?ae[r]:null;(t!==null?t.type!==0:n||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Pd(r,a,t,n)&&(a=null),n||t===null?zd(r)&&(a===null?e.removeAttribute(r):e.setAttribute(r,""+a)):t.mustUseProperty?e[t.propertyName]=a===null?t.type===3?!1:"":a:(r=t.attributeName,n=t.attributeNamespace,a===null?e.removeAttribute(r):(t=t.type,a=t===3||t===4&&a===!0?"":""+a,n?e.setAttributeNS(n,r,a):e.setAttribute(r,a))))}var Xe=Ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hn=Symbol.for("react.element"),Ir=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),fl=Symbol.for("react.strict_mode"),po=Symbol.for("react.profiler"),Ms=Symbol.for("react.provider"),Ys=Symbol.for("react.context"),yl=Symbol.for("react.forward_ref"),fo=Symbol.for("react.suspense"),yo=Symbol.for("react.suspense_list"),hl=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),Hs=Symbol.for("react.offscreen"),ui=Symbol.iterator;function Sa(e){return e===null||typeof e!="object"?null:(e=ui&&e[ui]||e["@@iterator"],typeof e=="function"?e:null)}var _=Object.assign,Gt;function Fa(e){if(Gt===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);Gt=r&&r[1]||""}return`
`+Gt+e}var Mt=!1;function Yt(e,r){if(!e||Mt)return"";Mt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(u){var n=u}Reflect.construct(e,[],r)}else{try{r.call()}catch(u){n=u}e.call(r.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var t=u.stack.split(`
`),o=n.stack.split(`
`),l=t.length-1,i=o.length-1;1<=l&&0<=i&&t[l]!==o[i];)i--;for(;1<=l&&0<=i;l--,i--)if(t[l]!==o[i]){if(l!==1||i!==1)do if(l--,i--,0>i||t[l]!==o[i]){var s=`
`+t[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=i);break}}}finally{Mt=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?Fa(e):""}function kd(e){switch(e.tag){case 5:return Fa(e.type);case 16:return Fa("Lazy");case 13:return Fa("Suspense");case 19:return Fa("SuspenseList");case 0:case 2:case 15:return e=Yt(e.type,!1),e;case 11:return e=Yt(e.type.render,!1),e;case 1:return e=Yt(e.type,!0),e;default:return""}}function ho(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vr:return"Fragment";case Ir:return"Portal";case po:return"Profiler";case fl:return"StrictMode";case fo:return"Suspense";case yo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ys:return(e.displayName||"Context")+".Consumer";case Ms:return(e._context.displayName||"Context")+".Provider";case yl:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hl:return r=e.displayName||null,r!==null?r:ho(e.type)||"Memo";case er:r=e._payload,e=e._init;try{return ho(e(r))}catch{}}return null}function Dd(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ho(r);case 8:return r===fl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function hr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _s(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function wd(e){var r=_s(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),n=""+e[r];if(!e.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var t=a.get,o=a.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return t.call(this)},set:function(l){n=""+l,o.call(this,l)}}),Object.defineProperty(e,r,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function vn(e){e._valueTracker||(e._valueTracker=wd(e))}function Is(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var a=r.getValue(),n="";return e&&(n=_s(e)?e.checked?"true":"false":e.value),e=n,e!==a?(r.setValue(e),!0):!1}function Jn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vo(e,r){var a=r.checked;return _({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function ci(e,r){var a=r.defaultValue==null?"":r.defaultValue,n=r.checked!=null?r.checked:r.defaultChecked;a=hr(r.value!=null?r.value:a),e._wrapperState={initialChecked:n,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Vs(e,r){r=r.checked,r!=null&&pl(e,"checked",r,!1)}function go(e,r){Vs(e,r);var a=hr(r.value),n=r.type;if(a!=null)n==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?So(e,r.type,a):r.hasOwnProperty("defaultValue")&&So(e,r.type,hr(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function di(e,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var n=r.type;if(!(n!=="submit"&&n!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,a||r===e.value||(e.value=r),e.defaultValue=r}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function So(e,r,a){(r!=="number"||Jn(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var Pa=Array.isArray;function ra(e,r,a,n){if(e=e.options,r){r={};for(var t=0;t<a.length;t++)r["$"+a[t]]=!0;for(a=0;a<e.length;a++)t=r.hasOwnProperty("$"+e[a].value),e[a].selected!==t&&(e[a].selected=t),t&&n&&(e[a].defaultSelected=!0)}else{for(a=""+hr(a),r=null,t=0;t<e.length;t++){if(e[t].value===a){e[t].selected=!0,n&&(e[t].defaultSelected=!0);return}r!==null||e[t].disabled||(r=e[t])}r!==null&&(r.selected=!0)}}function Eo(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(C(91));return _({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mi(e,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(C(92));if(Pa(a)){if(1<a.length)throw Error(C(93));a=a[0]}r=a}r==null&&(r=""),a=r}e._wrapperState={initialValue:hr(a)}}function Js(e,r){var a=hr(r.value),n=hr(r.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),r.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),n!=null&&(e.defaultValue=""+n)}function pi(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function Bs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Co(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?Bs(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gn,Us=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,n,t){MSApp.execUnsafeLocalFunction(function(){return e(r,a,n,t)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(gn=gn||document.createElement("div"),gn.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=gn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Ha(e,r){if(r){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=r;return}}e.textContent=r}var wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nd=["Webkit","ms","Moz","O"];Object.keys(wa).forEach(function(e){Nd.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),wa[r]=wa[e]})});function Qs(e,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||wa.hasOwnProperty(e)&&wa[e]?(""+r).trim():r+"px"}function $s(e,r){e=e.style;for(var a in r)if(r.hasOwnProperty(a)){var n=a.indexOf("--")===0,t=Qs(a,r[a],n);a==="float"&&(a="cssFloat"),n?e.setProperty(a,t):e[a]=t}}var xd=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oo(e,r){if(r){if(xd[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(C(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(C(61))}if(r.style!=null&&typeof r.style!="object")throw Error(C(62))}}function Ro(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ao=null;function vl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var To=null,aa=null,na=null;function fi(e){if(e=un(e)){if(typeof To!="function")throw Error(C(280));var r=e.stateNode;r&&(r=Ct(r),To(e.stateNode,e.type,r))}}function Ws(e){aa?na?na.push(e):na=[e]:aa=e}function Ks(){if(aa){var e=aa,r=na;if(na=aa=null,fi(e),r)for(e=0;e<r.length;e++)fi(r[e])}}function Xs(e,r){return e(r)}function Zs(){}var Ht=!1;function eu(e,r,a){if(Ht)return e(r,a);Ht=!0;try{return Xs(e,r,a)}finally{Ht=!1,(aa!==null||na!==null)&&(Zs(),Ks())}}function _a(e,r){var a=e.stateNode;if(a===null)return null;var n=Ct(a);if(n===null)return null;a=n[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(C(231,r,typeof a));return a}var zo=!1;if(Qe)try{var Ea={};Object.defineProperty(Ea,"passive",{get:function(){zo=!0}}),window.addEventListener("test",Ea,Ea),window.removeEventListener("test",Ea,Ea)}catch{zo=!1}function jd(e,r,a,n,t,o,l,i,s){var u=Array.prototype.slice.call(arguments,3);try{r.apply(a,u)}catch(h){this.onError(h)}}var Na=!1,Bn=null,Un=!1,Fo=null,qd={onError:function(e){Na=!0,Bn=e}};function Ld(e,r,a,n,t,o,l,i,s){Na=!1,Bn=null,jd.apply(qd,arguments)}function bd(e,r,a,n,t,o,l,i,s){if(Ld.apply(this,arguments),Na){if(Na){var u=Bn;Na=!1,Bn=null}else throw Error(C(198));Un||(Un=!0,Fo=u)}}function Gr(e){var r=e,a=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(a=r.return),e=r.return;while(e)}return r.tag===3?a:null}function ru(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function yi(e){if(Gr(e)!==e)throw Error(C(188))}function Gd(e){var r=e.alternate;if(!r){if(r=Gr(e),r===null)throw Error(C(188));return r!==e?null:e}for(var a=e,n=r;;){var t=a.return;if(t===null)break;var o=t.alternate;if(o===null){if(n=t.return,n!==null){a=n;continue}break}if(t.child===o.child){for(o=t.child;o;){if(o===a)return yi(t),e;if(o===n)return yi(t),r;o=o.sibling}throw Error(C(188))}if(a.return!==n.return)a=t,n=o;else{for(var l=!1,i=t.child;i;){if(i===a){l=!0,a=t,n=o;break}if(i===n){l=!0,n=t,a=o;break}i=i.sibling}if(!l){for(i=o.child;i;){if(i===a){l=!0,a=o,n=t;break}if(i===n){l=!0,n=o,a=t;break}i=i.sibling}if(!l)throw Error(C(189))}}if(a.alternate!==n)throw Error(C(190))}if(a.tag!==3)throw Error(C(188));return a.stateNode.current===a?e:r}function au(e){return e=Gd(e),e!==null?nu(e):null}function nu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=nu(e);if(r!==null)return r;e=e.sibling}return null}var tu=Se.unstable_scheduleCallback,hi=Se.unstable_cancelCallback,Md=Se.unstable_shouldYield,Yd=Se.unstable_requestPaint,B=Se.unstable_now,Hd=Se.unstable_getCurrentPriorityLevel,gl=Se.unstable_ImmediatePriority,ou=Se.unstable_UserBlockingPriority,Qn=Se.unstable_NormalPriority,_d=Se.unstable_LowPriority,lu=Se.unstable_IdlePriority,vt=null,Ye=null;function Id(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(vt,e,void 0,(e.current.flags&128)===128)}catch{}}var xe=Math.clz32?Math.clz32:Bd,Vd=Math.log,Jd=Math.LN2;function Bd(e){return e>>>=0,e===0?32:31-(Vd(e)/Jd|0)|0}var Sn=64,En=4194304;function ka(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $n(e,r){var a=e.pendingLanes;if(a===0)return 0;var n=0,t=e.suspendedLanes,o=e.pingedLanes,l=a&268435455;if(l!==0){var i=l&~t;i!==0?n=ka(i):(o&=l,o!==0&&(n=ka(o)))}else l=a&~t,l!==0?n=ka(l):o!==0&&(n=ka(o));if(n===0)return 0;if(r!==0&&r!==n&&!(r&t)&&(t=n&-n,o=r&-r,t>=o||t===16&&(o&4194240)!==0))return r;if(n&4&&(n|=a&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=n;0<r;)a=31-xe(r),t=1<<a,n|=e[a],r&=~t;return n}function Ud(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qd(e,r){for(var a=e.suspendedLanes,n=e.pingedLanes,t=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-xe(o),i=1<<l,s=t[l];s===-1?(!(i&a)||i&n)&&(t[l]=Ud(i,r)):s<=r&&(e.expiredLanes|=i),o&=~i}}function Po(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function iu(){var e=Sn;return Sn<<=1,!(Sn&4194240)&&(Sn=64),e}function _t(e){for(var r=[],a=0;31>a;a++)r.push(e);return r}function ln(e,r,a){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-xe(r),e[r]=a}function $d(e,r){var a=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<a;){var t=31-xe(a),o=1<<t;r[t]=0,n[t]=-1,e[t]=-1,a&=~o}}function Sl(e,r){var a=e.entangledLanes|=r;for(e=e.entanglements;a;){var n=31-xe(a),t=1<<n;t&r|e[n]&r&&(e[n]|=r),a&=~t}}var q=0;function su(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var uu,El,cu,du,mu,ko=!1,Cn=[],ir=null,sr=null,ur=null,Ia=new Map,Va=new Map,ar=[],Wd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vi(e,r){switch(e){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Ia.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Va.delete(r.pointerId)}}function Ca(e,r,a,n,t,o){return e===null||e.nativeEvent!==o?(e={blockedOn:r,domEventName:a,eventSystemFlags:n,nativeEvent:o,targetContainers:[t]},r!==null&&(r=un(r),r!==null&&El(r)),e):(e.eventSystemFlags|=n,r=e.targetContainers,t!==null&&r.indexOf(t)===-1&&r.push(t),e)}function Kd(e,r,a,n,t){switch(r){case"focusin":return ir=Ca(ir,e,r,a,n,t),!0;case"dragenter":return sr=Ca(sr,e,r,a,n,t),!0;case"mouseover":return ur=Ca(ur,e,r,a,n,t),!0;case"pointerover":var o=t.pointerId;return Ia.set(o,Ca(Ia.get(o)||null,e,r,a,n,t)),!0;case"gotpointercapture":return o=t.pointerId,Va.set(o,Ca(Va.get(o)||null,e,r,a,n,t)),!0}return!1}function pu(e){var r=Fr(e.target);if(r!==null){var a=Gr(r);if(a!==null){if(r=a.tag,r===13){if(r=ru(a),r!==null){e.blockedOn=r,mu(e.priority,function(){cu(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qn(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var a=Do(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Ao=n,a.target.dispatchEvent(n),Ao=null}else return r=un(a),r!==null&&El(r),e.blockedOn=a,!1;r.shift()}return!0}function gi(e,r,a){qn(e)&&a.delete(r)}function Xd(){ko=!1,ir!==null&&qn(ir)&&(ir=null),sr!==null&&qn(sr)&&(sr=null),ur!==null&&qn(ur)&&(ur=null),Ia.forEach(gi),Va.forEach(gi)}function Oa(e,r){e.blockedOn===r&&(e.blockedOn=null,ko||(ko=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,Xd)))}function Ja(e){function r(t){return Oa(t,e)}if(0<Cn.length){Oa(Cn[0],e);for(var a=1;a<Cn.length;a++){var n=Cn[a];n.blockedOn===e&&(n.blockedOn=null)}}for(ir!==null&&Oa(ir,e),sr!==null&&Oa(sr,e),ur!==null&&Oa(ur,e),Ia.forEach(r),Va.forEach(r),a=0;a<ar.length;a++)n=ar[a],n.blockedOn===e&&(n.blockedOn=null);for(;0<ar.length&&(a=ar[0],a.blockedOn===null);)pu(a),a.blockedOn===null&&ar.shift()}var ta=Xe.ReactCurrentBatchConfig,Wn=!0;function Zd(e,r,a,n){var t=q,o=ta.transition;ta.transition=null;try{q=1,Cl(e,r,a,n)}finally{q=t,ta.transition=o}}function em(e,r,a,n){var t=q,o=ta.transition;ta.transition=null;try{q=4,Cl(e,r,a,n)}finally{q=t,ta.transition=o}}function Cl(e,r,a,n){if(Wn){var t=Do(e,r,a,n);if(t===null)Xt(e,r,n,Kn,a),vi(e,n);else if(Kd(t,e,r,a,n))n.stopPropagation();else if(vi(e,n),r&4&&-1<Wd.indexOf(e)){for(;t!==null;){var o=un(t);if(o!==null&&uu(o),o=Do(e,r,a,n),o===null&&Xt(e,r,n,Kn,a),o===t)break;t=o}t!==null&&n.stopPropagation()}else Xt(e,r,n,null,a)}}var Kn=null;function Do(e,r,a,n){if(Kn=null,e=vl(n),e=Fr(e),e!==null)if(r=Gr(e),r===null)e=null;else if(a=r.tag,a===13){if(e=ru(r),e!==null)return e;e=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Kn=e,null}function fu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hd()){case gl:return 1;case ou:return 4;case Qn:case _d:return 16;case lu:return 536870912;default:return 16}default:return 16}}var tr=null,Ol=null,Ln=null;function yu(){if(Ln)return Ln;var e,r=Ol,a=r.length,n,t="value"in tr?tr.value:tr.textContent,o=t.length;for(e=0;e<a&&r[e]===t[e];e++);var l=a-e;for(n=1;n<=l&&r[a-n]===t[o-n];n++);return Ln=t.slice(e,1<n?1-n:void 0)}function bn(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function On(){return!0}function Si(){return!1}function Ce(e){function r(a,n,t,o,l){this._reactName=a,this._targetInst=t,this.type=n,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(a=e[i],this[i]=a?a(o):o[i]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?On:Si,this.isPropagationStopped=Si,this}return _(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=On)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=On)},persist:function(){},isPersistent:On}),r}var ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=Ce(ya),sn=_({},ya,{view:0,detail:0}),rm=Ce(sn),It,Vt,Ra,gt=_({},sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Al,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ra&&(Ra&&e.type==="mousemove"?(It=e.screenX-Ra.screenX,Vt=e.screenY-Ra.screenY):Vt=It=0,Ra=e),It)},movementY:function(e){return"movementY"in e?e.movementY:Vt}}),Ei=Ce(gt),am=_({},gt,{dataTransfer:0}),nm=Ce(am),tm=_({},sn,{relatedTarget:0}),Jt=Ce(tm),om=_({},ya,{animationName:0,elapsedTime:0,pseudoElement:0}),lm=Ce(om),im=_({},ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sm=Ce(im),um=_({},ya,{data:0}),Ci=Ce(um),cm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pm(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=mm[e])?!!r[e]:!1}function Al(){return pm}var fm=_({},sn,{key:function(e){if(e.key){var r=cm[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=bn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Al,charCode:function(e){return e.type==="keypress"?bn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ym=Ce(fm),hm=_({},gt,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oi=Ce(hm),vm=_({},sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Al}),gm=Ce(vm),Sm=_({},ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),Em=Ce(Sm),Cm=_({},gt,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Om=Ce(Cm),Rm=[9,13,27,32],Tl=Qe&&"CompositionEvent"in window,xa=null;Qe&&"documentMode"in document&&(xa=document.documentMode);var Am=Qe&&"TextEvent"in window&&!xa,hu=Qe&&(!Tl||xa&&8<xa&&11>=xa),Ri=" ",Ai=!1;function vu(e,r){switch(e){case"keyup":return Rm.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jr=!1;function Tm(e,r){switch(e){case"compositionend":return gu(r);case"keypress":return r.which!==32?null:(Ai=!0,Ri);case"textInput":return e=r.data,e===Ri&&Ai?null:e;default:return null}}function zm(e,r){if(Jr)return e==="compositionend"||!Tl&&vu(e,r)?(e=yu(),Ln=Ol=tr=null,Jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return hu&&r.locale!=="ko"?null:r.data;default:return null}}var Fm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ti(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Fm[e.type]:r==="textarea"}function Su(e,r,a,n){Ws(n),r=Xn(r,"onChange"),0<r.length&&(a=new Rl("onChange","change",null,a,n),e.push({event:a,listeners:r}))}var ja=null,Ba=null;function Pm(e){Du(e,0)}function St(e){var r=Qr(e);if(Is(r))return e}function km(e,r){if(e==="change")return r}var Eu=!1;if(Qe){var Bt;if(Qe){var Ut="oninput"in document;if(!Ut){var zi=document.createElement("div");zi.setAttribute("oninput","return;"),Ut=typeof zi.oninput=="function"}Bt=Ut}else Bt=!1;Eu=Bt&&(!document.documentMode||9<document.documentMode)}function Fi(){ja&&(ja.detachEvent("onpropertychange",Cu),Ba=ja=null)}function Cu(e){if(e.propertyName==="value"&&St(Ba)){var r=[];Su(r,Ba,e,vl(e)),eu(Pm,r)}}function Dm(e,r,a){e==="focusin"?(Fi(),ja=r,Ba=a,ja.attachEvent("onpropertychange",Cu)):e==="focusout"&&Fi()}function wm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return St(Ba)}function Nm(e,r){if(e==="click")return St(r)}function xm(e,r){if(e==="input"||e==="change")return St(r)}function jm(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var qe=typeof Object.is=="function"?Object.is:jm;function Ua(e,r){if(qe(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var a=Object.keys(e),n=Object.keys(r);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var t=a[n];if(!mo.call(r,t)||!qe(e[t],r[t]))return!1}return!0}function Pi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ki(e,r){var a=Pi(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=r&&n>=r)return{node:a,offset:r-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Pi(a)}}function Ou(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Ou(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Ru(){for(var e=window,r=Jn();r instanceof e.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)e=r.contentWindow;else break;r=Jn(e.document)}return r}function zl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function qm(e){var r=Ru(),a=e.focusedElem,n=e.selectionRange;if(r!==a&&a&&a.ownerDocument&&Ou(a.ownerDocument.documentElement,a)){if(n!==null&&zl(a)){if(r=n.start,e=n.end,e===void 0&&(e=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(e,a.value.length);else if(e=(r=a.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var t=a.textContent.length,o=Math.min(n.start,t);n=n.end===void 0?o:Math.min(n.end,t),!e.extend&&o>n&&(t=n,n=o,o=t),t=ki(a,o);var l=ki(a,n);t&&l&&(e.rangeCount!==1||e.anchorNode!==t.node||e.anchorOffset!==t.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(r=r.createRange(),r.setStart(t.node,t.offset),e.removeAllRanges(),o>n?(e.addRange(r),e.extend(l.node,l.offset)):(r.setEnd(l.node,l.offset),e.addRange(r)))}}for(r=[],e=a;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)e=r[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lm=Qe&&"documentMode"in document&&11>=document.documentMode,Br=null,wo=null,qa=null,No=!1;function Di(e,r,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;No||Br==null||Br!==Jn(n)||(n=Br,"selectionStart"in n&&zl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),qa&&Ua(qa,n)||(qa=n,n=Xn(wo,"onSelect"),0<n.length&&(r=new Rl("onSelect","select",null,r,a),e.push({event:r,listeners:n}),r.target=Br)))}function Rn(e,r){var a={};return a[e.toLowerCase()]=r.toLowerCase(),a["Webkit"+e]="webkit"+r,a["Moz"+e]="moz"+r,a}var Ur={animationend:Rn("Animation","AnimationEnd"),animationiteration:Rn("Animation","AnimationIteration"),animationstart:Rn("Animation","AnimationStart"),transitionend:Rn("Transition","TransitionEnd")},Qt={},Au={};Qe&&(Au=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function Et(e){if(Qt[e])return Qt[e];if(!Ur[e])return e;var r=Ur[e],a;for(a in r)if(r.hasOwnProperty(a)&&a in Au)return Qt[e]=r[a];return e}var Tu=Et("animationend"),zu=Et("animationiteration"),Fu=Et("animationstart"),Pu=Et("transitionend"),ku=new Map,wi="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(e,r){ku.set(e,r),br(r,[e])}for(var $t=0;$t<wi.length;$t++){var Wt=wi[$t],bm=Wt.toLowerCase(),Gm=Wt[0].toUpperCase()+Wt.slice(1);gr(bm,"on"+Gm)}gr(Tu,"onAnimationEnd");gr(zu,"onAnimationIteration");gr(Fu,"onAnimationStart");gr("dblclick","onDoubleClick");gr("focusin","onFocus");gr("focusout","onBlur");gr(Pu,"onTransitionEnd");ia("onMouseEnter",["mouseout","mouseover"]);ia("onMouseLeave",["mouseout","mouseover"]);ia("onPointerEnter",["pointerout","pointerover"]);ia("onPointerLeave",["pointerout","pointerover"]);br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));br("onBeforeInput",["compositionend","keypress","textInput","paste"]);br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function Ni(e,r,a){var n=e.type||"unknown-event";e.currentTarget=a,bd(n,r,void 0,e),e.currentTarget=null}function Du(e,r){r=(r&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],t=n.event;n=n.listeners;e:{var o=void 0;if(r)for(var l=n.length-1;0<=l;l--){var i=n[l],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==o&&t.isPropagationStopped())break e;Ni(t,i,u),o=s}else for(l=0;l<n.length;l++){if(i=n[l],s=i.instance,u=i.currentTarget,i=i.listener,s!==o&&t.isPropagationStopped())break e;Ni(t,i,u),o=s}}}if(Un)throw e=Fo,Un=!1,Fo=null,e}function b(e,r){var a=r[bo];a===void 0&&(a=r[bo]=new Set);var n=e+"__bubble";a.has(n)||(wu(r,e,2,!1),a.add(n))}function Kt(e,r,a){var n=0;r&&(n|=4),wu(a,e,n,r)}var An="_reactListening"+Math.random().toString(36).slice(2);function Qa(e){if(!e[An]){e[An]=!0,Gs.forEach(function(a){a!=="selectionchange"&&(Mm.has(a)||Kt(a,!1,e),Kt(a,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[An]||(r[An]=!0,Kt("selectionchange",!1,r))}}function wu(e,r,a,n){switch(fu(r)){case 1:var t=Zd;break;case 4:t=em;break;default:t=Cl}a=t.bind(null,r,a,e),t=void 0,!zo||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(t=!0),n?t!==void 0?e.addEventListener(r,a,{capture:!0,passive:t}):e.addEventListener(r,a,!0):t!==void 0?e.addEventListener(r,a,{passive:t}):e.addEventListener(r,a,!1)}function Xt(e,r,a,n,t){var o=n;if(!(r&1)&&!(r&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var i=n.stateNode.containerInfo;if(i===t||i.nodeType===8&&i.parentNode===t)break;if(l===4)for(l=n.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===t||s.nodeType===8&&s.parentNode===t))return;l=l.return}for(;i!==null;){if(l=Fr(i),l===null)return;if(s=l.tag,s===5||s===6){n=o=l;continue e}i=i.parentNode}}n=n.return}eu(function(){var u=o,h=vl(a),d=[];e:{var y=ku.get(e);if(y!==void 0){var g=Rl,S=e;switch(e){case"keypress":if(bn(a)===0)break e;case"keydown":case"keyup":g=ym;break;case"focusin":S="focus",g=Jt;break;case"focusout":S="blur",g=Jt;break;case"beforeblur":case"afterblur":g=Jt;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ei;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=nm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=gm;break;case Tu:case zu:case Fu:g=lm;break;case Pu:g=Em;break;case"scroll":g=rm;break;case"wheel":g=Om;break;case"copy":case"cut":case"paste":g=sm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Oi}var E=(r&4)!==0,A=!E&&e==="scroll",p=E?y!==null?y+"Capture":null:y;E=[];for(var c=u,m;c!==null;){m=c;var v=m.stateNode;if(m.tag===5&&v!==null&&(m=v,p!==null&&(v=_a(c,p),v!=null&&E.push($a(c,v,m)))),A)break;c=c.return}0<E.length&&(y=new g(y,S,null,a,h),d.push({event:y,listeners:E}))}}if(!(r&7)){e:{if(y=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",y&&a!==Ao&&(S=a.relatedTarget||a.fromElement)&&(Fr(S)||S[$e]))break e;if((g||y)&&(y=h.window===h?h:(y=h.ownerDocument)?y.defaultView||y.parentWindow:window,g?(S=a.relatedTarget||a.toElement,g=u,S=S?Fr(S):null,S!==null&&(A=Gr(S),S!==A||S.tag!==5&&S.tag!==6)&&(S=null)):(g=null,S=u),g!==S)){if(E=Ei,v="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(E=Oi,v="onPointerLeave",p="onPointerEnter",c="pointer"),A=g==null?y:Qr(g),m=S==null?y:Qr(S),y=new E(v,c+"leave",g,a,h),y.target=A,y.relatedTarget=m,v=null,Fr(h)===u&&(E=new E(p,c+"enter",S,a,h),E.target=m,E.relatedTarget=A,v=E),A=v,g&&S)r:{for(E=g,p=S,c=0,m=E;m;m=Hr(m))c++;for(m=0,v=p;v;v=Hr(v))m++;for(;0<c-m;)E=Hr(E),c--;for(;0<m-c;)p=Hr(p),m--;for(;c--;){if(E===p||p!==null&&E===p.alternate)break r;E=Hr(E),p=Hr(p)}E=null}else E=null;g!==null&&xi(d,y,g,E,!1),S!==null&&A!==null&&xi(d,A,S,E,!0)}}e:{if(y=u?Qr(u):window,g=y.nodeName&&y.nodeName.toLowerCase(),g==="select"||g==="input"&&y.type==="file")var R=km;else if(Ti(y))if(Eu)R=xm;else{R=wm;var z=Dm}else(g=y.nodeName)&&g.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(R=Nm);if(R&&(R=R(e,u))){Su(d,R,a,h);break e}z&&z(e,y,u),e==="focusout"&&(z=y._wrapperState)&&z.controlled&&y.type==="number"&&So(y,"number",y.value)}switch(z=u?Qr(u):window,e){case"focusin":(Ti(z)||z.contentEditable==="true")&&(Br=z,wo=u,qa=null);break;case"focusout":qa=wo=Br=null;break;case"mousedown":No=!0;break;case"contextmenu":case"mouseup":case"dragend":No=!1,Di(d,a,h);break;case"selectionchange":if(Lm)break;case"keydown":case"keyup":Di(d,a,h)}var P;if(Tl)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Jr?vu(e,a)&&(k="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(k="onCompositionStart");k&&(hu&&a.locale!=="ko"&&(Jr||k!=="onCompositionStart"?k==="onCompositionEnd"&&Jr&&(P=yu()):(tr=h,Ol="value"in tr?tr.value:tr.textContent,Jr=!0)),z=Xn(u,k),0<z.length&&(k=new Ci(k,e,null,a,h),d.push({event:k,listeners:z}),P?k.data=P:(P=gu(a),P!==null&&(k.data=P)))),(P=Am?Tm(e,a):zm(e,a))&&(u=Xn(u,"onBeforeInput"),0<u.length&&(h=new Ci("onBeforeInput","beforeinput",null,a,h),d.push({event:h,listeners:u}),h.data=P))}Du(d,r)})}function $a(e,r,a){return{instance:e,listener:r,currentTarget:a}}function Xn(e,r){for(var a=r+"Capture",n=[];e!==null;){var t=e,o=t.stateNode;t.tag===5&&o!==null&&(t=o,o=_a(e,a),o!=null&&n.unshift($a(e,o,t)),o=_a(e,r),o!=null&&n.push($a(e,o,t))),e=e.return}return n}function Hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xi(e,r,a,n,t){for(var o=r._reactName,l=[];a!==null&&a!==n;){var i=a,s=i.alternate,u=i.stateNode;if(s!==null&&s===n)break;i.tag===5&&u!==null&&(i=u,t?(s=_a(a,o),s!=null&&l.unshift($a(a,s,i))):t||(s=_a(a,o),s!=null&&l.push($a(a,s,i)))),a=a.return}l.length!==0&&e.push({event:r,listeners:l})}var Ym=/\r\n?/g,Hm=/\u0000|\uFFFD/g;function ji(e){return(typeof e=="string"?e:""+e).replace(Ym,`
`).replace(Hm,"")}function Tn(e,r,a){if(r=ji(r),ji(e)!==r&&a)throw Error(C(425))}function Zn(){}var xo=null,jo=null;function qo(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Lo=typeof setTimeout=="function"?setTimeout:void 0,_m=typeof clearTimeout=="function"?clearTimeout:void 0,qi=typeof Promise=="function"?Promise:void 0,Im=typeof queueMicrotask=="function"?queueMicrotask:typeof qi<"u"?function(e){return qi.resolve(null).then(e).catch(Vm)}:Lo;function Vm(e){setTimeout(function(){throw e})}function Zt(e,r){var a=r,n=0;do{var t=a.nextSibling;if(e.removeChild(a),t&&t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){e.removeChild(t),Ja(r);return}n--}else a!=="$"&&a!=="$?"&&a!=="$!"||n++;a=t}while(a);Ja(r)}function cr(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Li(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return e;r--}else a==="/$"&&r++}e=e.previousSibling}return null}var ha=Math.random().toString(36).slice(2),Me="__reactFiber$"+ha,Wa="__reactProps$"+ha,$e="__reactContainer$"+ha,bo="__reactEvents$"+ha,Jm="__reactListeners$"+ha,Bm="__reactHandles$"+ha;function Fr(e){var r=e[Me];if(r)return r;for(var a=e.parentNode;a;){if(r=a[$e]||a[Me]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(e=Li(e);e!==null;){if(a=e[Me])return a;e=Li(e)}return r}e=a,a=e.parentNode}return null}function un(e){return e=e[Me]||e[$e],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Ct(e){return e[Wa]||null}var Go=[],$r=-1;function Sr(e){return{current:e}}function G(e){0>$r||(e.current=Go[$r],Go[$r]=null,$r--)}function L(e,r){$r++,Go[$r]=e.current,e.current=r}var vr={},le=Sr(vr),pe=Sr(!1),Nr=vr;function sa(e,r){var a=e.type.contextTypes;if(!a)return vr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===r)return n.__reactInternalMemoizedMaskedChildContext;var t={},o;for(o in a)t[o]=r[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=t),t}function fe(e){return e=e.childContextTypes,e!=null}function et(){G(pe),G(le)}function bi(e,r,a){if(le.current!==vr)throw Error(C(168));L(le,r),L(pe,a)}function Nu(e,r,a){var n=e.stateNode;if(r=r.childContextTypes,typeof n.getChildContext!="function")return a;n=n.getChildContext();for(var t in n)if(!(t in r))throw Error(C(108,Dd(e)||"Unknown",t));return _({},a,n)}function rt(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vr,Nr=le.current,L(le,e),L(pe,pe.current),!0}function Gi(e,r,a){var n=e.stateNode;if(!n)throw Error(C(169));a?(e=Nu(e,r,Nr),n.__reactInternalMemoizedMergedChildContext=e,G(pe),G(le),L(le,e)):G(pe),L(pe,a)}var Ie=null,Ot=!1,eo=!1;function xu(e){Ie===null?Ie=[e]:Ie.push(e)}function Um(e){Ot=!0,xu(e)}function Er(){if(!eo&&Ie!==null){eo=!0;var e=0,r=q;try{var a=Ie;for(q=1;e<a.length;e++){var n=a[e];do n=n(!0);while(n!==null)}Ie=null,Ot=!1}catch(t){throw Ie!==null&&(Ie=Ie.slice(e+1)),tu(gl,Er),t}finally{q=r,eo=!1}}return null}var Wr=[],Kr=0,at=null,nt=0,Oe=[],Re=0,xr=null,Ve=1,Je="";function Ar(e,r){Wr[Kr++]=nt,Wr[Kr++]=at,at=e,nt=r}function ju(e,r,a){Oe[Re++]=Ve,Oe[Re++]=Je,Oe[Re++]=xr,xr=e;var n=Ve;e=Je;var t=32-xe(n)-1;n&=~(1<<t),a+=1;var o=32-xe(r)+t;if(30<o){var l=t-t%5;o=(n&(1<<l)-1).toString(32),n>>=l,t-=l,Ve=1<<32-xe(r)+t|a<<t|n,Je=o+e}else Ve=1<<o|a<<t|n,Je=e}function Fl(e){e.return!==null&&(Ar(e,1),ju(e,1,0))}function Pl(e){for(;e===at;)at=Wr[--Kr],Wr[Kr]=null,nt=Wr[--Kr],Wr[Kr]=null;for(;e===xr;)xr=Oe[--Re],Oe[Re]=null,Je=Oe[--Re],Oe[Re]=null,Ve=Oe[--Re],Oe[Re]=null}var ge=null,ve=null,M=!1,Ne=null;function qu(e,r){var a=Ae(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=e,r=e.deletions,r===null?(e.deletions=[a],e.flags|=16):r.push(a)}function Mi(e,r){switch(e.tag){case 5:var a=e.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,ge=e,ve=cr(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,ge=e,ve=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=xr!==null?{id:Ve,overflow:Je}:null,e.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=Ae(18,null,null,0),a.stateNode=r,a.return=e,e.child=a,ge=e,ve=null,!0):!1;default:return!1}}function Mo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yo(e){if(M){var r=ve;if(r){var a=r;if(!Mi(e,r)){if(Mo(e))throw Error(C(418));r=cr(a.nextSibling);var n=ge;r&&Mi(e,r)?qu(n,a):(e.flags=e.flags&-4097|2,M=!1,ge=e)}}else{if(Mo(e))throw Error(C(418));e.flags=e.flags&-4097|2,M=!1,ge=e}}}function Yi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function zn(e){if(e!==ge)return!1;if(!M)return Yi(e),M=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!qo(e.type,e.memoizedProps)),r&&(r=ve)){if(Mo(e))throw Lu(),Error(C(418));for(;r;)qu(e,r),r=cr(r.nextSibling)}if(Yi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(r===0){ve=cr(e.nextSibling);break e}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}e=e.nextSibling}ve=null}}else ve=ge?cr(e.stateNode.nextSibling):null;return!0}function Lu(){for(var e=ve;e;)e=cr(e.nextSibling)}function ua(){ve=ge=null,M=!1}function kl(e){Ne===null?Ne=[e]:Ne.push(e)}var Qm=Xe.ReactCurrentBatchConfig;function Aa(e,r,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(C(309));var n=a.stateNode}if(!n)throw Error(C(147,e));var t=n,o=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===o?r.ref:(r=function(l){var i=t.refs;l===null?delete i[o]:i[o]=l},r._stringRef=o,r)}if(typeof e!="string")throw Error(C(284));if(!a._owner)throw Error(C(290,e))}return e}function Fn(e,r){throw e=Object.prototype.toString.call(r),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function Hi(e){var r=e._init;return r(e._payload)}function bu(e){function r(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function a(p,c){if(!e)return null;for(;c!==null;)r(p,c),c=c.sibling;return null}function n(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function t(p,c){return p=fr(p,c),p.index=0,p.sibling=null,p}function o(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function i(p,c,m,v){return c===null||c.tag!==6?(c=io(m,p.mode,v),c.return=p,c):(c=t(c,m),c.return=p,c)}function s(p,c,m,v){var R=m.type;return R===Vr?h(p,c,m.props.children,v,m.key):c!==null&&(c.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===er&&Hi(R)===c.type)?(v=t(c,m.props),v.ref=Aa(p,c,m),v.return=p,v):(v=Vn(m.type,m.key,m.props,null,p.mode,v),v.ref=Aa(p,c,m),v.return=p,v)}function u(p,c,m,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=so(m,p.mode,v),c.return=p,c):(c=t(c,m.children||[]),c.return=p,c)}function h(p,c,m,v,R){return c===null||c.tag!==7?(c=wr(m,p.mode,v,R),c.return=p,c):(c=t(c,m),c.return=p,c)}function d(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=io(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case hn:return m=Vn(c.type,c.key,c.props,null,p.mode,m),m.ref=Aa(p,null,c),m.return=p,m;case Ir:return c=so(c,p.mode,m),c.return=p,c;case er:var v=c._init;return d(p,v(c._payload),m)}if(Pa(c)||Sa(c))return c=wr(c,p.mode,m,null),c.return=p,c;Fn(p,c)}return null}function y(p,c,m,v){var R=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return R!==null?null:i(p,c,""+m,v);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case hn:return m.key===R?s(p,c,m,v):null;case Ir:return m.key===R?u(p,c,m,v):null;case er:return R=m._init,y(p,c,R(m._payload),v)}if(Pa(m)||Sa(m))return R!==null?null:h(p,c,m,v,null);Fn(p,m)}return null}function g(p,c,m,v,R){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(m)||null,i(c,p,""+v,R);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hn:return p=p.get(v.key===null?m:v.key)||null,s(c,p,v,R);case Ir:return p=p.get(v.key===null?m:v.key)||null,u(c,p,v,R);case er:var z=v._init;return g(p,c,m,z(v._payload),R)}if(Pa(v)||Sa(v))return p=p.get(m)||null,h(c,p,v,R,null);Fn(c,v)}return null}function S(p,c,m,v){for(var R=null,z=null,P=c,k=c=0,V=null;P!==null&&k<m.length;k++){P.index>k?(V=P,P=null):V=P.sibling;var x=y(p,P,m[k],v);if(x===null){P===null&&(P=V);break}e&&P&&x.alternate===null&&r(p,P),c=o(x,c,k),z===null?R=x:z.sibling=x,z=x,P=V}if(k===m.length)return a(p,P),M&&Ar(p,k),R;if(P===null){for(;k<m.length;k++)P=d(p,m[k],v),P!==null&&(c=o(P,c,k),z===null?R=P:z.sibling=P,z=P);return M&&Ar(p,k),R}for(P=n(p,P);k<m.length;k++)V=g(P,p,k,m[k],v),V!==null&&(e&&V.alternate!==null&&P.delete(V.key===null?k:V.key),c=o(V,c,k),z===null?R=V:z.sibling=V,z=V);return e&&P.forEach(function(Pe){return r(p,Pe)}),M&&Ar(p,k),R}function E(p,c,m,v){var R=Sa(m);if(typeof R!="function")throw Error(C(150));if(m=R.call(m),m==null)throw Error(C(151));for(var z=R=null,P=c,k=c=0,V=null,x=m.next();P!==null&&!x.done;k++,x=m.next()){P.index>k?(V=P,P=null):V=P.sibling;var Pe=y(p,P,x.value,v);if(Pe===null){P===null&&(P=V);break}e&&P&&Pe.alternate===null&&r(p,P),c=o(Pe,c,k),z===null?R=Pe:z.sibling=Pe,z=Pe,P=V}if(x.done)return a(p,P),M&&Ar(p,k),R;if(P===null){for(;!x.done;k++,x=m.next())x=d(p,x.value,v),x!==null&&(c=o(x,c,k),z===null?R=x:z.sibling=x,z=x);return M&&Ar(p,k),R}for(P=n(p,P);!x.done;k++,x=m.next())x=g(P,p,k,x.value,v),x!==null&&(e&&x.alternate!==null&&P.delete(x.key===null?k:x.key),c=o(x,c,k),z===null?R=x:z.sibling=x,z=x);return e&&P.forEach(function(va){return r(p,va)}),M&&Ar(p,k),R}function A(p,c,m,v){if(typeof m=="object"&&m!==null&&m.type===Vr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case hn:e:{for(var R=m.key,z=c;z!==null;){if(z.key===R){if(R=m.type,R===Vr){if(z.tag===7){a(p,z.sibling),c=t(z,m.props.children),c.return=p,p=c;break e}}else if(z.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===er&&Hi(R)===z.type){a(p,z.sibling),c=t(z,m.props),c.ref=Aa(p,z,m),c.return=p,p=c;break e}a(p,z);break}else r(p,z);z=z.sibling}m.type===Vr?(c=wr(m.props.children,p.mode,v,m.key),c.return=p,p=c):(v=Vn(m.type,m.key,m.props,null,p.mode,v),v.ref=Aa(p,c,m),v.return=p,p=v)}return l(p);case Ir:e:{for(z=m.key;c!==null;){if(c.key===z)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){a(p,c.sibling),c=t(c,m.children||[]),c.return=p,p=c;break e}else{a(p,c);break}else r(p,c);c=c.sibling}c=so(m,p.mode,v),c.return=p,p=c}return l(p);case er:return z=m._init,A(p,c,z(m._payload),v)}if(Pa(m))return S(p,c,m,v);if(Sa(m))return E(p,c,m,v);Fn(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(a(p,c.sibling),c=t(c,m),c.return=p,p=c):(a(p,c),c=io(m,p.mode,v),c.return=p,p=c),l(p)):a(p,c)}return A}var ca=bu(!0),Gu=bu(!1),tt=Sr(null),ot=null,Xr=null,Dl=null;function wl(){Dl=Xr=ot=null}function Nl(e){var r=tt.current;G(tt),e._currentValue=r}function Ho(e,r,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,n!==null&&(n.childLanes|=r)):n!==null&&(n.childLanes&r)!==r&&(n.childLanes|=r),e===a)break;e=e.return}}function oa(e,r){ot=e,Dl=Xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(me=!0),e.firstContext=null)}function ze(e){var r=e._currentValue;if(Dl!==e)if(e={context:e,memoizedValue:r,next:null},Xr===null){if(ot===null)throw Error(C(308));Xr=e,ot.dependencies={lanes:0,firstContext:e}}else Xr=Xr.next=e;return r}var Pr=null;function xl(e){Pr===null?Pr=[e]:Pr.push(e)}function Mu(e,r,a,n){var t=r.interleaved;return t===null?(a.next=a,xl(r)):(a.next=t.next,t.next=a),r.interleaved=a,We(e,n)}function We(e,r){e.lanes|=r;var a=e.alternate;for(a!==null&&(a.lanes|=r),a=e,e=e.return;e!==null;)e.childLanes|=r,a=e.alternate,a!==null&&(a.childLanes|=r),a=e,e=e.return;return a.tag===3?a.stateNode:null}var rr=!1;function jl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yu(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ue(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function dr(e,r,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,j&2){var t=n.pending;return t===null?r.next=r:(r.next=t.next,t.next=r),n.pending=r,We(e,a)}return t=n.interleaved,t===null?(r.next=r,xl(n)):(r.next=t.next,t.next=r),n.interleaved=r,We(e,a)}function Gn(e,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var n=r.lanes;n&=e.pendingLanes,a|=n,r.lanes=a,Sl(e,a)}}function _i(e,r){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var t=null,o=null;if(a=a.firstBaseUpdate,a!==null){do{var l={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};o===null?t=o=l:o=o.next=l,a=a.next}while(a!==null);o===null?t=o=r:o=o.next=r}else t=o=r;a={baseState:n.baseState,firstBaseUpdate:t,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=r:e.next=r,a.lastBaseUpdate=r}function lt(e,r,a,n){var t=e.updateQueue;rr=!1;var o=t.firstBaseUpdate,l=t.lastBaseUpdate,i=t.shared.pending;if(i!==null){t.shared.pending=null;var s=i,u=s.next;s.next=null,l===null?o=u:l.next=u,l=s;var h=e.alternate;h!==null&&(h=h.updateQueue,i=h.lastBaseUpdate,i!==l&&(i===null?h.firstBaseUpdate=u:i.next=u,h.lastBaseUpdate=s))}if(o!==null){var d=t.baseState;l=0,h=u=s=null,i=o;do{var y=i.lane,g=i.eventTime;if((n&y)===y){h!==null&&(h=h.next={eventTime:g,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var S=e,E=i;switch(y=r,g=a,E.tag){case 1:if(S=E.payload,typeof S=="function"){d=S.call(g,d,y);break e}d=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=E.payload,y=typeof S=="function"?S.call(g,d,y):S,y==null)break e;d=_({},d,y);break e;case 2:rr=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,y=t.effects,y===null?t.effects=[i]:y.push(i))}else g={eventTime:g,lane:y,tag:i.tag,payload:i.payload,callback:i.callback,next:null},h===null?(u=h=g,s=d):h=h.next=g,l|=y;if(i=i.next,i===null){if(i=t.shared.pending,i===null)break;y=i,i=y.next,y.next=null,t.lastBaseUpdate=y,t.shared.pending=null}}while(!0);if(h===null&&(s=d),t.baseState=s,t.firstBaseUpdate=u,t.lastBaseUpdate=h,r=t.shared.interleaved,r!==null){t=r;do l|=t.lane,t=t.next;while(t!==r)}else o===null&&(t.shared.lanes=0);qr|=l,e.lanes=l,e.memoizedState=d}}function Ii(e,r,a){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var n=e[r],t=n.callback;if(t!==null){if(n.callback=null,n=a,typeof t!="function")throw Error(C(191,t));t.call(n)}}}var cn={},He=Sr(cn),Ka=Sr(cn),Xa=Sr(cn);function kr(e){if(e===cn)throw Error(C(174));return e}function ql(e,r){switch(L(Xa,r),L(Ka,e),L(He,cn),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Co(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Co(r,e)}G(He),L(He,r)}function da(){G(He),G(Ka),G(Xa)}function Hu(e){kr(Xa.current);var r=kr(He.current),a=Co(r,e.type);r!==a&&(L(Ka,e),L(He,a))}function Ll(e){Ka.current===e&&(G(He),G(Ka))}var Y=Sr(0);function it(e){for(var r=e;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var ro=[];function bl(){for(var e=0;e<ro.length;e++)ro[e]._workInProgressVersionPrimary=null;ro.length=0}var Mn=Xe.ReactCurrentDispatcher,ao=Xe.ReactCurrentBatchConfig,jr=0,H=null,$=null,X=null,st=!1,La=!1,Za=0,$m=0;function ne(){throw Error(C(321))}function Gl(e,r){if(r===null)return!1;for(var a=0;a<r.length&&a<e.length;a++)if(!qe(e[a],r[a]))return!1;return!0}function Ml(e,r,a,n,t,o){if(jr=o,H=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Mn.current=e===null||e.memoizedState===null?Zm:ep,e=a(n,t),La){o=0;do{if(La=!1,Za=0,25<=o)throw Error(C(301));o+=1,X=$=null,r.updateQueue=null,Mn.current=rp,e=a(n,t)}while(La)}if(Mn.current=ut,r=$!==null&&$.next!==null,jr=0,X=$=H=null,st=!1,r)throw Error(C(300));return e}function Yl(){var e=Za!==0;return Za=0,e}function Ge(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?H.memoizedState=X=e:X=X.next=e,X}function Fe(){if($===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=$.next;var r=X===null?H.memoizedState:X.next;if(r!==null)X=r,$=e;else{if(e===null)throw Error(C(310));$=e,e={memoizedState:$.memoizedState,baseState:$.baseState,baseQueue:$.baseQueue,queue:$.queue,next:null},X===null?H.memoizedState=X=e:X=X.next=e}return X}function en(e,r){return typeof r=="function"?r(e):r}function no(e){var r=Fe(),a=r.queue;if(a===null)throw Error(C(311));a.lastRenderedReducer=e;var n=$,t=n.baseQueue,o=a.pending;if(o!==null){if(t!==null){var l=t.next;t.next=o.next,o.next=l}n.baseQueue=t=o,a.pending=null}if(t!==null){o=t.next,n=n.baseState;var i=l=null,s=null,u=o;do{var h=u.lane;if((jr&h)===h)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(i=s=d,l=n):s=s.next=d,H.lanes|=h,qr|=h}u=u.next}while(u!==null&&u!==o);s===null?l=n:s.next=i,qe(n,r.memoizedState)||(me=!0),r.memoizedState=n,r.baseState=l,r.baseQueue=s,a.lastRenderedState=n}if(e=a.interleaved,e!==null){t=e;do o=t.lane,H.lanes|=o,qr|=o,t=t.next;while(t!==e)}else t===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function to(e){var r=Fe(),a=r.queue;if(a===null)throw Error(C(311));a.lastRenderedReducer=e;var n=a.dispatch,t=a.pending,o=r.memoizedState;if(t!==null){a.pending=null;var l=t=t.next;do o=e(o,l.action),l=l.next;while(l!==t);qe(o,r.memoizedState)||(me=!0),r.memoizedState=o,r.baseQueue===null&&(r.baseState=o),a.lastRenderedState=o}return[o,n]}function _u(){}function Iu(e,r){var a=H,n=Fe(),t=r(),o=!qe(n.memoizedState,t);if(o&&(n.memoizedState=t,me=!0),n=n.queue,Hl(Bu.bind(null,a,n,e),[e]),n.getSnapshot!==r||o||X!==null&&X.memoizedState.tag&1){if(a.flags|=2048,rn(9,Ju.bind(null,a,n,t,r),void 0,null),Z===null)throw Error(C(349));jr&30||Vu(a,r,t)}return t}function Vu(e,r,a){e.flags|=16384,e={getSnapshot:r,value:a},r=H.updateQueue,r===null?(r={lastEffect:null,stores:null},H.updateQueue=r,r.stores=[e]):(a=r.stores,a===null?r.stores=[e]:a.push(e))}function Ju(e,r,a,n){r.value=a,r.getSnapshot=n,Uu(r)&&Qu(e)}function Bu(e,r,a){return a(function(){Uu(r)&&Qu(e)})}function Uu(e){var r=e.getSnapshot;e=e.value;try{var a=r();return!qe(e,a)}catch{return!0}}function Qu(e){var r=We(e,1);r!==null&&je(r,e,1,-1)}function Vi(e){var r=Ge();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:en,lastRenderedState:e},r.queue=e,e=e.dispatch=Xm.bind(null,H,e),[r.memoizedState,e]}function rn(e,r,a,n){return e={tag:e,create:r,destroy:a,deps:n,next:null},r=H.updateQueue,r===null?(r={lastEffect:null,stores:null},H.updateQueue=r,r.lastEffect=e.next=e):(a=r.lastEffect,a===null?r.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,r.lastEffect=e)),e}function $u(){return Fe().memoizedState}function Yn(e,r,a,n){var t=Ge();H.flags|=e,t.memoizedState=rn(1|r,a,void 0,n===void 0?null:n)}function Rt(e,r,a,n){var t=Fe();n=n===void 0?null:n;var o=void 0;if($!==null){var l=$.memoizedState;if(o=l.destroy,n!==null&&Gl(n,l.deps)){t.memoizedState=rn(r,a,o,n);return}}H.flags|=e,t.memoizedState=rn(1|r,a,o,n)}function Ji(e,r){return Yn(8390656,8,e,r)}function Hl(e,r){return Rt(2048,8,e,r)}function Wu(e,r){return Rt(4,2,e,r)}function Ku(e,r){return Rt(4,4,e,r)}function Xu(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Zu(e,r,a){return a=a!=null?a.concat([e]):null,Rt(4,4,Xu.bind(null,r,e),a)}function _l(){}function ec(e,r){var a=Fe();r=r===void 0?null:r;var n=a.memoizedState;return n!==null&&r!==null&&Gl(r,n[1])?n[0]:(a.memoizedState=[e,r],e)}function rc(e,r){var a=Fe();r=r===void 0?null:r;var n=a.memoizedState;return n!==null&&r!==null&&Gl(r,n[1])?n[0]:(e=e(),a.memoizedState=[e,r],e)}function ac(e,r,a){return jr&21?(qe(a,r)||(a=iu(),H.lanes|=a,qr|=a,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=a)}function Wm(e,r){var a=q;q=a!==0&&4>a?a:4,e(!0);var n=ao.transition;ao.transition={};try{e(!1),r()}finally{q=a,ao.transition=n}}function nc(){return Fe().memoizedState}function Km(e,r,a){var n=pr(e);if(a={lane:n,action:a,hasEagerState:!1,eagerState:null,next:null},tc(e))oc(r,a);else if(a=Mu(e,r,a,n),a!==null){var t=se();je(a,e,n,t),lc(a,r,n)}}function Xm(e,r,a){var n=pr(e),t={lane:n,action:a,hasEagerState:!1,eagerState:null,next:null};if(tc(e))oc(r,t);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=r.lastRenderedReducer,o!==null))try{var l=r.lastRenderedState,i=o(l,a);if(t.hasEagerState=!0,t.eagerState=i,qe(i,l)){var s=r.interleaved;s===null?(t.next=t,xl(r)):(t.next=s.next,s.next=t),r.interleaved=t;return}}catch{}finally{}a=Mu(e,r,t,n),a!==null&&(t=se(),je(a,e,n,t),lc(a,r,n))}}function tc(e){var r=e.alternate;return e===H||r!==null&&r===H}function oc(e,r){La=st=!0;var a=e.pending;a===null?r.next=r:(r.next=a.next,a.next=r),e.pending=r}function lc(e,r,a){if(a&4194240){var n=r.lanes;n&=e.pendingLanes,a|=n,r.lanes=a,Sl(e,a)}}var ut={readContext:ze,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},Zm={readContext:ze,useCallback:function(e,r){return Ge().memoizedState=[e,r===void 0?null:r],e},useContext:ze,useEffect:Ji,useImperativeHandle:function(e,r,a){return a=a!=null?a.concat([e]):null,Yn(4194308,4,Xu.bind(null,r,e),a)},useLayoutEffect:function(e,r){return Yn(4194308,4,e,r)},useInsertionEffect:function(e,r){return Yn(4,2,e,r)},useMemo:function(e,r){var a=Ge();return r=r===void 0?null:r,e=e(),a.memoizedState=[e,r],e},useReducer:function(e,r,a){var n=Ge();return r=a!==void 0?a(r):r,n.memoizedState=n.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=Km.bind(null,H,e),[n.memoizedState,e]},useRef:function(e){var r=Ge();return e={current:e},r.memoizedState=e},useState:Vi,useDebugValue:_l,useDeferredValue:function(e){return Ge().memoizedState=e},useTransition:function(){var e=Vi(!1),r=e[0];return e=Wm.bind(null,e[1]),Ge().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,a){var n=H,t=Ge();if(M){if(a===void 0)throw Error(C(407));a=a()}else{if(a=r(),Z===null)throw Error(C(349));jr&30||Vu(n,r,a)}t.memoizedState=a;var o={value:a,getSnapshot:r};return t.queue=o,Ji(Bu.bind(null,n,o,e),[e]),n.flags|=2048,rn(9,Ju.bind(null,n,o,a,r),void 0,null),a},useId:function(){var e=Ge(),r=Z.identifierPrefix;if(M){var a=Je,n=Ve;a=(n&~(1<<32-xe(n)-1)).toString(32)+a,r=":"+r+"R"+a,a=Za++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=$m++,r=":"+r+"r"+a.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},ep={readContext:ze,useCallback:ec,useContext:ze,useEffect:Hl,useImperativeHandle:Zu,useInsertionEffect:Wu,useLayoutEffect:Ku,useMemo:rc,useReducer:no,useRef:$u,useState:function(){return no(en)},useDebugValue:_l,useDeferredValue:function(e){var r=Fe();return ac(r,$.memoizedState,e)},useTransition:function(){var e=no(en)[0],r=Fe().memoizedState;return[e,r]},useMutableSource:_u,useSyncExternalStore:Iu,useId:nc,unstable_isNewReconciler:!1},rp={readContext:ze,useCallback:ec,useContext:ze,useEffect:Hl,useImperativeHandle:Zu,useInsertionEffect:Wu,useLayoutEffect:Ku,useMemo:rc,useReducer:to,useRef:$u,useState:function(){return to(en)},useDebugValue:_l,useDeferredValue:function(e){var r=Fe();return $===null?r.memoizedState=e:ac(r,$.memoizedState,e)},useTransition:function(){var e=to(en)[0],r=Fe().memoizedState;return[e,r]},useMutableSource:_u,useSyncExternalStore:Iu,useId:nc,unstable_isNewReconciler:!1};function De(e,r){if(e&&e.defaultProps){r=_({},r),e=e.defaultProps;for(var a in e)r[a]===void 0&&(r[a]=e[a]);return r}return r}function _o(e,r,a,n){r=e.memoizedState,a=a(n,r),a=a==null?r:_({},r,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var At={isMounted:function(e){return(e=e._reactInternals)?Gr(e)===e:!1},enqueueSetState:function(e,r,a){e=e._reactInternals;var n=se(),t=pr(e),o=Ue(n,t);o.payload=r,a!=null&&(o.callback=a),r=dr(e,o,t),r!==null&&(je(r,e,t,n),Gn(r,e,t))},enqueueReplaceState:function(e,r,a){e=e._reactInternals;var n=se(),t=pr(e),o=Ue(n,t);o.tag=1,o.payload=r,a!=null&&(o.callback=a),r=dr(e,o,t),r!==null&&(je(r,e,t,n),Gn(r,e,t))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var a=se(),n=pr(e),t=Ue(a,n);t.tag=2,r!=null&&(t.callback=r),r=dr(e,t,n),r!==null&&(je(r,e,n,a),Gn(r,e,n))}};function Bi(e,r,a,n,t,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,l):r.prototype&&r.prototype.isPureReactComponent?!Ua(a,n)||!Ua(t,o):!0}function ic(e,r,a){var n=!1,t=vr,o=r.contextType;return typeof o=="object"&&o!==null?o=ze(o):(t=fe(r)?Nr:le.current,n=r.contextTypes,o=(n=n!=null)?sa(e,t):vr),r=new r(a,o),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=At,e.stateNode=r,r._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),r}function Ui(e,r,a,n){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,n),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,n),r.state!==e&&At.enqueueReplaceState(r,r.state,null)}function Io(e,r,a,n){var t=e.stateNode;t.props=a,t.state=e.memoizedState,t.refs={},jl(e);var o=r.contextType;typeof o=="object"&&o!==null?t.context=ze(o):(o=fe(r)?Nr:le.current,t.context=sa(e,o)),t.state=e.memoizedState,o=r.getDerivedStateFromProps,typeof o=="function"&&(_o(e,r,o,a),t.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof t.getSnapshotBeforeUpdate=="function"||typeof t.UNSAFE_componentWillMount!="function"&&typeof t.componentWillMount!="function"||(r=t.state,typeof t.componentWillMount=="function"&&t.componentWillMount(),typeof t.UNSAFE_componentWillMount=="function"&&t.UNSAFE_componentWillMount(),r!==t.state&&At.enqueueReplaceState(t,t.state,null),lt(e,a,t,n),t.state=e.memoizedState),typeof t.componentDidMount=="function"&&(e.flags|=4194308)}function ma(e,r){try{var a="",n=r;do a+=kd(n),n=n.return;while(n);var t=a}catch(o){t=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:r,stack:t,digest:null}}function oo(e,r,a){return{value:e,source:null,stack:a??null,digest:r??null}}function Vo(e,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var ap=typeof WeakMap=="function"?WeakMap:Map;function sc(e,r,a){a=Ue(-1,a),a.tag=3,a.payload={element:null};var n=r.value;return a.callback=function(){dt||(dt=!0,el=n),Vo(e,r)},a}function uc(e,r,a){a=Ue(-1,a),a.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var t=r.value;a.payload=function(){return n(t)},a.callback=function(){Vo(e,r)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(a.callback=function(){Vo(e,r),typeof n!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var l=r.stack;this.componentDidCatch(r.value,{componentStack:l!==null?l:""})}),a}function Qi(e,r,a){var n=e.pingCache;if(n===null){n=e.pingCache=new ap;var t=new Set;n.set(r,t)}else t=n.get(r),t===void 0&&(t=new Set,n.set(r,t));t.has(a)||(t.add(a),e=hp.bind(null,e,r,a),r.then(e,e))}function $i(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function Wi(e,r,a,n,t){return e.mode&1?(e.flags|=65536,e.lanes=t,e):(e===r?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=Ue(-1,1),r.tag=2,dr(a,r,1))),a.lanes|=1),e)}var np=Xe.ReactCurrentOwner,me=!1;function ie(e,r,a,n){r.child=e===null?Gu(r,null,a,n):ca(r,e.child,a,n)}function Ki(e,r,a,n,t){a=a.render;var o=r.ref;return oa(r,t),n=Ml(e,r,a,n,o,t),a=Yl(),e!==null&&!me?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~t,Ke(e,r,t)):(M&&a&&Fl(r),r.flags|=1,ie(e,r,n,t),r.child)}function Xi(e,r,a,n,t){if(e===null){var o=a.type;return typeof o=="function"&&!Wl(o)&&o.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=o,cc(e,r,o,n,t)):(e=Vn(a.type,null,n,r,r.mode,t),e.ref=r.ref,e.return=r,r.child=e)}if(o=e.child,!(e.lanes&t)){var l=o.memoizedProps;if(a=a.compare,a=a!==null?a:Ua,a(l,n)&&e.ref===r.ref)return Ke(e,r,t)}return r.flags|=1,e=fr(o,n),e.ref=r.ref,e.return=r,r.child=e}function cc(e,r,a,n,t){if(e!==null){var o=e.memoizedProps;if(Ua(o,n)&&e.ref===r.ref)if(me=!1,r.pendingProps=n=o,(e.lanes&t)!==0)e.flags&131072&&(me=!0);else return r.lanes=e.lanes,Ke(e,r,t)}return Jo(e,r,a,n,t)}function dc(e,r,a){var n=r.pendingProps,t=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},L(ea,he),he|=a;else{if(!(a&1073741824))return e=o!==null?o.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,L(ea,he),he|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:a,L(ea,he),he|=n}else o!==null?(n=o.baseLanes|a,r.memoizedState=null):n=a,L(ea,he),he|=n;return ie(e,r,t,a),r.child}function mc(e,r){var a=r.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function Jo(e,r,a,n,t){var o=fe(a)?Nr:le.current;return o=sa(r,o),oa(r,t),a=Ml(e,r,a,n,o,t),n=Yl(),e!==null&&!me?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~t,Ke(e,r,t)):(M&&n&&Fl(r),r.flags|=1,ie(e,r,a,t),r.child)}function Zi(e,r,a,n,t){if(fe(a)){var o=!0;rt(r)}else o=!1;if(oa(r,t),r.stateNode===null)Hn(e,r),ic(r,a,n),Io(r,a,n,t),n=!0;else if(e===null){var l=r.stateNode,i=r.memoizedProps;l.props=i;var s=l.context,u=a.contextType;typeof u=="object"&&u!==null?u=ze(u):(u=fe(a)?Nr:le.current,u=sa(r,u));var h=a.getDerivedStateFromProps,d=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==n||s!==u)&&Ui(r,l,n,u),rr=!1;var y=r.memoizedState;l.state=y,lt(r,n,l,t),s=r.memoizedState,i!==n||y!==s||pe.current||rr?(typeof h=="function"&&(_o(r,a,h,n),s=r.memoizedState),(i=rr||Bi(r,a,i,n,y,s,u))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(r.flags|=4194308)):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=n,r.memoizedState=s),l.props=n,l.state=s,l.context=u,n=i):(typeof l.componentDidMount=="function"&&(r.flags|=4194308),n=!1)}else{l=r.stateNode,Yu(e,r),i=r.memoizedProps,u=r.type===r.elementType?i:De(r.type,i),l.props=u,d=r.pendingProps,y=l.context,s=a.contextType,typeof s=="object"&&s!==null?s=ze(s):(s=fe(a)?Nr:le.current,s=sa(r,s));var g=a.getDerivedStateFromProps;(h=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==d||y!==s)&&Ui(r,l,n,s),rr=!1,y=r.memoizedState,l.state=y,lt(r,n,l,t);var S=r.memoizedState;i!==d||y!==S||pe.current||rr?(typeof g=="function"&&(_o(r,a,g,n),S=r.memoizedState),(u=rr||Bi(r,a,u,n,y,S,s)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,S,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,S,s)),typeof l.componentDidUpdate=="function"&&(r.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(r.flags|=1024),r.memoizedProps=n,r.memoizedState=S),l.props=n,l.state=S,l.context=s,n=u):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(r.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&y===e.memoizedState||(r.flags|=1024),n=!1)}return Bo(e,r,a,n,o,t)}function Bo(e,r,a,n,t,o){mc(e,r);var l=(r.flags&128)!==0;if(!n&&!l)return t&&Gi(r,a,!1),Ke(e,r,o);n=r.stateNode,np.current=r;var i=l&&typeof a.getDerivedStateFromError!="function"?null:n.render();return r.flags|=1,e!==null&&l?(r.child=ca(r,e.child,null,o),r.child=ca(r,null,i,o)):ie(e,r,i,o),r.memoizedState=n.state,t&&Gi(r,a,!0),r.child}function pc(e){var r=e.stateNode;r.pendingContext?bi(e,r.pendingContext,r.pendingContext!==r.context):r.context&&bi(e,r.context,!1),ql(e,r.containerInfo)}function es(e,r,a,n,t){return ua(),kl(t),r.flags|=256,ie(e,r,a,n),r.child}var Uo={dehydrated:null,treeContext:null,retryLane:0};function Qo(e){return{baseLanes:e,cachePool:null,transitions:null}}function fc(e,r,a){var n=r.pendingProps,t=Y.current,o=!1,l=(r.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(t&2)!==0),i?(o=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(t|=1),L(Y,t&1),e===null)return Yo(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(l=n.children,e=n.fallback,o?(n=r.mode,o=r.child,l={mode:"hidden",children:l},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Ft(l,n,0,null),e=wr(e,n,a,null),o.return=r,e.return=r,o.sibling=e,r.child=o,r.child.memoizedState=Qo(a),r.memoizedState=Uo,e):Il(r,l));if(t=e.memoizedState,t!==null&&(i=t.dehydrated,i!==null))return tp(e,r,l,n,i,t,a);if(o){o=n.fallback,l=r.mode,t=e.child,i=t.sibling;var s={mode:"hidden",children:n.children};return!(l&1)&&r.child!==t?(n=r.child,n.childLanes=0,n.pendingProps=s,r.deletions=null):(n=fr(t,s),n.subtreeFlags=t.subtreeFlags&14680064),i!==null?o=fr(i,o):(o=wr(o,l,a,null),o.flags|=2),o.return=r,n.return=r,n.sibling=o,r.child=n,n=o,o=r.child,l=e.child.memoizedState,l=l===null?Qo(a):{baseLanes:l.baseLanes|a,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~a,r.memoizedState=Uo,n}return o=e.child,e=o.sibling,n=fr(o,{mode:"visible",children:n.children}),!(r.mode&1)&&(n.lanes=a),n.return=r,n.sibling=null,e!==null&&(a=r.deletions,a===null?(r.deletions=[e],r.flags|=16):a.push(e)),r.child=n,r.memoizedState=null,n}function Il(e,r){return r=Ft({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function Pn(e,r,a,n){return n!==null&&kl(n),ca(r,e.child,null,a),e=Il(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function tp(e,r,a,n,t,o,l){if(a)return r.flags&256?(r.flags&=-257,n=oo(Error(C(422))),Pn(e,r,l,n)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(o=n.fallback,t=r.mode,n=Ft({mode:"visible",children:n.children},t,0,null),o=wr(o,t,l,null),o.flags|=2,n.return=r,o.return=r,n.sibling=o,r.child=n,r.mode&1&&ca(r,e.child,null,l),r.child.memoizedState=Qo(l),r.memoizedState=Uo,o);if(!(r.mode&1))return Pn(e,r,l,null);if(t.data==="$!"){if(n=t.nextSibling&&t.nextSibling.dataset,n)var i=n.dgst;return n=i,o=Error(C(419)),n=oo(o,n,void 0),Pn(e,r,l,n)}if(i=(l&e.childLanes)!==0,me||i){if(n=Z,n!==null){switch(l&-l){case 4:t=2;break;case 16:t=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:t=32;break;case 536870912:t=268435456;break;default:t=0}t=t&(n.suspendedLanes|l)?0:t,t!==0&&t!==o.retryLane&&(o.retryLane=t,We(e,t),je(n,e,t,-1))}return $l(),n=oo(Error(C(421))),Pn(e,r,l,n)}return t.data==="$?"?(r.flags|=128,r.child=e.child,r=vp.bind(null,e),t._reactRetry=r,null):(e=o.treeContext,ve=cr(t.nextSibling),ge=r,M=!0,Ne=null,e!==null&&(Oe[Re++]=Ve,Oe[Re++]=Je,Oe[Re++]=xr,Ve=e.id,Je=e.overflow,xr=r),r=Il(r,n.children),r.flags|=4096,r)}function rs(e,r,a){e.lanes|=r;var n=e.alternate;n!==null&&(n.lanes|=r),Ho(e.return,r,a)}function lo(e,r,a,n,t){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:t}:(o.isBackwards=r,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=t)}function yc(e,r,a){var n=r.pendingProps,t=n.revealOrder,o=n.tail;if(ie(e,r,n.children,a),n=Y.current,n&2)n=n&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rs(e,a,r);else if(e.tag===19)rs(e,a,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(L(Y,n),!(r.mode&1))r.memoizedState=null;else switch(t){case"forwards":for(a=r.child,t=null;a!==null;)e=a.alternate,e!==null&&it(e)===null&&(t=a),a=a.sibling;a=t,a===null?(t=r.child,r.child=null):(t=a.sibling,a.sibling=null),lo(r,!1,t,a,o);break;case"backwards":for(a=null,t=r.child,r.child=null;t!==null;){if(e=t.alternate,e!==null&&it(e)===null){r.child=t;break}e=t.sibling,t.sibling=a,a=t,t=e}lo(r,!0,a,null,o);break;case"together":lo(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Hn(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Ke(e,r,a){if(e!==null&&(r.dependencies=e.dependencies),qr|=r.lanes,!(a&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(C(153));if(r.child!==null){for(e=r.child,a=fr(e,e.pendingProps),r.child=a,a.return=r;e.sibling!==null;)e=e.sibling,a=a.sibling=fr(e,e.pendingProps),a.return=r;a.sibling=null}return r.child}function op(e,r,a){switch(r.tag){case 3:pc(r),ua();break;case 5:Hu(r);break;case 1:fe(r.type)&&rt(r);break;case 4:ql(r,r.stateNode.containerInfo);break;case 10:var n=r.type._context,t=r.memoizedProps.value;L(tt,n._currentValue),n._currentValue=t;break;case 13:if(n=r.memoizedState,n!==null)return n.dehydrated!==null?(L(Y,Y.current&1),r.flags|=128,null):a&r.child.childLanes?fc(e,r,a):(L(Y,Y.current&1),e=Ke(e,r,a),e!==null?e.sibling:null);L(Y,Y.current&1);break;case 19:if(n=(a&r.childLanes)!==0,e.flags&128){if(n)return yc(e,r,a);r.flags|=128}if(t=r.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),L(Y,Y.current),n)break;return null;case 22:case 23:return r.lanes=0,dc(e,r,a)}return Ke(e,r,a)}var hc,$o,vc,gc;hc=function(e,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};$o=function(){};vc=function(e,r,a,n){var t=e.memoizedProps;if(t!==n){e=r.stateNode,kr(He.current);var o=null;switch(a){case"input":t=vo(e,t),n=vo(e,n),o=[];break;case"select":t=_({},t,{value:void 0}),n=_({},n,{value:void 0}),o=[];break;case"textarea":t=Eo(e,t),n=Eo(e,n),o=[];break;default:typeof t.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Zn)}Oo(a,n);var l;a=null;for(u in t)if(!n.hasOwnProperty(u)&&t.hasOwnProperty(u)&&t[u]!=null)if(u==="style"){var i=t[u];for(l in i)i.hasOwnProperty(l)&&(a||(a={}),a[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ya.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var s=n[u];if(i=t!=null?t[u]:void 0,n.hasOwnProperty(u)&&s!==i&&(s!=null||i!=null))if(u==="style")if(i){for(l in i)!i.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(a||(a={}),a[l]="");for(l in s)s.hasOwnProperty(l)&&i[l]!==s[l]&&(a||(a={}),a[l]=s[l])}else a||(o||(o=[]),o.push(u,a)),a=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,i=i?i.__html:void 0,s!=null&&i!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ya.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&b("scroll",e),o||i===s||(o=[])):(o=o||[]).push(u,s))}a&&(o=o||[]).push("style",a);var u=o;(r.updateQueue=u)&&(r.flags|=4)}};gc=function(e,r,a,n){a!==n&&(r.flags|=4)};function Ta(e,r){if(!M)switch(e.tailMode){case"hidden":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function te(e){var r=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(r)for(var t=e.child;t!==null;)a|=t.lanes|t.childLanes,n|=t.subtreeFlags&14680064,n|=t.flags&14680064,t.return=e,t=t.sibling;else for(t=e.child;t!==null;)a|=t.lanes|t.childLanes,n|=t.subtreeFlags,n|=t.flags,t.return=e,t=t.sibling;return e.subtreeFlags|=n,e.childLanes=a,r}function lp(e,r,a){var n=r.pendingProps;switch(Pl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(r),null;case 1:return fe(r.type)&&et(),te(r),null;case 3:return n=r.stateNode,da(),G(pe),G(le),bl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(zn(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Ne!==null&&(nl(Ne),Ne=null))),$o(e,r),te(r),null;case 5:Ll(r);var t=kr(Xa.current);if(a=r.type,e!==null&&r.stateNode!=null)vc(e,r,a,n,t),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!n){if(r.stateNode===null)throw Error(C(166));return te(r),null}if(e=kr(He.current),zn(r)){n=r.stateNode,a=r.type;var o=r.memoizedProps;switch(n[Me]=r,n[Wa]=o,e=(r.mode&1)!==0,a){case"dialog":b("cancel",n),b("close",n);break;case"iframe":case"object":case"embed":b("load",n);break;case"video":case"audio":for(t=0;t<Da.length;t++)b(Da[t],n);break;case"source":b("error",n);break;case"img":case"image":case"link":b("error",n),b("load",n);break;case"details":b("toggle",n);break;case"input":ci(n,o),b("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},b("invalid",n);break;case"textarea":mi(n,o),b("invalid",n)}Oo(a,o),t=null;for(var l in o)if(o.hasOwnProperty(l)){var i=o[l];l==="children"?typeof i=="string"?n.textContent!==i&&(o.suppressHydrationWarning!==!0&&Tn(n.textContent,i,e),t=["children",i]):typeof i=="number"&&n.textContent!==""+i&&(o.suppressHydrationWarning!==!0&&Tn(n.textContent,i,e),t=["children",""+i]):Ya.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&b("scroll",n)}switch(a){case"input":vn(n),di(n,o,!0);break;case"textarea":vn(n),pi(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Zn)}n=t,r.updateQueue=n,n!==null&&(r.flags|=4)}else{l=t.nodeType===9?t:t.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bs(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=l.createElement(a,{is:n.is}):(e=l.createElement(a),a==="select"&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,a),e[Me]=r,e[Wa]=n,hc(e,r,!1,!1),r.stateNode=e;e:{switch(l=Ro(a,n),a){case"dialog":b("cancel",e),b("close",e),t=n;break;case"iframe":case"object":case"embed":b("load",e),t=n;break;case"video":case"audio":for(t=0;t<Da.length;t++)b(Da[t],e);t=n;break;case"source":b("error",e),t=n;break;case"img":case"image":case"link":b("error",e),b("load",e),t=n;break;case"details":b("toggle",e),t=n;break;case"input":ci(e,n),t=vo(e,n),b("invalid",e);break;case"option":t=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},t=_({},n,{value:void 0}),b("invalid",e);break;case"textarea":mi(e,n),t=Eo(e,n),b("invalid",e);break;default:t=n}Oo(a,t),i=t;for(o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="style"?$s(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Us(e,s)):o==="children"?typeof s=="string"?(a!=="textarea"||s!=="")&&Ha(e,s):typeof s=="number"&&Ha(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ya.hasOwnProperty(o)?s!=null&&o==="onScroll"&&b("scroll",e):s!=null&&pl(e,o,s,l))}switch(a){case"input":vn(e),di(e,n,!1);break;case"textarea":vn(e),pi(e);break;case"option":n.value!=null&&e.setAttribute("value",""+hr(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?ra(e,!!n.multiple,o,!1):n.defaultValue!=null&&ra(e,!!n.multiple,n.defaultValue,!0);break;default:typeof t.onClick=="function"&&(e.onclick=Zn)}switch(a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return te(r),null;case 6:if(e&&r.stateNode!=null)gc(e,r,e.memoizedProps,n);else{if(typeof n!="string"&&r.stateNode===null)throw Error(C(166));if(a=kr(Xa.current),kr(He.current),zn(r)){if(n=r.stateNode,a=r.memoizedProps,n[Me]=r,(o=n.nodeValue!==a)&&(e=ge,e!==null))switch(e.tag){case 3:Tn(n.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Tn(n.nodeValue,a,(e.mode&1)!==0)}o&&(r.flags|=4)}else n=(a.nodeType===9?a:a.ownerDocument).createTextNode(n),n[Me]=r,r.stateNode=n}return te(r),null;case 13:if(G(Y),n=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(M&&ve!==null&&r.mode&1&&!(r.flags&128))Lu(),ua(),r.flags|=98560,o=!1;else if(o=zn(r),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=r.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[Me]=r}else ua(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;te(r),o=!1}else Ne!==null&&(nl(Ne),Ne=null),o=!0;if(!o)return r.flags&65536?r:null}return r.flags&128?(r.lanes=a,r):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(r.child.flags|=8192,r.mode&1&&(e===null||Y.current&1?W===0&&(W=3):$l())),r.updateQueue!==null&&(r.flags|=4),te(r),null);case 4:return da(),$o(e,r),e===null&&Qa(r.stateNode.containerInfo),te(r),null;case 10:return Nl(r.type._context),te(r),null;case 17:return fe(r.type)&&et(),te(r),null;case 19:if(G(Y),o=r.memoizedState,o===null)return te(r),null;if(n=(r.flags&128)!==0,l=o.rendering,l===null)if(n)Ta(o,!1);else{if(W!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(l=it(e),l!==null){for(r.flags|=128,Ta(o,!1),n=l.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),r.subtreeFlags=0,n=a,a=r.child;a!==null;)o=a,e=n,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return L(Y,Y.current&1|2),r.child}e=e.sibling}o.tail!==null&&B()>pa&&(r.flags|=128,n=!0,Ta(o,!1),r.lanes=4194304)}else{if(!n)if(e=it(l),e!==null){if(r.flags|=128,n=!0,a=e.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),Ta(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!M)return te(r),null}else 2*B()-o.renderingStartTime>pa&&a!==1073741824&&(r.flags|=128,n=!0,Ta(o,!1),r.lanes=4194304);o.isBackwards?(l.sibling=r.child,r.child=l):(a=o.last,a!==null?a.sibling=l:r.child=l,o.last=l)}return o.tail!==null?(r=o.tail,o.rendering=r,o.tail=r.sibling,o.renderingStartTime=B(),r.sibling=null,a=Y.current,L(Y,n?a&1|2:a&1),r):(te(r),null);case 22:case 23:return Ql(),n=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(r.flags|=8192),n&&r.mode&1?he&1073741824&&(te(r),r.subtreeFlags&6&&(r.flags|=8192)):te(r),null;case 24:return null;case 25:return null}throw Error(C(156,r.tag))}function ip(e,r){switch(Pl(r),r.tag){case 1:return fe(r.type)&&et(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return da(),G(pe),G(le),bl(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return Ll(r),null;case 13:if(G(Y),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(C(340));ua()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return G(Y),null;case 4:return da(),null;case 10:return Nl(r.type._context),null;case 22:case 23:return Ql(),null;case 24:return null;default:return null}}var kn=!1,oe=!1,sp=typeof WeakSet=="function"?WeakSet:Set,T=null;function Zr(e,r){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(n){I(e,r,n)}else a.current=null}function Wo(e,r,a){try{a()}catch(n){I(e,r,n)}}var as=!1;function up(e,r){if(xo=Wn,e=Ru(),zl(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var t=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{a.nodeType,o.nodeType}catch{a=null;break e}var l=0,i=-1,s=-1,u=0,h=0,d=e,y=null;r:for(;;){for(var g;d!==a||t!==0&&d.nodeType!==3||(i=l+t),d!==o||n!==0&&d.nodeType!==3||(s=l+n),d.nodeType===3&&(l+=d.nodeValue.length),(g=d.firstChild)!==null;)y=d,d=g;for(;;){if(d===e)break r;if(y===a&&++u===t&&(i=l),y===o&&++h===n&&(s=l),(g=d.nextSibling)!==null)break;d=y,y=d.parentNode}d=g}a=i===-1||s===-1?null:{start:i,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(jo={focusedElem:e,selectionRange:a},Wn=!1,T=r;T!==null;)if(r=T,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,T=e;else for(;T!==null;){r=T;try{var S=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var E=S.memoizedProps,A=S.memoizedState,p=r.stateNode,c=p.getSnapshotBeforeUpdate(r.elementType===r.type?E:De(r.type,E),A);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=r.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(v){I(r,r.return,v)}if(e=r.sibling,e!==null){e.return=r.return,T=e;break}T=r.return}return S=as,as=!1,S}function ba(e,r,a){var n=r.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var o=t.destroy;t.destroy=void 0,o!==void 0&&Wo(r,a,o)}t=t.next}while(t!==n)}}function Tt(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var n=a.create;a.destroy=n()}a=a.next}while(a!==r)}}function Ko(e){var r=e.ref;if(r!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof r=="function"?r(e):r.current=e}}function Sc(e){var r=e.alternate;r!==null&&(e.alternate=null,Sc(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Me],delete r[Wa],delete r[bo],delete r[Jm],delete r[Bm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ec(e){return e.tag===5||e.tag===3||e.tag===4}function ns(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xo(e,r,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(e,r):a.insertBefore(e,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(e,a)):(r=a,r.appendChild(e)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=Zn));else if(n!==4&&(e=e.child,e!==null))for(Xo(e,r,a),e=e.sibling;e!==null;)Xo(e,r,a),e=e.sibling}function Zo(e,r,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?a.insertBefore(e,r):a.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Zo(e,r,a),e=e.sibling;e!==null;)Zo(e,r,a),e=e.sibling}var ee=null,we=!1;function Ze(e,r,a){for(a=a.child;a!==null;)Cc(e,r,a),a=a.sibling}function Cc(e,r,a){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(vt,a)}catch{}switch(a.tag){case 5:oe||Zr(a,r);case 6:var n=ee,t=we;ee=null,Ze(e,r,a),ee=n,we=t,ee!==null&&(we?(e=ee,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):ee.removeChild(a.stateNode));break;case 18:ee!==null&&(we?(e=ee,a=a.stateNode,e.nodeType===8?Zt(e.parentNode,a):e.nodeType===1&&Zt(e,a),Ja(e)):Zt(ee,a.stateNode));break;case 4:n=ee,t=we,ee=a.stateNode.containerInfo,we=!0,Ze(e,r,a),ee=n,we=t;break;case 0:case 11:case 14:case 15:if(!oe&&(n=a.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){t=n=n.next;do{var o=t,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Wo(a,r,l),t=t.next}while(t!==n)}Ze(e,r,a);break;case 1:if(!oe&&(Zr(a,r),n=a.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=a.memoizedProps,n.state=a.memoizedState,n.componentWillUnmount()}catch(i){I(a,r,i)}Ze(e,r,a);break;case 21:Ze(e,r,a);break;case 22:a.mode&1?(oe=(n=oe)||a.memoizedState!==null,Ze(e,r,a),oe=n):Ze(e,r,a);break;default:Ze(e,r,a)}}function ts(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new sp),r.forEach(function(n){var t=gp.bind(null,e,n);a.has(n)||(a.add(n),n.then(t,t))})}}function ke(e,r){var a=r.deletions;if(a!==null)for(var n=0;n<a.length;n++){var t=a[n];try{var o=e,l=r,i=l;e:for(;i!==null;){switch(i.tag){case 5:ee=i.stateNode,we=!1;break e;case 3:ee=i.stateNode.containerInfo,we=!0;break e;case 4:ee=i.stateNode.containerInfo,we=!0;break e}i=i.return}if(ee===null)throw Error(C(160));Cc(o,l,t),ee=null,we=!1;var s=t.alternate;s!==null&&(s.return=null),t.return=null}catch(u){I(t,r,u)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Oc(r,e),r=r.sibling}function Oc(e,r){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ke(r,e),be(e),n&4){try{ba(3,e,e.return),Tt(3,e)}catch(E){I(e,e.return,E)}try{ba(5,e,e.return)}catch(E){I(e,e.return,E)}}break;case 1:ke(r,e),be(e),n&512&&a!==null&&Zr(a,a.return);break;case 5:if(ke(r,e),be(e),n&512&&a!==null&&Zr(a,a.return),e.flags&32){var t=e.stateNode;try{Ha(t,"")}catch(E){I(e,e.return,E)}}if(n&4&&(t=e.stateNode,t!=null)){var o=e.memoizedProps,l=a!==null?a.memoizedProps:o,i=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{i==="input"&&o.type==="radio"&&o.name!=null&&Vs(t,o),Ro(i,l);var u=Ro(i,o);for(l=0;l<s.length;l+=2){var h=s[l],d=s[l+1];h==="style"?$s(t,d):h==="dangerouslySetInnerHTML"?Us(t,d):h==="children"?Ha(t,d):pl(t,h,d,u)}switch(i){case"input":go(t,o);break;case"textarea":Js(t,o);break;case"select":var y=t._wrapperState.wasMultiple;t._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?ra(t,!!o.multiple,g,!1):y!==!!o.multiple&&(o.defaultValue!=null?ra(t,!!o.multiple,o.defaultValue,!0):ra(t,!!o.multiple,o.multiple?[]:"",!1))}t[Wa]=o}catch(E){I(e,e.return,E)}}break;case 6:if(ke(r,e),be(e),n&4){if(e.stateNode===null)throw Error(C(162));t=e.stateNode,o=e.memoizedProps;try{t.nodeValue=o}catch(E){I(e,e.return,E)}}break;case 3:if(ke(r,e),be(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Ja(r.containerInfo)}catch(E){I(e,e.return,E)}break;case 4:ke(r,e),be(e);break;case 13:ke(r,e),be(e),t=e.child,t.flags&8192&&(o=t.memoizedState!==null,t.stateNode.isHidden=o,!o||t.alternate!==null&&t.alternate.memoizedState!==null||(Bl=B())),n&4&&ts(e);break;case 22:if(h=a!==null&&a.memoizedState!==null,e.mode&1?(oe=(u=oe)||h,ke(r,e),oe=u):ke(r,e),be(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(T=e,h=e.child;h!==null;){for(d=T=h;T!==null;){switch(y=T,g=y.child,y.tag){case 0:case 11:case 14:case 15:ba(4,y,y.return);break;case 1:Zr(y,y.return);var S=y.stateNode;if(typeof S.componentWillUnmount=="function"){n=y,a=y.return;try{r=n,S.props=r.memoizedProps,S.state=r.memoizedState,S.componentWillUnmount()}catch(E){I(n,a,E)}}break;case 5:Zr(y,y.return);break;case 22:if(y.memoizedState!==null){ls(d);continue}}g!==null?(g.return=y,T=g):ls(d)}h=h.sibling}e:for(h=null,d=e;;){if(d.tag===5){if(h===null){h=d;try{t=d.stateNode,u?(o=t.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(i=d.stateNode,s=d.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,i.style.display=Qs("display",l))}catch(E){I(e,e.return,E)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(E){I(e,e.return,E)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ke(r,e),be(e),n&4&&ts(e);break;case 21:break;default:ke(r,e),be(e)}}function be(e){var r=e.flags;if(r&2){try{e:{for(var a=e.return;a!==null;){if(Ec(a)){var n=a;break e}a=a.return}throw Error(C(160))}switch(n.tag){case 5:var t=n.stateNode;n.flags&32&&(Ha(t,""),n.flags&=-33);var o=ns(e);Zo(e,o,t);break;case 3:case 4:var l=n.stateNode.containerInfo,i=ns(e);Xo(e,i,l);break;default:throw Error(C(161))}}catch(s){I(e,e.return,s)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function cp(e,r,a){T=e,Rc(e)}function Rc(e,r,a){for(var n=(e.mode&1)!==0;T!==null;){var t=T,o=t.child;if(t.tag===22&&n){var l=t.memoizedState!==null||kn;if(!l){var i=t.alternate,s=i!==null&&i.memoizedState!==null||oe;i=kn;var u=oe;if(kn=l,(oe=s)&&!u)for(T=t;T!==null;)l=T,s=l.child,l.tag===22&&l.memoizedState!==null?is(t):s!==null?(s.return=l,T=s):is(t);for(;o!==null;)T=o,Rc(o),o=o.sibling;T=t,kn=i,oe=u}os(e)}else t.subtreeFlags&8772&&o!==null?(o.return=t,T=o):os(e)}}function os(e){for(;T!==null;){var r=T;if(r.flags&8772){var a=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:oe||Tt(5,r);break;case 1:var n=r.stateNode;if(r.flags&4&&!oe)if(a===null)n.componentDidMount();else{var t=r.elementType===r.type?a.memoizedProps:De(r.type,a.memoizedProps);n.componentDidUpdate(t,a.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=r.updateQueue;o!==null&&Ii(r,o,n);break;case 3:var l=r.updateQueue;if(l!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}Ii(r,l,a)}break;case 5:var i=r.stateNode;if(a===null&&r.flags&4){a=i;var s=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&a.focus();break;case"img":s.src&&(a.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var u=r.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Ja(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}oe||r.flags&512&&Ko(r)}catch(y){I(r,r.return,y)}}if(r===e){T=null;break}if(a=r.sibling,a!==null){a.return=r.return,T=a;break}T=r.return}}function ls(e){for(;T!==null;){var r=T;if(r===e){T=null;break}var a=r.sibling;if(a!==null){a.return=r.return,T=a;break}T=r.return}}function is(e){for(;T!==null;){var r=T;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{Tt(4,r)}catch(s){I(r,a,s)}break;case 1:var n=r.stateNode;if(typeof n.componentDidMount=="function"){var t=r.return;try{n.componentDidMount()}catch(s){I(r,t,s)}}var o=r.return;try{Ko(r)}catch(s){I(r,o,s)}break;case 5:var l=r.return;try{Ko(r)}catch(s){I(r,l,s)}}}catch(s){I(r,r.return,s)}if(r===e){T=null;break}var i=r.sibling;if(i!==null){i.return=r.return,T=i;break}T=r.return}}var dp=Math.ceil,ct=Xe.ReactCurrentDispatcher,Vl=Xe.ReactCurrentOwner,Te=Xe.ReactCurrentBatchConfig,j=0,Z=null,U=null,re=0,he=0,ea=Sr(0),W=0,an=null,qr=0,zt=0,Jl=0,Ga=null,de=null,Bl=0,pa=1/0,_e=null,dt=!1,el=null,mr=null,Dn=!1,or=null,mt=0,Ma=0,rl=null,_n=-1,In=0;function se(){return j&6?B():_n!==-1?_n:_n=B()}function pr(e){return e.mode&1?j&2&&re!==0?re&-re:Qm.transition!==null?(In===0&&(In=iu()),In):(e=q,e!==0||(e=window.event,e=e===void 0?16:fu(e.type)),e):1}function je(e,r,a,n){if(50<Ma)throw Ma=0,rl=null,Error(C(185));ln(e,a,n),(!(j&2)||e!==Z)&&(e===Z&&(!(j&2)&&(zt|=a),W===4&&nr(e,re)),ye(e,n),a===1&&j===0&&!(r.mode&1)&&(pa=B()+500,Ot&&Er()))}function ye(e,r){var a=e.callbackNode;Qd(e,r);var n=$n(e,e===Z?re:0);if(n===0)a!==null&&hi(a),e.callbackNode=null,e.callbackPriority=0;else if(r=n&-n,e.callbackPriority!==r){if(a!=null&&hi(a),r===1)e.tag===0?Um(ss.bind(null,e)):xu(ss.bind(null,e)),Im(function(){!(j&6)&&Er()}),a=null;else{switch(su(n)){case 1:a=gl;break;case 4:a=ou;break;case 16:a=Qn;break;case 536870912:a=lu;break;default:a=Qn}a=wc(a,Ac.bind(null,e))}e.callbackPriority=r,e.callbackNode=a}}function Ac(e,r){if(_n=-1,In=0,j&6)throw Error(C(327));var a=e.callbackNode;if(la()&&e.callbackNode!==a)return null;var n=$n(e,e===Z?re:0);if(n===0)return null;if(n&30||n&e.expiredLanes||r)r=pt(e,n);else{r=n;var t=j;j|=2;var o=zc();(Z!==e||re!==r)&&(_e=null,pa=B()+500,Dr(e,r));do try{fp();break}catch(i){Tc(e,i)}while(!0);wl(),ct.current=o,j=t,U!==null?r=0:(Z=null,re=0,r=W)}if(r!==0){if(r===2&&(t=Po(e),t!==0&&(n=t,r=al(e,t))),r===1)throw a=an,Dr(e,0),nr(e,n),ye(e,B()),a;if(r===6)nr(e,n);else{if(t=e.current.alternate,!(n&30)&&!mp(t)&&(r=pt(e,n),r===2&&(o=Po(e),o!==0&&(n=o,r=al(e,o))),r===1))throw a=an,Dr(e,0),nr(e,n),ye(e,B()),a;switch(e.finishedWork=t,e.finishedLanes=n,r){case 0:case 1:throw Error(C(345));case 2:Tr(e,de,_e);break;case 3:if(nr(e,n),(n&130023424)===n&&(r=Bl+500-B(),10<r)){if($n(e,0)!==0)break;if(t=e.suspendedLanes,(t&n)!==n){se(),e.pingedLanes|=e.suspendedLanes&t;break}e.timeoutHandle=Lo(Tr.bind(null,e,de,_e),r);break}Tr(e,de,_e);break;case 4:if(nr(e,n),(n&4194240)===n)break;for(r=e.eventTimes,t=-1;0<n;){var l=31-xe(n);o=1<<l,l=r[l],l>t&&(t=l),n&=~o}if(n=t,n=B()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*dp(n/1960))-n,10<n){e.timeoutHandle=Lo(Tr.bind(null,e,de,_e),n);break}Tr(e,de,_e);break;case 5:Tr(e,de,_e);break;default:throw Error(C(329))}}}return ye(e,B()),e.callbackNode===a?Ac.bind(null,e):null}function al(e,r){var a=Ga;return e.current.memoizedState.isDehydrated&&(Dr(e,r).flags|=256),e=pt(e,r),e!==2&&(r=de,de=a,r!==null&&nl(r)),e}function nl(e){de===null?de=e:de.push.apply(de,e)}function mp(e){for(var r=e;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var n=0;n<a.length;n++){var t=a[n],o=t.getSnapshot;t=t.value;try{if(!qe(o(),t))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function nr(e,r){for(r&=~Jl,r&=~zt,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var a=31-xe(r),n=1<<a;e[a]=-1,r&=~n}}function ss(e){if(j&6)throw Error(C(327));la();var r=$n(e,0);if(!(r&1))return ye(e,B()),null;var a=pt(e,r);if(e.tag!==0&&a===2){var n=Po(e);n!==0&&(r=n,a=al(e,n))}if(a===1)throw a=an,Dr(e,0),nr(e,r),ye(e,B()),a;if(a===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Tr(e,de,_e),ye(e,B()),null}function Ul(e,r){var a=j;j|=1;try{return e(r)}finally{j=a,j===0&&(pa=B()+500,Ot&&Er())}}function Lr(e){or!==null&&or.tag===0&&!(j&6)&&la();var r=j;j|=1;var a=Te.transition,n=q;try{if(Te.transition=null,q=1,e)return e()}finally{q=n,Te.transition=a,j=r,!(j&6)&&Er()}}function Ql(){he=ea.current,G(ea)}function Dr(e,r){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,_m(a)),U!==null)for(a=U.return;a!==null;){var n=a;switch(Pl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&et();break;case 3:da(),G(pe),G(le),bl();break;case 5:Ll(n);break;case 4:da();break;case 13:G(Y);break;case 19:G(Y);break;case 10:Nl(n.type._context);break;case 22:case 23:Ql()}a=a.return}if(Z=e,U=e=fr(e.current,null),re=he=r,W=0,an=null,Jl=zt=qr=0,de=Ga=null,Pr!==null){for(r=0;r<Pr.length;r++)if(a=Pr[r],n=a.interleaved,n!==null){a.interleaved=null;var t=n.next,o=a.pending;if(o!==null){var l=o.next;o.next=t,n.next=l}a.pending=n}Pr=null}return e}function Tc(e,r){do{var a=U;try{if(wl(),Mn.current=ut,st){for(var n=H.memoizedState;n!==null;){var t=n.queue;t!==null&&(t.pending=null),n=n.next}st=!1}if(jr=0,X=$=H=null,La=!1,Za=0,Vl.current=null,a===null||a.return===null){W=1,an=r,U=null;break}e:{var o=e,l=a.return,i=a,s=r;if(r=re,i.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,h=i,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var y=h.alternate;y?(h.updateQueue=y.updateQueue,h.memoizedState=y.memoizedState,h.lanes=y.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=$i(l);if(g!==null){g.flags&=-257,Wi(g,l,i,o,r),g.mode&1&&Qi(o,u,r),r=g,s=u;var S=r.updateQueue;if(S===null){var E=new Set;E.add(s),r.updateQueue=E}else S.add(s);break e}else{if(!(r&1)){Qi(o,u,r),$l();break e}s=Error(C(426))}}else if(M&&i.mode&1){var A=$i(l);if(A!==null){!(A.flags&65536)&&(A.flags|=256),Wi(A,l,i,o,r),kl(ma(s,i));break e}}o=s=ma(s,i),W!==4&&(W=2),Ga===null?Ga=[o]:Ga.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,r&=-r,o.lanes|=r;var p=sc(o,s,r);_i(o,p);break e;case 1:i=s;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(mr===null||!mr.has(m)))){o.flags|=65536,r&=-r,o.lanes|=r;var v=uc(o,i,r);_i(o,v);break e}}o=o.return}while(o!==null)}Pc(a)}catch(R){r=R,U===a&&a!==null&&(U=a=a.return);continue}break}while(!0)}function zc(){var e=ct.current;return ct.current=ut,e===null?ut:e}function $l(){(W===0||W===3||W===2)&&(W=4),Z===null||!(qr&268435455)&&!(zt&268435455)||nr(Z,re)}function pt(e,r){var a=j;j|=2;var n=zc();(Z!==e||re!==r)&&(_e=null,Dr(e,r));do try{pp();break}catch(t){Tc(e,t)}while(!0);if(wl(),j=a,ct.current=n,U!==null)throw Error(C(261));return Z=null,re=0,W}function pp(){for(;U!==null;)Fc(U)}function fp(){for(;U!==null&&!Md();)Fc(U)}function Fc(e){var r=Dc(e.alternate,e,he);e.memoizedProps=e.pendingProps,r===null?Pc(e):U=r,Vl.current=null}function Pc(e){var r=e;do{var a=r.alternate;if(e=r.return,r.flags&32768){if(a=ip(a,r),a!==null){a.flags&=32767,U=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{W=6,U=null;return}}else if(a=lp(a,r,he),a!==null){U=a;return}if(r=r.sibling,r!==null){U=r;return}U=r=e}while(r!==null);W===0&&(W=5)}function Tr(e,r,a){var n=q,t=Te.transition;try{Te.transition=null,q=1,yp(e,r,a,n)}finally{Te.transition=t,q=n}return null}function yp(e,r,a,n){do la();while(or!==null);if(j&6)throw Error(C(327));a=e.finishedWork;var t=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=a.lanes|a.childLanes;if($d(e,o),e===Z&&(U=Z=null,re=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Dn||(Dn=!0,wc(Qn,function(){return la(),null})),o=(a.flags&15990)!==0,a.subtreeFlags&15990||o){o=Te.transition,Te.transition=null;var l=q;q=1;var i=j;j|=4,Vl.current=null,up(e,a),Oc(a,e),qm(jo),Wn=!!xo,jo=xo=null,e.current=a,cp(a),Yd(),j=i,q=l,Te.transition=o}else e.current=a;if(Dn&&(Dn=!1,or=e,mt=t),o=e.pendingLanes,o===0&&(mr=null),Id(a.stateNode),ye(e,B()),r!==null)for(n=e.onRecoverableError,a=0;a<r.length;a++)t=r[a],n(t.value,{componentStack:t.stack,digest:t.digest});if(dt)throw dt=!1,e=el,el=null,e;return mt&1&&e.tag!==0&&la(),o=e.pendingLanes,o&1?e===rl?Ma++:(Ma=0,rl=e):Ma=0,Er(),null}function la(){if(or!==null){var e=su(mt),r=Te.transition,a=q;try{if(Te.transition=null,q=16>e?16:e,or===null)var n=!1;else{if(e=or,or=null,mt=0,j&6)throw Error(C(331));var t=j;for(j|=4,T=e.current;T!==null;){var o=T,l=o.child;if(T.flags&16){var i=o.deletions;if(i!==null){for(var s=0;s<i.length;s++){var u=i[s];for(T=u;T!==null;){var h=T;switch(h.tag){case 0:case 11:case 15:ba(8,h,o)}var d=h.child;if(d!==null)d.return=h,T=d;else for(;T!==null;){h=T;var y=h.sibling,g=h.return;if(Sc(h),h===u){T=null;break}if(y!==null){y.return=g,T=y;break}T=g}}}var S=o.alternate;if(S!==null){var E=S.child;if(E!==null){S.child=null;do{var A=E.sibling;E.sibling=null,E=A}while(E!==null)}}T=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,T=l;else e:for(;T!==null;){if(o=T,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ba(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,T=p;break e}T=o.return}}var c=e.current;for(T=c;T!==null;){l=T;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,T=m;else e:for(l=c;T!==null;){if(i=T,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Tt(9,i)}}catch(R){I(i,i.return,R)}if(i===l){T=null;break e}var v=i.sibling;if(v!==null){v.return=i.return,T=v;break e}T=i.return}}if(j=t,Er(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(vt,e)}catch{}n=!0}return n}finally{q=a,Te.transition=r}}return!1}function us(e,r,a){r=ma(a,r),r=sc(e,r,1),e=dr(e,r,1),r=se(),e!==null&&(ln(e,1,r),ye(e,r))}function I(e,r,a){if(e.tag===3)us(e,e,a);else for(;r!==null;){if(r.tag===3){us(r,e,a);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(mr===null||!mr.has(n))){e=ma(a,e),e=uc(r,e,1),r=dr(r,e,1),e=se(),r!==null&&(ln(r,1,e),ye(r,e));break}}r=r.return}}function hp(e,r,a){var n=e.pingCache;n!==null&&n.delete(r),r=se(),e.pingedLanes|=e.suspendedLanes&a,Z===e&&(re&a)===a&&(W===4||W===3&&(re&130023424)===re&&500>B()-Bl?Dr(e,0):Jl|=a),ye(e,r)}function kc(e,r){r===0&&(e.mode&1?(r=En,En<<=1,!(En&130023424)&&(En=4194304)):r=1);var a=se();e=We(e,r),e!==null&&(ln(e,r,a),ye(e,a))}function vp(e){var r=e.memoizedState,a=0;r!==null&&(a=r.retryLane),kc(e,a)}function gp(e,r){var a=0;switch(e.tag){case 13:var n=e.stateNode,t=e.memoizedState;t!==null&&(a=t.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(C(314))}n!==null&&n.delete(r),kc(e,a)}var Dc;Dc=function(e,r,a){if(e!==null)if(e.memoizedProps!==r.pendingProps||pe.current)me=!0;else{if(!(e.lanes&a)&&!(r.flags&128))return me=!1,op(e,r,a);me=!!(e.flags&131072)}else me=!1,M&&r.flags&1048576&&ju(r,nt,r.index);switch(r.lanes=0,r.tag){case 2:var n=r.type;Hn(e,r),e=r.pendingProps;var t=sa(r,le.current);oa(r,a),t=Ml(null,r,n,e,t,a);var o=Yl();return r.flags|=1,typeof t=="object"&&t!==null&&typeof t.render=="function"&&t.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,fe(n)?(o=!0,rt(r)):o=!1,r.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,jl(r),t.updater=At,r.stateNode=t,t._reactInternals=r,Io(r,n,e,a),r=Bo(null,r,n,!0,o,a)):(r.tag=0,M&&o&&Fl(r),ie(null,r,t,a),r=r.child),r;case 16:n=r.elementType;e:{switch(Hn(e,r),e=r.pendingProps,t=n._init,n=t(n._payload),r.type=n,t=r.tag=Ep(n),e=De(n,e),t){case 0:r=Jo(null,r,n,e,a);break e;case 1:r=Zi(null,r,n,e,a);break e;case 11:r=Ki(null,r,n,e,a);break e;case 14:r=Xi(null,r,n,De(n.type,e),a);break e}throw Error(C(306,n,""))}return r;case 0:return n=r.type,t=r.pendingProps,t=r.elementType===n?t:De(n,t),Jo(e,r,n,t,a);case 1:return n=r.type,t=r.pendingProps,t=r.elementType===n?t:De(n,t),Zi(e,r,n,t,a);case 3:e:{if(pc(r),e===null)throw Error(C(387));n=r.pendingProps,o=r.memoizedState,t=o.element,Yu(e,r),lt(r,n,null,a);var l=r.memoizedState;if(n=l.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},r.updateQueue.baseState=o,r.memoizedState=o,r.flags&256){t=ma(Error(C(423)),r),r=es(e,r,n,a,t);break e}else if(n!==t){t=ma(Error(C(424)),r),r=es(e,r,n,a,t);break e}else for(ve=cr(r.stateNode.containerInfo.firstChild),ge=r,M=!0,Ne=null,a=Gu(r,null,n,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ua(),n===t){r=Ke(e,r,a);break e}ie(e,r,n,a)}r=r.child}return r;case 5:return Hu(r),e===null&&Yo(r),n=r.type,t=r.pendingProps,o=e!==null?e.memoizedProps:null,l=t.children,qo(n,t)?l=null:o!==null&&qo(n,o)&&(r.flags|=32),mc(e,r),ie(e,r,l,a),r.child;case 6:return e===null&&Yo(r),null;case 13:return fc(e,r,a);case 4:return ql(r,r.stateNode.containerInfo),n=r.pendingProps,e===null?r.child=ca(r,null,n,a):ie(e,r,n,a),r.child;case 11:return n=r.type,t=r.pendingProps,t=r.elementType===n?t:De(n,t),Ki(e,r,n,t,a);case 7:return ie(e,r,r.pendingProps,a),r.child;case 8:return ie(e,r,r.pendingProps.children,a),r.child;case 12:return ie(e,r,r.pendingProps.children,a),r.child;case 10:e:{if(n=r.type._context,t=r.pendingProps,o=r.memoizedProps,l=t.value,L(tt,n._currentValue),n._currentValue=l,o!==null)if(qe(o.value,l)){if(o.children===t.children&&!pe.current){r=Ke(e,r,a);break e}}else for(o=r.child,o!==null&&(o.return=r);o!==null;){var i=o.dependencies;if(i!==null){l=o.child;for(var s=i.firstContext;s!==null;){if(s.context===n){if(o.tag===1){s=Ue(-1,a&-a),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s}}o.lanes|=a,s=o.alternate,s!==null&&(s.lanes|=a),Ho(o.return,a,r),i.lanes|=a;break}s=s.next}}else if(o.tag===10)l=o.type===r.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(C(341));l.lanes|=a,i=l.alternate,i!==null&&(i.lanes|=a),Ho(l,a,r),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===r){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ie(e,r,t.children,a),r=r.child}return r;case 9:return t=r.type,n=r.pendingProps.children,oa(r,a),t=ze(t),n=n(t),r.flags|=1,ie(e,r,n,a),r.child;case 14:return n=r.type,t=De(n,r.pendingProps),t=De(n.type,t),Xi(e,r,n,t,a);case 15:return cc(e,r,r.type,r.pendingProps,a);case 17:return n=r.type,t=r.pendingProps,t=r.elementType===n?t:De(n,t),Hn(e,r),r.tag=1,fe(n)?(e=!0,rt(r)):e=!1,oa(r,a),ic(r,n,t),Io(r,n,t,a),Bo(null,r,n,!0,e,a);case 19:return yc(e,r,a);case 22:return dc(e,r,a)}throw Error(C(156,r.tag))};function wc(e,r){return tu(e,r)}function Sp(e,r,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(e,r,a,n){return new Sp(e,r,a,n)}function Wl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ep(e){if(typeof e=="function")return Wl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===yl)return 11;if(e===hl)return 14}return 2}function fr(e,r){var a=e.alternate;return a===null?(a=Ae(e.tag,r,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=r,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,r=e.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function Vn(e,r,a,n,t,o){var l=2;if(n=e,typeof e=="function")Wl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Vr:return wr(a.children,t,o,r);case fl:l=8,t|=8;break;case po:return e=Ae(12,a,r,t|2),e.elementType=po,e.lanes=o,e;case fo:return e=Ae(13,a,r,t),e.elementType=fo,e.lanes=o,e;case yo:return e=Ae(19,a,r,t),e.elementType=yo,e.lanes=o,e;case Hs:return Ft(a,t,o,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ms:l=10;break e;case Ys:l=9;break e;case yl:l=11;break e;case hl:l=14;break e;case er:l=16,n=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return r=Ae(l,a,r,t),r.elementType=e,r.type=n,r.lanes=o,r}function wr(e,r,a,n){return e=Ae(7,e,n,r),e.lanes=a,e}function Ft(e,r,a,n){return e=Ae(22,e,n,r),e.elementType=Hs,e.lanes=a,e.stateNode={isHidden:!1},e}function io(e,r,a){return e=Ae(6,e,null,r),e.lanes=a,e}function so(e,r,a){return r=Ae(4,e.children!==null?e.children:[],e.key,r),r.lanes=a,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Cp(e,r,a,n,t){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_t(0),this.expirationTimes=_t(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_t(0),this.identifierPrefix=n,this.onRecoverableError=t,this.mutableSourceEagerHydrationData=null}function Kl(e,r,a,n,t,o,l,i,s){return e=new Cp(e,r,a,i,s),r===1?(r=1,o===!0&&(r|=8)):r=0,o=Ae(3,null,null,r),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},jl(o),e}function Op(e,r,a){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ir,key:n==null?null:""+n,children:e,containerInfo:r,implementation:a}}function Nc(e){if(!e)return vr;e=e._reactInternals;e:{if(Gr(e)!==e||e.tag!==1)throw Error(C(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(fe(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(C(171))}if(e.tag===1){var a=e.type;if(fe(a))return Nu(e,a,r)}return r}function xc(e,r,a,n,t,o,l,i,s){return e=Kl(a,n,!0,e,t,o,l,i,s),e.context=Nc(null),a=e.current,n=se(),t=pr(a),o=Ue(n,t),o.callback=r??null,dr(a,o,t),e.current.lanes=t,ln(e,t,n),ye(e,n),e}function Pt(e,r,a,n){var t=r.current,o=se(),l=pr(t);return a=Nc(a),r.context===null?r.context=a:r.pendingContext=a,r=Ue(o,l),r.payload={element:e},n=n===void 0?null:n,n!==null&&(r.callback=n),e=dr(t,r,l),e!==null&&(je(e,t,l,o),Gn(e,t,l)),l}function ft(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cs(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<r?a:r}}function Xl(e,r){cs(e,r),(e=e.alternate)&&cs(e,r)}function Rp(){return null}var jc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zl(e){this._internalRoot=e}kt.prototype.render=Zl.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(C(409));Pt(e,r,null,null)};kt.prototype.unmount=Zl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Lr(function(){Pt(null,e,null,null)}),r[$e]=null}};function kt(e){this._internalRoot=e}kt.prototype.unstable_scheduleHydration=function(e){if(e){var r=du();e={blockedOn:null,target:e,priority:r};for(var a=0;a<ar.length&&r!==0&&r<ar[a].priority;a++);ar.splice(a,0,e),a===0&&pu(e)}};function ei(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Dt(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ds(){}function Ap(e,r,a,n,t){if(t){if(typeof n=="function"){var o=n;n=function(){var u=ft(l);o.call(u)}}var l=xc(r,n,e,0,null,!1,!1,"",ds);return e._reactRootContainer=l,e[$e]=l.current,Qa(e.nodeType===8?e.parentNode:e),Lr(),l}for(;t=e.lastChild;)e.removeChild(t);if(typeof n=="function"){var i=n;n=function(){var u=ft(s);i.call(u)}}var s=Kl(e,0,!1,null,null,!1,!1,"",ds);return e._reactRootContainer=s,e[$e]=s.current,Qa(e.nodeType===8?e.parentNode:e),Lr(function(){Pt(r,s,a,n)}),s}function wt(e,r,a,n,t){var o=a._reactRootContainer;if(o){var l=o;if(typeof t=="function"){var i=t;t=function(){var s=ft(l);i.call(s)}}Pt(r,l,e,t)}else l=Ap(a,r,e,t,n);return ft(l)}uu=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var a=ka(r.pendingLanes);a!==0&&(Sl(r,a|1),ye(r,B()),!(j&6)&&(pa=B()+500,Er()))}break;case 13:Lr(function(){var n=We(e,1);if(n!==null){var t=se();je(n,e,1,t)}}),Xl(e,1)}};El=function(e){if(e.tag===13){var r=We(e,134217728);if(r!==null){var a=se();je(r,e,134217728,a)}Xl(e,134217728)}};cu=function(e){if(e.tag===13){var r=pr(e),a=We(e,r);if(a!==null){var n=se();je(a,e,r,n)}Xl(e,r)}};du=function(){return q};mu=function(e,r){var a=q;try{return q=e,r()}finally{q=a}};To=function(e,r,a){switch(r){case"input":if(go(e,a),r=a.name,a.type==="radio"&&r!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var n=a[r];if(n!==e&&n.form===e.form){var t=Ct(n);if(!t)throw Error(C(90));Is(n),go(n,t)}}}break;case"textarea":Js(e,a);break;case"select":r=a.value,r!=null&&ra(e,!!a.multiple,r,!1)}};Xs=Ul;Zs=Lr;var Tp={usingClientEntryPoint:!1,Events:[un,Qr,Ct,Ws,Ks,Ul]},za={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zp={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=au(e),e===null?null:e.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||Rp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wn.isDisabled&&wn.supportsFiber)try{vt=wn.inject(zp),Ye=wn}catch{}}Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tp;Ee.createPortal=function(e,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ei(r))throw Error(C(200));return Op(e,r,null,a)};Ee.createRoot=function(e,r){if(!ei(e))throw Error(C(299));var a=!1,n="",t=jc;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(t=r.onRecoverableError)),r=Kl(e,1,!1,null,null,a,!1,n,t),e[$e]=r.current,Qa(e.nodeType===8?e.parentNode:e),new Zl(r)};Ee.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=au(r),e=e===null?null:e.stateNode,e};Ee.flushSync=function(e){return Lr(e)};Ee.hydrate=function(e,r,a){if(!Dt(r))throw Error(C(200));return wt(null,e,r,!0,a)};Ee.hydrateRoot=function(e,r,a){if(!ei(e))throw Error(C(405));var n=a!=null&&a.hydratedSources||null,t=!1,o="",l=jc;if(a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onRecoverableError!==void 0&&(l=a.onRecoverableError)),r=xc(r,null,e,1,a??null,t,!1,o,l),e[$e]=r.current,Qa(e),n)for(e=0;e<n.length;e++)a=n[e],t=a._getVersion,t=t(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,t]:r.mutableSourceEagerHydrationData.push(a,t);return new kt(r)};Ee.render=function(e,r,a){if(!Dt(r))throw Error(C(200));return wt(null,e,r,!1,a)};Ee.unmountComponentAtNode=function(e){if(!Dt(e))throw Error(C(40));return e._reactRootContainer?(Lr(function(){wt(null,null,e,!1,function(){e._reactRootContainer=null,e[$e]=null})}),!0):!1};Ee.unstable_batchedUpdates=Ul;Ee.unstable_renderSubtreeIntoContainer=function(e,r,a,n){if(!Dt(a))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return wt(e,r,a,!1,n)};Ee.version="18.3.1-next-f1338f8080-20240426";function qc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qc)}catch(e){console.error(e)}}qc(),qs.exports=Ee;var Fp=qs.exports,ms=Fp;co.createRoot=ms.createRoot,co.hydrateRoot=ms.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function nn(){return nn=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},nn.apply(this,arguments)}var lr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lr||(lr={}));const ps="popstate";function Pp(e){e===void 0&&(e={});function r(t,o){let{pathname:l="/",search:i="",hash:s=""}=Mr(t.location.hash.substr(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),tl("",{pathname:l,search:i,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function a(t,o){let l=t.document.querySelector("base"),i="";if(l&&l.getAttribute("href")){let s=t.location.href,u=s.indexOf("#");i=u===-1?s:s.slice(0,u)}return i+"#"+(typeof o=="string"?o:yt(o))}function n(t,o){Nt(t.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return Dp(r,a,n,e)}function Q(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function Nt(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function kp(){return Math.random().toString(36).substr(2,8)}function fs(e,r){return{usr:e.state,key:e.key,idx:r}}function tl(e,r,a,n){return a===void 0&&(a=null),nn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof r=="string"?Mr(r):r,{state:a,key:r&&r.key||n||kp()})}function yt(e){let{pathname:r="/",search:a="",hash:n=""}=e;return a&&a!=="?"&&(r+=a.charAt(0)==="?"?a:"?"+a),n&&n!=="#"&&(r+=n.charAt(0)==="#"?n:"#"+n),r}function Mr(e){let r={};if(e){let a=e.indexOf("#");a>=0&&(r.hash=e.substr(a),e=e.substr(0,a));let n=e.indexOf("?");n>=0&&(r.search=e.substr(n),e=e.substr(0,n)),e&&(r.pathname=e)}return r}function Dp(e,r,a,n){n===void 0&&(n={});let{window:t=document.defaultView,v5Compat:o=!1}=n,l=t.history,i=lr.Pop,s=null,u=h();u==null&&(u=0,l.replaceState(nn({},l.state,{idx:u}),""));function h(){return(l.state||{idx:null}).idx}function d(){i=lr.Pop;let A=h(),p=A==null?null:A-u;u=A,s&&s({action:i,location:E.location,delta:p})}function y(A,p){i=lr.Push;let c=tl(E.location,A,p);a&&a(c,A),u=h()+1;let m=fs(c,u),v=E.createHref(c);try{l.pushState(m,"",v)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;t.location.assign(v)}o&&s&&s({action:i,location:E.location,delta:1})}function g(A,p){i=lr.Replace;let c=tl(E.location,A,p);a&&a(c,A),u=h();let m=fs(c,u),v=E.createHref(c);l.replaceState(m,"",v),o&&s&&s({action:i,location:E.location,delta:0})}function S(A){let p=t.location.origin!=="null"?t.location.origin:t.location.href,c=typeof A=="string"?A:yt(A);return c=c.replace(/ $/,"%20"),Q(p,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,p)}let E={get action(){return i},get location(){return e(t,l)},listen(A){if(s)throw new Error("A history only accepts one active listener");return t.addEventListener(ps,d),s=A,()=>{t.removeEventListener(ps,d),s=null}},createHref(A){return r(t,A)},createURL:S,encodeLocation(A){let p=S(A);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:y,replace:g,go(A){return l.go(A)}};return E}var ys;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ys||(ys={}));function wp(e,r,a){return a===void 0&&(a="/"),Np(e,r,a)}function Np(e,r,a,n){let t=typeof r=="string"?Mr(r):r,o=ri(t.pathname||"/",a);if(o==null)return null;let l=Lc(e);xp(l);let i=null;for(let s=0;i==null&&s<l.length;++s){let u=Jp(o);i=_p(l[s],u)}return i}function Lc(e,r,a,n){r===void 0&&(r=[]),a===void 0&&(a=[]),n===void 0&&(n="");let t=(o,l,i)=>{let s={relativePath:i===void 0?o.path||"":i,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};s.relativePath.startsWith("/")&&(Q(s.relativePath.startsWith(n),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(n.length));let u=yr([n,s.relativePath]),h=a.concat(s);o.children&&o.children.length>0&&(Q(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Lc(o.children,r,h,u)),!(o.path==null&&!o.index)&&r.push({path:u,score:Yp(u,o.index),routesMeta:h})};return e.forEach((o,l)=>{var i;if(o.path===""||!((i=o.path)!=null&&i.includes("?")))t(o,l);else for(let s of bc(o.path))t(o,l,s)}),r}function bc(e){let r=e.split("/");if(r.length===0)return[];let[a,...n]=r,t=a.endsWith("?"),o=a.replace(/\?$/,"");if(n.length===0)return t?[o,""]:[o];let l=bc(n.join("/")),i=[];return i.push(...l.map(s=>s===""?o:[o,s].join("/"))),t&&i.push(...l),i.map(s=>e.startsWith("/")&&s===""?"/":s)}function xp(e){e.sort((r,a)=>r.score!==a.score?a.score-r.score:Hp(r.routesMeta.map(n=>n.childrenIndex),a.routesMeta.map(n=>n.childrenIndex)))}const jp=/^:[\w-]+$/,qp=3,Lp=2,bp=1,Gp=10,Mp=-2,hs=e=>e==="*";function Yp(e,r){let a=e.split("/"),n=a.length;return a.some(hs)&&(n+=Mp),r&&(n+=Lp),a.filter(t=>!hs(t)).reduce((t,o)=>t+(jp.test(o)?qp:o===""?bp:Gp),n)}function Hp(e,r){return e.length===r.length&&e.slice(0,-1).every((n,t)=>n===r[t])?e[e.length-1]-r[r.length-1]:0}function _p(e,r,a){let{routesMeta:n}=e,t={},o="/",l=[];for(let i=0;i<n.length;++i){let s=n[i],u=i===n.length-1,h=o==="/"?r:r.slice(o.length)||"/",d=Ip({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},h),y=s.route;if(!d)return null;Object.assign(t,d.params),l.push({params:t,pathname:yr([o,d.pathname]),pathnameBase:Wp(yr([o,d.pathnameBase])),route:y}),d.pathnameBase!=="/"&&(o=yr([o,d.pathnameBase]))}return l}function Ip(e,r){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,n]=Vp(e.path,e.caseSensitive,e.end),t=r.match(a);if(!t)return null;let o=t[0],l=o.replace(/(.)\/+$/,"$1"),i=t.slice(1);return{params:n.reduce((u,h,d)=>{let{paramName:y,isOptional:g}=h;if(y==="*"){let E=i[d]||"";l=o.slice(0,o.length-E.length).replace(/(.)\/+$/,"$1")}const S=i[d];return g&&!S?u[y]=void 0:u[y]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function Vp(e,r,a){r===void 0&&(r=!1),a===void 0&&(a=!0),Nt(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],t="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,i,s)=>(n.push({paramName:i,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),t+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?t+="\\/*$":e!==""&&e!=="/"&&(t+="(?:(?=\\/|$))"),[new RegExp(t,r?void 0:"i"),n]}function Jp(e){try{return e.split("/").map(r=>decodeURIComponent(r).replace(/\//g,"%2F")).join("/")}catch(r){return Nt(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),e}}function ri(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let a=r.endsWith("/")?r.length-1:r.length,n=e.charAt(a);return n&&n!=="/"?null:e.slice(a)||"/"}const Bp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Up=e=>Bp.test(e);function Qp(e,r){r===void 0&&(r="/");let{pathname:a,search:n="",hash:t=""}=typeof e=="string"?Mr(e):e,o;if(a)if(Up(a))o=a;else{if(a.includes("//")){let l=a;a=a.replace(/\/\/+/g,"/"),Nt(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+a))}a.startsWith("/")?o=vs(a.substring(1),"/"):o=vs(a,r)}else o=r;return{pathname:o,search:Kp(n),hash:Xp(t)}}function vs(e,r){let a=r.replace(/\/+$/,"").split("/");return e.split("/").forEach(t=>{t===".."?a.length>1&&a.pop():t!=="."&&a.push(t)}),a.length>1?a.join("/"):"/"}function uo(e,r,a,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $p(e){return e.filter((r,a)=>a===0||r.route.path&&r.route.path.length>0)}function Gc(e,r){let a=$p(e);return r?a.map((n,t)=>t===a.length-1?n.pathname:n.pathnameBase):a.map(n=>n.pathnameBase)}function Mc(e,r,a,n){n===void 0&&(n=!1);let t;typeof e=="string"?t=Mr(e):(t=nn({},e),Q(!t.pathname||!t.pathname.includes("?"),uo("?","pathname","search",t)),Q(!t.pathname||!t.pathname.includes("#"),uo("#","pathname","hash",t)),Q(!t.search||!t.search.includes("#"),uo("#","search","hash",t)));let o=e===""||t.pathname==="",l=o?"/":t.pathname,i;if(l==null)i=a;else{let d=r.length-1;if(!n&&l.startsWith("..")){let y=l.split("/");for(;y[0]==="..";)y.shift(),d-=1;t.pathname=y.join("/")}i=d>=0?r[d]:"/"}let s=Qp(t,i),u=l&&l!=="/"&&l.endsWith("/"),h=(o||l===".")&&a.endsWith("/");return!s.pathname.endsWith("/")&&(u||h)&&(s.pathname+="/"),s}const yr=e=>e.join("/").replace(/\/\/+/g,"/"),Wp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Kp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Xp=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Zp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Yc=["post","put","patch","delete"];new Set(Yc);const ef=["get",...Yc];new Set(ef);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tn(){return tn=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},tn.apply(this,arguments)}const ai=O.createContext(null),rf=O.createContext(null),Yr=O.createContext(null),xt=O.createContext(null),Cr=O.createContext({outlet:null,matches:[],isDataRoute:!1}),Hc=O.createContext(null);function af(e,r){let{relative:a}=r===void 0?{}:r;dn()||Q(!1);let{basename:n,navigator:t}=O.useContext(Yr),{hash:o,pathname:l,search:i}=Vc(e,{relative:a}),s=l;return n!=="/"&&(s=l==="/"?n:yr([n,l])),t.createHref({pathname:s,search:i,hash:o})}function dn(){return O.useContext(xt)!=null}function mn(){return dn()||Q(!1),O.useContext(xt).location}function _c(e){O.useContext(Yr).static||O.useLayoutEffect(e)}function Ic(){let{isDataRoute:e}=O.useContext(Cr);return e?vf():nf()}function nf(){dn()||Q(!1);let e=O.useContext(ai),{basename:r,future:a,navigator:n}=O.useContext(Yr),{matches:t}=O.useContext(Cr),{pathname:o}=mn(),l=JSON.stringify(Gc(t,a.v7_relativeSplatPath)),i=O.useRef(!1);return _c(()=>{i.current=!0}),O.useCallback(function(u,h){if(h===void 0&&(h={}),!i.current)return;if(typeof u=="number"){n.go(u);return}let d=Mc(u,JSON.parse(l),o,h.relative==="path");e==null&&r!=="/"&&(d.pathname=d.pathname==="/"?r:yr([r,d.pathname])),(h.replace?n.replace:n.push)(d,h.state,h)},[r,n,l,o,e])}function tf(){let{matches:e}=O.useContext(Cr),r=e[e.length-1];return r?r.params:{}}function Vc(e,r){let{relative:a}=r===void 0?{}:r,{future:n}=O.useContext(Yr),{matches:t}=O.useContext(Cr),{pathname:o}=mn(),l=JSON.stringify(Gc(t,n.v7_relativeSplatPath));return O.useMemo(()=>Mc(e,JSON.parse(l),o,a==="path"),[e,l,o,a])}function of(e,r){return lf(e,r)}function lf(e,r,a,n){dn()||Q(!1);let{navigator:t}=O.useContext(Yr),{matches:o}=O.useContext(Cr),l=o[o.length-1],i=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=mn(),h;if(r){var d;let A=typeof r=="string"?Mr(r):r;s==="/"||(d=A.pathname)!=null&&d.startsWith(s)||Q(!1),h=A}else h=u;let y=h.pathname||"/",g=y;if(s!=="/"){let A=s.replace(/^\//,"").split("/");g="/"+y.replace(/^\//,"").split("/").slice(A.length).join("/")}let S=wp(e,{pathname:g}),E=mf(S&&S.map(A=>Object.assign({},A,{params:Object.assign({},i,A.params),pathname:yr([s,t.encodeLocation?t.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?s:yr([s,t.encodeLocation?t.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),o,a,n);return r&&E?O.createElement(xt.Provider,{value:{location:tn({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:lr.Pop}},E):E}function sf(){let e=hf(),r=Zp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,t={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},r),a?O.createElement("pre",{style:t},a):null,null)}const uf=O.createElement(sf,null);class cf extends O.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,a){return a.location!==r.location||a.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:a.error,location:a.location,revalidation:r.revalidation||a.revalidation}}componentDidCatch(r,a){console.error("React Router caught the following error during render",r,a)}render(){return this.state.error!==void 0?O.createElement(Cr.Provider,{value:this.props.routeContext},O.createElement(Hc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function df(e){let{routeContext:r,match:a,children:n}=e,t=O.useContext(ai);return t&&t.static&&t.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(t.staticContext._deepestRenderedBoundaryId=a.route.id),O.createElement(Cr.Provider,{value:r},n)}function mf(e,r,a,n){var t;if(r===void 0&&(r=[]),a===void 0&&(a=null),n===void 0&&(n=null),e==null){var o;if(!a)return null;if(a.errors)e=a.matches;else if((o=n)!=null&&o.v7_partialHydration&&r.length===0&&!a.initialized&&a.matches.length>0)e=a.matches;else return null}let l=e,i=(t=a)==null?void 0:t.errors;if(i!=null){let h=l.findIndex(d=>d.route.id&&(i==null?void 0:i[d.route.id])!==void 0);h>=0||Q(!1),l=l.slice(0,Math.min(l.length,h+1))}let s=!1,u=-1;if(a&&n&&n.v7_partialHydration)for(let h=0;h<l.length;h++){let d=l[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:y,errors:g}=a,S=d.route.loader&&y[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||S){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((h,d,y)=>{let g,S=!1,E=null,A=null;a&&(g=i&&d.route.id?i[d.route.id]:void 0,E=d.route.errorElement||uf,s&&(u<0&&y===0?(gf("route-fallback"),S=!0,A=null):u===y&&(S=!0,A=d.route.hydrateFallbackElement||null)));let p=r.concat(l.slice(0,y+1)),c=()=>{let m;return g?m=E:S?m=A:d.route.Component?m=O.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=h,O.createElement(df,{match:d,routeContext:{outlet:h,matches:p,isDataRoute:a!=null},children:m})};return a&&(d.route.ErrorBoundary||d.route.errorElement||y===0)?O.createElement(cf,{location:a.location,revalidation:a.revalidation,component:E,error:g,children:c(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):c()},null)}var Jc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Jc||{}),Bc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Bc||{});function pf(e){let r=O.useContext(ai);return r||Q(!1),r}function ff(e){let r=O.useContext(rf);return r||Q(!1),r}function yf(e){let r=O.useContext(Cr);return r||Q(!1),r}function Uc(e){let r=yf(),a=r.matches[r.matches.length-1];return a.route.id||Q(!1),a.route.id}function hf(){var e;let r=O.useContext(Hc),a=ff(),n=Uc();return r!==void 0?r:(e=a.errors)==null?void 0:e[n]}function vf(){let{router:e}=pf(Jc.UseNavigateStable),r=Uc(Bc.UseNavigateStable),a=O.useRef(!1);return _c(()=>{a.current=!0}),O.useCallback(function(t,o){o===void 0&&(o={}),a.current&&(typeof t=="number"?e.navigate(t):e.navigate(t,tn({fromRouteId:r},o)))},[e,r])}const gs={};function gf(e,r,a){gs[e]||(gs[e]=!0)}function Sf(e,r){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function zr(e){Q(!1)}function Ef(e){let{basename:r="/",children:a=null,location:n,navigationType:t=lr.Pop,navigator:o,static:l=!1,future:i}=e;dn()&&Q(!1);let s=r.replace(/^\/*/,"/"),u=O.useMemo(()=>({basename:s,navigator:o,static:l,future:tn({v7_relativeSplatPath:!1},i)}),[s,i,o,l]);typeof n=="string"&&(n=Mr(n));let{pathname:h="/",search:d="",hash:y="",state:g=null,key:S="default"}=n,E=O.useMemo(()=>{let A=ri(h,s);return A==null?null:{location:{pathname:A,search:d,hash:y,state:g,key:S},navigationType:t}},[s,h,d,y,g,S,t]);return E==null?null:O.createElement(Yr.Provider,{value:u},O.createElement(xt.Provider,{children:a,value:E}))}function Cf(e){let{children:r,location:a}=e;return of(ol(r),a)}new Promise(()=>{});function ol(e,r){r===void 0&&(r=[]);let a=[];return O.Children.forEach(e,(n,t)=>{if(!O.isValidElement(n))return;let o=[...r,t];if(n.type===O.Fragment){a.push.apply(a,ol(n.props.children,o));return}n.type!==zr&&Q(!1),!n.props.index||!n.props.children||Q(!1);let l={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=ol(n.props.children,o)),a.push(l)}),a}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ll(){return ll=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},ll.apply(this,arguments)}function Of(e,r){if(e==null)return{};var a={},n=Object.keys(e),t,o;for(o=0;o<n.length;o++)t=n[o],!(r.indexOf(t)>=0)&&(a[t]=e[t]);return a}function Rf(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Af(e,r){return e.button===0&&(!r||r==="_self")&&!Rf(e)}const Tf=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],zf="6";try{window.__reactRouterVersion=zf}catch{}const Ff="startTransition",Ss=hd[Ff];function Pf(e){let{basename:r,children:a,future:n,window:t}=e,o=O.useRef();o.current==null&&(o.current=Pp({window:t,v5Compat:!0}));let l=o.current,[i,s]=O.useState({action:l.action,location:l.location}),{v7_startTransition:u}=n||{},h=O.useCallback(d=>{u&&Ss?Ss(()=>s(d)):s(d)},[s,u]);return O.useLayoutEffect(()=>l.listen(h),[l,h]),O.useEffect(()=>Sf(n),[n]),O.createElement(Ef,{basename:r,children:a,location:i.location,navigationType:i.action,navigator:l,future:n})}const kf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Df=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_r=O.forwardRef(function(r,a){let{onClick:n,relative:t,reloadDocument:o,replace:l,state:i,target:s,to:u,preventScrollReset:h,viewTransition:d}=r,y=Of(r,Tf),{basename:g}=O.useContext(Yr),S,E=!1;if(typeof u=="string"&&Df.test(u)&&(S=u,kf))try{let m=new URL(window.location.href),v=u.startsWith("//")?new URL(m.protocol+u):new URL(u),R=ri(v.pathname,g);v.origin===m.origin&&R!=null?u=R+v.search+v.hash:E=!0}catch{}let A=af(u,{relative:t}),p=wf(u,{replace:l,state:i,target:s,preventScrollReset:h,relative:t,viewTransition:d});function c(m){n&&n(m),m.defaultPrevented||p(m)}return O.createElement("a",ll({},y,{href:S||A,onClick:E||o?n:c,ref:a,target:s}))});var Es;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Es||(Es={}));var Cs;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Cs||(Cs={}));function wf(e,r){let{target:a,replace:n,state:t,preventScrollReset:o,relative:l,viewTransition:i}=r===void 0?{}:r,s=Ic(),u=mn(),h=Vc(e,{relative:l});return O.useCallback(d=>{if(Af(d,a)){d.preventDefault();let y=n!==void 0?n:yt(u)===yt(h);s(e,{replace:y,state:t,preventScrollReset:o,relative:l,viewTransition:i})}},[u,s,h,n,t,a,e,o,l,i])}const Nf=["Do","Do#","Re","Re#","Mi","Fa","Fa#","Sol","Sol#","La","La#","Si"],xf=["Do","Reb","Re","Mib","Mi","Fa","Solb","Sol","Lab","La","Sib","Si"],jf=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],qf=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],Lf={Do:0,"Do#":1,Reb:1,Re:2,"Re#":3,Mib:3,Mi:4,Fa:5,"Fa#":6,Solb:6,Sol:7,"Sol#":8,Lab:8,La:9,"La#":10,Sib:10,Si:11,C:0,"C#":1,Db:1,D:2,"D#":3,Eb:3,E:4,F:5,"F#":6,Gb:6,G:7,"G#":8,Ab:8,A:9,"A#":10,Bb:10,B:11},bf=["Sol#","Solb","Do#","Reb","Re#","Mib","Fa#","Sol","Lab","La#","Sib","Do","Re","Mi","Fa","La","Si","C#","Db","D#","Eb","F#","Gb","G#","Ab","A#","Bb","C","D","E","F","G","A","B"];function Gf(e){return e.includes("b")}function Mf(e,r){return e==="english"?r?qf:jf:r?xf:Nf}function Qc(e,r=0,a="spanish"){if(!e)return"";if(e.includes("/"))return e.split("/").map(s=>Qc(s,r,a)).join("/");const n=bf.find(s=>e.startsWith(s));if(!n)return e;const t=e.slice(n.length),o=Lf[n];if(o===void 0)return e;let l=(o+r)%12;return l<0&&(l+=12),Mf(a,Gf(n))[l]+t}function Yf(e,r=0,a="spanish"){const n=[];let t="",o=0;const l=/\[([^\]]+)\]/g;let i;function s(h){if(h==="")return;(h.match(/\s+|\S+/g)||[]).forEach(y=>{if(/^\s+$/.test(y)){n.push({chord:"",text:y,isSpace:!0});return}n.push({chord:t,text:y,isSpace:!1}),t=""})}for(;(i=l.exec(e))!==null;){const h=e.slice(o,i.index);s(h),t=Qc(i[1].trim(),r,a),o=l.lastIndex}const u=e.slice(o);return s(u),t&&n.push({chord:t,text:"",isSpace:!1}),n}/**
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
 */const Le=(e,r)=>{const a=O.forwardRef(({color:n="currentColor",size:t=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:i="",children:s,...u},h)=>O.createElement("svg",{ref:h,...Hf,width:t,height:t,stroke:n,strokeWidth:l?Number(o)*24/Number(t):o,className:["lucide",`lucide-${_f(e)}`,i].join(" "),...u},[...r.map(([d,y])=>O.createElement(d,y)),...Array.isArray(s)?s:[s]]));return a.displayName=`${e}`,a};/**
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

CORO`},{id:804,number:4,title:"Grande es tu amor",key:"Do mayor (C)",time:"4 tiempos",category:"Adoración",isSpecial:!0,specialType:"especial",artist:"SAG-2022",lyrics:`INTRODUCCIÓN

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
[G]brilla tu ver[C]dad…`},{id:805,number:6,title:"Tumba a Jardines",key:"Re mayor (D)",time:"4 tiempos",category:"Adoración",isSpecial:!0,specialType:"especial",artist:"Especial",lyrics:`INTRODUCCIÓN

Bm, G, D, A, Bm, G, D, A, D, G, D

ESTROFA 1

[D]El mundo, busqué
Y no pudo [G]llenar[D]me

Ningún [Bm7]tesoro que pueda ga[A]nar
Me sacia[G]rá

Mas llegaste [D]tú
Me diste [G]vida [D]nueva

Y cada [Bm7]deseo se cumpli[A]rá
Aquí en tu [G]amor.

CORO

[D]Oh, no hay nada
Nada mejor

[Bm7]No hay nada
Nada mejor

[G]No hay nada
Nada mejor que mi [D]Dios

ESTROFA 2

[G]Vengo a [D]ti
Sin miedo, [G]sin re[D]servas

Cada [Bm7]fracaso has visto, Se[A]ñor
Y aún tu amigo [G]soy

Porque el Dios de los [D]montes
Es el [G]Dios de los [D]valles

No hay [Bm7]lugar, no hay lugar
Que me pueda ale[A]jar
De tu gracia y [G]amor

CORO

[D]Oh, no hay nada
Nada mejor

[Bm7]No hay nada
Nada mejor

[G]No hay nada
Nada mejor que mi [D]Dios

[D]Oh, no hay nada
Nada mejor

[Bm7]No hay nada
Nada mejor

[G]No hay nada
Nada mejor que mi [D]Dios

INTERLUDIO

Bm7, G, D, A, Bm7, G, D, A

PUENTE

[D]Cambias lamento en danza
[G] [G] [G] [D]

[D]De cenizas, traes vida
[G] [G] [G] [D]

[D]Cambias culpa por gloria
Sé que [Bm]solo [G]Tú lo ha[D]rás

[D]Cambias lamento en danza
[G] [G] [G] [D]

[D]De cenizas, traes vida
[G] [G] [G] [D]

[D]Cambias culpa por gloria
Sé que [Bm]solo [G]Tú lo ha[D]rás

PUENTE 2

[D]De las ruinas y tumbas
[G] [G] [G] [D]

[D]Nacen nuevos jardines
[G] [G] [G] [D]

[D]Resucitas los huesos
Sé que [Bm]solo [G]Tú lo ha[D]rás
Sé que [Bm]solo [G]Tú lo ha[D]rás

CORO

[D]Oh, no hay nada
Nada mejor

[Bm7]No hay nada
Nada mejor

[G]No hay nada
Nada mejor que mi [D]Dios

[D]Oh, no hay nada
Nada mejor

[Bm7]No hay nada
Nada mejor

[G]No hay nada
Nada mejor que mi [D]Dios

FINAL

[D]De las ruinas y tumbas
[G] [G] [G] [D]

[D]Nacen nuevos jardines
[G] [G] [G] [D]

[D]Resucitas los huesos
Sé que [Bm]solo [G]Tú lo ha[D]rás

[D]De las ruinas y tumbas
[G] [G] [G] [D]

[D]Nacen nuevos jardines
[G] [G] [G] [D]

[D]Resucitas los huesos
Sé que [Bm]solo [G]Tú lo ha[D]rás

Sé que [Bm]solo [G]Tú lo ha[D]rás
Sé que [Bm]solo [G]Tú lo ha[D]rás`}],Xf=["General","Devocional","Predicación","Congregacional","Fúnebre","Coritos"],Be={fontSize:1.1,chordSize:.95,keepAwake:!1,theme:"dark",chordNotation:"spanish"},Zf="Pr. Marcos Carreño M.",Os="marcos.carreno.m@gmail.com",ey="1.1";function ry(){const[e,r]=O.useState(()=>{const n=localStorage.getItem("iprec_favorites");return n?JSON.parse(n):[]});return O.useEffect(()=>{localStorage.setItem("iprec_favorites",JSON.stringify(e))},[e]),[e,n=>{r(t=>t.includes(n)?t.filter(o=>o!==n):[...t,n])}]}function ay(){const[e,r]=O.useState(()=>{try{const n=localStorage.getItem("iprec_settings");return n?{...Be,...JSON.parse(n)}:Be}catch{return Be}});return O.useEffect(()=>{localStorage.setItem("iprec_settings",JSON.stringify(e))},[e]),[e,n=>{r(t=>({...t,...n}))}]}function ny(){const e=mn();return f.jsxs("nav",{className:"bottom-nav",children:[f.jsxs(_r,{to:"/",className:`nav-item ${e.pathname==="/"?"active":""}`,children:[f.jsx(Uf,{size:22}),f.jsx("span",{children:"Inicio"})]}),f.jsxs(_r,{to:"/favoritos",className:`nav-item ${e.pathname==="/favoritos"?"active":""}`,children:[f.jsx($c,{size:22}),f.jsx("span",{children:"Favoritos"})]}),f.jsxs(_r,{to:"/especiales-himnario",className:`nav-item ${e.pathname==="/especiales-himnario"?"active":""}`,children:[f.jsx(Vf,{size:22}),f.jsx("span",{children:"Esp. Himnario"})]}),f.jsxs(_r,{to:"/especiales",className:`nav-item ${e.pathname==="/especiales"?"active":""}`,children:[f.jsx(Kf,{size:22}),f.jsx("span",{children:"Especiales"})]}),f.jsxs(_r,{to:"/ajustes",className:`nav-item ${e.pathname==="/ajustes"?"active":""}`,children:[f.jsx(Wc,{size:22}),f.jsx("span",{children:"Ajustes"})]})]})}function Nn({title:e,filterType:r,favoritesList:a}){const[n,t]=O.useState(""),[o,l]=O.useState("Todas"),i=Kc.filter(d=>r==="all"&&d.isSpecial||r==="favorites"&&(!a||!a.includes(d.id))?!1:r==="hymnal-specials"?d.isSpecial&&d.specialType==="himnario":r==="specials"?d.isSpecial&&(d.specialType==="especial"||!d.specialType):!0),u=["Todas",...Xf.filter(d=>i.some(y=>y.category===d))],h=i.filter(d=>{if(o!=="Todas"&&d.category!==o)return!1;const y=n.toLowerCase(),g=d.title.toLowerCase().includes(y),S=d.number?d.number.toString().includes(y):!1;return g||S}).sort((d,y)=>{const g=Number(d.number||d.id),S=Number(y.number||y.id);return g-S});return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"header song-list-header",children:[f.jsx("div",{className:"header-spacer"}),f.jsxs("div",{className:"main-title-with-logo",children:[f.jsx("img",{src:"./logo.png",alt:"Logo",className:"app-logo"}),f.jsx("h1",{children:e})]}),f.jsx("select",{className:"filter-select",value:o,onChange:d=>l(d.target.value),children:u.map(d=>f.jsx("option",{value:d,children:d},d))})]}),f.jsxs("div",{className:"main-content",children:[f.jsxs("div",{className:"search-container",children:[f.jsx(Wf,{style:{position:"absolute",left:"32px",marginTop:"14px",color:"var(--text-secondary)"},size:20}),f.jsx("input",{type:"text",className:"search-input",placeholder:"Buscar por título o número...",value:n,onChange:d=>t(d.target.value)})]}),f.jsxs("div",{className:"song-list",children:[h.map(d=>f.jsxs(_r,{to:`/song/${d.id}`,className:"song-item",children:[f.jsx("div",{className:"song-number",children:d.number||d.id}),f.jsxs("div",{className:"song-details",children:[f.jsx("h2",{children:d.title}),f.jsxs("p",{children:[f.jsx("span",{children:d.artist}),d.category&&f.jsx("span",{className:"category-badge",children:d.category}),d.key&&f.jsxs("span",{className:"category-badge",children:["Tono: ",d.key]})]})]})]},d.id)),h.length===0&&f.jsx("p",{style:{textAlign:"center",color:"var(--text-secondary)",marginTop:"2rem"},children:"No se encontraron alabanzas"})]})]})]})}function ty({favorites:e,toggleFavorite:r,settings:a}){const{id:n}=tf(),t=Ic(),o=parseInt(n),l=Kc.find(c=>c.id===o),[i,s]=O.useState(0),[u,h]=O.useState(!1),d=(a==null?void 0:a.fontSize)||Be.fontSize,y=(a==null?void 0:a.chordSize)||Be.chordSize,g=(a==null?void 0:a.keepAwake)||!1,S=(a==null?void 0:a.chordNotation)||"spanish";if(O.useEffect(()=>{let c=null;const m=async()=>{try{g&&"wakeLock"in navigator&&(c=await navigator.wakeLock.request("screen"))}catch(R){console.log("Wake Lock no disponible:",R)}};m();const v=()=>{document.visibilityState==="visible"&&m()};return document.addEventListener("visibilitychange",v),()=>{document.removeEventListener("visibilitychange",v),c&&c.release().catch(()=>{})}},[g]),!l)return f.jsx("div",{className:"main-content",children:"Canción no encontrada"});const E=e.includes(o),A=c=>{let m=i+c;m>11&&(m-=12),m<-11&&(m+=12),s(m)},p=c=>{const m=c.trim();return/^(ESTROFA|CORO|PUENTE|INTRO|FINAL|VERSO|PRE-CORO|PRECORO|INTERLUDIO|CORO FINAL)(\s+\d+)?\s*:?$/i.test(m)};return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"header",style:{padding:"1rem 1.5rem"},children:[f.jsx("button",{className:"btn",style:{padding:"0.5rem",backgroundColor:"transparent"},onClick:()=>t(-1),children:f.jsx(If,{size:24})}),f.jsxs("div",{className:"song-viewer-title",children:[f.jsxs("div",{className:"song-type-label",children:[l.isSpecial?"ESPECIAL":"HIMNO"," ",l.number||l.id]}),f.jsx("h1",{children:l.title}),(l.key||l.time)&&f.jsxs("div",{className:"song-key-line",children:[f.jsx("span",{className:"song-note-symbol",children:"♪"}),l.key&&f.jsx("span",{children:l.key}),l.key&&l.time&&f.jsx("span",{children:"-"}),l.time&&f.jsx("span",{children:l.time})]})]}),f.jsx("button",{className:`favorite-btn ${E?"active":""}`,onClick:()=>r(o),children:f.jsx($c,{size:24,fill:E?"currentColor":"none"})})]}),f.jsxs("div",{className:"main-content",children:[f.jsxs("div",{className:"controls-bar",children:[f.jsxs("button",{className:`btn chord-toggle-btn ${u?"active":""}`,onClick:()=>h(!u),children:[u?f.jsx(Jf,{size:18}):f.jsx(Bf,{size:18}),u?"Ocultar Acordes":"Mostrar Acordes"]}),u&&f.jsxs("div",{className:"transpose-controls",children:[f.jsx("button",{className:"btn",onClick:()=>A(-1),children:f.jsx(Qf,{size:18})}),f.jsx("span",{className:"transpose-value",children:i>0?`+${i}`:i}),f.jsx("button",{className:"btn",onClick:()=>A(1),children:f.jsx($f,{size:18})})]})]}),f.jsx("div",{className:`lyrics ${u?"with-chords":"without-chords"}`,style:{"--lyrics-font-size":`${d}rem`,"--chord-font-size":`${y}rem`},children:l.lyrics.split(`
`).map((c,m)=>{const v=c.trim();if(v==="")return f.jsx("div",{className:"lyric-spacer"},m);if(p(v))return f.jsx("div",{className:"section-title",children:v},m);const R=Yf(c,i,S);return f.jsx("div",{className:"chord-line-container",children:R.map((z,P)=>f.jsxs("div",{className:z.isSpace?"space-group":"word-group",children:[!z.isSpace&&u&&f.jsx("span",{className:`chord-label ${z.chord?"":"empty-chord"}`,children:z.chord||""}),!z.isSpace&&f.jsx("span",{className:"lyric-text",children:z.text||" "})]},P))},m)})})]})]})}function oy({settings:e,updateSettings:r}){const a=Math.round(e.fontSize/Be.fontSize*100),n=Math.round(e.chordSize/Be.chordSize*100),t=typeof navigator<"u"&&"wakeLock"in navigator;return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"header",children:[f.jsx("h1",{children:"Ajustes"}),f.jsx(Wc,{size:24,color:"var(--accent)"})]}),f.jsxs("div",{className:"main-content",children:[f.jsxs("div",{className:"settings-card",children:[f.jsx("h2",{children:"Apariencia"}),f.jsx("p",{className:"settings-muted",children:"Elige cómo quieres visualizar el himnario."}),f.jsxs("div",{className:"theme-options",children:[f.jsxs("button",{className:`theme-option ${e.theme==="dark"?"active":""}`,onClick:()=>r({theme:"dark"}),children:[f.jsx("span",{className:"theme-preview dark-preview"}),f.jsx("strong",{children:"Oscuro"})]}),f.jsxs("button",{className:`theme-option ${e.theme==="light"?"active":""}`,onClick:()=>r({theme:"light"}),children:[f.jsx("span",{className:"theme-preview light-preview"}),f.jsx("strong",{children:"Claro"})]})]})]}),f.jsxs("div",{className:"settings-card",children:[f.jsx("h2",{children:"Escala de acordes"}),f.jsx("p",{className:"settings-muted",children:"Elige cómo quieres visualizar las notas musicales."}),f.jsxs("div",{className:"notation-options",children:[f.jsxs("button",{className:`notation-option ${e.chordNotation==="spanish"?"active":""}`,onClick:()=>r({chordNotation:"spanish"}),children:[f.jsx("strong",{children:"Española"}),f.jsx("span",{children:"Do · Re · Mi · Fa · Sol · La · Si"})]}),f.jsxs("button",{className:`notation-option ${e.chordNotation==="english"?"active":""}`,onClick:()=>r({chordNotation:"english"}),children:[f.jsx("strong",{children:"Inglesa"}),f.jsx("span",{children:"C · D · E · F · G · A · B"})]})]})]}),f.jsxs("div",{className:"settings-card",children:[f.jsx("h2",{children:"Tamaño de letra"}),f.jsxs("div",{className:"setting-group",children:[f.jsxs("div",{className:"setting-label-row",children:[f.jsx("label",{children:"Letra de la alabanza"}),f.jsxs("span",{children:[a,"%"]})]}),f.jsx("input",{className:"setting-range",type:"range",min:"0.85",max:"1.8",step:"0.05",value:e.fontSize,onChange:o=>r({fontSize:Number(o.target.value)})}),f.jsxs("div",{className:"settings-preview",style:{"--preview-font-size":`${e.fontSize}rem`},children:[f.jsx("p",{className:"preview-title",children:"Vista previa de letra"}),f.jsx("p",{className:"preview-lyrics-text",children:"Firmes y adelante, huestes de la fe"})]})]})]}),f.jsxs("div",{className:"settings-card",children:[f.jsx("h2",{children:"Tamaño de acordes"}),f.jsxs("div",{className:"setting-group",children:[f.jsxs("div",{className:"setting-label-row",children:[f.jsx("label",{children:"Acordes sobre la letra"}),f.jsxs("span",{children:[n,"%"]})]}),f.jsx("input",{className:"setting-range",type:"range",min:"0.75",max:"1.5",step:"0.05",value:e.chordSize,onChange:o=>r({chordSize:Number(o.target.value)})}),f.jsxs("div",{className:"settings-preview chord-preview",style:{"--preview-font-size":`${e.fontSize}rem`,"--preview-chord-size":`${e.chordSize}rem`},children:[f.jsx("p",{className:"preview-title",children:"Vista previa de acordes"}),f.jsxs("div",{className:"preview-chord-line",children:[f.jsxs("span",{className:"preview-word",children:[f.jsx("span",{className:"preview-chord",children:"Do"}),f.jsx("span",{className:"preview-text",children:"Firmes"})]}),f.jsx("span",{className:"preview-space"}),f.jsxs("span",{className:"preview-word",children:[f.jsx("span",{className:"preview-chord empty-preview-chord",children:"."}),f.jsx("span",{className:"preview-text",children:"y"})]}),f.jsx("span",{className:"preview-space"}),f.jsxs("span",{className:"preview-word",children:[f.jsx("span",{className:"preview-chord",children:"Sol"}),f.jsx("span",{className:"preview-text",children:"adelante"})]})]})]})]}),f.jsx("button",{className:"btn",style:{marginTop:"1rem"},onClick:()=>r({fontSize:Be.fontSize,chordSize:Be.chordSize}),children:"Restablecer tamaños"})]}),f.jsxs("div",{className:"settings-card",children:[f.jsx("h2",{children:"Lectura"}),f.jsxs("div",{className:"toggle-row",children:[f.jsxs("div",{children:[f.jsx("strong",{children:"Mantener pantalla activa"}),f.jsx("p",{children:"Evita que la pantalla se bloquee mientras estás leyendo una alabanza."}),!t&&f.jsx("p",{className:"settings-warning",children:"Tu navegador puede no permitir esta función."})]}),f.jsxs("label",{className:"toggle-switch",children:[f.jsx("input",{type:"checkbox",checked:e.keepAwake,onChange:o=>r({keepAwake:o.target.checked})}),f.jsx("span",{})]})]})]}),f.jsxs("div",{className:"settings-card",children:[f.jsx("h2",{children:"Contacto"}),f.jsx("p",{children:"Para sugerencias, correcciones de letra, errores en acordes o fallas de la aplicación, puedes escribir al correo:"}),f.jsx("a",{className:"contact-link",href:`mailto:${Os}`,children:Os})]}),f.jsxs("div",{className:"settings-card",children:[f.jsx("h2",{children:"Acerca de"}),f.jsxs("div",{className:"about-row",children:[f.jsx("span",{children:"Aplicación"}),f.jsx("strong",{children:"Himnario Digital IPREC"})]}),f.jsxs("div",{className:"about-row",children:[f.jsx("span",{children:"Versión"}),f.jsx("strong",{children:ey})]}),f.jsxs("div",{className:"about-row",children:[f.jsx("span",{children:"Contenido"}),f.jsx("strong",{children:"Himnos, coritos y especiales"})]}),f.jsx("p",{className:"settings-muted",children:"Aplicación creada para apoyar la lectura, búsqueda y acompañamiento musical de alabanzas congregacionales."})]}),f.jsxs("div",{className:"developer-watermark",children:["Desarrollada por ",Zf]})]})]})}function ly(){const[e,r]=ry(),[a,n]=ay();return O.useEffect(()=>{document.documentElement.setAttribute("data-theme",a.theme)},[a.theme]),f.jsx(Pf,{children:f.jsxs("div",{className:"app-container",children:[f.jsxs(Cf,{children:[f.jsx(zr,{path:"/",element:f.jsx(Nn,{title:"Himnario IPREC",filterType:"all"})}),f.jsx(zr,{path:"/favoritos",element:f.jsx(Nn,{title:"Mis Favoritos",filterType:"favorites",favoritesList:e})}),f.jsx(zr,{path:"/especiales-himnario",element:f.jsx(Nn,{title:"Especiales de Himnario",filterType:"hymnal-specials"})}),f.jsx(zr,{path:"/especiales",element:f.jsx(Nn,{title:"Especiales",filterType:"specials"})}),f.jsx(zr,{path:"/ajustes",element:f.jsx(oy,{settings:a,updateSettings:n})}),f.jsx(zr,{path:"/song/:id",element:f.jsx(ty,{favorites:e,toggleFavorite:r,settings:a})})]}),f.jsx(ny,{})]})})}co.createRoot(document.getElementById("root")).render(f.jsx(xs.StrictMode,{children:f.jsx(ly,{})}));
