import{N as v,P as T,R as o,d as p,F as z,j as a,Q as E,S as P,U as x,V as y,H as I,M}from"./index-f5e212dc.js";import{a as h,E as g,u as F,b as O}from"./hooks-f59dde64.js";import{B as d}from"./Box-29b6b5b0.js";import{T as j}from"./Typography-1ac95247.js";import{P as _}from"./Paper-02d8886c.js";import{T as f}from"./TextField-e43dbfe8.js";import"./styled-f0c7c2b7.js";import"./List-a91e6c3e.js";import"./createSvgIcon-b0c7983e.js";function $(s,t){return async e=>{h.put(`${g.TIPO_DOC_FISC}/${s}`,t).then(i=>{e(v(i.data)),window.location.href="/admin/docfisc/tipi"}).catch(i=>{e(T(i.message))})}}const q=({dettagli:s})=>{const t=F(),[e,i]=o.useState({...s}),[r,c]=o.useState({codice:!1,descrizione:!1}),l=n=>{const{name:u,value:m,required:D}=n.target;i({...e,[u]:m}),D&&c({...r,[u]:m.length<1})},[S,b]=o.useState(!0);o.useEffect(()=>{b(!Object.values(r).every(n=>n===!1))},[r]);const C=()=>{t($(s.id,e))};return p(z,{children:[a(d,{mb:3,children:a(j,{variant:"h3",children:"Modifica Negozio"})}),a(d,{children:a(_,{children:p(d,{p:2,children:[a(f,{label:"Codice",name:"codice",value:e.codice,error:r.codice,fullWidth:!0,required:!0,onChange:l,margin:"normal"}),a(f,{label:"Descrizione",name:"descrizione",value:e.descrizione,error:r.descrizione,fullWidth:!0,required:!0,onChange:l,margin:"normal"})]})})}),a(E,{disabled:S,handleClick:C})]})};function A(s){return async t=>{h.get(`${g.TIPO_DOC_FISC}/${s}`).then(e=>{t(P(e.data))}).catch(e=>{t(x(e.message))})}}const U=()=>{const{id:s}=y(),t=F(),{dettagli:e,getting:i,getError:r}=O(c=>c.tipiDocFisc);return o.useEffect(()=>{s&&t(A(s))},[s]),i?a(I,{}):r?a(M,{message:r}):a(q,{dettagli:e})};export{U as default};