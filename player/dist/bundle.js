!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.idk=t():e.idk=t()}(self,(()=>(()=>{"use strict";var e,t,r,o,n,a,c,i,l={386:(e,t,r)=>{r.a(e,(async(e,o)=>{try{r.r(t);const n=(await r.e(3).then(r.t.bind(r,3,19))).default;function a(e){for(let t=localStorage.length-1;t>=0;t--){const r=localStorage.key(t);r.endsWith(e)&&localStorage.removeItem(r)}}async function c(e){const t=(new TextEncoder).encode(e),r=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(r)).map((e=>e.toString(16).padStart(2,"0"))).join("")}const i=new URLSearchParams(window.location.search);let l=i.get("subtitlelink"),u=document.querySelector("#main_sub"),s=i.get("videolink"),d=document.querySelector("#main_vid").src,p=!1;s&&(document.querySelector("#main_vid").src=s,fetch(s).then((e=>{if(!e.ok)throw new Error(e.status)})).catch((e=>{JSAlert.alert(e+"\nWhile loading video",null,JSAlert.Icons.Failed),document.querySelector("#main_vid").src=d})));let f=(await c(s)).slice(0,10);l?fetch(l).then((async e=>{const t=await e.text();var r;document.querySelector("#main_sub").src=URL.createObjectURL(new Blob([(r=t,n.convert(r,{format:"vtt"}))],{type:"text/vtt"}))})).catch((e=>{JSAlert.alert(e+"\nWhile loading subtitle",null,JSAlert.Icons.Failed)})):u.remove();const m=new Plyr("#player");function b(){function e(e,t,r){document.querySelector(e).addEventListener(t,r,!1)}window.player=m,e(".js-play","click",(()=>{m.play()})),e(".js-pause","click",(()=>{m.pause()})),e(".js-stop","click",(()=>{m.stop()})),e(".js-delplayback","click",(()=>{JSAlert.alert("Successfully deleted all playback",null,JSAlert.Icons.Deleted),a("saved-time")})),e(".js-rewind","click",(()=>{m.rewind()})),e(".js-forward","click",(()=>{m.forward()}))}"loading"!==document.readyState?b():document.addEventListener("DOMContentLoaded",(function(){b()})),m.on("playing",(e=>{const t=localStorage.getItem(f+"-saved-time");t&&t>1&&t!=m.currentTime&&(console.log("Check"),p||(console.log("Check"),p=!0,m.currentTime=Number(t)))})),m.on("ended",(()=>{localStorage.removeItem(f+"-saved-time")})),m.on("timeupdate",(e=>{0!=m.currentTime&&localStorage.setItem(f+"-saved-time",m.currentTime)})),o()}catch(y){o(y)}}),1)}},u={};function s(e){var t=u[e];if(void 0!==t)return t.exports;var r=u[e]={exports:{}};return l[e](r,r.exports,s),r.exports}return s.m=l,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},s.a=(n,a,c)=>{var i;c&&((i=[]).d=-1);var l,u,s,d=new Set,p=n.exports,f=new Promise(((e,t)=>{s=t,u=e}));f[t]=p,f[e]=e=>(i&&e(i),d.forEach(e),f.catch((e=>{}))),n.exports=f,a((n=>{var a;l=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[e])return n;if(n.then){var a=[];a.d=0,n.then((e=>{c[t]=e,o(a)}),(e=>{c[r]=e,o(a)}));var c={};return c[e]=e=>e(a),c}}var i={};return i[e]=e=>{},i[t]=n,i})))(n);var c=()=>l.map((e=>{if(e[r])throw e[r];return e[t]})),u=new Promise((t=>{(a=()=>t(c)).r=0;var r=e=>e!==i&&!d.has(e)&&(d.add(e),e&&!e.d&&(a.r++,e.push(a)));l.map((t=>t[e](r)))}));return a.r?u:c()}),(e=>(e?s(f[r]=e):u(p),o(i)))),i&&i.d<0&&(i.d=0)},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);s.r(r);var o={};n=n||[null,a({}),a([]),a(a)];for(var c=2&t&&e;"object"==typeof c&&!~n.indexOf(c);c=a(c))Object.getOwnPropertyNames(c).forEach((t=>o[t]=()=>e[t]));return o.default=()=>e,s.d(r,o),r},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,r)=>(s.f[r](e,t),t)),[])),s.u=e=>e+".bundle.js",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c={},i="idk:",s.l=(e,t,r,o)=>{if(c[e])c[e].push(t);else{var n,a;if(void 0!==r)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==i+r){n=d;break}}n||(a=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,s.nc&&n.setAttribute("nonce",s.nc),n.setAttribute("data-webpack",i+r),n.src=e),c[e]=[t];var p=(t,r)=>{n.onerror=n.onload=null,clearTimeout(f);var o=c[e];if(delete c[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=p.bind(null,n.onerror),n.onload=p.bind(null,n.onload),a&&document.head.appendChild(n)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),(()=>{var e={792:0};s.f.j=(t,r)=>{var o=s.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=s.p+s.u(t),c=new Error;s.l(a,(r=>{if(s.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,o[1](c)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,n,[a,c,i]=r,l=0;if(a.some((t=>0!==e[t]))){for(o in c)s.o(c,o)&&(s.m[o]=c[o]);i&&i(s)}for(t&&t(r);l<a.length;l++)n=a[l],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunkidk=self.webpackChunkidk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),s(386)})()));