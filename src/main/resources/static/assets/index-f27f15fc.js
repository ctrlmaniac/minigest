import{aN as D,aO as k,D as T,a as n,F as A,B as o,j as r,aP as b,aQ as E,aR as F,L as S,a9 as B,R as P,P as R}from"./index-761b4989.js";import{E as $}from"./ErrorScreen-83758a8b.js";import{g as w}from"./get-011ff649.js";import{u as y,a as M}from"./hooks-9000e4c8.js";import{a as j,E as z}from"./index-30e337fd.js";import{T as m}from"./Typography-4033f764.js";import{A as v}from"./Alert-caf42b59.js";import{G as l}from"./Grid-c7d0a2fe.js";import{P as t}from"./Paper-1026d494.js";import{T as p,a,b as i,c as d}from"./TableRow-f3e30aef.js";import{T as u}from"./TableHead-7c58f24d.js";import{c as I}from"./createReactComponent-62a25815.js";import{C as L}from"./Container-e078e984.js";import{S as N,I as q,a as C,b as G}from"./IconSettings-2bdba085.js";import{I as H}from"./IconTrash-7b2f8fcb.js";import"./createSvgIcon-1320d625.js";import"./ButtonBase-242e16e9.js";import"./useTheme-167c9bfa.js";import"./Fab-0c52d3ca.js";import"./Grow-3595db16.js";import"./utils-b42c4e0c.js";import"./Popper-533f8ce2.js";var O=I("alert-circle","IconAlertCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M12 8l0 4",key:"svg-1"}],["path",{d:"M12 16l.01 0",key:"svg-2"}]]),Q=I("circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]]);function U(e){return async s=>{j.delete(`${z.FATTURE}/${e}`).then(h=>{s(D())}).catch(h=>{s(k(h.message))})}}const J=({dettagli:e})=>{const s=y(),h=T(),f=()=>{s(U(e.id)),h(-1)};return n(A,{children:[n(o,{mb:3,children:[r(m,{variant:"h3",gutterBottom:!0,children:"Dettagli Fattura"}),e.evasa?r(v,{severity:"success",children:"Fattura pagata!"}):r(v,{severity:"warning",children:"Fattura da pagare!"})]}),r(o,{mb:3,children:n(l,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"center",spacing:2,children:[r(l,{item:!0,xs:12,sm:6,children:r(t,{children:n(o,{p:2,children:[r(m,{variant:"h6",gutterBottom:!0,children:"Cedente"}),r(b,{to:`/app/aziende/dettagli/${e==null?void 0:e.cedente.id}`,children:e==null?void 0:e.cedente.denominazione})]})})}),r(l,{item:!0,xs:12,sm:6,children:r(t,{children:n(o,{p:2,children:[r(m,{variant:"h6",gutterBottom:!0,children:"Committente"}),r(b,{to:`/app/aziende/dettagli/${e==null?void 0:e.committente.id}`,children:e==null?void 0:e.committente.denominazione})]})})}),r(l,{item:!0,xs:12,children:r(t,{children:r(o,{p:2,children:n(p,{children:[r(u,{children:n(a,{children:[r(i,{children:"Data"}),r(i,{children:"Numero"}),r(i,{children:"Totale Documento"})]})}),r(d,{children:n(a,{children:[r(i,{children:e==null?void 0:e.data}),r(i,{children:e==null?void 0:e.numero}),n(i,{children:["€ ",e==null?void 0:e.totale]})]})})]})})})})]})}),r(o,{mb:3,children:r(t,{children:n(o,{p:2,children:[r(m,{variant:"h6",children:"Reparti"}),n(p,{children:[r(u,{children:n(a,{children:[r(i,{children:"Aliquota"}),r(i,{children:"Imponibile"}),r(i,{children:"Imposta"})]})}),r(d,{children:e==null?void 0:e.reparti.map(c=>n(a,{children:[n(i,{children:["% ",c.aliquota]}),n(i,{children:["€ ",c.imponibile]}),n(i,{children:["€ ",c.imposta]})]},c.id))})]})]})})}),r(o,{mb:3,children:r(t,{children:n(o,{p:2,children:[r(m,{variant:"h6",children:"Scadenze"}),n(p,{children:[r(u,{children:n(a,{children:[r(i,{sx:{width:50},align:"center"}),r(i,{children:"Data"}),r(i,{align:"right",children:"Importo"})]})}),r(d,{children:e==null?void 0:e.scadenze.map(c=>n(a,{children:[r(i,{children:c.pagato?r(Q,{color:E[500]}):r(O,{color:F[500]})}),r(i,{children:c.data}),n(i,{align:"right",children:[c.importo," €"]})]},c.id))})]})]})})}),r(o,{mb:3,children:r(t,{children:n(o,{p:2,children:[r(m,{variant:"h6",gutterBottom:!0,children:"Pagamenti"}),S.isEmpty(e.pagamenti)?r(v,{severity:"warning",children:"Non sono stati registrati pagamenti!"}):n(p,{children:[r(u,{children:n(a,{children:[r(i,{children:"Data"}),r(i,{children:"Importo"})]})}),r(d,{children:e==null?void 0:e.pagamenti.map(c=>n(a,{children:[r(i,{children:c.data}),n(i,{children:["€ ",c.importo]})]},c.id))})]})]})})}),r(o,{sx:{position:"fixed",bottom:16,right:16},children:r(L,{sx:{textAlign:"right"},children:n(N,{ariaLabel:"azioni su fatture",icon:r(q,{}),children:[r(C,{icon:r(G,{}),tooltipTitle:"modifica",onClick:()=>h(`/app/docfisc/fatture/modifica/${e==null?void 0:e.id}`)}),r(C,{icon:r(H,{}),tooltipTitle:"elimina",onClick:f})]})})})]})},ur=()=>{const{id:e}=B(),s=y();T();const{dettagli:h,getting:f,getError:c}=M(x=>x.fatture);return P.useEffect(()=>{e&&s(w(e))},[e]),f?r(R,{}):c?r($,{message:c}):r(J,{dettagli:h})};export{ur as default};
