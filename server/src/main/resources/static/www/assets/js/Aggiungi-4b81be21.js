import{aB as v,aC as C,R as o,a as p,F,j as r,B as n}from"./index-5f51ca44.js";import{S}from"./SaveFab-142d182a.js";import{a as D,E as T}from"./index-30e337fd.js";import{u as z}from"./hooks-1f293e4f.js";import{T as x}from"./Typography-6ee06c79.js";import{P as j}from"./Paper-cffb93af.js";import{T as l}from"./TextField-fd5a3e96.js";import"./Container-87c2bf1f.js";import"./Fab-998d6591.js";import"./ButtonBase-8b0d506c.js";import"./createReactComponent-ea0485c8.js";import"./Grow-62fe4847.js";import"./useTheme-90c811d5.js";import"./utils-7d94707b.js";import"./Modal-3eb94ddf.js";import"./List-91c3af84.js";import"./createSvgIcon-1a708d24.js";function y(a){return async e=>{D.post(`${T.TIPO_DOC_FISC}`,a).then(i=>{e(v(i.data)),window.location.href="/app/docfisc/tipi"}).catch(i=>{e(C(i.message))})}}const K=()=>{const a=z(),[e,i]=o.useState({codice:"",descrizione:""}),[t,u]=o.useState({codice:!0,descrizione:!0}),c=s=>{const{name:d,value:m,required:b}=s.target;i({...e,[d]:m}),b&&u({...t,[d]:m.length<1})},[h,f]=o.useState(!0);o.useEffect(()=>{f(!Object.values(t).every(s=>s===!1))},[t]);const g=()=>{a(y(e))};return p(F,{children:[r(n,{mb:3,children:r(x,{variant:"h3",gutterBottom:!0,children:"Aggiungi Tipo di Doc. Fisc."})}),r(n,{children:r(j,{children:p(n,{p:2,children:[r(l,{label:"Codice",name:"codice",value:e.codice,error:t.codice,fullWidth:!0,required:!0,onChange:c,margin:"normal"}),r(l,{label:"Descrizione",name:"descrizione",value:e.descrizione,error:t.descrizione,fullWidth:!0,required:!0,onChange:c,margin:"normal"})]})})}),r(S,{handleClick:g,disabled:h})]})};export{K as default};