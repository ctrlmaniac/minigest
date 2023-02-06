import{Q as b,ad as x,R as D,j as i,a1 as A,a as e,F as C,B as c}from"./index-5f51ca44.js";import{E as F}from"./ErrorScreen-79d85a92.js";import{u as S,a as g}from"./hooks-1f293e4f.js";import{g as R}from"./get-a94c8693.js";import{r as v}from"./remove-84b91fdc.js";import{T as I}from"./Typography-6ee06c79.js";import{P as m}from"./Paper-cffb93af.js";import{T as d,c as p,a as n,b as o}from"./TableRow-500111fc.js";import{T as w}from"./TableHead-1b4dafed.js";import{C as E}from"./Container-87c2bf1f.js";import{S as P,I as j,a as u,b as y}from"./IconSettings-d4c0d321.js";import{I as B}from"./IconTrash-e38c8d7f.js";import"./Alert-368acf87.js";import"./createSvgIcon-1a708d24.js";import"./ButtonBase-8b0d506c.js";import"./index-30e337fd.js";import"./useTheme-90c811d5.js";import"./Fab-998d6591.js";import"./Grow-62fe4847.js";import"./utils-7d94707b.js";import"./Popper-c4af9e57.js";import"./createReactComponent-ea0485c8.js";const ei=()=>{const l=b(),t=S(),{id:s}=x(),{dettagli:r,getting:f,getError:h}=g(a=>a.chiusureFiscali);D.useEffect(()=>{s&&t(R(s))},[s]);const T=a=>{t(v(a)),l("/app/docfisc/chiusure-fiscali")};return f?i(A,{}):h?i(F,{message:h}):e(C,{children:[i(c,{mb:3,children:i(I,{variant:"h3",children:"Dettagli Chiusura Fiscale"})}),i(c,{mb:3,children:i(m,{children:i(c,{p:2,children:i(d,{children:e(p,{children:[e(n,{children:[i(o,{sx:{width:150},children:"Data"}),i(o,{children:r==null?void 0:r.data})]}),e(n,{children:[i(o,{sx:{width:150},children:"Totale"}),e(o,{children:["€ ",r==null?void 0:r.totale]})]}),e(n,{children:[i(o,{sx:{width:150},children:"Num. D.F."}),i(o,{children:r==null?void 0:r.numeroDocFisc})]})]})})})})}),r==null?void 0:r.reparti.map(a=>i(c,{mb:3,children:i(m,{children:i(c,{p:2,children:e(d,{children:[i(w,{children:e(n,{children:[i(o,{children:"Aliquota"}),i(o,{children:"Totale"}),i(o,{children:"Annulli"}),i(o,{children:"Resi"})]})}),i(p,{children:e(n,{children:[e(o,{children:["% ",a.aliquota]}),e(o,{children:["€ ",a.totale]}),e(o,{children:["€ ",a.totaleAnnulli]}),e(o,{children:["€ ",a.totaleResi]})]})})]})})})},a.id)),i(c,{sx:{position:"fixed",bottom:16,right:16},children:i(E,{sx:{textAlign:"right"},children:e(P,{ariaLabel:"azioni su chiusure fiscali",icon:i(j,{}),children:[i(u,{icon:i(y,{}),tooltipTitle:"modifica",onClick:()=>l(`/app/docfisc/chiusure-fiscali/modifica/${r==null?void 0:r.id}`)}),i(u,{icon:i(B,{}),tooltipTitle:"elimina",onClick:()=>T(r==null?void 0:r.id)})]})})})]})};export{ei as default};
