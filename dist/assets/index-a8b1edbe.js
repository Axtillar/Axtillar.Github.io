import{r as l,a as E,m as i,u as j,b as k,L as x,A as R,c as L,d as S,B as O,R as P,f as m,N as I,e as T}from"./vendor-c55c7435.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(n){if(n.ep)return;n.ep=!0;const t=c(n);fetch(n.href,t)}})();var N={exports:{}},y={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A=l,D=Symbol.for("react.element"),$=Symbol.for("react.fragment"),z=Object.prototype.hasOwnProperty,C=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H={key:!0,ref:!0,__self:!0,__source:!0};function _(o,a,c){var r,n={},t=null,s=null;c!==void 0&&(t=""+c),a.key!==void 0&&(t=""+a.key),a.ref!==void 0&&(s=a.ref);for(r in a)z.call(a,r)&&!H.hasOwnProperty(r)&&(n[r]=a[r]);if(o&&o.defaultProps)for(r in a=o.defaultProps,a)n[r]===void 0&&(n[r]=a[r]);return{$$typeof:D,type:o,key:t,ref:s,props:n,_owner:C.current}}y.Fragment=$;y.jsx=_;y.jsxs=_;N.exports=y;var e=N.exports,b={},v=E;b.createRoot=v.createRoot,b.hydrateRoot=v.hydrateRoot;const B="modulepreload",F=function(o){return"/"+o},g={},u=function(a,c,r){if(!c||c.length===0)return a();const n=document.getElementsByTagName("link");return Promise.all(c.map(t=>{if(t=F(t),t in g)return;g[t]=!0;const s=t.endsWith(".css"),f=s?'[rel="stylesheet"]':"";if(!!r)for(let p=n.length-1;p>=0;p--){const h=n[p];if(h.href===t&&(!s||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${f}`))return;const d=document.createElement("link");if(d.rel=s?"stylesheet":B,s||(d.as="script",d.crossOrigin=""),d.href=t,document.head.appendChild(d),s)return new Promise((p,h)=>{d.addEventListener("load",p),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>a()).catch(t=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=t,window.dispatchEvent(s),!s.defaultPrevented)throw t})};function V(){return e.jsx(i.div,{className:"w-12 h-12 border border-[#64ffda] text-[#64ffda] flex items-center justify-center",whileHover:{scale:1.05},whileTap:{scale:.95},children:e.jsx("span",{className:"text-2xl font-bold",children:"A"})})}function W(){const[o,a]=l.useState(!1),[c,r]=l.useState(!1),n=j();k(),l.useEffect(()=>{const s=()=>{r(window.scrollY>50)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]),l.useEffect(()=>{o?document.body.style.overflow="hidden":document.body.style.overflow="unset"},[o]);const t=[{number:"01.",text:"Home",path:"/"},{number:"02.",text:"Services",path:"/services"},{number:"03.",text:"Resume",path:"/resume"},{number:"04.",text:"About",path:"/about"},{number:"05.",text:"Work",path:"/work"}];return e.jsxs(e.Fragment,{children:[e.jsx(i.nav,{className:`fixed w-full px-4 md:px-12 lg:px-24 py-4 bg-[#0a192f] z-50 transition-all duration-300 ${c?"shadow-lg bg-opacity-90 backdrop-blur-sm":"bg-opacity-100"}`,initial:{y:-100},animate:{y:0},transition:{duration:.6},children:e.jsxs("div",{className:"max-w-7xl mx-auto flex justify-between items-center",children:[e.jsx(x,{to:"/",children:e.jsx(V,{})}),e.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[t.map((s,f)=>e.jsxs(x,{to:s.path,className:`text-slate-200 hover:text-[#64ffda] transition-colors font-mono text-sm group relative whitespace-nowrap ${n.pathname===s.path?"text-[#64ffda]":""}`,children:[e.jsx("span",{className:"text-[#64ffda]",children:s.number})," ",s.text,e.jsx("span",{className:`absolute left-0 bottom-0 w-0 h-[1px] bg-[#64ffda] transition-all duration-300 group-hover:w-full ${n.pathname===s.path?"w-full":"w-0"}`})]},f)),e.jsx(x,{to:"/contact",className:`px-5 py-2.5 bg-[#64ffda] text-[#0a192f] rounded-md font-mono text-sm font-semibold hover:bg-[#64ffda]/90 transition-all duration-300 transform hover:-translate-y-0.5 ${n.pathname==="/contact"?"shadow-lg":""}`,children:"Hire Me"})]}),e.jsx("button",{className:"md:hidden z-50 relative w-10 h-10 flex flex-col justify-center items-center",onClick:()=>a(!o),"aria-label":"Menu",children:e.jsxs("div",{className:"relative w-6 h-6",children:[e.jsx(i.span,{animate:o?{rotate:45,y:6}:{rotate:0,y:0},className:"absolute top-0 left-0 w-6 h-0.5 bg-[#64ffda] block transition-transform origin-center"}),e.jsx(i.span,{animate:o?{opacity:0,x:-20}:{opacity:1,x:0},className:"absolute top-[10px] left-0 w-6 h-0.5 bg-[#64ffda] block"}),e.jsx(i.span,{animate:o?{rotate:-45,y:-6}:{rotate:0,y:0},className:"absolute bottom-0 left-0 w-6 h-0.5 bg-[#64ffda] block transition-transform origin-center"})]})})]})}),e.jsx(R,{children:o&&e.jsxs(e.Fragment,{children:[e.jsx(i.div,{initial:{opacity:0},animate:{opacity:.5},exit:{opacity:0},className:"fixed inset-0 bg-black md:hidden z-40",onClick:()=>a(!1)}),e.jsx(i.div,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"tween",duration:.3},className:"fixed top-0 right-0 bottom-0 w-[min(75vw,400px)] bg-[#112240] md:hidden z-40 shadow-2xl overflow-y-auto",children:e.jsx("div",{className:"flex flex-col items-center justify-center min-h-full py-20 px-6",children:e.jsxs("div",{className:"space-y-8 md:space-y-12 text-center",children:[t.map((s,f)=>e.jsx(i.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.1*f},className:"block",children:e.jsxs(x,{to:s.path,className:`text-slate-200 hover:text-[#64ffda] transition-colors font-mono text-base md:text-lg inline-block ${n.pathname===s.path?"text-[#64ffda]":""}`,onClick:()=>a(!1),children:[e.jsx("span",{className:"text-[#64ffda] block text-sm mb-1",children:s.number}),s.text]})},f)),e.jsx(i.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{delay:.6},children:e.jsx(x,{to:"/contact",className:"px-8 py-3 bg-[#64ffda] text-[#0a192f] rounded-md font-mono text-base font-semibold inline-block hover:bg-[#64ffda]/90 transition-all duration-300",onClick:()=>a(!1),children:"Hire Me"})})]})})})]})})]})}const q=()=>{const o=j(),a=[{icon:"github",href:"#",label:"GitHub"},{icon:"instagram",href:"#",label:"Instagram"},{icon:"twitter",href:"#",label:"Twitter"},{icon:"linkedin",href:"#",label:"LinkedIn"},{icon:"codepen",href:"#",label:"CodePen"}];return e.jsxs("footer",{className:"py-12 md:py-16 mt-16 md:mt-24 px-4 md:px-0",children:[o.pathname!=="/contact"&&e.jsxs(i.div,{className:"max-w-3xl mx-auto text-center mb-12 md:mb-16",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},children:[e.jsx("h2",{className:"text-[#64ffda] font-mono mb-4 text-base md:text-lg",children:"What's Next!"}),e.jsx("h3",{className:"text-4xl md:text-5xl lg:text-6xl font-bold text-slate-200 mb-6",children:"Get In Touch"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 mb-8 md:mb-12 max-w-2xl mx-auto break-words",children:"Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!"}),e.jsx(x,{to:"/contact",children:e.jsx(i.button,{className:"inline-block border-2 border-[#64ffda] text-[#64ffda] px-6 md:px-8 py-3 md:py-4 rounded font-mono text-base md:text-lg hover:bg-[#64ffda]/10 transition-colors",whileHover:{y:-4},transition:{duration:.2},children:"Say Hello"})})]}),e.jsx("ul",{className:"flex justify-center space-x-6 mb-6",children:a.map((c,r)=>e.jsx(i.li,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:r*.1},children:e.jsx("a",{href:c.href,"aria-label":c.label,className:"text-slate-400 hover:text-[#64ffda] transition-all duration-200 block",children:e.jsx("i",{className:`ri-${c.icon}-line text-xl`})})},r))}),e.jsx(i.p,{className:"text-center text-slate-400 font-mono text-xs md:text-sm break-words",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},children:"Designed and built by Axtillar"})]})};function w(){return e.jsx("div",{className:"fixed inset-0 bg-[#0a192f] flex items-center justify-center",children:e.jsxs(i.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{duration:.8,ease:[0,.71,.2,1.01],scale:{type:"spring",damping:5,stiffness:100,restDelta:.001}},className:"relative",children:[e.jsx("div",{className:"w-20 h-20 border-4 border-[#64ffda]/20 rounded-full",children:e.jsx("div",{className:"w-20 h-20 border-4 border-t-[#64ffda] rounded-full animate-spin"})}),e.jsx(i.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},className:"mt-4 text-[#64ffda] font-mono text-sm text-center",children:"Loading.."})]})})}function M(){const{scrollYProgress:o}=L(),a=S(o,{stiffness:100,damping:30,restDelta:.001});return e.jsx(i.div,{className:"fixed top-0 left-0 right-0 h-1 bg-[#64ffda] origin-left z-50",style:{scaleX:a}})}const U=l.lazy(()=>u(()=>import("./Home-5d2226ea.js"),["assets/Home-5d2226ea.js","assets/vendor-c55c7435.js","assets/animations-b51c0fd1.js"])),Y=l.lazy(()=>u(()=>import("./Services-aa988828.js"),["assets/Services-aa988828.js","assets/vendor-c55c7435.js"])),G=l.lazy(()=>u(()=>import("./Resume-1d629d54.js"),["assets/Resume-1d629d54.js","assets/vendor-c55c7435.js"])),J=l.lazy(()=>u(()=>import("./About-9982c5a5.js"),["assets/About-9982c5a5.js","assets/vendor-c55c7435.js"])),K=l.lazy(()=>u(()=>import("./Work-563ff584.js"),["assets/Work-563ff584.js","assets/vendor-c55c7435.js"])),X=l.lazy(()=>u(()=>import("./Contact-8c411cbc.js"),["assets/Contact-8c411cbc.js","assets/vendor-c55c7435.js"]));function Q(){const{pathname:o}=j();return l.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[o]),null}function Z(){const[o,a]=l.useState(!0);return l.useEffect(()=>{setTimeout(()=>a(!1),2e3)},[]),o?e.jsx(w,{}):e.jsx("div",{className:"min-h-screen bg-[#0a192f] text-white",children:e.jsxs(O,{children:[e.jsx(M,{}),e.jsx(Q,{}),e.jsx(W,{}),e.jsxs("div",{className:"px-4 md:px-8 lg:px-16 xl:px-24 relative pt-16 md:pt-0",children:[e.jsx(l.Suspense,{fallback:e.jsx(w,{}),children:e.jsxs(P,{children:[e.jsx(m,{path:"/",element:e.jsx(U,{})}),e.jsx(m,{path:"/services",element:e.jsx(Y,{})}),e.jsx(m,{path:"/resume",element:e.jsx(G,{})}),e.jsx(m,{path:"/about",element:e.jsx(J,{})}),e.jsx(m,{path:"/work",element:e.jsx(K,{})}),e.jsx(m,{path:"/contact",element:e.jsx(X,{})}),e.jsx(m,{path:"*",element:e.jsx(I,{to:"/",replace:!0})})]})}),e.jsx(q,{})]})]})})}b.createRoot(document.getElementById("root")).render(e.jsx(T.StrictMode,{children:e.jsx(Z,{})}));export{e as j};
