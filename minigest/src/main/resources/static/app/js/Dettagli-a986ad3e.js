import{ao as I,ap as R,aq as S,ar as B,as as C,i as P,at as V,R as w,l as a,j as r,B as j,V as $,d as i,F as N,au as O,av as k}from"./index-6a75a5de.js";import{f as q,e as H,B as n,T as Z,P as d}from"./hooks-8b6b3ce5.js";import{a as G,E as J}from"./index-db9e3c6a.js";import{g as K}from"./get-8c7062d6.js";import{T as h,c as m,a as l,b as s}from"./TableRow-c65b3546.js";import{S as L}from"./Snackbar-c915bc05.js";import{A as M}from"./Alert-863a23eb.js";import"./Grow-234efcfb.js";function Q(t){return async o=>{o(I()),G.delete(`${J.AZIENDE}/${t}`).then(c=>{o(R(c.data)),o(S(t)),o(B(t))}).catch(c=>{let e="Errore";c.response?e=c.response.data:e="Errore",o(C(e))})}}const se=()=>{var f,E,g,v,A,b;const t=P(),o=q(),{id:c}=V(),{dettagli:e,getting:y,getError:p,removing:T,removeError:x,removeResponse:u}=H(D=>D.aziende);w.useEffect(()=>{a.isEmpty(c)||o(K(c))},[]);const F=()=>{o(Q(c)),setTimeout(()=>{o(k()),t("/aziende")},2e3)};return y?r(j,{}):!a.isEmpty(p)||a.isEmpty(e)?r($,{message:p||"Errore di caricamento"}):i(N,{children:[r(n,{mb:3,children:r(Z,{variant:"h3",children:"Dettagli Azienda"})}),r(n,{mb:3,children:r(d,{children:r(n,{p:2,children:r(h,{children:i(m,{children:[i(l,{children:[r(s,{children:"Titolo"}),r(s,{children:(e==null?void 0:e.titolo)||"non fornito"})]}),i(l,{children:[r(s,{sx:{width:150},children:"Denominazione"}),r(s,{children:e==null?void 0:e.denominazione})]})]})})})})}),r(n,{mb:3,children:r(d,{children:r(n,{p:2,children:r(h,{children:i(m,{children:[i(l,{children:[r(s,{sx:{width:150},children:"Codice EORI"}),r(s,{children:(e==null?void 0:e.codiceEORI)||"non fornito"})]}),i(l,{children:[r(s,{children:"Codice Fiscale"}),r(s,{children:e==null?void 0:e.codiceFiscale})]}),i(l,{children:[r(s,{children:"Partita IVA"}),r(s,{children:(e==null?void 0:e.idFiscaleIVAPaese)+" "+(e==null?void 0:e.idFiscaleIVACodice)})]})]})})})})}),r(n,{children:r(d,{children:r(n,{p:2,children:r(h,{children:r(m,{children:i(l,{children:[r(s,{sx:{width:150},children:"Sede"}),i(s,{children:[(f=e==null?void 0:e.sede)==null?void 0:f.indirizzo,", ",(E=e==null?void 0:e.sede)==null?void 0:E.numeroCivico,","," ",(g=e==null?void 0:e.sede)==null?void 0:g.cap," ",(v=e==null?void 0:e.sede)==null?void 0:v.comune," (",(A=e==null?void 0:e.sede)==null?void 0:A.provincia,") - ",(b=e==null?void 0:e.sede)==null?void 0:b.nazione]})]})})})})})}),r(O,{handleEdit:()=>t(`/aziende/modifica/${c}`),handleDelete:F,loading:T}),r(L,{open:!a.isEmpty(u),autoHideDuration:500,children:r(M,{severity:x?"error":"success",children:u})})]})};export{se as default};
