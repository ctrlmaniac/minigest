import{i as x,l as a,d as r,F as m,j as e,R as y}from"./index-c637eda0.js";import{e as u,P as C,B as E,T as s,f as W}from"./hooks-edca5f41.js";import{A as g}from"./Alert-ab1cdef6.js";import{A as z}from"./AlertTitle-cb5e6684.js";import{I as B,p as b}from"./post-1cfe8edd.js";import{a as I,T as j}from"./TextField-3b54eb4a.js";import{L as A,a as D}from"./ListItemText-84745c3e.js";import{B as N}from"./Button-66e36a49.js";import{I as k}from"./IconBuildingStore-f72ececc.js";import{G as p}from"./Grid-570fa523.js";import"./index-450aab6b.js";import"./createReactComponent-23dfa4e0.js";const F=()=>{var d;const h=x(),{selected:l}=u(n=>n.aziende),{dettagli:i}=u(n=>n.account);let o=e(s,{children:"Caricamento in corso..."});return a.isEmpty(i==null?void 0:i.aziende)?o=e(s,{children:"Devi aggiungere un'azienda!"}):o=r(m,{children:[a.isEmpty(l)&&r(g,{severity:"info",variant:"outlined",children:[e(z,{children:"Devi selezionare un'azienda!"}),"Clicca su ",e(B,{})," per selezionarne una!"]}),e(I,{children:(d=i==null?void 0:i.aziende)==null?void 0:d.map(n=>e(A,{selected:!a.isEmpty(l)&&n.id===l.id,onClick:()=>h(`/aziende/dettagli/${n.id}`),children:e(D,{primary:n.denominazione})},n.id))})]}),e(C,{sx:{height:"100%"},children:r(E,{p:2,children:[e(s,{variant:"h6",gutterBottom:!0,children:"Le tue aziende"}),o]})})},G=()=>{const h=W(),l=x(),{selected:i}=u(t=>t.aziende),{selected:o}=u(t=>t.negozi),[d,n]=y.useState(""),[f,S]=y.useState(!0),T=t=>{const{value:v}=t.target;n(v),S(v.toString().length<1)},L=()=>{a.isEmpty(i)?alert("Errore!"):h(b({nome:d,azienda:i}))};let c=e(s,{children:"Caricamento in corso..."});return a.isEmpty(i)?c=r(g,{severity:"info",variant:"outlined",children:[e(z,{children:"Devi prima selezionare un'azienda!"}),"Clicca su ",e(B,{})," per selezionarne una!"]}):a.isEmpty(i.negozi)?c=r(m,{children:[e(s,{children:"Devi aggiungere almeno un negozio!"}),r(s,{children:["Il negozio verrà aggiunto a ",i.denominazione]}),e(j,{label:"Nome negozio",fullWidth:!0,value:d,error:f,required:!0,margin:"normal",onChange:T}),e(N,{fullWidth:!0,variant:"contained",disabled:f,onClick:L,children:"Salva"})]}):c=r(m,{children:[a.isEmpty(o)&&r(g,{severity:"info",variant:"outlined",children:[e(z,{children:"Devi selezionare un negozio!"}),"Clicca su ",e(k,{})," per selezionarne una!"]}),e(I,{children:i.negozi.map(t=>e(A,{selected:!a.isEmpty(o)&&t.id===o.id,onClick:()=>l(`/negozi/dettagli/${t.id}`),children:e(D,{primary:t.nome})},t.id))})]}),e(C,{sx:{height:"100%"},children:r(E,{p:2,children:[e(s,{variant:"h6",gutterBottom:!0,children:"I tuoi negozi"}),c]})})},V=()=>e(m,{children:r(p,{container:!0,direction:"row",justifyContent:"space-around",alignItems:"stretch",spacing:2,children:[e(p,{item:!0,xs:12,sm:6,children:e(G,{})}),e(p,{item:!0,xs:12,sm:6,children:e(F,{})})]})});export{V as default};