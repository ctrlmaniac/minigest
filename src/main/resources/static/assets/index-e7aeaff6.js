import{aL as E,aM as I,D as v,a as n,F as S,j as r,B as c,aN as b,L as A,a7 as C,R as y,P as F}from"./index-2b476c4b.js";import{E as B}from"./ErrorScreen-77dd40d9.js";import{g as P}from"./get-ed29a25d.js";import{u as x,a as $}from"./hooks-d0ca0f61.js";import{a as z,E as L}from"./index-e540bbee.js";import{T as m}from"./Typography-47ae6b5f.js";import{G as t}from"./Grid-97347802.js";import{P as p}from"./Paper-8f109e83.js";import{T as l,a,b as i,c as d}from"./TableRow-e0e8211d.js";import{T as u}from"./TableHead-309921e7.js";import{A as R}from"./Alert-638b19da.js";import{C as j}from"./Container-e52cae71.js";import{S as N,I as k,a as T,b as w}from"./IconSettings-54b7046a.js";import{I as q}from"./IconTrash-accd6628.js";import"./useTheme-79cbfa36.js";import"./createSvgIcon-a1cd4e8e.js";import"./ButtonBase-7fb0decf.js";import"./Fab-b0ce07b6.js";import"./Grow-e54fd436.js";import"./utils-13c11dba.js";import"./Popper-5dc57fdc.js";import"./createReactComponent-c8daf7a1.js";function G(e){return async s=>{z.delete(`${L.FATTURE}/${e}`).then(h=>{s(E())}).catch(h=>{s(I(h.message))})}}const H=({dettagli:e})=>{const s=x(),h=v(),f=()=>{s(G(e.id)),h(-1)};return n(S,{children:[r(c,{mb:3,children:r(m,{variant:"h3",children:"Dettagli Fattura"})}),r(c,{mb:3,children:n(t,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"center",spacing:2,children:[r(t,{item:!0,xs:12,sm:6,children:r(p,{children:n(c,{p:2,children:[r(m,{variant:"h6",gutterBottom:!0,children:"Cedente"}),r(b,{to:`/app/aziende/dettagli/${e==null?void 0:e.cedente.id}`,children:e==null?void 0:e.cedente.denominazione})]})})}),r(t,{item:!0,xs:12,sm:6,children:r(p,{children:n(c,{p:2,children:[r(m,{variant:"h6",gutterBottom:!0,children:"Committente"}),r(b,{to:`/app/aziende/dettagli/${e==null?void 0:e.committente.id}`,children:e==null?void 0:e.committente.denominazione})]})})}),r(t,{item:!0,xs:12,children:r(p,{children:r(c,{p:2,children:n(l,{children:[r(u,{children:n(a,{children:[r(i,{children:"Data"}),r(i,{children:"Numero"}),r(i,{children:"Totale Documento"})]})}),r(d,{children:n(a,{children:[r(i,{children:e==null?void 0:e.data}),r(i,{children:e==null?void 0:e.numero}),n(i,{children:["€ ",e==null?void 0:e.totale]})]})})]})})})})]})}),r(c,{mb:3,children:r(p,{children:n(c,{p:2,children:[r(m,{variant:"h6",children:"Reparti"}),n(l,{children:[r(u,{children:n(a,{children:[r(i,{children:"Aliquota"}),r(i,{children:"Imponibile"}),r(i,{children:"imposta"})]})}),r(d,{children:e==null?void 0:e.reparti.map(o=>n(a,{children:[n(i,{children:["% ",o.aliquota]}),n(i,{children:["€ ",o.imponibile]}),n(i,{children:["€ ",o.imposta]})]},o.id))})]})]})})}),r(c,{mb:3,children:r(p,{children:n(c,{p:2,children:[r(m,{variant:"h6",children:"Scadenze"}),n(l,{children:[r(u,{children:n(a,{children:[r(i,{children:"Data"}),r(i,{children:"Importo"})]})}),r(d,{children:e==null?void 0:e.scadenze.map(o=>n(a,{children:[r(i,{children:o.data}),n(i,{children:["€ ",o.importo]})]},o.id))})]})]})})}),r(c,{mb:3,children:r(p,{children:n(c,{p:2,children:[r(m,{variant:"h6",gutterBottom:!0,children:"Pagamenti"}),A.isEmpty(e.pagamenti)?r(R,{severity:"warning",children:"Non sono stati registrati pagamenti!"}):n(l,{children:[r(u,{children:n(a,{children:[r(i,{children:"Data"}),r(i,{children:"Importo"})]})}),r(d,{children:e==null?void 0:e.pagamenti.map(o=>n(a,{children:[r(i,{children:o.data}),n(i,{children:["€ ",o.importo]})]},o.id))})]})]})})}),r(c,{sx:{position:"fixed",bottom:16,right:16},children:r(j,{sx:{textAlign:"right"},children:n(N,{ariaLabel:"azioni su fatture",icon:r(k,{}),children:[r(T,{icon:r(w,{}),tooltipTitle:"modifica",onClick:()=>h(`/app/docfisc/fatture/modifica/${e==null?void 0:e.id}`)}),r(T,{icon:r(q,{}),tooltipTitle:"elimina",onClick:f})]})})})]})},mr=()=>{const{id:e}=C(),s=x();v();const{dettagli:h,getting:f,getError:o}=$(D=>D.fatture);return y.useEffect(()=>{e&&s(P(e))},[e]),f?r(F,{}):o?r(B,{message:o}):r(H,{dettagli:h})};export{mr as default};