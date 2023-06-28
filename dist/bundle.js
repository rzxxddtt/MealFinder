/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var e={705:()=>{function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(n,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,(void 0,i=function(n,t){if("object"!==e(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var a=r.call(n,"string");if("object"!==e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(a.key),"symbol"===e(i)?i:String(i)),a)}var i}function t(e){var n="function"==typeof Map?new Map:void 0;return t=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,a)}function a(){return r(e,arguments,o(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),i(a,e)},t(e)}function r(e,n,t){return r=a()?Reflect.construct.bind():function(e,n,t){var r=[null];r.push.apply(r,n);var a=new(Function.bind.apply(e,r));return t&&i(a,t.prototype),a},r.apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function i(e,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},i(e,n)}function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}var u=function(t){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&i(e,n)}(p,t);var r,u,c,s,l=(c=p,s=a(),function(){var n,t=o(c);if(s){var r=o(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return function(n,t){if(t&&("object"===e(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)}(this,n)});function p(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),(e=l.call(this)).shadowDOM=e.attachShadow({mode:"open"}),e}return r=p,(u=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML="\n        <style>\n          * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n          }\n          :host {\n            display: block;\n            width: 100%;\n            background-color: #00205B;\n            color: white;\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n          }\n          h2 {\n            padding: 16px;\n          }\n        </style>\n        \n        <h2>Meal Finder Apps</h2>\n      "}}])&&n(r.prototype,u),Object.defineProperty(r,"prototype",{writable:!1}),p}(t(HTMLElement));customElements.define("app-bar",u)},929:()=>{function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(n,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,(void 0,i=function(n,t){if("object"!==e(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var a=r.call(n,"string");if("object"!==e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(a.key),"symbol"===e(i)?i:String(i)),a)}var i}function t(e){var n="function"==typeof Map?new Map:void 0;return t=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,a)}function a(){return r(e,arguments,o(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),i(a,e)},t(e)}function r(e,n,t){return r=a()?Reflect.construct.bind():function(e,n,t){var r=[null];r.push.apply(r,n);var a=new(Function.bind.apply(e,r));return t&&i(a,t.prototype),a},r.apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function i(e,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},i(e,n)}function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}var u=function(t){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&i(e,n)}(p,t);var r,u,c,s,l=(c=p,s=a(),function(){var n,t=o(c);if(s){var r=o(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return function(n,t){if(t&&("object"===e(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)}(this,n)});function p(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),(e=l.call(this)).shadowDOM=e.attachShadow({mode:"open"}),e}return r=p,(u=[{key:"meal",set:function(e){this._meal=e,this.render()}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n        <style>\n          * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n          }\n          :host {\n            display: block;\n            margin-bottom: 18px;\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n            border-radius: 10px;\n            overflow: hidden;\n          }\n          .fan-art-meal {\n            width: 100%;\n            max-height: 300px;\n            object-fit: cover;\n            object-position: center;\n          }\n          .club-meal {\n            padding: 24px;\n          }\n          .club-meal > h2 {\n            font-weight: lighter;\n          }\n          .club-meal > p {\n            margin-top: 10px;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            display: -webkit-box;\n            -webkit-box-orient: vertical;\n            -webkit-line-clamp: 10; /* number of lines to show */\n          }\n        </style>\n        <img class="fan-art-meal" src="'.concat(this._meal.fanArt,'" alt="Fan Art">\n        <div class="meal-info">\n          <h2>').concat(this._meal.name,"</h2>\n          <p>").concat(this._meal.description,"</p>\n        </div>\n      ")}}])&&n(r.prototype,u),Object.defineProperty(r,"prototype",{writable:!1}),p}(t(HTMLElement));customElements.define("meal-item",u)},998:()=>{function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(n,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,(void 0,i=function(n,t){if("object"!==e(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var a=r.call(n,"string");if("object"!==e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(a.key),"symbol"===e(i)?i:String(i)),a)}var i}function t(e){var n="function"==typeof Map?new Map:void 0;return t=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,a)}function a(){return r(e,arguments,o(this).constructor)}return a.prototype=Object.create(e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),i(a,e)},t(e)}function r(e,n,t){return r=a()?Reflect.construct.bind():function(e,n,t){var r=[null];r.push.apply(r,n);var a=new(Function.bind.apply(e,r));return t&&i(a,t.prototype),a},r.apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function i(e,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},i(e,n)}function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}var u=function(t){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&i(e,n)}(p,t);var r,u,c,s,l=(c=p,s=a(),function(){var n,t=o(c);if(s){var r=o(this).constructor;n=Reflect.construct(t,arguments,r)}else n=t.apply(this,arguments);return function(n,t){if(t&&("object"===e(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)}(this,n)});function p(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,p),(e=l.call(this)).shadowDOM=e.attachShadow({mode:"open"}),e}return r=p,(u=[{key:"connectedCallback",value:function(){this.render()}},{key:"clickEvent",set:function(e){this._clickEvent=e,this.render()}},{key:"value",get:function(){return this.shadowDOM.querySelector("#searchElement").value}},{key:"render",value:function(){this.shadowDOM.innerHTML='\n        <style>\n          .search-container {\n            max-width: 800px;\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n            padding: 16px;\n            border-radius: 5px;\n            display: flex;\n            position: sticky;\n            top: 10px;\n            background-color: #0BE15E;\n          }\n         \n          .search-container > input {\n            width: 75%;\n            padding: 16px;\n            border: 0;\n            border-bottom: 1px solid #0BE15E;\n            font-weight: bold;\n          }\n         \n          .search-container > input:focus {\n            outline: 0;\n            border-bottom: 2px solid #0BE15E;\n          }\n         \n          .search-container > input:focus::placeholder {\n            font-weight: bold;\n          }\n          \n          .search-container >  input::placeholder {\n            color: #00205B;\n            font-weight: normal;\n          }\n         \n          .search-container > button {\n            width: 23%;\n            cursor: pointer;\n            margin-left: auto;\n            padding: 16px;\n            background-color: #00205B;\n            color: white;\n            border: 0;\n            text-transform: uppercase;\n          }\n         \n          @media screen and (max-width: 550px){\n            .search-container {\n              flex-direction: column;\n              position: static;\n            }\n       \n            .search-container > input {\n              width: 100%;\n              margin-bottom: 12px;\n            }\n       \n            .search-container > button {\n              width: 100%;\n            }\n          }\n        </style>\n        \n        <div id="search-container" class="search-container">\n          <input placeholder="Search meal favorite" id="searchElement" type="search">\n          <button id="searchButtonElement" type="submit">Search</button>\n        </div>\n      ',this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click",this._clickEvent)}}])&&n(r.prototype,u),Object.defineProperty(r,"prototype",{writable:!1}),p}(t(HTMLElement));customElements.define("search-bar",u)},890:(e,n,t)=>{"use strict";t.d(n,{Z:()=>u});var r=t(81),a=t.n(r),i=t(645),o=t.n(i)()(a());o.push([e.id,"* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  \n}\n \nbody {\n  font-family: sans-serif;\n  background-color: #878687;\n}\n \nmain {\n  width: 90%;\n  max-width: 800px;\n  margin: 32px auto;\n}\n \nmeal-list {\n  display: block;\n  margin-top: 32px;\n  width: 100%;\n  padding: 16px;\n}",""]);const u=o},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var u=0;u<this.length;u++){var c=this[u][0];null!=c&&(o[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},o=[],u=0;u<e.length;u++){var c=e[u],s=r.base?c[0]+r.base:c[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var f=t(p),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)n[f].references++,n[f].updater(d);else{var m=a(d,r);r.byIndex=u,n.splice(u,0,{identifier:p,updater:m,references:1})}o.push(p)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var u=t(i[o]);n[u].references--}for(var c=r(e,a),s=0;s<i.length;s++){var l=t(i[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},380:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{"use strict";var e=t(379),n=t.n(e),r=t(380),a=t.n(r),i=t(569),o=t.n(i),u=t(565),c=t.n(u),s=t(216),l=t.n(s),p=t(589),f=t.n(p),d=t(890),m={};function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function y(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,a=function(e,n){if("object"!==h(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===h(a)?a:String(a)),r)}var a}function b(e){var n="function"==typeof Map?new Map:void 0;return b=function(e){if(null===e||(t=e,-1===Function.toString.call(t).indexOf("[native code]")))return e;var t;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,r)}function r(){return g(e,arguments,k(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),w(r,e)},b(e)}function g(e,n,t){return g=v()?Reflect.construct.bind():function(e,n,t){var r=[null];r.push.apply(r,n);var a=new(Function.bind.apply(e,r));return t&&w(a,t.prototype),a},g.apply(null,arguments)}function v(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function w(e,n){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},w(e,n)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}m.styleTagTransform=f(),m.setAttributes=c(),m.insert=o().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=l(),n()(d.Z,m),d.Z&&d.Z.locals&&d.Z.locals,t(705),t(929);var j=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&w(e,n)}(o,e);var n,t,r,a,i=(r=o,a=v(),function(){var e,n=k(r);if(a){var t=k(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return function(e,n){if(n&&("object"===h(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function o(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),(e=i.call(this)).shadowDOM=e.attachShadow({mode:"open"}),e}return n=o,(t=[{key:"meals",set:function(e){this._meals=e,this.render()}},{key:"render",value:function(){var e=this;this.shadowDOM.innerHTML="",this._meals.forEach((function(n){var t=document.createElement("meal-item");t.meal=n,e.shadowDOM.appendChild(t)}))}},{key:"renderError",value:function(e){this.shadowDOM.innerHTML="\n      <style>\n        .placeholder {\n          font-weight: lighter;\n          color: rgba(0,0,0,0.5);\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n        }\n      </style>\n    ",this.shadowDOM.innerHTML+='<h2 class="placeholder">'.concat(e,"</h2>")}}])&&y(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),o}(b(HTMLElement));customElements.define("meal-list",j),t(998);const S=[{name:"Spaghetti Bolognese",fanArt:"https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",description:"Spagheti Bolognesse merupakan sajian pasta klasik yang populer.Memakai saus daging cincang dengan paduan saus dan pasta tomat yang asam segar. Meskipun berasal dari italia,pasta dengan beragam jenisnya populer di Indonesia. Ada berbagai jenis pasta yang populer, di antaranya spaghetti.Dari berbagai jenis saus yang populer, salah satunya saus bolognese yang konon berasal dari kota Bologna, Italia. Saus daging dan tomat ini juga dipakai untuk lasagna dan tagilatelle, pasta yang pipih lebar. Berikut Ingredients dalam membuat Spaghetti Bolognese : - 2 Onions, - 1tbsp olive oil, - 1 Clove garlic, - 500g lean minced beef, - 90g Mushrooms, - 1 tsp dried oregano, - 400g can tomatoes, - 300ml hot beef stock, - 1tbsp tomato puree, - 1tbsp worcestershire sauce, - 350g spagheti, - Topping permesen."},{name:"Pancakes",fanArt:"https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg",description:"Pancakes dasar dibuat dari adonan sederhana telur, tepung, susu dan baking powder untuk ragi. Anda bisa menggunakan berbagai jenis tepung jika ingin bereksperimen dengan gandum utuh atau soba. Dan Anda juga bisa menambahkan buah ke dalam campuran. Adonan dapat dibuat dari awal dalam waktu yang hampir bersamaan dengan waktu yang dibutuhkan untuk membuat roti bakar. Bagian yang paling memakan waktu dalam membuat pancake tentunya adalah memasaknya. Tapi waktu itu sangat singkat, Anda harus menganggap ini sebagai makanan sehari-hari, bukan pesta acara khusus. Masak resep ini beberapa kali dan mungkin menjadi bagian dari rutinitas mingguan Anda. Berikut Ingredients dalam membuat Panckes : - 100g Flour, - 2 Large Eggs, - 300ml Milk, - 1 tbls Sunflower Oil, - to serve Sugar, - to serve Raspberries, - to serve Blueberries."},{name:"Sushi",fanArt:"https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg",description:'Sushi adalah hidangan Jepang paling terkenal di luar Jepang, dan salah satu hidangan paling populer di kalangan orang Jepang. Di Jepang, sushi biasanya dinikmati pada acara-acara khusus, seperti perayaan. Pada abad yang lalu, "sushi" mengacu pada acar ikan yang diawetkan dalam cuka. Saat ini sushi dapat didefinisikan sebagai hidangan berisi nasi yang telah disiapkan dengan cuka sushi. Ada banyak jenis sushi. Beberapa yang populer adalah: - Nigiri yaitu Bola nasi kecil dengan ikan, kerang, dll di atasnya ada jenis nigiri yang paling umum ialah tuna, udang, belut, cumi-cumi, gurita dan telur goreng. - Gunkan ialah cangkir kecil yang terbuat dari nasi sushi dan rumput laut kering yang diisi dengan makanan laut. - Norimaki ialah nasi sushi dan makanan laut, yang di buat di gulung dalam lembaran rumput laut kering. -Temaki ialah kerucut yang terbuat dari rumput laut nori dan di isi dengan nasi sushi, makanan laut dan sayuran. - Inari ialah sushi yang paling murah dan sederhana di mana sushi ini diisi ke dalam kantong kecil tahu goreng (aburaage). Berikut Ingredients dalam membuat Sushi : - 300ml Sushi Rice, - 100ml Rice wine, - 2 tbs Caster Sugar, - 3 tbs Mayonnaise, - 1 tbs Rice wine, - 1 tbs Soy Sauce, - 1 Cucumber'},{name:"Nasi Lemak",fanArt:"https://www.themealdb.com/images/media/meals/wai9bw1619788844.jpg",description:"Nasi lemak adalah jenis makanan khas suku Melayu yang lazim di temukan di Malaysia di mana hidangan ini di anggap sebagai salah satu hidangan nasionalnya, dan Indonesia khususnya di Riau dan Sumatra Utara. Hidangan ini pun di temukan di Singapura dan Brunei. Makanan ini biasanya di hidangkan untuk sarapan pagi. Nasi Lemak sendiri merujuk kepada nasi yang di masak dengan menggunakan santan kelapa untuk memberikan citasara gurih. Kadang kala daun pandan dimasukkan ketika nasi lemak di masak untuk menambah aromanya. Istilah nasi lemak dalam bahasa melayu merujuk kepada rasa dan tekstur gurih berminyak yang di hasilkan santan kelapa yang melepaskan kandungan lemak nabatinya ke dalam nasi yang tengah di tanak. Nasi lemak biasanya di hidangkan dengan telur, irisan mentimun, ikan bilis atau teri goreng dan sambal. Tetapi kini nasi lemak dijual dengan berbagai lauk pauk seperti tempe, tahu, pete, jengkol, kacang tanah goreng, sotong, ayam, daging, cumi-cumi, udang, limpa, dan hati sapi serta sering juga dengan parutan kelapa. Berikut Ingredients dalam membuat Nasi Lemak : -2cups Coconut Milk, - 2cups Water, - 1/4tsp Ginger Paste, - 1 Ginger, - 1 Bay Leaf, - 2cups Rice, - 4 Eggs, - 1 Cucumber, - 1 Cup Peanuts, - 4 oz Anchovy Fillet, - 2 tbs Vegetable Oil, - 1 Onion, - 3 cloves garlic, - 3 Shallots, - 2 tsp Chilli Powder"},{name:"Roti John",fanArt:"https://www.themealdb.com/images/media/meals/hx335q1619789561.jpg",description:"Roti john adalah roti lapis dengan isian telur dadar yang merupakan masakan Melayu di Singapura selama masa kolonial Inggris sebelum menjadi populer di seluruh Semenanjung Melayu di Malaysia saat ini dan di Indonesia modern sebagai makanan jalanan, serta Brunei Darussalam. Masakan ini biasa disajikan saat sarapan. Dilansir dari SAYS, roti John sebenarnya berasal dari perpaduan antara kuliner dari india dan Melayu. Menurut data atau sejarah yang di himpun dari National Archives Singapore oleh Pakirisamy Rajagopal, awalnya roti John dan di jual ke beberapa penjual makanan kaki lima di Koek Road, Singapore. Koed Road sendiri merupakan jalanan yang dulunya sering di kunjungi tentara Inggris pada saat itu, menurutnya, salah satu penjual kaki lima keturunan India-Muslim bernama Abdul menjual menu roti John ini di keranjang dorong miliknya. Berikut Ingredients dalam membuat Roti John : - 1/4 lb Minced Beef, - 1 onion, - 3 Eggs, - 1tbs Chilli, - 1/2 Baguette, - To taste Salt, - To taste Pepper, - Top Mayonnaise. "},{name:"Salted Caramel Cheescake",fanArt:"https://www.themealdb.com/images/media/meals/xqrwyr1511133646.jpg",description:"Salted Caramel Cheescake merupakan desert yang banyak di gemari kalangan masyarakat karna cita rasa yang khas yaitu manis dan gurih, dimana rasa manis tersebut muncul karena adanya saus caramel yang membuat rasa manis ini sedangkan untuk rasa gurih nya terletak dalam keju yang terdapat di dalam kue tersebut. Berikut Ingredients dalam membuat Salted Caramel Cheescake : - 250g Digestive Biscuits, - 75g Pretzels, - 135g Butter, - 450g Cream Cheese, - 1tsp Vanilla Extract, - 100g Icing Sugar, - 150g Caramel, - 1tsp Seal Salt, - 300ml Double Cream, - Drizzle Caramel Sauce, - Top Toffe Popcorn, - Top Pretzels. "},{name:"Ratatouille",fanArt:"https://www.themealdb.com/images/media/meals/wrpwuu1511786491.jpg",description:"Ratatouille (dari bahasa Prancis dilafalkan sebagai /ʁataˈtuj/) adalah jenis masakan Provence yang berasal dari daerah Nice. Oleh karena itu, dalam bahasa Prancis makanan ini umum disebut sebagai ratatouille niçoise. Makanan ini adalah terdiri dari berbagai macam sayuran dan dedaunan seperti timi, daun salam, dan juga bisa diganti dedaunan yang lainnya, biasanya dimakan dengan nasi, kentang atau roti tetapi sekarang ini bisa dikombinasikan sebagai makanan pembuka, sebagai saus untuk pasta, dicampur omlet dan masih banyak lainnya. Berikut Ingredients dalam membuat Ratatouille : - 2 Large Aubergine, - 4 Courgettes, - 2 Yellow Papper, - 4 Large Tomato, - 5 tbs Olive Oil, - Bunch Basil, - 1 Medium Onion, - 3 finely chopped Garlic Clove, - 1 tsp Red Wine Vinegar, - 1 tsp Sugar."}];function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function O(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,a=function(e,n){if("object"!==x(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!==x(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===x(a)?a:String(a)),r)}var a}const E=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t;return n=e,t=[{key:"searchMeal",value:function(e){return new Promise((function(n,t){var r=S.filter((function(n){return n.name.toUpperCase().includes(e.toUpperCase())}));r.length?n(r):t("".concat(e," is not found"))}))}}],null&&O(n.prototype,null),t&&O(n,t),Object.defineProperty(n,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function M(){M=function(){return e};var e={},n=Object.prototype,t=n.hasOwnProperty,r=Object.defineProperty||function(e,n,t){e[n]=t.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function c(e,n,t){return Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[n]}try{c({},"")}catch(e){c=function(e,n,t){return e[n]=t}}function s(e,n,t,a){var i=n&&n.prototype instanceof f?n:f,o=Object.create(i.prototype),u=new O(a||[]);return r(o,"_invoke",{value:k(e,t,u)}),o}function l(e,n,t){try{return{type:"normal",arg:e.call(n,t)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var p={};function f(){}function d(){}function m(){}var h={};c(h,i,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(E([])));b&&b!==n&&t.call(b,i)&&(h=b);var g=m.prototype=f.prototype=Object.create(h);function v(e){["next","throw","return"].forEach((function(n){c(e,n,(function(e){return this._invoke(n,e)}))}))}function w(e,n){function a(r,i,o,u){var c=l(e[r],e,i);if("throw"!==c.type){var s=c.arg,p=s.value;return p&&"object"==P(p)&&t.call(p,"__await")?n.resolve(p.__await).then((function(e){a("next",e,o,u)}),(function(e){a("throw",e,o,u)})):n.resolve(p).then((function(e){s.value=e,o(s)}),(function(e){return a("throw",e,o,u)}))}u(c.arg)}var i;r(this,"_invoke",{value:function(e,t){function r(){return new n((function(n,r){a(e,t,n,r)}))}return i=i?i.then(r,r):r()}})}function k(e,n,t){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return{value:void 0,done:!0}}for(t.method=a,t.arg=i;;){var o=t.delegate;if(o){var u=j(o,t);if(u){if(u===p)continue;return u}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===r)throw r="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);r="executing";var c=l(e,n,t);if("normal"===c.type){if(r=t.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:t.done}}"throw"===c.type&&(r="completed",t.method="throw",t.arg=c.arg)}}}function j(e,n){var t=n.method,r=e.iterator[t];if(void 0===r)return n.delegate=null,"throw"===t&&e.iterator.return&&(n.method="return",n.arg=void 0,j(e,n),"throw"===n.method)||"return"!==t&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+t+"' method")),p;var a=l(r,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,p;var i=a.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function S(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function x(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function E(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function n(){for(;++r<e.length;)if(t.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return a.next=a}}return{next:T}}function T(){return{value:void 0,done:!0}}return d.prototype=m,r(g,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:d,configurable:!0}),d.displayName=c(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var n="function"==typeof e&&e.constructor;return!!n&&(n===d||"GeneratorFunction"===(n.displayName||n.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,u,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},v(w.prototype),c(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(n,t,r,a,i){void 0===i&&(i=Promise);var o=new w(s(n,t,r,a),i);return e.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},v(g),c(g,u,"Generator"),c(g,i,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var n=Object(e),t=[];for(var r in n)t.push(r);return t.reverse(),function e(){for(;t.length;){var r=t.pop();if(r in n)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=E,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var n in this)"t"===n.charAt(0)&&t.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(t,r){return o.type="throw",o.arg=e,n.next=t,r&&(n.method="next",n.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=t.call(i,"catchLoc"),c=t.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,n){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&t.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=n,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),p},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),x(t),p}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc===e){var r=t.completion;if("throw"===r.type){var a=r.arg;x(t)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,t){return this.delegate={iterator:E(e),resultName:n,nextLoc:t},"next"===this.method&&(this.arg=void 0),p}},e}function T(e,n,t,r,a,i,o){try{var u=e[i](o),c=u.value}catch(e){return void t(e)}u.done?n(c):Promise.resolve(c).then(r,a)}document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("search-bar"),n=document.querySelector("meal-list"),t=function(){var n,t=(n=M().mark((function n(){var t;return M().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E.searchMeal(e.value);case 3:t=n.sent,r(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),a(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})),function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function o(e){T(i,r,a,o,u,"next",e)}function u(e){T(i,r,a,o,u,"throw",e)}o(void 0)}))});return function(){return t.apply(this,arguments)}}(),r=function(e){n.meals=e},a=function(e){n.renderError(e)};e.clickEvent=t}))})()})();