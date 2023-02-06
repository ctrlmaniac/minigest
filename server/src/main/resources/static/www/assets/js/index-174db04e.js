import{aR as k,aS as D,Q as C,a as n,F as A,B as o,j as r,aT as b,aU as S,aV as E,Y as F,ad as B,R,a1 as $}from"./index-5f51ca44.js";import{E as w}from"./ErrorScreen-79d85a92.js";import{g as M}from"./get-9f694a12.js";import{u as y,a as P}from"./hooks-1f293e4f.js";import{a as j,E as z}from"./index-30e337fd.js";import{T as m}from"./Typography-6ee06c79.js";import{A as v}from"./Alert-368acf87.js";import{G as l}from"./Grid-8800b093.js";import{P as t}from"./Paper-cffb93af.js";import{T as p,a,b as i,c as d}from"./TableRow-500111fc.js";import{T as u}from"./TableHead-1b4dafed.js";import{c as I}from"./createReactComponent-ea0485c8.js";import{C as L}from"./Container-87c2bf1f.js";import{S as N,I as q,a as T,b as G}from"./IconSettings-d4c0d321.js";import{I as U}from"./IconTrash-e38c8d7f.js";import"./createSvgIcon-1a708d24.js";import"./ButtonBase-8b0d506c.js";import"./useTheme-90c811d5.js";import"./Fab-998d6591.js";import"./Grow-62fe4847.js";import"./utils-7d94707b.js";import"./Popper-c4af9e57.js";var H=I("alert-circle","IconAlertCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 8l0 4",key:"svg-1"}],["path",{d:"M12 16l.01 0",key:"svg-2"}]]),Q=I("circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]]);function V(e){return async s=>{j.delete(`${z.FATTURE}/${e}`).then(h=>{s(k())}).catch(h=>{s(D(h.message))})}}const Y=({dettagli:e})=>{const s=y(),h=C(),f=()=>{s(V(e.id)),h(-1)};return n(A,{children:[n(o,{mb:3,children:[r(m,{variant:"h3",gutterBottom:!0,children:"Dettagli Fattura"}),e.evasa?r(v,{severity:"success",children:"Fattura pagata!"}):r(v,{severity:"warning",children:"Fattura da pagare!"})]}),r(o,{mb:3,children:n(l,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"center",spacing:2,children:[r(l,{item:!0,xs:12,sm:6,children:r(t,{children:n(o,{p:2,children:[r(m,{variant:"h6",gutterBottom:!0,children:"Cedente"}),r(b,{to:`/app/aziende/dettagli/${e==null?void 0:e.cedente.id}`,children:e==null?void 0:e.cedente.denominazione})]})})}),r(l,{item:!0,xs:12,sm:6,children:r(t,{children:n(o,{p:2,children:[r(m,{variant:"h6",gutterBottom:!0,children:"Committente"}),r(b,{to:`/app/aziende/dettagli/${e==null?void 0:e.committente.id}`,children:e==null?void 0:e.committente.denominazione})]})})}),r(l,{item:!0,xs:12,children:r(t,{children:r(o,{p:2,children:n(p,{children:[r(u,{children:n(a,{children:[r(i,{children:"Data"}),r(i,{children:"Numero"}),r(i,{children:"Totale Documento"})]})}),r(d,{children:n(a,{children:[r(i,{children:e==null?void 0:e.data}),r(i,{children:e==null?void 0:e.numero}),n(i,{children:["€ ",e==null?void 0:e.totale]})]})})]})})})})]})}),r(o,{mb:3,children:r(t,{children:n(o,{p:2,children:[r(m,{variant:"h6",children:"Reparti"}),n(p,{children:[r(u,{children:n(a,{children:[r(i,{children:"Aliquota"}),r(i,{children:"Imponibile"}),r(i,{children:"Imposta"})]})}),r(d,{children:e==null?void 0:e.reparti.map(c=>n(a,{children:[n(i,{children:["% ",c.aliquota]}),n(i,{children:["€ ",c.imponibile]}),n(i,{children:["€ ",c.imposta]})]},c.id))})]})]})})}),r(o,{mb:3,children:r(t,{children:n(o,{p:2,children:[r(m,{variant:"h6",children:"Scadenze"}),n(p,{children:[r(u,{children:n(a,{children:[r(i,{sx:{width:50},align:"center"}),r(i,{children:"Data"}),r(i,{align:"right",children:"Importo"})]})}),r(d,{children:e==null?void 0:e.scadenze.map(c=>n(a,{children:[r(i,{children:c.pagato?r(Q,{color:S[500]}):r(H,{color:E[500]})}),r(i,{children:c.data}),n(i,{align:"right",children:[c.importo," €"]})]},c.id))})]})]})})}),r(o,{mb:3,children:r(t,{children:n(o,{p:2,children:[r(m,{variant:"h6",gutterBottom:!0,children:"Pagamenti"}),F.isEmpty(e.pagamenti)?r(v,{severity:"warning",children:"Non sono stati registrati pagamenti!"}):n(p,{children:[r(u,{children:n(a,{children:[r(i,{children:"Data"}),r(i,{children:"Importo"})]})}),r(d,{children:e==null?void 0:e.pagamenti.map(c=>n(a,{children:[r(i,{children:c.data}),n(i,{children:["€ ",c.importo]})]},c.id))})]})]})})}),r(o,{sx:{position:"fixed",bottom:16,right:16},children:r(L,{sx:{textAlign:"right"},children:n(N,{ariaLabel:"azioni su fatture",icon:r(q,{}),children:[r(T,{icon:r(G,{}),tooltipTitle:"modifica",onClick:()=>h(`/app/docfisc/fatture/modifica/${e==null?void 0:e.id}`)}),r(T,{icon:r(U,{}),tooltipTitle:"elimina",onClick:f})]})})})]})},ur=()=>{const{id:e}=B(),s=y();C();const{dettagli:h,getting:f,getError:c}=P(x=>x.fatture);return R.useEffect(()=>{e&&s(M(e))},[e]),f?r($,{}):c?r(w,{message:c}):r(Y,{dettagli:h})};export{ur as default};