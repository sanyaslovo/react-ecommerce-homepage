(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{26:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var a=n(45),r=n(3),c=n(0),i=n.n(c),l=n(5),o=(n(8),n(1)),u=n(2),s=n(4);i.a.Component;i.a.Component;var m=function(e,t){return"function"===typeof e?e(t):e},f=function(e,t){return"string"===typeof e?Object(l.c)(e,null,null,t):e},p=function(e){return e},d=i.a.forwardRef;"undefined"===typeof d&&(d=p);var g=d(function(e,t){var n=e.innerRef,a=e.navigate,r=e.onClick,c=Object(u.a)(e,["innerRef","navigate","onClick"]),l=c.target,s=Object(o.a)({},c,{onClick:function(e){try{r&&r(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||l&&"_self"!==l||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),a())}});return s.ref=p!==d&&t||n,i.a.createElement("a",s)});var v=d(function(e,t){var n=e.component,r=void 0===n?g:n,c=e.replace,l=e.to,v=e.innerRef,y=Object(u.a)(e,["component","replace","to","innerRef"]);return i.a.createElement(a.d.Consumer,null,function(e){e||Object(s.a)(!1);var n=e.history,a=f(m(l,e.location),e.location),u=a?n.createHref(a):"",g=Object(o.a)({},y,{href:u,navigate:function(){var t=m(l,e.location);(c?n.replace:n.push)(t)}});return p!==d?g.ref=t||v:g.innerRef=v,i.a.createElement(r,g)})}),y=function(e){return e},E=i.a.forwardRef;"undefined"===typeof E&&(E=y);E(function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,c=e.activeClassName,l=void 0===c?"active":c,p=e.activeStyle,d=e.className,g=e.exact,b=e.isActive,h=e.location,N=e.sensitive,O=e.strict,k=e.style,C=e.to,j=e.innerRef,R=Object(u.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.a.createElement(a.d.Consumer,null,function(e){e||Object(s.a)(!1);var n=h||e.location,c=f(m(C,n),n),u=c.pathname,I=u&&u.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),w=I?Object(a.e)(n.pathname,{path:I,exact:g,sensitive:N,strict:O}):null,U=!!(b?b(w,n):w),A=U?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(e){return e}).join(" ")}(d,l):d,T=U?Object(o.a)({},k,{},p):k,S=Object(o.a)({"aria-current":U&&r||null,className:A,style:T,to:c},R);return y!==E?S.ref=t||j:S.innerRef=j,i.a.createElement(v,S)})})},46:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e){return e.cart.cartItems}},47:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"d",function(){return c}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return l}),n.d(t,"e",function(){return o});var a=n(9),r=function(e){return{type:a.a.ADD_ITEM_TO_CART,payload:e}},c=function(e){return{type:a.a.REMOVE_ITEM_FROM_CART,payload:e}},i=function(e){return{type:a.a.INCREASE_CART_ITEM,payload:e}},l=function(e){return{type:a.a.DECREASE_CART_ITEM,payload:e}},o=function(e){return{type:a.a.TOGGLE_CART,payload:e}}},48:function(e,t,n){e.exports=n.p+"static/media/crown.19ef7b17.svg"},49:function(e,t,n){},50:function(e,t,n){e.exports=n.p+"static/media/shopping-bag.30f07071.svg"},51:function(e,t,n){},52:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,c=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(o){r=!0,c=o}finally{try{a||null==l.return||l.return()}finally{if(r)throw c}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return a})},53:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(48),i=n.n(c),l=(n(49),n(26)),o=n(52),u=n(19),s=n(46),m=n(50),f=n.n(m),p=(n(51),n(47)),d=Object(u.b)(function(e){return{cartItems:Object(s.a)(e)}})(function(e){var t=e.cartItems;localStorage.setItem("ItemsInCart",JSON.stringify(t));var n=JSON.parse(localStorage.getItem("ItemsInCart")),c=Object(a.useState)(!1),i=Object(o.a)(c,2),s=i[0],m=i[1],d=Object(u.c)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cart",onClick:function(){m(!s),function(e){d(Object(p.e)(e))}(s)}},r.a.createElement("img",{src:f.a,alt:"Logo"}),r.a.createElement("span",null,t.reduce(function(e,t){return e+t.quantity},0))),s?r.a.createElement("div",{className:"cart-list"},0===n.length?r.a.createElement("span",{className:"empty"},"Your cart is empty"):r.a.createElement("ul",null,t.map(function(e,t){return r.a.createElement("li",{key:t,className:"cart-item"},r.a.createElement("img",{src:e.imageUrl,alt:e.name}),r.a.createElement("div",{className:"cart-item-info"},r.a.createElement("span",null,e.name),r.a.createElement("span",null,"".concat(e.quantity," x $").concat(e.price))))})),r.a.createElement(l.a,{to:"/checkout",className:"btn"},"go to checkout")):[])});t.a=function(){return r.a.createElement("header",null,r.a.createElement(l.a,{to:"/",className:"logo-container"},r.a.createElement("img",{src:i.a,alt:"Logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(l.a,{to:"/shop",className:"option"},"SHOP"),r.a.createElement(l.a,{to:"/contact",className:"option"},"CONTACT"),r.a.createElement(l.a,{to:"/sign-in",className:"option"},"SIGN IN"),r.a.createElement(d,null)))}},57:function(e,t,n){},58:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(53),i=(n(57),n(58),n(26)),l=function(e){var t=e.title,n=e.imageUrl,a=e.linkUrl,c=e.size,l={backgroundImage:"url("+n+")"},o=c?"itemCategory "+c:"itemCategory",u="/shop/".concat(a);return r.a.createElement(i.a,{to:u,className:o},r.a.createElement("div",{className:"backgroundImg",style:l}),r.a.createElement("div",{className:"category-content"},r.a.createElement("span",{className:"category-title"},t),r.a.createElement("span",{className:"category-action"},"SHOP NOW")))},o=function(e){var t=e.categories;return r.a.createElement("div",{className:"directory-menu"},t.map(function(e){return r.a.createElement(l,{key:e.id,title:e.title,imageUrl:e.imageUrl,linkUrl:e.linkUrl,size:e.size})}))},u=[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"mens"}];t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null),r.a.createElement(o,{categories:u}))}}}]);
//# sourceMappingURL=5.5426dc37.chunk.js.map