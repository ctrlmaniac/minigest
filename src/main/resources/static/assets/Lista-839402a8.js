import{D as p,R as c,j as r,P as d,a,F as l,B as e,L as f}from"./index-f96e3560.js";import{A as h}from"./AddFab-5e11b3b7.js";import{E as g}from"./ErrorScreen-798cc366.js";import{l as u}from"./list-5903d305.js";import{u as L,a as A}from"./hooks-9f30ad4b.js";import{T as x}from"./Typography-4d9115c9.js";import{A as E}from"./Alert-bac571b5.js";import{P as y}from"./Paper-661358a8.js";import{L as v}from"./List-22de0ac9.js";import{L as z,a as j}from"./ListItemText-42654c20.js";import"./Container-8d72809c.js";import"./Fab-443a133d.js";import"./ButtonBase-2e279362.js";import"./createReactComponent-6e8dbf88.js";import"./index-e540bbee.js";import"./createSvgIcon-b6946a7a.js";import"./listItemTextClasses-0966e412.js";const J=()=>{const o=L(),n=p(),{list:t,listing:m,listError:s}=A(i=>i.aziende);return c.useEffect(()=>{o(u())},[]),m?r(d,{}):s?r(g,{message:s}):a(l,{children:[a(e,{mb:3,children:[r(x,{variant:"h3",component:"h1",children:"Lista Aziende"}),f.isEmpty(t)&&r(E,{severity:"warning",children:"Non ci sono aziende!"})]}),r(e,{children:r(y,{children:r(e,{p:2,children:r(v,{children:t==null?void 0:t.map(i=>r(z,{onClick:()=>n(`/app/aziende/dettagli/${i.id}`),children:r(j,{primary:i.denominazione})},i.id))})})})}),r(h,{href:"/app/aziende/aggiungi"})]})};export{J as default};