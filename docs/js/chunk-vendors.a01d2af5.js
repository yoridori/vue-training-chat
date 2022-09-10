"use strict";(self["webpackChunkvue_training_chat"]=self["webpackChunkvue_training_chat"]||[]).push([[998],{4444:function(t,e,n){n.d(e,{BH:function(){return l},L:function(){return a},LL:function(){return _},Mn:function(){return g},ZR:function(){return w},b$:function(){return p},d:function(){return f},eu:function(){return y},hl:function(){return v},m9:function(){return $},ne:function(){return L},pd:function(){return A},ru:function(){return d},tV:function(){return c},uI:function(){return h},vZ:function(){return k},w1:function(){return m},xO:function(){return T},xb:function(){return E},z$:function(){return u},zd:function(){return x}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296===(64512&r)&&i+1<t.length&&56320===(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},r=function(t){const e=[];let n=0,i=0;while(n<t.length){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const e=t[r],s=r+1<t.length,o=s?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,l=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):r(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const e=n[t.charAt(r++)],s=r<t.length,o=s?n[t.charAt(r)]:0;++r;const a=r<t.length,c=a?n[t.charAt(r)]:64;++r;const l=r<t.length,u=l?n[t.charAt(r)]:64;if(++r,null==e||null==o||null==c||null==u)throw Error();const h=e<<2|o>>4;if(i.push(h),64!==c){const t=o<<4&240|c>>2;if(i.push(t),64!==u){const t=c<<6&192|u;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=i(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")},c=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function d(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function p(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function f(){return u().indexOf("Electron/")>=0}function m(){const t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return u().indexOf("MSAppHost/")>=0}function v(){return"object"===typeof indexedDB}function y(){return new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b="FirebaseError";class w extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=b,Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?C(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new w(i,o,n);return a}}function C(t,e){return t.replace(S,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}const S=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function k(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(I(n)&&I(s)){if(!k(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function I(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function T(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function x(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function A(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e){const n=new O(t,e);return n.subscribe.bind(n)}class O{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=N(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=D),void 0===i.error&&(i.error=D),void 0===i.complete&&(i.complete=D);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),r}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function N(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function D(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(t){return t&&t._delegate?t._delegate:t}},1001:function(t,e,n){function i(t,e,n,i,r,s,o,a){var c,l="function"===typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=c):r&&(c=a?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:l}}n.d(e,{Z:function(){return i}})},5503:function(t,e,n){n.d(e,{ZF:function(){return i.ZF}});var i=n(5816),r="firebase",s="9.9.4";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,i.KN)(r,s,"app")},68:function(t,e,n){n.d(e,{Xb:function(){return ce},v0:function(){return ui},e5:function(){return le},ck:function(){return he}});var i=n(4444),r=n(5816);function s(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n}Object.create;Object.create;var o=n(3333),a=n(8463);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new i.LL("auth","Firebase",c()),h=new o.Yd("@firebase/auth");function d(t,...e){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${r.Jn}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,...e){throw g(t,...e)}function f(t,...e){return g(t,...e)}function m(t,e,n){const r=Object.assign(Object.assign({},l()),{[e]:n}),s=new i.LL("auth","Firebase",r);return s.create(e,{appName:t.name})}function g(t,...e){if("string"!==typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return u.create(t,...e)}function v(t,e,...n){if(!t)throw g(e,...n)}function y(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function b(t,e){t||y(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w=new Map;function _(t){b(t instanceof Function,"Expected a class definition");let e=w.get(t);return e?(b(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,w.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t,e){const n=(0,r.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),r=n.getOptions();if((0,i.vZ)(r,null!==e&&void 0!==e?e:{}))return t;p(t,"already-initialized")}const s=n.initialize({options:e});return s}function S(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(_);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null===e||void 0===e?void 0:e.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function k(){return"http:"===I()||"https:"===I()}function I(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t,e){this.shortDelay=t,this.longDelay=e,b(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return T()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e){b(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},D=new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function R(t,e,n,r,s={}){return P(t,s,(async()=>{let s={},o={};r&&("GET"===e?o=r:s={body:JSON.stringify(r)});const a=(0,i.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),O.fetch()(V(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))}))}async function P(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},N),e);try{const e=new B(t),i=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw F(t,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const e=i.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw F(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw F(t,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(t,a,o);p(t,a)}}catch(s){if(s instanceof i.ZR)throw s;p(t,"network-request-failed")}}async function M(t,e,n,i,r={}){const s=await R(t,e,n,i,r);return"mfaPendingCredential"in s&&p(t,"multi-factor-auth-required",{_serverResponse:s}),s}function V(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?L(t.config,r):`${t.config.apiScheme}://${r}`}class B{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(f(this.auth,"network-request-failed"))),D.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function F(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=f(t,e,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(t,e){return R(t,"POST","/v1/accounts:delete",e)}async function j(t,e){return R(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e=!1){const n=(0,i.m9)(t),r=await n.getIdToken(e),s=Z(r);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:z(q(s.auth_time)),issuedAtTime:z(q(s.iat)),expirationTime:z(q(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function q(t){return 1e3*Number(t)}function Z(t){var e;const[n,r,s]=t.split(".");if(void 0===n||void 0===r||void 0===s)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,i.tV)(r);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",null===(e=o)||void 0===e?void 0:e.toString()),null}}function W(t){const e=Z(t);return v(e,"internal-error"),v("undefined"!==typeof e.exp,"internal-error"),v("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof i.ZR&&G(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function G({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===(t=e)||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=z(this.lastLoginAt),this.creationTime=z(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(t){var e;const n=t.auth,i=await t.getIdToken(),r=await K(t,j(n,{idToken:i}));v(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?et(s.providerUserInfo):[],a=tt(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Q(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function J(t){const e=(0,i.m9)(t);await Y(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tt(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function et(t){return t.map((t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(t,e){const n=await P(t,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=V(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",O.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){v(t.idToken,"internal-error"),v("undefined"!==typeof t.idToken,"internal-error"),v("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):W(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return v(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:r}=await nt(t,e);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:r}=e,s=new it;return n&&(v("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),i&&(v("string"===typeof i,"internal-error",{appName:t}),s.accessToken=i),r&&(v("number"===typeof r,"internal-error",{appName:t}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new it,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,e){v("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class st{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,r=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Q(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(t){const e=await K(this,this.stsTokenManager.getToken(this.auth,t));return v(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return H(this,t)}reload(){return J(this)}_assign(t){this!==t&&(v(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new st(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await K(this,U(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,r,s,o,a,c,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(r=e.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=e.photoURL)&&void 0!==s?s:void 0,f=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:b,emailVerified:w,isAnonymous:_,providerData:C,stsTokenManager:S}=e;v(b&&S,t,"internal-error");const E=it.fromJSON(this.name,S);v("string"===typeof b,t,"internal-error"),rt(u,t.name),rt(h,t.name),v("boolean"===typeof w,t,"internal-error"),v("boolean"===typeof _,t,"internal-error"),rt(d,t.name),rt(p,t.name),rt(f,t.name),rt(m,t.name),rt(g,t.name),rt(y,t.name);const k=new st({uid:b,auth:t,email:h,emailVerified:w,displayName:u,isAnonymous:_,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:E,createdAt:g,lastLoginAt:y});return C&&Array.isArray(C)&&(k.providerData=C.map((t=>Object.assign({},t)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(t,e,n=!1){const i=new it;i.updateFromServerResponse(e);const r=new st({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await Y(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ot.type="NONE";const at=ot;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,e,n){return`firebase:${t}:${e}:${n}`}class lt{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=ct(this.userKey,i.apiKey,r),this.fullPersistenceKey=ct("persistence",i.apiKey,r),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?st._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new lt(_(at),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let r=i[0]||_(at);const s=ct(n,t.config.apiKey,t.name);let o=null;for(const l of e)try{const e=await l._get(s);if(e){const n=st._fromJSON(t,e);l!==r&&(o=n),r=l;break}}catch(c){}const a=i.filter((t=>t._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==r)try{await t._remove(s)}catch(c){}}))),new lt(r,t,n)):new lt(r,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ft(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ht(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(gt(e))return"Blackberry";if(vt(e))return"Webos";if(dt(e))return"Safari";if((e.includes("chrome/")||pt(e))&&!e.includes("edge/"))return"Chrome";if(mt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ht(t=(0,i.z$)()){return/firefox\//i.test(t)}function dt(t=(0,i.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pt(t=(0,i.z$)()){return/crios\//i.test(t)}function ft(t=(0,i.z$)()){return/iemobile/i.test(t)}function mt(t=(0,i.z$)()){return/android/i.test(t)}function gt(t=(0,i.z$)()){return/blackberry/i.test(t)}function vt(t=(0,i.z$)()){return/webos/i.test(t)}function yt(t=(0,i.z$)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bt(t=(0,i.z$)()){var e;return yt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function wt(){return(0,i.w1)()&&10===document.documentMode}function _t(t=(0,i.z$)()){return yt(t)||mt(t)||vt(t)||gt(t)||/windows phone/i.test(t)||ft(t)}function Ct(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,e=[]){let n;switch(t){case"Browser":n=ut((0,i.z$)());break;case"Worker":n=`${ut((0,i.z$)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${r.Jn}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{const i=t(e);n(i)}catch(r){i(r)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){var e;if(this.auth.currentUser===t)return;const n=[];try{for(const e of this.queue)await e(t),e.onAbort&&n.push(e.onAbort)}catch(i){n.reverse();for(const t of n)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(e=i)||void 0===e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tt(this),this.idTokenSubscription=new Tt(this),this.beforeStateQueue=new Et(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=_(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await lt.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null===i||void 0===i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){var e;try{await Y(t)}catch(n){if("auth/network-request-failed"!==(null===(e=n)||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,i.m9)(t):null;return e&&v(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&v(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new i.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&_(t)||this._popupRedirectResolver;v(e,this,"argument-error"),this.redirectPersistenceManager=await lt.create(this,[_(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const r="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"===typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=St(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function It(t){return(0,i.m9)(t)}class Tt{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,i.ne)((t=>this.observer=t))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xt{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return y("not implemented")}_getIdTokenResponse(t){return y("not implemented")}_linkToIdToken(t,e){return y("not implemented")}_getReauthenticationResolver(t){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function At(t,e){return R(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Lt(t,e){return M(t,"POST","/v1/accounts:signInWithPassword",$(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ot(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",$(t,e))}async function Nt(t,e){return M(t,"POST","/v1/accounts:signInWithEmailLink",$(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends xt{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new Dt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Dt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return Lt(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ot(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return At(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Nt(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(t,e){return M(t,"POST","/v1/accounts:signInWithIdp",$(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="http://localhost";class Pt extends xt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Pt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,r=s(e,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Pt(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return $t(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,$t(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,$t(t,e)}buildRequest(){const t={requestUri:Rt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,i.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(t,e){return R(t,"POST","/v1/accounts:sendVerificationCode",$(t,e))}async function Vt(t,e){return M(t,"POST","/v1/accounts:signInWithPhoneNumber",$(t,e))}async function Bt(t,e){const n=await M(t,"POST","/v1/accounts:signInWithPhoneNumber",$(t,e));if(n.temporaryProof)throw F(t,"account-exists-with-different-credential",n);return n}const Ft={["USER_NOT_FOUND"]:"user-not-found"};async function Ut(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return M(t,"POST","/v1/accounts:signInWithPhoneNumber",$(t,n),Ft)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends xt{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new jt({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new jt({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return Vt(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return Bt(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return Ut(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}=t;return n||e||i||r?new jt({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ht(t){const e=(0,i.zd)((0,i.pd)(t))["link"],n=e?(0,i.zd)((0,i.pd)(e))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(t))["deep_link_id"],s=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return s||r||n||e||t}class qt{constructor(t){var e,n,r,s,o,a;const c=(0,i.zd)((0,i.pd)(t)),l=null!==(e=c["apiKey"])&&void 0!==e?e:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=zt(null!==(r=c["mode"])&&void 0!==r?r:null);v(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=Ht(t);try{return new qt(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zt{constructor(){this.providerId=Zt.PROVIDER_ID}static credential(t,e){return Dt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=qt.parseLink(e);return v(n,"argument-error"),Dt._fromEmailAndCode(t,n.code,n.tenantId)}}Zt.PROVIDER_ID="password",Zt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Zt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Wt{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gt extends Kt{constructor(){super("facebook.com")}static credential(t){return Pt._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Gt.credentialFromTaggedObject(t)}static credentialFromError(t){return Gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Gt.credential(t.oauthAccessToken)}catch(e){return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com",Gt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xt extends Kt{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Pt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Xt.credentialFromTaggedObject(t)}static credentialFromError(t){return Xt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Xt.credential(e,n)}catch(i){return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com",Xt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt extends Kt{constructor(){super("github.com")}static credential(t){return Pt._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Qt.credentialFromTaggedObject(t)}static credentialFromError(t){return Qt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Qt.credential(t.oauthAccessToken)}catch(e){return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com",Qt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt extends Kt{constructor(){super("twitter.com")}static credential(t,e){return Pt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Yt.credentialFromTaggedObject(t)}static credentialFromError(t){return Yt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return Yt.credential(e,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Jt(t,e){return M(t,"POST","/v1/accounts:signUp",$(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.TWITTER_SIGN_IN_METHOD="twitter.com",Yt.PROVIDER_ID="twitter.com";class te{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const r=await st._fromIdTokenResponse(t,n,i),s=ee(n),o=new te({user:r,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=ee(n);return new te({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function ee(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ne extends i.ZR{constructor(t,e,n,i){var r;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,ne.prototype),this.customData={appName:t.name,tenantId:null!==(r=t.tenantId)&&void 0!==r?r:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new ne(t,e,n,i)}}function ie(t,e,n,i){const r="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ne._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(t,e,n=!1){const i=await K(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return te._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function se(t,e,n=!1){var i;const{auth:r}=t,s="reauthenticate";try{const i=await K(t,ie(r,s,e,t),n);v(i.idToken,r,"internal-error");const o=Z(i.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(t.uid===a,r,"user-mismatch"),te._forOperation(t,s,i)}catch(o){throw"auth/user-not-found"===(null===(i=o)||void 0===i?void 0:i.code)&&p(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oe(t,e,n=!1){const i="signIn",r=await ie(t,i,e),s=await te._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function ae(t,e){return oe(It(t),e)}async function ce(t,e,n){const i=It(t),r=await Jt(i,{returnSecureToken:!0,email:e,password:n}),s=await te._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function le(t,e,n){return ae((0,i.m9)(t),Zt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ue(t,e){return R(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function he(t,{displayName:e,photoURL:n}){if(void 0===e&&void 0===n)return;const r=(0,i.m9)(t),s=await r.getIdToken(),o={idToken:s,displayName:e,photoUrl:n,returnSecureToken:!0},a=await K(r,ue(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find((({providerId:t})=>"password"===t));c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function de(t,e){return R(t,"POST","/v2/accounts/mfaEnrollment:start",$(t,e))}function pe(t,e){return R(t,"POST","/v2/accounts/mfaEnrollment:finalize",$(t,e))}new WeakMap;const fe="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(fe,"1"),this.storage.removeItem(fe),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){const t=(0,i.z$)();return dt(t)||yt(t)}const ve=1e3,ye=10;class be extends me{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ge()&&Ct(),this.fallbackToPolling=_t(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},r=this.storage.getItem(n);wt()&&r!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,ye):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),ve)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}be.type="LOCAL";const we=be;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends me{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}_e.type="SESSION";const Ce=_e;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Ee(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:r}=e.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async t=>t(e.origin,r))),a=await Se(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ke(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ee.receivers=[];class Ie{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=ke("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(e.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return window}function xe(t){Te().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return"undefined"!==typeof Te()["WorkerGlobalScope"]&&"function"===typeof Te()["importScripts"]}async function Le(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function Oe(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Ne(){return Ae()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="firebaseLocalStorageDb",$e=1,Re="firebaseLocalStorage",Pe="fbase_key";class Me{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function Ve(t,e){return t.transaction([Re],e?"readwrite":"readonly").objectStore(Re)}function Be(){const t=indexedDB.deleteDatabase(De);return new Me(t).toPromise()}function Fe(){const t=indexedDB.open(De,$e);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Re,{keyPath:Pe})}catch(i){n(i)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Re)?e(n):(n.close(),await Be(),e(await Fe()))}))}))}async function Ue(t,e,n){const i=Ve(t,!0).put({[Pe]:e,value:n});return new Me(i).toPromise()}async function je(t,e){const n=Ve(t,!1).get(e),i=await new Me(n).toPromise();return void 0===i?null:i.value}function ze(t,e){const n=Ve(t,!0).delete(e);return new Me(n).toPromise()}const He=800,qe=3;class Ze{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Fe()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>qe)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ae()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ee._getInstance(Ne()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await Le(),!this.activeServiceWorker)return;this.sender=new Ie(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&Oe()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Fe();return await Ue(t,fe,"1"),await ze(t,fe),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ue(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>je(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>ze(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=Ve(t,!1).getAll();return new Me(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:r}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const i of Array.from(n))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),He)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ze.type="LOCAL";const We=Ze;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t,e){return R(t,"POST","/v2/accounts/mfaSignIn:start",$(t,e))}function Ge(t,e){return R(t,"POST","/v2/accounts/mfaSignIn:finalize",$(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xe(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function Qe(t){return new Promise(((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=f("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",Xe().appendChild(i)}))}function Ye(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ye("rcb"),new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Je="recaptcha";async function tn(t,e,n){var i;const r=await n.verify();try{let s;if(v("string"===typeof r,t,"argument-error"),v(n.type===Je,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){v("enroll"===e.type,t,"internal-error");const n=await de(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{v("signin"===e.type,t,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;v(n,t,"missing-multi-factor-info");const o=await Ke(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await Mt(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class en{constructor(t){this.providerId=en.PROVIDER_ID,this.auth=It(t)}verifyPhoneNumber(t,e){return tn(this.auth,t,(0,i.m9)(e))}static credential(t,e){return jt._fromVerification(t,e)}static credentialFromResult(t){const e=t;return en.credentialFromTaggedObject(e)}static credentialFromError(t){return en.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?jt._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function nn(t,e){return e?_(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.PROVIDER_ID="phone",en.PHONE_SIGN_IN_METHOD="phone";class rn extends xt{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return $t(t,this._buildIdpRequest())}_linkToIdToken(t,e){return $t(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return $t(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function sn(t){return oe(t.auth,new rn(t),t.bypassAuthState)}function on(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),se(n,new rn(t),t.bypassAuthState)}async function an(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),re(n,new rn(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,e,n,i,r=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return sn;case"linkViaPopup":case"linkViaRedirect":return an;case"reauthViaPopup":case"reauthViaRedirect":return on;default:p(this.auth,"internal-error")}}resolve(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new A(2e3,1e4);class un extends cn{constructor(t,e,n,i,r){super(t,e,i,r),this.provider=n,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return v(t,this.auth,"internal-error"),t}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const t=ke();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(f(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(f(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(f(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,ln.get())};t()}}un.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const hn="pendingRedirect",dn=new Map;class pn extends cn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=dn.get(this.auth._key());if(!t){try{const e=await fn(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}dn.set(this.auth._key(),t)}return this.bypassAuthState||dn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function fn(t,e){const n=vn(e),i=gn(t);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}function mn(t,e){dn.set(t._key(),e)}function gn(t){return _(t._redirectPersistence)}function vn(t){return ct(hn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yn(t,e,n=!1){const i=It(t),r=nn(i,e),s=new pn(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bn=6e5;class wn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Sn(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Cn(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(f(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=bn&&this.cachedEventUids.clear(),this.cachedEventUids.has(_n(t))}saveEventToCache(t){this.cachedEventUids.add(_n(t)),this.lastProcessedEventTime=Date.now()}}function _n(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Cn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Sn(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(t,e={}){return R(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,In=/^https?/;async function Tn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await En(t);for(const i of e)try{if(xn(i))return}catch(n){}p(t,"unauthorized-domain")}function xn(t){const e=E(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return""===r.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!In.test(n))return!1;if(kn.test(t))return i===t;const r=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new A(3e4,6e4);function Ln(){const t=Te().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function On(t){return new Promise(((e,n)=>{var i,r,s;function o(){Ln(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ln(),n(f(t,"network-request-failed"))},timeout:An.get()})}if(null===(r=null===(i=Te().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Te().gapi)||void 0===s?void 0:s.load)){const e=Ye("iframefcb");return Te()[e]=()=>{gapi.load?o():n(f(t,"network-request-failed"))},Qe(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Nn=null,t}))}let Nn=null;function Dn(t){return Nn=Nn||On(t),Nn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new A(5e3,15e3),Rn="__/auth/iframe",Pn="emulator/auth/iframe",Mn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bn(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?L(e,Pn):`https://${t.config.authDomain}/${Rn}`,s={apiKey:e.apiKey,appName:t.name,v:r.Jn},o=Vn.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,i.xO)(s).slice(1)}`}async function Fn(t){const e=await Dn(t),n=Te().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:Bn(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mn,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const r=f(t,"network-request-failed"),s=Te().setTimeout((()=>{i(r)}),$n.get());function o(){Te().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{i(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jn=500,zn=600,Hn="_blank",qn="http://localhost";class Zn{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Wn(t,e,n,r=jn,s=zn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Un),{width:r.toString(),height:s.toString(),top:o,left:a}),u=(0,i.z$)().toLowerCase();n&&(c=pt(u)?Hn:n),ht(u)&&(e=e||qn,l.scrollbars="yes");const h=Object.entries(l).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(bt(u)&&"_self"!==c)return Kn(e||"",c),new Zn(null);const d=window.open(e||"",c,h);v(d,t,"popup-blocked");try{d.focus()}catch(p){}return new Zn(d)}function Kn(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="__/auth/handler",Xn="emulator/auth/handler";function Qn(t,e,n,s,o,a){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:r.Jn,eventId:o};if(e instanceof Wt){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,i.xb)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Kt){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const l=c;for(const i of Object.keys(l))void 0===l[i]&&delete l[i];return`${Yn(t)}?${(0,i.xO)(l).slice(1)}`}function Yn({config:t}){return t.emulator?L(t,Xn):`https://${t.authDomain}/${Gn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="webStorageSupport";class ti{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ce,this._completeRedirectFn=yn,this._overrideRedirectResult=mn}async _openPopup(t,e,n,i){var r;b(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=Qn(t,e,n,E(),i);return Wn(t,s,ke())}async _openRedirect(t,e,n,i){return await this._originValidation(t),xe(Qn(t,e,n,E(),i)),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await Fn(t),n=new wn(t);return e.register("authEvent",(e=>{v(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const i=n.onEvent(e.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(Jn,{type:Jn},(n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[Jn];void 0!==r&&e(!!r),p(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Tn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return _t()||dt()||yt()}}const ei=ti;class ni{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return y("unexpected MultiFactorSessionType")}}}class ii extends ni{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new ii(t)}_finalizeEnroll(t,e,n){return pe(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return Ge(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class ri{constructor(){}static assertion(t){return ii._fromCredential(t)}}ri.FACTOR_ID="phone";var si="@firebase/auth",oi="0.20.6";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ai{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function li(t){(0,r.Xd)(new a.wA("auth",((e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((e,i)=>{v(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:e.name});const r={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:St(t)},a=new kt(e,i,r);return S(a,n),a})(i,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const i=t.getProvider("auth-internal");i.initialize()}))),(0,r.Xd)(new a.wA("auth-internal",(t=>{const e=It(t.getProvider("auth").getImmediate());return(t=>new ai(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,r.KN)(si,oi,ci(t)),(0,r.KN)(si,oi,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t=(0,r.Mq)()){const e=(0,r.qX)(t,"auth");return e.isInitialized()?e.getImmediate():C(t,{popupRedirectResolver:ei,persistence:[We,we,Ce]})}li("Browser")},5321:function(t,e,n){n.d(e,{hJ:function(){return Ul},PL:function(){return hu},ad:function(){return Hl},IO:function(){return cu}});var i,r=n(5816),s=n(8463),o=n(3333),a=n(4444),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},l={},u=u||{},h=c||self;function d(){}function p(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function f(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function m(t){return Object.prototype.hasOwnProperty.call(t,g)&&t[g]||(t[g]=++v)}var g="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(t,e,n){return t.call.apply(t.bind,arguments)}function b(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function w(t,e,n){return w=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:b,w.apply(null,arguments)}function _(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function C(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function S(){this.s=this.s,this.o=this.o}var E=0,k={};S.prototype.s=!1,S.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=E)){var t=m(this);delete k[t]}},S.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},T=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,r="string"===typeof t?t.split(""):t;for(let s=0;s<i;s++)s in r&&e.call(n,r[s],s,t)};function x(t){t:{var e=Zn;const n=t.length,i="string"===typeof t?t.split(""):t;for(let r=0;r<n;r++)if(r in i&&e.call(void 0,i[r],r,t)){e=r;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function A(t){return Array.prototype.concat.apply([],arguments)}function L(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function O(t){return/^[\s\xa0]*$/.test(t)}var N,D=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function $(t,e){return-1!=t.indexOf(e)}function R(t,e){return t<e?-1:t>e?1:0}t:{var P=h.navigator;if(P){var M=P.userAgent;if(M){N=M;break t}}N=""}function V(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function B(t){const e={};for(const n in t)e[n]=t[n];return e}var F="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function U(t,e){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)t[n]=i[n];for(let e=0;e<F.length;e++)n=F[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function j(t){return j[" "](t),t}function z(t){var e=nt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}j[" "]=d;var H,q=$(N,"Opera"),Z=$(N,"Trident")||$(N,"MSIE"),W=$(N,"Edge"),K=W||Z,G=$(N,"Gecko")&&!($(N.toLowerCase(),"webkit")&&!$(N,"Edge"))&&!($(N,"Trident")||$(N,"MSIE"))&&!$(N,"Edge"),X=$(N.toLowerCase(),"webkit")&&!$(N,"Edge");function Q(){var t=h.document;return t?t.documentMode:void 0}t:{var Y="",J=function(){var t=N;return G?/rv:([^\);]+)(\)|;)/.exec(t):W?/Edge\/([\d\.]+)/.exec(t):Z?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):X?/WebKit\/(\S+)/.exec(t):q?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(J&&(Y=J?J[1]:""),Z){var tt=Q();if(null!=tt&&tt>parseFloat(Y)){H=String(tt);break t}}H=Y}var et,nt={};function it(){return z((function(){let t=0;const e=D(String(H)).split("."),n=D("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var r=e[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;t=R(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||R(0==r[2].length,0==s[2].length)||R(r[2],s[2]),r=r[3],s=s[3]}while(0==t)}return 0<=t}))}if(h.document&&Z){var rt=Q();et=rt||(parseInt(H,10)||void 0)}else et=void 0;var st=et,ot=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",d,e),h.removeEventListener("test",d,e)}catch(n){}return t}();function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ct(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(G){t:{try{j(e.nodeName);var r=!0;break t}catch(s){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:lt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ct.Z.h.call(this)}}at.prototype.h=function(){this.defaultPrevented=!0},C(ct,at);var lt={2:"touch",3:"pen",4:"mouse"};ct.prototype.h=function(){ct.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),ht=0;function dt(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=r,this.key=++ht,this.ca=this.fa=!1}function pt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ft(t){this.src=t,this.g={},this.h=0}function mt(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=I(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(pt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function gt(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==i)return r}return-1}ft.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=gt(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new dt(e,this.src,s,!!i,r),e.fa=n,t.push(e)),e};var vt="closure_lm_"+(1e6*Math.random()|0),yt={};function bt(t,e,n,i,r){if(i&&i.once)return Ct(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)bt(t,e[s],n,i,r);return null}return n=At(n),t&&t[ut]?t.N(e,n,f(i)?!!i.capture:!!i,r):wt(t,e,n,!1,i,r)}function wt(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=f(r)?!!r.capture:!!r,a=Tt(t);if(a||(t[vt]=a=new ft(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=_t(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)ot||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(kt(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function _t(){function t(n){return e.call(t.src,t.listener,n)}var e=It;return t}function Ct(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ct(t,e[s],n,i,r);return null}return n=At(n),t&&t[ut]?t.O(e,n,f(i)?!!i.capture:!!i,r):wt(t,e,n,!0,i,r)}function St(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)St(t,e[s],n,i,r);else i=f(i)?!!i.capture:!!i,n=At(n),t&&t[ut]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=gt(s,n,i,r),-1<n&&(pt(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Tt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=gt(e,n,i,r)),(n=-1<t?e[t]:null)&&Et(n))}function Et(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ut])mt(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(kt(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Tt(e))?(mt(n,t),0==n.h&&(n.src=null,e[vt]=null)):pt(t)}}}function kt(t){return t in yt?yt[t]:yt[t]="on"+t}function It(t,e){if(t.ca)t=!0;else{e=new ct(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Et(t),t=n.call(i,e)}return t}function Tt(t){return t=t[vt],t instanceof ft?t:null}var xt="__closure_events_fn_"+(1e9*Math.random()>>>0);function At(t){return"function"===typeof t?t:(t[xt]||(t[xt]=function(e){return t.handleEvent(e)}),t[xt])}function Lt(){S.call(this),this.i=new ft(this),this.P=this,this.I=null}function Ot(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"===typeof e)e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var r=e;e=new at(i,t),U(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Nt(o,i,!0,e)&&r}if(o=e.g=t,r=Nt(o,i,!0,e)&&r,r=Nt(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=Nt(o,i,!1,e)&&r}function Nt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&mt(t.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}C(Lt,S),Lt.prototype[ut]=!0,Lt.prototype.removeEventListener=function(t,e,n,i){St(this,t,e,n,i)},Lt.prototype.M=function(){if(Lt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)pt(n[i]);delete e.g[t],e.h--}}this.I=null},Lt.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Lt.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Dt=h.JSON.stringify;function $t(){var t=zt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Rt{constructor(){this.h=this.g=null}add(t,e){const n=Mt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Pt,Mt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Vt),(t=>t.reset()));class Vt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Bt(t){h.setTimeout((()=>{throw t}),0)}function Ft(t,e){Pt||Ut(),jt||(Pt(),jt=!0),zt.add(t,e)}function Ut(){var t=h.Promise.resolve(void 0);Pt=function(){t.then(Ht)}}var jt=!1,zt=new Rt;function Ht(){for(var t;t=$t();){try{t.h.call(t.g)}catch(n){Bt(n)}var e=Mt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}jt=!1}function qt(t,e){Lt.call(this),this.h=t||1,this.g=e||h,this.j=w(this.kb,this),this.l=Date.now()}function Zt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Wt(t,e,n){if("function"===typeof t)n&&(t=w(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=w(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Kt(t){t.g=Wt((()=>{t.g=null,t.i&&(t.i=!1,Kt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}C(qt,Lt),i=qt.prototype,i.da=!1,i.S=null,i.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ot(this,"tick"),this.da&&(Zt(this),this.start()))}},i.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){qt.Z.M.call(this),Zt(this),delete this.g};class Gt extends S{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Kt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xt(t){S.call(this),this.h=t,this.g={}}C(Xt,S);var Qt=[];function Yt(t,e,n,i){Array.isArray(n)||(n&&(Qt[0]=n.toString()),n=Qt);for(var r=0;r<n.length;r++){var s=bt(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Jt(t){V(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Et(t)}),t),t.g={}}function te(){this.g=!0}function ee(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}function ne(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function ie(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+se(t,n)+(i?" "+i:"")}))}function re(t,e){t.info((function(){return"TIMEOUT: "+e}))}function se(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Dt(n)}catch(a){return e}}Xt.prototype.M=function(){Xt.Z.M.call(this),Jt(this)},Xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},te.prototype.Aa=function(){this.g=!1},te.prototype.info=function(){};var oe={},ae=null;function ce(){return ae=ae||new Lt}function le(t){at.call(this,oe.Ma,t)}function ue(t){const e=ce();Ot(e,new le(e,t))}function he(t,e){at.call(this,oe.STAT_EVENT,t),this.stat=e}function de(t){const e=ce();Ot(e,new he(e,t))}function pe(t,e){at.call(this,oe.Na,t),this.size=e}function fe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}oe.Ma="serverreachability",C(le,at),oe.STAT_EVENT="statevent",C(he,at),oe.Na="timingevent",C(pe,at);var me={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ge={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ve(){}function ye(t){return t.h||(t.h=t.i())}function be(){}ve.prototype.h=null;var we,_e={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ce(){at.call(this,"d")}function Se(){at.call(this,"c")}function Ee(){}function ke(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Xt(this),this.P=Te,t=K?125:void 0,this.W=new qt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ie}function Ie(){this.i=null,this.g="",this.h=!1}C(Ce,at),C(Se,at),C(Ee,ve),Ee.prototype.g=function(){return new XMLHttpRequest},Ee.prototype.i=function(){return{}},we=new Ee;var Te=45e3,xe={},Ae={};function Le(t,e,n){t.K=1,t.v=en(Ge(e)),t.s=n,t.U=!0,Oe(t,null)}function Oe(t,e){t.F=Date.now(),Re(t),t.A=Ge(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),vn(n.h,"t",i),t.C=0,n=t.l.H,t.h=new Ie,t.g=Si(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Gt(w(t.Ia,t,t.g),t.O)),Yt(t.V,t.g,"readystatechange",t.gb),e=t.H?B(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ue(1),ee(t.j,t.u,t.A,t.m,t.X,t.s)}function Ne(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function De(t,e,n){let i,r=!0;for(;!t.I&&t.C<n.length;){if(i=$e(t,n),i==Ae){4==e&&(t.o=4,de(14),r=!1),ie(t.j,t.m,null,"[Incomplete Response]");break}if(i==xe){t.o=4,de(15),ie(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}ie(t.j,t.m,i,null),Fe(t,i)}Ne(t)&&i!=Ae&&i!=xe&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,de(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),mi(e),e.L=!0,de(11))):(ie(t.j,t.m,n,"[Invalid Chunked Response]"),Be(t),Ve(t))}function $e(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Ae:(n=Number(e.substring(n,i)),isNaN(n)?xe:(i+=1,i+n>e.length?Ae:(e=e.substr(i,n),t.C=i+n,e)))}function Re(t){t.Y=Date.now()+t.P,Pe(t,t.P)}function Pe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=fe(w(t.eb,t),e)}function Me(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Ve(t){0==t.l.G||t.I||yi(t.l,t)}function Be(t){Me(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Zt(t.W),Jt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Fe(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||kn(n.i,t)))if(n.I=t.N,!t.J&&kn(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(l){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;vi(n),si(n)}fi(n),de(18)}}else n.ta=r[1],0<n.ta-n.U&&37500>r[2]&&n.N&&0==n.A&&!n.v&&(n.v=fe(w(n.ab,n),6e3));if(1>=En(n.i)&&n.ka){try{n.ka()}catch(l){}n.ka=void 0}}else wi(n,11)}else if((t.J||n.g==t)&&vi(n),!O(e))for(r=n.Ca.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const e=l[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const r=l[4];null!=r&&(n.za=r,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(i=1.5*u,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;!s.g&&($(t,"spdy")||$(t,"quic")||$(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(In(s,s.h),s.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,tn(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),i=n;var o=t;if(i.oa=Ci(i,i.H?i.la:null,i.W),o.J){Tn(i.i,o);var a=o,c=i.K;c&&a.setTimeout(c),a.B&&(Me(a),Re(a)),i.g=o}else pi(i);0<n.l.length&&ci(n)}else"stop"!=l[0]&&"close"!=l[0]||wi(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?wi(n,7):ri(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}ue(4)}catch(l){}}function Ue(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(p(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}function je(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(p(t)||"string"===typeof t)T(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(p(t)||"string"===typeof t){n=[];for(var i=t.length,r=0;r<i;r++)n.push(r)}else for(r in n=[],i=0,t)n[i++]=r;i=Ue(t),r=i.length;for(var s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}}function ze(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof ze)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function He(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];qe(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var r={};for(n=e=0;e<t.g.length;)i=t.g[e],qe(r,i)||(t.g[n++]=i,r[i]=1),e++;t.g.length=n}}function qe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}i=ke.prototype,i.setTimeout=function(t){this.P=t},i.gb=function(t){t=t.target;const e=this.L;e&&3==Yn(t)?e.l():this.Ia(t)},i.Ia=function(t){try{if(t==this.g)t:{const u=Yn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>u)&&(3!=u||K||this.g&&(this.h.h||this.g.ga()||Jn(this.g)))){this.I||4!=u||7==e||ue(8==e||0>=d?3:2),Me(this);var n=this.g.ba();this.N=n;e:if(Ne(this)){var i=Jn(this.g);t="";var r=i.length,s=4==Yn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Be(this),Ve(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,ne(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,de(12),Be(this),Ve(this);break t}ie(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Fe(this,n)}this.U?(De(this,u,o),K&&this.i&&3==u&&(Yt(this.V,this.W,"tick",this.fb),this.W.start())):(ie(this.j,this.m,o,null),Fe(this,o)),4==u&&Be(this),this.i&&!this.I&&(4==u?yi(this.l,this):(this.i=!1,Re(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,de(12)):(this.o=0,de(13)),Be(this),Ve(this)}}}catch(u){}},i.fb=function(){if(this.g){var t=Yn(this.g),e=this.g.ga();this.C<e.length&&(Me(this),De(this,t,e),this.i&&4!=t&&Re(this))}},i.cancel=function(){this.I=!0,Be(this)},i.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(re(this.j,this.A),2!=this.K&&(ue(3),de(17)),Be(this),this.o=2,Ve(this)):Pe(this,this.Y-t)},i=ze.prototype,i.R=function(){He(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},i.T=function(){return He(this),this.g.concat()},i.get=function(t,e){return qe(this.h,t)?this.h[t]:e},i.set=function(t,e){qe(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},i.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var r=n[i],s=this.get(r);t.call(e,s,r,this)}};var Ze=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function We(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ke(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Ke){this.g=void 0!==e?e:t.g,Xe(this,t.j),this.s=t.s,Qe(this,t.i),Ye(this,t.m),this.l=t.l,e=t.h;var n=new pn;n.i=e.i,e.g&&(n.g=new ze(e.g),n.h=e.h),Je(this,n),this.o=t.o}else t&&(n=String(t).match(Ze))?(this.g=!!e,Xe(this,n[1]||"",!0),this.s=sn(n[2]||""),Qe(this,n[3]||"",!0),Ye(this,n[4]),this.l=sn(n[5]||"",!0),Je(this,n[6]||"",!0),this.o=sn(n[7]||"")):(this.g=!!e,this.h=new pn(null,this.g))}function Ge(t){return new Ke(t)}function Xe(t,e,n){t.j=n?sn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qe(t,e,n){t.i=n?sn(e,!0):e}function Ye(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Je(t,e,n){e instanceof pn?(t.h=e,bn(t.h,t.g)):(n||(e=on(e,hn)),t.h=new pn(e,t.g))}function tn(t,e,n){t.h.set(e,n)}function en(t){return tn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nn(t){return t instanceof Ke?Ge(t):new Ke(t,void 0)}function rn(t,e,n,i){var r=new Ke(null,void 0);return t&&Xe(r,t),e&&Qe(r,e),n&&Ye(r,n),i&&(r.l=i),r}function sn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,an),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function an(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ke.prototype.toString=function(){var t=[],e=this.j;e&&t.push(on(e,cn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(on(e,cn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?un:ln,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",on(n,dn)),t.join("")};var cn=/[#\/\?@]/g,ln=/[#\?:]/g,un=/[#\?]/g,hn=/[#\?@]/g,dn=/#/g;function pn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function fn(t){t.g||(t.g=new ze,t.h=0,t.i&&We(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function mn(t,e){fn(t),e=yn(t,e),qe(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,qe(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&He(t)))}function gn(t,e){return fn(t),e=yn(t,e),qe(t.g.h,e)}function vn(t,e,n){mn(t,e),0<n.length&&(t.i=null,t.g.set(yn(t,e),L(n)),t.h+=n.length)}function yn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bn(t,e){e&&!t.j&&(fn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(mn(this,e),vn(this,n,t))}),t)),t.j=e}i=pn.prototype,i.add=function(t,e){fn(this),this.i=null,t=yn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){fn(this),this.g.forEach((function(n,i){T(n,(function(n){t.call(e,n,i,this)}),this)}),this)},i.T=function(){fn(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var r=t[i],s=0;s<r.length;s++)n.push(e[i]);return n},i.R=function(t){fn(this);var e=[];if("string"===typeof t)gn(this,t)&&(e=A(e,this.g.get(yn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=A(e,t[n])}return e},i.set=function(t,e){return fn(this),this.i=null,t=yn(this,t),gn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],r=encodeURIComponent(String(i));i=this.R(i);for(var s=0;s<i.length;s++){var o=r;""!==i[s]&&(o+="="+encodeURIComponent(String(i[s]))),t.push(o)}}return this.i=t.join("&")};var wn=class{constructor(t,e){this.h=t,this.g=e}};function _n(t){this.l=t||Cn,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ea&&h.g.Ea()&&h.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Cn=10;function Sn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function En(t){return t.h?1:t.g?t.g.size:0}function kn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function In(t,e){t.g?t.g.add(e):t.h=e}function Tn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function xn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return L(t.i)}function An(){}function Ln(){this.g=new An}function On(t,e,n){const i=n||"";try{je(t,(function(t,n){let r=t;f(t)&&(r=Dt(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function Nn(t,e){const n=new te;if(h.Image){const i=new Image;i.onload=_(Dn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=_(Dn,n,i,"TestLoadImage: error",!1,e),i.onabort=_(Dn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=_(Dn,n,i,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}function Dn(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(s){}}function $n(t){this.l=t.$b||null,this.j=t.ib||!1}function Rn(t,e){Lt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Pn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_n.prototype.cancel=function(){if(this.i=xn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},An.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},An.prototype.parse=function(t){return h.JSON.parse(t,void 0)},C($n,ve),$n.prototype.g=function(){return new Rn(this.l,this.j)},$n.prototype.i=function(t){return function(){return t}}({}),C(Rn,Lt);var Pn=0;function Mn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Vn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Bn(t)}function Bn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}i=Rn.prototype,i.open=function(t,e){if(this.readyState!=Pn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Bn(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Vn(this)),this.readyState=Pn},i.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Mn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},i.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vn(this):Bn(this),3==this.readyState&&Mn(this)}},i.Ua=function(t){this.g&&(this.response=this.responseText=t,Vn(this))},i.Ta=function(t){this.g&&(this.response=t,Vn(this))},i.ha=function(){this.g&&Vn(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Rn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Fn=h.JSON.parse;function Un(t){Lt.call(this),this.headers=new ze,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=jn,this.K=this.L=!1}C(Un,Lt);var jn="",zn=/^https?$/i,Hn=["POST","PUT"];function qn(t){return Z&&it()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Zn(t){return"content-type"==t.toLowerCase()}function Wn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Kn(t),Xn(t)}function Kn(t){t.D||(t.D=!0,Ot(t,"complete"),Ot(t,"error"))}function Gn(t){if(t.h&&"undefined"!=typeof u&&(!t.C[1]||4!=Yn(t)||2!=t.ba()))if(t.v&&4==Yn(t))Wt(t.Fa,0,t);else if(Ot(t,"readystatechange"),4==Yn(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===c){var r=String(t.H).match(Ze)[1]||null;if(!r&&h.self&&h.self.location){var s=h.self.location.protocol;r=s.substr(0,s.length-1)}i=!zn.test(r?r.toLowerCase():"")}n=i}if(n)Ot(t,"complete"),Ot(t,"success");else{t.m=6;try{var o=2<Yn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",Kn(t)}}finally{Xn(t)}}}function Xn(t,e){if(t.g){Qn(t);const i=t.g,r=t.C[0]?d:null;t.g=null,t.C=null,e||Ot(t,"ready");try{i.onreadystatechange=r}catch(n){}}}function Qn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Yn(t){return t.g?t.g.readyState:0}function Jn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case jn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function ti(t){let e="";return V(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function ei(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=ti(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):tn(t,e,n))}function ni(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function ii(t){this.za=0,this.l=[],this.h=new te,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ni("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ni("baseRetryDelayMs",5e3,t),this.$a=ni("retryDelaySeedMs",1e4,t),this.Ya=ni("forwardChannelMaxRetries",2,t),this.ra=ni("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new _n(t&&t.concurrentRequestLimit),this.Ca=new Ln,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ri(t){if(oi(t),3==t.G){var e=t.V++,n=Ge(t.F);tn(n,"SID",t.J),tn(n,"RID",e),tn(n,"TYPE","terminate"),hi(t,n),e=new ke(t,t.h,e,void 0),e.K=2,e.v=en(Ge(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=Si(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Re(e)}_i(t)}function si(t){t.g&&(mi(t),t.g.cancel(),t.g=null)}function oi(t){si(t),t.u&&(h.clearTimeout(t.u),t.u=null),vi(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function ai(t,e){t.l.push(new wn(t.Za++,e)),3==t.G&&ci(t)}function ci(t){Sn(t.i)||t.m||(t.m=!0,Ft(t.Ha,t),t.C=0)}function li(t,e){return!(En(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=fe(w(t.Ha,t,e),bi(t,t.C)),t.C++,!0))}function ui(t,e){var n;n=e?e.m:t.V++;const i=Ge(t.F);tn(i,"SID",t.J),tn(i,"RID",n),tn(i,"AID",t.U),hi(t,i),t.o&&t.s&&ei(i,t.o,t.s),n=new ke(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=di(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),In(t.i,n),Le(n,i,e)}function hi(t,e){t.j&&je({},(function(t,n){tn(e,n,t)}))}function di(t,e,n){n=Math.min(t.l.length,n);var i=t.j?w(t.j.Oa,t.j,t):null;t:{var r=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),s=!1;else try{On(a,t,"req"+n+"_")}catch(Qi){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function pi(t){t.g||t.u||(t.Y=1,Ft(t.Ga,t),t.A=0)}function fi(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=fe(w(t.Ga,t),bi(t,t.A)),t.A++,!0)}function mi(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function gi(t){t.g=new ke(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ge(t.oa);tn(e,"RID","rpc"),tn(e,"SID",t.J),tn(e,"CI",t.N?"0":"1"),tn(e,"AID",t.U),hi(t,e),tn(e,"TYPE","xmlhttp"),t.o&&t.s&&ei(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=en(Ge(e)),n.s=null,n.U=!0,Oe(n,t)}function vi(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function yi(t,e){var n=null;if(t.g==e){vi(t),mi(t),t.g=null;var i=2}else{if(!kn(t.i,e))return;n=e.D,Tn(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;i=ce(),Ot(i,new pe(i,n,e,r)),ci(t)}else pi(t);else if(r=e.o,3==r||0==r&&0<t.I||!(1==i&&li(t,e)||2==i&&fi(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:wi(t,5);break;case 4:wi(t,10);break;case 3:wi(t,6);break;default:wi(t,2)}}function bi(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function wi(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=w(t.jb,t);n||(n=new Ke("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Xe(n,"https"),en(n)),Nn(n.toString(),i)}else de(2);t.G=0,t.j&&t.j.va(e),_i(t),oi(t)}function _i(t){t.G=0,t.I=-1,t.j&&(0==xn(t.i).length&&0==t.l.length||(t.i.i.length=0,L(t.l),t.l.length=0),t.j.ua())}function Ci(t,e,n){let i=nn(n);if(""!=i.i)e&&Qe(i,e+"."+i.i),Ye(i,i.m);else{const t=h.location;i=rn(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&V(t.aa,(function(t,e){tn(i,e,t)})),e=t.D,n=t.sa,e&&n&&tn(i,e,n),tn(i,"VER",t.ma),hi(t,i),i}function Si(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Un(new $n({ib:!0})):new Un(t.qa),e.L=t.H,e}function Ei(){}function ki(){if(Z&&!(10<=Number(st)))throw Error("Environmental error: no available transport.")}function Ii(t,e){Lt.call(this),this.g=new ii(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!O(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!O(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ai(this)}function Ti(t){Ce.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function xi(){Se.call(this),this.status=1}function Ai(t){this.g=t}i=Un.prototype,i.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():we.g(),this.C=this.u?ye(this.u):ye(we),this.g.onreadystatechange=w(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Wn(this,s)}t=n||"";const r=new ze(this.headers);i&&je(i,(function(t,e){r.set(e,t)})),i=x(r.T()),n=h.FormData&&t instanceof h.FormData,!(0<=I(Hn,e))||i||n||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),r.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Qn(this),0<this.B&&((this.K=qn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=w(this.pa,this)):this.A=Wt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Wn(this,s)}},i.pa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ot(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ot(this,"complete"),Ot(this,"abort"),Xn(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xn(this,!0)),Un.Z.M.call(this)},i.Fa=function(){this.s||(this.F||this.v||this.l?Gn(this):this.cb())},i.cb=function(){Gn(this)},i.ba=function(){try{return 2<Yn(this)?this.g.status:-1}catch(t){return-1}},i.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Fn(e)}},i.Da=function(){return this.m},i.La=function(){return"string"===typeof this.j?this.j:String(this.j)},i=ii.prototype,i.ma=8,i.G=1,i.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},i.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new ke(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=B(s),U(s,this.P)):s=this.P),null===this.o&&(r.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(i="__data__"in i.g&&(i=i.g.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(e+=i,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=di(this,r,e),n=Ge(this.F),tn(n,"RID",t),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),hi(this,n),this.o&&s&&ei(n,this.o,s),In(this.i,r),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",e),tn(n,"SID","null"),r.$=!0,Le(r,n,null)):Le(r,n,e),this.G=2}}else 3==this.G&&(t?ui(this,t):0==this.l.length||Sn(this.i)||ui(this))},i.Ga=function(){if(this.u=null,gi(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=fe(w(this.bb,this),t)}},i.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,de(10),si(this),gi(this))},i.ab=function(){null!=this.v&&(this.v=null,si(this),fi(this),de(19))},i.jb=function(t){t?(this.h.info("Successfully pinged google.com"),de(2)):(this.h.info("Failed to ping google.com"),de(1))},i=Ei.prototype,i.xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Oa=function(){},ki.prototype.g=function(t,e){return new Ii(t,e)},C(Ii,Lt),Ii.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ft(w(t.hb,t,e))),de(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ci(t,null,t.W),ci(t)},Ii.prototype.close=function(){ri(this.g)},Ii.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ai(this.g,e)}else this.v?(e={},e.__data__=Dt(t),ai(this.g,e)):ai(this.g,t)},Ii.prototype.M=function(){this.g.j=null,delete this.j,ri(this.g),delete this.g,Ii.Z.M.call(this)},C(Ti,Ce),C(xi,Se),C(Ai,Ei),Ai.prototype.xa=function(){Ot(this.g,"a")},Ai.prototype.wa=function(t){Ot(this.g,new Ti(t))},Ai.prototype.va=function(t){Ot(this.g,new xi(t))},Ai.prototype.ua=function(){Ot(this.g,"b")},ki.prototype.createWebChannel=ki.prototype.g,Ii.prototype.send=Ii.prototype.u,Ii.prototype.open=Ii.prototype.m,Ii.prototype.close=Ii.prototype.close,me.NO_ERROR=0,me.TIMEOUT=8,me.HTTP_ERROR=6,ge.COMPLETE="complete",be.EventType=_e,_e.OPEN="a",_e.CLOSE="b",_e.ERROR="c",_e.MESSAGE="d",Lt.prototype.listen=Lt.prototype.N,Un.prototype.listenOnce=Un.prototype.O,Un.prototype.getLastError=Un.prototype.La,Un.prototype.getLastErrorCode=Un.prototype.Da,Un.prototype.getStatus=Un.prototype.ba,Un.prototype.getResponseJson=Un.prototype.Qa,Un.prototype.getResponseText=Un.prototype.ga,Un.prototype.send=Un.prototype.ea;var Li=l.createWebChannelTransport=function(){return new ki},Oi=l.getStatEventTarget=function(){return ce()},Ni=l.ErrorCode=me,Di=l.EventType=ge,$i=l.Event=oe,Ri=l.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Pi=l.FetchXmlHttpFactory=$n,Mi=l.WebChannel=be,Vi=l.XhrIo=Un;const Bi="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Fi.UNAUTHENTICATED=new Fi(null),Fi.GOOGLE_CREDENTIALS=new Fi("google-credentials-uid"),Fi.FIRST_PARTY=new Fi("first-party-uid"),Fi.MOCK_USER=new Fi("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ui="9.9.4";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new o.Yd("@firebase/firestore");function zi(){return ji.logLevel}function Hi(t,...e){if(ji.logLevel<=o["in"].DEBUG){const n=e.map(Wi);ji.debug(`Firestore (${Ui}): ${t}`,...n)}}function qi(t,...e){if(ji.logLevel<=o["in"].ERROR){const n=e.map(Wi);ji.error(`Firestore (${Ui}): ${t}`,...n)}}function Zi(t,...e){if(ji.logLevel<=o["in"].WARN){const n=e.map(Wi);ji.warn(`Firestore (${Ui}): ${t}`,...n)}}function Wi(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t="Unexpected state"){const e=`FIRESTORE (${Ui}) INTERNAL ASSERTION FAILED: `+t;throw qi(e),new Error(e)}function Gi(t,e){t||Ki()}function Xi(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Yi extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class er{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Fi.UNAUTHENTICATED)))}shutdown(){}}class nr{constructor(t){this.t=t,this.currentUser=Fi.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new Ji;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ji,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Hi("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Hi("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ji)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Hi("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Gi("string"==typeof e.accessToken),new tr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Gi(null===t||"string"==typeof t),new Fi(t)}}class ir{constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i,this.type="FirstParty",this.user=Fi.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Gi(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class rr{constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i}getToken(){return Promise.resolve(new ir(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Fi.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class sr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class or{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&Hi("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,Hi("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Hi("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?i(t):Hi("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Gi("string"==typeof t.token),this.A=t.token,new sr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ar(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=ar(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%t.length))}return n}}function lr(t,e){return t<e?-1:t>e?1:0}function ur(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hr{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Yi(Qi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Yi(Qi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Yi(Qi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Yi(Qi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return hr.fromMillis(Date.now())}static fromDate(t){return hr.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new hr(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?lr(this.nanoseconds,t.nanoseconds):lr(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t){this.timestamp=t}static fromTimestamp(t){return new dr(t)}static min(){return new dr(new hr(0,0))}static max(){return new dr(new hr(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ki(),void 0===n?n=t.length-e:n>t.length-e&&Ki(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===pr.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof pr?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class fr extends pr{construct(t,e,n){return new fr(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Yi(Qi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new fr(e)}static emptyPath(){return new fr([])}}const mr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gr extends pr{construct(t,e,n){return new gr(t,e,n)}static isValidIdentifier(t){return mr.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gr.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new gr(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new Yi(Qi.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Yi(Qi.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Yi(Qi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new Yi(Qi.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new gr(e)}static emptyPath(){return new gr([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t){this.path=t}static fromPath(t){return new vr(fr.fromString(t))}static fromName(t){return new vr(fr.fromString(t).popFirst(5))}static empty(){return new vr(fr.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===fr.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return fr.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new vr(new fr(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}yr.UNKNOWN_ID=-1;function br(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=dr.fromTimestamp(1e9===i?new hr(n+1,0):new hr(n,i));return new _r(r,vr.empty(),e)}function wr(t){return new _r(t.readTime,t.key,-1)}class _r{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new _r(dr.min(),vr.empty(),-1)}static max(){return new _r(dr.max(),vr.empty(),-1)}}function Cr(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=vr.comparator(t.documentKey,e.documentKey),0!==n?n:lr(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Er{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr(t){if(t.code!==Qi.FAILED_PRECONDITION||t.message!==Sr)throw t;Hi("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ki(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ir(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ir?e:Ir.resolve(e)}catch(t){return Ir.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ir.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ir.reject(e)}static resolve(t){return new Ir(((e,n)=>{e(t)}))}static reject(t){return new Ir(((e,n)=>{n(t)}))}static waitFor(t){return new Ir(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=Ir.resolve(!1);for(const n of t)e=e.next((t=>t?Ir.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new Ir(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new Ir(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Or(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xr.at=-1;class Nr{constructor(t,e){this.comparator=t,this.root=e||$r.EMPTY}insert(t,e){return new Nr(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,$r.BLACK,null,null))}remove(t){return new Nr(this.comparator,this.root.remove(t,this.comparator).copy(null,null,$r.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Dr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Dr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Dr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Dr(this.root,t,this.comparator,!0)}}class Dr{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class $r{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:$r.RED,this.left=null!=i?i:$r.EMPTY,this.right=null!=r?r:$r.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new $r(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $r.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return $r.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,$r.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,$r.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ki();if(this.right.isRed())throw Ki();const t=this.left.check();if(t!==this.right.check())throw Ki();return t+(this.isRed()?0:1)}}$r.EMPTY=null,$r.RED=!0,$r.BLACK=!1,$r.EMPTY=new class{constructor(){this.size=0}get key(){throw Ki()}get value(){throw Ki()}get color(){throw Ki()}get left(){throw Ki()}get right(){throw Ki()}copy(t,e,n,i,r){return this}insert(t,e,n){return new $r(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rr{constructor(t){this.comparator=t,this.data=new Nr(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Pr(this.data.getIterator())}getIteratorFrom(t){return new Pr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Rr))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Rr(this.comparator);return e.data=t,e}}class Pr{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mr{constructor(t){this.fields=t,t.sort(gr.comparator)}static empty(){return new Mr([])}unionWith(t){let e=new Rr(gr.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Mr(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ur(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vr{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Vr(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Vr(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return lr(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vr.EMPTY_BYTE_STRING=new Vr("");const Br=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fr(t){if(Gi(!!t),"string"==typeof t){let e=0;const n=Br.exec(t);if(Gi(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ur(t.seconds),nanos:Ur(t.nanos)}}function Ur(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function jr(t){return"string"==typeof t?Vr.fromBase64String(t):Vr.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Hr(t){const e=t.mapValue.fields.__previous_value__;return zr(e)?Hr(e):e}function qr(t){const e=Fr(t.mapValue.fields.__local_write_time__.timestampValue);return new hr(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,e,n,i,r,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Wr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Wr("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Wr&&t.projectId===this.projectId&&t.database===this.database}}function Kr(t){return null==t}function Gr(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zr(t)?4:us(t)?9007199254740991:10:Ki()}function Yr(t,e){if(t===e)return!0;const n=Qr(t);if(n!==Qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qr(t).isEqual(qr(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Fr(t.timestampValue),i=Fr(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return jr(t.bytesValue).isEqual(jr(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ur(t.geoPointValue.latitude)===Ur(e.geoPointValue.latitude)&&Ur(t.geoPointValue.longitude)===Ur(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ur(t.integerValue)===Ur(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ur(t.doubleValue),i=Ur(e.doubleValue);return n===i?Gr(n)===Gr(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return ur(t.arrayValue.values||[],e.arrayValue.values||[],Yr);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(Ar(n)!==Ar(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!Yr(n[r],i[r])))return!1;return!0}(t,e);default:return Ki()}}function Jr(t,e){return void 0!==(t.values||[]).find((t=>Yr(t,e)))}function ts(t,e){if(t===e)return 0;const n=Qr(t),i=Qr(e);if(n!==i)return lr(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return lr(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ur(t.integerValue||t.doubleValue),i=Ur(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return es(t.timestampValue,e.timestampValue);case 4:return es(qr(t),qr(e));case 5:return lr(t.stringValue,e.stringValue);case 6:return function(t,e){const n=jr(t),i=jr(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let r=0;r<n.length&&r<i.length;r++){const t=lr(n[r],i[r]);if(0!==t)return t}return lr(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=lr(Ur(t.latitude),Ur(e.latitude));return 0!==n?n:lr(Ur(t.longitude),Ur(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let r=0;r<n.length&&r<i.length;++r){const t=ts(n[r],i[r]);if(t)return t}return lr(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Xr.mapValue&&e===Xr.mapValue)return 0;if(t===Xr.mapValue)return 1;if(e===Xr.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const t=lr(i[o],s[o]);if(0!==t)return t;const e=ts(n[i[o]],r[s[o]]);if(0!==e)return e}return lr(i.length,s.length)}(t.mapValue,e.mapValue);default:throw Ki()}}function es(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return lr(t,e);const n=Fr(t),i=Fr(e),r=lr(n.seconds,i.seconds);return 0!==r?r:lr(n.nanos,i.nanos)}function ns(t){return is(t)}function is(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Fr(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?jr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,vr.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=is(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${is(t.fields[r])}`;return n+"}"}(t.mapValue):Ki();var e,n}function rs(t){return!!t&&"integerValue"in t}function ss(t){return!!t&&"arrayValue"in t}function os(t){return!!t&&"nullValue"in t}function as(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function cs(t){return!!t&&"mapValue"in t}function ls(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Lr(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ls(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ls(t.arrayValue.values[n]);return e}return Object.assign({},t)}function us(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hs{constructor(t){this.value=t}static empty(){return new hs({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!cs(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ls(e)}setAll(t){let e=gr.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=ls(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());cs(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Yr(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];cs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Lr(e,((e,n)=>t[e]=n));for(const i of n)delete t[i]}clone(){return new hs(ls(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ds{constructor(t,e,n,i,r,s){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.data=r,this.documentState=s}static newInvalidDocument(t){return new ds(t,0,dr.min(),dr.min(),hs.empty(),0)}static newFoundDocument(t,e,n){return new ds(t,1,e,dr.min(),n,0)}static newNoDocument(t,e){return new ds(t,2,e,dr.min(),hs.empty(),0)}static newUnknownDocument(t,e){return new ds(t,3,e,dr.min(),hs.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=hs.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=hs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=dr.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ds&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ds(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ht=null}}function fs(t,e=null,n=[],i=[],r=null,s=null,o=null){return new ps(t,e,n,i,r,s,o)}function ms(t){const e=Xi(t);if(null===e.ht){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+ns(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Kr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>ns(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>ns(t))).join(",")),e.ht=t}return e.ht}function gs(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ns(e.value)}`;var e})).join(", ")}]`),Kr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>ns(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>ns(t))).join(",")),`Target(${e})`}function vs(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!Ls(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(n=t.filters[r],i=e.filters[r],n.op!==i.op||!n.field.isEqual(i.field)||!Yr(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ns(t.startAt,e.startAt)&&Ns(t.endAt,e.endAt)}function ys(t){return vr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class bs extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.lt(t,e,n):new ws(t,e,n):"array-contains"===e?new Es(t,n):"in"===e?new ks(t,n):"not-in"===e?new Is(t,n):"array-contains-any"===e?new Ts(t,n):new bs(t,e,n)}static lt(t,e,n){return"in"===e?new _s(t,n):new Cs(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.ft(ts(e,this.value)):null!==e&&Qr(this.value)===Qr(e)&&this.ft(ts(e,this.value))}ft(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ki()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class ws extends bs{constructor(t,e,n){super(t,e,n),this.key=vr.fromName(n.referenceValue)}matches(t){const e=vr.comparator(t.key,this.key);return this.ft(e)}}class _s extends bs{constructor(t,e){super(t,"in",e),this.keys=Ss("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Cs extends bs{constructor(t,e){super(t,"not-in",e),this.keys=Ss("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ss(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>vr.fromName(t.referenceValue)))}class Es extends bs{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ss(e)&&Jr(e.arrayValue,this.value)}}class ks extends bs{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Jr(this.value.arrayValue,e)}}class Is extends bs{constructor(t,e){super(t,"not-in",e)}matches(t){if(Jr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Jr(this.value.arrayValue,e)}}class Ts extends bs{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ss(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Jr(this.value.arrayValue,t)))}}class xs{constructor(t,e){this.position=t,this.inclusive=e}}class As{constructor(t,e="asc"){this.field=t,this.dir=e}}function Ls(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Os(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?vr.comparator(vr.fromName(o.referenceValue),n.key):ts(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function Ns(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yr(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function $s(t,e,n,i,r,s,o,a){return new Ds(t,e,n,i,r,s,o,a)}function Rs(t){return new Ds(t)}function Ps(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ms(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Vs(t){for(const e of t.filters)if(e.dt())return e.field;return null}function Bs(t){return null!==t.collectionGroup}function Fs(t){const e=Xi(t);if(null===e._t){e._t=[];const t=Vs(e),n=Ms(e);if(null!==t&&null===n)t.isKeyField()||e._t.push(new As(t)),e._t.push(new As(gr.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e._t.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new As(gr.keyField(),t))}}}return e._t}function Us(t){const e=Xi(t);if(!e.wt)if("F"===e.limitType)e.wt=fs(e.path,e.collectionGroup,Fs(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of Fs(e)){const e="desc"===r.dir?"asc":"desc";t.push(new As(r.field,e))}const n=e.endAt?new xs(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new xs(e.startAt.position,e.startAt.inclusive):null;e.wt=fs(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.wt}function js(t,e,n){return new Ds(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zs(t,e){return vs(Us(t),Us(e))&&t.limitType===e.limitType}function Hs(t){return`${ms(Us(t))}|lt:${t.limitType}`}function qs(t){return`Query(target=${gs(Us(t))}; limitType=${t.limitType})`}function Zs(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):vr.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=Os(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,Fs(t),e))&&!(t.endAt&&!function(t,e,n){const i=Os(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,Fs(t),e))}(t,e)}function Ws(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ks(t){return(e,n)=>{let i=!1;for(const r of Fs(t)){const t=Gs(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}function Gs(t,e,n){const i=t.field.isKeyField()?vr.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?ts(i,r):Ki()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Ki()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gr(e)?"-0":e}}function Qs(t){return{integerValue:""+t}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this._=void 0}}function Js(t,e,n){return t instanceof no?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof io?ro(t,e):t instanceof so?oo(t,e):function(t,e){const n=eo(t,e),i=co(n)+co(t.yt);return rs(n)&&rs(t.yt)?Qs(i):Xs(t.It,i)}(t,e)}function to(t,e,n){return t instanceof io?ro(t,e):t instanceof so?oo(t,e):n}function eo(t,e){return t instanceof ao?rs(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class no extends Ys{}class io extends Ys{constructor(t){super(),this.elements=t}}function ro(t,e){const n=lo(e);for(const i of t.elements)n.some((t=>Yr(t,i)))||n.push(i);return{arrayValue:{values:n}}}class so extends Ys{constructor(t){super(),this.elements=t}}function oo(t,e){let n=lo(e);for(const i of t.elements)n=n.filter((t=>!Yr(t,i)));return{arrayValue:{values:n}}}class ao extends Ys{constructor(t,e){super(),this.It=t,this.yt=e}}function co(t){return Ur(t.integerValue||t.doubleValue)}function lo(t){return ss(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof io&&e instanceof io||t instanceof so&&e instanceof so?ur(t.elements,e.elements,Yr):t instanceof ao&&e instanceof ao?Yr(t.yt,e.yt):t instanceof no&&e instanceof no}(t.transform,e.transform)}class ho{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ho}static exists(t){return new ho(void 0,t)}static updateTime(t){return new ho(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function po(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class fo{}function mo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Eo(t.key,ho.none()):new bo(t.key,t.data,ho.none());{const n=t.data,i=hs.empty();let r=new Rr(gr.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new wo(t.key,i,new Mr(r.toArray()),ho.none())}}function go(t,e,n){t instanceof bo?function(t,e,n){const i=t.value.clone(),r=Co(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof wo?function(t,e,n){if(!po(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Co(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(_o(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function vo(t,e,n,i){return t instanceof bo?function(t,e,n,i){if(!po(t.precondition,e))return n;const r=t.value.clone(),s=So(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof wo?function(t,e,n,i){if(!po(t.precondition,e))return n;const r=So(t.fieldTransforms,i,e),s=e.data;return s.setAll(_o(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return po(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function yo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ur(t,e,((t,e)=>uo(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class bo extends fo{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class wo extends fo{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function _o(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function Co(t,e,n){const i=new Map;Gi(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,to(o,a,n[r]))}return i}function So(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,Js(t,s,e))}return i}class Eo extends fo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ko{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Io,To;function xo(t){if(void 0===t)return qi("GRPC error has no .code"),Qi.UNKNOWN;switch(t){case Io.OK:return Qi.OK;case Io.CANCELLED:return Qi.CANCELLED;case Io.UNKNOWN:return Qi.UNKNOWN;case Io.DEADLINE_EXCEEDED:return Qi.DEADLINE_EXCEEDED;case Io.RESOURCE_EXHAUSTED:return Qi.RESOURCE_EXHAUSTED;case Io.INTERNAL:return Qi.INTERNAL;case Io.UNAVAILABLE:return Qi.UNAVAILABLE;case Io.UNAUTHENTICATED:return Qi.UNAUTHENTICATED;case Io.INVALID_ARGUMENT:return Qi.INVALID_ARGUMENT;case Io.NOT_FOUND:return Qi.NOT_FOUND;case Io.ALREADY_EXISTS:return Qi.ALREADY_EXISTS;case Io.PERMISSION_DENIED:return Qi.PERMISSION_DENIED;case Io.FAILED_PRECONDITION:return Qi.FAILED_PRECONDITION;case Io.ABORTED:return Qi.ABORTED;case Io.OUT_OF_RANGE:return Qi.OUT_OF_RANGE;case Io.UNIMPLEMENTED:return Qi.UNIMPLEMENTED;case Io.DATA_LOSS:return Qi.DATA_LOSS;default:return Ki()}}(To=Io||(Io={}))[To.OK=0]="OK",To[To.CANCELLED=1]="CANCELLED",To[To.UNKNOWN=2]="UNKNOWN",To[To.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",To[To.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",To[To.NOT_FOUND=5]="NOT_FOUND",To[To.ALREADY_EXISTS=6]="ALREADY_EXISTS",To[To.PERMISSION_DENIED=7]="PERMISSION_DENIED",To[To.UNAUTHENTICATED=16]="UNAUTHENTICATED",To[To.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",To[To.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",To[To.ABORTED=10]="ABORTED",To[To.OUT_OF_RANGE=11]="OUT_OF_RANGE",To[To.UNIMPLEMENTED=12]="UNIMPLEMENTED",To[To.INTERNAL=13]="INTERNAL",To[To.UNAVAILABLE=14]="UNAVAILABLE",To[To.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ao{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Lr(this.inner,((e,n)=>{for(const[i,r]of n)t(i,r)}))}isEmpty(){return Or(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new Nr(vr.comparator);function Oo(){return Lo}const No=new Nr(vr.comparator);function Do(...t){let e=No;for(const n of t)e=e.insert(n.key,n);return e}function $o(t){let e=No;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Ro(){return Mo()}function Po(){return Mo()}function Mo(){return new Ao((t=>t.toString()),((t,e)=>t.isEqual(e)))}new Nr(vr.comparator);const Vo=new Rr(vr.comparator);function Bo(...t){let e=Vo;for(const n of t)e=e.add(n);return e}const Fo=new Rr(lr);function Uo(){return Fo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(t,e,n,i,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,zo.createSynthesizedTargetChangeForCurrentChange(t,e)),new jo(dr.min(),n,Uo(),Oo(),Bo())}}class zo{constructor(t,e,n,i,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,e){return new zo(Vr.EMPTY_BYTE_STRING,e,Bo(),Bo(),Bo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(t,e,n,i){this.Tt=t,this.removedTargetIds=e,this.key=n,this.Et=i}}class qo{constructor(t,e){this.targetId=t,this.At=e}}class Zo{constructor(t,e,n=Vr.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Wo{constructor(){this.Rt=0,this.bt=Xo(),this.Pt=Vr.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(t){t.approximateByteSize()>0&&(this.Vt=!0,this.Pt=t)}xt(){let t=Bo(),e=Bo(),n=Bo();return this.bt.forEach(((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:Ki()}})),new zo(this.Pt,this.vt,t,e,n)}Nt(){this.Vt=!1,this.bt=Xo()}kt(t,e){this.Vt=!0,this.bt=this.bt.insert(t,e)}Mt(t){this.Vt=!0,this.bt=this.bt.remove(t)}Ot(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class Ko{constructor(t){this.Bt=t,this.Lt=new Map,this.Ut=Oo(),this.qt=Go(),this.Kt=new Rr(lr)}Gt(t){for(const e of t.Tt)t.Et&&t.Et.isFoundDocument()?this.Qt(e,t.Et):this.jt(e,t.key,t.Et);for(const e of t.removedTargetIds)this.jt(e,t.key,t.Et)}Wt(t){this.forEachTarget(t,(e=>{const n=this.zt(e);switch(t.state){case 0:this.Ht(e)&&n.Ct(t.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(t.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(e);break;case 3:this.Ht(e)&&(n.$t(),n.Ct(t.resumeToken));break;case 4:this.Ht(e)&&(this.Jt(e),n.Ct(t.resumeToken));break;default:Ki()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Lt.forEach(((t,n)=>{this.Ht(n)&&e(n)}))}Yt(t){const e=t.targetId,n=t.At.count,i=this.Xt(e);if(i){const t=i.target;if(ys(t))if(0===n){const n=new vr(t.path);this.jt(e,n,ds.newNoDocument(n,dr.min()))}else Gi(1===n);else this.Zt(e)!==n&&(this.Jt(e),this.Kt=this.Kt.add(e))}}te(t){const e=new Map;this.Lt.forEach(((n,i)=>{const r=this.Xt(i);if(r){if(n.current&&ys(r.target)){const e=new vr(r.target.path);null!==this.Ut.get(e)||this.ee(i,e)||this.jt(i,e,ds.newNoDocument(e,t))}n.Dt&&(e.set(i,n.xt()),n.Nt())}}));let n=Bo();this.qt.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Xt(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.Ut.forEach(((e,n)=>n.setReadTime(t)));const i=new jo(t,e,this.Kt,this.Ut,n);return this.Ut=Oo(),this.qt=Go(),this.Kt=new Rr(lr),i}Qt(t,e){if(!this.Ht(t))return;const n=this.ee(t,e.key)?2:0;this.zt(t).kt(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ne(e.key).add(t))}jt(t,e,n){if(!this.Ht(t))return;const i=this.zt(t);this.ee(t,e)?i.kt(e,1):i.Mt(e),this.qt=this.qt.insert(e,this.ne(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.Lt.delete(t)}Zt(t){const e=this.zt(t).xt();return this.Bt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.zt(t).Ot()}zt(t){let e=this.Lt.get(t);return e||(e=new Wo,this.Lt.set(t,e)),e}ne(t){let e=this.qt.get(t);return e||(e=new Rr(lr),this.qt=this.qt.insert(t,e)),e}Ht(t){const e=null!==this.Xt(t);return e||Hi("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.Lt.get(t);return e&&e.St?null:this.Bt.se(t)}Jt(t){this.Lt.set(t,new Wo),this.Bt.getRemoteKeysForTarget(t).forEach((e=>{this.jt(t,e,null)}))}ee(t,e){return this.Bt.getRemoteKeysForTarget(t).has(e)}}function Go(){return new Nr(vr.comparator)}function Xo(){return new Nr(vr.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Yo=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class Jo{constructor(t,e){this.databaseId=t,this.gt=e}}function ta(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ea(t,e){return t.gt?e.toBase64():e.toUint8Array()}function na(t){return Gi(!!t),dr.fromTimestamp(function(t){const e=Fr(t);return new hr(e.seconds,e.nanos)}(t))}function ia(t,e){return function(t){return new fr(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function ra(t){const e=fr.fromString(t);return Gi(Ca(e)),e}function sa(t,e){const n=ra(e);if(n.get(1)!==t.databaseId.projectId)throw new Yi(Qi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Yi(Qi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new vr(la(n))}function oa(t,e){return ia(t.databaseId,e)}function aa(t){const e=ra(t);return 4===e.length?fr.emptyPath():la(e)}function ca(t){return new fr(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function la(t){return Gi(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ua(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Ki()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(t,e){return t.gt?(Gi(void 0===e||"string"==typeof e),Vr.fromBase64String(e||"")):(Gi(void 0===e||e instanceof Uint8Array),Vr.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Qi.UNKNOWN:xo(t.code);return new Yi(e,t.message||"")}(o);n=new Zo(i,r,s,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=sa(t,i.document.name),s=na(i.document.updateTime),o=new hs({mapValue:{fields:i.document.fields}}),a=ds.newFoundDocument(r,s,o),c=i.targetIds||[],l=i.removedTargetIds||[];n=new Ho(c,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=sa(t,i.document),s=i.readTime?na(i.readTime):dr.min(),o=ds.newNoDocument(r,s),a=i.removedTargetIds||[];n=new Ho([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=sa(t,i.document),s=i.removedTargetIds||[];n=new Ho([],s,r,null)}else{if(!("filter"in e))return Ki();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,r=new ko(i),s=t.targetId;n=new qo(s,r)}}return n}function ha(t,e){return{documents:[oa(t,e.path)]}}function da(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=oa(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=oa(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(as(t.value))return{unaryFilter:{field:ya(t.field),op:"IS_NAN"}};if(os(t.value))return{unaryFilter:{field:ya(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(as(t.value))return{unaryFilter:{field:ya(t.field),op:"IS_NOT_NAN"}};if(os(t.value))return{unaryFilter:{field:ya(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ya(t.field),op:va(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);r&&(n.structuredQuery.where=r);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:ya(t.field),direction:ga(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.gt||Kr(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function pa(t){let e=aa(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Gi(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=ma(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new As(ba(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Kr(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new xs(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new xs(n,e)}(n.endAt)),$s(e,r,o,s,a,"F",c,l)}function fa(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ki()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function ma(t){return t?void 0!==t.unaryFilter?[_a(t)]:void 0!==t.fieldFilter?[wa(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>ma(t))).reduce(((t,e)=>t.concat(e))):Ki():[]}function ga(t){return Qo[t]}function va(t){return Yo[t]}function ya(t){return{fieldPath:t.canonicalString()}}function ba(t){return gr.fromServerFormat(t.fieldPath)}function wa(t){return bs.create(ba(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ki()}}(t.fieldFilter.op),t.fieldFilter.value)}function _a(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ba(t.unaryFilter.field);return bs.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ba(t.unaryFilter.field);return bs.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ba(t.unaryFilter.field);return bs.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ba(t.unaryFilter.field);return bs.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Ki()}}function Ca(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Ea=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ka=Ea;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ia{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&go(e,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=vo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=vo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Po();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=mo(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(dr.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Bo())}isEqual(t){return this.batchId===t.batchId&&ur(this.mutations,t.mutations,((t,e)=>yo(t,e)))&&ur(this.baseMutations,t.baseMutations,((t,e)=>yo(t,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ta{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(t,e,n,i,r=dr.min(),s=dr.min(),o=Vr.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new xa(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new xa(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new xa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t){this.re=t}}function La(t){const e=pa({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?js(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oa{constructor(){}ce(t,e){this.ae(t,e),e.he()}ae(t,e){if("nullValue"in t)this.le(e,5);else if("booleanValue"in t)this.le(e,10),e.fe(t.booleanValue?1:0);else if("integerValue"in t)this.le(e,15),e.fe(Ur(t.integerValue));else if("doubleValue"in t){const n=Ur(t.doubleValue);isNaN(n)?this.le(e,13):(this.le(e,15),Gr(n)?e.fe(0):e.fe(n))}else if("timestampValue"in t){const n=t.timestampValue;this.le(e,20),"string"==typeof n?e.de(n):(e.de(`${n.seconds||""}`),e.fe(n.nanos||0))}else if("stringValue"in t)this._e(t.stringValue,e),this.we(e);else if("bytesValue"in t)this.le(e,30),e.me(jr(t.bytesValue)),this.we(e);else if("referenceValue"in t)this.ge(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.le(e,45),e.fe(n.latitude||0),e.fe(n.longitude||0)}else"mapValue"in t?us(t)?this.le(e,Number.MAX_SAFE_INTEGER):(this.ye(t.mapValue,e),this.we(e)):"arrayValue"in t?(this.pe(t.arrayValue,e),this.we(e)):Ki()}_e(t,e){this.le(e,25),this.Ie(t,e)}Ie(t,e){e.de(t)}ye(t,e){const n=t.fields||{};this.le(e,55);for(const i of Object.keys(n))this._e(i,e),this.ae(n[i],e)}pe(t,e){const n=t.values||[];this.le(e,50);for(const i of n)this.ae(i,e)}ge(t,e){this.le(e,37),vr.fromName(t).path.forEach((t=>{this.le(e,60),this.Ie(t,e)}))}le(t,e){t.fe(e)}we(t){t.fe(2)}}Oa.Te=new Oa;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Na{constructor(){this.Ye=new Da}addToCollectionParentIndex(t,e){return this.Ye.add(e),Ir.resolve()}getCollectionParents(t,e){return Ir.resolve(this.Ye.getEntries(e))}addFieldIndex(t,e){return Ir.resolve()}deleteFieldIndex(t,e){return Ir.resolve()}getDocumentsMatchingTarget(t,e){return Ir.resolve(null)}getIndexType(t,e){return Ir.resolve(0)}getFieldIndexes(t,e){return Ir.resolve([])}getNextCollectionGroupToUpdate(t){return Ir.resolve(null)}getMinOffset(t,e){return Ir.resolve(_r.min())}getMinOffsetFromCollectionGroup(t,e){return Ir.resolve(_r.min())}updateCollectionGroup(t,e,n){return Ir.resolve()}updateIndexEntries(t,e){return Ir.resolve()}}class Da{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Rr(fr.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Rr(fr.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class $a{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new $a(t,$a.DEFAULT_COLLECTION_PERCENTILE,$a.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$a.DEFAULT_COLLECTION_PERCENTILE=10,$a.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$a.DEFAULT=new $a(41943040,$a.DEFAULT_COLLECTION_PERCENTILE,$a.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$a.DISABLED=new $a(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ra{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Ra(0)}static vn(){return new Ra(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pa{constructor(){this.changes=new Ao((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ds.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ir.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ma{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&vo(n.mutation,t,Mr.empty(),hr.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Bo()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Bo()){const i=Ro();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=Do();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Ro();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Bo())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=Oo();const s=Mo(),o=Mo();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof wo)?r=r.insert(e.key,e):void 0!==o&&(s.set(e.key,o.mutation.getFieldMask()),vo(o.mutation,e,o.mutation.getFieldMask(),hr.now()))})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Ma(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Mo();let i=new Nr(((t,e)=>t-e)),r=Bo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Mr.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||Bo()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,l=Po();c.forEach((t=>{if(!r.has(t)){const i=mo(e.get(t),n.get(t));null!==i&&l.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,l))}return Ir.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return vr.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Bs(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):Ir.resolve(Ro());let o=-1,a=r;return s.next((e=>Ir.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?Ir.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,Bo()))).next((t=>({batchId:o,changes:$o(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new vr(e)).next((t=>{let e=Do();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let r=Do();return this.indexManager.getCollectionParents(t,i).next((s=>Ir.forEach(s,(s=>{const o=function(t,e){return new Ds(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(i));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((r=>(i=r,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===i.get(n)&&(i=i.insert(n,ds.newInvalidDocument(n)))}));let n=Do();return i.forEach(((i,r)=>{const s=t.get(i);void 0!==s&&vo(s.mutation,r,Mr.empty(),hr.now()),Zs(e,r)&&(n=n.insert(i,r))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):Ir.resolve(ds.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(t){this.It=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return Ir.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:na(n.createTime)}),Ir.resolve()}getNamedQuery(t,e){return Ir.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:La(t.bundledQuery),readTime:na(t.readTime)}}(e)),Ir.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(){this.overlays=new Nr(vr.comparator),this.es=new Map}getOverlay(t,e){return Ir.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Ro();return Ir.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.ue(t,e,i)})),Ir.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.es.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),Ir.resolve()}getOverlaysForCollection(t,e,n){const i=Ro(),r=e.length+1,s=new vr(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return Ir.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new Nr(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=Ro(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Ro(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=i)break;return Ir.resolve(o)}ue(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.es.get(i.largestBatchId).delete(n.key);this.es.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Ta(e,n));let r=this.es.get(e);void 0===r&&(r=Bo(),this.es.set(e,r)),this.es.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){this.ns=new Rr(ja.ss),this.rs=new Rr(ja.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new ja(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new ja(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new vr(new fr([])),n=new ja(e,t),i=new ja(e,t+1),r=[];return this.rs.forEachInRange([n,i],(t=>{this.cs(t),r.push(t.key)})),r}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new vr(new fr([])),n=new ja(e,t),i=new ja(e,t+1);let r=Bo();return this.rs.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new ja(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ja{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return vr.comparator(t.key,e.key)||lr(t._s,e._s)}static os(t,e){return lr(t._s,e._s)||vr.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new Rr(ja.ss)}checkEmpty(t){return Ir.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Ia(r,e,n,i);this.mutationQueue.push(s);for(const o of i)this.gs=this.gs.add(new ja(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Ir.resolve(s)}lookupMutationBatch(t,e){return Ir.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ps(n),r=i<0?0:i;return Ir.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Ir.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return Ir.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ja(e,0),i=new ja(e,Number.POSITIVE_INFINITY),r=[];return this.gs.forEachInRange([n,i],(t=>{const e=this.ys(t._s);r.push(e)})),Ir.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Rr(lr);return e.forEach((t=>{const e=new ja(t,0),i=new ja(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,i],(t=>{n=n.add(t._s)}))})),Ir.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;vr.isDocumentKey(r)||(r=r.child(""));const s=new ja(new vr(r),0);let o=new Rr(lr);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t._s)),!0)}),s),Ir.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Gi(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return Ir.forEach(e.mutations,(i=>{const r=new ja(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new ja(e,0),i=this.gs.firstAfterOrEqual(n);return Ir.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,Ir.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t){this.Es=t,this.docs=new Nr(vr.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ir.resolve(n?n.document.mutableCopy():ds.newInvalidDocument(e))}getEntries(t,e){let n=Oo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ds.newInvalidDocument(t))})),Ir.resolve(n)}getAllFromCollection(t,e,n){let i=Oo();const r=new vr(e.child("")),s=this.docs.getIteratorFrom(r);for(;s.hasNext();){const{key:t,value:{document:r}}=s.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||Cr(wr(r),n)<=0||(i=i.insert(r.key,r.mutableCopy()))}return Ir.resolve(i)}getAllFromCollectionGroup(t,e,n,i){Ki()}As(t,e){return Ir.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new qa(this)}getSize(t){return Ir.resolve(this.size)}}class qa extends Pa{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(n)})),Ir.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t){this.persistence=t,this.Rs=new Ao((t=>ms(t)),vs),this.lastRemoteSnapshotVersion=dr.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Ua,this.targetCount=0,this.vs=Ra.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),Ir.resolve()}getLastRemoteSnapshotVersion(t){return Ir.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ir.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),Ir.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),Ir.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Ra(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,Ir.resolve()}updateTargetData(t,e){return this.Dn(e),Ir.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,Ir.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Rs.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),Ir.waitFor(r).next((()=>i))}getTargetCount(t){return Ir.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return Ir.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),Ir.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),Ir.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),Ir.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return Ir.resolve(n)}containsKey(t,e){return Ir.resolve(this.Ps.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new xr(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Za(this),this.indexManager=new Na,this.remoteDocumentCache=function(t){return new Ha(t)}((t=>this.referenceDelegate.xs(t))),this.It=new Aa(e),this.Ns=new Ba(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Fa,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new za(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){Hi("MemoryPersistence","Starting transaction:",t);const i=new Ka(this.Ss.next());return this.referenceDelegate.ks(),n(i).next((t=>this.referenceDelegate.Ms(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Os(t,e){return Ir.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class Ka extends Er{constructor(t){super(),this.currentSequenceNumber=t}}class Ga{constructor(t){this.persistence=t,this.Fs=new Ua,this.$s=null}static Bs(t){return new Ga(t)}get Ls(){if(this.$s)return this.$s;throw Ki()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),Ir.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),Ir.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),Ir.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Ms(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ir.forEach(this.Ls,(n=>{const i=vr.fromPath(n);return this.Us(t,i).next((t=>{t||e.removeEntry(i,dr.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.Us(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}Us(t,e){return Ir.or([()=>Ir.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Os(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xa{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=i}static Ci(t,e){let n=Bo(),i=Bo();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Xa(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,i){return this.ki(t,e).next((r=>r||this.Mi(t,e,i,n))).next((n=>n||this.Oi(t,e)))}ki(t,e){if(Ps(e))return Ir.resolve(null);let n=Us(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=js(e,null,"F"),n=Us(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const r=Bo(...i);return this.Ni.getDocuments(t,r).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Fi(e,i);return this.$i(e,s,r,n.readTime)?this.ki(t,js(e,null,"F")):this.Bi(t,s,e,n)}))))})))))}Mi(t,e,n,i){return Ps(e)||i.isEqual(dr.min())?this.Oi(t,e):this.Ni.getDocuments(t,n).next((r=>{const s=this.Fi(e,r);return this.$i(e,s,n,i)?this.Oi(t,e):(zi()<=o["in"].DEBUG&&Hi("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qs(e)),this.Bi(t,s,e,br(i,-1)))}))}Fi(t,e){let n=new Rr(Ks(t));return e.forEach(((e,i)=>{Zs(t,i)&&(n=n.add(i))})),n}$i(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(t,e){return zi()<=o["in"].DEBUG&&Hi("QueryEngine","Using full collection scan to execute query:",qs(e)),this.Ni.getDocumentsMatchingQuery(t,e,_r.min())}Bi(t,e,n,i){return this.Ni.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(t,e,n,i){this.persistence=t,this.Li=e,this.It=i,this.Ui=new Nr(lr),this.qi=new Ao((t=>ms(t)),vs),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Va(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ui)))}}function Ja(t,e,n,i){return new Ya(t,e,n,i)}async function tc(t,e){const n=Xi(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=Bo();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:r,addedBatchIds:s})))}))}))}function ec(t){const e=Xi(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function nc(t,e){const n=Xi(t),i=e.snapshotVersion;let r=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.Ui;const o=[];e.targetChanges.forEach(((s,a)=>{const c=r.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,s.addedDocuments,a))));let l=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?l=l.withResumeToken(Vr.EMPTY_BYTE_STRING,dr.min()).withLastLimboFreeSnapshotVersion(dr.min()):s.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(s.resumeToken,i)),r=r.insert(a,l),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,l,s)&&o.push(n.Cs.updateTargetData(t,l))}));let a=Oo(),c=Bo();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(ic(t,s,e.documentUpdates).next((t=>{a=t.Wi,c=t.zi}))),!i.isEqual(dr.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return Ir.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ui=r,t)))}function ic(t,e,n){let i=Bo(),r=Bo();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=Oo();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(dr.min())?(e.removeEntry(n,s.readTime),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),i=i.insert(n,s)):Hi("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Wi:i,zi:r}}))}function rc(t,e){const n=Xi(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.Cs.getTargetData(t,e).next((r=>r?(i=r,Ir.resolve(i)):n.Cs.allocateTargetId(t).next((r=>(i=new xa(e,r,0,t.currentSequenceNumber),n.Cs.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.Ui.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(t.targetId,t),n.qi.set(e,t.targetId)),t}))}async function sc(t,e,n){const i=Xi(t),r=i.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(t=>i.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!Tr(t))throw t;Hi("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.Ui=i.Ui.remove(e),i.qi.delete(r.target)}function oc(t,e,n){const i=Xi(t);let r=dr.min(),s=Bo();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=Xi(t),r=i.qi.get(n);return void 0!==r?Ir.resolve(i.Ui.get(r)):i.Cs.getTargetData(e,n)}(i,t,Us(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,i.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>i.Li.getDocumentsMatchingQuery(t,e,n?r:dr.min(),n?s:Bo()))).next((t=>(ac(i,Ws(e),t),{documents:t,Hi:s})))))}function ac(t,e,n){let i=dr.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.Ki.set(e,i)}class cc{constructor(){this.activeTargetIds=Uo()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class lc{constructor(){this.Lr=new cc,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.Ur[t]||"not-current"}updateQueryState(t,e,n){this.Ur[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.Ur[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new cc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{qr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Hi("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){Hi("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(t,e,n,i,r){const s=this.ao(t,e);Hi("RestConnection","Sending: ",s,n);const o={};return this.ho(o,i,r),this.lo(t,s,o,n).then((t=>(Hi("RestConnection","Received: ",t),t)),(e=>{throw Zi("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e}))}fo(t,e,n,i,r,s){return this.co(t,e,n,i,r)}ho(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ui,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ao(t,e){const n=dc[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,e,n,i){return new Promise(((r,s)=>{const o=new Vi;o.listenOnce(Di.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Ni.NO_ERROR:const e=o.getResponseJson();Hi("Connection","XHR received:",JSON.stringify(e)),r(e);break;case Ni.TIMEOUT:Hi("Connection",'RPC "'+t+'" timed out'),s(new Yi(Qi.DEADLINE_EXCEEDED,"Request time out"));break;case Ni.HTTP_ERROR:const n=o.getStatus();if(Hi("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Qi).indexOf(e)>=0?e:Qi.UNKNOWN}(t.status);s(new Yi(e,t.message))}else s(new Yi(Qi.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Yi(Qi.UNAVAILABLE,"Connection failed."));break;default:Ki()}}finally{Hi("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}_o(t,e,n){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Li(),s=Oi(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Pi({})),this.ho(o.initMessageHeaders,e,n),(0,a.uI)()||(0,a.b$)()||(0,a.d)()||(0,a.w1)()||(0,a.Mn)()||(0,a.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const c=i.join("");Hi("Connection","Creating WebChannel: "+c,o);const l=r.createWebChannel(c,o);let u=!1,h=!1;const d=new pc({Hr:t=>{h?Hi("Connection","Not sending because WebChannel is closed:",t):(u||(Hi("Connection","Opening WebChannel transport."),l.open(),u=!0),Hi("Connection","WebChannel sending:",t),l.send(t))},Jr:()=>l.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(l,Mi.EventType.OPEN,(()=>{h||Hi("Connection","WebChannel transport opened.")})),p(l,Mi.EventType.CLOSE,(()=>{h||(h=!0,Hi("Connection","WebChannel transport closed"),d.io())})),p(l,Mi.EventType.ERROR,(t=>{h||(h=!0,Zi("Connection","WebChannel transport errored:",t),d.io(new Yi(Qi.UNAVAILABLE,"The operation could not be completed")))})),p(l,Mi.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Gi(!!n);const i=n,r=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(r){Hi("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=Io[t];if(void 0!==e)return xo(e)}(t),n=r.message;void 0===e&&(e=Qi.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),h=!0,d.io(new Yi(e,n)),l.close()}else Hi("Connection","WebChannel received:",n),d.ro(n)}})),p(s,$i.STAT_EVENT,(t=>{t.stat===Ri.PROXY?Hi("Connection","Detected buffering proxy"):t.stat===Ri.NOPROXY&&Hi("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.so()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(t){return new Jo(t,!0)}class vc{constructor(t,e,n=1e3,i=1.5,r=6e4){this.Hs=t,this.timerId=e,this.wo=n,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const e=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),i=Math.max(0,e-n);i>0&&Hi("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Io=this.Hs.enqueueAfterDelay(this.timerId,i,(()=>(this.To=Date.now(),t()))),this.po*=this.mo,this.po<this.wo&&(this.po=this.wo),this.po>this.yo&&(this.po=this.yo)}bo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t,e,n,i,r,s,o,a){this.Hs=t,this.Po=n,this.vo=i,this.Vo=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new vc(t,e)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.No()&&await this.close(0)}Oo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.Po,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.Uo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===Qi.RESOURCE_EXHAUSTED?(qi(e.toString()),qi("Using maximum backoff delay to prevent overloading the backend."),this.xo.Eo()):e&&e.code===Qi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}qo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new Yi(Qi.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Mo(){this.state=5,this.xo.Ao((async()=>{this.state=0,this.start()}))}Qo(t){return Hi("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(Hi("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class bc extends yc{constructor(t,e,n,i,r,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,s),this.It=r}jo(t,e){return this.Vo._o("Listen",t,e)}onMessage(t){this.xo.reset();const e=ua(this.It,t),n=function(t){if(!("targetChange"in t))return dr.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?dr.min():e.readTime?na(e.readTime):dr.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=ca(this.It),e.addTarget=function(t,e){let n;const i=e.target;return n=ys(i)?{documents:ha(t,i)}:{query:da(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=ea(t,e.resumeToken):e.snapshotVersion.compareTo(dr.min())>0&&(n.readTime=ta(t,e.snapshotVersion.toTimestamp())),n}(this.It,t);const n=fa(this.It,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=ca(this.It),e.removeTarget=t,this.Bo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wc extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.Vo=n,this.It=i,this.nu=!1}su(){if(this.nu)throw new Yi(Qi.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.Vo.co(t,e,n,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Qi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Yi(Qi.UNKNOWN,t.toString())}))}fo(t,e,n,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.Vo.fo(t,e,n,r,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Qi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Yi(Qi.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}}class _c{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(qi(e),this.ou=!1):Hi("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=r,this.mu.qr((t=>{n.enqueueAndForget((async()=>{Oc(this)&&(Hi("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Xi(t);e._u.add(4),await Ec(e),e.gu.set("Unknown"),e._u.delete(4),await Sc(e)}(this))}))})),this.gu=new _c(n,i)}}async function Sc(t){if(Oc(t))for(const e of t.wu)await e(!0)}async function Ec(t){for(const e of t.wu)await e(!1)}function kc(t,e){const n=Xi(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Lc(n)?Ac(n):Bc(n).ko()&&Tc(n,e))}function Ic(t,e){const n=Xi(t),i=Bc(n);n.du.delete(e),i.ko()&&xc(n,e),0===n.du.size&&(i.ko()?i.Fo():Oc(n)&&n.gu.set("Unknown"))}function Tc(t,e){t.yu.Ot(e.targetId),Bc(t).zo(e)}function xc(t,e){t.yu.Ot(e),Bc(t).Ho(e)}function Ac(t){t.yu=new Ko({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t.du.get(e)||null}),Bc(t).start(),t.gu.uu()}function Lc(t){return Oc(t)&&!Bc(t).No()&&t.du.size>0}function Oc(t){return 0===Xi(t)._u.size}function Nc(t){t.yu=void 0}async function Dc(t){t.du.forEach(((e,n)=>{Tc(t,e)}))}async function $c(t,e){Nc(t),Lc(t)?(t.gu.hu(e),Ac(t)):t.gu.set("Unknown")}async function Rc(t,e,n){if(t.gu.set("Online"),e instanceof Zo&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.du.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.du.delete(i),t.yu.removeTarget(i))}(t,e)}catch(n){Hi("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Pc(t,n)}else if(e instanceof Ho?t.yu.Gt(e):e instanceof qo?t.yu.Yt(e):t.yu.Wt(e),!n.isEqual(dr.min()))try{const e=await ec(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.te(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.du.get(i);r&&t.du.set(i,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(Vr.EMPTY_BYTE_STRING,n.snapshotVersion)),xc(t,e);const i=new xa(n.target,e,1,n.sequenceNumber);Tc(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Hi("RemoteStore","Failed to raise snapshot:",e),await Pc(t,e)}}async function Pc(t,e,n){if(!Tr(e))throw e;t._u.add(1),await Ec(t),t.gu.set("Offline"),n||(n=()=>ec(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Hi("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Sc(t)}))}async function Mc(t,e){const n=Xi(t);n.asyncQueue.verifyOperationInProgress(),Hi("RemoteStore","RemoteStore received new credentials");const i=Oc(n);n._u.add(3),await Ec(n),i&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Sc(n)}async function Vc(t,e){const n=Xi(t);e?(n._u.delete(2),await Sc(n)):e||(n._u.add(2),await Ec(n),n.gu.set("Unknown"))}function Bc(t){return t.pu||(t.pu=function(t,e,n){const i=Xi(t);return i.su(),new bc(e,i.Vo,i.authCredentials,i.appCheckCredentials,i.It,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Yr:Dc.bind(null,t),Zr:$c.bind(null,t),Wo:Rc.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Oo(),Lc(t)?Ac(t):t.gu.set("Unknown")):(await t.pu.stop(),Nc(t))}))),t.pu}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fc{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new Ji,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new Fc(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Yi(Qi.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uc(t,e){if(qi("AsyncQueue",`${e}: ${t}`),Tr(t))return new Yi(Qi.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t){this.comparator=t?(e,n)=>t(e,n)||vr.comparator(e.key,n.key):(t,e)=>vr.comparator(t.key,e.key),this.keyedMap=Do(),this.sortedSet=new Nr(this.comparator)}static emptySet(t){return new jc(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof jc))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new jc;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.Tu=new Nr(vr.comparator)}track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):Ki():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Hc{constructor(t,e,n,i,r,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,i){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new Hc(t,e,jc.emptySet(e),r,n,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&zs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(){this.Au=void 0,this.listeners=[]}}class Zc{constructor(){this.queries=new Ao((t=>Hs(t)),zs),this.onlineState="Unknown",this.Ru=new Set}}async function Wc(t,e){const n=Xi(t),i=e.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new qc),r)try{s.Au=await n.onListen(i)}catch(t){const n=Uc(t,`Initialization of query '${qs(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&Qc(n)}async function Kc(t,e){const n=Xi(t),i=e.query;let r=!1;const s=n.queries.get(i);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function Gc(t,e){const n=Xi(t);let i=!1;for(const r of e){const t=r.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.Pu(r)&&(i=!0);e.Au=r}}i&&Qc(n)}function Xc(t,e,n){const i=Xi(t),r=i.queries.get(e);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(e)}function Qc(t){t.Ru.forEach((t=>{t.next()}))}class Yc{constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Hc(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=Hc.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Vu=!0,this.vu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jc{constructor(t){this.key=t}}class tl{constructor(t){this.key=t}}class el{constructor(t,e){this.query=t,this.Lu=e,this.Uu=null,this.current=!1,this.qu=Bo(),this.mutatedKeys=Bo(),this.Ku=Ks(t),this.Gu=new jc(this.Ku)}get Qu(){return this.Lu}ju(t,e){const n=e?e.Wu:new zc,i=e?e.Gu:this.Gu;let r=e?e.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const l=i.get(t),u=Zs(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let p=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),p=!0):this.zu(l,u)||(n.track({type:2,doc:u}),p=!0,(a&&this.Ku(u,a)>0||c&&this.Ku(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),p=!0):l&&!u&&(n.track({type:1,doc:l}),p=!0,(a||c)&&(o=!0)),p&&(u?(s=s.add(u),r=d?r.add(t):r.delete(t)):(s=s.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{Gu:s,Wu:n,$i:o,mutatedKeys:r}}zu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const r=t.Wu.Eu();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ki()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Ku(t.doc,e.doc))),this.Hu(n);const s=e?this.Ju():[],o=0===this.qu.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==r.length||a?{snapshot:new Hc(this.query,t.Gu,i,r,t.mutatedKeys,0===o,a,!1),Yu:s}:{Yu:s}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Gu:this.Gu,Wu:new zc,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Yu:[]}}Xu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach((t=>this.Lu=this.Lu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Lu=this.Lu.delete(t))),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.qu;this.qu=Bo(),this.Gu.forEach((t=>{this.Xu(t.key)&&(this.qu=this.qu.add(t.key))}));const e=[];return t.forEach((t=>{this.qu.has(t)||e.push(new tl(t))})),this.qu.forEach((n=>{t.has(n)||e.push(new Jc(n))})),e}Zu(t){this.Lu=t.Hi,this.qu=Bo();const e=this.ju(t.documents);return this.applyChanges(e,!0)}tc(){return Hc.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.Uu)}}class nl{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class il{constructor(t){this.key=t,this.ec=!1}}class rl{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.nc={},this.sc=new Ao((t=>Hs(t)),zs),this.ic=new Map,this.rc=new Set,this.oc=new Nr(vr.comparator),this.uc=new Map,this.cc=new Ua,this.ac={},this.hc=new Map,this.lc=Ra.vn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function sl(t,e){const n=bl(t);let i,r;const s=n.sc.get(e);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.tc();else{const t=await rc(n.localStore,Us(e));n.isPrimaryClient&&kc(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,r=await ol(n,e,i,"current"===s)}return r}async function ol(t,e,n,i){t.dc=(e,n,i)=>async function(t,e,n,i){let r=e.view.ju(n);r.$i&&(r=await oc(t.localStore,e.query,!1).then((({documents:t})=>e.view.ju(t,r))));const s=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,s);return pl(t,e.targetId,o.Yu),o.snapshot}(t,e,n,i);const r=await oc(t.localStore,e,!0),s=new el(e,r.Hi),o=s.ju(r.documents),a=zo.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);pl(t,n,c.Yu);const l=new nl(e,n,s);return t.sc.set(e,l),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),c.snapshot}async function al(t,e){const n=Xi(t),i=n.sc.get(e),r=n.ic.get(i.targetId);if(r.length>1)return n.ic.set(i.targetId,r.filter((t=>!zs(t,e)))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await sc(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Ic(n.remoteStore,i.targetId),hl(n,i.targetId)})).catch(kr)):(hl(n,i.targetId),await sc(n.localStore,i.targetId,!0))}async function cl(t,e){const n=Xi(t);try{const t=await nc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.uc.get(e);i&&(Gi(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.ec=!0:t.modifiedDocuments.size>0?Gi(i.ec):t.removedDocuments.size>0&&(Gi(i.ec),i.ec=!1))})),await gl(n,t,e)}catch(t){await kr(t)}}function ll(t,e,n){const i=Xi(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.sc.forEach(((n,i)=>{const r=i.view.bu(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=Xi(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const r of n.listeners)r.bu(e)&&(i=!0)})),i&&Qc(n)}(i.eventManager,e),t.length&&i.nc.Wo(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function ul(t,e,n){const i=Xi(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.uc.get(e),s=r&&r.key;if(s){let t=new Nr(vr.comparator);t=t.insert(s,ds.newNoDocument(s,dr.min()));const n=Bo().add(s),r=new jo(dr.min(),new Map,new Rr(lr),t,n);await cl(i,r),i.oc=i.oc.remove(s),i.uc.delete(e),ml(i)}else await sc(i.localStore,e,!1).then((()=>hl(i,e,n))).catch(kr)}function hl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.ic.get(e))t.sc.delete(i),n&&t.nc._c(i,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.ls(e).forEach((e=>{t.cc.containsKey(e)||dl(t,e)}))}function dl(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);null!==n&&(Ic(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),ml(t))}function pl(t,e,n){for(const i of n)i instanceof Jc?(t.cc.addReference(i.key,e),fl(t,i)):i instanceof tl?(Hi("SyncEngine","Document no longer in limbo: "+i.key),t.cc.removeReference(i.key,e),t.cc.containsKey(i.key)||dl(t,i.key)):Ki()}function fl(t,e){const n=e.key,i=n.path.canonicalString();t.oc.get(n)||t.rc.has(i)||(Hi("SyncEngine","New document in limbo: "+n),t.rc.add(i),ml(t))}function ml(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new vr(fr.fromString(e)),i=t.lc.next();t.uc.set(i,new il(n)),t.oc=t.oc.insert(n,i),kc(t.remoteStore,new xa(Us(Rs(n.path)),i,2,xr.at))}}async function gl(t,e,n){const i=Xi(t),r=[],s=[],o=[];i.sc.isEmpty()||(i.sc.forEach(((t,a)=>{o.push(i.dc(a,e,n).then((t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),r.push(t);const e=Xa.Ci(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.nc.Wo(r),await async function(t,e){const n=Xi(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ir.forEach(e,(e=>Ir.forEach(e.Si,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>Ir.forEach(e.Di,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!Tr(t))throw t;Hi("LocalStore","Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.Ui.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.Ui=n.Ui.insert(t,r)}}}(i.localStore,s))}async function vl(t,e){const n=Xi(t);if(!n.currentUser.isEqual(e)){Hi("SyncEngine","User change. New user:",e.toKey());const t=await tc(n.localStore,e);n.currentUser=e,function(t,e){t.hc.forEach((t=>{t.forEach((t=>{t.reject(new Yi(Qi.CANCELLED,e))}))})),t.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await gl(n,t.ji)}}function yl(t,e){const n=Xi(t),i=n.uc.get(e);if(i&&i.ec)return Bo().add(i.key);{let t=Bo();const i=n.ic.get(e);if(!i)return t;for(const e of i){const i=n.sc.get(e);t=t.unionWith(i.view.Qu)}return t}}function bl(t){const e=Xi(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=cl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yl.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ul.bind(null,e),e.nc.Wo=Gc.bind(null,e.eventManager),e.nc._c=Xc.bind(null,e.eventManager),e}class wl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.It=gc(t.databaseInfo.databaseId),this.sharedClientState=this.mc(t),this.persistence=this.gc(t),await this.persistence.start(),this.localStore=this.yc(t),this.gcScheduler=this.Ic(t,this.localStore),this.indexBackfillerScheduler=this.Tc(t,this.localStore)}Ic(t,e){return null}Tc(t,e){return null}yc(t){return Ja(this.persistence,new Qa,t.initialUser,this.It)}gc(t){return new Wa(Ga.Bs,this.It)}mc(t){return new lc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class _l{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ll(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=vl.bind(null,this.syncEngine),await Vc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Zc}createDatastore(t){const e=gc(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new fc(i));var i;return function(t,e,n,i){return new wc(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,i=t.asyncQueue,r=t=>ll(this.syncEngine,t,0),s=hc.C()?new hc:new uc,new Cc(e,n,i,r,s);var e,n,i,r,s}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new rl(t,e,n,i,r,s);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Xi(t);Hi("RemoteStore","RemoteStore shutting down."),e._u.add(5),await Ec(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ac(this.observer.next,t)}error(t){this.observer.error?this.Ac(this.observer.error,t):qi("Uncaught Error in snapshot listener:",t)}Rc(){this.muted=!0}Ac(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sl{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Fi.UNAUTHENTICATED,this.clientId=cr.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Hi("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Hi("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Yi(Qi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ji;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Uc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function El(t,e){t.asyncQueue.verifyOperationInProgress(),Hi("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await tc(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function kl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Il(t);Hi("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>Mc(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Mc(e.remoteStore,n))),t.onlineComponents=e}async function Il(t){return t.offlineComponents||(Hi("FirestoreClient","Using default OfflineComponentProvider"),await El(t,new wl)),t.offlineComponents}async function Tl(t){return t.onlineComponents||(Hi("FirestoreClient","Using default OnlineComponentProvider"),await kl(t,new _l)),t.onlineComponents}async function xl(t){const e=await Tl(t),n=e.eventManager;return n.onListen=sl.bind(null,e.syncEngine),n.onUnlisten=al.bind(null,e.syncEngine),n}function Al(t,e,n={}){const i=new Ji;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,r){const s=new Cl({next:n=>{e.enqueueAndForget((()=>Kc(t,o))),n.fromCache&&"server"===i.source?r.reject(new Yi(Qi.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new Yc(n,s,{includeMetadataChanges:!0,Nu:!0});return Wc(t,o)}(await xl(t),t.asyncQueue,e,n,i))),i.promise}const Ll=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(t,e,n){if(!n)throw new Yi(Qi.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Nl(t,e,n,i){if(!0===e&&!0===i)throw new Yi(Qi.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Dl(t){if(vr.isDocumentKey(t))throw new Yi(Qi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $l(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Ki()}function Rl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Yi(Qi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$l(t);throw new Yi(Qi.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pl{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Yi(Qi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Yi(Qi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Nl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Yi(Qi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Yi(Qi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new er;switch(t.type){case"gapi":const e=t.client;return new rr(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Yi(Qi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ll.get(t);e&&(Hi("ComponentProvider","Removing Datastore"),Ll.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Vl(this.firestore,t,this._key)}}class Bl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Bl(this.firestore,t,this._query)}}class Fl extends Bl{constructor(t,e,n){super(t,e,Rs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Vl(this.firestore,null,new vr(t))}withConverter(t){return new Fl(this.firestore,t,this._path)}}function Ul(t,e,...n){if(t=(0,a.m9)(t),Ol("collection","path",e),t instanceof Ml){const i=fr.fromString(e,...n);return Dl(i),new Fl(t,null,i)}{if(!(t instanceof Vl||t instanceof Fl))throw new Yi(Qi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(fr.fromString(e,...n));return Dl(i),new Fl(t.firestore,null,i)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jl{constructor(){this.$c=Promise.resolve(),this.Bc=[],this.Lc=!1,this.Uc=[],this.qc=null,this.Kc=!1,this.Gc=!1,this.Qc=[],this.xo=new vc(this,"async_queue_retry"),this.jc=()=>{const t=mc();t&&Hi("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.bo()};const t=mc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.Lc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Wc(),this.zc(t)}enterRestrictedMode(t){if(!this.Lc){this.Lc=!0,this.Gc=t||!1;const e=mc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.jc)}}enqueue(t){if(this.Wc(),this.Lc)return new Promise((()=>{}));const e=new Ji;return this.zc((()=>this.Lc&&this.Gc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Bc.push(t),this.Hc())))}async Hc(){if(0!==this.Bc.length){try{await this.Bc[0](),this.Bc.shift(),this.xo.reset()}catch(C){if(!Tr(C))throw C;Hi("AsyncQueue","Operation failed with retryable error: "+C)}this.Bc.length>0&&this.xo.Ao((()=>this.Hc()))}}zc(t){const e=this.$c.then((()=>(this.Kc=!0,t().catch((t=>{this.qc=t,this.Kc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw qi("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Kc=!1,t))))));return this.$c=e,e}enqueueAfterDelay(t,e,n){this.Wc(),this.Qc.indexOf(t)>-1&&(e=0);const i=Fc.createAndSchedule(this,t,e,n,(t=>this.Jc(t)));return this.Uc.push(i),i}Wc(){this.qc&&Ki()}verifyOperationInProgress(){}async Yc(){let t;do{t=this.$c,await t}while(t!==this.$c)}Xc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}Zc(t){return this.Yc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Yc()}))}ta(t){this.Qc.push(t)}Jc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}}class zl extends Ml{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new jl,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Zl(this),this._firestoreClient.terminate()}}function Hl(t,e){const n="object"==typeof t?t:(0,r.Mq)(),i="string"==typeof t?t:e||"(default)";return(0,r.qX)(n,"firestore").getImmediate({identifier:i})}function ql(t){return t._firestoreClient||Zl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Zl(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new Zr(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Sl(t._authCredentials,t._appCheckCredentials,t._queue,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Yi(Qi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gr(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Kl(Vr.fromBase64String(t))}catch(t){throw new Yi(Qi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Kl(Vr.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Yi(Qi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Yi(Qi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return lr(this._lat,t._lat)||lr(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xl=new RegExp("[~\\*/\\[\\]]");function Ql(t,e,n){if(e.search(Xl)>=0)throw Yl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Wl(...e.split("."))._internalPath}catch(i){throw Yl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Yl(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new Yi(Qi.INVALID_ARGUMENT,a+t+c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jl{constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Vl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new tu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(eu("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class tu extends Jl{data(){return super.data()}}function eu(t,e){return"string"==typeof e?Ql(t,e):e instanceof Wl?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class iu extends Jl{constructor(t,e,n,i,r,s){super(t,e,n,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ru(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(eu("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class ru extends iu{data(t={}){return super.data(t)}}class su{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new nu(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new ru(this._firestore,this._userDataWriter,n.key,n,new nu(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Yi(Qi.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new ru(t._firestore,t._userDataWriter,n.doc.key,n.doc,new nu(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new ru(t._firestore,t._userDataWriter,e.doc.key,e.doc,new nu(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,s=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:ou(e.type),doc:i,oldIndex:r,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function ou(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ki()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function au(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Yi(Qi.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function cu(t,...e){for(const n of e)t=n._apply(t);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lu{convertValue(t,e="none"){switch(Qr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ur(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(jr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Ki()}}convertObject(t,e){const n={};return Lr(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new Gl(Ur(t.latitude),Ur(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Hr(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(qr(t));default:return null}}convertTimestamp(t){const e=Fr(t);return new hr(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=fr.fromString(t);Gi(Ca(n));const i=new Wr(n.get(1),n.get(3)),r=new vr(n.popFirst(5));return i.isEqual(e)||qi(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu extends lu{constructor(t){super(),this.firestore=t}convertBytes(t){return new Kl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Vl(this.firestore,null,e)}}function hu(t){t=Rl(t,Bl);const e=Rl(t.firestore,zl),n=ql(e),i=new uu(e);return au(t._query),Al(n,t._query).then((n=>new su(e,i,t,n)))}!function(t,e=!0){!function(t){Ui=t}(r.Jn),(0,r.Xd)(new s.wA("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new zl(new nr(t.getProvider("auth-internal")),new or(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Yi(Qi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wr(t.options.projectId,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),(0,r.KN)(Bi,"3.4.15",t),(0,r.KN)(Bi,"3.4.15","esm2017")}()},1884:function(){},9027:function(){},8345:function(t,e,n){function i(t,e){for(var n in e)t[n]=e[n];return t}n.d(e,{ZP:function(){return Ce}});var r=/[!'()*]/g,s=function(t){return"%"+t.charCodeAt(0).toString(16)},o=/%2C/g,a=function(t){return encodeURIComponent(t).replace(r,s).replace(o,",")};function c(t){try{return decodeURIComponent(t)}catch(e){0}return t}function l(t,e,n){void 0===e&&(e={});var i,r=n||h;try{i=r(t||"")}catch(a){i={}}for(var s in e){var o=e[s];i[s]=Array.isArray(o)?o.map(u):u(o)}return i}var u=function(t){return null==t||"object"===typeof t?t:String(t)};function h(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),i=c(n.shift()),r=n.length>0?c(n.join("=")):null;void 0===e[i]?e[i]=r:Array.isArray(e[i])?e[i].push(r):e[i]=[e[i],r]})),e):e}function d(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return a(e);if(Array.isArray(n)){var i=[];return n.forEach((function(t){void 0!==t&&(null===t?i.push(a(e)):i.push(a(e)+"="+a(t)))})),i.join("&")}return a(e)+"="+a(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var p=/\/?$/;function f(t,e,n,i){var r=i&&i.options.stringifyQuery,s=e.query||{};try{s=m(s)}catch(a){}var o={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:s,params:e.params||{},fullPath:y(e,r),matched:t?v(t):[]};return n&&(o.redirectedFrom=y(n,r)),Object.freeze(o)}function m(t){if(Array.isArray(t))return t.map(m);if(t&&"object"===typeof t){var e={};for(var n in t)e[n]=m(t[n]);return e}return t}var g=f(null,{path:"/"});function v(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function y(t,e){var n=t.path,i=t.query;void 0===i&&(i={});var r=t.hash;void 0===r&&(r="");var s=e||d;return(n||"/")+s(i)+r}function b(t,e,n){return e===g?t===e:!!e&&(t.path&&e.path?t.path.replace(p,"")===e.path.replace(p,"")&&(n||t.hash===e.hash&&w(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&w(t.query,e.query)&&w(t.params,e.params))))}function w(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),i=Object.keys(e).sort();return n.length===i.length&&n.every((function(n,r){var s=t[n],o=i[r];if(o!==n)return!1;var a=e[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?w(s,a):String(s)===String(a)}))}function _(t,e){return 0===t.path.replace(p,"/").indexOf(e.path.replace(p,"/"))&&(!e.hash||t.hash===e.hash)&&C(t.query,e.query)}function C(t,e){for(var n in e)if(!(n in t))return!1;return!0}function S(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var i in n.instances){var r=n.instances[i],s=n.enteredCbs[i];if(r&&s){delete n.enteredCbs[i];for(var o=0;o<s.length;o++)r._isBeingDestroyed||s[o](r)}}}}var E={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var n=e.props,r=e.children,s=e.parent,o=e.data;o.routerView=!0;var a=s.$createElement,c=n.name,l=s.$route,u=s._routerViewCache||(s._routerViewCache={}),h=0,d=!1;while(s&&s._routerRoot!==s){var p=s.$vnode?s.$vnode.data:{};p.routerView&&h++,p.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=h,d){var f=u[c],m=f&&f.component;return m?(f.configProps&&k(m,o,f.route,f.configProps),a(m,o,r)):a()}var g=l.matched[h],v=g&&g.components[c];if(!g||!v)return u[c]=null,a();u[c]={component:v},o.registerRouteInstance=function(t,e){var n=g.instances[c];(e&&n!==t||!e&&n===t)&&(g.instances[c]=e)},(o.hook||(o.hook={})).prepatch=function(t,e){g.instances[c]=e.componentInstance},o.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==g.instances[c]&&(g.instances[c]=t.componentInstance),S(l)};var y=g.props&&g.props[c];return y&&(i(u[c],{route:l,configProps:y}),k(v,o,l,y)),a(v,o,r)}};function k(t,e,n,r){var s=e.props=I(n,r);if(s){s=e.props=i({},s);var o=e.attrs=e.attrs||{};for(var a in s)t.props&&a in t.props||(o[a]=s[a],delete s[a])}}function I(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}function T(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?r.pop():"."!==a&&r.push(a)}return""!==r[0]&&r.unshift(""),r.join("/")}function x(t){var e="",n="",i=t.indexOf("#");i>=0&&(e=t.slice(i),t=t.slice(0,i));var r=t.indexOf("?");return r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),{path:t,query:n,hash:e}}function A(t){return t.replace(/\/(?:\s*\/)+/g,"/")}var L=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},O=X,N=M,D=V,$=U,R=G,P=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function M(t,e){var n,i=[],r=0,s=0,o="",a=e&&e.delimiter||"/";while(null!=(n=P.exec(t))){var c=n[0],l=n[1],u=n.index;if(o+=t.slice(s,u),s=u+c.length,l)o+=l[1];else{var h=t[s],d=n[2],p=n[3],f=n[4],m=n[5],g=n[6],v=n[7];o&&(i.push(o),o="");var y=null!=d&&null!=h&&h!==d,b="+"===g||"*"===g,w="?"===g||"*"===g,_=n[2]||a,C=f||m;i.push({name:p||r++,prefix:d||"",delimiter:_,optional:w,repeat:b,partial:y,asterisk:!!v,pattern:C?z(C):v?".*":"[^"+j(_)+"]+?"})}}return s<t.length&&(o+=t.substr(s)),o&&i.push(o),i}function V(t,e){return U(M(t,e),e)}function B(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function F(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function U(t,e){for(var n=new Array(t.length),i=0;i<t.length;i++)"object"===typeof t[i]&&(n[i]=new RegExp("^(?:"+t[i].pattern+")$",q(e)));return function(e,i){for(var r="",s=e||{},o=i||{},a=o.pretty?B:encodeURIComponent,c=0;c<t.length;c++){var l=t[c];if("string"!==typeof l){var u,h=s[l.name];if(null==h){if(l.optional){l.partial&&(r+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(L(h)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(u=a(h[d]),!n[c].test(u))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(u)+"`");r+=(0===d?l.prefix:l.delimiter)+u}}else{if(u=l.asterisk?F(h):a(h),!n[c].test(u))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+u+'"');r+=l.prefix+u}}else r+=l}return r}}function j(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function z(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function H(t,e){return t.keys=e,t}function q(t){return t&&t.sensitive?"":"i"}function Z(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return H(t,e)}function W(t,e,n){for(var i=[],r=0;r<t.length;r++)i.push(X(t[r],e,n).source);var s=new RegExp("(?:"+i.join("|")+")",q(n));return H(s,e)}function K(t,e,n){return G(M(t,n),e,n)}function G(t,e,n){L(e)||(n=e||n,e=[]),n=n||{};for(var i=n.strict,r=!1!==n.end,s="",o=0;o<t.length;o++){var a=t[o];if("string"===typeof a)s+=j(a);else{var c=j(a.prefix),l="(?:"+a.pattern+")";e.push(a),a.repeat&&(l+="(?:"+c+l+")*"),l=a.optional?a.partial?c+"("+l+")?":"(?:"+c+"("+l+"))?":c+"("+l+")",s+=l}}var u=j(n.delimiter||"/"),h=s.slice(-u.length)===u;return i||(s=(h?s.slice(0,-u.length):s)+"(?:"+u+"(?=$))?"),s+=r?"$":i&&h?"":"(?="+u+"|$)",H(new RegExp("^"+s,q(n)),e)}function X(t,e,n){return L(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?Z(t,e):L(t)?W(t,e,n):K(t,e,n)}O.parse=N,O.compile=D,O.tokensToFunction=$,O.tokensToRegExp=R;var Q=Object.create(null);function Y(t,e,n){e=e||{};try{var i=Q[t]||(Q[t]=O.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),i(e,{pretty:!0})}catch(r){return""}finally{delete e[0]}}function J(t,e,n,r){var s="string"===typeof t?{path:t}:t;if(s._normalized)return s;if(s.name){s=i({},t);var o=s.params;return o&&"object"===typeof o&&(s.params=i({},o)),s}if(!s.path&&s.params&&e){s=i({},s),s._normalized=!0;var a=i(i({},e.params),s.params);if(e.name)s.name=e.name,s.params=a;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;s.path=Y(c,a,"path "+e.path)}else 0;return s}var u=x(s.path||""),h=e&&e.path||"/",d=u.path?T(u.path,h,n||s.append):h,p=l(u.query,s.query,r&&r.options.parseQuery),f=s.hash||u.hash;return f&&"#"!==f.charAt(0)&&(f="#"+f),{_normalized:!0,path:d,query:p,hash:f}}var tt,et=[String,Object],nt=[String,Array],it=function(){},rt={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:nt,default:"click"}},render:function(t){var e=this,n=this.$router,r=this.$route,s=n.resolve(this.to,r,this.append),o=s.location,a=s.route,c=s.href,l={},u=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==u?"router-link-active":u,p=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,g=null==this.exactActiveClass?p:this.exactActiveClass,v=a.redirectedFrom?f(null,J(a.redirectedFrom),null,n):a;l[g]=b(r,v,this.exactPath),l[m]=this.exact||this.exactPath?l[g]:_(r,v);var y=l[g]?this.ariaCurrentValue:null,w=function(t){st(t)&&(e.replace?n.replace(o,it):n.push(o,it))},C={click:st};Array.isArray(this.event)?this.event.forEach((function(t){C[t]=w})):C[this.event]=w;var S={class:l},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:w,isActive:l[m],isExactActive:l[g]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?t():t("span",{},E)}if("a"===this.tag)S.on=C,S.attrs={href:c,"aria-current":y};else{var k=ot(this.$slots.default);if(k){k.isStatic=!1;var I=k.data=i({},k.data);for(var T in I.on=I.on||{},I.on){var x=I.on[T];T in C&&(I.on[T]=Array.isArray(x)?x:[x])}for(var A in C)A in I.on?I.on[A].push(C[A]):I.on[A]=w;var L=k.data.attrs=i({},k.data.attrs);L.href=c,L["aria-current"]=y}else S.on=C}return t(this.tag,S,this.$slots.default)}};function st(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ot(t){if(t)for(var e,n=0;n<t.length;n++){if(e=t[n],"a"===e.tag)return e;if(e.children&&(e=ot(e.children)))return e}}function at(t){if(!at.installed||tt!==t){at.installed=!0,tt=t;var e=function(t){return void 0!==t},n=function(t,n){var i=t.$options._parentVnode;e(i)&&e(i=i.data)&&e(i=i.registerRouteInstance)&&i(t,n)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",E),t.component("RouterLink",rt);var i=t.config.optionMergeStrategies;i.beforeRouteEnter=i.beforeRouteLeave=i.beforeRouteUpdate=i.created}}var ct="undefined"!==typeof window;function lt(t,e,n,i,r){var s=e||[],o=n||Object.create(null),a=i||Object.create(null);t.forEach((function(t){ut(s,o,a,t,r)}));for(var c=0,l=s.length;c<l;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),l--,c--);return{pathList:s,pathMap:o,nameMap:a}}function ut(t,e,n,i,r,s){var o=i.path,a=i.name;var c=i.pathToRegexpOptions||{},l=dt(o,r,c.strict);"boolean"===typeof i.caseSensitive&&(c.sensitive=i.caseSensitive);var u={path:l,regex:ht(l,c),components:i.components||{default:i.component},alias:i.alias?"string"===typeof i.alias?[i.alias]:i.alias:[],instances:{},enteredCbs:{},name:a,parent:r,matchAs:s,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:null==i.props?{}:i.components?i.props:{default:i.props}};if(i.children&&i.children.forEach((function(i){var r=s?A(s+"/"+i.path):void 0;ut(t,e,n,i,u,r)})),e[u.path]||(t.push(u.path),e[u.path]=u),void 0!==i.alias)for(var h=Array.isArray(i.alias)?i.alias:[i.alias],d=0;d<h.length;++d){var p=h[d];0;var f={path:p,children:i.children};ut(t,e,n,f,r,u.path||"/")}a&&(n[a]||(n[a]=u))}function ht(t,e){var n=O(t,[],e);return n}function dt(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:A(e.path+"/"+t)}function pt(t,e){var n=lt(t),i=n.pathList,r=n.pathMap,s=n.nameMap;function o(t){lt(t,i,r,s)}function a(t,e){var n="object"!==typeof t?s[t]:void 0;lt([e||t],i,r,s,n),n&&n.alias.length&&lt(n.alias.map((function(t){return{path:t,children:[e]}})),i,r,s,n)}function c(){return i.map((function(t){return r[t]}))}function l(t,n,o){var a=J(t,n,!1,e),c=a.name;if(c){var l=s[c];if(!l)return d(null,a);var u=l.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&u.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=Y(l.path,a.params,'named route "'+c+'"'),d(l,a,o)}if(a.path){a.params={};for(var p=0;p<i.length;p++){var f=i[p],m=r[f];if(ft(m.regex,a.path,a.params))return d(m,a,o)}}return d(null,a)}function u(t,n){var i=t.redirect,r="function"===typeof i?i(f(t,n,null,e)):i;if("string"===typeof r&&(r={path:r}),!r||"object"!==typeof r)return d(null,n);var o=r,a=o.name,c=o.path,u=n.query,h=n.hash,p=n.params;if(u=o.hasOwnProperty("query")?o.query:u,h=o.hasOwnProperty("hash")?o.hash:h,p=o.hasOwnProperty("params")?o.params:p,a){s[a];return l({_normalized:!0,name:a,query:u,hash:h,params:p},void 0,n)}if(c){var m=mt(c,t),g=Y(m,p,'redirect route with path "'+m+'"');return l({_normalized:!0,path:g,query:u,hash:h},void 0,n)}return d(null,n)}function h(t,e,n){var i=Y(n,e.params,'aliased route with path "'+n+'"'),r=l({_normalized:!0,path:i});if(r){var s=r.matched,o=s[s.length-1];return e.params=r.params,d(o,e)}return d(null,e)}function d(t,n,i){return t&&t.redirect?u(t,i||n):t&&t.matchAs?h(t,n,t.matchAs):f(t,n,i,e)}return{match:l,addRoute:a,getRoutes:c,addRoutes:o}}function ft(t,e,n){var i=e.match(t);if(!i)return!1;if(!n)return!0;for(var r=1,s=i.length;r<s;++r){var o=t.keys[r-1];o&&(n[o.name||"pathMatch"]="string"===typeof i[r]?c(i[r]):i[r])}return!0}function mt(t,e){return T(t,e.parent?e.parent.path:"/",!0)}var gt=ct&&window.performance&&window.performance.now?window.performance:Date;function vt(){return gt.now().toFixed(3)}var yt=vt();function bt(){return yt}function wt(t){return yt=t}var _t=Object.create(null);function Ct(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=i({},window.history.state);return n.key=bt(),window.history.replaceState(n,"",e),window.addEventListener("popstate",kt),function(){window.removeEventListener("popstate",kt)}}function St(t,e,n,i){if(t.app){var r=t.options.scrollBehavior;r&&t.app.$nextTick((function(){var s=It(),o=r.call(t,e,n,i?s:null);o&&("function"===typeof o.then?o.then((function(t){Dt(t,s)})).catch((function(t){0})):Dt(o,s))}))}}function Et(){var t=bt();t&&(_t[t]={x:window.pageXOffset,y:window.pageYOffset})}function kt(t){Et(),t.state&&t.state.key&&wt(t.state.key)}function It(){var t=bt();if(t)return _t[t]}function Tt(t,e){var n=document.documentElement,i=n.getBoundingClientRect(),r=t.getBoundingClientRect();return{x:r.left-i.left-e.x,y:r.top-i.top-e.y}}function xt(t){return Ot(t.x)||Ot(t.y)}function At(t){return{x:Ot(t.x)?t.x:window.pageXOffset,y:Ot(t.y)?t.y:window.pageYOffset}}function Lt(t){return{x:Ot(t.x)?t.x:0,y:Ot(t.y)?t.y:0}}function Ot(t){return"number"===typeof t}var Nt=/^#\d/;function Dt(t,e){var n="object"===typeof t;if(n&&"string"===typeof t.selector){var i=Nt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(i){var r=t.offset&&"object"===typeof t.offset?t.offset:{};r=Lt(r),e=Tt(i,r)}else xt(t)&&(e=At(t))}else n&&xt(t)&&(e=At(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var $t=ct&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Rt(t,e){Et();var n=window.history;try{if(e){var r=i({},n.state);r.key=bt(),n.replaceState(r,"",t)}else n.pushState({key:wt(vt())},"",t)}catch(s){window.location[e?"replace":"assign"](t)}}function Pt(t){Rt(t,!0)}var Mt={redirected:2,aborted:4,cancelled:8,duplicated:16};function Vt(t,e){return jt(t,e,Mt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Ht(e)+'" via a navigation guard.')}function Bt(t,e){var n=jt(t,e,Mt.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Ft(t,e){return jt(t,e,Mt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Ut(t,e){return jt(t,e,Mt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function jt(t,e,n,i){var r=new Error(i);return r._isRouter=!0,r.from=t,r.to=e,r.type=n,r}var zt=["params","query","hash"];function Ht(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return zt.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function qt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Zt(t,e){return qt(t)&&t._isRouter&&(null==e||t.type===e)}function Wt(t,e,n){var i=function(r){r>=t.length?n():t[r]?e(t[r],(function(){i(r+1)})):i(r+1)};i(0)}function Kt(t){return function(e,n,i){var r=!1,s=0,o=null;Gt(t,(function(t,e,n,a){if("function"===typeof t&&void 0===t.cid){r=!0,s++;var c,l=Jt((function(e){Yt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),n.components[a]=e,s--,s<=0&&i()})),u=Jt((function(t){var e="Failed to resolve async component "+a+": "+t;o||(o=qt(t)?t:new Error(e),i(o))}));try{c=t(l,u)}catch(d){u(d)}if(c)if("function"===typeof c.then)c.then(l,u);else{var h=c.component;h&&"function"===typeof h.then&&h.then(l,u)}}})),r||i()}}function Gt(t,e){return Xt(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function Xt(t){return Array.prototype.concat.apply([],t)}var Qt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Yt(t){return t.__esModule||Qt&&"Module"===t[Symbol.toStringTag]}function Jt(t){var e=!1;return function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];if(!e)return e=!0,t.apply(this,n)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=g,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(ct){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ne(t,e){var n,i=Math.max(t.length,e.length);for(n=0;n<i;n++)if(t[n]!==e[n])break;return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ie(t,e,n,i){var r=Gt(t,(function(t,i,r,s){var o=re(t,e);if(o)return Array.isArray(o)?o.map((function(t){return n(t,i,r,s)})):n(o,i,r,s)}));return Xt(i?r.reverse():r)}function re(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function se(t){return ie(t,"beforeRouteLeave",ae,!0)}function oe(t){return ie(t,"beforeRouteUpdate",ae)}function ae(t,e){if(e)return function(){return t.apply(e,arguments)}}function ce(t){return ie(t,"beforeRouteEnter",(function(t,e,n,i){return le(t,n,i)}))}function le(t,e,n){return function(i,r,s){return t(i,r,(function(t){"function"===typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),s(t)}))}}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,n){var i,r=this;try{i=this.router.match(t,this.current)}catch(o){throw this.errorCbs.forEach((function(t){t(o)})),o}var s=this.current;this.confirmTransition(i,(function(){r.updateRoute(i),e&&e(i),r.ensureURL(),r.router.afterHooks.forEach((function(t){t&&t(i,s)})),r.ready||(r.ready=!0,r.readyCbs.forEach((function(t){t(i)})))}),(function(t){n&&n(t),t&&!r.ready&&(Zt(t,Mt.redirected)&&s===g||(r.ready=!0,r.readyErrorCbs.forEach((function(e){e(t)}))))}))},te.prototype.confirmTransition=function(t,e,n){var i=this,r=this.current;this.pending=t;var s=function(t){!Zt(t)&&qt(t)&&(i.errorCbs.length?i.errorCbs.forEach((function(e){e(t)})):console.error(t)),n&&n(t)},o=t.matched.length-1,a=r.matched.length-1;if(b(t,r)&&o===a&&t.matched[o]===r.matched[a])return this.ensureURL(),t.hash&&St(this.router,r,t,!1),s(Bt(r,t));var c=ne(this.current.matched,t.matched),l=c.updated,u=c.deactivated,h=c.activated,d=[].concat(se(u),this.router.beforeHooks,oe(l),h.map((function(t){return t.beforeEnter})),Kt(h)),p=function(e,n){if(i.pending!==t)return s(Ft(r,t));try{e(t,r,(function(e){!1===e?(i.ensureURL(!0),s(Ut(r,t))):qt(e)?(i.ensureURL(!0),s(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(s(Vt(r,t)),"object"===typeof e&&e.replace?i.replace(e):i.push(e)):n(e)}))}catch(o){s(o)}};Wt(d,p,(function(){var n=ce(h),o=n.concat(i.router.resolveHooks);Wt(o,p,(function(){if(i.pending!==t)return s(Ft(r,t));i.pending=null,e(t),i.router.app&&i.router.app.$nextTick((function(){S(t)}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=g,this.pending=null};var ue=function(t){function e(e,n){t.call(this,e,n),this._startLocation=he(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,i=$t&&n;i&&this.listeners.push(Ct());var r=function(){var n=t.current,r=he(t.base);t.current===g&&r===t._startLocation||t.transitionTo(r,(function(t){i&&St(e,t,n,!0)}))};window.addEventListener("popstate",r),this.listeners.push((function(){window.removeEventListener("popstate",r)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){Rt(A(i.base+t.fullPath)),St(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){Pt(A(i.base+t.fullPath)),St(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.ensureURL=function(t){if(he(this.base)!==this.current.fullPath){var e=A(this.base+this.current.fullPath);t?Rt(e):Pt(e)}},e.prototype.getCurrentLocation=function(){return he(this.base)},e}(te);function he(t){var e=window.location.pathname,n=e.toLowerCase(),i=t.toLowerCase();return!t||n!==i&&0!==n.indexOf(A(i+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var de=function(t){function e(e,n,i){t.call(this,e,n),i&&pe(this.base)||fe()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,n=e.options.scrollBehavior,i=$t&&n;i&&this.listeners.push(Ct());var r=function(){var e=t.current;fe()&&t.transitionTo(me(),(function(n){i&&St(t.router,n,e,!0),$t||ye(n.fullPath)}))},s=$t?"popstate":"hashchange";window.addEventListener(s,r),this.listeners.push((function(){window.removeEventListener(s,r)}))}},e.prototype.push=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){ve(t.fullPath),St(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this,r=this,s=r.current;this.transitionTo(t,(function(t){ye(t.fullPath),St(i.router,t,s,!1),e&&e(t)}),n)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;me()!==e&&(t?ve(e):ye(e))},e.prototype.getCurrentLocation=function(){return me()},e}(te);function pe(t){var e=he(t);if(!/^\/#/.test(e))return window.location.replace(A(t+"/#"+e)),!0}function fe(){var t=me();return"/"===t.charAt(0)||(ye("/"+t),!1)}function me(){var t=window.location.href,e=t.indexOf("#");return e<0?"":(t=t.slice(e+1),t)}function ge(t){var e=window.location.href,n=e.indexOf("#"),i=n>=0?e.slice(0,n):e;return i+"#"+t}function ve(t){$t?Rt(ge(t)):window.location.hash=t}function ye(t){$t?Pt(ge(t)):window.location.replace(ge(t))}var be=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,n){var i=this;this.transitionTo(t,(function(t){i.stack=i.stack.slice(0,i.index+1).concat(t),i.index++,e&&e(t)}),n)},e.prototype.replace=function(t,e,n){var i=this;this.transitionTo(t,(function(t){i.stack=i.stack.slice(0,i.index).concat(t),e&&e(t)}),n)},e.prototype.go=function(t){var e=this,n=this.index+t;if(!(n<0||n>=this.stack.length)){var i=this.stack[n];this.confirmTransition(i,(function(){var t=e.current;e.index=n,e.updateRoute(i),e.router.afterHooks.forEach((function(e){e&&e(i,t)}))}),(function(t){Zt(t,Mt.duplicated)&&(e.index=n)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),we=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=pt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!$t&&!1!==t.fallback,this.fallback&&(e="hash"),ct||(e="abstract"),this.mode=e,e){case"history":this.history=new ue(this,t.base);break;case"hash":this.history=new de(this,t.base,this.fallback);break;case"abstract":this.history=new be(this,t.base);break;default:0}},_e={currentRoute:{configurable:!0}};we.prototype.match=function(t,e,n){return this.matcher.match(t,e,n)},_e.currentRoute.get=function(){return this.history&&this.history.current},we.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var n=e.apps.indexOf(t);n>-1&&e.apps.splice(n,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var n=this.history;if(n instanceof ue||n instanceof de){var i=function(t){var i=n.current,r=e.options.scrollBehavior,s=$t&&r;s&&"fullPath"in t&&St(e,t,i,!1)},r=function(t){n.setupListeners(),i(t)};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},we.prototype.beforeEach=function(t){return Se(this.beforeHooks,t)},we.prototype.beforeResolve=function(t){return Se(this.resolveHooks,t)},we.prototype.afterEach=function(t){return Se(this.afterHooks,t)},we.prototype.onReady=function(t,e){this.history.onReady(t,e)},we.prototype.onError=function(t){this.history.onError(t)},we.prototype.push=function(t,e,n){var i=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){i.history.push(t,e,n)}));this.history.push(t,e,n)},we.prototype.replace=function(t,e,n){var i=this;if(!e&&!n&&"undefined"!==typeof Promise)return new Promise((function(e,n){i.history.replace(t,e,n)}));this.history.replace(t,e,n)},we.prototype.go=function(t){this.history.go(t)},we.prototype.back=function(){this.go(-1)},we.prototype.forward=function(){this.go(1)},we.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},we.prototype.resolve=function(t,e,n){e=e||this.history.current;var i=J(t,e,n,this),r=this.match(i,e),s=r.redirectedFrom||r.fullPath,o=this.history.base,a=Ee(o,s,this.mode);return{location:i,route:r,href:a,normalizedTo:i,resolved:r}},we.prototype.getRoutes=function(){return this.matcher.getRoutes()},we.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},we.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(we.prototype,_e);var Ce=we;function Se(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Ee(t,e,n){var i="hash"===n?"#"+e:e;return t?A(t+"/"+i):i}we.install=at,we.version="3.6.4",we.isNavigationFailure=Zt,we.NavigationFailureType=Mt,we.START_LOCATION=g,ct&&window.Vue&&window.Vue.use(we)},144:function(t,e,n){n.d(e,{ZP:function(){return Ki}});
/*!
 * Vue.js v2.7.10
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
var i=Object.freeze({}),r=Array.isArray;function s(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function a(t){return!0===t}function c(t){return!1===t}function l(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return"function"===typeof t}function h(t){return null!==t&&"object"===typeof t}var d=Object.prototype.toString;function p(t){return"[object Object]"===d.call(t)}function f(t){return"[object RegExp]"===d.call(t)}function m(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function g(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function v(t){return null==t?"":Array.isArray(t)||p(t)&&t.toString===d?JSON.stringify(t,null,2):String(t)}function y(t){var e=parseFloat(t);return isNaN(e)?t:e}function b(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}b("slot,component",!0);var w=b("key,ref,slot,slot-scope,is");function _(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var C=Object.prototype.hasOwnProperty;function S(t,e){return C.call(t,e)}function E(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var k=/-(\w)/g,I=E((function(t){return t.replace(k,(function(t,e){return e?e.toUpperCase():""}))})),T=E((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})),x=/\B([A-Z])/g,A=E((function(t){return t.replace(x,"-$1").toLowerCase()}));function L(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function O(t,e){return t.bind(e)}var N=Function.prototype.bind?O:L;function D(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function $(t,e){for(var n in e)t[n]=e[n];return t}function R(t){for(var e={},n=0;n<t.length;n++)t[n]&&$(e,t[n]);return e}function P(t,e,n){}var M=function(t,e,n){return!1},V=function(t){return t};function B(t,e){if(t===e)return!0;var n=h(t),i=h(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var r=Array.isArray(t),s=Array.isArray(e);if(r&&s)return t.length===e.length&&t.every((function(t,n){return B(t,e[n])}));if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||s)return!1;var o=Object.keys(t),a=Object.keys(e);return o.length===a.length&&o.every((function(n){return B(t[n],e[n])}))}catch(c){return!1}}function F(t,e){for(var n=0;n<t.length;n++)if(B(t[n],e))return n;return-1}function U(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function j(t,e){return t===e?0===t&&1/t!==1/e:t===t||e===e}var z="data-server-rendered",H=["component","directive","filter"],q=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],Z={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:M,isReservedAttr:M,isUnknownElement:M,getTagNamespace:P,parsePlatformTagName:V,mustUseProp:M,async:!0,_lifecycleHooks:q},W=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function K(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function G(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var X=new RegExp("[^".concat(W.source,".$_\\d]"));function Q(t){if(!X.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var Y="__proto__"in{},J="undefined"!==typeof window,tt=J&&window.navigator.userAgent.toLowerCase(),et=tt&&/msie|trident/.test(tt),nt=tt&&tt.indexOf("msie 9.0")>0,it=tt&&tt.indexOf("edge/")>0;tt&&tt.indexOf("android");var rt=tt&&/iphone|ipad|ipod|ios/.test(tt);tt&&/chrome\/\d+/.test(tt),tt&&/phantomjs/.test(tt);var st,ot=tt&&tt.match(/firefox\/(\d+)/),at={}.watch,ct=!1;if(J)try{var lt={};Object.defineProperty(lt,"passive",{get:function(){ct=!0}}),window.addEventListener("test-passive",null,lt)}catch(Go){}var ut=function(){return void 0===st&&(st=!J&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),st},ht=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function dt(t){return"function"===typeof t&&/native code/.test(t.toString())}var pt,ft="undefined"!==typeof Symbol&&dt(Symbol)&&"undefined"!==typeof Reflect&&dt(Reflect.ownKeys);pt="undefined"!==typeof Set&&dt(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var mt=null;function gt(t){void 0===t&&(t=null),t||mt&&mt._scope.off(),mt=t,t&&t._scope.on()}var vt=function(){function t(t,e,n,i,r,s,o,a){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(t.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),t}(),yt=function(t){void 0===t&&(t="");var e=new vt;return e.text=t,e.isComment=!0,e};function bt(t){return new vt(void 0,void 0,void 0,String(t))}function wt(t){var e=new vt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var _t=0,Ct=function(){function t(){this.id=_t++,this.subs=[]}return t.prototype.addSub=function(t){this.subs.push(t)},t.prototype.removeSub=function(t){_(this.subs,t)},t.prototype.depend=function(e){t.target&&t.target.addDep(this)},t.prototype.notify=function(t){var e=this.subs.slice();for(var n=0,i=e.length;n<i;n++){e[n].update()}},t}();Ct.target=null;var St=[];function Et(t){St.push(t),Ct.target=t}function kt(){St.pop(),Ct.target=St[St.length-1]}var It=Array.prototype,Tt=Object.create(It),xt=["push","pop","shift","unshift","splice","sort","reverse"];xt.forEach((function(t){var e=It[t];G(Tt,t,(function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var r,s=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),s}))}));var At=Object.getOwnPropertyNames(Tt),Lt={},Ot=!0;function Nt(t){Ot=t}var Dt={notify:P,depend:P,addSub:P,removeSub:P},$t=function(){function t(t,e,n){if(void 0===e&&(e=!1),void 0===n&&(n=!1),this.value=t,this.shallow=e,this.mock=n,this.dep=n?Dt:new Ct,this.vmCount=0,G(t,"__ob__",this),r(t)){if(!n)if(Y)t.__proto__=Tt;else for(var i=0,s=At.length;i<s;i++){var o=At[i];G(t,o,Tt[o])}e||this.observeArray(t)}else{var a=Object.keys(t);for(i=0;i<a.length;i++){o=a[i];Pt(t,o,Lt,void 0,e,n)}}}return t.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Rt(t[e],!1,this.mock)},t}();function Rt(t,e,n){var i;if(!(!h(t)||zt(t)||t instanceof vt))return S(t,"__ob__")&&t.__ob__ instanceof $t?i=t.__ob__:!Ot||!n&&ut()||!r(t)&&!p(t)||!Object.isExtensible(t)||t.__v_skip||(i=new $t(t,e,n)),i}function Pt(t,e,n,i,s,o){var a=new Ct,c=Object.getOwnPropertyDescriptor(t,e);if(!c||!1!==c.configurable){var l=c&&c.get,u=c&&c.set;l&&!u||n!==Lt&&2!==arguments.length||(n=t[e]);var h=!s&&Rt(n,!1,o);return Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=l?l.call(t):n;return Ct.target&&(a.depend(),h&&(h.dep.depend(),r(e)&&Bt(e))),zt(e)&&!s?e.value:e},set:function(e){var i=l?l.call(t):n;if(j(i,e)){if(u)u.call(t,e);else{if(l)return;if(!s&&zt(i)&&!zt(e))return void(i.value=e);n=e}h=!s&&Rt(e,!1,o),a.notify()}}}),a}}function Mt(t,e,n){if(!jt(t)){var i=t.__ob__;return r(t)&&m(e)?(t.length=Math.max(t.length,e),t.splice(e,1,n),i&&!i.shallow&&i.mock&&Rt(n,!1,!0),n):e in t&&!(e in Object.prototype)?(t[e]=n,n):t._isVue||i&&i.vmCount?n:i?(Pt(i.value,e,n,void 0,i.shallow,i.mock),i.dep.notify(),n):(t[e]=n,n)}}function Vt(t,e){if(r(t)&&m(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||jt(t)||S(t,e)&&(delete t[e],n&&n.dep.notify())}}function Bt(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),r(e)&&Bt(e)}function Ft(t){return Ut(t,!0),G(t,"__v_isShallow",!0),t}function Ut(t,e){if(!jt(t)){Rt(t,e,ut());0}}function jt(t){return!(!t||!t.__v_isReadonly)}function zt(t){return!(!t||!0!==t.__v_isRef)}function Ht(t,e,n){Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var t=e[n];if(zt(t))return t.value;var i=t&&t.__ob__;return i&&i.dep.depend(),t},set:function(t){var i=e[n];zt(i)&&!zt(t)?i.value=t:e[n]=t}})}var qt="watcher";"".concat(qt," callback"),"".concat(qt," getter"),"".concat(qt," cleanup");var Zt;var Wt=function(){function t(t){void 0===t&&(t=!1),this.active=!0,this.effects=[],this.cleanups=[],!t&&Zt&&(this.parent=Zt,this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1)}return t.prototype.run=function(t){if(this.active){var e=Zt;try{return Zt=this,t()}finally{Zt=e}}else 0},t.prototype.on=function(){Zt=this},t.prototype.off=function(){Zt=this.parent},t.prototype.stop=function(t){if(this.active){var e=void 0,n=void 0;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].teardown();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){var i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}},t}();function Kt(t,e){void 0===e&&(e=Zt),e&&e.active&&e.effects.push(t)}function Gt(t){var e=t._provided,n=t.$parent&&t.$parent._provided;return n===e?t._provided=Object.create(n):e}var Xt=E((function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}}));function Qt(t,e){function n(){var t=n.fns;if(!r(t))return We(t,null,arguments,e,"v-on handler");for(var i=t.slice(),s=0;s<i.length;s++)We(i[s],null,arguments,e,"v-on handler")}return n.fns=t,n}function Yt(t,e,n,i,r,o){var c,l,u,h;for(c in t)l=t[c],u=e[c],h=Xt(c),s(l)||(s(u)?(s(l.fns)&&(l=t[c]=Qt(l,o)),a(h.once)&&(l=t[c]=r(h.name,l,h.capture)),n(h.name,l,h.capture,h.passive,h.params)):l!==u&&(u.fns=l,t[c]=u));for(c in e)s(t[c])&&(h=Xt(c),i(h.name,e[c],h.capture))}function Jt(t,e,n){var i;t instanceof vt&&(t=t.data.hook||(t.data.hook={}));var r=t[e];function c(){n.apply(this,arguments),_(i.fns,c)}s(r)?i=Qt([c]):o(r.fns)&&a(r.merged)?(i=r,i.fns.push(c)):i=Qt([r,c]),i.merged=!0,t[e]=i}function te(t,e,n){var i=e.options.props;if(!s(i)){var r={},a=t.attrs,c=t.props;if(o(a)||o(c))for(var l in i){var u=A(l);ee(r,c,l,u,!0)||ee(r,a,l,u,!1)}return r}}function ee(t,e,n,i,r){if(o(e)){if(S(e,n))return t[n]=e[n],r||delete e[n],!0;if(S(e,i))return t[n]=e[i],r||delete e[i],!0}return!1}function ne(t){for(var e=0;e<t.length;e++)if(r(t[e]))return Array.prototype.concat.apply([],t);return t}function ie(t){return l(t)?[bt(t)]:r(t)?se(t):void 0}function re(t){return o(t)&&o(t.text)&&c(t.isComment)}function se(t,e){var n,i,c,u,h=[];for(n=0;n<t.length;n++)i=t[n],s(i)||"boolean"===typeof i||(c=h.length-1,u=h[c],r(i)?i.length>0&&(i=se(i,"".concat(e||"","_").concat(n)),re(i[0])&&re(u)&&(h[c]=bt(u.text+i[0].text),i.shift()),h.push.apply(h,i)):l(i)?re(u)?h[c]=bt(u.text+i):""!==i&&h.push(bt(i)):re(i)&&re(u)?h[c]=bt(u.text+i.text):(a(t._isVList)&&o(i.tag)&&s(i.key)&&o(e)&&(i.key="__vlist".concat(e,"_").concat(n,"__")),h.push(i)));return h}function oe(t,e){var n,i,s,a,c=null;if(r(t)||"string"===typeof t)for(c=new Array(t.length),n=0,i=t.length;n<i;n++)c[n]=e(t[n],n);else if("number"===typeof t)for(c=new Array(t),n=0;n<t;n++)c[n]=e(n+1,n);else if(h(t))if(ft&&t[Symbol.iterator]){c=[];var l=t[Symbol.iterator](),u=l.next();while(!u.done)c.push(e(u.value,c.length)),u=l.next()}else for(s=Object.keys(t),c=new Array(s.length),n=0,i=s.length;n<i;n++)a=s[n],c[n]=e(t[a],a,n);return o(c)||(c=[]),c._isVList=!0,c}function ae(t,e,n,i){var r,s=this.$scopedSlots[t];s?(n=n||{},i&&(n=$($({},i),n)),r=s(n)||(u(e)?e():e)):r=this.$slots[t]||(u(e)?e():e);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function ce(t){return _i(this.$options,"filters",t,!0)||V}function le(t,e){return r(t)?-1===t.indexOf(e):t!==e}function ue(t,e,n,i,r){var s=Z.keyCodes[e]||n;return r&&i&&!Z.keyCodes[e]?le(r,i):s?le(s,t):i?A(i)!==e:void 0===t}function he(t,e,n,i,s){if(n)if(h(n)){r(n)&&(n=R(n));var o=void 0,a=function(r){if("class"===r||"style"===r||w(r))o=t;else{var a=t.attrs&&t.attrs.type;o=i||Z.mustUseProp(e,a,r)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=I(r),l=A(r);if(!(c in o)&&!(l in o)&&(o[r]=n[r],s)){var u=t.on||(t.on={});u["update:".concat(r)]=function(t){n[r]=t}}};for(var c in n)a(c)}else;return t}function de(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e||(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,this._c,this),fe(i,"__static__".concat(t),!1)),i}function pe(t,e,n){return fe(t,"__once__".concat(e).concat(n?"_".concat(n):""),!0),t}function fe(t,e,n){if(r(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&me(t[i],"".concat(e,"_").concat(i),n);else me(t,e,n)}function me(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function ge(t,e){if(e)if(p(e)){var n=t.on=t.on?$({},t.on):{};for(var i in e){var r=n[i],s=e[i];n[i]=r?[].concat(r,s):s}}else;return t}function ve(t,e,n,i){e=e||{$stable:!n};for(var s=0;s<t.length;s++){var o=t[s];r(o)?ve(o,e,n):o&&(o.proxy&&(o.fn.proxy=!0),e[o.key]=o.fn)}return i&&(e.$key=i),e}function ye(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function be(t,e){return"string"===typeof t?e+t:t}function we(t){t._o=pe,t._n=y,t._s=v,t._l=oe,t._t=ae,t._q=B,t._i=F,t._m=de,t._f=ce,t._k=ue,t._b=he,t._v=bt,t._e=yt,t._u=ve,t._g=ge,t._d=ye,t._p=be}function _e(t,e){if(!t||!t.length)return{};for(var n={},i=0,r=t.length;i<r;i++){var s=t[i],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==e&&s.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var l in n)n[l].every(Ce)&&delete n[l];return n}function Ce(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Se(t){return t.isComment&&t.asyncFactory}function Ee(t,e,n,r){var s,o=Object.keys(n).length>0,a=e?!!e.$stable:!o,c=e&&e.$key;if(e){if(e._normalized)return e._normalized;if(a&&r&&r!==i&&c===r.$key&&!o&&!r.$hasNormal)return r;for(var l in s={},e)e[l]&&"$"!==l[0]&&(s[l]=ke(t,n,l,e[l]))}else s={};for(var u in n)u in s||(s[u]=Ie(n,u));return e&&Object.isExtensible(e)&&(e._normalized=s),G(s,"$stable",a),G(s,"$key",c),G(s,"$hasNormal",o),s}function ke(t,e,n,i){var s=function(){var e=mt;gt(t);var n=arguments.length?i.apply(null,arguments):i({});n=n&&"object"===typeof n&&!r(n)?[n]:ie(n);var s=n&&n[0];return gt(e),n&&(!s||1===n.length&&s.isComment&&!Se(s))?void 0:n};return i.proxy&&Object.defineProperty(e,n,{get:s,enumerable:!0,configurable:!0}),s}function Ie(t,e){return function(){return t[e]}}function Te(t){var e=t.$options,n=e.setup;if(n){var i=t._setupContext=xe(t);gt(t),Et();var r=We(n,null,[t._props||Ft({}),i],t,"setup");if(kt(),gt(),u(r))e.render=r;else if(h(r))if(t._setupState=r,r.__sfc){var s=t._setupProxy={};for(var o in r)"__sfc"!==o&&Ht(s,r,o)}else for(var o in r)K(o)||Ht(t,r,o);else 0}}function xe(t){return{get attrs(){if(!t._attrsProxy){var e=t._attrsProxy={};G(e,"_v_attr_proxy",!0),Ae(e,t.$attrs,i,t,"$attrs")}return t._attrsProxy},get listeners(){if(!t._listenersProxy){var e=t._listenersProxy={};Ae(e,t.$listeners,i,t,"$listeners")}return t._listenersProxy},get slots(){return Oe(t)},emit:N(t.$emit,t),expose:function(e){e&&Object.keys(e).forEach((function(n){return Ht(t,e,n)}))}}}function Ae(t,e,n,i,r){var s=!1;for(var o in e)o in t?e[o]!==n[o]&&(s=!0):(s=!0,Le(t,o,i,r));for(var o in t)o in e||(s=!0,delete t[o]);return s}function Le(t,e,n,i){Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){return n[i][e]}})}function Oe(t){return t._slotsProxy||Ne(t._slotsProxy={},t.$scopedSlots),t._slotsProxy}function Ne(t,e){for(var n in e)t[n]=e[n];for(var n in t)n in e||delete t[n]}function De(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,r=n&&n.context;t.$slots=_e(e._renderChildren,r),t.$scopedSlots=n?Ee(t.$parent,n.data.scopedSlots,t.$slots):i,t._c=function(e,n,i,r){return je(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return je(t,e,n,i,r,!0)};var s=n&&n.data;Pt(t,"$attrs",s&&s.attrs||i,null,!0),Pt(t,"$listeners",e._parentListeners||i,null,!0)}var $e=null;function Re(t){we(t.prototype),t.prototype.$nextTick=function(t){return on(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,s=n._parentVnode;s&&e._isMounted&&(e.$scopedSlots=Ee(e.$parent,s.data.scopedSlots,e.$slots,e.$scopedSlots),e._slotsProxy&&Ne(e._slotsProxy,e.$scopedSlots)),e.$vnode=s;try{gt(e),$e=e,t=i.call(e._renderProxy,e.$createElement)}catch(Go){Ze(Go,e,"render"),t=e._vnode}finally{$e=null,gt()}return r(t)&&1===t.length&&(t=t[0]),t instanceof vt||(t=yt()),t.parent=s,t}}function Pe(t,e){return(t.__esModule||ft&&"Module"===t[Symbol.toStringTag])&&(t=t.default),h(t)?e.extend(t):t}function Me(t,e,n,i,r){var s=yt();return s.asyncFactory=t,s.asyncMeta={data:e,context:n,children:i,tag:r},s}function Ve(t,e){if(a(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=$e;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var i=t.owners=[n],r=!0,c=null,l=null;n.$on("hook:destroyed",(function(){return _(i,n)}));var u=function(t){for(var e=0,n=i.length;e<n;e++)i[e].$forceUpdate();t&&(i.length=0,null!==c&&(clearTimeout(c),c=null),null!==l&&(clearTimeout(l),l=null))},d=U((function(n){t.resolved=Pe(n,e),r?i.length=0:u(!0)})),p=U((function(e){o(t.errorComp)&&(t.error=!0,u(!0))})),f=t(d,p);return h(f)&&(g(f)?s(t.resolved)&&f.then(d,p):g(f.component)&&(f.component.then(d,p),o(f.error)&&(t.errorComp=Pe(f.error,e)),o(f.loading)&&(t.loadingComp=Pe(f.loading,e),0===f.delay?t.loading=!0:c=setTimeout((function(){c=null,s(t.resolved)&&s(t.error)&&(t.loading=!0,u(!1))}),f.delay||200)),o(f.timeout)&&(l=setTimeout((function(){l=null,s(t.resolved)&&p(null)}),f.timeout)))),r=!1,t.loading?t.loadingComp:t.resolved}}function Be(t){if(r(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||Se(n)))return n}}var Fe=1,Ue=2;function je(t,e,n,i,s,o){return(r(n)||l(n))&&(s=i,i=n,n=void 0),a(o)&&(s=Ue),ze(t,e,n,i,s)}function ze(t,e,n,i,s){if(o(n)&&o(n.__ob__))return yt();if(o(n)&&o(n.is)&&(e=n.is),!e)return yt();var a,c;if(r(i)&&u(i[0])&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),s===Ue?i=ie(i):s===Fe&&(i=ne(i)),"string"===typeof e){var l=void 0;c=t.$vnode&&t.$vnode.ns||Z.getTagNamespace(e),a=Z.isReservedTag(e)?new vt(Z.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!o(l=_i(t.$options,"components",e))?new vt(e,n,i,void 0,void 0,t):ri(l,n,t,i,e)}else a=ri(e,n,t,i);return r(a)?a:o(a)?(o(c)&&He(a,c),o(n)&&qe(n),a):yt()}function He(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var i=0,r=t.children.length;i<r;i++){var c=t.children[i];o(c.tag)&&(s(c.ns)||a(n)&&"svg"!==c.tag)&&He(c,e,n)}}function qe(t){h(t.style)&&hn(t.style),h(t.class)&&hn(t.class)}function Ze(t,e,n){Et();try{if(e){var i=e;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var s=0;s<r.length;s++)try{var o=!1===r[s].call(i,t,e,n);if(o)return}catch(Go){Ke(Go,i,"errorCaptured hook")}}}Ke(t,e,n)}finally{kt()}}function We(t,e,n,i,r){var s;try{s=n?t.apply(e,n):t.call(e),s&&!s._isVue&&g(s)&&!s._handled&&(s.catch((function(t){return Ze(t,i,r+" (Promise/async)")})),s._handled=!0)}catch(Go){Ze(Go,i,r)}return s}function Ke(t,e,n){if(Z.errorHandler)try{return Z.errorHandler.call(null,t,e,n)}catch(Go){Go!==t&&Ge(Go,null,"config.errorHandler")}Ge(t,e,n)}function Ge(t,e,n){if(!J||"undefined"===typeof console)throw t;console.error(t)}var Xe,Qe=!1,Ye=[],Je=!1;function tn(){Je=!1;var t=Ye.slice(0);Ye.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&dt(Promise)){var en=Promise.resolve();Xe=function(){en.then(tn),rt&&setTimeout(P)},Qe=!0}else if(et||"undefined"===typeof MutationObserver||!dt(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Xe="undefined"!==typeof setImmediate&&dt(setImmediate)?function(){setImmediate(tn)}:function(){setTimeout(tn,0)};else{var nn=1,rn=new MutationObserver(tn),sn=document.createTextNode(String(nn));rn.observe(sn,{characterData:!0}),Xe=function(){nn=(nn+1)%2,sn.data=String(nn)},Qe=!0}function on(t,e){var n;if(Ye.push((function(){if(t)try{t.call(e)}catch(Go){Ze(Go,e,"nextTick")}else n&&n(e)})),Je||(Je=!0,Xe()),!t&&"undefined"!==typeof Promise)return new Promise((function(t){n=t}))}function an(t){return function(e,n){if(void 0===n&&(n=mt),n)return cn(n,t,e)}}function cn(t,e,n){var i=t.$options;i[e]=pi(i[e],n)}an("beforeMount"),an("mounted"),an("beforeUpdate"),an("updated"),an("beforeDestroy"),an("destroyed"),an("activated"),an("deactivated"),an("serverPrefetch"),an("renderTracked"),an("renderTriggered"),an("errorCaptured");var ln="2.7.10";var un=new pt;function hn(t){return dn(t,un),un.clear(),t}function dn(t,e){var n,i,s=r(t);if(!(!s&&!h(t)||Object.isFrozen(t)||t instanceof vt)){if(t.__ob__){var o=t.__ob__.dep.id;if(e.has(o))return;e.add(o)}if(s){n=t.length;while(n--)dn(t[n],e)}else if(zt(t))dn(t.value,e);else{i=Object.keys(t),n=i.length;while(n--)dn(t[i[n]],e)}}}var pn,fn=0,mn=function(){function t(t,e,n,i,r){Kt(this,Zt&&!Zt._vm?Zt:t?t._scope:void 0),(this.vm=t)&&r&&(t._watcher=this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++fn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new pt,this.newDepIds=new pt,this.expression="",u(e)?this.getter=e:(this.getter=Q(e),this.getter||(this.getter=P)),this.value=this.lazy?void 0:this.get()}return t.prototype.get=function(){var t;Et(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(Go){if(!this.user)throw Go;Ze(Go,e,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&hn(t),kt(),this.cleanupDeps()}return t},t.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},t.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},t.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Wn(this)},t.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||h(t)||this.deep){var e=this.value;if(this.value=t,this.user){var n='callback for watcher "'.concat(this.expression,'"');We(this.cb,this.vm,[t,e],this.vm,n)}else this.cb.call(this.vm,t,e)}}},t.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},t.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},t.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&_(this.vm._scope.effects,this),this.active){var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},t}();function gn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&wn(t,e)}function vn(t,e){pn.$on(t,e)}function yn(t,e){pn.$off(t,e)}function bn(t,e){var n=pn;return function i(){var r=e.apply(null,arguments);null!==r&&n.$off(t,i)}}function wn(t,e,n){pn=t,Yt(e,n||{},vn,yn,bn,t),pn=void 0}function _n(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(r(t))for(var s=0,o=t.length;s<o;s++)i.$on(t[s],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(r(t)){for(var i=0,s=t.length;i<s;i++)n.$off(t[i],e);return n}var o,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var c=a.length;while(c--)if(o=a[c],o===e||o.fn===e){a.splice(c,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?D(n):n;for(var i=D(arguments,1),r='event handler for "'.concat(t,'"'),s=0,o=n.length;s<o;s++)We(n[s],e,i,e,r)}return e}}var Cn=null;function Sn(t){var e=Cn;return Cn=t,function(){Cn=e}}function En(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._provided=n?n._provided:Object.create(null),t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function kn(t){t.prototype._update=function(t,e){var n=this,i=n.$el,r=n._vnode,s=Sn(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),s(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n);var o=n;while(o&&o.$vnode&&o.$parent&&o.$vnode===o.$parent._vnode)o.$parent.$el=o.$el,o=o.$parent},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){On(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||_(e.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),On(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function In(t,e,n){var i;t.$el=e,t.$options.render||(t.$options.render=yt),On(t,"beforeMount"),i=function(){t._update(t._render(),n)};var r={before:function(){t._isMounted&&!t._isDestroyed&&On(t,"beforeUpdate")}};new mn(t,i,P,r,!0),n=!1;var s=t._preWatchers;if(s)for(var o=0;o<s.length;o++)s[o].run();return null==t.$vnode&&(t._isMounted=!0,On(t,"mounted")),t}function Tn(t,e,n,r,s){var o=r.data.scopedSlots,a=t.$scopedSlots,c=!!(o&&!o.$stable||a!==i&&!a.$stable||o&&t.$scopedSlots.$key!==o.$key||!o&&t.$scopedSlots.$key),l=!!(s||t.$options._renderChildren||c),u=t.$vnode;t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=s;var h=r.data.attrs||i;t._attrsProxy&&Ae(t._attrsProxy,h,u.data&&u.data.attrs||i,t,"$attrs")&&(l=!0),t.$attrs=h,n=n||i;var d=t.$options._parentListeners;if(t._listenersProxy&&Ae(t._listenersProxy,n,d||i,t,"$listeners"),t.$listeners=t.$options._parentListeners=n,wn(t,n,d),e&&t.$options.props){Nt(!1);for(var p=t._props,f=t.$options._propKeys||[],m=0;m<f.length;m++){var g=f[m],v=t.$options.props;p[g]=Ci(g,v,e,t)}Nt(!0),t.$options.propsData=e}l&&(t.$slots=_e(s,r.context),t.$forceUpdate())}function xn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function An(t,e){if(e){if(t._directInactive=!1,xn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)An(t.$children[n]);On(t,"activated")}}function Ln(t,e){if((!e||(t._directInactive=!0,!xn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Ln(t.$children[n]);On(t,"deactivated")}}function On(t,e,n,i){void 0===i&&(i=!0),Et();var r=mt;i&&gt(t);var s=t.$options[e],o="".concat(e," hook");if(s)for(var a=0,c=s.length;a<c;a++)We(s[a],t,n||null,t,o);t._hasHookEvent&&t.$emit("hook:"+e),i&&gt(r),kt()}var Nn=[],Dn=[],$n={},Rn=!1,Pn=!1,Mn=0;function Vn(){Mn=Nn.length=Dn.length=0,$n={},Rn=Pn=!1}var Bn=0,Fn=Date.now;if(J&&!et){var Un=window.performance;Un&&"function"===typeof Un.now&&Fn()>document.createEvent("Event").timeStamp&&(Fn=function(){return Un.now()})}var jn=function(t,e){if(t.post){if(!e.post)return 1}else if(e.post)return-1;return t.id-e.id};function zn(){var t,e;for(Bn=Fn(),Pn=!0,Nn.sort(jn),Mn=0;Mn<Nn.length;Mn++)t=Nn[Mn],t.before&&t.before(),e=t.id,$n[e]=null,t.run();var n=Dn.slice(),i=Nn.slice();Vn(),Zn(n),Hn(i),ht&&Z.devtools&&ht.emit("flush")}function Hn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i&&i._watcher===n&&i._isMounted&&!i._isDestroyed&&On(i,"updated")}}function qn(t){t._inactive=!1,Dn.push(t)}function Zn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,An(t[e],!0)}function Wn(t){var e=t.id;if(null==$n[e]&&(t!==Ct.target||!t.noRecurse)){if($n[e]=!0,Pn){var n=Nn.length-1;while(n>Mn&&Nn[n].id>t.id)n--;Nn.splice(n+1,0,t)}else Nn.push(t);Rn||(Rn=!0,on(zn))}}function Kn(t){var e=t.$options.provide;if(e){var n=u(e)?e.call(t):e;if(!h(n))return;for(var i=Gt(t),r=ft?Reflect.ownKeys(n):Object.keys(n),s=0;s<r.length;s++){var o=r[s];Object.defineProperty(i,o,Object.getOwnPropertyDescriptor(n,o))}}}function Gn(t){var e=Xn(t.$options.inject,t);e&&(Nt(!1),Object.keys(e).forEach((function(n){Pt(t,n,e[n])})),Nt(!0))}function Xn(t,e){if(t){for(var n=Object.create(null),i=ft?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var s=i[r];if("__ob__"!==s){var o=t[s].from;if(o in e._provided)n[s]=e._provided[o];else if("default"in t[s]){var a=t[s].default;n[s]=u(a)?a.call(e):a}else 0}}return n}}function Qn(t,e,n,s,o){var c,l=this,u=o.options;S(s,"_uid")?(c=Object.create(s),c._original=s):(c=s,s=s._original);var h=a(u._compiled),d=!h;this.data=t,this.props=e,this.children=n,this.parent=s,this.listeners=t.on||i,this.injections=Xn(u.inject,s),this.slots=function(){return l.$slots||Ee(s,t.scopedSlots,l.$slots=_e(n,s)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Ee(s,t.scopedSlots,this.slots())}}),h&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Ee(s,t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,i){var o=je(c,t,e,n,i,d);return o&&!r(o)&&(o.fnScopeId=u._scopeId,o.fnContext=s),o}:this._c=function(t,e,n,i){return je(c,t,e,n,i,d)}}function Yn(t,e,n,s,a){var c=t.options,l={},u=c.props;if(o(u))for(var h in u)l[h]=Ci(h,u,e||i);else o(n.attrs)&&ti(l,n.attrs),o(n.props)&&ti(l,n.props);var d=new Qn(n,l,a,s,t),p=c.render.call(null,d._c,d);if(p instanceof vt)return Jn(p,n,d.parent,c,d);if(r(p)){for(var f=ie(p)||[],m=new Array(f.length),g=0;g<f.length;g++)m[g]=Jn(f[g],n,d.parent,c,d);return m}}function Jn(t,e,n,i,r){var s=wt(t);return s.fnContext=n,s.fnOptions=i,e.slot&&((s.data||(s.data={})).slot=e.slot),s}function ti(t,e){for(var n in e)t[I(n)]=e[n]}function ei(t){return t.name||t.__name||t._componentTag}we(Qn.prototype);var ni={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;ni.prepatch(n,n)}else{var i=t.componentInstance=si(t,Cn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;Tn(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,On(n,"mounted")),t.data.keepAlive&&(e._isMounted?qn(n):An(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Ln(e,!0):e.$destroy())}},ii=Object.keys(ni);function ri(t,e,n,i,r){if(!s(t)){var c=n.$options._base;if(h(t)&&(t=c.extend(t)),"function"===typeof t){var l;if(s(t.cid)&&(l=t,t=Ve(l,c),void 0===t))return Me(l,e,n,i,r);e=e||{},Zi(t),o(e.model)&&ci(t.options,e);var u=te(e,t,r);if(a(t.options.functional))return Yn(t,u,e,n,i);var d=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var p=e.slot;e={},p&&(e.slot=p)}oi(e);var f=ei(t.options)||r,m=new vt("vue-component-".concat(t.cid).concat(f?"-".concat(f):""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:u,listeners:d,tag:r,children:i},l);return m}}}function si(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return o(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function oi(t){for(var e=t.hook||(t.hook={}),n=0;n<ii.length;n++){var i=ii[n],r=e[i],s=ni[i];r===s||r&&r._merged||(e[i]=r?ai(s,r):s)}}function ai(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function ci(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var s=e.on||(e.on={}),a=s[i],c=e.model.callback;o(a)?(r(a)?-1===a.indexOf(c):a!==c)&&(s[i]=[c].concat(a)):s[i]=c}var li=P,ui=Z.optionMergeStrategies;function hi(t,e){if(!e)return t;for(var n,i,r,s=ft?Reflect.ownKeys(e):Object.keys(e),o=0;o<s.length;o++)n=s[o],"__ob__"!==n&&(i=t[n],r=e[n],S(t,n)?i!==r&&p(i)&&p(r)&&hi(i,r):Mt(t,n,r));return t}function di(t,e,n){return n?function(){var i=u(e)?e.call(n,n):e,r=u(t)?t.call(n,n):t;return i?hi(i,r):r}:e?t?function(){return hi(u(e)?e.call(this,this):e,u(t)?t.call(this,this):t)}:e:t}function pi(t,e){var n=e?t?t.concat(e):r(e)?e:[e]:t;return n?fi(n):n}function fi(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function mi(t,e,n,i){var r=Object.create(t||null);return e?$(r,e):r}ui.data=function(t,e,n){return n?di(t,e,n):e&&"function"!==typeof e?t:di(t,e)},q.forEach((function(t){ui[t]=pi})),H.forEach((function(t){ui[t+"s"]=mi})),ui.watch=function(t,e,n,i){if(t===at&&(t=void 0),e===at&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var s={};for(var o in $(s,t),e){var a=s[o],c=e[o];a&&!r(a)&&(a=[a]),s[o]=a?a.concat(c):r(c)?c:[c]}return s},ui.props=ui.methods=ui.inject=ui.computed=function(t,e,n,i){if(!t)return e;var r=Object.create(null);return $(r,t),e&&$(r,e),r},ui.provide=di;var gi=function(t,e){return void 0===e?t:e};function vi(t,e){var n=t.props;if(n){var i,s,o,a={};if(r(n)){i=n.length;while(i--)s=n[i],"string"===typeof s&&(o=I(s),a[o]={type:null})}else if(p(n))for(var c in n)s=n[c],o=I(c),a[o]=p(s)?s:{type:s};else 0;t.props=a}}function yi(t,e){var n=t.inject;if(n){var i=t.inject={};if(r(n))for(var s=0;s<n.length;s++)i[n[s]]={from:n[s]};else if(p(n))for(var o in n){var a=n[o];i[o]=p(a)?$({from:o},a):{from:a}}else 0}}function bi(t){var e=t.directives;if(e)for(var n in e){var i=e[n];u(i)&&(e[n]={bind:i,update:i})}}function wi(t,e,n){if(u(e)&&(e=e.options),vi(e,n),yi(e,n),bi(e),!e._base&&(e.extends&&(t=wi(t,e.extends,n)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)t=wi(t,e.mixins[i],n);var s,o={};for(s in t)a(s);for(s in e)S(t,s)||a(s);function a(i){var r=ui[i]||gi;o[i]=r(t[i],e[i],n,i)}return o}function _i(t,e,n,i){if("string"===typeof n){var r=t[e];if(S(r,n))return r[n];var s=I(n);if(S(r,s))return r[s];var o=T(s);if(S(r,o))return r[o];var a=r[n]||r[s]||r[o];return a}}function Ci(t,e,n,i){var r=e[t],s=!S(n,t),o=n[t],a=Ti(Boolean,r.type);if(a>-1)if(s&&!S(r,"default"))o=!1;else if(""===o||o===A(t)){var c=Ti(String,r.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Si(i,r,t);var l=Ot;Nt(!0),Rt(o),Nt(l)}return o}function Si(t,e,n){if(S(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:u(i)&&"Function"!==ki(e.type)?i.call(t):i}}var Ei=/^\s*function (\w+)/;function ki(t){var e=t&&t.toString().match(Ei);return e?e[1]:""}function Ii(t,e){return ki(t)===ki(e)}function Ti(t,e){if(!r(e))return Ii(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(Ii(e[n],t))return n;return-1}var xi={enumerable:!0,configurable:!0,get:P,set:P};function Ai(t,e,n){xi.get=function(){return this[e][n]},xi.set=function(t){this[e][n]=t},Object.defineProperty(t,n,xi)}function Li(t){var e=t.$options;if(e.props&&Oi(t,e.props),Te(t),e.methods&&Bi(t,e.methods),e.data)Ni(t);else{var n=Rt(t._data={});n&&n.vmCount++}e.computed&&Ri(t,e.computed),e.watch&&e.watch!==at&&Fi(t,e.watch)}function Oi(t,e){var n=t.$options.propsData||{},i=t._props=Ft({}),r=t.$options._propKeys=[],s=!t.$parent;s||Nt(!1);var o=function(s){r.push(s);var o=Ci(s,e,n,t);Pt(i,s,o),s in t||Ai(t,"_props",s)};for(var a in e)o(a);Nt(!0)}function Ni(t){var e=t.$options.data;e=t._data=u(e)?Di(e,t):e||{},p(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var s=n[r];0,i&&S(i,s)||K(s)||Ai(t,"_data",s)}var o=Rt(e);o&&o.vmCount++}function Di(t,e){Et();try{return t.call(e,e)}catch(Go){return Ze(Go,e,"data()"),{}}finally{kt()}}var $i={lazy:!0};function Ri(t,e){var n=t._computedWatchers=Object.create(null),i=ut();for(var r in e){var s=e[r],o=u(s)?s:s.get;0,i||(n[r]=new mn(t,o||P,P,$i)),r in t||Pi(t,r,s)}}function Pi(t,e,n){var i=!ut();u(n)?(xi.get=i?Mi(e):Vi(n),xi.set=P):(xi.get=n.get?i&&!1!==n.cache?Mi(e):Vi(n.get):P,xi.set=n.set||P),Object.defineProperty(t,e,xi)}function Mi(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),Ct.target&&e.depend(),e.value}}function Vi(t){return function(){return t.call(this,this)}}function Bi(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?P:N(e[n],t)}function Fi(t,e){for(var n in e){var i=e[n];if(r(i))for(var s=0;s<i.length;s++)Ui(t,n,i[s]);else Ui(t,n,i)}}function Ui(t,e,n,i){return p(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function ji(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Mt,t.prototype.$delete=Vt,t.prototype.$watch=function(t,e,n){var i=this;if(p(e))return Ui(i,t,e,n);n=n||{},n.user=!0;var r=new mn(i,t,e,n);if(n.immediate){var s='callback for immediate watcher "'.concat(r.expression,'"');Et(),We(e,i,[r.value],i,s),kt()}return function(){r.teardown()}}}var zi=0;function Hi(t){t.prototype._init=function(t){var e=this;e._uid=zi++,e._isVue=!0,e.__v_skip=!0,e._scope=new Wt(!0),e._scope._vm=!0,t&&t._isComponent?qi(e,t):e.$options=wi(Zi(e.constructor),t||{},e),e._renderProxy=e,e._self=e,En(e),gn(e),De(e),On(e,"beforeCreate",void 0,!1),Gn(e),Li(e),Kn(e),On(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function qi(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function Zi(t){var e=t.options;if(t.super){var n=Zi(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=Wi(t);r&&$(t.extendOptions,r),e=t.options=wi(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function Wi(t){var e,n=t.options,i=t.sealedOptions;for(var r in n)n[r]!==i[r]&&(e||(e={}),e[r]=n[r]);return e}function Ki(t){this._init(t)}function Gi(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=D(arguments,1);return n.unshift(this),u(t.install)?t.install.apply(t,n):u(t)&&t.apply(null,n),e.push(t),this}}function Xi(t){t.mixin=function(t){return this.options=wi(this.options,t),this}}function Qi(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var s=ei(t)||ei(n.options);var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=wi(n.options,t),o["super"]=n,o.options.props&&Yi(o),o.options.computed&&Ji(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,H.forEach((function(t){o[t]=n[t]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=$({},o.options),r[i]=o,o}}function Yi(t){var e=t.options.props;for(var n in e)Ai(t.prototype,"_props",n)}function Ji(t){var e=t.options.computed;for(var n in e)Pi(t.prototype,n,e[n])}function tr(t){H.forEach((function(e){t[e]=function(t,n){return n?("component"===e&&p(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&u(n)&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}}))}function er(t){return t&&(ei(t.Ctor.options)||t.tag)}function nr(t,e){return r(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!f(t)&&t.test(e)}function ir(t,e){var n=t.cache,i=t.keys,r=t._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!e(a)&&rr(n,s,i,r)}}}function rr(t,e,n,i){var r=t[e];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),t[e]=null,_(n,e)}Hi(Ki),ji(Ki),_n(Ki),kn(Ki),Re(Ki);var sr=[String,RegExp,Array],or={name:"keep-alive",abstract:!0,props:{include:sr,exclude:sr,max:[String,Number]},methods:{cacheVNode:function(){var t=this,e=t.cache,n=t.keys,i=t.vnodeToCache,r=t.keyToCache;if(i){var s=i.tag,o=i.componentInstance,a=i.componentOptions;e[r]={name:er(a),tag:s,componentInstance:o},n.push(r),this.max&&n.length>parseInt(this.max)&&rr(e,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)rr(this.cache,t,this.keys)},mounted:function(){var t=this;this.cacheVNode(),this.$watch("include",(function(e){ir(t,(function(t){return nr(e,t)}))})),this.$watch("exclude",(function(e){ir(t,(function(t){return!nr(e,t)}))}))},updated:function(){this.cacheVNode()},render:function(){var t=this.$slots.default,e=Be(t),n=e&&e.componentOptions;if(n){var i=er(n),r=this,s=r.include,o=r.exclude;if(s&&(!i||!nr(s,i))||o&&i&&nr(o,i))return e;var a=this,c=a.cache,l=a.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):e.key;c[u]?(e.componentInstance=c[u].componentInstance,_(l,u),l.push(u)):(this.vnodeToCache=e,this.keyToCache=u),e.data.keepAlive=!0}return e||t&&t[0]}},ar={KeepAlive:or};function cr(t){var e={get:function(){return Z}};Object.defineProperty(t,"config",e),t.util={warn:li,extend:$,mergeOptions:wi,defineReactive:Pt},t.set=Mt,t.delete=Vt,t.nextTick=on,t.observable=function(t){return Rt(t),t},t.options=Object.create(null),H.forEach((function(e){t.options[e+"s"]=Object.create(null)})),t.options._base=t,$(t.options.components,ar),Gi(t),Xi(t),Qi(t),tr(t)}cr(Ki),Object.defineProperty(Ki.prototype,"$isServer",{get:ut}),Object.defineProperty(Ki.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Ki,"FunctionalRenderContext",{value:Qn}),Ki.version=ln;var lr=b("style,class"),ur=b("input,textarea,option,select,progress"),hr=function(t,e,n){return"value"===n&&ur(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},dr=b("contenteditable,draggable,spellcheck"),pr=b("events,caret,typing,plaintext-only"),fr=function(t,e){return br(e)||"false"===e?"false":"contenteditable"===t&&pr(e)?e:"true"},mr=b("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),gr="http://www.w3.org/1999/xlink",vr=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},yr=function(t){return vr(t)?t.slice(6,t.length):""},br=function(t){return null==t||!1===t};function wr(t){var e=t.data,n=t,i=t;while(o(i.componentInstance))i=i.componentInstance._vnode,i&&i.data&&(e=_r(i.data,e));while(o(n=n.parent))n&&n.data&&(e=_r(e,n.data));return Cr(e.staticClass,e.class)}function _r(t,e){return{staticClass:Sr(t.staticClass,e.staticClass),class:o(t.class)?[t.class,e.class]:e.class}}function Cr(t,e){return o(t)||o(e)?Sr(t,Er(e)):""}function Sr(t,e){return t?e?t+" "+e:t:e||""}function Er(t){return Array.isArray(t)?kr(t):h(t)?Ir(t):"string"===typeof t?t:""}function kr(t){for(var e,n="",i=0,r=t.length;i<r;i++)o(e=Er(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Ir(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Tr={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},xr=b("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Ar=b("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Lr=function(t){return xr(t)||Ar(t)};function Or(t){return Ar(t)?"svg":"math"===t?"math":void 0}var Nr=Object.create(null);function Dr(t){if(!J)return!0;if(Lr(t))return!1;if(t=t.toLowerCase(),null!=Nr[t])return Nr[t];var e=document.createElement(t);return t.indexOf("-")>-1?Nr[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Nr[t]=/HTMLUnknownElement/.test(e.toString())}var $r=b("text,number,password,search,email,tel,url");function Rr(t){if("string"===typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function Pr(t,e){var n=document.createElement(t);return"select"!==t||e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function Mr(t,e){return document.createElementNS(Tr[t],e)}function Vr(t){return document.createTextNode(t)}function Br(t){return document.createComment(t)}function Fr(t,e,n){t.insertBefore(e,n)}function Ur(t,e){t.removeChild(e)}function jr(t,e){t.appendChild(e)}function zr(t){return t.parentNode}function Hr(t){return t.nextSibling}function qr(t){return t.tagName}function Zr(t,e){t.textContent=e}function Wr(t,e){t.setAttribute(e,"")}var Kr=Object.freeze({__proto__:null,createElement:Pr,createElementNS:Mr,createTextNode:Vr,createComment:Br,insertBefore:Fr,removeChild:Ur,appendChild:jr,parentNode:zr,nextSibling:Hr,tagName:qr,setTextContent:Zr,setStyleScope:Wr}),Gr={create:function(t,e){Xr(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Xr(t,!0),Xr(e))},destroy:function(t){Xr(t,!0)}};function Xr(t,e){var n=t.data.ref;if(o(n)){var i=t.context,s=t.componentInstance||t.elm,a=e?null:s,c=e?void 0:s;if(u(n))We(n,i,[a],i,"template ref function");else{var l=t.data.refInFor,h="string"===typeof n||"number"===typeof n,d=zt(n),p=i.$refs;if(h||d)if(l){var f=h?p[n]:n.value;e?r(f)&&_(f,s):r(f)?f.includes(s)||f.push(s):h?(p[n]=[s],Qr(i,n,p[n])):n.value=[s]}else if(h){if(e&&p[n]!==s)return;p[n]=c,Qr(i,n,a)}else if(d){if(e&&n.value!==s)return;n.value=a}else 0}}}function Qr(t,e,n){var i=t._setupState;i&&S(i,e)&&(zt(i[e])?i[e].value=n:i[e]=n)}var Yr=new vt("",{},[]),Jr=["create","activate","update","remove","destroy"];function ts(t,e){return t.key===e.key&&t.asyncFactory===e.asyncFactory&&(t.tag===e.tag&&t.isComment===e.isComment&&o(t.data)===o(e.data)&&es(t,e)||a(t.isAsyncPlaceholder)&&s(e.asyncFactory.error))}function es(t,e){if("input"!==t.tag)return!0;var n,i=o(n=t.data)&&o(n=n.attrs)&&n.type,r=o(n=e.data)&&o(n=n.attrs)&&n.type;return i===r||$r(i)&&$r(r)}function ns(t,e,n){var i,r,s={};for(i=e;i<=n;++i)r=t[i].key,o(r)&&(s[r]=i);return s}function is(t){var e,n,i={},c=t.modules,u=t.nodeOps;for(e=0;e<Jr.length;++e)for(i[Jr[e]]=[],n=0;n<c.length;++n)o(c[n][Jr[e]])&&i[Jr[e]].push(c[n][Jr[e]]);function h(t){return new vt(u.tagName(t).toLowerCase(),{},[],void 0,t)}function d(t,e){function n(){0===--n.listeners&&p(t)}return n.listeners=e,n}function p(t){var e=u.parentNode(t);o(e)&&u.removeChild(e,t)}function f(t,e,n,i,r,s,c){if(o(t.elm)&&o(s)&&(t=s[c]=wt(t)),t.isRootInsert=!r,!m(t,e,n,i)){var l=t.data,h=t.children,d=t.tag;o(d)?(t.elm=t.ns?u.createElementNS(t.ns,d):u.createElement(d,t),S(t),w(t,h,e),o(l)&&C(t,e),y(n,t.elm,i)):a(t.isComment)?(t.elm=u.createComment(t.text),y(n,t.elm,i)):(t.elm=u.createTextNode(t.text),y(n,t.elm,i))}}function m(t,e,n,i){var r=t.data;if(o(r)){var s=o(t.componentInstance)&&r.keepAlive;if(o(r=r.hook)&&o(r=r.init)&&r(t,!1),o(t.componentInstance))return g(t,e),y(n,t.elm,i),a(s)&&v(t,e,n,i),!0}}function g(t,e){o(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,_(t)?(C(t,e),S(t)):(Xr(t),e.push(t))}function v(t,e,n,r){var s,a=t;while(a.componentInstance)if(a=a.componentInstance._vnode,o(s=a.data)&&o(s=s.transition)){for(s=0;s<i.activate.length;++s)i.activate[s](Yr,a);e.push(a);break}y(n,t.elm,r)}function y(t,e,n){o(t)&&(o(n)?u.parentNode(n)===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function w(t,e,n){if(r(e)){0;for(var i=0;i<e.length;++i)f(e[i],n,t.elm,null,!0,e,i)}else l(t.text)&&u.appendChild(t.elm,u.createTextNode(String(t.text)))}function _(t){while(t.componentInstance)t=t.componentInstance._vnode;return o(t.tag)}function C(t,n){for(var r=0;r<i.create.length;++r)i.create[r](Yr,t);e=t.data.hook,o(e)&&(o(e.create)&&e.create(Yr,t),o(e.insert)&&n.push(t))}function S(t){var e;if(o(e=t.fnScopeId))u.setStyleScope(t.elm,e);else{var n=t;while(n)o(e=n.context)&&o(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e),n=n.parent}o(e=Cn)&&e!==t.context&&e!==t.fnContext&&o(e=e.$options._scopeId)&&u.setStyleScope(t.elm,e)}function E(t,e,n,i,r,s){for(;i<=r;++i)f(n[i],s,t,e,!1,n,i)}function k(t){var e,n,r=t.data;if(o(r))for(o(e=r.hook)&&o(e=e.destroy)&&e(t),e=0;e<i.destroy.length;++e)i.destroy[e](t);if(o(e=t.children))for(n=0;n<t.children.length;++n)k(t.children[n])}function I(t,e,n){for(;e<=n;++e){var i=t[e];o(i)&&(o(i.tag)?(T(i),k(i)):p(i.elm))}}function T(t,e){if(o(e)||o(t.data)){var n,r=i.remove.length+1;for(o(e)?e.listeners+=r:e=d(t.elm,r),o(n=t.componentInstance)&&o(n=n._vnode)&&o(n.data)&&T(n,e),n=0;n<i.remove.length;++n)i.remove[n](t,e);o(n=t.data.hook)&&o(n=n.remove)?n(t,e):e()}else p(t.elm)}function x(t,e,n,i,r){var a,c,l,h,d=0,p=0,m=e.length-1,g=e[0],v=e[m],y=n.length-1,b=n[0],w=n[y],_=!r;while(d<=m&&p<=y)s(g)?g=e[++d]:s(v)?v=e[--m]:ts(g,b)?(L(g,b,i,n,p),g=e[++d],b=n[++p]):ts(v,w)?(L(v,w,i,n,y),v=e[--m],w=n[--y]):ts(g,w)?(L(g,w,i,n,y),_&&u.insertBefore(t,g.elm,u.nextSibling(v.elm)),g=e[++d],w=n[--y]):ts(v,b)?(L(v,b,i,n,p),_&&u.insertBefore(t,v.elm,g.elm),v=e[--m],b=n[++p]):(s(a)&&(a=ns(e,d,m)),c=o(b.key)?a[b.key]:A(b,e,d,m),s(c)?f(b,i,t,g.elm,!1,n,p):(l=e[c],ts(l,b)?(L(l,b,i,n,p),e[c]=void 0,_&&u.insertBefore(t,l.elm,g.elm)):f(b,i,t,g.elm,!1,n,p)),b=n[++p]);d>m?(h=s(n[y+1])?null:n[y+1].elm,E(t,h,n,p,y,i)):p>y&&I(e,d,m)}function A(t,e,n,i){for(var r=n;r<i;r++){var s=e[r];if(o(s)&&ts(t,s))return r}}function L(t,e,n,r,c,l){if(t!==e){o(e.elm)&&o(r)&&(e=r[c]=wt(e));var h=e.elm=t.elm;if(a(t.isAsyncPlaceholder))o(e.asyncFactory.resolved)?D(t.elm,e,n):e.isAsyncPlaceholder=!0;else if(a(e.isStatic)&&a(t.isStatic)&&e.key===t.key&&(a(e.isCloned)||a(e.isOnce)))e.componentInstance=t.componentInstance;else{var d,p=e.data;o(p)&&o(d=p.hook)&&o(d=d.prepatch)&&d(t,e);var f=t.children,m=e.children;if(o(p)&&_(e)){for(d=0;d<i.update.length;++d)i.update[d](t,e);o(d=p.hook)&&o(d=d.update)&&d(t,e)}s(e.text)?o(f)&&o(m)?f!==m&&x(h,f,m,n,l):o(m)?(o(t.text)&&u.setTextContent(h,""),E(h,null,m,0,m.length-1,n)):o(f)?I(f,0,f.length-1):o(t.text)&&u.setTextContent(h,""):t.text!==e.text&&u.setTextContent(h,e.text),o(p)&&o(d=p.hook)&&o(d=d.postpatch)&&d(t,e)}}}function O(t,e,n){if(a(n)&&o(t.parent))t.parent.data.pendingInsert=e;else for(var i=0;i<e.length;++i)e[i].data.hook.insert(e[i])}var N=b("attrs,class,staticClass,staticStyle,key");function D(t,e,n,i){var r,s=e.tag,c=e.data,l=e.children;if(i=i||c&&c.pre,e.elm=t,a(e.isComment)&&o(e.asyncFactory))return e.isAsyncPlaceholder=!0,!0;if(o(c)&&(o(r=c.hook)&&o(r=r.init)&&r(e,!0),o(r=e.componentInstance)))return g(e,n),!0;if(o(s)){if(o(l))if(t.hasChildNodes())if(o(r=c)&&o(r=r.domProps)&&o(r=r.innerHTML)){if(r!==t.innerHTML)return!1}else{for(var u=!0,h=t.firstChild,d=0;d<l.length;d++){if(!h||!D(h,l[d],n,i)){u=!1;break}h=h.nextSibling}if(!u||h)return!1}else w(e,l,n);if(o(c)){var p=!1;for(var f in c)if(!N(f)){p=!0,C(e,n);break}!p&&c["class"]&&hn(c["class"])}}else t.data!==e.text&&(t.data=e.text);return!0}return function(t,e,n,r){if(!s(e)){var c=!1,l=[];if(s(t))c=!0,f(e,l);else{var d=o(t.nodeType);if(!d&&ts(t,e))L(t,e,l,null,null,r);else{if(d){if(1===t.nodeType&&t.hasAttribute(z)&&(t.removeAttribute(z),n=!0),a(n)&&D(t,e,l))return O(e,l,!0),t;t=h(t)}var p=t.elm,m=u.parentNode(p);if(f(e,l,p._leaveCb?null:m,u.nextSibling(p)),o(e.parent)){var g=e.parent,v=_(e);while(g){for(var y=0;y<i.destroy.length;++y)i.destroy[y](g);if(g.elm=e.elm,v){for(var b=0;b<i.create.length;++b)i.create[b](Yr,g);var w=g.data.hook.insert;if(w.merged)for(var C=1;C<w.fns.length;C++)w.fns[C]()}else Xr(g);g=g.parent}}o(m)?I([t],0,0):o(t.tag)&&k(t)}}return O(e,l,c),e.elm}o(t)&&k(t)}}var rs={create:ss,update:ss,destroy:function(t){ss(t,Yr)}};function ss(t,e){(t.data.directives||e.data.directives)&&os(t,e)}function os(t,e){var n,i,r,s=t===Yr,o=e===Yr,a=cs(t.data.directives,t.context),c=cs(e.data.directives,e.context),l=[],u=[];for(n in c)i=a[n],r=c[n],i?(r.oldValue=i.value,r.oldArg=i.arg,us(r,"update",e,t),r.def&&r.def.componentUpdated&&u.push(r)):(us(r,"bind",e,t),r.def&&r.def.inserted&&l.push(r));if(l.length){var h=function(){for(var n=0;n<l.length;n++)us(l[n],"inserted",e,t)};s?Jt(e,"insert",h):h()}if(u.length&&Jt(e,"postpatch",(function(){for(var n=0;n<u.length;n++)us(u[n],"componentUpdated",e,t)})),!s)for(n in a)c[n]||us(a[n],"unbind",t,t,o)}var as=Object.create(null);function cs(t,e){var n,i,r=Object.create(null);if(!t)return r;for(n=0;n<t.length;n++){if(i=t[n],i.modifiers||(i.modifiers=as),r[ls(i)]=i,e._setupState&&e._setupState.__sfc){var s=i.def||_i(e,"_setupState","v-"+i.name);i.def="function"===typeof s?{bind:s,update:s}:s}i.def=i.def||_i(e.$options,"directives",i.name,!0)}return r}function ls(t){return t.rawName||"".concat(t.name,".").concat(Object.keys(t.modifiers||{}).join("."))}function us(t,e,n,i,r){var s=t.def&&t.def[e];if(s)try{s(n.elm,t,n,i,r)}catch(Go){Ze(Go,n.context,"directive ".concat(t.name," ").concat(e," hook"))}}var hs=[Gr,rs];function ds(t,e){var n=e.componentOptions;if((!o(n)||!1!==n.Ctor.options.inheritAttrs)&&(!s(t.data.attrs)||!s(e.data.attrs))){var i,r,c,l=e.elm,u=t.data.attrs||{},h=e.data.attrs||{};for(i in(o(h.__ob__)||a(h._v_attr_proxy))&&(h=e.data.attrs=$({},h)),h)r=h[i],c=u[i],c!==r&&ps(l,i,r,e.data.pre);for(i in(et||it)&&h.value!==u.value&&ps(l,"value",h.value),u)s(h[i])&&(vr(i)?l.removeAttributeNS(gr,yr(i)):dr(i)||l.removeAttribute(i))}}function ps(t,e,n,i){i||t.tagName.indexOf("-")>-1?fs(t,e,n):mr(e)?br(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n)):dr(e)?t.setAttribute(e,fr(e,n)):vr(e)?br(n)?t.removeAttributeNS(gr,yr(e)):t.setAttributeNS(gr,e,n):fs(t,e,n)}function fs(t,e,n){if(br(n))t.removeAttribute(e);else{if(et&&!nt&&"TEXTAREA"===t.tagName&&"placeholder"===e&&""!==n&&!t.__ieph){var i=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",i)};t.addEventListener("input",i),t.__ieph=!0}t.setAttribute(e,n)}}var ms={create:ds,update:ds};function gs(t,e){var n=e.elm,i=e.data,r=t.data;if(!(s(i.staticClass)&&s(i.class)&&(s(r)||s(r.staticClass)&&s(r.class)))){var a=wr(e),c=n._transitionClasses;o(c)&&(a=Sr(a,Er(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var vs,ys={create:gs,update:gs},bs="__r",ws="__c";function _s(t){if(o(t[bs])){var e=et?"change":"input";t[e]=[].concat(t[bs],t[e]||[]),delete t[bs]}o(t[ws])&&(t.change=[].concat(t[ws],t.change||[]),delete t[ws])}function Cs(t,e,n){var i=vs;return function r(){var s=e.apply(null,arguments);null!==s&&ks(t,r,n,i)}}var Ss=Qe&&!(ot&&Number(ot[1])<=53);function Es(t,e,n,i){if(Ss){var r=Bn,s=e;e=s._wrapper=function(t){if(t.target===t.currentTarget||t.timeStamp>=r||t.timeStamp<=0||t.target.ownerDocument!==document)return s.apply(this,arguments)}}vs.addEventListener(t,e,ct?{capture:n,passive:i}:n)}function ks(t,e,n,i){(i||vs).removeEventListener(t,e._wrapper||e,n)}function Is(t,e){if(!s(t.data.on)||!s(e.data.on)){var n=e.data.on||{},i=t.data.on||{};vs=e.elm||t.elm,_s(n),Yt(n,i,Es,ks,Cs,e.context),vs=void 0}}var Ts,xs={create:Is,update:Is,destroy:function(t){return Is(t,Yr)}};function As(t,e){if(!s(t.data.domProps)||!s(e.data.domProps)){var n,i,r=e.elm,c=t.data.domProps||{},l=e.data.domProps||{};for(n in(o(l.__ob__)||a(l._v_attr_proxy))&&(l=e.data.domProps=$({},l)),c)n in l||(r[n]="");for(n in l){if(i=l[n],"textContent"===n||"innerHTML"===n){if(e.children&&(e.children.length=0),i===c[n])continue;1===r.childNodes.length&&r.removeChild(r.childNodes[0])}if("value"===n&&"PROGRESS"!==r.tagName){r._value=i;var u=s(i)?"":String(i);Ls(r,u)&&(r.value=u)}else if("innerHTML"===n&&Ar(r.tagName)&&s(r.innerHTML)){Ts=Ts||document.createElement("div"),Ts.innerHTML="<svg>".concat(i,"</svg>");var h=Ts.firstChild;while(r.firstChild)r.removeChild(r.firstChild);while(h.firstChild)r.appendChild(h.firstChild)}else if(i!==c[n])try{r[n]=i}catch(Go){}}}}function Ls(t,e){return!t.composing&&("OPTION"===t.tagName||Os(t,e)||Ns(t,e))}function Os(t,e){var n=!0;try{n=document.activeElement!==t}catch(Go){}return n&&t.value!==e}function Ns(t,e){var n=t.value,i=t._vModifiers;if(o(i)){if(i.number)return y(n)!==y(e);if(i.trim)return n.trim()!==e.trim()}return n!==e}var Ds={create:As,update:As},$s=E((function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach((function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}));function Rs(t){var e=Ps(t.style);return t.staticStyle?$(t.staticStyle,e):e}function Ps(t){return Array.isArray(t)?R(t):"string"===typeof t?$s(t):t}function Ms(t,e){var n,i={};if(e){var r=t;while(r.componentInstance)r=r.componentInstance._vnode,r&&r.data&&(n=Rs(r.data))&&$(i,n)}(n=Rs(t.data))&&$(i,n);var s=t;while(s=s.parent)s.data&&(n=Rs(s.data))&&$(i,n);return i}var Vs,Bs=/^--/,Fs=/\s*!important$/,Us=function(t,e,n){if(Bs.test(e))t.style.setProperty(e,n);else if(Fs.test(n))t.style.setProperty(A(e),n.replace(Fs,""),"important");else{var i=zs(e);if(Array.isArray(n))for(var r=0,s=n.length;r<s;r++)t.style[i]=n[r];else t.style[i]=n}},js=["Webkit","Moz","ms"],zs=E((function(t){if(Vs=Vs||document.createElement("div").style,t=I(t),"filter"!==t&&t in Vs)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<js.length;n++){var i=js[n]+e;if(i in Vs)return i}}));function Hs(t,e){var n=e.data,i=t.data;if(!(s(n.staticStyle)&&s(n.style)&&s(i.staticStyle)&&s(i.style))){var r,a,c=e.elm,l=i.staticStyle,u=i.normalizedStyle||i.style||{},h=l||u,d=Ps(e.data.style)||{};e.data.normalizedStyle=o(d.__ob__)?$({},d):d;var p=Ms(e,!0);for(a in h)s(p[a])&&Us(c,a,"");for(a in p)r=p[a],r!==h[a]&&Us(c,a,null==r?"":r)}}var qs={create:Hs,update:Hs},Zs=/\s+/;function Ws(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Zs).forEach((function(e){return t.classList.add(e)})):t.classList.add(e);else{var n=" ".concat(t.getAttribute("class")||""," ");n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Ks(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(Zs).forEach((function(e){return t.classList.remove(e)})):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{var n=" ".concat(t.getAttribute("class")||""," "),i=" "+e+" ";while(n.indexOf(i)>=0)n=n.replace(i," ");n=n.trim(),n?t.setAttribute("class",n):t.removeAttribute("class")}}function Gs(t){if(t){if("object"===typeof t){var e={};return!1!==t.css&&$(e,Xs(t.name||"v")),$(e,t),e}return"string"===typeof t?Xs(t):void 0}}var Xs=E((function(t){return{enterClass:"".concat(t,"-enter"),enterToClass:"".concat(t,"-enter-to"),enterActiveClass:"".concat(t,"-enter-active"),leaveClass:"".concat(t,"-leave"),leaveToClass:"".concat(t,"-leave-to"),leaveActiveClass:"".concat(t,"-leave-active")}})),Qs=J&&!nt,Ys="transition",Js="animation",to="transition",eo="transitionend",no="animation",io="animationend";Qs&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(to="WebkitTransition",eo="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(no="WebkitAnimation",io="webkitAnimationEnd"));var ro=J?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()};function so(t){ro((function(){ro(t)}))}function oo(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Ws(t,e))}function ao(t,e){t._transitionClasses&&_(t._transitionClasses,e),Ks(t,e)}function co(t,e,n){var i=uo(t,e),r=i.type,s=i.timeout,o=i.propCount;if(!r)return n();var a=r===Ys?eo:io,c=0,l=function(){t.removeEventListener(a,u),n()},u=function(e){e.target===t&&++c>=o&&l()};setTimeout((function(){c<o&&l()}),s+1),t.addEventListener(a,u)}var lo=/\b(transform|all)(,|$)/;function uo(t,e){var n,i=window.getComputedStyle(t),r=(i[to+"Delay"]||"").split(", "),s=(i[to+"Duration"]||"").split(", "),o=ho(r,s),a=(i[no+"Delay"]||"").split(", "),c=(i[no+"Duration"]||"").split(", "),l=ho(a,c),u=0,h=0;e===Ys?o>0&&(n=Ys,u=o,h=s.length):e===Js?l>0&&(n=Js,u=l,h=c.length):(u=Math.max(o,l),n=u>0?o>l?Ys:Js:null,h=n?n===Ys?s.length:c.length:0);var d=n===Ys&&lo.test(i[to+"Property"]);return{type:n,timeout:u,propCount:h,hasTransform:d}}function ho(t,e){while(t.length<e.length)t=t.concat(t);return Math.max.apply(null,e.map((function(e,n){return po(e)+po(t[n])})))}function po(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function fo(t,e){var n=t.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var i=Gs(t.data.transition);if(!s(i)&&!o(n._enterCb)&&1===n.nodeType){var r=i.css,a=i.type,c=i.enterClass,l=i.enterToClass,d=i.enterActiveClass,p=i.appearClass,f=i.appearToClass,m=i.appearActiveClass,g=i.beforeEnter,v=i.enter,b=i.afterEnter,w=i.enterCancelled,_=i.beforeAppear,C=i.appear,S=i.afterAppear,E=i.appearCancelled,k=i.duration,I=Cn,T=Cn.$vnode;while(T&&T.parent)I=T.context,T=T.parent;var x=!I._isMounted||!t.isRootInsert;if(!x||C||""===C){var A=x&&p?p:c,L=x&&m?m:d,O=x&&f?f:l,N=x&&_||g,D=x&&u(C)?C:v,$=x&&S||b,R=x&&E||w,P=y(h(k)?k.enter:k);0;var M=!1!==r&&!nt,V=vo(D),B=n._enterCb=U((function(){M&&(ao(n,O),ao(n,L)),B.cancelled?(M&&ao(n,A),R&&R(n)):$&&$(n),n._enterCb=null}));t.data.show||Jt(t,"insert",(function(){var e=n.parentNode,i=e&&e._pending&&e._pending[t.key];i&&i.tag===t.tag&&i.elm._leaveCb&&i.elm._leaveCb(),D&&D(n,B)})),N&&N(n),M&&(oo(n,A),oo(n,L),so((function(){ao(n,A),B.cancelled||(oo(n,O),V||(go(P)?setTimeout(B,P):co(n,a,B)))}))),t.data.show&&(e&&e(),D&&D(n,B)),M||V||B()}}}function mo(t,e){var n=t.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var i=Gs(t.data.transition);if(s(i)||1!==n.nodeType)return e();if(!o(n._leaveCb)){var r=i.css,a=i.type,c=i.leaveClass,l=i.leaveToClass,u=i.leaveActiveClass,d=i.beforeLeave,p=i.leave,f=i.afterLeave,m=i.leaveCancelled,g=i.delayLeave,v=i.duration,b=!1!==r&&!nt,w=vo(p),_=y(h(v)?v.leave:v);0;var C=n._leaveCb=U((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[t.key]=null),b&&(ao(n,l),ao(n,u)),C.cancelled?(b&&ao(n,c),m&&m(n)):(e(),f&&f(n)),n._leaveCb=null}));g?g(S):S()}function S(){C.cancelled||(!t.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[t.key]=t),d&&d(n),b&&(oo(n,c),oo(n,u),so((function(){ao(n,c),C.cancelled||(oo(n,l),w||(go(_)?setTimeout(C,_):co(n,a,C)))}))),p&&p(n,C),b||w||C())}}function go(t){return"number"===typeof t&&!isNaN(t)}function vo(t){if(s(t))return!1;var e=t.fns;return o(e)?vo(Array.isArray(e)?e[0]:e):(t._length||t.length)>1}function yo(t,e){!0!==e.data.show&&fo(e)}var bo=J?{create:yo,activate:yo,remove:function(t,e){!0!==t.data.show?mo(t,e):e()}}:{},wo=[ms,ys,xs,Ds,qs,bo],_o=wo.concat(hs),Co=is({nodeOps:Kr,modules:_o});nt&&document.addEventListener("selectionchange",(function(){var t=document.activeElement;t&&t.vmodel&&Lo(t,"input")}));var So={inserted:function(t,e,n,i){"select"===n.tag?(i.elm&&!i.elm._vOptions?Jt(n,"postpatch",(function(){So.componentUpdated(t,e,n)})):Eo(t,e,n.context),t._vOptions=[].map.call(t.options,To)):("textarea"===n.tag||$r(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("compositionstart",xo),t.addEventListener("compositionend",Ao),t.addEventListener("change",Ao),nt&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){Eo(t,e,n.context);var i=t._vOptions,r=t._vOptions=[].map.call(t.options,To);if(r.some((function(t,e){return!B(t,i[e])}))){var s=t.multiple?e.value.some((function(t){return Io(t,r)})):e.value!==e.oldValue&&Io(e.value,r);s&&Lo(t,"change")}}}};function Eo(t,e,n){ko(t,e,n),(et||it)&&setTimeout((function(){ko(t,e,n)}),0)}function ko(t,e,n){var i=e.value,r=t.multiple;if(!r||Array.isArray(i)){for(var s,o,a=0,c=t.options.length;a<c;a++)if(o=t.options[a],r)s=F(i,To(o))>-1,o.selected!==s&&(o.selected=s);else if(B(To(o),i))return void(t.selectedIndex!==a&&(t.selectedIndex=a));r||(t.selectedIndex=-1)}}function Io(t,e){return e.every((function(e){return!B(e,t)}))}function To(t){return"_value"in t?t._value:t.value}function xo(t){t.target.composing=!0}function Ao(t){t.target.composing&&(t.target.composing=!1,Lo(t.target,"input"))}function Lo(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Oo(t){return!t.componentInstance||t.data&&t.data.transition?t:Oo(t.componentInstance._vnode)}var No={bind:function(t,e,n){var i=e.value;n=Oo(n);var r=n.data&&n.data.transition,s=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;i&&r?(n.data.show=!0,fo(n,(function(){t.style.display=s}))):t.style.display=i?s:"none"},update:function(t,e,n){var i=e.value,r=e.oldValue;if(!i!==!r){n=Oo(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,i?fo(n,(function(){t.style.display=t.__vOriginalDisplay})):mo(n,(function(){t.style.display="none"}))):t.style.display=i?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,i,r){r||(t.style.display=t.__vOriginalDisplay)}},Do={model:So,show:No},$o={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Ro(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Ro(Be(e.children)):t}function Po(t){var e={},n=t.$options;for(var i in n.propsData)e[i]=t[i];var r=n._parentListeners;for(var i in r)e[I(i)]=r[i];return e}function Mo(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function Vo(t){while(t=t.parent)if(t.data.transition)return!0}function Bo(t,e){return e.key===t.key&&e.tag===t.tag}var Fo=function(t){return t.tag||Se(t)},Uo=function(t){return"show"===t.name},jo={name:"transition",props:$o,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(Fo),n.length)){0;var i=this.mode;0;var r=n[0];if(Vo(this.$vnode))return r;var s=Ro(r);if(!s)return r;if(this._leaving)return Mo(t,r);var o="__transition-".concat(this._uid,"-");s.key=null==s.key?s.isComment?o+"comment":o+s.tag:l(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var a=(s.data||(s.data={})).transition=Po(this),c=this._vnode,u=Ro(c);if(s.data.directives&&s.data.directives.some(Uo)&&(s.data.show=!0),u&&u.data&&!Bo(s,u)&&!Se(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var h=u.data.transition=$({},a);if("out-in"===i)return this._leaving=!0,Jt(h,"afterLeave",(function(){e._leaving=!1,e.$forceUpdate()})),Mo(t,r);if("in-out"===i){if(Se(s))return c;var d,p=function(){d()};Jt(a,"afterEnter",p),Jt(a,"enterCancelled",p),Jt(h,"delayLeave",(function(t){d=t}))}}return r}}},zo=$({tag:String,moveClass:String},$o);delete zo.mode;var Ho={props:zo,beforeMount:function(){var t=this,e=this._update;this._update=function(n,i){var r=Sn(t);t.__patch__(t._vnode,t.kept,!1,!0),t._vnode=t.kept,r(),e.call(t,n,i)}},render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),i=this.prevChildren=this.children,r=this.$slots.default||[],s=this.children=[],o=Po(this),a=0;a<r.length;a++){var c=r[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(i){var l=[],u=[];for(a=0;a<i.length;a++){c=i[a];c.data.transition=o,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?l.push(c):u.push(c)}this.kept=t(e,null,l),this.removed=u}return t(e,null,s)},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(qo),t.forEach(Zo),t.forEach(Wo),this._reflow=document.body.offsetHeight,t.forEach((function(t){if(t.data.moved){var n=t.elm,i=n.style;oo(n,e),i.transform=i.WebkitTransform=i.transitionDuration="",n.addEventListener(eo,n._moveCb=function t(i){i&&i.target!==n||i&&!/transform$/.test(i.propertyName)||(n.removeEventListener(eo,t),n._moveCb=null,ao(n,e))})}})))},methods:{hasMove:function(t,e){if(!Qs)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach((function(t){Ks(n,t)})),Ws(n,e),n.style.display="none",this.$el.appendChild(n);var i=uo(n);return this.$el.removeChild(n),this._hasMove=i.hasTransform}}};function qo(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function Zo(t){t.data.newPos=t.elm.getBoundingClientRect()}function Wo(t){var e=t.data.pos,n=t.data.newPos,i=e.left-n.left,r=e.top-n.top;if(i||r){t.data.moved=!0;var s=t.elm.style;s.transform=s.WebkitTransform="translate(".concat(i,"px,").concat(r,"px)"),s.transitionDuration="0s"}}var Ko={Transition:jo,TransitionGroup:Ho};Ki.config.mustUseProp=hr,Ki.config.isReservedTag=Lr,Ki.config.isReservedAttr=lr,Ki.config.getTagNamespace=Or,Ki.config.isUnknownElement=Dr,$(Ki.options.directives,Do),$(Ki.options.components,Ko),Ki.prototype.__patch__=J?Co:P,Ki.prototype.$mount=function(t,e){return t=t&&J?Rr(t):void 0,In(this,t,e)},J&&setTimeout((function(){Z.devtools&&ht&&ht.emit("init",Ki)}),0)},9759:function(t,e,n){n.d(e,{Z:function(){return p}});var i=n(9744),r=n(3381),s=r.Z,o=n(9524),a=n(4552),c=n(2066),l=n(144),u=l.ZP.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),h=n(5530),d=n(8219),p=(0,h.Z)(i.Z,a.Z,u).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(s,{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(o.Z,{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(o.Z,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...i.Z.options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t[`v-alert--border-${this.border}`]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&`$${this.type}`)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||c.Z.options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&(0,d.fK)("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},3625:function(t,e,n){n.d(e,{Z:function(){return v}});var i=n(2732);function r(t,e,n){const{self:i=!1}=e.modifiers||{},r=e.value,s="object"===typeof r&&r.options||{passive:!0},o="function"===typeof r||"handleEvent"in r?r:r.handler,a=i?t:e.arg?document.querySelector(e.arg):window;a&&(a.addEventListener("scroll",o,s),t._onScroll=Object(t._onScroll),t._onScroll[n.context._uid]={handler:o,options:s,target:i?void 0:a})}function s(t,e,n){var i;if(!(null===(i=t._onScroll)||void 0===i?void 0:i[n.context._uid]))return;const{handler:r,options:s,target:o=t}=t._onScroll[n.context._uid];o.removeEventListener("scroll",r,s),delete t._onScroll[n.context._uid]}const o={inserted:r,unbind:s};var a=o,c=n(2404),l=n(8219),u=n(144),h=u.ZP.extend({name:"scrollable",directives:{Scroll:o},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||(0,l.Kd)(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()})))},thresholdMet(){}}}),d=n(8191),p=n(4552),f=n(8131),m=n(5530);const g=(0,m.Z)(i.Z,h,d.Z,p.Z,(0,c.Z)("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var v=g.extend({name:"v-app-bar",directives:{Scroll:a},provide(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return h.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...i.Z.options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},scrollRatio(){const t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight(){if(!this.shrinkOnScroll)return i.Z.options.computed.computedContentHeight.call(this);const t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize(){if(!this.isProminent)return;const t=1.25,e=1.5;return t+(e-t)*this.scrollRatio},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight(){let t=i.Z.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:i.Z.options.computed.isCollapsed.call(this)},isProminent(){return i.Z.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...i.Z.options.computed.styles.call(this),fontSize:(0,f.kb)(this.computedFontSize,"rem"),marginTop:(0,f.kb)(this.computedMarginTop),transform:`translateY(${(0,f.kb)(this.computedTransform)})`,left:(0,f.kb)(this.computedLeft),right:(0,f.kb)(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=i.Z.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render(t){const e=i.Z.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},3726:function(t,e,n){n.d(e,{Z:function(){return s}});var i=n(2066),r=n(5530),s=(0,r.Z)(i.Z).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(t){const e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},9396:function(t,e,n){n.d(e,{Z:function(){return c}});var i=n(5836),r=n(9548),s=n(5357),o=n(8131),a=n(5530),c=(0,a.Z)(i.Z,r.Z,s.Z).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:(0,o.kb)(this.size),minWidth:(0,o.kb)(this.size),width:(0,o.kb)(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},3381:function(t,e,n){n.d(e,{Z:function(){return y}});var i=n(9744),r=n(7006),s=n(5836),o=n(8131),a=s.Z.extend({name:"v-progress-circular",directives:{intersect:r.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,o.kb)(this.calculatedSize),width:(0,o.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,n){this.isVisible=n}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),c=a,l=n(1302),u=n(4552),h=n(8427),d=n(8747),p=n(9367),f=n(2412),m=n(5530),g=n(8219);const v=(0,m.Z)(i.Z,p.Z,d.Z,f.Z,(0,l.d)("btnToggle"),(0,u.d)("inputValue"));var y=v.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...p.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return h.Z.options.computed.computedElevation.call(this)},computedRipple(){var t;const e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!==(t=this.ripple)&&void 0!==t?t:e)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const t=[["flat","text"],["outline","outlined"],["round","rounded"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,g.fK)(t,e,this)}))},methods:{click(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(c,{props:{indeterminate:!0,size:23,width:2}})])}},render(t){const e=[this.genContent(),this.loading&&this.genLoader()],{tag:n,data:i}=this.generateRouteLink(),r=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===n&&(i.attrs.type=this.type,i.attrs.disabled=this.disabled),i.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),t(n,this.disabled?i:r(this.color,i),e)}})},3816:function(t,e,n){n.d(e,{Z:function(){return a}});var i=n(9744),r=n(9799),s=n(9367),o=n(5530),a=(0,o.Z)(r.Z,s.Z,i.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...s.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i.Z.options.computed.classes.call(this)}},styles(){const t={...i.Z.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=r.Z.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render(t){const{tag:e,data:n}=this.generateRouteLink();return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},5255:function(t,e,n){n.d(e,{EB:function(){return c},Qq:function(){return o}});var i=n(3816),r=n(8131);const s=(0,r.Ji)("v-card__actions"),o=(0,r.Ji)("v-card__subtitle"),a=(0,r.Ji)("v-card__text"),c=(0,r.Ji)("v-card__title");i.Z},7690:function(t,e,n){n.d(e,{Z:function(){return r}});var i=n(2066),r=i.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},3240:function(t,e,n){var i=n(5530),r=n(6141),s=n(950);e["Z"]=(0,i.Z)(r.Z,(0,s.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),n={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(n.valid=e(t)))})):n.valid=e(t),n},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const n=this.watchers.find((t=>t._uid===e._uid));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},7024:function(t,e,n){n(1884);var i=n(144),r=n(7559),s=n(8131);const o=["sm","md","lg","xl"],a=(()=>o.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),c=(()=>o.reduce(((t,e)=>(t["offset"+(0,s.jC)(e)]={type:[String,Number],default:null},t)),{}))(),l=(()=>o.reduce(((t,e)=>(t["order"+(0,s.jC)(e)]={type:[String,Number],default:null},t)),{}))(),u={col:Object.keys(a),offset:Object.keys(c),order:Object.keys(l)};function h(t,e,n){let i=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");i+=`-${n}`}return"col"!==t||""!==n&&!0!==n?(i+=`-${n}`,i.toLowerCase()):i.toLowerCase()}}const d=new Map;e["Z"]=i.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...c,order:{type:[String,Number],default:null},...l,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:i,parent:s}){let o="";for(const r in e)o+=String(e[r]);let a=d.get(o);if(!a){let t;for(t in a=[],u)u[t].forEach((n=>{const i=e[n],r=h(t,n,i);r&&a.push(r)}));const n=a.some((t=>t.startsWith("col-")));a.push({col:!n||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),d.set(o,a)}return t(e.tag,(0,r.ZP)(n,{class:a}),i)}})},1819:function(t,e,n){n.d(e,{Z:function(){return o}});n(9027),n(1884);var i=n(144);function r(t){return i.ZP.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:i,children:r}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:s}=i;if(s){i.attrs={};const t=Object.keys(s).filter((t=>{if("slot"===t)return!1;const e=s[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(i.staticClass+=` ${t.join(" ")}`)}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),e(n.tag,i,r)}})}var s=n(7559),o=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:i}){let r;const{attrs:o}=n;return o&&(n.attrs={},r=Object.keys(o).filter((t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,(0,s.ZP)(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),i)}})},7894:function(t,e,n){n(1884);var i=n(144),r=n(7559),s=n(8131);const o=["sm","md","lg","xl"],a=["start","end","center"];function c(t,e){return o.reduce(((n,i)=>(n[t+(0,s.jC)(i)]=e(),n)),{})}const l=t=>[...a,"baseline","stretch"].includes(t),u=c("align",(()=>({type:String,default:null,validator:l}))),h=t=>[...a,"space-between","space-around"].includes(t),d=c("justify",(()=>({type:String,default:null,validator:h}))),p=t=>[...a,"space-between","space-around","stretch"].includes(t),f=c("alignContent",(()=>({type:String,default:null,validator:p}))),m={align:Object.keys(u),justify:Object.keys(d),alignContent:Object.keys(f)},g={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,n){let i=g[t];if(null!=n){if(e){const n=e.replace(t,"");i+=`-${n}`}return i+=`-${n}`,i.toLowerCase()}}const y=new Map;e["Z"]=i.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:l},...u,justify:{type:String,default:null,validator:h},...d,alignContent:{type:String,default:null,validator:p},...f},render(t,{props:e,data:n,children:i}){let s="";for(const r in e)s+=String(e[r]);let o=y.get(s);if(!o){let t;for(t in o=[],m)m[t].forEach((n=>{const i=e[n],r=v(t,n,i);r&&o.push(r)}));o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),y.set(s,o)}return t(e.tag,(0,r.ZP)(n,{staticClass:"row",class:o}),i)}})},2515:function(t,e,n){n(9027);var i=n(8131);e["Z"]=(0,i.Ji)("spacer","div","v-spacer")},9088:function(t,e,n){n.d(e,{Z:function(){return f}});var i,r=n(6141),s=n(5836),o=n(2412),a=n(2066),c=n(8131),l=n(144),u=n(5530);function h(t){return["fas","far","fal","fab","fad","fak"].some((e=>t.includes(e)))}function d(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));const p=(0,u.Z)(r.Z,s.Z,o.Z,a.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),(0,c.RB)(this,t)},getSize(){const t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=(0,c.XP)(t).find((e=>t[e]));return e&&i[e]||(0,c.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const t=this.getSize(),e={...this.getDefaultData(),style:t?{fontSize:t,height:t,width:t}:void 0};return this.applyColors(e),e},applyColors(t){t.class={...t.class,...this.themeClasses},this.setTextColor(this.color,t)},renderFontIcon(t,e){const n=[],i=this.getDefaultData();let r="material-icons";const s=t.indexOf("-"),o=s<=-1;o?n.push(t):(r=t.slice(0,s),h(r)&&(r="")),i.class[r]=!0,i.class[t]=!o;const a=this.getSize();return a&&(i.style={fontSize:a}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,n)},renderSvgIcon(t,e){const n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent(t,e){const n={class:{"v-icon__component":!0}},i=this.getSize();i&&(n.style={fontSize:i,height:i,width:i}),this.applyColors(n);const r=t.component;return n.props=t.props,n.nativeOn=n.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(r,n)])}},render(t){const e=this.getIcon();return"string"===typeof e?d(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});var f=l.ZP.extend({name:"v-icon",$_wrapperFor:p,functional:!0,render(t,{data:e,children:n}){let i="";return e.domProps&&(i=e.domProps.textContent||e.domProps.innerHTML||i,delete e.domProps.textContent,delete e.domProps.innerHTML),t(p,e,i?[i]:n)}})},9524:function(t,e,n){var i=n(9088);e["Z"]=i.Z},1584:function(t,e,n){n.d(e,{Z:function(){return p}});var i=n(7006),r=n(9548),s=n(5530),o=n(8131),a=(0,s.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,o.z9)(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=a,l=n(2066),u=n(7559),h=n(8219);const d="undefined"!==typeof window&&"IntersectionObserver"in window;var p=(0,s.Z)(c,l.Z).extend({name:"v-img",directives:{intersect:i.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const n=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[n]):n}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,n){if(!d||n||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,h.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const n=()=>{const{naturalHeight:i,naturalWidth:r}=t;i||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/i):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(n,e)};n()},genContent(){const t=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){const t=(0,o.z9)(this,"placeholder");if(t){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(t){const e=c.options.render.call(this,t),n=(0,u.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,n,e.children)}})},7970:function(t,e,n){n.d(e,{Z:function(){return r}});var i=n(5439),r=i.Z.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex((e=>e._uid===t._uid));e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},1667:function(t,e,n){n.d(e,{Z:function(){return p}});var i=n(5836),r=n(9367),s=n(1302),o=n(2066),a=n(4552),c=n(293),l=n(8131),u=n(8219),h=n(5530);const d=(0,h.Z)(i.Z,r.Z,o.Z,(0,s.d)("listItemGroup"),(0,a.d)("inputValue"));var p=d.extend().extend({name:"v-list-item",directives:{Ripple:c.Z},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:()=>({proxyClass:"v-list-item--active"}),computed:{classes(){return{"v-list-item":!0,...r.Z.options.computed.classes.call(this),"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine,...this.themeClasses}},isClickable(){return Boolean(r.Z.options.computed.isClickable.call(this)||this.listItemGroup)}},created(){this.$attrs.hasOwnProperty("avatar")&&(0,u.Jk)("avatar",this)},methods:{click(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs(){const t={"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1,...this.$attrs};return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||`list-item-${this._uid}`):this.isInList&&(t.role="listitem")),t},toggle(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render(t){let{tag:e,data:n}=this.generateRouteLink();n.attrs={...n.attrs,...this.genAttrs()},n[this.to?"nativeOn":"on"]={...n[this.to?"nativeOn":"on"],keydown:t=>{this.disabled||(t.keyCode===l.Do.enter&&this.click(t),this.$emit("keydown",t))}},this.inactive&&(e="div"),this.inactive&&this.to&&(n.on=n.nativeOn,delete n.nativeOn);const i=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(e,this.isActive?this.setTextColor(this.color,n):n,i)}})},8208:function(t,e,n){n.d(e,{Z:function(){return s}});var i=n(9396),r=i.Z,s=r.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...r.options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(t){const e=r.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}})},3560:function(t,e,n){var i=n(144);e["Z"]=i.ZP.extend({name:"v-list-item-icon",functional:!0,render(t,{data:e,children:n}){return e.staticClass=`v-list-item__icon ${e.staticClass||""}`.trim(),t("div",e,n)}})},389:function(t,e,n){n.d(e,{km:function(){return x},oZ:function(){return L},V9:function(){return A}});var i=n(8131),r=n(7970),s=n(9524),o=n(1667),a=n(3560),c=n(6141),l=n(8219),u=n(144),h=u.ZP.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&(0,l.Jk)("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}}),d=n(5836),p=n(4552),f=n(950),m=n(293),g=n(6930),v=n(5530);const y=(0,v.Z)(c.Z,h,d.Z,(0,f.f)("list"),p.Z);var b=y.extend().extend({name:"v-list-group",directives:{ripple:m.Z},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy(){this.list&&this.list.unregister(this)},methods:{click(t){this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((()=>this.isActive=!this.isActive)))},genIcon(t){return this.$createElement(s.Z,t)},genAppendIcon(){const t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(a.Z,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader(){return this.$createElement(o.Z,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:{[this.activeClass]:this.isActive},props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.listeners$,click:this.click}},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems(){return this.showLazyContent((()=>[this.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:this.isActive}]},(0,i.z9)(this))]))},genPrependIcon(){const t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(a.Z,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange(t){if(!this.group)return;const e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e},toggle(t){const e=this._uid===t;e&&(this.isBooted=!0),this.$nextTick((()=>this.isActive=e))},matchRoute(t){return null!==t.match(this.group)}},render(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(g.Fx,this.genItems())])}}),w=u.ZP.extend({name:"comparable",props:{valueComparator:{type:Function,default:i.vZ}}}),_=n(7779),C=n(2066);const S=(0,v.Z)(w,_.Z,C.Z).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter(((t,e)=>this.toggleMethod(this.getValue(t,e))))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.valueComparator(this.internalValue,t);const t=this.internalValue;return Array.isArray(t)?e=>t.some((t=>this.valueComparator(t,e))):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&(0,l.Kd)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return void 0===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",(()=>this.onClick(t))),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),n=this.getValue(t,e);this.items.splice(e,1);const i=this.selectedValues.indexOf(n);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((t=>t!==n)):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState(){this.$nextTick((()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)}))},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const n=e.find((t=>!t.disabled));if(!n)return;const i=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,i))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],n=e.slice(),i=n.findIndex((e=>this.valueComparator(e,t)));this.mandatory&&i>-1&&n.length-1<1||null!=this.max&&i<0&&n.length+1>this.max||(i>-1?n.splice(i,1):n.push(t),this.internalValue=n)},updateSingle(t){const e=this.valueComparator(this.internalValue,t);this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),this.$slots.default)}});S.extend({name:"v-item-group",provide(){return{itemGroup:this}}});var E=(0,v.Z)(S,d.Z).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...S.options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...S.options.methods.genData.call(this),attrs:{role:"listbox"}})}}}),k=u.ZP.extend({name:"v-list-item-action",functional:!0,render(t,{data:e,children:n=[]}){e.staticClass=e.staticClass?`v-list-item__action ${e.staticClass}`:"v-list-item__action";const i=n.filter((t=>!1===t.isComment&&" "!==t.text));return i.length>1&&(e.staticClass+=" v-list-item__action--stack"),t("div",e,n)}}),I=n(8208);const T=(0,i.Ji)("v-list-item__action-text","span"),x=(0,i.Ji)("v-list-item__content","div"),A=(0,i.Ji)("v-list-item__title","div"),L=(0,i.Ji)("v-list-item__subtitle","div");r.Z,o.Z,I.Z,a.Z},3102:function(t,e,n){n.d(e,{Z:function(){return r}});var i=n(8191),r=i.Z.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:e,right:n,footer:i,insetFooter:r,bottom:s,left:o}=this.$vuetify.application;return{paddingTop:`${e+t}px`,paddingRight:`${n}px`,paddingBottom:`${i+r+s}px`,paddingLeft:`${o}px`}}},render(t){const e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},5524:function(t,e,n){n.d(e,{Z:function(){return V}});var i=n(1584),r=n(2404),s=n(5836),o=n(5530);function a(t){const e=[];for(let n=0;n<t.length;n++){const i=t[n];i.isActive&&i.isDependent?e.push(i):e.push(...a(i.$children))}return e}var c=(0,o.Z)().extend({name:"dependent",data(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive(t){if(t)return;const e=this.getOpenDependents();for(let n=0;n<e.length;n++)e[n].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?a(this.$children):[]},getOpenDependentElements(){const t=[],e=this.getOpenDependents();for(let n=0;n<e.length;n++)t.push(...e[n].getClickableDependentElements());return t},getClickableDependentElements(){const t=[this.$el];return this.$refs.content&&t.push(this.$refs.content),this.overlay&&t.push(this.overlay.$el),t.push(...this.getOpenDependentElements()),t}}}),l=n(8219),u=n(144),h=u.ZP.extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:t=>!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}},computed:{isMobile(){const{mobile:t,width:e,name:n,mobileBreakpoint:i}=this.$vuetify.breakpoint;if(i===this.mobileBreakpoint)return t;const r=parseInt(this.mobileBreakpoint,10),s=!isNaN(r);return s?e<r:n===this.mobileBreakpoint}},created(){this.$attrs.hasOwnProperty("mobile-break-point")&&(0,l.Rn)("mobile-break-point","mobile-breakpoint",this)}}),d=n(2066),p=n(4552),f=(0,o.Z)(s.Z,d.Z,p.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),m=f,g=n(8131),v=u.ZP.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new m({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=(0,g.KK)(this.$el)),this.overlay.value=!0)})),!0},removeOverlay(t=!0){this.overlay&&((0,g.qh)(this.overlay.$el,"transitionend",(()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("key"in t){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[g.Do.up,g.Do.pageup],n=[g.Do.down,g.Do.pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!n.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll(t,e){if(t.hasAttribute("data-app"))return!1;const n=e.shiftKey||e.deltaX?"x":"y",i="y"===n?e.deltaY:e.deltaX||e.deltaY;let r,s;"y"===n?(r=0===t.scrollTop,s=t.scrollTop+t.clientHeight===t.scrollHeight):(r=0===t.scrollLeft,s=t.scrollLeft+t.clientWidth===t.scrollWidth);const o=i<0,a=i>0;return!(r||!o)||(!(s||!a)||!(!r&&!s)&&this.shouldScroll(t.parentNode,e))},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=(0,g.iZ)(t);if("keydown"===t.type&&e[0]===document.body){const e=this.$refs.dialog,n=window.getSelection().anchorNode;return!(e&&this.hasScrollbar(e)&&this.isInside(n,e))||!this.shouldScroll(e,t)}for(let n=0;n<e.length;n++){const i=e[n];if(i===document)return!0;if(i===document.documentElement)return!0;if(i===this.$refs.content)return!0;if(this.hasScrollbar(i))return!this.shouldScroll(i,t)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):((0,g.lj)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}}),y=n(8191),b=n(3118);function w(){return!0}function _(t,e,n){if(!t||!1===C(t,n))return!1;const i=(0,b.e)(e);if("undefined"!==typeof ShadowRoot&&i instanceof ShadowRoot&&i.host===t.target)return!1;const r=("object"===typeof n.value&&n.value.include||(()=>[]))();return r.push(e),!r.some((e=>e.contains(t.target)))}function C(t,e){const n="object"===typeof e.value&&e.value.closeConditional||w;return n(t)}function S(t,e,n,i){const r="function"===typeof n.value?n.value:n.value.handler;e._clickOutside.lastMousedownWasOutside&&_(t,e,n)&&setTimeout((()=>{C(t,n)&&r&&r(t)}),0)}function E(t,e){const n=(0,b.e)(t);e(document),"undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&e(n)}const k={inserted(t,e,n){const i=i=>S(i,t,e,n),r=n=>{t._clickOutside.lastMousedownWasOutside=_(n,t,e)};E(t,(t=>{t.addEventListener("click",i,!0),t.addEventListener("mousedown",r,!0)})),t._clickOutside||(t._clickOutside={lastMousedownWasOutside:!0}),t._clickOutside[n.context._uid]={onClick:i,onMousedown:r}},unbind(t,e,n){t._clickOutside&&(E(t,(e=>{var i;if(!e||!(null===(i=t._clickOutside)||void 0===i?void 0:i[n.context._uid]))return;const{onClick:r,onMousedown:s}=t._clickOutside[n.context._uid];e.removeEventListener("click",r,!0),e.removeEventListener("mousedown",s,!0)})),delete t._clickOutside[n.context._uid])}};var I=k,T=n(7293);const x=t=>{const{touchstartX:e,touchendX:n,touchstartY:i,touchendY:r}=t,s=.5,o=16;t.offsetX=n-e,t.offsetY=r-i,Math.abs(t.offsetY)<s*Math.abs(t.offsetX)&&(t.left&&n<e-o&&t.left(t),t.right&&n>e+o&&t.right(t)),Math.abs(t.offsetX)<s*Math.abs(t.offsetY)&&(t.up&&r<i-o&&t.up(t),t.down&&r>i+o&&t.down(t))};function A(t,e){const n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}function L(t,e){const n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),x(e)}function O(t,e){const n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}function N(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>A(t,e),touchend:t=>L(t,e),touchmove:t=>O(t,e)}}function D(t,e,n){const i=e.value,r=i.parent?t.parentElement:t,s=i.options||{passive:!0};if(!r)return;const o=N(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[n.context._uid]=o,(0,g.XP)(o).forEach((t=>{r.addEventListener(t,o[t],s)}))}function $(t,e,n){const i=e.value.parent?t.parentElement:t;if(!i||!i._touchHandlers)return;const r=i._touchHandlers[n.context._uid];(0,g.XP)(r).forEach((t=>{i.removeEventListener(t,r[t])})),delete i._touchHandlers[n.context._uid]}const R={inserted:D,unbind:$};var P=R;const M=(0,o.Z)((0,r.Z)("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),s.Z,c,h,v,y.Z,d.Z);var V=M.extend({name:"v-navigation-drawer",directives:{ClickOutside:I,Resize:T.Z,Touch:P},provide(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:()=>({isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}),computed:{applicationProperty(){return this.right?"right":"left"},classes(){return{"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary,...this.themeClasses}},computedMaxHeight(){if(!this.hasApp)return null;const t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop(){if(!this.hasApp)return 0;let t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp(){return this.app&&!this.isMobile&&!this.temporary},isBottom(){return this.bottom&&this.isMobile},isMiniVariant(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile(){return!this.stateless&&!this.permanent&&h.options.computed.isMobile.call(this)},reactsToClick(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles(){const t=this.isBottom?"translateY":"translateX";return{height:(0,g.kb)(this.height),top:this.isBottom?"auto":(0,g.kb)(this.computedTop),maxHeight:null!=this.computedMaxHeight?`calc(100% - ${(0,g.kb)(this.computedMaxHeight)})`:void 0,transform:`${t}(${(0,g.kb)(this.computedTransform,"%")})`,width:(0,g.kb)(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive(t){this.$emit("input",t)},isMobile(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent(t){t&&(this.isActive=!0)},showOverlay(t){t?this.genOverlay():this.removeOverlay()},value(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover(t){this.updateMiniVariant(!t)}},beforeMount(){this.init()},methods:{calculateTouchArea(){const t=this.$el.parentNode;if(!t)return;const e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}},closeConditional(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend(){return this.genPosition("append")},genBackground(){const t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(i.Z,{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives(){const t=[{name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||t.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),t},genListeners(){const t={mouseenter:()=>this.isMouseover=!0,mouseleave:()=>this.isMouseover=!1,transitionend:t=>{if(t.target!==t.currentTarget)return;this.$emit("transitionend",t);const e=document.createEvent("UIEvents");e.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e)}};return this.miniVariant&&(t.click=()=>this.$emit("update:mini-variant",!1)),t},genPosition(t){const e=(0,g.z9)(this,t);return e?this.$createElement("div",{staticClass:`v-navigation-drawer__${t}`},e):e},genPrepend(){return this.genPosition("prepend")},genContent(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;const t=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant(t){this.expandOnHover&&this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render(t){const e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||(0,g.z9)(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}})},5439:function(t,e,n){n.d(e,{Z:function(){return u}});var i=n(6141),r=n(5836),s=n(8427),o=n(9548),a=n(5357),c=n(2066),l=n(5530),u=(0,l.Z)(i.Z,r.Z,s.Z,o.Z,a.Z,c.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},9744:function(t,e,n){var i=n(5439);e["Z"]=i.Z},2912:function(t,e,n){n.d(e,{Z:function(){return s}});var i=n(2066),r=n(5530),s=(0,r.Z)(i.Z).extend({name:"v-subheader",props:{inset:Boolean},render(t){return t("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},2070:function(t,e,n){n.d(e,{Z:function(){return N}});var i=n(9524),r=n(5836),s=n(2066),o=n(5530),a=n(8131),c=(0,o.Z)(s.Z).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(t,e){const{children:n,listeners:i,props:o}=e,c={staticClass:"v-label",class:{"v-label--active":o.value,"v-label--is-disabled":o.disabled,...(0,s.X)(e)},attrs:{for:o.for,"aria-hidden":!o.for},on:i,style:{left:(0,a.kb)(o.left),right:(0,a.kb)(o.right),position:o.absolute?"absolute":"relative"},ref:"label"};return t("label",r.Z.options.methods.setTextColor(o.focused&&o.color,c),n)}}),l=c,u=(0,o.Z)(r.Z,s.Z).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(t,e){return this.$createElement("div",{staticClass:"v-messages__message",key:e},(0,a.z9)(this,"default",{message:t,key:e})||[t])}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),h=u,d=n(6141),p=n(950),f=n(8219);const m=(0,o.Z)(r.Z,(0,p.f)("form"),s.Z);var g=m.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:Boolean,rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",t)}},isDisabled(){return this.disabled||!!this.form&&this.form.disabled},isInteractive(){return!this.isDisabled&&!this.isReadonly},isReadonly(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(t,e){(0,a.vZ)(t,e)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(t){t||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting(){setTimeout((()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()}),0)},hasError(t){this.shouldValidate&&this.$emit("update:error",t)},value(t){this.lazyValue=t}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(t){return t?Array.isArray(t)?t:[t]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation(){this.isResetting=!0},validate(t=!1,e){const n=[];e=e||this.internalValue,t&&(this.hasInput=this.hasFocused=!0);for(let i=0;i<this.rules.length;i++){const t=this.rules[i],r="function"===typeof t?t(e):t;!1===r||"string"===typeof r?n.push(r||""):"boolean"!==typeof r&&(0,f.N6)(`Rules should return a string or boolean, received '${typeof r}' instead`,this)}return this.errorBucket=n,this.valid=0===n.length,this.valid}}}),v=n(7559);const y=(0,o.Z)(d.Z,g);var b=y.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense,"v-input--hide-spin-buttons":this.hideSpinButtons,...this.themeClasses}},computedId(){return this.id||`input-${this._uid}`},hasDetails(){return this.messagesToDisplay.length>0},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit(this.$_modelEvent,t)}},isDirty(){return!!this.lazyValue},isLabelActive(){return this.isDirty},messagesToDisplay(){return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((t=>{if("string"===typeof t)return t;const e=t(this.internalValue);return"string"===typeof e?e:""})).filter((t=>""!==t)):[]},showDetails(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value(t){this.lazyValue=t}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control",attrs:{title:this.attrs$.title}},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(t,e,n={}){const r=this[`${t}Icon`],s=`click:${(0,a.GL)(t)}`,o=!(!this.listeners$[s]&&!e),c=(0,v.ZP)({attrs:{"aria-label":o?(0,a.GL)(t).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light},on:o?{click:t=>{t.preventDefault(),t.stopPropagation(),this.$emit(s,t),e&&e(t)},mouseup:t=>{t.preventDefault(),t.stopPropagation()}}:void 0},n);return this.$createElement("div",{staticClass:"v-input__icon",class:t?`v-input__icon--${(0,a.GL)(t)}`:void 0},[this.$createElement(i.Z,c,r)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:(0,a.kb)(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(l,{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){return this.showDetails?this.$createElement(h,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:t=>(0,a.z9)(this,"message",t)}}):null},genSlot(t,e,n){if(!n.length)return null;const i=`${t}-${e}`;return this.$createElement("div",{staticClass:`v-input__${i}`,ref:i},n)},genPrependSlot(){const t=[];return this.$slots.prepend?t.push(this.$slots.prepend):this.prependIcon&&t.push(this.genIcon("prepend")),this.genSlot("prepend","outer",t)},genAppendSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","outer",t)},onClick(t){this.$emit("click",t)},onMouseDown(t){this.hasMouseDown=!0,this.$emit("mousedown",t)},onMouseUp(t){this.hasMouseDown=!1,this.$emit("mouseup",t)}},render(t){return t("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}}),w=b,_=(0,o.Z)(s.Z).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render(t,e){const{props:n}=e,i=parseInt(n.max,10),r=parseInt(n.value,10),o=i?`${r} / ${i}`:String(n.value),a=i&&r>i;return t("div",{staticClass:"v-counter",class:{"error--text":a,...(0,s.X)(e)}},o)}}),C=_,S=n(7006),E=n(144);function k(t){return E.ZP.extend({name:"intersectable",data:()=>({isIntersecting:!1}),mounted(){S.Z.inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed(){S.Z.unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve(e,n,i){if(this.isIntersecting=i,i)for(let r=0,s=t.onVisible.length;r<s;r++){const e=this[t.onVisible[r]];"function"!==typeof e?(0,f.Kd)(t.onVisible[r]+" method is not available on the instance but referenced in intersectable mixin options"):e()}}}})}var I=n(9799),T=n(7293),x=n(293),A=n(3118);const L=(0,o.Z)(w,k({onVisible:["onResize","tryAutofocus"]}),I.Z),O=["color","file","time","date","datetime-local","week","month"];var N=L.extend().extend({name:"v-text-field",directives:{resize:T.Z,ripple:x.Z},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,persistentPlaceholder:Boolean,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:()=>({badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}),computed:{classes(){return{...w.options.computed.classes.call(this),"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped}},computedColor(){const t=g.options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":t},computedCounterValue(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):[...(this.internalValue||"").toString()].length},hasCounter(){return!1!==this.counter&&null!=this.counter},hasDetails(){return w.options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("input",this.lazyValue)}},isDirty(){var t;return(null===(t=this.lazyValue)||void 0===t?void 0:t.toString().length)>0||this.badInput},isEnclosed(){return this.filled||this.isSolo||this.outlined},isLabelActive(){return this.isDirty||O.includes(this.type)},isSingle(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo(){return this.solo||this.soloInverted},labelPosition(){let t=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(t-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:t,right:"auto"}:{left:"auto",right:t}},showLabel(){return this.hasLabel&&!(this.isSingle&&this.labelValue)},labelValue(){return this.isFocused||this.isLabelActive||this.persistentPlaceholder}},watch:{outlined:"setLabelWidth",label(){this.$nextTick(this.setLabelWidth)},prefix(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value(t){this.lazyValue=t}},created(){this.$attrs.hasOwnProperty("box")&&(0,f.fK)("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&(0,f.fK)("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&(0,f.Kd)("shaped should be used with either filled or outlined",this)},mounted(){this.$watch((()=>this.labelValue),this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame((()=>{this.isBooted=!0,requestAnimationFrame((()=>{this.isIntersecting||this.onResize()}))}))},methods:{focus(){this.onFocus()},blur(t){window.requestAnimationFrame((()=>{this.$refs.input&&this.$refs.input.blur()}))},clearableCallback(){this.$refs.input&&this.$refs.input.focus(),this.$nextTick((()=>this.internalValue=null))},genAppendSlot(){const t=[];return this.$slots["append-outer"]?t.push(this.$slots["append-outer"]):this.appendOuterIcon&&t.push(this.genIcon("appendOuter")),this.genSlot("append","outer",t)},genPrependInnerSlot(){const t=[];return this.$slots["prepend-inner"]?t.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&t.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",t)},genIconSlot(){const t=[];return this.$slots.append?t.push(this.$slots.append):this.appendIcon&&t.push(this.genIcon("append")),this.genSlot("append","inner",t)},genInputSlot(){const t=w.options.methods.genInputSlot.call(this),e=this.genPrependInnerSlot();return e&&(t.children=t.children||[],t.children.unshift(e)),t},genClearIcon(){return this.clearable?this.isDirty?this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback)]):this.genSlot("append","inner",[this.$createElement("div")]):null},genCounter(){var t,e,n;if(!this.hasCounter)return null;const i=!0===this.counter?this.attrs$.maxlength:this.counter,r={dark:this.dark,light:this.light,max:i,value:this.computedCounterValue};return null!==(n=null===(e=(t=this.$scopedSlots).counter)||void 0===e?void 0:e.call(t,{props:r}))&&void 0!==n?n:this.$createElement(C,{props:r})},genControl(){return w.options.methods.genControl.call(this)},genDefaultSlot(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel(){if(!this.showLabel)return null;const t={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(l,t,this.$slots.label||this.label)},genLegend(){const t=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,e=this.$createElement("span",{domProps:{innerHTML:"&#8203;"},staticClass:"notranslate"});return this.$createElement("legend",{style:{width:this.isSingle?void 0:(0,a.kb)(t)}},[e])},genInput(){const t=Object.assign({},this.listeners$);delete t.change;const{title:e,...n}=this.attrs$;return this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:{...n,autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.persistentPlaceholder||this.isFocused||!this.hasLabel?this.placeholder:void 0,readonly:this.isReadonly,type:this.type},on:Object.assign(t,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages(){if(!this.showDetails)return null;const t=w.options.methods.genMessages.call(this),e=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[t,e])},genTextFieldSlot(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix(t){return this.$createElement("div",{class:`v-text-field__${t}`,ref:t},this[t])},onBlur(t){this.isFocused=!1,t&&this.$nextTick((()=>this.$emit("blur",t)))},onClick(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus(t){if(!this.$refs.input)return;const e=(0,A.e)(this.$el);return e?e.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,t&&this.$emit("focus",t))):void 0},onInput(t){const e=t.target;this.internalValue=e.value,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){t.keyCode===a.Do.enter&&this.lazyValue!==this.initialValue&&(this.initialValue=this.lazyValue,this.$emit("change",this.initialValue)),this.$emit("keydown",t)},onMouseDown(t){t.target!==this.$refs.input&&(t.preventDefault(),t.stopPropagation()),w.options.methods.onMouseDown.call(this,t)},onMouseUp(t){this.hasMouseDown&&this.focus(),w.options.methods.onMouseUp.call(this,t)},setLabelWidth(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus(){if(!this.autofocus||"undefined"===typeof document||!this.$refs.input)return!1;const t=(0,A.e)(this.$el);return!(!t||t.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}})},2379:function(t,e,n){n.d(e,{Z:function(){return o}});var i=n(2070),r=n(5530);const s=(0,r.Z)(i.Z);var o=s.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...i.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick((()=>{var e;t?this.calculateInputHeight():null===(e=this.$refs.input)||void 0===e||e.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"},genInput(){const t=i.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){i.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},2732:function(t,e,n){n.d(e,{Z:function(){return a}});var i=n(5439),r=n(1584),s=n(8131),o=n(8219),a=i.Z.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...i.Z.options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:(0,s.kb)(this.computedHeight)}}},created(){const t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,o.fK)(t,e,this)}))},methods:{genBackground(){const t={height:(0,s.kb)(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(r.Z,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:(0,s.kb)(this.computedContentHeight)}},(0,s.z9)(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:(0,s.kb)(this.extensionHeight)}},(0,s.z9)(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],n=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,n,e)}})},3845:function(t,e,n){n.d(e,{qW:function(){return s}});var i=n(2732),r=n(8131);const s=(0,r.Ji)("v-toolbar__title"),o=(0,r.Ji)("v-toolbar__items");i.Z},6930:function(t,e,n){n.d(e,{Fx:function(){return h},Z5:function(){return l},Qn:function(){return u}});var i=n(7559);function r(t=[],...e){return Array().concat(t,...e)}function s(t,e="top center 0",n){return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render(e,n){const s="transition"+(n.props.group?"-group":""),o={props:{name:t,mode:n.props.mode},on:{beforeEnter(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(o.on.leave=r(o.on.leave,(t=>{const{offsetTop:e,offsetLeft:n,offsetWidth:i,offsetHeight:r}=t;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=n+"px",t.style.width=i+"px",t.style.height=r+"px"})),o.on.afterLeave=r(o.on.afterLeave,(t=>{if(t&&t._transitionInitialStyles){const{position:e,top:n,left:i,width:r,height:s}=t._transitionInitialStyles;delete t._transitionInitialStyles,t.style.position=e||"",t.style.top=n||"",t.style.left=i||"",t.style.width=r||"",t.style.height=s||""}}))),n.props.hideOnLeave&&(o.on.leave=r(o.on.leave,(t=>{t.style.setProperty("display","none","important")}))),e(s,(0,i.ZP)(n.data,o),n.children)}}}function o(t,e,n="in-out"){return{name:t,functional:!0,props:{mode:{type:String,default:n}},render(n,r){return n("transition",(0,i.ZP)(r.data,{props:{name:t},on:e}),r.children)}}}var a=n(8131);function c(t="",e=!1){const n=e?"width":"height",i=`offset${(0,a.jC)(n)}`;return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[n]:t.style[n]}},enter(e){const r=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";const s=`${e[i]}px`;e.style[n]="0",e.offsetHeight,e.style.transition=r.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((()=>{e.style[n]=s}))},afterEnter:s,enterCancelled:s,leave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[n]:t.style[n]},t.style.overflow="hidden",t.style[n]=`${t[i]}px`,t.offsetHeight,requestAnimationFrame((()=>t.style[n]="0"))},afterLeave:r,leaveCancelled:r};function r(e){t&&e._parent&&e._parent.classList.remove(t),s(e)}function s(t){const e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}}s("carousel-transition"),s("carousel-reverse-transition"),s("tab-transition"),s("tab-reverse-transition"),s("menu-transition"),s("fab-transition","center center","out-in"),s("dialog-transition"),s("dialog-bottom-transition"),s("dialog-top-transition");const l=s("fade-transition"),u=(s("scale-transition"),s("scroll-x-transition"),s("scroll-x-reverse-transition"),s("scroll-y-transition"),s("scroll-y-reverse-transition"),s("slide-x-transition")),h=(s("slide-x-reverse-transition"),s("slide-y-transition"),s("slide-y-reverse-transition"),o("expand-transition",c()));o("expand-x-transition",c("",!0))},7006:function(t,e,n){function i(t,e,n){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const i=e.modifiers||{},s=e.value,{handler:o,options:a}="object"===typeof s?s:{handler:s,options:{}},c=new IntersectionObserver(((s=[],a)=>{var c;const l=null===(c=t._observe)||void 0===c?void 0:c[n.context._uid];if(!l)return;const u=s.some((t=>t.isIntersecting));!o||i.quiet&&!l.init||i.once&&!u&&!l.init||o(s,a,u),u&&i.once?r(t,e,n):l.init=!0}),a);t._observe=Object(t._observe),t._observe[n.context._uid]={init:!1,observer:c},c.observe(t)}function r(t,e,n){var i;const r=null===(i=t._observe)||void 0===i?void 0:i[n.context._uid];r&&(r.observer.unobserve(t),delete t._observe[n.context._uid])}const s={inserted:i,unbind:r};e["Z"]=s},7293:function(t,e,n){function i(t,e,n){const i=e.value,r=e.options||{passive:!0};window.addEventListener("resize",i,r),t._onResize=Object(t._onResize),t._onResize[n.context._uid]={callback:i,options:r},e.modifiers&&e.modifiers.quiet||i()}function r(t,e,n){var i;if(!(null===(i=t._onResize)||void 0===i?void 0:i[n.context._uid]))return;const{callback:r,options:s}=t._onResize[n.context._uid];window.removeEventListener("resize",r,s),delete t._onResize[n.context._uid]}const s={inserted:i,unbind:r};e["Z"]=s},293:function(t,e,n){n.d(e,{Z:function(){return E}});var i=n(8131);const r=80;function s(t,e){t.style.transform=e,t.style.webkitTransform=e}function o(t){return"TouchEvent"===t.constructor.name}function a(t){return"KeyboardEvent"===t.constructor.name}const c=(t,e,n={})=>{let i=0,r=0;if(!a(t)){const n=e.getBoundingClientRect(),s=o(t)?t.touches[t.touches.length-1]:t;i=s.clientX-n.left,r=s.clientY-n.top}let s=0,c=.3;e._ripple&&e._ripple.circle?(c=.15,s=e.clientWidth/2,s=n.center?s:s+Math.sqrt((i-s)**2+(r-s)**2)/4):s=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const l=(e.clientWidth-2*s)/2+"px",u=(e.clientHeight-2*s)/2+"px",h=n.center?l:i-s+"px",d=n.center?u:r-s+"px";return{radius:s,scale:c,x:h,y:d,centerX:l,centerY:u}},l={show(t,e,n={}){if(!e._ripple||!e._ripple.enabled)return;const i=document.createElement("span"),r=document.createElement("span");i.appendChild(r),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:o,scale:a,x:l,y:u,centerX:h,centerY:d}=c(t,e,n),p=2*o+"px";r.className="v-ripple__animation",r.style.width=p,r.style.height=p,e.appendChild(i);const f=window.getComputedStyle(e);f&&"static"===f.position&&(e.style.position="relative",e.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),s(r,`translate(${l}, ${u}) scale3d(${a},${a},${a})`),r.dataset.activated=String(performance.now()),setTimeout((()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),s(r,`translate(${h}, ${d}) scale3d(1,1,1)`)}),0)},hide(t){if(!t||!t._ripple||!t._ripple.enabled)return;const e=t.getElementsByClassName("v-ripple__animation");if(0===e.length)return;const n=e[e.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),r=Math.max(250-i,0);setTimeout((()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((()=>{const e=t.getElementsByClassName("v-ripple__animation");1===e.length&&t.dataset.previousPosition&&(t.style.position=t.dataset.previousPosition,delete t.dataset.previousPosition),n.parentNode&&t.removeChild(n.parentNode)}),300)}),r)}};function u(t){return"undefined"===typeof t||!!t}function h(t){const e={},n=t.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!t.rippleStop){if(t.rippleStop=!0,o(t))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(e.center=n._ripple.centered||a(t),n._ripple.class&&(e.class=n._ripple.class),o(t)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{l.show(t,n,e)},n._ripple.showTimer=window.setTimeout((()=>{n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),r)}else l.show(t,n,e)}}function d(t){const e=t.currentTarget;if(e&&e._ripple){if(window.clearTimeout(e._ripple.showTimer),"touchend"===t.type&&e._ripple.showTimerCommit)return e._ripple.showTimerCommit(),e._ripple.showTimerCommit=null,void(e._ripple.showTimer=setTimeout((()=>{d(t)})));window.setTimeout((()=>{e._ripple&&(e._ripple.touched=!1)})),l.hide(e)}}function p(t){const e=t.currentTarget;e&&e._ripple&&(e._ripple.showTimerCommit&&(e._ripple.showTimerCommit=null),window.clearTimeout(e._ripple.showTimer))}let f=!1;function m(t){f||t.keyCode!==i.Do.enter&&t.keyCode!==i.Do.space||(f=!0,h(t))}function g(t){f=!1,d(t)}function v(t){!0===f&&(f=!1,d(t))}function y(t,e,n){const i=u(e.value);i||l.hide(t),t._ripple=t._ripple||{},t._ripple.enabled=i;const r=e.value||{};r.center&&(t._ripple.centered=!0),r.class&&(t._ripple.class=e.value.class),r.circle&&(t._ripple.circle=r.circle),i&&!n?(t.addEventListener("touchstart",h,{passive:!0}),t.addEventListener("touchend",d,{passive:!0}),t.addEventListener("touchmove",p,{passive:!0}),t.addEventListener("touchcancel",d),t.addEventListener("mousedown",h),t.addEventListener("mouseup",d),t.addEventListener("mouseleave",d),t.addEventListener("keydown",m),t.addEventListener("keyup",g),t.addEventListener("blur",v),t.addEventListener("dragstart",d,{passive:!0})):!i&&n&&b(t)}function b(t){t.removeEventListener("mousedown",h),t.removeEventListener("touchstart",h),t.removeEventListener("touchend",d),t.removeEventListener("touchmove",p),t.removeEventListener("touchcancel",d),t.removeEventListener("mouseup",d),t.removeEventListener("mouseleave",d),t.removeEventListener("keydown",m),t.removeEventListener("keyup",g),t.removeEventListener("dragstart",d),t.removeEventListener("blur",v)}function w(t,e,n){y(t,e,!1)}function _(t){delete t._ripple,b(t)}function C(t,e){if(e.value===e.oldValue)return;const n=u(e.oldValue);y(t,e,n)}const S={bind:w,unbind:_,update:C};var E=S},154:function(t,e,n){n.d(e,{Z:function(){return bt}});var i={};n.r(i),n.d(i,{easeInCubic:function(){return y},easeInOutCubic:function(){return w},easeInOutQuad:function(){return v},easeInOutQuart:function(){return S},easeInOutQuint:function(){return I},easeInQuad:function(){return m},easeInQuart:function(){return _},easeInQuint:function(){return E},easeOutCubic:function(){return b},easeOutQuad:function(){return g},easeOutQuart:function(){return C},easeOutQuint:function(){return k},linear:function(){return f}});var r=n(144),s=n(8219);function o(t,e={}){if(o.installed)return;o.installed=!0,r.ZP!==t&&(0,s.N6)("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");const n=e.components||{},i=e.directives||{};for(const r in i){const e=i[r];t.directive(r,e)}(function e(n){if(n){for(const i in n){const r=n[i];r&&!e(r.$_vuetify_subcomponents)&&t.component(i,r)}return!0}return!1})(n),t.$_vuetify_installed||(t.$_vuetify_installed=!0,t.mixin({beforeCreate(){const e=this.$options;e.vuetify?(e.vuetify.init(this,this.$ssrContext),this.$vuetify=t.observable(e.vuetify.framework)):this.$vuetify=e.parent&&e.parent.$vuetify||this},beforeMount(){this.$options.vuetify&&this.$el&&this.$el.hasAttribute("data-server-rendered")&&(this.$vuetify.isHydrating=!0,this.$vuetify.breakpoint.update(!0))},mounted(){this.$options.vuetify&&this.$vuetify.isHydrating&&(this.$vuetify.isHydrating=!1,this.$vuetify.breakpoint.update())}}))}var a={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{wrapper:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Current Page, Page {0}"}},rating:{ariaLabel:{icon:"Rating {0} of {1}"}}};const c={breakpoint:{mobileBreakpoint:1264,scrollBarWidth:16,thresholds:{xs:600,sm:960,md:1280,lg:1920}},icons:{iconfont:"mdi",values:{}},lang:{current:"en",locales:{en:a},t:void 0},rtl:!1,theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0,variations:!0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}};var l=n(8131);class u{constructor(){this.framework={}}init(t,e){}}class h extends u{constructor(t,e){super();const n=(0,l.Ee)({},c),{userPreset:i}=e,{preset:r={},...o}=i;null!=r.preset&&(0,s.Kd)("Global presets do not support the **preset** option, it can be safely omitted"),e.preset=(0,l.Ee)((0,l.Ee)(n,r),o)}}h.property="presets";class d extends u{constructor(){super(...arguments),this.bar=0,this.top=0,this.left=0,this.insetFooter=0,this.right=0,this.bottom=0,this.footer=0,this.application={bar:{},top:{},left:{},insetFooter:{},right:{},bottom:{},footer:{}}}register(t,e,n){this.application[e][t]=n,this.update(e)}unregister(t,e){null!=this.application[e][t]&&(delete this.application[e][t],this.update(e))}update(t){this[t]=Object.values(this.application[t]).reduce(((t,e)=>t+e),0)}}d.property="application";class p extends u{constructor(t){super(),this.xs=!1,this.sm=!1,this.md=!1,this.lg=!1,this.xl=!1,this.xsOnly=!1,this.smOnly=!1,this.smAndDown=!1,this.smAndUp=!1,this.mdOnly=!1,this.mdAndDown=!1,this.mdAndUp=!1,this.lgOnly=!1,this.lgAndDown=!1,this.lgAndUp=!1,this.xlOnly=!1,this.name="xs",this.height=0,this.width=0,this.mobile=!0,this.resizeTimeout=0;const{mobileBreakpoint:e,scrollBarWidth:n,thresholds:i}=t[p.property];this.mobileBreakpoint=e,this.scrollBarWidth=n,this.thresholds=i}init(){this.update(),"undefined"!==typeof window&&window.addEventListener("resize",this.onResize.bind(this),{passive:!0})}update(t=!1){const e=t?0:this.getClientHeight(),n=t?0:this.getClientWidth(),i=n<this.thresholds.xs,r=n<this.thresholds.sm&&!i,s=n<this.thresholds.md-this.scrollBarWidth&&!(r||i),o=n<this.thresholds.lg-this.scrollBarWidth&&!(s||r||i),a=n>=this.thresholds.lg-this.scrollBarWidth;switch(this.height=e,this.width=n,this.xs=i,this.sm=r,this.md=s,this.lg=o,this.xl=a,this.xsOnly=i,this.smOnly=r,this.smAndDown=(i||r)&&!(s||o||a),this.smAndUp=!i&&(r||s||o||a),this.mdOnly=s,this.mdAndDown=(i||r||s)&&!(o||a),this.mdAndUp=!(i||r)&&(s||o||a),this.lgOnly=o,this.lgAndDown=(i||r||s||o)&&!a,this.lgAndUp=!(i||r||s)&&(o||a),this.xlOnly=a,!0){case i:this.name="xs";break;case r:this.name="sm";break;case s:this.name="md";break;case o:this.name="lg";break;default:this.name="xl";break}if("number"===typeof this.mobileBreakpoint)return void(this.mobile=n<parseInt(this.mobileBreakpoint,10));const c={xs:0,sm:1,md:2,lg:3,xl:4},l=c[this.name],u=c[this.mobileBreakpoint];this.mobile=l<=u}onResize(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.update.bind(this),200)}getClientWidth(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}getClientHeight(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}p.property="breakpoint";const f=t=>t,m=t=>t**2,g=t=>t*(2-t),v=t=>t<.5?2*t**2:(4-2*t)*t-1,y=t=>t**3,b=t=>--t**3+1,w=t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,_=t=>t**4,C=t=>1- --t**4,S=t=>t<.5?8*t*t*t*t:1-8*--t*t*t*t,E=t=>t**5,k=t=>1+--t**5,I=t=>t<.5?16*t**5:1+16*--t**5;function T(t){if("number"===typeof t)return t;let e=L(t);if(!e)throw"string"===typeof t?new Error(`Target element "${t}" not found.`):new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${A(t)} instead.`);let n=0;while(e)n+=e.offsetTop,e=e.offsetParent;return n}function x(t){const e=L(t);if(e)return e;throw"string"===typeof t?new Error(`Container element "${t}" not found.`):new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${A(t)} instead.`)}function A(t){return null==t?t:t.constructor.name}function L(t){return"string"===typeof t?document.querySelector(t):t&&t._isVue?t.$el:t instanceof HTMLElement?t:null}function O(t,e={}){const n={container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0,...e},r=x(n.container);if(n.appOffset&&O.framework.application){const t=r.classList.contains("v-navigation-drawer"),e=r.classList.contains("v-navigation-drawer--clipped"),{bar:i,top:s}=O.framework.application;n.offset+=i,t&&!e||(n.offset+=s)}const s=performance.now();let o;o="number"===typeof t?T(t)-n.offset:T(t)-T(r)-n.offset;const a=r.scrollTop;if(o===a)return Promise.resolve(o);const c="function"===typeof n.easing?n.easing:i[n.easing];if(!c)throw new TypeError(`Easing function "${n.easing}" not found.`);return new Promise((t=>requestAnimationFrame((function e(i){const l=i-s,u=Math.abs(n.duration?Math.min(l/n.duration,1):1);r.scrollTop=Math.floor(a+(o-a)*c(u));const h=r===document.body?document.documentElement.clientHeight:r.clientHeight,d=h+r.scrollTop>=r.scrollHeight;if(1===u||o>r.scrollTop&&d)return t(o);requestAnimationFrame(e)}))))}O.framework={},O.init=()=>{};class N extends u{constructor(){return super(),O}}N.property="goTo";const D={complete:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",cancel:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",delete:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",clear:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",success:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",info:"M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",warning:"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",error:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",prev:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",next:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",checkboxOn:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",checkboxOff:"M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",checkboxIndeterminate:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",delimiter:"M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",sort:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",expand:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",menu:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",subgroup:"M7,10L12,15L17,10H7Z",dropdown:"M7,10L12,15L17,10H7Z",radioOn:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",radioOff:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",ratingEmpty:"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",ratingFull:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",ratingHalf:"M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",loading:"M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",first:"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",last:"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",unfold:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",file:"M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",plus:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",minus:"M19,13H5V11H19V13Z"};var $=D;const R={complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"};var P=R;const M={complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"};var V=M;const B={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half",loading:"fas fa-sync",first:"fas fa-step-backward",last:"fas fa-step-forward",unfold:"fas fa-arrows-alt-v",file:"fas fa-paperclip",plus:"fas fa-plus",minus:"fas fa-minus"};var F=B;const U={complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle-o",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o",loading:"fa fa-refresh",first:"fa fa-step-backward",last:"fa fa-step-forward",unfold:"fa fa-angle-double-down",file:"fa fa-paperclip",plus:"fa fa-plus",minus:"fa fa-minus"};var j=U;function z(t,e){const n={};for(const i in e)n[i]={component:t,props:{icon:e[i].split(" fa-")}};return n}var H=z("font-awesome-icon",F),q=Object.freeze({mdiSvg:$,md:P,mdi:V,fa:F,fa4:j,faSvg:H});class Z extends u{constructor(t){super();const{iconfont:e,values:n,component:i}=t[Z.property];this.component=i,this.iconfont=e,this.values=(0,l.Ee)(q[e],n)}}Z.property="icons";const W="$vuetify.",K=Symbol("Lang fallback");function G(t,e,n=!1,i){const r=e.replace(W,"");let o=(0,l.vO)(t,r,K);return o===K&&(n?((0,s.N6)(`Translation key "${r}" not found in fallback`),o=e):((0,s.Kd)(`Translation key "${r}" not found, falling back to default`),o=G(i,e,!0,i))),o}class X extends u{constructor(t){super(),this.defaultLocale="en";const{current:e,locales:n,t:i}=t[X.property];this.current=e,this.locales=n,this.translator=i||this.defaultTranslator}currentLocale(t){const e=this.locales[this.current],n=this.locales[this.defaultLocale];return G(e,t,!1,n)}t(t,...e){return t.startsWith(W)?this.translator(t,...e):this.replace(t,e)}defaultTranslator(t,...e){return this.replace(this.currentLocale(t),e)}replace(t,e){return t.replace(/\{(\d+)\}/g,((t,n)=>String(e[+n])))}}X.property="lang";var Q=n(4771);const Y=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],J=t=>t<=.0031308?12.92*t:1.055*t**(1/2.4)-.055,tt=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],et=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function nt(t){const e=Array(3),n=J,i=Y;for(let r=0;r<3;++r)e[r]=Math.round(255*(0,l.uZ)(n(i[r][0]*t[0]+i[r][1]*t[1]+i[r][2]*t[2])));return(e[0]<<16)+(e[1]<<8)+(e[2]<<0)}function it(t){const e=[0,0,0],n=et,i=tt,r=n((t>>16&255)/255),s=n((t>>8&255)/255),o=n((t>>0&255)/255);for(let a=0;a<3;++a)e[a]=i[a][0]*r+i[a][1]*s+i[a][2]*o;return e}const rt=.20689655172413793,st=t=>t>rt**3?Math.cbrt(t):t/(3*rt**2)+4/29,ot=t=>t>rt?t**3:3*rt**2*(t-4/29);function at(t){const e=st,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function ct(t){const e=ot,n=(t[0]+16)/116;return[.95047*e(n+t[1]/500),e(n),1.08883*e(n-t[2]/200)]}function lt(t,e=!1,n=!0){const{anchor:i,...r}=t,s=Object.keys(r),o={};for(let a=0;a<s.length;++a){const i=s[a],r=t[i];null!=r&&(n?e?("base"===i||i.startsWith("lighten")||i.startsWith("darken"))&&(o[i]=(0,Q.hq)(r)):o[i]="object"===typeof r?lt(r,!0,n):mt(i,(0,Q.jx)(r)):o[i]={base:(0,Q.I4)((0,Q.jx)(r))})}return e||(o.anchor=i||o.base||o.primary.base),o}const ut=(t,e)=>`\n.v-application .${t} {\n  background-color: ${e} !important;\n  border-color: ${e} !important;\n}\n.v-application .${t}--text {\n  color: ${e} !important;\n  caret-color: ${e} !important;\n}`,ht=(t,e,n)=>{const[i,r]=e.split(/(\d)/,2);return`\n.v-application .${t}.${i}-${r} {\n  background-color: ${n} !important;\n  border-color: ${n} !important;\n}\n.v-application .${t}--text.text--${i}-${r} {\n  color: ${n} !important;\n  caret-color: ${n} !important;\n}`},dt=(t,e="base")=>`--v-${t}-${e}`,pt=(t,e="base")=>`var(${dt(t,e)})`;function ft(t,e=!1){const{anchor:n,...i}=t,r=Object.keys(i);if(!r.length)return"";let s="",o="";const a=e?pt("anchor"):n;o+=`.v-application a { color: ${a}; }`,e&&(s+=`  ${dt("anchor")}: ${n};\n`);for(let c=0;c<r.length;++c){const n=r[c],i=t[n];o+=ut(n,e?pt(n):i.base),e&&(s+=`  ${dt(n)}: ${i.base};\n`);const a=(0,l.XP)(i);for(let t=0;t<a.length;++t){const r=a[t],c=i[r];"base"!==r&&(o+=ht(n,r,e?pt(n,r):c),e&&(s+=`  ${dt(n,r)}: ${c};\n`))}}return e&&(s=`:root {\n${s}}\n\n`),s+o}function mt(t,e){const n={base:(0,Q.I4)(e)};for(let i=5;i>0;--i)n[`lighten${i}`]=(0,Q.I4)(gt(e,i));for(let i=1;i<=4;++i)n[`darken${i}`]=(0,Q.I4)(vt(e,i));return n}function gt(t,e){const n=at(it(t));return n[0]=n[0]+10*e,nt(ct(n))}function vt(t,e){const n=at(it(t));return n[0]=n[0]-10*e,nt(ct(n))}class yt extends u{constructor(t){super(),this.disabled=!1,this.isDark=null,this.unwatch=null,this.vueMeta=null;const{dark:e,disable:n,options:i,themes:r}=t[yt.property];this.dark=Boolean(e),this.defaults=this.themes=r,this.options=i,n?this.disabled=!0:this.themes={dark:this.fillVariant(r.dark,!0),light:this.fillVariant(r.light,!1)}}set css(t){this.vueMeta?this.isVueMeta23&&this.applyVueMeta23():this.checkOrCreateStyleElement()&&(this.styleEl.innerHTML=t)}set dark(t){const e=this.isDark;this.isDark=t,null!=e&&this.applyTheme()}get dark(){return Boolean(this.isDark)}applyTheme(){if(this.disabled)return this.clearCss();this.css=this.generatedStyles}clearCss(){this.css=""}init(t,e){this.disabled||(t.$meta?this.initVueMeta(t):e&&this.initSSR(e),this.initTheme(t))}setTheme(t,e){this.themes[t]=Object.assign(this.themes[t],e),this.applyTheme()}resetThemes(){this.themes.light=Object.assign({},this.defaults.light),this.themes.dark=Object.assign({},this.defaults.dark),this.applyTheme()}checkOrCreateStyleElement(){return this.styleEl=document.getElementById("vuetify-theme-stylesheet"),!!this.styleEl||(this.genStyleElement(),Boolean(this.styleEl))}fillVariant(t={},e){const n=this.themes[e?"dark":"light"];return Object.assign({},n,t)}genStyleElement(){"undefined"!==typeof document&&(this.styleEl=document.createElement("style"),this.styleEl.type="text/css",this.styleEl.id="vuetify-theme-stylesheet",this.options.cspNonce&&this.styleEl.setAttribute("nonce",this.options.cspNonce),document.head.appendChild(this.styleEl))}initVueMeta(t){if(this.vueMeta=t.$meta(),this.isVueMeta23)return void t.$nextTick((()=>{this.applyVueMeta23()}));const e="function"===typeof this.vueMeta.getOptions?this.vueMeta.getOptions().keyName:"metaInfo",n=t.$options[e]||{};t.$options[e]=()=>{n.style=n.style||[];const t=n.style.find((t=>"vuetify-theme-stylesheet"===t.id));return t?t.cssText=this.generatedStyles:n.style.push({cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:(this.options||{}).cspNonce}),n}}applyVueMeta23(){const{set:t}=this.vueMeta.addApp("vuetify");t({style:[{cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:this.options.cspNonce}]})}initSSR(t){const e=this.options.cspNonce?` nonce="${this.options.cspNonce}"`:"";t.head=t.head||"",t.head+=`<style type="text/css" id="vuetify-theme-stylesheet"${e}>${this.generatedStyles}</style>`}initTheme(t){"undefined"!==typeof document&&(this.unwatch&&(this.unwatch(),this.unwatch=null),t.$once("hook:created",(()=>{const e=r.ZP.observable({themes:this.themes});this.unwatch=t.$watch((()=>e.themes),(()=>this.applyTheme()),{deep:!0})})),this.applyTheme())}get currentTheme(){const t=this.dark?"dark":"light";return this.themes[t]}get generatedStyles(){const t=this.parsedTheme,e=this.options||{};let n;return null!=e.themeCache&&(n=e.themeCache.get(t),null!=n)||(n=ft(t,e.customProperties),null!=e.minifyTheme&&(n=e.minifyTheme(n)),null!=e.themeCache&&e.themeCache.set(t,n)),n}get parsedTheme(){return lt(this.currentTheme||{},void 0,(0,l.qw)(this.options,["variations"],!0))}get isVueMeta23(){return"function"===typeof this.vueMeta.addApp}}yt.property="theme";class bt{constructor(t={}){this.framework={isHydrating:!1},this.installed=[],this.preset={},this.userPreset={},this.userPreset=t,this.use(h),this.use(d),this.use(p),this.use(N),this.use(Z),this.use(X),this.use(yt)}init(t,e){this.installed.forEach((n=>{const i=this.framework[n];i.framework=this.framework,i.init(t,e)})),this.framework.rtl=Boolean(this.preset.rtl)}use(t){const e=t.property;this.installed.includes(e)||(this.framework[e]=new t(this.preset,this),this.installed.push(e))}}bt.install=o,bt.installed=!1,bt.version="2.6.9",bt.config={silent:!1}},2404:function(t,e,n){n.d(e,{Z:function(){return s}});var i=n(8747),r=n(5530);function s(t,e=[]){return(0,r.Z)((0,i.d)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,n=e.length;t<n;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},6141:function(t,e,n){var i=n(144);function r(t){return function(e,n){for(const i in n)Object.prototype.hasOwnProperty.call(e,i)||this.$delete(this.$data[t],i);for(const i in e)this.$set(this.$data[t],i,e[i])}}e["Z"]=i.ZP.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",r("attrs$"),{immediate:!0}),this.$watch("$listeners",r("listeners$"),{immediate:!0})}})},5836:function(t,e,n){var i=n(144),r=n(8219),s=n(4771);e["Z"]=i.ZP.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,r.N6)("style must be an object",this),e):"string"===typeof e.class?((0,r.N6)("class must be an object",this),e):((0,s.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,r.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,r.N6)("class must be an object",this),e;if((0,s.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[n,i]=t.toString().trim().split(" ",2);e.class={...e.class,[n+"--text"]:!0},i&&(e.class["text--"+i]=!0)}return e}}})},8427:function(t,e,n){var i=n(144);e["Z"]=i.ZP.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},1302:function(t,e,n){n.d(e,{d:function(){return r}});var i=n(950);function r(t,e,n){return(0,i.f)(t,e,n).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}})}r("itemGroup")},9799:function(t,e,n){n.d(e,{Z:function(){return m}});var i=n(144),r=n(6930),s=n(7006),o=n(5836),a=n(8747),c=n(7779),l=n(2066),u=n(8131),h=n(5530);const d=(0,h.Z)(o.Z,(0,a.d)(["absolute","fixed","top","bottom"]),c.Z,l.Z);var p=d.extend({name:"v-progress-linear",directives:{intersect:s.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,u.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,u.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:t,[this.isReversed?"right":"left"]:(0,u.kb)(this.normalizedValue,"%"),width:(0,u.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?r.Z5:r.Qn},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=(0,u.kb)(this.normalizedBuffer,"%")),t}},methods:{genContent(){const t=(0,u.z9)(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners(){const t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[t]:!0}}))},onClick(t){if(!this.reactive)return;const{width:e}=this.$el.getBoundingClientRect();this.internalValue=t.offsetX/e*100},onObserve(t,e,n){this.isVisible=n},normalize(t){return t<0?0:t>100?100:parseFloat(t)}},render(t){const e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,u.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),f=p,m=i.ZP.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(f,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},9548:function(t,e,n){var i=n(8131),r=n(144);e["Z"]=r.ZP.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,i.kb)(this.height),n=(0,i.kb)(this.minHeight),r=(0,i.kb)(this.minWidth),s=(0,i.kb)(this.maxHeight),o=(0,i.kb)(this.maxWidth),a=(0,i.kb)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),s&&(t.maxHeight=s),o&&(t.maxWidth=o),a&&(t.width=a),t}}})},8747:function(t,e,n){n.d(e,{d:function(){return o}});var i=n(144),r=n(8131);const s={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function o(t=[]){return i.ZP.extend({name:"positionable",props:t.length?(0,r.ji)(s,t):s})}e["Z"]=o()},7779:function(t,e,n){var i=n(144);function r(t="value",e="change"){return i.ZP.extend({name:"proxyable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{internalLazyValue:this[t]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:{[t](t){this.internalLazyValue=t}}})}const s=r();e["Z"]=s},950:function(t,e,n){n.d(e,{J:function(){return a},f:function(){return o}});var i=n(144),r=n(8219);function s(t,e){return()=>(0,r.Kd)(`The ${t} component must be used inside a ${e}`)}function o(t,e,n){const r=e&&n?{register:s(e,n),unregister:s(e,n)}:null;return i.ZP.extend({name:"registrable-inject",inject:{[t]:{default:r}}})}function a(t,e=!1){return i.ZP.extend({name:"registrable-provide",provide(){return{[t]:e?this:{register:this.register,unregister:this.unregister}}}})}},5357:function(t,e,n){var i=n(144);e["Z"]=i.ZP.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const n=e.split(" ");for(const e of n)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},9367:function(t,e,n){var i=n(144),r=n(293),s=n(8131);e["Z"]=i.ZP.extend({name:"routable",directives:{Ripple:r.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!==(t=this.ripple)&&void 0!==t?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const n={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let i=this.activeClass,r=this.exactActiveClass||i;this.proxyClass&&(i=`${i} ${this.proxyClass}`.trim(),r=`${r} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(n.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:i,exactActiveClass:r,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(n.attrs.href=this.href);return this.target&&(n.attrs.target=this.target),{tag:t,data:n}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,n="_vnode.data.class."+(this.exact?e:t);this.$nextTick((()=>{!(0,s.vO)(this.$refs.link,n)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},2412:function(t,e,n){var i=n(144);e["Z"]=i.ZP.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},8191:function(t,e,n){var i=n(144);e["Z"]=i.ZP.extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame((()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0}))}})},2066:function(t,e,n){n.d(e,{X:function(){return s}});var i=n(144);const r=i.ZP.extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function s(t){const e={...t.props,...t.injections},n=r.options.computed.isDark.call(e);return r.options.computed.themeClasses.call({isDark:n})}e["Z"]=r},4552:function(t,e,n){n.d(e,{d:function(){return r}});var i=n(144);function r(t="value",e="input"){return i.ZP.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(n){!!n!==this[t]&&this.$emit(e,n)}}})}const s=r();e["Z"]=s},4771:function(t,e,n){n.d(e,{I4:function(){return o},NA:function(){return r},hq:function(){return a},jx:function(){return s}});var i=n(8219);function r(t){return!!t&&!!t.match(/^(#|var\(--|(rgb|hsl)a?\()/)}function s(t){let e;if("number"===typeof t)e=t;else{if("string"!==typeof t)throw new TypeError(`Colors can only be numbers or strings, recieved ${null==t?t:t.constructor.name} instead`);{let n="#"===t[0]?t.substring(1):t;3===n.length&&(n=n.split("").map((t=>t+t)).join("")),6!==n.length&&(0,i.Kd)(`'${t}' is not a valid rgb color`),e=parseInt(n,16)}}return e<0?((0,i.Kd)(`Colors cannot be negative: '${t}'`),e=0):(e>16777215||isNaN(e))&&((0,i.Kd)(`'${t}' is not a valid rgb color`),e=16777215),e}function o(t){let e=t.toString(16);return e.length<6&&(e="0".repeat(6-e.length)+e),"#"+e}function a(t){return o(s(t))}},8219:function(t,e,n){n.d(e,{Jk:function(){return l},Kd:function(){return s},N6:function(){return o},Rn:function(){return a},fK:function(){return c}});var i=n(154);function r(t,e,n){if(!i.Z.config.silent){if(n&&(e={_isVue:!0,$parent:n,$options:e}),e){if(e.$_alreadyWarned=e.$_alreadyWarned||[],e.$_alreadyWarned.includes(t))return;e.$_alreadyWarned.push(t)}return`[Vuetify] ${t}`+(e?p(e):"")}}function s(t,e,n){const i=r(t,e,n);null!=i&&console.warn(i)}function o(t,e,n){const i=r(t,e,n);null!=i&&console.error(i)}function a(t,e,n,i){s(`[UPGRADE] '${t}' is deprecated, use '${e}' instead.`,n,i)}function c(t,e,n,i){o(`[BREAKING] '${t}' has been removed, use '${e}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`,n,i)}function l(t,e,n){s(`[REMOVED] '${t}' has been removed. You can safely omit it.`,e,n)}const u=/(?:^|[-_])(\w)/g,h=t=>t.replace(u,(t=>t.toUpperCase())).replace(/[-_]/g,"");function d(t,e){if(t.$root===t)return"<Root>";const n="function"===typeof t&&null!=t.cid?t.options:t._isVue?t.$options||t.constructor.options:t||{};let i=n.name||n._componentTag;const r=n.__file;if(!i&&r){const t=r.match(/([^/\\]+)\.vue$/);i=t&&t[1]}return(i?`<${h(i)}>`:"<Anonymous>")+(r&&!1!==e?` at ${r}`:"")}function p(t){if(t._isVue&&t.$parent){const e=[];let n=0;while(t){if(e.length>0){const i=e[e.length-1];if(i.constructor===t.constructor){n++,t=t.$parent;continue}n>0&&(e[e.length-1]=[i,n],n=0)}e.push(t),t=t.$parent}return"\n\nfound in\n\n"+e.map(((t,e)=>`${0===e?"---\x3e ":" ".repeat(5+2*e)}${Array.isArray(t)?`${d(t[0])}... (${t[1]} recursive calls)`:d(t)}`)).join("\n")}return`\n\n(found in ${d(t)})`}},3118:function(t,e,n){function i(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}const e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}n.d(e,{e:function(){return i}})},8131:function(t,e,n){n.d(e,{Do:function(){return g},Ee:function(){return k},GL:function(){return f},Ji:function(){return r},KK:function(){return h},RB:function(){return v},TI:function(){return C},XP:function(){return y},_A:function(){return w},iZ:function(){return I},jC:function(){return _},ji:function(){return d},kb:function(){return p},lj:function(){return a},qh:function(){return s},qw:function(){return c},uZ:function(){return E},vO:function(){return u},vZ:function(){return l},z9:function(){return S}});var i=n(144);function r(t,e="div",n){return i.ZP.extend({name:n||t.replace(/__/g,"-"),functional:!0,props:{tag:{type:String,default:e}},render(e,{data:n,props:i,children:r}){return n.staticClass=`${t} ${n.staticClass||""}`.trim(),e(i.tag,n,r)}})}function s(t,e,n,i=!1){const r=s=>{n(s),t.removeEventListener(e,r,i)};t.addEventListener(e,r,i)}let o=!1;try{if("undefined"!==typeof window){const t=Object.defineProperty({},"passive",{get:()=>{o=!0}});window.addEventListener("testListener",t,t),window.removeEventListener("testListener",t,t)}}catch(T){console.warn(T)}function a(t,e,n,i){t.addEventListener(e,n,!!o&&i)}function c(t,e,n){const i=e.length-1;if(i<0)return void 0===t?n:t;for(let r=0;r<i;r++){if(null==t)return n;t=t[e[r]]}return null==t||void 0===t[e[i]]?n:t[e[i]]}function l(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime())return!1;if(t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length===Object.keys(e).length&&n.every((n=>l(t[n],e[n])))}function u(t,e,n){return null!=t&&e&&"string"===typeof e?void 0!==t[e]?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),c(t,e.split("."),n)):n}function h(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return 0;const e=+window.getComputedStyle(t).getPropertyValue("z-index");return e||h(t.parentNode)}function d(t,e){const n={};for(let i=0;i<e.length;i++){const r=e[i];"undefined"!==typeof t[r]&&(n[r]=t[r])}return n}function p(t,e="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${e}`}function f(t){return(t||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function m(t){return null!==t&&"object"===typeof t}const g=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function v(t,e){const n=t.$vuetify.icons.component;if(e.startsWith("$")){const n=`$vuetify.icons.values.${e.split("$").pop().split(".").pop()}`,i=u(t,n,e);if("string"!==typeof i)return i;e=i}return null==n?e:{component:n,props:{icon:e}}}function y(t){return Object.keys(t)}const b=/-(\w)/g,w=t=>t.replace(b,((t,e)=>e?e.toUpperCase():""));function _(t){return t.charAt(0).toUpperCase()+t.slice(1)}function C(t){return null!=t?Array.isArray(t)?t:[t]:[]}function S(t,e="default",n,i=!1){return t.$scopedSlots.hasOwnProperty(e)?t.$scopedSlots[e](n instanceof Function?n():n):!t.$slots.hasOwnProperty(e)||n&&!i?void 0:t.$slots[e]}function E(t,e=0,n=1){return Math.max(e,Math.min(n,t))}function k(t={},e={}){for(const n in e){const i=t[n],r=e[n];m(i)&&m(r)?t[n]=k(i,r):t[n]=r}return t}function I(t){if(t.composedPath)return t.composedPath();const e=[];let n=t.target;while(n){if(e.push(n),"HTML"===n.tagName)return e.push(document),e.push(window),e;n=n.parentElement}return e}},7559:function(t,e,n){n.d(e,{ZP:function(){return o}});var i=n(8131);const r={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function s(t){const e={};for(const n of t.split(r.styleList)){let[t,s]=n.split(r.styleProp);t=t.trim(),t&&("string"===typeof s&&(s=s.trim()),e[(0,i._A)(t)]=s)}return e}function o(){const t={};let e,n=arguments.length;while(n--)for(e of Object.keys(arguments[n]))switch(e){case"class":case"directives":arguments[n][e]&&(t[e]=c(t[e],arguments[n][e]));break;case"style":arguments[n][e]&&(t[e]=a(t[e],arguments[n][e]));break;case"staticClass":if(!arguments[n][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[n][e].trim();break;case"on":case"nativeOn":arguments[n][e]&&(t[e]=l(t[e],arguments[n][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][e])break;t[e]||(t[e]={}),t[e]={...arguments[n][e],...t[e]};break;default:t[e]||(t[e]=arguments[n][e])}return t}function a(t,e){return t?e?(t=(0,i.TI)("string"===typeof t?s(t):t),t.concat("string"===typeof e?s(e):e)):t:e}function c(t,e){return e?t&&t?(0,i.TI)(t).concat(e):e:t}function l(...t){if(!t[0])return t[1];if(!t[1])return t[0];const e={};for(let n=2;n--;){const i=t[n];for(const t in i)i[t]&&(e[t]?e[t]=[].concat(i[t],e[t]):e[t]=i[t])}return e}},5530:function(t,e,n){n.d(e,{Z:function(){return r}});var i=n(144);function r(...t){return i.ZP.extend({mixins:t})}},5816:function(t,e,n){n.d(e,{Jn:function(){return mt},qX:function(){return ht},Xd:function(){return ut},Mq:function(){return vt},ZF:function(){return gt},KN:function(){return yt}});var i=n(8463),r=n(3333),s=n(4444);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,p=new WeakMap,f=new WeakMap,m=new WeakMap;function g(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(C(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),m.set(e,t),e}function v(t){if(d.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));d.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return d.get(t);if("objectStoreNames"===e)return t.objectStoreNames||p.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return C(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function b(t){y=t(y)}function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(t)?function(...e){return t.apply(S(this),e),C(h.get(this))}:function(...e){return C(t.apply(S(this),e))}:function(e,...n){const i=t.call(S(this),e,...n);return p.set(i,e.sort?e.sort():[e]),C(i)}}function _(t){return"function"===typeof t?w(t):(t instanceof IDBTransaction&&v(t),o(t,l())?new Proxy(t,y):t)}function C(t){if(t instanceof IDBRequest)return g(t);if(f.has(t))return f.get(t);const e=_(t);return e!==t&&(f.set(t,e),m.set(e,t)),e}const S=t=>m.get(t);function E(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=C(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(C(o.result),t.oldVersion,t.newVersion,C(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const k=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],T=new Map;function x(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(T.get(e))return T.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=I.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!k.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return T.set(e,s),s}b((t=>({...t,get:(e,n,i)=>x(e,n)||t.get(e,n,i),has:(e,n)=>!!x(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(L(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function L(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const O="@firebase/app",N="0.7.32",D=new r.Yd("@firebase/app"),$="@firebase/app-compat",R="@firebase/analytics-compat",P="@firebase/analytics",M="@firebase/app-check-compat",V="@firebase/app-check",B="@firebase/auth",F="@firebase/auth-compat",U="@firebase/database",j="@firebase/database-compat",z="@firebase/functions",H="@firebase/functions-compat",q="@firebase/installations",Z="@firebase/installations-compat",W="@firebase/messaging",K="@firebase/messaging-compat",G="@firebase/performance",X="@firebase/performance-compat",Q="@firebase/remote-config",Y="@firebase/remote-config-compat",J="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",it="firebase",rt="9.9.4",st="[DEFAULT]",ot={[O]:"fire-core",[$]:"fire-core-compat",[P]:"fire-analytics",[R]:"fire-analytics-compat",[V]:"fire-app-check",[M]:"fire-app-check-compat",[B]:"fire-auth",[F]:"fire-auth-compat",[U]:"fire-rtdb",[j]:"fire-rtdb-compat",[z]:"fire-fn",[H]:"fire-fn-compat",[q]:"fire-iid",[Z]:"fire-iid-compat",[W]:"fire-fcm",[K]:"fire-fcm-compat",[G]:"fire-perf",[X]:"fire-perf-compat",[Q]:"fire-rc",[Y]:"fire-rc-compat",[J]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[it]:"fire-js-all"},at=new Map,ct=new Map;function lt(t,e){try{t.container.addComponent(e)}catch(n){D.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ut(t){const e=t.name;if(ct.has(e))return D.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())lt(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dt={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},pt=new s.LL("app","Firebase",dt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw pt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=rt;function gt(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),r=n.name;if("string"!==typeof r||!r)throw pt.create("bad-app-name",{appName:String(r)});const o=at.get(r);if(o){if((0,s.vZ)(t,o.options)&&(0,s.vZ)(n,o.config))return o;throw pt.create("duplicate-app",{appName:r})}const a=new i.H0(r);for(const i of ct.values())a.addComponent(i);const c=new ft(t,n,a);return at.set(r,c),c}function vt(t=st){const e=at.get(t);if(!e)throw pt.create("no-app",{appName:t});return e}function yt(t,e,n){var r;let s=null!==(r=ot[t])&&void 0!==r?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void D.warn(t.join(" "))}ut(new i.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bt="firebase-heartbeat-database",wt=1,_t="firebase-heartbeat-store";let Ct=null;function St(){return Ct||(Ct=E(bt,wt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_t)}}}).catch((t=>{throw pt.create("idb-open",{originalErrorMessage:t.message})}))),Ct}async function Et(t){var e;try{const e=await St();return e.transaction(_t).objectStore(_t).get(It(t))}catch(n){if(n instanceof s.ZR)D.warn(n.message);else{const t=pt.create("idb-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message});D.warn(t.message)}}}async function kt(t,e){var n;try{const n=await St(),i=n.transaction(_t,"readwrite"),r=i.objectStore(_t);return await r.put(e,It(t)),i.done}catch(i){if(i instanceof s.ZR)D.warn(i.message);else{const t=pt.create("idb-set",{originalErrorMessage:null===(n=i)||void 0===n?void 0:n.message});D.warn(t.message)}}}function It(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=1024,xt=2592e6;class At{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Nt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Lt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=xt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Lt(),{heartbeatsToSend:e,unsentEntries:n}=Ot(this._heartbeatsCache.heartbeats),i=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Lt(){const t=new Date;return t.toISOString().substring(0,10)}function Ot(t,e=Tt){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Dt(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Dt(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Nt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Et(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return kt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return kt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Dt(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t){ut(new i.wA("platform-logger",(t=>new A(t)),"PRIVATE")),ut(new i.wA("heartbeat",(t=>new At(t)),"PRIVATE")),yt(O,N,t),yt(O,N,"esm2017"),yt("fire-js","")}$t("")},8463:function(t,e,n){n.d(e,{H0:function(){return l},wA:function(){return r}});var i=n(4444);class r{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new i.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),i=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(r);n===t&&s.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(i){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3333:function(t,e,n){n.d(e,{Yd:function(){return l},in:function(){return r}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=a[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}}}]);
//# sourceMappingURL=chunk-vendors.a01d2af5.js.map