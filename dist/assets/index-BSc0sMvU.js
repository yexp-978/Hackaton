var lv=Object.defineProperty;var cv=(s,e,t)=>e in s?lv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var qe=(s,e,t)=>cv(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Vg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ju={exports:{}},ea={},eh={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function uv(){if(pm)return _t;pm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function x(N,ee,Ce){this.props=N,this.context=ee,this.refs=w,this.updater=Ce||S}x.prototype.isReactComponent={},x.prototype.setState=function(N,ee){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ee,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=x.prototype;function L(N,ee,Ce){this.props=N,this.context=ee,this.refs=w,this.updater=Ce||S}var P=L.prototype=new v;P.constructor=L,M(P,x.prototype),P.isPureReactComponent=!0;var T=Array.isArray,G=Object.prototype.hasOwnProperty,F={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function O(N,ee,Ce){var Q,de={},Ee=null,ye=null;if(ee!=null)for(Q in ee.ref!==void 0&&(ye=ee.ref),ee.key!==void 0&&(Ee=""+ee.key),ee)G.call(ee,Q)&&!U.hasOwnProperty(Q)&&(de[Q]=ee[Q]);var Re=arguments.length-2;if(Re===1)de.children=Ce;else if(1<Re){for(var Ue=Array(Re),nt=0;nt<Re;nt++)Ue[nt]=arguments[nt+2];de.children=Ue}if(N&&N.defaultProps)for(Q in Re=N.defaultProps,Re)de[Q]===void 0&&(de[Q]=Re[Q]);return{$$typeof:s,type:N,key:Ee,ref:ye,props:de,_owner:F.current}}function b(N,ee){return{$$typeof:s,type:N.type,key:ee,ref:N.ref,props:N.props,_owner:N._owner}}function C(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function k(N){var ee={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ce){return ee[Ce]})}var ne=/\/+/g;function j(N,ee){return typeof N=="object"&&N!==null&&N.key!=null?k(""+N.key):ee.toString(36)}function X(N,ee,Ce,Q,de){var Ee=typeof N;(Ee==="undefined"||Ee==="boolean")&&(N=null);var ye=!1;if(N===null)ye=!0;else switch(Ee){case"string":case"number":ye=!0;break;case"object":switch(N.$$typeof){case s:case e:ye=!0}}if(ye)return ye=N,de=de(ye),N=Q===""?"."+j(ye,0):Q,T(de)?(Ce="",N!=null&&(Ce=N.replace(ne,"$&/")+"/"),X(de,ee,Ce,"",function(nt){return nt})):de!=null&&(C(de)&&(de=b(de,Ce+(!de.key||ye&&ye.key===de.key?"":(""+de.key).replace(ne,"$&/")+"/")+N)),ee.push(de)),1;if(ye=0,Q=Q===""?".":Q+":",T(N))for(var Re=0;Re<N.length;Re++){Ee=N[Re];var Ue=Q+j(Ee,Re);ye+=X(Ee,ee,Ce,Ue,de)}else if(Ue=_(N),typeof Ue=="function")for(N=Ue.call(N),Re=0;!(Ee=N.next()).done;)Ee=Ee.value,Ue=Q+j(Ee,Re++),ye+=X(Ee,ee,Ce,Ue,de);else if(Ee==="object")throw ee=String(N),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return ye}function re(N,ee,Ce){if(N==null)return N;var Q=[],de=0;return X(N,Q,"","",function(Ee){return ee.call(Ce,Ee,de++)}),Q}function ce(N){if(N._status===-1){var ee=N._result;ee=ee(),ee.then(function(Ce){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ce)},function(Ce){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ce)}),N._status===-1&&(N._status=0,N._result=ee)}if(N._status===1)return N._result.default;throw N._result}var ue={current:null},V={transition:null},se={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:V,ReactCurrentOwner:F};function ie(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:re,forEach:function(N,ee,Ce){re(N,function(){ee.apply(this,arguments)},Ce)},count:function(N){var ee=0;return re(N,function(){ee++}),ee},toArray:function(N){return re(N,function(ee){return ee})||[]},only:function(N){if(!C(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},_t.Component=x,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=L,_t.StrictMode=r,_t.Suspense=f,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,_t.act=ie,_t.cloneElement=function(N,ee,Ce){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Q=M({},N.props),de=N.key,Ee=N.ref,ye=N._owner;if(ee!=null){if(ee.ref!==void 0&&(Ee=ee.ref,ye=F.current),ee.key!==void 0&&(de=""+ee.key),N.type&&N.type.defaultProps)var Re=N.type.defaultProps;for(Ue in ee)G.call(ee,Ue)&&!U.hasOwnProperty(Ue)&&(Q[Ue]=ee[Ue]===void 0&&Re!==void 0?Re[Ue]:ee[Ue])}var Ue=arguments.length-2;if(Ue===1)Q.children=Ce;else if(1<Ue){Re=Array(Ue);for(var nt=0;nt<Ue;nt++)Re[nt]=arguments[nt+2];Q.children=Re}return{$$typeof:s,type:N.type,key:de,ref:Ee,props:Q,_owner:ye}},_t.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},_t.createElement=O,_t.createFactory=function(N){var ee=O.bind(null,N);return ee.type=N,ee},_t.createRef=function(){return{current:null}},_t.forwardRef=function(N){return{$$typeof:h,render:N}},_t.isValidElement=C,_t.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:ce}},_t.memo=function(N,ee){return{$$typeof:p,type:N,compare:ee===void 0?null:ee}},_t.startTransition=function(N){var ee=V.transition;V.transition={};try{N()}finally{V.transition=ee}},_t.unstable_act=ie,_t.useCallback=function(N,ee){return ue.current.useCallback(N,ee)},_t.useContext=function(N){return ue.current.useContext(N)},_t.useDebugValue=function(){},_t.useDeferredValue=function(N){return ue.current.useDeferredValue(N)},_t.useEffect=function(N,ee){return ue.current.useEffect(N,ee)},_t.useId=function(){return ue.current.useId()},_t.useImperativeHandle=function(N,ee,Ce){return ue.current.useImperativeHandle(N,ee,Ce)},_t.useInsertionEffect=function(N,ee){return ue.current.useInsertionEffect(N,ee)},_t.useLayoutEffect=function(N,ee){return ue.current.useLayoutEffect(N,ee)},_t.useMemo=function(N,ee){return ue.current.useMemo(N,ee)},_t.useReducer=function(N,ee,Ce){return ue.current.useReducer(N,ee,Ce)},_t.useRef=function(N){return ue.current.useRef(N)},_t.useState=function(N){return ue.current.useState(N)},_t.useSyncExternalStore=function(N,ee,Ce){return ue.current.useSyncExternalStore(N,ee,Ce)},_t.useTransition=function(){return ue.current.useTransition()},_t.version="18.3.1",_t}var mm;function Rd(){return mm||(mm=1,eh.exports=uv()),eh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function hv(){if(gm)return ea;gm=1;var s=Rd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(h,f,p){var g,y={},_=null,S=null;p!==void 0&&(_=""+p),f.key!==void 0&&(_=""+f.key),f.ref!==void 0&&(S=f.ref);for(g in f)r.call(f,g)&&!l.hasOwnProperty(g)&&(y[g]=f[g]);if(h&&h.defaultProps)for(g in f=h.defaultProps,f)y[g]===void 0&&(y[g]=f[g]);return{$$typeof:e,type:h,key:_,ref:S,props:y,_owner:o.current}}return ea.Fragment=t,ea.jsx=u,ea.jsxs=u,ea}var _m;function dv(){return _m||(_m=1,Ju.exports=hv()),Ju.exports}var H=dv(),Dt=Rd();const fv=Vg(Dt);var wl={},th={exports:{}},Wn={},nh={exports:{}},ih={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function pv(){return vm||(vm=1,(function(s){function e(V,se){var ie=V.length;V.push(se);e:for(;0<ie;){var N=ie-1>>>1,ee=V[N];if(0<o(ee,se))V[N]=se,V[ie]=ee,ie=N;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var se=V[0],ie=V.pop();if(ie!==se){V[0]=ie;e:for(var N=0,ee=V.length,Ce=ee>>>1;N<Ce;){var Q=2*(N+1)-1,de=V[Q],Ee=Q+1,ye=V[Ee];if(0>o(de,ie))Ee<ee&&0>o(ye,de)?(V[N]=ye,V[Ee]=ie,N=Ee):(V[N]=de,V[Q]=ie,N=Q);else if(Ee<ee&&0>o(ye,ie))V[N]=ye,V[Ee]=ie,N=Ee;else break e}}return se}function o(V,se){var ie=V.sortIndex-se.sortIndex;return ie!==0?ie:V.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var f=[],p=[],g=1,y=null,_=3,S=!1,M=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(V){for(var se=t(p);se!==null;){if(se.callback===null)r(p);else if(se.startTime<=V)r(p),se.sortIndex=se.expirationTime,e(f,se);else break;se=t(p)}}function T(V){if(w=!1,P(V),!M)if(t(f)!==null)M=!0,ce(G);else{var se=t(p);se!==null&&ue(T,se.startTime-V)}}function G(V,se){M=!1,w&&(w=!1,v(O),O=-1),S=!0;var ie=_;try{for(P(se),y=t(f);y!==null&&(!(y.expirationTime>se)||V&&!k());){var N=y.callback;if(typeof N=="function"){y.callback=null,_=y.priorityLevel;var ee=N(y.expirationTime<=se);se=s.unstable_now(),typeof ee=="function"?y.callback=ee:y===t(f)&&r(f),P(se)}else r(f);y=t(f)}if(y!==null)var Ce=!0;else{var Q=t(p);Q!==null&&ue(T,Q.startTime-se),Ce=!1}return Ce}finally{y=null,_=ie,S=!1}}var F=!1,U=null,O=-1,b=5,C=-1;function k(){return!(s.unstable_now()-C<b)}function ne(){if(U!==null){var V=s.unstable_now();C=V;var se=!0;try{se=U(!0,V)}finally{se?j():(F=!1,U=null)}}else F=!1}var j;if(typeof L=="function")j=function(){L(ne)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,re=X.port2;X.port1.onmessage=ne,j=function(){re.postMessage(null)}}else j=function(){x(ne,0)};function ce(V){U=V,F||(F=!0,j())}function ue(V,se){O=x(function(){V(s.unstable_now())},se)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,ce(G))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(V){switch(_){case 1:case 2:case 3:var se=3;break;default:se=_}var ie=_;_=se;try{return V()}finally{_=ie}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,se){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var ie=_;_=V;try{return se()}finally{_=ie}},s.unstable_scheduleCallback=function(V,se,ie){var N=s.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?N+ie:N):ie=N,V){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=ie+ee,V={id:g++,callback:se,priorityLevel:V,startTime:ie,expirationTime:ee,sortIndex:-1},ie>N?(V.sortIndex=ie,e(p,V),t(f)===null&&V===t(p)&&(w?(v(O),O=-1):w=!0,ue(T,ie-N))):(V.sortIndex=ee,e(f,V),M||S||(M=!0,ce(G))),V},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(V){var se=_;return function(){var ie=_;_=se;try{return V.apply(this,arguments)}finally{_=ie}}}})(ih)),ih}var ym;function mv(){return ym||(ym=1,nh.exports=pv()),nh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function gv(){if(xm)return Wn;xm=1;var s=Rd(),e=mv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function _(n){return f.call(y,n)?!0:f.call(g,n)?!1:p.test(n)?y[n]=!0:(g[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,a,c,d,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,L);x[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,L);x[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,L);x[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,c){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,d,c)&&(a=null),c||d===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var T=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),k=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),V=Symbol.iterator;function se(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,N;function ee(n){if(N===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var Ce=!1;function Q(n,i){if(!n||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(oe){var c=oe}Reflect.construct(n,[],i)}else{try{i.call()}catch(oe){c=oe}n.call(i.prototype)}else{try{throw Error()}catch(oe){c=oe}n()}}catch(oe){if(oe&&c&&typeof oe.stack=="string"){for(var d=oe.stack.split(`
`),m=c.stack.split(`
`),E=d.length-1,I=m.length-1;1<=E&&0<=I&&d[E]!==m[I];)I--;for(;1<=E&&0<=I;E--,I--)if(d[E]!==m[I]){if(E!==1||I!==1)do if(E--,I--,0>I||d[E]!==m[I]){var B=`
`+d[E].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=E&&0<=I);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ee(n):""}function de(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case F:return"Portal";case b:return"Profiler";case O:return"StrictMode";case j:return"Suspense";case X:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case k:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case ne:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case re:return i=n.displayName||null,i!==null?i:Ee(n.type)||"Memo";case ce:i=n._payload,n=n._init;try{return Ee(n(i))}catch{}}return null}function ye(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===O?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function nt(n){var i=Ue(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){c=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ut(n){n._valueTracker||(n._valueTracker=nt(n))}function yt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ue(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Ht(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function K(n,i){var a=i.checked;return ie({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Rn(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Re(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function vt(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function mt(n,i){vt(n,i);var a=Re(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Pt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Pt(n,i.type,Re(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Je(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Pt(n,i,a){(i!=="number"||Ht(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ze=Array.isArray;function D(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Re(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function A(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function te(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ze(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Re(a)}}function me(n,i){var a=Re(i.value),c=Re(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function _e(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function fe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?fe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var be,Fe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=be.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function pt(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(n){ke.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Se[i]=Se[n]})});function it(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Se.hasOwnProperty(n)&&Se[n]?(""+i).trim():i+"px"}function rt(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=it(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Be=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gt(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ct(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function Y(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pe=null,he=null,pe=null;function Ne(n){if(n=Bo(n)){if(typeof Pe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ba(i),Pe(n.stateNode,n.type,i))}}function De(n){he?pe?pe.push(n):pe=[n]:he=n}function ut(){if(he){var n=he,i=pe;if(pe=he=null,Ne(n),i)for(n=0;n<i.length;n++)Ne(i[n])}}function Wt(n,i){return n(i)}function tn(){}var Mt=!1;function On(n,i,a){if(Mt)return n(i,a);Mt=!0;try{return Wt(n,i,a)}finally{Mt=!1,(he!==null||pe!==null)&&(tn(),ut())}}function bn(n,i){var a=n.stateNode;if(a===null)return null;var c=Ba(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var gs=!1;if(h)try{var or={};Object.defineProperty(or,"passive",{get:function(){gs=!0}}),window.addEventListener("test",or,or),window.removeEventListener("test",or,or)}catch{gs=!1}function ki(n,i,a,c,d,m,E,I,B){var oe=Array.prototype.slice.call(arguments,3);try{i.apply(a,oe)}catch(ve){this.onError(ve)}}var Bi=!1,Hr=null,Vr=!1,ar=null,ya={onError:function(n){Bi=!0,Hr=n}};function _s(n,i,a,c,d,m,E,I,B){Bi=!1,Hr=null,ki.apply(ya,arguments)}function xa(n,i,a,c,d,m,E,I,B){if(_s.apply(this,arguments),Bi){if(Bi){var oe=Hr;Bi=!1,Hr=null}else throw Error(t(198));Vr||(Vr=!0,ar=oe)}}function Ri(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Sa(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ma(n){if(Ri(n)!==n)throw Error(t(188))}function Sc(n){var i=n.alternate;if(!i){if(i=Ri(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Ma(d),n;if(m===c)return Ma(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var E=!1,I=d.child;I;){if(I===a){E=!0,a=d,c=m;break}if(I===c){E=!0,c=d,a=m;break}I=I.sibling}if(!E){for(I=m.child;I;){if(I===a){E=!0,a=m,c=d;break}if(I===c){E=!0,c=m,a=d;break}I=I.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function R(n){return n=Sc(n),n!==null?q(n):null}function q(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=q(n);if(i!==null)return i;n=n.sibling}return null}var ae=e.unstable_scheduleCallback,le=e.unstable_cancelCallback,$=e.unstable_shouldYield,Ae=e.unstable_requestPaint,Me=e.unstable_now,Xe=e.unstable_getCurrentPriorityLevel,He=e.unstable_ImmediatePriority,st=e.unstable_UserBlockingPriority,at=e.unstable_NormalPriority,je=e.unstable_LowPriority,St=e.unstable_IdlePriority,Rt=null,xt=null;function xn(n){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:At,$e=Math.log,fi=Math.LN2;function At(n){return n>>>=0,n===0?32:31-($e(n)/fi|0)|0}var Sn=64,pi=4194304;function nn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function bi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,E=a&268435455;if(E!==0){var I=E&~d;I!==0?c=nn(I):(m&=E,m!==0&&(c=nn(m)))}else E=a&~d,E!==0?c=nn(E):m!==0&&(c=nn(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-ht(i),d=1<<a,c|=n[a],i&=~d;return c}function Bt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ni(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-ht(m),I=1<<E,B=d[E];B===-1?((I&a)===0||(I&c)!==0)&&(d[E]=Bt(I,i)):B<=i&&(n.expiredLanes|=I),m&=~I}}function zi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Pn(){var n=Sn;return Sn<<=1,(Sn&4194240)===0&&(Sn=64),n}function ii(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function kn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ht(i),n[i]=a}function Ea(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-ht(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Mc(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-ht(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Lt=0;function Xd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var jd,Ec,Yd,qd,$d,wc=!1,wa=[],lr=null,cr=null,ur=null,Eo=new Map,wo=new Map,hr=[],P0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kd(n,i){switch(n){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":Eo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(i.pointerId)}}function To(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Bo(i),i!==null&&Ec(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function L0(n,i,a,c,d){switch(i){case"focusin":return lr=To(lr,n,i,a,c,d),!0;case"dragenter":return cr=To(cr,n,i,a,c,d),!0;case"mouseover":return ur=To(ur,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Eo.set(m,To(Eo.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,wo.set(m,To(wo.get(m)||null,n,i,a,c,d)),!0}return!1}function Zd(n){var i=Gr(n.target);if(i!==null){var a=Ri(i);if(a!==null){if(i=a.tag,i===13){if(i=Sa(a),i!==null){n.blockedOn=i,$d(n.priority,function(){Yd(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ta(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ac(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);bt=c,a.target.dispatchEvent(c),bt=null}else return i=Bo(a),i!==null&&Ec(i),n.blockedOn=a,!1;i.shift()}return!0}function Qd(n,i,a){Ta(n)&&a.delete(i)}function D0(){wc=!1,lr!==null&&Ta(lr)&&(lr=null),cr!==null&&Ta(cr)&&(cr=null),ur!==null&&Ta(ur)&&(ur=null),Eo.forEach(Qd),wo.forEach(Qd)}function Ao(n,i){n.blockedOn===i&&(n.blockedOn=null,wc||(wc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,D0)))}function Co(n){function i(d){return Ao(d,n)}if(0<wa.length){Ao(wa[0],n);for(var a=1;a<wa.length;a++){var c=wa[a];c.blockedOn===n&&(c.blockedOn=null)}}for(lr!==null&&Ao(lr,n),cr!==null&&Ao(cr,n),ur!==null&&Ao(ur,n),Eo.forEach(i),wo.forEach(i),a=0;a<hr.length;a++)c=hr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<hr.length&&(a=hr[0],a.blockedOn===null);)Zd(a),a.blockedOn===null&&hr.shift()}var vs=T.ReactCurrentBatchConfig,Aa=!0;function N0(n,i,a,c){var d=Lt,m=vs.transition;vs.transition=null;try{Lt=1,Tc(n,i,a,c)}finally{Lt=d,vs.transition=m}}function I0(n,i,a,c){var d=Lt,m=vs.transition;vs.transition=null;try{Lt=4,Tc(n,i,a,c)}finally{Lt=d,vs.transition=m}}function Tc(n,i,a,c){if(Aa){var d=Ac(n,i,a,c);if(d===null)Gc(n,i,c,Ca,a),Kd(n,c);else if(L0(d,n,i,a,c))c.stopPropagation();else if(Kd(n,c),i&4&&-1<P0.indexOf(n)){for(;d!==null;){var m=Bo(d);if(m!==null&&jd(m),m=Ac(n,i,a,c),m===null&&Gc(n,i,c,Ca,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Gc(n,i,c,null,a)}}var Ca=null;function Ac(n,i,a,c){if(Ca=null,n=Y(c),n=Gr(n),n!==null)if(i=Ri(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Sa(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ca=n,null}function Jd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case He:return 1;case st:return 4;case at:case je:return 16;case St:return 536870912;default:return 16}default:return 16}}var dr=null,Cc=null,Ra=null;function ef(){if(Ra)return Ra;var n,i=Cc,a=i.length,c,d="value"in dr?dr.value:dr.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var E=a-n;for(c=1;c<=E&&i[a-c]===d[m-c];c++);return Ra=d.slice(n,1<c?1-c:void 0)}function ba(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Pa(){return!0}function tf(){return!1}function $n(n){function i(a,c,d,m,E){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Pa:tf,this.isPropagationStopped=tf,this}return ie(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Pa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Pa)},persist:function(){},isPersistent:Pa}),i}var ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rc=$n(ys),Ro=ie({},ys,{view:0,detail:0}),U0=$n(Ro),bc,Pc,bo,La=ie({},Ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==bo&&(bo&&n.type==="mousemove"?(bc=n.screenX-bo.screenX,Pc=n.screenY-bo.screenY):Pc=bc=0,bo=n),bc)},movementY:function(n){return"movementY"in n?n.movementY:Pc}}),nf=$n(La),F0=ie({},La,{dataTransfer:0}),O0=$n(F0),k0=ie({},Ro,{relatedTarget:0}),Lc=$n(k0),B0=ie({},ys,{animationName:0,elapsedTime:0,pseudoElement:0}),z0=$n(B0),H0=ie({},ys,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),V0=$n(H0),G0=ie({},ys,{data:0}),rf=$n(G0),W0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},X0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=j0[n])?!!i[n]:!1}function Dc(){return Y0}var q0=ie({},Ro,{key:function(n){if(n.key){var i=W0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ba(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?X0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dc,charCode:function(n){return n.type==="keypress"?ba(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ba(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$0=$n(q0),K0=ie({},La,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sf=$n(K0),Z0=ie({},Ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dc}),Q0=$n(Z0),J0=ie({},ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),e_=$n(J0),t_=ie({},La,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),n_=$n(t_),i_=[9,13,27,32],Nc=h&&"CompositionEvent"in window,Po=null;h&&"documentMode"in document&&(Po=document.documentMode);var r_=h&&"TextEvent"in window&&!Po,of=h&&(!Nc||Po&&8<Po&&11>=Po),af=" ",lf=!1;function cf(n,i){switch(n){case"keyup":return i_.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xs=!1;function s_(n,i){switch(n){case"compositionend":return uf(i);case"keypress":return i.which!==32?null:(lf=!0,af);case"textInput":return n=i.data,n===af&&lf?null:n;default:return null}}function o_(n,i){if(xs)return n==="compositionend"||!Nc&&cf(n,i)?(n=ef(),Ra=Cc=dr=null,xs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return of&&i.locale!=="ko"?null:i.data;default:return null}}var a_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!a_[n.type]:i==="textarea"}function df(n,i,a,c){De(c),i=Fa(i,"onChange"),0<i.length&&(a=new Rc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Lo=null,Do=null;function l_(n){Pf(n,0)}function Da(n){var i=Ts(n);if(yt(i))return n}function c_(n,i){if(n==="change")return i}var ff=!1;if(h){var Ic;if(h){var Uc="oninput"in document;if(!Uc){var pf=document.createElement("div");pf.setAttribute("oninput","return;"),Uc=typeof pf.oninput=="function"}Ic=Uc}else Ic=!1;ff=Ic&&(!document.documentMode||9<document.documentMode)}function mf(){Lo&&(Lo.detachEvent("onpropertychange",gf),Do=Lo=null)}function gf(n){if(n.propertyName==="value"&&Da(Do)){var i=[];df(i,Do,n,Y(n)),On(l_,i)}}function u_(n,i,a){n==="focusin"?(mf(),Lo=i,Do=a,Lo.attachEvent("onpropertychange",gf)):n==="focusout"&&mf()}function h_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Da(Do)}function d_(n,i){if(n==="click")return Da(i)}function f_(n,i){if(n==="input"||n==="change")return Da(i)}function p_(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var mi=typeof Object.is=="function"?Object.is:p_;function No(n,i){if(mi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!f.call(i,d)||!mi(n[d],i[d]))return!1}return!0}function _f(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function vf(n,i){var a=_f(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_f(a)}}function yf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?yf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function xf(){for(var n=window,i=Ht();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ht(n.document)}return i}function Fc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function m_(n){var i=xf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&yf(a.ownerDocument.documentElement,a)){if(c!==null&&Fc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=vf(a,m);var E=vf(a,c);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var g_=h&&"documentMode"in document&&11>=document.documentMode,Ss=null,Oc=null,Io=null,kc=!1;function Sf(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;kc||Ss==null||Ss!==Ht(c)||(c=Ss,"selectionStart"in c&&Fc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Io&&No(Io,c)||(Io=c,c=Fa(Oc,"onSelect"),0<c.length&&(i=new Rc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ss)))}function Na(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ms={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},Bc={},Mf={};h&&(Mf=document.createElement("div").style,"AnimationEvent"in window||(delete Ms.animationend.animation,delete Ms.animationiteration.animation,delete Ms.animationstart.animation),"TransitionEvent"in window||delete Ms.transitionend.transition);function Ia(n){if(Bc[n])return Bc[n];if(!Ms[n])return n;var i=Ms[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Mf)return Bc[n]=i[a];return n}var Ef=Ia("animationend"),wf=Ia("animationiteration"),Tf=Ia("animationstart"),Af=Ia("transitionend"),Cf=new Map,Rf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(n,i){Cf.set(n,i),l(i,[n])}for(var zc=0;zc<Rf.length;zc++){var Hc=Rf[zc],__=Hc.toLowerCase(),v_=Hc[0].toUpperCase()+Hc.slice(1);fr(__,"on"+v_)}fr(Ef,"onAnimationEnd"),fr(wf,"onAnimationIteration"),fr(Tf,"onAnimationStart"),fr("dblclick","onDoubleClick"),fr("focusin","onFocus"),fr("focusout","onBlur"),fr(Af,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Uo));function bf(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,xa(c,i,void 0,n),n.currentTarget=null}function Pf(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var E=c.length-1;0<=E;E--){var I=c[E],B=I.instance,oe=I.currentTarget;if(I=I.listener,B!==m&&d.isPropagationStopped())break e;bf(d,I,oe),m=B}else for(E=0;E<c.length;E++){if(I=c[E],B=I.instance,oe=I.currentTarget,I=I.listener,B!==m&&d.isPropagationStopped())break e;bf(d,I,oe),m=B}}}if(Vr)throw n=ar,Vr=!1,ar=null,n}function Xt(n,i){var a=i[$c];a===void 0&&(a=i[$c]=new Set);var c=n+"__bubble";a.has(c)||(Lf(i,n,2,!1),a.add(c))}function Vc(n,i,a){var c=0;i&&(c|=4),Lf(a,n,c,i)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function Fo(n){if(!n[Ua]){n[Ua]=!0,r.forEach(function(a){a!=="selectionchange"&&(y_.has(a)||Vc(a,!1,n),Vc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ua]||(i[Ua]=!0,Vc("selectionchange",!1,i))}}function Lf(n,i,a,c){switch(Jd(i)){case 1:var d=N0;break;case 4:d=I0;break;default:d=Tc}a=d.bind(null,i,a,n),d=void 0,!gs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Gc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(E===4)for(E=c.return;E!==null;){var B=E.tag;if((B===3||B===4)&&(B=E.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;E=E.return}for(;I!==null;){if(E=Gr(I),E===null)return;if(B=E.tag,B===5||B===6){c=m=E;continue e}I=I.parentNode}}c=c.return}On(function(){var oe=m,ve=Y(a),xe=[];e:{var ge=Cf.get(n);if(ge!==void 0){var Ie=Rc,ze=n;switch(n){case"keypress":if(ba(a)===0)break e;case"keydown":case"keyup":Ie=$0;break;case"focusin":ze="focus",Ie=Lc;break;case"focusout":ze="blur",Ie=Lc;break;case"beforeblur":case"afterblur":Ie=Lc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=O0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=Q0;break;case Ef:case wf:case Tf:Ie=z0;break;case Af:Ie=e_;break;case"scroll":Ie=U0;break;case"wheel":Ie=n_;break;case"copy":case"cut":case"paste":Ie=V0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=sf}var Ve=(i&4)!==0,Qt=!Ve&&n==="scroll",Z=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var W=oe,J;W!==null;){J=W;var Te=J.stateNode;if(J.tag===5&&Te!==null&&(J=Te,Z!==null&&(Te=bn(W,Z),Te!=null&&Ve.push(Oo(W,Te,J)))),Qt)break;W=W.return}0<Ve.length&&(ge=new Ie(ge,ze,null,a,ve),xe.push({event:ge,listeners:Ve}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",ge&&a!==bt&&(ze=a.relatedTarget||a.fromElement)&&(Gr(ze)||ze[Hi]))break e;if((Ie||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(ze=a.relatedTarget||a.toElement,Ie=oe,ze=ze?Gr(ze):null,ze!==null&&(Qt=Ri(ze),ze!==Qt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ie=null,ze=oe),Ie!==ze)){if(Ve=nf,Te="onMouseLeave",Z="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ve=sf,Te="onPointerLeave",Z="onPointerEnter",W="pointer"),Qt=Ie==null?ge:Ts(Ie),J=ze==null?ge:Ts(ze),ge=new Ve(Te,W+"leave",Ie,a,ve),ge.target=Qt,ge.relatedTarget=J,Te=null,Gr(ve)===oe&&(Ve=new Ve(Z,W+"enter",ze,a,ve),Ve.target=J,Ve.relatedTarget=Qt,Te=Ve),Qt=Te,Ie&&ze)t:{for(Ve=Ie,Z=ze,W=0,J=Ve;J;J=Es(J))W++;for(J=0,Te=Z;Te;Te=Es(Te))J++;for(;0<W-J;)Ve=Es(Ve),W--;for(;0<J-W;)Z=Es(Z),J--;for(;W--;){if(Ve===Z||Z!==null&&Ve===Z.alternate)break t;Ve=Es(Ve),Z=Es(Z)}Ve=null}else Ve=null;Ie!==null&&Df(xe,ge,Ie,Ve,!1),ze!==null&&Qt!==null&&Df(xe,Qt,ze,Ve,!0)}}e:{if(ge=oe?Ts(oe):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var Ye=c_;else if(hf(ge))if(ff)Ye=f_;else{Ye=h_;var et=u_}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ye=d_);if(Ye&&(Ye=Ye(n,oe))){df(xe,Ye,a,ve);break e}et&&et(n,ge,oe),n==="focusout"&&(et=ge._wrapperState)&&et.controlled&&ge.type==="number"&&Pt(ge,"number",ge.value)}switch(et=oe?Ts(oe):window,n){case"focusin":(hf(et)||et.contentEditable==="true")&&(Ss=et,Oc=oe,Io=null);break;case"focusout":Io=Oc=Ss=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,Sf(xe,a,ve);break;case"selectionchange":if(g_)break;case"keydown":case"keyup":Sf(xe,a,ve)}var tt;if(Nc)e:{switch(n){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else xs?cf(n,a)&&(ot="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ot="onCompositionStart");ot&&(of&&a.locale!=="ko"&&(xs||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&xs&&(tt=ef()):(dr=ve,Cc="value"in dr?dr.value:dr.textContent,xs=!0)),et=Fa(oe,ot),0<et.length&&(ot=new rf(ot,n,null,a,ve),xe.push({event:ot,listeners:et}),tt?ot.data=tt:(tt=uf(a),tt!==null&&(ot.data=tt)))),(tt=r_?s_(n,a):o_(n,a))&&(oe=Fa(oe,"onBeforeInput"),0<oe.length&&(ve=new rf("onBeforeInput","beforeinput",null,a,ve),xe.push({event:ve,listeners:oe}),ve.data=tt))}Pf(xe,i)})}function Oo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Fa(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=bn(n,a),m!=null&&c.unshift(Oo(n,m,d)),m=bn(n,i),m!=null&&c.push(Oo(n,m,d))),n=n.return}return c}function Es(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Df(n,i,a,c,d){for(var m=i._reactName,E=[];a!==null&&a!==c;){var I=a,B=I.alternate,oe=I.stateNode;if(B!==null&&B===c)break;I.tag===5&&oe!==null&&(I=oe,d?(B=bn(a,m),B!=null&&E.unshift(Oo(a,B,I))):d||(B=bn(a,m),B!=null&&E.push(Oo(a,B,I)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var x_=/\r\n?/g,S_=/\u0000|\uFFFD/g;function Nf(n){return(typeof n=="string"?n:""+n).replace(x_,`
`).replace(S_,"")}function Oa(n,i,a){if(i=Nf(i),Nf(n)!==i&&a)throw Error(t(425))}function ka(){}var Wc=null,Xc=null;function jc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Yc=typeof setTimeout=="function"?setTimeout:void 0,M_=typeof clearTimeout=="function"?clearTimeout:void 0,If=typeof Promise=="function"?Promise:void 0,E_=typeof queueMicrotask=="function"?queueMicrotask:typeof If<"u"?function(n){return If.resolve(null).then(n).catch(w_)}:Yc;function w_(n){setTimeout(function(){throw n})}function qc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Co(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Co(i)}function pr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Uf(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ws=Math.random().toString(36).slice(2),Pi="__reactFiber$"+ws,ko="__reactProps$"+ws,Hi="__reactContainer$"+ws,$c="__reactEvents$"+ws,T_="__reactListeners$"+ws,A_="__reactHandles$"+ws;function Gr(n){var i=n[Pi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Hi]||a[Pi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Uf(n);n!==null;){if(a=n[Pi])return a;n=Uf(n)}return i}n=a,a=n.parentNode}return null}function Bo(n){return n=n[Pi]||n[Hi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ts(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ba(n){return n[ko]||null}var Kc=[],As=-1;function mr(n){return{current:n}}function jt(n){0>As||(n.current=Kc[As],Kc[As]=null,As--)}function Vt(n,i){As++,Kc[As]=n.current,n.current=i}var gr={},Mn=mr(gr),Bn=mr(!1),Wr=gr;function Cs(n,i){var a=n.type.contextTypes;if(!a)return gr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function zn(n){return n=n.childContextTypes,n!=null}function za(){jt(Bn),jt(Mn)}function Ff(n,i,a){if(Mn.current!==gr)throw Error(t(168));Vt(Mn,i),Vt(Bn,a)}function Of(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,ye(n)||"Unknown",d));return ie({},a,c)}function Ha(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gr,Wr=Mn.current,Vt(Mn,n),Vt(Bn,Bn.current),!0}function kf(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Of(n,i,Wr),c.__reactInternalMemoizedMergedChildContext=n,jt(Bn),jt(Mn),Vt(Mn,n)):jt(Bn),Vt(Bn,a)}var Vi=null,Va=!1,Zc=!1;function Bf(n){Vi===null?Vi=[n]:Vi.push(n)}function C_(n){Va=!0,Bf(n)}function _r(){if(!Zc&&Vi!==null){Zc=!0;var n=0,i=Lt;try{var a=Vi;for(Lt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Vi=null,Va=!1}catch(d){throw Vi!==null&&(Vi=Vi.slice(n+1)),ae(He,_r),d}finally{Lt=i,Zc=!1}}return null}var Rs=[],bs=0,Ga=null,Wa=0,ri=[],si=0,Xr=null,Gi=1,Wi="";function jr(n,i){Rs[bs++]=Wa,Rs[bs++]=Ga,Ga=n,Wa=i}function zf(n,i,a){ri[si++]=Gi,ri[si++]=Wi,ri[si++]=Xr,Xr=n;var c=Gi;n=Wi;var d=32-ht(c)-1;c&=~(1<<d),a+=1;var m=32-ht(i)+d;if(30<m){var E=d-d%5;m=(c&(1<<E)-1).toString(32),c>>=E,d-=E,Gi=1<<32-ht(i)+d|a<<d|c,Wi=m+n}else Gi=1<<m|a<<d|c,Wi=n}function Qc(n){n.return!==null&&(jr(n,1),zf(n,1,0))}function Jc(n){for(;n===Ga;)Ga=Rs[--bs],Rs[bs]=null,Wa=Rs[--bs],Rs[bs]=null;for(;n===Xr;)Xr=ri[--si],ri[si]=null,Wi=ri[--si],ri[si]=null,Gi=ri[--si],ri[si]=null}var Kn=null,Zn=null,Yt=!1,gi=null;function Hf(n,i){var a=ci(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Vf(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Kn=n,Zn=pr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Kn=n,Zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Xr!==null?{id:Gi,overflow:Wi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ci(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Kn=n,Zn=null,!0):!1;default:return!1}}function eu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function tu(n){if(Yt){var i=Zn;if(i){var a=i;if(!Vf(n,i)){if(eu(n))throw Error(t(418));i=pr(a.nextSibling);var c=Kn;i&&Vf(n,i)?Hf(c,a):(n.flags=n.flags&-4097|2,Yt=!1,Kn=n)}}else{if(eu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Yt=!1,Kn=n}}}function Gf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Kn=n}function Xa(n){if(n!==Kn)return!1;if(!Yt)return Gf(n),Yt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!jc(n.type,n.memoizedProps)),i&&(i=Zn)){if(eu(n))throw Wf(),Error(t(418));for(;i;)Hf(n,i),i=pr(i.nextSibling)}if(Gf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Zn=pr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Zn=null}}else Zn=Kn?pr(n.stateNode.nextSibling):null;return!0}function Wf(){for(var n=Zn;n;)n=pr(n.nextSibling)}function Ps(){Zn=Kn=null,Yt=!1}function nu(n){gi===null?gi=[n]:gi.push(n)}var R_=T.ReactCurrentBatchConfig;function zo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var I=d.refs;E===null?delete I[m]:I[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ja(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Xf(n){var i=n._init;return i(n._payload)}function jf(n){function i(Z,W){if(n){var J=Z.deletions;J===null?(Z.deletions=[W],Z.flags|=16):J.push(W)}}function a(Z,W){if(!n)return null;for(;W!==null;)i(Z,W),W=W.sibling;return null}function c(Z,W){for(Z=new Map;W!==null;)W.key!==null?Z.set(W.key,W):Z.set(W.index,W),W=W.sibling;return Z}function d(Z,W){return Z=Tr(Z,W),Z.index=0,Z.sibling=null,Z}function m(Z,W,J){return Z.index=J,n?(J=Z.alternate,J!==null?(J=J.index,J<W?(Z.flags|=2,W):J):(Z.flags|=2,W)):(Z.flags|=1048576,W)}function E(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function I(Z,W,J,Te){return W===null||W.tag!==6?(W=Yu(J,Z.mode,Te),W.return=Z,W):(W=d(W,J),W.return=Z,W)}function B(Z,W,J,Te){var Ye=J.type;return Ye===U?ve(Z,W,J.props.children,Te,J.key):W!==null&&(W.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ce&&Xf(Ye)===W.type)?(Te=d(W,J.props),Te.ref=zo(Z,W,J),Te.return=Z,Te):(Te=gl(J.type,J.key,J.props,null,Z.mode,Te),Te.ref=zo(Z,W,J),Te.return=Z,Te)}function oe(Z,W,J,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==J.containerInfo||W.stateNode.implementation!==J.implementation?(W=qu(J,Z.mode,Te),W.return=Z,W):(W=d(W,J.children||[]),W.return=Z,W)}function ve(Z,W,J,Te,Ye){return W===null||W.tag!==7?(W=es(J,Z.mode,Te,Ye),W.return=Z,W):(W=d(W,J),W.return=Z,W)}function xe(Z,W,J){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Yu(""+W,Z.mode,J),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case G:return J=gl(W.type,W.key,W.props,null,Z.mode,J),J.ref=zo(Z,null,W),J.return=Z,J;case F:return W=qu(W,Z.mode,J),W.return=Z,W;case ce:var Te=W._init;return xe(Z,Te(W._payload),J)}if(Ze(W)||se(W))return W=es(W,Z.mode,J,null),W.return=Z,W;ja(Z,W)}return null}function ge(Z,W,J,Te){var Ye=W!==null?W.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return Ye!==null?null:I(Z,W,""+J,Te);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case G:return J.key===Ye?B(Z,W,J,Te):null;case F:return J.key===Ye?oe(Z,W,J,Te):null;case ce:return Ye=J._init,ge(Z,W,Ye(J._payload),Te)}if(Ze(J)||se(J))return Ye!==null?null:ve(Z,W,J,Te,null);ja(Z,J)}return null}function Ie(Z,W,J,Te,Ye){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Z=Z.get(J)||null,I(W,Z,""+Te,Ye);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case G:return Z=Z.get(Te.key===null?J:Te.key)||null,B(W,Z,Te,Ye);case F:return Z=Z.get(Te.key===null?J:Te.key)||null,oe(W,Z,Te,Ye);case ce:var et=Te._init;return Ie(Z,W,J,et(Te._payload),Ye)}if(Ze(Te)||se(Te))return Z=Z.get(J)||null,ve(W,Z,Te,Ye,null);ja(W,Te)}return null}function ze(Z,W,J,Te){for(var Ye=null,et=null,tt=W,ot=W=0,hn=null;tt!==null&&ot<J.length;ot++){tt.index>ot?(hn=tt,tt=null):hn=tt.sibling;var Ct=ge(Z,tt,J[ot],Te);if(Ct===null){tt===null&&(tt=hn);break}n&&tt&&Ct.alternate===null&&i(Z,tt),W=m(Ct,W,ot),et===null?Ye=Ct:et.sibling=Ct,et=Ct,tt=hn}if(ot===J.length)return a(Z,tt),Yt&&jr(Z,ot),Ye;if(tt===null){for(;ot<J.length;ot++)tt=xe(Z,J[ot],Te),tt!==null&&(W=m(tt,W,ot),et===null?Ye=tt:et.sibling=tt,et=tt);return Yt&&jr(Z,ot),Ye}for(tt=c(Z,tt);ot<J.length;ot++)hn=Ie(tt,Z,ot,J[ot],Te),hn!==null&&(n&&hn.alternate!==null&&tt.delete(hn.key===null?ot:hn.key),W=m(hn,W,ot),et===null?Ye=hn:et.sibling=hn,et=hn);return n&&tt.forEach(function(Ar){return i(Z,Ar)}),Yt&&jr(Z,ot),Ye}function Ve(Z,W,J,Te){var Ye=se(J);if(typeof Ye!="function")throw Error(t(150));if(J=Ye.call(J),J==null)throw Error(t(151));for(var et=Ye=null,tt=W,ot=W=0,hn=null,Ct=J.next();tt!==null&&!Ct.done;ot++,Ct=J.next()){tt.index>ot?(hn=tt,tt=null):hn=tt.sibling;var Ar=ge(Z,tt,Ct.value,Te);if(Ar===null){tt===null&&(tt=hn);break}n&&tt&&Ar.alternate===null&&i(Z,tt),W=m(Ar,W,ot),et===null?Ye=Ar:et.sibling=Ar,et=Ar,tt=hn}if(Ct.done)return a(Z,tt),Yt&&jr(Z,ot),Ye;if(tt===null){for(;!Ct.done;ot++,Ct=J.next())Ct=xe(Z,Ct.value,Te),Ct!==null&&(W=m(Ct,W,ot),et===null?Ye=Ct:et.sibling=Ct,et=Ct);return Yt&&jr(Z,ot),Ye}for(tt=c(Z,tt);!Ct.done;ot++,Ct=J.next())Ct=Ie(tt,Z,ot,Ct.value,Te),Ct!==null&&(n&&Ct.alternate!==null&&tt.delete(Ct.key===null?ot:Ct.key),W=m(Ct,W,ot),et===null?Ye=Ct:et.sibling=Ct,et=Ct);return n&&tt.forEach(function(av){return i(Z,av)}),Yt&&jr(Z,ot),Ye}function Qt(Z,W,J,Te){if(typeof J=="object"&&J!==null&&J.type===U&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case G:e:{for(var Ye=J.key,et=W;et!==null;){if(et.key===Ye){if(Ye=J.type,Ye===U){if(et.tag===7){a(Z,et.sibling),W=d(et,J.props.children),W.return=Z,Z=W;break e}}else if(et.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===ce&&Xf(Ye)===et.type){a(Z,et.sibling),W=d(et,J.props),W.ref=zo(Z,et,J),W.return=Z,Z=W;break e}a(Z,et);break}else i(Z,et);et=et.sibling}J.type===U?(W=es(J.props.children,Z.mode,Te,J.key),W.return=Z,Z=W):(Te=gl(J.type,J.key,J.props,null,Z.mode,Te),Te.ref=zo(Z,W,J),Te.return=Z,Z=Te)}return E(Z);case F:e:{for(et=J.key;W!==null;){if(W.key===et)if(W.tag===4&&W.stateNode.containerInfo===J.containerInfo&&W.stateNode.implementation===J.implementation){a(Z,W.sibling),W=d(W,J.children||[]),W.return=Z,Z=W;break e}else{a(Z,W);break}else i(Z,W);W=W.sibling}W=qu(J,Z.mode,Te),W.return=Z,Z=W}return E(Z);case ce:return et=J._init,Qt(Z,W,et(J._payload),Te)}if(Ze(J))return ze(Z,W,J,Te);if(se(J))return Ve(Z,W,J,Te);ja(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,W!==null&&W.tag===6?(a(Z,W.sibling),W=d(W,J),W.return=Z,Z=W):(a(Z,W),W=Yu(J,Z.mode,Te),W.return=Z,Z=W),E(Z)):a(Z,W)}return Qt}var Ls=jf(!0),Yf=jf(!1),Ya=mr(null),qa=null,Ds=null,iu=null;function ru(){iu=Ds=qa=null}function su(n){var i=Ya.current;jt(Ya),n._currentValue=i}function ou(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ns(n,i){qa=n,iu=Ds=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Hn=!0),n.firstContext=null)}function oi(n){var i=n._currentValue;if(iu!==n)if(n={context:n,memoizedValue:i,next:null},Ds===null){if(qa===null)throw Error(t(308));Ds=n,qa.dependencies={lanes:0,firstContext:n}}else Ds=Ds.next=n;return i}var Yr=null;function au(n){Yr===null?Yr=[n]:Yr.push(n)}function qf(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,au(i)):(a.next=d.next,d.next=a),i.interleaved=a,Xi(n,c)}function Xi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var vr=!1;function lu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $f(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ji(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function yr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Et&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Xi(n,a)}return d=c.interleaved,d===null?(i.next=i,au(c)):(i.next=d.next,d.next=i),c.interleaved=i,Xi(n,a)}function $a(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Mc(n,a)}}function Kf(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Ka(n,i,a,c){var d=n.updateQueue;vr=!1;var m=d.firstBaseUpdate,E=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var B=I,oe=B.next;B.next=null,E===null?m=oe:E.next=oe,E=B;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==E&&(I===null?ve.firstBaseUpdate=oe:I.next=oe,ve.lastBaseUpdate=B))}if(m!==null){var xe=d.baseState;E=0,ve=oe=B=null,I=m;do{var ge=I.lane,Ie=I.eventTime;if((c&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ze=n,Ve=I;switch(ge=i,Ie=a,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){xe=ze.call(Ie,xe,ge);break e}xe=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,ge=typeof ze=="function"?ze.call(Ie,xe,ge):ze,ge==null)break e;xe=ie({},xe,ge);break e;case 2:vr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ge=d.effects,ge===null?d.effects=[I]:ge.push(I))}else Ie={eventTime:Ie,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(oe=ve=Ie,B=xe):ve=ve.next=Ie,E|=ge;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(ve===null&&(B=xe),d.baseState=B,d.firstBaseUpdate=oe,d.lastBaseUpdate=ve,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Kr|=E,n.lanes=E,n.memoizedState=xe}}function Zf(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ho={},Li=mr(Ho),Vo=mr(Ho),Go=mr(Ho);function qr(n){if(n===Ho)throw Error(t(174));return n}function cu(n,i){switch(Vt(Go,i),Vt(Vo,n),Vt(Li,Ho),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=We(i,n)}jt(Li),Vt(Li,i)}function Is(){jt(Li),jt(Vo),jt(Go)}function Qf(n){qr(Go.current);var i=qr(Li.current),a=We(i,n.type);i!==a&&(Vt(Vo,n),Vt(Li,a))}function uu(n){Vo.current===n&&(jt(Li),jt(Vo))}var $t=mr(0);function Za(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var hu=[];function du(){for(var n=0;n<hu.length;n++)hu[n]._workInProgressVersionPrimary=null;hu.length=0}var Qa=T.ReactCurrentDispatcher,fu=T.ReactCurrentBatchConfig,$r=0,Kt=null,rn=null,cn=null,Ja=!1,Wo=!1,Xo=0,b_=0;function En(){throw Error(t(321))}function pu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!mi(n[a],i[a]))return!1;return!0}function mu(n,i,a,c,d,m){if($r=m,Kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Qa.current=n===null||n.memoizedState===null?N_:I_,n=a(c,d),Wo){m=0;do{if(Wo=!1,Xo=0,25<=m)throw Error(t(301));m+=1,cn=rn=null,i.updateQueue=null,Qa.current=U_,n=a(c,d)}while(Wo)}if(Qa.current=nl,i=rn!==null&&rn.next!==null,$r=0,cn=rn=Kt=null,Ja=!1,i)throw Error(t(300));return n}function gu(){var n=Xo!==0;return Xo=0,n}function Di(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?Kt.memoizedState=cn=n:cn=cn.next=n,cn}function ai(){if(rn===null){var n=Kt.alternate;n=n!==null?n.memoizedState:null}else n=rn.next;var i=cn===null?Kt.memoizedState:cn.next;if(i!==null)cn=i,rn=n;else{if(n===null)throw Error(t(310));rn=n,n={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},cn===null?Kt.memoizedState=cn=n:cn=cn.next=n}return cn}function jo(n,i){return typeof i=="function"?i(n):i}function _u(n){var i=ai(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=rn,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var E=d.next;d.next=m.next,m.next=E}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var I=E=null,B=null,oe=m;do{var ve=oe.lane;if(($r&ve)===ve)B!==null&&(B=B.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),c=oe.hasEagerState?oe.eagerState:n(c,oe.action);else{var xe={lane:ve,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};B===null?(I=B=xe,E=c):B=B.next=xe,Kt.lanes|=ve,Kr|=ve}oe=oe.next}while(oe!==null&&oe!==m);B===null?E=c:B.next=I,mi(c,i.memoizedState)||(Hn=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=B,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Kt.lanes|=m,Kr|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function vu(n){var i=ai(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var E=d=d.next;do m=n(m,E.action),E=E.next;while(E!==d);mi(m,i.memoizedState)||(Hn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Jf(){}function ep(n,i){var a=Kt,c=ai(),d=i(),m=!mi(c.memoizedState,d);if(m&&(c.memoizedState=d,Hn=!0),c=c.queue,yu(ip.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||cn!==null&&cn.memoizedState.tag&1){if(a.flags|=2048,Yo(9,np.bind(null,a,c,d,i),void 0,null),un===null)throw Error(t(349));($r&30)!==0||tp(a,i,d)}return d}function tp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Kt.updateQueue,i===null?(i={lastEffect:null,stores:null},Kt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function np(n,i,a,c){i.value=a,i.getSnapshot=c,rp(i)&&sp(n)}function ip(n,i,a){return a(function(){rp(i)&&sp(n)})}function rp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!mi(n,a)}catch{return!0}}function sp(n){var i=Xi(n,1);i!==null&&xi(i,n,1,-1)}function op(n){var i=Di();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:n},i.queue=n,n=n.dispatch=D_.bind(null,Kt,n),[i.memoizedState,n]}function Yo(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Kt.updateQueue,i===null?(i={lastEffect:null,stores:null},Kt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function ap(){return ai().memoizedState}function el(n,i,a,c){var d=Di();Kt.flags|=n,d.memoizedState=Yo(1|i,a,void 0,c===void 0?null:c)}function tl(n,i,a,c){var d=ai();c=c===void 0?null:c;var m=void 0;if(rn!==null){var E=rn.memoizedState;if(m=E.destroy,c!==null&&pu(c,E.deps)){d.memoizedState=Yo(i,a,m,c);return}}Kt.flags|=n,d.memoizedState=Yo(1|i,a,m,c)}function lp(n,i){return el(8390656,8,n,i)}function yu(n,i){return tl(2048,8,n,i)}function cp(n,i){return tl(4,2,n,i)}function up(n,i){return tl(4,4,n,i)}function hp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function dp(n,i,a){return a=a!=null?a.concat([n]):null,tl(4,4,hp.bind(null,i,n),a)}function xu(){}function fp(n,i){var a=ai();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&pu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function pp(n,i){var a=ai();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&pu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function mp(n,i,a){return($r&21)===0?(n.baseState&&(n.baseState=!1,Hn=!0),n.memoizedState=a):(mi(a,i)||(a=Pn(),Kt.lanes|=a,Kr|=a,n.baseState=!0),i)}function P_(n,i){var a=Lt;Lt=a!==0&&4>a?a:4,n(!0);var c=fu.transition;fu.transition={};try{n(!1),i()}finally{Lt=a,fu.transition=c}}function gp(){return ai().memoizedState}function L_(n,i,a){var c=Er(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},_p(n))vp(i,a);else if(a=qf(n,i,a,c),a!==null){var d=Dn();xi(a,n,c,d),yp(a,i,c)}}function D_(n,i,a){var c=Er(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(_p(n))vp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,I=m(E,a);if(d.hasEagerState=!0,d.eagerState=I,mi(I,E)){var B=i.interleaved;B===null?(d.next=d,au(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}a=qf(n,i,d,c),a!==null&&(d=Dn(),xi(a,n,c,d),yp(a,i,c))}}function _p(n){var i=n.alternate;return n===Kt||i!==null&&i===Kt}function vp(n,i){Wo=Ja=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function yp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Mc(n,a)}}var nl={readContext:oi,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},N_={readContext:oi,useCallback:function(n,i){return Di().memoizedState=[n,i===void 0?null:i],n},useContext:oi,useEffect:lp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,el(4194308,4,hp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return el(4194308,4,n,i)},useInsertionEffect:function(n,i){return el(4,2,n,i)},useMemo:function(n,i){var a=Di();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Di();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=L_.bind(null,Kt,n),[c.memoizedState,n]},useRef:function(n){var i=Di();return n={current:n},i.memoizedState=n},useState:op,useDebugValue:xu,useDeferredValue:function(n){return Di().memoizedState=n},useTransition:function(){var n=op(!1),i=n[0];return n=P_.bind(null,n[1]),Di().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Kt,d=Di();if(Yt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),un===null)throw Error(t(349));($r&30)!==0||tp(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,lp(ip.bind(null,c,m,n),[n]),c.flags|=2048,Yo(9,np.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Di(),i=un.identifierPrefix;if(Yt){var a=Wi,c=Gi;a=(c&~(1<<32-ht(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Xo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=b_++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},I_={readContext:oi,useCallback:fp,useContext:oi,useEffect:yu,useImperativeHandle:dp,useInsertionEffect:cp,useLayoutEffect:up,useMemo:pp,useReducer:_u,useRef:ap,useState:function(){return _u(jo)},useDebugValue:xu,useDeferredValue:function(n){var i=ai();return mp(i,rn.memoizedState,n)},useTransition:function(){var n=_u(jo)[0],i=ai().memoizedState;return[n,i]},useMutableSource:Jf,useSyncExternalStore:ep,useId:gp,unstable_isNewReconciler:!1},U_={readContext:oi,useCallback:fp,useContext:oi,useEffect:yu,useImperativeHandle:dp,useInsertionEffect:cp,useLayoutEffect:up,useMemo:pp,useReducer:vu,useRef:ap,useState:function(){return vu(jo)},useDebugValue:xu,useDeferredValue:function(n){var i=ai();return rn===null?i.memoizedState=n:mp(i,rn.memoizedState,n)},useTransition:function(){var n=vu(jo)[0],i=ai().memoizedState;return[n,i]},useMutableSource:Jf,useSyncExternalStore:ep,useId:gp,unstable_isNewReconciler:!1};function _i(n,i){if(n&&n.defaultProps){i=ie({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Su(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ie({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var il={isMounted:function(n){return(n=n._reactInternals)?Ri(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Dn(),d=Er(n),m=ji(c,d);m.payload=i,a!=null&&(m.callback=a),i=yr(n,m,d),i!==null&&(xi(i,n,d,c),$a(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Dn(),d=Er(n),m=ji(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=yr(n,m,d),i!==null&&(xi(i,n,d,c),$a(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Dn(),c=Er(n),d=ji(a,c);d.tag=2,i!=null&&(d.callback=i),i=yr(n,d,c),i!==null&&(xi(i,n,c,a),$a(i,n,c))}};function xp(n,i,a,c,d,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,E):i.prototype&&i.prototype.isPureReactComponent?!No(a,c)||!No(d,m):!0}function Sp(n,i,a){var c=!1,d=gr,m=i.contextType;return typeof m=="object"&&m!==null?m=oi(m):(d=zn(i)?Wr:Mn.current,c=i.contextTypes,m=(c=c!=null)?Cs(n,d):gr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=il,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Mp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&il.enqueueReplaceState(i,i.state,null)}function Mu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},lu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=oi(m):(m=zn(i)?Wr:Mn.current,d.context=Cs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Su(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&il.enqueueReplaceState(d,d.state,null),Ka(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Us(n,i){try{var a="",c=i;do a+=de(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function Eu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function wu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var F_=typeof WeakMap=="function"?WeakMap:Map;function Ep(n,i,a){a=ji(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){ul||(ul=!0,Bu=c),wu(n,i)},a}function wp(n,i,a){a=ji(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){wu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){wu(n,i),typeof c!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Tp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new F_;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=K_.bind(null,n,i,a),i.then(n,n))}function Ap(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Cp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ji(-1,1),i.tag=2,yr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var O_=T.ReactCurrentOwner,Hn=!1;function Ln(n,i,a,c){i.child=n===null?Yf(i,null,a,c):Ls(i,n.child,a,c)}function Rp(n,i,a,c,d){a=a.render;var m=i.ref;return Ns(i,d),c=mu(n,i,a,c,m,d),a=gu(),n!==null&&!Hn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Yi(n,i,d)):(Yt&&a&&Qc(i),i.flags|=1,Ln(n,i,c,d),i.child)}function bp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!ju(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Pp(n,i,m,c,d)):(n=gl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:No,a(E,c)&&n.ref===i.ref)return Yi(n,i,d)}return i.flags|=1,n=Tr(m,c),n.ref=i.ref,n.return=i,i.child=n}function Pp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(No(m,c)&&n.ref===i.ref)if(Hn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Hn=!0);else return i.lanes=n.lanes,Yi(n,i,d)}return Tu(n,i,a,c,d)}function Lp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(Os,Qn),Qn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Vt(Os,Qn),Qn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Vt(Os,Qn),Qn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Vt(Os,Qn),Qn|=c;return Ln(n,i,d,a),i.child}function Dp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Tu(n,i,a,c,d){var m=zn(a)?Wr:Mn.current;return m=Cs(i,m),Ns(i,d),a=mu(n,i,a,c,m,d),c=gu(),n!==null&&!Hn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Yi(n,i,d)):(Yt&&c&&Qc(i),i.flags|=1,Ln(n,i,a,d),i.child)}function Np(n,i,a,c,d){if(zn(a)){var m=!0;Ha(i)}else m=!1;if(Ns(i,d),i.stateNode===null)sl(n,i),Sp(i,a,c),Mu(i,a,c,d),c=!0;else if(n===null){var E=i.stateNode,I=i.memoizedProps;E.props=I;var B=E.context,oe=a.contextType;typeof oe=="object"&&oe!==null?oe=oi(oe):(oe=zn(a)?Wr:Mn.current,oe=Cs(i,oe));var ve=a.getDerivedStateFromProps,xe=typeof ve=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==c||B!==oe)&&Mp(i,E,c,oe),vr=!1;var ge=i.memoizedState;E.state=ge,Ka(i,c,E,d),B=i.memoizedState,I!==c||ge!==B||Bn.current||vr?(typeof ve=="function"&&(Su(i,a,ve,c),B=i.memoizedState),(I=vr||xp(i,a,I,c,ge,B,oe))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),E.props=c,E.state=B,E.context=oe,c=I):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,$f(n,i),I=i.memoizedProps,oe=i.type===i.elementType?I:_i(i.type,I),E.props=oe,xe=i.pendingProps,ge=E.context,B=a.contextType,typeof B=="object"&&B!==null?B=oi(B):(B=zn(a)?Wr:Mn.current,B=Cs(i,B));var Ie=a.getDerivedStateFromProps;(ve=typeof Ie=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==xe||ge!==B)&&Mp(i,E,c,B),vr=!1,ge=i.memoizedState,E.state=ge,Ka(i,c,E,d);var ze=i.memoizedState;I!==xe||ge!==ze||Bn.current||vr?(typeof Ie=="function"&&(Su(i,a,Ie,c),ze=i.memoizedState),(oe=vr||xp(i,a,oe,c,ge,ze,B)||!1)?(ve||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,ze,B),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,ze,B)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ze),E.props=c,E.state=ze,E.context=B,c=oe):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),c=!1)}return Au(n,i,a,c,m,d)}function Au(n,i,a,c,d,m){Dp(n,i);var E=(i.flags&128)!==0;if(!c&&!E)return d&&kf(i,a,!1),Yi(n,i,m);c=i.stateNode,O_.current=i;var I=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&E?(i.child=Ls(i,n.child,null,m),i.child=Ls(i,null,I,m)):Ln(n,i,I,m),i.memoizedState=c.state,d&&kf(i,a,!0),i.child}function Ip(n){var i=n.stateNode;i.pendingContext?Ff(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ff(n,i.context,!1),cu(n,i.containerInfo)}function Up(n,i,a,c,d){return Ps(),nu(d),i.flags|=256,Ln(n,i,a,c),i.child}var Cu={dehydrated:null,treeContext:null,retryLane:0};function Ru(n){return{baseLanes:n,cachePool:null,transitions:null}}function Fp(n,i,a){var c=i.pendingProps,d=$t.current,m=!1,E=(i.flags&128)!==0,I;if((I=E)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Vt($t,d&1),n===null)return tu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,n=c.fallback,m?(c=i.mode,m=i.child,E={mode:"hidden",children:E},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=_l(E,c,0,null),n=es(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Ru(a),i.memoizedState=Cu,n):bu(i,E));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return k_(n,i,E,c,I,d,a);if(m){m=c.fallback,E=i.mode,d=n.child,I=d.sibling;var B={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=Tr(d,B),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=Tr(I,m):(m=es(m,E,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,E=n.child.memoizedState,E=E===null?Ru(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~a,i.memoizedState=Cu,c}return m=n.child,n=m.sibling,c=Tr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function bu(n,i){return i=_l({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function rl(n,i,a,c){return c!==null&&nu(c),Ls(i,n.child,null,a),n=bu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function k_(n,i,a,c,d,m,E){if(a)return i.flags&256?(i.flags&=-257,c=Eu(Error(t(422))),rl(n,i,E,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=_l({mode:"visible",children:c.children},d,0,null),m=es(m,d,E,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Ls(i,n.child,null,E),i.child.memoizedState=Ru(E),i.memoizedState=Cu,m);if((i.mode&1)===0)return rl(n,i,E,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(t(419)),c=Eu(m,c,void 0),rl(n,i,E,c)}if(I=(E&n.childLanes)!==0,Hn||I){if(c=un,c!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|E))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Xi(n,d),xi(c,n,d,-1))}return Xu(),c=Eu(Error(t(421))),rl(n,i,E,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Z_.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Zn=pr(d.nextSibling),Kn=i,Yt=!0,gi=null,n!==null&&(ri[si++]=Gi,ri[si++]=Wi,ri[si++]=Xr,Gi=n.id,Wi=n.overflow,Xr=i),i=bu(i,c.children),i.flags|=4096,i)}function Op(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),ou(n.return,i,a)}function Pu(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function kp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Ln(n,i,c.children,a),c=$t.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Op(n,a,i);else if(n.tag===19)Op(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Vt($t,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Za(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Pu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Za(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Pu(i,!0,a,null,m);break;case"together":Pu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function sl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Yi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Kr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Tr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Tr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function B_(n,i,a){switch(i.tag){case 3:Ip(i),Ps();break;case 5:Qf(i);break;case 1:zn(i.type)&&Ha(i);break;case 4:cu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Vt(Ya,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Vt($t,$t.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Fp(n,i,a):(Vt($t,$t.current&1),n=Yi(n,i,a),n!==null?n.sibling:null);Vt($t,$t.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return kp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Vt($t,$t.current),c)break;return null;case 22:case 23:return i.lanes=0,Lp(n,i,a)}return Yi(n,i,a)}var Bp,Lu,zp,Hp;Bp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Lu=function(){},zp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,qr(Li.current);var m=null;switch(a){case"input":d=K(n,d),c=K(n,c),m=[];break;case"select":d=ie({},d,{value:void 0}),c=ie({},c,{value:void 0}),m=[];break;case"textarea":d=A(n,d),c=A(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=ka)}gt(a,c);var E;a=null;for(oe in d)if(!c.hasOwnProperty(oe)&&d.hasOwnProperty(oe)&&d[oe]!=null)if(oe==="style"){var I=d[oe];for(E in I)I.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(o.hasOwnProperty(oe)?m||(m=[]):(m=m||[]).push(oe,null));for(oe in c){var B=c[oe];if(I=d!=null?d[oe]:void 0,c.hasOwnProperty(oe)&&B!==I&&(B!=null||I!=null))if(oe==="style")if(I){for(E in I)!I.hasOwnProperty(E)||B&&B.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in B)B.hasOwnProperty(E)&&I[E]!==B[E]&&(a||(a={}),a[E]=B[E])}else a||(m||(m=[]),m.push(oe,a)),a=B;else oe==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(m=m||[]).push(oe,B)):oe==="children"?typeof B!="string"&&typeof B!="number"||(m=m||[]).push(oe,""+B):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(o.hasOwnProperty(oe)?(B!=null&&oe==="onScroll"&&Xt("scroll",n),m||I===B||(m=[])):(m=m||[]).push(oe,B))}a&&(m=m||[]).push("style",a);var oe=m;(i.updateQueue=oe)&&(i.flags|=4)}},Hp=function(n,i,a,c){a!==c&&(i.flags|=4)};function qo(n,i){if(!Yt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function wn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function z_(n,i,a){var c=i.pendingProps;switch(Jc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(i),null;case 1:return zn(i.type)&&za(),wn(i),null;case 3:return c=i.stateNode,Is(),jt(Bn),jt(Mn),du(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Xa(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,gi!==null&&(Vu(gi),gi=null))),Lu(n,i),wn(i),null;case 5:uu(i);var d=qr(Go.current);if(a=i.type,n!==null&&i.stateNode!=null)zp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return wn(i),null}if(n=qr(Li.current),Xa(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Pi]=i,c[ko]=m,n=(i.mode&1)!==0,a){case"dialog":Xt("cancel",c),Xt("close",c);break;case"iframe":case"object":case"embed":Xt("load",c);break;case"video":case"audio":for(d=0;d<Uo.length;d++)Xt(Uo[d],c);break;case"source":Xt("error",c);break;case"img":case"image":case"link":Xt("error",c),Xt("load",c);break;case"details":Xt("toggle",c);break;case"input":Rn(c,m),Xt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Xt("invalid",c);break;case"textarea":te(c,m),Xt("invalid",c)}gt(a,m),d=null;for(var E in m)if(m.hasOwnProperty(E)){var I=m[E];E==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&Oa(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Oa(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Xt("scroll",c)}switch(a){case"input":Ut(c),Je(c,m,!0);break;case"textarea":Ut(c),_e(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=ka)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(a,{is:c.is}):(n=E.createElement(a),a==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,a),n[Pi]=i,n[ko]=c,Bp(n,i,!1,!1),i.stateNode=n;e:{switch(E=ct(a,c),a){case"dialog":Xt("cancel",n),Xt("close",n),d=c;break;case"iframe":case"object":case"embed":Xt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Uo.length;d++)Xt(Uo[d],n);d=c;break;case"source":Xt("error",n),d=c;break;case"img":case"image":case"link":Xt("error",n),Xt("load",n),d=c;break;case"details":Xt("toggle",n),d=c;break;case"input":Rn(n,c),d=K(n,c),Xt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ie({},c,{value:void 0}),Xt("invalid",n);break;case"textarea":te(n,c),d=A(n,c),Xt("invalid",n);break;default:d=c}gt(a,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var B=I[m];m==="style"?rt(n,B):m==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Fe(n,B)):m==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&pt(n,B):typeof B=="number"&&pt(n,""+B):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?B!=null&&m==="onScroll"&&Xt("scroll",n):B!=null&&P(n,m,B,E))}switch(a){case"input":Ut(n),Je(n,c,!1);break;case"textarea":Ut(n),_e(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Re(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?D(n,!!c.multiple,m,!1):c.defaultValue!=null&&D(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=ka)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return wn(i),null;case 6:if(n&&i.stateNode!=null)Hp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=qr(Go.current),qr(Li.current),Xa(i)){if(c=i.stateNode,a=i.memoizedProps,c[Pi]=i,(m=c.nodeValue!==a)&&(n=Kn,n!==null))switch(n.tag){case 3:Oa(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Oa(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Pi]=i,i.stateNode=c}return wn(i),null;case 13:if(jt($t),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Yt&&Zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Wf(),Ps(),i.flags|=98560,m=!1;else if(m=Xa(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Pi]=i}else Ps(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;wn(i),m=!1}else gi!==null&&(Vu(gi),gi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||($t.current&1)!==0?sn===0&&(sn=3):Xu())),i.updateQueue!==null&&(i.flags|=4),wn(i),null);case 4:return Is(),Lu(n,i),n===null&&Fo(i.stateNode.containerInfo),wn(i),null;case 10:return su(i.type._context),wn(i),null;case 17:return zn(i.type)&&za(),wn(i),null;case 19:if(jt($t),m=i.memoizedState,m===null)return wn(i),null;if(c=(i.flags&128)!==0,E=m.rendering,E===null)if(c)qo(m,!1);else{if(sn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Za(n),E!==null){for(i.flags|=128,qo(m,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Vt($t,$t.current&1|2),i.child}n=n.sibling}m.tail!==null&&Me()>ks&&(i.flags|=128,c=!0,qo(m,!1),i.lanes=4194304)}else{if(!c)if(n=Za(E),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),qo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!Yt)return wn(i),null}else 2*Me()-m.renderingStartTime>ks&&a!==1073741824&&(i.flags|=128,c=!0,qo(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(a=m.last,a!==null?a.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Me(),i.sibling=null,a=$t.current,Vt($t,c?a&1|2:a&1),i):(wn(i),null);case 22:case 23:return Wu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Qn&1073741824)!==0&&(wn(i),i.subtreeFlags&6&&(i.flags|=8192)):wn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function H_(n,i){switch(Jc(i),i.tag){case 1:return zn(i.type)&&za(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Is(),jt(Bn),jt(Mn),du(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return uu(i),null;case 13:if(jt($t),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ps()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return jt($t),null;case 4:return Is(),null;case 10:return su(i.type._context),null;case 22:case 23:return Wu(),null;case 24:return null;default:return null}}var ol=!1,Tn=!1,V_=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Fs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Zt(n,i,c)}else a.current=null}function Du(n,i,a){try{a()}catch(c){Zt(n,i,c)}}var Vp=!1;function G_(n,i){if(Wc=Aa,n=xf(),Fc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,I=-1,B=-1,oe=0,ve=0,xe=n,ge=null;t:for(;;){for(var Ie;xe!==a||d!==0&&xe.nodeType!==3||(I=E+d),xe!==m||c!==0&&xe.nodeType!==3||(B=E+c),xe.nodeType===3&&(E+=xe.nodeValue.length),(Ie=xe.firstChild)!==null;)ge=xe,xe=Ie;for(;;){if(xe===n)break t;if(ge===a&&++oe===d&&(I=E),ge===m&&++ve===c&&(B=E),(Ie=xe.nextSibling)!==null)break;xe=ge,ge=xe.parentNode}xe=Ie}a=I===-1||B===-1?null:{start:I,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Xc={focusedElem:n,selectionRange:a},Aa=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,Qt=ze.memoizedState,Z=i.stateNode,W=Z.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:_i(i.type,Ve),Qt);Z.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Zt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return ze=Vp,Vp=!1,ze}function $o(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Du(i,a,m)}d=d.next}while(d!==c)}}function al(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Nu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Gp(n){var i=n.alternate;i!==null&&(n.alternate=null,Gp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Pi],delete i[ko],delete i[$c],delete i[T_],delete i[A_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Wp(n){return n.tag===5||n.tag===3||n.tag===4}function Xp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Wp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Iu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=ka));else if(c!==4&&(n=n.child,n!==null))for(Iu(n,i,a),n=n.sibling;n!==null;)Iu(n,i,a),n=n.sibling}function Uu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Uu(n,i,a),n=n.sibling;n!==null;)Uu(n,i,a),n=n.sibling}var mn=null,vi=!1;function xr(n,i,a){for(a=a.child;a!==null;)jp(n,i,a),a=a.sibling}function jp(n,i,a){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Rt,a)}catch{}switch(a.tag){case 5:Tn||Fs(a,i);case 6:var c=mn,d=vi;mn=null,xr(n,i,a),mn=c,vi=d,mn!==null&&(vi?(n=mn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):mn.removeChild(a.stateNode));break;case 18:mn!==null&&(vi?(n=mn,a=a.stateNode,n.nodeType===8?qc(n.parentNode,a):n.nodeType===1&&qc(n,a),Co(n)):qc(mn,a.stateNode));break;case 4:c=mn,d=vi,mn=a.stateNode.containerInfo,vi=!0,xr(n,i,a),mn=c,vi=d;break;case 0:case 11:case 14:case 15:if(!Tn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&Du(a,i,E),d=d.next}while(d!==c)}xr(n,i,a);break;case 1:if(!Tn&&(Fs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){Zt(a,i,I)}xr(n,i,a);break;case 21:xr(n,i,a);break;case 22:a.mode&1?(Tn=(c=Tn)||a.memoizedState!==null,xr(n,i,a),Tn=c):xr(n,i,a);break;default:xr(n,i,a)}}function Yp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new V_),i.forEach(function(c){var d=Q_.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function yi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,E=i,I=E;e:for(;I!==null;){switch(I.tag){case 5:mn=I.stateNode,vi=!1;break e;case 3:mn=I.stateNode.containerInfo,vi=!0;break e;case 4:mn=I.stateNode.containerInfo,vi=!0;break e}I=I.return}if(mn===null)throw Error(t(160));jp(m,E,d),mn=null,vi=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(oe){Zt(d,i,oe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)qp(i,n),i=i.sibling}function qp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(yi(i,n),Ni(n),c&4){try{$o(3,n,n.return),al(3,n)}catch(Ve){Zt(n,n.return,Ve)}try{$o(5,n,n.return)}catch(Ve){Zt(n,n.return,Ve)}}break;case 1:yi(i,n),Ni(n),c&512&&a!==null&&Fs(a,a.return);break;case 5:if(yi(i,n),Ni(n),c&512&&a!==null&&Fs(a,a.return),n.flags&32){var d=n.stateNode;try{pt(d,"")}catch(Ve){Zt(n,n.return,Ve)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,E=a!==null?a.memoizedProps:m,I=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&vt(d,m),ct(I,E);var oe=ct(I,m);for(E=0;E<B.length;E+=2){var ve=B[E],xe=B[E+1];ve==="style"?rt(d,xe):ve==="dangerouslySetInnerHTML"?Fe(d,xe):ve==="children"?pt(d,xe):P(d,ve,xe,oe)}switch(I){case"input":mt(d,m);break;case"textarea":me(d,m);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Ie=m.value;Ie!=null?D(d,!!m.multiple,Ie,!1):ge!==!!m.multiple&&(m.defaultValue!=null?D(d,!!m.multiple,m.defaultValue,!0):D(d,!!m.multiple,m.multiple?[]:"",!1))}d[ko]=m}catch(Ve){Zt(n,n.return,Ve)}}break;case 6:if(yi(i,n),Ni(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Ve){Zt(n,n.return,Ve)}}break;case 3:if(yi(i,n),Ni(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Co(i.containerInfo)}catch(Ve){Zt(n,n.return,Ve)}break;case 4:yi(i,n),Ni(n);break;case 13:yi(i,n),Ni(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(ku=Me())),c&4&&Yp(n);break;case 22:if(ve=a!==null&&a.memoizedState!==null,n.mode&1?(Tn=(oe=Tn)||ve,yi(i,n),Tn=oe):yi(i,n),Ni(n),c&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!ve&&(n.mode&1)!==0)for(Oe=n,ve=n.child;ve!==null;){for(xe=Oe=ve;Oe!==null;){switch(ge=Oe,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:$o(4,ge,ge.return);break;case 1:Fs(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){c=ge,a=ge.return;try{i=c,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(Ve){Zt(c,a,Ve)}}break;case 5:Fs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Zp(xe);continue}}Ie!==null?(Ie.return=ge,Oe=Ie):Zp(xe)}ve=ve.sibling}e:for(ve=null,xe=n;;){if(xe.tag===5){if(ve===null){ve=xe;try{d=xe.stateNode,oe?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=xe.stateNode,B=xe.memoizedProps.style,E=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=it("display",E))}catch(Ve){Zt(n,n.return,Ve)}}}else if(xe.tag===6){if(ve===null)try{xe.stateNode.nodeValue=oe?"":xe.memoizedProps}catch(Ve){Zt(n,n.return,Ve)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;ve===xe&&(ve=null),xe=xe.return}ve===xe&&(ve=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:yi(i,n),Ni(n),c&4&&Yp(n);break;case 21:break;default:yi(i,n),Ni(n)}}function Ni(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Wp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(pt(d,""),c.flags&=-33);var m=Xp(n);Uu(n,m,d);break;case 3:case 4:var E=c.stateNode.containerInfo,I=Xp(n);Iu(n,I,E);break;default:throw Error(t(161))}}catch(B){Zt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function W_(n,i,a){Oe=n,$p(n)}function $p(n,i,a){for(var c=(n.mode&1)!==0;Oe!==null;){var d=Oe,m=d.child;if(d.tag===22&&c){var E=d.memoizedState!==null||ol;if(!E){var I=d.alternate,B=I!==null&&I.memoizedState!==null||Tn;I=ol;var oe=Tn;if(ol=E,(Tn=B)&&!oe)for(Oe=d;Oe!==null;)E=Oe,B=E.child,E.tag===22&&E.memoizedState!==null?Qp(d):B!==null?(B.return=E,Oe=B):Qp(d);for(;m!==null;)Oe=m,$p(m),m=m.sibling;Oe=d,ol=I,Tn=oe}Kp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Oe=m):Kp(n)}}function Kp(n){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Tn||al(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Tn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:_i(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Zf(i,m,c);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Zf(i,E,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var oe=i.alternate;if(oe!==null){var ve=oe.memoizedState;if(ve!==null){var xe=ve.dehydrated;xe!==null&&Co(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Tn||i.flags&512&&Nu(i)}catch(ge){Zt(i,i.return,ge)}}if(i===n){Oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function Zp(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function Qp(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{al(4,i)}catch(B){Zt(i,a,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(B){Zt(i,d,B)}}var m=i.return;try{Nu(i)}catch(B){Zt(i,m,B)}break;case 5:var E=i.return;try{Nu(i)}catch(B){Zt(i,E,B)}}}catch(B){Zt(i,i.return,B)}if(i===n){Oe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Oe=I;break}Oe=i.return}}var X_=Math.ceil,ll=T.ReactCurrentDispatcher,Fu=T.ReactCurrentOwner,li=T.ReactCurrentBatchConfig,Et=0,un=null,Jt=null,gn=0,Qn=0,Os=mr(0),sn=0,Ko=null,Kr=0,cl=0,Ou=0,Zo=null,Vn=null,ku=0,ks=1/0,qi=null,ul=!1,Bu=null,Sr=null,hl=!1,Mr=null,dl=0,Qo=0,zu=null,fl=-1,pl=0;function Dn(){return(Et&6)!==0?Me():fl!==-1?fl:fl=Me()}function Er(n){return(n.mode&1)===0?1:(Et&2)!==0&&gn!==0?gn&-gn:R_.transition!==null?(pl===0&&(pl=Pn()),pl):(n=Lt,n!==0||(n=window.event,n=n===void 0?16:Jd(n.type)),n)}function xi(n,i,a,c){if(50<Qo)throw Qo=0,zu=null,Error(t(185));kn(n,a,c),((Et&2)===0||n!==un)&&(n===un&&((Et&2)===0&&(cl|=a),sn===4&&wr(n,gn)),Gn(n,c),a===1&&Et===0&&(i.mode&1)===0&&(ks=Me()+500,Va&&_r()))}function Gn(n,i){var a=n.callbackNode;ni(n,i);var c=bi(n,n===un?gn:0);if(c===0)a!==null&&le(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&le(a),i===1)n.tag===0?C_(em.bind(null,n)):Bf(em.bind(null,n)),E_(function(){(Et&6)===0&&_r()}),a=null;else{switch(Xd(c)){case 1:a=He;break;case 4:a=st;break;case 16:a=at;break;case 536870912:a=St;break;default:a=at}a=lm(a,Jp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Jp(n,i){if(fl=-1,pl=0,(Et&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Bs()&&n.callbackNode!==a)return null;var c=bi(n,n===un?gn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ml(n,c);else{i=c;var d=Et;Et|=2;var m=nm();(un!==n||gn!==i)&&(qi=null,ks=Me()+500,Qr(n,i));do try{q_();break}catch(I){tm(n,I)}while(!0);ru(),ll.current=m,Et=d,Jt!==null?i=0:(un=null,gn=0,i=sn)}if(i!==0){if(i===2&&(d=zi(n),d!==0&&(c=d,i=Hu(n,d))),i===1)throw a=Ko,Qr(n,0),wr(n,c),Gn(n,Me()),a;if(i===6)wr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!j_(d)&&(i=ml(n,c),i===2&&(m=zi(n),m!==0&&(c=m,i=Hu(n,m))),i===1))throw a=Ko,Qr(n,0),wr(n,c),Gn(n,Me()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Jr(n,Vn,qi);break;case 3:if(wr(n,c),(c&130023424)===c&&(i=ku+500-Me(),10<i)){if(bi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Dn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Yc(Jr.bind(null,n,Vn,qi),i);break}Jr(n,Vn,qi);break;case 4:if(wr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var E=31-ht(c);m=1<<E,E=i[E],E>d&&(d=E),c&=~m}if(c=d,c=Me()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*X_(c/1960))-c,10<c){n.timeoutHandle=Yc(Jr.bind(null,n,Vn,qi),c);break}Jr(n,Vn,qi);break;case 5:Jr(n,Vn,qi);break;default:throw Error(t(329))}}}return Gn(n,Me()),n.callbackNode===a?Jp.bind(null,n):null}function Hu(n,i){var a=Zo;return n.current.memoizedState.isDehydrated&&(Qr(n,i).flags|=256),n=ml(n,i),n!==2&&(i=Vn,Vn=a,i!==null&&Vu(i)),n}function Vu(n){Vn===null?Vn=n:Vn.push.apply(Vn,n)}function j_(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!mi(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function wr(n,i){for(i&=~Ou,i&=~cl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-ht(i),c=1<<a;n[a]=-1,i&=~c}}function em(n){if((Et&6)!==0)throw Error(t(327));Bs();var i=bi(n,0);if((i&1)===0)return Gn(n,Me()),null;var a=ml(n,i);if(n.tag!==0&&a===2){var c=zi(n);c!==0&&(i=c,a=Hu(n,c))}if(a===1)throw a=Ko,Qr(n,0),wr(n,i),Gn(n,Me()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Jr(n,Vn,qi),Gn(n,Me()),null}function Gu(n,i){var a=Et;Et|=1;try{return n(i)}finally{Et=a,Et===0&&(ks=Me()+500,Va&&_r())}}function Zr(n){Mr!==null&&Mr.tag===0&&(Et&6)===0&&Bs();var i=Et;Et|=1;var a=li.transition,c=Lt;try{if(li.transition=null,Lt=1,n)return n()}finally{Lt=c,li.transition=a,Et=i,(Et&6)===0&&_r()}}function Wu(){Qn=Os.current,jt(Os)}function Qr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,M_(a)),Jt!==null)for(a=Jt.return;a!==null;){var c=a;switch(Jc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&za();break;case 3:Is(),jt(Bn),jt(Mn),du();break;case 5:uu(c);break;case 4:Is();break;case 13:jt($t);break;case 19:jt($t);break;case 10:su(c.type._context);break;case 22:case 23:Wu()}a=a.return}if(un=n,Jt=n=Tr(n.current,null),gn=Qn=i,sn=0,Ko=null,Ou=cl=Kr=0,Vn=Zo=null,Yr!==null){for(i=0;i<Yr.length;i++)if(a=Yr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var E=m.next;m.next=d,c.next=E}a.pending=c}Yr=null}return n}function tm(n,i){do{var a=Jt;try{if(ru(),Qa.current=nl,Ja){for(var c=Kt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ja=!1}if($r=0,cn=rn=Kt=null,Wo=!1,Xo=0,Fu.current=null,a===null||a.return===null){sn=1,Ko=i,Jt=null;break}e:{var m=n,E=a.return,I=a,B=i;if(i=gn,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var oe=B,ve=I,xe=ve.tag;if((ve.mode&1)===0&&(xe===0||xe===11||xe===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ie=Ap(E);if(Ie!==null){Ie.flags&=-257,Cp(Ie,E,I,m,i),Ie.mode&1&&Tp(m,oe,i),i=Ie,B=oe;var ze=i.updateQueue;if(ze===null){var Ve=new Set;Ve.add(B),i.updateQueue=Ve}else ze.add(B);break e}else{if((i&1)===0){Tp(m,oe,i),Xu();break e}B=Error(t(426))}}else if(Yt&&I.mode&1){var Qt=Ap(E);if(Qt!==null){(Qt.flags&65536)===0&&(Qt.flags|=256),Cp(Qt,E,I,m,i),nu(Us(B,I));break e}}m=B=Us(B,I),sn!==4&&(sn=2),Zo===null?Zo=[m]:Zo.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Z=Ep(m,B,i);Kf(m,Z);break e;case 1:I=B;var W=m.type,J=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(Sr===null||!Sr.has(J)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=wp(m,I,i);Kf(m,Te);break e}}m=m.return}while(m!==null)}rm(a)}catch(Ye){i=Ye,Jt===a&&a!==null&&(Jt=a=a.return);continue}break}while(!0)}function nm(){var n=ll.current;return ll.current=nl,n===null?nl:n}function Xu(){(sn===0||sn===3||sn===2)&&(sn=4),un===null||(Kr&268435455)===0&&(cl&268435455)===0||wr(un,gn)}function ml(n,i){var a=Et;Et|=2;var c=nm();(un!==n||gn!==i)&&(qi=null,Qr(n,i));do try{Y_();break}catch(d){tm(n,d)}while(!0);if(ru(),Et=a,ll.current=c,Jt!==null)throw Error(t(261));return un=null,gn=0,sn}function Y_(){for(;Jt!==null;)im(Jt)}function q_(){for(;Jt!==null&&!$();)im(Jt)}function im(n){var i=am(n.alternate,n,Qn);n.memoizedProps=n.pendingProps,i===null?rm(n):Jt=i,Fu.current=null}function rm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=z_(a,i,Qn),a!==null){Jt=a;return}}else{if(a=H_(a,i),a!==null){a.flags&=32767,Jt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{sn=6,Jt=null;return}}if(i=i.sibling,i!==null){Jt=i;return}Jt=i=n}while(i!==null);sn===0&&(sn=5)}function Jr(n,i,a){var c=Lt,d=li.transition;try{li.transition=null,Lt=1,$_(n,i,a,c)}finally{li.transition=d,Lt=c}return null}function $_(n,i,a,c){do Bs();while(Mr!==null);if((Et&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Ea(n,m),n===un&&(Jt=un=null,gn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||hl||(hl=!0,lm(at,function(){return Bs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=li.transition,li.transition=null;var E=Lt;Lt=1;var I=Et;Et|=4,Fu.current=null,G_(n,a),qp(a,n),m_(Xc),Aa=!!Wc,Xc=Wc=null,n.current=a,W_(a),Ae(),Et=I,Lt=E,li.transition=m}else n.current=a;if(hl&&(hl=!1,Mr=n,dl=d),m=n.pendingLanes,m===0&&(Sr=null),xn(a.stateNode),Gn(n,Me()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(ul)throw ul=!1,n=Bu,Bu=null,n;return(dl&1)!==0&&n.tag!==0&&Bs(),m=n.pendingLanes,(m&1)!==0?n===zu?Qo++:(Qo=0,zu=n):Qo=0,_r(),null}function Bs(){if(Mr!==null){var n=Xd(dl),i=li.transition,a=Lt;try{if(li.transition=null,Lt=16>n?16:n,Mr===null)var c=!1;else{if(n=Mr,Mr=null,dl=0,(Et&6)!==0)throw Error(t(331));var d=Et;for(Et|=4,Oe=n.current;Oe!==null;){var m=Oe,E=m.child;if((Oe.flags&16)!==0){var I=m.deletions;if(I!==null){for(var B=0;B<I.length;B++){var oe=I[B];for(Oe=oe;Oe!==null;){var ve=Oe;switch(ve.tag){case 0:case 11:case 15:$o(8,ve,m)}var xe=ve.child;if(xe!==null)xe.return=ve,Oe=xe;else for(;Oe!==null;){ve=Oe;var ge=ve.sibling,Ie=ve.return;if(Gp(ve),ve===oe){Oe=null;break}if(ge!==null){ge.return=Ie,Oe=ge;break}Oe=Ie}}}var ze=m.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var Qt=Ve.sibling;Ve.sibling=null,Ve=Qt}while(Ve!==null)}}Oe=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Oe=E;else e:for(;Oe!==null;){if(m=Oe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:$o(9,m,m.return)}var Z=m.sibling;if(Z!==null){Z.return=m.return,Oe=Z;break e}Oe=m.return}}var W=n.current;for(Oe=W;Oe!==null;){E=Oe;var J=E.child;if((E.subtreeFlags&2064)!==0&&J!==null)J.return=E,Oe=J;else e:for(E=W;Oe!==null;){if(I=Oe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:al(9,I)}}catch(Ye){Zt(I,I.return,Ye)}if(I===E){Oe=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,Oe=Te;break e}Oe=I.return}}if(Et=d,_r(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Rt,n)}catch{}c=!0}return c}finally{Lt=a,li.transition=i}}return!1}function sm(n,i,a){i=Us(a,i),i=Ep(n,i,1),n=yr(n,i,1),i=Dn(),n!==null&&(kn(n,1,i),Gn(n,i))}function Zt(n,i,a){if(n.tag===3)sm(n,n,a);else for(;i!==null;){if(i.tag===3){sm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Sr===null||!Sr.has(c))){n=Us(a,n),n=wp(i,n,1),i=yr(i,n,1),n=Dn(),i!==null&&(kn(i,1,n),Gn(i,n));break}}i=i.return}}function K_(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Dn(),n.pingedLanes|=n.suspendedLanes&a,un===n&&(gn&a)===a&&(sn===4||sn===3&&(gn&130023424)===gn&&500>Me()-ku?Qr(n,0):Ou|=a),Gn(n,i)}function om(n,i){i===0&&((n.mode&1)===0?i=1:(i=pi,pi<<=1,(pi&130023424)===0&&(pi=4194304)));var a=Dn();n=Xi(n,i),n!==null&&(kn(n,i,a),Gn(n,a))}function Z_(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),om(n,a)}function Q_(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),om(n,a)}var am;am=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Bn.current)Hn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Hn=!1,B_(n,i,a);Hn=(n.flags&131072)!==0}else Hn=!1,Yt&&(i.flags&1048576)!==0&&zf(i,Wa,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;sl(n,i),n=i.pendingProps;var d=Cs(i,Mn.current);Ns(i,a),d=mu(null,i,c,n,d,a);var m=gu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,zn(c)?(m=!0,Ha(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,lu(i),d.updater=il,i.stateNode=d,d._reactInternals=i,Mu(i,c,n,a),i=Au(null,i,c,!0,m,a)):(i.tag=0,Yt&&m&&Qc(i),Ln(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(sl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=ev(c),n=_i(c,n),d){case 0:i=Tu(null,i,c,n,a);break e;case 1:i=Np(null,i,c,n,a);break e;case 11:i=Rp(null,i,c,n,a);break e;case 14:i=bp(null,i,c,_i(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:_i(c,d),Tu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:_i(c,d),Np(n,i,c,d,a);case 3:e:{if(Ip(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,$f(n,i),Ka(i,c,null,a);var E=i.memoizedState;if(c=E.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Us(Error(t(423)),i),i=Up(n,i,c,a,d);break e}else if(c!==d){d=Us(Error(t(424)),i),i=Up(n,i,c,a,d);break e}else for(Zn=pr(i.stateNode.containerInfo.firstChild),Kn=i,Yt=!0,gi=null,a=Yf(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ps(),c===d){i=Yi(n,i,a);break e}Ln(n,i,c,a)}i=i.child}return i;case 5:return Qf(i),n===null&&tu(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,E=d.children,jc(c,d)?E=null:m!==null&&jc(c,m)&&(i.flags|=32),Dp(n,i),Ln(n,i,E,a),i.child;case 6:return n===null&&tu(i),null;case 13:return Fp(n,i,a);case 4:return cu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ls(i,null,c,a):Ln(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:_i(c,d),Rp(n,i,c,d,a);case 7:return Ln(n,i,i.pendingProps,a),i.child;case 8:return Ln(n,i,i.pendingProps.children,a),i.child;case 12:return Ln(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,E=d.value,Vt(Ya,c._currentValue),c._currentValue=E,m!==null)if(mi(m.value,E)){if(m.children===d.children&&!Bn.current){i=Yi(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){E=m.child;for(var B=I.firstContext;B!==null;){if(B.context===c){if(m.tag===1){B=ji(-1,a&-a),B.tag=2;var oe=m.updateQueue;if(oe!==null){oe=oe.shared;var ve=oe.pending;ve===null?B.next=B:(B.next=ve.next,ve.next=B),oe.pending=B}}m.lanes|=a,B=m.alternate,B!==null&&(B.lanes|=a),ou(m.return,a,i),I.lanes|=a;break}B=B.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=a,I=E.alternate,I!==null&&(I.lanes|=a),ou(E,a,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}Ln(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ns(i,a),d=oi(d),c=c(d),i.flags|=1,Ln(n,i,c,a),i.child;case 14:return c=i.type,d=_i(c,i.pendingProps),d=_i(c.type,d),bp(n,i,c,d,a);case 15:return Pp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:_i(c,d),sl(n,i),i.tag=1,zn(c)?(n=!0,Ha(i)):n=!1,Ns(i,a),Sp(i,c,d),Mu(i,c,d,a),Au(null,i,c,!0,n,a);case 19:return kp(n,i,a);case 22:return Lp(n,i,a)}throw Error(t(156,i.tag))};function lm(n,i){return ae(n,i)}function J_(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(n,i,a,c){return new J_(n,i,a,c)}function ju(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ev(n){if(typeof n=="function")return ju(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ne)return 11;if(n===re)return 14}return 2}function Tr(n,i){var a=n.alternate;return a===null?(a=ci(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function gl(n,i,a,c,d,m){var E=2;if(c=n,typeof n=="function")ju(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case U:return es(a.children,d,m,i);case O:E=8,d|=8;break;case b:return n=ci(12,a,i,d|2),n.elementType=b,n.lanes=m,n;case j:return n=ci(13,a,i,d),n.elementType=j,n.lanes=m,n;case X:return n=ci(19,a,i,d),n.elementType=X,n.lanes=m,n;case ue:return _l(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:E=10;break e;case k:E=9;break e;case ne:E=11;break e;case re:E=14;break e;case ce:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ci(E,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function es(n,i,a,c){return n=ci(7,n,c,i),n.lanes=a,n}function _l(n,i,a,c){return n=ci(22,n,c,i),n.elementType=ue,n.lanes=a,n.stateNode={isHidden:!1},n}function Yu(n,i,a){return n=ci(6,n,null,i),n.lanes=a,n}function qu(n,i,a){return i=ci(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function tv(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ii(0),this.expirationTimes=ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ii(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function $u(n,i,a,c,d,m,E,I,B){return n=new tv(n,i,a,I,B),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ci(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},lu(m),n}function nv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function cm(n){if(!n)return gr;n=n._reactInternals;e:{if(Ri(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(zn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(zn(a))return Of(n,a,i)}return i}function um(n,i,a,c,d,m,E,I,B){return n=$u(a,c,!0,n,d,m,E,I,B),n.context=cm(null),a=n.current,c=Dn(),d=Er(a),m=ji(c,d),m.callback=i??null,yr(a,m,d),n.current.lanes=d,kn(n,d,c),Gn(n,c),n}function vl(n,i,a,c){var d=i.current,m=Dn(),E=Er(d);return a=cm(a),i.context===null?i.context=a:i.pendingContext=a,i=ji(m,E),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=yr(d,i,E),n!==null&&(xi(n,d,E,m),$a(n,d,E)),E}function yl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function hm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Ku(n,i){hm(n,i),(n=n.alternate)&&hm(n,i)}function iv(){return null}var dm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Zu(n){this._internalRoot=n}xl.prototype.render=Zu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));vl(n,i,null,null)},xl.prototype.unmount=Zu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Zr(function(){vl(null,n,null,null)}),i[Hi]=null}};function xl(n){this._internalRoot=n}xl.prototype.unstable_scheduleHydration=function(n){if(n){var i=qd();n={blockedOn:null,target:n,priority:i};for(var a=0;a<hr.length&&i!==0&&i<hr[a].priority;a++);hr.splice(a,0,n),a===0&&Zd(n)}};function Qu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Sl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function fm(){}function rv(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var oe=yl(E);m.call(oe)}}var E=um(i,c,n,0,null,!1,!1,"",fm);return n._reactRootContainer=E,n[Hi]=E.current,Fo(n.nodeType===8?n.parentNode:n),Zr(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var oe=yl(B);I.call(oe)}}var B=$u(n,0,!1,null,null,!1,!1,"",fm);return n._reactRootContainer=B,n[Hi]=B.current,Fo(n.nodeType===8?n.parentNode:n),Zr(function(){vl(i,B,a,c)}),B}function Ml(n,i,a,c,d){var m=a._reactRootContainer;if(m){var E=m;if(typeof d=="function"){var I=d;d=function(){var B=yl(E);I.call(B)}}vl(i,E,n,d)}else E=rv(a,i,n,d,c);return yl(E)}jd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=nn(i.pendingLanes);a!==0&&(Mc(i,a|1),Gn(i,Me()),(Et&6)===0&&(ks=Me()+500,_r()))}break;case 13:Zr(function(){var c=Xi(n,1);if(c!==null){var d=Dn();xi(c,n,1,d)}}),Ku(n,1)}},Ec=function(n){if(n.tag===13){var i=Xi(n,134217728);if(i!==null){var a=Dn();xi(i,n,134217728,a)}Ku(n,134217728)}},Yd=function(n){if(n.tag===13){var i=Er(n),a=Xi(n,i);if(a!==null){var c=Dn();xi(a,n,i,c)}Ku(n,i)}},qd=function(){return Lt},$d=function(n,i){var a=Lt;try{return Lt=n,i()}finally{Lt=a}},Pe=function(n,i,a){switch(i){case"input":if(mt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Ba(c);if(!d)throw Error(t(90));yt(c),mt(c,d)}}}break;case"textarea":me(n,a);break;case"select":i=a.value,i!=null&&D(n,!!a.multiple,i,!1)}},Wt=Gu,tn=Zr;var sv={usingClientEntryPoint:!1,Events:[Bo,Ts,Ba,De,ut,Gu]},Jo={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ov={bundleType:Jo.bundleType,version:Jo.version,rendererPackageName:Jo.rendererPackageName,rendererConfig:Jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=R(n),n===null?null:n.stateNode},findFiberByHostInstance:Jo.findFiberByHostInstance||iv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{Rt=El.inject(ov),xt=El}catch{}}return Wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sv,Wn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qu(i))throw Error(t(200));return nv(n,i,null,a)},Wn.createRoot=function(n,i){if(!Qu(n))throw Error(t(299));var a=!1,c="",d=dm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=$u(n,1,!1,null,null,a,!1,c,d),n[Hi]=i.current,Fo(n.nodeType===8?n.parentNode:n),new Zu(i)},Wn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=R(i),n=n===null?null:n.stateNode,n},Wn.flushSync=function(n){return Zr(n)},Wn.hydrate=function(n,i,a){if(!Sl(i))throw Error(t(200));return Ml(null,n,i,!0,a)},Wn.hydrateRoot=function(n,i,a){if(!Qu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",E=dm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=um(i,null,n,1,a??null,d,!1,m,E),n[Hi]=i.current,Fo(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new xl(i)},Wn.render=function(n,i,a){if(!Sl(i))throw Error(t(200));return Ml(null,n,i,!1,a)},Wn.unmountComponentAtNode=function(n){if(!Sl(n))throw Error(t(40));return n._reactRootContainer?(Zr(function(){Ml(null,null,n,!1,function(){n._reactRootContainer=null,n[Hi]=null})}),!0):!1},Wn.unstable_batchedUpdates=Gu,Wn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Sl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ml(n,i,a,!1,c)},Wn.version="18.3.1-next-f1338f8080-20240426",Wn}var Sm;function _v(){if(Sm)return th.exports;Sm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),th.exports=gv(),th.exports}var Mm;function vv(){if(Mm)return wl;Mm=1;var s=_v();return wl.createRoot=s.createRoot,wl.hydrateRoot=s.hydrateRoot,wl}var yv=vv();const xv=Vg(yv);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Mv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=Dt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...h},f)=>Dt.createElement("svg",{ref:f,...Mv,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:Gg("lucide",o),...h},[...u.map(([p,g])=>Dt.createElement(p,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=(s,e)=>{const t=Dt.forwardRef(({className:r,...o},l)=>Dt.createElement(Ev,{ref:l,iconNode:e,className:Gg(`lucide-${Sv(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=zt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=zt("BatteryCharging",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=zt("Bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=zt("Bus",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=zt("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=zt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=zt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=zt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=zt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=zt("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=zt("PhoneOff",[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=zt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=zt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=zt("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=zt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=zt("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=zt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=zt("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=zt("Signal",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=zt("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=zt("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=zt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=zt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=zt("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=zt("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=zt("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=zt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),jv=[{id:1,title:"Abordaje Seguro NFC",subtitle:"Parada 1 · Sofía M. + notificación"},{id:2,title:"Descenso + Tutor Verificado",subtitle:"Parada 2 · Doble NFC escolar"},{id:3,title:"Parada No Autorizada",subtitle:"Parada 3 · Alerta crítica geocerca"},{id:4,title:"Alerta Silenciosa (Género)",subtitle:"Protocolo Violeta · Doble toque NFC"}];function Yv(s){switch(s){case"A bordo":return"abordo";case"Entregado":return"entregado";case"Alerta":return"alerta";case"Protocolo Violeta":return"violeta";default:return"esperando"}}const qv=({telemetry:s,passengers:e,logs:t,activeScenario:r,runningScenario:o,activeAlert:l,onRunScenario:u,onReset:h})=>{const f=e.filter(_=>_.status==="A bordo"||_.status==="Alerta"||_.status==="Protocolo Violeta").length,p=s.geofenceStatus==="SEGURA"?"safe":s.geofenceStatus==="RIESGO"?"danger":"warning",g=s.securityLevel==="ÓPTIMO"?"safe":s.securityLevel==="ALERTA CRÍTICA"?"danger":s.securityLevel==="PROTOCOLO VIOLETA"?"violet":"warning",y=s.securityLevel==="ALERTA CRÍTICA"?"CRÍTICA":s.securityLevel==="PROTOCOLO VIOLETA"?"P. VIOLETA":s.securityLevel;return H.jsxs("section",{className:"zone-dashboard","aria-label":"Panel de Control de Simulación NFC y Telemetría",children:[H.jsxs("div",{className:"panel-header",children:[H.jsxs("div",{className:"panel-heading",children:[H.jsx(wv,{size:14,color:"#34D399"}),H.jsx("span",{children:"Simular Escenario en Vivo · Monitoreo Central"})]}),H.jsxs("button",{type:"button",className:"reset-btn",onClick:h,children:[H.jsx(Uv,{size:12}),H.jsx("span",{children:"Reiniciar Simulación"})]})]}),H.jsx("div",{className:"scenario-grid",children:jv.map(_=>{const S=o===_.id,M=r===_.id;return H.jsxs("button",{type:"button",className:`scenario-btn sc-${_.id} ${M?"active":""} ${S?"running":""}`,onClick:()=>u(_.id),children:[H.jsx("span",{className:"sc-num mono",children:_.id}),H.jsxs("span",{className:"sc-text",children:[H.jsx("div",{className:"sc-title",children:_.title}),H.jsx("div",{className:"sc-sub",children:_.subtitle})]}),H.jsx(Iv,{size:12,style:{opacity:S?1:.45,flexShrink:0}})]},_.id)})}),l&&H.jsxs("div",{className:`alert-banner ${l.type}`,role:"alert",children:[l.type==="violet"?H.jsx(ao,{size:15,color:"#F0ABFC",style:{flexShrink:0,marginTop:1}}):H.jsx(Hv,{size:15,color:"#FCA5A5",style:{flexShrink:0,marginTop:1}}),H.jsxs("div",{style:{minWidth:0,flex:1},children:[H.jsxs("div",{className:"alert-banner-title",children:[l.title," · ",H.jsx("span",{className:"mono",children:l.timestamp})]}),H.jsx("div",{className:"alert-banner-desc",children:l.details})]})]}),H.jsxs("div",{className:"kpi-grid",children:[H.jsxs("div",{className:"kpi-card",children:[H.jsx("span",{className:"kpi-label",children:"Unidad / Vel."}),H.jsxs("span",{className:"kpi-value mono kpi-compact",children:[s.unitId," · ",H.jsxs("span",{style:{color:"#38BDF8"},children:[s.speedKmh," km/h"]})]})]}),H.jsxs("div",{className:"kpi-card",children:[H.jsx("span",{className:"kpi-label",children:"A bordo"}),H.jsxs("span",{className:"kpi-value mono kpi-compact",children:[f," ",H.jsxs("span",{style:{fontSize:10,color:"#94A3B8",fontWeight:600},children:["/ ",e.length," reg."]})]})]}),H.jsxs("div",{className:"kpi-card",children:[H.jsx("span",{className:"kpi-label",children:"Geocerca"}),H.jsx("span",{className:`kpi-value kpi-compact ${p}`,children:s.geofenceStatus})]}),H.jsxs("div",{className:"kpi-card",children:[H.jsx("span",{className:"kpi-label",children:"Seguridad"}),H.jsx("span",{className:`kpi-value kpi-compact ${g}`,children:y})]})]}),H.jsxs("div",{className:"telemetry-split",children:[H.jsxs("div",{className:"sub-panel",children:[H.jsxs("div",{className:"sub-panel-header",children:[H.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5},children:[H.jsx(Vv,{size:11,color:"#34D399"})," Pasajeros (",f," a bordo)"]}),H.jsx("span",{style:{fontSize:9.2,color:"#64748B"},children:"NFC"})]}),H.jsx("div",{className:"scroll-list",children:e.map(_=>H.jsxs("div",{className:"passenger-row",children:[H.jsxs("div",{style:{minWidth:0},children:[H.jsx("div",{className:"p-name",children:_.name}),H.jsxs("div",{className:"p-meta",children:[_.role," · ",H.jsx("span",{className:"mono",children:_.tagId})]})]}),H.jsx("span",{className:`status-chip ${Yv(_.status)}`,children:_.status})]},_.id))})]}),H.jsxs("div",{className:"sub-panel",children:[H.jsxs("div",{className:"sub-panel-header",children:[H.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5},children:[H.jsx(ac,{size:11,color:"#38BDF8"})," Bitácora NFC en Vivo"]}),H.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:3,fontSize:9.2,color:"#64748B"},children:[H.jsx(Pv,{size:10})," ",t.length," ",t.length===1?"evento":"eventos"]})]}),H.jsx("div",{className:"scroll-list",children:t.map(_=>H.jsxs("div",{className:`log-item ${_.severity}`,children:[H.jsxs("div",{className:"log-top",children:[H.jsx("strong",{style:{color:"#FFFFFF",fontSize:10.4},children:_.passengerName}),H.jsx("span",{className:"log-time mono",children:_.timestamp})]}),H.jsx("div",{style:{color:"#CBD5E1"},children:_.event}),H.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:2,gap:4},children:[H.jsx("span",{style:{fontSize:9.2,color:"#8B9BB4"},children:_.stopName}),H.jsx("span",{className:"log-tag mono",children:_.tagId})]})]},_.id))})]})]}),H.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:10,color:"#8B9BB4",paddingTop:1,flexShrink:0},children:[H.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5},children:[H.jsx(Ov,{size:11,color:"#10B981"})," Ubicación actual: ",H.jsx("strong",{style:{color:"#E2E8F0"},children:s.currentStopLabel})]}),H.jsxs("span",{className:"mono",children:[s.coordinates.lat.toFixed(4),"° N, ",Math.abs(s.coordinates.lng).toFixed(4),"° O"]})]})]})},$v=({notifications:s,telemetry:e,lightingMode:t})=>{const[r,o]=Dt.useState(null),l=t==="night"?"22:45":"07:14",u=s[0];return H.jsxs("section",{className:"zone-phone","aria-label":"Mockup móvil de notificaciones en tiempo real",children:[H.jsxs("div",{className:"phone-zone-header",children:[H.jsxs("div",{className:"panel-heading",children:[H.jsx(Bv,{size:14,color:"#38BDF8"}),H.jsx("span",{children:"App Familiar / Contactos de Confianza (Tiempo Real)"})]}),H.jsxs("span",{className:"mono",style:{fontSize:10,color:"#94A3B8",display:"inline-flex",alignItems:"center",gap:5},children:[H.jsx(Av,{size:11,color:"#34D399"})," ",s.length," ",s.length===1?"notificación push":"notificaciones push"]})]}),H.jsx("div",{className:"phone-stage",children:H.jsxs("div",{className:"phone-device",children:[H.jsxs("div",{className:"phone-statusbar",children:[H.jsx("span",{className:"mono",children:l}),H.jsx("div",{className:"phone-island",children:H.jsx("span",{className:"phone-cam-dot"})}),H.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5},children:[H.jsx(kv,{size:11}),H.jsx(ac,{size:11}),H.jsx(Tv,{size:12,color:"#34D399"})]})]}),H.jsxs("div",{className:"phone-appbar",children:[H.jsxs("div",{className:"phone-app-title",children:[H.jsx(Wg,{size:13,color:"#34D399"}),H.jsx("span",{children:"Pulso Familiar"}),H.jsx("span",{style:{fontSize:9,fontWeight:700,padding:"2px 6px",borderRadius:999,background:"rgba(16,185,129,0.16)",color:"#6EE7B7"},children:"EN VIVO"})]}),H.jsx("span",{style:{fontSize:10,color:"#94A3B8"},children:u?u.recipientLabel:"Madre / Contacto"})]}),H.jsx("div",{className:"phone-feed",children:s.map(h=>H.jsxs("article",{className:`push-card ${h.variant}`,children:[H.jsxs("div",{className:"push-top",children:[H.jsxs("span",{className:"push-badge",children:[h.variant==="safe"&&H.jsx(bv,{size:10}),h.variant==="danger"&&H.jsx(ao,{size:10}),h.variant==="violet"&&H.jsx(ao,{size:10}),h.badge]}),H.jsx("span",{className:"mono",style:{fontSize:9.5,color:"#CBD5E1"},children:h.timestamp})]}),H.jsx("div",{className:"push-title",children:h.title}),H.jsx("div",{className:"push-body",children:h.body}),h.gpsCoords&&H.jsxs("div",{className:"mono",style:{marginTop:5,fontSize:9.5,color:h.variant==="violet"?"#F5D0FE":"#FCA5A5",display:"flex",alignItems:"center",gap:4},children:[H.jsx(Tl,{size:10})," GPS: ",h.gpsCoords]}),h.actions&&H.jsxs("div",{className:"push-actions",children:[h.actions.callDriver&&H.jsxs("button",{type:"button",className:"phone-action-btn red",onClick:()=>o("call"),children:[H.jsx(rh,{size:11})," Llamar al chofer"]}),h.actions.viewGps&&H.jsxs("button",{type:"button",className:"phone-action-btn outline",onClick:()=>o("gps"),children:[H.jsx(Tl,{size:11})," Ver GPS"]}),h.actions.viewC4&&H.jsxs("button",{type:"button",className:"phone-action-btn violet",onClick:()=>o("c4"),children:[H.jsx(Tl,{size:11})," Ubicación en Vivo / C4"]})]})]},h.id))}),r&&H.jsxs("div",{className:"phone-modal",children:[H.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[H.jsx("strong",{style:{fontSize:11.5,display:"inline-flex",alignItems:"center",gap:6},children:r==="call"?H.jsxs(H.Fragment,{children:[H.jsx(rh,{size:13,color:"#34D399"})," Llamada Prioritaria · Unidad 04"]}):r==="c4"?H.jsxs(H.Fragment,{children:[H.jsx(ao,{size:13,color:"#E879F9"})," Protocolo Violeta · Enlace C4"]}):H.jsxs(H.Fragment,{children:[H.jsx(Tl,{size:13,color:"#F87171"})," Rastreo GPS en Tiempo Real"]})}),H.jsx("button",{type:"button",onClick:()=>o(null),style:{background:"rgba(255,255,255,0.08)",border:"none",color:"#fff",borderRadius:6,width:22,height:22,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},"aria-label":"Cerrar vista móvil",children:H.jsx(Xv,{size:13})})]}),r==="call"?H.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6,textAlign:"center"},children:[H.jsx("div",{style:{width:42,height:42,borderRadius:"50%",background:"rgba(16,185,129,0.2)",border:"1px solid #34D399",display:"flex",alignItems:"center",justifyContent:"center"},children:H.jsx(rh,{size:18,color:"#34D399"})}),H.jsx("div",{style:{fontSize:12,fontWeight:700},children:"Operador Roberto G. · Unidad 04"}),H.jsx("div",{style:{fontSize:10.5,color:"#34D399"},className:"mono",children:"Línea directa conectada · Monitoreo en copia"})]}):H.jsxs("div",{className:"gps-radar",children:[H.jsx("div",{className:"radar-ping",style:{background:r==="c4"?"#D946EF":"#EF4444",color:r==="c4"?"#D946EF":"#EF4444"}}),H.jsxs("div",{className:"mono",style:{position:"absolute",bottom:6,left:8,right:8,display:"flex",justifyContent:"space-between",fontSize:9.5,color:"#E2E8F0"},children:[H.jsxs("span",{children:[e.coordinates.lat.toFixed(4),"°N, ",Math.abs(e.coordinates.lng).toFixed(4),"°O"]}),H.jsx("span",{style:{color:r==="c4"?"#F0ABFC":"#FCA5A5"},children:r==="c4"?"C4 + AUDIO ENCRIPTADO":e.geofenceStatus})]})]}),H.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:8},children:[H.jsx("span",{style:{fontSize:10,color:"#94A3B8"},children:e.currentStopLabel}),H.jsx("button",{type:"button",className:`phone-action-btn ${r==="call"?"red":"outline"}`,onClick:()=>o(null),children:r==="call"?H.jsxs(H.Fragment,{children:[H.jsx(Nv,{size:11})," Colgar"]}):"Volver a alertas"})]})]})]})})]})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bd="170",lo={ROTATE:0,DOLLY:1,PAN:2},ro={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kv=0,Em=1,Zv=2,Xg=1,jg=2,er=3,kr=0,qn=1,vn=2,Fr=0,co=1,wm=2,Tm=3,Am=4,Qv=5,ls=100,Jv=101,ey=102,ty=103,ny=104,iy=200,ry=201,sy=202,oy=203,zh=204,Hh=205,ay=206,ly=207,cy=208,uy=209,hy=210,dy=211,fy=212,py=213,my=214,Vh=0,Gh=1,Wh=2,fo=3,Xh=4,jh=5,Yh=6,qh=7,Yg=0,gy=1,_y=2,Or=0,vy=1,yy=2,xy=3,qg=4,Sy=5,My=6,Ey=7,$g=300,po=301,mo=302,$h=303,Kh=304,gc=306,Zh=1e3,us=1001,Qh=1002,Ci=1003,wy=1004,Al=1005,Fi=1006,sh=1007,hs=1008,sr=1009,Kg=1010,Zg=1011,ma=1012,Pd=1013,ds=1014,tr=1015,ga=1016,Ld=1017,Dd=1018,go=1020,Qg=35902,Jg=1021,e0=1022,Ai=1023,t0=1024,n0=1025,uo=1026,_o=1027,i0=1028,Nd=1029,r0=1030,Id=1031,Ud=1033,tc=33776,nc=33777,ic=33778,rc=33779,Jh=35840,ed=35841,td=35842,nd=35843,id=36196,rd=37492,sd=37496,od=37808,ad=37809,ld=37810,cd=37811,ud=37812,hd=37813,dd=37814,fd=37815,pd=37816,md=37817,gd=37818,_d=37819,vd=37820,yd=37821,sc=36492,xd=36494,Sd=36495,s0=36283,Md=36284,Ed=36285,wd=36286,Ty=3200,Ay=3201,o0=0,Cy=1,Ur="",fn="srgb",xo="srgb-linear",_c="linear",Ft="srgb",zs=7680,Cm=519,Ry=512,by=513,Py=514,a0=515,Ly=516,Dy=517,Ny=518,Iy=519,Td=35044,Rm="300 es",nr=2e3,lc=2001;class ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bm=1234567;const fa=Math.PI/180,vo=180/Math.PI;function ir(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(An[s&255]+An[s>>8&255]+An[s>>16&255]+An[s>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]).toLowerCase()}function yn(s,e,t){return Math.max(e,Math.min(t,s))}function Fd(s,e){return(s%e+e)%e}function Uy(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function Fy(s,e,t){return s!==e?(t-s)/(e-s):0}function pa(s,e,t){return(1-t)*s+t*e}function Oy(s,e,t,r){return pa(s,e,1-Math.exp(-t*r))}function ky(s,e=1){return e-Math.abs(Fd(s,e*2)-e)}function By(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function zy(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Hy(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Vy(s,e){return s+Math.random()*(e-s)}function Gy(s){return s*(.5-Math.random())}function Wy(s){s!==void 0&&(bm=s);let e=bm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Xy(s){return s*fa}function jy(s){return s*vo}function Yy(s){return(s&s-1)===0&&s!==0}function qy(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $y(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ky(s,e,t,r,o){const l=Math.cos,u=Math.sin,h=l(t/2),f=u(t/2),p=l((e+r)/2),g=u((e+r)/2),y=l((e-r)/2),_=u((e-r)/2),S=l((r-e)/2),M=u((r-e)/2);switch(o){case"XYX":s.set(h*g,f*y,f*_,h*p);break;case"YZY":s.set(f*_,h*g,f*y,h*p);break;case"ZXZ":s.set(f*y,f*_,h*g,h*p);break;case"XZX":s.set(h*g,f*M,f*S,h*p);break;case"YXY":s.set(f*S,h*g,f*M,h*p);break;case"ZYZ":s.set(f*M,f*S,h*g,h*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ti(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ti={DEG2RAD:fa,RAD2DEG:vo,generateUUID:ir,clamp:yn,euclideanModulo:Fd,mapLinear:Uy,inverseLerp:Fy,lerp:pa,damp:Oy,pingpong:ky,smoothstep:By,smootherstep:zy,randInt:Hy,randFloat:Vy,randFloatSpread:Gy,seededRandom:Wy,degToRad:Xy,radToDeg:jy,isPowerOfTwo:Yy,ceilPowerOfTwo:qy,floorPowerOfTwo:$y,setQuaternionFromProperEuler:Ky,normalize:Nt,denormalize:Ti};class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(yn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,r,o,l,u,h,f,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,h,f,p)}set(e,t,r,o,l,u,h,f,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=t,g[4]=l,g[5]=f,g[6]=r,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],h=r[3],f=r[6],p=r[1],g=r[4],y=r[7],_=r[2],S=r[5],M=r[8],w=o[0],x=o[3],v=o[6],L=o[1],P=o[4],T=o[7],G=o[2],F=o[5],U=o[8];return l[0]=u*w+h*L+f*G,l[3]=u*x+h*P+f*F,l[6]=u*v+h*T+f*U,l[1]=p*w+g*L+y*G,l[4]=p*x+g*P+y*F,l[7]=p*v+g*T+y*U,l[2]=_*w+S*L+M*G,l[5]=_*x+S*P+M*F,l[8]=_*v+S*T+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],f=e[6],p=e[7],g=e[8];return t*u*g-t*h*p-r*l*g+r*h*f+o*l*p-o*u*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],f=e[6],p=e[7],g=e[8],y=g*u-h*p,_=h*f-g*l,S=p*l-u*f,M=t*y+r*_+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=y*w,e[1]=(o*p-g*r)*w,e[2]=(h*r-o*u)*w,e[3]=_*w,e[4]=(g*t-o*f)*w,e[5]=(o*l-h*t)*w,e[6]=S*w,e[7]=(r*f-p*t)*w,e[8]=(u*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,h){const f=Math.cos(l),p=Math.sin(l);return this.set(r*f,r*p,-r*(f*u+p*h)+u+e,-o*p,o*f,-o*(-p*u+f*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(oh.makeScale(e,t)),this}rotate(e){return this.premultiply(oh.makeRotation(-e)),this}translate(e,t){return this.premultiply(oh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oh=new dt;function l0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function cc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zy(){const s=cc("canvas");return s.style.display="block",s}const Pm={};function ha(s){s in Pm||(Pm[s]=!0,console.warn(s))}function Qy(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function Jy(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ex(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Tt={enabled:!0,workingColorSpace:xo,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ft&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ft&&(s.r=ho(s.r),s.g=ho(s.g),s.b=ho(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ur?_c:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function rr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ho(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Lm=[.64,.33,.3,.6,.15,.06],Dm=[.2126,.7152,.0722],Nm=[.3127,.329],Im=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Um=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Tt.define({[xo]:{primaries:Lm,whitePoint:Nm,transfer:_c,toXYZ:Im,fromXYZ:Um,luminanceCoefficients:Dm,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:Lm,whitePoint:Nm,transfer:Ft,toXYZ:Im,fromXYZ:Um,luminanceCoefficients:Dm,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}});let Hs;class tx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hs===void 0&&(Hs=cc("canvas")),Hs.width=e.width,Hs.height=e.height;const r=Hs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=rr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(rr(t[r]/255)*255):t[r]=rr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nx=0;class c0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=ir(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?l.push(ah(o[u].image)):l.push(ah(o[u]))}else l=ah(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function ah(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?tx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ix=0;class Fn extends ms{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,r=us,o=us,l=Fi,u=hs,h=Ai,f=sr,p=Fn.DEFAULT_ANISOTROPY,g=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=ir(),this.name="",this.source=new c0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=f,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$g)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zh:e.x=e.x-Math.floor(e.x);break;case us:e.x=e.x<0?0:1;break;case Qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zh:e.y=e.y-Math.floor(e.y);break;case us:e.y=e.y<0?0:1;break;case Qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=$g;Fn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,r=0,o=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const f=e.elements,p=f[0],g=f[4],y=f[8],_=f[1],S=f[5],M=f[9],w=f[2],x=f[6],v=f[10];if(Math.abs(g-_)<.01&&Math.abs(y-w)<.01&&Math.abs(M-x)<.01){if(Math.abs(g+_)<.1&&Math.abs(y+w)<.1&&Math.abs(M+x)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,T=(S+1)/2,G=(v+1)/2,F=(g+_)/4,U=(y+w)/4,O=(M+x)/4;return P>T&&P>G?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=F/r,l=U/r):T>G?T<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(T),r=F/o,l=O/o):G<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(G),r=U/l,o=O/l),this.set(r,o,l,t),this}let L=Math.sqrt((x-M)*(x-M)+(y-w)*(y-w)+(_-g)*(_-g));return Math.abs(L)<.001&&(L=1),this.x=(x-M)/L,this.y=(y-w)/L,this.z=(_-g)/L,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rx extends ms{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Fn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let h=0;h<u;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new c0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends rx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class u0 extends Fn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sx extends Fn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Ci,this.minFilter=Ci,this.wrapR=us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ps{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,h){let f=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];const _=l[u+0],S=l[u+1],M=l[u+2],w=l[u+3];if(h===0){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(h===1){e[t+0]=_,e[t+1]=S,e[t+2]=M,e[t+3]=w;return}if(y!==w||f!==_||p!==S||g!==M){let x=1-h;const v=f*_+p*S+g*M+y*w,L=v>=0?1:-1,P=1-v*v;if(P>Number.EPSILON){const G=Math.sqrt(P),F=Math.atan2(G,v*L);x=Math.sin(x*F)/G,h=Math.sin(h*F)/G}const T=h*L;if(f=f*x+_*T,p=p*x+S*T,g=g*x+M*T,y=y*x+w*T,x===1-h){const G=1/Math.sqrt(f*f+p*p+g*g+y*y);f*=G,p*=G,g*=G,y*=G}}e[t]=f,e[t+1]=p,e[t+2]=g,e[t+3]=y}static multiplyQuaternionsFlat(e,t,r,o,l,u){const h=r[o],f=r[o+1],p=r[o+2],g=r[o+3],y=l[u],_=l[u+1],S=l[u+2],M=l[u+3];return e[t]=h*M+g*y+f*S-p*_,e[t+1]=f*M+g*_+p*y-h*S,e[t+2]=p*M+g*S+h*_-f*y,e[t+3]=g*M-h*y-f*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,h=Math.cos,f=Math.sin,p=h(r/2),g=h(o/2),y=h(l/2),_=f(r/2),S=f(o/2),M=f(l/2);switch(u){case"XYZ":this._x=_*g*y+p*S*M,this._y=p*S*y-_*g*M,this._z=p*g*M+_*S*y,this._w=p*g*y-_*S*M;break;case"YXZ":this._x=_*g*y+p*S*M,this._y=p*S*y-_*g*M,this._z=p*g*M-_*S*y,this._w=p*g*y+_*S*M;break;case"ZXY":this._x=_*g*y-p*S*M,this._y=p*S*y+_*g*M,this._z=p*g*M+_*S*y,this._w=p*g*y-_*S*M;break;case"ZYX":this._x=_*g*y-p*S*M,this._y=p*S*y+_*g*M,this._z=p*g*M-_*S*y,this._w=p*g*y+_*S*M;break;case"YZX":this._x=_*g*y+p*S*M,this._y=p*S*y+_*g*M,this._z=p*g*M-_*S*y,this._w=p*g*y-_*S*M;break;case"XZY":this._x=_*g*y-p*S*M,this._y=p*S*y-_*g*M,this._z=p*g*M+_*S*y,this._w=p*g*y+_*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],h=t[5],f=t[9],p=t[2],g=t[6],y=t[10],_=r+h+y;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-f)*S,this._y=(l-p)*S,this._z=(u-o)*S}else if(r>h&&r>y){const S=2*Math.sqrt(1+r-h-y);this._w=(g-f)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+p)/S}else if(h>y){const S=2*Math.sqrt(1+h-r-y);this._w=(l-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(f+g)/S}else{const S=2*Math.sqrt(1+y-r-h);this._w=(u-o)/S,this._x=(l+p)/S,this._y=(f+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,h=t._x,f=t._y,p=t._z,g=t._w;return this._x=r*g+u*h+o*p-l*f,this._y=o*g+u*f+l*h-r*p,this._z=l*g+u*p+r*f-o*h,this._w=u*g-r*h-o*f-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let h=u*e._w+r*e._x+o*e._y+l*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const f=1-h*h;if(f<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*r+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(f),g=Math.atan2(p,h),y=Math.sin((1-t)*g)/p,_=Math.sin(t*g)/p;return this._w=u*y+this._w*_,this._x=r*y+this._x*_,this._y=o*y+this._y*_,this._z=l*y+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,r=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,h=e.z,f=e.w,p=2*(u*o-h*r),g=2*(h*t-l*o),y=2*(l*r-u*t);return this.x=t+f*p+u*y-h*g,this.y=r+f*g+h*p-l*y,this.z=o+f*y+l*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,h=t.y,f=t.z;return this.x=o*f-l*h,this.y=l*u-r*f,this.z=r*h-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return lh.copy(this).projectOnVector(e),this.sub(lh)}reflect(e){return this.sub(lh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(yn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lh=new z,Fm=new ps;class _a{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=l.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Si):Si.fromBufferAttribute(l,u),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Cl.copy(r.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),Rl.subVectors(this.max,ta),Vs.subVectors(e.a,ta),Gs.subVectors(e.b,ta),Ws.subVectors(e.c,ta),Cr.subVectors(Gs,Vs),Rr.subVectors(Ws,Gs),ts.subVectors(Vs,Ws);let t=[0,-Cr.z,Cr.y,0,-Rr.z,Rr.y,0,-ts.z,ts.y,Cr.z,0,-Cr.x,Rr.z,0,-Rr.x,ts.z,0,-ts.x,-Cr.y,Cr.x,0,-Rr.y,Rr.x,0,-ts.y,ts.x,0];return!ch(t,Vs,Gs,Ws,Rl)||(t=[1,0,0,0,1,0,0,0,1],!ch(t,Vs,Gs,Ws,Rl))?!1:(bl.crossVectors(Cr,Rr),t=[bl.x,bl.y,bl.z],ch(t,Vs,Gs,Ws,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $i=[new z,new z,new z,new z,new z,new z,new z,new z],Si=new z,Cl=new _a,Vs=new z,Gs=new z,Ws=new z,Cr=new z,Rr=new z,ts=new z,ta=new z,Rl=new z,bl=new z,ns=new z;function ch(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ns.fromArray(s,l);const h=o.x*Math.abs(ns.x)+o.y*Math.abs(ns.y)+o.z*Math.abs(ns.z),f=e.dot(ns),p=t.dot(ns),g=r.dot(ns);if(Math.max(-Math.max(f,p,g),Math.min(f,p,g))>h)return!1}return!0}const ox=new _a,na=new z,uh=new z;class va{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):ox.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const t=na.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(na,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(uh)),this.expandByPoint(na.copy(e.center).sub(uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new z,hh=new z,Pl=new z,br=new z,dh=new z,Ll=new z,fh=new z;class vc{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){hh.copy(e).add(t).multiplyScalar(.5),Pl.copy(t).sub(e).normalize(),br.copy(this.origin).sub(hh);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Pl),h=br.dot(this.direction),f=-br.dot(Pl),p=br.lengthSq(),g=Math.abs(1-u*u);let y,_,S,M;if(g>0)if(y=u*f-h,_=u*h-f,M=l*g,y>=0)if(_>=-M)if(_<=M){const w=1/g;y*=w,_*=w,S=y*(y+u*_+2*h)+_*(u*y+_+2*f)+p}else _=l,y=Math.max(0,-(u*_+h)),S=-y*y+_*(_+2*f)+p;else _=-l,y=Math.max(0,-(u*_+h)),S=-y*y+_*(_+2*f)+p;else _<=-M?(y=Math.max(0,-(-u*l+h)),_=y>0?-l:Math.min(Math.max(-l,-f),l),S=-y*y+_*(_+2*f)+p):_<=M?(y=0,_=Math.min(Math.max(-l,-f),l),S=_*(_+2*f)+p):(y=Math.max(0,-(u*l+h)),_=y>0?l:Math.min(Math.max(-l,-f),l),S=-y*y+_*(_+2*f)+p);else _=u>0?-l:l,y=Math.max(0,-(u*_+h)),S=-y*y+_*(_+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(hh).addScaledVector(Pl,_),S}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);const r=Ki.dot(this.direction),o=Ki.dot(Ki)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),h=r-u,f=r+u;return f<0?null:h<0?this.at(f,t):this.at(h,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,h,f;const p=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),g>=0?(l=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),y>=0?(h=(e.min.z-_.z)*y,f=(e.max.z-_.z)*y):(h=(e.max.z-_.z)*y,f=(e.min.z-_.z)*y),r>f||h>o)||((h>r||r!==r)&&(r=h),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,r,o,l){dh.subVectors(t,e),Ll.subVectors(r,e),fh.crossVectors(dh,Ll);let u=this.direction.dot(fh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;br.subVectors(this.origin,e);const f=h*this.direction.dot(Ll.crossVectors(br,Ll));if(f<0)return null;const p=h*this.direction.dot(dh.cross(br));if(p<0||f+p>u)return null;const g=-h*br.dot(fh);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,t,r,o,l,u,h,f,p,g,y,_,S,M,w,x){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,h,f,p,g,y,_,S,M,w,x)}set(e,t,r,o,l,u,h,f,p,g,y,_,S,M,w,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=h,v[13]=f,v[2]=p,v[6]=g,v[10]=y,v[14]=_,v[3]=S,v[7]=M,v[11]=w,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Xs.setFromMatrixColumn(e,0).length(),l=1/Xs.setFromMatrixColumn(e,1).length(),u=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),h=Math.sin(r),f=Math.cos(o),p=Math.sin(o),g=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const _=u*g,S=u*y,M=h*g,w=h*y;t[0]=f*g,t[4]=-f*y,t[8]=p,t[1]=S+M*p,t[5]=_-w*p,t[9]=-h*f,t[2]=w-_*p,t[6]=M+S*p,t[10]=u*f}else if(e.order==="YXZ"){const _=f*g,S=f*y,M=p*g,w=p*y;t[0]=_+w*h,t[4]=M*h-S,t[8]=u*p,t[1]=u*y,t[5]=u*g,t[9]=-h,t[2]=S*h-M,t[6]=w+_*h,t[10]=u*f}else if(e.order==="ZXY"){const _=f*g,S=f*y,M=p*g,w=p*y;t[0]=_-w*h,t[4]=-u*y,t[8]=M+S*h,t[1]=S+M*h,t[5]=u*g,t[9]=w-_*h,t[2]=-u*p,t[6]=h,t[10]=u*f}else if(e.order==="ZYX"){const _=u*g,S=u*y,M=h*g,w=h*y;t[0]=f*g,t[4]=M*p-S,t[8]=_*p+w,t[1]=f*y,t[5]=w*p+_,t[9]=S*p-M,t[2]=-p,t[6]=h*f,t[10]=u*f}else if(e.order==="YZX"){const _=u*f,S=u*p,M=h*f,w=h*p;t[0]=f*g,t[4]=w-_*y,t[8]=M*y+S,t[1]=y,t[5]=u*g,t[9]=-h*g,t[2]=-p*g,t[6]=S*y+M,t[10]=_-w*y}else if(e.order==="XZY"){const _=u*f,S=u*p,M=h*f,w=h*p;t[0]=f*g,t[4]=-y,t[8]=p*g,t[1]=_*y+w,t[5]=u*g,t[9]=S*y-M,t[2]=M*y-S,t[6]=h*g,t[10]=w*y+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ax,e,lx)}lookAt(e,t,r){const o=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Pr.crossVectors(r,Jn),Pr.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Pr.crossVectors(r,Jn)),Pr.normalize(),Dl.crossVectors(Jn,Pr),o[0]=Pr.x,o[4]=Dl.x,o[8]=Jn.x,o[1]=Pr.y,o[5]=Dl.y,o[9]=Jn.y,o[2]=Pr.z,o[6]=Dl.z,o[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],h=r[4],f=r[8],p=r[12],g=r[1],y=r[5],_=r[9],S=r[13],M=r[2],w=r[6],x=r[10],v=r[14],L=r[3],P=r[7],T=r[11],G=r[15],F=o[0],U=o[4],O=o[8],b=o[12],C=o[1],k=o[5],ne=o[9],j=o[13],X=o[2],re=o[6],ce=o[10],ue=o[14],V=o[3],se=o[7],ie=o[11],N=o[15];return l[0]=u*F+h*C+f*X+p*V,l[4]=u*U+h*k+f*re+p*se,l[8]=u*O+h*ne+f*ce+p*ie,l[12]=u*b+h*j+f*ue+p*N,l[1]=g*F+y*C+_*X+S*V,l[5]=g*U+y*k+_*re+S*se,l[9]=g*O+y*ne+_*ce+S*ie,l[13]=g*b+y*j+_*ue+S*N,l[2]=M*F+w*C+x*X+v*V,l[6]=M*U+w*k+x*re+v*se,l[10]=M*O+w*ne+x*ce+v*ie,l[14]=M*b+w*j+x*ue+v*N,l[3]=L*F+P*C+T*X+G*V,l[7]=L*U+P*k+T*re+G*se,l[11]=L*O+P*ne+T*ce+G*ie,l[15]=L*b+P*j+T*ue+G*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],h=e[5],f=e[9],p=e[13],g=e[2],y=e[6],_=e[10],S=e[14],M=e[3],w=e[7],x=e[11],v=e[15];return M*(+l*f*y-o*p*y-l*h*_+r*p*_+o*h*S-r*f*S)+w*(+t*f*S-t*p*_+l*u*_-o*u*S+o*p*g-l*f*g)+x*(+t*p*y-t*h*S-l*u*y+r*u*S+l*h*g-r*p*g)+v*(-o*h*g-t*f*y+t*h*_+o*u*y-r*u*_+r*f*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],f=e[6],p=e[7],g=e[8],y=e[9],_=e[10],S=e[11],M=e[12],w=e[13],x=e[14],v=e[15],L=y*x*p-w*_*p+w*f*S-h*x*S-y*f*v+h*_*v,P=M*_*p-g*x*p-M*f*S+u*x*S+g*f*v-u*_*v,T=g*w*p-M*y*p+M*h*S-u*w*S-g*h*v+u*y*v,G=M*y*f-g*w*f-M*h*_+u*w*_+g*h*x-u*y*x,F=t*L+r*P+o*T+l*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return e[0]=L*U,e[1]=(w*_*l-y*x*l-w*o*S+r*x*S+y*o*v-r*_*v)*U,e[2]=(h*x*l-w*f*l+w*o*p-r*x*p-h*o*v+r*f*v)*U,e[3]=(y*f*l-h*_*l-y*o*p+r*_*p+h*o*S-r*f*S)*U,e[4]=P*U,e[5]=(g*x*l-M*_*l+M*o*S-t*x*S-g*o*v+t*_*v)*U,e[6]=(M*f*l-u*x*l-M*o*p+t*x*p+u*o*v-t*f*v)*U,e[7]=(u*_*l-g*f*l+g*o*p-t*_*p-u*o*S+t*f*S)*U,e[8]=T*U,e[9]=(M*y*l-g*w*l-M*r*S+t*w*S+g*r*v-t*y*v)*U,e[10]=(u*w*l-M*h*l+M*r*p-t*w*p-u*r*v+t*h*v)*U,e[11]=(g*h*l-u*y*l-g*r*p+t*y*p+u*r*S-t*h*S)*U,e[12]=G*U,e[13]=(g*w*o-M*y*o+M*r*_-t*w*_-g*r*x+t*y*x)*U,e[14]=(M*h*o-u*w*o-M*r*f+t*w*f+u*r*x-t*h*x)*U,e[15]=(u*y*o-g*h*o+g*r*f-t*y*f-u*r*_+t*h*_)*U,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,h=e.y,f=e.z,p=l*u,g=l*h;return this.set(p*u+r,p*h-o*f,p*f+o*h,0,p*h+o*f,g*h+r,g*f-o*u,0,p*f-o*h,g*f+o*u,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,h=t._z,f=t._w,p=l+l,g=u+u,y=h+h,_=l*p,S=l*g,M=l*y,w=u*g,x=u*y,v=h*y,L=f*p,P=f*g,T=f*y,G=r.x,F=r.y,U=r.z;return o[0]=(1-(w+v))*G,o[1]=(S+T)*G,o[2]=(M-P)*G,o[3]=0,o[4]=(S-T)*F,o[5]=(1-(_+v))*F,o[6]=(x+L)*F,o[7]=0,o[8]=(M+P)*U,o[9]=(x-L)*U,o[10]=(1-(_+w))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Xs.set(o[0],o[1],o[2]).length();const u=Xs.set(o[4],o[5],o[6]).length(),h=Xs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],Mi.copy(this);const p=1/l,g=1/u,y=1/h;return Mi.elements[0]*=p,Mi.elements[1]*=p,Mi.elements[2]*=p,Mi.elements[4]*=g,Mi.elements[5]*=g,Mi.elements[6]*=g,Mi.elements[8]*=y,Mi.elements[9]*=y,Mi.elements[10]*=y,t.setFromRotationMatrix(Mi),r.x=l,r.y=u,r.z=h,this}makePerspective(e,t,r,o,l,u,h=nr){const f=this.elements,p=2*l/(t-e),g=2*l/(r-o),y=(t+e)/(t-e),_=(r+o)/(r-o);let S,M;if(h===nr)S=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(h===lc)S=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return f[0]=p,f[4]=0,f[8]=y,f[12]=0,f[1]=0,f[5]=g,f[9]=_,f[13]=0,f[2]=0,f[6]=0,f[10]=S,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,r,o,l,u,h=nr){const f=this.elements,p=1/(t-e),g=1/(r-o),y=1/(u-l),_=(t+e)*p,S=(r+o)*g;let M,w;if(h===nr)M=(u+l)*y,w=-2*y;else if(h===lc)M=l*y,w=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-_,f[1]=0,f[5]=2*g,f[9]=0,f[13]=-S,f[2]=0,f[6]=0,f[10]=w,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Xs=new z,Mi=new Gt,ax=new z(0,0,0),lx=new z(1,1,1),Pr=new z,Dl=new z,Jn=new z,Om=new Gt,km=new ps;class Oi{constructor(e=0,t=0,r=0,o=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],h=o[8],f=o[1],p=o[5],g=o[9],y=o[2],_=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(yn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-yn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(yn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-yn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(yn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-yn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Om,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return km.setFromEuler(this),this.setFromQuaternion(km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class h0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cx=0;const Bm=new z,js=new ps,Zi=new Gt,Nl=new z,ia=new z,ux=new z,hx=new ps,zm=new z(1,0,0),Hm=new z(0,1,0),Vm=new z(0,0,1),Gm={type:"added"},dx={type:"removed"},Ys={type:"childadded",child:null},ph={type:"childremoved",child:null};class qt extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new z,t=new Oi,r=new ps,o=new z(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Gt},normalMatrix:{value:new dt}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new h0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(zm,e)}rotateY(e){return this.rotateOnAxis(Hm,e)}rotateZ(e){return this.rotateOnAxis(Vm,e)}translateOnAxis(e,t){return Bm.copy(e).applyQuaternion(this.quaternion),this.position.add(Bm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zm,e)}translateY(e){return this.translateOnAxis(Hm,e)}translateZ(e){return this.translateOnAxis(Vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Nl.copy(e):Nl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(ia,Nl,this.up):Zi.lookAt(Nl,ia,this.up),this.quaternion.setFromRotationMatrix(Zi),o&&(Zi.extractRotation(o.matrixWorld),js.setFromRotationMatrix(Zi),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gm),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dx),ph.child=e,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gm),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,ux),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,hx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(h,f){return h[f.uuid]===void 0&&(h[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const f=h.shapes;if(Array.isArray(f))for(let p=0,g=f.length;p<g;p++){const y=f[p];l(e.shapes,y)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let f=0,p=this.material.length;f<p;f++)h.push(l(e.materials,this.material[f]));o.material=h}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const f=this.animations[h];o.animations.push(l(e.animations,f))}}if(t){const h=u(e.geometries),f=u(e.materials),p=u(e.textures),g=u(e.images),y=u(e.shapes),_=u(e.skeletons),S=u(e.animations),M=u(e.nodes);h.length>0&&(r.geometries=h),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),y.length>0&&(r.shapes=y),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(h){const f=[];for(const p in h){const g=h[p];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}qt.DEFAULT_UP=new z(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new z,Qi=new z,mh=new z,Ji=new z,qs=new z,$s=new z,Wm=new z,gh=new z,_h=new z,vh=new z,yh=new kt,xh=new kt,Sh=new kt;class hi{constructor(e=new z,t=new z,r=new z){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ei.subVectors(e,t),o.cross(Ei);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ei.subVectors(o,t),Qi.subVectors(r,t),mh.subVectors(e,t);const u=Ei.dot(Ei),h=Ei.dot(Qi),f=Ei.dot(mh),p=Qi.dot(Qi),g=Qi.dot(mh),y=u*p-h*h;if(y===0)return l.set(0,0,0),null;const _=1/y,S=(p*f-h*g)*_,M=(u*g-h*f)*_;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,r,o,l,u,h,f){return this.getBarycoord(e,t,r,o,Ji)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Ji.x),f.addScaledVector(u,Ji.y),f.addScaledVector(h,Ji.z),f)}static getInterpolatedAttribute(e,t,r,o,l,u){return yh.setScalar(0),xh.setScalar(0),Sh.setScalar(0),yh.fromBufferAttribute(e,t),xh.fromBufferAttribute(e,r),Sh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(yh,l.x),u.addScaledVector(xh,l.y),u.addScaledVector(Sh,l.z),u}static isFrontFacing(e,t,r,o){return Ei.subVectors(r,t),Qi.subVectors(e,t),Ei.cross(Qi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),Ei.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return hi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,h;qs.subVectors(o,r),$s.subVectors(l,r),gh.subVectors(e,r);const f=qs.dot(gh),p=$s.dot(gh);if(f<=0&&p<=0)return t.copy(r);_h.subVectors(e,o);const g=qs.dot(_h),y=$s.dot(_h);if(g>=0&&y<=g)return t.copy(o);const _=f*y-g*p;if(_<=0&&f>=0&&g<=0)return u=f/(f-g),t.copy(r).addScaledVector(qs,u);vh.subVectors(e,l);const S=qs.dot(vh),M=$s.dot(vh);if(M>=0&&S<=M)return t.copy(l);const w=S*p-f*M;if(w<=0&&p>=0&&M<=0)return h=p/(p-M),t.copy(r).addScaledVector($s,h);const x=g*M-S*y;if(x<=0&&y-g>=0&&S-M>=0)return Wm.subVectors(l,o),h=(y-g)/(y-g+(S-M)),t.copy(o).addScaledVector(Wm,h);const v=1/(x+w+_);return u=w*v,h=_*v,t.copy(r).addScaledVector(qs,u).addScaledVector($s,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const d0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Mh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ge{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Tt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Tt.workingColorSpace){if(e=Fd(e,1),t=yn(t,0,1),r=yn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Mh(u,l,e+1/3),this.g=Mh(u,l,e),this.b=Mh(u,l,e-1/3)}return Tt.toWorkingColorSpace(this,o),this}setStyle(e,t=fn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const r=d0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return Tt.fromWorkingColorSpace(Cn.copy(this),e),Math.round(yn(Cn.r*255,0,255))*65536+Math.round(yn(Cn.g*255,0,255))*256+Math.round(yn(Cn.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.fromWorkingColorSpace(Cn.copy(this),t);const r=Cn.r,o=Cn.g,l=Cn.b,u=Math.max(r,o,l),h=Math.min(r,o,l);let f,p;const g=(h+u)/2;if(h===u)f=0,p=0;else{const y=u-h;switch(p=g<=.5?y/(u+h):y/(2-u-h),u){case r:f=(o-l)/y+(o<l?6:0);break;case o:f=(l-r)/y+2;break;case l:f=(r-o)/y+4;break}f/=6}return e.h=f,e.s=p,e.l=g,e}getRGB(e,t=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(Cn.copy(this),t),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=fn){Tt.fromWorkingColorSpace(Cn.copy(this),e);const t=Cn.r,r=Cn.g,o=Cn.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Lr),this.setHSL(Lr.h+e,Lr.s+t,Lr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Lr),e.getHSL(Il);const r=pa(Lr.h,Il.h,t),o=pa(Lr.s,Il.s,t),l=pa(Lr.l,Il.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Ge;Ge.NAMES=d0;let fx=0;class zr extends ms{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=ir(),this.name="",this.blending=co,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Hh,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(r.blending=this.blending),this.side!==kr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==zh&&(r.blendSrc=this.blendSrc),this.blendDst!==Hh&&(r.blendDst=this.blendDst),this.blendEquation!==ls&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const h in l){const f=l[h];delete f.metadata,u.push(f)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class In extends zr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Yg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new z,Ul=new Qe;class di{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Td,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ul.fromBufferAttribute(this,t),Ul.applyMatrix3(e),this.setXY(t,Ul.x,Ul.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ti(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Nt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),r=Nt(r,this.array),o=Nt(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),r=Nt(r,this.array),o=Nt(o,this.array),l=Nt(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Td&&(e.usage=this.usage),e}}class f0 extends di{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class p0 extends di{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class It extends di{constructor(e,t,r){super(new Float32Array(e),t,r)}}let px=0;const ui=new Gt,Eh=new qt,Ks=new z,ei=new _a,ra=new _a,dn=new z;class pn extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(l0(e)?p0:f0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new dt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,r){return ui.makeTranslation(e,t,r),this.applyMatrix4(ui),this}scale(e,t,r){return ui.makeScale(e,t,r),this.applyMatrix4(ui),this}lookAt(e){return Eh.lookAt(e),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new It(r,3))}else{for(let r=0,o=t.count;r<o;r++){const l=e[r];t.setXYZ(r,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _a);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ei.setFromBufferAttribute(l),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const h=t[l];ra.setFromBufferAttribute(h),this.morphTargetsRelative?(dn.addVectors(ei.min,ra.min),ei.expandByPoint(dn),dn.addVectors(ei.max,ra.max),ei.expandByPoint(dn)):(ei.expandByPoint(ra.min),ei.expandByPoint(ra.max))}ei.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)dn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(dn));if(t)for(let l=0,u=t.length;l<u;l++){const h=t[l],f=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)dn.fromBufferAttribute(h,p),f&&(Ks.fromBufferAttribute(e,p),dn.add(Ks)),o=Math.max(o,r.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),h=[],f=[];for(let O=0;O<r.count;O++)h[O]=new z,f[O]=new z;const p=new z,g=new z,y=new z,_=new Qe,S=new Qe,M=new Qe,w=new z,x=new z;function v(O,b,C){p.fromBufferAttribute(r,O),g.fromBufferAttribute(r,b),y.fromBufferAttribute(r,C),_.fromBufferAttribute(l,O),S.fromBufferAttribute(l,b),M.fromBufferAttribute(l,C),g.sub(p),y.sub(p),S.sub(_),M.sub(_);const k=1/(S.x*M.y-M.x*S.y);isFinite(k)&&(w.copy(g).multiplyScalar(M.y).addScaledVector(y,-S.y).multiplyScalar(k),x.copy(y).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(k),h[O].add(w),h[b].add(w),h[C].add(w),f[O].add(x),f[b].add(x),f[C].add(x))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let O=0,b=L.length;O<b;++O){const C=L[O],k=C.start,ne=C.count;for(let j=k,X=k+ne;j<X;j+=3)v(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const P=new z,T=new z,G=new z,F=new z;function U(O){G.fromBufferAttribute(o,O),F.copy(G);const b=h[O];P.copy(b),P.sub(G.multiplyScalar(G.dot(b))).normalize(),T.crossVectors(F,b);const k=T.dot(f[O])<0?-1:1;u.setXYZW(O,P.x,P.y,P.z,k)}for(let O=0,b=L.length;O<b;++O){const C=L[O],k=C.start,ne=C.count;for(let j=k,X=k+ne;j<X;j+=3)U(e.getX(j+0)),U(e.getX(j+1)),U(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new di(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const o=new z,l=new z,u=new z,h=new z,f=new z,p=new z,g=new z,y=new z;if(e)for(let _=0,S=e.count;_<S;_+=3){const M=e.getX(_+0),w=e.getX(_+1),x=e.getX(_+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,w),u.fromBufferAttribute(t,x),g.subVectors(u,l),y.subVectors(o,l),g.cross(y),h.fromBufferAttribute(r,M),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,x),h.add(g),f.add(g),p.add(g),r.setXYZ(M,h.x,h.y,h.z),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let _=0,S=t.count;_<S;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),g.subVectors(u,l),y.subVectors(o,l),g.cross(y),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(h,f){const p=h.array,g=h.itemSize,y=h.normalized,_=new p.constructor(f.length*g);let S=0,M=0;for(let w=0,x=f.length;w<x;w++){h.isInterleavedBufferAttribute?S=f[w]*h.data.stride+h.offset:S=f[w]*g;for(let v=0;v<g;v++)_[M++]=p[S++]}return new di(_,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pn,r=this.index.array,o=this.attributes;for(const h in o){const f=o[h],p=e(f,r);t.setAttribute(h,p)}const l=this.morphAttributes;for(const h in l){const f=[],p=l[h];for(let g=0,y=p.length;g<y;g++){const _=p[g],S=e(_,r);f.push(S)}t.morphAttributes[h]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,f=u.length;h<f;h++){const p=u[h];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],g=[];for(let y=0,_=p.length;y<_;y++){const S=p[y];g.push(S.toJSON(e.data))}g.length>0&&(o[f]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],y=l[p];for(let _=0,S=y.length;_<S;_++)g.push(y[_].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const y=u[p];this.addGroup(y.start,y.count,y.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xm=new Gt,is=new vc,Fl=new va,jm=new z,Ol=new z,kl=new z,Bl=new z,wh=new z,zl=new z,Ym=new z,Hl=new z;class we extends qt{constructor(e=new pn,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(l&&h){zl.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const g=h[f],y=l[f];g!==0&&(wh.fromBufferAttribute(y,e),u?zl.addScaledVector(wh,g):zl.addScaledVector(wh.sub(t),g))}t.add(zl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Fl.copy(r.boundingSphere),Fl.applyMatrix4(l),is.copy(e.ray).recast(e.near),!(Fl.containsPoint(is.origin)===!1&&(is.intersectSphere(Fl,jm)===null||is.origin.distanceToSquared(jm)>(e.far-e.near)**2))&&(Xm.copy(l).invert(),is.copy(e.ray).applyMatrix4(Xm),!(r.boundingBox!==null&&is.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,h=l.index,f=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,y=l.attributes.normal,_=l.groups,S=l.drawRange;if(h!==null)if(Array.isArray(u))for(let M=0,w=_.length;M<w;M++){const x=_[M],v=u[x.materialIndex],L=Math.max(x.start,S.start),P=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let T=L,G=P;T<G;T+=3){const F=h.getX(T),U=h.getX(T+1),O=h.getX(T+2);o=Vl(this,v,e,r,p,g,y,F,U,O),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let x=M,v=w;x<v;x+=3){const L=h.getX(x),P=h.getX(x+1),T=h.getX(x+2);o=Vl(this,u,e,r,p,g,y,L,P,T),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let M=0,w=_.length;M<w;M++){const x=_[M],v=u[x.materialIndex],L=Math.max(x.start,S.start),P=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let T=L,G=P;T<G;T+=3){const F=T,U=T+1,O=T+2;o=Vl(this,v,e,r,p,g,y,F,U,O),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let x=M,v=w;x<v;x+=3){const L=x,P=x+1,T=x+2;o=Vl(this,u,e,r,p,g,y,L,P,T),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function mx(s,e,t,r,o,l,u,h){let f;if(e.side===qn?f=r.intersectTriangle(u,l,o,!0,h):f=r.intersectTriangle(o,l,u,e.side===kr,h),f===null)return null;Hl.copy(h),Hl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Hl);return p<t.near||p>t.far?null:{distance:p,point:Hl.clone(),object:s}}function Vl(s,e,t,r,o,l,u,h,f,p){s.getVertexPosition(h,Ol),s.getVertexPosition(f,kl),s.getVertexPosition(p,Bl);const g=mx(s,e,t,r,Ol,kl,Bl,Ym);if(g){const y=new z;hi.getBarycoord(Ym,Ol,kl,Bl,y),o&&(g.uv=hi.getInterpolatedAttribute(o,h,f,p,y,new Qe)),l&&(g.uv1=hi.getInterpolatedAttribute(l,h,f,p,y,new Qe)),u&&(g.normal=hi.getInterpolatedAttribute(u,h,f,p,y,new z),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:h,b:f,c:p,normal:new z,materialIndex:0};hi.getNormal(Ol,kl,Bl,_.normal),g.face=_,g.barycoord=y}return g}class Ke extends pn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const h=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const f=[],p=[],g=[],y=[];let _=0,S=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(f),this.setAttribute("position",new It(p,3)),this.setAttribute("normal",new It(g,3)),this.setAttribute("uv",new It(y,2));function M(w,x,v,L,P,T,G,F,U,O,b){const C=T/U,k=G/O,ne=T/2,j=G/2,X=F/2,re=U+1,ce=O+1;let ue=0,V=0;const se=new z;for(let ie=0;ie<ce;ie++){const N=ie*k-j;for(let ee=0;ee<re;ee++){const Ce=ee*C-ne;se[w]=Ce*L,se[x]=N*P,se[v]=X,p.push(se.x,se.y,se.z),se[w]=0,se[x]=0,se[v]=F>0?1:-1,g.push(se.x,se.y,se.z),y.push(ee/U),y.push(1-ie/O),ue+=1}}for(let ie=0;ie<O;ie++)for(let N=0;N<U;N++){const ee=_+N+re*ie,Ce=_+N+re*(ie+1),Q=_+(N+1)+re*(ie+1),de=_+(N+1)+re*ie;f.push(ee,Ce,de),f.push(Ce,Q,de),V+=6}h.addGroup(S,V,b),S+=V,_+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ke(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Un(s){const e={};for(let t=0;t<s.length;t++){const r=yo(s[t]);for(const o in r)e[o]=r[o]}return e}function gx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function m0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const _x={clone:yo,merge:Un};var vx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Br extends zr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vx,this.fragmentShader=yx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=gx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class g0 extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=nr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new z,qm=new Qe,$m=new Qe;class Yn extends g0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,qm,$m),t.subVectors($m,qm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fa*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/f,t-=u.offsetY*r/p,o*=u.width/f,r*=u.height/p}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zs=-90,Qs=1;class xx extends qt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Yn(Zs,Qs,e,t);o.layers=this.layers,this.add(o);const l=new Yn(Zs,Qs,e,t);l.layers=this.layers,this.add(l);const u=new Yn(Zs,Qs,e,t);u.layers=this.layers,this.add(u);const h=new Yn(Zs,Qs,e,t);h.layers=this.layers,this.add(h);const f=new Yn(Zs,Qs,e,t);f.layers=this.layers,this.add(f);const p=new Yn(Zs,Qs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,h,f]=t;for(const p of t)this.remove(p);if(e===nr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===lc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,h,f,p,g]=this.children,y=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,h),e.setRenderTarget(r,3,o),e.render(t,f),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),e.render(t,g),e.setRenderTarget(y,_,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class _0 extends Fn{constructor(e,t,r,o,l,u,h,f,p,g){e=e!==void 0?e:[],t=t!==void 0?t:po,super(e,t,r,o,l,u,h,f,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sx extends fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new _0(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Fi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ke(5,5,5),l=new Br({name:"CubemapFromEquirect",uniforms:yo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:Fr});l.uniforms.tEquirect.value=t;const u=new we(o,l),h=t.minFilter;return t.minFilter===hs&&(t.minFilter=Fi),new xx(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const Th=new z,Mx=new z,Ex=new dt;class Ir{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Th.subVectors(r,t).cross(Mx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Th),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Ex.getNormalMatrix(e),o=this.coplanarPoint(Th).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new va,Gl=new z;class Od{constructor(e=new Ir,t=new Ir,r=new Ir,o=new Ir,l=new Ir,u=new Ir){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(r),h[3].copy(o),h[4].copy(l),h[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=nr){const r=this.planes,o=e.elements,l=o[0],u=o[1],h=o[2],f=o[3],p=o[4],g=o[5],y=o[6],_=o[7],S=o[8],M=o[9],w=o[10],x=o[11],v=o[12],L=o[13],P=o[14],T=o[15];if(r[0].setComponents(f-l,_-p,x-S,T-v).normalize(),r[1].setComponents(f+l,_+p,x+S,T+v).normalize(),r[2].setComponents(f+u,_+g,x+M,T+L).normalize(),r[3].setComponents(f-u,_-g,x-M,T-L).normalize(),r[4].setComponents(f-h,_-y,x-w,T-P).normalize(),t===nr)r[5].setComponents(f+h,_+y,x+w,T+P).normalize();else if(t===lc)r[5].setComponents(h,y,w,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Gl.x=o.normal.x>0?e.max.x:e.min.x,Gl.y=o.normal.y>0?e.max.y:e.min.y,Gl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function v0(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function wx(s){const e=new WeakMap;function t(h,f){const p=h.array,g=h.usage,y=p.byteLength,_=s.createBuffer();s.bindBuffer(f,_),s.bufferData(f,p,g),h.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:y}}function r(h,f,p){const g=f.array,y=f.updateRanges;if(s.bindBuffer(p,h),y.length===0)s.bufferSubData(p,0,g);else{y.sort((S,M)=>S.start-M.start);let _=0;for(let S=1;S<y.length;S++){const M=y[_],w=y[S];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++_,y[_]=w)}y.length=_+1;for(let S=0,M=y.length;S<M;S++){const w=y[S];s.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=e.get(h);f&&(s.deleteBuffer(f.buffer),e.delete(h))}function u(h,f){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,t(h,f));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,f),p.version=h.version}}return{get:o,remove:l,update:u}}class wi extends pn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,h=Math.floor(r),f=Math.floor(o),p=h+1,g=f+1,y=e/h,_=t/f,S=[],M=[],w=[],x=[];for(let v=0;v<g;v++){const L=v*_-u;for(let P=0;P<p;P++){const T=P*y-l;M.push(T,-L,0),w.push(0,0,1),x.push(P/h),x.push(1-v/f)}}for(let v=0;v<f;v++)for(let L=0;L<h;L++){const P=L+p*v,T=L+p*(v+1),G=L+1+p*(v+1),F=L+1+p*v;S.push(P,T,F),S.push(T,G,F)}this.setIndex(S),this.setAttribute("position",new It(M,3)),this.setAttribute("normal",new It(w,3)),this.setAttribute("uv",new It(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ax=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Px=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ix=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ux=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ox=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$x=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tS="gl_FragColor = linearToOutputTexel( gl_FragColor );",nS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_S=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ES=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,IS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,US=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,HS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,WS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$S=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,eM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,aM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_M=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,EM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,DM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,NM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,IM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,BM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,XM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$M=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,JM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,n1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:Tx,alphahash_pars_fragment:Ax,alphamap_fragment:Cx,alphamap_pars_fragment:Rx,alphatest_fragment:bx,alphatest_pars_fragment:Px,aomap_fragment:Lx,aomap_pars_fragment:Dx,batching_pars_vertex:Nx,batching_vertex:Ix,begin_vertex:Ux,beginnormal_vertex:Fx,bsdfs:Ox,iridescence_fragment:kx,bumpmap_pars_fragment:Bx,clipping_planes_fragment:zx,clipping_planes_pars_fragment:Hx,clipping_planes_pars_vertex:Vx,clipping_planes_vertex:Gx,color_fragment:Wx,color_pars_fragment:Xx,color_pars_vertex:jx,color_vertex:Yx,common:qx,cube_uv_reflection_fragment:$x,defaultnormal_vertex:Kx,displacementmap_pars_vertex:Zx,displacementmap_vertex:Qx,emissivemap_fragment:Jx,emissivemap_pars_fragment:eS,colorspace_fragment:tS,colorspace_pars_fragment:nS,envmap_fragment:iS,envmap_common_pars_fragment:rS,envmap_pars_fragment:sS,envmap_pars_vertex:oS,envmap_physical_pars_fragment:_S,envmap_vertex:aS,fog_vertex:lS,fog_pars_vertex:cS,fog_fragment:uS,fog_pars_fragment:hS,gradientmap_pars_fragment:dS,lightmap_pars_fragment:fS,lights_lambert_fragment:pS,lights_lambert_pars_fragment:mS,lights_pars_begin:gS,lights_toon_fragment:vS,lights_toon_pars_fragment:yS,lights_phong_fragment:xS,lights_phong_pars_fragment:SS,lights_physical_fragment:MS,lights_physical_pars_fragment:ES,lights_fragment_begin:wS,lights_fragment_maps:TS,lights_fragment_end:AS,logdepthbuf_fragment:CS,logdepthbuf_pars_fragment:RS,logdepthbuf_pars_vertex:bS,logdepthbuf_vertex:PS,map_fragment:LS,map_pars_fragment:DS,map_particle_fragment:NS,map_particle_pars_fragment:IS,metalnessmap_fragment:US,metalnessmap_pars_fragment:FS,morphinstance_vertex:OS,morphcolor_vertex:kS,morphnormal_vertex:BS,morphtarget_pars_vertex:zS,morphtarget_vertex:HS,normal_fragment_begin:VS,normal_fragment_maps:GS,normal_pars_fragment:WS,normal_pars_vertex:XS,normal_vertex:jS,normalmap_pars_fragment:YS,clearcoat_normal_fragment_begin:qS,clearcoat_normal_fragment_maps:$S,clearcoat_pars_fragment:KS,iridescence_pars_fragment:ZS,opaque_fragment:QS,packing:JS,premultiplied_alpha_fragment:eM,project_vertex:tM,dithering_fragment:nM,dithering_pars_fragment:iM,roughnessmap_fragment:rM,roughnessmap_pars_fragment:sM,shadowmap_pars_fragment:oM,shadowmap_pars_vertex:aM,shadowmap_vertex:lM,shadowmask_pars_fragment:cM,skinbase_vertex:uM,skinning_pars_vertex:hM,skinning_vertex:dM,skinnormal_vertex:fM,specularmap_fragment:pM,specularmap_pars_fragment:mM,tonemapping_fragment:gM,tonemapping_pars_fragment:_M,transmission_fragment:vM,transmission_pars_fragment:yM,uv_pars_fragment:xM,uv_pars_vertex:SM,uv_vertex:MM,worldpos_vertex:EM,background_vert:wM,background_frag:TM,backgroundCube_vert:AM,backgroundCube_frag:CM,cube_vert:RM,cube_frag:bM,depth_vert:PM,depth_frag:LM,distanceRGBA_vert:DM,distanceRGBA_frag:NM,equirect_vert:IM,equirect_frag:UM,linedashed_vert:FM,linedashed_frag:OM,meshbasic_vert:kM,meshbasic_frag:BM,meshlambert_vert:zM,meshlambert_frag:HM,meshmatcap_vert:VM,meshmatcap_frag:GM,meshnormal_vert:WM,meshnormal_frag:XM,meshphong_vert:jM,meshphong_frag:YM,meshphysical_vert:qM,meshphysical_frag:$M,meshtoon_vert:KM,meshtoon_frag:ZM,points_vert:QM,points_frag:JM,shadow_vert:e1,shadow_frag:t1,sprite_vert:n1,sprite_frag:i1},Le={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ii={basic:{uniforms:Un([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Un([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Un([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Un([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Un([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Un([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Un([Le.points,Le.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Un([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Un([Le.common,Le.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Un([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Un([Le.sprite,Le.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Un([Le.common,Le.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Un([Le.lights,Le.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ii.physical={uniforms:Un([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Wl={r:0,b:0,g:0},ss=new Oi,r1=new Gt;function s1(s,e,t,r,o,l,u){const h=new Ge(0);let f=l===!0?0:1,p,g,y=null,_=0,S=null;function M(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?t:e).get(P)),P}function w(L){let P=!1;const T=M(L);T===null?v(h,f):T&&T.isColor&&(v(T,1),P=!0);const G=s.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,u):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(L,P){const T=M(P);T&&(T.isCubeTexture||T.mapping===gc)?(g===void 0&&(g=new we(new Ke(1,1,1),new Br({name:"BackgroundCubeMaterial",uniforms:yo(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,F,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),ss.copy(P.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),g.material.uniforms.envMap.value=T,g.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(r1.makeRotationFromEuler(ss)),g.material.toneMapped=Tt.getTransfer(T.colorSpace)!==Ft,(y!==T||_!==T.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,y=T,_=T.version,S=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):T&&T.isTexture&&(p===void 0&&(p=new we(new wi(2,2),new Br({name:"BackgroundMaterial",uniforms:yo(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=T,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(T.colorSpace)!==Ft,T.matrixAutoUpdate===!0&&T.updateMatrix(),p.material.uniforms.uvTransform.value.copy(T.matrix),(y!==T||_!==T.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,y=T,_=T.version,S=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,P){L.getRGB(Wl,m0(s)),r.buffers.color.setClear(Wl.r,Wl.g,Wl.b,P,u)}return{getClearColor:function(){return h},setClearColor:function(L,P=1){h.set(L),f=P,v(h,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,v(h,f)},render:w,addToRenderList:x}}function o1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=_(null);let l=o,u=!1;function h(C,k,ne,j,X){let re=!1;const ce=y(j,ne,k);l!==ce&&(l=ce,p(l.object)),re=S(C,j,ne,X),re&&M(C,j,ne,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(re||u)&&(u=!1,T(C,k,ne,j),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function f(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function y(C,k,ne){const j=ne.wireframe===!0;let X=r[C.id];X===void 0&&(X={},r[C.id]=X);let re=X[k.id];re===void 0&&(re={},X[k.id]=re);let ce=re[j];return ce===void 0&&(ce=_(f()),re[j]=ce),ce}function _(C){const k=[],ne=[],j=[];for(let X=0;X<t;X++)k[X]=0,ne[X]=0,j[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ne,attributeDivisors:j,object:C,attributes:{},index:null}}function S(C,k,ne,j){const X=l.attributes,re=k.attributes;let ce=0;const ue=ne.getAttributes();for(const V in ue)if(ue[V].location>=0){const ie=X[V];let N=re[V];if(N===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),ie===void 0||ie.attribute!==N||N&&ie.data!==N.data)return!0;ce++}return l.attributesNum!==ce||l.index!==j}function M(C,k,ne,j){const X={},re=k.attributes;let ce=0;const ue=ne.getAttributes();for(const V in ue)if(ue[V].location>=0){let ie=re[V];ie===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(ie=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(ie=C.instanceColor));const N={};N.attribute=ie,ie&&ie.data&&(N.data=ie.data),X[V]=N,ce++}l.attributes=X,l.attributesNum=ce,l.index=j}function w(){const C=l.newAttributes;for(let k=0,ne=C.length;k<ne;k++)C[k]=0}function x(C){v(C,0)}function v(C,k){const ne=l.newAttributes,j=l.enabledAttributes,X=l.attributeDivisors;ne[C]=1,j[C]===0&&(s.enableVertexAttribArray(C),j[C]=1),X[C]!==k&&(s.vertexAttribDivisor(C,k),X[C]=k)}function L(){const C=l.newAttributes,k=l.enabledAttributes;for(let ne=0,j=k.length;ne<j;ne++)k[ne]!==C[ne]&&(s.disableVertexAttribArray(ne),k[ne]=0)}function P(C,k,ne,j,X,re,ce){ce===!0?s.vertexAttribIPointer(C,k,ne,X,re):s.vertexAttribPointer(C,k,ne,j,X,re)}function T(C,k,ne,j){w();const X=j.attributes,re=ne.getAttributes(),ce=k.defaultAttributeValues;for(const ue in re){const V=re[ue];if(V.location>=0){let se=X[ue];if(se===void 0&&(ue==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),ue==="instanceColor"&&C.instanceColor&&(se=C.instanceColor)),se!==void 0){const ie=se.normalized,N=se.itemSize,ee=e.get(se);if(ee===void 0)continue;const Ce=ee.buffer,Q=ee.type,de=ee.bytesPerElement,Ee=Q===s.INT||Q===s.UNSIGNED_INT||se.gpuType===Pd;if(se.isInterleavedBufferAttribute){const ye=se.data,Re=ye.stride,Ue=se.offset;if(ye.isInstancedInterleavedBuffer){for(let nt=0;nt<V.locationSize;nt++)v(V.location+nt,ye.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let nt=0;nt<V.locationSize;nt++)x(V.location+nt);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let nt=0;nt<V.locationSize;nt++)P(V.location+nt,N/V.locationSize,Q,ie,Re*de,(Ue+N/V.locationSize*nt)*de,Ee)}else{if(se.isInstancedBufferAttribute){for(let ye=0;ye<V.locationSize;ye++)v(V.location+ye,se.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ye=0;ye<V.locationSize;ye++)x(V.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let ye=0;ye<V.locationSize;ye++)P(V.location+ye,N/V.locationSize,Q,ie,N*de,N/V.locationSize*ye*de,Ee)}}else if(ce!==void 0){const ie=ce[ue];if(ie!==void 0)switch(ie.length){case 2:s.vertexAttrib2fv(V.location,ie);break;case 3:s.vertexAttrib3fv(V.location,ie);break;case 4:s.vertexAttrib4fv(V.location,ie);break;default:s.vertexAttrib1fv(V.location,ie)}}}}L()}function G(){O();for(const C in r){const k=r[C];for(const ne in k){const j=k[ne];for(const X in j)g(j[X].object),delete j[X];delete k[ne]}delete r[C]}}function F(C){if(r[C.id]===void 0)return;const k=r[C.id];for(const ne in k){const j=k[ne];for(const X in j)g(j[X].object),delete j[X];delete k[ne]}delete r[C.id]}function U(C){for(const k in r){const ne=r[k];if(ne[C.id]===void 0)continue;const j=ne[C.id];for(const X in j)g(j[X].object),delete j[X];delete ne[C.id]}}function O(){b(),u=!0,l!==o&&(l=o,p(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:O,resetDefaultState:b,dispose:G,releaseStatesOfGeometry:F,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:x,disableUnusedAttributes:L}}function a1(s,e,t){let r;function o(p){r=p}function l(p,g){s.drawArrays(r,p,g),t.update(g,r,1)}function u(p,g,y){y!==0&&(s.drawArraysInstanced(r,p,g,y),t.update(g,r,y))}function h(p,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,y);let S=0;for(let M=0;M<y;M++)S+=g[M];t.update(S,r,1)}function f(p,g,y,_){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)u(p[M],g[M],_[M]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,_,0,y);let M=0;for(let w=0;w<y;w++)M+=g[w]*_[w];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function l1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==Ai&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(U){const O=U===ga&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==sr&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==tr&&!O)}function f(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=f(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const y=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=M>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:y,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:L,maxVaryings:P,maxFragmentUniforms:T,vertexTextures:G,maxSamples:F}}function c1(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Ir,h=new dt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(y,_){const S=y.length!==0||_||r!==0||o;return o=_,r=y.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,_){t=g(y,_,0)},this.setState=function(y,_,S){const M=y.clippingPlanes,w=y.clipIntersection,x=y.clipShadows,v=s.get(y);if(!o||M===null||M.length===0||l&&!x)l?g(null):p();else{const L=l?0:r,P=L*4;let T=v.clippingState||null;f.value=T,T=g(M,_,P,S);for(let G=0;G!==P;++G)T[G]=t[G];v.clippingState=T,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(y,_,S,M){const w=y!==null?y.length:0;let x=null;if(w!==0){if(x=f.value,M!==!0||x===null){const v=S+w*4,L=_.matrixWorldInverse;h.getNormalMatrix(L),(x===null||x.length<v)&&(x=new Float32Array(v));for(let P=0,T=S;P!==w;++P,T+=4)u.copy(y[P]).applyMatrix4(L,h),u.normal.toArray(x,T),x[T+3]=u.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function u1(s){let e=new WeakMap;function t(u,h){return h===$h?u.mapping=po:h===Kh&&(u.mapping=mo),u}function r(u){if(u&&u.isTexture){const h=u.mapping;if(h===$h||h===Kh)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const p=new Sx(f.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const h=u.target;h.removeEventListener("dispose",o);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class y0 extends g0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,h=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,h-=g*this.view.offsetY,f=h-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,h,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const so=4,Km=[.125,.215,.35,.446,.526,.582],cs=20,Ah=new y0,Zm=new Ge;let Ch=null,Rh=0,bh=0,Ph=!1;const as=(1+Math.sqrt(5))/2,Js=1/as,Qm=[new z(-as,Js,0),new z(as,Js,0),new z(-Js,0,as),new z(Js,0,as),new z(0,as,-Js),new z(0,as,Js),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Jm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){Ch=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ch,Rh,bh),this._renderer.xr.enabled=Ph,e.scissorTest=!1,Xl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===po||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ch=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Fi,minFilter:Fi,generateMipmaps:!1,type:ga,format:Ai,colorSpace:xo,depthBuffer:!1},o=eg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eg(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=h1(l)),this._blurMaterial=d1(l,e,t)}return o}_compileMaterial(e){const t=new we(this._lodPlanes[0],e);this._renderer.compile(t,Ah)}_sceneToCubeUV(e,t,r,o){const h=new Yn(90,1,t,r),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,_=g.toneMapping;g.getClearColor(Zm),g.toneMapping=Or,g.autoClear=!1;const S=new In({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),M=new we(new Ke,S);let w=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,w=!0):(S.color.copy(Zm),w=!0);for(let v=0;v<6;v++){const L=v%3;L===0?(h.up.set(0,f[v],0),h.lookAt(p[v],0,0)):L===1?(h.up.set(0,0,f[v]),h.lookAt(0,p[v],0)):(h.up.set(0,f[v],0),h.lookAt(0,0,p[v]));const P=this._cubeSize;Xl(o,L*P,v>2?P:0,P,P),g.setRenderTarget(o),w&&g.render(M,h),g.render(e,h)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=_,g.autoClear=y,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===po||e.mapping===mo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new we(this._lodPlanes[0],l),h=l.uniforms;h.envMap.value=e;const f=this._cubeSize;Xl(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(u,Ah)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=Qm[(o-l-1)%Qm.length];this._blur(e,l-1,l,u,h)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,h){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new we(this._lodPlanes[o],p),_=p.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*cs-1),w=l/M,x=isFinite(l)?1+Math.floor(g*w):cs;x>cs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${cs}`);const v=[];let L=0;for(let U=0;U<cs;++U){const O=U/w,b=Math.exp(-O*O/2);v.push(b),U===0?L+=b:U<x&&(L+=2*b)}for(let U=0;U<v.length;U++)v[U]=v[U]/L;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=v,_.latitudinal.value=u==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:P}=this;_.dTheta.value=M,_.mipInt.value=P-r;const T=this._sizeLods[o],G=3*T*(o>P-so?o-P+so:0),F=4*(this._cubeSize-T);Xl(t,G,F,3*T,2*T),f.setRenderTarget(t),f.render(y,Ah)}}function h1(s){const e=[],t=[],r=[];let o=s;const l=s-so+1+Km.length;for(let u=0;u<l;u++){const h=Math.pow(2,o);t.push(h);let f=1/h;u>s-so?f=Km[u-s+so-1]:u===0&&(f=0),r.push(f);const p=1/(h-2),g=-p,y=1+p,_=[g,g,y,g,y,y,g,g,y,y,g,y],S=6,M=6,w=3,x=2,v=1,L=new Float32Array(w*M*S),P=new Float32Array(x*M*S),T=new Float32Array(v*M*S);for(let F=0;F<S;F++){const U=F%3*2/3-1,O=F>2?0:-1,b=[U,O,0,U+2/3,O,0,U+2/3,O+1,0,U,O,0,U+2/3,O+1,0,U,O+1,0];L.set(b,w*M*F),P.set(_,x*M*F);const C=[F,F,F,F,F,F];T.set(C,v*M*F)}const G=new pn;G.setAttribute("position",new di(L,w)),G.setAttribute("uv",new di(P,x)),G.setAttribute("faceIndex",new di(T,v)),e.push(G),o>so&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function eg(s,e,t){const r=new fs(s,e,t);return r.texture.mapping=gc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Xl(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function d1(s,e,t){const r=new Float32Array(cs),o=new z(0,1,0);return new Br({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function tg(){return new Br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function ng(){return new Br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fr,depthTest:!1,depthWrite:!1})}function kd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function f1(s){let e=new WeakMap,t=null;function r(h){if(h&&h.isTexture){const f=h.mapping,p=f===$h||f===Kh,g=f===po||f===mo;if(p||g){let y=e.get(h);const _=y!==void 0?y.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return t===null&&(t=new Jm(s)),y=p?t.fromEquirectangular(h,y):t.fromCubemap(h,y),y.texture.pmremVersion=h.pmremVersion,e.set(h,y),y.texture;if(y!==void 0)return y.texture;{const S=h.image;return p&&S&&S.height>0||g&&S&&o(S)?(t===null&&(t=new Jm(s)),y=p?t.fromEquirectangular(h):t.fromCubemap(h),y.texture.pmremVersion=h.pmremVersion,e.set(h,y),h.addEventListener("dispose",l),y.texture):null}}}return h}function o(h){let f=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&f++;return f===p}function l(h){const f=h.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function p1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&ha("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function m1(s,e,t,r){const o={},l=new WeakMap;function u(y){const _=y.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);for(const M in _.morphAttributes){const w=_.morphAttributes[M];for(let x=0,v=w.length;x<v;x++)e.remove(w[x])}_.removeEventListener("dispose",u),delete o[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function h(y,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,t.memory.geometries++),_}function f(y){const _=y.attributes;for(const M in _)e.update(_[M],s.ARRAY_BUFFER);const S=y.morphAttributes;for(const M in S){const w=S[M];for(let x=0,v=w.length;x<v;x++)e.update(w[x],s.ARRAY_BUFFER)}}function p(y){const _=[],S=y.index,M=y.attributes.position;let w=0;if(S!==null){const L=S.array;w=S.version;for(let P=0,T=L.length;P<T;P+=3){const G=L[P+0],F=L[P+1],U=L[P+2];_.push(G,F,F,U,U,G)}}else if(M!==void 0){const L=M.array;w=M.version;for(let P=0,T=L.length/3-1;P<T;P+=3){const G=P+0,F=P+1,U=P+2;_.push(G,F,F,U,U,G)}}else return;const x=new(l0(_)?p0:f0)(_,1);x.version=w;const v=l.get(y);v&&e.remove(v),l.set(y,x)}function g(y){const _=l.get(y);if(_){const S=y.index;S!==null&&_.version<S.version&&p(y)}else p(y);return l.get(y)}return{get:h,update:f,getWireframeAttribute:g}}function g1(s,e,t){let r;function o(_){r=_}let l,u;function h(_){l=_.type,u=_.bytesPerElement}function f(_,S){s.drawElements(r,S,l,_*u),t.update(S,r,1)}function p(_,S,M){M!==0&&(s.drawElementsInstanced(r,S,l,_*u,M),t.update(S,r,M))}function g(_,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,_,0,M);let x=0;for(let v=0;v<M;v++)x+=S[v];t.update(x,r,1)}function y(_,S,M,w){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<_.length;v++)p(_[v]/u,S[v],w[v]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,l,_,0,w,0,M);let v=0;for(let L=0;L<M;L++)v+=S[L]*w[L];t.update(v,r,1)}}this.setMode=o,this.setIndex=h,this.render=f,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=y}function _1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,h){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=h*(l/3);break;case s.LINES:t.lines+=h*(l/2);break;case s.LINE_STRIP:t.lines+=h*(l-1);break;case s.LINE_LOOP:t.lines+=h*l;break;case s.POINTS:t.points+=h*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function v1(s,e,t){const r=new WeakMap,o=new kt;function l(u,h,f){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=g!==void 0?g.length:0;let _=r.get(h);if(_===void 0||_.count!==y){let C=function(){O.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var S=C;_!==void 0&&_.texture.dispose();const M=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let T=0;M===!0&&(T=1),w===!0&&(T=2),x===!0&&(T=3);let G=h.attributes.position.count*T,F=1;G>e.maxTextureSize&&(F=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const U=new Float32Array(G*F*4*y),O=new u0(U,G,F,y);O.type=tr,O.needsUpdate=!0;const b=T*4;for(let k=0;k<y;k++){const ne=v[k],j=L[k],X=P[k],re=G*F*4*k;for(let ce=0;ce<ne.count;ce++){const ue=ce*b;M===!0&&(o.fromBufferAttribute(ne,ce),U[re+ue+0]=o.x,U[re+ue+1]=o.y,U[re+ue+2]=o.z,U[re+ue+3]=0),w===!0&&(o.fromBufferAttribute(j,ce),U[re+ue+4]=o.x,U[re+ue+5]=o.y,U[re+ue+6]=o.z,U[re+ue+7]=0),x===!0&&(o.fromBufferAttribute(X,ce),U[re+ue+8]=o.x,U[re+ue+9]=o.y,U[re+ue+10]=o.z,U[re+ue+11]=X.itemSize===4?o.w:1)}}_={count:y,texture:O,size:new Qe(G,F)},r.set(h,_),h.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let M=0;for(let x=0;x<p.length;x++)M+=p[x];const w=h.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",w),f.getUniforms().setValue(s,"morphTargetInfluences",p)}f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function y1(s,e,t,r){let o=new WeakMap;function l(f){const p=r.render.frame,g=f.geometry,y=e.get(f,g);if(o.get(y)!==p&&(e.update(y),o.set(y,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),o.get(f)!==p&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const _=f.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return y}function u(){o=new WeakMap}function h(f){const p=f.target;p.removeEventListener("dispose",h),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}class x0 extends Fn{constructor(e,t,r,o,l,u,h,f,p,g=uo){if(g!==uo&&g!==_o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===uo&&(r=ds),r===void 0&&g===_o&&(r=go),super(null,o,l,u,h,f,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=h!==void 0?h:Ci,this.minFilter=f!==void 0?f:Ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const S0=new Fn,ig=new x0(1,1),M0=new u0,E0=new sx,w0=new _0,rg=[],sg=[],og=new Float32Array(16),ag=new Float32Array(9),lg=new Float32Array(4);function So(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=rg[o];if(l===void 0&&(l=new Float32Array(o),rg[o]=l),e!==0){r.toArray(l,0);for(let u=1,h=0;u!==e;++u)h+=t,s[u].toArray(l,h)}return l}function an(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function ln(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function yc(s,e){let t=sg[e];t===void 0&&(t=new Int32Array(e),sg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function x1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function S1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2fv(this.addr,e),ln(t,e)}}function M1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;s.uniform3fv(this.addr,e),ln(t,e)}}function E1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4fv(this.addr,e),ln(t,e)}}function w1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,r))return;lg.set(r),s.uniformMatrix2fv(this.addr,!1,lg),ln(t,r)}}function T1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,r))return;ag.set(r),s.uniformMatrix3fv(this.addr,!1,ag),ln(t,r)}}function A1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(an(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,r))return;og.set(r),s.uniformMatrix4fv(this.addr,!1,og),ln(t,r)}}function C1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function R1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2iv(this.addr,e),ln(t,e)}}function b1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;s.uniform3iv(this.addr,e),ln(t,e)}}function P1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4iv(this.addr,e),ln(t,e)}}function L1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function D1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2uiv(this.addr,e),ln(t,e)}}function N1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;s.uniform3uiv(this.addr,e),ln(t,e)}}function I1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4uiv(this.addr,e),ln(t,e)}}function U1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(ig.compareFunction=a0,l=ig):l=S0,t.setTexture2D(e||l,o)}function F1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||E0,o)}function O1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||w0,o)}function k1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||M0,o)}function B1(s){switch(s){case 5126:return x1;case 35664:return S1;case 35665:return M1;case 35666:return E1;case 35674:return w1;case 35675:return T1;case 35676:return A1;case 5124:case 35670:return C1;case 35667:case 35671:return R1;case 35668:case 35672:return b1;case 35669:case 35673:return P1;case 5125:return L1;case 36294:return D1;case 36295:return N1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return O1;case 36289:case 36303:case 36311:case 36292:return k1}}function z1(s,e){s.uniform1fv(this.addr,e)}function H1(s,e){const t=So(e,this.size,2);s.uniform2fv(this.addr,t)}function V1(s,e){const t=So(e,this.size,3);s.uniform3fv(this.addr,t)}function G1(s,e){const t=So(e,this.size,4);s.uniform4fv(this.addr,t)}function W1(s,e){const t=So(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function X1(s,e){const t=So(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function j1(s,e){const t=So(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Y1(s,e){s.uniform1iv(this.addr,e)}function q1(s,e){s.uniform2iv(this.addr,e)}function $1(s,e){s.uniform3iv(this.addr,e)}function K1(s,e){s.uniform4iv(this.addr,e)}function Z1(s,e){s.uniform1uiv(this.addr,e)}function Q1(s,e){s.uniform2uiv(this.addr,e)}function J1(s,e){s.uniform3uiv(this.addr,e)}function eE(s,e){s.uniform4uiv(this.addr,e)}function tE(s,e,t){const r=this.cache,o=e.length,l=yc(t,o);an(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||S0,l[u])}function nE(s,e,t){const r=this.cache,o=e.length,l=yc(t,o);an(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||E0,l[u])}function iE(s,e,t){const r=this.cache,o=e.length,l=yc(t,o);an(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||w0,l[u])}function rE(s,e,t){const r=this.cache,o=e.length,l=yc(t,o);an(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||M0,l[u])}function sE(s){switch(s){case 5126:return z1;case 35664:return H1;case 35665:return V1;case 35666:return G1;case 35674:return W1;case 35675:return X1;case 35676:return j1;case 5124:case 35670:return Y1;case 35667:case 35671:return q1;case 35668:case 35672:return $1;case 35669:case 35673:return K1;case 5125:return Z1;case 36294:return Q1;case 36295:return J1;case 36296:return eE;case 35678:case 36198:case 36298:case 36306:case 35682:return tE;case 35679:case 36299:case 36307:return nE;case 35680:case 36300:case 36308:case 36293:return iE;case 36289:case 36303:case 36311:case 36292:return rE}}class oE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=B1(t.type)}}class aE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sE(t.type)}}class lE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const h=o[l];h.setValue(e,t[h.id],r)}}}const Lh=/(\w+)(\])?(\[|\.)?/g;function cg(s,e){s.seq.push(e),s.map[e.id]=e}function cE(s,e,t){const r=s.name,o=r.length;for(Lh.lastIndex=0;;){const l=Lh.exec(r),u=Lh.lastIndex;let h=l[1];const f=l[2]==="]",p=l[3];if(f&&(h=h|0),p===void 0||p==="["&&u+2===o){cg(t,p===void 0?new oE(h,s,e):new aE(h,s,e));break}else{let y=t.map[h];y===void 0&&(y=new lE(h),cg(t,y)),t=y}}}class oc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);cE(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const h=t[l],f=r[h.id];f.needsUpdate!==!1&&h.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function ug(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const uE=37297;let hE=0;function dE(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return r.join(`
`)}const hg=new dt;function fE(s){Tt._getMatrix(hg,Tt.workingColorSpace,s);const e=`mat3( ${hg.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(s)){case _c:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function dg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+dE(s.getShaderSource(e),u)}else return o}function pE(s,e){const t=fE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mE(s,e){let t;switch(e){case vy:t="Linear";break;case yy:t="Reinhard";break;case xy:t="Cineon";break;case qg:t="ACESFilmic";break;case My:t="AgX";break;case Ey:t="Neutral";break;case Sy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jl=new z;function gE(){Tt.getLuminanceCoefficients(jl);const s=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _E(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function vE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function yE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let h=1;l.type===s.FLOAT_MAT2&&(h=2),l.type===s.FLOAT_MAT3&&(h=3),l.type===s.FLOAT_MAT4&&(h=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:h}}return t}function da(s){return s!==""}function fg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ad(s){return s.replace(xE,ME)}const SE=new Map;function ME(s,e){let t=ft[e];if(t===void 0){const r=SE.get(e);if(r!==void 0)t=ft[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ad(t)}const EE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mg(s){return s.replace(EE,wE)}function wE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function gg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===jg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===er&&(e="SHADOWMAP_TYPE_VSM"),e}function AE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case po:case mo:e="ENVMAP_TYPE_CUBE";break;case gc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case mo:e="ENVMAP_MODE_REFRACTION";break}return e}function RE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Yg:e="ENVMAP_BLENDING_MULTIPLY";break;case gy:e="ENVMAP_BLENDING_MIX";break;case _y:e="ENVMAP_BLENDING_ADD";break}return e}function bE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function PE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,h=t.fragmentShader;const f=TE(t),p=AE(t),g=CE(t),y=RE(t),_=bE(t),S=_E(t),M=vE(l),w=o.createProgram();let x,v,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(da).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(da).join(`
`),v.length>0&&(v+=`
`)):(x=[gg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),v=[gg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+y:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Or?"#define TONE_MAPPING":"",t.toneMapping!==Or?ft.tonemapping_pars_fragment:"",t.toneMapping!==Or?mE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,pE("linearToOutputTexel",t.outputColorSpace),gE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(da).join(`
`)),u=Ad(u),u=fg(u,t),u=pg(u,t),h=Ad(h),h=fg(h,t),h=pg(h,t),u=mg(u),h=mg(h),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===Rm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=L+x+u,T=L+v+h,G=ug(o,o.VERTEX_SHADER,P),F=ug(o,o.FRAGMENT_SHADER,T);o.attachShader(w,G),o.attachShader(w,F),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function U(k){if(s.debug.checkShaderErrors){const ne=o.getProgramInfoLog(w).trim(),j=o.getShaderInfoLog(G).trim(),X=o.getShaderInfoLog(F).trim();let re=!0,ce=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(re=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,G,F);else{const ue=dg(o,G,"vertex"),V=dg(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ne+`
`+ue+`
`+V)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(j===""||X==="")&&(ce=!1);ce&&(k.diagnostics={runnable:re,programLog:ne,vertexShader:{log:j,prefix:x},fragmentShader:{log:X,prefix:v}})}o.deleteShader(G),o.deleteShader(F),O=new oc(o,w),b=yE(o,w)}let O;this.getUniforms=function(){return O===void 0&&U(this),O};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(w,uE)),C},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hE++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=G,this.fragmentShader=F,this}let LE=0;class DE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new NE(e),t.set(e,r)),r}}class NE{constructor(e){this.id=LE++,this.code=e,this.usedTimes=0}}function IE(s,e,t,r,o,l,u){const h=new h0,f=new DE,p=new Set,g=[],y=o.logarithmicDepthBuffer,_=o.vertexTextures;let S=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return p.add(b),b===0?"uv":`uv${b}`}function x(b,C,k,ne,j){const X=ne.fog,re=j.geometry,ce=b.isMeshStandardMaterial?ne.environment:null,ue=(b.isMeshStandardMaterial?t:e).get(b.envMap||ce),V=ue&&ue.mapping===gc?ue.image.height:null,se=M[b.type];b.precision!==null&&(S=o.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const ie=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,N=ie!==void 0?ie.length:0;let ee=0;re.morphAttributes.position!==void 0&&(ee=1),re.morphAttributes.normal!==void 0&&(ee=2),re.morphAttributes.color!==void 0&&(ee=3);let Ce,Q,de,Ee;if(se){const Mt=Ii[se];Ce=Mt.vertexShader,Q=Mt.fragmentShader}else Ce=b.vertexShader,Q=b.fragmentShader,f.update(b),de=f.getVertexShaderID(b),Ee=f.getFragmentShaderID(b);const ye=s.getRenderTarget(),Re=s.state.buffers.depth.getReversed(),Ue=j.isInstancedMesh===!0,nt=j.isBatchedMesh===!0,Ut=!!b.map,yt=!!b.matcap,Ht=!!ue,K=!!b.aoMap,Rn=!!b.lightMap,vt=!!b.bumpMap,mt=!!b.normalMap,Je=!!b.displacementMap,Pt=!!b.emissiveMap,Ze=!!b.metalnessMap,D=!!b.roughnessMap,A=b.anisotropy>0,te=b.clearcoat>0,me=b.dispersion>0,_e=b.iridescence>0,fe=b.sheen>0,We=b.transmission>0,be=A&&!!b.anisotropyMap,Fe=te&&!!b.clearcoatMap,pt=te&&!!b.clearcoatNormalMap,Se=te&&!!b.clearcoatRoughnessMap,ke=_e&&!!b.iridescenceMap,it=_e&&!!b.iridescenceThicknessMap,rt=fe&&!!b.sheenColorMap,Be=fe&&!!b.sheenRoughnessMap,gt=!!b.specularMap,ct=!!b.specularColorMap,bt=!!b.specularIntensityMap,Y=We&&!!b.transmissionMap,Pe=We&&!!b.thicknessMap,he=!!b.gradientMap,pe=!!b.alphaMap,Ne=b.alphaTest>0,De=!!b.alphaHash,ut=!!b.extensions;let Wt=Or;b.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Wt=s.toneMapping);const tn={shaderID:se,shaderType:b.type,shaderName:b.name,vertexShader:Ce,fragmentShader:Q,defines:b.defines,customVertexShaderID:de,customFragmentShaderID:Ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:nt,batchingColor:nt&&j._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&j.instanceColor!==null,instancingMorph:Ue&&j.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:xo,alphaToCoverage:!!b.alphaToCoverage,map:Ut,matcap:yt,envMap:Ht,envMapMode:Ht&&ue.mapping,envMapCubeUVHeight:V,aoMap:K,lightMap:Rn,bumpMap:vt,normalMap:mt,displacementMap:_&&Je,emissiveMap:Pt,normalMapObjectSpace:mt&&b.normalMapType===Cy,normalMapTangentSpace:mt&&b.normalMapType===o0,metalnessMap:Ze,roughnessMap:D,anisotropy:A,anisotropyMap:be,clearcoat:te,clearcoatMap:Fe,clearcoatNormalMap:pt,clearcoatRoughnessMap:Se,dispersion:me,iridescence:_e,iridescenceMap:ke,iridescenceThicknessMap:it,sheen:fe,sheenColorMap:rt,sheenRoughnessMap:Be,specularMap:gt,specularColorMap:ct,specularIntensityMap:bt,transmission:We,transmissionMap:Y,thicknessMap:Pe,gradientMap:he,opaque:b.transparent===!1&&b.blending===co&&b.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ne,alphaHash:De,combine:b.combine,mapUv:Ut&&w(b.map.channel),aoMapUv:K&&w(b.aoMap.channel),lightMapUv:Rn&&w(b.lightMap.channel),bumpMapUv:vt&&w(b.bumpMap.channel),normalMapUv:mt&&w(b.normalMap.channel),displacementMapUv:Je&&w(b.displacementMap.channel),emissiveMapUv:Pt&&w(b.emissiveMap.channel),metalnessMapUv:Ze&&w(b.metalnessMap.channel),roughnessMapUv:D&&w(b.roughnessMap.channel),anisotropyMapUv:be&&w(b.anisotropyMap.channel),clearcoatMapUv:Fe&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:pt&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:it&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:Be&&w(b.sheenRoughnessMap.channel),specularMapUv:gt&&w(b.specularMap.channel),specularColorMapUv:ct&&w(b.specularColorMap.channel),specularIntensityMapUv:bt&&w(b.specularIntensityMap.channel),transmissionMapUv:Y&&w(b.transmissionMap.channel),thicknessMapUv:Pe&&w(b.thicknessMap.channel),alphaMapUv:pe&&w(b.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(mt||A),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!re.attributes.uv&&(Ut||pe),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:Re,skinning:j.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ee,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Ut&&b.map.isVideoTexture===!0&&Tt.getTransfer(b.map.colorSpace)===Ft,decodeVideoTextureEmissive:Pt&&b.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(b.emissiveMap.colorSpace)===Ft,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===vn,flipSided:b.side===qn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ut&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&b.extensions.multiDraw===!0||nt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return tn.vertexUv1s=p.has(1),tn.vertexUv2s=p.has(2),tn.vertexUv3s=p.has(3),p.clear(),tn}function v(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)C.push(k),C.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(L(C,b),P(C,b),C.push(s.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function L(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function P(b,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),b.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reverseDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),b.push(h.mask)}function T(b){const C=M[b.type];let k;if(C){const ne=Ii[C];k=_x.clone(ne.uniforms)}else k=b.uniforms;return k}function G(b,C){let k;for(let ne=0,j=g.length;ne<j;ne++){const X=g[ne];if(X.cacheKey===C){k=X,++k.usedTimes;break}}return k===void 0&&(k=new PE(s,C,b,l),g.push(k)),k}function F(b){if(--b.usedTimes===0){const C=g.indexOf(b);g[C]=g[g.length-1],g.pop(),b.destroy()}}function U(b){f.remove(b)}function O(){f.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:T,acquireProgram:G,releaseProgram:F,releaseShaderCache:U,programs:g,dispose:O}}function UE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function r(u){s.delete(u)}function o(u,h,f){s.get(u)[h]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function FE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function _g(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function vg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(y,_,S,M,w,x){let v=s[e];return v===void 0?(v={id:y.id,object:y,geometry:_,material:S,groupOrder:M,renderOrder:y.renderOrder,z:w,group:x},s[e]=v):(v.id=y.id,v.object=y,v.geometry=_,v.material=S,v.groupOrder=M,v.renderOrder=y.renderOrder,v.z=w,v.group=x),e++,v}function h(y,_,S,M,w,x){const v=u(y,_,S,M,w,x);S.transmission>0?r.push(v):S.transparent===!0?o.push(v):t.push(v)}function f(y,_,S,M,w,x){const v=u(y,_,S,M,w,x);S.transmission>0?r.unshift(v):S.transparent===!0?o.unshift(v):t.unshift(v)}function p(y,_){t.length>1&&t.sort(y||FE),r.length>1&&r.sort(_||_g),o.length>1&&o.sort(_||_g)}function g(){for(let y=e,_=s.length;y<_;y++){const S=s[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:f,finish:g,sort:p}}function OE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new vg,s.set(r,[u])):o>=l.length?(u=new vg,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function kE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ge};break;case"SpotLight":t={position:new z,direction:new z,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new z,halfWidth:new z,halfHeight:new z};break}return s[e.id]=t,t}}}function BE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let zE=0;function HE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function VE(s){const e=new kE,t=BE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new z);const o=new z,l=new Gt,u=new Gt;function h(p){let g=0,y=0,_=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,M=0,w=0,x=0,v=0,L=0,P=0,T=0,G=0,F=0,U=0;p.sort(HE);for(let b=0,C=p.length;b<C;b++){const k=p[b],ne=k.color,j=k.intensity,X=k.distance,re=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=ne.r*j,y+=ne.g*j,_+=ne.b*j;else if(k.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(k.sh.coefficients[ce],j);U++}else if(k.isDirectionalLight){const ce=e.get(k);if(ce.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const ue=k.shadow,V=t.get(k);V.shadowIntensity=ue.intensity,V.shadowBias=ue.bias,V.shadowNormalBias=ue.normalBias,V.shadowRadius=ue.radius,V.shadowMapSize=ue.mapSize,r.directionalShadow[S]=V,r.directionalShadowMap[S]=re,r.directionalShadowMatrix[S]=k.shadow.matrix,L++}r.directional[S]=ce,S++}else if(k.isSpotLight){const ce=e.get(k);ce.position.setFromMatrixPosition(k.matrixWorld),ce.color.copy(ne).multiplyScalar(j),ce.distance=X,ce.coneCos=Math.cos(k.angle),ce.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ce.decay=k.decay,r.spot[w]=ce;const ue=k.shadow;if(k.map&&(r.spotLightMap[G]=k.map,G++,ue.updateMatrices(k),k.castShadow&&F++),r.spotLightMatrix[w]=ue.matrix,k.castShadow){const V=t.get(k);V.shadowIntensity=ue.intensity,V.shadowBias=ue.bias,V.shadowNormalBias=ue.normalBias,V.shadowRadius=ue.radius,V.shadowMapSize=ue.mapSize,r.spotShadow[w]=V,r.spotShadowMap[w]=re,T++}w++}else if(k.isRectAreaLight){const ce=e.get(k);ce.color.copy(ne).multiplyScalar(j),ce.halfWidth.set(k.width*.5,0,0),ce.halfHeight.set(0,k.height*.5,0),r.rectArea[x]=ce,x++}else if(k.isPointLight){const ce=e.get(k);if(ce.color.copy(k.color).multiplyScalar(k.intensity),ce.distance=k.distance,ce.decay=k.decay,k.castShadow){const ue=k.shadow,V=t.get(k);V.shadowIntensity=ue.intensity,V.shadowBias=ue.bias,V.shadowNormalBias=ue.normalBias,V.shadowRadius=ue.radius,V.shadowMapSize=ue.mapSize,V.shadowCameraNear=ue.camera.near,V.shadowCameraFar=ue.camera.far,r.pointShadow[M]=V,r.pointShadowMap[M]=re,r.pointShadowMatrix[M]=k.shadow.matrix,P++}r.point[M]=ce,M++}else if(k.isHemisphereLight){const ce=e.get(k);ce.skyColor.copy(k.color).multiplyScalar(j),ce.groundColor.copy(k.groundColor).multiplyScalar(j),r.hemi[v]=ce,v++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=y,r.ambient[2]=_;const O=r.hash;(O.directionalLength!==S||O.pointLength!==M||O.spotLength!==w||O.rectAreaLength!==x||O.hemiLength!==v||O.numDirectionalShadows!==L||O.numPointShadows!==P||O.numSpotShadows!==T||O.numSpotMaps!==G||O.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=x,r.point.length=M,r.hemi.length=v,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=T+G-F,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=U,O.directionalLength=S,O.pointLength=M,O.spotLength=w,O.rectAreaLength=x,O.hemiLength=v,O.numDirectionalShadows=L,O.numPointShadows=P,O.numSpotShadows=T,O.numSpotMaps=G,O.numLightProbes=U,r.version=zE++)}function f(p,g){let y=0,_=0,S=0,M=0,w=0;const x=g.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const P=p[v];if(P.isDirectionalLight){const T=r.directional[y];T.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(x),y++}else if(P.isSpotLight){const T=r.spot[S];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(x),T.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(x),S++}else if(P.isRectAreaLight){const T=r.rectArea[M];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(x),u.identity(),l.copy(P.matrixWorld),l.premultiply(x),u.extractRotation(l),T.halfWidth.set(P.width*.5,0,0),T.halfHeight.set(0,P.height*.5,0),T.halfWidth.applyMatrix4(u),T.halfHeight.applyMatrix4(u),M++}else if(P.isPointLight){const T=r.point[_];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(x),_++}else if(P.isHemisphereLight){const T=r.hemi[w];T.direction.setFromMatrixPosition(P.matrixWorld),T.direction.transformDirection(x),w++}}}return{setup:h,setupView:f,state:r}}function yg(s){const e=new VE(s),t=[],r=[];function o(g){p.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function u(g){r.push(g)}function h(){e.setup(t)}function f(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:h,setupLightsView:f,pushLight:l,pushShadow:u}}function GE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let h;return u===void 0?(h=new yg(s),e.set(o,[h])):l>=u.length?(h=new yg(s),u.push(h)):h=u[l],h}function r(){e=new WeakMap}return{get:t,dispose:r}}class WE extends zr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ty,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XE extends zr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qE(s,e,t){let r=new Od;const o=new Qe,l=new Qe,u=new kt,h=new WE({depthPacking:Ay}),f=new XE,p={},g=t.maxTextureSize,y={[kr]:qn,[qn]:kr,[vn]:vn},_=new Br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:jE,fragmentShader:YE}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const M=new pn;M.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new we(M,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xg;let v=this.type;this.render=function(F,U,O){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;const b=s.getRenderTarget(),C=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(Fr),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const j=v!==er&&this.type===er,X=v===er&&this.type!==er;for(let re=0,ce=F.length;re<ce;re++){const ue=F[re],V=ue.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const se=V.getFrameExtents();if(o.multiply(se),l.copy(V.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/se.x),o.x=l.x*se.x,V.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/se.y),o.y=l.y*se.y,V.mapSize.y=l.y)),V.map===null||j===!0||X===!0){const N=this.type!==er?{minFilter:Ci,magFilter:Ci}:{};V.map!==null&&V.map.dispose(),V.map=new fs(o.x,o.y,N),V.map.texture.name=ue.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const ie=V.getViewportCount();for(let N=0;N<ie;N++){const ee=V.getViewport(N);u.set(l.x*ee.x,l.y*ee.y,l.x*ee.z,l.y*ee.w),ne.viewport(u),V.updateMatrices(ue,N),r=V.getFrustum(),T(U,O,V.camera,ue,this.type)}V.isPointLightShadow!==!0&&this.type===er&&L(V,O),V.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(b,C,k)};function L(F,U){const O=e.update(w);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new fs(o.x,o.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(U,null,O,_,w,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(U,null,O,S,w,null)}function P(F,U,O,b){let C=null;const k=O.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)C=k;else if(C=O.isPointLight===!0?f:h,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ne=C.uuid,j=U.uuid;let X=p[ne];X===void 0&&(X={},p[ne]=X);let re=X[j];re===void 0&&(re=C.clone(),X[j]=re,U.addEventListener("dispose",G)),C=re}if(C.visible=U.visible,C.wireframe=U.wireframe,b===er?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:y[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,O.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ne=s.properties.get(C);ne.light=O}return C}function T(F,U,O,b,C){if(F.visible===!1)return;if(F.layers.test(U.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===er)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,F.matrixWorld);const j=e.update(F),X=F.material;if(Array.isArray(X)){const re=j.groups;for(let ce=0,ue=re.length;ce<ue;ce++){const V=re[ce],se=X[V.materialIndex];if(se&&se.visible){const ie=P(F,se,b,C);F.onBeforeShadow(s,F,U,O,j,ie,V),s.renderBufferDirect(O,null,j,ie,F,V),F.onAfterShadow(s,F,U,O,j,ie,V)}}}else if(X.visible){const re=P(F,X,b,C);F.onBeforeShadow(s,F,U,O,j,re,null),s.renderBufferDirect(O,null,j,re,F,null),F.onAfterShadow(s,F,U,O,j,re,null)}}const ne=F.children;for(let j=0,X=ne.length;j<X;j++)T(ne[j],U,O,b,C)}function G(F){F.target.removeEventListener("dispose",G);for(const O in p){const b=p[O],C=F.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}const $E={[Vh]:Gh,[Wh]:Yh,[Xh]:qh,[fo]:jh,[Gh]:Vh,[Yh]:Wh,[qh]:Xh,[jh]:fo};function KE(s,e){function t(){let Y=!1;const Pe=new kt;let he=null;const pe=new kt(0,0,0,0);return{setMask:function(Ne){he!==Ne&&!Y&&(s.colorMask(Ne,Ne,Ne,Ne),he=Ne)},setLocked:function(Ne){Y=Ne},setClear:function(Ne,De,ut,Wt,tn){tn===!0&&(Ne*=Wt,De*=Wt,ut*=Wt),Pe.set(Ne,De,ut,Wt),pe.equals(Pe)===!1&&(s.clearColor(Ne,De,ut,Wt),pe.copy(Pe))},reset:function(){Y=!1,he=null,pe.set(-1,0,0,0)}}}function r(){let Y=!1,Pe=!1,he=null,pe=null,Ne=null;return{setReversed:function(De){if(Pe!==De){const ut=e.get("EXT_clip_control");Pe?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT);const Wt=Ne;Ne=null,this.setClear(Wt)}Pe=De},getReversed:function(){return Pe},setTest:function(De){De?ye(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(De){he!==De&&!Y&&(s.depthMask(De),he=De)},setFunc:function(De){if(Pe&&(De=$E[De]),pe!==De){switch(De){case Vh:s.depthFunc(s.NEVER);break;case Gh:s.depthFunc(s.ALWAYS);break;case Wh:s.depthFunc(s.LESS);break;case fo:s.depthFunc(s.LEQUAL);break;case Xh:s.depthFunc(s.EQUAL);break;case jh:s.depthFunc(s.GEQUAL);break;case Yh:s.depthFunc(s.GREATER);break;case qh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=De}},setLocked:function(De){Y=De},setClear:function(De){Ne!==De&&(Pe&&(De=1-De),s.clearDepth(De),Ne=De)},reset:function(){Y=!1,he=null,pe=null,Ne=null,Pe=!1}}}function o(){let Y=!1,Pe=null,he=null,pe=null,Ne=null,De=null,ut=null,Wt=null,tn=null;return{setTest:function(Mt){Y||(Mt?ye(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(Mt){Pe!==Mt&&!Y&&(s.stencilMask(Mt),Pe=Mt)},setFunc:function(Mt,On,bn){(he!==Mt||pe!==On||Ne!==bn)&&(s.stencilFunc(Mt,On,bn),he=Mt,pe=On,Ne=bn)},setOp:function(Mt,On,bn){(De!==Mt||ut!==On||Wt!==bn)&&(s.stencilOp(Mt,On,bn),De=Mt,ut=On,Wt=bn)},setLocked:function(Mt){Y=Mt},setClear:function(Mt){tn!==Mt&&(s.clearStencil(Mt),tn=Mt)},reset:function(){Y=!1,Pe=null,he=null,pe=null,Ne=null,De=null,ut=null,Wt=null,tn=null}}}const l=new t,u=new r,h=new o,f=new WeakMap,p=new WeakMap;let g={},y={},_=new WeakMap,S=[],M=null,w=!1,x=null,v=null,L=null,P=null,T=null,G=null,F=null,U=new Ge(0,0,0),O=0,b=!1,C=null,k=null,ne=null,j=null,X=null;const re=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,ue=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(V)[1]),ce=ue>=1):V.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ce=ue>=2);let se=null,ie={};const N=s.getParameter(s.SCISSOR_BOX),ee=s.getParameter(s.VIEWPORT),Ce=new kt().fromArray(N),Q=new kt().fromArray(ee);function de(Y,Pe,he,pe){const Ne=new Uint8Array(4),De=s.createTexture();s.bindTexture(Y,De),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ut=0;ut<he;ut++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,Ne):s.texImage2D(Pe+ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ne);return De}const Ee={};Ee[s.TEXTURE_2D]=de(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=de(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=de(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=de(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),ye(s.DEPTH_TEST),u.setFunc(fo),vt(!1),mt(Em),ye(s.CULL_FACE),K(Fr);function ye(Y){g[Y]!==!0&&(s.enable(Y),g[Y]=!0)}function Re(Y){g[Y]!==!1&&(s.disable(Y),g[Y]=!1)}function Ue(Y,Pe){return y[Y]!==Pe?(s.bindFramebuffer(Y,Pe),y[Y]=Pe,Y===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=Pe),Y===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function nt(Y,Pe){let he=S,pe=!1;if(Y){he=_.get(Pe),he===void 0&&(he=[],_.set(Pe,he));const Ne=Y.textures;if(he.length!==Ne.length||he[0]!==s.COLOR_ATTACHMENT0){for(let De=0,ut=Ne.length;De<ut;De++)he[De]=s.COLOR_ATTACHMENT0+De;he.length=Ne.length,pe=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,pe=!0);pe&&s.drawBuffers(he)}function Ut(Y){return M!==Y?(s.useProgram(Y),M=Y,!0):!1}const yt={[ls]:s.FUNC_ADD,[Jv]:s.FUNC_SUBTRACT,[ey]:s.FUNC_REVERSE_SUBTRACT};yt[ty]=s.MIN,yt[ny]=s.MAX;const Ht={[iy]:s.ZERO,[ry]:s.ONE,[sy]:s.SRC_COLOR,[zh]:s.SRC_ALPHA,[hy]:s.SRC_ALPHA_SATURATE,[cy]:s.DST_COLOR,[ay]:s.DST_ALPHA,[oy]:s.ONE_MINUS_SRC_COLOR,[Hh]:s.ONE_MINUS_SRC_ALPHA,[uy]:s.ONE_MINUS_DST_COLOR,[ly]:s.ONE_MINUS_DST_ALPHA,[dy]:s.CONSTANT_COLOR,[fy]:s.ONE_MINUS_CONSTANT_COLOR,[py]:s.CONSTANT_ALPHA,[my]:s.ONE_MINUS_CONSTANT_ALPHA};function K(Y,Pe,he,pe,Ne,De,ut,Wt,tn,Mt){if(Y===Fr){w===!0&&(Re(s.BLEND),w=!1);return}if(w===!1&&(ye(s.BLEND),w=!0),Y!==Qv){if(Y!==x||Mt!==b){if((v!==ls||T!==ls)&&(s.blendEquation(s.FUNC_ADD),v=ls,T=ls),Mt)switch(Y){case co:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wm:s.blendFunc(s.ONE,s.ONE);break;case Tm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Am:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case co:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wm:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Tm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Am:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}L=null,P=null,G=null,F=null,U.set(0,0,0),O=0,x=Y,b=Mt}return}Ne=Ne||Pe,De=De||he,ut=ut||pe,(Pe!==v||Ne!==T)&&(s.blendEquationSeparate(yt[Pe],yt[Ne]),v=Pe,T=Ne),(he!==L||pe!==P||De!==G||ut!==F)&&(s.blendFuncSeparate(Ht[he],Ht[pe],Ht[De],Ht[ut]),L=he,P=pe,G=De,F=ut),(Wt.equals(U)===!1||tn!==O)&&(s.blendColor(Wt.r,Wt.g,Wt.b,tn),U.copy(Wt),O=tn),x=Y,b=!1}function Rn(Y,Pe){Y.side===vn?Re(s.CULL_FACE):ye(s.CULL_FACE);let he=Y.side===qn;Pe&&(he=!he),vt(he),Y.blending===co&&Y.transparent===!1?K(Fr):K(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const pe=Y.stencilWrite;h.setTest(pe),pe&&(h.setMask(Y.stencilWriteMask),h.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),h.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Pt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(Y){C!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),C=Y)}function mt(Y){Y!==Kv?(ye(s.CULL_FACE),Y!==k&&(Y===Em?s.cullFace(s.BACK):Y===Zv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),k=Y}function Je(Y){Y!==ne&&(ce&&s.lineWidth(Y),ne=Y)}function Pt(Y,Pe,he){Y?(ye(s.POLYGON_OFFSET_FILL),(j!==Pe||X!==he)&&(s.polygonOffset(Pe,he),j=Pe,X=he)):Re(s.POLYGON_OFFSET_FILL)}function Ze(Y){Y?ye(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function D(Y){Y===void 0&&(Y=s.TEXTURE0+re-1),se!==Y&&(s.activeTexture(Y),se=Y)}function A(Y,Pe,he){he===void 0&&(se===null?he=s.TEXTURE0+re-1:he=se);let pe=ie[he];pe===void 0&&(pe={type:void 0,texture:void 0},ie[he]=pe),(pe.type!==Y||pe.texture!==Pe)&&(se!==he&&(s.activeTexture(he),se=he),s.bindTexture(Y,Pe||Ee[Y]),pe.type=Y,pe.texture=Pe)}function te(){const Y=ie[se];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pt(){try{s.texStorage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Se(){try{s.texStorage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ke(){try{s.texImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function it(){try{s.texImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function rt(Y){Ce.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),Ce.copy(Y))}function Be(Y){Q.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),Q.copy(Y))}function gt(Y,Pe){let he=p.get(Pe);he===void 0&&(he=new WeakMap,p.set(Pe,he));let pe=he.get(Y);pe===void 0&&(pe=s.getUniformBlockIndex(Pe,Y.name),he.set(Y,pe))}function ct(Y,Pe){const pe=p.get(Pe).get(Y);f.get(Pe)!==pe&&(s.uniformBlockBinding(Pe,pe,Y.__bindingPointIndex),f.set(Pe,pe))}function bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},se=null,ie={},y={},_=new WeakMap,S=[],M=null,w=!1,x=null,v=null,L=null,P=null,T=null,G=null,F=null,U=new Ge(0,0,0),O=0,b=!1,C=null,k=null,ne=null,j=null,X=null,Ce.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:ye,disable:Re,bindFramebuffer:Ue,drawBuffers:nt,useProgram:Ut,setBlending:K,setMaterial:Rn,setFlipSided:vt,setCullFace:mt,setLineWidth:Je,setPolygonOffset:Pt,setScissorTest:Ze,activeTexture:D,bindTexture:A,unbindTexture:te,compressedTexImage2D:me,compressedTexImage3D:_e,texImage2D:ke,texImage3D:it,updateUBOMapping:gt,uniformBlockBinding:ct,texStorage2D:pt,texStorage3D:Se,texSubImage2D:fe,texSubImage3D:We,compressedTexSubImage2D:be,compressedTexSubImage3D:Fe,scissor:rt,viewport:Be,reset:bt}}function xg(s,e,t,r){const o=ZE(r);switch(t){case Jg:return s*e;case t0:return s*e;case n0:return s*e*2;case i0:return s*e/o.components*o.byteLength;case Nd:return s*e/o.components*o.byteLength;case r0:return s*e*2/o.components*o.byteLength;case Id:return s*e*2/o.components*o.byteLength;case e0:return s*e*3/o.components*o.byteLength;case Ai:return s*e*4/o.components*o.byteLength;case Ud:return s*e*4/o.components*o.byteLength;case tc:case nc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ic:case rc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ed:case nd:return Math.max(s,16)*Math.max(e,8)/4;case Jh:case td:return Math.max(s,8)*Math.max(e,8)/2;case id:case rd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case sd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case od:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ad:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ld:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case cd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ud:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case hd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case dd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case fd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case pd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case md:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case gd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case _d:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case vd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case yd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case sc:case xd:case Sd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case s0:case Md:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ed:case wd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ZE(s){switch(s){case sr:case Kg:return{byteLength:1,components:1};case ma:case Zg:case ga:return{byteLength:2,components:1};case Ld:case Dd:return{byteLength:2,components:4};case ds:case Pd:case tr:return{byteLength:4,components:1};case Qg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function QE(s,e,t,r,o,l,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Qe,g=new WeakMap;let y;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,A){return S?new OffscreenCanvas(D,A):cc("canvas")}function w(D,A,te){let me=1;const _e=Ze(D);if((_e.width>te||_e.height>te)&&(me=te/Math.max(_e.width,_e.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const fe=Math.floor(me*_e.width),We=Math.floor(me*_e.height);y===void 0&&(y=M(fe,We));const be=A?M(fe,We):y;return be.width=fe,be.height=We,be.getContext("2d").drawImage(D,0,0,fe,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+fe+"x"+We+")."),be}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),D;return D}function x(D){return D.generateMipmaps}function v(D){s.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(D,A,te,me,_e=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let fe=A;if(A===s.RED&&(te===s.FLOAT&&(fe=s.R32F),te===s.HALF_FLOAT&&(fe=s.R16F),te===s.UNSIGNED_BYTE&&(fe=s.R8)),A===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.R8UI),te===s.UNSIGNED_SHORT&&(fe=s.R16UI),te===s.UNSIGNED_INT&&(fe=s.R32UI),te===s.BYTE&&(fe=s.R8I),te===s.SHORT&&(fe=s.R16I),te===s.INT&&(fe=s.R32I)),A===s.RG&&(te===s.FLOAT&&(fe=s.RG32F),te===s.HALF_FLOAT&&(fe=s.RG16F),te===s.UNSIGNED_BYTE&&(fe=s.RG8)),A===s.RG_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.RG8UI),te===s.UNSIGNED_SHORT&&(fe=s.RG16UI),te===s.UNSIGNED_INT&&(fe=s.RG32UI),te===s.BYTE&&(fe=s.RG8I),te===s.SHORT&&(fe=s.RG16I),te===s.INT&&(fe=s.RG32I)),A===s.RGB_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),te===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),te===s.UNSIGNED_INT&&(fe=s.RGB32UI),te===s.BYTE&&(fe=s.RGB8I),te===s.SHORT&&(fe=s.RGB16I),te===s.INT&&(fe=s.RGB32I)),A===s.RGBA_INTEGER&&(te===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),te===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),te===s.UNSIGNED_INT&&(fe=s.RGBA32UI),te===s.BYTE&&(fe=s.RGBA8I),te===s.SHORT&&(fe=s.RGBA16I),te===s.INT&&(fe=s.RGBA32I)),A===s.RGB&&te===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),A===s.RGBA){const We=_e?_c:Tt.getTransfer(me);te===s.FLOAT&&(fe=s.RGBA32F),te===s.HALF_FLOAT&&(fe=s.RGBA16F),te===s.UNSIGNED_BYTE&&(fe=We===Ft?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function T(D,A){let te;return D?A===null||A===ds||A===go?te=s.DEPTH24_STENCIL8:A===tr?te=s.DEPTH32F_STENCIL8:A===ma&&(te=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ds||A===go?te=s.DEPTH_COMPONENT24:A===tr?te=s.DEPTH_COMPONENT32F:A===ma&&(te=s.DEPTH_COMPONENT16),te}function G(D,A){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ci&&D.minFilter!==Fi?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function F(D){const A=D.target;A.removeEventListener("dispose",F),O(A),A.isVideoTexture&&g.delete(A)}function U(D){const A=D.target;A.removeEventListener("dispose",U),C(A)}function O(D){const A=r.get(D);if(A.__webglInit===void 0)return;const te=D.source,me=_.get(te);if(me){const _e=me[A.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&b(D),Object.keys(me).length===0&&_.delete(te)}r.remove(D)}function b(D){const A=r.get(D);s.deleteTexture(A.__webglTexture);const te=D.source,me=_.get(te);delete me[A.__cacheKey],u.memory.textures--}function C(D){const A=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(A.__webglFramebuffer[me]))for(let _e=0;_e<A.__webglFramebuffer[me].length;_e++)s.deleteFramebuffer(A.__webglFramebuffer[me][_e]);else s.deleteFramebuffer(A.__webglFramebuffer[me]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[me])}else{if(Array.isArray(A.__webglFramebuffer))for(let me=0;me<A.__webglFramebuffer.length;me++)s.deleteFramebuffer(A.__webglFramebuffer[me]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let me=0;me<A.__webglColorRenderbuffer.length;me++)A.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[me]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const te=D.textures;for(let me=0,_e=te.length;me<_e;me++){const fe=r.get(te[me]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove(te[me])}r.remove(D)}let k=0;function ne(){k=0}function j(){const D=k;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),k+=1,D}function X(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function re(D,A){const te=r.get(D);if(D.isVideoTexture&&Je(D),D.isRenderTargetTexture===!1&&D.version>0&&te.__version!==D.version){const me=D.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(te,D,A);return}}t.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+A)}function ce(D,A){const te=r.get(D);if(D.version>0&&te.__version!==D.version){Q(te,D,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+A)}function ue(D,A){const te=r.get(D);if(D.version>0&&te.__version!==D.version){Q(te,D,A);return}t.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+A)}function V(D,A){const te=r.get(D);if(D.version>0&&te.__version!==D.version){de(te,D,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+A)}const se={[Zh]:s.REPEAT,[us]:s.CLAMP_TO_EDGE,[Qh]:s.MIRRORED_REPEAT},ie={[Ci]:s.NEAREST,[wy]:s.NEAREST_MIPMAP_NEAREST,[Al]:s.NEAREST_MIPMAP_LINEAR,[Fi]:s.LINEAR,[sh]:s.LINEAR_MIPMAP_NEAREST,[hs]:s.LINEAR_MIPMAP_LINEAR},N={[Ry]:s.NEVER,[Iy]:s.ALWAYS,[by]:s.LESS,[a0]:s.LEQUAL,[Py]:s.EQUAL,[Ny]:s.GEQUAL,[Ly]:s.GREATER,[Dy]:s.NOTEQUAL};function ee(D,A){if(A.type===tr&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Fi||A.magFilter===sh||A.magFilter===Al||A.magFilter===hs||A.minFilter===Fi||A.minFilter===sh||A.minFilter===Al||A.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,se[A.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,se[A.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,se[A.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ie[A.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ie[A.minFilter]),A.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,N[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ci||A.minFilter!==Al&&A.minFilter!==hs||A.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function Ce(D,A){let te=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",F));const me=A.source;let _e=_.get(me);_e===void 0&&(_e={},_.set(me,_e));const fe=X(A);if(fe!==D.__cacheKey){_e[fe]===void 0&&(_e[fe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,te=!0),_e[fe].usedTimes++;const We=_e[D.__cacheKey];We!==void 0&&(_e[D.__cacheKey].usedTimes--,We.usedTimes===0&&b(A)),D.__cacheKey=fe,D.__webglTexture=_e[fe].texture}return te}function Q(D,A,te){let me=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(me=s.TEXTURE_3D);const _e=Ce(D,A),fe=A.source;t.bindTexture(me,D.__webglTexture,s.TEXTURE0+te);const We=r.get(fe);if(fe.version!==We.__version||_e===!0){t.activeTexture(s.TEXTURE0+te);const be=Tt.getPrimaries(Tt.workingColorSpace),Fe=A.colorSpace===Ur?null:Tt.getPrimaries(A.colorSpace),pt=A.colorSpace===Ur||be===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Se=w(A.image,!1,o.maxTextureSize);Se=Pt(A,Se);const ke=l.convert(A.format,A.colorSpace),it=l.convert(A.type);let rt=P(A.internalFormat,ke,it,A.colorSpace,A.isVideoTexture);ee(me,A);let Be;const gt=A.mipmaps,ct=A.isVideoTexture!==!0,bt=We.__version===void 0||_e===!0,Y=fe.dataReady,Pe=G(A,Se);if(A.isDepthTexture)rt=T(A.format===_o,A.type),bt&&(ct?t.texStorage2D(s.TEXTURE_2D,1,rt,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,rt,Se.width,Se.height,0,ke,it,null));else if(A.isDataTexture)if(gt.length>0){ct&&bt&&t.texStorage2D(s.TEXTURE_2D,Pe,rt,gt[0].width,gt[0].height);for(let he=0,pe=gt.length;he<pe;he++)Be=gt[he],ct?Y&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Be.width,Be.height,ke,it,Be.data):t.texImage2D(s.TEXTURE_2D,he,rt,Be.width,Be.height,0,ke,it,Be.data);A.generateMipmaps=!1}else ct?(bt&&t.texStorage2D(s.TEXTURE_2D,Pe,rt,Se.width,Se.height),Y&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se.width,Se.height,ke,it,Se.data)):t.texImage2D(s.TEXTURE_2D,0,rt,Se.width,Se.height,0,ke,it,Se.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ct&&bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,rt,gt[0].width,gt[0].height,Se.depth);for(let he=0,pe=gt.length;he<pe;he++)if(Be=gt[he],A.format!==Ai)if(ke!==null)if(ct){if(Y)if(A.layerUpdates.size>0){const Ne=xg(Be.width,Be.height,A.format,A.type);for(const De of A.layerUpdates){const ut=Be.data.subarray(De*Ne/Be.data.BYTES_PER_ELEMENT,(De+1)*Ne/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,De,Be.width,Be.height,1,ke,ut)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Be.width,Be.height,Se.depth,ke,Be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,rt,Be.width,Be.height,Se.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?Y&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Be.width,Be.height,Se.depth,ke,it,Be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,he,rt,Be.width,Be.height,Se.depth,0,ke,it,Be.data)}else{ct&&bt&&t.texStorage2D(s.TEXTURE_2D,Pe,rt,gt[0].width,gt[0].height);for(let he=0,pe=gt.length;he<pe;he++)Be=gt[he],A.format!==Ai?ke!==null?ct?Y&&t.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(s.TEXTURE_2D,he,rt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?Y&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Be.width,Be.height,ke,it,Be.data):t.texImage2D(s.TEXTURE_2D,he,rt,Be.width,Be.height,0,ke,it,Be.data)}else if(A.isDataArrayTexture)if(ct){if(bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,rt,Se.width,Se.height,Se.depth),Y)if(A.layerUpdates.size>0){const he=xg(Se.width,Se.height,A.format,A.type);for(const pe of A.layerUpdates){const Ne=Se.data.subarray(pe*he/Se.data.BYTES_PER_ELEMENT,(pe+1)*he/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Se.width,Se.height,1,ke,it,Ne)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ke,it,Se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,rt,Se.width,Se.height,Se.depth,0,ke,it,Se.data);else if(A.isData3DTexture)ct?(bt&&t.texStorage3D(s.TEXTURE_3D,Pe,rt,Se.width,Se.height,Se.depth),Y&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ke,it,Se.data)):t.texImage3D(s.TEXTURE_3D,0,rt,Se.width,Se.height,Se.depth,0,ke,it,Se.data);else if(A.isFramebufferTexture){if(bt)if(ct)t.texStorage2D(s.TEXTURE_2D,Pe,rt,Se.width,Se.height);else{let he=Se.width,pe=Se.height;for(let Ne=0;Ne<Pe;Ne++)t.texImage2D(s.TEXTURE_2D,Ne,rt,he,pe,0,ke,it,null),he>>=1,pe>>=1}}else if(gt.length>0){if(ct&&bt){const he=Ze(gt[0]);t.texStorage2D(s.TEXTURE_2D,Pe,rt,he.width,he.height)}for(let he=0,pe=gt.length;he<pe;he++)Be=gt[he],ct?Y&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,ke,it,Be):t.texImage2D(s.TEXTURE_2D,he,rt,ke,it,Be);A.generateMipmaps=!1}else if(ct){if(bt){const he=Ze(Se);t.texStorage2D(s.TEXTURE_2D,Pe,rt,he.width,he.height)}Y&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,it,Se)}else t.texImage2D(s.TEXTURE_2D,0,rt,ke,it,Se);x(A)&&v(me),We.__version=fe.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function de(D,A,te){if(A.image.length!==6)return;const me=Ce(D,A),_e=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+te);const fe=r.get(_e);if(_e.version!==fe.__version||me===!0){t.activeTexture(s.TEXTURE0+te);const We=Tt.getPrimaries(Tt.workingColorSpace),be=A.colorSpace===Ur?null:Tt.getPrimaries(A.colorSpace),Fe=A.colorSpace===Ur||We===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const pt=A.isCompressedTexture||A.image[0].isCompressedTexture,Se=A.image[0]&&A.image[0].isDataTexture,ke=[];for(let pe=0;pe<6;pe++)!pt&&!Se?ke[pe]=w(A.image[pe],!0,o.maxCubemapSize):ke[pe]=Se?A.image[pe].image:A.image[pe],ke[pe]=Pt(A,ke[pe]);const it=ke[0],rt=l.convert(A.format,A.colorSpace),Be=l.convert(A.type),gt=P(A.internalFormat,rt,Be,A.colorSpace),ct=A.isVideoTexture!==!0,bt=fe.__version===void 0||me===!0,Y=_e.dataReady;let Pe=G(A,it);ee(s.TEXTURE_CUBE_MAP,A);let he;if(pt){ct&&bt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,gt,it.width,it.height);for(let pe=0;pe<6;pe++){he=ke[pe].mipmaps;for(let Ne=0;Ne<he.length;Ne++){const De=he[Ne];A.format!==Ai?rt!==null?ct?Y&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,0,0,De.width,De.height,rt,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,gt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,0,0,De.width,De.height,rt,Be,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne,gt,De.width,De.height,0,rt,Be,De.data)}}}else{if(he=A.mipmaps,ct&&bt){he.length>0&&Pe++;const pe=Ze(ke[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,gt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Se){ct?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ke[pe].width,ke[pe].height,rt,Be,ke[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,gt,ke[pe].width,ke[pe].height,0,rt,Be,ke[pe].data);for(let Ne=0;Ne<he.length;Ne++){const ut=he[Ne].image[pe].image;ct?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,0,0,ut.width,ut.height,rt,Be,ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,gt,ut.width,ut.height,0,rt,Be,ut.data)}}else{ct?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,rt,Be,ke[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,gt,rt,Be,ke[pe]);for(let Ne=0;Ne<he.length;Ne++){const De=he[Ne];ct?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,0,0,rt,Be,De.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ne+1,gt,rt,Be,De.image[pe])}}}x(A)&&v(s.TEXTURE_CUBE_MAP),fe.__version=_e.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Ee(D,A,te,me,_e,fe){const We=l.convert(te.format,te.colorSpace),be=l.convert(te.type),Fe=P(te.internalFormat,We,be,te.colorSpace),pt=r.get(A),Se=r.get(te);if(Se.__renderTarget=A,!pt.__hasExternalTextures){const ke=Math.max(1,A.width>>fe),it=Math.max(1,A.height>>fe);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,fe,Fe,ke,it,A.depth,0,We,be,null):t.texImage2D(_e,fe,Fe,ke,it,0,We,be,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),mt(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,_e,Se.__webglTexture,0,vt(A)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,_e,Se.__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(D,A,te){if(s.bindRenderbuffer(s.RENDERBUFFER,D),A.depthBuffer){const me=A.depthTexture,_e=me&&me.isDepthTexture?me.type:null,fe=T(A.stencilBuffer,_e),We=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=vt(A);mt(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,fe,A.width,A.height):te?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,fe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,fe,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,D)}else{const me=A.textures;for(let _e=0;_e<me.length;_e++){const fe=me[_e],We=l.convert(fe.format,fe.colorSpace),be=l.convert(fe.type),Fe=P(fe.internalFormat,We,be,fe.colorSpace),pt=vt(A);te&&mt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,Fe,A.width,A.height):mt(A)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,Fe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(A.depthTexture);me.__renderTarget=A,(!me.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),re(A.depthTexture,0);const _e=me.__webglTexture,fe=vt(A);if(A.depthTexture.format===uo)mt(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(A.depthTexture.format===_o)mt(A)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ue(D){const A=r.get(D),te=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const me=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),me){const _e=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,me.removeEventListener("dispose",_e)};me.addEventListener("dispose",_e),A.__depthDisposeCallback=_e}A.__boundDepthTexture=me}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Re(A.__webglFramebuffer,D)}else if(te){A.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[me]),A.__webglDepthbuffer[me]===void 0)A.__webglDepthbuffer[me]=s.createRenderbuffer(),ye(A.__webglDepthbuffer[me],D,!1);else{const _e=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),ye(A.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,_e)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(D,A,te){const me=r.get(D);A!==void 0&&Ee(me.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&Ue(D)}function Ut(D){const A=D.texture,te=r.get(D),me=r.get(A);D.addEventListener("dispose",U);const _e=D.textures,fe=D.isWebGLCubeRenderTarget===!0,We=_e.length>1;if(We||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=A.version,u.memory.textures++),fe){te.__webglFramebuffer=[];for(let be=0;be<6;be++)if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer[be]=[];for(let Fe=0;Fe<A.mipmaps.length;Fe++)te.__webglFramebuffer[be][Fe]=s.createFramebuffer()}else te.__webglFramebuffer[be]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){te.__webglFramebuffer=[];for(let be=0;be<A.mipmaps.length;be++)te.__webglFramebuffer[be]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(We)for(let be=0,Fe=_e.length;be<Fe;be++){const pt=r.get(_e[be]);pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&mt(D)===!1){te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let be=0;be<_e.length;be++){const Fe=_e[be];te.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[be]);const pt=l.convert(Fe.format,Fe.colorSpace),Se=l.convert(Fe.type),ke=P(Fe.internalFormat,pt,Se,Fe.colorSpace,D.isXRRenderTarget===!0),it=vt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,it,ke,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,te.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(te.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ee(s.TEXTURE_CUBE_MAP,A);for(let be=0;be<6;be++)if(A.mipmaps&&A.mipmaps.length>0)for(let Fe=0;Fe<A.mipmaps.length;Fe++)Ee(te.__webglFramebuffer[be][Fe],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Fe);else Ee(te.__webglFramebuffer[be],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);x(A)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let be=0,Fe=_e.length;be<Fe;be++){const pt=_e[be],Se=r.get(pt);t.bindTexture(s.TEXTURE_2D,Se.__webglTexture),ee(s.TEXTURE_2D,pt),Ee(te.__webglFramebuffer,D,pt,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),x(pt)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let be=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,me.__webglTexture),ee(be,A),A.mipmaps&&A.mipmaps.length>0)for(let Fe=0;Fe<A.mipmaps.length;Fe++)Ee(te.__webglFramebuffer[Fe],D,A,s.COLOR_ATTACHMENT0,be,Fe);else Ee(te.__webglFramebuffer,D,A,s.COLOR_ATTACHMENT0,be,0);x(A)&&v(be),t.unbindTexture()}D.depthBuffer&&Ue(D)}function yt(D){const A=D.textures;for(let te=0,me=A.length;te<me;te++){const _e=A[te];if(x(_e)){const fe=L(D),We=r.get(_e).__webglTexture;t.bindTexture(fe,We),v(fe),t.unbindTexture()}}}const Ht=[],K=[];function Rn(D){if(D.samples>0){if(mt(D)===!1){const A=D.textures,te=D.width,me=D.height;let _e=s.COLOR_BUFFER_BIT;const fe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(D),be=A.length>1;if(be)for(let Fe=0;Fe<A.length;Fe++)t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Fe=0;Fe<A.length;Fe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const pt=r.get(A[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pt,0)}s.blitFramebuffer(0,0,te,me,0,0,te,me,_e,s.NEAREST),f===!0&&(Ht.length=0,K.length=0,Ht.push(s.COLOR_ATTACHMENT0+Fe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ht.push(fe),K.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,K)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ht))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let Fe=0;Fe<A.length;Fe++){t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const pt=r.get(A[Fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,pt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&f){const A=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function vt(D){return Math.min(o.maxSamples,D.samples)}function mt(D){const A=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Je(D){const A=u.render.frame;g.get(D)!==A&&(g.set(D,A),D.update())}function Pt(D,A){const te=D.colorSpace,me=D.format,_e=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||te!==xo&&te!==Ur&&(Tt.getTransfer(te)===Ft?(me!==Ai||_e!==sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),A}function Ze(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=j,this.resetTextureUnits=ne,this.setTexture2D=re,this.setTexture2DArray=ce,this.setTexture3D=ue,this.setTextureCube=V,this.rebindTextures=nt,this.setupRenderTarget=Ut,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Rn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=mt}function JE(s,e){function t(r,o=Ur){let l;const u=Tt.getTransfer(o);if(r===sr)return s.UNSIGNED_BYTE;if(r===Ld)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Dd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Qg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Kg)return s.BYTE;if(r===Zg)return s.SHORT;if(r===ma)return s.UNSIGNED_SHORT;if(r===Pd)return s.INT;if(r===ds)return s.UNSIGNED_INT;if(r===tr)return s.FLOAT;if(r===ga)return s.HALF_FLOAT;if(r===Jg)return s.ALPHA;if(r===e0)return s.RGB;if(r===Ai)return s.RGBA;if(r===t0)return s.LUMINANCE;if(r===n0)return s.LUMINANCE_ALPHA;if(r===uo)return s.DEPTH_COMPONENT;if(r===_o)return s.DEPTH_STENCIL;if(r===i0)return s.RED;if(r===Nd)return s.RED_INTEGER;if(r===r0)return s.RG;if(r===Id)return s.RG_INTEGER;if(r===Ud)return s.RGBA_INTEGER;if(r===tc||r===nc||r===ic||r===rc)if(u===Ft)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===tc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===nc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ic)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===rc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===tc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===nc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ic)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===rc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jh||r===ed||r===td||r===nd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Jh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ed)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===td)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===id||r===rd||r===sd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===id||r===rd)return u===Ft?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===sd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===od||r===ad||r===ld||r===cd||r===ud||r===hd||r===dd||r===fd||r===pd||r===md||r===gd||r===_d||r===vd||r===yd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===od)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ad)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ld)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===cd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ud)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===hd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===dd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===md)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_d)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===vd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===sc||r===xd||r===Sd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===sc)return u===Ft?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Sd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===s0||r===Md||r===Ed||r===wd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===sc)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Md)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ed)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===go?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class ew extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class _n extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tw={type:"move"};class Dh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const h=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,r),v=this._getHandJoint(p,w);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const g=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],_=g.position.distanceTo(y.position),S=.02,M=.005;p.inputState.pinching&&_>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));h!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(tw)))}return h!==null&&(h.visible=o!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new _n;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const nw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Fn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Br({vertexShader:nw,fragmentShader:iw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new we(new wi(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sw extends ms{constructor(e,t){super();const r=this;let o=null,l=1,u=null,h="local-floor",f=1,p=null,g=null,y=null,_=null,S=null,M=null;const w=new rw,x=t.getContextAttributes();let v=null,L=null;const P=[],T=[],G=new Qe;let F=null;const U=new Yn;U.viewport=new kt;const O=new Yn;O.viewport=new kt;const b=[U,O],C=new ew;let k=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let de=P[Q];return de===void 0&&(de=new Dh,P[Q]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Q){let de=P[Q];return de===void 0&&(de=new Dh,P[Q]=de),de.getGripSpace()},this.getHand=function(Q){let de=P[Q];return de===void 0&&(de=new Dh,P[Q]=de),de.getHandSpace()};function j(Q){const de=T.indexOf(Q.inputSource);if(de===-1)return;const Ee=P[de];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,p||u),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function X(){o.removeEventListener("select",j),o.removeEventListener("selectstart",j),o.removeEventListener("selectend",j),o.removeEventListener("squeeze",j),o.removeEventListener("squeezestart",j),o.removeEventListener("squeezeend",j),o.removeEventListener("end",X),o.removeEventListener("inputsourceschange",re);for(let Q=0;Q<P.length;Q++){const de=T[Q];de!==null&&(T[Q]=null,P[Q].disconnect(de))}k=null,ne=null,w.reset(),e.setRenderTarget(v),S=null,_=null,y=null,o=null,L=null,Ce.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return y},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",j),o.addEventListener("selectstart",j),o.addEventListener("selectend",j),o.addEventListener("squeeze",j),o.addEventListener("squeezestart",j),o.addEventListener("squeezeend",j),o.addEventListener("end",X),o.addEventListener("inputsourceschange",re),x.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(G),o.renderState.layers===void 0){const de={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,de),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new fs(S.framebufferWidth,S.framebufferHeight,{format:Ai,type:sr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let de=null,Ee=null,ye=null;x.depth&&(ye=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=x.stencil?_o:uo,Ee=x.stencil?go:ds);const Re={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:l};y=new XRWebGLBinding(o,t),_=y.createProjectionLayer(Re),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new fs(_.textureWidth,_.textureHeight,{format:Ai,type:sr,depthTexture:new x0(_.textureWidth,_.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await o.requestReferenceSpace(h),Ce.setContext(o),Ce.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function re(Q){for(let de=0;de<Q.removed.length;de++){const Ee=Q.removed[de],ye=T.indexOf(Ee);ye>=0&&(T[ye]=null,P[ye].disconnect(Ee))}for(let de=0;de<Q.added.length;de++){const Ee=Q.added[de];let ye=T.indexOf(Ee);if(ye===-1){for(let Ue=0;Ue<P.length;Ue++)if(Ue>=T.length){T.push(Ee),ye=Ue;break}else if(T[Ue]===null){T[Ue]=Ee,ye=Ue;break}if(ye===-1)break}const Re=P[ye];Re&&Re.connect(Ee)}}const ce=new z,ue=new z;function V(Q,de,Ee){ce.setFromMatrixPosition(de.matrixWorld),ue.setFromMatrixPosition(Ee.matrixWorld);const ye=ce.distanceTo(ue),Re=de.projectionMatrix.elements,Ue=Ee.projectionMatrix.elements,nt=Re[14]/(Re[10]-1),Ut=Re[14]/(Re[10]+1),yt=(Re[9]+1)/Re[5],Ht=(Re[9]-1)/Re[5],K=(Re[8]-1)/Re[0],Rn=(Ue[8]+1)/Ue[0],vt=nt*K,mt=nt*Rn,Je=ye/(-K+Rn),Pt=Je*-K;if(de.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Pt),Q.translateZ(Je),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Re[10]===-1)Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ze=nt+Je,D=Ut+Je,A=vt-Pt,te=mt+(ye-Pt),me=yt*Ut/D*Ze,_e=Ht*Ut/D*Ze;Q.projectionMatrix.makePerspective(A,te,me,_e,Ze,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function se(Q,de){de===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(de.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let de=Q.near,Ee=Q.far;w.texture!==null&&(w.depthNear>0&&(de=w.depthNear),w.depthFar>0&&(Ee=w.depthFar)),C.near=O.near=U.near=de,C.far=O.far=U.far=Ee,(k!==C.near||ne!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),k=C.near,ne=C.far),U.layers.mask=Q.layers.mask|2,O.layers.mask=Q.layers.mask|4,C.layers.mask=U.layers.mask|O.layers.mask;const ye=Q.parent,Re=C.cameras;se(C,ye);for(let Ue=0;Ue<Re.length;Ue++)se(Re[Ue],ye);Re.length===2?V(C,U,O):C.projectionMatrix.copy(U.projectionMatrix),ie(Q,C,ye)};function ie(Q,de,Ee){Ee===null?Q.matrix.copy(de.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(de.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(de.projectionMatrix),Q.projectionMatrixInverse.copy(de.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=vo*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(_===null&&S===null))return f},this.setFoveation=function(Q){f=Q,_!==null&&(_.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let N=null;function ee(Q,de){if(g=de.getViewerPose(p||u),M=de,g!==null){const Ee=g.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let ye=!1;Ee.length!==C.cameras.length&&(C.cameras.length=0,ye=!0);for(let Ue=0;Ue<Ee.length;Ue++){const nt=Ee[Ue];let Ut=null;if(S!==null)Ut=S.getViewport(nt);else{const Ht=y.getViewSubImage(_,nt);Ut=Ht.viewport,Ue===0&&(e.setRenderTargetTextures(L,Ht.colorTexture,_.ignoreDepthValues?void 0:Ht.depthStencilTexture),e.setRenderTarget(L))}let yt=b[Ue];yt===void 0&&(yt=new Yn,yt.layers.enable(Ue),yt.viewport=new kt,b[Ue]=yt),yt.matrix.fromArray(nt.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(nt.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),Ue===0&&(C.matrix.copy(yt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),ye===!0&&C.cameras.push(yt)}const Re=o.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Ue=y.getDepthInformation(Ee[0]);Ue&&Ue.isValid&&Ue.texture&&w.init(e,Ue,o.renderState)}}for(let Ee=0;Ee<P.length;Ee++){const ye=T[Ee],Re=P[Ee];ye!==null&&Re!==void 0&&Re.update(ye,de,p||u)}N&&N(Q,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),M=null}const Ce=new v0;Ce.setAnimationLoop(ee),this.setAnimationLoop=function(Q){N=Q},this.dispose=function(){}}}const os=new Oi,ow=new Gt;function aw(s,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,m0(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function o(x,v,L,P,T){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(x,v):v.isMeshToonMaterial?(l(x,v),y(x,v)):v.isMeshPhongMaterial?(l(x,v),g(x,v)):v.isMeshStandardMaterial?(l(x,v),_(x,v),v.isMeshPhysicalMaterial&&S(x,v,T)):v.isMeshMatcapMaterial?(l(x,v),M(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),w(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(u(x,v),v.isLineDashedMaterial&&h(x,v)):v.isPointsMaterial?f(x,v,L,P):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===qn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===qn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const L=e.get(v),P=L.envMap,T=L.envMapRotation;P&&(x.envMap.value=P,os.copy(T),os.x*=-1,os.y*=-1,os.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),x.envMapRotation.value.setFromMatrix4(ow.makeRotationFromEuler(os)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function u(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function h(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function f(x,v,L,P){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*L,x.scale.value=P*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function g(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function y(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function _(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function S(x,v,L){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===qn&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,v){v.matcap&&(x.matcap.value=v.matcap)}function w(x,v){const L=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function lw(s,e,t,r){let o={},l={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(L,P){const T=P.program;r.uniformBlockBinding(L,T)}function p(L,P){let T=o[L.id];T===void 0&&(M(L),T=g(L),o[L.id]=T,L.addEventListener("dispose",x));const G=P.program;r.updateUBOMapping(L,G);const F=e.render.frame;l[L.id]!==F&&(_(L),l[L.id]=F)}function g(L){const P=y();L.__bindingPointIndex=P;const T=s.createBuffer(),G=L.__size,F=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,G,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,T),T}function y(){for(let L=0;L<h;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const P=o[L.id],T=L.uniforms,G=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let F=0,U=T.length;F<U;F++){const O=Array.isArray(T[F])?T[F]:[T[F]];for(let b=0,C=O.length;b<C;b++){const k=O[b];if(S(k,F,b,G)===!0){const ne=k.__offset,j=Array.isArray(k.value)?k.value:[k.value];let X=0;for(let re=0;re<j.length;re++){const ce=j[re],ue=w(ce);typeof ce=="number"||typeof ce=="boolean"?(k.__data[0]=ce,s.bufferSubData(s.UNIFORM_BUFFER,ne+X,k.__data)):ce.isMatrix3?(k.__data[0]=ce.elements[0],k.__data[1]=ce.elements[1],k.__data[2]=ce.elements[2],k.__data[3]=0,k.__data[4]=ce.elements[3],k.__data[5]=ce.elements[4],k.__data[6]=ce.elements[5],k.__data[7]=0,k.__data[8]=ce.elements[6],k.__data[9]=ce.elements[7],k.__data[10]=ce.elements[8],k.__data[11]=0):(ce.toArray(k.__data,X),X+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(L,P,T,G){const F=L.value,U=P+"_"+T;if(G[U]===void 0)return typeof F=="number"||typeof F=="boolean"?G[U]=F:G[U]=F.clone(),!0;{const O=G[U];if(typeof F=="number"||typeof F=="boolean"){if(O!==F)return G[U]=F,!0}else if(O.equals(F)===!1)return O.copy(F),!0}return!1}function M(L){const P=L.uniforms;let T=0;const G=16;for(let U=0,O=P.length;U<O;U++){const b=Array.isArray(P[U])?P[U]:[P[U]];for(let C=0,k=b.length;C<k;C++){const ne=b[C],j=Array.isArray(ne.value)?ne.value:[ne.value];for(let X=0,re=j.length;X<re;X++){const ce=j[X],ue=w(ce),V=T%G,se=V%ue.boundary,ie=V+se;T+=se,ie!==0&&G-ie<ue.storage&&(T+=G-ie),ne.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=T,T+=ue.storage}}}const F=T%G;return F>0&&(T+=G-F),L.__size=T,L.__cache={},this}function w(L){const P={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(P.boundary=4,P.storage=4):L.isVector2?(P.boundary=8,P.storage=8):L.isVector3||L.isColor?(P.boundary=16,P.storage=12):L.isVector4?(P.boundary=16,P.storage=16):L.isMatrix3?(P.boundary=48,P.storage=48):L.isMatrix4?(P.boundary=64,P.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),P}function x(L){const P=L.target;P.removeEventListener("dispose",x);const T=u.indexOf(P.__bindingPointIndex);u.splice(T,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function v(){for(const L in o)s.deleteBuffer(o[L]);u=[],o={},l={}}return{bind:f,update:p,dispose:v}}class cw{constructor(e={}){const{canvas:t=Zy(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const M=new Uint32Array(4),w=new Int32Array(4);let x=null,v=null;const L=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=Or,this.toneMappingExposure=1;const T=this;let G=!1,F=0,U=0,O=null,b=-1,C=null;const k=new kt,ne=new kt;let j=null;const X=new Ge(0);let re=0,ce=t.width,ue=t.height,V=1,se=null,ie=null;const N=new kt(0,0,ce,ue),ee=new kt(0,0,ce,ue);let Ce=!1;const Q=new Od;let de=!1,Ee=!1;const ye=new Gt,Re=new Gt,Ue=new z,nt=new kt,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Ht(){return O===null?V:1}let K=r;function Rn(R,q){return t.getContext(R,q)}try{const R={alpha:!0,depth:o,stencil:l,antialias:h,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bd}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",De,!1),K===null){const q="webgl2";if(K=Rn(q,R),K===null)throw Rn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let vt,mt,Je,Pt,Ze,D,A,te,me,_e,fe,We,be,Fe,pt,Se,ke,it,rt,Be,gt,ct,bt,Y;function Pe(){vt=new p1(K),vt.init(),ct=new JE(K,vt),mt=new l1(K,vt,e,ct),Je=new KE(K,vt),mt.reverseDepthBuffer&&_&&Je.buffers.depth.setReversed(!0),Pt=new _1(K),Ze=new UE,D=new QE(K,vt,Je,Ze,mt,ct,Pt),A=new u1(T),te=new f1(T),me=new wx(K),bt=new o1(K,me),_e=new m1(K,me,Pt,bt),fe=new y1(K,_e,me,Pt),rt=new v1(K,mt,D),Se=new c1(Ze),We=new IE(T,A,te,vt,mt,bt,Se),be=new aw(T,Ze),Fe=new OE,pt=new GE(vt),it=new s1(T,A,te,Je,fe,S,f),ke=new qE(T,fe,mt),Y=new lw(K,Pt,mt,Je),Be=new a1(K,vt,Pt),gt=new g1(K,vt,Pt),Pt.programs=We.programs,T.capabilities=mt,T.extensions=vt,T.properties=Ze,T.renderLists=Fe,T.shadowMap=ke,T.state=Je,T.info=Pt}Pe();const he=new sw(T,K);this.xr=he,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const R=vt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=vt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(ce,ue,!1))},this.getSize=function(R){return R.set(ce,ue)},this.setSize=function(R,q,ae=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=R,ue=q,t.width=Math.floor(R*V),t.height=Math.floor(q*V),ae===!0&&(t.style.width=R+"px",t.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(ce*V,ue*V).floor()},this.setDrawingBufferSize=function(R,q,ae){ce=R,ue=q,V=ae,t.width=Math.floor(R*ae),t.height=Math.floor(q*ae),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(N)},this.setViewport=function(R,q,ae,le){R.isVector4?N.set(R.x,R.y,R.z,R.w):N.set(R,q,ae,le),Je.viewport(k.copy(N).multiplyScalar(V).round())},this.getScissor=function(R){return R.copy(ee)},this.setScissor=function(R,q,ae,le){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,q,ae,le),Je.scissor(ne.copy(ee).multiplyScalar(V).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(R){Je.setScissorTest(Ce=R)},this.setOpaqueSort=function(R){se=R},this.setTransparentSort=function(R){ie=R},this.getClearColor=function(R){return R.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(R=!0,q=!0,ae=!0){let le=0;if(R){let $=!1;if(O!==null){const Ae=O.texture.format;$=Ae===Ud||Ae===Id||Ae===Nd}if($){const Ae=O.texture.type,Me=Ae===sr||Ae===ds||Ae===ma||Ae===go||Ae===Ld||Ae===Dd,Xe=it.getClearColor(),He=it.getClearAlpha(),st=Xe.r,at=Xe.g,je=Xe.b;Me?(M[0]=st,M[1]=at,M[2]=je,M[3]=He,K.clearBufferuiv(K.COLOR,0,M)):(w[0]=st,w[1]=at,w[2]=je,w[3]=He,K.clearBufferiv(K.COLOR,0,w))}else le|=K.COLOR_BUFFER_BIT}q&&(le|=K.DEPTH_BUFFER_BIT),ae&&(le|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Fe.dispose(),pt.dispose(),Ze.dispose(),A.dispose(),te.dispose(),fe.dispose(),bt.dispose(),Y.dispose(),We.dispose(),he.dispose(),he.removeEventListener("sessionstart",gs),he.removeEventListener("sessionend",or),ki.stop()};function pe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const R=Pt.autoReset,q=ke.enabled,ae=ke.autoUpdate,le=ke.needsUpdate,$=ke.type;Pe(),Pt.autoReset=R,ke.enabled=q,ke.autoUpdate=ae,ke.needsUpdate=le,ke.type=$}function De(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ut(R){const q=R.target;q.removeEventListener("dispose",ut),Wt(q)}function Wt(R){tn(R),Ze.remove(R)}function tn(R){const q=Ze.get(R).programs;q!==void 0&&(q.forEach(function(ae){We.releaseProgram(ae)}),R.isShaderMaterial&&We.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ae,le,$,Ae){q===null&&(q=Ut);const Me=$.isMesh&&$.matrixWorld.determinant()<0,Xe=Sa(R,q,ae,le,$);Je.setMaterial(le,Me);let He=ae.index,st=1;if(le.wireframe===!0){if(He=_e.getWireframeAttribute(ae),He===void 0)return;st=2}const at=ae.drawRange,je=ae.attributes.position;let St=at.start*st,Rt=(at.start+at.count)*st;Ae!==null&&(St=Math.max(St,Ae.start*st),Rt=Math.min(Rt,(Ae.start+Ae.count)*st)),He!==null?(St=Math.max(St,0),Rt=Math.min(Rt,He.count)):je!=null&&(St=Math.max(St,0),Rt=Math.min(Rt,je.count));const xt=Rt-St;if(xt<0||xt===1/0)return;bt.setup($,le,Xe,ae,He);let xn,ht=Be;if(He!==null&&(xn=me.get(He),ht=gt,ht.setIndex(xn)),$.isMesh)le.wireframe===!0?(Je.setLineWidth(le.wireframeLinewidth*Ht()),ht.setMode(K.LINES)):ht.setMode(K.TRIANGLES);else if($.isLine){let $e=le.linewidth;$e===void 0&&($e=1),Je.setLineWidth($e*Ht()),$.isLineSegments?ht.setMode(K.LINES):$.isLineLoop?ht.setMode(K.LINE_LOOP):ht.setMode(K.LINE_STRIP)}else $.isPoints?ht.setMode(K.POINTS):$.isSprite&&ht.setMode(K.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)ht.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))ht.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const $e=$._multiDrawStarts,fi=$._multiDrawCounts,At=$._multiDrawCount,Sn=He?me.get(He).bytesPerElement:1,pi=Ze.get(le).currentProgram.getUniforms();for(let nn=0;nn<At;nn++)pi.setValue(K,"_gl_DrawID",nn),ht.render($e[nn]/Sn,fi[nn])}else if($.isInstancedMesh)ht.renderInstances(St,xt,$.count);else if(ae.isInstancedBufferGeometry){const $e=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,fi=Math.min(ae.instanceCount,$e);ht.renderInstances(St,xt,fi)}else ht.render(St,xt)};function Mt(R,q,ae){R.transparent===!0&&R.side===vn&&R.forceSinglePass===!1?(R.side=qn,R.needsUpdate=!0,_s(R,q,ae),R.side=kr,R.needsUpdate=!0,_s(R,q,ae),R.side=vn):_s(R,q,ae)}this.compile=function(R,q,ae=null){ae===null&&(ae=R),v=pt.get(ae),v.init(q),P.push(v),ae.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),R!==ae&&R.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(v.pushLight($),$.castShadow&&v.pushShadow($))}),v.setupLights();const le=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ae=$.material;if(Ae)if(Array.isArray(Ae))for(let Me=0;Me<Ae.length;Me++){const Xe=Ae[Me];Mt(Xe,ae,$),le.add(Xe)}else Mt(Ae,ae,$),le.add(Ae)}),P.pop(),v=null,le},this.compileAsync=function(R,q,ae=null){const le=this.compile(R,q,ae);return new Promise($=>{function Ae(){if(le.forEach(function(Me){Ze.get(Me).currentProgram.isReady()&&le.delete(Me)}),le.size===0){$(R);return}setTimeout(Ae,10)}vt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let On=null;function bn(R){On&&On(R)}function gs(){ki.stop()}function or(){ki.start()}const ki=new v0;ki.setAnimationLoop(bn),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(R){On=R,he.setAnimationLoop(R),R===null?ki.stop():ki.start()},he.addEventListener("sessionstart",gs),he.addEventListener("sessionend",or),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(q),q=he.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,q,O),v=pt.get(R,P.length),v.init(q),P.push(v),Re.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Q.setFromProjectionMatrix(Re),Ee=this.localClippingEnabled,de=Se.init(this.clippingPlanes,Ee),x=Fe.get(R,L.length),x.init(),L.push(x),he.enabled===!0&&he.isPresenting===!0){const Ae=T.xr.getDepthSensingMesh();Ae!==null&&Bi(Ae,q,-1/0,T.sortObjects)}Bi(R,q,0,T.sortObjects),x.finish(),T.sortObjects===!0&&x.sort(se,ie),yt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,yt&&it.addToRenderList(x,R),this.info.render.frame++,de===!0&&Se.beginShadows();const ae=v.state.shadowsArray;ke.render(ae,R,q),de===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=x.opaque,$=x.transmissive;if(v.setupLights(),q.isArrayCamera){const Ae=q.cameras;if($.length>0)for(let Me=0,Xe=Ae.length;Me<Xe;Me++){const He=Ae[Me];Vr(le,$,R,He)}yt&&it.render(R);for(let Me=0,Xe=Ae.length;Me<Xe;Me++){const He=Ae[Me];Hr(x,R,He,He.viewport)}}else $.length>0&&Vr(le,$,R,q),yt&&it.render(R),Hr(x,R,q);O!==null&&(D.updateMultisampleRenderTarget(O),D.updateRenderTargetMipmap(O)),R.isScene===!0&&R.onAfterRender(T,R,q),bt.resetDefaultState(),b=-1,C=null,P.pop(),P.length>0?(v=P[P.length-1],de===!0&&Se.setGlobalState(T.clippingPlanes,v.state.camera)):v=null,L.pop(),L.length>0?x=L[L.length-1]:x=null};function Bi(R,q,ae,le){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){le&&nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Re);const Me=fe.update(R),Xe=R.material;Xe.visible&&x.push(R,Me,Xe,ae,nt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const Me=fe.update(R),Xe=R.material;if(le&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),nt.copy(R.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),nt.copy(Me.boundingSphere.center)),nt.applyMatrix4(R.matrixWorld).applyMatrix4(Re)),Array.isArray(Xe)){const He=Me.groups;for(let st=0,at=He.length;st<at;st++){const je=He[st],St=Xe[je.materialIndex];St&&St.visible&&x.push(R,Me,St,ae,nt.z,je)}}else Xe.visible&&x.push(R,Me,Xe,ae,nt.z,null)}}const Ae=R.children;for(let Me=0,Xe=Ae.length;Me<Xe;Me++)Bi(Ae[Me],q,ae,le)}function Hr(R,q,ae,le){const $=R.opaque,Ae=R.transmissive,Me=R.transparent;v.setupLightsView(ae),de===!0&&Se.setGlobalState(T.clippingPlanes,ae),le&&Je.viewport(k.copy(le)),$.length>0&&ar($,q,ae),Ae.length>0&&ar(Ae,q,ae),Me.length>0&&ar(Me,q,ae),Je.buffers.depth.setTest(!0),Je.buffers.depth.setMask(!0),Je.buffers.color.setMask(!0),Je.setPolygonOffset(!1)}function Vr(R,q,ae,le){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[le.id]===void 0&&(v.state.transmissionRenderTarget[le.id]=new fs(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?ga:sr,minFilter:hs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Ae=v.state.transmissionRenderTarget[le.id],Me=le.viewport||k;Ae.setSize(Me.z,Me.w);const Xe=T.getRenderTarget();T.setRenderTarget(Ae),T.getClearColor(X),re=T.getClearAlpha(),re<1&&T.setClearColor(16777215,.5),T.clear(),yt&&it.render(ae);const He=T.toneMapping;T.toneMapping=Or;const st=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),v.setupLightsView(le),de===!0&&Se.setGlobalState(T.clippingPlanes,le),ar(R,ae,le),D.updateMultisampleRenderTarget(Ae),D.updateRenderTargetMipmap(Ae),vt.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let je=0,St=q.length;je<St;je++){const Rt=q[je],xt=Rt.object,xn=Rt.geometry,ht=Rt.material,$e=Rt.group;if(ht.side===vn&&xt.layers.test(le.layers)){const fi=ht.side;ht.side=qn,ht.needsUpdate=!0,ya(xt,ae,le,xn,ht,$e),ht.side=fi,ht.needsUpdate=!0,at=!0}}at===!0&&(D.updateMultisampleRenderTarget(Ae),D.updateRenderTargetMipmap(Ae))}T.setRenderTarget(Xe),T.setClearColor(X,re),st!==void 0&&(le.viewport=st),T.toneMapping=He}function ar(R,q,ae){const le=q.isScene===!0?q.overrideMaterial:null;for(let $=0,Ae=R.length;$<Ae;$++){const Me=R[$],Xe=Me.object,He=Me.geometry,st=le===null?Me.material:le,at=Me.group;Xe.layers.test(ae.layers)&&ya(Xe,q,ae,He,st,at)}}function ya(R,q,ae,le,$,Ae){R.onBeforeRender(T,q,ae,le,$,Ae),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(T,q,ae,le,R,Ae),$.transparent===!0&&$.side===vn&&$.forceSinglePass===!1?($.side=qn,$.needsUpdate=!0,T.renderBufferDirect(ae,q,le,$,R,Ae),$.side=kr,$.needsUpdate=!0,T.renderBufferDirect(ae,q,le,$,R,Ae),$.side=vn):T.renderBufferDirect(ae,q,le,$,R,Ae),R.onAfterRender(T,q,ae,le,$,Ae)}function _s(R,q,ae){q.isScene!==!0&&(q=Ut);const le=Ze.get(R),$=v.state.lights,Ae=v.state.shadowsArray,Me=$.state.version,Xe=We.getParameters(R,$.state,Ae,q,ae),He=We.getProgramCacheKey(Xe);let st=le.programs;le.environment=R.isMeshStandardMaterial?q.environment:null,le.fog=q.fog,le.envMap=(R.isMeshStandardMaterial?te:A).get(R.envMap||le.environment),le.envMapRotation=le.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,st===void 0&&(R.addEventListener("dispose",ut),st=new Map,le.programs=st);let at=st.get(He);if(at!==void 0){if(le.currentProgram===at&&le.lightsStateVersion===Me)return Ri(R,Xe),at}else Xe.uniforms=We.getUniforms(R),R.onBeforeCompile(Xe,T),at=We.acquireProgram(Xe,He),st.set(He,at),le.uniforms=Xe.uniforms;const je=le.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=Se.uniform),Ri(R,Xe),le.needsLights=Sc(R),le.lightsStateVersion=Me,le.needsLights&&(je.ambientLightColor.value=$.state.ambient,je.lightProbe.value=$.state.probe,je.directionalLights.value=$.state.directional,je.directionalLightShadows.value=$.state.directionalShadow,je.spotLights.value=$.state.spot,je.spotLightShadows.value=$.state.spotShadow,je.rectAreaLights.value=$.state.rectArea,je.ltc_1.value=$.state.rectAreaLTC1,je.ltc_2.value=$.state.rectAreaLTC2,je.pointLights.value=$.state.point,je.pointLightShadows.value=$.state.pointShadow,je.hemisphereLights.value=$.state.hemi,je.directionalShadowMap.value=$.state.directionalShadowMap,je.directionalShadowMatrix.value=$.state.directionalShadowMatrix,je.spotShadowMap.value=$.state.spotShadowMap,je.spotLightMatrix.value=$.state.spotLightMatrix,je.spotLightMap.value=$.state.spotLightMap,je.pointShadowMap.value=$.state.pointShadowMap,je.pointShadowMatrix.value=$.state.pointShadowMatrix),le.currentProgram=at,le.uniformsList=null,at}function xa(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=oc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Ri(R,q){const ae=Ze.get(R);ae.outputColorSpace=q.outputColorSpace,ae.batching=q.batching,ae.batchingColor=q.batchingColor,ae.instancing=q.instancing,ae.instancingColor=q.instancingColor,ae.instancingMorph=q.instancingMorph,ae.skinning=q.skinning,ae.morphTargets=q.morphTargets,ae.morphNormals=q.morphNormals,ae.morphColors=q.morphColors,ae.morphTargetsCount=q.morphTargetsCount,ae.numClippingPlanes=q.numClippingPlanes,ae.numIntersection=q.numClipIntersection,ae.vertexAlphas=q.vertexAlphas,ae.vertexTangents=q.vertexTangents,ae.toneMapping=q.toneMapping}function Sa(R,q,ae,le,$){q.isScene!==!0&&(q=Ut),D.resetTextureUnits();const Ae=q.fog,Me=le.isMeshStandardMaterial?q.environment:null,Xe=O===null?T.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:xo,He=(le.isMeshStandardMaterial?te:A).get(le.envMap||Me),st=le.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,at=!!ae.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),je=!!ae.morphAttributes.position,St=!!ae.morphAttributes.normal,Rt=!!ae.morphAttributes.color;let xt=Or;le.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(xt=T.toneMapping);const xn=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,ht=xn!==void 0?xn.length:0,$e=Ze.get(le),fi=v.state.lights;if(de===!0&&(Ee===!0||R!==C)){const Pn=R===C&&le.id===b;Se.setState(le,R,Pn)}let At=!1;le.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==fi.state.version||$e.outputColorSpace!==Xe||$.isBatchedMesh&&$e.batching===!1||!$.isBatchedMesh&&$e.batching===!0||$.isBatchedMesh&&$e.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&$e.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&$e.instancing===!1||!$.isInstancedMesh&&$e.instancing===!0||$.isSkinnedMesh&&$e.skinning===!1||!$.isSkinnedMesh&&$e.skinning===!0||$.isInstancedMesh&&$e.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&$e.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&$e.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&$e.instancingMorph===!1&&$.morphTexture!==null||$e.envMap!==He||le.fog===!0&&$e.fog!==Ae||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Se.numPlanes||$e.numIntersection!==Se.numIntersection)||$e.vertexAlphas!==st||$e.vertexTangents!==at||$e.morphTargets!==je||$e.morphNormals!==St||$e.morphColors!==Rt||$e.toneMapping!==xt||$e.morphTargetsCount!==ht)&&(At=!0):(At=!0,$e.__version=le.version);let Sn=$e.currentProgram;At===!0&&(Sn=_s(le,q,$));let pi=!1,nn=!1,bi=!1;const Bt=Sn.getUniforms(),ni=$e.uniforms;if(Je.useProgram(Sn.program)&&(pi=!0,nn=!0,bi=!0),le.id!==b&&(b=le.id,nn=!0),pi||C!==R){Je.buffers.depth.getReversed()?(ye.copy(R.projectionMatrix),Jy(ye),ex(ye),Bt.setValue(K,"projectionMatrix",ye)):Bt.setValue(K,"projectionMatrix",R.projectionMatrix),Bt.setValue(K,"viewMatrix",R.matrixWorldInverse);const ii=Bt.map.cameraPosition;ii!==void 0&&ii.setValue(K,Ue.setFromMatrixPosition(R.matrixWorld)),mt.logarithmicDepthBuffer&&Bt.setValue(K,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Bt.setValue(K,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,nn=!0,bi=!0)}if($.isSkinnedMesh){Bt.setOptional(K,$,"bindMatrix"),Bt.setOptional(K,$,"bindMatrixInverse");const Pn=$.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),Bt.setValue(K,"boneTexture",Pn.boneTexture,D))}$.isBatchedMesh&&(Bt.setOptional(K,$,"batchingTexture"),Bt.setValue(K,"batchingTexture",$._matricesTexture,D),Bt.setOptional(K,$,"batchingIdTexture"),Bt.setValue(K,"batchingIdTexture",$._indirectTexture,D),Bt.setOptional(K,$,"batchingColorTexture"),$._colorsTexture!==null&&Bt.setValue(K,"batchingColorTexture",$._colorsTexture,D));const zi=ae.morphAttributes;if((zi.position!==void 0||zi.normal!==void 0||zi.color!==void 0)&&rt.update($,ae,Sn),(nn||$e.receiveShadow!==$.receiveShadow)&&($e.receiveShadow=$.receiveShadow,Bt.setValue(K,"receiveShadow",$.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(ni.envMap.value=He,ni.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&q.environment!==null&&(ni.envMapIntensity.value=q.environmentIntensity),nn&&(Bt.setValue(K,"toneMappingExposure",T.toneMappingExposure),$e.needsLights&&Ma(ni,bi),Ae&&le.fog===!0&&be.refreshFogUniforms(ni,Ae),be.refreshMaterialUniforms(ni,le,V,ue,v.state.transmissionRenderTarget[R.id]),oc.upload(K,xa($e),ni,D)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(oc.upload(K,xa($e),ni,D),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Bt.setValue(K,"center",$.center),Bt.setValue(K,"modelViewMatrix",$.modelViewMatrix),Bt.setValue(K,"normalMatrix",$.normalMatrix),Bt.setValue(K,"modelMatrix",$.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const Pn=le.uniformsGroups;for(let ii=0,kn=Pn.length;ii<kn;ii++){const Ea=Pn[ii];Y.update(Ea,Sn),Y.bind(Ea,Sn)}}return Sn}function Ma(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Sc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(R,q,ae){Ze.get(R.texture).__webglTexture=q,Ze.get(R.depthTexture).__webglTexture=ae;const le=Ze.get(R);le.__hasExternalTextures=!0,le.__autoAllocateDepthBuffer=ae===void 0,le.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,q){const ae=Ze.get(R);ae.__webglFramebuffer=q,ae.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,ae=0){O=R,F=q,U=ae;let le=!0,$=null,Ae=!1,Me=!1;if(R){const He=Ze.get(R);if(He.__useDefaultFramebuffer!==void 0)Je.bindFramebuffer(K.FRAMEBUFFER,null),le=!1;else if(He.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(He.__hasExternalTextures)D.rebindTextures(R,Ze.get(R.texture).__webglTexture,Ze.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const je=R.depthTexture;if(He.__boundDepthTexture!==je){if(je!==null&&Ze.has(je)&&(R.width!==je.image.width||R.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const st=R.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(Me=!0);const at=Ze.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(at[q])?$=at[q][ae]:$=at[q],Ae=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?$=Ze.get(R).__webglMultisampledFramebuffer:Array.isArray(at)?$=at[ae]:$=at,k.copy(R.viewport),ne.copy(R.scissor),j=R.scissorTest}else k.copy(N).multiplyScalar(V).floor(),ne.copy(ee).multiplyScalar(V).floor(),j=Ce;if(Je.bindFramebuffer(K.FRAMEBUFFER,$)&&le&&Je.drawBuffers(R,$),Je.viewport(k),Je.scissor(ne),Je.setScissorTest(j),Ae){const He=Ze.get(R.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+q,He.__webglTexture,ae)}else if(Me){const He=Ze.get(R.texture),st=q||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,He.__webglTexture,ae||0,st)}b=-1},this.readRenderTargetPixels=function(R,q,ae,le,$,Ae,Me){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Me!==void 0&&(Xe=Xe[Me]),Xe){Je.bindFramebuffer(K.FRAMEBUFFER,Xe);try{const He=R.texture,st=He.format,at=He.type;if(!mt.textureFormatReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-le&&ae>=0&&ae<=R.height-$&&K.readPixels(q,ae,le,$,ct.convert(st),ct.convert(at),Ae)}finally{const He=O!==null?Ze.get(O).__webglFramebuffer:null;Je.bindFramebuffer(K.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(R,q,ae,le,$,Ae,Me){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=Ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Me!==void 0&&(Xe=Xe[Me]),Xe){const He=R.texture,st=He.format,at=He.type;if(!mt.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=R.width-le&&ae>=0&&ae<=R.height-$){Je.bindFramebuffer(K.FRAMEBUFFER,Xe);const je=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,je),K.bufferData(K.PIXEL_PACK_BUFFER,Ae.byteLength,K.STREAM_READ),K.readPixels(q,ae,le,$,ct.convert(st),ct.convert(at),0);const St=O!==null?Ze.get(O).__webglFramebuffer:null;Je.bindFramebuffer(K.FRAMEBUFFER,St);const Rt=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await Qy(K,Rt,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,je),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,Ae),K.deleteBuffer(je),K.deleteSync(Rt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,q=null,ae=0){R.isTexture!==!0&&(ha("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,R=arguments[1]);const le=Math.pow(2,-ae),$=Math.floor(R.image.width*le),Ae=Math.floor(R.image.height*le),Me=q!==null?q.x:0,Xe=q!==null?q.y:0;D.setTexture2D(R,0),K.copyTexSubImage2D(K.TEXTURE_2D,ae,0,0,Me,Xe,$,Ae),Je.unbindTexture()},this.copyTextureToTexture=function(R,q,ae=null,le=null,$=0){R.isTexture!==!0&&(ha("WebGLRenderer: copyTextureToTexture function signature has changed."),le=arguments[0]||null,R=arguments[1],q=arguments[2],$=arguments[3]||0,ae=null);let Ae,Me,Xe,He,st,at,je,St,Rt;const xt=R.isCompressedTexture?R.mipmaps[$]:R.image;ae!==null?(Ae=ae.max.x-ae.min.x,Me=ae.max.y-ae.min.y,Xe=ae.isBox3?ae.max.z-ae.min.z:1,He=ae.min.x,st=ae.min.y,at=ae.isBox3?ae.min.z:0):(Ae=xt.width,Me=xt.height,Xe=xt.depth||1,He=0,st=0,at=0),le!==null?(je=le.x,St=le.y,Rt=le.z):(je=0,St=0,Rt=0);const xn=ct.convert(q.format),ht=ct.convert(q.type);let $e;q.isData3DTexture?(D.setTexture3D(q,0),$e=K.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(D.setTexture2DArray(q,0),$e=K.TEXTURE_2D_ARRAY):(D.setTexture2D(q,0),$e=K.TEXTURE_2D),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,q.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,q.unpackAlignment);const fi=K.getParameter(K.UNPACK_ROW_LENGTH),At=K.getParameter(K.UNPACK_IMAGE_HEIGHT),Sn=K.getParameter(K.UNPACK_SKIP_PIXELS),pi=K.getParameter(K.UNPACK_SKIP_ROWS),nn=K.getParameter(K.UNPACK_SKIP_IMAGES);K.pixelStorei(K.UNPACK_ROW_LENGTH,xt.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,xt.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,He),K.pixelStorei(K.UNPACK_SKIP_ROWS,st),K.pixelStorei(K.UNPACK_SKIP_IMAGES,at);const bi=R.isDataArrayTexture||R.isData3DTexture,Bt=q.isDataArrayTexture||q.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const ni=Ze.get(R),zi=Ze.get(q),Pn=Ze.get(ni.__renderTarget),ii=Ze.get(zi.__renderTarget);Je.bindFramebuffer(K.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Je.bindFramebuffer(K.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let kn=0;kn<Xe;kn++)bi&&K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ze.get(R).__webglTexture,$,at+kn),R.isDepthTexture?(Bt&&K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Ze.get(q).__webglTexture,$,Rt+kn),K.blitFramebuffer(He,st,Ae,Me,je,St,Ae,Me,K.DEPTH_BUFFER_BIT,K.NEAREST)):Bt?K.copyTexSubImage3D($e,$,je,St,Rt+kn,He,st,Ae,Me):K.copyTexSubImage2D($e,$,je,St,Rt+kn,He,st,Ae,Me);Je.bindFramebuffer(K.READ_FRAMEBUFFER,null),Je.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Bt?R.isDataTexture||R.isData3DTexture?K.texSubImage3D($e,$,je,St,Rt,Ae,Me,Xe,xn,ht,xt.data):q.isCompressedArrayTexture?K.compressedTexSubImage3D($e,$,je,St,Rt,Ae,Me,Xe,xn,xt.data):K.texSubImage3D($e,$,je,St,Rt,Ae,Me,Xe,xn,ht,xt):R.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,$,je,St,Ae,Me,xn,ht,xt.data):R.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,$,je,St,xt.width,xt.height,xn,xt.data):K.texSubImage2D(K.TEXTURE_2D,$,je,St,Ae,Me,xn,ht,xt);K.pixelStorei(K.UNPACK_ROW_LENGTH,fi),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,At),K.pixelStorei(K.UNPACK_SKIP_PIXELS,Sn),K.pixelStorei(K.UNPACK_SKIP_ROWS,pi),K.pixelStorei(K.UNPACK_SKIP_IMAGES,nn),$===0&&q.generateMipmaps&&K.generateMipmap($e),Je.unbindTexture()},this.copyTextureToTexture3D=function(R,q,ae=null,le=null,$=0){return R.isTexture!==!0&&(ha("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,le=arguments[1]||null,R=arguments[2],q=arguments[3],$=arguments[4]||0),ha('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,ae,le,$)},this.initRenderTarget=function(R){Ze.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Je.unbindTexture()},this.resetState=function(){F=0,U=0,O=null,Je.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}class uc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=t}clone(){return new uc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class uw extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class hw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Td,this.updateRanges=[],this.version=0,this.uuid=ir()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ir()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ir()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nn=new z;class hc{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Nn.fromBufferAttribute(this,t),Nn.applyMatrix4(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Nn.fromBufferAttribute(this,t),Nn.applyNormalMatrix(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Nn.fromBufferAttribute(this,t),Nn.transformDirection(e),this.setXYZ(t,Nn.x,Nn.y,Nn.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=Ti(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Nt(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ti(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),r=Nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),r=Nt(r,this.array),o=Nt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),r=Nt(r,this.array),o=Nt(o,this.array),l=Nt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new di(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class T0 extends zr{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let eo;const sa=new z,to=new z,no=new z,io=new Qe,oa=new Qe,A0=new Gt,Yl=new z,aa=new z,ql=new z,Sg=new Qe,Nh=new Qe,Mg=new Qe;class dw extends qt{constructor(e=new T0){if(super(),this.isSprite=!0,this.type="Sprite",eo===void 0){eo=new pn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new hw(t,5);eo.setIndex([0,1,2,0,2,3]),eo.setAttribute("position",new hc(r,3,0,!1)),eo.setAttribute("uv",new hc(r,2,3,!1))}this.geometry=eo,this.material=e,this.center=new Qe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),to.setFromMatrixScale(this.matrixWorld),A0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),no.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&to.multiplyScalar(-no.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const u=this.center;$l(Yl.set(-.5,-.5,0),no,u,to,o,l),$l(aa.set(.5,-.5,0),no,u,to,o,l),$l(ql.set(.5,.5,0),no,u,to,o,l),Sg.set(0,0),Nh.set(1,0),Mg.set(1,1);let h=e.ray.intersectTriangle(Yl,aa,ql,!1,sa);if(h===null&&($l(aa.set(-.5,.5,0),no,u,to,o,l),Nh.set(0,1),h=e.ray.intersectTriangle(Yl,ql,aa,!1,sa),h===null))return;const f=e.ray.origin.distanceTo(sa);f<e.near||f>e.far||t.push({distance:f,point:sa.clone(),uv:hi.getInterpolation(sa,Yl,aa,ql,Sg,Nh,Mg,new Qe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function $l(s,e,t,r,o,l){io.subVectors(s,t).addScalar(.5).multiply(r),o!==void 0?(oa.x=l*io.x-o*io.y,oa.y=o*io.x+l*io.y):oa.copy(io),s.copy(e),s.x+=oa.x,s.y+=oa.y,s.applyMatrix4(A0)}class C0 extends zr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dc=new z,fc=new z,Eg=new Gt,la=new vc,Kl=new va,Ih=new z,wg=new z;class fw extends qt{constructor(e=new pn,t=new C0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)dc.fromBufferAttribute(t,o-1),fc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=dc.distanceTo(fc);e.setAttribute("lineDistance",new It(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Kl.copy(r.boundingSphere),Kl.applyMatrix4(o),Kl.radius+=l,e.ray.intersectsSphere(Kl)===!1)return;Eg.copy(o).invert(),la.copy(e.ray).applyMatrix4(Eg);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,p=this.isLineSegments?2:1,g=r.index,_=r.attributes.position;if(g!==null){const S=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let w=S,x=M-1;w<x;w+=p){const v=g.getX(w),L=g.getX(w+1),P=Zl(this,e,la,f,v,L);P&&t.push(P)}if(this.isLineLoop){const w=g.getX(M-1),x=g.getX(S),v=Zl(this,e,la,f,w,x);v&&t.push(v)}}else{const S=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let w=S,x=M-1;w<x;w+=p){const v=Zl(this,e,la,f,w,w+1);v&&t.push(v)}if(this.isLineLoop){const w=Zl(this,e,la,f,M-1,S);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function Zl(s,e,t,r,o,l){const u=s.geometry.attributes.position;if(dc.fromBufferAttribute(u,o),fc.fromBufferAttribute(u,l),t.distanceSqToSegment(dc,fc,Ih,wg)>r)return;Ih.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo(Ih);if(!(f<e.near||f>e.far))return{distance:f,point:wg.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Tg=new z,Ag=new z;class pw extends fw{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)Tg.fromBufferAttribute(t,o),Ag.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Tg.distanceTo(Ag);e.setAttribute("lineDistance",new It(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class R0 extends zr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cg=new Gt,Cd=new vc,Ql=new va,Jl=new z;class mw extends qt{constructor(e=new pn,t=new R0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ql.copy(r.boundingSphere),Ql.applyMatrix4(o),Ql.radius+=l,e.ray.intersectsSphere(Ql)===!1)return;Cg.copy(o).invert(),Cd.copy(e.ray).applyMatrix4(Cg);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=h*h,p=r.index,y=r.attributes.position;if(p!==null){const _=Math.max(0,u.start),S=Math.min(p.count,u.start+u.count);for(let M=_,w=S;M<w;M++){const x=p.getX(M);Jl.fromBufferAttribute(y,x),Rg(Jl,x,f,o,e,t,this)}}else{const _=Math.max(0,u.start),S=Math.min(y.count,u.start+u.count);for(let M=_,w=S;M<w;M++)Jl.fromBufferAttribute(y,M),Rg(Jl,M,f,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function Rg(s,e,t,r,o,l,u){const h=Cd.distanceSqToPoint(s);if(h<t){const f=new z;Cd.closestPointToPoint(s,f),f.applyMatrix4(r);const p=o.ray.origin.distanceTo(f);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(h),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Mo extends Fn{constructor(e,t,r,o,l,u,h,f,p){super(e,t,r,o,l,u,h,f,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bd extends pn{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const l=[],u=[],h=[],f=[],p=new z,g=new Qe;u.push(0,0,0),h.push(0,0,1),f.push(.5,.5);for(let y=0,_=3;y<=t;y++,_+=3){const S=r+y/t*o;p.x=e*Math.cos(S),p.y=e*Math.sin(S),u.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(u[_]/e+1)/2,g.y=(u[_+1]/e+1)/2,f.push(g.x,g.y)}for(let y=1;y<=t;y++)l.push(y,y+1,0);this.setIndex(l),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class jn extends pn{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,h=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:h,thetaLength:f};const p=this;o=Math.floor(o),l=Math.floor(l);const g=[],y=[],_=[],S=[];let M=0;const w=[],x=r/2;let v=0;L(),u===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(g),this.setAttribute("position",new It(y,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(S,2));function L(){const T=new z,G=new z;let F=0;const U=(t-e)/r;for(let O=0;O<=l;O++){const b=[],C=O/l,k=C*(t-e)+e;for(let ne=0;ne<=o;ne++){const j=ne/o,X=j*f+h,re=Math.sin(X),ce=Math.cos(X);G.x=k*re,G.y=-C*r+x,G.z=k*ce,y.push(G.x,G.y,G.z),T.set(re,U,ce).normalize(),_.push(T.x,T.y,T.z),S.push(j,1-C),b.push(M++)}w.push(b)}for(let O=0;O<o;O++)for(let b=0;b<l;b++){const C=w[b][O],k=w[b+1][O],ne=w[b+1][O+1],j=w[b][O+1];(e>0||b!==0)&&(g.push(C,k,j),F+=3),(t>0||b!==l-1)&&(g.push(k,ne,j),F+=3)}p.addGroup(v,F,0),v+=F}function P(T){const G=M,F=new Qe,U=new z;let O=0;const b=T===!0?e:t,C=T===!0?1:-1;for(let ne=1;ne<=o;ne++)y.push(0,x*C,0),_.push(0,C,0),S.push(.5,.5),M++;const k=M;for(let ne=0;ne<=o;ne++){const X=ne/o*f+h,re=Math.cos(X),ce=Math.sin(X);U.x=b*ce,U.y=x*C,U.z=b*re,y.push(U.x,U.y,U.z),_.push(0,C,0),F.x=re*.5+.5,F.y=ce*.5*C+.5,S.push(F.x,F.y),M++}for(let ne=0;ne<o;ne++){const j=G+ne,X=k+ne;T===!0?g.push(X,X+1,j):g.push(X+1,X,j),O+=3}p.addGroup(v,O,T===!0?1:2),v+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pc extends jn{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,h=Math.PI*2){super(0,e,t,r,o,l,u,h),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:h}}static fromJSON(e){return new pc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zd extends pn{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],u=[];h(o),p(r),g(),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(l.slice(),3)),this.setAttribute("uv",new It(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function h(L){const P=new z,T=new z,G=new z;for(let F=0;F<t.length;F+=3)S(t[F+0],P),S(t[F+1],T),S(t[F+2],G),f(P,T,G,L)}function f(L,P,T,G){const F=G+1,U=[];for(let O=0;O<=F;O++){U[O]=[];const b=L.clone().lerp(T,O/F),C=P.clone().lerp(T,O/F),k=F-O;for(let ne=0;ne<=k;ne++)ne===0&&O===F?U[O][ne]=b:U[O][ne]=b.clone().lerp(C,ne/k)}for(let O=0;O<F;O++)for(let b=0;b<2*(F-O)-1;b++){const C=Math.floor(b/2);b%2===0?(_(U[O][C+1]),_(U[O+1][C]),_(U[O][C])):(_(U[O][C+1]),_(U[O+1][C+1]),_(U[O+1][C]))}}function p(L){const P=new z;for(let T=0;T<l.length;T+=3)P.x=l[T+0],P.y=l[T+1],P.z=l[T+2],P.normalize().multiplyScalar(L),l[T+0]=P.x,l[T+1]=P.y,l[T+2]=P.z}function g(){const L=new z;for(let P=0;P<l.length;P+=3){L.x=l[P+0],L.y=l[P+1],L.z=l[P+2];const T=x(L)/2/Math.PI+.5,G=v(L)/Math.PI+.5;u.push(T,1-G)}M(),y()}function y(){for(let L=0;L<u.length;L+=6){const P=u[L+0],T=u[L+2],G=u[L+4],F=Math.max(P,T,G),U=Math.min(P,T,G);F>.9&&U<.1&&(P<.2&&(u[L+0]+=1),T<.2&&(u[L+2]+=1),G<.2&&(u[L+4]+=1))}}function _(L){l.push(L.x,L.y,L.z)}function S(L,P){const T=L*3;P.x=e[T+0],P.y=e[T+1],P.z=e[T+2]}function M(){const L=new z,P=new z,T=new z,G=new z,F=new Qe,U=new Qe,O=new Qe;for(let b=0,C=0;b<l.length;b+=9,C+=6){L.set(l[b+0],l[b+1],l[b+2]),P.set(l[b+3],l[b+4],l[b+5]),T.set(l[b+6],l[b+7],l[b+8]),F.set(u[C+0],u[C+1]),U.set(u[C+2],u[C+3]),O.set(u[C+4],u[C+5]),G.copy(L).add(P).add(T).divideScalar(3);const k=x(G);w(F,C+0,L,k),w(U,C+2,P,k),w(O,C+4,T,k)}}function w(L,P,T,G){G<0&&L.x===1&&(u[P]=L.x-1),T.x===0&&T.z===0&&(u[P]=G/2/Math.PI+.5)}function x(L){return Math.atan2(L.z,-L.x)}function v(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zd(e.vertices,e.indices,e.radius,e.details)}}class mc extends zd{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-r,0,-o,r,0,o,-r,0,o,r,-o,-r,0,-o,r,0,o,-r,0,o,r,0,-r,0,-o,r,0,-o,-r,0,o,r,0,o],u=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,u,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mc(e.radius,e.detail)}}class oo extends pn{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const h=[],f=[],p=[],g=[];let y=e;const _=(t-e)/o,S=new z,M=new Qe;for(let w=0;w<=o;w++){for(let x=0;x<=r;x++){const v=l+x/r*u;S.x=y*Math.cos(v),S.y=y*Math.sin(v),f.push(S.x,S.y,S.z),p.push(0,0,1),M.x=(S.x/t+1)/2,M.y=(S.y/t+1)/2,g.push(M.x,M.y)}y+=_}for(let w=0;w<o;w++){const x=w*(r+1);for(let v=0;v<r;v++){const L=v+x,P=L,T=L+r+1,G=L+r+2,F=L+1;h.push(P,T,F),h.push(T,G,F)}}this.setIndex(h),this.setAttribute("position",new It(f,3)),this.setAttribute("normal",new It(p,3)),this.setAttribute("uv",new It(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Hd extends pn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:h},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(u+h,Math.PI);let p=0;const g=[],y=new z,_=new z,S=[],M=[],w=[],x=[];for(let v=0;v<=r;v++){const L=[],P=v/r;let T=0;v===0&&u===0?T=.5/t:v===r&&f===Math.PI&&(T=-.5/t);for(let G=0;G<=t;G++){const F=G/t;y.x=-e*Math.cos(o+F*l)*Math.sin(u+P*h),y.y=e*Math.cos(u+P*h),y.z=e*Math.sin(o+F*l)*Math.sin(u+P*h),M.push(y.x,y.y,y.z),_.copy(y).normalize(),w.push(_.x,_.y,_.z),x.push(F+T,1-P),L.push(p++)}g.push(L)}for(let v=0;v<r;v++)for(let L=0;L<t;L++){const P=g[v][L+1],T=g[v][L],G=g[v+1][L],F=g[v+1][L+1];(v!==0||u>0)&&S.push(P,T,F),(v!==r-1||f<Math.PI)&&S.push(T,G,F)}this.setIndex(S),this.setAttribute("position",new It(M,3)),this.setAttribute("normal",new It(w,3)),this.setAttribute("uv",new It(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Vd extends pn{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const u=[],h=[],f=[],p=[],g=new z,y=new z,_=new z;for(let S=0;S<=r;S++)for(let M=0;M<=o;M++){const w=M/o*l,x=S/r*Math.PI*2;y.x=(e+t*Math.cos(x))*Math.cos(w),y.y=(e+t*Math.cos(x))*Math.sin(w),y.z=t*Math.sin(x),h.push(y.x,y.y,y.z),g.x=e*Math.cos(w),g.y=e*Math.sin(w),_.subVectors(y,g).normalize(),f.push(_.x,_.y,_.z),p.push(M/o),p.push(S/r)}for(let S=1;S<=r;S++)for(let M=1;M<=o;M++){const w=(o+1)*S+M-1,x=(o+1)*(S-1)+M-1,v=(o+1)*(S-1)+M,L=(o+1)*S+M;u.push(w,x,L),u.push(x,v,L)}this.setIndex(u),this.setAttribute("position",new It(h,3)),this.setAttribute("normal",new It(f,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class lt extends zr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=o0,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Uh extends lt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class xc extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class gw extends xc{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Fh=new Gt,bg=new z,Pg=new z;class Gd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Od,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;bg.setFromMatrixPosition(e.matrixWorld),t.position.copy(bg),Pg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pg),t.updateMatrixWorld(),Fh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Fh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _w extends Gd{constructor(){super(new Yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,r=vo*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height,l=e.distance||t.far;(r!==t.fov||o!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=o,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class vw extends xc{constructor(e,t,r=0,o=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.distance=r,this.angle=o,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new _w}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Lg=new Gt,ca=new z,Oh=new z;class yw extends Gd{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qe(4,2),this._viewportCount=6,this._viewports=[new kt(2,1,1,1),new kt(0,1,1,1),new kt(3,1,1,1),new kt(1,1,1,1),new kt(3,0,1,1),new kt(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),ca.setFromMatrixPosition(e.matrixWorld),r.position.copy(ca),Oh.copy(r.position),Oh.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Oh),r.updateMatrixWorld(),o.makeTranslation(-ca.x,-ca.y,-ca.z),Lg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lg)}}class kh extends xc{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new yw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class xw extends Gd{constructor(){super(new y0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dg extends xc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new xw}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Sw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ng(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ng();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ng(){return performance.now()}class Ig{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(yn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Mw extends pw{constructor(e=10,t=10,r=4473924,o=8947848){r=new Ge(r),o=new Ge(o);const l=t/2,u=e/t,h=e/2,f=[],p=[];for(let _=0,S=0,M=-h;_<=t;_++,M+=u){f.push(-h,0,M,h,0,M),f.push(M,0,-h,M,0,h);const w=_===l?r:o;w.toArray(p,S),S+=3,w.toArray(p,S),S+=3,w.toArray(p,S),S+=3,w.toArray(p,S),S+=3}const g=new pn;g.setAttribute("position",new It(f,3)),g.setAttribute("color",new It(p,3));const y=new C0({vertexColors:!0,toneMapped:!1});super(g,y),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ew extends ms{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bd);const Ug={type:"change"},Wd={type:"start"},b0={type:"end"},ec=new vc,Fg=new Ir,ww=Math.cos(70*ti.DEG2RAD),on=new z,Xn=2*Math.PI,Ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bh=1e-6;class Tw extends Ew{constructor(e,t=null){super(e,t),this.state=Ot.NONE,this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:lo.ROTATE,MIDDLE:lo.DOLLY,RIGHT:lo.PAN},this.touches={ONE:ro.ROTATE,TWO:ro.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new ps,this._lastTargetPosition=new z,this._quat=new ps().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ig,this._sphericalDelta=new Ig,this._scale=1,this._panOffset=new z,this._rotateStart=new Qe,this._rotateEnd=new Qe,this._rotateDelta=new Qe,this._panStart=new Qe,this._panEnd=new Qe,this._panDelta=new Qe,this._dollyStart=new Qe,this._dollyEnd=new Qe,this._dollyDelta=new Qe,this._dollyDirection=new z,this._mouse=new Qe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Cw.bind(this),this._onPointerDown=Aw.bind(this),this._onPointerUp=Rw.bind(this),this._onContextMenu=Uw.bind(this),this._onMouseWheel=Lw.bind(this),this._onKeyDown=Dw.bind(this),this._onTouchStart=Nw.bind(this),this._onTouchMove=Iw.bind(this),this._onMouseDown=bw.bind(this),this._onMouseMove=Pw.bind(this),this._interceptControlDown=Fw.bind(this),this._interceptControlUp=Ow.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ug),this.update(),this.state=Ot.NONE}update(e=null){const t=this.object.position;on.copy(t).sub(this.target),on.applyQuaternion(this._quat),this._spherical.setFromVector3(on),this.autoRotate&&this.state===Ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=Xn:r>Math.PI&&(r-=Xn),o<-Math.PI?o+=Xn:o>Math.PI&&(o-=Xn),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(on.setFromSpherical(this._spherical),on.applyQuaternion(this._quatInverse),t.copy(this.target).add(on),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=on.length();u=this._clampDistance(h*this._scale);const f=h-u;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),l=!!f}else if(this.object.isOrthographicCamera){const h=new z(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=f!==this.object.zoom;const p=new z(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),u=on.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(ec.origin.copy(this.object.position),ec.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ec.direction))<ww?this.object.lookAt(this.target):(Fg.setFromNormalAndCoplanarPoint(this.object.up,this.target),ec.intersectPlane(Fg,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Bh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bh||this._lastTargetPosition.distanceToSquared(this.target)>Bh?(this.dispatchEvent(Ug),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xn/60*this.autoRotateSpeed*e:Xn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){on.setFromMatrixColumn(t,0),on.multiplyScalar(-e),this._panOffset.add(on)}_panUp(e,t){this.screenSpacePanning===!0?on.setFromMatrixColumn(t,1):(on.setFromMatrixColumn(t,0),on.crossVectors(this.object.up,on)),on.multiplyScalar(e),this._panOffset.add(on)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;on.copy(o).sub(this.target);let l=on.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,u=r.width,h=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Xn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Qe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function Aw(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function Cw(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function Rw(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(b0),this.state=Ot.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function bw(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case lo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ot.DOLLY;break;case lo.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ot.ROTATE}break;case lo.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ot.PAN}break;default:this.state=Ot.NONE}this.state!==Ot.NONE&&this.dispatchEvent(Wd)}function Pw(s){switch(this.state){case Ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Lw(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ot.NONE||(s.preventDefault(),this.dispatchEvent(Wd),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(b0))}function Dw(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function Nw(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ro.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ot.TOUCH_ROTATE;break;case ro.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ot.TOUCH_PAN;break;default:this.state=Ot.NONE}break;case 2:switch(this.touches.TWO){case ro.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ot.TOUCH_DOLLY_PAN;break;case ro.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ot.TOUCH_DOLLY_ROTATE;break;default:this.state=Ot.NONE}break;default:this.state=Ot.NONE}this.state!==Ot.NONE&&this.dispatchEvent(Wd)}function Iw(s){switch(this._trackPointer(s),this.state){case Ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ot.NONE}}function Uw(s){this.enabled!==!1&&s.preventDefault()}function Fw(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ow(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ui(s,e,t,r,o,l){s.beginPath(),s.moveTo(e+l,t),s.lineTo(e+r-l,t),s.quadraticCurveTo(e+r,t,e+r,t+l),s.lineTo(e+r,t+o-l),s.quadraticCurveTo(e+r,t+o,e+r-l,t+o),s.lineTo(e+l,t+o),s.quadraticCurveTo(e,t+o,e,t+o-l),s.lineTo(e,t+l),s.quadraticCurveTo(e,t,e+l,t),s.closePath()}function kw(s){const e=document.createElement("canvas");e.width=640,e.height=300;const t=e.getContext("2d");if(t.fillStyle="#0B1220",Ui(t,6,6,628,288,22),t.fill(),t.strokeStyle=s.accent,t.lineWidth=8,Ui(t,10,10,620,280,20),t.stroke(),t.fillStyle=s.accent,Ui(t,22,22,596,68,12),t.fill(),s.isDanger){t.save(),Ui(t,22,22,596,68,12),t.clip(),t.fillStyle="rgba(0,0,0,0.22)";for(let o=-40;o<640;o+=40)t.beginPath(),t.moveTo(o,22),t.lineTo(o+18,22),t.lineTo(o-10,90),t.lineTo(o-28,90),t.closePath(),t.fill();t.restore()}t.fillStyle=s.isDanger?"#FFFFFF":"#04120D",t.font="800 34px Inter, system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(s.code,320,57),t.fillStyle="#FFFFFF",t.font="800 38px Inter, system-ui, sans-serif",t.fillText(s.title,320,152),t.fillStyle=s.isDanger?"rgba(239,68,68,0.22)":"rgba(255,255,255,0.08)",Ui(t,48,198,544,62,14),t.fill(),t.fillStyle=s.accent,t.font="700 26px Inter, system-ui, sans-serif",t.fillText(s.subtitle,320,230);const r=new Mo(e);return r.colorSpace=fn,r.anisotropy=8,r.needsUpdate=!0,r}function Bw(s="RUTA PULSO · U-04"){const e=document.createElement("canvas");e.width=512,e.height=96;const t=e.getContext("2d");t.fillStyle="#060A11",t.fillRect(0,0,512,96),t.fillStyle="rgba(16, 185, 129, 0.14)";for(let o=8;o<512;o+=12)for(let l=8;l<96;l+=12)t.fillRect(o,l,4,4);t.shadowColor="#10B981",t.shadowBlur=14,t.fillStyle="#34D399",t.font="800 42px JetBrains Mono, monospace",t.textAlign="center",t.textBaseline="middle",t.fillText(s,256,49);const r=new Mo(e);return r.colorSpace=fn,r.needsUpdate=!0,r}function zw(){const s=document.createElement("canvas");s.width=1024,s.height=192;const e=s.getContext("2d");e.fillStyle="#131C2E",e.fillRect(0,0,1024,192),e.strokeStyle="#10B981",e.lineWidth=7,e.beginPath(),e.moveTo(20,126),e.lineTo(250,126),e.lineTo(285,126),e.lineTo(310,62),e.lineTo(342,162),e.lineTo(372,92),e.lineTo(396,126),e.lineTo(1004,126),e.stroke(),e.fillStyle="#FFFFFF",e.font="800 46px Inter, system-ui, sans-serif",e.textAlign="left",e.textBaseline="middle",e.fillText("RUTA PULSO",420,66),e.fillStyle="#10B981",Ui(e,735,38,120,52,10),e.fill(),e.fillStyle="#04120D",e.font="800 32px JetBrains Mono, monospace",e.textAlign="center",e.fillText("NFC",795,65),e.fillStyle="#94A3B8",e.font="700 28px JetBrains Mono, monospace",e.textAlign="left",e.fillText("UNIDAD 04 · TRANSPORTE SEGURO",420,158);const t=new Mo(s);return t.colorSpace=fn,t.anisotropy=8,t.needsUpdate=!0,t}function Hw(){const s=document.createElement("canvas");s.width=256,s.height=256;const e=s.getContext("2d");e.fillStyle="#09111F",e.fillRect(0,0,256,256),e.strokeStyle="#38BDF8",e.lineWidth=8,Ui(e,14,14,228,228,30),e.stroke(),e.strokeStyle="#E0F2FE",e.lineWidth=10,e.lineCap="round";const t=104,r=112;[26,48,70].forEach(l=>{e.beginPath(),e.arc(t,r,l,-Math.PI*.34,Math.PI*.34),e.stroke()}),e.fillStyle="#38BDF8",Ui(e,52,82,46,60,8),e.fill(),e.fillStyle="#FFFFFF",e.font="800 38px JetBrains Mono, monospace",e.textAlign="center",e.textBaseline="middle",e.fillText("NFC",128,206);const o=new Mo(s);return o.colorSpace=fn,o.needsUpdate=!0,o}function Vw(s,e,t){const r=document.createElement("canvas");r.width=360,r.height=110;const o=r.getContext("2d");o.clearRect(0,0,360,110),o.fillStyle="rgba(11, 15, 23, 0.88)",Ui(o,8,8,344,94,22),o.fill(),o.strokeStyle=t,o.lineWidth=5,Ui(o,8,8,344,94,22),o.stroke(),o.fillStyle=t,o.beginPath(),o.arc(38,42,10,0,Math.PI*2),o.fill(),o.fillStyle="#FFFFFF",o.font="700 28px Inter, system-ui, sans-serif",o.textAlign="left",o.textBaseline="middle",o.fillText(s,62,42),o.fillStyle=t,o.font="600 20px Inter, system-ui, sans-serif",o.fillText(e,62,76);const l=new Mo(r);return l.colorSpace=fn,l.needsUpdate=!0,l}function Og(s,e,t=!1){const r=document.createElement("canvas");r.width=256,r.height=512;const o=r.getContext("2d");o.fillStyle="#0E1525",o.fillRect(0,0,256,512);const l=16,u=18,h=(256-l*2)/s,f=(512-u*2)/e;for(let g=0;g<e;g++)for(let y=0;y<s;y++){const _=Math.sin(g*19.13+y*73.7+(t?5:1))*1e4,S=_-Math.floor(_);S>.35?o.fillStyle=t?S>.72?"#FDE68A":"#F59E0B":S>.7?"#BAE6FD":"#38BDF8":o.fillStyle="#141E30",o.fillRect(l+y*h+5,u+g*f+6,Math.max(8,h-10),Math.max(10,f-12))}const p=new Mo(r);return p.colorSpace=fn,p.needsUpdate=!0,p}const wt={stop1:{x:-13.5,busX:-15.75,label:"Parada 1 · Escuela / Residencial"},stop2:{x:0,busX:-2.25,label:"Parada 2 · Parque Industrial / Destino"},stop3:{x:13.5,busX:11.25,label:"Parada 3 · Zona Aislada (No Autorizada)"}};class Gw{constructor(e,t,r="night"){qe(this,"container");qe(this,"callbacks");qe(this,"scene");qe(this,"camera");qe(this,"renderer");qe(this,"controls");qe(this,"resizeObserver");qe(this,"clock",new Sw);qe(this,"rafId",0);qe(this,"disposed",!1);qe(this,"lightingMode","night");qe(this,"nightFactor",1);qe(this,"targetNightFactor",1);qe(this,"hemiLight");qe(this,"sunLight");qe(this,"fillLight");qe(this,"skyDayColor",new Ge("#6FA8DC"));qe(this,"skyNightColor",new Ge("#040711"));qe(this,"fogDayColor",new Ge("#8CC0EC"));qe(this,"fogNightColor",new Ge("#060A15"));qe(this,"streetLights",[]);qe(this,"buildingWindowMats",[]);qe(this,"shelterLightMats",[]);qe(this,"starsPoints");qe(this,"geofences");qe(this,"busGroup");qe(this,"busX",wt.stop1.busX);qe(this,"lastBusX",wt.stop1.busX);qe(this,"wheels",[]);qe(this,"doorLeft");qe(this,"doorRight");qe(this,"doorOpenProgress",0);qe(this,"targetDoorOpen",0);qe(this,"headlightCones",[]);qe(this,"headlightSpots",[]);qe(this,"headlightBulbMats",[]);qe(this,"brakeLightMats",[]);qe(this,"cabinLight");qe(this,"isBraking",!0);qe(this,"nfcHaloMat");qe(this,"nfcHaloLight");qe(this,"nfcReaderWorldAnchor",new qt);qe(this,"nfcState","idle");qe(this,"shockwaves",[]);qe(this,"sofia");qe(this,"tutor");qe(this,"mateo");qe(this,"ana");qe(this,"cameraPreset","panoramic");qe(this,"cameraTransitioning",!1);qe(this,"desiredCamPos",new z(0,21.5,40.5));qe(this,"desiredCamTarget",new z(0,1.2,1.4));qe(this,"followOffset",new z(-8.5,8,14));qe(this,"runToken",0);qe(this,"elapsedTotal",0);qe(this,"animate",()=>{if(this.disposed)return;this.rafId=requestAnimationFrame(this.animate);const e=Math.min(this.clock.getDelta(),.05);this.elapsedTotal+=e,Math.abs(this.nightFactor-this.targetNightFactor)>.002&&(this.nightFactor=ti.lerp(this.nightFactor,this.targetNightFactor,Math.min(1,e*3.5)),this.applyLightingBlend(this.nightFactor));const t=this.busX-this.lastBusX;if(this.lastBusX=this.busX,Math.abs(t)>1e-4){const l=-t/.48;this.wheels.forEach(u=>{u.rotation.z+=l})}const r=this.isBraking?2.4:.65;this.brakeLightMats.forEach(l=>{l.emissiveIntensity=ti.lerp(l.emissiveIntensity,r,e*8)}),this.doorOpenProgress=ti.lerp(this.doorOpenProgress,this.targetDoorOpen,Math.min(1,e*6.5));const o=this.doorOpenProgress*.62;if(this.doorLeft.position.x=1.9-o,this.doorRight.position.x=2.6+o,this.doorLeft.position.z=1.24+this.doorOpenProgress*.04,this.doorRight.position.z=1.24+this.doorOpenProgress*.04,this.updateNfcVisuals(e),this.updateGeofences(e),[this.sofia,this.tutor,this.mateo,this.ana].forEach(l=>this.updateCharacterRig(l,e)),this.cameraTransitioning){if(this.cameraPreset==="nfc"){const u=this.getNfcReaderWorldPosition();this.desiredCamPos.set(u.x+1.35,u.y+.95,u.z+3.4),this.desiredCamTarget.set(u.x-.35,u.y-.05,u.z-.1)}else this.cameraPreset==="follow"&&(this.desiredCamPos.set(this.busX-8.5,8.2,13.8),this.desiredCamTarget.set(this.busX+1.5,1.7,1.4));const l=Math.min(1,e*4.5);this.camera.position.lerp(this.desiredCamPos,l),this.controls.target.lerp(this.desiredCamTarget,l),this.camera.position.distanceTo(this.desiredCamPos)<.08&&this.controls.target.distanceTo(this.desiredCamTarget)<.08&&(this.cameraTransitioning=!1)}this.controls.update(),this.renderer.render(this.scene,this.camera)});this.container=e,this.callbacks=t,this.lightingMode=r,this.nightFactor=r==="night"?1:0,this.targetNightFactor=this.nightFactor,this.scene=new uw,this.scene.background=this.nightFactor>.5?this.skyNightColor.clone():this.skyDayColor.clone(),this.scene.fog=new uc(this.nightFactor>.5?this.fogNightColor.getHex():this.fogDayColor.getHex(),.0125);const o=Math.max(e.clientWidth,1),l=Math.max(e.clientHeight,1);this.camera=new Yn(46,o/l,.2,200),this.camera.position.set(0,21.5,40.5),this.renderer=new cw({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(o,l),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=jg,this.renderer.toneMapping=qg,this.renderer.toneMappingExposure=1.12,e.innerHTML="",e.appendChild(this.renderer.domElement),this.controls=new Tw(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.065,this.controls.maxPolarAngle=Math.PI*.475,this.controls.minPolarAngle=.15,this.controls.minDistance=4.2,this.controls.maxDistance=52,this.controls.target.set(0,1.5,1.5),this.controls.addEventListener("start",()=>{this.cameraTransitioning=!1,this.cameraPreset}),this.buildLightsAndSky(),this.buildUrbanEnvironment(),this.buildStopsAndGeofences(),this.buildBusAndNfcReader(),this.buildCharacters(),this.applyLightingBlend(this.nightFactor),this.positionInitialEntities(),this.resizeObserver=new ResizeObserver(()=>this.handleResize()),this.resizeObserver.observe(e),this.animate()}handleResize(){if(this.disposed)return;const e=Math.max(this.container.clientWidth,1),t=Math.max(this.container.clientHeight,1);this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}buildLightsAndSky(){this.hemiLight=new gw("#94B8E8","#141B29",.85),this.scene.add(this.hemiLight),this.sunLight=new Dg("#FFFFFF",1.55),this.sunLight.position.set(22,32,20),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=5,this.sunLight.shadow.camera.far=90;const e=34;this.sunLight.shadow.camera.left=-e,this.sunLight.shadow.camera.right=e,this.sunLight.shadow.camera.top=e,this.sunLight.shadow.camera.bottom=-e,this.sunLight.shadow.bias=-5e-4,this.scene.add(this.sunLight),this.fillLight=new Dg("#60A5FA",.35),this.fillLight.position.set(-25,16,-18),this.scene.add(this.fillLight);const t=320,r=new Float32Array(t*3);for(let u=0;u<t;u++){const h=Math.random()*Math.PI*2,f=55+Math.random()*45;r[u*3]=Math.cos(h)*f,r[u*3+1]=18+Math.random()*42,r[u*3+2]=Math.sin(h)*f}const o=new pn;o.setAttribute("position",new di(r,3));const l=new R0({color:"#CBD5E1",size:.32,transparent:!0,opacity:.75,depthWrite:!1});this.starsPoints=new mw(o,l),this.scene.add(this.starsPoints)}buildUrbanEnvironment(){const e=new wi(180,140),t=new lt({color:"#1E293B",roughness:.92,metalness:.04}),r=new we(e,t);r.rotation.x=-Math.PI/2,r.position.y=-.02,r.receiveShadow=!0,this.scene.add(r);const o=new Mw(140,56,"#334155","#1E293B");o.position.y=-.01,o.material.transparent=!0,o.material.opacity=.22,this.scene.add(o);const l=new Ke(92,.06,7),u=new lt({color:"#2B3444",roughness:.84,metalness:.06}),h=new we(l,u);h.position.set(0,-.02,-.7),h.receiveShadow=!0,this.scene.add(h);const f=new In({color:"#CBD5E1",transparent:!0,opacity:.65});[-3.95,2.55].forEach(P=>{const T=new we(new wi(90,.1),f);T.rotation.x=-Math.PI/2,T.position.set(0,.016,P),this.scene.add(T)});const p=new In({color:"#F59E0B",transparent:!0,opacity:.88});for(let P=-42;P<=42;P+=3.6){const T=new we(new wi(1.8,.13),p);T.rotation.x=-Math.PI/2,T.position.set(P,.016,-.7),this.scene.add(T)}const g=new In({color:"#F1F5F9",transparent:!0,opacity:.9});[-7.4,6.6].forEach(P=>{for(let T=-3.4;T<=2;T+=.72){const G=new we(new wi(2.2,.36),g);G.rotation.x=-Math.PI/2,G.position.set(P,.018,T),this.scene.add(G)}});const y=new lt({color:"#475569",roughness:.82,metalness:.05}),_=new we(new Ke(92,.22,5.6),y);_.position.set(0,.11,5.6),_.receiveShadow=!0,this.scene.add(_);const S=new lt({color:"#1E242F",roughness:.96,metalness:.02}),M=new we(new Ke(24,.226,5.65),S);M.position.set(18,.11,5.6),M.receiveShadow=!0,this.scene.add(M);const w=new lt({color:"#64748B",roughness:.72}),x=new we(new Ke(92,.23,.2),w);x.position.set(0,.115,2.86),x.receiveShadow=!0,this.scene.add(x);const v=new we(new Ke(92,.22,3.4),y);v.position.set(0,.11,-5.9),v.receiveShadow=!0,this.scene.add(v),this.buildUrbanBackdrop(),[[-18.5,-5,1],[-11.5,-5,1],[-4.2,-5,1],[3.5,-5,1],[-17.8,7.6,-1],[-6.8,7.6,-1]].forEach(([P,T,G])=>this.createStreetLight(P,T,G)),this.createBrokenDarkPole(16.8,-5),[-21,-8.5,5.5].forEach(P=>this.createStylizedTree(P,-6.5)),[-19.5,-7.8].forEach(P=>this.createStylizedTree(P,7.6))}buildUrbanBackdrop(){const e=new lt({color:"#334155",roughness:.68}),t=Og(5,4,!0),r=new lt({color:"#3B4C66",map:t,emissive:new Ge("#F59E0B"),emissiveMap:t,emissiveIntensity:.7,roughness:.5});this.buildingWindowMats.push(r);const o=new we(new Ke(10.5,6,5.2),[e,e,e,e,r,e]);o.position.set(-14.5,3,-11.4),o.castShadow=!0,o.receiveShadow=!0,this.scene.add(o);const l=new we(new Ke(10.7,.28,5.4),new lt({color:"#10B981",emissive:"#059669",emissiveIntensity:.45}));l.position.set(-14.5,6.12,-11.4),this.scene.add(l);const u=new we(new Ke(5.8,9.8,5.2),[e,e,e,e,r,e]);u.position.set(-23.5,4.9,-12.6),u.castShadow=!0,this.scene.add(u);const h=Og(6,7,!1),f=new lt({color:"#32445E",map:h,emissive:new Ge("#38BDF8"),emissiveMap:h,emissiveIntensity:.65,roughness:.45});this.buildingWindowMats.push(f);const p=new lt({color:"#2B3B54",roughness:.6}),g=new we(new Ke(7.2,10.6,5.6),[p,p,p,p,f,p]);g.position.set(-2.2,5.3,-12.2),g.castShadow=!0,this.scene.add(g);const y=new we(new Ke(7.4,.25,5.8),new lt({color:"#38BDF8",emissive:"#0284C7",emissiveIntensity:.55}));y.position.set(-2.2,10.7,-12.2),this.scene.add(y);const _=new we(new Ke(6.8,5.6,5.8),[p,p,p,p,f,p]);_.position.set(5.4,2.8,-12.4),_.castShadow=!0,this.scene.add(_);const S=new lt({color:"#28303D",roughness:.9}),M=new In({color:"#475569",wireframe:!0,transparent:!0,opacity:.42});for(let L=9.5;L<=26.5;L+=3.4){const P=new we(new jn(.06,.07,2.4,6),S);P.position.set(L,1.2,-7.8),this.scene.add(P)}const w=new we(new wi(17,2.1,14,3),M);w.position.set(18,1.15,-7.8),this.scene.add(w);const x=new lt({color:"#141923",roughness:.95}),v=new we(new Ke(10,3.8,5),x);v.position.set(17,1.9,-15.5),this.scene.add(v)}createStreetLight(e,t,r){const o=new _n;o.position.set(e,.22,t);const l=new lt({color:"#334155",roughness:.5,metalness:.7}),u=new we(new jn(.08,.12,5.6,8),l);u.position.y=2.8,u.castShadow=!0,o.add(u);const h=new we(new Ke(.12,.1,1.7),l);h.position.set(0,5.55,r*.8),o.add(h);const f=new we(new Ke(.45,.14,.75),l);f.position.set(0,5.5,r*1.45),o.add(f);const p=new lt({color:"#FFFBEB",emissive:new Ge("#FDE68A"),emissiveIntensity:2}),g=new we(new Ke(.36,.06,.62),p);g.position.set(0,5.42,r*1.45),o.add(g);const y=new kh("#FDE68A",7.5,14,1.6);y.position.set(0,5.1,r*1.45),o.add(y);const _=new In({color:"#FEF3C7",transparent:!0,opacity:.08,depthWrite:!1,side:vn}),S=new we(new pc(2.8,5.3,18,1,!0),_);S.position.set(0,2.72,r*1.45),o.add(S),this.streetLights.push({bulbMat:p,pointLight:y,coneMat:_}),this.scene.add(o)}createBrokenDarkPole(e,t){const r=new _n;r.position.set(e,.22,t),r.rotation.z=.12;const o=new lt({color:"#1F242D",roughness:.92,metalness:.35}),l=new we(new jn(.07,.11,5.2,8),o);l.position.y=2.6,r.add(l);const u=new we(new Ke(.1,.09,1.3),o);u.position.set(0,5.1,-.6),u.rotation.x=.25,r.add(u);const h=new we(new Ke(.38,.14,.6),o);h.position.set(0,4.9,-1.1),r.add(h),this.scene.add(r)}createStylizedTree(e,t){const r=new _n;r.position.set(e,.22,t);const o=new we(new jn(.11,.16,1.3,6),new lt({color:"#3F2E21",roughness:.9}));o.position.y=.65,r.add(o);const l=new lt({color:"#14532D",roughness:.8}),u=new we(new mc(.85,0),l);u.position.y=1.95,u.castShadow=!0,r.add(u);const h=new we(new mc(.58,0),l);h.position.set(.35,2.55,.15),r.add(h),this.scene.add(r)}buildStopsAndGeofences(){const e=this.createGeofence(wt.stop1.x,3.85,2.05,"#10B981");this.createModernShelter(wt.stop1.x-3.05,5.55,"#10B981"),this.createStopSign(wt.stop1.x+2.45,5.1,{code:"PARADA 1 · AUTORIZADA",title:"Escuela / Residencial",subtitle:"GEOCERCA VERDE · ABORDAJE NFC",accent:"#10B981"});const t=this.createGeofence(wt.stop2.x,3.85,2.05,"#38BDF8");this.createModernShelter(wt.stop2.x-3.05,5.55,"#38BDF8"),this.createStopSign(wt.stop2.x+2.45,5.1,{code:"PARADA 2 · AUTORIZADA",title:"Parque Industrial / Destino",subtitle:"GEOCERCA AZUL · DESCENSO + TUTOR",accent:"#38BDF8"});const r=this.createGeofence(wt.stop3.x,3.85,2.05,"#EF4444");this.createStopSign(wt.stop3.x+2.35,5.1,{code:"PARADA 3 · NO AUTORIZADA",title:"Zona Aislada",subtitle:"ZONA DE RIESGO · SIN ALUMBRADO",accent:"#EF4444",isDanger:!0});const o=new lt({color:"#334155",roughness:.88}),l=new we(new Ke(2.4,.72,.45),o);l.position.set(wt.stop3.x-2.95,.58,5.6),this.scene.add(l),this.geofences={stop1:e,stop2:t,stop3:r}}createGeofence(e,t,r,o){const l=new _n;l.position.set(e,.245,t);const u=new Ge(o),h=u.clone(),f=new In({color:u,transparent:!0,opacity:.14,depthWrite:!1,side:vn}),p=new we(new Bd(r*.94,48),f);p.rotation.x=-Math.PI/2,l.add(p);const g=new In({color:u,transparent:!0,opacity:.88,depthWrite:!1,side:vn}),y=new we(new oo(r*.88,r,48),g);y.rotation.x=-Math.PI/2,y.position.y=.005,l.add(y);const _=new In({color:u,transparent:!0,opacity:.45,depthWrite:!1,side:vn}),S=new we(new oo(r*1.07,r*1.13,32,1,0,Math.PI*1.45),_);S.rotation.x=-Math.PI/2,S.position.y=.008,l.add(S);const M=new In({color:u,transparent:!0,opacity:.09,depthWrite:!1,side:vn}),w=new we(new jn(r,r,.85,40,1,!0),M);return w.position.y=.425,l.add(w),this.scene.add(l),{group:l,ringMesh:y,ringMat:g,discMesh:p,discMat:f,outerRing:S,outerMat:_,beamMesh:w,beamMat:M,baseColor:u,activeColor:h,pulseBoost:0,flashingRed:!1}}createModernShelter(e,t,r){const o=new _n;o.position.set(e,.22,t);const l=new lt({color:"#1E293B",roughness:.4,metalness:.75}),u=new Uh({color:"#93C5FD",transparent:!0,opacity:.18,roughness:.1,metalness:.1});[-1.4,1.4].forEach(_=>{const S=new we(new Ke(.12,2.6,.12),l);S.position.set(_,1.3,.65),S.castShadow=!0,o.add(S)});const h=new we(new Ke(2.7,2.2,.05),u);h.position.set(0,1.25,.65),o.add(h);const f=new we(new Ke(3.2,.12,1.55),l);f.position.set(0,2.6,.08),f.castShadow=!0,o.add(f);const p=new lt({color:r,emissive:new Ge(r),emissiveIntensity:1.4});this.shelterLightMats.push(p);const g=new we(new Ke(3.22,.07,.08),p);g.position.set(0,2.6,-.68),o.add(g);const y=new we(new Ke(2.1,.1,.48),new lt({color:"#475569",roughness:.65}));y.position.set(0,.56,.25),o.add(y),[-.85,.85].forEach(_=>{const S=new we(new Ke(.08,.55,.4),l);S.position.set(_,.28,.25),o.add(S)}),this.scene.add(o)}createStopSign(e,t,r){const o=new _n;o.position.set(e,.22,t),o.rotation.y=-.18;const l=new lt({color:"#334155",roughness:.45,metalness:.75}),u=new we(new jn(.07,.09,3.6,8),l);u.position.y=1.8,u.castShadow=!0,o.add(u);const h=kw(r),f=new lt({color:"#0F172A",roughness:.5}),p=new lt({map:h,emissive:new Ge("#FFFFFF"),emissiveMap:h,emissiveIntensity:.58,roughness:.35}),g=new we(new Ke(2.95,1.38,.12),[f,f,f,f,p,p]);g.position.set(0,3.75,0),g.castShadow=!0,o.add(g),this.scene.add(o)}buildBusAndNfcReader(){this.busGroup=new _n,this.busGroup.position.set(this.busX,0,1.05);const e=new lt({color:"#151F32",roughness:.45,metalness:.5}),t=new lt({color:"#E2E8F0",roughness:.3,metalness:.25}),r=zw(),o=new lt({map:r,roughness:.38,metalness:.22}),l=new Uh({color:"#0B1628",transparent:!0,opacity:.54,roughness:.12,metalness:.2}),u=new lt({color:"#10B981",emissive:"#059669",emissiveIntensity:.45}),h=new we(new Ke(8.8,.24,2.42),e);h.position.set(0,.72,0),h.castShadow=!0,this.busGroup.add(h);const f=new we(new Ke(5.95,.88,2.44),[e,e,e,e,o,o]);f.position.set(-1.425,1.24,0),f.castShadow=!0,this.busGroup.add(f);const p=new we(new Ke(1.45,.88,2.44),e);p.position.set(3.675,1.24,0),p.castShadow=!0,this.busGroup.add(p);const g=new we(new Ke(1.45,.88,.14),e);g.position.set(2.25,1.24,-1.15),this.busGroup.add(g);const y=new lt({color:"#1E3A5F",roughness:.75});for(let se=-3.4;se<=.8;se+=1.05)[-.72,.72].forEach(ie=>{const N=new we(new Ke(.52,.34,.56),y);N.position.set(se,1.02,ie),this.busGroup.add(N);const ee=new we(new Ke(.14,.72,.54),y);ee.position.set(se-.22,1.44,ie),this.busGroup.add(ee)});const _=new we(new Ke(.6,.75,2.1),e);_.position.set(3.95,1.35,0),this.busGroup.add(_);const S=new we(new Ke(5.85,1.15,.06),l);S.position.set(-1.42,2.25,1.2),this.busGroup.add(S);const M=new we(new Ke(1.3,1.15,.06),l);M.position.set(3.65,2.25,1.2),this.busGroup.add(M);const w=new we(new Ke(8.5,1.15,.06),l);w.position.set(0,2.25,-1.2),this.busGroup.add(w);const x=new we(new Ke(.08,1.28,2.22),l);x.position.set(4.38,2.22,0),this.busGroup.add(x);const v=new we(new Ke(.14,1.9,2.42),t);v.position.set(-4.35,2.05,0),this.busGroup.add(v),[-4.3,-2.5,-.7,1.5,3,4.32].forEach(se=>{[-1.18,1.18].forEach(ie=>{const N=new we(new Ke(.14,1.22,.12),e);N.position.set(se,2.25,ie),this.busGroup.add(N)})});const L=new we(new Ke(8.86,.34,2.48),t);L.position.set(0,2.98,0),L.castShadow=!0,this.busGroup.add(L);const P=new we(new Ke(8.9,.09,2.52),u);P.position.set(0,2.86,0),this.busGroup.add(P);const T=new we(new Ke(3.2,.28,1.5),e);T.position.set(-.6,3.28,0),this.busGroup.add(T);const G=Bw("RUTA PULSO · U-04"),F=new In({map:G}),U=new we(new wi(1.75,.3),F);U.rotation.y=Math.PI/2,U.position.set(4.44,2.94,0),this.busGroup.add(U),this.cabinLight=new kh("#E2E8F0",2.4,7,1.5),this.cabinLight.position.set(.6,2.65,0),this.busGroup.add(this.cabinLight);const O=new lt({color:"#0F172A",roughness:.4,metalness:.6}),b=new Uh({color:"#38BDF8",transparent:!0,opacity:.34,roughness:.1}),C=()=>{const se=new _n,ie=new we(new Ke(.68,.1,.08),O);ie.position.y=.96,se.add(ie);const N=new we(new Ke(.68,.25,.08),O);N.position.y=-.88,se.add(N);const ee=new we(new Ke(.62,1.65,.05),b);ee.position.y=.08,se.add(ee);const Ce=new we(new Ke(.06,1.85,.09),new lt({color:"#10B981",emissive:"#10B981",emissiveIntensity:.4}));return Ce.position.x=0,se.add(Ce),se};this.doorLeft=C(),this.doorLeft.position.set(1.9,1.78,1.24),this.busGroup.add(this.doorLeft),this.doorRight=C(),this.doorRight.position.set(2.6,1.78,1.24),this.busGroup.add(this.doorRight),[-.86,.86].forEach(se=>{const ie=new lt({color:"#FFFFFF",emissive:new Ge("#FEF9C3"),emissiveIntensity:2.2});this.headlightBulbMats.push(ie);const N=new we(new Ke(.1,.24,.38),ie);N.position.set(4.42,1.12,se),this.busGroup.add(N);const ee=new In({color:"#FEF9C3",transparent:!0,opacity:.13,depthWrite:!1,side:vn});this.headlightCones.push(ee);const Ce=new we(new pc(1.7,9.2,18,1,!0),ee);Ce.rotation.z=Math.PI/2,Ce.position.set(9.05,.82,se),this.busGroup.add(Ce);const Q=new vw("#FEF3C7",16,22,Math.PI*.24,.65,1.4);Q.position.set(4.45,1.12,se);const de=new qt;de.position.set(13.5,0,se*1.15),this.busGroup.add(de),Q.target=de,this.headlightSpots.push(Q),this.busGroup.add(Q)}),[-.9,.9].forEach(se=>{const ie=new lt({color:"#EF4444",emissive:new Ge("#EF4444"),emissiveIntensity:1.5});this.brakeLightMats.push(ie);const N=new we(new Ke(.1,.34,.34),ie);N.position.set(-4.42,1.18,se),this.busGroup.add(N)});const k=new lt({color:"#0F141D",roughness:.9}),ne=new lt({color:"#94A3B8",roughness:.35,metalness:.8});[[-2.65,1.24],[-2.65,-1.24],[2.85,1.24],[2.85,-1.24]].forEach(([se,ie])=>{const N=new _n;N.position.set(se,.48,ie);const ee=new we(new jn(.48,.48,.32,24),k);ee.rotation.x=Math.PI/2,ee.castShadow=!0,N.add(ee);const Ce=new we(new jn(.28,.28,.34,16),ne);Ce.rotation.x=Math.PI/2,N.add(Ce);const Q=new we(new Ke(.48,.06,.36),e),de=new we(new Ke(.06,.48,.36),e);N.add(Q,de),this.wheels.push(N),this.busGroup.add(N)});const X=new _n;X.position.set(3.16,1.52,1.32),X.rotation.y=.08;const re=new we(new Ke(.44,.56,.14),new lt({color:"#0F172A",roughness:.35,metalness:.75}));X.add(re);const ce=Hw(),ue=new we(new wi(.36,.36),new lt({map:ce,emissive:new Ge("#38BDF8"),emissiveMap:ce,emissiveIntensity:.5}));ue.position.z=.075,X.add(ue),this.nfcHaloMat=new lt({color:"#38BDF8",emissive:new Ge("#38BDF8"),emissiveIntensity:2.2,roughness:.2});const V=new we(new Vd(.27,.044,14,32),this.nfcHaloMat);V.position.z=.08,X.add(V),this.nfcHaloLight=new kh("#38BDF8",2.8,5.5,1.6),this.nfcHaloLight.position.set(0,0,.35),X.add(this.nfcHaloLight),this.nfcReaderWorldAnchor.position.set(0,0,.12),X.add(this.nfcReaderWorldAnchor);for(let se=0;se<6;se++){const ie=new In({color:"#10B981",transparent:!0,opacity:0,side:vn,depthWrite:!1}),N=new we(new oo(.24,.33,36),ie);N.position.set(0,0,.14),N.visible=!1,X.add(N),this.shockwaves.push({mesh:N,material:ie,active:!1,age:0,maxAge:.9,maxScale:4.2,subtle:!1})}this.busGroup.add(X),this.scene.add(this.busGroup)}buildCharacters(){this.sofia=this.createPassengerRig({bodyColor:"#10B981",headColor:"#FDE68A",accentColor:"#34D399",scale:.9,hasBackpack:!0,badgeName:"Sofía M.",badgeSub:"Escolar · NFC"}),this.tutor=this.createPassengerRig({bodyColor:"#38BDF8",headColor:"#E2E8F0",accentColor:"#38BDF8",scale:1.06,hasBackpack:!1,badgeName:"Carlos M.",badgeSub:"Tutor Verificado ✓"}),this.mateo=this.createPassengerRig({bodyColor:"#F59E0B",headColor:"#FDE68A",accentColor:"#FBBF24",scale:.92,hasBackpack:!0,badgeName:"Mateo R.",badgeSub:"Escolar · NFC"}),this.ana=this.createPassengerRig({bodyColor:"#A855F7",headColor:"#F5D0FE",accentColor:"#D946EF",scale:1,hasBackpack:!1,badgeName:"Ana L.",badgeSub:"Turno Nocturno"}),this.scene.add(this.sofia.group,this.tutor.group,this.mateo.group,this.ana.group)}createPassengerRig(e){const t=new _n,r=e.scale,o=new lt({color:e.bodyColor,roughness:.5,metalness:.15}),l=new lt({color:"#1E293B",roughness:.7}),u=new lt({color:e.headColor,roughness:.55}),h=new we(new oo(.32,.4,24),new In({color:e.accentColor,transparent:!0,opacity:.78,side:vn}));h.rotation.x=-Math.PI/2,h.position.y=.025,t.add(h);const f=P=>{const T=new _n;T.position.set(P*r,.68*r,0);const G=new we(new jn(.075*r,.065*r,.66*r,10),l);return G.position.y=-.33*r,G.castShadow=!0,T.add(G),T},p=f(-.11),g=f(.11);t.add(p,g);const y=new we(new jn(.2*r,.17*r,.68*r,12),o);if(y.position.y=1.02*r,y.castShadow=!0,t.add(y),e.hasBackpack){const P=new we(new Ke(.28*r,.36*r,.16*r),new lt({color:"#0F172A",roughness:.7}));P.position.set(0,1.04*r,-.2*r),t.add(P)}const _=new we(new Hd(.19*r,16,16),u);_.position.y=1.56*r,_.castShadow=!0,t.add(_);const S=(P,T)=>{const G=new _n;G.position.set(P*r,1.28*r,0);const F=new we(new jn(.06*r,.055*r,.56*r,10),o);F.position.y=-.26*r,G.add(F);let U,O;return T&&(O=new lt({color:"#FFFFFF",emissive:new Ge(e.accentColor),emissiveIntensity:1.6}),U=new we(new Ke(.14*r,.09*r,.02*r),O),U.position.set(0,-.54*r,.08*r),U.visible=!1,G.add(U)),{pivot:G,cardMesh:U,cardMat:O}},M=S(-.26,!1),w=S(.26,!0);t.add(M.pivot,w.pivot);const x=Vw(e.badgeName,e.badgeSub,e.accentColor),v=new T0({map:x,transparent:!0,depthTest:!1}),L=new dw(v);return L.scale.set(2.15,.65,1),L.position.set(0,(e.scale>1?2.68:2.18)*r,0),L.renderOrder=20,t.add(L),{group:t,leftLeg:p,rightLeg:g,leftArm:M.pivot,rightArm:w.pivot,nfcCard:w.cardMesh,nfcCardMat:w.cardMat,badge:L,walkPhase:0,isWalking:!1,armRaise:0,targetArmRaise:0}}positionInitialEntities(){this.busX=wt.stop1.busX,this.lastBusX=this.busX,this.busGroup.position.x=this.busX,this.targetDoorOpen=0,this.doorOpenProgress=0,this.isBraking=!0,this.sofia.group.visible=!0,this.sofia.badge.visible=!0,this.sofia.group.position.set(wt.stop1.x+.35,.22,3.95),this.sofia.group.rotation.y=Math.PI,this.sofia.isWalking=!1,this.sofia.targetArmRaise=0,this.sofia.nfcCard.visible=!1,this.tutor.group.visible=!0,this.tutor.badge.visible=!0,this.tutor.group.position.set(wt.stop2.x+1,.22,4.1),this.tutor.group.rotation.y=Math.PI,this.tutor.isWalking=!1,this.tutor.targetArmRaise=0,this.tutor.nfcCard.visible=!1,this.mateo.group.visible=!1,this.mateo.isWalking=!1,this.mateo.targetArmRaise=0,this.mateo.nfcCard.visible=!1,this.ana.group.visible=!1,this.ana.isWalking=!1,this.ana.targetArmRaise=0,this.ana.nfcCard.visible=!1,this.resetGeofences(),this.setNfcState("idle","En espera · Lector NFC activo")}resetGeofences(){this.geofences.stop1.activeColor.copy(this.geofences.stop1.baseColor),this.geofences.stop1.pulseBoost=0,this.geofences.stop1.flashingRed=!1,this.geofences.stop2.activeColor.copy(this.geofences.stop2.baseColor),this.geofences.stop2.pulseBoost=0,this.geofences.stop2.flashingRed=!1,this.geofences.stop3.activeColor.copy(this.geofences.stop3.baseColor),this.geofences.stop3.pulseBoost=0,this.geofences.stop3.flashingRed=!1}setLightingMode(e){this.lightingMode=e,this.targetNightFactor=e==="night"?1:0}getLightingMode(){return this.lightingMode}setCameraPreset(e){if(this.cameraPreset=e,this.cameraTransitioning=!0,e==="panoramic")this.desiredCamPos.set(0,21.5,40.5),this.desiredCamTarget.set(0,1.2,1.4);else if(e==="nfc"){const t=this.getNfcReaderWorldPosition();this.desiredCamPos.set(t.x+1.35,t.y+.95,t.z+3.4),this.desiredCamTarget.set(t.x-.35,t.y-.05,t.z-.1)}else e==="follow"&&(this.desiredCamPos.set(this.busX-8.5,8.2,13.8),this.desiredCamTarget.set(this.busX+1.5,1.7,1.4))}resetSimulation(){this.runToken++,this.positionInitialEntities(),this.callbacks.onSpeedChange(0,this.busX),this.callbacks.onDoorChange(!1),this.callbacks.onStopChange(wt.stop1.label,"SEGURA"),this.setCameraPreset("panoramic")}async runScenario(e){const t=++this.runToken,r=()=>!this.disposed&&t===this.runToken;e===1?await this.executeScenario1(r):e===2?await this.executeScenario2(r):e===3?await this.executeScenario3(r):e===4&&await this.executeScenario4(r),r()&&this.callbacks.onScenarioComplete(e)}async executeScenario1(e){if(this.resetGeofences(),this.mateo.group.visible=!1,this.ana.group.visible=!1,this.setNfcState("idle","Arribando a Parada 1 · Lector NFC listo"),this.sofia.group.visible=!0,this.sofia.badge.visible=!0,this.sofia.group.position.set(wt.stop1.x+.55,.22,4.15),this.sofia.group.rotation.y=Math.PI,this.sofia.targetArmRaise=0,this.sofia.nfcCard.visible=!1,Math.abs(this.busX-wt.stop1.busX)>.25&&(this.setDoorOpen(!1),await this.sleep(350,e),!e()||(await this.driveBusTo(wt.stop1.busX,e),!e()))||(this.callbacks.onStopChange(wt.stop1.label,"SEGURA"),this.setDoorOpen(!0),await this.sleep(620,e),!e()))return;const t=wt.stop1.busX+3.16;await this.walkCharacterTo(this.sofia,new z(t-.15,.22,2.95),950,e),e()&&(this.sofia.group.rotation.y=Math.PI,this.sofia.nfcCard.visible=!0,this.sofia.targetArmRaise=1,await this.sleep(360,e),e()&&(this.setNfcState("safe","Lectura NFC válida · Sofía M. abordando"),this.geofences.stop1.pulseBoost=1,this.triggerShockwaveBurst("#10B981",3,!1),this.callbacks.onScenarioEvent({type:"sc1_boarded"}),await this.sleep(820,e),e()&&(this.sofia.targetArmRaise=0,this.sofia.nfcCard.visible=!1,await this.walkCharacterTo(this.sofia,new z(wt.stop1.busX+2.25,.45,2.05),650,e),e()&&(this.sofia.group.visible=!1,this.setDoorOpen(!1),await this.sleep(550,e),e()&&this.setNfcState("idle","Abordaje confirmado · En ruta segura")))))}async executeScenario2(e){if(this.resetGeofences(),this.mateo.group.visible=!1,this.ana.group.visible=!1,this.sofia.group.visible=!1,this.tutor.group.visible=!0,this.tutor.badge.visible=!0,this.tutor.group.position.set(wt.stop2.x+1.25,.22,4.15),this.tutor.group.rotation.y=Math.PI,this.tutor.targetArmRaise=0,this.tutor.nfcCard.visible=!1,this.setDoorOpen(!1),this.setNfcState("idle","En tránsito hacia Parada 2 (Destino)"),await this.sleep(300,e),!e()||(await this.driveBusTo(wt.stop2.busX,e),!e())||(this.callbacks.onStopChange(wt.stop2.label,"SEGURA"),this.setDoorOpen(!0),await this.sleep(620,e),!e()))return;const t=wt.stop2.busX+2.25,r=wt.stop2.busX+3.16;this.sofia.group.visible=!0,this.sofia.badge.visible=!0,this.sofia.group.position.set(t,.45,2.05),await this.walkCharacterTo(this.sofia,new z(t+.35,.22,2.98),650,e),e()&&(this.sofia.group.rotation.y=Math.PI,this.sofia.nfcCard.visible=!0,this.sofia.targetArmRaise=1,await this.sleep(280,e),e()&&(this.setNfcState("safe","Salida NFC Sofía M. · Esperando NFC Tutor..."),this.triggerShockwaveBurst("#38BDF8",2,!1),await this.sleep(420,e),e()&&(this.sofia.targetArmRaise=0,this.sofia.nfcCard.visible=!1,await this.walkCharacterTo(this.tutor,new z(r+.05,.22,2.95),720,e),e()&&(this.tutor.group.rotation.y=Math.PI,this.tutor.nfcCard.visible=!0,this.tutor.targetArmRaise=1,await this.sleep(320,e),e()&&(this.setNfcState("safe","Tutor Verificado · Entrega Confirmada NFC"),this.geofences.stop2.activeColor.set("#10B981"),this.geofences.stop2.pulseBoost=1.25,this.triggerShockwaveBurst("#10B981",3,!1),this.callbacks.onScenarioEvent({type:"sc2_tutor_verified"}),await this.sleep(820,e),e()&&(this.tutor.targetArmRaise=0,this.tutor.nfcCard.visible=!1,await Promise.all([this.walkCharacterTo(this.sofia,new z(wt.stop2.x-1.45,.22,4.35),900,e),this.walkCharacterTo(this.tutor,new z(wt.stop2.x+.65,.22,4.35),900,e)]),e()&&(this.setDoorOpen(!1),await this.sleep(450,e))))))))}async executeScenario3(e){if(this.resetGeofences(),this.ana.group.visible=!1,this.mateo.group.visible=!1,this.setDoorOpen(!1),this.setNfcState("idle","Desvío detectado · Aproximando a Parada 3"),await this.sleep(280,e),!e()||(await this.driveBusTo(wt.stop3.busX,e),!e())||(this.callbacks.onStopChange(wt.stop3.label,"RIESGO"),this.setDoorOpen(!0),await this.sleep(580,e),!e()))return;const t=wt.stop3.busX+2.25;this.mateo.group.visible=!0,this.mateo.badge.visible=!0,this.mateo.group.position.set(t,.45,2.05),await this.walkCharacterTo(this.mateo,new z(t+.52,.22,2.86),720,e),e()&&(this.mateo.group.rotation.y=Math.PI,this.mateo.nfcCard.visible=!0,this.mateo.targetArmRaise=1,await this.sleep(320,e),e()&&(this.setNfcState("alert","¡ALERTA! Descenso fuera de geocerca autorizada"),this.geofences.stop3.flashingRed=!0,this.geofences.stop3.pulseBoost=1.4,this.triggerShockwaveBurst("#EF4444",3,!1),this.callbacks.onScenarioEvent({type:"sc3_unauthorized_alert"}),await this.sleep(900,e),e()&&this.triggerShockwaveBurst("#EF4444",2,!1)))}async executeScenario4(e){this.resetGeofences(),this.mateo.group.visible=!1,this.setLightingMode("night"),this.setDoorOpen(!1),this.setNfcState("idle","Turno Nocturno activo · Monitoreo continuo");const t=4.2;Math.abs(this.busX-t)>.6&&(await this.driveBusTo(t,e),!e())||(this.callbacks.onStopChange("Tramo Nocturno · Av. Norte (Entre P2 y P3)","EN RUTA"),this.ana.group.visible=!0,this.ana.badge.visible=!0,this.ana.group.position.set(this.busX+2.65,.76,1.72),this.ana.group.rotation.y=.35,this.ana.nfcCard.visible=!0,this.ana.nfcCardMat.emissive.set("#D946EF"),this.ana.targetArmRaise=.88,await this.sleep(320,e),e()&&(this.triggerShockwaveBurst("#D946EF",1,!0),this.ana.targetArmRaise=.32,await this.sleep(340,e),e()&&(this.ana.targetArmRaise=.92,await this.sleep(300,e),e()&&(this.setNfcState("silent","Pulso discreto NFC · Sin alerta sonora en cabina"),this.triggerShockwaveBurst("#F59E0B",1,!0),this.callbacks.onScenarioEvent({type:"sc4_silent_violet"}),await this.sleep(650,e),e()&&(this.ana.targetArmRaise=0,this.ana.nfcCard.visible=!1)))))}driveBusTo(e,t){return new Promise(r=>{const o=this.busX,l=Math.abs(e-o);if(l<.05){this.callbacks.onSpeedChange(0,this.busX),r();return}const u=Math.max(1500,Math.min(3400,l*135)),h=performance.now();this.isBraking=!1,this.callbacks.onStopChange("En ruta · Corredor Pulso NFC","EN RUTA");const f=()=>{if(!t()){this.isBraking=!0,this.callbacks.onSpeedChange(0,this.busX),r();return}const p=performance.now(),g=Math.min(1,(p-h)/u),y=g<.5?4*g*g*g:1-Math.pow(-2*g+2,3)/2,_=this.busX;this.busX=o+(e-o)*y,this.busGroup.position.x=this.busX;const S=Math.sin(g*Math.PI),M=Math.round(S*(36+Math.min(8,l*.25)));if(this.isBraking=g>.78,this.callbacks.onSpeedChange(M,this.busX),this.cameraPreset==="follow"||this.cameraPreset==="nfc"){const w=this.busX-_;this.camera.position.x+=w,this.controls.target.x+=w,this.desiredCamPos.x+=w,this.desiredCamTarget.x+=w}g<1?requestAnimationFrame(f):(this.busX=e,this.busGroup.position.x=e,this.isBraking=!0,this.callbacks.onSpeedChange(0,this.busX),r())};requestAnimationFrame(f)})}walkCharacterTo(e,t,r,o){return new Promise(l=>{const u=e.group.position.clone(),h=performance.now();e.isWalking=!0;const f=t.x-u.x,p=t.z-u.z;Math.hypot(f,p)>.05&&(e.group.rotation.y=Math.atan2(f,p));const g=()=>{if(!o()){e.isWalking=!1,l();return}const y=Math.min(1,(performance.now()-h)/r),_=y<.5?2*y*y:1-Math.pow(-2*y+2,2)/2;e.group.position.lerpVectors(u,t,_),y<1?requestAnimationFrame(g):(e.group.position.copy(t),e.isWalking=!1,l())};requestAnimationFrame(g)})}sleep(e,t){return new Promise(r=>{const o=window.setTimeout(()=>{r()},e);t()||(window.clearTimeout(o),r())})}setDoorOpen(e){this.targetDoorOpen=e?1:0,this.callbacks.onDoorChange(e)}setNfcState(e,t){this.nfcState=e,this.callbacks.onNfcStateChange(e,t)}triggerShockwaveBurst(e,t,r){let o=0;for(let l=0;l<this.shockwaves.length&&o<t;l++){const u=this.shockwaves[l];u.active||(u.active=!0,u.age=-o*.16,u.maxAge=r?.65:.95,u.maxScale=r?2.1:4.6,u.subtle=r,u.material.color.set(e),u.material.opacity=0,u.mesh.scale.set(1,1,1),u.mesh.position.z=.14,u.mesh.visible=!0,o++)}}getNfcReaderWorldPosition(){const e=new z;return this.busGroup.updateMatrixWorld(!0),this.nfcReaderWorldAnchor.getWorldPosition(e),e}applyLightingBlend(e){const t=this.skyDayColor.clone().lerp(this.skyNightColor,e);this.scene.background=t,this.scene.fog instanceof uc&&(this.scene.fog.color.copy(this.fogDayColor).lerp(this.fogNightColor,e),this.scene.fog.density=ti.lerp(.0052,.0155,e)),this.hemiLight.intensity=ti.lerp(1.65,.22,e),this.hemiLight.color.set("#E0F2FE").lerp(new Ge("#334155"),e),this.hemiLight.groundColor.set("#475569").lerp(new Ge("#090D16"),e),this.sunLight.intensity=ti.lerp(2.65,.2,e),this.sunLight.color.set("#FFFDF2").lerp(new Ge("#64748B"),e),this.fillLight.intensity=ti.lerp(.65,.12,e);const r=this.starsPoints.material;r.opacity=e*.9,this.streetLights.forEach(o=>{o.pointLight.intensity=e*12.5,o.bulbMat.emissiveIntensity=.1+e*3,o.coneMat.opacity=e*.11}),this.buildingWindowMats.forEach(o=>{o.emissiveIntensity=.02+e*1.05}),this.shelterLightMats.forEach(o=>{o.emissiveIntensity=.45+e*1.65}),this.headlightCones.forEach(o=>{o.opacity=e*.17}),this.headlightSpots.forEach(o=>{o.intensity=e*28}),this.headlightBulbMats.forEach(o=>{o.emissiveIntensity=.4+e*3}),this.cabinLight.intensity=.6+e*2.8}updateNfcVisuals(e){const t=this.elapsedTotal;if(this.nfcState==="idle"){const r=.65+Math.sin(t*2.4)*.35;this.nfcHaloMat.color.set("#38BDF8"),this.nfcHaloMat.emissive.set("#38BDF8"),this.nfcHaloMat.emissiveIntensity=1.4+r*.8,this.nfcHaloLight.color.set("#38BDF8"),this.nfcHaloLight.intensity=1.6+r*1}else if(this.nfcState==="safe"){const r=.5+Math.sin(t*6)*.5;this.nfcHaloMat.color.set("#10B981"),this.nfcHaloMat.emissive.set("#34D399"),this.nfcHaloMat.emissiveIntensity=2.4+r*1.6,this.nfcHaloLight.color.set("#10B981"),this.nfcHaloLight.intensity=3.8+r*2.2}else if(this.nfcState==="alert"){const r=Math.sin(t*16)>0?1:.15;this.nfcHaloMat.color.set("#EF4444"),this.nfcHaloMat.emissive.set("#FF2442"),this.nfcHaloMat.emissiveIntensity=.5+r*4.5,this.nfcHaloLight.color.set("#EF4444"),this.nfcHaloLight.intensity=1+r*6.5}else if(this.nfcState==="silent"){const r=.5+Math.sin(t*2.8)*.5,o=new Ge("#F59E0B").lerp(new Ge("#D946EF"),r);this.nfcHaloMat.color.copy(o),this.nfcHaloMat.emissive.copy(o),this.nfcHaloMat.emissiveIntensity=.85+r*.75,this.nfcHaloLight.color.copy(o),this.nfcHaloLight.intensity=.9+r*.65}this.shockwaves.forEach(r=>{if(!r.active||(r.age+=e,r.age<0))return;const o=r.age/r.maxAge;if(o>=1){r.active=!1,r.mesh.visible=!1;return}const l=1-Math.pow(1-o,2.2),u=1+l*(r.maxScale-1);r.mesh.scale.set(u,u,1),r.mesh.position.z=.14+l*(r.subtle?.45:1.15),r.material.opacity=(1-o)*(r.subtle?.55:.92)})}updateGeofences(e){const t=this.elapsedTotal;[this.geofences.stop1,this.geofences.stop2,this.geofences.stop3].forEach((o,l)=>{if(o.outerRing.rotation.z+=e*(l===2?-.9:.55),o.pulseBoost>0&&(o.pulseBoost=Math.max(0,o.pulseBoost-e*.42)),o.flashingRed){const u=.5+Math.sin(t*14)*.5;o.ringMat.color.set("#FF2442"),o.discMat.color.set("#EF4444"),o.outerMat.color.set("#FF2442"),o.beamMat.color.set("#EF4444"),o.ringMat.opacity=.55+u*.45,o.discMat.opacity=.18+u*.3,o.beamMat.opacity=.12+u*.28;const h=1+u*.06;o.ringMesh.scale.set(h,h,1)}else{const u=.5+Math.sin(t*2.2+l*1.3)*.5;o.ringMat.color.lerp(o.activeColor,Math.min(1,e*6)),o.discMat.color.lerp(o.activeColor,Math.min(1,e*6)),o.outerMat.color.lerp(o.activeColor,Math.min(1,e*6)),o.beamMat.color.lerp(o.activeColor,Math.min(1,e*6)),o.ringMat.opacity=Math.min(1,.72+u*.18+o.pulseBoost*.25),o.discMat.opacity=Math.min(.48,.11+u*.05+o.pulseBoost*.22),o.beamMat.opacity=Math.min(.35,.07+u*.04+o.pulseBoost*.18);const h=1+o.pulseBoost*.07;o.ringMesh.scale.set(h,h,1)}})}updateCharacterRig(e,t){if(e.group.visible){if(e.isWalking){e.walkPhase+=t*10.5;const r=Math.sin(e.walkPhase)*.55;e.leftLeg.rotation.x=r,e.rightLeg.rotation.x=-r,e.leftArm.rotation.x=-r*.65,e.targetArmRaise<.1&&(e.rightArm.rotation.x=r*.65)}else e.leftLeg.rotation.x=ti.lerp(e.leftLeg.rotation.x,0,t*8),e.rightLeg.rotation.x=ti.lerp(e.rightLeg.rotation.x,0,t*8),e.leftArm.rotation.x=ti.lerp(e.leftArm.rotation.x,0,t*8);e.armRaise=ti.lerp(e.armRaise,e.targetArmRaise,Math.min(1,t*10)),e.armRaise>.01?e.rightArm.rotation.x=-e.armRaise*1.35:e.isWalking||(e.rightArm.rotation.x=ti.lerp(e.rightArm.rotation.x,0,t*8))}}dispose(){this.disposed=!0,cancelAnimationFrame(this.rafId),this.resizeObserver.disconnect(),this.controls.dispose(),this.renderer.dispose(),this.renderer.domElement.parentElement===this.container&&this.container.removeChild(this.renderer.domElement)}}const Ww=({lightingMode:s,onToggleLighting:e,cameraPreset:t,onSelectCamera:r,muted:o,onToggleMute:l,telemetry:u,activeAlert:h,engineCallbacks:f,onEngineReady:p})=>{const g=Dt.useRef(null),y=Dt.useRef(f);return y.current=f,Dt.useEffect(()=>{if(!g.current)return;const _={onSpeedChange:(M,w)=>y.current.onSpeedChange(M,w),onNfcStateChange:(M,w)=>y.current.onNfcStateChange(M,w),onDoorChange:M=>y.current.onDoorChange(M),onStopChange:(M,w)=>y.current.onStopChange(M,w),onScenarioEvent:M=>y.current.onScenarioEvent(M),onScenarioComplete:M=>y.current.onScenarioComplete(M)},S=new Gw(g.current,_,s);return p(S),()=>{p(null),S.dispose()}},[]),H.jsxs("section",{className:"zone-scene","aria-label":"Gemelo Digital 3D Ruta Pulso NFC",children:[H.jsx("div",{ref:g,className:"canvas-mount"}),H.jsxs("div",{className:"hud-overlay",children:[H.jsxs("div",{className:"hud-row",children:[H.jsxs("div",{className:"hud-glass brand-card",children:[H.jsx("div",{className:"brand-icon",children:H.jsx(Wg,{size:18})}),H.jsxs("div",{children:[H.jsxs("div",{className:"brand-title",children:[H.jsx("span",{children:"RUTA PULSO NFC"}),H.jsxs("span",{className:"live-pill",children:[H.jsx("span",{className:"pulse-dot"}),"GEMELO DIGITAL 3D"]})]}),H.jsx("div",{className:"brand-sub",children:"Transporte Escolar y Laboral Nocturno · Perspectiva de Género"})]})]}),H.jsxs("div",{className:"scene-controls",children:[H.jsxs("div",{className:"hud-glass control-strip",children:[H.jsxs("button",{type:"button",className:`hud-btn ${s==="night"?"night-active":"day-active"}`,onClick:e,title:"Alternar entre Modo Día y Modo Turno Nocturno",children:[s==="night"?H.jsx(Dv,{size:13}):H.jsx(zv,{size:13}),H.jsx("span",{children:s==="night"?"Modo Turno Nocturno":"Modo Día"})]}),H.jsxs("button",{type:"button",className:"hud-btn",onClick:l,title:o?"Activar sonido NFC":"Silenciar sonido NFC",children:[o?H.jsx(Wv,{size:13}):H.jsx(Gv,{size:13}),H.jsx("span",{children:o?"Silenciado":"Audio"})]})]}),H.jsxs("div",{className:"hud-glass control-strip",children:[H.jsxs("button",{type:"button",className:`hud-btn ${t==="panoramic"?"active":""}`,onClick:()=>r("panoramic"),children:[H.jsx(Lv,{size:13}),H.jsx("span",{children:"Vista Panorámica"})]}),H.jsxs("button",{type:"button",className:`hud-btn ${t==="nfc"?"active":""}`,onClick:()=>r("nfc"),children:[H.jsx(ac,{size:13}),H.jsx("span",{children:"Zoom al Lector NFC"})]}),H.jsxs("button",{type:"button",className:`hud-btn ${t==="follow"?"active":""}`,onClick:()=>r("follow"),children:[H.jsx(Cv,{size:13}),H.jsx("span",{children:"Seguir Autobús"})]})]})]})]}),H.jsxs("div",{className:"hud-bottom-bar",children:[H.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"7px",alignItems:"flex-start"},children:[(h==null?void 0:h.type)==="violet"&&H.jsxs("div",{className:"cabin-silent-note",children:[H.jsx(ao,{size:14,color:"#E879F9"}),H.jsxs("span",{children:["En cabina 3D: ",H.jsx("strong",{children:"SIN sirena ni luces escandalosas"})," · Protección activa a la pasajera"]})]}),H.jsxs("div",{className:`hud-glass nfc-status-pill state-${u.nfcState}`,children:[u.nfcState==="alert"?H.jsx(ao,{size:15}):u.nfcState==="safe"?H.jsx(Fv,{size:15}):H.jsx(ac,{size:15}),H.jsxs("span",{children:[H.jsx("strong",{children:"Lector NFC 3D:"})," ",u.nfcStatusText]})]})]}),H.jsxs("div",{className:"hud-glass orbit-hint",children:[H.jsxs("span",{className:"legend-dot",children:[H.jsx("i",{style:{background:"#10B981"}})," P1 Abordaje"]}),H.jsxs("span",{className:"legend-dot",children:[H.jsx("i",{style:{background:"#38BDF8"}})," P2 Destino"]}),H.jsxs("span",{className:"legend-dot",children:[H.jsx("i",{style:{background:"#EF4444"}})," P3 Riesgo"]}),H.jsx("span",{style:{opacity:.4},children:"|"}),H.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[H.jsx(Rv,{size:11})," Arrastra para rotar · Rueda para zoom"]})]})]})]})]})};class Xw{constructor(){qe(this,"ctx",null);qe(this,"muted",!1)}setMuted(e){this.muted=e}isMuted(){return this.muted}getContext(){if(this.muted||typeof window>"u")return null;try{if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;this.ctx=new e}return this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}catch{return null}}playSafeNfc(){const e=this.getContext();if(!e)return;const t=e.currentTime;this.tone(e,880,t,.11,.08,"sine"),this.tone(e,1318.5,t+.09,.18,.09,"triangle")}playTutorVerified(){const e=this.getContext();if(!e)return;const t=e.currentTime;this.tone(e,783.99,t,.1,.07,"sine"),this.tone(e,1046.5,t+.09,.12,.08,"sine"),this.tone(e,1567.98,t+.19,.24,.09,"triangle")}playUnauthorizedAlert(){const e=this.getContext();if(!e)return;const t=e.currentTime;for(let r=0;r<3;r++){const o=t+r*.22;this.tone(e,720,o,.09,.1,"sawtooth"),this.tone(e,540,o+.09,.09,.09,"sawtooth")}}playSilentProtocol(){}tone(e,t,r,o,l,u){const h=e.createOscillator(),f=e.createGain();h.type=u,h.frequency.setValueAtTime(t,r),f.gain.setValueAtTime(1e-4,r),f.gain.exponentialRampToValueAtTime(l,r+.015),f.gain.exponentialRampToValueAtTime(1e-4,r+o),h.connect(f),f.connect(e.destination),h.start(r),h.stop(r+o+.02)}}const ua=new Xw,kg=[{id:"sofia",name:"Sofía M.",role:"Escolar",tagId:"NFC-ESC-104",status:"Esperando",assignedStop:"Parada 2 · Destino"},{id:"mateo",name:"Mateo R.",role:"Escolar",tagId:"NFC-ESC-208",status:"A bordo",assignedStop:"Parada 2 · Destino"},{id:"ana",name:"Ana L.",role:"Turno Nocturno",tagId:"NFC-NOC-419",status:"A bordo",assignedStop:"Parada 2 · Parque Ind."}],Bg=[{id:"init-1",timestamp:"07:05 AM",tagId:"SYS-U04",passengerName:"Unidad 04 · Ruta Norte",stopName:"Parada 1 · Escuela / Residencial",event:"Lector NFC 3D y geocercas sincronizadas en línea.",severity:"info"}],zg=[{id:"notif-init",timestamp:"07:05 AM",title:"Unidad 04 en aproximación",body:"La unidad escolar y laboral RUTA PULSO NFC llegó a Parada 1 (Escuela / Residencial). Lector NFC listo.",recipientLabel:"Familia Morales · Contacto",variant:"info",badge:"Sistema Activo"}],Hg={unitId:"U-04",routeName:"Corredor Norte Seguro",speedKmh:0,currentStopLabel:wt.stop1.label,geofenceStatus:"SEGURA",securityLevel:"ÓPTIMO",nfcState:"idle",nfcStatusText:"En espera · Lector NFC activo",doorOpen:!1,busProgress:0,coordinates:{lat:19.4326,lng:-99.1332}};let jw=1;const Nr=s=>`${s}-${Date.now()}-${jw++}`,Yw=()=>{const s=Dt.useRef(null),[e,t]=Dt.useState("day"),[r,o]=Dt.useState("panoramic"),[l,u]=Dt.useState(!1),[h,f]=Dt.useState(Hg),[p,g]=Dt.useState(kg),[y,_]=Dt.useState(Bg),[S,M]=Dt.useState(zg),[w,x]=Dt.useState(null),[v,L]=Dt.useState(null),[P,T]=Dt.useState(null),G=Dt.useCallback(j=>{s.current=j},[]),F=Dt.useCallback(()=>{t(j=>{var re;const X=j==="day"?"night":"day";return(re=s.current)==null||re.setLightingMode(X),X})},[]),U=Dt.useCallback(j=>{var X;o(j),(X=s.current)==null||X.setCameraPreset(j)},[]),O=Dt.useCallback(()=>{u(j=>{const X=!j;return ua.setMuted(X),X})},[]),b=Dt.useCallback(j=>{j.type==="sc1_boarded"?(ua.playSafeNfc(),x(null),f(X=>({...X,geofenceStatus:"SEGURA",securityLevel:"ÓPTIMO"})),g(X=>X.map(re=>re.id==="sofia"?{...re,status:"A bordo"}:re)),_(X=>[{id:Nr("log"),timestamp:"07:12 AM",tagId:"NFC-ESC-104",passengerName:"Sofía M. (Escolar)",stopName:"Parada 1 · Escuela / Residencial",event:"Abordaje NFC validado dentro de geocerca autorizada.",severity:"safe"},...X]),M(X=>[{id:Nr("push"),timestamp:"07:12 AM",title:"Abordaje Seguro Confirmado",body:"Sofía abordó la Unidad 04 en Parada 1 (07:12 AM) - En ruta.",recipientLabel:"Mamá de Sofía · Familiar",variant:"safe",badge:"NFC Verificado"},...X])):j.type==="sc2_tutor_verified"?(ua.playTutorVerified(),x(null),f(X=>({...X,geofenceStatus:"SEGURA",securityLevel:"ÓPTIMO"})),g(X=>X.map(re=>re.id==="sofia"?{...re,status:"Entregado"}:re)),_(X=>[{id:Nr("log"),timestamp:"07:38 AM",tagId:"NFC-TUT-882",passengerName:"Sofía M. + Tutor Carlos M.",stopName:"Parada 2 · Parque Industrial / Destino",event:"Doble validación NFC (alumna + tutor autorizado). Entrega segura.",severity:"safe"},...X]),M(X=>[{id:Nr("push"),timestamp:"07:38 AM",title:"Entrega Confirmada con Tutor",body:"Entrega confirmada: Sofía descendió en Parada Autorizada con Tutor Verificado (Carlos M.).",recipientLabel:"Mamá de Sofía · Familiar",variant:"safe",badge:"Tutor Verificado ✓"},...X])):j.type==="sc3_unauthorized_alert"?(ua.playUnauthorizedAlert(),f(X=>({...X,geofenceStatus:"RIESGO",securityLevel:"ALERTA CRÍTICA"})),g(X=>X.map(re=>re.id==="mateo"?{...re,status:"Alerta"}:re)),x({type:"unauthorized",title:"¡ALERTA! Descenso fuera de zona autorizada",subtitle:"Aviso crítico en cabina de chofer y centro de monitoreo",details:"Mateo R. (NFC-ESC-208) intentó descender en Parada 3 (Zona Aislada) fuera de su geocerca asignada. Puerta en retención preventiva.",cabinAudioState:"Alerta sonora enviada al operador",timestamp:"07:51 AM"}),_(X=>[{id:Nr("log"),timestamp:"07:51 AM",tagId:"NFC-ESC-208",passengerName:"Mateo R. (Escolar)",stopName:"Parada 3 · Zona Aislada",event:"¡ALERTA CRÍTICA! Intento de descenso fuera de geocerca autorizada.",severity:"danger"},...X]),M(X=>[{id:Nr("push"),timestamp:"07:51 AM",title:"¡ALERTA! Descenso fuera de zona autorizada",body:"Mateo R. registró lectura NFC en Parada 3 (Zona Aislada / Riesgo). El chofer y monitoreo ya fueron alertados.",recipientLabel:"Papá de Mateo · Urgente",variant:"danger",badge:"Alerta Crítica",gpsCoords:"19.4402° N, 99.1248° O",actions:{callDriver:!0,viewGps:!0}},...X])):j.type==="sc4_silent_violet"&&(ua.playSilentProtocol(),f(X=>({...X,geofenceStatus:"RIESGO",securityLevel:"PROTOCOLO VIOLETA"})),g(X=>X.map(re=>re.id==="ana"?{...re,status:"Protocolo Violeta"}:re)),x({type:"violet",title:"Protocolo Violeta Activo · Prioridad Máxima",subtitle:"Alerta silenciosa de perspectiva de género",details:"Protocolo Violeta Activo - Sin alerta sonora en cabina - Grabación ambiental encriptada y GPS en vivo enviados a C4 y contactos de confianza.",cabinAudioState:"SILENCIOSO EN CABINA (Protección activa)",timestamp:"22:45 hrs"}),_(X=>[{id:Nr("log"),timestamp:"22:45 hrs",tagId:"NFC-2X-VIOLETA",passengerName:"Ana L. (Turno Nocturno)",stopName:"Tramo Nocturno · Av. Norte",event:"Doble toque discreto NFC detectado. Protocolo Violeta silencioso enviado a C4.",severity:"violet"},...X]),M(X=>[{id:Nr("push"),timestamp:"22:45 hrs",title:"ALERTA SILENCIOSA · Protocolo Violeta",body:"Ana L. activó código discreto NFC en Unidad 04 (Turno Nocturno). Sin alarma en cabina. Ubicación en vivo y audio enviados a C4.",recipientLabel:"Red de Confianza · C4",variant:"violet",badge:"Protocolo Violeta",gpsCoords:"19.4368° N, 99.1281° O",actions:{viewC4:!0,callDriver:!0}},...X]))},[]),C=Dt.useMemo(()=>({onSpeedChange:(j,X)=>{const re=Math.max(0,Math.min(1,(X-wt.stop1.busX)/27));f(ce=>({...ce,speedKmh:j,busProgress:re,coordinates:{lat:19.4326+re*.0076,lng:-99.1332+re*.0084}}))},onNfcStateChange:(j,X)=>{f(re=>({...re,nfcState:j,nfcStatusText:X}))},onDoorChange:j=>{f(X=>({...X,doorOpen:j}))},onStopChange:(j,X)=>{f(re=>({...re,currentStopLabel:j,geofenceStatus:X}))},onScenarioEvent:b,onScenarioComplete:()=>{T(null)}}),[b]),k=Dt.useCallback(j=>{var X,re;L(j),T(j),j===1?(x(null),g(ce=>ce.map(ue=>ue.id==="sofia"?{...ue,status:"Esperando"}:ue))):j===2?(x(null),g(ce=>ce.map(ue=>ue.id==="sofia"?{...ue,status:"A bordo"}:ue))):j===3?(x(null),g(ce=>ce.map(ue=>ue.id==="mateo"?{...ue,status:"A bordo"}:ue))):j===4&&(x(null),t("night"),(X=s.current)==null||X.setLightingMode("night"),g(ce=>ce.map(ue=>ue.id==="ana"?{...ue,status:"A bordo"}:ue))),(re=s.current)==null||re.runScenario(j)},[]),ne=Dt.useCallback(()=>{var j,X;L(null),T(null),x(null),t("day"),o("panoramic"),f(Hg),g(kg),_(Bg),M(zg),(j=s.current)==null||j.setLightingMode("day"),(X=s.current)==null||X.resetSimulation()},[]);return H.jsxs("main",{className:"app-shell",children:[H.jsx(Ww,{lightingMode:e,onToggleLighting:F,cameraPreset:r,onSelectCamera:U,muted:l,onToggleMute:O,telemetry:h,activeAlert:w,engineCallbacks:C,onEngineReady:G}),H.jsxs("div",{className:"zone-right-column",children:[H.jsx(qv,{telemetry:h,passengers:p,logs:y,activeScenario:v,runningScenario:P,activeAlert:w,onRunScenario:k,onReset:ne}),H.jsx($v,{notifications:S,telemetry:h,lightingMode:e})]})]})};xv.createRoot(document.getElementById("root")).render(H.jsx(fv.StrictMode,{children:H.jsx(Yw,{})}));
