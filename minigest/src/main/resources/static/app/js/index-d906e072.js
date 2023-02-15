import{aC as H,aD as J,aE as K,aF as V,aG as q,aH as Q,aI as U,R as d,d as r,F as N,j as e,l as s,af as X,aJ as I,aK as Y}from"./index-4508a384.js";import{a as M,E as R,I as A}from"./index-638748d8.js";import{f as _,e as D,B as p,T as ee,P as ae}from"./hooks-feb29949.js";import{p as oe}from"./post-f9da8d83.js";import{A as m}from"./Alert-79195361.js";import{A as x}from"./AlertTitle-025f351d.js";import{I as te}from"./IconBuildingWarehouse-6e7a8085.js";import{T as ne,c as ie,a as re,b as h}from"./TableRow-89215d33.js";import{I as se}from"./IconPencil-042a6c5b.js";import{I as le}from"./IconTrash-faf9702e.js";import{a as B,b as k}from"./DialogContent-b1fa8429.js";import{T as F}from"./TextField-0bc7661e.js";import{D as P}from"./DialogActions-690afbfc.js";import{B as W}from"./Button-d9755764.js";import{L as w}from"./LinearProgress-29fadb87.js";import{S as ce}from"./Snackbar-616aa609.js";import"./createReactComponent-3ef021e5.js";import"./Grow-e4ee19b9.js";import"./useFormControl-3c13f0cf.js";function de(t){return async o=>{o(H()),M.delete(`${R.NEGOZI}/${t}`).then(n=>{o(J(n.data)),o(K(t))}).catch(n=>{let i="Errore";n.response?i=n.response.data:i="Errore",o(V(i))})}}function me(t){return async o=>{o(q()),M.put(`${R.NEGOZI}/${t.id}`,t).then(n=>{o(Q(n.data))}).catch(n=>{let i="Errore";n.response?i=n.response.data:i="Errore",o(U(i))})}}const Fe=()=>{var b;const t=_(),{selected:o}=D(a=>a.aziende),{putting:n,putError:i,removeError:ue,posting:$,response:f}=D(a=>a.negozi),[g,v]=d.useState(!1),[z,E]=d.useState(!1),[l,u]=d.useState({id:void 0,nome:""}),[y,S]=d.useState(!1),C=a=>{u({...l,nome:a.target.value}),S(a.target.value.toString().length<1)},j=a=>{t(de(a)),setTimeout(()=>{t(I())},2e3)},G=a=>{u({...a}),v(!0)},L=()=>{u({id:void 0,nome:""}),S(!1)},c=()=>{v(!1),E(!1),L()},T=()=>{t(me(l)),c(),setTimeout(()=>{t(I()),t(Y(l))},1e3)},O=a=>{t(oe(a)),c()},Z=()=>{if(z){const a={azienda:o,nome:l.nome};O(a)}else g&&T()};return r(N,{children:[e(p,{mb:3,children:e(ee,{variant:"h3",gutterBottom:!0,children:"Negozi"})}),s.isEmpty(o)&&r(m,{variant:"outlined",severity:"error",children:[e(x,{children:"Non hai selezionato nessuna azienda!"}),"Prima di visualizzare la lista dei negozi, seleziona l'azienda a cui appartengono. Clicca su ",e(te,{})," in alto a destra per selezionare l'azienda!"]}),!s.isEmpty(o)&&s.isEmpty(o.negozi)&&r(m,{variant:"outlined",severity:"info",children:[e(x,{children:"Non hai nessun negozio"}),"Aggiungine uno!"]}),!s.isEmpty(o)&&!s.isEmpty(o.negozi)&&r(N,{children:[e(p,{mb:3,children:r(m,{variant:"outlined",severity:"info",children:["Stai visualizzando i negozi de ",o.denominazione]})}),e(ae,{children:e(p,{p:2,children:e(ne,{children:e(ie,{children:(b=o.negozi)==null?void 0:b.map(a=>r(re,{children:[e(h,{children:a.nome}),e(h,{sx:{width:50},align:"center",children:e(A,{color:"warning",onClick:()=>G(a),children:e(se,{})})}),e(h,{sx:{width:50},align:"center",onClick:()=>j(a.id),children:e(A,{color:"error",children:e(le,{})})})]},a.id))})})})})]}),r(B,{open:g,onClose:c,children:[e(k,{children:e(F,{fullWidth:!0,label:"Nome",value:l.nome,error:y,onChange:C})}),e(P,{children:e(W,{fullWidth:!0,variant:"contained",onClick:T,children:"salva"})}),n&&e(w,{})]}),r(B,{open:z,onClose:c,children:[e(k,{children:e(F,{fullWidth:!0,label:"Nome",value:l.nome,error:y,onChange:C})}),e(P,{children:e(W,{fullWidth:!0,variant:"contained",onClick:Z,children:"salva"})}),n&&e(w,{})]}),e(ce,{open:!s.isEmpty(f),children:e(m,{severity:"info",children:f})}),!s.isEmpty(o)&&e(X,{onClick:()=>E(!0),loading:$})]})};export{Fe as default};
