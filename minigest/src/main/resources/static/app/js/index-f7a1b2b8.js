import{i as g,R as n,d as o,F as v,j as e,l,af as x}from"./index-4508a384.js";import{f as y,e as z,B as t,T as m,P as c}from"./hooks-feb29949.js";import{l as A}from"./list-cd0a94f7.js";import{T as L,a as E}from"./TextField-0bc7661e.js";import{L as T}from"./LinearProgress-29fadb87.js";import{A as d}from"./Alert-79195361.js";import{L as B,a as b}from"./ListItemText-fe60f9c6.js";import"./index-638748d8.js";import"./useFormControl-3c13f0cf.js";import"./Grow-e4ee19b9.js";const W=()=>{const p=g(),h=y(),{list:r,listing:f,listError:s}=z(i=>i.aziende),[a,u]=n.useState("");return n.useEffect(()=>{h(A(a))},[a]),o(v,{children:[e(t,{mb:3,children:e(m,{variant:"h3",children:"Aziende"})}),o(t,{mb:3,children:[e(c,{children:o(t,{p:2,children:[e(m,{variant:"h6",gutterBottom:!0,children:"Ricerca per denominazione"}),e(L,{label:"denominazione",value:a,onChange:i=>u(i.target.value),fullWidth:!0})]})}),f&&e(T,{})]}),!l.isEmpty(s)&&e(d,{severity:"error",children:s||"errore di caricamento"}),l.isEmpty(r)?e(d,{severity:"info",children:"Non ci sono aziende"}):e(c,{children:e(t,{p:2,children:e(E,{children:r==null?void 0:r.map(i=>e(B,{onClick:()=>p("dettagli/"+i.id),children:e(b,{primary:i.denominazione})},i.id))})})}),e(x,{href:"aziende/aggiungi"})]})};export{W as default};
