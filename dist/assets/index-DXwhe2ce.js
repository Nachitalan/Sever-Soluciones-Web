(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function mc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var es={exports:{}},il={},ts={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var er=Symbol.for("react.element"),hc=Symbol.for("react.portal"),gc=Symbol.for("react.fragment"),xc=Symbol.for("react.strict_mode"),vc=Symbol.for("react.profiler"),yc=Symbol.for("react.provider"),_c=Symbol.for("react.context"),wc=Symbol.for("react.forward_ref"),kc=Symbol.for("react.suspense"),jc=Symbol.for("react.memo"),Sc=Symbol.for("react.lazy"),Wi=Symbol.iterator;function Nc(e){return e===null||typeof e!="object"?null:(e=Wi&&e[Wi]||e["@@iterator"],typeof e=="function"?e:null)}var ns={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rs=Object.assign,ls={};function sn(e,t,n){this.props=e,this.context=t,this.refs=ls,this.updater=n||ns}sn.prototype.isReactComponent={};sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function os(){}os.prototype=sn.prototype;function Ko(e,t,n){this.props=e,this.context=t,this.refs=ls,this.updater=n||ns}var Xo=Ko.prototype=new os;Xo.constructor=Ko;rs(Xo,sn.prototype);Xo.isPureReactComponent=!0;var Hi=Array.isArray,is=Object.prototype.hasOwnProperty,Go={current:null},as={key:!0,ref:!0,__self:!0,__source:!0};function ss(e,t,n){var r,l={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)is.call(t,r)&&!as.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:er,type:e,key:o,ref:a,props:l,_owner:Go.current}}function Cc(e,t){return{$$typeof:er,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Zo(e){return typeof e=="object"&&e!==null&&e.$$typeof===er}function bc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Qi=/\/+/g;function Nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bc(""+e.key):t.toString(36)}function Sr(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case er:case hc:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+Nl(a,0):r,Hi(l)?(n="",e!=null&&(n=e.replace(Qi,"$&/")+"/"),Sr(l,t,n,"",function(d){return d})):l!=null&&(Zo(l)&&(l=Cc(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(Qi,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",Hi(e))for(var s=0;s<e.length;s++){o=e[s];var u=r+Nl(o,s);a+=Sr(o,t,n,u,l)}else if(u=Nc(e),typeof u=="function")for(e=u.call(e),s=0;!(o=e.next()).done;)o=o.value,u=r+Nl(o,s++),a+=Sr(o,t,n,u,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ar(e,t,n){if(e==null)return e;var r=[],l=0;return Sr(e,r,"","",function(o){return t.call(n,o,l++)}),r}function Ec(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},Nr={transition:null},zc={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Nr,ReactCurrentOwner:Go};function us(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:ar,forEach:function(e,t,n){ar(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ar(e,function(){t++}),t},toArray:function(e){return ar(e,function(t){return t})||[]},only:function(e){if(!Zo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=sn;L.Fragment=gc;L.Profiler=vc;L.PureComponent=Ko;L.StrictMode=xc;L.Suspense=kc;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zc;L.act=us;L.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=rs({},e.props),l=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Go.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)is.call(t,u)&&!as.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:er,type:e.type,key:l,ref:o,props:r,_owner:a}};L.createContext=function(e){return e={$$typeof:_c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yc,_context:e},e.Consumer=e};L.createElement=ss;L.createFactory=function(e){var t=ss.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:wc,render:e}};L.isValidElement=Zo;L.lazy=function(e){return{$$typeof:Sc,_payload:{_status:-1,_result:e},_init:Ec}};L.memo=function(e,t){return{$$typeof:jc,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Nr.transition;Nr.transition={};try{e()}finally{Nr.transition=t}};L.unstable_act=us;L.useCallback=function(e,t){return ce.current.useCallback(e,t)};L.useContext=function(e){return ce.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};L.useEffect=function(e,t){return ce.current.useEffect(e,t)};L.useId=function(){return ce.current.useId()};L.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};L.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return ce.current.useMemo(e,t)};L.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};L.useRef=function(e){return ce.current.useRef(e)};L.useState=function(e){return ce.current.useState(e)};L.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};L.useTransition=function(){return ce.current.useTransition()};L.version="18.3.1";ts.exports=L;var B=ts.exports;const Lc=mc(B);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc=B,Pc=Symbol.for("react.element"),Oc=Symbol.for("react.fragment"),Ic=Object.prototype.hasOwnProperty,Ac=Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rc={key:!0,ref:!0,__self:!0,__source:!0};function cs(e,t,n){var r,l={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Ic.call(t,r)&&!Rc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Pc,type:e,key:o,ref:a,props:l,_owner:Ac.current}}il.Fragment=Oc;il.jsx=cs;il.jsxs=cs;es.exports=il;var i=es.exports,ql={},ds={exports:{}},we={},fs={exports:{}},ps={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,E){var z=S.length;S.push(E);e:for(;0<z;){var Y=z-1>>>1,J=S[Y];if(0<l(J,E))S[Y]=E,S[z]=J,z=Y;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var E=S[0],z=S.pop();if(z!==E){S[0]=z;e:for(var Y=0,J=S.length,or=J>>>1;Y<or;){var vt=2*(Y+1)-1,Sl=S[vt],yt=vt+1,ir=S[yt];if(0>l(Sl,z))yt<J&&0>l(ir,Sl)?(S[Y]=ir,S[yt]=z,Y=yt):(S[Y]=Sl,S[vt]=z,Y=vt);else if(yt<J&&0>l(ir,z))S[Y]=ir,S[yt]=z,Y=yt;else break e}}return E}function l(S,E){var z=S.sortIndex-E.sortIndex;return z!==0?z:S.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],d=[],h=1,g=null,m=3,x=!1,_=!1,w=!1,R=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(S){for(var E=n(d);E!==null;){if(E.callback===null)r(d);else if(E.startTime<=S)r(d),E.sortIndex=E.expirationTime,t(u,E);else break;E=n(d)}}function v(S){if(w=!1,p(S),!_)if(n(u)!==null)_=!0,kl(j);else{var E=n(d);E!==null&&jl(v,E.startTime-S)}}function j(S,E){_=!1,w&&(w=!1,f(b),b=-1),x=!0;var z=m;try{for(p(E),g=n(u);g!==null&&(!(g.expirationTime>E)||S&&!ze());){var Y=g.callback;if(typeof Y=="function"){g.callback=null,m=g.priorityLevel;var J=Y(g.expirationTime<=E);E=e.unstable_now(),typeof J=="function"?g.callback=J:g===n(u)&&r(u),p(E)}else r(u);g=n(u)}if(g!==null)var or=!0;else{var vt=n(d);vt!==null&&jl(v,vt.startTime-E),or=!1}return or}finally{g=null,m=z,x=!1}}var N=!1,C=null,b=-1,Q=5,P=-1;function ze(){return!(e.unstable_now()-P<Q)}function dn(){if(C!==null){var S=e.unstable_now();P=S;var E=!0;try{E=C(!0,S)}finally{E?fn():(N=!1,C=null)}}else N=!1}var fn;if(typeof c=="function")fn=function(){c(dn)};else if(typeof MessageChannel<"u"){var $i=new MessageChannel,pc=$i.port2;$i.port1.onmessage=dn,fn=function(){pc.postMessage(null)}}else fn=function(){R(dn,0)};function kl(S){C=S,N||(N=!0,fn())}function jl(S,E){b=R(function(){S(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){_||x||(_=!0,kl(j))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(S){switch(m){case 1:case 2:case 3:var E=3;break;default:E=m}var z=m;m=E;try{return S()}finally{m=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,E){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var z=m;m=S;try{return E()}finally{m=z}},e.unstable_scheduleCallback=function(S,E,z){var Y=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?Y+z:Y):z=Y,S){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=z+J,S={id:h++,callback:E,priorityLevel:S,startTime:z,expirationTime:J,sortIndex:-1},z>Y?(S.sortIndex=z,t(d,S),n(u)===null&&S===n(d)&&(w?(f(b),b=-1):w=!0,jl(v,z-Y))):(S.sortIndex=J,t(u,S),_||x||(_=!0,kl(j))),S},e.unstable_shouldYield=ze,e.unstable_wrapCallback=function(S){var E=m;return function(){var z=m;m=E;try{return S.apply(this,arguments)}finally{m=z}}}})(ps);fs.exports=ps;var Mc=fs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dc=B,_e=Mc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ms=new Set,Mn={};function Pt(e,t){en(e,t),en(e+"Capture",t)}function en(e,t){for(Mn[e]=t,e=0;e<t.length;e++)ms.add(t[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eo=Object.prototype.hasOwnProperty,Fc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yi={},Ki={};function Vc(e){return eo.call(Ki,e)?!0:eo.call(Yi,e)?!1:Fc.test(e)?Ki[e]=!0:(Yi[e]=!0,!1)}function Uc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bc(e,t,n,r){if(t===null||typeof t>"u"||Uc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,l,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Jo=/[\-:]([a-z])/g;function qo(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Jo,qo);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Jo,qo);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Jo,qo);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function ei(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bc(t,n,l,r)&&(n=null),r||l===null?Vc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ze=Dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sr=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),Mt=Symbol.for("react.fragment"),ti=Symbol.for("react.strict_mode"),to=Symbol.for("react.profiler"),hs=Symbol.for("react.provider"),gs=Symbol.for("react.context"),ni=Symbol.for("react.forward_ref"),no=Symbol.for("react.suspense"),ro=Symbol.for("react.suspense_list"),ri=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),xs=Symbol.for("react.offscreen"),Xi=Symbol.iterator;function pn(e){return e===null||typeof e!="object"?null:(e=Xi&&e[Xi]||e["@@iterator"],typeof e=="function"?e:null)}var W=Object.assign,Cl;function jn(e){if(Cl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Cl=t&&t[1]||""}return`
`+Cl+e}var bl=!1;function El(e,t){if(!e||bl)return"";bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var l=d.stack.split(`
`),o=r.stack.split(`
`),a=l.length-1,s=o.length-1;1<=a&&0<=s&&l[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(l[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||l[a]!==o[s]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{bl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?jn(e):""}function $c(e){switch(e.tag){case 5:return jn(e.type);case 16:return jn("Lazy");case 13:return jn("Suspense");case 19:return jn("SuspenseList");case 0:case 2:case 15:return e=El(e.type,!1),e;case 11:return e=El(e.type.render,!1),e;case 1:return e=El(e.type,!0),e;default:return""}}function lo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mt:return"Fragment";case Rt:return"Portal";case to:return"Profiler";case ti:return"StrictMode";case no:return"Suspense";case ro:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gs:return(e.displayName||"Context")+".Consumer";case hs:return(e._context.displayName||"Context")+".Provider";case ni:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ri:return t=e.displayName||null,t!==null?t:lo(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return lo(e(t))}catch{}}return null}function Wc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lo(t);case 8:return t===ti?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hc(e){var t=vs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ur(e){e._valueTracker||(e._valueTracker=Hc(e))}function ys(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function oo(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Gi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _s(e,t){t=t.checked,t!=null&&ei(e,"checked",t,!1)}function io(e,t){_s(e,t);var n=pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ao(e,t.type,n):t.hasOwnProperty("defaultValue")&&ao(e,t.type,pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ao(e,t,n){(t!=="number"||Rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sn=Array.isArray;function Kt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function so(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ji(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(Sn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pt(n)}}function ws(e,t){var n=pt(t.value),r=pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ks(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ks(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var cr,js=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(cr=cr||document.createElement("div"),cr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=cr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var En={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qc=["Webkit","ms","Moz","O"];Object.keys(En).forEach(function(e){Qc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),En[t]=En[e]})});function Ss(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||En.hasOwnProperty(e)&&En[e]?(""+t).trim():t+"px"}function Ns(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ss(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Yc=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function co(e,t){if(t){if(Yc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function fo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var po=null;function li(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mo=null,Xt=null,Gt=null;function ea(e){if(e=rr(e)){if(typeof mo!="function")throw Error(y(280));var t=e.stateNode;t&&(t=dl(t),mo(e.stateNode,e.type,t))}}function Cs(e){Xt?Gt?Gt.push(e):Gt=[e]:Xt=e}function bs(){if(Xt){var e=Xt,t=Gt;if(Gt=Xt=null,ea(e),t)for(e=0;e<t.length;e++)ea(t[e])}}function Es(e,t){return e(t)}function zs(){}var zl=!1;function Ls(e,t,n){if(zl)return e(t,n);zl=!0;try{return Es(e,t,n)}finally{zl=!1,(Xt!==null||Gt!==null)&&(zs(),bs())}}function Fn(e,t){var n=e.stateNode;if(n===null)return null;var r=dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var ho=!1;if(Ye)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){ho=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{ho=!1}function Kc(e,t,n,r,l,o,a,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(h){this.onError(h)}}var zn=!1,Mr=null,Dr=!1,go=null,Xc={onError:function(e){zn=!0,Mr=e}};function Gc(e,t,n,r,l,o,a,s,u){zn=!1,Mr=null,Kc.apply(Xc,arguments)}function Zc(e,t,n,r,l,o,a,s,u){if(Gc.apply(this,arguments),zn){if(zn){var d=Mr;zn=!1,Mr=null}else throw Error(y(198));Dr||(Dr=!0,go=d)}}function Ot(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ts(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ta(e){if(Ot(e)!==e)throw Error(y(188))}function Jc(e){var t=e.alternate;if(!t){if(t=Ot(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return ta(l),e;if(o===r)return ta(l),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=o;else{for(var a=!1,s=l.child;s;){if(s===n){a=!0,n=l,r=o;break}if(s===r){a=!0,r=l,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,r=l;break}if(s===r){a=!0,r=o,n=l;break}s=s.sibling}if(!a)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Ps(e){return e=Jc(e),e!==null?Os(e):null}function Os(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Os(e);if(t!==null)return t;e=e.sibling}return null}var Is=_e.unstable_scheduleCallback,na=_e.unstable_cancelCallback,qc=_e.unstable_shouldYield,ed=_e.unstable_requestPaint,K=_e.unstable_now,td=_e.unstable_getCurrentPriorityLevel,oi=_e.unstable_ImmediatePriority,As=_e.unstable_UserBlockingPriority,Fr=_e.unstable_NormalPriority,nd=_e.unstable_LowPriority,Rs=_e.unstable_IdlePriority,al=null,Ve=null;function rd(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(al,e,void 0,(e.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:id,ld=Math.log,od=Math.LN2;function id(e){return e>>>=0,e===0?32:31-(ld(e)/od|0)|0}var dr=64,fr=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~l;s!==0?r=Nn(s):(o&=a,o!==0&&(r=Nn(o)))}else a=n&~l,a!==0?r=Nn(a):o!==0&&(r=Nn(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ie(t),l=1<<n,r|=e[n],t&=~l;return r}function ad(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Ie(o),s=1<<a,u=l[a];u===-1?(!(s&n)||s&r)&&(l[a]=ad(s,t)):u<=t&&(e.expiredLanes|=s),o&=~s}}function xo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ms(){var e=dr;return dr<<=1,!(dr&4194240)&&(dr=64),e}function Ll(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ie(t),e[t]=n}function ud(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Ie(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function ii(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ie(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var A=0;function Ds(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fs,ai,Vs,Us,Bs,vo=!1,pr=[],ot=null,it=null,at=null,Vn=new Map,Un=new Map,tt=[],cd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ra(e,t){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":it=null;break;case"mouseover":case"mouseout":at=null;break;case"pointerover":case"pointerout":Vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(t.pointerId)}}function hn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=rr(t),t!==null&&ai(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function dd(e,t,n,r,l){switch(t){case"focusin":return ot=hn(ot,e,t,n,r,l),!0;case"dragenter":return it=hn(it,e,t,n,r,l),!0;case"mouseover":return at=hn(at,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Vn.set(o,hn(Vn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Un.set(o,hn(Un.get(o)||null,e,t,n,r,l)),!0}return!1}function $s(e){var t=kt(e.target);if(t!==null){var n=Ot(t);if(n!==null){if(t=n.tag,t===13){if(t=Ts(n),t!==null){e.blockedOn=t,Bs(e.priority,function(){Vs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);po=r,n.target.dispatchEvent(r),po=null}else return t=rr(n),t!==null&&ai(t),e.blockedOn=n,!1;t.shift()}return!0}function la(e,t,n){Cr(e)&&n.delete(t)}function fd(){vo=!1,ot!==null&&Cr(ot)&&(ot=null),it!==null&&Cr(it)&&(it=null),at!==null&&Cr(at)&&(at=null),Vn.forEach(la),Un.forEach(la)}function gn(e,t){e.blockedOn===t&&(e.blockedOn=null,vo||(vo=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,fd)))}function Bn(e){function t(l){return gn(l,e)}if(0<pr.length){gn(pr[0],e);for(var n=1;n<pr.length;n++){var r=pr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ot!==null&&gn(ot,e),it!==null&&gn(it,e),at!==null&&gn(at,e),Vn.forEach(t),Un.forEach(t),n=0;n<tt.length;n++)r=tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)$s(n),n.blockedOn===null&&tt.shift()}var Zt=Ze.ReactCurrentBatchConfig,Ur=!0;function pd(e,t,n,r){var l=A,o=Zt.transition;Zt.transition=null;try{A=1,si(e,t,n,r)}finally{A=l,Zt.transition=o}}function md(e,t,n,r){var l=A,o=Zt.transition;Zt.transition=null;try{A=4,si(e,t,n,r)}finally{A=l,Zt.transition=o}}function si(e,t,n,r){if(Ur){var l=yo(e,t,n,r);if(l===null)Vl(e,t,r,Br,n),ra(e,r);else if(dd(l,e,t,n,r))r.stopPropagation();else if(ra(e,r),t&4&&-1<cd.indexOf(e)){for(;l!==null;){var o=rr(l);if(o!==null&&Fs(o),o=yo(e,t,n,r),o===null&&Vl(e,t,r,Br,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Vl(e,t,r,null,n)}}var Br=null;function yo(e,t,n,r){if(Br=null,e=li(r),e=kt(e),e!==null)if(t=Ot(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ts(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Br=e,null}function Ws(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(td()){case oi:return 1;case As:return 4;case Fr:case nd:return 16;case Rs:return 536870912;default:return 16}default:return 16}}var rt=null,ui=null,br=null;function Hs(){if(br)return br;var e,t=ui,n=t.length,r,l="value"in rt?rt.value:rt.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[o-r];r++);return br=l.slice(e,1<r?1-r:void 0)}function Er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function mr(){return!0}function oa(){return!1}function ke(e){function t(n,r,l,o,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?mr:oa,this.isPropagationStopped=oa,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=mr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=mr)},persist:function(){},isPersistent:mr}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ci=ke(un),nr=W({},un,{view:0,detail:0}),hd=ke(nr),Tl,Pl,xn,sl=W({},nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:di,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xn&&(xn&&e.type==="mousemove"?(Tl=e.screenX-xn.screenX,Pl=e.screenY-xn.screenY):Pl=Tl=0,xn=e),Tl)},movementY:function(e){return"movementY"in e?e.movementY:Pl}}),ia=ke(sl),gd=W({},sl,{dataTransfer:0}),xd=ke(gd),vd=W({},nr,{relatedTarget:0}),Ol=ke(vd),yd=W({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),_d=ke(yd),wd=W({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kd=ke(wd),jd=W({},un,{data:0}),aa=ke(jd),Sd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cd[e])?!!t[e]:!1}function di(){return bd}var Ed=W({},nr,{key:function(e){if(e.key){var t=Sd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:di,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zd=ke(Ed),Ld=W({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sa=ke(Ld),Td=W({},nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:di}),Pd=ke(Td),Od=W({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Id=ke(Od),Ad=W({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rd=ke(Ad),Md=[9,13,27,32],fi=Ye&&"CompositionEvent"in window,Ln=null;Ye&&"documentMode"in document&&(Ln=document.documentMode);var Dd=Ye&&"TextEvent"in window&&!Ln,Qs=Ye&&(!fi||Ln&&8<Ln&&11>=Ln),ua=" ",ca=!1;function Ys(e,t){switch(e){case"keyup":return Md.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ks(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dt=!1;function Fd(e,t){switch(e){case"compositionend":return Ks(t);case"keypress":return t.which!==32?null:(ca=!0,ua);case"textInput":return e=t.data,e===ua&&ca?null:e;default:return null}}function Vd(e,t){if(Dt)return e==="compositionend"||!fi&&Ys(e,t)?(e=Hs(),br=ui=rt=null,Dt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qs&&t.locale!=="ko"?null:t.data;default:return null}}var Ud={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ud[e.type]:t==="textarea"}function Xs(e,t,n,r){Cs(r),t=$r(t,"onChange"),0<t.length&&(n=new ci("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tn=null,$n=null;function Bd(e){iu(e,0)}function ul(e){var t=Ut(e);if(ys(t))return e}function $d(e,t){if(e==="change")return t}var Gs=!1;if(Ye){var Il;if(Ye){var Al="oninput"in document;if(!Al){var fa=document.createElement("div");fa.setAttribute("oninput","return;"),Al=typeof fa.oninput=="function"}Il=Al}else Il=!1;Gs=Il&&(!document.documentMode||9<document.documentMode)}function pa(){Tn&&(Tn.detachEvent("onpropertychange",Zs),$n=Tn=null)}function Zs(e){if(e.propertyName==="value"&&ul($n)){var t=[];Xs(t,$n,e,li(e)),Ls(Bd,t)}}function Wd(e,t,n){e==="focusin"?(pa(),Tn=t,$n=n,Tn.attachEvent("onpropertychange",Zs)):e==="focusout"&&pa()}function Hd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul($n)}function Qd(e,t){if(e==="click")return ul(t)}function Yd(e,t){if(e==="input"||e==="change")return ul(t)}function Kd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Re=typeof Object.is=="function"?Object.is:Kd;function Wn(e,t){if(Re(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!eo.call(t,l)||!Re(e[l],t[l]))return!1}return!0}function ma(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ha(e,t){var n=ma(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ma(n)}}function Js(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Js(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qs(){for(var e=window,t=Rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function pi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xd(e){var t=qs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Js(n.ownerDocument.documentElement,n)){if(r!==null&&pi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=ha(n,o);var a=ha(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gd=Ye&&"documentMode"in document&&11>=document.documentMode,Ft=null,_o=null,Pn=null,wo=!1;function ga(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wo||Ft==null||Ft!==Rr(r)||(r=Ft,"selectionStart"in r&&pi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Pn&&Wn(Pn,r)||(Pn=r,r=$r(_o,"onSelect"),0<r.length&&(t=new ci("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ft)))}function hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vt={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionend:hr("Transition","TransitionEnd")},Rl={},eu={};Ye&&(eu=document.createElement("div").style,"AnimationEvent"in window||(delete Vt.animationend.animation,delete Vt.animationiteration.animation,delete Vt.animationstart.animation),"TransitionEvent"in window||delete Vt.transitionend.transition);function cl(e){if(Rl[e])return Rl[e];if(!Vt[e])return e;var t=Vt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in eu)return Rl[e]=t[n];return e}var tu=cl("animationend"),nu=cl("animationiteration"),ru=cl("animationstart"),lu=cl("transitionend"),ou=new Map,xa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){ou.set(e,t),Pt(t,[e])}for(var Ml=0;Ml<xa.length;Ml++){var Dl=xa[Ml],Zd=Dl.toLowerCase(),Jd=Dl[0].toUpperCase()+Dl.slice(1);ht(Zd,"on"+Jd)}ht(tu,"onAnimationEnd");ht(nu,"onAnimationIteration");ht(ru,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(lu,"onTransitionEnd");en("onMouseEnter",["mouseout","mouseover"]);en("onMouseLeave",["mouseout","mouseover"]);en("onPointerEnter",["pointerout","pointerover"]);en("onPointerLeave",["pointerout","pointerover"]);Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));function va(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zc(r,t,void 0,e),e.currentTarget=null}function iu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==o&&l.isPropagationStopped())break e;va(l,s,d),o=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,d=s.currentTarget,s=s.listener,u!==o&&l.isPropagationStopped())break e;va(l,s,d),o=u}}}if(Dr)throw e=go,Dr=!1,go=null,e}function D(e,t){var n=t[Co];n===void 0&&(n=t[Co]=new Set);var r=e+"__bubble";n.has(r)||(au(t,e,2,!1),n.add(r))}function Fl(e,t,n){var r=0;t&&(r|=4),au(n,e,r,t)}var gr="_reactListening"+Math.random().toString(36).slice(2);function Hn(e){if(!e[gr]){e[gr]=!0,ms.forEach(function(n){n!=="selectionchange"&&(qd.has(n)||Fl(n,!1,e),Fl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gr]||(t[gr]=!0,Fl("selectionchange",!1,t))}}function au(e,t,n,r){switch(Ws(t)){case 1:var l=pd;break;case 4:l=md;break;default:l=si}n=l.bind(null,t,n,e),l=void 0,!ho||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Vl(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;s!==null;){if(a=kt(s),a===null)return;if(u=a.tag,u===5||u===6){r=o=a;continue e}s=s.parentNode}}r=r.return}Ls(function(){var d=o,h=li(n),g=[];e:{var m=ou.get(e);if(m!==void 0){var x=ci,_=e;switch(e){case"keypress":if(Er(n)===0)break e;case"keydown":case"keyup":x=zd;break;case"focusin":_="focus",x=Ol;break;case"focusout":_="blur",x=Ol;break;case"beforeblur":case"afterblur":x=Ol;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ia;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=xd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Pd;break;case tu:case nu:case ru:x=_d;break;case lu:x=Id;break;case"scroll":x=hd;break;case"wheel":x=Rd;break;case"copy":case"cut":case"paste":x=kd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=sa}var w=(t&4)!==0,R=!w&&e==="scroll",f=w?m!==null?m+"Capture":null:m;w=[];for(var c=d,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Fn(c,f),v!=null&&w.push(Qn(c,v,p)))),R)break;c=c.return}0<w.length&&(m=new x(m,_,null,n,h),g.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==po&&(_=n.relatedTarget||n.fromElement)&&(kt(_)||_[Ke]))break e;if((x||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,x?(_=n.relatedTarget||n.toElement,x=d,_=_?kt(_):null,_!==null&&(R=Ot(_),_!==R||_.tag!==5&&_.tag!==6)&&(_=null)):(x=null,_=d),x!==_)){if(w=ia,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=sa,v="onPointerLeave",f="onPointerEnter",c="pointer"),R=x==null?m:Ut(x),p=_==null?m:Ut(_),m=new w(v,c+"leave",x,n,h),m.target=R,m.relatedTarget=p,v=null,kt(h)===d&&(w=new w(f,c+"enter",_,n,h),w.target=p,w.relatedTarget=R,v=w),R=v,x&&_)t:{for(w=x,f=_,c=0,p=w;p;p=It(p))c++;for(p=0,v=f;v;v=It(v))p++;for(;0<c-p;)w=It(w),c--;for(;0<p-c;)f=It(f),p--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break t;w=It(w),f=It(f)}w=null}else w=null;x!==null&&ya(g,m,x,w,!1),_!==null&&R!==null&&ya(g,R,_,w,!0)}}e:{if(m=d?Ut(d):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var j=$d;else if(da(m))if(Gs)j=Yd;else{j=Hd;var N=Wd}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(j=Qd);if(j&&(j=j(e,d))){Xs(g,j,n,h);break e}N&&N(e,m,d),e==="focusout"&&(N=m._wrapperState)&&N.controlled&&m.type==="number"&&ao(m,"number",m.value)}switch(N=d?Ut(d):window,e){case"focusin":(da(N)||N.contentEditable==="true")&&(Ft=N,_o=d,Pn=null);break;case"focusout":Pn=_o=Ft=null;break;case"mousedown":wo=!0;break;case"contextmenu":case"mouseup":case"dragend":wo=!1,ga(g,n,h);break;case"selectionchange":if(Gd)break;case"keydown":case"keyup":ga(g,n,h)}var C;if(fi)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Dt?Ys(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Qs&&n.locale!=="ko"&&(Dt||b!=="onCompositionStart"?b==="onCompositionEnd"&&Dt&&(C=Hs()):(rt=h,ui="value"in rt?rt.value:rt.textContent,Dt=!0)),N=$r(d,b),0<N.length&&(b=new aa(b,e,null,n,h),g.push({event:b,listeners:N}),C?b.data=C:(C=Ks(n),C!==null&&(b.data=C)))),(C=Dd?Fd(e,n):Vd(e,n))&&(d=$r(d,"onBeforeInput"),0<d.length&&(h=new aa("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:d}),h.data=C))}iu(g,t)})}function Qn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $r(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=Fn(e,n),o!=null&&r.unshift(Qn(e,o,l)),o=Fn(e,t),o!=null&&r.push(Qn(e,o,l))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ya(e,t,n,r,l){for(var o=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,l?(u=Fn(n,o),u!=null&&a.unshift(Qn(n,u,s))):l||(u=Fn(n,o),u!=null&&a.push(Qn(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var ef=/\r\n?/g,tf=/\u0000|\uFFFD/g;function _a(e){return(typeof e=="string"?e:""+e).replace(ef,`
`).replace(tf,"")}function xr(e,t,n){if(t=_a(t),_a(e)!==t&&n)throw Error(y(425))}function Wr(){}var ko=null,jo=null;function So(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var No=typeof setTimeout=="function"?setTimeout:void 0,nf=typeof clearTimeout=="function"?clearTimeout:void 0,wa=typeof Promise=="function"?Promise:void 0,rf=typeof queueMicrotask=="function"?queueMicrotask:typeof wa<"u"?function(e){return wa.resolve(null).then(e).catch(lf)}:No;function lf(e){setTimeout(function(){throw e})}function Ul(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Bn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Bn(t)}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ka(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cn=Math.random().toString(36).slice(2),Fe="__reactFiber$"+cn,Yn="__reactProps$"+cn,Ke="__reactContainer$"+cn,Co="__reactEvents$"+cn,of="__reactListeners$"+cn,af="__reactHandles$"+cn;function kt(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ka(e);e!==null;){if(n=e[Fe])return n;e=ka(e)}return t}e=n,n=e.parentNode}return null}function rr(e){return e=e[Fe]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ut(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function dl(e){return e[Yn]||null}var bo=[],Bt=-1;function gt(e){return{current:e}}function F(e){0>Bt||(e.current=bo[Bt],bo[Bt]=null,Bt--)}function M(e,t){Bt++,bo[Bt]=e.current,e.current=t}var mt={},ae=gt(mt),me=gt(!1),bt=mt;function tn(e,t){var n=e.type.contextTypes;if(!n)return mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function Hr(){F(me),F(ae)}function ja(e,t,n){if(ae.current!==mt)throw Error(y(168));M(ae,t),M(me,n)}function su(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Wc(e)||"Unknown",l));return W({},n,r)}function Qr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,bt=ae.current,M(ae,e),M(me,me.current),!0}function Sa(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=su(e,t,bt),r.__reactInternalMemoizedMergedChildContext=e,F(me),F(ae),M(ae,e)):F(me),M(me,n)}var $e=null,fl=!1,Bl=!1;function uu(e){$e===null?$e=[e]:$e.push(e)}function sf(e){fl=!0,uu(e)}function xt(){if(!Bl&&$e!==null){Bl=!0;var e=0,t=A;try{var n=$e;for(A=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}$e=null,fl=!1}catch(l){throw $e!==null&&($e=$e.slice(e+1)),Is(oi,xt),l}finally{A=t,Bl=!1}}return null}var $t=[],Wt=0,Yr=null,Kr=0,je=[],Se=0,Et=null,We=1,He="";function _t(e,t){$t[Wt++]=Kr,$t[Wt++]=Yr,Yr=e,Kr=t}function cu(e,t,n){je[Se++]=We,je[Se++]=He,je[Se++]=Et,Et=e;var r=We;e=He;var l=32-Ie(r)-1;r&=~(1<<l),n+=1;var o=32-Ie(t)+l;if(30<o){var a=l-l%5;o=(r&(1<<a)-1).toString(32),r>>=a,l-=a,We=1<<32-Ie(t)+l|n<<l|r,He=o+e}else We=1<<o|n<<l|r,He=e}function mi(e){e.return!==null&&(_t(e,1),cu(e,1,0))}function hi(e){for(;e===Yr;)Yr=$t[--Wt],$t[Wt]=null,Kr=$t[--Wt],$t[Wt]=null;for(;e===Et;)Et=je[--Se],je[Se]=null,He=je[--Se],je[Se]=null,We=je[--Se],je[Se]=null}var ye=null,ve=null,V=!1,Oe=null;function du(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Na(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,ve=st(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Et!==null?{id:We,overflow:He}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,ve=null,!0):!1;default:return!1}}function Eo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zo(e){if(V){var t=ve;if(t){var n=t;if(!Na(e,t)){if(Eo(e))throw Error(y(418));t=st(n.nextSibling);var r=ye;t&&Na(e,t)?du(r,n):(e.flags=e.flags&-4097|2,V=!1,ye=e)}}else{if(Eo(e))throw Error(y(418));e.flags=e.flags&-4097|2,V=!1,ye=e}}}function Ca(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function vr(e){if(e!==ye)return!1;if(!V)return Ca(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!So(e.type,e.memoizedProps)),t&&(t=ve)){if(Eo(e))throw fu(),Error(y(418));for(;t;)du(e,t),t=st(t.nextSibling)}if(Ca(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=st(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=ye?st(e.stateNode.nextSibling):null;return!0}function fu(){for(var e=ve;e;)e=st(e.nextSibling)}function nn(){ve=ye=null,V=!1}function gi(e){Oe===null?Oe=[e]:Oe.push(e)}var uf=Ze.ReactCurrentBatchConfig;function vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var s=l.refs;a===null?delete s[o]:s[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function yr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){var t=e._init;return t(e._payload)}function pu(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function l(f,c){return f=ft(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,v){return c===null||c.tag!==6?(c=Xl(p,f.mode,v),c.return=f,c):(c=l(c,p),c.return=f,c)}function u(f,c,p,v){var j=p.type;return j===Mt?h(f,c,p.props.children,v,p.key):c!==null&&(c.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===qe&&ba(j)===c.type)?(v=l(c,p.props),v.ref=vn(f,c,p),v.return=f,v):(v=Ar(p.type,p.key,p.props,null,f.mode,v),v.ref=vn(f,c,p),v.return=f,v)}function d(f,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Gl(p,f.mode,v),c.return=f,c):(c=l(c,p.children||[]),c.return=f,c)}function h(f,c,p,v,j){return c===null||c.tag!==7?(c=Ct(p,f.mode,v,j),c.return=f,c):(c=l(c,p),c.return=f,c)}function g(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Xl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case sr:return p=Ar(c.type,c.key,c.props,null,f.mode,p),p.ref=vn(f,null,c),p.return=f,p;case Rt:return c=Gl(c,f.mode,p),c.return=f,c;case qe:var v=c._init;return g(f,v(c._payload),p)}if(Sn(c)||pn(c))return c=Ct(c,f.mode,p,null),c.return=f,c;yr(f,c)}return null}function m(f,c,p,v){var j=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return j!==null?null:s(f,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case sr:return p.key===j?u(f,c,p,v):null;case Rt:return p.key===j?d(f,c,p,v):null;case qe:return j=p._init,m(f,c,j(p._payload),v)}if(Sn(p)||pn(p))return j!==null?null:h(f,c,p,v,null);yr(f,p)}return null}function x(f,c,p,v,j){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,s(c,f,""+v,j);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case sr:return f=f.get(v.key===null?p:v.key)||null,u(c,f,v,j);case Rt:return f=f.get(v.key===null?p:v.key)||null,d(c,f,v,j);case qe:var N=v._init;return x(f,c,p,N(v._payload),j)}if(Sn(v)||pn(v))return f=f.get(p)||null,h(c,f,v,j,null);yr(c,v)}return null}function _(f,c,p,v){for(var j=null,N=null,C=c,b=c=0,Q=null;C!==null&&b<p.length;b++){C.index>b?(Q=C,C=null):Q=C.sibling;var P=m(f,C,p[b],v);if(P===null){C===null&&(C=Q);break}e&&C&&P.alternate===null&&t(f,C),c=o(P,c,b),N===null?j=P:N.sibling=P,N=P,C=Q}if(b===p.length)return n(f,C),V&&_t(f,b),j;if(C===null){for(;b<p.length;b++)C=g(f,p[b],v),C!==null&&(c=o(C,c,b),N===null?j=C:N.sibling=C,N=C);return V&&_t(f,b),j}for(C=r(f,C);b<p.length;b++)Q=x(C,f,b,p[b],v),Q!==null&&(e&&Q.alternate!==null&&C.delete(Q.key===null?b:Q.key),c=o(Q,c,b),N===null?j=Q:N.sibling=Q,N=Q);return e&&C.forEach(function(ze){return t(f,ze)}),V&&_t(f,b),j}function w(f,c,p,v){var j=pn(p);if(typeof j!="function")throw Error(y(150));if(p=j.call(p),p==null)throw Error(y(151));for(var N=j=null,C=c,b=c=0,Q=null,P=p.next();C!==null&&!P.done;b++,P=p.next()){C.index>b?(Q=C,C=null):Q=C.sibling;var ze=m(f,C,P.value,v);if(ze===null){C===null&&(C=Q);break}e&&C&&ze.alternate===null&&t(f,C),c=o(ze,c,b),N===null?j=ze:N.sibling=ze,N=ze,C=Q}if(P.done)return n(f,C),V&&_t(f,b),j;if(C===null){for(;!P.done;b++,P=p.next())P=g(f,P.value,v),P!==null&&(c=o(P,c,b),N===null?j=P:N.sibling=P,N=P);return V&&_t(f,b),j}for(C=r(f,C);!P.done;b++,P=p.next())P=x(C,f,b,P.value,v),P!==null&&(e&&P.alternate!==null&&C.delete(P.key===null?b:P.key),c=o(P,c,b),N===null?j=P:N.sibling=P,N=P);return e&&C.forEach(function(dn){return t(f,dn)}),V&&_t(f,b),j}function R(f,c,p,v){if(typeof p=="object"&&p!==null&&p.type===Mt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case sr:e:{for(var j=p.key,N=c;N!==null;){if(N.key===j){if(j=p.type,j===Mt){if(N.tag===7){n(f,N.sibling),c=l(N,p.props.children),c.return=f,f=c;break e}}else if(N.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===qe&&ba(j)===N.type){n(f,N.sibling),c=l(N,p.props),c.ref=vn(f,N,p),c.return=f,f=c;break e}n(f,N);break}else t(f,N);N=N.sibling}p.type===Mt?(c=Ct(p.props.children,f.mode,v,p.key),c.return=f,f=c):(v=Ar(p.type,p.key,p.props,null,f.mode,v),v.ref=vn(f,c,p),v.return=f,f=v)}return a(f);case Rt:e:{for(N=p.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=l(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Gl(p,f.mode,v),c.return=f,f=c}return a(f);case qe:return N=p._init,R(f,c,N(p._payload),v)}if(Sn(p))return _(f,c,p,v);if(pn(p))return w(f,c,p,v);yr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=l(c,p),c.return=f,f=c):(n(f,c),c=Xl(p,f.mode,v),c.return=f,f=c),a(f)):n(f,c)}return R}var rn=pu(!0),mu=pu(!1),Xr=gt(null),Gr=null,Ht=null,xi=null;function vi(){xi=Ht=Gr=null}function yi(e){var t=Xr.current;F(Xr),e._currentValue=t}function Lo(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jt(e,t){Gr=e,xi=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function be(e){var t=e._currentValue;if(xi!==e)if(e={context:e,memoizedValue:t,next:null},Ht===null){if(Gr===null)throw Error(y(308));Ht=e,Gr.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return t}var jt=null;function _i(e){jt===null?jt=[e]:jt.push(e)}function hu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,_i(t)):(n.next=l.next,l.next=n),t.interleaved=n,Xe(e,r)}function Xe(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function wi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Xe(e,n)}return l=r.interleaved,l===null?(t.next=t,_i(r)):(t.next=l.next,l.next=t),r.interleaved=t,Xe(e,n)}function zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ii(e,n)}}function Ea(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zr(e,t,n,r){var l=e.updateQueue;et=!1;var o=l.firstBaseUpdate,a=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,d=u.next;u.next=null,a===null?o=d:a.next=d,a=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==a&&(s===null?h.firstBaseUpdate=d:s.next=d,h.lastBaseUpdate=u))}if(o!==null){var g=l.baseState;a=0,h=d=u=null,s=o;do{var m=s.lane,x=s.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var _=e,w=s;switch(m=t,x=n,w.tag){case 1:if(_=w.payload,typeof _=="function"){g=_.call(x,g,m);break e}g=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,m=typeof _=="function"?_.call(x,g,m):_,m==null)break e;g=W({},g,m);break e;case 2:et=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else x={eventTime:x,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(d=h=x,u=g):h=h.next=x,a|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(h===null&&(u=g),l.baseState=u,l.firstBaseUpdate=d,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Lt|=a,e.lanes=a,e.memoizedState=g}}function za(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var lr={},Ue=gt(lr),Kn=gt(lr),Xn=gt(lr);function St(e){if(e===lr)throw Error(y(174));return e}function ki(e,t){switch(M(Xn,t),M(Kn,e),M(Ue,lr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:uo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=uo(t,e)}F(Ue),M(Ue,t)}function ln(){F(Ue),F(Kn),F(Xn)}function xu(e){St(Xn.current);var t=St(Ue.current),n=uo(t,e.type);t!==n&&(M(Kn,e),M(Ue,n))}function ji(e){Kn.current===e&&(F(Ue),F(Kn))}var U=gt(0);function Jr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $l=[];function Si(){for(var e=0;e<$l.length;e++)$l[e]._workInProgressVersionPrimary=null;$l.length=0}var Lr=Ze.ReactCurrentDispatcher,Wl=Ze.ReactCurrentBatchConfig,zt=0,$=null,G=null,q=null,qr=!1,On=!1,Gn=0,cf=0;function le(){throw Error(y(321))}function Ni(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Re(e[n],t[n]))return!1;return!0}function Ci(e,t,n,r,l,o){if(zt=o,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lr.current=e===null||e.memoizedState===null?mf:hf,e=n(r,l),On){o=0;do{if(On=!1,Gn=0,25<=o)throw Error(y(301));o+=1,q=G=null,t.updateQueue=null,Lr.current=gf,e=n(r,l)}while(On)}if(Lr.current=el,t=G!==null&&G.next!==null,zt=0,q=G=$=null,qr=!1,t)throw Error(y(300));return e}function bi(){var e=Gn!==0;return Gn=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?$.memoizedState=q=e:q=q.next=e,q}function Ee(){if(G===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=q===null?$.memoizedState:q.next;if(t!==null)q=t,G=e;else{if(e===null)throw Error(y(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},q===null?$.memoizedState=q=e:q=q.next=e}return q}function Zn(e,t){return typeof t=="function"?t(e):t}function Hl(e){var t=Ee(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=G,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var a=l.next;l.next=o.next,o.next=a}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var s=a=null,u=null,d=o;do{var h=d.lane;if((zt&h)===h)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var g={lane:h,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=g,a=r):u=u.next=g,$.lanes|=h,Lt|=h}d=d.next}while(d!==null&&d!==o);u===null?a=r:u.next=s,Re(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,$.lanes|=o,Lt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ql(e){var t=Ee(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do o=e(o,a.action),a=a.next;while(a!==l);Re(o,t.memoizedState)||(pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function vu(){}function yu(e,t){var n=$,r=Ee(),l=t(),o=!Re(r.memoizedState,l);if(o&&(r.memoizedState=l,pe=!0),r=r.queue,Ei(ku.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,Jn(9,wu.bind(null,n,r,l,t),void 0,null),ee===null)throw Error(y(349));zt&30||_u(n,t,l)}return l}function _u(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wu(e,t,n,r){t.value=n,t.getSnapshot=r,ju(t)&&Su(e)}function ku(e,t,n){return n(function(){ju(t)&&Su(e)})}function ju(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Re(e,n)}catch{return!0}}function Su(e){var t=Xe(e,1);t!==null&&Ae(t,e,1,-1)}function La(e){var t=De();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zn,lastRenderedState:e},t.queue=e,e=e.dispatch=pf.bind(null,$,e),[t.memoizedState,e]}function Jn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=$.updateQueue,t===null?(t={lastEffect:null,stores:null},$.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Nu(){return Ee().memoizedState}function Tr(e,t,n,r){var l=De();$.flags|=e,l.memoizedState=Jn(1|t,n,void 0,r===void 0?null:r)}function pl(e,t,n,r){var l=Ee();r=r===void 0?null:r;var o=void 0;if(G!==null){var a=G.memoizedState;if(o=a.destroy,r!==null&&Ni(r,a.deps)){l.memoizedState=Jn(t,n,o,r);return}}$.flags|=e,l.memoizedState=Jn(1|t,n,o,r)}function Ta(e,t){return Tr(8390656,8,e,t)}function Ei(e,t){return pl(2048,8,e,t)}function Cu(e,t){return pl(4,2,e,t)}function bu(e,t){return pl(4,4,e,t)}function Eu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zu(e,t,n){return n=n!=null?n.concat([e]):null,pl(4,4,Eu.bind(null,t,e),n)}function zi(){}function Lu(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ni(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Tu(e,t){var n=Ee();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ni(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Pu(e,t,n){return zt&21?(Re(n,t)||(n=Ms(),$.lanes|=n,Lt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function df(e,t){var n=A;A=n!==0&&4>n?n:4,e(!0);var r=Wl.transition;Wl.transition={};try{e(!1),t()}finally{A=n,Wl.transition=r}}function Ou(){return Ee().memoizedState}function ff(e,t,n){var r=dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Iu(e))Au(t,n);else if(n=hu(e,t,n,r),n!==null){var l=ue();Ae(n,e,r,l),Ru(n,t,r)}}function pf(e,t,n){var r=dt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Iu(e))Au(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,s=o(a,n);if(l.hasEagerState=!0,l.eagerState=s,Re(s,a)){var u=t.interleaved;u===null?(l.next=l,_i(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=hu(e,t,l,r),n!==null&&(l=ue(),Ae(n,e,r,l),Ru(n,t,r))}}function Iu(e){var t=e.alternate;return e===$||t!==null&&t===$}function Au(e,t){On=qr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ru(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ii(e,n)}}var el={readContext:be,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},mf={readContext:be,useCallback:function(e,t){return De().memoizedState=[e,t===void 0?null:t],e},useContext:be,useEffect:Ta,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Tr(4194308,4,Eu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Tr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Tr(4,2,e,t)},useMemo:function(e,t){var n=De();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=De();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ff.bind(null,$,e),[r.memoizedState,e]},useRef:function(e){var t=De();return e={current:e},t.memoizedState=e},useState:La,useDebugValue:zi,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=La(!1),t=e[0];return e=df.bind(null,e[1]),De().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=$,l=De();if(V){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),ee===null)throw Error(y(349));zt&30||_u(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Ta(ku.bind(null,r,o,e),[e]),r.flags|=2048,Jn(9,wu.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=De(),t=ee.identifierPrefix;if(V){var n=He,r=We;n=(r&~(1<<32-Ie(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Gn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hf={readContext:be,useCallback:Lu,useContext:be,useEffect:Ei,useImperativeHandle:zu,useInsertionEffect:Cu,useLayoutEffect:bu,useMemo:Tu,useReducer:Hl,useRef:Nu,useState:function(){return Hl(Zn)},useDebugValue:zi,useDeferredValue:function(e){var t=Ee();return Pu(t,G.memoizedState,e)},useTransition:function(){var e=Hl(Zn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:vu,useSyncExternalStore:yu,useId:Ou,unstable_isNewReconciler:!1},gf={readContext:be,useCallback:Lu,useContext:be,useEffect:Ei,useImperativeHandle:zu,useInsertionEffect:Cu,useLayoutEffect:bu,useMemo:Tu,useReducer:Ql,useRef:Nu,useState:function(){return Ql(Zn)},useDebugValue:zi,useDeferredValue:function(e){var t=Ee();return G===null?t.memoizedState=e:Pu(t,G.memoizedState,e)},useTransition:function(){var e=Ql(Zn)[0],t=Ee().memoizedState;return[e,t]},useMutableSource:vu,useSyncExternalStore:yu,useId:Ou,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=W({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function To(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:W({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ml={isMounted:function(e){return(e=e._reactInternals)?Ot(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=dt(e),o=Qe(r,l);o.payload=t,n!=null&&(o.callback=n),t=ut(e,o,l),t!==null&&(Ae(t,e,l,r),zr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=dt(e),o=Qe(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=ut(e,o,l),t!==null&&(Ae(t,e,l,r),zr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=dt(e),l=Qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=ut(e,l,r),t!==null&&(Ae(t,e,r,n),zr(t,e,r))}};function Pa(e,t,n,r,l,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Wn(n,r)||!Wn(l,o):!0}function Mu(e,t,n){var r=!1,l=mt,o=t.contextType;return typeof o=="object"&&o!==null?o=be(o):(l=he(t)?bt:ae.current,r=t.contextTypes,o=(r=r!=null)?tn(e,l):mt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ml,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Oa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ml.enqueueReplaceState(t,t.state,null)}function Po(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},wi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=be(o):(o=he(t)?bt:ae.current,l.context=tn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(To(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&ml.enqueueReplaceState(l,l.state,null),Zr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function on(e,t){try{var n="",r=t;do n+=$c(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Yl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Oo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var xf=typeof WeakMap=="function"?WeakMap:Map;function Du(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){nl||(nl=!0,$o=r),Oo(e,t)},n}function Fu(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Oo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Oo(e,t),typeof r!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ia(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new xf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Tf.bind(null,e,t,n),t.then(e,e))}function Aa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ra(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var vf=Ze.ReactCurrentOwner,pe=!1;function se(e,t,n,r){t.child=e===null?mu(t,null,n,r):rn(t,e.child,n,r)}function Ma(e,t,n,r,l){n=n.render;var o=t.ref;return Jt(t,l),r=Ci(e,t,n,r,o,l),n=bi(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(V&&n&&mi(t),t.flags|=1,se(e,t,r,l),t.child)}function Da(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Mi(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Vu(e,t,o,r,l)):(e=Ar(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Wn,n(a,r)&&e.ref===t.ref)return Ge(e,t,l)}return t.flags|=1,e=ft(o,r),e.ref=t.ref,e.return=t,t.child=e}function Vu(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if(Wn(o,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Ge(e,t,l)}return Io(e,t,n,r,l)}function Uu(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(Yt,xe),xe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(Yt,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,M(Yt,xe),xe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,M(Yt,xe),xe|=r;return se(e,t,l,n),t.child}function Bu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Io(e,t,n,r,l){var o=he(n)?bt:ae.current;return o=tn(t,o),Jt(t,l),n=Ci(e,t,n,r,o,l),r=bi(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ge(e,t,l)):(V&&r&&mi(t),t.flags|=1,se(e,t,n,l),t.child)}function Fa(e,t,n,r,l){if(he(n)){var o=!0;Qr(t)}else o=!1;if(Jt(t,l),t.stateNode===null)Pr(e,t),Mu(t,n,r),Po(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=be(d):(d=he(n)?bt:ae.current,d=tn(t,d));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";g||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Oa(t,a,r,d),et=!1;var m=t.memoizedState;a.state=m,Zr(t,r,a,l),u=t.memoizedState,s!==r||m!==u||me.current||et?(typeof h=="function"&&(To(t,n,h,r),u=t.memoizedState),(s=et||Pa(t,n,s,r,m,u,d))?(g||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=d,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,gu(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Te(t.type,s),a.props=d,g=t.pendingProps,m=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=be(u):(u=he(n)?bt:ae.current,u=tn(t,u));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==g||m!==u)&&Oa(t,a,r,u),et=!1,m=t.memoizedState,a.state=m,Zr(t,r,a,l);var _=t.memoizedState;s!==g||m!==_||me.current||et?(typeof x=="function"&&(To(t,n,x,r),_=t.memoizedState),(d=et||Pa(t,n,d,r,m,_,u)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,_,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,_,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=_),a.props=r,a.state=_,a.context=u,r=d):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ao(e,t,n,r,o,l)}function Ao(e,t,n,r,l,o){Bu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&Sa(t,n,!1),Ge(e,t,o);r=t.stateNode,vf.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=rn(t,e.child,null,o),t.child=rn(t,null,s,o)):se(e,t,s,o),t.memoizedState=r.state,l&&Sa(t,n,!0),t.child}function $u(e){var t=e.stateNode;t.pendingContext?ja(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ja(e,t.context,!1),ki(e,t.containerInfo)}function Va(e,t,n,r,l){return nn(),gi(l),t.flags|=256,se(e,t,n,r),t.child}var Ro={dehydrated:null,treeContext:null,retryLane:0};function Mo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Wu(e,t,n){var r=t.pendingProps,l=U.current,o=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),M(U,l&1),e===null)return zo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=xl(a,r,0,null),e=Ct(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Mo(n),t.memoizedState=Ro,e):Li(t,a));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return yf(e,t,a,r,s,l,n);if(o){o=r.fallback,a=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ft(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?o=ft(s,o):(o=Ct(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?Mo(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Ro,r}return o=e.child,e=o.sibling,r=ft(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Li(e,t){return t=xl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _r(e,t,n,r){return r!==null&&gi(r),rn(t,e.child,null,n),e=Li(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yf(e,t,n,r,l,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Yl(Error(y(422))),_r(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=xl({mode:"visible",children:r.children},l,0,null),o=Ct(o,l,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&rn(t,e.child,null,a),t.child.memoizedState=Mo(a),t.memoizedState=Ro,o);if(!(t.mode&1))return _r(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,o=Error(y(419)),r=Yl(o,r,void 0),_r(e,t,a,r)}if(s=(a&e.childLanes)!==0,pe||s){if(r=ee,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Xe(e,l),Ae(r,e,l,-1))}return Ri(),r=Yl(Error(y(421))),_r(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Pf.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,ve=st(l.nextSibling),ye=t,V=!0,Oe=null,e!==null&&(je[Se++]=We,je[Se++]=He,je[Se++]=Et,We=e.id,He=e.overflow,Et=t),t=Li(t,r.children),t.flags|=4096,t)}function Ua(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Lo(e.return,t,n)}function Kl(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Hu(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(se(e,t,r.children,n),r=U.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ua(e,n,t);else if(e.tag===19)Ua(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(U,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Jr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Kl(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Jr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Kl(t,!0,n,null,o);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ge(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Lt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _f(e,t,n){switch(t.tag){case 3:$u(t),nn();break;case 5:xu(t);break;case 1:he(t.type)&&Qr(t);break;case 4:ki(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;M(Xr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(M(U,U.current&1),t.flags|=128,null):n&t.child.childLanes?Wu(e,t,n):(M(U,U.current&1),e=Ge(e,t,n),e!==null?e.sibling:null);M(U,U.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Hu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),M(U,U.current),r)break;return null;case 22:case 23:return t.lanes=0,Uu(e,t,n)}return Ge(e,t,n)}var Qu,Do,Yu,Ku;Qu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Do=function(){};Yu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,St(Ue.current);var o=null;switch(n){case"input":l=oo(e,l),r=oo(e,r),o=[];break;case"select":l=W({},l,{value:void 0}),r=W({},r,{value:void 0}),o=[];break;case"textarea":l=so(e,l),r=so(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wr)}co(n,r);var a;n=null;for(d in l)if(!r.hasOwnProperty(d)&&l.hasOwnProperty(d)&&l[d]!=null)if(d==="style"){var s=l[d];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Mn.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var u=r[d];if(s=l!=null?l[d]:void 0,r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(o||(o=[]),o.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(o=o||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Mn.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&D("scroll",e),o||s===u||(o=[])):(o=o||[]).push(d,u))}n&&(o=o||[]).push("style",n);var d=o;(t.updateQueue=d)&&(t.flags|=4)}};Ku=function(e,t,n,r){n!==r&&(t.flags|=4)};function yn(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wf(e,t,n){var r=t.pendingProps;switch(hi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return he(t.type)&&Hr(),oe(t),null;case 3:return r=t.stateNode,ln(),F(me),F(ae),Si(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&(Qo(Oe),Oe=null))),Do(e,t),oe(t),null;case 5:ji(t);var l=St(Xn.current);if(n=t.type,e!==null&&t.stateNode!=null)Yu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return oe(t),null}if(e=St(Ue.current),vr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Fe]=t,r[Yn]=o,e=(t.mode&1)!==0,n){case"dialog":D("cancel",r),D("close",r);break;case"iframe":case"object":case"embed":D("load",r);break;case"video":case"audio":for(l=0;l<Cn.length;l++)D(Cn[l],r);break;case"source":D("error",r);break;case"img":case"image":case"link":D("error",r),D("load",r);break;case"details":D("toggle",r);break;case"input":Gi(r,o),D("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},D("invalid",r);break;case"textarea":Ji(r,o),D("invalid",r)}co(n,o),l=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?r.textContent!==s&&(o.suppressHydrationWarning!==!0&&xr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&xr(r.textContent,s,e),l=["children",""+s]):Mn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&D("scroll",r)}switch(n){case"input":ur(r),Zi(r,o,!0);break;case"textarea":ur(r),qi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Wr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ks(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Fe]=t,e[Yn]=r,Qu(e,t,!1,!1),t.stateNode=e;e:{switch(a=fo(n,r),n){case"dialog":D("cancel",e),D("close",e),l=r;break;case"iframe":case"object":case"embed":D("load",e),l=r;break;case"video":case"audio":for(l=0;l<Cn.length;l++)D(Cn[l],e);l=r;break;case"source":D("error",e),l=r;break;case"img":case"image":case"link":D("error",e),D("load",e),l=r;break;case"details":D("toggle",e),l=r;break;case"input":Gi(e,r),l=oo(e,r),D("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=W({},r,{value:void 0}),D("invalid",e);break;case"textarea":Ji(e,r),l=so(e,r),D("invalid",e);break;default:l=r}co(n,l),s=l;for(o in s)if(s.hasOwnProperty(o)){var u=s[o];o==="style"?Ns(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&js(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Dn(e,u):typeof u=="number"&&Dn(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Mn.hasOwnProperty(o)?u!=null&&o==="onScroll"&&D("scroll",e):u!=null&&ei(e,o,u,a))}switch(n){case"input":ur(e),Zi(e,r,!1);break;case"textarea":ur(e),qi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Kt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Kt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Wr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Ku(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=St(Xn.current),St(Ue.current),vr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Fe]=t,(o=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:xr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&xr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Fe]=t,t.stateNode=r}return oe(t),null;case 13:if(F(U),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&ve!==null&&t.mode&1&&!(t.flags&128))fu(),nn(),t.flags|=98560,o=!1;else if(o=vr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[Fe]=t}else nn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),o=!1}else Oe!==null&&(Qo(Oe),Oe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||U.current&1?Z===0&&(Z=3):Ri())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return ln(),Do(e,t),e===null&&Hn(t.stateNode.containerInfo),oe(t),null;case 10:return yi(t.type._context),oe(t),null;case 17:return he(t.type)&&Hr(),oe(t),null;case 19:if(F(U),o=t.memoizedState,o===null)return oe(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)yn(o,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Jr(e),a!==null){for(t.flags|=128,yn(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return M(U,U.current&1|2),t.child}e=e.sibling}o.tail!==null&&K()>an&&(t.flags|=128,r=!0,yn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Jr(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!V)return oe(t),null}else 2*K()-o.renderingStartTime>an&&n!==1073741824&&(t.flags|=128,r=!0,yn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=K(),t.sibling=null,n=U.current,M(U,r?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Ai(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function kf(e,t){switch(hi(t),t.tag){case 1:return he(t.type)&&Hr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ln(),F(me),F(ae),Si(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ji(t),null;case 13:if(F(U),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));nn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(U),null;case 4:return ln(),null;case 10:return yi(t.type._context),null;case 22:case 23:return Ai(),null;case 24:return null;default:return null}}var wr=!1,ie=!1,jf=typeof WeakSet=="function"?WeakSet:Set,k=null;function Qt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function Fo(e,t,n){try{n()}catch(r){H(e,t,r)}}var Ba=!1;function Sf(e,t){if(ko=Ur,e=qs(),pi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,d=0,h=0,g=e,m=null;t:for(;;){for(var x;g!==n||l!==0&&g.nodeType!==3||(s=a+l),g!==o||r!==0&&g.nodeType!==3||(u=a+r),g.nodeType===3&&(a+=g.nodeValue.length),(x=g.firstChild)!==null;)m=g,g=x;for(;;){if(g===e)break t;if(m===n&&++d===l&&(s=a),m===o&&++h===r&&(u=a),(x=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=x}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(jo={focusedElem:e,selectionRange:n},Ur=!1,k=t;k!==null;)if(t=k,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k=e;else for(;k!==null;){t=k;try{var _=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,R=_.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Te(t.type,w),R);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){H(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,k=e;break}k=t.return}return _=Ba,Ba=!1,_}function In(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Fo(t,n,o)}l=l.next}while(l!==r)}}function hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Vo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Xu(e){var t=e.alternate;t!==null&&(e.alternate=null,Xu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[Yn],delete t[Co],delete t[of],delete t[af])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gu(e){return e.tag===5||e.tag===3||e.tag===4}function $a(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Uo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wr));else if(r!==4&&(e=e.child,e!==null))for(Uo(e,t,n),e=e.sibling;e!==null;)Uo(e,t,n),e=e.sibling}function Bo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Bo(e,t,n),e=e.sibling;e!==null;)Bo(e,t,n),e=e.sibling}var te=null,Pe=!1;function Je(e,t,n){for(n=n.child;n!==null;)Zu(e,t,n),n=n.sibling}function Zu(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(al,n)}catch{}switch(n.tag){case 5:ie||Qt(n,t);case 6:var r=te,l=Pe;te=null,Je(e,t,n),te=r,Pe=l,te!==null&&(Pe?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(Pe?(e=te,n=n.stateNode,e.nodeType===8?Ul(e.parentNode,n):e.nodeType===1&&Ul(e,n),Bn(e)):Ul(te,n.stateNode));break;case 4:r=te,l=Pe,te=n.stateNode.containerInfo,Pe=!0,Je(e,t,n),te=r,Pe=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Fo(n,t,a),l=l.next}while(l!==r)}Je(e,t,n);break;case 1:if(!ie&&(Qt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){H(n,t,s)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,Je(e,t,n),ie=r):Je(e,t,n);break;default:Je(e,t,n)}}function Wa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new jf),t.forEach(function(r){var l=Of.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:te=s.stateNode,Pe=!1;break e;case 3:te=s.stateNode.containerInfo,Pe=!0;break e;case 4:te=s.stateNode.containerInfo,Pe=!0;break e}s=s.return}if(te===null)throw Error(y(160));Zu(o,a,l),te=null,Pe=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(d){H(l,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ju(t,e),t=t.sibling}function Ju(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),Me(e),r&4){try{In(3,e,e.return),hl(3,e)}catch(w){H(e,e.return,w)}try{In(5,e,e.return)}catch(w){H(e,e.return,w)}}break;case 1:Le(t,e),Me(e),r&512&&n!==null&&Qt(n,n.return);break;case 5:if(Le(t,e),Me(e),r&512&&n!==null&&Qt(n,n.return),e.flags&32){var l=e.stateNode;try{Dn(l,"")}catch(w){H(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&_s(l,o),fo(s,a);var d=fo(s,o);for(a=0;a<u.length;a+=2){var h=u[a],g=u[a+1];h==="style"?Ns(l,g):h==="dangerouslySetInnerHTML"?js(l,g):h==="children"?Dn(l,g):ei(l,h,g,d)}switch(s){case"input":io(l,o);break;case"textarea":ws(l,o);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Kt(l,!!o.multiple,x,!1):m!==!!o.multiple&&(o.defaultValue!=null?Kt(l,!!o.multiple,o.defaultValue,!0):Kt(l,!!o.multiple,o.multiple?[]:"",!1))}l[Yn]=o}catch(w){H(e,e.return,w)}}break;case 6:if(Le(t,e),Me(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(w){H(e,e.return,w)}}break;case 3:if(Le(t,e),Me(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Bn(t.containerInfo)}catch(w){H(e,e.return,w)}break;case 4:Le(t,e),Me(e);break;case 13:Le(t,e),Me(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Oi=K())),r&4&&Wa(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(d=ie)||h,Le(t,e),ie=d):Le(t,e),Me(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!h&&e.mode&1)for(k=e,h=e.child;h!==null;){for(g=k=h;k!==null;){switch(m=k,x=m.child,m.tag){case 0:case 11:case 14:case 15:In(4,m,m.return);break;case 1:Qt(m,m.return);var _=m.stateNode;if(typeof _.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,_.props=t.memoizedProps,_.state=t.memoizedState,_.componentWillUnmount()}catch(w){H(r,n,w)}}break;case 5:Qt(m,m.return);break;case 22:if(m.memoizedState!==null){Qa(g);continue}}x!==null?(x.return=m,k=x):Qa(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{l=g.stateNode,d?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=g.stateNode,u=g.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Ss("display",a))}catch(w){H(e,e.return,w)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(w){H(e,e.return,w)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Le(t,e),Me(e),r&4&&Wa(e);break;case 21:break;default:Le(t,e),Me(e)}}function Me(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Gu(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Dn(l,""),r.flags&=-33);var o=$a(e);Bo(e,o,l);break;case 3:case 4:var a=r.stateNode.containerInfo,s=$a(e);Uo(e,s,a);break;default:throw Error(y(161))}}catch(u){H(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nf(e,t,n){k=e,qu(e)}function qu(e,t,n){for(var r=(e.mode&1)!==0;k!==null;){var l=k,o=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||wr;if(!a){var s=l.alternate,u=s!==null&&s.memoizedState!==null||ie;s=wr;var d=ie;if(wr=a,(ie=u)&&!d)for(k=l;k!==null;)a=k,u=a.child,a.tag===22&&a.memoizedState!==null?Ya(l):u!==null?(u.return=a,k=u):Ya(l);for(;o!==null;)k=o,qu(o),o=o.sibling;k=l,wr=s,ie=d}Ha(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,k=o):Ha(e)}}function Ha(e){for(;k!==null;){var t=k;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&za(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}za(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var h=d.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&Bn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}ie||t.flags&512&&Vo(t)}catch(m){H(t,t.return,m)}}if(t===e){k=null;break}if(n=t.sibling,n!==null){n.return=t.return,k=n;break}k=t.return}}function Qa(e){for(;k!==null;){var t=k;if(t===e){k=null;break}var n=t.sibling;if(n!==null){n.return=t.return,k=n;break}k=t.return}}function Ya(e){for(;k!==null;){var t=k;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hl(4,t)}catch(u){H(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){H(t,l,u)}}var o=t.return;try{Vo(t)}catch(u){H(t,o,u)}break;case 5:var a=t.return;try{Vo(t)}catch(u){H(t,a,u)}}}catch(u){H(t,t.return,u)}if(t===e){k=null;break}var s=t.sibling;if(s!==null){s.return=t.return,k=s;break}k=t.return}}var Cf=Math.ceil,tl=Ze.ReactCurrentDispatcher,Ti=Ze.ReactCurrentOwner,Ce=Ze.ReactCurrentBatchConfig,O=0,ee=null,X=null,ne=0,xe=0,Yt=gt(0),Z=0,qn=null,Lt=0,gl=0,Pi=0,An=null,fe=null,Oi=0,an=1/0,Be=null,nl=!1,$o=null,ct=null,kr=!1,lt=null,rl=0,Rn=0,Wo=null,Or=-1,Ir=0;function ue(){return O&6?K():Or!==-1?Or:Or=K()}function dt(e){return e.mode&1?O&2&&ne!==0?ne&-ne:uf.transition!==null?(Ir===0&&(Ir=Ms()),Ir):(e=A,e!==0||(e=window.event,e=e===void 0?16:Ws(e.type)),e):1}function Ae(e,t,n,r){if(50<Rn)throw Rn=0,Wo=null,Error(y(185));tr(e,n,r),(!(O&2)||e!==ee)&&(e===ee&&(!(O&2)&&(gl|=n),Z===4&&nt(e,ne)),ge(e,r),n===1&&O===0&&!(t.mode&1)&&(an=K()+500,fl&&xt()))}function ge(e,t){var n=e.callbackNode;sd(e,t);var r=Vr(e,e===ee?ne:0);if(r===0)n!==null&&na(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&na(n),t===1)e.tag===0?sf(Ka.bind(null,e)):uu(Ka.bind(null,e)),rf(function(){!(O&6)&&xt()}),n=null;else{switch(Ds(r)){case 1:n=oi;break;case 4:n=As;break;case 16:n=Fr;break;case 536870912:n=Rs;break;default:n=Fr}n=ac(n,ec.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ec(e,t){if(Or=-1,Ir=0,O&6)throw Error(y(327));var n=e.callbackNode;if(qt()&&e.callbackNode!==n)return null;var r=Vr(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ll(e,r);else{t=r;var l=O;O|=2;var o=nc();(ee!==e||ne!==t)&&(Be=null,an=K()+500,Nt(e,t));do try{zf();break}catch(s){tc(e,s)}while(!0);vi(),tl.current=o,O=l,X!==null?t=0:(ee=null,ne=0,t=Z)}if(t!==0){if(t===2&&(l=xo(e),l!==0&&(r=l,t=Ho(e,l))),t===1)throw n=qn,Nt(e,0),nt(e,r),ge(e,K()),n;if(t===6)nt(e,r);else{if(l=e.current.alternate,!(r&30)&&!bf(l)&&(t=ll(e,r),t===2&&(o=xo(e),o!==0&&(r=o,t=Ho(e,o))),t===1))throw n=qn,Nt(e,0),nt(e,r),ge(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:wt(e,fe,Be);break;case 3:if(nt(e,r),(r&130023424)===r&&(t=Oi+500-K(),10<t)){if(Vr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=No(wt.bind(null,e,fe,Be),t);break}wt(e,fe,Be);break;case 4:if(nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-Ie(r);o=1<<a,a=t[a],a>l&&(l=a),r&=~o}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cf(r/1960))-r,10<r){e.timeoutHandle=No(wt.bind(null,e,fe,Be),r);break}wt(e,fe,Be);break;case 5:wt(e,fe,Be);break;default:throw Error(y(329))}}}return ge(e,K()),e.callbackNode===n?ec.bind(null,e):null}function Ho(e,t){var n=An;return e.current.memoizedState.isDehydrated&&(Nt(e,t).flags|=256),e=ll(e,t),e!==2&&(t=fe,fe=n,t!==null&&Qo(t)),e}function Qo(e){fe===null?fe=e:fe.push.apply(fe,e)}function bf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Re(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~Pi,t&=~gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ie(t),r=1<<n;e[n]=-1,t&=~r}}function Ka(e){if(O&6)throw Error(y(327));qt();var t=Vr(e,0);if(!(t&1))return ge(e,K()),null;var n=ll(e,t);if(e.tag!==0&&n===2){var r=xo(e);r!==0&&(t=r,n=Ho(e,r))}if(n===1)throw n=qn,Nt(e,0),nt(e,t),ge(e,K()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,fe,Be),ge(e,K()),null}function Ii(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(an=K()+500,fl&&xt())}}function Tt(e){lt!==null&&lt.tag===0&&!(O&6)&&qt();var t=O;O|=1;var n=Ce.transition,r=A;try{if(Ce.transition=null,A=1,e)return e()}finally{A=r,Ce.transition=n,O=t,!(O&6)&&xt()}}function Ai(){xe=Yt.current,F(Yt)}function Nt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nf(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(hi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hr();break;case 3:ln(),F(me),F(ae),Si();break;case 5:ji(r);break;case 4:ln();break;case 13:F(U);break;case 19:F(U);break;case 10:yi(r.type._context);break;case 22:case 23:Ai()}n=n.return}if(ee=e,X=e=ft(e.current,null),ne=xe=t,Z=0,qn=null,Pi=gl=Lt=0,fe=An=null,jt!==null){for(t=0;t<jt.length;t++)if(n=jt[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=l,r.next=a}n.pending=r}jt=null}return e}function tc(e,t){do{var n=X;try{if(vi(),Lr.current=el,qr){for(var r=$.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}qr=!1}if(zt=0,q=G=$=null,On=!1,Gn=0,Ti.current=null,n===null||n.return===null){Z=1,qn=t,X=null;break}e:{var o=e,a=n.return,s=n,u=t;if(t=ne,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,h=s,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=Aa(a);if(x!==null){x.flags&=-257,Ra(x,a,s,o,t),x.mode&1&&Ia(o,d,t),t=x,u=d;var _=t.updateQueue;if(_===null){var w=new Set;w.add(u),t.updateQueue=w}else _.add(u);break e}else{if(!(t&1)){Ia(o,d,t),Ri();break e}u=Error(y(426))}}else if(V&&s.mode&1){var R=Aa(a);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Ra(R,a,s,o,t),gi(on(u,s));break e}}o=u=on(u,s),Z!==4&&(Z=2),An===null?An=[o]:An.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Du(o,u,t);Ea(o,f);break e;case 1:s=u;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ct===null||!ct.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Fu(o,s,t);Ea(o,v);break e}}o=o.return}while(o!==null)}lc(n)}catch(j){t=j,X===n&&n!==null&&(X=n=n.return);continue}break}while(!0)}function nc(){var e=tl.current;return tl.current=el,e===null?el:e}function Ri(){(Z===0||Z===3||Z===2)&&(Z=4),ee===null||!(Lt&268435455)&&!(gl&268435455)||nt(ee,ne)}function ll(e,t){var n=O;O|=2;var r=nc();(ee!==e||ne!==t)&&(Be=null,Nt(e,t));do try{Ef();break}catch(l){tc(e,l)}while(!0);if(vi(),O=n,tl.current=r,X!==null)throw Error(y(261));return ee=null,ne=0,Z}function Ef(){for(;X!==null;)rc(X)}function zf(){for(;X!==null&&!qc();)rc(X)}function rc(e){var t=ic(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?lc(e):X=t,Ti.current=null}function lc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=kf(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,X=null;return}}else if(n=wf(n,t,xe),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Z===0&&(Z=5)}function wt(e,t,n){var r=A,l=Ce.transition;try{Ce.transition=null,A=1,Lf(e,t,n,r)}finally{Ce.transition=l,A=r}return null}function Lf(e,t,n,r){do qt();while(lt!==null);if(O&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ud(e,o),e===ee&&(X=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kr||(kr=!0,ac(Fr,function(){return qt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ce.transition,Ce.transition=null;var a=A;A=1;var s=O;O|=4,Ti.current=null,Sf(e,n),Ju(n,e),Xd(jo),Ur=!!ko,jo=ko=null,e.current=n,Nf(n),ed(),O=s,A=a,Ce.transition=o}else e.current=n;if(kr&&(kr=!1,lt=e,rl=l),o=e.pendingLanes,o===0&&(ct=null),rd(n.stateNode),ge(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(nl)throw nl=!1,e=$o,$o=null,e;return rl&1&&e.tag!==0&&qt(),o=e.pendingLanes,o&1?e===Wo?Rn++:(Rn=0,Wo=e):Rn=0,xt(),null}function qt(){if(lt!==null){var e=Ds(rl),t=Ce.transition,n=A;try{if(Ce.transition=null,A=16>e?16:e,lt===null)var r=!1;else{if(e=lt,lt=null,rl=0,O&6)throw Error(y(331));var l=O;for(O|=4,k=e.current;k!==null;){var o=k,a=o.child;if(k.flags&16){var s=o.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(k=d;k!==null;){var h=k;switch(h.tag){case 0:case 11:case 15:In(8,h,o)}var g=h.child;if(g!==null)g.return=h,k=g;else for(;k!==null;){h=k;var m=h.sibling,x=h.return;if(Xu(h),h===d){k=null;break}if(m!==null){m.return=x,k=m;break}k=x}}}var _=o.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var R=w.sibling;w.sibling=null,w=R}while(w!==null)}}k=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,k=a;else e:for(;k!==null;){if(o=k,o.flags&2048)switch(o.tag){case 0:case 11:case 15:In(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,k=f;break e}k=o.return}}var c=e.current;for(k=c;k!==null;){a=k;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,k=p;else e:for(a=c;k!==null;){if(s=k,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:hl(9,s)}}catch(j){H(s,s.return,j)}if(s===a){k=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,k=v;break e}k=s.return}}if(O=l,xt(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(al,e)}catch{}r=!0}return r}finally{A=n,Ce.transition=t}}return!1}function Xa(e,t,n){t=on(n,t),t=Du(e,t,1),e=ut(e,t,1),t=ue(),e!==null&&(tr(e,1,t),ge(e,t))}function H(e,t,n){if(e.tag===3)Xa(e,e,n);else for(;t!==null;){if(t.tag===3){Xa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ct===null||!ct.has(r))){e=on(n,e),e=Fu(t,e,1),t=ut(t,e,1),e=ue(),t!==null&&(tr(t,1,e),ge(t,e));break}}t=t.return}}function Tf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(Z===4||Z===3&&(ne&130023424)===ne&&500>K()-Oi?Nt(e,0):Pi|=n),ge(e,t)}function oc(e,t){t===0&&(e.mode&1?(t=fr,fr<<=1,!(fr&130023424)&&(fr=4194304)):t=1);var n=ue();e=Xe(e,t),e!==null&&(tr(e,t,n),ge(e,n))}function Pf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),oc(e,n)}function Of(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),oc(e,n)}var ic;ic=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,_f(e,t,n);pe=!!(e.flags&131072)}else pe=!1,V&&t.flags&1048576&&cu(t,Kr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pr(e,t),e=t.pendingProps;var l=tn(t,ae.current);Jt(t,n),l=Ci(null,t,r,e,l,n);var o=bi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(o=!0,Qr(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,wi(t),l.updater=ml,t.stateNode=l,l._reactInternals=t,Po(t,r,e,n),t=Ao(null,t,r,!0,o,n)):(t.tag=0,V&&o&&mi(t),se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Af(r),e=Te(r,e),l){case 0:t=Io(null,t,r,e,n);break e;case 1:t=Fa(null,t,r,e,n);break e;case 11:t=Ma(null,t,r,e,n);break e;case 14:t=Da(null,t,r,Te(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Io(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Fa(e,t,r,l,n);case 3:e:{if($u(t),e===null)throw Error(y(387));r=t.pendingProps,o=t.memoizedState,l=o.element,gu(e,t),Zr(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=on(Error(y(423)),t),t=Va(e,t,r,n,l);break e}else if(r!==l){l=on(Error(y(424)),t),t=Va(e,t,r,n,l);break e}else for(ve=st(t.stateNode.containerInfo.firstChild),ye=t,V=!0,Oe=null,n=mu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nn(),r===l){t=Ge(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return xu(t),e===null&&zo(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,a=l.children,So(r,l)?a=null:o!==null&&So(r,o)&&(t.flags|=32),Bu(e,t),se(e,t,a,n),t.child;case 6:return e===null&&zo(t),null;case 13:return Wu(e,t,n);case 4:return ki(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Ma(e,t,r,l,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,a=l.value,M(Xr,r._currentValue),r._currentValue=a,o!==null)if(Re(o.value,a)){if(o.children===l.children&&!me.current){t=Ge(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Qe(-1,n&-n),u.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var h=d.pending;h===null?u.next=u:(u.next=h.next,h.next=u),d.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Lo(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(y(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Lo(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Jt(t,n),l=be(l),r=r(l),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,l=Te(r,t.pendingProps),l=Te(r.type,l),Da(e,t,r,l,n);case 15:return Vu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Pr(e,t),t.tag=1,he(r)?(e=!0,Qr(t)):e=!1,Jt(t,n),Mu(t,r,l),Po(t,r,l,n),Ao(null,t,r,!0,e,n);case 19:return Hu(e,t,n);case 22:return Uu(e,t,n)}throw Error(y(156,t.tag))};function ac(e,t){return Is(e,t)}function If(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new If(e,t,n,r)}function Mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Af(e){if(typeof e=="function")return Mi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ni)return 11;if(e===ri)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ar(e,t,n,r,l,o){var a=2;if(r=e,typeof e=="function")Mi(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Mt:return Ct(n.children,l,o,t);case ti:a=8,l|=8;break;case to:return e=Ne(12,n,t,l|2),e.elementType=to,e.lanes=o,e;case no:return e=Ne(13,n,t,l),e.elementType=no,e.lanes=o,e;case ro:return e=Ne(19,n,t,l),e.elementType=ro,e.lanes=o,e;case xs:return xl(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hs:a=10;break e;case gs:a=9;break e;case ni:a=11;break e;case ri:a=14;break e;case qe:a=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ne(a,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function Ct(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function xl(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=xs,e.lanes=n,e.stateNode={isHidden:!1},e}function Xl(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Gl(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ll(0),this.expirationTimes=Ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Di(e,t,n,r,l,o,a,s,u){return e=new Rf(e,t,n,s,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ne(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wi(o),e}function Mf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sc(e){if(!e)return mt;e=e._reactInternals;e:{if(Ot(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(he(n))return su(e,n,t)}return t}function uc(e,t,n,r,l,o,a,s,u){return e=Di(n,r,!0,e,l,o,a,s,u),e.context=sc(null),n=e.current,r=ue(),l=dt(n),o=Qe(r,l),o.callback=t??null,ut(n,o,l),e.current.lanes=l,tr(e,l,r),ge(e,r),e}function vl(e,t,n,r){var l=t.current,o=ue(),a=dt(l);return n=sc(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ut(l,t,a),e!==null&&(Ae(e,l,a,o),zr(e,l,a)),a}function ol(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ga(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fi(e,t){Ga(e,t),(e=e.alternate)&&Ga(e,t)}function Df(){return null}var cc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Vi(e){this._internalRoot=e}yl.prototype.render=Vi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));vl(e,t,null,null)};yl.prototype.unmount=Vi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tt(function(){vl(null,e,null,null)}),t[Ke]=null}};function yl(e){this._internalRoot=e}yl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Us();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&$s(e)}};function Ui(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Za(){}function Ff(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var d=ol(a);o.call(d)}}var a=uc(t,r,e,0,null,!1,!1,"",Za);return e._reactRootContainer=a,e[Ke]=a.current,Hn(e.nodeType===8?e.parentNode:e),Tt(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var d=ol(u);s.call(d)}}var u=Di(e,0,!1,null,null,!1,!1,"",Za);return e._reactRootContainer=u,e[Ke]=u.current,Hn(e.nodeType===8?e.parentNode:e),Tt(function(){vl(t,u,n,r)}),u}function wl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var a=o;if(typeof l=="function"){var s=l;l=function(){var u=ol(a);s.call(u)}}vl(t,a,e,l)}else a=Ff(n,t,e,l,r);return ol(a)}Fs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Nn(t.pendingLanes);n!==0&&(ii(t,n|1),ge(t,K()),!(O&6)&&(an=K()+500,xt()))}break;case 13:Tt(function(){var r=Xe(e,1);if(r!==null){var l=ue();Ae(r,e,1,l)}}),Fi(e,1)}};ai=function(e){if(e.tag===13){var t=Xe(e,134217728);if(t!==null){var n=ue();Ae(t,e,134217728,n)}Fi(e,134217728)}};Vs=function(e){if(e.tag===13){var t=dt(e),n=Xe(e,t);if(n!==null){var r=ue();Ae(n,e,t,r)}Fi(e,t)}};Us=function(){return A};Bs=function(e,t){var n=A;try{return A=e,t()}finally{A=n}};mo=function(e,t,n){switch(t){case"input":if(io(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=dl(r);if(!l)throw Error(y(90));ys(r),io(r,l)}}}break;case"textarea":ws(e,n);break;case"select":t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}};Es=Ii;zs=Tt;var Vf={usingClientEntryPoint:!1,Events:[rr,Ut,dl,Cs,bs,Ii]},_n={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Uf={bundleType:_n.bundleType,version:_n.version,rendererPackageName:_n.rendererPackageName,rendererConfig:_n.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ze.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ps(e),e===null?null:e.stateNode},findFiberByHostInstance:_n.findFiberByHostInstance||Df,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jr.isDisabled&&jr.supportsFiber)try{al=jr.inject(Uf),Ve=jr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vf;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ui(t))throw Error(y(200));return Mf(e,t,null,n)};we.createRoot=function(e,t){if(!Ui(e))throw Error(y(299));var n=!1,r="",l=cc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Di(e,1,!1,null,null,n,!1,r,l),e[Ke]=t.current,Hn(e.nodeType===8?e.parentNode:e),new Vi(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Ps(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Tt(e)};we.hydrate=function(e,t,n){if(!_l(t))throw Error(y(200));return wl(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Ui(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",a=cc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=uc(t,null,e,1,n??null,l,!1,o,a),e[Ke]=t.current,Hn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new yl(t)};we.render=function(e,t,n){if(!_l(t))throw Error(y(200));return wl(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!_l(e))throw Error(y(40));return e._reactRootContainer?(Tt(function(){wl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};we.unstable_batchedUpdates=Ii;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!_l(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return wl(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function dc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dc)}catch(e){console.error(e)}}dc(),ds.exports=we;var Bf=ds.exports,Ja=Bf;ql.createRoot=Ja.createRoot,ql.hydrateRoot=Ja.hydrateRoot;const $f=`
/* ── RESET & BASE ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
.sever-root {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #1a2b3f; line-height: 1.6; overflow-x: hidden;
}
img { max-width: 100%; height: auto; }

/* ── NAV ── */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 0 24px;
  background: #0a2a4a;
  box-shadow: 0 2px 20px rgba(0,0,0,0.15);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.nav__inner {
  max-width: 1400px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  height: 76px;
}
.nav__logo {
  display: flex; align-items: center; gap: 12px; cursor: pointer;
  padding-right: 24px;
  border-right: 1px solid rgba(255,255,255,0.08);
  margin-right: 8px;
}
.nav__logo-img {
  height: 42px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
}
.nav__logo-text {
  font-size: 20px; font-weight: 800; color: #fff;
  letter-spacing: 0.14em; line-height: 1;
}
.nav__logo-sub {
  font-size: 9px; color: rgba(255,255,255,0.5);
  letter-spacing: 0.14em; font-weight: 500;
  margin-top: 4px;
}
.nav__links {
  display: flex; gap: 2px; align-items: center; flex: 1; justify-content: flex-end;
  margin-right: 16px;
}
.nav__link {
  position: relative;
  background: none; border: none; color: rgba(255,255,255,0.82);
  font-size: 14px; font-weight: 500; cursor: pointer;
  font-family: inherit; padding: 10px 14px; border-radius: 0;
  transition: color 0.2s;
  display: inline-flex; align-items: center;
  letter-spacing: 0.01em;
}
.nav__link::after {
  content: "";
  position: absolute;
  left: 14px; right: 14px;
  bottom: 4px;
  height: 2px;
  background: #00b4d8;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.25s cubic-bezier(.16,1,.3,1);
}
.nav__link:hover { color: #fff; }
.nav__link:hover::after { transform: scaleX(1); }
.nav__link--active { color: #fff; }
.nav__link--active::after { transform: scaleX(1); }

/* Dropdown */
.nav__dropdown-wrap { position: relative; }
.nav__link--dropdown { gap: 2px; }
.nav__dropdown {
  position: absolute;
  top: calc(100% - 2px);
  left: 50%;
  transform: translateX(-50%);
  min-width: 220px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08);
  padding: 8px;
  display: flex; flex-direction: column;
  border: 1px solid #e8ecf1;
  z-index: 120;
  animation: ddIn 0.22s cubic-bezier(.16,1,.3,1);
}
@keyframes ddIn {
  from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
}
.nav__dropdown::before {
  content: "";
  position: absolute;
  top: -6px; left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 12px; height: 12px;
  background: #fff;
  border-left: 1px solid #e8ecf1;
  border-top: 1px solid #e8ecf1;
}
.nav__dropdown-item {
  background: none; border: none; text-align: left;
  padding: 11px 16px; border-radius: 6px;
  font-size: 14px; font-weight: 500; color: #0a2a4a;
  cursor: pointer; font-family: inherit;
  transition: all 0.18s;
  display: flex; align-items: center;
}
.nav__dropdown-item::before {
  content: "";
  width: 6px; height: 6px;
  border-radius: 50%;
  background: #e8ecf1;
  margin-right: 10px;
  transition: all 0.18s;
  flex-shrink: 0;
}
.nav__dropdown-item:hover {
  background: #f0f9fc;
  color: #00b4d8;
}
.nav__dropdown-item:hover::before {
  background: #00b4d8;
  transform: scale(1.3);
}

.nav__cta {
  background: #00b4d8; color: #fff; border: none;
  padding: 11px 22px; border-radius: 6px;
  font-size: 13px; font-weight: 600; cursor: pointer;
  font-family: inherit; transition: all 0.25s;
  letter-spacing: 0.02em;
  white-space: nowrap;
}
.nav__cta:hover { background: #0096b7; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(0,180,216,0.35); }
.nav__hamburger {
  display: none; background: none; border: none;
  color: #fff; cursor: pointer; padding: 4px;
}

/* ── MOBILE MENU ── */
.mobile-menu {
  position: fixed; top: 76px; left: 0; right: 0; z-index: 99;
  background: #0a2a4a;
  padding: 20px 24px; display: flex; flex-direction: column;
  box-shadow: 0 8px 30px rgba(0,0,0,0.25);
  max-height: calc(100vh - 76px);
  overflow-y: auto;
}
.mobile-menu__link {
  background: none; border: none; text-align: left;
  padding: 14px 0; font-size: 16px; font-weight: 500;
  color: #fff; cursor: pointer; font-family: inherit;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.mobile-menu__link--sub {
  padding-left: 16px;
  font-size: 14px;
  color: rgba(255,255,255,0.7);
}
.mobile-menu__group {
  display: flex; flex-direction: column;
  border-bottom: 1px solid rgba(255,255,255,0.08);
  padding: 10px 0;
}
.mobile-menu__group-title {
  font-size: 12px; font-weight: 700; letter-spacing: 0.12em;
  color: #00b4d8; text-transform: uppercase;
  padding: 8px 0;
}
.mobile-menu__group .mobile-menu__link--sub {
  border-bottom: none;
  padding: 10px 0 10px 16px;
}

/* ── HERO ── */
.hero {
  min-height: 100vh; display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  padding: 100px 60px 80px;
  background: linear-gradient(165deg, #0a2a4a 0%, #0d3b66 40%, #0e4d80 100%);
  position: relative; overflow: hidden;
}
.hero::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse at 70% 20%, rgba(0,180,216,0.12) 0%, transparent 60%),
              radial-gradient(ellipse at 30% 80%, rgba(0,180,216,0.06) 0%, transparent 50%);
}
.hero__inner {
  position: relative;
  max-width: 1200px; width: 100%;
  display: flex; align-items: center;
  gap: 64px;
}
/* Logo side */
.hero__logo-side {
  flex: 0 0 auto;
  display: flex; align-items: center; justify-content: center;
}
.hero__logo-img {
  width: 300px; height: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
  opacity: 0.92;
}
/* Vertical divider */
.hero__divider {
  flex: 0 0 1px;
  align-self: stretch;
  min-height: 280px;
  background: rgba(255,255,255,0.12);
}
/* Content side */
.hero__content {
  flex: 1; min-width: 0;
  display: flex; flex-direction: column; gap: 0;
}
.hero__label {
  font-size: 12px; font-weight: 700; letter-spacing: 0.2em;
  color: #00b4d8; margin-bottom: 20px;
}
.hero__title {
  font-size: clamp(32px, 4.5vw, 56px); font-weight: 800;
  color: #fff; line-height: 1.1; margin-bottom: 22px;
}
.hero__sub {
  font-size: 17px; color: rgba(255,255,255,0.6);
  max-width: 480px; margin-bottom: 36px; line-height: 1.7;
}
.hero__actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 40px; }
/* Hero stats (counters) */
.hero__stats {
  display: flex; align-items: center; gap: 32px;
  padding-top: 32px;
  border-top: 1px solid rgba(255,255,255,0.12);
}
.hero__stat { display: flex; flex-direction: column; }
.hero__stat-number {
  font-size: 36px; font-weight: 800; color: #00b4d8;
  line-height: 1;
}
.hero__stat-label {
  font-size: 13px; color: rgba(255,255,255,0.5);
  margin-top: 6px;
}
.hero__stat-sep {
  width: 1px; height: 48px;
  background: rgba(255,255,255,0.15);
  flex-shrink: 0;
}
.hero__scroll {
  position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
  color: rgba(255,255,255,0.3); cursor: pointer;
  animation: bob 2s ease-in-out infinite;
}
@keyframes bob { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(8px)} }

/* ── BUTTONS ── */
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 28px; border-radius: 10px;
  font-size: 15px; font-weight: 600; cursor: pointer;
  font-family: inherit; transition: all 0.25s; border: none;
}
.btn--primary { background: #00b4d8; color: #fff; }
.btn--primary:hover { background: #0096b7; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,180,216,0.3); }
.btn--outline { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.25); }
.btn--outline:hover { border-color: rgba(255,255,255,0.5); background: rgba(255,255,255,0.06); }

/* ── CERTIFICATIONS BAR ── */
.cert-bar {
  background: #fff;
  padding: 48px 24px;
  border-bottom: 1px solid #e8ecf1;
}
.cert-bar__inner {
  max-width: 1100px; margin: 0 auto;
  display: flex; align-items: center; justify-content: center;
  gap: 24px; flex-wrap: wrap;
}
.cert-badge {
  position: relative;
  display: flex; align-items: center; justify-content: center;
  padding: 20px 24px;
  border: 1.5px solid #e2e8f0;
  border-radius: 14px;
  background: #fff;
  transition: all 0.3s;
  cursor: default;
}
.cert-badge:hover {
  border-color: #00b4d8;
  box-shadow: 0 6px 22px rgba(0,180,216,0.1);
  transform: translateY(-2px);
}
.cert-badge__img-wrap {
  width: 88px; height: 88px;
  display: flex; align-items: center; justify-content: center;
}
.cert-badge__img {
  max-width: 88px; max-height: 88px;
  object-fit: contain;
}
/* Tooltip — visible solo en hover */
.cert-badge__tooltip {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%; transform: translateX(-50%);
  background: #0a2a4a;
  border-radius: 10px;
  padding: 10px 16px;
  display: flex; flex-direction: column; gap: 4px; align-items: center;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.22s ease, transform 0.22s ease;
  transform: translateX(-50%) translateY(6px);
  z-index: 10;
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
}
.cert-badge:hover .cert-badge__tooltip {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
.cert-badge__tooltip::after {
  content: "";
  position: absolute;
  top: 100%; left: 50%; transform: translateX(-50%);
  border: 6px solid transparent;
  border-top-color: #0a2a4a;
}
.cert-badge__tooltip-name {
  font-size: 14px; font-weight: 700; color: #fff;
}
.cert-badge__tooltip-cert {
  font-size: 10px; font-weight: 600; color: rgba(255,255,255,0.6);
  letter-spacing: 0.04em;
}
.cert-badge__tooltip-proc {
  font-size: 11px; font-weight: 600;
  color: #f59e0b;
}

/* ── SECTIONS ── */
.section { padding: 90px 24px; }
.section--light { background: #f8fafb; }
.section--white { background: #fff; }
.section--dark { background: linear-gradient(170deg, #0a2a4a, #0d3b66); }
.section__inner { max-width: 1100px; margin: 0 auto; }
.section__label {
  font-size: 12px; font-weight: 700; letter-spacing: 0.18em;
  color: #00b4d8; margin-bottom: 12px; text-transform: uppercase;
}
.section__title {
  font-size: clamp(28px, 4vw, 42px); font-weight: 800;
  color: #0a2a4a; line-height: 1.15; margin-bottom: 20px;
}
.section__text {
  font-size: 16px; color: #5a6b7e; line-height: 1.75; max-width: 540px;
}
.two-col {
  display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: start;
  max-width: 1100px; margin: 0 auto;
}

/* ── COUNTERS ── */
.counter-row { display: flex; gap: 40px; margin-top: 36px; }
.counter-item { display: flex; flex-direction: column; }
.counter-item__number { font-size: 38px; font-weight: 800; color: #00b4d8; line-height: 1; }
.counter-item__label { font-size: 13px; color: #7a8b9e; margin-top: 6px; }

/* ── MISSION/VISION CARDS ── */
.mv-cards { display: flex; flex-direction: column; gap: 20px; }
.mv-card {
  padding: 32px; border-radius: 16px;
  background: #fff; border: 1px solid #e8ecf1;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  transition: all 0.3s;
}
.mv-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.06); transform: translateY(-2px); }
.mv-card__title { font-size: 20px; font-weight: 700; color: #0a2a4a; margin-bottom: 12px; }
.mv-card__text { font-size: 15px; color: #5a6b7e; line-height: 1.7; margin: 0; }

/* ── SERVICES ── */
.serv-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px;
  max-width: 1100px; margin: 40px auto 0;
}
.serv-grid--three { grid-template-columns: repeat(3, 1fr); }
.serv-card {
  padding: 32px 28px; border-radius: 14px;
  background: #f8fafb; border: 1px solid #e8ecf1;
  transition: all 0.3s; cursor: default;
}
.serv-card:hover { background: #fff; border-color: #00b4d8; box-shadow: 0 8px 28px rgba(0,180,216,0.08); transform: translateY(-3px); }
.serv-card__icon { color: #00b4d8; margin-bottom: 16px; }
.serv-card__title { font-size: 17px; font-weight: 700; color: #0a2a4a; margin-bottom: 10px; }
.serv-card__text { font-size: 14px; color: #5a6b7e; line-height: 1.7; margin: 0; }

/* ── FLOTILLA ── */
.flot-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
  max-width: 1200px; margin: 0 auto;
}
.flot-card {
  display: flex; flex-direction: column;
  border-radius: 14px; overflow: hidden;
  background: #fff; border: 1px solid #e8ecf1;
  transition: all 0.3s;
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
}
.flot-card:hover {
  border-color: #00b4d8;
  box-shadow: 0 14px 36px rgba(0,180,216,0.12);
  transform: translateY(-3px);
}
.flot-card__image {
  aspect-ratio: 16/10;
  overflow: hidden;
  background: #eef3f7;
}
.flot-card__img {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}
.flot-card:hover .flot-card__img {
  transform: scale(1.04);
}
.flot-card__body {
  padding: 20px 22px 24px;
  display: flex; flex-direction: column;
  gap: 0;
  text-align: left;
}
.flot-card__label {
  font-size: 16px; font-weight: 700; color: #0a2a4a;
  margin-bottom: 14px;
}
.flot-card__specs {
  display: flex; flex-direction: column; gap: 8px;
}
.flot-spec {
  display: flex; flex-direction: column; gap: 1px;
}
.flot-spec--full { margin-top: 4px; }
.flot-spec__key {
  font-size: 10px; font-weight: 700; color: #00b4d8;
  letter-spacing: 0.1em; text-transform: uppercase;
}
.flot-spec__val {
  font-size: 13px; color: #3a4a5e; line-height: 1.5;
}

/* ── SECTORS ── */
.sector-grid {
  display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px;
  max-width: 1000px; margin: 40px auto 0;
}
.sector-card {
  display: flex; flex-direction: column; align-items: center; gap: 14px;
  padding: 40px 20px; border-radius: 12px;
  background: #fff; border: 1px solid #e8ecf1;
  transition: all 0.3s; cursor: default;
  box-shadow: 0 1px 3px rgba(0,0,0,0.03);
}
.sector-card:hover { border-color: #00b4d8; box-shadow: 0 8px 28px rgba(0,180,216,0.08); transform: translateY(-3px); }
.sector-card__icon { color: #0a2a4a; }
.sector-card:hover .sector-card__icon { color: #00b4d8; }
.sector-card__name { font-size: 14px; font-weight: 600; color: #0a2a4a; text-align: center; }

/* ── CONTACTO ── */
.contact-layout {
  display: grid; grid-template-columns: 1fr 1.15fr; gap: 40px; align-items: start;
  max-width: 1100px; margin: 40px auto 0;
}
.contact-cards { display: flex; flex-direction: column; gap: 16px; }
.contact-tab {
  border-radius: 14px; overflow: hidden; cursor: pointer;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  transition: all 0.3s;
}
.contact-tab--active {
  background: rgba(0,180,216,0.08); border-color: rgba(0,180,216,0.25);
}
.contact-tab__header {
  display: flex; align-items: center; gap: 14px;
  padding: 20px 24px 0;
}
.contact-tab__icon-wrap {
  width: 44px; height: 44px; border-radius: 12px;
  background: rgba(0,180,216,0.12); display: flex; align-items: center; justify-content: center;
  color: #00b4d8;
}
.contact-tab__badge {
  font-size: 16px; font-weight: 700; color: #fff;
}
.contact-tab__body { padding: 16px 24px 22px; }
.contact-tab__row {
  display: flex; justify-content: space-between; align-items: center;
  padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
}
.contact-tab__row:last-child { border-bottom: none; }
.contact-tab__label {
  font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.35);
  text-transform: uppercase; letter-spacing: 0.06em;
}
.contact-tab__value {
  font-size: 14px; color: rgba(255,255,255,0.8); text-decoration: none;
  font-weight: 500;
}
.contact-tab__value--link { color: #00b4d8; }
.contact-tab__value--link:hover { text-decoration: underline; }
.contact-map-hint {
  display: flex; align-items: center; gap: 10px;
  padding: 16px 20px; border-radius: 10px;
  background: rgba(0,180,216,0.06); border: 1px solid rgba(0,180,216,0.12);
  color: rgba(255,255,255,0.5);
}
.contact-map-hint__icon { color: #00b4d8; display: flex; }
.contact-map-hint__text { font-size: 13px; }

.contact-form-wrap {
  padding: 36px; border-radius: 16px;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(8px);
}
.contact-form-wrap__header {
  display: flex; align-items: center; gap: 12px; margin-bottom: 28px;
  padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08);
}
.contact-form-wrap__title {
  font-size: 18px; font-weight: 700; color: #fff;
}
.contact-form { display: flex; flex-direction: column; gap: 18px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-label {
  font-size: 11px; font-weight: 600; color: rgba(255,255,255,0.4);
  letter-spacing: 0.06em; text-transform: uppercase;
}
.form-input {
  padding: 13px 16px; border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.04);
  font-size: 15px; font-family: inherit; color: #fff;
  outline: none; transition: border-color 0.2s;
}
.form-input::placeholder { color: rgba(255,255,255,0.2); }
.form-input:focus { border-color: #00b4d8; box-shadow: 0 0 0 3px rgba(0,180,216,0.1); }
.form-input--ta { resize: vertical; min-height: 100px; }

/* Department selector */
.dept-selector {
  display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
}
.dept-pill {
  display: flex; align-items: center; justify-content: center; gap: 10px;
  padding: 14px 16px; border-radius: 10px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.7);
  font-family: inherit; font-size: 14px; font-weight: 600;
  cursor: pointer;
  transition: all 0.22s cubic-bezier(.16,1,.3,1);
}
.dept-pill__icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 22px; height: 22px;
  color: rgba(255,255,255,0.5);
  transition: color 0.22s;
}
.dept-pill__icon svg { width: 18px; height: 18px; }
.dept-pill:hover {
  background: rgba(0,180,216,0.08);
  border-color: rgba(0,180,216,0.25);
  color: #fff;
}
.dept-pill--active {
  background: rgba(0,180,216,0.15);
  border-color: #00b4d8;
  color: #fff;
  box-shadow: 0 4px 16px rgba(0,180,216,0.2);
}
.dept-pill--active .dept-pill__icon { color: #00b4d8; }
.form-note {
  font-size: 11.5px; color: rgba(255,255,255,0.4);
  text-align: center; margin: 4px 0 0;
  font-style: italic;
}

.form-success { text-align: center; padding: 50px 20px; }
.form-success__check {
  width: 60px; height: 60px; border-radius: 50%;
  background: #00b4d8; color: #fff;
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 30px; font-weight: 700; margin-bottom: 16px;
}
.form-success__title { font-size: 22px; font-weight: 700; color: #fff; margin: 0 0 6px; }
.form-success__text { font-size: 15px; color: rgba(255,255,255,0.65); margin: 0; line-height: 1.5; }
.form-success__text strong { color: #00b4d8; font-weight: 700; }

/* ── FOOTER ── */
.footer {
  background: #061525;
  padding: 60px 24px 0;
  color: #fff;
}
.footer__main {
  max-width: 1400px; margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1.3fr 1.2fr;
  gap: 48px;
  padding-bottom: 44px;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.footer__col { display: flex; flex-direction: column; gap: 18px; }
.footer__col--brand { max-width: 380px; }
.footer__logo {
  display: flex; align-items: center; gap: 12px;
  cursor: pointer; width: fit-content;
}
.footer__logo-img {
  height: 42px; width: auto; object-fit: contain;
  filter: brightness(0) invert(1);
}
.footer__tagline {
  font-size: 14px; line-height: 1.65;
  color: rgba(255,255,255,0.55);
  margin: 0;
  max-width: 320px;
}
.footer__social {
  display: flex; gap: 10px; margin-top: 4px;
}
.footer__social-btn {
  width: 38px; height: 38px;
  border-radius: 8px;
  background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.6);
  display: inline-flex; align-items: center; justify-content: center;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(.16,1,.3,1);
  border: 1px solid rgba(255,255,255,0.05);
}
.footer__social-btn:hover {
  background: #00b4d8;
  color: #fff;
  border-color: #00b4d8;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0,180,216,0.3);
}
.footer__col-title {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #00b4d8;
  margin: 0 0 4px;
}
.footer__list {
  display: flex; flex-direction: column; gap: 8px;
}
.footer__link {
  background: none; border: none;
  color: rgba(255,255,255,0.6);
  font-size: 14px; font-weight: 400;
  cursor: pointer; font-family: inherit;
  padding: 0; text-align: left;
  text-decoration: none;
  transition: color 0.2s, transform 0.2s;
  align-self: flex-start;
}
.footer__link:hover {
  color: #00b4d8;
  transform: translateX(3px);
}
.footer__link-static {
  color: rgba(255,255,255,0.6);
  font-size: 13.5px;
  text-decoration: none;
  transition: color 0.2s;
}
a.footer__link-static:hover { color: #00b4d8; }
.footer__contact-group {
  display: flex; flex-direction: column; gap: 3px;
  margin-bottom: 8px;
}
.footer__contact-label {
  font-size: 11px; font-weight: 700;
  color: rgba(255,255,255,0.35);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 4px;
}
.footer__bar {
  max-width: 1400px; margin: 0 auto;
  padding: 22px 0;
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 14px;
  font-size: 12.5px;
  color: rgba(255,255,255,0.35);
}
.footer__bar-links {
  display: inline-flex; align-items: center; gap: 10px;
}
.footer__bar-link {
  color: rgba(255,255,255,0.4);
  text-decoration: none;
  font-size: 12.5px;
  transition: color 0.2s;
}
.footer__bar-link:hover { color: #00b4d8; }
.footer__bar-sep { color: rgba(255,255,255,0.2); }

/* ── PLACEHOLDER NOTICE (shared) ── */
.placeholder-notice {
  display: flex; align-items: center; gap: 10px;
  max-width: 780px; margin: 40px auto 0;
  padding: 14px 22px;
  background: rgba(0,180,216,0.06);
  border: 1px dashed rgba(0,180,216,0.35);
  border-radius: 10px;
  font-size: 13px;
  color: #5a6b7e;
  justify-content: center;
  text-align: center;
}
.placeholder-notice__dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #00b4d8;
  flex-shrink: 0;
  animation: noticePulse 1.8s ease-in-out infinite;
}
@keyframes noticePulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.75); }
}

/* ── SOSTENIBILIDAD ── */
.susten-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 20px; max-width: 1100px; margin: 0 auto;
}
.susten-card {
  position: relative;
  padding: 40px 28px 32px;
  background: #fff;
  border-radius: 14px;
  border: 1px solid #e8ecf1;
  transition: all 0.3s;
}
.susten-card:hover {
  border-color: rgba(0,180,216,0.25);
  box-shadow: 0 12px 36px rgba(0,180,216,0.08);
  transform: translateY(-3px);
}
.susten-card__badge {
  position: absolute;
  top: 20px; right: 22px;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 42px; font-weight: 700;
  color: rgba(0,180,216,0.15);
  line-height: 1;
  letter-spacing: -0.02em;
}
.susten-card__title {
  font-size: 19px; font-weight: 700; color: #0a2a4a;
  margin: 0 0 12px;
  max-width: 70%;
}
.susten-card__text {
  font-size: 14px; line-height: 1.65; color: #5a6b7e;
  margin: 0;
}

/* ── PILARES ── */
.pilares-wrap {
  padding: 48px 24px 0;
  max-width: 1100px; margin: 0 auto;
}
.pilares-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 20px; margin-top: 24px;
}
.pilar-card {
  display: flex; flex-direction: column; align-items: center;
  text-align: center;
  padding: 36px 28px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid #e8ecf1;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  transition: all 0.3s;
}
.pilar-card:hover {
  border-color: #00b4d8;
  box-shadow: 0 10px 32px rgba(0,180,216,0.1);
  transform: translateY(-3px);
}
.pilar-card__icon {
  color: #00b4d8;
  width: 68px; height: 68px;
  border-radius: 50%;
  background: rgba(0,180,216,0.08);
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 18px;
  transition: all 0.3s;
}
.pilar-card:hover .pilar-card__icon {
  background: rgba(0,180,216,0.15);
  transform: scale(1.08);
}
.pilar-card__title {
  font-size: 18px; font-weight: 700; color: #0a2a4a;
  margin: 0 0 10px;
}
.pilar-card__text {
  font-size: 14px; color: #5a6b7e; line-height: 1.7; margin: 0;
}

/* ── CLIENTES (18 items: 6 cols) ── */
.clients-grid {
  display: grid; grid-template-columns: repeat(6, 1fr);
  gap: 14px; max-width: 1200px; margin: 0 auto;
}

/* ── SCROLLBAR ── */
  aspect-ratio: 16/9;
  background: #fff;
  border: 1px solid #e8ecf1;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.3s;
  padding: 14px;
}
.client-logo-card:hover {
  border-color: rgba(0,180,216,0.35);
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(0,180,216,0.08);
}
.client-logo-card__placeholder {
  display: flex; flex-direction: column; align-items: center; gap: 3px;
  color: #a7b5c4;
  transition: color 0.3s;
}
.client-logo-card:hover .client-logo-card__placeholder {
  color: #00b4d8;
}
.client-logo-card__placeholder svg {
  margin-bottom: 4px;
  opacity: 0.6;
}
.client-logo-card__name {
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: #0a2a4a;
}
.client-logo-card:hover .client-logo-card__name {
  color: #00b4d8;
}
.client-logo-card__sector {
  font-size: 10px;
  color: #8a9cad;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 2px;
}

/* ── BOLSA DE TRABAJO ── */
.bolsa-layout {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 60px; max-width: 1100px; margin: 0 auto;
  align-items: center;
}
.bolsa-perks {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 12px 20px;
  margin: 24px 0 32px;
}
.bolsa-perk {
  display: flex; align-items: center; gap: 10px;
  font-size: 14px; color: #3a4a5e; font-weight: 500;
}
.bolsa-perk__check {
  width: 26px; height: 26px; border-radius: 50%;
  background: rgba(0,180,216,0.1);
  color: #00b4d8;
  display: inline-flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.bolsa-perk__check svg { width: 13px; height: 13px; }
.bolsa-cta {
  display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
}
.bolsa-cta__or {
  font-size: 13px; color: #8a9cad; text-transform: uppercase;
  letter-spacing: 0.12em; font-weight: 600;
}
.btn--outline-dark {
  background: transparent;
  color: #0a2a4a;
  border: 1.5px solid #0a2a4a;
  padding: 12px 24px; border-radius: 8px;
  font-size: 14px; font-weight: 600;
  cursor: pointer; font-family: inherit;
  text-decoration: none;
  display: inline-flex; align-items: center;
  transition: all 0.25s;
}
.btn--outline-dark:hover {
  background: #0a2a4a; color: #fff;
}

.vacancy-panel {
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e8ecf1;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(10,42,74,0.08);
}
.vacancy-panel__header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 18px 24px;
  background: #0a2a4a;
  color: #fff;
}
.vacancy-panel__title {
  font-size: 14px; font-weight: 700; letter-spacing: 0.04em;
}
.vacancy-panel__badge {
  font-size: 10px; font-weight: 700;
  padding: 4px 10px; border-radius: 100px;
  background: rgba(0,180,216,0.25);
  color: #6fd4ea;
  letter-spacing: 0.08em; text-transform: uppercase;
}
.vacancy-empty {
  padding: 40px 32px;
  text-align: center;
}
.vacancy-empty__icon {
  width: 76px; height: 76px;
  border-radius: 50%;
  background: rgba(0,180,216,0.08);
  color: #00b4d8;
  display: inline-flex; align-items: center; justify-content: center;
  margin-bottom: 18px;
}
.vacancy-empty__title {
  font-size: 18px; font-weight: 700; color: #0a2a4a;
  margin: 0 0 8px;
}
.vacancy-empty__text {
  font-size: 14px; line-height: 1.65; color: #5a6b7e;
  margin: 0 0 24px;
}

/* Vacancy list with items */
.vacancy-list {
  display: flex; flex-direction: column;
  padding: 8px;
}
.vacancy-item {
  display: flex; align-items: center; justify-content: space-between;
  gap: 12px;
  padding: 16px 18px;
  border-radius: 10px;
  transition: background 0.22s;
  border: 1px solid transparent;
}
.vacancy-item:hover {
  background: #f0f9fc;
  border-color: rgba(0,180,216,0.15);
}
.vacancy-item__main {
  display: flex; flex-direction: column; gap: 4px;
  flex: 1; min-width: 0;
}
.vacancy-item__role {
  font-size: 15px; font-weight: 700; color: #0a2a4a;
  margin: 0;
}
.vacancy-item__meta {
  display: flex; align-items: center; gap: 8px;
  flex-wrap: wrap;
  font-size: 12px; color: #7a8b9e;
}
.vacancy-item__dot {
  width: 3px; height: 3px; border-radius: 50%;
  background: #c5cdd9;
}
.vacancy-item__btn {
  width: 38px; height: 38px;
  border-radius: 50%;
  background: #f0f9fc;
  color: #00b4d8;
  border: 1px solid rgba(0,180,216,0.15);
  display: inline-flex; align-items: center; justify-content: center;
  text-decoration: none;
  transition: all 0.22s cubic-bezier(.16,1,.3,1);
  flex-shrink: 0;
}
.vacancy-item__btn:hover {
  background: #00b4d8;
  color: #fff;
  transform: translateX(3px);
  box-shadow: 0 4px 14px rgba(0,180,216,0.3);
}
.vacancy-footer {
  display: flex; flex-direction: column; gap: 3px;
  padding: 16px 22px;
  background: #f6f8fb;
  border-top: 1px solid #e8ecf1;
  text-align: center;
}
.vacancy-footer__label {
  font-size: 10px; font-weight: 700;
  color: #00b4d8;
  letter-spacing: 0.14em; text-transform: uppercase;
}
.vacancy-footer__text {
  font-size: 12px; color: #7a8b9e;
}

.vacancy-contact {
  padding-top: 22px;
  border-top: 1px dashed #e8ecf1;
  display: flex; flex-direction: column; gap: 4px;
  align-items: center;
}
.vacancy-contact__label {
  font-size: 11px; font-weight: 700; color: #8a9cad;
  letter-spacing: 0.12em; text-transform: uppercase;
  margin-bottom: 4px;
}
.vacancy-contact__value {
  font-size: 13px; font-weight: 600; color: #00b4d8;
  text-decoration: none;
}
.vacancy-contact__value:hover { text-decoration: underline; }

/* ── FLOATING CONTACT BUTTONS ── */
.floating-contact {
  position: fixed;
  right: 24px;
  bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  z-index: 200;
  pointer-events: none;
}
.floating-btn {
  position: relative;
  pointer-events: auto;
  width: 58px; height: 58px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: #fff;
  text-decoration: none;
  box-shadow: 0 6px 20px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.12);
  transition: transform 0.28s cubic-bezier(.16,1,.3,1), box-shadow 0.28s ease, background 0.2s ease;
  animation: floatBtnIn 0.5s cubic-bezier(.16,1,.3,1) both;
}
.floating-btn:nth-child(1) { animation-delay: 0.15s; }
.floating-btn:nth-child(2) { animation-delay: 0.3s; }
@keyframes floatBtnIn {
  from { opacity: 0; transform: translateY(20px) scale(0.7); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
.floating-btn--whatsapp { background: #25D366; }
.floating-btn--whatsapp:hover { background: #1ebe5d; }
.floating-btn--email { background: #00b4d8; }
.floating-btn--email:hover { background: #0096b7; }
.floating-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 28px rgba(0,0,0,0.22), 0 4px 10px rgba(0,0,0,0.14);
}
.floating-btn:active { transform: translateY(-1px) scale(0.98); }
.floating-btn__icon { display: flex; align-items: center; justify-content: center; }
.floating-btn__tooltip {
  position: absolute;
  right: calc(100% + 14px);
  top: 50%;
  transform: translateY(-50%) translateX(8px);
  background: #0a2a4a;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  padding: 8px 14px;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.22s ease, transform 0.22s cubic-bezier(.16,1,.3,1);
  box-shadow: 0 4px 14px rgba(0,0,0,0.18);
}
.floating-btn__tooltip::after {
  content: "";
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 6px solid transparent;
  border-left-color: #0a2a4a;
}
.floating-btn:hover .floating-btn__tooltip {
  opacity: 1;
  transform: translateY(-50%) translateX(0);
}
/* Pulse ring on whatsapp for extra attention */
.floating-btn--whatsapp::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.55);
  animation: wappPulse 2.2s cubic-bezier(.16,1,.3,1) infinite;
}
@keyframes wappPulse {
  0%   { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.55); }
  70%  { box-shadow: 0 0 0 16px rgba(37, 211, 102, 0); }
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}

/* ── RESPONSIVE ── */
@media (max-width: 1100px) {
  .nav__logo-sub { display: none; }
  .nav__link { padding: 10px 10px; font-size: 13px; }
  .footer__main { grid-template-columns: 1fr 1fr; gap: 36px; }
  .hero { padding: 100px 40px 80px; }
  .hero__logo-img { width: 220px; }
  .hero__inner { gap: 40px; }
}
@media (max-width: 900px) {
  .nav__links { display: none !important; }
  .nav__cta:not(.mobile-menu .nav__cta) { display: none !important; }
  .nav__hamburger { display: block !important; }
  .nav__logo-sub { display: block; }
  .flot-grid { grid-template-columns: repeat(2, 1fr) !important; }
  /* Hero: apilar verticalmente en tablet */
  .hero__inner { flex-direction: column; text-align: center; gap: 32px; }
  .hero__divider { display: none; }
  .hero__logo-img { width: 180px; }
  .hero__content { align-items: center; }
  .hero__sub { max-width: 100%; }
  .hero__actions { justify-content: center; }
  .hero__stats { justify-content: center; }
}
@media (max-width: 768px) {
  .two-col { grid-template-columns: 1fr !important; }
  .serv-grid { grid-template-columns: 1fr !important; }
  .serv-grid--three { grid-template-columns: 1fr !important; }
  .flot-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .sector-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .contact-layout { grid-template-columns: 1fr !important; }
  .form-row { grid-template-columns: 1fr !important; }
  .counter-row { flex-direction: column; }
  .section { padding: 70px 20px; }
  .hero { padding: 90px 20px 70px; }
  .hero__logo-img { width: 150px; }
  .hero__stat-number { font-size: 28px; }
  .cert-bar__inner { gap: 16px; }
  .cert-badge { padding: 14px 18px; }
  .cert-badge__img-wrap { width: 68px; height: 68px; }
  .cert-badge__img { max-width: 68px; max-height: 68px; }
  .floating-contact { right: 16px; bottom: 16px; gap: 12px; }
  .floating-btn { width: 52px; height: 52px; }
  .floating-btn__tooltip { display: none; }
  .susten-grid { grid-template-columns: 1fr !important; }
  .clients-grid { grid-template-columns: repeat(3, 1fr) !important; }
  .pilares-grid { grid-template-columns: 1fr !important; }
  .bolsa-layout { grid-template-columns: 1fr !important; gap: 40px; }
  .bolsa-perks { grid-template-columns: 1fr !important; }
  .nav__logo-sub { display: none; }
  .nav__inner { height: 64px; }
  .mobile-menu { top: 64px; }
  .dept-selector { grid-template-columns: 1fr !important; }
  .footer__main { grid-template-columns: 1fr !important; gap: 32px; padding-bottom: 32px; }
  .footer__col--brand { max-width: 100%; }
  .footer__bar { flex-direction: column; text-align: center; gap: 10px; }
  .vacancy-item { padding: 12px 14px; }
  .vacancy-item__role { font-size: 14px; }
}
@media (max-width: 480px) {
  .hero__inner { gap: 24px; }
  .hero__logo-img { width: 120px; }
  .hero__stats { gap: 20px; }
  .flot-grid { grid-template-columns: 1fr !important; }
  .clients-grid { grid-template-columns: repeat(2, 1fr) !important; }
  .pilares-grid { grid-template-columns: 1fr !important; }
  .admin-vac-row { grid-template-columns: 1fr 1fr !important; }
}

/* ── CLIENT LOGO PLACEHOLDER ── */
.client-logo-card {
  aspect-ratio: 16/9;
  background: #fff;
  border: 1.5px dashed #d0d9e4;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.3s;
}
.client-logo-card:hover {
  border-color: rgba(0,180,216,0.35);
  background: #f8fafb;
}
.client-logo-placeholder {
  display: flex; align-items: center; justify-content: center;
  width: 100%; height: 100%;
}

/* ── ADMIN FAB ── */
.admin-fab {
  position: fixed;
  left: 20px; bottom: 20px;
  width: 40px; height: 40px;
  border-radius: 50%;
  background: rgba(10,42,74,0.65);
  border: 1px solid rgba(255,255,255,0.1);
  color: rgba(255,255,255,0.4);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  z-index: 199;
  transition: all 0.3s;
  backdrop-filter: blur(6px);
}
.admin-fab:hover {
  background: rgba(10,42,74,0.95);
  color: #fff;
  transform: rotate(45deg);
}

/* ── ADMIN MODAL ── */
.admin-overlay {
  position: fixed; inset: 0; z-index: 1000;
  background: rgba(0,0,0,0.55);
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
  backdrop-filter: blur(4px);
}
.admin-modal {
  background: #fff;
  border-radius: 18px;
  width: 100%; max-width: 660px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 24px 80px rgba(0,0,0,0.25);
}
.admin-modal__header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 24px 28px 18px;
  border-bottom: 1px solid #e8ecf1;
  position: sticky; top: 0; background: #fff; z-index: 1;
  border-radius: 18px 18px 0 0;
}
.admin-modal__title { font-size: 18px; font-weight: 800; color: #0a2a4a; }
.admin-modal__close {
  background: none; border: none; cursor: pointer;
  color: #7a8b9e; display: flex; padding: 4px; border-radius: 6px;
  transition: all 0.2s;
}
.admin-modal__close:hover { background: #f0f2f5; color: #0a2a4a; }
.admin-auth {
  padding: 32px 28px;
  display: flex; flex-direction: column; gap: 12px;
}
.admin-auth__label { font-size: 14px; color: #5a6b7e; }
.admin-body { padding: 20px 28px 28px; display: flex; flex-direction: column; }
.admin-section {
  padding: 18px 0;
  border-bottom: 1px solid #e8ecf1;
}
.admin-section:last-of-type { border-bottom: none; }
.admin-section__title {
  font-size: 11px; font-weight: 700; color: #00b4d8;
  text-transform: uppercase; letter-spacing: 0.12em;
  margin-bottom: 14px;
}
.admin-row {
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 10px; flex-wrap: wrap;
}
.admin-label { font-size: 13px; font-weight: 600; color: #0a2a4a; min-width: 160px; }
.admin-hint  { font-size: 12px; color: #7a8b9e; }
.admin-input {
  padding: 9px 13px; border-radius: 8px;
  border: 1px solid #d0d9e4; background: #f8fafb;
  font-size: 14px; font-family: inherit; color: #0a2a4a;
  outline: none; transition: border-color 0.2s; width: 100%;
}
.admin-input:focus { border-color: #00b4d8; box-shadow: 0 0 0 3px rgba(0,180,216,0.1); }
.admin-input--sm { width: 130px; flex-shrink: 0; }
.admin-vac-row {
  display: grid;
  grid-template-columns: 2fr 1.1fr 1.1fr 0.7fr 34px;
  gap: 7px; align-items: center;
  margin-bottom: 7px;
}
.admin-del {
  background: #fee2e2; border: none; border-radius: 6px;
  color: #dc2626; font-size: 13px; font-weight: 700;
  cursor: pointer; height: 38px; width: 34px;
  transition: all 0.18s;
}
.admin-del:hover { background: #fca5a5; }
.admin-add {
  background: #dcfce7; border: none; border-radius: 6px;
  color: #16a34a; font-size: 20px; font-weight: 700;
  cursor: pointer; height: 38px; width: 34px;
  transition: all 0.18s;
}
.admin-add:hover { background: #bbf7d0; }

/* ── SCROLLBAR ── */
::-webkit-scrollbar { width: 7px; }
::-webkit-scrollbar-track { background: #f6f8fb; }
::-webkit-scrollbar-thumb { background: #c0c8d2; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #a0aab5; }
`,T={truck:i.jsxs("svg",{width:"38",height:"38",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M1 3h15v13H1z"}),i.jsx("path",{d:"M16 8h4l3 3v5h-7V8z"}),i.jsx("circle",{cx:"5.5",cy:"18.5",r:"2.5"}),i.jsx("circle",{cx:"18.5",cy:"18.5",r:"2.5"})]}),shield:i.jsx("svg",{width:"38",height:"38",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),gps:i.jsxs("svg",{width:"38",height:"38",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"12",cy:"12",r:"10"}),i.jsx("circle",{cx:"12",cy:"12",r:"3"}),i.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"5"}),i.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"22"}),i.jsx("line",{x1:"2",y1:"12",x2:"5",y2:"12"}),i.jsx("line",{x1:"19",y1:"12",x2:"22",y2:"12"})]}),box:i.jsxs("svg",{width:"38",height:"38",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"}),i.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),i.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),snow:i.jsxs("svg",{width:"38",height:"38",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"12",y1:"2",x2:"12",y2:"22"}),i.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),i.jsx("line",{x1:"4.93",y1:"4.93",x2:"19.07",y2:"19.07"}),i.jsx("line",{x1:"19.07",y1:"4.93",x2:"4.93",y2:"19.07"})]}),user:i.jsxs("svg",{width:"38",height:"38",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),i.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),phone:i.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("path",{d:"M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.7 2.35a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.75.34 1.54.57 2.35.7A2 2 0 0122 16.92z"})}),mail:i.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),i.jsx("polyline",{points:"22,6 12,13 2,6"})]}),pin:i.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"}),i.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),chevron:i.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("polyline",{points:"6 9 12 15 18 9"})}),menu:i.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),i.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),i.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),close:i.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),i.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),arrow:i.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),i.jsx("polyline",{points:"12 5 19 12 12 19"})]}),car:i.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[i.jsx("rect",{x:"1",y:"6",width:"22",height:"12",rx:"2"}),i.jsx("path",{d:"M6 6V4a2 2 0 012-2h8a2 2 0 012 2v2"})]}),food:i.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[i.jsx("path",{d:"M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"}),i.jsx("line",{x1:"6",y1:"1",x2:"6",y2:"4"}),i.jsx("line",{x1:"10",y1:"1",x2:"10",y2:"4"}),i.jsx("line",{x1:"14",y1:"1",x2:"14",y2:"4"})]}),pill:i.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[i.jsx("path",{d:"M4.5 12.5l6-6a4.24 4.24 0 016 6l-6 6a4.24 4.24 0 01-6-6z"}),i.jsx("line",{x1:"10.5",y1:"8.5",x2:"15.5",y2:"13.5"})]}),store:i.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[i.jsx("path",{d:"M3 9l1-4h16l1 4"}),i.jsx("path",{d:"M3 9v10a2 2 0 002 2h14a2 2 0 002-2V9"}),i.jsx("path",{d:"M9 21V13h6v8"})]}),chip:i.jsxs("svg",{width:"34",height:"34",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[i.jsx("rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}),i.jsx("rect",{x:"9",y:"9",width:"6",height:"6"}),i.jsx("line",{x1:"9",y1:"2",x2:"9",y2:"4"}),i.jsx("line",{x1:"15",y1:"2",x2:"15",y2:"4"}),i.jsx("line",{x1:"9",y1:"20",x2:"9",y2:"22"}),i.jsx("line",{x1:"15",y1:"20",x2:"15",y2:"22"}),i.jsx("line",{x1:"2",y1:"9",x2:"4",y2:"9"}),i.jsx("line",{x1:"2",y1:"15",x2:"4",y2:"15"}),i.jsx("line",{x1:"20",y1:"9",x2:"22",y2:"9"}),i.jsx("line",{x1:"20",y1:"15",x2:"22",y2:"15"})]}),whatsapp:i.jsx("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"})}),atSymbol:i.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"12",cy:"12",r:"4"}),i.jsx("path",{d:"M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94"})]}),customs:i.jsxs("svg",{width:"38",height:"38",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}),i.jsx("path",{d:"M8 21h8"}),i.jsx("path",{d:"M12 17v4"}),i.jsx("path",{d:"M7 8h2"}),i.jsx("path",{d:"M15 8h2"}),i.jsx("path",{d:"M7 12h10"})]}),globe:i.jsxs("svg",{width:"38",height:"38",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"12",cy:"12",r:"10"}),i.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),i.jsx("path",{d:"M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"})]}),linkedin:i.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),instagram:i.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:i.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"})})},qa={yearFounded:2013,tripsCompleted:36e3},bn={whatsappNumber:"523312945392",whatsappMessage:"Hola, me gustaría obtener información sobre sus servicios",emailAddress:"recursoshumanos@s-sever.com",emailSubject:"Contacto desde la página web"},wn={ventas:{email:"gerencia.ventas@s-sever.com",label:"Ventas"},rh:{email:"recursoshumanos@s-sever.com",label:"Recursos Humanos"}},Wf="Sever2025",Yo=[{type:"link",label:"Nosotros",target:"nosotros"},{type:"dropdown",label:"Servicios",target:"servicios",items:[{label:"Transporte Terrestre",target:"servicios"},{label:"Importación y Exportación",target:"servicios"},{label:"Agencia Aduanal",target:"agencia-aduanal"},{label:"Capacidades",target:"capacidades"},{label:"Nuestra Flotilla",target:"flotilla"}]},{type:"link",label:"Sectores",target:"sectores"},{type:"link",label:"Sostenibilidad",target:"sostenibilidad"},{type:"link",label:"Clientes",target:"clientes"},{type:"link",label:"Bolsa de Trabajo",target:"bolsa-trabajo"},{type:"link",label:"Contacto",target:"contacto"}],Hf=[{name:"C-TPAT",img:"/ctpat-logo-arriba.png"},{name:"Transporte Limpio",img:"/certificacion-transportelimpio.png"},{name:"OEA",img:"/Sello-OEA.png",enProceso:!0},{name:"BASC",img:"/logobasc300-1.png",cert:"CERTIFIED MEXGDL00215-1-2"}],Qf=[{title:"Integridad",desc:"Honestidad y ética en cada paso que damos, construyendo relaciones de confianza con nuestros clientes y socios.",icon:i.jsxs("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),i.jsx("polyline",{points:"9 12 11 14 15 10"})]})},{title:"Excelencia y Crecimiento",desc:"Mejora continua y desarrollo constante en cada operación, impulsando la innovación para superar las expectativas.",icon:i.jsxs("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),i.jsx("polyline",{points:"17 6 23 6 23 12"})]})},{title:"Colaboración y Empatía",desc:"Un equipo unido por el respeto y el bien común, donde cada persona aporta lo mejor de sí misma.",icon:i.jsxs("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),i.jsx("circle",{cx:"9",cy:"7",r:"4"}),i.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),i.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]})}],Yf=[{icon:T.truck,title:"Transporte Terrestre",desc:"Caja Seca, refrigerada y congelada. Contenedores."},{icon:T.globe,title:"Importación y Exportación",desc:"Gestión completa de comercio internacional con cumplimiento normativo."},{icon:T.customs,title:"Agencia Aduanal",desc:"Trámites aduanales, clasificación arancelaria y permisos de comercio exterior."}],Kf=[{icon:T.globe,title:"Importación y Exportación",desc:"Gestionamos todos los procesos de importación y exportación, incluyendo documentación, aranceles e impuestos, asegurando el cumplimiento de regulaciones y optimizando costos y tiempos de envío."},{icon:T.customs,title:"Trámites de Aduana y Comercio Exterior",desc:"Gestión integral de trámites aduanales: clasificación arancelaria, permisos, certificación de origen, inspección de mercancías y cálculo y pago de impuestos y derechos aduaneros."},{icon:T.shield,title:"Previos en Origen",desc:"Inspecciones antes del embarque para asegurar el cumplimiento normativo, evitando retenciones, multas y retrasos. Contamos con inspectores acreditados que garantizan la integridad de la mercancía."}],Xf=[{icon:T.gps,title:"Operación y Control",desc:"Monitoreo 24/7 y gestión operativa centralizada."},{icon:T.truck,title:"Infraestructura Flexible",desc:"Flota dedicada y soluciones adaptadas a cada tipo de carga."},{icon:T.box,title:"Cobertura y Logística",desc:"Operación nacional y transfronteriza con entregas multipunto."},{icon:T.globe,title:"Comercio Exterior",desc:"Gestión integral aduanal y liberación de mercancía."},{icon:T.shield,title:"Seguridad Certificada",desc:"Cumplimiento con estándares internacionales de calidad y seguridad."}],Gf=[{img:"/1.5ton.jpg",label:"Camioneta 1.5 TON",capacidad:"3,000 lbs",tarimas:"2 – 6 tarimas",idealPara:"Distribución local y entregas urbanas de alta frecuencia."},{img:"/RABON.jpg",label:"Rabón 3 – 10 TON",capacidad:"6,000 – 20,000 lbs",tarimas:"6 – 12 tarimas",idealPara:"Carga regional, rutas de mediana distancia y entregas dedicadas."},{img:"/torton.jpg",label:"Tortón 14 TON",capacidad:"30,000 lbs",tarimas:"12 tarimas",idealPara:"Distribución mayorista y entregas de larga distancia."},{img:"/tracto.jpg",label:"Tractocamión 26 TON",capacidad:"52,000 lbs",tarimas:"Hasta 24 tarimas",idealPara:"Transporte de larga distancia, carga masiva e importación/exportación."}],Zf=[{icon:T.car,name:"Automotriz"},{icon:T.food,name:"Alimentos y Bebidas"},{icon:T.pill,name:"Farmacéutica"},{icon:T.store,name:"Retail y Comercio"},{icon:T.chip,name:"Electrónica"},{icon:T.box,name:"Manufactura"}],Jf=[{title:"Transporte Limpio",desc:"Certificados por SEMARNAT con compromiso de medición y reducción continua de emisiones contaminantes."},{title:"Flotilla Eficiente",desc:"Unidades modernas con tecnologías de bajo consumo y monitoreo de rendimiento de combustible."},{title:"Operación Responsable",desc:"Capacitación continua en manejo eficiente, mantenimiento preventivo y cultura ambiental."}],qf=[{role:"Operador de Tractocamión",type:"Tiempo completo",location:"Guadalajara, Jal.",exp:"3+ años"},{role:"Auxiliar de Logística",type:"Tiempo completo",location:"Monterrey, N.L.",exp:"1-2 años"},{role:"Coordinador de Operaciones",type:"Tiempo completo",location:"Guadalajara, Jal.",exp:"5+ años"},{role:"Ejecutivo de Ventas",type:"Tiempo completo",location:"Híbrido",exp:"2+ años"}],ep=["Estabilidad laboral","Capacitación continua","Prestaciones superiores","Ambiente colaborativo"],At={year:"sever_year",trips:"sever_trips",vacs:"sever_vacs"},Zl=(e,t)=>{try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},Jl=(e,t)=>{try{localStorage.setItem(e,JSON.stringify(t))}catch{}};function tp(){const[e,t]=B.useState(()=>Zl(At.year,qa.yearFounded)),[n,r]=B.useState(()=>Zl(At.trips,qa.tripsCompleted)),[l,o]=B.useState(()=>Zl(At.vacs,qf));return{adminYear:e,setAdminYear:t,adminTrips:n,setAdminTrips:r,adminVacs:l,setAdminVacs:o,persist:()=>{Jl(At.year,e),Jl(At.trips,n),Jl(At.vacs,l)}}}function np({onNavigate:e}){const[t,n]=B.useState(!1),[r,l]=B.useState(null),o=B.useRef(null);B.useEffect(()=>{const s=u=>{o.current&&!o.current.contains(u.target)&&l(null)};if(r!==null)return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[r]);const a=s=>{n(!1),l(null),e(s)};return i.jsxs(i.Fragment,{children:[i.jsx("nav",{className:"nav",children:i.jsxs("div",{className:"nav__inner",children:[i.jsxs("div",{className:"nav__logo",onClick:()=>a("hero"),children:[i.jsx("img",{src:"/sever-logo.png",alt:"Soluciones Sever",className:"nav__logo-img"}),i.jsxs("div",{children:[i.jsx("div",{className:"nav__logo-text",children:"SEVER"}),i.jsx("div",{className:"nav__logo-sub",children:"SOLUCIONES LOGÍSTICAS"})]})]}),i.jsx("div",{className:"nav__links",ref:o,children:Yo.map((s,u)=>{if(s.type==="dropdown"){const d=r===u;return i.jsxs("div",{className:"nav__dropdown-wrap",children:[i.jsxs("button",{className:`nav__link nav__link--dropdown ${d?"nav__link--active":""}`,onClick:()=>l(d?null:u),"aria-expanded":d,children:[s.label,i.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",style:{marginLeft:5,transition:"transform .2s",transform:d?"rotate(180deg)":"rotate(0)"},children:i.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),d&&i.jsx("div",{className:"nav__dropdown",children:s.items.map(h=>i.jsx("button",{className:"nav__dropdown-item",onClick:()=>a(h.target),children:h.label},h.label))})]},s.label)}return i.jsx("button",{onClick:()=>a(s.target),className:"nav__link",children:s.label},s.target)})}),i.jsx("button",{className:"nav__cta",onClick:()=>a("contacto"),children:"Solicitar Cotización"}),i.jsx("button",{className:"nav__hamburger",onClick:()=>n(!t),children:t?T.close:T.menu})]})}),t&&i.jsxs("div",{className:"mobile-menu",children:[Yo.map(s=>s.type==="dropdown"?i.jsxs("div",{className:"mobile-menu__group",children:[i.jsx("div",{className:"mobile-menu__group-title",children:s.label}),s.items.map(u=>i.jsx("button",{onClick:()=>a(u.target),className:"mobile-menu__link mobile-menu__link--sub",children:u.label},u.label))]},s.label):i.jsx("button",{onClick:()=>a(s.target),className:"mobile-menu__link",children:s.label},s.target)),i.jsx("button",{className:"nav__cta",onClick:()=>a("contacto"),style:{marginTop:12,width:"100%"},children:"Solicitar Cotización"})]})]})}function rp(){return i.jsxs("div",{className:"floating-contact",role:"complementary","aria-label":"Contacto rápido",children:[i.jsxs("a",{href:`https://wa.me/${bn.whatsappNumber}?text=${encodeURIComponent(bn.whatsappMessage)}`,target:"_blank",rel:"noopener noreferrer",className:"floating-btn floating-btn--whatsapp","aria-label":"Contactar por WhatsApp",children:[i.jsx("span",{className:"floating-btn__icon",children:T.whatsapp}),i.jsx("span",{className:"floating-btn__tooltip",children:"Chatea con nosotros"})]}),i.jsxs("a",{href:`mailto:${bn.emailAddress}?subject=${encodeURIComponent(bn.emailSubject)}`,className:"floating-btn floating-btn--email","aria-label":"Enviar correo electrónico",children:[i.jsx("span",{className:"floating-btn__icon",children:T.atSymbol}),i.jsx("span",{className:"floating-btn__tooltip",children:"Enviar correo"})]})]})}function fc(e,t=2200,n=!1){const[r,l]=B.useState(0);return B.useEffect(()=>{if(!n)return;let o=null;const a=s=>{o||(o=s);const u=Math.min((s-o)/t,1);l(Math.floor((1-Math.pow(1-u,3))*e)),u<1&&requestAnimationFrame(a)};requestAnimationFrame(a)},[e,t,n]),r}function Bi(e={}){const t=B.useRef(null),[n,r]=B.useState(!1);return B.useEffect(()=>{const l=t.current;if(!l)return;const o=new IntersectionObserver(([a])=>{a.isIntersecting&&r(!0)},{threshold:.15,...e});return o.observe(l),()=>o.disconnect()},[]),[t,n]}function I({children:e,delay:t=0,className:n=""}){const[r,l]=Bi();return i.jsx("div",{ref:r,className:n,style:{opacity:l?1:0,transform:l?"translateY(0)":"translateY(28px)",transition:`opacity 0.7s cubic-bezier(.16,1,.3,1) ${t}s, transform 0.7s cubic-bezier(.16,1,.3,1) ${t}s`},children:e})}function lp({onNavigate:e,adminYear:t,adminTrips:n}){const[r,l]=Bi(),o=fc(n,2200,l);return i.jsxs("section",{id:"hero",className:"hero",children:[i.jsxs("div",{className:"hero__inner",children:[i.jsx(I,{children:i.jsx("div",{className:"hero__logo-side",children:i.jsx("img",{src:"/sever-logo.png",alt:"Soluciones Sever",className:"hero__logo-img"})})}),i.jsx("div",{className:"hero__divider"}),i.jsxs("div",{className:"hero__content",children:[i.jsx(I,{delay:.08,children:i.jsx("p",{className:"hero__label",children:"SOLUCIONES LOGÍSTICAS INTEGRALES"})}),i.jsx(I,{delay:.15,children:i.jsxs("h1",{className:"hero__title",children:["Conectamos tu carga",i.jsx("br",{}),"con su destino"]})}),i.jsx(I,{delay:.25,children:i.jsx("p",{className:"hero__sub",children:"Servicio Especializado de Autotransporte local, foráneo y a frontera con EUA. Seguridad, eficiencia y tecnología en cada viaje."})}),i.jsx(I,{delay:.35,children:i.jsxs("div",{className:"hero__actions",children:[i.jsxs("button",{className:"btn btn--primary",onClick:()=>e("contacto"),children:["Solicitar Cotización ",T.arrow]}),i.jsx("button",{className:"btn btn--outline",onClick:()=>e("servicios"),children:"Ver Servicios"})]})}),i.jsx(I,{delay:.45,children:i.jsxs("div",{ref:r,className:"hero__stats",children:[i.jsxs("div",{className:"hero__stat",children:[i.jsxs("span",{className:"hero__stat-number",children:[new Date().getFullYear()-t,"+"]}),i.jsx("span",{className:"hero__stat-label",children:"Años de experiencia"})]}),i.jsx("div",{className:"hero__stat-sep"}),i.jsxs("div",{className:"hero__stat",children:[i.jsxs("span",{className:"hero__stat-number",children:["+",o.toLocaleString()]}),i.jsx("span",{className:"hero__stat-label",children:"Viajes completados"})]})]})})]})]}),i.jsx("div",{className:"hero__scroll",onClick:()=>e("certificaciones"),children:T.chevron})]})}function op(){return i.jsx("section",{id:"certificaciones",className:"cert-bar",children:i.jsx("div",{className:"cert-bar__inner",children:Hf.map((e,t)=>i.jsx(I,{delay:t*.08,children:i.jsxs("div",{className:"cert-badge",children:[i.jsx("div",{className:"cert-badge__img-wrap",children:i.jsx("img",{src:e.img,alt:e.name,className:"cert-badge__img"})}),i.jsxs("div",{className:"cert-badge__tooltip",children:[i.jsx("span",{className:"cert-badge__tooltip-name",children:e.name}),e.cert&&i.jsx("span",{className:"cert-badge__tooltip-cert",children:e.cert}),e.enProceso&&i.jsx("span",{className:"cert-badge__tooltip-proc",children:"En proceso"})]})]})},e.name))})})}function ip({adminYear:e,adminTrips:t}){const[n,r]=Bi(),l=fc(t,2200,r);return i.jsxs("section",{id:"nosotros",className:"section section--light",children:[i.jsxs("div",{className:"section__inner two-col",children:[i.jsx(I,{children:i.jsxs("div",{children:[i.jsx("p",{className:"section__label",children:"QUIÉNES SOMOS"}),i.jsxs("h2",{className:"section__title",children:["Acerca de",i.jsx("br",{}),"Soluciones Sever"]}),i.jsx("p",{className:"section__text",children:"Soluciones Sever inició operaciones en mayo de 2013, con el firme propósito de ofrecer un Servicio Especializado de Autotransporte local, foráneo y a frontera con EUA, satisfaciendo las necesidades del transporte y logística en la distribución de mercancía."}),i.jsxs("div",{ref:n,className:"counter-row",children:[i.jsxs("div",{className:"counter-item",children:[i.jsxs("span",{className:"counter-item__number",children:[new Date().getFullYear()-e,"+"]}),i.jsx("span",{className:"counter-item__label",children:"Años de experiencia"})]}),i.jsxs("div",{className:"counter-item",children:[i.jsxs("span",{className:"counter-item__number",children:[l.toLocaleString(),"+"]}),i.jsx("span",{className:"counter-item__label",children:"Viajes completados"})]})]})]})}),i.jsxs("div",{className:"mv-cards",children:[i.jsx(I,{delay:.1,children:i.jsxs("div",{className:"mv-card",children:[i.jsx("h3",{className:"mv-card__title",children:"Misión"}),i.jsx("p",{className:"mv-card__text",children:"Somos una empresa de servicios logísticos y de transporte. Ofrecemos a nuestros clientes soluciones a la medida, buscando la excelencia y rentabilidad con niveles óptimos de calidad y seguridad a través de la innovación y mejora continua."})]})}),i.jsx(I,{delay:.2,children:i.jsxs("div",{className:"mv-card",children:[i.jsx("h3",{className:"mv-card__title",children:"Visión"}),i.jsx("p",{className:"mv-card__text",children:"Posicionarnos como una de las empresas más especializadas y reconocidas en el sector de transporte y logística, ampliando nuestro alcance a nivel nacional e internacional con soluciones innovadoras."})]})})]})]}),i.jsxs("div",{className:"pilares-wrap",children:[i.jsx(I,{children:i.jsx("p",{className:"section__label",style:{textAlign:"center"},children:"NUESTROS PILARES"})}),i.jsx("div",{className:"pilares-grid",children:Qf.map((o,a)=>i.jsx(I,{delay:a*.1,children:i.jsxs("div",{className:"pilar-card",children:[i.jsx("div",{className:"pilar-card__icon",children:o.icon}),i.jsx("h3",{className:"pilar-card__title",children:o.title}),i.jsx("p",{className:"pilar-card__text",children:o.desc})]})},a))})]})]})}function ap(){return i.jsxs("section",{id:"servicios",className:"section section--white",children:[i.jsxs(I,{children:[i.jsx("p",{className:"section__label",style:{textAlign:"center"},children:"NUESTROS SERVICIOS"}),i.jsx("h2",{className:"section__title",style:{textAlign:"center"},children:"Soluciones de Transporte"})]}),i.jsx("div",{className:"serv-grid serv-grid--three",children:Yf.map((e,t)=>i.jsx(I,{delay:t*.1,children:i.jsxs("div",{className:"serv-card",children:[i.jsx("div",{className:"serv-card__icon",children:e.icon}),i.jsx("h3",{className:"serv-card__title",children:e.title}),i.jsx("p",{className:"serv-card__text",children:e.desc})]})},t))})]})}function sp(){return i.jsxs("section",{id:"agencia-aduanal",className:"section section--light",children:[i.jsxs(I,{children:[i.jsx("p",{className:"section__label",style:{textAlign:"center"},children:"AGENCIA ADUANAL"}),i.jsx("h2",{className:"section__title",style:{textAlign:"center"},children:"Gestión Aduanal Integral"})]}),i.jsx("div",{className:"serv-grid serv-grid--three",children:Kf.map((e,t)=>i.jsx(I,{delay:t*.1,children:i.jsxs("div",{className:"serv-card",children:[i.jsx("div",{className:"serv-card__icon",children:e.icon}),i.jsx("h3",{className:"serv-card__title",children:e.title}),i.jsx("p",{className:"serv-card__text",children:e.desc})]})},t))})]})}function up(){return i.jsxs("section",{id:"capacidades",className:"section section--white",children:[i.jsx(I,{children:i.jsx("h2",{className:"section__title",style:{textAlign:"center"},children:"Capacidades"})}),i.jsx("div",{className:"serv-grid",children:Xf.map((e,t)=>i.jsx(I,{delay:t*.07,children:i.jsxs("div",{className:"serv-card",children:[i.jsx("div",{className:"serv-card__icon",children:e.icon}),i.jsx("h3",{className:"serv-card__title",children:e.title}),i.jsx("p",{className:"serv-card__text",children:e.desc})]})},t))})]})}function cp(){return i.jsxs("section",{id:"flotilla",className:"section section--light",children:[i.jsxs(I,{children:[i.jsx("p",{className:"section__label",style:{textAlign:"center"},children:"FLOTILLA"}),i.jsx("h2",{className:"section__title",style:{textAlign:"center"},children:"Nuestra Flota Vehicular"}),i.jsx("p",{className:"section__text",style:{textAlign:"center",maxWidth:600,margin:"0 auto 40px"},children:"Contamos con unidades modernas y en óptimas condiciones, equipadas con la última tecnología en seguridad y rastreo satelital."})]}),i.jsx("div",{className:"flot-grid",children:Gf.map((e,t)=>i.jsx(I,{delay:t*.08,children:i.jsxs("div",{className:"flot-card",children:[i.jsx("div",{className:"flot-card__image",children:i.jsx("img",{src:e.img,alt:e.label,className:"flot-card__img"})}),i.jsxs("div",{className:"flot-card__body",children:[i.jsx("span",{className:"flot-card__label",children:e.label}),i.jsxs("div",{className:"flot-card__specs",children:[i.jsxs("div",{className:"flot-spec",children:[i.jsx("span",{className:"flot-spec__key",children:"Capacidad"}),i.jsx("span",{className:"flot-spec__val",children:e.capacidad})]}),i.jsxs("div",{className:"flot-spec",children:[i.jsx("span",{className:"flot-spec__key",children:"Tarimas"}),i.jsx("span",{className:"flot-spec__val",children:e.tarimas})]}),i.jsxs("div",{className:"flot-spec flot-spec--full",children:[i.jsx("span",{className:"flot-spec__key",children:"Ideal para"}),i.jsx("span",{className:"flot-spec__val",children:e.idealPara})]})]})]})]})},t))})]})}function dp(){return i.jsxs("section",{id:"sectores",className:"section section--white",children:[i.jsxs(I,{children:[i.jsx("p",{className:"section__label",style:{textAlign:"center"},children:"SECTORES"}),i.jsx("h2",{className:"section__title",style:{textAlign:"center"},children:"Industrias que Servimos"})]}),i.jsx("div",{className:"sector-grid",children:Zf.map((e,t)=>i.jsx(I,{delay:t*.06,children:i.jsxs("div",{className:"sector-card",children:[i.jsx("div",{className:"sector-card__icon",children:e.icon}),i.jsx("span",{className:"sector-card__name",children:e.name})]})},t))})]})}function fp(){return i.jsxs("section",{id:"sostenibilidad",className:"section section--light",children:[i.jsxs(I,{children:[i.jsx("p",{className:"section__label",style:{textAlign:"center"},children:"SOSTENIBILIDAD"}),i.jsx("h2",{className:"section__title",style:{textAlign:"center"},children:"Compromiso con el Medio Ambiente"}),i.jsx("p",{className:"section__text",style:{textAlign:"center",maxWidth:680,margin:"0 auto 48px"},children:"En Soluciones Sever trabajamos bajo los lineamientos del programa Transporte Limpio de la SEMARNAT, reduciendo emisiones y adoptando prácticas responsables en cada operación."})]}),i.jsx("div",{className:"susten-grid",children:Jf.map((e,t)=>i.jsx(I,{delay:t*.08,children:i.jsxs("div",{className:"susten-card",children:[i.jsx("div",{className:"susten-card__badge",children:String(t+1).padStart(2,"0")}),i.jsx("h3",{className:"susten-card__title",children:e.title}),i.jsx("p",{className:"susten-card__text",children:e.desc})]})},t))})]})}const pp=[{src:"/Bamberger-logo.png",alt:"Bamberger Polymers"},{src:"/baywa.png",alt:"BayWa r.e."},{src:"/cablogistic.png",alt:"Cab Logistics"},{src:"/CBI-LOGO-1-.png",alt:"CBI Group"},{src:"/cropped-Logo-PiSA-01-1109x800.png",alt:"PiSA Farmacéutica"},{src:"/doz.png",alt:"Doza Logística",big:!0},{src:"/Frialsa.png",alt:"Frialsa"},{src:"/halter.png",alt:"Halter Logistics"},{src:"/KraftHeinz.svg.png",alt:"Kraft Heinz"},{src:"/kuehe.png",alt:"Kuehne+Nagel"},{src:"/la moderna.png",alt:"La Moderna"},{src:"/2go.png",alt:"2GO Logistics"},{src:"/logo-e1649172202358.png",alt:"Valle Redondo"},{src:"/polnac.png",alt:"Polnac"},{src:"/servibolsa.png",alt:"Servibolsa"},{src:"/solistica.png",alt:"Solistica"},{src:"/tuk_logo_nuevo.png",alt:"Tuk Cintas Adhesivas"},{src:"/Walmart-Logo.png",alt:"Walmart"}];function mp(){return i.jsxs("section",{id:"clientes",className:"section section--white",children:[i.jsxs(I,{children:[i.jsx("p",{className:"section__label",style:{textAlign:"center"},children:"CLIENTES"}),i.jsx("h2",{className:"section__title",style:{textAlign:"center"},children:"Quiénes confían en nosotros"}),i.jsx("p",{className:"section__text",style:{textAlign:"center",maxWidth:620,margin:"0 auto 48px"},children:"Acompañamos a grandes empresas farmacéuticas, cadenas de autoservicio, operadores logísticos internacionales y fabricantes en su operación diaria."})]}),i.jsx("div",{className:"clients-grid",children:pp.map((e,t)=>i.jsx(I,{delay:t*.03,children:i.jsx("div",{className:"client-logo-card",children:i.jsx("div",{className:"client-logo-placeholder",style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"16px",height:"100%"},children:i.jsx("img",{src:e.src,alt:e.alt,style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",...e.big&&{transform:"scale(2.2)",transformOrigin:"center"}}})})})},t))})]})}function hp({vacancies:e}){return!e||e.length===0?i.jsx("p",{style:{padding:24,color:"#7a8b9e",fontSize:14,textAlign:"center"},children:"No hay vacantes publicadas en este momento."}):i.jsx("div",{className:"vacancy-list",children:e.map((t,n)=>i.jsxs("div",{className:"vacancy-item",children:[i.jsxs("div",{className:"vacancy-item__main",children:[i.jsx("h4",{className:"vacancy-item__role",children:t.role}),i.jsxs("div",{className:"vacancy-item__meta",children:[i.jsx("span",{children:t.type}),i.jsx("span",{className:"vacancy-item__dot"}),i.jsx("span",{children:t.location}),i.jsx("span",{className:"vacancy-item__dot"}),i.jsx("span",{children:t.exp})]})]}),i.jsx("a",{href:`mailto:recursoshumanos@s-sever.com?subject=${encodeURIComponent(`Postulación: ${t.role}`)}`,className:"vacancy-item__btn","aria-label":`Postular a ${t.role}`,children:T.arrow})]},n))})}function gp({vacancies:e}){return i.jsx("section",{id:"bolsa-trabajo",className:"section section--light",children:i.jsxs("div",{className:"bolsa-layout",children:[i.jsx(I,{children:i.jsxs("div",{className:"bolsa-left",children:[i.jsx("p",{className:"section__label",children:"BOLSA DE TRABAJO"}),i.jsxs("h2",{className:"section__title",children:["Únete al",i.jsx("br",{}),"Equipo Sever"]}),i.jsx("p",{className:"section__text",children:"Somos una empresa que crece con su gente. Si buscas formar parte de un equipo profesional comprometido con la excelencia operativa y la seguridad, queremos conocerte."}),i.jsx("div",{className:"bolsa-perks",children:ep.map((t,n)=>i.jsxs("div",{className:"bolsa-perk",children:[i.jsx("span",{className:"bolsa-perk__check",children:T.arrow}),i.jsx("span",{children:t})]},n))}),i.jsxs("div",{className:"bolsa-cta",children:[i.jsxs("a",{href:`mailto:recursoshumanos@s-sever.com?subject=${encodeURIComponent("Envío de CV - Bolsa de Trabajo")}`,className:"btn btn--primary",children:["Enviar mi CV ",T.arrow]}),i.jsx("span",{className:"bolsa-cta__or",children:"o"}),i.jsx("a",{href:"tel:+523312945392",className:"btn btn--outline-dark",children:"Llamar a RH"})]})]})}),i.jsx(I,{delay:.15,children:i.jsx("div",{className:"bolsa-right",children:i.jsxs("div",{className:"vacancy-panel",children:[i.jsx("div",{className:"vacancy-panel__header",children:i.jsx("span",{className:"vacancy-panel__title",children:"Vacantes Disponibles"})}),i.jsx(hp,{vacancies:e})]})})})]})})}function xp(){const[e,t]=B.useState({nombre:"",apellido:"",email:"",telefono:"",mensaje:"",departamento:"ventas"}),[n,r]=B.useState(!1),l=o=>{o.preventDefault();const a=wn[e.departamento]||wn.ventas,s=`Contacto desde sitio web — ${a.label} — ${e.nombre} ${e.apellido}`,u=[`Nombre: ${e.nombre} ${e.apellido}`,`Email: ${e.email}`,`Teléfono: ${e.telefono||"(no proporcionado)"}`,`Departamento: ${a.label}`,"","Mensaje:",e.mensaje,"","---","Enviado desde solucionessever.com"];window.location.href=`mailto:${a.email}?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(u.join(`
`))}`,r(!0),setTimeout(()=>r(!1),5e3),t({nombre:"",apellido:"",email:"",telefono:"",mensaje:"",departamento:e.departamento})};return i.jsxs("div",{className:"contact-form-wrap",children:[i.jsxs("div",{className:"contact-form-wrap__header",children:[i.jsx("div",{className:"contact-tab__icon-wrap",children:T.mail}),i.jsx("span",{className:"contact-form-wrap__title",children:"Enviar Mensaje"})]}),n?i.jsxs("div",{className:"form-success",children:[i.jsx("div",{className:"form-success__check",children:"✓"}),i.jsx("p",{className:"form-success__title",children:"Abriendo tu correo..."}),i.jsxs("p",{className:"form-success__text",children:["Se abrió tu cliente de correo con el mensaje listo para ",i.jsx("strong",{children:wn[e.departamento].label}),". Solo confirma el envío."]})]}):i.jsxs("form",{className:"contact-form",onSubmit:l,children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Departamento"}),i.jsx("div",{className:"dept-selector",children:Object.entries(wn).map(([o,a])=>i.jsxs("button",{type:"button",className:`dept-pill ${e.departamento===o?"dept-pill--active":""}`,onClick:()=>t({...e,departamento:o}),children:[i.jsx("span",{className:"dept-pill__icon",children:o==="ventas"?T.phone:T.user}),i.jsx("span",{children:a.label})]},o))})]}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Nombre"}),i.jsx("input",{className:"form-input",placeholder:"Tu nombre",value:e.nombre,onChange:o=>t({...e,nombre:o.target.value}),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Apellido"}),i.jsx("input",{className:"form-input",placeholder:"Tu apellido",value:e.apellido,onChange:o=>t({...e,apellido:o.target.value}),required:!0})]})]}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Email"}),i.jsx("input",{className:"form-input",type:"email",placeholder:"correo@ejemplo.com",value:e.email,onChange:o=>t({...e,email:o.target.value}),required:!0})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Teléfono"}),i.jsx("input",{className:"form-input",type:"tel",placeholder:"(33) 0000-0000",value:e.telefono,onChange:o=>t({...e,telefono:o.target.value})})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Mensaje"}),i.jsx("textarea",{className:"form-input form-input--ta",placeholder:e.departamento==="ventas"?"Describe tu necesidad de transporte o solicita una cotización...":"Cuéntanos sobre tu perfil profesional o interés en postularte...",value:e.mensaje,onChange:o=>t({...e,mensaje:o.target.value}),required:!0})]}),i.jsxs("button",{type:"submit",className:"btn btn--primary",style:{width:"100%"},children:["Enviar a ",wn[e.departamento].label," ",T.arrow]}),i.jsx("p",{className:"form-note",children:"Al enviar se abrirá tu cliente de correo con el mensaje pre-llenado."})]})]})}const vp=[{key:"ventas",badge:"Ventas",iconKey:"phone",rows:[{label:"Teléfono",value:"+52 (81) 1910 3303",link:"tel:+528119103303"},{label:"Email",value:"gerencia.ventas@s-sever.com",link:"mailto:gerencia.ventas@s-sever.com"}]},{key:"rh",badge:"Recursos Humanos",iconKey:"user",rows:[{label:"Teléfono",value:"+52 (33) 1294 5392",link:"tel:+523312945392"},{label:"Email",value:"recursoshumanos@s-sever.com",link:"mailto:recursoshumanos@s-sever.com"}]}];function yp(){const[e,t]=B.useState("ventas");return i.jsxs("section",{id:"contacto",className:"section section--dark",children:[i.jsxs(I,{children:[i.jsx("p",{className:"section__label",style:{textAlign:"center",color:"#00b4d8"},children:"CONTACTO"}),i.jsx("h2",{className:"section__title",style:{textAlign:"center",color:"#fff"},children:"Trabajemos Juntos"})]}),i.jsxs("div",{className:"contact-layout",children:[i.jsxs("div",{className:"contact-cards",children:[vp.map(n=>i.jsxs("div",{className:`contact-tab ${e===n.key?"contact-tab--active":""}`,onClick:()=>t(n.key),children:[i.jsxs("div",{className:"contact-tab__header",children:[i.jsx("div",{className:"contact-tab__icon-wrap",children:T[n.iconKey]}),i.jsx("span",{className:"contact-tab__badge",children:n.badge})]}),e===n.key&&i.jsx("div",{className:"contact-tab__body",children:n.rows.map(r=>i.jsxs("div",{className:"contact-tab__row",children:[i.jsx("span",{className:"contact-tab__label",children:r.label}),r.link?i.jsx("a",{href:r.link,className:"contact-tab__value contact-tab__value--link",children:r.value}):i.jsx("span",{className:"contact-tab__value",children:r.value})]},r.label))})]},n.key)),i.jsxs("div",{className:"contact-map-hint",children:[i.jsx("div",{className:"contact-map-hint__icon",children:T.pin}),i.jsx("span",{className:"contact-map-hint__text",children:"Zapopan y Tlajomulco de Zúñiga, Jalisco, México"})]})]}),i.jsx(xp,{})]})]})}function _p({onClose:e}){return i.jsx("div",{style:kn.overlay,children:i.jsxs("div",{style:kn.modal,children:[i.jsx("button",{onClick:e,style:kn.closeBtn,children:"Cerrar"}),i.jsx("h2",{style:kn.title,children:"Aviso de Privacidad"}),i.jsxs("div",{style:kn.content,children:[i.jsx("p",{children:"El presente Aviso de Privacidad tiene como objetivo informar a los usuarios y clientes de Soluciones Sever, ubicada en AV. Ignacio L Vallarta 6503, Colonia Ciudad Granja, Ciudad Zapopan, Jalisco, C.P. 45010, teléfono 3317287405, acerca del tratamiento y protección de sus datos personales de acuerdo con lo establecido en la legislación vigente en materia de protección de datos personales."}),i.jsx("p",{children:"1. Responsable de los datos personales: Soluciones Sever es la entidad responsable del tratamiento de sus datos personales y se compromete a proteger la privacidad de los mismos de acuerdo con las disposiciones legales aplicables."}),i.jsxs("p",{children:["2. Datos personales recabados: Soluciones Sever podrá recabar y tratar los siguientes datos personales, entre otros:",i.jsx("br",{}),"- Información de identificación: Nombre completo, dirección, número telefónico, dirección de correo electrónico.",i.jsx("br",{}),"- Datos de contacto: Número telefónico y dirección de correo electrónico.",i.jsx("br",{}),"- Información financiera: Número de cuenta bancaria, datos de tarjeta de crédito o débito para realizar pagos.",i.jsx("br",{}),"- Información laboral: Puesto, empresa en la que labora y datos de contacto laboral."]}),i.jsxs("p",{children:["3. Finalidades del tratamiento: Los datos personales recabados serán utilizados para las siguientes finalidades:",i.jsx("br",{}),"- Proveer los productos y servicios solicitados por el cliente.",i.jsx("br",{}),"- Realizar la facturación y cobranza correspondiente por los productos y servicios adquiridos.",i.jsx("br",{}),"- Brindar atención y soporte al cliente.",i.jsx("br",{}),"- Enviar información promocional, publicitaria o de interés sobre nuestros productos y servicios.",i.jsx("br",{}),"- Realizar estudios internos sobre hábitos de consumo y preferencias para mejorar nuestros productos y servicios."]}),i.jsx("p",{children:"4. Transferencia de datos: Soluciones Sever podrá compartir los datos personales con terceros proveedores de servicios que colaboren en el cumplimiento de las finalidades descritas en este Aviso de Privacidad. En ningún caso se realizará una transferencia de datos con fines comerciales o lucrativos a terceros."}),i.jsx("p",{children:"5. Medidas de seguridad: Soluciones Sever implementa medidas de seguridad administrativas, técnicas y físicas para proteger los datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado."}),i.jsx("p",{children:"6. Derechos ARCO: Usted como titular de los datos personales tiene derecho a acceder, rectificar, cancelar y oponerse al tratamiento de sus datos. Para ejercer estos derechos, deberá enviar una solicitud por escrito a la siguiente dirección: [Incluir dirección física o correo electrónico para recibir solicitudes]."}),i.jsx("p",{children:"7. Cambios al Aviso de Privacidad: Soluciones Sever se reserva el derecho de realizar modificaciones o actualizaciones a este Aviso de Privacidad. Cualquier cambio se comunicará a través de nuestra página web o por otros medios que considere adecuados."}),i.jsx("p",{children:"Al utilizar nuestros servicios, usted acepta los términos y condiciones descritos en este Aviso de Privacidad. Si tiene alguna duda o inquietud acerca del tratamiento de sus datos personales, por favor, contáctenos a través de los medios proporcionados."}),i.jsx("p",{children:"Fecha de última actualización: 8 de Enero, 2025."}),i.jsxs("p",{children:["Atentamente,",i.jsx("br",{}),"Soluciones Sever."]})]})]})})}const kn={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.75)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999,padding:"20px"},modal:{backgroundColor:"#fff",padding:"40px",borderRadius:"8px",maxWidth:"800px",width:"100%",maxHeight:"90vh",display:"flex",flexDirection:"column",position:"relative",color:"#333",boxShadow:"0 10px 25px rgba(0,0,0,0.2)"},closeBtn:{position:"absolute",top:"20px",right:"20px",padding:"8px 16px",backgroundColor:"#003366",color:"#fff",border:"none",borderRadius:"4px",cursor:"pointer",fontWeight:"bold"},title:{marginTop:0,marginBottom:"20px",color:"#000",borderBottom:"2px solid #eee",paddingBottom:"10px"},content:{overflowY:"auto",lineHeight:"1.6",paddingRight:"15px"}};function wp({onNavigate:e}){const[t,n]=B.useState(!1);return i.jsxs("footer",{className:"footer",children:[i.jsxs("div",{className:"footer__main",children:[i.jsxs("div",{className:"footer__col footer__col--brand",children:[i.jsxs("div",{className:"footer__logo",onClick:()=>e("hero"),children:[i.jsx("img",{src:"/sever-logo.png",alt:"Soluciones Sever",className:"footer__logo-img",onError:r=>{r.target.style.display="none"}}),i.jsxs("div",{children:[i.jsx("div",{className:"nav__logo-text",style:{color:"#fff"},children:"SEVER"}),i.jsx("div",{className:"nav__logo-sub",style:{color:"rgba(255,255,255,0.5)"},children:"SOLUCIONES LOGÍSTICAS"})]})]}),i.jsx("p",{className:"footer__tagline",children:"Servicio especializado de autotransporte local, foráneo y a frontera con EUA. En ruta desde 2013."}),i.jsxs("div",{className:"footer__social",children:[i.jsx("a",{href:"https://www.linkedin.com/company/soluciones-sever/about/",target:"_blank",rel:"noopener noreferrer",className:"footer__social-btn","aria-label":"LinkedIn",children:T.linkedin}),i.jsx("a",{href:"https://www.instagram.com",target:"_blank",rel:"noopener noreferrer",className:"footer__social-btn","aria-label":"Instagram",children:T.instagram}),i.jsx("a",{href:`https://wa.me/${bn.whatsappNumber}`,target:"_blank",rel:"noopener noreferrer",className:"footer__social-btn","aria-label":"WhatsApp",children:T.whatsapp})]})]}),i.jsxs("div",{className:"footer__col",children:[i.jsx("h4",{className:"footer__col-title",children:"Navegación"}),i.jsx("div",{className:"footer__list",children:Yo.map(r=>i.jsx("button",{onClick:()=>e(r.target),className:"footer__link",children:r.label},r.label))})]}),i.jsxs("div",{className:"footer__col",children:[i.jsx("h4",{className:"footer__col-title",children:"Contacto"}),i.jsxs("div",{className:"footer__list",children:[i.jsxs("div",{className:"footer__contact-group",children:[i.jsx("span",{className:"footer__contact-label",children:"Ventas"}),i.jsx("a",{href:"tel:+528119103303",className:"footer__link-static",children:"+52 81 1910 3303"}),i.jsx("a",{href:"mailto:gerencia.ventas@s-sever.com",className:"footer__link-static",children:"gerencia.ventas@s-sever.com"})]}),i.jsxs("div",{className:"footer__contact-group",children:[i.jsx("span",{className:"footer__contact-label",children:"Recursos Humanos"}),i.jsx("a",{href:"tel:+523312945392",className:"footer__link-static",children:"+52 33 1294 5392"}),i.jsx("a",{href:"mailto:recursoshumanos@s-sever.com",className:"footer__link-static",children:"recursoshumanos@s-sever.com"})]})]})]}),i.jsxs("div",{className:"footer__col",children:[i.jsx("h4",{className:"footer__col-title",children:"Ubicación"}),i.jsxs("div",{className:"footer__list",children:[i.jsxs("div",{className:"footer__contact-group",children:[i.jsx("span",{className:"footer__contact-label",children:"Oficinas Administrativas"}),i.jsx("span",{className:"footer__link-static",children:"Av. Ignacio L Vallarta #6503"}),i.jsx("span",{className:"footer__link-static",children:"Int. H11, Col. Ciudad Granja"}),i.jsx("span",{className:"footer__link-static",children:"Zapopan, Jal. C.P. 45010"})]}),i.jsxs("div",{className:"footer__contact-group",children:[i.jsx("span",{className:"footer__contact-label",children:"Patio Operativo"}),i.jsx("span",{className:"footer__link-static",children:"Dr. Pedro Juan Mirassou y Tarno"}),i.jsx("span",{className:"footer__link-static",children:"Tlajomulco de Zúñiga, Jal. C.P. 45610"})]})]})]})]}),i.jsxs("div",{className:"footer__bar",children:[i.jsxs("span",{children:["© ",new Date().getFullYear()," Soluciones Sever. Todos los derechos reservados."]}),i.jsxs("span",{className:"footer__bar-links",children:[i.jsx("button",{onClick:()=>n(!0),className:"footer__bar-link",style:{background:"none",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"},children:"Aviso de Privacidad"}),i.jsx("span",{className:"footer__bar-sep",children:"·"}),i.jsx("a",{href:"#",className:"footer__bar-link",children:"Términos y Condiciones"})]})]}),t&&i.jsx(_p,{onClose:()=>n(!1)})]})}function kp({onClick:e}){return i.jsx("button",{className:"admin-fab",onClick:e,"aria-label":"Panel de administración",title:"Administración",children:i.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("circle",{cx:"12",cy:"12",r:"3"}),i.jsx("path",{d:"M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"}),i.jsx("path",{d:"M12 2v2M12 20v2M2 12h2M20 12h2"})]})})}function jp({admin:e,onClose:t}){const[n,r]=B.useState(!1),[l,o]=B.useState(""),[a,s]=B.useState({role:"",type:"Tiempo completo",location:"",exp:""}),u=()=>{l===Wf?r(!0):alert("Contraseña incorrecta")},d=()=>{e.persist(),t()},h=(x,_,w)=>{const R=[...e.adminVacs];R[x]={...R[x],[_]:w},e.setAdminVacs(R)},g=x=>e.setAdminVacs(e.adminVacs.filter((_,w)=>w!==x)),m=()=>{a.role.trim()&&(e.setAdminVacs([...e.adminVacs,a]),s({role:"",type:"Tiempo completo",location:"",exp:""}))};return i.jsx("div",{className:"admin-overlay",onClick:x=>{x.target===x.currentTarget&&t()},children:i.jsxs("div",{className:"admin-modal",children:[i.jsxs("div",{className:"admin-modal__header",children:[i.jsx("h2",{className:"admin-modal__title",children:"Panel de Administración"}),i.jsx("button",{className:"admin-modal__close",onClick:t,children:T.close})]}),n?i.jsxs("div",{className:"admin-body",children:[i.jsxs("div",{className:"admin-section",children:[i.jsx("h3",{className:"admin-section__title",children:"Contadores"}),i.jsxs("div",{className:"admin-row",children:[i.jsx("label",{className:"admin-label",children:"Año de fundación"}),i.jsx("input",{type:"number",className:"admin-input admin-input--sm",value:e.adminYear,onChange:x=>e.setAdminYear(Number(x.target.value))}),i.jsxs("span",{className:"admin-hint",children:["Actualmente muestra: ",new Date().getFullYear()-e.adminYear," años"]})]}),i.jsxs("div",{className:"admin-row",children:[i.jsx("label",{className:"admin-label",children:"Viajes completados"}),i.jsx("input",{type:"number",className:"admin-input admin-input--sm",value:e.adminTrips,onChange:x=>e.setAdminTrips(Number(x.target.value))})]})]}),i.jsxs("div",{className:"admin-section",children:[i.jsx("h3",{className:"admin-section__title",children:"Vacantes"}),e.adminVacs.map((x,_)=>i.jsxs("div",{className:"admin-vac-row",children:[i.jsx("input",{className:"admin-input",placeholder:"Puesto",value:x.role,onChange:w=>h(_,"role",w.target.value)}),i.jsx("input",{className:"admin-input",placeholder:"Tipo",value:x.type,onChange:w=>h(_,"type",w.target.value)}),i.jsx("input",{className:"admin-input",placeholder:"Lugar",value:x.location,onChange:w=>h(_,"location",w.target.value)}),i.jsx("input",{className:"admin-input",placeholder:"Exp.",value:x.exp,onChange:w=>h(_,"exp",w.target.value)}),i.jsx("button",{className:"admin-del",onClick:()=>g(_),children:"✕"})]},_)),i.jsxs("div",{className:"admin-vac-row admin-vac-row--new",children:[i.jsx("input",{className:"admin-input",placeholder:"Puesto",value:a.role,onChange:x=>s({...a,role:x.target.value})}),i.jsx("input",{className:"admin-input",placeholder:"Tipo",value:a.type,onChange:x=>s({...a,type:x.target.value})}),i.jsx("input",{className:"admin-input",placeholder:"Lugar",value:a.location,onChange:x=>s({...a,location:x.target.value})}),i.jsx("input",{className:"admin-input",placeholder:"Exp.",value:a.exp,onChange:x=>s({...a,exp:x.target.value})}),i.jsx("button",{className:"admin-add",onClick:m,children:"+"})]})]}),i.jsx("button",{className:"btn btn--primary",style:{width:"100%",marginTop:8},onClick:d,children:"Guardar cambios"})]}):i.jsxs("div",{className:"admin-auth",children:[i.jsx("p",{className:"admin-auth__label",children:"Ingresa la contraseña para continuar"}),i.jsx("input",{type:"password",className:"admin-input",placeholder:"Contraseña",value:l,onChange:x=>o(x.target.value),onKeyDown:x=>{x.key==="Enter"&&u()},autoFocus:!0}),i.jsx("button",{className:"btn btn--primary",style:{width:"100%",marginTop:12},onClick:u,children:"Entrar"})]})]})})}function Sp(){const e=tp(),[t,n]=B.useState(!1),r=l=>{var o;return(o=document.getElementById(l))==null?void 0:o.scrollIntoView({behavior:"smooth"})};return i.jsxs("div",{className:"sever-root",children:[i.jsx("style",{children:$f}),i.jsx(np,{onNavigate:r}),i.jsx(lp,{onNavigate:r,adminYear:e.adminYear,adminTrips:e.adminTrips}),i.jsx(op,{}),i.jsx(ip,{adminYear:e.adminYear,adminTrips:e.adminTrips}),i.jsx(ap,{}),i.jsx(sp,{}),i.jsx(up,{}),i.jsx(cp,{}),i.jsx(dp,{}),i.jsx(fp,{}),i.jsx(mp,{}),i.jsx(gp,{vacancies:e.adminVacs}),i.jsx(yp,{}),i.jsx(rp,{}),i.jsx(wp,{onNavigate:r}),i.jsx(kp,{onClick:()=>n(!0)}),t&&i.jsx(jp,{admin:e,onClose:()=>n(!1)})]})}ql.createRoot(document.getElementById("root")).render(i.jsx(Lc.StrictMode,{children:i.jsx(Sp,{})}));
