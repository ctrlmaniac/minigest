import{aF as R,aG as j,aH as G,i as H,R as p,aI as N,l,d as a,F,j as e,a9 as Y,aJ as M}from"./index-8d810eb5.js";import{a as U,E as W,I as c}from"./index-369028e4.js";import{f as q,e as T,B as d,T as J,P as b}from"./hooks-29c1883f.js";import{r as L}from"./remove-5e3713fe.js";import{A as g}from"./Alert-ac51448d.js";import{A as Q}from"./AlertTitle-a40df185.js";import{I as V}from"./IconBuildingStore-342c9c8c.js";import{G as v}from"./Grid-a6d2df67.js";import{T as C}from"./TextField-19a3feee.js";import{T as _,b as w,c as r,a as K}from"./TableRow-7bd9e227.js";import{T as O}from"./TableHead-49d1eeb5.js";import{I as z}from"./IconFile-3089cb0b.js";import{I as D}from"./IconPencil-117db179.js";import{I as A}from"./IconTrash-77e3418a.js";import{S as X}from"./Snackbar-ee143c36.js";import"./createReactComponent-fd9b34e9.js";function Z(m){return async o=>{o(R()),U.get(`${W.CHIUSURE_FISCALI}?${m}`).then(i=>{o(j(i.data))}).catch(i=>{let s="Errore";i.response?s=i.response.data:s="Errore",o(G(s))})}}const fe=()=>{const m=H(),o=q(),{selected:i}=T(n=>n.negozi),{list:s,removeError:P,response:y}=T(n=>n.chiusureFiscali),[t,$]=p.useState({anno:new Date().getFullYear(),mese:new Date().getMonth()+1}),[h,I]=p.useState({anno:!1,mese:!1}),[S,k]=N({anno:t.anno.toString(),mese:t.mese.toString()});p.useEffect(()=>{l.isEmpty(i)||o(Z(`negozio=${i.id}&${S.toString()}`))},[i,S]);const E=n=>{const{name:f,value:x}=n.target;$({...t,[f]:x});const u=parseInt(x);f==="anno"&&I({...h,anno:u<1970||u>new Date().getFullYear()}),f==="mese"&&I({...h,mese:u<1||u>12})};p.useEffect(()=>{k({anno:t.anno.toString(),mese:t.mese.toString()})},[t]);const B=n=>{o(L(n)),setTimeout(()=>{o(M())},1e3)};return a(F,{children:[e(d,{mb:3,children:e(J,{variant:"h3",children:"Chiusure Fiscali"})}),l.isEmpty(i)&&a(g,{variant:"outlined",severity:"error",children:[e(Q,{children:"Devi selezionare un negozio!"}),"Per visualizzare le chiusure fiscali devi prima selezionare un negozio. Clicca sull'icona ",e(V,{})," in alto a sinistra e selezionane uno!"]}),!l.isEmpty(i)&&a(F,{children:[e(d,{mb:3,children:a(g,{severity:"info",variant:"outlined",children:["Stai visualizzando le chiusure fiscali del negozio ",i.nome]})}),e(d,{mb:3,children:e(b,{children:e(d,{p:2,children:a(v,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:2,children:[e(v,{item:!0,xs:12,sm:6,children:e(C,{label:"Anno",name:"anno",value:t.anno,error:h.anno,onChange:E,type:"number",inputProps:{step:1,min:1970,max:new Date().getFullYear()},fullWidth:!0})}),e(v,{item:!0,xs:12,sm:6,children:e(C,{label:"Mese",name:"mese",value:t.mese,error:h.mese,onChange:E,type:"number",inputProps:{step:1,min:1,max:12},fullWidth:!0})})]})})})}),l.isEmpty(s)?e(g,{variant:"outlined",severity:"info",children:"Non sono presenti chiusure fiscali! Aggiungine una!"}):e(d,{children:e(b,{children:e(d,{p:2,children:a(_,{children:[e(O,{children:a(w,{children:[e(r,{children:"Data"}),e(r,{children:"Totale"}),e(r,{children:"N.D.F"}),e(r,{sx:{width:50},align:"center",children:e(c,{children:e(z,{})})}),e(r,{sx:{width:50},align:"center",children:e(c,{children:e(D,{})})}),e(r,{sx:{width:50},align:"center",children:e(c,{children:e(A,{})})})]})}),e(K,{children:s==null?void 0:s.map(n=>a(w,{children:[e(r,{children:n.data}),a(r,{children:["€ ",n.totale]}),e(r,{children:n.numeroDocFisc}),e(r,{sx:{width:50},align:"center",children:e(c,{color:"info",onClick:()=>m(`dettagli/${n.id}`),children:e(z,{})})}),e(r,{sx:{width:50},align:"center",children:e(c,{color:"warning",onClick:()=>m(`modifica/${n.id}`),children:e(D,{})})}),e(r,{children:e(c,{color:"error",onClick:()=>B(n.id),children:e(A,{})})})]},n.id))})]})})})}),e(X,{open:!l.isEmpty(y),children:e(g,{severity:P?"error":"success",children:y})})]}),!l.isEmpty(i)&&e(Y,{onClick:()=>m("aggiungi")})]})};export{fe as default};
