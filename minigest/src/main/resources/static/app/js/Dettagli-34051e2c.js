import{ai as D,i as y,R as B,l as o,j as e,B as A,V as F,d as i,F as x,aj as j,aJ as P}from"./index-8d810eb5.js";import{f as S,e as C,B as s,T as d,P as u}from"./hooks-29c1883f.js";import{g as N}from"./get-c556b372.js";import{r as V}from"./remove-5e3713fe.js";import{T as p,b as c,c as r,a as f}from"./TableRow-7bd9e227.js";import{T as g}from"./TableHead-49d1eeb5.js";import{S as k}from"./Snackbar-ee143c36.js";import{A as q}from"./Alert-ac51448d.js";import"./index-369028e4.js";const M=()=>{const{id:t}=D(),h=S(),m=y(),{getting:T,getError:b,response:n,dettagli:l,removeError:v,removing:E}=C(a=>a.chiusureFiscali);B.useEffect(()=>{o.isEmpty(t)||h(N(t))},[t]);const R=()=>{h(V(t)),setTimeout(()=>{P(),m("/docfisc/chiusure-fiscali")},1e3)};return T?e(A,{}):b||o.isEmpty(l)?e(F,{message:n||"Errore caricamento chiusura fiscale"}):i(x,{children:[e(s,{mb:3,children:e(d,{variant:"h3",children:"Dettagli Chiusura Fiscale"})}),e(s,{mb:3,children:e(u,{children:i(s,{p:2,children:[e(d,{variant:"h6",gutterBottom:!0,children:"Riepilogo"}),i(p,{children:[e(g,{children:i(c,{children:[e(r,{children:"Data"}),e(r,{children:"Totale"}),e(r,{children:"N.D.F"})]})}),e(f,{children:i(c,{children:[e(r,{children:l.data}),i(r,{children:["€ ",l.totale]}),e(r,{children:l.numeroDocFisc})]})})]})]})})}),e(s,{children:e(u,{children:i(s,{p:2,children:[e(d,{variant:"h6",gutterBottom:!0,children:"Reparti"}),i(p,{children:[e(g,{children:i(c,{children:[e(r,{children:"Reparto"}),e(r,{children:"Totale"}),e(r,{children:"Annulli"}),e(r,{children:"Resi"})]})}),e(f,{children:l.reparti.map(a=>i(c,{children:[i(r,{children:["%",a.aliquota]}),i(r,{children:["€ ",a.totale]}),i(r,{children:["€ ",a.totaleAnnulli]}),i(r,{children:["€ ",a.totaleResi]})]},a.id))})]})]})})}),e(j,{loading:E,handleDelete:()=>R(),handleEdit:()=>m(`/docfisc/chiusure-fiscali/modifica/${l.id}`)}),e(k,{open:!o.isEmpty(n),children:e(q,{severity:v?"error":"success",children:n})})]})};export{M as default};
