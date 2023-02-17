import{bq as E,br as F,bs as w,R as b,j as e,F as y,b as r,l as C}from"./index-d882999b.js";import{a as D,E as R}from"./index-26de8948.js";import{e as S,d as V,B as s,T as m,P as p}from"./hooks-15d50f7a.js";import{G as g}from"./Grid-b855ca7a.js";import{T as B}from"./TextField-3f0953ff.js";import{A as j}from"./Alert-37711bff.js";import{T as f,c as T,a as o,b as i}from"./TableRow-d1dbbd36.js";import{T as A}from"./TableHead-90aebb17.js";import"./Grow-59285a38.js";import"./useFormControl-55db2a8e.js";import"./Portal-cac5f17a.js";import"./useControlled-de568f22.js";function q(u){return async n=>{n(E()),D.get(`${R.BILANCIO}?${u}`).then(l=>{n(F(l.data))}).catch(l=>{let c="Errore";l.response?c=l.response.data:c="Errore",n(w(c))})}}const k=()=>{const u=S(),{bilancio:n}=V(t=>t.bilancio),[l,c]=b.useState({anno:new Date().getFullYear(),mese:new Date().getMonth()+1}),[d,I]=b.useState({anno:!1,mese:!1}),v=t=>{const{name:a,value:x}=t.target;c({...l,[a]:x});const h=parseInt(x);a==="anno"&&I({...d,anno:h<1970||h>new Date().getFullYear()}),a==="mese"&&I({...d,mese:h<1||h>12})};return b.useEffect(()=>{const t=`anno=${l.anno}&mese=${l.mese}`;u(q(t))},[l]),e(y,{children:[r(s,{mb:3,children:r(m,{variant:"h3",children:"Bilancio"})}),r(s,{mb:3,children:r(p,{children:r(s,{p:2,children:e(g,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:2,children:[r(g,{item:!0,xs:12,sm:6,children:r(B,{label:"Anno",name:"anno",value:l.anno,error:d.anno,onChange:v,type:"number",inputProps:{step:1,min:1970,max:new Date().getFullYear()},fullWidth:!0})}),r(g,{item:!0,xs:12,sm:6,children:r(B,{label:"Mese",name:"mese",value:l.mese,error:d.mese,onChange:v,type:"number",inputProps:{step:1,min:1,max:12},fullWidth:!0})})]})})})}),C.isEmpty(n)?r(j,{severity:"info",variant:"outlined",children:"Non è disponibile il bilancio per il periodo da te selezionato!"}):e(y,{children:[r(s,{mb:3,children:r(p,{children:e(s,{p:2,children:[r(m,{variant:"h6",gutterBottom:!0,children:"Bilancio"}),r(f,{children:e(T,{children:[e(o,{children:[r(i,{children:"Utile"}),e(i,{align:"right",children:[n.utile," €"]})]}),e(o,{children:[r(i,{children:"Imposta da Versare"}),e(i,{align:"right",children:[n.impostaDaVersare," €"]})]})]})})]})})}),r(s,{mb:3,children:r(p,{children:e(s,{p:2,children:[r(m,{variant:"h6",gutterBottom:!0,children:"Entrate"}),e(f,{children:[r(A,{children:e(o,{children:[r(i,{}),r(i,{children:"Riepilogo"}),n.entrate.reparti.map((t,a)=>e(i,{children:["IVA ",t.aliquota," %"]},a))]})}),e(T,{children:[e(o,{children:[r(i,{children:"Totale"}),e(i,{children:[n.entrate.totale," €"]}),n.entrate.reparti.map((t,a)=>e(i,{children:[t.totale," €"]},a))]}),e(o,{children:[r(i,{children:"Imponibile"}),e(i,{children:[n.entrate.imponibile," €"]}),n.entrate.reparti.map((t,a)=>e(i,{children:[t.imponibile," €"]},a))]}),e(o,{children:[r(i,{children:"Imposta"}),e(i,{children:[n.entrate.imposta," €"]}),n.entrate.reparti.map((t,a)=>e(i,{children:[t.imposta," €"]},a))]})]})]})]})})}),r(s,{mb:3,children:r(p,{children:e(s,{p:2,children:[r(m,{variant:"h6",gutterBottom:!0,children:"Uscite"}),e(f,{children:[r(A,{children:e(o,{children:[r(i,{}),r(i,{children:"Riepilogo"}),n.uscite.reparti.map((t,a)=>e(i,{children:["IVA ",t.aliquota," %"]},a))]})}),e(T,{children:[e(o,{children:[r(i,{children:"Totale"}),e(i,{children:[n.uscite.totale," €"]}),n.uscite.reparti.map((t,a)=>e(i,{children:[t.totale," €"]},a))]}),e(o,{children:[r(i,{children:"Imponibile"}),e(i,{children:[n.uscite.imponibile," €"]}),n.uscite.reparti.map((t,a)=>e(i,{children:[t.imponibile," €"]},a))]}),e(o,{children:[r(i,{children:"Imposta"}),e(i,{children:[n.uscite.imposta," €"]}),n.uscite.reparti.map((t,a)=>e(i,{children:[t.imposta," €"]},a))]})]})]})]})})})]})]})};export{k as default};
