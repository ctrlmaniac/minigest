import{Q as d,j as i,a as r,F as l,B as e}from"./index-5f51ca44.js";import{A as c}from"./AddFab-97602b3a.js";import{a as m}from"./hooks-1f293e4f.js";import{L as g}from"./List-91c3af84.js";import{L as h,a as f}from"./ListItemText-e12a29ea.js";import{T as o}from"./Typography-6ee06c79.js";import{P as z}from"./Paper-cffb93af.js";import"./Container-87c2bf1f.js";import"./Fab-998d6591.js";import"./ButtonBase-8b0d506c.js";import"./createReactComponent-ea0485c8.js";import"./listItemTextClasses-ef53c19d.js";const C=()=>{const p=d(),{listByAzienda:n}=m(t=>t.negozi),{selected:a}=m(t=>t.aziende);let s=i(o,{children:"Caricamento in corso..."});return n&&(s=i(g,{children:n.map(t=>i(h,{onClick:()=>p(`/app/negozi/dettagli/${t.id}`),children:i(f,{primary:t.nome})},t.id))})),r(l,{children:[r(e,{mb:3,children:[i(o,{variant:"h3",gutterBottom:!0,children:"Lista Negozi"}),r(o,{children:["Negozi dell'azienda selezionata: ",a==null?void 0:a.denominazione]})]}),i(e,{children:i(z,{children:i(e,{p:2,children:s})})}),i(c,{href:"/app/negozi/aggiungi"})]})};export{C as default};