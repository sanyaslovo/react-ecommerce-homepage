(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{26:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r=n(45),o=n(3),i=n(0),a=n.n(i),c=n(5),u=(n(8),n(1)),l=n(2),s=n(4);a.a.Component;a.a.Component;var f=function(e,t){return"function"===typeof e?e(t):e},d=function(e,t){return"string"===typeof e?Object(c.c)(e,null,null,t):e},p=function(e){return e},y=a.a.forwardRef;"undefined"===typeof y&&(y=p);var g=y(function(e,t){var n=e.innerRef,r=e.navigate,o=e.onClick,i=Object(l.a)(e,["innerRef","navigate","onClick"]),c=i.target,s=Object(u.a)({},i,{onClick:function(e){try{o&&o(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||c&&"_self"!==c||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return s.ref=p!==y&&t||n,a.a.createElement("a",s)});var m=y(function(e,t){var n=e.component,o=void 0===n?g:n,i=e.replace,c=e.to,m=e.innerRef,b=Object(l.a)(e,["component","replace","to","innerRef"]);return a.a.createElement(r.d.Consumer,null,function(e){e||Object(s.a)(!1);var n=e.history,r=d(f(c,e.location),e.location),l=r?n.createHref(r):"",g=Object(u.a)({},b,{href:l,navigate:function(){var t=f(c,e.location);(i?n.replace:n.push)(t)}});return p!==y?g.ref=t||m:g.innerRef=m,a.a.createElement(o,g)})}),b=function(e){return e},h=a.a.forwardRef;"undefined"===typeof h&&(h=b);h(function(e,t){var n=e["aria-current"],o=void 0===n?"page":n,i=e.activeClassName,c=void 0===i?"active":i,p=e.activeStyle,y=e.className,g=e.exact,v=e.isActive,S=e.location,j=e.sensitive,O=e.strict,w=e.style,k=e.to,x=e.innerRef,I=Object(l.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a.a.createElement(r.d.Consumer,null,function(e){e||Object(s.a)(!1);var n=S||e.location,i=d(f(k,n),n),l=i.pathname,A=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),E=A?Object(r.e)(n.pathname,{path:A,exact:g,sensitive:j,strict:O}):null,_=!!(v?v(E,n):E),T=_?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(e){return e}).join(" ")}(y,c):y,C=_?Object(u.a)({},w,{},p):w,P=Object(u.a)({"aria-current":_&&o||null,className:T,style:C,to:i},I);return b!==h?P.ref=t||x:P.innerRef=x,a.a.createElement(m,P)})})},52:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return r})},60:function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){return r={},t.m=n=[function(t){t.exports=e},function(e,t,n){e.exports=n(2)()},function(e,t,n){"use strict";function r(){}function o(){}var i=n(3);o.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,o,a){if(a!==i){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}var n={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return n.PropTypes=n}},function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){null!=t&&t<=e.length||(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t,n,r,o){var i=e.getElementsByTagName(t)[0],a=i,c=i;(c=e.createElement(t)).id=n,c.src=r,a&&a.parentNode?a.parentNode.insertBefore(c,a):e.head.appendChild(c),c.onload=o}function d(e,t){var n=e.getElementById(t);n&&n.parentNode.removeChild(n)}function p(e){return b.a.createElement("span",{style:{paddingRight:10,fontWeight:500,paddingLeft:e.icon?0:10,paddingTop:10,paddingBottom:10}},e.children)}function y(e){return b.a.createElement("div",{style:{marginRight:10,background:e.active?"#eee":"#fff",padding:10,borderRadius:2}},b.a.createElement("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg"},b.a.createElement("g",{fill:"#000",fillRule:"evenodd"},b.a.createElement("path",{d:"M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",fill:"#EA4335"}),b.a.createElement("path",{d:"M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",fill:"#4285F4"}),b.a.createElement("path",{d:"M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",fill:"#FBBC05"}),b.a.createElement("path",{d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",fill:"#34A853"}),b.a.createElement("path",{fill:"none",d:"M0 0h18v18H0z"}))))}function g(e){var t=i(Object(m.useState)(!1),2),n=t[0],r=t[1],o=i(Object(m.useState)(!1),2),a=o[0],c=o[1],u=e.tag,l=e.type,s=e.className,f=e.disabledStyle,d=e.buttonText,g=e.children,v=e.render,S=e.theme,j=e.icon,O=e.disabled,w=h({onSuccess:e.onSuccess,onAutoLoadFinished:e.onAutoLoadFinished,onRequest:e.onRequest,onFailure:e.onFailure,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,autoLoad:e.autoLoad,isSignedIn:e.isSignedIn,fetchBasicProfile:e.fetchBasicProfile,redirectUri:e.redirectUri,discoveryDocs:e.discoveryDocs,uxMode:e.uxMode,scope:e.scope,accessType:e.accessType,responseType:e.responseType,jsSrc:e.jsSrc,prompt:e.prompt}),k=w.signIn,x=O||!w.loaded;if(v)return v({onClick:k,disabled:x});var I={backgroundColor:"dark"===S?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===S?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},A={cursor:"pointer",backgroundColor:"dark"===S?"#3367D6":"#eee",color:"dark"===S?"#fff":"rgba(0, 0, 0, .54)",opacity:1},E=x?Object.assign({},I,f):a?Object.assign({},I,A):n?Object.assign({},I,{cursor:"pointer",opacity:.9}):I;return b.a.createElement(u,{onMouseEnter:function(){return r(!0)},onMouseLeave:function(){r(!1),c(!1)},onMouseDown:function(){return c(!0)},onMouseUp:function(){return c(!1)},onClick:k,style:E,type:l,disabled:x,className:s},[j&&b.a.createElement(y,{key:1,active:a}),b.a.createElement(p,{icon:j,key:2},g||d)])}n.r(t),n.d(t,"default",function(){return S}),n.d(t,"GoogleLogin",function(){return S}),n.d(t,"GoogleLogout",function(){return O}),n.d(t,"useGoogleLogin",function(){return h}),n.d(t,"useGoogleLogout",function(){return j});var m=n(0),b=n.n(m),h=(n(1),function(e){function t(e){var t=e.getBasicProfile(),n=e.getAuthResponse();e.googleId=t.getId(),e.tokenObj=n,e.tokenId=n.id_token,e.accessToken=n.access_token,e.profileObj={googleId:t.getId(),imageUrl:t.getImageUrl(),email:t.getEmail(),name:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName()},i(e)}function n(e){if(e&&e.preventDefault(),P){var n=window.gapi.auth2.getAuthInstance(),r={prompt:T};p(),"code"===A?n.grantOfflineAccess(r).then(function(e){return i(e)},function(e){return l(e)}):n.signIn(r).then(function(e){return t(e)},function(e){return l(e)})}}var o=e.onSuccess,i=void 0===o?function(){}:o,a=e.onAutoLoadFinished,c=void 0===a?function(){}:a,u=e.onFailure,l=void 0===u?function(){}:u,s=e.onRequest,p=void 0===s?function(){}:s,y=e.clientId,g=e.cookiePolicy,b=e.loginHint,h=e.hostedDomain,v=e.autoLoad,S=e.isSignedIn,j=e.fetchBasicProfile,O=e.redirectUri,w=e.discoveryDocs,k=e.uxMode,x=e.scope,I=e.accessType,A=e.responseType,E=e.jsSrc,_=void 0===E?"https://apis.google.com/js/api.js":E,T=e.prompt,C=r(Object(m.useState)(!1),2),P=C[0],M=C[1];return Object(m.useEffect)(function(){var e=!1;return f(document,"script","google-login",_,function(){var n={client_id:y,cookie_policy:g,login_hint:b,hosted_domain:h,fetch_basic_profile:j,discoveryDocs:w,ux_mode:k,redirect_uri:O,scope:x,access_type:I};"code"===A&&(n.access_type="offline"),window.gapi.load("auth2",function(){var r=window.gapi.auth2.getAuthInstance();r?r.then(function(){e||(S&&r.isSignedIn.get()?(M(!0),c(!0),t(r.currentUser.get())):(M(!0),c(!1)))},function(e){l(e)}):window.gapi.auth2.init(n).then(function(n){if(!e){M(!0);var r=S&&n.isSignedIn.get();c(r),r&&t(n.currentUser.get())}},function(e){M(!0),c(!1),l(e)})})}),function(){e=!0,d(document,"google-login")}},[]),Object(m.useEffect)(function(){v&&n()},[P]),{signIn:n,loaded:P}});function v(e){var t=l(Object(m.useState)(!1),2),n=t[0],r=t[1],o=l(Object(m.useState)(!1),2),i=o[0],a=o[1],c=e.tag,u=e.type,s=e.className,f=e.disabledStyle,d=e.buttonText,g=e.children,h=e.render,v=e.theme,S=e.icon,O=e.disabled,w=j({jsSrc:e.jsSrc,onFailure:e.onFailure,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,fetchBasicProfile:e.fetchBasicProfile,discoveryDocs:e.discoveryDocs,uxMode:e.uxMode,redirectUri:e.redirectUri,scope:e.scope,accessType:e.accessType,onLogoutSuccess:e.onLogoutSuccess}),k=w.signOut,x=O||!w.loaded;if(h)return h({onClick:k,disabled:x});var I={backgroundColor:"dark"===v?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===v?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},A={cursor:"pointer",backgroundColor:"dark"===v?"#3367D6":"#eee",color:"dark"===v?"#fff":"rgba(0, 0, 0, .54)",opacity:1},E=x?Object.assign({},I,f):i?Object.assign({},I,A):n?Object.assign({},I,{cursor:"pointer",opacity:.9}):I;return b.a.createElement(c,{onMouseEnter:function(){return r(!0)},onMouseLeave:function(){r(!1),a(!1)},onMouseDown:function(){return a(!0)},onMouseUp:function(){return a(!1)},onClick:k,style:E,type:u,disabled:x,className:s},[S&&b.a.createElement(y,{key:1,active:i}),b.a.createElement(p,{icon:S,key:2},g||d)])}g.defaultProps={type:"button",tag:"button",buttonText:"Sign in with Google",scope:"profile email",accessType:"online",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!1,uxMode:"popup",disabledStyle:{opacity:.6},icon:!0,theme:"light",onRequest:function(){}};var S=g,j=function(e){var t=e.jsSrc,n=void 0===t?"https://apis.google.com/js/api.js":t,r=e.onFailure,o=e.clientId,i=e.cookiePolicy,a=e.loginHint,u=e.hostedDomain,l=e.fetchBasicProfile,s=e.discoveryDocs,p=e.uxMode,y=e.redirectUri,g=e.scope,b=e.accessType,h=e.onLogoutSuccess,v=c(Object(m.useState)(!1),2),S=v[0],j=v[1],O=Object(m.useCallback)(function(){if(window.gapi){var e=window.gapi.auth2.getAuthInstance();null!=e&&e.then(function(){e.signOut().then(function(){e.disconnect(),h()})},function(e){return r(e)})}},[h]);return Object(m.useEffect)(function(){return f(document,"script","google-login",n,function(){var e={client_id:o,cookie_policy:i,login_hint:a,hosted_domain:u,fetch_basic_profile:l,discoveryDocs:s,ux_mode:p,redirect_uri:y,scope:g,access_type:b};window.gapi.load("auth2",function(){window.gapi.auth2.getAuthInstance()?j(!0):window.gapi.auth2.init(e).then(function(){return j(!0)},function(e){return r(e)})})}),function(){d(document,"google-login")}},[]),{signOut:O,loaded:S}};v.defaultProps={type:"button",tag:"button",buttonText:"Logout of Google",disabledStyle:{opacity:.6},icon:!0,theme:"light",jsSrc:"https://apis.google.com/js/api.js"};var O=v}],t.c=r,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4);function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n,r}(n(0))}}]);
//# sourceMappingURL=10.1ddec151.chunk.js.map