import{ar as d,as as h,D as f,R as u,j as i,P as g,a as t,F as T,B as c}from"./index-2b476c4b.js";import{A as F}from"./AddFab-a9580b1c.js";import{E as I}from"./ErrorScreen-77dd40d9.js";import{l as b}from"./list-624002b9.js";import{a as v,E}from"./index-e540bbee.js";import{u as x,a as D}from"./hooks-d0ca0f61.js";import{T as C}from"./Typography-47ae6b5f.js";import{P as S}from"./Paper-8f109e83.js";import{T as w,c as y,a as A,b as s}from"./TableRow-e0e8211d.js";import{I as l}from"./Alert-638b19da.js";import{I as B}from"./IconEdit-1b52bae8.js";import{I as P}from"./IconTrash-accd6628.js";import"./Container-e52cae71.js";import"./Fab-b0ce07b6.js";import"./ButtonBase-7fb0decf.js";import"./createReactComponent-c8daf7a1.js";import"./createSvgIcon-a1cd4e8e.js";function R(o){return async a=>{v.delete(`${E.TIPO_DOC_FISC}/${o}`).then(e=>{a(d(o))}).catch(e=>{a(h(e.message))})}}const W=()=>{const o=x(),a=f(),{list:e,listing:m,listError:n}=D(r=>r.tipiDocFisc);u.useEffect(()=>{o(b())},[]);const p=r=>{o(R(r))};return m?i(g,{}):n?i(I,{message:n}):t(T,{children:[i(c,{mb:3,children:i(C,{variant:"h3",children:"Tipi di Documenti Fiscali"})}),i(c,{children:i(S,{children:i(c,{p:2,children:i(w,{children:i(y,{children:e==null?void 0:e.map(r=>t(A,{children:[i(s,{children:r.codice}),i(s,{children:r.descrizione}),i(s,{sx:{width:50},align:"center",children:i(l,{color:"warning",onClick:()=>a("/app/docfisc/tipi/modifica/"+r.id),children:i(B,{})})}),i(s,{sx:{width:50},align:"center",children:i(l,{color:"error",onClick:()=>p(r.id),children:i(P,{})})})]},r.id))})})})})}),i(F,{href:"/app/docfisc/tipi/aggiungi"})]})};export{W as default};