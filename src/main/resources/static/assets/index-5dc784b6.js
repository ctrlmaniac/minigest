import{D as m,R as d,j as r,P as h,a,F as f,B as n,L as u}from"./index-761b4989.js";import{E as g}from"./ErrorScreen-83758a8b.js";import{u as T,a as b}from"./hooks-9000e4c8.js";import{l as x}from"./list-152d70c5.js";import{T as E}from"./Typography-4033f764.js";import{A as v,I as y}from"./Alert-caf42b59.js";import{P as S}from"./Paper-1026d494.js";import{T as A,c as B,a as I,b as t}from"./TableRow-f3e30aef.js";import{I as j}from"./IconFile-fd1b92d0.js";import"./Container-e078e984.js";import"./index-30e337fd.js";import"./createSvgIcon-1320d625.js";import"./ButtonBase-242e16e9.js";import"./createReactComponent-62a25815.js";const J=()=>{const l=T(),c=m(),{listing:p,listError:o,list:i}=b(e=>e.scadenzario);return d.useEffect(()=>{l(x())},[]),p?r(h,{}):o?r(g,{message:o}):a(f,{children:[r(n,{mb:3,children:r(E,{variant:"h3",children:"Scadenzario"})}),u.isEmpty(i)?r(v,{severity:"success",children:"Non ci sono scadenze previste!"}):r(S,{children:r(n,{p:2,children:r(A,{children:r(B,{children:i==null?void 0:i.map(e=>a(I,{children:[r(t,{sx:{width:50},align:"center",children:r(y,{color:"info",onClick:()=>{var s;return c(`/app/docfisc/fatture/dettagli/${(s=e.fattura)==null?void 0:s.id}`)},children:r(j,{})})}),r(t,{children:e.data}),a(t,{align:"right",children:[e.importo," €"]})]},e.id))})})})})]})};export{J as default};
