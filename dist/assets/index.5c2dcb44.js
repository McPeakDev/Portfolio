import{r as g,b as L,c as r,e as u,f as _,h as t,j as p,k as f,F as $,l as w}from"./vendor.5b5fe923.js";import{P as S,a as C,A as B,R as A,S as M,T as R,b as E,E as N,c as T,B as F}from"./troisjs.03f18f12.js";import"./three.eff00e82.js";const O=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}};O();var m=(i,e)=>{const n=i.__vccOpts||i;for(const[a,o]of e)n[a]=o;return n};const I={components:{Camera:S,PhysicalMaterial:C,AmbientLight:B,Renderer:A,Scene:M,TorusKnot:R,PointLight:E,EffectComposer:N,RenderPass:T,BokehPass:F},setup(){const i=g(null),e=g(null);return L(()=>{var n;(n=i.value)==null||n.onBeforeRender(()=>{e.value!==null&&(e.value.mesh.rotation.z+=.01)})}),{renderer:i,torus:e}}},K={class:"background container"};function z(i,e,n,a,o,s){const c=r("Camera"),d=r("AmbientLight"),l=r("PointLight"),v=r("PhysicalMaterial"),h=r("TorusKnot"),y=r("Scene"),k=r("RenderPass"),b=r("BokehPass"),P=r("EffectComposer"),x=r("Renderer");return u(),_("div",K,[t(x,{ref:"renderer",antialias:"",resize:"window"},{default:p(()=>[t(c,{position:{z:40}}),t(y,{background:"#000000"},{default:p(()=>[t(d,{color:"#000000"}),t(l,{color:"#ffffff",position:{x:100,y:-50}}),t(l,{color:"#ffffff",position:{x:100,y:50}}),t(l,{color:"#ffffff",position:{x:100,y:0}}),t(l,{color:"#ffffff",position:{x:-100,y:0}}),t(l,{color:"#ffffff",position:{x:-100,y:50}}),t(l,{color:"#ffffff",position:{x:-100,y:-50}}),t(l,{color:"#ffffff",position:{x:0,y:100}}),t(l,{color:"#ffffff",position:{x:0,y:-100}}),t(h,{radius:10,tube:1,radialSegments:20,tubularSegments:1e3,p:10,q:1,props:{side:2},ref:"torus"},{default:p(()=>[t(v,{color:"#cf1500",props:{emissive:"#000000",specularIntensity:1,roughness:.5}},null,8,["props"])]),_:1},512)]),_:1}),t(P,null,{default:p(()=>[t(k),t(b,{maxblur:.1},null,8,["maxblur"])]),_:1})]),_:1},512)])}var V=m(I,[["render",z]]);const q={setup(){return{setSelected:e=>{let n="https://drive.google.com/file/d/1--uL-Sm5TSAMxT1HphVZiWlFf82Nd1cF/view?usp=sharing";switch(e){case"github":n="https://github.com/McPeakDev";break;case"linkedin":n="https://www.linkedin.com/in/matthew-mcpeak-19539b137/";break}window.open(n,"_blank")}}}},H={class:"container"},j={class:"flexContainer"};function D(i,e,n,a,o,s){return u(),_("main",null,[f("div",H,[f("div",j,[f("p",{class:"option floating",onClick:e[0]||(e[0]=c=>a.setSelected("about"))},"Resume"),f("p",{class:"option floating",onClick:e[1]||(e[1]=c=>a.setSelected("github"))},"GitHub"),f("p",{class:"option floating",onClick:e[2]||(e[2]=c=>a.setSelected("linkedin"))},"LinkedIn")])])])}var G=m(q,[["render",D],["__scopeId","data-v-48ccdd78"]]);const W={components:{LiveBackground:V,LandingPage:G},data(){return{}}},Z={class:"grow"},J=f("p",{class:"center"},"\xA9 Matthew McPeak",-1);function Q(i,e,n,a,o,s){const c=r("LiveBackground"),d=r("LandingPage");return u(),_($,null,[t(c),f("div",Z,[t(d)]),J],64)}var U=m(W,[["render",Q]]);const X=w(U);X.mount("#app");