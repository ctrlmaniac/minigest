import{aF as z,aG as T,aH as F,i as C,R as x,l as s,d as o,F as p,j as e,ac as b,aI as S}from"./index-c637eda0.js";import{a as A,E as k,I as t}from"./index-450aab6b.js";import{f as w,e as u,B as d,T as D,P as R}from"./hooks-edca5f41.js";import{r as B}from"./remove-c10240c4.js";import{A as h}from"./Alert-ab1cdef6.js";import{A as P}from"./AlertTitle-cb5e6684.js";import{I as $}from"./IconBuildingStore-f72ececc.js";import{T as j,b as g,c as a,a as H}from"./TableRow-70220851.js";import{T as N}from"./TableHead-bdf09698.js";import{c as M}from"./createReactComponent-23dfa4e0.js";import{I as v}from"./IconPencil-e075d05c.js";import{I as f}from"./IconTrash-3f20ee64.js";import{S as U}from"./Snackbar-b1c4388f.js";var y=M("file","IconFile",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}]]);function G(c){return async l=>{l(z()),A.get(`${k.CHIUSURE_FISCALI}?negozio=${c}`).then(i=>{l(T(i.data))}).catch(i=>{let n="Errore";i.response?n=i.response.data:n="Errore",l(F(n))})}}const ie=()=>{const c=C(),l=w(),{selected:i}=u(r=>r.negozi),{list:n,removeError:E,response:m}=u(r=>r.chiusureFiscali);x.useEffect(()=>{s.isEmpty(i)||l(G(i.id))},[i]);const I=r=>{l(B(r)),setTimeout(()=>{l(S())},1e3)};return o(p,{children:[e(d,{mb:3,children:e(D,{variant:"h3",children:"Chiusure Fiscali"})}),s.isEmpty(i)&&o(h,{variant:"outlined",severity:"error",children:[e(P,{children:"Devi selezionare un negozio!"}),"Per visualizzare le chiusure fiscali devi prima selezionare un negozio. Clicca sull'icona ",e($,{})," in alto a sinistra e selezionane uno!"]}),!s.isEmpty(i)&&s.isEmpty(n)&&e(h,{variant:"outlined",severity:"info",children:"Non sono presenti chiusure fiscali! Aggiungine una!"}),!s.isEmpty(i)&&!s.isEmpty(n)&&o(p,{children:[e(d,{mb:3,children:o(h,{severity:"info",variant:"outlined",children:["Stai visualizzando le chiusure fiscali del negozio ",i.nome]})}),e(d,{children:e(R,{children:e(d,{p:2,children:o(j,{children:[e(N,{children:o(g,{children:[e(a,{children:"Data"}),e(a,{children:"Totale"}),e(a,{children:"N.D.F"}),e(a,{sx:{width:50},align:"center",children:e(t,{children:e(y,{})})}),e(a,{sx:{width:50},align:"center",children:e(t,{children:e(v,{})})}),e(a,{sx:{width:50},align:"center",children:e(t,{children:e(f,{})})})]})}),e(H,{children:n==null?void 0:n.map(r=>o(g,{children:[e(a,{children:r.data}),o(a,{children:["€ ",r.totale]}),e(a,{children:r.numeroDocFisc}),e(a,{sx:{width:50},align:"center",children:e(t,{color:"info",onClick:()=>c(`dettagli/${r.id}`),children:e(y,{})})}),e(a,{sx:{width:50},align:"center",children:e(t,{color:"warning",onClick:()=>c(`modifica/${r.id}`),children:e(v,{})})}),e(a,{children:e(t,{color:"error",onClick:()=>I(r.id),children:e(f,{})})})]},r.id))})]})})})}),e(U,{open:!s.isEmpty(m),children:e(h,{severity:E?"error":"success",children:m})})]}),!s.isEmpty(i)&&e(b,{onClick:()=>c("aggiungi")})]})};export{ie as default};
