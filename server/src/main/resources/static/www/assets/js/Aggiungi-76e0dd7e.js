import{ap as v,aq as z,R as r,a as n,F as E,B as m,j as o}from"./index-5f51ca44.js";import{S as x}from"./SaveFab-142d182a.js";import{a as A,E as F}from"./index-30e337fd.js";import{u as j,a as y}from"./hooks-1f293e4f.js";import{T as c}from"./Typography-6ee06c79.js";import{P as T}from"./Paper-cffb93af.js";import{T as q}from"./TextField-fd5a3e96.js";import"./Container-87c2bf1f.js";import"./Fab-998d6591.js";import"./ButtonBase-8b0d506c.js";import"./createReactComponent-ea0485c8.js";import"./Grow-62fe4847.js";import"./useTheme-90c811d5.js";import"./utils-7d94707b.js";import"./Modal-3eb94ddf.js";import"./List-91c3af84.js";import"./createSvgIcon-1a708d24.js";function B(i){return async e=>{A.post(`${F.NEGOZI}`,i).then(t=>{e(v()),window.location.href="/app/negozi"}).catch(t=>{e(z(t.message))})}}const L=()=>{const i=j(),{selected:e}=y(a=>a.aziende),[t,p]=r.useState({azienda:e,nome:""}),[s,d]=r.useState({nome:!0});r.useEffect(()=>{p({...t,azienda:e})},[e]);const g=a=>{const{name:l,value:u,required:b}=a.target;p({...t,[l]:u}),b&&d({...s,[l]:u.length<1})},[h,f]=r.useState(!0);r.useEffect(()=>{f(!Object.values(s).every(a=>a===!1))},[s]);const S=()=>{i(B(t))};return n(E,{children:[n(m,{mb:3,children:[o(c,{variant:"h3",gutterBottom:!0,children:"Aggiungi Negozio"}),n(c,{children:["Attenzione! Si sta aggiungendo un negozio all'azienda"," ",e==null?void 0:e.denominazione]})]}),o(m,{children:o(T,{children:o(m,{p:2,children:o(q,{label:"nome",name:"nome",value:t.nome,error:s.nome,fullWidth:!0,required:!0,onChange:g})})})}),o(x,{handleClick:S,disabled:h})]})};export{L as default};