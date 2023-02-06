import{aD as E,aE as v,R as o,a as p,F as T,j as a,B as d,aF as z,aG as x,ad as y,a1 as I}from"./index-5f51ca44.js";import{E as O}from"./ErrorScreen-79d85a92.js";import{u as h,a as P}from"./hooks-1f293e4f.js";import{S as j}from"./SaveFab-142d182a.js";import{a as g,E as S}from"./index-30e337fd.js";import{T as _}from"./Typography-6ee06c79.js";import{P as $}from"./Paper-cffb93af.js";import{T as f}from"./TextField-fd5a3e96.js";import"./Container-87c2bf1f.js";import"./Alert-368acf87.js";import"./createSvgIcon-1a708d24.js";import"./ButtonBase-8b0d506c.js";import"./Fab-998d6591.js";import"./createReactComponent-ea0485c8.js";import"./Grow-62fe4847.js";import"./useTheme-90c811d5.js";import"./utils-7d94707b.js";import"./Modal-3eb94ddf.js";import"./List-91c3af84.js";function q(r,t){return async e=>{g.put(`${S.TIPO_DOC_FISC}/${r}`,t).then(s=>{e(E(s.data)),window.location.href="/app/docfisc/tipi"}).catch(s=>{e(v(s.message))})}}const M=({dettagli:r})=>{const t=h(),[e,s]=o.useState({...r}),[i,c]=o.useState({codice:!1,descrizione:!1}),m=n=>{const{name:l,value:u,required:D}=n.target;s({...e,[l]:u}),D&&c({...i,[l]:u.length<1})},[F,b]=o.useState(!0);o.useEffect(()=>{b(!Object.values(i).every(n=>n===!1))},[i]);const C=()=>{t(q(r.id,e))};return p(T,{children:[a(d,{mb:3,children:a(_,{variant:"h3",children:"Modifica Negozio"})}),a(d,{children:a($,{children:p(d,{p:2,children:[a(f,{label:"Codice",name:"codice",value:e.codice,error:i.codice,fullWidth:!0,required:!0,onChange:m,margin:"normal"}),a(f,{label:"Descrizione",name:"descrizione",value:e.descrizione,error:i.descrizione,fullWidth:!0,required:!0,onChange:m,margin:"normal"})]})})}),a(j,{disabled:F,handleClick:C})]})};function w(r){return async t=>{g.get(`${S.TIPO_DOC_FISC}/${r}`).then(e=>{t(z(e.data))}).catch(e=>{t(x(e.message))})}}const ae=()=>{const{id:r}=y(),t=h(),{dettagli:e,getting:s,getError:i}=P(c=>c.tipiDocFisc);return o.useEffect(()=>{r&&t(w(r))},[r]),s?a(I,{}):i?a(O,{message:i}):a(M,{dettagli:e})};export{ae as default};