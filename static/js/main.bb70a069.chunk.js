(this.webpackJsonpamongusfinance=this.webpackJsonpamongusfinance||[]).push([[3],{12:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var c=n(2),o=n(0),r=n(33),a=n(3),s=n(29),i=n(94),u=n(20),l=n.p+"static/media/vcr-osd-mono.87ccd902.woff2",b=n.p+"static/media/among-us.c1b6eab0.woff2",d=n(13);const f={username:null,color:"red"};function j(e,t){const{type:n}=t;switch(n){case"setUsername":{const n=t.value;return window.localStorage.setItem("username",JSON.stringify(n)),{...e,username:n}}case"setColor":{const n=t.value;return window.localStorage.setItem("color",JSON.stringify(n)),{...e,color:n}}default:throw new Error}}const O=e=>e&&e.offsetHeight;var m=n(22),h=n(34);n(87),n(88);const p=Object(o.lazy)((()=>Promise.all([n.e(0),n.e(12),n.e(10)]).then(n.bind(null,555)))),g=Object(o.lazy)((()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,553)))),v=Object(o.lazy)((()=>n.e(11).then(n.bind(null,549)))),x=Object(o.lazy)((()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(13)]).then(n.bind(null,554)))),w=Object(o.lazy)((()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(16)]).then(n.bind(null,556)))),y=Object(o.lazy)((()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(15)]).then(n.bind(null,557)))),S=Object(o.lazy)((()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,550)))),E=Object(o.lazy)((()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,551)))),k=Object(o.createContext)(),z=`\n  @font-face {\n    font-family: "VCR-OSD-Mono";\n    src: url(${l}) format("woff");\n    font-display: swap;\n  }\n\n  @font-face {\n    font-family: "amongus";\n    src: url(${b}) format("woff2");\n    font-display: swap;\n  }\n`,P=()=>{const e=Object(a.h)(),{pathname:t}=e;return Object(c.jsxs)(o.Fragment,{children:[Object(c.jsxs)(u.a,{children:[Object(c.jsx)("link",{rel:"canonical",href:"https://amongus.finance"+t}),Object(c.jsx)("link",{rel:"preload",href:l,as:"font",crossorigin:""}),Object(c.jsx)("link",{rel:"preload",href:b,as:"font",crossorigin:""}),Object(c.jsx)("style",{children:z})]}),Object(c.jsx)(i.a,{timeout:200,onEnter:O,children:t=>Object(c.jsx)(o.Suspense,{fallback:Object(c.jsx)(o.Fragment,{}),children:Object(c.jsxs)(a.d,{location:e,children:[Object(c.jsx)(a.b,{exact:!0,path:"/",component:p}),Object(c.jsx)(a.b,{exact:!0,path:["/lobby","/lobby/:id"],component:v}),Object(c.jsx)(a.b,{exact:!0,path:"/play",component:g}),Object(c.jsx)(a.b,{exact:!0,path:"/dashboard",component:x}),Object(c.jsx)(a.b,{exact:!0,path:"/staking",component:w}),Object(c.jsx)(a.b,{exact:!0,path:"/farming",component:y}),Object(c.jsx)(a.b,{exact:!0,path:"/about",component:E}),Object(c.jsx)(a.b,{component:S})]})})},t)]})};t.b=()=>{const[e]=Object(d.d)("username",null),[t]=Object(d.d)("color","red"),[n,a]=Object(o.useReducer)(j,f),i=Object(d.e)();return Object(o.useEffect)((()=>{s.a.disabled=!!i}),[i]),Object(o.useEffect)((()=>{h.a||console.info("Developed by amongus.finance\n\n"),window.history.scrollRestoration="manual"}),[]),Object(o.useEffect)((()=>(Object(m.b)(),()=>{Object(m.a)()})),[]),Object(o.useEffect)((()=>{a({type:"setUsername",value:e})}),[e]),Object(o.useEffect)((()=>{a({type:"setColor",value:t})}),[t]),Object(c.jsx)(u.b,{children:Object(c.jsx)(k.Provider,{value:{...n,dispatch:a},children:Object(c.jsx)(r.a,{children:Object(c.jsx)(P,{})})})})}},13:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return u}));var c=n(0),o=n(12);var r=function(){return Object(c.useContext)(o.a)};var a=function(e){const t=Object(c.useRef)(new Audio(e)),[n,o]=Object(c.useState)(!1);return Object(c.useEffect)((()=>{n?t.current.play():t.current.pause()}),[n]),Object(c.useEffect)((()=>{const e=t.current;return e.addEventListener("ended",(()=>o(!1))),()=>{e.removeEventListener("ended",(()=>o(!1)))}}),[]),[n,()=>o(!n)]};var s=function(e=""){const[t,n]=Object(c.useState)(e),[o,r]=Object(c.useState)(),[a,s]=Object(c.useState)(!1);return{value:t,error:o,onChange:e=>{n(e.target.value),s(!0),o&&e.target.checkValidity()&&r(null)},onBlur:e=>{a&&e.target.checkValidity()},onInvalid:e=>{e.preventDefault(),r(e.target.validationMessage)}}};var i=function(e,t){const[n,o]=Object(c.useState)((()=>{try{const n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return console.error(n),t}}));return[n,t=>{try{const c=t instanceof Function?t(n):t;o(c),window.localStorage.setItem(e,JSON.stringify(c))}catch(c){console.error(c)}}]};var u=function(){const e=window.matchMedia("(prefers-reduced-motion: reduce)"),[t,n]=Object(c.useState)(e.matches);return Object(c.useEffect)((()=>{const e=window.matchMedia("(prefers-reduced-motion: reduce)"),t=()=>{e.matches&&n(!0)};return e.addListener(t),()=>{e.removeListener(t)}}),[]),t}},22:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return u}));var c=n(50),o=n.n(c);let r;const a=()=>{r=o()("")},s=()=>{r&&r.disconnect()},i=(e,t,n=5)=>{if(!r&&n>0)return setTimeout(i,50,e,t,n-1);r&&r.on(e,(e=>t(e)))},u=(e,t,n=5)=>{if(!r&&n>0)return setTimeout(u,50,e,t,n-1);r&&r.emit(e,t)}},34:function(e,t,n){"use strict";const c="ReactSnap"===navigator.userAgent;t.a=c},84:function(e,t){},87:function(e,t,n){},88:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var c=n(2),o=(n(0),n(9)),r=n(12);Boolean("ReactSnap"===navigator.userAgent),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));const a=document.getElementById("root");a.hasChildNodes()?Object(o.hydrate)(Object(c.jsx)(r.b,{}),a):Object(o.render)(Object(c.jsx)(r.b,{}),a),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()}))}},[[91,4,5]]]);
//# sourceMappingURL=main.bb70a069.chunk.js.map