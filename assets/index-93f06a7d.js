function Lv(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var _o=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Id(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Um={exports:{}},Tl={},Bm={exports:{}},Te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var As=Symbol.for("react.element"),$v=Symbol.for("react.portal"),jv=Symbol.for("react.fragment"),Iv=Symbol.for("react.strict_mode"),Mv=Symbol.for("react.profiler"),zv=Symbol.for("react.provider"),Fv=Symbol.for("react.context"),Uv=Symbol.for("react.forward_ref"),Bv=Symbol.for("react.suspense"),Vv=Symbol.for("react.memo"),Hv=Symbol.for("react.lazy"),cp=Symbol.iterator;function Wv(e){return e===null||typeof e!="object"?null:(e=cp&&e[cp]||e["@@iterator"],typeof e=="function"?e:null)}var Vm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hm=Object.assign,Wm={};function go(e,t,n){this.props=e,this.context=t,this.refs=Wm,this.updater=n||Vm}go.prototype.isReactComponent={};go.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};go.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zm(){}Zm.prototype=go.prototype;function Md(e,t,n){this.props=e,this.context=t,this.refs=Wm,this.updater=n||Vm}var zd=Md.prototype=new Zm;zd.constructor=Md;Hm(zd,go.prototype);zd.isPureReactComponent=!0;var dp=Array.isArray,Gm=Object.prototype.hasOwnProperty,Fd={current:null},Km={key:!0,ref:!0,__self:!0,__source:!0};function Qm(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Gm.call(t,r)&&!Km.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:As,type:e,key:o,ref:s,props:i,_owner:Fd.current}}function Zv(e,t){return{$$typeof:As,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ud(e){return typeof e=="object"&&e!==null&&e.$$typeof===As}function Gv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var fp=/\/+/g;function Pu(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Gv(""+e.key):t.toString(36)}function ga(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case As:case $v:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Pu(s,0):r,dp(i)?(n="",e!=null&&(n=e.replace(fp,"$&/")+"/"),ga(i,t,n,"",function(u){return u})):i!=null&&(Ud(i)&&(i=Zv(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(fp,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",dp(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Pu(o,a);s+=ga(o,t,n,l,i)}else if(l=Wv(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Pu(o,a++),s+=ga(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Ys(e,t,n){if(e==null)return e;var r=[],i=0;return ga(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Kv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Dt={current:null},ya={transition:null},Qv={ReactCurrentDispatcher:Dt,ReactCurrentBatchConfig:ya,ReactCurrentOwner:Fd};Te.Children={map:Ys,forEach:function(e,t,n){Ys(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ys(e,function(){t++}),t},toArray:function(e){return Ys(e,function(t){return t})||[]},only:function(e){if(!Ud(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Te.Component=go;Te.Fragment=jv;Te.Profiler=Mv;Te.PureComponent=Md;Te.StrictMode=Iv;Te.Suspense=Bv;Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qv;Te.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Hm({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Fd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Gm.call(t,l)&&!Km.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:As,type:e.type,key:i,ref:o,props:r,_owner:s}};Te.createContext=function(e){return e={$$typeof:Fv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zv,_context:e},e.Consumer=e};Te.createElement=Qm;Te.createFactory=function(e){var t=Qm.bind(null,e);return t.type=e,t};Te.createRef=function(){return{current:null}};Te.forwardRef=function(e){return{$$typeof:Uv,render:e}};Te.isValidElement=Ud;Te.lazy=function(e){return{$$typeof:Hv,_payload:{_status:-1,_result:e},_init:Kv}};Te.memo=function(e,t){return{$$typeof:Vv,type:e,compare:t===void 0?null:t}};Te.startTransition=function(e){var t=ya.transition;ya.transition={};try{e()}finally{ya.transition=t}};Te.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Te.useCallback=function(e,t){return Dt.current.useCallback(e,t)};Te.useContext=function(e){return Dt.current.useContext(e)};Te.useDebugValue=function(){};Te.useDeferredValue=function(e){return Dt.current.useDeferredValue(e)};Te.useEffect=function(e,t){return Dt.current.useEffect(e,t)};Te.useId=function(){return Dt.current.useId()};Te.useImperativeHandle=function(e,t,n){return Dt.current.useImperativeHandle(e,t,n)};Te.useInsertionEffect=function(e,t){return Dt.current.useInsertionEffect(e,t)};Te.useLayoutEffect=function(e,t){return Dt.current.useLayoutEffect(e,t)};Te.useMemo=function(e,t){return Dt.current.useMemo(e,t)};Te.useReducer=function(e,t,n){return Dt.current.useReducer(e,t,n)};Te.useRef=function(e){return Dt.current.useRef(e)};Te.useState=function(e){return Dt.current.useState(e)};Te.useSyncExternalStore=function(e,t,n){return Dt.current.useSyncExternalStore(e,t,n)};Te.useTransition=function(){return Dt.current.useTransition()};Te.version="18.2.0";Bm.exports=Te;var $=Bm.exports;const jt=Id($),Sc=Lv({__proto__:null,default:jt},[$]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qv=$,Yv=Symbol.for("react.element"),Jv=Symbol.for("react.fragment"),Xv=Object.prototype.hasOwnProperty,ex=qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tx={key:!0,ref:!0,__self:!0,__source:!0};function qm(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Xv.call(t,r)&&!tx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Yv,type:e,key:o,ref:s,props:i,_owner:ex.current}}Tl.Fragment=Jv;Tl.jsx=qm;Tl.jsxs=qm;Um.exports=Tl;var Bd=Um.exports;const yo=Bd.Fragment,f=Bd.jsx,P=Bd.jsxs;var _c={},Ym={exports:{}},Zt={},Jm={exports:{}},Xm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(W,Q){var ce=W.length;W.push(Q);e:for(;0<ce;){var E=ce-1>>>1,k=W[E];if(0<i(k,Q))W[E]=Q,W[ce]=k,ce=E;else break e}}function n(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var Q=W[0],ce=W.pop();if(ce!==Q){W[0]=ce;e:for(var E=0,k=W.length,S=k>>>1;E<S;){var A=2*(E+1)-1,V=W[A],b=A+1,K=W[b];if(0>i(V,ce))b<k&&0>i(K,V)?(W[E]=K,W[b]=ce,E=b):(W[E]=V,W[A]=ce,E=A);else if(b<k&&0>i(K,ce))W[E]=K,W[b]=ce,E=b;else break e}}return Q}function i(W,Q){var ce=W.sortIndex-Q.sortIndex;return ce!==0?ce:W.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,c=null,p=3,w=!1,v=!1,m=!1,R=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(W){for(var Q=n(u);Q!==null;){if(Q.callback===null)r(u);else if(Q.startTime<=W)r(u),Q.sortIndex=Q.expirationTime,t(l,Q);else break;Q=n(u)}}function C(W){if(m=!1,x(W),!v)if(n(l)!==null)v=!0,Ve(T);else{var Q=n(u);Q!==null&&Ne(C,Q.startTime-W)}}function T(W,Q){v=!1,m&&(m=!1,y(Z),Z=-1),w=!0;var ce=p;try{for(x(Q),c=n(l);c!==null&&(!(c.expirationTime>Q)||W&&!Ae());){var E=c.callback;if(typeof E=="function"){c.callback=null,p=c.priorityLevel;var k=E(c.expirationTime<=Q);Q=e.unstable_now(),typeof k=="function"?c.callback=k:c===n(l)&&r(l),x(Q)}else r(l);c=n(l)}if(c!==null)var S=!0;else{var A=n(u);A!==null&&Ne(C,A.startTime-Q),S=!1}return S}finally{c=null,p=ce,w=!1}}var M=!1,z=null,Z=-1,oe=5,ee=-1;function Ae(){return!(e.unstable_now()-ee<oe)}function se(){if(z!==null){var W=e.unstable_now();ee=W;var Q=!0;try{Q=z(!0,W)}finally{Q?ae():(M=!1,z=null)}}else M=!1}var ae;if(typeof h=="function")ae=function(){h(se)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,_e=ve.port2;ve.port1.onmessage=se,ae=function(){_e.postMessage(null)}}else ae=function(){R(se,0)};function Ve(W){z=W,M||(M=!0,ae())}function Ne(W,Q){Z=R(function(){W(e.unstable_now())},Q)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(W){W.callback=null},e.unstable_continueExecution=function(){v||w||(v=!0,Ve(T))},e.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):oe=0<W?Math.floor(1e3/W):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(W){switch(p){case 1:case 2:case 3:var Q=3;break;default:Q=p}var ce=p;p=Q;try{return W()}finally{p=ce}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(W,Q){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ce=p;p=W;try{return Q()}finally{p=ce}},e.unstable_scheduleCallback=function(W,Q,ce){var E=e.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?E+ce:E):ce=E,W){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=ce+k,W={id:d++,callback:Q,priorityLevel:W,startTime:ce,expirationTime:k,sortIndex:-1},ce>E?(W.sortIndex=ce,t(u,W),n(l)===null&&W===n(u)&&(m?(y(Z),Z=-1):m=!0,Ne(C,ce-E))):(W.sortIndex=k,t(l,W),v||w||(v=!0,Ve(T))),W},e.unstable_shouldYield=Ae,e.unstable_wrapCallback=function(W){var Q=p;return function(){var ce=p;p=Q;try{return W.apply(this,arguments)}finally{p=ce}}}})(Xm);Jm.exports=Xm;var nx=Jm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg=$,Wt=nx;function H(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tg=new Set,Xo={};function hi(e,t){no(e,t),no(e+"Capture",t)}function no(e,t){for(Xo[e]=t,e=0;e<t.length;e++)tg.add(t[e])}var er=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kc=Object.prototype.hasOwnProperty,rx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pp={},hp={};function ix(e){return kc.call(hp,e)?!0:kc.call(pp,e)?!1:rx.test(e)?hp[e]=!0:(pp[e]=!0,!1)}function ox(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sx(e,t,n,r){if(t===null||typeof t>"u"||ox(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Nt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){gt[e]=new Nt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];gt[t]=new Nt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){gt[e]=new Nt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){gt[e]=new Nt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){gt[e]=new Nt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){gt[e]=new Nt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){gt[e]=new Nt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){gt[e]=new Nt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){gt[e]=new Nt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Vd=/[\-:]([a-z])/g;function Hd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Vd,Hd);gt[t]=new Nt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Vd,Hd);gt[t]=new Nt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Vd,Hd);gt[t]=new Nt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){gt[e]=new Nt(e,1,!1,e.toLowerCase(),null,!1,!1)});gt.xlinkHref=new Nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){gt[e]=new Nt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wd(e,t,n,r){var i=gt.hasOwnProperty(t)?gt[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sx(t,n,i,r)&&(n=null),r||i===null?ix(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var sr=eg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Js=Symbol.for("react.element"),Ri=Symbol.for("react.portal"),Ti=Symbol.for("react.fragment"),Zd=Symbol.for("react.strict_mode"),Ec=Symbol.for("react.profiler"),ng=Symbol.for("react.provider"),rg=Symbol.for("react.context"),Gd=Symbol.for("react.forward_ref"),bc=Symbol.for("react.suspense"),Cc=Symbol.for("react.suspense_list"),Kd=Symbol.for("react.memo"),fr=Symbol.for("react.lazy"),ig=Symbol.for("react.offscreen"),mp=Symbol.iterator;function ko(e){return e===null||typeof e!="object"?null:(e=mp&&e[mp]||e["@@iterator"],typeof e=="function"?e:null)}var Je=Object.assign,Ru;function Mo(e){if(Ru===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ru=t&&t[1]||""}return`
`+Ru+e}var Tu=!1;function Au(e,t){if(!e||Tu)return"";Tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Tu=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Mo(e):""}function ax(e){switch(e.tag){case 5:return Mo(e.type);case 16:return Mo("Lazy");case 13:return Mo("Suspense");case 19:return Mo("SuspenseList");case 0:case 2:case 15:return e=Au(e.type,!1),e;case 11:return e=Au(e.type.render,!1),e;case 1:return e=Au(e.type,!0),e;default:return""}}function Oc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ti:return"Fragment";case Ri:return"Portal";case Ec:return"Profiler";case Zd:return"StrictMode";case bc:return"Suspense";case Cc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rg:return(e.displayName||"Context")+".Consumer";case ng:return(e._context.displayName||"Context")+".Provider";case Gd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Kd:return t=e.displayName||null,t!==null?t:Oc(e.type)||"Memo";case fr:t=e._payload,e=e._init;try{return Oc(e(t))}catch{}}return null}function lx(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oc(t);case 8:return t===Zd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Tr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function og(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ux(e){var t=og(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Xs(e){e._valueTracker||(e._valueTracker=ux(e))}function sg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=og(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Pc(e,t){var n=t.checked;return Je({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function gp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Tr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ag(e,t){t=t.checked,t!=null&&Wd(e,"checked",t,!1)}function Rc(e,t){ag(e,t);var n=Tr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Tc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Tc(e,t.type,Tr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function yp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Tc(e,t,n){(t!=="number"||Fa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var zo=Array.isArray;function Wi(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Tr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ac(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(H(91));return Je({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(H(92));if(zo(n)){if(1<n.length)throw Error(H(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Tr(n)}}function lg(e,t){var n=Tr(t.value),r=Tr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ug(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ug(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ea,cg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ea=ea||document.createElement("div"),ea.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ea.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function es(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cx=["Webkit","ms","Moz","O"];Object.keys(Bo).forEach(function(e){cx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Bo[t]=Bo[e]})});function dg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Bo.hasOwnProperty(e)&&Bo[e]?(""+t).trim():t+"px"}function fg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=dg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var dx=Je({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nc(e,t){if(t){if(dx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(H(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(H(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(H(61))}if(t.style!=null&&typeof t.style!="object")throw Error(H(62))}}function Lc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $c=null;function Qd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jc=null,Zi=null,Gi=null;function wp(e){if(e=Ls(e)){if(typeof jc!="function")throw Error(H(280));var t=e.stateNode;t&&(t=$l(t),jc(e.stateNode,e.type,t))}}function pg(e){Zi?Gi?Gi.push(e):Gi=[e]:Zi=e}function hg(){if(Zi){var e=Zi,t=Gi;if(Gi=Zi=null,wp(e),t)for(e=0;e<t.length;e++)wp(t[e])}}function mg(e,t){return e(t)}function gg(){}var Du=!1;function yg(e,t,n){if(Du)return e(t,n);Du=!0;try{return mg(e,t,n)}finally{Du=!1,(Zi!==null||Gi!==null)&&(gg(),hg())}}function ts(e,t){var n=e.stateNode;if(n===null)return null;var r=$l(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(H(231,t,typeof n));return n}var Ic=!1;if(er)try{var Eo={};Object.defineProperty(Eo,"passive",{get:function(){Ic=!0}}),window.addEventListener("test",Eo,Eo),window.removeEventListener("test",Eo,Eo)}catch{Ic=!1}function fx(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Vo=!1,Ua=null,Ba=!1,Mc=null,px={onError:function(e){Vo=!0,Ua=e}};function hx(e,t,n,r,i,o,s,a,l){Vo=!1,Ua=null,fx.apply(px,arguments)}function mx(e,t,n,r,i,o,s,a,l){if(hx.apply(this,arguments),Vo){if(Vo){var u=Ua;Vo=!1,Ua=null}else throw Error(H(198));Ba||(Ba=!0,Mc=u)}}function mi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sp(e){if(mi(e)!==e)throw Error(H(188))}function gx(e){var t=e.alternate;if(!t){if(t=mi(e),t===null)throw Error(H(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Sp(i),e;if(o===r)return Sp(i),t;o=o.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?e:t}function xg(e){return e=gx(e),e!==null?wg(e):null}function wg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wg(e);if(t!==null)return t;e=e.sibling}return null}var Sg=Wt.unstable_scheduleCallback,_p=Wt.unstable_cancelCallback,yx=Wt.unstable_shouldYield,vx=Wt.unstable_requestPaint,nt=Wt.unstable_now,xx=Wt.unstable_getCurrentPriorityLevel,qd=Wt.unstable_ImmediatePriority,_g=Wt.unstable_UserBlockingPriority,Va=Wt.unstable_NormalPriority,wx=Wt.unstable_LowPriority,kg=Wt.unstable_IdlePriority,Al=null,$n=null;function Sx(e){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Al,e,void 0,(e.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:Ex,_x=Math.log,kx=Math.LN2;function Ex(e){return e>>>=0,e===0?32:31-(_x(e)/kx|0)|0}var ta=64,na=4194304;function Fo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ha(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Fo(a):(o&=s,o!==0&&(r=Fo(o)))}else s=n&~i,s!==0?r=Fo(s):o!==0&&(r=Fo(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-wn(t),i=1<<n,r|=e[n],t&=~i;return r}function bx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-wn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=bx(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function zc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Eg(){var e=ta;return ta<<=1,!(ta&4194240)&&(ta=64),e}function Nu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ds(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wn(t),e[t]=n}function Ox(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-wn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Yd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-wn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var Fe=0;function bg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Cg,Jd,Og,Pg,Rg,Fc=!1,ra=[],Sr=null,_r=null,kr=null,ns=new Map,rs=new Map,hr=[],Px="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kp(e,t){switch(e){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":kr=null;break;case"pointerover":case"pointerout":ns.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rs.delete(t.pointerId)}}function bo(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ls(t),t!==null&&Jd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Rx(e,t,n,r,i){switch(t){case"focusin":return Sr=bo(Sr,e,t,n,r,i),!0;case"dragenter":return _r=bo(_r,e,t,n,r,i),!0;case"mouseover":return kr=bo(kr,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ns.set(o,bo(ns.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,rs.set(o,bo(rs.get(o)||null,e,t,n,r,i)),!0}return!1}function Tg(e){var t=qr(e.target);if(t!==null){var n=mi(t);if(n!==null){if(t=n.tag,t===13){if(t=vg(n),t!==null){e.blockedOn=t,Rg(e.priority,function(){Og(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function va(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Uc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);$c=r,n.target.dispatchEvent(r),$c=null}else return t=Ls(n),t!==null&&Jd(t),e.blockedOn=n,!1;t.shift()}return!0}function Ep(e,t,n){va(e)&&n.delete(t)}function Tx(){Fc=!1,Sr!==null&&va(Sr)&&(Sr=null),_r!==null&&va(_r)&&(_r=null),kr!==null&&va(kr)&&(kr=null),ns.forEach(Ep),rs.forEach(Ep)}function Co(e,t){e.blockedOn===t&&(e.blockedOn=null,Fc||(Fc=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,Tx)))}function is(e){function t(i){return Co(i,e)}if(0<ra.length){Co(ra[0],e);for(var n=1;n<ra.length;n++){var r=ra[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Sr!==null&&Co(Sr,e),_r!==null&&Co(_r,e),kr!==null&&Co(kr,e),ns.forEach(t),rs.forEach(t),n=0;n<hr.length;n++)r=hr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<hr.length&&(n=hr[0],n.blockedOn===null);)Tg(n),n.blockedOn===null&&hr.shift()}var Ki=sr.ReactCurrentBatchConfig,Wa=!0;function Ax(e,t,n,r){var i=Fe,o=Ki.transition;Ki.transition=null;try{Fe=1,Xd(e,t,n,r)}finally{Fe=i,Ki.transition=o}}function Dx(e,t,n,r){var i=Fe,o=Ki.transition;Ki.transition=null;try{Fe=4,Xd(e,t,n,r)}finally{Fe=i,Ki.transition=o}}function Xd(e,t,n,r){if(Wa){var i=Uc(e,t,n,r);if(i===null)Vu(e,t,r,Za,n),kp(e,r);else if(Rx(i,e,t,n,r))r.stopPropagation();else if(kp(e,r),t&4&&-1<Px.indexOf(e)){for(;i!==null;){var o=Ls(i);if(o!==null&&Cg(o),o=Uc(e,t,n,r),o===null&&Vu(e,t,r,Za,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Vu(e,t,r,null,n)}}var Za=null;function Uc(e,t,n,r){if(Za=null,e=Qd(r),e=qr(e),e!==null)if(t=mi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Za=e,null}function Ag(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xx()){case qd:return 1;case _g:return 4;case Va:case wx:return 16;case kg:return 536870912;default:return 16}default:return 16}}var vr=null,ef=null,xa=null;function Dg(){if(xa)return xa;var e,t=ef,n=t.length,r,i="value"in vr?vr.value:vr.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return xa=i.slice(e,1<r?1-r:void 0)}function wa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ia(){return!0}function bp(){return!1}function Gt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ia:bp,this.isPropagationStopped=bp,this}return Je(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ia)},persist:function(){},isPersistent:ia}),t}var vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tf=Gt(vo),Ns=Je({},vo,{view:0,detail:0}),Nx=Gt(Ns),Lu,$u,Oo,Dl=Je({},Ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oo&&(Oo&&e.type==="mousemove"?(Lu=e.screenX-Oo.screenX,$u=e.screenY-Oo.screenY):$u=Lu=0,Oo=e),Lu)},movementY:function(e){return"movementY"in e?e.movementY:$u}}),Cp=Gt(Dl),Lx=Je({},Dl,{dataTransfer:0}),$x=Gt(Lx),jx=Je({},Ns,{relatedTarget:0}),ju=Gt(jx),Ix=Je({},vo,{animationName:0,elapsedTime:0,pseudoElement:0}),Mx=Gt(Ix),zx=Je({},vo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fx=Gt(zx),Ux=Je({},vo,{data:0}),Op=Gt(Ux),Bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hx[e])?!!t[e]:!1}function nf(){return Wx}var Zx=Je({},Ns,{key:function(e){if(e.key){var t=Bx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(e){return e.type==="keypress"?wa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gx=Gt(Zx),Kx=Je({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=Gt(Kx),Qx=Je({},Ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),qx=Gt(Qx),Yx=Je({},vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jx=Gt(Yx),Xx=Je({},Dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),e1=Gt(Xx),t1=[9,13,27,32],rf=er&&"CompositionEvent"in window,Ho=null;er&&"documentMode"in document&&(Ho=document.documentMode);var n1=er&&"TextEvent"in window&&!Ho,Ng=er&&(!rf||Ho&&8<Ho&&11>=Ho),Rp=String.fromCharCode(32),Tp=!1;function Lg(e,t){switch(e){case"keyup":return t1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $g(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ai=!1;function r1(e,t){switch(e){case"compositionend":return $g(t);case"keypress":return t.which!==32?null:(Tp=!0,Rp);case"textInput":return e=t.data,e===Rp&&Tp?null:e;default:return null}}function i1(e,t){if(Ai)return e==="compositionend"||!rf&&Lg(e,t)?(e=Dg(),xa=ef=vr=null,Ai=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ng&&t.locale!=="ko"?null:t.data;default:return null}}var o1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ap(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!o1[e.type]:t==="textarea"}function jg(e,t,n,r){pg(r),t=Ga(t,"onChange"),0<t.length&&(n=new tf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wo=null,os=null;function s1(e){Gg(e,0)}function Nl(e){var t=Li(e);if(sg(t))return e}function a1(e,t){if(e==="change")return t}var Ig=!1;if(er){var Iu;if(er){var Mu="oninput"in document;if(!Mu){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),Mu=typeof Dp.oninput=="function"}Iu=Mu}else Iu=!1;Ig=Iu&&(!document.documentMode||9<document.documentMode)}function Np(){Wo&&(Wo.detachEvent("onpropertychange",Mg),os=Wo=null)}function Mg(e){if(e.propertyName==="value"&&Nl(os)){var t=[];jg(t,os,e,Qd(e)),yg(s1,t)}}function l1(e,t,n){e==="focusin"?(Np(),Wo=t,os=n,Wo.attachEvent("onpropertychange",Mg)):e==="focusout"&&Np()}function u1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nl(os)}function c1(e,t){if(e==="click")return Nl(t)}function d1(e,t){if(e==="input"||e==="change")return Nl(t)}function f1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var En=typeof Object.is=="function"?Object.is:f1;function ss(e,t){if(En(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!kc.call(t,i)||!En(e[i],t[i]))return!1}return!0}function Lp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $p(e,t){var n=Lp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lp(n)}}function zg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?zg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fg(){for(var e=window,t=Fa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fa(e.document)}return t}function of(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function p1(e){var t=Fg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&zg(n.ownerDocument.documentElement,n)){if(r!==null&&of(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=$p(n,o);var s=$p(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var h1=er&&"documentMode"in document&&11>=document.documentMode,Di=null,Bc=null,Zo=null,Vc=!1;function jp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vc||Di==null||Di!==Fa(r)||(r=Di,"selectionStart"in r&&of(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zo&&ss(Zo,r)||(Zo=r,r=Ga(Bc,"onSelect"),0<r.length&&(t=new tf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Di)))}function oa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ni={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionend:oa("Transition","TransitionEnd")},zu={},Ug={};er&&(Ug=document.createElement("div").style,"AnimationEvent"in window||(delete Ni.animationend.animation,delete Ni.animationiteration.animation,delete Ni.animationstart.animation),"TransitionEvent"in window||delete Ni.transitionend.transition);function Ll(e){if(zu[e])return zu[e];if(!Ni[e])return e;var t=Ni[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ug)return zu[e]=t[n];return e}var Bg=Ll("animationend"),Vg=Ll("animationiteration"),Hg=Ll("animationstart"),Wg=Ll("transitionend"),Zg=new Map,Ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function jr(e,t){Zg.set(e,t),hi(t,[e])}for(var Fu=0;Fu<Ip.length;Fu++){var Uu=Ip[Fu],m1=Uu.toLowerCase(),g1=Uu[0].toUpperCase()+Uu.slice(1);jr(m1,"on"+g1)}jr(Bg,"onAnimationEnd");jr(Vg,"onAnimationIteration");jr(Hg,"onAnimationStart");jr("dblclick","onDoubleClick");jr("focusin","onFocus");jr("focusout","onBlur");jr(Wg,"onTransitionEnd");no("onMouseEnter",["mouseout","mouseover"]);no("onMouseLeave",["mouseout","mouseover"]);no("onPointerEnter",["pointerout","pointerover"]);no("onPointerLeave",["pointerout","pointerover"]);hi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hi("onBeforeInput",["compositionend","keypress","textInput","paste"]);hi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Uo));function Mp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,mx(r,t,void 0,e),e.currentTarget=null}function Gg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Mp(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Mp(i,a,u),o=l}}}if(Ba)throw e=Mc,Ba=!1,Mc=null,e}function We(e,t){var n=t[Kc];n===void 0&&(n=t[Kc]=new Set);var r=e+"__bubble";n.has(r)||(Kg(t,e,2,!1),n.add(r))}function Bu(e,t,n){var r=0;t&&(r|=4),Kg(n,e,r,t)}var sa="_reactListening"+Math.random().toString(36).slice(2);function as(e){if(!e[sa]){e[sa]=!0,tg.forEach(function(n){n!=="selectionchange"&&(y1.has(n)||Bu(n,!1,e),Bu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[sa]||(t[sa]=!0,Bu("selectionchange",!1,t))}}function Kg(e,t,n,r){switch(Ag(t)){case 1:var i=Ax;break;case 4:i=Dx;break;default:i=Xd}n=i.bind(null,t,n,e),i=void 0,!Ic||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Vu(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=qr(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}yg(function(){var u=o,d=Qd(n),c=[];e:{var p=Zg.get(e);if(p!==void 0){var w=tf,v=e;switch(e){case"keypress":if(wa(n)===0)break e;case"keydown":case"keyup":w=Gx;break;case"focusin":v="focus",w=ju;break;case"focusout":v="blur",w=ju;break;case"beforeblur":case"afterblur":w=ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=$x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=qx;break;case Bg:case Vg:case Hg:w=Mx;break;case Wg:w=Jx;break;case"scroll":w=Nx;break;case"wheel":w=e1;break;case"copy":case"cut":case"paste":w=Fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Pp}var m=(t&4)!==0,R=!m&&e==="scroll",y=m?p!==null?p+"Capture":null:p;m=[];for(var h=u,x;h!==null;){x=h;var C=x.stateNode;if(x.tag===5&&C!==null&&(x=C,y!==null&&(C=ts(h,y),C!=null&&m.push(ls(h,C,x)))),R)break;h=h.return}0<m.length&&(p=new w(p,v,null,n,d),c.push({event:p,listeners:m}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==$c&&(v=n.relatedTarget||n.fromElement)&&(qr(v)||v[tr]))break e;if((w||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,w?(v=n.relatedTarget||n.toElement,w=u,v=v?qr(v):null,v!==null&&(R=mi(v),v!==R||v.tag!==5&&v.tag!==6)&&(v=null)):(w=null,v=u),w!==v)){if(m=Cp,C="onMouseLeave",y="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(m=Pp,C="onPointerLeave",y="onPointerEnter",h="pointer"),R=w==null?p:Li(w),x=v==null?p:Li(v),p=new m(C,h+"leave",w,n,d),p.target=R,p.relatedTarget=x,C=null,qr(d)===u&&(m=new m(y,h+"enter",v,n,d),m.target=x,m.relatedTarget=R,C=m),R=C,w&&v)t:{for(m=w,y=v,h=0,x=m;x;x=vi(x))h++;for(x=0,C=y;C;C=vi(C))x++;for(;0<h-x;)m=vi(m),h--;for(;0<x-h;)y=vi(y),x--;for(;h--;){if(m===y||y!==null&&m===y.alternate)break t;m=vi(m),y=vi(y)}m=null}else m=null;w!==null&&zp(c,p,w,m,!1),v!==null&&R!==null&&zp(c,R,v,m,!0)}}e:{if(p=u?Li(u):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var T=a1;else if(Ap(p))if(Ig)T=d1;else{T=u1;var M=l1}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(T=c1);if(T&&(T=T(e,u))){jg(c,T,n,d);break e}M&&M(e,p,u),e==="focusout"&&(M=p._wrapperState)&&M.controlled&&p.type==="number"&&Tc(p,"number",p.value)}switch(M=u?Li(u):window,e){case"focusin":(Ap(M)||M.contentEditable==="true")&&(Di=M,Bc=u,Zo=null);break;case"focusout":Zo=Bc=Di=null;break;case"mousedown":Vc=!0;break;case"contextmenu":case"mouseup":case"dragend":Vc=!1,jp(c,n,d);break;case"selectionchange":if(h1)break;case"keydown":case"keyup":jp(c,n,d)}var z;if(rf)e:{switch(e){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else Ai?Lg(e,n)&&(Z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Z="onCompositionStart");Z&&(Ng&&n.locale!=="ko"&&(Ai||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&Ai&&(z=Dg()):(vr=d,ef="value"in vr?vr.value:vr.textContent,Ai=!0)),M=Ga(u,Z),0<M.length&&(Z=new Op(Z,e,null,n,d),c.push({event:Z,listeners:M}),z?Z.data=z:(z=$g(n),z!==null&&(Z.data=z)))),(z=n1?r1(e,n):i1(e,n))&&(u=Ga(u,"onBeforeInput"),0<u.length&&(d=new Op("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=z))}Gg(c,t)})}function ls(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ga(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ts(e,n),o!=null&&r.unshift(ls(e,o,i)),o=ts(e,t),o!=null&&r.push(ls(e,o,i))),e=e.return}return r}function vi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zp(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ts(n,o),l!=null&&s.unshift(ls(n,l,a))):i||(l=ts(n,o),l!=null&&s.push(ls(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var v1=/\r\n?/g,x1=/\u0000|\uFFFD/g;function Fp(e){return(typeof e=="string"?e:""+e).replace(v1,`
`).replace(x1,"")}function aa(e,t,n){if(t=Fp(t),Fp(e)!==t&&n)throw Error(H(425))}function Ka(){}var Hc=null,Wc=null;function Zc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,w1=typeof clearTimeout=="function"?clearTimeout:void 0,Up=typeof Promise=="function"?Promise:void 0,S1=typeof queueMicrotask=="function"?queueMicrotask:typeof Up<"u"?function(e){return Up.resolve(null).then(e).catch(_1)}:Gc;function _1(e){setTimeout(function(){throw e})}function Hu(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),is(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);is(t)}function Er(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xo=Math.random().toString(36).slice(2),Dn="__reactFiber$"+xo,us="__reactProps$"+xo,tr="__reactContainer$"+xo,Kc="__reactEvents$"+xo,k1="__reactListeners$"+xo,E1="__reactHandles$"+xo;function qr(e){var t=e[Dn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tr]||n[Dn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bp(e);e!==null;){if(n=e[Dn])return n;e=Bp(e)}return t}e=n,n=e.parentNode}return null}function Ls(e){return e=e[Dn]||e[tr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Li(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(H(33))}function $l(e){return e[us]||null}var Qc=[],$i=-1;function Ir(e){return{current:e}}function Ge(e){0>$i||(e.current=Qc[$i],Qc[$i]=null,$i--)}function He(e,t){$i++,Qc[$i]=e.current,e.current=t}var Ar={},kt=Ir(Ar),Mt=Ir(!1),oi=Ar;function ro(e,t){var n=e.type.contextTypes;if(!n)return Ar;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function zt(e){return e=e.childContextTypes,e!=null}function Qa(){Ge(Mt),Ge(kt)}function Vp(e,t,n){if(kt.current!==Ar)throw Error(H(168));He(kt,t),He(Mt,n)}function Qg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(H(108,lx(e)||"Unknown",i));return Je({},n,r)}function qa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ar,oi=kt.current,He(kt,e),He(Mt,Mt.current),!0}function Hp(e,t,n){var r=e.stateNode;if(!r)throw Error(H(169));n?(e=Qg(e,t,oi),r.__reactInternalMemoizedMergedChildContext=e,Ge(Mt),Ge(kt),He(kt,e)):Ge(Mt),He(Mt,n)}var Zn=null,jl=!1,Wu=!1;function qg(e){Zn===null?Zn=[e]:Zn.push(e)}function b1(e){jl=!0,qg(e)}function Mr(){if(!Wu&&Zn!==null){Wu=!0;var e=0,t=Fe;try{var n=Zn;for(Fe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Zn=null,jl=!1}catch(i){throw Zn!==null&&(Zn=Zn.slice(e+1)),Sg(qd,Mr),i}finally{Fe=t,Wu=!1}}return null}var ji=[],Ii=0,Ya=null,Ja=0,nn=[],rn=0,si=null,Gn=1,Kn="";function Gr(e,t){ji[Ii++]=Ja,ji[Ii++]=Ya,Ya=e,Ja=t}function Yg(e,t,n){nn[rn++]=Gn,nn[rn++]=Kn,nn[rn++]=si,si=e;var r=Gn;e=Kn;var i=32-wn(r)-1;r&=~(1<<i),n+=1;var o=32-wn(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Gn=1<<32-wn(t)+i|n<<i|r,Kn=o+e}else Gn=1<<o|n<<i|r,Kn=e}function sf(e){e.return!==null&&(Gr(e,1),Yg(e,1,0))}function af(e){for(;e===Ya;)Ya=ji[--Ii],ji[Ii]=null,Ja=ji[--Ii],ji[Ii]=null;for(;e===si;)si=nn[--rn],nn[rn]=null,Kn=nn[--rn],nn[rn]=null,Gn=nn[--rn],nn[rn]=null}var Ht=null,Vt=null,Ke=!1,yn=null;function Jg(e,t){var n=on(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Wp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ht=e,Vt=Er(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ht=e,Vt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=si!==null?{id:Gn,overflow:Kn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=on(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ht=e,Vt=null,!0):!1;default:return!1}}function qc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yc(e){if(Ke){var t=Vt;if(t){var n=t;if(!Wp(e,t)){if(qc(e))throw Error(H(418));t=Er(n.nextSibling);var r=Ht;t&&Wp(e,t)?Jg(r,n):(e.flags=e.flags&-4097|2,Ke=!1,Ht=e)}}else{if(qc(e))throw Error(H(418));e.flags=e.flags&-4097|2,Ke=!1,Ht=e}}}function Zp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ht=e}function la(e){if(e!==Ht)return!1;if(!Ke)return Zp(e),Ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zc(e.type,e.memoizedProps)),t&&(t=Vt)){if(qc(e))throw Xg(),Error(H(418));for(;t;)Jg(e,t),t=Er(t.nextSibling)}if(Zp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(H(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Vt=Er(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Vt=null}}else Vt=Ht?Er(e.stateNode.nextSibling):null;return!0}function Xg(){for(var e=Vt;e;)e=Er(e.nextSibling)}function io(){Vt=Ht=null,Ke=!1}function lf(e){yn===null?yn=[e]:yn.push(e)}var C1=sr.ReactCurrentBatchConfig;function mn(e,t){if(e&&e.defaultProps){t=Je({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Xa=Ir(null),el=null,Mi=null,uf=null;function cf(){uf=Mi=el=null}function df(e){var t=Xa.current;Ge(Xa),e._currentValue=t}function Jc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Qi(e,t){el=e,uf=Mi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(It=!0),e.firstContext=null)}function ln(e){var t=e._currentValue;if(uf!==e)if(e={context:e,memoizedValue:t,next:null},Mi===null){if(el===null)throw Error(H(308));Mi=e,el.dependencies={lanes:0,firstContext:e}}else Mi=Mi.next=e;return t}var Yr=null;function ff(e){Yr===null?Yr=[e]:Yr.push(e)}function ey(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ff(t)):(n.next=i.next,i.next=n),t.interleaved=n,nr(e,r)}function nr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var pr=!1;function pf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ty(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function qn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function br(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,je&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,nr(e,n)}return i=r.interleaved,i===null?(t.next=t,ff(r)):(t.next=i.next,i.next=t),r.interleaved=t,nr(e,n)}function Sa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yd(e,n)}}function Gp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function tl(e,t,n,r){var i=e.updateQueue;pr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var c=i.baseState;s=0,d=u=l=null,a=o;do{var p=a.lane,w=a.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,m=a;switch(p=t,w=n,m.tag){case 1:if(v=m.payload,typeof v=="function"){c=v.call(w,c,p);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=m.payload,p=typeof v=="function"?v.call(w,c,p):v,p==null)break e;c=Je({},c,p);break e;case 2:pr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else w={eventTime:w,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=w,l=c):d=d.next=w,s|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);li|=s,e.lanes=s,e.memoizedState=c}}function Kp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var ny=new eg.Component().refs;function Xc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Je({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Il={isMounted:function(e){return(e=e._reactInternals)?mi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Tt(),i=Or(e),o=qn(r,i);o.payload=t,n!=null&&(o.callback=n),t=br(e,o,i),t!==null&&(Sn(t,e,i,r),Sa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Tt(),i=Or(e),o=qn(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=br(e,o,i),t!==null&&(Sn(t,e,i,r),Sa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Tt(),r=Or(e),i=qn(n,r);i.tag=2,t!=null&&(i.callback=t),t=br(e,i,r),t!==null&&(Sn(t,e,r,n),Sa(t,e,r))}};function Qp(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!ss(n,r)||!ss(i,o):!0}function ry(e,t,n){var r=!1,i=Ar,o=t.contextType;return typeof o=="object"&&o!==null?o=ln(o):(i=zt(t)?oi:kt.current,r=t.contextTypes,o=(r=r!=null)?ro(e,i):Ar),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Il,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function qp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Il.enqueueReplaceState(t,t.state,null)}function ed(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=ny,pf(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ln(o):(o=zt(t)?oi:kt.current,i.context=ro(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Xc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Il.enqueueReplaceState(i,i.state,null),tl(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Po(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===ny&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,e))}return e}function ua(e,t){throw e=Object.prototype.toString.call(t),Error(H(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Yp(e){var t=e._init;return t(e._payload)}function iy(e){function t(y,h){if(e){var x=y.deletions;x===null?(y.deletions=[h],y.flags|=16):x.push(h)}}function n(y,h){if(!e)return null;for(;h!==null;)t(y,h),h=h.sibling;return null}function r(y,h){for(y=new Map;h!==null;)h.key!==null?y.set(h.key,h):y.set(h.index,h),h=h.sibling;return y}function i(y,h){return y=Pr(y,h),y.index=0,y.sibling=null,y}function o(y,h,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<h?(y.flags|=2,h):x):(y.flags|=2,h)):(y.flags|=1048576,h)}function s(y){return e&&y.alternate===null&&(y.flags|=2),y}function a(y,h,x,C){return h===null||h.tag!==6?(h=Ju(x,y.mode,C),h.return=y,h):(h=i(h,x),h.return=y,h)}function l(y,h,x,C){var T=x.type;return T===Ti?d(y,h,x.props.children,C,x.key):h!==null&&(h.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===fr&&Yp(T)===h.type)?(C=i(h,x.props),C.ref=Po(y,h,x),C.return=y,C):(C=Oa(x.type,x.key,x.props,null,y.mode,C),C.ref=Po(y,h,x),C.return=y,C)}function u(y,h,x,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==x.containerInfo||h.stateNode.implementation!==x.implementation?(h=Xu(x,y.mode,C),h.return=y,h):(h=i(h,x.children||[]),h.return=y,h)}function d(y,h,x,C,T){return h===null||h.tag!==7?(h=ri(x,y.mode,C,T),h.return=y,h):(h=i(h,x),h.return=y,h)}function c(y,h,x){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ju(""+h,y.mode,x),h.return=y,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Js:return x=Oa(h.type,h.key,h.props,null,y.mode,x),x.ref=Po(y,null,h),x.return=y,x;case Ri:return h=Xu(h,y.mode,x),h.return=y,h;case fr:var C=h._init;return c(y,C(h._payload),x)}if(zo(h)||ko(h))return h=ri(h,y.mode,x,null),h.return=y,h;ua(y,h)}return null}function p(y,h,x,C){var T=h!==null?h.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:a(y,h,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Js:return x.key===T?l(y,h,x,C):null;case Ri:return x.key===T?u(y,h,x,C):null;case fr:return T=x._init,p(y,h,T(x._payload),C)}if(zo(x)||ko(x))return T!==null?null:d(y,h,x,C,null);ua(y,x)}return null}function w(y,h,x,C,T){if(typeof C=="string"&&C!==""||typeof C=="number")return y=y.get(x)||null,a(h,y,""+C,T);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Js:return y=y.get(C.key===null?x:C.key)||null,l(h,y,C,T);case Ri:return y=y.get(C.key===null?x:C.key)||null,u(h,y,C,T);case fr:var M=C._init;return w(y,h,x,M(C._payload),T)}if(zo(C)||ko(C))return y=y.get(x)||null,d(h,y,C,T,null);ua(h,C)}return null}function v(y,h,x,C){for(var T=null,M=null,z=h,Z=h=0,oe=null;z!==null&&Z<x.length;Z++){z.index>Z?(oe=z,z=null):oe=z.sibling;var ee=p(y,z,x[Z],C);if(ee===null){z===null&&(z=oe);break}e&&z&&ee.alternate===null&&t(y,z),h=o(ee,h,Z),M===null?T=ee:M.sibling=ee,M=ee,z=oe}if(Z===x.length)return n(y,z),Ke&&Gr(y,Z),T;if(z===null){for(;Z<x.length;Z++)z=c(y,x[Z],C),z!==null&&(h=o(z,h,Z),M===null?T=z:M.sibling=z,M=z);return Ke&&Gr(y,Z),T}for(z=r(y,z);Z<x.length;Z++)oe=w(z,y,Z,x[Z],C),oe!==null&&(e&&oe.alternate!==null&&z.delete(oe.key===null?Z:oe.key),h=o(oe,h,Z),M===null?T=oe:M.sibling=oe,M=oe);return e&&z.forEach(function(Ae){return t(y,Ae)}),Ke&&Gr(y,Z),T}function m(y,h,x,C){var T=ko(x);if(typeof T!="function")throw Error(H(150));if(x=T.call(x),x==null)throw Error(H(151));for(var M=T=null,z=h,Z=h=0,oe=null,ee=x.next();z!==null&&!ee.done;Z++,ee=x.next()){z.index>Z?(oe=z,z=null):oe=z.sibling;var Ae=p(y,z,ee.value,C);if(Ae===null){z===null&&(z=oe);break}e&&z&&Ae.alternate===null&&t(y,z),h=o(Ae,h,Z),M===null?T=Ae:M.sibling=Ae,M=Ae,z=oe}if(ee.done)return n(y,z),Ke&&Gr(y,Z),T;if(z===null){for(;!ee.done;Z++,ee=x.next())ee=c(y,ee.value,C),ee!==null&&(h=o(ee,h,Z),M===null?T=ee:M.sibling=ee,M=ee);return Ke&&Gr(y,Z),T}for(z=r(y,z);!ee.done;Z++,ee=x.next())ee=w(z,y,Z,ee.value,C),ee!==null&&(e&&ee.alternate!==null&&z.delete(ee.key===null?Z:ee.key),h=o(ee,h,Z),M===null?T=ee:M.sibling=ee,M=ee);return e&&z.forEach(function(se){return t(y,se)}),Ke&&Gr(y,Z),T}function R(y,h,x,C){if(typeof x=="object"&&x!==null&&x.type===Ti&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Js:e:{for(var T=x.key,M=h;M!==null;){if(M.key===T){if(T=x.type,T===Ti){if(M.tag===7){n(y,M.sibling),h=i(M,x.props.children),h.return=y,y=h;break e}}else if(M.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===fr&&Yp(T)===M.type){n(y,M.sibling),h=i(M,x.props),h.ref=Po(y,M,x),h.return=y,y=h;break e}n(y,M);break}else t(y,M);M=M.sibling}x.type===Ti?(h=ri(x.props.children,y.mode,C,x.key),h.return=y,y=h):(C=Oa(x.type,x.key,x.props,null,y.mode,C),C.ref=Po(y,h,x),C.return=y,y=C)}return s(y);case Ri:e:{for(M=x.key;h!==null;){if(h.key===M)if(h.tag===4&&h.stateNode.containerInfo===x.containerInfo&&h.stateNode.implementation===x.implementation){n(y,h.sibling),h=i(h,x.children||[]),h.return=y,y=h;break e}else{n(y,h);break}else t(y,h);h=h.sibling}h=Xu(x,y.mode,C),h.return=y,y=h}return s(y);case fr:return M=x._init,R(y,h,M(x._payload),C)}if(zo(x))return v(y,h,x,C);if(ko(x))return m(y,h,x,C);ua(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,h!==null&&h.tag===6?(n(y,h.sibling),h=i(h,x),h.return=y,y=h):(n(y,h),h=Ju(x,y.mode,C),h.return=y,y=h),s(y)):n(y,h)}return R}var oo=iy(!0),oy=iy(!1),$s={},jn=Ir($s),cs=Ir($s),ds=Ir($s);function Jr(e){if(e===$s)throw Error(H(174));return e}function hf(e,t){switch(He(ds,t),He(cs,e),He(jn,$s),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Dc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Dc(t,e)}Ge(jn),He(jn,t)}function so(){Ge(jn),Ge(cs),Ge(ds)}function sy(e){Jr(ds.current);var t=Jr(jn.current),n=Dc(t,e.type);t!==n&&(He(cs,e),He(jn,n))}function mf(e){cs.current===e&&(Ge(jn),Ge(cs))}var qe=Ir(0);function nl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zu=[];function gf(){for(var e=0;e<Zu.length;e++)Zu[e]._workInProgressVersionPrimary=null;Zu.length=0}var _a=sr.ReactCurrentDispatcher,Gu=sr.ReactCurrentBatchConfig,ai=0,Ye=null,st=null,ct=null,rl=!1,Go=!1,fs=0,O1=0;function xt(){throw Error(H(321))}function yf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!En(e[n],t[n]))return!1;return!0}function vf(e,t,n,r,i,o){if(ai=o,Ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_a.current=e===null||e.memoizedState===null?A1:D1,e=n(r,i),Go){o=0;do{if(Go=!1,fs=0,25<=o)throw Error(H(301));o+=1,ct=st=null,t.updateQueue=null,_a.current=N1,e=n(r,i)}while(Go)}if(_a.current=il,t=st!==null&&st.next!==null,ai=0,ct=st=Ye=null,rl=!1,t)throw Error(H(300));return e}function xf(){var e=fs!==0;return fs=0,e}function Tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?Ye.memoizedState=ct=e:ct=ct.next=e,ct}function un(){if(st===null){var e=Ye.alternate;e=e!==null?e.memoizedState:null}else e=st.next;var t=ct===null?Ye.memoizedState:ct.next;if(t!==null)ct=t,st=e;else{if(e===null)throw Error(H(310));st=e,e={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},ct===null?Ye.memoizedState=ct=e:ct=ct.next=e}return ct}function ps(e,t){return typeof t=="function"?t(e):t}function Ku(e){var t=un(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var r=st,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((ai&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,s=r):l=l.next=c,Ye.lanes|=d,li|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,En(r,t.memoizedState)||(It=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Ye.lanes|=o,li|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qu(e){var t=un(),n=t.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);En(o,t.memoizedState)||(It=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ay(){}function ly(e,t){var n=Ye,r=un(),i=t(),o=!En(r.memoizedState,i);if(o&&(r.memoizedState=i,It=!0),r=r.queue,wf(dy.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ct!==null&&ct.memoizedState.tag&1){if(n.flags|=2048,hs(9,cy.bind(null,n,r,i,t),void 0,null),dt===null)throw Error(H(349));ai&30||uy(n,t,i)}return i}function uy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ye.updateQueue,t===null?(t={lastEffect:null,stores:null},Ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cy(e,t,n,r){t.value=n,t.getSnapshot=r,fy(t)&&py(e)}function dy(e,t,n){return n(function(){fy(t)&&py(e)})}function fy(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!En(e,n)}catch{return!0}}function py(e){var t=nr(e,1);t!==null&&Sn(t,e,1,-1)}function Jp(e){var t=Tn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:e},t.queue=e,e=e.dispatch=T1.bind(null,Ye,e),[t.memoizedState,e]}function hs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ye.updateQueue,t===null?(t={lastEffect:null,stores:null},Ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hy(){return un().memoizedState}function ka(e,t,n,r){var i=Tn();Ye.flags|=e,i.memoizedState=hs(1|t,n,void 0,r===void 0?null:r)}function Ml(e,t,n,r){var i=un();r=r===void 0?null:r;var o=void 0;if(st!==null){var s=st.memoizedState;if(o=s.destroy,r!==null&&yf(r,s.deps)){i.memoizedState=hs(t,n,o,r);return}}Ye.flags|=e,i.memoizedState=hs(1|t,n,o,r)}function Xp(e,t){return ka(8390656,8,e,t)}function wf(e,t){return Ml(2048,8,e,t)}function my(e,t){return Ml(4,2,e,t)}function gy(e,t){return Ml(4,4,e,t)}function yy(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vy(e,t,n){return n=n!=null?n.concat([e]):null,Ml(4,4,yy.bind(null,t,e),n)}function Sf(){}function xy(e,t){var n=un();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wy(e,t){var n=un();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Sy(e,t,n){return ai&21?(En(n,t)||(n=Eg(),Ye.lanes|=n,li|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,It=!0),e.memoizedState=n)}function P1(e,t){var n=Fe;Fe=n!==0&&4>n?n:4,e(!0);var r=Gu.transition;Gu.transition={};try{e(!1),t()}finally{Fe=n,Gu.transition=r}}function _y(){return un().memoizedState}function R1(e,t,n){var r=Or(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ky(e))Ey(t,n);else if(n=ey(e,t,n,r),n!==null){var i=Tt();Sn(n,e,r,i),by(n,t,r)}}function T1(e,t,n){var r=Or(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ky(e))Ey(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,En(a,s)){var l=t.interleaved;l===null?(i.next=i,ff(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=ey(e,t,i,r),n!==null&&(i=Tt(),Sn(n,e,r,i),by(n,t,r))}}function ky(e){var t=e.alternate;return e===Ye||t!==null&&t===Ye}function Ey(e,t){Go=rl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function by(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yd(e,n)}}var il={readContext:ln,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},A1={readContext:ln,useCallback:function(e,t){return Tn().memoizedState=[e,t===void 0?null:t],e},useContext:ln,useEffect:Xp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ka(4194308,4,yy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ka(4194308,4,e,t)},useInsertionEffect:function(e,t){return ka(4,2,e,t)},useMemo:function(e,t){var n=Tn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Tn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=R1.bind(null,Ye,e),[r.memoizedState,e]},useRef:function(e){var t=Tn();return e={current:e},t.memoizedState=e},useState:Jp,useDebugValue:Sf,useDeferredValue:function(e){return Tn().memoizedState=e},useTransition:function(){var e=Jp(!1),t=e[0];return e=P1.bind(null,e[1]),Tn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ye,i=Tn();if(Ke){if(n===void 0)throw Error(H(407));n=n()}else{if(n=t(),dt===null)throw Error(H(349));ai&30||uy(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Xp(dy.bind(null,r,o,e),[e]),r.flags|=2048,hs(9,cy.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Tn(),t=dt.identifierPrefix;if(Ke){var n=Kn,r=Gn;n=(r&~(1<<32-wn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=O1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},D1={readContext:ln,useCallback:xy,useContext:ln,useEffect:wf,useImperativeHandle:vy,useInsertionEffect:my,useLayoutEffect:gy,useMemo:wy,useReducer:Ku,useRef:hy,useState:function(){return Ku(ps)},useDebugValue:Sf,useDeferredValue:function(e){var t=un();return Sy(t,st.memoizedState,e)},useTransition:function(){var e=Ku(ps)[0],t=un().memoizedState;return[e,t]},useMutableSource:ay,useSyncExternalStore:ly,useId:_y,unstable_isNewReconciler:!1},N1={readContext:ln,useCallback:xy,useContext:ln,useEffect:wf,useImperativeHandle:vy,useInsertionEffect:my,useLayoutEffect:gy,useMemo:wy,useReducer:Qu,useRef:hy,useState:function(){return Qu(ps)},useDebugValue:Sf,useDeferredValue:function(e){var t=un();return st===null?t.memoizedState=e:Sy(t,st.memoizedState,e)},useTransition:function(){var e=Qu(ps)[0],t=un().memoizedState;return[e,t]},useMutableSource:ay,useSyncExternalStore:ly,useId:_y,unstable_isNewReconciler:!1};function ao(e,t){try{var n="",r=t;do n+=ax(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function qu(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function td(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var L1=typeof WeakMap=="function"?WeakMap:Map;function Cy(e,t,n){n=qn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sl||(sl=!0,dd=r),td(e,t)},n}function Oy(e,t,n){n=qn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){td(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){td(e,t),typeof r!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function eh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new L1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=K1.bind(null,e,t,n),t.then(e,e))}function th(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function nh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=qn(-1,1),t.tag=2,br(n,t,1))),n.lanes|=1),e)}var $1=sr.ReactCurrentOwner,It=!1;function Pt(e,t,n,r){t.child=e===null?oy(t,null,n,r):oo(t,e.child,n,r)}function rh(e,t,n,r,i){n=n.render;var o=t.ref;return Qi(t,i),r=vf(e,t,n,r,o,i),n=xf(),e!==null&&!It?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rr(e,t,i)):(Ke&&n&&sf(t),t.flags|=1,Pt(e,t,r,i),t.child)}function ih(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Rf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Py(e,t,o,r,i)):(e=Oa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ss,n(s,r)&&e.ref===t.ref)return rr(e,t,i)}return t.flags|=1,e=Pr(o,r),e.ref=t.ref,e.return=t,t.child=e}function Py(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ss(o,r)&&e.ref===t.ref)if(It=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(It=!0);else return t.lanes=e.lanes,rr(e,t,i)}return nd(e,t,n,r,i)}function Ry(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(Fi,Bt),Bt|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,He(Fi,Bt),Bt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,He(Fi,Bt),Bt|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,He(Fi,Bt),Bt|=r;return Pt(e,t,i,n),t.child}function Ty(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function nd(e,t,n,r,i){var o=zt(n)?oi:kt.current;return o=ro(t,o),Qi(t,i),n=vf(e,t,n,r,o,i),r=xf(),e!==null&&!It?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rr(e,t,i)):(Ke&&r&&sf(t),t.flags|=1,Pt(e,t,n,i),t.child)}function oh(e,t,n,r,i){if(zt(n)){var o=!0;qa(t)}else o=!1;if(Qi(t,i),t.stateNode===null)Ea(e,t),ry(t,n,r),ed(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ln(u):(u=zt(n)?oi:kt.current,u=ro(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&qp(t,s,r,u),pr=!1;var p=t.memoizedState;s.state=p,tl(t,r,s,i),l=t.memoizedState,a!==r||p!==l||Mt.current||pr?(typeof d=="function"&&(Xc(t,n,d,r),l=t.memoizedState),(a=pr||Qp(t,n,a,r,p,l,u))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ty(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:mn(t.type,a),s.props=u,c=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ln(l):(l=zt(n)?oi:kt.current,l=ro(t,l));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==c||p!==l)&&qp(t,s,r,l),pr=!1,p=t.memoizedState,s.state=p,tl(t,r,s,i);var v=t.memoizedState;a!==c||p!==v||Mt.current||pr?(typeof w=="function"&&(Xc(t,n,w,r),v=t.memoizedState),(u=pr||Qp(t,n,u,r,p,v,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return rd(e,t,n,r,o,i)}function rd(e,t,n,r,i,o){Ty(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Hp(t,n,!1),rr(e,t,o);r=t.stateNode,$1.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=oo(t,e.child,null,o),t.child=oo(t,null,a,o)):Pt(e,t,a,o),t.memoizedState=r.state,i&&Hp(t,n,!0),t.child}function Ay(e){var t=e.stateNode;t.pendingContext?Vp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vp(e,t.context,!1),hf(e,t.containerInfo)}function sh(e,t,n,r,i){return io(),lf(i),t.flags|=256,Pt(e,t,n,r),t.child}var id={dehydrated:null,treeContext:null,retryLane:0};function od(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dy(e,t,n){var r=t.pendingProps,i=qe.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),He(qe,i&1),e===null)return Yc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ul(s,r,0,null),e=ri(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=od(n),t.memoizedState=id,e):_f(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return j1(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Pr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Pr(a,o):(o=ri(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?od(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=id,r}return o=e.child,e=o.sibling,r=Pr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function _f(e,t){return t=Ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ca(e,t,n,r){return r!==null&&lf(r),oo(t,e.child,null,n),e=_f(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function j1(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=qu(Error(H(422))),ca(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Ul({mode:"visible",children:r.children},i,0,null),o=ri(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&oo(t,e.child,null,s),t.child.memoizedState=od(s),t.memoizedState=id,o);if(!(t.mode&1))return ca(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(H(419)),r=qu(o,r,void 0),ca(e,t,s,r)}if(a=(s&e.childLanes)!==0,It||a){if(r=dt,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,nr(e,i),Sn(r,e,i,-1))}return Pf(),r=qu(Error(H(421))),ca(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Q1.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Vt=Er(i.nextSibling),Ht=t,Ke=!0,yn=null,e!==null&&(nn[rn++]=Gn,nn[rn++]=Kn,nn[rn++]=si,Gn=e.id,Kn=e.overflow,si=t),t=_f(t,r.children),t.flags|=4096,t)}function ah(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Jc(e.return,t,n)}function Yu(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ny(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Pt(e,t,r.children,n),r=qe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ah(e,n,t);else if(e.tag===19)ah(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(He(qe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&nl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Yu(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&nl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Yu(t,!0,n,null,o);break;case"together":Yu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ea(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),li|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(H(153));if(t.child!==null){for(e=t.child,n=Pr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function I1(e,t,n){switch(t.tag){case 3:Ay(t),io();break;case 5:sy(t);break;case 1:zt(t.type)&&qa(t);break;case 4:hf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;He(Xa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(He(qe,qe.current&1),t.flags|=128,null):n&t.child.childLanes?Dy(e,t,n):(He(qe,qe.current&1),e=rr(e,t,n),e!==null?e.sibling:null);He(qe,qe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ny(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),He(qe,qe.current),r)break;return null;case 22:case 23:return t.lanes=0,Ry(e,t,n)}return rr(e,t,n)}var Ly,sd,$y,jy;Ly=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sd=function(){};$y=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Jr(jn.current);var o=null;switch(n){case"input":i=Pc(e,i),r=Pc(e,r),o=[];break;case"select":i=Je({},i,{value:void 0}),r=Je({},r,{value:void 0}),o=[];break;case"textarea":i=Ac(e,i),r=Ac(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ka)}Nc(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Xo.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Xo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&We("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};jy=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ro(e,t){if(!Ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function wt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function M1(e,t,n){var r=t.pendingProps;switch(af(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(t),null;case 1:return zt(t.type)&&Qa(),wt(t),null;case 3:return r=t.stateNode,so(),Ge(Mt),Ge(kt),gf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(la(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yn!==null&&(hd(yn),yn=null))),sd(e,t),wt(t),null;case 5:mf(t);var i=Jr(ds.current);if(n=t.type,e!==null&&t.stateNode!=null)$y(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(H(166));return wt(t),null}if(e=Jr(jn.current),la(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Dn]=t,r[us]=o,e=(t.mode&1)!==0,n){case"dialog":We("cancel",r),We("close",r);break;case"iframe":case"object":case"embed":We("load",r);break;case"video":case"audio":for(i=0;i<Uo.length;i++)We(Uo[i],r);break;case"source":We("error",r);break;case"img":case"image":case"link":We("error",r),We("load",r);break;case"details":We("toggle",r);break;case"input":gp(r,o),We("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},We("invalid",r);break;case"textarea":vp(r,o),We("invalid",r)}Nc(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&aa(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&aa(r.textContent,a,e),i=["children",""+a]):Xo.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&We("scroll",r)}switch(n){case"input":Xs(r),yp(r,o,!0);break;case"textarea":Xs(r),xp(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ka)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ug(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Dn]=t,e[us]=r,Ly(e,t,!1,!1),t.stateNode=e;e:{switch(s=Lc(n,r),n){case"dialog":We("cancel",e),We("close",e),i=r;break;case"iframe":case"object":case"embed":We("load",e),i=r;break;case"video":case"audio":for(i=0;i<Uo.length;i++)We(Uo[i],e);i=r;break;case"source":We("error",e),i=r;break;case"img":case"image":case"link":We("error",e),We("load",e),i=r;break;case"details":We("toggle",e),i=r;break;case"input":gp(e,r),i=Pc(e,r),We("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Je({},r,{value:void 0}),We("invalid",e);break;case"textarea":vp(e,r),i=Ac(e,r),We("invalid",e);break;default:i=r}Nc(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?fg(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&cg(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&es(e,l):typeof l=="number"&&es(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Xo.hasOwnProperty(o)?l!=null&&o==="onScroll"&&We("scroll",e):l!=null&&Wd(e,o,l,s))}switch(n){case"input":Xs(e),yp(e,r,!1);break;case"textarea":Xs(e),xp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Tr(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Wi(e,!!r.multiple,o,!1):r.defaultValue!=null&&Wi(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ka)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return wt(t),null;case 6:if(e&&t.stateNode!=null)jy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(H(166));if(n=Jr(ds.current),Jr(jn.current),la(t)){if(r=t.stateNode,n=t.memoizedProps,r[Dn]=t,(o=r.nodeValue!==n)&&(e=Ht,e!==null))switch(e.tag){case 3:aa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&aa(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dn]=t,t.stateNode=r}return wt(t),null;case 13:if(Ge(qe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ke&&Vt!==null&&t.mode&1&&!(t.flags&128))Xg(),io(),t.flags|=98560,o=!1;else if(o=la(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(H(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(H(317));o[Dn]=t}else io(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;wt(t),o=!1}else yn!==null&&(hd(yn),yn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||qe.current&1?at===0&&(at=3):Pf())),t.updateQueue!==null&&(t.flags|=4),wt(t),null);case 4:return so(),sd(e,t),e===null&&as(t.stateNode.containerInfo),wt(t),null;case 10:return df(t.type._context),wt(t),null;case 17:return zt(t.type)&&Qa(),wt(t),null;case 19:if(Ge(qe),o=t.memoizedState,o===null)return wt(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Ro(o,!1);else{if(at!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=nl(e),s!==null){for(t.flags|=128,Ro(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return He(qe,qe.current&1|2),t.child}e=e.sibling}o.tail!==null&&nt()>lo&&(t.flags|=128,r=!0,Ro(o,!1),t.lanes=4194304)}else{if(!r)if(e=nl(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ro(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ke)return wt(t),null}else 2*nt()-o.renderingStartTime>lo&&n!==1073741824&&(t.flags|=128,r=!0,Ro(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=nt(),t.sibling=null,n=qe.current,He(qe,r?n&1|2:n&1),t):(wt(t),null);case 22:case 23:return Of(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Bt&1073741824&&(wt(t),t.subtreeFlags&6&&(t.flags|=8192)):wt(t),null;case 24:return null;case 25:return null}throw Error(H(156,t.tag))}function z1(e,t){switch(af(t),t.tag){case 1:return zt(t.type)&&Qa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return so(),Ge(Mt),Ge(kt),gf(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return mf(t),null;case 13:if(Ge(qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(H(340));io()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ge(qe),null;case 4:return so(),null;case 10:return df(t.type._context),null;case 22:case 23:return Of(),null;case 24:return null;default:return null}}var da=!1,_t=!1,F1=typeof WeakSet=="function"?WeakSet:Set,ne=null;function zi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Xe(e,t,r)}else n.current=null}function ad(e,t,n){try{n()}catch(r){Xe(e,t,r)}}var lh=!1;function U1(e,t){if(Hc=Wa,e=Fg(),of(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,c=e,p=null;t:for(;;){for(var w;c!==n||i!==0&&c.nodeType!==3||(a=s+i),c!==o||r!==0&&c.nodeType!==3||(l=s+r),c.nodeType===3&&(s+=c.nodeValue.length),(w=c.firstChild)!==null;)p=c,c=w;for(;;){if(c===e)break t;if(p===n&&++u===i&&(a=s),p===o&&++d===r&&(l=s),(w=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=w}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wc={focusedElem:e,selectionRange:n},Wa=!1,ne=t;ne!==null;)if(t=ne,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ne=e;else for(;ne!==null;){t=ne;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var m=v.memoizedProps,R=v.memoizedState,y=t.stateNode,h=y.getSnapshotBeforeUpdate(t.elementType===t.type?m:mn(t.type,m),R);y.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(C){Xe(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,ne=e;break}ne=t.return}return v=lh,lh=!1,v}function Ko(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ad(t,n,o)}i=i.next}while(i!==r)}}function zl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ld(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Iy(e){var t=e.alternate;t!==null&&(e.alternate=null,Iy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dn],delete t[us],delete t[Kc],delete t[k1],delete t[E1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function My(e){return e.tag===5||e.tag===3||e.tag===4}function uh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||My(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ud(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ka));else if(r!==4&&(e=e.child,e!==null))for(ud(e,t,n),e=e.sibling;e!==null;)ud(e,t,n),e=e.sibling}function cd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(cd(e,t,n),e=e.sibling;e!==null;)cd(e,t,n),e=e.sibling}var ht=null,gn=!1;function ar(e,t,n){for(n=n.child;n!==null;)zy(e,t,n),n=n.sibling}function zy(e,t,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Al,n)}catch{}switch(n.tag){case 5:_t||zi(n,t);case 6:var r=ht,i=gn;ht=null,ar(e,t,n),ht=r,gn=i,ht!==null&&(gn?(e=ht,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ht.removeChild(n.stateNode));break;case 18:ht!==null&&(gn?(e=ht,n=n.stateNode,e.nodeType===8?Hu(e.parentNode,n):e.nodeType===1&&Hu(e,n),is(e)):Hu(ht,n.stateNode));break;case 4:r=ht,i=gn,ht=n.stateNode.containerInfo,gn=!0,ar(e,t,n),ht=r,gn=i;break;case 0:case 11:case 14:case 15:if(!_t&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ad(n,t,s),i=i.next}while(i!==r)}ar(e,t,n);break;case 1:if(!_t&&(zi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Xe(n,t,a)}ar(e,t,n);break;case 21:ar(e,t,n);break;case 22:n.mode&1?(_t=(r=_t)||n.memoizedState!==null,ar(e,t,n),_t=r):ar(e,t,n);break;default:ar(e,t,n)}}function ch(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new F1),t.forEach(function(r){var i=q1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ht=a.stateNode,gn=!1;break e;case 3:ht=a.stateNode.containerInfo,gn=!0;break e;case 4:ht=a.stateNode.containerInfo,gn=!0;break e}a=a.return}if(ht===null)throw Error(H(160));zy(o,s,i),ht=null,gn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Xe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fy(t,e),t=t.sibling}function Fy(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pn(t,e),Rn(e),r&4){try{Ko(3,e,e.return),zl(3,e)}catch(m){Xe(e,e.return,m)}try{Ko(5,e,e.return)}catch(m){Xe(e,e.return,m)}}break;case 1:pn(t,e),Rn(e),r&512&&n!==null&&zi(n,n.return);break;case 5:if(pn(t,e),Rn(e),r&512&&n!==null&&zi(n,n.return),e.flags&32){var i=e.stateNode;try{es(i,"")}catch(m){Xe(e,e.return,m)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ag(i,o),Lc(a,s);var u=Lc(a,o);for(s=0;s<l.length;s+=2){var d=l[s],c=l[s+1];d==="style"?fg(i,c):d==="dangerouslySetInnerHTML"?cg(i,c):d==="children"?es(i,c):Wd(i,d,c,u)}switch(a){case"input":Rc(i,o);break;case"textarea":lg(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Wi(i,!!o.multiple,w,!1):p!==!!o.multiple&&(o.defaultValue!=null?Wi(i,!!o.multiple,o.defaultValue,!0):Wi(i,!!o.multiple,o.multiple?[]:"",!1))}i[us]=o}catch(m){Xe(e,e.return,m)}}break;case 6:if(pn(t,e),Rn(e),r&4){if(e.stateNode===null)throw Error(H(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(m){Xe(e,e.return,m)}}break;case 3:if(pn(t,e),Rn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{is(t.containerInfo)}catch(m){Xe(e,e.return,m)}break;case 4:pn(t,e),Rn(e);break;case 13:pn(t,e),Rn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(bf=nt())),r&4&&ch(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(_t=(u=_t)||d,pn(t,e),_t=u):pn(t,e),Rn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(ne=e,d=e.child;d!==null;){for(c=ne=d;ne!==null;){switch(p=ne,w=p.child,p.tag){case 0:case 11:case 14:case 15:Ko(4,p,p.return);break;case 1:zi(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(m){Xe(r,n,m)}}break;case 5:zi(p,p.return);break;case 22:if(p.memoizedState!==null){fh(c);continue}}w!==null?(w.return=p,ne=w):fh(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=c.stateNode,l=c.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=dg("display",s))}catch(m){Xe(e,e.return,m)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(m){Xe(e,e.return,m)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:pn(t,e),Rn(e),r&4&&ch(e);break;case 21:break;default:pn(t,e),Rn(e)}}function Rn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(My(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(es(i,""),r.flags&=-33);var o=uh(e);cd(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=uh(e);ud(e,a,s);break;default:throw Error(H(161))}}catch(l){Xe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function B1(e,t,n){ne=e,Uy(e)}function Uy(e,t,n){for(var r=(e.mode&1)!==0;ne!==null;){var i=ne,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||da;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||_t;a=da;var u=_t;if(da=s,(_t=l)&&!u)for(ne=i;ne!==null;)s=ne,l=s.child,s.tag===22&&s.memoizedState!==null?ph(i):l!==null?(l.return=s,ne=l):ph(i);for(;o!==null;)ne=o,Uy(o),o=o.sibling;ne=i,da=a,_t=u}dh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,ne=o):dh(e)}}function dh(e){for(;ne!==null;){var t=ne;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_t||zl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_t)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:mn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Kp(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Kp(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&is(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}_t||t.flags&512&&ld(t)}catch(p){Xe(t,t.return,p)}}if(t===e){ne=null;break}if(n=t.sibling,n!==null){n.return=t.return,ne=n;break}ne=t.return}}function fh(e){for(;ne!==null;){var t=ne;if(t===e){ne=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ne=n;break}ne=t.return}}function ph(e){for(;ne!==null;){var t=ne;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zl(4,t)}catch(l){Xe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Xe(t,i,l)}}var o=t.return;try{ld(t)}catch(l){Xe(t,o,l)}break;case 5:var s=t.return;try{ld(t)}catch(l){Xe(t,s,l)}}}catch(l){Xe(t,t.return,l)}if(t===e){ne=null;break}var a=t.sibling;if(a!==null){a.return=t.return,ne=a;break}ne=t.return}}var V1=Math.ceil,ol=sr.ReactCurrentDispatcher,kf=sr.ReactCurrentOwner,sn=sr.ReactCurrentBatchConfig,je=0,dt=null,it=null,mt=0,Bt=0,Fi=Ir(0),at=0,ms=null,li=0,Fl=0,Ef=0,Qo=null,$t=null,bf=0,lo=1/0,Hn=null,sl=!1,dd=null,Cr=null,fa=!1,xr=null,al=0,qo=0,fd=null,ba=-1,Ca=0;function Tt(){return je&6?nt():ba!==-1?ba:ba=nt()}function Or(e){return e.mode&1?je&2&&mt!==0?mt&-mt:C1.transition!==null?(Ca===0&&(Ca=Eg()),Ca):(e=Fe,e!==0||(e=window.event,e=e===void 0?16:Ag(e.type)),e):1}function Sn(e,t,n,r){if(50<qo)throw qo=0,fd=null,Error(H(185));Ds(e,n,r),(!(je&2)||e!==dt)&&(e===dt&&(!(je&2)&&(Fl|=n),at===4&&mr(e,mt)),Ft(e,r),n===1&&je===0&&!(t.mode&1)&&(lo=nt()+500,jl&&Mr()))}function Ft(e,t){var n=e.callbackNode;Cx(e,t);var r=Ha(e,e===dt?mt:0);if(r===0)n!==null&&_p(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&_p(n),t===1)e.tag===0?b1(hh.bind(null,e)):qg(hh.bind(null,e)),S1(function(){!(je&6)&&Mr()}),n=null;else{switch(bg(r)){case 1:n=qd;break;case 4:n=_g;break;case 16:n=Va;break;case 536870912:n=kg;break;default:n=Va}n=Qy(n,By.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function By(e,t){if(ba=-1,Ca=0,je&6)throw Error(H(327));var n=e.callbackNode;if(qi()&&e.callbackNode!==n)return null;var r=Ha(e,e===dt?mt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ll(e,r);else{t=r;var i=je;je|=2;var o=Hy();(dt!==e||mt!==t)&&(Hn=null,lo=nt()+500,ni(e,t));do try{Z1();break}catch(a){Vy(e,a)}while(1);cf(),ol.current=o,je=i,it!==null?t=0:(dt=null,mt=0,t=at)}if(t!==0){if(t===2&&(i=zc(e),i!==0&&(r=i,t=pd(e,i))),t===1)throw n=ms,ni(e,0),mr(e,r),Ft(e,nt()),n;if(t===6)mr(e,r);else{if(i=e.current.alternate,!(r&30)&&!H1(i)&&(t=ll(e,r),t===2&&(o=zc(e),o!==0&&(r=o,t=pd(e,o))),t===1))throw n=ms,ni(e,0),mr(e,r),Ft(e,nt()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(H(345));case 2:Kr(e,$t,Hn);break;case 3:if(mr(e,r),(r&130023424)===r&&(t=bf+500-nt(),10<t)){if(Ha(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Tt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Gc(Kr.bind(null,e,$t,Hn),t);break}Kr(e,$t,Hn);break;case 4:if(mr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-wn(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=nt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*V1(r/1960))-r,10<r){e.timeoutHandle=Gc(Kr.bind(null,e,$t,Hn),r);break}Kr(e,$t,Hn);break;case 5:Kr(e,$t,Hn);break;default:throw Error(H(329))}}}return Ft(e,nt()),e.callbackNode===n?By.bind(null,e):null}function pd(e,t){var n=Qo;return e.current.memoizedState.isDehydrated&&(ni(e,t).flags|=256),e=ll(e,t),e!==2&&(t=$t,$t=n,t!==null&&hd(t)),e}function hd(e){$t===null?$t=e:$t.push.apply($t,e)}function H1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!En(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mr(e,t){for(t&=~Ef,t&=~Fl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-wn(t),r=1<<n;e[n]=-1,t&=~r}}function hh(e){if(je&6)throw Error(H(327));qi();var t=Ha(e,0);if(!(t&1))return Ft(e,nt()),null;var n=ll(e,t);if(e.tag!==0&&n===2){var r=zc(e);r!==0&&(t=r,n=pd(e,r))}if(n===1)throw n=ms,ni(e,0),mr(e,t),Ft(e,nt()),n;if(n===6)throw Error(H(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kr(e,$t,Hn),Ft(e,nt()),null}function Cf(e,t){var n=je;je|=1;try{return e(t)}finally{je=n,je===0&&(lo=nt()+500,jl&&Mr())}}function ui(e){xr!==null&&xr.tag===0&&!(je&6)&&qi();var t=je;je|=1;var n=sn.transition,r=Fe;try{if(sn.transition=null,Fe=1,e)return e()}finally{Fe=r,sn.transition=n,je=t,!(je&6)&&Mr()}}function Of(){Bt=Fi.current,Ge(Fi)}function ni(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,w1(n)),it!==null)for(n=it.return;n!==null;){var r=n;switch(af(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Qa();break;case 3:so(),Ge(Mt),Ge(kt),gf();break;case 5:mf(r);break;case 4:so();break;case 13:Ge(qe);break;case 19:Ge(qe);break;case 10:df(r.type._context);break;case 22:case 23:Of()}n=n.return}if(dt=e,it=e=Pr(e.current,null),mt=Bt=t,at=0,ms=null,Ef=Fl=li=0,$t=Qo=null,Yr!==null){for(t=0;t<Yr.length;t++)if(n=Yr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Yr=null}return e}function Vy(e,t){do{var n=it;try{if(cf(),_a.current=il,rl){for(var r=Ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}rl=!1}if(ai=0,ct=st=Ye=null,Go=!1,fs=0,kf.current=null,n===null||n.return===null){at=1,ms=t,it=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=mt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=th(s);if(w!==null){w.flags&=-257,nh(w,s,a,o,t),w.mode&1&&eh(o,u,t),t=w,l=u;var v=t.updateQueue;if(v===null){var m=new Set;m.add(l),t.updateQueue=m}else v.add(l);break e}else{if(!(t&1)){eh(o,u,t),Pf();break e}l=Error(H(426))}}else if(Ke&&a.mode&1){var R=th(s);if(R!==null){!(R.flags&65536)&&(R.flags|=256),nh(R,s,a,o,t),lf(ao(l,a));break e}}o=l=ao(l,a),at!==4&&(at=2),Qo===null?Qo=[o]:Qo.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var y=Cy(o,l,t);Gp(o,y);break e;case 1:a=l;var h=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Cr===null||!Cr.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=Oy(o,a,t);Gp(o,C);break e}}o=o.return}while(o!==null)}Zy(n)}catch(T){t=T,it===n&&n!==null&&(it=n=n.return);continue}break}while(1)}function Hy(){var e=ol.current;return ol.current=il,e===null?il:e}function Pf(){(at===0||at===3||at===2)&&(at=4),dt===null||!(li&268435455)&&!(Fl&268435455)||mr(dt,mt)}function ll(e,t){var n=je;je|=2;var r=Hy();(dt!==e||mt!==t)&&(Hn=null,ni(e,t));do try{W1();break}catch(i){Vy(e,i)}while(1);if(cf(),je=n,ol.current=r,it!==null)throw Error(H(261));return dt=null,mt=0,at}function W1(){for(;it!==null;)Wy(it)}function Z1(){for(;it!==null&&!yx();)Wy(it)}function Wy(e){var t=Ky(e.alternate,e,Bt);e.memoizedProps=e.pendingProps,t===null?Zy(e):it=t,kf.current=null}function Zy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=z1(n,t),n!==null){n.flags&=32767,it=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{at=6,it=null;return}}else if(n=M1(n,t,Bt),n!==null){it=n;return}if(t=t.sibling,t!==null){it=t;return}it=t=e}while(t!==null);at===0&&(at=5)}function Kr(e,t,n){var r=Fe,i=sn.transition;try{sn.transition=null,Fe=1,G1(e,t,n,r)}finally{sn.transition=i,Fe=r}return null}function G1(e,t,n,r){do qi();while(xr!==null);if(je&6)throw Error(H(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(H(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ox(e,o),e===dt&&(it=dt=null,mt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fa||(fa=!0,Qy(Va,function(){return qi(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=sn.transition,sn.transition=null;var s=Fe;Fe=1;var a=je;je|=4,kf.current=null,U1(e,n),Fy(n,e),p1(Wc),Wa=!!Hc,Wc=Hc=null,e.current=n,B1(n),vx(),je=a,Fe=s,sn.transition=o}else e.current=n;if(fa&&(fa=!1,xr=e,al=i),o=e.pendingLanes,o===0&&(Cr=null),Sx(n.stateNode),Ft(e,nt()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sl)throw sl=!1,e=dd,dd=null,e;return al&1&&e.tag!==0&&qi(),o=e.pendingLanes,o&1?e===fd?qo++:(qo=0,fd=e):qo=0,Mr(),null}function qi(){if(xr!==null){var e=bg(al),t=sn.transition,n=Fe;try{if(sn.transition=null,Fe=16>e?16:e,xr===null)var r=!1;else{if(e=xr,xr=null,al=0,je&6)throw Error(H(331));var i=je;for(je|=4,ne=e.current;ne!==null;){var o=ne,s=o.child;if(ne.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ne=u;ne!==null;){var d=ne;switch(d.tag){case 0:case 11:case 15:Ko(8,d,o)}var c=d.child;if(c!==null)c.return=d,ne=c;else for(;ne!==null;){d=ne;var p=d.sibling,w=d.return;if(Iy(d),d===u){ne=null;break}if(p!==null){p.return=w,ne=p;break}ne=w}}}var v=o.alternate;if(v!==null){var m=v.child;if(m!==null){v.child=null;do{var R=m.sibling;m.sibling=null,m=R}while(m!==null)}}ne=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,ne=s;else e:for(;ne!==null;){if(o=ne,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ko(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,ne=y;break e}ne=o.return}}var h=e.current;for(ne=h;ne!==null;){s=ne;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,ne=x;else e:for(s=h;ne!==null;){if(a=ne,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:zl(9,a)}}catch(T){Xe(a,a.return,T)}if(a===s){ne=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,ne=C;break e}ne=a.return}}if(je=i,Mr(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Al,e)}catch{}r=!0}return r}finally{Fe=n,sn.transition=t}}return!1}function mh(e,t,n){t=ao(n,t),t=Cy(e,t,1),e=br(e,t,1),t=Tt(),e!==null&&(Ds(e,1,t),Ft(e,t))}function Xe(e,t,n){if(e.tag===3)mh(e,e,n);else for(;t!==null;){if(t.tag===3){mh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cr===null||!Cr.has(r))){e=ao(n,e),e=Oy(t,e,1),t=br(t,e,1),e=Tt(),t!==null&&(Ds(t,1,e),Ft(t,e));break}}t=t.return}}function K1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Tt(),e.pingedLanes|=e.suspendedLanes&n,dt===e&&(mt&n)===n&&(at===4||at===3&&(mt&130023424)===mt&&500>nt()-bf?ni(e,0):Ef|=n),Ft(e,t)}function Gy(e,t){t===0&&(e.mode&1?(t=na,na<<=1,!(na&130023424)&&(na=4194304)):t=1);var n=Tt();e=nr(e,t),e!==null&&(Ds(e,t,n),Ft(e,n))}function Q1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gy(e,n)}function q1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(t),Gy(e,n)}var Ky;Ky=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Mt.current)It=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return It=!1,I1(e,t,n);It=!!(e.flags&131072)}else It=!1,Ke&&t.flags&1048576&&Yg(t,Ja,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ea(e,t),e=t.pendingProps;var i=ro(t,kt.current);Qi(t,n),i=vf(null,t,r,e,i,n);var o=xf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zt(r)?(o=!0,qa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,pf(t),i.updater=Il,t.stateNode=i,i._reactInternals=t,ed(t,r,e,n),t=rd(null,t,r,!0,o,n)):(t.tag=0,Ke&&o&&sf(t),Pt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ea(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=J1(r),e=mn(r,e),i){case 0:t=nd(null,t,r,e,n);break e;case 1:t=oh(null,t,r,e,n);break e;case 11:t=rh(null,t,r,e,n);break e;case 14:t=ih(null,t,r,mn(r.type,e),n);break e}throw Error(H(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mn(r,i),nd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mn(r,i),oh(e,t,r,i,n);case 3:e:{if(Ay(t),e===null)throw Error(H(387));r=t.pendingProps,o=t.memoizedState,i=o.element,ty(e,t),tl(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ao(Error(H(423)),t),t=sh(e,t,r,n,i);break e}else if(r!==i){i=ao(Error(H(424)),t),t=sh(e,t,r,n,i);break e}else for(Vt=Er(t.stateNode.containerInfo.firstChild),Ht=t,Ke=!0,yn=null,n=oy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(io(),r===i){t=rr(e,t,n);break e}Pt(e,t,r,n)}t=t.child}return t;case 5:return sy(t),e===null&&Yc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Zc(r,i)?s=null:o!==null&&Zc(r,o)&&(t.flags|=32),Ty(e,t),Pt(e,t,s,n),t.child;case 6:return e===null&&Yc(t),null;case 13:return Dy(e,t,n);case 4:return hf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=oo(t,null,r,n):Pt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mn(r,i),rh(e,t,r,i,n);case 7:return Pt(e,t,t.pendingProps,n),t.child;case 8:return Pt(e,t,t.pendingProps.children,n),t.child;case 12:return Pt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,He(Xa,r._currentValue),r._currentValue=s,o!==null)if(En(o.value,s)){if(o.children===i.children&&!Mt.current){t=rr(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=qn(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Jc(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(H(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Jc(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Pt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Qi(t,n),i=ln(i),r=r(i),t.flags|=1,Pt(e,t,r,n),t.child;case 14:return r=t.type,i=mn(r,t.pendingProps),i=mn(r.type,i),ih(e,t,r,i,n);case 15:return Py(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:mn(r,i),Ea(e,t),t.tag=1,zt(r)?(e=!0,qa(t)):e=!1,Qi(t,n),ry(t,r,i),ed(t,r,i,n),rd(null,t,r,!0,e,n);case 19:return Ny(e,t,n);case 22:return Ry(e,t,n)}throw Error(H(156,t.tag))};function Qy(e,t){return Sg(e,t)}function Y1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function on(e,t,n,r){return new Y1(e,t,n,r)}function Rf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function J1(e){if(typeof e=="function")return Rf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gd)return 11;if(e===Kd)return 14}return 2}function Pr(e,t){var n=e.alternate;return n===null?(n=on(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oa(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Rf(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ti:return ri(n.children,i,o,t);case Zd:s=8,i|=8;break;case Ec:return e=on(12,n,t,i|2),e.elementType=Ec,e.lanes=o,e;case bc:return e=on(13,n,t,i),e.elementType=bc,e.lanes=o,e;case Cc:return e=on(19,n,t,i),e.elementType=Cc,e.lanes=o,e;case ig:return Ul(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ng:s=10;break e;case rg:s=9;break e;case Gd:s=11;break e;case Kd:s=14;break e;case fr:s=16,r=null;break e}throw Error(H(130,e==null?e:typeof e,""))}return t=on(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ri(e,t,n,r){return e=on(7,e,r,t),e.lanes=n,e}function Ul(e,t,n,r){return e=on(22,e,r,t),e.elementType=ig,e.lanes=n,e.stateNode={isHidden:!1},e}function Ju(e,t,n){return e=on(6,e,null,t),e.lanes=n,e}function Xu(e,t,n){return t=on(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function X1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nu(0),this.expirationTimes=Nu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Tf(e,t,n,r,i,o,s,a,l){return e=new X1(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=on(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pf(o),e}function ew(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ri,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qy(e){if(!e)return Ar;e=e._reactInternals;e:{if(mi(e)!==e||e.tag!==1)throw Error(H(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(H(171))}if(e.tag===1){var n=e.type;if(zt(n))return Qg(e,n,t)}return t}function Yy(e,t,n,r,i,o,s,a,l){return e=Tf(n,r,!0,e,i,o,s,a,l),e.context=qy(null),n=e.current,r=Tt(),i=Or(n),o=qn(r,i),o.callback=t??null,br(n,o,i),e.current.lanes=i,Ds(e,i,r),Ft(e,r),e}function Bl(e,t,n,r){var i=t.current,o=Tt(),s=Or(i);return n=qy(n),t.context===null?t.context=n:t.pendingContext=n,t=qn(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=br(i,t,s),e!==null&&(Sn(e,i,s,o),Sa(e,i,s)),s}function ul(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Af(e,t){gh(e,t),(e=e.alternate)&&gh(e,t)}function tw(){return null}var Jy=typeof reportError=="function"?reportError:function(e){console.error(e)};function Df(e){this._internalRoot=e}Vl.prototype.render=Df.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(H(409));Bl(e,t,null,null)};Vl.prototype.unmount=Df.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ui(function(){Bl(null,e,null,null)}),t[tr]=null}};function Vl(e){this._internalRoot=e}Vl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<hr.length&&t!==0&&t<hr[n].priority;n++);hr.splice(n,0,e),n===0&&Tg(e)}};function Nf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yh(){}function nw(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ul(s);o.call(u)}}var s=Yy(t,r,e,0,null,!1,!1,"",yh);return e._reactRootContainer=s,e[tr]=s.current,as(e.nodeType===8?e.parentNode:e),ui(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ul(l);a.call(u)}}var l=Tf(e,0,!1,null,null,!1,!1,"",yh);return e._reactRootContainer=l,e[tr]=l.current,as(e.nodeType===8?e.parentNode:e),ui(function(){Bl(t,l,n,r)}),l}function Wl(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=ul(s);a.call(l)}}Bl(t,s,e,i)}else s=nw(n,t,e,i,r);return ul(s)}Cg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Fo(t.pendingLanes);n!==0&&(Yd(t,n|1),Ft(t,nt()),!(je&6)&&(lo=nt()+500,Mr()))}break;case 13:ui(function(){var r=nr(e,1);if(r!==null){var i=Tt();Sn(r,e,1,i)}}),Af(e,1)}};Jd=function(e){if(e.tag===13){var t=nr(e,134217728);if(t!==null){var n=Tt();Sn(t,e,134217728,n)}Af(e,134217728)}};Og=function(e){if(e.tag===13){var t=Or(e),n=nr(e,t);if(n!==null){var r=Tt();Sn(n,e,t,r)}Af(e,t)}};Pg=function(){return Fe};Rg=function(e,t){var n=Fe;try{return Fe=e,t()}finally{Fe=n}};jc=function(e,t,n){switch(t){case"input":if(Rc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=$l(r);if(!i)throw Error(H(90));sg(r),Rc(r,i)}}}break;case"textarea":lg(e,n);break;case"select":t=n.value,t!=null&&Wi(e,!!n.multiple,t,!1)}};mg=Cf;gg=ui;var rw={usingClientEntryPoint:!1,Events:[Ls,Li,$l,pg,hg,Cf]},To={findFiberByHostInstance:qr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},iw={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xg(e),e===null?null:e.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||tw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pa.isDisabled&&pa.supportsFiber)try{Al=pa.inject(iw),$n=pa}catch{}}Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rw;Zt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nf(t))throw Error(H(200));return ew(e,t,null,n)};Zt.createRoot=function(e,t){if(!Nf(e))throw Error(H(299));var n=!1,r="",i=Jy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Tf(e,1,!1,null,null,n,!1,r,i),e[tr]=t.current,as(e.nodeType===8?e.parentNode:e),new Df(t)};Zt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(H(188)):(e=Object.keys(e).join(","),Error(H(268,e)));return e=xg(t),e=e===null?null:e.stateNode,e};Zt.flushSync=function(e){return ui(e)};Zt.hydrate=function(e,t,n){if(!Hl(t))throw Error(H(200));return Wl(null,e,t,!0,n)};Zt.hydrateRoot=function(e,t,n){if(!Nf(e))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Jy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Yy(t,null,e,1,n??null,i,!1,o,s),e[tr]=t.current,as(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Vl(t)};Zt.render=function(e,t,n){if(!Hl(t))throw Error(H(200));return Wl(null,e,t,!1,n)};Zt.unmountComponentAtNode=function(e){if(!Hl(e))throw Error(H(40));return e._reactRootContainer?(ui(function(){Wl(null,null,e,!1,function(){e._reactRootContainer=null,e[tr]=null})}),!0):!1};Zt.unstable_batchedUpdates=Cf;Zt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Hl(n))throw Error(H(200));if(e==null||e._reactInternals===void 0)throw Error(H(38));return Wl(e,t,n,!1,r)};Zt.version="18.2.0-next-9e3b772b8-20220608";function Xy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xy)}catch(e){console.error(e)}}Xy(),Ym.exports=Zt;var e0=Ym.exports,vh=e0;_c.createRoot=vh.createRoot,_c.hydrateRoot=vh.hydrateRoot;/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Le(){return Le=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Le.apply(this,arguments)}var tt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(tt||(tt={}));const xh="popstate";function ow(e){e===void 0&&(e={});function t(i,o){let{pathname:s="/",search:a="",hash:l=""}=zn(i.location.hash.substr(1));return gs("",{pathname:s,search:a,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),a="";if(s&&s.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof o=="string"?o:ir(o))}function r(i,o){ci(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return aw(t,n,r,e)}function be(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ci(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function sw(){return Math.random().toString(36).substr(2,8)}function wh(e,t){return{usr:e.state,key:e.key,idx:t}}function gs(e,t,n,r){return n===void 0&&(n=null),Le({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zn(t):t,{state:n,key:t&&t.key||r||sw()})}function ir(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function aw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=tt.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(Le({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function c(){a=tt.Pop;let R=d(),y=R==null?null:R-u;u=R,l&&l({action:a,location:m.location,delta:y})}function p(R,y){a=tt.Push;let h=gs(m.location,R,y);n&&n(h,R),u=d()+1;let x=wh(h,u),C=m.createHref(h);try{s.pushState(x,"",C)}catch{i.location.assign(C)}o&&l&&l({action:a,location:m.location,delta:1})}function w(R,y){a=tt.Replace;let h=gs(m.location,R,y);n&&n(h,R),u=d();let x=wh(h,u),C=m.createHref(h);s.replaceState(x,"",C),o&&l&&l({action:a,location:m.location,delta:0})}function v(R){let y=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof R=="string"?R:ir(R);return be(y,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,y)}let m={get action(){return a},get location(){return e(i,s)},listen(R){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(xh,c),l=R,()=>{i.removeEventListener(xh,c),l=null}},createHref(R){return t(i,R)},createURL:v,encodeLocation(R){let y=v(R);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:p,replace:w,go(R){return s.go(R)}};return m}var ot;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ot||(ot={}));const lw=new Set(["lazy","caseSensitive","path","id","index","children"]);function uw(e){return e.index===!0}function t0(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((i,o)=>{let s=[...n,o],a=typeof i.id=="string"?i.id:s.join("-");if(be(i.index!==!0||!i.children,"Cannot specify children on an index route"),be(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),uw(i)){let l=Le({},i,{hasErrorBoundary:t(i),id:a});return r[a]=l,l}else{let l=Le({},i,{id:a,hasErrorBoundary:t(i),children:void 0});return r[a]=l,i.children&&(l.children=t0(i.children,t,s,r)),l}})}function Ui(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?zn(t):t,i=js(r.pathname||"/",n);if(i==null)return null;let o=n0(e);cw(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=xw(o[a],_w(i));return s}function n0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(be(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Yn([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(be(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),n0(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:yw(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of r0(o.path))i(o,s,l)}),t}function r0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=r0(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function cw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:vw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const dw=/^:\w+$/,fw=3,pw=2,hw=1,mw=10,gw=-2,Sh=e=>e==="*";function yw(e,t){let n=e.split("/"),r=n.length;return n.some(Sh)&&(r+=gw),t&&(r+=pw),n.filter(i=>!Sh(i)).reduce((i,o)=>i+(dw.test(o)?fw:o===""?hw:mw),r)}function vw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function xw(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",d=ww({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;o.push({params:r,pathname:Yn([i,d.pathname]),pathnameBase:Cw(Yn([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=Yn([i,d.pathnameBase]))}return o}function ww(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Sw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let p=a[c]||"";s=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}return u[d]=kw(a[c]||"",d),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Sw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ci(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function _w(e){try{return decodeURI(e)}catch(t){return ci(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function kw(e,t){try{return decodeURIComponent(e)}catch(n){return ci(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function js(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ew(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?zn(e):e;return{pathname:n?n.startsWith("/")?n:bw(n,t):t,search:Ow(r),hash:Pw(i)}}function bw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ec(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Zl(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Lf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=zn(e):(i=Le({},e),be(!i.pathname||!i.pathname.includes("?"),ec("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),ec("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),ec("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let c=t.length-1;if(s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),c-=1;i.pathname=p.join("/")}a=c>=0?t[c]:"/"}let l=Ew(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Yn=e=>e.join("/").replace(/\/\/+/g,"/"),Cw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ow=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Pw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class _h extends Error{}class Rw{constructor(t,n){this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],be(t&&typeof t=="object"&&!Array.isArray(t),"defer() only accepts plain objects");let r;this.abortPromise=new Promise((o,s)=>r=s),this.controller=new AbortController;let i=()=>r(new _h("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",i),this.controller.signal.addEventListener("abort",i),this.data=Object.entries(t).reduce((o,s)=>{let[a,l]=s;return Object.assign(o,{[a]:this.trackPromise(a,l)})},{}),this.done&&this.unlistenAbortSignal(),this.init=n}trackPromise(t,n){if(!(n instanceof Promise))return n;this.deferredKeys.push(t),this.pendingKeysSet.add(t);let r=Promise.race([n,this.abortPromise]).then(i=>this.onSettle(r,t,null,i),i=>this.onSettle(r,t,i));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(t,n,r,i){return this.controller.signal.aborted&&r instanceof _h?(this.unlistenAbortSignal(),Object.defineProperty(t,"_error",{get:()=>r}),Promise.reject(r)):(this.pendingKeysSet.delete(n),this.done&&this.unlistenAbortSignal(),r?(Object.defineProperty(t,"_error",{get:()=>r}),this.emit(!1,n),Promise.reject(r)):(Object.defineProperty(t,"_data",{get:()=>i}),this.emit(!1,n),i))}emit(t,n){this.subscribers.forEach(r=>r(t,n))}subscribe(t){return this.subscribers.add(t),()=>this.subscribers.delete(t)}cancel(){this.controller.abort(),this.pendingKeysSet.forEach((t,n)=>this.pendingKeysSet.delete(n)),this.emit(!0)}async resolveData(t){let n=!1;if(!this.done){let r=()=>this.cancel();t.addEventListener("abort",r),n=await new Promise(i=>{this.subscribe(o=>{t.removeEventListener("abort",r),(o||this.done)&&i(o)})})}return n}get done(){return this.pendingKeysSet.size===0}get unwrappedData(){return be(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((t,n)=>{let[r,i]=n;return Object.assign(t,{[r]:Aw(i)})},{})}get pendingKeys(){return Array.from(this.pendingKeysSet)}}function Tw(e){return e instanceof Promise&&e._tracked===!0}function Aw(e){if(!Tw(e))return e;if(e._error)throw e._error;return e._data}class $f{constructor(t,n,r,i){i===void 0&&(i=!1),this.status=t,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function i0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const o0=["post","put","patch","delete"],Dw=new Set(o0),Nw=["get",...o0],Lw=new Set(Nw),$w=new Set([301,302,303,307,308]),jw=new Set([307,308]),tc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},Iw={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},kh={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},s0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,a0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Mw=!a0,zw=e=>!!e.hasErrorBoundary;function Fw(e){be(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let t=e.detectErrorBoundary||zw,n={},r=t0(e.routes,t,void 0,n),i,o=null,s=new Set,a=null,l=null,u=null,d=e.hydrationData!=null,c=Ui(r,e.history.location,e.basename),p=null;if(c==null){let D=An(404,{pathname:e.history.location.pathname}),{matches:L,route:F}=Rh(r);c=L,p={[F.id]:D}}let w=!c.some(D=>D.route.lazy)&&(!c.some(D=>D.route.loader)||e.hydrationData!=null),v,m={historyAction:e.history.action,location:e.history.location,matches:c,initialized:w,navigation:tc,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||p,fetchers:new Map,blockers:new Map},R=tt.Pop,y=!1,h,x=!1,C=!1,T=[],M=[],z=new Map,Z=0,oe=-1,ee=new Map,Ae=new Set,se=new Map,ae=new Map,ve=new Map,_e=!1;function Ve(){if(o=e.history.listen(F=>{let{action:re,location:le,delta:he}=F;if(_e){_e=!1;return}ci(ve.size===0||he!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let fe=Y({currentLocation:m.location,nextLocation:le,historyAction:re});if(fe&&he!=null){_e=!0,e.history.go(he*-1),B(fe,{state:"blocked",location:le,proceed(){B(fe,{state:"proceeding",proceed:void 0,reset:void 0,location:le}),e.history.go(he)},reset(){U(fe),Q({blockers:new Map(v.state.blockers)})}});return}return S(re,le)}),m.initialized)return v;let D=m.matches.filter(F=>F.route.lazy);if(D.length===0)return S(tt.Pop,m.location),v;let L=D.map(F=>md(F.route,t,n));return Promise.all(L).then(()=>{!m.matches.some(re=>re.route.loader)||e.hydrationData!=null?Q({initialized:!0}):S(tt.Pop,m.location)}),v}function Ne(){o&&o(),s.clear(),h&&h.abort(),m.fetchers.forEach((D,L)=>xe(L)),m.blockers.forEach((D,L)=>U(L))}function W(D){return s.add(D),()=>s.delete(D)}function Q(D){m=Le({},m,D),s.forEach(L=>L(m))}function ce(D,L){var F,re;let le=m.actionData!=null&&m.navigation.formMethod!=null&&Wn(m.navigation.formMethod)&&m.navigation.state==="loading"&&((F=D.state)==null?void 0:F._isRedirect)!==!0,he;L.actionData?Object.keys(L.actionData).length>0?he=L.actionData:he=null:le?he=m.actionData:he=null;let fe=L.loaderData?Ph(m.loaderData,L.loaderData,L.matches||[],L.errors):m.loaderData;for(let[de]of ve)U(de);let ke=y===!0||m.navigation.formMethod!=null&&Wn(m.navigation.formMethod)&&((re=D.state)==null?void 0:re._isRedirect)!==!0;i&&(r=i,i=void 0),Q(Le({},L,{actionData:he,loaderData:fe,historyAction:R,location:D,initialized:!0,navigation:tc,revalidation:"idle",restoreScrollPosition:Lt(D,L.matches||m.matches),preventScrollReset:ke,blockers:new Map(m.blockers)})),x||R===tt.Pop||(R===tt.Push?e.history.push(D,D.state):R===tt.Replace&&e.history.replace(D,D.state)),R=tt.Pop,y=!1,x=!1,C=!1,T=[],M=[]}async function E(D,L){if(typeof D=="number"){e.history.go(D);return}let{path:F,submission:re,error:le}=Eh(D,L),he=m.location,fe=gs(m.location,F,L&&L.state);fe=Le({},fe,e.history.encodeLocation(fe));let ke=L&&L.replace!=null?L.replace:void 0,de=tt.Push;ke===!0?de=tt.Replace:ke===!1||re!=null&&Wn(re.formMethod)&&re.formAction===m.location.pathname+m.location.search&&(de=tt.Replace);let yt=L&&"preventScrollReset"in L?L.preventScrollReset===!0:void 0,ze=Y({currentLocation:he,nextLocation:fe,historyAction:de});if(ze){B(ze,{state:"blocked",location:fe,proceed(){B(ze,{state:"proceeding",proceed:void 0,reset:void 0,location:fe}),E(D,L)},reset(){U(ze),Q({blockers:new Map(m.blockers)})}});return}return await S(de,fe,{submission:re,pendingError:le,preventScrollReset:yt,replace:L&&L.replace})}function k(){if(ie(),Q({revalidation:"loading"}),m.navigation.state!=="submitting"){if(m.navigation.state==="idle"){S(m.historyAction,m.location,{startUninterruptedRevalidation:!0});return}S(R||m.historyAction,m.navigation.location,{overrideNavigation:m.navigation})}}async function S(D,L,F){h&&h.abort(),h=null,R=D,x=(F&&F.startUninterruptedRevalidation)===!0,Ie(m.location,m.matches),y=(F&&F.preventScrollReset)===!0;let re=i||r,le=F&&F.overrideNavigation,he=Ui(re,L,e.basename);if(!he){let et=An(404,{pathname:L.pathname}),{matches:On,route:fn}=Rh(re);Ee(),ce(L,{matches:On,loaderData:{},errors:{[fn.id]:et}});return}if(Ww(m.location,L)&&!(F&&F.submission&&Wn(F.submission.formMethod))){ce(L,{matches:he});return}h=new AbortController;let fe=Do(e.history,L,h.signal,F&&F.submission),ke,de;if(F&&F.pendingError)de={[Bi(he).route.id]:F.pendingError};else if(F&&F.submission&&Wn(F.submission.formMethod)){let et=await A(fe,L,F.submission,he,{replace:F.replace});if(et.shortCircuited)return;ke=et.pendingActionData,de=et.pendingActionError,le=Le({state:"loading",location:L},F.submission),fe=new Request(fe.url,{signal:fe.signal})}let{shortCircuited:yt,loaderData:ze,errors:Ot}=await V(fe,L,he,le,F&&F.submission,F&&F.replace,ke,de);yt||(h=null,ce(L,Le({matches:he},ke?{actionData:ke}:{},{loaderData:ze,errors:Ot})))}async function A(D,L,F,re,le){ie();let he=Le({state:"submitting",location:L},F);Q({navigation:he});let fe,ke=gd(re,L);if(!ke.route.action&&!ke.route.lazy)fe={type:ot.error,error:An(405,{method:D.method,pathname:L.pathname,routeId:ke.route.id})};else if(fe=await Ao("action",D,ke,re,n,t,v.basename),D.signal.aborted)return{shortCircuited:!0};if(Yi(fe)){let de;return le&&le.replace!=null?de=le.replace:de=fe.location===m.location.pathname+m.location.search,await me(m,fe,{submission:F,replace:de}),{shortCircuited:!0}}if(Yo(fe)){let de=Bi(re,ke.route.id);return(le&&le.replace)!==!0&&(R=tt.Push),{pendingActionData:{},pendingActionError:{[de.route.id]:fe.error}}}if(Xr(fe))throw An(400,{type:"defer-action"});return{pendingActionData:{[ke.route.id]:fe.data}}}async function V(D,L,F,re,le,he,fe,ke){let de=re;de||(de=Le({state:"loading",location:L,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},le));let yt=le||(de.formMethod&&de.formAction&&de.formData&&de.formEncType?{formMethod:de.formMethod,formAction:de.formAction,formData:de.formData,formEncType:de.formEncType}:void 0),ze=i||r,[Ot,et]=bh(e.history,m,F,yt,L,C,T,M,se,ze,e.basename,fe,ke);if(Ee(vt=>!(F&&F.some(Pn=>Pn.route.id===vt))||Ot&&Ot.some(Pn=>Pn.route.id===vt)),Ot.length===0&&et.length===0)return ce(L,Le({matches:F,loaderData:{},errors:ke||null},fe?{actionData:fe}:{})),{shortCircuited:!0};if(!x){et.forEach(Pn=>{let zr=m.fetchers.get(Pn.key),qs={state:"loading",data:zr&&zr.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(Pn.key,qs)});let vt=fe||m.actionData;Q(Le({navigation:de},vt?Object.keys(vt).length===0?{actionData:null}:{actionData:vt}:{},et.length>0?{fetchers:new Map(m.fetchers)}:{}))}oe=++Z,et.forEach(vt=>z.set(vt.key,h));let{results:On,loaderResults:fn,fetcherResults:So}=await ge(m.matches,F,Ot,et,D);if(D.signal.aborted)return{shortCircuited:!0};et.forEach(vt=>z.delete(vt.key));let Ks=Th(On);if(Ks)return await me(m,Ks,{replace:he}),{shortCircuited:!0};let{loaderData:Qs,errors:yi}=Oh(m,F,Ot,fn,ke,et,So,ae);ae.forEach((vt,Pn)=>{vt.subscribe(zr=>{(zr||vt.done)&&ae.delete(Pn)})}),O();let bu=N(oe);return Le({loaderData:Qs,errors:yi},bu||et.length>0?{fetchers:new Map(m.fetchers)}:{})}function b(D){return m.fetchers.get(D)||Iw}function K(D,L,F,re){if(Mw)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");z.has(D)&&we(D);let he=Ui(i||r,F,e.basename);if(!he){De(D,L,An(404,{pathname:F}));return}let{path:fe,submission:ke}=Eh(F,re,!0),de=gd(he,fe);if(y=(re&&re.preventScrollReset)===!0,ke&&Wn(ke.formMethod)){I(D,L,fe,de,he,ke);return}se.set(D,{routeId:L,path:fe}),Oe(D,L,fe,de,he,ke)}async function I(D,L,F,re,le,he){if(ie(),se.delete(D),!re.route.action&&!re.route.lazy){let Un=An(405,{method:he.formMethod,pathname:F,routeId:L});De(D,L,Un);return}let fe=m.fetchers.get(D),ke=Le({state:"submitting"},he,{data:fe&&fe.data," _hasFetcherDoneAnything ":!0});m.fetchers.set(D,ke),Q({fetchers:new Map(m.fetchers)});let de=new AbortController,yt=Do(e.history,F,de.signal,he);z.set(D,de);let ze=await Ao("action",yt,re,le,n,t,v.basename);if(yt.signal.aborted){z.get(D)===de&&z.delete(D);return}if(Yi(ze)){z.delete(D),Ae.add(D);let Un=Le({state:"loading"},he,{data:void 0," _hasFetcherDoneAnything ":!0});return m.fetchers.set(D,Un),Q({fetchers:new Map(m.fetchers)}),me(m,ze,{isFetchActionRedirect:!0})}if(Yo(ze)){De(D,L,ze.error);return}if(Xr(ze))throw An(400,{type:"defer-action"});let Ot=m.navigation.location||m.location,et=Do(e.history,Ot,de.signal),On=i||r,fn=m.navigation.state!=="idle"?Ui(On,m.navigation.location,e.basename):m.matches;be(fn,"Didn't find any matches after fetcher action");let So=++Z;ee.set(D,So);let Ks=Le({state:"loading",data:ze.data},he,{" _hasFetcherDoneAnything ":!0});m.fetchers.set(D,Ks);let[Qs,yi]=bh(e.history,m,fn,he,Ot,C,T,M,se,On,e.basename,{[re.route.id]:ze.data},void 0);yi.filter(Un=>Un.key!==D).forEach(Un=>{let Ou=Un.key,up=m.fetchers.get(Ou),Nv={state:"loading",data:up&&up.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(Ou,Nv),z.set(Ou,de)}),Q({fetchers:new Map(m.fetchers)});let{results:bu,loaderResults:vt,fetcherResults:Pn}=await ge(m.matches,fn,Qs,yi,et);if(de.signal.aborted)return;ee.delete(D),z.delete(D),yi.forEach(Un=>z.delete(Un.key));let zr=Th(bu);if(zr)return me(m,zr);let{loaderData:qs,errors:Cu}=Oh(m,m.matches,Qs,vt,void 0,yi,Pn,ae),Av={state:"idle",data:ze.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(D,Av);let Dv=N(So);m.navigation.state==="loading"&&So>oe?(be(R,"Expected pending action"),h&&h.abort(),ce(m.navigation.location,{matches:fn,loaderData:qs,errors:Cu,fetchers:new Map(m.fetchers)})):(Q(Le({errors:Cu,loaderData:Ph(m.loaderData,qs,fn,Cu)},Dv?{fetchers:new Map(m.fetchers)}:{})),C=!1)}async function Oe(D,L,F,re,le,he){let fe=m.fetchers.get(D),ke=Le({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},he,{data:fe&&fe.data," _hasFetcherDoneAnything ":!0});m.fetchers.set(D,ke),Q({fetchers:new Map(m.fetchers)});let de=new AbortController,yt=Do(e.history,F,de.signal);z.set(D,de);let ze=await Ao("loader",yt,re,le,n,t,v.basename);if(Xr(ze)&&(ze=await d0(ze,yt.signal,!0)||ze),z.get(D)===de&&z.delete(D),yt.signal.aborted)return;if(Yi(ze)){await me(m,ze);return}if(Yo(ze)){let et=Bi(m.matches,L);m.fetchers.delete(D),Q({fetchers:new Map(m.fetchers),errors:{[et.route.id]:ze.error}});return}be(!Xr(ze),"Unhandled fetcher deferred data");let Ot={state:"idle",data:ze.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(D,Ot),Q({fetchers:new Map(m.fetchers)})}async function me(D,L,F){var re;let{submission:le,replace:he,isFetchActionRedirect:fe}=F===void 0?{}:F;L.revalidate&&(C=!0);let ke=gs(D.location,L.location,Le({_isRedirect:!0},fe?{_isFetchActionRedirect:!0}:{}));if(be(ke,"Expected a location on the redirect navigation"),s0.test(L.location)&&a0&&typeof((re=window)==null?void 0:re.location)<"u"){let On=e.history.createURL(L.location),fn=js(On.pathname,e.basename||"/")==null;if(window.location.origin!==On.origin||fn){he?window.location.replace(L.location):window.location.assign(L.location);return}}h=null;let de=he===!0?tt.Replace:tt.Push,{formMethod:yt,formAction:ze,formEncType:Ot,formData:et}=D.navigation;!le&&yt&&ze&&et&&Ot&&(le={formMethod:yt,formAction:ze,formEncType:Ot,formData:et}),jw.has(L.status)&&le&&Wn(le.formMethod)?await S(de,ke,{submission:Le({},le,{formAction:L.location}),preventScrollReset:y}):await S(de,ke,{overrideNavigation:{state:"loading",location:ke,formMethod:le?le.formMethod:void 0,formAction:le?le.formAction:void 0,formEncType:le?le.formEncType:void 0,formData:le?le.formData:void 0},preventScrollReset:y})}async function ge(D,L,F,re,le){let he=await Promise.all([...F.map(de=>Ao("loader",le,de,L,n,t,v.basename)),...re.map(de=>de.matches&&de.match?Ao("loader",Do(e.history,de.path,le.signal),de.match,de.matches,n,t,v.basename):{type:ot.error,error:An(404,{pathname:de.path})})]),fe=he.slice(0,F.length),ke=he.slice(F.length);return await Promise.all([Ah(D,F,fe,le.signal,!1,m.loaderData),Ah(D,re.map(de=>de.match),ke,le.signal,!0)]),{results:he,loaderResults:fe,fetcherResults:ke}}function ie(){C=!0,T.push(...Ee()),se.forEach((D,L)=>{z.has(L)&&(M.push(L),we(L))})}function De(D,L,F){let re=Bi(m.matches,L);xe(D),Q({errors:{[re.route.id]:F},fetchers:new Map(m.fetchers)})}function xe(D){z.has(D)&&we(D),se.delete(D),ee.delete(D),Ae.delete(D),m.fetchers.delete(D)}function we(D){let L=z.get(D);be(L,"Expected fetch controller: "+D),L.abort(),z.delete(D)}function _(D){for(let L of D){let re={state:"idle",data:b(L).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};m.fetchers.set(L,re)}}function O(){let D=[];for(let L of Ae){let F=m.fetchers.get(L);be(F,"Expected fetcher: "+L),F.state==="loading"&&(Ae.delete(L),D.push(L))}_(D)}function N(D){let L=[];for(let[F,re]of ee)if(re<D){let le=m.fetchers.get(F);be(le,"Expected fetcher: "+F),le.state==="loading"&&(we(F),ee.delete(F),L.push(F))}return _(L),L.length>0}function q(D,L){let F=m.blockers.get(D)||kh;return ve.get(D)!==L&&ve.set(D,L),F}function U(D){m.blockers.delete(D),ve.delete(D)}function B(D,L){let F=m.blockers.get(D)||kh;be(F.state==="unblocked"&&L.state==="blocked"||F.state==="blocked"&&L.state==="blocked"||F.state==="blocked"&&L.state==="proceeding"||F.state==="blocked"&&L.state==="unblocked"||F.state==="proceeding"&&L.state==="unblocked","Invalid blocker state transition: "+F.state+" -> "+L.state),m.blockers.set(D,L),Q({blockers:new Map(m.blockers)})}function Y(D){let{currentLocation:L,nextLocation:F,historyAction:re}=D;if(ve.size===0)return;ve.size>1&&ci(!1,"A router only supports one blocker at a time");let le=Array.from(ve.entries()),[he,fe]=le[le.length-1],ke=m.blockers.get(he);if(!(ke&&ke.state==="proceeding")&&fe({currentLocation:L,nextLocation:F,historyAction:re}))return he}function Ee(D){let L=[];return ae.forEach((F,re)=>{(!D||D(re))&&(F.cancel(),L.push(re),ae.delete(re))}),L}function J(D,L,F){if(a=D,u=L,l=F||(re=>re.key),!d&&m.navigation===tc){d=!0;let re=Lt(m.location,m.matches);re!=null&&Q({restoreScrollPosition:re})}return()=>{a=null,u=null,l=null}}function Ie(D,L){if(a&&l&&u){let F=L.map(le=>Dh(le,m.loaderData)),re=l(D,F)||D.key;a[re]=u()}}function Lt(D,L){if(a&&l&&u){let F=L.map(he=>Dh(he,m.loaderData)),re=l(D,F)||D.key,le=a[re];if(typeof le=="number")return le}return null}function Ct(D){i=D}return v={get basename(){return e.basename},get state(){return m},get routes(){return r},initialize:Ve,subscribe:W,enableScrollRestoration:J,navigate:E,fetch:K,revalidate:k,createHref:D=>e.history.createHref(D),encodeLocation:D=>e.history.encodeLocation(D),getFetcher:b,deleteFetcher:xe,dispose:Ne,getBlocker:q,deleteBlocker:U,_internalFetchControllers:z,_internalActiveDeferreds:ae,_internalSetRoutes:Ct},v}function Uw(e){return e!=null&&"formData"in e}function Eh(e,t,n){n===void 0&&(n=!1);let r=typeof e=="string"?e:ir(e);if(!t||!Uw(t))return{path:r};if(t.formMethod&&!Gw(t.formMethod))return{path:r,error:An(405,{method:t.formMethod})};let i;if(t.formData&&(i={formMethod:t.formMethod||"get",formAction:c0(r),formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:t.formData},Wn(i.formMethod)))return{path:r,submission:i};let o=zn(r),s=u0(t.formData);return n&&o.search&&f0(o.search)&&s.append("index",""),o.search="?"+s,{path:ir(o),submission:i}}function Bw(e,t){let n=e;if(t){let r=e.findIndex(i=>i.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function bh(e,t,n,r,i,o,s,a,l,u,d,c,p){let w=p?Object.values(p)[0]:c?Object.values(c)[0]:void 0,v=e.createURL(t.location),m=e.createURL(i),R=o||v.toString()===m.toString()||v.search!==m.search,y=p?Object.keys(p)[0]:void 0,x=Bw(n,y).filter((T,M)=>{if(T.route.lazy)return!0;if(T.route.loader==null)return!1;if(Vw(t.loaderData,t.matches[M],T)||s.some(oe=>oe===T.route.id))return!0;let z=t.matches[M],Z=T;return Ch(T,Le({currentUrl:v,currentParams:z.params,nextUrl:m,nextParams:Z.params},r,{actionResult:w,defaultShouldRevalidate:R||l0(z,Z)}))}),C=[];return l.forEach((T,M)=>{if(!n.some(ee=>ee.route.id===T.routeId))return;let z=Ui(u,T.path,d);if(!z){C.push(Le({key:M},T,{matches:null,match:null}));return}let Z=gd(z,T.path);if(a.includes(M)){C.push(Le({key:M,matches:z,match:Z},T));return}Ch(Z,Le({currentUrl:v,currentParams:t.matches[t.matches.length-1].params,nextUrl:m,nextParams:n[n.length-1].params},r,{actionResult:w,defaultShouldRevalidate:R}))&&C.push(Le({key:M,matches:z,match:Z},T))}),[x,C]}function Vw(e,t,n){let r=!t||n.route.id!==t.route.id,i=e[n.route.id]===void 0;return r||i}function l0(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Ch(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function md(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let i=n[e.id];be(i,"No route found in manifest");let o={};for(let s in r){let l=i[s]!==void 0&&s!=="hasErrorBoundary";ci(!l,'Route "'+i.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!l&&!lw.has(s)&&(o[s]=r[s])}Object.assign(i,o),Object.assign(i,{hasErrorBoundary:t(Le({},i)),lazy:void 0})}async function Ao(e,t,n,r,i,o,s,a,l,u){s===void 0&&(s="/"),a===void 0&&(a=!1),l===void 0&&(l=!1);let d,c,p,w=R=>{let y,h=new Promise((x,C)=>y=C);return p=()=>y(),t.signal.addEventListener("abort",p),Promise.race([R({request:t,params:n.params,context:u}),h])};try{let R=n.route[e];if(n.route.lazy)if(R)c=(await Promise.all([w(R),md(n.route,o,i)]))[0];else if(await md(n.route,o,i),R=n.route[e],R)c=await w(R);else{if(e==="action")throw An(405,{method:t.method,pathname:new URL(t.url).pathname,routeId:n.route.id});return{type:ot.data,data:void 0}}else be(R,"Could not find the "+e+' to run on the "'+n.route.id+'" route'),c=await w(R);be(c!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(R){d=ot.error,c=R}finally{p&&t.signal.removeEventListener("abort",p)}if(Zw(c)){let R=c.status;if($w.has(R)){let x=c.headers.get("Location");if(be(x,"Redirects returned/thrown from loaders/actions must have a Location header"),s0.test(x)){if(!a){let C=new URL(t.url),T=x.startsWith("//")?new URL(C.protocol+x):new URL(x),M=js(T.pathname,s)!=null;T.origin===C.origin&&M&&(x=T.pathname+T.search+T.hash)}}else{let C=r.slice(0,r.indexOf(n)+1),T=Zl(C).map(z=>z.pathnameBase),M=Lf(x,T,new URL(t.url).pathname);if(be(ir(M),"Unable to resolve redirect location: "+x),s){let z=M.pathname;M.pathname=z==="/"?s:Yn([s,z])}x=ir(M)}if(a)throw c.headers.set("Location",x),c;return{type:ot.redirect,status:R,location:x,revalidate:c.headers.get("X-Remix-Revalidate")!==null}}if(l)throw{type:d||ot.data,response:c};let y,h=c.headers.get("Content-Type");return h&&/\bapplication\/json\b/.test(h)?y=await c.json():y=await c.text(),d===ot.error?{type:d,error:new $f(R,c.statusText,y),headers:c.headers}:{type:ot.data,data:y,statusCode:c.status,headers:c.headers}}if(d===ot.error)return{type:d,error:c};if(c instanceof Rw){var v,m;return{type:ot.deferred,deferredData:c,statusCode:(v=c.init)==null?void 0:v.status,headers:((m=c.init)==null?void 0:m.headers)&&new Headers(c.init.headers)}}return{type:ot.data,data:c}}function Do(e,t,n,r){let i=e.createURL(c0(t)).toString(),o={signal:n};if(r&&Wn(r.formMethod)){let{formMethod:s,formEncType:a,formData:l}=r;o.method=s.toUpperCase(),o.body=a==="application/x-www-form-urlencoded"?u0(l):l}return new Request(i,o)}function u0(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,r instanceof File?r.name:r);return t}function Hw(e,t,n,r,i){let o={},s=null,a,l=!1,u={};return n.forEach((d,c)=>{let p=t[c].route.id;if(be(!Yi(d),"Cannot handle redirect results in processLoaderData"),Yo(d)){let w=Bi(e,p),v=d.error;r&&(v=Object.values(r)[0],r=void 0),s=s||{},s[w.route.id]==null&&(s[w.route.id]=v),o[p]=void 0,l||(l=!0,a=i0(d.error)?d.error.status:500),d.headers&&(u[p]=d.headers)}else Xr(d)?(i.set(p,d.deferredData),o[p]=d.deferredData.data):o[p]=d.data,d.statusCode!=null&&d.statusCode!==200&&!l&&(a=d.statusCode),d.headers&&(u[p]=d.headers)}),r&&(s=r,o[Object.keys(r)[0]]=void 0),{loaderData:o,errors:s,statusCode:a||200,loaderHeaders:u}}function Oh(e,t,n,r,i,o,s,a){let{loaderData:l,errors:u}=Hw(t,n,r,i,a);for(let d=0;d<o.length;d++){let{key:c,match:p}=o[d];be(s!==void 0&&s[d]!==void 0,"Did not find corresponding fetcher result");let w=s[d];if(Yo(w)){let v=Bi(e.matches,p==null?void 0:p.route.id);u&&u[v.route.id]||(u=Le({},u,{[v.route.id]:w.error})),e.fetchers.delete(c)}else if(Yi(w))be(!1,"Unhandled fetcher revalidation redirect");else if(Xr(w))be(!1,"Unhandled fetcher deferred data");else{let v={state:"idle",data:w.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};e.fetchers.set(c,v)}}return{loaderData:l,errors:u}}function Ph(e,t,n,r){let i=Le({},t);for(let o of n){let s=o.route.id;if(t.hasOwnProperty(s)?t[s]!==void 0&&(i[s]=t[s]):e[s]!==void 0&&o.route.loader&&(i[s]=e[s]),r&&r.hasOwnProperty(s))break}return i}function Bi(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Rh(e){let t=e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function An(e,t){let{pathname:n,routeId:r,method:i,type:o}=t===void 0?{}:t,s="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(s="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o==="defer-action"&&(a="defer() is not supported in actions")):e===403?(s="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):e===404?(s="Not Found",a='No route matches URL "'+n+'"'):e===405&&(s="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new $f(e||500,s,new Error(a),!0)}function Th(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Yi(n))return n}}function c0(e){let t=typeof e=="string"?zn(e):e;return ir(Le({},t,{hash:""}))}function Ww(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash!==t.hash}function Xr(e){return e.type===ot.deferred}function Yo(e){return e.type===ot.error}function Yi(e){return(e&&e.type)===ot.redirect}function Zw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Gw(e){return Lw.has(e)}function Wn(e){return Dw.has(e)}async function Ah(e,t,n,r,i,o){for(let s=0;s<n.length;s++){let a=n[s],l=t[s];if(!l)continue;let u=e.find(c=>c.route.id===l.route.id),d=u!=null&&!l0(u,l)&&(o&&o[l.route.id])!==void 0;Xr(a)&&(i||d)&&await d0(a,r,i).then(c=>{c&&(n[s]=c||n[s])})}}async function d0(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ot.data,data:e.deferredData.unwrappedData}}catch(i){return{type:ot.error,error:i}}return{type:ot.data,data:e.deferredData.data}}}function f0(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function Dh(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],handle:n.handle}}function gd(e,t){let n=typeof t=="string"?zn(t).search:t.search;if(e[e.length-1].route.index&&f0(n||""))return e[e.length-1];let r=Zl(e);return r[r.length-1]}/**
 * React Router v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Qw=typeof Object.is=="function"?Object.is:Kw,{useState:qw,useEffect:Yw,useLayoutEffect:Jw,useDebugValue:Xw}=Sc;function eS(e,t,n){const r=t(),[{inst:i},o]=qw({inst:{value:r,getSnapshot:t}});return Jw(()=>{i.value=r,i.getSnapshot=t,nc(i)&&o({inst:i})},[e,r,t]),Yw(()=>(nc(i)&&o({inst:i}),e(()=>{nc(i)&&o({inst:i})})),[e]),Xw(r),r}function nc(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Qw(n,r)}catch{return!0}}function tS(e,t,n){return t()}const nS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rS=!nS,iS=rS?tS:eS,oS="useSyncExternalStore"in Sc?(e=>e.useSyncExternalStore)(Sc):iS,jf=$.createContext(null),If=$.createContext(null),Is=$.createContext(null),Gl=$.createContext(null),gi=$.createContext({outlet:null,matches:[]}),p0=$.createContext(null);function yd(){return yd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yd.apply(this,arguments)}function sS(e,t){let{relative:n}=t===void 0?{}:t;Ms()||be(!1);let{basename:r,navigator:i}=$.useContext(Is),{hash:o,pathname:s,search:a}=h0(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Yn([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Ms(){return $.useContext(Gl)!=null}function Kl(){return Ms()||be(!1),$.useContext(Gl).location}function zs(){Ms()||be(!1);let{basename:e,navigator:t}=$.useContext(Is),{matches:n}=$.useContext(gi),{pathname:r}=Kl(),i=JSON.stringify(Zl(n).map(a=>a.pathnameBase)),o=$.useRef(!1);return $.useEffect(()=>{o.current=!0}),$.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=Lf(a,JSON.parse(i),r,l.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Yn([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state,l)},[e,t,i,r])}const aS=$.createContext(null);function lS(e){let t=$.useContext(gi).outlet;return t&&$.createElement(aS.Provider,{value:e},t)}function h0(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=$.useContext(gi),{pathname:i}=Kl(),o=JSON.stringify(Zl(r).map(s=>s.pathnameBase));return $.useMemo(()=>Lf(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function uS(e,t){Ms()||be(!1);let{navigator:n}=$.useContext(Is),r=$.useContext(If),{matches:i}=$.useContext(gi),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Kl(),u;if(t){var d;let m=typeof t=="string"?zn(t):t;a==="/"||(d=m.pathname)!=null&&d.startsWith(a)||be(!1),u=m}else u=l;let c=u.pathname||"/",p=a==="/"?c:c.slice(a.length)||"/",w=Ui(e,{pathname:p}),v=pS(w&&w.map(m=>Object.assign({},m,{params:Object.assign({},s,m.params),pathname:Yn([a,n.encodeLocation?n.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?a:Yn([a,n.encodeLocation?n.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),i,r||void 0);return t&&v?$.createElement(Gl.Provider,{value:{location:yd({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:tt.Pop}},v):v}function cS(){let e=yS(),t=i0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},t),n?$.createElement("pre",{style:i},n):null,o)}class dS extends $.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?$.createElement(gi.Provider,{value:this.props.routeContext},$.createElement(p0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function fS(e){let{routeContext:t,match:n,children:r}=e,i=$.useContext(jf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),$.createElement(gi.Provider,{value:t},r)}function pS(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(s=>s.route.id&&(i==null?void 0:i[s.route.id]));o>=0||be(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,s,a)=>{let l=s.route.id?i==null?void 0:i[s.route.id]:null,u=null;n&&(s.route.ErrorBoundary?u=$.createElement(s.route.ErrorBoundary,null):s.route.errorElement?u=s.route.errorElement:u=$.createElement(cS,null));let d=t.concat(r.slice(0,a+1)),c=()=>{let p=o;return l?p=u:s.route.Component?p=$.createElement(s.route.Component,null):s.route.element&&(p=s.route.element),$.createElement(fS,{match:s,routeContext:{outlet:o,matches:d},children:p})};return n&&(s.route.ErrorBoundary||s.route.errorElement||a===0)?$.createElement(dS,{location:n.location,component:u,error:l,children:c(),routeContext:{outlet:null,matches:d}}):c()},null)}var Nh;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Nh||(Nh={}));var cl;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(cl||(cl={}));function hS(e){let t=$.useContext(If);return t||be(!1),t}function mS(e){let t=$.useContext(gi);return t||be(!1),t}function gS(e){let t=mS(),n=t.matches[t.matches.length-1];return n.route.id||be(!1),n.route.id}function yS(){var e;let t=$.useContext(p0),n=hS(cl.UseRouteError),r=gS(cl.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function vS(e){let{fallbackElement:t,router:n}=e,r=$.useCallback(()=>n.state,[n]),i=oS(n.subscribe,r,r),o=$.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:l=>n.navigate(l),push:(l,u,d)=>n.navigate(l,{state:u,preventScrollReset:d==null?void 0:d.preventScrollReset}),replace:(l,u,d)=>n.navigate(l,{replace:!0,state:u,preventScrollReset:d==null?void 0:d.preventScrollReset})}),[n]),s=n.basename||"/",a=$.useMemo(()=>({router:n,navigator:o,static:!1,basename:s}),[n,o,s]);return $.createElement($.Fragment,null,$.createElement(jf.Provider,{value:a},$.createElement(If.Provider,{value:i},$.createElement(SS,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:o},n.state.initialized?$.createElement(_S,null):t))),null)}function xS(e){return lS(e.context)}function wS(e){be(!1)}function SS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=tt.Pop,navigator:o,static:s=!1}=e;Ms()&&be(!1);let a=t.replace(/^\/*/,"/"),l=$.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=zn(r));let{pathname:u="/",search:d="",hash:c="",state:p=null,key:w="default"}=r,v=$.useMemo(()=>{let m=js(u,a);return m==null?null:{location:{pathname:m,search:d,hash:c,state:p,key:w},navigationType:i}},[a,u,d,c,p,w,i]);return v==null?null:$.createElement(Is.Provider,{value:l},$.createElement(Gl.Provider,{children:n,value:v}))}function _S(e){let{children:t,location:n}=e,r=$.useContext(jf),i=r&&!t?r.router.routes:vd(t);return uS(i,n)}var Lh;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Lh||(Lh={}));new Promise(()=>{});function vd(e,t){t===void 0&&(t=[]);let n=[];return $.Children.forEach(e,(r,i)=>{if(!$.isValidElement(r))return;if(r.type===$.Fragment){n.push.apply(n,vd(r.props.children,t));return}r.type!==wS&&be(!1),!r.props.index||!r.props.children||be(!1);let o=[...t,i],s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=vd(r.props.children,o)),n.push(s)}),n}function kS(e){return!!e.ErrorBoundary||!!e.errorElement}/**
 * React Router DOM v6.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function dl(){return dl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},dl.apply(this,arguments)}function ES(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function bS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function CS(e,t){return e.button===0&&(!t||t==="_self")&&!bS(e)}const OS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function PS(e,t){return Fw({basename:t==null?void 0:t.basename,history:ow({window:t==null?void 0:t.window}),hydrationData:(t==null?void 0:t.hydrationData)||RS(),routes:e,detectErrorBoundary:kS}).initialize()}function RS(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=dl({},t,{errors:TS(t.errors)})),t}function TS(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,i]of t)if(i&&i.__type==="RouteErrorResponse")n[r]=new $f(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let o=new Error(i.message);o.stack="",n[r]=o}else n[r]=i;return n}const AS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",DS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ql=$.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d}=t,c=ES(t,OS),{basename:p}=$.useContext(Is),w,v=!1;if(typeof u=="string"&&DS.test(u)&&(w=u,AS)){let h=new URL(window.location.href),x=u.startsWith("//")?new URL(h.protocol+u):new URL(u),C=js(x.pathname,p);x.origin===h.origin&&C!=null?u=C+x.search+x.hash:v=!0}let m=sS(u,{relative:i}),R=NS(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:i});function y(h){r&&r(h),h.defaultPrevented||R(h)}return $.createElement("a",dl({},c,{href:w||m,onClick:v||o?r:y,ref:n,target:l}))});var $h;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})($h||($h={}));var jh;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(jh||(jh={}));function NS(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=t===void 0?{}:t,a=zs(),l=Kl(),u=h0(e,{relative:s});return $.useCallback(d=>{if(CS(d,n)){d.preventDefault();let c=r!==void 0?r:ir(l)===ir(u);a(e,{replace:c,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,e,o,s])}var m0={exports:{}},Ue={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mf=Symbol.for("react.element"),zf=Symbol.for("react.portal"),ql=Symbol.for("react.fragment"),Yl=Symbol.for("react.strict_mode"),Jl=Symbol.for("react.profiler"),Xl=Symbol.for("react.provider"),eu=Symbol.for("react.context"),LS=Symbol.for("react.server_context"),tu=Symbol.for("react.forward_ref"),nu=Symbol.for("react.suspense"),ru=Symbol.for("react.suspense_list"),iu=Symbol.for("react.memo"),ou=Symbol.for("react.lazy"),$S=Symbol.for("react.offscreen"),g0;g0=Symbol.for("react.module.reference");function dn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Mf:switch(e=e.type,e){case ql:case Jl:case Yl:case nu:case ru:return e;default:switch(e=e&&e.$$typeof,e){case LS:case eu:case tu:case ou:case iu:case Xl:return e;default:return t}}case zf:return t}}}Ue.ContextConsumer=eu;Ue.ContextProvider=Xl;Ue.Element=Mf;Ue.ForwardRef=tu;Ue.Fragment=ql;Ue.Lazy=ou;Ue.Memo=iu;Ue.Portal=zf;Ue.Profiler=Jl;Ue.StrictMode=Yl;Ue.Suspense=nu;Ue.SuspenseList=ru;Ue.isAsyncMode=function(){return!1};Ue.isConcurrentMode=function(){return!1};Ue.isContextConsumer=function(e){return dn(e)===eu};Ue.isContextProvider=function(e){return dn(e)===Xl};Ue.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mf};Ue.isForwardRef=function(e){return dn(e)===tu};Ue.isFragment=function(e){return dn(e)===ql};Ue.isLazy=function(e){return dn(e)===ou};Ue.isMemo=function(e){return dn(e)===iu};Ue.isPortal=function(e){return dn(e)===zf};Ue.isProfiler=function(e){return dn(e)===Jl};Ue.isStrictMode=function(e){return dn(e)===Yl};Ue.isSuspense=function(e){return dn(e)===nu};Ue.isSuspenseList=function(e){return dn(e)===ru};Ue.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ql||e===Jl||e===Yl||e===nu||e===ru||e===$S||typeof e=="object"&&e!==null&&(e.$$typeof===ou||e.$$typeof===iu||e.$$typeof===Xl||e.$$typeof===eu||e.$$typeof===tu||e.$$typeof===g0||e.getModuleId!==void 0)};Ue.typeOf=dn;m0.exports=Ue;var y0=m0.exports;function jS(e){function t(k,S,A,V,b){for(var K=0,I=0,Oe=0,me=0,ge,ie,De=0,xe=0,we,_=we=ge=0,O=0,N=0,q=0,U=0,B=A.length,Y=B-1,Ee,J="",Ie="",Lt="",Ct="",D;O<B;){if(ie=A.charCodeAt(O),O===Y&&I+me+Oe+K!==0&&(I!==0&&(ie=I===47?10:47),me=Oe=K=0,B++,Y++),I+me+Oe+K===0){if(O===Y&&(0<N&&(J=J.replace(p,"")),0<J.trim().length)){switch(ie){case 32:case 9:case 59:case 13:case 10:break;default:J+=A.charAt(O)}ie=59}switch(ie){case 123:for(J=J.trim(),ge=J.charCodeAt(0),we=1,U=++O;O<B;){switch(ie=A.charCodeAt(O)){case 123:we++;break;case 125:we--;break;case 47:switch(ie=A.charCodeAt(O+1)){case 42:case 47:e:{for(_=O+1;_<Y;++_)switch(A.charCodeAt(_)){case 47:if(ie===42&&A.charCodeAt(_-1)===42&&O+2!==_){O=_+1;break e}break;case 10:if(ie===47){O=_+1;break e}}O=_}}break;case 91:ie++;case 40:ie++;case 34:case 39:for(;O++<Y&&A.charCodeAt(O)!==ie;);}if(we===0)break;O++}switch(we=A.substring(U,O),ge===0&&(ge=(J=J.replace(c,"").trim()).charCodeAt(0)),ge){case 64:switch(0<N&&(J=J.replace(p,"")),ie=J.charCodeAt(1),ie){case 100:case 109:case 115:case 45:N=S;break;default:N=Ve}if(we=t(S,N,we,ie,b+1),U=we.length,0<W&&(N=n(Ve,J,q),D=a(3,we,N,S,ae,se,U,ie,b,V),J=N.join(""),D!==void 0&&(U=(we=D.trim()).length)===0&&(ie=0,we="")),0<U)switch(ie){case 115:J=J.replace(M,s);case 100:case 109:case 45:we=J+"{"+we+"}";break;case 107:J=J.replace(h,"$1 $2"),we=J+"{"+we+"}",we=_e===1||_e===2&&o("@"+we,3)?"@-webkit-"+we+"@"+we:"@"+we;break;default:we=J+we,V===112&&(we=(Ie+=we,""))}else we="";break;default:we=t(S,n(S,J,q),we,V,b+1)}Lt+=we,we=q=N=_=ge=0,J="",ie=A.charCodeAt(++O);break;case 125:case 59:if(J=(0<N?J.replace(p,""):J).trim(),1<(U=J.length))switch(_===0&&(ge=J.charCodeAt(0),ge===45||96<ge&&123>ge)&&(U=(J=J.replace(" ",":")).length),0<W&&(D=a(1,J,S,k,ae,se,Ie.length,V,b,V))!==void 0&&(U=(J=D.trim()).length)===0&&(J="\0\0"),ge=J.charCodeAt(0),ie=J.charCodeAt(1),ge){case 0:break;case 64:if(ie===105||ie===99){Ct+=J+A.charAt(O);break}default:J.charCodeAt(U-1)!==58&&(Ie+=i(J,ge,ie,J.charCodeAt(2)))}q=N=_=ge=0,J="",ie=A.charCodeAt(++O)}}switch(ie){case 13:case 10:I===47?I=0:1+ge===0&&V!==107&&0<J.length&&(N=1,J+="\0"),0<W*ce&&a(0,J,S,k,ae,se,Ie.length,V,b,V),se=1,ae++;break;case 59:case 125:if(I+me+Oe+K===0){se++;break}default:switch(se++,Ee=A.charAt(O),ie){case 9:case 32:if(me+K+I===0)switch(De){case 44:case 58:case 9:case 32:Ee="";break;default:ie!==32&&(Ee=" ")}break;case 0:Ee="\\0";break;case 12:Ee="\\f";break;case 11:Ee="\\v";break;case 38:me+I+K===0&&(N=q=1,Ee="\f"+Ee);break;case 108:if(me+I+K+ve===0&&0<_)switch(O-_){case 2:De===112&&A.charCodeAt(O-3)===58&&(ve=De);case 8:xe===111&&(ve=xe)}break;case 58:me+I+K===0&&(_=O);break;case 44:I+Oe+me+K===0&&(N=1,Ee+="\r");break;case 34:case 39:I===0&&(me=me===ie?0:me===0?ie:me);break;case 91:me+I+Oe===0&&K++;break;case 93:me+I+Oe===0&&K--;break;case 41:me+I+K===0&&Oe--;break;case 40:if(me+I+K===0){if(ge===0)switch(2*De+3*xe){case 533:break;default:ge=1}Oe++}break;case 64:I+Oe+me+K+_+we===0&&(we=1);break;case 42:case 47:if(!(0<me+K+Oe))switch(I){case 0:switch(2*ie+3*A.charCodeAt(O+1)){case 235:I=47;break;case 220:U=O,I=42}break;case 42:ie===47&&De===42&&U+2!==O&&(A.charCodeAt(U+2)===33&&(Ie+=A.substring(U,O+1)),Ee="",I=0)}}I===0&&(J+=Ee)}xe=De,De=ie,O++}if(U=Ie.length,0<U){if(N=S,0<W&&(D=a(2,Ie,N,k,ae,se,U,V,b,V),D!==void 0&&(Ie=D).length===0))return Ct+Ie+Lt;if(Ie=N.join(",")+"{"+Ie+"}",_e*ve!==0){switch(_e!==2||o(Ie,2)||(ve=0),ve){case 111:Ie=Ie.replace(C,":-moz-$1")+Ie;break;case 112:Ie=Ie.replace(x,"::-webkit-input-$1")+Ie.replace(x,"::-moz-$1")+Ie.replace(x,":-ms-input-$1")+Ie}ve=0}}return Ct+Ie+Lt}function n(k,S,A){var V=S.trim().split(R);S=V;var b=V.length,K=k.length;switch(K){case 0:case 1:var I=0;for(k=K===0?"":k[0]+" ";I<b;++I)S[I]=r(k,S[I],A).trim();break;default:var Oe=I=0;for(S=[];I<b;++I)for(var me=0;me<K;++me)S[Oe++]=r(k[me]+" ",V[I],A).trim()}return S}function r(k,S,A){var V=S.charCodeAt(0);switch(33>V&&(V=(S=S.trim()).charCodeAt(0)),V){case 38:return S.replace(y,"$1"+k.trim());case 58:return k.trim()+S.replace(y,"$1"+k.trim());default:if(0<1*A&&0<S.indexOf("\f"))return S.replace(y,(k.charCodeAt(0)===58?"":"$1")+k.trim())}return k+S}function i(k,S,A,V){var b=k+";",K=2*S+3*A+4*V;if(K===944){k=b.indexOf(":",9)+1;var I=b.substring(k,b.length-1).trim();return I=b.substring(0,k).trim()+I+";",_e===1||_e===2&&o(I,1)?"-webkit-"+I+I:I}if(_e===0||_e===2&&!o(b,1))return b;switch(K){case 1015:return b.charCodeAt(10)===97?"-webkit-"+b+b:b;case 951:return b.charCodeAt(3)===116?"-webkit-"+b+b:b;case 963:return b.charCodeAt(5)===110?"-webkit-"+b+b:b;case 1009:if(b.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+b+b;case 978:return"-webkit-"+b+"-moz-"+b+b;case 1019:case 983:return"-webkit-"+b+"-moz-"+b+"-ms-"+b+b;case 883:if(b.charCodeAt(8)===45)return"-webkit-"+b+b;if(0<b.indexOf("image-set(",11))return b.replace(Ae,"$1-webkit-$2")+b;break;case 932:if(b.charCodeAt(4)===45)switch(b.charCodeAt(5)){case 103:return"-webkit-box-"+b.replace("-grow","")+"-webkit-"+b+"-ms-"+b.replace("grow","positive")+b;case 115:return"-webkit-"+b+"-ms-"+b.replace("shrink","negative")+b;case 98:return"-webkit-"+b+"-ms-"+b.replace("basis","preferred-size")+b}return"-webkit-"+b+"-ms-"+b+b;case 964:return"-webkit-"+b+"-ms-flex-"+b+b;case 1023:if(b.charCodeAt(8)!==99)break;return I=b.substring(b.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+I+"-webkit-"+b+"-ms-flex-pack"+I+b;case 1005:return v.test(b)?b.replace(w,":-webkit-")+b.replace(w,":-moz-")+b:b;case 1e3:switch(I=b.substring(13).trim(),S=I.indexOf("-")+1,I.charCodeAt(0)+I.charCodeAt(S)){case 226:I=b.replace(T,"tb");break;case 232:I=b.replace(T,"tb-rl");break;case 220:I=b.replace(T,"lr");break;default:return b}return"-webkit-"+b+"-ms-"+I+b;case 1017:if(b.indexOf("sticky",9)===-1)break;case 975:switch(S=(b=k).length-10,I=(b.charCodeAt(S)===33?b.substring(0,S):b).substring(k.indexOf(":",7)+1).trim(),K=I.charCodeAt(0)+(I.charCodeAt(7)|0)){case 203:if(111>I.charCodeAt(8))break;case 115:b=b.replace(I,"-webkit-"+I)+";"+b;break;case 207:case 102:b=b.replace(I,"-webkit-"+(102<K?"inline-":"")+"box")+";"+b.replace(I,"-webkit-"+I)+";"+b.replace(I,"-ms-"+I+"box")+";"+b}return b+";";case 938:if(b.charCodeAt(5)===45)switch(b.charCodeAt(6)){case 105:return I=b.replace("-items",""),"-webkit-"+b+"-webkit-box-"+I+"-ms-flex-"+I+b;case 115:return"-webkit-"+b+"-ms-flex-item-"+b.replace(Z,"")+b;default:return"-webkit-"+b+"-ms-flex-line-pack"+b.replace("align-content","").replace(Z,"")+b}break;case 973:case 989:if(b.charCodeAt(3)!==45||b.charCodeAt(4)===122)break;case 931:case 953:if(ee.test(k)===!0)return(I=k.substring(k.indexOf(":")+1)).charCodeAt(0)===115?i(k.replace("stretch","fill-available"),S,A,V).replace(":fill-available",":stretch"):b.replace(I,"-webkit-"+I)+b.replace(I,"-moz-"+I.replace("fill-",""))+b;break;case 962:if(b="-webkit-"+b+(b.charCodeAt(5)===102?"-ms-"+b:"")+b,A+V===211&&b.charCodeAt(13)===105&&0<b.indexOf("transform",10))return b.substring(0,b.indexOf(";",27)+1).replace(m,"$1-webkit-$2")+b}return b}function o(k,S){var A=k.indexOf(S===1?":":"{"),V=k.substring(0,S!==3?A:10);return A=k.substring(A+1,k.length-1),Q(S!==2?V:V.replace(oe,"$1"),A,S)}function s(k,S){var A=i(S,S.charCodeAt(0),S.charCodeAt(1),S.charCodeAt(2));return A!==S+";"?A.replace(z," or ($1)").substring(4):"("+S+")"}function a(k,S,A,V,b,K,I,Oe,me,ge){for(var ie=0,De=S,xe;ie<W;++ie)switch(xe=Ne[ie].call(d,k,De,A,V,b,K,I,Oe,me,ge)){case void 0:case!1:case!0:case null:break;default:De=xe}if(De!==S)return De}function l(k){switch(k){case void 0:case null:W=Ne.length=0;break;default:if(typeof k=="function")Ne[W++]=k;else if(typeof k=="object")for(var S=0,A=k.length;S<A;++S)l(k[S]);else ce=!!k|0}return l}function u(k){return k=k.prefix,k!==void 0&&(Q=null,k?typeof k!="function"?_e=1:(_e=2,Q=k):_e=0),u}function d(k,S){var A=k;if(33>A.charCodeAt(0)&&(A=A.trim()),E=A,A=[E],0<W){var V=a(-1,S,A,A,ae,se,0,0,0,0);V!==void 0&&typeof V=="string"&&(S=V)}var b=t(Ve,A,S,0,0);return 0<W&&(V=a(-2,b,A,A,ae,se,b.length,0,0,0),V!==void 0&&(b=V)),E="",ve=0,se=ae=1,b}var c=/^\0+/g,p=/[\0\r\f]/g,w=/: */g,v=/zoo|gra/,m=/([,: ])(transform)/g,R=/,\r+?/g,y=/([\t\r\n ])*\f?&/g,h=/@(k\w+)\s*(\S*)\s*/,x=/::(place)/g,C=/:(read-only)/g,T=/[svh]\w+-[tblr]{2}/,M=/\(\s*(.*)\s*\)/g,z=/([\s\S]*?);/g,Z=/-self|flex-/g,oe=/[^]*?(:[rp][el]a[\w-]+)[^]*/,ee=/stretch|:\s*\w+\-(?:conte|avail)/,Ae=/([^-])(image-set\()/,se=1,ae=1,ve=0,_e=1,Ve=[],Ne=[],W=0,Q=null,ce=0,E="";return d.use=l,d.set=u,e!==void 0&&u(e),d}var IS={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function MS(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var zS=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ih=MS(function(e){return zS.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),v0={exports:{}},Be={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ft=typeof Symbol=="function"&&Symbol.for,Ff=ft?Symbol.for("react.element"):60103,Uf=ft?Symbol.for("react.portal"):60106,su=ft?Symbol.for("react.fragment"):60107,au=ft?Symbol.for("react.strict_mode"):60108,lu=ft?Symbol.for("react.profiler"):60114,uu=ft?Symbol.for("react.provider"):60109,cu=ft?Symbol.for("react.context"):60110,Bf=ft?Symbol.for("react.async_mode"):60111,du=ft?Symbol.for("react.concurrent_mode"):60111,fu=ft?Symbol.for("react.forward_ref"):60112,pu=ft?Symbol.for("react.suspense"):60113,FS=ft?Symbol.for("react.suspense_list"):60120,hu=ft?Symbol.for("react.memo"):60115,mu=ft?Symbol.for("react.lazy"):60116,US=ft?Symbol.for("react.block"):60121,BS=ft?Symbol.for("react.fundamental"):60117,VS=ft?Symbol.for("react.responder"):60118,HS=ft?Symbol.for("react.scope"):60119;function Kt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ff:switch(e=e.type,e){case Bf:case du:case su:case lu:case au:case pu:return e;default:switch(e=e&&e.$$typeof,e){case cu:case fu:case mu:case hu:case uu:return e;default:return t}}case Uf:return t}}}function x0(e){return Kt(e)===du}Be.AsyncMode=Bf;Be.ConcurrentMode=du;Be.ContextConsumer=cu;Be.ContextProvider=uu;Be.Element=Ff;Be.ForwardRef=fu;Be.Fragment=su;Be.Lazy=mu;Be.Memo=hu;Be.Portal=Uf;Be.Profiler=lu;Be.StrictMode=au;Be.Suspense=pu;Be.isAsyncMode=function(e){return x0(e)||Kt(e)===Bf};Be.isConcurrentMode=x0;Be.isContextConsumer=function(e){return Kt(e)===cu};Be.isContextProvider=function(e){return Kt(e)===uu};Be.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ff};Be.isForwardRef=function(e){return Kt(e)===fu};Be.isFragment=function(e){return Kt(e)===su};Be.isLazy=function(e){return Kt(e)===mu};Be.isMemo=function(e){return Kt(e)===hu};Be.isPortal=function(e){return Kt(e)===Uf};Be.isProfiler=function(e){return Kt(e)===lu};Be.isStrictMode=function(e){return Kt(e)===au};Be.isSuspense=function(e){return Kt(e)===pu};Be.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===su||e===du||e===lu||e===au||e===pu||e===FS||typeof e=="object"&&e!==null&&(e.$$typeof===mu||e.$$typeof===hu||e.$$typeof===uu||e.$$typeof===cu||e.$$typeof===fu||e.$$typeof===BS||e.$$typeof===VS||e.$$typeof===HS||e.$$typeof===US)};Be.typeOf=Kt;v0.exports=Be;var WS=v0.exports,Vf=WS,ZS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},GS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},KS={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},w0={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Hf={};Hf[Vf.ForwardRef]=KS;Hf[Vf.Memo]=w0;function Mh(e){return Vf.isMemo(e)?w0:Hf[e.$$typeof]||ZS}var QS=Object.defineProperty,qS=Object.getOwnPropertyNames,zh=Object.getOwnPropertySymbols,YS=Object.getOwnPropertyDescriptor,JS=Object.getPrototypeOf,Fh=Object.prototype;function S0(e,t,n){if(typeof t!="string"){if(Fh){var r=JS(t);r&&r!==Fh&&S0(e,r,n)}var i=qS(t);zh&&(i=i.concat(zh(t)));for(var o=Mh(e),s=Mh(t),a=0;a<i.length;++a){var l=i[a];if(!GS[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var u=YS(t,l);try{QS(e,l,u)}catch{}}}}return e}var XS=S0;const e_=Id(XS);function Qn(){return(Qn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Uh=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},xd=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!y0.typeOf(e)},fl=Object.freeze([]),Rr=Object.freeze({});function ys(e){return typeof e=="function"}function Bh(e){return e.displayName||e.name||"Component"}function Wf(e){return e&&typeof e.styledComponentId=="string"}var uo=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Zf=typeof window<"u"&&"HTMLElement"in window,t_=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Fs(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var n_=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,s=o;n>=s;)(s<<=1)<0&&Fs(16,""+n);this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var a=o;a<s;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,d=r.length;u<d;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var s=i;s<o;s++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),s=o+i,a=o;a<s;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Pa=new Map,pl=new Map,Jo=1,ha=function(e){if(Pa.has(e))return Pa.get(e);for(;pl.has(Jo);)Jo++;var t=Jo++;return Pa.set(e,t),pl.set(t,e),t},r_=function(e){return pl.get(e)},i_=function(e,t){t>=Jo&&(Jo=t+1),Pa.set(e,t),pl.set(t,e)},o_="style["+uo+'][data-styled-version="5.3.9"]',s_=new RegExp("^"+uo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),a_=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},l_=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var s=n[i].trim();if(s){var a=s.match(s_);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(i_(u,l),a_(e,u,a[3]),e.getTag().insertRules(l,r)),r.length=0}else r.push(s)}}},u_=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},_0=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var d=l[u];if(d&&d.nodeType===1&&d.hasAttribute(uo))return d}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(uo,"active"),r.setAttribute("data-styled-version","5.3.9");var s=u_();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},c_=function(){function e(n){var r=this.element=_0(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,a=o.length;s<a;s++){var l=o[s];if(l.ownerNode===i)return l}Fs(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),d_=function(){function e(n){var r=this.element=_0(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),f_=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Vh=Zf,p_={isServer:!Zf,useCSSOMInjection:!t_},k0=function(){function e(n,r,i){n===void 0&&(n=Rr),r===void 0&&(r={}),this.options=Qn({},p_,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Zf&&Vh&&(Vh=!1,function(o){for(var s=document.querySelectorAll(o_),a=0,l=s.length;a<l;a++){var u=s[a];u&&u.getAttribute(uo)!=="active"&&(l_(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return ha(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Qn({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,s=r.target,n=i?new f_(s):o?new c_(s):new d_(s),new n_(n)));var n,r,i,o,s},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(ha(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(ha(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(ha(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",s=0;s<i;s++){var a=r_(s);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(s);if(l&&u&&l.size){var d=uo+".g"+s+'[id="'+a+'"]',c="";l!==void 0&&l.forEach(function(p){p.length>0&&(c+=p+",")}),o+=""+u+d+'{content:"'+c+`"}/*!sc*/
`}}}return o}(this)},e}(),h_=/(a)(d)/gi,Hh=function(e){return String.fromCharCode(e+(e>25?39:97))};function wd(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Hh(t%52)+n;return(Hh(t%52)+n).replace(h_,"$1-$2")}var Vi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},E0=function(e){return Vi(5381,e)};function m_(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ys(n)&&!Wf(n))return!1}return!0}var g_=E0("5.3.9"),y_=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&m_(t),this.componentId=n,this.baseHash=Vi(g_,n),this.baseStyle=r,k0.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var s=co(this.rules,t,n,r).join(""),a=wd(Vi(this.baseHash,s)>>>0);if(!n.hasNameForId(i,a)){var l=r(s,"."+a,void 0,i);n.insertRules(i,a,l)}o.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,d=Vi(this.baseHash,r.hash),c="",p=0;p<u;p++){var w=this.rules[p];if(typeof w=="string")c+=w;else if(w){var v=co(w,t,n,r),m=Array.isArray(v)?v.join(""):v;d=Vi(d,m+p),c+=m}}if(c){var R=wd(d>>>0);if(!n.hasNameForId(i,R)){var y=r(c,"."+R,void 0,i);n.insertRules(i,R,y)}o.push(R)}}return o.join(" ")},e}(),v_=/^\s*\/\/.*$/gm,x_=[":","[",".","#"];function w_(e){var t,n,r,i,o=e===void 0?Rr:e,s=o.options,a=s===void 0?Rr:s,l=o.plugins,u=l===void 0?fl:l,d=new jS(a),c=[],p=function(m){function R(y){if(y)try{m(y+"}")}catch{}}return function(y,h,x,C,T,M,z,Z,oe,ee){switch(y){case 1:if(oe===0&&h.charCodeAt(0)===64)return m(h+";"),"";break;case 2:if(Z===0)return h+"/*|*/";break;case 3:switch(Z){case 102:case 112:return m(x[0]+h),"";default:return h+(ee===0?"/*|*/":"")}case-2:h.split("/*|*/}").forEach(R)}}}(function(m){c.push(m)}),w=function(m,R,y){return R===0&&x_.indexOf(y[n.length])!==-1||y.match(i)?m:"."+t};function v(m,R,y,h){h===void 0&&(h="&");var x=m.replace(v_,""),C=R&&y?y+" "+R+" { "+x+" }":x;return t=h,n=R,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(y||!R?"":R,C)}return d.use([].concat(u,[function(m,R,y){m===2&&y.length&&y[0].lastIndexOf(n)>0&&(y[0]=y[0].replace(r,w))},p,function(m){if(m===-2){var R=c;return c=[],R}}])),v.hash=u.length?u.reduce(function(m,R){return R.name||Fs(15),Vi(m,R.name)},5381).toString():"",v}var b0=jt.createContext();b0.Consumer;var C0=jt.createContext(),S_=(C0.Consumer,new k0),Sd=w_();function __(){return $.useContext(b0)||S_}function k_(){return $.useContext(C0)||Sd}var E_=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Sd);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.toString=function(){return Fs(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Sd),this.name+t.hash},e}(),b_=/([A-Z])/,C_=/([A-Z])/g,O_=/^ms-/,P_=function(e){return"-"+e.toLowerCase()};function Wh(e){return b_.test(e)?e.replace(C_,P_).replace(O_,"-ms-"):e}var Zh=function(e){return e==null||e===!1||e===""};function co(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],s=0,a=e.length;s<a;s+=1)(i=co(e[s],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Zh(e))return"";if(Wf(e))return"."+e.styledComponentId;if(ys(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var l=e(t);return co(l,t,n,r)}var u;return e instanceof E_?n?(e.inject(n,r),e.getName(r)):e:xd(e)?function d(c,p){var w,v,m=[];for(var R in c)c.hasOwnProperty(R)&&!Zh(c[R])&&(Array.isArray(c[R])&&c[R].isCss||ys(c[R])?m.push(Wh(R)+":",c[R],";"):xd(c[R])?m.push.apply(m,d(c[R],R)):m.push(Wh(R)+": "+(w=R,(v=c[R])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||w in IS?String(v).trim():v+"px")+";"));return p?[p+" {"].concat(m,["}"]):m}(e):e.toString()}var Gh=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function R_(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return ys(e)||xd(e)?Gh(co(Uh(fl,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Gh(co(Uh(e,n)))}var T_=function(e,t,n){return n===void 0&&(n=Rr),e.theme!==n.theme&&e.theme||t||n.theme},A_=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,D_=/(^-|-$)/g;function rc(e){return e.replace(A_,"-").replace(D_,"")}var N_=function(e){return wd(E0(e)>>>0)};function ma(e){return typeof e=="string"&&!0}var _d=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},L_=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function $_(e,t,n){var r=e[n];_d(t)&&_d(r)?O0(r,t):e[n]=t}function O0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var s=o[i];if(_d(s))for(var a in s)L_(a)&&$_(e,s[a],a)}return e}var P0=jt.createContext();P0.Consumer;var ic={};function R0(e,t,n){var r=Wf(e),i=!ma(e),o=t.attrs,s=o===void 0?fl:o,a=t.componentId,l=a===void 0?function(h,x){var C=typeof h!="string"?"sc":rc(h);ic[C]=(ic[C]||0)+1;var T=C+"-"+N_("5.3.9"+C+ic[C]);return x?x+"-"+T:T}(t.displayName,t.parentComponentId):a,u=t.displayName,d=u===void 0?function(h){return ma(h)?"styled."+h:"Styled("+Bh(h)+")"}(e):u,c=t.displayName&&t.componentId?rc(t.displayName)+"-"+t.componentId:t.componentId||l,p=r&&e.attrs?Array.prototype.concat(e.attrs,s).filter(Boolean):s,w=t.shouldForwardProp;r&&e.shouldForwardProp&&(w=t.shouldForwardProp?function(h,x,C){return e.shouldForwardProp(h,x,C)&&t.shouldForwardProp(h,x,C)}:e.shouldForwardProp);var v,m=new y_(n,c,r?e.componentStyle:void 0),R=m.isStatic&&s.length===0,y=function(h,x){return function(C,T,M,z){var Z=C.attrs,oe=C.componentStyle,ee=C.defaultProps,Ae=C.foldedComponentIds,se=C.shouldForwardProp,ae=C.styledComponentId,ve=C.target,_e=function(V,b,K){V===void 0&&(V=Rr);var I=Qn({},b,{theme:V}),Oe={};return K.forEach(function(me){var ge,ie,De,xe=me;for(ge in ys(xe)&&(xe=xe(I)),xe)I[ge]=Oe[ge]=ge==="className"?(ie=Oe[ge],De=xe[ge],ie&&De?ie+" "+De:ie||De):xe[ge]}),[I,Oe]}(T_(T,$.useContext(P0),ee)||Rr,T,Z),Ve=_e[0],Ne=_e[1],W=function(V,b,K,I){var Oe=__(),me=k_(),ge=b?V.generateAndInjectStyles(Rr,Oe,me):V.generateAndInjectStyles(K,Oe,me);return ge}(oe,z,Ve),Q=M,ce=Ne.$as||T.$as||Ne.as||T.as||ve,E=ma(ce),k=Ne!==T?Qn({},T,{},Ne):T,S={};for(var A in k)A[0]!=="$"&&A!=="as"&&(A==="forwardedAs"?S.as=k[A]:(se?se(A,Ih,ce):!E||Ih(A))&&(S[A]=k[A]));return T.style&&Ne.style!==T.style&&(S.style=Qn({},T.style,{},Ne.style)),S.className=Array.prototype.concat(Ae,ae,W!==ae?W:null,T.className,Ne.className).filter(Boolean).join(" "),S.ref=Q,$.createElement(ce,S)}(v,h,x,R)};return y.displayName=d,(v=jt.forwardRef(y)).attrs=p,v.componentStyle=m,v.displayName=d,v.shouldForwardProp=w,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):fl,v.styledComponentId=c,v.target=r?e.target:e,v.withComponent=function(h){var x=t.componentId,C=function(M,z){if(M==null)return{};var Z,oe,ee={},Ae=Object.keys(M);for(oe=0;oe<Ae.length;oe++)Z=Ae[oe],z.indexOf(Z)>=0||(ee[Z]=M[Z]);return ee}(t,["componentId"]),T=x&&x+"-"+(ma(h)?h:rc(Bh(h)));return R0(h,Qn({},C,{attrs:p,componentId:T}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=r?O0({},e.defaultProps,h):h}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),i&&e_(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var kd=function(e){return function t(n,r,i){if(i===void 0&&(i=Rr),!y0.isValidElementType(r))return Fs(1,String(r));var o=function(){return n(r,i,R_.apply(void 0,arguments))};return o.withConfig=function(s){return t(n,r,Qn({},i,{},s))},o.attrs=function(s){return t(n,r,Qn({},i,{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o}(R0,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){kd[e]=kd(e)});const g=kd,j_=g.div`
  background-image: url("/img/5593055.jpg");
  background-size: 1000px;
  background-position: 500px;
  height: 300px;
  width: 100%;
  margin-top: 100px;
`,I_=g.div`
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  align-self: flex-end;
  border-top: 1px solid #eeeeee;
  background: linear-gradient(to right, #a840c2, 80%, #d751f8b9);

  @media screen and (max-width: 500px) {
    flex-direction: column;
    height: 600px;
  }
  @media screen and (min-width: 1500px) {
    margin-top: 150px;
  }
`,M_=g.div`
  width: 100%;
  display: flex;
  justify-content: start;
  margin-left: 50px;
`,z_=g.h1`
  font-size: 100px;
  letter-spacing: 20px;
  color: #ffffffeb;
  cursor: default;
`,gu=({primary:e})=>f(j_,{children:f(I_,{$primary:e,children:f(M_,{children:f(z_,{children:"DROP"})})})}),F_=g.div`
  width: 100%;
  height: 100px;
  display: flex;
  background-image: url("/img/5593055.jpg");
  background-size: 1000px;
  background-position: 500px;
`,U_=g.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid #dddddd;
  gap: 50px;
  background: linear-gradient(to right, #a840c2, 80%, #d751f8b9);
  @media screen and (max-width: 700px) {
    justify-content: center;
    gap: 5px;
  }
`,B_=g.div`
  display: flex;
  justify-content: center;
  margin-left: 100px;
  align-items: center;
  @media screen and (max-width: 700px) {
    justify-content: center;
    margin: 0;
    width: 50%;
  }
`,V_=g.div`
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
  }
`,H_=g.div`
  width: 1px;
  height: 80px;
  background-color: #dddddd;
`,W_=g.h1`
  font-size: 60px;
  font-weight: 800;
  letter-spacing: 10px;
  color: white;
  cursor: default;
  position: relative;
  ::after {
    content: "DROP";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0.5px white;
    transition: 500ms;
  }

  &:hover {
    ::after {
      background: #a840c2;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      width: 100%;
    }
  }

  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`,Z_=g.h1`
  font-size: 26px;
  color: white;
  font-weight: 800;
  letter-spacing: 2px;
  cursor: default;
  &:hover {
    opacity: 0.7;
  }
`,G_=g.div`
  display: flex;
`,K_=g.p`
  color: #fffffff8;
  margin-top: 10px;
  opacity: 0.5;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
`,Q_=({produtoAtual:e})=>f(F_,{children:P(U_,{children:[f(B_,{children:f(W_,{children:"DROP"})}),f(H_,{}),P(V_,{children:[f(Z_,{children:`${e.name}`}),f(G_,{children:f(K_,{children:`${e.description}`})})]})]})}),q_=g.div`
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  @media screen and (max-width: 1250px) {
    margin-left: 0px;
  }
`,oc=g.div`
  color: white;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`,sc=g.h2`
  font-size: 16px;
  margin-top: 15px;
  margin-bottom: 15px;
  color: #494949eb;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #e7e7e7;
  cursor: default;
  transition: 1s;
  font-weight: 800;
  &:hover {
    color: #b93fffc5;
  }
`,Y_=g.div`
  position: relative;
  cursor: zoom-in;
  background-position: center;
`,J_=g.img`
  width: 350px;
  height: 350px;
  margin-top: 4px;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 0 3px #c2bfbfeb;
  }
`,X_=g.div`
  position: absolute;
  background-repeat: no-repeat;
  border: 2px solid white;
  width: 120px;
  height: 120px;
  background-size: 500%;
  background-position: center;
  pointer-events: none;
  border-radius: 50%;
  display: none;
  transform: scale(0);
  animation: scaleUp 500ms ease-in forwards;

  @keyframes scaleUp {
    0% {
      transform: scale(0);
    }
    90% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`,ek=g.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`,tk={cursor:"none"},nk=({produtoAtual:e,id:t})=>{const[n,r]=$.useState(!1),[i,o]=$.useState(e.image_url),[s,a]=$.useState({backgroundImage:`url(${e.image_url})`});$.useEffect(()=>{a({backgroundImage:`url(${i})`})},[t]);const l=c=>{if(n){const{offsetX:p,offsetY:w,target:v}=c.nativeEvent,{offsetWidth:m,offsetHeight:R}=v,y=p/m*100,h=w/R*100;a(x=>({...x,display:"block",top:`${w-50}px`,left:`${p-65}px`,backgroundPosition:`${y}% ${h}% `}))}else return},u=c=>{r(!1),a(p=>({...p,display:"none"}))},d=()=>{r(!0)};return P(q_,{children:[P(ek,{children:[f(oc,{children:f(sc,{children:e.name})}),f(oc,{children:P(sc,{children:[e.price," R$"]})})]}),P(Y_,{style:n?tk:null,children:[f(J_,{src:e.image_url,draggable:"false",onClick:d,onMouseMove:l,onMouseLeave:u}),f(X_,{style:s}),f(oc,{children:f(sc,{children:"500+ vendidos"})})]})]})};var T0={exports:{}},A0={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fo=$;function rk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ik=typeof Object.is=="function"?Object.is:rk,ok=fo.useState,sk=fo.useEffect,ak=fo.useLayoutEffect,lk=fo.useDebugValue;function uk(e,t){var n=t(),r=ok({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return ak(function(){i.value=n,i.getSnapshot=t,ac(i)&&o({inst:i})},[e,n,t]),sk(function(){return ac(i)&&o({inst:i}),e(function(){ac(i)&&o({inst:i})})},[e]),lk(n),n}function ac(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ik(e,n)}catch{return!0}}function ck(e,t){return t()}var dk=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ck:uk;A0.useSyncExternalStore=fo.useSyncExternalStore!==void 0?fo.useSyncExternalStore:dk;T0.exports=A0;var fk=T0.exports,D0={exports:{}},N0={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yu=$,pk=fk;function hk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mk=typeof Object.is=="function"?Object.is:hk,gk=pk.useSyncExternalStore,yk=yu.useRef,vk=yu.useEffect,xk=yu.useMemo,wk=yu.useDebugValue;N0.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=yk(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=xk(function(){function l(w){if(!u){if(u=!0,d=w,w=r(w),i!==void 0&&s.hasValue){var v=s.value;if(i(v,w))return c=v}return c=w}if(v=c,mk(d,w))return v;var m=r(w);return i!==void 0&&i(v,m)?v:(d=w,c=m)}var u=!1,d,c,p=n===void 0?null:n;return[function(){return l(t())},p===null?void 0:function(){return l(p())}]},[t,n,r,i]);var a=gk(e,o[0],o[1]);return vk(function(){s.hasValue=!0,s.value=a},[a]),wk(a),a};D0.exports=N0;var Sk=D0.exports;function _k(e){e()}let L0=_k;const kk=e=>L0=e,Ek=()=>L0,Dr=$.createContext(null);function $0(){return $.useContext(Dr)}const bk=()=>{throw new Error("uSES not initialized!")};let j0=bk;const Ck=e=>{j0=e},Ok=(e,t)=>e===t;function Pk(e=Dr){const t=e===Dr?$0:()=>$.useContext(e);return function(r,i=Ok){const{store:o,subscription:s,getServerState:a}=t(),l=j0(s.addNestedSub,o.getState,a||o.getState,r,i);return $.useDebugValue(l),l}}const Et=Pk();function Rk(){const e=Ek();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],i=t;for(;i;)r.push(i),i=i.next;return r},subscribe(r){let i=!0,o=n={callback:r,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){!i||t===null||(i=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}const Kh={notify(){},get:()=>[]};function Tk(e,t){let n,r=Kh;function i(c){return l(),r.subscribe(c)}function o(){r.notify()}function s(){d.onStateChange&&d.onStateChange()}function a(){return!!n}function l(){n||(n=t?t.addNestedSub(s):e.subscribe(s),r=Rk())}function u(){n&&(n(),n=void 0,r.clear(),r=Kh)}const d={addNestedSub:i,notifyNestedSubs:o,handleChangeWrapper:s,isSubscribed:a,trySubscribe:l,tryUnsubscribe:u,getListeners:()=>r};return d}const Ak=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Dk=Ak?$.useLayoutEffect:$.useEffect;function Nk({store:e,context:t,children:n,serverState:r}){const i=$.useMemo(()=>{const a=Tk(e);return{store:e,subscription:a,getServerState:r?()=>r:void 0}},[e,r]),o=$.useMemo(()=>e.getState(),[e]);Dk(()=>{const{subscription:a}=i;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),o!==e.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[i,o]);const s=t||Dr;return jt.createElement(s.Provider,{value:i},n)}function I0(e=Dr){const t=e===Dr?$0:()=>$.useContext(e);return function(){const{store:r}=t();return r}}const Lk=I0();function $k(e=Dr){const t=e===Dr?Lk:I0(e);return function(){return t().dispatch}}const Cn=$k();Ck(Sk.useSyncExternalStoreWithSelector);kk(e0.unstable_batchedUpdates);const gr={ADD_PRODUCT:"cart/addProduct",OPEN_CART:"cart/open",CLOSE_CART:"cart/close",REMOVE_PRODUCT:"cart/removeProduct",INCREASE_PRODUCT_QUANTITY:"cart/increaseProductQuantity",DECREASE_PRODUCT_QUANTITY:"cart/decreaseProductQuantity",CLEAR_CART:"cart/clearCart",ADD_TO_HISTORY:"cart/addToHistory",SALVA_INFO_PEDIDO:"cart/salvaInfoPedido"},jk=e=>({type:gr.ADD_PRODUCT,payload:e}),Gf=()=>({type:gr.CLEAR_CART}),Ik=e=>({type:gr.SALVA_INFO_PEDIDO,payload:e}),Mk=g.div`
  width: 80%;
  height: 150px;
  background-color: white;
  border-radius: 5px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -150px;
  animation: animapopup 2s infinite ease alternate;
  @keyframes animapopup {
    to {
      transform: translateY(10px);
    }
  }
`,zk=g.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  letter-spacing: 0.3px;
  border-bottom: 1px solid #dddddd;
  background-color: #d1ba34;
`,Fk=g.p`
  padding: 30px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`,Uk=g.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`,Qh=g.button`
  width: 100px;
  height: 40px;
  border: none;
  color: #272727;
  font-weight: 600;
  letter-spacing: 1px;
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid #272727;
  cursor: pointer;
  transition: 1s;
  &:hover {
    background-color: #222222eb;
    color: white;
    border: none;
  }
`,Bk=()=>{const e=Cn();return P(Mk,{children:[f(zk,{children:f(Fk,{children:"Você tem um pedido em andamento, deseja retomá-lo?"})}),P(Uk,{children:[f(Ql,{to:"/Checkout",children:f(Qh,{children:"SIM"})}),f(Qh,{onClick:()=>{e(Gf())},children:"NÃO"})]})]})},Vk=g.div`
  width: 400px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  @media screen and (max-width: 1250px) {
    margin-left: 0px;
  }
  position: relative;
`,Hk=g.div`
  background-image: url("/img/5593055.jpg");
  background-size: 500px;
  width: 100%;
  height: 75px;
  border-radius: 5px;
  margin-top: 15px;
  @media screen and (max-width: 420px) {
    width: 90%;
  }
`,Wk=g.div`
  display: flex;
  width: 100%;
  height: 75px;
  background: #b93fffc5;
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(10.3px);
  border: 1px solid rgba(114, 114, 114, 0.18);
  justify-content: center;
  align-items: center;
`,Zk=g.p`
  font-size: 20px;
  color: #ffffff;
  font-weight: 800;
  &:hover {
    opacity: 0.7;
  }

  letter-spacing: 0.5px;
  cursor: default;
`,Gk=g.h3`
  font-size: 36px;
  color: #ffffff;
  padding: 2px;
  opacity: 0.9;
  cursor: default;
  font-weight: 800;
  transition: 1s;
  &:hover {
    color: #222222eb;
  }
  @media screen and (max-width: 450px) {
    font-size: 28px;
  }
`,Kk=g.h3`
  font-size: 20px;
  color: #363636;
  padding: 2px;
  opacity: 0.7;
  text-decoration: line-through;
  text-align: center;
  cursor: default;
  @media screen and (max-width: 450px) {
    font-size: 14px;
  }
`,Qk=g.h3`
  font-size: 12px;
  color: #ffffff;
  padding: 2px;
  opacity: 0.7;
  text-align: center;
  cursor: default;
`,qk=g.div`
  width: 100%;
  height: 26px;
  margin-top: 15px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (max-width: 450px) {
    height: 30px;
    margin-top: 5px;
  }
`,No=g.img`
  width: 18px;
  height: 18px;
  opacity: 0.6;
  @media screen and (max-width: 450px) {
    width: 20px;
    height: 20px;
  }
`,Yk=g.div`
  background-image: url("/img/5593055.jpg");
  background-size: 500px;
  width: 100%;
  height: 300px;
  display: flex;
  border-radius: 20px;
  margin-top: 30px;
  gap: 20px;
  @media screen and (max-width: 420px) {
    width: 90%;
  }
`,Jk=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 5px;
  width: 100%;
  height: 300px;
  background: #b93fffc5;
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(10.3px);
  border: 1px solid rgba(114, 114, 114, 0.18);
  gap: 20px;
`,Xk=g.div`
  display: flex;
  width: 80%;
  justify-content: center;
  background-color: #cecece76;
  padding: 10px;
  border-radius: 8px;
`,qh=g.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
`,eE=g.button`
  width: 150px;
  height: 50px;
  background-color: #222222eb;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  letter-spacing: 0.8px;
  color: white;
  border: none;
  border-radius: 3px;
  opacity: 1;
  transition: 1s;
  &:hover {
    border: none;
    color: #222222eb;
    background-color: #cecece76;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    font-weight: 800;
  }
`,tE=g.div`
  display: flex;
`,nE=g.div`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #222222eb;
  font-weight: 700;
`,rE=g.button`
  background: none;
  border: none;
  width: 30px;
  font-size: 30px;
  cursor: pointer;
  font-weight: 700;
  color: #222222eb;
  &:hover {
    background-color: #ffffff1f;
  }
`,iE=g.button`
  background: none;
  border: none;
  width: 30px;
  font-size: 30px;
  margin-right: 30px;
  cursor: pointer;
  font-weight: 700;
  color: #222222eb;
  &:hover {
    background-color: #ffffff1f;
  }
`,oE=({produtoAtual:e})=>{const{products:t}=Et(l=>l.cartReducer),[n,r]=$.useState(1),i=Cn(),o=()=>{e.quantity=n,i(jk(e))},s=()=>{r(l=>l+=1)},a=()=>{n>=2&&r(l=>l-1)};return P(Vk,{children:[f(Hk,{children:f(Wk,{children:P(Zk,{children:[e.name," - ",e.description]})})}),f(Yk,{children:P(Jk,{children:[P(Xk,{children:[P(qh,{children:[P(Kk,{children:[e.price*1.3," R$"]}),P(Gk,{children:[e.price," R$"]})]}),P(qh,{children:[f(Qk,{children:"Avaliação deste produto: 5"}),P(qk,{children:[f(No,{src:"/img/estrela.png"}),f(No,{src:"/img/estrela.png"}),f(No,{src:"/img/estrela.png"}),f(No,{src:"/img/estrela.png"}),f(No,{src:"/img/estrela.png"})]})]})]}),P(tE,{children:[f(rE,{onClick:a,children:"-"}),f(nE,{children:n}),f(iE,{onClick:s,children:"+"}),f(Ql,{to:"/Checkout",children:f(eE,{onClick:o,children:"COMPRAR"})})]})]})}),t.length>=1?f(Bk,{}):null]})};function M0(e,t){return function(){return e.apply(t,arguments)}}const{toString:sE}=Object.prototype,{getPrototypeOf:Kf}=Object,vu=(e=>t=>{const n=sE.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Fn=e=>(e=e.toLowerCase(),t=>vu(t)===e),xu=e=>t=>typeof t===e,{isArray:wo}=Array,vs=xu("undefined");function aE(e){return e!==null&&!vs(e)&&e.constructor!==null&&!vs(e.constructor)&&an(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const z0=Fn("ArrayBuffer");function lE(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&z0(e.buffer),t}const uE=xu("string"),an=xu("function"),F0=xu("number"),wu=e=>e!==null&&typeof e=="object",cE=e=>e===!0||e===!1,Ra=e=>{if(vu(e)!=="object")return!1;const t=Kf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},dE=Fn("Date"),fE=Fn("File"),pE=Fn("Blob"),hE=Fn("FileList"),mE=e=>wu(e)&&an(e.pipe),gE=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||an(e.append)&&((t=vu(e))==="formdata"||t==="object"&&an(e.toString)&&e.toString()==="[object FormData]"))},yE=Fn("URLSearchParams"),vE=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Us(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),wo(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let a;for(r=0;r<s;r++)a=o[r],t.call(null,e[a],a,e)}}function U0(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const B0=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),V0=e=>!vs(e)&&e!==B0;function Ed(){const{caseless:e}=V0(this)&&this||{},t={},n=(r,i)=>{const o=e&&U0(t,i)||i;Ra(t[o])&&Ra(r)?t[o]=Ed(t[o],r):Ra(r)?t[o]=Ed({},r):wo(r)?t[o]=r.slice():t[o]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Us(arguments[r],n);return t}const xE=(e,t,n,{allOwnKeys:r}={})=>(Us(t,(i,o)=>{n&&an(i)?e[o]=M0(i,n):e[o]=i},{allOwnKeys:r}),e),wE=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),SE=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},_E=(e,t,n,r)=>{let i,o,s;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!r||r(s,e,t))&&!a[s]&&(t[s]=e[s],a[s]=!0);e=n!==!1&&Kf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kE=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},EE=e=>{if(!e)return null;if(wo(e))return e;let t=e.length;if(!F0(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},bE=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Kf(Uint8Array)),CE=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},OE=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},PE=Fn("HTMLFormElement"),RE=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Yh=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),TE=Fn("RegExp"),H0=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Us(n,(i,o)=>{t(i,o,e)!==!1&&(r[o]=i)}),Object.defineProperties(e,r)},AE=e=>{H0(e,(t,n)=>{if(an(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(an(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},DE=(e,t)=>{const n={},r=i=>{i.forEach(o=>{n[o]=!0})};return wo(e)?r(e):r(String(e).split(t)),n},NE=()=>{},LE=(e,t)=>(e=+e,Number.isFinite(e)?e:t),lc="abcdefghijklmnopqrstuvwxyz",Jh="0123456789",W0={DIGIT:Jh,ALPHA:lc,ALPHA_DIGIT:lc+lc.toUpperCase()+Jh},$E=(e=16,t=W0.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function jE(e){return!!(e&&an(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const IE=e=>{const t=new Array(10),n=(r,i)=>{if(wu(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const o=wo(r)?[]:{};return Us(r,(s,a)=>{const l=n(s,i+1);!vs(l)&&(o[a]=l)}),t[i]=void 0,o}}return r};return n(e,0)},ME=Fn("AsyncFunction"),zE=e=>e&&(wu(e)||an(e))&&an(e.then)&&an(e.catch),j={isArray:wo,isArrayBuffer:z0,isBuffer:aE,isFormData:gE,isArrayBufferView:lE,isString:uE,isNumber:F0,isBoolean:cE,isObject:wu,isPlainObject:Ra,isUndefined:vs,isDate:dE,isFile:fE,isBlob:pE,isRegExp:TE,isFunction:an,isStream:mE,isURLSearchParams:yE,isTypedArray:bE,isFileList:hE,forEach:Us,merge:Ed,extend:xE,trim:vE,stripBOM:wE,inherits:SE,toFlatObject:_E,kindOf:vu,kindOfTest:Fn,endsWith:kE,toArray:EE,forEachEntry:CE,matchAll:OE,isHTMLForm:PE,hasOwnProperty:Yh,hasOwnProp:Yh,reduceDescriptors:H0,freezeMethods:AE,toObjectSet:DE,toCamelCase:RE,noop:NE,toFiniteNumber:LE,findKey:U0,global:B0,isContextDefined:V0,ALPHABET:W0,generateString:$E,isSpecCompliantForm:jE,toJSONObject:IE,isAsyncFn:ME,isThenable:zE};function $e(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}j.inherits($e,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:j.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Z0=$e.prototype,G0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{G0[e]={value:e}});Object.defineProperties($e,G0);Object.defineProperty(Z0,"isAxiosError",{value:!0});$e.from=(e,t,n,r,i,o)=>{const s=Object.create(Z0);return j.toFlatObject(e,s,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),$e.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,o&&Object.assign(s,o),s};const FE=null;function bd(e){return j.isPlainObject(e)||j.isArray(e)}function K0(e){return j.endsWith(e,"[]")?e.slice(0,-2):e}function Xh(e,t,n){return e?e.concat(t).map(function(i,o){return i=K0(i),!n&&o?"["+i+"]":i}).join(n?".":""):t}function UE(e){return j.isArray(e)&&!e.some(bd)}const BE=j.toFlatObject(j,{},null,function(t){return/^is[A-Z]/.test(t)});function Su(e,t,n){if(!j.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=j.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,R){return!j.isUndefined(R[m])});const r=n.metaTokens,i=n.visitor||d,o=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&j.isSpecCompliantForm(t);if(!j.isFunction(i))throw new TypeError("visitor must be a function");function u(v){if(v===null)return"";if(j.isDate(v))return v.toISOString();if(!l&&j.isBlob(v))throw new $e("Blob is not supported. Use a Buffer instead.");return j.isArrayBuffer(v)||j.isTypedArray(v)?l&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function d(v,m,R){let y=v;if(v&&!R&&typeof v=="object"){if(j.endsWith(m,"{}"))m=r?m:m.slice(0,-2),v=JSON.stringify(v);else if(j.isArray(v)&&UE(v)||(j.isFileList(v)||j.endsWith(m,"[]"))&&(y=j.toArray(v)))return m=K0(m),y.forEach(function(x,C){!(j.isUndefined(x)||x===null)&&t.append(s===!0?Xh([m],C,o):s===null?m:m+"[]",u(x))}),!1}return bd(v)?!0:(t.append(Xh(R,m,o),u(v)),!1)}const c=[],p=Object.assign(BE,{defaultVisitor:d,convertValue:u,isVisitable:bd});function w(v,m){if(!j.isUndefined(v)){if(c.indexOf(v)!==-1)throw Error("Circular reference detected in "+m.join("."));c.push(v),j.forEach(v,function(y,h){(!(j.isUndefined(y)||y===null)&&i.call(t,y,j.isString(h)?h.trim():h,m,p))===!0&&w(y,m?m.concat(h):[h])}),c.pop()}}if(!j.isObject(e))throw new TypeError("data must be an object");return w(e),t}function em(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Qf(e,t){this._pairs=[],e&&Su(e,this,t)}const Q0=Qf.prototype;Q0.append=function(t,n){this._pairs.push([t,n])};Q0.toString=function(t){const n=t?function(r){return t.call(this,r,em)}:em;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function VE(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function q0(e,t,n){if(!t)return e;const r=n&&n.encode||VE,i=n&&n.serialize;let o;if(i?o=i(t,n):o=j.isURLSearchParams(t)?t.toString():new Qf(t,n).toString(r),o){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class HE{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){j.forEach(this.handlers,function(r){r!==null&&t(r)})}}const tm=HE,Y0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},WE=typeof URLSearchParams<"u"?URLSearchParams:Qf,ZE=typeof FormData<"u"?FormData:null,GE=typeof Blob<"u"?Blob:null,KE=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),QE=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Nn={isBrowser:!0,classes:{URLSearchParams:WE,FormData:ZE,Blob:GE},isStandardBrowserEnv:KE,isStandardBrowserWebWorkerEnv:QE,protocols:["http","https","file","blob","url","data"]};function qE(e,t){return Su(e,new Nn.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,o){return Nn.isNode&&j.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function YE(e){return j.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function JE(e){const t={},n=Object.keys(e);let r;const i=n.length;let o;for(r=0;r<i;r++)o=n[r],t[o]=e[o];return t}function J0(e){function t(n,r,i,o){let s=n[o++];const a=Number.isFinite(+s),l=o>=n.length;return s=!s&&j.isArray(i)?i.length:s,l?(j.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!a):((!i[s]||!j.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],o)&&j.isArray(i[s])&&(i[s]=JE(i[s])),!a)}if(j.isFormData(e)&&j.isFunction(e.entries)){const n={};return j.forEachEntry(e,(r,i)=>{t(YE(r),i,n,0)}),n}return null}const XE={"Content-Type":void 0};function eb(e,t,n){if(j.isString(e))try{return(t||JSON.parse)(e),j.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const _u={transitional:Y0,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,o=j.isObject(t);if(o&&j.isHTMLForm(t)&&(t=new FormData(t)),j.isFormData(t))return i&&i?JSON.stringify(J0(t)):t;if(j.isArrayBuffer(t)||j.isBuffer(t)||j.isStream(t)||j.isFile(t)||j.isBlob(t))return t;if(j.isArrayBufferView(t))return t.buffer;if(j.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return qE(t,this.formSerializer).toString();if((a=j.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Su(a?{"files[]":t}:t,l&&new l,this.formSerializer)}}return o||i?(n.setContentType("application/json",!1),eb(t)):t}],transformResponse:[function(t){const n=this.transitional||_u.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&j.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(s)throw a.name==="SyntaxError"?$e.from(a,$e.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Nn.classes.FormData,Blob:Nn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};j.forEach(["delete","get","head"],function(t){_u.headers[t]={}});j.forEach(["post","put","patch"],function(t){_u.headers[t]=j.merge(XE)});const qf=_u,tb=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),nb=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&tb[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},nm=Symbol("internals");function Lo(e){return e&&String(e).trim().toLowerCase()}function Ta(e){return e===!1||e==null?e:j.isArray(e)?e.map(Ta):String(e)}function rb(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const ib=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function uc(e,t,n,r,i){if(j.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!j.isString(t)){if(j.isString(r))return t.indexOf(r)!==-1;if(j.isRegExp(r))return r.test(t)}}function ob(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function sb(e,t){const n=j.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,o,s){return this[r].call(this,t,i,o,s)},configurable:!0})})}class ku{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function o(a,l,u){const d=Lo(l);if(!d)throw new Error("header name must be a non-empty string");const c=j.findKey(i,d);(!c||i[c]===void 0||u===!0||u===void 0&&i[c]!==!1)&&(i[c||l]=Ta(a))}const s=(a,l)=>j.forEach(a,(u,d)=>o(u,d,l));return j.isPlainObject(t)||t instanceof this.constructor?s(t,n):j.isString(t)&&(t=t.trim())&&!ib(t)?s(nb(t),n):t!=null&&o(n,t,r),this}get(t,n){if(t=Lo(t),t){const r=j.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return rb(i);if(j.isFunction(n))return n.call(this,i,r);if(j.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Lo(t),t){const r=j.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||uc(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function o(s){if(s=Lo(s),s){const a=j.findKey(r,s);a&&(!n||uc(r,r[a],a,n))&&(delete r[a],i=!0)}}return j.isArray(t)?t.forEach(o):o(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const o=n[r];(!t||uc(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const n=this,r={};return j.forEach(this,(i,o)=>{const s=j.findKey(r,o);if(s){n[s]=Ta(i),delete n[o];return}const a=t?ob(o):String(o).trim();a!==o&&delete n[o],n[a]=Ta(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return j.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&j.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[nm]=this[nm]={accessors:{}}).accessors,i=this.prototype;function o(s){const a=Lo(s);r[a]||(sb(i,s),r[a]=!0)}return j.isArray(t)?t.forEach(o):o(t),this}}ku.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.freezeMethods(ku.prototype);j.freezeMethods(ku);const Jn=ku;function cc(e,t){const n=this||qf,r=t||n,i=Jn.from(r.headers);let o=r.data;return j.forEach(e,function(a){o=a.call(n,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function X0(e){return!!(e&&e.__CANCEL__)}function Bs(e,t,n){$e.call(this,e??"canceled",$e.ERR_CANCELED,t,n),this.name="CanceledError"}j.inherits(Bs,$e,{__CANCEL__:!0});function ab(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new $e("Request failed with status code "+n.status,[$e.ERR_BAD_REQUEST,$e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const lb=Nn.isStandardBrowserEnv?function(){return{write:function(n,r,i,o,s,a){const l=[];l.push(n+"="+encodeURIComponent(r)),j.isNumber(i)&&l.push("expires="+new Date(i).toGMTString()),j.isString(o)&&l.push("path="+o),j.isString(s)&&l.push("domain="+s),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function ub(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function cb(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function ev(e,t){return e&&!ub(t)?cb(e,t):t}const db=Nn.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(o){let s=o;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(s){const a=j.isString(s)?i(s):s;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function fb(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function pb(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),d=r[o];s||(s=u),n[i]=l,r[i]=u;let c=o,p=0;for(;c!==i;)p+=n[c++],c=c%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),u-s<t)return;const w=d&&u-d;return w?Math.round(p*1e3/w):void 0}}function rm(e,t){let n=0;const r=pb(50,250);return i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,a=o-n,l=r(a),u=o<=s;n=o;const d={loaded:o,total:s,progress:s?o/s:void 0,bytes:a,rate:l||void 0,estimated:l&&s&&u?(s-o)/l:void 0,event:i};d[t?"download":"upload"]=!0,e(d)}}const hb=typeof XMLHttpRequest<"u",mb=hb&&function(e){return new Promise(function(n,r){let i=e.data;const o=Jn.from(e.headers).normalize(),s=e.responseType;let a;function l(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}j.isFormData(i)&&(Nn.isStandardBrowserEnv||Nn.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(e.auth){const w=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(w+":"+v))}const d=ev(e.baseURL,e.url);u.open(e.method.toUpperCase(),q0(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function c(){if(!u)return;const w=Jn.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),m={data:!s||s==="text"||s==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:w,config:e,request:u};ab(function(y){n(y),l()},function(y){r(y),l()},m),u=null}if("onloadend"in u?u.onloadend=c:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(c)},u.onabort=function(){u&&(r(new $e("Request aborted",$e.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new $e("Network Error",$e.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let v=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const m=e.transitional||Y0;e.timeoutErrorMessage&&(v=e.timeoutErrorMessage),r(new $e(v,m.clarifyTimeoutError?$e.ETIMEDOUT:$e.ECONNABORTED,e,u)),u=null},Nn.isStandardBrowserEnv){const w=(e.withCredentials||db(d))&&e.xsrfCookieName&&lb.read(e.xsrfCookieName);w&&o.set(e.xsrfHeaderName,w)}i===void 0&&o.setContentType(null),"setRequestHeader"in u&&j.forEach(o.toJSON(),function(v,m){u.setRequestHeader(m,v)}),j.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&s!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",rm(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",rm(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=w=>{u&&(r(!w||w.type?new Bs(null,e,u):w),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const p=fb(d);if(p&&Nn.protocols.indexOf(p)===-1){r(new $e("Unsupported protocol "+p+":",$e.ERR_BAD_REQUEST,e));return}u.send(i||null)})},Aa={http:FE,xhr:mb};j.forEach(Aa,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const gb={getAdapter:e=>{e=j.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=j.isString(n)?Aa[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new $e(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(j.hasOwnProp(Aa,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!j.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Aa};function dc(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Bs(null,e)}function im(e){return dc(e),e.headers=Jn.from(e.headers),e.data=cc.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),gb.getAdapter(e.adapter||qf.adapter)(e).then(function(r){return dc(e),r.data=cc.call(e,e.transformResponse,r),r.headers=Jn.from(r.headers),r},function(r){return X0(r)||(dc(e),r&&r.response&&(r.response.data=cc.call(e,e.transformResponse,r.response),r.response.headers=Jn.from(r.response.headers))),Promise.reject(r)})}const om=e=>e instanceof Jn?e.toJSON():e;function po(e,t){t=t||{};const n={};function r(u,d,c){return j.isPlainObject(u)&&j.isPlainObject(d)?j.merge.call({caseless:c},u,d):j.isPlainObject(d)?j.merge({},d):j.isArray(d)?d.slice():d}function i(u,d,c){if(j.isUndefined(d)){if(!j.isUndefined(u))return r(void 0,u,c)}else return r(u,d,c)}function o(u,d){if(!j.isUndefined(d))return r(void 0,d)}function s(u,d){if(j.isUndefined(d)){if(!j.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function a(u,d,c){if(c in t)return r(u,d);if(c in e)return r(void 0,u)}const l={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(u,d)=>i(om(u),om(d),!0)};return j.forEach(Object.keys(Object.assign({},e,t)),function(d){const c=l[d]||i,p=c(e[d],t[d],d);j.isUndefined(p)&&c!==a||(n[d]=p)}),n}const tv="1.4.0",Yf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Yf[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const sm={};Yf.transitional=function(t,n,r){function i(o,s){return"[Axios v"+tv+"] Transitional option '"+o+"'"+s+(r?". "+r:"")}return(o,s,a)=>{if(t===!1)throw new $e(i(s," has been removed"+(n?" in "+n:"")),$e.ERR_DEPRECATED);return n&&!sm[s]&&(sm[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,s,a):!0}};function yb(e,t,n){if(typeof e!="object")throw new $e("options must be an object",$e.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const o=r[i],s=t[o];if(s){const a=e[o],l=a===void 0||s(a,o,e);if(l!==!0)throw new $e("option "+o+" must be "+l,$e.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new $e("Unknown option "+o,$e.ERR_BAD_OPTION)}}const Cd={assertOptions:yb,validators:Yf},lr=Cd.validators;class hl{constructor(t){this.defaults=t,this.interceptors={request:new tm,response:new tm}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=po(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:o}=n;r!==void 0&&Cd.assertOptions(r,{silentJSONParsing:lr.transitional(lr.boolean),forcedJSONParsing:lr.transitional(lr.boolean),clarifyTimeoutError:lr.transitional(lr.boolean)},!1),i!=null&&(j.isFunction(i)?n.paramsSerializer={serialize:i}:Cd.assertOptions(i,{encode:lr.function,serialize:lr.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s;s=o&&j.merge(o.common,o[n.method]),s&&j.forEach(["delete","get","head","post","put","patch","common"],v=>{delete o[v]}),n.headers=Jn.concat(s,o);const a=[];let l=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(l=l&&m.synchronous,a.unshift(m.fulfilled,m.rejected))});const u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});let d,c=0,p;if(!l){const v=[im.bind(this),void 0];for(v.unshift.apply(v,a),v.push.apply(v,u),p=v.length,d=Promise.resolve(n);c<p;)d=d.then(v[c++],v[c++]);return d}p=a.length;let w=n;for(c=0;c<p;){const v=a[c++],m=a[c++];try{w=v(w)}catch(R){m.call(this,R);break}}try{d=im.call(this,w)}catch(v){return Promise.reject(v)}for(c=0,p=u.length;c<p;)d=d.then(u[c++],u[c++]);return d}getUri(t){t=po(this.defaults,t);const n=ev(t.baseURL,t.url);return q0(n,t.params,t.paramsSerializer)}}j.forEach(["delete","get","head","options"],function(t){hl.prototype[t]=function(n,r){return this.request(po(r||{},{method:t,url:n,data:(r||{}).data}))}});j.forEach(["post","put","patch"],function(t){function n(r){return function(o,s,a){return this.request(po(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}hl.prototype[t]=n(),hl.prototype[t+"Form"]=n(!0)});const Da=hl;class Jf{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(i=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](i);r._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(a=>{r.subscribe(a),o=a}).then(i);return s.cancel=function(){r.unsubscribe(o)},s},t(function(o,s,a){r.reason||(r.reason=new Bs(o,s,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Jf(function(i){t=i}),cancel:t}}}const vb=Jf;function xb(e){return function(n){return e.apply(null,n)}}function wb(e){return j.isObject(e)&&e.isAxiosError===!0}const Od={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Od).forEach(([e,t])=>{Od[t]=e});const Sb=Od;function nv(e){const t=new Da(e),n=M0(Da.prototype.request,t);return j.extend(n,Da.prototype,t,{allOwnKeys:!0}),j.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return nv(po(e,i))},n}const lt=nv(qf);lt.Axios=Da;lt.CanceledError=Bs;lt.CancelToken=vb;lt.isCancel=X0;lt.VERSION=tv;lt.toFormData=Su;lt.AxiosError=$e;lt.Cancel=lt.CanceledError;lt.all=function(t){return Promise.all(t)};lt.spread=xb;lt.isAxiosError=wb;lt.mergeConfig=po;lt.AxiosHeaders=Jn;lt.formToJSON=e=>J0(j.isHTMLForm(e)?new FormData(e):e);lt.HttpStatusCode=Sb;lt.default=lt;const Ut=lt,_b=g.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #aaa;
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 5px;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`,kb=g.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: linear-gradient(white 10%, #ffffffef 60%);
  @media screen and (max-width: 1000px) {
    width: 100vw;
  }
`,Eb=g.div`
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  @media screen and (max-width: 1250px) {
    flex-direction: column;
    height: 1200px;
    align-items: center;
  }
  @media screen and (min-width: 1500px) {
    justify-content: center;
    gap: 100px;
  }
`,bb=g.div`
  position: absolute;
  margin-right: 1250px;
  margin-top: 20px;
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1251px) and (max-width: 1350px) {
    justify-content: end;
  }
  @media screen and (max-width: 1250px) {
    margin: 0;
    margin-top: 100px;
  }
`,Cb=g.div`
  background-color: white;
  width: 100px;
  height: 30px;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddddd;
  margin-left: 60px;
  @media screen and (max-width: 1250px) {
    margin: 0;
  }
`,Ob=g.div`
  width: 100%;
  display: flex;
  justify-content: center;
`,Pb=g.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1500px) {
    width: 60%;
  }
`,Rb=g.div`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  border-radius: 5px;
  padding: 50px;
  background-color: #fcfcfc;
  box-shadow: 3px 3px 5px #c2c2c2;
  border: 1px solid #e7e7e7;
`,Tb=g.h4`
  width: 100%;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1px;
  color: #494949eb;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: default;
  &:hover {
    animation: animaTexto 1s both;
  }
`,Ab=g.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  letter-spacing: 0.5px;
  font-weight: 500;
  color: #494949eb;
`,Db=g.div`
  width: 100%;
  display: flex;
  justify-content: center;
`,Nb=g.div`
  width: 100%;
  display: flex;
  justify-content: center;
`,Lb=g.div`
  width: 90%;
  margin-top: 20px;
  font-size: 20px;
  letter-spacing: 0.5px;
  margin-top: 100px;
  border-radius: 5px;
  padding: 50px;
  background-color: #fcfcfc;
  box-shadow: 3px 3px 5px #c2c2c2;
  border: 1px solid #e7e7e7;
`,$b=g.h4`
  width: 100%;
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1px;
  color: #494949eb;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: default;
  &:hover {
    animation: animaTexto 1s both;
  }
`,jb=g.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  letter-spacing: 0.5px;
  font-weight: 500;
  color: #494949eb;
`,Ib=g.p`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 800;
  color: #222222eb;
  transition: 1s;
  cursor: pointer;
  &:hover {
    color: #b93fffc5;
  }
`,Mb=()=>{const[e,t]=$.useState(null);$.useEffect(()=>{const i="http://168.119.50.201:3001";Ut.get(`${i}/public/product`).then(o=>{console.log(o.data.data),t(o.data.data)},o=>{console.log(o)})},[]),Cn();const n=zs(),r=()=>{n("/Pedidos")};return f(_b,{children:P(kb,{children:[e!=null?f(Q_,{produtoAtual:e[0]}):null,P(Eb,{children:[e!=null?f(nk,{produtoAtual:e[0]}):null,e!=null?f(oE,{produtoAtual:e[0]}):null,f(bb,{children:f(Cb,{children:f(Ib,{onClick:r,children:"PEDIDOS"})})})]}),f(Ob,{children:P(Pb,{children:[P(Rb,{children:[f(Tb,{children:"DESCRIÇÃO"}),f(Ab,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante."})]}),P(Lb,{children:[f($b,{children:"SOBRE A DROP"}),f(jb,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi finibus placerat tempor. Phasellus semper, orci feugiat tincidunt gravida, nunc quam ullamcorper tortor, non consectetur neque mauris id diam. Vivamus tristique vestibulum eros ut dictum. Vivamus rutrum neque maximus augue consequat facilisis. Curabitur varius mauris ac arcu euismod semper. Nullam luctus vel dui ut cursus. In mattis, odio sed interdum maximus, leo dolor posuere erat, sit amet cursus turpis diam vitae ante."})]})]})}),f(Db,{children:f(Nb,{children:f(gu,{primary:!0})})})]})})},zb=g.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #aaa;
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 5px;
  }
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;g.div`
  width: 20vw;
  height: 100vh;
  position: relative;

  @media only screen and (max-width: 1000px) {
    width: 0;
    height: 0;
  }
`;const Fb=g.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    width: 100vw;
  }
`,Ub=()=>f(zb,{children:f(Fb,{children:f(Mb,{})})});var Vs=e=>e.type==="checkbox",Hi=e=>e instanceof Date,Rt=e=>e==null;const rv=e=>typeof e=="object";var ut=e=>!Rt(e)&&!Array.isArray(e)&&rv(e)&&!Hi(e),Bb=e=>ut(e)&&e.target?Vs(e.target)?e.target.checked:e.target.value:e,Vb=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Hb=(e,t)=>e.has(Vb(t)),Wb=e=>{const t=e.constructor&&e.constructor.prototype;return ut(t)&&t.hasOwnProperty("isPrototypeOf")},Xf=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Qr(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Xf&&(e instanceof Blob||e instanceof FileList))&&(n||ut(e)))if(t=n?[]:{},!Array.isArray(e)&&!Wb(e))t=e;else for(const r in e)t[r]=Qr(e[r]);else return e;return t}var Hs=e=>Array.isArray(e)?e.filter(Boolean):[],rt=e=>e===void 0,ue=(e,t,n)=>{if(!t||!ut(e))return n;const r=Hs(t.split(/[,[\].]+?/)).reduce((i,o)=>Rt(i)?i:i[o],e);return rt(r)||r===e?rt(e[t])?n:e[t]:r};const am={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},vn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Bn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};jt.createContext(null);var Zb=(e,t,n,r=!0)=>{const i={defaultValues:t._defaultValues};for(const o in e)Object.defineProperty(i,o,{get:()=>{const s=o;return t._proxyFormState[s]!==vn.all&&(t._proxyFormState[s]=!r||vn.all),n&&(n[s]=!0),e[s]}});return i},tn=e=>ut(e)&&!Object.keys(e).length,Gb=(e,t,n,r)=>{n(e);const{name:i,...o}=e;return tn(o)||Object.keys(o).length>=Object.keys(t).length||Object.keys(o).find(s=>t[s]===(!r||vn.all))},fc=e=>Array.isArray(e)?e:[e];function Kb(e){const t=jt.useRef(e);t.current=e,jt.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var Ln=e=>typeof e=="string",Qb=(e,t,n,r,i)=>Ln(e)?(r&&t.watch.add(e),ue(n,e,i)):Array.isArray(e)?e.map(o=>(r&&t.watch.add(o),ue(n,o))):(r&&(t.watchAll=!0),n),ep=e=>/^\w*$/.test(e),iv=e=>Hs(e.replace(/["|']|\]/g,"").split(/\.|\[/));function Ze(e,t,n){let r=-1;const i=ep(t)?[t]:iv(t),o=i.length,s=o-1;for(;++r<o;){const a=i[r];let l=n;if(r!==s){const u=e[a];l=ut(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}e[a]=l,e=e[a]}return e}var ov=(e,t,n,r,i)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[r]:i||!0}}:{};const Pd=(e,t,n)=>{for(const r of n||Object.keys(e)){const i=ue(e,r);if(i){const{_f:o,...s}=i;if(o&&t(o.name)){if(o.ref.focus){o.ref.focus();break}else if(o.refs&&o.refs[0].focus){o.refs[0].focus();break}}else ut(s)&&Pd(s,t)}}};var lm=e=>({isOnSubmit:!e||e===vn.onSubmit,isOnBlur:e===vn.onBlur,isOnChange:e===vn.onChange,isOnAll:e===vn.all,isOnTouch:e===vn.onTouched}),um=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(r=>e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length)))),qb=(e,t,n)=>{const r=Hs(ue(e,n));return Ze(r,"root",t[n]),Ze(e,n,r),e},Ji=e=>typeof e=="boolean",tp=e=>e.type==="file",wr=e=>typeof e=="function",ml=e=>{if(!Xf)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},Na=e=>Ln(e),np=e=>e.type==="radio",gl=e=>e instanceof RegExp;const cm={value:!1,isValid:!1},dm={value:!0,isValid:!0};var sv=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!rt(e[0].attributes.value)?rt(e[0].value)||e[0].value===""?dm:{value:e[0].value,isValid:!0}:dm:cm}return cm};const fm={isValid:!1,value:null};var av=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,fm):fm;function pm(e,t,n="validate"){if(Na(e)||Array.isArray(e)&&e.every(Na)||Ji(e)&&!e)return{type:n,message:Na(e)?e:"",ref:t}}var xi=e=>ut(e)&&!gl(e)?e:{value:e,message:""},hm=async(e,t,n,r,i)=>{const{ref:o,refs:s,required:a,maxLength:l,minLength:u,min:d,max:c,pattern:p,validate:w,name:v,valueAsNumber:m,mount:R,disabled:y}=e._f,h=ue(t,v);if(!R||y)return{};const x=s?s[0]:o,C=se=>{r&&x.reportValidity&&(x.setCustomValidity(Ji(se)?"":se||""),x.reportValidity())},T={},M=np(o),z=Vs(o),Z=M||z,oe=(m||tp(o))&&rt(o.value)&&rt(h)||ml(o)&&o.value===""||h===""||Array.isArray(h)&&!h.length,ee=ov.bind(null,v,n,T),Ae=(se,ae,ve,_e=Bn.maxLength,Ve=Bn.minLength)=>{const Ne=se?ae:ve;T[v]={type:se?_e:Ve,message:Ne,ref:o,...ee(se?_e:Ve,Ne)}};if(i?!Array.isArray(h)||!h.length:a&&(!Z&&(oe||Rt(h))||Ji(h)&&!h||z&&!sv(s).isValid||M&&!av(s).isValid)){const{value:se,message:ae}=Na(a)?{value:!!a,message:a}:xi(a);if(se&&(T[v]={type:Bn.required,message:ae,ref:x,...ee(Bn.required,ae)},!n))return C(ae),T}if(!oe&&(!Rt(d)||!Rt(c))){let se,ae;const ve=xi(c),_e=xi(d);if(!Rt(h)&&!isNaN(h)){const Ve=o.valueAsNumber||h&&+h;Rt(ve.value)||(se=Ve>ve.value),Rt(_e.value)||(ae=Ve<_e.value)}else{const Ve=o.valueAsDate||new Date(h),Ne=ce=>new Date(new Date().toDateString()+" "+ce),W=o.type=="time",Q=o.type=="week";Ln(ve.value)&&h&&(se=W?Ne(h)>Ne(ve.value):Q?h>ve.value:Ve>new Date(ve.value)),Ln(_e.value)&&h&&(ae=W?Ne(h)<Ne(_e.value):Q?h<_e.value:Ve<new Date(_e.value))}if((se||ae)&&(Ae(!!se,ve.message,_e.message,Bn.max,Bn.min),!n))return C(T[v].message),T}if((l||u)&&!oe&&(Ln(h)||i&&Array.isArray(h))){const se=xi(l),ae=xi(u),ve=!Rt(se.value)&&h.length>+se.value,_e=!Rt(ae.value)&&h.length<+ae.value;if((ve||_e)&&(Ae(ve,se.message,ae.message),!n))return C(T[v].message),T}if(p&&!oe&&Ln(h)){const{value:se,message:ae}=xi(p);if(gl(se)&&!h.match(se)&&(T[v]={type:Bn.pattern,message:ae,ref:o,...ee(Bn.pattern,ae)},!n))return C(ae),T}if(w){if(wr(w)){const se=await w(h,t),ae=pm(se,x);if(ae&&(T[v]={...ae,...ee(Bn.validate,ae.message)},!n))return C(ae.message),T}else if(ut(w)){let se={};for(const ae in w){if(!tn(se)&&!n)break;const ve=pm(await w[ae](h,t),x,ae);ve&&(se={...ve,...ee(ae,ve.message)},C(ve.message),n&&(T[v]=se))}if(!tn(se)&&(T[v]={ref:x,...se},!n))return T}}return C(!0),T};function Yb(e,t){const n=t.slice(0,-1).length;let r=0;for(;r<n;)e=rt(e)?r++:e[t[r++]];return e}function Jb(e){for(const t in e)if(!rt(e[t]))return!1;return!0}function pt(e,t){const n=Array.isArray(t)?t:ep(t)?[t]:iv(t),r=n.length===1?e:Yb(e,n),i=n.length-1,o=n[i];return r&&delete r[o],i!==0&&(ut(r)&&tn(r)||Array.isArray(r)&&Jb(r))&&pt(e,n.slice(0,-1)),e}function pc(){let e=[];return{get observers(){return e},next:i=>{for(const o of e)o.next&&o.next(i)},subscribe:i=>(e.push(i),{unsubscribe:()=>{e=e.filter(o=>o!==i)}}),unsubscribe:()=>{e=[]}}}var yl=e=>Rt(e)||!rv(e);function ei(e,t){if(yl(e)||yl(t))return e===t;if(Hi(e)&&Hi(t))return e.getTime()===t.getTime();const n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(const i of n){const o=e[i];if(!r.includes(i))return!1;if(i!=="ref"){const s=t[i];if(Hi(o)&&Hi(s)||ut(o)&&ut(s)||Array.isArray(o)&&Array.isArray(s)?!ei(o,s):o!==s)return!1}}return!0}var lv=e=>e.type==="select-multiple",Xb=e=>np(e)||Vs(e),hc=e=>ml(e)&&e.isConnected,uv=e=>{for(const t in e)if(wr(e[t]))return!0;return!1};function vl(e,t={}){const n=Array.isArray(e);if(ut(e)||n)for(const r in e)Array.isArray(e[r])||ut(e[r])&&!uv(e[r])?(t[r]=Array.isArray(e[r])?[]:{},vl(e[r],t[r])):Rt(e[r])||(t[r]=!0);return t}function cv(e,t,n){const r=Array.isArray(e);if(ut(e)||r)for(const i in e)Array.isArray(e[i])||ut(e[i])&&!uv(e[i])?rt(t)||yl(n[i])?n[i]=Array.isArray(e[i])?vl(e[i],[]):{...vl(e[i])}:cv(e[i],Rt(t)?{}:t[i],n[i]):n[i]=!ei(e[i],t[i]);return n}var mc=(e,t)=>cv(e,t,vl(t)),dv=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:r})=>rt(e)?e:t?e===""?NaN:e&&+e:n&&Ln(e)?new Date(e):r?r(e):e;function gc(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return tp(t)?t.files:np(t)?av(e.refs).value:lv(t)?[...t.selectedOptions].map(({value:n})=>n):Vs(t)?sv(e.refs).value:dv(rt(t.value)?e.ref.value:t.value,e)}var e2=(e,t,n,r)=>{const i={};for(const o of e){const s=ue(t,o);s&&Ze(i,o,s._f)}return{criteriaMode:n,names:[...e],fields:i,shouldUseNativeValidation:r}},$o=e=>rt(e)?e:gl(e)?e.source:ut(e)?gl(e.value)?e.value.source:e.value:e,t2=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function mm(e,t,n){const r=ue(e,n);if(r||ep(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const o=i.join("."),s=ue(t,o),a=ue(e,o);if(s&&!Array.isArray(s)&&n!==o)return{name:n};if(a&&a.type)return{name:o,error:a};i.pop()}return{name:n}}var n2=(e,t,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(t||e):(n?r.isOnBlur:i.isOnBlur)?!e:(n?r.isOnChange:i.isOnChange)?e:!0,r2=(e,t)=>!Hs(ue(e,t)).length&&pt(e,t);const i2={mode:vn.onSubmit,reValidateMode:vn.onChange,shouldFocusError:!0};function o2(e={},t){let n={...i2,...e},r={submitCount:0,isDirty:!1,isLoading:wr(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},o=ut(n.defaultValues)||ut(n.values)?Qr(n.defaultValues||n.values)||{}:{},s=n.shouldUnregister?{}:Qr(o),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,d=0;const c={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},p={values:pc(),array:pc(),state:pc()},w=e.resetOptions&&e.resetOptions.keepDirtyValues,v=lm(n.mode),m=lm(n.reValidateMode),R=n.criteriaMode===vn.all,y=_=>O=>{clearTimeout(d),d=setTimeout(_,O)},h=async _=>{if(c.isValid||_){const O=n.resolver?tn((await oe()).errors):await Ae(i,!0);O!==r.isValid&&p.state.next({isValid:O})}},x=_=>c.isValidating&&p.state.next({isValidating:_}),C=(_,O=[],N,q,U=!0,B=!0)=>{if(q&&N){if(a.action=!0,B&&Array.isArray(ue(i,_))){const Y=N(ue(i,_),q.argA,q.argB);U&&Ze(i,_,Y)}if(B&&Array.isArray(ue(r.errors,_))){const Y=N(ue(r.errors,_),q.argA,q.argB);U&&Ze(r.errors,_,Y),r2(r.errors,_)}if(c.touchedFields&&B&&Array.isArray(ue(r.touchedFields,_))){const Y=N(ue(r.touchedFields,_),q.argA,q.argB);U&&Ze(r.touchedFields,_,Y)}c.dirtyFields&&(r.dirtyFields=mc(o,s)),p.state.next({name:_,isDirty:ae(_,O),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Ze(s,_,O)},T=(_,O)=>{Ze(r.errors,_,O),p.state.next({errors:r.errors})},M=(_,O,N,q)=>{const U=ue(i,_);if(U){const B=ue(s,_,rt(N)?ue(o,_):N);rt(B)||q&&q.defaultChecked||O?Ze(s,_,O?B:gc(U._f)):Ve(_,B),a.mount&&h()}},z=(_,O,N,q,U)=>{let B=!1,Y=!1;const Ee={name:_};if(!N||q){c.isDirty&&(Y=r.isDirty,r.isDirty=Ee.isDirty=ae(),B=Y!==Ee.isDirty);const J=ei(ue(o,_),O);Y=ue(r.dirtyFields,_),J?pt(r.dirtyFields,_):Ze(r.dirtyFields,_,!0),Ee.dirtyFields=r.dirtyFields,B=B||c.dirtyFields&&Y!==!J}if(N){const J=ue(r.touchedFields,_);J||(Ze(r.touchedFields,_,N),Ee.touchedFields=r.touchedFields,B=B||c.touchedFields&&J!==N)}return B&&U&&p.state.next(Ee),B?Ee:{}},Z=(_,O,N,q)=>{const U=ue(r.errors,_),B=c.isValid&&Ji(O)&&r.isValid!==O;if(e.delayError&&N?(u=y(()=>T(_,N)),u(e.delayError)):(clearTimeout(d),u=null,N?Ze(r.errors,_,N):pt(r.errors,_)),(N?!ei(U,N):U)||!tn(q)||B){const Y={...q,...B&&Ji(O)?{isValid:O}:{},errors:r.errors,name:_};r={...r,...Y},p.state.next(Y)}x(!1)},oe=async _=>n.resolver(s,n.context,e2(_||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),ee=async _=>{const{errors:O}=await oe();if(_)for(const N of _){const q=ue(O,N);q?Ze(r.errors,N,q):pt(r.errors,N)}else r.errors=O;return O},Ae=async(_,O,N={valid:!0})=>{for(const q in _){const U=_[q];if(U){const{_f:B,...Y}=U;if(B){const Ee=l.array.has(B.name),J=await hm(U,s,R,n.shouldUseNativeValidation&&!O,Ee);if(J[B.name]&&(N.valid=!1,O))break;!O&&(ue(J,B.name)?Ee?qb(r.errors,J,B.name):Ze(r.errors,B.name,J[B.name]):pt(r.errors,B.name))}Y&&await Ae(Y,O,N)}}return N.valid},se=()=>{for(const _ of l.unMount){const O=ue(i,_);O&&(O._f.refs?O._f.refs.every(N=>!hc(N)):!hc(O._f.ref))&&b(_)}l.unMount=new Set},ae=(_,O)=>(_&&O&&Ze(s,_,O),!ei(E(),o)),ve=(_,O,N)=>Qb(_,l,{...a.mount?s:rt(O)?o:Ln(_)?{[_]:O}:O},N,O),_e=_=>Hs(ue(a.mount?s:o,_,e.shouldUnregister?ue(o,_,[]):[])),Ve=(_,O,N={})=>{const q=ue(i,_);let U=O;if(q){const B=q._f;B&&(!B.disabled&&Ze(s,_,dv(O,B)),U=ml(B.ref)&&Rt(O)?"":O,lv(B.ref)?[...B.ref.options].forEach(Y=>Y.selected=U.includes(Y.value)):B.refs?Vs(B.ref)?B.refs.length>1?B.refs.forEach(Y=>(!Y.defaultChecked||!Y.disabled)&&(Y.checked=Array.isArray(U)?!!U.find(Ee=>Ee===Y.value):U===Y.value)):B.refs[0]&&(B.refs[0].checked=!!U):B.refs.forEach(Y=>Y.checked=Y.value===U):tp(B.ref)?B.ref.value="":(B.ref.value=U,B.ref.type||p.values.next({name:_,values:{...s}})))}(N.shouldDirty||N.shouldTouch)&&z(_,U,N.shouldTouch,N.shouldDirty,!0),N.shouldValidate&&ce(_)},Ne=(_,O,N)=>{for(const q in O){const U=O[q],B=`${_}.${q}`,Y=ue(i,B);(l.array.has(_)||!yl(U)||Y&&!Y._f)&&!Hi(U)?Ne(B,U,N):Ve(B,U,N)}},W=(_,O,N={})=>{const q=ue(i,_),U=l.array.has(_),B=Qr(O);Ze(s,_,B),U?(p.array.next({name:_,values:{...s}}),(c.isDirty||c.dirtyFields)&&N.shouldDirty&&p.state.next({name:_,dirtyFields:mc(o,s),isDirty:ae(_,B)})):q&&!q._f&&!Rt(B)?Ne(_,B,N):Ve(_,B,N),um(_,l)&&p.state.next({...r}),p.values.next({name:_,values:{...s}}),!a.mount&&t()},Q=async _=>{const O=_.target;let N=O.name,q=!0;const U=ue(i,N),B=()=>O.type?gc(U._f):Bb(_);if(U){let Y,Ee;const J=B(),Ie=_.type===am.BLUR||_.type===am.FOCUS_OUT,Lt=!t2(U._f)&&!n.resolver&&!ue(r.errors,N)&&!U._f.deps||n2(Ie,ue(r.touchedFields,N),r.isSubmitted,m,v),Ct=um(N,l,Ie);Ze(s,N,J),Ie?(U._f.onBlur&&U._f.onBlur(_),u&&u(0)):U._f.onChange&&U._f.onChange(_);const D=z(N,J,Ie,!1),L=!tn(D)||Ct;if(!Ie&&p.values.next({name:N,type:_.type,values:{...s}}),Lt)return c.isValid&&h(),L&&p.state.next({name:N,...Ct?{}:D});if(!Ie&&Ct&&p.state.next({...r}),x(!0),n.resolver){const{errors:F}=await oe([N]),re=mm(r.errors,i,N),le=mm(F,i,re.name||N);Y=le.error,N=le.name,Ee=tn(F)}else Y=(await hm(U,s,R,n.shouldUseNativeValidation))[N],q=isNaN(J)||J===ue(s,N,J),q&&(Y?Ee=!1:c.isValid&&(Ee=await Ae(i,!0)));q&&(U._f.deps&&ce(U._f.deps),Z(N,Ee,Y,D))}},ce=async(_,O={})=>{let N,q;const U=fc(_);if(x(!0),n.resolver){const B=await ee(rt(_)?_:U);N=tn(B),q=_?!U.some(Y=>ue(B,Y)):N}else _?(q=(await Promise.all(U.map(async B=>{const Y=ue(i,B);return await Ae(Y&&Y._f?{[B]:Y}:Y)}))).every(Boolean),!(!q&&!r.isValid)&&h()):q=N=await Ae(i);return p.state.next({...!Ln(_)||c.isValid&&N!==r.isValid?{}:{name:_},...n.resolver||!_?{isValid:N}:{},errors:r.errors,isValidating:!1}),O.shouldFocus&&!q&&Pd(i,B=>B&&ue(r.errors,B),_?U:l.mount),q},E=_=>{const O={...o,...a.mount?s:{}};return rt(_)?O:Ln(_)?ue(O,_):_.map(N=>ue(O,N))},k=(_,O)=>({invalid:!!ue((O||r).errors,_),isDirty:!!ue((O||r).dirtyFields,_),isTouched:!!ue((O||r).touchedFields,_),error:ue((O||r).errors,_)}),S=_=>{_&&fc(_).forEach(O=>pt(r.errors,O)),p.state.next({errors:_?r.errors:{}})},A=(_,O,N)=>{const q=(ue(i,_,{_f:{}})._f||{}).ref;Ze(r.errors,_,{...O,ref:q}),p.state.next({name:_,errors:r.errors,isValid:!1}),N&&N.shouldFocus&&q&&q.focus&&q.focus()},V=(_,O)=>wr(_)?p.values.subscribe({next:N=>_(ve(void 0,O),N)}):ve(_,O,!0),b=(_,O={})=>{for(const N of _?fc(_):l.mount)l.mount.delete(N),l.array.delete(N),O.keepValue||(pt(i,N),pt(s,N)),!O.keepError&&pt(r.errors,N),!O.keepDirty&&pt(r.dirtyFields,N),!O.keepTouched&&pt(r.touchedFields,N),!n.shouldUnregister&&!O.keepDefaultValue&&pt(o,N);p.values.next({values:{...s}}),p.state.next({...r,...O.keepDirty?{isDirty:ae()}:{}}),!O.keepIsValid&&h()},K=(_,O={})=>{let N=ue(i,_);const q=Ji(O.disabled);return Ze(i,_,{...N||{},_f:{...N&&N._f?N._f:{ref:{name:_}},name:_,mount:!0,...O}}),l.mount.add(_),N?q&&Ze(s,_,O.disabled?void 0:ue(s,_,gc(N._f))):M(_,!0,O.value),{...q?{disabled:O.disabled}:{},...n.shouldUseNativeValidation?{required:!!O.required,min:$o(O.min),max:$o(O.max),minLength:$o(O.minLength),maxLength:$o(O.maxLength),pattern:$o(O.pattern)}:{},name:_,onChange:Q,onBlur:Q,ref:U=>{if(U){K(_,O),N=ue(i,_);const B=rt(U.value)&&U.querySelectorAll&&U.querySelectorAll("input,select,textarea")[0]||U,Y=Xb(B),Ee=N._f.refs||[];if(Y?Ee.find(J=>J===B):B===N._f.ref)return;Ze(i,_,{_f:{...N._f,...Y?{refs:[...Ee.filter(hc),B,...Array.isArray(ue(o,_))?[{}]:[]],ref:{type:B.type,name:_}}:{ref:B}}}),M(_,!1,void 0,B)}else N=ue(i,_,{}),N._f&&(N._f.mount=!1),(n.shouldUnregister||O.shouldUnregister)&&!(Hb(l.array,_)&&a.action)&&l.unMount.add(_)}}},I=()=>n.shouldFocusError&&Pd(i,_=>_&&ue(r.errors,_),l.mount),Oe=(_,O)=>async N=>{N&&(N.preventDefault&&N.preventDefault(),N.persist&&N.persist());let q=Qr(s);if(p.state.next({isSubmitting:!0}),n.resolver){const{errors:U,values:B}=await oe();r.errors=U,q=B}else await Ae(i);pt(r.errors,"root"),tn(r.errors)?(p.state.next({errors:{}}),await _(q,N)):(O&&await O({...r.errors},N),I(),setTimeout(I)),p.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:tn(r.errors),submitCount:r.submitCount+1,errors:r.errors})},me=(_,O={})=>{ue(i,_)&&(rt(O.defaultValue)?W(_,ue(o,_)):(W(_,O.defaultValue),Ze(o,_,O.defaultValue)),O.keepTouched||pt(r.touchedFields,_),O.keepDirty||(pt(r.dirtyFields,_),r.isDirty=O.defaultValue?ae(_,ue(o,_)):ae()),O.keepError||(pt(r.errors,_),c.isValid&&h()),p.state.next({...r}))},ge=(_,O={})=>{const N=_||o,q=Qr(N),U=_&&!tn(_)?q:o;if(O.keepDefaultValues||(o=N),!O.keepValues){if(O.keepDirtyValues||w)for(const B of l.mount)ue(r.dirtyFields,B)?Ze(U,B,ue(s,B)):W(B,ue(U,B));else{if(Xf&&rt(_))for(const B of l.mount){const Y=ue(i,B);if(Y&&Y._f){const Ee=Array.isArray(Y._f.refs)?Y._f.refs[0]:Y._f.ref;if(ml(Ee)){const J=Ee.closest("form");if(J){J.reset();break}}}}i={}}s=e.shouldUnregister?O.keepDefaultValues?Qr(o):{}:q,p.array.next({values:{...U}}),p.values.next({values:{...U}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&t(),a.mount=!c.isValid||!!O.keepIsValid,a.watch=!!e.shouldUnregister,p.state.next({submitCount:O.keepSubmitCount?r.submitCount:0,isDirty:O.keepDirty?r.isDirty:!!(O.keepDefaultValues&&!ei(_,o)),isSubmitted:O.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:O.keepDirtyValues?r.dirtyFields:O.keepDefaultValues&&_?mc(o,_):{},touchedFields:O.keepTouched?r.touchedFields:{},errors:O.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},ie=(_,O)=>ge(wr(_)?_(s):_,O);return{control:{register:K,unregister:b,getFieldState:k,_executeSchema:oe,_getWatch:ve,_getDirty:ae,_updateValid:h,_removeUnmounted:se,_updateFieldArray:C,_getFieldArray:_e,_reset:ge,_resetDefaultValues:()=>wr(n.defaultValues)&&n.defaultValues().then(_=>{ie(_,n.resetOptions),p.state.next({isLoading:!1})}),_updateFormState:_=>{r={...r,..._}},_subjects:p,_proxyFormState:c,get _fields(){return i},get _formValues(){return s},get _state(){return a},set _state(_){a=_},get _defaultValues(){return o},get _names(){return l},set _names(_){l=_},get _formState(){return r},set _formState(_){r=_},get _options(){return n},set _options(_){n={...n,..._}}},trigger:ce,register:K,handleSubmit:Oe,watch:V,setValue:W,getValues:E,reset:ie,resetField:me,clearErrors:S,unregister:b,setError:A,setFocus:(_,O={})=>{const N=ue(i,_),q=N&&N._f;if(q){const U=q.refs?q.refs[0]:q.ref;U.focus&&(U.focus(),O.shouldSelect&&U.select())}},getFieldState:k}}function Ws(e={}){const t=jt.useRef(),[n,r]=jt.useState({isDirty:!1,isValidating:!1,isLoading:wr(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:wr(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...o2(e,()=>r(o=>({...o}))),formState:n});const i=t.current.control;return i._options=e,Kb({subject:i._subjects.state,next:o=>{Gb(o,i._proxyFormState,i._updateFormState,!0)&&r({...i._formState})}}),jt.useEffect(()=>{e.values&&!ei(e.values,i._defaultValues)?i._reset(e.values,i._options.resetOptions):i._resetDefaultValues()},[e.values,i]),jt.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=Zb(n,i),t.current}var Me;(function(e){e.assertEqual=i=>i;function t(i){}e.assertIs=t;function n(i){throw new Error}e.assertNever=n,e.arrayToEnum=i=>{const o={};for(const s of i)o[s]=s;return o},e.getValidEnumValues=i=>{const o=e.objectKeys(i).filter(a=>typeof i[i[a]]!="number"),s={};for(const a of o)s[a]=i[a];return e.objectValues(s)},e.objectValues=i=>e.objectKeys(i).map(function(o){return i[o]}),e.objectKeys=typeof Object.keys=="function"?i=>Object.keys(i):i=>{const o=[];for(const s in i)Object.prototype.hasOwnProperty.call(i,s)&&o.push(s);return o},e.find=(i,o)=>{for(const s of i)if(o(s))return s},e.isInteger=typeof Number.isInteger=="function"?i=>Number.isInteger(i):i=>typeof i=="number"&&isFinite(i)&&Math.floor(i)===i;function r(i,o=" | "){return i.map(s=>typeof s=="string"?`'${s}'`:s).join(o)}e.joinValues=r,e.jsonStringifyReplacer=(i,o)=>typeof o=="bigint"?o.toString():o})(Me||(Me={}));var Rd;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(Rd||(Rd={}));const X=Me.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),yr=e=>{switch(typeof e){case"undefined":return X.undefined;case"string":return X.string;case"number":return isNaN(e)?X.nan:X.number;case"boolean":return X.boolean;case"function":return X.function;case"bigint":return X.bigint;case"symbol":return X.symbol;case"object":return Array.isArray(e)?X.array:e===null?X.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?X.promise:typeof Map<"u"&&e instanceof Map?X.map:typeof Set<"u"&&e instanceof Set?X.set:typeof Date<"u"&&e instanceof Date?X.date:X.object;default:return X.unknown}},G=Me.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),s2=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,"$1:");class _n extends Error{constructor(t){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}get errors(){return this.issues}format(t){const n=t||function(o){return o.message},r={_errors:[]},i=o=>{for(const s of o.issues)if(s.code==="invalid_union")s.unionErrors.map(i);else if(s.code==="invalid_return_type")i(s.returnTypeError);else if(s.code==="invalid_arguments")i(s.argumentsError);else if(s.path.length===0)r._errors.push(n(s));else{let a=r,l=0;for(;l<s.path.length;){const u=s.path[l];l===s.path.length-1?(a[u]=a[u]||{_errors:[]},a[u]._errors.push(n(s))):a[u]=a[u]||{_errors:[]},a=a[u],l++}}};return i(this),r}toString(){return this.message}get message(){return JSON.stringify(this.issues,Me.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},r=[];for(const i of this.issues)i.path.length>0?(n[i.path[0]]=n[i.path[0]]||[],n[i.path[0]].push(t(i))):r.push(t(i));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}_n.create=e=>new _n(e);const xs=(e,t)=>{let n;switch(e.code){case G.invalid_type:e.received===X.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case G.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,Me.jsonStringifyReplacer)}`;break;case G.unrecognized_keys:n=`Unrecognized key(s) in object: ${Me.joinValues(e.keys,", ")}`;break;case G.invalid_union:n="Invalid input";break;case G.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Me.joinValues(e.options)}`;break;case G.invalid_enum_value:n=`Invalid enum value. Expected ${Me.joinValues(e.options)}, received '${e.received}'`;break;case G.invalid_arguments:n="Invalid function arguments";break;case G.invalid_return_type:n="Invalid function return type";break;case G.invalid_date:n="Invalid date";break;case G.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:Me.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case G.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case G.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case G.custom:n="Invalid input";break;case G.invalid_intersection_types:n="Intersection results could not be merged";break;case G.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case G.not_finite:n="Number must be finite";break;default:n=t.defaultError,Me.assertNever(e)}return{message:n}};let fv=xs;function a2(e){fv=e}function xl(){return fv}const wl=e=>{const{data:t,path:n,errorMaps:r,issueData:i}=e,o=[...n,...i.path||[]],s={...i,path:o};let a="";const l=r.filter(u=>!!u).slice().reverse();for(const u of l)a=u(s,{data:t,defaultError:a}).message;return{...i,path:o,message:i.message||a}},l2=[];function te(e,t){const n=wl({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,xl(),xs].filter(r=>!!r)});e.common.issues.push(n)}class bt{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const r=[];for(const i of n){if(i.status==="aborted")return Se;i.status==="dirty"&&t.dirty(),r.push(i.value)}return{status:t.value,value:r}}static async mergeObjectAsync(t,n){const r=[];for(const i of n)r.push({key:await i.key,value:await i.value});return bt.mergeObjectSync(t,r)}static mergeObjectSync(t,n){const r={};for(const i of n){const{key:o,value:s}=i;if(o.status==="aborted"||s.status==="aborted")return Se;o.status==="dirty"&&t.dirty(),s.status==="dirty"&&t.dirty(),(typeof s.value<"u"||i.alwaysSet)&&(r[o.value]=s.value)}return{status:t.value,value:r}}}const Se=Object.freeze({status:"aborted"}),pv=e=>({status:"dirty",value:e}),At=e=>({status:"valid",value:e}),Td=e=>e.status==="aborted",Ad=e=>e.status==="dirty",Sl=e=>e.status==="valid",_l=e=>typeof Promise<"u"&&e instanceof Promise;var pe;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t==null?void 0:t.message})(pe||(pe={}));class In{constructor(t,n,r,i){this._cachedPath=[],this.parent=t,this.data=n,this._path=r,this._key=i}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const gm=(e,t)=>{if(Sl(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new _n(e.common.issues);return this._error=n,this._error}}};function Ce(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:r,description:i}=e;if(t&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(s,a)=>s.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:r??a.defaultError}:{message:n??a.defaultError},description:i}}class Pe{constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(t){return yr(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:yr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new bt,ctx:{common:t.parent.common,data:t.data,parsedType:yr(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(_l(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const r=this.safeParse(t,n);if(r.success)return r.data;throw r.error}safeParse(t,n){var r;const i={common:{issues:[],async:(r=n==null?void 0:n.async)!==null&&r!==void 0?r:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:yr(t)},o=this._parseSync({data:t,path:i.path,parent:i});return gm(i,o)}async parseAsync(t,n){const r=await this.safeParseAsync(t,n);if(r.success)return r.data;throw r.error}async safeParseAsync(t,n){const r={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:yr(t)},i=this._parse({data:t,path:r.path,parent:r}),o=await(_l(i)?i:Promise.resolve(i));return gm(r,o)}refine(t,n){const r=i=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(i):n;return this._refinement((i,o)=>{const s=t(i),a=()=>o.addIssue({code:G.custom,...r(i)});return typeof Promise<"u"&&s instanceof Promise?s.then(l=>l?!0:(a(),!1)):s?!0:(a(),!1)})}refinement(t,n){return this._refinement((r,i)=>t(r)?!0:(i.addIssue(typeof n=="function"?n(r,i):n),!1))}_refinement(t){return new bn({schema:this,typeName:ye.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}optional(){return Xn.create(this,this._def)}nullable(){return pi.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return kn.create(this,this._def)}promise(){return mo.create(this,this._def)}or(t){return ks.create([this,t],this._def)}and(t){return Es.create(this,t,this._def)}transform(t){return new bn({...Ce(this._def),schema:this,typeName:ye.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new Rs({...Ce(this._def),innerType:this,defaultValue:n,typeName:ye.ZodDefault})}brand(){return new mv({typeName:ye.ZodBranded,type:this,...Ce(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new Cl({...Ce(this._def),innerType:this,catchValue:n,typeName:ye.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return Zs.create(this,t)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const u2=/^c[^\s-]{8,}$/i,c2=/^[a-z][a-z0-9]*$/,d2=/[0-9A-HJKMNP-TV-Z]{26}/,f2=/^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,p2=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/,h2=/^(\p{Extended_Pictographic}|\p{Emoji_Component})+$/u,m2=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,g2=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,y2=e=>e.precision?e.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`):e.precision===0?e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):e.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function v2(e,t){return!!((t==="v4"||!t)&&m2.test(e)||(t==="v6"||!t)&&g2.test(e))}class xn extends Pe{constructor(){super(...arguments),this._regex=(t,n,r)=>this.refinement(i=>t.test(i),{validation:n,code:G.invalid_string,...pe.errToObj(r)}),this.nonempty=t=>this.min(1,pe.errToObj(t)),this.trim=()=>new xn({...this._def,checks:[...this._def.checks,{kind:"trim"}]}),this.toLowerCase=()=>new xn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]}),this.toUpperCase=()=>new xn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==X.string){const o=this._getOrReturnCtx(t);return te(o,{code:G.invalid_type,expected:X.string,received:o.parsedType}),Se}const r=new bt;let i;for(const o of this._def.checks)if(o.kind==="min")t.data.length<o.value&&(i=this._getOrReturnCtx(t,i),te(i,{code:G.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),r.dirty());else if(o.kind==="max")t.data.length>o.value&&(i=this._getOrReturnCtx(t,i),te(i,{code:G.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!1,message:o.message}),r.dirty());else if(o.kind==="length"){const s=t.data.length>o.value,a=t.data.length<o.value;(s||a)&&(i=this._getOrReturnCtx(t,i),s?te(i,{code:G.too_big,maximum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}):a&&te(i,{code:G.too_small,minimum:o.value,type:"string",inclusive:!0,exact:!0,message:o.message}),r.dirty())}else if(o.kind==="email")p2.test(t.data)||(i=this._getOrReturnCtx(t,i),te(i,{validation:"email",code:G.invalid_string,message:o.message}),r.dirty());else if(o.kind==="emoji")h2.test(t.data)||(i=this._getOrReturnCtx(t,i),te(i,{validation:"emoji",code:G.invalid_string,message:o.message}),r.dirty());else if(o.kind==="uuid")f2.test(t.data)||(i=this._getOrReturnCtx(t,i),te(i,{validation:"uuid",code:G.invalid_string,message:o.message}),r.dirty());else if(o.kind==="cuid")u2.test(t.data)||(i=this._getOrReturnCtx(t,i),te(i,{validation:"cuid",code:G.invalid_string,message:o.message}),r.dirty());else if(o.kind==="cuid2")c2.test(t.data)||(i=this._getOrReturnCtx(t,i),te(i,{validation:"cuid2",code:G.invalid_string,message:o.message}),r.dirty());else if(o.kind==="ulid")d2.test(t.data)||(i=this._getOrReturnCtx(t,i),te(i,{validation:"ulid",code:G.invalid_string,message:o.message}),r.dirty());else if(o.kind==="url")try{new URL(t.data)}catch{i=this._getOrReturnCtx(t,i),te(i,{validation:"url",code:G.invalid_string,message:o.message}),r.dirty()}else o.kind==="regex"?(o.regex.lastIndex=0,o.regex.test(t.data)||(i=this._getOrReturnCtx(t,i),te(i,{validation:"regex",code:G.invalid_string,message:o.message}),r.dirty())):o.kind==="trim"?t.data=t.data.trim():o.kind==="includes"?t.data.includes(o.value,o.position)||(i=this._getOrReturnCtx(t,i),te(i,{code:G.invalid_string,validation:{includes:o.value,position:o.position},message:o.message}),r.dirty()):o.kind==="toLowerCase"?t.data=t.data.toLowerCase():o.kind==="toUpperCase"?t.data=t.data.toUpperCase():o.kind==="startsWith"?t.data.startsWith(o.value)||(i=this._getOrReturnCtx(t,i),te(i,{code:G.invalid_string,validation:{startsWith:o.value},message:o.message}),r.dirty()):o.kind==="endsWith"?t.data.endsWith(o.value)||(i=this._getOrReturnCtx(t,i),te(i,{code:G.invalid_string,validation:{endsWith:o.value},message:o.message}),r.dirty()):o.kind==="datetime"?y2(o).test(t.data)||(i=this._getOrReturnCtx(t,i),te(i,{code:G.invalid_string,validation:"datetime",message:o.message}),r.dirty()):o.kind==="ip"?v2(t.data,o.version)||(i=this._getOrReturnCtx(t,i),te(i,{validation:"ip",code:G.invalid_string,message:o.message}),r.dirty()):Me.assertNever(o);return{status:r.value,value:t.data}}_addCheck(t){return new xn({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...pe.errToObj(t)})}url(t){return this._addCheck({kind:"url",...pe.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...pe.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...pe.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...pe.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...pe.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...pe.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...pe.errToObj(t)})}datetime(t){var n;return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof(t==null?void 0:t.precision)>"u"?null:t==null?void 0:t.precision,offset:(n=t==null?void 0:t.offset)!==null&&n!==void 0?n:!1,...pe.errToObj(t==null?void 0:t.message)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...pe.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n==null?void 0:n.position,...pe.errToObj(n==null?void 0:n.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...pe.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...pe.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...pe.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...pe.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...pe.errToObj(n)})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}xn.create=e=>{var t;return new xn({checks:[],typeName:ye.ZodString,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,...Ce(e)})};function x2(e,t){const n=(e.toString().split(".")[1]||"").length,r=(t.toString().split(".")[1]||"").length,i=n>r?n:r,o=parseInt(e.toFixed(i).replace(".","")),s=parseInt(t.toFixed(i).replace(".",""));return o%s/Math.pow(10,i)}class Nr extends Pe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==X.number){const o=this._getOrReturnCtx(t);return te(o,{code:G.invalid_type,expected:X.number,received:o.parsedType}),Se}let r;const i=new bt;for(const o of this._def.checks)o.kind==="int"?Me.isInteger(t.data)||(r=this._getOrReturnCtx(t,r),te(r,{code:G.invalid_type,expected:"integer",received:"float",message:o.message}),i.dirty()):o.kind==="min"?(o.inclusive?t.data<o.value:t.data<=o.value)&&(r=this._getOrReturnCtx(t,r),te(r,{code:G.too_small,minimum:o.value,type:"number",inclusive:o.inclusive,exact:!1,message:o.message}),i.dirty()):o.kind==="max"?(o.inclusive?t.data>o.value:t.data>=o.value)&&(r=this._getOrReturnCtx(t,r),te(r,{code:G.too_big,maximum:o.value,type:"number",inclusive:o.inclusive,exact:!1,message:o.message}),i.dirty()):o.kind==="multipleOf"?x2(t.data,o.value)!==0&&(r=this._getOrReturnCtx(t,r),te(r,{code:G.not_multiple_of,multipleOf:o.value,message:o.message}),i.dirty()):o.kind==="finite"?Number.isFinite(t.data)||(r=this._getOrReturnCtx(t,r),te(r,{code:G.not_finite,message:o.message}),i.dirty()):Me.assertNever(o);return{status:i.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,pe.toString(n))}gt(t,n){return this.setLimit("min",t,!1,pe.toString(n))}lte(t,n){return this.setLimit("max",t,!0,pe.toString(n))}lt(t,n){return this.setLimit("max",t,!1,pe.toString(n))}setLimit(t,n,r,i){return new Nr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:pe.toString(i)}]})}_addCheck(t){return new Nr({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:pe.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:pe.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:pe.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:pe.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:pe.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:pe.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:pe.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:pe.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:pe.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&Me.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(t===null||r.value<t)&&(t=r.value)}return Number.isFinite(n)&&Number.isFinite(t)}}Nr.create=e=>new Nr({checks:[],typeName:ye.ZodNumber,coerce:(e==null?void 0:e.coerce)||!1,...Ce(e)});class Lr extends Pe{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce&&(t.data=BigInt(t.data)),this._getType(t)!==X.bigint){const o=this._getOrReturnCtx(t);return te(o,{code:G.invalid_type,expected:X.bigint,received:o.parsedType}),Se}let r;const i=new bt;for(const o of this._def.checks)o.kind==="min"?(o.inclusive?t.data<o.value:t.data<=o.value)&&(r=this._getOrReturnCtx(t,r),te(r,{code:G.too_small,type:"bigint",minimum:o.value,inclusive:o.inclusive,message:o.message}),i.dirty()):o.kind==="max"?(o.inclusive?t.data>o.value:t.data>=o.value)&&(r=this._getOrReturnCtx(t,r),te(r,{code:G.too_big,type:"bigint",maximum:o.value,inclusive:o.inclusive,message:o.message}),i.dirty()):o.kind==="multipleOf"?t.data%o.value!==BigInt(0)&&(r=this._getOrReturnCtx(t,r),te(r,{code:G.not_multiple_of,multipleOf:o.value,message:o.message}),i.dirty()):Me.assertNever(o);return{status:i.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,pe.toString(n))}gt(t,n){return this.setLimit("min",t,!1,pe.toString(n))}lte(t,n){return this.setLimit("max",t,!0,pe.toString(n))}lt(t,n){return this.setLimit("max",t,!1,pe.toString(n))}setLimit(t,n,r,i){return new Lr({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:pe.toString(i)}]})}_addCheck(t){return new Lr({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:pe.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:pe.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:pe.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:pe.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:pe.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Lr.create=e=>{var t;return new Lr({checks:[],typeName:ye.ZodBigInt,coerce:(t=e==null?void 0:e.coerce)!==null&&t!==void 0?t:!1,...Ce(e)})};class ws extends Pe{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==X.boolean){const r=this._getOrReturnCtx(t);return te(r,{code:G.invalid_type,expected:X.boolean,received:r.parsedType}),Se}return At(t.data)}}ws.create=e=>new ws({typeName:ye.ZodBoolean,coerce:(e==null?void 0:e.coerce)||!1,...Ce(e)});class di extends Pe{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==X.date){const o=this._getOrReturnCtx(t);return te(o,{code:G.invalid_type,expected:X.date,received:o.parsedType}),Se}if(isNaN(t.data.getTime())){const o=this._getOrReturnCtx(t);return te(o,{code:G.invalid_date}),Se}const r=new bt;let i;for(const o of this._def.checks)o.kind==="min"?t.data.getTime()<o.value&&(i=this._getOrReturnCtx(t,i),te(i,{code:G.too_small,message:o.message,inclusive:!0,exact:!1,minimum:o.value,type:"date"}),r.dirty()):o.kind==="max"?t.data.getTime()>o.value&&(i=this._getOrReturnCtx(t,i),te(i,{code:G.too_big,message:o.message,inclusive:!0,exact:!1,maximum:o.value,type:"date"}),r.dirty()):Me.assertNever(o);return{status:r.value,value:new Date(t.data.getTime())}}_addCheck(t){return new di({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:pe.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:pe.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}di.create=e=>new di({checks:[],coerce:(e==null?void 0:e.coerce)||!1,typeName:ye.ZodDate,...Ce(e)});class kl extends Pe{_parse(t){if(this._getType(t)!==X.symbol){const r=this._getOrReturnCtx(t);return te(r,{code:G.invalid_type,expected:X.symbol,received:r.parsedType}),Se}return At(t.data)}}kl.create=e=>new kl({typeName:ye.ZodSymbol,...Ce(e)});class Ss extends Pe{_parse(t){if(this._getType(t)!==X.undefined){const r=this._getOrReturnCtx(t);return te(r,{code:G.invalid_type,expected:X.undefined,received:r.parsedType}),Se}return At(t.data)}}Ss.create=e=>new Ss({typeName:ye.ZodUndefined,...Ce(e)});class _s extends Pe{_parse(t){if(this._getType(t)!==X.null){const r=this._getOrReturnCtx(t);return te(r,{code:G.invalid_type,expected:X.null,received:r.parsedType}),Se}return At(t.data)}}_s.create=e=>new _s({typeName:ye.ZodNull,...Ce(e)});class ho extends Pe{constructor(){super(...arguments),this._any=!0}_parse(t){return At(t.data)}}ho.create=e=>new ho({typeName:ye.ZodAny,...Ce(e)});class ii extends Pe{constructor(){super(...arguments),this._unknown=!0}_parse(t){return At(t.data)}}ii.create=e=>new ii({typeName:ye.ZodUnknown,...Ce(e)});class or extends Pe{_parse(t){const n=this._getOrReturnCtx(t);return te(n,{code:G.invalid_type,expected:X.never,received:n.parsedType}),Se}}or.create=e=>new or({typeName:ye.ZodNever,...Ce(e)});class El extends Pe{_parse(t){if(this._getType(t)!==X.undefined){const r=this._getOrReturnCtx(t);return te(r,{code:G.invalid_type,expected:X.void,received:r.parsedType}),Se}return At(t.data)}}El.create=e=>new El({typeName:ye.ZodVoid,...Ce(e)});class kn extends Pe{_parse(t){const{ctx:n,status:r}=this._processInputParams(t),i=this._def;if(n.parsedType!==X.array)return te(n,{code:G.invalid_type,expected:X.array,received:n.parsedType}),Se;if(i.exactLength!==null){const s=n.data.length>i.exactLength.value,a=n.data.length<i.exactLength.value;(s||a)&&(te(n,{code:s?G.too_big:G.too_small,minimum:a?i.exactLength.value:void 0,maximum:s?i.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:i.exactLength.message}),r.dirty())}if(i.minLength!==null&&n.data.length<i.minLength.value&&(te(n,{code:G.too_small,minimum:i.minLength.value,type:"array",inclusive:!0,exact:!1,message:i.minLength.message}),r.dirty()),i.maxLength!==null&&n.data.length>i.maxLength.value&&(te(n,{code:G.too_big,maximum:i.maxLength.value,type:"array",inclusive:!0,exact:!1,message:i.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((s,a)=>i.type._parseAsync(new In(n,s,n.path,a)))).then(s=>bt.mergeArray(r,s));const o=[...n.data].map((s,a)=>i.type._parseSync(new In(n,s,n.path,a)));return bt.mergeArray(r,o)}get element(){return this._def.type}min(t,n){return new kn({...this._def,minLength:{value:t,message:pe.toString(n)}})}max(t,n){return new kn({...this._def,maxLength:{value:t,message:pe.toString(n)}})}length(t,n){return new kn({...this._def,exactLength:{value:t,message:pe.toString(n)}})}nonempty(t){return this.min(1,t)}}kn.create=(e,t)=>new kn({type:e,minLength:null,maxLength:null,exactLength:null,typeName:ye.ZodArray,...Ce(t)});function Pi(e){if(e instanceof Qe){const t={};for(const n in e.shape){const r=e.shape[n];t[n]=Xn.create(Pi(r))}return new Qe({...e._def,shape:()=>t})}else return e instanceof kn?new kn({...e._def,type:Pi(e.element)}):e instanceof Xn?Xn.create(Pi(e.unwrap())):e instanceof pi?pi.create(Pi(e.unwrap())):e instanceof Mn?Mn.create(e.items.map(t=>Pi(t))):e}class Qe extends Pe{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=Me.objectKeys(t);return this._cached={shape:t,keys:n}}_parse(t){if(this._getType(t)!==X.object){const u=this._getOrReturnCtx(t);return te(u,{code:G.invalid_type,expected:X.object,received:u.parsedType}),Se}const{status:r,ctx:i}=this._processInputParams(t),{shape:o,keys:s}=this._getCached(),a=[];if(!(this._def.catchall instanceof or&&this._def.unknownKeys==="strip"))for(const u in i.data)s.includes(u)||a.push(u);const l=[];for(const u of s){const d=o[u],c=i.data[u];l.push({key:{status:"valid",value:u},value:d._parse(new In(i,c,i.path,u)),alwaysSet:u in i.data})}if(this._def.catchall instanceof or){const u=this._def.unknownKeys;if(u==="passthrough")for(const d of a)l.push({key:{status:"valid",value:d},value:{status:"valid",value:i.data[d]}});else if(u==="strict")a.length>0&&(te(i,{code:G.unrecognized_keys,keys:a}),r.dirty());else if(u!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const u=this._def.catchall;for(const d of a){const c=i.data[d];l.push({key:{status:"valid",value:d},value:u._parse(new In(i,c,i.path,d)),alwaysSet:d in i.data})}}return i.common.async?Promise.resolve().then(async()=>{const u=[];for(const d of l){const c=await d.key;u.push({key:c,value:await d.value,alwaysSet:d.alwaysSet})}return u}).then(u=>bt.mergeObjectSync(r,u)):bt.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(t){return pe.errToObj,new Qe({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,r)=>{var i,o,s,a;const l=(s=(o=(i=this._def).errorMap)===null||o===void 0?void 0:o.call(i,n,r).message)!==null&&s!==void 0?s:r.defaultError;return n.code==="unrecognized_keys"?{message:(a=pe.errToObj(t).message)!==null&&a!==void 0?a:l}:{message:l}}}:{}})}strip(){return new Qe({...this._def,unknownKeys:"strip"})}passthrough(){return new Qe({...this._def,unknownKeys:"passthrough"})}extend(t){return new Qe({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new Qe({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:ye.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new Qe({...this._def,catchall:t})}pick(t){const n={};return Me.objectKeys(t).forEach(r=>{t[r]&&this.shape[r]&&(n[r]=this.shape[r])}),new Qe({...this._def,shape:()=>n})}omit(t){const n={};return Me.objectKeys(this.shape).forEach(r=>{t[r]||(n[r]=this.shape[r])}),new Qe({...this._def,shape:()=>n})}deepPartial(){return Pi(this)}partial(t){const n={};return Me.objectKeys(this.shape).forEach(r=>{const i=this.shape[r];t&&!t[r]?n[r]=i:n[r]=i.optional()}),new Qe({...this._def,shape:()=>n})}required(t){const n={};return Me.objectKeys(this.shape).forEach(r=>{if(t&&!t[r])n[r]=this.shape[r];else{let o=this.shape[r];for(;o instanceof Xn;)o=o._def.innerType;n[r]=o}}),new Qe({...this._def,shape:()=>n})}keyof(){return hv(Me.objectKeys(this.shape))}}Qe.create=(e,t)=>new Qe({shape:()=>e,unknownKeys:"strip",catchall:or.create(),typeName:ye.ZodObject,...Ce(t)});Qe.strictCreate=(e,t)=>new Qe({shape:()=>e,unknownKeys:"strict",catchall:or.create(),typeName:ye.ZodObject,...Ce(t)});Qe.lazycreate=(e,t)=>new Qe({shape:e,unknownKeys:"strip",catchall:or.create(),typeName:ye.ZodObject,...Ce(t)});class ks extends Pe{_parse(t){const{ctx:n}=this._processInputParams(t),r=this._def.options;function i(o){for(const a of o)if(a.result.status==="valid")return a.result;for(const a of o)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const s=o.map(a=>new _n(a.ctx.common.issues));return te(n,{code:G.invalid_union,unionErrors:s}),Se}if(n.common.async)return Promise.all(r.map(async o=>{const s={...n,common:{...n.common,issues:[]},parent:null};return{result:await o._parseAsync({data:n.data,path:n.path,parent:s}),ctx:s}})).then(i);{let o;const s=[];for(const l of r){const u={...n,common:{...n.common,issues:[]},parent:null},d=l._parseSync({data:n.data,path:n.path,parent:u});if(d.status==="valid")return d;d.status==="dirty"&&!o&&(o={result:d,ctx:u}),u.common.issues.length&&s.push(u.common.issues)}if(o)return n.common.issues.push(...o.ctx.common.issues),o.result;const a=s.map(l=>new _n(l));return te(n,{code:G.invalid_union,unionErrors:a}),Se}}get options(){return this._def.options}}ks.create=(e,t)=>new ks({options:e,typeName:ye.ZodUnion,...Ce(t)});const La=e=>e instanceof Cs?La(e.schema):e instanceof bn?La(e.innerType()):e instanceof Os?[e.value]:e instanceof $r?e.options:e instanceof Ps?Object.keys(e.enum):e instanceof Rs?La(e._def.innerType):e instanceof Ss?[void 0]:e instanceof _s?[null]:null;class Eu extends Pe{_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==X.object)return te(n,{code:G.invalid_type,expected:X.object,received:n.parsedType}),Se;const r=this.discriminator,i=n.data[r],o=this.optionsMap.get(i);return o?n.common.async?o._parseAsync({data:n.data,path:n.path,parent:n}):o._parseSync({data:n.data,path:n.path,parent:n}):(te(n,{code:G.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),Se)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,r){const i=new Map;for(const o of n){const s=La(o.shape[t]);if(!s)throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(const a of s){if(i.has(a))throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);i.set(a,o)}}return new Eu({typeName:ye.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:i,...Ce(r)})}}function Dd(e,t){const n=yr(e),r=yr(t);if(e===t)return{valid:!0,data:e};if(n===X.object&&r===X.object){const i=Me.objectKeys(t),o=Me.objectKeys(e).filter(a=>i.indexOf(a)!==-1),s={...e,...t};for(const a of o){const l=Dd(e[a],t[a]);if(!l.valid)return{valid:!1};s[a]=l.data}return{valid:!0,data:s}}else if(n===X.array&&r===X.array){if(e.length!==t.length)return{valid:!1};const i=[];for(let o=0;o<e.length;o++){const s=e[o],a=t[o],l=Dd(s,a);if(!l.valid)return{valid:!1};i.push(l.data)}return{valid:!0,data:i}}else return n===X.date&&r===X.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class Es extends Pe{_parse(t){const{status:n,ctx:r}=this._processInputParams(t),i=(o,s)=>{if(Td(o)||Td(s))return Se;const a=Dd(o.value,s.value);return a.valid?((Ad(o)||Ad(s))&&n.dirty(),{status:n.value,value:a.data}):(te(r,{code:G.invalid_intersection_types}),Se)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([o,s])=>i(o,s)):i(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}Es.create=(e,t,n)=>new Es({left:e,right:t,typeName:ye.ZodIntersection,...Ce(n)});class Mn extends Pe{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==X.array)return te(r,{code:G.invalid_type,expected:X.array,received:r.parsedType}),Se;if(r.data.length<this._def.items.length)return te(r,{code:G.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),Se;!this._def.rest&&r.data.length>this._def.items.length&&(te(r,{code:G.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const o=[...r.data].map((s,a)=>{const l=this._def.items[a]||this._def.rest;return l?l._parse(new In(r,s,r.path,a)):null}).filter(s=>!!s);return r.common.async?Promise.all(o).then(s=>bt.mergeArray(n,s)):bt.mergeArray(n,o)}get items(){return this._def.items}rest(t){return new Mn({...this._def,rest:t})}}Mn.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Mn({items:e,typeName:ye.ZodTuple,rest:null,...Ce(t)})};class bs extends Pe{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==X.object)return te(r,{code:G.invalid_type,expected:X.object,received:r.parsedType}),Se;const i=[],o=this._def.keyType,s=this._def.valueType;for(const a in r.data)i.push({key:o._parse(new In(r,a,r.path,a)),value:s._parse(new In(r,r.data[a],r.path,a))});return r.common.async?bt.mergeObjectAsync(n,i):bt.mergeObjectSync(n,i)}get element(){return this._def.valueType}static create(t,n,r){return n instanceof Pe?new bs({keyType:t,valueType:n,typeName:ye.ZodRecord,...Ce(r)}):new bs({keyType:xn.create(),valueType:t,typeName:ye.ZodRecord,...Ce(n)})}}class bl extends Pe{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==X.map)return te(r,{code:G.invalid_type,expected:X.map,received:r.parsedType}),Se;const i=this._def.keyType,o=this._def.valueType,s=[...r.data.entries()].map(([a,l],u)=>({key:i._parse(new In(r,a,r.path,[u,"key"])),value:o._parse(new In(r,l,r.path,[u,"value"]))}));if(r.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const l of s){const u=await l.key,d=await l.value;if(u.status==="aborted"||d.status==="aborted")return Se;(u.status==="dirty"||d.status==="dirty")&&n.dirty(),a.set(u.value,d.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const l of s){const u=l.key,d=l.value;if(u.status==="aborted"||d.status==="aborted")return Se;(u.status==="dirty"||d.status==="dirty")&&n.dirty(),a.set(u.value,d.value)}return{status:n.value,value:a}}}}bl.create=(e,t,n)=>new bl({valueType:t,keyType:e,typeName:ye.ZodMap,...Ce(n)});class fi extends Pe{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==X.set)return te(r,{code:G.invalid_type,expected:X.set,received:r.parsedType}),Se;const i=this._def;i.minSize!==null&&r.data.size<i.minSize.value&&(te(r,{code:G.too_small,minimum:i.minSize.value,type:"set",inclusive:!0,exact:!1,message:i.minSize.message}),n.dirty()),i.maxSize!==null&&r.data.size>i.maxSize.value&&(te(r,{code:G.too_big,maximum:i.maxSize.value,type:"set",inclusive:!0,exact:!1,message:i.maxSize.message}),n.dirty());const o=this._def.valueType;function s(l){const u=new Set;for(const d of l){if(d.status==="aborted")return Se;d.status==="dirty"&&n.dirty(),u.add(d.value)}return{status:n.value,value:u}}const a=[...r.data.values()].map((l,u)=>o._parse(new In(r,l,r.path,u)));return r.common.async?Promise.all(a).then(l=>s(l)):s(a)}min(t,n){return new fi({...this._def,minSize:{value:t,message:pe.toString(n)}})}max(t,n){return new fi({...this._def,maxSize:{value:t,message:pe.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}fi.create=(e,t)=>new fi({valueType:e,minSize:null,maxSize:null,typeName:ye.ZodSet,...Ce(t)});class Xi extends Pe{constructor(){super(...arguments),this.validate=this.implement}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==X.function)return te(n,{code:G.invalid_type,expected:X.function,received:n.parsedType}),Se;function r(a,l){return wl({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,xl(),xs].filter(u=>!!u),issueData:{code:G.invalid_arguments,argumentsError:l}})}function i(a,l){return wl({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,xl(),xs].filter(u=>!!u),issueData:{code:G.invalid_return_type,returnTypeError:l}})}const o={errorMap:n.common.contextualErrorMap},s=n.data;return this._def.returns instanceof mo?At(async(...a)=>{const l=new _n([]),u=await this._def.args.parseAsync(a,o).catch(p=>{throw l.addIssue(r(a,p)),l}),d=await s(...u);return await this._def.returns._def.type.parseAsync(d,o).catch(p=>{throw l.addIssue(i(d,p)),l})}):At((...a)=>{const l=this._def.args.safeParse(a,o);if(!l.success)throw new _n([r(a,l.error)]);const u=s(...l.data),d=this._def.returns.safeParse(u,o);if(!d.success)throw new _n([i(u,d.error)]);return d.data})}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new Xi({...this._def,args:Mn.create(t).rest(ii.create())})}returns(t){return new Xi({...this._def,returns:t})}implement(t){return this.parse(t)}strictImplement(t){return this.parse(t)}static create(t,n,r){return new Xi({args:t||Mn.create([]).rest(ii.create()),returns:n||ii.create(),typeName:ye.ZodFunction,...Ce(r)})}}class Cs extends Pe{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}Cs.create=(e,t)=>new Cs({getter:e,typeName:ye.ZodLazy,...Ce(t)});class Os extends Pe{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return te(n,{received:n.data,code:G.invalid_literal,expected:this._def.value}),Se}return{status:"valid",value:t.data}}get value(){return this._def.value}}Os.create=(e,t)=>new Os({value:e,typeName:ye.ZodLiteral,...Ce(t)});function hv(e,t){return new $r({values:e,typeName:ye.ZodEnum,...Ce(t)})}class $r extends Pe{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),r=this._def.values;return te(n,{expected:Me.joinValues(r),received:n.parsedType,code:G.invalid_type}),Se}if(this._def.values.indexOf(t.data)===-1){const n=this._getOrReturnCtx(t),r=this._def.values;return te(n,{received:n.data,code:G.invalid_enum_value,options:r}),Se}return At(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t){return $r.create(t)}exclude(t){return $r.create(this.options.filter(n=>!t.includes(n)))}}$r.create=hv;class Ps extends Pe{_parse(t){const n=Me.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(t);if(r.parsedType!==X.string&&r.parsedType!==X.number){const i=Me.objectValues(n);return te(r,{expected:Me.joinValues(i),received:r.parsedType,code:G.invalid_type}),Se}if(n.indexOf(t.data)===-1){const i=Me.objectValues(n);return te(r,{received:r.data,code:G.invalid_enum_value,options:i}),Se}return At(t.data)}get enum(){return this._def.values}}Ps.create=(e,t)=>new Ps({values:e,typeName:ye.ZodNativeEnum,...Ce(t)});class mo extends Pe{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==X.promise&&n.common.async===!1)return te(n,{code:G.invalid_type,expected:X.promise,received:n.parsedType}),Se;const r=n.parsedType===X.promise?n.data:Promise.resolve(n.data);return At(r.then(i=>this._def.type.parseAsync(i,{path:n.path,errorMap:n.common.contextualErrorMap})))}}mo.create=(e,t)=>new mo({type:e,typeName:ye.ZodPromise,...Ce(t)});class bn extends Pe{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ye.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:r}=this._processInputParams(t),i=this._def.effect||null;if(i.type==="preprocess"){const s=i.transform(r.data);return r.common.async?Promise.resolve(s).then(a=>this._def.schema._parseAsync({data:a,path:r.path,parent:r})):this._def.schema._parseSync({data:s,path:r.path,parent:r})}const o={addIssue:s=>{te(r,s),s.fatal?n.abort():n.dirty()},get path(){return r.path}};if(o.addIssue=o.addIssue.bind(o),i.type==="refinement"){const s=a=>{const l=i.refinement(a,o);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){const a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?Se:(a.status==="dirty"&&n.dirty(),s(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?Se:(a.status==="dirty"&&n.dirty(),s(a.value).then(()=>({status:n.value,value:a.value}))))}if(i.type==="transform")if(r.common.async===!1){const s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Sl(s))return s;const a=i.transform(s.value,o);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>Sl(s)?Promise.resolve(i.transform(s.value,o)).then(a=>({status:n.value,value:a})):s);Me.assertNever(i)}}bn.create=(e,t,n)=>new bn({schema:e,typeName:ye.ZodEffects,effect:t,...Ce(n)});bn.createWithPreprocess=(e,t,n)=>new bn({schema:t,effect:{type:"preprocess",transform:e},typeName:ye.ZodEffects,...Ce(n)});class Xn extends Pe{_parse(t){return this._getType(t)===X.undefined?At(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}Xn.create=(e,t)=>new Xn({innerType:e,typeName:ye.ZodOptional,...Ce(t)});class pi extends Pe{_parse(t){return this._getType(t)===X.null?At(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}pi.create=(e,t)=>new pi({innerType:e,typeName:ye.ZodNullable,...Ce(t)});class Rs extends Pe{_parse(t){const{ctx:n}=this._processInputParams(t);let r=n.data;return n.parsedType===X.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}Rs.create=(e,t)=>new Rs({innerType:e,typeName:ye.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...Ce(t)});class Cl extends Pe{_parse(t){const{ctx:n}=this._processInputParams(t),r={...n,common:{...n.common,issues:[]}},i=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return _l(i)?i.then(o=>({status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new _n(r.common.issues)},input:r.data})})):{status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new _n(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}Cl.create=(e,t)=>new Cl({innerType:e,typeName:ye.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...Ce(t)});class Ol extends Pe{_parse(t){if(this._getType(t)!==X.nan){const r=this._getOrReturnCtx(t);return te(r,{code:G.invalid_type,expected:X.nan,received:r.parsedType}),Se}return{status:"valid",value:t.data}}}Ol.create=e=>new Ol({typeName:ye.ZodNaN,...Ce(e)});const w2=Symbol("zod_brand");class mv extends Pe{_parse(t){const{ctx:n}=this._processInputParams(t),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class Zs extends Pe{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.common.async)return(async()=>{const o=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?Se:o.status==="dirty"?(n.dirty(),pv(o.value)):this._def.out._parseAsync({data:o.value,path:r.path,parent:r})})();{const i=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?Se:i.status==="dirty"?(n.dirty(),{status:"dirty",value:i.value}):this._def.out._parseSync({data:i.value,path:r.path,parent:r})}}static create(t,n){return new Zs({in:t,out:n,typeName:ye.ZodPipeline})}}const gv=(e,t={},n)=>e?ho.create().superRefine((r,i)=>{var o,s;if(!e(r)){const a=typeof t=="function"?t(r):typeof t=="string"?{message:t}:t,l=(s=(o=a.fatal)!==null&&o!==void 0?o:n)!==null&&s!==void 0?s:!0,u=typeof a=="string"?{message:a}:a;i.addIssue({code:"custom",...u,fatal:l})}}):ho.create(),S2={object:Qe.lazycreate};var ye;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline"})(ye||(ye={}));const _2=(e,t={message:`Input not instance of ${e.name}`})=>gv(n=>n instanceof e,t),yv=xn.create,vv=Nr.create,k2=Ol.create,E2=Lr.create,xv=ws.create,b2=di.create,C2=kl.create,O2=Ss.create,P2=_s.create,R2=ho.create,T2=ii.create,A2=or.create,D2=El.create,N2=kn.create,L2=Qe.create,$2=Qe.strictCreate,j2=ks.create,I2=Eu.create,M2=Es.create,z2=Mn.create,F2=bs.create,U2=bl.create,B2=fi.create,V2=Xi.create,H2=Cs.create,W2=Os.create,Z2=$r.create,G2=Ps.create,K2=mo.create,ym=bn.create,Q2=Xn.create,q2=pi.create,Y2=bn.createWithPreprocess,J2=Zs.create,X2=()=>yv().optional(),eC=()=>vv().optional(),tC=()=>xv().optional(),nC={string:e=>xn.create({...e,coerce:!0}),number:e=>Nr.create({...e,coerce:!0}),boolean:e=>ws.create({...e,coerce:!0}),bigint:e=>Lr.create({...e,coerce:!0}),date:e=>di.create({...e,coerce:!0})},rC=Se;var Re=Object.freeze({__proto__:null,defaultErrorMap:xs,setErrorMap:a2,getErrorMap:xl,makeIssue:wl,EMPTY_PATH:l2,addIssueToContext:te,ParseStatus:bt,INVALID:Se,DIRTY:pv,OK:At,isAborted:Td,isDirty:Ad,isValid:Sl,isAsync:_l,get util(){return Me},get objectUtil(){return Rd},ZodParsedType:X,getParsedType:yr,ZodType:Pe,ZodString:xn,ZodNumber:Nr,ZodBigInt:Lr,ZodBoolean:ws,ZodDate:di,ZodSymbol:kl,ZodUndefined:Ss,ZodNull:_s,ZodAny:ho,ZodUnknown:ii,ZodNever:or,ZodVoid:El,ZodArray:kn,ZodObject:Qe,ZodUnion:ks,ZodDiscriminatedUnion:Eu,ZodIntersection:Es,ZodTuple:Mn,ZodRecord:bs,ZodMap:bl,ZodSet:fi,ZodFunction:Xi,ZodLazy:Cs,ZodLiteral:Os,ZodEnum:$r,ZodNativeEnum:Ps,ZodPromise:mo,ZodEffects:bn,ZodTransformer:bn,ZodOptional:Xn,ZodNullable:pi,ZodDefault:Rs,ZodCatch:Cl,ZodNaN:Ol,BRAND:w2,ZodBranded:mv,ZodPipeline:Zs,custom:gv,Schema:Pe,ZodSchema:Pe,late:S2,get ZodFirstPartyTypeKind(){return ye},coerce:nC,any:R2,array:N2,bigint:E2,boolean:xv,date:b2,discriminatedUnion:I2,effect:ym,enum:Z2,function:V2,instanceof:_2,intersection:M2,lazy:H2,literal:W2,map:U2,nan:k2,nativeEnum:G2,never:A2,null:P2,nullable:q2,number:vv,object:L2,oboolean:tC,onumber:eC,optional:Q2,ostring:X2,pipeline:J2,preprocess:Y2,promise:K2,record:F2,set:B2,strictObject:$2,string:yv,symbol:C2,transformer:ym,tuple:z2,undefined:O2,union:j2,unknown:T2,void:D2,NEVER:rC,ZodIssueCode:G,quotelessJson:s2,ZodError:_n}),vm=function(e,t,n){if(e&&"reportValidity"in e){var r=ue(n,t);e.setCustomValidity(r&&r.message||""),e.reportValidity()}},wv=function(e,t){var n=function(i){var o=t.fields[i];o&&o.ref&&"reportValidity"in o.ref?vm(o.ref,i,e):o.refs&&o.refs.forEach(function(s){return vm(s,i,e)})};for(var r in t.fields)n(r)},iC=function(e,t){t.shouldUseNativeValidation&&wv(e,t);var n={};for(var r in e){var i=ue(t.fields,r);Ze(n,r,Object.assign(e[r]||{},{ref:i&&i.ref}))}return n},oC=function(e,t){for(var n={};e.length;){var r=e[0],i=r.code,o=r.message,s=r.path.join(".");if(!n[s])if("unionErrors"in r){var a=r.unionErrors[0].errors[0];n[s]={message:a.message,type:a.code}}else n[s]={message:o,type:i};if("unionErrors"in r&&r.unionErrors.forEach(function(d){return d.errors.forEach(function(c){return e.push(c)})}),t){var l=n[s].types,u=l&&l[r.code];n[s]=ov(s,t,n,i,u?[].concat(u,r.message):r.message)}e.shift()}return n},Gs=function(e,t,n){return n===void 0&&(n={}),function(r,i,o){try{return Promise.resolve(function(s,a){try{var l=Promise.resolve(e[n.mode==="sync"?"parse":"parseAsync"](r,t)).then(function(u){return o.shouldUseNativeValidation&&wv({},o),{errors:{},values:n.raw?r:u}})}catch(u){return a(u)}return l&&l.then?l.then(void 0,a):l}(0,function(s){if(function(a){return a.errors!=null}(s))return{values:{},errors:iC(oC(s.errors,!o.shouldUseNativeValidation&&o.criteriaMode==="all"),o)};throw s}))}catch(s){return Promise.reject(s)}}};const ti={SAVE_DATA:"form/saveData",CHANGE_STEP:"form/changeStep",RESET_DATA:"form/resetData",SAVE_DATA_REF_ENTREGA:"form/saveRefData"},sC=e=>({type:ti.SAVE_DATA,payload:e}),eo=e=>({type:ti.CHANGE_STEP,payload:e}),aC=()=>({type:ti.RESET_DATA}),lC=g.button`
  width: 200px;
  height: 40px;
  border: 1px solid #494949eb;
  color: #494949eb;
  border-radius: 3px;
  font-weight: 600;
  letter-spacing: 0.2px;
  background-color: #fafafa;
  cursor: pointer;
  transition: 1s;
  &:hover {
    background-color: #494949eb;
    color: white;
    border: none;
  }
`,cn=({nomeBtn:e,func:t})=>f(yo,{children:f(lC,{onClick:t,children:e})}),uC=g.div`
  width: 100%;
  border-radius: 15px;
  background-color: white;
  border: 1px solid #dddddd;
  animation: entrada 1s ease;
  padding-bottom: 30px;
  @keyframes entrada {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media screen and (max-width: 500px) {
    border: none;
  }
`,cC=g.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  padding-top: 30px;
`,dC=g.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  padding-top: 30px;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    gap: 30px;
  }
`,fC=g.div`
  font-weight: 800;
  letter-spacing: 0.5px;
  font-size: 20px;
  color: #575555eb;
`,pC=g.form`
  width: 100%;
  height: 85%;
  display: flex;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 1400px) {
    width: 80%;
    margin: 0 auto;
  }
`,hC=g.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,mC=g.div`
  width: 34%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,gC=g.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Qt=g.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`,yC=g.div`
  display: flex;
  gap: 10px;
`,qt=g.label`
  font-weight: 500;
  font-size: 14px;
  color: #be96c8;
`,hn=g.input`
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: none;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.2px;
  color: #575555eb;
  background-color: #e1dde2;
  &:focus {
    outline: 1px solid #be96c8;
  }
`,vC=g.select`
  width: 200px;
  height: 30px;
  color: #575555eb;
  border-radius: 5px;
  border: none;
  background-color: #e1dde2;
  text-align: center;
  &:focus {
    outline: 1px solid #be96c8;
  }
`,xC=g.option`
  font-size: 16px;
`,Yt=g.span`
  font-size: 12px;
  color: red;
  text-align: center;
  margin-top: 5px;
`,wC=g.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`,SC=g.p`
  width: 250px;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 500;
  color: #494949eb;
  font-weight: 600;
  margin-top: 30px;
  border: 1px solid #dddddd;
  padding: 20px;
  border-radius: 10px;
  @media screen and (max-width: 1000px) {
    margin: 0;
  }
`,_C=g.button`
  width: 100px;
  height: 30px;
  border: none;
  background-color: #a840c2;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 800;
  letter-spacing: 1px;
  transition: 1s;
  &:hover {
    opacity: 0.7;
  }
`,kC=g.button`
  width: 100px;
  height: 30px;
  border: none;
  background-color: #a840c2;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 800;
  letter-spacing: 1px;
  transition: 1s;
  &:hover {
    opacity: 0.7;
  }
`,EC=g.img`
  margin-left: 100px;
  width: 300px;
  opacity: 0.5;
  animation: animationMoveImg 2s ease alternate infinite;
  @keyframes animationMoveImg {
    to {
      transform: translateY(10px);
    }
  }
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 1250px) {
    margin: 0;
  }
`,bC=g.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1250px) {
    flex-direction: column;
  }
`,CC=g.div`
  width: 50%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1250px) {
    width: 100%;
  }
`,OC=g.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1250px) {
    width: 100%;
  }
`,PC=Re.object({cep:Re.string().nonempty("O cep é obrigatório").min(8,"O CEP deve conter 8 dígitos").transform(e=>parseFloat(e)),cidade:Re.string().nonempty("O campo cidade é obrigatório"),bairro:Re.string().nonempty("O cep é obrigatório"),endereço:Re.string().nonempty("Endereço é obrigatório"),numero:Re.string().nonempty("Nº é obrigatório"),estado:Re.string().nonempty("O campo estado é obrigatório"),complemento:Re.string().nonempty("Este campo é obrigatório"),referencia:Re.string().nonempty("Este campo é obrigatório"),email:Re.string().nonempty("O email  é obrigatório").email("Formato de email inválido"),cpf:Re.string().nonempty("O cpf é obrigatório").regex(new RegExp("([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})"),"Formato de CPF inválido"),nome:Re.string().nonempty("Nome é obrigatório").min(3,{message:"nome curto demais"}),sobrenome:Re.string().nonempty("Sobrenomeme é obrigatório").min(3,{message:"Sobrenome curto demais"})}),RC=()=>{$.useState(1);const{dataEntrega:e}=Et(p=>p.formReducer),t=zs(),n=Cn(),{register:r,handleSubmit:i,formState:{errors:o}}=Ws({resolver:Gs(PC)}),s=p=>{p.cpf=d(p.cpf),n(sC(p)),n(eo(2))},a=()=>{n(aC())},l=()=>{n(eo(2))},u=["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];function d(p){return p=p.replace(/[^\d]/g,""),p.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4")}const c=()=>{t("/")};return P(uC,{children:[e===null?P(yo,{children:[f(cC,{children:f(fC,{children:"INFORMAÇÕES DE ENTREGA"})}),P(pC,{onSubmit:i(s),children:[P(hC,{children:[P(Qt,{children:[f(qt,{children:"CEP:"}),f(hn,{type:"text",...r("cep")}),o.cep&&f(Yt,{children:o.cep.message})]}),P(Qt,{children:[f(qt,{children:"CIDADE:"}),f(hn,{type:"text",...r("cidade")}),o.cidade&&f(Yt,{children:o.cidade.message})]}),P(Qt,{children:[f(qt,{children:"BAIRRO:"}),f(hn,{type:"text",...r("bairro")}),o.bairro&&f(Yt,{children:o.bairro.message})]}),P(yC,{children:[P(Qt,{children:[f(qt,{children:"ENDEREÇO:"}),f(hn,{type:"text",...r("endereço"),style:{width:"140px"}})]}),P(Qt,{children:[f(qt,{children:"Nº:"}),f(hn,{type:"text",...r("numero"),style:{width:"50px"}})]})]}),o.endereço&&f(Yt,{children:o.endereço.message}),o.numero&&f(Yt,{children:o.numero.message})]}),P(mC,{children:[P(Qt,{children:[f(qt,{children:"ESTADO:"}),f(vC,{type:"select",...r("estado"),children:u.map(p=>f(xC,{children:p},p))}),o.estado&&f(Yt,{children:o.estado.message})]}),P(Qt,{children:[f(qt,{children:"COMPLEMENTO:"}),f(hn,{type:"text",...r("complemento")}),o.complemento&&f(Yt,{children:o.complemento.message})]}),P(Qt,{children:[f(qt,{children:"PONTO DE REFERÊNCIA:"}),f(hn,{type:"text",...r("referencia")}),o.referencia&&f(Yt,{children:o.referencia.message})]}),P(Qt,{children:[f(qt,{children:"EMAIL:"}),f(hn,{type:"text",...r("email")}),o.email&&f(Yt,{children:o.email.message})]})]}),P(gC,{children:[P(Qt,{children:[f(qt,{children:"CPF:"}),f(hn,{type:"text",...r("cpf")}),o.cpf&&f(Yt,{children:o.cpf.message})]}),P(Qt,{children:[f(qt,{children:"NOME:"}),f(hn,{type:"text",...r("nome")}),o.nome&&f(Yt,{children:o.nome.message})]}),P(Qt,{children:[f(qt,{children:"SOBRENOME:"}),f(hn,{type:"text",...r("sobrenome")}),o.sobrenome&&f(Yt,{children:o.sobrenome.message})]}),f(cn,{nomeBtn:"CONFIRMAR"})]})]})]}):null,e!=null?P(wC,{children:[P(dC,{children:[f(_C,{onClick:c,children:"ANTERIOR"}),f(kC,{onClick:l,children:"PRÓXIMO"})]}),P(bC,{children:[f(CC,{children:f(EC,{src:"/img/login-img.png"})}),P(OC,{children:[f(SC,{children:"Os dados de entrega já foram preenchidos e salvos. usaremos esses dados como base para seu pedido. caso queira alterar os dados de entrega clique no botão abaixo."}),f(cn,{func:a,nomeBtn:"ALTERAR"})]})]})]}):null]})},TC=g.div`
  width: 100%;
  border-radius: 15px;
  background-color: white;
  border: 1px solid #dddddd;
  animation: entrada 1s ease;
  @keyframes entrada {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,AC=g.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 30px;
  padding-top: 30px;
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`,DC=g.div`
  width: 150px;
  display: flex;
  justify-content: center;
`,NC=g.div`
  width: 100%;
  display: flex;
  justify-content: center;
`,LC=g.div`
  font-weight: 800;
  letter-spacing: 0.5px;
  font-size: 20px;
  color: #575555eb;
  margin-right: 150px;
  @media screen and (max-width: 850px) {
    margin: 0;
    margin-top: 20px;
  }
`,$C=g.div`
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,jC=g.div`
  width: 60%;
  height: 200px;
  display: flex;
  align-items: center;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  justify-content: space-around;
  @media screen and (max-width: 850px) {
    flex-direction: column;
    height: fit-content;
    padding-top: 20px;
    padding-bottom: 20px;
    gap: 20px;
  }
`,IC=g.img`
  width: 100px;
  height: 100px;
`,MC=g.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 850px) {
    width: fit-content;
    height: fit-content;
    border: 1px solid #be96c8;
    border-radius: 5px;
    padding: 8px;
    gap: 10px;
  }
`,xm=g.p`
  font-weight: 500;
  color: #575555eb;
  font-weight: 800;
`,zC=g.p`
  font-weight: 500;
  color: #575555eb;
  font-weight: 800;
`,FC=g.p`
  font-weight: 500;
  color: #575555eb;
  font-weight: 800;
`,UC=g.img`
  width: 25px;
  padding-left: 50px;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 850px) {
    padding: 0;
  }
`,BC=g.div`
  height: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
`,VC=g.p`
  color: #575555eb;
  font-size: 12px;
  font-weight: 600;
`,HC=g.p`
  color: #575555eb;
  font-size: 14px;
  font-weight: 600;
`,WC=g.button`
  width: 100px;
  height: 30px;
  border: none;
  background-color: #a840c2;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 800;
  letter-spacing: 1px;
  transition: 1s;
  margin-left: 50px;
  &:hover {
    opacity: 0.7;
  }
  @media screen and (max-width: 850px) {
    margin: 0;
  }
`;g.div`
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #222222eb;
  font-weight: 700;
`;g.button`
  background: none;
  border: none;
  width: 20px;
  font-size: 25px;
  cursor: pointer;
  font-weight: 700;
  color: #222222eb;
  &:hover {
    background-color: #ffffff1f;
  }
`;g.button`
  background: none;
  border: none;
  width: 20px;
  font-size: 25px;
  cursor: pointer;
  font-weight: 700;
  color: #222222eb;
  &:hover {
    background-color: #ffffff1f;
  }
`;g.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;const ZC=()=>{var o,s,a,l,u,d,c,p;const{products:e}=Et(w=>w.cartReducer);$.useState((o=e[0])==null?void 0:o.quantity);const t=Cn(),n=()=>{t(eo(1))},r=()=>{t(Gf()),t(eo(1))},i=()=>{t(eo(3))};return P(TC,{children:[P(AC,{children:[f(DC,{children:f(WC,{onClick:n,children:"VOLTAR"})}),f(NC,{children:f(LC,{children:"REVISE SEU PEDIDO"})})]}),P($C,{children:[P(jC,{children:[f(IC,{src:(s=e[0])==null?void 0:s.image_url}),P(MC,{children:[f(xm,{children:(a=e[0])==null?void 0:a.name}),f(xm,{children:(l=e[0])==null?void 0:l.description}),P(zC,{children:[(u=e[0])==null?void 0:u.price," R$"]}),P(FC,{children:[(d=e[0])==null?void 0:d.quantity," UNIDADES"]})]}),f(Ql,{to:"/",children:f(UC,{onClick:r,src:"img/trash.png"})})]}),P(BC,{children:[f(VC,{children:"TOTAL"}),P(HC,{children:[((c=e[0])==null?void 0:c.price)*((p=e[0])==null?void 0:p.quantity)," R$"]}),f(cn,{func:i,nomeBtn:"CONFIRMAR"})]})]})]})},GC=g.div`
  width: 100%;
  border-radius: 15px;
  background-color: white;
  border: 1px solid #dddddd;
  animation: entrada 1s ease;

  @keyframes entrada {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,KC=g.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 30px;
  padding-top: 30px;
`,QC=g.div`
  width: 100px;
  display: flex;
  justify-content: center;
`,qC=g.div`
  width: 100%;
  display: flex;
  justify-content: center;
`,YC=g.div`
  font-weight: 800;
  letter-spacing: 0.5px;
  font-size: 20px;
  color: #575555eb;
  margin-right: 100px;
`,JC=g.div`
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;g.div`
  width: 60%;
  height: 200px;
  display: flex;
  align-items: center;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #e2e2e2;
  justify-content: space-around;
`;g.img`
  width: 100px;
  height: 100px;
`;g.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;g.p`
  font-weight: 500;
  color: #be96c8;
`;g.p`
  font-weight: 500;
  color: #be96c8;
`;g.p`
  font-weight: 500;
  color: #be96c8;
`;g.img`
  width: 25px;
  padding-left: 50px;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;g.div`
  height: 150px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
`;g.p`
  color: #be96c8;
  font-size: 12px;
  font-weight: 600;
`;g.p`
  color: #be96c8;
  font-size: 14px;
  font-weight: 600;
`;const XC=g.button`
  width: 200px;
  height: 40px;
  border: 2px solid #a840c2;
  color: #a840c2;
  font-weight: 600;
  letter-spacing: 0.8px;
  margin-bottom: 50px;
  margin-top: 10px;
  background-color: white;
  cursor: pointer;
  border-radius: 3px;
  transition: 1s;
  &:hover {
    background-color: #a840c2;
    color: white;
  }
`,eO=g.button`
  width: 100px;
  height: 30px;
  border: none;
  background-color: #a840c2;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 800;
  letter-spacing: 1px;
  transition: 1s;
  &:hover {
    opacity: 0.7;
  }
`,tO=()=>{const{dataEntrega:e}=Et(o=>o.formReducer),{products:t}=Et(o=>o.cartReducer);console.log(e),console.log(t);const n=Cn();return P(GC,{children:[P(KC,{children:[f(QC,{children:f(eO,{onClick:()=>{n(eo(2))},children:"VOLTAR"})}),f(qC,{children:f(YC,{children:"PAGAMENTO"})})]}),P(JC,{children:[f("h1",{style:{marginBottom:"10px"},children:"AQUI FICA O CHECKOUT"}),f(XC,{onClick:()=>{const o={name:e.nome,last_name:e.sobrenome,email:e.email,product_id:t[0].id,quantity:t[0].quantity,freight:100,personal_id:e.cpf,zip_code:e.cep,street:e.endereço,number:e.numero,complement:e.complemento,neighborhood:e.bairro,city:e.cidade,state:e.estado,reference:e.referencia},s="http://168.119.50.201:3001";Ut.post(`${s}/public/order`,o).then(a=>{console.log(a),n(Ik(t)),n(Gf())},a=>{console.log(a)})},children:"simula pagamento!"})]})]})},nO=g.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #aaa;
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 5px;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`,rO=g.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-size: 1000px;
  background: linear-gradient(white 10%, #ffffffef 60%);

  @media screen and (max-width: 1000px) {
    width: 100vw;
  }
`,iO=g.div`
  width: 100%;
  height: 100px;
  display: flex;
  background-image: url("/img/5593055.jpg");
  background-size: 1000px;
  background-position: 500px;
`,oO=g.div`
  width: 100%;
  height: 100px;
  display: flex;
  border-bottom: 1px solid #e2e2e2;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #a840c2, 80%, #d751f8b9);
`,sO=g.h1`
  font-size: 40px;
  color: white;
  @media screen and (max-width: 500px) {
    font-size: 40px;
  }
`,aO=g.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`,lO=g.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
`,yc=g.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  background-color: #e1dde2;
  border-radius: 50%;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: white;
  cursor: pointer;
`,wm=g.p`
  font-size: 16px;
  color: #e1dde2;
`,uO=g.div`
  width: 60%;
  border-radius: 15px;
  margin-top: 20px;
`,cO=g.div`
  width: 100%;
`,dO=g.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,fO=g.p`
  font-size: 26px;
  font-weight: 600;
  color: #797878;
  cursor: default;
`,vc={backgroundColor:"#B768CB"},Sm={color:"#B768CB"},pO=()=>{const{stepAtual:e}=Et(i=>i.formReducer),{products:t}=Et(i=>i.cartReducer);$.useEffect(()=>{r(e)},[e]);const[n,r]=$.useState(e);return Cn(),f(nO,{children:P(rO,{children:[f(iO,{children:f(oO,{children:f(sO,{children:"CHECKOUT"})})}),t.length>=1?P(aO,{children:[P(lO,{children:[f(yc,{style:n>=1?vc:null,children:"1"}),f(wm,{style:n>=2?Sm:null,children:">"}),f(yc,{style:n>=2?vc:null,children:"2"}),f(wm,{style:n>=3?Sm:null,children:">"}),f(yc,{style:n>=3?vc:null,children:"3"})]}),P(uO,{children:[n===1?f(RC,{}):null,n===2?f(ZC,{}):null,n===3?f(tO,{}):null]})]}):P(dO,{children:[f(fO,{children:"OOOOPS, ALGO ESTÁ ERRADO!"}),f(Ql,{to:"/",children:f(cn,{nomeBtn:"VOLTAR"})})]}),f(cO,{children:f(gu,{})})]})})};function Ts(e){return Ts=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ts(e)}function hO(e,t){if(Ts(e)!=="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Ts(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function mO(e){var t=hO(e,"string");return Ts(t)==="symbol"?t:String(t)}function gO(e,t,n){return t=mO(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function km(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_m(Object(n),!0).forEach(function(r){gO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_m(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function St(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Em=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),xc=function(){return Math.random().toString(36).substring(7).split("").join(".")},Pl={INIT:"@@redux/INIT"+xc(),REPLACE:"@@redux/REPLACE"+xc(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+xc()}};function yO(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function rp(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(St(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(St(1));return n(rp)(e,t)}if(typeof e!="function")throw new Error(St(2));var i=e,o=t,s=[],a=s,l=!1;function u(){a===s&&(a=s.slice())}function d(){if(l)throw new Error(St(3));return o}function c(m){if(typeof m!="function")throw new Error(St(4));if(l)throw new Error(St(5));var R=!0;return u(),a.push(m),function(){if(R){if(l)throw new Error(St(6));R=!1,u();var h=a.indexOf(m);a.splice(h,1),s=null}}}function p(m){if(!yO(m))throw new Error(St(7));if(typeof m.type>"u")throw new Error(St(8));if(l)throw new Error(St(9));try{l=!0,o=i(o,m)}finally{l=!1}for(var R=s=a,y=0;y<R.length;y++){var h=R[y];h()}return m}function w(m){if(typeof m!="function")throw new Error(St(10));i=m,p({type:Pl.REPLACE})}function v(){var m,R=c;return m={subscribe:function(h){if(typeof h!="object"||h===null)throw new Error(St(11));function x(){h.next&&h.next(d())}x();var C=R(x);return{unsubscribe:C}}},m[Em]=function(){return this},m}return p({type:Pl.INIT}),r={dispatch:p,subscribe:c,getState:d,replaceReducer:w},r[Em]=v,r}function vO(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Pl.INIT});if(typeof r>"u")throw new Error(St(12));if(typeof n(void 0,{type:Pl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(St(13))})}function xO(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];typeof e[i]=="function"&&(n[i]=e[i])}var o=Object.keys(n),s;try{vO(n)}catch(a){s=a}return function(l,u){if(l===void 0&&(l={}),s)throw s;for(var d=!1,c={},p=0;p<o.length;p++){var w=o[p],v=n[w],m=l[w],R=v(m,u);if(typeof R>"u")throw u&&u.type,new Error(St(14));c[w]=R,d=d||R!==m}return d=d||o.length!==Object.keys(l).length,d?c:l}}function wO(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function SO(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),o=function(){throw new Error(St(15))},s={getState:i.getState,dispatch:function(){return o.apply(void 0,arguments)}},a=t.map(function(l){return l(s)});return o=wO.apply(void 0,a)(i.dispatch),km(km({},i),{},{dispatch:o})}}}var ip="persist:",Sv="persist/FLUSH",op="persist/REHYDRATE",_v="persist/PAUSE",kv="persist/PERSIST",Ev="persist/PURGE",bv="persist/REGISTER",_O=-1;function $a(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?$a=function(n){return typeof n}:$a=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},$a(e)}function bm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function kO(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bm(n,!0).forEach(function(r){EO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bm(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function EO(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bO(e,t,n,r){r.debug;var i=kO({},n);return e&&$a(e)==="object"&&Object.keys(e).forEach(function(o){o!=="_persist"&&t[o]===n[o]&&(i[o]=e[o])}),i}function CO(e){var t=e.blacklist||null,n=e.whitelist||null,r=e.transforms||[],i=e.throttle||0,o="".concat(e.keyPrefix!==void 0?e.keyPrefix:ip).concat(e.key),s=e.storage,a;e.serialize===!1?a=function(T){return T}:typeof e.serialize=="function"?a=e.serialize:a=OO;var l=e.writeFailHandler||null,u={},d={},c=[],p=null,w=null,v=function(T){Object.keys(T).forEach(function(M){y(M)&&u[M]!==T[M]&&c.indexOf(M)===-1&&c.push(M)}),Object.keys(u).forEach(function(M){T[M]===void 0&&y(M)&&c.indexOf(M)===-1&&u[M]!==void 0&&c.push(M)}),p===null&&(p=setInterval(m,i)),u=T};function m(){if(c.length===0){p&&clearInterval(p),p=null;return}var C=c.shift(),T=r.reduce(function(M,z){return z.in(M,C,u)},u[C]);if(T!==void 0)try{d[C]=a(T)}catch(M){console.error("redux-persist/createPersistoid: error serializing state",M)}else delete d[C];c.length===0&&R()}function R(){Object.keys(d).forEach(function(C){u[C]===void 0&&delete d[C]}),w=s.setItem(o,a(d)).catch(h)}function y(C){return!(n&&n.indexOf(C)===-1&&C!=="_persist"||t&&t.indexOf(C)!==-1)}function h(C){l&&l(C)}var x=function(){for(;c.length!==0;)m();return w||Promise.resolve()};return{update:v,flush:x}}function OO(e){return JSON.stringify(e)}function PO(e){var t=e.transforms||[],n="".concat(e.keyPrefix!==void 0?e.keyPrefix:ip).concat(e.key),r=e.storage;e.debug;var i;return e.deserialize===!1?i=function(s){return s}:typeof e.deserialize=="function"?i=e.deserialize:i=RO,r.getItem(n).then(function(o){if(o)try{var s={},a=i(o);return Object.keys(a).forEach(function(l){s[l]=t.reduceRight(function(u,d){return d.out(u,l,a)},i(a[l]))}),s}catch(l){throw l}else return})}function RO(e){return JSON.parse(e)}function TO(e){var t=e.storage,n="".concat(e.keyPrefix!==void 0?e.keyPrefix:ip).concat(e.key);return t.removeItem(n,AO)}function AO(e){}function Cm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Vn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Cm(n,!0).forEach(function(r){DO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Cm(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function DO(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function NO(e,t){if(e==null)return{};var n=LO(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function LO(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}var $O=5e3;function jO(e,t){var n=e.version!==void 0?e.version:_O;e.debug;var r=e.stateReconciler===void 0?bO:e.stateReconciler,i=e.getStoredState||PO,o=e.timeout!==void 0?e.timeout:$O,s=null,a=!1,l=!0,u=function(c){return c._persist.rehydrated&&s&&!l&&s.update(c),c};return function(d,c){var p=d||{},w=p._persist,v=NO(p,["_persist"]),m=v;if(c.type===kv){var R=!1,y=function(Z,oe){R||(c.rehydrate(e.key,Z,oe),R=!0)};if(o&&setTimeout(function(){!R&&y(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},o),l=!1,s||(s=CO(e)),w)return Vn({},t(m,c),{_persist:w});if(typeof c.rehydrate!="function"||typeof c.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return c.register(e.key),i(e).then(function(z){var Z=e.migrate||function(oe,ee){return Promise.resolve(oe)};Z(z,n).then(function(oe){y(oe)},function(oe){y(void 0,oe)})},function(z){y(void 0,z)}),Vn({},t(m,c),{_persist:{version:n,rehydrated:!1}})}else{if(c.type===Ev)return a=!0,c.result(TO(e)),Vn({},t(m,c),{_persist:w});if(c.type===Sv)return c.result(s&&s.flush()),Vn({},t(m,c),{_persist:w});if(c.type===_v)l=!0;else if(c.type===op){if(a)return Vn({},m,{_persist:Vn({},w,{rehydrated:!0})});if(c.key===e.key){var h=t(m,c),x=c.payload,C=r!==!1&&x!==void 0?r(x,d,h,e):h,T=Vn({},C,{_persist:Vn({},w,{rehydrated:!0})});return u(T)}}}if(!w)return t(d,c);var M=t(m,c);return M===m?d:u(Vn({},M,{_persist:w}))}}function Om(e){return zO(e)||MO(e)||IO()}function IO(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function MO(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function zO(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function Pm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Nd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pm(n,!0).forEach(function(r){FO(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pm(n).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function FO(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Cv={registry:[],bootstrapped:!1},UO=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Cv,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case bv:return Nd({},t,{registry:[].concat(Om(t.registry),[n.key])});case op:var r=t.registry.indexOf(n.key),i=Om(t.registry);return i.splice(r,1),Nd({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function BO(e,t,n){var r=n||!1,i=rp(UO,Cv,t&&t.enhancer?t.enhancer:void 0),o=function(u){i.dispatch({type:bv,key:u})},s=function(u,d,c){var p={type:op,payload:d,err:c,key:u};e.dispatch(p),i.dispatch(p),r&&a.getState().bootstrapped&&(r(),r=!1)},a=Nd({},i,{purge:function(){var u=[];return e.dispatch({type:Ev,result:function(c){u.push(c)}}),Promise.all(u)},flush:function(){var u=[];return e.dispatch({type:Sv,result:function(c){u.push(c)}}),Promise.all(u)},pause:function(){e.dispatch({type:_v})},persist:function(){e.dispatch({type:kv,register:o,rehydrate:s})}});return t&&t.manualPersist||a.persist(),a}var sp={},ap={};ap.__esModule=!0;ap.default=WO;function ja(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ja=function(n){return typeof n}:ja=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ja(e)}function wc(){}var VO={getItem:wc,setItem:wc,removeItem:wc};function HO(e){if((typeof self>"u"?"undefined":ja(self))!=="object"||!(e in self))return!1;try{var t=self[e],n="redux-persist ".concat(e," test");t.setItem(n,"test"),t.getItem(n),t.removeItem(n)}catch{return!1}return!0}function WO(e){var t="".concat(e,"Storage");return HO(t)?self[t]:VO}sp.__esModule=!0;sp.default=KO;var ZO=GO(ap);function GO(e){return e&&e.__esModule?e:{default:e}}function KO(e){var t=(0,ZO.default)(e);return{getItem:function(r){return new Promise(function(i,o){i(t.getItem(r))})},setItem:function(r,i){return new Promise(function(o,s){o(t.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,o){i(t.removeItem(r))})}}}var Ov=void 0,QO=qO(sp);function qO(e){return e&&e.__esModule?e:{default:e}}var YO=(0,QO.default)("local");Ov=YO;const JO={products:[],historic:[],pedidosConfirmados:[]},XO=(e=JO,t)=>{switch(t.type){case gr.ADD_PRODUCT:const n=e.products.findIndex(r=>r.id===t.payload.id);if(n!==-1){const r=[...e.products];return r[n].quantity=t.payload.quantity,{...e,products:r}}else return{...e,products:[...e.products,t.payload]};case gr.REMOVE_PRODUCT:return{...e,products:e.products.filter(r=>r.id===t.payload.id)};case gr.SALVA_INFO_PEDIDO:return{...e,pedidosConfirmados:t.payload};case gr.CLEAR_CART:return{...e,products:[]};case gr.CLEAR_CART:return{...e,products:[]};default:return e}},to={LOGA_USER:"user/logaUser",MUDA_FORM:"user/mudaForm",DESLOGA_USER:"user/deslogaUser"},eP={isLogged:!1,qualForm:"Cadastro"},tP=(e=eP,t)=>{switch(t.type){case to.LOGA_USER:return{...e,isLogged:!0,qualForm:"Cadastro",tokens:t.payload};case to.DESLOGA_USER:return{...e,isLogged:!1,tokens:null};case to.MUDA_FORM:return{...e,qualForm:t.payload};default:return e}},nP={dataEntrega:null,stepAtual:1},rP=(e=nP,t)=>{switch(t.type){case ti.SAVE_DATA:return{...e,dataEntrega:t.payload};case ti.CHANGE_STEP:return{...e,stepAtual:t.payload};case ti.RESET_DATA:return{...e,dataEntrega:null};case ti.SAVE_DATA_REF_ENTREGA:return{...e,dataEntregaRef:t.payload};default:return e}},iP=xO({cartReducer:XO,userReducer:tP,formReducer:rP});var Ld={exports:{}};(function(e,t){(function(n,r){r(t)})(_o,function(n){function r(E,k){E.super_=k,E.prototype=Object.create(k.prototype,{constructor:{value:E,enumerable:!1,writable:!0,configurable:!0}})}function i(E,k){Object.defineProperty(this,"kind",{value:E,enumerable:!0}),k&&k.length&&Object.defineProperty(this,"path",{value:k,enumerable:!0})}function o(E,k,S){o.super_.call(this,"E",E),Object.defineProperty(this,"lhs",{value:k,enumerable:!0}),Object.defineProperty(this,"rhs",{value:S,enumerable:!0})}function s(E,k){s.super_.call(this,"N",E),Object.defineProperty(this,"rhs",{value:k,enumerable:!0})}function a(E,k){a.super_.call(this,"D",E),Object.defineProperty(this,"lhs",{value:k,enumerable:!0})}function l(E,k,S){l.super_.call(this,"A",E),Object.defineProperty(this,"index",{value:k,enumerable:!0}),Object.defineProperty(this,"item",{value:S,enumerable:!0})}function u(E,k,S){var A=E.slice((S||k)+1||E.length);return E.length=k<0?E.length+k:k,E.push.apply(E,A),E}function d(E){var k=typeof E>"u"?"undefined":_e(E);return k!=="object"?k:E===Math?"math":E===null?"null":Array.isArray(E)?"array":Object.prototype.toString.call(E)==="[object Date]"?"date":typeof E.toString=="function"&&/^\/.*\//.test(E.toString())?"regexp":"object"}function c(E,k,S,A,V,b,K){V=V||[],K=K||[];var I=V.slice(0);if(typeof b<"u"){if(A){if(typeof A=="function"&&A(I,b))return;if((typeof A>"u"?"undefined":_e(A))==="object"){if(A.prefilter&&A.prefilter(I,b))return;if(A.normalize){var Oe=A.normalize(I,b,E,k);Oe&&(E=Oe[0],k=Oe[1])}}}I.push(b)}d(E)==="regexp"&&d(k)==="regexp"&&(E=E.toString(),k=k.toString());var me=typeof E>"u"?"undefined":_e(E),ge=typeof k>"u"?"undefined":_e(k),ie=me!=="undefined"||K&&K[K.length-1].lhs&&K[K.length-1].lhs.hasOwnProperty(b),De=ge!=="undefined"||K&&K[K.length-1].rhs&&K[K.length-1].rhs.hasOwnProperty(b);if(!ie&&De)S(new s(I,k));else if(!De&&ie)S(new a(I,E));else if(d(E)!==d(k))S(new o(I,E,k));else if(d(E)==="date"&&E-k!==0)S(new o(I,E,k));else if(me==="object"&&E!==null&&k!==null)if(K.filter(function(O){return O.lhs===E}).length)E!==k&&S(new o(I,E,k));else{if(K.push({lhs:E,rhs:k}),Array.isArray(E)){var xe;for(E.length,xe=0;xe<E.length;xe++)xe>=k.length?S(new l(I,xe,new a(void 0,E[xe]))):c(E[xe],k[xe],S,A,I,xe,K);for(;xe<k.length;)S(new l(I,xe,new s(void 0,k[xe++])))}else{var we=Object.keys(E),_=Object.keys(k);we.forEach(function(O,N){var q=_.indexOf(O);q>=0?(c(E[O],k[O],S,A,I,O,K),_=u(_,q)):c(E[O],void 0,S,A,I,O,K)}),_.forEach(function(O){c(void 0,k[O],S,A,I,O,K)})}K.length=K.length-1}else E!==k&&(me==="number"&&isNaN(E)&&isNaN(k)||S(new o(I,E,k)))}function p(E,k,S,A){return A=A||[],c(E,k,function(V){V&&A.push(V)},S),A.length?A:void 0}function w(E,k,S){if(S.path&&S.path.length){var A,V=E[k],b=S.path.length-1;for(A=0;A<b;A++)V=V[S.path[A]];switch(S.kind){case"A":w(V[S.path[A]],S.index,S.item);break;case"D":delete V[S.path[A]];break;case"E":case"N":V[S.path[A]]=S.rhs}}else switch(S.kind){case"A":w(E[k],S.index,S.item);break;case"D":E=u(E,k);break;case"E":case"N":E[k]=S.rhs}return E}function v(E,k,S){if(E&&k&&S&&S.kind){for(var A=E,V=-1,b=S.path?S.path.length-1:0;++V<b;)typeof A[S.path[V]]>"u"&&(A[S.path[V]]=typeof S.path[V]=="number"?[]:{}),A=A[S.path[V]];switch(S.kind){case"A":w(S.path?A[S.path[V]]:A,S.index,S.item);break;case"D":delete A[S.path[V]];break;case"E":case"N":A[S.path[V]]=S.rhs}}}function m(E,k,S){if(S.path&&S.path.length){var A,V=E[k],b=S.path.length-1;for(A=0;A<b;A++)V=V[S.path[A]];switch(S.kind){case"A":m(V[S.path[A]],S.index,S.item);break;case"D":V[S.path[A]]=S.lhs;break;case"E":V[S.path[A]]=S.lhs;break;case"N":delete V[S.path[A]]}}else switch(S.kind){case"A":m(E[k],S.index,S.item);break;case"D":E[k]=S.lhs;break;case"E":E[k]=S.lhs;break;case"N":E=u(E,k)}return E}function R(E,k,S){if(E&&k&&S&&S.kind){var A,V,b=E;for(V=S.path.length-1,A=0;A<V;A++)typeof b[S.path[A]]>"u"&&(b[S.path[A]]={}),b=b[S.path[A]];switch(S.kind){case"A":m(b[S.path[A]],S.index,S.item);break;case"D":b[S.path[A]]=S.lhs;break;case"E":b[S.path[A]]=S.lhs;break;case"N":delete b[S.path[A]]}}}function y(E,k,S){if(E&&k){var A=function(V){S&&!S(E,k,V)||v(E,k,V)};c(E,k,A)}}function h(E){return"color: "+W[E].color+"; font-weight: bold"}function x(E){var k=E.kind,S=E.path,A=E.lhs,V=E.rhs,b=E.index,K=E.item;switch(k){case"E":return[S.join("."),A,"→",V];case"N":return[S.join("."),V];case"D":return[S.join(".")];case"A":return[S.join(".")+"["+b+"]",K];default:return[]}}function C(E,k,S,A){var V=p(E,k);try{A?S.groupCollapsed("diff"):S.group("diff")}catch{S.log("diff")}V?V.forEach(function(b){var K=b.kind,I=x(b);S.log.apply(S,["%c "+W[K].text,h(K)].concat(Ve(I)))}):S.log("—— no diff ——");try{S.groupEnd()}catch{S.log("—— diff end —— ")}}function T(E,k,S,A){switch(typeof E>"u"?"undefined":_e(E)){case"object":return typeof E[A]=="function"?E[A].apply(E,Ve(S)):E[A];case"function":return E(k);default:return E}}function M(E){var k=E.timestamp,S=E.duration;return function(A,V,b){var K=["action"];return K.push("%c"+String(A.type)),k&&K.push("%c@ "+V),S&&K.push("%c(in "+b.toFixed(2)+" ms)"),K.join(" ")}}function z(E,k){var S=k.logger,A=k.actionTransformer,V=k.titleFormatter,b=V===void 0?M(k):V,K=k.collapsed,I=k.colors,Oe=k.level,me=k.diff,ge=typeof k.titleFormatter>"u";E.forEach(function(ie,De){var xe=ie.started,we=ie.startedTime,_=ie.action,O=ie.prevState,N=ie.error,q=ie.took,U=ie.nextState,B=E[De+1];B&&(U=B.prevState,q=B.started-xe);var Y=A(_),Ee=typeof K=="function"?K(function(){return U},_,ie):K,J=ae(we),Ie=I.title?"color: "+I.title(Y)+";":"",Lt=["color: gray; font-weight: lighter;"];Lt.push(Ie),k.timestamp&&Lt.push("color: gray; font-weight: lighter;"),k.duration&&Lt.push("color: gray; font-weight: lighter;");var Ct=b(Y,J,q);try{Ee?I.title&&ge?S.groupCollapsed.apply(S,["%c "+Ct].concat(Lt)):S.groupCollapsed(Ct):I.title&&ge?S.group.apply(S,["%c "+Ct].concat(Lt)):S.group(Ct)}catch{S.log(Ct)}var D=T(Oe,Y,[O],"prevState"),L=T(Oe,Y,[Y],"action"),F=T(Oe,Y,[N,O],"error"),re=T(Oe,Y,[U],"nextState");if(D)if(I.prevState){var le="color: "+I.prevState(O)+"; font-weight: bold";S[D]("%c prev state",le,O)}else S[D]("prev state",O);if(L)if(I.action){var he="color: "+I.action(Y)+"; font-weight: bold";S[L]("%c action    ",he,Y)}else S[L]("action    ",Y);if(N&&F)if(I.error){var fe="color: "+I.error(N,O)+"; font-weight: bold;";S[F]("%c error     ",fe,N)}else S[F]("error     ",N);if(re)if(I.nextState){var ke="color: "+I.nextState(U)+"; font-weight: bold";S[re]("%c next state",ke,U)}else S[re]("next state",U);me&&C(O,U,S,Ee);try{S.groupEnd()}catch{S.log("—— log end ——")}})}function Z(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},k=Object.assign({},Q,E),S=k.logger,A=k.stateTransformer,V=k.errorTransformer,b=k.predicate,K=k.logErrors,I=k.diffPredicate;if(typeof S>"u")return function(){return function(me){return function(ge){return me(ge)}}};if(E.getState&&E.dispatch)return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
// Logger with default options
import { logger } from 'redux-logger'
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
// Or you can create your own logger with custom options http://bit.ly/redux-logger-options
import createLogger from 'redux-logger'
const logger = createLogger({
  // ...options
});
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
`),function(){return function(me){return function(ge){return me(ge)}}};var Oe=[];return function(me){var ge=me.getState;return function(ie){return function(De){if(typeof b=="function"&&!b(ge,De))return ie(De);var xe={};Oe.push(xe),xe.started=ve.now(),xe.startedTime=new Date,xe.prevState=A(ge()),xe.action=De;var we=void 0;if(K)try{we=ie(De)}catch(O){xe.error=V(O)}else we=ie(De);xe.took=ve.now()-xe.started,xe.nextState=A(ge());var _=k.diff&&typeof I=="function"?I(ge,De):k.diff;if(z(Oe,Object.assign({},k,{diff:_})),Oe.length=0,xe.error)throw xe.error;return we}}}}var oe,ee,Ae=function(E,k){return new Array(k+1).join(E)},se=function(E,k){return Ae("0",k-E.toString().length)+E},ae=function(E){return se(E.getHours(),2)+":"+se(E.getMinutes(),2)+":"+se(E.getSeconds(),2)+"."+se(E.getMilliseconds(),3)},ve=typeof performance<"u"&&performance!==null&&typeof performance.now=="function"?performance:Date,_e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},Ve=function(E){if(Array.isArray(E)){for(var k=0,S=Array(E.length);k<E.length;k++)S[k]=E[k];return S}return Array.from(E)},Ne=[];oe=(typeof _o>"u"?"undefined":_e(_o))==="object"&&_o?_o:typeof window<"u"?window:{},ee=oe.DeepDiff,ee&&Ne.push(function(){typeof ee<"u"&&oe.DeepDiff===p&&(oe.DeepDiff=ee,ee=void 0)}),r(o,i),r(s,i),r(a,i),r(l,i),Object.defineProperties(p,{diff:{value:p,enumerable:!0},observableDiff:{value:c,enumerable:!0},applyDiff:{value:y,enumerable:!0},applyChange:{value:v,enumerable:!0},revertChange:{value:R,enumerable:!0},isConflict:{value:function(){return typeof ee<"u"},enumerable:!0},noConflict:{value:function(){return Ne&&(Ne.forEach(function(E){E()}),Ne=null),p},enumerable:!0}});var W={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},Q={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(E){return E},actionTransformer:function(E){return E},errorTransformer:function(E){return E},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},ce=function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},k=E.dispatch,S=E.getState;return typeof k=="function"||typeof S=="function"?Z()({dispatch:k,getState:S}):void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)};n.defaults=Q,n.createLogger=Z,n.logger=ce,n.default=ce,Object.defineProperty(n,"__esModule",{value:!0})})})(Ld,Ld.exports);var oP=Ld.exports;const sP=Id(oP),aP={key:"cart",storage:Ov},lP=jO(aP,iP),Pv=rp(lP,SO(sP)),uP=BO(Pv);function Ia(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ia=function(n){return typeof n}:Ia=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ia(e)}function cP(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Rm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function dP(e,t,n){return t&&Rm(e.prototype,t),n&&Rm(e,n),e}function fP(e,t){return t&&(Ia(t)==="object"||typeof t=="function")?t:Ma(e)}function $d(e){return $d=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},$d(e)}function Ma(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function pP(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&jd(e,t)}function jd(e,t){return jd=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},jd(e,t)}function za(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Rv=function(e){pP(t,e);function t(){var n,r;cP(this,t);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=fP(this,(n=$d(t)).call.apply(n,[this].concat(o))),za(Ma(r),"state",{bootstrapped:!1}),za(Ma(r),"_unsubscribe",void 0),za(Ma(r),"handlePersistorState",function(){var a=r.props.persistor,l=a.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return dP(t,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),t}($.PureComponent);za(Rv,"defaultProps",{children:null,loading:null});const hP=e=>({type:to.LOGA_USER,payload:e}),Rl=e=>({type:to.MUDA_FORM,payload:e}),mP=e=>({type:to.DESLOGA_USER,payload:e}),gP=g.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;g.h1`
  font-size: 26px;
  font-weight: 800;
  color: #a840c2;
  opacity: 0.7;
  letter-spacing: 1px;
  margin-top: 60px;
  margin-bottom: 60px;
`;const yP=g.form`
  width: 700px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background-color: #fafafa;
  box-shadow: 0px 2px 5px #e2e2e2;
  border-radius: 10px;
`,Fr=g.label`
  font-weight: 500;
  font-size: 14px;
  color: #494949eb;
`;g.button`
  width: 250px;
  height: 40px;
  border: 2px solid #be96c8;
  color: #be96c8;
  font-weight: 600;
  letter-spacing: 0.2px;
  background-color: #fafafa;
  cursor: pointer;
  &:hover {
    animation: animationBtn 2s ease both;
    @keyframes animationBtn {
      to {
        background-color: #a840c2;
        color: white;
        border: none;
        border-top-left-radius: 15px;
        border-bottom-right-radius: 15px;
      }
    }
  }
`;const vP=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;g.p`
  font-size: 14px;
`;g.p`
  cursor: pointer;
  font-weight: 500;
  text-decoration: underline;
  font-size: 14px;
`;const Ur=g.span`
  font-size: 12px;
  color: red;
  margin-top: 5px;
`,Br=g.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`,xP=g.div`
  width: 50%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  margin-left: 50px;
`,wP=g.div`
  width: 50%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-right: 50px;
  margin-bottom: 27px;
`,SP=g.div`
  width: 90%;
  height: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`,Vr=g.input`
  width: 250px;
  height: 30px;
  border-radius: 5px;
  border: none;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.2px;
  color: #575555eb;
  background-color: #e1dde2;
  &:focus {
    outline: 1px solid #be96c8;
  }
`;g.div`
  display: flex;
  gap: 5px;
  width: 90%;
  padding-top: 10px;
  justify-content: center;
  align-items: center;
`;const _P=g.div`
  height: 100px;
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Tm=g.p`
  font-size: 20px;
  color: red;
  font-weight: 500;
`,kP=Re.object({nome:Re.string().nonempty("Nome é obrigatório").min(3,{message:"nome curto demais"}),sobrenome:Re.string().nonempty("Sobrenomeme é obrigatório").min(3,{message:"Sobrenome curto demais"}),email:Re.string().nonempty("O email  é obrigatório").email("Formato de email inválido"),senha:Re.string().min(8,{message:"Senha muito curta"}).nonempty("Senha é obrigatório"),senha2:Re.string().min(8,{message:"Senha muito curta"}).nonempty("Confirme a senha!"),idade:Re.string().nonempty("Idade é origatório").transform(e=>parseFloat(e)),cpf:Re.string().nonempty("O cpf é obrigatório").regex(new RegExp("([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})"),"Formato de CPF inválido")}).refine(e=>e.senha===e.senha2,{message:"Senhas não coincidem",path:["senha2"]}),EP=()=>{const[e,t]=$.useState(),[n,r]=$.useState(""),[i,o]=$.useState();Et(c=>c.userReducer);const s=Cn(),{register:a,handleSubmit:l,formState:{errors:u}}=Ws({resolver:Gs(kP)});return f(gP,{children:P(yo,{children:[P(yP,{onSubmit:l(c=>{const p="http://168.119.50.201:3001";Ut.post(`${p}/public/signup`,{name:c.nome,last_name:c.sobrenome,email:c.email,password:c.senha,personal_id:c.cpf,age:c.idade,gender:!0}).then(w=>{t(w.data.data),o(w.status),r("Cadastro feito com sucesso"),s(Rl("Login"))},w=>{o(w.response.status),r("Houve um erro, tente novamente. Provavelmente a conta já existe kkkkkk")})}),children:[P(xP,{children:[P(Br,{children:[f(Fr,{children:"NOME:"}),f(Vr,{type:"text",...a("nome")}),u.nome&&f(Ur,{children:u.nome.message})]}),P(Br,{children:[f(Fr,{children:"SOBRENOME:"}),f(Vr,{type:"text",...a("sobrenome")}),u.sobrenome&&f(Ur,{children:u.sobrenome.message})]}),P(Br,{children:[f(Fr,{children:"IDADE:"}),f(Vr,{type:"text",...a("idade")}),u.idade&&f(Ur,{children:u.idade.message})]}),P(Br,{children:[f(Fr,{children:"CPF:"}),f(Vr,{type:"text",...a("cpf")}),u.cpf&&f(Ur,{children:u.cpf.message})]})]}),P(wP,{children:[P(Br,{children:[f(Fr,{style:{marginTop:"10px"},children:"EMAIL:"}),f(Vr,{type:"text",...a("email")}),u.email&&f(Ur,{children:u.email.message})]}),P(Br,{children:[f(Fr,{children:"SENHA:"}),f(Vr,{type:"password",...a("senha")}),u.senha&&f(Ur,{children:u.senha.message})]}),P(Br,{children:[f(Fr,{children:"CONFIRME A SENHA:"}),f(Vr,{type:"password",...a("senha2")}),u.senha2&&f(Ur,{children:u.senha2.message})]}),f(SP,{children:f(cn,{nomeBtn:"CONFIRMAR"})})]})]}),f(vP,{children:P(_P,{children:[i!=200?f(Tm,{children:n}):null,i===200?f(Tm,{style:{color:"green"},children:n}):null]})})]})})},bP=g.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;g.h1`
  font-size: 26px;
  font-weight: 800;
  color: #a840c2;
  opacity: 0.7;
  letter-spacing: 1px;
  margin-top: 60px;
  margin-bottom: 60px;
`;const CP=g.form`
  width: 700px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fafafa;
  box-shadow: 0px 2px 5px #e2e2e2;
  border-radius: 10px;
`,Am=g.label`
  font-weight: 500;
  font-size: 14px;
  color: #494949eb;
`;g.button`
  width: 250px;
  height: 40px;
  border: 2px solid #be96c8;
  color: #be96c8;
  font-weight: 600;
  letter-spacing: 1px;
  background-color: #fafafa;
  cursor: pointer;
  &:hover {
    animation: animationBtn 2s ease both;
    @keyframes animationBtn {
      to {
        background-color: #a840c2;
        color: white;
        border: none;
        border-top-left-radius: 15px;
        border-bottom-right-radius: 15px;
      }
    }
  }
`;const OP=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`,Dm=g.span`
  font-size: 12px;
  color: red;
  margin-top: 5px;
`,Nm=g.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`,PP=g.div`
  height: 50px;
  display: flex;
  align-items: flex-end;
`,Lm=g.input`
  width: 250px;
  height: 30px;
  border-radius: 5px;
  border: none;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.2px;
  color: #575555eb;
  background-color: #e1dde2;
  &:focus {
    outline: 1px solid #be96c8;
  }
`,RP=Re.object({email:Re.string().nonempty("Preencha o email!").email(),senha:Re.string().nonempty("Digite sua senha!")}),TP=()=>{const e=Cn(),[t,n]=$.useState(),r=zs(),{register:i,handleSubmit:o,formState:{errors:s}}=Ws({resolver:Gs(RP)});return f(bP,{children:P(yo,{children:[P(CP,{onSubmit:o(l=>{const u="http://168.119.50.201:3001";Ut.post(`${u}/public/signin`,{email:l.email,password:l.senha}).then(d=>{const c=d.data.data;console.log(d.data.data),n(d.status),e(hP(c)),r("/Admim")},d=>{n(d.response.status),console.log(d.response.status)})}),children:[P(Nm,{children:[f(Am,{children:"EMAIL:"}),f(Lm,{type:"email",...i("email")}),s.email&&f(Dm,{children:s.email.message})]}),P(Nm,{children:[f(Am,{children:"SENHA:"}),f(Lm,{type:"password",...i("senha")}),s.senha&&f(Dm,{children:s.senha.message})]}),f(PP,{children:f(cn,{nomeBtn:"CONFIRMAR"})})]}),P(OP,{children:[t===200?f("p",{children:t}):null,t!=200?f("p",{children:t}):null]})]})})},AP=g.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #aaa;
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 5px;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`,DP=g.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    width: 100vw;
  }
`,NP=g.div`
  height: 250px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,LP=g.p`
  font-size: 30px;
  font-weight: 600;
  color: #be96c8;
`,$m=g.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`,jm=g.p`
  font-size: 12px;
`,Im=g.p`
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
`,$P=()=>{const{qualForm:e}=Et(i=>i.userReducer),t=Cn();return f(AP,{children:P(DP,{children:[P(NP,{children:[f(LP,{children:"CADASTRO"}),e==="Cadastro"?P($m,{children:[f(jm,{children:"Já possui uma conta? faça"}),f(Im,{onClick:()=>{t(Rl("Login"))},children:"LOGIN"})]}):null,e==="Login"?P($m,{children:[f(jm,{children:"Não possui uma conta? faça"}),f(Im,{onClick:()=>{t(Rl("Cadastro"))},children:"CADASTRO"})]}):null]}),e==="Cadastro"?f(EP,{}):null,e==="Login"?f(TP,{}):null]})})},jP=g.div`
  width: 400px;
  height: 500px;
  background-color: #fafafa;
  box-shadow: 0px 2px 5px #e2e2e2;
  border-radius: 10px;
  border-top-right-radius: 0px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  word-wrap: break-word;
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #aaa;
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 5px;
  }
`,IP=g.div`
  width: 80%;
  background-color: #d36ad6;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  box-shadow: 0px 2px 5px #a1a1a1;
  letter-spacing: 0.5px;
`,MP=g.div`
  background-color: #d36ad6;
  width: 100%;
  display: flex;
  justify-content: center;
`,zP=g.h1`
  font-size: 16px;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
`,ur=g.div`
  gap: 10px;
  display: flex;
`,cr=g.label`
  font-weight: 600;
`,dr=g.p`
  width: 80%;
`,FP=g.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,UP=g.div`
  animation: 1.5s linear infinite spinner;
  animation-play-state: inherit;
  border: solid 5px #cfd0d1;
  border-bottom-color: #a840c2;
  border-radius: 50%;
  content: "";
  height: 80px;
  top: 10%;
  left: 10%;
  transform: translate3d(-50%, -50%, 0);
  width: 80px;
  will-change: transform;
  margin-left: 80px;
  margin-top: 50px;
  @keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }
`,lp=({lista:e})=>P(jP,{children:[e!=null&&P(yo,{children:[f(MP,{children:f(zP,{children:"LISTA ATUALIZADA"})}),e==null?void 0:e.map(t=>P(IP,{children:[P(ur,{children:[f(cr,{children:"ID: "}),f(dr,{children:t.id})]}),P(ur,{children:[f(cr,{children:"Nome: "}),f(dr,{children:t.name})]}),P(ur,{children:[f(cr,{children:"Desc: "}),f(dr,{children:t.description})]}),P(ur,{children:[f(cr,{children:"Preço: "}),f(dr,{children:t.price})]}),P(ur,{children:[f(cr,{children:"Url: "}),f(dr,{children:t.image_url})]}),P(ur,{children:[f(cr,{children:"Category: "}),f(dr,{children:t.category_id})]}),P(ur,{children:[f(cr,{children:"Fornecedor: "}),f(dr,{children:t.suplier_url})]}),P(ur,{children:[f(cr,{children:"Active: "}),P(dr,{children:[t.active===!0?"true":"false"," "]})]})]},t.id))]}),e===null&&f(FP,{children:f(UP,{})})]}),BP=g.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 50px;
`,VP=g.form`
  width: 400px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fafafa;
  box-shadow: 0px 2px 5px #e2e2e2;
  border-radius: 10px;
`,wi=g.label`
  font-weight: 500;
  font-size: 14px;
  color: #494949eb;
`,Si=g.span`
  font-size: 12px;
  color: red;
  margin-top: 5px;
`,_i=g.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`,HP=g.div`
  height: 50px;
  display: flex;
  align-items: flex-end;
`,ki=g.input`
  width: 250px;
  height: 30px;
  border-radius: 5px;
  border: none;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.2px;
  color: #575555eb;
  background-color: #e1dde2;
  &:focus {
    outline: 1px solid #be96c8;
  }
`,WP=g.p`
  width: 65%;
  color: red;
  margin-top: 10px;
  text-align: center;
`,ZP=g.p`
  margin-top: 5px;
  font-size: 20px;
  background-color: red;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 3px;
  color: white;
`,GP={backgroundColor:"#1afa1a"},KP={color:"#1afa1a"},QP=Re.object({nome:Re.string().nonempty("Nome é obrigatório"),desc:Re.string().nonempty("Descrição é obrigatório"),preço:Re.string().nonempty("O preço  é obrigatório").transform(e=>parseFloat(e)),url:Re.string().nonempty("URL é obrigatório"),urlFornecedor:Re.string().nonempty("URL FORNECEDOR é obrigatório"),category:Re.string().nonempty("Preencha este campo").transform(e=>parseFloat(e))}),qP=()=>{const[e,t]=$.useState(""),[n,r]=$.useState(null),[i,o]=$.useState(null),{tokens:s}=Et(p=>p.userReducer),a=p=>{t(null);const w="http://168.119.50.201:3001";Ut.post(`${w}/admin/product`,{name:p.nome,description:p.desc,price:p.preço,image_url:p.url,suplier_url:p.urlFornecedor,category:p.category},{headers:{"Auth-Token":s.access_token}}).then(v=>{console.log(v),l(),r(v.status),o("SUCESSO!")},v=>{console.log(v),l(),r(v.response.status),o(v.response.data.errors[0])})},l=()=>{const p="http://168.119.50.201:3001";Ut.get(`${p}/public/product`).then(w=>{t(w.data.data),console.log(w.data.data)},w=>{console.log(w)})},{register:u,handleSubmit:d,formState:{errors:c}}=Ws({resolver:Gs(QP)});return P(BP,{children:[P(VP,{onSubmit:d(a),children:[P(_i,{children:[f(wi,{children:"NOME PRODUTO:"}),f(ki,{type:"text",...u("nome")}),c.nome&&f(Si,{children:c.nome.message})]}),P(_i,{children:[f(wi,{children:"DESCRIÇÃO:"}),f(ki,{type:"text",...u("desc")}),c.desc&&f(Si,{children:c.desc.message})]}),P(_i,{children:[f(wi,{children:"PREÇO:"}),f(ki,{type:"text",...u("preço")}),c.preço&&f(Si,{children:c.preço.message})]}),P(_i,{children:[f(wi,{children:"URL DA IMAGEM:"}),f(ki,{type:"text",...u("url")}),c.url&&f(Si,{children:c.url.message})]}),P(_i,{children:[f(wi,{children:"URL DO FORNECEDOR:"}),f(ki,{type:"text",...u("urlFornecedor")}),c.urlFornecedor&&f(Si,{children:c.urlFornecedor.message})]}),P(_i,{children:[f(wi,{children:"CATEGORY ID:"}),f(ki,{type:"text",...u("category")}),c.category&&f(Si,{children:c.category.message})]}),f(HP,{children:f(cn,{func:a,nomeBtn:"CRIAR PRODUTO"})}),n!=null?f(ZP,{style:n===200?GP:null,children:n}):null,i!=null?f(WP,{style:i==="SUCESSO!"?KP:null,children:i}):null]}),e!=""&&f(lp,{lista:e})]})},YP=g.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 50px;
`,JP=g.form`
  width: 400px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fafafa;
  box-shadow: 0px 2px 5px #e2e2e2;
  border-radius: 10px;
`,Ei=g.label`
  font-weight: 500;
  font-size: 14px;
  color: #494949eb;
`,bi=g.span`
  font-size: 12px;
  color: red;
  margin-top: 5px;
`,Ci=g.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`,XP=g.div`
  height: 50px;
  display: flex;
  align-items: flex-end;
`,Oi=g.input`
  width: 250px;
  height: 30px;
  border-radius: 5px;
  border: none;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.2px;
  color: #575555eb;
  background-color: #e1dde2;
  &:focus {
    outline: 1px solid #be96c8;
  }
`,eR=g.p`
  width: 65%;
  color: red;
  margin-top: 10px;
  text-align: center;
`,tR=g.p`
  margin-top: 5px;
  font-size: 20px;
  background-color: red;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 3px;
  color: white;
`,nR={backgroundColor:"#1afa1a"},rR={color:"#1afa1a"},iR=Re.object({nome:Re.string().nonempty("Nome é obrigatório"),desc:Re.string().nonempty("Descrição é obrigatório"),preço:Re.string().nonempty("O preço  é obrigatório").transform(e=>parseFloat(e)),url:Re.string().nonempty("URL é obrigatório"),category:Re.string().nonempty("Preencha este campo").transform(e=>parseFloat(e)),id:Re.string().nonempty("Preencha este campo").transform(e=>parseFloat(e))}),oR=()=>{const[e,t]=$.useState(""),[n,r]=$.useState(null),[i,o]=$.useState(null),{tokens:s}=Et(p=>p.userReducer),a=p=>{t(null);const w="http://168.119.50.201:3001";Ut.put(`${w}/admin/product/${p.id}`,{name:p.nome,description:p.desc,price:p.preço,image_url:p.url,category_id:p.category},{headers:{"Auth-Token":s.access_token}}).then(v=>{console.log(v),l(),r(v.status),o("SUCESSO!")},v=>{console.log(v),l(),r(v.response.status),o(v.response.data.errors[0])})},l=()=>{const p="http://168.119.50.201:3001";Ut.get(`${p}/public/product`).then(w=>{t(w.data.data),console.log(w.data.data)},w=>{console.log(w)})},{register:u,handleSubmit:d,formState:{errors:c}}=Ws({resolver:Gs(iR)});return P(YP,{children:[P(JP,{onSubmit:d(a),children:[P(Ci,{children:[f(Ei,{children:"NOME PRODUTO:"}),f(Oi,{type:"text",...u("nome")}),c.nome&&f(bi,{children:c.nome.message})]}),P(Ci,{children:[f(Ei,{children:"DESCRIÇÃO:"}),f(Oi,{type:"text",...u("desc")}),c.desc&&f(bi,{children:c.desc.message})]}),P(Ci,{children:[f(Ei,{children:"PREÇO:"}),f(Oi,{type:"text",...u("preço")}),c.preço&&f(bi,{children:c.preço.message})]}),P(Ci,{children:[f(Ei,{children:"URL DA IMAGEM:"}),f(Oi,{type:"text",...u("url")}),c.url&&f(bi,{children:c.url.message})]}),P(Ci,{children:[f(Ei,{children:"CATEGORY ID:"}),f(Oi,{type:"text",...u("category")}),c.category&&f(bi,{children:c.category.message})]}),P(Ci,{children:[f(Ei,{children:"ID do produto:"}),f(Oi,{type:"text",...u("id")}),c.id&&f(bi,{children:c.id.message})]}),f(XP,{children:f(cn,{func:a,nomeBtn:"ATUALIZAR PROD"})}),n!=null?f(tR,{style:n===200?nR:null,children:n}):null,i!=null?f(eR,{style:i==="SUCESSO!"?rR:null,children:i}):null]}),e!=""&&f(lp,{lista:e})]})},sR=g.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 50px;
`,aR=g.form`
  width: 400px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fafafa;
  box-shadow: 0px 2px 5px #e2e2e2;
  border-radius: 10px;
`,lR=g.label`
  font-weight: 500;
  font-size: 14px;
  color: #494949eb;
`,uR=g.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`,cR=g.div`
  height: 50px;
  display: flex;
  align-items: flex-end;
`,dR=g.input`
  width: 250px;
  height: 30px;
  border-radius: 5px;
  border: none;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.2px;
  color: #575555eb;
  background-color: #e1dde2;
  &:focus {
    outline: 1px solid #be96c8;
  }
`,fR=g.p`
  width: 65%;
  color: red;
  margin-top: 10px;
  text-align: center;
`,pR=g.p`
  margin-top: 5px;
  font-size: 20px;
  background-color: red;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 3px;
  color: white;
`,hR={backgroundColor:"#1afa1a"},mR={color:"#1afa1a"},gR=()=>{const[e,t]=$.useState(""),[n,r]=$.useState(null),[i,o]=$.useState(null),[s,a]=$.useState(),{tokens:l}=Et(c=>c.userReducer),u=()=>{t(null);const c="http://168.119.50.201:3001";Ut.delete(`${c}/admin/product/deactive/${s}`,{headers:{"Auth-Token":l.access_token}}).then(p=>{console.log(p),d(),r(p.status),o("SUCESSO!")},p=>{console.log(p),d(),r(p.response.status),o(p.response.data.errors[0])})},d=()=>{const c="http://168.119.50.201:3001";Ut.get(`${c}/public/product`).then(p=>{t(p.data.data),console.log(p.data.data)},p=>{console.log(p)})};return P(sR,{children:[P(aR,{children:[P(uR,{onChange:c=>a(c.target.value),children:[f(lR,{children:"ID do produto:"}),f(dR,{type:"text"})]}),f(cR,{children:f(cn,{func:u,nomeBtn:"DESATIVAR PRODUTO"})}),n!=null?f(pR,{style:n===200?hR:null,children:n}):null,i!=null?f(fR,{style:i==="SUCESSO!"?mR:null,children:i}):null]}),e!=""&&f(lp,{lista:e})]})},yR=g.div`
  width: 400px;
  height: 500px;
  background-color: #fafafa;
  box-shadow: 0px 2px 5px #e2e2e2;
  border-radius: 10px;
  border-top-right-radius: 0px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  word-wrap: break-word;
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #aaa;
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 5px;
  }
`,vR=g.div`
  width: 80%;
  background-color: #d36ad6;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  border-radius: 5px;
  color: white;
  box-shadow: 0px 2px 5px #a1a1a1;
  letter-spacing: 0.5px;
`,xR=g.div`
  background-color: #d36ad6;
  width: 100%;
  display: flex;
  justify-content: center;
`,wR=g.h1`
  font-size: 16px;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
`,Jt=g.div`
  gap: 10px;
  display: flex;
`,Xt=g.label`
  font-weight: 600;
`,en=g.p`
  width: 80%;
`,SR=g.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,_R=g.div`
  animation: 1.5s linear infinite spinner;
  animation-play-state: inherit;
  border: solid 5px #cfd0d1;
  border-bottom-color: #a840c2;
  border-radius: 50%;
  content: "";
  height: 80px;
  top: 10%;
  left: 10%;
  transform: translate3d(-50%, -50%, 0);
  width: 80px;
  will-change: transform;
  margin-left: 80px;
  margin-top: 50px;
  @keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }
`,Tv=({lista:e})=>P(yR,{children:[e!=null&&P(yo,{children:[f(xR,{children:f(wR,{children:"LISTA ATUALIZADA"})}),e==null?void 0:e.map(t=>P(vR,{children:[P(Jt,{children:[f(Xt,{children:"FRETE: "}),f(en,{children:t.freight})]}),P(Jt,{children:[f(Xt,{children:"HASH: "}),f(en,{children:t.hash})]}),P(Jt,{children:[f(Xt,{children:"ID: "}),f(en,{children:t.id})]}),P(Jt,{children:[f(Xt,{style:{width:"150px"},children:"PRODUCT ID: "}),f(en,{children:t.product_id})]}),P(Jt,{children:[f(Xt,{children:"QUANTITY: "}),f(en,{children:t.quantity})]}),P(Jt,{children:[f(Xt,{children:"TOTAL: "}),f(en,{children:t.total})]}),P(Jt,{children:[f(Xt,{style:{width:"100px"},children:"USER ID: "}),f(en,{children:t.address.user_id})]}),P(Jt,{children:[f(Xt,{style:{width:"150px"},children:"USER email: "}),f(en,{children:t.address.user.email})]}),P(Jt,{children:[f(Xt,{style:{width:"150px"},children:"USER state: "}),f(en,{children:t.address.state})]}),P(Jt,{children:[f(Xt,{style:{width:"150px"},children:"USER city: "}),f(en,{children:t.address.city})]}),P(Jt,{children:[f(Xt,{style:{width:"150px"},children:"USER city: "}),f(en,{children:t.address.street})]}),P(Jt,{children:[f(Xt,{style:{width:"150px"},children:"STATUS: "}),f(en,{children:t.order_status.description})]})]},t.id))]}),e===null&&f(SR,{children:f(_R,{})})]}),kR=g.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 50px;
`,ER=g.p`
  width: 65%;
  color: red;
  margin-top: 10px;
  text-align: center;
`,bR=g.p`
  margin-top: 5px;
  font-size: 20px;
  background-color: red;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 3px;
  color: white;
`,CR=g.div`
  width: 400px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fafafa;
  box-shadow: 0px 2px 5px #e2e2e2;
  border-radius: 10px;
  margin-top: 20px;
`,OR={backgroundColor:"#1afa1a"},PR={color:"#1afa1a"},Mm=g.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`,zm=g.label`
  font-weight: 500;
  font-size: 14px;
  color: #494949eb;
`,Fm=g.input`
  width: 250px;
  height: 30px;
  border-radius: 5px;
  border: none;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.2px;
  color: #575555eb;
  background-color: #e1dde2;
  &:focus {
    outline: 1px solid #be96c8;
  }
`,RR=()=>{const[e,t]=$.useState(""),[n,r]=$.useState(null),[i,o]=$.useState(null),[s,a]=$.useState(null),[l,u]=$.useState(null),{tokens:d}=Et(p=>p.userReducer);return P(kR,{children:[P(CR,{children:[P(Mm,{onChange:p=>o(p.target.value),children:[f(zm,{children:"OFFSET:"}),f(Fm,{})]}),P(Mm,{onChange:p=>a(p.target.value),children:[f(zm,{children:"LIMIT:"}),f(Fm,{})]}),f(cn,{func:()=>{const p="http://168.119.50.201:3001";Ut.get(`${p}/admin/order?offset=${i}&limit=${s}`,{data:{offset:i,limit:s},headers:{"Auth-Token":d.access_token}}).then(w=>{console.log(w),t(w.data.data),r(w.status),u("SUCESSO!")},w=>{console.log(w),r(w.response.status),u(w.response.data.errors[0])})},nomeBtn:"LISTAR PEDIDOS"}),n!=null?f(bR,{style:n===200?OR:null,children:n}):null,l!=null?f(ER,{style:l==="SUCESSO!"?PR:null,children:l}):null]}),e!=""&&f(Tv,{lista:e})]})},TR=g.div`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 50px;
`,AR=g.form`
  width: 400px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fafafa;
  box-shadow: 0px 2px 5px #e2e2e2;
  border-radius: 10px;
`,DR=g.label`
  font-weight: 500;
  font-size: 14px;
  color: #494949eb;
`,NR=g.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`,LR=g.div`
  height: 50px;
  display: flex;
  align-items: flex-end;
`,$R=g.input`
  width: 250px;
  height: 30px;
  border-radius: 5px;
  border: none;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.2px;
  color: #575555eb;
  background-color: #e1dde2;
  &:focus {
    outline: 1px solid #be96c8;
  }
`,jR=g.p`
  width: 65%;
  color: red;
  margin-top: 10px;
  text-align: center;
`,IR=g.p`
  margin-top: 5px;
  font-size: 20px;
  background-color: red;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 3px;
  color: white;
`,MR={backgroundColor:"#1afa1a"},zR={color:"#1afa1a"},FR=()=>{const[e,t]=$.useState(""),[n,r]=$.useState(null),[i,o]=$.useState(null),[s,a]=$.useState(),{tokens:l}=Et(c=>c.userReducer),u=()=>{t(null);const c="http://168.119.50.201:3001";Ut.put(`${c}/admin/cancel-order/${s}`,{},{headers:{"Auth-Token":l.access_token}}).then(p=>{console.log(p),d(),r(p.status),o("SUCESSO!")},p=>{console.log(p),d(),r(p.response.status)})},d=()=>{const c="http://168.119.50.201:3001";Ut.get(`${c}/admin/order?offset=0&limit=100`,{headers:{"Auth-Token":l.access_token}}).then(p=>{t(p.data.data),console.log(p.data.data)},p=>{console.log(p)})};return $.useEffect(()=>{d()},[]),P(TR,{children:[P(AR,{children:[P(NR,{onChange:c=>a(c.target.value),children:[f(DR,{children:"ID do pedido:"}),f($R,{type:"text"})]}),f(LR,{children:f(cn,{nomeBtn:"CANCELAR ORDER",func:u})}),n!=null?f(IR,{style:n===200?MR:null,children:n}):null,i!=null?f(jR,{style:i==="SUCESSO!"?zR:null,children:i}):null]}),e!=""&&f(Tv,{lista:e})]})},UR=g.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  @keyframes animationMoveImg {
    to {
      transform: translateY(5px);
    }
  }
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #aaa;
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 5px;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`,BR=g.div`
  width: 100vw;
  height: 1000px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(white 40%, #ffffffef);
`,VR=g.div`
  background-image: url("/img/5593055.jpg");
  background-size: 1000px;
  background-position: 500px;
`,HR=g.div`
  padding-top: 25px;
  padding-bottom: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(to right, #a840c2, 80%, #d751f8b9);
`,WR=g.p`
  font-size: 30px;
  font-weight: 600;
  color: white;
`,ZR=g.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`,jo=g.button`
  width: 120px;
  height: 25px;
  border: none;
  background-color: #737373;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
`,GR=g.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`,KR=g.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(white 30%, #ffffffef 100%);
`,QR=g.p`
  font-size: 20px;
  width: 500px;
  text-align: center;
  color: #494949eb;
  font-weight: 600;
  margin-bottom: 20px;
`,qR=g.div`
  width: 100%;
`,Io={backgroundColor:"#d36ad6",animation:"animationMoveImg 1s ease alternate infinite"},YR=()=>{const e=zs(),{tokens:t}=Et(s=>s.userReducer),[n,r]=$.useState("create"),i=Cn();$.useEffect(()=>{setTimeout(()=>{i(mP()),i(Rl("Login"))},6e5)},[]);const o=()=>{e("/CadastroLogin")};return f(UR,{children:(t==null?void 0:t.access_token)!=null?P(BR,{children:[f(VR,{children:f(HR,{children:f(WR,{children:"ADMIN AREA"})})}),P(ZR,{children:[f(jo,{style:n==="create"?Io:null,onClick:()=>{r("create")},children:"CREATE"}),f(jo,{style:n==="update"?Io:null,onClick:()=>{r("update")},children:"UPDATE"}),f(jo,{style:n==="delete"?Io:null,onClick:()=>{r("delete")},children:"DELETE"}),f(jo,{style:n==="List Order"?Io:null,onClick:()=>{r("List Order")},children:"LIST ORDER"}),f(jo,{style:n==="Cancel order"?Io:null,onClick:()=>{r("Cancel order")},children:"CANCEL ORDER"})]}),P(GR,{children:[n==="create"?f(qP,{}):null,n==="update"?f(oR,{}):null,n==="delete"?f(gR,{}):null,n==="List Order"?f(RR,{}):null,n==="Cancel order"?f(FR,{}):null]}),f(qR,{children:f(gu,{})})]}):P(KR,{children:[f(QR,{children:"Algo inesperado aconteceu, clique no botão abaixo para ser redirecionado ao site."}),f(cn,{nomeBtn:"VOLTAR",func:o})]})})},JR=g.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  background-image: url("/img/BG-site.jpg");
  background-size: 1000px;
  @keyframes animationMoveImg {
    to {
      transform: translateY(5px);
    }
  }
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #aaa;
  }
  ::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 5px;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`,XR=g.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background: linear-gradient(white 40%, #ffffffef);
`,eT=g.div`
  background-image: url("/img/5593055.jpg");
  background-size: 500px;
`,tT=g.div`
  padding-top: 25px;
  padding-bottom: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 1px solid #e2e2e2;
  background: linear-gradient(to right, #a840c2, 80%, #d751f8b9);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(10.3px);
  border: 1px solid rgba(114, 114, 114, 0.18);
`,nT=g.p`
  font-size: 30px;
  font-weight: 600;
  color: white;
`,rT=g.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
`,iT=g.div`
  width: 100%;
`,oT=g.div``,sT=g.div`
  display: flex;
  width: 60%;
  height: fit-content;
  padding-top: 30px;
  padding-bottom: 30px;
  align-items: center;
  justify-content: start;
  border-radius: 10px;
  background-color: #fafafa;
  box-shadow: 0px 2px 5px #e2e2e2;
  margin-top: 30px;
`,aT=g.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  align-items: center;
  gap: 20px;
`,lT=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`,uT=g.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  box-shadow: 0px 2px 5px #888888;
  margin-top: 10px;
`,cT=g.button`
  width: 150px;
  height: 40px;
  border: none;
  color: #be96c8;
  font-weight: 600;
  letter-spacing: 0.2px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`,dT=g.h4`
  font-size: 14px;
  letter-spacing: 1px;
  color: white;
`,fT=g.div`
  background-color: #f0f0f0;
  box-shadow: 0px 2px 5px #888888;
  border-radius: 10px;
`,pT=g.div`
  width: 100%;
  height: 30px;
  background-color: #c376d6;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`,hT=g.div`
  padding: 10px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 350px;
`,Hr=g.div`
  display: flex;
  gap: 10px;
  align-items: center;
`,Wr=g.label`
  font-size: 10px;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 1px;
  border-radius: 5px;
  background-color: #cbb1d1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`,Zr=g.p`
  font-size: 14px;
  font-weight: 600;
  color: #383838;
  letter-spacing: 0.5px;
`,mT=()=>{const[e,t]=$.useState(),{dataEntrega:n}=Et(r=>r.formReducer);return $.useEffect(()=>{const r="http://168.119.50.201:3001";Ut.get(`${r}/public/order?value=${n.email}&offset=0&limit=20`).then(i=>{console.log(i.data.data),t(i.data.data)},i=>{console.log(i)})},[]),console.log(n),f(JR,{children:P(XR,{children:[f(eT,{children:f(tT,{children:f(nT,{children:"PEDIDOS"})})}),P(rT,{children:[f(oT,{}),e==null?void 0:e.map(r=>P(sT,{children:[P(aT,{children:[f(uT,{src:r.product.image_url}),f(cT,{children:"CANCELAR PEDIDO"})]}),f(lT,{children:P(fT,{children:[f(pT,{children:f(dT,{children:"DADOS DE ENTREGA"})}),P(hT,{children:[P(Hr,{children:[f(Wr,{children:"PROD"}),P(Zr,{children:[r.product.name,"-",r.product.description]})]}),P(Hr,{children:[f(Wr,{children:"QUANT."}),f(Zr,{children:r.quantity})]}),P(Hr,{children:[f(Wr,{children:"TOTAL"}),f(Zr,{children:r.total})]}),P(Hr,{children:[f(Wr,{children:"ENDEREÇO"}),P(Zr,{children:[r.address.neighborhood,", ",r.address.street,",",r.address.number]})]}),P(Hr,{children:[f(Wr,{children:"PESSOA"}),f(Zr,{children:r.address.user.name})]}),P(Hr,{children:[f(Wr,{children:"CEP"}),f(Zr,{children:r.address.zip_code})]}),P(Hr,{children:[f(Wr,{children:"CÓDIGO DE RASTREAMENTO"}),f(Zr,{children:"000000000"})]})]})]})})]}))]}),f(iT,{children:f(gu,{})})]})})},gT=PS([{path:"/",element:f(xS,{}),children:[{path:"/",element:f(Ub,{})},{path:"/Checkout",element:f(pO,{})},{path:"/CadastroLogin",element:f($P,{})},{path:"/Admim",element:f(YR,{})},{path:"/Pedidos",element:f(mT,{})}]}]);_c.createRoot(document.getElementById("root")).render(f(jt.StrictMode,{children:f(Nk,{store:Pv,children:f(Rv,{loading:null,persistor:uP,children:f(vS,{router:gT})})})}));
