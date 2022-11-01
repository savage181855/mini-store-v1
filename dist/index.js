let t=!1,e=!1;function o(e={}){t=!0;const o=Page;Page=function(t){const c={...e,...t,onLoad(){const{useStoreRef:o,mapState:c,mapActions:n,watch:s}=t;o&&o(this,c,n,s),e?.onLoad?.call(this,...arguments),t?.onLoad?.call(this,...arguments)}};n(["onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onPageScroll","onResize","onTabItemTap"],c,e,t),o(c)}}function c(t={}){e=!0;const o=Component;Component=function(e){const c={...t,...e,attached(){const{useStoreRef:o,mapState:c,mapActions:n,watch:s}=e;o&&o(this,c,n,s),e?.attached?.call(this,...arguments),t?.attached?.call(this,...arguments)},detached(){e.useStoreRef&&this.data.store.cancelUse(this),e?.detached?.call(this,...arguments),t?.detached?.call(this,...arguments)},lifetimes:{attached(){const{useStoreRef:o,mapState:c,mapActions:n,watch:s}=e;o&&o(this,c,n,s),e?.lifetimes?.attached?.call(this,...arguments),t?.lifetimes?.attached?.call(this,...arguments)},detached(){e.useStoreRef&&this.data.store.cancelUse(this),e?.lifetimes?.detached?.call(this,...arguments),t?.lifetimes?.detached?.call(this,...arguments)}}};n(["created","ready","moved","error","lifetimes.created","lifetimes.ready","lifetimes.moved","lifetimes.error","pageLifetimes.show","pageLifetimes.hide","pageLifetimes.resize"],c,t,e),o(c)}}function n(t,e,o,c){t.forEach((t=>{const n=t.split(".");1===n.length?e[n[0]]=function(){o?.[n[0]]?.call(this,...arguments),c?.[n[0]]?.call(this,...arguments)}:(e[n[0]]={...e?.[n[0]]},(o?.[n[0]]?.[n[1]]||c?.[n[0]]?.[n[1]])&&(e[n[0]][n[1]]=function(){o?.[n[0]]?.[n[1]]?.call(this,...arguments),c?.[n[0]]?.[n[1]]?.call(this,...arguments)}))}))}function s(t,e){return e.replace(/\[(\w+)\]/g,".$1").replace(/\["(\w+)"\]/g,".$1").replace(/\['(\w+)'\]/g,".$1").split(".").reduce(((t,e)=>t?.[e]),t)}function i(t,e){if(t===e)return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;const o=/Function|RegExp|Date|Object|Array/,c=Object.prototype.toString.call(t).slice(8,-1),n=Object.prototype.toString.call(e).slice(8,-1);if("Object"!==c&&"Array"!==c&&"Object"!==n&&"Object"!==n&&o.exec(c)[0]===o.exec(n)[0]&&c===n)return!0;if(Object.keys(t).length!==Object.keys(e).length)return!1;for(let o of Object.keys(t)){const c=i(t[o],e[o]);if(!c)return c}return!0}function r(t){if(!t||"object"!=typeof t)return t;if(/Function|RegExp|Date/.test(Object.prototype.toString.call(t)))return t;const e="Array"===t.constructor?[]:{};for(let o in t)e[o]="object"==typeof t[o]?r(t[o]):t[o];return e}function a(t,e){return!i(t,e)}setTimeout((()=>{function o(t){console.error(`必须在 app.js 文件 调用 ${t}()，参考：https://www.npmjs.com/package/@savage181855/mini-store`)}t||o("proxyPage"),e||o("proxyComponent")}));const l={subscribeList:{},pubAndNoSub:{},subscribe(t,e){this.pubAndNoSub[t]&&(e(this.pubAndNoSub[t]),Reflect.deleteProperty(this.pubAndNoSub,t)),this.subscribeList[t]?.push(e)||(this.subscribeList[t]=[e])},publish(t,e){const o=this.subscribeList[t];o&&0!==o.length?o.forEach((t=>t(e))):this.pubAndNoSub[t]=e},remove(t,e){const o=this.subscribeList[t];o&&0!==o.length&&(e?o.forEach(((o,c)=>{o===e&&this.subscribeList[t].splice(c,1)})):this.subscribeList[t]=[])}};function f(t){const e={...t.state,...t.actions,patch(t){if("object"==typeof t)for(let e in t)n[e]=t[e];"function"==typeof t&&t(n)},cancelUse(t){t.onUnload()}};!function(t){const e=r(l);for(let o in l)t[o]=e[o]}(e);const o={get:function(t,e,o){const n=Reflect.get(t,e,o);return null!==(s=n)&&"object"==typeof s?c(n):n;var s},set:function(t,e,o,c){const i=r(n),l=Reflect.set(t,e,o,c);return Reflect.ownKeys(n.subscribeList).forEach((t=>{const e=s(i,t),o=s(n,t);a(e,o)&&n.subscribeList[t].forEach((t=>t(e,o)))})),l}};function c(t){return function(t,e){return new Proxy(t,e)}(t,o)}let n=null;return n=c(e),function(t,e=[],o=[],c={}){o.forEach((e=>t[e]=n[e].bind(n))),t.data.store=n;const s={};e.forEach((t=>s[t]=n[t])),t.setData(s);const i={};e.forEach((e=>{i[e]=(o,c)=>{t.setData({[e]:c})},n.subscribe(e,i[e])})),Reflect.ownKeys(c).forEach((e=>{n.subscribe(e,c[e].bind(t))}));const r=t.onUnload||function(){};return t.onUnload=function(){r(),Reflect.ownKeys(i).forEach((t=>n.remove(t,i[t]))),Reflect.ownKeys(c).forEach((t=>n.remove(t,c[t])))},n}}export{f as defineStore,c as proxyComponent,o as proxyPage};
