import{Q as p,R as c,j as r,a1 as d,a,F as l,B as e,Y as f}from"./index-5f51ca44.js";import{A as h}from"./AddFab-97602b3a.js";import{E as g}from"./ErrorScreen-79d85a92.js";import{l as u}from"./list-046f23af.js";import{u as A,a as L}from"./hooks-1f293e4f.js";import{T as x}from"./Typography-6ee06c79.js";import{A as E}from"./Alert-368acf87.js";import{P as y}from"./Paper-cffb93af.js";import{L as v}from"./List-91c3af84.js";import{L as z,a as j}from"./ListItemText-e12a29ea.js";import"./Container-87c2bf1f.js";import"./Fab-998d6591.js";import"./ButtonBase-8b0d506c.js";import"./createReactComponent-ea0485c8.js";import"./index-30e337fd.js";import"./createSvgIcon-1a708d24.js";import"./listItemTextClasses-ef53c19d.js";const G=()=>{const o=A(),n=p(),{list:t,listing:m,listError:s}=L(i=>i.aziende);return c.useEffect(()=>{o(u())},[]),m?r(d,{}):s?r(g,{message:s}):a(l,{children:[a(e,{mb:3,children:[r(x,{variant:"h3",component:"h1",children:"Lista Aziende"}),f.isEmpty(t)&&r(E,{severity:"warning",children:"Non ci sono aziende!"})]}),r(e,{children:r(y,{children:r(e,{p:2,children:r(v,{children:t==null?void 0:t.map(i=>r(z,{onClick:()=>n(`/app/aziende/dettagli/${i.id}`),children:r(j,{primary:i.denominazione})},i.id))})})})}),r(h,{href:"/app/aziende/aggiungi"})]})};export{G as default};