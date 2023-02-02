import{aL as S,aM as C,a7 as I,D as E,R as A,j as e,P as F,a as r,F as g,B as a,aN as T}from"./index-f96e3560.js";import{E as y}from"./ErrorScreen-798cc366.js";import{g as z}from"./get-7e1f4f38.js";import{a as B,E as P}from"./index-e540bbee.js";import{u as R,a as $}from"./hooks-9f30ad4b.js";import{T as s}from"./Typography-4d9115c9.js";import{G as h}from"./Grid-544d987d.js";import{P as d}from"./Paper-661358a8.js";import{T as p,a as c,b as n,c as u}from"./TableRow-3feee7d7.js";import{T as f}from"./TableHead-fa078fde.js";import{C as j}from"./Container-8d72809c.js";import{S as L,I as k,a as x,b as N}from"./IconSettings-562748c9.js";import{I as q}from"./IconTrash-0d016c1d.js";import"./Alert-bac571b5.js";import"./createSvgIcon-b6946a7a.js";import"./ButtonBase-2e279362.js";import"./useTheme-935eac68.js";import"./Fab-443a133d.js";import"./Grow-214d7052.js";import"./utils-78862c06.js";import"./Popper-7ebb6a2e.js";import"./createReactComponent-6e8dbf88.js";function w(t){return async l=>{B.delete(`${P.FATTURE}/${t}`).then(m=>{l(S())}).catch(m=>{l(C(m.message))})}}const le=()=>{const{id:t}=I(),l=R(),m=E(),{dettagli:i,getting:v,getError:b}=$(o=>o.fatture);A.useEffect(()=>{t&&l(z(t))},[t]);const D=()=>{l(w(t)),m(-1)};return v?e(F,{}):b?e(y,{message:b}):r(g,{children:[e(a,{mb:3,children:e(s,{variant:"h3",children:"Dettagli Fattura"})}),e(a,{mb:3,children:r(h,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"center",spacing:2,children:[e(h,{item:!0,xs:12,sm:6,children:e(d,{children:r(a,{p:2,children:[e(s,{variant:"h6",gutterBottom:!0,children:"Cedente"}),e(T,{to:`/app/aziende/dettagli/${i==null?void 0:i.cedente.id}`,children:i==null?void 0:i.cedente.denominazione})]})})}),e(h,{item:!0,xs:12,sm:6,children:e(d,{children:r(a,{p:2,children:[e(s,{variant:"h6",gutterBottom:!0,children:"Committente"}),e(T,{to:`/app/aziende/dettagli/${i==null?void 0:i.committente.id}`,children:i==null?void 0:i.committente.denominazione})]})})}),e(h,{item:!0,xs:12,children:e(d,{children:e(a,{p:2,children:r(p,{children:[e(f,{children:r(c,{children:[e(n,{children:"Data"}),e(n,{children:"Numero"}),e(n,{children:"Totale Documento"})]})}),e(u,{children:r(c,{children:[e(n,{children:i==null?void 0:i.data}),e(n,{children:i==null?void 0:i.numero}),r(n,{children:["€ ",i==null?void 0:i.totale]})]})})]})})})})]})}),e(a,{mb:3,children:e(d,{children:r(a,{p:2,children:[e(s,{variant:"h6",children:"Reparti"}),r(p,{children:[e(f,{children:r(c,{children:[e(n,{children:"Aliquota"}),e(n,{children:"Imponibile"}),e(n,{children:"imposta"})]})}),e(u,{children:i==null?void 0:i.reparti.map(o=>r(c,{children:[r(n,{children:["% ",o.aliquota]}),r(n,{children:["€ ",o.imponibile]}),r(n,{children:["€ ",o.imposta]})]},o.id))})]})]})})}),e(a,{mb:3,children:e(d,{children:r(a,{p:2,children:[e(s,{variant:"h6",children:"Scadenze"}),r(p,{children:[e(f,{children:r(c,{children:[e(n,{children:"Data"}),e(n,{children:"Importo"})]})}),e(u,{children:i==null?void 0:i.scadenze.map(o=>r(c,{children:[e(n,{children:o.data}),r(n,{children:["€ ",o.importo]})]},o.id))})]})]})})}),e(a,{sx:{position:"fixed",bottom:16,right:16},children:e(j,{sx:{textAlign:"right"},children:r(L,{ariaLabel:"azioni su fatture",icon:e(k,{}),children:[e(x,{icon:e(N,{}),tooltipTitle:"modifica",onClick:()=>m(`/app/docfisc/fatture/modifica/${i==null?void 0:i.id}`)}),e(x,{icon:e(q,{}),tooltipTitle:"elimina",onClick:D})]})})})]})};export{le as default};