!function(e){function t(t){for(var n,o,u=t[0],c=t[1],i=0,a=[];i<u.length;i++)o=u[i],r[o]&&a.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(l&&l(t);a.length;)a.shift()()}var n={},r={1:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=u);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=function(e){return o.p+""+e+".bundle.js"}(e),c=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+o+": "+u+")");c.type=o,c.request=u,n[1](c)}r[e]=void 0}};var l=setTimeout(function(){c({type:"timeout",target:i})},12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=c;o(o.s=1)}([,function(e,t,n){let r=document.querySelector("#j-ensure"),o=document.querySelector("#j-import");r.addEventListener("click",()=>{n.e(0).then(function(e){var t=n(0);document.open(),document.write("<h1>"+t+"</h1>"),document.close()}.bind(null,n)).catch(n.oe)},!1),o.addEventListener("click",()=>n.e(0).then(n.t.bind(null,0,7)).then(({default:e})=>{document.open(),document.write("<h1>"+e+"</h1>"),document.close()}).catch(e=>"An error occurred while loading the conntent"),!1)}]);